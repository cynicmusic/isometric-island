// Diagnostic probe — load page, dump every console message + error + failed
// request + a DOM/state probe. Borrows Playwright from the fire-whisp install
// (same pattern as sunset/scripts/diag.mjs).

import { chromium } from '../../fire-whisp/node_modules/playwright/index.mjs';
import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const URL = process.env.URL || 'http://127.0.0.1:5193/';
const ART = path.resolve(__dirname, '..', 'artifacts');
await fs.mkdir(ART, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newContext({ viewport: { width: 1440, height: 900 } }).then(c => c.newPage());

page.on('console', (msg) => console.log(`[console.${msg.type()}]`, msg.text()));
page.on('pageerror', (err) => console.log(`[pageerror] ${err.message}\n${err.stack || ''}`));
page.on('requestfailed', (req) => console.log(`[reqfail] ${req.url()} : ${req.failure()?.errorText}`));

await page.goto(URL, { waitUntil: 'load', timeout: 15000 });
await page.waitForTimeout(2500);

const probe = await page.evaluate(() => ({
  hasGlobal: typeof window.isometric !== 'undefined',
  keys: typeof window.isometric === 'object' ? Object.keys(window.isometric) : null,
  hasCanvas: !!document.querySelector('#canvas-container canvas'),
  panelCollapsed: !!document.querySelector('.ff-panel.collapsed'),
  perfHidden: !!document.querySelector('.ff-perf.hidden'),
  debug: window.isometric?.scene?.getDebugInfo?.() ?? null,
}));
console.log('PROBE:', JSON.stringify(probe, null, 2));

await page.screenshot({ path: path.join(ART, 'diag.png') });
await browser.close();
