// omd-3d-hero, the "pile" composition: a floating cluster of brand objects held by a spring toward one point,
// colliding as capsules (a sphere is a capsule with no length; a rounded box is approximated by a sphere),
// and kept out of the copy column by a hard plane. No three.js here: scripts/spec.mjs runs it in Node to
// settle the pile once (the pose the poster, the live scene and Blender all start from), and
// engines/three/scene.js runs it live. Fixed 120 Hz step and a seeded generator: the same spec always
// gives the same poses, so verify can freeze time and the poster matches the first live frame.

export const STEP = 1 / 120;

// mulberry32
export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Collision capsule for each shape, in units of the object's size s. The visual shapes in the engines use
// the same numbers: capsule = 1.6 s long, 0.62 s across; box = s cube; box-tall = 0.7 x 1.5 x 0.7 s.
export function collider(shape, s) {
  switch (shape) {
    case 'sphere': return { r: s / 2, half: 0 };
    case 'capsule': return { r: 0.31 * s, half: 0.49 * s };
    case 'box': return { r: 0.6 * s, half: 0 };
    case 'box-tall': return { r: 0.4 * s, half: 0.35 * s };
    default: throw new Error(`unknown shape ${shape}`);
  }
}

// Three size tiers. Materials per tier are fixed lists (shuffled by the seed), so every brand gets the same
// balance: the brand color dominates, one glass piece per tier, ink and clay as quiet neighbours.
const TIERS = [
  { size: 1.25, mats: ['primary', 'glass', 'primary'] },
  { size: 0.85, mats: ['primary', 'primary', 'ink', 'clay', 'glass', 'primary', 'clay', 'accent', 'primary'] },
  { size: 0.5, mats: ['primary', 'clay', 'primary', 'ink', 'accent', 'primary', 'clay', 'glass', 'primary', 'ink', 'clay', 'accent', 'primary', 'clay', 'primary', 'glass'] },
];
const MIX = {
  pill: [['capsule', 0.4], ['sphere', 0.6]],
  rounded: [['box', 0.55], ['box-tall', 0.2], ['sphere', 0.25]],
  square: [['box', 0.6], ['box-tall', 0.25], ['sphere', 0.15]],
};

function pickShape(kind, r) {
  let x = r();
  for (const [s, w] of MIX[kind]) if ((x -= w) <= 0) return s;
  return MIX[kind][0][0];
}

function randomQuat(r) { // uniform (Shoemake)
  const u1 = r(), u2 = r() * 2 * Math.PI, u3 = r() * 2 * Math.PI;
  const a = Math.sqrt(1 - u1), b = Math.sqrt(u1);
  return [a * Math.sin(u2), a * Math.cos(u2), b * Math.sin(u3), b * Math.cos(u3)];
}

// The list of bodies for a brand: shapes from the radius vocabulary, materials from the tier lists.
// The largest object of each tier takes the brand's signature shape (capsule for pill brands, box otherwise).
export function bodiesFor({ kind, accent, seed = 11 }) {
  const r = rng(seed), out = [];
  const signature = kind === 'pill' ? 'capsule' : 'box';
  TIERS.forEach((t, ti) => {
    const mats = [...t.mats];
    for (let i = mats.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [mats[i], mats[j]] = [mats[j], mats[i]]; }
    mats.forEach((m, i) => {
      const shape = i === 0 ? signature : pickShape(kind, r);
      out.push({ shape, size: +(t.size * (0.92 + 0.16 * r())).toFixed(3), material: m === 'accent' && !accent ? 'primary' : m, tier: ti });
    });
  });
  return out;
}

const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);

