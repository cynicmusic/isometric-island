import * as THREE from 'three';

const ATMOS = {
  rayleighMul: { min: 0, max: 4, period: 600, phase: 0.0 },
  mieBeta: { min: 0, max: 0.05, period: 420, phase: 1.7 },
  mieG: { min: 0, max: 0.95, period: 300, phase: 3.1 },
  ozoneMul: { min: 0, max: 3, period: 180, phase: 4.4 },
  planetRadiusKm: { min: 150, max: 6371, period: 660, phase: 2.5 },
};

const FADE_IN_SECONDS = 3.0;
const FADE_OUT_SECONDS = 0.85;
const EPS = 1e-5;

export class OrbitSweepController {
  constructor(store, scene) {
    this.store = store;
    this.scene = scene;
    this.enabled = false;
    this.fade = 0;
    this.time = 0;
    this.base = this._readAtmosphere();
    this._lastApplied = null;

    store.subscribe((evt) => this._onStoreChange(evt));
    this.enabled = !!store.get('orbitSweep.enable');
  }

  _readAtmosphere() {
    const out = {};
    for (const key of Object.keys(ATMOS)) out[key] = this.store.get(`atmosphere.${key}`);
    return out;
  }

  _onStoreChange(evt) {
    const path = evt.path;
    if (path === '*') {
      this.base = this._readAtmosphere();
      this.enabled = !!this.store.get('orbitSweep.enable');
      if (!this.enabled) {
        this.fade = 0;
        this._lastApplied = null;
        this.scene.setAtmosphereOverride(null);
      }
      return;
    }
    if (path === 'orbitSweep.enable') {
      this.enabled = !!evt.value;
      this.base = this._readAtmosphere();
      return;
    }
    if (path && path.startsWith('atmosphere.') && this.enabled) {
      this.enabled = false;
      this.fade = 0;
      this._lastApplied = null;
      this.scene.setAtmosphereOverride(null);
      this.base = this._readAtmosphere();
      this.store.set('orbitSweep.enable', false);
    }
  }

  update(dt) {
    this.time += dt;
    const targetFade = this.enabled ? 1 : 0;
    const fadeSeconds = this.enabled ? FADE_IN_SECONDS : FADE_OUT_SECONDS;
    const step = dt / fadeSeconds;
    if (this.fade < targetFade) this.fade = Math.min(targetFade, this.fade + step);
    else if (this.fade > targetFade) this.fade = Math.max(targetFade, this.fade - step);

    if (this.fade <= 0 && !this.enabled) {
      if (this._lastApplied) {
        this.scene.setAtmosphereOverride(null);
        this._lastApplied = null;
      }
      return;
    }

    const live = this._readAtmosphere();
    const sweep = {};
    for (const [key, spec] of Object.entries(ATMOS)) {
      const amount = THREE.MathUtils.clamp(this.store.get(`orbitSweep.${key}`) ?? 0, 0, 1);
      const amp = (spec.max - spec.min) * amount * 0.5;
      const wave = Math.sin((this.time / spec.period) * Math.PI * 2 + spec.phase);
      const raw = (this.base[key] ?? live[key]) + wave * amp;
      sweep[key] = THREE.MathUtils.clamp(raw, spec.min, spec.max);
    }

    const out = {};
    let changed = false;
    for (const key of Object.keys(ATMOS)) {
      out[key] = THREE.MathUtils.lerp(live[key], sweep[key], this.fade);
      if (!this._lastApplied || Math.abs(out[key] - this._lastApplied[key]) > EPS) changed = true;
    }
    if (changed) {
      this.scene.setAtmosphereOverride(out);
      this._lastApplied = out;
    }
  }
}
