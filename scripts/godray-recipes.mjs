// Review the lab-only god-ray recipe buttons against scene presets A2 and A3.
// Captures individual PNGs plus a contact sheet. Lab/workshop save remains
// disabled, so this reads presets.json but does not write it.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs/promises';
import { rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const ART = process.env.SHOT_DIR || path.join(REPO, 'artifacts', `godray-recipes-${stamp}`);
await fs.mkdir(ART, { recursive: true });

let server = null;
let tmpDir = null;
function cleanup() {
  try { if (server && !server.killed) server.kill('SIGTERM'); } catch { /* noop */ }
  try { if (tmpDir) rmSync(tmpDir, { recursive: true, force: true }); } catch { /* noop */ }
}
process.on('exit', cleanup);
process.on('SIGINT', () => { cleanup(); process.exit(130); });
process.on('SIGTERM', () => { cleanup(); process.exit(143); });

const PORT = Number(process.env.RECIPE_PORT) || 5182;
tmpDir = await fs.mkdtemp(path.join('/tmp', 'iso-godray-recipes-'));
server = spawn(path.join(REPO, 'node_modules', '.bin', 'vite'),
  ['--host', '127.0.0.1', '--port', String(PORT), '--strictPort'],
  {
    cwd: REPO,
    env: {
      ...process.env,
      ISO_CACHE_DIR: path.join(tmpDir, '.vite'),
      ISO_STICKY_FILE: path.join(tmpDir, 'sticky.json'),
    },
    stdio: 'ignore',
  });
server.on('error', (e) => { console.error('vite spawn failed:', e.message); process.exit(1); });
server.unref();

const URL = `http://127.0.0.1:${PORT}/workshop/godrays/`;
{
  const deadline = Date.now() + 30000;
  for (;;) {
    try { if ((await fetch(URL)).ok) break; } catch { /* not up */ }
    if (Date.now() > deadline) throw new Error('recipe vite did not become ready');
    await new Promise((r) => setTimeout(r, 300));
  }
}

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
const errors = [];
page.on('console', (m) => {
  const txt = m.text();
  const ignore = txt.includes('GL Driver Message') || txt.includes('THREE.WebGLProgram');
  if (m.type() === 'error' && !ignore) errors.push(txt);
});
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));

await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(2600);

const recipeCount = await page.evaluate(() => window.godrayWorkshop.godrayRecipes.length);
if (recipeCount !== 24) errors.push(`expected 24 recipes, found ${recipeCount}`);

const uiProbe = await page.evaluate(() => {
  const buttons = [...document.querySelectorAll('.iso-godray-recipe')];
  const root = document.querySelector('.iso-godray-workshop');
  return {
    rootWidth: Math.round(root.getBoundingClientRect().width),
    rootHeight: Math.round(root.getBoundingClientRect().height),
    buttonCount: buttons.length,
    cursors: [...new Set(buttons.map((b) => getComputedStyle(b).cursor))],
    selectable: getComputedStyle(root).userSelect,
    overflowingButtons: buttons
      .filter((b) => b.scrollWidth > b.clientWidth || b.scrollHeight > b.clientHeight)
      .map((b) => b.textContent),
    labels: buttons.map((b) => b.textContent),
  };
});

if (!uiProbe.cursors.every((c) => c === 'pointer')) errors.push(`bad recipe cursor(s): ${uiProbe.cursors.join(', ')}`);
if (uiProbe.overflowingButtons.length) errors.push(`button text overflow: ${uiProbe.overflowingButtons.join(', ')}`);
if (uiProbe.selectable !== 'none') errors.push(`workshop user-select is ${uiProbe.selectable}, want none`);

async function loadScenePreset(key) {
  await page.evaluate((key) => {
    const bank = key[0];
    const slot = Number(key.slice(1));
    window.godrayWorkshop.presets.setBank(bank);
    window.godrayWorkshop.presets.load(slot);
  }, key);
  await page.waitForTimeout(2200);
}

async function addCaptureCard(text) {
  await page.evaluate((text) => {
    document.querySelector('.iso-shot-card')?.remove();
    const card = document.createElement('div');
    card.className = 'iso-shot-card';
    card.textContent = text;
    Object.assign(card.style, {
      position: 'fixed',
      left: '12px',
      bottom: '12px',
      zIndex: 99,
      padding: '5px 7px',
      border: '1px solid rgba(255,138,58,.28)',
      borderRadius: '4px',
      background: 'rgba(5,10,14,.44)',
      color: 'rgba(255,230,200,.76)',
      font: '10px Menlo, monospace',
      letterSpacing: '.04em',
      pointerEvents: 'none',
      userSelect: 'none',
    });
    document.body.appendChild(card);
  }, text);
}

async function hideChromeForShot() {
  await page.evaluate(() => {
    for (const sel of ['.ff-panel', '.ff-panel-handle', '.ff-hints', '.ff-perf', '.iso-build-console', '.iso-godray-workshop']) {
      for (const el of document.querySelectorAll(sel)) el.style.display = 'none';
    }
  });
}

