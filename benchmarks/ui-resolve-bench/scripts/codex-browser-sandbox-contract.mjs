import { createHash } from "node:crypto";
import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fstatSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  readlinkSync,
  realpathSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { createRequire } from "node:module";
import { homedir } from "node:os";
import { dirname, isAbsolute, join, resolve } from "node:path";
import {
  inspectCodexCliRuntime,
  inspectCodexModelEffortProfile,
} from "./codex-tool-mode-contract.mjs";

export const EXACT_CODEX_RUNTIME_ENFORCEMENT_MODE = "exact-runtime-per-invocation";
const SHA256_PATTERN = /^[a-f0-9]{64}$/;

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function readJsonFile(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function requireAbsolutePath(value, label) {
  if (typeof value !== "string" || !isAbsolute(value)) {
    throw new Error(`codex exact runtime contract ${label} must be an absolute path`);
  }
  return resolve(value);
}

function requireSha256(value, label) {
  if (typeof value !== "string" || !SHA256_PATTERN.test(value)) {
    throw new Error(`codex exact runtime contract ${label} must be a SHA-256 digest`);
  }
  return value;
}

function requireNonEmptyString(value, label) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`codex exact runtime contract ${label} is required`);
  }
  return value;
}

function exactContractParts(contract) {
  const snapshot = contract?.catalog_snapshot_contract;
  const modelEffort = contract?.model_effort_contract;
  if (!snapshot || typeof snapshot !== "object" || Array.isArray(snapshot)) {
    throw new Error("codex exact runtime contract catalog_snapshot_contract is required");
  }
  if (!modelEffort || typeof modelEffort !== "object" || Array.isArray(modelEffort)) {
    throw new Error("codex exact runtime contract model_effort_contract is required");
  }
  return { snapshot, modelEffort };
}

