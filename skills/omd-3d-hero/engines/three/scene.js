// omd-3d-hero, three.js branch: spec.json -> one lit studio scene on a <canvas>.
// Pinned to three@0.186.1 (2026-09-24). Checked against that package: PCFSoftShadowMap is removed
// (WebGLShadowMap warns and falls back), so soft shadows use VSMShadowMap + shadow.radius;
// CapsuleGeometry(radius, height, capSegments, radialSegments, heightSegments) where height is the
// straight middle; NeutralToneMapping = Khronos PBR Neutral, the same view transform the Blender branch uses.
//
// The page shows the poster first. mount() adds the canvas underneath the copy and sets
// host.dataset.live only after the first frame is drawn, so the swap is poster -> identical-looking scene.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const TAU = Math.PI * 2;

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

// Shapes match the Blender branch's dimensions (three axes: x width, y height, z depth).
function geometry(o, shape) {
  const s = o.size, bev = shape.bevel;
  const box = (w, h, d, b) => new RoundedBoxGeometry(w, h, d, 6, Math.max(0.005, Math.min(b * Math.min(w, h, d), Math.min(w, h, d) / 2 - 1e-4)));
  switch (o.shape) {
    case 'sphere': case 'sphere-small': return { g: new THREE.SphereGeometry(s / 2, 64, 32), h: s };
    case 'capsule-lying': { const d = 0.62 * s; const g = new THREE.CapsuleGeometry(d / 2, 1.6 * s - d, 12, 48); g.rotateZ(Math.PI / 2); return { g, h: d }; }
    case 'capsule-standing': { const d = 0.55 * s; return { g: new THREE.CapsuleGeometry(d / 2, 1.4 * s - d, 12, 48), h: 1.4 * s }; }
    case 'box': return { g: box(s, s, s, bev), h: s };
    case 'box-tall': return { g: box(0.7 * s, 1.5 * s, 0.7 * s, bev), h: 1.5 * s };
    case 'slab': return { g: box(1.2 * s, 0.18 * s, 0.9 * s, shape.kind === 'pill' ? 0.5 : bev), h: 0.18 * s };
    default: throw new Error(`unknown shape ${o.shape}`);
  }
}

export function mount(host, spec, { pixelRatio = Math.min(devicePixelRatio || 1, 2) } = {}) {
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

  const mats = {};
  for (const [k, m] of Object.entries(spec.materials))
    mats[k] = new THREE.MeshPhysicalMaterial({ color: m.hex, roughness: m.roughness, clearcoat: m.coat ?? 0, clearcoatRoughness: 0.18 });
  scene.add(cyclorama(spec.cyclorama, mats.backdrop));

  const objs = spec.objects.map((o) => {
    const { g, h } = geometry(o, spec.shape);
    const mesh = new THREE.Mesh(g, mats[o.material]);
    mesh.castShadow = mesh.receiveShadow = true;
    scene.add(mesh);
    return { o, mesh, h };
  });

  const L = spec.lights;
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

  const C = spec.camera;
  const camera = new THREE.PerspectiveCamera(C.fovY, 16 / 9, 0.1, 100);
  const cam0 = new THREE.Vector3(...C.pos), target = new THREE.Vector3(...C.target);

  // Motion: identical functions to engines/blender/scene.py pose(t). Sin-based, so one period loops.
  const M = spec.motion;
  function pose(t) {
    for (const { o, mesh, h } of objs) {
      const ph = TAU * (t / M.period + o.phase);
      mesh.position.set(o.pos[0], h / 2 + M.bob * (0.5 + 0.5 * Math.sin(ph)), o.pos[2]);
      mesh.rotation.y = o.rotY + M.spin * Math.sin(ph);
    }
    camera.position.copy(cam0).add(new THREE.Vector3(M.sway * Math.sin((TAU * t) / M.period), 0, 0));
    camera.lookAt(target);
  }

  function resize() {
    const w = host.clientWidth, h = host.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Keep the 16:9 framing on narrower boxes: widen the vertical FOV so the cluster stays in frame.
    camera.fov = camera.aspect < 16 / 9 ? THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(C.fovY) / 2) * (16 / 9) / camera.aspect)) : C.fovY;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(host);
  resize();

  // Clock: wall time unless verify freezes it. Pause offscreen and in hidden tabs.
  let frozen = null, visible = true, last = performance.now();
  const frameTimes = [];
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(host);
  function frame(now) {
    if (!visible || document.hidden) return;
    frameTimes.push(now - last); if (frameTimes.length > 600) frameTimes.shift();
    last = now;
    pose(frozen ?? now / 1000);
    renderer.render(scene, camera);
    if (!('live' in host.dataset)) host.dataset.live = '';
  }
  renderer.setAnimationLoop(frame);

  const gl = renderer.getContext();
  const dbg = gl.getExtension('WEBGL_debug_renderer_info');
  const api = {
    renderer: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER),
    frameTimes,
    setTime(t) { frozen = t; pose(t); renderer.render(scene, camera); },
    release() { frozen = null; },
    dispose() { renderer.setAnimationLoop(null); renderer.dispose(); pmrem.dispose(); canvas.remove(); },
  };
  window.__omd3d = api;
  return api;
}
