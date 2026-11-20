#!/usr/bin/env node
/**
 * Compare what a web walk's screens are drawn with against the same service's DESIGN.md, value by value.
 *
 *   node tools/screen-archive/link-tokens.mjs <walk dir> [--refs DIR]
 *
 * Reads <walk dir>/walk.json and every <width>/<key>.elements.json (web-shoot.mjs writes the computed colour,
 * background, border, radius and font of each element), and the frontmatter of <refs>/<reference>/DESIGN.md
 * (default refs: web/references of this checkout). Writes <walk dir>/tokens.json:
 *   colors, rounded, fontSizes: each token of the reference with where on the screens the same value was drawn
 *   components: each component of the reference with the elements whose background, text colour and radius all equal it
 *   unmatched: colours and radii the screens use most that the reference does not list
 *
 * Matching is by exact value only (a colour is compared as #rrggbb, fully opaque; a length as px). Nothing is
 * rounded, nothing is "close enough". The direction is one way: a reference is never filled or corrected from here.
 * A screen is a separate evidence domain from the surfaces a reference was measured on (AGENTS.md), so an unmatched
 * token is not an error in the reference and an unlisted screen colour is an observation, not a token.
 */
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2);
const dir = args.find((a) => !a.startsWith('--') && args[args.indexOf(a) - 1] !== '--refs');
if (!dir) { console.error('usage: link-tokens.mjs <walk dir> [--refs DIR]'); process.exit(2); }
const REFS = path.resolve(args.includes('--refs') ? args[args.indexOf('--refs') + 1] : path.join(REPO, 'web/references'));

function loadYaml() {
  const roots = [REPO];
  try { roots.push(path.resolve(execFileSync('git', ['-C', REPO, 'rev-parse', '--git-common-dir'], { encoding: 'utf8' }).trim(), '..')); } catch { /* no git */ }
  for (const r of roots) for (const base of ['web/package.json', 'package.json']) {
    try { return createRequire(path.join(r, base))('js-yaml'); } catch { /* next */ }
  }
  console.error('js-yaml not found (run npm install)'); process.exit(2);
}
const yaml = loadYaml();

const walk = JSON.parse(fs.readFileSync(path.join(dir, 'walk.json'), 'utf8'));
const refFile = path.join(REFS, walk.reference, 'DESIGN.md');
if (!fs.existsSync(refFile)) { console.error('no reference at ' + refFile); process.exit(1); }
const text = fs.readFileSync(refFile, 'utf8').replace(/^﻿/, '');
const end = text.indexOf('\n---\n', 4);
const fm = yaml.load(text.slice(4, end + 1), { schema: yaml.JSON_SCHEMA }) ?? {};

