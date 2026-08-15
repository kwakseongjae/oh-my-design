#!/usr/bin/env node
/**
 * run-grok.mjs — Grok-4.6 isolated benchmark runner
 *
 * WP1 of omd-grok46-restart-v0.1: run-grok lane with isolation equivalent to
 * run-codex.mjs but bound to the Grok Build CLI (grok-4.6).
 *
 * Isolation contract (proven 2026-08-14):
 *   HOME=<iso_tmpdir>  +  copy ~/.grok/auth.json only
 *   Grok creates its own config.toml / models_cache.json / sessions in iso HOME.
 *   Global skills / AGENTS.md / MCP are NOT loaded.
 *
 * Fixed invariants (seed-locked, must not be changed):
 *   Model:  grok-4.6
 *   Binary: ~/.grok/bin/grok
 *   Flags:  --no-auto-update --no-subagents --no-memory --disable-web-search
 *   Retry:  0  (no retry, no replacement, no fallback)
 *
 * Harness faults (spawn error, missing binary, cache integrity drift) are
 * classified as infrastructure-invalid and NEVER as product failures.
 * A timeout is its own terminal class (denominator-kept, scored 0), and a
 * provider quota rejection is machine-classified as usage-limit.
 *
 * Usage:
 *   run-grok.mjs --workspace <prepared-dir> [--timeout-ms 900000]
 *                [--artifact-suffix repair-1|repair-2]
 *
 * Environment:
 *   GROK_SANDBOX — if set, passes --sandbox <value> to grok
 */
