import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  CORE_SCHEMA_FILES,
  buildCells,
  buildExecutionAdapterPlan,
  sourceAuthorityEntry,
  validateCompetitorLock,
  validateConfig,
  validateEvaluationRuntimeReceipt,
  validateNeutralTaskPacketLock,
  validateNamedBrowserReceipt,
  validateRuntimeAttributionReceipt,
  validateStaticRuntimeCapabilityReceipt,
  validateSchemaLivenessReceipt,
  validateTaskPrompts,
} from "../../../benchmarks/ui-resolve-bench/scripts/prepare-luna-max-wow-preview.mjs";
import { validateRunMatrixPlan } from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";

const root = process.cwd();
const configPath = resolve(root, "benchmarks/ui-resolve-bench/config/omd-luna-max-wow-preview-v0.1.json");
const taskSetPath = resolve(root, "benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json");
const config = JSON.parse(readFileSync(configPath, "utf8"));
const taskSet = JSON.parse(readFileSync(taskSetPath, "utf8"));
const officialCompetitorLock = JSON.parse(readFileSync(resolve(root, "benchmarks/ui-resolve-bench/config/omd-2.0-competitor-source-lock-v0.1.json"), "utf8"));
const sha256 = (value) => createHash("sha256").update(value).digest("hex");

function competitorLock() {
  return {
    schema_version: "0.1",
    lock_id: "omd-2.0-competitor-source-lock-v0.1",
    status: "locked-provider-zero",
    sources: config.admission.official_competitor_freshness_lock.required_source_ids.map((id, index) => ({
      id,
      repository: `https://github.com/example/vendor-${index}`,
      official_source: `https://github.com/example/vendor-${index}/tree/${"a".repeat(40)}/skill`,
      source_ref: { resolved_commit: "a".repeat(40) },
      source_tree: { sha256: "b".repeat(64) },
      activation: { exact_prefix: "Use exact skill." },
      license: { spdx: "test-license" },
      benchmark_variant_id: Object.entries(config.admission.official_competitor_freshness_lock.arm_source_map)
        .find(([, sourceId]) => sourceId === id)[0],
    })),
    execution_boundary: { provider_calls: 0, model_calls: 0, browser_calls: 0 },
  };
}

function neutralTaskPacketLock() {
  return {
    schema_version: "0.1",
    kind: "neutral-wow-preview-task-packet-lock",
    status: "frozen",
    same_source_facts_for_every_arm: true,
    task_specific_design_md_allowed: false,
    oracle_or_mutant_allowed: false,
    task_set: { ...config.authorities.task_set },
    blank_starter: { ...config.authorities.blank_starter },
    forbidden_prepared_root_entries: ["DESIGN.md", ".omd/", "oracle", "mutant", "hidden-examples"],
    tasks: config.tasks.map((task) => ({
      task_id: task.task_id,
      prompt_bytes: task.prompt_bytes,
      prompt_sha256: task.prompt_sha256,
      source_facts_sha256: sha256(JSON.stringify({
        blank_starter_sha256: config.authorities.blank_starter.sha256,
        prompt_sha256: task.prompt_sha256,
      })),
    })),
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
  };
}

