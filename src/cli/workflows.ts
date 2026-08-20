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
  locales: Record<'ja' | 'zh-CN' | 'zh-TW', {
    label: string;
    prompt: string;
    route_suffix: string;
  }>;
}

export type WorkflowLanguage = 'en' | 'ko' | 'ja' | 'zh-CN' | 'zh-TW';

export interface WorkflowManifest {
  schema_version: number;
  product_version: string;
  locale_contract: {
    source_locale: 'ko';
    source_revision: string;
    supported_locales: WorkflowLanguage[];
  };
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
  lang?: WorkflowLanguage;
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
    'from scratch', 'new product', 'new app', 'new surface', 'new landing', 'new home', 'prototype', 'autopilot', 'one shot', 'one-shot',
    '처음부터', '새 제품', '새 서비스', '새 앱', '새 화면', '새로운 화면', '새 랜딩', '프로토타입', '자율', '원샷', '알아서',
    '一から', '新しい製品', '新しいアプリ', '新しい画面', '自律', '從頭', '从头', '新產品', '新产品', '新應用', '新应用', '新頁面',
  ]);
  const guidedCreation = includesAny(value, [
    'checkpoint', 'review each step', 'review with me', 'guided', '체크포인트', '단계마다 검토', '나와 검토', '승인받',
    '確認しながら', 'チェックポイント', '逐步确认', '逐步確認',
  ]);
  if (newSurface) return {
    workflow: byId(guidedCreation ? 'create-new-surface' : 'autonomous-product-creation'),
    confidence: 'high',
    reason: guidedCreation ? 'explicit-guided-new-surface-intent' : 'explicit-autonomous-new-surface-intent',
    matched_signals: ['new-surface', guidedCreation ? 'guided-checkpoints' : 'autonomous'],
    ambiguous: false,
  };

  const changeRequested = includesAny(value, [
    'fix', 'repair', 'improve', 'change', 'implement', 'build', 'redesign', '고쳐', '개선', '바꿔', '수정', '구현', '만들어', '直して', '改善', '実装', '修正', '修改', '改进', '改進', '實作',
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

export function normalizeWorkflowLanguage(value: string): WorkflowLanguage | null {
  const normalized = value.trim().toLocaleLowerCase();
  if (normalized === 'en' || normalized === 'ko' || normalized === 'ja') return normalized;
  if (normalized === 'zh-cn' || normalized === 'zh_hans' || normalized === 'zh-hans') return 'zh-CN';
  if (normalized === 'zh-tw' || normalized === 'zh_hant' || normalized === 'zh-hant') return 'zh-TW';
  return null;
}

function localizedWorkflowCopy(workflow: WorkflowDefinition, lang: WorkflowLanguage) {
  if (lang === 'en') return { label: workflow.label, prompt: workflow.prompt_en, routeSuffix: workflow.route_suffix_en };
  if (lang === 'ko') return { label: workflow.label_ko, prompt: workflow.prompt_ko, routeSuffix: workflow.route_suffix_ko };
  const copy = workflow.locales[lang];
  return { label: copy.label, prompt: copy.prompt, routeSuffix: copy.route_suffix };
}

function promptFor(workflow: WorkflowDefinition, lang: WorkflowLanguage): string {
  return localizedWorkflowCopy(workflow, lang).prompt;
}

export function buildRoutedPrompt(
  task: string,
  workflow: WorkflowDefinition,
  lang: WorkflowLanguage,
): string {
  const normalizedTask = task.trim().replace(/[.!?。！？]+$/, '');
  const suffix = localizedWorkflowCopy(workflow, lang).routeSuffix;
  return `${normalizedTask}. ${suffix}`;
}

const CHROME: Record<WorkflowLanguage, {
  heading: string;
  paste: string;
  terminal: string;
  ambiguous: (confidence: string) => string;
}> = {
  en: {
    heading: 'OmD workflows',
    paste: 'Paste these prompts into Claude Code, Codex, OpenCode, or Cursor — not your terminal.',
    terminal: 'Use the terminal only for setup and diagnosis: npx oh-my-design-cli@latest · omd doctor',
    ambiguous: (confidence) => `Routing confidence ${confidence}: treating this as an existing UI repair. Name new surface, audit only, localization, or DESIGN.md setup for a more exact route.`,
  },
  ko: {
    heading: 'OmD 작업 경로',
    paste: '아래 문장은 터미널이 아니라 Claude Code, Codex, OpenCode 또는 Cursor 대화창에 입력하세요.',
    terminal: '터미널은 설치와 진단에만 사용: npx oh-my-design-cli@latest · omd doctor',
    ambiguous: (confidence) => `경로 확신도 ${confidence}: 기존 UI 개선으로 처리합니다. 새 화면·검수만·현지화·DESIGN.md 구축 중 원하는 범위를 문장에 넣으면 더 정확해집니다.`,
  },
  ja: {
    heading: 'OmDの作業フロー',
    paste: '以下の依頼文はターミナルではなく、Claude Code、Codex、OpenCode、Cursorのチャットに入力してください。',
    terminal: 'ターミナルはセットアップと診断にのみ使用します: npx oh-my-design-cli@latest · omd doctor',
    ambiguous: (confidence) => `判定の確度は${confidence}です。既存UIの改善として進めます。新規画面、確認のみ、ローカライズ、DESIGN.mdの作成など、目的を依頼文に加えると正確に選べます。`,
  },
  'zh-CN': {
    heading: 'OmD 工作流程',
    paste: '请把下面的任务说明发给 Claude Code、Codex、OpenCode 或 Cursor，不要粘贴到终端。',
    terminal: '终端只用于安装和诊断：npx oh-my-design-cli@latest · omd doctor',
    ambiguous: (confidence) => `当前路由置信度为 ${confidence}，将按改进现有界面处理。请注明新建页面、仅检查、本地化或建立 DESIGN.md，以便选择更准确的流程。`,
  },
  'zh-TW': {
    heading: 'OmD 工作流程',
    paste: '請把下方工作說明傳給 Claude Code、Codex、OpenCode 或 Cursor，不要貼到終端機。',
    terminal: '終端機只用於安裝與診斷：npx oh-my-design-cli@latest · omd doctor',
    ambiguous: (confidence) => `目前的流程判定信心為 ${confidence}，將以改善現有介面處理。請註明新增頁面、只做檢查、在地化或建立 DESIGN.md，系統就能選擇更準確的流程。`,
  },
};

function printWorkflow(workflow: WorkflowDefinition, lang: WorkflowLanguage, task?: string): void {
  const copy = localizedWorkflowCopy(workflow, lang);
  const pasteLabel = lang === 'ko' ? 'AI 코딩 도구에 입력:' : lang === 'ja' ? 'AIコーディングツールに入力:' : lang === 'zh-CN' ? '发送给 AI 编程助手：' : lang === 'zh-TW' ? '傳給 AI 程式助理：' : 'Paste inside your coding agent:';
  const label = copy.label;
  console.log(`${pc.bold(label)}  ${pc.dim(workflow.id)}`);
  console.log(`  ${pc.dim(pasteLabel)}`);
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

  console.log(pc.bold(CHROME[lang].heading));
  console.log(pc.dim(CHROME[lang].paste));
  console.log('');

  if (selected) {
    printWorkflow(selected, lang, task);
    console.log('');
    if (decision?.ambiguous) {
      console.log(pc.yellow(CHROME[lang].ambiguous(decision.confidence)));
      console.log('');
    }
    console.log(pc.dim(CHROME[lang].terminal));
    return 0;
  }

  for (const workflow of manifest.workflows) {
    printWorkflow(workflow, lang);
    console.log('');
  }
  return 0;
}
