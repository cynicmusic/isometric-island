import * as THREE from 'three';

// WASD fly camera. Ported from aquarium-sky/src/core/Scene.js
// (_setupKeyboardCamera / _updateKeyboardCamera / _setupPointerControl) —
// the accel-ramp constants and movement maths are verbatim. The cinematic
// auto-director hand-back logic is stripped (no auto director in Phase 1).
//
//   W/S      forward / back (planar)
//   A/D      strafe left / right
//   Q/E      down / up      (also ArrowDown / ArrowUp)
//   ←/→      yaw
//   drag     look (yaw + pitch), 4px dead-zone
//   wheel    dolly along view

// Speeds scaled up ~7× from the aquarium-sky tank values — this island is
// ~1 km across, not a fish tank, so the ramp tops out fast enough to cross
// it in a few seconds.
const KEYBOARD_CAMERA = {
  accelSeconds: 1.5,
  maxFrameSeconds: 1 / 30,
  minMoveSpeed: 55,
  maxMoveSpeed: 260,
  minAltitudeSpeed: 40,
  maxAltitudeSpeed: 170,
  minYawSpeed: 0.9,
  maxYawSpeed: 2.6,
};

export class FlyCameraDirector {
  constructor(camera, domElement) {
    this.camera = camera;
    this.dom = domElement;
    this._keys = new Map();
    this._cameraEuler = new THREE.Euler(0, 0, 0, 'YXZ');
    this._setupKeyboard();
    this._setupPointer();
  }

  _ignore(e) {
    const t = e.target;
    return t && (t.tagName === 'INPUT' || t.tagName === 'SELECT' ||
      (t.closest && t.closest('#ui-root')));
  }

  _setupKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (this._ignore(e)) return;
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', 'q', 'e', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key)) {
        e.preventDefault();
        if (!this._keys.has(key)) this._keys.set(key, performance.now());
      }
    });
    window.addEventListener('keyup', (e) => {
      this._keys.delete(e.key.toLowerCase());
    });
  }

  _setupPointer() {
    let pointerDown = false;
    let dragging = false;
    let startX = 0, startY = 0, lastX = 0, lastY = 0;
    this.dom.addEventListener('pointerdown', (e) => {
      if (e.target.closest && e.target.closest('#ui-root')) return;
      pointerDown = true;
      dragging = false;
      startX = e.clientX; startY = e.clientY;
      lastX = e.clientX; lastY = e.clientY;
    });
    window.addEventListener('pointerup', () => {
      if (pointerDown || dragging) {
        pointerDown = false;
        this.dom.style.cursor = 'crosshair';
        dragging = false;
      }
    });
    window.addEventListener('pointermove', (e) => {
      if (!pointerDown && !dragging) return;
      const dx = THREE.MathUtils.clamp((e.clientX - lastX) * 0.01, -0.8, 0.8);
      const dy = THREE.MathUtils.clamp((e.clientY - lastY) * 0.01, -0.8, 0.8);
      const moved = Math.hypot(e.clientX - startX, e.clientY - startY);
      lastX = e.clientX; lastY = e.clientY;
      if (!dragging) {
        if (moved < 4) return;
        dragging = true;
        this.dom.style.cursor = 'none';
      }
      this._cameraEuler.setFromQuaternion(this.camera.quaternion);
      this._cameraEuler.y -= dx * 0.08;
      this._cameraEuler.x = Math.max(-1.25, Math.min(1.15, this._cameraEuler.x - dy * 0.08));
      this.camera.quaternion.setFromEuler(this._cameraEuler);
    });
    this.dom.addEventListener('wheel', (e) => {
      if (e.target.closest && e.target.closest('#ui-root')) return;
      e.preventDefault();
      const wheel = THREE.MathUtils.clamp(e.deltaY, -180, 180);
      const dir = new THREE.Vector3();
      this.camera.getWorldDirection(dir);
      this.camera.position.addScaledVector(dir, -wheel * 0.6);
    }, { passive: false });
  }

  update(dt) {
    if (!this._keys.size) return;
    const frameDt = Math.min(dt, KEYBOARD_CAMERA.maxFrameSeconds);
    const now = performance.now();
    let heldSeconds = 0;
    for (const startedAt of this._keys.values()) {
      heldSeconds = Math.max(heldSeconds, (now - startedAt) / 1000);
    }
    const t = THREE.MathUtils.clamp(heldSeconds / KEYBOARD_CAMERA.accelSeconds, 0, 1);
    const ramp = t * t * (3 - 2 * t);
    const moveSpeed = THREE.MathUtils.lerp(KEYBOARD_CAMERA.minMoveSpeed, KEYBOARD_CAMERA.maxMoveSpeed, ramp) * frameDt;
    const altitudeSpeed = THREE.MathUtils.lerp(KEYBOARD_CAMERA.minAltitudeSpeed, KEYBOARD_CAMERA.maxAltitudeSpeed, ramp) * frameDt;
    const yawStep = THREE.MathUtils.lerp(KEYBOARD_CAMERA.minYawSpeed, KEYBOARD_CAMERA.maxYawSpeed, ramp) * frameDt;

    const forward = new THREE.Vector3();
    this.camera.getWorldDirection(forward);
    forward.y = 0;
    if (forward.lengthSq() < 0.0001) forward.set(0, 0, -1);
    forward.normalize();
    const right = new THREE.Vector3().crossVectors(forward, this.camera.up).normalize();

    const move = new THREE.Vector3();
    if (this._keys.has('w')) move.add(forward);
    if (this._keys.has('s')) move.sub(forward);
    if (this._keys.has('d')) move.add(right);
    if (this._keys.has('a')) move.sub(right);
    if (this._keys.has('e') || this._keys.has('arrowup')) move.y += 1;
    if (this._keys.has('q') || this._keys.has('arrowdown')) move.y -= 1;

    if (move.lengthSq() > 0) {
      const horizontal = new THREE.Vector3(move.x, 0, move.z);
      if (horizontal.lengthSq() > 0) {
        horizontal.normalize().multiplyScalar(moveSpeed);
        horizontal.clampLength(0, KEYBOARD_CAMERA.maxMoveSpeed * frameDt);
      }
      const vertical = Math.sign(move.y) * altitudeSpeed;
      this.camera.position.add(new THREE.Vector3(horizontal.x, vertical, horizontal.z));
    }

    let yawDelta = 0;
    if (this._keys.has('arrowleft')) yawDelta += yawStep;
    if (this._keys.has('arrowright')) yawDelta -= yawStep;
    if (yawDelta) {
      this._cameraEuler.setFromQuaternion(this.camera.quaternion);
      this._cameraEuler.y += yawDelta;
      this.camera.quaternion.setFromEuler(this._cameraEuler);
    }
  }
}
