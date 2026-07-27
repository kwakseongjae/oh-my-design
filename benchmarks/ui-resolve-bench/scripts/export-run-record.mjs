#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, writeJson } from "./_lib.mjs";
import { summarizeClaudeToolErrors } from "./check-claude-runner.mjs";

const FAMILIES = new Set(["model", "skill", "harness", "prompt-arena", "factorial"]);

export function classifyRunStatus(run, score) {
  if (run?.process?.timed_out === true) return "timed_out";
  if (
    run?.process?.exit_code !== 0
    || Number(run?.output?.infrastructure_tool_error_count ?? 0) > 0
    || Number(run?.output?.sandbox_error_count ?? 0) > 0
  ) return "failed";
  if (!score) return "incomplete";
  return "complete";
}

export function classifyValidity(manifest, runStatus, score, run = null) {
  if (manifest?.variant?.track_eligibility?.off_label === true) return "invalid-task";
  if (manifest?.skill?.source_attestation?.publishable === false) return "invalid-attribution";
  if (manifest?.variant?.kind === "agent-harness" && run) {
    const required = (manifest?.agents?.installed ?? []).map((agent) => agent.id);
    const requested = new Set(run?.output?.requested_agent_ids ?? []);
    if (!required.length || required.some((agentId) => !requested.has(agentId))) return "invalid-attribution";
    if (Number(run?.output?.agent_tool_error_count ?? 0) > 0) return "invalid-attribution";
    const requiredModel = manifest?.agents?.required_model;
    const agentCalls = run?.output?.agent_calls ?? [];
    if (requiredModel && required.some((agentId) => !agentCalls.some((call) => (
      call.agent_id === agentId && call.requested_model === requiredModel
    )))) return "invalid-attribution";
  }
  if (runStatus !== "complete" || !score) return "invalid-infrastructure";
  return "valid";
}

export function summarizeTokenUsage(run) {
  const totals = { input_tokens: 0, cached_input_tokens: 0, output_tokens: 0, reasoning_output_tokens: 0 };
  let observed = false;
  for (const event of run?.output?.usage_events ?? []) {
    const usage = event?.usage ?? event?.token_usage;
    if (!usage) continue;
    observed = true;
    for (const field of Object.keys(totals)) {
      const value = Number(usage[field] ?? 0);
      if (Number.isFinite(value) && value >= 0) totals[field] += value;
    }
  }
  if (!observed) return null;
  return { ...totals, total_tokens: totals.input_tokens + totals.output_tokens };
}

