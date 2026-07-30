import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { intakeOwnerReview } from "../../../benchmarks/ui-resolve-bench/scripts/intake-owner-review.mjs";

const AXES = ["functionality", "usability", "fidelity", "ship_preference"];

function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

function fixture() {
  const root = mkdtempSync(join(tmpdir(), "ui-resolve-owner-intake-"));
  const comparison = {
    pair_key: "task:trial-1",
    task: { id: "task-trial-1", version: "1.0.0", core_prompt_sha256: "prompt" },
    selection: "deterministic_ceiling_tie",
    candidates: {
      opaqueA: { variant_id: "candidate-a", label: "Candidate A", directories: ["a"] },
      opaqueB: { variant_id: "candidate-b", label: "Candidate B", directories: ["b"] },
    },
    sides: { a: "opaqueB", b: "opaqueA" },
  };
  const revealPath = join(root, "reveal.json");
  writeJson(revealPath, {
    schema_version: "0.1",
    methodology_epoch: "owner-v1",
    reviewer_hash: "owner",
    comparisons: { comparison1: comparison },
  });
  const judgmentPath = join(root, "judgment.json");
  writeJson(judgmentPath, {
    schema_version: "0.1",
    methodology_epoch: "owner-v1",
    reviewer_hash: "owner",
    family: "task",
    comparisons: [{ comparison_id: "comparison1", trial: 1 }],
    axes: AXES,
    judgments: [{
      comparison_id: "comparison1",
      trial: 1,
      axes: {
        functionality: "tie",
        usability: "a",
        fidelity: "b",
        ship_preference: "both_fail",
      },
    }],
  });
  return { judgmentPath, revealPath };
}

describe("UI-Resolve owner-only review intake", () => {
  it("strictly validates and identity-normalizes blind side judgments", () => {
    const data = fixture();
    expect(intakeOwnerReview(data)).toMatchObject({
      status: "complete",
      counts: { comparisons: 1, axis_judgments: 4 },
      axis_outcomes: {
        functionality: { tie: 1 },
        usability: { "candidate-b": 1 },
        fidelity: { "candidate-a": 1 },
        ship_preference: { both_fail: 1 },
      },
    });
  });

  it("rejects incomplete or trial-mismatched judgment sets", () => {
    const data = fixture();
    const document = JSON.parse(readFileSync(data.judgmentPath, "utf8"));
    document.judgments[0].trial = 2;
    writeJson(data.judgmentPath, document);
    expect(() => intakeOwnerReview(data)).toThrow(/trial mismatch/i);
  });
});
