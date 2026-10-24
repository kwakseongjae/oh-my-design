#!/usr/bin/env node
/**
 * /hangul copy check: deterministic, dependency-free scan of the Korean UI copy in HTML, JSX/TSX,
 * JS/TS string literals and JSON message files. Node >= 18.
 *
 *   node copy-check.mjs [--json] [--strict] [--list] [--context=<name>|auto] <file-or-dir>...
 *   node copy-check.mjs --self-test
 *
 * Exit code: 1 if any BLOCK finding (with --strict: any BLOCK or WARN), otherwise 0.
 * Rule IDs match skills/hangul/SKILL.md §3b (HW-1 … HW-14); sources are in references/ux-writing.md.
 * --list prints every string it found with the role it guessed, which is how to see what the rules
 * were judging.
 *
 * --context names the surface genre (references/ux-writing-contexts.md): app (the HW defaults alone),
 * report, medical, public, commerce, dev, finance, notify. report, medical and public add their own rules
 * (HW-R*, HW-M*, HW-P*) and report changes how HW-8 and HW-11 apply; the other genres have no checker
 * rules yet, so the HW defaults apply. Which genre a file gets: its pragma (a comment such as
 * `hangul-context: report` in its first 10 lines, or a top-level JSON key "hangul-context"), else the
 * flag, else detection (`auto`, the default), else app. --context=app turns detection off.
 * Detection only ever adds a genre's rules on strong evidence: medical and public need two distinct
 * signals in the file, and report (which switches HW-8 and HW-11 off) needs a slide-deck format marker
 * (reveal.js, Marp, Slidev), never a folder name or the wording. A detected file is named in the output
 * with the signals that decided it.
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

// ---- surface genres (references/ux-writing-contexts.md) -------------------------------
// A genre applies to a whole file. 'app' changes nothing; report, medical and public add their rules below
// (HW-R*, HW-M*, HW-P*); commerce, dev, finance and notify have none yet, so the HW defaults apply.
const CONTEXTS = ['app', 'report', 'medical', 'public', 'commerce', 'dev', 'finance', 'notify'];
const PRAGMA = /hangul-context["']?\s*[:=]\s*["']?([A-Za-z]+)/;
/** The genre a file declares in its first 10 lines: { name, line } or null. */
function pragmaOf(raw) {
  const head = raw.split('\n', 10);
  for (let i = 0; i < head.length; i++) { const m = PRAGMA.exec(head[i]); if (m) return { name: m[1].toLowerCase(), line: i + 1 }; }
  return null;
}
// ---- genre detection (--context=auto, the default) ----
// Each signal is [pattern, label]. Medical and public: two distinct signals in the file's Korean strings
// (public also reads the markup for a government domain or KRDS classes). One mention never decides it:
// a pet app's '동물병원 진료 예약' or one '.go.kr' link stays app. Report: a slide-deck format marker only.
const DETECT_MEDICAL = [
  [/진료\s?시간/, '진료시간'], [/진료\s?과목/, '진료과목'], [/의료진/, '의료진'], [/휴진/, '휴진'], [/내원/, '내원'],
  [/진료\s?예약/, '진료 예약'], [/(?:대표\s?)?원장(?:님|\s?인사|\s?소개)/, '원장'], [/야간\s?진료/, '야간 진료'],
  [/진료\s?안내/, '진료 안내'], [/접수\s?마감/, '접수 마감'],
];
const DETECT_PUBLIC = [
  [/누리집/, '누리집'], [/민원/, '민원'], [/정부\s?24/, '정부24'], [/주민\s?센터|행정\s?복지\s?센터/, '주민센터'],
  [/정보\s?공개/, '정보공개'], [/공공\s?데이터/, '공공데이터'], [/전자\s?정부/, '전자정부'],
];
const DETECT_PUBLIC_RAW = [[/[\w-]\.go\.kr\b|\/\/(?:www\.)?gov\.kr\b/, 'a .go.kr link'], [/\bkrds-[a-z]/, 'KRDS classes']];
const DECK_MARKERS = [
  [/\breveal(?:\.min)?\.(?:js|css)\b|class=["'][^"']*\breveal\b[^"']*["'][\s\S]*class=["'][^"']*\bslides\b/, 'reveal.js'],
  [/^marp:\s*true\b|data-marpit|\bmarpit\b/m, 'Marp'],
  [/@slidev\/|^\s*slidev:/m, 'Slidev'],
];
/** The genre the file's own content points to, or null: { genre, signals }. One genre per file. */
function detectGenre(raw, found) {
  for (const [re, label] of DECK_MARKERS) if (re.test(raw)) return { genre: 'report', signals: [label] };
  const text = found.map((x) => x.text).join('\n');
  const hits = (list, src) => list.filter(([re]) => re.test(src)).map(([, label]) => label);
  const med = hits(DETECT_MEDICAL, text);
  const pub = [...hits(DETECT_PUBLIC, text), ...hits(DETECT_PUBLIC_RAW, raw)];
  // a 국립대병원 page can show both: the stronger side wins, medical on a tie (run again with --context for the other)
  if (med.length >= 2 && med.length >= pub.length) return { genre: 'medical', signals: med };
  if (pub.length >= 2) return { genre: 'public', signals: pub };
  if (med.length >= 2) return { genre: 'medical', signals: med };
  return null;
}

