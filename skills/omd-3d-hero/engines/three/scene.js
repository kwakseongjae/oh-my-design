// omd-3d-hero, three.js branch: spec.json -> a lit studio with a floating pile of brand objects on a <canvas>.
// Pinned to three@0.186.1 (2026-09-24). Checked against that package: PCFSoftShadowMap is removed
// (WebGLShadowMap warns and falls back), so soft shadows use VSMShadowMap + shadow.radius;
// CapsuleGeometry(radius, height, capSegments, radialSegments, heightSegments) where height is the
// straight middle; NeutralToneMapping = Khronos PBR Neutral, the same view transform the Blender branch uses.
// With the composer on, tone mapping happens in OutputPass (a render target never gets it) and antialiasing
// comes from the composer's multisampled target, not from the canvas.
//
// The page shows the poster first. mount() adds the canvas underneath the copy and sets host.dataset.live
// only after the first frame is drawn. The first frame is the settled pose the poster was baked from, so the
// swap is invisible; motion starts from there. Needs ./pile.js next to this file.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Pile, STEP, collider } from './pile.js';

// Same profile as engines/blender/scene.py: floor -> quarter-circle cove -> wall. (y_up, z_depth) pairs.
function cycloramaProfile(cy) {
  const p = [];
  for (let i = 0; i <= 12; i++) p.push([0, cy.floorFront - ((cy.floorFront - cy.coveZ) * i) / 12]);
  const r = cy.coveRadius;
  for (let i = 1; i <= 16; i++) { const a = (Math.PI / 2) * (i / 16); p.push([r - r * Math.cos(a), cy.coveZ - r * Math.sin(a)]); }
  for (let i = 1; i <= 8; i++) p.push([r + ((cy.wallTop - r) * i) / 8, cy.coveZ - r]);
  return p;
}

function cyclorama(cy, material) {
  const prof = cycloramaProfile(cy), W = cy.width / 2, pos = [], idx = [];
  for (const [y, z] of prof) pos.push(-W, y, z, W, y, z);
  for (let i = 0; i < prof.length - 1; i++) { const a = 2 * i; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); } // faces point up/forward
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, material);
  m.receiveShadow = true;
  return m;
}

// Visual shapes. The collision capsules in pile.js use the same proportions (all in units of size s).
function geometry(shape, s, bevel) {
  const box = (w, h, d) => new RoundedBoxGeometry(w, h, d, 6, Math.max(0.005, Math.min(bevel * Math.min(w, h, d), Math.min(w, h, d) / 2 - 1e-4)));
  switch (shape) {
    case 'sphere': return new THREE.SphereGeometry(s / 2, 48, 32);
    case 'capsule': return new THREE.CapsuleGeometry(0.31 * s, 0.98 * s, 12, 40);
    case 'box': return box(s, s, s);
    case 'box-tall': return box(0.7 * s, 1.5 * s, 0.7 * s);
    default: throw new Error(`unknown shape ${shape}`);
  }
}

// `env` (dark scheme): this material takes the environment at its own strength instead of the scene's fill.
// Glass: on a dark set it transmits the dark wall and reads only by what it reflects. Backdrop: the set keeps
// the light-scheme fill so it renders close to its token while the objects get the stronger one.
function material(m, envTex) {
  const env = m.env != null && envTex ? { envMap: envTex, envMapIntensity: m.env } : {};
  if (m.kind === 'glass') {
    return new THREE.MeshPhysicalMaterial({
      color: 0xffffff, roughness: m.roughness, metalness: 0, transmission: 1, ior: m.ior, thickness: m.thickness,
      attenuationColor: new THREE.Color(m.hex), attenuationDistance: m.attenuation, specularIntensity: 1, ...env,
    });
  }
  return new THREE.MeshPhysicalMaterial({ color: m.hex, roughness: m.roughness, clearcoat: m.coat ?? 0, clearcoatRoughness: 0.18, ...env });
}

