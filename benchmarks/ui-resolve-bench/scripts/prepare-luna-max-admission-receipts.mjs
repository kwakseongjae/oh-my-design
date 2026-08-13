#!/usr/bin/env node
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import { dirname, isAbsolute, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { resolveCodexNativeExecutable } from "./codex-browser-sandbox-contract.mjs";

const here = dirname(fileURLToPath(import.meta.url));
export const defaultRepoRoot = resolve(here, "../../..");
export const SCRIPT_PATH = "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-admission-receipts.mjs";
export const CORE_SCHEMA_FILES = Object.freeze([
  "design-md-core-manifest-v2.schema.json",
  "design-system-graph-v2.schema.json",
  "design-system-provenance-v2.schema.json",
  "design-system-coverage-v2.schema.json",
  "design-md-core-adoption-review-v2.schema.json",
  "design-md-core-adoption-receipt-v2.schema.json",
  "design-md-core-project-checkpoint-v2.schema.json",
]);

const COMMIT = /^[a-f0-9]{40}$/;
const SHA = /^[a-f0-9]{64}$/;

export function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

export function canonicalJson(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function parseArgs(argv) {
  const values = new Map();
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (!item.startsWith("--")) throw new Error(`unexpected argument: ${item}`);
    const equals = item.indexOf("=");
    if (equals > 2) {
      values.set(item.slice(2, equals), item.slice(equals + 1));
      continue;
    }
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) throw new Error(`missing value for ${item}`);
    values.set(item.slice(2), next);
    index += 1;
  }
  return values;
}