// Closest points between segments p1 + s d1 and p2 + t d2, s, t in [0, 1] (Ericson, RTCD 5.1.9).
function closest(p1, d1, p2, d2, out1, out2) {
  const r = [p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2]];
  const a = dot(d1, d1), e = dot(d2, d2), f = dot(d2, r);
  let s = 0, t = 0;
  if (a > 1e-9 || e > 1e-9) {
    if (a <= 1e-9) t = clamp(f / e, 0, 1);
    else {
      const c = dot(d1, r);
      if (e <= 1e-9) s = clamp(-c / a, 0, 1);
      else {
        const b = dot(d1, d2), den = a * e - b * b;
        s = den > 1e-9 ? clamp((b * f - c * e) / den, 0, 1) : 0;
        t = (b * s + f) / e;
        if (t < 0) { t = 0; s = clamp(-c / a, 0, 1); } else if (t > 1) { t = 1; s = clamp((b - c) / a, 0, 1); }
      }
    }
  }
  for (let k = 0; k < 3; k++) { out1[k] = p1[k] + d1[k] * s; out2[k] = p2[k] + d2[k] * t; }
}

// Local +Y axis of a quaternion [x, y, z, w]: the capsule's long axis.
function axisY(q, o) {
  const [x, y, z, w] = q;
  o[0] = 2 * (x * y - w * z); o[1] = 1 - 2 * (x * x + z * z); o[2] = 2 * (y * z + w * x);
  return o;
}

export class Pile {
  // cfg: spec.pile — { center, spring, damping, angularDamping, restitution, friction, orbit, planes, bodies }
  constructor(cfg) {
    this.cfg = cfg;
    this.bodies = cfg.bodies.map((b) => ({ ...b, ...collider(b.shape, b.size), p: [0, 0, 0], v: [0, 0, 0], q: [0, 0, 0, 1], w: [0, 0, 0], scale: 1, ax: [0, 1, 0] }));
    this.t = 0;
    this.reset();
  }

  // Back to the settled pose (spec.pile.bodies[i].pos / quat), at rest.
  reset() {
    this.t = 0;
    this.bodies.forEach((b, i) => {
      const s = this.cfg.bodies[i];
      if (s.pos) b.p = [...s.pos];
      if (s.quat) b.q = [...s.quat];
      b.v = [0, 0, 0]; b.w = [0, 0, 0];
    });
  }

  center(t = this.t) {
    const c = this.cfg.center, o = this.cfg.orbit;
    if (!o || !o.period) return c;
    const a = (2 * Math.PI * t) / o.period;
    // Starts exactly at the center (t = 0), so the live scene leaves the poster pose without a jump.
    return [c[0] + o.amp[0] * Math.sin(a), c[1] + o.amp[1] * Math.sin(2 * a), c[2] + o.amp[2] * (Math.cos(a) - 1)];
  }

  // An outward kick from a point (a click, or the one "wake" breath after the scene goes live).
  burst(at, speed = 4, reach = 2.5) {
    for (const b of this.bodies) {
      const d = [b.p[0] - at[0], b.p[1] - at[1], b.p[2] - at[2]], L = Math.hypot(...d) || 1;
      const k = (speed * Math.max(0, 1 - L / reach)) / L;
      for (let j = 0; j < 3; j++) b.v[j] += d[j] * k;
      b.w[0] += (d[1] - d[2]) * k * 0.6; b.w[2] += (d[0] - d[1]) * k * 0.6;
    }
  }

