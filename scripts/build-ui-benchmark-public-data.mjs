#!/usr/bin/env node

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CHECK = process.argv.includes("--check");
const OUTPUT = join(ROOT, "web", "src", "data", "ui-benchmark-public.generated.json");

const SOURCE_PATHS = {
  harnessSummary:
    "benchmarks/ui-resolve-bench/reports/harness-efficiency-replacement-1.9.22/SUMMARY.final.json",
  harnessAggregate:
    "benchmarks/ui-resolve-bench/reports/harness-efficiency-replacement-1.9.22/aggregate.json",
  localeFailure:
    "benchmarks/ui-resolve-bench/reports/locale-clipboard-recovery-1.9.34/SUMMARY.final.json",
  focusCalibration:
    "benchmarks/ui-resolve-bench/reports/locale-scroll-focus-calibration-1.9.35/SUMMARY.final.json",
  localeRecovery:
    "benchmarks/ui-resolve-bench/reports/locale-scroll-focus-recovery-1.9.36/SUMMARY.final.json",
};

function readJson(relativePath) {
  return JSON.parse(readFileSync(join(ROOT, relativePath), "utf8"));
}

function assert(condition, message) {
  if (!condition) throw new Error(`[ui-benchmark-public-data] ${message}`);
}

const harness = readJson(SOURCE_PATHS.harnessSummary);
const aggregate = readJson(SOURCE_PATHS.harnessAggregate);
const localeFailure = readJson(SOURCE_PATHS.localeFailure);
const focusCalibration = readJson(SOURCE_PATHS.focusCalibration);
const localeRecovery = readJson(SOURCE_PATHS.localeRecovery);

assert(
  harness.experiment_id === "harness-efficiency-replacement-1.9.22",
  "unexpected Harness Track source",
);
assert(harness.claim_status === "Internal", "Harness Track must remain Internal");
assert(harness.valid_completed_cells === 18, "Harness Track denominator changed");
assert(harness.ui_resolved?.portable === 5, "portable UI-Resolved numerator changed");
assert(harness.ui_resolved?.harness === 8, "harness UI-Resolved numerator changed");
assert(
  harness.ui_resolved?.confidence_95_lower <= 0,
  "public copy assumes the current interval includes zero",
);

const comparison = aggregate.paired_comparisons?.[0];
assert(comparison?.matched_pairs === 9, "paired Harness Track denominator changed");
assert(
  comparison?.candidate_system_id === "omd-repair-harness-first-safe-edit",
  "unexpected Harness Track candidate",
);

assert(
  localeFailure.experiment_id === "locale-clipboard-recovery-1.9.34",
  "unexpected locale failure source",
);
assert(localeFailure.candidate?.objective_score === 79, "locale failure score changed");
assert(
  focusCalibration.experiment_id === "locale-scroll-focus-calibration-1.9.35",
  "unexpected focus calibration source",
);
assert(
  localeRecovery.experiment_id === "locale-scroll-focus-recovery-1.9.36",
  "unexpected locale recovery source",
);
assert(localeRecovery.candidate?.objective_score === 85, "locale recovery score changed");
assert(localeRecovery.completed_cells === 1, "locale recovery denominator changed");

