// Sea surface + caustics + shoreline glow.
//   · caustic shader = aquarium/src/shaders/WaterEffects.js dual-layer
//     animated Voronoi, ported verbatim (world-XZ projected, turquoise tint).
//   · translucent surface plane extends past the island so the bounded edge
//     dissolves into the atmosphere's horizon haze (PLAN.md §9).
//   · shoreline glow = aquarium-sky pillar-glow math: 0xff8a36 PointLights,
//     decay 2, gently pulsed.

import * as THREE from 'three';
import { SHORE_GLOW } from '../gen/palette.js';

const causticsVertex = /* glsl */`
varying vec3 vWorldPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

// Verbatim caustic maths from aquarium WaterEffects.js.
const causticsFragment = /* glsl */`
uniform float uTime;
uniform vec3 uCausticColor;
uniform float uCausticIntensity;
uniform float uCausticScale;
uniform float uFadeRadius;
varying vec3 vWorldPos;

vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}

float voronoiDist(vec2 p, float timeOffset) {
  vec2 n = floor(p);
  vec2 f = fract(p);
  float md = 8.0;
  float md2 = 8.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 o = hash22(n + g);
      o = 0.5 + 0.5 * sin(uTime * 0.6 + timeOffset + 6.2831 * o);
      vec2 r = g + o - f;
      float d = dot(r, r);
      if (d < md) { md2 = md; md = d; }
      else if (d < md2) { md2 = d; }
    }
  }
  return md2 - md;
}

float caustic(vec2 uv) {
  float c1 = voronoiDist(uv * uCausticScale, 0.0);
  float c2 = voronoiDist(uv * uCausticScale * 1.4 + vec2(3.7, 1.2), 2.5);
  float c3 = voronoiDist(uv * uCausticScale * 0.7 + vec2(-1.5, 4.1), 5.0);
  float combined = c1 * c2 * 4.0 + c3 * 0.3;
  return pow(combined, 0.8);
}

