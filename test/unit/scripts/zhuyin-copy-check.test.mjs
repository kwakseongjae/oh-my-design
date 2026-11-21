// Traditional Chinese (Taiwan) writing checker (scripts/lang/zhuyin-copy-check.mjs): every rule's hit and near-miss
// fixture, the --json shape, exit codes, and provenance: every Chinese string in the fixtures, the ZW rule file, the
// coverage table and the checker itself must come from a quote in docs/drafts/zhuyin/research/rules.md, verdicts.md
// or addendum-2026-11-21.md.
import { execFileSync, spawnSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = resolve(import.meta.dirname, '../../..');
const SCRIPT = resolve(ROOT, 'scripts/lang/zhuyin-copy-check.mjs');
const FIXTURES = resolve(ROOT, 'scripts/lang/fixtures/zhuyin-copy');
const ZHUYIN = resolve(ROOT, 'docs/drafts/zhuyin');
const run = (args) => spawnSync(process.execPath, [SCRIPT, ...args], { cwd: ROOT, encoding: 'utf8' });
const scan = (dir, flags = []) => {
  const res = run(['--json', ...flags, resolve(FIXTURES, dir)]);
  expect(res.stderr).toBe('');
  return { status: res.status, report: JSON.parse(res.stdout) };
};
const rulesIn = (report) => [...new Set(report.findings.map((f) => f.rule))].sort();

// rule → the severities its hit fixture must produce
const RULES = {
  'ZW-01': { FYI: 1 },
  'ZW-02': { FYI: 1 },
  'ZW-04': { FYI: 1 },
  'ZW-05': { FYI: 2 },
  'ZW-07': { FYI: 2 },
  'ZW-08': { FYI: 11 }, // two terms on one line are two findings
  'ZW-09': { FYI: 2 },
  'ZW-10': { FYI: 2 },
  'ZW-18': { FYI: 1 },
  'ZW-21': { FYI: 4 },
  'ZW-22': { FYI: 4 },
  'ZW-23': { FYI: 2 },
  'ZW-32': { FYI: 6 }, // HTML (em, i, inline style), Markdown, JSX text and a JSX literal
  'ZW-34': { FYI: 1 },
  'ZW-42': { FYI: 1 },
};

// ---- the quotes ------------------------------------------------------------------------------------------
// The haystack: the quote lines of rules.md (not headings, and not the researcher's Test, Kind, Strength or Region
// lines), all of verdicts.md and all of the addendum. Microsoft quotes are English with bare Chinese inside, and the
// TW-21 rows are bare table cells, so a quote is a corner-bracket span (nested too) or a run of Chinese on one of
// those lines. Everything is compared in NFC: the addendum copies some handbook quotes with CJK compatibility
// ideographs from the PDF text layer (U+F906, U+F967, U+F96F, U+F99A, U+F9D0, U+FA08), which NFC maps to the
// unified ideographs.
const HAN = /[㐀-䶿一-鿿豈-﫿]/;
const RUN = /[　-〿㐀-䶿一-鿿豈-﫿＀-￯]+/g;
const N = (s) => s.normalize('NFC');
function spans(text) {
  const out = [];
  for (const line of text.split('\n')) {
    const open = [];
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '「') open.push(i + 1);
      else if (line[i] === '」' && open.length) out.push(line.slice(open.pop(), i));
    }
  }
  return out;
}
function haystack() {
  const read = (p) => N(readFileSync(resolve(ZHUYIN, 'research', p), 'utf8'));
  const rules = read('rules.md').split('\n').filter((l) => !/^\s*#/.test(l) && !/^\s*- (Test|Kind|Strength|Region)\b/.test(l));
  return [...rules, ...read('verdicts.md').split('\n'), ...read('addendum-2026-11-21.md').split('\n')];
}
const LINES = haystack();
const QUOTES = [...new Set([...spans(LINES.join('\n')), ...LINES.flatMap((l) => l.match(RUN) || [])])].filter((s) => HAN.test(s));
const JOINED = LINES.join('\n');
const inOneQuote = (s) => QUOTES.some((q) => q.includes(N(s)));
// every run of Chinese text, split at corner brackets, must sit in the haystack
const strayPieces = (text) => (N(text).match(RUN) || []).flatMap((r) => r.split(/[「」『』]/)).filter((p) => HAN.test(p) && !JOINED.includes(p));
// every outermost corner-bracketed string with Han must be inside one quote
function strayQuotes(text) {
  const out = [];
  for (const line of N(text).split('\n')) {
    let depth = 0;
    let start = 0;
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '「') { if (depth++ === 0) start = i + 1; }
      else if (line[i] === '」' && depth > 0 && --depth === 0) {
        const s = line.slice(start, i);
        if (HAN.test(s) && !inOneQuote(s)) out.push(s);
      }
    }
  }
  return out;
}
const fixtureFiles = () => {
  const files = [];
  const walk = (d) => { for (const e of readdirSync(d, { withFileTypes: true })) e.isDirectory() ? walk(resolve(d, e.name)) : files.push(resolve(d, e.name)); };
  walk(FIXTURES);
  return files.sort();
};
// the Chinese strings of a fixture file: comments removed, then each run of text between markup and quote characters,
// without the Markdown emphasis markers around it (markup, like a tag)
const fixtureStrings = (raw) => {
  const text = raw.replace(/<!--[\s\S]*?-->/g, '').replace(/\{\/\*[\s\S]*?\*\/\}/g, '').replace(/\/\/[^\n]*/g, '');
  return (text.match(/[^<>{}"'\n]*[㐀-䶿一-鿿豈-﫿][^<>{}"'\n]*/g) || []).map((s) => s.trim().replace(/^[*_]+|[*_]+$/g, ''));
};

describe('zhuyin-copy-check', () => {
  it('passes its self-test', () => {
    const out = execFileSync(process.execPath, [SCRIPT, '--self-test'], { encoding: 'utf8' });
    expect(out).toContain('self-test: PASS');
  });

  it('has a hit and a near-miss fixture set for every rule, and the rule list matches the checker', async () => {
    const dirs = readdirSync(FIXTURES).filter((d) => d.startsWith('zw-')).sort();
    expect(dirs.map((d) => d.toUpperCase())).toEqual(Object.keys(RULES));
    for (const d of dirs) expect(readdirSync(resolve(FIXTURES, d)).sort()).toEqual(['hit', 'miss']);
    const { SOURCE } = await import(SCRIPT);
    expect(Object.keys(SOURCE).sort()).toEqual(Object.keys(RULES));
  });

  describe.each(Object.entries(RULES))('%s', (rule, counts) => {
    const dir = rule.toLowerCase();

    it('flags its hit fixture, and nothing else', () => {
      const { report } = scan(dir + '/hit');
      expect(report.zh).toBe(true);
      const bySeverity = {};
      for (const f of report.findings.filter((x) => x.rule === rule)) bySeverity[f.severity] = (bySeverity[f.severity] || 0) + 1;
      expect(bySeverity).toEqual(counts);
      expect(rulesIn(report)).toEqual([rule]);
    });

    it('leaves its near-miss fixture alone, though it contains Chinese', () => {
      const { report } = scan(dir + '/miss');
      expect(report.zh).toBe(true);
      expect(report.findings).toEqual([]);
    });
  });

  it('reads italics from the element, not from the text', () => {
    const hit = scan('zw-32/hit').report.findings.map((f) => f.file.split('/').pop() + ':' + f.line);
    expect(hit).toEqual(['page.html:5', 'page.html:6', 'page.html:7', 'strings.md:2', 'Term.tsx:5', 'Term.tsx:6']);
    expect(scan('zw-32/miss').report.findings).toEqual([]); // the same term in bold
  });

  it('skips a digit beside 年 (a house choice, TW-36) but not one beside other Han', () => {
    expect(scan('zw-34/miss').report.findings).toEqual([]);
    expect(scan('zw-34/hit').report.findings.map((f) => f.match)).toEqual(['的x']);
  });

  it('reports nothing for files with no Han characters', () => {
    const { report } = scan('nonzh');
    expect(report.zh).toBe(false);
    expect(report.findings).toEqual([]);
    expect(report.notes.join(' ')).toMatch(/No Han characters/);
  });

  it('--json has the documented shape, and every finding carries its match and source key', () => {
    const { report } = scan('zw-08/hit');
    expect(Object.keys(report).sort()).toEqual(['exit', 'files', 'findings', 'notes', 'summary', 'zh']);
    expect(report.summary).toEqual({ WARN: 0, FYI: 11 });
    for (const f of report.findings) {
      expect(Object.keys(f).sort()).toEqual(['file', 'line', 'match', 'message', 'rule', 'severity', 'source']);
      expect(f.rule).toMatch(/^ZW-\d{2}$/);
      expect(Number.isInteger(f.line) && f.line > 0).toBe(true);
      expect(f.match.length).toBeGreaterThan(0);
      expect(f.source).toMatch(/^(MS|MZ|WP)/);
      expect(f.source).toMatch(/translation guide/);
    }
  });

  it('never emits BLOCK or WARN: no checked rule rests on an authority that gives the matched form as wrong', () => {
    for (const rule of Object.keys(RULES)) {
      const { report } = scan(rule.toLowerCase() + '/hit');
      expect(report.findings.every((f) => f.severity === 'FYI')).toBe(true);
    }
  });

  it('exits 0 after a scan, 0 with --strict while no WARN exists, 2 on a usage error', () => {
    expect(scan('zw-01/hit').status).toBe(0);
    expect(scan('zw-01/hit', ['--strict']).status).toBe(0);
    expect(scan('zw-01/hit', ['--strict']).report.exit).toBe(0);
    const all = run(['--json', '--strict', FIXTURES]);
    expect(all.status).toBe(0);
    expect(JSON.parse(all.stdout).summary.WARN).toBe(0);
    expect(run([]).status).toBe(2);
    expect(run(['--bogus', FIXTURES]).status).toBe(2);
  });

  describe('provenance: no Chinese that is not quoted', () => {
    it('finds the quotes', () => {
      expect(QUOTES.length).toBeGreaterThan(400);
    });

    it('every Chinese string in a fixture is inside one quote, and every Markdown fixture line names its source', () => {
      for (const f of fixtureFiles()) {
        const raw = readFileSync(f, 'utf8');
        for (const s of fixtureStrings(raw)) expect(inOneQuote(s), f + ': ' + s).toBe(true);
        if (f.endsWith('.md')) for (const line of raw.split('\n')) if (HAN.test(line.replace(/<!--[\s\S]*?-->/g, ''))) expect(line, f).toMatch(/<!-- \S.*-->\s*$/);
      }
    });

    it.each(['references/writing-rules.md', 'references/coverage.md'])('%s writes no unquoted Chinese', (p) => {
      for (const section of readFileSync(resolve(ZHUYIN, p), 'utf8').split(/^(?=#### )/m)) {
        const id = /^#### (\S+)/.exec(section)?.[1] || p;
        expect(strayPieces(section), id).toEqual([]);
        expect(strayQuotes(section), id).toEqual([]);
      }
    });

    it('the checker builds its patterns and messages only from quoted forms', () => {
      const src = readFileSync(SCRIPT, 'utf8');
      expect(strayPieces(src)).toEqual([]);
      expect(strayQuotes(src)).toEqual([]);
    });

    it('the provenance check itself rejects a string that is in no quote', () => {
      // a quoted string with one character added, and a quoted pair joined into a sentence no source wrote
      expect(inOneQuote('請輸入密碼們')).toBe(false);
      expect(strayQuotes('「請輸入密碼，您們」')).toEqual(['請輸入密碼，您們']);
      expect(inOneQuote('請輸入密碼')).toBe(true);
    });
  });

  describe('coverage', () => {
    const cov = readFileSync(resolve(ZHUYIN, 'references/coverage.md'), 'utf8');
    const rules = readFileSync(resolve(ZHUYIN, 'references/writing-rules.md'), 'utf8');
    const rows = [...cov.matchAll(/^\| (TW-\d{2}) \|/gm)].map((m) => m[1]);
    const zwRules = [...rules.matchAll(/^#### (ZW-\d{2}) \((TW-\d{2})/gm)];

    it('lists all 55 candidates once, in order', () => {
      expect(rows).toEqual(Array.from({ length: 55 }, (_, i) => 'TW-' + String(i + 1).padStart(2, '0')));
    });

    it('agrees with the rule file: each ZW rule carries its candidate number, and the checked rules have a check', () => {
      for (const [, zw, tw] of zwRules) expect(zw.slice(3)).toBe(tw.slice(3));
      const inCov = [...cov.matchAll(/^\| TW-\d{2} \| [^|]+ \| (ZW-\d{2})/gm)].map((m) => m[1]);
      expect(inCov).toEqual(zwRules.map((m) => m[1]));
      const checked = [...cov.matchAll(/^\| TW-\d{2} \| [^|]+ \| [^|]+ \| (ZW-\d{2}) (WARN|FYI)/gm)].map((m) => m[1]);
      expect(checked).toEqual(Object.keys(RULES));
      for (const id of Object.keys(RULES)) expect(rules).toMatch(new RegExp('\\*\\*' + id + ', FYI\\*\\*'));
    });

    it('every disagreement in the rule file is a candidate the coverage table sends there, and none is a ZW rule', () => {
      const section = rules.slice(rules.indexOf('## The project'), rules.indexOf('## Left out'));
      const listed = [...section.matchAll(/^#### (TW-\d{2})/gm)].map((m) => m[1]);
      const sent = [...cov.matchAll(/^\| (TW-\d{2}) \| [^|]+ \| not a rule: "The project's DESIGN.md decides"/gm)].map((m) => m[1]);
      expect(listed).toEqual(sent);
      for (const tw of listed) expect(zwRules.map((m) => m[2])).not.toContain(tw);
    });
  });
});
