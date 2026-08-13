import { execFileSync } from "node:child_process";
import { createServer } from "node:http";
import {
  chmodSync,
  cpSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  CORE_SCHEMA_FILES,
  SCRIPT_PATH,
  assertSourceAuthority,
  buildBrowserIdentityReceipt,
  buildRuntimeAttributionReceipt,
  buildSchemaLivenessReceipt,
  buildStaticCapabilityReceipt,
  canonicalJson,
  sha256,
} from "../../../benchmarks/ui-resolve-bench/scripts/prepare-luna-max-admission-receipts.mjs";

const liveServers = [];
afterEach(async () => {
  await Promise.all(liveServers.splice(0).map((server) => new Promise((done) => server.close(done))));
});

function git(root, ...args) {
  return execFileSync("git", ["-C", root, ...args], { encoding: "utf8" }).trim();
}

function fixtureRepo({ withSchemas = false, copyScript = false } = {}) {
  const root = realpathSync(mkdtempSync(join(tmpdir(), "omd-luna-admission-")));
  git(root, "init", "-q");
  git(root, "config", "user.email", "bench@example.invalid");
  git(root, "config", "user.name", "Bench Test");
  const authorityPath = copyScript ? SCRIPT_PATH : "authority.mjs";
  const authority = join(root, authorityPath);
  mkdirSync(dirname(authority), { recursive: true });
  if (copyScript) {
    cpSync(resolve("benchmarks/ui-resolve-bench/scripts/prepare-luna-max-admission-receipts.mjs"), authority);
    chmodSync(authority, 0o755);
  } else writeFileSync(authority, "export const authority = true;\n");
  if (withSchemas) {
    const schemaRoot = join(root, "web/public/schema");
    mkdirSync(schemaRoot, { recursive: true });
    for (const name of CORE_SCHEMA_FILES) writeFileSync(join(schemaRoot, name), `${canonicalJson({ name })}\n`);
  }
  git(root, "add", ".");
  git(root, "commit", "-qm", "fixture");
  return { root, authorityPath, sourceCommit: git(root, "rev-parse", "HEAD") };
}

function catalog({ max = true } = {}) {
  return Buffer.from(`${JSON.stringify({
    models: [{
      slug: "gpt-5.6-luna",
      supported_reasoning_levels: max ? [{ effort: "high" }, { effort: "max" }] : [{ effort: "high" }],
    }],
  })}\n`);
}

function sourceAuthority() {
  return { path: SCRIPT_PATH, bytes: 42, sha256: "a".repeat(64) };
}

function runtimeTelemetry(overrides = {}) {
  const turnId = "019f-rollout-turn-1";
  const events = [
    { timestamp: "2026-08-13T07:00:00.000Z", type: "event_msg", payload: { type: "task_started", turn_id: turnId } },
    { timestamp: "2026-08-13T07:00:00.001Z", type: "turn_context", payload: { turn_id: turnId, model: "gpt-5.6-luna", effort: "max", cwd: "/tmp/bench" } },
    { timestamp: "2026-08-13T07:00:01.000Z", type: "event_msg", payload: { type: "token_count", info: { total_token_usage: { total_tokens: 42 } } } },
    { timestamp: "2026-08-13T07:00:02.000Z", type: "event_msg", payload: { type: "task_complete", turn_id: turnId, duration_ms: 2000 } },
  ];
  return Object.assign(events, overrides);
}

function browserTelemetry(overrides = {}) {
  const executablePath = realpathSync(process.execPath);
  const executableBytes = readFileSync(executablePath);
  const observed = {
    receipt_version: "browser-harness-cli-page-info-v0.1",
    browser_identity: {
      transport: "local-existing-chrome-cdp",
      name: "default-local-cdp",
      named_existing: true,
      available: true,
      launched_by_controller: false,
      tab_id: null,
      url: "http://127.0.0.1:3100/fixture",
      page_info: { url: "http://127.0.0.1:3100/fixture", w: 1440, h: 900 },
    },
  };
  return {
    receipt_version: "browser-harness-cli-page-info-v0.1",
    invocation: {
      transport: "local-existing-chrome-cdp",
      operation: "page_info",
      navigation_calls: 0,
      launched_browser: false,
      executable_path: executablePath,
      executable_bytes: executableBytes.length,
      executable_sha256: sha256(executableBytes),
    },
    raw_stdout: `${canonicalJson(observed)}\n`,
    raw_stderr: "",
    ...overrides,
  };
}

async function schemaServer(root, mutate = () => {}) {
  const server = createServer((request, response) => {
    const name = request.url?.split("/").pop();
    const state = { status: 200, contentType: "application/json; charset=utf-8", body: readFileSync(join(root, "web/public/schema", name)), headers: {} };
    mutate(state, name);
    response.writeHead(state.status, { "content-type": state.contentType, ...state.headers });
    response.end(state.body);
  });
  await new Promise((done) => server.listen(0, "127.0.0.1", done));
  liveServers.push(server);
  return `http://127.0.0.1:${server.address().port}/`;
}

