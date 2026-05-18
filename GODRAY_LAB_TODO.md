# God-Ray Lab Rollout Todo

Date: 2026-05-17

Discipline:
- When the user says "spin up a new lab", the lab starts as a 1:1 copy of the current sim.
- The lab must be marked as sim-derived and must not save presets back to the main preset file.
- Use the lab for destructive/experimental troubleshooting; publish main sim mutations before breaking off lab work.

## Pass 1 — Main Sim Mutations, Then Publish

- [x] Add a subtle lower-left monospace build/loading console with spinner, progress bar, stages, and wall-clock timings.
- [x] Preserve dev preset behavior through Vite middleware.
- [x] Add static/published preset persistence through localStorage, so keyboard preset saves survive on GitHub Pages.
- [x] Rename Sun glint UI label to Sun glint width.
- [ ] Build, commit, push main, and deploy GitHub Pages.

## Pass 2 — New Lab

- [ ] Remove the current bespoke god-ray lab.
- [ ] Replace `/lab/` with a sim-derived copy of the current app.
- [ ] Disable preset saving in lab so tuning cannot corrupt main sim presets.
- [ ] Keep preset loading, hotkeys, panel, camera, and render path 1:1 with the main sim.

## Pass 3 — God-Ray Search

- [ ] Use saved A-H / 1-8 presets as seeds, especially purple/night/red compositions.
- [ ] Mutate sun elevation/azimuth, camera, god-ray reach/density/decay/source/samples/resScale/sharp.
- [ ] Capture about 40 PNG candidates that visibly fan or shaft.
- [ ] Record the exact params/camera for each PNG.
- [ ] Build and publish final state.

## Notes To Discuss

- Bounce tint currently darkens/tints island fill but is not a true sky-horizon/sun-derived purple tint.
- For physically motivated purple land tint, likely route is the existing sun/sky lighting inputs, not a new color-grade feature.
- Current god rays are tunable and useful, but still screen-space and alignment-dependent; they do not force real crepuscular rays without a suitable bright source/occluder geometry.
