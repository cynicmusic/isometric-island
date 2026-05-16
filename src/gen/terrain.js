// Island generation (PLAN.md §5, Phase-1 subset):
//   1. island mask     — noise-warped radial falloff → bounded coastline
//   2. macro relief     — domain-warped fBm  +  ridged multifractal spines
//   3. beach / sea split — clean waterline ring, sloping blue seafloor
//   4. material channel  — sand / rock / grass / snow / grassy-snow / autumn / seafloor
//   5. season channel    — monotonic gradient (gen/seasons.js)
// Erosion, terracing-as-pass and carved cliffs are Phase 2; the stepped
// voxel look comes from height quantization in the mesher (vstep).

import { fbm2, ridgedFbm2, mulberry32, lerp } from './noise.js';
import { SparseVolume } from '../voxel/SparseVolume.js';
import { MAT } from './palette.js';
import { makeSeasonField, SEASON } from './seasons.js';

export function generateIsland(opts) {
  const {
    seed, radius, resolution, lowland, massif, terraceStep, warp, ridge, beachWidth,
    seaLevel, floorDepth, seasons,
  } = opts;

  // Decoupled relief: `lowland` is the rolling-hill amplitude of the bulk of
  // the island; `massif` is the localized mountain uplift on top. maxHeight
  // is just their sum, used for normalisation (snow line etc).
  const maxHeight = lowland + massif;

  // Must comfortably exceed the island so it isn't clipped AND leaves a
  // seafloor ring for the circular opacity fade to dissolve.
  const worldSize = radius * 2.3;
  const cellSize = worldSize / resolution;
  const vstep = terraceStep > 0 ? terraceStep : Math.max(1.5, cellSize * 0.85);

  const vol = new SparseVolume({ resolution, worldSize, vstep });
  const seasonAt = makeSeasonField(seasons, seed);

  // Macro elevation (metres above an arbitrary land datum), shared by the
  // cell and its neighbours so we can estimate slope by finite difference.
  const fScale = 0.0015;

  // Irregular coastline mask: one connected landmass, but with real bays,
  // headlands and a peninsula or two — not a circle. Low-frequency so the
  // mass stays connected; higher amplitude than before for shape interest.
  function coast(x, z) {
    const r = Math.hypot(x, z);
    const wob = fbm2(x * 0.0010 + 4.2, z * 0.0010 - 7.8, { seed: seed + 5, octaves: 4, warp: 0.55 });
    const lobes = fbm2(x * 0.0026 - 2.1, z * 0.0026 + 5.4, { seed: seed + 23, octaves: 3, warp: 0.4 }) - 0.5;
    const effR = radius * (0.74 + 0.46 * (wob - 0.5) + 0.16 * lobes);
    // Wide transition band so land can emerge gradually → room for long beaches.
    return 1 - smooth01(0.45, 1.04, r / Math.max(1, effR));
  }

  // Shore profile: 0 = sea-cliff stretch, 1 = gentle long-beach stretch.
  // Low-frequency so each side of the island is consistently one or the
  // other; tuned so ~60% of the coast is gentle, ~40% cliff.
  function shoreType(x, z) {
    const n = fbm2(x * 0.0016 + 31.7, z * 0.0016 - 12.3,
      { seed: seed + 131, octaves: 3, warp: 0.45 });
    return Math.max(0, Math.min(1, (n - 0.34) / 0.5));
  }

  // One dominant massif + 0–2 minor spurs, constrained so seed-to-seed
  // variance is low (most seeds read as "a lush island with a mountain").
  const peaks = (() => {
    const rnd = mulberry32((seed * 911) >>> 0);
    const out = [];
    const a0 = rnd() * Math.PI * 2;
    const d0 = radius * (0.08 + rnd() * 0.24);          // off-centre, off the rim
    out.push({
      cx: Math.cos(a0) * d0, cz: Math.sin(a0) * d0,
      h: massif * (0.80 + rnd() * 0.16), sig: radius * (0.13 + rnd() * 0.05),
      rot: rnd() * Math.PI * 2, sk: rnd(), spur: 3 + Math.floor(rnd() * 4),
    });
    const minor = (rnd() < 0.55 ? 1 : 0) + (rnd() < 0.25 ? 1 : 0);
    for (let k = 0; k < minor; k++) {
      const a = a0 + (rnd() - 0.5) * 2.6;
      const dd = radius * (0.22 + rnd() * 0.30);
      out.push({
        cx: Math.cos(a) * dd, cz: Math.sin(a) * dd,
        h: massif * (0.20 + rnd() * 0.20), sig: radius * (0.09 + rnd() * 0.05),
        rot: rnd() * Math.PI * 2, sk: rnd(), spur: 3 + Math.floor(rnd() * 3),
      });
    }
    return out;
  })();

  // A massif is a Gaussian ENVELOPE × ridged-multifractal × radial spur
  // ridges — a real mountain with descending ridgelines and gullies, not a
  // smooth caldera cone. Slope-driven rock/snow then reads it as a mountain.
  function massifAt(x, z) {
    let m = 0;
    for (const p of peaks) {
      const dx = x - p.cx, dz = z - p.cz;
      const g = Math.exp(-(dx * dx + dz * dz) / (2 * p.sig * p.sig));
      if (g < 0.0025) continue;
      const env = Math.pow(g, 1.22);                    // peakier than a dome
      const cr = Math.cos(p.rot), sr = Math.sin(p.rot);
      const lx = dx * cr - dz * sr, lz = dx * sr + dz * cr;
      const rg = ridgedFbm2(lx * 0.011 + p.sk * 7, lz * 0.011 - p.sk * 4,
        { seed: seed + 17 + ((p.cx | 0) & 255), octaves: 5, warp: 0.55 });
      const ang = Math.atan2(lz, lx);
      const spurs = 0.5 + 0.5 * Math.cos(ang * p.spur + rg * 3.0);
      // Multiplier averages ~0.8 and peaks ~1.15 so the summit reaches ≈p.h,
      // not 2×; ridges/spurs carve relief without inflating overall height.
      m += p.h * env * (0.50 + 0.50 * rg) * (0.85 + 0.30 * spurs);
    }
    return m;
  }

  function surfaceAt(x, z) {
    const c = coast(x, z);
    if (c > 0.5) {
      const lf = (c - 0.5) * 2;                       // 0 shoreline → 1 inland
      const rNorm = Math.min(1, Math.hypot(x, z) / radius);
      const st = shoreType(x, z);                     // 0 cliff → 1 gentle

      // Lowland: rolling hills + ridgelines (independent of the massif).
      const base = fbm2(x * fScale, z * fScale, { seed, octaves: 5, warp });
      const ridgeN = ridgedFbm2(x * fScale * 1.7 + 9.7, z * fScale * 1.7 - 3.3,
        { seed: seed + 17, octaves: 5, warp: warp * 0.6 });
      const connect = (1 - Math.pow(rNorm, 1.5)) * lowland * 0.5;
      const relief =
        base * lowland * 0.85
        + Math.pow(ridgeN, 1.5) * lowland * 1.1 * (0.35 + ridge)
        + massifAt(x, z)                                 // localized mountain
        + connect;

      // Coastal apron: a wide, low, near-flat beach that rises only a few
      // metres over a landFrac span that is LARGE on gentle shores and tiny
      // on sea-cliff shores. Beyond the apron the land climbs into relief.
      // This is the "beach extends OUTWARD, flat, only where gradual" fix.
      const apron = lerp(0.03, 0.46, smooth01(0.30, 0.74, st));
      const aprT = Math.min(1, lf / apron);
      const aprH = smooth01(0, 1, aprT) * (beachWidth * lerp(0.35, 0.9, st));
      const beyond = smooth01(apron, Math.min(0.98, apron + 0.5), lf);
      return seaLevel + 0.5 + aprH + beyond * relief;
    }
    const seaFrac = (0.5 - c) * 2;                     // 0 at coast → 1 open sea
    const ripple = (fbm2(x * 0.01, z * 0.01, { seed: seed + 90, octaves: 3 }) - 0.5) * 4;
    return seaLevel - 1.0 - Math.pow(seaFrac, 0.85) * floorDepth + ripple;
  }

  for (let j = 0; j < resolution; j++) {
    for (let i = 0; i < resolution; i++) {
      const [x, z] = vol.cellToWorld(i, j);
      const h = surfaceAt(x, z);
      const idx = vol.idx(i, j);

      // Slope from finite difference of the surface (metres / metre).
      const hx = surfaceAt(x + cellSize, z);
      const hz = surfaceAt(x, z + cellSize);
      const slope = Math.hypot(hx - h, hz - h) / cellSize;

      const a = (h - seaLevel) / Math.max(1, maxHeight);   // 0 shore → ~1 peak
      const { season } = seasonAt(x, z, a);
      vol.season[idx] = season;                            // tint + tree pick ONLY

      const isLand = h > seaLevel - 0.35;
      vol.land[idx] = isLand ? 1 : 0;
      const st = shoreType(x, z);

      // Material is DECOUPLED from season — driven by slope / height / shore.
      // So grass meets sand directly (no forced autumn ring → no neapolitan);
      // season only re-tints grass + selects trees (done in the mesher).
      let mat;
      if (!isLand) {
        mat = MAT.SEAFLOOR;
      } else if (slope > 0.92) {
        mat = MAT.ROCK;                                     // any steep face = cliff/rock
      } else if (h <= seaLevel + beachWidth * 1.25 && slope < 0.34) {
        mat = MAT.SAND;                                     // flat & low = wide beach
      } else if (h <= seaLevel + beachWidth * 0.9 && st < 0.34) {
        mat = MAT.ROCK;                                     // rocky shore on cliff stretches
      } else if (a > 0.82) {
        mat = MAT.SNOW;                                     // snow cap = pure altitude+exposure
      } else if (a > 0.66) {
        mat = MAT.ROCK;                                     // bare upper massif (thin band)
      } else if (a > 0.5 && slope > 0.62) {
        mat = MAT.DIRT;                                     // scree / talus
      } else {
        mat = MAT.GRASS;                                    // lush — season TINTS this
      }

      vol.material[idx] = mat;
      // Irregular ("randomized") terraces — perturb height before quantizing
      // so step boundaries wander organically instead of forming perfect
      // concentric contour rings.
      const tj = (fbm2(x * 0.05 + 3.1, z * 0.05 - 6.7,
        { seed: seed + 53, octaves: 3, warp: 0.5 }) - 0.5) * vstep * 1.5;
      vol.heightVox[idx] = Math.round((h + tj) / vstep);
    }
  }

  vol.meta = { seed, radius, worldSize, cellSize, vstep, seaLevel, floorDepth, maxHeight };
  return vol;
}

function smooth01(e0, e1, x) {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0 || 1)));
  return t * t * (3 - 2 * t);
}
