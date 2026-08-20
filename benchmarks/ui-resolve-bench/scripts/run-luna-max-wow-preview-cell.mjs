#!/usr/bin/env node
import { spawnSync, execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  accessSync, chmodSync, constants as fsConstants, copyFileSync, cpSync, existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, realpathSync, rmSync, statSync, symlinkSync, writeFileSync, appendFileSync,
} from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { inspectCodexModelToolMode } from "./codex-tool-mode-contract.mjs";
import { OMD_EXTERNAL_STAGING_ACTIVATION } from "./prepare-luna-max-wow-preview.mjs";

export const RUNNER_PATH = "benchmarks/ui-resolve-bench/scripts/run-luna-max-wow-preview-cell.mjs";
export const ADMISSION_GENERATOR_PATH = "benchmarks/ui-resolve-bench/scripts/admit-luna-max-wow-preview.mjs";
export const PREREG_CONTROLLER_PATH = "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-wow-preview.mjs";
export const DEFAULT_RUNNER_PATH = "benchmarks/ui-resolve-bench/scripts/run-codex.mjs";
export const DEFAULT_EVALUATOR_PATH = "benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs";
export const MODEL = "gpt-5.6-luna";
export const EFFORT = "max";
export const TIMEOUT_MS = 900_000;
export const PROMPT_INPUT_AUDIT_TIMEOUT_MS = 120_000;
const OMD_VARIANT = "omd-autopilot-v2";
const OMD_STAGING_ENV = "OMD_BENCH_EXTERNAL_STAGING_ROOT";
const OMD_PACKAGE_ENV = "OMD_BENCH_COMPILED_CORE_PACKAGE";
const OMD_CHECKPOINT_ENV = "OMD_BENCH_CORE_CHECKPOINT";
const OMD_AUTHORITY_RECEIPT_ENV = "OMD_AUTHORITY_CONTROLLER_RECEIPT";
const OMD_AUTHORITY_RECEIPT_SHA_ENV = "OMD_AUTHORITY_CONTROLLER_RECEIPT_SHA256";
const OMD_AUTHORITY_ACTIVATION_SHA_ENV = "OMD_AUTHORITY_CONTROLLER_ACTIVATION_SHA256";
const OMD_AUTHORITY_RUN_DIR_ENV = "OMD_AUTHORITY_CONTROLLER_RUN_DIR";
const OMD_AUTHORITY_EXECUTABLE_ENV = "OMD_AUTHORITY_CONTROLLER_EXECUTABLE";
const OMD_AUTHORITY_RUNTIME_PREFIXES = Object.freeze([
  "scripts/activate-autopilot-design-system.cjs", "scripts/prepare-design-md-core-review.cjs",
  "scripts/compile-design-md-core.cjs", "scripts/adopt-design-md-core.cjs",
  "scripts/validate-project-design-system.cjs", "scripts/design-md-core-schema.cjs",
  "scripts/design-md-core-conformance.cjs", "scripts/design-md-core.cjs", "spec/schema/",
]);
const CODEX_BUILTIN_SKILLS = Object.freeze(["imagegen", "openai-docs", "plugin-creator", "skill-creator", "skill-installer"]);
const CODEX_0147_APPS_USAGE_DEFAULTS = Object.freeze({
  "gpt-5.6-sol": true, "gpt-5.6-sol-wm": true, "gpt-5.6-terra": true, "gpt-5.6-luna": true,
  "gpt-5.5": true, "gpt-5.4": true, "gpt-5.4-mini": true, "gpt-5.3-codex-spark": false, "codex-auto-review": false,
});
const HERE = dirname(fileURLToPath(import.meta.url));
const DEFAULT_REPO_ROOT = resolve(HERE, "../../..");

