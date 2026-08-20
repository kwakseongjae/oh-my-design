#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import {
  existsSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const CHANNELS = ['claude-code', 'codex', 'opencode', 'cursor'];
const CHANNEL_LOCALES = {
  'claude-code': 'en',
  codex: 'ko',
  opencode: 'zh-CN',
  cursor: 'ja',
};

const TASKS = {
  en: {
    establish: 'Set up a design system for a family meal-planning app.',
    repair: 'Use DESIGN.md to repair the existing pricing page.',
  },
  ko: {
    establish: '가족 식단 앱의 디자인 시스템을 잡아줘.',
    repair: 'DESIGN.md를 기준으로 기존 가격 화면을 수정해줘.',
  },
  ja: {
    establish: '家族向け食事管理アプリのデザインシステムを作ってください。',
    repair: 'DESIGN.mdを基準に既存の料金画面を修正してください。',
  },
  'zh-CN': {
    establish: '为家庭饮食规划应用建立设计系统。',
    repair: '按照 DESIGN.md 修改现有价格页面。',
  },
};

function runCli(cli, args, allowedExitCodes = [0]) {
  const result = spawnSync(process.execPath, [cli, ...args], {
    encoding: 'utf8',
    env: { ...process.env, NO_COLOR: '1', CI: '1' },
  });
  if (!allowedExitCodes.includes(result.status)) {
    throw new Error(
      `CLI failed (${result.status}): ${args.join(' ')}\n${result.stderr || result.stdout}`,
    );
  }
  return result;
}

function parseJson(result, label) {
  try {
    return JSON.parse(result.stdout);
  } catch (error) {
    throw new Error(`${label} did not return JSON: ${error.message}\n${result.stdout}`);
  }
}

export function validateActivationFunnelReport(report) {
  const failures = [];
  if (report?.schema_version !== '0.1') failures.push('schema_version');
  if (report?.human_interventions !== 0) failures.push('human_interventions');
  if (report?.provider_calls !== 0) failures.push('provider_calls');
  if (report?.automated_steps_per_channel !== 5) failures.push('automated_steps_per_channel');
  if (!Number.isFinite(report?.elapsed_ms) || report.elapsed_ms > 30_000) failures.push('elapsed_ms');
  if (!Array.isArray(report?.channels) || report.channels.length !== 4) failures.push('channels');
  for (const channel of report?.channels ?? []) {
    if (channel.pre_design_state !== 'needs-design-md') failures.push(`${channel.id}:pre_design_state`);
    if (channel.establish_workflow !== 'establish-design-system') failures.push(`${channel.id}:establish_workflow`);
    if (channel.ready_state !== 'ready') failures.push(`${channel.id}:ready_state`);
    if (channel.repair_workflow !== 'repair-existing-ui') failures.push(`${channel.id}:repair_workflow`);
    if (channel.repair_ambiguous !== false) failures.push(`${channel.id}:repair_ambiguous`);
    if (channel.same_surface_reverification !== true) failures.push(`${channel.id}:same_surface_reverification`);
  }
  return { accepted: failures.length === 0, failures };
}

export function runLocalActivationFunnel({ cli }) {
  const started = performance.now();
  const rows = [];

  for (const channel of CHANNELS) {
    const root = mkdtempSync(join(tmpdir(), `omd-funnel-${channel}-`));
    const lang = CHANNEL_LOCALES[channel];
    try {
      runCli(cli, [
        'install-skills', '--dir', root, '--agent', channel, '--all', '--lang', lang,
      ]);

      const before = parseJson(
        runCli(cli, ['doctor', '--dir', root, '--json']),
        `${channel} pre-design doctor`,
      );
      const establish = parseJson(
        runCli(cli, ['route', TASKS[lang].establish, '--lang', lang, '--json']),
        `${channel} establish route`,
      );

      writeFileSync(
        join(root, 'DESIGN.md'),
        '# Project design\n\n## Verification\nReverify the same consumer route after implementation.\n',
      );

      const ready = parseJson(
        runCli(cli, ['doctor', '--dir', root, '--json']),
        `${channel} ready doctor`,
      );
      const repair = parseJson(
        runCli(cli, ['route', TASKS[lang].repair, '--lang', lang, '--json']),
        `${channel} repair route`,
      );

      rows.push({
        id: channel,
        locale: lang,
        pre_design_state: before.state,
        establish_workflow: establish.selected_workflow,
        deterministic_design_fixture: true,
        ready_state: ready.state,
        repair_workflow: repair.selected_workflow,
        repair_ambiguous: repair.selected_workflow_decision?.ambiguous,
        same_surface_reverification: repair.principles?.includes('same-surface-reverification') ?? false,
      });
    } finally {
      if (existsSync(root)) rmSync(root, { recursive: true, force: true });
    }
  }

  const report = {
    schema_version: '0.1',
    status: 'LOCAL_ACTIVATION_FUNNEL_COMPLETE',
    channels: rows,
    automated_steps_per_channel: 5,
    human_interventions: 0,
    provider_calls: 0,
    model_exposures: 0,
    elapsed_ms: Math.round(performance.now() - started),
    claim_boundary: 'Technical install-to-actionable-workflow funnel only; the deterministic DESIGN.md fixture is not a model-generated resolved surface.',
  };
  const validation = validateActivationFunnelReport(report);
  return { ...report, validation };
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const here = dirname(fileURLToPath(import.meta.url));
  const cli = resolve(here, '../../dist/bin/oh-my-design.js');
  if (!existsSync(cli)) throw new Error('Build the CLI first: npm run build');
  const report = runLocalActivationFunnel({ cli });
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  if (!report.validation.accepted) process.exitCode = 1;
}
