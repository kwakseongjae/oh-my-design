#!/usr/bin/env node
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { PROVIDER_ROUTING_POLICY } from "./runtime-contract.mjs";

const REQUIRED_MODELS = ["gpt-5.6-luna", "gpt-5.6-terra", "gpt-5.6-sol"];
const REQUIRED_FORBIDDEN_CLAIMS = [
  "provider-attested-model-identity",
  "model-superiority",
  "cross-model-ranking",
  "statistical-superiority",
  "reliability-estimate",
  "industry-best",
  "promotion-ready-38-of-51",
  "max-or-ultra-improves-quality",
  "2.0-release-gate-from-this-test-alone",
];
const REQUIRED_ALLOWED_CLAIMS = [
  "exact-block-completed-51-of-51",
  "objective-resolved-38-of-51",
  "objective-and-proof-resolved-34-of-51",
  "high-objective-resolved-8-of-9",
  "high-objective-and-proof-resolved-8-of-9",
  "observed-token-total-36890716-with-50-of-51-coverage",
  "task-specific-descriptive-model-and-effort-rows",
];
const REQUIRED_DISCLOSURES = [
  "three fixed tasks",
  "one trial per model-effort-task cell",
  "configuration-attributed model identity",
  "objective and proof-execution are separate gates",
  "token totals cover 50 of 51 cells",
];

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function exactArray(left, right) {
  return Array.isArray(left) && JSON.stringify(left) === JSON.stringify(right);
}

function repoFile(repoRoot, reference, label) {
  if (typeof reference !== "string" || !reference || isAbsolute(reference)
    || reference.split(/[\\/]/).includes("..")) {
    throw new Error(`${label} must be a repository-relative path`);
  }
  const root = resolve(repoRoot);
  const path = resolve(root, reference);
  if (path !== root && !path.startsWith(`${root}${sep}`)) throw new Error(`${label} escapes repository`);
  if (!existsSync(path)) throw new Error(`${label} is missing: ${reference}`);
  return path;
}

function derivedFacts(summary) {
  if (summary?.kind !== "codex-all-effort-sweep-descriptive"
    || summary.interpretation_allowed !== true
    || summary.interpretation_gate?.valid_records !== 51
    || summary.interpretation_gate?.exact_routing_attestation_records !== 51
    || summary.interpretation_gate?.exact_model_catalog_authority_records !== 51
    || summary.analysis_contract?.cross_model_pooling !== false) {
    throw new Error("source summary is not an interpretable exact 51-cell effort sweep");
  }
  const raw = summary.groups.flatMap((group) => group.raw_task_results ?? []);
  const high = summary.groups.filter((group) => group.effort === "high");
  return {
    terminal_valid_cells: summary.interpretation_gate.valid_records,
    objective_resolved_cells: raw.filter((result) => result.ui_resolved === true).length,
    high_cells: high.reduce((total, group) => total + group.runs.scheduled, 0),
    high_objective_resolved_cells: high.reduce(
      (total, group) => total + (group.ui_resolved_tasks?.resolved ?? 0),
      0,
    ),
    observed_token_cells: raw.filter((result) => result.token_components?.total_tokens != null).length,
    observed_total_tokens: raw.reduce(
      (total, result) => total + (result.token_components?.total_tokens ?? 0),
      0,
    ),
    public_model_attribution_eligible_cells: summary.groups.reduce(
      (total, group) => total + group.configuration_evidence.public_model_attribution_eligible_runs,
      0,
    ),
  };
}

