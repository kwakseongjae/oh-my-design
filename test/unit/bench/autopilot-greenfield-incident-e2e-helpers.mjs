import { execFileSync } from 'node:child_process';
import { cpSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';

export const repoRoot = resolve(import.meta.dirname, '../../..');
export const fixtureRoot = join(repoRoot, 'benchmarks/ui-resolve-bench/fixtures/autopilot-greenfield/incident-response-dashboard');
const evaluator = join(repoRoot, 'benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs');

export function evaluateIncident(workspace, label) {
  const outputRoot = mkdtempSync(join(tmpdir(), `omd-incident-eval-${label}-`));
  const out = join(outputRoot, 'score.json');
  execFileSync(process.execPath, [evaluator, '--task-id', 'incident-response-dashboard', '--workspace', workspace, '--out', out], { cwd: repoRoot, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 });
  return JSON.parse(readFileSync(out, 'utf8'));
}

export function incidentMutant(sourceName, label, transform) {
  const workspace = join(mkdtempSync(join(tmpdir(), `omd-incident-${label}-`)), label);
  mkdirSync(workspace, { recursive: true });
  cpSync(join(fixtureRoot, sourceName), workspace, { recursive: true });
  const entry = join(workspace, 'index.html');
  const original = readFileSync(entry, 'utf8');
  const changed = transform(original);
  if (changed === original) throw new Error(`mutant did not change ${sourceName}`);
  writeFileSync(entry, changed);
  return workspace;
}
