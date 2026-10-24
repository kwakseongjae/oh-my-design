#!/usr/bin/env node
/**
 * /hangul copy check: deterministic, dependency-free scan of Korean copy: UI strings in HTML, JSX/TSX,
 * JS/TS string literals and JSON message files, and documents in Markdown and text files. Node >= 18.
 *
 *   node copy-check.mjs [--json] [--strict] [--list] [--context=<situation>|auto] <file-or-dir>...
 *   node copy-check.mjs --self-test
 *
 * Exit code: 1 if any BLOCK finding (with --strict: any BLOCK or WARN), otherwise 0.
 * Rule IDs match skills/hangul/SKILL.md §3b (HW-1 … HW-14) and the document rules HW-D1 … D4; sources are
 * in references/ux-writing.md and references/korean-issues.md. --list prints every string it found with the
 * role it guessed, which is how to see what the rules were judging.
 *
 * --context names the situation (references/situations.md): app (the default), site, product, report, deck,
 * notice, email, press, docs, hiring. report and deck add HW-R* and switch HW-8's system-wording note and
 * HW-11's 합쇼체/해요체 check off; notice adds HW-P1 … P4; press checks that the narration is in 해라체.
 * Which situation a file gets: its pragma (a comment such as `hangul-context: press` in its first 10 lines,
 * or a top-level JSON key "hangul-context"), else the flag, else detection (`auto`, the default), else app.
 * --context=app turns detection off. Detection recognizes only a slide deck by its format (reveal.js, Marp,
 * Slidev), never by a folder name or the wording, and names the file with the marker that decided it.
 *
 * It reads source, not the running product: it sees the strings written in the code and guesses each
 * one's role (button, empty state, toast, heading, label, placeholder, helper, body, alt text) from
 * the element, component, prop, key or call around it, and flags strings that read as an error or sit
 * in a dialog. It cannot see strings fetched
 * at runtime, text in images, or which strings share a screen; the speech-level check (HW-11) treats a
 * file as one screen or one document. Test and spec files are skipped. A clean run is not proof of good copy, and a
 * hit is a prompt to read the string in its place.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { HANGUL, SKIP_DIR, MARKUP_EXT, STR_LIT, maskMarkup, scanMarkup, makeLineAt } from './check.mjs';

const COPY_EXT = new Set(['.html', '.htm', '.jsx', '.tsx', '.js', '.ts', '.mjs', '.cjs', '.vue', '.svelte', '.astro', '.json', '.md', '.mdx', '.markdown', '.txt']);
// documents (reports, decks, notices, e-mails, press releases, docs) read as prose: one string per paragraph,
// heading, list item or table cell (extractProse)
const PROSE_EXT = new Set(['.md', '.mdx', '.markdown', '.txt']);
const CODE_EXT = new Set(['.jsx', '.tsx', '.js', '.ts', '.mjs', '.cjs']);
const SKIP_JSON = /(^|[\\/])(package(-lock)?|tsconfig[^\\/]*|jsconfig|components|manifest|composer|deno|vercel|turbo|lerna|nx|project|angular|\.eslintrc[^\\/]*|\.prettierrc[^\\/]*|\.babelrc)\.json$/i;
const SKIP_FILE = /(\.(test|spec|stories)\.[cm]?[jt]sx?$|\.d\.ts$|\.generated\.)/i; // tests, stories, typings, machine output
const RANK = { BLOCK: 3, WARN: 2, FYI: 1 };
const INLINE_TAG = new Set(['a', 'abbr', 'b', 'bdi', 'bdo', 'cite', 'data', 'dfn', 'em', 'i', 'mark', 'q', 's', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'ruby', 'rt']);

// ---- files ---------------------------------------------------------------------------
function collect(inputs) {
  const out = [];
  const walk = (p, depth) => {
    let st;
    try { st = fs.statSync(p); } catch { return; }
    if (st.isDirectory()) {
      const name = path.basename(p);
      if (depth > 0 && (SKIP_DIR.has(name) || name.startsWith('.') || name === '__tests__' || name === '__mocks__')) return;
      for (const e of fs.readdirSync(p).sort()) walk(path.join(p, e), depth + 1);
    } else if (st.isFile()) {
      const ext = path.extname(p).toLowerCase();
      if (!COPY_EXT.has(ext) || /\.min\.(js|css)$/.test(p) || st.size > 2_000_000) return;
      if ((ext === '.json' && SKIP_JSON.test(p)) || (depth > 0 && SKIP_FILE.test(p))) return;
      out.push(path.resolve(p));
    }
  };
  for (const p of inputs) walk(p, 0);
  return [...new Set(out)].sort();
}

// ---- text helpers --------------------------------------------------------------------
const ENTITY = { nbsp: ' ', amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", middot: '·', hellip: '…', rarr: '→', larr: '←', times: '×', ndash: '–', mdash: '—', lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”' };
function decode(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (w, e) => {
    if (e[0] === '#') { const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); return Number.isFinite(n) ? String.fromCodePoint(n) : w; }
    return ENTITY[e.toLowerCase()] ?? w;
  });
}
const tidy = (s) => decode(s).replace(/\{\s*(['"`])\s*\1\s*\}/g, ' ').replace(/\s+/g, ' ').trim();
// a template literal's ${…} becomes a neutral placeholder so the words around it stay readable
const untemplate = (s) => s.replace(/\$\{[^}]*\}/g, '{값}');
const bare = (s) => s.replace(/\{값\}/g, ' ');
const jong = (ch) => { const c = (ch || '').charCodeAt(0) - 0xac00; return c >= 0 && c < 11172 ? c % 28 : -1; }; // 0 none · 4 ㄴ · 8 ㄹ

/** Split copy into sentences: on terminal punctuation followed by space, and on line breaks. A dotted date
 * ('2026. 10. 24.') stays in one piece: a period after a digit ends a sentence only when no digit follows. */
function sentences(text) {
  return text.split(/(?<=[.!?。？！…])(?<!\d\.)\s+|(?<=\d\.)\s+(?!\d)|\n+/).map((s) => s.trim()).filter((s) => HANGUL.test(bare(s)));
}

/**
 * The speech level a Korean sentence ends in: 'hapsyo' (합쇼체), 'haeyo' (해요체), 'haera' (해라체),
 * 'banmal' (해체), or 'noun' (a noun phrase or nominal ending: "저장 완료", "결제하기").
 */
function endingLevel(sentence) {
  const core = sentence.replace(/[\s.!?…。？！,~)\]'"”’»>·:;*\-—–]+$/u, '').replace(/\{값\}$/, '').trim();
  const m = /([가-힣]+)$/.exec(core);
  if (!m) return null;
  const w = m[1];
  // 합쇼체 is -ㅂ니다/-습니다 and -ㅂ니까/-습니까: the syllable before 니 closes with ㅂ (합니다, 입니다,
  // 있습니다). '마음이니까', '만나니까' and '아니다' end in other syllables and are not 합쇼체.
  if (/(니다|니까)$/.test(w)) return w.length >= 3 && jong(w[w.length - 3]) === 17 ? 'hapsyo' : /다$/.test(w) ? 'haera' : 'noun';
  if (/(십시오|십시요|소서)$/.test(w)) return 'hapsyo';
  if (/(죠|지요)$/.test(w)) return 'haeyo';
  if (/요$/.test(w) && !/(필요|중요|주요|수요|개요|강요|소요|요요|불필요)$/.test(w)) return 'haeyo';
  if (/다$/.test(w)) return 'haera';
  if (/(할게|볼게|줄게|갈게|할래|해봐|봐줘|해줘|줘|했어|있어|없어|좋아|싫어|맞아|거야|이야|잖아|할까|볼까|갈까|하자|보자|가자)$/.test(w)) return 'banmal';
  return 'noun';
}

// ---- roles ---------------------------------------------------------------------------
// Ordered: the first pattern a name matches decides the role. Error-ness, dialogs and legal text are
// tracked separately because they cut across roles (an error toast, a button inside a dialog).
const NAME_ROLES = [
  ['toast', /toast|snack|notif(y|ication)|enqueue|flash/i],
  ['empty', /empty|no[-_]?(result|data|item|content)s?|zero[-_]?state|blank[-_]?state/i],
  ['button', /(^|[^a-z])(btn|button|cta|submit|ok|cancel|primary[-_]?action|secondary[-_]?action)($|[^a-z])|(button|btn|cta|submit|ok|cancel|confirm|action)(text|label|title)?$|^(ok|cancel|confirm|submit|action)$/i],
  ['placeholder', /placeholder/i],
  ['heading', /title|heading|headline|^h[1-6]$/i],
  ['helper', /help|hint|caption|description|desc$|sub(title|text|copy)|guide/i],
  ['label', /label$|^label/i],
];
const ERRORISH = /err(or)?|fail|invalid|danger|exception|warn/i;
const ERROR_TEXT = /(오류|에러|실패|문제가 (발생|생겼)|할 수 없|수 없어|수 없습니다|되지 않았|못했|불가능|잘못된|유효하지 않|만료|초과했|부족해|부족합)/;
// A dialog is context, not a role: a button or paragraph inside one keeps its own role.
const DIALOGISH = /^(window\.)?(confirm|alert|prompt)$|(Dialog|Modal|Sheet|Popup|Popover|Confirm)|(^|[-_\s.])(dialog|modal|sheet|popup|popover|confirm)(?![a-z])/;
const LEGALISH = /terms|policy|privacy|legal|agreement|consent[-_]?(text|body|doc)|disclaimer|약관|개인정보|^term$|^term[A-Z_-]|[a-z]Term(s)?([A-Z_-]|$)/i;
// Strings written in someone else's voice or kept as data: example prompts a user would type, search
// aliases, keywords, sample content, FAQ questions. They are not the product speaking, so no rule reads them.
const COPY_KEY = /^(primary|alternates|text|label|title|message|body|copy|cta|description|placeholder|helper|value)$/i;
const DATA_NAME = /^(prompts?|.*prompt(s|for)?|utterances?|says?|said|samples?|examples?|aliases|.*aliases|synonyms?|keywords?|queries|query|search(terms?|words?)|tags?|q|questions?)$/i;
// An array named for content its users write or own (listings, posts, people) holds sample records, not
// the product's own copy: "바구니 달린 자전거 팝니다" is a seller's title. Matched on the array's name only.
const RECORD_NAME = /^(listings?|products?|goods|posts?|articles?|reviews?|comments?|feeds?|threads?|chats?|family|families|recipients?|people|persons|members?|friends?|contacts?|users?|sellers?|neighbou?rs?|neighbou?rhoods?|books?|mock\w*|dummy\w*|fixtures?|seeds?)$/i;

