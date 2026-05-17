// LAB — a separate throwaway app (different port: `npm run lab` → :5180,
// served at /lab/) for headless FX iteration, especially god rays + Planet-R.
// Complete clone of the runtime MINUS the preset/sticky system (deliberate:
// the lab has no presets). Reuses Scene/ParamStore/Experimental verbatim so
// anything tuned here ports straight back. Authoritative name: "lab".

import '../styles.css';
import '../ui/panel.css';
import './lab.css';
import { Scene } from '../core/Scene.js';
import { ParamStore } from '../state/ParamStore.js';
import { schema } from '../config/paramSchema.js';
import { defaultParams } from '../config/defaults.js';
import { Experimental } from '../experimental/experimental.js';

const canvasContainer = document.getElementById('canvas-container');
const uiRoot = document.getElementById('ui-root');

// Fresh world, random seed, NO presets / NO sticky.
const boot = structuredClone(defaultParams);
boot.voxel.seed = 1 + ((Math.random() * 99998) | 0);
const store = new ParamStore(boot);
const scene = new Scene(canvasContainer, store);

const experimental = new Experimental();
uiRoot.appendChild(experimental.root);
experimental.collapsed = false;                       // lab: open by default
experimental.root.classList.remove('collapsed');
const pushExp = () => scene.setExperimental(experimental.state());
pushExp();
experimental.onChange(pushExp);

// ---- LabExtras: curated quick knobs (no schema panel, no presets) --------
const EXTRAS = [
  ['sun.elevationDeg', -8, 80, 0.5, 'sun elev'],
  ['sun.azimuthDeg', -180, 180, 1, 'sun az'],
  ['sun.intensity', 1, 60, 0.5, 'sun intensity'],
  ['render.exposure', 0.2, 3, 0.01, 'exposure'],
  ['render.fogDensity', 0, 0.006, 0.00005, 'horizon haze (fog)'],
  ['lighting.bloom', 0, 1.5, 0.02, 'bloom'],
  ['lighting.aerialHaze', 0, 1, 0.02, 'aerial haze'],
  ['lighting.skyBounce', 0, 1.6, 0.02, 'GI sky bounce'],
  ['lighting.sunGlint', 0, 2.5, 0.05, 'water sun-glint'],
  ['water.causticIntensity', 0, 3, 0.05, 'caustics'],
  ['island.massif', 0, 360, 10, 'massif'],
  ['seasons.coniferEnd', 0.6, 0.92, 0.01, 'snow line'],
];
const panel = document.createElement('div');
panel.className = 'ff-panel ff-lab';
panel.innerHTML = `<div class="ff-panel-header"><div class="ff-exp-title">lab <span>· extras</span></div></div>`;
const body = document.createElement('div');
body.className = 'ff-panel-body ff-exp-body';
for (const [path, min, max, step, label] of EXTRAS) {
  const row = document.createElement('div');
  row.className = 'ff-field';
  row.innerHTML = `
    <div class="ff-field-label"><span class="ff-field-name">${label}</span></div>
    <div class="ff-field-value"></div>
    <div class="ff-field-control"><div class="ff-slider">
      <input type="range" min="${min}" max="${max}" step="${step}" value="${store.get(path)}" />
    </div></div>`;
  const input = row.querySelector('input');
  const valEl = row.querySelector('.ff-field-value');
  const sl = row.querySelector('.ff-slider');
  const paint = (v) => {
    valEl.textContent = step < 1 ? Number(v).toFixed(step < 0.01 ? 5 : 2) : String(v | 0);
    sl.style.setProperty('--ff-pct', `${((v - min) / (max - min) * 100).toFixed(1)}%`);
  };
  paint(store.get(path));
  input.addEventListener('input', () => { const v = Number(input.value); store.set(path, v); paint(v); });
  body.appendChild(row);
}
const reseed = document.createElement('button');
reseed.className = 'ff-btn ff-mini';
reseed.textContent = 'reseed';
reseed.style.margin = '8px 0 2px';
reseed.addEventListener('click', () => store.set('voxel.seed', 1 + ((Math.random() * 99998) | 0)));
body.appendChild(reseed);
panel.appendChild(body);
uiRoot.appendChild(panel);

scene.start();

window.addEventListener('keydown', (e) => {
  if (e.target && (e.target.tagName === 'INPUT')) return;
  const k = e.key.toLowerCase();
  if (k === 'e') { e.preventDefault(); experimental.toggle(); }
  else if (k === 'r') { e.preventDefault(); store.set('voxel.seed', 1 + ((Math.random() * 99998) | 0)); }
});

// Headless harness hook (scripts/lab.mjs drives this).
window.lab = { scene, store, experimental };
