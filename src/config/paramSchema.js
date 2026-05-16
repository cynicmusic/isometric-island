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
      massif: { type: 'float', label: 'Massif height', min: 0, max: 360, step: 10, default: 150, unit: 'm', hint: 'localized mountain uplift above the lowland' },
      warp: { type: 'float', label: 'Domain warp', min: 0, max: 2, step: 0.05, default: 0.85 },
      ridge: { type: 'float', label: 'Ridge weight', min: 0, max: 1.5, step: 0.05, default: 0.7, hint: 'ridged multifractal — sharp spines' },
      beachWidth: { type: 'float', label: 'Beach width', min: 2, max: 50, step: 1, default: 16, unit: 'm' },
      valleyDepth: { type: 'float', label: 'Valley carve', min: 0, max: 120, step: 5, default: 55, unit: 'm', hint: 'gully → river → delta cut (post-build subtraction) · 0 = off' },
      valleyWidth: { type: 'float', label: 'Valley width', min: 8, max: 60, step: 2, default: 22, unit: 'm', hint: 'channel half-width near source · widens downstream' },
    },
  },

  seasons: {
    label: 'seasons',
    icon: '❄',
    blurb: 'altitude bands · coast=summer → peak=winter · winter never touches summer',
    fields: {
      sweepDeg: { type: 'float', label: 'Region drift', min: -180, max: 180, step: 1, default: 35, unit: '°', hint: 'rotates the lateral-variety noise' },
      summerEnd: { type: 'float', label: 'Summer line', min: 0.15, max: 0.6, step: 0.01, default: 0.44, hint: 'altitude frac · below = tropical lowland' },
      autumnEnd: { type: 'float', label: 'Autumn line', min: 0.4, max: 0.78, step: 0.01, default: 0.66 },
      coniferEnd: { type: 'float', label: 'Conifer line', min: 0.6, max: 0.92, step: 0.01, default: 0.84, hint: 'above = winter snow caps' },
      borderWarp: { type: 'float', label: 'Border warp', min: 0, max: 1.5, step: 0.05, default: 0.6, hint: 'organic wander of the altitude bands' },
    },
  },

  water: {
    label: 'water',
    icon: '≈',
    blurb: 'caustics (aquarium) + depth-graded blue seafloor + shore glow',
    fields: {
      seaLevel: { type: 'float', label: 'Sea level', min: -2, max: 40, step: 0.5, default: 9, unit: 'm' },
      causticScale: { type: 'float', label: 'Caustic scale', min: 0.3, max: 6, step: 0.1, default: 1.6 },
      causticIntensity: { type: 'float', label: 'Caustic ×', min: 0, max: 3, step: 0.05, default: 1.0 },
      floorDepth: { type: 'float', label: 'Seafloor depth', min: 10, max: 140, step: 5, default: 64, unit: 'm' },
      shoreGlow: { type: 'float', label: 'Shore glow', min: 0, max: 1.5, step: 0.05, default: 0.7, hint: 'warm orange beach halo (aquarium-sky math)' },
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
};

export const sectionOrder = ['sun', 'atmosphere', 'voxel', 'island', 'seasons', 'water', 'render'];
