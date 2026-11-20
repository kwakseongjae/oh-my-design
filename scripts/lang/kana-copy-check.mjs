#!/usr/bin/env node
/**
 * kana copy check: deterministic, dependency-free scan of Japanese UI copy for the writing rules in
 * docs/drafts/kana/references/writing-rules.md (KW-nn, each numbered after the research candidate UW-nn it
 * came from). Node >= 18. Development copy for the kana skill; it imports its markup reader from
 * kana-check.mjs beside it, and the two move into the skill together.
 *
 *   node kana-copy-check.mjs [--json|--format=github] [--strict] <file-or-dir>...
 *   node kana-copy-check.mjs --self-test
 *
 * Reads text and Markdown (one string per line; headings are headings), HTML, JSX/TSX, Vue, Svelte and
 * Astro (text nodes, quoted attribute values, string literals), and JS/TS string literals. Test and spec
 * files are skipped. A string counts when it holds kana, kanji or CJK punctuation; the whole scan runs only
 * when some file holds kana or kanji.
 *
 * Exit code: 0 after a scan; 1 with --strict when any WARN exists, or when --self-test fails; 2 on a usage
 * error. There is no BLOCK level: no rule here is required by any source. WARN is used only where a
 * government design system or two of the four company guides read state the rule and the match is the
 * form the source itself gives as wrong; everything else is FYI.
 *
 * Only rules a regex, a code point or a count can decide are here, and each pattern is built from forms the
 * sources quote (the comment beside each pattern names the quote). Roles (button, heading, dialog) come
 * from the element only: <button>, a component whose name ends in Button, role="button", input type=submit,
 * <h1>-<h6>, <title>, Markdown headings, <dialog>, role="dialog", a component whose name has Dialog or
 * Modal. A string whose role cannot be traced gets no role rule; a label passed as an expression
 * (label={t(...)}) is not read, and a dialog split across components is not grouped. Every finding carries
 * the source key and the standing of the source. A hit is a prompt to read the string in its place, not a defect.
 *
 * Chinese text shares the kanji range: only KW-35 skips strings without kana, so on a Chinese string the
 * code-point and word rules can fire.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JA, SKIP_DIR, scanMarkup, makeLineAt, escapeGithubMessage, escapeGithubProperty } from './kana-check.mjs';

const PROSE_EXT = new Set(['.txt', '.md', '.markdown', '.mdx']);
const MARKUP_EXT = new Set(['.html', '.htm', '.jsx', '.tsx', '.js', '.ts', '.mjs', '.cjs', '.vue', '.svelte', '.astro']);
const CODE_EXT = new Set(['.jsx', '.tsx', '.js', '.ts', '.mjs', '.cjs', '.vue', '.svelte', '.astro']);
const SKIP_FILE = /\.(test|spec|stories)\.[cm]?[jt]sx?$|\.d\.ts$/i;
// A string is Japanese copy when it holds kana, kanji, CJK punctuation or full-width forms.
const JA_COPY = /[\u3000-\u30FF\u3400-\u9FFF\uFF00-\uFFEF]/;
const KANJI = /[\u3400-\u4DBF\u4E00-\u9FFF]/g;
const HIRAGANA = /[\u3041-\u309F]/g;
const KANA = /[\u3041-\u30FF]/;
const JA_CHAR = '[\\u3040-\\u30FF\\u3400-\\u9FFF]';

// Source key (writing/rules.md "Source keys") and the standing of what it rests on, per rule.
const SOURCE = {
  'KW-02': 'MZ, WP, SH-app (one company guide, SmartHR, and two translation guides)',
  'KW-06': 'MZ-ed (translation guide only, Mozilla; for ordinary content, not formal notices)',
  'KW-07': 'UB (one company guide, Ubie; "in principle")',
  'KW-09': 'SH-ws, UB (2 of 4 company guides)',
  'KW-11': 'WP 3-4 (translation guide only; for error strings translated from English)',
  'KW-12': 'WP 3-5 (translation guide only; where English has you/your)',
  'KW-13': 'WP 3-1 (translation guide only; a preference)',
  'KW-14': 'MZ, SH-ws (one company guide and one translation guide; JW-14 keeps the long form for readers of plain Japanese)',
  'KW-15': 'UB-btn (one company guide, Ubie; DADS-btn names OK as an ordinary label)',
  'KW-17': 'SH-app, WP 3-2 (one company guide and one translation guide)',
  'KW-18': 'UB-btn (one company guide, Ubie; about 15 characters, as far as possible)',
  'KW-20': 'DADS-md (government design system; modal dialogs)',
  'KW-23': 'WP 3-7, SH-act, MZ-ed (consistency: one company guide and one translation guide; the word pair is Mozilla\'s own choice)',
  'KW-24': 'UB (one company guide, Ubie; written for screen readers)',
  'KW-25': 'SH-oth (one company guide, SmartHR; its own term)',
  'KW-26': 'DADS-in, PB, SmartHR via JW-64 (government design system and 2 of 4 company guides)',
  'KW-32': 'UB (one company guide, Ubie)',
  'KW-33': 'WP 3-6, MZ, MZ-ed (translation guides only)',
  'KW-35': 'UB, MZ (one company guide, Ubie, gives the 3:7 aim; one translation guide, Mozilla, the direction only)',
  'KW-46': 'MZ-ed, MZ-ed21, SH-cnt, UB (code points: translation guide only, Mozilla; wave dash for ranges: 2 of 4 company guides)',
  'KW-54': 'WP 1-9 (translation guide only)',
  'KW-55': 'UB (one company guide, Ubie; the government writing guide in JW-49 writes the kanji form)',
  'KW-56': 'UB (one company guide, Ubie, a health service)',
  'KW-57': 'SH-oth (one company guide, SmartHR)',
};

// ---- rules on one string ------------------------------------------------------------------------
// [id, severity, regex, message, roles (null: any string), source when it differs from SOURCE[id]]
const PATTERNS = [
  // MZ-ed OK/NG: NG 「皆様」「公開いたしました」「よろしくお願いいたします」
  ['KW-06', 'FYI', /皆様|いたしました|よろしくお願いいたします/g, 'politeness Mozilla lists as too formal for ordinary content', null],
  // UB 敬語: no keigo on buttons and headings, in principle. Forms from quoted NG strings:
  // UB Don't 「お手数をおかけしますが、こちらからお問い合わせいただけますよう、お願い申し上げます。 ※過剰」, MZ-ed NG 「公開いたしました」
  ['KW-07', 'FYI', /いただ|いたし|申し上げ/g, 'keigo on a button or heading; Ubie uses none there in principle', ['button', 'heading']],
  // UB Don't 「お手数をおかけしますが、こちらからお問い合わせいただけますよう、お願い申し上げます。 ※過剰」;
  // SH-ws NG 「◯◯をご確認いただけますようお願いいたします。」 and 「◯◯させていただきました。」
  ['KW-09', 'WARN', /いただけますよう|お願い申し上げます|させていただきました/g, 'stacked keigo that SmartHR and Ubie give as the wrong form', null],
  // WP 3-1: 「～されました。」 rather than 「～しました。」
  ['KW-13', 'FYI', /されました/g, 'passive past; WordPress prefers the active form where possible', null],
  // MZ 「〜することができます」 / SH-ws NG 「◯◯することができます。」
  ['KW-14', 'FYI', /することができ/g, 'long form; Mozilla and SmartHR write the short potential form', null],
  // SH-app NG 「権限の追加、申請の取り消し」; WP 3-2 「〜の表示」 is not used for View XX
  ['KW-17', 'FYI', /の(追加|取り消し|表示)(?=$|、|\s)/g, 'a button joins its object with the genitive particle; SmartHR and WordPress use the object particle', ['button']],
  // UB Don't 「続けるには下のボタンを選んでください。」 and 「上に戻る」
  ['KW-24', 'FYI', /下のボタン|上に戻る/g, 'names a control by its position; Ubie names it by its label or order', null],
  // SH-oth 「「必須入力」は使用しません。」
  ['KW-25', 'FYI', /必須入力/g, 'SmartHR writes the other word order for required fields', null],
  // DADS-in bad example 「＊正しい氏名（カタカナ）を入力してください。」
  ['KW-26', 'FYI', /正しい\S*を入力してください/g, 'asks for the correct value without saying what it is (DADS gives this as a bad example)', null, 'DADS-in (government design system; one bad example)'],
  // UB 「煽り表現はNG。「!」「!?」などの感嘆符は使わない。」 Don't 「ありがとうございます！」
  ['KW-32', 'FYI', new RegExp('(?<=' + JA_CHAR + ')\\s?[\\u0021\\uFF01]', 'g'), 'exclamation mark; Ubie uses none (its width is a house choice, see writing-rules.md)', null],
  // WP 3-6 「「下さい」 は「ください」、「全て」は「すべて」、「既に」は「すでに」に統一する」; MZ-ed 「「居る」ではなく「いる」。」
  ['KW-33', 'FYI', /下さい|全て|既に|居る/g, 'kanji where both translation guides write kana (Mozilla keeps kanji for a main verb in context)', null],
  // MZ-ed21 「「―」(U+2015 水平線) と「～」 (U+FF5E 全角チルダ) は用いない。」
  ['KW-46', 'FYI', /[\u2015\uFF5E]/g, 'U+FF5E or U+2015; Mozilla uses U+301C or U+2013 for ranges and neither of these', null],
  // SH-cnt NG 「2022/01/01 - 2022/03/01、2022/01/01−2022/03/01」 (U+002D and U+2212); OK uses the wave dash
  ['KW-46', 'FYI', /\d{4}\/\d{2}\/\d{2}\s*[\u002D\u2212]\s*\d{4}\/\d{2}\/\d{2}/g, 'a date range joined by a hyphen or minus sign; SmartHR and Ubie use the wave dash', null],
  // WP 1-9 誤 「%d 件の投稿、%d 個の文字列」
  ['KW-54', 'FYI', new RegExp('%(\\d+\\$)?d +(?=' + JA_CHAR + ')', 'g'), 'a space after a digit placeholder; WordPress writes none', null],
  // UB Don't 「当てはまるものを一つ選んでください。」
  ['KW-55', 'FYI', /一つ/g, 'kanji numeral; Ubie writes the Arabic numeral (the government writing guide in JW-49 writes it in kanji: a house choice)', null],
  // UB Don't 「医療機関」「疾患」「近隣」
  ['KW-56', 'FYI', /医療機関|疾患|近隣/g, 'an institutional word Ubie replaces with an everyday one', null],
  // SH-oth: 「ダミー」 is not used; 「母国語」「母語」 are avoided in text about multilingual support
  ['KW-57', 'FYI', /ダミー|母国語|母語/g, 'a word SmartHR avoids for its overtones', null],
];

// [id, test(trimmed text) → matched text or null, message, roles]
const WHOLE = [
  // MZ 「タイトル名は体言止めを原則とする。」; SH-app 「画面タイトルや項目名は、名詞で表記します。」 (ですます調 endings)
  ['KW-02', 'FYI', (t) => (/(です|ます)。?$/.test(t) ? t : null), 'a heading ending as a sentence; SmartHR, Mozilla and WordPress write titles as nouns', ['heading']],
  // WP 3-4 「”Sorry, …” で始まるエラーメッセージは「すみません」とは訳さず、その部分を削除する」
  ['KW-11', 'FYI', (t) => (/^すみません/.test(t) ? 'すみません' : null), 'an error string that opens with an apology; WordPress drops it when translating', null],
  // WP 3-5 「「あなた」「あなたの」を入れない」 (where unnatural)
  ['KW-12', 'FYI', (t) => (/あなた/.test(t) ? 'あなた' : null), 'the second-person pronoun; WordPress leaves it out where English has you/your', null],
  // UB-btn Bad 「OK」 against Good 「この内容で更新する」
  ['KW-15', 'FYI', (t) => (t === 'OK' ? t : null), 'a button that says OK; Ubie asks the label to say what happens', ['button']],
  // UB-btn 「できる限りモバイルで改行しない文字数におさめましょう（15文字程度）」
  ['KW-18', 'FYI', (t) => ([...t].length > 15 && JA_COPY.test(t) ? t : null), 'a button label over 15 characters (Ubie\'s number)', ['button']],
  // DADS-in bad example 「＊入力に誤りがあります。」
  ['KW-26', 'WARN', (t) => (t.replace(/^[\u002A\uFF0A]/, '').replace(/。$/, '') === '入力に誤りがあります' ? t : null), 'an error that says only that the input is wrong; DADS, Pepabo and SmartHR ask for what is wrong and how to fix it', null],
];

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
      if (!(PROSE_EXT.has(ext) || MARKUP_EXT.has(ext)) || /\.min\.js$/.test(p) || st.size > 2_000_000) return;
      if (depth > 0 && SKIP_FILE.test(p)) return;
      out.push(path.resolve(p));
    }
  };
  for (const p of inputs) walk(p, 0);
  return [...new Set(out)].sort();
}

// ---- strings ------------------------------------------------------------------------------------
// A unit is one string: { text, line(off) → line number, role, dialog }. off is an offset into text.
const BUTTONISH = (el) => el.tag === 'button' || /Button$/.test(el.raw) || /(^|\s)role\s*=\s*["']button["']/.test(el.attrs) || (el.tag === 'input' && /(^|\s)type\s*=\s*["']?(submit|button|reset)\b/i.test(el.attrs));
const DIALOGISH = (el) => el.tag === 'dialog' || /(^|\s)role\s*=\s*["'](alert)?dialog["']/.test(el.attrs) || /Dialog|Modal/.test(el.raw);
const HEADINGISH = (el) => /^h[1-6]$/.test(el.tag) || el.tag === 'title';

function roleOf(el, attr) {
  // an attribute names its own element: aria-label, value, title or label on a button is the button's text
  if (attr) return BUTTONISH(el) && /^(aria-label|value|title|label)$/.test(attr) ? 'button' : null;
  for (let a = el; a; a = a.parent) {
    if (BUTTONISH(a)) return 'button';
    if (HEADINGISH(a)) return 'heading';
    if (a.tag === 'a') return 'link';
  }
  return null;
}
const dialogOf = (el) => { for (let a = el; a; a = a.parent) if (DIALOGISH(a)) return a; return null; };

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
    const h = /^\s{0,3}#{1,6}\s+(.*?)\s*#*\s*$/.exec(l);
    const line = i + 1;
    if (h) { units.push({ text: h[1], ja: true, line: () => line, role: 'heading', dialog: null }); continue; }
    const body = l.replace(/^\s*(?:>\s*)*(?:[-*+]\s+|\d+[.)]\s+)?/, '');
    const cells = /^\|.*\|\s*$/.test(body.trim()) ? body.trim().slice(1, -1).split('|') : [body];
    for (const c of cells) units.push({ text: c, ja: true, line: () => line, role: null, dialog: null });
  }
  return units.filter((u) => JA_COPY.test(u.text));
}

// String literals in code, one line each; template literal holes become a space.
function* literals(text, from = 0, to = text.length) {
  const re = /(["'])((?:\\.|(?!\1)[^\\\n])*)\1|\x60((?:\\.|[^\\\x60])*)\x60/g;
  re.lastIndex = from;
  let m;
  while ((m = re.exec(text)) && m.index < to) yield { at: m.index + 1, s: (m[2] ?? m[3]).replace(/\$\{[^}]*\}/g, (w) => ' '.repeat(w.length)) };
}

function markupUnits(abs, ext, raw) {
  const rec = scanMarkup(abs, ext, raw);
  const lineAt = makeLineAt(raw);
  const units = [];
  const covered = [];
  const innermost = (pos) => { let best = null; for (const el of rec.els) { if (el.start > pos) break; if (pos < el.end && (!best || el.start >= best.start)) best = el; } return best; };
  const push = (at, s, el, attr) => {
    const role = el ? roleOf(el, attr) : null;
    const ja = JA_COPY.test(s);
    // a Latin button label (OK) in a Japanese file still counts: KW-15 and KW-20 read it
    if (!ja && !(role === 'button' && /^\s*OK\s*$/.test(s))) return;
    units.push({ text: s, ja, line: (off) => lineAt(at + off), role, dialog: el ? dialogOf(el) : null });
  };
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
      const at = el.attrsAt + m.index + m[0].indexOf(v, m[1].length);
      push(at, v, el, m[1]);
    }
  }
  if (CODE_EXT.has(ext)) {
    // literals outside markup: message objects, props built in code
    for (const lit of literals(rec.text)) {
      if (covered.some(([a, b]) => lit.at > a && lit.at < b)) continue;
      push(lit.at, lit.s, null, null);
    }
  }
  return units;
}

// ---- run ----------------------------------------------------------------------------------------
function run(inputs, { base = process.cwd() } = {}) {
  const files = collect(inputs).map((abs) => ({ abs, ext: path.extname(abs).toLowerCase(), text: fs.readFileSync(abs, 'utf8') }));
  const ja = files.some((f) => JA.test(f.text));
  const F = new Findings();
  const notes = [];
  const terms = new Map(); // KW-23: first place each sign-in word appears
  if (ja) {
    for (const f of files) {
      const rel = path.relative(base, f.abs);
      const file = (rel.startsWith('..') ? f.abs : rel).split(path.sep).join('/');
      const units = PROSE_EXT.has(f.ext) ? proseUnits(f.text) : markupUnits(f.abs, f.ext, f.text);
      let kanji = 0;
      let hira = 0;
      const dialogs = new Map();
      for (const u of units) {
        const lead = u.text.length - u.text.trimStart().length;
        const t = u.text.trim();
        for (const [id, sev, re, msg, roles, source] of PATTERNS) {
          if (roles && !roles.includes(u.role)) continue;
          for (const m of u.text.matchAll(re)) F.add(file, u.line(m.index), sev, id, m[0], msg, source);
        }
        for (const [id, sev, test, msg, roles] of WHOLE) {
          if (roles && !roles.includes(u.role)) continue;
          const hit = test(t);
          if (hit != null) F.add(file, u.line(lead + Math.max(0, t.indexOf(hit))), sev, id, hit, msg);
        }
        // MZ-ed 「「サインイン」「サインアウト」ではなく「ログイン」「ログアウト」と表記する。」
        for (const m of u.text.matchAll(/サインイン|サインアウト|ログイン|ログアウト/g)) if (!terms.has(m[0])) terms.set(m[0], { file, line: u.line(m.index) });
        // a string with no kana is not counted: Chinese text shares the kanji range
        if (KANA.test(t)) {
          kanji += (t.match(KANJI) || []).length;
          hira += (t.match(HIRAGANA) || []).length;
        }
        if (u.role === 'button' && u.dialog) {
          if (!dialogs.has(u.dialog)) dialogs.set(u.dialog, []);
          dialogs.get(u.dialog).push({ t, line: u.line(lead) });
        }
      }
      // KW-20, DADS-md: 「閉じるボタンはアクションボタンがないときだけ使用できます。」 with 「OK」「はい」「いいえ」「キャンセル」 as action buttons
      for (const buttons of dialogs.values()) {
        const close = buttons.find((b) => b.t === '閉じる');
        const action = buttons.find((b) => ['OK', 'はい', 'いいえ', 'キャンセル'].includes(b.t));
        if (close && action) F.add(file, close.line, 'FYI', 'KW-20', close.t, 'a dialog with action buttons also has a close button; DADS keeps the close button for dialogs without action buttons');
      }
      // KW-35, UB 「漢字とひらがなのバランスを、3:7くらいになるようにしましょう。」
      const total = kanji + hira;
      if (total >= 100 && kanji / total > 0.3) F.add(file, units[0].line(0), 'FYI', 'KW-35', Math.round((100 * kanji) / total) + '% kanji of ' + total + ' kanji and hiragana', 'more than 30% kanji among kanji and hiragana (Ubie\'s aim is about 3:7)');
    }
    // KW-23: two words for one operation in one scan
    for (const [a, b] of [['サインイン', 'ログイン'], ['サインアウト', 'ログアウト']]) {
      if (!terms.has(a) || !terms.has(b)) continue;
      for (const w of [a, b]) F.add(terms.get(w).file, terms.get(w).line, 'FYI', 'KW-23', w, 'two words for one operation in the same product; keep one');
    }
  } else {
    notes.push('No kana or kanji found in ' + files.length + ' scanned file(s); nothing to check.');
  }
  const findings = F.list();
  const summary = { WARN: 0, FYI: 0 };
  for (const x of findings) summary[x.severity]++;
  return { files: files.length, ja, findings, notes, summary };
}

// ---- output -------------------------------------------------------------------------------------
const summaryLine = (res, exit) => res.summary.WARN + ' WARN · ' + res.summary.FYI + ' FYI · exit ' + exit;

function printGithub(res, exit) {
  const levels = { WARN: 'warning', FYI: 'notice' };
  const out = res.findings.map((f) => '::' + levels[f.severity] + ' file=' + escapeGithubProperty(f.file) + ',line=' + escapeGithubProperty(f.line) + ',title=' + escapeGithubProperty(f.rule) + '::' + escapeGithubMessage(f.match + ': ' + f.message + '. Source: ' + f.source));
  out.push(summaryLine(res, exit));
  console.log(out.join('\n'));
}

function printHuman(res, exit) {
  const out = ['kana copy check · ' + res.files + ' file(s) · Japanese ' + (res.ja ? 'found' : 'not found')];
  const w = Math.max(0, ...res.findings.map((f) => (f.file + ':' + f.line).length));
  for (const f of res.findings) {
    out.push((f.file + ':' + f.line).padEnd(w) + '  ' + f.severity.padEnd(4) + '  ' + f.rule + '  「' + f.match + '」 ' + f.message + '.');
    out.push(' '.repeat(w) + '              source: ' + f.source);
  }
  for (const n of res.notes) out.push('note: ' + n);
  out.push(summaryLine(res, exit));
  console.log(out.join('\n'));
}

// ---- self-test: fixtures/kana-copy/<rule>/hit must give exactly these findings, <rule>/miss none -----
// kw-07 also trips KW-06 (its label is Mozilla's NG string) and kw-13 trips KW-46 (WordPress's tilde is U+FF5E).
const EXPECTED = {
  'kw-02/hit': ['page.html:5 FYI KW-02'],
  'kw-06/hit': ['strings.md:2 FYI KW-06', 'strings.md:3 FYI KW-06', 'strings.md:4 FYI KW-06'],
  'kw-07/hit': ['Actions.tsx:3 FYI KW-06', 'Actions.tsx:3 FYI KW-07'],
  'kw-09/hit': ['strings.md:2 WARN KW-09', 'strings.md:3 WARN KW-09', 'strings.md:4 WARN KW-09', 'strings.md:4 WARN KW-09'],
  'kw-11/hit': ['strings.md:2 FYI KW-11'],
  'kw-12/hit': ['strings.md:2 FYI KW-12', 'strings.md:3 FYI KW-12'],
  'kw-13/hit': ['strings.md:2 FYI KW-13', 'strings.md:2 FYI KW-46'],
  'kw-14/hit': ['strings.md:2 FYI KW-14'],
  'kw-15/hit': ['Confirm.tsx:5 FYI KW-15'],
  'kw-17/hit': ['Actions.tsx:3 FYI KW-17', 'Actions.tsx:3 FYI KW-17'],
  'kw-18/hit': ['Actions.tsx:3 FYI KW-18'],
  'kw-20/hit': ['dialog.html:8 FYI KW-20'],
  'kw-23/hit': ['strings.md:2 FYI KW-23', 'strings.md:3 FYI KW-23'],
  'kw-24/hit': ['strings.md:2 FYI KW-24', 'strings.md:3 FYI KW-24'],
  'kw-25/hit': ['strings.md:2 FYI KW-25'],
  'kw-26/hit': ['strings.md:2 WARN KW-26', 'strings.md:3 FYI KW-26'],
  'kw-32/hit': ['strings.md:2 FYI KW-32', 'strings.md:3 FYI KW-32'],
  'kw-33/hit': ['strings.md:2 FYI KW-33', 'strings.md:3 FYI KW-33', 'strings.md:4 FYI KW-33', 'strings.md:5 FYI KW-33'],
  'kw-35/hit': ['strings.md:2 FYI KW-35'],
  'kw-46/hit': ['strings.md:2 FYI KW-46', 'strings.md:3 FYI KW-46', 'strings.md:3 FYI KW-46', 'strings.md:4 FYI KW-46', 'strings.md:4 FYI KW-46'],
  'kw-54/hit': ['strings.md:2 FYI KW-54'],
  'kw-55/hit': ['strings.md:2 FYI KW-55'],
  'kw-56/hit': ['strings.md:2 FYI KW-56', 'strings.md:3 FYI KW-56', 'strings.md:4 FYI KW-56'],
  'kw-57/hit': ['strings.md:2 FYI KW-57', 'strings.md:3 FYI KW-57', 'strings.md:4 FYI KW-57'],
};
for (const k of Object.keys(EXPECTED)) if (k.endsWith('/hit')) EXPECTED[k.replace(/hit$/, 'miss')] = [];

function selfTest() {
  const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'kana-copy');
  const key = (f) => f.file + ':' + f.line + ' ' + f.severity + ' ' + f.rule;
  let ok = true;
  let checked = 0;
  for (const [name, expected] of Object.entries(EXPECTED)) {
    const at = path.join(dir, name);
    if (!fs.existsSync(at)) { ok = false; console.log('  ' + name + ': fixture missing'); continue; }
    const res = run([at], { base: at });
    if (!res.ja) { ok = false; console.log('  ' + name + ': has no Japanese text, so it tests nothing'); }
    const got = new Set(res.findings.map(key));
    const want = new Set(expected);
    for (const k of want) if (!got.has(k)) { ok = false; console.log('  ' + name + ' missing: ' + k); }
    for (const k of got) if (!want.has(k)) { ok = false; console.log('  ' + name + ' unexpected: ' + k); }
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
  if (flags.has('--format=github') && flags.has('--json')) {
    console.error('--format=github cannot be used with --json');
    return 2;
  }
  if (flags.has('--help') || (!inputs.length && !flags.has('--self-test'))) {
    console.log('usage: node kana-copy-check.mjs [--json|--format=github] [--strict] <file-or-dir>...\n       node kana-copy-check.mjs --self-test\nfindings are WARN or FYI; exit 1 only with --strict when any WARN exists');
    return flags.has('--help') ? 0 : 2;
  }
  if (flags.has('--self-test')) return selfTest();
  const res = run(inputs);
  const exit = flags.has('--strict') && res.summary.WARN > 0 ? 1 : 0;
  if (flags.has('--json')) console.log(JSON.stringify({ ...res, exit }, null, 2));
  else if (flags.has('--format=github')) printGithub(res, exit);
  else printHuman(res, exit);
  return exit;
}

export { run, SOURCE };

const invokedDirectly = (() => {
  try { return fs.realpathSync(process.argv[1] || '') === fs.realpathSync(fileURLToPath(import.meta.url)); } catch { return false; }
})();
if (invokedDirectly) process.exitCode = main(process.argv.slice(2));
