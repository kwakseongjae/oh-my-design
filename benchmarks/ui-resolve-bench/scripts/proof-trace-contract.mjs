import { createHash } from "node:crypto";
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
const REFLOW_ARTIFACT_LIFECYCLE = /^\s*(?:node\s+)?(?:["']?[^;\n|&]*\/)?reflow-artifact\.mjs["']?\s+(?:lock|source-fallback-open|finalize|finalize-unresolved)\s+["']?[^;\n|&]+["']?\s*$/i;
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
      event_id: item.id ?? null,
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
  const codexCommandOutcomes = new Map(events.flatMap((event) => {
    const item = event?.item ?? {};
    if (event?.type !== "item.completed" || item.type !== "command_execution" || !item.id) return [];
    const failed = item.status === "failed" || (Number.isInteger(item.exit_code) && item.exit_code !== 0);
    const succeeded = item.status === "completed" && item.exit_code === 0;
    return [[item.id, failed ? "failed" : succeeded ? "succeeded" : "unknown"]];
  }));
  return events.flatMap((event, index) => {
    const action = cursorAction(event, index) ?? codexAction(event, index);
    if (!action) return [];
    if (action.runtime === "codex" && action.kind === "command") {
      action.command_outcome = codexCommandOutcomes.get(action.event_id) ?? "unknown";
    }
    return [action];
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
      ...(action.kind === "command" ? { command_outcome: action.command_outcome ?? "unknown" } : {}),
      ...classification,
    });
  }

  for (const revision of revisions) {
    const browserCommands = revision.commands.filter((action) => action.browser);
    const recoveryProbes = revision.commands.filter((action) => action.recovery_probe);
    const staticCommands = revision.commands.filter(
      (action) => action.static_verification && action.command_outcome !== "failed",
    );
    const failedStaticCommands = revision.commands.filter(
      (action) => action.static_verification && action.command_outcome === "failed",
    );
    const firstBrowserIndex = browserCommands.at(0)?.index ?? null;
    const afterReady = firstBrowserIndex == null
      ? []
      : revision.commands.filter((action) => action.index > firstBrowserIndex && !action.neutral);
    revision.static_closure_count = staticCommands.length;
    revision.failed_static_closure_count = failedStaticCommands.length;
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
  const failedStaticClosureCount = sum("failed_static_closure_count");
  const verificationAfterReadyCount = sum("verification_after_ready_count");
  const analyzable = runtimes.length === 1 && productEdits.length > 0;
  const compliancePass = analyzable
    && browserRecoveryCount === 0
    && failedStaticClosureCount === 0
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
    failed_static_closure_count: failedStaticClosureCount,
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

const REQUIRED_REFLOW_CONDITIONS = [
  { id: "390", viewport_width: 390, zoom: 1 },
  { id: "320", viewport_width: 320, zoom: 1 },
  { id: "200pct", viewport_width: 640, zoom: 2 },
];

function shippedRunnerInvoked(trace, suffix = "scripts/reflow-browser.py") {
  return (trace?.revisions ?? []).some((revision) => (revision.commands ?? []).some((entry) => (
    entry.browser === true && String(entry.command ?? "").includes(suffix)
  )));
}

function artifactProofReasons(artifact, gate, context) {
  const enabled = gate.require_closed_reflow_artifact === true
    || gate.require_measured_browser_attempt === true
    || gate.require_exact_named_consumer_attachment === true
    || gate.require_actual_zoom_observation === true
    || gate.require_character_range_line_oracle === true
    || gate.require_locked_typography === true
    || gate.require_pre_edit_product_snapshot === true
    || gate.require_computed_pre_edit_typography === true
    || gate.comparison_scroll_requires_target_only_registered_carrier === true;
  if (!enabled) return { reasons: [], observed: null };
  if (!artifact || typeof artifact !== "object" || Array.isArray(artifact)) {
    return { reasons: ["reflow-artifact-missing"], observed: { artifact_present: false } };
  }

  const reasons = [];
  const attempt = artifact.browser_attempt;
  const conditions = Array.isArray(attempt?.conditions) ? attempt.conditions : [];
  if (artifact.static_closure?.state !== "passed" || artifact.static_closure?.attempts !== 1) {
    reasons.push("reflow-static-closure-not-passed");
  }
  if (gate.require_measured_browser_attempt === true && (
    attempt?.attempts !== 1 || attempt?.outcome !== "measured"
  )) reasons.push("reflow-browser-attempt-not-measured");
  if (gate.require_character_range_line_oracle === true && attempt?.oracle !== "character-range-line-tops") {
    reasons.push("reflow-character-range-oracle-missing");
  }
  if (gate.require_exact_named_consumer_attachment === true) {
    const expectedName = context.expectedConnectionName;
    if (
      attempt?.connection?.attached_existing !== true
      || attempt?.connection?.launched_browser !== false
      || typeof attempt?.connection?.connection_name !== "string"
      || !attempt.connection.connection_name
      || (expectedName && attempt.connection.connection_name !== expectedName)
    ) reasons.push("reflow-exact-consumer-attachment-missing");
  }
  if (gate.forbid_launched_browser === true && attempt?.connection?.launched_browser !== false) {
    reasons.push("reflow-browser-launch-detected");
  }
  if (gate.require_actual_zoom_observation === true) {
    const exactConditions = conditions.length === REQUIRED_REFLOW_CONDITIONS.length
      && REQUIRED_REFLOW_CONDITIONS.every((expected, index) => {
        const actual = conditions[index];
        return actual?.id === expected.id
          && actual?.viewport_width === expected.viewport_width
          && actual?.zoom === expected.zoom
          && actual?.observed_document_zoom === expected.zoom;
      });
    if (!exactConditions) reasons.push("reflow-measurement-conditions-incomplete");
  }
  if (Number.isFinite(gate.max_document_overflow_px)) {
    const max = gate.max_document_overflow_px;
    const overflow = conditions.some((condition) => (
      !Number.isFinite(condition?.document_scroll_width)
      || !Number.isFinite(condition?.document_client_width)
      || !Number.isFinite(condition?.body_scroll_width)
      || !Number.isFinite(condition?.body_client_width)
      || condition.document_scroll_width - condition.document_client_width > max
      || condition.body_scroll_width - condition.body_client_width > max
    ));
    if (!conditions.length || overflow) reasons.push("reflow-document-overflow-limit");
  }
  const snapshot = artifact.pre_edit_product_snapshot;
  const snapshotSource = typeof snapshot?.source_base64 === "string"
    ? Buffer.from(snapshot.source_base64, "base64")
    : null;
  const snapshotHashValid = snapshotSource !== null
    && /^[a-f0-9]{64}$/u.test(String(snapshot?.sha256 ?? ""))
    && createHash("sha256").update(snapshotSource).digest("hex") === snapshot.sha256;
  if (gate.require_pre_edit_product_snapshot === true && !snapshotHashValid) {
    reasons.push("reflow-pre-edit-product-snapshot-invalid");
  }
  if (gate.require_locked_typography === true || gate.require_computed_pre_edit_typography === true) {
    let unresolvedPreEditSelector = false;
    const changed = (artifact.row_groups ?? []).some((row) => {
      const measurements = row?.final?.measurements;
      if (!Array.isArray(measurements) || measurements.length !== REQUIRED_REFLOW_CONDITIONS.length) return true;
      if (row.typography_contract?.source === "deterministic-pre-edit-snapshot") {
        if (!snapshotHashValid) return true;
        const unresolved = measurements.some((value) => (
          value.pre_edit_snapshot_sha256 !== snapshot.sha256
          || !Number.isFinite(value.pre_edit_font_size_px)
          || !Number.isFinite(value.pre_edit_line_height_px)
          || value.pre_edit_font_weight === undefined
          || value.pre_edit_font_weight === null
        ));
        if (unresolved) {
          unresolvedPreEditSelector = true;
          return false;
        }
        return measurements.some((value) => (
          value.observed_font_size_px !== value.pre_edit_font_size_px
          || value.observed_line_height_px !== value.pre_edit_line_height_px
          || String(value.observed_font_weight) !== String(value.pre_edit_font_weight)
        ));
      }
      return measurements.some((value) => (
        value.observed_font_size_px !== row.typography_contract?.font_size_px
        || value.observed_line_height_px !== row.typography_contract?.line_height_px
        || String(value.observed_font_weight) !== String(row.typography_contract?.font_weight)
      ));
    });
    if (unresolvedPreEditSelector) reasons.push("reflow-pre-edit-selector-unresolved");
    if (changed) reasons.push("reflow-locked-typography-changed");
  }
  if (gate.comparison_scroll_requires_target_only_registered_carrier === true) {
    const invalidCarrier = (artifact.row_groups ?? [])
      .filter((row) => row.decision === "comparison-scroll")
      .some((row) => {
        const selector = row.scroll_contract?.container_selector;
        const carriers = (artifact.carriers ?? []).filter((carrier) => carrier.selector === selector);
        return !selector
          || selector === row.selector
          || carriers.length !== 1
          || carriers[0].expected_count !== 1
          || !Array.isArray(carriers[0].binds_row_groups)
          || carriers[0].binds_row_groups.length !== 1
          || carriers[0].binds_row_groups[0] !== row.id;
      });
    if (invalidCarrier) reasons.push("reflow-target-only-carrier-contract-missing");
  }
  if (Number.isFinite(gate.minimum_inline_fit_reserve_css_px)) {
    const insufficient = (artifact.row_groups ?? []).some((row) => (
      row.decision !== "comparison-scroll"
      && (row.final?.measurements ?? []).some((value) => (
        !Number.isFinite(value.inline_reserve_css_px)
        || value.inline_reserve_css_px < gate.minimum_inline_fit_reserve_css_px
      ))
    ));
    if (insufficient) reasons.push("reflow-inline-fit-reserve-insufficient");
  }
  if (Number.isInteger(gate.max_passive_protected_text_scroll_containers)) {
    const count = (artifact.row_groups ?? []).filter((row) => (
      row?.final?.passive_text_scroll_container === true
    )).length;
    if (count > gate.max_passive_protected_text_scroll_containers) {
      reasons.push("reflow-passive-text-scroll-limit");
    }
  }
  if (gate.require_closed_reflow_artifact === true && (
    artifact.closure?.state !== "closed"
    || artifact.known_failure_closure?.state !== "closed"
    || artifact.invariants?.all_registered_carriers_closed !== true
  )) reasons.push("reflow-artifact-not-closed");

  const runnerRequired = Array.isArray(gate.shipped_runner_system_ids)
    && gate.shipped_runner_system_ids.includes(context.systemId);
  const runnerInvoked = shippedRunnerInvoked(context.trace, gate.shipped_runner_command_suffix);
  if (runnerRequired && !runnerInvoked) reasons.push("shipped-reflow-runner-not-invoked");

  return {
    reasons,
    observed: {
      artifact_present: true,
      static_closure_state: artifact.static_closure?.state ?? null,
      browser_attempts: attempt?.attempts ?? null,
      browser_outcome: attempt?.outcome ?? null,
      attached_existing: attempt?.connection?.attached_existing ?? null,
      launched_browser: attempt?.connection?.launched_browser ?? null,
      measured_conditions: conditions.map((condition) => condition?.id ?? null),
      closure_state: artifact.closure?.state ?? null,
      shipped_runner_required: runnerRequired,
      shipped_runner_invoked: runnerInvoked,
    },
  };
}

export function evaluateProofExecutionGate(trace, gate, context = {}) {
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
  const artifactProof = artifactProofReasons(context.reflowArtifact, gate, {
    ...context,
    trace,
  });
  reasons.push(...artifactProof.reasons);
  return {
    enforcement: gate.enforcement,
    pass: reasons.length === 0,
    reasons,
    observed: {
      analyzable: trace?.analyzable === true,
      browser_recovery_count: trace?.browser_recovery_count ?? null,
      duplicate_static_closure_count: trace?.duplicate_static_closure_count ?? null,
      verification_after_ready_count: trace?.verification_after_ready_count ?? null,
      reflow_artifact: artifactProof.observed,
    },
    limits: {
      require_analyzable: gate.require_analyzable,
      max_browser_recovery_count: gate.max_browser_recovery_count,
      max_duplicate_static_closure_count: gate.max_duplicate_static_closure_count,
      max_verification_after_ready_count: gate.max_verification_after_ready_count,
      require_closed_reflow_artifact: gate.require_closed_reflow_artifact ?? false,
      require_measured_browser_attempt: gate.require_measured_browser_attempt ?? false,
      require_exact_named_consumer_attachment: gate.require_exact_named_consumer_attachment ?? false,
    },
  };
}
