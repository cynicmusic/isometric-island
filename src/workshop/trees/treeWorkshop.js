// TREE WORKSHOP — standalone, COMPLETELY INDEPENDENT of the sim (own
// renderer/scene/lights). Reuses, read-only: FlyCameraDirector (the sim's
// WASD/altitude posture) and panel.css (the sim's panel GRAMMAR — collapsible
// icon·label·blurb sections, ff-field/ff-slider rows) so tuning here uses the
// exact conventions of the main sim. Does NOT import Scene/PostFX/lab/terrain
// (the in-flight god-ray work is off limits). Vite-dev at /workshop/trees/.
//
// Variant matrix: X sweeps one param across its range, Z = seed variants —
// fly it with WASD, pick the column. Palm crowns sway live (first-class).

import * as THREE from 'three';
import '../../ui/panel.css';
import { FlyCameraDirector } from '../../camera/FlyCameraDirector.js';
import { PerfOverlay } from '../../ui/PerfOverlay.js';
import { TREE_CLASSES, classDefaults, makeWorkshopTree } from './models.js';

const host = document.getElementById('ws-canvas');
const ui = document.getElementById('ui-root');

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x0d1410, 1);
host.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x12201c, 320, 720);
const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.4, 3000);
camera.position.set(0, 24, 92);
camera.lookAt(0, 13, 0);
const fly = new FlyCameraDirector(camera, renderer.domElement);

scene.add(new THREE.HemisphereLight(0xcfe8ff, 0x46381f, 0.75));
const sun = new THREE.DirectionalLight(0xffe9c8, 1.45);
sun.position.set(120, 180, 80);
scene.add(sun);
scene.add(new THREE.AmbientLight(0xffffff, 0.12));

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(4000, 4000).rotateX(-Math.PI / 2),
  new THREE.MeshStandardMaterial({ color: 0x223226, roughness: 1, side: THREE.DoubleSide }));
ground.position.y = -0.02;
scene.add(ground);
const grid = new THREE.GridHelper(1600, 80, 0x2f5a3c, 0x1c3326);
grid.position.y = 0.01;
scene.add(grid);

// ---- variant matrix ------------------------------------------------------
const state = {
  kind: 'palm', axisParam: 'droop', gx: 6, gz: 4, spacing: 22,
  seed: 1337, overrides: classDefaults('palm'),
};
let matrix = null;

function rebuildMatrix() {
  if (matrix) {
    scene.remove(matrix);
    matrix.traverse((o) => { o.geometry?.dispose(); o.material?.dispose(); });
  }
  matrix = new THREE.Group();
  const cls = TREE_CLASSES[state.kind];
  const [min, max] = cls.params[state.axisParam] || [0, 1];
  const x0 = -((state.gx - 1) * state.spacing) / 2;
  const z0 = -((state.gz - 1) * state.spacing) / 2;
  for (let ix = 0; ix < state.gx; ix++) {
    const v = state.gx === 1 ? (min + max) / 2 : min + (max - min) * (ix / (state.gx - 1));
    for (let iz = 0; iz < state.gz; iz++) {
      const m = makeWorkshopTree(state.kind, (state.seed + ix * 911 + iz * 2654435761) >>> 0,
        { ...state.overrides, [state.axisParam]: v }, !cls.enabled);
      if (!m) continue;
      m.position.set(x0 + ix * state.spacing, 0, z0 + iz * state.spacing);
      matrix.add(m);
    }
  }
  scene.add(matrix);
  readout();
}

// ---- panel — the SIM's grammar (panel.css): collapsible icon·label·blurb
// sections, ff-field/ff-slider rows ---------------------------------------
const panel = document.createElement('div');
panel.className = 'ff-panel';
panel.innerHTML =
  `<div class="ff-panel-header"><div class="ff-panel-status ok">tree workshop</div></div>
   <div class="ff-panel-body" id="ws-body"></div>
   <div class="ff-panel-footer" id="ws-footer"></div>`;
ui.appendChild(panel);
const body = panel.querySelector('#ws-body');
const statusEl = panel.querySelector('.ff-panel-status');
let statusTimer = null;
function flashStatus(msg, kind = 'ok') {
  statusEl.textContent = msg;
  statusEl.className = 'ff-panel-status ' + kind;
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => { statusEl.textContent = 'tree workshop'; statusEl.className = 'ff-panel-status ok'; }, 2400);
}

