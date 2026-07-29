#!/usr/bin/env node
import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
} from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { aggregatePreference } from "./aggregate-ship-preference.mjs";
import { parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";

function fail(message) {
  throw new Error(`review round intake rejected: ${message}`);
}

function jsonFiles(root, label) {
  if (!existsSync(root) || !statSync(root).isDirectory()) fail(`${label} directory not found: ${root}`);
  return readdirSync(root)
    .filter((name) => name.endsWith(".json"))
    .sort()
    .map((name) => join(root, name));
}

function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

export function intakeReviewRound({
  manifestPath,
  judgmentsRoot,
  revealsRoot,
  statusOut,
  aggregateOut,
  lockOut,
  bootstrapIterations = 2000,
  seed = "20260729",
}) {
  const manifest = readJson(manifestPath);
  if (manifest.schema_version !== "0.1" || manifest.collection_schema_version !== "0.3") {
    fail("round manifest must use schema 0.1 with collection schema 0.3");
  }
  if (!Array.isArray(manifest.units) || manifest.units.length !== manifest.expected?.review_units) {
    fail("round manifest unit count mismatch");
  }
  const expected = new Map();
  for (const unit of manifest.units) {
    if (expected.has(unit.review_unit_id)) fail(`duplicate manifest review unit ${unit.review_unit_id}`);
    expected.set(unit.review_unit_id, unit);
  }

  const revealFiles = jsonFiles(revealsRoot, "reveals");
  const reveals = new Map();
  for (const path of revealFiles) {
    const document = readJson(path);
    const unit = expected.get(document.review_unit_id);
    if (!unit) fail(`unexpected reveal review unit ${document.review_unit_id ?? "missing"}`);
    if (reveals.has(document.review_unit_id)) fail(`duplicate reveal review unit ${document.review_unit_id}`);
    if (document.schema_version !== "0.3") fail(`reveal ${document.review_unit_id} schema_version must be 0.3`);
    if (document.reviewer_hash !== unit.reviewer_hash) fail(`reveal reviewer mismatch for ${document.review_unit_id}`);
    for (const field of ["id", "version", "core_prompt_sha256"]) {
      if (document.task?.[field] !== unit.task[field]) fail(`reveal task.${field} mismatch for ${document.review_unit_id}`);
    }
    if (sha256(readFileSync(path)) !== unit.reveal_sha256) fail(`reveal hash mismatch for ${document.review_unit_id}`);
    reveals.set(document.review_unit_id, path);
  }
  if (reveals.size !== expected.size) {
    const missing = [...expected.keys()].filter((id) => !reveals.has(id));
    fail(`private reveal set incomplete: ${missing.join(", ")}`);
  }

  const judgmentFiles = jsonFiles(judgmentsRoot, "judgments");
  const judgments = new Map();
  for (const path of judgmentFiles) {
    const document = readJson(path);
    const unit = expected.get(document.review_unit_id);
    if (!unit) fail(`unexpected judgment review unit ${document.review_unit_id ?? "missing"}`);
    if (judgments.has(document.review_unit_id)) fail(`duplicate judgment review unit ${document.review_unit_id}`);
    if (document.schema_version !== "0.3") fail(`judgment ${document.review_unit_id} schema_version must be 0.3`);
    if (document.methodology_epoch !== manifest.methodology_epoch) fail(`judgment epoch mismatch for ${document.review_unit_id}`);
    if (document.reviewer_hash !== unit.reviewer_hash) fail(`judgment reviewer mismatch for ${document.review_unit_id}`);
    for (const field of ["id", "version", "core_prompt_sha256"]) {
      if (document.task?.[field] !== unit.task[field]) fail(`judgment task.${field} mismatch for ${document.review_unit_id}`);
    }
    judgments.set(document.review_unit_id, path);
  }

  const completedUnits = [...judgments.keys()].sort();
  const missingUnits = manifest.units
    .filter((unit) => !judgments.has(unit.review_unit_id))
    .map((unit) => ({
      slot: unit.slot,
      task_id: unit.task.id,
      review_unit_id: unit.review_unit_id,
    }));
  const complete = missingUnits.length === 0;
  const status = {
    schema_version: "0.1",
    round_id: manifest.round_id,
    methodology_epoch: manifest.methodology_epoch,
    status: complete ? "complete" : "incomplete",
    progress: {
      completed: completedUnits.length,
      expected: expected.size,
      remaining: missingUnits.length,
    },
    completed_review_units: completedUnits,
    missing_review_units: missingUnits,
    aggregate_written: false,
    lock_status: complete ? "pending" : "not_created_incomplete",
  };

  if (complete) {
    const summary = aggregatePreference({
      judgmentFiles: completedUnits.map((id) => judgments.get(id)),
      revealFiles: [...reveals.keys()].sort().map((id) => reveals.get(id)),
      bootstrapIterations,
      seed,
    });
    const aggregateBytes = stableJson(summary);
    const lock = {
      schema_version: "0.1",
      round_id: manifest.round_id,
      methodology_epoch: manifest.methodology_epoch,
      manifest_sha256: sha256(readFileSync(manifestPath)),
      aggregate_sha256: sha256(aggregateBytes),
      judgments: completedUnits.map((id) => ({
        review_unit_id: id,
        sha256: sha256(readFileSync(judgments.get(id))),
      })),
      reveals: [...reveals.keys()].sort().map((id) => ({
        review_unit_id: id,
        sha256: sha256(readFileSync(reveals.get(id))),
      })),
    };
    if (existsSync(lockOut)) {
      const previous = readFileSync(lockOut, "utf8");
      if (previous !== stableJson(lock)) fail("existing lock does not match current manifest, judgments, reveals, or aggregate");
      status.lock_status = "unchanged";
    } else {
      writeJson(lockOut, lock);
      status.lock_status = "created";
    }
    writeJson(aggregateOut, summary);
    status.aggregate_written = true;
  }
  writeJson(statusOut, status);
  return status;
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = parseArgs();
  const required = ["manifest", "judgments", "reveals", "out", "aggregate-out", "lock-out"];
  if (required.some((key) => !args.get(key))) {
    console.error(
      "usage: intake-review-round.mjs --manifest <private-manifest.json> --judgments <dir> " +
      "--reveals <private-dir> --out <progress.json> --aggregate-out <summary.json> " +
      "--lock-out <lock.json> [--bootstrap 2000] [--seed 20260729]",
    );
    process.exit(2);
  }
  const status = intakeReviewRound({
    manifestPath: resolve(String(args.get("manifest"))),
    judgmentsRoot: resolve(String(args.get("judgments"))),
    revealsRoot: resolve(String(args.get("reveals"))),
    statusOut: resolve(String(args.get("out"))),
    aggregateOut: resolve(String(args.get("aggregate-out"))),
    lockOut: resolve(String(args.get("lock-out"))),
    bootstrapIterations: args.get("bootstrap") ? Number(args.get("bootstrap")) : 2000,
    seed: args.get("seed") ? String(args.get("seed")) : "20260729",
  });
  console.log(JSON.stringify(status, null, 2));
}