function assertExactContractShape(contract) {
  const { snapshot, modelEffort } = exactContractParts(contract);
  if (snapshot.enforcement_mode !== EXACT_CODEX_RUNTIME_ENFORCEMENT_MODE) {
    throw new Error(
      `codex exact runtime contract enforcement_mode must be ${EXACT_CODEX_RUNTIME_ENFORCEMENT_MODE}`,
    );
  }
  if (snapshot.auth_json_source_mode !== "immutable-snapshot-only") {
    throw new Error("codex exact runtime contract requires an immutable auth JSON source");
  }
  if (snapshot.mutable_auth_fallback_allowed !== false) {
    throw new Error("codex exact runtime contract must forbid mutable auth fallback");
  }
  if (snapshot.auth_json_mode !== "isolated-copy-before-provider-execution") {
    throw new Error("codex exact runtime contract auth_json_mode must require an isolated copy");
  }
  if (snapshot.models_cache_mode !== "immutable-copy-before-provider-execution") {
    throw new Error("codex exact runtime contract models_cache_mode is invalid");
  }
  if (snapshot.models_cache_source_mode !== "immutable-snapshot-only") {
    throw new Error("codex exact runtime contract requires an immutable models cache source");
  }
  if (snapshot.mutable_models_cache_fallback_allowed !== false) {
    throw new Error("codex exact runtime contract must forbid mutable models cache fallback");
  }

  const authSourceHome = requireAbsolutePath(snapshot.auth_source_home, "auth_source_home");
  const authSourcePath = requireAbsolutePath(
    snapshot.auth_json_source_path,
    "auth_json_source_path",
  );
  const cacheSourcePath = requireAbsolutePath(
    snapshot.models_cache_source_path,
    "models_cache_source_path",
  );
  if (authSourcePath !== join(authSourceHome, "auth.json")) {
    throw new Error("codex exact runtime contract auth_json_source_path is not bound to auth_source_home");
  }
  if (cacheSourcePath !== join(authSourceHome, "models_cache.json")) {
    throw new Error("codex exact runtime contract models_cache_source_path is not bound to auth_source_home");
  }
  const mutableDefaultCache = join(resolve(homedir(), ".codex"), "models_cache.json");
  const mutableDefaultAuth = join(resolve(homedir(), ".codex"), "auth.json");
  if (authSourcePath === mutableDefaultAuth) {
    throw new Error("codex exact runtime contract cannot use mutable ~/.codex/auth.json");
  }
  if (cacheSourcePath === mutableDefaultCache) {
    throw new Error("codex exact runtime contract cannot use mutable ~/.codex/models_cache.json");
  }

  requireSha256(snapshot.auth_json_sha256, "auth_json_sha256");
  const cacheSha256 = requireSha256(snapshot.models_cache_sha256, "models_cache_sha256");
  if (cacheSha256 !== requireSha256(modelEffort.cache_sha256, "model_effort_contract.cache_sha256")) {
    throw new Error("codex exact runtime contract models cache SHA does not match the effort contract");
  }
  requireNonEmptyString(modelEffort.cache_fetched_at, "model_effort_contract.cache_fetched_at");
  requireNonEmptyString(modelEffort.cache_client_version, "model_effort_contract.cache_client_version");
  if (!Array.isArray(modelEffort.models) || modelEffort.models.length === 0) {
    throw new Error("codex exact runtime contract model_effort_contract.models is required");
  }
  for (const [index, profile] of modelEffort.models.entries()) {
    const label = `model_effort_contract.models[${index}]`;
    requireNonEmptyString(profile?.model_id, `${label}.model_id`);
    requireSha256(profile?.model_profile_sha256, `${label}.model_profile_sha256`);
    requireNonEmptyString(profile?.default_effort, `${label}.default_effort`);
    if (!Array.isArray(profile?.supported_efforts)
      || profile.supported_efforts.length === 0
      || profile.supported_efforts.some((effort) => typeof effort !== "string" || !effort)
      || new Set(profile.supported_efforts).size !== profile.supported_efforts.length
      || !profile.supported_efforts.includes(profile.default_effort)) {
      throw new Error(`codex exact runtime contract ${label}.supported_efforts is invalid`);
    }
  }

  const cli = snapshot.codex_cli;
  if (!cli || typeof cli !== "object" || Array.isArray(cli)) {
    throw new Error("codex exact runtime contract codex_cli is required");
  }
  requireAbsolutePath(cli.executable_path, "codex_cli.executable_path");
  requireSha256(cli.binary_sha256, "codex_cli.binary_sha256");
  requireAbsolutePath(cli.native_executable_path, "codex_cli.native_executable_path");
  requireSha256(cli.native_binary_sha256, "codex_cli.native_binary_sha256");
  requireNonEmptyString(cli.version, "codex_cli.version");
  const versionPolicy = snapshot.cli_cache_client_version_policy;
  const mismatchJustification = snapshot.cli_cache_client_version_mismatch_justification;
  if (versionPolicy === "require-exact-match") {
    if (cli.version !== modelEffort.cache_client_version) {
      throw new Error("codex exact runtime CLI/cache client versions must match");
    }
    if (mismatchJustification !== null) {
      throw new Error("codex exact runtime matching CLI/cache versions forbid a mismatch justification");
    }
  } else if (versionPolicy === "explicit-locked-mismatch") {
    if (cli.version === modelEffort.cache_client_version) {
      throw new Error("codex exact runtime mismatch policy requires different locked versions");
    }
    requireNonEmptyString(
      mismatchJustification,
      "cli_cache_client_version_mismatch_justification",
    );
  } else {
    throw new Error("codex exact runtime cli_cache_client_version_policy is invalid");
  }
  return contract;
}

