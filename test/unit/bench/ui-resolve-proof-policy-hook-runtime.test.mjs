import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  closeSync,
  mkdirSync,
  mkdtempSync,
  openSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createHash } from "node:crypto";
import {
  handleProofPolicyHook,
  readProofPolicyState,
  statePathFor,
  validateReflowClosureArtifact,
} from "../../../benchmarks/ui-resolve-bench/scripts/proof-policy-hook.mjs";

const base = {
  session_id: "session-a",
  turn_id: "turn-a",
};
const edit = {
  ...base,
  hook_event_name: "PostToolUse",
  tool_name: "Edit",
  tool_input: { file_path: "/tmp/run/index.html" },
  tool_response: { status: "completed" },
};
const preEdit = {
  ...base,
  hook_event_name: "PreToolUse",
  tool_name: "Edit",
  tool_input: { file_path: "/tmp/run/index.html" },
};
const preArtifactEdit = {
  ...base,
  hook_event_name: "PreToolUse",
  tool_name: "apply_patch",
  tool_input: {
    command: "*** Begin Patch\n*** Add File: .omd/reflow-closure.json\n*** End Patch",
  },
};
const preNodeRepl = {
  ...base,
  hook_event_name: "PreToolUse",
  tool_name: "mcp__node_repl__js",
  tool_input: { code: "await fs.writeFile('index.html', html)" },
};
const pre = (command) => ({
  ...base,
  hook_event_name: "PreToolUse",
  tool_name: "Bash",
  tool_input: { command },
});
const post = (command, exit_code = 0) => ({
  ...base,
  hook_event_name: "PostToolUse",
  tool_name: "Bash",
  tool_input: { command },
  tool_response: { exit_code },
});
const execPre = (cmd) => ({
  ...base,
  hook_event_name: "PreToolUse",
  tool_name: "exec_command",
  tool_input: { cmd },
});
const execPost = (cmd, exit_code = 0) => ({
  ...base,
  hook_event_name: "PostToolUse",
  tool_name: "exec_command",
  tool_input: { cmd },
  tool_response: { exit_code },
});
const nativePre = (tool_name, tool_input = {}) => ({
  ...base,
  hook_event_name: "PreToolUse",
  tool_name,
  tool_input,
});
const nativePost = (tool_name, tool_input = {}, tool_response = { status: "completed" }) => ({
  ...base,
  hook_event_name: "PostToolUse",
  tool_name,
  tool_input,
  tool_response,
});
const stop = (stop_hook_active = false) => ({
  ...base,
  hook_event_name: "Stop",
  stop_hook_active,
});
const nativeEvent = (id, tool = "browser_navigate") => JSON.stringify({
  type: "item.started",
  item: { id, type: "mcp_tool_call", server: "agent-browser", tool },
});

function writeReflowArtifact(workspace, {
  closed = false,
  unresolved = false,
  carrierIds = ["lineage", "manifest", "handoff"],
} = {}) {
  const rowIds = ["asset-id", "checksum", "handoff-target", "summary"];
  const bindings = {
    lineage: ["asset-id", "summary"],
    manifest: ["checksum", "summary"],
    handoff: ["handoff-target", "summary"],
    changed: ["summary"],
  };
  const carriers = carrierIds.map((id) => ({
    id,
    binds_rows: bindings[id],
    final: {
      outcome_390: closed && !unresolved ? "pass" : "unresolved",
      outcome_320: closed && !unresolved ? "pass" : "unresolved",
      outcome_200pct: closed && !unresolved ? "pass" : "unresolved",
    },
  }));
  const rows = rowIds.map((id) => ({
    id,
    final: {
      status: closed && !unresolved ? "pass" : "unresolved",
      outcome_390: closed && !unresolved ? "pass" : "unresolved",
      outcome_320: closed && !unresolved ? "pass" : "unresolved",
      outcome_200pct: closed && !unresolved ? "pass" : "unresolved",
    },
  }));
  const digest = createHash("sha256").update(JSON.stringify({
    carrier_ids: carrierIds,
    carrier_bindings: carriers.map(({ id, binds_rows }) => ({ id, binds_rows })),
    row_ids: rowIds,
  })).digest("hex");
  const artifact = {
    schema_version: "0.1",
    inventory: { state: "locked", carrier_ids: carrierIds, row_ids: rowIds, sha256: digest },
    carriers,
    rows,
    closure: { state: closed ? "closed" : "open" },
    closure_manifest: {
      registered_carriers: carrierIds.length,
      registered_rows: rowIds.length,
      measured_390: closed && !unresolved ? carrierIds.length : 0,
      measured_320: closed && !unresolved ? carrierIds.length : 0,
      measured_200pct: closed && !unresolved ? carrierIds.length : 0,
      unresolved_carriers: closed && !unresolved ? 0 : carrierIds.length,
      unresolved_rows: closed && !unresolved ? 0 : rowIds.length,
      inventory_sha256: digest,
    },
  };
  mkdirSync(join(workspace, ".omd"), { recursive: true });
  writeFileSync(join(workspace, ".omd", "reflow-closure.json"), `${JSON.stringify(artifact, null, 2)}\n`, "utf8");
}

