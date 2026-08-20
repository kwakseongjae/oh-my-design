import {
  isProductEditPath,
  classifyProofCommand,
  classifyProofTool,
} from "./proof-trace-contract.mjs";
import { applyProofPolicyEvent } from "./proof-policy-state.mjs";

function eventName(payload) {
  return String(payload?.hook_event_name ?? payload?.hookEventName ?? "");
}

function toolName(payload) {
  return String(payload?.tool_name ?? payload?.toolName ?? "");
}

function toolInput(payload) {
  const input = payload?.tool_input ?? payload?.toolInput;
  return input && typeof input === "object" ? input : {};
}

function patchPaths(value) {
  return String(value ?? "").split("\n").flatMap((line) => {
    const match = /^\*\*\* (?:Add|Update|Delete) File:\s+(.+?)\s*$/.exec(line);
    return match ? [match[1]] : [];
  });
}

export function hookEditPaths(payload) {
  const input = toolInput(payload);
  const direct = [input.file_path, input.path].filter((value) => typeof value === "string");
  const patch = input.patchText ?? input.patch ?? input.command;
  return [...new Set([...direct, ...patchPaths(patch)])];
}

export function hookCommand(payload) {
  const input = toolInput(payload);
  if (typeof input.command === "string") return input.command;
  return typeof input.cmd === "string" ? input.cmd : "";
}

export function hookToolOutcome(payload) {
  const response = payload?.tool_response ?? payload?.toolResponse;
  if (response == null) return "unresolved";
  // Codex intentionally exposes only formatted stdout/stderr here, without
  // the shell exit code. Command output is not proof of command success.
  if (typeof response === "string") return "unresolved";
  if (typeof response !== "object") return "unresolved";
  if (response.is_error === true || response.isError === true || response.error) return "failed";
  const exitCode = response.exit_code ?? response.exitCode ?? response.code;
  if (typeof exitCode === "number") return exitCode === 0 ? "passed" : "failed";
  const status = String(response.status ?? response.outcome ?? "").toLowerCase();
  if (["error", "failed", "failure", "denied", "cancelled", "canceled"].includes(status)) {
    return "failed";
  }
  if (["success", "succeeded", "completed", "ok"].includes(status)) return "passed";
  return "unresolved";
}

export function hookToolSucceeded(payload) {
  return hookToolOutcome(payload) === "passed";
}

function isEditTool(name) {
  return /^(?:Edit|Write|MultiEdit|apply_patch)$/i.test(name);
}

function isShellTool(name) {
  return /^(?:Bash|exec_command|functions\.exec(?:_command)?)$/i.test(name);
}

export function mapHookPayloadToProofEvent(payload, state) {
  const event = eventName(payload);
  const tool = toolName(payload);

  if (event === "Stop") {
    return state.revision > 0 ? { type: "delivery" } : null;
  }

  if (event === "PostToolUse" && isEditTool(tool)) {
    const productEdit = hookEditPaths(payload).some(isProductEditPath);
    return productEdit && hookToolOutcome(payload) !== "failed" ? { type: "product-edit" } : null;
  }

  const classification = isShellTool(tool)
    ? classifyProofCommand(hookCommand(payload))
    : classifyProofTool(tool);
  if (isShellTool(tool) && !hookCommand(payload)) return null;
  if (!classification.browser && !classification.recovery_probe && !classification.static_verification) {
    return null;
  }

  if (event === "PreToolUse") {
    if (state.revision === 0) return null;
    if (classification.neutral) return null;
    if (classification.recovery_probe) return { type: "browser-recovery" };
    if (classification.browser) return { type: "browser-proof-start" };
    return { type: "static-proof-start" };
  }

  if (event === "PostToolUse") {
    if (classification.recovery_probe) return null;
    if (classification.browser && state.browser_proof === "running") {
      return {
        type: "browser-proof-finish",
        outcome: hookToolOutcome(payload) === "passed" ? "passed" : "unresolved",
      };
    }
    if (classification.static_verification && state.static_closure === "running") {
      return {
        type: "static-proof-finish",
        outcome: hookToolOutcome(payload),
      };
    }
  }
  return null;
}

export function applyHookPayload(previous, payload) {
  const event = mapHookPayloadToProofEvent(payload, previous);
  return event ? applyProofPolicyEvent(previous, event) : previous;
}

const DENY_RECOVERY_GUIDANCE = Object.freeze({
  "static-closure-required": "Next allowed step: run exactly one static verification command, then run one browser proof.",
  "duplicate-static-closure": "Next allowed step: do not retry static verification; run one browser proof if it is still open, otherwise stop tool use and deliver.",
  "verification-after-ready": "Next allowed step: stop tool use and deliver the result.",
  "proof-incomplete": "Next allowed step: finish the one remaining proof stage, then deliver the result.",
  "reflow-inventory-required": "Next allowed step: create .omd/reflow-closure.json with a locked carrier and row inventory before editing product UI.",
  "reflow-inventory-hash-invalid": "Next allowed step: recompute the immutable inventory hash from the ordered carrier bindings and rows before editing.",
  "reflow-inventory-changed": "Next allowed step: restore the pre-edit carrier inventory; do not remove or merge registered carriers after product editing starts.",
  "reflow-closure-required": "Next allowed step: after the browser attempt, account for every registered carrier and row at 390px, 320px, and 200% in .omd/reflow-closure.json before delivery.",
  "untracked-local-executor": "Next allowed step: use tracked read or native file-edit tools. Local REPL filesystem writes cannot satisfy or bypass the proof policy.",
  "native-browser-unintercepted": "The host did not intercept repeated native browser calls. Stop tool use and let the execution gate reject this run.",
});

export function proofPolicyDenyReason(reason) {
  const guidance = DENY_RECOVERY_GUIDANCE[reason];
  return `OmD proof policy: ${reason}${guidance ? `. ${guidance}` : ""}`;
}

export function proofPolicyHookDecision(state) {
  const latest = state.decisions.at(-1);
  if (!latest || latest.allow) return null;
  return {
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: proofPolicyDenyReason(latest.reason),
    },
  };
}

export function proofPolicyStopDecision(state, payload = {}) {
  if (Number(state?.violations?.native_browser_unintercepted ?? 0) > 0) {
    if (payload.stop_hook_active === true || payload.stopHookActive === true) return null;
    return {
      decision: "block",
      reason: proofPolicyDenyReason("native-browser-unintercepted"),
    };
  }
  const latest = state.decisions.at(-1);
  if (!latest || latest.event !== "delivery" || latest.allow) return null;
  // A single forced continuation is enough to expose the legal next step.
  // If the model still stops incomplete, allow the host to terminate and let
  // the completion gate fail rather than creating an unbounded stop loop.
  if (payload.stop_hook_active === true || payload.stopHookActive === true) return null;
  return {
    decision: "block",
    reason: proofPolicyDenyReason(latest.reason),
  };
}
