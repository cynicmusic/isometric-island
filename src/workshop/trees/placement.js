// TREE WORKSHOP — re-integration CONTRACT (the important part of the scaffold)
//
// This is the surface the main sim's flora planter will eventually call. It
// is deliberately the same shape we'd want at re-integration so the workshop
// is designed AROUND its landing zone instead of guessing later. Keep these
// signatures stable; tune the bodies.
//
// Independence: this module imports NOTHING from the sim. The biome ids
// mirror src/gen/palette.js MAT.* by VALUE only (documented below) so a
// re-integration is a rename, not a rewrite — but the workshop never couples
// to the sim's terrain/season code (that is codex's / the sim's territory).

// Biome classes the planter reasons about. Values chosen to line up with the
// sim's MAT enum where it matters (FAIRWAY=8, SAND=0, GRASS=2) so the eventual
// adapter is trivial. The workshop does not depend on that — it is a hint.
export const BIOME = {
  BEACH: 'beach',     // sim MAT.SAND at/near shore
  FAIRWAY: 'fairway', // sim MAT.FAIRWAY (8) — the manicured "greens"
  BUNKER: 'bunker',   // sim MAT.SAND (0) inside the greens (sand traps)
  GRASS: 'grass',     // sim MAT.GRASS (2)
  HIGH: 'high',       // rock / conifer line / above the green belt
};

// Mock biome field for the workshop preview ONLY. A cross-section that puts
// the re-integration target front and centre: shore → fairway apron with
// scattered bunkers → grass → rising ground. The real sim will pass actual
// terrain samples; this just lets us SEE the placement rule behave where the
// palms are meant to concentrate.
export function sampleMockBiome(x, z, rng2) {
  // z runs inland: 0 = waterline, grows away from shore.
  if (z < 6) return { biome: BIOME.BEACH, altitude: 0.02 };
  if (z < 46) {
    // fairway apron with organic bunker blobs (value-noise stand-in)
    const n = rng2(x * 0.06, z * 0.06);
    const bunker = rng2(x * 0.11 + 13.7, z * 0.11 - 4.2) > 0.74;
    if (bunker && n > 0.35) return { biome: BIOME.BUNKER, altitude: 0.05 };
    return { biome: BIOME.FAIRWAY, altitude: 0.05 + n * 0.04 };
  }
  if (z < 120) return { biome: BIOME.GRASS, altitude: 0.12 + (z - 46) / 600 };
  return { biome: BIOME.HIGH, altitude: 0.45 + (z - 120) / 400 };
}

// THE CONTRACT. Given a biome sample + an rng, decide whether a tree lands
// here, which class, and at what scale. Tuned around the brief: palms are
// FIRST-CLASS and want to be BIGGER and MORE CONCENTRATED on/near the
// fairway, bunkers and beach. Non-palms hold the grass/high ground. Winter
// variants are scaffolded but OFF unless opts.winterStub.
//
//   biome  : { biome, altitude } from sampleMockBiome (or the sim adapter)
//   rng    : () => [0,1)
//   opts   : { palmConcentration 0..2, palmScale 0..2, density 0..2,
//              winterStub:false }
//
// returns null (no tree) OR { kind, scale }
export function pickTree(sample, rng, opts) {
  const o = Object.assign(
    { palmConcentration: 1, palmScale: 1, density: 1, winterStub: false },
    opts || {},
  );

  // Per-biome: [baseDensity, palmShare, palmScaleMul, fallbackKind]
  const RULES = {
    [BIOME.BEACH]:   [0.10, 0.95, 1.55, 'broadleaf'],
    [BIOME.FAIRWAY]: [0.16, 0.92, 1.75, 'broadleaf'], // the headline: big palms on the greens
    [BIOME.BUNKER]:  [0.05, 0.98, 1.35, 'palm'],      // sparse, almost-all palm
    [BIOME.GRASS]:   [0.22, 0.30, 1.00, 'broadleaf'],
    [BIOME.HIGH]:    [0.20, 0.04, 0.90, 'conifer'],
  };
  const [baseD, palmShare, palmMul, fallback] = RULES[sample.biome] || RULES[BIOME.GRASS];

  if (rng() > baseD * o.density) return null;

  // Palms bias hard toward the green belt; opts.palmConcentration steepens it.
  const wantPalm = rng() < Math.min(1, palmShare * o.palmConcentration);
  if (wantPalm) {
    return { kind: 'palm', scale: palmMul * o.palmScale * (0.85 + rng() * 0.4) };
  }
  // Non-palm classes. Winter only exists when explicitly scaffolded on.
  let kind = fallback;
  if (o.winterStub && sample.biome === BIOME.HIGH && rng() < 0.25) kind = 'winter';
  return { kind, scale: 0.9 + rng() * 0.3 };
}
