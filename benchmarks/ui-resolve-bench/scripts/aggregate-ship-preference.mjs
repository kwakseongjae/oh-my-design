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

function pairKey(left, right) {
  return [left, right].sort().join("\0");
}

function allPairs(candidateIds) {
  const pairs = [];
  for (let left = 0; left < candidateIds.length; left += 1) {
    for (let right = left + 1; right < candidateIds.length; right += 1) {
      pairs.push([candidateIds[left], candidateIds[right]]);
    }
  }
  return pairs;
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

function graphComponents(candidateIds, votes) {
  const adjacency = new Map(candidateIds.map((id) => [id, new Set()]));
  for (const vote of votes.filter((item) => item.outcome !== "both_fail")) {
    adjacency.get(vote.a).add(vote.b);
    adjacency.get(vote.b).add(vote.a);
  }
  const seen = new Set();
  const components = [];
  for (const start of candidateIds) {
    if (seen.has(start)) continue;
    const component = [];
    const queue = [start];
    seen.add(start);
    while (queue.length) {
      const current = queue.shift();
      component.push(current);
      for (const next of [...adjacency.get(current)].sort()) {
        if (seen.has(next)) continue;
        seen.add(next);
        queue.push(next);
      }
    }
    components.push(component.sort());
  }
  return components.sort((left, right) => left[0].localeCompare(right[0]));
}

function validateAndNormalize(judgmentFiles, revealFiles) {
  const judgmentsByUnit = new Map();
  const revealsByUnit = new Map();
  const epochs = new Set();

  for (const path of judgmentFiles) {
    const document = readJson(path);
    assertRecord(document, `judgment ${path}`);
    if (document.schema_version !== "0.3") fail(`judgment ${path} schema_version must be 0.3`);
    if (!document.methodology_epoch || !document.reviewer_hash || !document.review_unit_id) {
      fail(`judgment ${path} is missing epoch, reviewer hash, or review unit`);
    }
    assertRecord(document.task, `judgment ${path} task`);
    if (judgmentsByUnit.has(document.review_unit_id)) fail(`duplicate review unit judgment: ${document.review_unit_id}`);
    if (!Array.isArray(document.judgments)) fail(`judgment ${path} must contain judgments[]`);
    epochs.add(document.methodology_epoch);
    judgmentsByUnit.set(document.review_unit_id, { path, document });
  }

  for (const path of revealFiles) {
    const document = readJson(path);
    assertRecord(document, `reveal ${path}`);
    if (document.schema_version !== "0.3") fail(`reveal ${path} schema_version must be 0.3`);
    if (!document.methodology_epoch || !document.reviewer_hash || !document.review_unit_id) {
      fail(`reveal ${path} is missing epoch, reviewer hash, or review unit`);
    }
    if (revealsByUnit.has(document.review_unit_id)) fail(`duplicate review unit reveal: ${document.review_unit_id}`);
    assertRecord(document.task, `reveal ${path} task`);
    assertRecord(document.candidates, `reveal ${path} candidates`);
    assertRecord(document.assignments, `reveal ${path} assignments`);
    epochs.add(document.methodology_epoch);
    revealsByUnit.set(document.review_unit_id, { path, document });
  }

  if (epochs.size !== 1) fail(`all inputs must share one methodology epoch; found ${[...epochs].sort().join(", ")}`);
  exactStringSet(judgmentsByUnit.keys(), revealsByUnit.keys(), "judgment/reveal review-unit set");

  const candidates = new Map();
  const tasks = new Map();
  const taskCandidateSets = new Map();
  const reviewerTaskUnits = new Set();
  const reviewers = new Set();
  const primaryVotes = [];
  const reversalChecks = [];
  for (const reviewUnitId of [...judgmentsByUnit.keys()].sort()) {
    const judgment = judgmentsByUnit.get(reviewUnitId).document;
    const reveal = revealsByUnit.get(reviewUnitId).document;
    if (judgment.methodology_epoch !== reveal.methodology_epoch) fail(`epoch mismatch for review unit ${reviewUnitId}`);
    if (judgment.reviewer_hash !== reveal.reviewer_hash) fail(`reviewer mismatch for review unit ${reviewUnitId}`);
    if (judgment.review_unit_id !== reveal.review_unit_id) fail(`review-unit mismatch for ${reviewUnitId}`);
    const reviewerHash = reveal.reviewer_hash;
    const task = reveal.task;
    for (const field of ["id", "version", "core_prompt_sha256"]) {
      if (typeof task[field] !== "string" || !task[field]) fail(`task.${field} missing for review unit ${reviewUnitId}`);
      if (judgment.task[field] !== task[field]) fail(`task.${field} mismatch for review unit ${reviewUnitId}`);
    }
    const key = taskKey(task);
    const reviewerTaskKey = `${reviewerHash}\0${key}`;
    if (reviewerTaskUnits.has(reviewerTaskKey)) fail(`duplicate reviewer-task: ${reviewerHash} / ${key}`);
    reviewerTaskUnits.add(reviewerTaskKey);
    reviewers.add(reviewerHash);
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
    const candidateIdsForUnit = [...reviewerVariantIds].sort();
    if (candidateIdsForUnit.length < 2) fail(`review unit ${reviewUnitId} must contain at least two candidates`);
    const existingTaskSet = taskCandidateSets.get(key);
    if (existingTaskSet && JSON.stringify(existingTaskSet) !== JSON.stringify(candidateIdsForUnit)) {
      fail(`inconsistent candidate set for task ${key}`);
    }
    taskCandidateSets.set(key, candidateIdsForUnit);

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
    if (reversedSources.size !== 1) fail(`review unit ${reviewUnitId} must contain exactly one reversed duplicate`);

    const primaryPairKeys = [];
    for (const assignment of assignments.values()) {
      if (assignment.reversed_duplicate) continue;
      primaryPairKeys.push(pairKey(
        candidateByOpaque.get(assignment.a).variant_id,
        candidateByOpaque.get(assignment.b).variant_id,
      ));
    }
    exactStringSet(
      primaryPairKeys,
      allPairs(candidateIdsForUnit).map(([left, right]) => pairKey(left, right)),
      `primary candidate pairs for review unit ${reviewUnitId}`,
    );

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
            review_unit_id: reviewUnitId,
            pair_key: pairKey(a, b),
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
          review_unit_id: reviewUnitId,
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
    taskCandidateSets: Object.fromEntries([...taskCandidateSets.entries()].sort(([left], [right]) => left.localeCompare(right))),
    primaryVotes,
    reversalChecks,
    reviewerCount: reviewers.size,
    reviewUnitCount: judgmentsByUnit.size,
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

function buildCoverage(normalized, candidateIds) {
  const taskKeys = normalized.tasks.map((task) => taskKey(task));
  const globalPairs = allPairs(candidateIds);
  const pairAxes = [];
  for (const currentTask of taskKeys) {
    const taskCandidates = new Set(normalized.taskCandidateSets[currentTask] ?? []);
    for (const [left, right] of globalPairs) {
      const key = pairKey(left, right);
      const pairPresent = taskCandidates.has(left) && taskCandidates.has(right);
      for (const axis of AXES) {
        const votes = normalized.primaryVotes.filter((vote) => (
          vote.task_key === currentTask && vote.pair_key === key && vote.axis === axis
        ));
        const uniqueReviewers = new Set(votes.map((vote) => vote.reviewer_hash)).size;
        const validVotes = votes.filter((vote) => vote.outcome !== "both_fail").length;
        const bothFail = votes.length - validVotes;
        pairAxes.push({
          task_key: currentTask,
          pair: [left, right],
          axis,
          candidate_pair_present: pairPresent,
          unique_reviewers: uniqueReviewers,
          primary_votes: votes.length,
          bradley_terry_valid_votes: validVotes,
          both_fail_votes: bothFail,
          both_fail_rate: votes.length ? rounded(bothFail / votes.length) : null,
        });
      }
    }
  }

  const candidates = Object.fromEntries(candidateIds.map((id) => {
    const presentTasks = taskKeys.filter((key) => (normalized.taskCandidateSets[key] ?? []).includes(id));
    const votes = normalized.primaryVotes.filter((vote) => vote.a === id || vote.b === id);
    return [id, {
      tasks_present: presentTasks.length,
      tasks_missing: taskKeys.filter((key) => !presentTasks.includes(key)),
      unique_reviewers: new Set(votes.map((vote) => vote.reviewer_hash)).size,
      primary_comparisons: votes.length / AXES.length,
    }];
  }));

  const graphs = Object.fromEntries(AXES.map((axis) => {
    const components = graphComponents(
      candidateIds,
      normalized.primaryVotes.filter((vote) => vote.axis === axis),
    );
    return [axis, {
      connected: components.length === 1,
      component_count: components.length,
      components,
    }];
  }));

  const readinessFor = (minimumReviewers) => {
    const taskDeficits = [];
    for (const currentTask of taskKeys) {
      const rows = pairAxes.filter((row) => row.task_key === currentTask);
      const validDeficit = rows.length
        ? Math.max(...rows.map((row) => Math.max(0, minimumReviewers - row.bradley_terry_valid_votes)))
        : minimumReviewers;
      const reviewerCount = new Set(
        normalized.primaryVotes
          .filter((vote) => vote.task_key === currentTask)
          .map((vote) => vote.reviewer_hash),
      ).size;
      taskDeficits.push({
        task_key: currentTask,
        unique_reviewers: reviewerCount,
        additional_unique_reviewers: Math.max(0, minimumReviewers - reviewerCount),
        minimum_additional_non_both_fail_review_units: validDeficit,
      });
    }
    const missingTasks = Math.max(0, 24 - taskKeys.length);
    const pairAxisDeficits = pairAxes
      .filter((row) => (
        !row.candidate_pair_present ||
        row.unique_reviewers < minimumReviewers ||
        row.bradley_terry_valid_votes < minimumReviewers
      ))
      .map((row) => ({
        task_key: row.task_key,
        pair: row.pair,
        axis: row.axis,
        candidate_pair_present: row.candidate_pair_present,
        unique_reviewers: row.unique_reviewers,
        bradley_terry_valid_votes: row.bradley_terry_valid_votes,
        additional_unique_reviewers: Math.max(0, minimumReviewers - row.unique_reviewers),
        additional_non_both_fail_votes: Math.max(0, minimumReviewers - row.bradley_terry_valid_votes),
      }));
    const disconnectedAxes = AXES.filter((axis) => !graphs[axis].connected);
    const missingCandidateTasks = Object.entries(candidates)
      .flatMap(([candidate, value]) => value.tasks_missing.map((missingTask) => ({
        candidate,
        task_key: missingTask,
      })));
    const uniqueReviewerDeficit = Math.max(0, minimumReviewers - normalized.reviewerCount);
    const blockers = [];
    if (missingTasks) blockers.push(`requires ${missingTasks} more tasks to reach 24`);
    if (uniqueReviewerDeficit) blockers.push(`requires ${uniqueReviewerDeficit} more unique reviewers`);
    if (missingCandidateTasks.length) blockers.push(`${missingCandidateTasks.length} candidate-task cells are missing`);
    if (pairAxisDeficits.length) blockers.push(`${pairAxisDeficits.length} task-pair-axis cells are under-covered`);
    if (disconnectedAxes.length) blockers.push(`disconnected rating graph: ${disconnectedAxes.join(", ")}`);
    return {
      met: blockers.length === 0,
      minimum_reviewers: minimumReviewers,
      minimum_tasks: 24,
      blockers,
      deficits: {
        additional_tasks: missingTasks,
        additional_unique_reviewers: uniqueReviewerDeficit,
        missing_candidate_tasks: missingCandidateTasks,
        undercovered_pair_axes: pairAxisDeficits,
        disconnected_axes: disconnectedAxes,
      },
      next_review_units: {
        existing_tasks: taskDeficits,
        missing_tasks: {
          count: missingTasks,
          minimum_review_units_each: minimumReviewers,
        },
        minimum_total_assuming_non_both_fail: (
          taskDeficits.reduce((sum, item) => sum + item.minimum_additional_non_both_fail_review_units, 0) +
          missingTasks * minimumReviewers
        ),
      },
    };
  };

  const preview = readinessFor(5);
  const verified = readinessFor(10);
  return {
    tasks: taskKeys.length,
    unique_reviewers: normalized.reviewerCount,
    review_units: normalized.reviewUnitCount,
    candidates,
    pair_axes: pairAxes,
    graphs,
    readiness: {
      grade: verified.met ? "verified" : preview.met ? "preview" : "diagnostic",
      scope: "preference_plane_only",
      preview,
      verified,
      overall_benchmark_publishable: false,
      external_requirements: [
        "automated run and trial coverage",
        "runtime and skill attribution",
        "task-quality and mutation acceptance",
        "deterministic critical-gate eligibility",
      ],
    },
  };
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
  const coverage = buildCoverage(normalized, candidateIds);
  const axes = {};
  for (const axis of AXES) {
    const votes = normalized.primaryVotes.filter((vote) => vote.axis === axis);
    const connected = coverage.graphs[axis].connected;
    const fittedRatings = fitBradleyTerry(votes, candidateIds);
    const fittedRanks = ranksFromRatings(fittedRatings, candidateIds);
    const tieCount = votes.filter((vote) => vote.outcome === "tie").length;
    const bothFailCount = votes.filter((vote) => vote.outcome === "both_fail").length;
    axes[axis] = {
      primary_vote_count: votes.length,
      tie_count: tieCount,
      tie_rate: votes.length ? rounded(tieCount / votes.length) : null,
      both_fail_count: bothFailCount,
      both_fail_rate: votes.length ? rounded(bothFailCount / votes.length) : null,
      modal_agreement: modalAgreement(votes),
      graph: coverage.graphs[axis],
      candidates: Object.fromEntries(candidateIds.map((id) => [id, {
        rating: connected ? fittedRatings[id] : null,
        rank: connected ? fittedRanks[id] : null,
        rating_95_ci: connected ? intervals[axis][id].rating_95_ci : [null, null],
        rank_95_interval: connected ? intervals[axis][id].rank_95_interval : [null, null],
      }])),
    };
  }
  const consistent = normalized.reversalChecks.filter((check) => check.consistent).length;
  const { readiness, ...coverageSummary } = coverage;
  return {
    schema_version: "0.3",
    aggregation_version: "1.9.76",
    methodology_epoch: normalized.methodologyEpoch,
    inputs: {
      reviewers: normalized.reviewerCount,
      review_units: normalized.reviewUnitCount,
      tasks: normalized.tasks,
      candidates: normalized.candidates,
      primary_assignments: normalized.primaryVotes.length / AXES.length,
      reversed_assignments: normalized.reversalChecks.length / AXES.length,
    },
    coverage: coverageSummary,
    readiness,
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
    claim_limit: "Preference readiness is only one evidence plane; overall benchmark publication still requires automated run/trial, attribution, task-quality, and deterministic-gate acceptance.",
  };
}

function markdown(summary) {
  const lines = [
    "# Ship Preference aggregation",
    "",
    `- Methodology epoch: \`${summary.methodology_epoch}\``,
    `- Reviewers: ${summary.inputs.reviewers}`,
    `- Review units: ${summary.inputs.review_units}`,
    `- Tasks: ${summary.inputs.tasks.length}`,
    `- Preference evidence grade: **${summary.readiness.grade}**`,
    `- Reversal consistency: ${summary.reversal_consistency.consistent}/${summary.reversal_consistency.comparisons} (${rounded(summary.reversal_consistency.rate * 100, 2)}%)`,
    "",
  ];
  if (summary.readiness.preview.blockers.length) {
    lines.push("## Preview deficits", "", ...summary.readiness.preview.blockers.map((item) => `- ${item}`), "");
  }
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
    review_units: summary.inputs.review_units,
    tasks: summary.inputs.tasks.length,
    preference_grade: summary.readiness.grade,
  }, null, 2));
}
