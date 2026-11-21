// Mainland Chinese writing checker (scripts/lang/pinyin-copy-check.mjs): every rule's hit and near-miss fixture,
// the --json shape, exit codes, and provenance: every Chinese string in the fixtures, the PW rule file, the
// coverage table and the checker itself must come from a quote in docs/drafts/pinyin/research/rules.md,
// verdicts.md or raw-check-notes-2026-11-21.md. Width and spacing rules must rest on "web"-tier quotes only.
import { execFileSync, spawnSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = resolve(import.meta.dirname, '../../..');
const SCRIPT = resolve(ROOT, 'scripts/lang/pinyin-copy-check.mjs');
const FIXTURES = resolve(ROOT, 'scripts/lang/fixtures/pinyin-copy');
const PINYIN = resolve(ROOT, 'docs/drafts/pinyin');
const read = (p) => readFileSync(resolve(PINYIN, p), 'utf8');
const run = (args) => spawnSync(process.execPath, [SCRIPT, ...args], { cwd: ROOT, encoding: 'utf8' });
const scan = (dir, flags = []) => {
  const res = run(['--json', ...flags, resolve(FIXTURES, dir)]);
  expect(res.stderr).toBe('');
  return { status: res.status, report: JSON.parse(res.stdout) };
};
const rulesIn = (report) => [...new Set(report.findings.map((f) => f.rule))].sort();

// rule -> the severities its hit fixture must produce
const RULES = {
  'PW-01': { FYI: 1 },
  'PW-02': { FYI: 1 },
  'PW-04': { FYI: 7 },
  'PW-06': { FYI: 7 },
  'PW-07': { FYI: 2 },
  'PW-08': { FYI: 1 },
  'PW-10': { FYI: 6 },
  'PW-11': { FYI: 10 },
  'PW-13': { FYI: 3 },
  'PW-16': { WARN: 4 },
  'PW-18': { WARN: 2 },
  'PW-21': { FYI: 1 },
  'PW-26': { FYI: 1 },
  'PW-28': { WARN: 1 },
  'PW-32': { FYI: 1 },
  'PW-38': { FYI: 1 },
  'PW-45': { WARN: 1 },
  'PW-47': { FYI: 2 },
  'PW-51': { FYI: 1 },
  'PW-53': { WARN: 1, FYI: 2 },
  'PW-54': { FYI: 1 },
  'PW-55': { FYI: 1 },
  'PW-59': { FYI: 7 },
};
const WARN_RULES = ['PW-16', 'PW-18', 'PW-28', 'PW-45', 'PW-53'];
// a hit fixture whose quoted string also trips another rule: both end in a full-width exclamation mark
const ALSO = { 'PW-01': ['PW-32'], 'PW-47': ['PW-32'] };

// ---- the quotes ----------------------------------------------------------------------------------
// Verdict quotes that scripts/lang/check-quotes-raw.mjs, run on verdicts.md on 2026-11-21 (report not committed),
// did not find as "web". "none" and "pieces" (elided with …) are not quotes of a page and are dropped from the
// corpus; "cells" and "extract" stay, but cannot back a width or spacing rule.
const VERDICT_NOT_WEB = [
  ["…好开心！", "none"],
  ["直接使用「你」、「我」来和用户对话…避免使用「您」", "pieces"],
  ["（备注：如果是非常正式的场合…可使用「您」。例如银行/尊贵 VIP /信息安全类场景等）", "pieces"],
  ["注：不要在同一个句式中混用「你」和「我」…", "none"],
  ["注：当用户向后台反馈问题、提出建议或申诉时，使用「我们」是合理的语境…", "none"],
  ["网络语言通用性和辨识度不够强…应避免或谨慎使用。", "pieces"],
  ["抱歉 \\| 对不起 \\| 如果是我们系统造成的结果，可以使用「抱歉」，如果是用户自己造成的结果，不能使用。", "none"],
  ["尽量避免使用请求和道歉的语气…", "none"],
  ["在气泡提示中，如果提示文本为非单一句式…结尾需添加标点符号。", "pieces"],
  ["登录 \\| 登陆 \\| …", "none"],
  ["其他 \\| 其它", "none"],
  ["…\\| Initiate \\| 启用 \\| 开启、开始使用", "none"],
  ["…\\| Deactivate \\| 停用 \\| 禁用、关闭、关掉", "none"],
  ["确定 \\| 使用时不需跟动作。", "cells"],
  ["确认 \\| 使用时需跟动作，如：确认删除。", "cells"],
  ["版本 4.2", "extract"],
  ["请稍候 \\| 表示“请稍微等候”，后不接动作…", "none"],
  ["请稍后 \\| 表示“请稍微延后”，后接动作，如：请稍后重试。", "none"],
  ["相对于「失败」，「无法完成」是更加客观的结果…", "none"],
  ["你已修改了任务内容，确定放弃并返回吗？ \\| 确定放弃未保存的修改内容并返回吗？", "none"],
  ["…不推荐使用。", "none"],
  ["不要使用分号 ，尝试将一句话拆分成多个较短的句子。", "none"],
  ["…请将英文（半角）符号替换成中文（大部分为全角）符号。", "none"],
  ["正在上载…", "extract"],
  ["…但在拉丁语系文字和中文标点之间，则无需保留空格。", "none"],
  ["物理量值必须要用阿拉伯数字…", "none"],
  ["千分位 \\| 默认使用千分位帮助用户阅读。 \\| 123,220", "none"],
  ["以人民币为例，推荐使用 `CNY`…", "none"],
  ["描述“周”的概念时，统一使用“周*”的描述方式…", "none"],
  ["超过 24 h \\| n 天前 \\| 1 天前", "none"],
  ["1 ~ 10MB", "extract"],
  ["1 TB", "extract"],
  ["外加 1 TB 的 OneDrive 云存储空间", "none"],
  ["手机号码 \\| 保留手机号码前 3 位与后 4 位。 \\| 186 **** 1402", "none"],
  ["一般情况，隐藏手机号的第 4 位至第 7 位…", "none"],
  ["提供适老化服务的网站…", "none"],
  ["提供适老化服务的网站，避免修改公认的通用名称或功能标识…", "none"],
  ["…最大字体不小于30 dp/pt，适老版界面及单独的适老版APP中的主要文字信息不小于18 dp/pt…", "none"],
];
const HAN = /[\u3400-\u4DBF\u4E00-\u9FFF]/;
const RUN = /[\u3400-\u4DBF\u4E00-\u9FFF\u3000-\u303F\uFF00-\uFFEF\u2018\u2019\u201C\u201D\u2026\u00B7\u2014]+/g;
function spans(text) {
  const out = [];
  for (const line of text.split('\n')) {
    const open = [];
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '\u300C') open.push(i + 1);
      else if (line[i] === '\u300D' && open.length) out.push(line.slice(open.pop(), i));
    }
    for (const m of line.matchAll(/\x60([^\x60]+)\x60/g)) out.push(m[1]);
  }
  return out;
}
function stripSpans(line) {
  let depth = 0;
  let out = '';
  for (const ch of line) {
    if (ch === '\u300C') { depth++; continue; }
    if (ch === '\u300D' && depth) { depth--; continue; }
    if (!depth) out += ch;
  }
  return out;
}
// raw-check-2026-11-21.md: the table of rules.md quotes that are not "web", as quote -> tier
function rawNotWeb() {
  const raw = read('research/raw-check-2026-11-21.md');
  const sec = raw.slice(raw.indexOf('## Quotes that are not'), raw.indexOf('## By candidate'));
  const map = new Map();
  for (const l of sec.split('\n')) {
    const c = l.split(/(?<!\\)\|/).map((x) => x.trim());
    if (c.length >= 5 && /^CN-/.test(c[1])) map.set(c[4].replace(/^\u300C/, '').replace(/\u300D$/, '').replace(/\\\|/g, '|'), c[2]);
  }
  return map;
}
const RAW_NOT_WEB = rawNotWeb();
function corpus() {
  // rules.md: quote lines only; headings, titles, Test, Strength and Kind lines hold the researcher's own words
  const kept = read('research/rules.md').split('\n').filter((l) => !/^\s*#/.test(l) && !/^\s*- (Test|Strength|Kind)\b/i.test(l));
  const q = spans(kept.join('\n')).filter((s) => RAW_NOT_WEB.get(s) !== 'none');
  // Microsoft's lines: its Chinese sits in English quotes and table lists, read from the PDF extract
  for (const l of kept) if (/^\s*- MS\b/.test(l)) {
    const rest = stripSpans(l);
    for (const m of rest.matchAll(/"([^"]+)"/g)) q.push(m[1]);
    for (const m of rest.matchAll(RUN)) q.push(m[0]);
  }
  const dropped = new Set(VERDICT_NOT_WEB.filter(([, t]) => t === 'none' || t === 'pieces').map(([s]) => s));
  const v = spans(read('research/verdicts.md')).filter((s) => !dropped.has(s));
  const notes = spans(read('research/raw-check-notes-2026-11-21.md'));
  return [...q, ...v, ...notes].filter((s) => HAN.test(s) || /[\u3000-\u303F\uFF00-\uFFEF]/.test(s));
}
const QUOTES = corpus();
const JOINED = QUOTES.join('\n');
const inOneQuote = (s) => QUOTES.some((q) => q.includes(s));
// every run of Chinese text, split at corner brackets, must sit inside the quotes
const strayPieces = (text) => (text.match(RUN) || []).flatMap((r) => r.split(/[\u300C\u300D\u300E\u300F]/)).filter((p) => HAN.test(p) && !JOINED.includes(p));
// every outermost corner-bracketed span written must be inside one quote, spaces and Latin included
function outermost(text) {
  const out = [];
  for (const line of text.split('\n')) {
    let depth = 0;
    let start = 0;
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '\u300C') { if (depth++ === 0) start = i + 1; }
      else if (line[i] === '\u300D' && depth > 0 && --depth === 0) out.push(line.slice(start, i));
    }
  }
  return out;
}
const strayQuotes = (text) => outermost(text).filter((s) => HAN.test(s) && !inOneQuote(s));

