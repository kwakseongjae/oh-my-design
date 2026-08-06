#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");
const sourceRoot = resolve(process.argv[2] || "/private/tmp/omd-council-effectiveness-1.9.736-live");
const outputRoot = resolve(process.argv[3] || "/private/tmp/omd-council-lane-cap-1.9.738-replay");
const fixture = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/fixtures/council-effectiveness-pilot.json"), "utf8"));
const reconcile = join(repoRoot, "scripts/design-council-reconcile.cjs");

function effectiveMap(ledger) {
  return Object.fromEntries(ledger.decisions.map((item) => [item.id, item.effective_disposition || item.disposition]));
}

rmSync(outputRoot, { recursive: true, force: true });
mkdirSync(outputRoot, { recursive: true });
const results = [];

for (const testCase of fixture.cases) {
  const sourceCase = join(sourceRoot, "cases", testCase.id);
  const targetCase = join(outputRoot, "cases", testCase.id);
  cpSync(sourceCase, targetCase, { recursive: true });
  const runDir = join(targetCase, ".omd/run");
  const councilDir = join(runDir, "council");
  const fullLedger = JSON.parse(readFileSync(join(sourceCase, ".omd/run/council/reconciled-ledger.json"), "utf8"));
  const planPath = join(councilDir, "dispatch-plan.json");
  const plan = JSON.parse(readFileSync(planPath, "utf8"));
  const originalLaneCount = plan.selected_lanes.length;
  plan.selected_lanes = plan.selected_lanes.slice(0, 2);
  plan.max_pre_intake_calls = 2;
  writeFileSync(planPath, `${JSON.stringify(plan, null, 2)}\n`);
  const run = spawnSync(process.execPath, [reconcile, targetCase, runDir], { encoding: "utf8" });
  if (run.status !== 0) throw new Error(run.stderr || `reconcile failed for ${testCase.id}`);
  const compactLedger = JSON.parse(readFileSync(join(councilDir, "reconciled-ledger.json"), "utf8"));
  const full = effectiveMap(fullLedger);
  const compact = effectiveMap(compactLedger);
  const changedDecisionIds = Object.keys(full).filter((id) => full[id] !== compact[id]);
  results.push({
    id: testCase.id,
    original_lane_count: originalLaneCount,
    compact_lane_count: plan.selected_lanes.length,
    retained_lane_ids: plan.selected_lanes.map((lane) => lane.id),
    changed_decision_ids: changedDecisionIds,
    exact_disposition_match: changedDecisionIds.length === 0,
    full_effective_dispositions: full,
    compact_effective_dispositions: compact,
  });
}

const summary = {
  schema_version: "0.1",
  experiment_id: "council-lane-cap-replay-1.9.738",
  provider_calls: 0,
  source_experiment: "council-effectiveness-pilot-1.9.736",
  case_count: results.length,
  original_lane_count: results.reduce((sum, item) => sum + item.original_lane_count, 0),
  compact_lane_count: results.reduce((sum, item) => sum + item.compact_lane_count, 0),
  exact_disposition_match: results.every((item) => item.exact_disposition_match),
  results,
};
writeFileSync(join(outputRoot, "SUMMARY.json"), `${JSON.stringify(summary, null, 2)}\n`);
process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
