import * as THREE from 'three';
import { TransmittanceLUT } from '../atmosphere/TransmittanceLUT.js';
import { SkyViewLUT } from '../atmosphere/SkyViewLUT.js';
import { SkyBackdrop } from '../atmosphere/SkyBackdrop.js';
import { PLANET } from '../atmosphere/constants.js';
import { FlyCameraDirector } from '../camera/FlyCameraDirector.js';
import { generateIsland } from '../gen/terrain.js';
import { buildIslandMesh } from '../voxel/mesher.js';
import { Sea } from '../water/Sea.js';
import { makeTree } from '../flora/trees.js';
import { mulberry32 } from '../gen/noise.js';
import { SEASON } from '../gen/seasons.js';
import { MAT } from '../gen/palette.js';

// Atmosphere lives in km on a 6371 km planet; the island lives in metres at
// ~1 km scale. We feed the sky a FIXED observer just above the surface (the
// island is negligible against a 100 km shell) and the camera's rotation for
// ray direction. Fog blends the bounded sea edge into the horizon (PLAN §9).
const OBSERVER = new THREE.Vector3(0, PLANET.groundRadius + 0.35, 0);

export class Scene {
  constructor(container, store) {
    this.container = container;
    this.store = store;
    this.elapsed = 0;
    this.treeCount = 0;
    this._terrainDirty = false;
    this._regenTimer = null;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = store.get('render.exposure');
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();

    const fov = store.get('render.fov');
    this.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.5, 32000);
    this.camera.position.set(420, 230, 480);
    this.camera.lookAt(0, store.get('water.seaLevel') + 30, 0);

    // Atmosphere.
    this.transmittanceLUT = new TransmittanceLUT();
    this.skyViewLUT = new SkyViewLUT();
    this.skyViewLUT.setTransmittanceLUT(this.transmittanceLUT.texture);
    this.skyViewLUT.setObserverPosition(OBSERVER);
    this.backdrop = new SkyBackdrop();
    this.backdrop.setObserver(OBSERVER);
    this.backdrop.setLUTs(this.skyViewLUT.texture, this.transmittanceLUT.texture);
    this.scene.add(this.backdrop.mesh);

