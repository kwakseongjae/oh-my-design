import { createHash } from "node:crypto";

const APPROVAL_ROLE_NAMES = ["container", "target", "evidence", "state", "action"];

function requireNonEmptyString(value, label) {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${label} must be a non-empty string`);
}

function requireObject(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${label} is required`);
  }
  return value;
}

function requireUniqueKnownViewports(task, names, label) {
  if (!Array.isArray(names) || !names.length || new Set(names).size !== names.length) {
    throw new Error(`${label} must declare unique viewport names`);
  }
  const known = new Set((task.viewports ?? []).map((viewport) => viewport?.name).filter(Boolean));
  for (const name of names) {
    if (!known.has(name)) throw new Error(`${label} references unknown viewport: ${name}`);
  }
}

function requireSelectorList(value, label) {
  if (!Array.isArray(value) || !value.length || new Set(value).size !== value.length ||
    value.some((selector) => typeof selector !== "string" || !selector.trim())) {
    throw new Error(`${label} must declare unique non-empty selectors`);
  }
}

function requireStructuredCssDeclarations(value, label) {
  if (!Array.isArray(value) || !value.length) {
    throw new Error(`${label} must declare at least one structured CSS declaration`);
  }
  for (const [index, declaration] of value.entries()) {
    requireObject(declaration, `${label}[${index}]`);
    requireNonEmptyString(declaration.selector, `${label}[${index}].selector`);
    requireNonEmptyString(declaration.property, `${label}[${index}].property`);
    requireNonEmptyString(declaration.value, `${label}[${index}].value`);
    if (!new Set(["any-value", "exact-value"]).has(declaration.value_contract)) {
      throw new Error(`${label}[${index}].value_contract must be any-value or exact-value`);
    }
  }
}

function requireSha256(value, label) {
  if (typeof value !== "string" || !/^[a-f0-9]{64}$/.test(value)) {
    throw new Error(`${label} must be a lowercase SHA-256`);
  }
}

function requireUniqueNonEmptyStrings(value, label) {
  if (!Array.isArray(value) || !value.length || new Set(value).size !== value.length ||
    value.some((entry) => typeof entry !== "string" || !entry.trim())) {
    throw new Error(`${label} must declare unique non-empty strings`);
  }
}

