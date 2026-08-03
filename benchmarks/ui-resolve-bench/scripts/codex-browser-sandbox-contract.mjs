import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

export function browserHarnessRuntimeDir(env = process.env) {
  return resolve(env.BH_RUNTIME_DIR ?? join(homedir(), ".config", "browser-harness", "runtime"));
}

export function browserHarnessTempDir(workspace) {
  return join(resolve(workspace), ".benchmark", "browser-harness");
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
  const tempDir = browserHarnessTempDir(root);
  return {
    executable: codexBin,
    args: [
      "sandbox",
      "-P", ":workspace",
      "-C", root,
      "--allow-unix-socket", runtimeDir,
      codexBin,
      ...innerArgs,
    ],
    env: {
      BH_RUNTIME_DIR: runtimeDir,
      BH_TMP_DIR: tempDir,
    },
    sandbox: "external-workspace-browser-socket",
    runtime_dir: runtimeDir,
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
  const tempDir = browserHarnessTempDir(root);
  return {
    executable: codexBin,
    args: [
      "sandbox",
      "-P", ":workspace",
      "-C", root,
      "--allow-unix-socket", runtimeDir,
      "browser-harness",
      "--doctor",
    ],
    env: {
      ...env,
      BH_RUNTIME_DIR: runtimeDir,
      BH_TMP_DIR: tempDir,
    },
    sandbox: "external-workspace-browser-socket",
  };
}
