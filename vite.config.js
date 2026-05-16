import fs from 'node:fs/promises';
import path from 'node:path';
import { defineConfig } from 'vite';

// Sticky-param persistence — same posture as sunset's preset middleware.
// A "sticky" param is pinned to disk (sticky.json) and restored on reload,
// surviving reseed/randomize. Endpoints:
//   GET  /__iso-sticky            → { sticky: { "island.seed": 1337, ... } }
//   POST /__iso-sticky            → { path, value, on } : set/clear one pin
//   POST /__iso-sticky/clear      → wipe all pins (used by "default")
// Paths are env-overridable so a test harness can point at throwaway files
// and NEVER touch the user's real saved state.
const STICKY_FILE = process.env.ISO_STICKY_FILE
  ? path.resolve(process.env.ISO_STICKY_FILE)
  : path.resolve('sticky.json');

async function readSticky() {
  try { return JSON.parse(await fs.readFile(STICKY_FILE, 'utf8')); }
  catch { return {}; }
}
async function writeSticky(map) {
  await fs.writeFile(STICKY_FILE, `${JSON.stringify(map, null, 2)}\n`);
}
async function readBody(req) {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}
function sendJson(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

// Preset persistence — full-state snapshots (every param + camera pose) in
// eight slots. Same on-disk posture as the sticky middleware.
//   GET  /__iso-presets   → { presets: { "1": {params,cam,t}, ... } }
//   POST /__iso-presets   → { slot, preset } : save one slot
const PRESETS_FILE = process.env.ISO_PRESETS_FILE
  ? path.resolve(process.env.ISO_PRESETS_FILE)
  : path.resolve('presets.json');

async function readPresets() {
  try { return JSON.parse(await fs.readFile(PRESETS_FILE, 'utf8')); }
  catch { return {}; }
}
async function writePresets(map) {
  await fs.writeFile(PRESETS_FILE, `${JSON.stringify(map, null, 2)}\n`);
}

function presetsPlugin() {
  return {
    name: 'iso-presets-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, 'http://127.0.0.1');
        if (!url.pathname.startsWith('/__iso-presets')) return next();
        try {
          if (req.method === 'GET' && url.pathname === '/__iso-presets') {
            return sendJson(res, 200, { presets: await readPresets() });
          }
          if (req.method === 'POST' && url.pathname === '/__iso-presets') {
            const body = await readBody(req);
            const map = await readPresets();
            map[String(body.slot)] = body.preset;
            await writePresets(map);
            return sendJson(res, 200, { ok: true });
          }
          return sendJson(res, 404, { error: 'unknown presets endpoint' });
        } catch (e) {
          return sendJson(res, 500, { error: e.message });
        }
      });
    },
  };
}

function stickyPlugin() {
  return {
    name: 'iso-sticky-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, 'http://127.0.0.1');
        if (!url.pathname.startsWith('/__iso-sticky')) return next();
        try {
          if (req.method === 'GET' && url.pathname === '/__iso-sticky') {
            return sendJson(res, 200, { sticky: await readSticky() });
          }
          if (req.method === 'POST' && url.pathname === '/__iso-sticky/clear') {
            await writeSticky({});
            return sendJson(res, 200, { ok: true });
          }
          if (req.method === 'POST' && url.pathname === '/__iso-sticky') {
            const body = await readBody(req);
            const map = await readSticky();
            if (body.on === false) delete map[body.path];
            else map[body.path] = body.value;
            await writeSticky(map);
            return sendJson(res, 200, { ok: true, sticky: map });
          }
          return sendJson(res, 404, { error: 'unknown sticky endpoint' });
        } catch (e) {
          return sendJson(res, 500, { error: e.message });
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [stickyPlugin(), presetsPlugin()],
  // Own dep-optimize cache when the test harness drives an isolated server,
  // so two Vite instances never fight over node_modules/.vite (deadlock).
  cacheDir: process.env.ISO_CACHE_DIR
    ? path.resolve(process.env.ISO_CACHE_DIR)
    : 'node_modules/.vite',
  server: { host: '127.0.0.1', port: 5193, strictPort: true },
  build: {
    target: 'esnext',
    rollupOptions: { input: { main: path.resolve('index.html') } },
  },
});
