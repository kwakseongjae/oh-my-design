import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { sha256 } from "./_lib.mjs";

export const HOST_POLICY_MODES = Object.freeze([
  "controller-observation",
  "installed-opt-in",
]);

export const PROOF_POLICY_FILES = Object.freeze([
  "proof-policy-hook.mjs",
  "proof-policy-hook-mapper.mjs",
  "proof-policy-state.mjs",
  "proof-trace-contract.mjs",
]);

const POLICY_COMMAND = "OMD_PROOF_POLICY_REFLOW_ARTIFACT=1 node \"$(git rev-parse --show-toplevel)/.codex/hooks/omd-proof-policy/proof-policy-hook.mjs\"";
const POLICY_MATCHER = "Bash|exec_command|functions\\.exec(?:_command)?|apply_patch|Edit|Write|mcp__node_repl__js|node_repl|mcp__agent-browser__browser_.*|mcp__browser-harness__browser_.*|mcp__browser__browser_.*";

function stripManagedMarker(content) {
  return content.replace(/^\/\/ omd:installed-hook sha256=[0-9a-f]{64}\r?\n/m, "");
}

export function renderManagedProofPolicyFile(source) {
  const raw = stripManagedMarker(source);
  const marker = `// omd:installed-hook sha256=${sha256(raw)}`;
  const shebangEnd = raw.startsWith("#!") ? raw.indexOf("\n") : -1;
  return shebangEnd >= 0
    ? `${raw.slice(0, shebangEnd + 1)}${marker}\n${raw.slice(shebangEnd + 1)}`
    : `${marker}\n${raw}`;
}

function hookGroup() {
  return {
    matcher: POLICY_MATCHER,
    hooks: [{ type: "command", command: POLICY_COMMAND, timeout: 3 }],
  };
}

function policyConfig() {
  return {
    hooks: {
      PreToolUse: [hookGroup()],
      PostToolUse: [hookGroup()],
      Stop: [{ hooks: [{ type: "command", command: POLICY_COMMAND, timeout: 3 }] }],
    },
  };
}

function sourceRoot(repoRoot) {
  return join(repoRoot, "benchmarks", "ui-resolve-bench", "scripts");
}

function installedRoot(workspace) {
  return join(workspace, ".codex", "hooks", "omd-proof-policy");
}

function configPath(workspace) {
  return join(workspace, ".codex", "hooks.json");
}

function containsPolicyHook(config) {
  return JSON.stringify(config ?? {}).includes("omd-proof-policy/proof-policy-hook.mjs");
}

function fileAttestation(path) {
  return {
    path,
    sha256: sha256(readFileSync(path)),
  };
}

export function inspectPreparedHostPolicy(repoRoot, workspace, mode) {
  const root = resolve(workspace);
  const gitRoot = existsSync(join(root, ".git"));
  const config = configPath(root);
  let parsed = null;
  if (existsSync(config)) {
    try { parsed = JSON.parse(readFileSync(config, "utf8")); } catch { parsed = null; }
  }
  const installedFiles = PROOF_POLICY_FILES.flatMap((filename) => {
    const destination = join(installedRoot(root), filename);
    if (!existsSync(destination)) return [];
    return [{ filename, ...fileAttestation(destination) }];
  });
  const sourceFiles = PROOF_POLICY_FILES.map((filename) => {
    const path = join(sourceRoot(repoRoot), filename);
    return { filename, ...fileAttestation(path) };
  });
  const expectedInstalledFiles = sourceFiles.map(({ filename, path }) => ({
    filename,
    sha256: sha256(renderManagedProofPolicyFile(readFileSync(path, "utf8"))),
  }));
  const exactFiles = expectedInstalledFiles.every((expected) => (
    installedFiles.some((installed) => (
      installed.filename === expected.filename && installed.sha256 === expected.sha256
    ))
  )) && installedFiles.length === expectedInstalledFiles.length;
  const exactConfig = parsed !== null
    && JSON.stringify(parsed) === JSON.stringify(policyConfig());
  const hooksEnabled = containsPolicyHook(parsed);
  const ready = mode === "installed-opt-in"
    ? gitRoot && exactConfig && exactFiles
    : gitRoot && !hooksEnabled && installedFiles.length === 0;

  return {
    schema_version: "0.1",
    mode,
    target: "codex",
    git_root: gitRoot,
    hooks_enabled: hooksEnabled,
    ready,
    config: existsSync(config)
      ? { path: ".codex/hooks.json", sha256: sha256(readFileSync(config)) }
      : null,
    source_files: sourceFiles.map(({ filename, sha256: digest }) => ({ filename, sha256: digest })),
    installed_files: installedFiles.map(({ filename, sha256: digest }) => ({ filename, sha256: digest })),
    expected_installed_files: expectedInstalledFiles,
    state_dir: ".omd/proof-policy",
    delivery: mode === "installed-opt-in"
      ? "canonical-managed-files-and-production-config"
      : "controller-observation-only",
  };
}

