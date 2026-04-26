import { describe, it, expect, beforeAll } from 'vitest';
import { rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SCENARIOS, PASS_THRESHOLDS } from './cases.js';
import { runAllScenarios, type RunAllResult } from './runner.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const ARCHIVE_ROOT = join(HERE, 'archive');

let result: RunAllResult;

describe('scenarios end-to-end', () => {
  beforeAll(() => {
    if (existsSync(ARCHIVE_ROOT)) {
      rmSync(ARCHIVE_ROOT, { recursive: true, force: true });
    }
    result = runAllScenarios(SCENARIOS, ARCHIVE_ROOT);
  }, 30000);

  it('every scenario produces archived artifacts', () => {
    for (const r of result.scenarios) {
      expect(existsSync(r.archivePath), r.id).toBe(true);
      expect(existsSync(join(r.archivePath, 'checks.json')), r.id).toBe(true);
      expect(existsSync(join(r.archivePath, 'delta_set.json')), r.id).toBe(
        true
      );
      expect(existsSync(join(r.archivePath, 'DESIGN.md')), `${r.id} DESIGN.md`).toBe(true);
      expect(existsSync(join(r.archivePath, 'CLAUDE.md')), `${r.id} CLAUDE.md`).toBe(true);
      expect(existsSync(join(r.archivePath, 'AGENTS.md')), `${r.id} AGENTS.md`).toBe(true);
    }
  });

  it('vocab coverage meets threshold', () => {
    expect(result.vocabCoverage).toBeGreaterThanOrEqual(
      PASS_THRESHOLDS.vocabCoverageMin
    );
  });

  it('RESULTS.md is generated', () => {
    expect(existsSync(join(ARCHIVE_ROOT, 'RESULTS.md'))).toBe(true);
  });

  // Per-scenario pass check — report each separately for better failure output.
  for (const scenario of SCENARIOS) {
    it(`scenario: ${scenario.id} — ${scenario.title}`, () => {
      const r = result.scenarios.find((x) => x.id === scenario.id);
      expect(r, scenario.id).toBeDefined();
      const failed = r!.checks.filter((c) => !c.passed);
      if (failed.length > 0) {
        const msg = failed
          .map((f) => `  - ${f.name}: ${f.detail}`)
          .join('\n');
        throw new Error(`${r!.id} failed ${failed.length} checks:\n${msg}`);
      }
    });
  }

  it('all-scenarios pass rate meets threshold', () => {
    const passRate = result.totals.passed / result.totals.scenarios;
    expect(passRate).toBeGreaterThanOrEqual(0.9);
  });
});
