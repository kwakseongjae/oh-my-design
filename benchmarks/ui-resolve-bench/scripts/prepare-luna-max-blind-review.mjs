#!/usr/bin/env node

import { randomBytes } from "node:crypto";
import {
  chmodSync,
  constants,
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import {
  auditWowPreview,
  defaultGatePath,
  sha256,
} from "./audit-luna-max-wow-preview.mjs";

const TERMINAL = new Set(["completed", "failed", "timeout", "infrastructure-invalid"]);
const LABELS = new Set(["A", "B", "tie"]);
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function fail(message) { throw new Error(`Luna Max blind review rejected: ${message}`); }
function invariant(condition, message) { if (!condition) fail(message); }
function binding(path) {
  const bytes = readFileSync(path);
  return { path, bytes: bytes.length, sha256: sha256(bytes) };
}
function regular(path, label) {
  invariant(typeof path === "string" && isAbsolute(path) && resolve(path) === path && !path.split(sep).includes(".."), `${label} must be a canonical absolute path`);
  invariant(existsSync(path), `${label} is missing`);
  const stat = lstatSync(path);
  invariant(stat.isFile() && !stat.isSymbolicLink() && realpathSync(path) === path, `${label} must be a regular non-symlink file`);
  return path;
}
function readJson(path, label) {
  regular(path, label);
  try { return JSON.parse(readFileSync(path, "utf8")); } catch { fail(`${label} is not valid JSON`); }
}
function directory(path, label) {
  invariant(existsSync(path), `${label} is missing`);
  const stat = lstatSync(path);
  invariant(stat.isDirectory() && !stat.isSymbolicLink() && realpathSync(path) === path, `${label} must be a canonical regular non-symlink directory`);
  return path;
}
function writeJson(path, value, mode = 0o444) {
  directory(dirname(path), `output parent for ${basename(path)}`);
  invariant(!existsSync(path), `refusing to overwrite ${path}`);
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, { encoding: "utf8", mode, flag: "wx" });
  chmodSync(path, mode);
  return binding(path);
}
function parseArgs(argv) {
  const args = new Map();
  for (let i = 0; i < argv.length; i += 2) {
    invariant(argv[i]?.startsWith("--") && argv[i + 1] && !argv[i + 1].startsWith("--"), `invalid argument near ${argv[i] ?? "end"}`);
    const key = argv[i].slice(2);
    invariant(!args.has(key), `duplicate --${key}`);
    args.set(key, argv[i + 1]);
  }
  return args;
}
function requireArgs(args, names) {
  for (const name of names) invariant(args.has(name), `missing --${name}`);
  invariant([...args.keys()].every((key) => names.includes(key)), `unexpected argument --${[...args.keys()].find((key) => !names.includes(key))}`);
}
function freshDirectory(path, label) {
  invariant(!existsSync(path), `${label} already exists; output must be fresh and immutable`);
  directory(dirname(path), `${label} parent`);
  mkdirSync(path, { recursive: false, mode: 0o700 });
}
function outside(child, parent, label) {
  const rel = relative(parent, child);
  invariant(rel && (rel === ".." || rel.startsWith(`..${sep}`)), `${label} must be outside the reviewer-facing packet`);
}
function exactBoundFile(item, label) {
  invariant(item && typeof item.path === "string" && /^[a-f0-9]{64}$/.test(item.sha256 ?? ""), `${label} binding missing`);
  regular(item.path, label);
  const bytes = readFileSync(item.path);
  invariant(sha256(bytes) === item.sha256 && (item.bytes === undefined || item.bytes === bytes.length), `${label} binding mismatch`);
  return { path: item.path, bytes, sha256: item.sha256 };
}
function png(bytes, label) {
  invariant(bytes.length >= PNG_SIGNATURE.length && bytes.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE), `${label} must be an actual PNG asset`);
}
function opaque(prefix, nonce, ...parts) { return `${prefix}-${sha256([nonce, ...parts].join("\0")).slice(0, 16)}`; }
function scanReviewerBytes(bytes, forbidden, label) {
  const text = bytes.toString("latin1").toLowerCase();
  for (const value of forbidden) {
    if (value.length >= 4 && text.includes(value.toLowerCase())) fail(`${label} contains a hidden source, skill, prompt, model, or arm name`);
  }
}

