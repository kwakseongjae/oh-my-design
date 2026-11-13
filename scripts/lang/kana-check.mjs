#!/usr/bin/env node
/**
 * kana check: deterministic, dependency-free scan for Japanese typography defects in HTML, CSS,
 * JSX/TSX and Tailwind class strings. Node >= 18. Development copy for the Japanese (kana) skill;
 * it is self-contained so it can move into the skill unchanged.
 *
 *   node kana-check.mjs [--json|--format=github] [--strict] [--assume-ja] <file-or-dir>...
 *   node kana-check.mjs --self-test
 *
 * Exit code: 0 after a scan (every finding is WARN or FYI); 1 with --strict when any WARN exists, or
 * when --self-test fails; 2 on a usage error. There is no BLOCK level: nothing checked here is a
 * requirement of a ratified standard. JLREQ is a W3C Working Group Note about book composition, CSS
 * Text 3 a Candidate Recommendation Draft, CSS Text 4 a Working Draft; the rest is a government design
 * system (デジタル庁 DADS), W3C i18n guidance or vendor documentation.
 *
 * Rule IDs and the source of every finding come from the kana rule draft (rules.v2.md, JT-01 … JT-32).
 * Implemented, each only as far as that rule's Test line goes: JT-01, JT-05, JT-07, JT-09, JT-12,
 * JT-13, JT-14, JT-22, JT-25, JT-26, JT-32. Every finding carries the source and its standing.
 * Not checked, because the rule draft lists them under "Unsourced for web:" or has no web test:
 * `palt` on html/body by itself, line-start or line-end punctuation, line length, <ruby> structure,
 * an <em>/<i> italic reset, @font-face unicode-range, book-composition values (JT-03, 04, 06, 10, 31).
 *
 * Heuristic by design: it reads source text, not rendered pages. It cannot see which font renders,
 * how lines actually wrap, the cascade, or styles applied at runtime. Japanese checks run only when at
 * least one scanned file contains kana or kanji ([぀-ヿ㐀-鿿], which Chinese text also matches), or with
 * --assume-ja. A tolerant markup index traces each selector, class and style attribute to the scanned
 * elements and reads their text nodes (attributes excluded); a rule whose every reached element holds
 * non-Japanese text is skipped. Untraceable rules (no matching markup, dynamic text, components) are
 * judged as if they reach Japanese text, and JT-14 / JT-26 drop to FYI there. Tailwind is read from
 * literal class strings only: its default line height per text size (text-xs ≈1.33, text-sm ≈1.43) is
 * not checked, only explicit leading-* and text-size/leading shorthands. Body, heading and control roles
 * come from selector names, tags and font size, so a rule on an unrecognised selector is not judged as
 * body text by JT-01 / JT-05.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCAN_EXT = new Set(['.html', '.htm', '.css', '.scss', '.sass', '.less', '.jsx', '.tsx', '.js', '.ts', '.mjs', '.cjs', '.vue', '.svelte', '.astro', '.mdx']);
const STYLE_EXT = new Set(['.css', '.scss', '.sass', '.less']);
const EMBED_STYLE_EXT = new Set(['.html', '.htm', '.vue', '.svelte', '.astro']);
const MARKUP_EXT = new Set(['.html', '.htm', '.jsx', '.tsx', '.js', '.vue', '.svelte', '.astro', '.mdx']);
const SKIP_DIR = new Set(['node_modules', '.git', 'dist', 'build', 'out', '.next', '.nuxt', '.svelte-kit', '.turbo', '.vercel', '.cache', 'coverage', 'vendor']);
const JA = /[぀-ヿ㐀-鿿]/; // hiragana, katakana, CJK Ext A and Unified ideographs
const EPS = 1e-9;
const RANK = { WARN: 2, FYI: 1 };

// What each rule's source says and how strong it is (rules.v2.md, "Strength:" lines). One sentence each.
const SOURCE = {
  'JT-01': 'デジタル庁 design system (DADS) Typography, 行高: recommends keeping body text in reading content at 1.5 times the font size or more (government recommendation).',
  'JT-05': 'DADS Typography, 文字間隔: its letter-spacing tokens are 0, 0.01em and 0.02em and none is negative; DADS states tokens, not a limit (government design system). The rule applies to a project that follows DADS; no source sets a letter-spacing value for Japanese web text in general, so elsewhere this is a note, not a finding.',
  'JT-07': 'OpenType feature registry, palt (Microsoft Typography, vendor documentation): palt is mutually exclusive with chws, fwid, halt, hwid, pwid, qwid and twid, which should be turned off when it is applied.',
  'JT-09': 'JLREQ §3.1.7 (W3C Working Group Note on book composition) keeps small kana, ー and 々 off line starts but notes that many books allow them, and CSS Text 3 §5.2 (Candidate Recommendation Draft) forbids those breaks under normal and strict and allows them under loose: a choice to review, not a defect.',
  'JT-12': 'Derived from the CSS Text 3 definition (Candidate Recommendation Draft): anywhere puts a break opportunity around every character, punctuation included, so it also drops the line-start limits reviewed under JT-09; the advice to keep it off Japanese body text is ours.',
  'JT-13': 'Derived from CSS Text 3 §5.1 (Candidate Recommendation Draft): under keep-all "sequences of CJK characters do not break", and CSS Text 3 marks Japanese break points with <wbr> or U+200B; that long text then overflows is our reading.',
  'JT-14': 'Chrome for Developers, "CSS i18n features" (vendor documentation): lang="ja" is required for auto-phrase; browser-compat-data lists it in Chrome and Edge only, with Safari in preview; the value is defined in CSS Text 4 (Working Draft).',
  'JT-22': 'DADS Typography (government recommendation): its example stack names Noto Sans JP before sans-serif, and DADS does not restrict OS system fonts.',
  'JT-25': 'W3C Internationalization, "Why use the language attribute?" (W3C i18n guidance): declare the language; some browsers choose Japanese fonts, and so Japanese glyph forms, from it when the author sets no font.',
  'JT-26': 'DADS Typography, イタリック (government recommendation): Japanese fonts usually have no italic, so italic shows the regular face slanted and reads worse; avoid it unless there is a reason.',
  'JT-32': 'MDN, text-overflow (vendor documentation): text-overflow does not force an overflow; overflow and white-space must also be set.',
};

// ---- fonts (JT-22) ------------------------------------------------------------------------
// Faces this checker recognises as Japanese. One list: extend it here. Names are matched after
// hyphens, underscores and plus signs become spaces; any face named in Japanese script with
// ゴシック or 明朝 counts, as does a name ending in " JP".
const JA_FACE = /noto ?(sans|serif) ?(cjk ?)?jp\b|hiragino|ヒラギノ|yu ?gothic|游ゴシック|yu ?mincho|游明朝|meiryo|メイリオ|biz ?ud ?p?(gothic|mincho)|\bm ?plus|zen ?(kaku ?gothic|maru ?gothic|old ?mincho)|line ?seed ?jp|ibm ?plex ?sans ?jp|\bms ?p?(gothic|mincho)|ゴシック|明朝|(^|\s)jp$/i;
const FAMILY_KEYWORD = new Set(['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy', 'fangsong']);
const SYSTEM_KEYWORD = new Set(['system-ui', 'ui-sans-serif', 'ui-serif', 'ui-rounded', '-apple-system', 'blinkmacsystemfont']);
const CSS_WIDE = new Set(['inherit', 'initial', 'unset', 'revert', 'revert-layer']);
const MONO_FACE = /mono|menlo|monaco|consolas|courier/i;
const IGNORE_FACE = /^(emoji|math)$|emoji|segoe ui symbol|twemoji|icon|awesome|material (symbols|icons)|glyph/i;

// ---- selector roles -----------------------------------------------------------------------
const HEADING_TAG = /(^|[\s,>+~(])h[1-6]\b/i;
const HEADING_SEL = /title|headline|heading|hero|display|jumbotron/i;
const CONTROL_SEL = /button|\.btn\b|badge|chip|\btag\b|pill|\btabs?\b|\bnav|input|select|\blabel\b|icon|avatar/i;
const BODY_SEL = /(^|[\s,>+~(])(html|body|p|li|td|th|dd|dt|small|caption|figcaption|blockquote|article|main|textarea)\b|:root\b|\.(body|text|desc|description|content|caption|paragraph|copy|lead|summary|note|prose|article)\b/i;

function roleOf(selector, sizePx) {
  if (HEADING_TAG.test(selector)) return 'heading';
  if (CONTROL_SEL.test(selector)) return 'control'; // DADS sets one-line component text at 100% (JT-02)
  if (sizePx != null && sizePx >= 20) return 'heading';
  if (HEADING_SEL.test(selector)) return 'heading';
  if (BODY_SEL.test(selector)) return 'body';
  return 'unknown';
}

// ---- Tailwind scales (tailwindcss.com/docs, v4; same named values in v3) -------------------
const TW_SIZE = { xs: 12, sm: 14, base: 16, lg: 18, xl: 20, '2xl': 24, '3xl': 30, '4xl': 36, '5xl': 48, '6xl': 60, '7xl': 72, '8xl': 96, '9xl': 128 };
const TW_LEADING = { none: 1, tight: 1.25, snug: 1.375, normal: 1.5, relaxed: 1.625, loose: 2 };
const TW_TRACKING = { tighter: -0.05, tight: -0.025, normal: 0, wide: 0.025, wider: 0.05, widest: 0.1 };

// ---- small parsers ------------------------------------------------------------------------
function splitTop(s) {
  const out = [];
  let cur = '';
  let q = null;
  let depth = 0;
  for (const ch of s) {
    if (q) { cur += ch; if (ch === q) q = null; continue; }
    if (ch === '"' || ch === "'") { q = ch; cur += ch; continue; }
    if (ch === '(') depth++;
    if (ch === ')') depth = Math.max(0, depth - 1);
    if (ch === ',' && depth === 0) { out.push(cur); cur = ''; continue; }
    cur += ch;
  }
  out.push(cur);
  return out.map((x) => x.trim()).filter(Boolean);
}

function resolveVars(value, props) {
  let v = value;
  for (let i = 0; i < 6 && v.includes('var('); i++) {
    v = v.replace(/var\(\s*(--[\w-]+)\s*(?:,\s*([^()]*))?\)/g, (_, name, fb) => {
      if (props.has(name)) return props.get(name);
      if (fb != null && fb.trim()) return fb;
      return `__UNRESOLVED:${name}__`;
    });
  }
  return v;
}

function toPx(v) {
  const m = /^(-?\d*\.?\d+)(px|rem|em|pt)$/.exec(String(v).trim());
  if (!m) return null;
  const n = parseFloat(m[1]);
  if (m[2] === 'px') return n;
  if (m[2] === 'pt') return (n * 4) / 3;
  return n * 16;
}

function lhRatio(v, sizePx) {
  const s = String(v).trim();
  let m = /^(\d*\.?\d+)$/.exec(s);
  if (m) return parseFloat(m[1]);
  m = /^(\d*\.?\d+)%$/.exec(s);
  if (m) return parseFloat(m[1]) / 100;
  m = /^(\d*\.?\d+)em$/.exec(s);
  if (m) return parseFloat(m[1]);
  const px = toPx(s);
  return px != null && sizePx ? px / sizePx : null;
}

function lsValue(v) {
  const m = /^(-?\d*\.?\d+)(em|px|rem)?$/.exec(String(v).trim());
  return m ? parseFloat(m[1]) : null;
}

function parseFontShorthand(v) {
  const s = v.trim();
  if (CSS_WIDE.has(s.toLowerCase()) || s.startsWith('var(')) return null;
  const m = /(?:^|\s)(\d*\.?\d+(?:px|rem|em|pt|%)|xx-small|x-small|small|medium|large|x-large|xx-large|smaller|larger)(?:\s*\/\s*([^\s,]+))?\s+(.+)$/i.exec(s);
  return m ? { sizePx: toPx(m[1]), lh: m[2] || null, families: m[3] } : null;
}

// font-feature-settings → the set of features switched on ("palt", 'halt' 1, "pwid" on; 0 / off = off)
function featuresOn(value) {
  const on = new Set();
  for (const part of splitTop(value)) {
    const m = /^["']([a-z0-9]{4})["']\s*(\S+)?$/i.exec(part.trim());
    if (!m) continue;
    const v = (m[2] || '1').toLowerCase();
    if (v !== '0' && v !== 'off') on.add(m[1].toLowerCase());
  }
  return on;
}

// ---- CSS blocks ---------------------------------------------------------------------------
function forEachBlock(css, cb) {
  let text = css.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));
  const re = /([^{}]*)\{([^{}]*)\}/g;
  for (let pass = 0; pass < 64; pass++) {
    let hit = false;
    text = text.replace(re, (whole, sel, body, idx) => {
      hit = true;
      const cut = sel.lastIndexOf(';') + 1; // keep parent declarations for the next pass
      cb(sel.slice(cut).trim(), body, idx + sel.length + 1);
      return whole.slice(0, cut) + whole.slice(cut).replace(/[^\n]/g, ' ');
    });
    if (!hit) break;
  }
}

function parseDecls(body, base) {
  const out = [];
  let start = 0;
  for (const part of body.split(';')) {
    const t = part.trim();
    const off = base + start + (part.length - part.trimStart().length);
    if (t.startsWith('@apply')) out.push({ prop: '@apply', value: t.slice(6).trim(), off });
    else {
      const c = t.indexOf(':');
      if (c > 0) {
        const raw = t.slice(0, c).trim();
        out.push({ prop: raw.startsWith('--') ? raw : raw.toLowerCase(), value: t.slice(c + 1).trim().replace(/\s*!important\s*$/i, ''), off });
      }
    }
    start += part.length + 1;
  }
  return out;
}

function cssRegions(file) {
  if (STYLE_EXT.has(file.ext)) return [{ css: file.text, base: 0 }];
  if (!EMBED_STYLE_EXT.has(file.ext)) return [];
  const out = [];
  const re = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(file.text))) out.push({ css: m[1], base: m.index + m[0].indexOf('>') + 1 });
  return out;
}

// ---- markup index: which text, and which lang, does a rule or a class reach? ----------------
// A tolerant scanner records every element in the markup files (tag, classes, id, lang, parent) and
// its descendant text nodes. Attributes never count as text. No cascade, no runtime.
const TS_TYPE_WORD = /^(number|string|boolean|bigint|symbol|object|any|unknown|never|void|null|undefined|keyof|typeof|readonly|infer)$/;
const VOID_TAG = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const STR_LIT = /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g;
const DYN = Symbol('dynamic');
const UNRESOLVED = { kinds: new Set(), unresolved: true, els: [], page: false };
const BREAK_MARK = /<wbr\b|​|&#8203;|&#x0*200b;|&ZeroWidthSpace;|\\u200b|\\u\{200b\}/i;

// A URL, an email address, or one long unbroken Latin/number token.
function isUrlish(s) {
  const t = String(s).trim();
  if (!t || JA.test(t) || /\s/.test(t)) return false;
  return /^(https?:\/\/|www\.)\S+$/i.test(t) || /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(t) || /^[\w-]+(\.[\w-]+)+\/\S*$/.test(t) || (t.length >= 20 && /[A-Za-z0-9]/.test(t));
}

function maskMarkup(text, ext) {
  const blank = (s) => s.replace(/[^\n]/g, ' '); // offsets and line numbers stay put
  let t = text.replace(/<!--[\s\S]*?-->/g, blank);
  if (ext === '.html' || ext === '.htm' || ext === '.vue' || ext === '.svelte' || ext === '.astro') {
    t = t.replace(/(<(script|style)\b[^>]*>)([\s\S]*?)(<\/\2\s*>)/gi, (w, open, _n, body, close) => open + blank(body) + close);
  }
  if (ext !== '.html' && ext !== '.htm') t = t.replace(/\/\*[\s\S]*?\*\//g, blank).replace(/(^|[\s;{}()])(\/\/[^\n]*)/g, (w, p, c) => p + blank(c));
  return t;
}

function attrClasses(attrs) {
  const out = new Set();
  const re = /(?:^|\s)(?:class|className|class:list)\s*=\s*(?:"([^"]*)"|'([^']*)'|\{)/g;
  let m;
  while ((m = re.exec(attrs))) {
    let src = m[1] ?? m[2];
    if (src == null) { // className={cn("a", ok && "b")} / {styles.card}
      let k = re.lastIndex;
      let d = 1;
      let q = null;
      for (; k < attrs.length && d > 0; k++) {
        const ch = attrs[k];
        if (q) { if (ch === q) q = null; continue; }
        if (ch === '"' || ch === "'" || ch === '`') q = ch;
        else if (ch === '{') d++;
        else if (ch === '}') d--;
      }
      const expr = attrs.slice(re.lastIndex, k - 1);
      src = [...expr.matchAll(STR_LIT)].map((x) => x[2].replace(/\$\{[^}]*\}/g, ' ')).join(' ');
      for (const x of expr.matchAll(/[A-Za-z_$][\w$]*\??\.([A-Za-z_][\w-]*)/g)) out.add(x[1]); // CSS Modules
    }
    for (const c of src.split(/\s+/)) if (c) out.add(c);
  }
  return out;
}

// lang="ja" → 'ja'; lang={"ja"} → 'ja'; lang={locale} → DYN; absent → null
function attrLang(attrs) {
  const m = /(?:^|\s)lang\s*=\s*(?:"([^"]*)"|'([^']*)'|\{\s*(?:(["'`])([^"'`]*)\3\s*\}|))/.exec(attrs);
  if (!m) return null;
  const v = m[1] ?? m[2] ?? m[4];
  return v == null ? DYN : v.trim();
}

function scanMarkup(abs, ext, raw) {
  const text = maskMarkup(raw, ext);
  const els = [];
  const segs = []; // text nodes in document order; expr = a {…} expression (JSX/Vue/Svelte)
  const stack = [];
  const pushSeg = (a, b, expr) => {
    const s = text.slice(a, b);
    if (!s.trim() || (expr && !s.replace(/[{}\s]/g, ''))) return; // blank, or an emptied {/* comment */}
    segs.push({ pos: a, s, expr, ja: JA.test(s) });
  };
  const addText = (a, b) => {
    let depth = 0;
    let from = a;
    let q = null;
    for (let k = a; k < b; k++) {
      const ch = text[k];
      if (depth > 0 && q) { if (ch === q) q = null; continue; }
      if (depth > 0 && (ch === '"' || ch === "'" || ch === '`')) { q = ch; continue; }
      if (ch === '{') { if (depth === 0) { pushSeg(from, k, false); from = k; } depth++; }
      else if (ch === '}') {
        if (depth <= 1) { pushSeg(from, k + 1, true); from = k + 1; }
        depth = Math.max(0, depth - 1);
      }
    }
    if (from < b) pushSeg(from, b, depth > 0);
  };
  let i = 0;
  let textFrom = 0;
  while (i < text.length) {
    const lt = text.indexOf('<', i);
    if (lt < 0) break;
    const m = /^<(\/?)([A-Za-z][\w:.-]*)(?=[\s/>])/.exec(text.slice(lt, lt + 80));
    if (!m) { i = lt + 1; continue; }
    // `useRef<HTMLDialogElement>(null)` or `Array<Item>` is a TypeScript generic, not a tag
    if (lt > 0 && /[\w$.]/.test(text[lt - 1]) && !m[1] && (/^[A-Z]/.test(m[2]) || TS_TYPE_WORD.test(m[2]))) {
      const close = text.indexOf('>', lt);
      if (close < 0 || !text.slice(lt + m[0].length, close).includes('=')) { i = lt + 1; continue; }
    }
    let j = lt + m[0].length;
    let q = null;
    let depth = 0;
    for (; j < text.length; j++) {
      const ch = text[j];
      if (q) { if (ch === q) q = null; continue; }
      if (ch === '"' || ch === "'" || (ch === '`' && depth > 0)) { q = ch; continue; }
      if (ch === '{') depth++;
      else if (ch === '}') depth = Math.max(0, depth - 1);
      else if (ch === '>' && depth === 0) break;
    }
    if (j >= text.length) break;
    addText(textFrom, lt);
    textFrom = i = j + 1;
    const name = m[2];
    if (m[1]) {
      const k = stack.map((e) => e.raw).lastIndexOf(name);
      if (k >= 0) while (stack.length > k) stack.pop().end = lt;
      continue;
    }
    const attrs = text.slice(lt + m[0].length, j);
    const idm = /(?:^|\s)id\s*=\s*(?:"([^"]*)"|'([^']*)')/.exec(attrs);
    // components, custom elements, slots and injected HTML render text this scan cannot see
    const opaque = /^[A-Z]/.test(name) || /[.-]/.test(name) || name === 'slot' || /dangerouslySetInnerHTML|v-html|innerHTML|\{@html/.test(attrs);
    const tag = name.toLowerCase();
    // a form field holds text typed at runtime: unknown, not empty, unless its placeholder or value shows Japanese
    const field = tag === 'input' || tag === 'textarea' || /(?:^|\s)contenteditable\b/i.test(attrs);
    const fieldJa = field && [...attrs.matchAll(/(?:^|\s)(?:placeholder|value|defaultValue)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].some((x) => JA.test(x[1] ?? x[2]));
    const el = { abs, raw: name, tag, cls: attrClasses(attrs), id: idm ? idm[1] ?? idm[2] : null, lang: attrLang(attrs), start: lt, tagEnd: j + 1, end: j + 1, parent: stack[stack.length - 1] || null, opaque, field, fieldJa, kind: null };
    if (opaque) for (const a of stack) a.opaque = true;
    if (field) for (const a of stack) { a.field = true; a.fieldJa ||= fieldJa; }
    els.push(el);
    if (!/\/\s*$/.test(attrs) && !VOID_TAG.has(el.tag)) { el.end = null; stack.push(el); }
  }
  addText(textFrom, text.length);
  for (const e of stack) e.end = text.length;
  return { abs, raw, text, els, segs };
}

