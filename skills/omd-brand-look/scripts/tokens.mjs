#!/usr/bin/env node
// Prototype for /brand-look (docs/SKILL_BRAND_LOOK_DESIGN_2026-11-09.md §3): one verified reference's
// DESIGN.md frontmatter -> a shadcn-style CSS variable block. No rendering. Zero dependencies.
//
//   node tokens.mjs <id | path/to/DESIGN.md> [--format hex|hsl] [--lang ko|ja|zh-TW|zh-CN|en] [--json]
//
// Reads only what npm ships: web/references/<id>/DESIGN.md frontmatter (colors, rounded, components,
// typography, fonts). reference.json is not in package.json "files", so it is never read here.
// Every emitted value is a value the reference declares; a slot no declared key can fill is omitted
// (the user's own variable stays), and listed. Role keys mirror web/src/lib/landing-a/resolve.ts.
// Exit 2 = usage, 3 = reference not found or not verified_v2.

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..', '..', '..');
const args = process.argv.slice(2);
const VALUE_FLAGS = new Set(['--format', '--lang']);
const flag = (k, d) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const target = args.find((a, i) => !a.startsWith('--') && !VALUE_FLAGS.has(args[i - 1]));
if (!target) { console.error('usage: node tokens.mjs <id | DESIGN.md> [--format hex|hsl] [--lang ko|ja|zh-TW|zh-CN|en] [--json]'); process.exit(2); }
const FORMAT = flag('format', 'hex');
const LANG = flag('lang', 'ko');
const AS_JSON = args.includes('--json');

// ---------- resolve (omd-init §4.1 order, steps 1-5; step 6 network fetch is the skill's job) ----------
const cwd = process.cwd();
const DATA_DIRS = ['.codex/data', '.claude/data', '.opencode/data', 'node_modules/oh-my-design-cli/data', 'data']
  .map((d) => path.join(cwd, d)).concat(path.join(REPO, 'data'));
const refPaths = (id) => [
  `.codex/data/references/${id}/DESIGN.md`, `.claude/data/references/${id}/DESIGN.md`,
  `.opencode/data/references/${id}/DESIGN.md`, `node_modules/oh-my-design-cli/web/references/${id}/DESIGN.md`,
  `web/references/${id}/DESIGN.md`,
].map((p) => path.join(cwd, p)).concat(path.join(REPO, 'web', 'references', id, 'DESIGN.md'));

const isFile = target.endsWith('.md');
const file = isFile ? path.resolve(target) : refPaths(target).find(existsSync);
if (!file || !existsSync(file)) { console.error(`reference ${target}: DESIGN.md not found in the omd-init resolution order`); process.exit(3); }
const id = isFile ? path.basename(path.dirname(file)) : target;

const qualityFile = DATA_DIRS.map((d) => path.join(d, 'reference-quality.json')).find(existsSync);
const quality = qualityFile ? JSON.parse(readFileSync(qualityFile, 'utf8')).items.find((x) => x.id === id) : null;
if (!quality || quality.status !== 'verified_v2') {
  console.error(`reference ${id}: status ${quality?.status ?? 'unknown'}; /brand-look draws only from verified_v2 references`);
  process.exit(3);
}

// ---------- frontmatter: a small indentation parser (maps, scalars, scalar lists, quoted strings) ----------
function parseFrontmatter(md) {
  const body = /^---\n([\s\S]*?)\n---/.exec(md)?.[1];
  if (!body) return {};
  const root = {};
  const stack = [{ indent: -1, node: root }];
  const unq = (v) => (/^'.*'$/.test(v) ? v.slice(1, -1).replace(/''/g, "'") : /^".*"$/.test(v) ? JSON.parse(v) : v);
  const lines = body.split('\n');
  for (let n = 0; n < lines.length; n++) {
    const line = lines[n];
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const indent = line.length - line.trimStart().length;
    while (stack.length > 1 && indent <= stack.at(-1).indent) stack.pop();
    const parent = stack.at(-1);
    const text = line.trim();
    if (text.startsWith('- ')) {
      if (!Array.isArray(parent.node)) continue;
      parent.node.push(unq(text.slice(2).trim()));
      continue;
    }
    const m = /^([^:]+?):(?:\s+(.*))?$/.exec(text);
    if (!m || Array.isArray(parent.node)) continue;
    const key = unq(m[1].trim());
    let value = m[2];
    if (value === undefined || value === '') {
      const next = lines.slice(n + 1).find((l) => l.trim());
      const child = next && next.trim().startsWith('- ') ? [] : {};
      parent.node[key] = child;
      stack.push({ indent, node: child });
    } else if (/^[>|]-?$/.test(value)) {
      const folded = [];
      while (n + 1 < lines.length && (lines[n + 1].length - lines[n + 1].trimStart().length > indent || !lines[n + 1].trim())) folded.push(lines[++n].trim());
      parent.node[key] = folded.join(' ').trim();
    } else {
      parent.node[key] = unq(value.trim());
    }
  }
  return root;
}

