import { describe, expect, it } from "vitest";
import {
  buildClaudeRunnerSettings,
  inspectClaudeRunner,
  summarizeClaudeToolErrors,
  summarizeClaudeUsage,
} from "../../../benchmarks/ui-resolve-bench/scripts/check-claude-runner.mjs";

const execFor = (auth) => (command, args) => {
  if (command !== "claude") throw new Error("unexpected command");
  if (args[0] === "--version") return "2.1.217 (Claude Code)\n";
  if (args[0] === "auth") return JSON.stringify(auth);
  throw new Error("unexpected arguments");
};

describe("Claude print runner preflight", () => {
  it("keeps the workspace writable without a parent-glob sandbox collision", () => {
    const result = buildClaudeRunnerSettings({
      workspace: "/private/tmp/ubp1",
      runTempRoot: "/private/tmp/ubp1/.t",
      protectedHome: "/Users/example",
    });
    expect(result.sandbox.filesystem.allowWrite).toEqual([
      "/private/tmp/ubp1",
      "/private/tmp/ubp1/.t",
    ]);
    expect(result.permissions.allow).toContain("Edit(./**)");
    expect(result.permissions.deny).toEqual(["WebFetch", "WebSearch"]);
    expect(result.permissions.deny.some((rule) => rule.includes("../**"))).toBe(false);
  });

  it("accepts exact Opus 4.8 with unshadowed first-party subscription auth", () => {
    const result = inspectClaudeRunner({
      model: "claude-opus-4-8",
      env: {},
      exec: execFor({ loggedIn: true, authMethod: "claudeAiOauth", apiProvider: "firstParty" }),
    });
    expect(result).toMatchObject({
      ready: true,
      model: "claude-opus-4-8",
      auth: { logged_in: true, method: "claudeAiOauth", provider: "firstParty" },
    });
  });

  it("fails closed when an API key would shadow subscription OAuth", () => {
    const result = inspectClaudeRunner({
      model: "claude-opus-4-8",
      env: { ANTHROPIC_API_KEY: "redacted" },
      exec: execFor({ loggedIn: true, authMethod: "claudeAiOauth", apiProvider: "firstParty" }),
    });
    expect(result.ready).toBe(false);
    expect(result.competing_credential_env).toEqual(["ANTHROPIC_API_KEY"]);
    expect(JSON.stringify(result)).not.toContain("redacted");
  });

  it("rejects moving aliases so benchmark runs stay model-pinned", () => {
    const result = inspectClaudeRunner({
      model: "opus",
      env: {},
      exec: execFor({ loggedIn: true, authMethod: "claudeAiOauth", apiProvider: "firstParty" }),
    });
    expect(result.ready).toBe(false);
    expect(result.checks.exact_model_pinned).toBe(false);
  });

  it("rejects Claude Code builds with the absolute sandbox allowWrite defect", () => {
    const result = inspectClaudeRunner({
      model: "claude-opus-4-8",
      exec: (command, args) => {
        if (command !== "claude") throw new Error("unexpected command");
        if (args[0] === "--version") return "2.1.212 (Claude Code)\n";
        if (args[0] === "auth") return JSON.stringify({
          loggedIn: true,
          authMethod: "claudeAiOauth",
          apiProvider: "firstParty",
        });
        throw new Error("unexpected arguments");
      },
    });
    expect(result.ready).toBe(false);
    expect(result.checks.sandbox_version_safe).toBe(false);
    expect(result.next_action).toContain("2.1.217");
  });

  it("counts all Claude Code model work and treats cache creation as uncached input", () => {
    const result = summarizeClaudeUsage({
      modelUsage: {
        "claude-haiku-4-5": {
          inputTokens: 529,
          outputTokens: 20,
          cacheCreationInputTokens: 0,
          cacheReadInputTokens: 0,
          costUSD: 0.000629,
        },
        "claude-opus-4-8": {
          inputTokens: 2,
          outputTokens: 17,
          cacheCreationInputTokens: 1865,
          cacheReadInputTokens: 11,
          costUSD: 0.019085,
          contextWindow: 1000000,
        },
      },
    });
    expect(result.totals).toEqual({
      input_tokens: 2396,
      cached_input_tokens: 11,
      output_tokens: 37,
      reasoning_output_tokens: 0,
    });
    expect(result.models).toHaveLength(2);
    expect(result.models[1]).toMatchObject({
      model: "claude-opus-4-8",
      input_tokens: 1867,
      context_window: 1000000,
    });
  });

  it("classifies Claude shell cwd bookkeeping failures as infrastructure errors", () => {
    const result = summarizeClaudeToolErrors([{
      type: "user",
      message: {
        content: [{
          type: "tool_result",
          is_error: true,
          content: "Exit code 1\nzsh:1: operation not permitted: /tmp/claude-501/cwd-ab12",
        }],
      },
    }, {
      type: "user",
      message: {
        content: [{ type: "tool_result", is_error: true, content: "ordinary test failure" }],
      },
    }]);
    expect(result).toEqual({
      tool_error_count: 2,
      sandbox_error_count: 1,
      sandbox_cwd_error_count: 1,
    });
  });
});
