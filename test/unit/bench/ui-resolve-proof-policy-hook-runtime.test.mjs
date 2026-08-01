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
import {
  handleProofPolicyHook,
  readProofPolicyState,
  statePathFor,
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
});
