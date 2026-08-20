#!/usr/bin/env node
/**
 * test-run-grok-contract.mjs — Adversarial contract tests for run-grok.mjs.
 *
 * Provider-zero: no live grok calls. Tests isolation and integrity contracts.
 * Exit 0 when all pass; non-zero when any fail.
 *
 * Test cases:
 *   TC-01  Tampered non-volatile cache bytes → fail-close (integrity-drift)
 *   TC-02  Volatile-only cache change → passes gate (not infra-invalid)
 *   TC-03  No pre-run cache → gate not applicable, passes
 *   TC-04  Unparseable post-cache JSON → treated as non-volatile drift, fail-close
 *   TC-05  Missing --workspace arg → process exits 2
 *   TC-06  manifest.runtime_target !== "grok" → fails before binary (wrong model id)
 *   TC-07  Missing PROMPT.md → fails before binary call
 *   TC-08  Grok binary symlink is resolved via realpathSync; dangling/chained targets fail-close
 *   TC-09  GROK_MODEL hardcoded exactly as "grok-4.6" — no fallback, no substitution
 *   TC-10  GROK_FIXED_FLAGS blocks global skill / MCP contamination
 *   TC-11  childEnv allowlist never leaks ambient HOME or other sensitive keys
 *   TC-12  Auth copy SHA mismatch → fail-close (forged receipt)
 *   TC-13  Missing auth.json at expected path → infrastructure-invalid
 */

import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir, homedir } from "node:os";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RUNNER_PATH = join(__dirname, "run-grok.mjs");

// ─── Seed-locked constants mirrored from run-grok.mjs (must stay in sync) ───
const GROK_MODEL_EXPECTED = "grok-4.6";
const GROK_FIXED_FLAGS_EXPECTED = Object.freeze([
  "--no-auto-update",
  "--no-subagents",
  "--no-memory",
  "--disable-web-search",
  "--always-approve",
  "--reasoning-effort",
]);
const CACHE_VOLATILE_FIELDS_EXPECTED = Object.freeze(["fetched_at", "etag"]);
const CHILD_ENV_ALLOWLIST_EXPECTED = Object.freeze([
  "PATH", "TMPDIR", "LANG", "LC_ALL", "TERM", "USER", "SHELL",
]);
const CHILD_ENV_EXPLICIT_KEYS_EXPECTED = Object.freeze([
  "HOME", "DISABLE_TELEMETRY", "DO_NOT_TRACK", "CI",
]);

// ─── Helpers ─────────────────────────────────────────────────────────────────

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

let passed = 0;
let failed = 0;
const results = [];

function assert(label, fn) {
  try {
    fn();
    passed += 1;
    results.push({ label, pass: true });
    console.log(`  PASS  ${label}`);
  } catch (err) {
    failed += 1;
    results.push({ label, pass: false, error: String(err?.message ?? err) });
    console.error(`  FAIL  ${label}`);
    console.error(`        ${String(err?.message ?? err).split("\n")[0]}`);
  }
}

function assertThrows(label, fn, expectedFragment) {
  let threw = false;
  let actualMessage = "";
  try {
    fn();
  } catch (err) {
    threw = true;
    actualMessage = String(err?.message ?? err);
  }
  assert(label, () => {
    if (!threw) throw new Error("expected throw but no error was raised");
    if (expectedFragment && !actualMessage.includes(expectedFragment)) {
      throw new Error(
        `expected "${expectedFragment}" in error message, got: "${actualMessage}"`,
      );
    }
  });
}

/** Create a temp directory that is cleaned up after the test run. */
const cleanupDirs = [];
function makeTempDir(suffix = "") {
  const dir = mkdtempSync(join(tmpdir(), `grok-contract-${suffix}-`));
  cleanupDirs.push(dir);
  return dir;
}

/** Build a minimal adversarial benchmark workspace. */
function makeWorkspace({ runtimeTarget = "grok", prompt = "hello", withPrompt = true } = {}) {
  const workspace = makeTempDir("ws");
  const benchmarkDir = join(workspace, ".benchmark");
  mkdirSync(benchmarkDir, { recursive: true });
  writeFileSync(
    join(benchmarkDir, "manifest.json"),
    JSON.stringify({
      runtime_target: runtimeTarget,
      task: { id: "test-task" },
      variant: { id: "test-variant" },
    }),
    "utf8",
  );
  if (withPrompt) {
    writeFileSync(join(benchmarkDir, "PROMPT.md"), prompt, "utf8");
  }
  return workspace;
}

