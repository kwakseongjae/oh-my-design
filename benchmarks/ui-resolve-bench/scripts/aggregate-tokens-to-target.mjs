#!/usr/bin/env node
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { readJson, writeJson, parseArgs } from "./_lib.mjs";

const ROLES = new Set(["candidate", "control"]);
const STATUSES = new Set([
  "valid",
  "timed_out",
  "invalid-infrastructure",
  "invalid-attribution",
  "invalid-task",
]);
const COMPONENTS = ["fresh_input", "cached_input", "output", "reasoning_output"];

function integer(value, label) {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new Error(`${label} must be a non-negative safe integer`);
  }
  return value;
}

function requiredString(value, label) {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${label} is required`);
  return value;
}

function validateRun(run, label) {
  if (!run || typeof run !== "object" || Array.isArray(run)) throw new Error(`${label} must be an object`);
  if (!ROLES.has(run.role)) throw new Error(`${label}.role is invalid`);
  if (!STATUSES.has(run.status)) throw new Error(`${label}.status is invalid`);
  integer(run.provider_tokens, `${label}.provider_tokens`);
  if (run.components != null) {
    if (typeof run.components !== "object" || Array.isArray(run.components)) {
      throw new Error(`${label}.components must be an object`);
    }
    for (const component of COMPONENTS) {
      if (run.components[component] != null) {
        integer(run.components[component], `${label}.components.${component}`);
      }
    }
  }
  return run;
}

function validateLedger(ledger) {
  if (!ledger || typeof ledger !== "object" || Array.isArray(ledger)) throw new Error("ledger must be an object");
  requiredString(ledger.goal_id, "goal_id");
  requiredString(ledger.target_contract, "target_contract");
  if (!Array.isArray(ledger.attempts) || ledger.attempts.length === 0) {
    throw new Error("attempts must be a non-empty array");
  }
  ledger.attempts.forEach((attempt, index) => {
    const label = `attempts[${index}]`;
    if (!attempt || typeof attempt !== "object" || Array.isArray(attempt)) throw new Error(`${label} must be an object`);
    if (attempt.order !== index + 1) throw new Error(`${label}.order must be ${index + 1}`);
    requiredString(attempt.patch_version, `${label}.patch_version`);
    if (typeof attempt.goal_passed !== "boolean") throw new Error(`${label}.goal_passed must be boolean`);
    if (!Array.isArray(attempt.runs) || attempt.runs.length === 0) throw new Error(`${label}.runs must be non-empty`);
    attempt.runs.forEach((run, runIndex) => validateRun(run, `${label}.runs[${runIndex}]`));
  });
  return ledger;
}

function sumRuns(runs, predicate = () => true) {
  return runs.filter(predicate).reduce((sum, run) => sum + run.provider_tokens, 0);
}

function componentSummary(runs, component) {
  const reported = runs.filter((run) => run.components?.[component] != null);
  return {
    reported_runs: reported.length,
    total_runs: runs.length,
    coverage: runs.length ? reported.length / runs.length : null,
    tokens: reported.length === runs.length
      ? reported.reduce((sum, run) => sum + run.components[component], 0)
      : null,
  };
}

export function aggregateTokensToTarget(input) {
  const ledger = validateLedger(structuredClone(input));
  const firstPassIndex = ledger.attempts.findIndex((attempt) => attempt.goal_passed);
  const achieved = firstPassIndex !== -1;
  const included = achieved ? ledger.attempts.slice(0, firstPassIndex + 1) : ledger.attempts;
  const runs = included.flatMap((attempt) => attempt.runs);
  const excluded = achieved ? ledger.attempts.slice(firstPassIndex + 1) : [];

  return {
    schema_version: "0.1",
    goal_id: ledger.goal_id,
    target_contract: ledger.target_contract,
    achieved,
    censoring: achieved ? "none" : "right-censored",
    first_pass_patch: achieved ? included.at(-1).patch_version : null,
    attempts_observed: ledger.attempts.length,
    attempts_to_target: achieved ? included.length : null,
    included_attempt_orders: included.map((attempt) => attempt.order),
    tokens_to_target: {
      candidate: sumRuns(runs, (run) => run.role === "candidate"),
      control: sumRuns(runs, (run) => run.role === "control"),
      total_experimental: sumRuns(runs),
      invalid_or_timeout: sumRuns(runs, (run) => run.status !== "valid"),
    },
    component_telemetry: Object.fromEntries(
      COMPONENTS.map((component) => [component, componentSummary(runs, component)]),
    ),
    excluded_post_target_attempts: excluded.map((attempt) => ({
      order: attempt.order,
      patch_version: attempt.patch_version,
    })),
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.input || !args.out) {
    throw new Error("Usage: aggregate-tokens-to-target.mjs --input <goal-ledger.json> --out <summary.json>");
  }
  writeJson(resolve(args.out), aggregateTokensToTarget(readJson(resolve(args.input))));
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) main();
