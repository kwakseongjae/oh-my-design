#!/usr/bin/env node
// DESIGN.md -> one engine-neutral 3D scene spec (JSON). Zero dependencies.
//
//   node spec.mjs <DESIGN.md> [--scheme light|dark] [--headline "..."] [--sub "..."] [--out spec.json]
//   node spec.mjs <DESIGN.md> --write hero.html [--poster poster.webp]   # fills the template's token + spec blocks
//
// Both engines read the same spec: engines/three/scene.js (browser) and engines/blender/scene.py
// (headless Blender). Coordinates are three.js world units, Y up; the Blender script converts.
//
// Color readers, in order (first role seen for a hex wins), shared with omd-shader-hero/scripts/tokens.mjs:
//   1. Core v2 semantic tokens        - **color.primary**: `#3182f6`
//   2. Core v2 Foundations prose      **Action Blue** (`#2457e6`)   (only inside the foundations section)
//   3. Google-compatible frontmatter  colors:\n  primary: "#3182f6"
// Radius reader: every `rounded:` block (frontmatter or a fenced YAML block in the body), `key: Npx`.
// No brand color -> exit 3. The scene never invents a palette or a shape (unknown means absent).

import { readFileSync, writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const opt = (k) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : undefined; };
const VALUED = ['--scheme', '--headline', '--sub', '--out', '--write', '--poster'];
const file = args.find((a, i) => !a.startsWith('--') && !VALUED.includes(args[i - 1]));
if (!file) { console.error('usage: node spec.mjs <DESIGN.md> [--scheme light|dark] [--headline "..."] [--sub "..."] [--out spec.json]'); process.exit(2); }
const md = readFileSync(file, 'utf8');

// ---------- read colors ----------
const HEX = '#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\\b';
const norm = (h) => { h = h.toLowerCase(); if (h.length === 4) h = '#' + [...h.slice(1)].map((c) => c + c).join(''); return h.slice(0, 7); };
const slug = (s) => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const found = new Map();
const roles = []; // every (role, hex) pair, including roles that share a hex with an earlier one
const add = (role, hex, source) => { const h = norm(hex); roles.push({ role: slug(role), hex: h }); if (!found.has(h)) found.set(h, { role: slug(role), hex: h, source }); };
for (const m of md.matchAll(new RegExp(`^\\s*[-*]\\s+\\*\\*color\\.([a-z0-9.-]+)\\*\\*\\s*:\\s*\`(${HEX})\``, 'gim'))) add(m[1], m[2], 'core-v2 token');
const foundations = /<!--\s*design-md:section foundations\s*-->([\s\S]*?)(?=<!--\s*design-md:section |$)/.exec(md)?.[1] ?? '';
for (const m of foundations.matchAll(new RegExp(`\\*\\*([^*\\n]{2,40})\\*\\*\\s*\\(\`(${HEX})\`\\)`, 'g'))) add(m[1], m[2], 'core-v2 foundations prose');
const fm = /^---\n([\s\S]*?)\n---/.exec(md)?.[1];
if (fm) {
  const block = /^colors:\s*\n((?:[ \t]+.*\n?)*)/m.exec(fm)?.[1] ?? '';
  for (const m of block.matchAll(new RegExp(`^[ \\t]+([\\w.-]+)\\s*:\\s*["']?(${HEX})`, 'gm'))) add(m[1], m[2], 'frontmatter colors');
}
if (!found.size) { console.error(`No colors resolved from ${file}. Add DESIGN.md color tokens or run omd-init first.`); process.exit(3); }

