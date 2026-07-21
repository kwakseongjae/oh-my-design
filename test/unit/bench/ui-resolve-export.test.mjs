import { describe, expect, it } from "vitest";
import {
  buildRunRecord,
  classifyRunStatus,
  classifyValidity,
} from "../../../benchmarks/ui-resolve-bench/scripts/export-run-record.mjs";

const manifest = {
  task: { id: "pricing-conversion-v0.1", version: "0.1.0" },
  variant: {
    id: "omd-portable",
    activation_delta_sha256: "activation-sha",
    track_eligibility: { eligible: true, off_label: false },
  },
  skill: {
    declared_name: "omd:apply",
    source_commit: "abc123",
    source_attestation: { publishable: true, dirty: false },
  },
};

const run = {
  runtime: { model: "gpt-5.6-terra" },
  process: { exit_code: 0, timed_out: false, wall_ms: 1200 },
  workspace: {
    product_changed: true,
    changed_product_files: [{ path: "index.html", status: "modified" }],
  },
};

const score = {
  status: { automated_gate_pass: true },
  points: { deterministic_total: 81, deterministic_max: 85 },
};

describe("UI-Resolve normalized run exporter", () => {
  it("exports a valid skill-family record with delivery evidence", () => {
    const record = buildRunRecord({
      workspace: "/tmp/run-001",
      manifest,
      run,
      score,
      family: "skill",
      systemId: "omd-portable",
      trialIndex: 2,
      suiteVersion: "0.2.0",
      budgetTier: "standard",
    });
    expect(record).toMatchObject({
      run_id: "run-001",
      benchmark_family: "skill",
      system_id: "omd-portable",
      model_id: "gpt-5.6-terra",
      skill_id: "omd:apply",
      harness_id: null,
      task_id: "pricing-conversion-v0.1",
      trial_index: 2,
      run_status: "complete",
      validity: "valid",
      ui_resolved: true,
      objective_score: 81,
      delivery: {
        product_changed: true,
        changed_product_files: [{ path: "index.html", status: "modified" }],
      },
    });
  });

  it("invalidates dirty attribution and off-label tasks without hiding run status", () => {
    const dirty = structuredClone(manifest);
    dirty.skill.source_attestation.publishable = false;
    expect(classifyValidity(dirty, "complete", score)).toBe("invalid-attribution");

    const offLabel = structuredClone(manifest);
    offLabel.variant.track_eligibility.off_label = true;
    expect(classifyValidity(offLabel, "complete", score)).toBe("invalid-task");
    expect(classifyRunStatus({ process: { timed_out: true } }, null)).toBe("timed_out");
    expect(classifyRunStatus({ process: { exit_code: 1 } }, null)).toBe("failed");
  });
});
