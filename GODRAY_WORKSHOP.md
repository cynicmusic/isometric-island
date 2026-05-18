# God Ray Workshop

Status: research + lab direction, not a final-look pass.

## What the current shader is doing

The current god-ray pass is a low-resolution screen-space integral. For every
pixel in `godRT`, the shader walks a 2D line toward the projected sun and adds
samples from the scene/depth source:

```text
for each low-res pixel:
  uv = pixel
  delta = (sun_uv - uv) / samples * density
  for i in samples:
    uv += delta
    source = scene/depth-derived brightness at uv
    acc += source * weight * decay^i
```

That loop is the cheap numerical integral. It is not tracing world-space light;
it is transporting image-space evidence along a radial line. That is why
`godray-23-A5` is important: the visible "ray" is really the mountain
silhouette being advected across the screen. The useful signal is the
occluder/sky boundary field, not the soft wash around it.

Cost model:

- `godRT pixels * samples * texture reads`
- `resScale` changes pixel count quadratically.
- `samples` changes cost linearly.
- More source logic inside the loop multiplies by the same cost, so the source
  signal must stay cheap.

## Hillaire translation

Hillaire's atmosphere equation says the pixel color is:

```text
surface arriving through air
+ sum/integral of light scattered into the eye along the view ray
```

The scary integral sign is just the continuous version of our shader loop. A
shader loop is a rectangle-rule approximation: take samples, add them, multiply
by scale. The expensive part is nesting:

```text
for each screen pixel
  for each point along the camera ray
    for each light
      estimate transmittance to the light
      estimate shadowing/visibility
      phase-function weight
      add in-scattered light
```

Hillaire makes that usable by pushing stable pieces into LUTs. That paper is
great for sky and aerial perspective; it does not directly solve mountain god
rays because the missing term for us is shadow/occluder visibility in the
medium.

## Canonical prior art that matters here

- GPU Gems 3, ch. 13: post-process radial light scattering. This is the family
  we are already in: sum samples toward the screen-space light, with exposure,
  weight, decay, density, and optional low-res source.
  https://developer.nvidia.com/gpugems/gpugems3/part-ii-light-and-shadows/chapter-13-volumetric-light-scattering-post-process
- Three.js `GodRaysShader`: CryEngine/Sousa-style depth-mask radial blur, done
  as multiple low-res radial passes. Useful reference, but it is blur-first,
  which is exactly what we should not blindly copy.
  https://threejs.org/docs/pages/module-GodRaysShader.html
- Engelhardt/Dachsbacher 2010 epipolar sampling: the key idea is that light
  varies quickly across rays but smoothly along rays. That suggests ray-aligned
  coordinates and sparse samples instead of ordinary screen pixels.
  https://publikationen.bibliothek.kit.edu/1000026862
- Chen/Baran/Durand/Jarosz 2011 min-max mipmaps: a more physical real-time
  route using shadow-map visibility along epipolar slices. Strong reference,
  but a bigger jump than we need for the next lab pass.
- https://la.disneyresearch.com/publication/real-time-volumetric-shadows-using-1d-min-max-mipmaps/

## Candidate fixtures

Use these as stable test cases:

- `godray-23-A5`: best silhouette-transport case. Goal: keep the mountain-edge
  transport, but stop the whole mountain mass from becoming a blocky stamp.
- `godray-20-A2`: strong screen-space fan, too blocky/echo-heavy.
- `godray-27-B1`: almost natural haze/ridge shafts, low contrast.
- `godray-32-C1`: moon/night style; useful because artifacts are easier to see.

## Workshop directions

### 1. Edge-source radial transport

Instead of marching raw scene color or broad sky brightness, derive a cheap
sky/occluder edge field from depth:

```text
sky = depth_is_far
edge = sky * max(abs(sky - sky_left), abs(sky - sky_right),
                 abs(sky - sky_up), abs(sky - sky_down))
source = mix(current_source, edge, edge_source)
```

This keeps the "mountain smear" idea, but only the ridge/gap boundary is allowed
to generate rays. It should produce sharper separated shafts without a blur pass.

Knobs:

- `edgeSource`: old source to ridge-edge source.
- `edgeWidth`: neighbor distance in godRT texels.
- `edgeGain`: how hard the edge births light.

### 2. Ray-coordinate / epipolar field

Render a debug target where x = angle/bin around the sun and y = distance from
the sun. Integrate along y, then map back to screen. This is the creative math
version of epipolar sampling: treat rays as rows, not as arbitrary pixels.

Why this helps: we can smooth or quantize along the ray direction without
blurring across adjacent rays. That means long shafts can be coherent while
their hard boundaries remain readable.

Knobs:

- `rayBins`: angular resolution.
- `radialSteps`: distance samples.
- `alongRayCoherence`: smoothing only along the ray coordinate.
- `crossRaySharpness`: keeps neighboring shafts distinct.

### 3. Screen-space vector strokes

Reduce the edge field to sparse streak emitters. Each bright edge cell emits a
short tapered line segment away from/toward the sun in screen space. This is a
fake, but it is honest and tunable: vector-like shafts, no blur, no world-space
volume.

Knobs:

- `strokeCount` or density threshold.
- `strokeLength`.
- `strokeTaper`.
- `strokeJitter`.
- `strokeWarmth`.

### Removed: 2.5D whisp ribbons

Do not inject transparent quads into this sim for god rays. It is a useful
mental model for other effects, like smoke off a mountain, but it is the wrong
tool for this workshop. Stay in shader/postprocess space unless we deliberately
start a different sim.

## Recommended next build

Implement step 1 first, lab-visible:

1. Add an edge field inside the existing god-ray march, default off. Done.
2. Add lab/schema knobs `Edge source`, `Edge width`, and `Edge gain`. Done.
3. Add a debug source-view mode: final / source / edge / rays. Done.
4. Re-run the four fixtures and regenerate a contact sheet.

Success criteria:

- `godray-23-A5` keeps the rightward mountain-derived energy, but becomes ridge
  shafts instead of a filled mountain stamp.
- `godray-20-A2` fans farther without requiring blur.
- `G` still toggles only the god-ray contribution.
- No global tone or contrast mutation when intensity is zero.

## Workshop finding: horizon slab

The first edge-source pass could lock onto the flat sea/sky horizon. When that
long horizontal edge was marched toward an offscreen or clamped sun, it produced
a screen-wide rectangular band. That artifact is not useful ray texture; it is a
bad source signal.

Current guard:

- edge emission now requires sky adjacent to closer foreground geometry, not
  just any sky/non-sky depth transition.
- laterally continuous edges are attenuated, so a long flat horizon line is
  rejected while jagged mountain silhouettes can still survive.
- edge math is skipped when `Edge source` is zero and the edge debug view is not
  active.

This makes `Edge source = 1` quieter, but it removes the poisonous horizon slab.
The next tuning pass should recover strength from real silhouettes rather than
letting the sea horizon emit.
