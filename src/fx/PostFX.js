// Shared post-FX plumbing — built ONCE so bloom (main · lighting), aerial
// haze (main · lighting) and god rays (normal god-ray section) hang off a
// single offscreen pass. Mobile budget (MacBook / iPhone):
// when EVERY effect is off this bypasses entirely and renders straight to
// screen — byte-identical golden path, zero extra targets/passes. LDR
// screen-space fakes, no MRT.
//
// God rays — downsample → march → upsample (the lab "mission"): the radial
// light-shaft march (GPU Gems 3 ch.13 / Crytek) no longer runs in the
// full-res composite. It runs ONCE into a low-res `godRT` (resScale of the
// drawing buffer), then the composite UPSAMPLES it. Cheaper, and — kept
// deliberately RAW (no blur) — it makes the cheap screen-space scatter
// legible: drop `resScale`/`samples` and the banding/echo structure shows so
// it can actually be tuned. `sharp` snaps the upsample to the low-res texel
// grid to expose the raw blocks. `source` blends the old raw-scene scatter
// with a depth-derived sky/occluder mask, so the lab can make actual shafts
// instead of scattering a post-tonemap wash. The "ground mask" still fades ray
// *sources* below the sun so the bright water sun-glint doesn't seed a halo.

import * as THREE from 'three';

const QUAD = new THREE.PlaneGeometry(2, 2);
const ORTHO = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

// Shared god-ray march snippet (used by the low-res god pass). vUv is full-
// screen [0,1]; it reads the FULL-res scene colour but is invoked once per
// low-res god pixel — that is the "downsample".
const GOD_MARCH = `
  vec3 godMarch(vec2 vUv) {
    if (uGod < 0.001 || uSunVis <= 0.001) return vec3(0.0);
    vec2 rayUV = clamp(uSunUV, vec2(0.0), vec2(1.0));
    vec2 delta = (rayUV - vUv) / float(uGodN) * uGodDensity;
    vec2 uv = vUv; float decay = 1.0; vec3 acc = vec3(0.0);
    for (int i = 0; i < 48; i++) {
      if (i >= uGodN) break;
      uv += delta;
      float inUv = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
      vec3 s = texture2D(tScene, uv).rgb;
      float lum = max(max(s.r, s.g), s.b);
      float rawSrc = max(0.0, lum - uGodThr) * inUv;
      float sky = smoothstep(0.999, 1.0, texture2D(tDepth, uv).x);
      float nearSun = exp(-dot(uv - rayUV, uv - rayUV) * 5.5);
      float cleanSrc = sky * nearSun * smoothstep(max(0.0, uGodThr - 0.28), 1.0, lum) * inUv;
      float gm = mix(1.0, smoothstep(rayUV.y - 0.30, rayUV.y + 0.04, uv.y), uGodHorizon);
      acc += mix(s * rawSrc, vec3(cleanSrc), uGodSource) * gm * decay * uGodW;
      decay *= uGodDecay;
    }
    acc /= float(uGodN);
    float radial = smoothstep(uGodRadius, 0.0, distance(vUv, rayUV));
    vec3 tint = mix(uHazeColor, uSunCol, uGodTint);
    float a = (acc.r + acc.g + acc.b) * 0.3333;
    return tint * a * uGodExp * uGod * radial * uSunVis;
  }`;

const GOD_UNIFORMS = () => ({
  tScene: { value: null },
  tDepth: { value: null },
  uSunUV: { value: new THREE.Vector2(0.5, 0.7) }, uSunVis: { value: 0 },
  uHazeColor: { value: new THREE.Color('#bcd4d6') },
  uSunCol: { value: new THREE.Color('#ffd9a0') },
  uGod: { value: 0 },
  uGodN: { value: 16 },
  uGodDensity: { value: 0.6 },
  uGodDecay: { value: 0.93 },
  uGodW: { value: 0.6 },
  uGodExp: { value: 0.9 },
  uGodThr: { value: 0.62 },
  uGodHorizon: { value: 0.5 },
  uGodRadius: { value: 1.1 },
  uGodTint: { value: 0.5 },
  uGodSource: { value: 0.0 },
});

