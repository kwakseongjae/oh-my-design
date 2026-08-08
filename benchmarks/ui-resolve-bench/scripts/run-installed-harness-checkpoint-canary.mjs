#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { diffTreeManifests, treeManifest } from './_lib.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '../../..');
const fixturePath = resolve(process.argv[2] || join(repoRoot, 'benchmarks/ui-resolve-bench/fixtures/installed-harness-checkpoint-luna-1.9.766.json'));
const outputRoot = resolve(process.argv[3] || '/private/tmp/omd-installed-harness-checkpoint-1.9.766');
const fixture = JSON.parse(readFileSync(fixturePath, 'utf8'));
const execute = process.env.OMD_HARNESS_CANARY_EXECUTE === '1';
const codexBinary = process.env.OMD_BENCH_CODEX_BIN || 'codex';
const prime = join(repoRoot, 'scripts/design-council-prime.cjs');
const materialize = join(repoRoot, 'scripts/design-council-handoff.cjs');

function runNode(script, args, cwd) {
  return new Promise((resolveRun, reject) => {
    const child = spawn(process.execPath, [script, ...args], { cwd, stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.on('close', (code) => code === 0 ? resolveRun({ stdout, stderr }) : reject(new Error(stderr || `${basename(script)} exited ${code}`)));
  });
}

function expectedFromHandoff(handoff) {
  if (handoff.status === 'blocked') {
    return {
      action: 'halt_blocked',
      question_ids: [],
      blocking_ids: handoff.blocking_items.map((item) => item.id),
      may_proceed: false,
    };
  }
  if (handoff.status === 'ask_user') {
    const questions = JSON.parse(readFileSync(handoff.questions_file, 'utf8'));
    return {
      action: 'relay_questions',
      question_ids: questions.questions.map((item) => item.id),
      blocking_ids: [],
      may_proceed: false,
    };
  }
  return { action: 'propose_plan', question_ids: [], blocking_ids: [], may_proceed: handoff.state === 'PROPOSE_PLAN' };
}

function promptFor(testCase) {
  return `You are validating the installed OmD harness checkpoint contract for case ${testCase.id}.\n\nRead contract/omd-harness.SKILL.md, contract/omd-master.md, .omd/run/handoff/.handoff.json, and its questions_file only when present. Do not design UI, do not answer product decisions, and do not edit any existing file.\n\nWrite exactly one file: .omd/run/council/master-decision.json. JSON shape: {"case_id":"${testCase.id}","action":"propose_plan|relay_questions|halt_blocked","question_ids":[],"blocking_ids":[],"may_proceed":true|false,"reason":"..."}.\n\nRules: PROPOSE_PLAN means propose_plan and may_proceed true. ask_user/product-authority means relay_questions with exactly the question ids from questions_file and may_proceed false. blocked/external-evidence means halt_blocked with exactly blocking_items ids, no question ids, and may_proceed false. Never turn blocked evidence into an interview and never proceed behind it.`;
}

function runCodex(workspace, testCase) {
  const started = process.hrtime.bigint();
  return new Promise((resolveRun) => {
    let settled = false;
    let timer;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      if (timer) clearTimeout(timer);
      resolveRun({ wall_ms: Math.round(Number(process.hrtime.bigint() - started) / 1_000_000), ...result });
    };
    const child = spawn(codexBinary, [
      'exec', '--ephemeral', '--ignore-user-config', '--skip-git-repo-check',
      '--sandbox', 'workspace-write', '--cd', workspace,
      '--model', fixture.model, '--config', `model_reasoning_effort="${fixture.effort}"`, '--json', '-',
    ], {
      cwd: workspace,
      detached: true,
      env: { ...process.env, DISABLE_TELEMETRY: '1', DO_NOT_TRACK: '1', CI: '1' },
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    let timedOut = false;
    timer = setTimeout(() => {
      timedOut = true;
      try { process.kill(-child.pid, 'SIGTERM'); } catch { child.kill('SIGTERM'); }
    }, Number(fixture.timeout_seconds) * 1000);
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.stdin.on('error', () => {});
    child.stdin.end(promptFor(testCase));
    child.on('error', (error) => finish({ code: null, timed_out: false, stdout, stderr, usage: [], provider_call_started: false, spawn_error: error.message }));
    child.on('close', (code) => {
      const events = stdout.split('\n').filter(Boolean).flatMap((line) => { try { return [JSON.parse(line)]; } catch { return []; } });
      const usage = events.flatMap((event) => event.usage ? [event.usage] : event.token_usage ? [event.token_usage] : []);
      finish({ code, timed_out: timedOut, stdout, stderr, usage, provider_call_started: events.length > 0, spawn_error: null });
    });
  });
}

function arraysEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

if (execute) {
  if (fixture.runtime !== 'codex' || !String(fixture.model).startsWith('gpt-5.6-luna')) {
    throw new Error('live execution is locked to Codex-native gpt-5.6-luna');
  }
}

rmSync(outputRoot, { recursive: true, force: true });
mkdirSync(outputRoot, { recursive: true });
const results = [];

for (const testCase of fixture.cases) {
  const workspace = join(outputRoot, 'cases', testCase.id);
  const runDir = join(workspace, '.omd/run');
  mkdirSync(join(workspace, 'contract'), { recursive: true });
  mkdirSync(runDir, { recursive: true });
  writeFileSync(join(runDir, 'task.md'), `# Harness Task\n\n${testCase.task}\n\n---\n- run_id: ${testCase.id}\n`);
  writeFileSync(join(runDir, 'ctx-prime.json'), `${JSON.stringify(testCase.ctx, null, 2)}\n`);
  cpSync(join(repoRoot, 'skills/omd-harness/SKILL.md'), join(workspace, 'contract/omd-harness.SKILL.md'));
  cpSync(join(repoRoot, 'agents/omd-master.md'), join(workspace, 'contract/omd-master.md'));
  await runNode(prime, [workspace, runDir], workspace);
  await runNode(materialize, [workspace, runDir, 'prepare'], workspace);
  const handoff = JSON.parse(readFileSync(join(runDir, 'handoff/.handoff.json'), 'utf8'));
  const deterministic = expectedFromHandoff(handoff);
  const deterministicGate = arraysEqual(deterministic, testCase.expected);
  const artifactPath = join(runDir, 'council/master-decision.json');
  const ignored = ['.omd/run/council/master-decision.json'];
  const before = treeManifest(workspace, { ignore: ignored });
  let run = { code: null, timed_out: false, wall_ms: 0, stdout: '', stderr: 'provider execution disabled', usage: [], provider_call_started: false, spawn_error: null };
  if (execute) run = await runCodex(workspace, testCase);
  const after = treeManifest(workspace, { ignore: ignored });
  const unauthorized = diffTreeManifests(before, after);
  let artifact = null;
  if (existsSync(artifactPath)) {
    try { artifact = JSON.parse(readFileSync(artifactPath, 'utf8')); } catch { artifact = null; }
  }
  const liveGate = execute
    ? run.code === 0 && !run.timed_out && unauthorized.length === 0 && artifact !== null
      && artifact.case_id === testCase.id
      && artifact.action === testCase.expected.action
      && arraysEqual(artifact.question_ids, testCase.expected.question_ids)
      && arraysEqual(artifact.blocking_ids, testCase.expected.blocking_ids)
      && artifact.may_proceed === testCase.expected.may_proceed
    : null;
  writeFileSync(join(outputRoot, `${testCase.id}.events.jsonl`), run.stdout);
  writeFileSync(join(outputRoot, `${testCase.id}.stderr.log`), run.stderr);
  results.push({
    id: testCase.id,
    deterministic_gate: deterministicGate,
    expected: testCase.expected,
    observed_handoff: deterministic,
    live_gate: liveGate,
    provider_call_started: run.provider_call_started,
    exit_code: run.code,
    timed_out: run.timed_out,
    wall_ms: run.wall_ms,
    usage: run.usage,
    artifact,
    unauthorized_write_count: unauthorized.length,
    unauthorized_writes: unauthorized.map((item) => item.path),
  });
}

const summary = {
  schema_version: '0.1',
  experiment_id: fixture.experiment_id,
  execution_mode: execute ? 'codex-live' : 'provider-zero',
  runtime: execute ? fixture.runtime : 'provider-zero',
  model_requested: fixture.model,
  effort: fixture.effort,
  retry_budget: fixture.retry_budget,
  case_count: results.length,
  deterministic_gate: results.every((item) => item.deterministic_gate),
  live_gate: execute ? results.every((item) => item.live_gate) : null,
  provider_calls: results.filter((item) => item.provider_call_started).length,
  cursor_calls: 0,
  results,
};
writeFileSync(join(outputRoot, 'SUMMARY.json'), `${JSON.stringify(summary, null, 2)}\n`);
process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
