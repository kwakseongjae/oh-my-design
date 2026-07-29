import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { aggregatePreference } from "../../../benchmarks/ui-resolve-bench/scripts/aggregate-ship-preference.mjs";

const AXES = ["functionality", "usability", "fidelity", "ship_preference"];
const aggregateScript = resolve(
  import.meta.dirname,
  "../../../benchmarks/ui-resolve-bench/scripts/aggregate-ship-preference.mjs",
);

function writeJson(path, value) {
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function fixture() {
  const root = mkdtempSync(join(tmpdir(), "ui-resolve-preference-"));
  const judgments = [];
  const reveals = [];
  const reviewerSpecs = [
    {
      reviewer: "reviewer-01",
      candidates: ["candidate-omd", "candidate-raw"],
      primary: { functionality: "a", usability: "a", fidelity: "a", ship_preference: "a" },
      reverse: { functionality: "b", usability: "b", fidelity: "b", ship_preference: "b" },
    },
    {
      reviewer: "reviewer-02",
      candidates: ["candidate-raw", "candidate-omd"],
      primary: { functionality: "b", usability: "b", fidelity: "b", ship_preference: "b" },
      reverse: { functionality: "a", usability: "a", fidelity: "a", ship_preference: "a" },
    },
    {
      reviewer: "reviewer-03",
      candidates: ["candidate-omd", "candidate-raw"],
      primary: { functionality: "tie", usability: "tie", fidelity: "both_fail", ship_preference: "tie" },
      reverse: { functionality: "a", usability: "tie", fidelity: "both_fail", ship_preference: "tie" },
    },
  ];
  for (const spec of reviewerSpecs) {
    const judgmentPath = join(root, "judgments", `${spec.reviewer}.json`);
    const revealPath = join(root, "reveals", `${spec.reviewer}.json`);
    writeJson(judgmentPath, {
      schema_version: "0.2",
      methodology_epoch: "ship-preview-2026q3",
      reviewer_hash: spec.reviewer,
      judgments: [
        { assignment_id: "primary", axes: spec.primary },
        { assignment_id: "reverse", axes: spec.reverse },
      ],
    });
    writeJson(revealPath, {
      schema_version: "0.2",
      methodology_epoch: "ship-preview-2026q3",
      reviewer_hash: spec.reviewer,
      task: {
        id: "incident-operations-v0.1",
        version: "0.4.0",
        core_prompt_sha256: "fixture-core-prompt",
      },
      candidates: {
        "candidate-omd": { directory: "omd", variant_id: "omd-apply", label: "OmD Apply" },
        "candidate-raw": { directory: "raw", variant_id: "raw-design-md", label: "Raw DESIGN.md" },
      },
      assignments: {
        primary: {
          a: spec.candidates[0],
          b: spec.candidates[1],
          reversed_duplicate: false,
          reversal_of: null,
        },
        reverse: {
          a: spec.candidates[1],
          b: spec.candidates[0],
          reversed_duplicate: true,
          reversal_of: "primary",
        },
      },
    });
    judgments.push(judgmentPath);
    reveals.push(revealPath);
  }
  return { root, judgments, reveals };
}

function aggregate(input, overrides = {}) {
  return aggregatePreference({
    judgmentFiles: input.judgments,
    revealFiles: input.reveals,
    bootstrapIterations: 200,
    seed: "fixed-calibration-seed",
    ...overrides,
  });
}

describe("UI-Resolve Ship Preference aggregation", () => {
  it("normalizes side choices, excludes reversals from primary votes, and emits stable intervals", () => {
    const input = fixture();
    const first = aggregate(input);
    const repeated = aggregate(input);
    expect(repeated).toEqual(first);
    expect(first).toMatchObject({
      schema_version: "0.2",
      aggregation_version: "1.9.75",
      methodology_epoch: "ship-preview-2026q3",
      inputs: {
        reviewers: 3,
        primary_assignments: 3,
        reversed_assignments: 3,
      },
      reversal_consistency: {
        comparisons: 12,
        consistent: 11,
        inconsistent: 1,
      },
    });
    expect(first.axes.functionality).toMatchObject({
      primary_vote_count: 3,
      tie_count: 1,
      both_fail_count: 0,
      modal_agreement: {
        groups: 1,
        modal_votes: 2,
        total_votes: 3,
      },
    });
    expect(first.axes.fidelity).toMatchObject({
      primary_vote_count: 3,
      both_fail_count: 1,
    });
    expect(first.axes.ship_preference.candidates["omd-apply"].rating)
      .toBeGreaterThan(first.axes.ship_preference.candidates["raw-design-md"].rating);
    expect(first.axes.ship_preference.candidates["omd-apply"].rating_95_ci).toHaveLength(2);
    expect(first.axes.ship_preference.candidates["omd-apply"].rank_95_interval).toHaveLength(2);
    expect(JSON.stringify(first)).not.toContain("candidate-omd");
  });

  it("keeps all-tie Bradley-Terry ratings and ranks symmetric", () => {
    const input = fixture();
    for (const path of input.judgments) {
      const document = JSON.parse(readFileSync(path, "utf8"));
      for (const judgment of document.judgments) {
        judgment.axes = Object.fromEntries(AXES.map((axis) => [axis, "tie"]));
      }
      writeJson(path, document);
    }
    const result = aggregate(input);
    for (const axis of AXES) {
      expect(result.axes[axis].candidates["omd-apply"].rating)
        .toBe(result.axes[axis].candidates["raw-design-md"].rating);
      expect(result.axes[axis].candidates["omd-apply"].rank).toBe(1.5);
      expect(result.axes[axis].candidates["raw-design-md"].rank).toBe(1.5);
    }
  });

  it("writes byte-stable JSON and a readable Markdown companion through the CLI", () => {
    const input = fixture();
    const run = (suffix) => {
      const out = join(input.root, `summary-${suffix}.json`);
      const stdout = execFileSync(process.execPath, [
        aggregateScript,
        "--judgments", join(input.root, "judgments"),
        "--reveals", join(input.root, "reveals"),
        "--out", out,
        "--bootstrap", "2000",
        "--seed", "fixed-calibration-seed",
      ], { encoding: "utf8" });
      return { out, stdout: JSON.parse(stdout) };
    };
    const first = run("one");
    const repeated = run("two");
    expect(readFileSync(repeated.out, "utf8")).toBe(readFileSync(first.out, "utf8"));
    expect(first.stdout).toMatchObject({
      methodology_epoch: "ship-preview-2026q3",
      reviewers: 3,
      tasks: 1,
    });
    const markdown = first.out.replace(/\.json$/, ".md");
    expect(existsSync(markdown)).toBe(true);
    expect(readFileSync(markdown, "utf8")).toContain("## ship_preference");
    expect(readFileSync(markdown, "utf8")).toContain("Synthetic calibration");
  });

  it("fails closed on epoch mismatch, a missing axis, and an unknown assignment", () => {
    const epochInput = fixture();
    const epochReveal = JSON.parse(readFileSync(epochInput.reveals[0], "utf8"));
    epochReveal.methodology_epoch = "ship-preview-2026q4";
    writeJson(epochInput.reveals[0], epochReveal);
    expect(() => aggregate(epochInput)).toThrow(/share one methodology epoch/i);

    const axisInput = fixture();
    const axisJudgment = JSON.parse(readFileSync(axisInput.judgments[0], "utf8"));
    delete axisJudgment.judgments[0].axes.fidelity;
    writeJson(axisInput.judgments[0], axisJudgment);
    expect(() => aggregate(axisInput)).toThrow(/axes.*exactly/i);

    const assignmentInput = fixture();
    const assignmentJudgment = JSON.parse(readFileSync(assignmentInput.judgments[0], "utf8"));
    assignmentJudgment.judgments[0].assignment_id = "unknown";
    writeJson(assignmentInput.judgments[0], assignmentJudgment);
    expect(() => aggregate(assignmentInput)).toThrow(/unknown assignment/i);
  });

  it("fails when either side contains the same reviewer twice", () => {
    const input = fixture();
    const duplicate = join(input.root, "duplicate-reviewer.json");
    writeFileSync(duplicate, readFileSync(input.judgments[0]));
    expect(() => aggregate(input, { judgmentFiles: [...input.judgments, duplicate] }))
      .toThrow(/duplicate reviewer judgment/i);
  });
});