    // Lights — directional sun + hemisphere fill (the §15 faceted-voxel
    // mitigation: flat normals stay readable under analytic sky light).
    this.sun = new THREE.DirectionalLight(0xfff2dc, 2.4);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 2.2;          // chunky flat-shaded voxels
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);
    this.hemi = new THREE.HemisphereLight(0xbfe3ff, 0x5a4630, 0.34);
    this.scene.add(this.hemi);
    this.ambient = new THREE.AmbientLight(0xffffff, 0.05);
    this.scene.add(this.ambient);

    this.scene.fog = new THREE.FogExp2(0xbcd4d6, store.get('render.fogDensity'));

    this.islandGroup = new THREE.Group();
    this.treeGroup = new THREE.Group();
    this.scene.add(this.islandGroup);
    this.scene.add(this.treeGroup);
    this.sea = null;

    this.camDirector = new FlyCameraDirector(this.camera, this.renderer.domElement);

    this._applyAll();
    this.regenerate();

    store.subscribe((evt) => this._onParam(evt));
    window.addEventListener('resize', () => this._onResize());
    this.clock = new THREE.Clock();
  }

  // ---- generation ----
  regenerate() {
    // An explicit regen supersedes any debounced one — prevents a second,
    // late rebuild (the "delayed fade redraw" / double island).
    if (this._regenTimer) { clearTimeout(this._regenTimer); this._regenTimer = null; }
    const s = this.store;
    const opts = {
      seed: s.get('voxel.seed') | 0,
      radius: s.get('island.radius'),
      shape: s.get('island.shape') | 0,
      resolution: s.get('voxel.resolution') | 0,
      lowland: s.get('island.lowland'),
      massif: s.get('island.massif'),
      terraceStep: s.get('voxel.terraceStep'),
      warp: s.get('island.warp'),
      ridge: s.get('island.ridge'),
      beachWidth: s.get('island.beachWidth'),
      valleyDepth: s.get('island.valleyDepth'),
      valleyWidth: s.get('island.valleyWidth'),
      seaLevel: s.get('water.seaLevel'),
      floorDepth: s.get('water.floorDepth'),
      seasons: {
        sweepDeg: s.get('seasons.sweepDeg'),
        summerEnd: s.get('seasons.summerEnd'),
        autumnEnd: s.get('seasons.autumnEnd'),
        coniferEnd: s.get('seasons.coniferEnd'),
        borderWarp: s.get('seasons.borderWarp'),
      },
    };
    opts.maxHeight = opts.lowland + opts.massif;   // derived; used by shadow cam + tree planting

    const vol = generateIsland(opts);
    this.vol = vol;

    // Size the shadow camera to the new island (sun sits at dir·6000).
    const r = opts.radius * 1.4;
    const sc = this.sun.shadow.camera;
    sc.left = -r; sc.right = r; sc.top = r; sc.bottom = -r;
    sc.near = Math.max(50, 6000 - r - opts.maxHeight - 600);
    sc.far = 6000 + r + 600;
    sc.updateProjectionMatrix();

    // Island mesh.
    this.islandGroup.clear();
    if (this._islandMesh) this._islandMesh.geometry.dispose();
    this._islandMesh = buildIslandMesh(vol, opts.seed);
    this.islandGroup.add(this._islandMesh);

    // Sea (rebuilt sized to the new world).
    if (this.sea) this.scene.remove(this.sea.group);
    this.sea = new Sea({
      worldSize: vol.worldSize,
      radius: opts.radius,
      seaLevel: opts.seaLevel,
      causticScale: s.get('water.causticScale'),
      causticIntensity: s.get('water.causticIntensity'),
      shoreGlow: s.get('water.shoreGlow'),
    });
    this.scene.add(this.sea.group);

    this._plantTrees(vol, opts);
  }

  _plantTrees(vol, opts) {
    this.treeGroup.clear();
    const rand = mulberry32((opts.seed * 2654435761) >>> 0);
    const kindForCell = (i, j) => {
      const idx = vol.idx(i, j);
      const season = vol.season[idx];
      const m = vol.material[idx];
      const y = vol.heightVox[idx] * vol.vstep;
      if (m === MAT.SAND && season <= SEASON.AUTUMN && rand() > 0.4) return 'palm';
      if (season === SEASON.WINTER) return rand() > 0.55 ? 'conifer' : 'winter';
      if (season === SEASON.CONIFER) return 'conifer';
      if (season === SEASON.AUTUMN) return 'autumn';
      return rand() > 0.18 ? 'summer' : 'palm';
    };

    // Guarantee one of each, then scatter.
    const want = ['palm', 'summer', 'autumn', 'conifer', 'winter'];
    let placed = 0;
    const target = 90;
    let guard = 0;
    while (placed < target && guard < target * 40) {
      guard++;
      const i = (rand() * vol.res) | 0;
      const j = (rand() * vol.res) | 0;
      const idx = vol.idx(i, j);
      if (!vol.land[idx]) continue;
      const m = vol.material[idx];
      if (m === MAT.ROCK || m === MAT.SEAFLOOR) continue;
      const y = vol.heightVox[idx] * vol.vstep;
      if (y < opts.seaLevel + 0.4 || y > opts.seaLevel + opts.maxHeight * 0.82) continue;
      const kind = placed < want.length ? want[placed] : kindForCell(i, j);
      const tree = makeTree(kind, ((rand() * 1e9) | 0) ^ idx);
      const [wx, wz] = vol.cellToWorld(i, j);
      const sc = 0.85 + rand() * 0.5;
      tree.position.set(wx, y - 0.5, wz);
      tree.scale.setScalar(sc);
      tree.rotation.y = rand() * Math.PI * 2;
      this.treeGroup.add(tree);
      placed++;
    }
    this.treeCount = placed;
  }

  // ---- params ----
  _sunDir() {
    const el = THREE.MathUtils.degToRad(this.store.get('sun.elevationDeg'));
    const az = THREE.MathUtils.degToRad(this.store.get('sun.azimuthDeg'));
    const ce = Math.cos(el);
    return new THREE.Vector3(ce * Math.cos(az), Math.sin(el), ce * Math.sin(az)).normalize();
  }

  _applyAll() {
    const s = this.store;
    const dir = this._sunDir();
    const intensity = s.get('sun.intensity');
    this.skyViewLUT.setSunDir(dir);
    this.skyViewLUT.setSunIntensity(intensity);
    this.backdrop.setSun({ direction: dir, intensity });
    // ---- island lighting driven by the sun (NOT the atmosphere code) ----
    // The voxel island relights with the sky: warm + low-key at sunset,
    // bright + neutral at noon, warm-dark fill on the shaded side (never the
    // dead pale-blue wash). Drag the existing sun slider → island follows.
    const elDeg = s.get('sun.elevationDeg');
    const day = THREE.MathUtils.clamp((elDeg + 6) / 28, 0, 1);   // dusk→noon
    const day2 = day * day * (3 - 2 * day);
    const slider = THREE.MathUtils.clamp(intensity / 22, 0.45, 2.2);

    this.sun.position.copy(dir).multiplyScalar(6000);
    this.sun.target.position.set(0, 0, 0);
    this.sun.color.set('#ff7a36').lerp(new THREE.Color('#fff3df'), day2);
    this.sun.intensity = THREE.MathUtils.lerp(0.5, 3.1, day2) * slider;

    this.hemi.color.set('#e8a86a').lerp(new THREE.Color('#a9c8e6'), day2);
    this.hemi.groundColor.set('#3a2a1c').lerp(new THREE.Color('#60503a'), day2);
    this.hemi.intensity = THREE.MathUtils.lerp(0.30, 0.60, day2);
    this.ambient.intensity = THREE.MathUtils.lerp(0.03, 0.09, day2);

    // Analytic fallback fog colour; the real one is sampled from the actual
    // sky-view LUT horizon each time the sky changes (see _syncHorizonFog) so
    // the bounded sea dissolves EXACTLY into the sunset — no mismatched band.
    this.scene.fog.color.set('#d99250').lerp(new THREE.Color('#acc6cf'), day2);
    this._skyDirty = true;

    this.transmittanceLUT.setAtmosphere({
      rayleighMul: s.get('atmosphere.rayleighMul'),
      mieBeta: s.get('atmosphere.mieBeta'),
      ozoneMul: s.get('atmosphere.ozoneMul'),
    });
    this.skyViewLUT.setAtmosphere({
      rayleighMul: s.get('atmosphere.rayleighMul'),
      mieBeta: s.get('atmosphere.mieBeta'),
      ozoneMul: s.get('atmosphere.ozoneMul'),
    });
    this.skyViewLUT.setMieG(s.get('atmosphere.mieG'));

    const hw = s.get('render.horizonWarp');
    this.skyViewLUT.setHorizonWarp(hw);
    this.backdrop.setHorizonWarp(hw);

    this.renderer.toneMappingExposure = s.get('render.exposure');
    this.camera.fov = s.get('render.fov');
    this.camera.updateProjectionMatrix();
    this.scene.fog.density = s.get('render.fogDensity');
  }

  _onParam(evt) {
    const p = evt.path;
    if (p === '*' || p.startsWith('sun.') || p.startsWith('atmosphere.') || p.startsWith('render.')) {
      this._applyAll();
    }
    if (p === '*' || p.startsWith('island.') || p.startsWith('voxel.') || p.startsWith('seasons.') ||
        p === 'water.seaLevel' || p === 'water.floorDepth') {
      this._scheduleRegen();
    }
    if (this.sea) {
      if (p === '*' || p === 'water.causticScale' || p === 'water.causticIntensity') {
        this.sea.setCaustic(this.store.get('water.causticScale'), this.store.get('water.causticIntensity'));
      }
      if (p === '*' || p === 'water.shoreGlow') {
        this.sea.setShoreGlow(this.store.get('water.shoreGlow'));
      }
    }
  }

  _scheduleRegen() {
    if (this._regenTimer) clearTimeout(this._regenTimer);
    this._regenTimer = setTimeout(() => { this.regenerate(); this._regenTimer = null; }, 260);
  }

  _onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  getDebugInfo() {
    const c = this.camera.position;
    return {
      name: 'Isometric Island',
      camera: [c.x.toFixed(1), c.y.toFixed(1), c.z.toFixed(1)],
      triangles: this.renderer.info.render.triangles,
      drawCalls: this.renderer.info.render.calls,
      trees: this.treeCount,
      worldSize: this.vol?.worldSize,
      seaLevel: this.store.get('water.seaLevel'),
      sunElevationDeg: this.store.get('sun.elevationDeg'),
      seed: this.store.get('voxel.seed'),
    };
  }

  // Sample the ACTUAL sky-view LUT horizon row and drive the fog colour from
  // it, so the distant sea fogs into the exact sunset colour the user sees —
  // resolving "main square vs horizon". Reads the LUT's OUTPUT only; the
  // atmosphere code is never modified. Throttled to sky changes.
  _syncHorizonFog() {
    try {
      const lut = this.skyViewLUT;
      const w = lut.width, h = lut.height;
      const row = Math.max(0, Math.floor(h * 0.5) - 1);   // v≈0.5 = horizon
      // The LUT target is HalfFloatType → must read into a Uint16Array and
      // decode the halves to float.
      if (!this._fogBuf || this._fogBuf.length !== w * 4) this._fogBuf = new Uint16Array(w * 4);
      this.renderer.readRenderTargetPixels(lut.target, 0, row, w, 1, this._fogBuf);
      const hf = THREE.DataUtils.fromHalfFloat;
      let r = 0, g = 0, b = 0;
      for (let i = 0; i < w; i++) { r += hf(this._fogBuf[i * 4]); g += hf(this._fogBuf[i * 4 + 1]); b += hf(this._fogBuf[i * 4 + 2]); }
      r /= w; g /= w; b /= w;
      if (!(r >= 0) || !(g >= 0) || !(b >= 0)) return;     // bail if readback gave garbage

      const exp = this.renderer.toneMappingExposure;
      const aces = (x) => {
        x = Math.max(0, x * exp);
        return Math.min(1, Math.max(0, (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14)));
      };
      this.scene.fog.color.setRGB(aces(r), aces(g), aces(b), THREE.SRGBColorSpace);
      this.sea?.setHorizon(this.scene.fog.color);     // ocean rim → live sunset
    } catch {
      /* HalfFloat readback unsupported on this driver — analytic fog stands */
    }
  }

  // ---- loop ----
  start() {
    const tick = () => {
      this._raf = requestAnimationFrame(tick);
      const dt = Math.min(this.clock.getDelta(), 1 / 20);
      this.elapsed += dt;

      this.camDirector.update(dt);
      this.sea?.update(this.elapsed);

      this.camera.updateMatrixWorld();
      this.backdrop.updateCamera(this.camera);

      this.transmittanceLUT.render(this.renderer);
      this.skyViewLUT.render(this.renderer);
      if (this._skyDirty) { this._syncHorizonFog(); this._skyDirty = false; }

      this.renderer.render(this.scene, this.camera);
    };
    tick();
  }
}
