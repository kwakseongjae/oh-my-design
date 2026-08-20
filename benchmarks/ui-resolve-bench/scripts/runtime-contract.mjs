import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const PROVIDER_ROUTING_POLICY_PATH = fileURLToPath(
  new URL("../config/provider-routing-policy.json", import.meta.url),
);
export const PROVIDER_ROUTING_POLICY = Object.freeze(JSON.parse(
  readFileSync(PROVIDER_ROUTING_POLICY_PATH, "utf8"),
));

const CODEX_UI_MODELS = Object.freeze([
  "gpt-5.6-luna",
  "gpt-5.6-terra",
  "gpt-5.6-sol",
]);
const CODEX_UI_SUPPORTED_EFFORTS = Object.freeze({
  "gpt-5.6-luna": Object.freeze(["low", "medium", "high", "xhigh", "max"]),
  "gpt-5.6-terra": Object.freeze(["low", "medium", "high", "xhigh", "max", "ultra"]),
  "gpt-5.6-sol": Object.freeze(["low", "medium", "high", "xhigh", "max", "ultra"]),
});

function assertUiEffortPolicyShape() {
  const routing = PROVIDER_ROUTING_POLICY.ui_effort_routing;
  if (PROVIDER_ROUTING_POLICY.schema_version !== "0.2"
    || routing?.scope !== "ui-design-execution"
    || routing.evidence_tier !== "internal-three-task-descriptive"
    || routing.evidence_ref !== "reports/codex-all-effort-sweep-1.9.826/SUMMARY.final.json"
    || routing.recommended_common_default !== "high"
    || routing.catalog_default_is_not_overwritten !== true
    || routing.missing_model_policy !== "require-explicit-effort"
    || routing.failure_policy !== "return-failure-without-effort-retry"
    || routing.max_and_ultra_are_opt_in_only !== true
    || PROVIDER_ROUTING_POLICY.safety?.unsupported_effort_is_denied !== true
    || PROVIDER_ROUTING_POLICY.safety?.automatic_effort_escalation_is_denied !== true) {
    throw new Error("provider routing UI effort policy drift");
  }
  for (const model of CODEX_UI_MODELS) {
    const entry = PROVIDER_ROUTING_POLICY.known_models?.[model];
    const effort = entry?.ui_effort_policy;
    if (entry?.required_runtime !== "codex"
      || effort?.recommended_default !== "high"
      || effort.explicit_override !== "preserve-if-supported"
      || effort.automatic_escalation_allowed !== false
      || !Array.isArray(effort.supported_efforts)
      || JSON.stringify(effort.supported_efforts) !== JSON.stringify(CODEX_UI_SUPPORTED_EFFORTS[model])) {
      throw new Error(`provider routing UI effort model policy drift: ${model}`);
    }
  }
}

assertUiEffortPolicyShape();

export const CURSOR_LIVE_MODEL_ALLOWLIST = Object.freeze([
  "cursor-grok-4.5-high",
  "composer-2.5",
  "kimi-k3-high",
  "glm-5.2-high",
]);

export const CURSOR_RUNTIME_DISPLAY_LABELS = Object.freeze({
  "cursor-grok-4.5-high": "Cursor Grok 4.5 High",
  "composer-2.5": "Composer 2.5",
  "kimi-k3-high": "Kimi K3 High",
  "glm-5.2-high": "GLM 5.2 High",
});

export function isCursorLiveModelAllowed(model) {
  return CURSOR_LIVE_MODEL_ALLOWLIST.includes(model);
}

export const CURSOR_INCLUDED_USAGE_CONFIRMATION =
  PROVIDER_ROUTING_POLICY.cursor_live.confirmation_value;

export function cursorDispatchDecision({
  model,
  billingType = process.env.OMD_CURSOR_BILLING_TYPE ?? null,
  confirmation = process.env.OMD_CURSOR_INCLUDED_USAGE_CONFIRMED ?? null,
  fakeRuntime = process.env.OMD_BENCH_FAKE_RUNTIME === "1",
} = {}) {
  const live = PROVIDER_ROUTING_POLICY.cursor_live;
  if (fakeRuntime) {
    if (live.allowed_models.includes(model)) {
      return {
        allowed: false,
        mode: "fake-calibration",
        billing_type: "fake-calibration",
        reason: "fake-runtime-cannot-use-live-cursor-model",
      };
    }
    return {
      allowed: true,
      mode: "fake-calibration",
      billing_type: "fake-calibration",
      reason: null,
    };
  }
  if (!live.allowed_models.includes(model)) {
    return {
      allowed: false,
      mode: "live",
      billing_type: billingType,
      reason: `cursor-model-denied:${model ?? "missing"}`,
    };
  }
  if (billingType !== live.required_billing_type) {
    return {
      allowed: false,
      mode: "live",
      billing_type: billingType,
      reason: `cursor-billing-not-included:${billingType ?? "missing"}`,
    };
  }
  if (confirmation !== live.confirmation_value) {
    return {
      allowed: false,
      mode: "live",
      billing_type: billingType,
      reason: "cursor-included-usage-confirmation-missing",
    };
  }
  return {
    allowed: true,
    mode: "live-included",
    billing_type: billingType,
    reason: null,
  };
}