function invariant(value, message) { if (!value) throw new Error(message); }
export function sha256(value) { return createHash("sha256").update(value).digest("hex"); }
function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}
function modelCacheIdentity(bytes) {
  const cache = JSON.parse(bytes.toString("utf8"));
  invariant(cache && typeof cache === "object" && !Array.isArray(cache) && Array.isArray(cache.models), "provider model catalog must be valid");
  const { fetched_at: _volatileFetchedAt, ...semanticCache } = cache;
  const profile = cache.models.find((entry) => entry?.slug === MODEL);
  invariant(profile, "provider model catalog is missing exact Luna model profile");
  return {
    full_sha256: sha256(bytes),
    semantic_sha256: sha256(canonical(semanticCache)),
    model_profile_sha256: sha256(canonical(profile)),
    client_version: cache.client_version ?? null,
  };
}
function fetchedAtRawDifference(beforeBytes, afterBytes, beforeValue, afterValue) {
  if (beforeBytes.equals(afterBytes)) return { pass: true, classification: "none", before_token_occurrences: 0 };
  if (typeof beforeValue !== "string" || typeof afterValue !== "string" || beforeValue === afterValue) return { pass: false, classification: "raw-drift-without-fetched-at-change", before_token_occurrences: 0 };
  const beforeText = beforeBytes.toString("utf8");
  const escaped = JSON.stringify(beforeValue).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`("fetched_at"\\s*:\\s*)${escaped}`, "g");
  const matches = [...beforeText.matchAll(pattern)];
  const expected = matches.length === 1 ? beforeText.replace(pattern, `$1${JSON.stringify(afterValue)}`) : null;
  return { pass: expected !== null && expected === afterBytes.toString("utf8"), classification: expected !== null && expected === afterBytes.toString("utf8") ? "fetched-at-only" : "raw-drift-outside-fetched-at", before_token_occurrences: matches.length };
}
export function promptAuditCacheMutation(beforeBytes, afterBytes) {
  const before = JSON.parse(beforeBytes.toString("utf8")); const after = JSON.parse(afterBytes.toString("utf8"));
  const beforeIdentity = modelCacheIdentity(beforeBytes); const afterIdentity = modelCacheIdentity(afterBytes);
  const normalizedBefore = structuredClone(before); const normalizedAfter = structuredClone(after);
  delete normalizedBefore.fetched_at; delete normalizedAfter.fetched_at;
  const normalizedDefaults = []; const missingDefaults = [];
  if (Array.isArray(normalizedBefore.models) && Array.isArray(normalizedAfter.models)
    && normalizedBefore.models.length === normalizedAfter.models.length) {
    for (let index = 0; index < normalizedBefore.models.length; index += 1) {
      const beforeProfile = normalizedBefore.models[index]; const afterProfile = normalizedAfter.models[index];
      if (beforeProfile?.slug !== afterProfile?.slug) continue;
      if (!Object.hasOwn(beforeProfile, "include_apps_usage_instructions")) {
        const expected = before.client_version === "0.147.0" ? CODEX_0147_APPS_USAGE_DEFAULTS[beforeProfile.slug] : undefined;
        if (Object.hasOwn(afterProfile, "include_apps_usage_instructions")) {
          if (typeof expected === "boolean" && afterProfile.include_apps_usage_instructions === expected) {
            normalizedDefaults.push({ model: afterProfile.slug, field: "include_apps_usage_instructions", value: afterProfile.include_apps_usage_instructions, authority: "codex-cli-0.147.0-reproduced-default" });
            delete afterProfile.include_apps_usage_instructions;
          }
        } else if (typeof expected === "boolean") missingDefaults.push({ model: beforeProfile.slug, expected });
      }
    }
  }
  const partialKnownNormalization = normalizedDefaults.length > 0 && missingDefaults.length > 0;
  const pass = canonical(normalizedBefore) === canonical(normalizedAfter) && !partialKnownNormalization;
  const rawBytes = fetchedAtRawDifference(beforeBytes, afterBytes, before.fetched_at, after.fetched_at);
  return {
    pass,
    classification: pass ? (beforeIdentity.full_sha256 === afterIdentity.full_sha256 ? "none" : "known-cli-normalization-discarded") : "semantic-authority-drift-rejected",
    policy: { sacrificial_home: true, admitted_provider_cache_reuse: false, allowed_changes: ["fetched_at", "models[*].include_apps_usage_instructions:missing-to-boolean-default"] },
    fetched_at: { before: before.fetched_at ?? null, after: after.fetched_at ?? null, changed: before.fetched_at !== after.fetched_at },
    raw_bytes: rawBytes,
    normalized_defaults: normalizedDefaults,
    missing_defaults: missingDefaults,
    before: beforeIdentity,
    after: afterIdentity,
  };
}
export function providerZeroNormalizedCacheCandidate(bytes) {
  const source = JSON.parse(bytes.toString("utf8"));
  const result = { pass: true, required: false, client_version: source?.client_version ?? null, changes: [], violations: [], serialization: null, source_sha256: sha256(bytes), candidate_sha256: null, candidate_bytes: null };
  if (source?.client_version !== "0.147.0") {
    result.pass = false; result.violations.push({ reason: "unsupported-client-version", observed: source?.client_version ?? null, supported: ["0.147.0"] });
    return result;
  }
  if (!Array.isArray(source.models)) result.violations.push({ reason: "models-not-array" });
  else {
    const profiles = new Map();
    for (const profile of source.models) {
      const slug = profile?.slug;
      if (typeof slug !== "string" || !Object.hasOwn(CODEX_0147_APPS_USAGE_DEFAULTS, slug)) result.violations.push({ reason: "unknown-model-slug", slug: slug ?? null });
      else if (profiles.has(slug)) result.violations.push({ reason: "duplicate-model-slug", slug });
      else profiles.set(slug, profile);
    }
    for (const [slug, expected] of Object.entries(CODEX_0147_APPS_USAGE_DEFAULTS)) {
      const profile = profiles.get(slug);
      if (!profile) result.violations.push({ reason: "missing-model-slug", slug });
      else if (!Object.hasOwn(profile, "include_plugin_usage_instructions")) result.violations.push({ reason: "missing-key-order-anchor", slug, anchor: "include_plugin_usage_instructions" });
      else if (Object.hasOwn(profile, "include_apps_usage_instructions") && profile.include_apps_usage_instructions !== expected) {
        result.violations.push({ reason: "wrong-preexisting-default", slug, expected, observed: profile.include_apps_usage_instructions });
      }
    }
    if (result.violations.length === 0) {
      const candidate = structuredClone(source);
      candidate.models = candidate.models.map((profile) => {
        const value = CODEX_0147_APPS_USAGE_DEFAULTS[profile.slug];
        if (!Object.hasOwn(profile, "include_apps_usage_instructions")) result.changes.push({ model: profile.slug, field: "include_apps_usage_instructions", before: "absent", after: value, authority: "codex-cli-0.147.0-reproduced-default" });
        const ordered = {};
        for (const [key, entry] of Object.entries(profile)) {
          if (key === "include_apps_usage_instructions") continue;
          ordered[key] = entry;
          if (key === "include_plugin_usage_instructions") ordered.include_apps_usage_instructions = value;
        }
        return ordered;
      });
      const candidateBytes = Buffer.from(JSON.stringify(candidate, null, 2));
      result.serialization = { exact_match: candidateBytes.equals(bytes), format: "json-pretty-2-no-final-newline", apps_key_position: "immediately-after-include_plugin_usage_instructions", source_final_newline: bytes.length > 0 && bytes[bytes.length - 1] === 0x0a, candidate_final_newline: false };
      result.required = !candidateBytes.equals(bytes);
      if (result.required) {
        result.candidate_bytes = candidateBytes;
        result.candidate_sha256 = sha256(result.candidate_bytes);
      }
    }
  }
  result.pass = result.violations.length === 0;
  return result;
}
function promptAuditAuthObservation(home) {
  const path = join(home, "auth.json");
  let info;
  try { info = lstatSync(path); } catch (error) {
    if (error?.code === "ENOENT") return { present: false, path_sha256: sha256(path), type: null, sha256: null, bytes: 0 };
    throw error;
  }
  return { present: true, path_sha256: sha256(path), type: info.isSymbolicLink() ? "symlink" : info.isFile() ? "file" : info.isDirectory() ? "directory" : "other", sha256: info.isFile() && !info.isSymbolicLink() ? sha256(readFileSync(path)) : null, bytes: info.isFile() && !info.isSymbolicLink() ? info.size : null };
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
export function captureGeneratedImagesBoundary(providerHome) {
  const root = join(providerHome, "generated_images");
  try {
    const info = lstatSync(root);
    if (!info.isDirectory() || info.isSymbolicLink()) return { path: root, state: "invalid", files: [], sha256: null, error: "generated_images must be a real directory" };
    const manifest = tree(root);
    return { path: root, state: "present", files: manifest.files, sha256: manifest.sha256, error: null };
  } catch (error) {
    if (error?.code === "ENOENT") return { path: root, state: "absent", files: [], sha256: null, error: null };
    return { path: root, state: "invalid", files: [], sha256: null, error: String(error?.message ?? error) };
  }
}
export function auditHiddenImageGeneration({ providerHome, before, workspaceBefore, workspace, events = [] }) {
  const after = captureGeneratedImagesBoundary(providerHome);
  const beforeFiles = new Map((before?.files ?? []).map((file) => [file.path, `${file.mode}:${file.sha256}`]));
  const generatedDelta = after.files.filter((file) => beforeFiles.get(file.path) !== `${file.mode}:${file.sha256}`);
  let workspaceFiles = []; let workspaceError = null;
  try { workspaceFiles = tree(workspace, [".benchmark"]).files; } catch (error) { workspaceError = String(error?.message ?? error); }
  const initialFiles = new Map((workspaceBefore?.files ?? []).filter((file) => !file.path.startsWith(".benchmark/") && file.path !== ".benchmark").map((file) => [file.path, `${file.mode}:${file.sha256}`]));
  const productDelta = workspaceFiles.filter((file) => initialFiles.get(file.path) !== `${file.mode}:${file.sha256}`);
  const generatedByHash = new Map();
  for (const file of generatedDelta) { const entries = generatedByHash.get(file.sha256) ?? []; entries.push(file.path); generatedByHash.set(file.sha256, entries); }
  const workspaceAssetLineage = productDelta.filter((file) => generatedByHash.has(file.sha256)).map((file) => ({
    workspace_path: file.path, sha256: file.sha256, bytes: file.bytes, generated_image_paths: generatedByHash.get(file.sha256),
  }));
  const rawToolIdentity = events.filter((event) => {
    if (!["item.started", "item.completed", "item.failed"].includes(event?.type)) return false;
    const item = event.item ?? {};
    const structuredType = String(item.type ?? ""); const structuredIdentity = [item.tool, item.name, item.server, item.function?.name].filter(Boolean).join(":");
    return /^(?:mcp_tool_call|tool_call|function_call|image_generation|image_generation_call|image_gen)$/i.test(structuredType)
      && (/(?:^|[:._-])(?:image[_-]?gen(?:eration)?|generate[_-]image)(?:$|[:._-])|image_gen__imagegen/i.test(structuredIdentity) || /^image_(?:generation|generation_call|gen)$/i.test(structuredType));
  }).map((event) => ({ id: String(event.item?.id ?? ""), type: event.item?.type ?? null, item_sha256: sha256(canonical(event.item ?? null)) }));
  const rawFilesystemReferences = events.filter((event) => event?.item?.type === "command_execution" && /(?:^|[/\\])generated_images(?:[/\\]|$)/.test(String(event.item.command ?? ""))).map((event) => ({
    id: String(event.item?.id ?? ""), event_type: event.type ?? null, item_type: event.item?.type ?? null, item_sha256: sha256(canonical(event.item ?? null)), command_sha256: sha256(String(event.item?.command ?? "")),
  }));
  const preexisting = before?.state !== "absent";
  const changed = generatedDelta.length > 0 || after.state !== "absent";
  const tampered = before?.state === "invalid" || after.state === "invalid" || workspaceError !== null;
  const rawIdentityObserved = rawToolIdentity.length > 0; const rawFilesystemReferenceObserved = rawFilesystemReferences.length > 0;
  const pass = !preexisting && !changed && !tampered && !rawIdentityObserved && !rawFilesystemReferenceObserved;
  const reason = pass ? null
    : tampered ? "generated-images-boundary-invalid"
      : preexisting ? "preexisting-generated-images-boundary"
        : changed ? "hidden-image-generation-side-effect-unattributed"
          : rawIdentityObserved ? "hidden-image-tool-identity-observed-unattributed"
            : "generated-images-filesystem-reference-observed-unattributed";
  return {
    schema_version: "0.1", kind: "omd-luna-max-hidden-image-generation-filesystem-audit", pass, reason,
    provider_home: providerHome, before, after, generated_delta: generatedDelta,
    workspace_product_delta: productDelta, workspace_asset_lineage: workspaceAssetLineage, workspace_error: workspaceError,
    raw_tool_identity_evidence: rawToolIdentity, raw_generated_images_filesystem_references: rawFilesystemReferences, additional_hidden_model_tool_invocations: pass ? 0 : "unknown",
    attribution: pass ? "no-generated-images-filesystem-side-effect" : "filesystem-side-effect-observed-tool-identity-and-call-count-unproven",
    provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0,
  };
}
function authorityRuntimeClosure(root) {
  try {
    const files = tree(root).files.filter((file) => OMD_AUTHORITY_RUNTIME_PREFIXES.some((prefix) => prefix.endsWith("/") ? file.path.startsWith(prefix) : file.path === prefix));
    const required = OMD_AUTHORITY_RUNTIME_PREFIXES.filter((prefix) => !prefix.endsWith("/"));
    if (required.some((path) => !files.some((file) => file.path === path)) || !files.some((file) => file.path.startsWith("spec/schema/"))) return { pass: false, files, sha256: null, reason: "authority-runtime-closure-incomplete" };
    return { pass: true, files, sha256: sha256(canonical(files)), reason: null };
  } catch (error) { return { pass: false, files: [], sha256: null, reason: String(error?.message ?? error) }; }
}
function materializeAuthorityRuntime(source, execution) {
  const root = join(execution, "authority-controller-runtime"); mkdirSync(root, { recursive: false, mode: 0o700 });
  for (const prefix of OMD_AUTHORITY_RUNTIME_PREFIXES) {
    const from = join(source, prefix); const to = join(root, prefix);
    mkdirSync(dirname(to), { recursive: true }); cpSync(from, to, { recursive: true, errorOnExist: true });
  }
  let closure = authorityRuntimeClosure(root); invariant(closure.pass, closure.reason);
  for (const file of closure.files) chmodSync(join(root, file.path), 0o400);
  for (const dir of [join(root, "scripts"), join(root, "spec/schema"), join(root, "spec"), root]) if (existsSync(dir)) chmodSync(dir, 0o500);
  closure = authorityRuntimeClosure(root); invariant(closure.pass, closure.reason);
  return { root, executable: join(root, "scripts/activate-autopilot-design-system.cjs"), ...closure };
}
function evaluatorBundleReadback(runtime) {
  try {
    const bundle = runtime?.dependencies?.bundle;
    strictKeys(bundle, ["path", "files", "file_count", "bytes", "sha256"], "evaluation dependency bundle"); directory(resolve(bundle.path), "evaluation dependency bundle");
    const files = tree(resolve(bundle.path)).files;
    const actual = { files: files.length, bytes: files.reduce((sum, item) => sum + item.bytes, 0), sha256: sha256(canonical(files)) };
    invariant(bundle.file_count === actual.files && bundle.bytes === actual.bytes && bundle.sha256 === actual.sha256, "evaluation dependency bundle drift");
    return { pass: true, sha256: actual.sha256 };
  } catch (error) { return { pass: false, reason: String(error?.message ?? error) }; }
}
function binding(path) { regular(path, `binding ${path}`); const bytes = readFileSync(path); return { path: resolve(path), sha256: sha256(bytes), bytes: bytes.length, value: JSON.parse(bytes) }; }
function assertBinding(actual, expected, label) {
  strictKeys(expected, ["path", "sha256"], `${label} binding`);
  invariant(resolve(expected.path) === actual.path && expected.sha256 === actual.sha256, `${label} binding drift`);
}

export function assertCleanSource({ repoRoot, sourceCommit }) {
  invariant(/^[0-9a-f]{40}$/.test(sourceCommit), "source commit must be a full SHA");
  invariant(git(repoRoot, "rev-parse", "HEAD") === sourceCommit, "source commit drift");
  invariant(git(repoRoot, "status", "--porcelain=v1", "--untracked-files=all") === "", "source must be exact clean HEAD");
  for (const path of [RUNNER_PATH, PREREG_CONTROLLER_PATH, DEFAULT_RUNNER_PATH, DEFAULT_EVALUATOR_PATH]) {
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
    && /^[a-f0-9]{64}$/.test(evidence.static_runtime.value.runtime?.model_profile_sha256 ?? "")
    && evidence.static_runtime.value.runtime?.codex_cli?.wrapper?.path
    && /^[a-f0-9]{64}$/.test(evidence.static_runtime.value.runtime?.codex_cli?.wrapper?.sha256 ?? "")
    && evidence.static_runtime.value.runtime?.codex_cli?.native?.path
    && /^[a-f0-9]{64}$/.test(evidence.static_runtime.value.runtime?.codex_cli?.native?.sha256 ?? "")
    && evidence.static_runtime.value.runtime?.codex_cli?.version, "static runtime catalog/profile/CLI binding drift");
  invariant(evidence.runtime_attribution.value.kind === "codex-luna-max-runtime-attribution-preflight" && evidence.runtime_attribution.value.excluded_from_benchmark_denominator === true && evidence.runtime_attribution.value.runtime?.model === MODEL && evidence.runtime_attribution.value.runtime?.effort === EFFORT && evidence.runtime_attribution.value.runtime?.fallback_calls === 0, "runtime attribution drift");
  validateReceiptCalls(evidence.runtime_attribution.value, "runtime attribution", { provider_calls: 1, model_calls: 1, browser_calls: 0 });
  invariant(evidence.browser_identity.value.kind === "codex-in-app-browser-identity-preflight"
    && evidence.browser_identity.value.excluded_from_benchmark_denominator === true
    && evidence.browser_identity.value.browser?.type === "iab"
    && typeof evidence.browser_identity.value.browser?.browser_id === "string"
    && evidence.browser_identity.value.browser.browser_id.length > 0
    && evidence.browser_identity.value.browser?.name === "Codex In-app Browser"
    && typeof evidence.browser_identity.value.tab?.id === "string"
    && evidence.browser_identity.value.tab.id.length > 0
    && evidence.browser_identity.value.tab?.url === "about:blank"
    && evidence.browser_identity.value.tab?.title === "about:blank"
    && evidence.browser_identity.value.capture?.surface === "codex-in-app-browser-tool"
    && evidence.browser_identity.value.capture?.method === "agent.browsers.get(iab)+tabs.new"
    && evidence.browser_identity.value.capture?.cryptographic_identity_verified === false
    && evidence.browser_identity.value.controller_launched_browser === false
    && evidence.browser_identity.value.tab_created_for_identity === true
    && evidence.browser_identity.value.navigation_calls === 0, "browser identity drift");
  validateReceiptCalls(evidence.browser_identity.value, "browser identity", { provider_calls: 0, model_calls: 0, browser_calls: 1, network_calls: 0 });
  const evaluationRuntime = evidence.evaluation_runtime.value;
  invariant(evaluationRuntime.kind === "omd-luna-max-evaluation-runtime-receipt" && evaluationRuntime.pass === true && evaluationRuntime.source_commit === sourceCommit, "evaluation runtime identity drift");
  validateReceiptCalls(evaluationRuntime, "evaluation runtime", { provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  const declaredEvaluator = manifest.evaluator_authority?.evaluator;
  invariant(declaredEvaluator?.path === DEFAULT_EVALUATOR_PATH && evaluationRuntime.evaluation_authorities?.evaluator?.path === declaredEvaluator.path && evaluationRuntime.evaluation_authorities.evaluator.sha256 === declaredEvaluator.sha256 && evaluationRuntime.evaluation_authorities.evaluator.sha256 === sha256(readFileSync(join(repoRoot, DEFAULT_EVALUATOR_PATH))), "evaluation authority drift");
  invariant(isAbsolute(evaluationRuntime.browser?.executable_path ?? "") && /^[a-f0-9]{64}$/.test(evaluationRuntime.browser?.executable_sha256 ?? "") && evaluationRuntime.browser.executable_sha256 === sha256(readFileSync(evaluationRuntime.browser.executable_path)) && typeof evaluationRuntime.browser.version === "string" && evaluationRuntime.browser.version && /^[a-f0-9]{64}$/.test(evaluationRuntime.fonts?.sha256 ?? ""), "evaluation browser/font runtime drift");
  const dependencies = evaluationRuntime.dependencies;
  strictKeys(dependencies, ["package_lock", "bundle", "resolved"], "evaluation dependencies");
  strictKeys(dependencies.bundle, ["path", "files", "file_count", "bytes", "sha256"], "evaluation dependency bundle");
  directory(resolve(dependencies.bundle.path), "evaluation dependency bundle");
  const dependencyBundleFiles = tree(resolve(dependencies.bundle.path)).files;
  const dependencyBundleTree = { files: dependencyBundleFiles.length, bytes: dependencyBundleFiles.reduce((sum, item) => sum + item.bytes, 0), sha256: sha256(canonical(dependencyBundleFiles)) };
  invariant(dependencies.bundle.file_count === dependencyBundleTree.files && dependencies.bundle.bytes === dependencyBundleTree.bytes && dependencies.bundle.sha256 === dependencyBundleTree.sha256, "evaluation dependency bundle drift");
  invariant(Array.isArray(dependencies.resolved) && dependencies.resolved.length === 2, "evaluation dependency bundle resolution count drift");
  for (const item of dependencies.resolved) for (const field of ["package_json", "runtime"]) {
    const file = item?.[field]; strictKeys(file, ["path", "bytes", "sha256"], `evaluation dependency ${item?.name ?? "unknown"} ${field}`); regular(resolve(file.path), `evaluation dependency ${item?.name ?? "unknown"} ${field}`);
    invariant(resolve(file.path).startsWith(`${resolve(dependencies.bundle.path)}${sep}`), `evaluation dependency escapes immutable bundle: ${item.name}`);
    const bytes = readFileSync(file.path); invariant(file.bytes === bytes.length && file.sha256 === sha256(bytes), `evaluation dependency drift: ${item.name}`);
  }
  for (const item of Object.values(evidence)) invariant(item.value.source_commit === sourceCommit, `receipt source drift: ${item.path}`);
  return { admissionEvidence, admission, matrix, prereg, manifest, evidence };
}

function terminalPath(cell) {
  const root = join(cell, ".benchmark/execution");
  return ["COMPLETED.json", "FAILED.json", "TIMEOUT.json", "INFRASTRUCTURE-INVALID.json"].map((name) => join(root, name)).find(existsSync) ?? null;
}
function stateLine(root, value) { appendFileSync(join(root, "EXECUTION-STATE.jsonl"), `${JSON.stringify(value)}\n`, { encoding: "utf8" }); }
function errorEvidence(error) {
  return {
    name: error?.name ?? "Error", message: String(error?.message ?? error), code: error?.code ?? null,
    errno: error?.errno ?? null, syscall: error?.syscall ?? null, path: error?.path ?? null,
    stack: typeof error?.stack === "string" ? error.stack : null,
    prompt_input_failure: error?.promptInputFailurePath ? fileBinding(error.promptInputFailurePath) : null,
  };
}
function writeProviderBoundaryFailure({ root, cell, execution, started, manifestCell, reason, error, providerSpawnStarted }) {
  const metadata = readJson(join(cell, ".benchmark/cell.json")); const isolated = join(execution, "workspace");
  const before = tree(cell, [".benchmark"]); const after = existsSync(isolated) ? tree(isolated) : before;
  const errorPath = join(execution, "PRE-PROVIDER-ERROR.txt");
  const exactError = typeof error?.stack === "string" ? error.stack : String(error?.message ?? error ?? reason);
  if (!existsSync(errorPath)) writeFileSync(errorPath, exactError, { flag: "wx" });
  const failurePath = join(execution, "FAILURE-ARTIFACT.json");
  if (!existsSync(failurePath)) writeJsonExclusive(failurePath, {
    schema_version: "0.1", kind: "omd-luna-max-provider-boundary-failure", cell_id: metadata.cell_id,
    status: "infrastructure-invalid", phase: providerSpawnStarted ? "provider-spawned-before-terminal" : "pre-provider-spawn",
    reason, error: errorEvidence(error), provider_spawn_started: providerSpawnStarted,
    provider_calls: providerSpawnStarted ? "unknown" : 0, model_calls: providerSpawnStarted ? "unknown" : 0,
    browser_calls: 0, network_calls: 0,
  });
  const elapsedMs = Math.max(0, Date.now() - Date.parse(started.started_at ?? new Date().toISOString()));
  const terminal = {
    schema_version: "0.1", kind: "omd-luna-max-cell-terminal", cell_id: metadata.cell_id,
    task_id: metadata.task.id, variant_id: metadata.arm.variant_id, trial_index: manifestCell.trial_index,
    status: "infrastructure-invalid", source_commit: started.source_commit ?? null, model: MODEL, effort: EFFORT,
    runtime: { provider: "codex", model: MODEL, effort: EFFORT },
    controls: { retry_count: 0, replacement_count: 0, fallback_count: 0, model_substitution_count: 0, effort_substitution_count: 0 },
    telemetry: { elapsed_ms: Math.round(elapsedMs), provider_usage: { input_tokens: null, output_tokens: null, total_tokens: null, available: false, reason: providerSpawnStarted ? "provider-spawned-usage-unavailable" : "provider-not-spawned-preflight-failure" }, tool_calls: 0, agent_browser_calls: 0, agent_network_attempts: 0, external_context_interventions: 0, checkpoints: 0 },
    raw_response: fileBinding(errorPath), workspace_before: { sha256: before.sha256 }, workspace_after: { sha256: after.sha256 },
    evaluator: { deterministic: true, ui_resolved: false, objective_score: 0, unsupported_facts: 0, result: fileBinding(failurePath), process: null, terminal_failure_projection: true },
    manual_product_edits: 0, follow_up_questions: 0, unplanned_interventions: 0, manual_edits: 0, followups: 0, required_states: [],
    proof: { screenshots: [], design_system_package: { parsed: false, pass: false } }, failure_artifact: fileBinding(failurePath),
    provider_calls: providerSpawnStarted ? "unknown" : 0, model_calls: providerSpawnStarted ? "unknown" : 0, browser_calls: 0, network_calls: 0,
    browser_call_split: { agent_browser_calls: 0, evaluator_browser_calls: 0 }, retry_calls: 0, replacement_calls: 0, fallback_calls: 0, repair_calls: 0,
    started_at: started.started_at ?? null, finished_at: new Date().toISOString(),
    process: { exit_code: null, signal: null, timed_out: false, error: String(error?.message ?? reason), phase: providerSpawnStarted ? "provider-spawned-before-terminal" : "pre-provider-spawn" },
    admission_sha256: started.admission_sha256 ?? null, rerun_allowed: false, reason,
  };
  terminal.record_sha256 = sha256(canonical(terminal));
  writeJsonExclusive(join(execution, "INFRASTRUCTURE-INVALID.json"), terminal); stateLine(root, terminal); return terminal;
}
export function reconcileCrashes(materializedRoot, manifest) {
  const reconciled = [];
  for (const cell of manifest.cells) {
    const workspace = join(materializedRoot, "prepared-cells", cell.id); const execution = join(workspace, ".benchmark/execution");
    const started = join(execution, "STARTED.json");
    if (existsSync(started) && !terminalPath(workspace)) {
      const providerSpawnStarted = existsSync(join(execution, "PROVIDER-SPAWN-STARTED.json"));
      writeProviderBoundaryFailure({ root: materializedRoot, cell: workspace, execution, started: readJson(started), manifestCell: cell, reason: "started-without-terminal-crash-reconciled", error: new Error("cell process ended after STARTED without a terminal record"), providerSpawnStarted });
      reconciled.push(cell.id);
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
  invariant(readFileSync(join(target, ".benchmark/invocation-prompt.txt")).equals(readFileSync(join(cell, ".benchmark/invocation-prompt.txt")))
    && readFileSync(join(target, ".benchmark/PROMPT.md")).equals(readFileSync(join(cell, ".benchmark/invocation-prompt.txt"))), "copied execution prompt differs from exact materialized bytes");
  const metadata = readJson(join(cell, ".benchmark/cell.json")); const initial = tree(target, [".benchmark"]);
  writeJsonExclusive(join(target, ".benchmark/manifest.json"), { runtime_target: "codex", task: { id: metadata.task.id }, variant: { id: metadata.arm.variant_id }, workspace: { initial_sha256: tree(target).sha256, product_initial_sha256: initial.sha256, product_initial_files: initial.files, product_ignore: [".benchmark"] } });
  return { metadata, initial: tree(target) };
}
export function prepareOmdExternalStaging({ execution, workspace, metadata, authorityRuntime }) {
  if (metadata.arm.variant_id !== OMD_VARIANT) return null;
  const canonicalExecution = realpathSync(execution); const canonicalWorkspace = realpathSync(workspace);
  const root = join(canonicalExecution, "omd-external-staging");
  invariant(dirname(root) === canonicalExecution && !existsSync(root), "OmD staging root must be a fresh direct child of the cell execution boundary");
  mkdirSync(root, { recursive: false, mode: 0o700 }); directory(root, "OmD external staging root");
  invariant(realpathSync(root) === root && !root.startsWith(`${canonicalWorkspace}${sep}`), "OmD staging root must be canonical and outside the project workspace");
  const packageRoot = join(root, "compiled-core"); const checkpointPath = join(root, "project-adoption-checkpoint.json");
  invariant(!packageRoot.startsWith(`${canonicalWorkspace}${sep}`) && !checkpointPath.startsWith(`${packageRoot}${sep}`), "OmD package/checkpoint containment contract drift");
  const disclosure = OMD_EXTERNAL_STAGING_ACTIVATION;
  invariant(readFileSync(join(workspace, ".benchmark/PROMPT.md"), "utf8").includes(disclosure), "OmD prepared prompt is missing the preregistered external staging activation");
  const receiptPath = join(execution, "OMD-EXTERNAL-STAGING.json");
  writeJsonExclusive(receiptPath, { schema_version: "0.1", kind: "omd-luna-max-cell-local-external-staging", variant_id: OMD_VARIANT, cell_execution_root: canonicalExecution, project_workspace: canonicalWorkspace, staging_root: root, compiled_package_root: packageRoot, checkpoint_path: checkpointPath, environment: { staging_root: OMD_STAGING_ENV, compiled_package: OMD_PACKAGE_ENV, checkpoint: OMD_CHECKPOINT_ENV }, preregistered_activation_sha256: sha256(disclosure), initial_tree_sha256: tree(root).sha256, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  const authorityReceiptPath = join(execution, "OMD-AUTHORITY-CONTROLLER.json");
  const controllerRunDir = `.omd/runs/${String(metadata.task?.id ?? "benchmark-task").replace(/-landing$/, "")}`;
  writeJsonExclusive(authorityReceiptPath, {
    schema_version: "0.1", kind: "omd-autopilot-external-authority-controller-activation", status: "active",
    authority: { role: "project-owner", identifier: "omd-luna-max-preregistered-authority-controller" },
    scope: { cell_id: metadata.cell_id ?? "controller-fixture", project_workspace: canonicalWorkspace, run_dir: controllerRunDir, single_deterministic_activation: true, review_approval: true, project_adoption_checkpoint: true, controller_executable: authorityRuntime?.executable, authority_runtime_root: authorityRuntime?.root, authority_runtime_closure: { sha256: authorityRuntime?.sha256, files: authorityRuntime?.files } },
    activation: { sha256: sha256(disclosure) }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0,
  });
  return { root, packageRoot, checkpointPath, disclosure, receiptPath, receiptSha256: sha256(readFileSync(receiptPath)), authorityReceiptPath, authorityReceiptSha256: sha256(readFileSync(authorityReceiptPath)), authorityRuntimeRoot: authorityRuntime?.root, authorityExecutable: authorityRuntime?.executable, authorityRuntimeSha256: authorityRuntime?.sha256 ?? null, controllerRunDir };
}
export function auditOmdExternalStaging(staging) {
  if (!staging) return { applicable: false, pass: true, violations: [] };
  const violations = [];
  const visit = (root, current = root) => {
    for (const name of readdirSync(current).sort()) {
      const path = join(current, name); const info = lstatSync(path);
      if (info.isSymbolicLink()) violations.push({ path: relative(root, path), reason: "symlink-forbidden" });
      else if (info.isDirectory()) visit(root, path);
      else if (!info.isFile()) violations.push({ path: relative(root, path), reason: "unsupported-entry" });
    }
  };
  try { directory(staging.root, "OmD external staging root"); visit(staging.root); }
  catch (error) { return { applicable: true, pass: false, root: staging.root, violations: [{ path: ".", reason: "staging-missing-or-invalid", detail: String(error?.message ?? error) }], tree: null }; }
  const expected = [
    "compiled-core/.omd/system/adoption-receipt.json", "compiled-core/.omd/system/coverage.json",
    "compiled-core/.omd/system/graph.json", "compiled-core/.omd/system/manifest.json",
    "compiled-core/.omd/system/provenance.json", "compiled-core/DESIGN.md",
    "project-adoption-checkpoint.json",
  ];
  const observed = violations.length === 0 ? tree(staging.root).files.map((item) => item.path).sort() : [];
  if (violations.length === 0 && canonical(observed) !== canonical(expected.sort())) {
    violations.push({ path: ".", reason: "exact-compiled-package-and-checkpoint-file-set-required", expected, observed });
  }
  return { applicable: true, pass: violations.length === 0, root: staging.root, violations, tree: violations.length === 0 ? tree(staging.root) : null };
}

export function auditOmdControllerCommands(events, runDir, controllerExecutable = "scripts/activate-autopilot-design-system.cjs") {
  const observed = new Map(); const lifecycle = new Map();
  for (const event of events) {
    if (!/^item\.(?:started|completed|failed)$/.test(String(event.type)) || event.item?.type !== "command_execution") continue;
    const command = String(event.item.command ?? "");
    if (!command) continue;
    const id = String(event.item.id ?? `${event.type}:${sha256(command)}`);
    observed.set(id, { ...event, item: { ...event.item, command } });
    const record = lifecycle.get(id) ?? { command, events: [] }; record.events.push(event); record.command = command; lifecycle.set(id, record);
  }
  const activations = [];
  const forbidden = [];
  const literalCommand = `node $${OMD_AUTHORITY_EXECUTABLE_ENV} . $${OMD_AUTHORITY_RUN_DIR_ENV}`;
  const expandedCommand = `node ${controllerExecutable} . ${runDir}`;
  const exactRawActivation = (command) => {
    if (command === literalCommand || command === expandedCommand) return true;
    const tokens = shellTokens(command);
    return tokens.length === 3 && tokens.every((token) => token.type === "word")
      && tokens[0].value.split("/").at(-1) === "zsh" && tokens[1].value === "-lc"
      && (tokens[2].value === literalCommand || tokens[2].value === expandedCommand);
  };
  const syntacticActivation = (command) => shellInvocations(command).some((invocation) => {
    const argv = unwrapExecutionArgv(invocation); if (!argv?.length) return false;
    const executable = argv[0].split("/").at(-1)?.toLowerCase(); if (!["node", "nodejs"].includes(executable)) return false;
    const operand = String(argv[1] ?? "").replace(/^\.\//, "");
    return operand === `$${OMD_AUTHORITY_EXECUTABLE_ENV}` || resolve(operand || ".") === resolve(controllerExecutable)
      || operand.split("/").at(-1) === "activate-autopilot-design-system.cjs";
  });
  for (const [id, record] of lifecycle) {
    const command = record.command.trim();
    const activationLike = syntacticActivation(command);
    if (!activationLike) continue;
    if (!exactRawActivation(command)) {
      forbidden.push({ id, reason: "activation-raw-command-not-exact", command_sha256: sha256(record.command) }); continue;
    }
    const finalEvent = record.events.at(-1);
    const exitCode = finalEvent?.item?.exit_code;
    const status = finalEvent?.item?.status;
    const successful = finalEvent?.type === "item.completed" && (exitCode == null || exitCode === 0) && (status == null || status === "completed" || status === "success");
    const output = [finalEvent?.item?.aggregated_output, finalEvent?.item?.stdout, finalEvent?.item?.output].find((value) => typeof value === "string" && value.length > 0);
    if (!successful) forbidden.push({ id, reason: "activation-not-successfully-completed", command_sha256: sha256(record.command) });
    else if (output && !/adopted-and-validated/.test(output)) forbidden.push({ id, reason: "activation-success-output-unproven", command_sha256: sha256(record.command) });
    else activations.push(id);
  }
  for (const event of observed.values()) {
    const command = String(event.item.command ?? "");
    for (const invocation of shellInvocations(command)) {
      const argv = unwrapExecutionArgv(invocation); if (!argv?.length) continue;
      const normalized = argv.map(String); const executable = normalized[0].split("/").at(-1)?.toLowerCase();
      const helperIndex = ["node", "nodejs"].includes(executable) ? 1 : 0;
      const joined = normalized.join(" ");
      if (new RegExp(`${OMD_AUTHORITY_EXECUTABLE_ENV}=`).test(command)
        || (/prepare-design-md-core-review\.cjs/.test(joined) && /--approve/.test(joined))
        || (/adopt-design-md-core\.cjs/.test(joined) && /--prepare-checkpoint/.test(joined))
        || /--reviewer|--authority-transition-approved/.test(joined)
        || /(?:review|package)-v[2-9]\b/.test(joined)) {
        forbidden.push({ id: String(event.item.id), reason: "direct-or-repeated-authority-command", command_sha256: sha256(command) });
      }
    }
  }
  return { pass: activations.length === 1 && forbidden.length === 0, exact_activation_count: activations.length, activation_item_ids: activations, forbidden };
}

export function auditOmdControllerOutcome({ workspace, staging, authorityReceiptSha256, runDir }) {
  const violations = [];
  const activationPath = join(workspace, runDir, "system/activation.json");
  const designPath = join(workspace, "DESIGN.md");
  const proofPath = join(workspace, runDir, "system/proof.json");
  for (const [file, label] of [[activationPath, "activation"], [designPath, "DESIGN"], [proofPath, "proof"]]) {
    try { regular(file, `OmD ${label}`); } catch { violations.push(`${label}-missing-or-invalid`); }
  }
  let activation = null; let proofValue = null;
  if (!violations.includes("activation-missing-or-invalid")) {
    try { activation = readJson(activationPath); } catch { violations.push("activation-json-invalid"); }
  }
  if (!violations.includes("proof-missing-or-invalid")) {
    try { proofValue = readJson(proofPath); } catch { violations.push("proof-json-invalid"); }
  }
  if (activation) {
    let designSha = null; let proofSha = null;
    try { designSha = sha256(readFileSync(designPath)); } catch { /* recorded above */ }
    try { proofSha = sha256(readFileSync(proofPath)); } catch { /* recorded above */ }
    if (activation.schema_version !== "0.1" || activation.kind !== "omd-autopilot-deterministic-system-activation"
      || activation.status !== "adopted-and-validated" || activation.authority_controller_receipt_sha256 !== authorityReceiptSha256
      || !designSha || !proofSha || activation.outputs?.design_md_sha256 !== designSha
      || activation.outputs?.proof_sha256 !== proofSha) violations.push("activation-binding-invalid");
    if (!proofValue || proofValue.pass !== true || proofValue.status !== "passed" || proofValue.design_md_sha256 !== activation.outputs?.design_md_sha256) {
      violations.push("activation-project-proof-invalid");
    }
  }
  const stagingAudit = auditOmdExternalStaging(staging);
  if (!stagingAudit.pass) violations.push("external-staging-invalid");
  return { applicable: true, pass: violations.length === 0, activation: activation && violations.length === 0 ? fileBinding(activationPath) : null, violations, staging: stagingAudit };
}

function auditImmutableFile(path, expectedSha256) {
  try {
    regular(path, `immutable receipt ${path}`);
    const bytes = readFileSync(path); const actualSha256 = sha256(bytes);
    return { pass: actualSha256 === expectedSha256, binding: { path: resolve(path), sha256: actualSha256, bytes: bytes.length }, reason: actualSha256 === expectedSha256 ? null : "sha256-drift" };
  } catch (error) {
    return { pass: false, binding: null, reason: String(error?.message ?? error) };
  }
}
function auditPostProviderCacheArtifact(workspace, integrity) {
  if (integrity?.applicable !== true) return { applicable: false, pass: true, binding: null, reason: null };
  const expectedPath = join(workspace, ".benchmark", "models-cache.post-provider.bin");
  const claimed = integrity.post_provider_cache_artifact;
  if (!claimed || resolve(claimed.path ?? "") !== expectedPath) {
    return { applicable: true, pass: false, binding: null, reason: "post-provider-cache-path-outside-trusted-benchmark" };
  }
  try {
    const info = lstatSync(expectedPath);
    if (info.isSymbolicLink()) {
      rmSync(expectedPath, { force: true });
      throw new Error("post-provider cache artifact must be a regular non-symlink file");
    }
    if (!info.isFile()) throw new Error("post-provider cache artifact must be a regular non-symlink file");
    const bytes = readFileSync(expectedPath); const actual = { path: expectedPath, sha256: sha256(bytes), bytes: bytes.length };
    const pass = actual.sha256 === claimed.sha256 && actual.bytes === claimed.bytes;
    return { applicable: true, pass, binding: actual, reason: pass ? null : "post-provider-cache-sha-or-bytes-drift" };
  } catch (error) {
    return { applicable: true, pass: false, binding: null, reason: String(error?.message ?? error) };
  }
}
export function detectNativeInfrastructureBlock({ variantId, blankShell, finalMessage }) {
  return variantId === OMD_VARIANT && blankShell
    && /blocked before product build|adopter rejects packages nested inside the project|workspace-only rule forbids staging outside/i.test(finalMessage);
}
function parseEvents(path) {
  if (!existsSync(path)) return [];
  return readFileSync(path, "utf8").split(/\r?\n/).filter(Boolean).map((line) => { try { return JSON.parse(line); } catch { return { type: "unparseable", raw_sha256: sha256(line) }; } });
}
function rolloutEvidence(events, runResult, staticRuntime, admittedCatalog) {
  const contexts = events.filter((event) => event.type === "turn_context");
  const fallbacks = events.filter((event) => /fallback|replacement|retry/i.test(`${event.type} ${event.payload?.type ?? ""}`));
  const marker = events.some((event) => /manual.edit|follow.?up|unplanned.intervention/i.test(`${event.type} ${event.payload?.type ?? ""}`));
  const completions = events.filter((event) => /^(?:response|turn)\.completed$/.test(event.type ?? ""));
  const runtime = runResult?.runtime ?? {}; const toolEvidence = runtime.model_tool_mode_evidence ?? {};
  const expectedProfile = staticRuntime?.model_profile_sha256;
  const expectedSemanticCatalog = admittedCatalog?.semantic_sha256;
  const expectedClientVersion = admittedCatalog?.client_version;
  const exact = runtime.model_requested === MODEL && runtime.model === MODEL && runtime.reasoning === EFFORT && runtime.effort_requested === EFFORT && (runtime.model_reported === null || runtime.model_reported === MODEL) && completions.length === 1 && fallbacks.length === 0
    && toolEvidence.model_profile_sha256 === expectedProfile && toolEvidence.cache_semantic_sha256 === expectedSemanticCatalog
    && toolEvidence.cache_client_version === expectedClientVersion
    && toolEvidence.auth_source_before_run?.model_profile_sha256 === expectedProfile
    && toolEvidence.auth_source_before_run?.cache_semantic_sha256 === expectedSemanticCatalog
    && toolEvidence.auth_source_before_run?.cache_client_version === expectedClientVersion
    && runtime.agent_version === staticRuntime.codex_cli.version
    && runtime.binary_sha256 === staticRuntime.codex_cli.wrapper.sha256
    && runtime.native_binary_sha256 === staticRuntime.codex_cli.native.sha256;
  const latestModelUsage = runResult?.output?.model_usage?.at?.(-1) ?? null;
  const providerUsage = latestModelUsage ? { available: true, input_tokens: Number(latestModelUsage.input_tokens), output_tokens: Number(latestModelUsage.output_tokens), total_tokens: Number(latestModelUsage.input_tokens) + Number(latestModelUsage.output_tokens) } : { available: false, reason: "provider-emitted-usage-unavailable" };
  return { exact, contexts, completions, fallbacks, provider_usage: providerUsage, interventions: events.some((event) => event.type === "unparseable") || marker ? 1 : 0, marker };
}
function stripShellHeredocBodies(source) {
  const lines = String(source).split("\n"); const kept = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]; kept.push(line);
    const match = line.match(/<<-?\s*(['"]?)([A-Za-z_][A-Za-z0-9_]*)\1/);
    if (!match) continue;
    const delimiter = match[2];
    while (index + 1 < lines.length) {
      index += 1;
      const closing = lines[index].match(new RegExp(`^\\s*${delimiter}(?=\\s|["']|$)(.*)$`));
      if (closing) { if (closing[1]) kept.push(closing[1]); break; }
    }
  }
  return kept.join("\n");
}
function shellTokens(source) {
  const text = stripShellHeredocBodies(source); const tokens = []; let word = ""; let quote = null;
  const pushWord = () => { if (word) { tokens.push({ type: "word", value: word }); word = ""; } };
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (quote) {
      if (char === quote) quote = null;
      else if (char === "\\" && quote === '"' && index + 1 < text.length) word += text[index += 1];
      else word += char;
      continue;
    }
    if (char === "'" || char === '"') { quote = char; continue; }
    if (char === "\\" && index + 1 < text.length) { word += text[index += 1]; continue; }
    if (/\s/.test(char)) { pushWord(); if (char === "\n") tokens.push({ type: "operator", value: "\n" }); continue; }
    const pair = text.slice(index, index + 2);
    if (["&&", "||", "<<", ">>", ";;"].includes(pair)) { pushWord(); tokens.push({ type: "operator", value: pair }); index += 1; continue; }
    if ([";", "|", "&", "<", ">", "(", ")"].includes(char)) { pushWord(); tokens.push({ type: "operator", value: char }); continue; }
    word += char;
  }
  pushWord(); return tokens;
}
function shellInvocations(source, depth = 0) {
  if (depth > 3) return [];
  const tokens = shellTokens(source); const invocations = []; let argv = []; let skipRedirectTarget = false;
  const finish = () => {
    if (argv.length === 0) return;
    while (argv.length && /^[A-Za-z_][A-Za-z0-9_]*=/.test(argv[0])) argv.shift();
    if (argv.length) {
      invocations.push(argv);
      const executable = argv[0].split("/").at(-1)?.toLowerCase();
      if (["sh", "bash", "zsh", "dash", "ksh"].includes(executable)) {
        const commandIndex = argv.findIndex((value, index) => index > 0 && /^(?:-[^-]*c|--command)$/.test(value));
        if (commandIndex >= 0 && argv[commandIndex + 1]) invocations.push(...shellInvocations(argv[commandIndex + 1], depth + 1));
      }
    }
    argv = [];
  };
  for (const token of tokens) {
    if (token.type === "operator") {
      if ([";", ";;", "&&", "||", "|", "&", "\n", "(", ")"].includes(token.value)) finish();
      else skipRedirectTarget = true;
      continue;
    }
    if (skipRedirectTarget) { skipRedirectTarget = false; continue; }
    argv.push(token.value);
  }
  finish(); return invocations;
}
function unwrapExecutionArgv(input) {
  let argv = [...input];
  for (let depth = 0; depth < 8 && argv.length; depth += 1) {
    while (argv.length && /^[A-Za-z_][A-Za-z0-9_]*=/.test(argv[0])) argv.shift();
    if (!argv.length) return null;
    const executable = argv[0].split("/").at(-1)?.toLowerCase();
    let index = 1;
    if (executable === "command") {
      if (argv.slice(1).some((value) => value === "-v" || value === "-V" || /^-[p]*[vV]/.test(value))) return null;
      while (argv[index]?.startsWith("-") && argv[index] !== "--") index += 1;
      if (argv[index] === "--") index += 1;
    } else if (executable === "exec") {
      while (index < argv.length) {
        const value = argv[index];
        if (value === "--") { index += 1; break; }
        if (value === "-a") { index += 2; continue; }
        if (value.startsWith("-")) { index += 1; continue; }
        break;
      }
    } else if (executable === "env") {
      while (index < argv.length) {
        const value = argv[index];
        if (value === "--") { index += 1; break; }
        if (/^[A-Za-z_][A-Za-z0-9_]*=/.test(value)) { index += 1; continue; }
        if (["-u", "--unset", "-C", "--chdir", "-a", "--argv0"].includes(value)) { index += 2; continue; }
        if (value === "-S" || value === "--split-string") {
          const split = shellTokens(argv[index + 1] ?? "").filter((token) => token.type === "word").map((token) => token.value);
          argv = [...split, ...argv.slice(index + 2)]; index = 0; break;
        }
        const splitString = value.match(/^--split-string=(.*)$/);
        if (splitString) { argv = [...shellTokens(splitString[1]).filter((token) => token.type === "word").map((token) => token.value), ...argv.slice(index + 1)]; index = 0; break; }
        if (value.startsWith("-")) { index += 1; continue; }
        break;
      }
    } else if (executable === "timeout" || executable === "gtimeout") {
      while (index < argv.length) {
        const value = argv[index];
        if (value === "--") { index += 1; break; }
        if (["-k", "--kill-after", "-s", "--signal"].includes(value)) { index += 2; continue; }
        if (value.startsWith("-")) { index += 1; continue; }
        index += 1; break; // duration
      }
    } else if (executable === "nice") {
      while (index < argv.length) {
        const value = argv[index];
        if (value === "--") { index += 1; break; }
        if (value === "-n" || value === "--adjustment") { index += 2; continue; }
        if (/^-(?:n)?\d+$/.test(value) || value.startsWith("--adjustment=")) { index += 1; continue; }
        if (value.startsWith("-")) { index += 1; continue; }
        break;
      }
    } else if (executable === "nohup") {
      while (argv[index]?.startsWith("-") && argv[index] !== "--") index += 1;
      if (argv[index] === "--") index += 1;
    } else if (executable === "sudo") {
      const consumesNext = new Set(["-a", "--auth-type", "-u", "--user", "-U", "--other-user", "-g", "--group", "-h", "--host", "-p", "--prompt", "-C", "--close-from", "-R", "--chroot", "-D", "--chdir", "-r", "--role", "-t", "--type", "-T", "--command-timeout"]);
      while (index < argv.length) {
        const value = argv[index];
        if (value === "--") { index += 1; break; }
        if (/^[A-Za-z_][A-Za-z0-9_]*=/.test(value)) { index += 1; continue; }
        if (consumesNext.has(value)) { index += 2; continue; }
        if (value.startsWith("-")) { index += 1; continue; }
        break;
      }
    } else return argv;
    argv = argv.slice(index);
  }
  return argv.length ? argv : null;
}
function commandTelemetry(command) {
  const invocations = shellInvocations(command); let browser = false; let network = false;
  for (const invocation of invocations) {
    const argv = unwrapExecutionArgv(invocation); if (!argv?.length) continue;
    const executable = argv[0].split("/").at(-1)?.toLowerCase();
    const directBrowser = executable === "browser-harness" || executable === "browser_harness";
    const directNetwork = ["curl", "wget", "open"].includes(executable);
    const packageArgs = argv.slice(1).filter((value) => value !== "--" && !value.startsWith("-"));
    const packageBrowser = ["npx", "bunx"].includes(executable) && /^(?:@[^/]+\/)?browser[-_]harness(?:@[^/]+)?$/i.test(packageArgs[0] ?? "")
      || ["npm", "pnpm", "yarn"].includes(executable) && ["exec", "dlx", "x"].includes(packageArgs[0]?.toLowerCase()) && /^(?:@[^/]+\/)?browser[-_]harness(?:@[^/]+)?$/i.test(packageArgs[1] ?? "");
    const nodeBrowser = ["node", "deno", "bun"].includes(executable) && argv.slice(1).some((value) => /(?:^|[/\\])browser[-_]harness(?:[/\\.]|$)/i.test(value));
    if (directBrowser || packageBrowser || nodeBrowser || executable === "open") browser = true;
    if (directBrowser || packageBrowser || nodeBrowser || directNetwork) network = true;
  }
  return { browser, network };
}
function absoluteExternalPathCandidates(raw) {
  // A leading slash is absolute only at a shell/structured-value boundary.
  // Without this boundary, relative workspace paths such as
  // `.benchmark/tmp/design-review` are incorrectly truncated to `/tmp/design-review`.
  return [...String(raw).matchAll(/(?:^|[^A-Za-z0-9_.~/-])(\/(?:Users|private\/tmp|tmp)\/[^\s"'`\\]+)/g)].map((match) => match[1]);
}
export function toolTelemetry(events, runResult, { workspace, providerHome, externalStagingRoot = null }) {
  const finiteNormalized = runResult?.output?.agent_tool_call_count;
  const toolTypes = new Set(["command_execution", "mcp_tool_call", "file_change", "web_search", "computer_use"]); const ids = new Set();
  const browserIds = new Set(); const networkIds = new Set(); const externalContextItems = [];
  for (const event of events) if (event.type === "item.completed" && toolTypes.has(event.item?.type)) {
    const id = String(event.item.id ?? `${event.item.type}:${sha256(canonical(event.item))}`); ids.add(id);
    const raw = event.item.type === "command_execution"
      ? String(event.item.command ?? "")
      : canonical({
        type: event.item.type,
        server: event.item.server ?? null,
        tool: event.item.tool ?? event.item.name ?? null,
        arguments: event.item.arguments ?? event.item.input ?? null,
        query: event.item.query ?? null,
        action: event.item.action ?? null,
        paths: Array.isArray(event.item.changes)
          ? event.item.changes.map((change) => ({ path: change?.path ?? null, kind: change?.kind ?? change?.type ?? null }))
          : null,
      });
    const commandSignals = event.item.type === "command_execution" ? commandTelemetry(event.item.command ?? "") : null;
    if (event.item.type !== "command_execution" && /browser-harness|browser_harness|BH_(?:RUNTIME|AGENT|DOMAIN|CDP)|BU_(?:NAME|CDP)/i.test(raw)) browserIds.add(id);
    const implicitNetworkTool = event.item.type === "web_search" || event.item.type === "computer_use" || event.item.type === "mcp_tool_call";
    if (commandSignals?.network || implicitNetworkTool) networkIds.add(id);
    if (commandSignals?.browser || event.item.type === "computer_use") browserIds.add(id);
    const absolutePaths = absoluteExternalPathCandidates(raw);
    const allowedRoots = [workspace, providerHome, externalStagingRoot].filter(Boolean).map((root) => { try { return realpathSync(root); } catch { return resolve(root); } });
    const forbiddenPath = absolutePaths.find((candidate) => {
      let normalized = resolve(candidate.replace(/[),;:]+$/, ""));
      try { normalized = realpathSync(normalized); } catch { /* an attempted read/write may not exist yet */ }
      if (allowedRoots.some((root) => normalized === root || normalized.startsWith(`${root}${sep}`))) return false;
      return normalized.startsWith("/Users/") || normalized.startsWith("/tmp/") || normalized.startsWith("/private/tmp/");
    });
    if (forbiddenPath || /(?:^|\/)\.codex\/skills(?:\/|$)|Developer\/browser-harness|browser_harness(?:\/|\\|\.)/i.test(raw)) {
      externalContextItems.push({ id, type: event.item.type, forbidden_path: forbiddenPath ?? null, item_sha256: sha256(raw) });
    }
  }
  const normalized = Number.isInteger(finiteNormalized) && finiteNormalized >= 0;
  return { tool_calls: normalized ? finiteNormalized : ids.size, evidence_mode: normalized ? "run-result-normalized-plus-raw-browser-network-and-external-context-audit" : "raw-cli-unique-completed-tool-items", raw_completed_tool_item_ids: [...ids].sort(), agent_browser_calls: browserIds.size, raw_browser_item_ids: [...browserIds].sort(), agent_network_attempts: networkIds.size, raw_network_item_ids: [...networkIds].sort(), external_context_interventions: externalContextItems.length, external_context_items: externalContextItems };
}
function skillIsolation(workspace, variant) {
  const manifest = tree(workspace, [".benchmark"]); const skillFiles = manifest.files.filter((item) => item.path.endsWith("/SKILL.md") || item.path === "SKILL.md");
  invariant(skillFiles.every((item) => item.path.startsWith(".agents/skills/")), `skill outside isolated project root: ${skillFiles.map((item) => item.path).join(",")}`);
  const namedSkillFiles = skillFiles.map((item) => {
    const source = readFileSync(join(workspace, item.path), "utf8"); const frontmatter = source.match(/^---\s*\n([\s\S]*?)\n---\s*(?:\n|$)/);
    const names = frontmatter ? [...frontmatter[1].matchAll(/^name:\s*["']?([^\n"']+)["']?\s*$/gm)].map((match) => match[1].trim()) : [];
    invariant(names.length === 1 && names[0], `project skill requires one frontmatter name: ${item.path}`);
    return { ...item, name: names[0] };
  });
  invariant(new Set(namedSkillFiles.map((item) => item.name)).size === namedSkillFiles.length, "project skill frontmatter names must be unique");
  if (variant === "model-only") invariant(skillFiles.length === 0, "model-only cell must expose zero skills");
  else invariant(skillFiles.length > 0, `${variant} cell must expose its frozen project skill`);
  return { policy: "project-cell-whitelist-plus-equal-codex-builtins", variant_id: variant, project_skill_files: namedSkillFiles, project_skill_tree_sha256: sha256(canonical(namedSkillFiles)), builtin_skills: { expected_equal_across_all_arms: true, exact_visible_set_requires_prompt_input_audit: true }, global_user_and_plugin_skill_roots: { projected_into_isolated_home_or_project: false, visibility_claimed_without_prompt_input_audit: false, raw_event_external_context_audit_required: true } };
}
export function auditPromptInputSkills({ codexBin, workspace, providerEnv, skills, cliBinding, probe }) {
  const args = ["debug", "prompt-input", "--disable", "plugins", "--disable", "skill_search", "OMD_SKILL_VISIBILITY_AUDIT"];
  let observed;
  try {
    observed = probe
      ? probe({ codexBin, args, cwd: workspace, env: providerEnv, timeoutMs: PROMPT_INPUT_AUDIT_TIMEOUT_MS })
      : spawnSync(codexBin, args, { cwd: workspace, env: providerEnv, encoding: "utf8", timeout: PROMPT_INPUT_AUDIT_TIMEOUT_MS, maxBuffer: 16 * 1024 * 1024 });
  } catch (error) {
    observed = { status: null, signal: null, stdout: "", stderr: "", error };
  }
  const stdout = String(observed?.stdout ?? ""); const stderr = String(observed?.stderr ?? "");
  const observation = {
    timeout_ms: PROMPT_INPUT_AUDIT_TIMEOUT_MS,
    status: observed?.status ?? null,
    signal: observed?.signal ?? null,
    error: observed?.error ? { name: observed.error.name ?? "Error", message: String(observed.error.message ?? observed.error), code: observed.error.code ?? null, errno: observed.error.errno ?? null, syscall: observed.error.syscall ?? null } : null,
    stdout, stderr,
  };
  try {
    invariant(observed?.status === 0 && !observed?.error, `Codex prompt-input skill audit process failed (status=${observation.status ?? "null"}, signal=${observation.signal ?? "null"}, code=${observation.error?.code ?? "null"})`);
    let parsed; try { parsed = JSON.parse(stdout); } catch { throw new Error("Codex prompt-input skill audit must be one JSON document"); }
    invariant(Array.isArray(parsed), "Codex prompt-input skill audit JSON must be an array");
  const developerTexts = parsed
    .filter((message) => message?.type === "message" && message?.role === "developer" && Array.isArray(message.content))
    .flatMap((message) => message.content)
    .filter((content) => content?.type === "input_text" && typeof content.text === "string")
    .map((content) => content.text);
  const blocks = developerTexts.flatMap((value) => [...value.matchAll(/<skills_instructions>([\s\S]*?)<\/skills_instructions>/g)].map((match) => match[1]));
  invariant(blocks.length === 1, "Codex prompt-input skill audit requires one developer skills_instructions block");
  const block = blocks[0];
  const projectExpected = skills.project_skill_files.map((item) => ({ id: item.name, path: resolve(workspace, item.path), sha256: item.sha256 })).sort((a, b) => a.id.localeCompare(b.id));
  const expectedByLocator = new Map([
    ...CODEX_BUILTIN_SKILLS.map((id) => [join(resolve(providerEnv.CODEX_HOME), "skills/.system", id, "SKILL.md"), { id, kind: "builtin" }]),
    ...projectExpected.map((item) => [item.path, { id: item.id, kind: "project" }]),
  ]);
  const rawEntries = [...block.matchAll(/^\s*-\s+(.+?)\s+\(file:\s*([^)]+)\)\s*$/gm)].map((match) => ({ prefix: match[1].trim(), locator: resolve(match[2].trim()) }));
  invariant(rawEntries.length > 0, "Codex prompt-input skill audit parse failed");
  invariant(!rawEntries.some((entry) => /browser-harness/i.test(`${entry.prefix} ${entry.locator}`)), "browser-harness leaked into provider prompt skills");
  const entries = rawEntries.map((entry) => {
    const expected = expectedByLocator.get(entry.locator);
    invariant(expected, `unexpected Codex prompt-input skill locator: ${entry.locator}`);
    invariant(entry.prefix.startsWith(`${expected.id}:`), `Codex prompt-input skill id/locator mismatch: ${expected.id}`);
    return { id: expected.id, locator: entry.locator, kind: expected.kind };
  });
  invariant(new Set(entries.map((entry) => entry.id)).size === entries.length && new Set(entries.map((entry) => entry.locator)).size === entries.length, "Codex prompt-input skill ids/locators must be unique");
  const builtins = entries.filter((entry) => entry.kind === "builtin");
  invariant(canonical(builtins.map((entry) => entry.id).sort()) === canonical([...CODEX_BUILTIN_SKILLS].sort()), "Codex built-in skill allowlist drift");
  for (const entry of builtins) {
    invariant(entry.locator === join(resolve(providerEnv.CODEX_HOME), "skills/.system", entry.id, "SKILL.md"), `Codex built-in skill locator drift: ${entry.id}`);
    regular(entry.locator, `Codex prompt-input built-in skill ${entry.id}`);
  }
  const projectObserved = entries.filter((entry) => entry.kind === "project").map((entry) => { const path = resolve(entry.locator); regular(path, `prompt-input project skill ${entry.id}`); return { id: entry.id, path, sha256: sha256(readFileSync(path)) }; }).sort((a, b) => a.id.localeCompare(b.id));
  invariant(canonical(projectObserved) === canonical(projectExpected), "Codex prompt-input project skill closure drift");
    return { schema_version: "0.1", kind: "omd-luna-max-provider-zero-prompt-input-skill-audit", pass: true, args, timeout_ms: PROMPT_INPUT_AUDIT_TIMEOUT_MS, process: { status: 0, signal: observation.signal, error: null, stderr_sha256: sha256(stderr), stderr_bytes: Buffer.byteLength(stderr) }, visible_skill_ids: entries.map((entry) => entry.id), visible_skill_locators: entries, builtin_skill_ids: builtins.map((entry) => entry.id), project_skills: projectObserved, raw_stdout_sha256: sha256(stdout), raw_stdout_bytes: Buffer.byteLength(stdout), skills_block_sha256: sha256(block), parsed_json_sha256: sha256(canonical(parsed)), cli_binding: cliBinding, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 };
  } catch (cause) {
    const error = new Error(`${cause.message}; prompt-input status=${observation.status ?? "null"} signal=${observation.signal ?? "null"} code=${observation.error?.code ?? "null"}`);
    error.cause = cause; error.promptInputObservation = { ...observation, args };
    throw error;
  }
}
function which(command, env = process.env) {
  try {
    const path = realpathSync(execFileSync("which", [command], { encoding: "utf8", env }).trim()); regular(path, `provider tool ${command}`); accessSync(path, fsConstants.X_OK); return path;
  } catch { return null; }
}
function validateProviderRuntimeSource(runtimeHome, staticRuntime, staticRuntimeEvidence) {
  invariant(typeof runtimeHome === "string" && isAbsolute(runtimeHome), "exact --runtime-home is required; mutable default Codex home is forbidden");
  const sourceHome = resolve(runtimeHome); const sourceAuth = join(sourceHome, "auth.json"); const sourceCatalog = join(sourceHome, "models_cache.json");
  invariant(statSync(sourceHome).isDirectory(), "provider runtime snapshot must resolve to a directory");
  regular(sourceAuth, "provider auth snapshot source"); regular(sourceCatalog, "provider model catalog snapshot source");
  invariant(sha256(readFileSync(sourceCatalog)) === staticRuntime.catalog_sha256, "provider model catalog differs from admitted static authority");
  const receipt = readJson(join(sourceHome, "RUNTIME-SNAPSHOT.json"));
  invariant(receipt.kind === "omd-luna-max-immutable-runtime-snapshot"
    && receipt.static_runtime_receipt?.path === staticRuntimeEvidence?.path
    && receipt.static_runtime_receipt?.sha256 === staticRuntimeEvidence?.sha256
    && receipt.auth_json_sha256 === sha256(readFileSync(sourceAuth))
    && receipt.models_cache_sha256 === staticRuntime.catalog_sha256
    && receipt.static_runtime_catalog_sha256 === staticRuntime.catalog_sha256
    && receipt.provider_calls === 0 && receipt.model_calls === 0 && receipt.browser_calls === 0 && receipt.network_calls === 0,
  "immutable provider runtime snapshot receipt drift");
  return sourceHome;
}
export function prepareRuntimeSnapshot({ sourceHome, out, staticRuntimeReceipt, repoRoot = DEFAULT_REPO_ROOT }) {
  sourceHome = resolve(sourceHome); out = resolve(out); repoRoot = resolve(repoRoot);
  invariant(isAbsolute(sourceHome) && isAbsolute(out) && out !== repoRoot && !out.startsWith(`${repoRoot}${sep}`) && !existsSync(out), "runtime snapshot output must be fresh, absolute, and outside repository");
  const staticEvidence = binding(staticRuntimeReceipt); const staticRuntime = staticEvidence.value.runtime;
  const authPath = join(sourceHome, "auth.json"); const catalogPath = join(sourceHome, "models_cache.json"); regular(authPath, "runtime source auth"); regular(catalogPath, "runtime source catalog");
  const authBytes = readFileSync(authPath); const catalogBytes = readFileSync(catalogPath); invariant(sha256(catalogBytes) === staticRuntime.catalog_sha256, "runtime source catalog differs from static receipt");
  mkdirSync(out, { recursive: false, mode: 0o700 }); writeFileSync(join(out, "auth.json"), authBytes, { flag: "wx", mode: 0o600 }); writeFileSync(join(out, "models_cache.json"), catalogBytes, { flag: "wx", mode: 0o600 });
  invariant(readFileSync(authPath).equals(authBytes) && readFileSync(catalogPath).equals(catalogBytes), "runtime snapshot source changed during copy");
  const receipt = { schema_version: "0.1", kind: "omd-luna-max-immutable-runtime-snapshot", static_runtime_receipt: { path: staticEvidence.path, sha256: staticEvidence.sha256 }, auth_json_sha256: sha256(authBytes), models_cache_sha256: sha256(catalogBytes), static_runtime_catalog_sha256: staticRuntime.catalog_sha256, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 };
  writeJsonExclusive(join(out, "RUNTIME-SNAPSHOT.json"), receipt); return receipt;
}
export function prepareProviderIsolation({ execution, workspace, metadata, staticRuntime, staticRuntimeEvidence, runtimeHome, env = process.env, promptInputProbe }) {
  const sourceHome = validateProviderRuntimeSource(runtimeHome, staticRuntime, staticRuntimeEvidence); const sourceAuth = join(sourceHome, "auth.json"); const sourceCatalog = join(sourceHome, "models_cache.json");
  const authBytes = readFileSync(sourceAuth); const catalogBytes = readFileSync(sourceCatalog); const admittedCatalog = modelCacheIdentity(catalogBytes);
  invariant(sha256(catalogBytes) === staticRuntime.catalog_sha256, "provider model catalog differs from admitted static authority");
  invariant(admittedCatalog.model_profile_sha256 === staticRuntime.model_profile_sha256 && admittedCatalog.client_version === staticRuntime.codex_cli.version,
    "admitted provider model profile/client version differs from static authority");
  const normalization = providerZeroNormalizedCacheCandidate(catalogBytes);
  const normalizationAuditPath = join(execution, "PROVIDER-ZERO-CACHE-NORMALIZATION.json");
  let normalizationCandidate = null;
  if (normalization.candidate_bytes) {
    normalizationCandidate = join(execution, "PROVIDER-ZERO-NORMALIZED-MODEL-CACHE.bin");
    writeFileSync(normalizationCandidate, normalization.candidate_bytes, { flag: "wx", mode: 0o600 });
    invariant(sha256(readFileSync(normalizationCandidate)) === normalization.candidate_sha256, "provider-zero normalized cache artifact readback drift");
  }
  const { candidate_bytes: _candidateBytes, ...normalizationRecord } = normalization;
  writeJsonExclusive(normalizationAuditPath, { schema_version: "0.1", kind: "omd-luna-max-provider-zero-cache-normalization", ...normalizationRecord, candidate_artifact: normalizationCandidate ? { ...fileBinding(normalizationCandidate), bytes: statSync(normalizationCandidate).size } : null, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  if (!normalization.pass) {
    const error = new Error("admitted-cache-apps-usage-default-contract-invalid"); error.terminalReason = "admitted-cache-apps-usage-default-contract-invalid"; throw error;
  }
  if (normalization.required) {
    const error = new Error("admitted-cache-requires-provider-zero-normalization"); error.terminalReason = "admitted-cache-requires-provider-zero-normalization"; throw error;
  }
  const providerHome = join(execution, "provider-home");
  const promptAuditHome = join(execution, "prompt-audit-home"); mkdirSync(promptAuditHome, { recursive: false, mode: 0o700 });
  writeFileSync(join(promptAuditHome, "models_cache.json"), catalogBytes, { flag: "wx", mode: 0o600 });
  writeFileSync(join(promptAuditHome, "model_catalog.json"), catalogBytes, { flag: "wx", mode: 0o600 });
  invariant(!existsSync(join(promptAuditHome, "auth.json")), "prompt-audit home must be unauthenticated");
  const promptCacheBeforePath = join(execution, "PROMPT-INPUT-MODEL-CACHE.before.bin");
  writeFileSync(promptCacheBeforePath, catalogBytes, { flag: "wx", mode: 0o600 });
  invariant(readFileSync(sourceAuth).equals(authBytes) && readFileSync(sourceCatalog).equals(catalogBytes), "immutable provider runtime source changed during prompt-audit copy");
  const admittedWrapperClaim = resolve(staticRuntime.codex_cli.wrapper.path);
  regular(admittedWrapperClaim, "admitted provider Codex wrapper"); accessSync(admittedWrapperClaim, fsConstants.X_OK);
  const admittedWrapper = realpathSync(admittedWrapperClaim);
  invariant(admittedWrapper === admittedWrapperClaim, "admitted provider Codex wrapper path must be canonical");
  invariant(sha256(readFileSync(admittedWrapper)) === staticRuntime.codex_cli.wrapper.sha256,
    "admitted provider Codex wrapper bytes differ from static CLI binding");
  const ambientWrapperClaim = env.OMD_BENCH_CODEX_BIN ? resolve(env.OMD_BENCH_CODEX_BIN) : null;
  if (ambientWrapperClaim) {
    regular(ambientWrapperClaim, "ambient provider Codex wrapper"); accessSync(ambientWrapperClaim, fsConstants.X_OK);
    invariant(ambientWrapperClaim === admittedWrapper && realpathSync(ambientWrapperClaim) === admittedWrapper
      && sha256(readFileSync(ambientWrapperClaim)) === staticRuntime.codex_cli.wrapper.sha256,
    "ambient provider Codex wrapper must exact-equal the admitted canonical CLI binding");
  }
  const providerBin = join(execution, "provider-bin"); mkdirSync(providerBin, { recursive: false });
  const allowedCommands = ["codex", "node", "npm", "npx", "python3", "rg", "git", "zsh", "sh", "sed", "awk", "cat", "head", "tail", "sort", "wc", "cut", "printf", "touch", "ln", "basename", "dirname", "xargs", "mkdir", "cp", "mv", "chmod", "find"];
  const forbiddenCommands = ["browser-harness", "curl", "wget", "open"];
  const executables = [];
  for (const command of allowedCommands) {
    const source = command === "codex" ? admittedWrapper : which(command, env); if (!source || /browser-harness/i.test(source)) continue;
    regular(source, `provider tool ${command}`); accessSync(source, fsConstants.X_OK);
    const target = join(providerBin, command); symlinkSync(source, target); executables.push({ command, source, sha256: sha256(readFileSync(source)) });
  }
  invariant(executables.some((item) => item.command === "codex"), "isolated provider PATH requires exact Codex executable");
  const chosenCodex = executables.find((item) => item.command === "codex");
  invariant(chosenCodex?.source === staticRuntime.codex_cli.wrapper.path && chosenCodex?.sha256 === staticRuntime.codex_cli.wrapper.sha256,
    "isolated provider Codex executable differs from admitted static CLI binding");
  invariant(forbiddenCommands.every((command) => !existsSync(join(providerBin, command))), "provider PATH contains a browser/network command");
  const zprofileBytes = Buffer.from(`export PATH=${JSON.stringify(providerBin)}\n`);
  writeFileSync(join(promptAuditHome, ".zprofile"), zprofileBytes, { flag: "wx", mode: 0o600 });
  const zsh = executables.find((item) => item.command === "zsh")?.source;
  invariant(zsh, "isolated provider PATH requires zsh for login-shell confinement preflight");
  const shellEnv = { HOME: promptAuditHome, CODEX_HOME: promptAuditHome, ZDOTDIR: promptAuditHome, PATH: providerBin };
  const shellPath = execFileSync(zsh, ["-lc", "printf %s \"$PATH\"; command -v curl >/dev/null && exit 41; command -v browser-harness >/dev/null && exit 42; exit 0"], { encoding: "utf8", env: shellEnv });
  invariant(shellPath === providerBin, "login shell escaped the exact isolated provider PATH");
  const skills = skillIsolation(workspace, metadata.arm.variant_id);
  invariant(!existsSync(join(promptAuditHome, "skills")) && !existsSync(join(promptAuditHome, ".agents")), "prompt-audit home must begin with no global skills");
  const promptInputAuditPath = join(execution, "PROMPT-INPUT-SKILL-AUDIT.json");
  try {
    writeJsonExclusive(promptInputAuditPath, auditPromptInputSkills({ codexBin: chosenCodex.source, workspace, providerEnv: shellEnv, skills, cliBinding: staticRuntime.codex_cli, probe: promptInputProbe }));
  } catch (error) {
    const observed = error.promptInputObservation ?? { args: [], timeout_ms: PROMPT_INPUT_AUDIT_TIMEOUT_MS, status: null, signal: null, error: null, stdout: "", stderr: "" };
    const stdoutPath = join(execution, "PROMPT-INPUT-SKILL-AUDIT.stdout"); const stderrPath = join(execution, "PROMPT-INPUT-SKILL-AUDIT.stderr");
    writeFileSync(stdoutPath, observed.stdout ?? "", { flag: "wx" }); writeFileSync(stderrPath, observed.stderr ?? "", { flag: "wx" });
    const failurePath = join(execution, "PROMPT-INPUT-SKILL-AUDIT-FAILURE.json");
    writeJsonExclusive(failurePath, {
      schema_version: "0.1", kind: "omd-luna-max-provider-zero-prompt-input-skill-audit-failure", pass: false,
      args: observed.args, timeout_ms: observed.timeout_ms, process: { status: observed.status, signal: observed.signal, error: observed.error },
      stdout: { ...fileBinding(stdoutPath), bytes: statSync(stdoutPath).size }, stderr: { ...fileBinding(stderrPath), bytes: statSync(stderrPath).size },
      prompt_audit_auth: promptAuditAuthObservation(promptAuditHome), failure: { name: error.name, message: error.message }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0,
    });
    error.promptInputFailurePath = failurePath;
    throw error;
  }
  const promptCacheAfterBytes = readFileSync(join(promptAuditHome, "models_cache.json"));
  const promptAuditAuth = promptAuditAuthObservation(promptAuditHome);
  const promptCacheAfterPath = join(execution, "PROMPT-INPUT-MODEL-CACHE.after.bin");
  writeFileSync(promptCacheAfterPath, promptCacheAfterBytes, { flag: "wx", mode: 0o600 });
  const promptCacheMutation = promptAuditCacheMutation(catalogBytes, promptCacheAfterBytes);
  const promptSkillSnapshotRoot = join(execution, "PROMPT-INPUT-BUILTIN-SKILLS"); mkdirSync(promptSkillSnapshotRoot, { recursive: false, mode: 0o700 });
  const promptSkillSnapshots = CODEX_BUILTIN_SKILLS.map((id) => {
    const source = join(promptAuditHome, "skills/.system", id, "SKILL.md"); regular(source, `prompt-input built-in skill snapshot ${id}`);
    const target = join(promptSkillSnapshotRoot, id, "SKILL.md"); mkdirSync(dirname(target), { recursive: true }); copyFileSync(source, target);
    return { id, original_locator: source, preserved: { ...fileBinding(target), bytes: statSync(target).size } };
  });
  const sanitizedAuditTree = tree(promptAuditHome, ["auth.json", "models_cache.json", "model_catalog.json"]);
  const promptCacheMutationPath = join(execution, "PROMPT-INPUT-MODEL-CACHE-AUDIT.json");
  writeJsonExclusive(promptCacheMutationPath, { schema_version: "0.1", kind: "omd-luna-max-prompt-input-cache-normalization-audit", ...promptCacheMutation, execution_policy: { authenticated: false, allowed_changes: ["fetched_at"], semantic_normalization_allowed: false }, prompt_audit_auth: promptAuditAuth, artifacts: { before: { ...fileBinding(promptCacheBeforePath), bytes: catalogBytes.length }, after: { ...fileBinding(promptCacheAfterPath), bytes: promptCacheAfterBytes.length }, builtin_skill_snapshots: promptSkillSnapshots, sanitized_audit_home_tree: sanitizedAuditTree }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  rmSync(promptAuditHome, { recursive: true });
  invariant(!existsSync(promptAuditHome), "sacrificial prompt-audit home cleanup failed");
  invariant(!promptAuditAuth.present, "unauthenticated prompt-input audit created auth material");
  invariant(promptCacheMutation.pass, "prompt-input audit cache changed outside known discarded CLI normalization");
  invariant(promptCacheMutation.normalized_defaults.length === 0, "unauthenticated prompt-input audit attempted semantic cache normalization");
  invariant(promptCacheMutation.raw_bytes.pass, "unauthenticated prompt-input audit changed raw cache bytes outside fetched_at");
  mkdirSync(providerHome, { recursive: false, mode: 0o700 });
  writeFileSync(join(providerHome, "auth.json"), authBytes, { flag: "wx", mode: 0o600 });
  writeFileSync(join(providerHome, "models_cache.json"), catalogBytes, { flag: "wx", mode: 0o600 });
  writeFileSync(join(providerHome, "model_catalog.json"), catalogBytes, { flag: "wx", mode: 0o600 });
  writeFileSync(join(providerHome, ".zprofile"), zprofileBytes, { flag: "wx", mode: 0o600 });
  invariant(readFileSync(sourceAuth).equals(authBytes) && readFileSync(sourceCatalog).equals(catalogBytes), "immutable provider runtime source changed during pristine provider copy");
  const initialCopyCatalog = modelCacheIdentity(readFileSync(join(providerHome, "models_cache.json")));
  invariant(initialCopyCatalog.full_sha256 === admittedCatalog.full_sha256
    && initialCopyCatalog.semantic_sha256 === admittedCatalog.semantic_sha256
    && initialCopyCatalog.model_profile_sha256 === admittedCatalog.model_profile_sha256
    && initialCopyCatalog.client_version === admittedCatalog.client_version,
  "pristine provider model catalog copy differs from admitted authority");
  const observedCatalog = initialCopyCatalog;
  invariant(!existsSync(join(providerHome, "skills")) && !existsSync(join(providerHome, ".agents")) && !existsSync(join(providerHome, "generated_images")), "sacrificial prompt-audit side effects crossed into provider home");
  const receipt = { schema_version: "0.1", kind: "omd-luna-max-provider-runtime-isolation", provider_home: providerHome, prompt_audit_home: { path_sha256: sha256(promptAuditHome), removed: true, admitted_cache_reused: false, cache_audit: fileBinding(promptCacheMutationPath) }, auth: { source_path: sourceAuth, bytes: authBytes.length, sha256: sha256(authBytes), copy_sha256: sha256(readFileSync(join(providerHome, "auth.json"))) }, model_catalog: { source_path: sourceCatalog, bytes: catalogBytes.length, sha256: admittedCatalog.full_sha256, initial_copy_sha256: initialCopyCatalog.full_sha256, copy_sha256: observedCatalog.full_sha256, observed_post_prompt_input_sha256: promptCacheMutation.after.full_sha256, admitted_sha256: staticRuntime.catalog_sha256, admitted_semantic_sha256: admittedCatalog.semantic_sha256, observed_semantic_sha256: promptCacheMutation.after.semantic_sha256, model_profile_sha256: observedCatalog.model_profile_sha256, client_version: observedCatalog.client_version, provider_copy_pristine: true }, codex_cli: { source: admittedWrapper, sha256: chosenCodex.sha256, version: staticRuntime.codex_cli.version, native: staticRuntime.codex_cli.native, authority: "admitted-static-runtime-receipt", ambient_override: ambientWrapperClaim ? { provided: true, exact_equal: true, claimed_path: ambientWrapperClaim } : { provided: false, exact_equal: null, claimed_path: null } }, path: { value: providerBin, allowlist: allowedCommands, forbidden: forbiddenCommands, executables, browser_harness_advertised_or_available: false, login_shell_preflight: { exact_path: shellPath, curl_available: false, browser_harness_available: false, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 } }, zprofile: { path: join(providerHome, ".zprofile"), sha256: sha256(zprofileBytes), bytes: zprofileBytes.length }, skills, prompt_input_skill_audit: fileBinding(promptInputAuditPath), provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 };
  writeJsonExclusive(join(execution, "PROVIDER-RUNTIME-ISOLATION.json"), receipt);
  const executionEnv = {};
  for (const key of ["TMPDIR", "LANG", "LC_ALL", "TERM", "USER", "SHELL"]) if (env[key]) executionEnv[key] = env[key];
  return { receipt, env: { ...executionEnv, HOME: providerHome, CODEX_HOME: providerHome, ZDOTDIR: providerHome, PATH: providerBin, BH_DOMAIN_SKILLS: "0", OMD_BENCH_AUTH_CODEX_HOME: providerHome, OMD_BENCH_CODEX_BIN: chosenCodex.source } };
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
  const sourceRuntimeHome = validateProviderRuntimeSource(options.runtimeHome, staticRuntime, admission.evidence.static_runtime);
  const inspectRuntime = options.runtimeInspector ?? inspectCodexModelToolMode;
  const liveRuntime = options.runtimeObservation ?? inspectRuntime(MODEL, { OMD_BENCH_AUTH_CODEX_HOME: sourceRuntimeHome });
  invariant(liveRuntime.model_id === MODEL && liveRuntime.cache_sha256 === staticRuntime.catalog_sha256
    && liveRuntime.model_profile_sha256 === staticRuntime.model_profile_sha256,
  "live Luna/max model catalog/profile differs from admitted static authority");
  verifyPreparedReadback(root, admission.manifest);
  const reconciled = reconcileCrashes(root, admission.manifest); invariant(reconciled.length === 0, `crash reconciled; invoke again for next cell: ${reconciled.join(",")}`);
  const pending = admission.manifest.cells.filter((entry) => !terminalPath(join(root, "prepared-cells", entry.id)));
  invariant(pending.length > 0, "all scheduled cells are terminal"); const next = pending[0];
  invariant(options.cellId === next.id, `cell must be exact next locked cell: ${next.id}`);
  const cell = join(root, "prepared-cells", next.id); const execution = join(cell, ".benchmark/execution");
  const sourceMetadata = readJson(join(cell, ".benchmark/cell.json")); skillIsolation(cell, sourceMetadata.arm.variant_id);
  invariant(!existsSync(execution), "cell execution already started"); mkdirSync(execution, { recursive: false });
  const startedAt = new Date().toISOString(); const started = { schema_version: "0.1", kind: "omd-luna-max-cell-start", cell_id: next.id, source_commit: sourceCommit, order: admission.manifest.cells.findIndex((entry) => entry.id === next.id) + 1, model: MODEL, effort: EFFORT, timeout_ms: TIMEOUT_MS, admission_sha256: admission.admissionEvidence.sha256, started_at: startedAt };
  writeJsonExclusive(join(execution, "STARTED.json"), started); stateLine(root, started);
  let isolated; let prepared; let externalStaging; let providerIsolation; let generatedImagesBefore; let call;
  try {
    isolated = join(execution, "workspace"); prepared = copyExecutionWorkspace(cell, isolated);
    const authorityRuntime = prepared.metadata.arm.variant_id === OMD_VARIANT ? materializeAuthorityRuntime(isolated, execution) : authorityRuntimeClosure(isolated);
    externalStaging = prepareOmdExternalStaging({ execution, workspace: isolated, metadata: prepared.metadata, authorityRuntime });
    providerIsolation = prepareProviderIsolation({ execution, workspace: isolated, metadata: prepared.metadata, staticRuntime, staticRuntimeEvidence: admission.evidence.static_runtime, runtimeHome: sourceRuntimeHome, env: options.runtimeEnv ?? process.env, promptInputProbe: options.promptInputProbe });
    generatedImagesBefore = captureGeneratedImagesBoundary(providerIsolation.receipt.provider_home);
    invariant(generatedImagesBefore.state === "absent", "provider generated_images boundary must be absent before provider spawn");
    const cliBinding = staticRuntime.codex_cli;
    const runner = resolve(options.runnerBin ?? join(repoRoot, DEFAULT_RUNNER_PATH)); const runnerArgs = ["--workspace", isolated, "--model", MODEL, "--reasoning", EFFORT, "--timeout-ms", String(TIMEOUT_MS), "--disable-plugin-skill-search", "--expected-codex-version", cliBinding.version, "--expected-wrapper-sha", cliBinding.wrapper.sha256, "--expected-native-path", cliBinding.native.path, "--expected-native-sha", cliBinding.native.sha256, ...(externalStaging ? ["--additional-writable-root", externalStaging.root] : [])];
    call = invocation(runner, runnerArgs);
    writeJsonExclusive(join(execution, "PROVIDER-SPAWN-STARTED.json"), { schema_version: "0.1", kind: "omd-luna-max-provider-spawn-boundary", cell_id: next.id, started_at: new Date().toISOString(), executable_sha256: sha256(call.executable), args_sha256: sha256(canonical(call.args)), provider_calls: "unknown", model_calls: "unknown", browser_calls: 0, network_calls: 0 });
  } catch (error) {
    const providerHome = join(execution, "provider-home");
    const promptAuditHome = join(execution, "prompt-audit-home");
    if (existsSync(providerHome)) rmSync(providerHome, { recursive: true, force: true });
    if (existsSync(promptAuditHome)) rmSync(promptAuditHome, { recursive: true, force: true });
    return writeProviderBoundaryFailure({ root, cell, execution, started, manifestCell: next, reason: error.terminalReason ?? "pre-provider-setup-failed", error, providerSpawnStarted: false });
  }
  const startNs = process.hrtime.bigint();
  const result = spawnSync(call.executable, call.args, { cwd: repoRoot, encoding: "utf8", timeout: TIMEOUT_MS + 30_000, maxBuffer: 64 * 1024 * 1024, env: { ...providerIsolation.env, ...(externalStaging ? { [OMD_STAGING_ENV]: externalStaging.root, [OMD_PACKAGE_ENV]: externalStaging.packageRoot, [OMD_CHECKPOINT_ENV]: externalStaging.checkpointPath, [OMD_AUTHORITY_RECEIPT_ENV]: externalStaging.authorityReceiptPath, [OMD_AUTHORITY_RECEIPT_SHA_ENV]: externalStaging.authorityReceiptSha256, [OMD_AUTHORITY_ACTIVATION_SHA_ENV]: sha256(externalStaging.disclosure), [OMD_AUTHORITY_RUN_DIR_ENV]: externalStaging.controllerRunDir, [OMD_AUTHORITY_EXECUTABLE_ENV]: externalStaging.authorityExecutable } : {}), OMD_LUNA_MAX_NETWORK_POLICY: "provider-only-no-self-network", OMD_LUNA_MAX_BROWSER_POLICY: "no-provider-browser-launch" } });
  const runResultPath = join(isolated, ".benchmark/run-result.json"); const eventsPath = join(isolated, ".benchmark/events.jsonl"); const events = parseEvents(eventsPath); const runResult = existsSync(runResultPath) ? readJson(runResultPath) : null;
  const postProviderCacheReadback = auditPostProviderCacheArtifact(isolated, runResult?.runtime?.model_tool_mode_evidence?.integrity);
  const hiddenImageAudit = auditHiddenImageGeneration({ providerHome: providerIsolation.receipt.provider_home, before: generatedImagesBefore, workspaceBefore: prepared.initial, workspace: isolated, events });
  const hiddenImageAuditPath = join(execution, "HIDDEN-IMAGE-GENERATION-AUDIT.json"); writeJsonExclusive(hiddenImageAuditPath, hiddenImageAudit);
  rmSync(providerIsolation.receipt.provider_home, { recursive: true });
  invariant(!existsSync(providerIsolation.receipt.provider_home), "provider auth home cleanup failed");
  writeJsonExclusive(join(execution, "PROVIDER-RUNTIME-CLEANUP.json"), { schema_version: "0.1", kind: "omd-luna-max-provider-runtime-cleanup", provider_home_sha256: sha256(providerIsolation.receipt.provider_home), auth_and_catalog_copies_removed: true, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  const wallMs = Number(process.hrtime.bigint() - startNs) / 1e6;
  writeFileSync(join(execution, "runner.stdout"), result.stdout ?? "", { flag: "wx" }); writeFileSync(join(execution, "runner.stderr"), result.stderr ?? "", { flag: "wx" });
  const rollout = rolloutEvidence(events, runResult, admission.evidence.static_runtime.value.runtime, { semantic_sha256: providerIsolation.receipt.model_catalog.admitted_semantic_sha256, client_version: providerIsolation.receipt.model_catalog.client_version });
  const tools = toolTelemetry(events, runResult, { workspace: isolated, providerHome: providerIsolation.receipt.provider_home, externalStagingRoot: externalStaging?.root ?? null });
  const authorityRuntimePost = externalStaging ? authorityRuntimeClosure(externalStaging.authorityRuntimeRoot) : { pass: true, files: [], sha256: null, reason: null };
  const authorityRuntimeIntact = !externalStaging || (authorityRuntimePost.pass && authorityRuntimePost.sha256 === externalStaging.authorityRuntimeSha256);
  const omdControllerCommands = externalStaging ? auditOmdControllerCommands(events, externalStaging.controllerRunDir, externalStaging.authorityExecutable) : { pass: true, exact_activation_count: 0, activation_item_ids: [], forbidden: [] };
  const omdControllerOutcome = externalStaging ? auditOmdControllerOutcome({ workspace: isolated, staging: externalStaging, authorityReceiptSha256: externalStaging.authorityReceiptSha256, runDir: externalStaging.controllerRunDir }) : { applicable: false, pass: true, violations: [] };
  const stagingAudit = externalStaging ? omdControllerOutcome.staging : auditOmdExternalStaging(externalStaging);
  const stagingReceiptAudit = externalStaging ? auditImmutableFile(externalStaging.receiptPath, externalStaging.receiptSha256) : { pass: true, binding: null, reason: null };
  const authorityReceiptAudit = externalStaging ? auditImmutableFile(externalStaging.authorityReceiptPath, externalStaging.authorityReceiptSha256) : { pass: true, binding: null, reason: null };
  const stagingReceiptIntact = stagingReceiptAudit.pass;
  const authorityReceiptIntact = authorityReceiptAudit.pass;
  const finalMessage = existsSync(join(isolated, ".benchmark/final-message.txt")) ? readFileSync(join(isolated, ".benchmark/final-message.txt"), "utf8") : "";
  const blankShell = readFileSync(join(isolated, "index.html")).equals(readFileSync(join(cell, "index.html")));
  const nativeInfrastructureBlock = detectNativeInfrastructureBlock({ variantId: prepared.metadata.arm.variant_id, blankShell, finalMessage });
  const timedOut = result.error?.code === "ETIMEDOUT" || runResult?.process?.timed_out === true;
  const providerRuntimeIntegrityValue = runResult?.runtime?.model_tool_mode_evidence?.integrity ?? null;
  const providerRuntimeIntegrity = providerRuntimeIntegrityValue
    ? { ...providerRuntimeIntegrityValue, post_provider_cache_artifact_readback: postProviderCacheReadback }
    : null;
  const providerRuntimeIntegrityInvalid = providerRuntimeIntegrity?.applicable === true
    && (providerRuntimeIntegrity.pass !== true || postProviderCacheReadback.pass !== true);
  const providerInvocationObserved = rollout.completions.length === 1 && rollout.provider_usage.available;
  const providerSucceeded = result.status === 0 && !result.error && existsSync(runResultPath) && runResult?.process?.exit_code === 0 && !timedOut && rollout.exact && rollout.provider_usage.available && !providerRuntimeIntegrityInvalid && hiddenImageAudit.pass && tools.agent_browser_calls === 0 && tools.agent_network_attempts === 0 && tools.external_context_interventions === 0 && stagingAudit.pass && stagingReceiptIntact && authorityReceiptIntact && omdControllerCommands.pass && omdControllerOutcome.pass && !nativeInfrastructureBlock;
  let evaluation = null;
  if (providerSucceeded) {
    const evaluatorDir = join(execution, "evaluator"); mkdirSync(evaluatorDir, { recursive: false });
    const evaluator = resolve(options.evaluatorBin ?? join(repoRoot, DEFAULT_EVALUATOR_PATH)); const scorePath = join(evaluatorDir, "score.json");
    const evalCall = invocation(evaluator, ["--task-id", prepared.metadata.task.id, "--workspace", isolated, "--out", scorePath]);
    const dependencyBundle = admission.evidence.evaluation_runtime.value.dependencies.bundle.path;
    const readyMarker = join(evaluatorDir, "RUNTIME-READY.json"); const preBundle = evaluatorBundleReadback(admission.evidence.evaluation_runtime.value);
    if (!preBundle.pass) {
      writeFileSync(join(evaluatorDir, "stdout"), "", { flag: "wx" }); writeFileSync(join(evaluatorDir, "stderr"), `${preBundle.reason}\n`, { flag: "wx" });
      evaluation = { exit_code: null, error: preBundle.reason, score: null, artifacts_tree: tree(evaluatorDir), browser_calls: 0, dependency_bundle: { path: dependencyBundle, sha256: admission.evidence.evaluation_runtime.value.dependencies.bundle.sha256, pre: preBundle, post: null }, startup_failure: true };
    } else {
      const evalResult = spawnSync(evalCall.executable, evalCall.args, { cwd: repoRoot, encoding: "utf8", timeout: TIMEOUT_MS, maxBuffer: 64 * 1024 * 1024, env: { ...process.env, NODE_PATH: join(dependencyBundle, "node_modules"), CHROME_PATH: admission.evidence.evaluation_runtime.value.browser.executable_path, OMD_EVALUATOR_EXTERNAL_NETWORK: "forbidden", OMD_EVALUATOR_READY_MARKER: readyMarker } });
      writeFileSync(join(evaluatorDir, "stdout"), evalResult.stdout ?? "", { flag: "wx" }); writeFileSync(join(evaluatorDir, "stderr"), evalResult.stderr ?? "", { flag: "wx" });
      const postBundle = evaluatorBundleReadback(admission.evidence.evaluation_runtime.value);
      const runtimeReady = existsSync(readyMarker);
      const startupFailure = !runtimeReady || !postBundle.pass;
      evaluation = { exit_code: evalResult.status, error: evalResult.error?.message ?? null, score: existsSync(scorePath) ? { path: relative(execution, scorePath), sha256: sha256(readFileSync(scorePath)), bytes: statSync(scorePath).size } : null, artifacts_tree: tree(evaluatorDir), browser_calls: 1, dependency_bundle: { path: dependencyBundle, sha256: admission.evidence.evaluation_runtime.value.dependencies.bundle.sha256, pre: preBundle, post: postBundle }, runtime_ready: runtimeReady, startup_failure: startupFailure };
    }
  }
  const finalTree = tree(isolated); const raw = {
    run_result: existsSync(runResultPath) ? { sha256: sha256(readFileSync(runResultPath)), bytes: statSync(runResultPath).size } : null,
    events: existsSync(eventsPath) ? { sha256: sha256(readFileSync(eventsPath)), bytes: statSync(eventsPath).size } : null,
    stderr: { sha256: sha256(result.stderr ?? ""), bytes: Buffer.byteLength(result.stderr ?? "") }, stdout: { sha256: sha256(result.stdout ?? ""), bytes: Buffer.byteLength(result.stdout ?? "") },
  };
  const evaluatorInfrastructureFailure = providerSucceeded && evaluation?.startup_failure === true;
  const authorityIntegrityInvalid = !authorityRuntimeIntact || !stagingAudit.pass || !stagingReceiptIntact || !authorityReceiptIntact || !omdControllerCommands.pass || !omdControllerOutcome.pass;
  const hiddenImageIntegrityInvalid = !hiddenImageAudit.pass;
  const infrastructureInvalid = !runResult || !rollout.exact || !rollout.provider_usage.available || providerRuntimeIntegrityInvalid || !hiddenImageAudit.pass || tools.agent_browser_calls > 0 || tools.agent_network_attempts > 0 || tools.external_context_interventions > 0 || authorityIntegrityInvalid || nativeInfrastructureBlock || evaluatorInfrastructureFailure;
  const status = authorityIntegrityInvalid || hiddenImageIntegrityInvalid ? "infrastructure-invalid" : timedOut ? "timeout" : infrastructureInvalid ? "infrastructure-invalid" : providerSucceeded && evaluation?.score && evaluation.exit_code === 0 ? "completed" : "failed";
  const failurePath = join(execution, "FAILURE-ARTIFACT.json");
  writeJsonExclusive(failurePath, { schema_version: "0.1", cell_id: next.id, status, native_infrastructure_block: nativeInfrastructureBlock, evaluator_infrastructure_failure: evaluatorInfrastructureFailure, provider_runtime_integrity_invalid: providerRuntimeIntegrityInvalid, provider_runtime_integrity: providerRuntimeIntegrity, raw_successful_completion_preserved: providerInvocationObserved, hidden_image_generation_audit: fileBinding(hiddenImageAuditPath), hidden_image_generation_pass: hiddenImageAudit.pass, hidden_image_generation_reason: hiddenImageAudit.reason, blank_shell: blankShell, staging_receipt_intact: stagingReceiptIntact, authority_controller_receipt_intact: authorityReceiptIntact, authority_controller_commands: omdControllerCommands, authority_controller_outcome: omdControllerOutcome, staging_audit: stagingAudit, process: { exit_code: result.status, signal: result.signal, timed_out: timedOut, error: result.error?.message ?? null }, rollout_exact: rollout.exact, evaluator_exit_code: evaluation?.exit_code ?? null });
  const packageResult = proof(isolated, prepared.metadata.arm.variant_id); const packagePath = join(execution, "DESIGN-SYSTEM-PACKAGE.json");
  writeJsonExclusive(packagePath, packageResult);
  const evaluatorValue = evaluation?.score ? readJson(resolve(execution, evaluation.score.path)) : null;
  const requiredStates = admission.manifest.evaluator_authority?.selected_task_evaluation_metadata?.find((item) => item.task_id === prepared.metadata.task.id)?.required_states ?? [];
  const screenshots = evaluation ? screenshotProof(join(execution, "evaluator"), requiredStates) : [];
  const rawResponsePath = existsSync(join(isolated, ".benchmark/final-message.txt")) ? join(isolated, ".benchmark/final-message.txt") : join(execution, "runner.stdout");
  const providerUsage = rollout.provider_usage.available ? { input_tokens: Number(rollout.provider_usage.input_tokens), output_tokens: Number(rollout.provider_usage.output_tokens), total_tokens: Number(rollout.provider_usage.total_tokens), available: true } : { input_tokens: null, output_tokens: null, total_tokens: null, available: false, reason: rollout.provider_usage.reason };
  const interventions = Math.max(rollout.interventions, tools.external_context_interventions, tools.agent_network_attempts);
  const unsupportedFacts = evaluatorValue ? (Array.isArray(evaluatorValue.evidence?.protected_unknown_claims)
    ? evaluatorValue.evidence.protected_unknown_claims.length
    : ["price_claims", "inventory_claims", "social_proof_claims", "partner_logo_claims"].reduce((count, key) => count + (Array.isArray(evaluatorValue.evidence?.[key]) ? evaluatorValue.evidence[key].length : 0), 0)) : 0;
  const evaluatorRecord = evaluatorValue ? { deterministic: true, ui_resolved: evaluatorValue.ui_resolved === true, objective_score: Number(evaluatorValue.score), unsupported_facts: unsupportedFacts, result: fileBinding(resolve(execution, evaluation.score.path)), process: evaluation } : { deterministic: true, ui_resolved: false, objective_score: 0, unsupported_facts: 0, result: fileBinding(failurePath), process: null, terminal_failure_projection: true };
  const terminal = {
    schema_version: "0.1", kind: "omd-luna-max-cell-terminal", cell_id: next.id, task_id: prepared.metadata.task.id, variant_id: prepared.metadata.arm.variant_id, trial_index: next.trial_index, status, source_commit: sourceCommit,
    model: MODEL, effort: EFFORT,
    runtime: { provider: "codex", model: MODEL, effort: EFFORT }, controls: { retry_count: 0, replacement_count: 0, fallback_count: 0, model_substitution_count: 0, effort_substitution_count: 0 },
    telemetry: { elapsed_ms: Math.round(wallMs), provider_usage: providerUsage, tool_calls: tools.tool_calls, agent_browser_calls: tools.agent_browser_calls, agent_network_attempts: tools.agent_network_attempts, external_context_interventions: tools.external_context_interventions, checkpoints: 0, telemetry_evidence: { tool_calls: tools.evidence_mode, raw_completed_tool_item_ids: tools.raw_completed_tool_item_ids, agent_browser_calls: "raw-cli-completed-command-and-mcp-items", raw_browser_item_ids: tools.raw_browser_item_ids, agent_network_attempts: "raw-cli-forbidden-command-and-implicit-network-tool-audit", raw_network_item_ids: tools.raw_network_item_ids, external_context: "raw-cli-completed-tool-items-absolute-path-and-known-package-audit", external_context_items: tools.external_context_items, checkpoints: "unavailable-no-product-harness-checkpoint-emitter-default-zero" } },
    raw_response: fileBinding(rawResponsePath), workspace_before: { sha256: prepared.initial.sha256 }, workspace_after: { sha256: finalTree.sha256 }, evaluator: evaluatorRecord,
    manual_product_edits: interventions, follow_up_questions: interventions, unplanned_interventions: interventions, manual_edits: interventions, followups: interventions, required_states: requiredStates,
    proof: { screenshots, design_system_package: { ...fileBinding(packagePath), parsed: packageResult.parsed, pass: packageResult.parsed } }, failure_artifact: fileBinding(failurePath),
    provider_calls: providerInvocationObserved && hiddenImageAudit.pass ? 1 : "unknown", model_calls: providerInvocationObserved && hiddenImageAudit.pass ? 1 : "unknown", browser_calls: tools.agent_browser_calls + (evaluation?.browser_calls ?? 0), browser_call_split: { agent_browser_calls: tools.agent_browser_calls, evaluator_browser_calls: evaluation?.browser_calls ?? 0 }, retry_calls: 0, replacement_calls: 0, fallback_calls: 0, repair_calls: 0,
    started_at: startedAt, finished_at: new Date().toISOString(), process: { exit_code: result.status, signal: result.signal, timed_out: timedOut, error: result.error?.message ?? null }, rollout: { exact_luna_max_one_turn: rollout.exact, raw_turn_context_count: rollout.contexts.length, cli_completion_count: rollout.completions.length, fallback_marker_count: rollout.fallbacks.length, raw_successful_completion_preserved: providerInvocationObserved, evidence_mode: "run-result-plus-raw-cli-stream-plus-admitted-preflight" }, raw, design_system_package: packageResult, native_infrastructure_block: nativeInfrastructureBlock, provider_runtime_integrity: providerRuntimeIntegrity, blank_shell: blankShell, external_staging: externalStaging ? { receipt: stagingReceiptAudit.binding, expected_receipt_sha256: externalStaging.receiptSha256, receipt_intact: stagingReceiptIntact, receipt_readback_error: stagingReceiptAudit.reason, audit: stagingAudit } : { applicable: false }, authority_controller: externalStaging ? { receipt: authorityReceiptAudit.binding, expected_receipt_sha256: externalStaging.authorityReceiptSha256, receipt_intact: authorityReceiptIntact, receipt_readback_error: authorityReceiptAudit.reason, runtime_closure: { expected_sha256: externalStaging.authorityRuntimeSha256, observed_sha256: authorityRuntimePost.sha256, intact: authorityRuntimeIntact, reason: authorityRuntimePost.reason }, commands: omdControllerCommands, outcome: omdControllerOutcome } : { applicable: false }, hidden_image_generation: { audit: fileBinding(hiddenImageAuditPath), pass: hiddenImageAudit.pass, reason: hiddenImageAudit.reason, additional_hidden_model_tool_invocations: hiddenImageAudit.additional_hidden_model_tool_invocations, workspace_asset_lineage: hiddenImageAudit.workspace_asset_lineage }, provider_runtime_isolation: fileBinding(join(execution, "PROVIDER-RUNTIME-ISOLATION.json")), provider_runtime_cleanup: fileBinding(join(execution, "PROVIDER-RUNTIME-CLEANUP.json")), admission_sha256: admission.admissionEvidence.sha256, rerun_allowed: false,
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
  const [command, ...rest] = argv; invariant(["run", "collect", "snapshot-runtime"].includes(command), "usage: run-luna-max-wow-preview-cell.mjs <run|collect|snapshot-runtime> ...");
  if (command === "snapshot-runtime") {
    const args = parseArgs(rest); for (const name of ["source-home", "static-runtime-receipt", "out"]) invariant(args.has(name), `missing --${name}`);
    const receipt = prepareRuntimeSnapshot({ sourceHome: args.get("source-home"), staticRuntimeReceipt: args.get("static-runtime-receipt"), out: args.get("out") });
    process.stdout.write(`${JSON.stringify({ out: resolve(args.get("out")), auth_json_sha256: receipt.auth_json_sha256, models_cache_sha256: receipt.models_cache_sha256, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 })}\n`); return;
  }
  const args = parseArgs(rest); const required = ["materialized-root", "admission", "runtime-attribution-receipt", "browser-receipt", "source-commit", ...(command === "run" ? ["cell-id", "runtime-home"] : ["out"])];
  for (const name of required) invariant(args.has(name), `missing --${name}`);
  if (command === "collect") {
    const bundle = collectRecords({ materializedRoot: args.get("materialized-root"), admission: args.get("admission"), runtimeAttributionReceipt: args.get("runtime-attribution-receipt"), browserReceipt: args.get("browser-receipt"), sourceCommit: args.get("source-commit"), out: args.get("out") });
    process.stdout.write(`${JSON.stringify({ scheduled_terminal_records: bundle.scheduled_terminal_records, scheduled_missing_records: bundle.scheduled_missing_records, retained_ineligible_records: bundle.retained_ineligible_records, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 })}\n`); return;
  }
  const result = runCell({ materializedRoot: args.get("materialized-root"), cellId: args.get("cell-id"), admission: args.get("admission"), runtimeAttributionReceipt: args.get("runtime-attribution-receipt"), browserReceipt: args.get("browser-receipt"), sourceCommit: args.get("source-commit"), runtimeHome: args.get("runtime-home"), runnerBin: args.get("runner-bin"), evaluatorBin: args.get("evaluator-bin") });
  process.stdout.write(`${JSON.stringify({ cell_id: result.cell_id, status: result.status, provider_calls: result.provider_calls, model_calls: result.model_calls, browser_calls: result.browser_calls })}\n`);
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) { try { main(); } catch (error) { process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`); process.exitCode = 1; } }
