import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { runInstallSkills } from '../../../src/cli/install-skills.js';

describe('installed harness context plan', () => {
  let root: string;

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'omd-installed-context-plan-'));
    vi.spyOn(console, 'log').mockImplementation(() => undefined);
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    rmSync(root, { recursive: true, force: true });
  });

  it('executes the same provider-zero relay contract in Claude, Codex, and OpenCode installs', async () => {
    const code = await runInstallSkills({
      dir: root,
      agents: ['claude-code', 'codex', 'opencode'],
      skillsFilter: ['omd-harness'],
      agentsFilter: ['omd-master'],
    });
    expect(code).toBe(0);

    const hosts = [
      { id: 'claude-code', data: '.claude/data', skill: '.claude/skills' },
      { id: 'codex', data: '.codex/data', skill: '.agents/skills' },
      { id: 'opencode', data: '.opencode/data', skill: '.opencode/skills' },
    ];
    const scenarios = [
      {
        id: 'ready',
        handoff: { state: 'PROPOSE_PLAN' },
        expected: {
          action: 'resume_master',
          master_required: true,
          sidecars: ['master-execution-phases.md'],
          blocking_ids: [],
        },
      },
      {
        id: 'questions',
        handoff: { state: 'AWAIT_USER', status: 'ask_user', questions_file: 'questions.json' },
        expected: {
          action: 'relay_questions',
          master_required: false,
          sidecars: [],
          blocking_ids: [],
        },
      },
      {
        id: 'blocked',
        handoff: {
          state: 'CONTEXT_DETECT',
          status: 'blocked',
          blocking_items: [{ id: 'brand-reference-commitment' }],
        },
        expected: {
          action: 'relay_blocked',
          master_required: false,
          sidecars: [],
          blocking_ids: ['brand-reference-commitment'],
        },
      },
    ];

    for (const host of hosts) {
      const helper = join(root, host.data, 'scripts/design-harness-context-plan.cjs');
      expect(existsSync(helper), `${host.id} helper`).toBe(true);
      expect(
        existsSync(join(root, host.skill, 'omd-harness/references/master-execution-phases.md')),
        `${host.id} execution sidecar`,
      ).toBe(true);

      for (const scenario of scenarios) {
        const runDir = join(root, '.omd-smoke', host.id, scenario.id);
        mkdirSync(join(runDir, 'handoff'), { recursive: true });
        writeFileSync(
          join(runDir, 'handoff/.handoff.json'),
          `${JSON.stringify(scenario.handoff, null, 2)}\n`,
          'utf8',
        );

        const result = spawnSync(process.execPath, [helper, root, runDir, 'relay'], {
          cwd: root,
          encoding: 'utf8',
        });
        expect(result.status, `${host.id}/${scenario.id}: ${result.stderr}`).toBe(0);

        const plan = JSON.parse(readFileSync(join(runDir, 'handoff/context-plan.json'), 'utf8'));
        expect(plan.action).toBe(scenario.expected.action);
        expect(plan.master_required).toBe(scenario.expected.master_required);
        expect(plan.sidecars).toEqual(scenario.expected.sidecars);
        expect(plan.blocking_ids).toEqual(scenario.expected.blocking_ids);
      }
    }
  });
});