const fm = parseFrontmatter(readFileSync(file, 'utf8'));
const C = fm.colors ?? {};
const R = fm.rounded ?? {};
const COMP = fm.components ?? {};
const HEX = /^#[0-9a-f]{6}$/i;

// ---------- role keys: copied from web/src/lib/landing-a/resolve.ts (keep in step; see design doc §3) ----------
const CANVAS_KEYS = ['canvas', 'background', 'bg', 'surface-base', 'page', 'page-bg', 'white'];
const FG_KEYS = ['foreground', 'ink', 'text', 'text-primary', 'heading', 'on-surface', 'portal-ink', 'black'];
const PRIMARY_KEYS = ['primary', 'brand', 'brand-primary', 'accent', 'action', 'public-action', 'brand-green', 'cta', 'main', 'key'];
const SURFACE_COLOR_KEYS = ['surface', 'surface-1', 'card', 'card-bg', 'surface-subtle', 'subtle', 'utility-surface', 'surface-secondary', 'surface-tint', 'surface-gray', 'layer', 'panel', 'container'];
const META_KEYS = ['muted', 'text-muted', 'text-tertiary', 'tertiary', 'text-subtle', 'subtle-text', 'subtle', 'secondary', 'text-secondary', 'secondary-text', 'placeholder', 'text-placeholder'];
const LINE_KEYS = ['divider', 'border', 'hairline', 'line', 'separator', 'rule', 'stroke', 'outline', 'border-subtle', 'border-default', 'divider-subtle', 'border-muted', 'hairline-subtle'];
// brand-look only (not in resolve.ts)
const ON_PRIMARY_KEYS = ['on-primary', 'primary-foreground', 'on-brand', 'on-accent', 'on-action'];
const DANGER_KEYS = ['danger', 'error', 'destructive', 'negative', 'critical'];
const RING_KEYS = ['focus', 'focus-ring', 'ring'];
// shadcn draws buttons and inputs with rounded-md = calc(var(--radius) - 2px) in both v3 and v4, so --radius is set to
// calc(<claimed control radius> + 2px): rounded-md then renders the claimed value. Button keys first, md last.
const RADIUS_KEYS = ['button-medium', 'button', 'control', 'product-control', 'corporate-control', 'md'];
const FACE_ROLE_KEYS = ['ui', 'text', 'sans', 'body', 'default', 'primary', 'base'];

const pickColor = (keys) => {
  for (const k of keys) if (typeof C[k] === 'string' && HEX.test(C[k].trim())) return { v: C[k].trim().toLowerCase(), from: `colors.${k}` };
  return null;
};
const ordered = (re) => Object.keys(C).filter((k) => re.test(k) && !/^on-/.test(k));
const primary = pickColor(PRIMARY_KEYS) ?? pickColor(ordered(/^brand-/)) ?? pickColor(ordered(/-action$/));
const buttons = Object.entries(COMP).filter(([, c]) => c && c.type === 'button');
const primaryButton = buttons.find(([, c]) => primary && String(c.backgroundColor ?? '').toLowerCase() === primary.v)
  ?? buttons.find(([k]) => /primary/.test(k)) ?? null;
const cardComp = Object.entries(COMP).find(([, c]) => c && c.type === 'card' && HEX.test(String(c.backgroundColor ?? '')));

const fromComp = (entry, field, re = /#[0-9a-f]{6}/i) => {
  if (!entry) return null;
  const m = String(entry[1][field] ?? '').match(re);
  return m ? { v: m[0].toLowerCase(), from: `components.${entry[0]}.${field}` } : null;
};

