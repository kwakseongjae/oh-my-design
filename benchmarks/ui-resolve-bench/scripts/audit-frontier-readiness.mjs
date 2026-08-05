#!/usr/bin/env node
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ALLOWED_STATUSES = new Set(["open", "partial", "external", "pass"]);
const EXPECTED_GATE_IDS = [
  "verified-skill-lift",
  "three-model-positive-lift",
  "harness-pareto",
  "hidden-task-coverage",
  "verified-scale-artifacts",
  "practitioner-blind-review",
  "independent-task-audit",
  "activation-and-seven-day-reuse",
  "routing-ownership-reverify",
];

function assertNonEmptyString(value, label) {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${label} must be a non-empty string`);
}

export function evaluateFrontierReadiness(manifest, repoRoot) {
  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    throw new Error("frontier readiness manifest must be an object");
  }
  if (manifest.target_version !== "2.0.0") throw new Error("target_version must remain 2.0.0");
  if (manifest.required_gate_count !== EXPECTED_GATE_IDS.length) {
    throw new Error(`required_gate_count must remain ${EXPECTED_GATE_IDS.length}`);
  }
  if (!Array.isArray(manifest.gates) || manifest.gates.length !== EXPECTED_GATE_IDS.length) {
    throw new Error(`frontier readiness must contain exactly ${EXPECTED_GATE_IDS.length} gates`);
  }

  const ids = manifest.gates.map((gate) => gate?.id);
  if (new Set(ids).size !== ids.length || EXPECTED_GATE_IDS.some((id) => !ids.includes(id))) {
    throw new Error("frontier readiness gate IDs must match the normative nine-gate contract");
  }

  const root = resolve(repoRoot);
  const gates = manifest.gates.map((gate) => {
    if (!ALLOWED_STATUSES.has(gate.status)) throw new Error(`invalid gate status for ${gate.id}: ${gate.status}`);
    assertNonEmptyString(gate.requirement, `${gate.id}.requirement`);
    assertNonEmptyString(gate.current_boundary, `${gate.id}.current_boundary`);
    if (!Array.isArray(gate.evidence_refs) || !gate.evidence_refs.length) {
      throw new Error(`${gate.id}.evidence_refs must not be empty`);
    }
    const evidence = gate.evidence_refs.map((reference) => {
      assertNonEmptyString(reference, `${gate.id}.evidence_ref`);
      if (isAbsolute(reference) || reference.split(/[\\/]/).includes("..")) {
        throw new Error(`${gate.id} evidence must be repository-relative: ${reference}`);
      }
      const path = resolve(root, reference);
      if (path !== root && !path.startsWith(`${root}${sep}`)) {
        throw new Error(`${gate.id} evidence escapes repository: ${reference}`);
      }
      return { reference, exists: existsSync(path) };
    });
    if (evidence.some((item) => !item.exists)) {
      throw new Error(`${gate.id} has missing evidence: ${evidence.filter((item) => !item.exists).map((item) => item.reference).join(", ")}`);
    }
    return { id: gate.id, status: gate.status, evidence };
  });

  const counts = Object.fromEntries([...ALLOWED_STATUSES].map((status) => [status, gates.filter((gate) => gate.status === status).length]));
  const promotionAllowed = counts.pass === EXPECTED_GATE_IDS.length;
  return {
    schema_version: "0.1",
    target_version: manifest.target_version,
    snapshot_patch: manifest.snapshot_patch,
    required_gate_count: EXPECTED_GATE_IDS.length,
    counts,
    promotion_allowed: promotionAllowed,
    decision: promotionAllowed ? "READY_FOR_USER_RELEASE_DECISION" : "BLOCK_2_0_PROMOTION",
    unresolved_gate_ids: gates.filter((gate) => gate.status !== "pass").map((gate) => gate.id),
    external_gate_ids: gates.filter((gate) => gate.status === "external").map((gate) => gate.id),
    evidence_refs_checked: gates.reduce((sum, gate) => sum + gate.evidence.length, 0),
    gates,
  };
}

function parseArgs(argv) {
  const args = new Map();
  for (let index = 0; index < argv.length; index += 2) {
    const key = argv[index];
    const value = argv[index + 1];
    if (!key?.startsWith("--") || value === undefined) throw new Error("arguments must be --key value pairs");
    args.set(key.slice(2), value);
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const defaultRepoRoot = resolve(scriptDir, "../../..");
  const repoRoot = resolve(args.get("repo-root") ?? defaultRepoRoot);
  const manifestPath = resolve(args.get("manifest") ?? resolve(repoRoot, "benchmarks/ui-resolve-bench/frontier-readiness.json"));
  const report = evaluateFrontierReadiness(JSON.parse(readFileSync(manifestPath, "utf8")), repoRoot);
  const rendered = `${JSON.stringify(report, null, 2)}\n`;
  if (args.get("out")) writeFileSync(resolve(args.get("out")), rendered);
  process.stdout.write(rendered);
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) await main();