export function prepareHostPolicyCell(repoRoot, workspace, mode) {
  if (!HOST_POLICY_MODES.includes(mode)) throw new Error(`unsupported host policy mode: ${mode}`);
  execFileSync("git", ["init", "--quiet", workspace], { stdio: "pipe" });
  if (mode === "installed-opt-in") {
    const destination = installedRoot(workspace);
    mkdirSync(destination, { recursive: true });
    for (const filename of PROOF_POLICY_FILES) {
      const source = readFileSync(join(sourceRoot(repoRoot), filename), "utf8");
      writeFileSync(join(destination, filename), renderManagedProofPolicyFile(source), "utf8");
    }
    mkdirSync(join(workspace, ".codex"), { recursive: true });
    writeFileSync(configPath(workspace), `${JSON.stringify(policyConfig(), null, 2)}\n`, "utf8");
  }
  const attestation = inspectPreparedHostPolicy(repoRoot, workspace, mode);
  if (!attestation.ready) throw new Error(`host policy preparation failed for ${workspace}`);
  return attestation;
}

export function summarizeHostPolicyStates(workspace) {
  const stateRoot = join(resolve(workspace), ".omd", "proof-policy");
  if (!existsSync(stateRoot)) {
    return {
      schema_version: "0.1",
      available: false,
      state_files: 0,
      valid_state_files: 0,
      decisions: 0,
      denied_decisions: 0,
      denied_reasons: {},
      delivery_ready_state_files: 0,
      delivery_blocked_state_files: 0,
      browser_attempts_total: 0,
      min_browser_attempts_per_state: null,
      violations: {
        browser_recovery: 0,
        duplicate_static_closure: 0,
        verification_after_ready: 0,
        native_browser_unintercepted: 0,
      },
    };
  }
  const paths = readdirSync(stateRoot)
    .filter((name) => name.endsWith(".json"))
    .sort()
    .map((name) => join(stateRoot, name));
  const summary = {
    schema_version: "0.1",
    available: paths.length > 0,
    state_files: paths.length,
    valid_state_files: 0,
    decisions: 0,
    denied_decisions: 0,
    denied_reasons: {},
    delivery_ready_state_files: 0,
    delivery_blocked_state_files: 0,
    browser_attempts_total: 0,
    min_browser_attempts_per_state: null,
    violations: {
      browser_recovery: 0,
      duplicate_static_closure: 0,
      verification_after_ready: 0,
      native_browser_unintercepted: 0,
    },
    state_tree_sha256: null,
  };
  const digest = createHash("sha256");
  for (const path of paths) {
    const raw = readFileSync(path, "utf8");
    digest.update(raw);
    let parsed;
    try { parsed = JSON.parse(raw); } catch { continue; }
    if (parsed?.schema_version !== "0.1" || !Array.isArray(parsed?.state?.decisions)) continue;
    summary.valid_state_files += 1;
    if (parsed.state.delivery === "ready") summary.delivery_ready_state_files += 1;
    else summary.delivery_blocked_state_files += 1;
    const browserAttempts = Number.isInteger(parsed.state.browser_attempts)
      && parsed.state.browser_attempts >= 0
      ? parsed.state.browser_attempts
      : 0;
    summary.browser_attempts_total += browserAttempts;
    summary.min_browser_attempts_per_state = summary.min_browser_attempts_per_state === null
      ? browserAttempts
      : Math.min(summary.min_browser_attempts_per_state, browserAttempts);
    for (const decision of parsed.state.decisions) {
      summary.decisions += 1;
      if (decision?.allow === false) {
        summary.denied_decisions += 1;
        const reason = String(decision?.reason ?? "unknown");
        summary.denied_reasons[reason] = (summary.denied_reasons[reason] ?? 0) + 1;
      }
    }
    for (const field of Object.keys(summary.violations)) {
      summary.violations[field] += Number(parsed.state?.violations?.[field] ?? 0);
    }
  }
  summary.state_tree_sha256 = paths.length ? digest.digest("hex") : null;
  return summary;
}

