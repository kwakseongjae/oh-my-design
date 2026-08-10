import { afterEach, describe, expect, it } from 'vitest';
import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const enabled = process.env.RUN_UI_RESOLVE_BROWSER_E2E === '1';
const repoRoot = resolve(import.meta.dirname, '../../..');
const canary = join(repoRoot, 'benchmarks/ui-resolve-bench/scripts/run-autopilot-clean-dir-canary.mjs');
const evaluator = join(repoRoot, 'benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield.mjs');
let parent;

afterEach(() => { if (parent && existsSync(parent)) rmSync(parent, { recursive: true, force: true }); });

function evaluate(workspace, runDir, out) {
  return spawnSync(process.execPath, [evaluator, '--workspace', workspace, '--run-dir', runDir, '--out', out], { encoding: 'utf8' });
}

describe.skipIf(!enabled)('Autopilot greenfield evaluator browser E2E', () => {
  it('passes the valid oracle and rejects responsive and validation mutants', () => {
    parent = mkdtempSync(join(tmpdir(), 'omd-greenfield-e2e-'));
    const base = join(parent, 'base');
    expect(spawnSync(process.execPath, [canary, base], { encoding: 'utf8' }).status).toBe(0);
    const workspace = join(base, 'workspace');
    const runDir = join(workspace, '.omd/runs/run-greenfield-family-planner');
    const validOut = join(runDir, 'greenfield-score.json');
    const valid = evaluate(workspace, runDir, validOut);
    expect(valid.status, valid.stderr).toBe(0);
    expect(JSON.parse(readFileSync(validOut, 'utf8'))).toMatchObject({ score: 100, ui_resolved: true });

    for (const [id, mutate] of [
      ['overflow', (html) => html.replace('.summary{', '.summary{min-width:900px;')],
      ['validation', (html) => html.replace("error.textContent='Enter a meal name.'", "error.textContent=''" )],
    ]) {
      const mutant = join(parent, id);
      cpSync(base, mutant, { recursive: true });
      const mutantWorkspace = join(mutant, 'workspace');
      const entry = join(mutantWorkspace, 'index.html');
      writeFileSync(entry, mutate(readFileSync(entry, 'utf8')));
      const mutantRun = join(mutantWorkspace, '.omd/runs/run-greenfield-family-planner');
      const out = join(mutantRun, `${id}-score.json`);
      const result = evaluate(mutantWorkspace, mutantRun, out);
      expect(result.status, result.stderr).toBe(0);
      const score = JSON.parse(readFileSync(out, 'utf8'));
      expect(score.ui_resolved).toBe(false);
      expect(score.groups[id === 'overflow' ? 'responsive' : 'functionality'].pass).toBe(false);
    }
  }, 30_000);
});
