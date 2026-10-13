/* Hero jelly keycaps (three.js 0.186.1). Ported verbatim from the concept-A prototype
   (docs/research/2026-10-13-rebrand/a-landing/_work/keys3d, rounds 4 + colour fixes); only the
   canvas class and a destroy() for React unmount were added. Loaded with import() after idle. */
import * as THREE from "three";
import { makeRenderer, makeScene, makeCap, disposeCap, blobTexture } from "./scene.js";
import { H } from "./geo.js";


function lookFor(dark) {
  return dark ? { transmission: 0.7, env: 1.3, glow: 0.45, pool: 0.24, shadow: 0.5, blob: 0.55 }
    : { transmission: 0.9, env: 0.8, glow: 0.3, pool: 0.22, shadow: 0.16, blob: 0.28 };
}

export function mount(host, o) {
  const canvas = document.createElement("canvas");
  canvas.className = "sq-k3-canvas";
  host.appendChild(canvas);
  let narrow = o.narrow, dark = o.dark, look = lookFor(dark);
  const renderer = makeRenderer(canvas, narrow);
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const { scene, key, rim, floor, shade } = makeScene(renderer);
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 200);
  const blob = blobTexture();
  let calibrating = false, capPxV = 90, caps = [], hover = null, sel = null, W = 1, Hh = 1, raf = 0, visible = true, last = 0, clock = 0, nextRipple = 2.5;
  const WHITE = new THREE.Color(0xffffff), ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), tmp = new THREE.Vector3();

  function setTheme(paper, isDark) {
    dark = isDark; look = lookFor(dark);
    const c = new THREE.Color(paper);
    renderer.setClearColor(c, 1); floor.material.color.copy(c);
    shade.material.opacity = look.shadow;
    key.intensity = dark ? 2.6 : 2.2; rim.intensity = dark ? 1.8 : 1.1;
    caps.forEach((g) => {
      const u = g.userData;
      u.skinM.transmission = look.transmission; u.skinM.envMapIntensity = look.env;
      u.coreM.emissiveIntensity = look.glow; u.pool.material.opacity = look.pool;
    });
    caps.forEach((g) => { g.userData.cb = null; });
    if (W > 1) calibrate();
    kick();
  }

  /* real keyboard rows: consistent pitch, QWERTY-like row stagger, a wide key closing the last row (world units) */
  const PITCH = 1.24, WIDE = 2.2;
  function slots(n, isNarrow, WIDE) {
    const rows = isNarrow ? [3, 3, 1] : [5, 5, 4, 2], stag = isNarrow ? [0, 0.3, 0.6] : [0, 0.3, 0.55, 0.8], out = [];
    let k = 0;
    rows.forEach((cnt, r) => {
      let i = 0;
      for (; i < cnt && k < n; i++, k++) out.push({ x: (stag[r] + i) * PITCH, z: r * PITCH, hw: 0.5 });
      if (r === rows.length - 1) out.push({ x: (stag[r] + i - 1) * PITCH + 0.5 + (PITCH - 1) + WIDE / 2, z: r * PITCH, hw: WIDE / 2 });
    });
    return out;
  }
  function layout() {
    const r = host.getBoundingClientRect();
    W = Math.max(1, r.width); Hh = Math.max(1, r.height);
    renderer.setSize(W, Hh, false);
    const z = o.zone(), zw = z.x1 - z.x0, zh = z.y1 - z.y0;
    const last = caps[caps.length - 1], sl = slots(caps.length - 1, narrow, (last && last.userData.d.wide) || 2.2);
    let minx = 1e9, maxx = -1e9, maxz = 0;
    sl.forEach((s) => { minx = Math.min(minx, s.x - s.hw); maxx = Math.max(maxx, s.x + s.hw); maxz = Math.max(maxz, s.z); });
    const spanX = maxx - minx + (narrow ? 1.0 : 0.4), spanZ = maxz + (narrow ? 1.9 : 1.5);
    const capPx = THREE.MathUtils.clamp(Math.min(zw / spanX, zh / spanZ), narrow ? 50 : 60, narrow ? 92 : 112);
    capPxV = capPx;
    const cx = (z.x0 + z.x1) / 2, cy = (z.y0 + z.y1) / 2;
    const VW = 2 * Math.max(cx, W - cx), VH = 2 * Math.max(cy, Hh - cy);
    camera.aspect = VW / VH;
    camera.setViewOffset(VW, VH, VW / 2 - cx, VH / 2 - cy, W, Hh);
    const L = VH / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * capPx);
    const el = THREE.MathUtils.degToRad(narrow ? 76 : 74);   // 14-16 deg off top-down
    camera.position.set(0, Math.sin(el) * L, Math.cos(el) * L);
    camera.lookAt(0, 0.3, 0);
    camera.updateProjectionMatrix(); camera.updateMatrixWorld();
    const ox = (minx + maxx) / 2, oz = maxz / 2;
    caps.forEach((g, i) => { const s = sl[i]; g.userData.base.set(s.x - ox, 0, s.z - oz); });
    calibrate();
  }

  function setCaps(list, isNarrow) {
    caps.forEach((g) => { scene.remove(g, g.userData.sh, g.userData.pool); disposeCap(g); });
    narrow = isNarrow;
    const all = list.concat(o.more ? [o.more(list.length)] : []);
    caps = all.map((d) => {
      const g = makeCap(d, look, blob, maxAniso), u = g.userData;
      u.lift = 0.26;
      const h = (d.id || '').split('').reduce((a, ch) => (a * 31 + ch.charCodeAt(0)) >>> 0, 7);
      u.tilt.set(((h % 7) - 3) * 0.008, (((h >> 3) % 9) - 4) * 0.013, (((h >> 6) % 7) - 3) * 0.008);   // tiny per-cap set, varies the highlight
      scene.add(g, u.sh, u.pool);
      return g;
    });
    hover = sel = null;
    layout();
  }

  function pose(time) {
    const still = o.reduce();
    caps.forEach((g) => {
      const u = g.userData, b = still || calibrating ? 0 : Math.sin(time * 1.1 + u.phase);
      const act = g === hover || g === sel ? 1 : 0;
      u.up = (u.up || 0) + (act * 0.12 - (u.up || 0)) * (still ? 1 : 0.15);
      const y = u.lift + 0.035 * b + u.up;                   // small individual float, no cluster sway
      g.position.set(u.base.x, y, u.base.z);
      g.rotation.copy(u.tilt);
      const sy = 1 - u.sq, sxz = 1 / Math.sqrt(Math.max(0.3, sy));
      u.body.scale.set(sxz, sy, sxz);
      const wide = u.d.wide || 1, s = 1 + y * 0.6, f = s * (0.85 + 0.1 * sxz);
      u.sh.position.set(u.base.x + 0.06, 0.002, u.base.z + 0.08); u.sh.scale.set(f * (wide > 1 ? wide * 0.92 : 1), f, 1);
      u.sh.material.opacity = look.blob * (1.25 - y * 0.8);
      u.pool.position.set(u.base.x + 0.18, 0.003, u.base.z + 0.3); u.pool.scale.set(s * (wide > 1 ? wide * 0.9 : 1), s, 1);
    });
  }

  function step(dt) {
    let moving = false;
    const still = o.reduce();
    caps.forEach((g) => {
      const u = g.userData, target = g === hover || g === sel ? 0.24 : 0;
      if (still) { u.sq = target; u.v = 0; return; }
      const a = 170 * (target - u.sq) - 11 * u.v;
      u.v += a * dt; u.sq += u.v * dt;
      if (Math.abs(u.v) > 1e-3 || Math.abs(target - u.sq) > 1e-3) moving = true;
    });
    return moving;
  }

  function ripple() {
    if (!caps.length) return;
    const c0 = caps[Math.floor(Math.random() * caps.length)];
    const near = caps.slice().sort((a, b) => a.userData.base.distanceTo(c0.userData.base) - b.userData.base.distanceTo(c0.userData.base)).slice(0, 4);
    near.forEach((g, i) => setTimeout(() => { if (g !== hover && g !== sel) g.userData.v += 3.4 - i * 0.6; }, i * 110));
  }

  function frame(now) {
    raf = 0;
    const dt = Math.min(0.05, last ? (now - last) / 1000 : 0.016); last = now;
    const still = o.reduce();
    if (!still) clock += dt;
    step(dt);
    if (!still && clock > nextRipple && !hover) { ripple(); nextRipple = clock + 3.2 + Math.random() * 2.5; }
    pose(clock);
    renderer.render(scene, camera);
    if (!still && visible && !document.hidden) raf = requestAnimationFrame(frame);
    else if (still && step(0)) raf = requestAnimationFrame(frame);
  }
  function kick() { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }

  function pick(e) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(caps.map((g) => g.userData.skin), false)[0];
    return hit ? hit.object.userData.cap : null;
  }
  function setHover(g) {
    if (g === hover) return;
    hover = g; canvas.style.cursor = g ? "pointer" : "";
    if (g) { sel = g; o.onHover(g.userData.d); }
    kick();
  }
  canvas.addEventListener("pointermove", (e) => { if (e.pointerType === "mouse") setHover(pick(e)); });
  canvas.addEventListener("pointerleave", () => setHover(null));
  canvas.addEventListener("click", (e) => {
    const g = pick(e); if (!g) return;
    if (e.pointerType !== "mouse" && sel !== g) { sel = g; hover = null; o.onHover(g.userData.d); g.userData.v += 3; kick(); return; }
    o.onOpen(g.userData.d);
  });

  function highlight(id) {
    const g = caps.find((c) => c.userData.d.id === id) || null;
    sel = g; if (g && !o.reduce()) g.userData.v += 2.5;
    kick();
  }
  /* colour probe: screen points on the cap top, around (not on) the legend */
  function probe() {
    const v = new THREE.Vector3();
    return caps.map((g) => {
      const u = g.userData, top = u.skin.geometry.boundingBox.max.y * g.scale.y * u.body.scale.y;
      const pts = [[0, 0.36], [0.36, 0], [-0.36, 0], [0, -0.3], [0.26, 0.26], [-0.26, 0.26]].map(([dx, dz]) => {
        v.set(g.position.x + dx * (u.d.wide || 1), g.position.y + top - 0.02, g.position.z + dz).project(camera);
        return [(v.x + 1) / 2 * W, (1 - v.y) / 2 * Hh];
      });
      return { id: u.d.id, hex: u.d.hex, pts, cb: u.cb ? u.cb.getHexString(THREE.SRGBColorSpace) : null };
    });
  }
  /* colour calibration: the cap must read as its token hex. Render, read the cap-top pixels
     (mid-luminance only, so legend ink and highlights are ignored), nudge the base colour in linear space. */
  const gl = renderer.getContext();
  function applyBase(u) {
    const c = u.cb;
    u.skinM.color.copy(c); u.coreM.color.copy(c); u.coreM.emissive.copy(c);
    u.skinM.attenuationColor.copy(c).lerp(WHITE, 0.5);
  }
  function measure() {
    const pr = renderer.getPixelRatio(), bh = gl.drawingBufferHeight, buf = new Uint8Array(5 * 5 * 4);
    return probe().map((q) => {
      const px = [];
      q.pts.forEach(([X, Y]) => {
        gl.readPixels(Math.round(X * pr) - 2, bh - Math.round(Y * pr) - 3, 5, 5, gl.RGBA, gl.UNSIGNED_BYTE, buf);
        for (let i = 0; i < buf.length; i += 4) px.push([buf[i], buf[i + 1], buf[i + 2]]);
      });
      const lum = (a) => a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
      px.sort((a, b) => lum(a) - lum(b));
      const mid = px.slice(Math.floor(px.length * 0.25), Math.floor(px.length * 0.6));
      return new THREE.Color().setRGB(...[0, 1, 2].map((i) => mid.reduce((s, a) => s + a[i], 0) / mid.length / 255), THREE.SRGBColorSpace);
    });
  }
  function calibrate() {
    if (!caps.length) return;
    caps.forEach((g) => { const u = g.userData; u.target = new THREE.Color(u.d.hex || "#c9ccd3"); if (!u.cb) u.cb = u.target.clone(); applyBase(u); });
    calibrating = true;
    caps.forEach((g) => { g.userData.best = null; g.userData.bestE = 1e9; });
    for (let it = 0; it < 10; it++) {
      pose(0); renderer.render(scene, camera);
      const m = measure(), k = it < 3 ? 0.7 : 0.45;
      caps.forEach((g, i) => {
        const u = g.userData, t = u.target, e = Math.abs(t.r - m[i].r) + Math.abs(t.g - m[i].g) + Math.abs(t.b - m[i].b);
        if (e < u.bestE) { u.bestE = e; u.best = u.cb.clone(); }
        u.cb.r = THREE.MathUtils.clamp(u.cb.r + k * (t.r - m[i].r), 0, 1);
        u.cb.g = THREE.MathUtils.clamp(u.cb.g + k * (t.g - m[i].g), 0, 1);
        u.cb.b = THREE.MathUtils.clamp(u.cb.b + k * (t.b - m[i].b), 0, 1);
        applyBase(u);
      });
    }
    caps.forEach((g) => { const u = g.userData; if (u.best) { u.cb.copy(u.best); applyBase(u); } });
    calibrating = false;
    kick();
  }
  function ringOf(id) {
    const g = caps.find((c) => c.userData.d.id === id); if (!g) return null;
    tmp.copy(g.position); tmp.y += H * 0.5; tmp.project(camera);
    const x = (tmp.x + 1) / 2 * W, y = (1 - tmp.y) / 2 * Hh;
    return { x, y, r: 0 };
  }

  let io;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible) kick(); });
    io.observe(host);
  }
  const onVis = () => { if (!document.hidden) kick(); };
  document.addEventListener("visibilitychange", onVis);
  const ro = new ResizeObserver(() => layout());
  ro.observe(host);

  setTheme(o.paper, dark);
  setCaps(o.caps, narrow);
  /* React unmount: stop the loop, drop observers and GPU resources. */
  function destroy() {
    if (raf) cancelAnimationFrame(raf);
    raf = -1;
    if (io) io.disconnect();
    ro.disconnect();
    document.removeEventListener("visibilitychange", onVis);
    caps.forEach((g) => { scene.remove(g, g.userData.sh, g.userData.pool); disposeCap(g); });
    caps = [];
    renderer.dispose();
    canvas.remove();
  }
  return {
    setCaps, setTheme, highlight, ringOf, kick, probe, calibrate, destroy, measure: () => { pose(0); renderer.render(scene, camera); return measure().map((c) => c.getHexString(THREE.SRGBColorSpace)); },
    capPx: () => capPxV,
    canvas, renderer,
    snapshot(type = "image/webp", q = 0.9) { renderer.render(scene, camera); return canvas.toDataURL(type, q); }
  };
}
