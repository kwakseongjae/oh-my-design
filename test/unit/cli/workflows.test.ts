import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  buildRoutedPrompt,
  loadWorkflowManifest,
  selectWorkflow,
} from '../../../src/cli/workflows.js';

describe('omd workflows', () => {
  const manifest = loadWorkflowManifest();

  it('ships one unique, executable path per declared workflow', () => {
    expect(manifest.schema_version).toBe(1);
    expect(new Set(manifest.workflows.map((workflow) => workflow.id)).size)
      .toBe(manifest.workflows.length);
    for (const workflow of manifest.workflows) {
      expect(workflow.entry_skill).toMatch(/^omd:/);
      expect(workflow.stages.length).toBeGreaterThan(2);
      expect(workflow.prompt_en.length).toBeGreaterThan(30);
      expect(workflow.prompt_ko.length).toBeGreaterThan(20);
    }
  });

  it.each([
    ['Please fix the existing pricing page', 'repair-existing-ui'],
    ['기존 홈 화면을 검수만 하고 코드는 바꾸지 마', 'audit-existing-ui'],
    ['Design a new landing from scratch', 'create-new-surface'],
    ['이 저장소에 DESIGN.md와 디자인 시스템 만들어줘', 'establish-design-system'],
    ['Translate and localize the docs into five languages', 'localize-product-language'],
    ['이 온보딩 UI를 검수하고 바로 고쳐줘', 'repair-existing-ui'],
  ])('routes %s to %s', (task, expected) => {
    expect(selectWorkflow(task, manifest).id).toBe(expected);
  });

  it('makes one implementation owner and same-surface verification explicit', () => {
    expect(manifest.principles).toContain('one-implementation-owner');
    expect(manifest.principles).toContain('same-surface-reverification');
    expect(manifest.principles).toContain('preserve-observable-contract');
    expect(manifest.work_packet.implementation_owner).toBe('main-agent');
    expect(manifest.work_packet.required).toContain('consumer_route');
    expect(manifest.work_packet.required).toContain('unknowns');
    expect(manifest.work_packet.required).toContain('protected_contract');
    expect(manifest.work_packet.required).toContain('protected_contract.change_authority');
    expect(manifest.work_packet.change_authority).toBe('original-user-task-only');
    expect(manifest.work_packet.repair_advisory.mode).toBe('bounded-repair-advisory');
    expect(manifest.work_packet.repair_advisory.findings_max).toBe(3);
    expect(manifest.work_packet.repair_advisory.target_words).toBe(300);
    expect(manifest.work_packet.repair_advisory.first_safe_edit_required).toBe(true);
    expect(manifest.work_packet.repair_advisory.advisory_to_first_edit_seconds_max).toBe(90);
    expect(manifest.work_packet.repair_advisory.first_transaction)
      .toBe('targeted-acceptance-relevant-edit');
    expect(manifest.work_packet.specialist_response).toContain('first_safe_edit');
  });

  it('does not promote advisory prose or post-tool feedback as host enforcement', () => {
    const assurance = manifest.execution_assurance;
    expect(assurance.contract_version).toBe(1);
    expect(assurance.levels['host-policy-enforced']).toContain('before execution');
    expect(assurance.channels.map((channel) => channel.id).sort()).toEqual([
      'claude-code',
      'codex',
      'cursor',
      'opencode',
    ]);
    expect(assurance.channels.every((channel) => channel.skill_contract === 'advisory')).toBe(true);
    expect(assurance.channels.every((channel) => channel.native_policy_surface.length > 0))
      .toBe(true);
    expect(assurance.channels.every(
      (channel) => channel.omd_policy_adapter_default === 'not-installed',
    ))
      .toBe(true);
    expect(assurance.channels.every((channel) => channel.host_native_pretool_blocking === false))
      .toBe(true);
    expect(assurance.channels.find((channel) => channel.id === 'claude-code')?.effective_level)
      .toBe('host-feedback');
    expect(
      assurance.channels
        .filter((channel) => channel.id !== 'claude-code')
        .every((channel) => channel.effective_level === 'skill-contract'),
    ).toBe(true);
    expect(assurance.harness.host_native_pretool_blocking).toBe(false);
    expect(assurance.benchmark_controller).toMatchObject({
      supported_runtimes: ['codex', 'cursor'],
      enforcement: 'promotion-report',
      execution_blocking: false,
    });
  });

  it('keeps the Claude assurance claim aligned with the hooks that actually ship', () => {
    const settings = JSON.parse(readFileSync(join(process.cwd(), '.claude/settings.json'), 'utf8'));
    const preToolGroups = settings.hooks?.PreToolUse ?? [];
    const omdPreToolHooks = preToolGroups.flatMap(
      (group: { hooks?: Array<{ command?: string }> }) => group.hooks ?? [],
    ).filter((hook: { command?: string }) => hook.command?.includes('/.claude/hooks/'));
    const claude = manifest.execution_assurance.channels.find(
      (channel) => channel.id === 'claude-code',
    );

    expect(omdPreToolHooks).toEqual([]);
    expect(claude?.host_native_pretool_blocking).toBe(false);
    expect(claude?.native_policy_surface).toBe('pre-tool-hook-deny');
    expect(claude?.omd_policy_adapter_default).toBe('not-installed');
    expect(claude?.host_feedback).toContain('post-edit-context');
  });

  it('wraps the actual user task instead of returning an unrelated canned example', () => {
    const workflow = selectWorkflow('이 온보딩 UI를 검수하고 바로 고쳐줘', manifest);
    const prompt = buildRoutedPrompt('이 온보딩 UI를 검수하고 바로 고쳐줘', workflow, 'ko');
    expect(prompt).toContain('이 온보딩 UI를 검수하고 바로 고쳐줘.');
    expect(prompt).toContain('같은 경로·viewport·state');
    expect(prompt).not.toContain('가격 페이지');
  });
});
