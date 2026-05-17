// Shared post-FX plumbing — built ONCE so bloom (main · lighting), aerial
// haze (main · lighting) and god rays (experimental · VGR) hang off a single
// offscreen pass. Mobile budget (MacBook / iPhone): when EVERY effect is off
// this bypasses entirely and renders straight to screen — byte-identical
// golden path, zero extra targets/passes. LDR screen-space fakes, no MRT.
//
// God rays: proper radial light-shaft march (GPU Gems 3 ch.13 / Crytek) with
// a full tuning set + a "ground mask" that suppresses ray *sources* below the
// sun — that is what stops the bright water sun-glint from being smeared into
// a halo (the earlier naive version radial-blurred the whole frame).

import * as THREE from 'three';

const QUAD = new THREE.PlaneGeometry(2, 2);
const ORTHO = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

export class PostFX {
  constructor(renderer) {
    this.renderer = renderer;
    const dpr = renderer.getPixelRatio();
    const w = Math.max(2, (window.innerWidth * dpr) | 0);
    const h = Math.max(2, (window.innerHeight * dpr) | 0);

    this.sceneRT = new THREE.WebGLRenderTarget(w, h, {
      depthBuffer: true, stencilBuffer: false,
      magFilter: THREE.LinearFilter, minFilter: THREE.LinearFilter,
    });
    this.sceneRT.texture.colorSpace = renderer.outputColorSpace;
    this.bloomRT = new THREE.WebGLRenderTarget((w / 4) | 0, (h / 4) | 0, {
      depthBuffer: false, stencilBuffer: false,
      magFilter: THREE.LinearFilter, minFilter: THREE.LinearFilter,
    });

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

    this.compMat = new THREE.ShaderMaterial({
      uniforms: {
        tScene: { value: null }, tBloom: { value: null },
        uBloom: { value: 0 }, uHaze: { value: 0 },
        uHazeColor: { value: new THREE.Color('#bcd4d6') },
        uSunCol: { value: new THREE.Color('#ffd9a0') },
        uSunUV: { value: new THREE.Vector2(0.5, 0.7) }, uSunVis: { value: 0 },
        // god-ray tuning set
        uGod: { value: 0 },          // master intensity (0 = skip)
        uGodN: { value: 16 },        // samples
        uGodDensity: { value: 0.6 },
        uGodDecay: { value: 0.93 },
        uGodW: { value: 0.6 },
        uGodExp: { value: 0.9 },
        uGodThr: { value: 0.62 },
        uGodHorizon: { value: 0.5 },
        uGodRadius: { value: 1.1 },
        uGodTint: { value: 0.5 },
      },
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }',
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D tScene, tBloom;
        uniform float uBloom, uHaze, uSunVis;
        uniform vec3 uHazeColor, uSunCol; uniform vec2 uSunUV;
        uniform float uGod, uGodDensity, uGodDecay, uGodW, uGodExp, uGodThr, uGodHorizon, uGodRadius, uGodTint;
        uniform int uGodN;
        void main(){
          vec3 col = texture2D(tScene, vUv).rgb;

          // God rays — march toward the sun; the "ground mask" fades a ray
          // SOURCE the further it sits below the sun, so the bright water
          // reflection no longer seeds a halo.
          if (uGod > 0.001 && uSunVis > 0.5) {
            vec2 delta = (uSunUV - vUv) / float(uGodN) * uGodDensity;
            vec2 uv = vUv; float decay = 1.0; vec3 acc = vec3(0.0);
            for (int i = 0; i < 40; i++) {
              if (i >= uGodN) break;
              uv += delta;
              vec3 s = texture2D(tScene, uv).rgb;
              float lum = max(max(s.r, s.g), s.b);
              float src = max(0.0, lum - uGodThr);
              float gm = mix(1.0, smoothstep(uSunUV.y - 0.30, uSunUV.y + 0.04, uv.y), uGodHorizon);
              acc += s * src * gm * decay * uGodW;
              decay *= uGodDecay;
            }
            acc /= float(uGodN);
            float radial = smoothstep(uGodRadius, 0.0, distance(vUv, uSunUV));
            vec3 tint = mix(uHazeColor, uSunCol, uGodTint);
            float a = (acc.r + acc.g + acc.b) * 0.3333;
            col += tint * a * uGodExp * uGod * radial;
          }

          // Aerial haze — sky-coloured veil, thicker toward the horizon and a
          // SOFT broad forward-scatter near the sun (no hard ring). Screen-
          // space approx (no depth pass — the expensive path we skip on
          // mobile); independent of the Render-panel Horizon-Haze safety net.
          if (uHaze > 0.001) {
            float horiz = smoothstep(0.62, 0.18, vUv.y);
            float d = distance(vUv, uSunUV);
            float sunGlow = uSunVis > 0.5 ? exp(-d * d * 2.2) * 0.30 : 0.0;
            col = mix(col, uHazeColor, clamp(uHaze * (0.35 * horiz + sunGlow), 0.0, 0.9));
          }

          if (uBloom > 0.001) col += texture2D(tBloom, vUv).rgb * uBloom;

          gl_FragColor = vec4(col, 1.0);
        }`,
      depthTest: false, depthWrite: false,
    });

    this._brightQuad = new THREE.Mesh(QUAD, this.brightMat);
    this._compQuad = new THREE.Mesh(QUAD, this.compMat);
    this._brightScene = new THREE.Scene().add(this._brightQuad);
    this._compScene = new THREE.Scene().add(this._compQuad);
  }

  setSize() {
    const dpr = this.renderer.getPixelRatio();
    const w = Math.max(2, (window.innerWidth * dpr) | 0);
    const h = Math.max(2, (window.innerHeight * dpr) | 0);
    this.sceneRT.setSize(w, h);
    this.bloomRT.setSize((w / 4) | 0, (h / 4) | 0);
  }

  // p: { bloom, haze, hazeColor, sunCol, sunUV, sunVisible, god:{intensity,
  //      samples, density, decay, weight, exposure, threshold, horizon,
  //      radius, tint} }
  render(scene, camera, p) {
    const bloom = p.bloom || 0, haze = p.haze || 0;
    const g = p.god || {};
    const gOn = (g.intensity || 0) > 0 && p.sunVisible;
    const r = this.renderer;
    if (bloom <= 0 && haze <= 0 && !gOn) {     // golden bypass — no RT, no pass
      r.setRenderTarget(null);
      r.render(scene, camera);
      return;
    }
    // Keep the offscreen target locked to the live drawing buffer. A stale
    // size (after a DPR/resize/visibility change) makes the composite sample
    // an offset region — that reads as a phantom halo until something forces
    // a resize. Re-sync defensively each active frame (cheap; no-op if equal).
    const db = r.getDrawingBufferSize(new THREE.Vector2());
    if (this.sceneRT.width !== db.x || this.sceneRT.height !== db.y) {
      this.sceneRT.setSize(db.x, db.y);
      this.bloomRT.setSize(Math.max(1, (db.x / 4) | 0), Math.max(1, (db.y / 4) | 0));
    }
    r.setRenderTarget(this.sceneRT);
    r.render(scene, camera);

    if (bloom > 0) {
      this.brightMat.uniforms.tScene.value = this.sceneRT.texture;
      this.brightMat.uniforms.uTexel.value.set(1 / this.bloomRT.width, 1 / this.bloomRT.height);
      r.setRenderTarget(this.bloomRT);
      r.render(this._brightScene, ORTHO);
    }

    const u = this.compMat.uniforms;
    u.tScene.value = this.sceneRT.texture;
    u.tBloom.value = this.bloomRT.texture;
    u.uBloom.value = bloom;
    u.uHaze.value = haze;
    if (p.hazeColor) u.uHazeColor.value.copy(p.hazeColor);
    if (p.sunCol) u.uSunCol.value.copy(p.sunCol);
    if (p.sunUV) u.uSunUV.value.set(p.sunUV.x, p.sunUV.y);
    u.uSunVis.value = p.sunVisible ? 1 : 0;
    u.uGod.value = gOn ? (g.intensity || 0) : 0;
    u.uGodN.value = Math.max(6, Math.min(40, (g.samples || 16) | 0));
    u.uGodDensity.value = g.density ?? 0.6;
    u.uGodDecay.value = g.decay ?? 0.93;
    u.uGodW.value = g.weight ?? 0.6;
    u.uGodExp.value = g.exposure ?? 0.9;
    u.uGodThr.value = g.threshold ?? 0.62;
    u.uGodHorizon.value = g.horizon ?? 0.5;
    u.uGodRadius.value = g.radius ?? 1.1;
    u.uGodTint.value = g.tint ?? 0.5;

    r.setRenderTarget(null);
    r.render(this._compScene, ORTHO);
  }

  dispose() {
    this.sceneRT.dispose(); this.bloomRT.dispose();
    this.brightMat.dispose(); this.compMat.dispose();
  }
}
