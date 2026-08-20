#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";

const AXES = ["functionality", "usability", "fidelity", "ship_preference"];
const CHOICES = new Set(["a", "b", "tie", "both_fail"]);

function fail(message) {
  throw new Error(`owner review intake rejected: ${message}`);
}

function normalize(choice, comparison) {
  if (choice === "tie" || choice === "both_fail") return choice;
  const opaque = comparison.sides?.[choice];
  return comparison.candidates?.[opaque]?.variant_id ?? fail(`unknown candidate for side ${choice}`);
}

function exactKeys(value, keys) {
  return JSON.stringify(Object.keys(value ?? {}).sort()) === JSON.stringify([...keys].sort());
}

export function intakeOwnerReview({ judgmentPath, revealPath }) {
  const judgment = readJson(judgmentPath);
  const reveal = readJson(revealPath);
  if (judgment.schema_version !== "0.1" || reveal.schema_version !== "0.1") {
    fail("judgment and reveal schema_version must be 0.1");
  }
  if (judgment.methodology_epoch !== reveal.methodology_epoch) fail("methodology epoch mismatch");
  if (judgment.reviewer_hash !== reveal.reviewer_hash) fail("reviewer mismatch");
  if (!Array.isArray(judgment.comparisons) || !Array.isArray(judgment.judgments)) {
    fail("comparisons[] and judgments[] are required");
  }
  if (JSON.stringify(judgment.axes) !== JSON.stringify(AXES)) fail("axes declaration must be exact");

  const expected = new Map(Object.entries(reveal.comparisons ?? {}));
  const declared = new Map();
  for (const item of judgment.comparisons) {
    if (!item?.comparison_id || declared.has(item.comparison_id)) fail("duplicate or missing comparison declaration");
    declared.set(item.comparison_id, item);
  }
  if (declared.size !== expected.size || judgment.judgments.length !== expected.size) {
    fail("comparison set incomplete");
  }

  const seen = new Set();
  const comparisons = [];
  for (const item of judgment.judgments) {
    const id = item?.comparison_id;
    if (!id || seen.has(id)) fail(`duplicate or missing judgment comparison ${id ?? "unknown"}`);
    seen.add(id);
    const privateItem = expected.get(id);
    const publicItem = declared.get(id);
    if (!privateItem || !publicItem) fail(`unexpected comparison ${id}`);
    const trialMatch = privateItem.task?.id?.match(/-trial-(\d+)$/);
    const expectedTrial = trialMatch ? Number(trialMatch[1]) : null;
    if (!Number.isInteger(item.trial) || item.trial !== publicItem.trial || item.trial !== expectedTrial) {
      fail(`trial mismatch for ${id}`);
    }
    if (privateItem.task.id.replace(/-trial-\d+$/, "") !== judgment.family) fail(`family mismatch for ${id}`);
    if (!exactKeys(item.axes, AXES)) fail(`axes must be exact for ${id}`);
    if (Object.values(item.axes).some((choice) => !CHOICES.has(choice))) fail(`invalid choice for ${id}`);
    comparisons.push({
      comparison_id: id,
      trial: item.trial,
      pair_key: privateItem.pair_key,
      selection: privateItem.selection,
      task: privateItem.task,
      outcomes: Object.fromEntries(AXES.map((axis) => [axis, normalize(item.axes[axis], privateItem)])),
    });
  }
  const missing = [...expected.keys()].filter((id) => !seen.has(id));
  if (missing.length) fail(`comparison set incomplete: ${missing.join(", ")}`);
  comparisons.sort((left, right) => left.trial - right.trial);

  const axisOutcomes = Object.fromEntries(AXES.map((axis) => {
    const values = comparisons.map((comparison) => comparison.outcomes[axis]);
    return [axis, Object.fromEntries([...new Set(values)].sort().map((value) => [
      value,
      values.filter((candidate) => candidate === value).length,
    ]))];
  }));
  return {
    schema_version: "0.1",
    methodology_epoch: judgment.methodology_epoch,
    reviewer_hash: judgment.reviewer_hash,
    family: judgment.family,
    status: "complete",
    counts: {
      comparisons: comparisons.length,
      axis_judgments: comparisons.length * AXES.length,
    },
    axis_outcomes: axisOutcomes,
    comparisons,
  };
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = parseArgs();
  const required = ["judgment", "reveal", "out", "lock-out"];
  if (required.some((key) => !args.get(key))) {
    console.error("usage: intake-owner-review.mjs --judgment <human.json> --reveal <private.json> --out <summary.json> --lock-out <lock.json>");
    process.exit(2);
  }
  const judgmentPath = resolve(String(args.get("judgment")));
  const revealPath = resolve(String(args.get("reveal")));
  const out = resolve(String(args.get("out")));
  const lockOut = resolve(String(args.get("lock-out")));
  if (existsSync(out) || existsSync(lockOut)) fail("out and lock-out must be new");
  const summary = intakeOwnerReview({ judgmentPath, revealPath });
  writeJson(out, summary);
  writeJson(lockOut, {
    schema_version: "0.1",
    methodology_epoch: summary.methodology_epoch,
    reviewer_hash: summary.reviewer_hash,
    judgment: {
      file: join(".", judgmentPath.split("/").at(-1)),
      sha256: sha256(readFileSync(judgmentPath)),
    },
    reveal_sha256: sha256(readFileSync(revealPath)),
    summary_sha256: sha256(readFileSync(out)),
    output_directory: dirname(out).split("/").at(-1),
  });
  console.log(JSON.stringify({
    status: summary.status,
    counts: summary.counts,
    axis_outcomes: summary.axis_outcomes,
  }, null, 2));
}
