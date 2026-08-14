import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  chmodSync,
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  inspectCodexModelEffortContract,
} from "../../../benchmarks/ui-resolve-bench/scripts/codex-tool-mode-contract.mjs";
import {
  treeManifest,
} from "../../../benchmarks/ui-resolve-bench/scripts/_lib.mjs";

const RUN_CODEX = resolve("benchmarks/ui-resolve-bench/scripts/run-codex.mjs");

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function nativePackageTarget() {
  const target = {
    "darwin/arm64": ["codex-darwin-arm64", "aarch64-apple-darwin", "codex"],
    "darwin/x64": ["codex-darwin-x64", "x86_64-apple-darwin", "codex"],
    "linux/arm64": ["codex-linux-arm64", "aarch64-unknown-linux-musl", "codex"],
    "linux/x64": ["codex-linux-x64", "x86_64-unknown-linux-musl", "codex"],
    "win32/arm64": ["codex-win32-arm64", "aarch64-pc-windows-msvc", "codex.exe"],
    "win32/x64": ["codex-win32-x64", "x86_64-pc-windows-msvc", "codex.exe"],
  }[`${process.platform}/${process.arch}`];
  if (!target) throw new Error(`unsupported test platform: ${process.platform}/${process.arch}`);
  return target;
}

function executable(path, source) {
  writeFileSync(path, source, "utf8");
  chmodSync(path, 0o755);
  return path;
}

