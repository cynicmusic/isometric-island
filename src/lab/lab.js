// LAB — throwaway FX-tuning app (`npm run lab` → :5180, served at /lab/),
// now a MOCK SIM REINTEGRATION: it runs the real sim ControlPanel (the
// right-docked, collapsible/muteable panel) instead of the old bespoke
// left "experimental" bar (which never landed — text clipped, overlapping,
// un-muteable, and parked right where the god beams are). God-ray params
// live as a normal schema SECTION here, so promoting them into the real sim
// in Phase 2 is a drop-in. NO preset saving — preset loading is READ-ONLY.
//
// Algo focus: god rays are downsample → march → upsample (see PostFX). The
// "Buffer scale" / "Upsample snap" knobs deliberately expose the raw cheap
// scatter so the screen-space algorithm is legible and tunable.

import '../styles.css';
import '../ui/panel.css';
import './lab.css';
import { Scene } from '../core/Scene.js';
import { ParamStore } from '../state/ParamStore.js';
import { schema, sectionOrder } from '../config/paramSchema.js';
import { ControlPanel } from '../ui/ControlPanel.js';
import { loadPresets } from '../config/presets.js';

const canvasContainer = document.getElementById('canvas-container');
const uiRoot = document.getElementById('ui-root');

// ---- augmented schema: sim sections + a god-ray section (Phase-2 drop-in).
// The hints ARE the tuning guide — heavy hitters are tagged ⚡.
const GOD = {
  label: 'god rays', icon: '✺',
  blurb: 'cheap screen-space radial scatter · downsample→march→upsample (LAB)',
  fields: {
    enable:     { type: 'bool',  label: 'Enable', default: true, hint: 'lab debug master — off = golden bypass (zero cost)' },
    compare:    { type: 'bool',  label: 'Compare split', default: true, hint: 'left = rays off · right = rays on, same camera and tone path' },
    source:     { type: 'float', label: 'Source mask', min: 0, max: 1, step: 0.02, default: 0, hint: '0 = old raw-scene echoes · 1 = clean depth sky/occluder A/B' },
    intensity:  { type: 'float', label: 'Intensity', min: 0, max: 3, step: 0.05, default: 0.85, hint: 'first gain knob — default is mild, not a filter slam' },
    density:    { type: 'float', label: 'Density', min: 0.2, max: 1, step: 0.02, default: 0.32, hint: 'ray reach toward the sun — high values create distant echoes' },
    decay:      { type: 'float', label: 'Decay', min: 0.8, max: 1, step: 0.005, default: 0.915, hint: 'tail length — higher carries echoes farther' },
    weight:     { type: 'float', label: 'Weight', min: 0.1, max: 2, step: 0.05, default: 2, hint: 'per-sample lift after density/decay are set' },
    exposure:   { type: 'float', label: 'Exposure', min: 0.1, max: 3, step: 0.05, default: 0.7, hint: 'final ray gain after the march' },
    threshold:  { type: 'float', label: 'Threshold', min: 0.05, max: 0.95, step: 0.01, default: 0.62, hint: 'source cutoff — raise to reduce haze/echoes' },
    groundMask: { type: 'float', label: 'Ground mask', min: 0, max: 1, step: 0.02, default: 0.5, hint: 'suppresses sources below the sun (water halo control)' },
    reach:      { type: 'float', label: 'Reach', min: 0.4, max: 2.5, step: 0.05, default: 1.45, hint: 'final screen-space falloff radius' },
    warmth:     { type: 'float', label: 'Warmth', min: 0, max: 1, step: 0.02, default: 0.5, hint: '0 = sky-colour rays · 1 = warm sun' },
    samples:    { type: 'int',   label: 'Samples', min: 6, max: 48, step: 1, default: 16, hint: 'march taps — low is banded and legible, high smoother/slower' },
    resScale:   { type: 'float', label: 'Buffer scale', min: 0.06, max: 1, step: 0.02, default: 0.25, hint: 'debug resolution. LOW = cheap + blocky scatter you can read' },
    sharp:      { type: 'float', label: 'Upsample snap', min: 0, max: 1, step: 0.05, default: 0.25, hint: '0 = bilinear upsample · 1 = raw low-res blocks; no blur pass' },
  },
};
const PLANETR = {
  label: 'planet-r', icon: '◴',
  blurb: "sunset's tiny-planet curvature (fine as-is — kept tunable)",
  fields: {
    enable:   { type: 'bool',  label: 'Enable', default: false, hint: 'restore the Planet-R atmosphere curvature' },
    radiusKm: { type: 'float', label: 'Radius', min: 200, max: 6000, step: 50, default: 1200, unit: 'km', hint: 'smaller = tighter horizon / richer sunset' },
  },
};
const labSchema = { ...schema, godrays: GOD, planetr: PLANETR };
const labSectionOrder = [...sectionOrder, 'godrays', 'planetr'];