import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import {
  appendFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import { homedir, tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import {
  diffTreeManifests,
  parseArgs,
  readJson,
  treeManifest,
  writeJson,
} from "./_lib.mjs";

// ─────────────────────────────────────────────────────────────────────────────
// Seed-locked constants — must not be changed without a new preregistration
// ─────────────────────────────────────────────────────────────────────────────
const GROK_MODEL = "grok-4.6";
const GROK_HOME = join(homedir(), ".grok");
const GROK_BIN = join(GROK_HOME, "bin", "grok");

/**
 * Fixed isolation flags passed to every grok invocation.
 * Deviation from this list is infrastructure-invalid.
 *
 * --always-approve      : prevent interactive permission prompts in headless mode
 * --reasoning-effort    : seed-locked effort tier "high" for grok-4.6
 */
const GROK_FIXED_FLAGS = Object.freeze([
  "--no-auto-update",
  "--no-subagents",
  "--no-memory",
  "--disable-web-search",
  "--always-approve",
  "--reasoning-effort",
  "high",
]);

/**
 * Volatile fields allowed to change between pre- and post-run
 * models_cache.json snapshots.  Any other field change is a cache integrity
 * failure (infrastructure-invalid).
 *   fetched_at      — RFC-3339 timestamp written each time the model list is
 *                     refreshed from the network.
 *   etag            — HTTP ETag accompanying the model-list response; changes
 *                     together with fetched_at when the server returns a new
 *                     response.
 * The analysis itself lives in grok-cache-integrity.mjs, shared with the
 * adversarial contract tests so they exercise the exact production path.
 */
import {
  analyseCacheIntegrity,
  CACHE_VOLATILE_FIELDS,
} from "./grok-cache-integrity.mjs";

// ─────────────────────────────────────────────────────────────────────────────
// Parse arguments
// ─────────────────────────────────────────────────────────────────────────────
const args = parseArgs();
const workspace = args.get("workspace")
  ? resolve(String(args.get("workspace")))
  : null;
const timeoutMs = Number(args.get("timeout-ms") ?? 900_000);
const artifactSuffix = args.get("artifact-suffix")
  ? String(args.get("artifact-suffix"))
  : null;

// Optional: GROK_SANDBOX env controls --sandbox flag
const grokSandboxProfile = process.env.GROK_SANDBOX ?? null;

// OmD controller env transfer (omd-autopilot-v2 cells only). The 8 bindings
// arrive ONLY via the JSON file written by run-grok46-omd-cell.mjs —
// process.env is never read for these keys (ambient env selection killed a
// Luna epoch; see 68a-v2).
const omdControllerEnvPath = args.get("omd-controller-env")
  ? resolve(String(args.get("omd-controller-env")))
  : null;
const OMD_CONTROLLER_ENV_KEYS = Object.freeze([
  "OMD_BENCH_EXTERNAL_STAGING_ROOT", "OMD_BENCH_COMPILED_CORE_PACKAGE", "OMD_BENCH_CORE_CHECKPOINT",
  "OMD_AUTHORITY_CONTROLLER_RECEIPT", "OMD_AUTHORITY_CONTROLLER_RECEIPT_SHA256",
  "OMD_AUTHORITY_CONTROLLER_ACTIVATION_SHA256", "OMD_AUTHORITY_CONTROLLER_RUN_DIR",
  "OMD_AUTHORITY_CONTROLLER_EXECUTABLE",
]);

if (!workspace) {
  console.error(
    "usage: run-grok.mjs --workspace <prepared-dir> [--timeout-ms 900000]",
  );
  process.exit(2);
}

if (artifactSuffix && !/^repair-[1-2]$/.test(artifactSuffix)) {
  throw new Error("artifact suffix must be repair-1 or repair-2");
}

// ─────────────────────────────────────────────────────────────────────────────
// Resolve benchmark paths
// ─────────────────────────────────────────────────────────────────────────────
const benchmarkDir = join(workspace, ".benchmark");
const manifestPath = join(benchmarkDir, "manifest.json");
const artifactDir = artifactSuffix
  ? join(benchmarkDir, "attempts", artifactSuffix)
  : benchmarkDir;
mkdirSync(artifactDir, { recursive: true });
const resultPath = join(artifactDir, "run-result.json");

if (!existsSync(manifestPath)) {
  throw new Error(`not a prepared benchmark workspace: ${workspace}`);
}
if (existsSync(resultPath)) {
  throw new Error(`refusing to overwrite completed run: ${resultPath}`);
}

const manifest = readJson(manifestPath);
if (manifest.runtime_target !== "grok") {
  throw new Error("workspace was not prepared with --runtime grok");
}

const omdControllerEnv = {};
if (manifest.variant?.id === "omd-autopilot-v2") {
  if (!omdControllerEnvPath) {
    throw new Error("OmD controller invocation requires --omd-controller-env");
  }
  const envInfo = existsSync(omdControllerEnvPath) ? lstatSync(omdControllerEnvPath) : null;
  if (!envInfo?.isFile() || envInfo.isSymbolicLink()) {
    throw new Error("OmD controller env file must be a regular non-symlink file");
  }
  const envBytes = readFileSync(omdControllerEnvPath);
  const envValue = JSON.parse(envBytes.toString("utf8"));
  const observedKeys = Object.keys(envValue ?? {}).sort();
  const expectedKeys = [...OMD_CONTROLLER_ENV_KEYS].sort();
  if (JSON.stringify(observedKeys) !== JSON.stringify(expectedKeys)) {
    throw new Error("OmD controller env schema drift");
  }
  if (OMD_CONTROLLER_ENV_KEYS.some((key) => typeof envValue[key] !== "string" || !envValue[key])) {
    throw new Error("OmD controller invocation requires the exact preregistered environment bindings");
  }
  const staging = resolve(envValue.OMD_BENCH_EXTERNAL_STAGING_ROOT);
  const packageRoot = resolve(envValue.OMD_BENCH_COMPILED_CORE_PACKAGE);
  const checkpoint = resolve(envValue.OMD_BENCH_CORE_CHECKPOINT);
  const receiptPath = resolve(envValue.OMD_AUTHORITY_CONTROLLER_RECEIPT);
  const executable = resolve(envValue.OMD_AUTHORITY_CONTROLLER_EXECUTABLE);
  const executionRoot = dirname(workspace);
  const stagingInfo = existsSync(staging) ? lstatSync(staging) : null;
  const receiptInfo = existsSync(receiptPath) ? lstatSync(receiptPath) : null;
  const executableInfo = existsSync(executable) ? lstatSync(executable) : null;
  const receiptBytes = receiptInfo?.isFile() && !receiptInfo.isSymbolicLink() ? readFileSync(receiptPath) : null;
  const receiptSha = receiptBytes ? createHash("sha256").update(receiptBytes).digest("hex") : null;
  const receipt = receiptBytes ? JSON.parse(receiptBytes) : null;
  const expectedRunDir = `.omd/runs/${String(manifest.task?.id ?? "benchmark-task").replace(/-landing$/, "")}`;
  if (!stagingInfo?.isDirectory() || stagingInfo.isSymbolicLink()
    || dirname(staging) !== executionRoot || basename(staging) !== "omd-external-staging"
    || dirname(packageRoot) !== staging || basename(packageRoot) !== "compiled-core"
    || dirname(checkpoint) !== staging || basename(checkpoint) !== "project-adoption-checkpoint.json"
    || dirname(receiptPath) !== executionRoot || basename(receiptPath) !== "OMD-AUTHORITY-CONTROLLER.json"
    || !executableInfo?.isFile() || executableInfo.isSymbolicLink()
    || dirname(dirname(executable)) !== join(executionRoot, "authority-controller-runtime")
    || basename(executable) !== "activate-autopilot-design-system.cjs"
    || receiptSha !== envValue.OMD_AUTHORITY_CONTROLLER_RECEIPT_SHA256
    || receipt?.kind !== "omd-autopilot-external-authority-controller-activation"
    || receipt?.scope?.project_workspace !== workspace || receipt?.scope?.run_dir !== expectedRunDir
    || resolve(receipt?.scope?.controller_executable ?? "") !== executable
    || receipt?.activation?.sha256 !== envValue.OMD_AUTHORITY_CONTROLLER_ACTIVATION_SHA256
    || envValue.OMD_AUTHORITY_CONTROLLER_RUN_DIR !== expectedRunDir) {
    throw new Error("OmD controller environment differs from the execution receipt/add-dir contract");
  }
  for (const key of OMD_CONTROLLER_ENV_KEYS) omdControllerEnv[key] = envValue[key];
} else if (omdControllerEnvPath) {
  throw new Error("--omd-controller-env is only valid for omd-autopilot-v2 cells");
}

// ─────────────────────────────────────────────────────────────────────────────
// Read prompt
// ─────────────────────────────────────────────────────────────────────────────
// Benchmark cells carry the FULL invocation (activation prefix + task prompt
// + workspace runtime boundary) in invocation-prompt.txt; PROMPT.md holds the
// bare task prompt for receipts. The model must receive the invocation —
// otherwise skill arms never see their activation prefix. Fallback to
// PROMPT.md keeps smoke/preflight workspaces working.
const invocationPath = join(benchmarkDir, "invocation-prompt.txt");
const promptPath = artifactSuffix
  ? join(benchmarkDir, "repair-prompts", `${artifactSuffix}.md`)
  : existsSync(invocationPath)
    ? invocationPath
    : join(benchmarkDir, "PROMPT.md");
if (!existsSync(promptPath)) {
  throw new Error(`run prompt is missing: ${promptPath}`);
}
const prompt = readFileSync(promptPath, "utf8");

// ─────────────────────────────────────────────────────────────────────────────
// Verify grok binary — infrastructure gate
//
// grok is commonly installed as a symlink (e.g. ~/.grok/bin/grok →
// ../downloads/grok-macos-aarch64). We resolve the symlink via realpathSync
// to reach the actual binary, then verify the RESOLVED target is a plain
// regular file. The binary SHA is computed on the resolved target.
// A dangling symlink, a chained symlink whose tail is not a regular file, or a
// missing binary are all infrastructure-invalid.
// ─────────────────────────────────────────────────────────────────────────────
if (!existsSync(GROK_BIN)) {
  throw new Error(
    `grok binary not found at expected path: ${GROK_BIN} — infrastructure-invalid`,
  );
}
// Resolve symlink to the actual binary target
let grokBinResolved;
try {
  grokBinResolved = realpathSync(GROK_BIN);
} catch {
  throw new Error(
    `grok binary symlink resolution failed: ${GROK_BIN} — infrastructure-invalid`,
  );
}
const grokBinInfo = lstatSync(grokBinResolved);
if (!grokBinInfo.isFile() || grokBinInfo.isSymbolicLink()) {
  throw new Error(
    `grok binary resolved target is not a plain regular file (${GROK_BIN} → ${grokBinResolved}) — infrastructure-invalid`,
  );
}
const grokBinBytes = readFileSync(grokBinResolved);
const grokBinSha256 = createHash("sha256").update(grokBinBytes).digest("hex");

// ─────────────────────────────────────────────────────────────────────────────
// Read and freeze auth.json bytes
// ─────────────────────────────────────────────────────────────────────────────
const sourceAuthPath = join(GROK_HOME, "auth.json");
if (!existsSync(sourceAuthPath)) {
  throw new Error(
    `grok auth.json not found: ${sourceAuthPath} — infrastructure-invalid`,
  );
}
const sourceAuthInfo = lstatSync(sourceAuthPath);
if (!sourceAuthInfo.isFile() || sourceAuthInfo.isSymbolicLink()) {
  throw new Error(
    "grok auth.json is not a plain regular file — infrastructure-invalid",
  );
}
const authBytes = readFileSync(sourceAuthPath);
const authSha256 = createHash("sha256").update(authBytes).digest("hex");

// ─────────────────────────────────────────────────────────────────────────────
// Create isolated HOME directory
// ─────────────────────────────────────────────────────────────────────────────
const isoBase = join(tmpdir(), "grok-bench-iso");
mkdirSync(isoBase, { recursive: true, mode: 0o700 });
const isoHome = join(isoBase, `run-${process.pid}-${Date.now()}`);
const isoGrokDir = join(isoHome, ".grok");
mkdirSync(isoGrokDir, { recursive: true, mode: 0o700 });

// Copy frozen auth bytes into isolated grok home
const isoAuthPath = join(isoGrokDir, "auth.json");
writeFileSync(isoAuthPath, authBytes, { mode: 0o600 });

// Paranoid byte-perfect copy verification
const isoAuthSha256 = createHash("sha256")
  .update(readFileSync(isoAuthPath))
  .digest("hex");
if (isoAuthSha256 !== authSha256) {
  throw new Error(
    "auth.json copy byte-verification failed — infrastructure-invalid",
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Pre-run models_cache.json snapshot (byte gate)
// ─────────────────────────────────────────────────────────────────────────────
const sourceCachePath = join(GROK_HOME, "models_cache.json");
const isoCachePath = join(isoGrokDir, "models_cache.json");
let preCacheBytes = null;
let preCacheSha256 = null;
let preCacheJson = null;

if (existsSync(sourceCachePath)) {
  const info = lstatSync(sourceCachePath);
  if (!info.isFile() || info.isSymbolicLink()) {
    throw new Error(
      "source models_cache.json is not a plain regular file — infrastructure-invalid",
    );
  }
  preCacheBytes = readFileSync(sourceCachePath);
  preCacheSha256 = createHash("sha256").update(preCacheBytes).digest("hex");
  try {
    preCacheJson = JSON.parse(preCacheBytes.toString("utf8"));
  } catch {
    preCacheJson = null;
  }
  // Seed the isolated home with the existing cache so grok inherits it
  writeFileSync(isoCachePath, preCacheBytes, { mode: 0o600 });
}

// ─────────────────────────────────────────────────────────────────────────────
// Prepare artifact paths
// ─────────────────────────────────────────────────────────────────────────────
const finalMessagePath = join(artifactDir, "final-message.txt");
const eventsPath = join(artifactDir, "events.jsonl");
writeFileSync(eventsPath, "", "utf8");
const maxLogBytes = 50 * 1024 * 1024; // 50 MB stream cap

// ─────────────────────────────────────────────────────────────────────────────
// Build grok command
// Prompt is passed inline via -p (proven headless pattern from 2026-08-14).
// Benchmark prompts are expected to be small enough for a single CLI argument
// (typical sizes 261–598 bytes per Luna wow-preview task set).
// ─────────────────────────────────────────────────────────────────────────────
const grokArgs = [
  "-p",
  prompt,
  "-m",
  GROK_MODEL,
  // streaming-messages-json = Anthropic Messages API wire format (NDJSON).
  // Chosen over "plain" because benchmark cells must carry provider token
  // telemetry (message_start/message_delta usage events) for the Pareto gate;
  // plain output proved usage-attribution-unavailable in smoke receipts.
  "--output-format",
  "streaming-messages-json",
  ...GROK_FIXED_FLAGS,
  ...(grokSandboxProfile ? ["--sandbox", grokSandboxProfile] : []),
];

// ─────────────────────────────────────────────────────────────────────────────
// Child environment — minimal allowlist, HOME redirected to isolated dir
// ─────────────────────────────────────────────────────────────────────────────
const childEnv = {};
for (const key of [
  "PATH",
  "TMPDIR",
  "LANG",
  "LC_ALL",
  "TERM",
  "USER",
  "SHELL",
]) {
  if (process.env[key]) childEnv[key] = process.env[key];
}
Object.assign(childEnv, {
  HOME: isoHome,
  DISABLE_TELEMETRY: "1",
  DO_NOT_TRACK: "1",
  CI: "1",
  ...omdControllerEnv,
});

// ─────────────────────────────────────────────────────────────────────────────
// Execute grok
// ─────────────────────────────────────────────────────────────────────────────
const startedAt = new Date();
const startedNs = process.hrtime.bigint();
let stdoutStr = "";
let stderrStr = "";
let timedOut = false;
let logsTruncated = false;
let spawnError = null;

const appendCapped = (current, chunk) => {
  if (Buffer.byteLength(current) >= maxLogBytes) {
    logsTruncated = true;
    return current;
  }
  const next = `${current}${chunk.toString()}`;
  if (Buffer.byteLength(next) <= maxLogBytes) return next;
  logsTruncated = true;
  return Buffer.from(next).subarray(0, maxLogBytes).toString("utf8");
};

const exit = await new Promise((resolveExit) => {
  const child = spawn(GROK_BIN, grokArgs, {
    cwd: workspace,
    env: childEnv,
    detached: true,
    stdio: ["ignore", "pipe", "pipe"],
  });
  const timer = setTimeout(() => {
    timedOut = true;
    try {
      process.kill(-child.pid, "SIGTERM");
    } catch {
      child.kill("SIGTERM");
    }
  }, timeoutMs);
  child.stdout.on("data", (chunk) => {
    appendFileSync(eventsPath, chunk);
    stdoutStr = appendCapped(stdoutStr, chunk);
  });
  child.stderr.on("data", (chunk) => {
    stderrStr = appendCapped(stderrStr, chunk);
  });
  child.on("error", (error) => {
    clearTimeout(timer);
    spawnError = `infrastructure-invalid: ${error.message}`;
    resolveExit({ code: null, signal: null });
  });
  child.on("close", (code, signal) => {
    clearTimeout(timer);
    resolveExit({ code, signal });
  });
});

const wallMs = Number(process.hrtime.bigint() - startedNs) / 1_000_000;

// ─────────────────────────────────────────────────────────────────────────────
// Write stream artifacts
// ─────────────────────────────────────────────────────────────────────────────

// Flush full raw stream (may overwrite what appendFileSync wrote)
writeFileSync(eventsPath, stdoutStr, "utf8");
writeFileSync(join(artifactDir, "stderr.log"), stderrStr, "utf8");

// Final message extraction.
// streaming-messages-json emits Anthropic-wire NDJSON: text arrives as
// content_block_delta text_delta events, and message_start marks a new
// assistant message. The final message is the accumulated text of the LAST
// message. Fallback (unparseable stream): last non-empty raw line, so a
// provider-side plain error message still lands in the receipt.
// Observed schema (attribution preflight 02, 2026-08-15): NDJSON events
// {"type":"system"...}, {"type":"assistant","message":{model,content:[...]}},
// {"type":"result","result":"<final text>",usage,modelUsage,...}.
let finalMessage = "";
{
  let resultText = null;
  let lastAssistantText = null;
  for (const line of stdoutStr.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("{")) continue;
    try {
      const evt = JSON.parse(trimmed);
      if (evt.type === "result" && typeof evt.result === "string") {
        resultText = evt.result;
      } else if (evt.type === "assistant" && Array.isArray(evt.message?.content)) {
        const text = evt.message.content
          .filter((b) => b?.type === "text" && typeof b.text === "string")
          .map((b) => b.text)
          .join("");
        if (text.trim().length > 0) lastAssistantText = text;
      }
    } catch {
      // not NDJSON — ignore here, fallback below handles raw text
    }
  }
  finalMessage = (resultText ?? lastAssistantText ?? "").trim();
  if (finalMessage.length === 0) {
    const stdoutLines = stdoutStr
      .split("\n")
      .filter((l) => l.trim().length > 0);
    finalMessage = stdoutLines.at(-1) ?? "";
  }
}
writeFileSync(finalMessagePath, finalMessage, "utf8");

// ─────────────────────────────────────────────────────────────────────────────
// Post-run models_cache.json byte gate
// ─────────────────────────────────────────────────────────────────────────────
const postCacheArtifactPath = join(artifactDir, "models-cache.post-provider.bin");
let postCacheBytes = null;
let postCacheSha256 = null;
let postCacheJson = null;
let postCacheArtifact = null;
let postCachePreservationError = null;

try {
  if (existsSync(isoCachePath)) {
    const info = lstatSync(isoCachePath);
    if (!info.isFile() || info.isSymbolicLink()) {
      throw new Error(
        "post-run models_cache.json is not a plain regular file",
      );
    }
    postCacheBytes = readFileSync(isoCachePath);
    postCacheSha256 = createHash("sha256").update(postCacheBytes).digest("hex");
    try {
      postCacheJson = JSON.parse(postCacheBytes.toString("utf8"));
    } catch {
      postCacheJson = null;
    }
    writeFileSync(postCacheArtifactPath, postCacheBytes, {
      flag: "wx",
      mode: 0o600,
    });
    postCacheArtifact = {
      path: postCacheArtifactPath,
      sha256: postCacheSha256,
      bytes: postCacheBytes.length,
    };
  }
} catch (error) {
  postCachePreservationError = String(error?.message ?? error);
}

// ─────────────────────────────────────────────────────────────────────────────
// Cache byte-gate analysis (shared module — exact same code path as the
// adversarial contract tests).
// Only volatile fields (fetched_at, etag) are allowed to change.
// Non-volatile byte drift → infrastructure-invalid.
// ─────────────────────────────────────────────────────────────────────────────
const integrityAnalysis = analyseCacheIntegrity({
  preCacheBytes,
  postCacheBytes,
});
const cacheApplicable = integrityAnalysis.applicable;
const cacheFullBytesChanged = integrityAnalysis.fullBytesChanged;
const cacheVolatileOnlyChange = integrityAnalysis.volatileOnlyChange;
const fetchedAtRawDifferenceProof = integrityAnalysis.proof;

const cacheIntegrityPass =
  !cacheApplicable ||
  (postCacheArtifact !== null &&
    (!cacheFullBytesChanged || cacheVolatileOnlyChange));

const cacheIntegrity = {
  applicable: cacheApplicable,
  pass: cacheIntegrityPass,
  reason: cacheIntegrityPass
    ? null
    : postCacheArtifact === null
      ? "post-provider-cache-evidence-unavailable"
      : cacheVolatileOnlyChange
        ? null
        : "unapproved-nonvolatile-byte-drift",
  allowed_volatile_fields: [...CACHE_VOLATILE_FIELDS],
  observed_change_class:
    postCacheArtifact === null
      ? "evidence-unavailable"
      : !cacheFullBytesChanged
        ? "none"
        : cacheVolatileOnlyChange
          ? "volatile-only"
          : "integrity-drift",
  pre_provider_sha256: preCacheSha256,
  post_provider_cache_artifact: postCacheArtifact,
  post_provider_cache_preservation_error: postCachePreservationError,
  volatile_raw_difference_proof: fetchedAtRawDifferenceProof,
};

// ─────────────────────────────────────────────────────────────────────────────
// Usage extraction
// Grok plain-text output may embed JSON usage blocks on their own lines.
// Extract any that match a recognised usage shape.
// ─────────────────────────────────────────────────────────────────────────────
const modelUsage = [];
let modelReported = null;

for (const line of stdoutStr.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed.startsWith("{")) continue;
  try {
    const parsed = JSON.parse(trimmed);
    // Anthropic wire format: message_start carries message.model and
    // message.usage; message_delta carries top-level usage.
    const reportedModel = parsed.model ?? parsed.message?.model;
    if (reportedModel && typeof reportedModel === "string" && !modelReported) {
      modelReported = reportedModel;
    }
    const usage =
      parsed?.usage ?? parsed?.token_usage ?? parsed?.message?.usage;
    if (usage) {
      modelUsage.push({
        model: parsed?.model ?? modelReported ?? GROK_MODEL,
        input_tokens: Number(usage.input_tokens ?? usage.inputTokens ?? 0),
        cached_input_tokens: Number(
          usage.cached_input_tokens ?? usage.cachedInputTokens ?? 0,
        ),
        output_tokens: Number(
          usage.output_tokens ?? usage.outputTokens ?? 0,
        ),
        cost_usd: Number.isFinite(
          Number(usage.cost_usd ?? usage.costUSD ?? parsed.total_cost_usd),
        )
          ? Number(usage.cost_usd ?? usage.costUSD ?? parsed.total_cost_usd)
          : null,
        context_window: null,
        max_output_tokens: null,
      });
    }
  } catch {
    // Not a JSON line — plain-text output, skip
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Workspace tree diff
// ─────────────────────────────────────────────────────────────────────────────
const finalTree = treeManifest(workspace, { ignore: [".benchmark"] });
const initialProductTree = {
  sha256: manifest.workspace?.product_initial_sha256 ?? null,
  files: manifest.workspace?.product_initial_files ?? [],
};
const finalProductTree = treeManifest(workspace, {
  ignore: manifest.workspace?.product_ignore ?? [".benchmark"],
});
const changedProductFiles = diffTreeManifests(
  initialProductTree,
  finalProductTree,
);
const productChanged =
  initialProductTree.sha256 !== finalProductTree.sha256;

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure-invalid classification
// Harness faults are never product failures. A timeout is NOT a harness fault:
// it is its own terminal class (kept in the denominator, scored 0), matching
// the locked score-gate statuses.
// ─────────────────────────────────────────────────────────────────────────────
const isInfrastructureInvalid = spawnError !== null || !cacheIntegrityPass;

// ─────────────────────────────────────────────────────────────────────────────
// Provider capacity / usage-limit detection
// The locked missing-data rules (score-gate v0.2) exclude usage-limit cells
// from the quality comparison and stop the epoch on the second event, so this
// terminal class must be machine-derived, never hand-assigned. Conservative
// guard: a generated page that merely mentions "rate limit" must not trigger
// this path — the pattern only counts when the provider produced no product
// change, no final message, and the run did not succeed.
// ─────────────────────────────────────────────────────────────────────────────
const CAPACITY_PATTERNS = [
  /usage[_ -]?limit/i,
  /rate[_ -]?limit/i,
  /too many requests/i,
  /quota (exceeded|reached|exhausted)/i,
  /capacity (exceeded|reached|exhausted)/i,
  /try again (at|in|later)/i,
  /\b429\b/,
];
const capacityScanSource = `${stderrStr}\n${stdoutStr}`;
// Prefer a worded pattern over the bare /429/ for both detection reporting
// and the evidence excerpt, so the receipt carries the provider's sentence
// rather than a numeric fragment when both are present.
const matchedCapacityPatterns = CAPACITY_PATTERNS.filter((re) =>
  re.test(capacityScanSource),
);
const capacityPattern =
  matchedCapacityPatterns.find((re) => re.source !== "\\b429\\b") ??
  matchedCapacityPatterns[0];
// Raw signal, independent of terminal classification. A cell that wrote
// partial product output and then died on quota stays terminal=failed/timeout
// (conservative), but this signal still reaches the wave-gate capacity count
// per the locked score-gate signal_based_detection clause.
const capacitySignalDetected = capacityPattern !== undefined;
// final-message.txt is written unconditionally (empty string on silence), and
// a provider quota rejection printed to stdout becomes the "last non-empty
// line" itself — so absence of a real answer must be judged by CONTENT, not
// file existence.
const noMeaningfulFinalMessage =
  finalMessage.trim().length === 0 ||
  CAPACITY_PATTERNS.some((re) => re.test(finalMessage));
const isUsageLimit =
  !isInfrastructureInvalid &&
  capacityPattern !== undefined &&
  !productChanged &&
  noMeaningfulFinalMessage &&
  (exit.code !== 0 || timedOut);
let capacityEvidence = null;
if (capacitySignalDetected) {
  const idx = capacityScanSource.search(capacityPattern);
  capacityEvidence = capacityScanSource
    .slice(Math.max(0, idx - 80), idx + 160)
    .trim();
}

const terminalStatus = isInfrastructureInvalid
  ? "infrastructure-invalid"
  : isUsageLimit
    ? "usage-limit"
    : timedOut
      ? "timeout"
      : exit.code === 0
        ? "completed"
        : "failed";

// ─────────────────────────────────────────────────────────────────────────────
// Compose and write result
// ─────────────────────────────────────────────────────────────────────────────
const result = {
  schema_version: "0.2",
  task_id: manifest.task?.id ?? null,
  variant_id: manifest.variant?.id ?? null,
  started_at: startedAt.toISOString(),
  finished_at: new Date().toISOString(),
  runtime: {
    runtime_target: "grok",
    agent: "grok-build-cli",
    agent_version: null, // populated by grok itself in metadata; not available pre-run
    binary_sha256: grokBinSha256,
    model_requested: GROK_MODEL,
    model_reported: modelReported,
    model_evidence_mode: modelReported ? "provider-observed" : "cli-argument",
    model_tool_mode: null, // Grok does not expose a tool-mode cache equivalent
    auth_mode: "isolated-home-frozen-auth-copy",
    auth_sha256: authSha256,
    iso_home: isoHome,
    cache_integrity: cacheIntegrity,
    provider_route: "grok-build-cli-direct",
    model: GROK_MODEL,
    sandbox: grokSandboxProfile ?? "none",
    ephemeral: true,
    fixed_flags: [...GROK_FIXED_FLAGS],
    retry_count: 0,
    replacement_count: 0,
    fallback_count: 0,
    model_substitution_count: 0,
    effort_substitution_count: 0,
  },
  process: {
    exit_code: exit.code,
    signal: exit.signal,
    timed_out: timedOut,
    spawn_error: spawnError,
    wall_ms: Math.round(wallMs),
    terminal_status: terminalStatus,
    infrastructure_invalid: isInfrastructureInvalid,
    infrastructure_invalid_reason: isInfrastructureInvalid
      ? (spawnError ?? "cache-integrity-drift")
      : null,
    usage_limit: isUsageLimit,
    usage_limit_signal_detected: capacitySignalDetected,
    usage_limit_evidence: capacityEvidence,
  },
  output: {
    stdout_bytes: Buffer.byteLength(stdoutStr),
    stderr_bytes: Buffer.byteLength(stderrStr),
    logs_truncated: logsTruncated,
    model_usage: modelUsage,
    usage_attribution: {
      available: modelUsage.length > 0,
      evidence_mode:
        modelUsage.length > 0 ? "provider-embedded-json" : "unavailable",
      reason:
        modelUsage.length > 0
          ? null
          : "plain-text-stream-contained-no-json-usage-event",
    },
    final_message_present: existsSync(finalMessagePath),
  },
  workspace: {
    initial_sha256: manifest.workspace?.initial_sha256 ?? null,
    final_sha256: finalTree.sha256,
    final_files: finalTree.files.length,
    full_tree_changed:
      manifest.workspace?.initial_sha256 !== finalTree.sha256,
    product_initial_sha256: initialProductTree.sha256,
    product_final_sha256: finalProductTree.sha256,
    product_changed: productChanged,
    changed_product_files: changedProductFiles,
  },
  receipts: {
    grok_binary: {
      path: GROK_BIN,
      resolved_path: grokBinResolved,
      sha256: grokBinSha256,
    },
    auth_source: {
      path: sourceAuthPath,
      sha256: authSha256,
    },
    iso_auth_copy: {
      path: isoAuthPath,
      sha256: isoAuthSha256,
    },
    pre_provider_cache: preCacheSha256
      ? {
          sha256: preCacheSha256,
          bytes: preCacheBytes?.length ?? 0,
        }
      : null,
    post_provider_cache: postCacheArtifact,
  },
};

writeJson(resultPath, result);
console.log(JSON.stringify(result, null, 2));

if (exit.code !== 0 || timedOut || spawnError || !cacheIntegrityPass) {
  if (!cacheIntegrityPass) {
    console.error(
      "grok-bench: models_cache.json integrity violation — non-volatile byte drift detected (infrastructure-invalid)",
    );
  }
  if (isInfrastructureInvalid) {
    console.error(
      "grok-bench: run classified as infrastructure-invalid — not a product failure",
    );
  }
  if (isUsageLimit) {
    console.error(
      "grok-bench: run classified as usage-limit — provider capacity, excluded from quality comparison per locked missing-data rules",
    );
  }
  process.exitCode = 1;
}
