import { describe, expect, it } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  inspectCodexModelToolMode,
  installedCodexPolicyToolModeStopReason,
} from "../../../benchmarks/ui-resolve-bench/scripts/codex-tool-mode-contract.mjs";

describe("Codex benchmark tool-mode admission", () => {
  it("reads and pins the selected model profile", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-codex-tool-mode-"));
    mkdirSync(join(root, ".codex"));
    writeFileSync(join(root, ".codex", "models_cache.json"), JSON.stringify({
      fetched_at: "2026-08-03T00:00:00Z",
      client_version: "0.144.1",
      models: [
        { slug: "gpt-5.6-luna", tool_mode: "code_mode_only" },
        { slug: "direct-model", tool_mode: "function" },
      ],
    }));
    const env = { OMD_BENCH_AUTH_CODEX_HOME: join(root, ".codex") };
    const luna = inspectCodexModelToolMode("gpt-5.6-luna", env);
    expect(luna).toMatchObject({
      model_id: "gpt-5.6-luna",
      tool_mode: "code_mode_only",
      installed_policy_eligible: false,
      cache_client_version: "0.144.1",
    });
    expect(luna.cache_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(luna.model_profile_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(installedCodexPolicyToolModeStopReason(luna)).toBe(
      "codex-installed-policy-tool-mode-uninterceptable:gpt-5.6-luna:code_mode_only",
    );
    expect(installedCodexPolicyToolModeStopReason(
      inspectCodexModelToolMode("direct-model", env),
    )).toBeNull();
  });

  it("keeps the selected model profile pin stable across cache refresh metadata", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-codex-profile-pin-"));
    mkdirSync(join(root, ".codex"));
    const cachePath = join(root, ".codex", "models_cache.json");
    const model = { slug: "gpt-5.6-luna", tool_mode: "code_mode_only", context_window: 272000 };
    writeFileSync(cachePath, JSON.stringify({
      fetched_at: "2026-08-03T00:00:00Z",
      client_version: "0.144.1",
      models: [model],
    }));
    const env = { OMD_BENCH_AUTH_CODEX_HOME: join(root, ".codex") };
    const first = inspectCodexModelToolMode("gpt-5.6-luna", env);
    writeFileSync(cachePath, JSON.stringify({
      fetched_at: "2026-08-04T00:00:00Z",
      client_version: "0.144.1",
      models: [model],
    }));
    const second = inspectCodexModelToolMode("gpt-5.6-luna", env);
    expect(second.cache_sha256).not.toBe(first.cache_sha256);
    expect(second.model_profile_sha256).toBe(first.model_profile_sha256);
  });

  it("fails closed when the selected profile is absent", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-codex-tool-mode-missing-"));
    mkdirSync(join(root, ".codex"));
    writeFileSync(join(root, ".codex", "models_cache.json"), JSON.stringify({ models: [] }));
    const observed = inspectCodexModelToolMode("unknown", {
      OMD_BENCH_AUTH_CODEX_HOME: join(root, ".codex"),
    });
    expect(observed).toMatchObject({
      tool_mode: null,
      installed_policy_eligible: false,
      reason: "model-profile-missing",
    });
  });
});
