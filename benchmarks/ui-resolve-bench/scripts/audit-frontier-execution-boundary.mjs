#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { evaluateFrontierReadiness } from "./audit-frontier-readiness.mjs";

const NON_LOCAL_ACTIONS = new Set([
  "remote-model-execution",
  "remote-multi-model-execution",
  "private-storage-and-audit",
  "external-practitioner-panel",
  "external-independent-audit",
  "production-observation",
]);

export function auditFrontierExecutionBoundary(boundary, readinessManifest, repoRoot) {
  if (boundary?.local_only_mode !== true) throw new Error("frontier boundary must describe current local-only mode");
  const readiness = evaluateFrontierReadiness(readinessManifest, repoRoot);
  const unresolved = new Set(readiness.unresolved_gate_ids);
  if (!Array.isArray(boundary.gates) || boundary.gates.length !== unresolved.size) {
    throw new Error("execution boundary must map every unresolved frontier gate exactly once");
  }
  const ids = boundary.gates.map((gate) => gate?.id);
  if (new Set(ids).size !== ids.length || ids.some((id) => !unresolved.has(id))) {
    throw new Error("execution boundary IDs must equal unresolved frontier gate IDs");
  }
  const gates = boundary.gates.map((gate) => {
    if (!NON_LOCAL_ACTIONS.has(gate.next_action_class)) throw new Error(`${gate.id} has unsupported or local next action`);
    if (!["partial", "complete"].includes(gate.local_preparation)) throw new Error(`${gate.id} has invalid local preparation state`);
    if (typeof gate.required_input !== "string" || !gate.required_input.trim()) throw new Error(`${gate.id} required_input is missing`);
    return gate;
  });
  const byClass = Object.fromEntries([...NON_LOCAL_ACTIONS].map((actionClass) => [
    actionClass,
    gates.filter((gate) => gate.next_action_class === actionClass).map((gate) => gate.id),
  ]).filter(([, gateIds]) => gateIds.length));
  const locallyClosable = gates.filter((gate) => gate.next_action_class === "local-implementation").map((gate) => gate.id);
  return {
    schema_version: "0.1",
    snapshot_patch: boundary.snapshot_patch,
    readiness_decision: readiness.decision,
    unresolved_gate_count: unresolved.size,
    locally_closable_gate_ids: locallyClosable,
    non_local_action_classes: byClass,
    local_preparation_counts: {
      complete: gates.filter((gate) => gate.local_preparation === "complete").length,
      partial: gates.filter((gate) => gate.local_preparation === "partial").length,
    },
    hard_pause_required: unresolved.size > 0 && locallyClosable.length === 0,
    decision: unresolved.size > 0 && locallyClosable.length === 0
      ? "PAUSE_LOCAL_PATCH_TRAIN_FOR_NON_LOCAL_EVIDENCE"
      : "CONTINUE_LOCAL_GATE_WORK",
    gates,
  };
}

function parseArgs(argv) {
  const args = new Map();
  for (let index = 0; index < argv.length; index += 2) {
    if (!argv[index]?.startsWith("--") || argv[index + 1] === undefined) throw new Error("arguments must be --key value pairs");
    args.set(argv[index].slice(2), argv[index + 1]);
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const repoRoot = resolve(args.get("repo-root") ?? resolve(scriptDir, "../../.."));
  const boundary = JSON.parse(readFileSync(resolve(args.get("boundary") ?? resolve(repoRoot, "benchmarks/ui-resolve-bench/frontier-execution-boundary.json")), "utf8"));
  const readiness = JSON.parse(readFileSync(resolve(args.get("readiness") ?? resolve(repoRoot, "benchmarks/ui-resolve-bench/frontier-readiness.json")), "utf8"));
  const report = auditFrontierExecutionBoundary(boundary, readiness, repoRoot);
  const rendered = `${JSON.stringify(report, null, 2)}\n`;
  if (args.get("out")) writeFileSync(resolve(args.get("out")), rendered);
  process.stdout.write(rendered);
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) await main();
