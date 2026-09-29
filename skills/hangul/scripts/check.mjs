#!/usr/bin/env node
/**
 * /hangul check: deterministic, dependency-free scan for Korean (Hangul) typography
 * defects in HTML, CSS, JSX/TSX and Tailwind class strings. Node >= 18.
 *
 *   node check.mjs [--json] [--strict] [--assume-ko] <file-or-dir>...
 *   node check.mjs --self-test
 *
 * Exit code: 1 if any BLOCK finding (with --strict: any BLOCK or WARN), otherwise 0.
 * Rule IDs match skills/hangul/SKILL.md §3 (HG-1 … HG-14); HG-D = SKILL.md §8 Don'ts.
 *
 * Heuristic by design: it reads source text, not rendered pages. It cannot see which font
 * actually renders, how lines really wrap, or styles applied at runtime. Korean checks run
 * only when at least one scanned file contains Hangul (or with --assume-ko).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCAN_EXT = new Set(['.html', '.htm', '.css', '.scss', '.sass', '.less', '.jsx', '.tsx', '.js', '.ts', '.mjs', '.cjs', '.vue', '.svelte', '.astro', '.mdx']);
const STYLE_EXT = new Set(['.css', '.scss', '.sass', '.less']);
const EMBED_STYLE_EXT = new Set(['.html', '.htm', '.vue', '.svelte', '.astro']);
const SKIP_DIR = new Set(['node_modules', '.git', 'dist', 'build', 'out', '.next', '.nuxt', '.svelte-kit', '.turbo', '.vercel', '.cache', 'coverage', 'vendor']);
const HANGUL = /[ᄀ-ᇿ㄰-㆏가-힣]/;
const FLOOR_EM = -0.03; // SKILL.md HG-7: 22/23 negative-tracked headings in OmD's 67 sit at >= -0.03em
const EPS = 1e-9;
const RANK = { BLOCK: 3, WARN: 2, FYI: 1 };

// ---- font classification ------------------------------------------------------------
const KOREAN_FACE = /pretendard|pretandard|^suit( variable)?$|spoqa|noto ?(sans|serif) ?(kr|cjk|korean)|source ?han|apple ?sd ?gothic|applesdgothic|malgun|nanum|ibm ?plex ?sans ?kr|gmarket|wanted ?sans|toss ?product ?sans|kakao|samsung ?one ?korean|samsungonekorean|line ?seed|gothic ?a1|min ?sans|paperlogy|gowun|hahmlet|black ?han ?sans|do ?hyeon|^jua$|song ?myung|hyundai ?sans|skt ?sans|youandi|digital ?one ?shinhan|(^|[\s_-])kr$|korean|[가-힣]/i;
const KOREAN_LOAD_HINT = /pretendard|pretandard|noto[ _+-]?(sans|serif)[ _+-]?kr|spoqa|nanum|gmarket|wanted[ _-]?sans|ibm[ _+-]?plex[ _+-]?sans[ _+-]?kr|gothic[ _+-]?a1|apple ?sd ?gothic|malgun|맑은 ?고딕/i;
const GENERIC = new Set(['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy', 'system-ui', 'ui-sans-serif', 'ui-serif', 'ui-monospace', 'ui-rounded', 'math', 'emoji', 'fangsong']);
const CSS_WIDE = new Set(['inherit', 'initial', 'unset', 'revert', 'revert-layer']);
const SYSTEM_FACE = new Set(['-apple-system', 'blinkmacsystemfont', 'segoe ui', 'roboto', 'helvetica neue', 'helvetica', 'arial', 'ubuntu', 'cantarell', 'oxygen', 'oxygen-sans', 'droid sans', 'noto sans', 'sf pro', 'sf pro text', 'sf pro display', 'tahoma', 'verdana', 'liberation sans', 'dejavu sans', 'times', 'times new roman', 'georgia']);
const MONO_FACE = /mono|menlo|monaco|consolas|courier/i;
const IGNORE_FACE = /emoji|segoe ui symbol|tossface|twemoji|icon|awesome|material (symbols|icons)|glyph/i;
const KNOWN_LATIN = /^(inter( variable| tight| display)?|intervariable|geist( sans)?|montserrat|poppins|manrope|dm sans|plus jakarta sans|open sans|lato|nunito( sans)?|work sans|space grotesk|outfit|figtree|raleway|source sans (pro|3)|ibm plex sans|mulish|rubik|karla|urbanist|sora|lexend|onest|public sans|barlow|oswald|playfair display|merriweather|lora|pt sans|fira sans|archivo|satoshi|general sans|cabinet grotesk|clash display|avenir( next)?|futura|gill sans|josefin sans|quicksand|instrument sans|hanken grotesk|bricolage grotesque|be vietnam pro|epilogue|syne|red hat (display|text)|albert sans|schibsted grotesk)$/i;

// ---- selector heuristics ------------------------------------------------------------
const HEADING_SEL = /(^|[\s,>+~(])h[1-3]\b|title|headline|heading|hero|display|jumbotron/i;
const BODY_SEL = /(^|[\s,>+~(])(html|body|p|li|td|th|dd|dt|label|small|caption|figcaption|blockquote|article|main|input|textarea|select|button)\b|:root\b|\.(body|text|desc|description|content|caption|label|paragraph|copy|lead|summary|note|btn|button)\b/i;
const CONTROL_SEL = /button|\.btn|badge|chip|\btag\b|pill|\btabs?\b|nav|input|select|icon|avatar/i;
const CODE_SEL = /(^|[\s,>+~])(code|pre|kbd|samp)\b|:lang\((?!ko)/i;

// ---- Tailwind scales (tailwindcss.com/docs, v4; same named values in v3) ---------------
const TW_SIZE = { xs: 12, sm: 14, base: 16, lg: 18, xl: 20, '2xl': 24, '3xl': 30, '4xl': 36, '5xl': 48, '6xl': 60, '7xl': 72, '8xl': 96, '9xl': 128 };
const TW_LEADING = { none: 1, tight: 1.25, snug: 1.375, normal: 1.5, relaxed: 1.625, loose: 2 };
const TW_TRACKING = { tighter: -0.05, tight: -0.025, normal: 0, wide: 0.025, wider: 0.05, widest: 0.1 };

// ---- small parsers -------------------------------------------------------------------
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

function classifyStack(raw, props) {
  const fams = splitTop(resolveVars(raw.replace(/!important/gi, ''), props));
  if (!fams.length) return { verdict: 'skip' };
  const cls = [];
  for (const f of fams) {
    const name = f.replace(/^['"]|['"]$/g, '').trim();
    const low = name.toLowerCase();
    const un = /^__UNRESOLVED:(--[\w-]+)__$/.exec(name);
    if (un) {
      // next/font style variables (--font-geist-sans, --font-pretendard): judge by the name
      const hint = un[1].replace(/^--/, '').replace(/^font-?/, '').replace(/[-_]+/g, ' ').trim();
      if (KOREAN_FACE.test(hint)) cls.push(['korean', hint]);
      else if (MONO_FACE.test(hint)) cls.push(['mono', hint]);
      else if (KNOWN_LATIN.test(hint) || KNOWN_LATIN.test(hint.replace(/ sans$/, ''))) cls.push(['latin', hint]);
      else return { verdict: 'skip' }; // unresolved custom property: can't judge
      continue;
    }
    if (!name || CSS_WIDE.has(low)) return { verdict: 'skip' };
    if (KOREAN_FACE.test(name)) cls.push(['korean', name]);
    else if (IGNORE_FACE.test(low)) continue;
    else if (GENERIC.has(low)) cls.push([low === 'monospace' || low === 'ui-monospace' ? 'mono' : 'generic', low]);
    else if (SYSTEM_FACE.has(low)) cls.push(['system', name]);
    else if (MONO_FACE.test(low)) cls.push(['mono', name]);
    else if (KNOWN_LATIN.test(low)) cls.push(['latin', name]);
    else cls.push(['unknown', name]);
  }
  if (!cls.length) return { verdict: 'skip' };
  if (cls.some(([k]) => k === 'korean')) return { verdict: 'ok' };
  const kinds = new Set(cls.map(([k]) => k));
  const textGeneric = cls.some(([k, n]) => k === 'generic' && n !== 'emoji' && n !== 'math');
  if (kinds.has('mono') && !textGeneric) return { verdict: 'skip' }; // code font stack
  const names = (k) => cls.filter(([x]) => x === k).map(([, n]) => n);
  if (kinds.has('latin')) return { verdict: 'block', names: names('latin') };
  if (kinds.has('unknown')) return { verdict: 'warn-unknown', names: names('unknown') };
  return { verdict: 'warn-system' };
}

function stackFinding(res) {
  if (res.verdict === 'block') return ['BLOCK', `font stack has no Korean face (Latin-only: ${res.names.join(', ')}); Hangul falls back to an OS font. Put a Korean face first, e.g. "Pretendard Variable", Pretendard, …`];
  if (res.verdict === 'warn-unknown') return ['WARN', `no known Korean face in stack (${res.names.join(', ')}); confirm it has Hangul glyphs or add a Korean face after it`];
  if (res.verdict === 'warn-system') return ['WARN', 'system-only stack: Hangul renders in each OS default (6/67 measured services ship this); name a Korean face to control it'];
  return null;
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

function lsEm(v, sizePx) {
  const m = /^(-?\d*\.?\d+)(em|px|rem)?$/.exec(String(v).trim());
  if (!m) return null;
  const n = parseFloat(m[1]);
  if (!m[2]) return n === 0 ? { em: 0, n } : null;
  if (m[2] === 'em') return { em: n, n };
  const px = m[2] === 'rem' ? n * 16 : n;
  return { em: sizePx ? px / sizePx : null, n };
}

function parseFontShorthand(v) {
  const s = v.trim();
  if (CSS_WIDE.has(s.toLowerCase()) || s.startsWith('var(')) return null;
  const m = /(?:^|\s)(\d*\.?\d+(?:px|rem|em|pt|%)|xx-small|x-small|small|medium|large|x-large|xx-large|smaller|larger)(?:\s*\/\s*([^\s,]+))?\s+(.+)$/i.exec(s);
  return m ? { sizePx: toPx(m[1]), lh: m[2] || null, families: m[3] } : null;
}

function roleOf(selector, sizePx) {
  // SKILL.md HG-7: "headings/display" = h1–h3 elements, or anything >= 20px
  if (/(^|[\s,>+~(])h[1-3]\b/i.test(selector)) return 'heading';
  if (sizePx != null) return sizePx < 20 ? 'body' : 'heading';
  if (HEADING_SEL.test(selector)) return 'heading';
  if (BODY_SEL.test(selector)) return 'body';
  return 'unknown';
}

// ---- CSS blocks ----------------------------------------------------------------------
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
    if (t.startsWith('@apply')) out.push({ prop: '@apply', raw: '@apply', value: t.slice(6).trim(), off });
    else {
      const c = t.indexOf(':');
      if (c > 0) {
        const raw = t.slice(0, c).trim();
        out.push({ prop: raw.startsWith('--') ? raw : raw.toLowerCase(), raw, value: t.slice(c + 1).trim().replace(/\s*!important\s*$/i, ''), off });
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

// ---- findings ------------------------------------------------------------------------
class Findings {
  constructor() { this.map = new Map(); }
  add(file, line, severity, rule, message) {
    const key = `${file}\u0000${line}\u0000${rule}`;
    const prev = this.map.get(key);
    if (!prev || RANK[severity] > RANK[prev.severity]) this.map.set(key, { file, line, severity, rule, message });
  }
  list() {
    const ruleNo = (r) => (r === 'HG-D' ? 99 : parseInt(r.slice(3), 10));
    return [...this.map.values()].sort((a, b) => (a.file < b.file ? -1 : a.file > b.file ? 1 : a.line - b.line || ruleNo(a.rule) - ruleNo(b.rule) || (a.message < b.message ? -1 : a.message > b.message ? 1 : 0)));
  }
}

// ---- checks --------------------------------------------------------------------------
const FONT_VAR = /^--font-(?!weight|size|feature|variation|stretch|style|synthesis|kerning|smoothing|optical)[\w-]+$/;

function checkStack(env, line, value) {
  const f = stackFinding(classifyStack(value, env.ctx.props));
  if (f) env.F.add(env.file, line, f[0], 'HG-1', f[1]);
}

function checkBlock(env, selector, decls, lineOf) {
  if (/^@font-face/i.test(selector)) return;
  const last = (p) => decls.filter((d) => d.prop === p).pop() || null;
  const fontD = last('font');
  const short = fontD ? parseFontShorthand(fontD.value) : null;
  const fsD = last('font-size');
  const sizePx = fsD ? toPx(fsD.value) : short ? short.sizePx : null;
  const role = roleOf(selector, sizePx);
  const hasWrap = decls.some((d) => (d.prop === 'overflow-wrap' || d.prop === 'word-wrap') && !/normal/.test(d.value));
  const lhD = last('line-height');
  const checkLh = (value, line) => {
    const r = lhRatio(value, sizePx);
    if (r == null || r >= 1.3 - EPS || CONTROL_SEL.test(selector)) return;
    if (role === 'body' || (role === 'unknown' && BODY_SEL.test(selector))) env.F.add(env.file, line, 'WARN', 'HG-4', `line-height ${value} (≈${r.toFixed(2)}) on body text; body is 1.5, and nothing that wraps goes below 1.3`);
    else if (role === 'heading') env.F.add(env.file, line, 'FYI', 'HG-5', `heading line-height ≈${r.toFixed(2)}; if this Hangul heading wraps, use 1.3–1.45`);
  };
  for (const d of decls) {
    const line = lineOf(d.off);
    const v = d.value;
    const alias = /^var\(\s*(--font-[\w-]+)\s*\)$/.exec(v);
    if (d.prop === 'font-family' && alias && FONT_VAR.test(alias[1]) && env.ctx.props.has(alias[1])) continue; // reported where the variable is defined
    if (d.prop === 'font-family') checkStack(env, line, v);
    else if (d.prop === 'font' && short) {
      checkStack(env, line, short.families);
      if (!lhD && short.lh) checkLh(short.lh, line);
    } else if (FONT_VAR.test(d.prop) && /[a-z]/i.test(v) && !/^[\d.]/.test(v)) checkStack(env, line, v);
    else if (d.prop === 'word-break') {
      if (/break-all/.test(v)) env.F.add(env.file, line, 'BLOCK', 'HG-8', 'word-break: break-all splits Latin words and numbers; Hangul already breaks between syllables. Use keep-all + overflow-wrap: anywhere, or overflow-wrap: anywhere alone');
      else if (/keep-all/.test(v) && !hasWrap && !env.ctx.globalWrap) env.F.add(env.file, line, 'FYI', 'HG-9', 'keep-all without overflow-wrap: a long word or URL can overflow; add overflow-wrap: anywhere');
      else if (/break-word/.test(v)) env.F.add(env.file, line, 'FYI', 'HG-9', 'word-break: break-word is deprecated (= normal + overflow-wrap: anywhere) and drops keep-all; use overflow-wrap: anywhere');
      else if (/auto-phrase/.test(v)) env.F.add(env.file, line, 'FYI', 'HG-D', 'word-break: auto-phrase shipped for Japanese only (Chrome 2023-12); do not rely on it for Korean');
    } else if (d.prop === 'line-break' && /anywhere/.test(v)) env.F.add(env.file, line, 'FYI', 'HG-D', 'line-break: anywhere allows breaks around punctuation that klreq keeps off line starts/ends; keep it off body text');
    else if (d.prop === 'text-autospace' || d.prop === 'text-spacing-trim') env.F.add(env.file, line, 'FYI', 'HG-D', `${d.prop} targets ideographic (Han/Kana) spacing and full-width punctuation; it does nothing useful for horizontal Korean`);
    else if (d.prop === 'letter-spacing') {
      const ls = lsEm(v, sizePx);
      if (!ls || ls.n >= 0) continue;
      if (ls.em != null && ls.em < FLOOR_EM - EPS) env.F.add(env.file, line, 'BLOCK', 'HG-7', `letter-spacing ${v} (≈${ls.em.toFixed(3)}em) is below the -0.03em floor measured across Korean services`);
      else if (role === 'body') env.F.add(env.file, line, 'WARN', 'HG-6', `negative letter-spacing ${v} on body-sized text; Hangul body tracking is 0`);
    } else if (d.prop === 'line-height') checkLh(v, line);
    else if (d.prop === 'font-style' && /italic|oblique/.test(v) && !CODE_SEL.test(selector)) env.F.add(env.file, line, 'WARN', 'HG-11', 'font-style: italic; if this applies to Hangul, the browser slants it synthetically. Emphasize with weight or color');
    else if (d.prop === '@apply') checkTailwind(env, v.split(/\s+/), line, true, role === 'heading' ? 'heading' : role === 'body' ? 'body' : null);
  }
}

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

function checkTailwind(env, rawTokens, line, near, tagRole) {
  const items = rawTokens.filter(Boolean).map((raw) => {
    const clean = raw.replace(/^!|!$/g, '');
    const base = stripVariant(raw);
    return { base, variant: base !== clean };
  });
  if (!items.length) return;
  const toks = items.map((i) => i.base);
  let maxSize = null;
  let baseSize = null;
  let bigNamed = false;
  let leadingSet = false;
  for (const { base, variant } of items) {
    let m = /^text-(xs|sm|base|lg|xl|[2-9]xl)(?:\/(\S+))?$/.exec(base);
    let px = null;
    if (m) {
      px = TW_SIZE[m[1]];
      if (m[2]) leadingSet = true;
      if (px >= 30) bigNamed = true;
    } else if ((m = /^text-\[(\d*\.?\d+)(px|rem)\]$/.exec(base))) px = toPx(m[1] + m[2]);
    if (px != null) {
      maxSize = maxSize == null ? px : Math.max(maxSize, px);
      if (!variant) baseSize = px;
    }
    if (/^leading-/.test(base)) leadingSet = true;
  }
  const size = baseSize ?? maxSize;
  const role = tagRole === 'heading' ? 'heading' : maxSize != null ? (maxSize >= 20 ? 'heading' : 'body') : tagRole || 'body';
  const add = (sev, rule, msg) => env.F.add(env.file, line, sev, rule, msg);

  if (toks.includes('break-all')) add('BLOCK', 'HG-8', 'Tailwind break-all splits Latin words and numbers; Hangul already breaks between syllables. Use break-keep + wrap-anywhere, or wrap-anywhere alone');
  if (near && toks.includes('break-keep') && !env.ctx.globalWrap && !toks.some((t) => /^(wrap-anywhere|wrap-break-word|break-words|\[(overflow-wrap|word-wrap):[^\]]+\])$/.test(t))) add('FYI', 'HG-9', 'break-keep without an overflow-wrap utility: a long word or URL can overflow; add wrap-anywhere');
  if (near && toks.includes('italic')) add('BLOCK', 'HG-11', 'italic on Hangul renders as a synthetic slant; emphasize with weight or color');
  for (const t of toks) {
    let m = /^font-\[(.+)\]$/.exec(t);
    if (near && m && !/^\d/.test(m[1]) && !/^(weight|number):/.test(m[1])) checkStack(env, line, m[1].replace(/_/g, ' ')); // element-scoped: only near Hangul
    let em = null;
    let label = t;
    if ((m = /^tracking-(tighter|tight|normal|wide|wider|widest)$/.exec(t))) em = TW_TRACKING[m[1]];
    else if ((m = /^tracking-\[(.+)\]$/.exec(t))) {
      const ls = lsEm(m[1], size);
      if (ls) em = ls.em ?? (ls.n < 0 ? -EPS : 0);
    }
    if (near && em != null && em < 0) {
      if (em < FLOOR_EM - EPS) add('BLOCK', 'HG-7', `${label} (${em}em) is below the -0.03em floor measured across Korean services`);
      else if (role === 'body') add('WARN', 'HG-6', `${label} on body-sized Hangul; body tracking is 0`);
    } else if (near && em != null && em > 0 && role === 'body') add('FYI', 'HG-D', `${label} (wide tracking) on body-sized Hangul; no DS or measured service does this (0/67)`);
    let r = null;
    if ((m = /^leading-(none|tight|snug|normal|relaxed|loose)$/.exec(t))) r = TW_LEADING[m[1]];
    else if ((m = /^leading-\[(.+)\]$/.exec(t))) r = lhRatio(m[1], size);
    else if ((m = /^leading-(\d+(?:\.\d+)?)$/.exec(t)) && size) r = (parseFloat(m[1]) * 4) / size;
    if (near && r != null && r < 1.3 - EPS) {
      if (role === 'body') add('WARN', 'HG-4', `${t} (≈${r.toFixed(2)}) on body-sized Hangul; body is 1.5, nothing that wraps goes below 1.3`);
      else add('FYI', 'HG-5', `${t} (≈${r.toFixed(2)}) on a heading; if this Hangul heading wraps, use 1.3–1.45`);
    }
  }
  if (near && bigNamed && !leadingSet) add('FYI', 'HG-5', 'text-3xl and up default to line-height 1.2–1; if this Hangul heading wraps, add leading-[1.3] or leading-snug');
}

function checkLines(env, lines) {
  const jsLike = !EMBED_STYLE_EXT.has(env.ext) || env.ext === '.vue' || env.ext === '.svelte' || env.ext === '.astro';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const ln = i + 1;
    const near = HANGUL.test(line) || HANGUL.test(lines[i + 1] || '') || HANGUL.test(lines[i + 2] || '');
    const add = (sev, rule, msg) => env.F.add(env.file, ln, sev, rule, msg);

    const hm = /<html\b/i.exec(line);
    if (hm && !/^\s*(\/\/|\/?\*|<!--|\{\s*\/\*)/.test(line)) {
      let tag = line.slice(hm.index); // attributes may continue on the next lines (formatted JSX)
      for (let j = i + 1; !tag.includes('>') && j < Math.min(lines.length, i + 12); j++) tag += `\n${lines[j]}`;
      const attrs = tag.slice(5, tag.includes('>') ? tag.indexOf('>') : undefined);
      if (!/\blang\s*=\s*\{/.test(attrs)) {
        const lm = /\blang\s*=\s*(?:"([^"]*)"|'([^']*)')/.exec(attrs);
        const val = lm ? lm[1] ?? lm[2] : null;
        if (val == null) add('BLOCK', 'HG-2', '<html> has no lang; set lang="ko"');
        else if (!/^ko\b/i.test(val.trim())) add('BLOCK', 'HG-2', `<html lang="${val}"> on a Korean UI; set lang="ko" (per locale on multilingual sites)`);
      }
    }

    // role of the element that owns an attribute = the last known tag opened before it on this line
    const tagAt = (idx) => {
      let t = null;
      for (const x of line.slice(0, idx).matchAll(/<(h[1-6]|p|li|span|a|button|label|td|th|small|strong|em|dd|dt|figcaption|blockquote|div|section|main|header|footer|article|nav|ul|ol)\b/gi)) t = x[1].toLowerCase();
      return t;
    };
    const roleAt = (idx) => {
      const t = tagAt(idx);
      if (!t) return null;
      if (/^h[1-3]$/.test(t)) return 'heading';
      return /^(div|section|main|header|footer|article|nav|ul|ol)$/.test(t) ? null : 'body';
    };
    const classRe = /\bclass(?:Name)?\s*=\s*(?:\{\s*)?(?:"([^"]*)"|'([^']*)'|`([^`]*)`)/g;
    let m;
    while ((m = classRe.exec(line))) checkTailwind(env, (m[1] ?? m[2] ?? m[3]).split(/\s+/), ln, near, roleAt(m.index));
    if (/\b(cn|clsx|classnames|twMerge|twJoin|cva)\s*\(/.test(line)) {
      const toks = [];
      for (const s of line.matchAll(/"([^"]*)"|'([^']*)'|`([^`]*)`/g)) toks.push(...(s[1] ?? s[2] ?? s[3]).split(/\s+/));
      checkTailwind(env, toks, ln, near, roleAt(line.search(/\b(cn|clsx|classnames|twMerge|twJoin|cva)\s*\(/)));
    }

    for (const em of line.matchAll(/<(em|i)\b[^>]*>([^<]*)/gi)) {
      if (HANGUL.test(em[2]) && !env.ctx.emReset) add('WARN', 'HG-11', `<${em[1]}> around Hangul renders a synthetic italic by default; add :lang(ko) ${em[1]} { font-style: normal }`);
    }

    for (const st of line.matchAll(/<([a-zA-Z][\w-]*)\b[^>]*?\sstyle\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
      checkBlock(env, st[1].toLowerCase(), parseDecls(st[2] ?? st[3], 0), () => ln);
    }

    if (jsLike) {
      if (near && (m = /\bfontFamily\s*:\s*(?:"([^"]*)"|'([^']*)'|`([^`]*)`)/.exec(line))) checkStack(env, ln, m[1] ?? m[2] ?? m[3]); // inline style: element-scoped
      if (/\bwordBreak\s*:\s*['"`]break-all['"`]/.test(line)) add('BLOCK', 'HG-8', "wordBreak: 'break-all' splits Latin words and numbers; use overflowWrap: 'anywhere'");
      if (near && /\bfontStyle\s*:\s*['"`](italic|oblique)['"`]/.test(line)) add('BLOCK', 'HG-11', 'fontStyle italic on Hangul renders a synthetic slant; emphasize with weight or color');
      const fsM = /\bfontSize\s*:\s*(?:['"`](\d*\.?\d+)(px|rem)['"`]|(\d*\.?\d+)\b)/.exec(line);
      const jsSize = fsM ? (fsM[3] != null ? parseFloat(fsM[3]) : toPx(fsM[1] + fsM[2])) : null;
      const jsRole = (idx) => (jsSize != null ? (jsSize < 20 ? 'body' : 'heading') : roleAt(idx) || 'body');
      const lsM = /\bletterSpacing\s*:\s*(?:['"`]\s*(-?\d*\.?\d+)(em|px|rem)?\s*['"`]|(-?\d*\.?\d+)\b)/.exec(line);
      if (near && lsM) {
        const ls = lsM[3] != null ? lsEm(`${lsM[3]}px`, jsSize) : lsEm(lsM[1] + (lsM[2] || 'px'), jsSize);
        if (ls && ls.n < 0) {
          if (ls.em != null && ls.em < FLOOR_EM - EPS) add('BLOCK', 'HG-7', `letterSpacing ≈${ls.em.toFixed(3)}em is below the -0.03em floor`);
          else if (jsRole(lsM.index) === 'body') add('WARN', 'HG-6', 'negative letterSpacing on body-sized Hangul; body tracking is 0');
        }
      }
      const lhM = /\blineHeight\s*:\s*(?:['"`]\s*(\d*\.?\d+)(px|%|em|rem)?\s*['"`]|(\d*\.?\d+)\b)/.exec(line);
      if (near && lhM && tagAt(lhM.index) !== 'button') {
        const r = lhM[3] != null ? parseFloat(lhM[3]) : lhRatio(lhM[1] + (lhM[2] || ''), jsSize);
        if (r != null && r < 1.3 - EPS) {
          if (jsRole(lhM.index) === 'body') add('WARN', 'HG-4', `lineHeight ≈${r.toFixed(2)} on body-sized Hangul; body is 1.5`);
          else add('FYI', 'HG-5', `lineHeight ≈${r.toFixed(2)} on a heading; if it wraps, use 1.3–1.45`);
        }
      }
      const imp = /import\s*\{([^}]*)\}\s*from\s*['"]next\/font\/google['"]/.exec(line);
      if (imp) {
        const names = imp[1].split(',').map((s) => s.trim().split(/\s+as\s+/)[0].replace(/_/g, ' ')).filter(Boolean);
        const text = names.filter((n) => !MONO_FACE.test(n));
        if (text.length && !names.some((n) => KOREAN_FACE.test(n)) && !env.ctx.koreanFaceSeen) add('BLOCK', 'HG-1', `next/font/google loads only Latin faces (${text.join(', ')}) and no Korean face is loaded in the scanned files`);
      }
    }

    if (!STYLE_EXT.has(env.ext) && HANGUL.test(line)) {
      for (const n of line.matchAll(/(?<![\d,.])\d{4,}(?=\s?원)/g)) add('FYI', 'HG-13', `"${n[0]}원": group digits (Intl.NumberFormat('ko-KR') gives 1,000원)`);
    }
  }
}

function checkFontFamilyConfig(env, text, lineAt) {
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
      if (a[2].includes('...')) continue; // spreads (defaultTheme…) can't be resolved statically
      const items = [...a[2].matchAll(/'([^']*)'|"([^"]*)"|`([^`]*)`/g)].map((x) => x[1] ?? x[2] ?? x[3]);
      if (items.length) checkStack(env, lineAt(start + a.index), items.join(', '));
    }
  }
}

// ---- driver --------------------------------------------------------------------------
function collect(inputs) {
  const out = [];
  const walk = (p, depth) => {
    let st;
    try { st = fs.statSync(p); } catch { return; }
    if (st.isDirectory()) {
      const name = path.basename(p);
      if (depth > 0 && (SKIP_DIR.has(name) || name.startsWith('.'))) return; // deps, builds, dot-dirs (generated artifacts)
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

function buildContext(files) {
  const ctx = { hasHangul: false, koreanFaceSeen: false, props: new Map(), globalWrap: false, emReset: false, sawHtml: false };
  for (const f of files) {
    if (HANGUL.test(f.text)) ctx.hasHangul = true;
    if (KOREAN_LOAD_HINT.test(f.text) || /\bSUIT\b/.test(f.text)) ctx.koreanFaceSeen = true;
    if (/<html\b/i.test(f.text)) ctx.sawHtml = true;
    if (/<(body|html)\b[^>]*\bclass(?:Name)?\s*=[^>]*\b(wrap-anywhere|wrap-break-word|break-words)\b/i.test(f.text)) ctx.globalWrap = true;
    for (const { css } of cssRegions(f)) {
      forEachBlock(css, (sel, body) => {
        for (const d of parseDecls(body, 0)) {
          if (d.prop.startsWith('--') && !ctx.props.has(d.prop)) ctx.props.set(d.prop, d.value);
          if ((d.prop === 'overflow-wrap' || d.prop === 'word-wrap') && /anywhere|break-word/.test(d.value) && /(^|,)\s*(html|body|:root|\*)\s*(,|$)/.test(sel)) ctx.globalWrap = true;
          if (d.prop === 'font-style' && /normal/.test(d.value) && /(^|[\s,>+~)])(em|i)\b/.test(sel)) ctx.emReset = true;
        }
      });
    }
  }
  return ctx;
}

function visibleWords(html) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

function run(inputs, { base = process.cwd(), assumeKo = false } = {}) {
  const files = collect(inputs).map((abs) => ({ abs, ext: path.extname(abs).toLowerCase(), text: fs.readFileSync(abs, 'utf8') }));
  const ctx = buildContext(files);
  const F = new Findings();
  const notes = [];
  const active = ctx.hasHangul || assumeKo;
  if (active) {
    for (const f of files) {
      // A static .html page with real text of its own and no Hangul is a non-Korean document: skip it so
      // English pages in a mixed repo stay quiet. SPA shells (Vite/CRA index.html: little visible text,
      // Korean lives in components) and CSS/JSX files follow the project-wide gate.
      if (!assumeKo && (f.ext === '.html' || f.ext === '.htm') && !HANGUL.test(f.text) && visibleWords(f.text) >= 40) continue;
      const rel = path.relative(base, f.abs);
      const env = { file: (rel.startsWith('..') ? f.abs : rel).split(path.sep).join('/'), ext: f.ext, ctx, F };
      const lineAt = makeLineAt(f.text);
      for (const { css, base: off } of cssRegions(f)) forEachBlock(css, (sel, body, bodyOff) => checkBlock(env, sel, parseDecls(body, off + bodyOff), lineAt));
      if (!STYLE_EXT.has(f.ext)) {
        checkLines(env, f.text.split('\n'));
        if (!EMBED_STYLE_EXT.has(f.ext)) checkFontFamilyConfig(env, f.text, lineAt);
      }
    }
    if (!ctx.sawHtml) notes.push('No <html> element in the scanned files; make sure the root layout sets lang="ko".');
  } else {
    notes.push(`No Hangul found in ${files.length} scanned file(s); Korean checks skipped (use --assume-ko to force).`);
  }
  const findings = F.list();
  const summary = { BLOCK: 0, WARN: 0, FYI: 0 };
  for (const x of findings) summary[x.severity]++;
  return { files: files.length, hangul: ctx.hasHangul, active, findings, notes, summary };
}

function printHuman(res, exit) {
  const out = [`/hangul check · ${res.files} file(s) · Hangul ${res.hangul ? 'found' : 'not found'}`];
  const w = Math.max(0, ...res.findings.map((f) => `${f.file}:${f.line}`.length));
  for (const f of res.findings) out.push(`${`${f.file}:${f.line}`.padEnd(w)}  ${f.severity.padEnd(5)}  ${f.rule.padEnd(5)}  ${f.message}`);
  for (const n of res.notes) out.push(`note: ${n}`);
  out.push(`${res.summary.BLOCK} BLOCK · ${res.summary.WARN} WARN · ${res.summary.FYI} FYI · exit ${exit}`);
  console.log(out.join('\n'));
}

// Self-test: the exact findings expected from scripts/fixtures/bad, and none from fixtures/good.
const EXPECTED_BAD = [
  'Hero.tsx:3 BLOCK HG-1', 'Hero.tsx:4 BLOCK HG-7', 'Hero.tsx:4 FYI HG-5', 'Hero.tsx:7 BLOCK HG-8', 'Hero.tsx:7 WARN HG-4', 'Hero.tsx:7 WARN HG-6', 'Hero.tsx:8 FYI HG-13', 'Hero.tsx:10 BLOCK HG-11', 'Hero.tsx:10 FYI HG-D',
  'index.html:2 BLOCK HG-2', 'index.html:6 BLOCK HG-1', 'index.html:6 WARN HG-4', 'index.html:6 WARN HG-6', 'index.html:7 BLOCK HG-7', 'index.html:7 FYI HG-5', 'index.html:8 WARN HG-11', 'index.html:9 BLOCK HG-8', 'index.html:10 FYI HG-9', 'index.html:11 FYI HG-D', 'index.html:17 WARN HG-11', 'index.html:18 WARN HG-6', 'index.html:18 FYI HG-13',
  'edge.tsx:4 BLOCK HG-2', 'edge.tsx:10 WARN HG-6',
  'layout.tsx:1 BLOCK HG-1', 'layout.tsx:7 BLOCK HG-2',
  'shell.html:2 BLOCK HG-2',
  'tailwind.config.js:5 BLOCK HG-1',
];

function selfTest() {
  const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures');
  const key = (f) => `${f.file}:${f.line} ${f.severity} ${f.rule}`;
  const bad = run([path.join(dir, 'bad')], { base: path.join(dir, 'bad') });
  const again = run([path.join(dir, 'bad')], { base: path.join(dir, 'bad') });
  const good = run([path.join(dir, 'good')], { base: path.join(dir, 'good') });
  const got = new Set(bad.findings.map(key));
  const want = new Set(EXPECTED_BAD);
  const missing = [...want].filter((k) => !got.has(k));
  const extra = [...got].filter((k) => !want.has(k));
  const deterministic = JSON.stringify(bad) === JSON.stringify(again);
  const ok = !missing.length && !extra.length && good.findings.length === 0 && deterministic && bad.summary.BLOCK > 0;
  console.log(`self-test: bad ${bad.findings.length} finding(s) (${bad.summary.BLOCK} BLOCK · ${bad.summary.WARN} WARN · ${bad.summary.FYI} FYI), expected ${want.size}; good ${good.findings.length}; deterministic ${deterministic}`);
  for (const k of missing) console.log(`  missing: ${k}`);
  for (const k of extra) console.log(`  unexpected: ${k}`);
  for (const f of good.findings) console.log(`  good fixture flagged: ${key(f)} ${f.message}`);
  console.log(ok ? 'self-test: PASS' : 'self-test: FAIL');
  return ok ? 0 : 1;
}

function main(argv) {
  const flags = new Set(argv.filter((a) => a.startsWith('--')));
  const inputs = argv.filter((a) => !a.startsWith('--'));
  if (flags.has('--help') || (!inputs.length && !flags.has('--self-test'))) {
    console.log('usage: node check.mjs [--json] [--strict] [--assume-ko] <file-or-dir>...\n       node check.mjs --self-test\nexit 1 on any BLOCK (with --strict: any BLOCK or WARN)');
    return flags.has('--help') ? 0 : 2;
  }
  if (flags.has('--self-test')) return selfTest();
  const res = run(inputs, { assumeKo: flags.has('--assume-ko') });
  const exit = res.summary.BLOCK > 0 || (flags.has('--strict') && res.summary.WARN > 0) ? 1 : 0;
  if (flags.has('--json')) console.log(JSON.stringify({ ...res, exit }, null, 2));
  else printHuman(res, exit);
  return exit;
}

process.exitCode = main(process.argv.slice(2));