function buildLabDefaults() {
  const out = {};
  for (const sk of labSectionOrder) {
    out[sk] = {};
    for (const [fk, f] of Object.entries(labSchema[sk].fields)) {
      out[sk][fk] = f.type === 'range' ? [...f.default] : f.default;
    }
  }
  return out;
}

function applyLabDefaults() {
  const next = buildLabDefaults();
  next.voxel.seed = 24680;
  for (const sk of labSectionOrder) {
    for (const fk of Object.keys(labSchema[sk].fields)) {
      store.set(`${sk}.${fk}`, next[sk][fk]);
    }
  }
}

const boot = buildLabDefaults();
boot.voxel.seed = 24680;                              // stable scene to tune against
const store = new ParamStore(boot);
const scene = new Scene(canvasContainer, store);

// ---- processing indicator (harness waits on window.lab.busy) -------------
const busyEl = document.createElement('div');
busyEl.id = 'lab-busy';
busyEl.textContent = 'rendering';
uiRoot.appendChild(busyEl);
let _busyFrames = 0;
function markBusy(frames = 10) {
  _busyFrames = Math.max(_busyFrames, frames);
  busyEl.classList.add('on');
  if (window.lab) window.lab.busy = true;
  document.body.dataset.labBusy = '1';
}
(function pump() {
  requestAnimationFrame(pump);
  if (_busyFrames > 0 && --_busyFrames === 0) {
    busyEl.classList.remove('on');
    if (window.lab) window.lab.busy = false;
    document.body.dataset.labBusy = '0';
  }
})();

const compareEl = document.createElement('div');
compareEl.id = 'lab-compare';
compareEl.innerHTML = '<span>god rays off</span><i></i><span>god rays on</span>';
uiRoot.appendChild(compareEl);

function syncCompareOverlay() {
  const g = store.get('godrays');
  const on = !!(g?.enable && g?.compare);
  compareEl.classList.toggle('on', on);
  document.body.dataset.labCompare = on ? '1' : '0';
}

// ---- god-ray / planet-r → Scene (the lab is the integrator; Scene is
// untouched — it still consumes a plain experimental snapshot) ------------
function pushExp() {
  const g = store.get('godrays'), pr = store.get('planetr');
  scene.setExperimental({
    godrays: !!g.enable,
    godIntensity: g.intensity, godSamples: g.samples, godDensity: g.density,
    godDecay: g.decay, godWeight: g.weight, godExposure: g.exposure,
    godThreshold: g.threshold, godHorizon: g.groundMask, godRadius: g.reach,
    godTint: g.warmth, godResScale: g.resScale, godSharp: g.sharp,
    godSource: g.source, godCompare: !!g.compare,
    planetR: !!pr.enable, planetRadiusKm: pr.radiusKm,
  });
  syncCompareOverlay();
}
store.subscribe(() => { markBusy(10); pushExp(); });
pushExp();

// ---- scene framing (god rays need the sun on screen) --------------------
const FRAMES = {
  sunset:  { el: 2.5,  az: -84, intensity: 22, exposure: 1.05, massif: 240,
             cam: [150, 95, 720], look: [40, 78, -30] },
  moonset: { el: 5,  az: -84, intensity: 14, exposure: 0.55, massif: 240,
             cam: [150, 95, 720], look: [40, 78, -30] },
};
function frame(name) {
  const f = FRAMES[name] || FRAMES.sunset;
  store.set('sun.elevationDeg', f.el);
  store.set('sun.azimuthDeg', f.az);
  store.set('sun.intensity', f.intensity);
  store.set('render.exposure', f.exposure);
  store.set('island.massif', f.massif);
  scene.camera.position.set(f.cam[0], f.cam[1], f.cam[2]);
  scene.camera.lookAt(f.look[0], f.look[1], f.look[2]);
  scene.camera.updateMatrixWorld();
  scene._frameName = name;
  scene.regenerate?.();
  markBusy(18);
}