const background = pickColor(CANVAS_KEYS);
const foreground = pickColor(FG_KEYS);
const surface = pickColor(SURFACE_COLOR_KEYS);
const border = pickColor(LINE_KEYS);
const slots = {
  background,
  foreground,
  card: fromComp(cardComp, 'backgroundColor') ?? surface,
  'card-foreground': foreground,
  popover: background,
  'popover-foreground': foreground,
  primary,
  'primary-foreground': pickColor(ON_PRIMARY_KEYS) ?? fromComp(primaryButton, 'textColor'),
  secondary: surface,
  'secondary-foreground': foreground,
  muted: surface,
  'muted-foreground': pickColor(META_KEYS),
  accent: surface,
  'accent-foreground': foreground,
  destructive: pickColor(DANGER_KEYS),
  border,
  input: border,
  ring: fromComp(primaryButton, 'focus') ?? pickColor(RING_KEYS),
};
const px = (v) => (/^\d+(\.\d+)?px$/.test(String(v).trim()) ? String(v).trim() : null);
// A pill button (radius >= half its height, or >= 999px) must not become --radius: inputs, menus and cards would turn
// into pills too. It is reported instead (buttons get rounded-full at the component level, a later step).
const isPill = (v, h) => parseFloat(v) >= 999 || (parseFloat(h) > 0 && parseFloat(v) >= parseFloat(h) / 2);
const btnR = primaryButton ? px(primaryButton[1].rounded) : null;
const pillButton = btnR && isPill(btnR, primaryButton[1].height) ? { v: btnR, from: `components.${primaryButton[0]}.rounded` } : null;
const btnRadius = btnR && !pillButton && (parseFloat(primaryButton[1].height) || 0) <= 48
  ? { v: btnR, from: `components.${primaryButton[0]}.rounded` } : null;
const radiusKey = RADIUS_KEYS.find((k) => px(R[k]) && !isPill(px(R[k])));
const radius = btnRadius ?? (radiusKey ? { v: px(R[radiusKey]), from: `rounded.${radiusKey}` } : null);

// ---------- fonts (G3: brand face / measured substitute / safe default, each labelled) ----------
const roles = fm.fonts?.roles ?? {};
const roleKey = FACE_ROLE_KEYS.find((k) => roles[k]);
const face = roleKey ? roles[roleKey] : null;
const faceMeta = face ? fm.fonts?.faces?.[face] : null;
const bodyStack = fm.typography?.body?.fontFamily ?? null;
const SAFE = { ko: ['Noto Sans KR', 'hangul'], ja: ['Noto Sans JP', 'kana'], 'zh-TW': ['Noto Sans TC', 'han'], 'zh-CN': ['Noto Sans SC', 'han'], en: ['Noto Sans', 'latin'] };
const gf = (family) => `https://fonts.googleapis.com/css2?family=${family.trim().replace(/ /g, '+')}:wght@400;600;700&display=swap`;
const font = { role: roleKey ? `fonts.roles.${roleKey}` : null, face, stack: null, from: null, loads: [], labels: [] };
if (!face) {
  font.labels.push('no UI face declared: --font-sans omitted (your font stays)');
} else if (/^system$/i.test(face)) {
  font.stack = 'system-ui, sans-serif';
  font.labels.push('brand UI face: the OS system family (per reference), not a named face');
} else if (faceMeta?.distribution === 'public') {
  font.stack = bodyStack ?? `"${face}", sans-serif`;
  font.labels.push(`brand face: ${face} (${faceMeta.licence ?? 'public'}), loads as itself from ${faceMeta.source ?? 'its published source'}`);
} else if (faceMeta?.substitutes) {
  font.stack = bodyStack ?? [`"${face}"`, ...Object.values(faceMeta.substitutes).map((s) => `"${s.family}"`), 'sans-serif'].join(', ');
  font.from = bodyStack ? 'typography.body.fontFamily' : `${font.role} + substitutes`;
  font.labels.push(`brand face: ${face}, not installable (distribution: ${faceMeta.distribution ?? 'unknown'}); kept first in the stack as metadata`);
  for (const [script, s] of Object.entries(faceMeta.substitutes)) {
    font.labels.push(`${script}: ${s.family}, ${s.label}`);
    if (s.provider === 'google') font.loads.push(gf(s.family));
    else {
      // Not auto-installed: without it the script would fall to the OS face, unlabelled (G3). Put the reference's own
      // safe default for that script behind it, loaded and labelled.
      const safe = fm.fonts?.safeDefaults?.[script] ?? [];
      font.labels.push(`${s.family}: provider ${s.provider}, not auto-installed; if absent, ${script} renders in ${safe.join(', ') || 'the OS face (no safe default declared)'}${safe.length ? ': safe default (not the brand face)' : ''}`);
      for (const f of safe) {
        font.loads.push(gf(f));
        font.stack = font.stack.replace(/,\s*(sans-serif|serif|monospace)\s*$/, `, "${f}", $1`);
        font.from = `${font.from} + fonts.safeDefaults.${script}`;
      }
    }
  }
} else {
  const [safe] = SAFE[LANG] ?? SAFE.ko;
  const latin = LANG === 'en' ? [] : ['Noto Sans'];
  font.stack = [`"${face}"`, `"${safe}"`, ...latin.map((f) => `"${f}"`), 'sans-serif'].join(', ');
  font.labels.push(`brand face: ${face}, no measured substitute (Substitute: none chosen)`);
  font.labels.push(`renders in ${[safe, ...latin].join(' + ')}: safe default (not the brand face)`);
  for (const f of [safe, ...latin]) font.loads.push(gf(f));
}

