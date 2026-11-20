// Japanese writing checker (scripts/lang/kana-copy-check.mjs): every rule's hit and near-miss fixture, the
// --json shape, exit codes, and provenance: every Japanese string in the fixtures, the KW rule file, the coverage
// table, the SKILL.md section and the checker itself must come from a quote in docs/drafts/kana/writing/rules.md
// or verdicts.md.
import { execFileSync, spawnSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = resolve(import.meta.dirname, '../../..');
const SCRIPT = resolve(ROOT, 'scripts/lang/kana-copy-check.mjs');
const FIXTURES = resolve(ROOT, 'scripts/lang/fixtures/kana-copy');
const KANA = resolve(ROOT, 'docs/drafts/kana');
// rules whose fixtures and rule text may also quote docs/drafts/kana/references/rules.md (JTF and KB examples)
const ALSO_REFERENCES = new Set(['KW-39']);
const run = (args) => spawnSync(process.execPath, [SCRIPT, ...args], { cwd: ROOT, encoding: 'utf8' });
const scan = (dir, flags = []) => {
  const res = run(['--json', ...flags, resolve(FIXTURES, dir)]);
  expect(res.stderr).toBe('');
  return { status: res.status, report: JSON.parse(res.stdout) };
};
const rulesIn = (report) => [...new Set(report.findings.map((f) => f.rule))].sort();

// rule → the severities its hit fixture must produce
const RULES = {
  'KW-02': { FYI: 1 },
  'KW-06': { FYI: 3 },
  'KW-07': { FYI: 1 },
  'KW-09': { WARN: 4 },
  'KW-11': { FYI: 1 },
  'KW-12': { FYI: 2 },
  'KW-13': { FYI: 1 },
  'KW-14': { FYI: 1 },
  'KW-15': { FYI: 1 },
  'KW-17': { FYI: 2 },
  'KW-18': { FYI: 1 },
  'KW-20': { FYI: 1 },
  'KW-23': { FYI: 2 },
  'KW-24': { FYI: 2 },
  'KW-25': { FYI: 1 },
  'KW-26': { WARN: 1, FYI: 1 },
  'KW-32': { FYI: 2 },
  'KW-33': { FYI: 4 },
  'KW-35': { FYI: 1 },
  'KW-39': { FYI: 6 },
  'KW-46': { FYI: 5 },
  'KW-54': { FYI: 1 }, // two placeholders on one line with the same match are one finding
  'KW-55': { FYI: 1 },
  'KW-56': { FYI: 3 },
  'KW-57': { FYI: 3 },
};
// a hit fixture whose quoted string also trips another rule: KW-07's label is Mozilla's NG string (KW-06);
// WordPress's passive example is written with U+FF5E (KW-46)
const ALSO = { 'KW-07': ['KW-06'], 'KW-13': ['KW-46'] };

// ---- the quotes: corner-bracket spans (nested too) and backtick spans, from the quote lines of rules.md and all of verdicts.md
const JA_RUN = /[\u3000-\u30FF\u3400-\u9FFF\uFF00-\uFFEF\u25CB\u25EF\u203B\u2026\u2015\u2212]+/g;
const KANA_KANJI = /[\u3040-\u30FF\u3400-\u9FFF]/;
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
function corpus() {
  const rules = readFileSync(resolve(KANA, 'writing/rules.md'), 'utf8');
  const verdicts = readFileSync(resolve(KANA, 'writing/verdicts.md'), 'utf8');
  let block = '';
  const kept = rules.split('\n').filter((l) => {
    const h = /^#### (UW-\d+)/.exec(l);
    if (h) block = h[1];
    if (/^\s*#/.test(l) || /^\s*- (Test|Illustration|Kind|Strength)\b/i.test(l) || /Illustration \(ours/.test(l)) return false;
    // verdicts.md: UW-19's first DADS quote is not verbatim in rules.md, and UW-36 joins Mozilla's example words
    // that the page prints one by one; the verdict carries the page's text for both
    if (block === 'UW-19' && /^- DADS-btn:/.test(l)) return false;
    if (block === 'UW-36' && /^- MZ \/ MZ-ed:/.test(l)) return false;
    return true;
  });
  return keepJapanese([...spans(kept.join('\n')), ...spans(verdicts)]);
}
const keepJapanese = (list) => list.filter((s) => KANA_KANJI.test(s) || /[\u3000-\u303F\uFF00-\uFFEF]/.test(s));
// references/rules.md (JW, JT): quote lines only; composed and half-composed examples are left out
function referenceCorpus() {
  const text = readFileSync(resolve(KANA, 'references/rules.md'), 'utf8');
  const kept = text.split('\n').filter((l) => !/^\s*#/.test(l) && !/^\s*- (Test|Kind|Strength|Standing)\b/i.test(l) && !/composed|half src|\(ours/i.test(l));
  return keepJapanese(spans(kept.join('\n')));
}
const QUOTES = corpus();
const WIDE = [...QUOTES, ...referenceCorpus()];
const JOINED = QUOTES.join('\n');
const WIDE_JOINED = WIDE.join('\n');
const inOneQuote = (s, wide = false) => (wide ? WIDE : QUOTES).some((q) => q.includes(s));
// every run of Japanese text, split at corner brackets, must sit inside the quotes
const strayPieces = (text, wide = false) => (text.match(JA_RUN) || []).flatMap((r) => r.split(/[\u300C\u300D\u300E\u300F]/)).filter((p) => KANA_KANJI.test(p) && !(wide ? WIDE_JOINED : JOINED).includes(p));
// every outermost \u300C\u2026\u300D written must be inside one quote
function strayQuotes(text, wide = false) {
  const out = [];
  for (const line of text.split('\n')) {
    let depth = 0;
    let start = 0;
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '\u300C') { if (depth++ === 0) start = i + 1; }
      else if (line[i] === '\u300D' && depth > 0 && --depth === 0) {
        const s = line.slice(start, i);
        if (KANA_KANJI.test(s) && !inOneQuote(s, wide)) out.push(s);
      }
    }
  }
  return out;
}

describe('kana-copy-check', () => {
  it('passes its self-test', () => {
    const out = execFileSync(process.execPath, [SCRIPT, '--self-test'], { encoding: 'utf8' });
    expect(out).toContain('self-test: PASS');
  });

  it('has a hit and a near-miss fixture set for every rule, and the rule list matches the checker', async () => {
    const dirs = readdirSync(FIXTURES).filter((d) => d.startsWith('kw-')).sort();
    expect(dirs.map((d) => d.toUpperCase())).toEqual(Object.keys(RULES));
    for (const d of dirs) expect(readdirSync(resolve(FIXTURES, d)).sort()).toEqual(['hit', 'miss']);
    const { SOURCE } = await import(SCRIPT);
    expect(Object.keys(SOURCE).sort()).toEqual(Object.keys(RULES));
  });

  describe.each(Object.entries(RULES))('%s', (rule, counts) => {
    const dir = rule.toLowerCase();

    it('flags its hit fixture', () => {
      const { report } = scan(dir + '/hit');
      expect(report.ja).toBe(true);
      const bySeverity = {};
      for (const f of report.findings.filter((x) => x.rule === rule)) bySeverity[f.severity] = (bySeverity[f.severity] || 0) + 1;
      expect(bySeverity).toEqual(counts);
      expect(rulesIn(report).filter((r) => r !== rule)).toEqual(ALSO[rule] || []);
    });

    it('leaves its near-miss fixture alone, though it contains Japanese', () => {
      const { report } = scan(dir + '/miss');
      expect(report.ja).toBe(true);
      expect(report.findings).toEqual([]);
    });
  });

  it('reads roles from the element: a button, a heading, a dialog', () => {
    expect(scan('kw-15/miss').report.findings).toEqual([]); // OK in a paragraph
    expect(scan('kw-17/miss').report.findings).toEqual([]); // the genitive form in a heading
    const dialog = scan('kw-20/hit').report.findings;
    expect(dialog.map((f) => f.file.split('/').pop() + ':' + f.line)).toEqual(['dialog.html:8']); // the aria-label
  });

  it('reports nothing for files with no Japanese text', () => {
    const { report } = scan('nonja');
    expect(report.ja).toBe(false);
    expect(report.findings).toEqual([]);
    expect(report.notes.join(' ')).toMatch(/No kana or kanji/);
  });

  it('--json has the documented shape, and every finding carries its match and source key', () => {
    const { report } = scan('kw-26/hit');
    expect(Object.keys(report).sort()).toEqual(['exit', 'files', 'findings', 'ja', 'notes', 'summary']);
    expect(report.summary).toEqual({ WARN: 1, FYI: 1 });
    for (const f of report.findings) {
      expect(Object.keys(f).sort()).toEqual(['file', 'line', 'match', 'message', 'rule', 'severity', 'source']);
      expect(f.rule).toMatch(/^KW-\d{2}$/);
      expect(Number.isInteger(f.line) && f.line > 0).toBe(true);
      expect(f.match.length).toBeGreaterThan(0);
      expect(f.source).toMatch(/^(DADS|SH|UB|SP|PB|MZ|WP)/);
      expect(f.source).toMatch(/(government design system|company guide|translation guide)/);
    }
  });

  it('never emits BLOCK, and WARN only for KW-09 and KW-26', () => {
    for (const rule of Object.keys(RULES)) {
      const { report } = scan(rule.toLowerCase() + '/hit');
      expect(report.findings.some((f) => f.severity === 'BLOCK')).toBe(false);
      for (const f of report.findings.filter((x) => x.severity === 'WARN')) expect(['KW-09', 'KW-26']).toContain(f.rule);
    }
  });

  it('exits 0 after a scan, 1 with --strict when a WARN exists, 2 on a usage error', () => {
    expect(scan('kw-09/hit').status).toBe(0);
    expect(scan('kw-09/hit', ['--strict']).status).toBe(1);
    expect(scan('kw-09/hit', ['--strict']).report.exit).toBe(1);
    expect(scan('kw-06/hit', ['--strict']).status).toBe(0);
    expect(run([]).status).toBe(2);
    expect(run(['--json', '--format=github', FIXTURES]).status).toBe(2);
  });

  it('--format=github prints one annotation per finding and the summary line', () => {
    const { report } = scan('kw-26/hit');
    const lines = run(['--format=github', resolve(FIXTURES, 'kw-26/hit')]).stdout.trimEnd().split('\n');
    expect(lines).toHaveLength(report.findings.length + 1);
    expect(lines.filter((l) => l.startsWith('::warning '))).toHaveLength(1);
    expect(lines.filter((l) => l.startsWith('::notice '))).toHaveLength(1);
    expect(lines.at(-1)).toBe('1 WARN · 1 FYI · exit 0');
  });

  describe('provenance: no Japanese that is not quoted', () => {
    it('finds the quotes', () => {
      expect(QUOTES.length).toBeGreaterThan(300);
    });

    it('every Japanese string in a fixture is inside one quote, and every Markdown fixture line names its source', () => {
      const files = [];
      const walk = (d) => { for (const e of readdirSync(d, { withFileTypes: true })) e.isDirectory() ? walk(resolve(d, e.name)) : files.push(resolve(d, e.name)); };
      walk(FIXTURES);
      for (const f of files) {
        const raw = readFileSync(f, 'utf8');
        const text = raw.replace(/<!--[\s\S]*?-->/g, '').replace(/\{\/\*[\s\S]*?\*\/\}/g, '').replace(/\/\/[^\n]*/g, '');
        for (const s of text.match(/[^<>{}"\n]*[\u3040-\u30FF\u3400-\u9FFF\u3000-\u303F\uFF00-\uFFEF][^<>{}"\n]*/g) || []) {
          const wide = [...ALSO_REFERENCES].some((r) => f.includes('/' + r.toLowerCase() + '/'));
          expect(inOneQuote(s.trim(), wide), f + ': ' + s.trim()).toBe(true);
        }
        if (f.endsWith('.md')) for (const line of raw.split('\n')) if (KANA_KANJI.test(line.replace(/<!--[\s\S]*?-->/g, ''))) expect(line, f).toMatch(/<!-- \S.*-->\s*$/);
      }
    });

    it.each(['references/writing-rules.md', 'writing/coverage.md'])('%s writes no unquoted Japanese', (p) => {
      // each rule section is held to its own quote set: the writing research, plus references/rules.md for ALSO_REFERENCES
      for (const section of readFileSync(resolve(KANA, p), 'utf8').split(/^(?=#### )/m)) {
        const id = /^#### (KW-\d{2})/.exec(section)?.[1];
        const wide = ALSO_REFERENCES.has(id);
        expect(strayPieces(section, wide), id || p).toEqual([]);
        expect(strayQuotes(section, wide), id || p).toEqual([]);
      }
    });

    it('the SKILL.md section on the KW rules writes no unquoted Japanese', () => {
      const skill = readFileSync(resolve(KANA, 'SKILL.md'), 'utf8');
      const section = skill.slice(skill.indexOf('## 4c.'), skill.indexOf('## 5.'));
      expect(section.length).toBeGreaterThan(500);
      expect(strayPieces(section)).toEqual([]);
    });

    it('the checker builds its patterns only from quoted forms', () => {
      expect(strayPieces(readFileSync(SCRIPT, 'utf8'))).toEqual([]);
      expect(strayQuotes(readFileSync(SCRIPT, 'utf8'))).toEqual([]);
    });
  });

  describe('coverage', () => {
    const cov = readFileSync(resolve(KANA, 'writing/coverage.md'), 'utf8');
    const rows = [...cov.matchAll(/^\| (UW-\d{2}) \|/gm)].map((m) => m[1]);
    const kwRules = [...readFileSync(resolve(KANA, 'references/writing-rules.md'), 'utf8').matchAll(/^#### (KW-\d{2}) \((UW-\d{2})/gm)];

    it('lists all 57 candidates once, in order', () => {
      expect(rows).toEqual(Array.from({ length: 57 }, (_, i) => 'UW-' + String(i + 1).padStart(2, '0')));
    });

    it('agrees with the rule file: each KW rule carries its candidate number, and the checked rules have a check', () => {
      for (const [, kw, uw] of kwRules) expect(kw.slice(3)).toBe(uw.slice(3));
      const inCov = [...cov.matchAll(/^\| UW-\d{2} \| [^|]+ \| (KW-\d{2})/gm)].map((m) => m[1]);
      expect(inCov).toEqual(kwRules.map((m) => m[1]));
      const checked = [...cov.matchAll(/^\| UW-\d{2} \| [^|]+ \| [^|]+ \| (KW-\d{2}) (WARN|FYI)/gm)].map((m) => m[1]);
      expect(checked).toEqual(Object.keys(RULES));
    });
  });
});
