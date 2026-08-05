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
  if (task.behavior_adapter === "approval-v1") validateApprovalStructuralContract(task);
  return task;
}