function loadAuthority(args) {
  const paths = Object.fromEntries(["matrix", "preregistration", "materialization", "records", "gate"].map((name) => [name, resolve(String(args.get(name))) ]));
  invariant(paths.gate === defaultGatePath, "gate must use the exact repository score-gate authority path");
  const values = Object.fromEntries(Object.entries(paths).map(([name, path]) => [name, readJson(path, name)]));
  const bindings = Object.fromEntries(Object.entries(paths).map(([name, path]) => [name, binding(path)]));
  const audit = auditWowPreview({
    matrix: values.matrix,
    preregistration: values.preregistration,
    materialization: values.materialization,
    recordsBundle: values.records,
    humanReceipt: { present: false },
    gate: values.gate,
    inputBindings: { ...bindings, human: { path: null, bytes: 0, sha256: null } },
  });
  invariant(audit.finalized === true && audit.metrics.complete_terminal_records === 48 && audit.denominator.missing_scheduled.length === 0, "all 48 scheduled terminal records are required");
  invariant(audit.retained_ineligible_slots.length === 6, "all six preregistered ineligible slots are required");
  invariant(audit.proof_failures.length === 0, "every scheduled terminal record must retain exact bound proof");
  const byCell = new Map(values.records.slots.map((record) => [record.cell_id, record]));
  invariant(values.records.slots.length === 54 && byCell.size === 54, "execution bundle must contain exactly 54 unique slots");
  for (const cell of values.matrix.cells) {
    const record = byCell.get(cell.id);
    invariant(record && record.task_id === cell.task_id && record.variant_id === cell.variant_id && record.trial_index === cell.trial_index, `slot identity is not bound: ${cell.id}`);
    if (cell.eligible_for_execution_and_scoring) invariant(TERMINAL.has(record.status), `scheduled slot is not terminal: ${cell.id}`);
    else invariant(record.status === "retained-preregistered-ineligible-unexecuted" && record.provider_calls === 0, `ineligible slot was not retained provider-zero: ${cell.id}`);
  }
  return { ...values, bindings, audit };
}

function screenshotSet(record) {
  invariant(record.status === "completed", `blind candidate ${record.cell_id} is not a completed render`);
  const screens = record.proof?.screenshots;
  invariant(Array.isArray(screens), `blind candidate ${record.cell_id} has no screenshot set`);
  const desktop = screens.find((item) => item.kind === "desktop" && item.publishable === true);
  const mobile = screens.find((item) => item.kind === "mobile" && item.publishable === true);
  invariant(desktop && mobile, `blind candidate ${record.cell_id} lacks publishable desktop/mobile screenshots`);
  const states = {};
  for (const state of record.required_states ?? []) {
    const item = screens.find((screen) => screen.publishable === true && screen.required_states?.includes(state));
    invariant(item, `blind candidate ${record.cell_id} lacks state screenshot ${state}`);
    states[state] = item;
  }
  return { desktop, mobile, states };
}

function copyBoundPng(item, destination, forbidden, label) {
  const source = exactBoundFile(item, label);
  png(source.bytes, label);
  scanReviewerBytes(source.bytes, forbidden, label);
  copyFileSync(source.path, destination, constants.COPYFILE_EXCL);
  const copied = exactBoundFile({ path: destination, bytes: source.bytes.length, sha256: source.sha256 }, `copied ${label}`);
  png(copied.bytes, `copied ${label}`);
  chmodSync(destination, 0o444);
  return { path: `assets/${basename(destination)}`, bytes: copied.bytes.length, sha256: copied.sha256 };
}