// ---------- contrast of the pairs a shadcn screen draws (WCAG 2.x) ----------
const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const lin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const lum = (h) => { const [r, g, b] = rgb(h).map(lin); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const PAIRS = [['foreground', 'background'], ['muted-foreground', 'background'], ['muted-foreground', 'muted'],
  ['primary-foreground', 'primary'], ['card-foreground', 'card'], ['destructive', 'background']];
const contrast = PAIRS.filter(([f, b]) => slots[f] && slots[b]).map(([f, b]) => {
  const r = ratio(slots[f].v, slots[b].v);
  return { pair: `${f} on ${b}`, ratio: +r.toFixed(2), body: r >= 4.5 ? 'PASS' : 'FAIL', large: r >= 3 ? 'PASS' : 'FAIL' };
});

// ---------- output ----------
const hsl = (h) => {
  const [r, g, b] = rgb(h); const mx = Math.max(r, g, b), mn = Math.min(r, g, b); const l = (mx + mn) / 2;
  if (mx === mn) return `0 0% ${+(l * 100).toFixed(1)}%`;
  const d = mx - mn; const s = d / (1 - Math.abs(2 * l - 1));
  const hh = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return `${+((hh * 60 + 360) % 360).toFixed(1)} ${+(s * 100).toFixed(1)}% ${+(l * 100).toFixed(1)}%`;
};
const val = (v) => (FORMAT === 'hsl' ? hsl(v) : v);
const omitted = [...Object.entries(slots).filter(([, s]) => !s).map(([k]) => `--${k}`), ...(radius ? [] : ['--radius']), ...(font.stack ? [] : ['--font-sans'])];
const rel = path.relative(cwd, file) || file;

if (AS_JSON) {
  console.log(JSON.stringify({ id, file: rel, status: quality.status, verified_at: quality.verified_at, slots, radius, pillButton, radiusScale: R, font, omitted, contrast }, null, 2));
  process.exit(0);
}
const out = [];
out.push(`/* omd-brand-look · ${id} · ${rel} · ${quality.status} ${quality.verified_at} */`);
for (const url of font.loads) out.push(`@import url("${url}");`);
out.push(':root:root {');
for (const [k, s] of Object.entries(slots)) if (s) out.push(`  --${k}: ${val(s.v)}; /* ${s.from} */`);
if (radius) out.push(`  --radius: calc(${radius.v} + 2px); /* rounded-md renders ${radius.v} = ${radius.from}; sm/lg/xl are shadcn offsets */`);
for (const [k, v] of Object.entries(R)) out.push(`  --radius-ref-${k}: ${v}; /* rounded.${k} */`);
if (font.stack) out.push(`  --font-sans: ${font.stack}; /* ${font.from ?? font.role} */`);
out.push('}');
if (pillButton) out.push(`/* buttons · ${pillButton.from} is a pill (${pillButton.v}); not used for --radius, buttons need rounded-full */`);
for (const l of font.labels) out.push(`/* font · ${l} */`);
out.push(`/* omitted, your theme keeps: ${omitted.length ? omitted.join(' ') : 'none'} */`);
out.push('/* contrast (WCAG): ' + contrast.map((c) => `${c.pair} ${c.ratio}:1 body ${c.body}`).join(' · ') + ' */');
console.log(out.join('\n'));