// --- full sim chrome: handle (◧, H) + hints + perf overlay (F) -----------
let collapsed = false;
const handle = document.createElement('button');
handle.className = 'ff-panel-handle';
handle.textContent = '◧';
handle.title = 'open controls (h)';
handle.addEventListener('click', togglePanel);
document.body.appendChild(handle);
const hints = document.createElement('div');
hints.className = 'ff-hints show';
hints.innerHTML = `<kbd>WASD</kbd> fly <kbd>Q/↑↓</kbd> alt <kbd>drag</kbd> look <kbd>H</kbd> panel <kbd>F</kbd> perf`;
document.body.appendChild(hints);
function togglePanel() {
  collapsed = !collapsed;
  panel.classList.toggle('collapsed', collapsed);
  handle.classList.toggle('visible', collapsed);
  hints.classList.toggle('show', !collapsed);
}
// PerfOverlay reused verbatim from the sim — tri / draw / fps + tree count.
const perf = new PerfOverlay({ scene: { renderer, get treeCount() { return matrix ? matrix.children.length : 0; } } });
ui.appendChild(perf.root);
perf.toggle();                                  // workshop: show it by default

// --- workshop-local presets (independent: localStorage + JSON export so
// param-space can be pasted back to chat — no sim presets.json / no server)
const PKEY = 'treeWorkshop.presets.v1';
function loadSlots() { try { return JSON.parse(localStorage.getItem(PKEY)) || {}; } catch { return {}; } }
function saveSlots(s) { try { localStorage.setItem(PKEY, JSON.stringify(s)); } catch { /* private mode */ } }
let slots = loadSlots();
function capture() {
  return { v: 1, kind: state.kind, axisParam: state.axisParam, gx: state.gx, gz: state.gz,
    seed: state.seed, overrides: { ...state.overrides } };
}
function applyPreset(p) {
  if (!p || !p.overrides) return false;
  state.kind = p.kind in TREE_CLASSES ? p.kind : 'palm';
  state.overrides = { ...classDefaults(state.kind), ...p.overrides };
  state.axisParam = TREE_CLASSES[state.kind].params[p.axisParam] ? p.axisParam : Object.keys(TREE_CLASSES[state.kind].params)[0];
  state.gx = p.gx || state.gx; state.gz = p.gz || state.gz; state.seed = p.seed || state.seed;
  rebuildPanel(); rebuildMatrix();
  return true;
}

const SEL = 'background:#0e1a14;color:#cfe7d8;border:1px solid #2c4a38;border-radius:4px;padding:3px;width:100%';

function section(icon, label, blurb, open, buildInner) {
  const root = document.createElement('div');
  root.className = 'ff-section' + (open ? ' open' : '');
  root.innerHTML =
    `<div class="ff-section-head"><span class="ff-section-icon">${icon}</span>` +
    `<span class="ff-section-label">${label}</span>` +
    `<span class="ff-section-blurb">${blurb}</span>` +
    `<span class="ff-section-chevron">▸</span></div>` +
    `<div class="ff-section-body"></div>`;
  root.querySelector('.ff-section-head').addEventListener('click', () => root.classList.toggle('open'));
  buildInner(root.querySelector('.ff-section-body'));
  body.appendChild(root);
  return root;
}

function sliderField(parent, key, min, max, def, isAxis) {
  const span = max - min;
  const step = span <= 4 ? 0.01 : span <= 30 ? 0.5 : 1;
  const row = document.createElement('div');
  row.className = 'ff-field';
  row.style.opacity = isAxis ? '0.5' : '1';
  row.innerHTML =
    `<div class="ff-field-label"><span class="ff-field-name">${key}${isAxis ? ' · ▤ matrix X' : ''}</span></div>
     <div class="ff-field-value">${(+def).toFixed(2)}</div>
     <div class="ff-field-control"><div class="ff-slider">
       <input type="range" min="${min}" max="${max}" step="${step}" value="${def}" ${isAxis ? 'disabled' : ''}>
     </div></div>`;
  const inp = row.querySelector('input');
  const valEl = row.querySelector('.ff-field-value');
  const sl = row.querySelector('.ff-slider');
  const paint = (v) => { sl.style.setProperty('--ff-pct', `${((v - min) / span * 100).toFixed(1)}%`); };
  paint(def);
  inp.addEventListener('input', () => {
    const v = Number(inp.value);
    state.overrides[key] = v; valEl.textContent = v.toFixed(2); paint(v);
    rebuildMatrix();
  });
  parent.appendChild(row);
}

