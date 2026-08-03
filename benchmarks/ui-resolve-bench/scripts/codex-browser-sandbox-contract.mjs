import { existsSync, lstatSync, mkdirSync, readFileSync, readlinkSync, symlinkSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

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

export function prepareIsolatedCodexHome(workspace, env = process.env) {
  const target = isolatedCodexHome(workspace);
  const sourceHome = resolve(env.OMD_BENCH_AUTH_CODEX_HOME ?? join(homedir(), ".codex"));
  const sourceAuth = join(sourceHome, "auth.json");
  const targetAuth = join(target, "auth.json");
  if (!existsSync(sourceAuth)) throw new Error(`codex benchmark auth missing: ${sourceAuth}`);
  mkdirSync(target, { recursive: true });
  if (!existsSync(targetAuth)) {
    symlinkSync(sourceAuth, targetAuth);
  } else if (!lstatSync(targetAuth).isSymbolicLink() || resolve(target, readlinkSync(targetAuth)) !== sourceAuth) {
    throw new Error(`codex benchmark auth link mismatch: ${targetAuth}`);
  }
  return target;
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
  return cell?.host_policy_gate?.require_browser_attempt === true;
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
