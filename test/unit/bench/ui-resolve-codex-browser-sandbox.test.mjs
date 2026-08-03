import { describe, expect, it } from "vitest";
import { mkdirSync, mkdtempSync, readlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import {
  browserHarnessTempDir,
  codexAuthDoctorSpec,
  codexBenchmarkPermissionProfile,
  codexBrowserDoctorSpec,
  codexBrowserSandboxSpec,
  isolatedCodexHome,
  prepareIsolatedCodexHome,
  preparedWorkspaceRequiresBrowserProof,
} from "../../../benchmarks/ui-resolve-bench/scripts/codex-browser-sandbox-contract.mjs";

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
      "--allow-unix-socket", runtime,
      "/opt/bin/codex", "exec", "--dangerously-bypass-approvals-and-sandbox", "-",
    ]);
    expect(spec.args).not.toContain("workspace-write");
    expect(spec.env).toEqual({
      HOME: isolatedCodexHome(workspace),
      CODEX_HOME: isolatedCodexHome(workspace),
      BH_RUNTIME_DIR: runtime,
      BH_TMP_DIR: browserHarnessTempDir(workspace),
    });
    expect(spec.codex_home).toBe(isolatedCodexHome(workspace));
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
      },
    });
    expect(spec.args).toEqual([
      "sandbox",
      "-c", `permissions.omd-benchmark-browser=${codexBenchmarkPermissionProfile()}`,
      "-c", "default_permissions=\"omd-benchmark-browser\"",
      "-P", "omd-benchmark-browser", "-C", "/tmp/matrix",
      "--allow-unix-socket", "/tmp/runtime",
      "browser-harness", "--doctor",
    ]);
    expect(spec.env).toMatchObject({
      BH_RUNTIME_DIR: "/tmp/runtime",
      BH_TMP_DIR: "/tmp/matrix/.benchmark/browser-harness",
      BU_NAME: "bench-test",
    });
    expect(spec.env).not.toHaveProperty("BU_CDP_URL");
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
      "--allow-unix-socket", "/tmp/runtime",
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

  it("pins inference egress to OpenAI domains in the external profile", () => {
    const profile = codexBenchmarkPermissionProfile();
    expect(profile).toContain("mode=\"limited\"");
    expect(profile).toContain("\"chatgpt.com\"=\"allow\"");
    expect(profile).toContain("\"*.openai.com\"=\"allow\"");
  });

  it("derives browser proof need only from the prepared cell gate", () => {
    const workspace = mkdtempSync(join(tmpdir(), "omd-browser-cell-contract-"));
    const benchmark = join(workspace, ".benchmark");
    mkdirSync(benchmark);
    expect(preparedWorkspaceRequiresBrowserProof(workspace)).toBe(false);
    writeFileSync(join(benchmark, "matrix-cell.json"), JSON.stringify({
      host_policy_gate: { require_browser_attempt: true },
    }));
    expect(preparedWorkspaceRequiresBrowserProof(workspace)).toBe(true);
  });
});