export function assertProviderRoute({
  runtime,
  model,
  billingType,
  confirmation,
  fakeRuntime = process.env.OMD_BENCH_FAKE_RUNTIME === "1",
} = {}) {
  const known = PROVIDER_ROUTING_POLICY.known_models[model];
  const knownRuntimes = new Set(
    Object.values(PROVIDER_ROUTING_POLICY.known_models)
      .map((entry) => entry.required_runtime),
  );
  if (!knownRuntimes.has(runtime)) {
    throw new Error(
      `provider route denied by default_action=${PROVIDER_ROUTING_POLICY.default_action}: `
      + `unknown runtime ${runtime ?? "missing"}`,
    );
  }
  if (known && runtime !== known.required_runtime) {
    throw new Error(
      `provider route denied: ${model} must use ${known.required_runtime}, not ${runtime ?? "missing"}`,
    );
  }
  if (runtime !== "cursor") {
    if (!known) {
      throw new Error(
        `provider route denied by default_action=${PROVIDER_ROUTING_POLICY.default_action}: `
        + `unknown model ${model ?? "missing"} for ${runtime}`,
      );
    }
    return { allowed: true, mode: known.billing_type };
  }
  const decision = cursorDispatchDecision({ model, billingType, confirmation, fakeRuntime });
  if (!decision.allowed) {
    throw new Error(
      `provider route denied before Cursor spawn: ${decision.reason}; `
      + "Cursor is included-only and reserved for Grok",
    );
  }
  return decision;
}

export function resolveUiEffortRoute({
  runtime,
  model,
  effort = null,
  scope = "ui-design-execution",
} = {}) {
  if (runtime !== "codex") {
    if (typeof effort !== "string" || !effort) {
      throw new Error(`UI effort must be explicit for runtime ${runtime ?? "missing"}`);
    }
    return {
      effort,
      source: "explicit-runtime-effort",
      scope,
      automatic_escalation_allowed: false,
    };
  }

  const entry = PROVIDER_ROUTING_POLICY.known_models?.[model];
  const policy = entry?.ui_effort_policy;
  if (entry?.required_runtime !== "codex" || !policy) {
    if (typeof effort === "string" && effort) {
      return {
        effort,
        source: "explicit-unmanaged-model-effort",
        scope,
        automatic_escalation_allowed: false,
      };
    }
    throw new Error(`UI effort route denied for unknown Codex model: ${model ?? "missing"}`);
  }
  if (scope !== PROVIDER_ROUTING_POLICY.ui_effort_routing.scope && !effort) {
    throw new Error(`UI effort default is unavailable outside ${PROVIDER_ROUTING_POLICY.ui_effort_routing.scope}`);
  }

  const selected = effort || policy.recommended_default;
  if (!policy.supported_efforts.includes(selected)) {
    throw new Error(`unsupported UI effort for ${model}: ${selected}`);
  }
  return {
    effort: selected,
    source: effort ? "explicit-supported-effort" : "internal-descriptive-policy-default",
    scope,
    automatic_escalation_allowed: false,
  };
}

export function cursorModelEvidenceMode(requested, reported) {
  if (reported === requested) return "provider-observed";
  if (CURSOR_RUNTIME_DISPLAY_LABELS[requested] === reported) {
    return "runtime-reported-display-name";
  }
  return reported ? "provider-observed" : "cli-argument";
}

export const RUNTIME_REGISTRY = Object.freeze({
  "claude-code": Object.freeze({
    runner: "run-claude.mjs",
    expected_agent: "claude-code",
    effort_flag: "--effort",
  }),
  codex: Object.freeze({
    runner: "run-codex.mjs",
    expected_agent: "codex-cli",
    effort_flag: "--reasoning",
  }),
  cursor: Object.freeze({
    runner: "run-cursor.mjs",
    expected_agent: "cursor-agent",
    effort_flag: "--effort",
    provider_effort_flag: null,
  }),
});