export function validateOmdReflowSourceContract(task) {
  if (task.omd_reflow_source_contract === undefined) return task;
  const contract = requireObject(task.omd_reflow_source_contract, "omd_reflow_source_contract");
  if (!new Set(["0.1", "0.2"]).has(contract.schema_version)) {
    throw new Error("omd_reflow_source_contract.schema_version must be 0.1 or 0.2");
  }
  if (contract.structured_css_only !== true) throw new Error("omd_reflow_source_contract must require structured_css_only");
  if (contract.product_path !== task.entry) throw new Error("omd_reflow_source_contract.product_path must match task.entry");
  for (const field of ["carriers", "row_groups", "acceptance_debt_ledger"]) {
    if (!Array.isArray(contract[field]) || !contract[field].length) {
      throw new Error(`omd_reflow_source_contract.${field} must not be empty`);
    }
  }
  requireObject(contract.invariants, "omd_reflow_source_contract.invariants");
  contract.acceptance_debt_ledger.forEach((debt, index) => {
    requireObject(debt, `omd_reflow_source_contract.acceptance_debt_ledger[${index}]`);
    const guardrail = requireObject(
      debt.static_guardrail,
      `omd_reflow_source_contract.acceptance_debt_ledger[${index}].static_guardrail`,
    );
    requireStructuredCssDeclarations(
      guardrail.required_css_declarations,
      `omd_reflow_source_contract.acceptance_debt_ledger[${index}].static_guardrail.required_css_declarations`,
    );
  });
  if (contract.schema_version === "0.2") {
    const evidence = requireObject(contract.baseline_evidence, "omd_reflow_source_contract.baseline_evidence");
    requireNonEmptyString(evidence.path, "omd_reflow_source_contract.baseline_evidence.path");
    if (evidence.path.startsWith("/") || evidence.path.split(/[\\/]/).includes("..") || !evidence.path.endsWith(".json")) {
      throw new Error("omd_reflow_source_contract.baseline_evidence.path must be a task-relative JSON file");
    }
    requireSha256(evidence.sha256, "omd_reflow_source_contract.baseline_evidence.sha256");

    if (!Array.isArray(contract.critical_gate_debt_coverage) || !contract.critical_gate_debt_coverage.length) {
      throw new Error("omd_reflow_source_contract.critical_gate_debt_coverage must not be empty");
    }
    const debtIds = new Set(contract.acceptance_debt_ledger.map((debt, index) => {
      requireNonEmptyString(debt.id, `omd_reflow_source_contract.acceptance_debt_ledger[${index}].id`);
      return debt.id;
    }));
    if (debtIds.size !== contract.acceptance_debt_ledger.length) {
      throw new Error("omd_reflow_source_contract acceptance debt ids must be unique");
    }
    const coveredGates = contract.critical_gate_debt_coverage.map((coverage, index) => {
      requireObject(coverage, `omd_reflow_source_contract.critical_gate_debt_coverage[${index}]`);
      requireNonEmptyString(coverage.gate, `omd_reflow_source_contract.critical_gate_debt_coverage[${index}].gate`);
      requireUniqueNonEmptyStrings(
        coverage.debt_ids,
        `omd_reflow_source_contract.critical_gate_debt_coverage[${index}].debt_ids`,
      );
      for (const debtId of coverage.debt_ids) {
        if (!debtIds.has(debtId)) {
          throw new Error(`omd_reflow_source_contract critical gate coverage references unknown debt: ${debtId}`);
        }
      }
      return coverage.gate;
    });
    if (new Set(coveredGates).size !== coveredGates.length) {
      throw new Error("omd_reflow_source_contract critical gate coverage must use unique gates");
    }

    const comparisonScrollRows = contract.row_groups.filter((row) => row?.decision === "comparison-scroll");
    for (const row of comparisonScrollRows) {
      const carriers = contract.carriers.filter((carrier) => carrier?.binds_row_groups?.includes(row.id));
      if (carriers.length !== 1) {
        throw new Error(`omd_reflow_source_contract comparison-scroll row requires exactly one carrier: ${row.id}`);
      }
      const containment = requireObject(
        carriers[0].containment_guardrail,
        `omd_reflow_source_contract carrier containment_guardrail: ${carriers[0].id}`,
      );
      if (containment.property !== "min-width" || containment.value !== "0" ||
        containment.value_contract !== "exact-value") {
        throw new Error("omd_reflow_source_contract comparison-scroll containment must require exact min-width: 0");
      }
      requireNonEmptyString(containment.selector, "omd_reflow_source_contract containment_guardrail.selector");
    }
  }
  return task;
}

export function validateOmdReflowBaselineCoverage(task, baselineScore) {
  const contract = task.omd_reflow_source_contract;
  if (contract?.schema_version !== "0.2") return null;
  const score = requireObject(baselineScore, "omd_reflow_source_contract baseline score");
  const criticalGates = requireObject(score.critical_gates, "omd_reflow_source_contract baseline critical_gates");
  const failedGates = Object.entries(criticalGates)
    .filter(([, passed]) => passed === false)
    .map(([gate]) => gate)
    .sort();
  if (!failedGates.length) {
    throw new Error("omd_reflow_source_contract baseline must expose at least one failed critical gate");
  }
  const coveredGates = contract.critical_gate_debt_coverage.map((coverage) => coverage.gate).sort();
  if (JSON.stringify(coveredGates) !== JSON.stringify(failedGates)) {
    throw new Error(
      `omd_reflow_source_contract critical gate debt coverage mismatch: baseline=${failedGates.join(",")} covered=${coveredGates.join(",")}`,
    );
  }
  return {
    failed_critical_gates: failedGates,
    covered_critical_gates: coveredGates,
    complete: true,
  };
}

