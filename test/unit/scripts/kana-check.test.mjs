// Japanese typography checker (scripts/lang/kana-check.mjs): every rule's hit and near-miss fixture,
// the Japanese gate, the --json shape, GitHub annotations and exit codes.
import { execFileSync, spawnSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = resolve(import.meta.dirname, '../../..');
const SCRIPT = resolve(ROOT, 'scripts/lang/kana-check.mjs');
const FIXTURES = resolve(ROOT, 'scripts/lang/fixtures/kana');
const run = (args) => spawnSync(process.execPath, [SCRIPT, ...args], { cwd: ROOT, encoding: 'utf8' });
const scan = (dir, flags = []) => {
  const res = run(['--json', ...flags, resolve(FIXTURES, dir)]);
  expect(res.stderr).toBe('');
  return { status: res.status, report: JSON.parse(res.stdout) };
};
const rulesIn = (report) => [...new Set(report.findings.map((f) => f.rule))].sort();

// rule → the severities its hit fixture must produce (JT-14's hit set also trips JT-25: <html lang="en">)
const RULES = {
  'JT-01': { WARN: 6 },
  'JT-05': { FYI: 3 },
  'JT-07': { FYI: 3 },
  'JT-09': { FYI: 2 },
  'JT-12': { FYI: 2 },
  'JT-13': { FYI: 2 },
  'JT-14': { WARN: 1, FYI: 1 },
  'JT-22': { FYI: 4 },
  'JT-25': { WARN: 2, FYI: 1 },
  'JT-26': { WARN: 2, FYI: 1 },
  'JT-32': { WARN: 4 },
};

describe('kana-check', () => {
  it('passes its self-test', () => {
    const out = execFileSync(process.execPath, [SCRIPT, '--self-test'], { encoding: 'utf8' });
    expect(out).toContain('self-test: PASS');
  });

  it('has a hit and a near-miss fixture set for every rule, and no others', () => {
    const dirs = readdirSync(FIXTURES).filter((d) => d.startsWith('jt-')).sort();
    expect(dirs.map((d) => d.toUpperCase())).toEqual(Object.keys(RULES));
    for (const d of dirs) expect(readdirSync(resolve(FIXTURES, d)).sort()).toEqual(['hit', 'miss']);
  });

  describe.each(Object.entries(RULES))('%s', (rule, counts) => {
    const dir = rule.toLowerCase();

    it('flags its hit fixture', () => {
      const { report } = scan(`${dir}/hit`);
      expect(report.ja).toBe(true);
      const own = report.findings.filter((f) => f.rule === rule);
      const bySeverity = {};
      for (const f of own) bySeverity[f.severity] = (bySeverity[f.severity] || 0) + 1;
      expect(bySeverity).toEqual(counts);
      const others = rulesIn(report).filter((r) => r !== rule);
      expect(others).toEqual(rule === 'JT-14' ? ['JT-25'] : []);
    });

    it('leaves its near-miss fixture alone, though it contains Japanese', () => {
      const { report } = scan(`${dir}/miss`);
      expect(report.ja).toBe(true);
      expect(report.active).toBe(true);
      expect(report.findings).toEqual([]);
    });
  });

  it('JT-09 and JT-12: line-break: anywhere is reported once, as JT-12', () => {
    const { report } = scan('jt-12/hit');
    expect(rulesIn(report)).toEqual(['JT-12']);
    expect(report.findings.every((f) => f.source.includes('JT-09'))).toBe(true);
  });

  it('JT-14: a stylesheet with no traceable markup is FYI, a traced element without lang="ja" is WARN', () => {
    const { report } = scan('jt-14/hit');
    const jt14 = report.findings.filter((f) => f.rule === 'JT-14').map((f) => `${f.file}:${f.line} ${f.severity}`);
    expect(jt14).toEqual(['scripts/lang/fixtures/kana/jt-14/hit/index.html:5 WARN', 'scripts/lang/fixtures/kana/jt-14/hit/phrase.css:2 FYI']);
  });

  it('JT-25: a dynamic <html lang> is skipped; a layout with no Japanese text of its own is FYI, not WARN', () => {
    expect(scan('jt-25/miss/layout.tsx', ['--assume-ja']).report.findings).toEqual([]);
    const layout = scan('jt-25/hit/layout.tsx', ['--assume-ja']).report.findings;
    expect(layout.map((f) => `${f.line} ${f.severity} ${f.rule}`)).toEqual(['3 FYI JT-25']);
  });

  it('reaches the rules through @apply, style attributes, cn(), --font-* variables and tailwind.config', () => {
    const { report } = scan('inputs');
    const got = report.findings.map((f) => `${f.file.split('/').pop()}:${f.line} ${f.severity} ${f.rule}`);
    expect(got).toEqual(['Card.tsx:3 WARN JT-26', 'page.html:5 WARN JT-01', 'page.html:5 WARN JT-26', 'page.html:6 FYI JT-22', 'page.html:11 WARN JT-01', 'tailwind.config.js:5 FYI JT-22']);
  });

  it('does not claim Japanese text it could not trace', () => {
    const { report } = scan('nonja', ['--assume-ja']);
    for (const f of report.findings) expect(f.message).not.toMatch(/\bJapanese (body )?text\b/);
  });

  it('reports nothing for a file with no Japanese text unless --assume-ja is given', () => {
    const plain = scan('nonja');
    expect(plain.report.ja).toBe(false);
    expect(plain.report.active).toBe(false);
    expect(plain.report.findings).toEqual([]);
    expect(plain.report.notes.join(' ')).toMatch(/--assume-ja/);
    const assumed = scan('nonja', ['--assume-ja']);
    expect(assumed.report.active).toBe(true);
    expect(rulesIn(assumed.report)).toEqual(['JT-01', 'JT-26', 'JT-32']);
  });

  it('--json has the documented shape, and every finding carries its source', () => {
    const { report } = scan('jt-26/hit');
    expect(Object.keys(report).sort()).toEqual(['active', 'exit', 'files', 'findings', 'ja', 'notes', 'summary']);
    expect(Object.keys(report.summary).sort()).toEqual(['FYI', 'WARN']);
    expect(report.summary).toEqual({ WARN: 2, FYI: 1 });
    expect(report.files).toBe(3);
    for (const f of report.findings) {
      expect(Object.keys(f).sort()).toEqual(['file', 'line', 'message', 'rule', 'severity', 'source']);
      expect(f.rule).toMatch(/^JT-\d{2}$/);
      expect(['WARN', 'FYI']).toContain(f.severity);
      expect(Number.isInteger(f.line) && f.line > 0).toBe(true);
      expect(f.message.length).toBeGreaterThan(10);
      expect(f.source).toMatch(/\((government|vendor|W3C|Candidate|Working)/);
    }
  });

  it('never emits BLOCK', () => {
    for (const rule of Object.keys(RULES)) {
      const { report } = scan(`${rule.toLowerCase()}/hit`);
      expect(report.findings.some((f) => f.severity === 'BLOCK')).toBe(false);
    }
  });

  it('exits 0 with WARN and FYI findings, 1 with --strict when a WARN exists, 0 with --strict on FYI only', () => {
    expect(scan('jt-32/hit').status).toBe(0);
    expect(scan('jt-32/hit', ['--strict']).status).toBe(1);
    expect(scan('jt-32/hit', ['--strict']).report.exit).toBe(1);
    expect(scan('jt-05/hit', ['--strict']).status).toBe(0);
    expect(scan('jt-32/miss', ['--strict']).status).toBe(0);
    expect(run([]).status).toBe(2);
    expect(run(['--json', '--format=github', FIXTURES]).status).toBe(2);
  });

  it('--format=github prints one annotation per finding and the same summary line', () => {
    const dir = resolve(FIXTURES, 'jt-14/hit');
    const { report } = scan('jt-14/hit');
    const gh = run(['--format=github', dir]);
    const lines = gh.stdout.trimEnd().split('\n');
    expect(lines).toHaveLength(report.findings.length + 1);
    expect(lines.filter((l) => l.startsWith('::warning '))).toHaveLength(report.summary.WARN);
    expect(lines.filter((l) => l.startsWith('::notice '))).toHaveLength(report.summary.FYI);
    expect(lines.at(-1)).toBe(`${report.summary.WARN} WARN · ${report.summary.FYI} FYI · exit 0`);
    for (const [i, f] of report.findings.entries()) expect(lines[i]).toContain(`line=${f.line},title=${f.rule}::`);
  });
});