let kindSel, axisSel;
function rebuildPanel() {
  body.innerHTML = '';
  const cls = TREE_CLASSES[state.kind];

  // matrix controls — top section, sim grammar
  section('▦', 'matrix', 'species · sweep axis · grid', true, (bx) => {
    const mk = (label, el) => {
      const f = document.createElement('div'); f.className = 'ff-field';
      f.innerHTML = `<div class="ff-field-label"><span class="ff-field-name">${label}</span></div>`;
      const c = document.createElement('div'); c.className = 'ff-field-control';
      c.appendChild(el); f.appendChild(c); bx.appendChild(f);
    };
    kindSel = document.createElement('select'); kindSel.style.cssText = SEL;
    for (const [k, c] of Object.entries(TREE_CLASSES)) {
      const o = document.createElement('option'); o.value = k; o.textContent = c.label; kindSel.appendChild(o);
    }
    kindSel.value = state.kind;
    kindSel.addEventListener('change', () => {
      state.kind = kindSel.value; state.overrides = classDefaults(state.kind);
      if (!TREE_CLASSES[state.kind].params[state.axisParam]) state.axisParam = Object.keys(TREE_CLASSES[state.kind].params)[0];
      rebuildPanel(); rebuildMatrix();
    });
    mk('species', kindSel);
    axisSel = document.createElement('select'); axisSel.style.cssText = SEL;
    for (const k of Object.keys(cls.params)) {
      const o = document.createElement('option'); o.value = k; o.textContent = k; axisSel.appendChild(o);
    }
    axisSel.value = state.axisParam;
    axisSel.addEventListener('change', () => { state.axisParam = axisSel.value; rebuildPanel(); rebuildMatrix(); });
    mk('matrix X (sweep)', axisSel);
    const grid2 = document.createElement('div');
    grid2.style.cssText = 'display:flex;gap:8px';
    grid2.innerHTML =
      `<label style="flex:1;font-size:11px">X steps<input id="ws-gx" type="number" min="1" max="10" value="${state.gx}" style="${SEL}"></label>
       <label style="flex:1;font-size:11px">Z seeds<input id="ws-gz" type="number" min="1" max="8" value="${state.gz}" style="${SEL}"></label>`;
    mk('grid', grid2);
    grid2.querySelector('#ws-gx').addEventListener('change', (e) => { state.gx = Math.max(1, Math.min(10, +e.target.value | 0)); rebuildMatrix(); });
    grid2.querySelector('#ws-gz').addEventListener('change', (e) => { state.gz = Math.max(1, Math.min(8, +e.target.value | 0)); rebuildMatrix(); });
    const rb = document.createElement('button');
    rb.className = 'ff-btn ff-mini'; rb.textContent = 'reseed variants';
    rb.style.cssText = 'width:100%;margin-top:6px;background:#1c3326;color:#bdf0c8;border:1px solid #2c5a3c;border-radius:4px;padding:6px;cursor:pointer';
    rb.addEventListener('click', () => { state.seed = 1 + ((Math.random() * 99998) | 0); rebuildMatrix(); });
    mk('', rb);
    const ro = document.createElement('div'); ro.id = 'ws-readout';
    ro.style.cssText = 'font-size:10px;opacity:.7;white-space:pre-line;padding:2px 0';
    bx.appendChild(ro);
  });

  // the class's categorized param sections — adopting the sim grammar
  for (const sec of cls.sections) {
    section(sec.icon, sec.label, sec.blurb, true, (bx) => {
      for (const key of sec.keys) {
        const [min, max, def] = cls.params[key];
        sliderField(bx, key, min, max, state.overrides[key] ?? def, key === state.axisParam);
      }
    });
  }
  readout();
}