// A bare identifier or member chain ({title}, {copy.lead}): look for its string literal in the same file.
function exprKind(src, raw) {
  const body = src.replace(/^[\s{]+|[\s}]+$/g, '');
  if (!/^[A-Za-z_$][\w$]*(?:\??\.[A-Za-z_$][\w$]*)*$/.test(body)) return 'unknown';
  const name = body.split(/\??\./).pop();
  const lit = new RegExp(`(?:^|[^\\w$.])${name.replace(/\$/g, '\\$')}\\s*[:=]\\s*(["'\`])((?:\\\\.|(?!\\1)[^\\\\\\n])*)\\1`).exec(raw);
  if (lit) {
    if (JA.test(lit[2])) return 'ja';
    if (isUrlish(lit[2].replace(/\$\{[^}]*\}/g, 'x'))) return 'urlish';
    return 'unknown';
  }
  return /(url|uri|href|link|e?mail)$/i.test(name) ? 'urlish' : 'unknown';
}

// 'ja' | 'urlish' | 'latin' (static, no Japanese) | 'empty' | 'unknown' (dynamic or opaque content)
function elementKind(rec, el) {
  if (el.kind) return el.kind;
  let lo = 0;
  let hi = rec.segs.length;
  while (lo < hi) { const mid = (lo + hi) >> 1; if (rec.segs[mid].pos < el.tagEnd) lo = mid + 1; else hi = mid; }
  let stat = '';
  const dyn = [];
  let kind = null;
  for (let k = lo; k < rec.segs.length && rec.segs[k].pos < el.end; k++) {
    const s = rec.segs[k];
    if (s.ja) { kind = 'ja'; break; }
    if (s.expr) dyn.push(s.s);
    else stat += s.s;
  }
  if (!kind) {
    const st = stat.replace(/&(nbsp|#160|#xa0);/gi, ' ').trim();
    const ks = dyn.map((src) => exprKind(src, rec.raw));
    if (ks.includes('ja')) kind = 'ja';
    else if (el.opaque) kind = 'unknown';
    else if (!dyn.length) kind = !st ? 'empty' : isUrlish(st) ? 'urlish' : 'latin';
    else kind = ks.every((x) => x === 'urlish') && (!st || isUrlish(st)) ? 'urlish' : 'unknown';
  }
  if (el.field && kind !== 'ja') kind = el.fieldJa ? 'ja' : 'unknown';
  el.kind = kind;
  return kind;
}

function compoundOf(s) {
  const unesc = (x) => x.replace(/\\(.)/g, '$1');
  const tag = /^([A-Za-z][\w-]*)/.exec(s);
  const id = /#((?:\\.|[\w-])+)/.exec(s);
  return { tag: tag ? tag[1].toLowerCase() : null, cls: [...s.matchAll(/\.((?:\\.|[\w-])+)/g)].map((x) => unesc(x[1])), id: id ? unesc(id[1]) : null };
}
const matchesCompound = (el, c) => (!c.tag || el.tag === c.tag) && c.cls.every((x) => el.cls.has(x)) && (!c.id || el.id === c.id);
function ancestorsMatch(p, chain, k) {
  if (k < 0) return true;
  for (let a = p; a; a = a.parent) if (matchesCompound(a, chain[k]) && ancestorsMatch(a.parent, chain, k - 1)) return true;
  return false;
}

// Selector list → the kinds of text its elements hold, and the elements. `A B` and `A > B` both need an
// A ancestor in the same file; pseudo-elements, attribute selectors and :is/:where/:has/:not stay
// unresolved. :root, *, html and body reach the whole page (page = true).
function resolveSelector(ctx, selector) {
  if (ctx.selCache.has(selector)) return ctx.selCache.get(selector);
  const kinds = new Set();
  const els = [];
  let unresolved = false;
  let page = false;
  for (const part of splitTop(selector)) {
    const bare = part.replace(/\\./g, 'x');
    if (!part || part.startsWith('@') || /::|:(before|after|first-line|first-letter)\b|\[|:(is|where|has|not|global|host|deep)\(/i.test(bare)) { unresolved = true; continue; }
    if (/:lang\(\s*["']?(?!ja\b)[a-z]/i.test(part)) { kinds.add('latin'); continue; } // scoped to another language
    const s = part.replace(/:[\w-]+(\([^()]*\))?/g, '').split(/\s*[+~]\s*/).pop(); // state pseudo-classes keep the same text
    const chain = s.replace(/\s*>\s*/g, ' ').trim().split(/\s+/).filter(Boolean).map(compoundOf);
    const subj = chain[chain.length - 1];
    if (!subj || (!subj.tag && !subj.cls.length && !subj.id) || subj.tag === 'html' || subj.tag === 'body') {
      page = true;
      if (ctx.hasJa) kinds.add('ja');
      else unresolved = true;
      const tag = subj && subj.tag === 'body' ? 'body' : 'html';
      for (const el of ctx.els) if (el.tag === tag) els.push(el);
      continue;
    }
    const hit = ctx.els.filter((el) => matchesCompound(el, subj) && ancestorsMatch(el.parent, chain, chain.length - 2));
    if (!hit.length) { unresolved = true; continue; }
    for (const el of hit) { els.push(el); kinds.add(elementKind(ctx.markup.get(el.abs), el)); }
  }
  const res = { kinds, unresolved, els, page };
  ctx.selCache.set(selector, res);
  return res;
}

// The element whose opening tag contains `off` (a class, style or style-object attribute).
function elementAt(ctx, abs, off) {
  const rec = ctx.markup.get(abs);
  let best = null;
  if (rec) for (const el of rec.els) { if (el.start > off) break; if (off < el.tagEnd) best = el; }
  return best;
}
function targetOf(ctx, el) {
  return el ? { kinds: new Set([elementKind(ctx.markup.get(el.abs), el)]), unresolved: false, els: [el], page: false } : UNRESOLVED;
}
const NON_JA_KIND = new Set(['latin', 'urlish', 'empty']);
const tJa = (t) => t.kinds.has('ja');
const tNonJa = (t) => !t.unresolved && t.kinds.size > 0 && [...t.kinds].every((k) => NON_JA_KIND.has(k));

// The language an element is in: its own or its nearest ancestor's lang in the same file, else the
// project's <html lang>. 'ja' | 'other' | 'unknown' (dynamic, or no root element was scanned).
function langOf(ctx, el) {
  for (let a = el; a; a = a.parent) {
    if (a.lang === DYN) return 'unknown';
    if (a.lang != null) return /^ja(-|$)/i.test(a.lang) ? 'ja' : 'other';
    if (a.tag === 'html') return 'other'; // the document's root has no lang
  }
  return ctx.rootLang || 'unknown';
}

function hasBreakMarks(ctx, el) {
  const rec = ctx.markup.get(el.abs);
  return BREAK_MARK.test(rec.text.slice(el.tagEnd, el.end));
}

// ---- findings -----------------------------------------------------------------------------
class Findings {
  constructor() { this.map = new Map(); }
  add(file, line, severity, rule, message) {
    const key = `${file}\u0000${line}\u0000${rule}`;
    const prev = this.map.get(key);
    if (!prev || RANK[severity] > RANK[prev.severity]) this.map.set(key, { file, line, severity, rule, message, source: SOURCE[rule] });
  }
  list() {
    const no = (r) => parseInt(r.slice(3), 10);
    return [...this.map.values()].sort((a, b) => (a.file < b.file ? -1 : a.file > b.file ? 1 : a.line - b.line || no(a.rule) - no(b.rule) || (a.message < b.message ? -1 : a.message > b.message ? 1 : 0)));
  }
}

// ---- JT-22: font stacks -------------------------------------------------------------------
function judgeStack(raw, props) {
  const items = [];
  for (const f of splitTop(resolveVars(raw.replace(/!important/gi, ''), props))) {
    const name = f.replace(/^['"]|['"]$/g, '').trim();
    const low = name.toLowerCase();
    const un = /^__UNRESOLVED:(--[\w-]+)__$/.exec(name);
    if (un) { // next/font style variables (--font-noto-sans-jp): judge by the name
      const hint = un[1].replace(/^--/, '').replace(/^font-?/, '').replace(/[-_]+/g, ' ').trim();
      if (JA_FACE.test(hint)) items.push(['ja', hint]);
      else if (MONO_FACE.test(hint)) items.push(['mono', hint]);
      else return null; // an unresolved custom property: cannot judge
      continue;
    }
    if (!name || CSS_WIDE.has(low)) return null;
    if (FAMILY_KEYWORD.has(low)) items.push([low === 'monospace' ? 'mono-keyword' : 'keyword', low]);
    else if (IGNORE_FACE.test(low)) continue; // emoji, symbol and icon faces sit anywhere
    else if (low === 'ui-monospace') items.push(['mono', name]);
    else if (SYSTEM_KEYWORD.has(low)) items.push(['system', name]);
    else if (JA_FACE.test(name.replace(/[-_+]+/g, ' '))) items.push(['ja', name]);
    else if (MONO_FACE.test(low)) items.push(['mono', name]);
    else items.push(['named', name]);
  }
  if (!items.length) return null;
  const kinds = new Set(items.map(([k]) => k));
  if ((kinds.has('mono') || kinds.has('mono-keyword')) && !kinds.has('keyword') && !kinds.has('system')) return null; // a code stack
  const gi = items.findIndex(([k]) => k === 'keyword' || k === 'mono-keyword');
  if (gi >= 0 && gi < items.length - 1) return `generic keyword ${items[gi][1]} is not last in the font stack (followed by ${items.slice(gi + 1).map(([, n]) => n).join(', ')})`;
  const before = gi >= 0 ? items.slice(0, gi) : items;
  if (before.some(([k]) => k === 'ja')) return null;
  const named = before.filter(([k]) => k === 'named' || k === 'mono').map(([, n]) => n);
  if (!named.length) return null; // system-ui / generic keywords only: DADS does not restrict system fonts
  return `font stack names no face this checker recognises as Japanese ${gi >= 0 ? 'before the generic keyword' : 'and has no generic keyword'} (named: ${named.join(', ')})`;
}

function checkStack(env, line, value) {
  const msg = judgeStack(value, env.ctx.props);
  if (msg) env.F.add(env.file, line, 'FYI', 'JT-22', msg);
}

// ---- the rules, over one declaration block ----------------------------------------------------
// Every input is reduced to declarations: a CSS rule, an inline style="", a JSX style={{}}, or a
// Tailwind class list (utilities mapped to the declarations they set). `target` is the text the block
// reaches (an object, or a function returning one); `near` is the fallback when that text cannot be
// traced (true for stylesheets; for markup, Japanese on this line or the next two).
const FONT_VAR = /^--font-(?!weight|size|feature|variation|stretch|style|synthesis|kerning|smoothing|optical)[\w-]+$/;
const LANG_JA_SEL = /:lang\(\s*["']?ja\b|\[\s*lang\s*[|^*]?=\s*["']?ja\b/i;

function checkBlock(env, selector, decls, lineOf, { target = null, near = true } = {}) {
  if (/^@(font-face|keyframes|-webkit-keyframes|page|property|counter-style)/i.test(selector)) return;
  let tMemo = null;
  const tgt = () => (tMemo ??= typeof target === 'function' ? target() : target || resolveSelector(env.ctx, selector));
  const reach = () => (tJa(tgt()) ? 'ja' : tNonJa(tgt()) ? 'none' : 'unknown');
  const maybeJa = () => reach() === 'ja' || (reach() === 'unknown' && near);
  const all = (p) => decls.filter((d) => d.prop === p);
  const last = (p) => all(p).pop() || null;
  const any = (props, re) => decls.some((d) => props.includes(d.prop) && re.test(d.value));
  const fontD = last('font');
  const short = fontD ? parseFontShorthand(fontD.value) : null;
  const sizeD = decls.filter((d) => d.prop === 'font-size' && !d.variant).pop() || last('font-size');
  const sizePx = sizeD ? toPx(sizeD.value) : short ? short.sizePx : null;
  const role = roleOf(selector, sizePx);
  const add = (line, sev, rule, msg) => env.F.add(env.file, line, sev, rule, msg);

  const onJa = (noun) => (reach() === 'ja' ? `Japanese ${noun}` : `${noun} not traced to markup (it may be Japanese)`);
  const say = (d) => (d.label ? `class ${d.label}` : `${d.prop}: ${d.value}`); // name what the author wrote
  const checkLh = (d, value, line) => { // JT-01
    const r = lhRatio(value, sizePx);
    if (r == null || r >= 1.5 - EPS || role !== 'body' || !maybeJa()) return;
    const shown = d.label ? `${say(d)} (≈${r.toFixed(2)})` : /^\d*\.?\d+$/.test(value) ? `line-height ${value}` : `line-height ${value} (≈${r.toFixed(2)})`;
    add(line, 'WARN', 'JT-01', `${shown} on body text, below 1.5`);
  };

  for (const d of decls) {
    const line = lineOf(d.off);
    const v = d.value;
    if (d.prop === 'line-height') checkLh(d, v, line);
    else if (d.prop === 'font' && short) {
      if (short.lh && !last('line-height')) checkLh(d, short.lh, line);
      if (maybeJa()) checkStack(env, line, short.families);
    } else if (d.prop === 'font-family') {
      const alias = /^var\(\s*(--font-[\w-]+)\s*\)$/.exec(v);
      if (alias && FONT_VAR.test(alias[1]) && env.ctx.props.has(alias[1])) continue; // reported where the variable is defined
      if (maybeJa()) checkStack(env, line, v);
    } else if (FONT_VAR.test(d.prop) && /[a-z]/i.test(v) && !/^[\d.]/.test(v)) checkStack(env, line, v); // consumed page-wide: not traced
    else if (d.prop === 'letter-spacing') { // JT-05
      const n = lsValue(v);
      if (n != null && n < 0 && role === 'body' && maybeJa()) add(line, 'FYI', 'JT-05', `${say(d)}: negative letter-spacing on ${onJa('body text')} (DADS has no negative token; outside a DADS project no source speaks to it)`);
    } else if (d.prop === 'font-feature-settings') { // JT-07
      const on = featuresOn(v);
      const clash = ['chws', 'fwid', 'halt', 'hwid', 'pwid', 'qwid', 'twid'].filter((f) => on.has(f));
      if (on.has('palt') && clash.length && reach() !== 'none') add(line, 'FYI', 'JT-07', `${say(d)} turns on palt together with ${clash.join(', ')}`);
    } else if (d.prop === 'line-break') { // JT-09, JT-12 (one finding: anywhere cites both)
      if (/\banywhere\b/.test(v) && maybeJa()) add(line, 'FYI', 'JT-12', `${say(d)} on ${onJa('text')}`);
      else if (/\bloose\b/.test(v) && role !== 'heading' && role !== 'control' && maybeJa()) add(line, 'FYI', 'JT-09', `${say(d)} on ${onJa('body text')}, which allows small kana, ー and iteration marks at the start of a line`);
    } else if (d.prop === 'word-break') {
      if (/\bkeep-all\b/.test(v)) checkKeepAll(env, line, `${say(d)} on ${onJa('text')}`, decls, tgt, maybeJa);
      else if (/\bauto-phrase\b/.test(v)) checkAutoPhrase(env, line, say(d), selector, tgt);
    } else if (d.prop === 'font-style' && /\bitalic\b/.test(v)) { // JT-26
      const r = reach();
      if (r === 'ja') add(line, 'WARN', 'JT-26', `${say(d)} reaches Japanese text`);
      else if (r === 'unknown' && near) add(line, 'FYI', 'JT-26', `${say(d)}, and the text it reaches could not be traced (no matching markup, or dynamic text); it may be Japanese`);
    } else if (d.prop === 'text-overflow' && /\bellipsis\b/.test(v)) { // JT-32
      if (any(['-webkit-line-clamp', 'line-clamp'], /\d/)) continue; // multi-line clamp: the rule covers single-line truncation
      const overflow = any(['overflow', 'overflow-x', 'overflow-inline'], /\b(hidden|clip)\b/);
      const nowrap = any(['white-space'], /\b(nowrap|pre)\b/) || any(['text-wrap', 'text-wrap-mode'], /\bnowrap\b/);
      if (!overflow || !nowrap) add(line, 'WARN', 'JT-32', `${say(d)} without ${[!overflow && 'overflow: hidden (or clip)', !nowrap && 'white-space: nowrap'].filter(Boolean).join(' or ')} in the same ${d.label ? 'class list' : 'rule'}`);
    } else if (d.prop === '@apply') {
      checkTailwind(env, v.split(/\s+/), line, { selector, target: tgt, near });
    }
  }
}

// JT-13: keep-all with no overflow-wrap: anywhere (same rule, or page-wide) and no <wbr> / U+200B in the text.
function checkKeepAll(env, line, what, decls, tgt, maybeJa) {
  if (!maybeJa()) return;
  if (env.ctx.globalAnywhere || decls.some((d) => (d.prop === 'overflow-wrap' || d.prop === 'word-wrap') && /\banywhere\b/.test(d.value))) return;
  const t = tgt();
  const jaEls = t.els.filter((el) => !NON_JA_KIND.has(elementKind(env.ctx.markup.get(el.abs), el)));
  if (!t.unresolved && !t.page && jaEls.length && jaEls.every((el) => hasBreakMarks(env.ctx, el))) return;
  env.F.add(env.file, line, 'FYI', 'JT-13', `${what}, with no overflow-wrap: anywhere and no <wbr> or U+200B break points`);
}

// JT-14: auto-phrase where neither the element nor an ancestor has lang="ja".
function checkAutoPhrase(env, line, what, selector, tgt) {
  if (LANG_JA_SEL.test(selector)) return; // the rule itself is scoped to lang="ja"
  const t = tgt();
  const traced = t.els.filter((el) => !(t.page && el.tag !== 'html' && el.tag !== 'body'));
  if (!traced.length) {
    if (env.ctx.rootLang === 'ja') return;
    env.F.add(env.file, line, 'FYI', 'JT-14', `${what}, and no markup it reaches could be traced to check for lang="ja"`);
    return;
  }
  const states = traced.map((el) => langOf(env.ctx, el));
  if (states.includes('other')) env.F.add(env.file, line, 'WARN', 'JT-14', `${what} reaches an element with no lang="ja" on it or on an ancestor`);
  else if (states.includes('unknown') || t.unresolved) env.F.add(env.file, line, 'FYI', 'JT-14', `${what}, and the lang of the element it reaches is dynamic or set outside the scanned files`);
}

// ---- Tailwind -----------------------------------------------------------------------------
function stripVariant(tok) {
  let depth = 0;
  let cut = -1;
  for (let i = 0; i < tok.length; i++) {
    const ch = tok[i];
    if (ch === '[' || ch === '(') depth++;
    else if (ch === ']' || ch === ')') depth = Math.max(0, depth - 1);
    else if (ch === ':' && depth === 0) cut = i;
  }
  return tok.slice(cut + 1).replace(/^!|!$/g, '');
}

function twLeading(v) {
  if (TW_LEADING[v] != null) return String(TW_LEADING[v]);
  if (/^\d+(\.\d+)?$/.test(v)) return `${parseFloat(v) * 0.25}rem`; // leading-6 = 1.5rem
  const m = /^\[(.+)\]$/.exec(v);
  return m ? m[1] : null;
}

// Class tokens → the declarations they set (only what the rules read).
function twDecls(tokens) {
  const out = [];
  for (const raw of tokens) {
    if (!raw) continue;
    const base = stripVariant(raw);
    const variant = base !== raw.replace(/^!|!$/g, '');
    const push = (prop, value) => { if (value != null) out.push({ prop, value: String(value), off: 0, variant, label: raw }); };
    let m;
    if ((m = /^\[([a-z-]+):(.+)\]$/i.exec(base))) push(m[1].toLowerCase(), m[2].replace(/_/g, ' '));
    else if ((m = /^text-(xs|sm|base|lg|xl|[2-9]xl)(?:\/(.+))?$/.exec(base))) { push('font-size', `${TW_SIZE[m[1]]}px`); if (m[2]) push('line-height', twLeading(m[2])); }
    else if ((m = /^text-\[(\d*\.?\d+(?:px|rem))\](?:\/(.+))?$/.exec(base))) { push('font-size', m[1]); if (m[2]) push('line-height', twLeading(m[2])); }
    else if ((m = /^leading-(.+)$/.exec(base))) push('line-height', twLeading(m[1]));
    else if ((m = /^tracking-(tighter|tight|normal|wide|wider|widest)$/.exec(base))) push('letter-spacing', `${TW_TRACKING[m[1]]}em`);
    else if ((m = /^tracking-\[(.+)\]$/.exec(base))) push('letter-spacing', m[1]);
    else if ((m = /^-tracking-\[(.+)\]$/.exec(base))) push('letter-spacing', `-${m[1]}`);
    else if (base === 'italic') push('font-style', 'italic');
    else if (base === 'not-italic') push('font-style', 'normal');
    else if (base === 'break-keep') push('word-break', 'keep-all');
    else if (base === 'break-all') push('word-break', 'break-all');
    else if (base === 'break-normal') { push('word-break', 'normal'); push('overflow-wrap', 'normal'); }
    else if (base === 'break-words' || base === 'wrap-break-word') push('overflow-wrap', 'break-word');
    else if (base === 'wrap-anywhere') push('overflow-wrap', 'anywhere');
    else if (base === 'truncate') { push('overflow', 'hidden'); push('text-overflow', 'ellipsis'); push('white-space', 'nowrap'); }
    else if (base === 'text-ellipsis') push('text-overflow', 'ellipsis');
    else if ((m = /^overflow-(x-)?(hidden|clip)$/.exec(base))) push(m[1] ? 'overflow-x' : 'overflow', m[2]);
    else if ((m = /^whitespace-(nowrap|pre)$/.exec(base))) push('white-space', m[1]);
    else if (base === 'text-nowrap') push('text-wrap', 'nowrap');
    else if ((m = /^line-clamp-(\d+)$/.exec(base))) push('-webkit-line-clamp', m[1]);
    else if ((m = /^font-\[(.+)\]$/.exec(base)) && !/^\d/.test(m[1]) && !/^(weight|number):/.test(m[1])) push('font-family', m[1].replace(/_/g, ' '));
  }
  return out;
}

// selector: the owning element's tag (markup) or the @apply rule's selector, used for the role.
function checkTailwind(env, tokens, line, { selector = '', target = null, near = false } = {}) {
  const decls = twDecls(tokens);
  if (decls.length) checkBlock(env, selector, decls, () => line, { target, near });
}

// ---- markup files: class strings, style attributes, JSX style objects, <html lang> ------------
const UNITLESS = new Set(['line-height', 'font-weight', 'opacity', 'z-index', 'flex', 'flex-grow', 'flex-shrink', 'order', '-webkit-line-clamp', 'line-clamp']);

function checkStyleObjects(env, text, lineAt) {
  const re = /\bstyle\s*=\s*\{\{/g;
  let m;
  while ((m = re.exec(text))) {
    const start = m.index + m[0].length;
    let i = start;
    let depth = 1;
    let q = null;
    for (; i < text.length && depth > 0; i++) {
      const ch = text[i];
      if (q) { if (ch === q && text[i - 1] !== '\\') q = null; continue; }
      if (ch === '"' || ch === "'" || ch === '`') q = ch;
      else if (ch === '{') depth++;
      else if (ch === '}') depth--;
    }
    const body = text.slice(start, i - 1);
    const decls = [];
    for (const p of body.matchAll(/([A-Za-z]+|'[^']+'|"[^"]+")\s*:\s*(?:(["'`])((?:\\.|(?!\2)[^\\])*)\2|(-?\d*\.?\d+)(?![\w.]))/g)) {
      const key = p[1].replace(/^['"]|['"]$/g, '');
      const prop = key.startsWith('--') ? key : key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
      let value = p[3] ?? p[4];
      if (p[4] != null && !UNITLESS.has(prop) && parseFloat(value) !== 0) value += 'px'; // React: a bare number is px
      decls.push({ prop, value, off: start + p.index });
    }
    if (!decls.length) continue;
    const el = elementAt(env.ctx, env.abs, m.index);
    const lineEnd = (from, n) => { let k = from; for (let c = 0; c < n && k >= 0; c++) k = text.indexOf('\n', k + 1); return k < 0 ? text.length : k; };
    const near = JA.test(text.slice(m.index, lineEnd(i, 2))); // Japanese from the style object to two lines after it
    checkBlock(env, el ? el.tag : '', decls, lineAt, { target: targetOf(env.ctx, el), near });
  }
}

function checkLines(env, lines) {
  const starts = [0];
  for (let k = 0; k < lines.length; k++) starts.push(starts[k] + lines[k].length + 1);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const ln = i + 1;
    const elAt = (idx) => elementAt(env.ctx, env.abs, starts[i] + idx);
    const near = JA.test(line) || JA.test(lines[i + 1] || '') || JA.test(lines[i + 2] || '');
    const tagAt = (idx) => { // fallback when the markup index has no element here
      let t = null;
      for (const x of line.slice(0, idx).matchAll(/<([a-z][\w-]*)\b/gi)) t = x[1].toLowerCase();
      return t || '';
    };
    const run = (tokens, at) => {
      const el = elAt(at);
      checkTailwind(env, tokens, ln, { selector: el ? el.tag : tagAt(at), target: () => targetOf(env.ctx, el), near });
    };
    const classRe = /\bclass(?:Name)?\s*=\s*(?:\{\s*)?(?:"([^"]*)"|'([^']*)'|`([^`]*)`)/g;
    let m;
    while ((m = classRe.exec(line))) run((m[1] ?? m[2] ?? m[3]).split(/\s+/), m.index);
    const helper = /\b(cn|clsx|classnames|twMerge|twJoin|cva)\s*\(/.exec(line);
    if (helper) {
      const toks = [];
      for (const s of line.slice(helper.index).matchAll(/"([^"]*)"|'([^']*)'|`([^`]*)`/g)) toks.push(...(s[1] ?? s[2] ?? s[3]).split(/\s+/));
      run(toks, helper.index);
    }
    for (const st of line.matchAll(/<([a-zA-Z][\w-]*)\b[^>]*?\sstyle\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
      const at = st.index + st[0].lastIndexOf('style');
      checkBlock(env, st[1].toLowerCase(), parseDecls(st[2] ?? st[3], 0), () => ln, { target: targetOf(env.ctx, elAt(at)), near });
    }
  }
}

function checkFontFamilyConfig(env, text, lineAt) { // tailwind.config fontFamily: page-wide, not traced
  const re = /fontFamily\s*:\s*\{/g;
  let m;
  while ((m = re.exec(text))) {
    const start = m.index + m[0].length;
    let i = start;
    let depth = 1;
    while (i < text.length && depth > 0) {
      if (text[i] === '{') depth++;
      else if (text[i] === '}') depth--;
      i++;
    }
    const block = text.slice(start, i - 1);
    for (const a of block.matchAll(/([\w$]+|'[^']*'|"[^"]*")\s*:\s*\[([^\]]*)\]/g)) {
      if (a[2].includes('...')) continue; // spreads (defaultTheme…) cannot be resolved statically
      const items = [...a[2].matchAll(/'([^']*)'|"([^"]*)"|`([^`]*)`/g)].map((x) => x[1] ?? x[2] ?? x[3]);
      if (items.length) checkStack(env, lineAt(start + a.index), items.join(', '));
    }
  }
}

// JT-25: <html> with no lang, or a lang other than ja / ja-*, on a document with Japanese text that has
// no lang="ja" of its own: WARN. A layout or SPA shell with no text of its own stands for the project's
// pages, which is an inference: FYI there.
function checkHtmlLang(env, rec, lineAt) {
  const innermost = (pos) => {
    let best = null;
    for (const el of rec.els) { if (el.start > pos) break; if (el.tagEnd <= pos && pos < el.end) best = el; }
    return best;
  };
  for (const el of rec.els) {
    if (el.tag !== 'html' || el.lang === DYN) continue;
    if (el.lang != null && /^ja(-|$)/i.test(el.lang)) continue;
    const jaSegs = rec.segs.filter((s) => s.ja && s.pos >= el.tagEnd && s.pos < el.end);
    // a static page whose own text is in another language is not a Japanese document; a shell is one with almost no text
    if (!jaSegs.length && (env.ext === '.html' || env.ext === '.htm') && visibleWords(rec.raw) >= 5) continue;
    const uncovered = jaSegs.length ? jaSegs.some((s) => { const host = innermost(s.pos); return !host || langOf(env.ctx, host) !== 'ja'; }) : !env.ctx.nestedJa;
    if (!uncovered) continue;
    const where = jaSegs.length ? 'on a page with Japanese text' : `in a project ${env.ctx.hasJa ? 'with Japanese text' : 'checked with --assume-ja'}, and no scanned element sets lang="ja"`;
    env.F.add(env.file, lineAt(el.start), jaSegs.length ? 'WARN' : 'FYI', 'JT-25', el.lang == null ? `<html> has no lang attribute ${where}` : `<html lang="${el.lang}"> ${where}${jaSegs.length ? ', and that text has no lang="ja" of its own' : ''}`);
  }
}

// ---- driver -------------------------------------------------------------------------------
function collect(inputs) {
  const out = [];
  const walk = (p, depth) => {
    let st;
    try { st = fs.statSync(p); } catch { return; }
    if (st.isDirectory()) {
      const name = path.basename(p);
      if (depth > 0 && (SKIP_DIR.has(name) || name.startsWith('.'))) return;
      for (const e of fs.readdirSync(p).sort()) walk(path.join(p, e), depth + 1);
    } else if (st.isFile() && SCAN_EXT.has(path.extname(p).toLowerCase()) && !/\.min\.(css|js)$/.test(p) && st.size <= 2_000_000) out.push(path.resolve(p));
  };
  for (const p of inputs) walk(p, 0);
  return [...new Set(out)].sort();
}

function makeLineAt(text) {
  const starts = [0];
  for (let i = 0; i < text.length; i++) if (text.charCodeAt(i) === 10) starts.push(i + 1);
  return (off) => {
    let lo = 0;
    let hi = starts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (starts[mid] <= off) lo = mid;
      else hi = mid - 1;
    }
    return lo + 1;
  };
}

function visibleWords(html) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

function buildContext(files) {
  const ctx = { hasJa: false, props: new Map(), globalAnywhere: false, sawHtml: false, rootLang: null, nestedJa: false, markup: new Map(), els: [], selCache: new Map() };
  const roots = [];
  for (const f of files) {
    if (JA.test(f.text)) ctx.hasJa = true;
    if (MARKUP_EXT.has(f.ext)) {
      const rec = scanMarkup(f.abs, f.ext, f.text);
      ctx.markup.set(f.abs, rec);
      for (const el of rec.els) {
        ctx.els.push(el);
        if (el.tag === 'html') roots.push(el.lang);
        else if (typeof el.lang === 'string' && /^ja(-|$)/i.test(el.lang)) ctx.nestedJa = true;
      }
    }
    if (/<(body|html)\b[^>]*\bclass(?:Name)?\s*=[^>]*\bwrap-anywhere\b/i.test(f.text)) ctx.globalAnywhere = true;
    for (const { css } of cssRegions(f)) {
      forEachBlock(css, (sel, body) => {
        for (const d of parseDecls(body, 0)) {
          if (d.prop.startsWith('--') && !ctx.props.has(d.prop)) ctx.props.set(d.prop, d.value);
          if ((d.prop === 'overflow-wrap' || d.prop === 'word-wrap') && /\banywhere\b/.test(d.value) && /(^|,)\s*(html|body|:root|\*)\s*(,|$)/.test(sel)) ctx.globalAnywhere = true;
        }
      });
    }
  }
  ctx.sawHtml = roots.length > 0;
  if (roots.length) {
    const s = roots.map((l) => (l === DYN ? 'unknown' : l != null && /^ja(-|$)/i.test(l) ? 'ja' : 'other'));
    ctx.rootLang = s.every((x) => x === s[0]) ? s[0] : 'unknown'; // pages that disagree: unknown
  }
  return ctx;
}

function run(inputs, { base = process.cwd(), assumeJa = false } = {}) {
  const files = collect(inputs).map((abs) => ({ abs, ext: path.extname(abs).toLowerCase(), text: fs.readFileSync(abs, 'utf8') }));
  const ctx = buildContext(files);
  const F = new Findings();
  const notes = [];
  const active = ctx.hasJa || assumeJa;
  if (active) {
    for (const f of files) {
      // A static .html page with text of its own and no Japanese is a non-Japanese document: skip it.
      // SPA shells (little visible text) and CSS/JSX files follow the project-wide gate.
      if (!assumeJa && (f.ext === '.html' || f.ext === '.htm') && !JA.test(f.text) && visibleWords(f.text) >= 40) continue;
      const rel = path.relative(base, f.abs);
      const env = { file: (rel.startsWith('..') ? f.abs : rel).split(path.sep).join('/'), abs: f.abs, ext: f.ext, ctx, F };
      const lineAt = makeLineAt(f.text);
      for (const { css, base: off } of cssRegions(f)) forEachBlock(css, (sel, body, bodyOff) => checkBlock(env, sel, parseDecls(body, off + bodyOff), lineAt));
      if (STYLE_EXT.has(f.ext)) continue;
      const rec = ctx.markup.get(f.abs);
      checkLines(env, f.text.split('\n'));
      if (rec) {
        checkStyleObjects(env, rec.text, lineAt);
        checkHtmlLang(env, rec, lineAt);
      }
      if (!EMBED_STYLE_EXT.has(f.ext)) checkFontFamilyConfig(env, f.text, lineAt);
    }
    if (!ctx.sawHtml) notes.push('No <html> element in the scanned files: JT-25 was not checked, and JT-14 could not see the root lang.');
  } else {
    notes.push(`No kana or kanji found in ${files.length} scanned file(s); Japanese checks skipped (use --assume-ja to force).`);
  }
  const findings = F.list();
  const summary = { WARN: 0, FYI: 0 };
  for (const x of findings) summary[x.severity]++;
  return { files: files.length, ja: ctx.hasJa, active, findings, notes, summary };
}

// ---- output -------------------------------------------------------------------------------
const escapeGithubMessage = (v) => String(v).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
const escapeGithubProperty = (v) => escapeGithubMessage(v).replace(/:/g, '%3A').replace(/,/g, '%2C');
const summaryLine = (res, exit) => `${res.summary.WARN} WARN · ${res.summary.FYI} FYI · exit ${exit}`;

function printGithub(res, exit) {
  const levels = { WARN: 'warning', FYI: 'notice' };
  const out = res.findings.map((f) => `::${levels[f.severity]} file=${escapeGithubProperty(f.file)},line=${escapeGithubProperty(f.line)},title=${escapeGithubProperty(f.rule)}::${escapeGithubMessage(`${f.message}. Source: ${f.source}`)}`);
  out.push(summaryLine(res, exit));
  console.log(out.join('\n'));
}

function printHuman(res, exit) {
  const out = [`kana check · ${res.files} file(s) · Japanese ${res.ja ? 'found' : 'not found'}`];
  const w = Math.max(0, ...res.findings.map((f) => `${f.file}:${f.line}`.length));
  for (const f of res.findings) {
    out.push(`${`${f.file}:${f.line}`.padEnd(w)}  ${f.severity.padEnd(4)}  ${f.rule}  ${f.message}.`);
    out.push(`${' '.repeat(w)}              source: ${f.source}`);
  }
  for (const n of res.notes) out.push(`note: ${n}`);
  out.push(summaryLine(res, exit));
  console.log(out.join('\n'));
}

// ---- self-test: fixtures/kana/<rule>/hit must give exactly these findings, <rule>/miss none --------
const EXPECTED = {
  'jt-01/hit': ['Card.tsx:4 WARN JT-01', 'Card.tsx:5 WARN JT-01', 'Card.tsx:6 WARN JT-01', 'style.css:2 WARN JT-01', 'style.css:3 WARN JT-01', 'style.css:4 WARN JT-01'],
  'jt-05/hit': ['Note.tsx:2 FYI JT-05', 'style.css:2 FYI JT-05', 'style.css:3 FYI JT-05'],
  'jt-07/hit': ['Title.tsx:2 FYI JT-07', 'style.css:2 FYI JT-07', 'style.css:3 FYI JT-07'],
  'jt-09/hit': ['index.html:5 FYI JT-09', 'index.html:6 FYI JT-09'],
  'jt-12/hit': ['Body.tsx:2 FYI JT-12', 'style.css:2 FYI JT-12'],
  'jt-13/hit': ['Lead.tsx:2 FYI JT-13', 'index.html:5 FYI JT-13'],
  'jt-14/hit': ['index.html:2 WARN JT-25', 'index.html:5 WARN JT-14', 'phrase.css:2 FYI JT-14'],
  'jt-22/hit': ['Card.tsx:2 FYI JT-22', 'style.css:2 FYI JT-22', 'style.css:3 FYI JT-22', 'style.css:4 FYI JT-22'],
  'jt-25/hit': ['en.html:2 WARN JT-25', 'layout.tsx:3 FYI JT-25', 'nolang.html:2 WARN JT-25'],
  // inputs: the same rules reached through @apply, a style attribute, cn(), a --font-* variable and tailwind.config
  inputs: ['Card.tsx:3 WARN JT-26', 'page.html:5 WARN JT-01', 'page.html:5 WARN JT-26', 'page.html:6 FYI JT-22', 'page.html:11 WARN JT-01', 'tailwind.config.js:5 FYI JT-22'],
  'jt-26/hit': ['Tip.tsx:2 WARN JT-26', 'index.html:5 WARN JT-26', 'quote.css:2 FYI JT-26'],
  'jt-32/hit': ['Row.tsx:4 WARN JT-32', 'Row.tsx:5 WARN JT-32', 'style.css:2 WARN JT-32', 'style.css:3 WARN JT-32'],
  nonja: [],
};
for (const k of Object.keys(EXPECTED)) if (k.endsWith('/hit')) EXPECTED[k.replace(/hit$/, 'miss')] = [];
// The no-Japanese fixture with --assume-ja: the same file now reports.
const EXPECTED_ASSUME = ['en.css:2 FYI JT-26', 'en.css:2 WARN JT-01', 'en.css:3 WARN JT-32'];

function selfTest() {
  const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'kana');
  const key = (f) => `${f.file}:${f.line} ${f.severity} ${f.rule}`;
  const scan = (name, opts = {}) => run([path.join(dir, name)], { base: path.join(dir, name), ...opts });
  let ok = true;
  let checked = 0;
  const cases = [...Object.entries(EXPECTED).map(([name, want]) => [name, want, {}]), ['nonja', EXPECTED_ASSUME, { assumeJa: true }]];
  for (const [name, expected, opts] of cases) {
    const res = scan(name, opts);
    const got = new Set(res.findings.map(key));
    const want = new Set(expected);
    const missing = [...want].filter((k) => !got.has(k));
    const extra = [...got].filter((k) => !want.has(k));
    const label = opts.assumeJa ? `${name} --assume-ja` : name;
    if (!fs.existsSync(path.join(dir, name)) || !res.files) { ok = false; console.log(`  ${label}: fixture missing`); continue; }
    if (name !== 'nonja' && !res.ja) { ok = false; console.log(`  ${label}: has no Japanese text, so it tests the gate, not the rule`); }
    if (missing.length || extra.length) ok = false;
    for (const k of missing) console.log(`  ${label} missing: ${k}`);
    for (const k of extra) console.log(`  ${label} unexpected: ${k} ${res.findings.find((f) => key(f) === k).message}`);
    if (res.findings.some((f) => !f.source)) { ok = false; console.log(`  ${label}: a finding has no source`); }
    checked++;
  }
  const deterministic = JSON.stringify(scan('jt-01/hit')) === JSON.stringify(scan('jt-01/hit'));
  ok = ok && deterministic;
  console.log(`self-test: ${checked} fixture sets, deterministic ${deterministic}`);
  console.log(ok ? 'self-test: PASS' : 'self-test: FAIL');
  return ok ? 0 : 1;
}

function main(argv) {
  const flags = new Set(argv.filter((a) => a.startsWith('--')));
  const inputs = argv.filter((a) => !a.startsWith('--'));
  if (flags.has('--format=github') && flags.has('--json')) {
    console.error('--format=github cannot be used with --json');
    return 2;
  }
  if (flags.has('--help') || (!inputs.length && !flags.has('--self-test'))) {
    console.log('usage: node kana-check.mjs [--json|--format=github] [--strict] [--assume-ja] <file-or-dir>...\n       node kana-check.mjs --self-test\nfindings are WARN or FYI; exit 1 only with --strict when any WARN exists');
    return flags.has('--help') ? 0 : 2;
  }
  if (flags.has('--self-test')) return selfTest();
  const res = run(inputs, { assumeJa: flags.has('--assume-ja') });
  const exit = flags.has('--strict') && res.summary.WARN > 0 ? 1 : 0;
  if (flags.has('--json')) console.log(JSON.stringify({ ...res, exit }, null, 2));
  else if (flags.has('--format=github')) printGithub(res, exit);
  else printHuman(res, exit);
  return exit;
}

export { run, JA, JA_FACE, SOURCE };

const invokedDirectly = (() => {
  try { return fs.realpathSync(process.argv[1] || '') === fs.realpathSync(fileURLToPath(import.meta.url)); } catch { return false; }
})();
if (invokedDirectly) process.exitCode = main(process.argv.slice(2));
