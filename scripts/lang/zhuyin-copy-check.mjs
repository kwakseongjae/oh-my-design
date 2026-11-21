#!/usr/bin/env node
/**
 * zhuyin copy check: a deterministic, dependency-free scan of Traditional Chinese (Taiwan) UI copy for the
 * writing rules in docs/drafts/zhuyin/references/writing-rules.md (ZW-nn, each numbered after the research
 * candidate TW-nn it came from). Node >= 18. Development copy for the zhuyin skill; self-contained.
 *
 *   node zhuyin-copy-check.mjs [--json] [--strict] <file-or-dir>...
 *   node zhuyin-copy-check.mjs --self-test
 *
 * Reads plain text and Markdown (one string per line or table cell), HTML (text nodes and the text
 * attributes alt, title, aria-label, placeholder, value, label, content) and JS/TS/JSX (string literals and
 * JSX text). Test and spec files are skipped. A string counts when it holds a Han character and no kana (a
 * string with kana is Japanese). Simplified Chinese shares the Han range, so a Mainland file trips the word rules.
 *
 * Levels. There is no BLOCK: no rule here is required by any source read. WARN would need an authority or two
 * non-translation sources that state the rule and give the matched form as wrong; no checked rule has that, so
 * every finding is FYI. Exit code: 0 after a scan; 1 with --strict when any WARN exists (today none can), or
 * when --self-test fails; 2 on a usage error.
 *
 * Only rules a regex, a code point or a count can decide are here. Each pattern is built from forms the sources
 * quote, and the comment beside it names the quote. The one role rule (ZW-32, italics) reads the element only:
 * <i>, <em>, or an inline font-style: italic, and single-asterisk or single-underscore emphasis in Markdown.
 * Every finding carries its source key and the standing of the source. A hit is a prompt to read the string in
 * its place, not a defect.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROSE_EXT = new Set(['.txt', '.md', '.markdown', '.mdx']);
const HTML_EXT = new Set(['.html', '.htm']);
const CODE_EXT = new Set(['.jsx', '.tsx', '.js', '.ts', '.mjs', '.cjs']);
const SKIP_DIR = new Set(['node_modules', 'dist', 'build', 'coverage', 'out', 'vendor']);
const SKIP_FILE = /\.(test|spec|stories)\.[cm]?[jt]sx?$|\.d\.ts$/i;
const HAN_CLASS = '\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-\\uFAFF';
const HAN = new RegExp('[' + HAN_CLASS + ']');
const KANA = /[ぁ-ゖァ-ヺㇰ-ㇿｦ-ﾝ]/;
const TEXT_ATTRS = /^(alt|title|aria-label|placeholder|value|label|content)$/i;
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);

// Source key (writing-rules.md "Source keys") and the standing of what each rule rests on.
const SOURCE = {
  'ZW-01': 'MS 2.1, MZ (2 of 3 translation guides; Mozilla allows the informal form outside the product)',
  'ZW-02': 'MS 2.1.4 (one translation guide)',
  'ZW-04': 'MS 2.2.1 (one translation guide; "in most cases", a preference)',
  'ZW-05': 'MS 4.1.5, 2.1.4 (one translation guide)',
  'ZW-07': 'MS 3.1, 4.2.6 (one translation guide; a real person\'s pronoun is fine)',
  'ZW-08': 'MS 3, 3.2 (one translation guide)',
  'ZW-09': 'MS 4.2.11 (one translation guide)',
  'ZW-10': 'MS 4.2.12 (one translation guide; the other form "could be used")',
  'ZW-18': 'MS 5.6.2 (one translation guide; a default it allows leaving)',
  'ZW-21': 'MZ, WP for the principle (2 of 3 translation guides); the 互聯網 example is MZ\'s; the other pairs are MOE-2A page-1 rows, a descriptive dictionary table',
  'ZW-22': 'MS 4.2.2 (one translation guide)',
  'ZW-23': 'MS 4.1.2 (one translation guide)',
  'ZW-32': 'WP, MS 4.1.7 (2 of 3 translation guides)',
  'ZW-34': 'MZ, WP, MS 4.2.10 (3 of 3 translation guides; translated-software practice, which Taiwan-native text does not always follow)',
  'ZW-42': 'MS 3.2 (one translation guide)',
};

// ---- rules on one string -------------------------------------------------------------------------
// [id, severity, regex, message]
const PATTERNS = [
  // MZ 「遇到 “you” 時，一般情形下使用敬語「您」。若原文沒有那麼嚴肅可視情況使用「你」，但產品內仍應使用「您」。」; the plural is ZW-02
  ['ZW-01', 'FYI', /你(?!們)/g, 'the informal singular you; Microsoft and Mozilla write the polite form inside the product'],
  // MS 2.1.4 "use 你們 instead of 您們 for "you" (plural)."
  ['ZW-02', 'FYI', /您們/g, 'Microsoft writes the plural with the informal pronoun'],
  // MS 2.1.4 table 「毋需」 → 「無需」; MS 4.1.5 「如果」sounds more conversational than「倘若」
  ['ZW-05', 'FYI', /倘若|毋需/g, 'a formal form Microsoft replaces with an everyday one'],
  // MS 3.1 pair 「當作者開啟她的文件時…」 → 「當作者開啟其文件時…」; MS 4.2.6 "Avoid using non-human pronoun 它. If necessary, use 其"
  ['ZW-07', 'FYI', /她的|他的|它/g, 'a gendered or non-human pronoun; Microsoft writes the neutral pronoun for a generic person'],
  // MS 3 and 3.2 tables, the "not" column: 「主/從」 「黑名單/白名單」 「非軍事區 (DMZ)」 「死當」 「外勞」 「母親或父親」 「殘障人士; 殘廢」 「聾子」; "such as 患有 or 受... 之苦"
  ['ZW-08', 'FYI', /主\/從|黑名單|白名單|非軍事區|死當|外勞|母親或父親|殘障人士|殘廢|聾子|患有/g, 'a term Microsoft replaces with an inclusive one'],
  // MS 4.2.11 pair 「檔案會自動被儲存。」 → 「檔案會自動儲存。」
  ['ZW-09', 'FYI', /被/g, 'the passive marker; Microsoft avoids the passive'],
  // MS 4.2.11 "Avoid using 會...。pattern with 會 beginning a sentence." pair 「會自動儲存檔案。」 → 「系統會自動儲存檔案。」
  ['ZW-09', 'FYI', /(?<=^\s*|[。！？!?]\s*)會(?=[^。！？!?]*。)/g, 'a sentence that opens with the future auxiliary; Microsoft names who acts'],
  // MS 4.2.12 pairs 「儲存文字檔案中...」 → 「正在儲存文字檔案...」, 「完成安裝中...」 → 「正在完成安裝...」
  ['ZW-10', 'FYI', /中(?:\.{3}|…+)(?=\s*$)/g, 'an ongoing operation written with the trailing form; Microsoft writes the leading form'],
  // MS 5.6.2 "You might want to…" → 「建議您...」, "Please avoid 您可能想要..."
  ['ZW-18', 'FYI', /您可能想要/g, 'a phrase Microsoft avoids in messages'],
  // MS 4.2.2 "Samples of unacceptable Traditional Chinese colloquialisms": 「冏」 「就醬」 「監介」 「矮油」
  ['ZW-22', 'FYI', /冏|就醬|監介|矮油/g, 'internet slang Microsoft lists as unacceptable'],
  // MS 4.1.2 pairs 「數個 IFSs」 → 「數個 IFS」, 「3 家 OEMs」 → 「3 家 OEM」
  ['ZW-23', 'FYI', /(?<![A-Za-z])[A-Z]{2,}s(?![A-Za-z])/g, 'an acronym with a plural s; Microsoft drops the s in Chinese text'],
  // MS 3.2 「請按一下加號」 not 「請按一下+」
  ['ZW-42', 'FYI', new RegExp('(?<=[' + HAN_CLASS + '])\\+(?![+\\w])', 'g'), 'a symbol right after Chinese text; Microsoft spells it out for screen readers'],
];

// ZW-21: MZ 「不要使用機器翻譯。亦請注意需符合台灣人常用的語法。（例：o網路 x互聯網）」, and the MOE-2A rows
// confirmed in the bytes the page served (page 1): 部落格 | 博客, 埠 | 端口, 筆記型電腦 | 筆記本電腦. Other rows are
// not confirmed at character level and are not used.
const TAIWAN_WORD = { 互聯網: '網路', 博客: '部落格', 端口: '埠', 筆記本電腦: '筆記型電腦' };
const OTHER_VARIANT = new RegExp(Object.keys(TAIWAN_WORD).join('|'), 'g');
const variantMessage = (w) => (w === '互聯網'
  ? 'Mozilla gives this as the wrong form, with ' + TAIWAN_WORD[w] + ' as the right one'
  : 'the MOE comparison table lists this as the Mainland word, with ' + TAIWAN_WORD[w] + ' in its Taiwan column (the table is descriptive; read it in place)');

// ZW-34: MZ 「中文字、標點符號與半形英數、符號字元間需用半形空格隔開，但與全形符號間則免。」; MS 4.2.10 Incorrect
// 「序列化程式無法處理不明的xsi:type 資訊。」. A digit beside 年, 月 or 日 is TW-36 (a house choice), and
// placeholders (%1, %d, %1$s, {name}) are not text, so both are skipped.
const PLACEHOLDER = /%\d+\$[a-z@]|%\d+|%[a-z@]|\$?\{[^{}\n]*\}/gi;
const HAN_LATIN = new RegExp('[' + HAN_CLASS + '](?=[A-Za-z0-9])|[A-Za-z0-9](?=[' + HAN_CLASS + '])', 'g');
const DATE_UNIT = /[年月日]/;
function hanLatin(text) {
  const masked = text.replace(PLACEHOLDER, (w) => ' '.repeat(w.length));
  const out = [];
  for (const m of masked.matchAll(HAN_LATIN)) {
    const pair = masked.slice(m.index, m.index + 2);
    if (/[0-9]/.test(pair) && DATE_UNIT.test(pair)) continue;
    out.push({ index: m.index, match: pair });
  }
  return out;
}

// ---- findings ------------------------------------------------------------------------------------
class Findings {
  constructor() { this.map = new Map(); }
  add(file, line, severity, rule, match, message) {
    const k = file + '\0' + line + '\0' + rule + '\0' + match;
    if (!this.map.has(k)) this.map.set(k, { file, line, severity, rule, match, message, source: SOURCE[rule] });
  }
  list() {
    const num = (r) => Number(r.slice(3));
    return [...this.map.values()].sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line || num(a.rule) - num(b.rule) || a.match.localeCompare(b.match));
  }
}

// ---- files ---------------------------------------------------------------------------------------
function collect(inputs) {
  const out = [];
  const walk = (p, depth) => {
    let st;
    try { st = fs.statSync(p); } catch { return; }
    if (st.isDirectory()) {
      const name = path.basename(p);
      if (depth > 0 && (SKIP_DIR.has(name) || name.startsWith('.'))) return;
      for (const e of fs.readdirSync(p).sort()) walk(path.join(p, e), depth + 1);
    } else if (st.isFile()) {
      const ext = path.extname(p).toLowerCase();
      if (!(PROSE_EXT.has(ext) || HTML_EXT.has(ext) || CODE_EXT.has(ext)) || /\.min\.js$/.test(p) || st.size > 2_000_000) return;
      if (depth > 0 && SKIP_FILE.test(p)) return;
      out.push(path.resolve(p));
    }
  };
  for (const p of inputs) walk(p, 0);
  return [...new Set(out)].sort();
}

const makeLineAt = (text) => {
  const starts = [0];
  for (let i = 0; i < text.length; i++) if (text[i] === '\n') starts.push(i + 1);
  return (off) => { let lo = 0, hi = starts.length - 1; while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (starts[mid] <= off) lo = mid; else hi = mid - 1; } return lo + 1; };
};
const blank = (s) => s.replace(/[^\n]/g, ' ');

// ---- strings -------------------------------------------------------------------------------------
// A unit is one string: { text, at (offset of text[0] in the file), italic }.

// Markdown and text: one unit per line (per cell in a table row); headings, list markers and quote markers
// are stripped; front matter, fenced code and inline code are skipped. Emphasis is read per line.
// MS 4.1.7 "Bold and Italic style should be avoided for Traditional Chinese characters."; WP 「台灣中文譯文不可以使用「斜體」樣式，如果在原文中遇到以 i 或 em 標籤強調的內容或單字，請改用 strong 標籤以粗體強調。」
const MD_ITALIC = /(?<![*\\\w])\*(?![\s*])([^*\n]+?)(?<![\s*\\])\*(?![*\w])|(?<![_\\\w])_(?![\s_])([^_\n]+?)(?<![\s_\\])_(?![_\w])/g;
function proseUnits(raw) {
  const text = raw.replace(/<!--[\s\S]*?-->/g, blank);
  const units = [];
  const lines = text.split('\n');
  let off = 0;
  let i = 0;
  const offsets = [];
  for (const l of lines) { offsets.push(off); off += l.length + 1; }
  if (/^---\s*$/.test(lines[0] || '')) { const end = lines.findIndex((l, k) => k > 0 && /^(---|\.\.\.)\s*$/.test(l)); if (end > 0) i = end + 1; }
  let fence = null;
  for (; i < lines.length; i++) {
    let l = lines[i];
    const f = /^\s*(\x60\x60\x60|~~~)/.exec(l);
    if (fence) { if (f && f[1] === fence) fence = null; continue; }
    if (f) { fence = f[1]; continue; }
    l = l.replace(/\x60[^\x60\n]*\x60/g, (w) => ' '.repeat(w.length));
    for (const m of l.matchAll(MD_ITALIC)) {
      const inner = m[1] ?? m[2];
      units.push({ text: inner, at: offsets[i] + m.index + 1, italic: true, only: 'ZW-32' });
    }
    const body = l.replace(/^(\s*(?:>\s*)*(?:#{1,6}\s+|[-*+]\s+|\d+[.)]\s+)?)/, (w) => ' '.repeat(w.length));
    if (/^\s*\|.*\|\s*$/.test(body)) {
      let p = body.indexOf('|') + 1;
      for (const cell of body.slice(p, body.lastIndexOf('|')).split('|')) { units.push({ text: cell, at: offsets[i] + p, italic: false }); p += cell.length + 1; }
    } else units.push({ text: body, at: offsets[i], italic: false });
  }
  return units;
}

// HTML and JSX elements: a stack of open elements; text between tags is a unit, italic when an open element is
// <i>, <em> or has an inline italic style. Attribute values that carry text are units of their own.
const ITALIC_STYLE = /font-style\s*:\s*italic|fontStyle\s*:\s*["']italic["']/i;
function scanTags(masked, raw, units, { attrs }) {
  const re = /<(\/?)([A-Za-z][\w.:-]*)\b((?:[^<>"'{}]|"[^"]*"|'[^']*'|\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\})*?)(\/?)>/g;
  const stack = [];
  const ranges = [];
  let last = 0;
  // text nodes are read from the masked copy, so comments, scripts and (in code) string literals are not text
  const text = (from, to) => {
    const s = masked.slice(from, to);
    if (HAN.test(s)) units.push({ text: s, at: from, italic: stack.some((e) => e.italic) });
  };
  let m;
  while ((m = re.exec(masked))) {
    text(last, m.index);
    last = m.index + m[0].length;
    const tag = m[2].toLowerCase();
    if (m[1]) {
      const k = stack.map((e) => e.tag).lastIndexOf(tag);
      if (k >= 0) { for (const e of stack.splice(k)) if (e.italic) ranges.push([e.start, m.index]); }
      continue;
    }
    const attrRaw = raw.slice(m.index + 1 + m[2].length, m.index + m[0].length - 1);
    if (attrs) {
      for (const a of attrRaw.matchAll(/([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
        const v = a[2] ?? a[3];
        if (TEXT_ATTRS.test(a[1]) && HAN.test(v)) units.push({ text: v, at: m.index + 1 + m[2].length + a.index + a[0].indexOf(v, a[1].length), italic: false });
      }
    }
    if (m[4] || VOID.has(tag)) continue;
    stack.push({ tag, start: m.index, italic: tag === 'i' || tag === 'em' || ITALIC_STYLE.test(attrRaw) });
  }
  text(last, masked.length);
  for (const e of stack) if (e.italic) ranges.push([e.start, masked.length]);
  return ranges;
}

function htmlUnits(raw) {
  const masked = raw.replace(/<!--[\s\S]*?-->/g, blank).replace(/(<(script|style)\b[^>]*>)([\s\S]*?)(<\/\2>)/gi, (w, a, _t, body, b) => a + blank(body) + b);
  const units = [];
  scanTags(masked, raw, units, { attrs: true });
  return units;
}

// JS/TS/JSX: comments and string literals are found by one pass; literals become units (template holes are
// blanked), then JSX text is read from the code with comments and literals blanked.
function codeUnits(raw) {
  const units = [];
  const lits = [];
  let masked = '';
  let i = 0;
  while (i < raw.length) {
    const c = raw[i], d = raw[i + 1];
    if (c === '/' && d === '/') { const e = raw.indexOf('\n', i); const j = e < 0 ? raw.length : e; masked += blank(raw.slice(i, j)); i = j; continue; }
    if (c === '/' && d === '*') { const e = raw.indexOf('*/', i + 2); const j = e < 0 ? raw.length : e + 2; masked += blank(raw.slice(i, j)); i = j; continue; }
    if (c === '"' || c === "'" || c === '\x60') {
      let j = i + 1;
      while (j < raw.length && raw[j] !== c && !(c !== '\x60' && raw[j] === '\n')) j += raw[j] === '\\' ? 2 : 1;
      const body = raw.slice(i + 1, j);
      lits.push({ at: i + 1, s: c === '\x60' ? body.replace(/\$\{[^}]*\}/g, (w) => ' '.repeat(w.length)) : body });
      masked += c + blank(body) + (raw[j] ?? '');
      i = j + 1;
      continue;
    }
    masked += c;
    i++;
  }
  const ranges = scanTags(masked, raw, units, { attrs: false });
  for (const l of lits) if (HAN.test(l.s)) units.push({ text: l.s, at: l.at, italic: ranges.some(([a, b]) => l.at > a && l.at < b) });
  return units;
}

