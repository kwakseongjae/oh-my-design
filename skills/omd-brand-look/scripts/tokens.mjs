#!/usr/bin/env node
// omd-brand-look tokens (docs/SKILL_BRAND_LOOK_DESIGN_2026-11-09.md §3): one verified reference's DESIGN.md
// frontmatter -> a shadcn-style CSS variable block. No rendering. Zero dependencies. Also a module: look.mjs and
// check.mjs import brandTokens / renderCss / pairCause / suggest from here.
//
//   node tokens.mjs <id | path/to/DESIGN.md> [--format auto|hex|hsl] [--lang ko|ja|zh-TW|zh-CN|en] [--assign] [--json]
//
// Reads only what npm ships: web/references/<id>/DESIGN.md frontmatter (colors, rounded, components,
// typography, fonts). reference.json is not in package.json "files", so it is never read here.
// Every emitted value is a value the reference declares; a slot no declared key can fill is omitted
// (the user's own variable stays), and listed. Role keys mirror web/src/lib/landing-a/resolve.ts.
// --assign applies the reassignment suggestions (another declared colour for a slot whose pair fails); off by default.
// Exit 2 = usage, 3 = reference not found or not verified_v2.

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..', '..', '..');

export class TokensError extends Error {
  constructor(message, code = 3) { super(message); this.code = code; }
}

// ---------- resolve ----------
// Inside the oh-my-design repo, web/references is canonical (AGENTS.md). Installer copies under .codex/.claude/.opencode
// can be stale legacy files with no colors: block, so they come after it; then the omd-init §4.1 installed paths.
const refCandidates = (id, cwd) => [
  path.join(cwd, 'web', 'references', id, 'DESIGN.md'),
  ...['.codex/data', '.claude/data', '.opencode/data'].map((d) => path.join(cwd, d, 'references', id, 'DESIGN.md')),
  path.join(cwd, 'node_modules', 'oh-my-design-cli', 'web', 'references', id, 'DESIGN.md'),
  path.join(REPO, 'web', 'references', id, 'DESIGN.md'),
];
// reference-quality.json is read from the same tree as the DESIGN.md that won, then the usual data dirs.
const qualityCandidates = (file, cwd) => {
  const refsDir = path.dirname(path.dirname(file));
  const tree = path.basename(path.dirname(refsDir)) === 'web' ? path.dirname(path.dirname(refsDir)) : path.dirname(refsDir);
  return [
    path.join(tree, 'data', 'reference-quality.json'),
    path.join(refsDir, '..', 'reference-quality.json'),
    ...['.codex/data', '.claude/data', '.opencode/data', 'node_modules/oh-my-design-cli/data', 'data'].map((d) => path.join(cwd, d, 'reference-quality.json')),
    path.join(REPO, 'data', 'reference-quality.json'),
  ];
};