export function runnerSpecForCell(cell, workspace) {
  const registered = RUNTIME_REGISTRY[cell?.runtime];
  if (!registered) throw new Error(`unsupported runtime: ${cell?.runtime ?? "<missing>"}`);
  const effortRoute = resolveUiEffortRoute({
    runtime: cell.runtime,
    model: cell.model_id,
    effort: cell.effort ?? null,
  });
  return {
    runtime: cell.runtime,
    runner: resolve(fileURLToPath(new URL(`./${registered.runner}`, import.meta.url))),
    expected_agent: registered.expected_agent,
    effort_flag: registered.effort_flag,
    effort: effortRoute.effort,
    effort_source: effortRoute.source,
    automatic_effort_escalation_allowed: effortRoute.automatic_escalation_allowed,
    provider_effort_flag: Object.hasOwn(registered, "provider_effort_flag")
      ? registered.provider_effort_flag
      : registered.effort_flag,
    args: [
      "--workspace", workspace,
      "--model", cell.model_id,
      registered.effort_flag, effortRoute.effort,
      "--timeout-ms", String(cell.timeout_seconds * 1000),
      ...(cell.runtime === "codex" && cell.host_policy_mode
        ? ["--load-user-config"]
        : []),
      ...(cell.runtime === "codex" && cell.host_policy_mode === "installed-opt-in"
        ? ["--bypass-hook-trust"]
        : []),
    ],
  };
}

export function runtimeAttributionStopReason(cell, manifest, run) {
  if (manifest?.runtime_target !== cell.runtime) return "prepared-runtime-mismatch";
  if (!run?.runtime || !run?.process || !run?.output) return "incomplete-runtime-attribution";

  const expected = RUNTIME_REGISTRY[cell.runtime];
  if (!expected) return "incomplete-runtime-attribution";
  if (run.runtime.runtime_target !== cell.runtime) return "executed-runtime-mismatch";
  if (run.runtime.agent !== expected.expected_agent) return "runtime-agent-mismatch";
  if (run.runtime.model_requested !== cell.model_id) return "requested-model-mismatch";
  if (run.runtime.effort_requested !== cell.effort) return "requested-effort-mismatch";

  const evidenceMode = run.runtime.model_evidence_mode;
  if (!["provider-observed", "runtime-reported-display-name", "cli-argument"].includes(evidenceMode)) {
    return "incomplete-runtime-attribution";
  }
  if (
    evidenceMode === "provider-observed"
    && (
      typeof run.runtime.model_reported !== "string"
      || run.runtime.model_reported !== cell.model_id
    )
  ) {
    return "reported-model-mismatch";
  }
  if (evidenceMode === "cli-argument" && run.runtime.model_reported !== null) {
    return "incomplete-runtime-attribution";
  }
  if (
    evidenceMode === "runtime-reported-display-name"
    && (
      cell.runtime !== "cursor"
      || CURSOR_RUNTIME_DISPLAY_LABELS[cell.model_id] !== run.runtime.model_reported
    )
  ) {
    return "reported-model-mismatch";
  }
  if (
    !Object.hasOwn(run.runtime, "auth_mode")
    || !Object.hasOwn(run.runtime, "provider_route")
    || !Object.hasOwn(run.process, "child_exit_code")
    || !Object.hasOwn(run.process, "spawn_error")
    || !Object.hasOwn(run.output, "diagnostic_availability")
  ) {
    return "incomplete-runtime-attribution";
  }
  if (run.output?.usage_attribution?.available !== true) {
    return "incomplete-usage-attribution";
  }
  if (run.output.usage_attribution.evidence_mode !== "provider-event") {
    return "incomplete-usage-attribution";
  }
  const usageEvents = run.output.usage_events;
  if (!Array.isArray(usageEvents) || usageEvents.length === 0) {
    return "incomplete-usage-attribution";
  }
  const hasValidUsage = usageEvents.some((event) => {
    const usage = event?.usage ?? event?.token_usage;
    if (!usage || typeof usage !== "object") return false;
    const recognized = [
      usage.input_tokens,
      usage.inputTokens,
      usage.cached_input_tokens,
      usage.cachedInputTokens,
      usage.output_tokens,
      usage.outputTokens,
    ].filter((value) => value !== undefined);
    return recognized.length > 0
      && recognized.every((value) => Number.isFinite(Number(value)) && Number(value) >= 0);
  });
  if (!hasValidUsage) return "incomplete-usage-attribution";
  return null;
}