// ---- run -----------------------------------------------------------------------------------------
function run(inputs, { base = process.cwd() } = {}) {
  const files = collect(inputs).map((abs) => ({ abs, ext: path.extname(abs).toLowerCase(), text: fs.readFileSync(abs, 'utf8') }));
  const zh = files.some((f) => HAN.test(f.text));
  const F = new Findings();
  const notes = [];
  if (zh) {
    for (const f of files) {
      const rel = path.relative(base, f.abs);
      const file = (rel.startsWith('..') ? f.abs : rel).split(path.sep).join('/');
      const lineAt = makeLineAt(f.text);
      const units = PROSE_EXT.has(f.ext) ? proseUnits(f.text) : HTML_EXT.has(f.ext) ? htmlUnits(f.text) : codeUnits(f.text);
      for (const u of units) {
        if (!HAN.test(u.text) || KANA.test(u.text)) continue;
        const at = (k) => lineAt(u.at + k);
        const lead = u.text.length - u.text.trimStart().length;
        const t = u.text.trim();
        // ZW-32: WP 「台灣中文譯文不可以使用「斜體」樣式，如果在原文中遇到以 i 或 em 標籤強調的內容或單字，請改用 strong 標籤以粗體強調。」
        if (u.italic) F.add(file, at(lead), 'FYI', 'ZW-32', t, 'Chinese text in italics; Microsoft and WordPress use bold for emphasis and no italics');
        if (u.only) continue;
        for (const [id, sev, re, msg] of PATTERNS) for (const m of u.text.matchAll(re)) F.add(file, at(m.index), sev, id, m[0], msg);
        for (const m of u.text.matchAll(OTHER_VARIANT)) F.add(file, at(m.index), 'FYI', 'ZW-21', m[0], variantMessage(m[0]));
        for (const h of hanLatin(u.text)) F.add(file, at(h.index), 'FYI', 'ZW-34', h.match, 'Han and a Latin letter or digit with no space between; the three translation guides put a half-width space there');
        // MS 2.2.1 "請輸入密碼" is much better than "輸入密碼"
        if (/^輸入/.test(t)) F.add(file, at(lead), 'FYI', 'ZW-04', '輸入', 'an instruction with no polite marker before the verb; Microsoft prefers one in most cases');
      }
    }
  } else {
    notes.push('No Han characters found in ' + files.length + ' scanned file(s); nothing to check.');
  }
  const findings = F.list();
  const summary = { WARN: 0, FYI: 0 };
  for (const x of findings) summary[x.severity]++;
  return { files: files.length, zh, findings, notes, summary };
}