export function prepareReview({ matrixPath, preregistrationPath, materializationPath, recordsPath, gatePath = defaultGatePath, packetOut, privateOut }) {
  const args = new Map([
    ["matrix", matrixPath], ["preregistration", preregistrationPath], ["materialization", materializationPath],
    ["records", recordsPath], ["gate", gatePath],
  ]);
  const authority = loadAuthority(args);
  packetOut = resolve(packetOut); privateOut = resolve(privateOut);
  outside(privateOut, packetOut, "--private-out");
  outside(packetOut, privateOut, "--packet-out");
  freshDirectory(packetOut, "packet output");
  freshDirectory(privateOut, "private output");
  mkdirSync(join(packetOut, "assets"), { mode: 0o700 });

  const nonce = randomBytes(32).toString("hex");
  const recordsSha = authority.bindings.records.sha256;
  const packetId = opaque("packet", nonce, recordsSha);
  const records = authority.records.slots;
  const tasks = Object.keys(authority.audit.strongest_eligible_competitor_by_task).sort();
  const publicTasks = [];
  const privateTasks = [];
  const candidatePairs = [];
  const forbidden = new Set([
    ...new Set(authority.matrix.cells.map((cell) => cell.variant_id)),
    ...authority.matrix.cells.flatMap((cell) => [cell.prompt_name, cell.prompt_id, cell.skill_name, cell.model].filter(Boolean)),
    authority.gate.runtime_contract?.model,
    authority.gate.runtime_contract?.provider,
    "Luna Max",
    "oh-my-design",
    "omd-autopilot",
  ].filter((value) => typeof value === "string"));

  for (const [taskIndex, taskId] of tasks.entries()) {
    const strongest = authority.audit.strongest_eligible_competitor_by_task[taskId].variant_id;
    const reviewTaskId = opaque("task", nonce, taskId);
    const omdIsA = Number.parseInt(sha256(`${nonce}\0${taskId}\0order`).slice(0, 2), 16) % 2 === 0;
    const labelToRole = omdIsA ? { A: "omd", B: "competitor" } : { A: "competitor", B: "omd" };
    const roleToArm = { omd: "omd-autopilot-v2", competitor: strongest };
    const options = [];
    for (const label of ["A", "B"]) {
      const role = labelToRole[label];
      const arm = roleToArm[role];
      const trials = [];
      for (const trialIndex of [1, 2, 3]) {
        const record = records.find((item) => item.task_id === taskId && item.variant_id === arm && item.trial_index === trialIndex);
        invariant(record, `candidate trial missing for ${taskId} ${trialIndex}`);
        if (record.status !== "completed") {
          const failure = exactBoundFile(record.failure_artifact, `${record.cell_id} retained failure evidence`);
          trials.push({
            trial: trialIndex,
            outcome: "no_completed_render",
            terminal_status: record.status,
            failure_evidence: { bytes: failure.bytes.length, sha256: failure.sha256 },
          });
          continue;
        }
        const set = screenshotSet(record);
        const copied = new Map();
        const materialize = (item, slot) => {
          const source = exactBoundFile(item, `${record.cell_id} ${slot}`);
          const key = `${source.sha256}:${slot}`;
          if (!copied.has(key)) {
            const name = `${opaque("asset", nonce, reviewTaskId, label, String(trialIndex), slot, source.sha256)}.png`;
            const destination = join(packetOut, "assets", name);
            copied.set(key, copyBoundPng(item, destination, forbidden, `screenshot ${record.cell_id} ${slot}`));
          }
          return copied.get(key);
        };
        trials.push({
          trial: trialIndex,
          outcome: "completed_render",
          screenshots: {
            desktop: materialize(set.desktop, "desktop"),
            mobile: materialize(set.mobile, "mobile"),
            states: Object.fromEntries(Object.entries(set.states).sort().map(([state, item]) => [state, materialize(item, `state-${state}`)])),
          },
        });
      }
      options.push({ label, trials });
    }
    publicTasks.push({ review_task_id: reviewTaskId, ordinal: taskIndex + 1, candidate_pair: ["A", "B"], options });
    privateTasks.push({ review_task_id: reviewTaskId, task_id: taskId, labels: labelToRole, arms: roleToArm });
    candidatePairs.push({ task_id: taskId, omd_variant_id: "omd-autopilot-v2", competitor_variant_id: strongest });
  }

  const packetPath = join(packetOut, "review-packet.json");
  const packetDocument = {
    schema_version: "0.1",
    kind: "blind-ui-comparison-packet",
    packet_id: packetId,
    records_sha256: recordsSha,
    labels_hidden: true,
    order_hidden: true,
    choices: ["A", "B", "tie"],
    required_votes_per_reviewer: 3,
    candidate_pairs: publicTasks.map(({ review_task_id, candidate_pair }) => ({ review_task_id, labels: candidate_pair })),
    tasks: publicTasks,
    calls: { provider: 0, model: 0, browser: 0, network: 0 },
  };
  scanReviewerBytes(Buffer.from(JSON.stringify(packetDocument)), forbidden, "review packet");
  const packetBinding = writeJson(packetPath, packetDocument);
  const submissionTemplate = {
    kind: "blind-ui-comparison-submission",
    packet_sha256: packetBinding.sha256,
    reviewer_id: null,
    practitioner_role: null,
    is_human_practitioner: true,
    synthetic_or_model_generated: false,
    labels_hidden: true,
    order_hidden: true,
    votes: publicTasks.map(({ review_task_id }) => ({ vote_id: null, review_task_id, choice: null, reversal_of_vote_id: null, reversal_inconsistent: false })),
  };
  const attestationTemplate = {
    kind: "external-human-practitioner-attestation",
    attestation_id: null,
    reviewer_id: null,
    practitioner_role: null,
    records_sha256: recordsSha,
    independently_submitted: true,
    synthetic_or_model_generated: false,
  };
  scanReviewerBytes(Buffer.from(JSON.stringify([submissionTemplate, attestationTemplate])), forbidden, "review templates");
  const submissionTemplateBinding = writeJson(join(packetOut, "submission-template.json"), submissionTemplate);
  const attestationTemplateBinding = writeJson(join(packetOut, "attestation-template.json"), attestationTemplate);
  const comparisonPath = join(privateOut, "comparison-manifest.json");
  const comparisonBinding = writeJson(comparisonPath, {
    kind: "omd-luna-max-blind-comparison-manifest",
    records_sha256: recordsSha,
    labels_hidden: true,
    order_hidden: true,
    candidate_pairs: candidatePairs,
    reviewer_packet: packetBinding,
    review_task_mappings: privateTasks,
  }, 0o400);
  const privateMapPath = join(privateOut, "private-map.json");
  const privateMapBinding = writeJson(privateMapPath, {
    schema_version: "0.1",
    kind: "omd-luna-max-blind-review-private-map",
    records_sha256: recordsSha,
    packet: packetBinding,
    comparison_manifest: comparisonBinding,
    tasks: privateTasks,
  }, 0o400);
  chmodSync(join(packetOut, "assets"), 0o555);
  chmodSync(packetOut, 0o555);
  chmodSync(privateOut, 0o500);
  return { packet: packetBinding, submission_template: submissionTemplateBinding, attestation_template: attestationTemplateBinding, private_map: privateMapBinding, comparison_manifest: comparisonBinding, tasks: tasks.length, calls: { provider: 0, model: 0, browser: 0, network: 0 } };
}

