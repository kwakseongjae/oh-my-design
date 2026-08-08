import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = resolve(import.meta.dirname, "../../..");
const prepare = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/prepare-sandbox.mjs");
const executeLanes = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/execute-council-lanes-on-matrix.mjs");

function prepareWorkspace(taskId, out) {
  execFileSync(process.execPath, [
    prepare,
    "--task", taskId,
    "--variant", "omd-portable-state-routed-council-lifecycle",
    "--runtime", "codex",
    "--out", out,
    "--allow-dirty-source",
  ], { cwd: repoRoot, encoding: "utf8" });
}

describe("council routed lifecycle lane executor", () => {
  it("closes interview, blocker, and advisory routing with zero providers before implementation", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-council-lane-executor-"));
    try {
      const papyrus = join(root, "cells/papyrus");
      const ceramic = join(root, "cells/ceramic");
      const blocker = join(root, "blocker");
      mkdirSync(join(root, "cells"), { recursive: true });
      prepareWorkspace("papyrus-leaf-return-v0.1", papyrus);
      prepareWorkspace("ceramic-sherd-return-v0.1", ceramic);
      prepareWorkspace("photographic-proof-return-v0.1", blocker);
      writeFileSync(join(root, "matrix-state.json"), `${JSON.stringify({
        schema_version: "0.1",
        cells: [
          { id: "papyrus-provider-zero", workspace: papyrus },
          { id: "ceramic-provider-zero", workspace: ceramic },
        ],
      }, null, 2)}\n`, "utf8");

      execFileSync(process.execPath, [
        executeLanes,
        "--root", root,
        "--blocker-workspace", blocker,
      ], { cwd: repoRoot, encoding: "utf8" });

      const summary = JSON.parse(readFileSync(join(root, "COUNCIL-LIFECYCLE.json"), "utf8"));
      expect(summary).toMatchObject({
        execution_mode: "provider-zero",
        cells: 2,
        lane_calls: 4,
        provider_calls: 0,
        cursor_calls: 0,
        pre_implementation_product_write_count: 0,
        gate: true,
        blocker: {
          task_id: "photographic-proof-return-v0.1",
          context_action: "relay_blocked",
          master_required: false,
          dispatch_required: false,
          product_write_count: 0,
          gate: true,
        },
      });
      expect(summary.results.find((item) => item.task_id === "papyrus-leaf-return-v0.1")).toMatchObject({
        answer_applied: true,
        context_action: "resume_master",
        master_required: true,
        pre_implementation_product_write_count: 0,
        gate: true,
      });
      expect(summary.results.find((item) => item.task_id === "ceramic-sherd-return-v0.1")).toMatchObject({
        answer_applied: false,
        context_action: "resume_master",
        master_required: true,
        pre_implementation_product_write_count: 0,
        gate: true,
      });
      expect(summary.results.flatMap((item) => item.lane_runs)).toHaveLength(4);
      expect(summary.results.flatMap((item) => item.lane_runs).every((lane) => lane.artifact_valid && lane.unauthorized_write_count === 0)).toBe(true);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