  // One fixed step. pointer: { a:[x,y,z], d:[x,y,z], v:[x,y,z], r } (a segment a -> a + d) or null.
  step(h = STEP, pointer = null) {
    const C = this.cfg, B = this.bodies, c = this.center();
    const damp = Math.exp(-C.damping * h), adamp = Math.exp(-C.angularDamping * h);
    for (const b of B) {
      const m = b.size ** 3;
      b.invM = 1 / m; b.invI = 1 / (0.4 * m * (b.r + b.half) ** 2);
      for (let k = 0; k < 3; k++) { b.v[k] = (b.v[k] - C.spring * (b.p[k] - c[k]) * h) * damp; b.p[k] += b.v[k] * h; }
      for (let k = 0; k < 3; k++) b.w[k] *= adamp;
      const [x, y, z, w] = b.q, [wx, wy, wz] = b.w, k = 0.5 * h;
      const q = [x + k * (wx * w + wy * z - wz * y), y + k * (wy * w + wz * x - wx * z), z + k * (wz * w + wx * y - wy * x), w + k * (-wx * x - wy * y - wz * z)];
      const n = Math.hypot(...q); b.q = q.map((v) => v / n);
      axisY(b.q, b.ax);
    }
    const ca = [0, 0, 0], cb = [0, 0, 0], da = [0, 0, 0], db = [0, 0, 0], pa = [0, 0, 0], pb = [0, 0, 0];
    const seg = (b, P, D) => { const hh = b.half * b.scale; for (let k = 0; k < 3; k++) { P[k] = b.p[k] - b.ax[k] * hh; D[k] = b.ax[k] * 2 * hh; } };
    for (let it = 0; it < 3; it++) {
      for (let i = 0; i < B.length; i++) {
        seg(B[i], pa, da);
        for (let j = i + 1; j < B.length; j++) {
          seg(B[j], pb, db);
          closest(pa, da, pb, db, ca, cb);
          this.#contact(B[i], B[j], ca, cb, it === 0);
        }
      }
      if (pointer) for (const b of B) this.#pointer(b, pointer, it === 0);
      for (const b of B) this.#planes(b);
    }
    this.t += h;
  }

  // Run t seconds with no pointer (verify's frozen clock, the settle pass).
  advance(seconds, h = STEP) { for (let n = Math.round(seconds / h); n > 0; n--) this.step(h); }

  #contact(a, b, ca, cb, impulse) {
    const ra = a.r * a.scale, rb = b.r * b.scale;
    const d = [cb[0] - ca[0], cb[1] - ca[1], cb[2] - ca[2]];
    let L = Math.hypot(...d);
    if (L >= ra + rb) return;
    const n = L > 1e-6 ? d.map((v) => v / L) : [1, 0, 0];
    const pen = ra + rb - L, wa = a.invM / (a.invM + b.invM), wb = 1 - wa;
    for (let k = 0; k < 3; k++) { a.p[k] -= n[k] * pen * wa * 0.8; b.p[k] += n[k] * pen * wb * 0.8; }
    if (!impulse) return;
    const qa = [ca[0] + n[0] * ra - a.p[0], ca[1] + n[1] * ra - a.p[1], ca[2] + n[2] * ra - a.p[2]];
    const qb = [cb[0] - n[0] * rb - b.p[0], cb[1] - n[1] * rb - b.p[1], cb[2] - n[2] * rb - b.p[2]];
    const va = vel(a, qa), vb = vel(b, qb);
    const rel = [vb[0] - va[0], vb[1] - va[1], vb[2] - va[2]], vn = dot(rel, n);
    if (vn >= 0) return;
    const j = (-(1 + this.cfg.restitution) * vn) / (a.invM + b.invM);
    const vt = [rel[0] - n[0] * vn, rel[1] - n[1] * vn, rel[2] - n[2] * vn], tl = Math.hypot(...vt);
    const jt = tl > 1e-6 ? Math.min(this.cfg.friction * j, tl / (a.invM + b.invM)) / tl : 0;
    const J = [n[0] * j + vt[0] * jt, n[1] * j + vt[1] * jt, n[2] * j + vt[2] * jt];
    apply(a, qa, J, -1); apply(b, qb, J, 1);
  }

  // The pointer is a capsule of infinite mass along the view ray through the pile's depth (P.a + s P.d), so it
  // reaches objects in front of and behind the center plane alike.
  #pointer(b, P, impulse) {
    const hh = b.half * b.scale, rb = b.r * b.scale, pa = [0, 0, 0], da = [0, 0, 0], cb = [0, 0, 0], cp = [0, 0, 0];
    for (let k = 0; k < 3; k++) { pa[k] = b.p[k] - b.ax[k] * hh; da[k] = b.ax[k] * 2 * hh; }
    closest(pa, da, P.a, P.d, cb, cp);
    const d = [cb[0] - cp[0], cb[1] - cp[1], cb[2] - cp[2]], L = Math.hypot(...d);
    if (L >= P.r + rb) return;
    const n = L > 1e-6 ? d.map((v) => v / L) : [1, 0, 0], pen = P.r + rb - L;
    for (let k = 0; k < 3; k++) b.p[k] += n[k] * pen;
    if (!impulse) return;
    const q = [cb[0] - n[0] * rb - b.p[0], cb[1] - n[1] * rb - b.p[1], cb[2] - n[2] * rb - b.p[2]];
    const v = vel(b, q), vn = dot([v[0] - P.v[0], v[1] - P.v[1], v[2] - P.v[2]], n);
    if (vn >= 0) return;
    const j = (-(1 + 0.6) * vn) / b.invM;
    apply(b, q, [n[0] * j, n[1] * j, n[2] * j], 1);
  }

  // Hard planes (floor, back wall, the copy-column guard): n·x - d >= r for both capsule ends.
  #planes(b) {
    const hh = b.half * b.scale, rb = b.r * b.scale;
    for (const { n, d } of this.cfg.planes) {
      const c = dot(n, b.p) - d, e = Math.abs(dot(n, b.ax)) * hh;
      const gap = c - e - rb;
      if (gap >= 0) continue;
      for (let k = 0; k < 3; k++) b.p[k] -= n[k] * gap;
      const vn = dot(b.v, n);
      if (vn < 0) for (let k = 0; k < 3; k++) b.v[k] -= n[k] * vn * 1.3;
    }
  }

  poses() { return this.bodies.map((b) => ({ p: b.p, q: b.q, scale: b.scale })); }
}

