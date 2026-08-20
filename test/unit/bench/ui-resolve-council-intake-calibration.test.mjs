import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { auditCouncilIntakeCalibration } from "../../../benchmarks/ui-resolve-bench/scripts/audit-council-intake-calibration.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const corpus = JSON.parse(readFileSync(resolve(
  repoRoot,
  "benchmarks/ui-resolve-bench/fixtures/council-intake-calibration.json",
), "utf8"));

describe("council intake disposition calibration", () => {
  it("covers five locales and rejects every unsupported automatic decision", () => {
    const report = auditCouncilIntakeCalibration(corpus, repoRoot);
    expect(report).toMatchObject({
      case_count: 22,
      locale_counts: { ko: 6, en: 9, ja: 2, "zh-cn": 3, "zh-tw": 2 },
      unsupported_auto_count: 0,
      expectation_failure_count: 0,
      calibration_pass: true,
    });
    expect(report.auto_decision_count).toBeGreaterThan(0);
  });

  it("fails closed when a ground-truth disposition is changed", () => {
    const mutated = structuredClone(corpus);
    mutated.cases[0].expect["primary-audience"] = "interview";
    const report = auditCouncilIntakeCalibration(mutated, repoRoot);
    expect(report.calibration_pass).toBe(false);
    expect(report.expectation_failure_count).toBe(1);
  });
});