function jsonFiles(directory, label) {
  invariant(isAbsolute(directory) && resolve(directory) === directory, `${label} must be an absolute path`);
  invariant(existsSync(directory) && lstatSync(directory).isDirectory() && !lstatSync(directory).isSymbolicLink(), `${label} must be a regular directory`);
  return readdirSync(directory).filter((name) => name.endsWith(".json")).sort().map((name) => join(directory, name));
}

function validatePacketAssets(packet, packetPath) {
  const packetRoot = directory(dirname(packetPath), "review packet directory");
  const assetsRoot = directory(join(packetRoot, "assets"), "review packet assets directory");
  const bound = new Set();
  const validateAsset = (item, label) => {
    invariant(item && typeof item.path === "string" && !isAbsolute(item.path) && item.path.startsWith("assets/") && !item.path.split(/[\\/]/).includes(".."), `${label} path must be packet-relative`);
    const path = resolve(packetRoot, item.path);
    invariant(path.startsWith(`${assetsRoot}${sep}`) && dirname(path) === assetsRoot, `${label} escapes the packet assets directory`);
    const exact = exactBoundFile({ path, bytes: item.bytes, sha256: item.sha256 }, label);
    png(exact.bytes, label);
    bound.add(basename(path));
  };
  for (const task of packet.tasks ?? []) for (const option of task.options ?? []) for (const trial of option.trials ?? []) {
    if (trial.outcome === "no_completed_render") {
      invariant(new Set(["failed", "timeout", "infrastructure-invalid"]).has(trial.terminal_status)
        && Number.isInteger(trial.failure_evidence?.bytes) && trial.failure_evidence.bytes >= 0
        && /^[a-f0-9]{64}$/.test(trial.failure_evidence?.sha256 ?? "")
        && trial.screenshots === undefined, "no_completed_render trial evidence invalid");
      continue;
    }
    invariant(trial.outcome === "completed_render" && trial.screenshots, "trial must retain either completed_render or no_completed_render evidence");
    validateAsset(trial.screenshots.desktop, "desktop screenshot");
    validateAsset(trial.screenshots.mobile, "mobile screenshot");
    for (const [state, item] of Object.entries(trial.screenshots.states ?? {})) validateAsset(item, `state screenshot ${state}`);
  }
  const actual = readdirSync(assetsRoot).sort();
  invariant(actual.length === bound.size && actual.every((name) => bound.has(name)), "packet assets contain missing, foreign, or unbound files");
}

