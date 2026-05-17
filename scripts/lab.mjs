// Headless LAB harness — boots its OWN isolated Vite (separate port + temp
// dep cache, no contention with the user's servers), drives /lab/ via
// window.lab, sweeps god-ray + Planet-R params, screenshots each to the
// Desktop, and fails on any console error. Self-managed; no user state.
//
//   npm run labtest            # full sweep
//   LAB_ONLY=godrays npm run labtest

import { chromium } from '../../fire-whisp/node_modules/playwright/index.mjs';
import { spawn } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';
import fs from 'node:fs/promises';
import { rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const ART = process.env.SHOT_DIR || path.join(os.homedir(), 'Desktop');
await fs.mkdir(ART, { recursive: true });

let server = null, tmpDir = null;
function cleanup() {
  try { if (server && !server.killed) server.kill('SIGTERM'); } catch { /* noop */ }
  try { if (tmpDir) rmSync(tmpDir, { recursive: true, force: true }); } catch { /* noop */ }
}
process.on('exit', cleanup);
process.on('SIGINT', () => { cleanup(); process.exit(130); });

const PORT = Number(process.env.LAB_PORT) || 5181;
tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'iso-lab-'));
const env = { ...process.env, ISO_CACHE_DIR: path.join(tmpDir, '.vite'),
  ISO_PRESETS_FILE: path.join(tmpDir, 'p.json'), ISO_STICKY_FILE: path.join(tmpDir, 's.json') };
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

const browser = await chromium.launch({ headless: true });
const page = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
const errors = [];
page.on('console', (m) => { if (m.type() === 'error' && !m.text().includes('GL Driver')) errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));

await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(3000);

async function shot(name) { await page.waitForTimeout(420); await page.screenshot({ path: path.join(ART, name) }); }
async function set(fn, arg) { await page.evaluate(fn, arg); }

// Sunset framing (god rays read best with a low sun + a massif to occlude).
await set(() => {
  const L = window.lab;
  L.store.set('sun.elevationDeg', 8);
  L.store.set('sun.azimuthDeg', -84);
  L.store.set('island.massif', 240);
  L.scene.camera.position.set(620, 150, 740);
  L.scene.camera.lookAt(0, 40, 0);
  L.scene.camera.updateMatrixWorld();
});
await page.waitForTimeout(900);
await shot('lab-00-baseline-noFX.png');                 // god rays OFF reference

const only = process.env.LAB_ONLY || 'all';

if (only === 'all' || only === 'godrays') {
  // god rays ON, default tuning
  await set(() => { window.lab.experimental.set('godrays', true); });
  await shot('lab-01-godrays-default.png');
  // sweep: density / decay / ground-mask / threshold / warmth
  const sweeps = [
    ['godDensity', 1.0], ['godDensity', 0.35],
    ['godDecay', 0.985], ['godDecay', 0.86],
    ['godHorizon', 1.0], ['godHorizon', 0.0],
    ['godThreshold', 0.85], ['godThreshold', 0.35],
    ['godTint', 1.0], ['godTint', 0.0],
    ['godIntensity', 2.2], ['godSamples', 32],
  ];
  let i = 2;
  for (const [k, v] of sweeps) {
    await set(({ k, v }) => window.lab.experimental.setNum(k, v), { k, v });
    await shot(`lab-${String(i).padStart(2, '0')}-${k}-${v}.png`);
    await set(({ k }) => {
      // reset that knob back to its default before the next sweep
      const d = { godDensity: 0.6, godDecay: 0.93, godHorizon: 0.5, godThreshold: 0.62,
        godTint: 0.5, godIntensity: 1.0, godSamples: 16 };
      window.lab.experimental.setNum(k, d[k]);
    }, { k });
    i++;
  }
  await set(() => window.lab.experimental.set('godrays', false));
}

if (only === 'all' || only === 'planetr') {
  await set(() => { window.lab.experimental.set('planetR', true); });
  for (const R of [400, 1200, 3000]) {
    await set(({ R }) => window.lab.experimental.setNum('planetRadiusKm', R), { R });
    await page.waitForTimeout(700);
    await shot(`lab-pr-${R}km.png`);
  }
  await set(() => window.lab.experimental.set('planetR', false));
}

const dbg = await page.evaluate(() => window.lab?.scene?.getDebugInfo?.() ?? null);
await browser.close();

console.log('\n=== lab summary ===');
console.log('debug:', JSON.stringify(dbg));
if (errors.length) {
  console.log(`\nerrors (${errors.length}):`);
  for (const e of errors) console.log('  ' + e);
  process.exit(1);
}
console.log(`\nOK — no console errors · lab shots in ${ART}`);
