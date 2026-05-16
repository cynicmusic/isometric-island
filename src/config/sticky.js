// Client side of the sticky-param system. Talks to the Vite middleware in
// vite.config.js. Sticky params are pinned to disk and restored on reload;
// they survive reseed/randomize and are wiped by "default".
//
// Seed and FOV are sticky by default on a fresh project (no sticky.json yet)
// so the workflow "pin a good value, keep iterating" works out of the box.

const DEFAULT_STICKY = { 'voxel.seed': 1337, 'render.fov': 68 };

export async function loadSticky() {
  try {
    const r = await fetch('/__iso-sticky');
    if (!r.ok) return { ...DEFAULT_STICKY };
    const { sticky } = await r.json();
    // Seed & FOV are ALWAYS sticky-by-default; file values (pins / extra
    // sticky params) override. "default" wipes the file → falls back here.
    return { ...DEFAULT_STICKY, ...(sticky || {}) };
  } catch {
    return { ...DEFAULT_STICKY };
  }
}

export async function setSticky(path, value, on) {
  try {
    await fetch('/__iso-sticky', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, value, on }),
    });
  } catch { /* dev-only convenience; ignore offline */ }
}

export async function clearSticky() {
  try {
    await fetch('/__iso-sticky/clear', { method: 'POST' });
  } catch { /* ignore */ }
}