// ---- output --------------------------------------------------------------------------------------
const summaryLine = (res, exit) => res.summary.WARN + ' WARN · ' + res.summary.FYI + ' FYI · exit ' + exit;

function printHuman(res, exit) {
  const out = ['zhuyin copy check · ' + res.files + ' file(s) · Han ' + (res.zh ? 'found' : 'not found')];
  const w = Math.max(0, ...res.findings.map((f) => (f.file + ':' + f.line).length));
  for (const f of res.findings) {
    out.push((f.file + ':' + f.line).padEnd(w) + '  ' + f.severity.padEnd(4) + '  ' + f.rule + '  「' + f.match + '」 ' + f.message + '.');
    out.push(' '.repeat(w) + '              source: ' + f.source);
  }
  for (const n of res.notes) out.push('note: ' + n);
  out.push(summaryLine(res, exit));
  console.log(out.join('\n'));
}

// ---- self-test: fixtures/zhuyin-copy/<rule>/hit must give exactly these findings, <rule>/miss none ------
const EXPECTED = {
  'zw-01/hit': ['strings.md:2 FYI ZW-01'],
  'zw-02/hit': ['strings.md:2 FYI ZW-02'],
  'zw-04/hit': ['strings.md:2 FYI ZW-04'],
  'zw-05/hit': ['strings.md:2 FYI ZW-05', 'strings.md:3 FYI ZW-05'],
  'zw-07/hit': ['strings.md:2 FYI ZW-07', 'strings.md:3 FYI ZW-07'],
  'zw-08/hit': ['strings.md:2 FYI ZW-08', 'strings.md:2 FYI ZW-08', 'strings.md:3 FYI ZW-08', 'strings.md:4 FYI ZW-08', 'strings.md:5 FYI ZW-08', 'strings.md:6 FYI ZW-08', 'strings.md:7 FYI ZW-08', 'strings.md:7 FYI ZW-08', 'strings.md:8 FYI ZW-08', 'strings.md:9 FYI ZW-08', 'strings.md:10 FYI ZW-08'],
  'zw-09/hit': ['strings.md:2 FYI ZW-09', 'strings.md:3 FYI ZW-09'],
  'zw-10/hit': ['strings.md:2 FYI ZW-10', 'strings.md:3 FYI ZW-10'],
  'zw-18/hit': ['strings.md:2 FYI ZW-18'],
  'zw-21/hit': ['strings.md:2 FYI ZW-21', 'strings.md:3 FYI ZW-21', 'strings.md:4 FYI ZW-21', 'strings.md:5 FYI ZW-21'],
  'zw-22/hit': ['strings.md:2 FYI ZW-22', 'strings.md:3 FYI ZW-22', 'strings.md:4 FYI ZW-22', 'strings.md:5 FYI ZW-22'],
  'zw-23/hit': ['strings.md:2 FYI ZW-23', 'strings.md:3 FYI ZW-23'],
  'zw-32/hit': ['page.html:5 FYI ZW-32', 'page.html:6 FYI ZW-32', 'page.html:7 FYI ZW-32', 'strings.md:2 FYI ZW-32', 'Term.tsx:5 FYI ZW-32', 'Term.tsx:6 FYI ZW-32'],
  'zw-34/hit': ['strings.md:2 FYI ZW-34'],
  'zw-42/hit': ['strings.md:2 FYI ZW-42'],
};
for (const k of Object.keys(EXPECTED)) if (k.endsWith('/hit')) EXPECTED[k.replace(/hit$/, 'miss')] = [];