export function preparedExactCodexRuntimeContract(workspace, { readJson = readJsonFile } = {}) {
  const root = resolve(workspace);
  const planPath = join(dirname(root), "RUN-MATRIX.locked.json");
  if (!existsSync(planPath)) return null;
  const plan = readJson(planPath);
  const snapshot = plan?.codex_catalog_snapshot_contract;
  if (snapshot?.enforcement_mode === undefined) return null;
  if (snapshot.enforcement_mode !== EXACT_CODEX_RUNTIME_ENFORCEMENT_MODE) {
    throw new Error(`unsupported Codex runtime enforcement mode: ${snapshot.enforcement_mode}`);
  }
  const snapshotSha256 = sha256(JSON.stringify(snapshot));
  if (plan.lock_manifest?.codex_catalog_snapshot_contract_sha256 !== snapshotSha256) {
    throw new Error("codex exact runtime catalog snapshot lock SHA drift");
  }
  const modelEffortSha256 = sha256(JSON.stringify(plan.codex_model_effort_contract));
  if (plan.lock_manifest?.codex_model_effort_contract_sha256 !== modelEffortSha256) {
    throw new Error("codex exact runtime model effort lock SHA drift");
  }

  const matrixCellPath = join(root, ".benchmark", "matrix-cell.json");
  if (!existsSync(matrixCellPath)) {
    throw new Error(`codex exact runtime matrix cell missing: ${matrixCellPath}`);
  }
  const matrixCell = readJson(matrixCellPath);
  const lockedCell = (plan.cells ?? []).find((cell) => cell?.id === matrixCell?.id);
  if (!lockedCell) {
    throw new Error(`codex exact runtime locked cell missing: ${matrixCell?.id ?? "unknown"}`);
  }
  for (const field of ["runtime", "model_id", "effort"]) {
    if (matrixCell?.[field] !== lockedCell?.[field]) {
      throw new Error(`codex exact runtime matrix cell ${field} drift`);
    }
  }
  const contract = {
    catalog_snapshot_contract: snapshot,
    model_effort_contract: plan.codex_model_effort_contract,
    matrix_cell: matrixCell,
    locked_cell: lockedCell,
    plan_path: planPath,
  };
  return assertExactContractShape(contract);
}

export function assertExactCodexModelEffortSelection(contract, modelId, effort) {
  const { modelEffort } = exactContractParts(assertExactContractShape(contract));
  const profile = modelEffort.models.find((candidate) => candidate.model_id === modelId);
  if (!profile) {
    throw new Error(`codex exact runtime requested model is not pinned: ${modelId}`);
  }
  if (!profile.supported_efforts.includes(effort)) {
    throw new Error(`codex exact runtime requested effort is not pinned: ${modelId}/${effort}`);
  }
  if (contract.matrix_cell
    && (contract.matrix_cell.model_id !== modelId || contract.matrix_cell.effort !== effort)) {
    throw new Error("codex exact runtime invocation does not match the prepared matrix cell");
  }
  return profile;
}

export function browserHarnessRuntimeDir(env = process.env) {
  return resolve(env.BH_RUNTIME_DIR ?? join(homedir(), ".config", "browser-harness", "runtime"));
}

export function browserHarnessSocketPath(env = process.env) {
  const name = String(env.BU_NAME ?? "default");
  if (!/^[a-zA-Z0-9_-]+$/.test(name)) throw new Error(`invalid browser-harness connection name: ${name}`);
  return join(browserHarnessRuntimeDir(env), `bu-${name}.sock`);
}

export function browserHarnessTempDir(workspace) {
  return join(resolve(workspace), ".benchmark", "browser-harness");
}

export function isolatedCodexHome(workspace) {
  return join(resolve(workspace), ".benchmark", "codex-home");
}

function assertExactAuthLink(target, sourceAuth) {
  const targetAuth = join(target, "auth.json");
  if (!existsSync(targetAuth)) {
    symlinkSync(sourceAuth, targetAuth);
    return;
  }
  if (!lstatSync(targetAuth).isSymbolicLink()
    || resolve(target, readlinkSync(targetAuth)) !== sourceAuth) {
    throw new Error(`codex benchmark auth link mismatch: ${targetAuth}`);
  }
}

function readLockedRegularFile(path, label) {
  const before = lstatSync(path);
  if (before.isSymbolicLink() || !before.isFile()) {
    throw new Error(`codex exact runtime ${label} source must be a regular non-symlink file: ${path}`);
  }
  const descriptor = openSync(path, fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW);
  try {
    const opened = fstatSync(descriptor);
    if (!opened.isFile() || opened.dev !== before.dev || opened.ino !== before.ino) {
      throw new Error(`codex exact runtime ${label} source identity drift: ${path}`);
    }
    return readFileSync(descriptor);
  } finally {
    closeSync(descriptor);
  }
}