export function buildRunRecord({
  workspace,
  manifest,
  run,
  score,
  family,
  systemId,
  trialIndex,
  suiteVersion,
  budgetTier,
}) {
  if (!FAMILIES.has(family)) throw new Error(`unsupported benchmark family: ${family}`);
  if (!Number.isInteger(trialIndex) || trialIndex < 1) throw new Error("trial index must be a positive integer");
  const runStatus = classifyRunStatus(run, score);
  const validity = classifyValidity(manifest, runStatus, score, run);
  const automatedPass = score?.status?.automated_gate_pass === true;
  const productChanged = run?.workspace?.product_changed ?? run?.workspace?.changed ?? false;
  const tokenUsage = summarizeTokenUsage(run);
  const diagnosticsDeclared = run?.output?.diagnostic_availability !== undefined;
  const diagnosticAvailable = run?.output?.diagnostic_availability?.available === true;
  const diagnosticNumber = (field) => {
    if (run?.output?.[field] !== undefined && run?.output?.[field] !== null) {
      return Number(run.output[field]);
    }
    return diagnosticsDeclared && !diagnosticAvailable ? null : 0;
  };
  return {
    run_id: basename(workspace),
    benchmark_family: family,
    suite_version: suiteVersion,
    system_id: systemId,
    model_id: run?.runtime?.model_requested ?? run?.runtime?.model ?? null,
    skill_id: family === "skill" || family === "factorial"
      ? manifest?.skill?.declared_name ?? null
      : null,
    harness_id: family === "harness" || family === "factorial"
      ? manifest?.variant?.id ?? null
      : null,
    budget_tier: budgetTier,
    task_id: manifest.task.id,
    trial_index: trialIndex,
    run_status: runStatus,
    validity,
    ui_resolved: validity === "valid" ? automatedPass && productChanged : false,
    objective_score: score?.points?.deterministic_total ?? 0,
    objective_max: score?.points?.deterministic_max ?? 85,
    wall_time_ms: run?.process?.wall_ms ?? 0,
    tokens: tokenUsage?.total_tokens ?? null,
    token_usage: tokenUsage,
    provider_cost_equivalent_usd: Number.isFinite(Number(run?.output?.total_cost_usd))
      ? Number(run.output.total_cost_usd)
      : null,
    runtime_model_usage: Array.isArray(run?.output?.model_usage)
      ? run.output.model_usage
      : null,
    runtime_diagnostics: {
      child_exit_code: run?.process?.child_exit_code ?? run?.process?.exit_code ?? null,
      diagnostic_availability: run?.output?.diagnostic_availability ?? {
        available: true,
        fields: "legacy-assumed",
        reason: null,
      },
      tool_error_count: diagnosticNumber("tool_error_count"),
      recoverable_tool_error_count: diagnosticNumber("recoverable_tool_error_count"),
      infrastructure_tool_error_count: diagnosticNumber("infrastructure_tool_error_count"),
      optional_verifier_environment_error_count: diagnosticNumber("optional_verifier_environment_error_count"),
      recovered_temp_path_error_count: diagnosticNumber("recovered_temp_path_error_count"),
      sandbox_error_count: diagnosticNumber("sandbox_error_count"),
      sandbox_cwd_error_count: diagnosticNumber("sandbox_cwd_error_count"),
      agent_tool_call_count: diagnosticNumber("agent_tool_call_count"),
      agent_tool_error_count: diagnosticNumber("agent_tool_error_count"),
      requested_agent_ids: run?.output?.requested_agent_ids ?? [],
      agent_calls: run?.output?.agent_calls ?? [],
      milestones: run?.output?.milestones ?? null,
    },
    attribution: {
      runtime: {
        runtime_target: run?.runtime?.runtime_target ?? null,
        agent: run?.runtime?.agent ?? null,
        agent_version: run?.runtime?.agent_version ?? null,
        model_requested: run?.runtime?.model_requested ?? run?.runtime?.model ?? null,
        model_reported: run?.runtime?.model_reported ?? null,
        model_evidence_mode: run?.runtime?.model_evidence_mode ?? null,
        effort_requested: run?.runtime?.effort_requested
          ?? run?.runtime?.effort
          ?? run?.runtime?.reasoning
          ?? null,
        auth_mode: run?.runtime?.auth_mode ?? null,
        provider_route: run?.runtime?.provider_route ?? null,
        usage_attribution: run?.output?.usage_attribution ?? null,
      },
      source_commit: manifest?.skill?.source_commit ?? null,
      source_attestation: manifest?.skill?.source_attestation ?? null,
      agent_bundle_sha256: manifest?.agents?.sha256 ?? null,
      activation_delta_sha256: manifest?.variant?.activation_delta_sha256 ?? null,
      track_eligibility: manifest?.variant?.track_eligibility ?? null,
    },
    delivery: {
      product_changed: productChanged,
      changed_product_files: run?.workspace?.changed_product_files ?? [],
    },
    evidence: {
      manifest: ".benchmark/manifest.json",
      run_result: ".benchmark/run-result.json",
      score: score ? ".benchmark/score.json" : null,
      screenshots: score ? ".benchmark/screenshots" : null,
    },
  };
}

async function main() {
  const args = parseArgs();
  const workspace = args.get("workspace") ? resolve(String(args.get("workspace"))) : null;
  const family = String(args.get("family") ?? "");
  const systemId = String(args.get("system") ?? "");
  const trialIndex = Number(args.get("trial") ?? 0);
  if (!workspace || !family || !systemId || !trialIndex) {
    console.error("usage: export-run-record.mjs --workspace <dir> --family <family> --system <id> --trial <n> [--out <file>] [--suite-version <v>] [--budget-tier <tier>]");
    process.exitCode = 2;
    return;
  }
  const benchmarkDir = join(workspace, ".benchmark");
  const manifestPath = join(benchmarkDir, "manifest.json");
  const runPath = join(benchmarkDir, "run-result.json");
  const scorePath = join(benchmarkDir, "score.json");
  if (!existsSync(manifestPath) || !existsSync(runPath)) {
    throw new Error("workspace must contain .benchmark/manifest.json and run-result.json");
  }
  const manifest = readJson(manifestPath);
  const run = readJson(runPath);
  const eventsPath = join(benchmarkDir, "events.jsonl");
  if (
    existsSync(eventsPath)
    && (
      run?.runtime?.runtime_target === "claude-code"
      || run?.output?.diagnostic_availability === undefined
    )
  ) {
    const events = readFileSync(eventsPath, "utf8").split("\n").filter(Boolean).flatMap((line) => {
      try { return [JSON.parse(line)]; } catch { return []; }
    });
    run.output = { ...run.output, ...summarizeClaudeToolErrors(events) };
  }
  const score = existsSync(scorePath) ? readJson(scorePath) : null;
  const record = buildRunRecord({
    workspace,
    manifest,
    run,
    score,
    family,
    systemId,
    trialIndex,
    suiteVersion: String(args.get("suite-version") ?? manifest.task.version),
    budgetTier: String(args.get("budget-tier") ?? "standard"),
  });
  const out = args.get("out")
    ? resolve(String(args.get("out")))
    : join(benchmarkDir, "run-record.json");
  writeJson(out, record);
  console.log(JSON.stringify(record, null, 2));
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  await main();
}