describe('pinyin-copy-check', () => {
  it('passes its self-test', () => {
    const out = execFileSync(process.execPath, [SCRIPT, '--self-test'], { encoding: 'utf8' });
    expect(out).toContain('self-test: PASS');
  });

  it('has a hit and a near-miss fixture set for every rule, and the rule list matches the checker', async () => {
    const dirs = readdirSync(FIXTURES).filter((d) => d.startsWith('pw-')).sort();
    expect(dirs.map((d) => d.toUpperCase())).toEqual(Object.keys(RULES));
    for (const d of dirs) expect(readdirSync(resolve(FIXTURES, d)).sort()).toEqual(['hit', 'miss']);
    const { SOURCE } = await import(SCRIPT);
    expect(Object.keys(SOURCE).sort()).toEqual(Object.keys(RULES));
  });

  describe.each(Object.entries(RULES))('%s', (rule, counts) => {
    const dir = rule.toLowerCase();

    it('flags its hit fixture', () => {
      const { report } = scan(dir + '/hit');
      expect(report.zh).toBe(true);
      const bySeverity = {};
      for (const f of report.findings.filter((x) => x.rule === rule)) bySeverity[f.severity] = (bySeverity[f.severity] || 0) + 1;
      expect(bySeverity).toEqual(counts);
      expect(rulesIn(report).filter((r) => r !== rule)).toEqual(ALSO[rule] || []);
    });

    it('leaves its near-miss fixture alone, though it contains Chinese', () => {
      const { report } = scan(dir + '/miss');
      expect(report.zh).toBe(true);
      expect(report.findings).toEqual([]);
    });
  });

  it('reads roles from the element: a button and a heading, running text in a paragraph', () => {
    const btn = scan('pw-13/hit').report.findings.map((f) => f.file.split('/').pop() + ':' + f.line);
    expect(btn).toEqual(['Actions.tsx:3', 'page.html:5', 'page.html:6']);
    expect(scan('pw-13/miss').report.findings).toEqual([]); // the same sentences in a paragraph
    const prose = scan('pw-59/hit').report.findings.filter((f) => f.file.endsWith('page.html'));
    expect(prose).toHaveLength(2); // inside <p>
    expect(scan('pw-59/miss').report.findings).toEqual([]); // the same string on a <button>
  });

  it('reports nothing for files with no Chinese text', () => {
    const { report } = scan('nonzh');
    expect(report.zh).toBe(false);
    expect(report.findings).toEqual([]);
    expect(report.notes.join(' ')).toMatch(/No Han characters/);
  });

  it('--json has the documented shape, and every finding carries its match and source', () => {
    const { report } = scan('pw-53/hit');
    expect(Object.keys(report).sort()).toEqual(['exit', 'files', 'findings', 'notes', 'summary', 'zh']);
    expect(report.summary).toEqual({ WARN: 1, FYI: 2 });
    for (const f of report.findings) {
      expect(Object.keys(f).sort()).toEqual(['file', 'line', 'match', 'message', 'rule', 'severity', 'source']);
      expect(f.rule).toMatch(/^PW-\d{2}$/);
      expect(Number.isInteger(f.line) && f.line > 0).toBe(true);
      expect(f.match.length).toBeGreaterThan(0);
      expect(f.source).toMatch(/(company guide|company glossar|translation guide)/);
    }
  });

  it('never emits BLOCK, and WARN only for the five rules that meet the bar', () => {
    for (const rule of Object.keys(RULES)) {
      const { report } = scan(rule.toLowerCase() + '/hit');
      expect(report.findings.some((f) => f.severity === 'BLOCK')).toBe(false);
      for (const f of report.findings.filter((x) => x.severity === 'WARN')) expect(WARN_RULES).toContain(f.rule);
    }
  });

  it('exits 0 after a scan, 1 with --strict when a WARN exists, 2 on a usage error', () => {
    expect(scan('pw-16/hit').status).toBe(0);
    expect(scan('pw-16/hit', ['--strict']).status).toBe(1);
    expect(scan('pw-16/hit', ['--strict']).report.exit).toBe(1);
    expect(scan('pw-01/hit', ['--strict']).status).toBe(0);
    expect(run([]).status).toBe(2);
    expect(run(['--bogus', FIXTURES]).status).toBe(2);
  });

  describe('provenance: no Chinese that is not quoted', () => {
    it('finds the quotes, and the verdict exclusions are all in verdicts.md', () => {
      expect(QUOTES.length).toBeGreaterThan(500);
      const v = spans(read('research/verdicts.md'));
      for (const [s] of VERDICT_NOT_WEB) expect(v, s).toContain(s);
    });

    it('every Chinese string in a fixture is inside one quote, and every Markdown fixture line names its source', () => {
      const files = [];
      const walk = (d) => { for (const e of readdirSync(d, { withFileTypes: true })) e.isDirectory() ? walk(resolve(d, e.name)) : files.push(resolve(d, e.name)); };
      walk(FIXTURES);
      for (const f of files) {
        const raw = readFileSync(f, 'utf8');
        const text = raw.replace(/<!--[\s\S]*?-->/g, '').replace(/\{\/\*[\s\S]*?\*\/\}/g, '').replace(/\/\/[^\n]*/g, '');
        for (const s of text.match(/[^<>{}"'\n]*[\u3400-\u4DBF\u4E00-\u9FFF\u3000-\u303F\uFF00-\uFFEF][^<>{}"'\n]*/g) || []) {
          expect(inOneQuote(s.trim()), f + ': ' + s.trim()).toBe(true);
        }
        if (f.endsWith('.md')) for (const line of raw.split('\n')) if (HAN.test(line.replace(/<!--[\s\S]*?-->/g, ''))) expect(line, f).toMatch(/<!-- \S.*-->\s*$/);
      }
    });

    it.each(['references/writing-rules.md', 'references/coverage.md'])('%s writes no unquoted Chinese', (p) => {
      for (const section of read(p).split(/^(?=#### )/m)) {
        const id = /^#### (\S+)/.exec(section)?.[1] || p;
        expect(strayPieces(section), id).toEqual([]);
        expect(strayQuotes(section), id).toEqual([]);
      }
    });

    it('the checker builds its patterns only from quoted forms', () => {
      const src = readFileSync(SCRIPT, 'utf8');
      expect(strayPieces(src)).toEqual([]);
      expect(strayQuotes(src)).toEqual([]);
    });

    it('width and spacing rules rest only on "web" quotes', () => {
      // a quote is "web" when the byte check found it in a current page: not in either not-web table, and at
      // least four characters long (shorter quotes were never tested); a span cited here must sit inside one
      const kept = read('research/rules.md').split('\n').filter((l) => !/^\s*#/.test(l) && !/^\s*- (Test|Strength|Kind)\b/i.test(l));
      const verdictTier = new Map(VERDICT_NOT_WEB);
      const web = [
        ...spans(kept.join('\n')).filter((s) => !RAW_NOT_WEB.has(s)),
        ...spans(read('research/verdicts.md')).filter((s) => !verdictTier.has(s)),
      ].filter((s) => [...s].length >= 4);
      let checked = 0;
      for (const section of read('references/writing-rules.md').split(/^(?=#### )/m)) {
        if (!/^- Bytes: every quote below is "web"/m.test(section)) continue;
        const id = /^#### (PW-\d{2})/.exec(section)[1];
        for (const s of outermost(section).filter((x) => HAN.test(x))) {
          expect(web.some((q) => q.includes(s)), id + ': ' + s).toBe(true);
          checked++;
        }
      }
      expect(checked).toBeGreaterThan(10);
    });
  });

  describe('coverage', () => {
    const cov = read('references/coverage.md');
    const rows = [...cov.matchAll(/^\| (CN-\d{2}) \|/gm)].map((m) => m[1]);
    const pwRules = [...read('references/writing-rules.md').matchAll(/^#### (PW-\d{2}) \((CN-\d{2})/gm)];

    it('lists all 79 candidates once, in order', () => {
      expect(rows).toEqual(Array.from({ length: 79 }, (_, i) => 'CN-' + String(i + 1).padStart(2, '0')));
    });

    it('agrees with the rule file and the checker', () => {
      for (const [, pw, cn] of pwRules) expect(pw.slice(3)).toBe(cn.slice(3));
      const inCov = [...cov.matchAll(/^\| CN-\d{2} \| [^|]+ \| (PW-\d{2})/gm)].map((m) => m[1]);
      expect(inCov).toEqual(pwRules.map((m) => m[1]));
      const checked = [...cov.matchAll(/^\| CN-\d{2} \| [^|]+ \| [^|]+ \| (PW-\d{2}) (WARN|FYI)/gm)].map((m) => m[1]);
      expect(checked).toEqual(Object.keys(RULES));
      const warned = [...cov.matchAll(/^\| CN-\d{2} \| [^|]+ \| [^|]+ \| (PW-\d{2}) WARN/gm)].map((m) => m[1]);
      expect(warned).toEqual(WARN_RULES);
    });
  });
});
