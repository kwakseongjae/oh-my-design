import { describe, expect, it } from "vitest";
import { initialProofPolicyState } from "../../../benchmarks/ui-resolve-bench/scripts/proof-policy-state.mjs";
import { classifyProofTrace } from "../../../benchmarks/ui-resolve-bench/scripts/proof-trace-contract.mjs";
import {
  applyHookPayload,
  hookEditPaths,
  hookToolOutcome,
  hookToolSucceeded,
  proofPolicyHookDecision,
  proofPolicyStopDecision,
} from "../../../benchmarks/ui-resolve-bench/scripts/proof-policy-hook-mapper.mjs";

const pre = (command) => ({
  hook_event_name: "PreToolUse",
  tool_name: "Bash",
  tool_input: { command },
});
const post = (command, response = { exit_code: 0 }) => ({
  hook_event_name: "PostToolUse",
  tool_name: "Bash",
  tool_input: { command },
  tool_response: response,
});
const edit = (tool_name, tool_input) => ({
  hook_event_name: "PostToolUse",
  tool_name,
  tool_input,
  tool_response: { status: "completed" },
});
const nativePre = (tool_name, tool_input = {}) => ({
  hook_event_name: "PreToolUse",
  tool_name,
  tool_input,
});
const nativePost = (tool_name, tool_input = {}, response = { status: "completed" }) => ({
  hook_event_name: "PostToolUse",
  tool_name,
  tool_input,
  tool_response: response,
});

function run(payloads) {
  return payloads.reduce(applyHookPayload, initialProofPolicyState());
}

