import pc from 'picocolors';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export interface WorkflowDefinition {
  id: string;
  label: string;
  label_ko: string;
  entry_skill: string;
  implementation_owner: string;
  specialists: string[];
  stages: string[];
  prompt_en: string;
  prompt_ko: string;
  route_suffix_en: string;
  route_suffix_ko: string;
}

export interface WorkflowManifest {
  schema_version: number;
  product_version: string;
  principles: string[];
  execution_assurance: {
    contract_version: number;
    levels: Record<string, string>;
    channels: Array<{
      id: 'claude-code' | 'codex' | 'opencode' | 'cursor';
      skill_contract: 'advisory';
      host_feedback: string[];
      native_policy_surface: string;
      omd_policy_adapter_default: 'not-installed' | 'opt-in';
      omd_policy_adapter_opt_in?: {
        flag: '--proof-policy';
        scope: 'project' | 'project-git-root';
        enforcement: 'pre-tool-deny-after-host-trust';
        remove_flag: '--remove-proof-policy';
      };
      host_native_pretool_blocking: boolean;
      proof_trace: string;
      effective_level: 'skill-contract' | 'host-feedback' | 'host-policy-enforced';
    }>;
    harness: {
      checkpoint_control: string;
      host_native_pretool_blocking: boolean;
    };
    benchmark_controller: {
      supported_runtimes: string[];
      proof_trace: string;
      enforcement: string;
      execution_blocking: boolean;
    };
  };
  work_packet: {
    required: string[];
    intents: string[];
    implementation_owner: string;
    change_authority: string;
    repair_advisory: {
      mode: string;
      risk_areas_max: number;
      findings_max: number;
      target_words: number;
      first_safe_edit_required: boolean;
      advisory_to_first_edit_seconds_max: number;
      first_transaction: string;
      contract_drift_disposition: string;
    };
    specialist_response: string[];
  };
  workflows: WorkflowDefinition[];
}

export interface WorkflowOptions {
  json?: boolean;
  lang?: 'en' | 'ko';
}

export interface WorkflowDecision {
  workflow: WorkflowDefinition;
  confidence: 'high' | 'medium' | 'low';
  reason: string;
  matched_signals: string[];
  ambiguous: boolean;
}

function bundleRoot(): string {
  let current = dirname(fileURLToPath(import.meta.url));
  for (let depth = 0; depth < 8; depth += 1) {
    if (existsSync(join(current, 'data', 'workflow-capabilities.json'))) return current;
    const parent = dirname(current);
    if (parent === current) break;
    current = parent;
  }
  throw new Error('workflow-capabilities.json is missing from the oh-my-design package');
}

export function loadWorkflowManifest(): WorkflowManifest {
  const path = join(bundleRoot(), 'data', 'workflow-capabilities.json');
  const parsed: unknown = JSON.parse(readFileSync(path, 'utf8'));
  if (
    typeof parsed !== 'object' || parsed === null ||
    !Array.isArray((parsed as WorkflowManifest).workflows) ||
    (parsed as WorkflowManifest).workflows.length === 0
  ) {
    throw new Error('workflow-capabilities.json has an invalid workflow list');
  }
  return parsed as WorkflowManifest;
}

function includesAny(value: string, signals: string[]): boolean {
  return signals.some((signal) => value.includes(signal));
}

export function selectWorkflowDecision(
  task: string,
  manifest = loadWorkflowManifest(),
): WorkflowDecision {
  const value = task.toLocaleLowerCase();
  const byId = (id: string): WorkflowDefinition => {
    const workflow = manifest.workflows.find((item) => item.id === id);
    if (!workflow) throw new Error(`workflow ${id} is missing from the manifest`);
    return workflow;
  };

  const designSystemMentioned = includesAny(value, [
    'design.md', 'design md', 'design system', '디자인 시스템', '디자인시스템', 'デザインシステム', '設計系統', '设计系统',
  ]);
  const existingSurfaceMentioned = includesAny(value, [
    'existing', 'current', 'page', 'screen', 'ui', 'route', 'flow', 'pricing', 'checkout', 'home', 'settings',
    '기존', '현재', '페이지', '화면', '경로', '플로우', '가격', '결제', '홈', '설정',
    '既存', '現在', 'ページ', '画面', '経路', 'フロー', '料金', '決済', '設定',
    '现有', '現有', '当前', '當前', '页面', '頁面', '画面', '流程', '定价', '定價', '结算', '結算', '设置', '設定',
  ]);

  const localized = includesAny(value, [
    'translate', 'localize', 'localise', 'locale', '번역', '현지화', '다국어', '翻訳', 'ローカライズ', '本地化', '在地化',
  ]);
  if (localized) return {
    workflow: byId('localize-product-language'), confidence: 'high', reason: 'explicit-localization-intent', matched_signals: ['localization'], ambiguous: false,
  };

  const newSurface = includesAny(value, [
    'from scratch', 'new surface', 'new landing', 'new home', 'prototype', '처음부터', '새 화면', '새로운 화면', '새 랜딩', '프로토타입', '一から', '新しい画面', '從頭', '新頁面',
  ]);
  if (newSurface) return {
    workflow: byId('create-new-surface'), confidence: 'high', reason: 'explicit-new-surface-intent', matched_signals: ['new-surface'], ambiguous: false,
  };

  const changeRequested = includesAny(value, [
    'fix', 'improve', 'change', 'implement', 'build', 'redesign', '고쳐', '개선', '바꿔', '수정', '구현', '만들어', '直して', '改善', '実装', '修正', '改善', '實作',
  ]);
  const auditRequested = includesAny(value, [
    'audit', 'review', 'analyze', 'analyse', 'diagnose', '검수', '감사', '리뷰', '분석', '진단', '監査', 'レビュー', '分析', '審查', '檢查',
  ]);
  const noChangeRequested = includesAny(value, [
    'do not change', "don't change", 'without changing', 'no code changes', 'read only', 'read-only',
    '바꾸지 마', '변경하지 마', '수정하지 마', '코드 변경 없이', '읽기 전용',
    '変更しない', '変更せず', '修正しない', '読み取り専用',
    '不要修改', '不修改', '不要變更', '不變更', '只读', '唯讀',
  ]);
  if (auditRequested && (noChangeRequested || !changeRequested)) return {
    workflow: byId('audit-existing-ui'),
    confidence: noChangeRequested ? 'high' : 'medium',
    reason: noChangeRequested ? 'explicit-audit-without-change' : 'audit-without-change-signal',
    matched_signals: ['audit', ...(noChangeRequested ? ['no-change'] : []), ...(existingSurfaceMentioned ? ['existing-surface'] : [])],
    ambiguous: !noChangeRequested && !existingSurfaceMentioned,
  };

  if (designSystemMentioned && !(changeRequested && existingSurfaceMentioned)) {
    return {
      workflow: byId('establish-design-system'), confidence: 'high', reason: 'explicit-design-system-intent', matched_signals: ['design-system'], ambiguous: false,
    };
  }

  if (changeRequested && existingSurfaceMentioned) return {
    workflow: byId('repair-existing-ui'),
    confidence: 'high',
    reason: designSystemMentioned ? 'design-context-existing-surface-change' : 'explicit-existing-surface-change',
    matched_signals: [...(designSystemMentioned ? ['design-system-context'] : []), 'change', 'existing-surface'],
    ambiguous: false,
  };
  if (changeRequested) return {
    workflow: byId('repair-existing-ui'), confidence: 'medium', reason: 'change-intent-without-surface', matched_signals: ['change'], ambiguous: true,
  };
  return {
    workflow: byId('repair-existing-ui'), confidence: 'low', reason: 'default-repair-fallback', matched_signals: [], ambiguous: true,
  };
}

