#!/usr/bin/env node
import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";

const AXES = ["functionality", "usability", "fidelity", "ship_preference"];
const CHOICES = new Set(["a", "b", "tie", "both_fail"]);
const REGULARIZATION = {
  method: "observed-pair Jeffreys prior",
  half_wins_per_candidate_per_observed_pair: 0.5,
};

function fail(message) {
  throw new Error(`preference aggregation rejected: ${message}`);
}

function assertRecord(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)) fail(`${label} must be an object`);
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

function exactStringSet(actual, expected, label) {
  const normalized = [...actual].sort();
  const target = [...expected].sort();
  if (JSON.stringify(normalized) !== JSON.stringify(target)) {
    fail(`${label} must be exactly ${target.join(", ")}; received ${normalized.join(", ") || "none"}`);
  }
}

function taskKey(task) {
  return `${task.id}@${task.version}:${task.core_prompt_sha256}`;
}

function percentile(values, probability) {
  if (values.length === 0) return null;
  const sorted = [...values].sort((left, right) => left - right);
  const index = (sorted.length - 1) * probability;
  const lower = Math.floor(index);
  const upper = Math.ceil(index);
  if (lower === upper) return sorted[lower];
  return sorted[lower] + (sorted[upper] - sorted[lower]) * (index - lower);
}

function rounded(value, digits = 6) {
  if (value === null || !Number.isFinite(value)) return null;
  return Number(value.toFixed(digits));
}

