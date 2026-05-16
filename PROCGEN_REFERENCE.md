# Procedural Generation Reference — Stylized Voxel Tropical Island (Three.js)

Technical, implementation-focused summaries. Each entry: **name → citation + URL → 2–4 sentence summary → "Apply in our project"**.

Project assumptions: voxel/chunked world, Three.js, `InstancedMesh` for foliage/rock, a custom sparse voxel volume with named channels (height, material, season, density). Priority order: 1, 2, 4, then 3, 5.

---

## 1. PROCEDURAL TREE GENERATION (high priority)

### 1.1 Space Colonization Algorithm

**Citation:** Runions, A., Lane, B., Prusinkiewicz, P. (2007). *Modeling Trees with a Space Colonization Algorithm.* Eurographics Workshop on Natural Phenomena 2007.
URL: https://algorithmicbotany.org/papers/colonization.egwnp2007.html (PDF linked there) · ACM: https://dl.acm.org/doi/10.5555/2381384.2381395

**Summary:** Scatter a cloud of *attraction points* (markers) inside a crown envelope. Each iteration, every attractor within an *influence/attraction distance* `d_i` of a tree node "votes" for its single nearest node; each voting node grows one new node a fixed step `D` along the normalized average of `(attractor − node)` directions. Any attractor closer than the *kill distance* `d_k` to a node is removed (space consumed). Repeat until attractors are exhausted; branch radius is then assigned bottom-up via the pipe model `r_parent^n = Σ r_child^n` (n≈2–3). Typical params: `d_i ≈ 8–17·D`, `d_k ≈ 2·D`, `D` = branch segment length.

**Apply in our project:** Generate the skeleton in continuous space (cheap: ~hundreds of nodes), then voxelize branch segments into the chunk volume (Bresenham/DDA 3D line per segment, radius from pipe model) or render branches as tapered instanced cylinders + voxelized/instanced leaf cards at terminal nodes. Seed attractors per species silhouette (round, conical, vase). For palms, see 1.4 — space colonization is best for broadleaf island trees (banyan, almond) not monocots.

### 1.2 Self-Organizing Tree Models

**Citation:** Palubicki, W., Horel, K., Longay, S., Runions, A., Lane, B., Měch, R., Prusinkiewicz, P. (2009). *Self-organizing tree models for image synthesis.* ACM TOG 28(3), 58:1–10 (SIGGRAPH 2009).
URL: https://algorithmicbotany.org/papers/selforg.sig2009.html · ACM: https://dl.acm.org/doi/10.1145/1531326.1531364

**Summary:** Models tree form as emergent from buds/branches competing for *light or space*, regulated by an internal resource (auxin-like) signal. Each cycle: estimate local light/space per bud (space variant ≈ space colonization; light variant casts shadow voxels), propagate a basipetal "vigor" signal, then distribute available growth resource acropetally so well-lit branches grow more; shed under-resourced branches. Produces apical control, phototropism, and realistic shedding without hand-tuned L-system rules; supports interactive pruning/bending.

**Apply in our project:** Use the *shadow-propagation* light model — it maps naturally to a voxel grid: each bud deposits a small pyramidal "shadow" stamp into a scratch light-volume channel; query that channel for local light. Heavier than 1.1 but gives self-shading island canopies. For most stylized trees prefer 1.1; reserve 1.2 for hero trees or when canopy self-shading matters.

### 1.3 L-Systems for Trees

**Citation:** Prusinkiewicz, P., Lindenmayer, A. (1990). *The Algorithmic Beauty of Plants.* Springer. (Free PDF.)
URL: https://archive.org/details/the-algorithmic-beauty-of-plants · Ch.1 PDF: https://www.houdinikitchen.net/wp-content/uploads/2019/12/L-systems.pdf

**Summary:** A parallel string-rewriting grammar: an *axiom* plus *production rules* applied to all symbols simultaneously each generation, then interpreted by a 3D *turtle*. Bracketed L-systems add `[` (push turtle state) and `]` (pop) for branching; `F` = forward+draw, `+ - & ^ \ /` = rotate by angle δ, `!`/`#` modify radius. Stochastic and parameterized variants (e.g. `F(l)` with length parameter, probabilistic rules) give natural variation. Classic example: axiom `F`, rule `F → F[-F]F[+F][F]`, δ ≈ 25–60°.