describe("Luna Max admission receipts", () => {
  it("binds source authority to the exact clean HEAD and rejects dirty or drifting source", () => {
    const fixture = fixtureRepo();
    expect(assertSourceAuthority(fixture)).toMatchObject({ path: "authority.mjs" });
    writeFileSync(join(fixture.root, "dirty.txt"), "dirty\n");
    expect(() => assertSourceAuthority(fixture)).toThrow(/clean/);
    const second = fixtureRepo();
    expect(() => assertSourceAuthority({ ...second, sourceCommit: "f".repeat(40) })).toThrow(/source commit drift/);
  });

  it("creates controller-compatible zero-call static capability evidence", () => {
    const bytes = catalog();
    const receipt = buildStaticCapabilityReceipt({ sourceCommit: "c".repeat(40), sourceAuthority: sourceAuthority(), catalogBytes: bytes });
    expect(receipt).toMatchObject({
      kind: "codex-luna-max-static-runtime-capability",
      pass: true,
      runtime: { provider: "codex", model: "gpt-5.6-luna", effort: "max", catalog_sha256: sha256(bytes) },
      provider_calls: 0,
      model_calls: 0,
      browser_calls: 0,
      network_calls: 0,
    });
    expect(receipt.runtime.model_profile_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(() => buildStaticCapabilityReceipt({ sourceCommit: "c".repeat(40), sourceAuthority: sourceAuthority(), catalogBytes: catalog({ max: false }) })).toThrow(/missing max effort/);
  });

  it("verifies seven exact committed schemas over bounded local HTTP", async () => {
    const fixture = fixtureRepo({ withSchemas: true });
    const source = assertSourceAuthority(fixture);
    const baseUrl = await schemaServer(fixture.root);
    const receipt = await buildSchemaLivenessReceipt({ root: fixture.root, sourceCommit: fixture.sourceCommit, sourceAuthority: source, baseUrl });
    expect(receipt.schemas).toHaveLength(7);
    expect(receipt).toMatchObject({ provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 7 });
    expect(new Set(receipt.schemas.map((entry) => entry.name)).size).toBe(7);
  });

  it("fails schema liveness on content type, byte hash, and redirect", async () => {
    for (const mutation of [
      (state, name) => { if (name === CORE_SCHEMA_FILES[0]) state.contentType = "text/plain"; },
      (state, name) => { if (name === CORE_SCHEMA_FILES[0]) state.body = Buffer.from("{}\n"); },
      (state, name) => { if (name === CORE_SCHEMA_FILES[0]) { state.status = 302; state.headers.location = "/schema/elsewhere.json"; } },
    ]) {
      const fixture = fixtureRepo({ withSchemas: true });
      const baseUrl = await schemaServer(fixture.root, mutation);
      await expect(buildSchemaLivenessReceipt({ root: fixture.root, sourceCommit: fixture.sourceCommit, sourceAuthority: assertSourceAuthority(fixture), baseUrl })).rejects.toThrow(/content-type|byte\/hash|redirect/);
    }
  });

  it("derives exact one-turn Luna/max attribution from realistic raw Codex rollout events", () => {
    const telemetry = runtimeTelemetry();
    const bytes = Buffer.from(canonicalJson(telemetry));
    const receipt = buildRuntimeAttributionReceipt({ sourceCommit: "d".repeat(40), sourceAuthority: sourceAuthority(), telemetryBytes: bytes, telemetry });
    expect(receipt).toMatchObject({
      kind: "codex-luna-max-runtime-attribution-preflight",
      excluded_from_benchmark_denominator: true,
      runtime: { model: "gpt-5.6-luna", effort: "max", fallback_calls: 0 },
      provider_calls: 1,
      model_calls: 1,
      browser_calls: 0,
    });
  });

  it("rejects a second turn, fallback, selector drift, and caller-authored selector labels", () => {
    const duplicate = runtimeTelemetry();
    duplicate.push({ timestamp: "2026-08-13T07:00:03.000Z", type: "turn_context", payload: { turn_id: "turn-2", model: "gpt-5.6-luna", effort: "max" } });
    const fallback = runtimeTelemetry();
    fallback.push({ timestamp: "2026-08-13T07:00:01.500Z", type: "event_msg", payload: { type: "model_fallback", from: "gpt-5.6-luna", to: "other" } });
    const drift = runtimeTelemetry();
    drift[1].payload.effort = "high";
    const manual = {
      kind: "codex-provider-runtime-attribution-evidence",
      evidence_source: "provider-emitted",
      events: [
        { type: "provider_call", emitter: "codex-provider", call_id: "fake" },
        { type: "runtime_selector", emitter: "codex-provider", model: "gpt-5.6-luna", effort: "max" },
      ],
    };
    for (const telemetry of [duplicate, fallback, drift, manual]) {
      expect(() => buildRuntimeAttributionReceipt({ sourceCommit: "d".repeat(40), sourceAuthority: sourceAuthority(), telemetryBytes: Buffer.from(canonicalJson(telemetry)), telemetry })).toThrow(/exactly one|fallback|selector drift|non-rollout/);
    }
  });

  it("accepts one raw browser-harness page_info observation of an existing local CDP page", () => {
    const telemetry = browserTelemetry();
    const bytes = Buffer.from(canonicalJson(telemetry));
    const receipt = buildBrowserIdentityReceipt({ sourceCommit: "e".repeat(40), sourceAuthority: sourceAuthority(), telemetryBytes: bytes, telemetry });
    expect(receipt).toMatchObject({
      kind: "existing-browser-harness-cdp-preflight",
      excluded_from_benchmark_denominator: true,
      browser: { name: "default-local-cdp", transport: "local-existing-chrome-cdp", named_existing: true, launched_by_controller: false, navigation_calls: 0, url: "http://127.0.0.1:3100/fixture" },
      provider_calls: 0,
      model_calls: 0,
      browser_calls: 1,
    });
  });

  it("rejects invented, launched, navigated, remote, or malformed browser-harness evidence", () => {
    const noReceipt = browserTelemetry({ receipt_version: "self-asserted-v0" });
    const launched = browserTelemetry();
    launched.invocation.launched_browser = true;
    const navigated = browserTelemetry(); navigated.invocation.navigation_calls = 1;
    const remote = browserTelemetry();
    const remoteObserved = JSON.parse(remote.raw_stdout); remoteObserved.browser_identity.url = "https://example.com"; remoteObserved.browser_identity.page_info.url = "https://example.com"; remote.raw_stdout = canonicalJson(remoteObserved);
    const malformed = browserTelemetry(); malformed.raw_stdout = "not json";
    for (const telemetry of [noReceipt, launched, navigated, remote, malformed]) {
      expect(() => buildBrowserIdentityReceipt({ sourceCommit: "e".repeat(40), sourceAuthority: sourceAuthority(), telemetryBytes: Buffer.from(canonicalJson(telemetry)), telemetry })).toThrow(/raw browser-harness|invocation contract|existing local CDP|one JSON/);
    }
  });

  it("CLI writes deterministic fresh static receipt and refuses overwrite or symlink input", () => {
    const fixture = fixtureRepo({ copyScript: true });
    const catalogPath = join(fixture.root, "catalog.json");
    writeFileSync(catalogPath, catalog());
    git(fixture.root, "add", "catalog.json");
    git(fixture.root, "commit", "-qm", "catalog");
    fixture.sourceCommit = git(fixture.root, "rev-parse", "HEAD");
    const outputRoot = realpathSync(mkdtempSync(join(tmpdir(), "omd-luna-output-")));
    const output = join(outputRoot, "receipt.json");
    const cli = join(fixture.root, SCRIPT_PATH);
    execFileSync(process.execPath, [cli, "static-capability", "--source-commit", fixture.sourceCommit, "--catalog", catalogPath, "--out", output], {
      env: { ...process.env, OMD_ADMISSION_REPO_ROOT: fixture.root },
    });
    const first = readFileSync(output, "utf8");
    expect(first).toBe(`${canonicalJson(JSON.parse(first))}\n`);
    expect(() => execFileSync(process.execPath, [cli, "static-capability", "--source-commit", fixture.sourceCommit, "--catalog", catalogPath, "--out", output], {
      env: { ...process.env, OMD_ADMISSION_REPO_ROOT: fixture.root },
    })).toThrow();

    const alias = join(outputRoot, "catalog-alias.json");
    symlinkSync(catalogPath, alias);
    const other = join(outputRoot, "receipt-2.json");
    expect(() => execFileSync(process.execPath, [cli, "static-capability", "--source-commit", fixture.sourceCommit, "--catalog", alias, "--out", other], {
      env: { ...process.env, OMD_ADMISSION_REPO_ROOT: fixture.root },
    })).toThrow();

    const rollout = join(outputRoot, "rollout.jsonl");
    writeFileSync(rollout, `${runtimeTelemetry().map((event) => JSON.stringify(event)).join("\n")}\n`);
    const runtimeOutput = join(outputRoot, "runtime-receipt.json");
    execFileSync(process.execPath, [cli, "audit-runtime-attribution", "--source-commit", fixture.sourceCommit, "--telemetry", rollout, "--out", runtimeOutput], {
      env: { ...process.env, OMD_ADMISSION_REPO_ROOT: fixture.root },
    });
    expect(JSON.parse(readFileSync(runtimeOutput, "utf8"))).toMatchObject({
      kind: "codex-luna-max-runtime-attribution-preflight",
      runtime: { model: "gpt-5.6-luna", effort: "max" },
      provider_calls: 1,
      model_calls: 1,
    });
  });
});