// ---------- frontmatter: a small indentation parser (maps, scalars, scalar lists, quoted strings) ----------
export function parseFrontmatter(md) {
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
const ROLE_KEYS = new Set([...CANVAS_KEYS, ...FG_KEYS, ...PRIMARY_KEYS, ...SURFACE_COLOR_KEYS, ...META_KEYS, ...LINE_KEYS, ...ON_PRIMARY_KEYS, ...DANGER_KEYS, ...RING_KEYS]);
const TEXT_ON_CANVAS_KEYS = new Set([...FG_KEYS, ...META_KEYS, ...DANGER_KEYS]);
export const SLOT_NAMES = ['background', 'foreground', 'card', 'card-foreground', 'popover', 'popover-foreground', 'primary', 'primary-foreground',
  'secondary', 'secondary-foreground', 'muted', 'muted-foreground', 'accent', 'accent-foreground', 'destructive', 'border', 'input', 'ring'];

// ---------- fonts ----------
export const SAFE = { ko: ['Noto Sans KR', 'hangul'], ja: ['Noto Sans JP', 'kana'], 'zh-TW': ['Noto Sans TC', 'han'], 'zh-CN': ['Noto Sans SC', 'han'], en: ['Noto Sans', 'latin'] };
const gf = (family) => `https://fonts.googleapis.com/css2?family=${family.trim().replace(/ /g, '+')}:wght@400;500;600;700&display=swap`;
// Non-Google faces brand-look knows how to load as themselves (their own published CSS). Anything else is not loaded.
const KNOWN_CSS = {
  Inter: 'https://rsms.me/inter/inter.css',
  'Pretendard Variable': 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css',
};

// ---------- contrast (WCAG 2.x) ----------
const HEX = /^#[0-9a-f]{6}$/i;
const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const lin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const lum = (h) => { const [r, g, b] = rgb(h).map(lin); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
export const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
// The pairs a shadcn screen draws first; the CSS comment line reports these (design doc §3 examples).
export const PAIRS = [['foreground', 'background'], ['muted-foreground', 'background'], ['muted-foreground', 'muted'],
  ['primary-foreground', 'primary'], ['card-foreground', 'card'], ['destructive', 'background']];

const hsl = (h) => {
  const [r, g, b] = rgb(h); const mx = Math.max(r, g, b), mn = Math.min(r, g, b); const l = (mx + mn) / 2;
  if (mx === mn) return `0 0% ${+(l * 100).toFixed(1)}%`;
  const d = mx - mn; const s = d / (1 - Math.abs(2 * l - 1));
  const hh = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return `${+((hh * 60 + 360) % 360).toFixed(1)} ${+(s * 100).toFixed(1)}% ${+(l * 100).toFixed(1)}%`;
};

// --format auto: shadcn v3 keeps bare HSL channels (`--primary: 222.2 47.4% 11.2%`) and reads hsl(var(--primary));
// v4 keeps oklch()/hex and reads var(--primary). shadcn shows up as components.json, not as a dependency.
export function detectFormat(cwd = process.cwd()) {
  const cj = path.join(cwd, 'components.json');
  if (!existsSync(cj)) return { format: 'hex', why: 'no components.json; hex works wherever the variable is read with var()' };
  let css = null;
  try { css = JSON.parse(readFileSync(cj, 'utf8')).tailwind?.css ?? null; } catch { /* unreadable components.json */ }
  const file = css ? path.join(cwd, css) : null;
  if (!file || !existsSync(file)) return { format: 'hex', why: 'components.json names no readable globals.css' };
  const v = /--primary:\s*([^;]+);/.exec(readFileSync(file, 'utf8'))?.[1]?.trim() ?? '';
  if (/^\d+(\.\d+)?\s+\d+(\.\d+)?%\s+\d+(\.\d+)?%$/.test(v)) return { format: 'hsl', why: `${css} keeps --primary as bare HSL channels (shadcn v3)` };
  return { format: 'hex', why: `${css} keeps --primary as ${v.split('(')[0] || 'a literal'} (shadcn v4 reads var())` };
}

// ---------- the mapping ----------
export function brandTokens(target, { format = 'auto', lang = 'ko', assign = false, cwd = process.cwd() } = {}) {
  const isFile = target.endsWith('.md');
  const file = isFile ? path.resolve(cwd, target) : refCandidates(target, cwd).find(existsSync);
  if (!file || !existsSync(file)) throw new TokensError(`reference ${target}: DESIGN.md not found in the resolution order`);
  const id = isFile ? path.basename(path.dirname(file)) : target;
  const qualityFile = qualityCandidates(file, cwd).find(existsSync);
  const quality = qualityFile ? JSON.parse(readFileSync(qualityFile, 'utf8')).items.find((x) => x.id === id) : null;
  if (!quality || quality.status !== 'verified_v2') throw new TokensError(`reference ${id}: status ${quality?.status ?? 'unknown'}; /brand-look draws only from verified_v2 references`);

  const md = readFileSync(file, 'utf8');
  const fm = parseFrontmatter(md);
  const C = fm.colors ?? {};
  const R = fm.rounded ?? {};
  const COMP = fm.components ?? {};
  const fmt = format === 'auto' ? detectFormat(cwd) : { format, why: 'set by --format' };
  // Caption name: the H1 gloss the reference ships ("… of Baemin (배달의민족)") equals the registry displayName on Korean
  // references; the Hangul one is used for --lang ko, the frontmatter name otherwise.
  const h1 = /^# Design System Inspiration of (.+)$/m.exec(md)?.[1]?.trim() ?? fm.name ?? id;
  const gloss = /\(([^)]*[가-힯][^)]*)\)\s*$/.exec(h1)?.[1];
  const name = fm.name ?? h1.replace(/\s*\([^)]*\)\s*$/, '');
  const displayName = lang === 'ko' && gloss ? gloss : name;
  const surface = typeof fm.description === 'string' ? fm.description.split(/(?<=\.)\s/)[0].replace(/\.$/, '') : null;

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
  const surfaceC = pickColor(SURFACE_COLOR_KEYS);
  const border = pickColor(LINE_KEYS);
  const slots = {
    background,
    foreground,
    card: fromComp(cardComp, 'backgroundColor') ?? surfaceC,
    'card-foreground': foreground,
    popover: background,
    'popover-foreground': foreground,
    primary,
    'primary-foreground': pickColor(ON_PRIMARY_KEYS) ?? fromComp(primaryButton, 'textColor'),
    secondary: surfaceC,
    'secondary-foreground': foreground,
    muted: surfaceC,
    'muted-foreground': pickColor(META_KEYS),
    accent: surfaceC,
    'accent-foreground': foreground,
    destructive: pickColor(DANGER_KEYS),
    border,
    input: border,
    ring: fromComp(primaryButton, 'focus') ?? pickColor(RING_KEYS),
  };
  // Half-pair guard: card/popover/secondary/accent-foreground are FG_KEYS copies, and the reference declares that colour
  // for its canvas, not for a surface it never declared. With the surface omitted the screen keeps its own surface, so
  // the screen keeps its own text colour on it too (omitted as a group). --muted-foreground (a declared META role used on
  // the canvas) and --primary-foreground (a declared on-colour or the primary button's text) are not copies and stay.
  for (const [fg, bg] of [['card-foreground', 'card'], ['popover-foreground', 'popover'], ['secondary-foreground', 'secondary'], ['accent-foreground', 'accent']])
    if (!slots[bg]) slots[fg] = null;
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
  const [safeFace, script] = SAFE[lang] ?? SAFE.ko;
  const font = { case: null, role: roleKey ? `fonts.roles.${roleKey}` : null, face, stack: null, from: null, loads: [], labels: [], caption: null, expect: null };
  const withBefore = (stack, f) => stack.replace(/,\s*(sans-serif|serif|monospace)\s*$/, `, "${f}", $1`);
  if (!face) {
    font.case = 'none';
    font.labels.push('no UI face declared: --font-sans omitted (your font stays)');
    font.caption = 'no UI face declared; the screen keeps its font';
  } else if (/^system$/i.test(face)) {
    font.case = 'C';
    font.stack = 'system-ui, sans-serif';
    font.from = font.role;
    font.labels.push('brand UI face: the OS system family (per reference), not a named face');
    font.caption = 'OS system family (per reference)';
    font.expect = { latin: { system: true }, [script]: { system: true } };
  } else if (faceMeta?.distribution === 'public') {
    font.case = 'A';
    font.stack = bodyStack ?? `"${face}", sans-serif`;
    font.from = bodyStack ? 'typography.body.fontFamily' : font.role;
    font.labels.push(`brand face: ${face} (${faceMeta.licence ?? 'public'}), loads as itself from ${faceMeta.source ?? 'its published source'}`);
    if (KNOWN_CSS[face]) font.loads.push(KNOWN_CSS[face]);
    else font.labels.push(`${face}: brand-look has no load URL for it; renders only where installed`);
    font.caption = `${face}, brand face`;
    font.expect = { latin: { families: [face] } };
    const scripts = Array.isArray(faceMeta.scripts) ? faceMeta.scripts : [];
    if (script !== 'latin' && !scripts.includes(script)) {
      // A Latin-only brand face on a Korean screen: Hangul would fall to the OS face, unlabelled (G3).
      font.stack = withBefore(font.stack, safeFace);
      font.loads.push(gf(safeFace));
      font.from += ` + safe default (${script})`;
      font.labels.push(`${script}: ${face} has no ${script} glyphs; ${script} renders in ${safeFace}: safe default (not the brand face)`);
      font.caption += ` · ${script === 'hangul' ? 'Hangul' : script}: ${safeFace}, safe default (not the brand face)`;
      font.expect[script] = { families: [safeFace] };
    }
  } else if (faceMeta?.substitutes) {
    font.case = 'B';
    font.stack = bodyStack ?? [`"${face}"`, ...Object.values(faceMeta.substitutes).map((s) => `"${s.family}"`), 'sans-serif'].join(', ');
    font.from = bodyStack ? 'typography.body.fontFamily' : `${font.role} + substitutes`;
    font.labels.push(`brand face: ${face}, not installable (distribution: ${faceMeta.distribution ?? 'unknown'}); kept first in the stack as metadata`);
    font.expect = {};
    const subs = [];
    for (const [s, sub] of Object.entries(faceMeta.substitutes)) {
      font.labels.push(`${s}: ${sub.family}, ${sub.label}`);
      subs.push(sub.family);
      font.expect[s] = { families: [sub.family] };
      if (sub.provider === 'google') font.loads.push(gf(sub.family));
      else {
        // Not a Google face: loaded from its own published CSS when brand-look knows it, and in any case the reference's
        // safe default for that script goes behind it, loaded and labelled. Without it the script could fall to the OS
        // face, unlabelled (G3).
        if (KNOWN_CSS[sub.family]) font.loads.push(KNOWN_CSS[sub.family]);
        const safe = fm.fonts?.safeDefaults?.[s] ?? [];
        font.labels.push(`${sub.family}: provider ${sub.provider}, ${KNOWN_CSS[sub.family] ? `loaded from ${new URL(KNOWN_CSS[sub.family]).host}` : 'not auto-installed'}; if absent, ${s} renders in ${safe.join(', ') || 'the OS face (no safe default declared)'}${safe.length ? ': safe default (not the brand face)' : ''}`);
        for (const f of safe) {
          font.loads.push(gf(f));
          font.stack = withBefore(font.stack, f);
          font.from = `${font.from} + fonts.safeDefaults.${s}`;
          font.expect[s].fallback = [...(font.expect[s].fallback ?? []), f];
        }
      }
    }
    font.caption = `${subs.join(' · ')}, substitute — not the brand face`;
  } else {
    font.case = 'D';
    const latin = lang === 'en' ? [] : ['Noto Sans'];
    font.stack = [`"${face}"`, `"${safeFace}"`, ...latin.map((f) => `"${f}"`), 'sans-serif'].join(', ');
    font.from = font.role;
    font.labels.push(`brand face: ${face}, no measured substitute (Substitute: none chosen)`);
    font.labels.push(`renders in ${[safeFace, ...latin].join(' + ')}: safe default (not the brand face)`);
    for (const f of [safeFace, ...latin]) font.loads.push(gf(f));
    font.caption = `${safeFace}, safe default (not the brand face)`;
    // Latin glyphs come from the first safe face that has them (Noto Sans KR carries Latin).
    font.expect = { latin: { families: [safeFace, ...latin] }, [script]: { families: [safeFace] } };
  }

  const t = {
    id, file: path.relative(cwd, file) || file, absFile: file, status: quality.status, verified_at: quality.verified_at,
    name, displayName, surface, format: fmt.format, formatWhy: fmt.why, lang,
    colors: Object.fromEntries(Object.entries(C).filter(([, v]) => typeof v === 'string' && HEX.test(v.trim())).map(([k, v]) => [k, v.trim().toLowerCase()])),
    componentPairs: Object.entries(COMP).map(([k, c]) => ({ from: `components.${k}`, bg: String(c?.backgroundColor ?? '').match(/#[0-9a-f]{6}/i)?.[0]?.toLowerCase(), fg: String(c?.textColor ?? '').match(/#[0-9a-f]{6}/i)?.[0]?.toLowerCase() })).filter((p) => p.bg && p.fg),
    primaryButton: primaryButton ? { from: `components.${primaryButton[0]}`, backgroundColor: primaryButton[1].backgroundColor ?? null, height: primaryButton[1].height ?? null, rounded: primaryButton[1].rounded ?? null } : null,
    slots, radius, pillButton, radiusScale: R, font, assigned: [],
  };
  t.contrast = contrastOf(t, PAIRS);
  t.suggestions = suggest(t, PAIRS);
  if (assign) applySuggestions(t, t.suggestions);
  t.omitted = [...SLOT_NAMES.filter((k) => !t.slots[k]).map((k) => `--${k}`), ...(radius ? [] : ['--radius']), ...(font.stack ? [] : ['--font-sans'])];
  t.filled = SLOT_NAMES.filter((k) => t.slots[k]).length;
  return t;
}

// ---------- pair cause, contrast, reassignment ----------
const keyOf = (s) => (s?.from?.startsWith('colors.') ? s.from.slice(7) : null);
const valueOf = (t, slot, kept) => t.slots[slot]?.v ?? kept?.[slot] ?? null;

// inherited = the reference itself declares this pair: the same component's fill and text, an on-X / X role pair, or a
// declared text colour on the declared canvas. mapping = our assignment made it, including a pair with an omitted side.
export function pairCause(t, fg, bg) {
  const F = t.slots[fg], B = t.slots[bg];
  if (!F && !B) return { cause: 'screen', why: 'both sides are omitted: the unthemed screen paints this pair itself' };
  if (!F || !B) return { cause: 'mapping', why: `${!F ? `--${fg}` : `--${bg}`} is omitted, so the screen's own value sits next to a brand value` };
  const comp = t.componentPairs.find((p) => p.bg === B.v && p.fg === F.v);
  if (comp) return { cause: 'inherited', why: `${comp.from} declares ${F.v} on ${B.v}` };
  const fk = keyOf(F), bk = keyOf(B);
  if (fk && bk && (fk === `on-${bk}` || (ON_PRIMARY_KEYS.includes(fk) && bg === 'primary')))
    return { cause: 'inherited', why: `colors.${fk} is declared for colors.${bk}` };
  if (fk && bk && TEXT_ON_CANVAS_KEYS.has(fk) && CANVAS_KEYS.includes(bk))
    return { cause: 'inherited', why: `colors.${fk} is a declared text colour on the declared canvas colors.${bk}` };
  return { cause: 'mapping', why: `${F.from} on ${B.from} is a pair brand-look assigned; the reference does not declare it` };
}

export function contrastOf(t, pairs, kept = null) {
  return pairs.filter(([f, b]) => valueOf(t, f, kept) && valueOf(t, b, kept)).map(([f, b]) => {
    const r = ratio(valueOf(t, f, kept), valueOf(t, b, kept));
    const { cause, why } = pairCause(t, f, b);
    return { pair: `${f} on ${b}`, fg: f, bg: b, fgValue: valueOf(t, f, kept), bgValue: valueOf(t, b, kept),
      kept: [f, b].filter((s) => !t.slots[s]), ratio: +r.toFixed(2), body: r >= 4.5 ? 'PASS' : 'FAIL', large: r >= 3 ? 'PASS' : 'FAIL',
      ...(r < 4.5 ? { cause, why } : {}) };
  });
}

// Suggestion rule (also printed in report.md): only for mapping FAILs (an inherited pair is the reference's own and stays
// as measured; a screen pair is the unthemed screen's). Try the omitted side first if there is one, then the other side.
// Candidates are declared colors.* hex values of the slot's own kind: --destructive only danger keys, --primary only
// primary keys, a surface only canvas/surface keys (the page canvas itself is never moved), a text slot role keys or single-word keys (so corporate-*, baemin-*,
// on-dark and other surface-prefixed keys never cross evidence domains). The winner reaches 4.5:1 against every colour
// the slot sits with on the screen and has the smallest such ratio (the least change in hierarchy). No value is
// lightened, darkened or mixed.
const SURFACE_SLOTS = new Set(['background', 'card', 'popover', 'secondary', 'muted', 'accent']);
const kindOk = (slot, k) => slot === 'destructive' ? DANGER_KEYS.includes(k)
  : slot === 'primary' ? PRIMARY_KEYS.includes(k)
    : slot === 'ring' ? [...RING_KEYS, ...PRIMARY_KEYS].includes(k)
      : SURFACE_SLOTS.has(slot) ? [...CANVAS_KEYS, ...SURFACE_COLOR_KEYS].includes(k)
        : !DANGER_KEYS.includes(k) && !PRIMARY_KEYS.includes(k) && (ROLE_KEYS.has(k) || /^[a-z]+$/.test(k));
export function suggest(t, pairs, kept = null) {
  const out = [];
  const moved = new Set(), tried = new Set();
  for (const c of contrastOf(t, pairs, kept)) {
    if (c.body === 'PASS' || c.cause !== 'mapping') continue;
    // a moved slot clears 4.5:1 against all its partners, so every pair it is in is covered
    if (moved.has(c.fg) || moved.has(c.bg)) continue;
    // the page canvas is never moved to rescue one pair
    const sides = (!t.slots[c.bg] ? [c.bg, c.fg] : [c.fg, c.bg]).filter((x) => x !== 'background' && !tried.has(x));
    if (!sides.length) continue;
    let pick = null;
    for (const move of sides) {
      // every pair the moved slot takes part in on this screen, with the other side's current value
      const partners = pairs.filter(([f, b]) => f === move || b === move).map(([f, b]) => valueOf(t, f === move ? b : f, kept)).filter(Boolean);
      const scored = Object.entries(t.colors).filter(([k, v]) => v !== valueOf(t, move, kept) && kindOk(move, k))
        .map(([k, v]) => ({ k, v, min: Math.min(...partners.map((p) => ratio(v, p))) })).filter((x) => x.min >= 4.5).sort((a, b) => a.min - b.min);
      if (scored[0]) { pick = { move, best: scored[0] }; break; }
    }
    if (pick) moved.add(pick.move); else for (const x of sides) tried.add(x);
    out.push(pick
      ? { slot: pick.move, from: t.slots[pick.move]?.from ?? 'omitted (screen value kept)', to: `colors.${pick.best.k}`, value: pick.best.v, minRatio: +pick.best.min.toFixed(2), for: c.pair }
      : { slot: sides.join(' / '), from: sides.map((x) => t.slots[x]?.from ?? 'omitted').join(' / '), to: null, for: c.pair, note: `no declared colour of the right kind reaches 4.5:1 against every partner of --${sides.join(' or --')}` });
  }
  return out;
}

export function applySuggestions(t, suggestions) {
  for (const s of suggestions) {
    if (!s.to) continue;
    t.assigned.push({ slot: s.slot, was: t.slots[s.slot]?.from ?? 'omitted', now: s.to });
    t.slots[s.slot] = { v: s.value, from: `${s.to} (reassigned by --assign; was ${t.slots[s.slot]?.from ?? 'omitted'})` };
  }
  t.contrast = contrastOf(t, PAIRS);
  t.filled = SLOT_NAMES.filter((k) => t.slots[k]).length;
  t.omitted = [...SLOT_NAMES.filter((k) => !t.slots[k]).map((k) => `--${k}`), ...(t.radius ? [] : ['--radius']), ...(t.font.stack ? [] : ['--font-sans'])];
}

// ---------- output ----------
export function renderCss(t, { format = t.format } = {}) {
  const val = (v) => (format === 'hsl' ? hsl(v) : v);
  const out = [];
  out.push(`/* omd-brand-look · ${t.id} · ${t.file} · ${t.status} ${t.verified_at} */`);
  for (const url of t.font.loads) out.push(`@import url("${url}");`);
  out.push(':root:root {');
  for (const [k, s] of Object.entries(t.slots)) if (s) out.push(`  --${k}: ${val(s.v)}; /* ${s.from} */`);
  if (t.radius) out.push(`  --radius: calc(${t.radius.v} + 2px); /* rounded-md renders ${t.radius.v} = ${t.radius.from}; sm/lg/xl are shadcn offsets */`);
  for (const [k, v] of Object.entries(t.radiusScale)) out.push(`  --radius-ref-${k}: ${v}; /* rounded.${k} */`);
  if (t.font.stack) out.push(`  --font-sans: ${t.font.stack}; /* ${t.font.from ?? t.font.role} */`);
  out.push('}');
  if (t.pillButton) out.push(`/* buttons · ${t.pillButton.from} is a pill (${t.pillButton.v}); not used for --radius, buttons need rounded-full */`);
  for (const l of t.font.labels) out.push(`/* font · ${l} */`);
  out.push(`/* omitted, your theme keeps: ${t.omitted.length ? t.omitted.join(' ') : 'none'} */`);
  out.push('/* contrast (WCAG): ' + t.contrast.map((c) => `${c.pair} ${c.ratio}:1 body ${c.body}`).join(' · ') + ' */');
  for (const s of t.suggestions) out.push(s.to
    ? `/* suggestion (${t.assigned.length ? 'applied' : 'not applied; --assign'}): --${s.slot} ← ${s.to} (${s.value}), ${s.minRatio}:1 for ${s.for}; was ${s.from} */`
    : `/* suggestion: --${s.slot} for ${s.for}: ${s.note} */`);
  if (format === 'hsl') out.push(`/* format hsl: ${t.formatWhy} */`);
  return out.join('\n');
}

// ---------- CLI ----------
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const args = process.argv.slice(2);
  const VALUE_FLAGS = new Set(['--format', '--lang']);
  const flag = (k, d) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
  const target = args.find((a, i) => !a.startsWith('--') && !VALUE_FLAGS.has(args[i - 1]));
  if (!target) { console.error('usage: node tokens.mjs <id | DESIGN.md> [--format auto|hex|hsl] [--lang ko|ja|zh-TW|zh-CN|en] [--assign] [--json]'); process.exit(2); }
  try {
    const t = brandTokens(target, { format: flag('format', 'auto'), lang: flag('lang', 'ko'), assign: args.includes('--assign') });
    if (args.includes('--json')) { const { absFile, ...rest } = t; console.log(JSON.stringify(rest, null, 2)); }
    else console.log(renderCss(t));
  } catch (e) {
    console.error(e.message);
    process.exit(e.code ?? 1);
  }
}