async function showWorkshopChrome() {
  await page.evaluate(() => {
    for (const sel of ['.iso-godray-workshop']) {
      for (const el of document.querySelectorAll(sel)) el.style.display = '';
    }
  });
}

const captures = [];
for (const preset of ['A2', 'A3']) {
  await loadScenePreset(preset);
  await showWorkshopChrome();
  await page.screenshot({ path: path.join(ART, `${preset}-ui.png`) });
  await hideChromeForShot();

  for (let id = 1; id <= recipeCount; id++) {
    await page.evaluate((id) => {
      document.querySelector(`.iso-godray-recipe:nth-child(${id})`)?.click();
    }, id);
    await page.waitForTimeout(360);
    const meta = await page.evaluate((id) => {
      const recipe = window.godrayWorkshop.godrayRecipes.find((r) => r.id === id);
      return { id, label: recipe.label, note: recipe.note };
    }, id);
    await addCaptureCard(`${preset} · ${String(id).padStart(2, '0')} · ${meta.label}`);
    const file = `${preset}-${String(id).padStart(2, '0')}-${meta.label.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()}.png`;
    await page.screenshot({ path: path.join(ART, file) });
    captures.push({ preset, file, ...meta });
    process.stdout.write(`${preset} ${String(id).padStart(2, '0')}/${recipeCount} ${meta.label}\n`);
  }
}

const main = await ctx.newPage();
await main.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'load', timeout: 60000 });
await main.waitForTimeout(2600);
const parity = {};
for (const key of ['A2', 'A3']) {
  const simGod = await main.evaluate((key) => {
    const bank = key[0];
    const slot = Number(key.slice(1));
    window.isometric.presets.setBank(bank);
    window.isometric.presets.load(slot);
    return window.isometric.store.get('godrays');
  }, key);
  await loadScenePreset(key);
  await page.evaluate(() => document.querySelector('.iso-godray-recipe:nth-child(1)')?.click());
  const labGod = await page.evaluate(() => window.godrayWorkshop.store.get('godrays'));
  const fields = Object.keys(simGod);
  const mismatches = fields.filter((field) => JSON.stringify(simGod[field]) !== JSON.stringify(labGod[field]));
  parity[key] = { ok: mismatches.length === 0, mismatches, simGod, labGod };
  if (mismatches.length) errors.push(`${key} recipe 1 parity mismatch: ${mismatches.join(', ')}`);
}
await main.close();

function sheetHtmlFor(preset) {
  const rows = captures.filter((c) => c.preset === preset);
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; }
  body { margin: 0; padding: 18px; background: #0b1015; color: rgba(240,235,226,.9); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
  h1 { margin: 0 0 6px; font-size: 24px; letter-spacing: .02em; }
  h2 { margin: 0 0 10px; font-size: 18px; color: rgba(255,180,105,.92); }
  .meta { margin-bottom: 14px; color: rgba(210,220,216,.62); font: 12px Menlo, monospace; }
  .grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }
  figure { margin: 0; border: 1px solid rgba(255,138,58,.18); background: rgba(255,255,255,.035); }
  img { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; }
  figcaption { height: 38px; padding: 5px 7px; font: 11px Menlo, monospace; color: rgba(235,225,210,.78); overflow: hidden; }
</style>
</head>
<body>
  <h1>God Ray Recipe Review · ${preset}</h1>
  <div class="meta">/workshop/godrays/ · recipe 1 restores loaded scene preset · UI ${uiProbe.rootWidth}x${uiProbe.rootHeight}px · parity ${parity[preset]?.ok ? 'ok' : 'check manifest'}</div>
  <h2>Scene Preset ${preset}</h2>
    <div class="grid">
      ${rows.map((c) => `
        <figure>
          <img src="${c.file}">
          <figcaption>${String(c.id).padStart(2, '0')} · ${c.label}<br>${c.note}</figcaption>
        </figure>`).join('')}
    </div>
</body>
</html>`;
}

await fs.writeFile(path.join(ART, 'contact-A2.html'), sheetHtmlFor('A2'));
await fs.writeFile(path.join(ART, 'contact-A3.html'), sheetHtmlFor('A3'));
await fs.writeFile(path.join(ART, 'manifest.json'), `${JSON.stringify({ url: URL, uiProbe, parity, captures }, null, 2)}\n`);

for (const preset of ['A2', 'A3']) {
  const sheet = await ctx.newPage();
  await sheet.setViewportSize({ width: 1920, height: 1400 });
  await sheet.goto(`file://${path.join(ART, `contact-${preset}.html`)}`, { waitUntil: 'load' });
  await sheet.screenshot({ path: path.join(ART, `contact-${preset}.png`), fullPage: true });
  await sheet.close();
}

await browser.close();

if (errors.length) {
  console.log(`\nerrors (${errors.length}):`);
  for (const e of errors) console.log('  ' + e);
  console.log(`artifacts: ${ART}`);
  process.exit(1);
}

console.log(`\nOK — recipe UI and parity checks passed`);
console.log(`artifacts: ${ART}`);
console.log(`contact sheets: ${path.join(ART, 'contact-A2.png')} · ${path.join(ART, 'contact-A3.png')}`);
