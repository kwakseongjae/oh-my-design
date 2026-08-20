#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  renameSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";

const scriptRoot = dirname(fileURLToPath(import.meta.url));
const galleryScript = join(scriptRoot, "build-gallery.mjs");

function fail(message) {
  throw new Error(`review round preparation rejected: ${message}`);
}

function isInside(parent, child) {
  const rel = relative(resolve(parent), resolve(child));
  return rel === "" || (!rel.startsWith(`..${sep}`) && rel !== "..");
}

function slug(value, label) {
  if (typeof value !== "string" || !/^[a-z0-9][a-z0-9._-]{1,63}$/i.test(value)) {
    fail(`${label} must use 2–64 letters, numbers, dots, underscores, or hyphens`);
  }
  return value;
}

export function prepareReviewRound({
  planPath,
  saltFile,
  galleriesOut,
  revealsOut,
  manifestOut,
}) {
  for (const [label, path] of Object.entries({ galleriesOut, revealsOut, manifestOut })) {
    if (existsSync(path)) fail(`${label} already exists: ${path}`);
  }
  if (isInside(galleriesOut, revealsOut) || isInside(revealsOut, galleriesOut)) {
    fail("public galleries and private reveals must be separate roots");
  }
  if (isInside(galleriesOut, manifestOut)) fail("private manifest must be outside the public gallery root");

  const plan = readJson(planPath);
  if (plan.schema_version !== "0.1") fail("plan schema_version must be 0.1");
  const epoch = slug(plan.methodology_epoch, "methodology_epoch");
  if (!Array.isArray(plan.reviewers) || plan.reviewers.length === 0) fail("plan reviewers[] is required");
  if (!Array.isArray(plan.tasks) || plan.tasks.length === 0) fail("plan tasks[] is required");
  const reviewers = plan.reviewers.map((reviewer, index) => slug(reviewer, `reviewers[${index}]`));
  if (new Set(reviewers).size !== reviewers.length) fail("plan reviewers must be unique");
  const planDir = dirname(planPath);
  const tasks = plan.tasks.map((task, index) => {
    if (!task || typeof task !== "object") fail(`tasks[${index}] must be an object`);
    const id = slug(task.id, `tasks[${index}].id`);
    const runs = resolve(planDir, String(task.runs ?? ""));
    if (!task.runs || !existsSync(runs)) fail(`task runs not found for ${id}: ${runs}`);
    return { id, runs };
  });
  if (new Set(tasks.map((task) => task.id)).size !== tasks.length) fail("plan task ids must be unique");

  const salt = readFileSync(saltFile, "utf8").trim();
  if (salt.length < 16) fail("salt file must contain at least 16 non-whitespace characters");
  const staging = mkdtempSync(join(tmpdir(), "ui-resolve-review-round-"));
  const stagedGalleries = join(staging, "galleries");
  const stagedReveals = join(staging, "reveals");
  const stagedManifest = join(staging, "round-manifest.json");
  mkdirSync(stagedGalleries, { recursive: true });
  mkdirSync(stagedReveals, { recursive: true });

  try {
    const units = [];
    for (let reviewerIndex = 0; reviewerIndex < reviewers.length; reviewerIndex += 1) {
      const reviewer = reviewers[reviewerIndex];
      const slot = `slot-${String(reviewerIndex + 1).padStart(3, "0")}`;
      for (const task of tasks) {
        const gallery = join(stagedGalleries, slot, task.id);
        const temporaryReveal = join(stagedReveals, `${slot}-${task.id}.json`);
        execFileSync(process.execPath, [
          galleryScript,
          "--runs", task.runs,
          "--out", gallery,
          "--reveal-out", temporaryReveal,
          "--reviewer", reviewer,
          "--blind-salt-file", saltFile,
          "--epoch", epoch,
        ], { encoding: "utf8", stdio: "pipe" });
        const assignmentPath = join(gallery, "assignment.json");
        const assignment = readJson(assignmentPath);
        const reveal = readJson(temporaryReveal);
        if (assignment.task.id !== task.id || reveal.task.id !== task.id) {
          fail(`task ${task.id} does not match gallery run task`);
        }
        if (assignment.review_unit_id !== reveal.review_unit_id) fail(`review unit mismatch for ${slot}/${task.id}`);
        const finalReveal = join(stagedReveals, `${assignment.review_unit_id}.json`);
        renameSync(temporaryReveal, finalReveal);
        units.push({
          slot,
          reviewer_id: reviewer,
          reviewer_hash: assignment.reviewer_hash,
          review_unit_id: assignment.review_unit_id,
          task: {
            id: assignment.task.id,
            version: assignment.task.version,
            core_prompt_sha256: assignment.task.core_prompt_sha256,
          },
          gallery_relative_path: `${slot}/${task.id}`,
          reveal_file: `${assignment.review_unit_id}.json`,
          assignment_sha256: sha256(readFileSync(assignmentPath)),
          reveal_sha256: sha256(readFileSync(finalReveal)),
        });
      }
    }
    const reviewerHashes = new Map();
    for (const unit of units) {
      const previous = reviewerHashes.get(unit.reviewer_id);
      if (previous && previous !== unit.reviewer_hash) fail(`unstable reviewer hash for ${unit.reviewer_id}`);
      reviewerHashes.set(unit.reviewer_id, unit.reviewer_hash);
    }
    const manifest = {
      schema_version: "0.1",
      collection_schema_version: "0.3",
      methodology_epoch: epoch,
      round_id: `review-round-${sha256(units.map((unit) => unit.review_unit_id).sort().join("\n")).slice(0, 16)}`,
      expected: {
        reviewers: reviewers.length,
        tasks: tasks.length,
        review_units: units.length,
      },
      units,
      privacy: {
        galleries_root: "public-distribution-only",
        reveals_root: "private-operator-only",
        salt_in_outputs: false,
      },
    };
    writeJson(stagedManifest, manifest);
    mkdirSync(dirname(galleriesOut), { recursive: true });
    mkdirSync(dirname(revealsOut), { recursive: true });
    mkdirSync(dirname(manifestOut), { recursive: true });
    renameSync(stagedGalleries, galleriesOut);
    renameSync(stagedReveals, revealsOut);
    renameSync(stagedManifest, manifestOut);
    return manifest;
  } finally {
    rmSync(staging, { recursive: true, force: true });
  }
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = parseArgs();
  const required = ["plan", "blind-salt-file", "galleries-out", "reveals-out", "manifest-out"];
  if (required.some((key) => !args.get(key))) {
    console.error(
      "usage: prepare-review-round.mjs --plan <plan.json> --blind-salt-file <secret-file> " +
      "--galleries-out <public-dir> --reveals-out <private-dir> --manifest-out <private-manifest.json>",
    );
    process.exit(2);
  }
  const planPath = resolve(String(args.get("plan")));
  const manifest = prepareReviewRound({
    planPath,
    saltFile: resolve(String(args.get("blind-salt-file"))),
    galleriesOut: resolve(String(args.get("galleries-out"))),
    revealsOut: resolve(String(args.get("reveals-out"))),
    manifestOut: resolve(String(args.get("manifest-out"))),
  });
  console.log(JSON.stringify({
    round_id: manifest.round_id,
    methodology_epoch: manifest.methodology_epoch,
    reviewers: manifest.expected.reviewers,
    tasks: manifest.expected.tasks,
    review_units: manifest.expected.review_units,
  }, null, 2));
}
