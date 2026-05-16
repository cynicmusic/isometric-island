# Isometric Voxel Island — Scaffold Plan

> Companion doc: [PROCGEN_REFERENCE.md](PROCGEN_REFERENCE.md) — cited algorithms & formulas.
> Locked decisions: **voxel style = faceted + vertex-gradient + micro-grain** · **palette = Tropical RPG Warm** · **delivery = vertical slice first**.

---

## 1. Vision

A bounded tropical island you fly around with a WASD camera, rendered as crisp **voxels that are not pixelated**: hard cube silhouettes, flat-shaded faces, but with **vertex-color gradients** running down trunks/fronds/terrain bands and a faint procedural face grain. Warm, saturated, "Sonic-meets-Minecraft-but-not-Minecraft", no purples / nothing spacey.

The island shows **all four seasons at once** — they are *regions of the map*, not a weather system. Winter regions never border summer regions (enforced by construction, §6). The island sits inside sunset's real atmospheric sky; the hard problem is making faceted voxels read correctly *inside* that scattering atmosphere (§9).

Trees are the headline feature: **palm, conifer, regular (summer), regular-autumnal, regular-winter** — proper generators, not knobby sticks. Palms get bowed trunks with stylized stacked segments, a light→dark gradient per segment, and angular fractal fronds with simulated droop/bounce.

---

## 2. Stack & Project Setup