describe("Luna Max Wow Preview provider-zero controller", () => {
  it("binds the release plan, routing contract, prompt bytes and an unresolved competitor lock", () => {
    expect(validateConfig(config)).toBe(true);
    expect(validateTaskPrompts(config, taskSet)).toBe(true);
    expect(config.admission.official_competitor_freshness_lock).toEqual(expect.objectContaining({
      required: true,
      status: "unresolved",
      path: null,
      sha256: null,
    }));
    expect(config.task_selection_status).toBe("selected-neutral-input-awaiting-packet-receipt");
    expect(config.admission.neutral_task_packet_lock).toEqual(expect.objectContaining({
      required: true,
      status: "unresolved",
      path: null,
      sha256: null,
      same_source_facts_for_every_arm: true,
    }));
    expect(config.preparation_calls).toEqual({ provider_calls: 0, model_calls: 0, browser_calls: 0 });
    expect(config.fairness_contract).toEqual({
      same_user_task_packet_bytes: true,
      native_activation_prefix_is_only_arm_specific_prompt_delta: true,
      activation_prefix_and_invocation_hash_public: true,
      arm_specific_design_or_task_facts_forbidden: true,
    });
  });

  it("fails closed when current source bytes differ from the pinned commit bytes", () => {
    const committed = Buffer.from("committed-authority");
    expect(sourceAuthorityEntry("authority.json", committed, committed)).toEqual({
      path: "authority.json",
      bytes: committed.length,
      sha256: sha256(committed),
    });
    expect(() => sourceAuthorityEntry("authority.json", Buffer.from("dirty"), committed))
      .toThrow(/differs from commit/);
  });

  it("requires a neutral same-facts packet bound to blank-shell and prepared-root exclusions", () => {
    expect(validateNeutralTaskPacketLock(neutralTaskPacketLock(), config)).toBe(true);
    const contaminated = neutralTaskPacketLock();
    contaminated.forbidden_prepared_root_entries = ["oracle", "mutant"];
    expect(() => validateNeutralTaskPacketLock(contaminated, config)).toThrow(/prepared-root exclusions drift/);
    const unequal = neutralTaskPacketLock();
    unequal.same_source_facts_for_every_arm = false;
    expect(() => validateNeutralTaskPacketLock(unequal, config)).toThrow(/fairness drift/);
  });

  it("creates 54 frozen slots but schedules only the 48 scope-eligible Luna/max cells", () => {
    const cells = buildCells(config);
    expect(cells).toHaveLength(54);
    expect(new Set(cells.map((cell) => cell.id)).size).toBe(54);
    expect(cells.map((cell) => cell.order)).toEqual(Array.from({ length: 54 }, (_, index) => index + 1));
    expect(cells.every((cell) => cell.runtime === "codex" && cell.model_id === "gpt-5.6-luna" && cell.effort === "max")).toBe(true);
    expect(cells.every((cell) => cell.retry_budget === 0 && cell.replacement_budget === 0 && cell.fallback_budget === 0)).toBe(true);
    expect(cells.filter((cell) => cell.eligible_for_execution_and_scoring)).toHaveLength(48);
    expect(cells.filter((cell) => !cell.eligible_for_execution_and_scoring)).toHaveLength(6);
    expect(cells.filter((cell) => !cell.eligible_for_execution_and_scoring).every((cell) =>
      cell.variant_id === "taste-eligible-scope-only" && cell.task_id !== "neighborhood-library-landing")).toBe(true);
    for (const task of config.tasks) {
      for (const arm of config.arms) {
        expect(cells.filter((cell) => cell.task_id === task.task_id && cell.variant_id === arm)).toHaveLength(3);
      }
    }
  });

  it("emits a 48-cell plan accepted by the existing run-matrix validator", () => {
    const plan = buildExecutionAdapterPlan(config, buildCells(config), "/private/tmp/omd-wow-test");
    expect(() => validateRunMatrixPlan(plan)).not.toThrow();
    expect(plan.cells).toHaveLength(48);
    expect(plan.checkpoint_continuation_contract).toEqual(expect.objectContaining({
      max_new_cells_per_invocation: 1,
      failed_cells_retained_in_denominator: true,
    }));
  });

  it("requires complete official competitor evidence and zero preparation calls", () => {
    expect(validateCompetitorLock(officialCompetitorLock, config)).toBe(true);
    expect(validateCompetitorLock(competitorLock(), config)).toBe(true);
    const missingTaste = competitorLock();
    missingTaste.sources.pop();
    expect(() => validateCompetitorLock(missingTaste, config)).toThrow(/source count drift/);
    const inventedCall = competitorLock();
    inventedCall.execution_boundary.provider_calls = 1;
    expect(() => validateCompetitorLock(inventedCall, config)).toThrow(/provider_calls must be zero/);
  });

  it("accepts only seven exact 200 JSON public schema mirrors from the source commit", () => {
    const sourceCommit = "c".repeat(40);
    const bytes = Object.fromEntries(CORE_SCHEMA_FILES.map((name) => [name, Buffer.from(`schema:${name}`)]));
    const receipt = {
      schema_version: "0.1",
      kind: "public-core-schema-liveness-receipt",
      pass: true,
      source_commit: sourceCommit,
      base_url: "https://oh-my-design.kr",
      schemas: CORE_SCHEMA_FILES.map((name) => ({
        name,
        http_status: 200,
        content_type: "application/json; charset=utf-8",
        bytes: bytes[name].length,
        local_sha256: sha256(bytes[name]),
        remote_sha256: sha256(bytes[name]),
      })),
      provider_calls: 0,
      model_calls: 0,
      browser_calls: 0,
    };
    expect(validateSchemaLivenessReceipt(receipt, sourceCommit, (name) => bytes[name])).toBe(true);
    receipt.schemas[0].http_status = 404;
    expect(() => validateSchemaLivenessReceipt(receipt, sourceCommit, (name) => bytes[name])).toThrow(/liveness mismatch/);
  });

  it("requires a one-call Luna/max attribution probe excluded from the benchmark denominator", () => {
    const sourceCommit = "d".repeat(40);
    const receipt = {
      schema_version: "0.1",
      kind: "codex-luna-max-runtime-attribution-preflight",
      pass: true,
      source_commit: sourceCommit,
      excluded_from_benchmark_denominator: true,
      runtime: {
        provider: "codex",
        model: "gpt-5.6-luna",
        effort: "max",
        model_selector_observed: true,
        effort_selector_observed: true,
        telemetry_sha256: "e".repeat(64),
      },
      provider_calls: 1,
      model_calls: 1,
      browser_calls: 0,
    };
    expect(validateRuntimeAttributionReceipt(receipt, sourceCommit)).toBe(true);
    receipt.runtime.effort = "high";
    expect(() => validateRuntimeAttributionReceipt(receipt, sourceCommit)).toThrow(/runtime telemetry drift/);
  });

  it("validates named browser identity independently without a provider call", () => {
    const sourceCommit = "f".repeat(40);
    const receipt = {
      schema_version: "0.1",
      kind: "named-existing-browser-identity-preflight",
      pass: true,
      source_commit: sourceCommit,
      browser: {
        name: "omd20wow",
        named_existing: true,
        available: true,
        launched_by_controller: false,
        tab_id: "tab-1",
        url: "about:blank",
        identity_sha256: "f".repeat(64),
      },
      provider_calls: 0,
      model_calls: 0,
      browser_calls: 1,
    };
    expect(validateNamedBrowserReceipt(receipt, sourceCommit)).toBe(true);
  });

  it("separates zero-call static capability from the one-call attribution probe", () => {
    const sourceCommit = "a".repeat(40);
    const receipt = {
      schema_version: "0.1",
      kind: "codex-luna-max-static-runtime-capability",
      pass: true,
      source_commit: sourceCommit,
      runtime: {
        provider: "codex",
        model: "gpt-5.6-luna",
        effort: "max",
        catalog_supports_model: true,
        catalog_supports_effort: true,
        catalog_sha256: "b".repeat(64),
        model_profile_sha256: "c".repeat(64),
      },
      provider_calls: 0,
      model_calls: 0,
      browser_calls: 0,
    };
    expect(validateStaticRuntimeCapabilityReceipt(receipt, sourceCommit)).toBe(true);
    receipt.model_calls = 1;
    expect(() => validateStaticRuntimeCapabilityReceipt(receipt, sourceCommit)).toThrow(/model_calls must be zero/);
  });

  it("requires an exact zero-call evaluator, browser, dependency, viewport, and font closure", () => {
    const sourceCommit = "a".repeat(40);
    const evaluationAuthorities = Object.fromEntries(
      ["evaluator", "evaluator_adapters", "task_set", "task_set_validator", "adapter_validator"]
        .map((name) => [name, { ...config.authorities[name], bytes: 10 }]),
    );
    const receipt = {
      schema_version: "0.1",
      kind: "omd-luna-max-evaluation-runtime-receipt",
      pass: true,
      source_commit: sourceCommit,
      evaluation_authorities: evaluationAuthorities,
      browser: { executable_path: "/fixture/chrome", executable_bytes: 10, executable_sha256: "b".repeat(64), version: "Chrome 151" },
      dependencies: { package_lock: { path: "package-lock.json", sha256: "c".repeat(64) }, resolved: [{ name: "playwright-core" }, { name: "axe-core" }] },
      fonts: { files: [{ path: "/fixture/font.ttf" }], file_count: 1, sha256: "d".repeat(64) },
      evaluator_runtime: {
        engine: "chromium", headless: true,
        contexts: { viewports: [{}, {}, {}, {}] },
        network_policy: { local_origin_only: true },
      },
      provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0,
    };
    expect(validateEvaluationRuntimeReceipt(receipt, sourceCommit, config)).toBe(true);
    receipt.evaluation_authorities.evaluator.sha256 = "e".repeat(64);
    expect(() => validateEvaluationRuntimeReceipt(receipt, sourceCommit, config)).toThrow(/authority drift/);
  });
});