describe("proof policy host hook mapper", () => {
  it("normalizes Claude edit paths and Codex apply_patch markers", () => {
    expect(hookEditPaths(edit("Edit", { file_path: "/tmp/run/src/App.tsx" })))
      .toEqual(["/tmp/run/src/App.tsx"]);
    expect(hookEditPaths(edit("apply_patch", {
      command: "*** Begin Patch\n*** Update File: src/App.tsx\n*** Add File: src/new.css\n*** End Patch",
    }))).toEqual(["src/App.tsx", "src/new.css"]);
  });

  it("fails closed on absent or explicit failed tool responses", () => {
    expect(hookToolSucceeded({})).toBe(false);
    expect(hookToolSucceeded({ tool_response: { exit_code: 1 } })).toBe(false);
    expect(hookToolSucceeded({ tool_response: { is_error: true } })).toBe(false);
    expect(hookToolSucceeded({ tool_response: { exit_code: 0 } })).toBe(true);
  });

  it("does not promote Codex output-only hook responses to proof success", () => {
    expect(hookToolOutcome({ tool_response: "10: <h1>after</h1>\n" })).toBe("unresolved");
    expect(hookToolOutcome({ tool_response: "Usage: browser-harness <command>\n" })).toBe("unresolved");
    expect(hookToolOutcome({ tool_response: { exit_code: 0 } })).toBe("passed");
    expect(hookToolOutcome({ tool_response: { exit_code: 1 } })).toBe("failed");
  });

  it("closes the attempt budget without claiming success for Codex string responses", () => {
    const state = run([
      edit("apply_patch", {
        command: "*** Begin Patch\n*** Update File: /tmp/run/index.html\n*** End Patch",
      }),
      pre("rg -n after index.html"),
      post("rg -n after index.html", "10: <h1>after</h1>\n"),
      pre("browser-harness capture_screenshot"),
      post("browser-harness capture_screenshot", "Usage: browser-harness <command>\n"),
    ]);
    expect(state).toMatchObject({
      static_closure: "closed",
      browser_proof: "unresolved",
      browser_attempts: 1,
      delivery: "ready",
    });
    expect(state.decisions.map((entry) => entry.reason)).toContain("static-closure-observed");
    expect(state.decisions.map((entry) => entry.reason)).toContain("browser-proof-unresolved");
  });

  it("does not consume browser proof when the agent only reads browser-harness instructions", () => {
    const state = run([
      edit("Edit", { file_path: "/tmp/run/index.html" }),
      pre("rg -n after index.html"),
      post("rg -n after index.html"),
      pre("sed -n '1,240p' /Users/me/Developer/browser-harness/SKILL.md"),
    ]);
    expect(state).toMatchObject({
      browser_proof: "open",
      browser_attempts: 0,
      delivery: "blocked",
    });
    expect(state.decisions.at(-1)).toMatchObject({ reason: "static-closure-closed" });
  });

  it("observes native Codex browser tools without consuming session-management calls", () => {
    const state = run([
      edit("apply_patch", {
        command: "*** Begin Patch\n*** Update File: /tmp/run/index.html\n*** End Patch",
      }),
      pre("npm test"),
      post("npm test"),
      nativePre("mcp__agent-browser__browser_new_session", { viewport: { width: 390 } }),
      nativePost("mcp__agent-browser__browser_new_session", {}, { status: "failed" }),
      nativePre("mcp__agent-browser__browser_navigate", { url: "file:///tmp/run/index.html" }),
      nativePost(
        "mcp__agent-browser__browser_navigate",
        { url: "file:///tmp/run/index.html" },
        { isError: true },
      ),
    ]);
    expect(state).toMatchObject({
      browser_proof: "unresolved",
      browser_attempts: 1,
      delivery: "ready",
    });
    expect(state.decisions.map((entry) => entry.reason)).toContain("browser-proof-unresolved");
  });

  it("blocks a second native browser mechanism after the attempt budget is consumed", () => {
    const state = run([
      edit("Edit", { file_path: "/tmp/run/index.html" }),
      pre("npm test"),
      post("npm test"),
      nativePre("mcp__agent-browser__browser_navigate", { url: "file:///tmp/run/index.html" }),
      nativePost("mcp__agent-browser__browser_navigate", {}, { isError: true }),
      nativePre("mcp__agent-browser__browser_navigate", { url: "data:text/html,test" }),
    ]);
    expect(state.violations.browser_recovery).toBe(1);
    expect(proofPolicyHookDecision(state)?.hookSpecificOutput.permissionDecision).toBe("deny");
  });

  it("produces the same compliant state from Claude and Codex edit shapes", () => {
    const commands = [
      pre("npm test"),
      post("npm test"),
      pre("browser-harness capture_screenshot"),
      post("browser-harness capture_screenshot"),
    ];
    const claude = run([
      edit("Edit", { file_path: "/tmp/run/index.html" }),
      ...commands,
    ]);
    const codex = run([
      edit("apply_patch", {
        command: "*** Begin Patch\n*** Update File: /tmp/run/index.html\n*** End Patch",
      }),
      ...commands,
    ]);
    for (const state of [claude, codex]) {
      expect(state).toMatchObject({
        revision: 1,
        static_closure: "closed",
        browser_proof: "closed",
        delivery: "ready",
      });
    }
  });

  it("reopens static proof when a command fails", () => {
    const state = run([
      edit("Write", { file_path: "/tmp/run/index.html" }),
      pre("npm test"),
      post("npm test", { exit_code: 1 }),
    ]);
    expect(state).toMatchObject({ static_closure: "open", delivery: "blocked" });
  });

  it("returns the common Claude/Codex deny shape for a duplicate proof", () => {
    const state = run([
      edit("Edit", { file_path: "/tmp/run/index.html" }),
      pre("npm test"),
      post("npm test"),
      pre("npm run lint"),
    ]);
    expect(state.violations.duplicate_static_closure).toBe(1);
    expect(proofPolicyHookDecision(state)).toEqual({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason: "OmD proof policy: duplicate-static-closure. Next allowed step: do not retry static verification; run one browser proof if it is still open, otherwise stop tool use and deliver.",
      },
    });
  });

  it("returns the legal next transition for out-of-order and ready-state denials", () => {
    const outOfOrder = run([
      edit("Edit", { file_path: "/tmp/run/index.html" }),
      pre("browser-harness capture_screenshot"),
    ]);
    expect(proofPolicyHookDecision(outOfOrder)?.hookSpecificOutput.permissionDecisionReason)
      .toContain("run exactly one static verification command, then run one browser proof");

    const ready = run([
      edit("Edit", { file_path: "/tmp/run/index.html" }),
      pre("npm test"),
      post("npm test"),
      pre("browser-harness capture_screenshot"),
      post("browser-harness capture_screenshot"),
      pre("npm run lint"),
    ]);
    expect(proofPolicyHookDecision(ready)?.hookSpecificOutput.permissionDecisionReason)
      .toContain("stop tool use and deliver the result");
  });

  it("blocks one incomplete stop continuation without looping forever", () => {
    const incomplete = run([
      edit("Edit", { file_path: "/tmp/run/index.html" }),
      pre("npm test"),
      post("npm test"),
      { hook_event_name: "Stop", stop_hook_active: false },
    ]);
    expect(proofPolicyStopDecision(incomplete)).toEqual({
      decision: "block",
      reason: "OmD proof policy: proof-incomplete. Next allowed step: finish the one remaining proof stage, then deliver the result.",
    });
    expect(proofPolicyStopDecision(incomplete, { stop_hook_active: true })).toBeNull();

    const complete = run([
      edit("Edit", { file_path: "/tmp/run/index.html" }),
      pre("npm test"),
      post("npm test"),
      pre("browser-harness capture_screenshot"),
      post("browser-harness capture_screenshot"),
      { hook_event_name: "Stop", stop_hook_active: false },
    ]);
    expect(proofPolicyStopDecision(complete)).toBeNull();
    expect(complete.decisions.at(-1)).toMatchObject({
      event: "delivery",
      allow: true,
      reason: "delivery-ready",
    });
  });

  it("denies browser discovery without executing a recovery command", () => {
    const state = run([
      edit("Edit", { file_path: "/tmp/run/index.html" }),
      pre("npm test"),
      post("npm test"),
      pre("browser-harness capture_screenshot"),
      post("browser-harness capture_screenshot", { status: "failed" }),
      pre("which playwright"),
    ]);
    expect(state.violations).toMatchObject({
      browser_recovery: 1,
      verification_after_ready: 1,
    });
    expect(proofPolicyHookDecision(state)?.hookSpecificOutput.permissionDecision).toBe("deny");
  });

  it("ignores pre-edit discovery and instruction-file edits", () => {
    const state = run([
      pre("ls -la"),
      post("ls -la"),
      edit("Edit", { file_path: "/tmp/run/DESIGN.md" }),
    ]);
    expect(state).toEqual(initialProofPolicyState());
  });

  it("keeps attempted-command violations in parity with the post-run classifier", () => {
    const state = run([
      edit("apply_patch", {
        command: "*** Begin Patch\n*** Update File: /tmp/run/index.html\n*** End Patch",
      }),
      pre("npm test"),
      post("npm test"),
      pre("npm run lint"),
      pre("browser-harness capture_screenshot"),
      post("browser-harness capture_screenshot"),
      pre("which playwright"),
    ]);
    const trace = classifyProofTrace([
      {
        type: "item.started",
        item: { type: "file_change", changes: [{ path: "/tmp/run/index.html" }] },
      },
      ...["npm test", "npm run lint", "browser-harness capture_screenshot", "which playwright"]
        .map((command) => ({
          type: "item.started",
          item: { type: "command_execution", command },
        })),
    ]);

    expect(state.violations).toEqual({
      browser_recovery: trace.browser_recovery_count,
      duplicate_static_closure: trace.duplicate_static_closure_count,
      verification_after_ready: trace.verification_after_ready_count,
      native_browser_unintercepted: 0,
    });
  });
});