// report: 국립국어원 「쉬운 공문서 쓰기 길잡이」 제3부 제3장; 「행정업무규정」 제7조⑤; 「한글 맞춤법」 마침표 (1) [붙임 2]
const NOUN_END = /\s[가-힣]*[함음임됨냄봄짐줌옴씀]\.?$/; // a 명사형 ending (확보함, 낮아짐, 있음) on a line of two or more words
const CLOCK12 = /(?:오전|오후)\s?\d{1,2}\s?(?:시|:\d{2})/;
// medical: 의료법 제27조③·제42조·제56조②, 시행령 제23조①, and the 대한의사협회 의료광고심의위원회 list (2025-09-18)
const M_CURE = /완치(?!\s?(?:판정|기준|여부|라는|란|는\s?어렵|가\s?어렵|되지\s?않|할\s?수\s?없|를\s?(?:장담|보장)할\s?수\s?없))/;
const M_GUARANTEE = /100\s?%\s?(?:효과|성공|만족|완치|회복|개선|보장|안전|효능)|(?:효과|결과|성공)(?:를|가|을|는)?\s?보장(?!할\s?수\s?없|하지\s?(?:않|못)|되지\s?않)|확실한\s?효과|효과(?:가|는)?\s?확실|반드시\s?(?:효과|낫|좋아|치료|개선)|책임(?:집니다|질게요|져요|지겠습니다)/;
const M_NOHARM = /(?:부작용|통증|흉터|붓기|출혈|재발|후유증|감염)(?:이나|이|가|은|는|도|과|와|나)?\s?(?:전혀\s?|거의\s?)?(?:없(?:는|이|고|어요|습니다|음|다|으며)|제로|0\s?%|걱정\s?(?:없|마세요))/g;
// what follows a "없는" that makes it a caution, not a claim: '없는 것은 아니에요', '없는 시술은 없어요'
const M_NOHARM_OK = /^\s?(?:것은|건|게)\s?아니|^\s?(?:시술|치료|수술|약|방법)(?:은|는)\s?없|^\s?(?:다고|라고)\s?(?:할|말할|볼)\s?수\s?없|^지\s?(?:는\s?)?않/;
const M_SUPER = /최고(?!\s?(?:혈압|치|점|령|온도|기온|속도|한도))|최초(?!\s?(?:진료|진단|내원|접수|발병|증상|등록|처방|감염|확진))|유일|최상|최첨단|획기적|넘버\s?원|(?<![A-Za-z])No\.?\s?1(?!\d)|(?<!\d)(?<!(?:원인|사망|발생률?|발병률?|빈도)\s?)1위|최신\s?(?:장비|기술|시술|치료|기기|의료|레이저)/;
const M_REVIEW = /(?:치료|시술|수술|진료|환자|내원|생생한?|리얼|실제)\s?(?:후기|경험담|체험기|사례)|체험기|경험담|전\s?[·ㆍ]?\s?후\s?(?:사진|비교|모습|변화|이미지)|비포\s?(?:&|앤드?)?\s?애프터|before\s?(?:&|and|\/)?\s?after/i;
const M_INDUCE = /(?:리뷰|후기)(?:를|을)?\s?(?:작성|쓰기|쓰면|남기면|참여|인증)[^.!?]{0,15}(?:드려요|드립니다|증정|지급|적립|할인|쿠폰|상품권|선물|사은품)|(?:리뷰|후기)\s?이벤트|본인\s?부담금?\s?(?:면제|할인|무료|0원)|(?:소개|추천|친구|지인|가족)(?:하면|하시면|와\s?함께|과\s?함께|이랑|랑)[^.!?]{0,12}(?:할인|혜택|무료|증정)|선착순|(?<!(?:국가|국민|보건소|건강보험)[^.!?]{0,8})무료\s?(?:시술|검사|진료|수술|치료)/;
const M_PCT = /(\d{1,3})\s?%\s?(?:할인|DC|OFF|세일)/i;
const M_EVENT = /반값|특가|할인\s?이벤트|이벤트\s?(?:가격|가(?![가-힣])|진행)|파격\s?(?:할인|가격)/;
const M_SPECIALTY = /(?<!지정\s?[가-힣]{0,8})전문\s?병원|특화|노하우|전문(?=\s?(?:클리닉|센터|진료|치료|시술|의원)|$)/;
const M_ENDORSE = /(?:추천|선정|수상|인증|보증|공인)\s?(?:병원|의원|의료기관|의사|클리닉)|베스트\s?닥터|감사장|상장|(?:학회|협회|언론|방송|매체|고객|소비자)\s?(?:추천|선정|인증)/;
const M_ENDORSE_OK = /보건복지부\s?인증|의료기관\s?인증|의료기관평가인증원/; // 제56조제2항제14호 가목: the statutory certification may be shown
const M_KMA = [
  [/(?:한\s?번에|한번에)\s?(?:해결|끝|치료|완성|개선|교정)/, "'한번에' → '동시에' or '한곳에서'"],
  [/당일\s?(?:시술|수술|회복|퇴원|효과)|빠른\s?(?:회복|치료|효과)|바로\s?일상\s?(?:생활|복귀)|즉시\s?효과/, "a speed claim becomes '…지향' ('빠른 회복 지향')"],
  [/(?<!\d)1\s?:\s?1(?!\d)\s?(?:맞춤|진료|상담|관리|케어)|일대일\s?(?:맞춤|진료|상담|관리|케어)/, "'1:1' → '맞춤'"],
  [/(?:통증|질환|문제|고민)\s?(?:해결|솔루션)|정답|비결|근본\s?(?:치료|해결)|정직한/, "'해결·솔루션·정답·비결·근본·정직한' → '개선' or '지향'"],
];
// public: 국립국어원 「쉬운 공문서 쓰기 길잡이」 제1부 제2장 (고압적 표현, 차별적 표현)
const P_GEOT = /([가-힣])\s것\s*[.!]?$/; // '~할 것' closing a sentence (the syllable before 것 ends in ㄹ)
const P_BARAM = /(?:문의|협조|참고|확인|제출|지참|참석|양지|숙지|유의|회신|작성|신청|준수|이행|방문|참여|열람|기재|첨부|보고|하기|주기|되기)\s?바람\s*[.!]?$/;
const P_HARA = /[가-힣](?:하라|해라|하여라)\s*[.!]?$/;
const P_HALGEOSIDA = /(?:다|라)\s?(?:고\s?)?할\s?것이다/;
const P_DISCRIM = /장애(?:자(?!녀)|우)/;

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
  { id: 'HW-8', check(s, report, ctx) {
    if (!isUi(s)) return;
    const t = s.text;
    if (DOUBLE_PASSIVE.test(t)) report('WARN', `double passive '${t.match(DOUBLE_PASSIVE)[1]}…': use the single form ('보이는', '되는', '쓰인')`);
    if (/에 의해(서)? /.test(t)) report('FYI', "'~에 의해 ~되다' reads as translated English; make the actor the subject");
    if (/에 있어서/.test(t)) report('FYI', "'~에 있어서' → '~에서' / '~에 대해'");
    // a report states what was done ('처리 완료됨'); the user's-side wording is for screens that address a user
    if (ctx !== 'report' && (s.role === 'toast' || s.role === 'body' || s.role === 'helper') && SYSTEM_DONE.test(t)) report('FYI', "system wording ('처리가 완료되었습니다'): say what the user did ('저장했어요', '보냈어요')");
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

  // ---- genre: report (HW-R*), string-level; HW-R1, HW-R2 and HW-R4 are file rules ----
  { id: 'HW-R3', check(s, report, ctx) {
    if (ctx !== 'report' || !isUi(s) || s.legal) return;
    if (CLOCK12.test(s.text)) report('FYI', "12-hour time ('오후 2시'): reports use 24-hour '14:00' (행정업무규정 제7조제5항, binding for 공문서)");
  } },

  // ---- genre: medical (HW-M*). A clinic's own site is inside 의료법 제56조 (its ① covers 인터넷) though
  // outside prior review, and a pattern can't tell an ad from patient education, so nothing here is a BLOCK.
  { id: 'HW-M1', check(s, report, ctx) {
    if (ctx !== 'medical' || !isCopy(s) || s.legal) return;
    const m = s.text.match(M_CURE) || s.text.match(M_GUARANTEE);
    if (m) report('WARN', `guaranteed result or cure ('${m[0].trim()}'): 의료법 제56조제2항제2호 and 시행령 제23조제1항제2호 forbid saying a treatment always works; say what it aims at ('통증 개선을 목표로 해요')`);
  } },
  { id: 'HW-M2', check(s, report, ctx) {
    if (ctx !== 'medical' || !isCopy(s) || s.legal) return;
    for (const m of s.text.matchAll(M_NOHARM)) {
      const end = m.index + m[0].length;
      if (M_NOHARM_OK.test(s.text.slice(end, end + 16))) continue;
      report('WARN', `'${m[0].trim()}': an absolute about side effects or pain; 의료법 제56조제2항제7호·제8호 (중요 정보 누락, 과장); name the possible side effects instead`);
      break;
    }
  } },
  { id: 'HW-M3', check(s, report, ctx) {
    if (ctx !== 'medical' || !isCopy(s) || s.legal) return;
    const m = s.text.match(M_SUPER);
    if (m) report('WARN', `superlative or exclusive claim ('${m[0].trim()}'): 과장·비교 광고 (의료법 제56조제2항제4호·제8호); the KMA review board rejects 최고·최신·최초·획기적; state a checkable fact with its source, or drop it`);
  } },
  { id: 'HW-M4', check(s, report, ctx) {
    if (ctx !== 'medical' || !isCopy(s) || s.legal) return;
    const m = s.text.match(M_REVIEW);
    if (m) report('WARN', `patient testimonial or before/after ('${m[0].trim()}'): 치료경험담 광고 (의료법 제56조제2항제2호, 시행령 제23조제1항제2호), on the clinic's own site too`);
  } },
  { id: 'HW-M5', check(s, report, ctx) {
    if (ctx !== 'medical' || !isCopy(s) || s.legal) return;
    const m = s.text.match(M_INDUCE);
    if (m) report('WARN', `inducing patients ('${m[0].trim()}'): rewards for reviews, 본인부담금 면제·할인, free procedures and first-come offers are 환자 유인 (의료법 제27조제3항)`);
  } },
  { id: 'HW-M6', check(s, report, ctx) {
    if (ctx !== 'medical' || !isCopy(s) || s.legal) return;
    const pct = s.text.match(M_PCT);
    const m = pct || s.text.match(M_EVENT);
    if (!m) return;
    const big = pct ? Number(pct[1]) >= 50 : /반값/.test(m[0]);
    report(big ? 'WARN' : 'FYI', `discount or event on 비급여 care ('${m[0].trim()}'): state the amount, who, how long and the price before it (시행령 제23조제1항제13호); the KMA review board rejects 진료비용·이벤트·할인 wording${big ? '; 보건복지부 treated 50%+ discounts as excessive inducement (2017)' : ''}`);
  } },
  { id: 'HW-M7', check(s, report, ctx) {
    if (ctx !== 'medical' || !isCopy(s) || s.legal) return;
    const m = s.text.match(M_SPECIALTY);
    if (m) report('FYI', `'${m[0].trim()}': only a hospital designated by 보건복지부 may use 전문병원 (의료법 제42조제1항제2호; '보건복지부 지정 ○○전문병원 (지정기간: …)'); for a focus area the KMA board accepts '중점진료' or '집중진료'`);
  } },
  { id: 'HW-M8', check(s, report, ctx) {
    if (ctx !== 'medical' || !isCopy(s) || s.legal || M_ENDORSE_OK.test(s.text)) return;
    const m = s.text.match(M_ENDORSE);
    if (m) report('FYI', `endorsement, award or certification ('${m[0].trim()}'): 의료법 제56조제2항제14호 allows only 의료기관 인증 and public or statutory certification ('보건복지부 인증 의료기관 (유효기간: …)')`);
  } },
  { id: 'HW-M9', check(s, report, ctx) {
    if (ctx !== 'medical' || !isCopy(s) || s.legal) return;
    const t = s.text.trim();
    // a label that is only '(더) 알아보기' is a CTA, whatever element holds it (an <a> is read with its parent)
    if (/^(?:더\s?)?알아보기$/.test(t)) { report('FYI', "CTA '알아보기': the KMA review board asks for '문의하기' in medical ads"); return; }
    for (const [re, fix] of M_KMA) {
      const m = t.match(re);
      if (m) { report('FYI', `'${m[0].trim()}': often rejected by the KMA review board (2025-09-18); ${fix}`); return; }
    }
  } },

  // ---- genre: public (HW-P*): 국립국어원 「쉬운 공문서 쓰기 길잡이」 제1부 제2장 ----
  { id: 'HW-P1', check(s, report, ctx) {
    if (ctx !== 'public' || !isUi(s) || s.legal) return;
    if (sentences(s.text).some((sen) => { const m = sen.match(P_GEOT); return m && jong(m[1]) === 8; })) report('FYI', "'~할 것' reads as an order; write '~하세요' or '~해야 합니다'");
  } },
  { id: 'HW-P2', check(s, report, ctx) {
    if (ctx !== 'public' || !isUi(s) || s.legal) return;
    if (sentences(s.text).some((sen) => P_BARAM.test(sen))) report('FYI', "'~ 바람' reads as an order; write '~하기 바랍니다' or '~해 주시기 바랍니다'");
  } },
  { id: 'HW-P3', check(s, report, ctx) {
    if (ctx !== 'public' || !isUi(s) || s.legal) return;
    if (sentences(s.text).some((sen) => P_HARA.test(sen))) report('FYI', "imperative '~하라': write '~하십시오' or '~하세요'");
  } },
  { id: 'HW-P4', check(s, report, ctx) {
    if (ctx !== 'public' || !isUi(s) || s.legal) return;
    if (P_HALGEOSIDA.test(s.text)) report('FYI', "'~다 할 것이다' → '~다'");
  } },
  { id: 'HW-P5', check(s, report, ctx) {
    if (ctx !== 'public' || !isCopy(s)) return;
    const m = s.text.match(P_DISCRIM);
    if (m) report('WARN', `'${m[0]}' → '장애인', the neutral legal term (국립국어원 길잡이, 차별적 표현)`);
  } },
];

// HW-11 · one speech level per screen. A file stands in for a screen; strings in legal text, alt text
// and record data are left out, and so are long passages (over 200 characters).
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
      if (!isUi(s) || s.legal || s.text.length > 200) continue;
      for (const sen of sentences(s.text)) {
        const lv = endingLevel(sen);
        const statement = isStatement(sen);
        if ((lv === 'hapsyo' || lv === 'haeyo') && statement) by[lv].push(s.line);
        else if (lv === 'banmal' && s.role !== 'heading') report(s.line, 'FYI', 'banmal (해체) in UI copy; use the speech level DESIGN.md sets');
      }
    }
    if (ctx === 'report') return; // a report has its own register rules (HW-R1, HW-R2)
    if (!by.hapsyo.length || !by.haeyo.length) return;
    const minority = by.hapsyo.length < by.haeyo.length ? 'hapsyo' : by.haeyo.length < by.hapsyo.length ? 'haeyo' : null;
    const msg = `this file mixes ${LEVEL_NAME.hapsyo} ×${by.hapsyo.length} and ${LEVEL_NAME.haeyo} ×${by.haeyo.length}; keep one level per surface, as DESIGN.md sets it`;
    for (const lv of minority ? [minority] : ['hapsyo', 'haeyo']) for (const line of new Set(by[lv])) report(line, 'WARN', msg);
  } },

  // ---- genre: report (HW-R*), file-level ----
  // HW-R1 · 해요체 in a report. Every report example in 국립국어원 「쉬운 공문서 쓰기 길잡이」 제3부 제3장 ends in
  // 명사형 (~함·~음·~임), 해라체 or 합쇼체, and none in 해요체.
  { id: 'HW-R1', check(strings, report, ctx) {
    if (ctx !== 'report') return;
    for (const s of strings) {
      if (!isUi(s) || s.legal) continue;
      if (sentences(s.text).some((sen) => endingLevel(sen) === 'haeyo' && isStatement(sen))) report(s.line, 'WARN', "해요체 in report or slide copy: end the line in 명사형 ('늘었음', '확보함') or in the document's 합쇼체/해라체");
    }
  } },
  // HW-R2 · 합쇼체 and 해라체 sentences mixed in one document; 명사형 bullets sit with either (skill call)
  { id: 'HW-R2', check(strings, report, ctx) {
    if (ctx !== 'report') return;
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
    if (ctx !== 'report') return;
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
      const d = context === 'auto' ? detectGenre(raw, found) : null;
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
  // genres (references/ux-writing-contexts.md). ctx-report under --context=report: a 해요체 line, 명사형 lines
  // with and without a period, a 해라체 line beside 합쇼체 ones, '오후 2시'; HW-8's system wording and HW-11 stay
  // quiet there.
  'ctx-report': ['deck.html:6 WARN HW-R1', 'deck.html:7 FYI HW-R4', 'deck.html:8 FYI HW-R4', 'deck.html:10 FYI HW-R2', 'deck.html:13 FYI HW-R3'],
  // ctx-medical under --context=medical: 완치, 100% 보장, 부작용 없는, 최고, 치료 후기, a reward for reviews, 70% and
  // an event price, 전문병원, 학회 추천, the '더 알아보기' CTA, 당일 시술, before/after alt text, '흉터가 거의 없어요'
  // and '효과가 확실한'
  'ctx-medical': [
    'clinic.html:4 WARN HW-M1', 'clinic.html:5 WARN HW-M1', 'clinic.html:6 WARN HW-M2', 'clinic.html:7 WARN HW-M3', 'clinic.html:8 WARN HW-M4',
    'clinic.html:9 WARN HW-M5', 'clinic.html:10 WARN HW-M6', 'clinic.html:11 FYI HW-M6', 'clinic.html:12 FYI HW-M7', 'clinic.html:13 FYI HW-M8',
    'clinic.html:14 FYI HW-M9', 'clinic.html:15 FYI HW-M9', 'clinic.html:16 FYI HW-14', 'clinic.html:16 WARN HW-M4', 'clinic.html:17 WARN HW-M2',
    'clinic.html:18 WARN HW-M1',
  ],
  // ctx-medical-fp under --context=medical: 본인부담률 100%, 최고 혈압, 최초 진료일, '부작용이 없는 시술은 없어요',
  // '없는 것은 아니에요', 완치 판정, '보장할 수 없어요', 최신 소식, 환자 안전, care instructions before and after a
  // procedure, 국가건강검진, the designated 전문병원 and 의료기관 인증 lines, 사망 원인 1위, '한 번에 한 분씩', 내과 전문의
  'ctx-medical-fp': [],
  // ctx-public under --context=public: '~할 것', '~ 바람', '~하라', '~다 할 것이다', 장애우
  'ctx-public': ['notice.html:5 FYI HW-P1', 'notice.html:6 FYI HW-P2', 'notice.html:7 FYI HW-P3', 'notice.html:8 FYI HW-P4', 'notice.html:9 WARN HW-P5'],
  // ctx-good: the same three genres rewritten, each file naming its genre with a pragma (HTML comment, JSON key)
  'ctx-good': [],
  // ctx-pragma, no flag: a report pragma turns HW-11 into HW-R1 for its own file only; an unknown genre is reported
  'ctx-pragma': ['app.html:4 WARN HW-11', 'app.html:5 WARN HW-11', 'deck.html:5 WARN HW-R1', 'typo.html:1 WARN CTX'],
  // detection (no flag): a clinic page with two medical signals, a notice with three public ones, a reveal.js deck
  'auto-medical': ['clinic.html:7 WARN HW-M1', 'clinic.html:8 WARN HW-M3', 'clinic.html:9 WARN HW-M4'],
  'auto-public': ['notice.html:6 FYI HW-P1', 'notice.html:7 WARN HW-P5'],
  'auto-report': ['deck.html:8 WARN HW-R1', 'deck.html:9 FYI HW-R4', 'deck.html:10 FYI HW-R4', 'deck.html:11 FYI HW-R3'],
  // the bait stays app: one medical signal (동물병원 진료 예약), one .go.kr link, a reports/ folder whose mixed
  // levels HW-11 still catches, and a carousel under components/slides/
  'auto-app': ['reports/Monthly.tsx:5 WARN HW-11', 'reports/Monthly.tsx:6 WARN HW-11'],
};
// What detection must decide for each fixture run without a flag (file → genre); every other fixture, none.
const DETECTED = {
  'auto-medical': { 'clinic.html': 'medical' },
  'auto-public': { 'notice.html': 'public' },
  'auto-report': { 'deck.html': 'report' },
};

// The genre a context fixture runs under. The others run under the default, and ctx-good and ctx-pragma
// set theirs per file with a pragma.
const CONTEXT_OF = { 'ctx-report': 'report', 'ctx-medical': 'medical', 'ctx-medical-fp': 'medical', 'ctx-public': 'public' };

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
    if (fs.existsSync(at)) for (const f of run([at], { base: at, context: 'app' }).findings) if (/^HW-[A-Z]/.test(f.rule)) leaks.push(`${name} ${key(f)}`);
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