export class PostFX {
  constructor(renderer) {
    this.renderer = renderer;
    const dpr = renderer.getPixelRatio();
    const w = Math.max(2, (window.innerWidth * dpr) | 0);
    const h = Math.max(2, (window.innerHeight * dpr) | 0);

    this.sceneRT = new THREE.WebGLRenderTarget(w, h, {
      depthBuffer: true, stencilBuffer: false, type: THREE.HalfFloatType,
      magFilter: THREE.LinearFilter, minFilter: THREE.LinearFilter,
    });
    this.sceneRT.depthTexture = new THREE.DepthTexture(w, h);
    this.sceneRT.depthTexture.format = THREE.DepthFormat;
    this.sceneRT.depthTexture.type = THREE.UnsignedIntType;
    // Render targets hold linear scene radiance. The final composite applies
    // the renderer's tone mapping/output transform exactly once.
    this.sceneRT.texture.colorSpace = THREE.LinearSRGBColorSpace;
    this.bloomRT = new THREE.WebGLRenderTarget((w / 4) | 0, (h / 4) | 0, {
      depthBuffer: false, stencilBuffer: false, type: THREE.HalfFloatType,
      magFilter: THREE.LinearFilter, minFilter: THREE.LinearFilter,
    });
    this.bloomRT.texture.colorSpace = THREE.LinearSRGBColorSpace;
    // Low-res god-ray target. LinearFilter ⇒ a free bilinear upsample; the
    // `sharp` knob in the composite can snap back to the raw texel grid.
    this._godScale = 0.25;
    this.godRT = new THREE.WebGLRenderTarget(
      Math.max(1, (w * this._godScale) | 0), Math.max(1, (h * this._godScale) | 0), {
        depthBuffer: false, stencilBuffer: false, type: THREE.HalfFloatType,
        magFilter: THREE.LinearFilter, minFilter: THREE.LinearFilter,
      });
    this.godRT.texture.colorSpace = THREE.LinearSRGBColorSpace;

    this.brightMat = new THREE.ShaderMaterial({
      uniforms: { tScene: { value: null }, uTexel: { value: new THREE.Vector2() }, uThresh: { value: 0.72 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }',
      fragmentShader: `
        varying vec2 vUv; uniform sampler2D tScene; uniform vec2 uTexel; uniform float uThresh;
        vec3 bp(vec2 o){ vec3 c=texture2D(tScene,vUv+o).rgb; float l=max(max(c.r,c.g),c.b);
          return c*smoothstep(uThresh,1.0,l); }
        void main(){
          vec3 s = bp(vec2(0.0));
          s += bp(vec2( uTexel.x,0.0))+bp(vec2(-uTexel.x,0.0));
          s += bp(vec2(0.0, uTexel.y))+bp(vec2(0.0,-uTexel.y));
          s += bp(uTexel)+bp(-uTexel)+bp(vec2(uTexel.x,-uTexel.y))+bp(vec2(-uTexel.x,uTexel.y));
          gl_FragColor = vec4(s/9.0, 1.0);
        }`,
      depthTest: false, depthWrite: false,
    });

    // ---- god-ray pass (low res) — march only, written to godRT ----------
    this.godMat = new THREE.ShaderMaterial({
      uniforms: GOD_UNIFORMS(),
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }',
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D tScene, tDepth;
        uniform vec2 uSunUV; uniform float uSunVis;
        uniform vec3 uHazeColor, uSunCol;
        uniform float uGod, uGodDensity, uGodDecay, uGodW, uGodExp, uGodThr, uGodHorizon, uGodRadius, uGodTint, uGodSource;
        uniform int uGodN;
        ${GOD_MARCH}
        void main(){ gl_FragColor = vec4(godMarch(vUv), 1.0); }`,
      depthTest: false, depthWrite: false,
    });

    // Additive ray-only overlay. This is the lab/debug path for god rays when
    // no other post effect is active: render the real scene directly, then
    // add only the ray buffer. No base-color pass-through, no hidden retone.
    this.overlayMat = new THREE.ShaderMaterial({
      uniforms: {
        tGod: { value: null },
        uGodSharp: { value: 0 },
        uGodTexel: { value: new THREE.Vector2() },
      },
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }',
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D tGod;
        uniform float uGodSharp;
        uniform vec2 uGodTexel;
        void main(){
          vec2 g = (floor(vUv / uGodTexel) + 0.5) * uGodTexel;
          vec2 guv = mix(vUv, g, uGodSharp);
          gl_FragColor = vec4(texture2D(tGod, guv).rgb, 1.0);
        }`,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    });

    // ---- composite — scene + upsampled god rays + haze + bloom ----------
    this.compMat = new THREE.ShaderMaterial({
      uniforms: {
        tScene: { value: null }, tBloom: { value: null }, tGod: { value: null },
        uBloom: { value: 0 }, uHaze: { value: 0 },
        uHazeColor: { value: new THREE.Color('#bcd4d6') },
        uSunCol: { value: new THREE.Color('#ffd9a0') },
        uSunUV: { value: new THREE.Vector2(0.5, 0.7) }, uSunVis: { value: 0 },
        uGod: { value: 0 },
        uGodCompare: { value: 0 },
        uGodSharp: { value: 0 },        // 0 = bilinear upsample · 1 = raw blocks
        uGodTexel: { value: new THREE.Vector2() },
      },
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }',
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D tScene, tBloom, tGod;
        uniform float uBloom, uHaze, uSunVis, uGod, uGodCompare, uGodSharp;
        uniform vec3 uHazeColor, uSunCol; uniform vec2 uSunUV, uGodTexel;
        void main(){
          vec3 col = texture2D(tScene, vUv).rgb;

          // God rays — UPSAMPLE the low-res march. uGodSharp snaps the
          // sample to the godRT texel grid so the raw downsampled blocks
          // are visible (a deliberate tuning aid, not a defect).
          if (uGod > 0.001 && uSunVis > 0.001 && (uGodCompare < 0.5 || vUv.x >= 0.5)) {
            vec2 g = (floor(vUv / uGodTexel) + 0.5) * uGodTexel;
            vec2 guv = mix(vUv, g, uGodSharp);
            col += texture2D(tGod, guv).rgb;
          }

          // Aerial haze — sky-coloured veil, thicker toward the horizon and a
          // SOFT broad forward-scatter near the sun (no hard ring). Screen-
          // space approx (no depth pass — the expensive path we skip on
          // mobile); independent of the Render-panel Horizon-Haze safety net.
          if (uHaze > 0.001) {
            float horiz = smoothstep(0.62, 0.18, vUv.y);
            float d = distance(vUv, uSunUV);
            float sunGlow = exp(-d * d * 2.2) * 0.30 * uSunVis;
            col = mix(col, uHazeColor, clamp(uHaze * (0.35 * horiz + sunGlow), 0.0, 0.9));
          }

          if (uBloom > 0.001) col += texture2D(tBloom, vUv).rgb * uBloom;

          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      depthTest: false, depthWrite: false,
    });

    this._brightQuad = new THREE.Mesh(QUAD, this.brightMat);
    this._godQuad = new THREE.Mesh(QUAD, this.godMat);
    this._overlayQuad = new THREE.Mesh(QUAD, this.overlayMat);
    this._compQuad = new THREE.Mesh(QUAD, this.compMat);
    this._brightScene = new THREE.Scene().add(this._brightQuad);
    this._godScene = new THREE.Scene().add(this._godQuad);
    this._overlayScene = new THREE.Scene().add(this._overlayQuad);
    this._compScene = new THREE.Scene().add(this._compQuad);
  }

