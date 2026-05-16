// Smoke + visual harness. Headless Chromium: capture console errors, dump
// scene debug, screenshot the island from several posed vantages and across
// param changes (sun, seasons, reseed). Same posture as sunset/scripts/smoke.mjs.

import { chromium } from '../../fire-whisp/node_modules/playwright/index.mjs';
import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const URL = process.env.URL || 'http://127.0.0.1:5193/';
const ART = path.resolve(__dirname, '..', 'artifacts');
await fs.mkdir(ART, { recursive: true });

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

await page.goto(URL, { waitUntil: 'load', timeout: 15000 });
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
  s1el: window.isometric.presets.slots['1']?.params?.sun?.elevationDeg,
  liveEl: window.isometric.store.get('sun.elevationDeg'),
}));

// Reload restores preset 1 (params + camera). Write a sentinel slot 1 with
// awaited disk persistence, do a REAL page reload, and read back.
await page.evaluate(async () => {
  window.isometric.store.set('sun.elevationDeg', 41);
  const c = window.isometric.scene.camera;
  c.position.set(123, 234, 345);
  c.updateMatrixWorld();
  const preset = {
    params: window.isometric.store.toJSON(),
    cam: { p: c.position.toArray(), q: c.quaternion.toArray() },
    t: Date.now(),
  };
  window.isometric.presets.slots['1'] = preset;
  await fetch('/__iso-presets', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slot: 1, preset }),
  });
});
await page.reload({ waitUntil: 'load', timeout: 15000 });
await page.waitForTimeout(2600);
const reloadCheck = await page.evaluate(() => ({
  el: window.isometric.store.get('sun.elevationDeg'),
  camX: Math.round(window.isometric.scene.camera.position.x),
}));
if (reloadCheck.el !== 41 || reloadCheck.camX !== 123) {
  errors.push(`reload did not restore preset 1: ${JSON.stringify(reloadCheck)} (want el=41 camX=123)`);
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
console.log('\nOK — no console errors · artifacts in artifacts/');