// ---- read-only preset loading (sim posture, no saving) ------------------
const presetMap = await loadPresets();
let activeBank = 'A';
function applyPreset(p) {
  if (!p || !p.params) return false;
  store.fromJSON(p.params);
  scene.regenerate?.();
  if (p.cam) {
    scene.camera.position.fromArray(p.cam.p);
    scene.camera.quaternion.fromArray(p.cam.q);
    scene.camera.updateMatrixWorld();
  }
  markBusy(18);
  return true;
}
const presetApi = {
  slots: presetMap,
  getBank: () => activeBank,
  setBank: (b) => { if (/^[A-H]$/.test(b)) activeBank = b; },
  save: () => panel.flashStatus('lab · read-only (no save)', 'err'),
  load: (slot) => {
    const key = `${activeBank}${slot}`;
    const p = presetMap[key];
    if (!p) { panel.flashStatus(`${key} empty`, 'err'); return; }
    applyPreset(p);
    panel.flashStatus(`loaded ${key} (read-only)`, 'ok');
  },
};

// lab has no sticky persistence — pins are inert (kept visually neutral)
const sticky = { has: () => false, toggle: () => false };

function handleAction(action) {
  if (action === 'default') {
    applyLabDefaults(); scene.regenerate?.(); frame('sunset');
    panel.flashStatus('default', 'ok');
  } else if (action === 'random') {
    store.set('voxel.seed', 1 + ((Math.random() * 99998) | 0));
    scene.regenerate?.(); panel.flashStatus('reseeded', 'ok');
  } else if (action === 'baseline') {
    store.set('godrays.enable', false);
    store.set('planetr.enable', false);
    panel.flashStatus('baseline · FX off', 'ok');
  }
}

const panel = new ControlPanel({
  store, schema: labSchema, sectionOrder: labSectionOrder,
  sticky, presets: presetApi, onAction: handleAction,
});
uiRoot.appendChild(panel.root);
panel.toggle();                                       // lab opens OPEN (tuning)
panel.hints.innerHTML = `
  <kbd>WASD</kbd> fly <kbd>drag</kbd> look
  <kbd>H</kbd> mute panel <kbd>C</kbd> compare <kbd>[</kbd> sunset <kbd>]</kbd> moonset <kbd>R</kbd> reseed`;
panel.hints.classList.add('show');

// compact scene-framing row injected into the footer (lab-only DOM; the
// shared ControlPanel is not modified)
const footer = panel.root.querySelector('.ff-panel-footer');
const frames = document.createElement('div');
frames.className = 'ff-lab-frames';
for (const name of ['sunset', 'moonset']) {
  const b = document.createElement('button');
  b.className = 'ff-btn ff-mini';
  b.textContent = name;
  b.addEventListener('click', () => frame(name));
  frames.appendChild(b);
}
footer.insertBefore(frames, footer.firstChild);

frame('sunset');
scene.start();

window.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const t = e.target;
  const isTextEntry = t && (t.tagName === 'TEXTAREA' || (t.tagName === 'INPUT' && t.type !== 'range'));
  if (isTextEntry) return;
  const k = e.key.toLowerCase();
  const blur = () => { if (t && t.tagName === 'INPUT' && t.blur) t.blur(); };
  if (k === 'h' || k === 'b') { e.preventDefault(); blur(); panel.toggle(); }
  else if (k === 'c') {
    e.preventDefault(); blur();
    store.set('godrays.compare', !store.get('godrays.compare'));
  }
  else if (k === 'escape') { e.preventDefault(); blur(); if (!panel.collapsed) panel.toggle(); }
  else if (k === '[') { e.preventDefault(); blur(); frame('sunset'); }
  else if (k === ']') { e.preventDefault(); blur(); frame('moonset'); }
  else if (k === 'r') { e.preventDefault(); blur(); store.set('voxel.seed', 1 + ((Math.random() * 99998) | 0)); scene.regenerate?.(); }
});

// Headless harness hook.
window.lab = { scene, store, panel, presets: presetApi, frame, busy: false };
