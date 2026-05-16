// Client side of the preset system. Talks to the Vite middleware in
// vite.config.js. A preset is a FULL snapshot: every param plus the camera
// pose. Eight slots, keyed "1".."8". Slot 1 is the conceptual "default".
// Presets never touch sticky pins — that is what separates loading slot 1
// from the "default" button (which factory-resets and clears sticky).

export async function loadPresets() {
  try {
    const r = await fetch('/__iso-presets');
    if (!r.ok) return {};
    const { presets } = await r.json();
    return presets || {};
  } catch {
    return {};
  }
}

export async function savePresetToDisk(slot, preset) {
  try {
    await fetch('/__iso-presets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slot, preset }),
    });
  } catch { /* dev-only convenience; ignore offline */ }
}

// A button's "composition representation": a gradient sampled from the
// preset's defining params — sun warmth, season drift, water — so a filled
// slot reads at a glance without a thumbnail.
export function presetGradient(preset) {
  const P = preset && preset.params;
  if (!P) return null;
  const el = P.sun?.elevationDeg ?? 26;
  const day = Math.min(1, Math.max(0, (el + 6) / 28));
  const sun = day > 0.5 ? '#ffd9a0' : '#ff7a36';
  const seasonHues = ['#6fce4a', '#e6b800', '#2fd9c8', '#bfe9f0'];
  const sweep = P.seasons?.sweepDeg ?? 0;
  const season = seasonHues[Math.abs(Math.round(sweep / 90)) % 4];
  const water = '#137a8c';
  return `linear-gradient(135deg, ${sun} 0%, ${season} 55%, ${water} 100%)`;
}