function readout() {
  const el = panel.querySelector('#ws-readout');
  if (!el) return;
  const [min, max] = TREE_CLASSES[state.kind].params[state.axisParam];
  el.textContent = `seed ${state.seed}\nX = ${state.axisParam}: ${min} → ${max} (${state.gx})  ·  Z = ${state.gz} seeds`;
}

// --- footer: preset slots (sim grammar) + JSON share -------------------
const footer = panel.querySelector('#ws-footer');
const presetsRow = document.createElement('div');
presetsRow.className = 'ff-presets';
const slotEls = [];
for (let i = 1; i <= 8; i++) {
  const b = document.createElement('button');
  b.className = 'ff-preset';
  b.innerHTML = `<span class="ff-preset-num">${i}</span>`;
  b.title = `slot ${i} — click load · shift-click save`;
  b.addEventListener('click', (e) => {
    if (e.shiftKey) {
      slots[i] = capture(); saveSlots(slots); refreshSlots();
      flashStatus(`saved slot ${i}`);
    } else if (slots[i]) {
      applyPreset(slots[i]); flashStatus(`loaded slot ${i}`);
    } else flashStatus(`slot ${i} empty`, 'err');
  });
  presetsRow.appendChild(b); slotEls[i] = b;
}
footer.appendChild(presetsRow);
function refreshSlots() {
  for (let i = 1; i <= 8; i++) slotEls[i].classList.toggle('filled', !!slots[i]);
}
refreshSlots();

const io = document.createElement('textarea');
io.spellcheck = false;
io.style.cssText = 'display:none;width:100%;height:96px;margin-top:6px;font:10px/1.3 ui-monospace,monospace;' +
  'background:#0a120d;color:#bfe9c8;border:1px solid #2c4a38;border-radius:4px;padding:6px;resize:vertical';
const trio = document.createElement('div');
trio.className = 'ff-btn-trio';
trio.style.marginTop = '6px';
const mkBtn = (label, fn) => {
  const x = document.createElement('button'); x.className = 'ff-btn ff-mini'; x.textContent = label;
  x.addEventListener('click', fn); return x;
};
trio.appendChild(mkBtn('default', () => {
  state.overrides = classDefaults(state.kind); rebuildPanel(); rebuildMatrix();
  flashStatus('defaults restored');
}));
trio.appendChild(mkBtn('copy JSON', () => {
  const txt = JSON.stringify(capture(), null, 2);
  io.style.display = 'block'; io.value = txt; io.select();
  navigator.clipboard?.writeText(txt).then(
    () => flashStatus('params copied — paste to chat'),
    () => flashStatus('select + ⌘C the box', 'err'));
}));
trio.appendChild(mkBtn('import', () => {
  if (io.style.display === 'none') { io.style.display = 'block'; io.value = ''; io.focus(); flashStatus('paste JSON, then import again'); return; }
  try { applyPreset(JSON.parse(io.value)); flashStatus('preset applied'); io.style.display = 'none'; }
  catch { flashStatus('bad JSON', 'err'); }
}));
footer.appendChild(trio);
footer.appendChild(io);

rebuildPanel();
rebuildMatrix();

window.addEventListener('keydown', (e) => {
  const t = e.target;
  if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return;
  const k = e.key.toLowerCase();
  if (k === 'h' || k === 'b') { e.preventDefault(); togglePanel(); }
  else if (k === 'f') { e.preventDefault(); perf.toggle(); }
});

addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

let prev = performance.now(), tSway = 0;
(function tick(now) {
  requestAnimationFrame(tick);
  const dt = Math.min(0.05, ((now || prev) - prev) / 1000); prev = now || prev;
  tSway += dt;
  fly.update(dt);
  if (matrix) for (const g of matrix.children) {
    const s = g.userData.sway; if (!s) continue;
    const ang = Math.sin(tSway * s.speed + s.phase) * s.amp;
    if (s.crown) { s.crown.rotation.z = ang; s.crown.rotation.x = ang * 0.5; }
    g.rotation.z = ang * 0.25;
  }
  renderer.render(scene, camera);
})(prev);

window.treeWorkshop = { scene, state, rebuildMatrix, TREE_CLASSES };
