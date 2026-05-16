#!/usr/bin/env node
// Adapted from sunset/scripts/pop.mjs. If the dev server isn't up on 5193,
// start it; then open the URL in the user's default browser (Chrome).
// "pop" = show it in a real browser. Tests run via smoke.mjs (Playwright).

import { spawn } from 'node:child_process';

const route = process.argv[2] || '/';
const base = process.env.ISO_URL || 'http://127.0.0.1:5193';
const url = new URL(route, base.endsWith('/') ? base : `${base}/`).toString();

async function waitForServer(target, timeoutMs = 9000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(target, { method: 'HEAD' });
      if (response.ok) return true;
    } catch { /* keep waiting */ }
    await new Promise((resolve) => setTimeout(resolve, 350));
  }
  return false;
}

let ready = await waitForServer(url, 800);
if (!ready) {
  const child = spawn('npm', ['run', 'dev'], { cwd: process.cwd(), detached: true, stdio: 'ignore' });
  child.unref();
  ready = await waitForServer(url, 12000);
}

if (!ready) {
  console.error(`isometric island did not answer at ${url}`);
  process.exit(1);
}

spawn('open', [url], { stdio: 'ignore', detached: true }).unref();
console.log(url);
