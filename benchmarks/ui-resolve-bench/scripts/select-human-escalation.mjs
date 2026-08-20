#!/usr/bin/env node
import { existsSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";

const AXES = ["functionality", "usability", "fidelity", "ship_preference"];

function fail(message) {
  throw new Error(`human escalation selection rejected: ${message}`);
}

function jsonFiles(root, label) {
  if (!existsSync(root) || !statSync(root).isDirectory()) fail(`${label} directory not found: ${root}`);
  const files = readdirSync(root)
    .filter((name) => name.endsWith(".json"))
    .sort()
    .map((name) => join(root, name));
  if (files.length === 0) fail(`${label} directory contains no JSON files`);
  return files;
}

function taskKey(task) {
  return `${task.id}@${task.version}:${task.core_prompt_sha256}`;
}

function normalized(choice, assignment, candidates) {
  if (choice === "tie" || choice === "both_fail") return choice;
  const opaque = choice === "a" ? assignment.a : assignment.b;
  return candidates[opaque]?.variant_id ?? fail(`assignment references unknown candidate ${opaque}`);
}

function sortedObjectOfSets(record) {
  return Object.fromEntries(Object.entries(record)
    .filter(([, values]) => values.size > 0)
    .map(([key, values]) => [key, [...values].sort()]));
}

export function selectHumanEscalation({
  judgmentFiles,
  revealFiles,
  auditCount = 1,
  seed = "20260730",
}) {
  if (!Number.isInteger(auditCount) || auditCount < 0) fail("auditCount must be a non-negative integer");
  const reveals = new Map(revealFiles.map((path) => {
    const document = readJson(path);
    return [document.review_unit_id, document];
  }));
  const groups = new Map();
  let epoch = null;

  for (const path of judgmentFiles) {
    const judgment = readJson(path);
    const reveal = reveals.get(judgment.review_unit_id);
    if (!reveal) fail(`missing reveal for ${judgment.review_unit_id}`);
    if (judgment.schema_version !== "0.3" || reveal.schema_version !== "0.3") {
      fail(`schema_version must be 0.3 for ${judgment.review_unit_id}`);
    }
    if (judgment.methodology_epoch !== reveal.methodology_epoch) fail(`epoch mismatch for ${judgment.review_unit_id}`);
    epoch ??= judgment.methodology_epoch;
    if (epoch !== judgment.methodology_epoch) fail("all review units must share one methodology epoch");
    if (taskKey(judgment.task) !== taskKey(reveal.task)) fail(`task mismatch for ${judgment.review_unit_id}`);

    const byId = new Map(judgment.judgments.map((item) => [item.assignment_id, item]));
    const primaryEntry = Object.entries(reveal.assignments)
      .find(([, assignment]) => !assignment.reversed_duplicate);
    const reverseEntry = Object.entries(reveal.assignments)
      .find(([, assignment]) => assignment.reversed_duplicate);
    if (!primaryEntry || !reverseEntry) fail(`exact primary/reversal pair required for ${judgment.review_unit_id}`);
    const [primaryId, primaryAssignment] = primaryEntry;
    const [reverseId, reverseAssignment] = reverseEntry;
    if (reverseAssignment.reversal_of !== primaryId) fail(`broken reversal link for ${judgment.review_unit_id}`);
    const primary = byId.get(primaryId);
    const reverse = byId.get(reverseId);
    if (!primary || !reverse) fail(`judgment pair incomplete for ${judgment.review_unit_id}`);

    const key = taskKey(judgment.task);
    if (!groups.has(key)) {
      groups.set(key, {
        task: judgment.task,
        review_unit_ids: [],
        candidates: new Map(),
        primary: Object.fromEntries(AXES.map((axis) => [axis, new Set()])),
        reversal_inconsistent: Object.fromEntries(AXES.map((axis) => [axis, new Set()])),
        uncertainty: Object.fromEntries(AXES.map((axis) => [axis, new Set()])),
      });
    }
    const group = groups.get(key);
    group.review_unit_ids.push(judgment.review_unit_id);
    for (const candidate of Object.values(reveal.candidates)) {
      group.candidates.set(candidate.variant_id, {
        variant_id: candidate.variant_id,
        label: candidate.label,
        directories: new Set([...(group.candidates.get(candidate.variant_id)?.directories ?? []), candidate.directory]),
      });
    }
    for (const axis of AXES) {
      const left = normalized(primary.axes[axis], primaryAssignment, reveal.candidates);
      const right = normalized(reverse.axes[axis], reverseAssignment, reveal.candidates);
      group.primary[axis].add(left);
      if (left === "tie" || left === "both_fail") group.uncertainty[axis].add(left);
      if (left !== right) group.reversal_inconsistent[axis].add(judgment.review_unit_id);
    }
  }

  const unresolved = [];
  const resolved = [];
  for (const [key, group] of [...groups.entries()].sort(([left], [right]) => left.localeCompare(right))) {
    const disagreement = Object.fromEntries(AXES
      .filter((axis) => group.primary[axis].size > 1)
      .map((axis) => [axis, [...group.primary[axis]].sort()]));
    const reversal = sortedObjectOfSets(group.reversal_inconsistent);
    const uncertainty = sortedObjectOfSets(group.uncertainty);
    const item = {
      pair_key: key,
      task: group.task,
      review_unit_ids: group.review_unit_ids.sort(),
      candidates: [...group.candidates.values()]
        .map((candidate) => ({ ...candidate, directories: [...candidate.directories].sort() }))
        .sort((left, right) => left.variant_id.localeCompare(right.variant_id)),
      reasons: {
        cross_judge_disagreement: disagreement,
        reversal_inconsistency: reversal,
        tie_or_both_fail: uncertainty,
      },
    };
    if (Object.keys(disagreement).length || Object.keys(reversal).length || Object.keys(uncertainty).length) {
      unresolved.push({ ...item, selection: "unresolved" });
    } else {
      resolved.push(item);
    }
  }

  const audit = resolved
    .map((item) => ({ item, order: sha256(`${seed}\0${item.pair_key}`) }))
    .sort((left, right) => left.order.localeCompare(right.order))
    .slice(0, auditCount)
    .map(({ item }) => ({ ...item, selection: "audit_sample" }));
  const selected = [...unresolved, ...audit].sort((left, right) => left.pair_key.localeCompare(right.pair_key));
  return {
    schema_version: "0.1",
    methodology_epoch: epoch,
    selection_policy: {
      unresolved: ["cross_judge_disagreement", "reversal_inconsistency", "tie_or_both_fail"],
      audit: { method: "sha256-seeded-without-replacement", seed, requested: auditCount },
    },
    counts: {
      pairs_total: groups.size,
      unresolved: unresolved.length,
      resolved: resolved.length,
      audit_selected: audit.length,
      selected: selected.length,
    },
    selected,
  };
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = parseArgs();
  if (!args.get("judgments") || !args.get("reveals") || !args.get("out")) {
    console.error(
      "usage: select-human-escalation.mjs --judgments <dir> --reveals <dir> --out <selection.json> " +
      "[--audit-count 1] [--seed 20260730]",
    );
    process.exit(2);
  }
  const selection = selectHumanEscalation({
    judgmentFiles: jsonFiles(resolve(String(args.get("judgments"))), "judgments"),
    revealFiles: jsonFiles(resolve(String(args.get("reveals"))), "reveals"),
    auditCount: args.get("audit-count") ? Number(args.get("audit-count")) : 1,
    seed: args.get("seed") ? String(args.get("seed")) : "20260730",
  });
  writeJson(resolve(String(args.get("out"))), selection);
  console.log(JSON.stringify(selection.counts, null, 2));
}
