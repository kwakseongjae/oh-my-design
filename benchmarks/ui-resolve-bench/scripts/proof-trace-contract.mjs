import { readFileSync } from "node:fs";

const IGNORED_EDIT_DIRECTORIES = new Set([
  ".agents",
  ".benchmark",
  ".codex",
  ".cursor",
  ".omd",
]);

const IGNORED_EDIT_BASENAMES = new Set([
  "AGENTS.md",
  "DESIGN.md",
]);

const BROWSER_HARNESS_INVOCATION = /(?:^|[\n;&|()"'`])\s*(?:[A-Z_][A-Z0-9_]*=\S+\s+)*(?:\S*\/)?browser-harness(?:\s+(?!--doctor\b)|\s*$)/i;
const OTHER_BROWSER_MECHANISM = /(?:google(?:\s+|\\\s*)chrome[^\n]*(?:--headless|--screenshot)|chromium[^\n]*(?:\.launch|--headless|--screenshot)|playwright[^\n]*(?:\.launch|screenshot|capture)|osascript[^\n]*(?:google\s+chrome|chromium|safari)[^\n]*(?:open\s+location|execute\s+javascript|active\s+tab|url)|screenshot=)/i;
const BROWSER_DISCOVERY = /(?:browser-harness\s+--doctor|command\s+-v\s+(?:chrom|google-chrome|playwright)|which\s+(?:chrom|google-chrome|playwright|osascript)|ls\s+[^\n]*(?:google\\?\s*chrome|chromium)|find\s+[^\n]*playwright|require\.resolve\(['"]playwright|import\s+playwright)/i;
const FORBIDDEN_BROWSER_LAUNCH = /(?:\b(?:chromium|firefox|webkit)\.launch(?:_persistent_context)?\s*\(|\bp\.(?:chromium|firefox|webkit)\.launch(?:_persistent_context)?\s*\()/i;
const BROWSER_INSTRUCTION_READ = /(?:sed|cat|head|tail|less|rg)\b[^\n]*browser-harness[^\n]*SKILL\.md/i;
const REFLOW_ARTIFACT_LIFECYCLE = /^\s*(?:node\s+)?(?:["']?[^;\n|&]*\/)?reflow-artifact\.mjs["']?\s+(?:lock|finalize|finalize-unresolved)\s+["']?[^;\n|&]+["']?\s*$/i;
const NATIVE_BROWSER_TOOL = /^mcp__(?:agent-browser|browser-harness|browser)__browser_(?!new_session$|close(?:_|$)|list(?:_|$)|get_url$)/i;
const NATIVE_BROWSER_NEUTRAL_TOOL = /^mcp__(?:agent-browser|browser-harness|browser)__browser_(?:new_session|close(?:_|$)|list(?:_|$)|get_url$)/i;

export function classifyProofCommand(command) {
  const value = String(command ?? "");
  const neutral = BROWSER_INSTRUCTION_READ.test(value) || REFLOW_ARTIFACT_LIFECYCLE.test(value);
  const browser = BROWSER_HARNESS_INVOCATION.test(value) || OTHER_BROWSER_MECHANISM.test(value);
  const recoveryProbe = BROWSER_DISCOVERY.test(value) || FORBIDDEN_BROWSER_LAUNCH.test(value);
  return {
    browser: !neutral && browser,
    recovery_probe: !neutral && recoveryProbe,
    static_verification: !neutral && !browser && !recoveryProbe,
    neutral,
  };
}

export function classifyProofTool(name) {
  const value = String(name ?? "");
  const browser = NATIVE_BROWSER_TOOL.test(value);
  const neutral = NATIVE_BROWSER_NEUTRAL_TOOL.test(value);
  return {
    browser,
    recovery_probe: false,
    static_verification: false,
    neutral,
  };
}

function parseJsonl(text) {
  return text.split("\n").filter(Boolean).flatMap((line) => {
    try {
      return [JSON.parse(line)];
    } catch {
      return [];
    }
  });
}

function basename(path) {
  return String(path ?? "").replaceAll("\\", "/").split("/").at(-1) ?? "";
}

export function isProductEditPath(path) {
  const normalized = String(path ?? "").replaceAll("\\", "/");
  if (!normalized) return false;
  if (normalized.split("/").some((segment) => IGNORED_EDIT_DIRECTORIES.has(segment))) return false;
  return !IGNORED_EDIT_BASENAMES.has(basename(normalized));
}

function cursorAction(event, index) {
  if (event?.type !== "tool_call" || event?.subtype !== "started") return null;
  const call = event.tool_call ?? {};
  if (call.editToolCall) {
    return {
      index,
      kind: "edit",
      runtime: "cursor",
      paths: [call.editToolCall.args?.path].filter(Boolean),
    };
  }
  if (call.shellToolCall) {
    return {
      index,
      kind: "command",
      runtime: "cursor",
      command: String(call.shellToolCall.args?.command ?? ""),
    };
  }
  return null;
}

function codexAction(event, index) {
  if (event?.type !== "item.started") return null;
  const item = event.item ?? {};
  if (item.type === "file_change") {
    return {
      index,
      kind: "edit",
      runtime: "codex",
      paths: (item.changes ?? []).map((change) => change.path).filter(Boolean),
    };
  }
  if (item.type === "command_execution") {
    return {
      index,
      kind: "command",
      runtime: "codex",
      command: String(item.command ?? ""),
    };
  }
  if (item.type === "mcp_tool_call") {
    const tool = `mcp__${String(item.server ?? "")}__${String(item.tool ?? "")}`;
    const classification = classifyProofTool(tool);
    if (!classification.browser && !classification.neutral) return null;
    return {
      index,
      kind: "native-tool",
      runtime: "codex",
      tool,
      classification,
    };
  }
  return null;
}

export function normalizeProofTrace(events) {
  return events.flatMap((event, index) => {
    const action = cursorAction(event, index) ?? codexAction(event, index);
    return action ? [action] : [];
  });
}

export function countNativeBrowserProofCalls(events) {
  return normalizeProofTrace(events).filter(
    (action) => action.kind === "native-tool" && action.classification?.browser === true,
  ).length;
}

export function countNativeBrowserProofCallsFile(path) {
  return countNativeBrowserProofCalls(parseJsonl(readFileSync(path, "utf8")));
}

export function classifyProofTrace(events) {
  const actions = normalizeProofTrace(events);
  const runtimes = [...new Set(actions.map((action) => action.runtime))];
  const productEdits = actions.filter(
    (action) => action.kind === "edit" && action.paths.some(isProductEditPath),
  );
  const lastProductEditIndex = productEdits.at(-1)?.index ?? null;
  const revisions = [];
  let currentRevision = null;
  let commandSeenInRevision = false;
  for (const action of actions) {
    if (action.kind === "edit" && action.paths.some(isProductEditPath)) {
      if (!currentRevision || commandSeenInRevision) {
        currentRevision = {
          revision: revisions.length + 1,
          first_edit_event_index: action.index,
          last_edit_event_index: action.index,
          edit_count: 1,
          commands: [],
        };
        revisions.push(currentRevision);
        commandSeenInRevision = false;
      } else {
        currentRevision.last_edit_event_index = action.index;
        currentRevision.edit_count += 1;
      }
      continue;
    }
    if (!["command", "native-tool"].includes(action.kind) || !currentRevision) continue;
    commandSeenInRevision = true;
    const classification = action.kind === "native-tool"
      ? action.classification
      : classifyProofCommand(action.command);
    currentRevision.commands.push({
      index: action.index,
      command: action.kind === "native-tool" ? action.tool : action.command,
      mechanism: action.kind === "native-tool" ? "native-tool" : "shell",
      ...classification,
    });
  }

  for (const revision of revisions) {
    const browserCommands = revision.commands.filter((action) => action.browser);
    const recoveryProbes = revision.commands.filter((action) => action.recovery_probe);
    const staticCommands = revision.commands.filter((action) => action.static_verification);
    const firstBrowserIndex = browserCommands.at(0)?.index ?? null;
    const afterReady = firstBrowserIndex == null
      ? []
      : revision.commands.filter((action) => action.index > firstBrowserIndex && !action.neutral);
    revision.static_closure_count = staticCommands.length;
    revision.browser_mechanism_count = browserCommands.length;
    revision.browser_recovery_probe_count = recoveryProbes.length;
    revision.browser_recovery_count = recoveryProbes.length + Math.max(0, browserCommands.length - 1);
    revision.duplicate_static_closure_count = Math.max(0, staticCommands.length - 1);
    revision.verification_after_ready_count = afterReady.length;
  }

  const sum = (field) => revisions.reduce((total, revision) => total + revision[field], 0);
  const postEditCommands = revisions.flatMap((revision) => revision.commands);
  const browserRecoveryCount = sum("browser_recovery_count");
  const duplicateStaticClosureCount = sum("duplicate_static_closure_count");
  const verificationAfterReadyCount = sum("verification_after_ready_count");
  const analyzable = runtimes.length === 1 && productEdits.length > 0;
  const compliancePass = analyzable
    && browserRecoveryCount === 0
    && duplicateStaticClosureCount === 0
    && verificationAfterReadyCount === 0;

  return {
    schema_version: "0.1",
    runtime: runtimes.length === 1 ? runtimes[0] : runtimes.length === 0 ? null : "mixed",
    analyzable,
    product_edit_count: productEdits.length,
    product_revision_count: revisions.length,
    last_product_edit_event_index: lastProductEditIndex,
    post_edit_command_count: postEditCommands.length,
    static_closure_count: sum("static_closure_count"),
    browser_mechanism_count: sum("browser_mechanism_count"),
    browser_recovery_probe_count: sum("browser_recovery_probe_count"),
    browser_recovery_count: browserRecoveryCount,
    duplicate_static_closure_count: duplicateStaticClosureCount,
    verification_after_ready_count: verificationAfterReadyCount,
    compliance_pass: compliancePass,
    revisions,
  };
}

export function classifyProofTraceFile(path) {
  return classifyProofTrace(parseJsonl(readFileSync(path, "utf8")));
}

export function evaluateProofExecutionGate(trace, gate) {
  if (!gate) return null;
  const reasons = [];
  if (gate.require_analyzable === true && trace?.analyzable !== true) {
    reasons.push("proof-trace-not-analyzable");
  }
  for (const [field, limitField, reason] of [
    ["browser_recovery_count", "max_browser_recovery_count", "browser-recovery-limit"],
    ["duplicate_static_closure_count", "max_duplicate_static_closure_count", "duplicate-static-limit"],
    ["verification_after_ready_count", "max_verification_after_ready_count", "verification-after-ready-limit"],
  ]) {
    if (Number(trace?.[field] ?? Number.POSITIVE_INFINITY) > gate[limitField]) reasons.push(reason);
  }
  return {
    enforcement: gate.enforcement,
    pass: reasons.length === 0,
    reasons,
    observed: {
      analyzable: trace?.analyzable === true,
      browser_recovery_count: trace?.browser_recovery_count ?? null,
      duplicate_static_closure_count: trace?.duplicate_static_closure_count ?? null,
      verification_after_ready_count: trace?.verification_after_ready_count ?? null,
    },
    limits: {
      require_analyzable: gate.require_analyzable,
      max_browser_recovery_count: gate.max_browser_recovery_count,
      max_duplicate_static_closure_count: gate.max_duplicate_static_closure_count,
      max_verification_after_ready_count: gate.max_verification_after_ready_count,
    },
  };
}
