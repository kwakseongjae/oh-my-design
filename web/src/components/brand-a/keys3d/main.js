/* Hero jelly keycaps (three.js 0.186.1). Ported verbatim from the concept-A prototype
   (docs/research/2026-10-13-rebrand/a-landing/_work/keys3d, rounds 4 + colour fixes); only the
   canvas class and a destroy() for React unmount were added. Loaded with import() after idle.
   Round 12: a click or tap picks a company for the hero chat (o.onPick) instead of opening its
   page, and select(id) holds the picked cap in the active pose (raised, pressed in) until another
   is picked. Hover, focus (highlight) and a tap's name chip stay transient. */
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
  let booting = true, calibrating = false, capPxV = 90, caps = [], hover = null, sel = null, picked = null, W = 1, Hh = 1, raf = 0, visible = true, last = 0, clock = 0, nextRipple = 2.5;
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

  /* real keyboard rows (round 4): each cap names its row (d.row desktop, d.mrow phone);
     consistent pitch, QWERTY-like stagger, wordmarks on wide (2.2u) caps (world units) */
  const PITCH = 1.24, GAP = PITCH - 1;
  function slots(list, isNarrow) {
    const stag = isNarrow ? [0, 0.3, 0.6, 0.9] : [0, 0.3, 0.55, 0.8], rows = [], out = new Array(list.length);
    list.forEach((d, i) => { const r = Math.max(0, (isNarrow ? d.mrow : d.row) ?? 0); (rows[r] ??= []).push(i); });
    rows.forEach((idx, r) => {
      if (!idx) return;
      let x = (stag[r] ?? 0) * PITCH;
      idx.forEach((i) => { const w = list[i].wide || 1; out[i] = { x: x + w / 2, z: r * PITCH, hw: w / 2 }; x += w + GAP; });
    });
    return out;
  }
  function layout() {
    const r = host.getBoundingClientRect();
    W = Math.max(1, r.width); Hh = Math.max(1, r.height);
    renderer.setSize(W, Hh, false);
    const z = o.zone(), zw = z.x1 - z.x0, zh = z.y1 - z.y0;
    const sl = slots(caps.map((g) => g.userData.d), narrow);
    let minx = 1e9, maxx = -1e9, maxz = 0;
    sl.forEach((s) => { minx = Math.min(minx, s.x - s.hw); maxx = Math.max(maxx, s.x + s.hw); maxz = Math.max(maxz, s.z); });
    const spanX = maxx - minx + (narrow ? 1.0 : 0.4), spanZ = maxz + (narrow ? 1.9 : 1.5);
    const capPx = THREE.MathUtils.clamp(Math.min(zw / spanX, zh / spanZ), narrow ? 50 : 60, narrow ? 104 : 150);
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
    // round 7: calibrate a cap set once; a resize keeps the measured base colours (the
    // 10-pass read-back was ~250 ms of main thread on every resize, e.g. a scrollbar change)
    if (booting) return; if (caps.some((g) => !g.userData.cal)) calibrate(); else kick();
  }

  function setCaps(list, isNarrow) {
    // a drop in flight survives a rebuild (theme or breakpoint change mid-fall)
    const inFlight = new Map(caps.filter((g) => g.userData.dropAt != null).map((g) => [g.userData.d.id, g.userData]));
    caps.forEach((g) => { scene.remove(g, g.userData.sh, g.userData.pool); disposeCap(g); });
    narrow = isNarrow;
    const all = list;
    caps = all.map((d) => {
      const g = makeCap(d, look, blob, maxAniso), u = g.userData;
      u.lift = 0.26;
      const h = (d.id || '').split('').reduce((a, ch) => (a * 31 + ch.charCodeAt(0)) >>> 0, 7);
      u.tilt.set(((h % 7) - 3) * 0.008, (((h >> 3) % 9) - 4) * 0.013, (((h >> 6) % 7) - 3) * 0.008);   // tiny per-cap set, varies the highlight
      const f = inFlight.get(d.id);
      if (f) { u.dropAt = f.dropAt; u.dy = f.dy; u.dvy = f.dvy; }
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
      const act = g === hover || g === sel || u.d.id === picked ? 1 : 0;
      u.up = (u.up || 0) + (act * 0.12 - (u.up || 0)) * (still ? 1 : 0.15);
      // drop-in (round 6): height above the rest pose; a cap waiting for its turn is hidden
      const dy = calibrating ? 0 : (u.dy || 0), wait = !calibrating && u.dropAt != null && clock < u.dropAt;
      g.visible = u.sh.visible = u.pool.visible = !wait && !u.hidden;
      if (u.solo === "cap") u.sh.visible = u.pool.visible = false;
      const y = u.lift + 0.035 * b + u.up + dy;              // small individual float, no cluster sway
      g.position.set(u.base.x, y, u.base.z - dy * 0.22);     // falls from slightly up-screen too
      g.rotation.copy(u.tilt);
      const sy = 1 - u.sq, sxz = 1 / Math.sqrt(Math.max(0.3, sy));
      u.body.scale.set(sxz, sy, sxz);
      const wide = u.d.wide || 1, s = 1 + y * 0.6, f = s * (0.85 + 0.1 * sxz);
      u.sh.position.set(u.base.x + 0.06, 0.002, u.base.z + 0.08); u.sh.scale.set(f * (wide > 1 ? wide * 0.92 : 1), f, 1);
      u.sh.material.opacity = Math.max(0, look.blob * (1.25 - y * 0.8));
      u.pool.position.set(u.base.x + 0.18, 0.003, u.base.z + 0.3); u.pool.scale.set(s * (wide > 1 ? wide * 0.9 : 1), s, 1);
    });
  }

  function step(dt) {
    let moving = false;
    const still = o.reduce();
    caps.forEach((g) => {
      const u = g.userData;
      let target = g === hover || g === sel || u.d.id === picked ? 0.24 : 0;
      if (still) { u.sq = target; u.v = 0; u.dy = 0; u.dropAt = null; return; }
      if (u.dropAt != null && clock >= u.dropAt && dt > 0) {
        // gravity; on contact: bounce with lost energy, a squash kick, neighbours jostle
        u.dvy -= GRAV * dt; u.dy += u.dvy * dt;
        if (u.dvy < -4) target = Math.max(-0.1, u.dvy * 0.006);   // stretch a little in free fall
        if (u.dy <= 0) {
          const s = -u.dvy; u.dy = 0;
          if (s > 1.6) { u.dvy = s * 0.24; thud(g, s); } else { u.dvy = 0; u.dropAt = null; }
        }
      }
      if (u.dropAt != null) moving = true;
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
    near.forEach((g, i) => setTimeout(() => { if (g !== hover && g !== sel && g.userData.d.id !== picked) g.userData.v += 3.4 - i * 0.6; }, i * 110));
  }

  /* Drop-in (round 6): after a language switch, the caps that are new for this locale
     fall onto the keyboard. World units: a cap is 1 wide; H0 high, GRAV pull → ~0.5 s fall,
     two shrinking bounces, settle; under ~1.2 s with the stagger. */
  const GRAV = 40, H0 = 5.5;
  function thud(g, s) {
    const u = g.userData, k = Math.min(1, s / 20);
    u.v += 0.6 + 2.8 * k;                                   // squash on impact (spring does the rebound)
    caps.forEach((n) => {
      if (n === g || n.userData.dropAt != null) return;
      const d = n.userData.base.distanceTo(u.base);
      if (d > 1.9) return;
      const f = (1 - d / 1.9) * k;
      n.userData.v += 1.6 * f;                             // neighbours wobble…
      n.userData.dropAt = clock; n.userData.dy = 0.0001; n.userData.dvy = 1.4 * f;   // …and hop a hair
    });
  }
  function drop(ids, opt = {}) {
    if (o.reduce() || !ids.length) return 0;
    const t0 = clock + (opt.delay ?? 0.12), st = opt.stagger ?? 0.09;
    let k = 0;
    caps.forEach((g) => {
      const u = g.userData;
      if (!ids.includes(u.d.id)) return;
      u.dropAt = t0 + st * k++; u.dy = opt.height ?? H0; u.dvy = 0;
    });
    kick();
    return k;
  }

  function frame(now) {
    raf = 0;
    const dt = Math.min(0.05, last ? (now - last) / 1000 : 0.016); last = now;
    const still = o.reduce();
    if (!still) clock += dt;
    step(dt);
    if (!still && clock > nextRipple && !hover && !caps.some((g) => g.userData.dropAt != null)) { ripple(); nextRipple = clock + 3.2 + Math.random() * 2.5; }
    pose(clock);
    renderer.render(scene, camera);
    if (!still && visible && !document.hidden) raf = requestAnimationFrame(frame);
    else if (still && step(0)) raf = requestAnimationFrame(frame);
  }
  function kick() { if (booting) return; if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }

  function pick(e) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(caps.map((g) => g.userData.skin), false)[0];
    return hit ? hit.object.userData.cap : null;
  }
  function setHover(g) {
    if (g === hover) return;
    // round 12: the hovered cap is raised only while hovered; the picked one stays raised on its own
    hover = sel = g; canvas.style.cursor = g ? "pointer" : "";
    o.onHover(g ? g.userData.d : null);
    kick();
  }
  canvas.addEventListener("pointermove", (e) => { if (e.pointerType === "mouse") setHover(pick(e)); });
  canvas.addEventListener("pointerleave", () => setHover(null));
  canvas.addEventListener("click", (e) => {
    const g = pick(e); if (!g) return;
    // round 12: one click or tap picks (nothing navigates, so a tap needn't arm first); a tap
    // also shows the name, which a mouse already sees on hover
    if (e.pointerType !== "mouse") { sel = g; hover = null; o.onHover(g.userData.d); }
    g.userData.v += 3; kick();
    o.onPick(g.userData.d);
  });

  function highlight(id) {
    const g = caps.find((c) => c.userData.d.id === id) || null;
    sel = g; if (g && !o.reduce()) g.userData.v += 2.5;
    kick();
  }
  /* the hero chat's company: held raised by id, so a rebuild (breakpoint, theme) keeps it */
  function select(id) {
    picked = id || null;
    kick();
  }
  /* colour probe: screen points on the cap top, around (not on) the legend */
  function probe() {
    const v = new THREE.Vector3();
    return caps.map((g) => {
      const u = g.userData, top = u.skin.geometry.boundingBox.max.y * g.scale.y * u.body.scale.y;
      const pts = [[0, 0.38], [0.38, 0], [-0.38, 0], [0, -0.34], [0.38, 0.2], [-0.38, 0.2]].map(([dx, dz]) => {
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
    // round 7: one read-back per pass (the bounding box of every probe), not 5×5 per point —
    // each readPixels is a GPU sync, and 9 caps × 6 points × 10 passes was 540 of them
    const pr = renderer.getPixelRatio(), bw = gl.drawingBufferWidth, bh = gl.drawingBufferHeight;
    const qs = probe().map((q) => ({ ...q, dp: q.pts.map(([X, Y]) => [Math.round(X * pr) - 2, bh - Math.round(Y * pr) - 3]) }));
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    qs.forEach((q) => q.dp.forEach(([x, y]) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x + 5); y1 = Math.max(y1, y + 5); }));
    x0 = Math.max(0, x0); y0 = Math.max(0, y0); x1 = Math.min(bw, x1); y1 = Math.min(bh, y1);
    const rw = Math.max(1, x1 - x0), rh = Math.max(1, y1 - y0), all = new Uint8Array(rw * rh * 4);
    gl.readPixels(x0, y0, rw, rh, gl.RGBA, gl.UNSIGNED_BYTE, all);
    return qs.map((q) => {
      const px = [];
      q.dp.forEach(([X, Y]) => {
        for (let yy = 0; yy < 5; yy++) for (let xx = 0; xx < 5; xx++) {
          const cx = X + xx - x0, cy = Y + yy - y0;
          if (cx < 0 || cy < 0 || cx >= rw || cy >= rh) continue;
          const i = (cy * rw + cx) * 4;
          px.push([all[i], all[i + 1], all[i + 2]]);
        }
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
    caps.forEach((g) => { const u = g.userData; if (u.best) { u.cb.copy(u.best); applyBase(u); } u.cal = true; });
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
  let lastSize = "";
  const ro = new ResizeObserver(() => {
    const r = host.getBoundingClientRect(), k = `${Math.round(r.width)}x${Math.round(r.height)}`;
    if (k !== lastSize) { lastSize = k; layout(); }
  });
  ro.observe(host);

  setTheme(o.paper, dark);
  setCaps(o.caps, narrow);
  /* round 7: compile every program off the main thread first (KHR_parallel_shader_compile where
     available), then calibrate and start the loop — the first render no longer blocks on shader
     compiles. Nothing renders before this (kick/layout wait), and the canvas is still invisible. */
  const ready = renderer.compileAsync(scene, camera).catch(() => {})
    .then(() => new Promise((r) => requestAnimationFrame(r)))
    .then(() => { if (raf === -1) return; booting = false; calibrate(); });
  /* Build-only hooks (scripts/hero-posters.mjs via hero-keys ?k3dbg=1): render the base poster
     (some caps hidden) and matte one cap at a time — "cap" alone without its shadows, or its
     "shadow" alone (the cap still casts, but draws nothing) — over the paper and over black.
     floor() recolours clear + floor only; setTheme would recalibrate the caps between passes. */
  function hide(ids) { caps.forEach((g) => { g.userData.hidden = ids.includes(g.userData.d.id); }); }
  function solo(id, mode) {
    caps.forEach((g) => {
      const u = g.userData, me = u.d.id === id;
      u.hidden = id != null && !me;
      u.solo = me ? mode : null;
      u.skin.castShadow = !(me && mode === "cap");
      [u.skinM, u.coreM, u.legM].forEach((m) => { m.colorWrite = !(me && mode === "shadow"); m.depthWrite = m === u.legM ? false : !(me && mode === "shadow"); });
    });
  }
  function floorTo(hex) { const c = new THREE.Color(hex); renderer.setClearColor(c, 1); floor.material.color.copy(c); }
  function renderNow() { pose(clock); renderer.render(scene, camera); }

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
    ready, setCaps, setTheme, highlight, select, ringOf, kick, probe, calibrate, destroy, drop, hide, solo, floorTo, renderNow, measure: () => { pose(0); renderer.render(scene, camera); return measure().map((c) => c.getHexString(THREE.SRGBColorSpace)); },
    capPx: () => capPxV,
    canvas, renderer,
    snapshot(type = "image/webp", q = 0.9) { renderer.render(scene, camera); return canvas.toDataURL(type, q); }
  };
}
