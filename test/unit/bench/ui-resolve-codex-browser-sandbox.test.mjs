import { describe, expect, it } from "vitest";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import {
  browserHarnessTempDir,
  codexBrowserDoctorSpec,
  codexBrowserSandboxSpec,
  preparedWorkspaceRequiresBrowserProof,
} from "../../../benchmarks/ui-resolve-bench/scripts/codex-browser-sandbox-contract.mjs";

describe("Codex browser proof sandbox contract", () => {
  it("wraps browser-required Codex in workspace isolation with only the harness socket", () => {
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
      "sandbox", "-P", ":workspace", "-C", workspace,
      "--allow-unix-socket", runtime,
      "/opt/bin/codex", "exec", "--dangerously-bypass-approvals-and-sandbox", "-",
    ]);
    expect(spec.args).not.toContain("workspace-write");
    expect(spec.env).toEqual({
      BH_RUNTIME_DIR: runtime,
      BH_TMP_DIR: browserHarnessTempDir(workspace),
    });
    expect(spec.sandbox).toBe("external-workspace-browser-socket");
  });

  it("uses the identical permission path for the browser readiness probe", () => {
    const spec = codexBrowserDoctorSpec({
      workspace: "/tmp/matrix",
      codexBin: "codex-test",
      env: { BH_RUNTIME_DIR: "/tmp/runtime", PATH: "/bin" },
    });
    expect(spec.args).toEqual([
      "sandbox", "-P", ":workspace", "-C", "/tmp/matrix",
      "--allow-unix-socket", "/tmp/runtime", "browser-harness", "--doctor",
    ]);
    expect(spec.env).toMatchObject({
      BH_RUNTIME_DIR: "/tmp/runtime",
      BH_TMP_DIR: "/tmp/matrix/.benchmark/browser-harness",
    });
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
