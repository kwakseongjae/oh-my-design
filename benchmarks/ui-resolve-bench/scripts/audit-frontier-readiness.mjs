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
const EXPECTED_PASS_EVIDENCE = {
  "verified-skill-lift": ["benchmarks/ui-resolve-bench/reports/field-sample-browser-fallback-transfer-1.9.691/SUMMARY.final.json", "/frontier_gate_pass", true],
  "three-model-positive-lift": ["benchmarks/ui-resolve-bench/reports/three-model-transfer-1.9.6/SUMMARY.final.json", "/benchmark_status", "Verified"],
  "harness-pareto": ["benchmarks/ui-resolve-bench/reports/harness-efficiency-replacement-1.9.22/SUMMARY.final.json", "/frontier_gate_pass", true],
  "hidden-task-coverage": ["benchmarks/ui-resolve-bench/reports/hidden-task-coverage-audit-1.9.682/COVERAGE.json", "/gate_pass", true],
  "verified-scale-artifacts": ["benchmarks/ui-resolve-bench/reports/downloadable-verified-package-boundary-1.9.684/BOUNDARY.json", "/gate_pass", true],
  "practitioner-blind-review": ["benchmarks/ui-resolve-bench/reports/reviewer-operations-package-1.9.77/SUMMARY.final.json", "/frontier_gate_pass", true],
  "independent-task-audit": ["benchmarks/ui-resolve-bench/reports/task-contract-mutation-audit-1.9.685/AUDIT.json", "/gate_pass", true],
  "activation-and-seven-day-reuse": ["benchmarks/ui-resolve-bench/reports/time-compressed-activation-reuse-1.9.672/ACCEPTANCE.json", "/frontier_gate_pass", true],
  "routing-ownership-reverify": ["benchmarks/ui-resolve-bench/reports/local-activation-funnel-1.9.673/ACCEPTANCE.json", "/frontier_gate_pass", true],
};

function assertNonEmptyString(value, label) {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${label} must be a non-empty string`);
}

function requireObject(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error(`${label} must be an object`);
  return value;
}

function resolveArtifactWithinRepo(root, reference, label) {
  if (isAbsolute(reference) || reference.split(/[\\/]/).includes("..")) {
    throw new Error(`${label} must be repository-relative`);
  }
  const path = resolve(root, reference);
  if (path !== root && !path.startsWith(`${root}${sep}`)) throw new Error(`${label} escapes repository`);
  if (!existsSync(path)) throw new Error(`${label} is missing: ${reference}`);
  return path;
}

function readJsonPointer(value, pointer) {
  if (pointer === "") return value;
  if (typeof pointer !== "string" || !pointer.startsWith("/")) throw new Error("pass_evidence.pointer must be a JSON pointer");
  return pointer.slice(1).split("/").reduce((current, segment) => {
    if (current === undefined || current === null) return undefined;
    const key = segment.replace(/~1/g, "/").replace(/~0/g, "~");
    return current[key];
  }, value);
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
    const passEvidence = requireObject(gate.pass_evidence, `${gate.id}.pass_evidence`);
    assertNonEmptyString(passEvidence.ref, `${gate.id}.pass_evidence.ref`);
    const [expectedRef, expectedPointer, expectedValue] = EXPECTED_PASS_EVIDENCE[gate.id];
    if (passEvidence.ref !== expectedRef || passEvidence.pointer !== expectedPointer ||
      JSON.stringify(passEvidence.equals) !== JSON.stringify(expectedValue)) {
      throw new Error(`${gate.id} pass_evidence contract drift`);
    }
    const passEvidencePath = resolveArtifactWithinRepo(root, passEvidence.ref, `${gate.id}.pass_evidence.ref`);
    const passEvidenceDocument = JSON.parse(readFileSync(passEvidencePath, "utf8"));
    const observed = readJsonPointer(passEvidenceDocument, passEvidence.pointer);
    const normalizedObserved = observed === undefined ? null : observed;
    const ready = JSON.stringify(normalizedObserved) === JSON.stringify(passEvidence.equals);
    if (gate.status === "pass" && !ready) {
      throw new Error(`${gate.id} cannot be pass: machine evidence does not satisfy ${passEvidence.pointer}`);
    }
    return {
      id: gate.id,
      status: gate.status,
      evidence,
      pass_evidence: {
        ref: passEvidence.ref,
        pointer: passEvidence.pointer,
        expected: passEvidence.equals,
        observed: normalizedObserved,
        ready,
      },
    };
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