function git(root, ...args) {
  return execFileSync("git", ["-C", root, ...args], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function gitBytes(root, commit, path) {
  return execFileSync("git", ["-C", root, "show", `${commit}:${path}`], {
    encoding: "buffer",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function assertPlainAbsolutePath(path, label) {
  if (typeof path !== "string" || !isAbsolute(path) || resolve(path) !== path || path.split(sep).includes("..")) {
    throw new Error(`${label} must be a canonical absolute path`);
  }
}

function assertRegular(path, label) {
  assertPlainAbsolutePath(path, label);
  if (!existsSync(path)) throw new Error(`${label} missing: ${path}`);
  const info = lstatSync(path);
  if (!info.isFile() || info.isSymbolicLink()) throw new Error(`${label} must be a regular non-symlink file: ${path}`);
  if (realpathSync(path) !== path) throw new Error(`${label} path aliases are not allowed: ${path}`);
}

function readEvidence(path, label) {
  assertRegular(path, label);
  const bytes = readFileSync(path);
  let value;
  try {
    const text = bytes.toString("utf8").trim();
    if (!text) throw new Error("empty input");
    try {
      value = JSON.parse(text);
    } catch {
      value = text.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
    }
  } catch (error) {
    throw new Error(`${label} is not valid JSON/JSONL: ${error.message}`);
  }
  return { bytes, value, sha256: sha256(bytes) };
}

function assertFreshOutput(path, inputPaths = []) {
  assertPlainAbsolutePath(path, "output");
  if (existsSync(path)) throw new Error(`output must be fresh: ${path}`);
  for (const input of inputPaths) {
    if (resolve(input) === path) throw new Error("output must not alias an input");
  }
  const parent = dirname(path);
  mkdirSync(parent, { recursive: true });
  if (realpathSync(parent) !== parent) throw new Error(`output parent path aliases are not allowed: ${parent}`);
}

function writeReceipt(path, value, inputPaths = []) {
  assertFreshOutput(path, inputPaths);
  writeFileSync(path, `${canonicalJson(value)}\n`, { encoding: "utf8", flag: "wx", mode: 0o600 });
}

export function assertSourceAuthority({ root, sourceCommit, authorityPath = SCRIPT_PATH }) {
  if (!COMMIT.test(sourceCommit ?? "")) throw new Error("source commit must be an exact 40-character lowercase SHA");
  const head = git(root, "rev-parse", "HEAD");
  if (head !== sourceCommit) throw new Error(`source commit drift: HEAD is ${head}`);
  const dirty = git(root, "status", "--porcelain=v1", "--untracked-files=all");
  if (dirty) throw new Error("source worktree must be clean");
  const absolute = resolve(root, authorityPath);
  if (!absolute.startsWith(`${resolve(root)}${sep}`)) throw new Error("source authority escapes repository");
  assertRegular(absolute, "source authority");
  const current = readFileSync(absolute);
  const committed = gitBytes(root, sourceCommit, authorityPath);
  if (!current.equals(committed)) throw new Error("source authority differs from source commit");
  return { path: authorityPath, bytes: current.length, sha256: sha256(current) };
}

function commonReceipt(sourceCommit, sourceAuthority) {
  return {
    schema_version: "0.1",
    source_commit: sourceCommit,
    source_authority: sourceAuthority,
  };
}

function modelsFromCatalog(catalog) {
  if (Array.isArray(catalog)) return catalog;
  if (Array.isArray(catalog?.models)) return catalog.models;
  throw new Error("catalog must contain a models array");
}

function cliVersion(path) {
  assertRegular(path, "Codex CLI executable");
  const canonical = realpathSync(path);
  if (canonical !== resolve(path)) throw new Error("Codex CLI executable path must be canonical");
  const output = execFileSync(canonical, ["--version"], { encoding: "utf8", timeout: 10_000 }).trim();
  const match = output.match(/codex-cli\s+([^\s]+)/i);
  if (!match) throw new Error("Codex CLI version unavailable");
  return { path: canonical, sha256: sha256(readFileSync(canonical)), version: match[1] };
}

export function inspectStaticCodexCliBinding({ codexBin }) {
  const wrapper = cliVersion(codexBin); const native = cliVersion(resolveCodexNativeExecutable(wrapper.path));
  if (wrapper.version !== native.version) throw new Error("Codex CLI wrapper/native version mismatch");
  return { wrapper, native, version: wrapper.version, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 };
}

export function buildStaticCapabilityReceipt({ sourceCommit, sourceAuthority, catalogBytes, codexCli }) {
  if (!codexCli?.wrapper?.path || !SHA.test(codexCli?.wrapper?.sha256 ?? "") || !codexCli?.native?.path || !SHA.test(codexCli?.native?.sha256 ?? "") || !codexCli?.version) throw new Error("exact Codex CLI binding is required");
  let catalog;
  try { catalog = JSON.parse(catalogBytes.toString("utf8")); } catch { throw new Error("catalog is not valid JSON"); }
  if (catalog?.client_version !== codexCli.version) throw new Error("catalog client version differs from exact Codex CLI version");
  const matches = modelsFromCatalog(catalog).filter((model) => model?.slug === "gpt-5.6-luna");
  if (matches.length !== 1) throw new Error("catalog must contain exactly one gpt-5.6-luna model");
  const efforts = matches[0].supported_reasoning_levels;
  if (!Array.isArray(efforts) || !efforts.some((entry) => entry?.effort === "max")) {
    throw new Error("catalog gpt-5.6-luna is missing max effort");
  }
  return {
    ...commonReceipt(sourceCommit, sourceAuthority),
    kind: "codex-luna-max-static-runtime-capability",
    pass: true,
    runtime: {
      provider: "codex",
      model: "gpt-5.6-luna",
      effort: "max",
      catalog_supports_model: true,
      catalog_supports_effort: true,
      catalog_bytes: catalogBytes.length,
      catalog_sha256: sha256(catalogBytes),
      model_profile_sha256: sha256(canonicalJson(matches[0])),
      codex_cli: codexCli,
    },
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
    network_calls: 0,
  };
}

function committedFile(root, commit, repoPath) {
  const absolute = resolve(root, repoPath);
  assertRegular(absolute, repoPath);
  const bytes = readFileSync(absolute);
  const committed = gitBytes(root, commit, repoPath);
  if (!bytes.equals(committed)) throw new Error(`committed schema drift: ${repoPath}`);
  return bytes;
}

export async function buildSchemaLivenessReceipt({
  root,
  sourceCommit,
  sourceAuthority,
  baseUrl,
  fetchImpl = globalThis.fetch,
  timeoutMs = 10_000,
}) {
  const base = new URL(baseUrl);
  if (!/^https?:$/.test(base.protocol) || base.username || base.password || base.search || base.hash || base.pathname !== "/") {
    throw new Error("base URL must be an origin with a trailing slash");
  }
  const seen = new Set();
  const schemas = [];
  for (const name of CORE_SCHEMA_FILES) {
    if (seen.has(name)) throw new Error(`duplicate schema: ${name}`);
    seen.add(name);
    const local = committedFile(root, sourceCommit, `web/public/schema/${name}`);
    const expectedUrl = new URL(`schema/${name}`, base);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let response;
    try {
      response = await fetchImpl(expectedUrl, { redirect: "manual", signal: controller.signal });
    } finally {
      clearTimeout(timer);
    }
    if (response.url && new URL(response.url).origin !== base.origin) throw new Error(`cross-origin schema response: ${name}`);
    if (response.url && new URL(response.url).href !== expectedUrl.href) throw new Error(`schema URL drift or redirect: ${name}`);
    if (response.status >= 300 && response.status < 400) throw new Error(`schema redirects are forbidden: ${name}`);
    const contentType = response.headers.get("content-type") ?? "";
    const remote = Buffer.from(await response.arrayBuffer());
    if (response.status !== 200) throw new Error(`schema HTTP status mismatch: ${name}`);
    if (!/^application\/(?:schema\+)?json(?:\s*;|$)/i.test(contentType)) throw new Error(`schema content-type mismatch: ${name}`);
    if (!remote.equals(local)) throw new Error(`schema byte/hash mismatch: ${name}`);
    const digest = sha256(local);
    schemas.push({
      name,
      url: expectedUrl.href,
      http_status: response.status,
      content_type: contentType,
      bytes: local.length,
      local_sha256: digest,
      remote_sha256: sha256(remote),
    });
  }
  if (schemas.length !== 7 || seen.size !== 7) throw new Error("schema inventory must contain exactly seven unique files");
  return {
    ...commonReceipt(sourceCommit, sourceAuthority),
    kind: "public-core-schema-liveness-receipt",
    pass: true,
    base_url: baseUrl.replace(/\/$/, ""),
    schemas,
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
    network_calls: 7,
  };
}

function rolloutEvents(telemetry) {
  const events = Array.isArray(telemetry) ? telemetry : telemetry?.events;
  if (!Array.isArray(events) || events.length === 0) throw new Error("runtime telemetry must be raw Codex rollout JSONL");
  for (const event of events) {
    if (!event || typeof event !== "object" || typeof event.timestamp !== "string"
      || typeof event.type !== "string" || !event.payload || typeof event.payload !== "object") {
      throw new Error("runtime telemetry contains a non-rollout event");
    }
  }
  return events;
}

export function buildRuntimeAttributionReceipt({ sourceCommit, sourceAuthority, telemetryBytes, telemetry }) {
  const events = rolloutEvents(telemetry);
  const contexts = events.filter((event) => event.type === "turn_context");
  if (contexts.length !== 1) throw new Error("runtime rollout must contain exactly one turn_context");
  const context = contexts[0].payload;
  if (!context.turn_id || context.model !== "gpt-5.6-luna" || context.effort !== "max") {
    throw new Error("runtime rollout turn_context selector drift");
  }
  const lifecycle = events.filter((event) => event.type === "event_msg"
    && ["task_started", "task_complete"].includes(event.payload?.type));
  const started = lifecycle.filter((event) => event.payload.type === "task_started");
  const completed = lifecycle.filter((event) => event.payload.type === "task_complete");
  if (started.length !== 1 || completed.length !== 1
    || started[0].payload.turn_id !== context.turn_id || completed[0].payload.turn_id !== context.turn_id) {
    throw new Error("runtime rollout must contain one matching task_started/task_complete lifecycle");
  }
  const semanticTypes = events.flatMap((event) => [event.type, event.payload?.type, event.payload?.reason_type])
    .filter((value) => typeof value === "string");
  const retries = semanticTypes.filter((value) => /retry/i.test(value)).length;
  const replacements = semanticTypes.filter((value) => /replacement|substitution/i.test(value)).length;
  const fallbacks = semanticTypes.filter((value) => /fallback/i.test(value)).length;
  if (retries || replacements || fallbacks) throw new Error("runtime telemetry contains retry, replacement, or fallback");
  return {
    ...commonReceipt(sourceCommit, sourceAuthority),
    kind: "codex-luna-max-runtime-attribution-preflight",
    pass: true,
    excluded_from_benchmark_denominator: true,
    runtime: {
      provider: "codex",
      model: "gpt-5.6-luna",
      effort: "max",
      model_selector_observed: true,
      effort_selector_observed: true,
      turn_id_sha256: sha256(String(context.turn_id)),
      telemetry_bytes: telemetryBytes.length,
      telemetry_sha256: sha256(telemetryBytes),
      retry_calls: 0,
      replacement_calls: 0,
      fallback_calls: 0,
    },
    provider_calls: 1,
    model_calls: 1,
    browser_calls: 0,
  };
}

export function buildBrowserIdentityReceipt({ sourceCommit, sourceAuthority, telemetryBytes, telemetry }) {
  let parsedTelemetry;
  try { parsedTelemetry = JSON.parse(telemetryBytes.toString("utf8")); } catch { throw new Error("in-app browser telemetry bytes must contain one JSON object"); }
  if (canonicalJson(parsedTelemetry) !== canonicalJson(telemetry)) throw new Error("in-app browser telemetry byte/value binding drift");
  const exactKeys = (value, keys, label) => {
    if (!value || typeof value !== "object" || Array.isArray(value)
      || canonicalJson(Object.keys(value).sort()) !== canonicalJson([...keys].sort())) {
      throw new Error(`${label} exact key schema drift`);
    }
  };
  exactKeys(telemetry, [
    "receipt_version", "browser", "tab", "capture", "controller_launched_browser",
    "tab_created_for_identity", "navigation_calls", "provider_calls", "model_calls", "browser_calls",
  ], "in-app browser raw envelope");
  exactKeys(telemetry.browser, ["type", "browser_id", "name"], "in-app browser identity");
  exactKeys(telemetry.tab, ["id", "url", "title"], "in-app browser tab");
  exactKeys(telemetry.capture, ["surface", "method", "cryptographic_identity_verified", "statement"], "in-app browser capture attestation");
  if (telemetry.receipt_version !== "codex-in-app-browser-identity-v0.1"
    || telemetry.browser.type !== "iab"
    || typeof telemetry.browser.browser_id !== "string" || telemetry.browser.browser_id.trim().length === 0
    || telemetry.browser.browser_id !== telemetry.browser.browser_id.trim()
    || telemetry.browser.name !== "Codex In-app Browser"
    || typeof telemetry.tab.id !== "string" || telemetry.tab.id.trim().length === 0
    || telemetry.tab.id !== telemetry.tab.id.trim()
    || telemetry.tab.url !== "about:blank" || telemetry.tab.title !== "about:blank"
    || telemetry.capture.surface !== "codex-in-app-browser-tool"
    || telemetry.capture.method !== "agent.browsers.get(iab)+tabs.new"
    || telemetry.capture.cryptographic_identity_verified !== false
    || telemetry.capture.statement !== "Operator-attested Codex in-app Browser observation; not cryptographic browser identity."
    || telemetry.controller_launched_browser !== false || telemetry.tab_created_for_identity !== true
    || telemetry.navigation_calls !== 0 || telemetry.provider_calls !== 0
    || telemetry.model_calls !== 0 || telemetry.browser_calls !== 1) {
    throw new Error("Codex in-app browser identity contract drift");
  }
  const identity = {
    browser: telemetry.browser,
    tab: telemetry.tab,
    capture: telemetry.capture,
    controller_launched_browser: false,
    tab_created_for_identity: true,
    navigation_calls: 0,
  };
  return {
    ...commonReceipt(sourceCommit, sourceAuthority),
    kind: "codex-in-app-browser-identity-preflight",
    pass: true,
    excluded_from_benchmark_denominator: true,
    ...identity,
    telemetry_bytes: telemetryBytes.length,
    telemetry_sha256: sha256(telemetryBytes),
    identity_sha256: sha256(canonicalJson(identity)),
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 1,
    network_calls: 0,
  };
}

async function main() {
  const [command, ...argv] = process.argv.slice(2);
  const args = parseArgs(argv);
  const root = process.env.OMD_ADMISSION_REPO_ROOT ? resolve(process.env.OMD_ADMISSION_REPO_ROOT) : defaultRepoRoot;
  const sourceCommit = args.get("source-commit");
  const output = args.get("out");
  if (!command || !output) throw new Error("usage: prepare-luna-max-admission-receipts.mjs <static-capability|schema-liveness|audit-runtime-attribution|audit-in-app-browser-identity> ... --source-commit <HEAD> --out <fresh.json>");
  const sourceAuthority = assertSourceAuthority({ root, sourceCommit });
  let receipt;
  let inputs = [];
  if (command === "static-capability") {
    const catalogPath = args.get("catalog");
    assertRegular(catalogPath, "catalog");
    const bytes = readFileSync(catalogPath);
    const codexCli = inspectStaticCodexCliBinding({ codexBin: args.get("codex-bin") });
    receipt = buildStaticCapabilityReceipt({ sourceCommit, sourceAuthority, catalogBytes: bytes, codexCli });
    inputs = [catalogPath, codexCli.wrapper.path, codexCli.native.path];
  } else if (command === "schema-liveness") {
    const baseUrl = args.get("base-url");
    receipt = await buildSchemaLivenessReceipt({ root, sourceCommit, sourceAuthority, baseUrl });
  } else if (command === "audit-runtime-attribution") {
    const telemetryPath = args.get("telemetry");
    const evidence = readEvidence(telemetryPath, "runtime telemetry");
    receipt = buildRuntimeAttributionReceipt({ sourceCommit, sourceAuthority, telemetryBytes: evidence.bytes, telemetry: evidence.value });
    inputs = [telemetryPath];
  } else if (command === "audit-in-app-browser-identity") {
    const telemetryPath = args.get("telemetry");
    const evidence = readEvidence(telemetryPath, "browser telemetry");
    receipt = buildBrowserIdentityReceipt({ sourceCommit, sourceAuthority, telemetryBytes: evidence.bytes, telemetry: evidence.value });
    inputs = [telemetryPath];
  } else {
    throw new Error(`unknown command: ${command}`);
  }
  writeReceipt(output, receipt, inputs);
  process.stdout.write(`${canonicalJson({ status: "pass", command, output, receipt_sha256: sha256(`${canonicalJson(receipt)}\n`) })}\n`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
