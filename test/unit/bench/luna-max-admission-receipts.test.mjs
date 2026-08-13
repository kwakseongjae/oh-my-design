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
    for (const dependency of ["codex-browser-sandbox-contract.mjs", "codex-tool-mode-contract.mjs"]) {
      cpSync(resolve("benchmarks/ui-resolve-bench/scripts", dependency), join(dirname(authority), dependency));
    }
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

function catalog({ max = true, clientVersion = "1.0" } = {}) {
  return Buffer.from(`${JSON.stringify({
    client_version: clientVersion,
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
  return {
    receipt_version: "codex-in-app-browser-identity-v0.1",
    browser: { type: "iab", browser_id: "iab", name: "Codex In-app Browser" },
    tab: { id: "tab-about-blank", url: "about:blank", title: "about:blank" },
    capture: {
      surface: "codex-in-app-browser-tool",
      method: "agent.browsers.get(iab)+tabs.new",
      cryptographic_identity_verified: false,
      statement: "Operator-attested Codex in-app Browser observation; not cryptographic browser identity.",
    },
    controller_launched_browser: false,
    tab_created_for_identity: true,
    navigation_calls: 0,
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 1,
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
    const codexCli = { wrapper: { path: "/fixture/codex.js", sha256: "1".repeat(64), version: "1.0" }, native: { path: "/fixture/codex", sha256: "2".repeat(64), version: "1.0" }, version: "1.0", provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 };
    const receipt = buildStaticCapabilityReceipt({ sourceCommit: "c".repeat(40), sourceAuthority: sourceAuthority(), catalogBytes: bytes, codexCli });
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
    expect(() => buildStaticCapabilityReceipt({ sourceCommit: "c".repeat(40), sourceAuthority: sourceAuthority(), catalogBytes: catalog({ max: false }), codexCli })).toThrow(/missing max effort/);
    expect(() => buildStaticCapabilityReceipt({ sourceCommit: "c".repeat(40), sourceAuthority: sourceAuthority(), catalogBytes: catalog({ clientVersion: "2.0" }), codexCli })).toThrow(/client version/);
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

  it("accepts one exact operator-attested Codex in-app Browser about:blank observation", () => {
    const telemetry = browserTelemetry();
    const bytes = Buffer.from(canonicalJson(telemetry));
    const receipt = buildBrowserIdentityReceipt({ sourceCommit: "e".repeat(40), sourceAuthority: sourceAuthority(), telemetryBytes: bytes, telemetry });
    expect(receipt).toMatchObject({
      kind: "codex-in-app-browser-identity-preflight",
      excluded_from_benchmark_denominator: true,
      browser: { type: "iab", browser_id: "iab", name: "Codex In-app Browser" },
      tab: { id: "tab-about-blank", url: "about:blank", title: "about:blank" },
      capture: { cryptographic_identity_verified: false },
      controller_launched_browser: false,
      tab_created_for_identity: true,
      navigation_calls: 0,
      provider_calls: 0,
      model_calls: 0,
      browser_calls: 1,
      network_calls: 0,
    });
  });

  it("rejects legacy, Chrome/extension, name, URL, launch, navigation, call, capture, and schema drift", () => {
    const mutations = [
      (value) => { value.receipt_version = "browser-harness-cli-page-info-v0.1"; },
      (value) => { value.browser.type = "chrome"; },
      (value) => { value.browser.type = "extension"; },
      (value) => { value.browser.name = "Codex Browser"; },
      (value) => { value.tab.url = "https://example.com"; },
      (value) => { value.tab.title = "New Tab"; },
      (value) => { value.controller_launched_browser = true; },
      (value) => { value.tab_created_for_identity = false; },
      (value) => { value.navigation_calls = 1; },
      (value) => { value.provider_calls = 1; },
      (value) => { value.model_calls = 1; },
      (value) => { value.browser_calls = 2; },
      (value) => { value.capture.cryptographic_identity_verified = true; },
      (value) => { value.capture.method = "browser-harness page_info"; },
      (value) => { value.browser.executable_path = "/tmp/chrome"; },
    ];
    for (const mutate of mutations) {
      const telemetry = browserTelemetry(); mutate(telemetry);
      expect(() => buildBrowserIdentityReceipt({ sourceCommit: "e".repeat(40), sourceAuthority: sourceAuthority(), telemetryBytes: Buffer.from(canonicalJson(telemetry)), telemetry }))
        .toThrow(/in-app browser|Codex in-app browser/i);
    }
  });

  it("removes the legacy audit-browser-identity command", () => {
    const fixture = fixtureRepo({ copyScript: true });
    const outputRoot = realpathSync(mkdtempSync(join(tmpdir(), "omd-luna-output-")));
    expect(() => execFileSync(process.execPath, [join(fixture.root, SCRIPT_PATH), "audit-browser-identity", "--source-commit", fixture.sourceCommit, "--out", join(outputRoot, "legacy.json")], {
      env: { ...process.env, OMD_ADMISSION_REPO_ROOT: fixture.root },
    })).toThrow();
  });

  it("CLI writes deterministic fresh static receipt and refuses overwrite or symlink input", () => {
    const fixture = fixtureRepo({ copyScript: true });
    const catalogPath = join(fixture.root, "catalog.json");
    const codexBin = realpathSync(execFileSync("which", ["codex"], { encoding: "utf8" }).trim());
    const codexVersion = execFileSync(codexBin, ["--version"], { encoding: "utf8" }).match(/codex-cli\s+([^\s]+)/i)?.[1];
    writeFileSync(catalogPath, catalog({ clientVersion: codexVersion }));
    git(fixture.root, "add", "catalog.json");
    git(fixture.root, "commit", "-qm", "catalog");
    fixture.sourceCommit = git(fixture.root, "rev-parse", "HEAD");
    const outputRoot = realpathSync(mkdtempSync(join(tmpdir(), "omd-luna-output-")));
    const output = join(outputRoot, "receipt.json");
    const cli = join(fixture.root, SCRIPT_PATH);
    execFileSync(process.execPath, [cli, "static-capability", "--source-commit", fixture.sourceCommit, "--catalog", catalogPath, "--codex-bin", codexBin, "--out", output], {
      env: { ...process.env, OMD_ADMISSION_REPO_ROOT: fixture.root },
    });
    const first = readFileSync(output, "utf8");
    expect(first).toBe(`${canonicalJson(JSON.parse(first))}\n`);
    expect(() => execFileSync(process.execPath, [cli, "static-capability", "--source-commit", fixture.sourceCommit, "--catalog", catalogPath, "--codex-bin", codexBin, "--out", output], {
      env: { ...process.env, OMD_ADMISSION_REPO_ROOT: fixture.root },
    })).toThrow();

    const alias = join(outputRoot, "catalog-alias.json");
    symlinkSync(catalogPath, alias);
    const other = join(outputRoot, "receipt-2.json");
    expect(() => execFileSync(process.execPath, [cli, "static-capability", "--source-commit", fixture.sourceCommit, "--catalog", alias, "--codex-bin", codexBin, "--out", other], {
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

    const browserRaw = join(outputRoot, "in-app-browser-raw.json");
    writeFileSync(browserRaw, `${canonicalJson(browserTelemetry())}\n`);
    const browserOutput = join(outputRoot, "in-app-browser-receipt.json");
    execFileSync(process.execPath, [cli, "audit-in-app-browser-identity", "--source-commit", fixture.sourceCommit, "--telemetry", browserRaw, "--out", browserOutput], {
      env: { ...process.env, OMD_ADMISSION_REPO_ROOT: fixture.root },
    });
    expect(JSON.parse(readFileSync(browserOutput, "utf8"))).toMatchObject({
      kind: "codex-in-app-browser-identity-preflight",
      browser: { type: "iab", name: "Codex In-app Browser" },
      tab: { url: "about:blank", title: "about:blank" },
      capture: { cryptographic_identity_verified: false },
      provider_calls: 0,
      model_calls: 0,
      browser_calls: 1,
      network_calls: 0,
    });
  });
});
