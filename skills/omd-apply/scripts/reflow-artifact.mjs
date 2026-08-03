#!/usr/bin/env node
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const OUTCOMES = new Set(["pass", "unresolved"]);
const INVARIANTS = [
  "same_row_count",
  "same_decision_boundary",
  "all_registered_carriers_closed",
  "no_text_hack",
];
const CHARACTER_RANGE_ORACLE = "character-range-line-tops";
const COMPOUND_ATOMIC_SEPARATOR = /\s(?:\+|→|←|↔)\s/u;
const LINE_CONTRACTS = new Set(["single-token", "parent-one-line"]);
const REQUIRED_MEASUREMENT_CONDITIONS = [
  { id: "390", viewport_width: 390, zoom: 1 },
  { id: "320", viewport_width: 320, zoom: 1 },
  { id: "200pct", viewport_width: 640, zoom: 2 },
];

function fail(message) {
  throw new Error(`reflow artifact: ${message}`);
}

function uniqueStrings(value, label) {
  if (
    !Array.isArray(value)
    || value.length === 0
    || value.some((item) => typeof item !== "string" || item.length === 0)
    || new Set(value).size !== value.length
  ) fail(`${label} must be unique non-empty strings`);
  return value;
}

function positiveInteger(value, label) {
  if (!Number.isInteger(value) || value < 1) fail(`${label} must be a positive integer`);
  return value;
}

function validateMeasurementConditions(value, label, { observed = false } = {}) {
  if (!Array.isArray(value) || value.length !== REQUIRED_MEASUREMENT_CONDITIONS.length) {
    fail(`${label} must contain 390, 320, and actual 200pct conditions`);
  }
  for (const [index, expected] of REQUIRED_MEASUREMENT_CONDITIONS.entries()) {
    const condition = value[index];
    if (
      condition?.id !== expected.id
      || condition?.viewport_width !== expected.viewport_width
      || condition?.zoom !== expected.zoom
    ) {
      fail(`${label}[${index}] must be ${expected.id} at ${expected.viewport_width}px with zoom ${expected.zoom}`);
    }
    if (observed && condition.observed_document_zoom !== expected.zoom) {
      fail(`${label}[${index}] must observe document zoom ${expected.zoom}`);
    }
  }
  return value;
}

function validateAtomicParts(row) {
  const compound = COMPOUND_ATOMIC_SEPARATOR.test(row.longest_value);
  if (!LINE_CONTRACTS.has(row.line_contract)) {
    fail(`row group ${row.id} line_contract must be single-token or parent-one-line`);
  }
  if (row.atomic_parts == null) {
    if (compound) fail(`row group ${row.id} atomic_parts are required for a compound atomic value`);
    if (row.line_contract !== "single-token") fail(`row group ${row.id} single atomic value must use line_contract single-token`);
    return null;
  }
  if (!compound || row.line_contract !== "parent-one-line") {
    fail(`row group ${row.id} compound atomic value must use line_contract parent-one-line`);
  }
  const parts = uniqueStrings(row.atomic_parts, `row group ${row.id} atomic_parts`);
  if (parts.length < 2) fail(`row group ${row.id} atomic_parts must contain at least two values`);
  let cursor = -1;
  for (const part of parts) {
    const index = row.longest_value.indexOf(part, cursor + 1);
    if (index < 0) fail(`row group ${row.id} atomic_parts must appear in longest_value order`);
    cursor = index;
  }
  return parts;
}

export function inventoryDigest(artifact) {
  return createHash("sha256").update(JSON.stringify({
    measurement_conditions: artifact.measurement_conditions,
    carrier_ids: artifact.inventory.carrier_ids,
    carrier_groups: artifact.carriers.map((carrier) => ({
      id: carrier.id,
      selector: carrier.selector,
      expected_count: carrier.expected_count,
      binds_row_groups: carrier.binds_row_groups,
    })),
    row_groups: artifact.row_groups.map((row) => ({
      id: row.id,
      selector: row.selector,
      role: row.role,
      expected_count: row.expected_count,
      longest_value: row.longest_value,
      atomic_parts: row.atomic_parts ?? null,
      line_contract: row.line_contract,
    })),
  })).digest("hex");
}