function groupedReflowArtifact({ closed = false, unresolved = false } = {}) {
  const carriers = [
    { id: "plan", selector: "[data-plan]", expected_count: 1, binds_row_groups: ["ids", "status"] },
    { id: "handoff", selector: "[data-handoff]", expected_count: 1, binds_row_groups: ["status"] },
  ];
  const rowGroups = [
    { id: "ids", selector: "[data-id]", role: "identifier", expected_count: 8, longest_value: "ULD-AKE-73102" },
    { id: "status", selector: "[role=status]", role: "state", expected_count: 1, longest_value: "Ground review open" },
  ];
  const inventory = {
    state: "locked",
    carrier_ids: carriers.map(({ id }) => id),
    row_group_ids: rowGroups.map(({ id }) => id),
    sha256: null,
  };
  const artifact = {
    schema_version: "0.2",
    inventory,
    carriers: carriers.map((carrier) => ({
      ...carrier,
      final: {
        outcome_390: closed && !unresolved ? "pass" : "unresolved",
        outcome_320: closed && !unresolved ? "pass" : "unresolved",
        outcome_200pct: closed && !unresolved ? "pass" : "unresolved",
      },
    })),
    row_groups: rowGroups.map((row) => ({
      ...row,
      final: {
        status: closed && !unresolved ? "pass" : "unresolved",
        outcome_390: closed && !unresolved ? "pass" : "unresolved",
        outcome_320: closed && !unresolved ? "pass" : "unresolved",
        outcome_200pct: closed && !unresolved ? "pass" : "unresolved",
      },
    })),
    invariants: {
      same_row_count: true,
      same_decision_boundary: true,
      all_registered_carriers_closed: true,
      no_text_hack: true,
    },
    browser_attempt: unresolved
      ? { attempts: 1, outcome: "infrastructure-error", mechanism: "browser-harness", oracle: "character-range-line-tops" }
      : closed
        ? { attempts: 1, outcome: "measured", mechanism: "Playwright character ranges", oracle: "character-range-line-tops" }
        : { attempts: 0, outcome: "not-run", mechanism: null, oracle: "character-range-line-tops" },
    known_failure_closure: closed
      ? { state: unresolved ? "unresolved" : "closed", unresolved: unresolved ? 11 : 0 }
      : { state: "open", unresolved: null },
    closure: { state: closed ? (unresolved ? "unresolved" : "closed") : "open" },
  };
  inventory.sha256 = createHash("sha256").update(JSON.stringify({
    carrier_ids: inventory.carrier_ids,
    carrier_groups: artifact.carriers.map(({ id, selector, expected_count, binds_row_groups }) => ({ id, selector, expected_count, binds_row_groups })),
    row_groups: artifact.row_groups.map(({ id, selector, role, expected_count, longest_value, atomic_parts }) => ({
      id,
      selector,
      role,
      expected_count,
      longest_value,
      atomic_parts: atomic_parts ?? null,
    })),
  })).digest("hex");
  artifact.closure_manifest = {
    registered_carrier_groups: 2,
    registered_carriers: 2,
    registered_row_groups: 2,
    registered_rows: 9,
    measured_390: closed && !unresolved ? 2 : 0,
    measured_320: closed && !unresolved ? 2 : 0,
    measured_200pct: closed && !unresolved ? 2 : 0,
    unresolved_carriers: closed && !unresolved ? 0 : 2,
    unresolved_rows: closed && !unresolved ? 0 : 9,
    quality_pass: closed && !unresolved,
    browser_attempt: artifact.browser_attempt,
    inventory_sha256: inventory.sha256,
  };
  return artifact;
}

