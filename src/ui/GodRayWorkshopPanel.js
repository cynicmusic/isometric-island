const BLUR_ROWS = [
  { key: 'blurAmount', label: 'blur mix', min: 0, max: 1, step: 0.01, digits: 2 },
  { key: 'blurRadius', label: 'radius', min: 0.25, max: 8, step: 0.05, digits: 2 },
  { key: 'blurPasses', label: 'passes', min: 1, max: 4, step: 1, digits: 0 },
];

export function cloneValue(value) {
  if (value == null || typeof value !== 'object') return value;
  if (Array.isArray(value)) return value.map(cloneValue);
  const out = {};
  for (const key of Object.keys(value)) out[key] = cloneValue(value[key]);
  return out;
}

export class GodRayWorkshopPanel {
  constructor({ store, recipes, applyRecipe, title = 'GOD RAY WORKSHOP' }) {
    this.store = store;
    this.recipes = recipes;
    this.applyRecipe = applyRecipe;
    this.activeId = 1;
    this.buttons = new Map();
    this.blurControls = new Map();
    this.collapsed = false;

    this.root = document.createElement('div');
    this.root.className = 'iso-godray-workshop';
    this.root.innerHTML = `
      <div class="iso-godray-title">
        <span>${title}</span>
      </div>
      <div class="iso-godray-recipes" aria-label="god ray workshop recipes"></div>
      <div class="iso-godray-note"></div>
      <div class="iso-godray-debug" aria-label="god ray blur"></div>
    `;

    this.recipeRow = this.root.querySelector('.iso-godray-recipes');
    this.note = this.root.querySelector('.iso-godray-note');
    this.debugRoot = this.root.querySelector('.iso-godray-debug');
    this._buildRecipeButtons();
    this._buildBlurPanel();
    this.setActive(1);

    this.unsubscribe = store.subscribe((evt) => {
      if (evt.path === '*') this.refreshBlur();
      else this.blurControls.get(evt.path)?.(evt.value);
    });
  }

  _buildRecipeButtons() {
    for (const recipe of this.recipes) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'iso-godray-recipe';
      button.textContent = String(recipe.id);
      button.setAttribute('aria-label', `${recipe.id}. ${recipe.label}`);
      button.setAttribute('draggable', 'false');
      button.addEventListener('mousedown', (event) => event.preventDefault());
      button.addEventListener('click', () => {
        this._enableGodRays();
        this.applyRecipe?.(recipe);
        this._enableGodRays();
      });
      button.addEventListener('mouseenter', () => this.showNote(recipe.id));
      button.addEventListener('mouseleave', () => this.showNote());
      this.recipeRow.appendChild(button);
      this.buttons.set(recipe.id, button);
    }
  }

  _buildBlurPanel() {
    this.debugRoot.innerHTML = `
      <div class="iso-godray-debug-head">
        <span>optional blur pass</span>
        <button class="iso-godray-blur-toggle" type="button"></button>
      </div>
    `;
    this.blurToggle = this.debugRoot.querySelector('.iso-godray-blur-toggle');
    this.blurToggle.addEventListener('click', () => {
      this._enableGodRays();
      this.store.set('godrays.blurEnable', !this.store.get('godrays.blurEnable'));
      this.refreshBlur();
    });

    for (const row of BLUR_ROWS) {
      const el = document.createElement('label');
      el.className = 'iso-godray-debug-row';
      el.innerHTML = `
        <span class="iso-godray-debug-name">${row.label}</span>
        <input type="range" min="${row.min}" max="${row.max}" step="${row.step}" />
        <span class="iso-godray-debug-value"></span>
      `;
      const input = el.querySelector('input');
      const valueEl = el.querySelector('.iso-godray-debug-value');
      const path = `godrays.${row.key}`;
      const format = (value) => Number(value).toFixed(row.digits);
      const apply = (value) => {
        const fallback = row.key === 'blurAmount' ? 0.18 : row.key === 'blurRadius' ? 1.5 : 1;
        const num = row.key === 'blurPasses' ? Math.round(Number(value ?? fallback)) : Number(value ?? fallback);
        input.value = String(num);
        valueEl.textContent = format(num);
        const pct = ((num - row.min) / (row.max - row.min)) * 100;
        input.style.setProperty('--iso-pct', `${pct.toFixed(2)}%`);
      };
      input.addEventListener('input', () => {
        const value = row.key === 'blurPasses' ? Math.round(Number(input.value)) : Number(input.value);
        this._enableGodRays();
        this.store.set(path, value);
        apply(value);
      });
      input.addEventListener('pointerup', () => input.blur());
      input.addEventListener('change', () => input.blur());
      this.debugRoot.appendChild(el);
      this.blurControls.set(path, apply);
    }
    this.refreshBlur();
  }

  _enableGodRays() {
    if (!this.store.get('godrays.enable')) this.store.set('godrays.enable', true);
  }

  refreshBlur() {
    const on = !!this.store.get('godrays.blurEnable');
    this.root.classList.toggle('blur-on', on);
    this.blurToggle.textContent = on ? 'on' : 'off';
    this.blurToggle.classList.toggle('on', on);
    this.blurToggle.setAttribute('aria-pressed', String(on));
    for (const [path, apply] of this.blurControls) apply(this.store.get(path));
  }

  showNote(id = this.activeId) {
    const recipe = this.recipes.find((r) => r.id === id);
    this.note.textContent = recipe ? `${recipe.id}. ${recipe.label} · ${recipe.note}` : 'scene presets remain A-H/1-8';
  }

  setActive(id) {
    this.activeId = id;
    for (const [recipeId, button] of this.buttons) button.classList.toggle('active', recipeId === id);
    this.showNote(id);
    this.refreshBlur();
  }

  setCollapsed(collapsed) {
    this.collapsed = !!collapsed;
    this.root.classList.toggle('collapsed', this.collapsed);
  }

  toggle() {
    this.setCollapsed(!this.collapsed);
  }

  dispose() {
    this.unsubscribe?.();
  }
}