const easeOut = (x) => 1 - (1 - x) ** 3;
// Damped spring 0 -> 1 with one soft overshoot: the "pop" a swapped object lands with.
const pop = (x) => 1 - Math.exp(-6 * x) * Math.cos(9 * x);

export function mount(host, spec, { pixelRatio = Math.min(devicePixelRatio || 1, 2), onFallback } = {}) {
  // preserveDrawingBuffer lets verify.mjs --bake read the frame back as the poster; cost is negligible for one canvas.
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  host.insertBefore(canvas, host.firstChild);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true });
  renderer.setPixelRatio(pixelRatio);
  renderer.toneMapping = spec.toneMapping === 'neutral' ? THREE.NeutralToneMapping : THREE.AgXToneMapping;
  renderer.toneMappingExposure = spec.exposure ?? 1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(spec.materials.backdrop.hex);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = spec.lights.world;

  let S = spec, mats = {}, geoms = new Map();
  const makeMats = (sp) => Object.fromEntries(Object.entries(sp.materials).map(([k, m]) => [k, material(m, scene.environment)]));
  const geom = (shape, size, bevel) => {
    const k = `${shape}:${size}:${bevel}`;
    if (!geoms.has(k)) geoms.set(k, geometry(shape, size, bevel));
    return geoms.get(k);
  };
  mats = makeMats(S);
  // The backdrop material lives for the whole mount (setSpec eases its color and fill), so its environment is
  // always explicit: the spec's backdrop.env, else the scene's fill.
  const backdrop = mats.backdrop;
  backdrop.envMap = scene.environment;
  backdrop.envMapIntensity = S.materials.backdrop.env ?? S.lights.world;
  scene.add(cyclorama(S.cyclorama, backdrop));

  const pile = new Pile(S.pile);
  const meshes = pile.bodies.map((b) => {
    const mesh = new THREE.Mesh(geom(b.shape, b.size, S.shape.bevel), mats[b.material]);
    mesh.castShadow = mesh.receiveShadow = true;
    scene.add(mesh);
    return mesh;
  });

  const L = S.lights;
  const key = new THREE.DirectionalLight(0xffffff, 2.4 * L.key.energy);
  key.position.set(...L.key.pos);
  key.target.position.set(...L.key.target);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: 0.5, far: 30 });
  key.shadow.radius = 14;           // VSM blur: the soft "area light" edge
  key.shadow.blurSamples = 24;
  key.shadow.bias = -0.0004;
  const rim = new THREE.DirectionalLight(0xffffff, 2.4 * L.rim.energy);
  rim.position.set(...L.rim.pos);
  rim.target.position.set(...L.rim.target);
  scene.add(key, key.target, rim, rim.target);

  const C = S.camera;
  const camera = new THREE.PerspectiveCamera(C.fovY, 16 / 9, 0.1, 100);
  const cam0 = new THREE.Vector3(...C.pos), target = new THREE.Vector3(...C.target);
  const look = new THREE.Vector2(); // camera parallax toward the pointer, eased; moves only while the simulation runs

  // Ambient occlusion where objects nearly touch is most of what reads as "rendered". The composer path:
  // multisampled half-float target -> RenderPass -> GTAOPass -> OutputPass (tone mapping + sRGB).
  let ao = S.quality?.ao !== false, composer = null, gtao = null;
  function buildComposer() {
    const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
    composer = new EffectComposer(renderer, rt);
    composer.addPass(new RenderPass(scene, camera));
    gtao = new GTAOPass(scene, camera, 1, 1);
    gtao.updateGtaoMaterial({ radius: 0.5, distanceExponent: 1.5, thickness: 1.2, scale: 1.1, samples: 16, screenSpaceRadius: false });
    gtao.blendIntensity = 0.9;
    composer.addPass(gtao);
    composer.addPass(new OutputPass());
  }
  if (ao) buildComposer();

  function pose() {
    pile.bodies.forEach((b, i) => {
      meshes[i].position.set(...b.p);
      meshes[i].quaternion.set(...b.q);
      meshes[i].scale.setScalar(Math.max(0.001, b.scale));
    });
    camera.position.set(cam0.x + look.x * 0.22, cam0.y + look.y * 0.12, cam0.z);
    camera.lookAt(target);
  }
  function draw() { if (composer) composer.render(); else renderer.render(scene, camera); }

  function resize() {
    const w = host.clientWidth, h = host.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Keep the 16:9 framing on narrower boxes: widen the vertical FOV so the horizontal view (and the copy guard,
    // which is defined by it) stays the same.
    camera.fov = camera.aspect < 16 / 9 ? THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(C.fovY) / 2) * (16 / 9) / camera.aspect)) : C.fovY;
    camera.updateProjectionMatrix();
    if (composer) { composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(w, h); }
  }
  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();

  // ---------- pointer: a sphere that pushes, a click that scatters ----------
  // Raycast onto the vertical plane through the pile's center. Pointer state only feeds the simulation step,
  // so a paused scene ignores it entirely.
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), hit = new THREE.Vector3();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -S.pile.center[2]);
  let pointer = null, pointerNdc = new THREE.Vector2(), lastHit = null, lastHitT = 0, pendingBurst = null;
  function toWorld(e) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    return ray.ray.intersectPlane(plane, hit) ? hit.clone() : null;
  }
  // The pointer is a capsule along the view ray, between the depths 1.6 in front of and behind the pile center.
  const zNear = S.pile.center[2] + 1.6, zFar = S.pile.center[2] - 1.6;
  function onMove(e) {
    if (e.pointerType === 'touch') return;
    const p = toWorld(e);
    pointerNdc.copy(ndc);
    if (!p) { pointer = null; return; }
    const o = ray.ray.origin, d = ray.ray.direction, at = (z) => [o.x + d.x * ((z - o.z) / d.z), o.y + d.y * ((z - o.z) / d.z), z];
    const a = at(zNear), b = at(zFar);
    const now = liveT, dt = Math.max(1 / 120, now - lastHitT); // simulated clock: same in live and frame capture
    const v = lastHit ? [(p.x - lastHit.x) / dt, (p.y - lastHit.y) / dt, 0] : [0, 0, 0];
    pointer = { a, d: [b[0] - a[0], b[1] - a[1], b[2] - a[2]], v: v.map((x) => Math.max(-12, Math.min(12, x))), r: S.pile.pointer?.r ?? 0.6 };
    lastHit = p; lastHitT = now;
  }
  function onLeave() { pointer = null; lastHit = null; pointerNdc.set(0, 0); }
  function onDown(e) {
    if (e.button !== 0 || e.target.closest('a, button, input, textarea, select, [contenteditable]')) return;
    const p = toWorld(e);
    if (p && p.distanceTo(new THREE.Vector3(...S.pile.center)) < 2.6) pendingBurst = [p.x, p.y, p.z];
  }
  host.addEventListener('pointermove', onMove);
  host.addEventListener('pointerleave', onLeave);
  host.addEventListener('pointerdown', onDown);

  // ---------- failure -> poster ----------
  // Any failure returns the page to the poster: the canvas fades out (data-live removed) and the GPU
  // resources go. Reasons are written to host.dataset.fallback so verify.mjs can assert them.
  let stopped = false;
  function teardown() {
    ro.disconnect(); io.disconnect();
    host.removeEventListener('pointermove', onMove); host.removeEventListener('pointerleave', onLeave); host.removeEventListener('pointerdown', onDown);
  }
  function release() {
    composer?.dispose(); gtao?.dispose?.(); renderer.dispose(); pmrem.dispose();
    for (const g of geoms.values()) g.dispose();
    for (const m of Object.values(mats)) m.dispose();
    canvas.remove();
  }
  function fallback(reason) {
    if (stopped) return;
    stopped = true;
    renderer.setAnimationLoop(null);
    delete host.dataset.live;
    host.dataset.fallback = reason;
    onFallback?.(reason);
    teardown();
    setTimeout(release, 700);
  }
  // A shader that fails to compile still "renders" (nothing). Catch it and keep the poster.
  let shaderError = false;
  renderer.debug.onShaderError = () => { shaderError = true; };
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); fallback('context-lost'); });

  // ---------- brand switch ----------
  // setSpec(next): each object shrinks, takes the next brand's shape and material, and pops back with a
  // spring, staggered by 22 ms; the backdrop color and the light levels (key, rim, environment, exposure: a
  // light/dark switch changes them) ease over 600 ms. Collision radii scale with the objects,
  // so the pile contracts and re-forms on its own. The pile's bodies keep their positions: the scene changes
  // brand without cutting. The page updates its own CSS variables and copy (see examples/hero.html).
  let swap = null;
  const levels = (sp) => [2.4 * sp.lights.key.energy, 2.4 * sp.lights.rim.energy, sp.lights.world, sp.exposure ?? 1, sp.materials.backdrop.env ?? sp.lights.world];
  function setSpec(next) {
    if (next.pile.bodies.length !== pile.bodies.length) throw new Error('setSpec: the next spec has a different body count');
    if (swap) { swap.t = 1e9; stepSwap(0); } // a switch during a switch: land the first one at once
    const nextMats = makeMats(next);
    swap = { t: 0, from: new THREE.Color(S.materials.backdrop.hex), to: new THREE.Color(next.materials.backdrop.hex), lv: [levels(S), levels(next)], next, nextMats, oldMats: mats, done: new Set() };
  }
  function stepSwap(h) {
    if (!swap) return;
    swap.t += h;
    const k = easeOut(Math.min(1, swap.t / 0.6));
    scene.background.copy(swap.from).lerp(swap.to, k);
    backdrop.color.copy(swap.from).lerp(swap.to, k);
    [key.intensity, rim.intensity, scene.environmentIntensity, renderer.toneMappingExposure, backdrop.envMapIntensity] = swap.lv[0].map((a, j) => a + (swap.lv[1][j] - a) * k);
    pile.bodies.forEach((b, i) => {
      const t = swap.t - i * 0.022;
      if (t <= 0) return;
      if (t < 0.14) { b.scale = 1 - easeOut(t / 0.14); return; }
      if (!swap.done.has(i)) {
        swap.done.add(i);
        const nb = swap.next.pile.bodies[i];
        Object.assign(b, { shape: nb.shape, size: nb.size, material: nb.material });
        const c = collider(nb.shape, nb.size); b.r = c.r; b.half = c.half;
        meshes[i].geometry = geom(nb.shape, nb.size, swap.next.shape.bevel);
        meshes[i].material = swap.nextMats[nb.material];
      }
      b.scale = Math.max(0, pop(Math.min(1, (t - 0.14) / 0.5)));
    });
    if (swap.t > 0.14 + 0.5 + pile.bodies.length * 0.022) {
      pile.bodies.forEach((b) => { b.scale = 1; });
      for (const [k, m] of Object.entries(swap.oldMats)) if (k !== 'backdrop') m.dispose();
      mats = { ...swap.nextMats, backdrop };
      swap.nextMats.backdrop.dispose();
      S = { ...swap.next, pile: { ...swap.next.pile, center: S.pile.center } };
      pile.cfg = { ...pile.cfg, bodies: swap.next.pile.bodies };
      swap = null;
    }
  }

  // ---------- loop ----------
  // Clock: simulated time in fixed 120 Hz steps. verify freezes it with setTime(t), which re-runs the
  // simulation from the settled pose for t seconds with no pointer: deterministic, so every check repeats.
  // Pause stops the steps (and with them every motion, pointer response included); offscreen and hidden tabs too.
  // Frame budget (pattern from taste-skill, MIT): skip 40 warm-up frames, average 60. Over 20 ms (< 50 fps):
  // first drop the AO pass, then lower the pixel ratio by 0.75x down to 1; at 1 and still over 33.3 ms (< 30 fps)
  // go back to the poster.
  let frozen = null, visible = true, paused = false, last = performance.now(), pr = pixelRatio, skip = 40, acc = 0, woke = false, liveT = 0;
  const frameTimes = [], window60 = [];
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
  io.observe(host);
  function simulate(seconds) {
    acc += seconds;
    for (let n = 0; acc >= STEP && n < 8; n++, acc -= STEP) {
      if (pendingBurst) { pile.burst(pendingBurst, 4.5, 3); pendingBurst = null; }
      liveT += STEP;
      // One soft breath shortly after going live, so the pile reads as alive before anyone touches it.
      if (!woke && liveT > 0.7) { woke = true; pile.burst(S.pile.center, 1.6, 3.2); }
      const target = pointer ? pointerNdc : new THREE.Vector2();
      look.lerp(target, 1 - Math.exp(-3 * STEP));
      stepSwap(STEP);
      pile.step(STEP, pointer);
    }
    if (acc > STEP * 8) acc = 0; // a long stall: drop the backlog instead of fast-forwarding
  }
  function frame(now) {
    const dt = now - last;
    last = now;
    if (!visible || document.hidden || paused) return;
    frameTimes.push(dt); if (frameTimes.length > 600) frameTimes.shift();
    if (frozen == null && dt < 250) {               // a long gap is a tab switch, not a slow frame
      if (skip > 0) skip--;
      else if (window60.push(dt) >= 60) {
        const avg = window60.reduce((a, b) => a + b, 0) / window60.length;
        window60.length = 0;
        if (avg > 20 && composer) { composer.dispose(); gtao.dispose?.(); composer = gtao = null; ao = false; skip = 20; }
        else if (avg > 20 && pr > 1) { pr = Math.max(1, pr * 0.75); renderer.setPixelRatio(pr); resize(); skip = 20; }
        else if (avg > 33.3) return fallback('frame-budget');
      }
    }
    if (frozen == null) simulate(Math.min(dt, 100) / 1000);
    pose();
    draw();
    if (shaderError) return fallback('shader-error');
    if (!('live' in host.dataset)) host.dataset.live = '';
  }
  pose();
  renderer.setAnimationLoop(frame);

  const gl = renderer.getContext();
  const dbg = gl.getExtension('WEBGL_debug_renderer_info');
  const v = new THREE.Vector3();
  const api = {
    renderer: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER),
    frameTimes,
    get pixelRatio() { return pr; },
    get ao() { return !!composer; },
    setTime(t) { frozen = t; pile.reset(); look.set(0, 0); pile.advance(t); pose(); draw(); },
    release() { frozen = null; last = performance.now(); },
    pause() { paused = true; },
    resume() { paused = false; last = performance.now(); },
    get paused() { return paused; },
    setSpec,
    // Frame capture (examples, videos): with the clock frozen by setTime, advance the simulation by exact steps.
    advance(seconds) { simulate(seconds); pose(); draw(); },
    // Leftmost screen x (CSS px) any object reaches (each capsule end pushed left by its radius): verify
    // compares it with the right edge of the headline's line boxes.
    leftmost() {
      const w = host.clientWidth;
      camera.updateMatrixWorld();
      const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
      let min = Infinity;
      for (const b of pile.bodies) {
        for (const s of [-1, 1]) {
          v.set(...b.p).addScaledVector(new THREE.Vector3(...b.ax), s * b.half * b.scale).addScaledVector(right, -b.r * b.scale * 1.04).project(camera);
          min = Math.min(min, ((v.x + 1) / 2) * w);
        }
      }
      return min;
    },
    dispose() { stopped = true; teardown(); renderer.setAnimationLoop(null); release(); },
  };
  window.__omd3d = api;
  return api;
}
