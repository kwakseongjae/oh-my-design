#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { relative, resolve } from "node:path";
import { parseArgs } from "./_lib.mjs";

const CREDENTIAL_ENV = [
  "ANTHROPIC_API_KEY",
  "ANTHROPIC_AUTH_TOKEN",
  "CLAUDE_CODE_OAUTH_TOKEN",
  "CLAUDE_CODE_USE_BEDROCK",
  "CLAUDE_CODE_USE_VERTEX",
  "CLAUDE_CODE_USE_FOUNDRY",
];

export const CLAUDE_PERMISSION_MODE = "acceptEdits";

export function buildClaudeRunnerSettings({ workspace, runTempRoot, protectedHome = null }) {
  const sandboxRoots = [workspace, runTempRoot];
  const workspaceRules = ["./**", `${workspace}/**`];
  return {
    sandbox: {
      enabled: true,
      failIfUnavailable: true,
      autoAllowBashIfSandboxed: true,
      allowUnsandboxedCommands: false,
      filesystem: {
        allowRead: sandboxRoots,
        allowWrite: sandboxRoots,
        ...(protectedHome ? { denyRead: [protectedHome] } : {}),
      },
    },
    permissions: {
      allow: [
        ...workspaceRules.flatMap((root) => [
          `Read(${root})`,
          `Edit(${root})`,
          `Write(${root})`,
          `Glob(${root})`,
          `Grep(${root})`,
        ]),
        "Bash",
      ],
      // In dontAsk mode, non-allowlisted file-tool requests already fail closed.
      // Do not add ../** denies: Claude merges Edit/Read denies into its native
      // sandbox and the parent glob also covers the workspace itself.
      deny: ["WebFetch", "WebSearch"],
    },
    includeCoAuthoredBy: false,
    includeGitInstructions: false,
  };
}

export function buildClaudeChildEnv({ env = process.env, runTempRoot }) {
  const childEnv = {};
  for (const key of ["HOME", "PATH", "LANG", "LC_ALL", "TERM", "USER", "SHELL"]) {
    if (env[key]) childEnv[key] = env[key];
  }
  return {
    ...childEnv,
    TMPDIR: runTempRoot,
    CLAUDE_CODE_TMPDIR: runTempRoot,
    CLAUDE_CODE_DISABLE_AUTO_MEMORY: "1",
    CLAUDE_CODE_DISABLE_BACKGROUND_TASKS: "1",
    CLAUDE_CODE_AUTO_CONNECT_IDE: "false",
    DISABLE_TELEMETRY: "1",
    DO_NOT_TRACK: "1",
    CI: "1",
  };
}

export function summarizeClaudeMilestones(events = [], {
  workspace,
  startedAt,
  productIgnore = [],
} = {}) {
  const startedMs = Date.parse(startedAt);
  const ignored = new Set(productIgnore);
  const writeTimes = [];
  for (const event of events) {
    if (event?.type !== "assistant" || !Array.isArray(event?.message?.content)) continue;
    for (const item of event.message.content) {
      if (item?.type !== "tool_use" || !["Edit", "Write", "NotebookEdit"].includes(item?.name)) continue;
      const rawPath = item?.input?.file_path ?? item?.input?.filePath ?? item?.input?.notebook_path;
      if (!rawPath) continue;
      const absolutePath = resolve(workspace, String(rawPath));
      const productPath = relative(workspace, absolutePath);
      if (!productPath || productPath.startsWith("..") || productPath.split("/").some((part) => ignored.has(part))) {
        continue;
      }
      const timestamp = Date.parse(event.timestamp);
      if (Number.isFinite(timestamp) && Number.isFinite(startedMs)) writeTimes.push(timestamp - startedMs);
    }
  }
  const resultEvent = [...events].reverse().find((event) => event?.type === "result");
  const resultMs = Date.parse(resultEvent?.timestamp);
  return {
    first_builtin_product_write_ms: writeTimes.length ? Math.min(...writeTimes) : null,
    last_builtin_product_write_ms: writeTimes.length ? Math.max(...writeTimes) : null,
    final_result_ms: Number.isFinite(resultMs) && Number.isFinite(startedMs) ? resultMs - startedMs : null,
  };
}

