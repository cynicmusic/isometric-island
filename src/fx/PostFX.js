// Shared post-FX plumbing — built ONCE so bloom (main · lighting), aerial
// haze (main · lighting) and god rays (experimental · VGR) all hang off a
// single offscreen pass instead of three render-loop edits (build-out, not
// refactor). Mobile budget (MacBook / iPhone): when EVERY effect is off this
// bypasses entirely and renders straight to screen — byte-identical golden
// path, zero extra passes/targets. Effects are cheap fakes, no depth/MRT.

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
    // Quarter-res bloom scratch (cheap blur).
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
        uGodrays: { value: 0 }, uSunUV: { value: new THREE.Vector2(0.5, 0.7) },
        uSunVis: { value: 0 },
      },
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }',
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D tScene, tBloom;
        uniform float uBloom, uHaze, uGodrays, uSunVis;
        uniform vec3 uHazeColor; uniform vec2 uSunUV;
        void main(){
          vec3 col = texture2D(tScene, vUv).rgb;

          // God rays: radial scatter from the sun's screen position (GPU Gems
          // 3 ch.13 / Crytek light shafts) — only when VGR flag fed uGodrays>0.
          if (uGodrays > 0.001 && uSunVis > 0.5) {
            vec2 dir = (uSunUV - vUv) * 0.30;
            float decay = 1.0, acc = 0.0; vec2 uv = vUv;
            for (int i = 0; i < 12; i++) {
              uv += dir * 0.0833;
              vec3 s = texture2D(tScene, uv).rgb;
              acc += max(0.0, max(max(s.r,s.g),s.b) - 0.62) * decay;
              decay *= 0.92;
            }
            float edge = smoothstep(1.25, 0.2, distance(vUv, uSunUV));
            col += uHazeColor * acc * (uGodrays * 0.16) * edge;
          }

          // Aerial haze: sky-coloured veil that thickens toward the horizon
          // and toward the sun (forward scatter). Screen-space approximation
          // (no depth pass — that's the expensive path we skip on mobile);
          // independent of the Render-panel Horizon-Haze safety net.
          if (uHaze > 0.001) {
            float horiz = smoothstep(0.62, 0.20, vUv.y);          // stronger low
            float sunBias = uSunVis > 0.5 ? (1.0 - clamp(distance(vUv,uSunUV),0.0,1.0))*0.5 : 0.0;
            col = mix(col, uHazeColor, clamp(uHaze * (0.35*horiz + sunBias), 0.0, 0.92));
          }

          // Bloom: add the blurred bright-pass.
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

  // p: { bloom, haze, hazeColor, godrays, sunUV:{x,y}, sunVisible }
  render(scene, camera, p) {
    const bloom = p.bloom || 0, haze = p.haze || 0, gr = p.godrays || 0;
    const r = this.renderer;
    if (bloom <= 0 && haze <= 0 && gr <= 0) {   // golden bypass — no RT, no pass
      r.setRenderTarget(null);
      r.render(scene, camera);
      return;
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
    u.uGodrays.value = gr;
    if (p.sunUV) u.uSunUV.value.set(p.sunUV.x, p.sunUV.y);
    u.uSunVis.value = p.sunVisible ? 1 : 0;

    r.setRenderTarget(null);
    r.render(this._compScene, ORTHO);
  }

  dispose() {
    this.sceneRT.dispose(); this.bloomRT.dispose();
    this.brightMat.dispose(); this.compMat.dispose();
  }
}