export function validateOmdReflowBaselineEvidence(task, baselineBytes) {
  const contract = task.omd_reflow_source_contract;
  if (contract?.schema_version !== "0.2") return null;
  if (!Buffer.isBuffer(baselineBytes) && !(baselineBytes instanceof Uint8Array)) {
    throw new Error("omd_reflow_source_contract baseline evidence bytes are required");
  }
  const observedSha256 = createHash("sha256").update(baselineBytes).digest("hex");
  if (observedSha256 !== contract.baseline_evidence.sha256) {
    throw new Error(`omd_reflow_source_contract baseline evidence hash mismatch: ${contract.baseline_evidence.path}`);
  }
  let baselineScore;
  try {
    baselineScore = JSON.parse(Buffer.from(baselineBytes).toString("utf8"));
  } catch {
    throw new Error(`omd_reflow_source_contract baseline evidence must be valid JSON: ${contract.baseline_evidence.path}`);
  }
  return {
    ...validateOmdReflowBaselineCoverage(task, baselineScore),
    path: contract.baseline_evidence.path,
    sha256: observedSha256,
  };
}

export function validateTextGeometryContract(task) {
  if (task.text_geometry_oracle === undefined) return task;
  const text = requireObject(task.text_geometry_oracle, "text_geometry_oracle");
  requireUniqueKnownViewports(task, text.viewports, "text_geometry_oracle.viewports");
  requireSelectorList(text.scope_selectors, "text_geometry_oracle.scope_selectors");
  if (text.atomic_scope_selectors !== undefined) {
    requireSelectorList(text.atomic_scope_selectors, "text_geometry_oracle.atomic_scope_selectors");
  }
  if (text.compact_copy_selectors !== undefined) {
    requireSelectorList(text.compact_copy_selectors, "text_geometry_oracle.compact_copy_selectors");
  }
  if (!Number.isInteger(text.max_short_text_chars) || text.max_short_text_chars < 1) {
    throw new Error("max_short_text_chars must be a positive integer");
  }
  if (!Number.isInteger(text.max_short_text_lines) || text.max_short_text_lines < 1) {
    throw new Error("max_short_text_lines must be a positive integer");
  }
  return task;
}

export function validateApprovalStructuralContract(task) {
  const text = requireObject(task.text_geometry_oracle, "approval-v1 text_geometry_oracle");
  requireUniqueKnownViewports(task, text.viewports, "approval-v1 text_geometry_oracle.viewports");
  if (!Array.isArray(text.scope_selectors) || text.scope_selectors.length < 2) {
    throw new Error("approval-v1 text_geometry_oracle.scope_selectors must cover rows and decision context");
  }
  if (!text.scope_selectors.includes("[data-bench='approval-row']")) {
    throw new Error("approval-v1 text geometry must cover approval rows");
  }
  if (!text.scope_selectors.includes("[data-bench-decision-role='context']")) {
    throw new Error("approval-v1 text geometry must cover decision context");
  }
  if (!Number.isInteger(text.max_short_text_chars) || text.max_short_text_chars < 1) {
    throw new Error("approval-v1 max_short_text_chars must be a positive integer");
  }
  if (text.max_short_text_lines !== 1) {
    throw new Error("approval-v1 short atomic text must remain on one line");
  }

  const hierarchy = requireObject(task.decision_hierarchy_oracle, "approval-v1 decision_hierarchy_oracle");
  requireUniqueKnownViewports(task, hierarchy.viewports, "approval-v1 decision_hierarchy_oracle.viewports");
  const taskViewports = (task.viewports ?? []).map((viewport) => viewport.name);
  if (taskViewports.some((name) => !hierarchy.viewports.includes(name))) {
    throw new Error("approval-v1 decision hierarchy must cover every task viewport");
  }
  if (typeof hierarchy.minimum_action_gap_px !== "number" || hierarchy.minimum_action_gap_px < 8) {
    throw new Error("approval-v1 decision action gap must be at least 8px");
  }

  const roles = requireObject(hierarchy.roles, "approval-v1 decision_hierarchy_oracle.roles");
  for (const role of APPROVAL_ROLE_NAMES) {
    const selector = roles[role];
    if (typeof selector !== "string" || !selector) {
      throw new Error(`approval-v1 decision role is missing: ${role}`);
    }
    if (task.protected_hook_counts?.[selector] !== 1) {
      throw new Error(`approval-v1 decision role must be protected exactly once: ${role}`);
    }
    if (!task.protected_selectors?.includes(selector)) {
      throw new Error(`approval-v1 decision role must be a protected selector: ${role}`);
    }
  }
  return task;
}

