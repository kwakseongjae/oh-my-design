import { describe, expect, it } from "vitest";
import {
  classifyProofCommand,
  classifyProofTool,
  classifyProofTrace,
  evaluateProofExecutionGate,
  isProductEditPath,
  normalizeProofTrace,
} from "../../../benchmarks/ui-resolve-bench/scripts/proof-trace-contract.mjs";

const cursorEdit = (path = "/tmp/run/index.html") => ({
  type: "tool_call",
  subtype: "started",
  tool_call: { editToolCall: { args: { path } } },
});

const cursorCommand = (command) => ({
  type: "tool_call",
  subtype: "started",
  tool_call: { shellToolCall: { args: { command } } },
});

const codexEdit = (path = "/tmp/run/index.html") => ({
  type: "item.started",
  item: { type: "file_change", changes: [{ path, kind: "update" }] },
});

const codexCommand = (command) => ({
  type: "item.started",
  item: { type: "command_execution", command },
});

const codexNativeBrowser = (tool, server = "agent-browser") => ({
  type: "item.started",
  item: { type: "mcp_tool_call", server, tool, arguments: {} },
});

describe("proof trace contract", () => {
  it("normalizes Cursor and Codex event streams without double-counting completions", () => {
    const events = [
      cursorEdit(),
      cursorCommand("npm test"),
      codexEdit(),
      codexCommand("browser-harness capture"),
      { type: "item.completed", item: { type: "command_execution", command: "ignored" } },
    ];
    expect(normalizeProofTrace(events)).toHaveLength(4);
  });

  it("ignores benchmark and instruction edits as product revisions", () => {
    expect(isProductEditPath("/tmp/run/index.html")).toBe(true);
    expect(isProductEditPath("/tmp/run/src/App.tsx")).toBe(true);
    expect(isProductEditPath("/tmp/run/.benchmark/check.mjs")).toBe(false);
    expect(isProductEditPath("/tmp/run/.agents/skills/omd/SKILL.md")).toBe(false);
    expect(isProductEditPath("/tmp/run/DESIGN.md")).toBe(false);
  });

  it("distinguishes browser-harness execution from reading its instructions", () => {
    expect(classifyProofCommand("browser-harness capture_screenshot").browser).toBe(true);
    expect(classifyProofCommand("/opt/homebrew/bin/zsh -lc \"browser-harness <<'PY'\ncapture_screenshot()\nPY\"").browser).toBe(true);
    expect(classifyProofCommand("BU_NAME=smoke browser-harness capture_screenshot").browser).toBe(true);
    expect(classifyProofCommand("sed -n '1,240p' /Users/me/Developer/browser-harness/SKILL.md")).toMatchObject({
      browser: false,
      recovery_probe: false,
      static_verification: false,
      neutral: true,
    });
  });

  it("classifies native browser proof separately from session management", () => {
    expect(classifyProofTool("mcp__agent-browser__browser_navigate")).toMatchObject({
      browser: true,
      neutral: false,
    });
    expect(classifyProofTool("mcp__agent-browser__browser_new_session")).toMatchObject({
      browser: false,
      neutral: true,
    });
    expect(classifyProofTool("mcp__node_repl__js")).toMatchObject({
      browser: false,
      neutral: false,
    });
  });

  it("includes native browser calls in the offline proof trace", () => {
    const result = classifyProofTrace([
      codexEdit(),
      codexCommand("npm test"),
      codexNativeBrowser("browser_new_session"),
      codexNativeBrowser("browser_navigate"),
      codexNativeBrowser("browser_navigate"),
    ]);
    expect(result).toMatchObject({
      runtime: "codex",
      analyzable: true,
      static_closure_count: 1,
      browser_mechanism_count: 2,
      browser_recovery_count: 1,
      verification_after_ready_count: 1,
      compliance_pass: false,
    });
  });

  it("does not count a browser instruction read as verification after ready", () => {
    const result = classifyProofTrace([
      codexEdit(),
      codexCommand("npm test"),
      codexCommand("browser-harness capture_screenshot"),
      codexCommand("sed -n '1,240p' /Users/me/Developer/browser-harness/SKILL.md"),
    ]);
    expect(result).toMatchObject({
      static_closure_count: 1,
      browser_mechanism_count: 1,
      verification_after_ready_count: 0,
      compliance_pass: true,
    });
  });

  it("passes one static closure followed by one browser mechanism", () => {
    const result = classifyProofTrace([
      cursorCommand("ls -la"),
      cursorEdit(),
      cursorCommand("npm test"),
      cursorCommand("browser-harness capture_screenshot"),
    ]);
    expect(result).toMatchObject({
      runtime: "cursor",
      analyzable: true,
      static_closure_count: 1,
      browser_mechanism_count: 1,
      browser_recovery_count: 0,
      duplicate_static_closure_count: 0,
      verification_after_ready_count: 0,
      compliance_pass: true,
    });
  });

  it("fails repeated static closure, browser discovery, and work after browser proof", () => {
    const result = classifyProofTrace([
      codexEdit(),
      codexCommand("npm test"),
      codexCommand("npm run lint"),
      codexCommand("which playwright; ls /Applications/Google\\ Chrome.app"),
      codexCommand("Google Chrome --headless --screenshot=one.png index.html"),
      codexCommand("Google Chrome --headless --screenshot=two.png index.html"),
      codexCommand("npm test"),
    ]);
    expect(result).toMatchObject({
      runtime: "codex",
      analyzable: true,
      static_closure_count: 3,
      browser_mechanism_count: 2,
      browser_recovery_probe_count: 1,
      browser_recovery_count: 2,
      duplicate_static_closure_count: 2,
      verification_after_ready_count: 2,
      compliance_pass: false,
    });
  });

  it("keeps violations from an earlier revision after a corrective edit", () => {
    const result = classifyProofTrace([
      cursorEdit(),
      cursorCommand("npm test"),
      cursorCommand("npm run lint"),
      cursorCommand("Google Chrome --headless --screenshot=one.png index.html"),
      cursorCommand("npm test"),
      cursorEdit(),
      cursorEdit(),
      cursorCommand("npm test"),
    ]);
    expect(result).toMatchObject({
      product_edit_count: 3,
      product_revision_count: 2,
      duplicate_static_closure_count: 2,
      verification_after_ready_count: 1,
      compliance_pass: false,
    });
  });

  it("fails closed when no product edit exists", () => {
    expect(classifyProofTrace([cursorCommand("npm test")])).toMatchObject({
      analyzable: false,
      compliance_pass: false,
    });
  });

  it("evaluates preregistered promotion limits without stopping the run", () => {
    const gate = {
      enforcement: "promotion-report",
      require_analyzable: true,
      max_browser_recovery_count: 0,
      max_duplicate_static_closure_count: 0,
      max_verification_after_ready_count: 0,
    };
    expect(evaluateProofExecutionGate({
      analyzable: true,
      browser_recovery_count: 0,
      duplicate_static_closure_count: 0,
      verification_after_ready_count: 0,
    }, gate)).toMatchObject({ pass: true, reasons: [] });
    expect(evaluateProofExecutionGate({
      analyzable: true,
      browser_recovery_count: 2,
      duplicate_static_closure_count: 1,
      verification_after_ready_count: 3,
    }, gate)).toMatchObject({
      pass: false,
      reasons: ["browser-recovery-limit", "duplicate-static-limit", "verification-after-ready-limit"],
    });
  });
});
