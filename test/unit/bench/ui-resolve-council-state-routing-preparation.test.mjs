import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = resolve(import.meta.dirname, "../../..");
const prepare = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/prepare-sandbox.mjs");

describe("state-routed council-first sandbox preparation", () => {
  it("materializes a zero-dispatch ledger, handoff, and minimal context plan without a provider", () => {
    const parent = mkdtempSync(join(tmpdir(), "omd-council-state-routing-"));
    const out = join(parent, "run");
    try {
      execFileSync(process.execPath, [
        prepare,
        "--task", "manuscript-folio-return-v0.1",
        "--variant", "omd-portable-state-routed-council-first",
        "--runtime", "codex",
        "--out", out,
        "--allow-dirty-source",
      ], { cwd: repoRoot, encoding: "utf8" });
      const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
      const intake = manifest.council_intake;
      expect(intake).toMatchObject({
        mode: "state-routed-council-first",
        model_lane_calls: 0,
        provider_mutable: false,
        handoff_state: "PROPOSE_PLAN",
        context_action: "resume_master",
        master_required: true,
        registered_question_count: 0,
        unplanned_question_count_max: 0,
        blocked_external_evidence_is_not_interview: true,
      });
      expect(intake.deferred_decisions.length).toBeGreaterThan(0);
      expect(readFileSync(join(out, intake.handoff_path), "utf8")).toContain('"state": "PROPOSE_PLAN"');
      expect(readFileSync(join(out, intake.context_plan_path), "utf8")).toContain('"action": "resume_master"');
    } finally {
      rmSync(parent, { recursive: true, force: true });
    }
  });

  it.each([
    ["papyrus-leaf-return-v0.1", { lifecycle_stage: "await_advisory", pre_reconcile_state: "product_authority_pending", registered_question_count: 1 }],
    ["ceramic-sherd-return-v0.1", { lifecycle_stage: "await_advisory", pre_reconcile_state: "advisory_ready", registered_question_count: 0 }],
    ["photographic-proof-return-v0.1", { lifecycle_stage: "checkpoint_hold", context_action: "relay_blocked", implementation_allowed: false }],
  ])("prepares the full routed lifecycle for %s", (taskId, expected) => {
    const parent = mkdtempSync(join(tmpdir(), "omd-council-lifecycle-"));
    const out = join(parent, "run");
    try {
      execFileSync(process.execPath, [
        prepare,
        "--task", taskId,
        "--variant", "omd-portable-state-routed-council-lifecycle",
        "--runtime", "codex",
        "--out", out,
        "--allow-dirty-source",
      ], { cwd: repoRoot, encoding: "utf8" });
      const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
      expect(manifest.council_intake).toMatchObject({
        mode: "state-routed-council-lifecycle",
        model_lane_calls: 0,
        provider_mutable: false,
        unplanned_question_count_max: 0,
        blocked_external_evidence_is_not_interview: true,
        ...expected,
      });
      if (expected.lifecycle_stage === "await_advisory") {
        expect(manifest.council_intake.dispatch_required).toBe(true);
        expect(manifest.council_intake.selected_lanes.length).toBeGreaterThan(0);
        expect(manifest.council_intake.implementation_allowed).toBe(false);
      } else {
        expect(manifest.council_intake.dispatch_required).toBe(false);
        expect(manifest.council_intake.master_required).toBe(false);
      }
    } finally {
      rmSync(parent, { recursive: true, force: true });
    }
  });
});
