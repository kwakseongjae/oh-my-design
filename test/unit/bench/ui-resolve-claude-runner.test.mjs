import { describe, expect, it } from "vitest";
import {
  CLAUDE_PERMISSION_MODE,
  buildClaudeChildEnv,
  buildClaudeRunnerSettings,
  claudeToolsForManifest,
  inspectClaudeRunner,
  summarizeClaudeMilestones,
  summarizeClaudeAgentUsage,
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
  it("uses acceptEdits inside the fail-closed native sandbox", () => {
    expect(CLAUDE_PERMISSION_MODE).toBe("acceptEdits");
  });

  it("isolates print runs from auto-memory and background state", () => {
    const result = buildClaudeChildEnv({
      env: { HOME: "/Users/example", PATH: "/bin", TMPDIR: "/host/tmp" },
      runTempRoot: "/private/tmp/run/.t",
    });
    expect(result).toMatchObject({
      HOME: "/Users/example",
      PATH: "/bin",
      TMPDIR: "/private/tmp/run/.t",
      CLAUDE_CODE_TMPDIR: "/private/tmp/run/.t",
      CLAUDE_CODE_DISABLE_AUTO_MEMORY: "1",
      CLAUDE_CODE_DISABLE_BACKGROUND_TASKS: "1",
      CLAUDE_CODE_AUTO_CONNECT_IDE: "false",
    });
  });

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
    expect(result.permissions.allow).toContain("Edit(/private/tmp/ubp1/**)");
    expect(result.permissions.deny).toEqual(["WebFetch", "WebSearch"]);
    expect(result.permissions.deny.some((rule) => rule.includes("../**"))).toBe(false);
  });

  it("enables Agent only for a manifest with a reviewed harness bundle", () => {
    expect(claudeToolsForManifest({ variant: { kind: "local-skill" } })).toEqual({
      agent_harness: false,
      tools: ["Read", "Edit", "Write", "Glob", "Grep", "Bash"],
    });
    expect(claudeToolsForManifest({
      variant: { kind: "agent-harness" },
      agents: { installed: [{ id: "omd-ux-writer" }] },
    })).toEqual({
      agent_harness: true,
      tools: ["Read", "Edit", "Write", "Glob", "Grep", "Bash", "Agent"],
    });
    expect(() => claudeToolsForManifest({ variant: { kind: "agent-harness" } }))
      .toThrow(/missing its reviewed agent bundle/);
    expect(buildClaudeRunnerSettings({
      workspace: "/tmp/run",
      runTempRoot: "/tmp/run/.t",
      enableAgents: true,
    }).permissions.allow).toContain("Agent");
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
      recoverable_tool_error_count: 1,
      infrastructure_tool_error_count: 1,
      sandbox_error_count: 1,
      sandbox_cwd_error_count: 1,
    });
  });

  it("classifies built-in file-tool permission denials as infrastructure errors", () => {
    expect(summarizeClaudeToolErrors([{
      type: "user",
      message: {
        content: [{
          type: "tool_result",
          is_error: true,
          content: "Permission to use Edit has been denied because Claude Code is running in don't ask mode.",
        }],
      },
    }])).toEqual({
      tool_error_count: 1,
      recoverable_tool_error_count: 0,
      infrastructure_tool_error_count: 1,
      sandbox_error_count: 1,
      sandbox_cwd_error_count: 0,
    });
  });

  it("records built-in product writes without counting benchmark or skill files", () => {
    const events = [{
      type: "assistant",
      timestamp: "2026-07-22T00:00:02.000Z",
      message: { content: [{ type: "tool_use", name: "Read", input: { file_path: "/tmp/run/index.html" } }] },
    }, {
      type: "assistant",
      timestamp: "2026-07-22T00:00:03.000Z",
      message: { content: [{ type: "tool_use", name: "Write", input: { file_path: "/tmp/run/.benchmark/note" } }] },
    }, {
      type: "assistant",
      timestamp: "2026-07-22T00:00:04.000Z",
      message: { content: [{ type: "tool_use", name: "Edit", input: { file_path: "/tmp/run/index.html" } }] },
    }, {
      type: "result",
      timestamp: "2026-07-22T00:00:09.000Z",
    }];
    expect(summarizeClaudeMilestones(events, {
      workspace: "/tmp/run",
      startedAt: "2026-07-22T00:00:00.000Z",
      productIgnore: [".benchmark", ".claude"],
    })).toEqual({
      first_builtin_product_write_ms: 4000,
      last_builtin_product_write_ms: 4000,
      final_result_ms: 9000,
    });
  });

  it("records requested specialist roles and agent-tool failures", () => {
    const events = [{
      type: "assistant",
      message: { content: [{
        type: "tool_use",
        name: "Agent",
        id: "tool-1",
        input: { subagent_type: "omd-ux-writer" },
      }, {
        type: "tool_use",
        name: "Agent",
        id: "tool-2",
        input: { subagent_type: "omd-ux-engineer" },
      }] },
    }, {
      type: "user",
      message: { content: [{ type: "tool_result", tool_use_id: "tool-2", is_error: true }] },
    }];
    expect(summarizeClaudeAgentUsage(events)).toEqual({
      agent_tool_call_count: 2,
      agent_tool_error_count: 1,
      requested_agent_ids: ["omd-ux-engineer", "omd-ux-writer"],
    });
  });
});
