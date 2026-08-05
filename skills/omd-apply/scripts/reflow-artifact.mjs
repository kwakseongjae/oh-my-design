#!/usr/bin/env node
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { isAbsolute, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

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

function fail(message) {
  throw new Error(`reflow artifact: ${message}`);
}

function sha256Source(source) {
  return createHash("sha256").update(source).digest("hex");
}

function assertPreEditProductUnchanged(artifact) {
  const snapshot = validatePreEditProductSnapshot(
    artifact.pre_edit_product_snapshot,
    artifact.static_closure_manifest,
  );
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
  if (
    closure?.state !== "closed"
    || !["lock", "plan-close", "plan-reconcile"].includes(closure.command)
    || closure.pre_edit_product_sha256 !== artifact.pre_edit_product_snapshot?.sha256
    || closure.measured_fit_plan_sha256 !== createHash("sha256")
      .update(JSON.stringify(artifact.pre_edit_fit_plan))
      .digest("hex")
  ) fail("static closure requires a helper-issued successful plan closure and unchanged measured fit plan");
  return closure;
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
      + guardrail.forbidden_literals.length
      + guardrail.forbidden_patterns.length
      + guardrail.forbidden_css_declarations.length === 0
    ) fail(`acceptance debt ${debt.id} static_guardrail must contain at least one assertion`);
    manifestContainsAll(manifest, "required_literals", guardrail.required_literals, `acceptance debt ${debt.id} required literals`);
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
  if (diagnosis.status === "irreconcilable") {
    fail("irreconcilable plan decision packets require discarding the run");
  }
  if (diagnosis.status === "ready") return closePlan(artifact, "plan-reconcile");

  const patched = structuredClone(artifact);
  const rows = new Map(patched.row_groups.map((row) => [row.id, row]));
  for (const patch of diagnosis.complete_patch.row_groups) {
    const row = rows.get(patch.row_id);
    if (!row) fail(`plan decision packet row ${patch.row_id} is missing`);
    const suppliedName = packet.operator_inputs?.accessible_names?.[patch.row_id];
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

export function executeStaticClosure(input, { productPath, source }) {
  const artifact = structuredClone(input);
  const locked = lockArtifact({
    ...artifact,
    carriers: artifact.carriers,
    row_groups: artifact.row_groups,
  });
  if (artifact.inventory?.sha256 !== locked.inventory.sha256) fail("immutable inventory hash changed");
  if (artifact.static_closure?.state !== "open" || artifact.static_closure?.attempts !== 0) {
    fail("static closure is exactly-once and has already been attempted");
  }
  const expectedPath = comparablePath(artifact.static_closure_manifest.product_path);
  if (comparablePath(productPath) !== expectedPath) fail("static closure product path does not match the locked manifest");
  if (typeof source !== "string") fail("static closure product source is required");
  const failures = [];
  for (const literal of artifact.static_closure_manifest.required_literals) {
    if (!source.includes(literal)) failures.push(`missing required literal: ${literal}`);
  }
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
  const locked = lockArtifact({
    ...artifact,
    carriers: artifact.carriers,
    row_groups: artifact.row_groups,
  });
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

function staticEditGuardrails(artifact) {
  const firstEditChecklist = [
    ...artifact.static_closure_manifest.required_literals.map((assertion, index) => ({
      id: `required-literal-${index + 1}`,
      contract: "must-include",
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
    forbidden_literals: artifact.static_closure_manifest.forbidden_literals,
    forbidden_patterns: artifact.static_closure_manifest.forbidden_patterns,
    forbidden_css_declarations: artifact.static_closure_manifest.forbidden_css_declarations,
    count_literals: artifact.static_closure_manifest.count_literals,
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
  if (!command || !rawPath || !["snapshot", "lock", "plan-close", "plan-reconcile", "plan-diagnose", "plan-packet", "plan-apply", "static-close", "finalize", "finalize-unresolved", "finalize-measured-unresolved"].includes(command)) {
    console.error("usage: reflow-artifact.mjs <snapshot|lock|plan-close|plan-reconcile|plan-diagnose|plan-packet|plan-apply|static-close|finalize|finalize-unresolved|finalize-measured-unresolved> <artifact.json> [product-or-packet-file]");
    process.exitCode = 2;
    return;
  }
  const path = resolve(rawPath);
  const artifact = JSON.parse(readFileSync(path, "utf8"));
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
  } else if (command === "static-close") {
    if (!rawAuxiliaryPath) fail("static-close requires the locked product file");
    validatePlanClosure(artifact);
    const productPath = resolve(rawAuxiliaryPath);
    result = executeStaticClosure(artifact, {
      productPath,
      source: readFileSync(productPath, "utf8"),
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
    static_edit_guardrails: ["lock", "plan-close", "plan-reconcile", "plan-apply"].includes(command) ? staticEditGuardrails(result) : undefined,
  }));
  if (command === "static-close" && result.static_closure.state !== "passed") process.exitCode = 1;
  if (["finalize", "finalize-unresolved", "finalize-measured-unresolved"].includes(command)) console.log(deliveryMarker(result));
}

if (
  process.argv[1]
  && existsSync(resolve(process.argv[1]))
  && realpathSync(resolve(process.argv[1])) === realpathSync(fileURLToPath(import.meta.url))
) main();
