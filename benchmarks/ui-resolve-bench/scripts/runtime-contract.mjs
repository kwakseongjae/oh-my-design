import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

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
  return {
    runtime: cell.runtime,
    runner: resolve(fileURLToPath(new URL(`./${registered.runner}`, import.meta.url))),
    expected_agent: registered.expected_agent,
    effort_flag: registered.effort_flag,
    provider_effort_flag: Object.hasOwn(registered, "provider_effort_flag")
      ? registered.provider_effort_flag
      : registered.effort_flag,
    args: [
      "--workspace", workspace,
      "--model", cell.model_id,
      registered.effort_flag, cell.effort,
      "--timeout-ms", String(cell.timeout_seconds * 1000),
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