function makeRng(seed) {
  let state = Number.parseInt(sha256(String(seed)).slice(0, 8), 16) >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function sampleWithReplacement(items, count, rng) {
  return Array.from({ length: count }, () => items[Math.floor(rng() * items.length)]);
}

function normalizedOutcome(choice, assignment, candidateByOpaque) {
  if (choice === "tie" || choice === "both_fail") return choice;
  const opaque = choice === "a" ? assignment.a : assignment.b;
  return candidateByOpaque.get(opaque).variant_id;
}

function fitBradleyTerry(votes, candidateIds) {
  const validVotes = votes.filter((vote) => vote.outcome !== "both_fail");
  const observed = new Map();
  const wins = new Map(candidateIds.map((id) => [id, 0]));
  for (const vote of validVotes) {
    const pair = [vote.a, vote.b].sort();
    const key = pair.join("\0");
    if (!observed.has(key)) observed.set(key, { pair, games: 0 });
    observed.get(key).games += 1;
    if (vote.outcome === "tie") {
      wins.set(vote.a, wins.get(vote.a) + 0.5);
      wins.set(vote.b, wins.get(vote.b) + 0.5);
    } else {
      wins.set(vote.outcome, wins.get(vote.outcome) + 1);
    }
  }
  if (observed.size === 0) {
    return Object.fromEntries(candidateIds.map((id) => [id, null]));
  }
  for (const { pair } of observed.values()) {
    wins.set(pair[0], wins.get(pair[0]) + 0.5);
    wins.set(pair[1], wins.get(pair[1]) + 0.5);
  }

  let ability = new Map(candidateIds.map((id) => [id, 1]));
  for (let iteration = 0; iteration < 1000; iteration += 1) {
    const next = new Map();
    for (const id of candidateIds) {
      let denominator = 0;
      for (const { pair, games } of observed.values()) {
        if (!pair.includes(id)) continue;
        const opponent = pair[0] === id ? pair[1] : pair[0];
        denominator += (games + 1) / (ability.get(id) + ability.get(opponent));
      }
      next.set(id, denominator > 0 ? wins.get(id) / denominator : 1);
    }
    const active = candidateIds.filter((id) => Number.isFinite(next.get(id)) && next.get(id) > 0);
    const geometricMean = Math.exp(active.reduce((sum, id) => sum + Math.log(next.get(id)), 0) / active.length);
    let maxDelta = 0;
    for (const id of candidateIds) {
      next.set(id, next.get(id) / geometricMean);
      maxDelta = Math.max(maxDelta, Math.abs(Math.log(next.get(id)) - Math.log(ability.get(id))));
    }
    ability = next;
    if (maxDelta < 1e-10) break;
  }
  return Object.fromEntries(candidateIds.map((id) => [
    id,
    rounded(1000 + (400 / Math.log(10)) * Math.log(ability.get(id))),
  ]));
}

function ranksFromRatings(ratings, candidateIds) {
  const groups = new Map();
  for (const id of candidateIds) {
    const rating = ratings[id];
    if (rating === null) continue;
    const key = rating.toFixed(6);
    if (!groups.has(key)) groups.set(key, { rating, ids: [] });
    groups.get(key).ids.push(id);
  }
  const ordered = [...groups.values()].sort((left, right) => right.rating - left.rating);
  const ranks = Object.fromEntries(candidateIds.map((id) => [id, null]));
  let position = 1;
  for (const group of ordered) {
    const averageRank = position + (group.ids.length - 1) / 2;
    for (const id of group.ids) ranks[id] = averageRank;
    position += group.ids.length;
  }
  return ranks;
}

function validateAndNormalize(judgmentFiles, revealFiles) {
  const judgmentsByReviewer = new Map();
  const revealsByReviewer = new Map();
  const epochs = new Set();

  for (const path of judgmentFiles) {
    const document = readJson(path);
    assertRecord(document, `judgment ${path}`);
    if (document.schema_version !== "0.2") fail(`judgment ${path} schema_version must be 0.2`);
    if (!document.methodology_epoch || !document.reviewer_hash) fail(`judgment ${path} is missing epoch or reviewer hash`);
    if (judgmentsByReviewer.has(document.reviewer_hash)) fail(`duplicate reviewer judgment: ${document.reviewer_hash}`);
    if (!Array.isArray(document.judgments)) fail(`judgment ${path} must contain judgments[]`);
    epochs.add(document.methodology_epoch);
    judgmentsByReviewer.set(document.reviewer_hash, { path, document });
  }

  for (const path of revealFiles) {
    const document = readJson(path);
    assertRecord(document, `reveal ${path}`);
    if (document.schema_version !== "0.2") fail(`reveal ${path} schema_version must be 0.2`);
    if (!document.methodology_epoch || !document.reviewer_hash) fail(`reveal ${path} is missing epoch or reviewer hash`);
    if (revealsByReviewer.has(document.reviewer_hash)) fail(`duplicate reviewer reveal: ${document.reviewer_hash}`);
    assertRecord(document.task, `reveal ${path} task`);
    assertRecord(document.candidates, `reveal ${path} candidates`);
    assertRecord(document.assignments, `reveal ${path} assignments`);
    epochs.add(document.methodology_epoch);
    revealsByReviewer.set(document.reviewer_hash, { path, document });
  }

  if (epochs.size !== 1) fail(`all inputs must share one methodology epoch; found ${[...epochs].sort().join(", ")}`);
  exactStringSet(judgmentsByReviewer.keys(), revealsByReviewer.keys(), "judgment/reveal reviewer set");

  const candidates = new Map();
  const tasks = new Map();
  const primaryVotes = [];
  const reversalChecks = [];
  for (const reviewerHash of [...judgmentsByReviewer.keys()].sort()) {
    const judgment = judgmentsByReviewer.get(reviewerHash).document;
    const reveal = revealsByReviewer.get(reviewerHash).document;
    if (judgment.methodology_epoch !== reveal.methodology_epoch) fail(`epoch mismatch for reviewer ${reviewerHash}`);
    const task = reveal.task;
    for (const field of ["id", "version", "core_prompt_sha256"]) {
      if (typeof task[field] !== "string" || !task[field]) fail(`task.${field} missing for reviewer ${reviewerHash}`);
    }
    const key = taskKey(task);
    tasks.set(key, { id: task.id, version: task.version, core_prompt_sha256: task.core_prompt_sha256 });

    const candidateByOpaque = new Map();
    const reviewerVariantIds = new Set();
    for (const [opaque, candidate] of Object.entries(reveal.candidates).sort(([left], [right]) => left.localeCompare(right))) {
      assertRecord(candidate, `candidate ${opaque}`);
      if (!candidate.variant_id || !candidate.label) fail(`candidate ${opaque} is missing variant_id or label`);
      if (reviewerVariantIds.has(candidate.variant_id)) {
        fail(`duplicate candidate identity ${candidate.variant_id} for reviewer ${reviewerHash}`);
      }
      reviewerVariantIds.add(candidate.variant_id);
      const previous = candidates.get(candidate.variant_id);
      if (previous && previous.label !== candidate.label) fail(`candidate label mismatch for ${candidate.variant_id}`);
      candidates.set(candidate.variant_id, { id: candidate.variant_id, label: candidate.label });
      candidateByOpaque.set(opaque, candidate);
    }

    const assignments = new Map();
    for (const [assignmentId, assignment] of Object.entries(reveal.assignments)) {
      assertRecord(assignment, `assignment ${assignmentId}`);
      if (!candidateByOpaque.has(assignment.a) || !candidateByOpaque.has(assignment.b) || assignment.a === assignment.b) {
        fail(`assignment ${assignmentId} contains invalid candidates`);
      }
      if (typeof assignment.reversed_duplicate !== "boolean") fail(`assignment ${assignmentId} is missing reversed_duplicate`);
      assignments.set(assignmentId, assignment);
    }
    const reversedSources = new Set();
    for (const [assignmentId, assignment] of assignments) {
      if (!assignment.reversed_duplicate) {
        if (assignment.reversal_of !== null) fail(`primary assignment ${assignmentId} must have reversal_of=null`);
        continue;
      }
      const original = assignments.get(assignment.reversal_of);
      if (!original || original.reversed_duplicate) fail(`reversed assignment ${assignmentId} has invalid reversal_of`);
      if (reversedSources.has(assignment.reversal_of)) {
        fail(`duplicate reversed assignment for ${assignment.reversal_of}`);
      }
      reversedSources.add(assignment.reversal_of);
      if (assignment.a !== original.b || assignment.b !== original.a) {
        fail(`reversed assignment ${assignmentId} does not reverse ${assignment.reversal_of}`);
      }
    }

    const judgments = new Map();
    for (const item of judgment.judgments) {
      assertRecord(item, `judgment item for ${reviewerHash}`);
      if (!assignments.has(item.assignment_id)) fail(`unknown assignment ${item.assignment_id} for reviewer ${reviewerHash}`);
      if (judgments.has(item.assignment_id)) fail(`duplicate assignment judgment ${item.assignment_id} for reviewer ${reviewerHash}`);
      assertRecord(item.axes, `axes for ${item.assignment_id}`);
      exactStringSet(Object.keys(item.axes), AXES, `axes for ${item.assignment_id}`);
      for (const [axis, choice] of Object.entries(item.axes)) {
        if (!CHOICES.has(choice)) fail(`invalid ${axis} choice ${choice} for ${item.assignment_id}`);
      }
      judgments.set(item.assignment_id, item);
    }
    exactStringSet(judgments.keys(), assignments.keys(), `assignment set for reviewer ${reviewerHash}`);

    for (const [assignmentId, assignment] of assignments) {
      const item = judgments.get(assignmentId);
      const a = candidateByOpaque.get(assignment.a).variant_id;
      const b = candidateByOpaque.get(assignment.b).variant_id;
      if (!assignment.reversed_duplicate) {
        for (const axis of AXES) {
          primaryVotes.push({
            task_key: key,
            reviewer_hash: reviewerHash,
            pair_key: [a, b].sort().join("\0"),
            axis,
            a,
            b,
            outcome: normalizedOutcome(item.axes[axis], assignment, candidateByOpaque),
          });
        }
        continue;
      }
      const original = assignments.get(assignment.reversal_of);
      const originalItem = judgments.get(assignment.reversal_of);
      for (const axis of AXES) {
        const originalOutcome = normalizedOutcome(originalItem.axes[axis], original, candidateByOpaque);
        const reversedOutcome = normalizedOutcome(item.axes[axis], assignment, candidateByOpaque);
        reversalChecks.push({
          task_key: key,
          reviewer_hash: reviewerHash,
          axis,
          original_assignment_id: assignment.reversal_of,
          reversed_assignment_id: assignmentId,
          original_outcome: originalOutcome,
          reversed_outcome: reversedOutcome,
          consistent: originalOutcome === reversedOutcome,
        });
      }
    }
  }
  return {
    methodologyEpoch: [...epochs][0],
    candidates: [...candidates.values()].sort((left, right) => left.id.localeCompare(right.id)),
    tasks: [...tasks.values()].sort((left, right) => taskKey(left).localeCompare(taskKey(right))),
    primaryVotes,
    reversalChecks,
    reviewerCount: judgmentsByReviewer.size,
  };
}

function modalAgreement(votes) {
  const groups = new Map();
  for (const vote of votes) {
    const key = `${vote.task_key}\0${vote.pair_key}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(vote.outcome);
  }
  let modal = 0;
  let total = 0;
  for (const outcomes of groups.values()) {
    const counts = new Map();
    for (const outcome of outcomes) counts.set(outcome, (counts.get(outcome) ?? 0) + 1);
    modal += Math.max(...counts.values());
    total += outcomes.length;
  }
  return {
    groups: groups.size,
    modal_votes: modal,
    total_votes: total,
    rate: total ? rounded(modal / total) : null,
  };
}

function bootstrapIntervals(primaryVotes, candidateIds, iterations, seed) {
  const rng = makeRng(seed);
  const taskGroups = new Map();
  for (const vote of primaryVotes) {
    if (!taskGroups.has(vote.task_key)) taskGroups.set(vote.task_key, new Map());
    const reviewers = taskGroups.get(vote.task_key);
    if (!reviewers.has(vote.reviewer_hash)) reviewers.set(vote.reviewer_hash, []);
    reviewers.get(vote.reviewer_hash).push(vote);
  }
  const tasks = [...taskGroups.keys()].sort();
  const samples = Object.fromEntries(AXES.map((axis) => [axis, Object.fromEntries(
    candidateIds.map((id) => [id, { ratings: [], ranks: [] }]),
  )]));
  for (let index = 0; index < iterations; index += 1) {
    const resampled = [];
    for (const task of sampleWithReplacement(tasks, tasks.length, rng)) {
      const reviewers = [...taskGroups.get(task).keys()].sort();
      for (const reviewer of sampleWithReplacement(reviewers, reviewers.length, rng)) {
        resampled.push(...taskGroups.get(task).get(reviewer));
      }
    }
    for (const axis of AXES) {
      const ratings = fitBradleyTerry(resampled.filter((vote) => vote.axis === axis), candidateIds);
      const ranks = ranksFromRatings(ratings, candidateIds);
      for (const id of candidateIds) {
        if (ratings[id] !== null) samples[axis][id].ratings.push(ratings[id]);
        if (ranks[id] !== null) samples[axis][id].ranks.push(ranks[id]);
      }
    }
  }
  return Object.fromEntries(AXES.map((axis) => [axis, Object.fromEntries(candidateIds.map((id) => {
    const values = samples[axis][id];
    return [id, {
      rating_95_ci: [
        rounded(percentile(values.ratings, 0.025)),
        rounded(percentile(values.ratings, 0.975)),
      ],
      rank_95_interval: [
        rounded(percentile(values.ranks, 0.025)),
        rounded(percentile(values.ranks, 0.975)),
      ],
    }];
  }))]));
}

export function aggregatePreference({
  judgmentFiles,
  revealFiles,
  bootstrapIterations = 2000,
  seed = "20260729",
}) {
  if (!Number.isInteger(bootstrapIterations) || bootstrapIterations < 1 || bootstrapIterations > 100000) {
    fail("bootstrap iterations must be an integer from 1 to 100000");
  }
  const normalized = validateAndNormalize(judgmentFiles, revealFiles);
  const candidateIds = normalized.candidates.map((candidate) => candidate.id);
  const intervals = bootstrapIntervals(normalized.primaryVotes, candidateIds, bootstrapIterations, seed);
  const axes = {};
  for (const axis of AXES) {
    const votes = normalized.primaryVotes.filter((vote) => vote.axis === axis);
    const ratings = fitBradleyTerry(votes, candidateIds);
    const ranks = ranksFromRatings(ratings, candidateIds);
    const tieCount = votes.filter((vote) => vote.outcome === "tie").length;
    const bothFailCount = votes.filter((vote) => vote.outcome === "both_fail").length;
    axes[axis] = {
      primary_vote_count: votes.length,
      tie_count: tieCount,
      tie_rate: votes.length ? rounded(tieCount / votes.length) : null,
      both_fail_count: bothFailCount,
      both_fail_rate: votes.length ? rounded(bothFailCount / votes.length) : null,
      modal_agreement: modalAgreement(votes),
      candidates: Object.fromEntries(candidateIds.map((id) => [id, {
        rating: ratings[id],
        rank: ranks[id],
        ...intervals[axis][id],
      }])),
    };
  }
  const consistent = normalized.reversalChecks.filter((check) => check.consistent).length;
  return {
    schema_version: "0.2",
    aggregation_version: "1.9.75",
    methodology_epoch: normalized.methodologyEpoch,
    inputs: {
      reviewers: normalized.reviewerCount,
      tasks: normalized.tasks,
      candidates: normalized.candidates,
      primary_assignments: normalized.primaryVotes.length / AXES.length,
      reversed_assignments: normalized.reversalChecks.length / AXES.length,
    },
    method: {
      axes: AXES,
      choices: [...CHOICES],
      reversed_duplicates: "consistency-only; excluded from primary votes and ratings",
      ties: "half win for each candidate",
      both_fail: "reported separately; excluded from Bradley-Terry fitting",
      bradley_terry_regularization: REGULARIZATION,
      bootstrap: {
        hierarchy: "tasks, then reviewers within sampled tasks",
        iterations: bootstrapIterations,
        seed: String(seed),
        interval: "percentile 95%",
      },
    },
    reversal_consistency: {
      comparisons: normalized.reversalChecks.length,
      consistent,
      inconsistent: normalized.reversalChecks.length - consistent,
      rate: normalized.reversalChecks.length ? rounded(consistent / normalized.reversalChecks.length) : null,
      by_axis: Object.fromEntries(AXES.map((axis) => {
        const checks = normalized.reversalChecks.filter((check) => check.axis === axis);
        const axisConsistent = checks.filter((check) => check.consistent).length;
        return [axis, {
          comparisons: checks.length,
          consistent: axisConsistent,
          inconsistent: checks.length - axisConsistent,
          rate: checks.length ? rounded(axisConsistent / checks.length) : null,
        }];
      })),
    },
    axes,
    claim_limit: "Synthetic calibration proves only the aggregation pipeline; real blind judgments are required before any public preference or rank claim.",
  };
}

function markdown(summary) {
  const lines = [
    "# Ship Preference aggregation",
    "",
    `- Methodology epoch: \`${summary.methodology_epoch}\``,
    `- Reviewers: ${summary.inputs.reviewers}`,
    `- Tasks: ${summary.inputs.tasks.length}`,
    `- Reversal consistency: ${summary.reversal_consistency.consistent}/${summary.reversal_consistency.comparisons} (${rounded(summary.reversal_consistency.rate * 100, 2)}%)`,
    "",
  ];
  for (const axis of AXES) {
    const result = summary.axes[axis];
    lines.push(`## ${axis}`, "", "| Candidate | Rating | 95% CI | Rank | 95% rank interval |", "|---|---:|---:|---:|---:|");
    for (const candidate of summary.inputs.candidates) {
      const value = result.candidates[candidate.id];
      lines.push(`| ${candidate.label} (\`${candidate.id}\`) | ${value.rating ?? "—"} | ${value.rating_95_ci.join("–")} | ${value.rank ?? "—"} | ${value.rank_95_interval.join("–")} |`);
    }
    lines.push(
      "",
      `Primary votes: ${result.primary_vote_count}; ties: ${result.tie_count}; both fail: ${result.both_fail_count}; modal agreement: ${result.modal_agreement.rate ?? "—"}.`,
      "",
    );
  }
  lines.push(`> ${summary.claim_limit}`, "");
  return lines.join("\n");
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = parseArgs();
  const judgmentsRoot = args.get("judgments") ? resolve(String(args.get("judgments"))) : null;
  const revealsRoot = args.get("reveals") ? resolve(String(args.get("reveals"))) : null;
  const out = args.get("out") ? resolve(String(args.get("out"))) : null;
  const bootstrapIterations = args.get("bootstrap") ? Number(args.get("bootstrap")) : 2000;
  const seed = args.get("seed") ? String(args.get("seed")) : "20260729";
  if (!judgmentsRoot || !revealsRoot || !out) {
    console.error(
      "usage: aggregate-ship-preference.mjs --judgments <dir> --reveals <dir> --out <summary.json> " +
      "[--bootstrap 2000] [--seed 20260729]",
    );
    process.exit(2);
  }
  const summary = aggregatePreference({
    judgmentFiles: jsonFiles(judgmentsRoot, "judgments"),
    revealFiles: jsonFiles(revealsRoot, "reveals"),
    bootstrapIterations,
    seed,
  });
  writeJson(out, summary);
  const markdownPath = out.endsWith(".json") ? out.replace(/\.json$/, ".md") : `${out}.md`;
  writeFileSync(markdownPath, markdown(summary), "utf8");
  console.log(JSON.stringify({
    summary: out,
    markdown: markdownPath,
    methodology_epoch: summary.methodology_epoch,
    reviewers: summary.inputs.reviewers,
    tasks: summary.inputs.tasks.length,
  }, null, 2));
}