// One spelling per value. A colour that is not fully opaque is kept apart: it cannot equal a hex token.
function hex(v) {
  if (v == null) return null;
  let s = String(v).trim().toLowerCase();
  const m = s.match(/^rgba?\(([^)]+)\)$/);
  if (m) {
    const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
    if (p.length >= 4 && p[3] < 1) return null;
    if (p.slice(0, 3).some(Number.isNaN)) return null;
    return '#' + p.slice(0, 3).map((n) => Math.round(n).toString(16).padStart(2, '0')).join('');
  }
  if (/^#[0-9a-f]{3}$/.test(s)) s = '#' + [...s.slice(1)].map((c) => c + c).join('');
  if (/^#[0-9a-f]{8}$/.test(s)) return s.endsWith('ff') ? s.slice(0, 7) : null;
  return /^#[0-9a-f]{6}$/.test(s) ? s : null;
}
const px = (v) => { const m = String(v ?? '').trim().match(/^(-?\d+(?:\.\d+)?)(px)?$/); return m ? Number(m[1]) : null; };

// Every drawn value on every shot, with where it was.
const seen = { color: new Map(), radius: new Map(), fontSize: new Map() };
const elementsOf = [];
const note = (map, value, where) => { if (value == null) return; if (!map.has(value)) map.set(value, []); map.get(value).push(where); };
for (const r of walk.records) {
  const f = path.join(dir, String(r.width), r.key + '.elements.json');
  if (!fs.existsSync(f)) continue;
  const data = JSON.parse(fs.readFileSync(f, 'utf8'));
  if (data.page) { note(seen.color, hex(data.page.background), { screen: r.key, width: r.width, type: 'page', label: '', prop: 'background' }); }
  for (const e of data.elements) {
    if (!e.style) continue;
    const where = { screen: r.key, width: r.width, type: e.type, label: e.label.slice(0, 40) };
    for (const prop of ['color', 'background', 'border']) note(seen.color, hex(e.style[prop]), { ...where, prop });
    note(seen.radius, px(e.style.radius), where);
    note(seen.fontSize, px(e.style.fontSize), where);
    elementsOf.push({ ...where, h: e.h, style: { color: hex(e.style.color), background: hex(e.style.background), radius: px(e.style.radius) ?? 0, fontSize: px(e.style.fontSize) } });
  }
}
if (!elementsOf.length) { console.error('no element styles in ' + dir + ' (shot before web-shoot.mjs recorded them: shoot again)'); process.exit(1); }

const summarise = (hits) => {
  const screens = [...new Set(hits.map((h) => h.screen))];
  const props = {}; for (const h of hits) if (h.prop) props[h.prop] = (props[h.prop] ?? 0) + 1;
  const controls = hits.filter((h) => ['button', 'link', 'field', 'tab'].includes(h.type) && h.label);
  return { hits: hits.length, screens, ...(Object.keys(props).length ? { props } : {}), examples: (controls.length ? controls : hits).slice(0, 3).map(({ screen, width, type, label, prop }) => ({ screen, width, type, label, ...(prop ? { prop } : {}) })) };
};
const group = (obj, norm, map) => Object.entries(obj ?? {}).filter(([, v]) => typeof v !== 'object' || v === null).map(([token, raw]) => {
  const value = norm(raw);
  return { token, value: raw, comparable: value != null, ...(value != null && map.has(value) ? summarise(map.get(value)) : { hits: 0, screens: [], examples: [] }) };
});

const colors = group(fm.colors, hex, seen.color);
const rounded = group(fm.rounded, px, seen.radius);
const fontSizes = Object.entries(fm.typography ?? {}).filter(([, v]) => v && typeof v === 'object' && v.fontSize).map(([token, v]) => {
  const value = px(v.fontSize);
  return { token, value: v.fontSize, comparable: value != null, ...(value != null && seen.fontSize.has(value) ? summarise(seen.fontSize.get(value)) : { hits: 0, screens: [], examples: [] }) };
});
// A component matches an element only when every value the reference gives for it (background, text colour, radius)
// is the element's value. A component that gives none of the three cannot be compared.
const components = Object.entries(fm.components ?? {}).filter(([, v]) => v && typeof v === 'object').map(([name, c]) => {
  const want = { background: hex(c.backgroundColor), color: hex(c.textColor), radius: c.rounded != null ? px(c.rounded) : null };
  const keys = Object.keys(want).filter((k) => want[k] != null);
  if (keys.length < 2) return { component: name, type: c.type ?? null, comparable: false, hits: 0, screens: [], examples: [] };
  const hits = elementsOf.filter((e) => ['button', 'link', 'field', 'tab', 'select'].includes(e.type) && keys.every((k) => e.style[k] === want[k]));
  return { component: name, type: c.type ?? null, comparable: true, compared: keys, ...summarise(hits) };
});

const tokenColours = new Set(colors.map((c) => hex(c.value)).filter(Boolean));
const unmatchedColors = [...seen.color.entries()].filter(([v]) => !tokenColours.has(v)).map(([value, hits]) => ({ value, ...summarise(hits) })).sort((a, b) => b.screens.length - a.screens.length || b.hits - a.hits).slice(0, 12);
const tokenRadii = new Set(rounded.map((c) => px(c.value)).filter((v) => v != null));
const unmatchedRadii = [...seen.radius.entries()].filter(([v]) => !tokenRadii.has(v)).map(([value, hits]) => ({ value: value + 'px', ...summarise(hits) })).sort((a, b) => b.hits - a.hits).slice(0, 8);

const count = (rows) => ({ matched: rows.filter((r) => r.hits > 0).length, comparable: rows.filter((r) => r.comparable).length, listed: rows.length });
const out = {
  about: 'Exact-value comparison of the screens of this walk with the DESIGN.md of the same service. One way only: nothing here changes a reference. Unmatched tokens are not errors (the screens and the measured surfaces are different evidence domains), and unlisted colours are observations.',
  reference: walk.reference, referenceFile: path.relative(REPO, refFile), walk: walk.slug + '-' + walk.shot, elements: elementsOf.length,
  summary: { colors: count(colors), rounded: count(rounded), fontSizes: count(fontSizes), components: count(components) },
  colors, rounded, fontSizes, components, unmatched: { colors: unmatchedColors, radii: unmatchedRadii },
};
fs.writeFileSync(path.join(dir, 'tokens.json'), JSON.stringify(out, null, 1));
const s = out.summary;
console.log(walk.slug + ': colours ' + s.colors.matched + '/' + s.colors.comparable + ', radii ' + s.rounded.matched + '/' + s.rounded.comparable + ', font sizes ' + s.fontSizes.matched + '/' + s.fontSizes.comparable + ', components ' + s.components.matched + '/' + s.components.comparable + ' (of ' + elementsOf.length + ' elements)');
