import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

const DIRECT_HOOK_ELIGIBLE_TOOL_MODES = new Set(["function"]);

function canonicalJson(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => (
      `${JSON.stringify(key)}:${canonicalJson(value[key])}`
    )).join(",")}}`;
  }
  return JSON.stringify(value);
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

export function codexModelCachePath(env = process.env) {
  const home = resolve(env.OMD_BENCH_AUTH_CODEX_HOME ?? join(homedir(), ".codex"));
  return join(home, "models_cache.json");
}

export function inspectCodexModelToolMode(modelId, env = process.env) {
  const path = codexModelCachePath(env);
  if (!existsSync(path)) {
    return {
      model_id: modelId,
      tool_mode: null,
      installed_policy_eligible: false,
      reason: "model-cache-missing",
      cache_path: path,
      cache_sha256: null,
      model_profile_sha256: null,
      cache_fetched_at: null,
      cache_client_version: null,
    };
  }
  const source = readFileSync(path);
  let cache;
  try {
    cache = JSON.parse(source.toString("utf8"));
  } catch {
    return {
      model_id: modelId,
      tool_mode: null,
      installed_policy_eligible: false,
      reason: "model-cache-invalid",
      cache_path: path,
      cache_sha256: createHash("sha256").update(source).digest("hex"),
      model_profile_sha256: null,
      cache_fetched_at: null,
      cache_client_version: null,
    };
  }
  const profile = Array.isArray(cache?.models)
    ? cache.models.find((entry) => entry?.slug === modelId || entry?.id === modelId)
    : null;
  const toolMode = typeof profile?.tool_mode === "string" ? profile.tool_mode : null;
  return {
    model_id: modelId,
    tool_mode: toolMode,
    installed_policy_eligible: DIRECT_HOOK_ELIGIBLE_TOOL_MODES.has(toolMode),
    reason: profile ? (toolMode ? null : "tool-mode-missing") : "model-profile-missing",
    cache_path: path,
    cache_sha256: createHash("sha256").update(source).digest("hex"),
    model_profile_sha256: profile ? sha256(canonicalJson(profile)) : null,
    cache_fetched_at: cache?.fetched_at ?? null,
    cache_client_version: cache?.client_version ?? null,
  };
}

export function installedCodexPolicyToolModeStopReason(observation) {
  if (observation?.installed_policy_eligible === true) return null;
  return `codex-installed-policy-tool-mode-uninterceptable:${observation?.model_id ?? "unknown"}:${observation?.tool_mode ?? observation?.reason ?? "unknown"}`;
}
