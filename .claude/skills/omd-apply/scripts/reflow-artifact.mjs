#!/usr/bin/env node
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, readdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, normalize, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { Script } from "node:vm";

const OUTCOMES = new Set(["pass", "unresolved"]);
const INVARIANTS = [
  "same_row_count",
  "same_decision_boundary",
  "all_registered_carriers_closed",
  "no_text_hack",
];
const CHARACTER_RANGE_ORACLE = "character-range-line-tops";
const PRE_EDIT_SNAPSHOT_SOURCE = "deterministic-pre-edit-snapshot";
const COMPOUND_ATOMIC_SEPARATOR = /\s(?:\+|→|←|↔)\s/u;
const LINE_CONTRACTS = new Set(["single-token", "parent-one-line"]);
const FIT_STRATEGIES = new Set(["full-row", "stack", "relocate", "comparison-scroll", "keep", "unresolved"]);
const REQUIRED_POST_EDIT_COMMANDS = ["consolidated-static-closure", "browser-harness-terminal"];
const NAMED_CONSUMER_MECHANISM = "browser-harness named consumer CDP attachment";
const REQUIRED_FIT_RESERVE_CSS_PX = 8;
const PLANNED_FIT_RESERVE_CSS_PX = 16;
const ACCEPTANCE_DEBT_PROOF_MODES = new Set(["static-fail-close", "browser-row"]);
const PRE_EDIT_FIT_PLAN_ORACLE = "intrinsic-nowrap-text-width";
const REQUIRED_MEASUREMENT_CONDITIONS = [
  { id: "390", viewport_width: 390, zoom: 1 },
  { id: "320", viewport_width: 320, zoom: 1 },
  { id: "200pct", viewport_width: 640, zoom: 2 },
];
const SOURCE_CONTRACT_SCHEMA_VERSIONS = new Set(["0.1", "0.2"]);
const STATIC_PREVIEW_GUARD_VERSION = "locked-typography-inline-script-syntax-v2";
const STATIC_PREVIEW_GUARD_SCOPE = "locked-typography-direct-declarations+classic-inline-script-syntax";
const INLINE_SCRIPT_SYNTAX_CONTRACT = Object.freeze({
  version: "classic-inline-node-vm-v1",
  compiler: "node:vm.Script",
  execution: "compile-only-never-run",
  compiled: "inline scripts without src whose type is absent, empty, or a JavaScript MIME essence",
  skipped: "scripts with src, type=module, or a non-JavaScript data-block type",
  malformed_markup: "fail-closed",
});
const JAVASCRIPT_MIME_ESSENCES = new Set([
  "application/ecmascript",
  "application/javascript",
  "application/x-ecmascript",
  "application/x-javascript",
  "text/ecmascript",
  "text/javascript",
  "text/javascript1.0",
  "text/javascript1.1",
  "text/javascript1.2",
  "text/javascript1.3",
  "text/javascript1.4",
  "text/javascript1.5",
  "text/jscript",
  "text/livescript",
  "text/x-ecmascript",
  "text/x-javascript",
]);
const LOCKED_TYPOGRAPHY_PROPERTIES = new Set([
  "font",
  "font-size",
  "font-weight",
  "line-height",
]);

function fail(message) {
  throw new Error(`reflow artifact: ${message}`);
}

function sha256Source(source) {
  return createHash("sha256").update(source).digest("hex");
}

