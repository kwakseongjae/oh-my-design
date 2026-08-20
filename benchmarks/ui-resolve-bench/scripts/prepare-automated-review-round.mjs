#!/usr/bin/env node
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { benchRoot, parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";

const AXES = Object.freeze([
  {
    id: "functionality",
    prompt: "Which option more clearly fulfills the stated task and exposes the necessary product states?",
  },
  {
    id: "usability",
    prompt: "Which option makes hierarchy, next action, and scanning easier for the intended user?",
  },
  {
    id: "fidelity",
    prompt: "Which option is more coherent and faithful to the supplied product and design context?",
  },
  {
    id: "ship_preference",
    prompt: "Considering the task as a whole, which result would you ship?",
  },
]);

function fail(message) {
  throw new Error(`automated review preparation rejected: ${message}`);
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

function stableTask(taskId) {
  const path = join(benchRoot, "tasks", taskId, "task.json");
  if (!existsSync(path)) fail(`canonical task not found: ${taskId}`);
  const task = readJson(path);
  if (!task.review_brief?.trim()) fail(`task ${taskId} has no neutral review_brief`);
  return task;
}

function parseCellId(cellId) {
  const match = /^(.+)-t([1-9]\d*)-([a-z0-9._-]+)$/i.exec(cellId);
  if (!match) fail(`cell id does not encode task, trial, and arm: ${cellId}`);
  return { taskAlias: match[1], trial: Number(match[2]), arm: match[3] };
}

function promptDocument({ task, assignmentId }) {
  return `# Anonymous UI benchmark judgment

You are one independent visual-product judge. Inspect the four local image files
in this directory: A-desktop.png, A-mobile.png, B-desktop.png, and B-mobile.png.

Task brief: ${task.review_brief}

Judge the task, not visual novelty and not presumed tool identity. Do not inspect
parent directories, repository history, manifests, or hidden metadata. Use only
the task brief and the four images. A tie or both_fail is valid when warranted.

Return exactly one JSON object and no Markdown:

{"assignment_id":"${assignmentId}","axes":{"functionality":"a|b|tie|both_fail","usability":"a|b|tie|both_fail","fidelity":"a|b|tie|both_fail","ship_preference":"a|b|tie|both_fail"},"reason":"one concise evidence-based sentence"}
`;
}

export function prepareAutomatedReviewRound({
  executionStatePath,
  judges,
  saltFile,
  packetsOut,
  revealsOut,
  manifestOut,
  methodologyEpoch,
}) {
  if (existsSync(packetsOut)) fail(`packets output already exists: ${packetsOut}`);
  if (existsSync(revealsOut)) fail(`reveals output already exists: ${revealsOut}`);
  if (existsSync(manifestOut)) fail(`manifest output already exists: ${manifestOut}`);
  if (isInside(packetsOut, revealsOut) || isInside(revealsOut, packetsOut)) {
    fail("public packets and private reveals must be separate roots");
  }
  if (isInside(packetsOut, manifestOut)) fail("private manifest must be outside public packets");

  const epoch = slug(methodologyEpoch, "methodology_epoch");
  const reviewerIds = judges.map((judge, index) => slug(judge, `judges[${index}]`));
  if (reviewerIds.length < 2 || new Set(reviewerIds).size !== reviewerIds.length) {
    fail("at least two unique automated judges are required");
  }
  const salt = readFileSync(saltFile, "utf8").trim();
  if (salt.length < 16) fail("salt file must contain at least 16 non-whitespace characters");

  const state = readJson(executionStatePath);
  if (state.status !== "complete" || state.completed_cells !== state.scheduled_cells) {
    fail("execution state must be complete");
  }
  if (!Array.isArray(state.cells) || state.cells.length !== state.scheduled_cells) {
    fail("execution cell count mismatch");
  }

  const groups = new Map();
  for (const cell of state.cells) {
    if (
      cell.status !== "complete"
      || cell.validity !== "valid"
      || cell.ui_resolved !== true
      || cell.evidence_and_unknown_pass !== true
    ) {
      fail(`ineligible cell: ${cell.id}`);
    }
    const parsed = parseCellId(cell.id);
    const key = `${parsed.taskAlias}-t${parsed.trial}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push({ cell, ...parsed });
  }
  if (groups.size === 0) fail("no eligible exact trial pairs");

  const staging = mkdtempSync(join(tmpdir(), "ui-resolve-automated-review-"));
  const stagedPackets = join(staging, "packets");
  const stagedReveals = join(staging, "reveals");
  const stagedManifest = join(staging, "round-manifest.json");
  mkdirSync(stagedPackets, { recursive: true });
  mkdirSync(stagedReveals, { recursive: true });

  try {
    const units = [];
    for (const [pairId, entries] of [...groups.entries()].sort(([a], [b]) => a.localeCompare(b))) {
      if (entries.length !== 2 || new Set(entries.map((entry) => entry.arm)).size !== 2) {
        fail(`pair ${pairId} must contain exactly two distinct arms`);
      }
      const manifests = entries.map((entry) => readJson(join(entry.cell.workspace, ".benchmark", "manifest.json")));
      const taskIds = new Set(manifests.map((manifest) => manifest.task?.id));
      const versions = new Set(manifests.map((manifest) => manifest.task?.version));
      const prompts = new Set(manifests.map((manifest) => manifest.task?.core_prompt_sha256));
      if (taskIds.size !== 1 || versions.size !== 1 || prompts.size !== 1) {
        fail(`pair ${pairId} task contract mismatch`);
      }
      const task = stableTask(manifests[0].task.id);
      if (task.version !== manifests[0].task.version) fail(`pair ${pairId} canonical task version mismatch`);

      for (const reviewerId of reviewerIds) {
        const reviewerHash = sha256(`${salt}:${epoch}:reviewer:${reviewerId}`).slice(0, 16);
        const reviewTask = {
          id: `${task.id}-trial-${entries[0].trial}`,
          version: task.version,
          core_prompt_sha256: manifests[0].task.core_prompt_sha256,
        };
        const reviewUnitId = `review-unit-${sha256(
          `${salt}:${epoch}:${reviewerHash}:${reviewTask.id}:${reviewTask.version}:${reviewTask.core_prompt_sha256}`,
        ).slice(0, 16)}`;
        const opaqueCandidates = entries.map((entry) => ({
          opaque: `candidate-${sha256(`${salt}:${epoch}:${reviewUnitId}:${entry.cell.id}`).slice(0, 10)}`,
          entry,
          manifest: manifests.find((manifest) => manifest.variant.id.endsWith(entry.arm)),
        }));
        if (opaqueCandidates.some((candidate) => !candidate.manifest)) {
          fail(`pair ${pairId} could not map arm to manifest`);
        }
        const sideSeed = sha256(`${salt}:${epoch}:${reviewUnitId}:sides`);
        const primary = Number.parseInt(sideSeed[0], 16) % 2 === 0
          ? opaqueCandidates
          : opaqueCandidates.toReversed();
        const assignmentId = `assignment-${sha256(`${salt}:${epoch}:${reviewUnitId}:primary`).slice(0, 12)}`;
        const reversalId = `assignment-${sha256(`${salt}:${epoch}:${reviewUnitId}:reversal`).slice(0, 12)}`;
        const assignments = [
          { id: assignmentId, sides: primary, reversed: false, reversalOf: null, order: 1 },
          { id: reversalId, sides: primary.toReversed(), reversed: true, reversalOf: assignmentId, order: 2 },
        ];
        const invocationRecords = [];
        for (const assignment of assignments) {
          const relativePacket = join(reviewerId, reviewTask.id, `order-${assignment.order}`);
          const packetRoot = join(stagedPackets, relativePacket);
          mkdirSync(packetRoot, { recursive: true });
          for (const [sideIndex, side] of assignment.sides.entries()) {
            const sideName = sideIndex === 0 ? "A" : "B";
            for (const viewport of ["desktop", "mobile"]) {
              const source = join(side.entry.cell.workspace, ".benchmark", "screenshots", `${viewport}.png`);
              if (!existsSync(source)) fail(`missing ${viewport} screenshot for ${side.entry.cell.id}`);
              copyFileSync(source, join(packetRoot, `${sideName}-${viewport}.png`));
            }
          }
          writeFileSync(join(packetRoot, "PROMPT.md"), promptDocument({
            task,
            assignmentId: assignment.id,
          }), "utf8");
          writeJson(join(packetRoot, "packet.json"), {
            schema_version: "0.1",
            methodology_epoch: epoch,
            review_unit_id: reviewUnitId,
            assignment_id: assignment.id,
            task: reviewTask,
            rubric: AXES,
            files: ["A-desktop.png", "A-mobile.png", "B-desktop.png", "B-mobile.png"],
            output_contract: {
              choices: ["a", "b", "tie", "both_fail"],
              json_only: true,
            },
          });
          invocationRecords.push({
            assignment_id: assignment.id,
            relative_packet: relativePacket,
            reversed_duplicate: assignment.reversed,
            reversal_of: assignment.reversalOf,
          });
        }
        const candidates = Object.fromEntries(opaqueCandidates.map((candidate) => [
          candidate.opaque,
          {
            directory: candidate.entry.cell.id,
            variant_id: candidate.manifest.variant.id,
            label: candidate.manifest.variant.label,
          },
        ]));
        const assignmentReveal = Object.fromEntries(assignments.map((assignment) => [
          assignment.id,
          {
            a: assignment.sides[0].opaque,
            b: assignment.sides[1].opaque,
            reversed_duplicate: assignment.reversed,
            reversal_of: assignment.reversalOf,
          },
        ]));
        const revealPath = join(stagedReveals, `${reviewUnitId}.json`);
        writeJson(revealPath, {
          schema_version: "0.3",
          methodology_epoch: epoch,
          reviewer_hash: reviewerHash,
          review_unit_id: reviewUnitId,
          task: reviewTask,
          candidates,
          assignments: assignmentReveal,
        });
        units.push({
          slot: reviewerId,
          reviewer_id: reviewerId,
          reviewer_hash: reviewerHash,
          review_unit_id: reviewUnitId,
          task: reviewTask,
          pair_id: pairId,
          invocations: invocationRecords,
          reveal_file: `${reviewUnitId}.json`,
          reveal_sha256: sha256(readFileSync(revealPath)),
        });
      }
    }

    const manifest = {
      schema_version: "0.1",
      collection_schema_version: "0.3",
      review_mode: "anonymous-automated-multi-judge-separate-reversal",
      methodology_epoch: epoch,
      round_id: `automated-review-${sha256(units.map((unit) => unit.review_unit_id).sort().join("\n")).slice(0, 16)}`,
      source: {
        experiment_id: state.experiment_id,
        execution_state_sha256: sha256(readFileSync(executionStatePath)),
        completed_cells: state.completed_cells,
      },
      expected: {
        reviewers: reviewerIds.length,
        exact_pairs: groups.size,
        review_units: units.length,
        invocations: units.length * 2,
      },
      units,
      privacy: {
        packets_root: "judge-visible-identity-free",
        reveals_root: "private-operator-only",
        separate_reversal_invocations: true,
        salt_in_outputs: false,
      },
    };
    writeJson(stagedManifest, manifest);

    const publicBytes = JSON.stringify(manifest.units.map((unit) => unit.invocations));
    for (const entry of state.cells.map((cell) => parseCellId(cell.id).arm)) {
      if (publicBytes.includes(entry)) fail(`arm identity leaked into public invocation manifest: ${entry}`);
    }

    mkdirSync(dirname(packetsOut), { recursive: true });
    mkdirSync(dirname(revealsOut), { recursive: true });
    mkdirSync(dirname(manifestOut), { recursive: true });
    renameSync(stagedPackets, packetsOut);
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
  const required = [
    "execution-state",
    "judges",
    "blind-salt-file",
    "packets-out",
    "reveals-out",
    "manifest-out",
    "epoch",
  ];
  if (required.some((key) => !args.get(key))) {
    console.error(
      "usage: prepare-automated-review-round.mjs --execution-state <state.json> " +
      "--judges <id,id,...> --blind-salt-file <secret-file> --packets-out <public-dir> " +
      "--reveals-out <private-dir> --manifest-out <private-manifest.json> --epoch <opaque-epoch>",
    );
    process.exit(2);
  }
  const manifest = prepareAutomatedReviewRound({
    executionStatePath: resolve(String(args.get("execution-state"))),
    judges: String(args.get("judges")).split(",").map((value) => value.trim()).filter(Boolean),
    saltFile: resolve(String(args.get("blind-salt-file"))),
    packetsOut: resolve(String(args.get("packets-out"))),
    revealsOut: resolve(String(args.get("reveals-out"))),
    manifestOut: resolve(String(args.get("manifest-out"))),
    methodologyEpoch: String(args.get("epoch")),
  });
  console.log(JSON.stringify({
    round_id: manifest.round_id,
    exact_pairs: manifest.expected.exact_pairs,
    reviewers: manifest.expected.reviewers,
    review_units: manifest.expected.review_units,
    invocations: manifest.expected.invocations,
  }, null, 2));
}