void main() {
  // Low spatial frequency — at km scale the aquarium's 0.25 reads as white
  // static; 0.012 gives broad dancing caustic bands.
  vec2 uv = vWorldPos.xz * 0.012;
  float c = clamp(caustic(uv), 0.0, 1.4);
  // Radial fade to zero so the caustic plane has NO visible square edge —
  // it just lives in the shallows around the island and dissolves outward.
  float rad = length(vWorldPos.xz);
  float fade = 1.0 - smoothstep(uFadeRadius * 0.55, uFadeRadius, rad);
  vec3 color = uCausticColor * c * uCausticIntensity;
  gl_FragColor = vec4(color, c * 0.22 * fade);
}
`;

export class Sea {
  constructor(params) {
    this.group = new THREE.Group();
    this.group.name = 'Sea';
    // Sea must reach far past the island so its edge is always buried in fog
    // (PLAN §9) — no visible square, no "floating quad".
    // Sea reaches far past the fog-opaque distance so its geometric edge is
    // never visible regardless of FOV (the "main square at the horizon").
    // CIRCULAR discs (no corners) reaching far past the fog-opaque distance,
    // so there is no square edge at any FOV/altitude.
    const R = Math.max(params.worldSize * 12, 26000) * 0.5;
    const floorY = params.seaLevel - (params.floorDepth || 60) - 10;
    this._horizon = new THREE.Color('#bcd4d6');

    this.floor = new THREE.Mesh(
      new THREE.CircleGeometry(R, 96),
      new THREE.MeshBasicMaterial({ color: new THREE.Color('#0b4f68'), fog: true }),
    );
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.position.y = floorY;
    this.floor.renderOrder = 1;
    this.group.add(this.floor);

    // SCAFFOLD (water differentiation): the seabed already reads dark deep
    // blue in the open ocean and shimmer-cyan in the flooded gully/delta
    // (mesher uses vol.channel). The matching shimmer on the WATER SURFACE
    // itself is the remaining piece: the Sea is a single disc, so it needs a
    // channel-mask sampled here (a low-res R8 texture baked from vol.channel,
    // sampled by world-XZ → lerp surface colour toward a brighter cyan +
    // animate a faint shimmer). Hook left intentionally; not wired this pass.

    // Translucent surface; its outer ring fades (colour → live sky-horizon,
    // alpha → 0) so the ocean dissolves into the ACTUAL sunset every frame
    // regardless of brightness — not a fixed edge tint.
    this.surfaceMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1f93a4'),
      transparent: true,
      opacity: 0.5,
      roughness: 0.18,
      metalness: 0.0,
      side: THREE.DoubleSide,
    });
    const fade0 = params.radius * 1.4, fade1 = R * 0.96;
    // Analytic sun-glint: a stretched specular streak where the sun reflects
    // off the flat water plane. Pure in-shader (no extra pass) — mobile-cheap.
    this._sunDir = new THREE.Vector3(0, 1, 0);
    this._sunCol = new THREE.Color('#fff3df');
    this.surfaceMat.onBeforeCompile = (sh) => {
      sh.uniforms.uHorizon = { value: this._horizon };
      sh.uniforms.uF0 = { value: fade0 };
      sh.uniforms.uF1 = { value: fade1 };
      sh.uniforms.uSunDir = { value: this._sunDir };
      sh.uniforms.uSunCol = { value: this._sunCol };
      sh.uniforms.uGlint = { value: 0.7 };
      sh.uniforms.uGlintSpread = { value: 1.1 };
      sh.uniforms.uCamPos = { value: new THREE.Vector3() };
      this._surfUniforms = sh.uniforms;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec2 vWXZ;\nvarying vec3 vWPos;')
        .replace('#include <begin_vertex>',
          '#include <begin_vertex>\n  vec4 _wp = modelMatrix * vec4(transformed,1.0);\n  vWXZ = _wp.xz;\n  vWPos = _wp.xyz;');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>',
          '#include <common>\nvarying vec2 vWXZ;\nvarying vec3 vWPos;\nuniform vec3 uHorizon;\nuniform float uF0;\nuniform float uF1;\nuniform vec3 uSunDir;\nuniform vec3 uSunCol;\nuniform float uGlint;\nuniform float uGlintSpread;\nuniform vec3 uCamPos;')
        .replace('#include <dithering_fragment>',
          '#include <dithering_fragment>\n'
          + '  vec3 _V = normalize(uCamPos - vWPos);\n'
          + '  float _s = max(dot(reflect(-uSunDir, vec3(0.0,1.0,0.0)), _V), 0.0);\n'
          + '  float _sp = clamp(uGlintSpread * 0.25, 0.0, 1.0);\n'
          + '  float _core = pow(_s, mix(900.0, 70.0, _sp));\n'
          + '  float _strk = pow(_s, mix(140.0, 14.0, _sp)) * 0.35;\n'
          + '  float _g = (_core + _strk) * uGlint * smoothstep(-0.02, 0.14, uSunDir.y);\n'
          + '  gl_FragColor.rgb += uSunCol * _g;\n'
          + '  float _f = smoothstep(uF0, uF1, length(vWXZ));\n'
          + '  gl_FragColor.rgb = mix(gl_FragColor.rgb, uHorizon, _f);\n'
          + '  gl_FragColor.a = mix(gl_FragColor.a, 0.0, _f * _f);');
    };
    this.surface = new THREE.Mesh(new THREE.CircleGeometry(R, 96), this.surfaceMat);
    this.surface.rotation.x = -Math.PI / 2;
    this.surface.renderOrder = 4;
    this.group.add(this.surface);

    // Additive caustic just under the surface — dancing light over the floor.
    this.causticMat = new THREE.ShaderMaterial({
      vertexShader: causticsVertex,
      fragmentShader: causticsFragment,
      uniforms: {
        uTime: { value: 0 },
        uCausticColor: { value: new THREE.Color(0.18, 0.5, 0.55) },
        uCausticIntensity: { value: params.causticIntensity },
        uCausticScale: { value: params.causticScale },
        uFadeRadius: { value: params.radius * 1.15 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.caustic = new THREE.Mesh(new THREE.CircleGeometry(params.radius * 1.4, 80), this.causticMat);
    this.caustic.rotation.x = -Math.PI / 2;
    this.caustic.renderOrder = 3;
    this.group.add(this.caustic);

    // Shoreline glow ring (aquarium-sky pillar-glow math).
    this.lights = [];
    const ringR = params.radius * 0.96;
    for (let k = 0; k < 18; k++) {
      const a = (k / 18) * Math.PI * 2;
      const light = new THREE.PointLight(SHORE_GLOW, 0, params.radius * 0.5, 2);
      light.position.set(Math.cos(a) * ringR, params.seaLevel + 2.0, Math.sin(a) * ringR);
      light.userData.phase = k * 1.731;
      this.lights.push(light);
      this.group.add(light);
    }

    this.setLevel(params.seaLevel);
    this.setShoreGlow(params.shoreGlow);
  }

  setLevel(y) {
    this.surface.position.y = y;
    this.caustic.position.y = y - 0.5;
    for (const l of this.lights) l.position.y = y + 2.0;
  }
  setCaustic(scale, intensity) {
    this.causticMat.uniforms.uCausticScale.value = scale;
    this.causticMat.uniforms.uCausticIntensity.value = intensity;
  }
  setShoreGlow(amount) {
    this._glowBase = THREE.MathUtils.clamp(amount, 0, 1.5);
  }
  // Drive the sea's outer-ring fade colour from the live sky horizon (same
  // value the fog samples from the LUT) so the ocean meshes into the actual
  // sunset — bright or dark — instead of a fixed mismatched tint.
  setHorizon(color) {
    this._horizon.copy(color);
    if (this.floor) this.floor.material.color.copy(color).lerp(new THREE.Color('#0b4f68'), 0.6);
  }
  setSun(dir, color) {
    this._sunDir.copy(dir).normalize();
    this._sunCol.copy(color);
  }
  setGlint(intensity, spread) {
    if (!this._surfUniforms) return;
    this._surfUniforms.uGlint.value = Math.max(0, intensity);
    this._surfUniforms.uGlintSpread.value = Math.max(0.2, spread);
  }

  update(elapsed, camPos) {
    if (camPos && this._surfUniforms) this._surfUniforms.uCamPos.value.copy(camPos);
    this.causticMat.uniforms.uTime.value = elapsed;
    for (const l of this.lights) {
      const pulse = 0.86 + Math.sin(elapsed * 0.92 + l.userData.phase) * 0.10
        + Math.sin(elapsed * 1.7 + l.userData.phase * 0.37) * 0.04;
      l.intensity = Math.max(0, this._glowBase * 1.7 * pulse);
    }
  }
}
