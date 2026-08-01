#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { parseArgs, readJson, writeJson } from "./_lib.mjs";

const ALLOWED_FAMILIES = new Set(["model", "skill", "harness", "prompt-arena", "factorial"]);
const ALLOWED_STATUSES = new Set(["complete", "failed", "timed_out", "incomplete"]);
const VALIDITY_VALUES = new Set(["valid", "invalid-infrastructure", "invalid-attribution", "invalid-task"]);

function loadRecords(path) {
  const source = readFileSync(path, "utf8").trim();
  if (!source) return [];
  if (source.startsWith("[") || source.startsWith("{")) {
    const parsed = JSON.parse(source);
    return Array.isArray(parsed) ? parsed : parsed.runs;
  }
  return source.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
}

function finite(value, label) {
  if (typeof value !== "number" || !Number.isFinite(value)) throw new Error(`${label} must be finite`);
  return value;
}

function validateRecord(record, index) {
  const label = `record ${index}`;
  for (const field of ["run_id", "benchmark_family", "suite_version", "system_id", "task_id", "run_status", "validity"]) {
    if (typeof record[field] !== "string" || !record[field]) throw new Error(`${label}.${field} is required`);
  }
  if (!ALLOWED_FAMILIES.has(record.benchmark_family)) throw new Error(`${label}.benchmark_family is invalid`);
  if (!ALLOWED_STATUSES.has(record.run_status)) throw new Error(`${label}.run_status is invalid`);
  if (!VALIDITY_VALUES.has(record.validity)) throw new Error(`${label}.validity is invalid`);
  if (!Number.isInteger(record.trial_index) || record.trial_index < 1) throw new Error(`${label}.trial_index must be a positive integer`);
  if (record.validity === "valid" && typeof record.ui_resolved !== "boolean") {
    throw new Error(`${label}.ui_resolved must be boolean for a valid run`);
  }
  if (record.objective_score != null) {
    finite(record.objective_score, `${label}.objective_score`);
    finite(record.objective_max, `${label}.objective_max`);
    if (record.objective_max <= 0 || record.objective_score < 0 || record.objective_score > record.objective_max) {
      throw new Error(`${label}.objective score range is invalid`);
    }
  }
  for (const field of [
    "wall_time_ms",
    "tokens",
    "provider_cost_equivalent_usd",
    "tool_calls",
    "human_interventions",
  ]) {
    if (record[field] != null && finite(record[field], `${label}.${field}`) < 0) throw new Error(`${label}.${field} must be non-negative`);
  }
  const proofTrace = record.runtime_diagnostics?.proof_trace;
  if (proofTrace != null) {
    if (typeof proofTrace.analyzable !== "boolean" || typeof proofTrace.compliance_pass !== "boolean") {
      throw new Error(`${label}.runtime_diagnostics.proof_trace booleans are required`);
    }
    for (const field of [
      "browser_recovery_count",
      "duplicate_static_closure_count",
      "verification_after_ready_count",
    ]) {
      if (!Number.isInteger(proofTrace[field]) || proofTrace[field] < 0) {
        throw new Error(`${label}.runtime_diagnostics.proof_trace.${field} must be a non-negative integer`);
      }
    }
  }
  return record;
}

function groupKey(record) {
  return [
    record.benchmark_family,
    record.suite_version,
    record.system_id,
    record.model_id ?? "",
    record.skill_id ?? "",
    record.harness_id ?? "",
    record.budget_tier ?? "standard",
  ].join("\u0000");
}

function comparisonKey(record) {
  return [
    record.benchmark_family,
    record.suite_version,
    record.model_id ?? "",
    record.budget_tier ?? "standard",
  ].join("\u0000");
}

function trialKey(record) {
  return `${record.task_id}\u0000${record.trial_index}`;
}

function mean(values) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;
}

function percentile(values, quantile) {
  if (!values.length) return null;
  const sorted = [...values].sort((left, right) => left - right);
  const position = (sorted.length - 1) * quantile;
  const lower = Math.floor(position);
  const upper = Math.ceil(position);
  if (lower === upper) return sorted[lower];
  return sorted[lower] + (sorted[upper] - sorted[lower]) * (position - lower);
}

