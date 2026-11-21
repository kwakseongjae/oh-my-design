#!/usr/bin/env node
/**
 * pinyin copy check: deterministic, dependency-free scan of Simplified Chinese (Mainland China) UI copy for the
 * writing rules in docs/drafts/pinyin/references/writing-rules.md (PW-nn, each numbered after the research
 * candidate CN-nn it came from). Node >= 18. Development copy for the pinyin skill; self-contained, so it can
 * move into the skill unchanged.
 *
 *   node pinyin-copy-check.mjs [--json] [--strict] <file-or-dir>...
 *   node pinyin-copy-check.mjs --self-test
 *
 * Reads plain text and Markdown (one string per line; headings are headings, other lines are running text,
 * table cells are cells), HTML, JSX/TSX, Vue, Svelte and Astro (text nodes, quoted attribute values, string
 * literals inside {...}), and JS/TS string literals. Test and spec files are skipped. A file is read only when
 * one of its strings holds a Han character (comments do not count); it does not tell Chinese from Japanese.
 *
 * Exit code: 0 after a scan; 1 with --strict when any WARN exists, or when --self-test fails; 2 on a usage
 * error. There is no BLOCK level: no rule here is required by a source that was read in full. WARN is used
 * only where at least two independent company guides state the rule and the match is the form a source itself
 * gives as wrong; everything else is FYI. A hit is a prompt to read the string in its place, not a defect.
 *
 * Only rules a regex, a code point or a count can decide are here. Each pattern is built from forms the
 * sources quote; the comment beside it names the quote. Roles come from the element only: <button>, a
 * component whose name ends in Button, role="button", a submit/button/reset input (button); <h1>-<h6>,
 * <title>, a Markdown heading (heading); <p>, and Markdown or text lines that are not headings, table rows or
 * code (running text). A string whose role cannot be traced gets no role rule, and a label passed as an
 * expression is not read. Nobody who reads Chinese natively has reviewed these rules.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROSE_EXT = new Set(['.txt', '.md', '.markdown', '.mdx']);
const MARKUP_EXT = new Set(['.html', '.htm', '.jsx', '.tsx', '.vue', '.svelte', '.astro']);
const CODE_EXT = new Set(['.js', '.ts', '.mjs', '.cjs', '.jsx', '.tsx', '.vue', '.svelte', '.astro']);
const SKIP_DIR = new Set(['node_modules', '.git', 'dist', 'build', 'out', '.next', '.nuxt', '.svelte-kit', '.turbo', '.vercel', '.cache', 'coverage', 'vendor']);
const SKIP_FILE = /\.(test|spec|stories)\.[cm]?[jt]sx?$|\.d\.ts$/i;
const HAN = /[\u3400-\u4DBF\u4E00-\u9FFF]/;
const HAN_CHAR = '[\\u3400-\\u4DBF\\u4E00-\\u9FFF]';
// full-width marks: ，。、；：？！（）《》「」『』
const FW_MARK = '[\\uFF0C\\u3002\\u3001\\uFF1B\\uFF1A\\uFF1F\\uFF01\\uFF08\\uFF09\\u300A\\u300B\\u300C\\u300D\\u300E\\u300F]';
// MS 4.1.1 「周一、周二、周三、周四、周五、周六、周日」: the weekday characters are read from this quote
const WEEKDAYS = '周一、周二、周三、周四、周五、周六、周日'.split('、').map((d) => d.slice(1)).join('');

// Source keys (writing-rules.md "Source keys") and the standing of what each rule rests on.
const SOURCE = {
  'PW-01': 'AD-cw, ZD-se, SM-cg, TB-cw, MS, MDN (4 of 4 company guides and two translation guides; Teambition allows the formal pronoun in very formal settings)',
  'PW-02': 'AD-cw, TB-cw, ZD-pr (3 of 4 company guides)',
  'PW-04': 'ZD-se, ZD-pu, MS 4.1.8 (one company guide, Zan, for the vocative and the tilde; translation guide only, Microsoft, for the word list)',
  'PW-06': 'AD-cw, TB-cw, TB-pu, ZD-se, SM-cg, MS 4.1.3 (4 of 4 company guides and one translation guide)',
  'PW-07': 'AD-cw (one company guide\'s caption names these words; 4 of 4 guides ask not to command or blame)',
  'PW-08': 'AD-cw, TB-corp, SM-cg (three company glossaries; Semi keeps the word for very serious cases)',
  'PW-10': 'MS 2.1.2, 4.1.6 (translation guide only, Microsoft)',
  'PW-11': 'MS 3, SM-cg (translation guide only, Microsoft, for its table; one company guide, Semi, for the list words)',
  'PW-13': 'AD-cw, ZD-pu, SM-toast, SM-notif, SM-banner, TB-pu (4 of 4 company guides, each for its own list; no wrong string given)',
  'PW-16': 'AD-cw, TB-corp, ZD-pr, ZD-lib, SM-cg (4 of 4 company glossaries for one word, 3 of 4 for the other two)',
  'PW-18': 'ZD-pr, TB-cw, TB-corp, SM-toast (3 of 4 company guides; the wrong form is Zan\'s, and Teambition\'s copywriting page shows the same form with labels the researcher could not confirm)',
  'PW-21': 'ZD-df (one company guide, Zan)',
  'PW-26': 'ZD-se, ZD-sc, TB-corp, AD-cw, SM-cg (4 of 4 company guides; the wrong form is Zan\'s)',
  'PW-28': 'ZD-sc, SM-cg (2 of 4 company guides; the wrong form is Zan\'s)',
  'PW-32': 'AD-cw, TB-pu, ZD-pu (3 of 4 company guides; Ant allows the mark in greetings and congratulations)',
  'PW-38': 'TB-pu (one company guide, Teambition)',
  'PW-45': 'TB-pu, ZD-df (2 of 4 company guides; the wrong form is Zan\'s)',
  'PW-47': 'MZ-sumo, MDN, WP with TB-mix (translation guides only; Teambition\'s mixed-text page shares WordPress\'s wording)',
  'PW-51': 'TB-unit (one company guide, Teambition, gives the wrong form; 3 of 4 use the larger units)',
  'PW-53': 'ZD-df, SM-cg, AD-df, TB-pu, TB-exp (4 of 4 company guides write hyphenated dates; the wrong forms are Zan\'s)',
  'PW-54': 'ZD-df (one company guide, Zan)',
  'PW-55': 'ZD-df (one company guide, Zan; Microsoft uses the same forms, as a translation guide)',
  'PW-59': 'WP, MDN, MZ-sumo, TB-mix, TB-pu, AD-cw, ZD-pu (3 of 4 company guides and three translation guides; Zan limits it to paragraph text)',
};

// ---- rules on one string ------------------------------------------------------------------------
// [id, severity, regex, message, roles (null: any string), source when it differs from SOURCE[id], needs Han]
const PATTERNS = [
  // ZD-lib, ZD-se 不推荐 「恭喜您，审核认证通过！」
  ['PW-01', 'FYI', /您/g, 'the formal pronoun; the company guides address the user with the plain one (Teambition allows the formal one in very formal settings)', null],
  // ZD-se 不推荐 「亲，数据已经更新完成了，可以下载查看哦～」: the vocative at the start of a string
  ['PW-04', 'FYI', /(?<=^\s*)亲\uFF0C/g, 'a chat-style vocative Zan gives as the wrong form', null],
  // the same example ends in U+FF5E; ZD-pu 「文案表达需保持正式与严谨，不应使用无实质意义的聊天式标点，如“~”。」 names U+007E
  ['PW-04', 'FYI', new RegExp('(?<=' + HAN_CHAR + ')[~\\uFF5E]+(?=\\s*$)', 'g'), 'a chat-style tilde at the end of a string; Zan gives it as the wrong form', null],
  // MS 4.1.8 "Unacceptable zh-CN colloquialisms, idioms, and network terms: 给力、山寨、亲、神马、偶、童鞋、酱紫."
  ['PW-04', 'FYI', /给力|山寨|神马|童鞋|酱紫/g, 'a colloquialism Microsoft lists as unacceptable in its translations', null, 'MS 4.1.8 (translation guide only, Microsoft)'],
  // TB-cw 「避免极端语气，例如“绝对”，“一定”等」; TB-pu 「描述产品时，不使用“最佳” “最好” “最著名”等具有强烈评价色彩的词语」; caption 「「绝不」过于绝对，让用户感到不适。」; MS 4.1.3 "最好", "最强", "唯一"
  ['PW-06', 'FYI', /绝对|绝不|最佳|最好|最著名|最强|唯一/g, 'an absolute or superlative word the guides ask to avoid', null],
  // AD-cw 「「不能」、「不要」、「请勿」都给人命令或强迫的感觉。」
  ['PW-07', 'FYI', /不要|请勿/g, 'a word Ant names as sounding like an order', null],
  // ZD-sc 错误 「对不起，该功能无法使用。」; AD-cw, TB-corp and SM-cg list it against the other apology word
  ['PW-08', 'FYI', /对不起/g, 'three company glossaries prefer the other apology word, and Ant keeps apologies for faults of the system', null],
  // MS 2.1.2 table: 倘若/假使/假若, 若要, 仅是; MS 4.1.6: 总而言之
  ['PW-10', 'FYI', /倘若|假使|假若|若要|仅是|总而言之/g, 'a formal word Microsoft replaces with an everyday one', null],
  // MS 3 "Not this" column: 蛮子, 残废, 老外, 乡下人, 社会阶级, 村长, 回回, 北朝鲜; SM-cg 「不要使用黑名单或白名单」
  ['PW-11', 'FYI', /蛮子|残废|老外|乡下人|社会阶级|村长|回回|北朝鲜/g, 'a word in the "Not this" column of Microsoft\'s inclusive-wording table', null, 'MS 3 (translation guide only, Microsoft; the country-name row is Microsoft\'s alone)'],
  ['PW-11', 'FYI', /黑名单|白名单/g, 'Semi asks for another word', null, 'SM-cg (one company guide, Semi)'],
  // SM-cg 「登录 | Log in | 登陆、Login（仅用作名词）」; 「账号 | Account | 帐号」; 「其他 | Other | 其它」; ZD-pr 错误 「登陆」
  ['PW-16', 'WARN', /登陆|帐号|其它/g, 'a spelling the company glossaries list as not to be used (one of these words also means "to land": read it in place)', null],
  // ZD-pr 错误 「商品已被成功发布」; TB-cw 「「设计系统」项目已被成功创建」
  ['PW-18', 'WARN', /已被成功/g, 'a passive status sentence; Zan gives this form as wrong', null],
  // ZD-df 错误 「当前版本为 V4.43.0」
  ['PW-21', 'FYI', /(?<![A-Za-z])V\d+(?:\.\d+)+/g, 'a V before the version number; Zan writes digits only', null, null, true],
  // ZD-sc 错误 「请求失败，通用网络错误，错误编号 500。」
  ['PW-28', 'WARN', /错误编号\s*\d+/g, 'an error code in user-facing text; Zan and Semi ask for plain words', null],
  // ZD-se 不推荐 「操作错误，无法上传！」; ZD-pu 「文案表达需保持平和与冷静，需克制或尽量不使用叹号“！”。」
  ['PW-32', 'FYI', new RegExp('(?<=' + HAN_CHAR + ')\\uFF01', 'g'), 'an exclamation mark; three company guides ask to avoid it (Ant allows it in greetings and congratulations)', null],
  // TB-pu 不推荐 「《安全法》、《交通法》、《交通法》我们都要遵守」
  ['PW-38', 'FYI', /[\u300B\u201D]\u3001[\u300A\u201C]/g, 'a mark between consecutive title or quotation marks; Teambition gives this form as wrong', null],
  // ZD-df 错误 「1：文本信息；」 (number, colon, then Han); TB-pu 「序列号后的标点要使用实心句号 "."，不要使用逗号“，”」 names the comma but gives no wrong string, so the comma is not matched
  ['PW-45', 'WARN', new RegExp('(?<=^\\s*)\\d{1,3}\\uFF1A(?=' + HAN_CHAR + ')', 'g'), 'a list number followed by a colon; Zan gives this form as wrong, and Zan and Teambition use a full stop', null],
  // TB-mix 不推荐 「刚刚注册了 Teambition ，好开心！」 and 「刚刚注册了 Teambition， 好开心！」; MZ-sumo 「文字与标点符号之间不要留空格。」
  ['PW-47', 'FYI', new RegExp('(?<=\\S) +' + FW_MARK + '|' + FW_MARK + ' +(?=\\S)', 'g'), 'a space beside a full-width punctuation mark', null],
  // TB-unit wrong 「12 万 6 千个」
  ['PW-51', 'FYI', /\d+(?:\.\d+)?\s*万\s*\d+\s*千/g, 'a number split into two units; Teambition gives this form as wrong', null],
  // ZD-df 错误 「2018/12/12」; SM-cg 「使用短线–（Option和-）连接年月日，不使用 / ，如：en：03/01/2022；   zh：2022-03-01」
  ['PW-53', 'WARN', /(?<![\w/.\-])\d{4}\/\d{1,2}\/\d{1,2}(?![\w/.\-])/g, 'a date with slashes; the company guides write hyphens, and Zan gives this form as wrong', null],
  // ZD-df 错误 「12:00:00 2018-12-12 周三」
  ['PW-54', 'FYI', /(?<![\d:])\d{1,2}:\d{2}(?::\d{2})?\s+\d{4}-\d{1,2}-\d{1,2}/g, 'a time before its date; Zan gives this order as wrong', null],
  // ZD-df 错误 「星期一」
  ['PW-55', 'FYI', new RegExp('星期[' + WEEKDAYS + ']', 'g'), 'a weekday with the longer prefix; Zan writes the short one', null],
];

// [id, severity, test(text) -> [{at, match}], message, roles]
const CUSTOM = [
  // AD-cw 「不要在同一个句式中混用「你」和「我」，交互中指代混乱会让用户相当纠结。」; ZD-pr 错误 「请在“我的设置”修改“你的信息”」; AD-cw 「我们将会审核你的申诉」 is not reported (the plural pronoun)
  ['PW-02', 'FYI', (t) => sentences(t).filter((s) => /你/.test(s.text) && /我(?!们)/.test(s.text)).map((s) => ({ at: s.at, match: s.text.trim() })), 'both personal pronouns in one sentence; three company guides ask not to mix them', null],
  // ZD-se 不推荐 「上传失败」 against 推荐 「上传失败，请先清理图片空间。」
  ['PW-26', 'FYI', (t) => { const m = /^(\s*)([\u4E00-\u9FFF]{1,6}失败)[\u3002\uFF01]?\s*$/.exec(t); return m ? [{ at: m[1].length, match: m[2] }] : []; }, 'an error that says only that something failed; Zan asks for the reason or the next step', null],
  // AD-cw 「以下情况中不使用句号：输入框下的提示；表格中的句子；句末为文字链（链接前使用句号）；按钮和标题。」; ZD-pu 「标题、副标题、标签、轻提示（toast）。」
  ['PW-13', 'FYI', (t) => { const m = /\u3002\s*$/.exec(t); return m && HAN.test(t) ? [{ at: m.index, match: t.trim() }] : []; }, 'a button or heading that ends in a full stop; the company guides drop it there', ['button', 'heading']],
  // ZD-df 错误 「2018-2-2」 and 「2018年02月02日」
  ['PW-53', 'FYI', (t) => {
    const out = [];
    for (const m of t.matchAll(/(?<![\w/.\-])\d{4}-(\d{1,2})-(\d{1,2})(?![\w/.\-])/g)) if (m[1].length === 1 || m[2].length === 1) out.push({ at: m.index, match: m[0] });
    for (const m of t.matchAll(/(?<!\d)\d{4}年(\d{1,2})月(\d{1,2})日/g)) if (m[1][0] === '0' || m[2][0] === '0') out.push({ at: m.index, match: m[0] });
    return out;
  }, 'a date with the wrong zero padding; Zan pads hyphenated dates and leaves dates written with the year, month and day characters unpadded', null],
  // TB-mix 不推荐 「简单7课，帮助你快速学会 Teambition的基本操作。」; TB-pu 不推荐 「待处理任务35条」; a digit beside 年, 月 or 日 is left alone (date spacing is a house choice)
  ['PW-59', 'FYI', (t) => {
    const out = [];
    for (const m of t.matchAll(new RegExp('(?=(' + HAN_CHAR + '[A-Za-z0-9]|[A-Za-z0-9]' + HAN_CHAR + '))', 'g'))) {
      const pair = m[1];
      if (/^\d[年月日]$|^[年月]\d$/.test(pair)) continue;
      out.push({ at: m.index, match: pair });
    }
    return out;
  }, 'Han text directly beside a Latin letter or digit in running text; the guides put a space between (Zan only in paragraph text)', ['prose']],
];

function sentences(t) {
  const out = [];
  let from = 0;
  for (const m of t.matchAll(/[\u3002\uFF01\uFF1F!?]+/g)) { out.push({ at: from, text: t.slice(from, m.index) }); from = m.index + m[0].length; }
  if (from < t.length) out.push({ at: from, text: t.slice(from) });
  return out.filter((s) => s.text.trim());
}

// ---- findings -----------------------------------------------------------------------------------
class Findings {
  constructor() { this.map = new Map(); }
  add(file, line, severity, rule, match, message, source = SOURCE[rule]) {
    const k = file + '\0' + line + '\0' + rule + '\0' + match;
    if (!this.map.has(k)) this.map.set(k, { file, line, severity, rule, match, message, source });
  }
  list() {
    const num = (r) => Number(r.slice(3));
    return [...this.map.values()].sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line || num(a.rule) - num(b.rule) || a.match.localeCompare(b.match));
  }
}

// ---- files --------------------------------------------------------------------------------------
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
      if (!(PROSE_EXT.has(ext) || MARKUP_EXT.has(ext) || CODE_EXT.has(ext)) || /\.min\.js$/.test(p) || st.size > 2_000_000) return;
      if (depth > 0 && SKIP_FILE.test(p)) return;
      out.push(path.resolve(p));
    }
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
    while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (starts[mid] <= off) lo = mid; else hi = mid - 1; }
    return lo + 1;
  };
}

// ---- strings ------------------------------------------------------------------------------------
// A unit is one string: { text, line(off) -> line number, role }.
function proseUnits(raw) {
  const units = [];
  const text = raw.replace(/<!--[\s\S]*?-->/g, (w) => w.replace(/[^\n]/g, ' '));
  const lines = text.split('\n');
  let i = 0;
  if (/^---\s*$/.test(lines[0] || '')) { const end = lines.findIndex((l, k) => k > 0 && /^(---|\.\.\.)\s*$/.test(l)); if (end > 0) i = end + 1; }
  let fence = null;
  for (; i < lines.length; i++) {
    let l = lines[i];
    const f = /^\s*(\x60\x60\x60|~~~)/.exec(l);
    if (fence) { if (f && f[1] === fence) fence = null; continue; }
    if (f) { fence = f[1]; continue; }
    l = l.replace(/\x60[^\x60]*\x60/g, (w) => ' '.repeat(w.length));
    const line = i + 1;
    const h = /^(\s{0,3}#{1,6}\s+)(.*?)\s*#*\s*$/.exec(l);
    if (h) { units.push({ text: h[2], line: () => line, role: 'heading' }); continue; }
    if (/^\s*\|.*\|\s*$/.test(l)) { for (const c of l.trim().slice(1, -1).split('|')) units.push({ text: c, line: () => line, role: 'cell' }); continue; }
    const body = l.replace(/^\s*(?:>\s*)*(?:[-*+]\s+|\d+[.)]\s+)?/, '');
    if (body.trim()) units.push({ text: body, line: () => line, role: 'prose' });
  }
  return units;
}

function maskCode(text, ext) {
  const blank = (s) => s.replace(/[^\n]/g, ' ');
  let t = text.replace(/<!--[\s\S]*?-->/g, blank);
  if (['.html', '.htm', '.vue', '.svelte', '.astro'].includes(ext)) t = t.replace(/(<(script|style)\b[^>]*>)([\s\S]*?)(<\/\2\s*>)/gi, (w, open, _n, body, close) => open + (ext === '.html' || ext === '.htm' || _n.toLowerCase() === 'style' ? blank(body) : body) + close);
  if (ext !== '.html' && ext !== '.htm') t = t.replace(/\/\*[\s\S]*?\*\//g, blank).replace(/(^|[\s;{}()])(\/\/[^\n]*)/g, (w, p, c) => p + blank(c));
  return t;
}

// String literals, one line each; template literal holes become spaces.
function* literals(text, from = 0, to = text.length) {
  const re = /(["'])((?:\\.|(?!\1)[^\\\n])*)\1|\x60((?:\\.|[^\\\x60])*)\x60/g;
  re.lastIndex = from;
  let m;
  while ((m = re.exec(text)) && m.index < to) yield { at: m.index + 1, s: (m[2] ?? m[3]).replace(/\$\{[^}]*\}/g, (w) => ' '.repeat(w.length)) };
}

const VOID_TAG = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const BUTTONISH = (el) => el.tag === 'button' || /Button$/.test(el.raw) || /(^|\s)role\s*=\s*["']button["']/.test(el.attrs) || (el.tag === 'input' && /(^|\s)type\s*=\s*["']?(submit|button|reset)\b/i.test(el.attrs));
const HEADINGISH = (el) => /^h[1-6]$/.test(el.tag) || el.tag === 'title';

function roleOf(el, attr) {
  if (attr) return el && BUTTONISH(el) && /^(aria-label|value|title|label)$/.test(attr) ? 'button' : null;
  for (let a = el; a; a = a.parent) {
    if (BUTTONISH(a)) return 'button';
    if (HEADINGISH(a)) return 'heading';
    if (a.tag === 'p') return 'prose';
  }
  return null;
}

// A tolerant tag scanner: elements with their parent, text segments ({...} expressions marked) in order.
function scanMarkup(text, jsxLike) {
  const els = [];
  const segs = [];
  const stack = [];
  const pushSeg = (a, b, expr) => { const s = text.slice(a, b); if (s.trim()) segs.push({ pos: a, s, expr }); };
  const addText = (a, b) => {
    if (!jsxLike) { pushSeg(a, b, false); return; }
    let depth = 0;
    let from = a;
    let q = null;
    for (let k = a; k < b; k++) {
      const ch = text[k];
      if (depth > 0 && q) { if (ch === q) q = null; continue; }
      if (depth > 0 && (ch === '"' || ch === "'" || ch === '\x60')) { q = ch; continue; }
      if (ch === '{') { if (depth === 0) { pushSeg(from, k, false); from = k; } depth++; }
      else if (ch === '}') { if (depth <= 1) { pushSeg(from, k + 1, true); from = k + 1; } depth = Math.max(0, depth - 1); }
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
    // useRef<HTMLDivElement>(null) or Array<Item> is a TypeScript generic, not a tag
    if (lt > 0 && /[\w$.]/.test(text[lt - 1]) && !m[1]) { i = lt + 1; continue; }
    let j = lt + m[0].length;
    let q = null;
    let depth = 0;
    for (; j < text.length; j++) {
      const ch = text[j];
      if (q) { if (ch === q) q = null; continue; }
      if (ch === '"' || ch === "'" || (ch === '\x60' && depth > 0)) { q = ch; continue; }
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
    const el = { raw: name, tag: name.toLowerCase(), attrs, attrsAt: lt + m[0].length, start: lt, tagEnd: j + 1, end: j + 1, parent: stack[stack.length - 1] || null };
    els.push(el);
    if (!/\/\s*$/.test(attrs) && !VOID_TAG.has(el.tag)) { el.end = null; stack.push(el); }
  }
  addText(textFrom, text.length);
  for (const e of stack) e.end = text.length;
  return { els, segs };
}

function markupUnits(ext, raw) {
  const text = maskCode(raw, ext);
  const lineAt = makeLineAt(raw);
  const units = [];
  const covered = [];
  const push = (at, s, el, attr) => units.push({ text: s, line: (off) => lineAt(at + off), role: el ? roleOf(el, attr) : null });
  if (MARKUP_EXT.has(ext)) {
    const rec = scanMarkup(text, !['.html', '.htm'].includes(ext));
    const innermost = (pos) => { let best = null; for (const el of rec.els) { if (el.start > pos) break; if (pos < el.end && (!best || el.start >= best.start)) best = el; } return best; };
    for (const seg of rec.segs) {
      covered.push([seg.pos, seg.pos + seg.s.length]);
      const el = innermost(seg.pos);
      if (!seg.expr) push(seg.pos, seg.s, el, null);
      else for (const lit of literals(seg.s)) push(seg.pos + lit.at, lit.s, el, null);
    }
    for (const el of rec.els) {
      covered.push([el.start, el.tagEnd]);
      const re = /([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|\{\s*(["'])((?:\\.|(?!\4)[^\\\n])*)\4\s*\})/g;
      let m;
      while ((m = re.exec(el.attrs))) {
        const v = m[2] ?? m[3] ?? m[5];
        push(el.attrsAt + m.index + m[0].indexOf(v, m[1].length), v, el, m[1]);
      }
    }
  }
  if (CODE_EXT.has(ext)) {
    // literals outside markup: message objects, props built in code
    for (const lit of literals(text)) {
      if (covered.some(([a, b]) => lit.at > a && lit.at < b)) continue;
      push(lit.at, lit.s, null, null);
    }
  }
  return units;
}

// ---- run ----------------------------------------------------------------------------------------
function run(inputs, { base = process.cwd() } = {}) {
  const files = collect(inputs).map((abs) => ({ abs, ext: path.extname(abs).toLowerCase(), text: fs.readFileSync(abs, 'utf8') }));
  // a file holds Chinese when one of its strings does (comments are masked before strings are read)
  for (const f of files) f.units = PROSE_EXT.has(f.ext) ? proseUnits(f.text) : markupUnits(f.ext, f.text);
  for (const f of files) f.zh = f.units.some((u) => HAN.test(u.text));
  const zh = files.some((f) => f.zh);
  const F = new Findings();
  const notes = [];
  if (zh) {
    for (const f of files) {
      if (!f.zh) continue;
      const rel = path.relative(base, f.abs);
      const file = (rel.startsWith('..') ? f.abs : rel).split(path.sep).join('/');
      for (const u of f.units) {
        for (const [id, sev, re, msg, roles, source, needHan] of PATTERNS) {
          if (roles && !roles.includes(u.role)) continue;
          if (needHan && !HAN.test(u.text)) continue;
          for (const m of u.text.matchAll(re)) F.add(file, u.line(m.index), sev, id, m[0], msg, source || SOURCE[id]);
        }
        for (const [id, sev, test, msg, roles] of CUSTOM) {
          if (roles && !roles.includes(u.role)) continue;
          for (const hit of test(u.text)) F.add(file, u.line(hit.at), sev, id, hit.match, msg);
        }
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

// ---- output -------------------------------------------------------------------------------------
const summaryLine = (res, exit) => res.summary.WARN + ' WARN · ' + res.summary.FYI + ' FYI · exit ' + exit;

function printHuman(res, exit) {
  const out = ['pinyin copy check · ' + res.files + ' file(s) · Han ' + (res.zh ? 'found' : 'not found')];
  const w = Math.max(0, ...res.findings.map((f) => (f.file + ':' + f.line).length));
  for (const f of res.findings) {
    out.push((f.file + ':' + f.line).padEnd(w) + '  ' + f.severity.padEnd(4) + '  ' + f.rule + '  [' + f.match + '] ' + f.message + '.');
    out.push(' '.repeat(w) + '              source: ' + f.source);
  }
  for (const n of res.notes) out.push('note: ' + n);
  out.push(summaryLine(res, exit));
  console.log(out.join('\n'));
}

// ---- self-test: fixtures/pinyin-copy/<rule>/hit must give exactly these findings, <rule>/miss none ------
// pw-01 and pw-47 also trip PW-32: their quoted strings end in a full-width exclamation mark.
const EXPECTED = {
  'pw-01/hit': ['strings.md:2 FYI PW-01', 'strings.md:2 FYI PW-32'],
  'pw-02/hit': ['strings.md:2 FYI PW-02'],
  'pw-04/hit': ['strings.md:2 FYI PW-04', 'strings.md:2 FYI PW-04', 'strings.md:3 FYI PW-04', 'strings.md:3 FYI PW-04', 'strings.md:3 FYI PW-04', 'strings.md:3 FYI PW-04', 'strings.md:3 FYI PW-04'],
  'pw-06/hit': ['strings.md:2 FYI PW-06', 'strings.md:2 FYI PW-06', 'strings.md:2 FYI PW-06', 'strings.md:3 FYI PW-06', 'strings.md:3 FYI PW-06', 'strings.md:4 FYI PW-06', 'strings.md:5 FYI PW-06'],
  'pw-07/hit': ['strings.md:2 FYI PW-07', 'strings.md:3 FYI PW-07'],
  'pw-08/hit': ['strings.md:2 FYI PW-08'],
  'pw-10/hit': ['strings.md:2 FYI PW-10', 'strings.md:3 FYI PW-10', 'strings.md:4 FYI PW-10', 'strings.md:5 FYI PW-10', 'strings.md:6 FYI PW-10', 'strings.md:7 FYI PW-10'],
  'pw-11/hit': ['strings.md:2 FYI PW-11', 'strings.md:3 FYI PW-11', 'strings.md:4 FYI PW-11', 'strings.md:5 FYI PW-11', 'strings.md:6 FYI PW-11', 'strings.md:7 FYI PW-11', 'strings.md:8 FYI PW-11', 'strings.md:9 FYI PW-11', 'strings.md:10 FYI PW-11', 'strings.md:11 FYI PW-11'],
  'pw-13/hit': ['Actions.tsx:3 FYI PW-13', 'page.html:5 FYI PW-13', 'page.html:6 FYI PW-13'],
  'pw-16/hit': ['messages.ts:3 WARN PW-16', 'strings.md:2 WARN PW-16', 'strings.md:3 WARN PW-16', 'strings.md:4 WARN PW-16'],
  'pw-18/hit': ['strings.md:2 WARN PW-18', 'strings.md:3 WARN PW-18'],
  'pw-21/hit': ['strings.md:2 FYI PW-21'],
  'pw-26/hit': ['strings.md:2 FYI PW-26'],
  'pw-28/hit': ['strings.md:2 WARN PW-28'],
  'pw-32/hit': ['strings.md:2 FYI PW-32'],
  'pw-38/hit': ['strings.md:2 FYI PW-38'],
  'pw-45/hit': ['strings.md:2 WARN PW-45'],
  'pw-47/hit': ['strings.md:2 FYI PW-32', 'strings.md:2 FYI PW-47', 'strings.md:3 FYI PW-32', 'strings.md:3 FYI PW-47'],
  'pw-51/hit': ['strings.md:2 FYI PW-51'],
  'pw-53/hit': ['strings.md:2 WARN PW-53', 'strings.md:3 FYI PW-53', 'strings.md:4 FYI PW-53'],
  'pw-54/hit': ['strings.md:2 FYI PW-54'],
  'pw-55/hit': ['strings.md:2 FYI PW-55'],
  'pw-59/hit': ['page.html:5 FYI PW-59', 'page.html:5 FYI PW-59', 'strings.md:2 FYI PW-59', 'strings.md:2 FYI PW-59', 'strings.md:2 FYI PW-59', 'strings.md:3 FYI PW-59', 'strings.md:3 FYI PW-59'],
};
for (const k of Object.keys(EXPECTED)) if (k.endsWith('/hit')) EXPECTED[k.replace(/hit$/, 'miss')] = [];
EXPECTED['nonzh'] = [];

function selfTest() {
  const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'pinyin-copy');
  const key = (f) => f.file + ':' + f.line + ' ' + f.severity + ' ' + f.rule;
  let ok = true;
  let checked = 0;
  for (const [name, expected] of Object.entries(EXPECTED)) {
    const at = path.join(dir, name);
    if (!fs.existsSync(at)) { ok = false; console.log('  ' + name + ': fixture missing'); continue; }
    const res = run([at], { base: at });
    if (name !== 'nonzh' && !res.zh) { ok = false; console.log('  ' + name + ': has no Han text, so it tests nothing'); }
    const got = res.findings.map(key).sort();
    const want = [...expected].sort();
    if (JSON.stringify(got) !== JSON.stringify(want)) { ok = false; console.log('  ' + name + ': want ' + JSON.stringify(want) + ' got ' + JSON.stringify(got)); }
    checked++;
  }
  const deterministic = JSON.stringify(run([dir])) === JSON.stringify(run([dir]));
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
    console.log('usage: node pinyin-copy-check.mjs [--json] [--strict] <file-or-dir>...\n       node pinyin-copy-check.mjs --self-test\nfindings are WARN or FYI; exit 1 only with --strict when any WARN exists');
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
