import { describe, expect, it } from 'vitest';
import { buildUpdatePlan } from '../../../src/cli/update.js';
import type { DoctorReport } from '../../../src/cli/doctor.js';

function report(overrides: Partial<DoctorReport> = {}): DoctorReport {
  return {
    root: '/work/product',
    scope: 'project',
    state: 'ready',
    designMd: true,
    channels: [
      { id: 'claude-code', installed: true, ready: true, skills: 21, agents: 18, references: 440, issues: [] },
      { id: 'codex', installed: true, ready: true, skills: 21, agents: 18, references: 440, issues: [] },
      { id: 'opencode', installed: false, ready: false, skills: 0, agents: 0, references: 0, issues: [] },
      { id: 'cursor', installed: false, ready: false, skills: 0, agents: 0, references: 0, issues: [] },
    ],
    nextCommand: '',
    nextPrompt: '',
    manualAction: '',
    ...overrides,
  };
}

describe('omd update planning', () => {
  it('preserves project scope and only the installed channels', () => {
    const plan = buildUpdatePlan(report(), { dir: '/work/product', lang: 'ko' });
    expect(plan.allowed).toBe(true);
    expect(plan.scope).toBe('project');
    expect(plan.channels).toEqual(['claude-code', 'codex']);
    expect(plan.install).toMatchObject({
      dir: '/work/product', agents: ['claude-code', 'codex'], all: true,
      force: false, repairHooks: false, cursorRuleOnly: false, lang: 'ko',
    });
  });

  it('preserves the global scope', () => {
    const plan = buildUpdatePlan(report({ scope: 'global', root: '/home/user' }), { global: true });
    expect(plan.allowed).toBe(true);
    expect(plan.scope).toBe('global');
    expect(plan.install?.global).toBe(true);
    expect(plan.install?.force).toBe(false);
  });

  it('preserves legacy Cursor rule-only mode instead of adding skills', () => {
    const channels = report().channels.map((channel) => ({ ...channel, installed: false }));
    channels[3] = { ...channels[3], installed: true, ready: true, references: 440 };
    const plan = buildUpdatePlan(report({ channels }));
    expect(plan.channels).toEqual(['cursor']);
    expect(plan.cursorRuleOnly).toBe(true);
    expect(plan.install?.cursorRuleOnly).toBe(true);
  });

  it('refuses to turn an empty scope into a fresh install', () => {
    const channels = report().channels.map((channel) => ({ ...channel, installed: false }));
    const plan = buildUpdatePlan(report({ state: 'not-installed', channels }));
    expect(plan.allowed).toBe(false);
    expect(plan.install).toBeNull();
    expect(plan.reason).toContain('No existing');
  });

  it('fails closed when doctor requires manual action', () => {
    const plan = buildUpdatePlan(report({ manualAction: 'Remove the unsafe symlink first.' }));
    expect(plan.allowed).toBe(false);
    expect(plan.install).toBeNull();
    expect(plan.reason).toBe('Remove the unsafe symlink first.');
  });
});