export function inspectClaudeRunner({
  model = "claude-opus-4-8",
  minimumVersion = "2.1.217",
  env = process.env,
  exec = execFileSync,
} = {}) {
  const version = exec("claude", ["--version"], { encoding: "utf8" }).trim();
  const versionNumber = version.match(/\d+\.\d+\.\d+/)?.[0] ?? "0.0.0";
  const versionParts = (value) => value.split(".").map((part) => Number(part));
  const received = versionParts(versionNumber);
  const required = versionParts(minimumVersion);
  const firstVersionDifference = received.findIndex((part, index) => part !== required[index]);
  const sandboxVersionSafe = firstVersionDifference === -1
    || received[firstVersionDifference] > required[firstVersionDifference];
  let auth;
  try {
    auth = JSON.parse(exec("claude", ["auth", "status"], { encoding: "utf8" }));
  } catch (error) {
    try {
      auth = JSON.parse(String(error.stdout ?? ""));
    } catch {
      auth = { loggedIn: false, authMethod: "unknown", apiProvider: "unknown", error: error.message };
    }
  }
  const competingCredentials = CREDENTIAL_ENV.filter((key) => Boolean(env[key]));
  const exactModelPinned = /^claude-[a-z]+-\d+-\d+(?:-\d+)?$/.test(model);
  const subscriptionAuth = auth.loggedIn === true
    && auth.apiProvider === "firstParty"
    && !competingCredentials.length;
  const checks = {
    claude_available: Boolean(version),
    sandbox_version_safe: sandboxVersionSafe,
    authenticated: auth.loggedIn === true,
    first_party_provider: auth.apiProvider === "firstParty",
    subscription_credentials_unshadowed: competingCredentials.length === 0,
    exact_model_pinned: exactModelPinned,
  };
  return {
    schema_version: "0.1",
    ready: Object.values(checks).every(Boolean) && subscriptionAuth,
    model,
    version,
    minimum_version: minimumVersion,
    auth: {
      logged_in: auth.loggedIn === true,
      method: auth.authMethod ?? null,
      provider: auth.apiProvider ?? null,
    },
    competing_credential_env: competingCredentials,
    checks,
    next_action: auth.loggedIn === true
      ? (!sandboxVersionSafe
        ? `Update Claude Code to ${minimumVersion} or newer before a sandboxed benchmark run.`
        : (competingCredentials.length ? "Unset competing provider credentials before a subscription run." : null))
      : "Run `claude auth login`, choose the Claude subscription account, then rerun this check.",
  };
}

export function summarizeClaudeUsage(resultEvent) {
  const byModel = Object.entries(resultEvent?.modelUsage ?? {});
  if (byModel.length) {
    const totals = byModel.reduce((sum, [, usage]) => ({
      input_tokens: sum.input_tokens
        + Number(usage.inputTokens ?? 0)
        + Number(usage.cacheCreationInputTokens ?? 0),
      cached_input_tokens: sum.cached_input_tokens + Number(usage.cacheReadInputTokens ?? 0),
      output_tokens: sum.output_tokens + Number(usage.outputTokens ?? 0),
      reasoning_output_tokens: sum.reasoning_output_tokens + Number(usage.reasoningOutputTokens ?? 0),
    }), { input_tokens: 0, cached_input_tokens: 0, output_tokens: 0, reasoning_output_tokens: 0 });
    return {
      totals,
      models: byModel.map(([model, usage]) => ({
        model,
        input_tokens: Number(usage.inputTokens ?? 0) + Number(usage.cacheCreationInputTokens ?? 0),
        cached_input_tokens: Number(usage.cacheReadInputTokens ?? 0),
        output_tokens: Number(usage.outputTokens ?? 0),
        cost_usd: Number.isFinite(Number(usage.costUSD)) ? Number(usage.costUSD) : null,
        context_window: Number.isFinite(Number(usage.contextWindow)) ? Number(usage.contextWindow) : null,
        max_output_tokens: Number.isFinite(Number(usage.maxOutputTokens)) ? Number(usage.maxOutputTokens) : null,
      })),
    };
  }
  const usage = resultEvent?.usage;
  if (!usage) return { totals: null, models: [] };
  return {
    totals: {
      input_tokens: Number(usage.input_tokens ?? 0) + Number(usage.cache_creation_input_tokens ?? 0),
      cached_input_tokens: Number(usage.cache_read_input_tokens ?? 0),
      output_tokens: Number(usage.output_tokens ?? 0),
      reasoning_output_tokens: Number(usage.reasoning_output_tokens ?? 0),
    },
    models: [],
  };
}

export function summarizeClaudeToolErrors(events = []) {
  const toolErrors = events.flatMap((event) => (
    event?.type === "user" && Array.isArray(event?.message?.content)
      ? event.message.content.filter((item) => item?.type === "tool_result" && item?.is_error === true)
      : []
  ));
  const sandboxCwdErrors = toolErrors.filter((item) => (
    /operation not permitted:\s+\S*\/cwd-[\w-]+/i.test(String(item?.content ?? ""))
  ));
  const sandboxErrors = toolErrors.filter((item) => (
    /\b(?:EPERM|operation not permitted)\b|requested permissions to (?:read from|write to)|permission to use (?:Read|Edit|Write|Glob|Grep|Bash) has been denied/i
      .test(String(item?.content ?? ""))
  ));
  // A red verifier is useful implementation feedback when the agent repairs it,
  // completes normally, and the frozen evaluator still runs. Keep that signal,
  // but do not collapse it into the same failure class as a sandbox breach.
  // Process/auth/model/timeout failures are recorded outside tool results.
  const infrastructureToolErrors = sandboxErrors;
  return {
    tool_error_count: toolErrors.length,
    recoverable_tool_error_count: toolErrors.length - infrastructureToolErrors.length,
    infrastructure_tool_error_count: infrastructureToolErrors.length,
    sandbox_error_count: sandboxErrors.length,
    sandbox_cwd_error_count: sandboxCwdErrors.length,
  };
}

function main() {
  const args = parseArgs();
  const result = inspectClaudeRunner({ model: String(args.get("model") ?? "claude-opus-4-8") });
  console.log(JSON.stringify(result, null, 2));
  if (!result.ready) process.exitCode = 1;
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) main();
