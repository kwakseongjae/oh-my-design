import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

const DIRECT_HOOK_ELIGIBLE_TOOL_MODES = new Set(["function"]);
export const CODEX_REASONING_EFFORTS = Object.freeze([
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
  "ultra",
]);
const CODEX_REASONING_EFFORT_SET = new Set(CODEX_REASONING_EFFORTS);

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

function semanticCacheSha256(cache) {
  if (!cache || typeof cache !== "object" || Array.isArray(cache)) return null;
  const { fetched_at: _volatileFetchedAt, ...stable } = cache;
  return sha256(canonicalJson(stable));
}

export function codexModelCachePath(env = process.env) {
  const home = resolve(env.OMD_BENCH_AUTH_CODEX_HOME ?? join(homedir(), ".codex"));
  return join(home, "models_cache.json");
}

function readCodexModelCache(env = process.env) {
  const path = codexModelCachePath(env);
  if (!existsSync(path)) {
    return {
      ready: false,
      reason: "model-cache-missing",
      cache_path: path,
      cache_sha256: null,
      cache_semantic_sha256: null,
      cache_fetched_at: null,
      cache_client_version: null,
      cache: null,
    };
  }
  const source = readFileSync(path);
  const cacheSha256 = createHash("sha256").update(source).digest("hex");
  try {
    const cache = JSON.parse(source.toString("utf8"));
    if (!Array.isArray(cache?.models)) {
      return {
        ready: false,
        reason: "model-cache-invalid",
        cache_path: path,
        cache_sha256: cacheSha256,
        cache_semantic_sha256: null,
        cache_fetched_at: cache?.fetched_at ?? null,
        cache_client_version: cache?.client_version ?? null,
        cache: null,
      };
    }
    return {
      ready: true,
      reason: null,
      cache_path: path,
      cache_sha256: cacheSha256,
      cache_semantic_sha256: semanticCacheSha256(cache),
      cache_fetched_at: cache?.fetched_at ?? null,
      cache_client_version: cache?.client_version ?? null,
      cache,
    };
  } catch {
    return {
      ready: false,
      reason: "model-cache-invalid",
      cache_path: path,
      cache_sha256: cacheSha256,
      cache_semantic_sha256: null,
      cache_fetched_at: null,
      cache_client_version: null,
      cache: null,
    };
  }
}

function reasoningProfile(profile) {
  if (!profile) {
    return {
      default_effort: null,
      supported_efforts: [],
      reasoning_profile_valid: false,
      reasoning_profile_reason: "model-profile-missing",
    };
  }
  const defaultEffort = profile.default_reasoning_level;
  const levels = profile.supported_reasoning_levels;
  if (
    typeof defaultEffort !== "string"
    || !CODEX_REASONING_EFFORT_SET.has(defaultEffort)
    || !Array.isArray(levels)
    || levels.length === 0
  ) {
    return {
      default_effort: typeof defaultEffort === "string" ? defaultEffort : null,
      supported_efforts: [],
      reasoning_profile_valid: false,
      reasoning_profile_reason: "reasoning-profile-invalid",
    };
  }
  const supportedEfforts = levels.map((entry) => entry?.effort);
  if (
    supportedEfforts.some((effort) => typeof effort !== "string" || !CODEX_REASONING_EFFORT_SET.has(effort))
    || new Set(supportedEfforts).size !== supportedEfforts.length
    || !supportedEfforts.includes(defaultEffort)
  ) {
    return {
      default_effort: defaultEffort,
      supported_efforts: supportedEfforts.filter((effort) => typeof effort === "string"),
      reasoning_profile_valid: false,
      reasoning_profile_reason: "reasoning-profile-invalid",
    };
  }
  return {
    default_effort: defaultEffort,
    supported_efforts: supportedEfforts,
    reasoning_profile_valid: true,
    reasoning_profile_reason: null,
  };
}

/** Inspect the exact model/effort profile in the current Codex models cache. */
function modelEffortObservation(modelId, cacheObservation) {
  const profile = cacheObservation.ready
    ? cacheObservation.cache.models.find((entry) => entry?.slug === modelId)
    : null;
  const reasoning = reasoningProfile(profile);
  return {
    model_id: modelId,
    ready: cacheObservation.ready && Boolean(profile) && reasoning.reasoning_profile_valid,
    reason: cacheObservation.reason
      ?? (!profile ? "model-profile-missing" : reasoning.reasoning_profile_reason),
    cache_path: cacheObservation.cache_path,
    cache_sha256: cacheObservation.cache_sha256,
    cache_fetched_at: cacheObservation.cache_fetched_at,
    cache_client_version: cacheObservation.cache_client_version,
    model_profile_sha256: profile ? sha256(canonicalJson(profile)) : null,
    ...reasoning,
  };
}

