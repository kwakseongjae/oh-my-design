#!/usr/bin/env node
/**
 * /hangul copy check: deterministic, dependency-free scan of the Korean UI copy in HTML, JSX/TSX,
 * JS/TS string literals and JSON message files. Node >= 18.
 *
 *   node copy-check.mjs [--json] [--strict] [--list] <file-or-dir>...
 *   node copy-check.mjs --self-test
 *
 * Exit code: 1 if any BLOCK finding (with --strict: any BLOCK or WARN), otherwise 0.
 * Rule IDs match skills/hangul/SKILL.md §3b (HW-1 … HW-14); sources are in references/ux-writing.md.
 * --list prints every string it found with the role it guessed, which is how to see what the rules
 * were judging.
 *
 * It reads source, not the running product: it sees the strings written in the code and guesses each
 * one's role (button, empty state, toast, heading, label, placeholder, helper, body, alt text) from
 * the element, component, prop, key or call around it, and flags strings that read as an error or sit
 * in a dialog. It cannot see strings fetched
 * at runtime, text in images, or which strings share a screen; the speech-level check (HW-11) treats a
 * file as one screen. Test and spec files are skipped. A clean run is not proof of good copy, and a
 * hit is a prompt to read the string in its place.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { HANGUL, SKIP_DIR, MARKUP_EXT, STR_LIT, maskMarkup, scanMarkup, makeLineAt } from './check.mjs';

const COPY_EXT = new Set(['.html', '.htm', '.jsx', '.tsx', '.js', '.ts', '.mjs', '.cjs', '.vue', '.svelte', '.astro', '.json']);
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

/** Split copy into sentences: on terminal punctuation followed by space, and on line breaks. */
function sentences(text) {
  return text.split(/(?<=[.!?。？！…])\s+|\n+/).map((s) => s.trim()).filter((s) => HANGUL.test(bare(s)));
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
    });
  };

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
    const no = (r) => parseInt(r.slice(3), 10) || 99;
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
];

