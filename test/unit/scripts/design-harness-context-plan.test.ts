import { afterEach, describe, expect, it } from 'vitest';
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const repoRoot = resolve(import.meta.dirname, '../../..');
const helper = join(repoRoot, 'scripts/design-harness-context-plan.cjs');
let root: string;

afterEach(() => {
  if (root && existsSync(root)) rmSync(root, { recursive: true, force: true });
});

function plan(handoff: Record<string, unknown>, purpose = 'resume') {
  root = mkdtempSync(join(tmpdir(), 'omd-context-plan-'));
  const runDir = join(root, '.omd/run');
  mkdirSync(join(runDir, 'handoff'), { recursive: true });
  writeFileSync(join(runDir, 'handoff/.handoff.json'), `${JSON.stringify(handoff)}\n`);
  const result = spawnSync(process.execPath, [helper, root, runDir, purpose], { encoding: 'utf8' });
  expect(result.status, result.stderr).toBe(0);
  return JSON.parse(readFileSync(join(runDir, 'handoff/context-plan.json'), 'utf8'));
}

describe('design-harness-context-plan', () => {
  it('relays deterministic checkpoints without loading inactive sidecars', () => {
    expect(plan({ state: 'AWAIT_USER', status: 'ask_user', questions_file: 'q.json' }, 'relay')).toMatchObject({
      action: 'relay_questions', master_required: false, sidecars: [], questions_file: 'q.json',
    });
    expect(plan({ state: 'CONTEXT_DETECT', status: 'blocked', blocking_items: [{ id: 'brand' }] }, 'relay')).toMatchObject({
      action: 'relay_blocked', master_required: false, sidecars: [], blocking_ids: ['brand'],
    });
  });

  it('loads only the active master phase contract', () => {
    expect(plan({ state: 'PROPOSE_PLAN', prefilled_slots: { audience: 'dev' } }).sidecars)
      .toEqual(['master-execution-phases.md']);
    expect(plan({ state: 'SLOT_GATE' }).sidecars).toEqual(['master-conversation.md']);
    expect(plan({ state: 'INTAKE' }).sidecars)
      .toEqual(['master-conversation.md', 'master-legacy-production.md']);
    expect(plan({ state: 'DESIGN_GENERATION', visual_grounding_required: true }).sidecars)
      .toEqual(['master-execution-phases.md', 'master-visual-grounding.md']);
  });
});