export function auditPublicBenchmarkClaimPolicy(policy, repoRoot) {
  if (policy?.schema_version !== "0.1"
    || policy.policy_id !== "codex-effort-routing-public-claims-1.9.827"
    || policy.source_experiment !== "codex-all-effort-sweep-1.9.826") {
    throw new Error("public benchmark claim policy identity drift");
  }
  const summaryPath = repoFile(repoRoot, policy.evidence?.summary_ref, "summary_ref");
  const resultsPath = repoFile(repoRoot, policy.evidence?.results_ref, "results_ref");
  const summaryBytes = readFileSync(summaryPath);
  const resultsBytes = readFileSync(resultsPath);
  if (sha256(summaryBytes) !== policy.evidence.summary_sha256) throw new Error("summary evidence SHA drift");
  if (sha256(resultsBytes) !== policy.evidence.results_sha256) throw new Error("results evidence SHA drift");

  const facts = derivedFacts(JSON.parse(summaryBytes.toString("utf8")));
  const frozen = policy.frozen_facts ?? {};
  for (const field of [
    "terminal_valid_cells",
    "objective_resolved_cells",
    "high_cells",
    "high_objective_resolved_cells",
    "observed_token_cells",
    "observed_total_tokens",
  ]) {
    if (facts[field] !== frozen[field]) throw new Error(`frozen benchmark fact drift: ${field}`);
  }
  if (facts.public_model_attribution_eligible_cells !== 0
    || policy.publication?.public_model_attribution_eligible_cells !== 0) {
    throw new Error("public model attribution must remain unavailable");
  }

  const results = resultsBytes.toString("utf8");
  if (!results.includes("Objective UI resolved and proof-execution gate passed: **34 / 51 (66.67%)**")
    || !results.includes("| high | 9 | 8 / 9 (88.89%) | 8 / 9 |")) {
    throw new Error("proof-gate disclosure evidence drift");
  }
  if (frozen.objective_and_proof_resolved_cells !== 34
    || frozen.high_objective_and_proof_resolved_cells !== 8) {
    throw new Error("frozen proof-gate fact drift");
  }

  const routing = policy.routing_decision ?? {};
  if (routing.scope !== "ui-design-execution"
    || routing.eligible_runtime !== "codex"
    || !exactArray(routing.eligible_models, REQUIRED_MODELS)
    || routing.recommended_default_effort !== "high"
    || routing.decision_tier !== "internal-descriptive-default"
    || routing.explicit_user_effort !== "preserve-if-supported"
    || routing.automatic_escalation_allowed !== false
    || routing.retry_with_higher_effort_allowed !== false
    || routing.fallback_effort_allowed !== false
    || routing.max_and_ultra_default_allowed !== false
    || routing.catalog_default_effort_overridden !== false) {
    throw new Error("effort routing decision drift");
  }
  for (const model of REQUIRED_MODELS) {
    const modelPolicy = PROVIDER_ROUTING_POLICY.known_models?.[model]?.ui_effort_policy;
    if (modelPolicy?.recommended_default !== "high"
      || modelPolicy.automatic_escalation_allowed !== false) {
      throw new Error(`provider effort routing policy drift: ${model}`);
    }
  }

  const publication = policy.publication ?? {};
  if (publication.tier !== "public-descriptive-configuration-only"
    || publication.model_identity_wording !== "Codex configuration-routed Luna/Terra/Sol"
    || !exactArray(publication.required_disclosures, REQUIRED_DISCLOSURES)
    || !exactArray(publication.allowed_claims, REQUIRED_ALLOWED_CLAIMS)
    || !exactArray(publication.forbidden_claims, REQUIRED_FORBIDDEN_CLAIMS)
    || publication.two_point_zero_promotion_effect !== "none") {
    throw new Error("public claim boundary drift");
  }

  return {
    schema_version: "0.1",
    policy_id: policy.policy_id,
    status: "PASS",
    routing_default: {
      scope: routing.scope,
      runtime: routing.eligible_runtime,
      models: routing.eligible_models,
      effort: routing.recommended_default_effort,
      automatic_escalation_allowed: false,
    },
    publication: {
      tier: publication.tier,
      attribution_scope: "configuration-only",
      two_point_zero_promotion_effect: "none",
      forbidden_claim_count: publication.forbidden_claims.length,
    },
    evidence: {
      summary_sha256: policy.evidence.summary_sha256,
      results_sha256: policy.evidence.results_sha256,
      facts: { ...facts, objective_and_proof_resolved_cells: 34, high_objective_and_proof_resolved_cells: 8 },
    },
  };
}

function parseArgs(argv) {
  const args = new Map();
  for (let index = 0; index < argv.length; index += 2) {
    if (!argv[index]?.startsWith("--") || argv[index + 1] === undefined) {
      throw new Error("arguments must be --key value pairs");
    }
    args.set(argv[index].slice(2), argv[index + 1]);
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const repoRoot = resolve(args.get("repo-root") ?? resolve(scriptDir, "../../.."));
  const policyPath = resolve(args.get("policy") ?? resolve(
    repoRoot,
    "benchmarks/ui-resolve-bench/config/public-benchmark-claim-policy.json",
  ));
  const report = auditPublicBenchmarkClaimPolicy(
    JSON.parse(readFileSync(policyPath, "utf8")),
    repoRoot,
  );
  const rendered = `${JSON.stringify(report, null, 2)}\n`;
  if (args.get("out")) writeFileSync(resolve(args.get("out")), rendered);
  process.stdout.write(rendered);
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) await main();