**Apply in our project:** Cheapest, fully deterministic-from-seed tree generator — run the rewrite + turtle in JS to emit a segment list, then voxelize/instance exactly as in 1.1. Good for shrubs, mangroves, ferns and bamboo where rule authoring beats simulation. Use parametric stochastic rules keyed off the world seed for per-instance variety.

### 1.4 Palm / Monocot Structure (trunk + crown of bowed fronds)

**Reference (parametric tree model incl. structure used for palms):** Weber, J., Penn, J. (1995). *Creation and Rendering of Realistic Trees.* SIGGRAPH '95.
URL (PDF): https://courses.cs.duke.edu/cps124/fall01/resources/p119-weber.pdf · ACM: https://dl.acm.org/doi/10.1145/218380.218427
**Botanical reference (frond anatomy):** UF/IFAS *Palm Morphology and Anatomy* (ENH1212/EP473), https://ask.ifas.ufl.edu/publication/EP473 · *Palm Leaf Structure*, https://gardeningsolutions.ifas.ufl.edu/plants/trees-and-shrubs/palms-and-cycads/palm-leaf-structure/

**Summary (procedural construction, not a single paper — synthesized):** A palm is a *monocot*: no secondary branching. Model = (a) a slightly curved **trunk** built as a stack of short ring/leaf-base segments (helical scar pattern, gentle S-curve and taper), topped by (b) a **crown** of N fronds (typically 15–35 for coconut) arranged in a near-spherical fan with phyllotactic azimuth spacing (golden angle ≈137.5°) and pitch from near-vertical (young, central) to drooping (old, outer). Each **frond** = a **rachis** modeled as a curved beam/spline, lined with **pinnate leaflets** distributed along arc length, leaflet length following a bell/parabolic envelope (short at base & tip, long at mid), each leaflet a V-cross-section card angled progressively (induplicate/reduplicate) and given a slight per-leaflet curl. Use Weber–Penn–style parameters (curveRes, curve, curveBack, length envelopes, splits) for the rachis and stems.

**Apply in our project:** Procedure: place trunk voxels along a Catmull-Rom spine; for each of N fronds, build a rachis spline (start dir from crown phyllotaxis, sag from 1.5 below), then instance 2 rows of leaflet quads (or thin voxel slabs) at parametric `t∈[0,1]` along the rachis with `leafLen = Lmax · sin(π t)^0.7`, alternating ±yaw and increasing droop toward the tip. One `InstancedMesh` for all leaflets across all palms (per-instance matrix), one for trunks.

### 1.5 Frond Physics — Cantilever Droop + Lightweight Sway

**Citation:** Euler–Bernoulli beam theory; cantilever UDL deflection — StructX, http://www.structx.com/Beam_Formulas_019.html ; Engineering ToolBox, https://www.engineeringtoolbox.com/cantilever-beams-d_1848.html
**Sway technique:** Verlet integration — Jakobsen, T. (2001). *Advanced Character Physics* (GDC), https://www.cs.cmu.edu/afs/cs/academic/class/15462-s13/www/lec_slides/Jakobsen.pdf