// ---------- read radius ----------
const radii = [];
for (const b of md.matchAll(/^rounded:\s*\n((?:[ \t]+[\w.-]+\s*:\s*[^\n]*\n?)*)/gm))
  for (const m of b[1].matchAll(/^[ \t]+([\w.-]+)\s*:\s*["']?([\d.]+)(px|%)?/gm)) radii.push({ key: m[1], px: m[3] === '%' ? (+m[2] >= 50 ? 9999 : +m[2]) : +m[2] });

// ---------- color math ----------
const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const lin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const lum = (h) => { const [r, g, b] = rgb(h).map(lin); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const sat = (h) => { const c = rgb(h); const mx = Math.max(...c), mn = Math.min(...c); const l = (mx + mn) / 2; return mx === mn ? 0 : (mx - mn) / (1 - Math.abs(2 * l - 1)); };
const dist = (a, b) => Math.hypot(...rgb(a).map((v, i) => v - rgb(b)[i]));

// ---------- classify (same vocabulary as omd-shader-hero) ----------
const words = (role) => new Set(role.split('-'));
const has = (role, list) => list.some((w) => words(role).has(w));
const EXCLUDE = ['danger', 'error', 'warning', 'warn', 'success', 'positive', 'negative', 'caution', 'info', 'critical', 'destructive', 'border', 'divider', 'outline', 'stroke', 'hairline', 'line', 'separator', 'rule', 'disabled', 'overlay', 'shadow', 'focus', 'ring', 'scrim', 'selection', 'chart', 'data', 'visited', 'hover', 'pressed', 'active'];
const NEUTRAL = ['canvas', 'background', 'bg', 'surface', 'paper', 'base', 'page', 'backdrop'];
const INK = ['foreground', 'fg', 'text', 'body', 'ink', 'heading', 'muted', 'subtle', 'on'];
const BRAND = ['primary', 'brand', 'accent', 'secondary', 'tertiary', 'highlight', 'key', 'action', 'signature', 'cta'];
const all = [...found.values()];
const neutrals = [], inks = [], brand = [];
for (const c of all) {
  if (has(c.role, EXCLUDE)) continue;
  if (has(c.role, INK)) inks.push(c);
  else if (has(c.role, NEUTRAL)) neutrals.push(c);
  else if (has(c.role, BRAND) || sat(c.hex) > 0.25) brand.push(c);
  else neutrals.push(c);
}
if (!brand.length) { console.error('No brand color (primary/brand/accent or a saturated value). Refusing to build a grey scene.'); process.exit(3); }

const scheme = opt('scheme') ?? 'light';
const pool = [...neutrals, ...inks];
const byL = (a, b) => lum(a.hex) - lum(b.hex);
const lightest = [...pool].sort(byL).at(-1) ?? { role: 'white', hex: '#ffffff' };
const darkest = [...pool].sort(byL)[0] ?? { role: 'black', hex: '#000000' };
// Backdrop: the canvas/surface end of the scheme. A tinted "surface" neutral beats pure white
// because a lit cyclorama in pure white blows out; it must still be a DESIGN.md token.
// Prefer roles that name a surface (canvas/background/surface...) over palette steps like grey300.
const named = (c) => has(c.role, NEUTRAL);
const lightNeutrals = neutrals.filter((c) => lum(c.hex) > 0.6).sort((a, b) => (named(b) - named(a)) || (lum(b.hex) - lum(a.hex)));
const darkNeutrals = [...neutrals, ...inks].filter((c) => lum(c.hex) < 0.08).sort((a, b) => (named(b) - named(a)) || (lum(b.hex) - lum(a.hex)));
const backdrop = scheme === 'light'
  ? (lightNeutrals.find((c) => named(c) && c.hex !== '#ffffff') ?? lightNeutrals.find(named) ?? lightNeutrals[0] ?? lightest)
  : (darkNeutrals[0] ?? darkest);
const rankedBrand = [...brand].filter((c) => dist(c.hex, backdrop.hex) > 0.15)
  .sort((a, b) => (has(b.role, ['primary', 'brand']) - has(a.role, ['primary', 'brand'])) || sat(b.hex) - sat(a.hex));
if (!rankedBrand.length) { console.error('Every brand color is too close to the backdrop.'); process.exit(3); }
const primary = rankedBrand[0];
// A second brand ink only when DESIGN.md names one (accent/secondary/...); palette steps like red100 don't count.
const accent = rankedBrand.slice(1).find((c) => has(c.role, BRAND) && dist(c.hex, primary.hex) > 0.25 && sat(c.hex) > 0.25) ?? null;
// The "ink" object: the opposite end of the scheme (a dark satin object on light, a light clay one on dark).
const ink = scheme === 'light' ? darkest : lightest;
const clay = scheme === 'light' ? lightest : (neutrals.filter((c) => lum(c.hex) > 0.02 && lum(c.hex) < 0.2).sort(byL).at(-1) ?? backdrop);

// Text sits on the backdrop, left of the cluster. Pick the ink with the best contrast against the
// backdrop; the verify script then measures the real lit frames, which are darker than the token.
const textCands = scheme === 'light' ? inks.filter((c) => lum(c.hex) < 0.2) : [...inks, ...neutrals].filter((c) => lum(c.hex) > 0.5);
if (!textCands.length) textCands.push(scheme === 'light' ? darkest : lightest);
const text = textCands.map((c) => ({ ...c, cr: contrast(c.hex, backdrop.hex) })).sort((a, b) => b.cr - a.cr)[0];

// ---------- shape vocabulary from radius ----------
const finite = radii.filter((r) => r.px < 999).map((r) => r.px).sort((a, b) => a - b);
const pill = radii.some((r) => r.px >= 999 && /full|pill|round|circle|capsule/.test(r.key));
const maxR = finite.at(-1) ?? 0;
const shape = pill ? 'pill' : !radii.length ? 'rounded' : maxR <= 2 ? 'square' : 'rounded';
// Bevel as a fraction of a unit object: a 16px radius on a ~64px control reads as 0.25.
const bevel = shape === 'square' ? 0.02 : shape === 'pill' ? 0.5 : Math.min(0.35, Math.max(0.06, maxR / 64));

// ---------- scene ----------
const mat = (role, hex, kind) => ({ role, hex, ...(kind === 'gloss' ? { roughness: 0.32, coat: 0.35 } : kind === 'satin' ? { roughness: 0.5, coat: 0.1 } : { roughness: 0.82, coat: 0 }) });
const materials = {
  backdrop: mat(backdrop.role, backdrop.hex, 'clay'),
  primary: mat(primary.role, primary.hex, 'gloss'),
  ink: mat(ink.role, ink.hex, 'satin'),
  clay: mat(clay.role, clay.hex, 'clay'),
  ...(accent ? { accent: mat(accent.role, accent.hex, 'gloss') } : {}),
};
// One composition for now: "cluster-right". Objects stay right of x = -0.2 so the left of the frame is
// clean backdrop for the headline. Sizes are in world units; y is set by the engines to rest on the floor.
const primShapes = shape === 'pill'
  ? ['capsule-lying', 'sphere', 'capsule-standing', 'sphere-small', 'slab']
  : ['box', 'sphere', 'box-tall', 'sphere-small', 'slab'];
const objects = [
  { id: 'hero', shape: primShapes[0], material: 'primary', pos: [2.1, 0, 0.2], size: 1.5, rotY: -0.5, phase: 0.0 },
  { id: 'ink', shape: primShapes[1], material: 'ink', pos: [3.5, 0, -1.4], size: 0.95, rotY: 0.3, phase: 0.27 },
  { id: 'clay', shape: primShapes[2], material: 'clay', pos: [1.0, 0, -1.7], size: 0.9, rotY: 0.6, phase: 0.55 },
  { id: 'dot', shape: primShapes[3], material: accent ? 'accent' : 'primary', pos: [2.9, 0, 1.6], size: 0.42, rotY: 0, phase: 0.8 },
  { id: 'slab', shape: primShapes[4], material: 'clay', pos: [1.0, 0, 1.6], size: 1.0, rotY: 0.9, phase: 0.4 },
];

const spec = {
  version: 1,
  source: file.split('/').slice(-2).join('/'),
  scheme,
  archetype: 'studio',
  composition: 'cluster-right',
  shape: { kind: shape, bevel: +bevel.toFixed(3), radiusPx: finite, pill },
  materials,
  objects,
  text: { role: text.role, hex: text.hex, contrastOnBackdropToken: +text.cr.toFixed(2) },
  headline: opt('headline') ?? '',
  sub: opt('sub') ?? '',
  // Cyclorama: floor from z=+12 back to z=-2, a cove of radius 2.5, then a wall up to y=14.
  cyclorama: { floorFront: 12, coveZ: -2, coveRadius: 2.5, wallTop: 14, width: 40 },
  // Target sits left of the cluster (x~2.2) so the cluster lands near 75% of the frame width.
  camera: { pos: [-1.0, 1.7, 7.6], target: [0.4, 0.65, 0], fovY: 32 },
  lights: {
    key: { pos: [-4, 8, 6], target: [1.5, 0.4, 0], size: 6, energy: 1.0 },
    rim: { pos: [6, 5, -4], target: [2, 0.6, 0], size: 3, energy: 0.35 },
    world: 0.3,
  },
  toneMapping: 'neutral', // Khronos PBR Neutral in both engines: keeps base colors close to the tokens
  exposure: 1.0,
  motion: { period: 8, bob: 0.06, spin: 0.08, sway: 0.15 },
  poster: { width: 1920, height: 1080 },
};
if (text.cr < 4.5) spec.warning = 'The best text token is under 4.5:1 on the backdrop token. Choose another text token or the dark scheme.';
if (!radii.length) spec.shape.note = 'No rounded: block found; using the "rounded" fallback vocabulary with the minimum bevel.';

// CTA: brand fill, label in whichever of white / the text token reads best on it.
// The label is 19px bold (WCAG large text, 3:1). DESIGN.md's own on-primary token wins when it clears that;
// otherwise the best of white / text token / black.
const onToken = roles.find((c) => /^on-(primary|brand|accent|cta|action)$/.test(c.role));
const pick = onToken && contrast(onToken.hex, primary.hex) >= 3
  ? { h: onToken.hex, cr: contrast(onToken.hex, primary.hex), role: onToken.role }
  : ['#ffffff', text.hex, '#000000'].map((h) => ({ h, cr: contrast(h, primary.hex), role: 'computed' })).sort((a, b) => b.cr - a.cr)[0];
const onBrand = pick;
spec.cta = { bg: primary.hex, fg: onBrand.h, fgRole: onBrand.role, contrast: +onBrand.cr.toFixed(2), large: true, radiusPx: pill ? 9999 : (finite.at(-1) ?? 0) };
if (onBrand.cr < 3) spec.cta.warning = 'No label color reaches 3:1 on the brand fill even as large text; use an outline CTA in the text color.';

const json = JSON.stringify(spec, null, 2);
if (opt('write')) {
  const target = opt('write');
  let html = readFileSync(target, 'utf8');
  const css = `:root{--hero-bg:${backdrop.hex};--hero-text:${text.hex};--hero-brand:${primary.hex};--hero-on-brand:${onBrand.h};--hero-radius:${spec.cta.radiusPx}px;--hero-poster:url(${opt('poster') ?? 'poster.webp'})}`;
  html = html.replace(/(<style id="hero-vars">)[\s\S]*?(<\/style>)/, `$1${css}$2`)
             .replace(/(<script type="application\/json" id="hero-spec">)[\s\S]*?(<\/script>)/, `$1${JSON.stringify(spec)}$2`);
  writeFileSync(target, html);
  console.error(`wrote tokens + spec into ${target}`);
}
if (opt('out')) { writeFileSync(opt('out'), json + '\n'); console.error(`wrote ${opt('out')}`); }
else if (!opt('write')) console.log(json);
