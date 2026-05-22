// Smoke + visual harness. Headless Chromium: capture console errors, dump
// scene debug, screenshot the island from several posed vantages and across
// param changes (sun, seasons, reseed).
//
// HARD RULE: this harness NEVER mutates user state. It boots its OWN Vite
// dev server, on a separate port, with throwaway sticky/presets files in an
// OS temp dir (via the ISO_*_FILE env overrides). The user's real
// presets.json / sticky.json are never even opened. Set URL to point at an
// external server and skip the spawn (e.g. CI against a static build).

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';
import fs from 'node:fs/promises';
import { rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
// Screenshots go to a durable location OUTSIDE the repo — raw on the Desktop
// (override with SHOT_DIR). Keeps generated PNGs out of git/working tree.
const ART = process.env.SHOT_DIR || path.join(os.homedir(), 'Desktop');
await fs.mkdir(ART, { recursive: true });

// ---- isolated server (throwaway state) ------------------------------------
let server = null;
let tmpDir = null;
let URL = process.env.URL;

function cleanup() {
  try { if (server && !server.killed) server.kill('SIGTERM'); } catch { /* noop */ }
  try { if (tmpDir) rmSync(tmpDir, { recursive: true, force: true }); } catch { /* noop */ }
}
process.on('exit', cleanup);
process.on('SIGINT', () => { cleanup(); process.exit(130); });
process.on('SIGTERM', () => { cleanup(); process.exit(143); });

if (!URL) {
  const PORT = Number(process.env.SMOKE_PORT) || 5194;
  tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'iso-smoke-'));
  const env = {
    ...process.env,
    ISO_PRESETS_FILE: path.join(tmpDir, 'presets.json'),
    ISO_STICKY_FILE: path.join(tmpDir, 'sticky.json'),
    ISO_CACHE_DIR: path.join(tmpDir, '.vite'),   // private dep cache — no deadlock
  };
  const bin = path.join(REPO, 'node_modules', '.bin', 'vite');
  server = spawn(bin, ['--host', '127.0.0.1', '--port', String(PORT), '--strictPort'],
    { cwd: REPO, env, stdio: 'ignore' });
  server.on('error', (e) => { console.error('failed to spawn vite:', e.message); process.exit(1); });
  server.unref();   // must NOT keep Node's event loop alive, or the script
                    // can never reach exit/cleanup (deadlock: waiting to exit
                    // while the child it must kill is what blocks exit)
  URL = `http://127.0.0.1:${PORT}/`;

  const deadline = Date.now() + 30000;
  for (;;) {
    try { if ((await fetch(URL)).ok) break; } catch { /* not up yet */ }
    if (Date.now() > deadline) throw new Error('isolated vite server did not become ready');
    await new Promise((r) => setTimeout(r, 300));
  }
}

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1600, height: 1000 } });
const page = await ctx.newPage();