const publicData = {
  schemaVersion: "0.1",
  dataAsOf: harness.run_date,
  publication: {
    status: "internal",
    label: "Internal evidence",
    isLeaderboard: false,
    headline: "Evidence before rank.",
    summary:
      "These are reproducible internal checkpoints, not a global model, skill, or harness ranking.",
    nextStatus: "preview",
    verifiedPublicMinimum: {
      tasks: 24,
      runsPerTask: 10,
      practitionerReviewers: 10,
    },
  },
  tracks: [
    {
      id: "model",
      label: "Model Track",
      question: "What does the model deliver without a third-party UI skill?",
      publicResultAvailable: false,
    },
    {
      id: "skill",
      label: "Skill Lift",
      question: "How much does a portable skill change a fixed model?",
      publicResultAvailable: false,
    },
    {
      id: "harness",
      label: "Harness Track",
      question: "Does the complete workflow resolve the task within a fixed budget?",
      publicResultAvailable: true,
    },
  ],
  harnessCheckpoint: {
    experimentId: harness.experiment_id,
    status: harness.claim_status.toLowerCase(),
    model: "Claude Opus 4.8",
    modelId: "claude-opus-4-8",
    budget: "xhigh",
    taskCount: 3,
    runsPerTask: 3,
    runsPerSystem: harness.ui_resolved.runs_per_system,
    scheduledCells: harness.scheduled_cells,
    completedCells: harness.valid_completed_cells,
    uiResolved: {
      baseline: {
        label: "Portable workflow",
        passed: harness.ui_resolved.portable,
        total: harness.ui_resolved.runs_per_system,
      },
      candidate: {
        label: "Bounded repair harness",
        passed: harness.ui_resolved.harness,
        total: harness.ui_resolved.runs_per_system,
      },
      liftPercentagePoints: harness.ui_resolved.lift_percentage_points,
      confidence95: [
        harness.ui_resolved.confidence_95_lower,
        harness.ui_resolved.confidence_95_upper,
      ],
    },
    pairedObjective: {
      wins: comparison.win_tie_loss.wins,
      ties: comparison.win_tie_loss.ties,
      losses: comparison.win_tie_loss.losses,
      matchedPairs: comparison.matched_pairs,
    },
    objectiveScore: {
      baselineMean: harness.portable.mean_objective_score,
      candidateMean: harness.harness.mean_objective_score,
      max: 85,
    },
    efficiency: {
      baselineMedianWallMs: harness.portable.median_wall_ms,
      candidateMedianWallMs: harness.harness.median_wall_ms,
      baselineMedianTokens: harness.portable.median_uncached_tokens,
      candidateMedianTokens: harness.harness.median_uncached_tokens,
    },
    knownLoss: {
      cellId: harness.candidate_loss.cell_id,
      score: harness.candidate_loss.score,
      max: harness.candidate_loss.max,
      failedChecks: harness.candidate_loss.failed_checks,
    },
    limits: harness.reporting_limits,
  },
  localeCheckpoint: {
    experimentId: localeRecovery.experiment_id,
    status: "internal",
    model: "Claude Opus 4.8",
    budget: "xhigh",
    completedCells: localeRecovery.completed_cells,
    score: localeRecovery.candidate.objective_score,
    max: localeRecovery.candidate.objective_max,
    criticalGates: {
      passed: localeRecovery.candidate.critical_gates_passed,
      total: localeRecovery.candidate.critical_gates_total,
    },
    clipboardLocalesPassed: 5,
    browserCommands: localeRecovery.candidate.direct_browser_command_count,
    replacementVerifier: localeRecovery.candidate.replacement_verifier_authored,
    axeSeriousOrCritical: localeRecovery.candidate.axe_serious_or_critical_all_viewports,
    viewports: ["1440px", "390px", "320px", "200%"],
    limits: localeRecovery.reporting_limits,
  },
  learningTimeline: [
    {
      version: "1.9.34",
      state: "failed",
      label: "A real failure stayed visible",
      score: `${localeFailure.candidate.objective_score}/${localeFailure.candidate.objective_max}`,
      detail:
        "The command region scrolled horizontally but could not receive keyboard focus. Axe and traversal checks failed on constrained viewports.",
    },
    {
      version: "1.9.35",
      state: "contract",
      label: "The rule changed, not the old score",
      score: "79 → 85 control",
      detail:
        "A provider-free calibration required useful scroll regions to contain a reachable control or become explicit focus targets.",
    },
    {
      version: "1.9.36",
      state: "passed",
      label: "A fresh run proved the recovery",
      score: `${localeRecovery.candidate.objective_score}/${localeRecovery.candidate.objective_max}`,
      detail:
        "A new exact-model run passed clipboard, locale state, responsive geometry, keyboard traversal, and axe checks without a replacement verifier.",
    },
  ],
  objectiveGates: [
    {
      label: "Task contract",
      detail: "Required content and actions exist and work.",
    },
    {
      label: "State journey",
      detail: "Click, keyboard, and localized status transitions agree.",
    },
    {
      label: "Responsive",
      detail: "Desktop, 390px, 320px, and 200% geometry stay usable.",
    },
    {
      label: "Accessibility",
      detail: "Keyboard focus remains visible and serious or critical axe findings stay at zero.",
    },
    {
      label: "Design grounding",
      detail: "The surface follows the frozen product and design contract.",
    },
    {
      label: "Evidence & Unknown",
      detail: "Protected facts remain intact and unsupported claims stay absent.",
    },
  ],
  sourcePaths: SOURCE_PATHS,
};

const output = `${JSON.stringify(publicData, null, 2)}\n`;

if (CHECK) {
  if (!existsSync(OUTPUT) || readFileSync(OUTPUT, "utf8") !== output) {
    console.error(
      "[ui-benchmark-public-data] generated data is stale. Run `npm run bench:ui:public-data` and commit the result.",
    );
    process.exit(1);
  }
  console.log("[ui-benchmark-public-data] generated data matches canonical reports");
} else {
  writeFileSync(OUTPUT, output, "utf8");
  console.log(`[ui-benchmark-public-data] wrote ${OUTPUT}`);
}