function installExactSnapshot(targetPath, sourceBytes, expectedSha256, label) {
  if (existsSync(targetPath)) {
    const targetStat = lstatSync(targetPath);
    if (targetStat.isSymbolicLink() || !targetStat.isFile()) {
      throw new Error(`codex exact runtime isolated ${label} must be a regular file: ${targetPath}`);
    }
    const existingBytes = readFileSync(targetPath);
    if (!existingBytes.equals(sourceBytes) || sha256(existingBytes) !== expectedSha256) {
      throw new Error(`codex exact runtime isolated ${label} drift: ${targetPath}`);
    }
  } else {
    writeFileSync(targetPath, sourceBytes, { flag: "wx", mode: 0o600 });
  }
  const copiedBytes = readLockedRegularFile(targetPath, `isolated ${label}`);
  if (!copiedBytes.equals(sourceBytes) || sha256(copiedBytes) !== expectedSha256) {
    throw new Error(`codex exact runtime isolated ${label} copy verification failed: ${targetPath}`);
  }
}

function assertExactModelEffortProfiles(target, modelEffort) {
  const observationEnv = { OMD_BENCH_AUTH_CODEX_HOME: target };
  for (const pinned of modelEffort.models) {
    const observed = inspectCodexModelEffortProfile(pinned.model_id, observationEnv);
    if (!observed.ready) {
      throw new Error(
        `codex exact runtime model profile missing: ${pinned.model_id}:${observed.reason ?? "unknown"}`,
      );
    }
    const scalarChecks = [
      ["cache SHA", observed.cache_sha256, modelEffort.cache_sha256],
      ["cache fetched_at", observed.cache_fetched_at, modelEffort.cache_fetched_at],
      ["cache client_version", observed.cache_client_version, modelEffort.cache_client_version],
      ["model profile SHA", observed.model_profile_sha256, pinned.model_profile_sha256],
      ["default effort", observed.default_effort, pinned.default_effort],
    ];
    const drift = scalarChecks.find(([, actual, expected]) => actual !== expected);
    if (drift) {
      throw new Error(`codex exact runtime ${drift[0]} drift: ${pinned.model_id}`);
    }
    if (JSON.stringify(observed.supported_efforts) !== JSON.stringify(pinned.supported_efforts)) {
      throw new Error(`codex exact runtime ordered efforts drift: ${pinned.model_id}`);
    }
  }
}

