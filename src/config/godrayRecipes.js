// God-ray recipe deltas for the workshop panel. They apply over whatever scene
// preset is currently loaded; the selected recipe is UI state, not a preset.

const neutralLabDebug = {
  edgeSource: 0,
  edgeWidth: 1.2,
  edgeGain: 1,
  debugView: 0,
  debugGain: 1,
};

function g(label, note, godrays) {
  return { label, note, godrays: { ...neutralLabDebug, ...godrays } };
}

const recipes = [
  {
    label: 'original',
    note: 'restore the loaded scene preset god-ray stack',
    restoreSceneGodrays: true,
  },
  g('barely on', 'parity check plus a tiny visible contribution', {
    enable: true, source: 1, intensity: 0.18, density: 0.26, decay: 0.89,
    weight: 1.1, exposure: 0.42, threshold: 0.68, groundMask: 0.58,
    reach: 0.95, warmth: 0.45, samples: 16, resScale: 0.25, sharp: 0.25,
  }),
  g('short clean', 'short reach with more taps', {
    enable: true, source: 1, intensity: 0.55, density: 0.22, decay: 0.875,
    weight: 1.55, exposure: 0.55, threshold: 0.7, groundMask: 0.6,
    reach: 0.85, warmth: 0.5, samples: 28, resScale: 0.32, sharp: 0.35,
  }),
  g('short bright', 'same short reach with more lift', {
    enable: true, source: 1, intensity: 0.78, density: 0.24, decay: 0.885,
    weight: 1.75, exposure: 0.68, threshold: 0.68, groundMask: 0.58,
    reach: 0.9, warmth: 0.58, samples: 28, resScale: 0.32, sharp: 0.45,
  }),
  g('long faint', 'long transport without flooding the frame', {
    enable: true, source: 1, intensity: 0.42, density: 0.72, decay: 0.945,
    weight: 0.95, exposure: 0.48, threshold: 0.72, groundMask: 0.62,
    reach: 1.9, warmth: 0.5, samples: 20, resScale: 0.25, sharp: 0.42,
  }),
  g('long crisp', 'longer rays with snapped low-res structure', {
    enable: true, source: 1, intensity: 0.52, density: 0.76, decay: 0.95,
    weight: 1.0, exposure: 0.5, threshold: 0.74, groundMask: 0.65,
    reach: 2.15, warmth: 0.55, samples: 20, resScale: 0.22, sharp: 0.78,
  }),
  g('disc only', 'high threshold so mostly the sun disc emits', {
    enable: true, source: 1, intensity: 0.85, density: 0.48, decay: 0.925,
    weight: 1.5, exposure: 0.65, threshold: 0.84, groundMask: 0.7,
    reach: 1.35, warmth: 0.62, samples: 22, resScale: 0.28, sharp: 0.35,
  }),
  g('sky leak', 'lower threshold, but low gain', {
    enable: true, source: 1, intensity: 0.3, density: 0.5, decay: 0.92,
    weight: 0.9, exposure: 0.4, threshold: 0.5, groundMask: 0.5,
    reach: 1.3, warmth: 0.42, samples: 16, resScale: 0.25, sharp: 0.25,
  }),
  g('raw gentle', 'old source, restrained echo transport', {
    enable: true, source: 0, intensity: 0.38, density: 0.62, decay: 0.925,
    weight: 0.9, exposure: 0.42, threshold: 0.68, groundMask: 0.55,
    reach: 1.45, warmth: 0.52, samples: 16, resScale: 0.22, sharp: 0.55,
  }),
  g('raw echo', 'old source for mountain smear diagnosis', {
    enable: true, source: 0, intensity: 0.62, density: 0.82, decay: 0.95,
    weight: 0.9, exposure: 0.48, threshold: 0.72, groundMask: 0.6,
    reach: 2.0, warmth: 0.6, samples: 16, resScale: 0.18, sharp: 0.9,
  }),
  g('raw blocks', 'intentionally coarse raw-source blocks', {
    enable: true, source: 0, intensity: 0.75, density: 0.88, decay: 0.955,
    weight: 0.85, exposure: 0.45, threshold: 0.64, groundMask: 0.52,
    reach: 2.2, warmth: 0.65, samples: 10, resScale: 0.12, sharp: 1,
  }),
  g('raw highcut', 'raw source with aggressive threshold', {
    enable: true, source: 0, intensity: 0.7, density: 0.7, decay: 0.94,
    weight: 1.0, exposure: 0.5, threshold: 0.82, groundMask: 0.66,
    reach: 1.75, warmth: 0.58, samples: 18, resScale: 0.22, sharp: 0.75,
  }),
  g('edge mix', 'gentle ridge-edge source blend', {
    enable: true, source: 0.55, intensity: 0.62, density: 0.5, decay: 0.92,
    weight: 1.1, exposure: 0.5, threshold: 0.68, groundMask: 0.58,
    reach: 1.45, warmth: 0.5, samples: 20, resScale: 0.28, sharp: 0.5,
    edgeSource: 0.35, edgeWidth: 1.2, edgeGain: 2.2,
  }),
  g('edge ridge', 'stronger occluder-boundary emission', {
    enable: true, source: 0.35, intensity: 0.72, density: 0.62, decay: 0.935,
    weight: 1.15, exposure: 0.55, threshold: 0.66, groundMask: 0.56,
    reach: 1.75, warmth: 0.55, samples: 22, resScale: 0.28, sharp: 0.62,
    edgeSource: 0.7, edgeWidth: 1.35, edgeGain: 3.2,
  }),
  g('edge narrow', 'thin ridge field, more separation', {
    enable: true, source: 0.25, intensity: 0.78, density: 0.58, decay: 0.93,
    weight: 1.2, exposure: 0.55, threshold: 0.7, groundMask: 0.6,
    reach: 1.6, warmth: 0.52, samples: 24, resScale: 0.32, sharp: 0.7,
    edgeSource: 0.82, edgeWidth: 0.7, edgeGain: 3.8,
  }),
  g('edge wide', 'fatter ridge field without full-frame wash', {
    enable: true, source: 0.25, intensity: 0.58, density: 0.64, decay: 0.935,
    weight: 1.0, exposure: 0.48, threshold: 0.72, groundMask: 0.62,
    reach: 1.8, warmth: 0.55, samples: 20, resScale: 0.25, sharp: 0.45,
    edgeSource: 0.75, edgeWidth: 2.2, edgeGain: 2.8,
  }),
  g('edge far', 'tries to carry ridge rays farther', {
    enable: true, source: 0.18, intensity: 0.56, density: 0.82, decay: 0.955,
    weight: 0.85, exposure: 0.45, threshold: 0.74, groundMask: 0.66,
    reach: 2.35, warmth: 0.58, samples: 24, resScale: 0.24, sharp: 0.7,
    edgeSource: 0.78, edgeWidth: 1.4, edgeGain: 3.0,
  }),
  g('edge clean', 'more resolution, low gain', {
    enable: true, source: 0.4, intensity: 0.5, density: 0.46, decay: 0.915,
    weight: 1.1, exposure: 0.48, threshold: 0.7, groundMask: 0.6,
    reach: 1.3, warmth: 0.48, samples: 28, resScale: 0.42, sharp: 0.35,
    edgeSource: 0.45, edgeWidth: 1.2, edgeGain: 2.0,
  }),
  g('blue haze', 'cooler tint, low intensity', {
    enable: true, source: 1, intensity: 0.46, density: 0.56, decay: 0.93,
    weight: 1.0, exposure: 0.5, threshold: 0.66, groundMask: 0.56,
    reach: 1.55, warmth: 0.08, samples: 18, resScale: 0.25, sharp: 0.35,
  }),
  g('warm haze', 'warmer tint, still restrained', {
    enable: true, source: 1, intensity: 0.48, density: 0.5, decay: 0.925,
    weight: 1.05, exposure: 0.52, threshold: 0.68, groundMask: 0.58,
    reach: 1.45, warmth: 0.92, samples: 18, resScale: 0.25, sharp: 0.35,
  }),
  g('low cost', 'cheap mobile-ish stack', {
    enable: true, source: 1, intensity: 0.42, density: 0.46, decay: 0.915,
    weight: 1.0, exposure: 0.48, threshold: 0.68, groundMask: 0.58,
    reach: 1.35, warmth: 0.55, samples: 10, resScale: 0.16, sharp: 0.7,
  }),
  g('hi res', 'cleaner buffer, conservative gain', {
    enable: true, source: 1, intensity: 0.42, density: 0.42, decay: 0.91,
    weight: 1.05, exposure: 0.48, threshold: 0.7, groundMask: 0.6,
    reach: 1.25, warmth: 0.52, samples: 24, resScale: 0.5, sharp: 0.2,
  }),
  g('source debug', 'view the source mask directly', {
    enable: true, source: 1, intensity: 1, density: 0.4, decay: 0.92,
    weight: 1, exposure: 1, threshold: 0.68, groundMask: 0.58,
    reach: 1.4, warmth: 0.5, samples: 16, resScale: 0.25, sharp: 0.5,
    debugView: 1, debugGain: 2,
  }),
  g('rays debug', 'view only the accumulated godRT', {
    enable: true, source: 0.35, intensity: 0.7, density: 0.66, decay: 0.94,
    weight: 1.0, exposure: 0.55, threshold: 0.68, groundMask: 0.58,
    reach: 1.8, warmth: 0.55, samples: 20, resScale: 0.24, sharp: 0.8,
    edgeSource: 0.5, edgeWidth: 1.3, edgeGain: 2.6, debugView: 3, debugGain: 2.2,
  }),
];

export const GODRAY_RECIPES = recipes.map((recipe, i) => ({
  id: i + 1,
  ...recipe,
}));