  setSize() {
    const dpr = this.renderer.getPixelRatio();
    const w = Math.max(2, (window.innerWidth * dpr) | 0);
    const h = Math.max(2, (window.innerHeight * dpr) | 0);
    this.sceneRT.setSize(w, h);
    this.bloomRT.setSize((w / 4) | 0, (h / 4) | 0);
    this._sizeGod(w, h);
  }

  _sizeGod(w, h) {
    const gw = Math.max(1, (w * this._godScale) | 0);
    const gh = Math.max(1, (h * this._godScale) | 0);
    if (this.godRT.width !== gw || this.godRT.height !== gh) this.godRT.setSize(gw, gh);
    this.compMat.uniforms.uGodTexel.value.set(1 / gw, 1 / gh);
  }

  // p: { bloom, haze, hazeColor, sunCol, sunUV, sunVisible, god:{intensity,
  //      samples, density, decay, weight, exposure, threshold, horizon,
  //      radius, tint, resScale, sharp, source, compare} }
  render(scene, camera, p) {
    const bloom = p.bloom || 0, haze = p.haze || 0;
    const g = p.god || {};
    const sunFade = p.sunFade ?? (p.sunVisible ? 1 : 0);
    const gOn = (g.intensity || 0) > 0 && sunFade > 0.001;
    const r = this.renderer;
    const rayOnly = gOn && bloom <= 0 && haze <= 0;
    if (bloom <= 0 && haze <= 0 && !gOn) {     // golden bypass — no RT, no pass
      r.setRenderTarget(null);
      r.render(scene, camera);
      return;
    }
    // Keep the offscreen target locked to the live drawing buffer. A stale
    // size (after a DPR/resize/visibility change) makes the composite sample
    // an offset region — phantom halo until something forces a resize.
    const db = r.getDrawingBufferSize(new THREE.Vector2());
    if (this.sceneRT.width !== db.x || this.sceneRT.height !== db.y) {
      this.sceneRT.setSize(db.x, db.y);
      this.bloomRT.setSize(Math.max(1, (db.x / 4) | 0), Math.max(1, (db.y / 4) | 0));
    }
    if (gOn) {
      const sc = Math.max(0.04, Math.min(1, g.resScale ?? 0.25));
      if (sc !== this._godScale) this._godScale = sc;
      this._sizeGod(db.x, db.y);
    }
    r.setRenderTarget(this.sceneRT);
    r.render(scene, camera);

    if (bloom > 0) {
      this.brightMat.uniforms.tScene.value = this.sceneRT.texture;
      this.brightMat.uniforms.uTexel.value.set(1 / this.bloomRT.width, 1 / this.bloomRT.height);
      r.setRenderTarget(this.bloomRT);
      r.render(this._brightScene, ORTHO);
    }

    if (gOn) {
      const u = this.godMat.uniforms;
      u.tScene.value = this.sceneRT.texture;
      u.tDepth.value = this.sceneRT.depthTexture;
      if (p.hazeColor) u.uHazeColor.value.copy(p.hazeColor);
      if (p.sunCol) u.uSunCol.value.copy(p.sunCol);
      if (p.sunUV) u.uSunUV.value.set(p.sunUV.x, p.sunUV.y);
      u.uSunVis.value = sunFade;
      u.uGod.value = g.intensity || 0;
      u.uGodN.value = Math.max(6, Math.min(48, (g.samples || 16) | 0));
      u.uGodDensity.value = g.density ?? 0.6;
      u.uGodDecay.value = g.decay ?? 0.93;
      u.uGodW.value = g.weight ?? 0.6;
      u.uGodExp.value = g.exposure ?? 0.9;
      u.uGodThr.value = g.threshold ?? 0.62;
      u.uGodHorizon.value = g.horizon ?? 0.5;
      u.uGodRadius.value = g.radius ?? 1.1;
      u.uGodTint.value = g.tint ?? 0.5;
      u.uGodSource.value = Math.max(0, Math.min(1, g.source ?? 0));
      r.setRenderTarget(this.godRT);
      r.render(this._godScene, ORTHO);
    }

    if (rayOnly) {
      const oldAutoClear = r.autoClear;
      r.setRenderTarget(null);
      r.autoClear = true;
      r.setScissorTest(false);
      r.render(scene, camera);

      const o = this.overlayMat.uniforms;
      o.tGod.value = this.godRT.texture;
      o.uGodSharp.value = Math.max(0, Math.min(1, g.sharp ?? 0));
      o.uGodTexel.value.copy(this.compMat.uniforms.uGodTexel.value);

      r.autoClear = false;
      if (g.compare) {
        const screen = r.getSize(new THREE.Vector2());
        const split = Math.floor(screen.x * 0.5);
        r.setScissorTest(true);
        r.setScissor(split, 0, screen.x - split, screen.y);
      }
      r.render(this._overlayScene, ORTHO);
      r.setScissorTest(false);
      r.autoClear = oldAutoClear;
      return;
    }

    const c = this.compMat.uniforms;
    c.tScene.value = this.sceneRT.texture;
    c.tBloom.value = this.bloomRT.texture;
    c.tGod.value = this.godRT.texture;
    c.uBloom.value = bloom;
    c.uHaze.value = haze;
    if (p.hazeColor) c.uHazeColor.value.copy(p.hazeColor);
    if (p.sunCol) c.uSunCol.value.copy(p.sunCol);
    if (p.sunUV) c.uSunUV.value.set(p.sunUV.x, p.sunUV.y);
    c.uSunVis.value = sunFade;
    c.uGod.value = gOn ? 1 : 0;
    c.uGodCompare.value = g.compare ? 1 : 0;
    c.uGodSharp.value = Math.max(0, Math.min(1, g.sharp ?? 0));

    r.setRenderTarget(null);
    r.render(this._compScene, ORTHO);
  }

  dispose() {
    this.sceneRT.dispose(); this.bloomRT.dispose(); this.godRT.dispose();
    this.brightMat.dispose(); this.godMat.dispose(); this.overlayMat.dispose(); this.compMat.dispose();
  }
}
