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
    const task = {
      id: "incident-operations-v0.1",
      version: "0.4.0",
      core_prompt_sha256: "fixture-core-prompt",
    };
    const reviewUnitId = `review-unit-${spec.reviewer}-incident`;
    const judgmentPath = join(root, "judgments", `${spec.reviewer}.json`);
    const revealPath = join(root, "reveals", `${spec.reviewer}.json`);
    writeJson(judgmentPath, {
      schema_version: "0.3",
      methodology_epoch: "ship-preview-2026q3",
      reviewer_hash: spec.reviewer,
      review_unit_id: reviewUnitId,
      task,
      judgments: [
        { assignment_id: "primary", axes: spec.primary },
        { assignment_id: "reverse", axes: spec.reverse },
      ],
    });
    writeJson(revealPath, {
      schema_version: "0.3",
      methodology_epoch: "ship-preview-2026q3",
      reviewer_hash: spec.reviewer,
      review_unit_id: reviewUnitId,
      task,
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

function panelFixture({
  taskCount,
  reviewerCount,
  candidateIds = ["omd-apply", "raw-design-md"],
  choiceFor = ({ defaultChoice }) => defaultChoice ?? "a",
}) {
  const root = mkdtempSync(join(tmpdir(), "ui-resolve-panel-"));
  const judgments = [];
  const reveals = [];
  for (let taskIndex = 0; taskIndex < taskCount; taskIndex += 1) {
    const task = {
      id: `task-${String(taskIndex + 1).padStart(2, "0")}`,
      version: "1.0.0",
      core_prompt_sha256: `prompt-${taskIndex + 1}`,
    };
    for (let reviewerIndex = 0; reviewerIndex < reviewerCount; reviewerIndex += 1) {
      const reviewer = `reviewer-${String(reviewerIndex + 1).padStart(2, "0")}`;
      const reviewUnitId = `review-unit-${taskIndex + 1}-${reviewerIndex + 1}`;
      const candidates = Object.fromEntries(candidateIds.map((id, index) => [
        `opaque-${index}`,
        { directory: id, variant_id: id, label: id },
      ]));
      const assignments = {};
      const judgmentItems = [];
      let firstPrimary = null;
      for (let left = 0; left < candidateIds.length; left += 1) {
        for (let right = left + 1; right < candidateIds.length; right += 1) {
          const assignmentId = `primary-${left}-${right}`;
          if (!firstPrimary) firstPrimary = assignmentId;
          assignments[assignmentId] = {
            a: `opaque-${left}`,
            b: `opaque-${right}`,
            reversed_duplicate: false,
            reversal_of: null,
          };
          judgmentItems.push({
            assignment_id: assignmentId,
            axes: Object.fromEntries(AXES.map((axis) => [
              axis,
              choiceFor({ taskIndex, reviewerIndex, left, right, axis, reversed: false }),
            ])),
          });
        }
      }
      const original = assignments[firstPrimary];
      assignments.reverse = {
        a: original.b,
        b: original.a,
        reversed_duplicate: true,
        reversal_of: firstPrimary,
      };
      judgmentItems.push({
        assignment_id: "reverse",
        axes: Object.fromEntries(AXES.map((axis) => {
          const primaryChoice = judgmentItems[0].axes[axis];
          const defaultReverse = primaryChoice === "a" ? "b" : primaryChoice === "b" ? "a" : primaryChoice;
          return [
            axis,
            choiceFor({
              taskIndex,
              reviewerIndex,
              left: 1,
              right: 0,
              axis,
              reversed: true,
              defaultChoice: defaultReverse,
            }) ?? defaultReverse,
          ];
        })),
      });
      const judgmentPath = join(root, "judgments", `${reviewUnitId}.json`);
      const revealPath = join(root, "reveals", `${reviewUnitId}.json`);
      writeJson(judgmentPath, {
        schema_version: "0.3",
        methodology_epoch: "readiness-2026q3",
        reviewer_hash: reviewer,
        review_unit_id: reviewUnitId,
        task,
        judgments: judgmentItems,
      });
      writeJson(revealPath, {
        schema_version: "0.3",
        methodology_epoch: "readiness-2026q3",
        reviewer_hash: reviewer,
        review_unit_id: reviewUnitId,
        task,
        candidates,
        assignments,
      });
      judgments.push(judgmentPath);
      reveals.push(revealPath);
    }
  }
  return { root, judgments, reveals };
}

describe("UI-Resolve Ship Preference aggregation", () => {
  it("normalizes side choices, excludes reversals from primary votes, and emits stable intervals", () => {
    const input = fixture();
    const first = aggregate(input);
    const repeated = aggregate(input);
    expect(repeated).toEqual(first);
    expect(first).toMatchObject({
      schema_version: "0.3",
      aggregation_version: "1.9.76",
      methodology_epoch: "ship-preview-2026q3",
      inputs: {
        reviewers: 3,
        review_units: 3,
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
    expect(readFileSync(markdown, "utf8")).toContain("overall benchmark publication");
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

  it("rejects legacy schema 0.2 instead of promoting it to readiness evidence", () => {
    const input = fixture();
    const judgment = JSON.parse(readFileSync(input.judgments[0], "utf8"));
    judgment.schema_version = "0.2";
    writeJson(input.judgments[0], judgment);
    expect(() => aggregate(input)).toThrow(/schema_version must be 0\.3/i);
  });

  it("fails when either side contains the same review unit twice", () => {
    const input = fixture();
    const duplicate = join(input.root, "duplicate-reviewer.json");
    writeFileSync(duplicate, readFileSync(input.judgments[0]));
    expect(() => aggregate(input, { judgmentFiles: [...input.judgments, duplicate] }))
      .toThrow(/duplicate review unit judgment/i);
  });

  it("lets one stable reviewer cover multiple tasks without inflating reviewer count", () => {
    const input = panelFixture({ taskCount: 2, reviewerCount: 1 });
    const result = aggregate(input, { bootstrapIterations: 10 });
    expect(result.inputs).toMatchObject({
      reviewers: 1,
      review_units: 2,
    });
    expect(result.coverage.tasks).toBe(2);
    expect(result.readiness.grade).toBe("diagnostic");
  });

  it("fails closed on duplicate reviewer-task, task mismatch, and review-unit mismatch", () => {
    const duplicateInput = panelFixture({ taskCount: 1, reviewerCount: 1 });
    const duplicateJudgment = JSON.parse(readFileSync(duplicateInput.judgments[0], "utf8"));
    const duplicateReveal = JSON.parse(readFileSync(duplicateInput.reveals[0], "utf8"));
    duplicateJudgment.review_unit_id = "review-unit-duplicate";
    duplicateReveal.review_unit_id = "review-unit-duplicate";
    const duplicateJudgmentPath = join(duplicateInput.root, "judgments", "duplicate.json");
    const duplicateRevealPath = join(duplicateInput.root, "reveals", "duplicate.json");
    writeJson(duplicateJudgmentPath, duplicateJudgment);
    writeJson(duplicateRevealPath, duplicateReveal);
    expect(() => aggregate(duplicateInput, {
      judgmentFiles: [...duplicateInput.judgments, duplicateJudgmentPath],
      revealFiles: [...duplicateInput.reveals, duplicateRevealPath],
    })).toThrow(/duplicate reviewer-task/i);

    const taskInput = panelFixture({ taskCount: 1, reviewerCount: 1 });
    const taskJudgment = JSON.parse(readFileSync(taskInput.judgments[0], "utf8"));
    taskJudgment.task.version = "2.0.0";
    writeJson(taskInput.judgments[0], taskJudgment);
    expect(() => aggregate(taskInput)).toThrow(/task\.version mismatch/i);

    const unitInput = panelFixture({ taskCount: 1, reviewerCount: 1 });
    const unitJudgment = JSON.parse(readFileSync(unitInput.judgments[0], "utf8"));
    unitJudgment.review_unit_id = "wrong-review-unit";
    writeJson(unitInput.judgments[0], unitJudgment);
    expect(() => aggregate(unitInput)).toThrow(/review-unit set/i);
  });

  it("fails closed on a missing candidate pair and inconsistent task candidate sets", () => {
    const pairInput = panelFixture({
      taskCount: 1,
      reviewerCount: 1,
      candidateIds: ["omd-apply", "raw-design-md", "third"],
    });
    const pairReveal = JSON.parse(readFileSync(pairInput.reveals[0], "utf8"));
    const pairJudgment = JSON.parse(readFileSync(pairInput.judgments[0], "utf8"));
    delete pairReveal.assignments["primary-1-2"];
    pairJudgment.judgments = pairJudgment.judgments.filter((item) => item.assignment_id !== "primary-1-2");
    writeJson(pairInput.reveals[0], pairReveal);
    writeJson(pairInput.judgments[0], pairJudgment);
    expect(() => aggregate(pairInput)).toThrow(/primary candidate pairs/i);

    const candidateInput = panelFixture({ taskCount: 1, reviewerCount: 2 });
    const candidateReveal = JSON.parse(readFileSync(candidateInput.reveals[1], "utf8"));
    candidateReveal.candidates["opaque-1"].variant_id = "different-candidate";
    candidateReveal.candidates["opaque-1"].label = "different-candidate";
    writeJson(candidateInput.reveals[1], candidateReveal);
    expect(() => aggregate(candidateInput)).toThrow(/inconsistent candidate set/i);
  });

  it("suppresses every rating field when an axis graph is disconnected", () => {
    const input = panelFixture({
      taskCount: 1,
      reviewerCount: 5,
      candidateIds: ["omd-apply", "raw-design-md", "third"],
      choiceFor: ({ left, right, axis, reversed, defaultChoice }) => {
        if (reversed) return defaultChoice;
        if (axis === "ship_preference" && (left === 2 || right === 2)) return "both_fail";
        return "a";
      },
    });
    const result = aggregate(input, { bootstrapIterations: 10 });
    expect(result.axes.ship_preference.graph).toMatchObject({
      connected: false,
      component_count: 2,
    });
    for (const candidate of Object.values(result.axes.ship_preference.candidates)) {
      expect(candidate).toEqual({
        rating: null,
        rank: null,
        rating_95_ci: [null, null],
        rank_95_interval: [null, null],
      });
    }
    expect(result.readiness.preview.deficits.disconnected_axes).toContain("ship_preference");
  });

  it("grades 4 reviewers diagnostic, 5×24 preview, and 10×24 verified", () => {
    const diagnostic = aggregate(panelFixture({ taskCount: 24, reviewerCount: 4 }), {
      bootstrapIterations: 5,
    });
    expect(diagnostic.readiness.grade).toBe("diagnostic");
    expect(diagnostic.readiness.preview.deficits.additional_unique_reviewers).toBe(1);
    expect(diagnostic.readiness.preview.next_review_units.minimum_total_assuming_non_both_fail).toBe(24);

    const preview = aggregate(panelFixture({ taskCount: 24, reviewerCount: 5 }), {
      bootstrapIterations: 5,
    });
    expect(preview.readiness.grade).toBe("preview");
    expect(preview.readiness.preview.met).toBe(true);
    expect(preview.readiness.preview.next_review_units.minimum_total_assuming_non_both_fail).toBe(0);
    expect(preview.readiness.verified.met).toBe(false);

    const verified = aggregate(panelFixture({ taskCount: 24, reviewerCount: 10 }), {
      bootstrapIterations: 5,
    });
    expect(verified.readiness.grade).toBe("verified");
    expect(verified.readiness.verified.met).toBe(true);
    expect(verified.readiness.overall_benchmark_publishable).toBe(false);
  });

  it("keeps a both-fail-dominated edge below Preview coverage", () => {
    const input = panelFixture({
      taskCount: 24,
      reviewerCount: 5,
      choiceFor: ({ reviewerIndex, axis, reversed, defaultChoice }) => {
        if (reversed) return defaultChoice;
        if (axis === "ship_preference" && reviewerIndex < 3) return "both_fail";
        return "a";
      },
    });
    const result = aggregate(input, { bootstrapIterations: 5 });
    expect(result.readiness.grade).toBe("diagnostic");
    const deficit = result.readiness.preview.deficits.undercovered_pair_axes.find(
      (item) => item.axis === "ship_preference",
    );
    expect(deficit).toMatchObject({
      bradley_terry_valid_votes: 2,
      additional_non_both_fail_votes: 3,
    });
  });
});
