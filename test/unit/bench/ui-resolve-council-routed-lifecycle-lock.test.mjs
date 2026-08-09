import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { treeManifest } from "../../../benchmarks/ui-resolve-bench/scripts/_lib.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const lock = JSON.parse(readFileSync(resolve(repoRoot, "benchmarks/ui-resolve-bench/reports/council-routed-lifecycle-task-lock-1.9.792/TASK-LOCK.json"), "utf8"));
const sha256 = (value) => createHash("sha256").update(value).digest("hex");

describe("council routed lifecycle task lock", () => {
  it("keeps task, oracle, helper, and activation bytes immutable", () => {
    expect(lock.task_source_commit).toMatch(/^[a-f0-9]{40}$/);
    expect(lock.execution_allowed).toBe(false);
    expect(lock.provider_calls).toBe(0);
    expect(lock.cursor_calls).toBe(0);
    for (const item of lock.tasks) {
      const root = resolve(repoRoot, "benchmarks/ui-resolve-bench/tasks", item.task_id);
      const task = JSON.parse(readFileSync(resolve(root, "task.json"), "utf8"));
      expect(treeManifest(root).sha256).toBe(item.task_tree_sha256);
      expect(sha256(readFileSync(resolve(root, "PROMPT.md")))).toBe(item.prompt_sha256);
      expect(sha256(readFileSync(resolve(root, "starter/index.html")))).toBe(item.starter_index_sha256);
      expect(sha256(readFileSync(resolve(root, "starter/DESIGN.md")))).toBe(item.starter_design_sha256);
      expect(sha256(readFileSync(resolve(root, "task.json")))).toBe(item.task_json_sha256);
      expect(sha256(readFileSync(resolve(root, "baseline-critical-gates.json")))).toBe(item.baseline_evidence_sha256);
      expect(sha256(JSON.stringify(task.omd_reflow_source_contract))).toBe(item.source_contract_sha256);
      expect(sha256(JSON.stringify(task.council_routing_oracle))).toBe(item.council_oracle_sha256);
    }
    for (const [path, expected] of Object.entries(lock.helper_hashes)) {
      const lockedBytes = execFileSync("git", ["-C", repoRoot, "show", `${lock.task_source_commit}:${path}`]);
      expect(sha256(lockedBytes)).toBe(expected);
    }
  });
});
