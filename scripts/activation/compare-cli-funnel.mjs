#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const TASK = 'DESIGN.md를 기준으로 기존 가격 화면을 수정해줘.';

function arg(name) {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : null;
}

function invoke(cli, args) {
  const started = performance.now();
  const result = spawnSync(process.execPath, [cli, ...args], {
    encoding: 'utf8',
    env: { ...process.env, NO_COLOR: '1', CI: '1' },
  });
  return {
    exit_code: result.status,
    stdout: result.stdout,
    stderr: result.stderr,
    elapsed_ms: Math.round(performance.now() - started),
  };
}

function maybeJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function trial(system, cli, trialIndex) {
  const root = mkdtempSync(`${tmpdir()}/omd-compare-${system}-${trialIndex}-`);
  try {
    const install = invoke(cli, ['install-skills', '--dir', root, '--agent', 'codex', '--all']);
    const doctor = invoke(cli, ['doctor', '--dir', root, '--json']);
    const route = invoke(cli, ['route', TASK, '--lang', 'ko', '--json']);
    const doctorJson = maybeJson(doctor.stdout);
    const routeJson = maybeJson(route.stdout);
    return {
      trial: trialIndex,
      install_exit: install.exit_code,
      install_ms: install.elapsed_ms,
      doctor_exit: doctor.exit_code,
      doctor_ms: doctor.elapsed_ms,
      pre_design_state: doctorJson?.state ?? null,
      route_exit: route.exit_code,
      route_ms: route.elapsed_ms,
      selected_workflow: routeJson?.selected_workflow ?? null,
      route_ambiguous: routeJson?.selected_workflow_decision?.ambiguous ?? null,
      actionable_workflow: route.exit_code === 0 && typeof routeJson?.selected_workflow === 'string',
      automated_steps_observed: route.exit_code === 0 ? 3 : 2,
      total_ms: install.elapsed_ms + doctor.elapsed_ms + route.elapsed_ms,
    };
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

function summarize(id, rows) {
  return {
    id,
    trials: rows,
    installs_succeeded: rows.filter((row) => row.install_exit === 0).length,
    doctors_reached_needs_design_md: rows.filter((row) => row.pre_design_state === 'needs-design-md').length,
    actionable_workflows: rows.filter((row) => row.actionable_workflow).length,
    median_install_ms: median(rows.map((row) => row.install_ms)),
    median_total_ms: median(rows.map((row) => row.total_ms)),
    steps_to_actionable_workflow: rows.every((row) => row.actionable_workflow) ? 3 : null,
  };
}

export function validateCliFunnelComparison(report) {
  const failures = [];
  if (report?.schema_version !== '0.1') failures.push('schema_version');
  if (report?.human_interventions !== 0) failures.push('human_interventions');
  if (report?.provider_calls !== 0) failures.push('provider_calls');
  if (report?.baseline?.installs_succeeded !== 3) failures.push('baseline:install');
  if (report?.candidate?.installs_succeeded !== 3) failures.push('candidate:install');
  if (report?.baseline?.actionable_workflows !== 0) failures.push('baseline:route-boundary');
  if (report?.candidate?.actionable_workflows !== 3) failures.push('candidate:route');
  if (report?.candidate?.steps_to_actionable_workflow !== 3) failures.push('candidate:steps');
  return { accepted: failures.length === 0, failures };
}

export function compareCliFunnels({ baselineCli, candidateCli }) {
  const order = [
    ['baseline', baselineCli], ['candidate', candidateCli],
    ['candidate', candidateCli], ['baseline', baselineCli],
    ['baseline', baselineCli], ['candidate', candidateCli],
  ];
  const rows = { baseline: [], candidate: [] };
  for (const [system, cli] of order) {
    rows[system].push(trial(system, cli, rows[system].length + 1));
  }
  const report = {
    schema_version: '0.1',
    status: 'CLI_ACTIVATION_COMPARISON_COMPLETE',
    baseline: summarize('v1.9.0', rows.baseline),
    candidate: summarize('current', rows.candidate),
    human_interventions: 0,
    provider_calls: 0,
    model_exposures: 0,
    claim_boundary: 'Measures local CLI install/doctor/structured-route availability only. A missing baseline route is right-censored, not assigned an invented time or step count. No UI was generated or scored.',
  };
  return { ...report, validation: validateCliFunnelComparison(report) };
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const baselineCli = resolve(arg('baseline-cli') ?? '');
  const candidateCli = resolve(arg('candidate-cli') ?? 'dist/bin/oh-my-design.js');
  if (!existsSync(baselineCli)) throw new Error(`Missing --baseline-cli: ${baselineCli}`);
  if (!existsSync(candidateCli)) throw new Error(`Missing --candidate-cli: ${candidateCli}`);
  const report = compareCliFunnels({ baselineCli, candidateCli });
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  if (!report.validation.accepted) process.exitCode = 1;
}
