// EXPERIMENTAL SANDBOX — fully segregated from the golden pipeline.
//
// Hard rule: nothing here mutates the ParamStore, Scene, or any golden file.
// It owns ONLY its own flag state + a left-side panel (keyboard `E`). Effects
// are *consumed* elsewhere strictly behind `experimental.enabled(<flag>)`
// guards that no-op while the flag is false (default). So with every flag off
// the render is byte-identical to the checkpoint — flip flags to opt in,
// `allOff()` (or the footer "baseline" button) to bail out instantly.
//
// EXPERIMENTAL=false fully unmounts the panel + keybind (kill switch).

export const EXPERIMENTAL = true;

// Live experiments. (Bloom, aerial haze and sun-glint graduated to the main
// "lighting" panel; only the genuinely-experimental, strip-risk effects stay
// here.) All default OFF — flipping one opts into a guarded render hook.
const FLAGS = [
  { key: 'godrays', label: 'God rays (VGR)',  hint: 'screen-space radial light shafts — best at sunset' },
  { key: 'planetR', label: 'Tiny-planet sky', hint: 'restore sunset Planet-R curvature — richer horizon' },
];

export class Experimental {
  constructor() {
    this.flags = {};
    for (const f of FLAGS) this.flags[f.key] = false;
    this._els = new Map();
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
    for (const f of FLAGS) {
      const row = document.createElement('div');
      row.className = 'ff-field';
      row.innerHTML = `
        <div class="ff-field-label">
          <span class="ff-field-name">${f.label}</span>
          <span class="ff-field-hint">${f.hint}</span>
        </div>
        <div class="ff-field-value"><div class="ff-toggle"></div></div>`;
      const tog = row.querySelector('.ff-toggle');
      tog.addEventListener('click', () => this.set(f.key, !this.flags[f.key]));
      this._els.set(f.key, tog);
      body.appendChild(row);
    }
    const note = document.createElement('div');
    note.className = 'ff-exp-note';
    note.textContent = 'WIP — effects wire in per-feature behind flags; off = golden.';
    body.appendChild(note);
    this.root.appendChild(body);
  }

  enabled(key) { return !!this.flags[key]; }

  set(key, on) {
    if (!(key in this.flags)) return;
    this.flags[key] = !!on;
    const el = this._els.get(key);
    if (el) el.classList.toggle('on', this.flags[key]);
    for (const fn of this._subs) { try { fn(key, this.flags[key]); } catch (e) { console.error(e); } }
  }

  allOff() { for (const f of FLAGS) this.set(f.key, false); }

  // Scene/effects subscribe to react when a flag flips (no polling).
  onChange(fn) { this._subs.add(fn); return () => this._subs.delete(fn); }

  toggle() {
    this.collapsed = !this.collapsed;
    this.root.classList.toggle('collapsed', this.collapsed);
  }
}
