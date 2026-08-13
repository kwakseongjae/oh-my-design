#!/usr/bin/env node
import { spawnSync, execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  cpSync, existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync, appendFileSync,
} from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { inspectCodexModelToolMode } from "./codex-tool-mode-contract.mjs";

export const RUNNER_PATH = "benchmarks/ui-resolve-bench/scripts/run-luna-max-wow-preview-cell.mjs";
export const ADMISSION_GENERATOR_PATH = "benchmarks/ui-resolve-bench/scripts/admit-luna-max-wow-preview.mjs";
export const PREREG_CONTROLLER_PATH = "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-wow-preview.mjs";
export const DEFAULT_RUNNER_PATH = "benchmarks/ui-resolve-bench/scripts/run-codex.mjs";
export const DEFAULT_EVALUATOR_PATH = "benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs";
export const MODEL = "gpt-5.6-luna";
export const EFFORT = "max";
export const TIMEOUT_MS = 900_000;
const HERE = dirname(fileURLToPath(import.meta.url));
const DEFAULT_REPO_ROOT = resolve(HERE, "../../..");

function invariant(value, message) { if (!value) throw new Error(message); }
export function sha256(value) { return createHash("sha256").update(value).digest("hex"); }
function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}
function readJson(path) { return JSON.parse(readFileSync(path, "utf8")); }
function writeJsonExclusive(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx" });
}
function parseArgs(argv) {
  const values = new Map();
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    if (!key.startsWith("--")) continue;
    const next = argv[index + 1];
    invariant(next && !next.startsWith("--"), `missing value for ${key}`);
    values.set(key.slice(2), next); index += 1;
  }
  return values;
}
function strictKeys(value, keys, label) {
  invariant(value && typeof value === "object" && !Array.isArray(value), `${label} must be an object`);
  invariant(canonical(Object.keys(value).sort()) === canonical([...keys].sort()), `${label} schema drift`);
}
function regular(path, label) {
  invariant(existsSync(path), `${label} missing`);
  const info = lstatSync(path); invariant(info.isFile() && !info.isSymbolicLink(), `${label} must be a regular file`);
}
function directory(path, label) {
  invariant(existsSync(path), `${label} missing`);
  const info = lstatSync(path); invariant(info.isDirectory() && !info.isSymbolicLink(), `${label} must be a directory`);
}
function git(root, ...args) { return execFileSync("git", ["-C", root, ...args], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim(); }
function committedBytes(root, commit, path) { return execFileSync("git", ["-C", root, "show", `${commit}:${path}`], { encoding: "buffer" }); }

function walk(root, current = root, ignored = new Set()) {
  const files = [];
  for (const name of readdirSync(current).sort()) {
    const absolute = join(current, name); const rel = relative(root, absolute).split(sep).join("/");
    if ([...ignored].some((prefix) => rel === prefix || rel.startsWith(`${prefix}/`))) continue;
    const info = lstatSync(absolute); invariant(!info.isSymbolicLink(), `symlink forbidden: ${rel}`);
    if (info.isDirectory()) files.push(...walk(root, absolute, ignored));
    else { invariant(info.isFile(), `unsupported entry: ${rel}`); files.push({ path: rel, mode: info.mode & 0o777, bytes: info.size, sha256: sha256(readFileSync(absolute)) }); }
  }
  return files;
}
export function tree(root, ignore = []) {
  const files = walk(root, root, new Set(ignore));
  return { files, sha256: sha256(files.map((file) => `${file.path}\0${file.mode}\0${file.sha256}`).join("\n")) };
}
function summary(root, ignore = []) { const manifest = tree(root, ignore); return { files: manifest.files.length, bytes: manifest.files.reduce((n, f) => n + f.bytes, 0), sha256: manifest.sha256 }; }
function binding(path) { regular(path, `binding ${path}`); const bytes = readFileSync(path); return { path: resolve(path), sha256: sha256(bytes), bytes: bytes.length, value: JSON.parse(bytes) }; }
function assertBinding(actual, expected, label) {
  strictKeys(expected, ["path", "sha256"], `${label} binding`);
  invariant(resolve(expected.path) === actual.path && expected.sha256 === actual.sha256, `${label} binding drift`);
}

export function assertCleanSource({ repoRoot, sourceCommit }) {
  invariant(/^[0-9a-f]{40}$/.test(sourceCommit), "source commit must be a full SHA");
  invariant(git(repoRoot, "rev-parse", "HEAD") === sourceCommit, "source commit drift");
  invariant(git(repoRoot, "status", "--porcelain=v1", "--untracked-files=all") === "", "source must be exact clean HEAD");
  for (const path of [RUNNER_PATH, PREREG_CONTROLLER_PATH, DEFAULT_EVALUATOR_PATH]) {
    const current = readFileSync(join(repoRoot, path));
    invariant(Buffer.compare(current, committedBytes(repoRoot, sourceCommit, path)) === 0, `source authority differs from commit: ${path}`);
  }
}

function validateReceiptCalls(receipt, label, expected) {
  for (const [key, count] of Object.entries(expected)) invariant(receipt[key] === count, `${label} ${key} drift`);
  invariant(receipt.source_commit && /^[0-9a-f]{40}$/.test(receipt.source_commit), `${label} source commit missing`);
}

export function validateAdmission({ admissionPath, materializedRoot, runtimePath, browserPath, sourceCommit, repoRoot }) {
  const admissionEvidence = binding(admissionPath); const admission = admissionEvidence.value;
  strictKeys(admission, ["schema_version", "kind", "decision", "reviewer_role", "attestation", "source_commit", "generator_authority", "controller_authority", "bindings", "provider_calls", "model_calls", "browser_calls", "network_calls"], "admission");
  invariant(admission.schema_version === "0.1" && admission.kind === "omd-luna-max-sol-xhigh-admission", "admission identity drift");
  invariant(admission.decision === "admitted" && admission.reviewer_role === "sol-xhigh-planning-review", "independent admission missing");
  strictKeys(admission.attestation, ["type", "cryptographic_identity_verified", "statement"], "admission attestation");
  invariant(admission.attestation.type === "role-attestation" && admission.attestation.cryptographic_identity_verified === false && /not cryptographic identity verification/i.test(admission.attestation.statement), "admission attestation boundary drift");
  invariant(admission.source_commit === sourceCommit, "admission source commit drift");
  validateReceiptCalls(admission, "admission", { provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  strictKeys(admission.generator_authority, ["path", "sha256"], "generator authority");
  invariant(admission.generator_authority.path === ADMISSION_GENERATOR_PATH, "admission generator path drift");
  const generatorCurrent = readFileSync(join(repoRoot, ADMISSION_GENERATOR_PATH));
  invariant(admission.generator_authority.sha256 === sha256(generatorCurrent) && Buffer.compare(generatorCurrent, committedBytes(repoRoot, sourceCommit, ADMISSION_GENERATOR_PATH)) === 0, "admission generator authority drift");
  strictKeys(admission.controller_authority, ["path", "sha256"], "controller authority");
  invariant(admission.controller_authority.path === PREREG_CONTROLLER_PATH, "preregistration controller path drift");
  const controllerCurrent = readFileSync(join(repoRoot, PREREG_CONTROLLER_PATH));
  invariant(admission.controller_authority.sha256 === sha256(controllerCurrent), "preregistration controller hash drift");
  invariant(Buffer.compare(controllerCurrent, committedBytes(repoRoot, sourceCommit, PREREG_CONTROLLER_PATH)) === 0, "preregistration controller is not committed authority");
  strictKeys(admission.bindings, ["matrix", "preregistration", "materialization", "schema", "static_runtime", "runtime_attribution", "browser_identity", "evaluation_runtime"], "admission bindings");
  const materialization = binding(join(materializedRoot, "MATERIALIZATION.json"));
  const runtime = binding(runtimePath); const browser = binding(browserPath);
  const evidence = {
    matrix: binding(admission.bindings.matrix.path), preregistration: binding(admission.bindings.preregistration.path), materialization,
    schema: binding(admission.bindings.schema.path), static_runtime: binding(admission.bindings.static_runtime.path), runtime_attribution: runtime, browser_identity: browser, evaluation_runtime: binding(admission.bindings.evaluation_runtime.path),
  };
  for (const [key, item] of Object.entries(evidence)) assertBinding(item, admission.bindings[key], key);
  invariant(resolve(admission.bindings.materialization.path) === resolve(materializedRoot, "MATERIALIZATION.json"), "materialization path must be exact");
  invariant(resolve(admission.bindings.runtime_attribution.path) === resolve(runtimePath), "runtime receipt path must be exact");
  invariant(resolve(admission.bindings.browser_identity.path) === resolve(browserPath), "browser receipt path must be exact");
  const matrix = evidence.matrix.value; const prereg = evidence.preregistration.value; const manifest = materialization.value;
  invariant(matrix.kind === "omd-luna-max-wow-preview" && matrix.source_commit === sourceCommit && matrix.scheduled_provider_cells === 48 && matrix.ineligible_unexecuted_slots === 6, "matrix drift");
  invariant(prereg.kind === "omd-luna-max-wow-preview-preregistration-receipt" && prereg.source_commit === sourceCommit && prereg.matrix_sha256 === evidence.matrix.sha256 && prereg.provider_execution_allowed === false, "preregistration drift");
  invariant(manifest.kind === "omd-luna-max-provider-zero-materialization" && manifest.source_commit === sourceCommit && manifest.prepared_cells === 48 && manifest.ineligible_unexecuted_slots === 6, "materialization drift");
  invariant(manifest.locked_root_sha256 && manifest.execution?.model === MODEL && manifest.execution?.effort === EFFORT && manifest.execution?.retry_budget === 0 && manifest.execution?.replacement_budget === 0 && manifest.execution?.fallback_budget === 0, "materialization execution policy drift");
  invariant(evidence.schema.value.kind === "public-core-schema-liveness-receipt" && evidence.schema.value.pass === true, "schema receipt not passing");
  invariant(evidence.static_runtime.value.kind === "codex-luna-max-static-runtime-capability" && evidence.static_runtime.value.pass === true, "static runtime receipt not passing");
  validateReceiptCalls(evidence.static_runtime.value, "static runtime", { provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  invariant(/^[a-f0-9]{64}$/.test(evidence.static_runtime.value.runtime?.catalog_sha256 ?? "")
    && /^[a-f0-9]{64}$/.test(evidence.static_runtime.value.runtime?.model_profile_sha256 ?? ""), "static runtime catalog/profile binding drift");
  invariant(evidence.runtime_attribution.value.kind === "codex-luna-max-runtime-attribution-preflight" && evidence.runtime_attribution.value.excluded_from_benchmark_denominator === true && evidence.runtime_attribution.value.runtime?.model === MODEL && evidence.runtime_attribution.value.runtime?.effort === EFFORT && evidence.runtime_attribution.value.runtime?.fallback_calls === 0, "runtime attribution drift");
  validateReceiptCalls(evidence.runtime_attribution.value, "runtime attribution", { provider_calls: 1, model_calls: 1, browser_calls: 0 });
  invariant(evidence.browser_identity.value.kind === "named-existing-browser-identity-preflight" && evidence.browser_identity.value.browser?.named_existing === true && evidence.browser_identity.value.browser?.launched_by_controller === false && evidence.browser_identity.value.browser?.url === "about:blank", "browser identity drift");
  validateReceiptCalls(evidence.browser_identity.value, "browser identity", { provider_calls: 0, model_calls: 0, browser_calls: 1 });
  const evaluationRuntime = evidence.evaluation_runtime.value;
  invariant(evaluationRuntime.kind === "omd-luna-max-evaluation-runtime-receipt" && evaluationRuntime.pass === true && evaluationRuntime.source_commit === sourceCommit, "evaluation runtime identity drift");
  validateReceiptCalls(evaluationRuntime, "evaluation runtime", { provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  const declaredEvaluator = manifest.evaluator_authority?.evaluator;
  invariant(declaredEvaluator?.path === DEFAULT_EVALUATOR_PATH && evaluationRuntime.evaluation_authorities?.evaluator?.path === declaredEvaluator.path && evaluationRuntime.evaluation_authorities.evaluator.sha256 === declaredEvaluator.sha256 && evaluationRuntime.evaluation_authorities.evaluator.sha256 === sha256(readFileSync(join(repoRoot, DEFAULT_EVALUATOR_PATH))), "evaluation authority drift");
  invariant(isAbsolute(evaluationRuntime.browser?.executable_path ?? "") && /^[a-f0-9]{64}$/.test(evaluationRuntime.browser?.executable_sha256 ?? "") && evaluationRuntime.browser.executable_sha256 === sha256(readFileSync(evaluationRuntime.browser.executable_path)) && typeof evaluationRuntime.browser.version === "string" && evaluationRuntime.browser.version && /^[a-f0-9]{64}$/.test(evaluationRuntime.fonts?.sha256 ?? ""), "evaluation browser/font runtime drift");
  for (const item of Object.values(evidence)) invariant(item.value.source_commit === sourceCommit, `receipt source drift: ${item.path}`);
  return { admissionEvidence, admission, matrix, prereg, manifest, evidence };
}

function terminalPath(cell) {
  const root = join(cell, ".benchmark/execution");
  return ["COMPLETED.json", "FAILED.json", "TIMEOUT.json", "INFRASTRUCTURE-INVALID.json"].map((name) => join(root, name)).find(existsSync) ?? null;
}
function stateLine(root, value) { appendFileSync(join(root, "EXECUTION-STATE.jsonl"), `${JSON.stringify(value)}\n`, { encoding: "utf8" }); }
export function reconcileCrashes(materializedRoot, manifest) {
  const reconciled = [];
  for (const cell of manifest.cells) {
    const workspace = join(materializedRoot, "prepared-cells", cell.id); const execution = join(workspace, ".benchmark/execution");
    const started = join(execution, "STARTED.json");
    if (existsSync(started) && !terminalPath(workspace)) {
      const receipt = { schema_version: "0.1", kind: "omd-luna-max-cell-terminal", cell_id: cell.id, status: "infrastructure-invalid", reason: "started-without-terminal-crash-reconciled", started_sha256: sha256(readFileSync(started)), rerun_allowed: false, provider_calls: "unknown", model_calls: "unknown", browser_calls: 0 };
      writeJsonExclusive(join(execution, "INFRASTRUCTURE-INVALID.json"), receipt); stateLine(materializedRoot, receipt); reconciled.push(cell.id);
    }
  }
  return reconciled;
}

function verifyPreparedReadback(root, manifest) {
  invariant(manifest.cells.length === 48 && new Set(manifest.cells.map((cell) => cell.id)).size === 48, "materialization cell count/identity drift");
  for (const cell of manifest.cells) {
    const workspace = join(root, "prepared-cells", cell.id); directory(workspace, `cell ${cell.id}`);
    const actual = summary(workspace, [".benchmark/execution"]);
    invariant(canonical(actual) === canonical(cell.workspace_tree), `prepared cell readback drift: ${cell.id}`);
    const metadata = readJson(join(workspace, ".benchmark/cell.json"));
    invariant(metadata.cell_id === cell.id && metadata.runtime?.model === MODEL && metadata.runtime?.effort === EFFORT && metadata.runtime?.retry_budget === 0 && metadata.runtime?.replacement_budget === 0 && metadata.runtime?.fallback_budget === 0 && metadata.evaluation?.eligible_for_execution_and_scoring === true, `cell policy drift: ${cell.id}`);
  }
  const ineligible = readJson(join(root, "INELIGIBLE-SLOTS.json")); invariant(ineligible.count === 6 && ineligible.slots.length === 6 && ineligible.slots.every((slot) => slot.workspace_created === false), "ineligible slots drift");
}

function invocation(executablePath, args) {
  const isJs = /\.(?:mjs|cjs|js)$/.test(executablePath);
  return { executable: isJs ? process.execPath : executablePath, args: isJs ? [executablePath, ...args] : args };
}
function copyExecutionWorkspace(cell, target) {
  mkdirSync(target, { recursive: false });
  for (const name of readdirSync(cell)) {
    if (name === ".benchmark") continue;
    cpSync(join(cell, name), join(target, name), { recursive: true, errorOnExist: true });
  }
  mkdirSync(join(target, ".benchmark"), { recursive: false });
  cpSync(join(cell, ".benchmark/invocation-prompt.txt"), join(target, ".benchmark/invocation-prompt.txt"));
  cpSync(join(cell, ".benchmark/invocation-prompt.txt"), join(target, ".benchmark/PROMPT.md"));
  const metadata = readJson(join(cell, ".benchmark/cell.json")); const initial = tree(target, [".benchmark"]);
  writeJsonExclusive(join(target, ".benchmark/manifest.json"), { runtime_target: "codex", task: { id: metadata.task.id }, variant: { id: metadata.arm.variant_id }, workspace: { initial_sha256: tree(target).sha256, product_initial_sha256: initial.sha256, product_initial_files: initial.files, product_ignore: [".benchmark"] } });
  return { metadata, initial: tree(target) };
}
function parseEvents(path) {
  if (!existsSync(path)) return [];
  return readFileSync(path, "utf8").split(/\r?\n/).filter(Boolean).map((line) => { try { return JSON.parse(line); } catch { return { type: "unparseable", raw_sha256: sha256(line) }; } });
}
function rolloutEvidence(events, runResult, staticRuntime) {
  const contexts = events.filter((event) => event.type === "turn_context");
  const fallbacks = events.filter((event) => /fallback|replacement|retry/i.test(`${event.type} ${event.payload?.type ?? ""}`));
  const marker = events.some((event) => /manual.edit|follow.?up|unplanned.intervention/i.test(`${event.type} ${event.payload?.type ?? ""}`));
  const completions = events.filter((event) => /^(?:response|turn)\.completed$/.test(event.type ?? ""));
  const runtime = runResult?.runtime ?? {}; const toolEvidence = runtime.model_tool_mode_evidence ?? {};
  const expectedProfile = staticRuntime?.model_profile_sha256;
  const expectedCatalog = staticRuntime?.catalog_sha256;
  const exact = runtime.model_requested === MODEL && runtime.model === MODEL && runtime.reasoning === EFFORT && runtime.effort_requested === EFFORT && (runtime.model_reported === null || runtime.model_reported === MODEL) && completions.length === 1 && fallbacks.length === 0
    && toolEvidence.model_profile_sha256 === expectedProfile && toolEvidence.cache_sha256 === expectedCatalog
    && toolEvidence.auth_source_before_run?.model_profile_sha256 === expectedProfile
    && toolEvidence.auth_source_before_run?.cache_sha256 === expectedCatalog;
  const latestModelUsage = runResult?.output?.model_usage?.at?.(-1) ?? null;
  const providerUsage = latestModelUsage ? { available: true, input_tokens: Number(latestModelUsage.input_tokens), output_tokens: Number(latestModelUsage.output_tokens), total_tokens: Number(latestModelUsage.input_tokens) + Number(latestModelUsage.output_tokens) } : { available: false, reason: "provider-emitted-usage-unavailable" };
  return { exact, contexts, completions, fallbacks, provider_usage: providerUsage, interventions: events.some((event) => event.type === "unparseable") || marker ? 1 : 0, marker };
}
function toolTelemetry(events, runResult) {
  const finiteNormalized = runResult?.output?.agent_tool_call_count;
  if (Number.isInteger(finiteNormalized) && finiteNormalized >= 0) return { tool_calls: finiteNormalized, evidence_mode: "run-result-normalized-agent-tool-call-count", raw_completed_tool_item_ids: [] };
  const toolTypes = new Set(["command_execution", "mcp_tool_call", "file_change", "web_search", "computer_use"]); const ids = new Set();
  for (const event of events) if (event.type === "item.completed" && toolTypes.has(event.item?.type)) ids.add(String(event.item.id ?? `${event.item.type}:${sha256(canonical(event.item))}`));
  return { tool_calls: ids.size, evidence_mode: "raw-cli-unique-completed-tool-items", raw_completed_tool_item_ids: [...ids].sort() };
}
function proof(workspace, variant) {
  const entry = join(workspace, "index.html"); const entryPresent = existsSync(entry) && statSync(entry).isFile();
  const cssFiles = tree(workspace, [".benchmark", ".omd"]).files.filter((item) => item.path.endsWith(".css"));
  const cssText = [entryPresent ? readFileSync(entry, "utf8") : "", ...cssFiles.map((item) => readFileSync(join(workspace, item.path), "utf8"))].join("\n");
  const customProperties = new Set([...cssText.matchAll(/--[a-zA-Z0-9_-]+\s*:/g)].map((match) => match[0].replace(/\s*:$/, "")));
  const reusableSelectors = new Set([...cssText.matchAll(/(?:^|[},])\s*\.([a-zA-Z][\w-]*)[^,{]*\{/gm)].map((match) => match[1]));
  const neutralPass = entryPresent && (customProperties.size >= 3 || reusableSelectors.size >= 3 || (cssFiles.length > 0 && reusableSelectors.size >= 2));
  const design = join(workspace, "DESIGN.md"); const system = join(workspace, ".omd/system"); const designPresent = existsSync(design) && statSync(design).isFile(); const corePresent = designPresent && existsSync(system) && statSync(system).isDirectory();
  return { format: "neutral-html-css-design-system-v0.1", parsed: neutralPass, pass: neutralPass, entry: entryPresent ? { path: "index.html", sha256: sha256(readFileSync(entry)), bytes: statSync(entry).size } : null, reusable_signals: { css_custom_properties: customProperties.size, reusable_class_selectors: reusableSelectors.size, stylesheet_files: cssFiles.length }, omd_core: { required: variant === "omd-autopilot-v2", present: corePresent, design_md: designPresent ? { sha256: sha256(readFileSync(design)), bytes: statSync(design).size } : null, system_tree: corePresent ? tree(system) : null } };
}
function fileBinding(path, extra = {}) { regular(path, `artifact ${path}`); return { path: resolve(path), sha256: sha256(readFileSync(path)), ...extra }; }
function screenshotProof(evaluatorRoot, requiredStates) {
  const screenshotRoot = join(evaluatorRoot, "screenshots");
  if (!existsSync(screenshotRoot)) return [];
  const files = tree(evaluatorRoot).files.filter((item) => item.path.startsWith("screenshots/") && item.path.endsWith(".png"));
  const stateByFile = new Map();
  const manifestPath = join(screenshotRoot, "STATE-SCREENSHOTS.json");
  if (existsSync(manifestPath)) {
    const manifest = readJson(manifestPath);
    invariant(manifest.kind === "omd-luna-max-evaluator-state-screenshots" && manifest.schema_version === "0.1", "state screenshot manifest identity drift");
    invariant(canonical(Object.keys(manifest.states ?? {}).sort()) === canonical([...requiredStates].sort()), "state screenshot manifest coverage drift");
    for (const [state, captures] of Object.entries(manifest.states)) {
      invariant(Array.isArray(captures) && captures.length > 0, `state screenshot missing: ${state}`);
      for (const capture of captures) {
        invariant(typeof capture.file === "string" && capture.file === `${state}--${capture.viewport_id}.png`, `state screenshot filename drift: ${state}`);
        const absolute = join(screenshotRoot, capture.file); regular(absolute, `state screenshot ${state}`);
        invariant(sha256(readFileSync(absolute)) === capture.sha256, `state screenshot hash drift: ${state}`);
        stateByFile.set(`screenshots/${capture.file}`, state);
      }
    }
  }
  return files.map((item) => {
    const base = item.path.slice("screenshots/".length);
    const state = stateByFile.get(item.path);
    const kind = /^desktop-/.test(base) ? "desktop" : /^mobile-/.test(base) ? "mobile" : state ? "state" : "other";
    return { ...fileBinding(join(evaluatorRoot, item.path)), kind, publishable: true, required_states: state ? [state] : [] };
  });
}

export function runCell(options) {
  const repoRoot = resolve(options.repoRoot ?? DEFAULT_REPO_ROOT); const root = resolve(options.materializedRoot); const sourceCommit = options.sourceCommit;
  assertCleanSource({ repoRoot, sourceCommit }); directory(root, "materialized root");
  const admission = validateAdmission({ admissionPath: options.admission, materializedRoot: root, runtimePath: options.runtimeAttributionReceipt, browserPath: options.browserReceipt, sourceCommit, repoRoot });
  const staticRuntime = admission.evidence.static_runtime.value.runtime;
  const liveRuntime = options.runtimeObservation ?? inspectCodexModelToolMode(MODEL);
  invariant(liveRuntime.model_id === MODEL && liveRuntime.cache_sha256 === staticRuntime.catalog_sha256
    && liveRuntime.model_profile_sha256 === staticRuntime.model_profile_sha256,
  "live Luna/max model catalog/profile differs from admitted static authority");
  verifyPreparedReadback(root, admission.manifest);
  const reconciled = reconcileCrashes(root, admission.manifest); invariant(reconciled.length === 0, `crash reconciled; invoke again for next cell: ${reconciled.join(",")}`);
  const pending = admission.manifest.cells.filter((entry) => !terminalPath(join(root, "prepared-cells", entry.id)));
  invariant(pending.length > 0, "all scheduled cells are terminal"); const next = pending[0];
  invariant(options.cellId === next.id, `cell must be exact next locked cell: ${next.id}`);
  const cell = join(root, "prepared-cells", next.id); const execution = join(cell, ".benchmark/execution");
  invariant(!existsSync(execution), "cell execution already started"); mkdirSync(execution, { recursive: false });
  const startedAt = new Date().toISOString(); const started = { schema_version: "0.1", kind: "omd-luna-max-cell-start", cell_id: next.id, source_commit: sourceCommit, order: admission.manifest.cells.findIndex((entry) => entry.id === next.id) + 1, model: MODEL, effort: EFFORT, timeout_ms: TIMEOUT_MS, admission_sha256: admission.admissionEvidence.sha256, started_at: startedAt };
  writeJsonExclusive(join(execution, "STARTED.json"), started); stateLine(root, started);
  const isolated = join(execution, "workspace"); const prepared = copyExecutionWorkspace(cell, isolated);
  const runner = resolve(options.runnerBin ?? join(repoRoot, DEFAULT_RUNNER_PATH)); const runnerArgs = ["--workspace", isolated, "--model", MODEL, "--reasoning", EFFORT, "--timeout-ms", String(TIMEOUT_MS)];
  const call = invocation(runner, runnerArgs); const startNs = process.hrtime.bigint();
  const result = spawnSync(call.executable, call.args, { cwd: repoRoot, encoding: "utf8", timeout: TIMEOUT_MS + 30_000, maxBuffer: 64 * 1024 * 1024, env: { ...process.env, OMD_LUNA_MAX_NETWORK_POLICY: "provider-only-no-self-network", OMD_LUNA_MAX_BROWSER_POLICY: "no-provider-browser-launch" } });
  const wallMs = Number(process.hrtime.bigint() - startNs) / 1e6;
  writeFileSync(join(execution, "runner.stdout"), result.stdout ?? "", { flag: "wx" }); writeFileSync(join(execution, "runner.stderr"), result.stderr ?? "", { flag: "wx" });
  const runResultPath = join(isolated, ".benchmark/run-result.json"); const eventsPath = join(isolated, ".benchmark/events.jsonl"); const events = parseEvents(eventsPath); const runResult = existsSync(runResultPath) ? readJson(runResultPath) : null; const rollout = rolloutEvidence(events, runResult, admission.evidence.static_runtime.value.runtime);
  const timedOut = result.error?.code === "ETIMEDOUT" || runResult?.process?.timed_out === true;
  const providerSucceeded = result.status === 0 && !result.error && existsSync(runResultPath) && runResult?.process?.exit_code === 0 && !timedOut && rollout.exact && rollout.provider_usage.available;
  let evaluation = null;
  if (providerSucceeded) {
    const evaluatorDir = join(execution, "evaluator"); mkdirSync(evaluatorDir, { recursive: false });
    const evaluator = resolve(options.evaluatorBin ?? join(repoRoot, DEFAULT_EVALUATOR_PATH)); const scorePath = join(evaluatorDir, "score.json");
    const evalCall = invocation(evaluator, ["--task-id", prepared.metadata.task.id, "--workspace", isolated, "--out", scorePath]);
    const evalResult = spawnSync(evalCall.executable, evalCall.args, { cwd: repoRoot, encoding: "utf8", timeout: TIMEOUT_MS, maxBuffer: 64 * 1024 * 1024, env: { ...process.env, CHROME_PATH: admission.evidence.evaluation_runtime.value.browser.executable_path, OMD_EVALUATOR_EXTERNAL_NETWORK: "forbidden" } });
    writeFileSync(join(evaluatorDir, "stdout"), evalResult.stdout ?? "", { flag: "wx" }); writeFileSync(join(evaluatorDir, "stderr"), evalResult.stderr ?? "", { flag: "wx" });
    evaluation = { exit_code: evalResult.status, error: evalResult.error?.message ?? null, score: existsSync(scorePath) ? { path: relative(execution, scorePath), sha256: sha256(readFileSync(scorePath)), bytes: statSync(scorePath).size } : null, artifacts_tree: tree(evaluatorDir), browser_calls: 1 };
  }
  const finalTree = tree(isolated); const raw = {
    run_result: existsSync(runResultPath) ? { sha256: sha256(readFileSync(runResultPath)), bytes: statSync(runResultPath).size } : null,
    events: existsSync(eventsPath) ? { sha256: sha256(readFileSync(eventsPath)), bytes: statSync(eventsPath).size } : null,
    stderr: { sha256: sha256(result.stderr ?? ""), bytes: Buffer.byteLength(result.stderr ?? "") }, stdout: { sha256: sha256(result.stdout ?? ""), bytes: Buffer.byteLength(result.stdout ?? "") },
  };
  const infrastructureInvalid = !runResult || !rollout.exact || !rollout.provider_usage.available;
  const status = timedOut ? "timeout" : infrastructureInvalid ? "infrastructure-invalid" : providerSucceeded && evaluation?.score && evaluation.exit_code === 0 ? "completed" : "failed";
  const failurePath = join(execution, "FAILURE-ARTIFACT.json");
  writeJsonExclusive(failurePath, { schema_version: "0.1", cell_id: next.id, status, process: { exit_code: result.status, signal: result.signal, timed_out: timedOut, error: result.error?.message ?? null }, rollout_exact: rollout.exact, evaluator_exit_code: evaluation?.exit_code ?? null });
  const packageResult = proof(isolated, prepared.metadata.arm.variant_id); const packagePath = join(execution, "DESIGN-SYSTEM-PACKAGE.json");
  writeJsonExclusive(packagePath, packageResult);
  const evaluatorValue = evaluation?.score ? readJson(resolve(execution, evaluation.score.path)) : null;
  const requiredStates = admission.manifest.evaluator_authority?.selected_task_evaluation_metadata?.find((item) => item.task_id === prepared.metadata.task.id)?.required_states ?? [];
  const screenshots = evaluation ? screenshotProof(join(execution, "evaluator"), requiredStates) : [];
  const rawResponsePath = existsSync(join(isolated, ".benchmark/final-message.txt")) ? join(isolated, ".benchmark/final-message.txt") : join(execution, "runner.stdout");
  const providerUsage = rollout.provider_usage.available ? { input_tokens: Number(rollout.provider_usage.input_tokens), output_tokens: Number(rollout.provider_usage.output_tokens), total_tokens: Number(rollout.provider_usage.total_tokens), available: true } : { input_tokens: null, output_tokens: null, total_tokens: null, available: false, reason: rollout.provider_usage.reason };
  const tools = toolTelemetry(events, runResult);
  const interventions = rollout.interventions;
  const unsupportedFacts = evaluatorValue ? (Array.isArray(evaluatorValue.evidence?.protected_unknown_claims)
    ? evaluatorValue.evidence.protected_unknown_claims.length
    : ["price_claims", "inventory_claims", "social_proof_claims", "partner_logo_claims"].reduce((count, key) => count + (Array.isArray(evaluatorValue.evidence?.[key]) ? evaluatorValue.evidence[key].length : 0), 0)) : 0;
  const evaluatorRecord = evaluatorValue ? { deterministic: true, ui_resolved: evaluatorValue.ui_resolved === true, objective_score: Number(evaluatorValue.score), unsupported_facts: unsupportedFacts, result: fileBinding(resolve(execution, evaluation.score.path)), process: evaluation } : { deterministic: true, ui_resolved: false, objective_score: 0, unsupported_facts: 0, result: fileBinding(failurePath), process: null, terminal_failure_projection: true };
  const terminal = {
    schema_version: "0.1", kind: "omd-luna-max-cell-terminal", cell_id: next.id, task_id: prepared.metadata.task.id, variant_id: prepared.metadata.arm.variant_id, trial_index: next.trial_index, status, source_commit: sourceCommit,
    model: MODEL, effort: EFFORT,
    runtime: { provider: "codex", model: MODEL, effort: EFFORT }, controls: { retry_count: 0, replacement_count: 0, fallback_count: 0, model_substitution_count: 0, effort_substitution_count: 0 },
    telemetry: { elapsed_ms: Math.round(wallMs), provider_usage: providerUsage, tool_calls: tools.tool_calls, checkpoints: 0, telemetry_evidence: { tool_calls: tools.evidence_mode, raw_completed_tool_item_ids: tools.raw_completed_tool_item_ids, checkpoints: "unavailable-no-product-harness-checkpoint-emitter-default-zero" } },
    raw_response: fileBinding(rawResponsePath), workspace_before: { sha256: prepared.initial.sha256 }, workspace_after: { sha256: finalTree.sha256 }, evaluator: evaluatorRecord,
    manual_product_edits: interventions, follow_up_questions: interventions, unplanned_interventions: interventions, manual_edits: interventions, followups: interventions, required_states: requiredStates,
    proof: { screenshots, design_system_package: { ...fileBinding(packagePath), parsed: packageResult.parsed, pass: packageResult.parsed } }, failure_artifact: fileBinding(failurePath),
    provider_calls: rollout.exact ? 1 : "unknown", model_calls: rollout.exact ? 1 : "unknown", browser_calls: evaluation?.browser_calls ?? 0, retry_calls: 0, replacement_calls: 0, fallback_calls: 0, repair_calls: 0,
    started_at: startedAt, finished_at: new Date().toISOString(), process: { exit_code: result.status, signal: result.signal, timed_out: timedOut, error: result.error?.message ?? null }, rollout: { exact_luna_max_one_turn: rollout.exact, raw_turn_context_count: rollout.contexts.length, cli_completion_count: rollout.completions.length, fallback_marker_count: rollout.fallbacks.length, evidence_mode: "run-result-plus-raw-cli-stream-plus-admitted-preflight" }, raw, design_system_package: packageResult, admission_sha256: admission.admissionEvidence.sha256, rerun_allowed: false,
  };
  terminal.record_sha256 = sha256(canonical(terminal));
  const terminalName = status === "completed" ? "COMPLETED.json" : status === "timeout" ? "TIMEOUT.json" : status === "infrastructure-invalid" ? "INFRASTRUCTURE-INVALID.json" : "FAILED.json";
  writeJsonExclusive(join(execution, terminalName), terminal); stateLine(root, terminal);
  return terminal;
}

function validRecordHash(record) {
  if (!/^[a-f0-9]{64}$/.test(record?.record_sha256 ?? "")) return false;
  const clone = structuredClone(record); delete clone.record_sha256;
  return sha256(canonical(clone)) === record.record_sha256;
}
export function collectRecords(options) {
  const repoRoot = resolve(options.repoRoot ?? DEFAULT_REPO_ROOT); const root = resolve(options.materializedRoot); const sourceCommit = options.sourceCommit;
  assertCleanSource({ repoRoot, sourceCommit }); directory(root, "materialized root");
  const admission = validateAdmission({ admissionPath: options.admission, materializedRoot: root, runtimePath: options.runtimeAttributionReceipt, browserPath: options.browserReceipt, sourceCommit, repoRoot });
  verifyPreparedReadback(root, admission.manifest);
  const slots = []; const missing = []; const omittedTerminal = [];
  for (const cell of admission.manifest.cells) {
    const workspace = join(root, "prepared-cells", cell.id); const terminal = terminalPath(workspace);
    if (!terminal) { missing.push(cell.id); continue; }
    const record = readJson(terminal);
    if (!validRecordHash(record)) {
      if (record.status === "infrastructure-invalid" && record.reason === "started-without-terminal-crash-reconciled") { missing.push(cell.id); omittedTerminal.push({ cell_id: cell.id, reason: record.reason, terminal_sha256: sha256(readFileSync(terminal)) }); continue; }
      throw new Error(`terminal record hash drift: ${cell.id}`);
    }
    invariant(record.cell_id === cell.id && record.source_commit === sourceCommit && ["completed", "failed", "timeout", "infrastructure-invalid"].includes(record.status), `terminal identity drift: ${cell.id}`);
    slots.push(record);
  }
  const ineligible = readJson(join(root, "INELIGIBLE-SLOTS.json"));
  for (const cell of ineligible.slots) slots.push({ cell_id: cell.id, task_id: cell.task_id, variant_id: cell.variant_id, trial_index: cell.trial_index, status: "retained-preregistered-ineligible-unexecuted", provider_calls: 0, model_calls: 0, browser_calls: 0 });
  const bundle = { schema_version: "0.1", kind: "omd-luna-max-wow-preview-execution-records", experiment_id: admission.matrix.experiment_id, source_commit: sourceCommit, matrix_sha256: admission.evidence.matrix.sha256, preregistration_sha256: admission.evidence.preregistration.sha256, materialization_sha256: admission.evidence.materialization.sha256, scheduled_terminal_records: slots.length - 6, scheduled_missing_records: missing.length, missing_scheduled_cell_ids: missing, omitted_crash_terminal_evidence: omittedTerminal, retained_ineligible_records: 6, slots, collection_calls: { provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 } };
  const out = resolve(options.out); invariant(out && !existsSync(out), "collect output must be fresh"); writeJsonExclusive(out, bundle); return bundle;
}

export function main(argv = process.argv.slice(2)) {
  const [command, ...rest] = argv; invariant(command === "run" || command === "collect", "usage: run-luna-max-wow-preview-cell.mjs <run|collect> --materialized-root <exact> --admission <receipt> --runtime-attribution-receipt <exact> --browser-receipt <exact> --source-commit <HEAD> [--cell-id <next>|--out <fresh.json>]");
  const args = parseArgs(rest); const required = ["materialized-root", "admission", "runtime-attribution-receipt", "browser-receipt", "source-commit", ...(command === "run" ? ["cell-id"] : ["out"])];
  for (const name of required) invariant(args.has(name), `missing --${name}`);
  if (command === "collect") {
    const bundle = collectRecords({ materializedRoot: args.get("materialized-root"), admission: args.get("admission"), runtimeAttributionReceipt: args.get("runtime-attribution-receipt"), browserReceipt: args.get("browser-receipt"), sourceCommit: args.get("source-commit"), out: args.get("out") });
    process.stdout.write(`${JSON.stringify({ scheduled_terminal_records: bundle.scheduled_terminal_records, scheduled_missing_records: bundle.scheduled_missing_records, retained_ineligible_records: bundle.retained_ineligible_records, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 })}\n`); return;
  }
  const result = runCell({ materializedRoot: args.get("materialized-root"), cellId: args.get("cell-id"), admission: args.get("admission"), runtimeAttributionReceipt: args.get("runtime-attribution-receipt"), browserReceipt: args.get("browser-receipt"), sourceCommit: args.get("source-commit"), runnerBin: args.get("runner-bin"), evaluatorBin: args.get("evaluator-bin") });
  process.stdout.write(`${JSON.stringify({ cell_id: result.cell_id, status: result.status, provider_calls: result.provider_calls, model_calls: result.model_calls, browser_calls: result.browser_calls })}\n`);
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) { try { main(); } catch (error) { process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`); process.exitCode = 1; } }
