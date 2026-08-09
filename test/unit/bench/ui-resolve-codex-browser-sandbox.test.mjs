import { describe, expect, it } from "vitest";
import { createHash } from "node:crypto";
import {
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readlinkSync,
  realpathSync,
  symlinkSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join, resolve } from "node:path";
import {
  browserHarnessTempDir,
  browserHarnessSocketPath,
  codexAuthDoctorSpec,
  codexBenchmarkPermissionProfile,
  codexBrowserDoctorSpec,
  codexBrowserSandboxSpec,
  isolatedCodexHome,
  prepareIsolatedCodexHome,
  preparedExactCodexRuntimeContract,
  preparedWorkspaceRequiresBrowserProof,
  verifyExactCodexCliRuntime,
  verifyExactModelCatalogAuthority,
} from "../../../benchmarks/ui-resolve-bench/scripts/codex-browser-sandbox-contract.mjs";
import {
  inspectCodexModelEffortContract,
} from "../../../benchmarks/ui-resolve-bench/scripts/codex-tool-mode-contract.mjs";

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function exactRuntimeFixture() {
  const root = realpathSync(mkdtempSync(join(tmpdir(), "omd-exact-codex-runtime-")));
  const source = join(root, "immutable-source");
  const workspace = join(root, "matrix", "cell-1");
  const wrapper = join(root, "codex-wrapper.js");
  const native = join(root, "codex-native");
  mkdirSync(source, { recursive: true });
  mkdirSync(join(workspace, ".benchmark"), { recursive: true });
  writeFileSync(join(source, "auth.json"), "{\"auth\":true}\n");
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
  const cachePath = join(source, "models_cache.json");
  const cacheBytes = Buffer.from(`${JSON.stringify(cache, null, 2)}\n`);
  writeFileSync(cachePath, cacheBytes);
  const modelCatalogPath = join(source, "model_catalog.json");
  const modelCatalogBytes = Buffer.from(`${JSON.stringify({ models: cache.models }, null, 2)}\n`);
  writeFileSync(modelCatalogPath, modelCatalogBytes);
  writeFileSync(wrapper, "#!/usr/bin/env node\n// exact wrapper fixture\n");
  writeFileSync(native, "exact native fixture\n");
  const modelInspection = inspectCodexModelEffortContract(
    ["gpt-test-exact"],
    { OMD_BENCH_AUTH_CODEX_HOME: source },
  );
  expect(modelInspection.ready).toBe(true);
  const contract = {
    catalog_snapshot_contract: {
      enforcement_mode: "exact-runtime-per-invocation",
      auth_source_home: source,
      auth_json_source_path: join(source, "auth.json"),
      auth_json_source_mode: "immutable-snapshot-only",
      auth_json_sha256: sha256(readFileSync(join(source, "auth.json"))),
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
    },
    model_effort_contract: modelInspection.contract,
  };
  return {
    root,
    source,
    workspace,
    wrapper,
    native,
    cache,
    cachePath,
    cacheBytes,
    modelCatalogPath,
    modelCatalogBytes,
    contract,
  };
}

function readyCliProbe(version = "9.9.9") {
  return () => ({ status: 0, stdout: `codex-cli ${version}\n`, stderr: "" });
}