function exactRunFixture({ observedVersion = "9.9.9", expectedCliVersion = "9.9.9", initialCacheClientVersion = expectedCliVersion, removeExecutionCache = false, mutateExecutionCache = false, mutateExecutionCacheField = null, refreshFetchedAt = false, refreshFetchedAtWithFormattingRewrite = false, includeCodex0147AppsDefaults = false } = {}) {
  const root = realpathSync(mkdtempSync(join(tmpdir(), "omd-run-codex-exact-")));
  const matrixRoot = join(root, "matrix");
  const workspace = join(matrixRoot, "cell-1");
  const benchmark = join(workspace, ".benchmark");
  const sourceHome = join(root, "immutable-codex-source");
  mkdirSync(benchmark, { recursive: true });
  mkdirSync(sourceHome, { recursive: true });
  writeFileSync(join(workspace, "index.html"), "<!doctype html><title>fixture</title>\n");
  writeFileSync(join(benchmark, "PROMPT.md"), "Make no product changes.\n");
  writeFileSync(join(sourceHome, "auth.json"), "{\"auth\":true}\n");

  const codex0147AppsDefaults = { "gpt-5.6-sol": true, "gpt-5.6-sol-wm": true, "gpt-5.6-terra": true, "gpt-5.6-luna": true, "gpt-5.5": true, "gpt-5.4": true, "gpt-5.4-mini": true, "gpt-5.3-codex-spark": false, "codex-auto-review": false };
  const cache = {
    fetched_at: "2026-08-09T05:33:00Z",
    client_version: initialCacheClientVersion,
    models: [{
      slug: "gpt-test-exact",
      default_reasoning_level: "medium",
      supported_reasoning_levels: [
        { effort: "low", description: "low" },
        { effort: "medium", description: "medium" },
        { effort: "high", description: "high" },
      ],
      tool_mode: "function",
    }, ...(includeCodex0147AppsDefaults ? Object.entries(codex0147AppsDefaults).map(([slug, include_apps_usage_instructions]) => ({ slug, tool_mode: "function", include_apps_usage_instructions })) : [])],
  };
  const cacheBytes = Buffer.from(`${JSON.stringify(cache, null, 2)}\n`);
  const cachePath = join(sourceHome, "models_cache.json");
  writeFileSync(cachePath, cacheBytes);
  const modelCatalogPath = join(sourceHome, "model_catalog.json");
  const modelCatalogBytes = Buffer.from(`${JSON.stringify({ models: cache.models }, null, 2)}\n`);
  writeFileSync(modelCatalogPath, modelCatalogBytes);
  const modelInspection = inspectCodexModelEffortContract(
    ["gpt-test-exact"],
    { OMD_BENCH_AUTH_CODEX_HOME: sourceHome },
  );
  expect(modelInspection.ready).toBe(true);

  const [packageName, targetTriple, executableName] = nativePackageTarget();
  const packageRoot = join(root, "node_modules", "@openai", "codex");
  const nativePackageRoot = join(root, "node_modules", "@openai", packageName);
  const wrapper = join(packageRoot, "bin", "codex.js");
  const native = join(nativePackageRoot, "vendor", targetTriple, "bin", executableName);
  mkdirSync(join(packageRoot, "bin"), { recursive: true });
  mkdirSync(join(nativePackageRoot, "vendor", targetTriple, "bin"), { recursive: true });
  writeFileSync(join(packageRoot, "package.json"), JSON.stringify({
    name: "@openai/codex",
    version: observedVersion,
    type: "module",
  }));
  writeFileSync(join(nativePackageRoot, "package.json"), JSON.stringify({
    name: `@openai/${packageName}`,
    version: observedVersion,
  }));
  executable(native, `#!/usr/bin/env node
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
if (process.argv[2] === "--version") {
  process.stdout.write("codex-cli ${observedVersion}\\n");
  process.exit(0);
}
const args = process.argv.slice(2);
const workspace = args[args.indexOf("--cd") + 1];
const finalPath = args[args.indexOf("--output-last-message") + 1];
if (${JSON.stringify(removeExecutionCache)}) {
  unlinkSync(join(process.env.CODEX_HOME, "models_cache.json"));
}
if (${JSON.stringify(mutateExecutionCache)}) {
  writeFileSync(join(process.env.CODEX_HOME, "models_cache.json"), JSON.stringify({models:[]}));
}
if (${JSON.stringify(mutateExecutionCacheField)} === "semantic") {
  const cachePath = join(process.env.CODEX_HOME, "models_cache.json");
  const cache = JSON.parse(readFileSync(cachePath, "utf8"));
  cache.unexpected_stable_metadata = "drift";
  writeFileSync(cachePath, JSON.stringify(cache));
}
if (${JSON.stringify(mutateExecutionCacheField)} === "profile") {
  const cachePath = join(process.env.CODEX_HOME, "models_cache.json");
  const cache = JSON.parse(readFileSync(cachePath, "utf8"));
  cache.models[0].tool_mode = "mutated";
  writeFileSync(cachePath, JSON.stringify(cache));
}
if (${JSON.stringify(mutateExecutionCacheField)} === "client") {
  const cachePath = join(process.env.CODEX_HOME, "models_cache.json");
  const cache = JSON.parse(readFileSync(cachePath, "utf8"));
  cache.client_version = "9.9.10-drift";
  writeFileSync(cachePath, JSON.stringify(cache));
}
if (${JSON.stringify(mutateExecutionCacheField)} === "luna-client-profile-upgrade") {
  const cachePath = join(process.env.CODEX_HOME, "models_cache.json");
  const cache = JSON.parse(readFileSync(cachePath, "utf8"));
  cache.client_version = "0.147.0";
  cache.models[0].token_budget = 128000;
  cache.models[0].base_instructions = "changed provider instructions";
  writeFileSync(cachePath, JSON.stringify(cache));
}
if (${JSON.stringify(mutateExecutionCacheField)} === "apps-default") {
  const cachePath = join(process.env.CODEX_HOME, "models_cache.json");
  const cache = JSON.parse(readFileSync(cachePath, "utf8"));
  const luna = cache.models.find((profile) => profile.slug === "gpt-5.6-luna");
  luna.include_apps_usage_instructions = false;
  writeFileSync(cachePath, JSON.stringify(cache));
}
if (${JSON.stringify(refreshFetchedAt)}) {
  const cachePath = join(process.env.CODEX_HOME, "models_cache.json");
  const source = readFileSync(cachePath, "utf8");
  writeFileSync(cachePath, source.replace(/("fetched_at"\\s*:\\s*)"[^"]*"/, '$1"2026-08-13T09:49:00Z"'));
}
if (${JSON.stringify(refreshFetchedAtWithFormattingRewrite)}) {
  const cachePath = join(process.env.CODEX_HOME, "models_cache.json");
  const cache = JSON.parse(readFileSync(cachePath, "utf8"));
  cache.fetched_at = "2026-08-13T09:49:00Z";
  writeFileSync(cachePath, JSON.stringify(cache));
}
writeFileSync(join(workspace, ".benchmark", "fake-codex-invocation.json"), JSON.stringify({
  args,
  HOME: process.env.HOME,
  CODEX_HOME: process.env.CODEX_HOME,
  controller_env: Object.fromEntries(Object.entries(process.env).filter(([key]) => key.startsWith("OMD_")).sort(([a], [b]) => a.localeCompare(b))),
}));
writeFileSync(finalPath, "done\\n");
process.stdout.write(JSON.stringify({ type: "turn.completed", model: "gpt-test-exact", usage: { input_tokens: 7, output_tokens: 3 } }) + "\\n");
`);
  executable(wrapper, `#!/usr/bin/env node
import { spawnSync } from "node:child_process";
const result = spawnSync(${JSON.stringify(native)}, process.argv.slice(2), {
  env: process.env,
  stdio: "inherit",
});
process.exit(result.status ?? 1);
`);

  const productTree = treeManifest(workspace, { ignore: [".benchmark"] });
  writeFileSync(join(benchmark, "manifest.json"), JSON.stringify({
    runtime_target: "codex",
    task: { id: "exact-runtime-fixture" },
    variant: { id: "exact-runtime-fixture" },
    workspace: {
      initial_sha256: productTree.sha256,
      product_initial_sha256: productTree.sha256,
      product_initial_files: productTree.files,
      product_ignore: [".benchmark"],
    },
  }));
  const cell = {
    id: "cell-1",
    runtime: "codex",
    model_id: "gpt-test-exact",
    effort: "high",
    browser_execution: { require_browser_proof: false },
  };
  writeFileSync(join(benchmark, "matrix-cell.json"), JSON.stringify(cell));
  const snapshot = {
    enforcement_mode: "exact-runtime-per-invocation",
    auth_source_home: sourceHome,
    auth_json_source_path: join(sourceHome, "auth.json"),
    auth_json_source_mode: "immutable-snapshot-only",
    auth_json_sha256: sha256(readFileSync(join(sourceHome, "auth.json"))),
    auth_json_mode: "isolated-copy-before-provider-execution",
    mutable_auth_fallback_allowed: false,
    models_cache_source_path: cachePath,
    models_cache_source_mode: "immutable-snapshot-only",
    models_cache_mode: "immutable-copy-before-provider-execution",
    models_cache_sha256: sha256(cacheBytes),
    models_cache_bytes: cacheBytes.length,
    mutable_models_cache_fallback_allowed: false,
    models_cache_role: "provenance-only-not-execution-authority",
    model_catalog_source_path: modelCatalogPath,
    model_catalog_source_mode: "immutable-snapshot-only",
    model_catalog_mode: "isolated-copy-before-provider-execution",
    model_catalog_sha256: sha256(modelCatalogBytes),
    model_catalog_bytes: modelCatalogBytes.length,
    mutable_model_catalog_fallback_allowed: false,
    model_catalog_role: "execution-model-authority",
    cli_cache_client_version_policy: "require-exact-match",
    cli_cache_client_version_mismatch_justification: null,
    codex_cli: {
      executable_path: wrapper,
      binary_sha256: sha256(readFileSync(wrapper)),
      native_executable_path: native,
      native_binary_sha256: sha256(readFileSync(native)),
      version: expectedCliVersion,
    },
  };
  writeFileSync(join(matrixRoot, "RUN-MATRIX.locked.json"), JSON.stringify({
    codex_catalog_snapshot_contract: snapshot,
    codex_model_effort_contract: modelInspection.contract,
    lock_manifest: {
      codex_catalog_snapshot_contract_sha256: sha256(JSON.stringify(snapshot)),
      codex_model_effort_contract_sha256: sha256(JSON.stringify(modelInspection.contract)),
    },
    cells: [cell],
  }));
  return {
    root,
    workspace,
    benchmark,
    sourceHome,
    cacheBytes,
    modelCatalogPath,
    modelCatalogBytes,
    wrapper,
    native,
    snapshot,
  };
}