export function evaluateHostPolicyGate(installation, observed, proofTrace, gate) {
  if (!gate || !installation) return null;
  if (installation.mode === "controller-observation") {
    return {
      mode: installation.mode,
      pass: observed?.available === false,
      reasons: observed?.available === false ? [] : ["unexpected-policy-state"],
      observed: { policy_state_available: observed?.available === true },
    };
  }
  const reasons = [];
  if (installation.ready !== true || installation.hooks_enabled !== true) {
    reasons.push("installed-policy-not-ready");
  }
  if (gate.require_installed_state === true && observed?.available !== true) {
    reasons.push("installed-policy-state-missing");
  }
  if (
    observed?.available === true
    && observed.valid_state_files !== observed.state_files
  ) {
    reasons.push("installed-policy-state-invalid");
  }
  if (
    gate.require_delivery_ready === true
    && (
      observed?.valid_state_files < 1
      || observed.delivery_ready_state_files !== observed.valid_state_files
    )
  ) {
    reasons.push("installed-policy-delivery-incomplete");
  }
  if (
    gate.require_browser_attempt === true
    && (
      observed?.valid_state_files < 1
      || observed.min_browser_attempts_per_state < 1
    )
  ) {
    reasons.push("installed-policy-browser-attempt-missing");
  }
  if (Number(observed?.violations?.native_browser_unintercepted ?? 0) > 0) {
    reasons.push("native-browser-unintercepted");
  }
  if (proofTrace?.analyzable !== true) reasons.push("proof-trace-not-analyzable");
  const unblocked = {
    browser_recovery: Math.max(
      0,
      Number(proofTrace?.browser_recovery_count ?? 0)
        - Number(observed?.violations?.browser_recovery ?? 0),
    ),
    duplicate_static_closure: Math.max(
      0,
      Number(proofTrace?.duplicate_static_closure_count ?? 0)
        - Number(observed?.violations?.duplicate_static_closure ?? 0),
    ),
    verification_after_ready: Math.max(
      0,
      Number(proofTrace?.verification_after_ready_count ?? 0)
        - Number(observed?.violations?.verification_after_ready ?? 0),
    ),
  };
  for (const [field, limitField] of [
    ["browser_recovery", "max_unblocked_browser_recovery_count"],
    ["duplicate_static_closure", "max_unblocked_duplicate_static_closure_count"],
    ["verification_after_ready", "max_unblocked_verification_after_ready_count"],
  ]) {
    if (unblocked[field] > gate[limitField]) reasons.push(`${field}-unblocked-limit`);
  }
  return {
    mode: installation.mode,
    pass: reasons.length === 0,
    reasons,
    observed: {
      policy_state_available: observed?.available === true,
      valid_state_files: observed?.valid_state_files ?? 0,
      state_files: observed?.state_files ?? 0,
      denied_decisions: observed?.denied_decisions ?? 0,
      denied_reasons: observed?.denied_reasons ?? {},
      delivery_ready_state_files: observed?.delivery_ready_state_files ?? 0,
      delivery_blocked_state_files: observed?.delivery_blocked_state_files ?? 0,
      browser_attempts_total: observed?.browser_attempts_total ?? 0,
      min_browser_attempts_per_state: observed?.min_browser_attempts_per_state ?? null,
      violations: observed?.violations ?? null,
      unblocked,
    },
    limits: {
      require_installed_state: gate.require_installed_state,
      require_delivery_ready: gate.require_delivery_ready === true,
      require_browser_attempt: gate.require_browser_attempt === true,
      max_unblocked_browser_recovery_count: gate.max_unblocked_browser_recovery_count,
      max_unblocked_duplicate_static_closure_count: gate.max_unblocked_duplicate_static_closure_count,
      max_unblocked_verification_after_ready_count: gate.max_unblocked_verification_after_ready_count,
    },
  };
}