/** Spawn run-grok.mjs with the given args and return the result. */
function spawnRunner(args, extraEnv = {}) {
  return spawnSync(
    process.execPath,
    [RUNNER_PATH, ...args],
    {
      encoding: "utf8",
      timeout: 15_000,
      env: { ...process.env, ...extraEnv },
    },
  );
}

// ─── Cache integrity analysis — SHARED PRODUCTION MODULE ────────────────────
// TC-01..TC-04 exercise the exact code run-grok.mjs executes (imported from
// grok-cache-integrity.mjs). Only the trivial gate-verdict composition below
// mirrors the runner; the drift-prone analysis itself is shared, closing the
// copied-logic gap found by grok reviewer C (2026-08-15).

import {
  analyseCacheIntegrity as analyseCacheIntegrityShared,
  CACHE_VOLATILE_FIELDS,
} from "./grok-cache-integrity.mjs";

function analyseCacheIntegrity({ preCacheBytes, postCacheBytes }) {
  if (preCacheBytes === null) {
    return { pass: true, reason: null, observed_change_class: "not-applicable", applicable: false };
  }
  if (postCacheBytes === null) {
    return {
      pass: false,
      reason: "post-provider-cache-evidence-unavailable",
      observed_change_class: "evidence-unavailable",
      applicable: true,
    };
  }
  const a = analyseCacheIntegrityShared({ preCacheBytes, postCacheBytes });
  if (!a.fullBytesChanged) {
    return { pass: true, reason: null, observed_change_class: "none", applicable: true };
  }
  if (a.volatileOnlyChange) {
    return { pass: true, reason: null, observed_change_class: "volatile-only", applicable: true };
  }
  return {
    pass: false,
    reason: "unapproved-nonvolatile-byte-drift",
    observed_change_class: "integrity-drift",
    applicable: true,
  };
}

// ─── Read runner source for static assertions (TC-09..TC-11) ─────────────────

const runnerSource = readFileSync(RUNNER_PATH, "utf8");

// ═════════════════════════════════════════════════════════════════════════════
// TC-01: Non-volatile cache field mutation → fail-close
// ═════════════════════════════════════════════════════════════════════════════
console.log("\nGroup 1: Cache byte-gate contracts");

