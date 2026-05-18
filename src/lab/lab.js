// LAB SIM COPY — this file intentionally mirrors src/main.js for render-path
// troubleshooting. Persistence is read-only here: presets load, but saves and
// sticky pins stay in memory so lab work cannot mutate the main sim state.

import '../styles.css';
import '../ui/panel.css';
import { Scene } from '../core/Scene.js';
import { ParamStore } from '../state/ParamStore.js';
import { schema, sectionOrder } from '../config/paramSchema.js';
import { defaultParams } from '../config/defaults.js';
import { ControlPanel } from '../ui/ControlPanel.js';
import { PerfOverlay } from '../ui/PerfOverlay.js';
import { BuildConsole } from '../ui/BuildConsole.js';
import { loadPresets } from '../config/presets.js';

const canvasContainer = document.getElementById('canvas-container');
const uiRoot = document.getElementById('ui-root');

// ---- lab-local sticky params ----------------------------------------------
const stickyMap = {};
const stickyPaths = new Set();

function setAt(obj, path, value) {
  const parts = path.split('.');
  const last = parts.pop();
  let n = obj;
  for (const p of parts) n = (n[p] ??= {});
  n[last] = value;
}

const presets = await loadPresets();
let activeBank = 'A';
const bootPreset = presets['A1'];

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

const boot = structuredClone(defaultParams);
if (bootPreset && bootPreset.params) {
  deepMerge(boot, bootPreset.params);
} else if (!stickyPaths.has('voxel.seed')) {
  setAt(boot, 'voxel.seed', 1 + ((Math.random() * 99998) | 0));
}

const store = new ParamStore(boot);
const buildConsole = new BuildConsole({ parent: uiRoot, label: 'lab sim build' });
const scene = new Scene(canvasContainer, store, { loader: buildConsole });

if (bootPreset && bootPreset.cam) {
  scene.camera.position.fromArray(bootPreset.cam.p);
  scene.camera.quaternion.fromArray(bootPreset.cam.q);
  scene.camera.updateMatrixWorld();
}

const sticky = {
  has: (p) => stickyPaths.has(p),
  toggle: (p) => {
    if (stickyPaths.has(p)) {
      stickyPaths.delete(p);
      delete stickyMap[p];
    } else {
      stickyPaths.add(p);
      stickyMap[p] = store.get(p);
    }
    return stickyPaths.has(p);
  },
};

function applyPreset(p) {
  if (!p || !p.params) return false;
  store.fromJSON(p.params);
  scene.regenerate();
  if (p.cam) {
    scene.camera.position.fromArray(p.cam.p);
    scene.camera.quaternion.fromArray(p.cam.q);
    scene.camera.updateMatrixWorld();
  }
  return true;
}

const keyOf = (slot) => `${activeBank}${slot}`;

function savePreset(slot) {
  panel.flashStatus(`${keyOf(slot)} save disabled in lab`, 'err');
}

function loadPreset(slot) {
  const key = keyOf(slot);
  const p = presets[key];
  if (!p) { panel.flashStatus(`${key} empty`, 'err'); return; }
  applyPreset(p);
  panel.refreshPresets();
  panel.flashStatus(`loaded ${key} · lab copy`, 'ok');
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
panel.flashStatus('lab sim copy · preset save disabled', 'ok');

const perf = new PerfOverlay({ scene });
uiRoot.appendChild(perf.root);

scene.start();

function handleAction(action) {
  switch (action) {
    case 'default':
      stickyPaths.clear();
      for (const k of Object.keys(stickyMap)) delete stickyMap[k];
      store.reset();
      scene.regenerate();
      panel.refreshSticky();
      panel.flashStatus('lab default · disk untouched', 'ok');
      break;
    case 'baseline':
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
  scene.regenerate();
}

window.addEventListener('keydown', (event) => {
  if (event.repeat) return;
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  const t = event.target;
  const isTextEntry = t && (t.tagName === 'TEXTAREA' ||
    (t.tagName === 'INPUT' && t.type !== 'range'));
  if (isTextEntry) return;
  const k = event.key.toLowerCase();
  const blur = () => { if (t && t.tagName === 'INPUT' && t.blur) t.blur(); };
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

window.lab = { scene, store, panel, perf, sticky, presets: presetApi };
window.isometric = window.lab;
