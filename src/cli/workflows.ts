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
  work_packet: {
    required: string[];
    intents: string[];
    implementation_owner: string;
    specialist_response: string[];
  };
  workflows: WorkflowDefinition[];
}

export interface WorkflowOptions {
  json?: boolean;
  lang?: 'en' | 'ko';
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

export function selectWorkflow(task: string, manifest = loadWorkflowManifest()): WorkflowDefinition {
  const value = task.toLocaleLowerCase();
  const byId = (id: string): WorkflowDefinition => {
    const workflow = manifest.workflows.find((item) => item.id === id);
    if (!workflow) throw new Error(`workflow ${id} is missing from the manifest`);
    return workflow;
  };

  if (includesAny(value, [
    'design.md', 'design md', 'design system', '디자인 시스템', '디자인시스템', 'デザインシステム', '設計系統',
  ])) return byId('establish-design-system');

  if (includesAny(value, [
    'translate', 'localize', 'localise', 'locale', '번역', '현지화', '다국어', '翻訳', 'ローカライズ', '本地化', '在地化',
  ])) return byId('localize-product-language');

  if (includesAny(value, [
    'from scratch', 'new surface', 'new landing', 'new home', 'prototype', '처음부터', '새 화면', '새로운 화면', '새 랜딩', '프로토타입', '一から', '新しい画面', '從頭', '新頁面',
  ])) return byId('create-new-surface');

  const changeRequested = includesAny(value, [
    'fix', 'improve', 'change', 'implement', 'build', 'redesign', '고쳐', '개선', '바꿔', '수정', '구현', '만들어', '直して', '改善', '実装', '修正', '改善', '實作',
  ]);
  if (!changeRequested && includesAny(value, [
    'audit', 'review', 'analyze', 'analyse', 'diagnose', '검수', '감사', '리뷰', '분석', '진단', '監査', 'レビュー', '分析', '審查', '檢查',
  ])) return byId('audit-existing-ui');

  return byId('repair-existing-ui');
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
  const selected = task?.trim() ? selectWorkflow(task, manifest) : null;

  if (opts.json) {
    console.log(JSON.stringify({
      ...manifest,
      selected_workflow: selected?.id ?? null,
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