function selfTest() {
  const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'zhuyin-copy');
  const key = (f) => f.file + ':' + f.line + ' ' + f.severity + ' ' + f.rule;
  let ok = true;
  let checked = 0;
  for (const [name, expected] of Object.entries(EXPECTED)) {
    const at = path.join(dir, name);
    if (!fs.existsSync(at)) { ok = false; console.log('  ' + name + ': fixture missing'); continue; }
    const res = run([at], { base: at });
    if (!res.zh) { ok = false; console.log('  ' + name + ': has no Han text, so it tests nothing'); }
    const got = res.findings.map(key).sort();
    const want = [...expected].sort();
    if (JSON.stringify(got) !== JSON.stringify(want)) { ok = false; console.log('  ' + name + '\n    want ' + JSON.stringify(want) + '\n    got  ' + JSON.stringify(got)); }
    checked++;
  }
  const deterministic = JSON.stringify(run([dir], { base: dir })) === JSON.stringify(run([dir], { base: dir }));
  ok = ok && deterministic;
  console.log('self-test: ' + checked + ' fixture sets, deterministic ' + deterministic);
  console.log(ok ? 'self-test: PASS' : 'self-test: FAIL');
  return ok ? 0 : 1;
}

function main(argv) {
  const flags = new Set(argv.filter((a) => a.startsWith('--')));
  const inputs = argv.filter((a) => !a.startsWith('--'));
  const known = new Set(['--json', '--strict', '--self-test', '--help']);
  const unknown = [...flags].filter((f) => !known.has(f));
  if (unknown.length) { console.error('unknown flag: ' + unknown.join(' ')); return 2; }
  if (flags.has('--help') || (!inputs.length && !flags.has('--self-test'))) {
    console.log('usage: node zhuyin-copy-check.mjs [--json] [--strict] <file-or-dir>...\n       node zhuyin-copy-check.mjs --self-test\nfindings are WARN or FYI (today FYI only); exit 1 only with --strict when any WARN exists');
    return flags.has('--help') ? 0 : 2;
  }
  if (flags.has('--self-test')) return selfTest();
  const res = run(inputs);
  const exit = flags.has('--strict') && res.summary.WARN > 0 ? 1 : 0;
  if (flags.has('--json')) console.log(JSON.stringify({ ...res, exit }, null, 2));
  else printHuman(res, exit);
  return exit;
}

export { run, SOURCE };

const invokedDirectly = (() => {
  try { return fs.realpathSync(process.argv[1] || '') === fs.realpathSync(fileURLToPath(import.meta.url)); } catch { return false; }
})();
if (invokedDirectly) process.exitCode = main(process.argv.slice(2));
