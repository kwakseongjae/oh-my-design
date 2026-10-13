#!/usr/bin/env node
// DESIGN.md colors -> one contrast-safe shader-hero palette. Zero dependencies.
//
//   node tokens.mjs <DESIGN.md> [--scheme dark|light] [--json]
//   node tokens.mjs <DESIGN.md> --write <hero.html>     # fills the template's token blocks in place
//
// Readers, in order (first role seen for a hex wins):
//   1. Core v2 semantic tokens        - **color.primary**: `#3182f6`
//   2. Core v2 Foundations prose      **Action Blue** (`#2457e6`)   (only inside the foundations section)
//   3. Google-compatible frontmatter  colors:\n  primary: "#3182f6"
// No color found -> exit 3. The hero never invents a palette (unknown means absent).

import { readFileSync, writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const opt = (k) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : undefined; };
const file = args.find((a, i) => !a.startsWith('--') && !['--scheme', '--write'].includes(args[i - 1]));
if (!file) { console.error('usage: node tokens.mjs <DESIGN.md> [--scheme dark|light] [--json] [--write hero.html]'); process.exit(2); }
const md = readFileSync(file, 'utf8');

// ---------- read ----------
const HEX = '#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\\b';
const norm = (h) => { h = h.toLowerCase(); if (h.length === 4) h = '#' + [...h.slice(1)].map((c) => c + c).join(''); return h.slice(0, 7); };
const slug = (s) => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const found = new Map(); // hex -> { role, source }
const add = (role, hex, source) => { const h = norm(hex); if (!found.has(h)) found.set(h, { role: slug(role), hex: h, source }); };

for (const m of md.matchAll(new RegExp(`^\\s*[-*]\\s+\\*\\*color\\.([a-z0-9.-]+)\\*\\*\\s*:\\s*\`(${HEX})\``, 'gim'))) add(m[1], m[2], 'core-v2 token');
const foundations = /<!--\s*design-md:section foundations\s*-->([\s\S]*?)(?=<!--\s*design-md:section |$)/.exec(md)?.[1] ?? '';
for (const m of foundations.matchAll(new RegExp(`\\*\\*([^*\\n]{2,40})\\*\\*\\s*\\(\`(${HEX})\`\\)`, 'g'))) add(m[1], m[2], 'core-v2 foundations prose');
const fm = /^---\n([\s\S]*?)\n---/.exec(md)?.[1];
if (fm) {
  const block = /^colors:\s*\n((?:[ \t]+.*\n?)*)/m.exec(fm)?.[1] ?? '';
  for (const m of block.matchAll(new RegExp(`^[ \\t]+([\\w.-]+)\\s*:\\s*["']?(${HEX})`, 'gm'))) add(m[1], m[2], 'frontmatter colors');
}
if (!found.size) {
  console.error(`No colors resolved from ${file}. The hero needs brand tokens; it will not invent a palette.\n` +
    'Add them to DESIGN.md Foundations (e.g. "- **color.primary**: `#...`") or run omd-init first.');
  process.exit(3);
}

// ---------- color math ----------
const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const lin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const lum = (h) => { const [r, g, b] = rgb(h).map(lin); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const toHex = (c) => '#' + c.map((v) => Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16).padStart(2, '0')).join('');
const mix = (a, b, t) => toHex(rgb(a).map((v, i) => v + (rgb(b)[i] - v) * t));
const sat = (h) => { const c = rgb(h); const mx = Math.max(...c), mn = Math.min(...c); const l = (mx + mn) / 2; return mx === mn ? 0 : (mx - mn) / (1 - Math.abs(2 * l - 1)); };
const dist = (a, b) => Math.hypot(...rgb(a).map((v, i) => v - rgb(b)[i]));

