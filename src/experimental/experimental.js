// EXPERIMENTAL SANDBOX — fully segregated from the golden pipeline.
//
// Hard rule: nothing here mutates the ParamStore, Scene, or any golden file.
// It owns ONLY its own state + a left panel (key `E`). Effects are consumed
// elsewhere strictly behind guards that no-op while the enabling flag is off
// (default) — so all-off is byte-identical to the checkpoint. `allOff()`
// (footer "baseline") resets flags off AND nums to default → instant bail.
//
// EXPERIMENTAL=false fully unmounts the panel + keybind (kill switch).

export const EXPERIMENTAL = true;

// type 'flag' = toggle, type 'num' = slider. God-ray gets a real tuning set
// (the effect is screen-space radial scatter — see PostFX). Planet-R is a
// tunable radius, not a useless toggle (enable flag + km slider).
const PARAMS = [
  { key: 'godrays',     type: 'flag', def: false, label: 'God rays (VGR)', hint: 'screen-space radial light shafts' },
  { key: 'godIntensity', type: 'num', def: 1.0, min: 0, max: 3, step: 0.05, label: '· intensity', hint: 'overall ray strength' },
  { key: 'godSamples',   type: 'num', def: 16, min: 6, max: 40, step: 2, label: '· samples', hint: 'march taps — higher = smoother/slower' },
  { key: 'godDensity',   type: 'num', def: 0.6, min: 0.2, max: 1, step: 0.02, label: '· density', hint: 'fraction of the way to the sun marched' },
  { key: 'godDecay',     type: 'num', def: 0.93, min: 0.8, max: 1, step: 0.005, label: '· decay', hint: 'per-step falloff (lower = shorter shafts)' },
  { key: 'godWeight',    type: 'num', def: 0.6, min: 0.1, max: 2, step: 0.05, label: '· weight', hint: 'per-sample contribution' },
  { key: 'godExposure',  type: 'num', def: 0.9, min: 0.1, max: 3, step: 0.05, label: '· exposure', hint: 'final ray gain' },
  { key: 'godThreshold', type: 'num', def: 0.62, min: 0.2, max: 0.95, step: 0.01, label: '· threshold', hint: 'how bright a pixel must be to emit rays' },
  { key: 'godHorizon',   type: 'num', def: 0.5, min: 0, max: 1, step: 0.02, label: '· ground mask', hint: 'suppress ray sources below the sun (kills the water halo)' },
  { key: 'godRadius',    type: 'num', def: 1.1, min: 0.4, max: 2.5, step: 0.05, label: '· reach', hint: 'screen-space falloff radius' },
  { key: 'godTint',      type: 'num', def: 0.5, min: 0, max: 1, step: 0.02, label: '· warmth', hint: '0 = sky-colour rays · 1 = warm sun' },

  { key: 'planetR',      type: 'flag', def: false, label: 'Tiny-planet sky', hint: 'restore sunset Planet-R curvature' },
  { key: 'planetRadiusKm', type: 'num', def: 1200, min: 200, max: 6000, step: 50, label: '· radius', unit: 'km', hint: 'smaller = tighter horizon / richer sunset' },
];

export class Experimental {
  constructor() {
    this.flags = {};
    this.nums = {};
    for (const p of PARAMS) (p.type === 'flag' ? this.flags : this.nums)[p.key] = p.def;
    this._tog = new Map();
    this._sl = new Map();
    this._subs = new Set();
    this.collapsed = true;

    this.root = document.createElement('div');
    this.root.className = 'ff-panel ff-exp collapsed';
    const head = document.createElement('div');
    head.className = 'ff-panel-header';
    head.innerHTML = `<div class="ff-exp-title">experimental <span>· E</span></div>`;
    this.root.appendChild(head);

    const body = document.createElement('div');
    body.className = 'ff-panel-body ff-exp-body';
    for (const p of PARAMS) {
      const row = document.createElement('div');
      row.className = 'ff-field';
      if (p.type === 'flag') {
        row.innerHTML = `
          <div class="ff-field-label">
            <span class="ff-field-name">${p.label}</span>
            <span class="ff-field-hint">${p.hint}</span>
          </div>
          <div class="ff-field-value"><div class="ff-toggle"></div></div>`;
        const tog = row.querySelector('.ff-toggle');
        tog.addEventListener('click', () => this.set(p.key, !this.flags[p.key]));
        this._tog.set(p.key, tog);
      } else {
        row.innerHTML = `
          <div class="ff-field-label">
            <span class="ff-field-name">${p.label}</span>
            <span class="ff-field-hint">${p.hint}</span>
          </div>
          <div class="ff-field-value"></div>
          <div class="ff-field-control"><div class="ff-slider">
            <input type="range" min="${p.min}" max="${p.max}" step="${p.step}" value="${p.def}" />
          </div></div>`;
        const input = row.querySelector('input');
        const valEl = row.querySelector('.ff-field-value');
        const sl = row.querySelector('.ff-slider');
        const paint = (v) => {
          valEl.textContent = (p.step < 1 ? Number(v).toFixed(2) : String(v | 0)) + (p.unit ? ' ' + p.unit : '');
          sl.style.setProperty('--ff-pct', `${((v - p.min) / (p.max - p.min) * 100).toFixed(1)}%`);
        };
        paint(p.def);
        input.addEventListener('input', () => { this.setNum(p.key, Number(input.value)); paint(Number(input.value)); });
        this._sl.set(p.key, { input, paint });
      }
      body.appendChild(row);
    }
    const note = document.createElement('div');
    note.className = 'ff-exp-note';
    note.textContent = 'all-off = golden. nums only matter while their flag is on.';
    body.appendChild(note);
    this.root.appendChild(body);
  }

  enabled(key) { return !!this.flags[key]; }
  value(key) { return this.nums[key]; }

  // Full snapshot consumers read (Scene.setExperimental).
  state() { return { ...this.flags, ...this.nums }; }

  set(key, on) {
    if (!(key in this.flags)) return;
    this.flags[key] = !!on;
    const t = this._tog.get(key);
    if (t) t.classList.toggle('on', this.flags[key]);
    this._emit();
  }
  setNum(key, v) {
    if (!(key in this.nums)) return;
    this.nums[key] = v;
    this._emit();
  }

  allOff() {
    for (const p of PARAMS) {
      if (p.type === 'flag') { this.flags[p.key] = false; const t = this._tog.get(p.key); if (t) t.classList.remove('on'); }
      else { this.nums[p.key] = p.def; const s = this._sl.get(p.key); if (s) { s.input.value = p.def; s.paint(p.def); } }
    }
    this._emit();
  }

  onChange(fn) { this._subs.add(fn); return () => this._subs.delete(fn); }
  _emit() { const st = this.state(); for (const fn of this._subs) { try { fn(st); } catch (e) { console.error(e); } } }

  toggle() {
    this.collapsed = !this.collapsed;
    this.root.classList.toggle('collapsed', this.collapsed);
  }
}
