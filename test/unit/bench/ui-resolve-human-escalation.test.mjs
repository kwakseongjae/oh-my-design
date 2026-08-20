import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { selectHumanEscalation } from "../../../benchmarks/ui-resolve-bench/scripts/select-human-escalation.mjs";

function writeJson(path, value) {
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function unit(root, { task, reviewer, primary = "a", reverse = "b" }) {
  const id = `${task}-${reviewer}`;
  const taskRecord = { id: task, version: "1.0.0", core_prompt_sha256: `prompt-${task}` };
  const judgment = join(root, "judgments", `${id}.json`);
  const reveal = join(root, "reveals", `${id}.json`);
  writeJson(judgment, {
    schema_version: "0.3",
    methodology_epoch: "fixture-v1",
    reviewer_hash: reviewer,
    review_unit_id: id,
    task: taskRecord,
    judgments: [
      { assignment_id: "primary", axes: Object.fromEntries(["functionality", "usability", "fidelity", "ship_preference"].map((axis) => [axis, primary])) },
      { assignment_id: "reverse", axes: Object.fromEntries(["functionality", "usability", "fidelity", "ship_preference"].map((axis) => [axis, reverse])) },
    ],
  });
  writeJson(reveal, {
    schema_version: "0.3",
    methodology_epoch: "fixture-v1",
    reviewer_hash: reviewer,
    review_unit_id: id,
    task: taskRecord,
    candidates: {
      opaqueA: { directory: `${task}-slate`, variant_id: "slate", label: "candidate" },
      opaqueB: { directory: `${task}-ember`, variant_id: "ember", label: "candidate" },
    },
    assignments: {
      primary: { a: "opaqueA", b: "opaqueB", reversed_duplicate: false, reversal_of: null },
      reverse: { a: "opaqueB", b: "opaqueA", reversed_duplicate: true, reversal_of: "primary" },
    },
  });
  return { judgment, reveal };
}

describe("UI-Resolve reduced-human escalation selection", () => {
  it("selects disagreement and reversal uncertainty while bounding a deterministic audit sample", () => {
    const root = mkdtempSync(join(tmpdir(), "ui-resolve-escalation-"));
    const records = [
      unit(root, { task: "stable", reviewer: "one" }),
      unit(root, { task: "stable", reviewer: "two" }),
      unit(root, { task: "unstable", reviewer: "one" }),
      unit(root, { task: "unstable", reviewer: "two", primary: "b", reverse: "b" }),
    ];
    const selection = selectHumanEscalation({
      judgmentFiles: records.map((record) => record.judgment),
      revealFiles: records.map((record) => record.reveal),
      auditCount: 1,
      seed: "fixed",
    });
    expect(selection.counts).toEqual({
      pairs_total: 2,
      unresolved: 1,
      resolved: 1,
      audit_selected: 1,
      selected: 2,
    });
    expect(selection.selected.find((item) => item.task.id === "unstable")).toMatchObject({
      selection: "unresolved",
      reasons: {
        cross_judge_disagreement: { functionality: ["ember", "slate"] },
      },
    });
    expect(selection.selected.find((item) => item.task.id === "stable").selection).toBe("audit_sample");
  });

  it("rejects a negative audit bound", () => {
    expect(() => selectHumanEscalation({
      judgmentFiles: [],
      revealFiles: [],
      auditCount: -1,
    })).toThrow(/non-negative integer/i);
  });
});
