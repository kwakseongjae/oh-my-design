import { describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  buildRoutedPrompt,
  loadWorkflowManifest,
  normalizeWorkflowLanguage,
  runWorkflows,
  selectWorkflow,
  selectWorkflowDecision,
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
      for (const locale of ['ja', 'zh-CN', 'zh-TW'] as const) {
        expect(workflow.locales[locale].label.length).toBeGreaterThan(3);
        expect(workflow.locales[locale].prompt.length).toBeGreaterThan(20);
        expect(workflow.locales[locale].route_suffix.length).toBeGreaterThan(20);
      }
    }
    expect(manifest.locale_contract).toEqual({
      source_locale: 'ko',
      source_revision: 'workflow-capabilities-ko-v2',
      supported_locales: ['en', 'ko', 'ja', 'zh-CN', 'zh-TW'],
    });
  });

  it('normalizes all five supported locale flags without falling back', () => {
    expect(normalizeWorkflowLanguage('en')).toBe('en');
    expect(normalizeWorkflowLanguage('ko')).toBe('ko');
    expect(normalizeWorkflowLanguage('ja')).toBe('ja');
    expect(normalizeWorkflowLanguage('zh-cn')).toBe('zh-CN');
    expect(normalizeWorkflowLanguage('zh_Hans')).toBe('zh-CN');
    expect(normalizeWorkflowLanguage('zh-tw')).toBe('zh-TW');
    expect(normalizeWorkflowLanguage('zh_Hant')).toBe('zh-TW');
    expect(normalizeWorkflowLanguage('fr')).toBeNull();
  });

  it.each([
    ['Please fix the existing pricing page', 'repair-existing-ui'],
    ['기존 홈 화면을 검수만 하고 코드는 바꾸지 마', 'audit-existing-ui'],
    ['Design a new landing from scratch', 'autonomous-product-creation'],
    ['Design a new landing from scratch and stop at each checkpoint', 'create-new-surface'],
    ['새 가족 식단 앱을 처음부터 알아서 만들어줘', 'autonomous-product-creation'],
    ['이 저장소에 DESIGN.md와 디자인 시스템 만들어줘', 'establish-design-system'],
    ['Translate and localize the docs into five languages', 'localize-product-language'],
    ['이 온보딩 UI를 검수하고 바로 고쳐줘', 'repair-existing-ui'],
    ['Use DESIGN.md to fix the existing pricing page', 'repair-existing-ui'],
    ['Use DESIGN.md to repair the existing pricing page', 'repair-existing-ui'],
    ['DESIGN.md를 적용해서 기존 홈 화면을 고쳐줘', 'repair-existing-ui'],
    ['DESIGN.mdを使って既存の設定画面を改善して', 'repair-existing-ui'],
    ['使用 DESIGN.md 改善现有结算页面', 'repair-existing-ui'],
    ['按照 DESIGN.md 修改现有价格页面', 'repair-existing-ui'],
    ['依照 DESIGN.md 修改現有價格頁面', 'repair-existing-ui'],
    ['Audit the existing checkout UI against DESIGN.md and do not change code', 'audit-existing-ui'],
    ['DESIGN.md 기준으로 기존 설정 화면을 검수하되 코드는 수정하지 마', 'audit-existing-ui'],
  ])('routes %s to %s', (task, expected) => {
    expect(selectWorkflow(task, manifest).id).toBe(expected);
  });

  it('makes one implementation owner and same-surface verification explicit', () => {
    expect(manifest.principles).toContain('one-implementation-owner');
    expect(manifest.principles).toContain('selective-authority-escalation');
    expect(manifest.principles).toContain('design-system-before-reference-selection');
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

  it('exposes routing confidence and ambiguity instead of hiding a fallback', () => {
    expect(selectWorkflowDecision('DESIGN.md를 적용해서 기존 홈 화면을 고쳐줘', manifest))
      .toMatchObject({
        workflow: { id: 'repair-existing-ui' },
        confidence: 'high',
        reason: 'design-context-existing-surface-change',
        matched_signals: ['design-system-context', 'change', 'existing-surface'],
        ambiguous: false,
      });
    expect(selectWorkflowDecision('Make it better', manifest)).toMatchObject({
      workflow: { id: 'repair-existing-ui' },
      confidence: 'low',
      reason: 'default-repair-fallback',
      matched_signals: [],
      ambiguous: true,
    });
    expect(selectWorkflowDecision('Please improve this', manifest)).toMatchObject({
      workflow: { id: 'repair-existing-ui' },
      confidence: 'medium',
      reason: 'change-intent-without-surface',
      ambiguous: true,
    });
  });

  it('keeps JSON backward compatible while exposing the machine-readable decision', async () => {
    const output: string[] = [];
    const log = vi.spyOn(console, 'log').mockImplementation((value = '') => output.push(String(value)));
    try {
      await expect(runWorkflows('Make it better', { json: true })).resolves.toBe(0);
    } finally {
      log.mockRestore();
    }
    const parsed = JSON.parse(output.join('\n'));
    expect(parsed.selected_workflow).toBe('repair-existing-ui');
    expect(parsed.selected_workflow_decision).toEqual({
      workflow_id: 'repair-existing-ui',
      confidence: 'low',
      reason: 'default-repair-fallback',
      matched_signals: [],
      ambiguous: true,
    });
  });

  it('shows a scope hint only for ambiguous interactive routing', async () => {
    const output: string[] = [];
    const log = vi.spyOn(console, 'log').mockImplementation((value = '') => output.push(String(value)));
    try {
      await expect(runWorkflows('Make it better', { lang: 'en' })).resolves.toBe(0);
      expect(output.join('\n')).toContain('Routing confidence low');
      output.length = 0;
      await expect(runWorkflows('Use DESIGN.md to fix the existing pricing page', { lang: 'en' }))
        .resolves.toBe(0);
      expect(output.join('\n')).not.toContain('Routing confidence');
    } finally {
      log.mockRestore();
    }
  });

  it.each([
    ['ja', 'OmDの作業フロー', 'AIコーディングツールに入力', '既存UIを改善'],
    ['zh-CN', 'OmD 工作流程', 'AI 编程助手', '改进现有界面'],
    ['zh-TW', 'OmD 工作流程', 'AI 程式助理', '改善現有介面'],
  ] as const)('prints independently adapted %s workflow copy', async (lang, heading, agentTerm, label) => {
    const output: string[] = [];
    const log = vi.spyOn(console, 'log').mockImplementation((value = '') => output.push(String(value)));
    try {
      await expect(runWorkflows('Use DESIGN.md to fix the existing pricing page', { lang }))
        .resolves.toBe(0);
    } finally {
      log.mockRestore();
    }
    const rendered = output.join('\n');
    expect(rendered).toContain(heading);
    expect(rendered).toContain(agentTerm);
    expect(rendered).toContain(label);
    expect(rendered).toContain('DESIGN.md');
    expect(rendered).toContain('320px');
    expect(rendered).toContain('200%');
    expect(rendered).not.toContain('Paste inside your coding agent');
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
    expect(assurance.channels.filter((channel) => channel.omd_policy_adapter_opt_in).map(
      (channel) => channel.id,
    )).toEqual(['claude-code', 'codex']);
    expect(assurance.channels.find((channel) => channel.id === 'codex')?.omd_policy_adapter_opt_in)
      .toMatchObject({
        flag: '--proof-policy',
        scope: 'project-git-root',
        remove_flag: '--remove-proof-policy',
      });
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
