#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";

const AXES = ["functionality", "usability", "fidelity", "ship_preference"];
const CHOICES = new Set(["a", "b", "tie", "both_fail"]);

function fail(message) {
  throw new Error(`human escalation intake rejected: ${message}`);
}

function jsonFiles(root, label) {
  if (!existsSync(root) || !statSync(root).isDirectory()) fail(`${label} directory not found: ${root}`);
  const files = readdirSync(root).filter((name) => name.endsWith(".json")).sort().map((name) => join(root, name));
  if (!files.length) fail(`${label} directory contains no JSON files`);
  return files;
}

function taskKey(task) {
  return `${task.id}@${task.version}:${task.core_prompt_sha256}`;
}

function normalizeSide(choice, sides, candidates) {
  if (choice === "tie" || choice === "both_fail") return choice;
  const opaque = choice === "a" ? sides.a : sides.b;
  return candidates[opaque]?.variant_id ?? fail(`unknown candidate ${opaque}`);
}

function mode(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  const highest = Math.max(...counts.values());
  const winners = [...counts.entries()].filter(([, count]) => count === highest).map(([value]) => value).sort();
  return { value: winners.length === 1 ? winners[0] : null, count: highest, tied: winners.length > 1 };
}

export function intakeHumanEscalation({
  humanFiles,
  humanRevealPath,
  automatedJudgmentFiles,
  automatedRevealFiles,
}) {
  const humanReveal = readJson(humanRevealPath);
  if (humanReveal.schema_version !== "0.1") fail("human reveal schema_version must be 0.1");
  const expected = new Map(Object.entries(humanReveal.comparisons ?? {}));
  const automatedReveals = new Map(automatedRevealFiles.map((path) => {
    const document = readJson(path);
    return [document.review_unit_id, document];
  }));
  const automatedByTask = new Map();
  for (const path of automatedJudgmentFiles) {
    const judgment = readJson(path);
    const reveal = automatedReveals.get(judgment.review_unit_id);
    if (!reveal) fail(`missing automated reveal for ${judgment.review_unit_id}`);
    const primaryEntry = Object.entries(reveal.assignments).find(([, item]) => !item.reversed_duplicate);
    if (!primaryEntry) fail(`automated primary missing for ${judgment.review_unit_id}`);
    const [assignmentId, assignment] = primaryEntry;
    const result = judgment.judgments.find((item) => item.assignment_id === assignmentId);
    if (!result) fail(`automated primary judgment missing for ${judgment.review_unit_id}`);
    const key = taskKey(judgment.task);
    if (!automatedByTask.has(key)) automatedByTask.set(key, []);
    automatedByTask.get(key).push({
      reviewer_hash: judgment.reviewer_hash,
      axes: Object.fromEntries(AXES.map((axis) => [
        axis,
        normalizeSide(result.axes[axis], assignment, reveal.candidates),
      ])),
    });
  }

  const seen = new Set();
  let epoch = null;
  let reviewer = null;
  const rows = [];
  for (const path of humanFiles) {
    const document = readJson(path);
    if (document.schema_version !== "0.1") fail(`${path} schema_version must be 0.1`);
    epoch ??= document.methodology_epoch;
    reviewer ??= document.reviewer_hash;
    if (document.methodology_epoch !== epoch || document.methodology_epoch !== humanReveal.methodology_epoch) {
      fail("human methodology epoch mismatch");
    }
    if (document.reviewer_hash !== reviewer || document.reviewer_hash !== humanReveal.reviewer_hash) {
      fail("human reviewer mismatch");
    }
    const declared = new Map(document.comparisons.map((item) => [item.comparison_id, item]));
    if (document.judgments.length !== declared.size) fail(`${document.family} comparison/judgment count mismatch`);
    for (const judgment of document.judgments) {
      const id = judgment.comparison_id;
      if (seen.has(id)) fail(`duplicate human comparison ${id}`);
      seen.add(id);
      const privateItem = expected.get(id);
      const publicItem = declared.get(id);
      if (!privateItem || !publicItem || publicItem.trial !== judgment.trial) fail(`unexpected human comparison ${id}`);
      if (privateItem.task.id.replace(/-trial-\d+$/, "") !== document.family) fail(`family mismatch for ${id}`);
      if (JSON.stringify(Object.keys(judgment.axes).sort()) !== JSON.stringify([...AXES].sort())) {
        fail(`axes must be exact for ${id}`);
      }
      if (Object.values(judgment.axes).some((choice) => !CHOICES.has(choice))) fail(`invalid choice for ${id}`);
      const human = Object.fromEntries(AXES.map((axis) => [
        axis,
        normalizeSide(judgment.axes[axis], privateItem.sides, privateItem.candidates),
      ]));
      const automated = automatedByTask.get(taskKey(privateItem.task));
      if (!automated?.length) fail(`automated judgments missing for ${privateItem.task.id}`);
      const axes = {};
      for (const axis of AXES) {
        const votes = automated.map((item) => item.axes[axis]);
        const modal = mode(votes);
        axes[axis] = {
          human: human[axis],
          automated_votes: Object.fromEntries([...new Set(votes)].sort().map((value) => [
            value,
            votes.filter((vote) => vote === value).length,
          ])),
          automated_modal: modal.value,
          automated_modal_count: modal.count,
          human_matches_modal: modal.value === null ? null : human[axis] === modal.value,
          human_matches_primary_votes: votes.filter((vote) => vote === human[axis]).length,
          automated_primary_votes: votes.length,
        };
      }
      rows.push({
        comparison_id: id,
        family: document.family,
        trial: judgment.trial,
        selection: privateItem.selection,
        task: privateItem.task,
        axes,
      });
    }
  }
  const missing = [...expected.keys()].filter((id) => !seen.has(id));
  if (missing.length || seen.size !== expected.size) fail(`human set incomplete: ${missing.join(", ")}`);

  const familyNames = [...new Set(rows.map((row) => row.family))].sort();
  const summarize = (subset) => Object.fromEntries(AXES.map((axis) => {
    const comparable = subset.filter((row) => row.axes[axis].human_matches_modal !== null);
    const matches = comparable.filter((row) => row.axes[axis].human_matches_modal).length;
    const outcomes = subset.map((row) => row.axes[axis].human);
    return [axis, {
      human_outcomes: Object.fromEntries([...new Set(outcomes)].sort().map((value) => [
        value,
        outcomes.filter((outcome) => outcome === value).length,
      ])),
      modal_comparisons: comparable.length,
      modal_matches: matches,
      modal_agreement_rate: comparable.length ? Number((matches / comparable.length).toFixed(6)) : null,
    }];
  }));
  return {
    schema_version: "0.1",
    methodology_epoch: epoch,
    reviewer_hash: reviewer,
    status: "complete",
    counts: {
      families: familyNames.length,
      comparisons: rows.length,
      axis_judgments: rows.length * AXES.length,
    },
    calibration: {
      overall: summarize(rows),
      by_family: Object.fromEntries(familyNames.map((family) => [
        family,
        summarize(rows.filter((row) => row.family === family)),
      ])),
    },
    comparisons: rows,
  };
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = parseArgs();
  const required = ["human", "human-reveal", "automated-judgments", "automated-reveals", "out", "lock-out"];
  if (required.some((key) => !args.get(key))) {
    console.error("usage: intake-human-escalation.mjs --human <dir> --human-reveal <private.json> --automated-judgments <dir> --automated-reveals <dir> --out <summary.json> --lock-out <lock.json>");
    process.exit(2);
  }
  const paths = {
    humanFiles: jsonFiles(resolve(String(args.get("human"))), "human judgments"),
    humanRevealPath: resolve(String(args.get("human-reveal"))),
    automatedJudgmentFiles: jsonFiles(resolve(String(args.get("automated-judgments"))), "automated judgments"),
    automatedRevealFiles: jsonFiles(resolve(String(args.get("automated-reveals"))), "automated reveals"),
  };
  const summary = intakeHumanEscalation(paths);
  const out = resolve(String(args.get("out")));
  const lockOut = resolve(String(args.get("lock-out")));
  if (existsSync(out) || existsSync(lockOut)) fail("out and lock-out must be new");
  writeJson(out, summary);
  writeJson(lockOut, {
    schema_version: "0.1",
    methodology_epoch: summary.methodology_epoch,
    reviewer_hash: summary.reviewer_hash,
    human_reveal_sha256: sha256(readFileSync(paths.humanRevealPath)),
    human_judgments: paths.humanFiles.map((path) => ({ file: join(".", path.split("/").at(-1)), sha256: sha256(readFileSync(path)) })),
    summary_sha256: sha256(readFileSync(out)),
  });
  console.log(JSON.stringify({ status: summary.status, counts: summary.counts }, null, 2));
}
