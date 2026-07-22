import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = resolve(import.meta.dirname, "../../..");
const scriptsRoot = join(repoRoot, "benchmarks/ui-resolve-bench/scripts");
const prepare = join(scriptsRoot, "prepare-sandbox.mjs");
const summarize = join(scriptsRoot, "summarize-pilot.mjs");
const buildGallery = join(scriptsRoot, "build-gallery.mjs");
const canonicalPricingTask = JSON.parse(readFileSync(
  join(repoRoot, "benchmarks/ui-resolve-bench/tasks/pricing-conversion-v0.1/task.json"),
  "utf8",
));

function writeJson(path, value) {
  mkdirSync(resolve(path, ".."), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function makeRun(runsRoot, {
  directory,
  variantId,
  label,
  run,
  score,
  screenshots = false,
  taskId = "pricing-conversion-v0.1",
  taskVersion = canonicalPricingTask.version,
  corePromptSha256 = "core-prompt-sha256-fixture",
}) {
  const benchmarkDir = join(runsRoot, directory, ".benchmark");
  mkdirSync(benchmarkDir, { recursive: true });
  writeJson(join(benchmarkDir, "manifest.json"), {
    task: {
      id: taskId,
      version: taskVersion,
      track: "landing-redesign",
      core_prompt_sha256: corePromptSha256,
    },
    variant: { id: variantId, label },
    skill: null,
  });
  if (run) writeJson(join(benchmarkDir, "run-result.json"), run);
  if (score) writeJson(join(benchmarkDir, "score.json"), score);
  if (screenshots) {
    mkdirSync(join(benchmarkDir, "screenshots"), { recursive: true });
    writeFileSync(join(benchmarkDir, "screenshots", "desktop.png"), `desktop:${variantId}`);
    writeFileSync(join(benchmarkDir, "screenshots", "mobile.png"), `mobile:${variantId}`);
  }
  return benchmarkDir;
}

const successfulRun = {
  process: { exit_code: 0, timed_out: false },
  runtime: { agent: "test" },
  workspace: { changed: true },
};

function scored(total, gates) {
  return {
    status: { automated_gate_pass: Object.values(gates).every(Boolean) },
    points: { deterministic_total: total, deterministic_max: 85 },
    critical_gates: gates,
  };
}

describe("UI-Resolve Bench runner and reports", () => {
  it("enforces normalized track eligibility and records explicit off-label opt-in", () => {
    const parent = mkdtempSync(join(tmpdir(), "ui-resolve-track-"));
    const rejectedOut = join(parent, "rejected");
    expect(() => execFileSync(process.execPath, [
      prepare,
      "--task", "pricing-conversion-v0.1",
      "--variant", "omd-full-harness",
      "--out", rejectedOut,
    ], { cwd: repoRoot, encoding: "utf8", stdio: "pipe" })).toThrow(/not eligible.*allow-off-label/is);
    expect(existsSync(rejectedOut)).toBe(false);

    const allowedOut = join(parent, "allowed");
    execFileSync(process.execPath, [
      prepare,
      "--task", "pricing-conversion-v0.1",
      "--variant", "omd-full-harness",
      "--out", allowedOut,
      "--allow-off-label",
      "--allow-dirty-source",
    ], { cwd: repoRoot, encoding: "utf8" });
    const manifest = JSON.parse(readFileSync(join(allowedOut, ".benchmark/manifest.json"), "utf8"));
    expect(manifest.task.track).toBe("landing-redesign");
    expect(manifest.variant.track_eligibility).toEqual({
      eligible: false,
      off_label: true,
      explicit_opt_in: true,
    });
  });

  it("keeps every prepared run in preregistered order and reports terminal state neutrally", () => {
    const parent = mkdtempSync(join(tmpdir(), "ui-resolve-summary-"));
    const runsRoot = join(parent, "runs");
    mkdirSync(runsRoot);
    makeRun(runsRoot, {
      directory: "taste-incomplete",
      variantId: "taste-skill",
      label: "Taste Skill v2",
    });
    makeRun(runsRoot, {
      directory: "raw-high-score",
      variantId: "raw-design-md",
      label: "Raw DESIGN.md",
      run: successfulRun,
      score: scored(85, { task_contract: true, accessibility: true }),
    });
    makeRun(runsRoot, {
      directory: "baseline-low-score",
      variantId: "baseline",
      label: "No skill",
      run: successfulRun,
      score: scored(20, { task_contract: true, accessibility: false }),
    });
    makeRun(runsRoot, {
      directory: "impeccable-timeout",
      variantId: "impeccable-prompt-only",
      label: "Impeccable (prompt-only)",
      run: { ...successfulRun, process: { exit_code: null, timed_out: true } },
    });
    makeRun(runsRoot, {
      directory: "ui-failed",
      variantId: "ui-ux-pro-max",
      label: "UI UX Pro Max",
      run: { ...successfulRun, process: { exit_code: 1, timed_out: false } },
    });

    const out = join(parent, "summary.json");
    execFileSync(process.execPath, [summarize, "--runs", runsRoot, "--out", out], {
      cwd: repoRoot,
      encoding: "utf8",
    });
    const result = JSON.parse(readFileSync(out, "utf8"));
    expect(result.rows.map((row) => row.variant_id)).toEqual([
      "baseline",
      "raw-design-md",
      "taste-skill",
      "impeccable-prompt-only",
      "ui-ux-pro-max",
    ]);
    expect(result.rows.map((row) => row.run_status)).toEqual([
      "complete",
      "complete",
      "incomplete",
      "timed_out",
      "failed",
    ]);
    expect(result.rows[0]).toMatchObject({
      deterministic_score: 20,
      automated_gate_pass: false,
    });
    expect(result.rows[1]).toMatchObject({
      deterministic_score: 85,
      automated_gate_pass: true,
    });
    expect(result.rows[2].automated_gate_pass).toBeNull();
    expect(result.rows[2].attribution.status).toBe("unreviewed");
    expect(result.disclaimer).toContain("nonuniform exploratory trials");
    expect(readFileSync(out.replace(/\.json$/, ".md"), "utf8")).toContain("| Taste Skill v2 | `taste-incomplete` | incomplete | unreviewed | — | — | — |");
  });

  it("builds deterministic blinded pairwise assignments and keeps reveal data outside", () => {
    const parent = mkdtempSync(join(tmpdir(), "ui-resolve-gallery-"));
    const runsRoot = join(parent, "runs");
    mkdirSync(runsRoot);
    for (const [variantId, label] of [
      ["baseline", "No skill"],
      ["raw-design-md", "Raw DESIGN.md"],
      ["taste-skill", "Taste Skill v2"],
    ]) {
      makeRun(runsRoot, {
        directory: variantId,
        variantId,
        label,
        run: successfulRun,
        score: scored(70, { task_contract: true }),
        screenshots: true,
      });
    }

    const build = (suffix, reviewer) => {
      const out = join(parent, `gallery-${suffix}`);
      const reveal = join(parent, `reveal-${suffix}.json`);
      execFileSync(process.execPath, [
        buildGallery,
        "--runs", runsRoot,
        "--out", out,
        "--reveal-out", reveal,
        "--reviewer", reviewer,
        "--blind-salt", "fixed-test-salt-v1",
      ], { cwd: repoRoot, encoding: "utf8" });
      return {
        out,
        reveal,
        assignment: JSON.parse(readFileSync(join(out, "assignment.json"), "utf8")),
        revealMap: JSON.parse(readFileSync(reveal, "utf8")),
        html: readFileSync(join(out, "index.html"), "utf8"),
      };
    };

    const first = build("one", "reviewer-17");
    const repeated = build("two", "reviewer-17");
    const otherReviewer = build("three", "reviewer-42");
    expect(repeated.assignment).toEqual(first.assignment);
    expect(otherReviewer.assignment.assignments).not.toEqual(first.assignment.assignments);
    expect(first.assignment.assignment_count).toBe(4);
    expect(first.assignment.task).toMatchObject({
      id: "pricing-conversion-v0.1",
      version: canonicalPricingTask.version,
      core_prompt_sha256: "core-prompt-sha256-fixture",
      review_brief: expect.stringContaining("release-coordination product"),
    });

    const revealedAssignments = Object.entries(first.revealMap.assignments)
      .map(([assignment_id, item]) => ({ assignment_id, ...item }));
    const reverse = revealedAssignments.find((item) => item.reversed_duplicate);
    const original = revealedAssignments.find((item) => item.assignment_id === reverse.reversal_of);
    expect(reverse).toMatchObject({ a: original.b, b: original.a });
    expect(first.assignment.assignments.some((item) => "reversed_duplicate" in item)).toBe(false);
    expect(first.assignment.assignments.some((item) => item.assignment_id.includes("reversed"))).toBe(false);
    expect(existsSync(first.reveal)).toBe(true);
    expect(existsSync(join(first.out, "reveal.json"))).toBe(false);
    expect(first.html).toContain("Tie");
    expect(first.html).toContain("Both fail");
    expect(first.html).toContain("A calm, trustworthy pricing page");
    expect(first.html).toContain("new Blob");
    expect(first.html).not.toContain("Raw DESIGN.md");

    const invalidOut = join(parent, "gallery-invalid");
    expect(() => execFileSync(process.execPath, [
      buildGallery,
      "--runs", runsRoot,
      "--out", invalidOut,
      "--reveal-out", join(invalidOut, "reveal.json"),
      "--reviewer", "reviewer-17",
      "--blind-salt", "fixed-test-salt-v1",
    ], { cwd: repoRoot, encoding: "utf8", stdio: "pipe" })).toThrow(/outside the gallery directory/i);

    const mixedRuns = join(parent, "mixed-runs");
    mkdirSync(mixedRuns);
    makeRun(mixedRuns, {
      directory: "first-task",
      variantId: "baseline",
      label: "No skill",
      run: successfulRun,
      score: scored(70, { task_contract: true }),
      screenshots: true,
    });
    makeRun(mixedRuns, {
      directory: "second-task",
      variantId: "raw-design-md",
      label: "Raw DESIGN.md",
      run: successfulRun,
      score: scored(70, { task_contract: true }),
      screenshots: true,
      taskId: "different-task",
    });
    expect(() => execFileSync(process.execPath, [
      buildGallery,
      "--runs", mixedRuns,
      "--out", join(parent, "mixed-gallery"),
      "--reveal-out", join(parent, "mixed-reveal.json"),
      "--reviewer", "reviewer-17",
      "--blind-salt", "fixed-test-salt-v1",
    ], { cwd: repoRoot, encoding: "utf8", stdio: "pipe" })).toThrow(/exactly one shared task/i);

    const missingSaltRuns = join(parent, "missing-salt-runs");
    mkdirSync(missingSaltRuns);
    for (const variantId of ["baseline", "raw-design-md"]) {
      makeRun(missingSaltRuns, {
        directory: variantId,
        variantId,
        label: variantId,
        run: successfulRun,
        score: scored(70, { task_contract: true }),
        screenshots: true,
      });
    }
    expect(() => execFileSync(process.execPath, [
      buildGallery,
      "--runs", missingSaltRuns,
      "--out", join(parent, "missing-salt-gallery"),
      "--reveal-out", join(parent, "missing-salt-reveal.json"),
      "--reviewer", "reviewer-17",
    ], { cwd: repoRoot, encoding: "utf8", stdio: "pipe" })).toThrow(/blind-salt/i);

    const mismatchedPromptRuns = join(parent, "mismatched-prompt-runs");
    mkdirSync(mismatchedPromptRuns);
    makeRun(mismatchedPromptRuns, {
      directory: "first",
      variantId: "baseline",
      label: "No skill",
      run: successfulRun,
      score: scored(70, { task_contract: true }),
      screenshots: true,
      corePromptSha256: "core-prompt-a",
    });
    makeRun(mismatchedPromptRuns, {
      directory: "second",
      variantId: "raw-design-md",
      label: "Raw DESIGN.md",
      run: successfulRun,
      score: scored(70, { task_contract: true }),
      screenshots: true,
      corePromptSha256: "core-prompt-b",
    });
    expect(() => execFileSync(process.execPath, [
      buildGallery,
      "--runs", mismatchedPromptRuns,
      "--out", join(parent, "mismatched-prompt-gallery"),
      "--reveal-out", join(parent, "mismatched-prompt-reveal.json"),
      "--reviewer", "reviewer-17",
      "--blind-salt", "fixed-test-salt-v1",
    ], { cwd: repoRoot, encoding: "utf8", stdio: "pipe" })).toThrow(/core prompt hash/i);
  });
});