describe("proof policy executable hook", () => {
  let root;

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), "omd-proof-policy-"));
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  it("persists one atomic session/turn state across hook processes", () => {
    handleProofPolicyHook(edit, { root, now: 100 });
    handleProofPolicyHook(pre("npm test"), { root, now: 110 });
    handleProofPolicyHook(post("npm test"), { root, now: 120 });
    handleProofPolicyHook(pre("browser-harness capture_screenshot"), { root, now: 130 });
    handleProofPolicyHook(post("browser-harness capture_screenshot"), { root, now: 140 });

    const path = statePathFor(base, root);
    const saved = JSON.parse(readFileSync(path, "utf8"));
    expect(saved).toMatchObject({
      schema_version: "0.1",
      session_id: "session-a",
      turn_id: "turn-a",
      updated_at_ms: 140,
      state: { revision: 1, delivery: "ready" },
    });
  });

  it("denies duplicate proof from the persisted state", () => {
    handleProofPolicyHook(edit, { root, now: 100 });
    handleProofPolicyHook(pre("npm test"), { root, now: 110 });
    handleProofPolicyHook(post("npm test"), { root, now: 120 });
    const result = handleProofPolicyHook(pre("npm run lint"), { root, now: 130 });
    expect(result.output?.hookSpecificOutput).toMatchObject({
      permissionDecision: "deny",
      permissionDecisionReason: expect.stringContaining(
        "do not retry static verification; run one browser proof if it is still open",
      ),
    });
  });

  it("denies a second Codex exec_command before it can escape the host budget", () => {
    handleProofPolicyHook(edit, { root, now: 100 });
    handleProofPolicyHook(execPre("npm test"), { root, now: 110 });
    handleProofPolicyHook(execPost("npm test"), { root, now: 120 });
    const result = handleProofPolicyHook(execPre("npm run lint"), { root, now: 130 });
    expect(result.output?.hookSpecificOutput).toMatchObject({
      permissionDecision: "deny",
      permissionDecisionReason: expect.stringContaining("duplicate-static-closure"),
    });
    expect(result.state).toMatchObject({
      static_closure: "closed",
      violations: { duplicate_static_closure: 1 },
    });
  });

  it("settles a missing static PostToolUse before the next proof phase", () => {
    handleProofPolicyHook(edit, { root, now: 100 });
    expect(handleProofPolicyHook(pre("npm test"), { root, now: 110 }).output).toBeNull();

    const duplicate = handleProofPolicyHook(pre("npm run lint"), { root, now: 120 });
    expect(duplicate.output?.hookSpecificOutput).toMatchObject({
      permissionDecision: "deny",
      permissionDecisionReason: expect.stringContaining("duplicate-static-closure"),
    });
    expect(duplicate.state).toMatchObject({ static_closure: "closed" });

    const browser = handleProofPolicyHook(pre("browser-harness capture_screenshot"), {
      root,
      now: 130,
    });
    expect(browser.output).toBeNull();
    expect(browser.state).toMatchObject({ static_closure: "closed", browser_proof: "running" });
  });

  it("forces one continuation when delivery proof is incomplete", () => {
    handleProofPolicyHook(edit, { root, now: 100 });
    handleProofPolicyHook(pre("npm test"), { root, now: 110 });
    handleProofPolicyHook(post("npm test"), { root, now: 120 });
    const blocked = handleProofPolicyHook(stop(), { root, now: 130 });
    expect(blocked.output).toMatchObject({
      decision: "block",
      reason: expect.stringContaining("proof-incomplete"),
    });
    expect(handleProofPolicyHook(stop(true), { root, now: 140 }).output).toBeNull();

    handleProofPolicyHook(pre("browser-harness capture_screenshot"), { root, now: 150 });
    handleProofPolicyHook(post("browser-harness capture_screenshot"), { root, now: 160 });
    expect(handleProofPolicyHook(stop(), { root, now: 170 }).output).toBeNull();
  });

  it("reconciles one native browser call from the ephemeral runner trace at Stop", () => {
    const trace = join(root, "events.jsonl");
    writeFileSync(trace, `${nativeEvent("native-1")}\n`, "utf8");
    handleProofPolicyHook(edit, { root, now: 100 });
    handleProofPolicyHook(pre("npm test"), { root, now: 110 });
    handleProofPolicyHook(post("npm test"), { root, now: 120 });
    const result = handleProofPolicyHook(stop(), { root, now: 130, trace_path: trace });
    expect(result.output).toBeNull();
    expect(result.state).toMatchObject({
      browser_attempts: 1,
      browser_proof: "unresolved",
      delivery: "ready",
      native_observation: { observed_calls: 1, unblocked_calls: 0 },
    });
  });

  it("fails the final boundary honestly when repeated native calls were not intercepted", () => {
    const trace = join(root, "events.jsonl");
    writeFileSync(trace, `${nativeEvent("native-1")}\n${nativeEvent("native-2")}\n`, "utf8");
    handleProofPolicyHook(edit, { root, now: 100 });
    handleProofPolicyHook(pre("npm test"), { root, now: 110 });
    handleProofPolicyHook(post("npm test"), { root, now: 120 });
    const result = handleProofPolicyHook(stop(), { root, now: 130, trace_path: trace });
    expect(result.output).toMatchObject({
      decision: "block",
      reason: expect.stringContaining("native-browser-unintercepted"),
    });
    expect(result.state).toMatchObject({
      browser_attempts: 1,
      delivery: "ready",
      violations: { native_browser_unintercepted: 1 },
      native_observation: { observed_calls: 2, unblocked_calls: 1 },
    });
    const reentry = handleProofPolicyHook(stop(true), {
      root,
      now: 140,
      trace_path: trace,
    });
    expect(reentry.output).toBeNull();
    expect(reentry.state.native_observation.unblocked_calls).toBe(1);
  });

  it("records hook-intercepted native attempts and denies recovery without false unblocked evidence", () => {
    const trace = join(root, "events.jsonl");
    writeFileSync(trace, `${nativeEvent("native-1")}\n${nativeEvent("native-2")}\n`, "utf8");
    handleProofPolicyHook(edit, { root, now: 100 });
    handleProofPolicyHook(pre("npm test"), { root, now: 110 });
    handleProofPolicyHook(post("npm test"), { root, now: 120 });

    const tool = "mcp__agent-browser__browser_navigate";
    expect(handleProofPolicyHook(nativePre(tool, { url: "file:///tmp/run/index.html" }), {
      root,
      now: 130,
    }).output).toBeNull();
    handleProofPolicyHook(nativePost(tool, {}, { status: "failed" }), { root, now: 140 });
    const denied = handleProofPolicyHook(nativePre(tool, { url: "data:text/html,retry" }), {
      root,
      now: 150,
    });
    expect(denied.output?.hookSpecificOutput).toMatchObject({ permissionDecision: "deny" });

    const result = handleProofPolicyHook(stop(), { root, now: 160, trace_path: trace });
    expect(result.output).toBeNull();
    expect(result.state).toMatchObject({
      delivery: "ready",
      native_observation: {
        observed_calls: 2,
        unblocked_calls: 0,
        source: "host-hook",
      },
      violations: { native_browser_unintercepted: 0, browser_recovery: 1 },
    });
  });

  it("denies a proof command when persisted state is corrupt", () => {
    const path = statePathFor(base, root);
    mkdirSync(root, { recursive: true });
    writeFileSync(path, "{broken", "utf8");
    const result = handleProofPolicyHook(pre("npm test"), { root, now: 100 });
    expect(result.status).toBe("corrupt");
    expect(result.output?.hookSpecificOutput.permissionDecisionReason)
      .toContain("policy-state-unavailable");
  });

  it("denies stale state but permits a new product edit to recover it", () => {
    handleProofPolicyHook(edit, { root, now: 100 });
    const stale = handleProofPolicyHook(pre("npm test"), {
      root,
      now: 1000,
      ttl_ms: 100,
    });
    expect(stale.output?.hookSpecificOutput.permissionDecision).toBe("deny");
    const recovered = handleProofPolicyHook(edit, { root, now: 1010, ttl_ms: 100 });
    expect(recovered.state).toMatchObject({ revision: 1, delivery: "blocked" });
  });

  it("fails closed when another hook process owns the state lock", () => {
    const path = statePathFor(base, root);
    mkdirSync(root, { recursive: true });
    const lock = openSync(`${path}.lock`, "wx");
    try {
      const result = handleProofPolicyHook(pre("npm test"), {
        root,
        now: 100,
        lock_timeout_ms: 0,
      });
      expect(result).toMatchObject({ status: "busy" });
      expect(result.output?.hookSpecificOutput.permissionDecisionReason)
        .toContain("policy-state-busy");
    } finally {
      closeSync(lock);
    }
  });

  it("isolates state by session and turn", () => {
    handleProofPolicyHook(edit, { root, now: 100 });
    const other = { ...base, turn_id: "turn-b" };
    expect(statePathFor(base, root)).not.toBe(statePathFor(other, root));
    expect(readProofPolicyState(statePathFor(other, root), other, { now: 100 }).status)
      .toBe("missing");
  });

  it("requires an immutable inventory before editing and validates measured closure at delivery", () => {
    const stateRoot = join(root, "state");
    const options = {
      root: stateRoot,
      workspace_root: root,
      require_reflow_artifact: true,
    };
    const missing = handleProofPolicyHook(preEdit, { ...options, now: 100 });
    expect(missing.output?.hookSpecificOutput).toMatchObject({
      permissionDecision: "deny",
      permissionDecisionReason: expect.stringContaining("reflow-inventory-required"),
    });
    expect(handleProofPolicyHook(preArtifactEdit, { ...options, now: 105 }).output).toBeNull();

    writeReflowArtifact(root);
    expect(handleProofPolicyHook(preEdit, { ...options, now: 110 }).output).toBeNull();
    const edited = handleProofPolicyHook(edit, { ...options, now: 120 });
    expect(edited.state).toMatchObject({
      revision: 1,
      reflow_contract: { required: true, carrier_count: 3, row_count: 4, closure: "open" },
    });

    expect(handleProofPolicyHook(pre("npm test"), { ...options, now: 130 }).output).toBeNull();
    handleProofPolicyHook(post("npm test"), { ...options, now: 140 });
    handleProofPolicyHook(pre("browser-harness capture_screenshot"), { ...options, now: 150 });
    const observed = handleProofPolicyHook(
      post("browser-harness capture_screenshot"),
      { ...options, now: 160 },
    );
    expect(observed.state).toMatchObject({ delivery: "blocked", browser_proof: "closed" });

    const closurePatch = {
      ...preArtifactEdit,
      tool_input: {
        command: "*** Begin Patch\n*** Update File: .omd/reflow-closure.json\n+  closure_manifest: static verification closed\n*** End Patch",
      },
    };
    expect(handleProofPolicyHook(closurePatch, { ...options, now: 170 }).output).toBeNull();
    expect(handleProofPolicyHook(stop(), { ...options, now: 180 }).output?.decision).toBe("block");

    writeReflowArtifact(root, { closed: true });
    const complete = handleProofPolicyHook(stop(), { ...options, now: 190 });
    expect(complete.state).toMatchObject({
      delivery: "ready",
      reflow_contract: { closure: "closed" },
    });
    expect(complete.output).toBeNull();
  });

  it("blocks an untracked local executor from bypassing the artifact and product-edit gates", () => {
    const result = handleProofPolicyHook(preNodeRepl, {
      root: join(root, "state"),
      workspace_root: root,
      require_reflow_artifact: true,
      now: 100,
    });
    expect(result.output?.hookSpecificOutput).toMatchObject({
      permissionDecision: "deny",
      permissionDecisionReason: expect.stringContaining("untracked-local-executor"),
    });
  });

  it("allows honest unresolved measurements to close accounting without claiming proof success", () => {
    const options = {
      root: join(root, "state"),
      workspace_root: root,
      require_reflow_artifact: true,
    };
    writeReflowArtifact(root);
    handleProofPolicyHook(preEdit, { ...options, now: 100 });
    handleProofPolicyHook(edit, { ...options, now: 110 });
    handleProofPolicyHook(pre("npm test"), { ...options, now: 120 });
    handleProofPolicyHook(post("npm test"), { ...options, now: 130 });
    handleProofPolicyHook(pre("browser-harness capture_screenshot"), { ...options, now: 140 });
    handleProofPolicyHook(post("browser-harness capture_screenshot", 1), { ...options, now: 150 });

    writeReflowArtifact(root, { closed: true, unresolved: true });
    const complete = handleProofPolicyHook(stop(), { ...options, now: 160 });
    expect(complete.state).toMatchObject({
      browser_proof: "unresolved",
      delivery: "ready",
      reflow_contract: { closure: "unresolved" },
    });
    expect(complete.state.decisions.map((entry) => entry.reason))
      .toContain("reflow-closure-accounted-unresolved");
    expect(complete.output).toBeNull();
  });

  it("keeps compact artifact lifecycle commands neutral after the single static closure", () => {
    const options = {
      root: join(root, "state"),
      workspace_root: root,
      require_reflow_artifact: true,
    };
    const lifecycle = "node skills/omd-apply/scripts/reflow-artifact.mjs finalize-unresolved .omd/reflow-closure.json";
    writeReflowArtifact(root);
    handleProofPolicyHook(preEdit, { ...options, now: 100 });
    handleProofPolicyHook(edit, { ...options, now: 110 });
    handleProofPolicyHook(pre("npm test"), { ...options, now: 120 });
    handleProofPolicyHook(post("npm test"), { ...options, now: 130 });
    handleProofPolicyHook(pre("browser-harness capture_screenshot"), { ...options, now: 140 });
    handleProofPolicyHook(post("browser-harness capture_screenshot", 1), { ...options, now: 150 });

    const before = handleProofPolicyHook(pre(lifecycle), { ...options, now: 160 });
    expect(before.output).toBeNull();
    const after = handleProofPolicyHook(post(lifecycle), { ...options, now: 170 });
    expect(after.state.violations.duplicate_static_closure).toBe(0);

    writeReflowArtifact(root, { closed: true, unresolved: true });
    const complete = handleProofPolicyHook(stop(), { ...options, now: 180 });
    expect(complete.state).toMatchObject({
      delivery: "ready",
      reflow_contract: { closure: "unresolved" },
      violations: { duplicate_static_closure: 0 },
    });
    expect(complete.output).toBeNull();

    const arbitrarySecondStatic = handleProofPolicyHook(pre("npm run lint"), { ...options, now: 190 });
    expect(arbitrarySecondStatic.output?.hookSpecificOutput?.permissionDecisionReason)
      .toContain("duplicate-static-closure");
  });

  it("accepts compact grouped reflow accounting with expanded instance counts", () => {
    const open = groupedReflowArtifact();
    expect(validateReflowClosureArtifact(open, "inventory")).toMatchObject({
      pass: true,
      artifact_schema: "0.2",
      carrier_count: 2,
      row_count: 9,
      row_group_count: 2,
    });
    const closed = groupedReflowArtifact({ closed: true, unresolved: true });
    expect(validateReflowClosureArtifact(closed, "closure")).toMatchObject({
      pass: true,
      closure_outcome: "unresolved",
      carrier_count: 2,
      row_count: 9,
    });
    const resolved = groupedReflowArtifact({ closed: true });
    expect(validateReflowClosureArtifact(resolved, "closure")).toMatchObject({
      pass: true,
      closure_outcome: "closed",
    });
    resolved.browser_attempt.oracle = "element-rectangles";
    resolved.closure_manifest.browser_attempt = resolved.browser_attempt;
    expect(validateReflowClosureArtifact(resolved, "closure")).toEqual({
      pass: false,
      reason: "reflow-closure-required",
    });
  });

  it("rejects grouped unresolved accounting that skipped the browser attempt", () => {
    const unresolved = groupedReflowArtifact({ closed: true, unresolved: true });
    unresolved.browser_attempt = { attempts: 0, outcome: "not-run", mechanism: null };
    unresolved.closure_manifest.browser_attempt = unresolved.browser_attempt;
    expect(validateReflowClosureArtifact(unresolved, "closure")).toEqual({
      pass: false,
      reason: "reflow-closure-required",
    });
  });

  it("rejects unresolved grouped rows disguised as a closed quality result", () => {
    const unresolved = groupedReflowArtifact({ closed: true, unresolved: true });
    unresolved.closure.state = "closed";
    expect(validateReflowClosureArtifact(unresolved, "closure")).toEqual({
      pass: false,
      reason: "reflow-closure-required",
    });
  });

  it("rejects a falsely resolved grouped closure when an invariant is red", () => {
    const closed = groupedReflowArtifact({ closed: true });
    closed.invariants.same_decision_boundary = false;
    expect(validateReflowClosureArtifact(closed, "closure")).toEqual({
      pass: false,
      reason: "reflow-closure-required",
    });
  });

  it("rejects a changed carrier inventory after product editing starts", () => {
    const options = {
      root: join(root, "state"),
      workspace_root: root,
      require_reflow_artifact: true,
    };
    writeReflowArtifact(root);
    handleProofPolicyHook(preEdit, { ...options, now: 100 });
    handleProofPolicyHook(edit, { ...options, now: 110 });
    writeReflowArtifact(root, { closed: true, carrierIds: ["changed"] });
    const result = handleProofPolicyHook(stop(), { ...options, now: 120 });
    expect(result.output?.hookSpecificOutput?.permissionDecisionReason)
      .toBeUndefined();
    expect(result.output?.reason).toContain("reflow-inventory-changed");
  });
});