function vel(b, q) { const w = b.w; return [b.v[0] + w[1] * q[2] - w[2] * q[1], b.v[1] + w[2] * q[0] - w[0] * q[2], b.v[2] + w[0] * q[1] - w[1] * q[0]]; }
function apply(b, q, J, sgn) {
  for (let k = 0; k < 3; k++) b.v[k] += sgn * J[k] * b.invM;
  const t = [q[1] * J[2] - q[2] * J[1], q[2] * J[0] - q[0] * J[2], q[0] * J[1] - q[1] * J[0]];
  for (let k = 0; k < 3; k++) b.w[k] += sgn * t[k] * b.invI;
}

// The copy guard: the plane through the camera that projects to the vertical screen line at NDC x = g
// (for the 16:9 framing the scene is composed for). A body wholly on its right side projects wholly right of
// that line, so nothing the simulation does (pointer, click, brand switch) can cover the headline.
export function guardPlane(camera, g, aspect = 16 / 9) {
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const norm = (a) => { const L = Math.hypot(...a); return a.map((v) => v / L); };
  const f = norm(sub(camera.target, camera.pos)), rt = norm(cross(f, [0, 1, 0])), up = cross(rt, f);
  const tanH = Math.tan(((camera.fovY * Math.PI) / 180) / 2) * aspect;
  const d1 = [f[0] + rt[0] * g * tanH, f[1] + rt[1] * g * tanH, f[2] + rt[2] * g * tanH];
  let n = norm(cross(up, d1));
  if (dot(n, rt) < 0) n = n.map((v) => -v);
  return { n, d: dot(n, camera.pos), id: 'copy-guard' };
}

// Settle a fresh pile: seeded positions in a ball around the center, 10 s of simulation with the orbit off,
// then velocities dropped. Returns the bodies with pos / quat filled in.
export function settle(cfg, seconds = 10) {
  const r = rng(cfg.seed ?? 11);
  const bodies = cfg.bodies.map((b) => {
    const u = [r() * 2 - 1, r() * 2 - 1, r() * 2 - 1];
    return { ...b, pos: [cfg.center[0] + u[0] * 2.2, cfg.center[1] + u[1] * 1.6, cfg.center[2] + u[2] * 1.6], quat: randomQuat(r) };
  });
  const pile = new Pile({ ...cfg, orbit: null, bodies });
  pile.advance(seconds);
  const r5 = (v) => +v.toFixed(5);
  return pile.bodies.map((b, i) => ({ ...cfg.bodies[i], pos: b.p.map(r5), quat: b.q.map(r5) }));
}