function uniqueObjects(values) {
  const seen = new Set();
  return values.filter((value) => {
    const key = JSON.stringify(value);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sourceContractArtifact(contract, source) {
  if (!SOURCE_CONTRACT_SCHEMA_VERSIONS.has(contract?.schema_version)) {
    fail("source contract schema_version must be 0.1 or 0.2");
  }
  if (contract.structured_css_only !== true) {
    fail("source contract must require structured_css_only");
  }
  if (typeof contract.product_path !== "string" || !contract.product_path) {
    fail("source contract product_path is required");
  }
  if (!Array.isArray(contract.acceptance_debt_ledger) || !contract.acceptance_debt_ledger.length) {
    fail("source contract acceptance_debt_ledger is required");
  }
  const debtCss = contract.acceptance_debt_ledger.flatMap((debt) => (
    debt?.static_guardrail?.required_css_declarations ?? []
  ));
  if (!debtCss.length) {
    fail("source contract must bind acceptance debt to required_css_declarations");
  }
  let containmentCss = [];
  if (contract.schema_version === "0.2") {
    if (typeof contract.baseline_evidence?.path !== "string" ||
      !/^[a-f0-9]{64}$/.test(contract.baseline_evidence?.sha256 ?? "")) {
      fail("source contract 0.2 requires hashed baseline_evidence");
    }
    const debtIds = new Set(contract.acceptance_debt_ledger.map((debt) => debt?.id));
    if (debtIds.has(undefined) || debtIds.size !== contract.acceptance_debt_ledger.length) {
      fail("source contract 0.2 requires unique acceptance debt ids");
    }
    if (!Array.isArray(contract.critical_gate_debt_coverage) || !contract.critical_gate_debt_coverage.length) {
      fail("source contract 0.2 requires critical_gate_debt_coverage");
    }
    const coveredGates = new Set();
    for (const coverage of contract.critical_gate_debt_coverage) {
      if (typeof coverage?.gate !== "string" || !coverage.gate || coveredGates.has(coverage.gate) ||
        !Array.isArray(coverage.debt_ids) || !coverage.debt_ids.length ||
        coverage.debt_ids.some((id) => !debtIds.has(id))) {
        fail("source contract 0.2 critical gate debt coverage is invalid");
      }
      coveredGates.add(coverage.gate);
    }
    containmentCss = contract.row_groups
      .filter((row) => row?.decision === "comparison-scroll")
      .map((row) => {
        const carriers = contract.carriers.filter((carrier) => carrier?.binds_row_groups?.includes(row.id));
        if (carriers.length !== 1) {
          fail(`source contract 0.2 comparison-scroll row requires exactly one carrier: ${row.id}`);
        }
        const containment = carriers[0].containment_guardrail;
        if (typeof containment?.selector !== "string" || !containment.selector ||
          containment.property !== "min-width" || containment.value !== "0" ||
          containment.value_contract !== "exact-value") {
          fail("source contract 0.2 comparison-scroll containment must require exact min-width: 0");
        }
        return containment;
      });
  }
  const artifact = {
    schema_version: "0.3",
    source_contract: {
      state: "provider-sealed",
      schema_version: contract.schema_version,
      sha256: sha256Source(JSON.stringify(contract)),
      baseline_evidence_sha256: contract.baseline_evidence?.sha256 ?? null,
      covered_critical_gates: contract.critical_gate_debt_coverage
        ?.map((entry) => entry.gate)
        .sort() ?? null,
    },
    browser_connection_contract: {
      transport: "existing-cdp",
      connection_name_env: "BU_NAME",
      cdp_url_env: "BU_CDP_URL",
      allow_browser_launch: false,
      mechanism: NAMED_CONSUMER_MECHANISM,
    },
    measurement_conditions: structuredClone(REQUIRED_MEASUREMENT_CONDITIONS),
    acceptance_sequence: {
      source_inspection_complete: true,
      product_edit_transaction: "single-planned-transaction",
      post_edit_commands: structuredClone(REQUIRED_POST_EDIT_COMMANDS),
    },
    pre_edit_fit_plan: { state: "pending" },
    pre_edit_product_snapshot: productSnapshot(source, contract.product_path),
    acceptance_debt_ledger: structuredClone(contract.acceptance_debt_ledger),
    static_closure_manifest: {
      product_path: contract.product_path,
      required_literals: structuredClone(contract.required_literals ?? []),
      required_css_declarations: uniqueObjects([
        ...(contract.required_css_declarations ?? []),
        ...debtCss,
        ...containmentCss,
      ]),
      forbidden_literals: structuredClone(contract.forbidden_literals ?? []),
      forbidden_patterns: structuredClone(contract.forbidden_patterns ?? []),
      forbidden_css_declarations: uniqueObjects([
        ...(contract.forbidden_css_declarations ?? []),
        ...contract.acceptance_debt_ledger.flatMap((debt) => (
          debt?.static_guardrail?.forbidden_css_declarations ?? []
        )),
      ]),
      count_literals: structuredClone(contract.count_literals ?? []),
    },
    carriers: structuredClone(contract.carriers),
    row_groups: structuredClone(contract.row_groups),
    invariants: structuredClone(contract.invariants),
  };
  return artifact;
}

export function sealSourceContract(contract, { source }) {
  if (typeof source !== "string") fail("source contract product source is required");
  const artifact = sourceContractArtifact(contract, source);
  const opened = openSourceFallback(artifact);
  return opened;
}

function assertPreEditProductUnchanged(artifact) {
  const snapshot = validatePreEditProductSnapshot(
    artifact.pre_edit_product_snapshot,
    artifact.static_closure_manifest,
  );
  if (snapshot == null) {
    fail("source fallback requires a helper-captured pre-edit product snapshot");
  }
  const productPath = resolve(artifact.static_closure_manifest?.product_path ?? "");
  if (!existsSync(productPath)) fail("plan closure requires the locked pre-edit product file");
  const observedSha256 = sha256Source(readFileSync(productPath, "utf8"));
  if (observedSha256 !== snapshot.sha256) {
    fail("product source changed before successful plan closure; discard this run without editing further");
  }
  return snapshot;
}

function closePlan(artifact, command) {
  const snapshot = assertPreEditProductUnchanged(artifact);
  const result = lockArtifact(artifact);
  result.plan_closure = {
    state: "closed",
    command,
    pre_edit_product_sha256: snapshot.sha256,
    measured_fit_plan_sha256: createHash("sha256")
      .update(JSON.stringify(result.pre_edit_fit_plan))
      .digest("hex"),
  };
  return result;
}

function validatePlanClosure(artifact) {
  const closure = artifact.plan_closure;
  const measuredPlanClosed = (
    closure?.state !== "closed"
    || !["lock", "plan-close", "plan-reconcile"].includes(closure.command)
    || closure.pre_edit_product_sha256 !== artifact.pre_edit_product_snapshot?.sha256
    || closure.measured_fit_plan_sha256 !== createHash("sha256")
      .update(JSON.stringify(artifact.pre_edit_fit_plan))
      .digest("hex")
  ) === false;
  const fallback = artifact.source_fallback_closure;
  const relationshipContractSha256 = sha256Source(JSON.stringify(
    artifact.source_fallback_relationships ?? [],
  ));
  const sourceFallbackOpened = (
    artifact.pre_edit_fit_plan?.state === "pending"
    && fallback?.state === "opened"
    && fallback.command === "source-fallback-open"
    && fallback.pre_edit_product_sha256 === artifact.pre_edit_product_snapshot?.sha256
    && fallback.inventory_sha256 === artifact.inventory?.sha256
    && fallback.relationship_contract_sha256 === relationshipContractSha256
  );
  if (!measuredPlanClosed && !sourceFallbackOpened) {
    fail("static closure requires a helper-issued measured plan closure or source fallback opening");
  }
  return measuredPlanClosed ? closure : fallback;
}

function sourceFallbackRelationships(artifact) {
  const rows = artifact.row_groups.filter((row) => ["target", "evidence"].includes(row.role));
  const roles = rows.map((row) => row.role);
  if (new Set(roles).size !== roles.length) {
    fail("source fallback permits at most one target row and one concise evidence row");
  }
  const relationships = rows.map((row) => {
    const carriers = artifact.carriers.filter((carrier) => carrier.binds_row_groups.includes(row.id));
    if (
      row.decision !== "comparison-scroll"
      || carriers.length !== 1
      || carriers[0].binds_row_groups.length !== 1
      || carriers[0].selector === row.selector
      || row.scroll_contract?.container_selector !== carriers[0].selector
      || typeof row.scroll_contract?.accessible_name !== "string"
      || !row.scroll_contract.accessible_name.trim()
      || row.scroll_contract.keyboard_reachable !== true
      || row.scroll_contract.focus_visible !== true
      || row.scroll_contract.passive_text_scroll_container !== false
    ) {
      fail(`source fallback ${row.role} row requires one distinct named comparison-scroll carrier bound only to that row`);
    }
    return {
      role: row.role,
      row_id: row.id,
      row_selector: row.selector,
      row_expected_count: row.expected_count,
      carrier_id: carriers[0].id,
      carrier_selector: carriers[0].selector,
      marker_attribute: `data-omd-source-fallback-carrier=\"${row.role}\"`,
      marker_selector: `[data-omd-source-fallback-carrier=\"${row.role}\"]`,
      accessible_name: row.scroll_contract.accessible_name.trim(),
      excluded_roles: ["target", "evidence", "state", "action"].filter((role) => role !== row.role),
    };
  });
  if (new Set(relationships.map((entry) => entry.carrier_selector)).size !== relationships.length) {
    fail("source fallback target and evidence must use distinct relationship carriers");
  }
  return relationships;
}

function openSourceFallback(artifact) {
  assertPreEditProductUnchanged(artifact);
  if (artifact.pre_edit_fit_plan?.state !== "pending") {
    fail("source fallback opens only after an unmeasured pending fit plan");
  }
  const result = lockArtifact(artifact, { allowPendingFitPlan: true });
  result.source_fallback_relationships = sourceFallbackRelationships(result);
  result.source_fallback_closure = {
    state: "opened",
    command: "source-fallback-open",
    pre_edit_product_sha256: result.pre_edit_product_snapshot.sha256,
    inventory_sha256: result.inventory.sha256,
    relationship_contract_sha256: sha256Source(JSON.stringify(result.source_fallback_relationships)),
  };
  const patchContract = staticEditGuardrails(result).source_fallback_patch_contract;
  const canonicalSources = [
    patchContract?.canonical_css_source,
    patchContract?.canonical_acceptance_css_source,
  ].filter(Boolean).join("\n");
  for (const literal of result.static_closure_manifest.forbidden_literals) {
    if (canonicalSources.includes(literal)) {
      fail(`source contract forbids its own canonical fallback literal: ${literal}`);
    }
  }
  for (const pattern of result.static_closure_manifest.forbidden_patterns) {
    if (new RegExp(pattern, "u").test(canonicalSources)) {
      fail(`source contract forbids its own canonical fallback CSS: ${pattern}`);
    }
  }
  return result;
}

function uniqueStrings(value, label, { allowEmpty = false } = {}) {
  if (
    !Array.isArray(value)
    || (!allowEmpty && value.length === 0)
    || value.some((item) => typeof item !== "string" || item.length === 0)
    || new Set(value).size !== value.length
  ) fail(`${label} must be unique non-empty strings`);
  return value;
}

function positiveInteger(value, label) {
  if (!Number.isInteger(value) || value < 1) fail(`${label} must be a positive integer`);
  return value;
}

function validateMeasurementConditions(value, label, { observed = false, allowOverflow = false } = {}) {
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
    if (observed) {
      for (const pair of [["document_scroll_width", "document_client_width"], ["body_scroll_width", "body_client_width"]]) {
        const [scrollField, clientField] = pair;
        if (!Number.isFinite(condition[scrollField]) || !Number.isFinite(condition[clientField])) {
          fail(`${label}[${index}] must record ${scrollField} and ${clientField}`);
        }
        if (!allowOverflow && condition[scrollField] > condition[clientField]) {
          fail(`${label}[${index}] has consumer document overflow`);
        }
      }
    }
  }
  return value;
}

function validateBrowserConnectionContract(value) {
  if (
    value?.transport !== "existing-cdp"
    || value?.connection_name_env !== "BU_NAME"
    || value?.cdp_url_env !== "BU_CDP_URL"
    || value?.allow_browser_launch !== false
    || value?.mechanism !== NAMED_CONSUMER_MECHANISM
  ) fail("browser_connection_contract must require the named existing consumer CDP connection and forbid browser launch");
  return value;
}

function validateTypographyContract(row, preEditProductSnapshot) {
  const value = row.typography_contract;
  if (value?.source === PRE_EDIT_SNAPSHOT_SOURCE) {
    if (!preEditProductSnapshot) {
      fail(`row group ${row.id} deterministic typography requires a pre-edit product snapshot`);
    }
    return value;
  }
  if (
    !Number.isFinite(value?.font_size_px)
    || value.font_size_px <= 0
    || !Number.isFinite(value?.line_height_px)
    || value.line_height_px <= 0
    || !(typeof value?.font_weight === "string" || Number.isFinite(value?.font_weight))
  ) fail(`row group ${row.id} typography_contract must lock pre-edit font size, line height, and weight`);
  return value;
}

function preEditSelectorAnchors(selector) {
  const positiveSelector = selector.replace(/:not\([^)]*\)/gu, "");
  const anchors = [];
  for (const match of positiveSelector.matchAll(/\.([_a-zA-Z][\w-]*)/gu)) {
    anchors.push({ type: "class", name: match[1], value: null });
  }
  for (const match of positiveSelector.matchAll(/#([_a-zA-Z][\w-]*)/gu)) {
    anchors.push({ type: "id", name: match[1], value: null });
  }
  for (const match of positiveSelector.matchAll(/\[([^\]\s~|^$*!=]+)(?:\s*[~|^$*]?=\s*["']?([^"'\]\s]+)["']?)?\]/gu)) {
    anchors.push({ type: "attribute", name: match[1], value: match[2] ?? null });
  }
  return anchors;
}

function preEditSourceFacts(snapshot) {
  const source = Buffer.from(snapshot.source_base64, "base64").toString("utf8");
  const classes = new Set();
  const ids = new Set();
  const attributes = new Map();
  for (const match of source.matchAll(/\b([A-Za-z_:][\w:.-]*)\s*=\s*(["'])(.*?)\2/gsu)) {
    const [, name, , value] = match;
    if (!attributes.has(name)) attributes.set(name, new Set());
    attributes.get(name).add(value);
    if (name === "class") for (const token of value.split(/\s+/u).filter(Boolean)) classes.add(token);
    if (name === "id") ids.add(value);
  }
  return { classes, ids, attributes };
}

function validatePreEditSelector(entry, snapshot, label = `row group ${entry.id}`) {
  const anchors = preEditSelectorAnchors(entry.selector);
  if (!anchors.length) {
    fail(`${label} selector must use a stable pre-edit class, id, or attribute anchor`);
  }
  const facts = preEditSourceFacts(snapshot);
  const missing = anchors.filter((anchor) => {
    if (anchor.type === "class") return !facts.classes.has(anchor.name);
    if (anchor.type === "id") return !facts.ids.has(anchor.name);
    if (!facts.attributes.has(anchor.name)) return true;
    return anchor.value !== null && !facts.attributes.get(anchor.name).has(anchor.value);
  });
  if (missing.length) {
    const labels = missing.map((anchor) => anchor.value == null
      ? `${anchor.type}:${anchor.name}`
      : `${anchor.type}:${anchor.name}=${anchor.value}`);
    fail(`${label} selector is unresolved in the pre-edit snapshot (${labels.join(", ")})`);
  }
}

function productSnapshot(source, productPath) {
  return {
    product_path: productPath,
    sha256: createHash("sha256").update(source).digest("hex"),
    source_base64: Buffer.from(source, "utf8").toString("base64"),
  };
}

function validatePreEditProductSnapshot(value, manifest) {
  if (value == null) return null;
  if (
    typeof value !== "object"
    || value.product_path !== manifest.product_path
    || typeof value.sha256 !== "string"
    || !/^[a-f0-9]{64}$/u.test(value.sha256)
    || typeof value.source_base64 !== "string"
    || !value.source_base64
  ) fail("pre_edit_product_snapshot must bind the locked product path, source, and sha256");
  let source;
  try {
    source = Buffer.from(value.source_base64, "base64").toString("utf8");
  } catch {
    fail("pre_edit_product_snapshot source_base64 is invalid");
  }
  if (createHash("sha256").update(source).digest("hex") !== value.sha256) {
    fail("pre_edit_product_snapshot sha256 does not match its source");
  }
  return value;
}

function validateProtectedDecisionTargetInventory(snapshot, rows, carriers) {
  if (snapshot == null) return;
  const source = Buffer.from(snapshot.source_base64, "base64").toString("utf8");
  const protectedTargetCount = [...source.matchAll(/\bdata-bench-decision-role\s*=\s*(["'])target\1/gu)].length;
  if (protectedTargetCount === 0) return;

  const targetRows = rows.filter((row) => row.role === "target");
  if (targetRows.length !== 1) {
    fail("protected decision target requires exactly one target row group");
  }
  const targetRow = targetRows[0];
  const hasProtectedTargetAnchor = preEditSelectorAnchors(targetRow.selector).some((anchor) => (
    anchor.type === "attribute"
    && anchor.name === "data-bench-decision-role"
    && anchor.value === "target"
  ));
  if (!hasProtectedTargetAnchor || targetRow.expected_count !== protectedTargetCount) {
    fail("protected decision target row must match the pre-edit protected target hook and count");
  }

  const targetCarriers = carriers.filter((carrier) => carrier.binds_row_groups.includes(targetRow.id));
  if (
    targetCarriers.length !== 1
    || targetCarriers[0].binds_row_groups.length !== 1
    || targetCarriers[0].selector === targetRow.selector
  ) {
    fail("protected decision target requires one distinct target-only carrier before plan-close");
  }
}

function validateProtectedDecisionEvidenceInventory(snapshot, rows) {
  if (snapshot == null) return;
  const source = Buffer.from(snapshot.source_base64, "base64").toString("utf8");
  const protectedEvidenceCount = [...source.matchAll(/\bdata-bench-decision-role\s*=\s*(["'])evidence\1/gu)].length;
  if (protectedEvidenceCount === 0) return;

  const evidenceRows = rows.filter((row) => {
    if (row.role !== "evidence") return false;
    return preEditSelectorAnchors(row.selector).some((anchor) => (
      anchor.type === "attribute"
      && anchor.name === "data-bench-decision-role"
      && anchor.value === "evidence"
    ));
  });
  if (evidenceRows.length !== 1 || evidenceRows[0].expected_count !== protectedEvidenceCount) {
    fail("protected concise decision evidence requires one evidence row group with exact pre-edit cardinality");
  }
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

function validateAcceptanceSequence(value) {
  if (
    value?.source_inspection_complete !== true
    || value?.product_edit_transaction !== "single-planned-transaction"
    || !Array.isArray(value?.post_edit_commands)
    || value.post_edit_commands.length !== REQUIRED_POST_EDIT_COMMANDS.length
    || value.post_edit_commands.some((command, index) => command !== REQUIRED_POST_EDIT_COMMANDS[index])
  ) {
    fail("acceptance_sequence must close source inspection before one planned product edit and allow only static closure then terminal browser proof");
  }
  return value;
}

function relativeProductPath(value, label) {
  if (typeof value !== "string" || !value || isAbsolute(value)) fail(`${label} must be a relative product path`);
  const normalized = normalize(value);
  if (normalized === ".." || normalized.startsWith(`..${sep}`)) fail(`${label} must stay inside the product workspace`);
  return normalized;
}

function stringList(value, label, { allowEmpty = false } = {}) {
  if (
    !Array.isArray(value)
    || (!allowEmpty && value.length === 0)
    || value.some((item) => typeof item !== "string" || item.length === 0)
    || new Set(value).size !== value.length
  ) fail(`${label} must be ${allowEmpty ? "" : "non-empty "}unique strings`);
  return value;
}

const FORBIDDEN_CSS_VALUE_CONTRACTS = new Set(["positive-length", "any-declaration"]);
const REQUIRED_CSS_VALUE_CONTRACTS = new Set(["exact-value", "any-value"]);

function validateRequiredCssDeclarations(value, label) {
  if (!Array.isArray(value)) fail(`${label} must be an array`);
  const seen = new Set();
  for (const entry of value) {
    if (typeof entry?.selector !== "string" || !entry.selector.trim()) fail(`${label} selector is required`);
    if (typeof entry?.property !== "string" || !/^[a-z-]+$/u.test(entry.property)) fail(`${label} property is required`);
    if (typeof entry?.value !== "string" || !entry.value.trim()) fail(`${label} recommended value is required`);
    if (!REQUIRED_CSS_VALUE_CONTRACTS.has(entry.value_contract)) {
      fail(`${label} value_contract must be exact-value or any-value`);
    }
    entry.selector = entry.selector.trim().replace(/\s+/gu, " ");
    entry.property = entry.property.toLowerCase();
    entry.value = entry.value.trim();
    const key = `${entry.selector}\u0000${entry.property}`;
    if (seen.has(key)) fail(`${label} selector/property pairs must be unique`);
    seen.add(key);
  }
  return value;
}

function validateForbiddenCssDeclarations(value, label) {
  if (!Array.isArray(value)) fail(`${label} must be an array`);
  const seen = new Set();
  for (const entry of value) {
    if (typeof entry?.selector !== "string" || !entry.selector.trim()) fail(`${label} selector is required`);
    if (typeof entry?.property !== "string" || !/^[a-z-]+$/u.test(entry.property)) fail(`${label} property is required`);
    if (!FORBIDDEN_CSS_VALUE_CONTRACTS.has(entry.value_contract)) {
      fail(`${label} value_contract must be positive-length or any-declaration`);
    }
    entry.selector = entry.selector.trim().replace(/\s+/gu, " ");
    entry.property = entry.property.toLowerCase();
    const key = `${entry.selector}\u0000${entry.property}\u0000${entry.value_contract}`;
    if (seen.has(key)) fail(`${label} entries must be unique`);
    seen.add(key);
  }
  return value;
}

function validateStaticClosureManifest(value) {
  if (!value || typeof value !== "object") fail("static_closure_manifest is required");
  value.product_path = relativeProductPath(value.product_path, "static_closure_manifest.product_path");
  value.required_literals = stringList(value.required_literals, "static_closure_manifest.required_literals");
  value.required_css_declarations = validateRequiredCssDeclarations(
    value.required_css_declarations ?? [],
    "static_closure_manifest.required_css_declarations",
  );
  value.forbidden_literals = stringList(value.forbidden_literals ?? [], "static_closure_manifest.forbidden_literals", { allowEmpty: true });
  value.forbidden_patterns = stringList(value.forbidden_patterns ?? [], "static_closure_manifest.forbidden_patterns", { allowEmpty: true });
  value.forbidden_css_declarations = validateForbiddenCssDeclarations(
    value.forbidden_css_declarations ?? [],
    "static_closure_manifest.forbidden_css_declarations",
  );
  for (const pattern of value.forbidden_patterns) {
    try {
      new RegExp(pattern, "u");
    } catch {
      fail(`static_closure_manifest forbidden pattern is invalid: ${pattern}`);
    }
  }
  if (!Array.isArray(value.count_literals) || value.count_literals.length === 0) {
    fail("static_closure_manifest.count_literals must be non-empty");
  }
  const seen = new Set();
  for (const entry of value.count_literals) {
    if (typeof entry?.literal !== "string" || !entry.literal) fail("static_closure_manifest count literal is required");
    if (seen.has(entry.literal)) fail("static_closure_manifest count literals must be unique");
    seen.add(entry.literal);
    positiveInteger(entry.expected_count, `static_closure_manifest count ${entry.literal}`);
  }
  return value;
}

function manifestContainsAll(manifest, field, values, label) {
  const known = new Set(manifest[field]);
  for (const value of values) {
    if (!known.has(value)) fail(`${label} must also appear in static_closure_manifest.${field}`);
  }
}

function manifestContainsAllObjects(manifest, field, values, label) {
  const known = new Set(manifest[field].map((value) => JSON.stringify(value)));
  for (const value of values) {
    if (!known.has(JSON.stringify(value))) fail(`${label} must also appear in static_closure_manifest.${field}`);
  }
}

function validateAcceptanceDebtLedger(value, manifest, knownRows) {
  if (!Array.isArray(value) || value.length === 0) {
    fail("acceptance_debt_ledger must enumerate every supplied or measured baseline failure");
  }
  uniqueStrings(value.map((entry) => entry?.id), "acceptance debt ids");
  for (const debt of value) {
    if (typeof debt.gate !== "string" || !debt.gate) fail(`acceptance debt ${debt.id} gate is required`);
    if (typeof debt.selector !== "string" || !debt.selector) fail(`acceptance debt ${debt.id} selector is required`);
    if (typeof debt.baseline_evidence !== "string" || !debt.baseline_evidence) {
      fail(`acceptance debt ${debt.id} baseline_evidence is required`);
    }
    if (typeof debt.required_correction !== "string" || !debt.required_correction) {
      fail(`acceptance debt ${debt.id} required_correction is required`);
    }
    if (typeof debt.required_outcome !== "string" || !debt.required_outcome) {
      fail(`acceptance debt ${debt.id} required_outcome is required`);
    }
    if (debt.status !== "must-fix-before-static-close") {
      fail(`acceptance debt ${debt.id} status must be must-fix-before-static-close`);
    }
    if (!ACCEPTANCE_DEBT_PROOF_MODES.has(debt.proof_mode)) {
      fail(`acceptance debt ${debt.id} proof_mode must be static-fail-close or browser-row`);
    }
    const boundRows = stringList(
      debt.bound_row_group_ids ?? [],
      `acceptance debt ${debt.id} bound_row_group_ids`,
      { allowEmpty: true },
    );
    if (boundRows.some((id) => !knownRows.has(id))) {
      fail(`acceptance debt ${debt.id} binds an unknown row group`);
    }
    if (debt.proof_mode === "browser-row" && boundRows.length === 0) {
      fail(`acceptance debt ${debt.id} browser-row proof requires a bound row group`);
    }
    if (debt.proof_mode === "static-fail-close" && boundRows.length !== 0) {
      fail(`acceptance debt ${debt.id} static-fail-close proof cannot bind row groups`);
    }
    const guardrail = debt.static_guardrail;
    if (!guardrail || typeof guardrail !== "object") {
      fail(`acceptance debt ${debt.id} static_guardrail is required`);
    }
    guardrail.required_literals = stringList(
      guardrail.required_literals ?? [],
      `acceptance debt ${debt.id} static_guardrail.required_literals`,
      { allowEmpty: true },
    );
    guardrail.required_css_declarations = validateRequiredCssDeclarations(
      guardrail.required_css_declarations ?? [],
      `acceptance debt ${debt.id} static_guardrail.required_css_declarations`,
    );
    guardrail.forbidden_literals = stringList(
      guardrail.forbidden_literals ?? [],
      `acceptance debt ${debt.id} static_guardrail.forbidden_literals`,
      { allowEmpty: true },
    );
    guardrail.forbidden_patterns = stringList(
      guardrail.forbidden_patterns ?? [],
      `acceptance debt ${debt.id} static_guardrail.forbidden_patterns`,
      { allowEmpty: true },
    );
    guardrail.forbidden_css_declarations = validateForbiddenCssDeclarations(
      guardrail.forbidden_css_declarations ?? [],
      `acceptance debt ${debt.id} static_guardrail.forbidden_css_declarations`,
    );
    if (
      guardrail.required_literals.length
      + guardrail.required_css_declarations.length
      + guardrail.forbidden_literals.length
      + guardrail.forbidden_patterns.length
      + guardrail.forbidden_css_declarations.length === 0
    ) fail(`acceptance debt ${debt.id} static_guardrail must contain at least one assertion`);
    manifestContainsAll(manifest, "required_literals", guardrail.required_literals, `acceptance debt ${debt.id} required literals`);
    manifestContainsAllObjects(
      manifest,
      "required_css_declarations",
      guardrail.required_css_declarations,
      `acceptance debt ${debt.id} required CSS declarations`,
    );
    manifestContainsAll(manifest, "forbidden_literals", guardrail.forbidden_literals, `acceptance debt ${debt.id} forbidden literals`);
    manifestContainsAll(manifest, "forbidden_patterns", guardrail.forbidden_patterns, `acceptance debt ${debt.id} forbidden patterns`);
    manifestContainsAllObjects(
      manifest,
      "forbidden_css_declarations",
      guardrail.forbidden_css_declarations,
      `acceptance debt ${debt.id} forbidden CSS declarations`,
    );
    debt.bound_row_group_ids = boundRows;
    delete debt.final;
  }
  return value;
}

function validatePreEditFitPlan(value, rows, carriers, { allowPending = false } = {}) {
  if (allowPending && value?.state === "pending") return { state: "pending" };
  if (
    value?.state !== "measured"
    || value.attempts !== 1
    || value.mechanism !== NAMED_CONSUMER_MECHANISM
    || value.oracle !== PRE_EDIT_FIT_PLAN_ORACLE
    || value.connection?.transport !== "existing-cdp"
    || typeof value.connection?.connection_name !== "string"
    || !value.connection.connection_name
    || value.connection.attached_existing !== true
    || value.connection.launched_browser !== false
  ) fail("pre_edit_fit_plan must be one measured intrinsic-width attempt on the named existing consumer browser");
  validateMeasurementConditions(value.conditions, "pre_edit_fit_plan.conditions", { observed: true, allowOverflow: true });
  if (!Array.isArray(value.rows) || value.rows.length !== rows.length) {
    fail("pre_edit_fit_plan.rows must cover every row group exactly once");
  }
  uniqueStrings(value.rows.map((row) => row?.id), "pre-edit fit-plan row ids");
  const plans = new Map(value.rows.map((row) => [row.id, row]));
  for (const row of rows) {
    const plan = plans.get(row.id);
    if (!plan) fail(`pre_edit_fit_plan is missing row group ${row.id}`);
    if (!Array.isArray(plan.measurements) || plan.measurements.length !== REQUIRED_MEASUREMENT_CONDITIONS.length) {
      fail(`pre_edit_fit_plan row ${row.id} must cover every condition`);
    }
    for (const [index, condition] of REQUIRED_MEASUREMENT_CONDITIONS.entries()) {
      const measurement = plan.measurements[index];
      if (measurement?.id !== condition.id) {
        fail(`pre_edit_fit_plan row ${row.id} measurement ${index} must be ${condition.id}`);
      }
      if (
        !Number.isFinite(measurement.intrinsic_text_width_css_px)
        || measurement.intrinsic_text_width_css_px <= 0
        || !Number.isFinite(measurement.required_carrier_inner_width_css_px)
        || Math.abs(
          measurement.required_carrier_inner_width_css_px
          - measurement.intrinsic_text_width_css_px
          - PLANNED_FIT_RESERVE_CSS_PX
        ) >= 0.01
      ) fail(`pre_edit_fit_plan row ${row.id} must bind intrinsic width to the ${PLANNED_FIT_RESERVE_CSS_PX}px planning margin`);
    }
  }
  if (!Array.isArray(value.carriers) || value.carriers.length !== carriers.length) {
    fail("pre_edit_fit_plan.carriers must cover every carrier group exactly once");
  }
  uniqueStrings(value.carriers.map((carrier) => carrier?.id), "pre-edit fit-plan carrier ids");
  const carrierPlans = new Map(value.carriers.map((carrier) => [carrier.id, carrier]));
  for (const carrier of carriers) {
    const plan = carrierPlans.get(carrier.id);
    if (!plan) fail(`pre_edit_fit_plan is missing carrier group ${carrier.id}`);
    const containedCarrierIds = uniqueStrings(
      plan.contained_carrier_ids,
      `pre-edit fit-plan carrier ${carrier.id} contained carrier ids`,
      { allowEmpty: true },
    );
    if (containedCarrierIds.includes(carrier.id) || containedCarrierIds.some((id) => !carrierPlans.has(id))) {
      fail(`pre_edit_fit_plan carrier ${carrier.id} must name only other registered contained carriers`);
    }
    if (!Array.isArray(plan.measurements) || plan.measurements.length !== REQUIRED_MEASUREMENT_CONDITIONS.length) {
      fail(`pre_edit_fit_plan carrier ${carrier.id} must cover every condition`);
    }
    for (const [index, condition] of REQUIRED_MEASUREMENT_CONDITIONS.entries()) {
      const measurement = plan.measurements[index];
      if (measurement?.id !== condition.id) {
        fail(`pre_edit_fit_plan carrier ${carrier.id} measurement ${index} must be ${condition.id}`);
      }
      if (
        !Number.isFinite(measurement.intrinsic_outer_width_css_px)
        || measurement.intrinsic_outer_width_css_px <= 0
        || !Number.isFinite(measurement.horizontal_chrome_css_px)
        || measurement.horizontal_chrome_css_px < 0
        || !Number.isFinite(measurement.inter_item_gap_css_px)
        || measurement.inter_item_gap_css_px < 0
        || !Number.isFinite(measurement.required_outer_width_css_px)
        || Math.abs(
          measurement.required_outer_width_css_px
          - measurement.intrinsic_outer_width_css_px
          - PLANNED_FIT_RESERVE_CSS_PX
        ) >= 0.01
        || !Number.isFinite(measurement.available_document_width_css_px)
        || measurement.available_document_width_css_px <= 0
        || !Number.isFinite(measurement.available_carrier_inner_width_css_px)
        || measurement.available_carrier_inner_width_css_px <= 0
        || measurement.available_carrier_inner_width_css_px > measurement.available_document_width_css_px + 0.01
        || measurement.requires_reflow !== (
          measurement.required_outer_width_css_px > measurement.available_document_width_css_px
        )
      ) fail(`pre_edit_fit_plan carrier ${carrier.id} must bind aggregate outer width, chrome, gap, document width, carrier inner width, and the ${PLANNED_FIT_RESERVE_CSS_PX}px planning margin`);
    }
  }
  const boundCarrierByRow = new Map();
  for (const carrier of carriers) {
    for (const rowId of carrier.binds_row_groups) boundCarrierByRow.set(rowId, carrier.id);
  }
  value.fit_strategy_feasibility = rows.map((row) => {
    const rowPlan = plans.get(row.id);
    const carrierId = boundCarrierByRow.get(row.id);
    const carrierPlan = carrierPlans.get(carrierId);
    if (!carrierPlan) fail(`pre_edit_fit_plan row ${row.id} has no measured aggregate carrier`);
    const conditions = rowPlan.measurements.map((measurement, index) => {
      const available = carrierPlan.measurements[index].available_carrier_inner_width_css_px;
      const requiresComparisonScroll = measurement.required_carrier_inner_width_css_px > available;
      return {
        id: measurement.id,
        required_carrier_inner_width_css_px: measurement.required_carrier_inner_width_css_px,
        available_carrier_inner_width_css_px: available,
        requires_comparison_scroll: requiresComparisonScroll,
      };
    });
    const intrinsicallyCarrierUnfit = conditions.some((condition) => condition.requires_comparison_scroll);
    if (intrinsicallyCarrierUnfit && row.decision !== "comparison-scroll") {
      fail(`row group ${row.id} intrinsically exceeds its bound carrier inner width and must declare comparison-scroll before the product edit`);
    }
    return {
      id: row.id,
      carrier_id: carrierId,
      decision: row.decision,
      intrinsically_carrier_unfit: intrinsicallyCarrierUnfit,
      conditions,
    };
  });
  const carrierBySelector = new Map(carriers.map((carrier) => [carrier.selector, carrier]));
  for (const row of rows.filter((entry) => entry.decision === "comparison-scroll")) {
    const carrier = carrierBySelector.get(row.scroll_contract?.container_selector);
    const contained = carrierPlans.get(carrier?.id)?.contained_carrier_ids ?? [];
    if (contained.length) {
      fail(`comparison-scroll carrier ${carrier.id} must not contain nested registered carriers; bind every protected passive row to the outer relationship carrier`);
    }
  }
  return value;
}

export function diagnosePlanReconcile(artifact) {
  const plan = artifact?.pre_edit_fit_plan;
  if (plan?.state !== "measured" || plan.attempts !== 1) {
    fail("plan reconciliation diagnosis requires one persisted measured fit plan");
  }
  const rows = Array.isArray(artifact.row_groups) ? artifact.row_groups : [];
  const carriers = Array.isArray(artifact.carriers) ? artifact.carriers : [];
  const measuredRows = new Map((plan.rows ?? []).map((row) => [row.id, row]));
  const measuredCarriers = new Map((plan.carriers ?? []).map((carrier) => [carrier.id, carrier]));
  const issues = [];
  const patchRows = [];

  for (const row of rows) {
    const bindings = carriers.filter((carrier) => carrier.binds_row_groups?.includes(row.id));
    if (bindings.length !== 1) {
      issues.push({ code: "row-binding-cardinality", row_id: row.id, carrier_ids: bindings.map((carrier) => carrier.id), message: "each measured row must remain bound to exactly one registered carrier" });
      continue;
    }
    const carrier = bindings[0];
    const rowPlan = measuredRows.get(row.id);
    const carrierPlan = measuredCarriers.get(carrier.id);
    if (!rowPlan || !carrierPlan) {
      issues.push({ code: "measured-id-set-mismatch", row_id: row.id, carrier_id: carrier.id, message: "the persisted measured row/carrier id set cannot be changed during reconciliation" });
      continue;
    }
    const conditions = (rowPlan.measurements ?? []).map((measurement, index) => {
      const available = carrierPlan.measurements?.[index]?.available_carrier_inner_width_css_px;
      return {
        id: measurement.id,
        required_carrier_inner_width_css_px: measurement.required_carrier_inner_width_css_px,
        available_carrier_inner_width_css_px: available,
        requires_comparison_scroll: Number.isFinite(available) && measurement.required_carrier_inner_width_css_px > available,
      };
    });
    if (!conditions.some((condition) => condition.requires_comparison_scroll)) continue;

    const containedCarrierIds = carrierPlan.contained_carrier_ids ?? [];
    const sharedRows = carrier.binds_row_groups.map((id) => rows.find((candidate) => candidate.id === id)).filter(Boolean);
    if (containedCarrierIds.length) {
      issues.push({ code: "nested-registered-carrier", row_id: row.id, carrier_id: carrier.id, contained_carrier_ids: containedCarrierIds, message: "a measured comparison carrier cannot contain another registered carrier without changing the locked measurement graph" });
      continue;
    }
    if (sharedRows.length > 1 && sharedRows.some((candidate) => candidate.role !== "identifier")) {
      issues.push({ code: "shared-non-passive-row", row_id: row.id, carrier_id: carrier.id, shared_row_ids: sharedRows.map((candidate) => candidate.id), message: "a shared comparison carrier may contain only passive identifier rows" });
      continue;
    }
    if (carrier.selector === row.selector) {
      issues.push({ code: "passive-text-is-carrier", row_id: row.id, carrier_id: carrier.id, message: "the protected passive text selector cannot itself become the scroll carrier" });
      continue;
    }
    const contract = row.scroll_contract;
    if (
      row.decision !== "comparison-scroll"
      || contract?.container_selector !== carrier.selector
      || typeof contract?.accessible_name !== "string"
      || !contract.accessible_name
      || contract.keyboard_reachable !== true
      || contract.focus_visible !== true
      || contract.passive_text_scroll_container !== false
    ) {
      patchRows.push({
        row_id: row.id,
        carrier_id: carrier.id,
        decision: "comparison-scroll",
        scroll_contract: {
          container_selector: carrier.selector,
          accessible_name: contract?.accessible_name ?? null,
          keyboard_reachable: true,
          focus_visible: true,
          passive_text_scroll_container: false,
        },
        requires_existing_accessible_name: !(typeof contract?.accessible_name === "string" && contract.accessible_name),
        conditions,
      });
    }
  }

  const status = issues.length ? "irreconcilable" : patchRows.length ? "patch-required" : "ready";
  return {
    schema_version: "0.1",
    status,
    browser_rerun_allowed: false,
    product_edit_allowed: status === "ready",
    measured_row_ids: [...measuredRows.keys()],
    measured_carrier_ids: [...measuredCarriers.keys()],
    issues,
    complete_patch: { row_groups: patchRows },
  };
}

function planDecisionContextSha256(artifact) {
  return sha256Source(JSON.stringify({
    pre_edit_product_snapshot_sha256: artifact.pre_edit_product_snapshot?.sha256 ?? null,
    pre_edit_fit_plan: artifact.pre_edit_fit_plan,
    carriers: artifact.carriers,
    row_groups: artifact.row_groups,
  }));
}

export function createPlanDecisionPacket(artifact) {
  const diagnosis = diagnosePlanReconcile(artifact);
  const requiredAccessibleNames = diagnosis.complete_patch.row_groups
    .filter((row) => row.requires_existing_accessible_name)
    .map((row) => row.row_id);
  return {
    schema_version: "0.1",
    kind: "omd-plan-reconcile-decision",
    verdict: diagnosis.status,
    artifact_guard_sha256: planDecisionContextSha256(artifact),
    diagnosis_sha256: sha256Source(JSON.stringify(diagnosis)),
    browser_rerun_allowed: false,
    product_edit_allowed_before_apply: false,
    action: diagnosis.status === "ready"
      ? "close-measured-plan"
      : diagnosis.status === "patch-required"
        ? "apply-complete-patch-and-close"
        : "discard-run",
    complete_patch: diagnosis.complete_patch,
    issues: diagnosis.issues,
    operator_inputs: {
      accessible_names: Object.fromEntries(requiredAccessibleNames.map((rowId) => [rowId, null])),
    },
  };
}

export function applyPlanDecisionPacket(artifact, packet) {
  if (packet?.schema_version !== "0.1" || packet?.kind !== "omd-plan-reconcile-decision") {
    fail("plan decision packet must use schema 0.1 and kind omd-plan-reconcile-decision");
  }
  if (packet.artifact_guard_sha256 !== planDecisionContextSha256(artifact)) {
    fail("plan decision packet does not match the current measured artifact");
  }
  const diagnosis = diagnosePlanReconcile(artifact);
  if (
    packet.verdict !== diagnosis.status
    || packet.diagnosis_sha256 !== sha256Source(JSON.stringify(diagnosis))
    || JSON.stringify(packet.complete_patch) !== JSON.stringify(diagnosis.complete_patch)
    || JSON.stringify(packet.issues) !== JSON.stringify(diagnosis.issues)
  ) fail("plan decision packet diagnosis or complete patch was modified");
  const expectedAccessibleNameIds = diagnosis.complete_patch.row_groups
    .filter((row) => row.requires_existing_accessible_name)
    .map((row) => row.row_id)
    .sort();
  const operatorInputs = packet.operator_inputs;
  if (
    !operatorInputs
    || typeof operatorInputs !== "object"
    || Array.isArray(operatorInputs)
    || JSON.stringify(Object.keys(operatorInputs).sort()) !== JSON.stringify(["accessible_names"])
    || !operatorInputs.accessible_names
    || typeof operatorInputs.accessible_names !== "object"
    || Array.isArray(operatorInputs.accessible_names)
  ) fail("plan decision packet operator inputs must contain only accessible_names");
  const suppliedAccessibleNameIds = Object.keys(operatorInputs.accessible_names).sort();
  if (JSON.stringify(suppliedAccessibleNameIds) !== JSON.stringify(expectedAccessibleNameIds)) {
    fail(`plan decision packet accessible name rows must exactly match ${JSON.stringify(expectedAccessibleNameIds)}`);
  }
  if (diagnosis.status === "irreconcilable") {
    fail("irreconcilable plan decision packets require discarding the run");
  }
  if (diagnosis.status === "ready") return closePlan(artifact, "plan-reconcile");

  const patched = structuredClone(artifact);
  const rows = new Map(patched.row_groups.map((row) => [row.id, row]));
  for (const patch of diagnosis.complete_patch.row_groups) {
    const row = rows.get(patch.row_id);
    if (!row) fail(`plan decision packet row ${patch.row_id} is missing`);
    const suppliedName = operatorInputs.accessible_names[patch.row_id];
    const accessibleName = patch.scroll_contract.accessible_name ?? suppliedName;
    if (typeof accessibleName !== "string" || !accessibleName.trim()) {
      fail(`plan decision packet requires accessible name for row ${patch.row_id}`);
    }
    row.decision = patch.decision;
    row.scroll_contract = {
      ...patch.scroll_contract,
      accessible_name: accessibleName.trim(),
    };
  }
  const postPatchDiagnosis = diagnosePlanReconcile(patched);
  if (postPatchDiagnosis.status !== "ready") {
    fail(`plan decision packet did not produce one ready measured plan: ${JSON.stringify(postPatchDiagnosis)}`);
  }
  return closePlan(patched, "plan-reconcile");
}

function validateFitStrategy(row) {
  if (!FIT_STRATEGIES.has(row.decision)) {
    fail(`row group ${row.id} decision must be ${[...FIT_STRATEGIES].join(", ")}`);
  }
  if (row.decision !== "comparison-scroll") {
    if (row.scroll_contract != null) fail(`row group ${row.id} scroll_contract is only valid for comparison-scroll`);
    return null;
  }
  const contract = row.scroll_contract;
  if (
    typeof contract?.container_selector !== "string"
    || !contract.container_selector
    || contract.container_selector === row.selector
    || typeof contract?.accessible_name !== "string"
    || !contract.accessible_name
    || contract.keyboard_reachable !== true
    || contract.focus_visible !== true
    || contract.passive_text_scroll_container !== false
  ) {
    fail(`row group ${row.id} comparison-scroll requires a distinct named, keyboard-reachable, focus-visible carrier and forbids passive text scrolling`);
  }
  return contract;
}

export function inventoryDigest(artifact) {
  return createHash("sha256").update(JSON.stringify({
    source_contract: artifact.source_contract ?? null,
    measurement_conditions: artifact.measurement_conditions,
    browser_connection_contract: artifact.browser_connection_contract,
    acceptance_sequence: artifact.acceptance_sequence,
    static_closure_manifest: artifact.static_closure_manifest,
    pre_edit_product_snapshot_sha256: artifact.pre_edit_product_snapshot?.sha256 ?? null,
    acceptance_debt_ledger: artifact.acceptance_debt_ledger,
    pre_edit_fit_plan: artifact.pre_edit_fit_plan,
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
      typography_contract: row.typography_contract,
      required_fit_reserve_css_px: row.required_fit_reserve_css_px,
      planned_fit_reserve_css_px: row.planned_fit_reserve_css_px,
      decision: row.decision,
      scroll_contract: row.scroll_contract ?? null,
    })),
  })).digest("hex");
}

export function lockArtifact(input, { allowPendingFitPlan = false } = {}) {
  const artifact = structuredClone(input);
  if (artifact.schema_version !== "0.3") fail("schema_version must be 0.3");
  if (!Array.isArray(artifact.carriers) || !artifact.carriers.length) fail("carriers are required");
  if (!Array.isArray(artifact.row_groups) || !artifact.row_groups.length) fail("row_groups are required");
  validateMeasurementConditions(artifact.measurement_conditions, "measurement_conditions");
  validateBrowserConnectionContract(artifact.browser_connection_contract);
  validateAcceptanceSequence(artifact.acceptance_sequence);
  validateStaticClosureManifest(artifact.static_closure_manifest);
  artifact.pre_edit_product_snapshot = validatePreEditProductSnapshot(
    artifact.pre_edit_product_snapshot,
    artifact.static_closure_manifest,
  );
  const carrierIds = uniqueStrings(artifact.carriers.map((carrier) => carrier?.id), "carrier ids");
  const rowGroupIds = uniqueStrings(artifact.row_groups.map((row) => row?.id), "row group ids");
  const knownRows = new Set(rowGroupIds);
  if (!artifact.invariants || INVARIANTS.some((field) => typeof artifact.invariants[field] !== "boolean")) {
    fail(`invariants must declare booleans for ${INVARIANTS.join(", ")}`);
  }
  for (const carrier of artifact.carriers) {
    if (typeof carrier.selector !== "string" || !carrier.selector) fail(`carrier ${carrier.id} selector is required`);
    if (artifact.pre_edit_product_snapshot) {
      validatePreEditSelector(carrier, artifact.pre_edit_product_snapshot, `carrier ${carrier.id}`);
    }
    positiveInteger(carrier.expected_count, `carrier ${carrier.id} expected_count`);
    uniqueStrings(carrier.binds_row_groups, `carrier ${carrier.id} binds_row_groups`);
    if (carrier.binds_row_groups.some((id) => !knownRows.has(id))) fail(`carrier ${carrier.id} binds an unknown row group`);
    delete carrier.final;
  }
  const carrierBindings = new Map(rowGroupIds.map((id) => [id, []]));
  for (const carrier of artifact.carriers) {
    for (const rowId of carrier.binds_row_groups) carrierBindings.get(rowId).push(carrier.id);
  }
  for (const [rowId, bindings] of carrierBindings) {
    if (bindings.length !== 1) {
      fail(`row group ${rowId} must bind to exactly one aggregate fit-plan carrier; received ${bindings.length}`);
    }
  }
  for (const row of artifact.row_groups) {
    if (typeof row.selector !== "string" || !row.selector) fail(`row group ${row.id} selector is required`);
    if (typeof row.role !== "string" || !row.role) fail(`row group ${row.id} role is required`);
    positiveInteger(row.expected_count, `row group ${row.id} expected_count`);
    if (typeof row.longest_value !== "string" || !row.longest_value) fail(`row group ${row.id} longest_value is required`);
    const atomicParts = validateAtomicParts(row);
    if (atomicParts) row.atomic_parts = atomicParts;
    validateTypographyContract(row, artifact.pre_edit_product_snapshot);
    if (row.typography_contract.source === PRE_EDIT_SNAPSHOT_SOURCE) {
      validatePreEditSelector(row, artifact.pre_edit_product_snapshot, `row group ${row.id} deterministic typography`);
    }
    if (row.required_fit_reserve_css_px !== REQUIRED_FIT_RESERVE_CSS_PX) {
      fail(`row group ${row.id} required_fit_reserve_css_px must be ${REQUIRED_FIT_RESERVE_CSS_PX}`);
    }
    if (row.planned_fit_reserve_css_px !== PLANNED_FIT_RESERVE_CSS_PX) {
      fail(`row group ${row.id} planned_fit_reserve_css_px must be ${PLANNED_FIT_RESERVE_CSS_PX}`);
    }
    const scrollContract = validateFitStrategy(row);
    if (scrollContract) row.scroll_contract = scrollContract;
    delete row.final;
  }
  validateProtectedDecisionTargetInventory(
    artifact.pre_edit_product_snapshot,
    artifact.row_groups,
    artifact.carriers,
  );
  validateProtectedDecisionEvidenceInventory(
    artifact.pre_edit_product_snapshot,
    artifact.row_groups,
  );
  artifact.acceptance_debt_ledger = validateAcceptanceDebtLedger(
    artifact.acceptance_debt_ledger,
    artifact.static_closure_manifest,
    knownRows,
  );
  artifact.pre_edit_fit_plan = validatePreEditFitPlan(
    artifact.pre_edit_fit_plan,
    artifact.row_groups,
    artifact.carriers,
    { allowPending: allowPendingFitPlan },
  );
  const rowsById = new Map(artifact.row_groups.map((row) => [row.id, row]));
  for (const row of artifact.row_groups.filter((entry) => entry.decision === "comparison-scroll")) {
    const carrier = artifact.carriers.filter((entry) => entry.selector === row.scroll_contract.container_selector);
    if (carrier.length !== 1 || !carrier[0].binds_row_groups.includes(row.id)) {
      fail(`row group ${row.id} comparison-scroll must use its one registered relationship carrier`);
    }
    const sharedRows = carrier[0].binds_row_groups.map((id) => rowsById.get(id));
    if (sharedRows.length > 1 && sharedRows.some((entry) => entry?.role !== "identifier")) {
      fail(`row group ${row.id} shared comparison-scroll carrier may contain only passive identifier rows`);
    }
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
  artifact.static_closure = { state: "open", attempts: 0, failures: [] };
  delete artifact.closure_manifest;
  return artifact;
}

function literalCount(source, literal) {
  let count = 0;
  let cursor = 0;
  while ((cursor = source.indexOf(literal, cursor)) >= 0) {
    count += 1;
    cursor += literal.length;
  }
  return count;
}

function htmlStartTags(source) {
  const tags = [];
  const lowerSource = source.toLowerCase();
  let cursor = 0;
  while ((cursor = source.indexOf("<", cursor)) >= 0) {
    if (source.startsWith("<!--", cursor)) {
      const end = source.indexOf("-->", cursor + 4);
      cursor = end < 0 ? source.length : end + 3;
      continue;
    }
    const next = source[cursor + 1];
    if (!next || next === "/" || next === "!" || next === "?" || !/[A-Za-z]/u.test(next)) {
      cursor += 1;
      continue;
    }
    let end = cursor + 2;
    let quote = null;
    for (; end < source.length; end += 1) {
      const character = source[end];
      if (quote) {
        if (character === quote) quote = null;
      } else if (character === '"' || character === "'") {
        quote = character;
      } else if (character === ">") {
        break;
      }
    }
    if (end >= source.length) break;
    const tag = source.slice(cursor + 1, end);
    tags.push(tag);
    const tagName = tag.match(/^([^\s/>]+)/u)?.[1]?.toLowerCase();
    if (tagName === "script" || tagName === "style") {
      const rawTextEnd = lowerSource.indexOf(`</${tagName}`, end + 1);
      if (rawTextEnd < 0) break;
      cursor = rawTextEnd;
      continue;
    }
    cursor = end + 1;
  }
  return tags;
}

function htmlTagEnd(source, start) {
  let quote = null;
  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (quote) {
      if (character === quote) quote = null;
    } else if (character === '"' || character === "'") {
      quote = character;
    } else if (character === ">") {
      return index;
    }
  }
  return -1;
}

function htmlStartTagAttributes(rawTag) {
  const attributes = new Map();
  const tagName = rawTag.match(/^\s*([^\s/>]+)/u)?.[1] ?? "";
  const attributesSource = rawTag.slice(rawTag.indexOf(tagName) + tagName.length);
  const pattern = /([^\s"'<>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gu;
  for (const match of attributesSource.matchAll(pattern)) {
    attributes.set(match[1].toLowerCase(), match[2] ?? match[3] ?? match[4] ?? "");
  }
  return attributes;
}

function nextScriptBoundary(source, lowerSource, cursor, closing = false) {
  const prefix = closing ? "</script" : "<script";
  let index = cursor;
  while ((index = lowerSource.indexOf(prefix, index)) >= 0) {
    const next = source[index + prefix.length];
    if (next === undefined || /[\s/>]/u.test(next)) return index;
    index += prefix.length;
  }
  return -1;
}

function inlineScriptSources(source) {
  const lowerSource = source.toLowerCase();
  const scripts = [];
  const failures = [];
  let cursor = 0;
  let scriptIndex = 0;
  while (cursor < source.length) {
    const commentStart = source.indexOf("<!--", cursor);
    const scriptStart = nextScriptBoundary(source, lowerSource, cursor);
    if (scriptStart < 0) break;
    if (commentStart >= 0 && commentStart < scriptStart) {
      const commentEnd = source.indexOf("-->", commentStart + 4);
      if (commentEnd < 0) break;
      cursor = commentEnd + 3;
      continue;
    }
    scriptIndex += 1;
    const openingEnd = htmlTagEnd(source, scriptStart + 7);
    if (openingEnd < 0) {
      failures.push(`inline script ${scriptIndex} markup error: unterminated opening tag`);
      break;
    }
    const closingStart = nextScriptBoundary(source, lowerSource, openingEnd + 1, true);
    if (closingStart < 0) {
      failures.push(`inline script ${scriptIndex} markup error: missing closing tag`);
      break;
    }
    const closingEnd = htmlTagEnd(source, closingStart + 8);
    if (closingEnd < 0) {
      failures.push(`inline script ${scriptIndex} markup error: unterminated closing tag`);
      break;
    }
    scripts.push({
      index: scriptIndex,
      attributes: htmlStartTagAttributes(source.slice(scriptStart + 1, openingEnd)),
      source: source.slice(openingEnd + 1, closingStart),
    });
    cursor = closingEnd + 1;
  }
  return { scripts, failures };
}

function inlineScriptSyntaxGuard(source) {
  const extracted = inlineScriptSources(source);
  const failures = [...extracted.failures];
  let compiledClassicInlineCount = 0;
  let skippedExternalCount = 0;
  let skippedModuleCount = 0;
  let skippedNonJavaScriptCount = 0;
  for (const inline of extracted.scripts) {
    if (inline.attributes.has("src")) {
      skippedExternalCount += 1;
      continue;
    }
    const rawType = inline.attributes.get("type")?.trim().toLowerCase() ?? "";
    const typeEssence = rawType.split(";", 1)[0].trim();
    if (typeEssence === "module") {
      skippedModuleCount += 1;
      continue;
    }
    if (typeEssence && !JAVASCRIPT_MIME_ESSENCES.has(typeEssence)) {
      skippedNonJavaScriptCount += 1;
      continue;
    }
    compiledClassicInlineCount += 1;
    try {
      new Script(inline.source, {
        filename: `omd-inline-script-${inline.index}.js`,
        displayErrors: false,
      });
    } catch (error) {
      const name = error instanceof Error ? error.name : "Error";
      const message = error instanceof Error ? error.message.split("\n", 1)[0] : String(error);
      failures.push(`inline classic script ${inline.index} syntax error: ${name}: ${message}`);
    }
  }
  return {
    contract: INLINE_SCRIPT_SYNTAX_CONTRACT,
    discovered_script_count: extracted.scripts.length,
    compiled_classic_inline_count: compiledClassicInlineCount,
    skipped_external_count: skippedExternalCount,
    skipped_module_count: skippedModuleCount,
    skipped_non_javascript_count: skippedNonJavaScriptCount,
    failures,
  };
}

function attributeAssertion(literal) {
  const match = literal.match(/^([^\s=<>"']+)(?:\s*=\s*(?:(["'])(.*?)\2)?)?$/u);
  if (!match) fail(`static_closure_manifest count literal must be an HTML attribute assertion: ${literal}`);
  return { name: match[1], value: match[3] };
}

function attributeCount(source, literal) {
  const assertion = attributeAssertion(literal);
  let count = 0;
  for (const tag of htmlStartTags(source)) {
    const nameEnd = tag.search(/\s|\//u);
    const attributes = nameEnd < 0 ? "" : tag.slice(nameEnd);
    const pattern = /([^\s"'<>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gu;
    for (const match of attributes.matchAll(pattern)) {
      if (match[1] !== assertion.name) continue;
      const value = match[2] ?? match[3] ?? match[4];
      if (assertion.value === undefined || value === assertion.value) count += 1;
    }
  }
  return count;
}

function comparablePath(value) {
  const absolute = resolve(value);
  return existsSync(absolute) ? realpathSync(absolute) : absolute;
}

function normalizedCssSelector(value) {
  return value.trim().replace(/\s+/gu, " ");
}

function cssRuleBlocks(source) {
  const blocks = [];
  const pattern = /([^{}]+)\{([^{}]*)\}/gu;
  const embedded = [...source.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/giu)].map((match) => match[1]);
  const stylesheets = embedded.length ? embedded : [source];
  for (const stylesheet of stylesheets) {
    for (const match of stylesheet.matchAll(pattern)) {
      const selectors = match[1].split(",").map(normalizedCssSelector);
      const declarations = new Map();
      for (const raw of match[2].split(";")) {
        const separator = raw.indexOf(":");
        if (separator < 0) continue;
        const property = raw.slice(0, separator).trim().toLowerCase();
        const value = raw.slice(separator + 1).trim().replace(/\s*!important\s*$/u, "");
        if (property) declarations.set(property, value);
      }
      blocks.push({ selectors, declarations });
    }
  }
  return blocks;
}

function isLockedTypographyProperty(property) {
  return LOCKED_TYPOGRAPHY_PROPERTIES.has(property);
}

function normalizedCssValue(value) {
  return value
    .trim()
    .replace(/\s+/gu, " ")
    .replace(/\s*([,/])\s*/gu, "$1");
}

const HTML_VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
  "param", "source", "track", "wbr",
]);

function htmlElementTree(source) {
  const root = { tag_name: "#root", attributes: new Map(), parent: null, children: [] };
  const nodes = [];
  const stack = [root];
  const lowerSource = source.toLowerCase();
  let cursor = 0;
  while ((cursor = source.indexOf("<", cursor)) >= 0) {
    if (source.startsWith("<!--", cursor)) {
      const end = source.indexOf("-->", cursor + 4);
      cursor = end < 0 ? source.length : end + 3;
      continue;
    }
    const next = source[cursor + 1];
    if (!next) break;
    let end = cursor + 2;
    let quote = null;
    for (; end < source.length; end += 1) {
      const character = source[end];
      if (quote) {
        if (character === quote) quote = null;
      } else if (character === '"' || character === "'") {
        quote = character;
      } else if (character === ">") {
        break;
      }
    }
    if (end >= source.length) break;
    const raw = source.slice(cursor + 1, end).trim();
    if (raw.startsWith("/")) {
      const closingName = raw.slice(1).match(/^([^\s/>]+)/u)?.[1]?.toLowerCase();
      if (closingName) {
        const matchIndex = stack.findLastIndex((node) => node.tag_name === closingName);
        if (matchIndex > 0) stack.length = matchIndex;
      }
      cursor = end + 1;
      continue;
    }
    if (raw.startsWith("!") || raw.startsWith("?") || !/^[A-Za-z]/u.test(raw)) {
      cursor = end + 1;
      continue;
    }
    const tagName = raw.match(/^([^\s/>]+)/u)?.[1]?.toLowerCase();
    if (!tagName) {
      cursor = end + 1;
      continue;
    }
    const attributes = new Map();
    const attributesSource = raw.slice(tagName.length);
    const pattern = /([^\s"'<>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gu;
    for (const match of attributesSource.matchAll(pattern)) {
      attributes.set(match[1].toLowerCase(), match[2] ?? match[3] ?? match[4] ?? "");
    }
    const parent = stack.at(-1);
    const node = { tag_name: tagName, attributes, parent, children: [] };
    parent.children.push(node);
    nodes.push(node);
    if (!raw.endsWith("/") && !HTML_VOID_ELEMENTS.has(tagName)) stack.push(node);
    if (tagName === "script" || tagName === "style") {
      const rawTextEnd = lowerSource.indexOf(`</${tagName}`, end + 1);
      if (rawTextEnd < 0) break;
      cursor = rawTextEnd;
      continue;
    }
    cursor = end + 1;
  }
  return nodes;
}

function selectorSegments(selector) {
  if (/[+~]/u.test(selector)) return null;
  const segments = [];
  let buffer = "";
  let bracketDepth = 0;
  let parenthesisDepth = 0;
  let quote = null;
  let pendingCombinator = null;
  const flush = () => {
    const compound = buffer.trim();
    if (!compound) return;
    segments.push({ compound, combinator: segments.length ? (pendingCombinator ?? " ") : null });
    buffer = "";
    pendingCombinator = null;
  };
  for (const character of selector.trim()) {
    if (quote) {
      buffer += character;
      if (character === quote) quote = null;
      continue;
    }
    if (character === '"' || character === "'") {
      quote = character;
      buffer += character;
      continue;
    }
    if (character === "[") bracketDepth += 1;
    if (character === "]") bracketDepth -= 1;
    if (character === "(") parenthesisDepth += 1;
    if (character === ")") parenthesisDepth -= 1;
    if (bracketDepth === 0 && parenthesisDepth === 0 && character === ">") {
      flush();
      pendingCombinator = ">";
      continue;
    }
    if (bracketDepth === 0 && parenthesisDepth === 0 && /\s/u.test(character)) {
      flush();
      if (pendingCombinator == null) pendingCombinator = " ";
      continue;
    }
    buffer += character;
  }
  flush();
  return segments.length ? segments : null;
}

function attributeSelectorMatches(node, raw) {
  const match = raw.trim().match(
    /^([^\s~|^$*!=]+)(?:\s*(=|~=|\|=|\^=|\$=|\*=)\s*(?:"([^"]*)"|'([^']*)'|([^\s]+)))?$/u,
  );
  if (!match) return false;
  const name = match[1].toLowerCase();
  if (!node.attributes.has(name)) return false;
  if (!match[2]) return true;
  const expected = match[3] ?? match[4] ?? match[5] ?? "";
  const actual = node.attributes.get(name);
  if (match[2] === "=") return actual === expected;
  if (match[2] === "~=") return actual.split(/\s+/u).includes(expected);
  if (match[2] === "|=") return actual === expected || actual.startsWith(`${expected}-`);
  if (match[2] === "^=") return actual.startsWith(expected);
  if (match[2] === "$=") return actual.endsWith(expected);
  return actual.includes(expected);
}

function compoundSelectorMatches(node, compound) {
  const rootRequired = /:root\b/u.test(compound);
  let remaining = compound.replace(/:root\b/gu, "");
  let bracketDepth = 0;
  let quote = null;
  for (const character of remaining) {
    if (quote) {
      if (character === quote) quote = null;
      continue;
    }
    if (character === '"' || character === "'") {
      quote = character;
      continue;
    }
    if (character === "[") bracketDepth += 1;
    if (character === "]") bracketDepth -= 1;
    if (character === ":" && bracketDepth === 0) return false;
  }
  if (rootRequired && node.tag_name !== "html") return false;
  const tag = remaining.match(/^(\*|[A-Za-z][\w-]*)/u)?.[1];
  if (tag && tag !== "*" && node.tag_name !== tag.toLowerCase()) return false;
  if (tag) remaining = remaining.slice(tag.length);
  for (const match of remaining.matchAll(/#([\w-]+)/gu)) {
    if (node.attributes.get("id") !== match[1]) return false;
  }
  const classes = new Set((node.attributes.get("class") ?? "").split(/\s+/u).filter(Boolean));
  for (const match of remaining.matchAll(/\.([\w-]+)/gu)) {
    if (!classes.has(match[1])) return false;
  }
  for (const match of remaining.matchAll(/\[([^\]]+)\]/gu)) {
    if (!attributeSelectorMatches(node, match[1])) return false;
  }
  remaining = remaining
    .replace(/#[\w-]+/gu, "")
    .replace(/\.[\w-]+/gu, "")
    .replace(/\[[^\]]+\]/gu, "")
    .trim();
  return remaining.length === 0;
}

function selectorMatchesNode(node, selector) {
  const segments = selectorSegments(selector);
  if (!segments) return false;
  const matchAt = (candidate, index) => {
    if (!candidate || candidate.tag_name === "#root" || !compoundSelectorMatches(candidate, segments[index].compound)) {
      return false;
    }
    if (index === 0) return true;
    if (segments[index].combinator === ">") return matchAt(candidate.parent, index - 1);
    for (let ancestor = candidate.parent; ancestor?.tag_name !== "#root"; ancestor = ancestor.parent) {
      if (matchAt(ancestor, index - 1)) return true;
    }
    return false;
  };
  return matchAt(node, segments.length - 1);
}

function lockedTypographyNodes(source, artifact) {
  const nodes = htmlElementTree(source);
  const locked = new Set();
  const snapshotRows = artifact.row_groups.filter(
    (row) => row.typography_contract?.source === PRE_EDIT_SNAPSHOT_SOURCE,
  );
  const boundRowIds = new Set(snapshotRows.map((row) => row.id));
  const selectors = [
    ...snapshotRows.map((row) => row.selector),
    ...artifact.carriers
      .filter((carrier) => carrier.binds_row_groups.some((id) => boundRowIds.has(id)))
      .map((carrier) => carrier.selector),
  ];
  for (const node of nodes) {
    if (!selectors.some((selector) => selectorMatchesNode(node, selector))) continue;
    for (let current = node; current?.tag_name !== "#root"; current = current.parent) locked.add(current);
  }
  return locked;
}

function inlineStyleDeclarations(node) {
  const declarations = new Map();
  for (const raw of (node.attributes.get("style") ?? "").split(";")) {
    const separator = raw.indexOf(":");
    if (separator < 0) continue;
    const property = raw.slice(0, separator).trim().toLowerCase();
    const value = raw.slice(separator + 1).trim().replace(/\s*!important\s*$/u, "");
    if (property) declarations.set(property, value);
  }
  return declarations;
}

function htmlNodePath(node) {
  const segments = [];
  for (let current = node; current?.tag_name !== "#root"; current = current.parent) {
    const siblings = current.parent.children.filter((child) => child.tag_name === current.tag_name);
    segments.push(`${current.tag_name}[${siblings.indexOf(current) + 1}]`);
  }
  return segments.reverse().join("/");
}

function typographyDeclarationSnapshot(source, lockedNodes) {
  const declarations = new Map();
  for (const block of cssRuleBlocks(source)) {
    for (const selector of block.selectors) {
      if (![...lockedNodes].some((node) => selectorMatchesNode(node, selector))) continue;
      for (const [property, value] of block.declarations) {
        if (!isLockedTypographyProperty(property)) continue;
        const key = `${selector}\u0000${property}`;
        if (!declarations.has(key)) declarations.set(key, []);
        declarations.get(key).push(normalizedCssValue(value));
      }
    }
  }
  for (const node of lockedNodes) {
    for (const [property, value] of inlineStyleDeclarations(node)) {
      if (!isLockedTypographyProperty(property)) continue;
      declarations.set(`@inline:${htmlNodePath(node)}\u0000${property}`, [normalizedCssValue(value)]);
    }
  }
  return declarations;
}

function lockedTypographyDeclarationFailures(artifact, source) {
  if (
    artifact.source_contract?.state !== "provider-sealed"
    || artifact.pre_edit_product_snapshot == null
    || artifact.row_groups.every((row) => row.typography_contract?.source !== PRE_EDIT_SNAPSHOT_SOURCE)
  ) return [];
  const preEditSource = Buffer.from(
    artifact.pre_edit_product_snapshot.source_base64,
    "base64",
  ).toString("utf8");
  const before = typographyDeclarationSnapshot(
    preEditSource,
    lockedTypographyNodes(preEditSource, artifact),
  );
  const after = typographyDeclarationSnapshot(
    source,
    lockedTypographyNodes(source, artifact),
  );
  const explicitAuthority = new Map(
    artifact.static_closure_manifest.required_css_declarations
      .filter((entry) => (
        isLockedTypographyProperty(entry.property)
        && entry.value_contract === "exact-value"
      ))
      .map((entry) => [
        `${entry.selector}\u0000${entry.property}`,
        normalizedCssValue(entry.value),
      ]),
  );
  const failures = [];
  for (const key of new Set([...before.keys(), ...after.keys()])) {
    const previous = before.get(key) ?? [];
    const candidate = after.get(key) ?? [];
    const authorizedValue = explicitAuthority.get(key);
    if (
      authorizedValue !== undefined
      && candidate.length > 0
      && candidate.every((value) => value === authorizedValue)
    ) continue;
    if (JSON.stringify(previous) === JSON.stringify(candidate)) continue;
    const [selector, property] = key.split("\u0000");
    failures.push(
      `locked typography declaration changed without source-contract authority: ${selector} { ${property}: ${candidate.join(" | ") || "<removed>"} }`,
    );
  }
  return failures;
}

function isPositiveCssLength(value) {
  const match = value.match(/^\+?(\d*\.?\d+)(?:px|rem|em|ch|ex|vw|vh|vmin|vmax|%|cm|mm|in|pt|pc|q)?$/iu);
  return Boolean(match && Number(match[1]) > 0);
}

function forbiddenCssDeclarationFailures(source, assertions) {
  const blocks = cssRuleBlocks(source);
  const failures = [];
  for (const assertion of assertions) {
    for (const block of blocks) {
      if (!block.selectors.includes(assertion.selector)) continue;
      const value = block.declarations.get(assertion.property);
      if (value === undefined) continue;
      const forbidden = assertion.value_contract === "any-declaration" || isPositiveCssLength(value);
      if (forbidden) {
        failures.push(`matched forbidden CSS declaration: ${assertion.selector} { ${assertion.property}: ${value} } (${assertion.value_contract})`);
      }
    }
  }
  return failures;
}

function requiredCssDeclarationFailures(source, assertions) {
  const blocks = cssRuleBlocks(source);
  const failures = [];
  for (const assertion of assertions) {
    const values = blocks
      .filter((block) => block.selectors.includes(assertion.selector))
      .map((block) => block.declarations.get(assertion.property))
      .filter((value) => value !== undefined);
    if (values.length === 0) {
      failures.push(`missing required CSS declaration: ${assertion.selector} { ${assertion.property} }`);
      continue;
    }
    if (assertion.value_contract === "exact-value" && values.some((value) => value !== assertion.value)) {
      failures.push(`required CSS declaration value mismatch: ${assertion.selector} { ${assertion.property}: ${values.join(" | ")} }, expected ${assertion.value}`);
    }
  }
  return failures;
}

function htmlAttributeValue(startTag, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
  const match = startTag.match(new RegExp(`(?:^|\\s)${escaped}\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'|([^\\s\"'=<>` + "`" + `]+))`, "u"));
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? null;
}

function elementFragmentForMarker(source, markerName, markerValue) {
  const starts = [];
  for (const match of source.matchAll(/<([A-Za-z][\w:-]*)\b([^>]*)>/gu)) {
    if (htmlAttributeValue(match[0], markerName) === markerValue) {
      starts.push({ tagName: match[1], start: match.index, opening: match[0], contentStart: match.index + match[0].length });
    }
  }
  if (starts.length !== 1) return { count: starts.length, fragment: null, opening: starts[0]?.opening ?? null };
  const found = starts[0];
  const tagPattern = new RegExp(`<\\/?${found.tagName}\\b[^>]*>`, "giu");
  tagPattern.lastIndex = found.start;
  let depth = 0;
  for (const match of source.matchAll(tagPattern)) {
    if (match.index < found.start) continue;
    const closing = /^<\//u.test(match[0]);
    const selfClosing = /\/>$/u.test(match[0]);
    if (closing) depth -= 1;
    else if (!selfClosing) depth += 1;
    if (depth === 0) {
      return {
        count: 1,
        opening: found.opening,
        fragment: source.slice(found.start, match.index + match[0].length),
      };
    }
  }
  return { count: 1, opening: found.opening, fragment: null };
}

function sourceFallbackRelationshipFailures(source, relationships) {
  const failures = [];
  const blocks = cssRuleBlocks(source);
  for (const relationship of relationships) {
    const markerName = "data-omd-source-fallback-carrier";
    const markerValue = relationship.role;
    const element = elementFragmentForMarker(source, markerName, markerValue);
    if (element.count !== 1) {
      failures.push(`source fallback ${relationship.role} carrier count ${element.count}, expected 1`);
      continue;
    }
    if (!element.fragment) {
      failures.push(`source fallback ${relationship.role} carrier must have a matching closing element`);
      continue;
    }
    if (htmlAttributeValue(element.opening, "aria-label") !== relationship.accessible_name) {
      failures.push(`source fallback ${relationship.role} carrier must preserve its exact accessible name`);
    }
    if (htmlAttributeValue(element.opening, "tabindex") !== "0") {
      failures.push(`source fallback ${relationship.role} carrier must be keyboard reachable with tabindex=0`);
    }
    const observedOwnRole = attributeCount(
      element.fragment,
      `data-bench-decision-role=\"${relationship.role}\"`,
    );
    if (observedOwnRole !== relationship.row_expected_count) {
      failures.push(`source fallback ${relationship.role} carrier row count ${observedOwnRole}, expected ${relationship.row_expected_count}`);
    }
    for (const excludedRole of relationship.excluded_roles) {
      if (attributeCount(element.fragment, `data-bench-decision-role=\"${excludedRole}\"`) > 0) {
        failures.push(`source fallback ${relationship.role} carrier must exclude ${excludedRole}`);
      }
    }
    const carrierBlock = blocks.find((block) => block.selectors.includes(relationship.marker_selector));
    if (!carrierBlock || !["auto", "scroll"].includes(carrierBlock.declarations.get("overflow-x"))) {
      failures.push(`source fallback ${relationship.role} carrier must declare overflow-x:auto or scroll`);
    }
    const focusBlock = blocks.find((block) => block.selectors.includes(`${relationship.marker_selector}:focus-visible`));
    const outline = focusBlock?.declarations.get("outline");
    if (!outline || /^(?:none|0(?:px)?)$/iu.test(outline)) {
      failures.push(`source fallback ${relationship.role} carrier must declare a visible focus outline`);
    }
    const rowBlocks = blocks.filter((block) => block.selectors.includes(relationship.row_selector));
    if (!rowBlocks.some((block) => block.declarations.get("white-space") === "nowrap")) {
      failures.push(`source fallback ${relationship.role} row must declare white-space:nowrap`);
    }
    if (rowBlocks.some((block) => ["auto", "scroll"].includes(block.declarations.get("overflow-x")))) {
      failures.push(`source fallback ${relationship.role} passive row must not be the scroll container`);
    }
  }
  return failures;
}

export function executeStaticClosure(input, { productPath, source }) {
  const artifact = structuredClone(input);
  const sourceFallback = artifact.source_fallback_closure?.state === "opened";
  const locked = lockArtifact({
    ...artifact,
    carriers: artifact.carriers,
    row_groups: artifact.row_groups,
  }, { allowPendingFitPlan: sourceFallback });
  if (artifact.inventory?.sha256 !== locked.inventory.sha256) fail("immutable inventory hash changed");
  if (artifact.static_closure?.state !== "open" || artifact.static_closure?.attempts !== 0) {
    fail("static closure is exactly-once and has already been attempted");
  }
  const expectedPath = comparablePath(artifact.static_closure_manifest.product_path);
  if (comparablePath(productPath) !== expectedPath) fail("static closure product path does not match the locked manifest");
  if (typeof source !== "string") fail("static closure product source is required");
  const failures = [];
  const inlineScriptSyntax = inlineScriptSyntaxGuard(source);
  failures.push(...inlineScriptSyntax.failures);
  for (const literal of artifact.static_closure_manifest.required_literals) {
    if (!source.includes(literal)) failures.push(`missing required literal: ${literal}`);
  }
  failures.push(...requiredCssDeclarationFailures(
    source,
    artifact.static_closure_manifest.required_css_declarations,
  ));
  failures.push(...lockedTypographyDeclarationFailures(artifact, source));
  for (const literal of artifact.static_closure_manifest.forbidden_literals) {
    if (source.includes(literal)) failures.push(`found forbidden literal: ${literal}`);
  }
  for (const pattern of artifact.static_closure_manifest.forbidden_patterns) {
    if (new RegExp(pattern, "u").test(source)) failures.push(`matched forbidden pattern: ${pattern}`);
  }
  failures.push(...forbiddenCssDeclarationFailures(
    source,
    artifact.static_closure_manifest.forbidden_css_declarations,
  ));
  if (sourceFallback) {
    failures.push(...sourceFallbackRelationshipFailures(
      source,
      artifact.source_fallback_relationships ?? [],
    ));
  }
  for (const entry of artifact.static_closure_manifest.count_literals) {
    const observed = attributeCount(source, entry.literal);
    if (observed !== entry.expected_count) {
      failures.push(`literal count ${entry.literal}: ${observed}, expected ${entry.expected_count}`);
    }
  }
  artifact.static_closure = {
    state: failures.length ? "failed" : "passed",
    attempts: 1,
    failures,
    product_path: artifact.static_closure_manifest.product_path,
    inline_script_syntax: inlineScriptSyntax,
  };
  return artifact;
}

function completeOutcome(value, label, { compound = false, unresolved = false } = {}) {
  if (!value || typeof value !== "object") fail(`${label} final outcome is required`);
  for (const field of ["outcome_390", "outcome_320", "outcome_200pct"]) {
    if (!OUTCOMES.has(value[field])) fail(`${label}.${field} must be pass or unresolved`);
  }
  if (!unresolved && compound && value.passive_text_scroll_container !== false) {
    fail(`${label}.passive_text_scroll_container must be false for a resolved compound atomic row`);
  }
}

function validateResolvedRowMeasurements(row, {
  allowFailedFit = false,
  preEditProductSnapshot = null,
} = {}) {
  const values = row.final?.measurements;
  if (!Array.isArray(values) || values.length !== REQUIRED_MEASUREMENT_CONDITIONS.length) {
    fail(`row group ${row.id}.final.measurements must cover every condition`);
  }
  for (const [index, expected] of REQUIRED_MEASUREMENT_CONDITIONS.entries()) {
    const value = values[index];
    if (value?.id !== expected.id) fail(`row group ${row.id}.final.measurements[${index}] must be ${expected.id}`);
    if (row.typography_contract.source === PRE_EDIT_SNAPSHOT_SOURCE) {
      if (
        !preEditProductSnapshot
        || value.pre_edit_snapshot_sha256 !== preEditProductSnapshot.sha256
        || !Number.isFinite(value.pre_edit_font_size_px)
        || !Number.isFinite(value.pre_edit_line_height_px)
        || !(typeof value.pre_edit_font_weight === "string" || Number.isFinite(value.pre_edit_font_weight))
        || Math.abs(value.observed_font_size_px - value.pre_edit_font_size_px) >= 0.01
        || Math.abs(value.observed_line_height_px - value.pre_edit_line_height_px) >= 0.01
        || String(value.observed_font_weight) !== String(value.pre_edit_font_weight)
      ) fail(`row group ${row.id} changed its deterministic pre-edit typography role`);
    } else if (
      value.observed_font_size_px !== row.typography_contract.font_size_px
      || value.observed_line_height_px !== row.typography_contract.line_height_px
      || String(value.observed_font_weight) !== String(row.typography_contract.font_weight)
    ) fail(`row group ${row.id} changed its locked typography role`);
    if (
      !allowFailedFit
      && row.decision !== "comparison-scroll"
      && (!Number.isFinite(value.inline_reserve_css_px) || value.inline_reserve_css_px < row.required_fit_reserve_css_px)
    ) fail(`row group ${row.id} must preserve ${row.required_fit_reserve_css_px}px measured inline fit reserve`);
  }
}

function validateBrowserConnection(attempt, contract, env, { unresolved = false } = {}) {
  const expectedName = env?.[contract.connection_name_env];
  const expectedUrl = env?.[contract.cdp_url_env];
  if (!expectedName) fail("named consumer browser environment is unavailable");
  const observedUrl = attempt?.connection?.cdp_url ?? null;
  const endpointMatches = expectedUrl ? observedUrl === expectedUrl : observedUrl === null;
  if (
    attempt?.mechanism !== contract.mechanism
    || attempt?.connection?.transport !== contract.transport
    || attempt.connection.connection_name !== expectedName
    || !endpointMatches
    || attempt.connection.launched_browser !== false
    || (!unresolved && attempt.connection.attached_existing !== true)
  ) fail("browser attempt must attach to the exact named consumer CDP connection without launching another browser");
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

export function finalizeArtifact(input, {
  unresolved = false,
  measuredUnresolved = false,
  hostStateDir = null,
  env = process.env,
} = {}) {
  if (unresolved && measuredUnresolved) fail("finalization mode cannot be both infrastructure and measured unresolved");
  const unresolvedClosure = unresolved || measuredUnresolved;
  const artifact = structuredClone(input);
  const sourceFallback = artifact.source_fallback_closure?.state === "opened";
  const locked = lockArtifact({
    ...artifact,
    carriers: artifact.carriers,
    row_groups: artifact.row_groups,
  }, { allowPendingFitPlan: sourceFallback });
  if (artifact.inventory?.sha256 !== locked.inventory.sha256) fail("immutable inventory hash changed");
  if (artifact.static_closure?.state !== "passed" || artifact.static_closure?.attempts !== 1) {
    fail("finalization requires one passed deterministic static closure");
  }
  if (unresolved) {
    for (const carrier of artifact.carriers) {
      carrier.final = { outcome_390: "unresolved", outcome_320: "unresolved", outcome_200pct: "unresolved" };
    }
    for (const row of artifact.row_groups) {
      row.final = { status: "unresolved", outcome_390: "unresolved", outcome_320: "unresolved", outcome_200pct: "unresolved" };
    }
  }
  for (const carrier of artifact.carriers) completeOutcome(carrier.final, `carrier ${carrier.id}`, { unresolved: unresolvedClosure });
  for (const row of artifact.row_groups) {
    completeOutcome(row.final, `row group ${row.id}`, {
      compound: row.line_contract === "parent-one-line",
      unresolved: unresolvedClosure,
    });
    if (!OUTCOMES.has(row.final.status)) fail(`row group ${row.id}.status must be pass or unresolved`);
    if (!unresolved) validateResolvedRowMeasurements(row, {
      allowFailedFit: measuredUnresolved,
      preEditProductSnapshot: artifact.pre_edit_product_snapshot,
    });
  }
  if (!unresolvedClosure && INVARIANTS.some((field) => artifact.invariants[field] !== true)) {
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
  const rowsById = new Map(artifact.row_groups.map((row) => [row.id, row]));
  for (const debt of artifact.acceptance_debt_ledger) {
    const browserRowsPass = debt.bound_row_group_ids.every((id) => {
      const row = rowsById.get(id);
      return row?.final?.status === "pass"
        && ["outcome_390", "outcome_320", "outcome_200pct"].every((field) => row.final[field] === "pass");
    });
    const pass = !unresolved
      && artifact.static_closure.state === "passed"
      && (debt.proof_mode === "static-fail-close" || browserRowsPass);
    debt.final = { status: pass ? "pass" : "unresolved" };
  }
  const unresolvedDebtCount = artifact.acceptance_debt_ledger
    .filter((debt) => debt.final.status !== "pass").length;
  if (!unresolvedClosure && (unresolvedCarrierCount > 0 || unresolvedRowCount > 0 || unresolvedDebtCount > 0)) {
    fail("resolved closure requires zero unresolved acceptance debts, carriers, and rows");
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
    validateBrowserConnection(attempt, artifact.browser_connection_contract, env, { unresolved: true });
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
    validateBrowserConnection(attempt, artifact.browser_connection_contract, env);
    validateMeasurementConditions(attempt.conditions, "browser_attempt.conditions", { observed: true });
    if (hostStateDir && hostObservedBrowserAttempt(hostStateDir) !== true) {
      fail("resolved closure requires one host-observed browser attempt");
    }
  }
  const qualityPass = unresolvedDebtCount === 0 && unresolvedCarrierCount === 0 && unresolvedRowCount === 0;
  artifact.closure = { state: qualityPass ? "closed" : "unresolved" };
  artifact.known_failure_closure = {
    state: qualityPass ? "closed" : "unresolved",
    unresolved: unresolvedDebtCount + unresolvedCarrierCount + unresolvedRowCount,
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
    registered_acceptance_debts: artifact.acceptance_debt_ledger.length,
    unresolved_acceptance_debts: unresolvedDebtCount,
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

function staticPreviewReceiptPath(artifactPath) {
  return resolve(dirname(artifactPath), "static-preview-receipt.json");
}

function writeStaticPreviewReceipt(artifactPath, artifact, candidatePath, source, preview) {
  const receipt = {
    schema_version: "0.3",
    kind: "omd-static-preview-receipt",
    guard_version: STATIC_PREVIEW_GUARD_VERSION,
    guard_scope: STATIC_PREVIEW_GUARD_SCOPE,
    state: preview.state,
    candidate_path: candidatePath,
    candidate_sha256: sha256Source(source),
    source_contract_sha256: artifact.source_contract?.sha256 ?? null,
    inventory_sha256: artifact.inventory.sha256,
    inline_script_syntax: preview.inline_script_syntax,
    failures: preview.failures,
  };
  const receiptPath = staticPreviewReceiptPath(artifactPath);
  write(receiptPath, receipt);
  return { receipt, receiptPath };
}

function assertPassedStaticPreviewReceipt(
  artifactPath,
  artifact,
  source,
  { required = artifact.source_contract?.state === "provider-sealed", candidatePath = null } = {},
) {
  if (!required) return null;
  const receiptPath = staticPreviewReceiptPath(artifactPath);
  if (!existsSync(receiptPath)) {
    fail("candidate promotion and provider-sealed static closure require a passed static-preview receipt");
  }
  const receipt = JSON.parse(readFileSync(receiptPath, "utf8"));
  if (
    receipt?.schema_version !== "0.3"
    || receipt.kind !== "omd-static-preview-receipt"
    || receipt.guard_version !== STATIC_PREVIEW_GUARD_VERSION
    || receipt.guard_scope !== STATIC_PREVIEW_GUARD_SCOPE
    || receipt.state !== "passed"
    || receipt.source_contract_sha256 !== artifact.source_contract.sha256
    || receipt.inventory_sha256 !== artifact.inventory.sha256
    || receipt.candidate_sha256 !== sha256Source(source)
    || JSON.stringify(receipt.inline_script_syntax?.contract) !== JSON.stringify(INLINE_SCRIPT_SYNTAX_CONTRACT)
    || receipt.inline_script_syntax?.failures?.length !== 0
    || (candidatePath !== null && resolve(receipt.candidate_path ?? "") !== candidatePath)
  ) {
    fail("provider-sealed product bytes must exactly match the passed static-preview candidate");
  }
  return { receipt, receiptPath };
}

function staticEditGuardrails(artifact) {
  const sourceFallbackRelationships = artifact.source_fallback_relationships ?? [];
  const acceptanceCssSource = artifact.static_closure_manifest.required_css_declarations
    .map((assertion) => `${assertion.selector} { ${assertion.property}: ${assertion.value}; }`)
    .join("\n");
  const sourceFallbackCssSource = sourceFallbackRelationships.length > 0
    ? [
      `${sourceFallbackRelationships.map((relationship) => relationship.marker_selector).join(",")} { overflow-x: auto; }`,
      `${sourceFallbackRelationships.map((relationship) => `${relationship.marker_selector}:focus-visible`).join(",")} { outline: 2px solid currentColor; }`,
      `${sourceFallbackRelationships.map((relationship) => relationship.row_selector).join(",")} { white-space: nowrap; }`,
    ].join("\n")
    : null;
  const sourceFallbackPatchContract = sourceFallbackRelationships.length > 0 || acceptanceCssSource ? {
    apply_order: "apply every html and css entry before the single product edit is submitted; then consume static-close once",
    terminal_failure: "if static-close returns red, stop without another product edit or proof attempt",
    selector_contract: "copy each canonical selector exactly; grouping exact selectors is allowed, but ancestor prefixes, suffixes, aliases, and substitutions are forbidden",
    canonical_css_source: sourceFallbackCssSource,
    canonical_acceptance_css_source: acceptanceCssSource || null,
    acceptance_css: artifact.static_closure_manifest.required_css_declarations,
    html: sourceFallbackRelationships.map((relationship) => ({
      role: relationship.role,
      existing_carrier_selector: relationship.carrier_selector,
      required_attributes: {
        "data-omd-source-fallback-carrier": relationship.role,
        "aria-label": relationship.accessible_name,
        tabindex: "0",
      },
      must_contain_only_decision_roles: [relationship.role],
      must_exclude_decision_roles: relationship.excluded_roles,
    })),
    css: sourceFallbackRelationships.flatMap((relationship) => ([
      {
        role: relationship.role,
        selector: relationship.marker_selector,
        required_declarations: { "overflow-x": "auto" },
      },
      {
        role: relationship.role,
        selector: `${relationship.marker_selector}:focus-visible`,
        required_declarations: { outline: "2px solid currentColor" },
      },
      {
        role: relationship.role,
        selector: relationship.row_selector,
        required_declarations: { "white-space": "nowrap" },
        forbidden_declarations: { "overflow-x": ["auto", "scroll"] },
      },
    ])),
  } : null;
  const firstEditChecklist = [
    ...sourceFallbackRelationships.map((assertion, index) => ({
      id: `source-fallback-relationship-${index + 1}`,
      contract: "must-apply-source-fallback-patch",
      assertion,
    })),
    ...artifact.static_closure_manifest.required_literals.map((assertion, index) => ({
      id: `required-literal-${index + 1}`,
      contract: "must-include",
      assertion,
    })),
    ...artifact.static_closure_manifest.required_css_declarations.map((assertion, index) => ({
      id: `required-css-declaration-${index + 1}`,
      contract: "must-include-css-declaration",
      assertion,
    })),
    ...artifact.static_closure_manifest.forbidden_literals.map((assertion, index) => ({
      id: `forbidden-literal-${index + 1}`,
      contract: "must-not-include",
      assertion,
    })),
    ...artifact.static_closure_manifest.forbidden_patterns.map((assertion, index) => ({
      id: `forbidden-pattern-${index + 1}`,
      contract: "must-not-match",
      assertion,
    })),
    ...artifact.static_closure_manifest.forbidden_css_declarations.map((assertion, index) => ({
      id: `forbidden-css-declaration-${index + 1}`,
      contract: "must-not-match-css-declaration",
      assertion,
    })),
    ...artifact.static_closure_manifest.count_literals.map((assertion, index) => ({
      id: `count-literal-${index + 1}`,
      contract: "must-have-exact-count",
      assertion,
    })),
  ];
  return {
    required_literals: artifact.static_closure_manifest.required_literals,
    required_css_declarations: artifact.static_closure_manifest.required_css_declarations,
    forbidden_literals: artifact.static_closure_manifest.forbidden_literals,
    forbidden_patterns: artifact.static_closure_manifest.forbidden_patterns,
    forbidden_css_declarations: artifact.static_closure_manifest.forbidden_css_declarations,
    count_literals: artifact.static_closure_manifest.count_literals,
    source_fallback_relationships: sourceFallbackRelationships,
    source_fallback_patch_contract: sourceFallbackPatchContract,
    first_edit_checklist: firstEditChecklist,
    first_edit_checklist_contract: "satisfy every item in the single product edit before consuming static-close; a red static-close is terminal",
    forbidden_pattern_semantics: "absence-required-delete-matching-declaration",
    neutral_values_still_forbidden: ["normal", "initial", "unset", "revert", "inherit"],
    pre_edit_selector_semantics: "every snapshot-backed row selector is anchored in the snapshotted pre-edit product; never register a class, id, or attribute introduced by the product edit",
    acceptance_debts: artifact.acceptance_debt_ledger.map((debt) => ({
      id: debt.id,
      gate: debt.gate,
      selector: debt.selector,
      required_correction: debt.required_correction,
      required_outcome: debt.required_outcome,
      proof_mode: debt.proof_mode,
      bound_row_group_ids: debt.bound_row_group_ids,
    })),
    planned_fit_reserve_css_px: PLANNED_FIT_RESERVE_CSS_PX,
    measured_fit_reserve_css_px: REQUIRED_FIT_RESERVE_CSS_PX,
    pre_edit_fit_plan: artifact.pre_edit_fit_plan.state === "measured"
      ? {
          rows: artifact.pre_edit_fit_plan.rows.map((row) => ({
            id: row.id,
            required_carrier_inner_width_css_px: Object.fromEntries(
              row.measurements.map((measurement) => [measurement.id, measurement.required_carrier_inner_width_css_px]),
            ),
            fit_strategy_feasibility: artifact.pre_edit_fit_plan.fit_strategy_feasibility
              .find((entry) => entry.id === row.id),
          })),
          carriers: artifact.pre_edit_fit_plan.carriers.map((carrier) => ({
            id: carrier.id,
            required_outer_width_css_px: Object.fromEntries(
              carrier.measurements.map((measurement) => [measurement.id, measurement.required_outer_width_css_px]),
            ),
            available_document_width_css_px: Object.fromEntries(
              carrier.measurements.map((measurement) => [measurement.id, measurement.available_document_width_css_px]),
            ),
            available_carrier_inner_width_css_px: Object.fromEntries(
              carrier.measurements.map((measurement) => [measurement.id, measurement.available_carrier_inner_width_css_px]),
            ),
            requires_reflow: Object.fromEntries(
              carrier.measurements.map((measurement) => [measurement.id, measurement.requires_reflow]),
            ),
          })),
        }
      : { state: artifact.pre_edit_fit_plan.state },
  };
}

function main() {
  const [command, rawPath, rawAuxiliaryPath] = process.argv.slice(2);
  if (!command || !rawPath || !["source-seal", "source-packet", "snapshot", "lock", "plan-close", "plan-reconcile", "plan-diagnose", "plan-packet", "plan-apply", "source-fallback-open", "static-preview", "static-promote", "static-close", "finalize", "finalize-unresolved", "finalize-measured-unresolved"].includes(command)) {
    console.error("usage: reflow-artifact.mjs <source-seal|source-packet|snapshot|lock|plan-close|plan-reconcile|plan-diagnose|plan-packet|plan-apply|source-fallback-open|static-preview|static-promote|static-close|finalize|finalize-unresolved|finalize-measured-unresolved> <contract-or-artifact.json> [artifact-or-product-or-packet-file]");
    process.exitCode = 2;
    return;
  }
  const path = resolve(rawPath);
  const artifact = JSON.parse(readFileSync(path, "utf8"));
  if (command === "source-seal") {
    if (!rawAuxiliaryPath) fail("source-seal requires an output artifact path");
    const productPath = resolve(artifact.product_path ?? "");
    if (!existsSync(productPath)) fail("source-seal requires the source contract product file");
    const result = sealSourceContract(artifact, { source: readFileSync(productPath, "utf8") });
    const outputPath = resolve(rawAuxiliaryPath);
    write(outputPath, result);
    console.log(JSON.stringify({
      command,
      contract_path: path,
      path: outputPath,
      source_contract: result.source_contract,
      inventory_sha256: result.inventory.sha256,
      static_edit_guardrails: staticEditGuardrails(result),
    }));
    return;
  }
  if (command === "source-packet") {
    assertPreEditProductUnchanged(artifact);
    const locked = lockArtifact(artifact, { allowPendingFitPlan: true });
    if (artifact.inventory?.sha256 !== locked.inventory.sha256) fail("immutable inventory hash changed");
    validatePlanClosure(artifact);
    console.log(JSON.stringify({
      command,
      path,
      source_contract: artifact.source_contract ?? null,
      inventory_sha256: artifact.inventory.sha256,
      static_edit_guardrails: staticEditGuardrails(artifact),
    }));
    return;
  }
  if (command === "static-preview") {
    if (!rawAuxiliaryPath) fail("static-preview requires a candidate product file");
    assertPreEditProductUnchanged(artifact);
    validatePlanClosure(artifact);
    const candidatePath = resolve(rawAuxiliaryPath);
    const artifactDir = dirname(path);
    const relativeCandidate = relative(artifactDir, candidatePath);
    if (
      !relativeCandidate
      || relativeCandidate === ".."
      || relativeCandidate.startsWith(`..${sep}`)
      || isAbsolute(relativeCandidate)
    ) fail("static-preview candidate must stay inside the artifact directory");
    if (!existsSync(candidatePath)) fail("static-preview requires the candidate product file");
    const expectedProductPath = resolve(artifact.static_closure_manifest?.product_path ?? "");
    if (candidatePath === expectedProductPath || candidatePath === path) {
      fail("static-preview candidate must not be the locked product or artifact");
    }
    const source = readFileSync(candidatePath, "utf8");
    const preview = executeStaticClosure(artifact, {
      productPath: artifact.static_closure_manifest.product_path,
      source,
    }).static_closure;
    const { receipt, receiptPath } = writeStaticPreviewReceipt(
      path,
      artifact,
      candidatePath,
      source,
      preview,
    );
    console.log(JSON.stringify({
      command,
      path,
      candidate_path: candidatePath,
      candidate_sha256: sha256Source(source),
      receipt_path: receiptPath,
      receipt_state: receipt.state,
      inventory_sha256: artifact.inventory.sha256,
      static_preview: preview,
      artifact_mutated: false,
      product_mutated: false,
    }));
    if (preview.state !== "passed") process.exitCode = 1;
    return;
  }
  if (command === "static-promote") {
    if (!rawAuxiliaryPath) fail("static-promote requires the passed candidate product file");
    assertPreEditProductUnchanged(artifact);
    validatePlanClosure(artifact);
    const candidatePath = resolve(rawAuxiliaryPath);
    const artifactDir = dirname(path);
    const relativeCandidate = relative(artifactDir, candidatePath);
    if (
      !relativeCandidate
      || relativeCandidate === ".."
      || relativeCandidate.startsWith(`..${sep}`)
      || isAbsolute(relativeCandidate)
    ) fail("static-promote candidate must stay inside the artifact directory");
    if (!existsSync(candidatePath)) fail("static-promote requires the passed candidate product file");
    const productPath = resolve(artifact.static_closure_manifest?.product_path ?? "");
    if (!productPath || candidatePath === productPath || candidatePath === path) {
      fail("static-promote candidate must not be the locked product or artifact");
    }
    const source = readFileSync(candidatePath, "utf8");
    const { receiptPath } = assertPassedStaticPreviewReceipt(path, artifact, source, {
      required: true,
      candidatePath,
    });
    copyFileSync(candidatePath, productPath);
    const productSource = readFileSync(productPath, "utf8");
    if (sha256Source(productSource) !== sha256Source(source)) {
      fail("static-promote failed to preserve candidate bytes");
    }
    console.log(JSON.stringify({
      command,
      path,
      candidate_path: candidatePath,
      product_path: productPath,
      receipt_path: receiptPath,
      candidate_sha256: sha256Source(source),
      product_sha256: sha256Source(productSource),
      exact_bytes: true,
      artifact_mutated: false,
      product_mutated: true,
    }));
    return;
  }
  const defaultHostStateDir = resolve(process.cwd(), ".omd/proof-policy");
  const hostStateDir = process.env.OMD_PROOF_POLICY_STATE_DIR
    ? resolve(process.env.OMD_PROOF_POLICY_STATE_DIR)
    : existsSync(resolve(defaultHostStateDir, "state.json"))
      ? defaultHostStateDir
      : null;
  let result;
  if (command === "snapshot") {
    const productPath = resolve(artifact.static_closure_manifest?.product_path ?? "");
    if (!existsSync(productPath)) fail("snapshot requires the pre-edit product file from static_closure_manifest.product_path");
    const source = readFileSync(productPath, "utf8");
    result = lockArtifact({
      ...artifact,
      pre_edit_fit_plan: { state: "pending" },
      pre_edit_product_snapshot: productSnapshot(
        source,
        artifact.static_closure_manifest.product_path,
      ),
    }, { allowPendingFitPlan: true });
  } else if (command === "lock") {
    const productPath = resolve(artifact.static_closure_manifest?.product_path ?? "");
    if (!existsSync(productPath)) fail("lock requires the pre-edit product file from static_closure_manifest.product_path");
    const source = readFileSync(productPath, "utf8");
    result = closePlan({
      ...artifact,
      pre_edit_product_snapshot: productSnapshot(
        source,
        artifact.static_closure_manifest.product_path,
      ),
    }, "lock");
  } else if (command === "plan-diagnose") {
    assertPreEditProductUnchanged(artifact);
    console.log(JSON.stringify({ command, path, diagnosis: diagnosePlanReconcile(artifact) }));
    return;
  } else if (command === "plan-packet") {
    assertPreEditProductUnchanged(artifact);
    const packet = createPlanDecisionPacket(artifact);
    if (rawAuxiliaryPath) writeFileSync(resolve(rawAuxiliaryPath), `${JSON.stringify(packet, null, 2)}\n`, "utf8");
    console.log(JSON.stringify({ command, path, packet_path: rawAuxiliaryPath ? resolve(rawAuxiliaryPath) : null, packet }));
    return;
  } else if (command === "plan-apply") {
    if (!rawAuxiliaryPath) fail("plan-apply requires the decision packet file");
    assertPreEditProductUnchanged(artifact);
    const packet = JSON.parse(readFileSync(resolve(rawAuxiliaryPath), "utf8"));
    result = applyPlanDecisionPacket(artifact, packet);
  } else if (command === "plan-reconcile") {
    const diagnosis = diagnosePlanReconcile(artifact);
    if (diagnosis.status !== "ready") {
      fail(`plan reconciliation ${diagnosis.status}: ${JSON.stringify(diagnosis)}`);
    }
    result = closePlan(artifact, command);
  } else if (command === "plan-close") {
    result = closePlan(artifact, command);
  } else if (command === "source-fallback-open") {
    let fallbackArtifact = artifact;
    if (fallbackArtifact.pre_edit_product_snapshot == null) {
      const productPath = resolve(fallbackArtifact.static_closure_manifest?.product_path ?? "");
      if (!existsSync(productPath)) {
        fail("source fallback requires the pre-edit product file from static_closure_manifest.product_path");
      }
      const source = readFileSync(productPath, "utf8");
      fallbackArtifact = {
        ...fallbackArtifact,
        pre_edit_product_snapshot: productSnapshot(
          source,
          fallbackArtifact.static_closure_manifest.product_path,
        ),
      };
      write(path, fallbackArtifact);
    }
    result = openSourceFallback(fallbackArtifact);
  } else if (command === "static-close") {
    const lockedProductPath = rawAuxiliaryPath ?? artifact.static_closure_manifest?.product_path;
    if (typeof lockedProductPath !== "string" || !lockedProductPath) {
      fail("static-close requires the locked product file");
    }
    validatePlanClosure(artifact);
    const productPath = resolve(lockedProductPath);
    if (!existsSync(productPath)) fail("static-close requires the locked product file");
    const source = readFileSync(productPath, "utf8");
    assertPassedStaticPreviewReceipt(path, artifact, source);
    result = executeStaticClosure(artifact, {
      productPath,
      source,
    });
  } else {
    result = finalizeArtifact(artifact, {
      unresolved: command === "finalize-unresolved",
      measuredUnresolved: command === "finalize-measured-unresolved",
      hostStateDir,
    });
  }
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
    static_closure: result.static_closure,
    plan_closure: result.plan_closure ?? null,
    source_fallback_closure: result.source_fallback_closure ?? null,
    static_edit_guardrails: ["lock", "plan-close", "plan-reconcile", "plan-apply", "source-fallback-open"].includes(command) ? staticEditGuardrails(result) : undefined,
  }));
  if (command === "static-close" && result.static_closure.state !== "passed") process.exitCode = 1;
  if (["finalize", "finalize-unresolved", "finalize-measured-unresolved"].includes(command)) console.log(deliveryMarker(result));
}

if (
  process.argv[1]
  && existsSync(resolve(process.argv[1]))
  && realpathSync(resolve(process.argv[1])) === realpathSync(fileURLToPath(import.meta.url))
) main();