export function lockArtifact(input) {
  const artifact = structuredClone(input);
  if (artifact.schema_version !== "0.2") fail("schema_version must be 0.2");
  if (!Array.isArray(artifact.carriers) || !artifact.carriers.length) fail("carriers are required");
  if (!Array.isArray(artifact.row_groups) || !artifact.row_groups.length) fail("row_groups are required");
  validateMeasurementConditions(artifact.measurement_conditions, "measurement_conditions");
  const carrierIds = uniqueStrings(artifact.carriers.map((carrier) => carrier?.id), "carrier ids");
  const rowGroupIds = uniqueStrings(artifact.row_groups.map((row) => row?.id), "row group ids");
  const knownRows = new Set(rowGroupIds);
  if (!artifact.invariants || INVARIANTS.some((field) => typeof artifact.invariants[field] !== "boolean")) {
    fail(`invariants must declare booleans for ${INVARIANTS.join(", ")}`);
  }
  for (const carrier of artifact.carriers) {
    if (typeof carrier.selector !== "string" || !carrier.selector) fail(`carrier ${carrier.id} selector is required`);
    positiveInteger(carrier.expected_count, `carrier ${carrier.id} expected_count`);
    uniqueStrings(carrier.binds_row_groups, `carrier ${carrier.id} binds_row_groups`);
    if (carrier.binds_row_groups.some((id) => !knownRows.has(id))) fail(`carrier ${carrier.id} binds an unknown row group`);
    delete carrier.final;
  }
  for (const row of artifact.row_groups) {
    if (typeof row.selector !== "string" || !row.selector) fail(`row group ${row.id} selector is required`);
    if (typeof row.role !== "string" || !row.role) fail(`row group ${row.id} role is required`);
    positiveInteger(row.expected_count, `row group ${row.id} expected_count`);
    if (typeof row.longest_value !== "string" || !row.longest_value) fail(`row group ${row.id} longest_value is required`);
    const atomicParts = validateAtomicParts(row);
    if (atomicParts) row.atomic_parts = atomicParts;
    delete row.final;
  }
  artifact.inventory = {
    state: "locked",
    carrier_ids: carrierIds,
    row_group_ids: rowGroupIds,
    sha256: null,
  };
  artifact.inventory.sha256 = inventoryDigest(artifact);
  artifact.closure = { state: "open" };
  artifact.known_failure_closure = { state: "open", unresolved: null };
  artifact.browser_attempt = {
    attempts: 0,
    outcome: "not-run",
    mechanism: null,
    oracle: CHARACTER_RANGE_ORACLE,
    conditions: [],
  };
  delete artifact.closure_manifest;
  return artifact;
}

function completeOutcome(value, label) {
  if (!value || typeof value !== "object") fail(`${label} final outcome is required`);
  for (const field of ["outcome_390", "outcome_320", "outcome_200pct"]) {
    if (!OUTCOMES.has(value[field])) fail(`${label}.${field} must be pass or unresolved`);
  }
}

