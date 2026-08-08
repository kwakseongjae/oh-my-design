import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { auditHiddenTaskCoverage } from "../../../benchmarks/ui-resolve-bench/scripts/audit-hidden-task-coverage.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const contract = JSON.parse(readFileSync(resolve(repoRoot, "benchmarks/ui-resolve-bench/hidden-task-coverage-contract.json"), "utf8"));

describe("hidden task coverage audit", () => {
  it("does not confuse the public task inventory with eligible hidden coverage", () => {
    const report = auditHiddenTaskCoverage(contract, resolve(repoRoot, "benchmarks/ui-resolve-bench/tasks"));
    expect(report.inventory_task_count).toBe(114);
    expect(report.inventory_locales).toEqual(["en", "ko"]);
    expect(report.eligible_hidden_task_count).toBe(0);
    expect(report.missing_locales).toEqual(["en", "ko", "ja", "zh-cn", "zh-tw"]);
    expect(report.missing_dimensions).toEqual(contract.required_dimensions);
    expect(report.gate_pass).toBe(false);
    expect(report.decision).toBe("BLOCK_HIDDEN_TASK_COVERAGE_CLAIM");
  });

  it("passes only an explicit 24-task, five-locale, all-dimension denominator", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-hidden-coverage-"));
    for (let index = 0; index < 24; index += 1) {
      const id = `hidden-${String(index).padStart(2, "0")}`;
      const dir = join(root, id);
      mkdirSync(dir);
      const locale = contract.required_locales[index % contract.required_locales.length];
      const task = {
        id,
        track: index === 0 ? "creation" : index === 1 ? "open-brief" : "repair",
        locale,
        benchmark_visibility: "hidden",
        independent_audit: "eligible",
        journey_oracle: {},
        viewports: [{ name: "mobile" }, { name: "narrow-320" }, { name: "css-zoom-surrogate-200" }],
        semantic_oracle: {},
        protected_unknown_patterns: ["unknown"],
        screenshot_oracle: index === 2 ? {} : undefined,
        open_brief_oracle: index === 1 ? {} : undefined,
      };
      writeFileSync(join(dir, "task.json"), JSON.stringify(task));
    }
    const report = auditHiddenTaskCoverage(contract, root);
    expect(report.eligible_hidden_task_count).toBe(24);
    expect(report.missing_locales).toEqual([]);
    expect(report.missing_dimensions).toEqual([]);
    expect(report.gate_pass).toBe(true);
  });
});