export function inspectCodexModelEffortProfile(modelId, env = process.env) {
  return modelEffortObservation(modelId, readCodexModelCache(env));
}

/** Build a schema-0.3 plan lock directly from the current Codex cache. */
export function inspectCodexModelEffortContract(modelIds, env = process.env) {
  const ids = [...new Set(modelIds ?? [])];
  const cacheObservation = readCodexModelCache(env);
  const profiles = ids.map((modelId) => modelEffortObservation(modelId, cacheObservation));
  const cachePinReady = typeof cacheObservation.cache_sha256 === "string"
    && typeof cacheObservation.cache_fetched_at === "string"
    && Boolean(cacheObservation.cache_fetched_at)
    && typeof cacheObservation.cache_client_version === "string"
    && Boolean(cacheObservation.cache_client_version);
  return {
    ready: ids.length > 0 && cachePinReady && profiles.every((profile) => profile.ready),
    reason: ids.length === 0
      ? "model-ids-missing"
      : (!cachePinReady ? cacheObservation.reason ?? "model-cache-metadata-missing" : null)
        ?? profiles.find((profile) => !profile.ready)?.reason
        ?? null,
    contract: {
      cache_sha256: cacheObservation.cache_sha256,
      cache_fetched_at: cacheObservation.cache_fetched_at,
      cache_client_version: cacheObservation.cache_client_version,
      models: profiles.map((profile) => ({
        model_id: profile.model_id,
        model_profile_sha256: profile.model_profile_sha256,
        default_effort: profile.default_effort,
        supported_efforts: profile.supported_efforts,
      })),
    },
    observations: profiles,
  };
}

export function inspectCodexModelToolMode(modelId, env = process.env) {
  const cacheObservation = readCodexModelCache(env);
  const path = cacheObservation.cache_path;
  if (!cacheObservation.ready) {
    return {
      model_id: modelId,
      tool_mode: null,
      installed_policy_eligible: false,
      reason: cacheObservation.reason,
      cache_path: path,
      cache_sha256: cacheObservation.cache_sha256,
      cache_semantic_sha256: cacheObservation.cache_semantic_sha256,
      model_profile_sha256: null,
      cache_fetched_at: null,
      cache_client_version: null,
    };
  }
  const cache = cacheObservation.cache;
  const profile = Array.isArray(cache?.models)
    ? cache.models.find((entry) => entry?.slug === modelId)
    : null;
  const toolMode = typeof profile?.tool_mode === "string" ? profile.tool_mode : null;
  return {
    model_id: modelId,
    tool_mode: toolMode,
    installed_policy_eligible: DIRECT_HOOK_ELIGIBLE_TOOL_MODES.has(toolMode),
    reason: profile ? (toolMode ? null : "tool-mode-missing") : "model-profile-missing",
    cache_path: path,
    cache_sha256: cacheObservation.cache_sha256,
    cache_semantic_sha256: cacheObservation.cache_semantic_sha256,
    model_profile_sha256: profile ? sha256(canonicalJson(profile)) : null,
    cache_fetched_at: cacheObservation.cache_fetched_at,
    cache_client_version: cacheObservation.cache_client_version,
  };
}

export function installedCodexPolicyToolModeStopReason(observation) {
  if (observation?.installed_policy_eligible === true) return null;
  return `codex-installed-policy-tool-mode-uninterceptable:${observation?.model_id ?? "unknown"}:${observation?.tool_mode ?? observation?.reason ?? "unknown"}`;
}

export function inspectCodexCliRuntime({
  codexBin = process.env.OMD_BENCH_CODEX_BIN ?? "codex",
  probe,
} = {}) {
  const result = probe ? probe(codexBin) : spawnSync(codexBin, ["--version"], {
    encoding: "utf8",
    timeout: 10_000,
  });
  const output = `${String(result?.stdout ?? "")}\n${String(result?.stderr ?? "")}`.trim();
  const match = output.match(/codex-cli\s+([^\s]+)/i);
  return {
    executable: codexBin,
    version: match?.[1] ?? null,
    ready: result?.status === 0 && Boolean(match),
    output: output.replace(/\s+/g, " ").slice(0, 240),
  };
}
