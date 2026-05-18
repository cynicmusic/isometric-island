// God-ray candidate search for the sim-copy lab.
// Boots /lab/ against the real local preset file (read-only from the page),
// mutates sun/camera/god-ray params, captures 40 PNGs, and writes a manifest.

import { chromium } from '../../fire-whisp/node_modules/playwright/index.mjs';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs/promises';
import { rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const ART = process.env.SHOT_DIR || path.join(REPO, 'artifacts', `godray-search-${stamp}`);
await fs.mkdir(ART, { recursive: true });

let server = null, tmpDir = null;
function cleanup() {
  try { if (server && !server.killed) server.kill('SIGTERM'); } catch { /* noop */ }
  try { if (tmpDir) rmSync(tmpDir, { recursive: true, force: true }); } catch { /* noop */ }
}
process.on('exit', cleanup);
process.on('SIGINT', () => { cleanup(); process.exit(130); });
process.on('SIGTERM', () => { cleanup(); process.exit(143); });

const PORT = Number(process.env.LAB_PORT) || 5181;
tmpDir = await fs.mkdtemp(path.join('/tmp', 'iso-godray-lab-'));
const env = {
  ...process.env,
  ISO_CACHE_DIR: path.join(tmpDir, '.vite'),
  ISO_STICKY_FILE: path.join(tmpDir, 'sticky.json'),
};
server = spawn(path.join(REPO, 'node_modules', '.bin', 'vite'),
  ['--host', '127.0.0.1', '--port', String(PORT), '--strictPort'],
  { cwd: REPO, env, stdio: 'ignore' });
server.on('error', (e) => { console.error('vite spawn failed:', e.message); process.exit(1); });
server.unref();

const URL = `http://127.0.0.1:${PORT}/lab/`;
{
  const deadline = Date.now() + 30000;
  for (;;) {
    try { if ((await fetch(URL)).ok) break; } catch { /* not up */ }
    if (Date.now() > deadline) throw new Error('lab vite did not become ready');
    await new Promise((r) => setTimeout(r, 300));
  }
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return () => {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(0xC0FFEE);
const pick = (arr) => arr[Math.floor(rand() * arr.length) % arr.length];
const rnd = (a, b) => a + rand() * (b - a);

function cameraForSun(azDeg, i) {
  const az = azDeg * Math.PI / 180;
  const dist = rnd(520, 980);
  const side = (i % 5 - 2) * rnd(70, 150);
  const hx = Math.cos(az), hz = Math.sin(az);
  const tx = -hz, tz = hx;
  return {
    pos: [
      -hx * dist + tx * side,
      rnd(70, 230),
      -hz * dist + tz * side,
    ],
    look: [
      rnd(-70, 70),
      rnd(35, 115),
      rnd(-70, 70),
    ],
  };
}

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
const errors = [];
page.on('console', (m) => {
  const txt = m.text();
  if (m.type() === 'error' && !txt.includes('GL Driver')) errors.push(txt);
});
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));

await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(2600);
await page.evaluate(() => {
  document.querySelector('#ui-root')?.style.setProperty('display', 'none');
  for (const el of document.querySelectorAll('.ff-panel-handle,.ff-hints,.ff-perf')) {
    el.style.display = 'none';
  }
});

const keys = await page.evaluate(() => Object.keys(window.lab.presets.slots).sort());
const preferred = keys.filter((k) => /^[A-D][1-8]$/.test(k));
const baseKeys = preferred.length ? preferred : keys;

const candidates = [];
for (let i = 0; i < 40; i++) {
  const key = baseKeys[i % baseKeys.length] || 'A1';
  const elevated = i % 4 === 0;
  const el = elevated ? rnd(12, 18) : rnd(1.8, 10.5);
  const presetAz = await page.evaluate((k) => window.lab.presets.slots[k]?.params?.sun?.azimuthDeg ?? -84, key);
  const az = presetAz + rnd(-48, 48);
  const cam = cameraForSun(az, i);
  candidates.push({
    index: i + 1,
    key,
    name: `godray-${String(i + 1).padStart(2, '0')}-${key}`,
    sun: { elevationDeg: el, azimuthDeg: az, intensity: rnd(20, 56) },
    camera: cam,
    godrays: {
      enable: true,
      source: pick([1, 1, 1, 0.65, 0.35]),
      intensity: rnd(1.1, 2.8),
      density: rnd(0.42, 1.0),
      decay: rnd(0.93, 0.995),
      weight: rnd(1.2, 2.0),
      exposure: rnd(0.75, 2.0),
      threshold: rnd(0.28, 0.72),
      groundMask: rnd(0.0, 0.65),
      reach: rnd(1.45, 2.5),
      warmth: rnd(0.1, 0.95),
      samples: pick([12, 16, 20, 24, 32]),
      resScale: pick([0.18, 0.25, 0.32, 0.45, 0.6]),
      sharp: pick([0.0, 0.15, 0.25, 0.45, 0.75]),
    },
    render: { exposure: rnd(0.38, 1.15), fogDensity: rnd(0.00018, 0.0011) },
    lighting: {
      bloom: pick([0, 0, 0.12, 0.2]),
      aerialHaze: pick([0, 0, 0.12, 0.22]),
    },
  });
}

const manifest = [];
for (const c of candidates) {
  const file = `${c.name}.png`;
  await page.evaluate((c) => {
    const L = window.lab;
    const p = L.presets.slots[c.key];
    if (p?.params) {
      L.store.fromJSON(p.params);
      L.scene.regenerate();
      if (p.cam) {
        L.scene.camera.position.fromArray(p.cam.p);
        L.scene.camera.quaternion.fromArray(p.cam.q);
        L.scene.camera.updateMatrixWorld();
      }
    }
    for (const [k, v] of Object.entries(c.sun)) L.store.set(`sun.${k}`, v);
    for (const [k, v] of Object.entries(c.godrays)) L.store.set(`godrays.${k}`, v);
    for (const [k, v] of Object.entries(c.render)) L.store.set(`render.${k}`, v);
    for (const [k, v] of Object.entries(c.lighting)) L.store.set(`lighting.${k}`, v);
    const cam = L.scene.camera;
    cam.position.set(...c.camera.pos);
    cam.up.set(0, 1, 0);
    cam.lookAt(...c.camera.look);
    cam.updateMatrixWorld();
  }, c);
  await page.waitForTimeout(1050);
  await page.screenshot({ path: path.join(ART, file) });
  const state = await page.evaluate(() => {
    const L = window.lab;
    const cam = L.scene.camera;
    return {
      params: L.store.toJSON(),
      camera: { p: cam.position.toArray(), q: cam.quaternion.toArray() },
      debug: L.scene.getDebugInfo(),
    };
  });
  manifest.push({ file, ...c, captured: state });
  console.log(`${String(c.index).padStart(2, '0')}/40 ${file}`);
}

await fs.writeFile(path.join(ART, 'manifest.json'), `${JSON.stringify({ url: URL, keys, candidates: manifest }, null, 2)}\n`);
await browser.close();

if (errors.length) {
  console.log(`\nerrors (${errors.length}):`);
  for (const e of errors) console.log('  ' + e);
  process.exit(1);
}

console.log(`\nOK — wrote ${manifest.length} god-ray candidates to ${ART}`);