**Summary:** Treat the rachis as a cantilever fixed at the crown under self-weight (uniformly distributed load `w`). Static droop shape:
`y(x) = w·x²·(6L² − 4Lx + x²) / (24·E·I)`, with tip deflection `y(L) = wL⁴/(8EI)`.
In practice you don't need real E,I — collapse the constants into one art-directable `sag = w/(24EI)` (or just a `droopStrength` 0–1) and bake the curve into the rachis spline control points so heavier/longer fronds bow more. For motion, drive the free end (and 1–2 mid control points) with a cheap **mass-spring/Verlet** node: target = static droop position, plus a wind force = `A·(sin(ω t + φ) + 0.3·noise)` along the wind axis; integrate `p' = p + (1−damp)(p − p_prev) + F·dt²` with a stiff distance constraint to the trunk anchor. This gives the "bounce/heft": stiffer spring + higher damping = heavier-feeling frond.

**Apply in our project:** Per palm, store ~3–4 spline control points per frond on the CPU; each frame run a couple of Verlet iterations (tens of points total per island chunk — negligible), recompute the rachis curve, and write new per-leaflet instance matrices. Decouple update rate (e.g. 20–30 Hz, interpolated) from render. Use a global wind uniform (sum-of-sines) so all fronds share phase coherently with per-frond `φ` offset.

---

## 2. TERRAIN GENERATION BEYOND PLAIN fBM (high priority)

### 2.1 fBm (baseline) & Domain Warping

**Citations (Inigo Quilez):**
- *fBM*: https://iquilezles.org/articles/fbm/
- *Domain warping*: https://iquilezles.org/articles/warp/
- *Value/gradient noise derivatives* (analytic-derivative fBm): https://iquilezles.org/articles/morenoise/

**Summary:** fBm sums noise octaves: `value = Σ amp_i · noise(freq_i · p)`, `freq_{i+1} = lacunarity·freq_i` (≈2), `amp_{i+1} = gain·amp_i` (gain = `2^-H`, H = Hurst, ~0.8–1.0). Domain warping perturbs the *input* coordinate with more noise before sampling, breaking the "boring" isotropy of plain fBm into swirling, ridged, river-like organic structure. IQ's two-level recipe:
```
q = vec2(fbm(p + (0,0)),       fbm(p + (5.2,1.3)));
r = vec2(fbm(p + 4q + (1.7,9.2)), fbm(p + 4q + (8.3,2.8)));
height = fbm(p + 4*r);
```
The intermediate `q`, `r` are also great free masks for coloring/biomes.

**Apply in our project:** Compute island height as warped fBm on the CPU (or a compute-ish GPU pass) sampled at voxel-column XZ; reuse `q`/`r` as cheap secondary fields feeding moisture/material. Use analytic-derivative noise (morenoise) so slope/normal for cliff & beach thresholds is exact and free.

### 2.2 Ridged & Hybrid Multifractal (Musgrave)

**Citation:** Musgrave, F.K. — *Procedural Fractal Terrains* and *A Brief Introduction to Fractals*, in Ebert, Musgrave, Peachey, Perlin, Worley, *Texturing & Modeling: A Procedural Approach* (3rd ed., 2003).
URL (chapter PDF): https://www.classes.cs.uchicago.edu/archive/2015/fall/23700-1/final-project/MusgraveTerrain00.pdf · Reference C source: https://engineering.purdue.edu/~ebertd/texture/1stEdition/musgrave/musgrave.c · TOC: https://userpages.cs.umbc.edu/ebert/book_toc.html

**Summary:** A *multifractal* lets fractal dimension vary spatially (rough peaks, smooth valleys) by making each octave's contribution depend on the running result. Precompute spectral weights `exp[i] = pow(lacunarity, -H*i)`.
- **Ridged multifractal:** per octave `s = offset − |noise|; s *= s;` then `result += s·weight·exp[i]; weight = clamp(s·gain, 0, 1)`. Sharp mountain/cliff ridges; good params `H=1.0, offset=1.0, gain≈2.0, lacunarity 1.5–3.5`.
- **Hybrid multifractal:** `signal=(noise+offset)·exp[i]; result += weight·signal; weight = clamp(weight·signal,0,1)`. Plains in low areas, rugged highlands — ideal island interiors.

**Apply in our project:** Use hybrid multifractal as the primary island-interior height, ridged multifractal added (masked to higher elevations) for the volcanic/rocky spine and to drive the ring-cliff displacement (§3). All CPU-evaluable per voxel column; cache per-chunk.

### 2.3 Hydraulic & Thermal Erosion

**Citation (grid / virtual-pipes):** Mei, X., Decaudin, P., Hu, B.-G. (2007). *Fast Hydraulic Erosion Simulation and Visualization on GPU.* Pacific Graphics 2007.
URL (PDF): https://inria.hal.science/inria-00402079/PDF/FastErosion_PG07.pdf · https://inria.hal.science/inria-00402079
**Combined hydraulic+thermal on GPU:** Jákó, B. (2011). *Fast Hydraulic and Thermal Erosion on the GPU.* CESCG. https://old.cescg.org/CESCG-2011/papers/TUBudapest-Jako-Balazs.pdf
**Particle/droplet method (simple, recommended):** Lague, S. *Hydraulic Erosion.* https://github.com/SebLague/Hydraulic-Erosion · https://sebastian.itch.io/hydraulic-erosion

**Summary — Mei virtual pipes (grid):** Per cell store terrain height `b`, water `d`, suspended sediment `s`. Pipeline each step `dt`:
1. **Rain/source:** `d += dt·rain`.
2. **Flow:** for each of 4 neighbors update outflow flux `f = max(0, f + dt·A·g·Δh / l)` where `Δh` = total-height difference (`b+d`), then scale all four fluxes by `K = min(1, d·L²/((Σf)·dt))` to conserve water.
3. **Water + velocity:** `d += dt·(Σf_in − Σf_out)/L²`; build velocity field `(u,v)` from net horizontal flux.
4. **Erosion/deposition:** sediment capacity `C = Kc · sin(α) · |v|` (α = local terrain tilt; clamp `sin α` to a minimum so flats still carry). If `C > s`: erode `b -= Ks·(C−s)`, `s += Ks·(C−s)`; else deposit `b += Kd·(s−C)`, `s -= Kd·(s−C)`.
5. **Sediment transport:** semi-Lagrangian advection `s(x, t+dt) = s(x − v·dt, t)`.
6. **Evaporation:** `d *= (1 − Ke·dt)`.
Params: `Kc` capacity, `Ks` dissolving, `Kd` deposition, `Ke` evaporation, `A` pipe cross-section, `l` pipe length, `g` gravity.
**Thermal erosion (talus):** where slope between neighbors exceeds the *talus angle*, move material `Δb = Kt·(slope − talusAngle)` from high to low cell — produces natural scree at cliff/beach bases.
**Droplet method (Lague):** simulate many independent droplets; each carries `position, dir, speed, water, sediment`; per step bilinear-sample height & gradient, blend direction with `inertia`, `capacity = max(-Δh · speed · water · capacityFactor, minCapacity)`, erode/deposit the difference over a small radius, then `speed = sqrt(speed² + Δh·gravity)`, `water *= (1 − evaporate)`. Far simpler to implement on CPU than the pipe grid.

**Apply in our project:** Run erosion as an offline/at-generation pass on the 2D heightfield *before* voxelization. Use the **droplet method** (Lague) — easiest in JS, parallelizable across Web Workers, and feeds the voxel column heights directly. Add one thermal pass to create beach/cliff talus. Persist eroded heightfield in the volume's `height` channel; sediment-deposition mask → `material` channel (sand/silt vs rock).

### 2.4 Island Mask (radial falloff / distance-to-edge)

**Citation:** Patel, A. *Polygonal Map Generation for Games*, Red Blob Games.
URL: http://www-cs-students.stanford.edu/~amitp/game-programming/polygon-map-generation/
Also: Travall, *Procedural 2D Island Generation — Noise Functions*, https://medium.com/@travall/procedural-2d-island-generation-noise-functions-13976bddeaf9

**Summary:** Multiply (or subtract) a radial/elliptical falloff `m(x,z)` into the height so land sinks to sea at the edges, guaranteeing an island with beaches. Common forms: `m = 1 − (dist/R)^k` (k≈2–3 for wide beaches), or smoothstep `m = 1 − smoothstep(R0, R1, dist)`, or Euclidean distance-to-edge. Final: `h = (fbm·0.5 + 0.5) · m − seaBias`. The shore band (small `|h − seaLevel|`) becomes the beach; deform `dist` with low-freq noise for a non-circular, organic coastline.

**Apply in our project:** Apply the mask to the §2.2 hybrid-multifractal height before erosion. Define `beach` material where `seaLevel ≤ h < seaLevel + beachHeight`; below → underwater sand; this naturally produces the ringed beach the seaside cliffs sit behind (§3).

### 2.5 Worley / Voronoi Noise (rock, strata, cells)

**Citation:** Worley, S. (1996). *A Cellular Texture Basis Function.* SIGGRAPH '96, pp. 291–294.
URL: https://dl.acm.org/doi/10.1145/237170.237267 · https://history.siggraph.org/learning/a-cellular-texture-basis-function-by-worley/ · Tutorial: https://thebookofshaders.com/12/

**Summary:** Partition space into random feature points (one per jittered grid cell). Basis functions of distance to the nearest points: `F1` (nearest) gives blobby cells; `F2−F1` gives sharp cell *borders* (crack/cliff lines); cell-ID gives flat-shaded regions. Cheap, no precompute. `1−F1` and ridged combinations make convincing rock, cracked mud, and stratified cliff faces.

**Apply in our project:** Use `F2−F1` masks to carve fracture planes into cliff voxels (§3) and as the basis for a "cell ID → biome region" map (§2.6). Stack horizontally-banded value noise (`stripe(y) = fbm(y·k)`) with Worley jitter for sedimentary **strata** in cliff coloring/material channel.

### 2.6 Biome / Season Region Placement with Adjacency Constraints

**Citation:** Patel, A. *Polygonal Map Generation for Games* (Voronoi region graph + biome rules), http://www-cs-students.stanford.edu/~amitp/game-programming/polygon-map-generation/ ; Worley cells (§2.5).

**Summary:** Two robust options to get contiguous biome/season patches with controlled adjacency (e.g. *winter never touches summer*):
1. **Ordered 1-D gradient (simplest, guarantees adjacency):** generate one large-scale, domain-warped low-freq field `g(x,z) ∈ [0,1]`; quantize into ordered bands `spring < summer < autumn < winter`. Because the field is continuous and monotone across a threshold, region *i* can only border `i±1` — winter physically cannot touch summer. Warp `g` for organic, non-banded boundaries.
2. **Voronoi region graph + constrained assignment:** scatter region seeds (Worley/Poisson-disk), build the Voronoi adjacency graph; assign seasons by graph coloring with a forbidden-pair constraint (summer–winter edge illegal). Equivalent to a small CSP / greedy graph-coloring respecting an allowed-adjacency matrix; fall back to inserting a transition season between any illegal pair.

**Apply in our project:** Prefer **option 1** for a stylized island — one extra low-freq warped noise sampled per voxel column, quantized into the volume's `season` channel; adjacency constraint is satisfied *for free* by monotonicity. Use option 2 only if you need non-linear season layouts (islands of winter inside autumn, etc.); store final season per cell in the `season` channel and let meshing/material pick palettes from it.

---

## 3. SEASIDE / RING CLIFF MESHES

**Citation:** Worley cellular noise (§2.5, fracturing); Musgrave ridged multifractal (§2.2, displacement); Patel island mask (§2.4, ring placement).

**Summary (synthesized practical approach):** A ring cliff = the steep transition where the island plateau meets the beach/sea, generated implicitly during voxelization, not as a separate mesh. Practical recipe: (a) define cliff band where the island-mask gradient (slope of `m`/height) exceeds a threshold around the shore radius; (b) **displace** the cliff face radially with ridged multifractal + Worley `F2−F1` so it has vertical fluting and overhangs; (c) **strata**: modulate the `material` channel by `floor((y + worleyJitter)·stratumScale)` to get banded rock colors; (d) for discrete rock outcrops, radially **instance** a small library of voxel rock chunks at angles around the ring (azimuth from Poisson-disk on the circle), each rotated/scaled per seed. Voxelize by carving: start from a solid cylinder/heightfield, subtract `density < isoValue` where `density = baseShape − ridged(p) − worleyCracks(p)`.

**Apply in our project:** Drive everything from the existing height + mask fields — the cliff "emerges" from thresholding density during your meshing pass (greedy mesher or marching cubes over the `density` channel). Add an `InstancedMesh` of 5–10 prebuilt voxel rock blobs scattered along the shore circle for silhouette variety; no bespoke cliff mesh needed.

---

## 4. OpenVDB / VDB IN A WEB / THREE.JS CONTEXT (high priority)

### 4.1 What VDB Is

**Citation:** Museth, K. (2013). *VDB: High-Resolution Sparse Volumes with Dynamic Topology.* ACM TOG 32(3), Article 27.
URL (PDF): https://www.museth.org/Ken/Publications_files/Museth_TOG13.pdf · ACM: https://dl.acm.org/doi/10.1145/2487228.2487235 · NanoVDB/OpenVDB: https://www.openvdb.org/

**Summary:** VDB is a shallow, wide, B+tree-like hierarchy over a virtually infinite 3D index space: a hashed/dense **root**, a few levels of **internal nodes** (each a dense `branchingⁿ` block of child pointers + value/active bitmasks), and **leaf nodes** holding small dense voxel tiles (e.g. 8³) with an active-bit mask. Empty regions cost nothing (no allocation, "background" value), so storage scales with the *narrow band* of active voxels, not the bounding box. Access is O(1)-ish via cached tree traversal (an "accessor" reuses parent nodes for spatially-coherent queries → near-array sequential speed). It's the VFX-standard structure for sparse, time-varying volumes (smoke, fluids, level sets) because topology can change cheaply.

### 4.2 Practical Options in JS / Web

**Citations:** mjurczyk/openvdb (pure-JS reader + Three.js loader): https://github.com/mjurczyk/openvdb · tmpvar/vdb-js: https://github.com/tmpvar/vdb-js · NanoVDB (read-optimized GPU-friendly VDB): part of OpenVDB, https://www.openvdb.org/

**Summary:** There is **no production WASM OpenVDB** usable for authoring in-browser. `mjurczyk/openvdb` is **pure JS**, behaves like a *read-only NanoVDB* (`loadVDB(url) → reader.grids[i].getValue(pos)`, plus a Three.js `VDBLoader` and fog/marching-cubes helpers); it parses existing `.vdb` files and can build a few procedural volume primitives, but it **cannot author/edit/serialize** general VDB grids and struggles with large files (JS memory). Conclusion: don't depend on OpenVDB itself for generation logic.

### 4.3 Recommended Pragmatic Architecture (custom sparse volume, VDB semantics)

Build a **custom chunked sparse voxel volume that emulates VDB semantics** — this is the recommended approach:

- **Two-level structure:** a `Map`/hash from chunk coord → chunk (the "root/internal" analog); each chunk = fixed dense block (e.g. 32³) of typed arrays (the "leaf"). Absent chunks return a per-channel *background* value (air / sea-level / default season) — free empty space exactly like VDB.
- **Named layers/channels** (separate typed-array volumes, sampled independently to drive meshing):
  - `height` — Float32, eroded heightfield (parameterizes terrain density)
  - `density` — Float32 SDF/occupancy, the iso-field the mesher consumes (cliff/terrain shape)
  - `material` — Uint8, rock/sand/soil/strata id (cliff & beach allocation)
  - `season` — Uint8, biome/season region id (texture/palette allocation, §2.6)
- **Accessor pattern:** keep a 1-entry "last chunk" cache per worker for coherent sweeps (the VDB accessor trick) → fast sequential meshing.
- **Generation = parameterization:** generators write into channels; the mesher reads `density` (+ `material`/`season` for vertex attributes) to emit greedy/marching-cubes geometry. Cliff shape, terrain density, and season are thus *independent volume layers* sampled together — the VDB-style decoupling you want, with none of the C++/WASM dependency.
- Optional: NanoVDB-style flat readonly buffers if you later push volumes to a GPU shader.

---

## 5. CAUSTICS (brief)

**Citations:** *GPU Gems* Ch.2 *Rendering Water Caustics* (Guardado/Sánchez-Crespo), https://developer.nvidia.com/gpugems/gpugems/part-i-natural-effects/chapter-2-rendering-water-caustics · IQ *Voronoise*, https://iquilezles.org/articles/voronoise/ · IQ *Cellular FFX*, https://iquilezles.org/articles/cellularffx/

**Summary:** For stylized water, skip physically-based photon caustics. Standard real-time fakes: (1) **animated cellular/Voronoi caustic texture** — sample Worley `F1` (or layered `F2−F1`) in world XZ, animate feature points with `0.5 + 0.5·sin(t + 2π·cellId)`, take a high power and screen-blend onto the seabed; (2) **sum-of-sines / overlapping sine fields** — add 2–4 scrolling sine gratings at different angles/speeds and threshold the bright crests for a cheap shimmering net; (3) **IQ caustic shader** — distort UVs by smooth Voronoi, then index a procedural caustic ramp (see Voronoise/CellularFFX). Project the chosen pattern onto underwater voxels via a downward decal/UV from world position, scrolled by a wind/time uniform shared with the §1.5 frond sway for global coherence.

---

### Quick implementation priority for the island
1. Heightfield: warped fBm (§2.1) → hybrid+ridged multifractal (§2.2) → island mask (§2.4) → droplet erosion + thermal (§2.3) → write `height`/`material`.
2. Season layer: ordered warped low-freq gradient (§2.6 option 1) → `season`.
3. Voxelize into custom sparse volume (§4.3); cliffs emerge from density threshold + Worley fracture (§2.5/§3).
4. Trees: space colonization (§1.1) for broadleaf, parametric palm builder (§1.4) + cantilever/Verlet fronds (§1.5); all via `InstancedMesh`.
5. Polish: animated Voronoi caustics (§5).