function ensureOutputParent(path) {
  const parent = dirname(path);
  if (!existsSync(parent)) {
    directory(dirname(parent), "receipt output grandparent");
    mkdirSync(parent, { recursive: false, mode: 0o700 });
  }
  directory(parent, "receipt output parent");
}

export function finalizeReview({ packetPath, privateMapPath, privateMapSha256, submissionsDirectory, attestationsDirectory, outPath }) {
  packetPath = resolve(packetPath); privateMapPath = resolve(privateMapPath); outPath = resolve(outPath);
  invariant(!existsSync(outPath), "receipt output already exists; finalization is immutable");
  regular(privateMapPath, "private map");
  invariant(/^[a-f0-9]{64}$/.test(privateMapSha256 ?? "") && binding(privateMapPath).sha256 === privateMapSha256, "private map hash binding mismatch");
  const packet = readJson(packetPath, "review packet");
  const privateMap = readJson(privateMapPath, "private map");
  invariant(packet.kind === "blind-ui-comparison-packet" && packet.labels_hidden === true && packet.order_hidden === true && packet.required_votes_per_reviewer === 3, "review packet contract invalid");
  validatePacketAssets(packet, packetPath);
  invariant(privateMap.kind === "omd-luna-max-blind-review-private-map" && privateMap.records_sha256 === packet.records_sha256, "private map contract invalid");
  const exactPacket = exactBoundFile(privateMap.packet, "private-map packet");
  invariant(exactPacket.path === packetPath, "private map is bound to a different packet path");
  const comparison = exactBoundFile(privateMap.comparison_manifest, "private comparison manifest");
  const comparisonDocument = JSON.parse(comparison.bytes.toString("utf8"));
  invariant(comparisonDocument.records_sha256 === packet.records_sha256 && comparisonDocument.reviewer_packet?.sha256 === privateMap.packet.sha256 && comparisonDocument.reviewer_packet?.path === packetPath && JSON.stringify(comparisonDocument.review_task_mappings) === JSON.stringify(privateMap.tasks), "comparison manifest packet/order mapping invalid");
  const taskMap = new Map(privateMap.tasks.map((task) => [task.review_task_id, task]));
  invariant(taskMap.size === 3 && packet.tasks.length === 3 && packet.tasks.every((task) => taskMap.has(task.review_task_id)), "exactly three bound tasks are required");

  const attestationFiles = jsonFiles(resolve(attestationsDirectory), "attestations directory");
  const attestations = attestationFiles.map((path) => ({ path, value: readJson(path, `attestation ${basename(path)}`), binding: binding(path) }));
  const attestationByReviewer = new Map();
  for (const item of attestations) {
    const a = item.value;
    invariant(a.kind === "external-human-practitioner-attestation" && typeof a.attestation_id === "string" && a.attestation_id.trim() && typeof a.reviewer_id === "string" && a.reviewer_id.trim(), "attestation identity invalid");
    invariant(typeof a.practitioner_role === "string" && a.practitioner_role.trim() && a.records_sha256 === packet.records_sha256 && a.independently_submitted === true && a.synthetic_or_model_generated === false, `attestation is not an independent external-human attestation: ${a.reviewer_id}`);
    invariant(!attestationByReviewer.has(a.reviewer_id), `duplicate attestation reviewer: ${a.reviewer_id}`);
    attestationByReviewer.set(a.reviewer_id, item);
  }
  invariant(attestations.length >= 5 && new Set(attestations.map((item) => item.value.attestation_id)).size === attestations.length && new Set(attestations.map((item) => item.binding.sha256)).size === attestations.length, "at least five distinct external practitioner attestations are required");

  const submissions = jsonFiles(resolve(submissionsDirectory), "submissions directory").map((path) => readJson(path, `submission ${basename(path)}`));
  invariant(submissions.length === attestations.length, "every attested practitioner must submit exactly one review");
  const reviewers = [];
  const votes = [];
  const seenReviewers = new Set();
  const seenVoteIds = new Set();
  for (const submission of submissions) {
    invariant(submission.kind === "blind-ui-comparison-submission" && submission.packet_sha256 === privateMap.packet.sha256 && submission.labels_hidden === true && submission.order_hidden === true, "submission packet/protocol binding invalid");
    invariant(submission.is_human_practitioner === true && submission.synthetic_or_model_generated === false && typeof submission.reviewer_id === "string" && submission.reviewer_id.trim(), "submission is not an external human practitioner review");
    invariant(!seenReviewers.has(submission.reviewer_id), `duplicate reviewer submission: ${submission.reviewer_id}`);
    seenReviewers.add(submission.reviewer_id);
    const attestation = attestationByReviewer.get(submission.reviewer_id);
    invariant(attestation && attestation.value.practitioner_role === submission.practitioner_role, `submission has no matching independent attestation: ${submission.reviewer_id}`);
    invariant(Array.isArray(submission.votes) && submission.votes.length === 3, `reviewer ${submission.reviewer_id} must submit exactly three task votes`);
    const seenTasks = new Set();
    for (const vote of submission.votes) {
      invariant(typeof vote.vote_id === "string" && vote.vote_id.trim() && !seenVoteIds.has(vote.vote_id), "vote IDs must be present and globally unique");
      seenVoteIds.add(vote.vote_id);
      invariant(taskMap.has(vote.review_task_id) && !seenTasks.has(vote.review_task_id), `duplicate or foreign task vote from ${submission.reviewer_id}`);
      seenTasks.add(vote.review_task_id);
      invariant(LABELS.has(vote.choice), `foreign choice from ${submission.reviewer_id}; only A, B, or tie is allowed`);
      invariant((vote.reversal_of_vote_id ?? null) === null && vote.reversal_inconsistent === false, `reversal inconsistency from ${submission.reviewer_id}`);
      const task = taskMap.get(vote.review_task_id);
      const shipChoice = vote.choice === "tie" ? "tie" : task.labels[vote.choice];
      invariant(shipChoice === "omd" || shipChoice === "competitor" || shipChoice === "tie", "private A/B mapping invalid");
      votes.push({ vote_id: vote.vote_id, reviewer_id: submission.reviewer_id, task_id: task.task_id, ship_choice: shipChoice, labels_hidden: true, order_hidden: true, reversal_of_vote_id: null, reversal_inconsistent: false });
    }
    invariant(seenTasks.size === taskMap.size, `reviewer ${submission.reviewer_id} has incomplete task coverage`);
    reviewers.push({ reviewer_id: submission.reviewer_id, is_human_practitioner: true, practitioner_role: submission.practitioner_role, attestation_evidence: attestation.binding });
  }
  invariant(seenReviewers.size >= 5 && seenReviewers.size === attestationByReviewer.size, "at least five distinct, fully attested reviewers are required");
  ensureOutputParent(outPath);
  const receipt = {
    kind: "omd-luna-max-blind-human-receipt",
    records_sha256: packet.records_sha256,
    comparison_manifest: { path: comparison.path, bytes: comparison.bytes.length, sha256: comparison.sha256 },
    labels_hidden: true,
    order_hidden: true,
    synthetic_or_model_reviewers: false,
    reviewers: reviewers.sort((a, b) => a.reviewer_id.localeCompare(b.reviewer_id)),
    votes: votes.sort((a, b) => a.reviewer_id.localeCompare(b.reviewer_id) || a.task_id.localeCompare(b.task_id)),
  };
  const receiptBinding = writeJson(outPath, receipt);
  return { receipt: receiptBinding, reviewers: reviewers.length, votes: votes.length, calls: { provider: 0, model: 0, browser: 0, network: 0 } };
}