function prepareExactIsolatedCodexHome(workspace, env, contract, { modelId, effort } = {}) {
  const { snapshot, modelEffort } = exactContractParts(assertExactContractShape(contract));
  if (modelId !== undefined || effort !== undefined) {
    assertExactCodexModelEffortSelection(contract, modelId, effort);
  }
  const sourceHome = resolve(snapshot.auth_source_home);
  if (env.OMD_BENCH_AUTH_CODEX_HOME
    && resolve(env.OMD_BENCH_AUTH_CODEX_HOME) !== sourceHome) {
    throw new Error("codex exact runtime auth source environment does not match the locked source");
  }

  const sourceAuth = resolve(snapshot.auth_json_source_path);
  const sourceCache = resolve(snapshot.models_cache_source_path);
  if (!existsSync(sourceAuth)) throw new Error(`codex benchmark auth missing: ${sourceAuth}`);
  if (realpathSync(sourceAuth) !== sourceAuth) {
    throw new Error(`codex exact runtime auth JSON source path must not traverse symlinks: ${sourceAuth}`);
  }
  const mutableDefaultAuth = join(resolve(homedir(), ".codex"), "auth.json");
  if (existsSync(mutableDefaultAuth) && realpathSync(sourceAuth) === realpathSync(mutableDefaultAuth)) {
    throw new Error("codex exact runtime cannot use mutable ~/.codex/auth.json");
  }
  if (!existsSync(sourceCache)) {
    throw new Error(`codex exact runtime models cache missing: ${sourceCache}`);
  }
  const authBytes = readLockedRegularFile(sourceAuth, "auth JSON");
  const observedAuthSha = sha256(authBytes);
  if (observedAuthSha !== snapshot.auth_json_sha256) {
    throw new Error(
      `codex exact runtime auth JSON SHA drift: expected ${snapshot.auth_json_sha256}, received ${observedAuthSha}`,
    );
  }
  const cacheBytes = readLockedRegularFile(sourceCache, "models cache");
  const observedSourceSha = sha256(cacheBytes);
  if (observedSourceSha !== snapshot.models_cache_sha256) {
    throw new Error(
      `codex exact runtime models cache SHA drift: expected ${snapshot.models_cache_sha256}, received ${observedSourceSha}`,
    );
  }

  const target = isolatedCodexHome(workspace);
  if (target === sourceHome) {
    throw new Error("codex exact runtime isolated home cannot equal the locked source home");
  }
  mkdirSync(target, { recursive: true });
  installExactSnapshot(
    join(target, "auth.json"),
    authBytes,
    snapshot.auth_json_sha256,
    "auth JSON",
  );
  const targetCache = join(target, "models_cache.json");
  installExactSnapshot(targetCache, cacheBytes, snapshot.models_cache_sha256, "models cache");
  if (!readLockedRegularFile(sourceAuth, "auth JSON").equals(authBytes)) {
    throw new Error(`codex exact runtime auth JSON source changed during isolation: ${sourceAuth}`);
  }
  if (!readLockedRegularFile(sourceCache, "models cache").equals(cacheBytes)) {
    throw new Error(`codex exact runtime models cache source changed during isolation: ${sourceCache}`);
  }
  assertExactModelEffortProfiles(target, modelEffort);
  return target;
}

export function prepareIsolatedCodexHome(
  workspace,
  env = process.env,
  { exactRuntimeContract = null, modelId, effort } = {},
) {
  if (exactRuntimeContract) {
    return prepareExactIsolatedCodexHome(
      workspace,
      env,
      exactRuntimeContract,
      { modelId, effort },
    );
  }
  const target = isolatedCodexHome(workspace);
  const sourceHome = resolve(env.OMD_BENCH_AUTH_CODEX_HOME ?? join(homedir(), ".codex"));
  const sourceAuth = join(sourceHome, "auth.json");
  if (!existsSync(sourceAuth)) throw new Error(`codex benchmark auth missing: ${sourceAuth}`);
  mkdirSync(target, { recursive: true });
  assertExactAuthLink(target, sourceAuth);
  return target;
}

function nativeTargetForCurrentPlatform() {
  const key = `${process.platform}/${process.arch}`;
  const targets = {
    "darwin/arm64": ["@openai/codex-darwin-arm64", "aarch64-apple-darwin", "codex"],
    "darwin/x64": ["@openai/codex-darwin-x64", "x86_64-apple-darwin", "codex"],
    "linux/arm64": ["@openai/codex-linux-arm64", "aarch64-unknown-linux-musl", "codex"],
    "linux/x64": ["@openai/codex-linux-x64", "x86_64-unknown-linux-musl", "codex"],
    "win32/arm64": ["@openai/codex-win32-arm64", "aarch64-pc-windows-msvc", "codex.exe"],
    "win32/x64": ["@openai/codex-win32-x64", "x86_64-pc-windows-msvc", "codex.exe"],
  };
  const target = targets[key];
  if (!target) throw new Error(`codex exact runtime unsupported native target: ${key}`);
  return target;
}

export function resolveCodexNativeExecutable(executablePath) {
  const wrapper = realpathSync(requireAbsolutePath(executablePath, "codex_cli.executable_path"));
  const [platformPackage, targetTriple, executableName] = nativeTargetForCurrentPlatform();
  let packageJsonPath;
  try {
    packageJsonPath = createRequire(wrapper).resolve(`${platformPackage}/package.json`);
  } catch {
    throw new Error(`codex exact runtime cannot resolve native package ${platformPackage}`);
  }
  const candidate = join(
    dirname(packageJsonPath),
    "vendor",
    targetTriple,
    "bin",
    executableName,
  );
  if (!existsSync(candidate)) {
    throw new Error(`codex exact runtime native executable missing: ${candidate}`);
  }
  return realpathSync(candidate);
}