const errors = [];
const warnings = [];
page.on('console', (msg) => {
  const txt = msg.text();
  const ignore = txt.includes('GL Driver Message') || txt.includes('THREE.WebGLProgram');
  if (msg.type() === 'error' && !ignore) errors.push(txt);
  if (msg.type() === 'warning' && !ignore) warnings.push(txt);
});
page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}\n${err.stack || ''}`));

await page.goto(URL, { waitUntil: 'load', timeout: 60000 }); // cold dep pre-bundle
await page.waitForTimeout(2600);                 // boot + LUTs + terrain regen

async function pose(px, py, pz, lx, ly, lz) {
  await page.evaluate(([px, py, pz, lx, ly, lz]) => {
    const cam = window.isometric.scene.camera;
    cam.position.set(px, py, pz);
    cam.up.set(0, 1, 0);
    cam.lookAt(lx, ly, lz);
    cam.updateMatrixWorld();
  }, [px, py, pz, lx, ly, lz]);
}
async function shot(name) {
  await page.waitForTimeout(450);
  await page.screenshot({ path: path.join(ART, name) });
}

await shot('smoke-boot.png');

// Default sun is now the raking az -84 / el 26 — shoot it as-is so the
// screenshots reflect what the user actually sees (no flat back-to-sun).
await pose(720, 380, 720, 0, 50, 0);   await shot('smoke-overview.png');
await pose(260, 70, 470, 0, 25, -60);  await shot('smoke-beach.png');
await pose(-520, 230, 540, 0, 40, 0);  await shot('smoke-profile.png');

// Sun low → sunset palette + long raking shadows (keep raking azimuth).
await page.evaluate(() => window.isometric.store.set('sun.elevationDeg', 6));
await pose(700, 150, 720, 0, 40, 0);   await shot('smoke-sunset.png');
await page.evaluate(() => window.isometric.store.set('sun.elevationDeg', 26));

// Top-down — seasons now follow ALTITUDE (peaks=winter, coast=summer);
// confirm contiguous, terrain-correlated, winter never on summer.
await pose(0, 620, 30, 0, 20, 0);      await shot('smoke-seasons-top.png');

// Reseed.
await page.evaluate(() => window.isometric.store.set('voxel.seed', 4242));
await page.waitForTimeout(550);
await pose(700, 430, 700, 0, 50, 0);   await shot('smoke-reseed.png');

// Post-FX active path: bloom + aerial haze (lighting) + god rays + Planet-R
// debug hook. Exercises the offscreen pass/shader compile, screenshots, then
// RESETS so the later reload→A1 guard still sees the golden bypass.
await page.evaluate(() => {
  window.isometric.store.set('lighting.bloom', 0.7);
  window.isometric.store.set('lighting.aerialHaze', 0.45);
  window.isometric.store.set('sun.elevationDeg', 7);          // low sun → god rays
  window.isometric.store.set('godrays.enable', true);
  window.isometric.scene.setExperimental?.({ planetR: true, planetRadiusKm: 1200 });
});
await pose(700, 150, 720, 0, 40, 0);   await shot('smoke-postfx.png');
await page.evaluate(() => {
  window.isometric.scene.setExperimental?.({ planetR: false });
  window.isometric.store.set('lighting.bloom', 0);
  window.isometric.store.set('lighting.aerialHaze', 0);
  window.isometric.store.set('godrays.enable', false);
  window.isometric.store.set('sun.elevationDeg', 26);
});

// Open the panel + pin a couple of params so the UI (pins, gradients,
// hint pill) can be visually reviewed.
await page.evaluate(() => {
  window.isometric.panel.toggle();
  window.isometric.sticky.toggle('island.lowland');   // lime pin
  window.isometric.sticky.toggle('voxel.terraceStep'); // amber structural pin
  window.isometric.panel.refreshSticky();
});

// Presets: save two distinct-looking slots so the 1-8 grid shows its
// per-slot gradient composition, then round-trip a load.
await page.evaluate(() => window.isometric.presets.save(1));         // default slot
await page.evaluate(() => window.isometric.store.set('sun.elevationDeg', 8));
await page.waitForTimeout(120);
await page.evaluate(() => window.isometric.presets.save(4));         // sunset-ish look
await page.waitForTimeout(120);
await page.evaluate(() => window.isometric.presets.load(1));         // back to default
await page.waitForTimeout(450);
await page.screenshot({ path: path.join(ART, 'smoke-panel.png') });

const presetCheck = await page.evaluate(() => ({
  slots: Object.keys(window.isometric.presets.slots).sort(),
  s1el: window.isometric.presets.slots['A1']?.params?.sun?.elevationDeg,
  liveEl: window.isometric.store.get('sun.elevationDeg'),
}));

// Reload restores preset 1 (params + camera) EXACTLY — identical to pressing
// "1". Regression guard: pin a DIFFERENT sticky seed to disk; preset 1 must
// still win on reload (sticky overlaying the preset was the reload bug).
await page.evaluate(async () => {
  window.isometric.store.set('voxel.seed', 24680);   // preset's seed
  window.isometric.store.set('sun.elevationDeg', 41);
  const c = window.isometric.scene.camera;
  c.position.set(123, 234, 345);
  c.updateMatrixWorld();
  const preset = {
    params: window.isometric.store.toJSON(),
    cam: { p: c.position.toArray(), q: c.quaternion.toArray() },
    t: Date.now(),
  };
  window.isometric.presets.slots['A1'] = preset;
  await fetch('/__iso-presets', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slot: 'A1', preset }),
  });
  // Persist a CONFLICTING sticky seed (written after the store re-pin so it
  // sticks). Pre-fix this clobbered the preset on reload.
  await fetch('/__iso-sticky', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: 'voxel.seed', value: 99999, on: true }),
  });
});
await page.reload({ waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(2600);
const reloadCheck = await page.evaluate(() => ({
  el: window.isometric.store.get('sun.elevationDeg'),
  camX: Math.round(window.isometric.scene.camera.position.x),
  seed: window.isometric.store.get('voxel.seed'),
}));
if (reloadCheck.el !== 41 || reloadCheck.camX !== 123) {
  errors.push(`reload did not restore preset 1: ${JSON.stringify(reloadCheck)} (want el=41 camX=123)`);
}
if (reloadCheck.seed !== 24680) {
  errors.push(`reload: sticky clobbered preset seed — got ${reloadCheck.seed}, want 24680 (sticky was 99999)`);
}

const debug = await page.evaluate(() => window.isometric?.scene?.getDebugInfo?.() ?? null);
const dom = await page.evaluate(() => ({
  canvas: !!document.querySelector('#canvas-container canvas'),
  panelCollapsed: !!document.querySelector('.ff-panel.collapsed'),
  perfHidden: !!document.querySelector('.ff-perf.hidden'),
  hintsHidden: !document.querySelector('.ff-hints.show'),
}));

await browser.close();

console.log('\n=== smoke summary ===');
console.log('dom:', JSON.stringify(dom));
console.log('debug:', JSON.stringify(debug));
console.log('presets:', JSON.stringify(presetCheck));
console.log('reload→preset1:', JSON.stringify(reloadCheck));
if (warnings.length) { console.log(`\nwarnings (${warnings.length}):`); for (const w of warnings) console.log('  ' + w); }
if (errors.length) {
  console.log(`\nerrors (${errors.length}):`);
  for (const e of errors) console.log('  ' + e);
  process.exit(1);
}
console.log(`\nOK — no console errors · screenshots in ${ART}`);