describe("Codex browser proof sandbox contract", () => {
  it("wraps browser-required Codex in isolated state, OpenAI-only network, and the harness socket", () => {
    const workspace = resolve("/tmp/omd-browser-cell");
    const runtime = "/tmp/browser-harness-runtime";
    const spec = codexBrowserSandboxSpec({
      workspace,
      innerArgs: ["exec", "--dangerously-bypass-approvals-and-sandbox", "-"],
      codexBin: "/opt/bin/codex",
      env: { BH_RUNTIME_DIR: runtime },
    });
    expect(spec.executable).toBe("/opt/bin/codex");
    expect(spec.args).toEqual([
      "sandbox",
      "-c", `permissions.omd-benchmark-browser=${codexBenchmarkPermissionProfile()}`,
      "-c", "default_permissions=\"omd-benchmark-browser\"",
      "-P", "omd-benchmark-browser", "-C", workspace,
      "--allow-unix-socket", `${runtime}/bu-default.sock`,
      "/opt/bin/codex", "exec", "--dangerously-bypass-approvals-and-sandbox", "-",
    ]);
    expect(spec.args).not.toContain("workspace-write");
    expect(spec.env).toEqual({
      HOME: isolatedCodexHome(workspace),
      CODEX_HOME: isolatedCodexHome(workspace),
      BH_RUNTIME_DIR: runtime,
      BH_RUNTIME_DIR_SHARED: "1",
      BH_TMP_DIR: browserHarnessTempDir(workspace),
    });
    expect(spec.codex_home).toBe(isolatedCodexHome(workspace));
    expect(spec.codex_home).toBe("/tmp/omd-browser-cell/.benchmark/codex-home");
    expect(spec.sandbox).toBe("external-workspace-openai-browser");
  });

  it("uses the identical permission path for the browser readiness probe", () => {
    const spec = codexBrowserDoctorSpec({
      workspace: "/tmp/matrix",
      codexBin: "codex-test",
      env: {
        BH_RUNTIME_DIR: "/tmp/runtime",
        PATH: "/bin",
        BU_NAME: "bench-test",
        BU_CDP_URL: "http://127.0.0.1:9336",
        BH_TELEMETRY: "1",
        BROWSER_HARNESS_TELEMETRY: "true",
        ANONYMIZED_TELEMETRY: "on",
      },
    });
    expect(spec.args).toEqual([
      "sandbox",
      "-c", `permissions.omd-benchmark-browser=${codexBenchmarkPermissionProfile()}`,
      "-c", "default_permissions=\"omd-benchmark-browser\"",
      "-P", "omd-benchmark-browser", "-C", "/tmp/matrix",
      "--allow-unix-socket", "/tmp/runtime/bu-bench-test.sock",
      "browser-harness", "--doctor",
    ]);
    expect(spec.env).toMatchObject({
      BH_RUNTIME_DIR: "/tmp/runtime",
      BH_RUNTIME_DIR_SHARED: "1",
      BH_TMP_DIR: "/tmp/matrix/.benchmark/browser-harness",
      BU_NAME: "bench-test",
      BH_TELEMETRY: "0",
      BROWSER_HARNESS_TELEMETRY: "0",
      ANONYMIZED_TELEMETRY: "0",
    });
    expect(spec.env).not.toHaveProperty("BU_CDP_URL");
    expect(spec.browser_socket).toBe("/tmp/runtime/bu-bench-test.sock");
  });

  it("checks isolated authentication through the identical permission path", () => {
    const spec = codexAuthDoctorSpec({
      workspace: "/tmp/matrix",
      codexBin: "codex-test",
      env: { BH_RUNTIME_DIR: "/tmp/runtime", PATH: "/bin" },
    });
    expect(spec.args).toEqual([
      "sandbox",
      "-c", `permissions.omd-benchmark-browser=${codexBenchmarkPermissionProfile()}`,
      "-c", "default_permissions=\"omd-benchmark-browser\"",
      "-P", "omd-benchmark-browser", "-C", "/tmp/matrix",
      "--allow-unix-socket", "/tmp/runtime/bu-default.sock",
      "codex-test", "login", "status",
    ]);
  });

  it("links only the auth credential into the workspace-local Codex home", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-isolated-codex-home-"));
    const source = join(root, "source");
    const workspace = join(root, "workspace");
    mkdirSync(source);
    mkdirSync(workspace);
    const sourceAuth = join(source, "auth.json");
    writeFileSync(sourceAuth, "{}\n");
    const target = prepareIsolatedCodexHome(workspace, { OMD_BENCH_AUTH_CODEX_HOME: source });
    expect(readlinkSync(join(target, "auth.json"))).toBe(sourceAuth);
  });

  it("copies exact locked cache bytes and validates every pinned profile/default/effort order", () => {
    const fixture = exactRuntimeFixture();
    const target = prepareIsolatedCodexHome(
      fixture.workspace,
      { OMD_BENCH_AUTH_CODEX_HOME: fixture.source },
      {
        exactRuntimeContract: fixture.contract,
        modelId: "gpt-test-exact",
        effort: "high",
      },
    );
    const targetCache = join(target, "models_cache.json");
    const targetCatalog = join(target, "model_catalog.json");
    expect(lstatSync(targetCache).isFile()).toBe(true);
    expect(lstatSync(targetCache).isSymbolicLink()).toBe(false);
    expect(readFileSync(targetCache).equals(fixture.cacheBytes)).toBe(true);
    expect(lstatSync(targetCatalog).isSymbolicLink()).toBe(false);
    expect(readFileSync(targetCatalog).equals(fixture.modelCatalogBytes)).toBe(true);
    expect(lstatSync(join(target, "auth.json")).isFile()).toBe(true);
    expect(lstatSync(join(target, "auth.json")).isSymbolicLink()).toBe(false);
    expect(readFileSync(join(target, "auth.json")))
      .toEqual(readFileSync(fixture.contract.catalog_snapshot_contract.auth_json_source_path));
    expect(verifyExactModelCatalogAuthority(fixture.workspace, fixture.contract, {
      modelId: "gpt-test-exact",
    })).toEqual({
      schema_version: "0.1",
      mode: "immutable-local-model-catalog-json",
      config_key: "model_catalog_json",
      source: {
        path: fixture.modelCatalogPath,
        sha256: sha256(fixture.modelCatalogBytes),
        bytes: fixture.modelCatalogBytes.length,
        source_mode: "immutable-snapshot-only",
      },
      isolated_copy: {
        path: targetCatalog,
        sha256: sha256(fixture.modelCatalogBytes),
        bytes: fixture.modelCatalogBytes.length,
        copy_mode: "isolated-regular-file",
      },
      selected_profile: fixture.contract.model_effort_contract.models[0],
      verified_before_provider_execution: true,
      mutable_fallback_allowed: false,
    });

    const authIdentity = lstatSync(join(target, "auth.json"));
    const cacheIdentity = lstatSync(targetCache);
    expect(prepareIsolatedCodexHome(
      fixture.workspace,
      { OMD_BENCH_AUTH_CODEX_HOME: fixture.source },
      {
        exactRuntimeContract: fixture.contract,
        modelId: "gpt-test-exact",
        effort: "high",
      },
    )).toBe(target);
    expect(lstatSync(join(target, "auth.json")).ino).toBe(authIdentity.ino);
    expect(lstatSync(targetCache).ino).toBe(cacheIdentity.ino);
  });

  it("fails closed instead of converting a legacy auth symlink or foreign regular target", () => {
    const symlinked = exactRuntimeFixture();
    const symlinkedHome = isolatedCodexHome(symlinked.workspace);
    mkdirSync(symlinkedHome, { recursive: true });
    const symlinkedTarget = join(symlinkedHome, "auth.json");
    symlinkSync(join(symlinked.source, "auth.json"), symlinkedTarget);
    expect(() => prepareIsolatedCodexHome(
      symlinked.workspace,
      { OMD_BENCH_AUTH_CODEX_HOME: symlinked.source },
      { exactRuntimeContract: symlinked.contract },
    )).toThrow("isolated auth JSON must be a regular file");
    expect(lstatSync(symlinkedTarget).isSymbolicLink()).toBe(true);

    const foreign = exactRuntimeFixture();
    const foreignHome = isolatedCodexHome(foreign.workspace);
    mkdirSync(foreignHome, { recursive: true });
    const foreignTarget = join(foreignHome, "auth.json");
    writeFileSync(foreignTarget, "{\"auth\":false}\n");
    expect(() => prepareIsolatedCodexHome(
      foreign.workspace,
      { OMD_BENCH_AUTH_CODEX_HOME: foreign.source },
      { exactRuntimeContract: foreign.contract },
    )).toThrow("isolated auth JSON drift");
    expect(readFileSync(foreignTarget, "utf8")).toBe("{\"auth\":false}\n");
  });

  it("rejects mutable, symlinked, or hash-drifted exact auth sources", () => {
    const legacyLinkMode = exactRuntimeFixture();
    legacyLinkMode.contract.catalog_snapshot_contract.auth_json_mode
      = "symlink-to-current-codex-auth";
    expect(() => prepareIsolatedCodexHome(
      legacyLinkMode.workspace,
      {},
      { exactRuntimeContract: legacyLinkMode.contract },
    )).toThrow("auth_json_mode must require an isolated copy");

    const mutable = exactRuntimeFixture();
    mutable.contract.catalog_snapshot_contract.auth_json_source_path = join(
      resolve(homedir()),
      ".codex",
      "auth.json",
    );
    mutable.contract.catalog_snapshot_contract.auth_source_home = join(
      resolve(homedir()),
      ".codex",
    );
    mutable.contract.catalog_snapshot_contract.models_cache_source_path = join(
      resolve(homedir()),
      ".codex",
      "models_cache.json",
    );
    mutable.contract.catalog_snapshot_contract.model_catalog_source_path = join(
      resolve(homedir()),
      ".codex",
      "model_catalog.json",
    );
    expect(() => prepareIsolatedCodexHome(
      mutable.workspace,
      {},
      { exactRuntimeContract: mutable.contract },
    )).toThrow("cannot use mutable ~/.codex/auth.json");

    const symlinked = exactRuntimeFixture();
    const realAuth = join(symlinked.source, "auth-real.json");
    writeFileSync(realAuth, "{\"auth\":true}\n");
    unlinkSync(join(symlinked.source, "auth.json"));
    symlinkSync(realAuth, join(symlinked.source, "auth.json"));
    expect(() => prepareIsolatedCodexHome(
      symlinked.workspace,
      {},
      { exactRuntimeContract: symlinked.contract },
    )).toThrow(/auth JSON source .*symlink/u);

    const drifted = exactRuntimeFixture();
    writeFileSync(join(drifted.source, "auth.json"), "{\"auth\":false}\n");
    expect(() => prepareIsolatedCodexHome(
      drifted.workspace,
      {},
      { exactRuntimeContract: drifted.contract },
    )).toThrow("auth JSON SHA drift");
  });

  it("fails closed when the immutable cache is missing or its raw bytes drift", () => {
    const missing = exactRuntimeFixture();
    unlinkSync(missing.cachePath);
    expect(() => prepareIsolatedCodexHome(
      missing.workspace,
      {},
      { exactRuntimeContract: missing.contract },
    )).toThrow("models cache missing");

    const drifted = exactRuntimeFixture();
    writeFileSync(drifted.cachePath, `${JSON.stringify(drifted.cache)}\n`);
    expect(() => prepareIsolatedCodexHome(
      drifted.workspace,
      {},
      { exactRuntimeContract: drifted.contract },
    )).toThrow("models cache SHA drift");
  });

  it("fails closed on missing, symlinked, foreign, or tampered local model catalog authority", () => {
    const missing = exactRuntimeFixture();
    unlinkSync(missing.modelCatalogPath);
    expect(() => prepareIsolatedCodexHome(
      missing.workspace,
      {},
      { exactRuntimeContract: missing.contract },
    )).toThrow("model catalog missing");

    const linked = exactRuntimeFixture();
    const realCatalog = join(linked.source, "model_catalog-real.json");
    writeFileSync(realCatalog, linked.modelCatalogBytes);
    unlinkSync(linked.modelCatalogPath);
    symlinkSync(realCatalog, linked.modelCatalogPath);
    expect(() => prepareIsolatedCodexHome(
      linked.workspace,
      {},
      { exactRuntimeContract: linked.contract },
    )).toThrow(/model catalog source must be a regular non-symlink file/u);

    const sourceDrift = exactRuntimeFixture();
    writeFileSync(sourceDrift.modelCatalogPath, `${sourceDrift.modelCatalogBytes.toString("utf8")}\n`);
    expect(() => prepareIsolatedCodexHome(
      sourceDrift.workspace,
      {},
      { exactRuntimeContract: sourceDrift.contract },
    )).toThrow("model catalog source snapshot drift");

    const copyDrift = exactRuntimeFixture();
    const isolated = prepareIsolatedCodexHome(
      copyDrift.workspace,
      {},
      { exactRuntimeContract: copyDrift.contract },
    );
    writeFileSync(join(isolated, "model_catalog.json"), '{"models":[]}\n');
    expect(() => prepareIsolatedCodexHome(
      copyDrift.workspace,
      {},
      { exactRuntimeContract: copyDrift.contract },
    )).toThrow("isolated model catalog drift");
  });

  it("rejects profile, default-effort, and ordered-effort drift after the cache SHA matches", () => {
    const profile = exactRuntimeFixture();
    profile.contract.model_effort_contract.models[0].model_profile_sha256 = "f".repeat(64);
    expect(() => prepareIsolatedCodexHome(
      profile.workspace,
      {},
      { exactRuntimeContract: profile.contract },
    )).toThrow("model profile SHA drift");

    const defaultEffort = exactRuntimeFixture();
    defaultEffort.contract.model_effort_contract.models[0].default_effort = "low";
    expect(() => prepareIsolatedCodexHome(
      defaultEffort.workspace,
      {},
      { exactRuntimeContract: defaultEffort.contract },
    )).toThrow("default effort drift");

    const orderedEfforts = exactRuntimeFixture();
    orderedEfforts.contract.model_effort_contract.models[0].supported_efforts.reverse();
    expect(() => prepareIsolatedCodexHome(
      orderedEfforts.workspace,
      {},
      { exactRuntimeContract: orderedEfforts.contract },
    )).toThrow("ordered efforts drift");
  });

  it("never falls back to a different mutable source home in exact mode", () => {
    const fixture = exactRuntimeFixture();
    const mutable = join(fixture.root, "mutable-home");
    mkdirSync(mutable);
    writeFileSync(join(mutable, "auth.json"), "{}\n");
    writeFileSync(join(mutable, "models_cache.json"), fixture.cacheBytes);
    expect(() => prepareIsolatedCodexHome(
      fixture.workspace,
      { OMD_BENCH_AUTH_CODEX_HOME: mutable },
      { exactRuntimeContract: fixture.contract },
    )).toThrow("does not match the locked source");
    expect(() => readFileSync(join(isolatedCodexHome(fixture.workspace), "models_cache.json")))
      .toThrow();
  });

  it("binds exact mode to the locked plan and prepared cell while legacy plans stay optional", () => {
    const fixture = exactRuntimeFixture();
    const matrixRoot = join(fixture.root, "matrix");
    const cell = {
      id: "cell-1",
      runtime: "codex",
      model_id: "gpt-test-exact",
      effort: "high",
    };
    writeFileSync(join(fixture.workspace, ".benchmark", "matrix-cell.json"), JSON.stringify(cell));
    const snapshotSha256 = sha256(JSON.stringify(fixture.contract.catalog_snapshot_contract));
    const modelEffortSha256 = sha256(JSON.stringify(fixture.contract.model_effort_contract));
    writeFileSync(join(matrixRoot, "RUN-MATRIX.locked.json"), JSON.stringify({
      codex_catalog_snapshot_contract: fixture.contract.catalog_snapshot_contract,
      codex_model_effort_contract: fixture.contract.model_effort_contract,
      lock_manifest: {
        codex_catalog_snapshot_contract_sha256: snapshotSha256,
        codex_model_effort_contract_sha256: modelEffortSha256,
      },
      cells: [cell],
    }));
    expect(preparedExactCodexRuntimeContract(fixture.workspace)).toMatchObject({
      matrix_cell: cell,
      locked_cell: cell,
    });

    const legacy = exactRuntimeFixture();
    writeFileSync(join(legacy.root, "matrix", "RUN-MATRIX.locked.json"), JSON.stringify({
      codex_catalog_snapshot_contract: {
        auth_source_home: legacy.source,
        models_cache_mode: "immutable-copy-before-provider-execution",
      },
    }));
    expect(preparedExactCodexRuntimeContract(legacy.workspace)).toBe(null);
  });

  it("verifies canonical wrapper/native SHA and both CLI versions before invocation", () => {
    const fixture = exactRuntimeFixture();
    const observed = verifyExactCodexCliRuntime(fixture.contract, {
      env: { OMD_BENCH_CODEX_BIN: fixture.wrapper },
      nativeResolver: () => fixture.native,
      probe: readyCliProbe(),
      nativeProbe: readyCliProbe(),
    });
    expect(observed).toEqual({
      executable_path: fixture.wrapper,
      binary_sha256: fixture.contract.catalog_snapshot_contract.codex_cli.binary_sha256,
      native_executable_path: fixture.native,
      native_binary_sha256: fixture.contract.catalog_snapshot_contract.codex_cli.native_binary_sha256,
      version: "9.9.9",
    });
  });

  it("fails closed on wrapper, native, resolution, or version drift", () => {
    const wrapperDrift = exactRuntimeFixture();
    writeFileSync(wrapperDrift.wrapper, "changed wrapper bytes\n");
    expect(() => verifyExactCodexCliRuntime(wrapperDrift.contract, {
      nativeResolver: () => wrapperDrift.native,
      probe: readyCliProbe(),
      nativeProbe: readyCliProbe(),
    })).toThrow("CLI wrapper SHA drift");

    const nativeDrift = exactRuntimeFixture();
    writeFileSync(nativeDrift.native, "changed native bytes\n");
    expect(() => verifyExactCodexCliRuntime(nativeDrift.contract, {
      nativeResolver: () => nativeDrift.native,
      probe: readyCliProbe(),
      nativeProbe: readyCliProbe(),
    })).toThrow("native CLI binary SHA drift");

    const resolutionDrift = exactRuntimeFixture();
    const otherNative = join(resolutionDrift.root, "other-native");
    writeFileSync(otherNative, "other native\n");
    expect(() => verifyExactCodexCliRuntime(resolutionDrift.contract, {
      nativeResolver: () => otherNative,
      probe: readyCliProbe(),
      nativeProbe: readyCliProbe(),
    })).toThrow("native executable resolution drift");

    const versionDrift = exactRuntimeFixture();
    expect(() => verifyExactCodexCliRuntime(versionDrift.contract, {
      nativeResolver: () => versionDrift.native,
      probe: readyCliProbe("9.9.8"),
      nativeProbe: readyCliProbe(),
    })).toThrow("CLI wrapper version drift");
  });

  it("requires an explicit justification when locked CLI/cache client versions differ", () => {
    const fixture = exactRuntimeFixture();
    fixture.contract.catalog_snapshot_contract.codex_cli.version = "9.9.8";
    fixture.contract.catalog_snapshot_contract.cli_cache_client_version_policy =
      "explicit-locked-mismatch";
    fixture.contract.catalog_snapshot_contract.cli_cache_client_version_mismatch_justification =
      "The pair is independently frozen without a compatibility claim; provider smoke remains fail-closed.";
    expect(() => prepareIsolatedCodexHome(
      fixture.workspace,
      {},
      { exactRuntimeContract: fixture.contract },
    )).not.toThrow();

    fixture.contract.catalog_snapshot_contract.cli_cache_client_version_mismatch_justification = "";
    expect(() => prepareIsolatedCodexHome(
      join(fixture.root, "other-workspace"),
      {},
      { exactRuntimeContract: fixture.contract },
    )).toThrow("mismatch_justification is required");
  });

  it("pins inference egress to OpenAI domains in the external profile", () => {
    const profile = codexBenchmarkPermissionProfile();
    expect(profile).toContain("mode=\"limited\"");
    expect(profile).toContain("\"chatgpt.com\"=\"allow\"");
    expect(profile).toContain("\"*.openai.com\"=\"allow\"");
    expect(profile).not.toContain("pypi.org");
    expect(profile).not.toContain("posthog.com");
  });

  it("derives one exact Unix socket from the named browser connection", () => {
    expect(browserHarnessSocketPath({ BH_RUNTIME_DIR: "/tmp/runtime", BU_NAME: "bench-test" }))
      .toBe("/tmp/runtime/bu-bench-test.sock");
    expect(() => browserHarnessSocketPath({ BU_NAME: "../private" })).toThrow("invalid browser-harness connection name");
  });

  it("derives browser proof need from either the independent browser contract or legacy host gate", () => {
    const workspace = mkdtempSync(join(tmpdir(), "omd-browser-cell-contract-"));
    const benchmark = join(workspace, ".benchmark");
    mkdirSync(benchmark);
    expect(preparedWorkspaceRequiresBrowserProof(workspace)).toBe(false);
    writeFileSync(join(benchmark, "matrix-cell.json"), JSON.stringify({
      host_policy_gate: { require_browser_attempt: true },
    }));
    expect(preparedWorkspaceRequiresBrowserProof(workspace)).toBe(true);
    writeFileSync(join(benchmark, "matrix-cell.json"), JSON.stringify({
      browser_execution: { require_browser_proof: true },
      host_policy_gate: null,
    }));
    expect(preparedWorkspaceRequiresBrowserProof(workspace)).toBe(true);
  });
});
