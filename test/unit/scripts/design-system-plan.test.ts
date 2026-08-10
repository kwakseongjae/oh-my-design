import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const helper = resolve(import.meta.dirname, '../../../scripts/design-system-plan.cjs');
const roots: string[] = [];

function runWith(handoff: Record<string, unknown>, options: { designMd?: string } = {}) {
  const root = mkdtempSync(join(tmpdir(), 'omd-system-plan-'));
  roots.push(root);
  const run = join(root, '.omd/runs/run-test');
  mkdirSync(join(run, 'handoff'), { recursive: true });
  writeFileSync(join(run, 'task.md'), '# Harness Task\n\nBuild a product.\n');
  writeFileSync(join(run, 'handoff/.handoff.json'), `${JSON.stringify(handoff)}\n`);
  if (options.designMd) writeFileSync(join(root, 'DESIGN.md'), options.designMd);
  const result = spawnSync(process.execPath, [helper, root, run], { encoding: 'utf8' });
  return { root, run, result };
}

const ledger = 'a'.repeat(64);

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe('design-system-plan', () => {
  it('materializes delegated greenfield authority as a system build receipt', () => {
    const { run, result } = runWith({
      state: 'PROPOSE_PLAN', ledger_sha256: ledger,
      prefilled_slots: { design_system_strategy: 'establish' },
    });
    expect(result.status, result.stderr).toBe(0);
    expect(JSON.parse(readFileSync(join(run, 'design-system-decision.json'), 'utf8'))).toMatchObject({
      status: 'ready', strategy: 'establish', source: 'deterministic-ledger',
      implementation_owner: 'main-agent', reference_selection_allowed: true,
      root_design_md_write_allowed: true, next_state: 'SYSTEM_BUILD',
    });
  });

  it('binds reuse to the exact existing DESIGN.md', () => {
    const { run, result } = runWith({
      state: 'PROPOSE_PLAN', ledger_sha256: ledger,
      prefilled_slots: { design_system_strategy: 'reuse' },
    }, { designMd: '# Existing system\n' });
    expect(result.status, result.stderr).toBe(0);
    const receipt = JSON.parse(readFileSync(join(run, 'design-system-decision.json'), 'utf8'));
    expect(receipt).toMatchObject({ strategy: 'reuse', next_state: 'SYSTEM_REUSE' });
    expect(receipt.authorities.existing_design_md_sha256).toMatch(/^[a-f0-9]{64}$/);
  });

  it('normalizes the one interview answer and keeps local choices non-promotable', () => {
    const { run, result } = runWith({
      state: 'PROPOSE_PLAN', ledger_sha256: ledger,
      prefilled_slots: { design_system_strategy: '이번 surface 한정' },
      answered_decisions: [{ id: 'design-system-disposition', value: '이번 surface 한정' }],
      answers_ref: 'checkpoints/council-intake.answers.json',
    });
    expect(result.status, result.stderr).toBe(0);
    expect(JSON.parse(readFileSync(join(run, 'design-system-decision.json'), 'utf8'))).toMatchObject({
      strategy: 'surface-local-only', source: 'interview-answer',
      root_design_md_write_allowed: false,
      local_decisions_promotable_to_project_facts: false,
      next_state: 'LOCAL_SURFACE_CONTRACT',
    });
  });

  it('fails closed before answers and on unsafe overwrite semantics', () => {
    const awaiting = runWith({
      state: 'AWAIT_USER', status: 'ask_user', ledger_sha256: ledger, prefilled_slots: {},
    });
    expect(awaiting.result.status).not.toBe(0);
    expect(awaiting.result.stderr).toContain('before the consequential interview is answered');

    const overwrite = runWith({
      state: 'PROPOSE_PLAN', ledger_sha256: ledger,
      prefilled_slots: { design_system_strategy: 'establish' },
    }, { designMd: '# Existing system\n' });
    expect(overwrite.result.status).not.toBe(0);
    expect(overwrite.result.stderr).toContain('cannot overwrite');
  });
});