function round(value, digits = 4) {
  return value == null ? null : Number(value.toFixed(digits));
}

function describe(values) {
  if (!values.length) return { count: 0, mean: null, median: null, standard_deviation: null, min: null, p10: null, p25: null, p75: null, p90: null, max: null, iqr: null };
  const average = mean(values);
  const variance = values.length > 1
    ? values.reduce((sum, value) => sum + ((value - average) ** 2), 0) / (values.length - 1)
    : 0;
  const p25 = percentile(values, 0.25);
  const p75 = percentile(values, 0.75);
  return {
    count: values.length,
    mean: round(average),
    median: round(percentile(values, 0.5)),
    standard_deviation: round(Math.sqrt(variance)),
    min: round(Math.min(...values)),
    p10: round(percentile(values, 0.1)),
    p25: round(p25),
    p75: round(p75),
    p90: round(percentile(values, 0.9)),
    max: round(Math.max(...values)),
    iqr: round(p75 - p25),
  };
}

function mulberry32(seed) {
  let state = seed >>> 0;
  return () => {
    state += 0x6D2B79F5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function hierarchicalInterval(records, valueFor, { samples, seed }) {
  if (!records.length || samples < 1) return { lower: null, upper: null, samples };
  const byTask = new Map();
  for (const record of records) {
    if (!byTask.has(record.task_id)) byTask.set(record.task_id, []);
    byTask.get(record.task_id).push(record);
  }
  const tasks = [...byTask.keys()].sort();
  const random = mulberry32(seed);
  const estimates = [];
  for (let iteration = 0; iteration < samples; iteration += 1) {
    const values = [];
    for (let taskIndex = 0; taskIndex < tasks.length; taskIndex += 1) {
      const sampledTask = tasks[Math.floor(random() * tasks.length)];
      const taskRecords = byTask.get(sampledTask);
      for (let runIndex = 0; runIndex < taskRecords.length; runIndex += 1) {
        const sampledRecord = taskRecords[Math.floor(random() * taskRecords.length)];
        values.push(valueFor(sampledRecord));
      }
    }
    estimates.push(mean(values));
  }
  return {
    lower: round(percentile(estimates, 0.025)),
    upper: round(percentile(estimates, 0.975)),
    samples,
  };
}

function selectRepresentatives(records) {
  const scored = records
    .filter((record) => record.objective_score != null)
    .map((record) => ({ ...record, normalized: (record.objective_score / record.objective_max) * 100 }))
    .sort((left, right) => left.normalized - right.normalized || left.run_id.localeCompare(right.run_id));
  if (!scored.length) return { worst_run_id: null, median_run_id: null, best_run_id: null };
  const median = percentile(scored.map((record) => record.normalized), 0.5);
  const medianRecord = [...scored].sort((left, right) => (
    Math.abs(left.normalized - median) - Math.abs(right.normalized - median)
      || left.run_id.localeCompare(right.run_id)
  ))[0];
  return {
    worst_run_id: scored[0].run_id,
    median_run_id: medianRecord.run_id,
    best_run_id: scored.at(-1).run_id,
  };
}

function reliability(records, k) {
  const byTask = new Map();
  for (const record of records) {
    if (!byTask.has(record.task_id)) byTask.set(record.task_id, new Map());
    byTask.get(record.task_id).set(record.trial_index, record);
  }
  let eligible = 0;
  let passed = 0;
  for (const trials of byTask.values()) {
    const expected = Array.from({ length: k }, (_, index) => index + 1);
    if (!expected.every((trial) => trials.has(trial))) continue;
    eligible += 1;
    if (expected.every((trial) => trials.get(trial).ui_resolved)) passed += 1;
  }
  return {
    k,
    eligible_tasks: eligible,
    passed_tasks: passed,
    rate: eligible ? round(passed / eligible) : null,
  };
}

function validTrials(records) {
  const attempts = new Map();
  for (const record of records) {
    const key = trialKey(record);
    if (!attempts.has(key)) attempts.set(key, []);
    attempts.get(key).push(record);
  }
  const valid = [];
  const invalidAttempts = [];
  const unreplaced = [];
  for (const [key, trialAttempts] of attempts) {
    const validAttempts = trialAttempts.filter((record) => record.validity === "valid");
    invalidAttempts.push(...trialAttempts.filter((record) => record.validity !== "valid"));
    if (validAttempts.length > 1) throw new Error(`multiple valid attempts for trial ${key}`);
    if (validAttempts.length === 1) valid.push(validAttempts[0]);
    else unreplaced.push(key.replace("\u0000", ":"));
  }
  return { valid, invalidAttempts, unreplaced, scheduledTrials: attempts.size };
}

function summarizeGroup(records, options) {
  const sample = records[0];
  const trials = validTrials(records);
  const valid = trials.valid;
  const complete = valid.filter((record) => record.run_status === "complete");
  const objective = complete
    .filter((record) => record.objective_score != null)
    .map((record) => (record.objective_score / record.objective_max) * 100);
  const resolvedValues = valid.map((record) => record.ui_resolved ? 1 : 0);
  const usageAvailable = valid.filter((record) => record.usage_completeness?.available === true);
  const usageComplete = valid.filter(
    (record) => record.usage_completeness?.input_output_complete === true,
  );
  const costValues = valid
    .map((record) => record.provider_cost_equivalent_usd)
    .filter((value) => value != null);
  const controlValues = valid
    .map((record) => record.execution_control)
    .filter((value) => value != null)
    .map((value) => JSON.stringify(value));
  const controlConsistent = (
    valid.length > 0
    && controlValues.length === valid.length
    && new Set(controlValues).size === 1
  );
  const resolvedCount = resolvedValues.reduce((sum, value) => sum + value, 0);
  const proofAvailable = valid.filter((record) => record.runtime_diagnostics?.proof_trace != null);
  const proofAnalyzable = proofAvailable.filter(
    (record) => record.runtime_diagnostics.proof_trace.analyzable === true,
  );
  const proofCompliant = proofAnalyzable.filter(
    (record) => record.runtime_diagnostics.proof_trace.compliance_pass === true,
  );
  const proofMetric = (field) => describe(proofAnalyzable.map(
    (record) => record.runtime_diagnostics.proof_trace[field],
  ));
  return {
    benchmark_family: sample.benchmark_family,
    suite_version: sample.suite_version,
    system_id: sample.system_id,
    model_id: sample.model_id ?? null,
    skill_id: sample.skill_id ?? null,
    harness_id: sample.harness_id ?? null,
    budget_tier: sample.budget_tier ?? "standard",
    runs: {
      scheduled_trials: trials.scheduledTrials,
      valid_trials: valid.length,
      complete: complete.length,
      failed: valid.filter((record) => record.run_status === "failed").length,
      timed_out: valid.filter((record) => record.run_status === "timed_out").length,
      incomplete: valid.filter((record) => record.run_status === "incomplete").length,
      invalid_attempts: trials.invalidAttempts.length,
      unreplaced_invalid_trials: trials.unreplaced,
      completion_rate: valid.length ? round(complete.length / valid.length) : null,
    },
    ui_resolved: {
      passed: resolvedCount,
      rate: resolvedValues.length ? round(mean(resolvedValues)) : null,
      confidence_95: hierarchicalInterval(valid, (record) => record.ui_resolved ? 1 : 0, options),
    },
    reliability: reliability(valid, options.reliabilityK),
    objective_percent: describe(objective),
    wall_time_ms: describe(valid.map((record) => record.wall_time_ms).filter((value) => value != null)),
    tokens: describe(valid.map((record) => record.tokens).filter((value) => value != null)),
    provider_cost_equivalent_usd: {
      ...describe(costValues),
      total: costValues.length === valid.length ? round(costValues.reduce((sum, value) => sum + value, 0)) : null,
      per_resolved_run:
        costValues.length === valid.length && resolvedCount > 0
          ? round(costValues.reduce((sum, value) => sum + value, 0) / resolvedCount)
          : null,
    },
    tool_calls: describe(valid.map((record) => record.tool_calls).filter((value) => value != null)),
    human_interventions: describe(
      valid.map((record) => record.human_interventions).filter((value) => value != null),
    ),
    proof_execution: {
      scheduled_valid_runs: valid.length,
      available_runs: proofAvailable.length,
      analyzable_runs: proofAnalyzable.length,
      analyzable_rate: valid.length ? round(proofAnalyzable.length / valid.length) : null,
      compliant_runs: proofCompliant.length,
      compliance_rate: proofAnalyzable.length
        ? round(proofCompliant.length / proofAnalyzable.length)
        : null,
      browser_recovery_count: proofMetric("browser_recovery_count"),
      duplicate_static_closure_count: proofMetric("duplicate_static_closure_count"),
      verification_after_ready_count: proofMetric("verification_after_ready_count"),
      compliance_publication_ready:
        valid.length > 0
        && proofAvailable.length === valid.length
        && proofAnalyzable.length === valid.length,
    },
    usage_telemetry: {
      scheduled_valid_runs: valid.length,
      available_runs: usageAvailable.length,
      input_output_complete_runs: usageComplete.length,
      availability_rate: valid.length ? round(usageAvailable.length / valid.length) : null,
      input_output_complete_rate: valid.length ? round(usageComplete.length / valid.length) : null,
      reasoning_reported_runs: valid.filter(
        (record) => record.usage_completeness?.reasoning_visibility === "reported",
      ).length,
      cached_input_reported_runs: valid.filter(
        (record) => record.usage_completeness?.cached_input_visibility === "reported",
      ).length,
    },
    execution_control: {
      complete: controlValues.length === valid.length,
      consistent: controlConsistent,
      latency_comparable:
        controlConsistent
        && valid[0]?.execution_control?.latency_comparison === "eligible"
        && valid[0]?.execution_control?.max_concurrency === 1,
    },
    representative_runs: selectRepresentatives(complete),
    publication_ready: trials.unreplaced.length === 0 && valid.length === trials.scheduledTrials,
    efficiency_publication_ready:
      trials.unreplaced.length === 0
      && valid.length === trials.scheduledTrials
      && usageComplete.length === valid.length
      && controlConsistent,
  };
}

function pairedComparisons(groupedRecords, baselineSystem, options) {
  if (!baselineSystem) return [];
  const byComparison = new Map();
  for (const records of groupedRecords.values()) {
    const key = comparisonKey(records[0]);
    if (!byComparison.has(key)) byComparison.set(key, new Map());
    byComparison.get(key).set(records[0].system_id, validTrials(records).valid);
  }
  const output = [];
  for (const systems of byComparison.values()) {
    const baseline = systems.get(baselineSystem);
    if (!baseline) continue;
    const baselineByTrial = new Map(baseline.map((record) => [trialKey(record), record]));
    for (const [systemId, records] of systems) {
      if (systemId === baselineSystem) continue;
      if (!records.length) continue;
      const pairs = records.flatMap((candidate) => {
        const control = baselineByTrial.get(trialKey(candidate));
        if (!control) return [];
        return [{
          task_id: candidate.task_id,
          trial_index: candidate.trial_index,
          resolved_delta: Number(candidate.ui_resolved) - Number(control.ui_resolved),
          objective_delta: candidate.objective_score != null && control.objective_score != null
            ? ((candidate.objective_score / candidate.objective_max) - (control.objective_score / control.objective_max)) * 100
            : null,
        }];
      });
      output.push({
        benchmark_family: records[0].benchmark_family,
        suite_version: records[0].suite_version,
        model_id: records[0].model_id ?? null,
        budget_tier: records[0].budget_tier ?? "standard",
        candidate_system_id: systemId,
        baseline_system_id: baselineSystem,
        matched_pairs: pairs.length,
        resolved_lift_percentage_points: round(mean(pairs.map((pair) => pair.resolved_delta)) * 100),
        resolved_lift_confidence_95: hierarchicalInterval(
          pairs,
          (pair) => pair.resolved_delta * 100,
          { ...options, seed: options.seed + 17 },
        ),
        win_tie_loss: {
          wins: pairs.filter((pair) => pair.resolved_delta > 0).length,
          ties: pairs.filter((pair) => pair.resolved_delta === 0).length,
          losses: pairs.filter((pair) => pair.resolved_delta < 0).length,
        },
        objective_lift_percentage_points: describe(pairs.map((pair) => pair.objective_delta).filter((value) => value != null)),
      });
    }
  }
  return output.sort((left, right) => left.candidate_system_id.localeCompare(right.candidate_system_id));
}

const args = parseArgs();
const input = args.get("input") ? resolve(String(args.get("input"))) : null;
const out = args.get("out") ? resolve(String(args.get("out"))) : null;
if (!input || !out) {
  console.error("usage: aggregate-results.mjs --input <runs.json|runs.jsonl> --out <summary.json> [--baseline-system <id>] [--bootstrap 2000] [--seed 20260721] [--reliability 5]");
  process.exit(2);
}

const samples = Number(args.get("bootstrap") ?? 2000);
const seed = Number(args.get("seed") ?? 20260721);
const reliabilityK = Number(args.get("reliability") ?? 5);
if (!Number.isInteger(samples) || samples < 1) throw new Error("bootstrap must be a positive integer");
if (!Number.isInteger(seed)) throw new Error("seed must be an integer");
if (!Number.isInteger(reliabilityK) || reliabilityK < 1) throw new Error("reliability must be a positive integer");

const records = loadRecords(input);
if (!Array.isArray(records) || !records.length) throw new Error("input must contain at least one run record");
records.forEach(validateRecord);
const runIds = new Set();
for (const record of records) {
  if (runIds.has(record.run_id)) throw new Error(`duplicate run_id: ${record.run_id}`);
  runIds.add(record.run_id);
}

const grouped = new Map();
for (const record of records) {
  const key = groupKey(record);
  if (!grouped.has(key)) grouped.set(key, []);
  grouped.get(key).push(record);
}
const options = { samples, seed, reliabilityK };
const groups = [...grouped.values()]
  .map((group) => summarizeGroup(group, options))
  .sort((left, right) => left.benchmark_family.localeCompare(right.benchmark_family) || left.system_id.localeCompare(right.system_id));
const result = {
  schema_version: "0.2",
  generated_at: new Date().toISOString(),
  bootstrap: { method: "hierarchical-percentile-task-then-run", samples, seed },
  reliability_k: reliabilityK,
  groups,
  paired_comparisons: pairedComparisons(grouped, args.get("baseline-system") ? String(args.get("baseline-system")) : null, options),
};
writeJson(out, result);

const percent = (value) => value == null ? "—" : `${(value * 100).toFixed(1)}%`;
const interval = (value) => value?.lower == null ? "—" : `${percent(value.lower)}–${percent(value.upper)}`;
const markdown = [
  "# UI-Resolve aggregate",
  "",
  `> ${samples.toLocaleString()} task→run hierarchical bootstrap samples · Reliability@${reliabilityK}`,
  "",
  "| Family | System | Valid / scheduled | UI-Resolved | 95% CI | Reliability | Objective median [P10–P90] | Proof analyzed | Proof compliant | Completion |",
  "|---|---|---:|---:|---:|---:|---:|---:|---:|---:|",
  ...groups.map((group) => `| ${group.benchmark_family} | ${group.system_id} | ${group.runs.valid_trials}/${group.runs.scheduled_trials} | ${percent(group.ui_resolved.rate)} | ${interval(group.ui_resolved.confidence_95)} | ${percent(group.reliability.rate)} | ${group.objective_percent.median == null ? "—" : `${group.objective_percent.median.toFixed(1)} [${group.objective_percent.p10.toFixed(1)}–${group.objective_percent.p90.toFixed(1)}]`} | ${percent(group.proof_execution.analyzable_rate)} | ${percent(group.proof_execution.compliance_rate)} | ${percent(group.runs.completion_rate)} |`),
  "",
  "Min/max are descriptive only. Failed, timed-out, and incomplete valid runs remain in the UI-Resolved denominator; missing objective scores are not imputed.",
  "",
].join("\n");
writeFileSync(out.replace(/\.json$/i, ".md"), markdown, "utf8");
console.log(markdown);
