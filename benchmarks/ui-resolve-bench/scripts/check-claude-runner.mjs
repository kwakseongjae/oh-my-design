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

export function buildClaudeRunnerSettings({ workspace, runTempRoot, protectedHome = null, enableAgents = false }) {
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
        ...(enableAgents ? ["Agent"] : []),
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

export function claudeToolsForManifest(manifest = {}) {
  const agentHarness = manifest?.variant?.kind === "agent-harness";
  if (agentHarness && !manifest?.agents?.installed?.length) {
    throw new Error("agent-harness manifest is missing its reviewed agent bundle");
  }
  return {
    agent_harness: agentHarness,
    tools: ["Read", "Edit", "Write", "Glob", "Grep", "Bash", ...(agentHarness ? ["Agent"] : [])],
  };
}

export function summarizeClaudeAgentUsage(events = []) {
  const calls = [];
  const errorsByToolUseId = new Set();
  for (const event of events) {
    if (event?.type === "assistant" && Array.isArray(event?.message?.content)) {
      for (const item of event.message.content) {
        if (item?.type !== "tool_use" || item?.name !== "Agent") continue;
        calls.push({
          tool_use_id: item.id ?? null,
          agent_id: item?.input?.subagent_type ?? item?.input?.agent ?? item?.input?.name ?? null,
          requested_model: item?.input?.model ?? null,
        });
      }
    }
    if (event?.type === "user" && Array.isArray(event?.message?.content)) {
      for (const item of event.message.content) {
        if (item?.type === "tool_result" && item?.is_error === true && item?.tool_use_id) {
          errorsByToolUseId.add(item.tool_use_id);
        }
      }
    }
  }
  return {
    agent_tool_call_count: calls.length,
    agent_tool_error_count: calls.filter((call) => errorsByToolUseId.has(call.tool_use_id)).length,
    requested_agent_ids: [...new Set(calls.map((call) => call.agent_id).filter(Boolean))].sort(),
    agent_calls: calls.map(({ agent_id, requested_model }) => ({ agent_id, requested_model })),
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
  // Anthropic model families do not share one numeric shape: Opus 4.8 is
  // `claude-opus-4-8`, while Fable 5 is `claude-fable-5`. Accept immutable
  // full IDs with one or more numeric segments, but continue to reject moving
  // aliases such as `opus`, `fable`, or `latest`.
  const exactModelPinned = /^claude-[a-z]+-\d+(?:-\d+)*$/.test(model);
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
  const toolUses = new Map(events.flatMap((event) => (
    event?.type === "assistant" && Array.isArray(event?.message?.content)
      ? event.message.content
        .filter((item) => item?.type === "tool_use" && item?.id)
        .map((item) => [item.id, item])
      : []
  )));
  const toolResults = events.flatMap((event) => (
    event?.type === "user" && Array.isArray(event?.message?.content)
      ? event.message.content
        .filter((item) => item?.type === "tool_result")
        .map((item) => ({ item, tool: toolUses.get(item.tool_use_id) ?? null }))
      : []
  ));
  const toolErrors = toolResults.filter(({ item }) => item?.is_error === true);
  // Shell pipelines can mask a renderer's non-zero exit status. Keep the
  // provider's explicit tool-error totals intact, but observe known renderer
  // environment blocks in every linked result so benchmark telemetry cannot
  // silently miss a failed Chrome/qlmanage probe reported as is_error:false.
  const optionalRendererErrors = toolResults.filter(({ item, tool }) => {
    const command = String(tool?.input?.command ?? "");
    const content = String(item?.content ?? "");
    const isRenderer = /\bqlmanage\b|(?:Google Chrome|Chromium|Chrome)[^\n]*--headless|--headless[^\n]*(?:Google Chrome|Chromium|Chrome)/i
      .test(command);
    const isEnvironmentBlock = /sandbox initialization failed|ProcessSingleton|crashpad|Failed to create socket directory/i
      .test(content);
    return tool?.name === "Bash" && isRenderer && isEnvironmentBlock;
  });
  const optionalRendererItems = new Set(optionalRendererErrors.map(({ item }) => item));
  // Claude's strict sandbox exposes a writable per-run TMPDIR, but models may
  // occasionally try a simple literal `/tmp/file` first and immediately repeat
  // the same scratch operation under `$TMPDIR`. Treat only that fully observed
  // recovery as recoverable:
  // - Bash (never a built-in file tool)
  // - a direct-child `/tmp/<simple-name>` permission failure
  // - a later successful Bash call that references the same basename and TMPDIR
  // - a successful provider result
  //
  // Arbitrary paths, cwd bookkeeping failures, built-in permission denials,
  // unrecovered attempts, and runs without a successful final result remain
  // infrastructure failures.
  const providerCompletedSuccessfully = events.some((event) => (
    event?.type === "result"
    && event?.subtype === "success"
    && event?.is_error === false
  ));
  const recoveredTempPathItems = new Set();
  if (providerCompletedSuccessfully) {
    toolResults.forEach(({ item, tool }, index) => {
      if (item?.is_error !== true || tool?.name !== "Bash") return;
      const content = String(item?.content ?? "");
      const command = String(tool?.input?.command ?? "");
      const match = content.match(
        /(?:PermissionError:[^\n]*|operation not permitted:)\s*['"]?(\/tmp\/([A-Za-z0-9][A-Za-z0-9._-]{0,127}))(?![\/A-Za-z0-9._-])['"]?/i,
      );
      if (!match || !command.includes(match[1])) return;
      const basename = match[2];
      const recovered = toolResults.slice(index + 1).some(({ item: laterItem, tool: laterTool }) => {
        if (laterItem?.is_error === true || laterTool?.name !== "Bash") return false;
        const laterCommand = String(laterTool?.input?.command ?? "");
        return laterCommand.includes(basename) && /\bTMPDIR\b/.test(laterCommand);
      });
      if (recovered) recoveredTempPathItems.add(item);
    });
  }
  const sandboxCwdErrors = toolErrors.filter(({ item }) => (
    /operation not permitted:\s+\S*\/cwd-[\w-]+/i.test(String(item?.content ?? ""))
  ));
  const sandboxErrors = toolErrors.filter(({ item }) => (
    !optionalRendererItems.has(item) &&
    !recoveredTempPathItems.has(item) &&
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
    optional_verifier_environment_error_count: optionalRendererErrors.length,
    recovered_temp_path_error_count: recoveredTempPathItems.size,
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