function runFixture(fixture, extra = [], envOverrides = {}) {
  return spawnSync(process.execPath, [
    RUN_CODEX,
    "--workspace", fixture.workspace,
    "--model", "gpt-test-exact",
    "--reasoning", "high",
    "--timeout-ms", "10000",
    ...extra,
  ], {
    cwd: resolve("."),
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024,
    env: {
      ...process.env,
      OMD_BENCH_AUTH_CODEX_HOME: fixture.sourceHome,
      OMD_BENCH_CODEX_BIN: fixture.wrapper,
      ...envOverrides,
    },
  });
}

function configureOmdController(fixture) {
  const execution = resolve(fixture.workspace, "..");
  const manifestPath = join(fixture.benchmark, "manifest.json"); const manifest = JSON.parse(readFileSync(manifestPath));
  manifest.variant.id = "omd-autopilot-v2"; manifest.task.id = "neighborhood-library-landing"; writeFileSync(manifestPath, JSON.stringify(manifest));
  const staging = join(execution, "omd-external-staging"); const runtime = join(execution, "authority-controller-runtime"); const executablePath = join(runtime, "scripts/activate-autopilot-design-system.cjs");
  mkdirSync(staging); mkdirSync(join(runtime, "scripts"), { recursive: true }); writeFileSync(executablePath, "// controller\n");
  const receiptPath = join(execution, "OMD-AUTHORITY-CONTROLLER.json"); const activationSha = "b".repeat(64); const runDir = ".omd/runs/neighborhood-library";
  const writeReceipt = (controllerExecutable = executablePath, boundActivationSha = activationSha) => {
    writeFileSync(receiptPath, JSON.stringify({ kind: "omd-autopilot-external-authority-controller-activation", scope: { project_workspace: fixture.workspace, run_dir: runDir, controller_executable: controllerExecutable }, activation: { sha256: boundActivationSha } }));
  };
  writeReceipt();
  const env = {
    OMD_BENCH_EXTERNAL_STAGING_ROOT: staging, OMD_BENCH_COMPILED_CORE_PACKAGE: join(staging, "compiled-core"), OMD_BENCH_CORE_CHECKPOINT: join(staging, "project-adoption-checkpoint.json"),
    OMD_AUTHORITY_CONTROLLER_RECEIPT: receiptPath, OMD_AUTHORITY_CONTROLLER_RECEIPT_SHA256: sha256(readFileSync(receiptPath)), OMD_AUTHORITY_CONTROLLER_ACTIVATION_SHA256: activationSha,
    OMD_AUTHORITY_CONTROLLER_RUN_DIR: runDir, OMD_AUTHORITY_CONTROLLER_EXECUTABLE: executablePath,
  };
  return { execution, staging, runtime, executablePath, receiptPath, activationSha, runDir, env, writeReceipt, args: ["--disable-plugin-skill-search", "--additional-writable-root", staging] };
}

