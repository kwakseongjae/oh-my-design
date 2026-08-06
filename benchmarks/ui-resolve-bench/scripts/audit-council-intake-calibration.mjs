#!/usr/bin/env node
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

export function auditCouncilIntakeCalibration(corpus, repoRoot) {
  const helper = resolve(repoRoot, "scripts/design-council-prime.cjs");
  const failures = [];
  const localeCounts = {};
  let autoCount = 0;
  let unsupportedAutoCount = 0;

  for (const calibrationCase of corpus.cases ?? []) {
    const root = mkdtempSync(join(tmpdir(), "omd-council-calibration-"));
    try {
      const runDir = join(root, ".omd/runs/run-calibration");
      mkdirSync(runDir, { recursive: true });
      writeFileSync(join(runDir, "task.md"), `# Harness Task\n\n${calibrationCase.task}\n\n---\n- run_id: calibration\n`);
      if (!calibrationCase.ctx_missing) {
        writeFileSync(join(runDir, "ctx-prime.json"), `${JSON.stringify(calibrationCase.ctx ?? {})}\n`);
      }
      if (calibrationCase.design_md) writeFileSync(join(root, "DESIGN.md"), calibrationCase.design_md);
      const result = spawnSync(process.execPath, [helper, root, runDir], { encoding: "utf8" });
      if (result.status !== 0) {
        failures.push({ id: calibrationCase.id, error: result.stderr.trim() || `helper exit ${result.status}` });
        continue;
      }
      const ledger = JSON.parse(readFileSync(join(runDir, "council/decision-ledger.json"), "utf8"));
      const byId = new Map(ledger.decisions.map((item) => [item.id, item]));
      localeCounts[calibrationCase.locale] = (localeCounts[calibrationCase.locale] ?? 0) + 1;

      for (const [decisionId, expectedDisposition] of Object.entries(calibrationCase.expect ?? {})) {
        const actual = byId.get(decisionId)?.disposition;
        if (actual !== expectedDisposition) failures.push({
          id: calibrationCase.id, decision_id: decisionId, expected: expectedDisposition, actual,
        });
      }
      for (const [decisionId, expectedValue] of Object.entries(calibrationCase.expect_values ?? {})) {
        const actual = byId.get(decisionId)?.proposed_value;
        if (actual !== expectedValue) failures.push({
          id: calibrationCase.id, decision_id: decisionId, expected_value: expectedValue, actual_value: actual,
        });
      }
      for (const item of ledger.decisions) {
        if (item.disposition !== "auto") continue;
        autoCount += 1;
        const grounded = item.proposed_value !== null && Array.isArray(item.evidence) && item.evidence.length > 0;
        const authorized = item.authority === "user-stated"
          || (item.confidence >= 0.75 && item.impact === "low" && item.reversibility === "easy");
        if (!grounded || !authorized) unsupportedAutoCount += 1;
      }
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  }

  return {
    schema_version: "0.1",
    experiment_id: corpus.experiment_id,
    case_count: corpus.cases?.length ?? 0,
    locale_counts: localeCounts,
    auto_decision_count: autoCount,
    unsupported_auto_count: unsupportedAutoCount,
    expectation_failure_count: failures.length,
    failures,
    calibration_pass: failures.length === 0 && unsupportedAutoCount === 0,
    claim_boundary: corpus.claim_boundary,
  };
}

async function main() {
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const repoRoot = resolve(scriptDir, "../../..");
  const corpusPath = process.argv[2]
    ? resolve(process.argv[2])
    : resolve(repoRoot, "benchmarks/ui-resolve-bench/fixtures/council-intake-calibration.json");
  const corpus = JSON.parse(readFileSync(corpusPath, "utf8"));
  const report = auditCouncilIntakeCalibration(corpus, repoRoot);
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  process.exitCode = report.calibration_pass ? 0 : 1;
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) await main();