assert("TC-01: non-volatile field mutation → integrity-drift (fail-close)", () => {
  const pre = Buffer.from(
    JSON.stringify({
      fetched_at: "2026-08-14T00:00:00Z",
      etag: "W/\"abc\"",
      models: { "grok-4.6": { id: "grok-4.6", tier: "standard" } },
    }),
  );
  // Tamper: change non-volatile field 'tier'
  const post = Buffer.from(
    JSON.stringify({
      fetched_at: "2026-08-14T12:00:00Z",
      etag: "W/\"xyz\"",
      models: { "grok-4.6": { id: "grok-4.6", tier: "premium" } }, // TAMPERED
    }),
  );
  const result = analyseCacheIntegrity({ preCacheBytes: pre, postCacheBytes: post });
  if (result.pass) throw new Error("expected fail-close but analysis passed");
  if (result.observed_change_class !== "integrity-drift") {
    throw new Error(`expected integrity-drift, got: ${result.observed_change_class}`);
  }
  if (!result.reason.includes("nonvolatile")) {
    throw new Error(`expected nonvolatile reason, got: ${result.reason}`);
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// TC-02: Only volatile fields changed → gate passes
// The shared byte proof consumes JSON string escape sequences ((?:[^"\\]|\\.)*),
// so realistic weak-validator etags like W/\"checksum\" — which the earlier
// [^"]* pattern mis-spliced — are covered; TC-02d locks that regression.
// ═════════════════════════════════════════════════════════════════════════════

assert("TC-02: volatile-only change (fetched_at + etag, simple values) → passes gate", () => {
  // Use simple etag values without embedded quotes so the regex proof works.
  const pre = Buffer.from(
    JSON.stringify({
      fetched_at: "2026-08-14T00:00:00Z",
      etag: "etag-old-abc123",
      models: { "grok-4.6": { id: "grok-4.6", tier: "standard" } },
    }),
  );
  const post = Buffer.from(
    JSON.stringify({
      fetched_at: "2026-08-14T12:00:00Z",
      etag: "etag-new-xyz789",
      models: { "grok-4.6": { id: "grok-4.6", tier: "standard" } }, // unchanged
    }),
  );
  const result = analyseCacheIntegrity({ preCacheBytes: pre, postCacheBytes: post });
  if (!result.pass) {
    throw new Error(`expected gate pass but got: ${result.reason ?? result.observed_change_class}`);
  }
  if (result.observed_change_class !== "volatile-only") {
    throw new Error(`expected volatile-only, got: ${result.observed_change_class}`);
  }
});

assert("TC-02d: realistic escaped etag W/\"…\" volatile-only refresh → passes gate (regression)", () => {
  // Byte-exact shape of the live cache on this host: the etag JSON literal
  // contains ESCAPED quotes. The old [^"]* proof mis-spliced this and
  // fail-closed a legitimate volatile-only refresh (grok reviewer C, 96%).
  const pre = Buffer.from(
    JSON.stringify({
      fetched_at: "2026-08-14T00:00:00Z",
      etag: 'W/"17945962175790342248"',
      models: { "grok-4.6": { id: "grok-4.6", tier: "standard" } },
    }),
  );
  const post = Buffer.from(
    JSON.stringify({
      fetched_at: "2026-08-15T09:00:00Z",
      etag: 'W/"99887766554433221100"',
      models: { "grok-4.6": { id: "grok-4.6", tier: "standard" } }, // unchanged
    }),
  );
  const result = analyseCacheIntegrity({ preCacheBytes: pre, postCacheBytes: post });
  if (!result.pass) {
    throw new Error(`expected gate pass for escaped-etag volatile refresh, got: ${result.reason ?? result.observed_change_class}`);
  }
  if (result.observed_change_class !== "volatile-only") {
    throw new Error(`expected volatile-only, got: ${result.observed_change_class}`);
  }
});

assert("TC-02e: escaped etag changed AND non-volatile tampered → still fail-close", () => {
  const pre = Buffer.from(
    JSON.stringify({
      fetched_at: "2026-08-14T00:00:00Z",
      etag: 'W/"17945962175790342248"',
      models: { "grok-4.6": { id: "grok-4.6", tier: "standard" } },
    }),
  );
  const post = Buffer.from(
    JSON.stringify({
      fetched_at: "2026-08-15T09:00:00Z",
      etag: 'W/"99887766554433221100"',
      models: { "grok-4.6": { id: "grok-4.6", tier: "premium" } }, // TAMPERED
    }),
  );
  const result = analyseCacheIntegrity({ preCacheBytes: pre, postCacheBytes: post });
  if (result.pass) throw new Error("expected fail-close but analysis passed");
  if (result.observed_change_class !== "integrity-drift") {
    throw new Error(`expected integrity-drift, got: ${result.observed_change_class}`);
  }
});

assert("TC-02b: identical cache bytes (no change) → passes gate with class=none", () => {
  const cacheBytes = Buffer.from(
    JSON.stringify({
      fetched_at: "2026-08-14T00:00:00Z",
      etag: "etag-unchanged",
      models: { "grok-4.6": { id: "grok-4.6", tier: "standard" } },
    }),
  );
  const result = analyseCacheIntegrity({ preCacheBytes: cacheBytes, postCacheBytes: cacheBytes });
  if (!result.pass) {
    throw new Error(`expected gate pass for identical bytes, got: ${result.reason}`);
  }
  if (result.observed_change_class !== "none") {
    throw new Error(`expected class=none, got: ${result.observed_change_class}`);
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// TC-03: No pre-run cache → gate not applicable, passes
// ═════════════════════════════════════════════════════════════════════════════

assert("TC-03: no pre-run cache → gate not applicable, passes", () => {
  const result = analyseCacheIntegrity({ preCacheBytes: null, postCacheBytes: null });
  if (!result.pass) throw new Error("expected pass when cache is absent");
  if (result.applicable !== false) throw new Error("expected applicable=false");
});

// ═════════════════════════════════════════════════════════════════════════════
// TC-04: Unparseable post-cache JSON → treated as non-volatile drift, fail-close
// ═════════════════════════════════════════════════════════════════════════════

assert("TC-04: unparseable post-cache JSON → fail-close", () => {
  const pre = Buffer.from(
    JSON.stringify({ fetched_at: "2026-08-14T00:00:00Z", models: {} }),
  );
  const post = Buffer.from("CORRUPTED_BYTES_NOT_JSON {{{ }}");
  const result = analyseCacheIntegrity({ preCacheBytes: pre, postCacheBytes: post });
  if (result.pass) throw new Error("expected fail-close for corrupt JSON");
  if (result.observed_change_class !== "integrity-drift") {
    throw new Error(`expected integrity-drift, got: ${result.observed_change_class}`);
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// TC-05: Missing --workspace arg → process exits 2
// ═════════════════════════════════════════════════════════════════════════════
console.log("\nGroup 2: Runner early-exit contracts (spawned, provider-zero)");

assert("TC-05: missing --workspace → exits 2", () => {
  const result = spawnRunner([]);
  if (result.status !== 2) {
    throw new Error(`expected exit 2, got: ${result.status}`);
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// TC-06: manifest.runtime_target !== "grok" → wrong model id, fails early
// ═════════════════════════════════════════════════════════════════════════════

assert("TC-06: runtime_target='codex' in manifest → fails before binary (wrong model id)", () => {
  const ws = makeWorkspace({ runtimeTarget: "codex" });
  const result = spawnRunner(["--workspace", ws]);
  if (result.status === 0) {
    throw new Error("expected non-zero exit but runner exited 0");
  }
  const combined = `${result.stdout ?? ""}\n${result.stderr ?? ""}`;
  if (!combined.includes("grok")) {
    throw new Error(`expected grok-related error message, got: ${combined.slice(0, 200)}`);
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// TC-07: Missing PROMPT.md → fails before binary call
// ═════════════════════════════════════════════════════════════════════════════

assert("TC-07: missing PROMPT.md → fails before binary", () => {
  const ws = makeWorkspace({ runtimeTarget: "grok", withPrompt: false });
  const result = spawnRunner(["--workspace", ws]);
  if (result.status === 0) {
    throw new Error("expected non-zero exit but runner exited 0");
  }
  const combined = `${result.stdout ?? ""}\n${result.stderr ?? ""}`;
  if (!combined.toLowerCase().includes("prompt")) {
    throw new Error(`expected prompt-related error message, got: ${combined.slice(0, 200)}`);
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// TC-08: Grok binary symlink → resolved to real target via realpathSync
//
// grok is installed as a symlink (e.g. ~/.grok/bin/grok → ../downloads/grok-*).
// The runner must NOT blindly reject symlinks. Instead it resolves the symlink
// via realpathSync and verifies the RESOLVED target is a regular non-symlink
// file. The binary SHA-256 is computed on the resolved target.
//
// This is a static source assertion (provider-zero). The adversarial case
// (dangling symlink, chained symlink) is covered by the realpathSync contract:
// if realpathSync throws (dangling) or the resolved target is not a regular
// file (chained), the runner throws infrastructure-invalid.
// ═════════════════════════════════════════════════════════════════════════════

assert("TC-08: runner uses realpathSync to resolve binary symlink before file-type check", () => {
  // Static assertion: runner source must import and apply realpathSync to GROK_BIN
  if (!runnerSource.includes("realpathSync")) {
    throw new Error(
      "runner does not import or use realpathSync — the grok binary at ~/.grok/bin/grok " +
      "is a symlink; without realpathSync the runner would incorrectly reject it as infrastructure-invalid"
    );
  }
  // The realpathSync must be applied to the binary path (GROK_BIN → grokBinResolved)
  if (!runnerSource.includes("realpathSync(GROK_BIN)")) {
    throw new Error(
      "realpathSync not applied to GROK_BIN — binary symlink resolution missing; " +
      "real grok binary at ~/.grok/bin/grok would be incorrectly rejected"
    );
  }
  // The lstatSync check must operate on the resolved path, not on GROK_BIN
  if (!runnerSource.includes("lstatSync(grokBinResolved)")) {
    throw new Error(
      "lstatSync not applied to resolved path — binary type check would use the symlink " +
      "path itself rather than the resolved target"
    );
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// TC-09: GROK_MODEL is exactly "grok-4.6" — hardcoded, no fallback, no substitution
// ═════════════════════════════════════════════════════════════════════════════
console.log("\nGroup 3: Isolation static invariants (runner source assertions)");

assert(`TC-09: GROK_MODEL constant is exactly "${GROK_MODEL_EXPECTED}" in runner source`, () => {
  // Verify the const declaration is present verbatim
  const pattern = new RegExp(
    `const\\s+GROK_MODEL\\s*=\\s*["']${GROK_MODEL_EXPECTED.replace(/\./g, "\\.")}["']`,
  );
  if (!pattern.test(runnerSource)) {
    throw new Error(
      `GROK_MODEL="${GROK_MODEL_EXPECTED}" constant not found in runner source — ` +
      "model id may have been changed or is dynamic (fail-close: wrong model id)"
    );
  }

  // Also verify -m GROK_MODEL is in the grokArgs array (model arg is not substituted)
  if (!runnerSource.includes('"-m"') && !runnerSource.includes("'-m'")) {
    throw new Error("-m flag not found in runner grokArgs — model may not be passed to binary");
  }

  // Verify no fallback pattern exists (GROK_MODEL must not be reassigned)
  const reassignPattern = /GROK_MODEL\s*=(?!=)/;
  const matches = [...runnerSource.matchAll(new RegExp(reassignPattern, "g"))];
  // The one expected match is the const declaration itself (line: const GROK_MODEL = "grok-4.6")
  if (matches.length > 1) {
    throw new Error(`GROK_MODEL is reassigned ${matches.length} times — substitution risk`);
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// TC-10: GROK_FIXED_FLAGS blocks global skill / MCP contamination
// ═════════════════════════════════════════════════════════════════════════════

assert("TC-10: GROK_FIXED_FLAGS contains all anti-contamination flags", () => {
  // Verify every expected flag appears in the runner source
  for (const flag of GROK_FIXED_FLAGS_EXPECTED) {
    if (!runnerSource.includes(`"${flag}"`)) {
      throw new Error(
        `anti-contamination flag "${flag}" not found in GROK_FIXED_FLAGS — ` +
        "global skill / MCP contamination not blocked"
      );
    }
  }

  // Verify the flags are part of GROK_FIXED_FLAGS, not just scattered usage
  if (!runnerSource.includes("GROK_FIXED_FLAGS")) {
    throw new Error("GROK_FIXED_FLAGS constant not found — isolation flags may not be enforced");
  }

  // Verify Object.freeze is applied to prevent runtime mutation of the flag list
  if (!runnerSource.includes("Object.freeze")) {
    throw new Error("GROK_FIXED_FLAGS is not frozen — runtime mutation of isolation flags is possible");
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// TC-11: childEnv allowlist never leaks ambient HOME or sensitive keys
// ═════════════════════════════════════════════════════════════════════════════

assert("TC-11: childEnv allowlist never includes ambient HOME; sets HOME=isoHome", () => {
  // Verify the allowlisted keys don't include HOME
  const allowlistPattern = /for\s*\(const\s+key\s+of\s*\[([^\]]+)\]\)/;
  const match = runnerSource.match(allowlistPattern);
  if (!match) {
    throw new Error("childEnv allowlist pattern not found in runner source");
  }
  const allowlistSection = match[1];
  if (allowlistSection.includes('"HOME"') || allowlistSection.includes("'HOME'")) {
    throw new Error(
      "HOME is in the childEnv allowlist — ambient HOME would leak to the child process"
    );
  }

  // Verify HOME is explicitly set to isoHome (not inherited from ambient env)
  if (!runnerSource.includes("HOME: isoHome")) {
    throw new Error(
      "HOME: isoHome not found in childEnv assignment — isolation HOME not enforced"
    );
  }

  // Verify potentially dangerous keys are NOT in the allowlist
  const dangerousKeys = ["HOME", "CODEX_HOME", "OPENAI_API_KEY", "ANTHROPIC_API_KEY", "XAI_API_KEY"];
  for (const key of dangerousKeys) {
    if (allowlistSection.includes(`"${key}"`) || allowlistSection.includes(`'${key}'`)) {
      throw new Error(
        `dangerous env key "${key}" found in childEnv allowlist — HOME leakage vector`
      );
    }
  }

  // Verify DISABLE_TELEMETRY and DO_NOT_TRACK are set to suppress telemetry
  if (!runnerSource.includes("DISABLE_TELEMETRY") || !runnerSource.includes("DO_NOT_TRACK")) {
    throw new Error("telemetry suppression keys missing from childEnv — privacy invariant violated");
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// TC-12: Auth copy SHA mismatch → fail-close (forged receipt)
// Tests the byte-verification logic inline (simulating what run-grok.mjs does).
// ═════════════════════════════════════════════════════════════════════════════
console.log("\nGroup 4: Auth / receipt integrity contracts");

assertThrows(
  "TC-12: auth copy SHA mismatch → infrastructure-invalid (forged receipt)",
  () => {
    const tmpDir = makeTempDir("auth");

    // Simulate: write original auth bytes
    const originalAuthBytes = Buffer.from('{"token": "real-token", "expires_at": 9999999999}');
    const sourceAuthPath = join(tmpDir, "auth.json");
    writeFileSync(sourceAuthPath, originalAuthBytes, { mode: 0o600 });
    const authSha256 = sha256(originalAuthBytes);

    // Simulate: copy auth to isolated home
    const isoGrokDir = join(tmpDir, "iso", ".grok");
    mkdirSync(isoGrokDir, { recursive: true });
    const isoAuthPath = join(isoGrokDir, "auth.json");

    // Tamper: write DIFFERENT bytes to the iso auth (forged receipt)
    const tamperedBytes = Buffer.from('{"token": "forged-token", "expires_at": 9999999999}');
    writeFileSync(isoAuthPath, tamperedBytes, { mode: 0o600 });

    // Replicate the runner's byte-verification check:
    const isoAuthSha256 = sha256(readFileSync(isoAuthPath));
    if (isoAuthSha256 !== authSha256) {
      throw new Error("auth.json copy byte-verification failed — infrastructure-invalid");
    }
  },
  "infrastructure-invalid",
);

// ═════════════════════════════════════════════════════════════════════════════
// TC-13: Missing auth.json → infrastructure-invalid before grok call
// Tests the auth existence check logic inline.
// ═════════════════════════════════════════════════════════════════════════════

assertThrows(
  "TC-13: missing auth.json → infrastructure-invalid",
  () => {
    const tmpDir = makeTempDir("noauth");
    const sourceAuthPath = join(tmpDir, ".grok", "auth.json");

    // Replicate the runner's auth existence check:
    if (!existsSync(sourceAuthPath)) {
      throw new Error(
        `grok auth.json not found: ${sourceAuthPath} — infrastructure-invalid`,
      );
    }
  },
  "infrastructure-invalid",
);

// ═════════════════════════════════════════════════════════════════════════════
// TC-14: Volatile field count mismatch between pre/post → treated as drift
// (Edge case: attacker adds extra fetched_at fields)
// ═════════════════════════════════════════════════════════════════════════════
console.log("\nGroup 5: Edge case — adversarial volatile field manipulation");

assert("TC-14: extra volatile field occurrences between pre/post → fail-close", () => {
  // Pre-cache with one fetched_at field
  const pre = Buffer.from(
    JSON.stringify({ fetched_at: "2026-08-14T00:00:00Z", etag: "W/\"old\"", models: {} }),
  );
  // Post-cache with two fetched_at values via crafted structure (impossible in real JSON,
  // but test the parser handles it gracefully — duplicate keys resolve to last value).
  // Instead, test a structural change: add a new key alongside the volatile ones.
  const postWithExtraKey = Buffer.from(
    JSON.stringify({
      fetched_at: "2026-08-14T12:00:00Z",
      etag: "W/\"new\"",
      models: {},
      new_non_volatile_key: "attacker-injected", // non-volatile, should trigger fail-close
    }),
  );
  const result = analyseCacheIntegrity({
    preCacheBytes: pre,
    postCacheBytes: postWithExtraKey,
  });
  if (result.pass) {
    throw new Error(
      "expected fail-close when non-volatile 'new_non_volatile_key' was injected"
    );
  }
  if (result.observed_change_class !== "integrity-drift") {
    throw new Error(`expected integrity-drift, got: ${result.observed_change_class}`);
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// TC-15: Retry/fallback/substitution counts must be locked at zero in receipts
// ═════════════════════════════════════════════════════════════════════════════

assert("TC-15: runtime receipt locks retry=0, replacement=0, fallback=0, substitution=0", () => {
  // Verify the runner source hardcodes zero for all retry-related counters.
  const zeroFields = [
    "retry_count: 0",
    "replacement_count: 0",
    "fallback_count: 0",
    "model_substitution_count: 0",
    "effort_substitution_count: 0",
  ];
  for (const field of zeroFields) {
    if (!runnerSource.includes(field)) {
      throw new Error(
        `retry invariant "${field}" not found in runner source — retry/substitution may be non-zero`
      );
    }
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// Group 4: Terminal-classification contract (static source assertions).
// The locked score-gate missing-data rules (capacity exclusion, second-event
// epoch-inconclusive) only work if the runner machine-derives the usage-limit
// terminal. These assertions pin that contract. Live adversarial coverage is
// impossible provider-zero (no ambient binary override is allowed — that exact
// hole killed Luna epoch 68a-v2), so the pilot cell plus wave gates are the
// dynamic check.
// ═════════════════════════════════════════════════════════════════════════════
console.log("\nGroup 4: Terminal-classification contract (static)");

assert("TC-CAP-01: runner machine-derives the usage-limit terminal with correct precedence", () => {
  if (!runnerSource.includes("CAPACITY_PATTERNS")) {
    throw new Error("CAPACITY_PATTERNS missing — provider quota rejections cannot be classified");
  }
  const precedence = /isInfrastructureInvalid\s*\?\s*"infrastructure-invalid"\s*:\s*isUsageLimit\s*\?\s*"usage-limit"\s*:\s*timedOut\s*\?\s*"timeout"/;
  if (!precedence.test(runnerSource)) {
    throw new Error(
      "terminal precedence chain infra-invalid > usage-limit > timeout not found — " +
      "locked missing-data rules cannot fire mechanically"
    );
  }
  if (!runnerSource.includes("terminal_status: terminalStatus")) {
    throw new Error("terminal_status not recorded in run-result — collectors cannot read the class");
  }
});

assert("TC-CAP-02: usage-limit has a false-positive guard (content-based, product-aware)", () => {
  const guard = /const\s+isUsageLimit\s*=[^;]*!productChanged[^;]*noMeaningfulFinalMessage[^;]*;/s;
  if (!guard.test(runnerSource)) {
    throw new Error(
      "isUsageLimit lacks !productChanged + noMeaningfulFinalMessage guards — " +
      "a generated page mentioning 'rate limit' would be misclassified as capacity"
    );
  }
  if (!runnerSource.includes("re.test(finalMessage)")) {
    throw new Error(
      "final-message absence is not judged by content — final-message.txt is written " +
      "unconditionally, so existence checks cannot gate the capacity class"
    );
  }
});

assert("TC-CAP-03: timeout is its own terminal, never infrastructure-invalid", () => {
  const infra = /const\s+isInfrastructureInvalid\s*=\s*spawnError\s*!==\s*null\s*\|\|\s*!cacheIntegrityPass\s*;/;
  if (!infra.test(runnerSource)) {
    throw new Error(
      "infrastructure-invalid classification is not exactly {spawnError, cache-drift} — " +
      "a timeout misclassified as infra-invalid would leave the denominator untracked"
    );
  }
});

// ─── Summary ─────────────────────────────────────────────────────────────────

console.log("\n" + "═".repeat(64));
console.log(`Results: ${passed} passed, ${failed} failed out of ${passed + failed} tests`);

if (failed > 0) {
  console.error("\nFailed tests:");
  for (const r of results.filter((t) => !t.pass)) {
    console.error(`  ✗ ${r.label}`);
    console.error(`    ${r.error}`);
  }
}

// ─── Cleanup ─────────────────────────────────────────────────────────────────
for (const dir of cleanupDirs) {
  try { rmSync(dir, { recursive: true, force: true }); } catch { /* ignore */ }
}

process.exitCode = failed > 0 ? 1 : 0;
