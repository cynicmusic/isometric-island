# Tree workshop — scope (rev 2, post-feedback)

Independent flora-design workshop, parallel-safe with the in-flight god-ray
work (codex). Touches **no shared sim code**; the only sim import is
`camera/FlyCameraDirector.js` **read-only** (reusing "our WASD posture", not
rebuilding it).

## Independence boundary (unchanged, hard)

New files only: `workshop/**`, `src/workshop/**`. Does NOT import/modify
`Scene.js`, `PostFX.js`, `src/lab/*`, `terrain.js`, the main sim,
`vite.config.js`, `package.json`. Read-only shared imports for fidelity:
`gen/palette.js`, `gen/noise.js`, `camera/FlyCameraDirector.js`.
`src/flora/trees.js` read for SCALE reference only — posture NOT copied.

## What changed from rev 1 (your feedback)

- **WASD + altitude posture**: now uses the sim's `FlyCameraDirector`
  (W/A/S/D, Q/↑↓ altitude, drag-look, wheel) — you fly it like the sim. No
  orbit, no hero panel ("too simple" — gone).
- **Variant matrix**: specimens laid out as a grid — X sweeps one param
  across its range, Z = seed variants. Fly the rows, pick the column.
- **Ground fixed**: it was wound downward (only visible from underneath);
  it's a proper upward plane + flight grid now.
- **No more minecraft/voxel boxes.** Faceted vertex-colour render style
  kept, but geometry is real (thin leaflet cards, tapered segments).

## The 3 models / 3 workshops

| workshop | model | status & approach |
|---|---|---|
| **trees** (this) | **palm** | **first-class, REAL.** PROCGEN §1.4 monocot (ring-segment S-curve trunk, golden-angle crown, rachis-spline fronds, bell-envelope pinnate leaflets) + §1.5 **cantilever droop collapsed to one `droop` knob — tune this first**. Perf budget intentionally blown. |
| (this, for now) | conifer | rough stand-in. Real plan: a cheap **Myst / POV-Ray "Moray 96"-style faux-ray-traced textured billboard** (pine bitmap). Lower priority, OK to fail. Not built yet. |
| **rainforest** (separate, NEW) | "other" / bespoke | its own workshop. Leaf-focused, **fractal/fern-like placement** (PROCGEN §1.3 L-system / §1.1), minimal visible branches, NOT minecraft. A **16×16 species × variants matrix** of rainforest flora — vines, ferns, lillies, hanging things, succulents, flowers — stacked into composite "mini-ecosystem" trees. **Flora only, no fauna.** |
| (registry slot) | winter | disabled scaffold; only builds when forced. Off the table. |

## Reference inputs

- `PROCGEN_REFERENCE.md` §1.4/§1.5 — applied to the palm now (droop = the
  Euler–Bernoulli cantilever, one art knob). Re-read for the rachis/leaflet
  Weber–Penn params and the optional Verlet sway (later).
- `~/aquarium` — **present**; lillies / lush hanging forests → mine for the
  rainforest workshop's hanging + lily variants (needs many more variants).
- `~/succulents` — **NOT FOUND on disk** (only `~/aquarium` exists). Flagged;
  need the path or it's dropped from the rainforest source set.

## Phase-2 order (agreed)

1. **Palm**: iterate frond **droop** first (matrix X = `droop`), then rachis
   curve / leaflet envelope / count. You fly the matrix; we tune by eye.
2. Rainforest workshop: scaffold the 16×16 species/variant matrix harness
   (reuse this harness), then fill flora from aquarium (+ succulents if the
   path turns up).
3. Conifer: the Myst/POV-ray textured-billboard hack.

## Re-integration contract

`src/workshop/trees/placement.js` kept intact (palms bigger + concentrated
on fairway/bunkers, biome ids aligned to the sim `MAT` enum). It is the
landing surface; the matrix is just the tuning view. No assumption made
about where in the sim it gets wired.

## Deferred shared edits (need your OK, one line each)

`npm run trees` script + `vite build` inputs for the workshop pages — not
done, to stay clear of codex.
