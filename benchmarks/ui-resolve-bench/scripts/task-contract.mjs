const APPROVAL_ROLE_NAMES = ["container", "target", "evidence", "state", "action"];

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

export function validateTaskContract(task) {
  if (!task || typeof task !== "object" || Array.isArray(task)) {
    throw new Error("task contract must be an object");
  }
  if (task.behavior_adapter === "approval-v1") validateApprovalStructuralContract(task);
  return task;
}