Identical to every reference project (don't deviate — keeps ports verbatim):

- **Three.js `^0.170.0`**, **Vite 6**, `vite-plugin-glsl ^1.3.0`, ES modules (`"type":"module"`).
- Renderer: `WebGLRenderer({antialias:true, powerPreference:'high-performance'})`, `ACESFilmicToneMapping`, `outputColorSpace = SRGBColorSpace`, exposure ~1.08–1.2, `PCFSoftShadowMap`.
- Dev server on a fixed strict port (follow sunset: `vite --host 127.0.0.1 --port 5191 --strictPort`).
- No React/postprocessing libs — vanilla DOM UI, in-scene shaders only (matches sunset/aquarium).

### Directory layout

```
isometric/
  index.html
  vite.config.js
  package.json
  PLAN.md  PROCGEN_REFERENCE.md
  src/
    main.js                 # boot: renderer, scene, store, UI, RAF loop
    core/Scene.js           # scene assembly + param→system wiring
    camera/FlyCameraDirector.js   # PORTED from aquarium-sky SkyCameraDirector.js (WASD)
    atmosphere/             # PORTED from sunset (SkyBackdrop, SkyViewLUT, TransmittanceLUT, shaderHelpers, constants)
    state/ParamStore.js     # PORTED from sunset
    config/paramSchema.js   # adapted: island/terrain/season/tree/water sections
    config/defaults.js
    ui/ControlPanel.js  ui/panel.css  ui/PerfOverlay.js   # PORTED from sunset
    voxel/
      SparseVolume.js       # VDB-like chunked sparse volume, named channels
      mesher.js             # faceted greedy/face mesher -> merged BufferGeometry
      VoxelMaterial.js      # flat-face shading + vertex gradient + micro-grain
    gen/
      noise.js              # PORTED from succulent (value/fbm2/ridgedFbm2/cellular2)
      terrain.js            # island density field (domain-warp + multifractal + erosion + island mask)
      seasons.js            # monotonic warped season gradient + region map
      cliffs.js             # seaside ring-cliff carving
      placement.js          # poisson/phyllotaxis scatter for trees/rocks/huts
    flora/
      Tree.js               # dispatcher by species+season
      palm.js conifer.js broadleaf.js
      frond.js              # rachis-as-spline + leaflet fan + cantilever sag + sway
      branchSkeleton.js     # space-colonization skeleton (shared by conifer/broadleaf)
    water/
      Sea.js  Caustics.js   # PORTED caustic shader from aquarium WaterEffects.js
      Seafloor.js           # blue-variety depth-graded floor under the whole island
    structures/huts.js      # simple voxel huts/shacks
    workshops/              # standalone tuning pages (Phase 2+): tree, terrain, texture, volume
```

---

## 3. Architecture

One reactive spine, copied from sunset:

`ParamStore` (path-addressed, listener broadcast) ← mutated by `ControlPanel` (auto-built from `paramSchema`) → `Scene._onParamChange(evt)` updates uniforms / marks systems dirty → RAF loop rebuilds dirty LUTs/volumes and renders.

Every tunable in this plan (terrain octaves, season band widths, cliff radius, frond sag, palette stops, caustic scale, fog) becomes a `paramSchema` field so the whole island is live-tunable through the **same UI we already have** — no new UI invented.

---

## 4. The Voxel Volume — "VDB-like" sparse system (major feature)

**Reality check (from research):** there is no production WASM OpenVDB and the one JS port (`mjurczyk/openvdb`) is effectively read-only NanoVDB — we cannot author grids with it. So we build a **custom chunked sparse volume that emulates VDB semantics**: a root hash of 32³ chunks, chunks allocated lazily, a 1-entry accessor cache for coherent sweeps (Museth 2013 access pattern). This *is* the "VDB" feature, and it is fully parameterized.

**Multi-channel design** — the volume stores named channels sampled independently:

| Channel | Type | Drives |
|---|---|---|
| `density` | f32 (signed) | solid/empty (iso = 0); meshing |
| `material` | u8 | sand / rock / grass / snow / grassy-snow / dirt / seafloor |
| `season`  | u8 | summer / autumn / winter / conifer-belt (tree + tint selection) |
| `moisture`| f32 | beach vs. lush vs. bare blending, foliage density |

Island bound: **1000×1000 voxels** of land + a sea buffer (target ~1200×1200 footprint), height ~160 voxels. At ~1 voxel ≈ 1 m this is ~1–1.4 km² of *modeled* island reading as a ~"100 km" vista once atmosphere/fog compress the horizon (§9). Chunked + sparse keeps only surface-adjacent chunks resident; the seafloor is a thin shell, not a solid block.

Each channel is independently authorable through `paramSchema`, which is exactly the "parameterized so we can tune distributions and shape" requirement: cliff radius/jitter, terrain octave weights, and **season allocation** are all volume-write parameters.

---

## 5. Terrain Generation (better than plain FBM)

Pipeline (all primitives from succulent's [noise.js](../succulent/src/noise.js); algorithms cited in [PROCGEN_REFERENCE.md](PROCGEN_REFERENCE.md) §2):

1. **Island mask** — radial/distance-to-edge falloff (Red Blob Games) shaped by low-freq warped noise so the coastline is irregular with real bays & beaches; guarantees a bounded island with a sea ring.
2. **Macro relief** — *not* plain fBm: **domain-warped fBm** (Quílez: warp the lookup by another fbm) for organic large forms, summed with **ridged multifractal** (Musgrave: `exp[i]=lac^(-H·i)`, ridged `s=offset−|n|; s*=s`) for sharp mountain spines. This gives us "several mountains" and ridgelines instead of rolling blobs.
3. **Feature blobs** — succulent's Gaussian-blob *philosophy* (anisotropic `exp(−…)` hills/valleys) used sparingly to *place* named landmarks: one big mountain, 2–3 smaller peaks, a plateau, lagoon basins.
4. **Erosion pass** — Lague-style droplet hydraulic erosion (simpler than Mei virtual-pipes, JS-friendly) over the heightfield to cut valleys/deltas and pile beaches; optional thermal/talus pass to flatten cliffs to talus slopes.
5. **Terracing** — quantize selected regions' height into **randomized voxel terraces** (step height jittered by noise) for the stylized stepped look; terrace mask itself is a noise channel so it's patchy, not global.
6. **Voxelize** — write `density` from the final heightfield + 3D caves/overhangs noise; **carve cylinders** (the pillar concept, *not* the pillar code): subtract displaced voxel cylinders from headland edges to make sea arches/stacks/undercut cliffs — emerges from thresholding, no bespoke mesh.
7. **Material assignment** — by height, slope, moisture, and proximity-to-sea: `seafloor` below water, `sand` in the wet/low band, `rock` on steep slopes, `grass`/`grassy-snow`/`snow` by altitude & season channel.

Meshing: faceted face-culling/greedy mesher → merged `BufferGeometry`; per-vertex color = palette stop for `material` with a **gradient down each terrace band** and slope-darkening (reusing succulent's `smoothstep(height)` shading idea), plus the shared micro-grain in the material shader (§11).

---

## 6. Seasons & Region Allocation ("winter never touches summer")

The constraint is satisfied **by construction**, not by post-hoc checking. Use the recommended scheme from [PROCGEN_REFERENCE.md](PROCGEN_REFERENCE.md) §2:

- Build a single **monotonic season coordinate** `s(x,z)` = a low-frequency, domain-warped 1-D gradient sweeping across the island (e.g. SW→NE), normalized 0..1.
- Map ordered bands: `summer (0–0.30) → autumn (0.30–0.55) → conifer belt (0.55–0.72) → winter (0.72–1.0)`.
- Because `s` is monotone-ish and the ordering is fixed, **summer and winter can only ever be separated by autumn/conifer** — adjacency is impossible by topology. Warp gives wandering, organic borders so it isn't a straight stripe; band widths and warp strength are `paramSchema` params.
- This `season` channel additionally tints terrain (autumn ground ochre, winter ground snow/grassy-snow) and selects which tree generator fires.

---

## 7. Tree System (headline feature)

Generators (research & formulas in [PROCGEN_REFERENCE.md](PROCGEN_REFERENCE.md) §1; inspiration from succulent's curve+Frenet+edge-field [branch.js](../succulent/src/branch.js) and [phyllotaxis.js](../succulent/src/phyllotaxis.js) — *concepts only, not imported*).

**Shared skeleton:** Space Colonization (Runions 2007) produces branch skeletons for conifer & broadleaf; pipe-model radius (`r_parent² = Σ r_child²`) tapers limbs. Skeleton → voxelized capsules along each segment so it stays in the faceted voxel look.

**Palm (the priority — must not be knobby sticks):**
- **Trunk** = a vertical curve with a real **bow** (Catmull-Rom, base-anchored, gravity-leaned). Built as **stacked stylized segments**: discrete voxel rings (leaf-base scars) of slightly varying radius — strong silhouette. Each segment gets a **light→dark vertex gradient**, and the trunk as a whole gets a base→crown gradient (`#b08a4a → #7a5a30`).
- **Crown** = golden-angle (Vogel) phyllotaxis of 9–16 fronds.
- **Frond** ([frond.js](src/flora/frond.js)) = a **rachis spline** (curved beam) carrying **pinnate leaflets** whose length follows a `sin(πt)^0.7` envelope (full mid-frond, short at base/tip), each leaflet angular and slightly twisted → the "angular/fractal, not knobby" look.
- **Bounce & heft (simulated):** rachis shape = cantilever-beam droop under uniform load — collapsed to one art-directable `sag` constant from `y = w·x²(6L²−4Lx+x²)/(24EI)` (tip `wL⁴/8EI`). A lightweight Verlet/mass-spring (Jakobsen 2001) on a few rachis control points gives idle sway and a settle-bounce; cheap, per-tree phase offset so the grove isn't synced.

**Conifer:** strong central leader, short down-swept whorls (space-colonization with downward tropism), dense dark needles; voxel "fan" shells per whorl. Lives in the conifer belt and as snow-line trees.

**Regular / Broadleaf (summer):** space-colonization crown, rounded voxel-blob canopy with internal color variation; full and lush.

**Autumnal:** same broadleaf skeleton, **sparser canopy** (lower leaf-voxel fill), palette → ochre/rust/yellow mix per-leaf-cluster, some bare twigs showing.

**Winter:** broadleaf skeleton with **no leaves**, exposed branch voxels, **snow caps** on up-facing branch voxels (extra white voxels where branch normal·up > threshold), subtle **cyan rim** in the material (`#bfe9f0`) on snow/bark.

All trees are placed via blue-noise/Poisson scatter (density from `moisture` + `season`), instanced where geometry repeats, baked-merged where unique, to keep thousands on the island affordable.

---

## 8. Water, Caustics, Seafloor

- **Caustics:** port aquarium's [WaterEffects.js](../aquarium/src/shaders/WaterEffects.js) dual-layer animated **Voronoi** caustic shader verbatim (additive plane just above sand; `uCausticScale/uCausticIntensity/uCausticColor` exposed in UI). Caustic projects onto the modeled seafloor, not just the surface.
- **Seafloor:** a full floor shell modeled *under* the whole island (not a flat plane). Color = depth-graded **blue variety** (lerp shallow turquoise → mid teal → deep blue by depth, like real tropical drone shots), reusing the depth-fog gradient math from aquarium [Sand.js](../aquarium/src/environment/Sand.js).
- **Beach glow:** the warm sand rim uses the **same math as the aquarium-sky pillar "orange glow"** — `0xff8a36`, `decay=2` PointLights along the shoreline, gently pulsed (`Scene.js` `_updateMappingLabDynamicLights` pattern). Gives the warm halo where sand meets water.
- Sea surface: low-poly faceted water plane with the caustic + a thin Fresnel/foam line at the coast (foam mask from `material==sand` adjacency).

---

## 9. Atmosphere Integration (the hard part)

Port sunset's `atmosphere/*` (`SkyBackdrop`, `SkyViewLUT`, `TransmittanceLUT`, `shaderHelpers`, `constants`) — **leave `src/fire/*` behind entirely** (those 6 files are fully isolated; just don't copy them).

Making faceted voxels "sit" in the Hillaire atmosphere:
- World units stay **metres** for the island; the SkyBackdrop is a `renderOrder=-1` fullscreen quad with `depthTest:false` so the island always composites in front. Camera `far` plane tuned down from sunset's 1000 km to island scale (~8–15 km) so depth precision is fine for voxels.
- **Horizon transition:** the modeled seafloor + sea ring extends past the island into a distance where **exponential fog** (`FogExp2`, density a UI param) blends voxel sea into the atmosphere's horizon band — the bounded island never shows a hard world edge; it dissolves into haze that matches the sky's horizon color (sample sky horizon color → fog color so they're consistent).
- Lighting: drive the scene's directional "sun" from the same sun azimuth/elevation params that steer the atmosphere LUT, so shadows and sky agree. Tone mapping ACES shared.
- Risk noted in §15: faceted flat normals can look flat under purely analytic sky light — mitigation is a hemisphere fill + slope ambient occlusion baked into vertex color.

---

## 10. Camera & UI (ported, not invented)

- **Camera:** port aquarium-sky [SkyCameraDirector.js](../aquarium-sky/src/camera/SkyCameraDirector.js) → `FlyCameraDirector.js` *as-is*: WASD planar move, Q/E or arrows for altitude, drag-to-yaw/pitch with dead-zone, accel ramp (`7.5→34 u/s` over 1.8 s), delta-time clamp, velocity damping. Same keybinds, same feel.
- **UI:** port sunset [ControlPanel.js](../sunset/src/ui/ControlPanel.js) + [panel.css](../sunset/src/ui/panel.css) + `ParamStore` + the `paramSchema` pattern unchanged. Only the *schema content* changes (new sections: `island`, `terrain`, `seasons`, `trees`, `water`, `cliffs`, plus sunset's `sun`/`atmosphere`/`skyView`). Preset save/random/default buttons come for free.

---

## 11. Materials & Procedural Textures — workshop & style choices

Style is locked to **faceted + vertex-gradient + micro-grain**, palette **Tropical RPG Warm**. Textures are *procedural and color-led, not detail-led* (canvas/shader, copying succulent's [textures.js](../succulent/src/textures.js) technique, not its art).

**Full material list** (the `material` channel enum) with palette stops:

| Material | Light → Dark | Notes |
|---|---|---|
| Sand (beach) | `#e8cf94 → #c79a5c` | wet-darken near waterline; warm shoreline glow (§8) |
| Seafloor | `#2fd9c8 → #137a8c → #0a4e6e` | depth-graded blue variety |
| Grass (summer) | `#6fce4a → #2f7d33` | moisture brightens |
| Grassy-snow | `#bcd9b0 ↔ #eef6f8` | transitional winter ground |
| Snow | `#eef6f8 → #cfe6ec` | cyan-tinted shadows `#bfe9f0` |
| Rock / cliff | `#8a8278 → #5f594f` | slope-driven; strata banding |
| Dirt / talus | `#9c7b4f → #5f4630` | erosion scars, cliff feet |
| Autumn ground | `#caa24a → #8a5a2b` | under autumnal trees |
| Bark (winter) | `#6b5240`, cyan rim `#bfe9f0` | exposed branches |
| Palm trunk | `#b08a4a → #7a5a30` | per-segment + whole-trunk gradient |

**Shading model (one shared `VoxelMaterial`):** flat per-face normal (faceted), base color = material palette lerp by a per-element gradient param, + low-amplitude value-noise **micro-grain** so big faces aren't dead-flat (no visible texels → "not pixelated"), + slope/AO darkening folded into vertex color, + optional winter cyan rim term.

**Workshops to build (Phase 2):**
- *Texture/Material Lab* — live palette stops, gradient direction, grain amount per material; export to defaults.
- *Voxel Terrain Workshop* — scrub octaves/warp/erosion/terrace/island-mask params on a small tile.
- *Tree/Frond Workshop* — per-species sliders incl. trunk bow, segment count/jitter, frond count, rachis sag, leaflet envelope, sway stiffness; the aquarium-sky gallery pattern.
- *Volume Inspector* — slice the sparse volume, visualize `material`/`season`/`density` channels.

---

## 12. Seaside Cliffs (ring-cliff concept)

From [PROCGEN_REFERENCE.md](PROCGEN_REFERENCE.md) §3 + the carved-cylinder concept (succulent pillar *idea*, not code): along chosen coast segments, set `density = baseShape − ridgedMultifractal − Worley(cracks)` inside a radial band, so vertical fluted cliffs, sea stacks and arches **emerge from the voxel threshold**. Cliff radius, ridge strength, crack frequency, and which coast arcs are "cliff vs. beach" are `cliffs` `paramSchema` params (the requested VDB-parameterized cliff shaping). Strata = stacked horizontal Worley/noise bands written into `material` for layered rock color.

---

## 13. Buildings

Minimal voxel **huts/shacks** (`structures/huts.js`): a few parameterized primitives — square/round hut, stilt platform, dock, fence — scattered on flat-enough, low-slope, non-snow voxels near beaches. Purpose is system-testing & scale reference, not architecture. Roof/wall colors drawn from the warm palette.

---

## 14. Roadmap — Vertical Slice First

**Phase 1 — Runnable island (the slice):**
1. Project setup: package.json, vite.config, index.html, renderer/scene/RAF, ACES.
2. Port `ParamStore` + `ControlPanel` + `panel.css`; stub `paramSchema` (sun/atmosphere/island/water).
3. Port `FlyCameraDirector` (WASD) — verify feel matches aquarium-sky.
4. Port sunset `atmosphere/*`; get sky rendering with camera, far-plane & fog tuned (§9).
5. `SparseVolume` + faceted `mesher` + `VoxelMaterial` (gradient + grain).
6. Terrain v1: island mask + domain-warp + ridged multifractal + material assignment (no erosion yet) → meshed bounded island.
7. Sea plane + ported Voronoi caustics + depth-graded seafloor shell + shoreline orange glow.
8. One of **each** tree type (palm, conifer, broadleaf-summer, broadleaf-autumn, broadleaf-winter) placed by hand-seeded points — proves the frond generator & gradients end-to-end.
9. Season channel v1 (monotonic gradient) tinting ground + selecting the 5 trees.

→ At end of Phase 1: fly around a bounded, atmospheric, four-season voxel island with water and one of each tree. The hard integration (isometric-in-atmosphere) is proven.

**Phase 2 — Depth & workshops:** erosion pass, terracing, cliffs, Poisson tree scatter (groves), the 4 workshops, full material palette tuning, huts, volume inspector, performance pass (instancing/merging/chunk LOD).

**Phase 3 — Polish:** sea arches/stacks via carved cylinders, foam, frond sway tuning, preset island seeds, horizon/fog color auto-matched to sky, snow accumulation on winter branches.

---

## 15. Risks / Open Questions

- **Faceted voxels under analytic sky** may look flat → hemisphere fill + baked vertex AO (mitigation planned §9).
- **1000² voxel volume perf** → sparse chunks + greedy faceted meshing + InstancedMesh flora + chunk frustum culling; revisit voxel→metre ratio if needed.
- **Palm quality is make-or-break** — budget extra iteration on `frond.js` (this is why it has its own module + workshop early).
- **"~100 km" feel vs. 1 km model** — solved perceptually via fog/atmosphere horizon compression, not by literally modeling 100 km.
- Open: exact season **band widths & sweep axis**, number/placement of named mountains, and whether conifers also seed along the snow line in winter regions (assumed yes) — all exposed as params so they're tunable rather than blocking.
