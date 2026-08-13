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

function exactRunFixture({ observedVersion = "9.9.9", removeExecutionCache = false, mutateExecutionCache = false, refreshFetchedAt = false } = {}) {
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

  const cache = {
    fetched_at: "2026-08-09T05:33:00Z",
    client_version: "9.9.9",
    models: [{
      slug: "gpt-test-exact",
      default_reasoning_level: "medium",
      supported_reasoning_levels: [
        { effort: "low", description: "low" },
        { effort: "medium", description: "medium" },
        { effort: "high", description: "high" },
      ],
      tool_mode: "function",
    }],
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
if (${JSON.stringify(refreshFetchedAt)}) {
  const cachePath = join(process.env.CODEX_HOME, "models_cache.json");
  const cache = JSON.parse(readFileSync(cachePath, "utf8"));
  cache.fetched_at = "2026-08-13T09:49:00Z";
  writeFileSync(cachePath, JSON.stringify(cache));
}
writeFileSync(join(workspace, ".benchmark", "fake-codex-invocation.json"), JSON.stringify({
  args,
  HOME: process.env.HOME,
  CODEX_HOME: process.env.CODEX_HOME,
}));
writeFileSync(finalPath, "done\\n");
process.stdout.write(JSON.stringify({ type: "response.completed", model: "gpt-test-exact" }) + "\\n");
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
      version: "9.9.9",
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

describe("run-codex exact catalog/runtime invocation", () => {
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

  it("fails when the strict isolated cache/profile mutates during the invocation", () => {
    const fixture = exactRunFixture({ mutateExecutionCache: true });
    const executed = runFixture(fixture, ["--disable-plugin-skill-search"]);
    expect(executed.status).not.toBe(0);
    expect(executed.stderr).toContain("cache/profile mutated during provider invocation");
    expect(existsSync(join(fixture.benchmark, "run-result.json"))).toBe(false);
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
