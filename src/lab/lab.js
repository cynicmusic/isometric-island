// LAB SIM COPY — this file intentionally mirrors src/main.js for render-path
// troubleshooting. Persistence is read-only here: presets load, but saves and
// sticky pins stay in memory so lab work cannot mutate the main sim state.

import '../styles.css';
import '../ui/panel.css';
import { Scene } from '../core/Scene.js';
import { ParamStore } from '../state/ParamStore.js';
import { schema as simSchema, sectionOrder } from '../config/paramSchema.js';
import { defaultParams } from '../config/defaults.js';
import { ControlPanel } from '../ui/ControlPanel.js';
import { PerfOverlay } from '../ui/PerfOverlay.js';
import { BuildConsole } from '../ui/BuildConsole.js';
import { loadPresets } from '../config/presets.js';
import { GODRAY_RECIPES } from '../config/godrayRecipes.js';
import { GodRayWorkshopPanel, cloneValue } from '../ui/GodRayWorkshopPanel.js';

const canvasContainer = document.getElementById('canvas-container');
const uiRoot = document.getElementById('ui-root');
const isGodrayWorkshop = location.pathname.includes('/workshop/godrays');
const modeLabel = isGodrayWorkshop ? 'god ray workshop' : 'lab sim copy';

// Lab-only god-ray workshop controls. The shader accepts these with neutral
// defaults, but the public sim panel stays clean until an experiment earns it.
const schema = structuredClone(simSchema);
Object.assign(schema.godrays.fields, {
  edgeSource: { type: 'float', label: 'Edge source', min: 0, max: 1, step: 0.02, default: 0, hint: '0 = current source · 1 = sky/occluder ridge transport' },
  edgeWidth: { type: 'float', label: 'Edge width', min: 0.35, max: 8, step: 0.05, default: 1.2, hint: 'neighbor distance in god buffer texels' },
  edgeGain: { type: 'float', label: 'Edge gain', min: 0, max: 12, step: 0.05, default: 1, hint: 'how hard ridge edges emit rays' },
  debugView: { type: 'int', label: 'Debug view', min: 0, max: 3, step: 1, default: 0, hint: '0 final · 1 source · 2 edge · 3 rays only' },
  debugGain: { type: 'float', label: 'Debug gain', min: 0.1, max: 20, step: 0.1, default: 1, hint: 'viewer gain for source/edge/ray debug buffers' },
});

const labGodrayDefaults = {
  edgeSource: 0,
  edgeWidth: 1.2,
  edgeGain: 1,
  debugView: 0,
  debugGain: 1,
};
const godrayBlurDefaults = {
  blurEnable: defaultParams.godrays.blurEnable,
  blurAmount: defaultParams.godrays.blurAmount,
  blurRadius: defaultParams.godrays.blurRadius,
  blurPasses: defaultParams.godrays.blurPasses,
};

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

function ensureLabGodrayParams(force = false) {
  for (const [key, value] of Object.entries(labGodrayDefaults)) {
    const path = `godrays.${key}`;
    if (force || store.get(path) === undefined) store.set(path, value);
  }
}

function ensureGodrayBlurParams(snapshot = {}) {
  const godrays = snapshot.godrays || {};
  for (const [key, value] of Object.entries(godrayBlurDefaults)) {
    if (godrays[key] === undefined) store.set(`godrays.${key}`, value);
  }
}

function captureSceneGodrayBase() {
  sceneGodrayBase = {
    ...cloneValue(defaultParams.godrays),
    ...cloneValue(store.get('godrays') || {}),
    ...labGodrayDefaults,
  };
  workshopHud?.setActive(1);
}

const presets = await loadPresets();
let activeBank = 'A';
const bootPreset = presets['A1'];
let sceneGodrayBase = null;

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
for (const [key, value] of Object.entries(labGodrayDefaults)) {
  setAt(boot, `godrays.${key}`, value);
}
if (bootPreset && bootPreset.params) {
  deepMerge(boot, bootPreset.params);
} else if (!stickyPaths.has('voxel.seed')) {
  setAt(boot, 'voxel.seed', 1 + ((Math.random() * 99998) | 0));
}

const store = new ParamStore(boot);
const buildConsole = new BuildConsole({ parent: uiRoot, label: `${modeLabel} build` });
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
  ensureGodrayBlurParams(p.params);
  ensureLabGodrayParams(false);
  captureSceneGodrayBase();
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

let workshopHud = null;
const panel = new ControlPanel({
  store,
  schema,
  sectionOrder,
  sticky,
  presets: presetApi,
  onAction: handleAction,
  onToggle: (collapsed) => { if (collapsed) workshopHud?.setCollapsed(true); },
});
uiRoot.appendChild(panel.root);
panel.flashStatus(`${modeLabel} · preset save disabled`, 'ok');

workshopHud = new GodRayWorkshopPanel({
  store,
  recipes: GODRAY_RECIPES,
  applyRecipe: applyGodrayRecipe,
});
uiRoot.appendChild(workshopHud.root);
captureSceneGodrayBase();
workshopHud.setCollapsed(!store.get('godrays.enable'));

const perf = new PerfOverlay({ scene });
uiRoot.appendChild(perf.root);

scene.start();

function handleAction(action) {
  switch (action) {
    case 'default':
      stickyPaths.clear();
      for (const k of Object.keys(stickyMap)) delete stickyMap[k];
      store.reset();
      ensureLabGodrayParams(true);
      captureSceneGodrayBase();
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
      store.set('godrays.blurEnable', false);
      captureSceneGodrayBase();
      panel.refreshPresets();
      panel.flashStatus('baseline · FX off', 'ok');
      break;
    case 'random':
      randomize();
      captureSceneGodrayBase();
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
  if (t && t.tagName === 'INPUT' && t.type === 'range' && /^[wasdqe]$/.test(k)) blur();
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
    const controlsOpen = !panel.collapsed;
    const next = !store.get('godrays.enable');
    store.set('godrays.enable', next);
    if (controlsOpen) workshopHud.setCollapsed(!next);
    panel.flashStatus(next ? 'god rays on' : 'god rays off', 'ok');
  }
  else if (k === 'x') {
    event.preventDefault(); blur();
    const next = !store.get('shadows.enable');
    store.set('shadows.enable', next);
    panel.flashStatus(next ? 'shadows on' : 'shadows off', 'ok');
  }
  else if (k === 'escape') {
    event.preventDefault(); blur();
    if (!panel.collapsed) panel.toggle();
  }
  else if (k === 'f') { event.preventDefault(); blur(); perf.toggle(); }
  else if (k === 't') { event.preventDefault(); blur(); workshopHud.toggle(); }
  else if (k === 'r') { event.preventDefault(); blur(); randomize(); panel.flashStatus('rolled', 'ok'); }
});

function setPath(path, value) {
  store.set(path, value);
}

function applyGodrayRecipe(recipe) {
  if (!recipe) return false;
  const godrays = recipe.restoreSceneGodrays ? sceneGodrayBase : recipe.godrays;
  for (const [key, value] of Object.entries(godrays || {})) {
    setPath(`godrays.${key}`, value);
  }
  workshopHud.setActive(recipe.id);
  panel.flashStatus(`god recipe ${recipe.id} · ${recipe.label}`, 'ok');
  return true;
}

window.lab = { scene, store, panel, perf, sticky, presets: presetApi, godrayWorkshop: workshopHud, godrayRecipes: GODRAY_RECIPES, applyGodrayRecipe };
window.godrayWorkshop = window.lab;
window.isometric = window.lab;
