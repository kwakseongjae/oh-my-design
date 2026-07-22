#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { parseArgs } from "./_lib.mjs";

const CREDENTIAL_ENV = [
  "ANTHROPIC_API_KEY",
  "ANTHROPIC_AUTH_TOKEN",
  "CLAUDE_CODE_OAUTH_TOKEN",
  "CLAUDE_CODE_USE_BEDROCK",
  "CLAUDE_CODE_USE_VERTEX",
  "CLAUDE_CODE_USE_FOUNDRY",
];

export function inspectClaudeRunner({
  model = "claude-opus-4-8",
  env = process.env,
  exec = execFileSync,
} = {}) {
  const version = exec("claude", ["--version"], { encoding: "utf8" }).trim();
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
    auth: {
      logged_in: auth.loggedIn === true,
      method: auth.authMethod ?? null,
      provider: auth.apiProvider ?? null,
    },
    competing_credential_env: competingCredentials,
    checks,
    next_action: auth.loggedIn === true
      ? (competingCredentials.length ? "Unset competing provider credentials before a subscription run." : null)
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

function main() {
  const args = parseArgs();
  const result = inspectClaudeRunner({ model: String(args.get("model") ?? "claude-opus-4-8") });
  console.log(JSON.stringify(result, null, 2));
  if (!result.ready) process.exitCode = 1;
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) main();