/** The name of the array a literal sits in: its variable (`const LISTINGS: Listing[] = [`) or key (`aliases: [`). */
function arrayKeyAt(code, at) {
  let depth = 0;
  for (let i = at - 1, stop = Math.max(0, at - 20000); i >= stop; i--) {
    const ch = code[i];
    if (ch === ']') depth++;
    else if (ch === '[') {
      if (depth > 0) { depth--; continue; }
      const m = /([A-Za-z_$][\w$]*|"[^"]*"|'[^']*')(?:\s*:\s*[^=;{}()]+?\s*=|\s*[:=])\s*$/.exec(code.slice(Math.max(0, i - 200), i));
      return m ? m[1].replace(/^["']|["']$/g, '') : null;
    }
  }
  return null;
}

function roleFromNames(names) {
  for (const n of names) {
    if (!n) continue;
    for (const [role, re] of NAME_ROLES) if (re.test(n)) return role;
  }
  return null;
}

// A logo or wordmark is a name, not copy: its text keeps the brand's own spelling, dot and all ("다시.").
const LOGOISH = (el) => [...el.cls].some((c) => /^(logo|wordmark)([-_].*)?$/i.test(c)) || /^(Logo|Wordmark|BrandMark)$/.test(el.raw);
// A class that names a hint, caption or note marks helper text even when it starts with "button" ("button-hint").
const HELPER_CLASS = /(^|[-_])(hint|help|helper|caption|desc|description|note|subtext|subtitle)$/i;

function roleFromElement(chain) {
  // chain: innermost first
  if (chain.slice(0, 2).some(LOGOISH)) return 'data';
  for (const el of chain) {
    if (el.tag === 'button' || (el.tag === 'input' && /type\s*=\s*["']?(submit|button)/i.test(el.attrs || ''))) return 'button';
    if (/^h[1-6]$/.test(el.tag)) return 'heading';
    if (el.tag === 'title') return 'heading';
    if (el.tag === 'label' || el.tag === 'legend') return 'label';
    if (el.tag === 'a' && [...el.cls].some((c) => /btn|button|cta/i.test(c))) return 'button';
    const byComponent = /^[A-Z]/.test(el.raw) ? roleFromNames([el.raw]) : null;
    if (byComponent) return byComponent;
    if ([...el.cls].some((c) => HELPER_CLASS.test(c))) return 'helper';
    const byClass = roleFromNames([...el.cls].filter((c) => /^(btn|button|cta|toast|snackbar|empty|title|heading|headline|helper|hint|caption|label|placeholder)([-_].*)?$/i.test(c)));
    if (byClass) return byClass;
  }
  return null;
}

const chainNames = (chain) => chain.flatMap((e) => [e.raw, ...e.cls]);

// ---- extraction ----------------------------------------------------------------------
/** Every Hangul string in one file: { line, text, role, err, dialog, legal, link, via, name }. */
/** Markdown and plain text: front matter, fenced code, comments, inline code, HTML tags and link targets are
 *  left out; image alt text is read as alt text, block quotes as quotes. */
function extractProse(raw, push) {
  const lines = raw.split('\n');
  const offs = [];
  let off = 0;
  for (const l of lines) { offs.push(off); off += l.length + 1; }
  let i = 0;
  if (/^---\s*$/.test(lines[0] || '')) { const end = lines.findIndex((l, k) => k > 0 && /^(---|\.\.\.)\s*$/.test(l)); if (end > 0) i = end + 1; }
  const clean = (t) => t
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/(\*\*|__|~~)(\S[^]*?)\1/g, '$2')
    .replace(/(^|\s)[*_](\S[^*_]*?)[*_](?=\s|$|[.,!?])/g, '$1$2');
  const P = { prose: true, via: 'prose' };
  let para = [], start = -1, fence = null, list = 0, inList = false;
  const flush = () => { if (para.length) push(offs[start], clean(para.join(' ')), P); para = []; start = -1; };
  for (; i < lines.length; i++) {
    const l = lines[i];
    const f = l.match(/^\s*(```|~~~)/);
    if (fence) { if (f && f[1] === fence) fence = null; continue; }
    if (f) { flush(); fence = f[1]; continue; }
    if (/^\s*$/.test(l) || /^\s*<!--.*-->\s*$/.test(l) || /^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/.test(l)) { flush(); inList = false; continue; }
    for (const m of l.matchAll(/!\[([^\]]+)\]\([^)]*\)/g)) push(offs[i] + m.index, m[1], { ...P, role: 'a11y', name: 'alt' });
    const h = l.match(/^\s{0,3}#{1,6}\s+(.*?)\s*#*\s*$/);
    if (h) { flush(); push(offs[i], clean(h[1]), { ...P, role: 'heading' }); continue; }
    if (/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?\s*$/.test(l)) { flush(); continue; }
    if (/^\s*\|.*\|\s*$/.test(l)) { flush(); for (const c of l.trim().replace(/^\||\|$/g, '').split('|')) push(offs[i], clean(c), P); continue; }
    const li = l.match(/^\s*(?:[-*+]|\d+[.)])\s+(.*)$/);
    if (li) { flush(); if (!inList) { list++; inList = true; } push(offs[i], clean(li[1]), { ...P, list }); continue; }
    if (!/^\s{2,}\S/.test(l)) inList = false;
    const q = l.match(/^\s*>\s?(.*)$/);
    if (q) { flush(); push(offs[i], clean(q[1]), { ...P, role: 'quote' }); continue; }
    if (!para.length) start = i;
    para.push(l.trim());
  }
  flush();
}

function extract(abs, ext, raw) {
  const out = [];
  const lineAt = makeLineAt(raw);
  const push = (off, text, info = {}) => {
    const t = tidy(untemplate(text));
    if (!HANGUL.test(bare(t))) return; // the placeholder itself is not copy
    const names = [info.name, ...(info.names || [])].filter(Boolean);
    out.push({
      line: lineAt(off),
      text: t,
      role: info.role || 'body',
      err: !!(info.err || names.some((n) => ERRORISH.test(n)) || ERROR_TEXT.test(t)),
      dialog: !!(info.dialog || names.some((n) => DIALOGISH.test(n))),
      legal: names.some((n) => LEGALISH.test(n)),
      link: !!info.link,
      via: info.via,
      name: info.name || null,
      ...(info.prose ? { prose: true } : {}),
      ...(info.list ? { list: info.list } : {}),
    });
  };

  if (PROSE_EXT.has(ext)) { extractProse(raw, push); return out; }
  if (ext === '.json') {
    let data;
    try { data = JSON.parse(raw); } catch { return out; }
    let cursor = 0;
    let recordDepth = 0;
    const at = (v) => {
      const lit = JSON.stringify(v);
      let i = raw.indexOf(lit, cursor);
      if (i < 0) i = raw.indexOf(lit);
      if (i >= 0) cursor = i + lit.length;
      return Math.max(0, i);
    };
    const fill = (v) => v.replace(/\{\{?\s*[\w.]+\s*\}?\}/g, '{값}');
    // A record that names its slot ({ "type": "cta", "primary": "송금하기" }, the omd-microcopy format) is
    // UI copy: read its copy fields with the slot's role and skip notes about the copy.
    const slotOf = (o) => [o.type, o.kind, o.role, o.slot_id, o.slot].find((x) => typeof x === 'string') !== undefined;
    const walkSlot = (o, keys) => {
      const hints = [o.type, o.kind, o.role, o.slot_id, o.slot].filter((x) => typeof x === 'string');
      const role = roleFromNames(hints) || (hints.some((h) => /cta/i.test(h)) ? 'button' : null);
      for (const [k, x] of Object.entries(o)) {
        if (!COPY_KEY.test(k)) continue;
        for (const str of (Array.isArray(x) ? x : [x])) {
          if (typeof str !== 'string' || !HANGUL.test(str)) continue;
          push(at(str), fill(str), { role, err: hints.some((h) => ERRORISH.test(h)), via: 'json', name: [...keys, k].join('.'), names: [...hints, k] });
        }
      }
    };
    const walk = (v, keys) => {
      if (typeof v === 'string') {
        if (!HANGUL.test(v)) return;
        // a string inside an array of records (listings, reviews, sample users) is content, not UI copy
        const role = recordDepth > 0 || keys.some((k) => DATA_NAME.test(k)) ? 'data' : roleFromNames([...keys].reverse());
        push(at(v), fill(v), { role, via: 'json', name: keys.join('.'), names: keys });
      } else if (Array.isArray(v)) {
        const records = v.some((x) => x && typeof x === 'object' && !Array.isArray(x) && !slotOf(x));
        if (records) recordDepth++;
        v.forEach((x, i) => walk(x, [...keys, String(i)]));
        if (records) recordDepth--;
      } else if (v && typeof v === 'object') {
        if (slotOf(v) && Object.keys(v).some((k) => COPY_KEY.test(k))) walkSlot(v, keys);
        else for (const [k, x] of Object.entries(v)) walk(x, [...keys, k]);
      }
    };
    walk(data, []);
    return out;
  }

  const masked = maskMarkup(raw, ext);
  let code = masked; // what the literal pass reads; markup already handled gets blanked out of it
  const blank = (a, b) => { code = code.slice(0, a) + code.slice(a, b).replace(/[^\n]/g, ' ') + code.slice(b); };

  if (MARKUP_EXT.has(ext)) {
    const rec = scanMarkup(abs, ext, raw);
    const els = rec.els;
    for (const el of els) el.attrs = masked.slice(el.start, el.tagEnd);
    const chainAt = (off) => {
      let inner = null;
      for (const el of els) if (el.tagEnd <= off && (el.end == null || off < el.end) && (!inner || el.start > inner.start)) inner = el;
      const chain = [];
      for (let e = inner; e; e = e.parent) chain.push(e);
      return chain;
    };
    const errOf = (chain) => chain.some((e) => (/^[A-Z]/.test(e.raw) && ERRORISH.test(e.raw)) || [...e.cls].some((c) => /^(error|danger|invalid|alert|warning)([-_].*)?$|[-_](error|danger|invalid)$/i.test(c)));
    const linkOf = (chain) => chain.slice(0, 2).some((e) => e.tag === 'a' || /^(Link|NavLink|Anchor)$/.test(e.raw));
    const infoOf = (chain, extra) => ({ role: roleFromElement(chain), err: errOf(chain), link: linkOf(chain), names: chainNames(chain), ...extra });

    // Text nodes, joined per element: "잔액이 <b>{n}원</b> 부족해요" is one sentence, so inline children
    // and {expressions} are read in place ({값}), and a block child ends the sentence.
    const kids = new Map();
    const own = new Map();
    for (const el of els) if (el.parent) (kids.get(el.parent) || kids.set(el.parent, []).get(el.parent)).push(el);
    const top = [];
    for (const seg of rec.segs) {
      const chain = chainAt(seg.pos);
      if (chain.length) (own.get(chain[0]) || own.set(chain[0], []).get(chain[0])).push(seg);
      else top.push(seg);
    }
    const segText = (seg) => {
      if (!seg.expr) return seg.s;
      const lit = /^\{\s*(["'`])((?:\\.|(?!\1)[^\\])*)\1\s*\}$/.exec(seg.s.trim());
      return lit ? lit[2] : '{값}';
    };
    const inline = (el) => {
      const items = [...(own.get(el) || []).map((s) => ({ pos: s.pos, seg: s })), ...(kids.get(el) || []).map((c) => ({ pos: c.start, el: c }))].sort((a, b) => a.pos - b.pos);
      const parts = []; // [{ pos, text }]: a new part starts after each block child
      let cur = null;
      for (const it of items) {
        if (it.seg) {
          if (!cur) parts.push((cur = { pos: it.seg.pos, text: '' }));
          cur.text += segText(it.seg);
        } else if (it.el.tag === 'br' || it.el.tag === 'wbr') {
          if (cur) cur.text += it.el.tag === 'br' ? ' ' : '';
        } else if (INLINE_TAG.has(it.el.tag) && !/^[A-Z]/.test(it.el.raw)) {
          const sub = inline(it.el);
          if (!cur) parts.push((cur = { pos: it.el.start, text: '' }));
          cur.text += sub.map((p) => p.text).join(' ');
        } else if (/^[A-Z]/.test(it.el.raw) && it.el.end === it.el.tagEnd) {
          if (cur) cur.text += '{값}';
        } else cur = null; // a block element or a component with children: the sentence stops here
      }
      return parts;
    };
    const SKIP_TEXT = new Set(['script', 'style', 'code', 'pre', 'kbd', 'samp', 'svg', 'math', 'template']);
    for (const el of els) {
      if (SKIP_TEXT.has(el.tag)) continue;
      if (INLINE_TAG.has(el.tag) && el.parent && !SKIP_TEXT.has(el.parent.tag) && !/^[A-Z]/.test(el.parent.raw)) continue; // read with its parent
      const chain = [];
      for (let e = el; e; e = e.parent) chain.push(e);
      if (chain.some((e) => SKIP_TEXT.has(e.tag))) continue;
      for (const part of inline(el)) {
        if (!HANGUL.test(part.text)) continue;
        const lead = part.text.length - part.text.trimStart().length;
        push(part.pos + lead, part.text, infoOf(chain, { via: 'text', name: el.raw }));
      }
    }
    // In JSX/TSX/JS, text outside every element is code (imports, constants, types), not copy: the
    // literal pass below reads its strings with their names. In HTML-like files it is text.
    const codeFile = CODE_EXT.has(ext);
    if (!codeFile) for (const seg of top) if (!seg.expr && seg.hangul) push(seg.pos, seg.s, { via: 'text' });
    const topSet = new Set(codeFile ? top : []);
    for (const seg of rec.segs) if (!seg.expr && !topSet.has(seg)) blank(seg.pos, seg.pos + seg.s.length);

    // attribute values on each element
    const handlers = [];
    for (const el of els) {
      const attrs = el.attrs.slice(el.raw.length + 1);
      const base = el.start + el.raw.length + 1;
      const chain = [];
      for (let e = el; e; e = e.parent) chain.push(e);
      // an event handler ({() => setToast('저장했어요')}) is code: it stays for the literal pass, which reads
      // its strings by the call they are passed to (toasts, notices and alerts usually live there), not by
      // the element around them
      const keep = [];
      const re = /([A-Za-z_:@][\w:.-]*)\s*=\s*/g;
      let m;
      while ((m = re.exec(attrs))) {
        const name = m[1];
        const k = re.lastIndex;
        const q = attrs[k];
        let b = k;
        if (q === '"' || q === "'") { b = attrs.indexOf(q, k + 1); if (b < 0) break; b += 1; }
        else if (q === '{') {
          let d = 0;
          let qq = null;
          for (b = k; b < attrs.length; b++) {
            const ch = attrs[b];
            if (qq) { if (ch === '\\') { b++; continue; } if (ch === qq) qq = null; continue; }
            if (ch === '"' || ch === "'" || ch === '`') qq = ch;
            else if (ch === '{') d++;
            else if (ch === '}') { d--; if (d === 0) { b++; break; } }
          }
        } else continue;
        re.lastIndex = b;
        if (/^(on[A-Z]|on:)/.test(name)) { if (q === '{') keep.push([base + k, base + b]); continue; }
        if (/^(class|className|style|href|src|srcSet|id|key|ref|type|rel|target|lang|dir|role|for|htmlFor|xmlns|d|viewBox|fill|stroke|width|height|name)$/i.test(name) || /^(data-|@|bind:)/.test(name)) continue;
        const valueSrc = attrs.slice(k, b);
        const lits = q === '{' ? [...valueSrc.matchAll(STR_LIT)].map((x) => ({ s: x[2], at: x.index + 1 })) : [{ s: valueSrc.slice(1, -1), at: 1 }];
        let role = /^(aria-label|aria-description|alt|title)$/i.test(name) ? 'a11y' : roleFromNames([name]);
        if (!role && el.tag === 'input' && name === 'value') role = /type\s*=\s*["']?(submit|button)/i.test(el.attrs) ? 'button' : 'body';
        if (!role && /^(children|text|label|content|message)$/i.test(name) && /^[A-Z]/.test(el.raw)) role = roleFromNames([el.raw]);
        for (const l of lits) {
          if (!HANGUL.test(l.s)) continue;
          push(base + k + l.at, l.s, { role: role || roleFromElement(chain), err: ERRORISH.test(name) || errOf(chain), via: 'attr', name, names: [name, ...chainNames(chain)] });
        }
      }
      let from = el.start;
      for (const [a, b] of keep) { blank(from, a); from = b; }
      blank(from, el.tagEnd);
      handlers.push(...keep);
    }
    if (ext === '.html' || ext === '.htm') {
      // inline scripts were masked for markup; read their literals as code
      for (const m of raw.matchAll(/<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)) {
        const off = m.index + m[0].indexOf(m[1]);
        literalPass(maskMarkup(' '.repeat(off) + m[1], '.js'), push, null, null);
      }
      return out;
    }
    literalPass(code, push, chainAt, infoOf, (at) => handlers.some(([a, b]) => at >= a && at < b));
    return out;
  }
  if (CODE_EXT.has(ext)) literalPass(code, push, null, null);
  return out;
}

/** String literals in code, with the call, key or variable they belong to. */
function literalPass(code, push, chainAt, infoOf, inHandler = () => false) {
  for (const m of code.matchAll(STR_LIT)) {
    const s = m[2];
    if (!HANGUL.test(s)) continue;
    if (m[1] !== '`' && s.includes('\n')) continue; // a quote pair that spans lines is not one literal
    const at = m.index;
    const tail = code.slice(Math.max(0, at - 160), at).replace(/\s+$/, '');
    let name = null;
    let call = false;
    let mm;
    if ((mm = /([A-Za-z_$][\w$.]*)\s*\(\s*(?:[^()]*,\s*)?$/.exec(tail + ' '))) { name = mm[1]; call = true; }
    else if ((mm = /([A-Za-z_$][\w$]*|"[^"]*"|'[^']*')\s*:\s*(?:\([^()]*\)|[A-Za-z_$][\w$]*)\s*=>\s*$/.exec(tail + ' '))) name = mm[1].replace(/^["']|["']$/g, ''); // key: (x) => `…`
    else if ((mm = /([A-Za-z_$][\w$]*|"[^"]*"|'[^']*')\s*:\s*(?:[^:{},]*\?\s*(?:[^:{},]*:\s*)?)?$/.exec(tail + ' '))) name = mm[1].replace(/^["']|["']$/g, '');
    else if ((mm = /([A-Za-z_$][\w$.]*)\s*(?<![=!<>])=(?!=|>)\s*(?:[^=;]*\?\s*(?:[^=;:]*:\s*)?)?$/.exec(tail + ' '))) name = mm[1];
    // an array of strings under a data key ("aliases: ['…', '…']") reads its key from the bracket that opens it
    const arrayKey = arrayKeyAt(code, at);
    if (!name && arrayKey) name = arrayKey; // const terms = ['…', '…']
    const dataName = (!call && name && DATA_NAME.test(name.split('.').pop())) || (arrayKey && (DATA_NAME.test(arrayKey) || RECORD_NAME.test(arrayKey)));
    if (dataName) { push(at + 1, s, { role: 'data', via: 'literal', name }); continue; }
    // logs, test titles, assertions and module paths are not UI copy
    if (name && /^(console\.\w+|logger\.\w+|log|debug|describe|it|test|expect|require|import)$/.test(name)) continue;
    const thrown = /\bthrow\s+(new\s+)?\w*Error\s*\(\s*$/.test(tail) || /^(Error|TypeError|RangeError|reject)$/.test(name || '');
    if (chainAt && !inHandler(at)) {
      const chain = chainAt(at);
      if (chain.length) {
        const info = infoOf(chain, { via: 'literal', name });
        const byName = name ? roleFromNames([name.split('.').pop(), name]) : null;
        push(at + 1, s, { ...info, role: byName || info.role, err: info.err || thrown, names: [...(info.names || []), name] });
        continue;
      }
    }
    const role = name ? roleFromNames([name.split('.').pop(), name]) : null;
    push(at + 1, s, { role, err: thrown, via: 'literal', name, names: [name] });
  }
}

// ---- findings ------------------------------------------------------------------------
class Findings {
  constructor() { this.map = new Map(); }
  add(file, line, severity, rule, message) {
    const key = `${file}\u0000${line}\u0000${rule}\u0000${message}`;
    const prev = this.map.get(key);
    if (!prev || RANK[severity] > RANK[prev.severity]) this.map.set(key, { file, line, severity, rule, message });
  }
  list() {
    // HW-1 … HW-14 by number, then the genre rules (HW-R*, HW-M*, HW-P*) after them, then anything else
    const no = (r) => { const m = /^[A-Z]+-([A-Z]?)(\d+)$/.exec(r); return !m ? 999 : m[1] ? 100 + (m[1].charCodeAt(0) - 64) * 50 + Number(m[2]) : Number(m[2]); };
    return [...this.map.values()].sort((a, b) => (a.file < b.file ? -1 : a.file > b.file ? 1 : a.line - b.line || no(a.rule) - no(b.rule) || (a.message < b.message ? -1 : 1)));
  }
}

// ---- rules (SKILL.md §3b; sources in references/ux-writing.md) ------------------------
const isCopy = (s) => s.role !== 'data';
const isUi = (s) => s.role !== 'data' && s.role !== 'a11y';

// HW-1 · spelling: 「한글 맞춤법」 (제35항 되어→돼, 제53항 -(으)ㄹ게, 제27항 붙임 2 며칠) and the
// 표준국어대사전 headwords for loanwords, all checked 2026-10-24.
const SPELLING = [
  [/되요/g, "'되요' → '돼요' (되어요의 준말)"],
  [/됬/g, "'됬' → '됐' (되었의 준말)"],
  [/되서(?!다)/g, "'되서' → '돼서' (되어서의 준말)"],
  [/돼(?=(?:는|고|면|니|던|기|도록|지 않|다)(?![가-힣]))/g, "'돼' here should be '되' ('돼' = '되어': 되는, 되고, 되면)"],
  [/몇\s?일(?=$|[^가-힣]|[은을이에도만째차간동])/g, "'몇 일' → '며칠'"],
  [/어떻해/g, "'어떻해' → '어떡해' (or '어떻게')"],
  [/웬지/g, "'웬지' → '왠지'"],
  [/왠(?=만|일)/g, "'왠만·왠일' → '웬만·웬일'"],
  // loanwords: only where the word starts, so a brand name such as 'W컨셉' or '더블유컨셉' stays as written
  [/(?<![가-힣A-Za-z0-9])메세지/g, "'메세지' → '메시지'"],
  [/(?<![가-힣A-Za-z0-9])컨텐츠/g, "'컨텐츠' → '콘텐츠'"],
  [/(?<![가-힣A-Za-z0-9])컨셉(?!트)/g, "'컨셉' → '콘셉트'"],
  [/(?<![가-힣A-Za-z0-9])악세사리/g, "'악세사리' → '액세서리'"],
  [/(?<![가-힣A-Za-z0-9])어플리케이션/g, "'어플리케이션' → '애플리케이션' (or '앱')"],
  [/(?<![가-힣A-Za-z0-9])셋팅/g, "'셋팅' → '세팅'"],
  [/(?<![가-힣A-Za-z0-9])비지니스/g, "'비지니스' → '비즈니스'"],
  [/(?<![가-힣A-Za-z0-9])메뉴얼/g, "'메뉴얼' → '매뉴얼'"],
  [/(?<![가-힣A-Za-z0-9])마켓팅/g, "'마켓팅' → '마케팅'"],
  [/(?<![가-힣A-Za-z0-9])패널티/g, "'패널티' → '페널티'"],
  [/(?<![가-힣A-Za-z0-9])싸이트/g, "'싸이트' → '사이트'"],
  [/(?<![가-힣A-Za-z0-9])리더쉽/g, "'리더쉽' → '리더십'"],
  [/(?<![가-힣A-Za-z0-9])타겟/g, "'타겟' → '타깃'"],
  [/(?<![가-힣A-Za-z0-9])스케쥴/g, "'스케쥴' → '스케줄'"],
  [/(?<![가-힣A-Za-z0-9])워크샵/g, "'워크샵' → '워크숍'"],
  [/(?<![가-힣A-Za-z0-9])레포트/g, "'레포트' → '리포트'"],
  [/(?<![가-힣A-Za-z0-9])데이타/g, "'데이타' → '데이터'"],
  [/(?<![가-힣A-Za-z0-9])프리젠테이션/g, "'프리젠테이션' → '프레젠테이션'"],
  [/(?<![가-힣A-Za-z0-9])엑세스/g, "'엑세스' → '액세스'"],
  [/(?<![가-힣A-Za-z0-9])디렉토리/g, "'디렉토리' → '디렉터리'"],
  [/(?<![가-힣A-Za-z0-9])팜플렛/g, "'팜플렛' → '팸플릿'"],
  [/(?<![가-힣A-Za-z0-9])렌트카/g, "'렌트카' → '렌터카'"],
  [/(?<![가-힣A-Za-z0-9])화이팅/g, "'화이팅' → '파이팅'"],
  [/(?<![가-힣A-Za-z0-9])플랫홈/g, "'플랫홈' → '플랫폼'"],
  [/(?<![가-힣A-Za-z0-9])쥬스/g, "'쥬스' → '주스'"],
  [/(?<![가-힣A-Za-z0-9])케잌/g, "'케잌' → '케이크'"],
  [/(?<![가-힣A-Za-z0-9])쇼파/g, "'쇼파' → '소파'"],
  [/(?<![가-힣A-Za-z0-9])아답터/g, "'아답터' → '어댑터'"],
  [/(?<![가-힣A-Za-z0-9])알콜/g, "'알콜' → '알코올'"],
  [/(?<![가-힣A-Za-z0-9])멤버쉽/g, "'멤버쉽' → '멤버십'"],
  [/(?<![가-힣A-Za-z0-9])스탭(?![가-힣])/g, "'스탭' → '스태프'"],
  [/(?<![가-힣A-Za-z0-9])버젼/g, "'버젼' → '버전'"],
  [/(?<![가-힣A-Za-z0-9])텔레비젼/g, "'텔레비젼' → '텔레비전'"],
  [/(?<![가-힣A-Za-z0-9])에어콘/g, "'에어콘' → '에어컨'"],
  [/(?<![가-힣A-Za-z0-9])비젼/g, "'비젼' → '비전'"],
];
// spellings that follow 「외래어 표기법」 but that this skill has not confirmed as dictionary headwords (the first
// four have neither form in the dictionary; the rest were not looked up): FYI
const SPELLING_RULE = [
  [/(?<![가-힣A-Za-z0-9])쉐프/, "'쉐프' → '셰프'"],
  [/(?<![가-힣A-Za-z0-9])파트너쉽/, "'파트너쉽' → '파트너십'"],
  [/(?<![가-힣A-Za-z0-9])캐쥬얼/, "'캐쥬얼' → '캐주얼'"],
  [/(?<![가-힣A-Za-z0-9])쥬얼리/, "'쥬얼리' → '주얼리'"],
  [/(?<![가-힣A-Za-z0-9])컨퍼런스/, "'컨퍼런스' → '콘퍼런스'"],
  [/(?<![가-힣A-Za-z0-9])네비게이션/, "'네비게이션' → '내비게이션'"],
  [/(?<![가-힣A-Za-z0-9])매니져/, "'매니져' → '매니저'"],
  [/(?<![가-힣A-Za-z0-9])카달로그/, "'카달로그' → '카탈로그'"],
];
// a particle written after a variable fits only some values: '{email}로' is wrong for 'kim@daum.net' (넷으로)
const VAR_PARTICLE = /\{값\}(으로|로|을|를|이|가|은|는|과|와|이랑|랑)(?![가-힣])/;

// HW-7 · plain words, each pair from a named source (references/ux-writing.md, HW-7 table)
// 겹말 and 군더더기: the second word repeats the first (국립국어원 「한눈에 알아보는 공공언어 바로 쓰기」)
const REDUNDANT = [
  [/과반수\s?이상/, "'과반수 이상' → '과반수' (과반수 already means more than half)"],
  [/매\s[가-힣]+\s?마다/, "'매 ~마다' → '~마다' or '매 ~'"],
  [/미리\s?예약/, "'미리 예약' → '예약'"],
  [/더불어\s?함께/, "'더불어 함께' → '함께'"],
  [/반드시\s?필요/, "'반드시 필요' → '꼭 있어야' or '필요'"],
  [/진위\s?여부|유무\s?여부/, "'진위 여부' → '진위' or '~인지'"],
  [/(?<![가-힣])약\s?\d[\d,.]*\s?[가-힣]*여\s?[가-힣]/, "'약 500여 명': '약' and '-여' say the same; keep one"],
];
const PLAIN = [
  [/금일/, "'금일' → '오늘'"],
  [/익월/, "'익월' → '다음 달'"],
  [/(?<![가-힣])익일/, "'익일' → '다음 날'"],
  [/(?<![가-힣])금번/, "'금번' → '이번'"],
  [/(?<![가-힣])구좌/, "'구좌' → '계좌'"],
  [/(?<![가-힣])잔고(?![가-힣]{2})/, "'잔고' → '잔액'"],
  [/상기(?=\s|의 |된 |한 |와 |내용|사항|금액|정보)/, "'상기' → '위' (위 내용, 위 금액)"],
  [/수령지/, "'수령지' → '받는 곳'"],
  [/콜센터/, "'콜센터' → '고객센터'"],
  [/견양/, "'견양' → '보기'"],
  [/내점/, "'내점' → '방문'"],
  [/차기(?=\s|에|의|부터)/, "'차기' → '다음'"],
  [/여신/, "'여신' → '대출'"],
  [/상이(?:합니다|해요|하며|하고|한|하니|할)/, "'상이하다' → '다르다'"],
  [/세션(?:이|은)? ?만료/, "'세션이 만료되었습니다' → '로그인 시간이 지났어요'"],
  [/선납/, "'선납' → '미리 내기'"],
  [/(?:불가능|불가)(?:합니다|해요|함|하니|하오니)/, "'불가능합니다' → '할 수 없어요'"],
];

const GENERIC_ERR = /(?:알 수 없는 )?(?:오류|에러|문제)(?:가|이) (?:발생|생겼)|오류입니다|에러입니다|실패했(?:습니다|어요)|요청을 처리할 수 없|처리 중 (?:오류|문제)|잠시 후 다시 시도/;
const NEXT_STEP = /(다시 시도|다시 해|다시 입력|확인해|확인한 (?:뒤|후)|입력해|선택해|새로고침|설정에서|고객센터|문의|연결해|로그인해|업데이트해|변경해|바꿔|눌러|해 ?주세요|하세요|해 ?보세요|할 수 있어요|할 수 있습니다)/;
const CAUSE = /(네트워크|인터넷|연결|서버|점검|시간이 지나|만료|권한|잔액|한도|형식|비밀번호|아이디|이메일|인증|카드|계좌|파일|용량|크기|너무 많|입력한|선택한|위치|카메라|결제|주문|재고|품절|이미)/;
const TECH = /\b(undefined|null|NaN|Exception|ERR_[A-Z_]+|stack trace|status code)\b|\[object Object\]/;
const VAGUE_BUTTON = /^(확인|예|네|OK|오케이|제출|진행|실행)$/i;
const VAGUE_LINK = /^(자세히 ?보기|더 ?보기|바로 ?가기|여기|여기를 클릭|클릭|링크)$/;
const QUANTITY = /\d[\d,.]*\s*(?:원|%|일|개월|달|년|회|번|건|개|명|시간|분|초|km|m|kg|GB|MB|자|차|주)/g;
// a passive stem plus -어지다 in any form: 되어지는, 되어져요, 되어졌어요, 되어집니다, 되어질, 되어짐, 잊혀진
const DOUBLE_PASSIVE = /((?:보여|되어|잊혀|쓰여|씌어|불려|닫혀|열려|짜여|읽혀|팔려|담겨|놓여|나뉘어|믿겨|갇혀|잡혀|먹혀|뽑혀|쌓여|섞여|묶여|막혀|찍혀|꺾여)(?:지|져|졌|집|질|짐|진))/;
const SYSTEM_DONE = /처리(?:가|를|이)? ?(?:완료|되었|됐)|완료(?:되었|됐)(?:습니다|어요)|처리 중입니다/;
const DOUBLE_NEG = /(?:지 않으면|안 하면|없으면)[^.!?]{0,20}(?:수 없|안 돼|못 해|불가)|(?:실패|오류)(?:하지|가 없지) 않/;
// '-드리다' as a suffix belongs to a few nouns (말씀, 감사, 부탁, 인사…); stacked on others it reads over-polite
// English frames that Korean says with a verb or a plainer order (국립국어원 공공언어 자료; references/korean-issues.md)
const CALQUES = [
  [/(?<![가-힣])하나의\s[가-힣A-Za-z]/, "'하나의 + noun' is 'a single …': put the count after the noun ('PDF 하나로')"],
  [/[을를]\s?바탕으로\s(?:만들어진|생성된|작성된)/, "'~을 바탕으로 만들어진' is 'generated based on': '~으로 만든'"],
  [/가장\s[가-힣]+\s?(?:것|곳|방법|서비스|제품|도구|기업|사람)\s?중\s?(?:의\s)?하나/, "'가장 ~한 것 중 하나' is 'one of the most …': say what sets it apart"],
  [/는\s?것이\s?(?:중요|필요)(?:합니다|해요|하다|함)/, "'~하는 것이 중요합니다' wraps the point in a noun clause: '~해야 합니다', '~하세요'"],
  [/(?:주의|확인|협조|동의|참여)가\s?요구(?:됩니다|돼요|된다|됨)/, "'~가 요구됩니다' is an English passive: '~해야 합니다', '~해 주세요'"],
  [/(?<![가-힣])당신(?:의|은|이|을|에게|께|만의)/, "'당신' is 'you' translated: Korean drops the subject or uses a name, a title or 님"],
  [/소개(?:시키|시켜|시켰|시킵)/, "'소개시키다' adds a causative the verb doesn't need: '소개하다'"],
  [/[을를]\s?(?:수행|실시)(?:합니다|해요|한다|하세요|함|했습니다)|(?:설치|삭제|업데이트|재시작|가입|인증|등록|변경|결제)[을를]?\s?진행(?:합니다|해요|한다|하세요|함)/, "a noun plus a light verb ('설치를 진행합니다', '점검을 실시합니다') pads the verb: '설치합니다', '점검합니다'"],
];
const DRIDA = /(공유|요청|전달|회신|제안)\s?드(?:리|립|려|렸)/;
const OBJECT_HONORIFIC = /(나오셨|품절이(?:세요|십니다|시네요)|매진이(?:세요|십니다)|(?:접수|등록|변경|취소|발송|배송|결제|완료|적립|할인|입고|준비|처리|승인|해지|연결|설치|저장|삭제|품절|매진)되셨|말씀이 계시)/;
// a thing that 'is possible' or 'exists', said with -시- ('카드 결제 가능하세요', '재고 있으십니다'); a question
// to a person ('통화 가능하세요?', '쿠폰 있으세요?') honors that person and is right
const THING_HONORIFIC = /((?:결제|주문|예약|배송|환불|교환|적립|할인|구매|신청|변경|취소)\s?가능하(?:세요|십니다|셔요)|(?:사이즈|색상|재고|좌석|잔여석|상품|물량)(?:이|가|은|는|도)?\s?있으(?:세요|십니다|셔요))(?!\s?\?)/;
const LOSS = /놓치(?:면|지 마|시면|기 전에)|손해(?:예요|입니다|를 보|볼)|후회(?:할|하실|하지 않)|마지막 기회|지금 (?:아니면|안 하면)|(?:곧|오늘) (?:마감|종료|사라져)|(?:품절|매진) 임박|서두르세요/;
const DECLINE = /^(아니요|아니오|괜찮아요|됐어요|싫어요|다음에|안 ?할래요)[,.\s]/;
// consent to advertising labelled as a benefit ('혜택 알림 받기')
const AD_CONSENT_AS_BENEFIT = /혜택\s?(?:알림|소식)\s?(?:받기|수신|동의)/;
// a superlative, a 'first/only' or a promise with nothing behind it; a measured 최고 (기온, 속도, 점수) or a
// ranking of causes is not a claim
const HYPE = /최고의|(?:업계|국내|세계|국내외)\s?(?:최초|유일|최고|1위)|유일한|최상의|최첨단|획기적|역대급|(?<![A-Za-z])No\.?\s?1(?!\d)|100\s?%\s?(?:보장|만족|효과|성공|안전)|(?:효과|결과|성공|만족)(?:를|을|가|이|는)?\s?보장(?:합니다|해요|해 드립니다|됩니다)|반드시\s?(?:효과|성공|해결)|완벽(?:한|하게)\s?(?:해결|보장|효과)/;
const SHAME = /(포기|손해|안 받|필요 없|비싸게|싫|버릴|안 할래|모를래|관심 없)/;

// ---- situations (references/situations.md) ---------------------------------------------
// A situation applies to a whole file. 'app' is the default and adds nothing. report and deck add HW-R*;
// notice adds the commanding-ending rules (HW-P1…P4); the others carry their conventions in the reference.
const CONTEXTS = ['app', 'site', 'report', 'deck', 'notice', 'email', 'press', 'docs', 'hiring', 'product'];
// report and deck write 명사형 bullets and 합쇼체/해라체 sentences, never 해요체 (HW-R*)
const DOC_REGISTER = new Set(['report', 'deck']);
// surfaces that state facts rather than address a user in an app: HW-8's "say what the user did" doesn't apply
const NOT_UI = new Set(['report', 'deck', 'notice', 'press', 'docs', 'email', 'hiring']);
const PRAGMA = /hangul-context["']?\s*[:=]\s*["']?([A-Za-z]+)/;
/** The situation a file declares in its first 10 lines: { name, line } or null. */
function pragmaOf(raw) {
  const head = raw.split('\n', 10);
  for (let i = 0; i < head.length; i++) { const m = PRAGMA.exec(head[i]); if (m) return { name: m[1].toLowerCase(), line: i + 1 }; }
  return null;
}
// ---- detection (--context=auto, the default) ----
// Only a format marker decides it: a reveal.js, Marp or Slidev deck. A deck switches HW-8's and HW-11's UI
// checks off, so a folder name ('slides/' is a carousel as often as a deck) or the wording never does.
const DECK_MARKERS = [
  [/\breveal(?:\.min)?\.(?:js|css)\b|class=["'][^"']*\breveal\b[^"']*["'][\s\S]*class=["'][^"']*\bslides\b/, 'reveal.js'],
  [/^marp:\s*true\b|data-marpit|\bmarpit\b/m, 'Marp'],
  [/@slidev\/|^\s*slidev:/m, 'Slidev'],
];
/** The situation the file's own content points to, or null: { genre, signals }. */
function detectGenre(raw) {
  for (const [re, label] of DECK_MARKERS) if (re.test(raw)) return { genre: 'deck', signals: [label] };
  return null;
}

// report: 국립국어원 「쉬운 공문서 쓰기 길잡이」 제3부 제3장; 「행정업무규정」 제7조⑤; 「한글 맞춤법」 마침표 (1) [붙임 2]
const NOUN_END = /\s[가-힣]*[함음임됨냄봄짐줌옴씀]\.?$/; // a 명사형 ending (확보함, 낮아짐, 있음) on a line of two or more words
const CLOCK12 = /(?:오전|오후)\s?\d{1,2}\s?(?:시|:\d{2})/;
// notice: 국립국어원 「쉬운 공문서 쓰기 길잡이」 제1부 제2장 (고압적 표현, 차별적 표현)
const P_GEOT = /([가-힣])\s것\s*[.!]?$/; // '~할 것' closing a sentence (the syllable before 것 ends in ㄹ)
const P_BARAM = /(?:문의|협조|참고|확인|제출|지참|참석|양지|숙지|유의|회신|작성|신청|준수|이행|방문|참여|열람|기재|첨부|보고|하기|주기|되기)\s?바람\s*[.!]?$/;
const P_HARA = /[가-힣](?:하라|해라|하여라)\s*[.!]?$/;
const P_HALGEOSIDA = /(?:다|라)\s?(?:고\s?)?할\s?것이다/;
const P_DISCRIM = /장애(?:자(?!녀)|우)/;
// documents: formulas measured as LLM signals (im-not-ai C-6, D-3, D-6, D-8; references/korean-issues.md)
const FORMULA = [
  [/(?:에\s?대해|에\s?관해)\s?(?:자세히\s|함께\s)?알아보(?:겠습니다|도록\s하겠습니다|아요|겠어요)/, "a meta opener announces the text instead of starting it"],
  [/(?:크게|다음과\s?같이)\s?(?:두|세|네|다섯)\s?가지로\s?(?:나눌|정리할|살펴볼)\s?수\s?있/, "a meta opener counts the parts instead of giving them"],
  [/(?:중요한|핵심은|핵심적인|주목할)\s?(?:것은|점은)\s/, "the cleft 'X한 것은 ~이다' delays the point; say it directly"],
  [/도움이\s?되(?:셨|었)(?:기를|길)\s?바랍니다|도움이\s?되었으면\s?좋겠습니다/, "a closing wish the reader didn't ask for"],
  [/버그\s?수정\s?및\s?성능\s?개선|성능\s?개선\s?및\s?버그\s?수정|안정성\s?개선\s?및\s?버그\s?수정/, "a release note that says nothing: name the bug and what changed"],
];
// [pattern, count from which a document is told, and per 1,000 Hangul characters, message]. Calibrated on the
// 2026-10-25 test: an edited post runs about 3 connective commas per 1,000 characters, the drafts that read
// choppy 7 or more.
const DENSITY = [
  [/(?:이|가)\s아니라\s/, 3, 0, "the contrast 'A가 아니라 B' (an LLM habit, im-not-ai C-8)"],
  [/(?:고|며|면|서|지만|는데|니까|므로|어서|아서|해서),\s/, 5, 6, "a comma right after a connective ending (im-not-ai C-11)"],
  [/되고\s?있(?:다|습니다|어요|으며|는)/, 3, 0, "the passive progressive '~되고 있다' (im-not-ai A-20)"],
  [/[을를]\s?통해(?:서)?\s/, 4, 3, "'~을 통해'"],
  [/에\s?(?:대한|대해|관한|관해)\s/, 5, 3, "'~에 대한·~에 대해'"],
];
// documents: what a drafting agent leaves for the person who asked, which the reader must never see
const WRITER_NOTE = /예시(?:입니다|예요)[^\n]{0,40}(?:실제|바꿔|수정|맞게|남기고)|게시 전에|실제 (?:정보|내용|값|주소|시간|수치|항목|계획)(?:으로|로|만|에)? ?[^.\n]{0,12}(?:바꿔|수정|교체|남기|맞게)|확인 후[^.\n]{0,20}(?:수정|기입|추가|채워|바꿔)(?:해)? ?(?:주세요|하세요)|(?:추정|가정)(?:해서|하여|에 기반)[^.\n]{0,15}(?:문구|썼|작성|적었)|(?:작성 시|별도) 확인 필요|대괄호|\((?:[^)]*?)(?:입력|기입|기재)해 주세요\)/;
const PLACEHOLDER = /\[[^\]\n]{0,40}(?:기재|입력|이름|성함|연락처|주소|금액|날짜|링크|직함|회사명|담당자|OO|○○|XX)[^\]\n]{0,40}\]|○{2,}|◯{2,}|(?<![A-Za-z])O{3,}(?![A-Za-z])/;

const STRING_RULES = [
  { id: 'HW-1', check(s, report) {
    if (!isCopy(s)) return;
    const t = s.text;
    for (const [re, msg] of SPELLING) if (new RegExp(re.source).test(t)) report('BLOCK', `spelling: ${msg}`);
    for (const [re, msg] of SPELLING_RULE) if (re.test(t)) report('FYI', `spelling: ${msg} (by 「외래어 표기법」; not confirmed as a dictionary headword)`);
    // '-(으)ㄹ께' only at the end of a word: '회원들께 알려요' is the honorific particle 께
    for (const m of t.matchAll(/([가-힣])께(?=요|$|[.!?~,])/g)) if (jong(m[1]) === 8) report('BLOCK', `spelling: '${m[1]}께' → '${m[1]}게' (-(으)ㄹ게)`);
    const vp = t.match(VAR_PARTICLE);
    if (vp) report('FYI', `particle '${vp[1]}' after a variable fits only some values: write '을(를)', '(으)로', '이(가)', or put a noun before it ('{값} 주소로')`);
    for (const m of t.matchAll(/([가-힣])에요/g)) {
      const before = t.slice(Math.max(0, m.index - 1), m.index + 1);
      if (jong(m[1]) === 0 && m[1] !== '이' && before !== '아니') report('WARN', `spelling: '${m[1]}에요' → '${m[1]}예요' (a noun ending in a vowel takes 예요; keep 에요 only when 에 is a particle, as in '학교에요')`);
    }
    if ((s.role === 'button' || s.role === 'label' || t.length <= 12) && /(^|[\s,/·(])아니오($|[\s,/·)])/.test(t)) report('WARN', "spelling: '아니오' → '아니요' as an answer");
  } },
  { id: 'HW-2', check(s, report) {
    if (!isCopy(s)) return;
    const t = s.text;
    for (const m of t.matchAll(/([가-힣])(수 ?(?:있|없)|때|것|거(?:예요|에요|야|라|죠|든|면)|줄 ?(?:알|몰))/g)) {
      if (jong(m[1]) !== 8) continue;
      if ((m[2] === '것' && /^(날|들|탈|별)$/.test(m[1])) || (m[2] === '때' && m[1] === '물')) continue; // 날것·들것·탈것·별것·물때 are single words
      report('WARN', `spacing: '${m[1]}${m[2]}' → '${m[1]} ${m[2].replace(/^(수|줄) ?/, '$1 ')}' (dependent nouns are spaced)`);
    }
    if (/중\s+(입니다|입니까|이에요|인가요|이세요|이야)/.test(t)) report('WARN', "spacing: '중 입니다' → '중입니다' (the copula attaches)");
    // more dependent nouns (「한글 맞춤법」 제42항; 국립국어원 「한눈에 알아보는 공공언어 바로 쓰기」), each guarded
    // against its attached look-alike: 그중·도중·한밤중 and 사용중지 are words, '-ㄴ지' is also the ending 'whether',
    // 안되다 is also a word ('go badly'), and '-는데' is also the ending 'but'
    const jung = t.match(/(회의|통화|진행|작업|처리|배송|준비|검토|운영|사용|이용|접속|업데이트|점검|공사|상담|수업|운전|녹화|충전|다운로드|업로드|설치|로딩|저장|결제|통신|연결)중(?=$|[^가-힣]|[이입인에])/);
    if (jung) report('WARN', `spacing: '${jung[0]}' → '${jung[1]} 중' (중 is a dependent noun)`);
    const ijo = t.match(/(\d[\d,.]*[가-힣]{0,3})(이상|미만|이하|초과)(?=$|[^가-힣]|(?:은|는|을|를|의|에|도|만|이|부터|으로|인)(?:$|[^가-힣]))/);
    if (ijo) report('WARN', `spacing: '${ijo[0]}' → '${ijo[1]} ${ijo[2]}' (이상·미만·이하·초과 are nouns)`);
    for (const m of t.matchAll(/([가-힣])지\s?(?:\d+|한|두|세|네|몇|며칠|오래|얼마)\s?[가-힣]{0,3}\s?(?:지나|됐|되었|돼|되면|넘|지났)/g)) {
      if (jong(m[1]) === 4) { report('WARN', `spacing: '${m[1]}지' → '${m[1]} 지' (지 counting elapsed time is a dependent noun: '가입한 지 1년')`); break; }
    }
    const andwe = t.match(/(?:면|서는|어서는|아서는)\s?(안(?:되|돼|됩|됐))/);
    if (andwe) report('WARN', `spacing: '${andwe[1]}' → '안 ${andwe[1].slice(1)}' (a prohibition is spaced; '안되다' is the word for 'go badly')`);
    const si = t.match(/(가입|신청|결제|계약|발생|접속|로그인|비교|변경|취소|등록|이용|방문|구매|주문|지원|분실|해지|탈퇴|예약|환불|반품|교환)시(?=\s|에|는|$|[,.])/);
    if (si) report('FYI', `spacing: '${si[0]}' → '${si[1]} 시' (or a verb: '${si[1]}하면', '${si[1]}할 때')`);
    if (/는데\s(?:\d+\s?(?:분|시간|일|주|개월|년|원)|시간이|돈이|비용이|도움이)/.test(t)) report('FYI', "spacing: '~하는데 시간이 걸려요' → '~하는 데' (데 = 'in doing' is a dependent noun; '-는데' = 'but' attaches)");
    if (/(?:하루|일주일|한\s?달|한\s?해|1년|평생)에\s?한번/.test(t)) report('FYI', "spacing: a count is '한 번' ('한 달에 한 번'); '한번' means 'once, try'");
    if (/\d\s?만원/.test(t)) report('FYI', "spacing: 'N만원' → 'N만 원' after the Hangul unit 만 (marketing copy may keep '만원' by house style)");
  } },
  { id: 'HW-3', check(s, report, ctx) {
    if (!isCopy(s)) return;
    const t = s.text;
    // a wave dash that softens the tone ('안녕하세요~') belongs to chat, not to a document; a range stays quiet
    if (NOT_UI.has(ctx) && /[가-힣][~～∼]+(?=\s|$|[.!?])/.test(t)) report('FYI', "punctuation: '~' after a word softens the tone ('안녕하세요~'); a document ends with a period");
    if (/(?<!\d)(?:19|20)\d{2}\.\d{1,2}\.\d{1,2}(?!\d)/.test(t)) report('FYI', "punctuation: numeric dates are written '2026. 10. 24.' (a space after each period)");
    else if (/(?<!\d)(?:19|20)\d{2}\.\s\d{1,2}\.\s\d{1,2}(?![.\d])/.test(t)) report('FYI', "punctuation: a numeric date keeps its final period: '2026. 10. 24.'");
    if (/(?:\d|[원명개분시일월년%])\s+~\s*\d|\d\s*~\s+\d/.test(t)) report('FYI', "punctuation: the range mark '~' attaches on both sides: '10:00~18:00', '6,000만~8,000만 원'");
    else if (/\d\s*[–—]\s*\d/.test(t)) report('FYI', "punctuation: a range takes '~', not a dash: '09:00~18:30'");
    // documents only: UI labels write '동의 (필수)' with a space by habit, and that is the product's call
    if (s.prose && /[가-힣\d%]\s+\((?=[^)]*[가-힣\d])/.test(t)) report('FYI', "punctuation: an opening parenthesis attaches to the word before it: '3분기(7월~9월)'");
    if (/\d\s+:\s*\d{2}(?!\d)|\d\s*:\s+\d{2}(?!\d)/.test(t) && !/[가-힣A-Za-z]\s*:\s/.test(t)) report('FYI', "punctuation: clock times take no spaces around ':': '10:20'");
    // the 「한글 맞춤법」 punctuation appendix (쉼표, 줄임표) and its 해설; 즉· 반면 are left to the writer
    const adv = t.match(/(?:^|[.!?]\s)(그리고|그러나|그런데|그러므로|하지만|따라서|또한|그래서|게다가|그렇지만),\s/);
    if (adv) report('FYI', `punctuation: no comma after a conjunctive adverb ('${adv[1]},' → '${adv[1]} ')`);
    if (/(?<![.\d])\.\.(?![.\d/])|(?<!\.)\.{4,5}(?!\.)/.test(t)) report('FYI', "punctuation: an ellipsis is '…' or three periods '...', not two or four");
    // US-order slash dates next to a weekday or 까지/부터 ('10/24(토)까지'); a fraction or a path stays quiet
    if (/(?<![\d/.])(?:1[0-2]|0?[1-9])\/(?:3[01]|[12]\d|0?[1-9])(?![\d/])(?=\s?\([월화수목금토일]\)|까지|부터|\s?~)/.test(t)) report('FYI', "punctuation: a date is '10월 24일(토)' or '10. 24.(토)', not '10/24'");
    if (/(?<![\d,.])\d{5,}(?:원|명|개|건|회|곳|대|장)/.test(t)) report('FYI', "number: group the digits ('12,000명') or use Hangul units ('1만 2000명')");
    if ((s.role === 'button' || s.role === 'label' || s.role === 'heading') && /[가-힣)]\.$/.test(t) && !/\.\.$|…$/.test(t)) report('FYI', `punctuation: no period on a ${s.role}`);
  } },
  { id: 'HW-4', check(s, report) {
    // a document that reports an error ('9월 3일 결제 오류가 발생했습니다') is not an error message
    if (!isUi(s) || s.prose) return;
    const t = s.text;
    if ((s.err || s.role === 'error' || s.role === 'toast' || s.dialog) && TECH.test(t)) report('WARN', 'error copy shows a technical term or code; say it in the user\'s words');
    if (!GENERIC_ERR.test(t)) return;
    if (!NEXT_STEP.test(t)) report('WARN', 'generic error with no next step: say what happened and what the user can do now');
    else if (!CAUSE.test(t)) report('FYI', 'error says what to do but not what happened; name the cause when it is known');
  } },
  { id: 'HW-5', check(s, report) {
    if (!isUi(s)) return;
    const t = s.text.trim();
    if (s.role === 'toast' && /^(확인|취소)$/.test(t)) report('WARN', `toast action '${t}': name the action it takes ('되돌리기', '목록 보기')`);
    else if (s.role === 'button' && VAGUE_BUTTON.test(t)) report('FYI', `button '${t}': if it does more than acknowledge or move on, name the result ('쿠폰 받기', '송금하기')`);
    if (s.role === 'button' && s.dialog && t === '취소') report('FYI', "dialog button '취소': if it only closes the dialog, write '닫기' ('취소' reads as undoing the task)");
    if (s.link && VAGUE_LINK.test(t)) report('FYI', `link '${t}': name where it goes`);
  } },
  { id: 'HW-6', check(s, report) {
    if (!isUi(s)) return;
    for (const sen of sentences(s.text)) {
      const n = (sen.match(QUANTITY) || []).length;
      if (n >= 3) { report('FYI', `${n} numbers or conditions in one sentence; give each its own sentence or list item`); break; }
    }
  } },
  { id: 'HW-7', check(s, report) {
    if (!isUi(s)) return;
    for (const [re, msg] of PLAIN) if (re.test(s.text)) report('FYI', `plain word: ${msg}`);
    for (const [re, msg] of REDUNDANT) if (re.test(s.text)) { report('FYI', `redundant: ${msg}`); break; }
  } },
  { id: 'HW-8', check(s, report, ctx) {
    if (!isUi(s)) return;
    const t = s.text;
    if (DOUBLE_PASSIVE.test(t)) report('WARN', `double passive '${t.match(DOUBLE_PASSIVE)[1]}…': use the single form ('보이는', '되는', '쓰인')`);
    if (/에 의해(서)? /.test(t)) report('FYI', "'~에 의해 ~되다' reads as translated English; make the actor the subject");
    if (/함에\s?있어(?:서)?/.test(t)) report('WARN', "'~함에 있어' is a Japanese-style frame 국립국어원 corrects: '~하는 데', '~할 때'");
    else if (/에 있어서/.test(t)) report('FYI', "'~에 있어서' → '~에서' / '~에 대해'");
    if (/필요로\s?(?:하|합|해|했|한)/.test(t)) report('WARN', "'~을 필요로 하다' is English 'require': '~이 필요하다' ('현장에 필요한 기능')");
    // English sentence frames in Korean words (references/korean-issues.md); one note per string
    for (const [re, msg] of CALQUES) if (re.test(t)) { report('FYI', msg); break; }
    // a report states what was done ('처리 완료됨'); the user's-side wording is for screens that address a user
    if (!NOT_UI.has(ctx) && !s.prose && (s.role === 'toast' || s.role === 'body' || s.role === 'helper') && SYSTEM_DONE.test(t)) report('FYI', "system wording ('처리가 완료되었습니다'): say what the user did ('저장했어요', '보냈어요')");
  } },
  { id: 'HW-9', check(s, report) {
    // legal text keeps its negative: a consent notice must say what refusing costs ("동의하지 않으면 가입할 수 없어요"),
    // which is the rule's own exception (the user must know something is unavailable)
    if (!isUi(s) || s.legal) return;
    if (DOUBLE_NEG.test(s.text)) report('FYI', "double negative: say it positively ('~하면 ~할 수 있어요')");
  } },
  { id: 'HW-10', check(s, report) {
    if (!isUi(s)) return;
    const m = s.text.match(OBJECT_HONORIFIC) || s.text.match(THING_HONORIFIC);
    if (m) report('WARN', `honorific -시- on a thing ('${m[1]}'): '나왔어요', '품절이에요', '결제할 수 있어요', '재고가 있어요'`);
    const sig = s.text.match(/(?:^|\s)[가-힣]{2,4}\s(?:사원|주임|대리|과장|차장|부장|팀장|실장|본부장|이사|상무|전무|매니저|책임|선임|수석)\s?(?:드림|올림)\s*$/);
    if (sig) report('FYI', `a title after your own name honors yourself ('${sig[0].trim()}'): put it before the name ('마케팅팀 과장 ○○○ 드림')`);
    if (/님\s?귀하|씨\s?귀하/.test(s.text)) report('FYI', "'님 귀하' stacks two honorifics: '○○○ 님' or '○○○ 귀하'");
    const d = s.text.match(DRIDA);
    if (d) report('FYI', `'${d[0]}' stacks -드리다 on a noun that doesn't take it and reads over-polite: '${d[1]}하겠습니다', '${d[1]}합니다' (말씀드리다, 감사드리다 and 부탁드리다 are fine)`);
  } },
  { id: 'HW-12', check(s, report) {
    if (!isUi(s)) return;
    const t = s.text.trim();
    if (s.role === 'button' && DECLINE.test(t + ' ') && SHAME.test(t)) report('WARN', `decline option that shames the user ('${t}'): write a neutral '다음에 할게요' or '닫기'`);
    else if (LOSS.test(t)) report('FYI', 'loss or pressure framing; say what the user gets instead');
    // every profile (owner 2026-10-25): a short label only, so a sentence about benefit notices stays quiet
    const h = !s.legal && t.match(HYPE);
    if (h) report('FYI', `unsupported claim ('${h[0].trim()}'): give the basis beside it (who measured, when, against what) or say plainly what the reader gets`);
    if (!s.legal && t.length <= 30 && AD_CONSENT_AS_BENEFIT.test(t)) report('FYI', `consent label that reads as a benefit ('${t}'): if it asks consent to advertising, call it that ('광고성 정보 수신 동의 (선택)') and keep it optional; ignore this if it isn't about ads`);
  } },
  { id: 'HW-13', check(s, report) {
    if (!isUi(s)) return;
    const bangs = (s.text.match(/!/g) || []).length;
    if ((s.err || s.role === 'error') && bangs > 0) report('FYI', 'exclamation mark in an error message');
    else if (bangs >= 2) report('FYI', `${bangs} exclamation marks in one string; keep at most one where it matters`);
  } },
  { id: 'HW-14', check(s, report) {
    if (s.role !== 'a11y' || !/^(alt|aria-label)$/i.test(s.name || '')) return;
    if (/(이미지|사진|아이콘|그림)$/.test(s.text.trim())) report('FYI', `alt text '${s.text.trim()}': drop '이미지·사진·아이콘' (a screen reader already says it); decorative images take alt=""`);
  } },

  // ---- report and deck (HW-R*), string-level; HW-R1, HW-R2 and HW-R4 are file rules ----
  { id: 'HW-R3', check(s, report, ctx) {
    if (!DOC_REGISTER.has(ctx) || !isUi(s) || s.legal) return;
    if (CLOCK12.test(s.text)) report('FYI', "12-hour time ('오후 2시'): reports use 24-hour '14:00', the 공문서 standard");
  } },

  // ---- notice (HW-P*): commanding endings, 국립국어원 「쉬운 공문서 쓰기 길잡이」 제1부 제2장 ----
  { id: 'HW-P1', check(s, report, ctx) {
    if (ctx !== 'notice' || !isUi(s) || s.legal) return;
    if (sentences(s.text).some((sen) => { const m = sen.match(P_GEOT); return m && jong(m[1]) === 8; })) report('FYI', "'~할 것' reads as an order; write '~하세요' or '~해야 합니다'");
  } },
  { id: 'HW-P2', check(s, report, ctx) {
    if (ctx !== 'notice' || !isUi(s) || s.legal) return;
    if (sentences(s.text).some((sen) => P_BARAM.test(sen))) report('FYI', "'~ 바람' reads as an order; write '~하기 바랍니다' or '~해 주시기 바랍니다'");
  } },
  { id: 'HW-P3', check(s, report, ctx) {
    if (ctx !== 'notice' || !isUi(s) || s.legal) return;
    if (sentences(s.text).some((sen) => P_HARA.test(sen))) report('FYI', "imperative '~하라': write '~하십시오' or '~하세요'");
  } },
  { id: 'HW-P4', check(s, report, ctx) {
    if (ctx !== 'notice' || !isUi(s) || s.legal) return;
    if (P_HALGEOSIDA.test(s.text)) report('FYI', "'~다 할 것이다' → '~다'");
  } },
  // ---- documents (HW-D*), every situation, prose only ----
  // HW-D1 · a note to the writer or an unfilled placeholder left in the document a reader will get
  { id: 'HW-D1', check(s, report) {
    if (!s.prose || s.role === 'a11y') return;
    const n = s.text.match(WRITER_NOTE);
    if (n) { report('WARN', `a note to the writer is left in the document ('${n[0].trim()}'): move it out, to the chat, a PR description or a comment`); return; }
    const p = s.text.match(PLACEHOLDER);
    // a draft without the facts keeps its placeholders honestly; they only must not ship
    if (p) report('FYI', `an unfilled placeholder ('${p[0].trim()}'): fill it before the document goes out, and list what is still missing outside the document`);
  } },
  // HW-D3 · stock frames an LLM reaches for: meta openers, closers, the cleft 'X한 것은 ~이다'
  { id: 'HW-D3', check(s, report) {
    if (!s.prose || !isUi(s) || s.legal) return;
    for (const [re, msg] of FORMULA) { const m = s.text.match(re); if (m) { report('FYI', `${msg} ('${m[0].trim()}')`); return; } }
  } },
  // HW-P5 applies in every profile (owner 2026-10-25); the P names where it came from, not where it applies
  { id: 'HW-P5', check(s, report) {
    if (!isCopy(s)) return;
    const m = s.text.match(P_DISCRIM);
    if (m) report('WARN', `'${m[0]}' → '장애인', the neutral legal term (국립국어원 길잡이, 차별적 표현)`);
  } },
];

// HW-11 · one speech level per screen or document. A file stands in for it; strings in legal text, alt text,
// record data and quotes are left out, and so are long UI passages (over 200 characters), but not a document's
// paragraphs.
const LEVEL_NAME = { hapsyo: '합쇼체 (-습니다)', haeyo: '해요체 (-어요)', haera: '해라체 (-다)' };
// statements decide the register; questions and requests ('~할까요?', '~하세요') sit with either
const isStatement = (sen) => !/[?？]\s*$/.test(sen) && !/(세요|십시오|십시요)[\s.!…]*$/.test(sen) && !/^(네|예|아니요|아니오)[\s.!…,]*$/.test(sen);
/** Flag the lines on the minority side of a two-way split (both sides when they tie). */
function reportMinority(by, a, b, report, severity, msg) {
  if (!by[a].length || !by[b].length) return;
  const minority = by[a].length < by[b].length ? a : by[b].length < by[a].length ? b : null;
  for (const k of minority ? [minority] : [a, b]) for (const line of new Set(by[k])) report(line, severity, msg);
}
const FILE_RULES = [
  { id: 'HW-11', check(strings, report, ctx) {
    const by = { hapsyo: [], haeyo: [] };
    for (const s of strings) {
      if (!isUi(s) || s.legal || s.role === 'quote' || (s.text.length > 200 && !s.prose)) continue;
      for (const sen of sentences(s.text)) {
        const lv = endingLevel(sen);
        const statement = isStatement(sen);
        if ((lv === 'hapsyo' || lv === 'haeyo') && statement) by[lv].push(s.line);
        else if (lv === 'banmal' && s.role !== 'heading') report(s.line, 'FYI', 'banmal (해체) in UI copy; use the speech level DESIGN.md sets');
      }
    }
    if (ctx === 'press') {
      // a release narrates in 해라체 ('출시했다', '밝혔다'); quotes keep the speaker's own level
      for (const s of strings) {
        if (!isUi(s) || s.legal || s.role === 'quote') continue;
        const narration = s.text.replace(/[“"][^”"]*[”"]/g, ' ');
        if (sentences(narration).some((sen) => { const lv = endingLevel(sen); return (lv === 'hapsyo' || lv === 'haeyo') && isStatement(sen); }))
          report(s.line, 'FYI', "a press release narrates in 해라체 ('출시했다', '밝혔다'); 합쇼체 and 해요체 belong in quotes");
      }
      return;
    }
    if (DOC_REGISTER.has(ctx)) return; // reports and decks have their own register rules (HW-R1, HW-R2)
    if (!by.hapsyo.length || !by.haeyo.length) return;
    const minority = by.hapsyo.length < by.haeyo.length ? 'hapsyo' : by.haeyo.length < by.hapsyo.length ? 'haeyo' : null;
    const msg = `this file mixes ${LEVEL_NAME.hapsyo} ×${by.hapsyo.length} and ${LEVEL_NAME.haeyo} ×${by.haeyo.length}; keep one level per surface, as DESIGN.md sets it`;
    for (const lv of minority ? [minority] : ['hapsyo', 'haeyo']) for (const line of new Set(by[lv])) report(line, 'WARN', msg);
  } },

  // ---- documents (HW-D2): one list, one ending form ----
  { id: 'HW-D2', check(strings, report) {
    const lists = new Map();
    for (const s of strings) if (s.prose && s.list && isUi(s) && !s.legal) (lists.get(s.list) || lists.set(s.list, []).get(s.list)).push(s);
    for (const items of lists.values()) {
      if (items.length < 3) continue;
      const by = { noun: [], sentence: [] };
      for (const s of items) {
        const sens = sentences(s.text);
        const last = sens[sens.length - 1] || s.text;
        const lv = endingLevel(last);
        by[lv === 'hapsyo' || lv === 'haeyo' || lv === 'haera' || lv === 'banmal' ? 'sentence' : 'noun'].push(s.line);
      }
      reportMinority(by, 'noun', 'sentence', report, 'FYI', `this list mixes 명사형 items ×${by.noun.length} and full sentences ×${by.sentence.length}; end every item the same way`);
    }
  } },

  // ---- documents (HW-D4): frames that are normal once but not in a run; people write some of these more than
  // agents do (im-not-ai's corpus: ~을 통해, ~에 대해), so only a document that leans on one is told ----
  { id: 'HW-D4', check(strings, report) {
    const prose = strings.filter((s) => s.prose && isUi(s) && !s.legal);
    if (!prose.length) return;
    const chars = prose.reduce((k, s) => k + (s.text.match(/[가-힣]/g) || []).length, 0);
    for (const [re, min, per1000, msg] of DENSITY) {
      const hits = prose.filter((s) => re.test(s.text));
      const n = prose.reduce((k, s) => k + (s.text.match(new RegExp(re.source, 'g')) || []).length, 0);
      if (n >= min && (n * 1000) / Math.max(chars, 1) >= per1000) report(hits[0].line, 'FYI', `${msg} ×${n} in this document; rewrite some of them`);
    }
  } },

  // ---- genre: report (HW-R*), file-level ----
  // HW-R1 · 해요체 in a report. Every report example in 국립국어원 「쉬운 공문서 쓰기 길잡이」 제3부 제3장 ends in
  // 명사형 (~함·~음·~임), 해라체 or 합쇼체, and none in 해요체.
  { id: 'HW-R1', check(strings, report, ctx) {
    if (!DOC_REGISTER.has(ctx)) return;
    for (const s of strings) {
      if (!isUi(s) || s.legal) continue;
      if (sentences(s.text).some((sen) => endingLevel(sen) === 'haeyo' && isStatement(sen))) report(s.line, 'WARN', "해요체 in report or slide copy: end the line in 명사형 ('늘었음', '확보함') or in the document's 합쇼체/해라체");
    }
  } },
  // HW-R2 · 합쇼체 and 해라체 sentences mixed in one document; 명사형 bullets sit with either (skill call)
  { id: 'HW-R2', check(strings, report, ctx) {
    if (!DOC_REGISTER.has(ctx)) return;
    const by = { hapsyo: [], haera: [] };
    for (const s of strings) {
      if (!isUi(s) || s.legal) continue;
      for (const sen of sentences(s.text)) { const lv = endingLevel(sen); if ((lv === 'hapsyo' || lv === 'haera') && isStatement(sen)) by[lv].push(s.line); }
    }
    reportMinority(by, 'hapsyo', 'haera', report, 'FYI', `this document mixes ${LEVEL_NAME.hapsyo} ×${by.hapsyo.length} and ${LEVEL_NAME.haera} ×${by.haera.length} sentences; keep one (명사형 bullets sit with either)`);
  } },
  // HW-R4 · 명사형 lines with and without a final period. 「한글 맞춤법」 문장 부호 마침표 (1) [붙임 2] allows both;
  // keeping one per document is a skill call.
  { id: 'HW-R4', check(strings, report, ctx) {
    if (!DOC_REGISTER.has(ctx)) return;
    const by = { dot: [], bare: [] };
    for (const s of strings) {
      if (!isUi(s) || s.legal || /^(heading|button|label)$/.test(s.role)) continue;
      const t = s.text.trim();
      if (NOUN_END.test(t)) by[t.endsWith('.') ? 'dot' : 'bare'].push(s.line);
    }
    reportMinority(by, 'dot', 'bare', report, 'FYI', `명사형 lines end with a period ×${by.dot.length} and without ×${by.bare.length}; 「한글 맞춤법」 allows both, keep one`);
  } },
];

export { sentences, endingLevel, extract, jong, STRING_RULES, FILE_RULES, CONTEXTS, pragmaOf, detectGenre };

// ---- run -----------------------------------------------------------------------------
function run(inputs, { base = process.cwd(), context = 'auto' } = {}) {
  const files = collect(inputs);
  const F = new Findings();
  const strings = [];
  const contexts = {}; // file → genre, for every file that isn't 'app'
  const detected = {}; // file → the signals that decided its genre, for files detection placed
  for (const abs of files) {
    const ext = path.extname(abs).toLowerCase();
    const raw = fs.readFileSync(abs, 'utf8');
    if (!HANGUL.test(raw)) continue;
    const rel = path.relative(base, abs);
    const file = (rel.startsWith('..') ? abs : rel).split(path.sep).join('/');
    const legalFile = LEGALISH.test(file);
    const found = extract(abs, ext, raw).map((x) => ({ ...x, file, legal: x.legal || legalFile }));
    // the file's own pragma, then --context, then detection, then app
    const pragma = pragmaOf(raw);
    let ctx = context === 'auto' ? 'app' : context;
    if (pragma && CONTEXTS.includes(pragma.name)) ctx = pragma.name;
    else {
      if (pragma) F.add(file, pragma.line, 'WARN', 'CTX', `unknown hangul-context '${pragma.name}' (known: ${CONTEXTS.join(', ')}); ${context === 'auto' ? 'detection' : context} applied`);
      const d = context === 'auto' ? detectGenre(raw) : null;
      if (d) { ctx = d.genre; detected[file] = d.signals; }
    }
    if (ctx !== 'app') contexts[file] = ctx;
    for (const s of found) for (const r of STRING_RULES) r.check(s, (sev, msg) => F.add(file, s.line, sev, r.id, msg), ctx);
    for (const r of FILE_RULES) r.check(found, (line, sev, msg) => F.add(file, line, sev, r.id, msg), ctx);
    strings.push(...found);
  }
  const findings = F.list();
  const summary = { BLOCK: 0, WARN: 0, FYI: 0 };
  for (const x of findings) summary[x.severity]++;
  const res = { files: files.length, strings, findings, summary };
  if (Object.keys(contexts).length) res.contexts = contexts;
  if (Object.keys(detected).length) res.detected = detected;
  return res;
}

function printHuman(res, exit, list) {
  const genres = res.contexts ? [...new Set(Object.values(res.contexts))].sort().join(', ') : '';
  const out = [`/hangul copy-check · ${res.files} file(s) · ${res.strings.length} Korean string(s)${genres ? ` · context ${genres}` : ''}`];
  if (res.detected) {
    for (const [file, signals] of Object.entries(res.detected)) out.push(`${file}  detected as ${res.contexts[file]} (${signals.join(', ')}); --context=app turns detection off`);
  }
  if (list) for (const s of res.strings) out.push(`${s.file}:${s.line}  [${s.role}${s.err ? ',error' : ''}${s.dialog ? ',dialog' : ''}${s.link ? ',link' : ''}]  ${s.text}`);
  const w = Math.max(0, ...res.findings.map((f) => `${f.file}:${f.line}`.length));
  for (const f of res.findings) out.push(`${`${f.file}:${f.line}`.padEnd(w)}  ${f.severity.padEnd(5)}  ${f.rule.padEnd(5)}  ${f.message}`);
  out.push(`${res.summary.BLOCK} BLOCK · ${res.summary.WARN} WARN · ${res.summary.FYI} FYI · exit ${exit}`);
  console.log(out.join('\n'));
}

// ---- self-test -----------------------------------------------------------------------
// The exact findings expected from scripts/fixtures/copy/<name>. bad: one or more hits per rule.
// good: the same screens rewritten, no findings. fp: known false-positive classes that must stay
// quiet. tp: the true positives that sit next to those classes.
const EXPECTED = {
  bad: [
    'Checkout.tsx:4 FYI HW-3', 'Checkout.tsx:4 WARN HW-11', 'Checkout.tsx:5 WARN HW-10', 'Checkout.tsx:5 WARN HW-11', 'Checkout.tsx:6 WARN HW-2',
    'Checkout.tsx:7 WARN HW-2', 'Checkout.tsx:8 WARN HW-4', 'Checkout.tsx:8 WARN HW-11', 'Checkout.tsx:8 FYI HW-13', 'Checkout.tsx:9 WARN HW-4',
    'Checkout.tsx:10 FYI HW-5', 'Checkout.tsx:12 FYI HW-12', 'Checkout.tsx:13 FYI HW-5', 'Checkout.tsx:14 WARN HW-12', 'Checkout.tsx:17 FYI HW-6',
    'Checkout.tsx:17 WARN HW-11', 'Checkout.tsx:18 WARN HW-8', 'Checkout.tsx:19 FYI HW-7', 'Checkout.tsx:19 WARN HW-11', 'Checkout.tsx:20 FYI HW-14',
    'Checkout.tsx:21 FYI HW-13', 'Checkout.tsx:22 BLOCK HW-1',
    'messages.json:3 FYI HW-7', 'messages.json:4 FYI HW-7', 'messages.json:4 WARN HW-11', 'messages.json:5 FYI HW-7', 'messages.json:5 WARN HW-11',
    'messages.json:6 FYI HW-3', 'messages.json:9 WARN HW-4', 'messages.json:10 FYI HW-4', 'messages.json:12 WARN HW-5', 'messages.json:12 FYI HW-8',
    'messages.json:12 WARN HW-11', 'messages.json:13 WARN HW-1', 'messages.json:14 WARN HW-1', 'messages.json:14 BLOCK HW-1', 'messages.json:15 WARN HW-2',
    'messages.json:15 WARN HW-11', 'messages.json:16 WARN HW-10', 'messages.json:16 WARN HW-11',
    'notice.html:4 FYI HW-3', 'notice.html:5 FYI HW-3', 'notice.html:6 BLOCK HW-1', 'notice.html:6 FYI HW-3', 'notice.html:7 FYI HW-5',
    'notice.html:8 WARN HW-4', 'notice.html:8 WARN HW-11',
  ],
  good: [],
  // a particle 께, -ㄹ수록, 아니에요, 날것, units after numerals, well-formed dates, times and ranges, legal text
  // in 합쇼체 inside a Terms component, record data (JSON, and a typed LISTINGS array in TS), console.log, a
  // test file, a helper line whose class starts with "button" (button-hint), a logo's wordmark dot and the
  // negative a consent notice must keep: all quiet.
  fp: [],
  // the true positives beside those classes: -ㄹ께요, 쓸수 있어요, 무료에요, 할것, one 합쇼체 line, 10 : 20, 2026.10.24,
  // a 합쇼체 notice set from a click handler inside a heading (read as code, not as the heading), a typed
  // array of UI labels (STEPS), which is copy, not records, and a double passive in 합쇼체 (되어집니다)
  tp: [
    'Notice.tsx:4 BLOCK HW-1', 'Notice.tsx:5 WARN HW-2', 'Notice.tsx:6 WARN HW-1', 'Notice.tsx:7 WARN HW-2', 'Notice.tsx:8 WARN HW-11',
    'Notice.tsx:9 FYI HW-3', 'Notice.tsx:10 FYI HW-3', 'Notice.tsx:11 WARN HW-11', 'Notice.tsx:12 WARN HW-8', 'Notice.tsx:12 WARN HW-11',
    'steps.ts:5 WARN HW-11', 'ui.json:2 WARN HW-11',
  ],
  // situations (references/situations.md). ctx-report under --context=report: a 해요체 line, 명사형 lines with and
  // without a period, a 해라체 line beside 합쇼체 ones, '오후 2시'; HW-8's system wording and HW-11 stay quiet there.
  'ctx-report': ['deck.html:6 WARN HW-R1', 'deck.html:7 FYI HW-R4', 'deck.html:8 FYI HW-R4', 'deck.html:10 FYI HW-R2', 'deck.html:13 FYI HW-R3'],
  // ctx-notice under --context=notice: '~할 것', '~ 바람', '~하라', '~다 할 것이다', 장애우
  'ctx-notice': ['notice.html:5 FYI HW-P1', 'notice.html:6 FYI HW-P2', 'notice.html:7 FYI HW-P3', 'notice.html:8 FYI HW-P4', 'notice.html:9 WARN HW-P5'],
  // ctx-good: the same rewritten, each file naming its situation with a pragma (HTML comment, JSON key)
  'ctx-good': [],
  // ctx-pragma, no flag: a report pragma turns HW-11 into HW-R1 for its own file only; an unknown situation is reported
  'ctx-pragma': ['app.html:4 WARN HW-11', 'app.html:5 WARN HW-11', 'deck.html:5 WARN HW-R1', 'typo.html:1 WARN CTX', 'mail.md:2 FYI HW-10', 'mail.md:6 FYI HW-10'],
  // detection (no flag): a reveal.js deck
  'auto-report': ['deck.html:8 WARN HW-R1', 'deck.html:9 FYI HW-R4', 'deck.html:10 FYI HW-R4', 'deck.html:11 FYI HW-R3'],
  // the bait stays app: a reports/ folder whose mixed levels HW-11 still catches, a carousel under
  // components/slides/, a page with one clinic word and one .go.kr link (whose '국내 최고' is a claim, HW-12)
  'auto-app': ['reports/Monthly.tsx:5 WARN HW-11', 'reports/Monthly.tsx:6 WARN HW-11', 'NearbyVets.tsx:5 FYI HW-12'],
  // every situation (owner 2026-10-25): an ad-consent toggle labelled as a benefit, and '장애우'; the privacy-consent
  // and 마케팅 정보 수신 동의 labels, a benefit notice title and a sentence about benefit notices stay quiet
  'consent': ['Settings.tsx:4 FYI HW-12', 'Settings.tsx:9 WARN HW-P5'],
  // every situation: claims with nothing behind them (업계 최초, 100% 만족, 최고의); a measured 최고 기온, a 최초
  // 등록일 and a ranking of causes stay quiet
  'hype': ['Landing.tsx:4 FYI HW-12', 'Landing.tsx:5 FYI HW-12', 'Landing.tsx:6 FYI HW-12'],
  // prose: a Markdown report read paragraph by paragraph. The heading's period, the paragraph that mixes 합쇼체 and
  // 해요체 past 200 characters, and an alt text naming the image are found; the error it reports isn't read as an
  // error message, and the quote, the code block and the table stay out of HW-11
  'prose': [
    'report.md:1 FYI HW-3', 'report.md:5 WARN HW-11', 'report.md:17 FYI HW-14',
    // issues.md: frames 국립국어원 corrects (WARN), a 겹말, LLM formulas, a loanword, the contrast three times; the
    // last line (붓기 as 'pour', 아니라면, 위해) stays quiet
    'issues.md:3 WARN HW-8', 'issues.md:5 WARN HW-8', 'issues.md:7 FYI HW-7', 'issues.md:9 FYI HW-D3', 'issues.md:11 FYI HW-D3',
    'issues.md:13 BLOCK HW-1', 'issues.md:15 FYI HW-D4', 'issues.md:19 FYI HW-8', 'issues.md:21 FYI HW-D3',
  ],
  // ctx-press under --context=press: a 합쇼체 sentence in the narration; the 해라체 lead and the quoted 합쇼체 stay quiet
  'ctx-press': ['release.md:5 FYI HW-11'],
  // Korean-specific mechanics (references/korean-issues.md): dependent nouns closed up (회의중, 5회이상, 가입한지,
  // 안돼; 결제시, 하는데 시간, 한번 as FYI), a thing honored, a double passive, loanwords, a comma after 그러나, two
  // dots, a slash date, an ungrouped number, Japanese-style 한자어, 소개시키다, and '~' softening an e-mail. The last four paragraphs hold their
  // look-alikes (그중, 사용중지, 이상한, 할지, 안됐어요, 비상시, 없는데, questions to a person, ranges, a fraction,
  // 즉, three dots, 12,000) and stay quiet
  korean: [
    'guide.md:1 WARN HW-2', 'guide.md:3 WARN HW-2', 'guide.md:5 WARN HW-2', 'guide.md:7 WARN HW-2', 'guide.md:9 FYI HW-2',
    'guide.md:11 FYI HW-2', 'guide.md:13 FYI HW-2', 'guide.md:15 WARN HW-10', 'guide.md:17 WARN HW-8', 'guide.md:19 BLOCK HW-1',
    'guide.md:21 FYI HW-1', 'guide.md:23 FYI HW-3', 'guide.md:25 FYI HW-3', 'guide.md:27 FYI HW-3', 'guide.md:29 FYI HW-3',
    'guide.md:31 FYI HW-7', 'guide.md:33 FYI HW-8', 'mail.md:2 FYI HW-3',
  ],
};
// rules that apply in every situation, whatever their letter says
const EVERY_PROFILE = new Set(['HW-P5', 'HW-D1', 'HW-D2', 'HW-D3', 'HW-D4']);
// What detection must decide for each fixture run without a flag (file → situation); every other fixture, none.
const DETECTED = {
  'auto-report': { 'deck.html': 'deck' },
};

// The situation a fixture runs under. The others run under the default (auto), and ctx-good and ctx-pragma set
// theirs per file with a pragma.
const CONTEXT_OF = { 'ctx-report': 'report', 'ctx-notice': 'notice', 'ctx-press': 'press' };

function selfTest() {
  const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'copy');
  const key = (f) => `${f.file}:${f.line} ${f.severity} ${f.rule}`;
  let ok = true;
  const parts = [];
  for (const name of Object.keys(EXPECTED)) {
    const at = path.join(dir, name);
    if (!fs.existsSync(at)) { parts.push(`${name} missing`); ok = false; continue; }
    const res = run([at], { base: at, context: CONTEXT_OF[name] || 'auto' });
    const got = new Set(res.findings.map(key));
    const want = new Set(EXPECTED[name]);
    const missing = [...want].filter((k) => !got.has(k));
    const extra = [...got].filter((k) => !want.has(k));
    if (missing.length || extra.length) ok = false;
    parts.push(`${name} ${res.findings.length} (${res.summary.BLOCK} BLOCK · ${res.summary.WARN} WARN · ${res.summary.FYI} FYI), expected ${want.size}`);
    for (const k of missing) console.log(`  ${name} missing: ${k}`);
    for (const k of extra) console.log(`  ${name} unexpected: ${k} ${res.findings.find((f) => key(f) === k).message}`);
    if (!CONTEXT_OF[name]) {
      const got = Object.fromEntries(Object.keys(res.detected || {}).map((f) => [f, res.contexts[f]]));
      if (JSON.stringify(got) !== JSON.stringify(DETECTED[name] || {})) { ok = false; console.log(`  ${name} detected ${JSON.stringify(got)}, expected ${JSON.stringify(DETECTED[name] || {})}`); }
    }
  }
  // --context=app turns every genre off: the genre fixtures raise no genre rule (HW-R*, HW-M*, HW-P*) under it
  const leaks = [];
  for (const name of [...Object.keys(CONTEXT_OF), ...Object.keys(DETECTED)]) {
    const at = path.join(dir, name);
    if (fs.existsSync(at)) for (const f of run([at], { base: at, context: 'app' }).findings) if (/^HW-[A-Z]/.test(f.rule) && !EVERY_PROFILE.has(f.rule)) leaks.push(`${name} ${key(f)}`);
  }
  for (const k of leaks) console.log(`  genre rule outside its context: ${k}`);
  const first = JSON.stringify(run([path.join(dir, 'bad')], { base: path.join(dir, 'bad') }));
  const deterministic = first === JSON.stringify(run([path.join(dir, 'bad')], { base: path.join(dir, 'bad') }));
  console.log(`self-test: ${parts.join('; ')}; gated ${leaks.length === 0}; deterministic ${deterministic}`);
  ok = ok && deterministic && leaks.length === 0;
  console.log(ok ? 'self-test: PASS' : 'self-test: FAIL');
  return ok ? 0 : 1;
}

function main(argv) {
  const flags = new Set();
  const inputs = [];
  let context = 'auto';
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--context') context = argv[++i] ?? '';
    else if (a.startsWith('--context=')) context = a.slice('--context='.length);
    else if (a.startsWith('--')) flags.add(a);
    else inputs.push(a);
  }
  if (flags.has('--help') || (!inputs.length && !flags.has('--self-test'))) {
    console.log(`usage: node copy-check.mjs [--json] [--strict] [--list] [--context=<auto|${CONTEXTS.join('|')}>] <file-or-dir>...\n       node copy-check.mjs --self-test\nexit 1 on any BLOCK (with --strict: any BLOCK or WARN); --context defaults to auto (detection), app turns it off`);
    return flags.has('--help') ? 0 : 2;
  }
  if (flags.has('--self-test')) return selfTest();
  if (context !== 'auto' && !CONTEXTS.includes(context)) {
    console.error(`unknown --context '${context}' (known: auto, ${CONTEXTS.join(', ')})`);
    return 2;
  }
  const res = run(inputs, { context });
  const exit = res.summary.BLOCK > 0 || (flags.has('--strict') && res.summary.WARN > 0) ? 1 : 0;
  if (flags.has('--json')) console.log(JSON.stringify({ ...res, exit }, null, 2));
  else printHuman(res, exit, flags.has('--list'));
  return exit;
}

const invokedDirectly = (() => {
  try { return fs.realpathSync(process.argv[1] || '') === fs.realpathSync(fileURLToPath(import.meta.url)); } catch { return false; }
})();
if (invokedDirectly) process.exitCode = main(process.argv.slice(2));
