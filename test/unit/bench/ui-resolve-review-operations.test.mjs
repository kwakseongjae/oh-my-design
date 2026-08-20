import {
  cpSync,
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { intakeReviewRound } from "../../../benchmarks/ui-resolve-bench/scripts/intake-review-round.mjs";
import { prepareReviewRound } from "../../../benchmarks/ui-resolve-bench/scripts/prepare-review-round.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const tasksRoot = join(repoRoot, "benchmarks/ui-resolve-bench/tasks");
const taskSpecs = ["pricing-conversion-v0.1", "incident-operations-v0.1"].map((id) => (
  JSON.parse(readFileSync(join(tasksRoot, id, "task.json"), "utf8"))
));
const AXES = ["functionality", "usability", "fidelity", "ship_preference"];

function writeJson(path, value) {
  mkdirSync(resolve(path, ".."), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function makeRuns(root, task) {
  const runs = join(root, "runs", task.id);
  for (const [variant, label] of [["baseline", "No skill"], ["raw-design-md", "Raw DESIGN.md"]]) {
    const benchmark = join(runs, variant, ".benchmark");
    mkdirSync(join(benchmark, "screenshots"), { recursive: true });
    writeJson(join(benchmark, "manifest.json"), {
      task: {
        id: task.id,
        version: task.version,
        core_prompt_sha256: `prompt-${task.id}`,
      },
      variant: { id: variant, label },
    });
    writeJson(join(benchmark, "run-result.json"), {
      process: { exit_code: 0, timed_out: false },
    });
    writeJson(join(benchmark, "score.json"), {
      status: { automated_gate_pass: true },
    });
    writeFileSync(join(benchmark, "screenshots", "desktop.png"), `desktop:${variant}`);
    writeFileSync(join(benchmark, "screenshots", "mobile.png"), `mobile:${variant}`);
  }
  return runs;
}

function textTree(root) {
  const output = [];
  const walk = (current) => {
    for (const name of readdirSync(current).sort()) {
      const path = join(current, name);
      if (statSync(path).isDirectory()) walk(path);
      else output.push(readFileSync(path, "utf8"));
    }
  };
  walk(root);
  return output.join("\n");
}

function preparedRound() {
  const root = mkdtempSync(join(tmpdir(), "ui-resolve-round-"));
  const taskRuns = taskSpecs.map((task) => ({ id: task.id, runs: makeRuns(root, task) }));
  const plan = join(root, "plan.json");
  const salt = join(root, "salt.txt");
  const galleries = join(root, "public-galleries");
  const reveals = join(root, "private-reveals");
  const manifest = join(root, "private", "round-manifest.json");
  writeJson(plan, {
    schema_version: "0.1",
    methodology_epoch: "internal-dry-run-2026q3",
    reviewers: ["operator-alpha", "operator-beta"],
    tasks: taskRuns,
  });
  writeFileSync(salt, "private-test-salt-at-least-sixteen");
  const document = prepareReviewRound({
    planPath: plan,
    saltFile: salt,
    galleriesOut: galleries,
    revealsOut: reveals,
    manifestOut: manifest,
  });
  return { root, plan, salt, galleries, reveals, manifest, document };
}

function writeJudgment(round, unit, root) {
  const reveal = JSON.parse(readFileSync(join(round.reveals, unit.reveal_file), "utf8"));
  const judgments = Object.entries(reveal.assignments).map(([assignmentId, assignment]) => ({
    assignment_id: assignmentId,
    axes: Object.fromEntries(AXES.map((axis) => [
      axis,
      assignment.reversed_duplicate ? "b" : "a",
    ])),
  }));
  const path = join(root, `${unit.review_unit_id}.json`);
  writeJson(path, {
    schema_version: "0.3",
    methodology_epoch: round.document.methodology_epoch,
    reviewer_hash: unit.reviewer_hash,
    review_unit_id: unit.review_unit_id,
    task: unit.task,
    judgments,
  });
  return path;
}

describe("UI-Resolve reviewer operations package", () => {
  it("separates a 2×2 round, resumes exactly, aggregates, locks, and detects mutation", () => {
    const round = preparedRound();
    expect(round.document.expected).toEqual({ reviewers: 2, tasks: 2, review_units: 4 });
    const alpha = round.document.units.filter((unit) => unit.reviewer_id === "operator-alpha");
    expect(new Set(alpha.map((unit) => unit.reviewer_hash)).size).toBe(1);
    expect(new Set(alpha.map((unit) => unit.review_unit_id)).size).toBe(2);
    expect(readdirSync(round.reveals).filter((name) => name.endsWith(".json"))).toHaveLength(4);
    const publicText = textTree(round.galleries);
    expect(publicText).not.toContain("operator-alpha");
    expect(publicText).not.toContain("private-test-salt");
    expect(publicText).not.toContain("No skill");
    expect(publicText).not.toContain("Raw DESIGN.md");

    const judgments = join(round.root, "judgments");
    mkdirSync(judgments);
    for (const unit of round.document.units.slice(0, 3)) writeJudgment(round, unit, judgments);
    const statusOut = join(round.root, "status.json");
    const aggregateOut = join(round.root, "aggregate.json");
    const lockOut = join(round.root, "lock.json");
    const incomplete = intakeReviewRound({
      manifestPath: round.manifest,
      judgmentsRoot: judgments,
      revealsRoot: round.reveals,
      statusOut,
      aggregateOut,
      lockOut,
      bootstrapIterations: 10,
    });
    expect(incomplete).toMatchObject({
      status: "incomplete",
      progress: { completed: 3, expected: 4, remaining: 1 },
      aggregate_written: false,
      lock_status: "not_created_incomplete",
    });
    expect(incomplete.missing_review_units).toEqual([{
      slot: round.document.units[3].slot,
      task_id: round.document.units[3].task.id,
      review_unit_id: round.document.units[3].review_unit_id,
    }]);
    expect(existsSync(aggregateOut)).toBe(false);
    expect(existsSync(lockOut)).toBe(false);

    const finalJudgment = writeJudgment(round, round.document.units[3], judgments);
    const complete = intakeReviewRound({
      manifestPath: round.manifest,
      judgmentsRoot: judgments,
      revealsRoot: round.reveals,
      statusOut,
      aggregateOut,
      lockOut,
      bootstrapIterations: 10,
    });
    expect(complete).toMatchObject({
      status: "complete",
      progress: { completed: 4, expected: 4, remaining: 0 },
      aggregate_written: true,
      lock_status: "created",
    });
    expect(existsSync(aggregateOut)).toBe(true);
    expect(existsSync(lockOut)).toBe(true);

    const unchanged = intakeReviewRound({
      manifestPath: round.manifest,
      judgmentsRoot: judgments,
      revealsRoot: round.reveals,
      statusOut,
      aggregateOut,
      lockOut,
      bootstrapIterations: 10,
    });
    expect(unchanged.lock_status).toBe("unchanged");

    const mutated = JSON.parse(readFileSync(finalJudgment, "utf8"));
    mutated.judgments[0].axes.ship_preference = "tie";
    writeJson(finalJudgment, mutated);
    expect(() => intakeReviewRound({
      manifestPath: round.manifest,
      judgmentsRoot: judgments,
      revealsRoot: round.reveals,
      statusOut,
      aggregateOut,
      lockOut,
      bootstrapIterations: 10,
    })).toThrow(/existing lock does not match/i);
  });

  it("fails unexpected, duplicate, task-mismatched, and legacy judgments", () => {
    const round = preparedRound();
    const base = join(round.root, "base-judgments");
    mkdirSync(base);
    for (const unit of round.document.units) writeJudgment(round, unit, base);
    const run = (root) => intakeReviewRound({
      manifestPath: round.manifest,
      judgmentsRoot: root,
      revealsRoot: round.reveals,
      statusOut: join(round.root, `${root.split("/").at(-1)}-status.json`),
      aggregateOut: join(round.root, `${root.split("/").at(-1)}-aggregate.json`),
      lockOut: join(round.root, `${root.split("/").at(-1)}-lock.json`),
      bootstrapIterations: 5,
    });

    const unexpected = join(round.root, "unexpected");
    cpSync(base, unexpected, { recursive: true });
    const unexpectedDocument = JSON.parse(readFileSync(join(unexpected, readdirSync(unexpected)[0]), "utf8"));
    unexpectedDocument.review_unit_id = "review-unit-unexpected";
    writeJson(join(unexpected, "unexpected.json"), unexpectedDocument);
    expect(() => run(unexpected)).toThrow(/unexpected judgment review unit/i);

    const duplicate = join(round.root, "duplicate");
    cpSync(base, duplicate, { recursive: true });
    cpSync(join(duplicate, readdirSync(duplicate)[0]), join(duplicate, "duplicate.json"));
    expect(() => run(duplicate)).toThrow(/duplicate judgment review unit/i);

    const taskMismatch = join(round.root, "task-mismatch");
    cpSync(base, taskMismatch, { recursive: true });
    const taskPath = join(taskMismatch, readdirSync(taskMismatch)[0]);
    const taskDocument = JSON.parse(readFileSync(taskPath, "utf8"));
    taskDocument.task.version = "wrong";
    writeJson(taskPath, taskDocument);
    expect(() => run(taskMismatch)).toThrow(/task\.version mismatch/i);

    const legacy = join(round.root, "legacy");
    cpSync(base, legacy, { recursive: true });
    const legacyPath = join(legacy, readdirSync(legacy)[0]);
    const legacyDocument = JSON.parse(readFileSync(legacyPath, "utf8"));
    legacyDocument.schema_version = "0.2";
    writeJson(legacyPath, legacyDocument);
    expect(() => run(legacy)).toThrow(/schema_version must be 0\.3/i);
  });

  it("refuses overwrite and nested private outputs before preparation", () => {
    const round = preparedRound();
    expect(() => prepareReviewRound({
      planPath: round.plan,
      saltFile: round.salt,
      galleriesOut: round.galleries,
      revealsOut: join(round.root, "other-reveals"),
      manifestOut: join(round.root, "other-manifest.json"),
    })).toThrow(/galleriesOut already exists/i);
    expect(() => prepareReviewRound({
      planPath: round.plan,
      saltFile: round.salt,
      galleriesOut: join(round.root, "nested-public"),
      revealsOut: join(round.root, "nested-public", "reveals"),
      manifestOut: join(round.root, "nested-manifest.json"),
    })).toThrow(/separate roots/i);
  });
});
