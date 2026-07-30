import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { intakeHumanEscalation } from "../../../benchmarks/ui-resolve-bench/scripts/intake-human-escalation.mjs";

const AXES = ["functionality", "usability", "fidelity", "ship_preference"];

function writeJson(path, value) {
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

function fixture() {
  const root = mkdtempSync(join(tmpdir(), "ui-resolve-human-intake-"));
  const task = { id: "task-trial-1", version: "1.0.0", core_prompt_sha256: "prompt" };
  const candidates = {
    opaqueSlate: { variant_id: "slate", label: "candidate", directories: ["slate"] },
    opaqueEmber: { variant_id: "ember", label: "candidate", directories: ["ember"] },
  };
  const humanReveal = join(root, "human-reveal.json");
  writeJson(humanReveal, {
    schema_version: "0.1",
    methodology_epoch: "fixture-v1",
    reviewer_hash: "human",
    comparisons: {
      comparison1: {
        task,
        selection: "unresolved",
        candidates,
        sides: { a: "opaqueSlate", b: "opaqueEmber" },
      },
    },
  });
  const human = join(root, "human.json");
  writeJson(human, {
    schema_version: "0.1",
    methodology_epoch: "fixture-v1",
    reviewer_hash: "human",
    family: "task",
    comparisons: [{ comparison_id: "comparison1", trial: 1 }],
    judgments: [{
      comparison_id: "comparison1",
      trial: 1,
      axes: Object.fromEntries(AXES.map((axis) => [axis, "b"])),
    }],
  });
  const automatedJudgments = [];
  const automatedReveals = [];
  for (const [index, choice] of ["a", "a", "b"].entries()) {
    const id = `auto-${index}`;
    const judgment = join(root, `${id}-judgment.json`);
    const reveal = join(root, `${id}-reveal.json`);
    writeJson(judgment, {
      schema_version: "0.3",
      methodology_epoch: "fixture-v1",
      reviewer_hash: id,
      review_unit_id: id,
      task,
      judgments: [{ assignment_id: "primary", axes: Object.fromEntries(AXES.map((axis) => [axis, choice])) }],
    });
    writeJson(reveal, {
      schema_version: "0.3",
      methodology_epoch: "fixture-v1",
      reviewer_hash: id,
      review_unit_id: id,
      task,
      candidates,
      assignments: {
        primary: { a: "opaqueSlate", b: "opaqueEmber", reversed_duplicate: false, reversal_of: null },
      },
    });
    automatedJudgments.push(judgment);
    automatedReveals.push(reveal);
  }
  return { humanReveal, human, automatedJudgments, automatedReveals };
}

describe("UI-Resolve human escalation intake", () => {
  it("normalizes blind sides and measures human versus automated modal agreement", () => {
    const data = fixture();
    const summary = intakeHumanEscalation({
      humanFiles: [data.human],
      humanRevealPath: data.humanReveal,
      automatedJudgmentFiles: data.automatedJudgments,
      automatedRevealFiles: data.automatedReveals,
    });
    expect(summary).toMatchObject({
      status: "complete",
      counts: { families: 1, comparisons: 1, axis_judgments: 4 },
      calibration: {
        overall: {
          ship_preference: {
            human_outcomes: { ember: 1 },
            modal_comparisons: 1,
            modal_matches: 0,
            modal_agreement_rate: 0,
          },
        },
      },
    });
  });

  it("rejects an incomplete human comparison set", () => {
    const data = fixture();
    const secondReveal = JSON.parse(readFileSync(data.humanReveal, "utf8"));
    secondReveal.comparisons.comparison2 = secondReveal.comparisons.comparison1;
    writeJson(data.humanReveal, secondReveal);
    expect(() => intakeHumanEscalation({
      humanFiles: [data.human],
      humanRevealPath: data.humanReveal,
      automatedJudgmentFiles: data.automatedJudgments,
      automatedRevealFiles: data.automatedReveals,
    })).toThrow(/incomplete/i);
  });
});