function assertExactExecutable(path, expectedSha256, label) {
  if (!existsSync(path)) throw new Error(`codex exact runtime ${label} missing: ${path}`);
  const info = lstatSync(path);
  if (!info.isFile()) throw new Error(`codex exact runtime ${label} must be a regular file: ${path}`);
  const observedSha256 = sha256(readFileSync(path));
  if (observedSha256 !== expectedSha256) {
    throw new Error(
      `codex exact runtime ${label} SHA drift: expected ${expectedSha256}, received ${observedSha256}`,
    );
  }
  return observedSha256;
}

export function verifyExactCodexCliRuntime(
  contract,
  {
    env = process.env,
    probe,
    nativeProbe,
    nativeResolver = resolveCodexNativeExecutable,
  } = {},
) {
  const { snapshot } = exactContractParts(assertExactContractShape(contract));
  const pinned = snapshot.codex_cli;
  const executable = requireAbsolutePath(pinned.executable_path, "codex_cli.executable_path");
  if (!existsSync(executable)) {
    throw new Error(`codex exact runtime CLI wrapper missing: ${executable}`);
  }
  const canonicalExecutable = realpathSync(executable);
  if (canonicalExecutable !== executable) {
    throw new Error("codex exact runtime CLI wrapper path must be canonical, not a symlink");
  }
  if (env.OMD_BENCH_CODEX_BIN) {
    let configuredExecutable;
    try {
      configuredExecutable = realpathSync(resolve(env.OMD_BENCH_CODEX_BIN));
    } catch {
      throw new Error("codex exact runtime OMD_BENCH_CODEX_BIN is unavailable");
    }
    if (configuredExecutable !== executable) {
      throw new Error("codex exact runtime OMD_BENCH_CODEX_BIN does not match the locked wrapper");
    }
  }
  const wrapperSha256 = assertExactExecutable(
    executable,
    pinned.binary_sha256,
    "CLI wrapper",
  );

  const pinnedNative = requireAbsolutePath(
    pinned.native_executable_path,
    "codex_cli.native_executable_path",
  );
  const resolvedNative = realpathSync(nativeResolver(executable));
  if (resolvedNative !== pinnedNative) {
    throw new Error(
      `codex exact runtime native executable resolution drift: expected ${pinnedNative}, received ${resolvedNative}`,
    );
  }
  const nativeSha256 = assertExactExecutable(
    resolvedNative,
    pinned.native_binary_sha256,
    "native CLI binary",
  );

  const wrapperRuntime = inspectCodexCliRuntime({ codexBin: executable, probe });
  if (!wrapperRuntime.ready || wrapperRuntime.version !== pinned.version) {
    throw new Error(
      `codex exact runtime CLI wrapper version drift: expected ${pinned.version}, received ${wrapperRuntime.version ?? "unavailable"}`,
    );
  }
  const nativeRuntime = inspectCodexCliRuntime({
    codexBin: resolvedNative,
    probe: nativeProbe,
  });
  if (!nativeRuntime.ready || nativeRuntime.version !== pinned.version) {
    throw new Error(
      `codex exact runtime native CLI version drift: expected ${pinned.version}, received ${nativeRuntime.version ?? "unavailable"}`,
    );
  }
  return {
    executable_path: executable,
    binary_sha256: wrapperSha256,
    native_executable_path: resolvedNative,
    native_binary_sha256: nativeSha256,
    version: pinned.version,
  };
}

export function codexBenchmarkPermissionProfile() {
  return "{extends=\":workspace\",network={enabled=true,mode=\"limited\",domains={\"chatgpt.com\"=\"allow\",\"*.chatgpt.com\"=\"allow\",\"api.openai.com\"=\"allow\",\"*.openai.com\"=\"allow\"}}}";
}

