import { describe, expect, it } from 'vitest';
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
    expect(manifest.work_packet.implementation_owner).toBe('main-agent');
    expect(manifest.work_packet.required).toContain('consumer_route');
    expect(manifest.work_packet.required).toContain('unknowns');
  });

  it('wraps the actual user task instead of returning an unrelated canned example', () => {
    const workflow = selectWorkflow('이 온보딩 UI를 검수하고 바로 고쳐줘', manifest);
    const prompt = buildRoutedPrompt('이 온보딩 UI를 검수하고 바로 고쳐줘', workflow, 'ko');
    expect(prompt).toContain('이 온보딩 UI를 검수하고 바로 고쳐줘.');
    expect(prompt).toContain('같은 경로·viewport·state');
    expect(prompt).not.toContain('가격 페이지');
  });
});
