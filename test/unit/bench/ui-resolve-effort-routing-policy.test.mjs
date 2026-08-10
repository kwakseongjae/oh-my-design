import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { auditPublicBenchmarkClaimPolicy } from "../../../benchmarks/ui-resolve-bench/scripts/audit-public-benchmark-claim-policy.mjs";
import {
  PROVIDER_ROUTING_POLICY,
  resolveUiEffortRoute,
  runnerSpecForCell,
} from "../../../benchmarks/ui-resolve-bench/scripts/runtime-contract.mjs";

const repoRoot = resolve(".");
const policyPath = resolve(
  "benchmarks/ui-resolve-bench/config/public-benchmark-claim-policy.json",
);

function policy() {
  return JSON.parse(readFileSync(policyPath, "utf8"));
}

describe("2.0 UI effort routing and public claim boundary", () => {
  it("uses high only as the bounded OmD UI default and preserves explicit supported effort", () => {
    expect(PROVIDER_ROUTING_POLICY.schema_version).toBe("0.2");
    expect(resolveUiEffortRoute({
      runtime: "codex",
      model: "gpt-5.6-luna",
    })).toEqual({
      effort: "high",
      source: "internal-descriptive-policy-default",
      scope: "ui-design-execution",
      automatic_escalation_allowed: false,
    });
    expect(resolveUiEffortRoute({
      runtime: "codex",
      model: "gpt-5.6-terra",
      effort: "medium",
    })).toMatchObject({ effort: "medium", source: "explicit-supported-effort" });
    expect(resolveUiEffortRoute({
      runtime: "codex",
      model: "gpt-5.6-sol",
      effort: "ultra",
    })).toMatchObject({ effort: "ultra", source: "explicit-supported-effort" });
  });

  it("fails closed for unsupported, unknown, or out-of-scope implicit effort", () => {
    expect(() => resolveUiEffortRoute({
      runtime: "codex",
      model: "gpt-5.6-luna",
      effort: "ultra",
    })).toThrow(/unsupported UI effort/);
    expect(() => resolveUiEffortRoute({
      runtime: "codex",
      model: "gpt-5.6-unknown",
    })).toThrow(/unknown Codex model/);
    expect(() => resolveUiEffortRoute({
      runtime: "codex",
      model: "gpt-5.6-terra",
      scope: "general-purpose",
    })).toThrow(/default is unavailable outside/);
    expect(() => resolveUiEffortRoute({ runtime: "cursor", model: "cursor-grok-4.5-high" }))
      .toThrow(/must be explicit/);
    expect(resolveUiEffortRoute({
      runtime: "codex",
      model: "codex-fake-calibration",
      effort: "high",
    })).toMatchObject({ effort: "high", source: "explicit-unmanaged-model-effort" });
  });

  it("applies the default in the runner without changing explicit benchmark cells", () => {
    const implicit = runnerSpecForCell({
      runtime: "codex",
      model_id: "gpt-5.6-luna",
      timeout_seconds: 720,
    }, "/tmp/implicit-effort");
    expect(implicit).toMatchObject({
      effort: "high",
      effort_source: "internal-descriptive-policy-default",
      automatic_effort_escalation_allowed: false,
    });
    expect(implicit.args).toEqual(expect.arrayContaining(["--reasoning", "high"]));

    const explicit = runnerSpecForCell({
      runtime: "codex",
      model_id: "gpt-5.6-luna",
      effort: "low",
      timeout_seconds: 720,
    }, "/tmp/explicit-effort");
    expect(explicit).toMatchObject({ effort: "low", effort_source: "explicit-supported-effort" });
  });

  it("audits the exact 1.9.826 evidence and keeps 2.0 promotion unchanged", () => {
    expect(auditPublicBenchmarkClaimPolicy(policy(), repoRoot)).toMatchObject({
      status: "PASS",
      routing_default: {
        effort: "high",
        automatic_escalation_allowed: false,
      },
      publication: {
        tier: "public-descriptive-configuration-only",
        attribution_scope: "configuration-only",
        two_point_zero_promotion_effect: "none",
      },
      evidence: {
        facts: {
          terminal_valid_cells: 51,
          objective_resolved_cells: 38,
          objective_and_proof_resolved_cells: 34,
          high_cells: 9,
          high_objective_resolved_cells: 8,
          high_objective_and_proof_resolved_cells: 8,
          observed_token_cells: 50,
          observed_total_tokens: 36890716,
          public_model_attribution_eligible_cells: 0,
        },
      },
    });
  });

  it("rejects evidence, escalation, recommendation, and public-claim drift", () => {
    const evidence = policy();
    evidence.evidence.summary_sha256 = "0".repeat(64);
    expect(() => auditPublicBenchmarkClaimPolicy(evidence, repoRoot)).toThrow(/summary evidence SHA drift/);

    const effort = policy();
    effort.routing_decision.recommended_default_effort = "max";
    expect(() => auditPublicBenchmarkClaimPolicy(effort, repoRoot)).toThrow(/effort routing decision drift/);

    const escalation = policy();
    escalation.routing_decision.automatic_escalation_allowed = true;
    expect(() => auditPublicBenchmarkClaimPolicy(escalation, repoRoot)).toThrow(/effort routing decision drift/);

    const claim = policy();
    claim.publication.forbidden_claims.pop();
    expect(() => auditPublicBenchmarkClaimPolicy(claim, repoRoot)).toThrow(/public claim boundary drift/);

    const inventedClaim = policy();
    inventedClaim.publication.allowed_claims.push("luna-is-best");
    expect(() => auditPublicBenchmarkClaimPolicy(inventedClaim, repoRoot)).toThrow(/public claim boundary drift/);

    const promotion = policy();
    promotion.publication.two_point_zero_promotion_effect = "pass";
    expect(() => auditPublicBenchmarkClaimPolicy(promotion, repoRoot)).toThrow(/public claim boundary drift/);
  });
});
