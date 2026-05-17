import './styles.css';
import './ui/panel.css';
import { Scene } from './core/Scene.js';
import { ParamStore } from './state/ParamStore.js';
import { schema, sectionOrder } from './config/paramSchema.js';
import { defaultParams } from './config/defaults.js';
import { ControlPanel } from './ui/ControlPanel.js';
import { PerfOverlay } from './ui/PerfOverlay.js';
import { loadSticky, setSticky, clearSticky } from './config/sticky.js';
import { loadPresets, savePresetToDisk } from './config/presets.js';

const canvasContainer = document.getElementById('canvas-container');
const uiRoot = document.getElementById('ui-root');

// ---- sticky params ----------------------------------------------------------
const stickyMap = await loadSticky();           // { path: pinnedValue }
const stickyPaths = new Set(Object.keys(stickyMap));

function setAt(obj, path, value) {
  const parts = path.split('.');
  const last = parts.pop();
  let n = obj;
  for (const p of parts) n = (n[p] ??= {});
  n[last] = value;
}

// Presets must be available before boot: a reload restores preset 1 (the
// "default" slot) as the full startup state — every param + camera pose.
const presets = await loadPresets();
let activeBank = 'A';
const bootPreset = presets['A1'];           // bank A slot 1 = the boot state

function deepMerge(target, source) {
  for (const k in source) {
    const sv = source[k];
    if (sv && typeof sv === 'object' && !Array.isArray(sv)) {
      if (target[k] == null || typeof target[k] !== 'object') target[k] = {};
      deepMerge(target[k], sv);
    } else {
      target[k] = Array.isArray(sv) ? sv.slice() : sv;
    }
  }
  return target;
}

// Preset 1 is the explicit full-state startup snapshot: when it exists it
// wins OUTRIGHT, so a reload reproduces it EXACTLY — identical to pressing
// "1" at runtime (which is store.fromJSON(preset), no sticky). Overlaying
// sticky here was the bug: the default-sticky voxel.seed/render.fov (and any
// pin) clobbered the preset's seed/fov → wrong island/zoom on reload only.
// Sticky still governs the no-preset boot and all runtime pinning.
const boot = structuredClone(defaultParams);
if (bootPreset && bootPreset.params) {
  deepMerge(boot, bootPreset.params);
} else {
  if (!stickyPaths.has('voxel.seed')) setAt(boot, 'voxel.seed', 1 + ((Math.random() * 99998) | 0));
  for (const [p, v] of Object.entries(stickyMap)) setAt(boot, p, v);
}

const store = new ParamStore(boot);
const scene = new Scene(canvasContainer, store);

// Reload also restores preset 1's camera pose — set after Scene built its
// default camera, before the render loop starts.
if (bootPreset && bootPreset.cam) {
  scene.camera.position.fromArray(bootPreset.cam.p);
  scene.camera.quaternion.fromArray(bootPreset.cam.q);
  scene.camera.updateMatrixWorld();
}

// Keep disk in sync: whenever a sticky param changes, re-pin it.
store.subscribe((evt) => {
  if (evt.path && evt.path !== '*' && stickyPaths.has(evt.path)) {
    stickyMap[evt.path] = evt.value;
    setSticky(evt.path, evt.value, true);
  }
});

const sticky = {
  has: (p) => stickyPaths.has(p),
  toggle: (p) => {
    if (stickyPaths.has(p)) {
      stickyPaths.delete(p);
      delete stickyMap[p];
      setSticky(p, undefined, false);
    } else {
      stickyPaths.add(p);
      const v = store.get(p);
      stickyMap[p] = v;
      setSticky(p, v, true);
    }
    return stickyPaths.has(p);
  },
};

// ---- presets ---------------------------------------------------------------
// A preset is a FULL snapshot: every param + camera pose. Eight slots.
// Loading never touches sticky pins (that is the only thing separating
// "load slot 1" from the "default" button). Slot 1 is also the reload
// startup state (see boot above).

function capturePreset() {
  const c = scene.camera;
  return {
    params: store.toJSON(),
    cam: { p: c.position.toArray(), q: c.quaternion.toArray() },
    t: Date.now(),
  };
}

function applyPreset(p) {
  if (!p || !p.params) return false;
  store.fromJSON(p.params);                       // notifies '*'
  scene.regenerate();                             // immediate, supersedes debounce
  if (p.cam) {
    scene.camera.position.fromArray(p.cam.p);
    scene.camera.quaternion.fromArray(p.cam.q);
    scene.camera.updateMatrixWorld();
  }
  return true;
}

const keyOf = (slot) => `${activeBank}${slot}`;   // e.g. "A1".."H8"