function outerSandboxArgs({ root, socketPath }) {
  const profile = "omd-benchmark-browser";
  return [
    "sandbox",
    "-c", `permissions.${profile}=${codexBenchmarkPermissionProfile()}`,
    "-c", `default_permissions=\"${profile}\"`,
    "-P", profile,
    "-C", root,
    "--allow-unix-socket", socketPath,
  ];
}

function registeredBrowserEnv(env) {
  const { BU_CDP_URL: _url, BU_CDP_WS: _ws, ...registered } = env;
  return registered;
}

export function preparedWorkspaceRequiresBrowserProof(workspace, { readJson } = {}) {
  const path = join(resolve(workspace), ".benchmark", "matrix-cell.json");
  if (!existsSync(path)) return false;
  const cell = readJson ? readJson(path) : JSON.parse(readFileSync(path, "utf8"));
  return cell?.browser_execution?.require_browser_proof === true
    || cell?.host_policy_gate?.require_browser_attempt === true;
}

export function codexBrowserSandboxSpec({
  workspace,
  innerArgs,
  codexBin = process.env.OMD_BENCH_CODEX_BIN ?? "codex",
  env = process.env,
}) {
  const root = resolve(workspace);
  const runtimeDir = browserHarnessRuntimeDir(env);
  const socketPath = browserHarnessSocketPath(env);
  const tempDir = browserHarnessTempDir(root);
  const codexHome = isolatedCodexHome(root);
  return {
    executable: codexBin,
    args: [
      ...outerSandboxArgs({ root, socketPath }),
      codexBin,
      ...innerArgs,
    ],
    env: {
      HOME: codexHome,
      CODEX_HOME: codexHome,
      BH_RUNTIME_DIR: runtimeDir,
      BH_RUNTIME_DIR_SHARED: "1",
      BH_TMP_DIR: tempDir,
      ...(env.BU_NAME ? { BU_NAME: env.BU_NAME } : {}),
    },
    sandbox: "external-workspace-openai-browser",
    runtime_dir: runtimeDir,
    browser_socket: socketPath,
    codex_home: codexHome,
    temp_dir: tempDir,
  };
}

export function codexBrowserDoctorSpec({
  workspace,
  codexBin = process.env.OMD_BENCH_CODEX_BIN ?? "codex",
  env = process.env,
}) {
  const root = resolve(workspace);
  const runtimeDir = browserHarnessRuntimeDir(env);
  const socketPath = browserHarnessSocketPath(env);
  const tempDir = browserHarnessTempDir(root);
  const codexHome = isolatedCodexHome(root);
  return {
    executable: codexBin,
    args: [
      ...outerSandboxArgs({ root, socketPath }),
      "browser-harness",
      "--doctor",
    ],
    env: {
      ...registeredBrowserEnv(env),
      HOME: codexHome,
      CODEX_HOME: codexHome,
      BH_RUNTIME_DIR: runtimeDir,
      BH_RUNTIME_DIR_SHARED: "1",
      BH_TMP_DIR: tempDir,
    },
    sandbox: "external-workspace-openai-browser",
    codex_home: codexHome,
    browser_socket: socketPath,
  };
}

export function codexAuthDoctorSpec({
  workspace,
  codexBin = process.env.OMD_BENCH_CODEX_BIN ?? "codex",
  env = process.env,
}) {
  const root = resolve(workspace);
  const runtimeDir = browserHarnessRuntimeDir(env);
  const socketPath = browserHarnessSocketPath(env);
  const codexHome = isolatedCodexHome(root);
  return {
    executable: codexBin,
    args: [
      ...outerSandboxArgs({ root, socketPath }),
      codexBin,
      "login",
      "status",
    ],
    env: {
      ...registeredBrowserEnv(env),
      HOME: codexHome,
      CODEX_HOME: codexHome,
      BH_RUNTIME_DIR: runtimeDir,
      BH_RUNTIME_DIR_SHARED: "1",
      BH_TMP_DIR: browserHarnessTempDir(root),
    },
    sandbox: "external-workspace-openai-browser",
    codex_home: codexHome,
    browser_socket: socketPath,
  };
}
