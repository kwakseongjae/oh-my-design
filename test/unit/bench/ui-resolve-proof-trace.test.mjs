import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import {
  classifyProofCommand,
  classifyProofTool,
  classifyProofTrace,
  countNativeBrowserProofCalls,
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

  it("treats a fresh browser launch inside browser-harness as forbidden recovery", () => {
    const result = classifyProofCommand("browser-harness <<'PY'\nbrowser = p.chromium.launch(headless=True)\nPY");
    expect(result.browser).toBe(true);
    expect(result.recovery_probe).toBe(true);
  });

  it("classifies same-route osascript Chrome automation as browser proof", () => {
    const command = "osascript -e 'tell application \"Google Chrome\" to set URL of active tab of front window to \"file:///tmp/run/index.html\"'";
    expect(classifyProofCommand(command)).toMatchObject({
      browser: true,
      recovery_probe: false,
      static_verification: false,
      neutral: false,
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

  it("counts only proof-bearing native browser starts for Stop reconciliation", () => {
    expect(countNativeBrowserProofCalls([
      codexNativeBrowser("browser_new_session"),
      codexNativeBrowser("browser_navigate"),
      codexNativeBrowser("browser_screenshot"),
      { type: "item.completed", item: { type: "mcp_tool_call", server: "agent-browser", tool: "browser_navigate" } },
    ])).toBe(2);
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

  it("fails closed on command-shaped proof until the reflow artifact records the exact measured consumer", () => {
    const trace = {
      analyzable: true,
      browser_recovery_count: 0,
      duplicate_static_closure_count: 0,
      verification_after_ready_count: 0,
      revisions: [{
        commands: [{ browser: true, command: "browser-harness < /skill/scripts/reflow-browser.py" }],
      }],
    };
    const gate = {
      enforcement: "promotion-report",
      require_analyzable: true,
      max_browser_recovery_count: 0,
      max_duplicate_static_closure_count: 0,
      max_verification_after_ready_count: 0,
      require_closed_reflow_artifact: true,
      require_measured_browser_attempt: true,
      require_character_range_line_oracle: true,
      require_actual_zoom_observation: true,
      require_exact_named_consumer_attachment: true,
      forbid_launched_browser: true,
      require_locked_typography: true,
      minimum_inline_fit_reserve_css_px: 8,
      max_document_overflow_px: 0,
      max_passive_protected_text_scroll_containers: 0,
      shipped_runner_system_ids: ["candidate"],
      shipped_runner_command_suffix: "scripts/reflow-browser.py",
    };
    const conditions = [
      { id: "390", viewport_width: 390, zoom: 1, observed_document_zoom: 1, document_scroll_width: 390, document_client_width: 390, body_scroll_width: 390, body_client_width: 390 },
      { id: "320", viewport_width: 320, zoom: 1, observed_document_zoom: 1, document_scroll_width: 320, document_client_width: 320, body_scroll_width: 320, body_client_width: 320 },
      { id: "200pct", viewport_width: 640, zoom: 2, observed_document_zoom: 2, document_scroll_width: 320, document_client_width: 320, body_scroll_width: 320, body_client_width: 320 },
    ];
    const artifact = {
      static_closure: { state: "passed", attempts: 1 },
      browser_attempt: {
        attempts: 1,
        outcome: "measured",
        oracle: "character-range-line-tops",
        connection: { connection_name: "bench-test", attached_existing: true, launched_browser: false },
        conditions,
      },
      invariants: { all_registered_carriers_closed: true },
      closure: { state: "closed" },
      known_failure_closure: { state: "closed" },
      row_groups: [{
        decision: "keep",
        typography_contract: { font_size_px: 14, line_height_px: 20, font_weight: 600 },
        final: {
          passive_text_scroll_container: false,
          measurements: conditions.map(({ id }) => ({
            id,
            observed_font_size_px: 14,
            observed_line_height_px: 20,
            observed_font_weight: 600,
            inline_reserve_css_px: 8,
          })),
        },
      }],
    };
    expect(evaluateProofExecutionGate(trace, gate, {
      reflowArtifact: artifact,
      systemId: "candidate",
      expectedConnectionName: "bench-test",
    })).toMatchObject({
      pass: true,
      reasons: [],
      observed: { reflow_artifact: { shipped_runner_invoked: true, closure_state: "closed" } },
    });

    const notRun = structuredClone(artifact);
    notRun.browser_attempt = { attempts: 0, outcome: "not-run", conditions: [] };
    notRun.closure.state = "open";
    expect(evaluateProofExecutionGate(trace, gate, {
      reflowArtifact: notRun,
      systemId: "candidate",
      expectedConnectionName: "bench-test",
    })).toMatchObject({
      pass: false,
      reasons: expect.arrayContaining([
        "reflow-browser-attempt-not-measured",
        "reflow-exact-consumer-attachment-missing",
        "reflow-artifact-not-closed",
      ]),
    });
  });

  it("accepts sha-verified snapshot typography and a registered target-only comparison carrier", () => {
    const source = Buffer.from("<p>pre-edit product</p>");
    const sha256 = createHash("sha256").update(source).digest("hex");
    const conditions = [
      { id: "390", viewport_width: 390, zoom: 1, observed_document_zoom: 1, document_scroll_width: 390, document_client_width: 390, body_scroll_width: 390, body_client_width: 390 },
      { id: "320", viewport_width: 320, zoom: 1, observed_document_zoom: 1, document_scroll_width: 320, document_client_width: 320, body_scroll_width: 320, body_client_width: 320 },
      { id: "200pct", viewport_width: 640, zoom: 2, observed_document_zoom: 2, document_scroll_width: 320, document_client_width: 320, body_scroll_width: 320, body_client_width: 320 },
    ];
    const artifact = {
      pre_edit_product_snapshot: {
        product_path: "index.html",
        sha256,
        source_base64: source.toString("base64"),
      },
      static_closure: { state: "passed", attempts: 1 },
      browser_attempt: {
        attempts: 1,
        outcome: "measured",
        oracle: "character-range-line-tops",
        connection: { connection_name: "bench-test", attached_existing: true, launched_browser: false },
        conditions,
      },
      invariants: { all_registered_carriers_closed: true },
      closure: { state: "closed" },
      known_failure_closure: { state: "closed" },
      carriers: [{
        id: "target-comparison",
        selector: "[data-target-comparison]",
        expected_count: 1,
        binds_row_groups: ["target"],
      }],
      row_groups: [{
        id: "target",
        selector: "[data-target]",
        decision: "comparison-scroll",
        scroll_contract: { container_selector: "[data-target-comparison]" },
        typography_contract: { source: "deterministic-pre-edit-snapshot" },
        final: {
          passive_text_scroll_container: false,
          measurements: conditions.map(({ id }) => ({
            id,
            observed_font_size_px: 18,
            observed_line_height_px: 27.9,
            observed_font_weight: "700",
            pre_edit_snapshot_sha256: sha256,
            pre_edit_font_size_px: 18,
            pre_edit_line_height_px: 27.9,
            pre_edit_font_weight: "700",
            inline_reserve_css_px: -120,
          })),
        },
      }],
    };
    const trace = {
      analyzable: true,
      browser_recovery_count: 0,
      duplicate_static_closure_count: 0,
      verification_after_ready_count: 0,
      revisions: [{
        commands: [{ browser: true, command: "browser-harness < /skill/scripts/reflow-browser.py" }],
      }],
    };
    const gate = {
      enforcement: "promotion-report",
      require_analyzable: true,
      max_browser_recovery_count: 0,
      max_duplicate_static_closure_count: 0,
      max_verification_after_ready_count: 0,
      require_closed_reflow_artifact: true,
      require_measured_browser_attempt: true,
      require_character_range_line_oracle: true,
      require_actual_zoom_observation: true,
      require_exact_named_consumer_attachment: true,
      forbid_launched_browser: true,
      require_locked_typography: true,
      require_pre_edit_product_snapshot: true,
      require_computed_pre_edit_typography: true,
      comparison_scroll_requires_target_only_registered_carrier: true,
      minimum_inline_fit_reserve_css_px: 8,
      max_document_overflow_px: 0,
      max_passive_protected_text_scroll_containers: 0,
      shipped_runner_system_ids: ["candidate"],
      shipped_runner_command_suffix: "scripts/reflow-browser.py",
    };
    expect(evaluateProofExecutionGate(trace, gate, {
      reflowArtifact: artifact,
      systemId: "candidate",
      expectedConnectionName: "bench-test",
    })).toMatchObject({ pass: true, reasons: [] });

    artifact.row_groups[0].final.measurements[1].observed_line_height_px = 21.7;
    expect(evaluateProofExecutionGate(trace, gate, {
      reflowArtifact: artifact,
      systemId: "candidate",
      expectedConnectionName: "bench-test",
    }).reasons).toContain("reflow-locked-typography-changed");
  });
});
