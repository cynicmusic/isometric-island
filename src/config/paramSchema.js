// Declarative schema for the control panel. Same shape as sunset's so the
// ported ControlPanel builds it verbatim. Every tunable in PLAN.md becomes a
// field here — the whole island is live-tunable through the ported UI.

export const schema = {
  sun: {
    label: 'sun',
    icon: '☉',
    blurb: 'drives both the Hillaire sky and the island key light',
    fields: {
      elevationDeg: { type: 'float', label: 'Elevation', min: -10, max: 90, step: 0.5, default: 26, unit: '°', hint: 'low = warm sunset · high = bright noon' },
      azimuthDeg: { type: 'float', label: 'Azimuth', min: -180, max: 180, step: 1, default: -84, unit: '°', hint: 'rakes the terrain — avoids flat back-to-sun lighting' },
      intensity: { type: 'float', label: 'Intensity', min: 1, max: 60, step: 0.5, default: 22 },
    },
  },

  atmosphere: {
    label: 'atmosphere',
    icon: '◐',
    blurb: 'Hillaire 2020 — Rayleigh / Mie / ozone',
    fields: {
      rayleighMul: { type: 'float', label: 'Rayleigh ×', min: 0.0, max: 4.0, step: 0.01, default: 1.0 },
      mieBeta: { type: 'float', label: 'Mie β', min: 0.0, max: 0.05, step: 0.0005, default: 0.021, hint: 'haze thickness' },
      mieG: { type: 'float', label: 'Mie g', min: 0.0, max: 0.95, step: 0.005, default: 0.758 },
      ozoneMul: { type: 'float', label: 'Ozone ×', min: 0.0, max: 3.0, step: 0.01, default: 1.0 },
      planetRadiusKm: { type: 'float', label: 'Planet R', min: 150, max: 6371, step: 25, default: 6371, unit: 'km', hint: '6371 = Earth · lower bends the horizon/sky harder' },
    },
  },

  // Lighting / post. Sky-tinted ambient bounce + analytic water sun-glint
  // are live (free, in-shader). Bloom + aerial haze are staged behind a
  // shared offscreen pass (mobile budget — built once, not per-effect).
  lighting: {
    label: 'lighting',
    icon: '✦',
    blurb: 'sky-tinted bounce · water sun-glint · bloom · aerial haze',
    fields: {
      skyBounce: { type: 'float', label: 'Sky bounce', min: 0, max: 1.6, step: 0.02, default: 0.55, hint: 'faked GI — hemisphere fill tinted by the live sky' },
      bounceTint: { type: 'float', label: 'Bounce tint', min: 0, max: 1, step: 0.02, default: 0.7, hint: 'how hard the bounce pulls toward the sampled sky colour' },
      groundBounce: { type: 'float', label: 'Ground bounce', min: 0, max: 1, step: 0.02, default: 0.3, hint: 'warm up-light from the lit ground' },
      sunGlint: { type: 'float', label: 'Sun glint width', min: 0, max: 2.5, step: 0.05, default: 0.7, hint: 'analytic specular sun streak on the sea' },
      glintSpread: { type: 'float', label: 'Glint spread', min: 0.2, max: 4, step: 0.05, default: 1.1, hint: 'lower = tight mirror streak · higher = broad shimmer' },
      bloom: { type: 'float', label: 'Bloom', min: 0, max: 1.5, step: 0.02, default: 0, hint: 'staged — shared post pass (0 = off, zero cost)' },
      aerialHaze: { type: 'float', label: 'Aerial haze', min: 0, max: 1, step: 0.02, default: 0, hint: 'staged — sky-coloured depth haze (0 = off)' },
    },
  },

  // World structure. These are NOT randomized (by design) and use the
  // amber "structural pin" — pinning them is a deliberate, major decision,
  // not the fun lime "roll-friendly" pin.
  voxel: {
    label: 'voxel',
    icon: '⬚',
    blurb: 'world structure — never randomized · pin (◆ amber) to lock',
    fields: {
      seed: { type: 'int', label: 'Seed', min: 1, max: 99999, step: 1, default: 1337, hint: 'the island. not rolled by random — ◆ to keep one' },
      resolution: { type: 'int', label: 'Voxel grid', min: 128, max: 1024, step: 32, default: 384, hint: 'cells across the world · structural, never randomized' },
      terraceStep: { type: 'float', label: 'Terrace step', min: 0, max: 8, step: 0.5, default: 2.5, unit: 'm', hint: '0 = smooth · >0 = stepped terraces · structural' },
    },
  },

  island: {
    label: 'island',
    icon: '▲',
    blurb: 'bounded voxel island — mask + domain-warp + ridged multifractal',
    fields: {
      radius: { type: 'float', label: 'Radius', min: 300, max: 1100, step: 10, default: 700, unit: 'm', hint: 'island size — bigger = more room for beaches/relief' },
      shape: { type: 'int', label: 'Shape', min: 0, max: 4, step: 1, default: 0, hint: '0 auto (from seed) · 1 round · 2 crescent · 3 long · 4 lobed' },
      lowland: { type: 'float', label: 'Lowland relief', min: 6, max: 90, step: 2, default: 32, unit: 'm', hint: 'rolling-hill amplitude of the bulk of the island' },
      massif: { type: 'float', label: 'Massif height', min: 0, max: 480, step: 10, default: 150, unit: 'm', hint: 'localized mountain uplift above the lowland' },
      massifSharpness: { type: 'float', label: 'Massif sharpness', min: 0.45, max: 2.2, step: 0.05, default: 1, hint: 'higher = narrower, pointier summit envelope' },
      massifOffsetX: { type: 'float', label: 'Massif east/west', min: -0.45, max: 0.45, step: 0.01, default: 0, hint: 'manual mountain placement as a fraction of island radius' },
      massifOffsetZ: { type: 'float', label: 'Massif north/south', min: -0.45, max: 0.45, step: 0.01, default: 0, hint: 'manual mountain placement as a fraction of island radius' },
      warp: { type: 'float', label: 'Domain warp', min: 0, max: 2, step: 0.05, default: 0.85, hint: 'bends the noise sampling coordinates; not a simple rotation' },
      ridge: { type: 'float', label: 'Ridge weight', min: 0, max: 1.5, step: 0.05, default: 0.7, hint: 'ridged multifractal — sharp spines' },
      beachWidth: { type: 'float', label: 'Beach apron', min: 2, max: 50, step: 1, default: 16, unit: 'm', hint: 'raises/extends the low coastal apron; also preserves golf-course greens' },
      valleyDepth: { type: 'float', label: 'Valley carve', min: 0, max: 180, step: 5, default: 55, unit: 'm', hint: 'gully → river → delta cut (post-build subtraction) · 0 = off' },
      valleyWidth: { type: 'float', label: 'Valley width', min: 8, max: 60, step: 2, default: 22, unit: 'm', hint: 'channel half-width near source · widens downstream' },
    },
  },

  seasons: {
    label: 'seasons',
    icon: '❄',
    blurb: 'altitude bands · coast=summer → peak=winter · winter never touches summer',
    fields: {
      sweepDeg: { type: 'float', label: 'Region drift', min: -180, max: 180, step: 1, default: 35, unit: '°', hint: 'rotates the lateral-variety noise' },
      summerEnd: { type: 'float', label: 'Summer line', min: 0.15, max: 0.6, step: 0.01, default: 0.44, hint: 'altitude frac · below = tropical lowland; keep below autumn' },
      autumnEnd: { type: 'float', label: 'Autumn line', min: 0.4, max: 0.78, step: 0.01, default: 0.66, hint: 'altitude frac · keep between summer and snow' },
      coniferEnd: { type: 'float', label: 'Snow line', min: 0.6, max: 0.92, step: 0.01, default: 0.84, hint: 'below = conifer band · above = winter/snow cap' },
      borderWarp: { type: 'float', label: 'Border warp', min: 0, max: 1.5, step: 0.05, default: 0.6, hint: 'organic wander of the altitude bands' },
      craggy: { type: 'float', label: 'Craggy peaks', min: 0, max: 1, step: 0.02, default: 0.4, hint: 'rock speckled through the snow/upper zone' },
      // "Golf course" look — a brighter-lime fairway/"greens" band where grass
      // meets the beach, with sparse sand-trap "bunkers". Default OFF so the
      // big-beach presets (A-1) are byte-identical; opt-in for the B-1 vibe.
      fairway: { type: 'float', label: 'Fairway (greens)', min: 0, max: 1, step: 0.02, default: 0, hint: '0 = off · lime "greens" band above the beach' },
      fairwayBand: { type: 'float', label: 'Fairway band', min: 4, max: 80, step: 2, default: 24, unit: 'm', hint: 'how far the greens reach inland from the sand' },
      bunkerDensity: { type: 'float', label: 'Bunkers', min: 0, max: 1, step: 0.02, default: 0.18, hint: 'sand-trap frequency inside the greens' },
      bunkerSize: { type: 'float', label: 'Bunker size', min: 3, max: 30, step: 1, default: 11, unit: 'm', hint: 'sand-trap blob radius' },
    },
  },

  water: {
    label: 'water',
    icon: '≈',
    blurb: 'caustics (aquarium) + depth-graded blue seafloor + shore glow',
    fields: {
      seaLevel: { type: 'float', label: 'Water datum', min: -2, max: 40, step: 0.5, default: 9, unit: 'm', hint: 'structural build datum; terrain is generated around it' },
      causticScale: { type: 'float', label: 'Caustic scale', min: 0.3, max: 6, step: 0.1, default: 1.6 },
      causticIntensity: { type: 'float', label: 'Caustic ×', min: 0, max: 3, step: 0.05, default: 1.0 },
      causticOpacity: { type: 'float', label: 'Caustic opacity', min: 0, max: 0.8, step: 0.01, default: 0.22, hint: 'alpha of the additive caustic sheet' },
      floorDepth: { type: 'float', label: 'Seafloor depth', min: 10, max: 140, step: 5, default: 64, unit: 'm' },
      floorShape: { type: 'float', label: 'Shelf shape', min: 0.35, max: 1.8, step: 0.05, default: 0.85, hint: 'lower = quick deep drop · higher = long shallow shelf' },
      floorRoughness: { type: 'float', label: 'Seafloor jag', min: 0, max: 3, step: 0.05, default: 1, hint: 'height variation below water' },
      deltaFloor: { type: 'float', label: 'Delta follow', min: 0, max: 1, step: 0.02, default: 0, hint: 'carves underwater floor along the river/delta channel' },
      shoreGlow: { type: 'float', label: 'Shore glow', min: 0, max: 1.5, step: 0.05, default: 0.7, hint: 'cyan + white coastline sampler' },
      shoreGlowWidth: { type: 'float', label: 'Glow width', min: 0.25, max: 4, step: 0.05, default: 1, hint: 'waterward spread of the coastline glow' },
      shoreGlowFollow: { type: 'float', label: 'Glow follow', min: 0, max: 1, step: 0.02, default: 1, hint: '1 = tight shoreline ribbon · 0 = smoother broad overlaps' },
    },
  },

  // Tree population. Just palm count for now (perf-test knob) — other
  // species get their own sliders later. Drives Scene._plantTrees.
  tree: {
    label: 'tree',
    icon: '🌴',
    blurb: 'grove population — palms (more sliders later)',
    fields: {
      palmCount: { type: 'int', label: 'Palm count', min: 0, max: 512, step: 1, default: 56, hint: 'palms massed on the fairway/courseway · raise to stress-test' },
      palmLine: { type: 'float', label: 'Palm line', min: 0.18, max: 0.9, step: 0.01, default: 0.58, hint: 'highest normalized altitude where palms may plant' },
      mixedTreeCount: { type: 'int', label: 'Mixed trees', min: 0, max: 256, step: 1, default: 34, hint: 'summer/autumn/conifer/winter scatter count' },
      palmSway: { type: 'float', label: 'Palm sway', min: 0, max: 2, step: 0.02, default: 1, hint: 'multiplies the baked palm wind' },
    },
  },

  shadows: {
    label: 'shadows',
    icon: '◒',
    blurb: 'two sun shadow maps · fine layer plus coarse motion layer',
    fields: {
      enable: { type: 'bool', label: 'Shadows', default: true, hint: 'X toggles shadow casting without killing sun light' },
      primaryEnable: { type: 'bool', label: 'Primary layer', default: true, hint: 'main sun shadow map' },
      primarySize: { type: 'int', label: 'Primary map', min: 512, max: 8192, step: 512, default: 8192, hint: 'texels per side; GPU clamps if unsupported' },
      primaryCoverage: { type: 'float', label: 'Primary span', min: 0.35, max: 1.6, step: 0.01, default: 1.28, hint: 'smaller = sharper but can clip island-edge shadows' },
      secondaryEnable: { type: 'bool', label: 'Coarse layer', default: true, hint: 'second sun shadow map for low-res dance' },
      secondarySize: { type: 'int', label: 'Coarse map', min: 512, max: 8192, step: 512, default: 2560, hint: 'try 512, 1024, 2048 against the primary' },
      secondaryCoverage: { type: 'float', label: 'Coarse span', min: 0.35, max: 1.8, step: 0.01, default: 1, hint: 'coarse layer shadow-camera coverage' },
      secondaryMix: { type: 'float', label: 'Coarse mix', min: 0, max: 1, step: 0.01, default: 1, hint: 'add mode: amount of extra coarse-map sun' },
      blendMode: { type: 'int', label: 'Blend mode', min: 0, max: 1, step: 1, default: 1, labels: ['split', 'add'], hint: 'split keeps total light stable · add is stylized and brighter' },
      filterMode: { type: 'int', label: 'Filter', min: 0, max: 2, step: 1, default: 1, labels: ['hard', 'pcf', 'soft'], hint: 'shadow-map sampling kernel' },
      softness: { type: 'float', label: 'Softness', min: 0, max: 8, step: 0.1, default: 1.7, hint: 'shadow radius used by filtered modes' },
      bias: { type: 'float', label: 'Bias', min: -0.005, max: 0.005, step: 0.0001, precision: 4, default: -0.0006, hint: 'depth offset; fights acne vs detached shadows' },
      normalBias: { type: 'float', label: 'Normal bias', min: 0, max: 6, step: 0.05, default: 2.2, hint: 'offset along voxel normals; original default was 2.2' },
    },
  },

  render: {
    label: 'render',
    icon: '◯',
    blurb: 'camera, exposure, horizon haze',
    fields: {
      fov: { type: 'float', label: 'FOV', min: 40, max: 95, step: 1, default: 68, unit: '°' },
      exposure: { type: 'float', label: 'Exposure', min: 0.2, max: 3.0, step: 0.01, default: 1.05 },
      fogDensity: { type: 'float', label: 'Horizon haze', min: 0, max: 0.006, step: 0.00005, default: 0.00072, hint: 'dissolves the bounded sea edge into the sky' },
      horizonWarp: { type: 'bool', label: 'Horizon warp', default: true },
    },
  },

  godrays: {
    label: 'god rays',
    icon: '✺',
    blurb: 'screen-space radial scatter · downsample→march→upsample',
    fields: {
      enable: { type: 'bool', label: 'Enable', default: true, hint: 'G toggles · off = golden bypass (zero cost)' },
      source: { type: 'float', label: 'Source mask', min: 0, max: 1, step: 0.02, default: 1, hint: '1 = clean depth sky/occluder · 0 = raw-scene debug echoes' },
      intensity: { type: 'float', label: 'Intensity', min: 0, max: 3, step: 0.05, default: 0.85, hint: 'first gain knob' },
      density: { type: 'float', label: 'Density', min: 0.2, max: 1, step: 0.02, default: 0.32, hint: 'ray reach toward the sun' },
      decay: { type: 'float', label: 'Decay', min: 0.8, max: 1, step: 0.005, default: 0.915, hint: 'tail length' },
      weight: { type: 'float', label: 'Weight', min: 0.1, max: 2, step: 0.05, default: 2, hint: 'per-sample lift' },
      exposure: { type: 'float', label: 'Exposure', min: 0.1, max: 3, step: 0.05, default: 0.7, hint: 'final ray gain after the march' },
      threshold: { type: 'float', label: 'Threshold', min: 0.05, max: 0.95, step: 0.01, default: 0.62, hint: 'source cutoff' },
      groundMask: { type: 'float', label: 'Ground mask', min: 0, max: 1, step: 0.02, default: 0.5, hint: 'suppresses sources below the sun' },
      reach: { type: 'float', label: 'Reach', min: 0.4, max: 2.5, step: 0.05, default: 1.45, hint: 'screen-space falloff radius' },
      warmth: { type: 'float', label: 'Warmth', min: 0, max: 1, step: 0.02, default: 0.5, hint: '0 = sky-colour rays · 1 = warm sun' },
      samples: { type: 'int', label: 'March taps', min: 6, max: 48, step: 1, default: 16, hint: 'sample count in the radial march' },
      resScale: { type: 'float', label: 'Buffer scale', min: 0.06, max: 1, step: 0.02, default: 0.25, hint: 'LOW = cheap + blocky scatter' },
      sharp: { type: 'float', label: 'Upsample snap', min: 0, max: 1, step: 0.05, default: 0.25, hint: '0 = bilinear · 1 = raw low-res blocks; no blur pass' },
      blurEnable: { type: 'bool', label: 'Blur', default: false, hint: 'off = raw march · on = optional coalescing pass' },
      blurAmount: { type: 'float', label: 'Blur mix', min: 0, max: 1, step: 0.01, default: 0.18, hint: 'blend raw rays with the blur pass' },
      blurRadius: { type: 'float', label: 'Blur radius', min: 0.25, max: 8, step: 0.05, default: 1.5, hint: 'god-buffer texel radius' },
      blurPasses: { type: 'int', label: 'Blur passes', min: 1, max: 4, step: 1, default: 1, hint: 'extra separable passes; cost is linear' },
    },
  },

  camera: {
    label: 'camera',
    icon: '◌',
    blurb: 'director scaffold · human input always wins',
    fields: {
      director: { type: 'bool', label: 'Camera director', default: false, hint: 'AFK handoff scaffold; no path/focus math yet' },
      focusMountain: { type: 'float', label: 'Mountain focus', min: 0, max: 1, step: 0.01, default: 0.35, hint: 'future focus probability · not wired yet' },
      focusSky: { type: 'float', label: 'Sky focus', min: 0, max: 1, step: 0.01, default: 0.18, hint: 'future focus probability · not wired yet' },
      focusGreenway: { type: 'float', label: 'Greenway focus', min: 0, max: 1, step: 0.01, default: 0.16, hint: 'future focus probability · not wired yet' },
      focusMassif: { type: 'float', label: 'Massif focus', min: 0, max: 1, step: 0.01, default: 0.22, hint: 'future focus probability · not wired yet' },
      focusValley: { type: 'float', label: 'Valley focus', min: 0, max: 1, step: 0.01, default: 0.14, hint: 'future focus probability · not wired yet' },
      focusShoreline: { type: 'float', label: 'Shoreline focus', min: 0, max: 1, step: 0.01, default: 0.24, hint: 'future focus probability · not wired yet' },
      focusPalms: { type: 'float', label: 'Palms focus', min: 0, max: 1, step: 0.01, default: 0.12, hint: 'future focus probability · not wired yet' },
      focusWater: { type: 'float', label: 'Water focus', min: 0, max: 1, step: 0.01, default: 0.16, hint: 'future focus probability · not wired yet' },
    },
  },

  orbitSweep: {
    label: 'orbit sweep',
    icon: '↻',
    blurb: 'sun elevation + azimuth overlay · real sliders stay authoritative',
    fields: {
      enable: { type: 'bool', label: 'Orbit sweep', default: false, hint: 'slow hidden sun path; touching sun controls turns it off' },
      speed: { type: 'float', label: 'Sim speed', min: 0, max: 4, step: 0.001, precision: 3, default: 1.0, curve: 2.4, uiStep: 0.001, hint: 'curved time multiplier · most slider travel lives below 1.2' },
      elevationDeg: { type: 'float', label: 'Elevation', min: -10, max: 90, step: 0.01, precision: 2, default: 26, unit: '°', pin: false, hint: 'runtime sweep value; not saved to presets' },
      azimuthDeg: { type: 'float', label: 'Azimuth', min: -180, max: 180, step: 0.01, precision: 2, default: -84, unit: '°', pin: false, hint: 'runtime sweep value; wraps through 360° under the hood' },
      elevationSpeed: { type: 'float', label: 'Elevation speed', min: 0, max: 24, step: 0.01, default: 4, hint: 'multiplies sim speed for sunset cycling' },
      azimuthSpeed: { type: 'float', label: 'Azimuth speed', min: 0, max: 8, step: 0.01, default: 0.5, hint: 'multiplies sim speed for horizontal orbit drift' },
      elevationRange: { type: 'range', label: 'Elevation arc', min: -10, max: 90, step: 0.5, default: [2, 50], unit: '°', handle: 'ticks', hint: 'sweep band; current elevation can drift outside before re-entering' },
    },
  },
};

export const sectionOrder = ['orbitSweep', 'sun', 'atmosphere', 'lighting', 'voxel', 'island', 'seasons', 'water', 'tree', 'shadows', 'render', 'godrays', 'camera'];