export function hostObservedBrowserAttempt(stateDir) {
  if (!stateDir || !existsSync(stateDir)) return null;
  const records = readdirSync(stateDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .flatMap((entry) => {
      try {
        return [JSON.parse(readFileSync(resolve(stateDir, entry.name), "utf8"))];
      } catch {
        return [];
      }
    });
  return records.some((record) => (
    record?.state?.browser_attempts === 1
    && ["closed", "unresolved"].includes(record?.state?.browser_proof)
  ));
}

export function finalizeArtifact(input, { unresolved = false, hostStateDir = null } = {}) {
  const artifact = structuredClone(input);
  const locked = lockArtifact({
    ...artifact,
    carriers: artifact.carriers,
    row_groups: artifact.row_groups,
  });
  if (artifact.inventory?.sha256 !== locked.inventory.sha256) fail("immutable inventory hash changed");
  if (unresolved) {
    for (const carrier of artifact.carriers) {
      carrier.final = { outcome_390: "unresolved", outcome_320: "unresolved", outcome_200pct: "unresolved" };
    }
    for (const row of artifact.row_groups) {
      row.final = { status: "unresolved", outcome_390: "unresolved", outcome_320: "unresolved", outcome_200pct: "unresolved" };
    }
  }
  for (const carrier of artifact.carriers) completeOutcome(carrier.final, `carrier ${carrier.id}`);
  for (const row of artifact.row_groups) {
    completeOutcome(row.final, `row group ${row.id}`);
    if (!OUTCOMES.has(row.final.status)) fail(`row group ${row.id}.status must be pass or unresolved`);
  }
  if (!unresolved && INVARIANTS.some((field) => artifact.invariants[field] !== true)) {
    fail("resolved closure requires every invariant to pass");
  }
  const carrierCount = artifact.carriers.reduce((sum, carrier) => sum + carrier.expected_count, 0);
  const rowCount = artifact.row_groups.reduce((sum, row) => sum + row.expected_count, 0);
  const passedCarrierCount = (field) => artifact.carriers
    .filter((carrier) => carrier.final[field] === "pass")
    .reduce((sum, carrier) => sum + carrier.expected_count, 0);
  const unresolvedCarrierCount = artifact.carriers
    .filter((carrier) => ["outcome_390", "outcome_320", "outcome_200pct"].some((field) => carrier.final[field] !== "pass"))
    .reduce((sum, carrier) => sum + carrier.expected_count, 0);
  const unresolvedRowCount = artifact.row_groups
    .filter((row) => row.final.status !== "pass" || ["outcome_390", "outcome_320", "outcome_200pct"].some((field) => row.final[field] !== "pass"))
    .reduce((sum, row) => sum + row.expected_count, 0);
  if (!unresolved && (unresolvedCarrierCount > 0 || unresolvedRowCount > 0)) {
    fail("resolved closure requires zero unresolved carriers and rows");
  }
  if (unresolved) {
    const attempt = artifact.browser_attempt;
    if (
      attempt?.attempts !== 1
      || attempt?.outcome !== "infrastructure-error"
      || typeof attempt?.mechanism !== "string"
      || !attempt.mechanism
      || attempt?.oracle !== CHARACTER_RANGE_ORACLE
    ) {
      fail("unresolved accounting requires one recorded browser infrastructure attempt");
    }
    if (hostStateDir && hostObservedBrowserAttempt(hostStateDir) !== true) {
      fail("unresolved accounting requires one host-observed browser attempt");
    }
  }
  if (!unresolved) {
    const attempt = artifact.browser_attempt;
    if (
      attempt?.attempts !== 1
      || attempt?.outcome !== "measured"
      || typeof attempt?.mechanism !== "string"
      || !attempt.mechanism
      || attempt?.oracle !== CHARACTER_RANGE_ORACLE
    ) {
      fail("resolved closure requires one measured browser attempt using the character-range line oracle");
    }
    validateMeasurementConditions(attempt.conditions, "browser_attempt.conditions", { observed: true });
    if (hostStateDir && hostObservedBrowserAttempt(hostStateDir) !== true) {
      fail("resolved closure requires one host-observed browser attempt");
    }
  }
  const qualityPass = unresolvedCarrierCount === 0 && unresolvedRowCount === 0;
  artifact.closure = { state: qualityPass ? "closed" : "unresolved" };
  artifact.known_failure_closure = {
    state: qualityPass ? "closed" : "unresolved",
    unresolved: unresolvedCarrierCount + unresolvedRowCount,
  };
  artifact.closure_manifest = {
    registered_carrier_groups: artifact.carriers.length,
    registered_carriers: carrierCount,
    registered_row_groups: artifact.row_groups.length,
    registered_rows: rowCount,
    measured_390: passedCarrierCount("outcome_390"),
    measured_320: passedCarrierCount("outcome_320"),
    measured_200pct: passedCarrierCount("outcome_200pct"),
    unresolved_carriers: unresolvedCarrierCount,
    unresolved_rows: unresolvedRowCount,
    quality_pass: qualityPass,
    browser_attempt: artifact.browser_attempt,
    inventory_sha256: artifact.inventory.sha256,
  };
  return artifact;
}

export function deliveryMarker(artifact) {
  return artifact.closure?.state === "closed" ? "OMD_DELIVERY_READY" : "OMD_DELIVERY_UNRESOLVED";
}

function write(path, artifact) {
  writeFileSync(path, `${JSON.stringify(artifact, null, 2)}\n`, "utf8");
}

function main() {
  const [command, rawPath] = process.argv.slice(2);
  if (!command || !rawPath || !["lock", "finalize", "finalize-unresolved"].includes(command)) {
    console.error("usage: reflow-artifact.mjs <lock|finalize|finalize-unresolved> <artifact.json>");
    process.exitCode = 2;
    return;
  }
  const path = resolve(rawPath);
  const artifact = JSON.parse(readFileSync(path, "utf8"));
  const defaultHostStateDir = resolve(process.cwd(), ".omd/proof-policy");
  const hostStateDir = process.env.OMD_PROOF_POLICY_STATE_DIR
    ? resolve(process.env.OMD_PROOF_POLICY_STATE_DIR)
    : existsSync(defaultHostStateDir)
      ? defaultHostStateDir
      : null;
  const result = command === "lock"
    ? lockArtifact(artifact)
    : finalizeArtifact(artifact, {
      unresolved: command === "finalize-unresolved",
      hostStateDir,
    });
  write(path, result);
  console.log(JSON.stringify({
    command,
    path,
    schema_version: result.schema_version,
    inventory_sha256: result.inventory.sha256,
    carrier_groups: result.carriers.length,
    row_groups: result.row_groups.length,
    registered_carriers: result.closure_manifest?.registered_carriers ?? null,
    registered_rows: result.closure_manifest?.registered_rows ?? null,
    closure: result.closure.state,
    quality_pass: result.closure_manifest?.quality_pass ?? null,
    unresolved_known_failures: result.known_failure_closure?.unresolved ?? null,
  }));
  if (command !== "lock") console.log(deliveryMarker(result));
}

if (
  process.argv[1]
  && realpathSync(resolve(process.argv[1])) === realpathSync(fileURLToPath(import.meta.url))
) main();