// ---------- classify ----------
// Match whole words of the role name ("action-blue" must not hit "on-", "string" must not hit "ring").
const words = (role) => new Set(role.split('-'));
const has = (role, list) => list.some((w) => words(role).has(w));
const EXCLUDE = ['danger', 'error', 'warning', 'warn', 'success', 'positive', 'negative', 'caution', 'info', 'critical', 'destructive', 'border', 'divider', 'outline', 'stroke', 'disabled', 'overlay', 'shadow', 'focus', 'ring', 'scrim', 'selection', 'chart', 'data', 'visited', 'hover', 'pressed', 'active'];
const NEUTRAL = ['canvas', 'background', 'bg', 'surface', 'paper', 'base', 'page', 'backdrop'];
const INK = ['foreground', 'fg', 'text', 'body', 'ink', 'heading', 'muted', 'subtle', 'on'];
const BRAND = ['primary', 'brand', 'accent', 'secondary', 'tertiary', 'highlight', 'key', 'action', 'signature', 'cta'];
const all = [...found.values()];
const excluded = [], neutrals = [], inks = [], brand = [];
for (const c of all) {
  if (has(c.role, EXCLUDE)) excluded.push(c);
  else if (has(c.role, INK)) inks.push(c);          // "on-primary" is ink, not brand
  else if (has(c.role, NEUTRAL)) neutrals.push(c);
  else if (has(c.role, BRAND) || sat(c.hex) > 0.25) brand.push(c);
  else neutrals.push(c);
}
if (!brand.length) {
  console.error('Colors found, but none reads as a brand color (primary/brand/accent or a saturated value). Refusing to build a grey hero.');
  process.exit(3);
}
const lightness = (c) => lum(c.hex);
const pool = [...neutrals, ...inks];
const darkest = [...pool, ...brand].sort((a, b) => lightness(a) - lightness(b))[0];
const lightest = [...pool, ...brand].sort((a, b) => lightness(b) - lightness(a))[0];
const scheme = opt('scheme') ?? 'dark';
const base = scheme === 'dark' ? darkest : lightest;

// Exactly one brand color dithered against the base: two flat inks, no blending, so two hues can
// never mix into mud. Prefer the role named primary/brand; else the most saturated brand color.
const ranked = [...brand].filter((c) => dist(c.hex, base.hex) > 0.12)
  .sort((a, b) => (has(b.role, ['primary', 'brand']) - has(a.role, ['primary', 'brand'])) || sat(b.hex) - sat(a.hex));
if (!ranked.length) { console.error('Every brand color is too close to the base to dither against it.'); process.exit(3); }
const front = ranked[0];
const stops = [base, front].map(({ role, hex }) => ({ role, hex }));

// ---------- text + contrast ----------
// A dither pixel is either the base or the brand ink; the scrim then mixes base over it. Check both
// inks and their midpoint (anti-aliased dot edges); the worst one is what the text must survive.
const samples = [];
for (let i = 0; i < stops.length; i++) for (let j = i; j < stops.length; j++) samples.push(mix(stops[i].hex, stops[j].hex, 0.5));
const candidates = (scheme === 'dark' ? [...inks, ...neutrals, ...brand].filter((c) => lightness(c) > 0.5) : [...inks, ...neutrals].filter((c) => lightness(c) < 0.2));
if (!candidates.length) candidates.push(scheme === 'dark' ? lightest : darkest);
const worstOf = (t, sc = null, a = 0) => Math.min(...samples.map((s) => contrast(t, sc ? mix(s, sc, a) : s)));
const text = candidates.map((c) => ({ ...c, worst: worstOf(c.hex) })).sort((a, b) => b.worst - a.worst)[0];
// Knockout, not scrim: a translucent base layer over brand-ink dots would mix the two hues into
// exactly the mud this skill exists to avoid. The copy sits on an opaque base-ink panel whose edge
// feathers into the field, so the text is measured against the base ink itself.
const alpha = 1;
const after = worstOf(text.hex, base.hex, alpha);

const out = {
  source: file,
  scheme,
  stops,
  base: { role: base.role, hex: base.hex },
  text: { role: text.role, hex: text.hex },
  contrast: { worstWithoutScrim: +text.worst.toFixed(2), worstWithScrim: +after.toFixed(2), target: 4.5 },
  scrim: { hex: base.hex, alpha },
  excluded: excluded.map((c) => c.role),
  read: all.map((c) => `${c.role} ${c.hex} (${c.source})`),
};
if (after < 4.5) out.warning = 'The text token does not reach 4.5:1 even on the base ink. Pick another text token in DESIGN.md before using this hero.';

if (opt('write')) {
  const target = opt('write');
  let html = readFileSync(target, 'utf8');
  const json = JSON.stringify({ stops: stops.map((s) => s.hex), text: text.hex, scrim: base.hex, scrimAlpha: alpha, source: file.split('/').slice(-2).join('/') });
  const css = `:root{${stops.map((s, i) => `--hero-c${i}:${s.hex};`).join('')}--hero-text:${text.hex};--hero-scrim:${base.hex};--hero-scrim-a:${alpha};}`;
  html = html.replace(/(<script type="application\/json" id="hero-tokens">)[\s\S]*?(<\/script>)/, `$1${json}$2`)
             .replace(/(<style id="hero-vars">)[\s\S]*?(<\/style>)/, `$1${css}$2`);
  writeFileSync(target, html);
  console.error(`wrote tokens into ${target}`);
}
console.log(args.includes('--json') || !opt('write') ? JSON.stringify(out, null, 2) : `ok: ${stops.length} stops, text ${text.hex}, worst ${after.toFixed(2)}:1 with scrim ${alpha}`);
