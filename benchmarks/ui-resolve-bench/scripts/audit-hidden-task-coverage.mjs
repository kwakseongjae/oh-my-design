#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

function dimensionFlags(task) {
  const viewportNames = new Set((task.viewports ?? []).map((viewport) => viewport?.name));
  return {
    creation: task.track === "creation",
    repair: task.track === "repair",
    "stateful-flow": Boolean(task.journey_oracle),
    responsive: ["mobile", "narrow-320", "css-zoom-surrogate-200"].every((name) => viewportNames.has(name)),
    accessibility: Boolean(task.semantic_oracle),
    "evidence-unknown": Array.isArray(task.protected_unknown_patterns) && task.protected_unknown_patterns.length > 0,
    "screenshot-fidelity": Boolean(task.screenshot_oracle),
    "open-brief": task.track === "open-brief" || Boolean(task.open_brief_oracle),
  };
}

export function auditHiddenTaskCoverage(contract, tasksRoot) {
  if (!Number.isInteger(contract?.minimum_hidden_tasks) || contract.minimum_hidden_tasks < 24) {
    throw new Error("minimum_hidden_tasks must be at least 24");
  }
  if (!Array.isArray(contract.required_locales) || new Set(contract.required_locales).size !== 5) {
    throw new Error("required_locales must contain five unique locales");
  }
  if (!Array.isArray(contract.required_dimensions) || !contract.required_dimensions.length) {
    throw new Error("required_dimensions must not be empty");
  }
  const taskDirs = readdirSync(tasksRoot)
    .map((id) => ({ id, path: join(tasksRoot, id) }))
    .filter(({ path }) => statSync(path).isDirectory())
    .sort((a, b) => a.id.localeCompare(b.id));

  const tasks = taskDirs.map(({ id, path }) => {
    const taskPath = join(path, "task.json");
    if (!existsSync(taskPath)) throw new Error(`task is missing task.json: ${id}`);
    const task = JSON.parse(readFileSync(taskPath, "utf8"));
    if (task.id !== id) throw new Error(`task directory/id mismatch: ${id}`);
    const eligible = task[contract.eligibility.visibility_field] === contract.eligibility.visibility_value &&
      task[contract.eligibility.independent_audit_field] === contract.eligibility.independent_audit_value;
    return { id, locale: task.locale, eligible, dimensions: dimensionFlags(task) };
  });

  const eligible = tasks.filter((task) => task.eligible);
  const inventoryLocales = [...new Set(tasks.map((task) => task.locale).filter(Boolean))].sort();
  const eligibleLocales = [...new Set(eligible.map((task) => task.locale).filter(Boolean))].sort();
  const dimensionCounts = Object.fromEntries(contract.required_dimensions.map((dimension) => [
    dimension,
    eligible.filter((task) => task.dimensions[dimension]).length,
  ]));
  const inventoryDimensionCounts = Object.fromEntries(contract.required_dimensions.map((dimension) => [
    dimension,
    tasks.filter((task) => task.dimensions[dimension]).length,
  ]));
  const missingLocales = contract.required_locales.filter((locale) => !eligibleLocales.includes(locale));
  const missingDimensions = contract.required_dimensions.filter((dimension) => !dimensionCounts[dimension]);
  const gatePass = eligible.length >= contract.minimum_hidden_tasks && !missingLocales.length && !missingDimensions.length;

  return {
    schema_version: "0.1",
    target_version: contract.target_version,
    inventory_task_count: tasks.length,
    inventory_locales: inventoryLocales,
    inventory_dimension_counts: inventoryDimensionCounts,
    eligible_hidden_task_count: eligible.length,
    required_hidden_task_count: contract.minimum_hidden_tasks,
    eligible_locales: eligibleLocales,
    required_locales: contract.required_locales,
    dimension_counts: dimensionCounts,
    missing_locales: missingLocales,
    missing_dimensions: missingDimensions,
    gate_pass: gatePass,
    decision: gatePass ? "HIDDEN_TASK_COVERAGE_READY_FOR_INDEPENDENT_AUDIT" : "BLOCK_HIDDEN_TASK_COVERAGE_CLAIM",
    eligible_task_ids: eligible.map((task) => task.id),
    claim_boundary: contract.claim_policy,
  };
}

function parseArgs(argv) {
  const args = new Map();
  for (let index = 0; index < argv.length; index += 2) {
    if (!argv[index]?.startsWith("--") || argv[index + 1] === undefined) throw new Error("arguments must be --key value pairs");
    args.set(argv[index].slice(2), argv[index + 1]);
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const repoRoot = resolve(args.get("repo-root") ?? resolve(scriptDir, "../../.."));
  const contractPath = resolve(args.get("contract") ?? join(repoRoot, "benchmarks/ui-resolve-bench/hidden-task-coverage-contract.json"));
  const tasksRoot = resolve(args.get("tasks") ?? join(repoRoot, "benchmarks/ui-resolve-bench/tasks"));
  const report = auditHiddenTaskCoverage(JSON.parse(readFileSync(contractPath, "utf8")), tasksRoot);
  const rendered = `${JSON.stringify(report, null, 2)}\n`;
  if (args.get("out")) writeFileSync(resolve(args.get("out")), rendered);
  process.stdout.write(rendered);
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) await main();