// HW-7 · plain words, each pair from a named source (references/ux-writing.md, HW-7 table)
const PLAIN = [
  [/금일/, "'금일' → '오늘'"],
  [/익월/, "'익월' → '다음 달'"],
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
// a passive stem plus -어지다 in any form: 되어지는, 되어져요, 되어졌어요, 되어집니다, 되어질, 되어짐
const DOUBLE_PASSIVE = /((?:보여|되어|잊혀|쓰여|불려|닫혀|열려|짜여|읽혀|팔려|담겨|놓여|나뉘어)(?:지|져|졌|집|질|짐))/;
const SYSTEM_DONE = /처리(?:가|를|이)? ?(?:완료|되었|됐)|완료(?:되었|됐)(?:습니다|어요)|처리 중입니다/;
const DOUBLE_NEG = /(?:지 않으면|안 하면|없으면)[^.!?]{0,20}(?:수 없|안 돼|못 해|불가)|(?:실패|오류)(?:하지|가 없지) 않/;
const OBJECT_HONORIFIC = /(나오셨|품절이(?:세요|십니다|시네요)|매진이(?:세요|십니다)|(?:접수|등록|변경|취소|발송|배송|결제|완료|적립|할인|입고|준비|처리|승인|해지|연결|설치|저장|삭제|품절|매진)되셨|말씀이 계시)/;
const LOSS = /놓치(?:면|지 마|시면|기 전에)|손해(?:예요|입니다|를 보|볼)|후회(?:할|하실|하지 않)|마지막 기회|지금 (?:아니면|안 하면)|(?:곧|오늘) (?:마감|종료|사라져)|(?:품절|매진) 임박|서두르세요/;
const DECLINE = /^(아니요|아니오|괜찮아요|됐어요|싫어요|다음에|안 ?할래요)[,.\s]/;
const SHAME = /(포기|손해|안 받|필요 없|비싸게|싫|버릴|안 할래|모를래|관심 없)/;

const STRING_RULES = [
  { id: 'HW-1', check(s, report) {
    if (!isCopy(s)) return;
    const t = s.text;
    for (const [re, msg] of SPELLING) if (new RegExp(re.source).test(t)) report('BLOCK', `spelling: ${msg}`);
    // '-(으)ㄹ께' only at the end of a word: '회원들께 알려요' is the honorific particle 께
    for (const m of t.matchAll(/([가-힣])께(?=요|$|[.!?~,])/g)) if (jong(m[1]) === 8) report('BLOCK', `spelling: '${m[1]}께' → '${m[1]}게' (-(으)ㄹ게)`);
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
    if (/\d\s?만원/.test(t)) report('FYI', "spacing: 'N만원' → 'N만 원' after the Hangul unit 만 (marketing copy may keep '만원' by house style)");
  } },
  { id: 'HW-3', check(s, report) {
    if (!isCopy(s)) return;
    const t = s.text;
    if (/(?<!\d)(?:19|20)\d{2}\.\d{1,2}\.\d{1,2}(?!\d)/.test(t)) report('FYI', "punctuation: numeric dates are written '2026. 10. 24.' (a space after each period)");
    else if (/(?<!\d)(?:19|20)\d{2}\.\s\d{1,2}\.\s\d{1,2}(?![.\d])/.test(t)) report('FYI', "punctuation: a numeric date keeps its final period: '2026. 10. 24.'");
    if (/\d\s+~\s*\d|\d\s*~\s+\d/.test(t)) report('FYI', "punctuation: the range mark '~' attaches on both sides: '10:00~18:00'");
    if (/\d\s+:\s*\d{2}(?!\d)|\d\s*:\s+\d{2}(?!\d)/.test(t) && !/[가-힣A-Za-z]\s*:\s/.test(t)) report('FYI', "punctuation: clock times take no spaces around ':': '10:20'");
    if ((s.role === 'button' || s.role === 'label' || s.role === 'heading') && /[가-힣)]\.$/.test(t) && !/\.\.$|…$/.test(t)) report('FYI', `punctuation: no period on a ${s.role}`);
  } },
  { id: 'HW-4', check(s, report) {
    if (!isUi(s)) return;
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
  } },
  { id: 'HW-8', check(s, report) {
    if (!isUi(s)) return;
    const t = s.text;
    if (DOUBLE_PASSIVE.test(t)) report('WARN', `double passive '${t.match(DOUBLE_PASSIVE)[1]}…': use the single form ('보이는', '되는', '쓰인')`);
    if (/에 의해(서)? /.test(t)) report('FYI', "'~에 의해 ~되다' reads as translated English; make the actor the subject");
    if (/에 있어서/.test(t)) report('FYI', "'~에 있어서' → '~에서' / '~에 대해'");
    if ((s.role === 'toast' || s.role === 'body' || s.role === 'helper') && SYSTEM_DONE.test(t)) report('FYI', "system wording ('처리가 완료되었습니다'): say what the user did ('저장했어요', '보냈어요')");
  } },
  { id: 'HW-9', check(s, report) {
    // legal text keeps its negative: a consent notice must say what refusing costs ("동의하지 않으면 가입할 수 없어요"),
    // which is the rule's own exception (the user must know something is unavailable)
    if (!isUi(s) || s.legal) return;
    if (DOUBLE_NEG.test(s.text)) report('FYI', "double negative: say it positively ('~하면 ~할 수 있어요')");
  } },
  { id: 'HW-10', check(s, report) {
    if (!isUi(s)) return;
    const m = s.text.match(OBJECT_HONORIFIC);
    if (m) report('WARN', `honorific -시- on a thing ('${m[1]}'): '나왔어요', '품절이에요', '접수됐어요'`);
  } },
  { id: 'HW-12', check(s, report) {
    if (!isUi(s)) return;
    const t = s.text.trim();
    if (s.role === 'button' && DECLINE.test(t + ' ') && SHAME.test(t)) report('WARN', `decline option that shames the user ('${t}'): write a neutral '다음에 할게요' or '닫기'`);
    else if (LOSS.test(t)) report('FYI', 'loss or pressure framing; say what the user gets instead');
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
];

// HW-11 · one speech level per screen. A file stands in for a screen; strings in legal text, alt text
// and record data are left out, and so are long passages (over 200 characters).
const LEVEL_NAME = { hapsyo: '합쇼체 (-습니다)', haeyo: '해요체 (-어요)' };
const FILE_RULES = [
  { id: 'HW-11', check(strings, report) {
    const by = { hapsyo: [], haeyo: [] };
    for (const s of strings) {
      if (!isUi(s) || s.legal || s.text.length > 200) continue;
      for (const sen of sentences(s.text)) {
        const lv = endingLevel(sen);
        // statements decide the register; questions and requests ('~할까요?', '~하세요') sit with either
        const statement = !/[?？]\s*$/.test(sen) && !/(세요|십시오|십시요)[\s.!…]*$/.test(sen) && !/^(네|예|아니요|아니오)[\s.!…,]*$/.test(sen);
        if ((lv === 'hapsyo' || lv === 'haeyo') && statement) by[lv].push(s.line);
        else if (lv === 'banmal' && s.role !== 'heading') report(s.line, 'FYI', 'banmal (해체) in UI copy; use the speech level DESIGN.md sets');
      }
    }
    if (!by.hapsyo.length || !by.haeyo.length) return;
    const minority = by.hapsyo.length < by.haeyo.length ? 'hapsyo' : by.haeyo.length < by.hapsyo.length ? 'haeyo' : null;
    const msg = `this file mixes ${LEVEL_NAME.hapsyo} ×${by.hapsyo.length} and ${LEVEL_NAME.haeyo} ×${by.haeyo.length}; keep one level per surface, as DESIGN.md sets it`;
    for (const lv of minority ? [minority] : ['hapsyo', 'haeyo']) for (const line of new Set(by[lv])) report(line, 'WARN', msg);
  } },
];

export { sentences, endingLevel, extract, jong, STRING_RULES, FILE_RULES };

// ---- run -----------------------------------------------------------------------------
function run(inputs, { base = process.cwd() } = {}) {
  const files = collect(inputs);
  const F = new Findings();
  const strings = [];
  for (const abs of files) {
    const ext = path.extname(abs).toLowerCase();
    const raw = fs.readFileSync(abs, 'utf8');
    if (!HANGUL.test(raw)) continue;
    const rel = path.relative(base, abs);
    const file = (rel.startsWith('..') ? abs : rel).split(path.sep).join('/');
    const legalFile = LEGALISH.test(file);
    const found = extract(abs, ext, raw).map((x) => ({ ...x, file, legal: x.legal || legalFile }));
    for (const s of found) for (const r of STRING_RULES) r.check(s, (sev, msg) => F.add(file, s.line, sev, r.id, msg));
    for (const r of FILE_RULES) r.check(found, (line, sev, msg) => F.add(file, line, sev, r.id, msg));
    strings.push(...found);
  }
  const findings = F.list();
  const summary = { BLOCK: 0, WARN: 0, FYI: 0 };
  for (const x of findings) summary[x.severity]++;
  return { files: files.length, strings, findings, summary };
}

function printHuman(res, exit, list) {
  const out = [`/hangul copy-check · ${res.files} file(s) · ${res.strings.length} Korean string(s)`];
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
};

function selfTest() {
  const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'copy');
  const key = (f) => `${f.file}:${f.line} ${f.severity} ${f.rule}`;
  let ok = true;
  const parts = [];
  for (const name of Object.keys(EXPECTED)) {
    const at = path.join(dir, name);
    if (!fs.existsSync(at)) { parts.push(`${name} missing`); ok = false; continue; }
    const res = run([at], { base: at });
    const got = new Set(res.findings.map(key));
    const want = new Set(EXPECTED[name]);
    const missing = [...want].filter((k) => !got.has(k));
    const extra = [...got].filter((k) => !want.has(k));
    if (missing.length || extra.length) ok = false;
    parts.push(`${name} ${res.findings.length} (${res.summary.BLOCK} BLOCK · ${res.summary.WARN} WARN · ${res.summary.FYI} FYI), expected ${want.size}`);
    for (const k of missing) console.log(`  ${name} missing: ${k}`);
    for (const k of extra) console.log(`  ${name} unexpected: ${k} ${res.findings.find((f) => key(f) === k).message}`);
  }
  const first = JSON.stringify(run([path.join(dir, 'bad')], { base: path.join(dir, 'bad') }));
  const deterministic = first === JSON.stringify(run([path.join(dir, 'bad')], { base: path.join(dir, 'bad') }));
  console.log(`self-test: ${parts.join('; ')}; deterministic ${deterministic}`);
  ok = ok && deterministic;
  console.log(ok ? 'self-test: PASS' : 'self-test: FAIL');
  return ok ? 0 : 1;
}

function main(argv) {
  const flags = new Set(argv.filter((a) => a.startsWith('--')));
  const inputs = argv.filter((a) => !a.startsWith('--'));
  if (flags.has('--help') || (!inputs.length && !flags.has('--self-test'))) {
    console.log('usage: node copy-check.mjs [--json] [--strict] [--list] <file-or-dir>...\n       node copy-check.mjs --self-test\nexit 1 on any BLOCK (with --strict: any BLOCK or WARN)');
    return flags.has('--help') ? 0 : 2;
  }
  if (flags.has('--self-test')) return selfTest();
  const res = run(inputs);
  const exit = res.summary.BLOCK > 0 || (flags.has('--strict') && res.summary.WARN > 0) ? 1 : 0;
  if (flags.has('--json')) console.log(JSON.stringify({ ...res, exit }, null, 2));
  else printHuman(res, exit, flags.has('--list'));
  return exit;
}

const invokedDirectly = (() => {
  try { return fs.realpathSync(process.argv[1] || '') === fs.realpathSync(fileURLToPath(import.meta.url)); } catch { return false; }
})();
if (invokedDirectly) process.exitCode = main(process.argv.slice(2));
