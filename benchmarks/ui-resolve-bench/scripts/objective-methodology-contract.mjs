import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

export const OBJECTIVE_SCORE_SCHEMA_VERSION = "0.6";
export const OBJECTIVE_METHODOLOGY_EPOCH = "ui-resolve-objective-2026q3-passive-scroll-v1";

function sourceSha256(relativeUrl) {
  return createHash("sha256")
    .update(readFileSync(fileURLToPath(new URL(relativeUrl, import.meta.url))))
    .digest("hex");
}

export function currentObjectiveMethodology() {
  return {
    score_schema_version: OBJECTIVE_SCORE_SCHEMA_VERSION,
    epoch: OBJECTIVE_METHODOLOGY_EPOCH,
    evaluator_source_sha256: sourceSha256("./evaluate-run.mjs"),
    contract_source_sha256: sourceSha256("./objective-methodology-contract.mjs"),
  };
}

export function assertObjectiveMethodologyPin(value, label = "objective_evaluator") {
  const expected = currentObjectiveMethodology();
  if (!value || typeof value !== "object") {
    throw new Error(`objective-methodology-drift:${label}:missing`);
  }
  if (value.score_schema_version !== expected.score_schema_version) {
    throw new Error(
      `objective-methodology-drift:${label}:score-schema:${value.score_schema_version ?? "missing"}:${expected.score_schema_version}`,
    );
  }
  if (value.epoch !== expected.epoch) {
    throw new Error(
      `objective-methodology-drift:${label}:epoch:${value.epoch ?? "missing"}:${expected.epoch}`,
    );
  }
  for (const field of ["evaluator_source_sha256", "contract_source_sha256"]) {
    if (value[field] !== expected[field]) {
      throw new Error(
        `objective-methodology-drift:${label}:${field}:${value[field] ?? "missing"}:${expected[field]}`,
      );
    }
  }
  return value;
}