export function validateCoreTaskContract(task, { expectedId = null } = {}) {
  requireNonEmptyString(task.id, "task.id");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*-v\d+\.\d+$/.test(task.id)) {
    throw new Error("task.id must be a versioned kebab-case identifier");
  }
  if (expectedId !== null && task.id !== expectedId) throw new Error(`task.id does not match directory: ${expectedId}`);
  requireNonEmptyString(task.version, "task.version");
  if (!/^\d+\.\d+\.\d+$/.test(task.version)) throw new Error("task.version must be semver");
  for (const field of ["track", "grounding", "locale", "behavior_adapter"]) {
    requireNonEmptyString(task[field], `task.${field}`);
  }
  if (task.network !== "disabled") throw new Error("task.network must be disabled");
  requireNonEmptyString(task.entry, "task.entry");
  if (task.entry.startsWith("/") || task.entry.split(/[\\/]/).includes("..") || !task.entry.endsWith(".html")) {
    throw new Error("task.entry must be a repository-relative HTML file");
  }
  requireObject(task.semantic_oracle, "semantic_oracle");
  requireObject(task.design_oracle, "design_oracle");
  if (!Array.isArray(task.viewports) || !task.viewports.length) throw new Error("viewports must not be empty");
  const viewportNames = task.viewports.map((viewport, index) => {
    requireObject(viewport, `viewports[${index}]`);
    requireNonEmptyString(viewport.name, `viewports[${index}].name`);
    for (const field of ["width", "height"]) {
      if (!Number.isFinite(viewport[field]) || viewport[field] <= 0) throw new Error(`viewports[${index}].${field} must be positive`);
    }
    if (viewport.zoom !== undefined && (!Number.isFinite(viewport.zoom) || viewport.zoom <= 0)) {
      throw new Error(`viewports[${index}].zoom must be positive`);
    }
    return viewport.name;
  });
  if (new Set(viewportNames).size !== viewportNames.length) throw new Error("viewport names must be unique");

  requireSelectorList(task.protected_selectors, "protected_selectors");
  const counts = requireObject(task.protected_hook_counts, "protected_hook_counts");
  const countSelectors = Object.keys(counts);
  if (countSelectors.length !== task.protected_selectors.length ||
    task.protected_selectors.some((selector) => !Object.hasOwn(counts, selector))) {
    throw new Error("protected_hook_counts must match protected_selectors exactly");
  }
  for (const [selector, expected] of Object.entries(counts)) {
    if (Number.isInteger(expected) && expected > 0) continue;
    if (expected && typeof expected === "object" && !Array.isArray(expected) &&
      Number.isInteger(expected.total) && expected.total > 0 &&
      Number.isInteger(expected.visible) && expected.visible >= 0 && expected.visible <= expected.total) continue;
    throw new Error(`protected_hook_counts has invalid expectation: ${selector}`);
  }
  requireSelectorList(task.protected_unknown_patterns, "protected_unknown_patterns");
  requireSelectorList(task.protected_unknown_selectors, "protected_unknown_selectors");
  return task;
}

export function validateTaskContract(task, options = {}) {
  if (!task || typeof task !== "object" || Array.isArray(task)) {
    throw new Error("task contract must be an object");
  }
  validateCoreTaskContract(task, options);
  validateTextGeometryContract(task);
  validateOmdReflowSourceContract(task);
  if (task.behavior_adapter === "approval-v1") validateApprovalStructuralContract(task);
  return task;
}