export function main(argv = process.argv.slice(2)) {
  const [command, ...rest] = argv;
  const args = parseArgs(rest);
  if (command === "prepare") {
    requireArgs(args, ["matrix", "preregistration", "materialization", "records", "gate", "packet-out", "private-out"]);
    return prepareReview({
      matrixPath: resolve(args.get("matrix")), preregistrationPath: resolve(args.get("preregistration")),
      materializationPath: resolve(args.get("materialization")), recordsPath: resolve(args.get("records")),
      gatePath: resolve(args.get("gate")), packetOut: resolve(args.get("packet-out")), privateOut: resolve(args.get("private-out")),
    });
  }
  if (command === "finalize") {
    requireArgs(args, ["packet", "private-map", "private-map-sha256", "submissions", "attestations", "out"]);
    return finalizeReview({ packetPath: resolve(args.get("packet")), privateMapPath: resolve(args.get("private-map")), privateMapSha256: args.get("private-map-sha256"), submissionsDirectory: resolve(args.get("submissions")), attestationsDirectory: resolve(args.get("attestations")), outPath: resolve(args.get("out")) });
  }
  fail("usage: prepare-luna-max-blind-review.mjs prepare --matrix <file> --preregistration <file> --materialization <file> --records <file> --gate <exact-gate> --packet-out <fresh-dir> --private-out <fresh-dir> | finalize --packet <review-packet.json> --private-map <private-map.json> --private-map-sha256 <sha256> --submissions <dir> --attestations <dir> --out <fresh-receipt.json>");
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  try { process.stdout.write(`${JSON.stringify(main())}\n`); }
  catch (error) { process.stderr.write(`${error.message}\n`); process.exitCode = 1; }
}
