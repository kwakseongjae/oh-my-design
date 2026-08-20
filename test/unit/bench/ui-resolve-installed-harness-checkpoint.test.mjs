import { afterEach, describe, expect, it } from 'vitest';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const repoRoot = resolve(import.meta.dirname, '../../..');
const runner = join(repoRoot, 'benchmarks/ui-resolve-bench/scripts/run-installed-harness-checkpoint-canary.mjs');
const fixture = join(repoRoot, 'benchmarks/ui-resolve-bench/fixtures/installed-harness-checkpoint-luna-1.9.766.json');
let root;

afterEach(() => {
  if (root && existsSync(root)) rmSync(root, { recursive: true, force: true });
});

describe('installed harness checkpoint canary', () => {
  it('locks ready, interview, and blocked outcomes without a provider call', () => {
    root = mkdtempSync(join(tmpdir(), 'omd-installed-harness-canary-'));
    const result = spawnSync(process.execPath, [runner, fixture, root], { encoding: 'utf8' });
    expect(result.status, result.stderr).toBe(0);
    const summary = JSON.parse(readFileSync(join(root, 'SUMMARY.json'), 'utf8'));
    expect(summary).toMatchObject({
      execution_mode: 'provider-zero',
      case_count: 3,
      deterministic_gate: true,
      live_gate: null,
      provider_calls: 0,
      cursor_calls: 0,
    });
    expect(summary.results.map((item) => item.observed_handoff.action)).toEqual([
      'propose_plan', 'relay_questions', 'halt_blocked',
    ]);
    expect(summary.results.every((item) => item.unauthorized_write_count === 0)).toBe(true);
  });

  it('rejects a fabricated Luna suffix before the canary can spawn Codex', () => {
    root = mkdtempSync(join(tmpdir(), 'omd-installed-harness-route-deny-'));
    const mutatedFixture = join(root, 'fabricated-luna.json');
    const value = JSON.parse(readFileSync(fixture, 'utf8'));
    value.model = 'gpt-5.6-luna-preview';
    writeFileSync(mutatedFixture, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
    const output = join(root, 'output');
    const result = spawnSync(process.execPath, [runner, mutatedFixture, output], {
      encoding: 'utf8',
      env: {
        ...process.env,
        OMD_HARNESS_CANARY_EXECUTE: '1',
        OMD_BENCH_CODEX_BIN: '/definitely/missing/codex',
      },
    });
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('default_action=deny: unknown model gpt-5.6-luna-preview');
    expect(existsSync(output)).toBe(false);
  });
});
