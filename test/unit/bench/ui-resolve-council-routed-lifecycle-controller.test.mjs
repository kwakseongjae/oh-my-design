import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = resolve(import.meta.dirname, "../../..");
const runner = resolve(repoRoot, "benchmarks/ui-resolve-bench/scripts/prepare-council-routed-lifecycle.mjs");
const fixture = resolve(repoRoot, "benchmarks/ui-resolve-bench/fixtures/council-routed-lifecycle-1.9.793.json");

describe("council routed lifecycle provider-zero controller", () => {
  it("holds every product behind its registered checkpoint and applies only the exact simulated answer receipt", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-council-routed-lifecycle-"));
    try {
      execFileSync(process.execPath, [runner, fixture, root], { cwd: repoRoot, encoding: "utf8" });
      const summary = JSON.parse(readFileSync(join(root, "SUMMARY.json"), "utf8"));
      expect(summary).toMatchObject({
        execution_mode: "provider-zero",
        task_count: 3,
        provider_calls: 0,
        model_calls: 0,
        cursor_calls: 0,
        route_gate: true,
        implementation_before_checkpoint_count: 0,
        total_product_write_count: 0,
      });
      const interview = summary.results.find((item) => item.task_id === "papyrus-leaf-return-v0.1");
      expect(interview).toMatchObject({
        initial_action: "relay_questions",
        initial_master_required: false,
        answer_receipt_written: true,
        post_answer_action: "resume_master",
        post_answer_master_required: true,
        route_gate: true,
      });
      const blocked = summary.results.find((item) => item.task_id === "photographic-proof-return-v0.1");
      expect(blocked).toMatchObject({
        dispatch_required: false,
        initial_action: "relay_blocked",
        initial_master_required: false,
        answer_receipt_written: false,
        route_gate: true,
      });
      const advisory = summary.results.find((item) => item.task_id === "ceramic-sherd-return-v0.1");
      expect(advisory).toMatchObject({
        dispatch_required: true,
        initial_action: "resume_master",
        initial_master_required: true,
        answer_receipt_written: false,
        route_gate: true,
      });
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
