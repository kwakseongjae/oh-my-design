/* Scene, lights and jelly materials (prototype round 4; see main.js). */
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { capGeometry, decalGeometry, legendTexture, logoTexture, blobTexture, H } from "./geo.js";

export function makeRenderer(canvas, narrow) {
  const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance", preserveDrawingBuffer: false });
  r.setPixelRatio(Math.min(window.devicePixelRatio || 1, narrow ? 2 : 1.6));
  r.outputColorSpace = THREE.SRGBColorSpace;
  r.toneMapping = THREE.NoToneMapping;
  r.toneMappingExposure = 1.0;
  r.shadowMap.enabled = true;
  r.shadowMap.type = THREE.VSMShadowMap;
  r.transmissionResolutionScale = narrow ? 0.6 : 0.8;
  return r;
}

export function makeScene(renderer) {
  const scene = new THREE.Scene();
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  pm.dispose();
  scene.environmentRotation.set(0.35, 0.6, 0);   // turn the room's light panels off-axis

  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(-4, 9, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.radius = 14; key.shadow.blurSamples = 20;
  key.shadow.bias = -0.0004;
  const sc = key.shadow.camera; sc.left = -14; sc.right = 14; sc.top = 14; sc.bottom = -14; sc.near = 1; sc.far = 30;
  scene.add(key, key.target);
  const rim = new THREE.DirectionalLight(0xfff4e8, 1.1);
  rim.position.set(6, 4, -6);
  scene.add(rim);

  /* floor = exactly the page paper, unlit, so the canvas edge disappears into the page */
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshBasicMaterial({ toneMapped: false }));
  floor.rotation.x = -Math.PI / 2;
  const shade = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: 0.16, depthWrite: false }));
  shade.rotation.x = -Math.PI / 2; shade.position.y = 0.001; shade.receiveShadow = true;
  scene.add(floor, shade);
  return { scene, key, rim, floor, shade };
}

const geoCache = new Map();
function geos(t, wide = 1) {
  const k = t.toFixed(2) + 'x' + wide;
  if (!geoCache.has(k)) {
    const skin = capGeometry(t, 1, wide > 1 ? 40 : 28, wide);
    const core = capGeometry(t, 0.64, 20, wide > 1 ? 1 + (wide - 1) / 0.64 * 0.9 : 1);
    core.translate(0, H * 0.1, 0);
    geoCache.set(k, { skin, core, decal: decalGeometry(skin, 0.7, wide) });
  }
  return geoCache.get(k);
}

/* softness from the claimed rounded token (clamped 0..24px); missing → neutral middle */
function lumOf(c) { return Math.min(1, 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b + 0.15); }
export function softness(d) { return d.rv == null ? 0.5 : Math.min(d.rv, 24) / 24; }

export function makeCap(d, look, blob, maxAniso) {
  const t = softness(d), g = geos(t, d.wide || 1);
  const col = new THREE.Color(d.hex || "#c9ccd3");
  const skinM = new THREE.MeshPhysicalMaterial({
    color: col,
    transmission: look.transmission, thickness: 0.9, ior: 1.36,
    attenuationColor: col.clone().lerp(new THREE.Color(0xffffff), 0.5), attenuationDistance: 0.45 + 0.9 * (1 - lumOf(col)),
    roughness: 0.1, metalness: 0,
    clearcoat: 0.4, clearcoatRoughness: 0.06,
    sheen: 0, sheenColor: col.clone().lerp(new THREE.Color(0xffffff), 0.6), sheenRoughness: 0.5,
    specularIntensity: 0.35, envMapIntensity: look.env
  });
  const coreM = new THREE.MeshPhysicalMaterial({
    color: col, roughness: 0.5, metalness: 0,
    emissive: col, emissiveIntensity: look.glow, envMapIntensity: 0.6
  });
  const tex = d.img ? logoTexture(d.img, lumOf(col) < 0.45, maxAniso, d.wide || 1, !d.wide) : legendTexture(d.g, d.fam, d.w || 700, d.on, maxAniso, d.wide || 1);
  const legM = new THREE.MeshPhysicalMaterial({
    map: tex, transparent: true, depthWrite: false, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.1,
    bumpMap: tex, bumpScale: 0.3, polygonOffset: true, polygonOffsetFactor: -2
  });

  const group = new THREE.Group();       // floats + tilts
  const body = new THREE.Group();        // squishes (pivot at the cap bottom)
  const skin = new THREE.Mesh(g.skin, skinM); skin.castShadow = true;
  const core = new THREE.Mesh(g.core, coreM);
  const leg = new THREE.Mesh(g.decal, legM); leg.renderOrder = 2;
  body.add(core, skin, leg);
  group.add(body);
  skin.userData.cap = group;

  /* contact shadow + a pool of tinted light (what a coloured jelly throws on a floor) */
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 1.7), new THREE.MeshBasicMaterial({ map: blob, color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false, toneMapped: false }));
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 1.9), new THREE.MeshBasicMaterial({ map: blob, color: col, transparent: true, opacity: look.pool, depthWrite: false, blending: THREE.NormalBlending, toneMapped: false }));
  sh.rotation.x = pool.rotation.x = -Math.PI / 2;
  sh.position.y = 0.002; pool.position.y = 0.003;
  sh.renderOrder = pool.renderOrder = 1;

  group.userData = { d, body, skin, skinM, coreM, legM, sh, pool, t, sq: 0, v: 0, base: new THREE.Vector3(), phase: Math.random() * Math.PI * 2, lift: 0.35, tilt: new THREE.Euler() };
  return group;
}

export function disposeCap(c) {
  const u = c.userData;
  [u.skinM, u.coreM, u.legM].forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); });
  [u.sh, u.pool].forEach((m) => { m.geometry.dispose(); m.material.dispose(); });
}

export { blobTexture };