describe("run-codex exact catalog/runtime invocation", () => {
  it("forwards only exact receipt-bound OmD controller bindings into the isolated Codex shell", () => {
    const fixture = exactRunFixture(); const controller = configureOmdController(fixture); const controllerEnv = { ...controller.env, OMD_UNRELATED_SECRET: "must-not-forward" };
    const executed = runFixture(fixture, controller.args, controllerEnv);
    expect(executed.status, executed.stderr).toBe(0);
    const invocation = JSON.parse(readFileSync(join(fixture.benchmark, "fake-codex-invocation.json")));
    expect(invocation.controller_env).toMatchObject(Object.fromEntries(Object.entries(controllerEnv).filter(([key]) => key !== "OMD_UNRELATED_SECRET")));
    expect(invocation.controller_env.OMD_UNRELATED_SECRET).toBeUndefined();
    expect(invocation.controller_env.OMD_BENCH_CODEX_BIN).toBeUndefined();
  });

  it("fails before provider execution when one required OmD controller binding is missing", () => {
    const fixture = exactRunFixture(); const controller = configureOmdController(fixture); const env = { ...controller.env }; delete env.OMD_AUTHORITY_CONTROLLER_RUN_DIR;
    const executed = runFixture(fixture, controller.args, env);
    expect(executed.status).not.toBe(0); expect(executed.stderr).toContain("requires the exact preregistered environment bindings");
    expect(existsSync(join(fixture.benchmark, "fake-codex-invocation.json"))).toBe(false); expect(existsSync(join(fixture.benchmark, "run-result.json"))).toBe(false);
  });

  it("fails before provider execution on stale receipt or activation hashes", () => {
    for (const stale of ["receipt", "activation"]) {
      const fixture = exactRunFixture(); const controller = configureOmdController(fixture); const env = { ...controller.env };
      if (stale === "receipt") env.OMD_AUTHORITY_CONTROLLER_RECEIPT_SHA256 = "f".repeat(64);
      else env.OMD_AUTHORITY_CONTROLLER_ACTIVATION_SHA256 = "e".repeat(64);
      const executed = runFixture(fixture, controller.args, env);
      expect(executed.status).not.toBe(0); expect(executed.stderr).toContain("differs from the execution receipt/add-dir contract");
      expect(existsSync(join(fixture.benchmark, "fake-codex-invocation.json"))).toBe(false); expect(existsSync(join(fixture.benchmark, "run-result.json"))).toBe(false);
    }
  });

  it("fails before provider execution when the receipt points to a controller outside the execution-owned runtime", () => {
    const fixture = exactRunFixture(); const controller = configureOmdController(fixture); const outside = join(controller.execution, "outside-controller.cjs"); writeFileSync(outside, "// outside\n");
    controller.writeReceipt(outside); const env = { ...controller.env, OMD_AUTHORITY_CONTROLLER_EXECUTABLE: outside, OMD_AUTHORITY_CONTROLLER_RECEIPT_SHA256: sha256(readFileSync(controller.receiptPath)) };
    const executed = runFixture(fixture, controller.args, env);
    expect(executed.status).not.toBe(0); expect(executed.stderr).toContain("differs from the execution receipt/add-dir contract");
    expect(existsSync(join(fixture.benchmark, "fake-codex-invocation.json"))).toBe(false); expect(existsSync(join(fixture.benchmark, "run-result.json"))).toBe(false);
  });

  it("does not forward arbitrary controller bindings for a non-OmD invocation", () => {
    const fixture = exactRunFixture(); const arbitrary = { OMD_AUTHORITY_CONTROLLER_EXECUTABLE: "/tmp/forged-controller.cjs", OMD_AUTHORITY_CONTROLLER_RUN_DIR: ".omd/runs/forged", OMD_BENCH_EXTERNAL_STAGING_ROOT: "/tmp/forged-staging" };
    const executed = runFixture(fixture, [], arbitrary); expect(executed.status, executed.stderr).toBe(0);
    const invocation = JSON.parse(readFileSync(join(fixture.benchmark, "fake-codex-invocation.json")));
    for (const key of Object.keys(arbitrary)) expect(invocation.controller_env[key]).toBeUndefined();
  });
  it("passes the explicit plugin and dynamic skill-search disable boundary to Codex", () => {
    const fixture = exactRunFixture();
    const executed = runFixture(fixture, ["--disable-plugin-skill-search"]);
    expect(executed.status, executed.stderr).toBe(0);
    const invocation = JSON.parse(readFileSync(join(fixture.benchmark, "fake-codex-invocation.json"), "utf8"));
    expect(invocation.args).toEqual(expect.arrayContaining(["--disable", "plugins", "--disable", "skill_search"]));
    const result = JSON.parse(readFileSync(join(fixture.benchmark, "run-result.json"), "utf8"));
    expect(result.runtime.plugin_skill_search_disabled).toBe(true);
  });

  it("uses the same explicit external isolated home before and after a Luna-style invocation", () => {
    const fixture = exactRunFixture();
    // A Luna materialized workspace has no sibling exact-runtime matrix contract.
    const liveCache = join(fixture.root, "mutable-live-home"); mkdirSync(liveCache);
    writeFileSync(join(liveCache, "models_cache.json"), JSON.stringify({ models: [{ slug: "wrong-live-model" }] }));
    const matrix = join(fixture.root, "matrix/RUN-MATRIX.locked.json");
    unlinkSync(matrix);
    const executed = runFixture(fixture, ["--disable-plugin-skill-search", "--expected-codex-version", fixture.snapshot.codex_cli.version, "--expected-wrapper-sha", fixture.snapshot.codex_cli.binary_sha256, "--expected-native-path", fixture.snapshot.codex_cli.native_executable_path, "--expected-native-sha", fixture.snapshot.codex_cli.native_binary_sha256], {
      HOME: fixture.sourceHome,
      CODEX_HOME: fixture.sourceHome,
      OMD_BENCH_AUTH_CODEX_HOME: liveCache,
    });
    expect(executed.status, executed.stderr).toBe(0);
    const result = JSON.parse(readFileSync(join(fixture.benchmark, "run-result.json"), "utf8"));
    expect(result.runtime.auth_mode).toBe("strict-external-isolated-home");
    expect(result.runtime.codex_home).toBe(fixture.sourceHome);
    expect(result.runtime.model_tool_mode_evidence.cache_sha256).toBe(sha256(fixture.cacheBytes));
    expect(result.runtime.model_tool_mode_evidence.auth_source_before_run.cache_sha256).toBe(sha256(fixture.cacheBytes));
  });

  it("fails closed after preserving post-cache bytes and successful raw completion when the cache becomes invalid", () => {
    const fixture = exactRunFixture({ mutateExecutionCache: true });
    const executed = runFixture(fixture, ["--disable-plugin-skill-search"]);
    expect(executed.status).not.toBe(0);
    expect(executed.stderr).toContain("cache/profile integrity changed during provider invocation");
    const result = JSON.parse(readFileSync(join(fixture.benchmark, "run-result.json"), "utf8"));
    expect(result.output.model_usage).toEqual([expect.objectContaining({ input_tokens: 7, output_tokens: 3 })]);
    expect(result.runtime.model_tool_mode_evidence.integrity).toMatchObject({
      applicable: true,
      pass: false,
      observed_change_class: "integrity-drift",
      post_provider_cache_artifact: { sha256: sha256(Buffer.from(JSON.stringify({ models: [] }))), bytes: Buffer.byteLength(JSON.stringify({ models: [] })) },
    });
    const artifact = result.runtime.model_tool_mode_evidence.integrity.post_provider_cache_artifact;
    expect(readFileSync(artifact.path, "utf8")).toBe(JSON.stringify({ models: [] }));
  });

  it.each(["semantic", "profile", "client"])("rejects a %s cache identity mutation with exact field-diff evidence", (field) => {
    const fixture = exactRunFixture({ mutateExecutionCacheField: field });
    const executed = runFixture(fixture, ["--disable-plugin-skill-search"]);
    expect(executed.status).not.toBe(0);
    const result = JSON.parse(readFileSync(join(fixture.benchmark, "run-result.json"), "utf8"));
    const integrity = result.runtime.model_tool_mode_evidence.integrity;
    expect(integrity).toMatchObject({ applicable: true, pass: false, observed_change_class: "integrity-drift" });
    if (field === "semantic") expect(integrity.comparisons.semantic_sha256.match).toBe(false);
    if (field === "profile") {
      expect(integrity.comparisons.model_profile_sha256.match).toBe(false);
      expect(integrity.comparisons.tool_mode.match).toBe(false);
    }
    if (field === "client") expect(integrity.comparisons.client_version.match).toBe(false);
    expect(integrity.post_provider_cache_artifact.sha256).toMatch(/^[a-f0-9]{64}$/);
  });

  it("rejects the observed 0.146.1 to 0.147.0-style client plus Luna profile-content drift", () => {
    const fixture = exactRunFixture({ observedVersion: "0.146.1", expectedCliVersion: "0.146.1", mutateExecutionCacheField: "luna-client-profile-upgrade" });
    const executed = runFixture(fixture, ["--disable-plugin-skill-search"]);
    expect(executed.status).not.toBe(0);
    const integrity = JSON.parse(readFileSync(join(fixture.benchmark, "run-result.json"), "utf8"))
      .runtime.model_tool_mode_evidence.integrity;
    expect(integrity).toMatchObject({
      pass: false,
      observed_change_class: "integrity-drift",
      comparisons: {
        client_version: { after: "0.147.0", match: false },
        model_profile_sha256: { match: false },
        semantic_sha256: { match: false },
        tool_mode: { match: true },
      },
    });
  });

  it("accepts an admitted cache with the exact nine Codex 0.147 app-usage defaults and rejects any provider drift", () => {
    const admitted = exactRunFixture({ observedVersion: "0.147.0", expectedCliVersion: "0.147.0", includeCodex0147AppsDefaults: true });
    const completed = runFixture(admitted, ["--disable-plugin-skill-search"]);
    expect(completed.status, completed.stderr).toBe(0);
    expect(JSON.parse(readFileSync(join(admitted.benchmark, "run-result.json"), "utf8")).runtime.model_tool_mode_evidence.integrity)
      .toMatchObject({ pass: true, observed_change_class: "none", comparisons: { semantic_sha256: { match: true }, model_profile_sha256: { match: true }, client_version: { match: true } } });

    const drifted = exactRunFixture({ observedVersion: "0.147.0", expectedCliVersion: "0.147.0", includeCodex0147AppsDefaults: true, mutateExecutionCacheField: "apps-default" });
    const rejected = runFixture(drifted, ["--disable-plugin-skill-search"]);
    expect(rejected.status).not.toBe(0);
    expect(JSON.parse(readFileSync(join(drifted.benchmark, "run-result.json"), "utf8")).runtime.model_tool_mode_evidence.integrity)
      .toMatchObject({ pass: false, reason: "semantic-profile-client-or-tool-mode-drift", observed_change_class: "integrity-drift", comparisons: { semantic_sha256: { match: false } } });
  });

  it("allows only a volatile fetched_at refresh while retaining the admitted cache identity", () => {
    const fixture = exactRunFixture({ refreshFetchedAt: true });
    const executed = runFixture(fixture, ["--disable-plugin-skill-search"]);
    expect(executed.status, executed.stderr).toBe(0);
    const result = JSON.parse(readFileSync(join(fixture.benchmark, "run-result.json"), "utf8"));
    expect(result.runtime.model_tool_mode_evidence.cache_sha256).toBe(sha256(fixture.cacheBytes));
    expect(result.runtime.model_tool_mode_evidence.execution_home_post_run.cache_sha256)
      .not.toBe(sha256(fixture.cacheBytes));
    expect(result.runtime.model_tool_mode_evidence.execution_home_post_run.cache_semantic_sha256)
      .toBe(result.runtime.model_tool_mode_evidence.auth_source_before_run.cache_semantic_sha256);
    expect(result.runtime.model_tool_mode_evidence.integrity).toMatchObject({
      applicable: true,
      pass: true,
      observed_change_class: "volatile-only",
      allowed_volatile_fields: ["fetched_at"],
      comparisons: { fetched_at: { match: false }, semantic_sha256: { match: true }, model_profile_sha256: { match: true }, client_version: { match: true }, tool_mode: { match: true } },
      post_provider_cache_artifact: { sha256: expect.stringMatching(/^[a-f0-9]{64}$/), bytes: expect.any(Number) },
      volatile_raw_difference_proof: { pass: true, reason: null, before_token_occurrences: 1 },
    });
  });

  it("rejects a fetched_at refresh that also rewrites raw cache formatting", () => {
    const fixture = exactRunFixture({ refreshFetchedAtWithFormattingRewrite: true });
    const executed = runFixture(fixture, ["--disable-plugin-skill-search"]);
    expect(executed.status).not.toBe(0);
    const integrity = JSON.parse(readFileSync(join(fixture.benchmark, "run-result.json"), "utf8"))
      .runtime.model_tool_mode_evidence.integrity;
    expect(integrity).toMatchObject({
      pass: false,
      reason: "unapproved-nonvolatile-byte-drift",
      observed_change_class: "integrity-drift",
      volatile_raw_difference_proof: { pass: false, reason: "raw-bytes-differ-outside-fetched-at-value" },
      comparisons: { semantic_sha256: { match: true }, fetched_at: { match: false } },
    });
  });

  it("isolates a bounded repair prompt and its runtime artifacts", () => {
    const fixture = exactRunFixture();
    mkdirSync(join(fixture.benchmark, "repair-prompts"), { recursive: true });
    writeFileSync(join(fixture.benchmark, "repair-prompts/repair-1.md"), "Continue the same mission.\n");
    const executed = runFixture(fixture, ["--artifact-suffix", "repair-1"]);
    expect(executed.status, executed.stderr).toBe(0);
    expect(existsSync(join(fixture.benchmark, "run-result.json"))).toBe(false);
    expect(existsSync(join(fixture.benchmark, "attempts/repair-1/run-result.json"))).toBe(true);
    expect(existsSync(join(fixture.benchmark, "attempts/repair-1/events.jsonl"))).toBe(true);
    const replay = runFixture(fixture, ["--artifact-suffix", "repair-1"]);
    expect(replay.status).not.toBe(0);
    expect(replay.stderr).toContain("refusing to overwrite completed run");
  });

  it("uses only the copied exact cache and the verified wrapper/native CLI", () => {
    const fixture = exactRunFixture();
    const executed = runFixture(fixture);
    expect(executed.status, executed.stderr).toBe(0);
    const result = JSON.parse(readFileSync(join(fixture.benchmark, "run-result.json"), "utf8"));
    const invocation = JSON.parse(
      readFileSync(join(fixture.benchmark, "fake-codex-invocation.json"), "utf8"),
    );
    const isolatedHome = join(fixture.benchmark, "codex-home");
    const copiedCache = join(isolatedHome, "models_cache.json");
    const copiedAuth = join(isolatedHome, "auth.json");
    const copiedCatalog = join(isolatedHome, "model_catalog.json");
    expect(lstatSync(copiedCache).isSymbolicLink()).toBe(false);
    expect(readFileSync(copiedCache).equals(fixture.cacheBytes)).toBe(true);
    expect(lstatSync(copiedAuth).isSymbolicLink()).toBe(false);
    expect(sha256(readFileSync(copiedAuth))).toBe(fixture.snapshot.auth_json_sha256);
    expect(lstatSync(copiedCatalog).isSymbolicLink()).toBe(false);
    expect(readFileSync(copiedCatalog).equals(fixture.modelCatalogBytes)).toBe(true);
    expect(invocation.HOME).toBe(isolatedHome);
    expect(invocation.CODEX_HOME).toBe(isolatedHome);
    expect(invocation.args).toContain(`model_catalog_json=${JSON.stringify(copiedCatalog)}`);
    expect(invocation.args.filter((arg) => arg.startsWith("model_catalog_json=")))
      .toEqual([`model_catalog_json=${JSON.stringify(copiedCatalog)}`]);
    expect(result.runtime).toMatchObject({
      agent_version: "9.9.9",
      binary_sha256: fixture.snapshot.codex_cli.binary_sha256,
      native_binary_sha256: fixture.snapshot.codex_cli.native_binary_sha256,
      codex_home: isolatedHome,
      model_requested: "gpt-test-exact",
      effort_requested: "high",
      auth_mode: "immutable-snapshot-copy",
      model_catalog_authority: {
        schema_version: "0.1",
        mode: "immutable-local-model-catalog-json",
        config_key: "model_catalog_json",
        source: {
          path: fixture.modelCatalogPath,
          sha256: fixture.snapshot.model_catalog_sha256,
          bytes: fixture.modelCatalogBytes.length,
          source_mode: "immutable-snapshot-only",
        },
        isolated_copy: {
          path: copiedCatalog,
          sha256: fixture.snapshot.model_catalog_sha256,
          bytes: fixture.modelCatalogBytes.length,
          copy_mode: "isolated-regular-file",
        },
        selected_profile: expect.objectContaining({
          model_id: "gpt-test-exact",
          model_profile_sha256: expect.stringMatching(/^[a-f0-9]{64}$/),
          default_effort: "medium",
          supported_efforts: ["low", "medium", "high"],
        }),
        verified_before_provider_execution: true,
        mutable_fallback_allowed: false,
      },
    });
    expect(result.runtime.model_tool_mode_evidence.scope).toBe("execution-home-post-run");
    expect(result.runtime.model_tool_mode_evidence.cache_sha256)
      .toBe(fixture.snapshot.models_cache_sha256);
  });

  it("stops before the provider invocation when the observed CLI version drifts", () => {
    const fixture = exactRunFixture({ observedVersion: "9.9.8" });
    const executed = runFixture(fixture);
    expect(executed.status).not.toBe(0);
    expect(executed.stderr).toContain("CLI wrapper version drift");
    expect(existsSync(join(fixture.benchmark, "fake-codex-invocation.json"))).toBe(false);
    expect(existsSync(join(fixture.benchmark, "run-result.json"))).toBe(false);
  });

  it("stops before the provider invocation when local model catalog bytes drift", () => {
    const fixture = exactRunFixture();
    writeFileSync(fixture.modelCatalogPath, `${fixture.modelCatalogBytes.toString("utf8")}\n`);
    const executed = runFixture(fixture);
    expect(executed.status).not.toBe(0);
    expect(executed.stderr).toContain("model catalog source snapshot drift");
    expect(existsSync(join(fixture.benchmark, "fake-codex-invocation.json"))).toBe(false);
    expect(existsSync(join(fixture.benchmark, "run-result.json"))).toBe(false);
  });

  it("does not fall back to the source-home cache when the execution cache disappears", () => {
    const fixture = exactRunFixture({ removeExecutionCache: true });
    const executed = runFixture(fixture);
    expect(executed.status, executed.stderr).toBe(0);
    const result = JSON.parse(readFileSync(join(fixture.benchmark, "run-result.json"), "utf8"));
    expect(result.runtime.model_tool_mode_evidence).toMatchObject({
      scope: "execution-home-post-run",
      cache_sha256: null,
      model_profile_sha256: null,
    });
    expect(result.runtime.model_tool_mode_evidence.auth_source_before_run.cache_sha256)
      .toBe(fixture.snapshot.models_cache_sha256);
  });
});