function savePreset(slot) {
  const key = keyOf(slot);
  const p = capturePreset();
  presets[key] = p;
  savePresetToDisk(key, p);
  panel.refreshPresets();
  panel.flashStatus(key === 'A1' ? 'saved A1 · default' : `saved ${key}`, 'ok');
}

function loadPreset(slot) {
  const key = keyOf(slot);
  const p = presets[key];
  if (!p) { panel.flashStatus(`${key} empty`, 'err'); return; }
  applyPreset(p);
  panel.refreshPresets();
  panel.flashStatus(`loaded ${key}`, 'ok');
}

function setBank(bank) {
  if (!/^[A-H]$/.test(bank) || bank === activeBank) return;
  activeBank = bank;
  panel.refreshPresets();
  panel.flashStatus(`bank ${bank}`, 'ok');
}

const presetApi = {
  slots: presets, save: savePreset, load: loadPreset,
  setBank, getBank: () => activeBank,
};

const panel = new ControlPanel({ store, schema, sectionOrder, sticky, presets: presetApi, onAction: handleAction });
uiRoot.appendChild(panel.root);

const perf = new PerfOverlay({ scene });
uiRoot.appendChild(perf.root);

scene.start();

function handleAction(action) {
  switch (action) {
    case 'default':
      clearSticky();
      stickyPaths.clear();
      for (const k of Object.keys(stickyMap)) delete stickyMap[k];
      store.reset();
      scene.regenerate();                         // immediate — no delayed fade pop
      panel.refreshSticky();
      panel.flashStatus('default · sticky cleared', 'ok');
      break;
    case 'baseline':
      // Safety net: snap back to the golden A1 preset (or built-in defaults),
      // then force every post-FX feature to its zero-cost off state.
      if (presets['A1'] && presets['A1'].params) {
        applyPreset(presets['A1']);
      } else {
        store.reset();
        scene.regenerate();
      }
      store.set('lighting.bloom', 0);
      store.set('lighting.aerialHaze', 0);
      store.set('godrays.enable', false);
      panel.refreshPresets();
      panel.flashStatus('baseline · FX off', 'ok');
      break;
    case 'random':
      randomize();
      panel.flashStatus('rolled', 'ok');
      break;
    default:
      console.warn('unknown action', action);
  }
}

function rnd(min, max) { return min + Math.random() * (max - min); }

// randomize NEVER writes a sticky param.
function randomize() {
  const set = (p, v) => { if (!stickyPaths.has(p)) store.set(p, v); };
  set('voxel.seed', 1 + ((Math.random() * 99998) | 0));
  set('sun.elevationDeg', rnd(8, 62));
  set('sun.azimuthDeg', rnd(-180, 180));
  set('seasons.sweepDeg', rnd(-180, 180));
  set('island.warp', rnd(0.5, 1.4));
  set('island.ridge', rnd(0.4, 1.1));
  set('island.lowland', rnd(18, 50));
  set('island.massif', rnd(90, 240));
  scene.regenerate();                             // immediate, single rebuild
}

// H/B panel · G god rays · F fps · R randomize · Esc closes panel (NOT D — D is WASD).
// A focused range slider must NOT eat these — only ignore real text entry.
window.addEventListener('keydown', (event) => {
  if (event.repeat) return;                       // ignore OS key-repeat (was double-randomizing)
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  const t = event.target;
  const isTextEntry = t && (t.tagName === 'TEXTAREA' ||
    (t.tagName === 'INPUT' && t.type !== 'range'));
  if (isTextEntry) return;
  const k = event.key.toLowerCase();
  const blur = () => { if (t && t.tagName === 'INPUT' && t.blur) t.blur(); };
  // Presets: digit 1-8 loads, Shift+digit saves. Use event.code (layout-
  // independent) so Shift+1 isn't read as "!". Shift is allowed through the
  // modifier guard above (only meta/ctrl/alt bail).
  const slotMatch = /^(?:Digit|Numpad)([1-8])$/.exec(event.code);
  if (slotMatch) {
    event.preventDefault(); blur();
    const slot = Number(slotMatch[1]);
    if (event.shiftKey) savePreset(slot); else loadPreset(slot);
    return;
  }
  if (k === 'h' || k === 'b') { event.preventDefault(); blur(); panel.toggle(); }
  else if (k === 'g') {
    event.preventDefault(); blur();
    const next = !store.get('godrays.enable');
    store.set('godrays.enable', next);
    panel.flashStatus(next ? 'god rays on' : 'god rays off', 'ok');
  }
  else if (k === 'escape') {
    event.preventDefault(); blur();
    if (!panel.collapsed) panel.toggle();
  }
  else if (k === 'f') { event.preventDefault(); blur(); perf.toggle(); }
  else if (k === 'r') { event.preventDefault(); blur(); randomize(); panel.flashStatus('rolled', 'ok'); }
});

window.isometric = { scene, store, panel, perf, sticky, presets: presetApi };