export function selectWorkflow(task: string, manifest = loadWorkflowManifest()): WorkflowDefinition {
  return selectWorkflowDecision(task, manifest).workflow;
}

function promptFor(workflow: WorkflowDefinition, lang: 'en' | 'ko'): string {
  return lang === 'ko' ? workflow.prompt_ko : workflow.prompt_en;
}

export function buildRoutedPrompt(
  task: string,
  workflow: WorkflowDefinition,
  lang: 'en' | 'ko',
): string {
  const normalizedTask = task.trim().replace(/[.!?。！？]+$/, '');
  const suffix = lang === 'ko' ? workflow.route_suffix_ko : workflow.route_suffix_en;
  return `${normalizedTask}. ${suffix}`;
}

function printWorkflow(workflow: WorkflowDefinition, lang: 'en' | 'ko', task?: string): void {
  const label = lang === 'ko' ? workflow.label_ko : workflow.label;
  console.log(`${pc.bold(label)}  ${pc.dim(workflow.id)}`);
  console.log(`  ${pc.dim(lang === 'ko' ? '에이전트 안에서 입력:' : 'Paste inside your coding agent:')}`);
  console.log(`  ${pc.cyan(task ? buildRoutedPrompt(task, workflow, lang) : promptFor(workflow, lang))}`);
  console.log(`  ${pc.dim(`path: ${workflow.entry_skill} → ${workflow.stages.join(' → ')}`)}`);
}

export async function runWorkflows(task?: string, opts: WorkflowOptions = {}): Promise<number> {
  const manifest = loadWorkflowManifest();
  const lang = opts.lang ?? 'en';
  const decision = task?.trim() ? selectWorkflowDecision(task, manifest) : null;
  const selected = decision?.workflow ?? null;

  if (opts.json) {
    console.log(JSON.stringify({
      ...manifest,
      selected_workflow: selected?.id ?? null,
      selected_workflow_decision: decision ? {
        workflow_id: decision.workflow.id,
        confidence: decision.confidence,
        reason: decision.reason,
        matched_signals: decision.matched_signals,
        ambiguous: decision.ambiguous,
      } : null,
    }, null, 2));
    return 0;
  }

  console.log(pc.bold(lang === 'ko' ? 'OmD 작업 경로' : 'OmD workflows'));
  console.log(pc.dim(
    lang === 'ko'
      ? '아래 문장은 터미널이 아니라 Claude Code, Codex, OpenCode 또는 Cursor 대화창에 입력하세요.'
      : 'Paste these prompts into Claude Code, Codex, OpenCode, or Cursor — not your terminal.',
  ));
  console.log('');

  if (selected) {
    printWorkflow(selected, lang, task);
    console.log('');
    if (decision?.ambiguous) {
      console.log(pc.yellow(lang === 'ko'
        ? `경로 확신도 ${decision.confidence}: 기존 UI 개선으로 처리합니다. 새 화면·검수만·현지화·DESIGN.md 구축 중 원하는 범위를 문장에 넣으면 더 정확해집니다.`
        : `Routing confidence ${decision.confidence}: treating this as an existing UI repair. Name new surface, audit only, localization, or DESIGN.md setup for a more exact route.`));
      console.log('');
    }
    console.log(pc.dim(lang === 'ko'
      ? '터미널은 설치와 진단에만 사용: npx oh-my-design-cli@latest · omd doctor'
      : 'Use the terminal only for setup and diagnosis: npx oh-my-design-cli@latest · omd doctor'));
    return 0;
  }

  for (const workflow of manifest.workflows) {
    printWorkflow(workflow, lang);
    console.log('');
  }
  return 0;
}
