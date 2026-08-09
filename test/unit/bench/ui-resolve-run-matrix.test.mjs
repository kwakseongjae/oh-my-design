import { describe, expect, it } from "vitest";
import {
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { createHash } from "node:crypto";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  benchmarkArtifactManifest,
  candidatePreflightStopReason,
  completeBlockRoutingStopReason,
  completedControllerPreEditPlanReceipt,
  directBrowserCommandCount,
  executeControllerPreEditPlan,
  completedCellSummary,
  harnessDeliveryStopReason,
  firstProductWriteTransaction,
  hostPolicyAdmissionDisposition,
  installTrustedCompatibilityArtifacts,
  lastAdvisoryToFirstProductWriteMs,
  preflightRuntimeEnvironment,
  preregisteredStopReason,
  reliabilityHardStopReason,
  replacementVerifierAuthorship,
  runCompleteBlockPreparedAdmissionAudit,
  runArgsForCell,
  sealCompleteBlockRuntimeAdmission,
  validPreparedCellAttestation,
  validateCompleteBlockExecutionContract,
  validateRunPreparedMatrixCliArgs,
} from "../../../benchmarks/ui-resolve-bench/scripts/run-prepared-matrix.mjs";
import { buildCodexRoutingAttestation } from "../../../benchmarks/ui-resolve-bench/scripts/export-run-record.mjs";

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

function controllerPlanFixture() {
  const workspace = mkdtempSync(join(tmpdir(), "omd-controller-plan-"));
  const product = "<!doctype html><title>sealed</title>\n";
  mkdirSync(join(workspace, ".omd"), { recursive: true });
  mkdirSync(join(workspace, ".agents/skills/omd-apply/scripts"), { recursive: true });
  writeFileSync(join(workspace, "index.html"), product, "utf8");
  writeFileSync(
    join(workspace, ".agents/skills/omd-apply/scripts/reflow-browser-runner.sh"),
    "#!/bin/sh\nexit 0\n",
    "utf8",
  );
  const artifactPath = join(workspace, ".omd/reflow-closure.json");
  const artifact = {
    source_contract: { state: "provider-sealed" },
    pre_edit_fit_plan: { state: "pending" },
    pre_edit_product_snapshot: {
      product_path: "index.html",
      sha256: digest(product),
    },
  };
  writeFileSync(artifactPath, JSON.stringify(artifact), "utf8");
  const plan = {
    browser_execution_contract: { require_browser_proof: true },
    controller_pre_edit_plan_contract: {
      mode: "provider-zero-shipped-runner",
      required: true,
      artifact_path: ".omd/reflow-closure.json",
      runner_path: ".agents/skills/omd-apply/scripts/reflow-browser-runner.sh",
      reflow_mode: "plan",
      measured_attempts: 1,
      provider_calls: 0,
      cursor_calls: 0,
      timeout_seconds: 120,
    },
  };
  const env = { BU_NAME: "omd-test", BU_CDP_URL: "http://127.0.0.1:9339" };
  return { workspace, product, artifact, artifactPath, plan, env };
}

const cell = {
  runtime: "claude-code",
  model_id: "claude-opus-4-8",
  effort: "xhigh",
  timeout_seconds: 900,
};
const manifest = {
  variant: { kind: "agent-harness" },
  agents: {
    required_model: "opus",
    installed: [{ id: "omd-ux-writer" }, { id: "omd-ux-engineer" }],
  },
};
const validRun = {
  started_at: "2026-07-23T00:00:00.000Z",
  process: { exit_code: 0, child_exit_code: 0, timed_out: false },
  runtime: { model: "claude-opus-4-8" },
  output: {
    final_message_present: true,
    model_usage: [{ model: "claude-opus-4-8" }],
    infrastructure_tool_error_count: 0,
    sandbox_error_count: 0,
    sandbox_cwd_error_count: 0,
    agent_tool_error_count: 0,
    requested_agent_ids: ["omd-ux-engineer", "omd-ux-writer"],
    agent_calls: [
      { agent_id: "omd-ux-writer", requested_model: "opus" },
      { agent_id: "omd-ux-engineer", requested_model: "opus" },
    ],
    milestones: { first_builtin_product_write_ms: 313484 },
  },
  workspace: {
    changed_product_files: [{ path: "index.html", status: "modified" }],
  },
};

describe("UI-Resolve prepared matrix execution", () => {
  it("keeps the checkpointed controller-plan receipt for a completed cell", () => {
    const receipt = {
      schema_version: "0.1",
      provider_calls: 0,
      cursor_calls: 0,
      artifact_sha256: "a".repeat(64),
    };
    const existing = {
      cells: [
        { id: "done", status: "complete" },
        { id: "next", status: "not-started" },
      ],
      controller_pre_edit_plans: { done: receipt },
    };
    expect(completedControllerPreEditPlanReceipt(existing, "done")).toBe(receipt);
    expect(completedControllerPreEditPlanReceipt(existing, "next")).toBeNull();
  });

  it("measures and attests the pre-edit fit plan before provider exposure", () => {
    const fixture = controllerPlanFixture();
    const calls = [];
    const receipt = executeControllerPreEditPlan(fixture.workspace, fixture.plan, {
      env: fixture.env,
      spawnFn(executable, args, options) {
        calls.push({ executable, args, options });
        const measured = {
          ...fixture.artifact,
          pre_edit_fit_plan: {
            state: "measured",
            attempts: 1,
            connection: {
              connection_name: fixture.env.BU_NAME,
              cdp_url: fixture.env.BU_CDP_URL,
              attached_existing: true,
              launched_browser: false,
            },
          },
        };
        writeFileSync(fixture.artifactPath, JSON.stringify(measured), "utf8");
        return { status: 0, stdout: "plan-close\n", stderr: "" };
      },
    });

    expect(calls).toHaveLength(1);
    expect(calls[0].executable).toBe("sh");
    expect(calls[0].args[0]).toMatch(/reflow-browser-runner\.sh$/);
    expect(calls[0].options.env.OMD_REFLOW_MODE).toBe("plan");
    expect(receipt).toMatchObject({
      provider_calls: 0,
      cursor_calls: 0,
      plan_state: "measured",
      plan_attempts: 1,
      connection_name: "omd-test",
      attached_existing: true,
      launched_browser: false,
      product_sha256: digest(fixture.product),
    });
  });

  it("fails closed before provider exposure when the controller plan mutates product bytes", () => {
    const fixture = controllerPlanFixture();
    expect(() => executeControllerPreEditPlan(fixture.workspace, fixture.plan, {
      env: fixture.env,
      spawnFn() {
        writeFileSync(join(fixture.workspace, "index.html"), "mutated\n", "utf8");
        writeFileSync(fixture.artifactPath, JSON.stringify({
          ...fixture.artifact,
          pre_edit_fit_plan: {
            state: "measured",
            attempts: 1,
            connection: {
              connection_name: fixture.env.BU_NAME,
              cdp_url: fixture.env.BU_CDP_URL,
              attached_existing: true,
              launched_browser: false,
            },
          },
        }), "utf8");
        return { status: 0, stdout: "plan-close\n", stderr: "" };
      },
    })).toThrow("controller-pre-edit-plan-mutated-product");
  });

  it("hard-stops a reliability matrix when the lifecycle contract is breached", () => {
    const plan = {
      cell_success_contract: {
        product_revision_count: 1,
        failed_static_closure_count: 0,
      },
      reliability_contract: {
        contract_hard_stop: [
          "sealed-inventory-drift",
          "second-product-edit",
          "failed-static-closure",
          "contract-proof-noncompliance",
          "candidate-preview-receipt-missing-or-failed",
          "candidate-final-byte-mismatch",
        ],
      },
    };
    const clean = {
      proof_trace: {
        product_edit_count: 1,
        product_revision_count: 1,
        failed_static_closure_count: 0,
        compliance_pass: true,
      },
      candidate_preflight: {
        receipt_present: true,
        receipt_valid: true,
        receipt_state: "passed",
        sealed_inventory_sha256_match: true,
        candidate_final_bytes_match: true,
      },
    };
    expect(reliabilityHardStopReason(plan, clean)).toBeNull();
    expect(reliabilityHardStopReason(plan, {
      ...clean,
      proof_trace: { ...clean.proof_trace, product_edit_count: 2, product_revision_count: 2 },
    })).toBe("second-product-edit");
    expect(reliabilityHardStopReason(plan, {
      ...clean,
      proof_trace: { ...clean.proof_trace, failed_static_closure_count: 1 },
    })).toBe("failed-static-closure");
    expect(reliabilityHardStopReason(plan, {
      ...clean,
      proof_trace: { ...clean.proof_trace, compliance_pass: false },
    })).toBe("contract-proof-noncompliance");
  });

  it("hard-stops a preregistered candidate preflight on missing or mismatched evidence", () => {
    const plan = { candidate_preflight_contract: { required: true } };
    expect(candidatePreflightStopReason(plan, { runtime_diagnostics: {} }))
      .toBe("candidate-preview-receipt-missing");
    expect(candidatePreflightStopReason(plan, {
      runtime_diagnostics: {
        candidate_preflight: {
          receipt_present: true,
          receipt_valid: true,
          receipt_state: "passed",
          source_contract_sha256_match: true,
          sealed_inventory_sha256_match: true,
          product_present: true,
          candidate_final_bytes_match: false,
        },
      },
    })).toBe("candidate-final-byte-mismatch");
    expect(candidatePreflightStopReason(plan, {
      runtime_diagnostics: {
        candidate_preflight: {
          receipt_present: true,
          receipt_valid: true,
          receipt_state: "passed",
          source_contract_sha256_match: true,
          sealed_inventory_sha256_match: true,
          product_present: true,
          candidate_final_bytes_match: true,
        },
      },
    })).toBeNull();
  });

  it("records missing or failed candidate receipts as terminal outcomes in a complete effort block", () => {
    const plan = {
      candidate_preflight_contract: { required: true },
      control_contract: { admission_normalization_policy: "complete-block-effort-scaling" },
    };
    expect(candidatePreflightStopReason(plan, { runtime_diagnostics: {} })).toBeNull();
    expect(candidatePreflightStopReason(plan, {
      runtime_diagnostics: {
        candidate_preflight: {
          receipt_present: true,
          receipt_valid: false,
          receipt_state: "failed",
        },
      },
    })).toBeNull();
    expect(reliabilityHardStopReason({
      ...plan,
      reliability_contract: {
        contract_hard_stop: ["contract-proof-noncompliance", "candidate-final-byte-mismatch"],
      },
    }, {
      proof_trace: { compliance_pass: false },
      candidate_preflight: { candidate_final_bytes_match: false },
    })).toBeNull();
    expect(candidatePreflightStopReason(plan, {
      runtime_diagnostics: {
        candidate_preflight: {
          receipt_present: true,
          receipt_valid: true,
          receipt_state: "passed",
          source_contract_sha256_match: true,
          sealed_inventory_sha256_match: false,
          product_present: true,
          candidate_final_bytes_match: true,
        },
      },
    })).toBe("candidate-preview-inventory-mismatch");
    expect(candidatePreflightStopReason(plan, {
      runtime_diagnostics: {
        candidate_preflight: {
          receipt_present: true,
          receipt_valid: true,
          receipt_state: "passed",
          source_contract_sha256_match: true,
          sealed_inventory_sha256_match: true,
          product_present: true,
          candidate_final_bytes_match: false,
        },
      },
    })).toBeNull();
  });

  it("fails a complete effort block closed unless every routing check is exact", () => {
    const matrixCell = {
      id: "cell",
      runtime: "codex",
      model_id: "gpt-5.6-luna",
      effort: "high",
    };
    const plan = {
      control_contract: { admission_normalization_policy: "complete-block-effort-scaling" },
      cells: [matrixCell],
      provider_routing_contract: {
        cursor_allowed: false,
        allowed_runtime: "codex",
        allowed_model_ids: ["gpt-5.6-luna"],
        allowed_model_effort_pairs: [{ model_id: "gpt-5.6-luna", effort: "high" }],
        fail_closed: true,
      },
      codex_model_effort_contract: {
        cache_sha256: "a".repeat(64),
        models: [{
          model_id: "gpt-5.6-luna",
          model_profile_sha256: "b".repeat(64),
          default_effort: "medium",
          supported_efforts: ["high"],
        }],
      },
    };
    const run = {
      runtime: {
        runtime_target: "codex",
        model_requested: "gpt-5.6-luna",
        effort_requested: "high",
        reasoning: "high",
        model_tool_mode_evidence: {
          cache_sha256: "a".repeat(64),
          model_profile_sha256: "b".repeat(64),
        },
      },
    };
    const attestation = buildCodexRoutingAttestation({ matrixCell, run, lockedPlan: plan });
    const exact = {
      validity: "valid",
      attribution: {
        runtime: {
          routing_attestation: attestation,
        },
      },
    };
    expect(completeBlockRoutingStopReason(plan, exact, { matrixCell, run })).toBeNull();
    const drifted = structuredClone(exact);
    drifted.attribution.runtime.routing_attestation.checks.effort_requested_exact = false;
    expect(completeBlockRoutingStopReason(plan, drifted, { matrixCell, run }))
      .toBe("codex-effort-routing-attestation-failed");
    const extraKey = structuredClone(exact);
    extraKey.attribution.runtime.routing_attestation.checks.extra = true;
    expect(completeBlockRoutingStopReason(plan, extraKey, { matrixCell, run }))
      .toBe("codex-effort-routing-attestation-failed");
    expect(completeBlockRoutingStopReason(
      plan,
      { ...exact, validity: "invalid-attribution" },
      { matrixCell, run },
    ))
      .toBe("codex-effort-routing-attestation-failed");
    expect(completeBlockRoutingStopReason({}, {})).toBeNull();
  });

  it("binds complete-block execution to the preparation hash and one-cell checkpoints", () => {
    const plan = {
      control_contract: { admission_normalization_policy: "complete-block-effort-scaling" },
    };
    expect(validateCompleteBlockExecutionContract(
      plan,
      { locked_plan_sha256: "a".repeat(64) },
      { lockedPlanSha256: "a".repeat(64), maxNewCells: 1 },
    )).toMatchObject({ required: true, max_new_cells: 1 });
    expect(() => validateCompleteBlockExecutionContract(
      plan,
      { locked_plan_sha256: "a".repeat(64) },
      { lockedPlanSha256: "a".repeat(64), maxNewCells: 2 },
    )).toThrow(/max-new-cells 1/u);
    expect(() => validateCompleteBlockExecutionContract(
      plan,
      { locked_plan_sha256: "b".repeat(64) },
      { lockedPlanSha256: "a".repeat(64), maxNewCells: 1 },
    )).toThrow(/locked plan drifted/u);
    expect(validateCompleteBlockExecutionContract({}, {}, {
      lockedPlanSha256: null,
      maxNewCells: undefined,
    })).toEqual({ required: false });
  });

  it("audits the entire prepared complete block before provider exposure", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-prepared-audit-"));
    const plan = {
      cells: [{ id: "a" }, { id: "b" }],
      control_contract: { admission_normalization_policy: "complete-block-effort-scaling" },
    };
    let invocation = null;
    const report = {
      status: "PREPARATION_ONLY_PROVIDER_ZERO_RUNTIME_ADMISSION_REQUIRED",
      execution_admission: {
        allowed: false,
        preparation_only: true,
        runtime_admission_required: true,
        reason: "immutable-codex-runtime-admission-required",
        execution_artifacts_absent: true,
      },
      normalization_policy: "complete-block-effort-scaling",
      scheduled_cells: 2,
      prepared_cells: 2,
      locked_plan_sha256: "a".repeat(64),
      preparation_state_sha256: "b".repeat(64),
      task_set_sha256: "c".repeat(64),
      schedule_sha256: "d".repeat(64),
    };
    const receipt = runCompleteBlockPreparedAdmissionAudit(root, plan, {
      runNodeFn(script, args, cwd) {
        invocation = { script, args, cwd };
        return { status: 0, stdout: JSON.stringify(report), stderr: "" };
      },
    });
    expect(invocation.args).toEqual(["--root", root]);
    expect(receipt).toMatchObject({
      status: "passed",
      admission_stage: "preparation-only",
      execution_allowed: false,
      runtime_admission_required: true,
      locked_plan_sha256: report.locked_plan_sha256,
      preparation_state_sha256: report.preparation_state_sha256,
      normalization_policy: "complete-block-effort-scaling",
    });
    expect(receipt.report_sha256).toMatch(/^[a-f0-9]{64}$/u);
    expect(() => runCompleteBlockPreparedAdmissionAudit(root, plan, {
      runNodeFn: () => ({
        status: 0,
        stdout: JSON.stringify({ ...report, prepared_cells: 1 }),
        stderr: "",
      }),
    })).toThrow("prepared-matrix-admission-audit-rejected");
  });

  it("binds the provider-zero audit to the exact controller-owned execution lease", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-owned-lease-admission-"));
    const plan = {
      cells: [{ id: "a" }, { id: "b" }],
      control_contract: { admission_normalization_policy: "complete-block-effort-scaling" },
    };
    const invocationLease = {
      token: "controller-token",
      sha256: "f".repeat(64),
      pid: 4242,
      dev: "11",
      ino: "22",
    };
    const authorizedControllerLease = {
      schema_version: "0.1",
      sha256: invocationLease.sha256,
      token_sha256: digest(invocationLease.token),
      pid: invocationLease.pid,
      dev: invocationLease.dev,
      ino: invocationLease.ino,
    };
    let invocation = null;
    const report = {
      status: "PREPARATION_ONLY_PROVIDER_ZERO_RUNTIME_ADMISSION_REQUIRED",
      execution_admission: {
        allowed: false,
        preparation_only: true,
        runtime_admission_required: true,
        reason: "immutable-codex-runtime-admission-required",
        execution_artifacts_absent: true,
        authorized_controller_lease: authorizedControllerLease,
      },
      normalization_policy: "complete-block-effort-scaling",
      scheduled_cells: 2,
      prepared_cells: 2,
      locked_plan_sha256: "a".repeat(64),
      preparation_state_sha256: "b".repeat(64),
      task_set_sha256: "c".repeat(64),
      schedule_sha256: "d".repeat(64),
    };
    const receipt = runCompleteBlockPreparedAdmissionAudit(root, plan, {
      invocationLease,
      runNodeFn: (_script, args) => {
        invocation = args;
        return { status: 0, stdout: JSON.stringify(report), stderr: "" };
      },
    });
    expect(invocation).toEqual([
      "--root", root,
      "--authorized-controller-lease-token", invocationLease.token,
      "--authorized-controller-lease-sha256", invocationLease.sha256,
      "--authorized-controller-lease-pid", String(invocationLease.pid),
      "--authorized-controller-lease-dev", invocationLease.dev,
      "--authorized-controller-lease-ino", invocationLease.ino,
    ]);
    expect(receipt).toMatchObject({
      admission_stage: "preparation-only",
      execution_allowed: false,
      runtime_admission_required: true,
      authorized_controller_lease: authorizedControllerLease,
    });
  });

  it("seals runtime admission only from a passed preflight bound to the prepared receipt", () => {
    const plan = {
      control_contract: { admission_normalization_policy: "complete-block-effort-scaling" },
    };
    const authority = {
      lockedPlanSha256: "a".repeat(64),
      preparationStateSha256: "b".repeat(64),
      taskSetSha256: "c".repeat(64),
      scheduleSha256: "d".repeat(64),
    };
    const prepared = {
      schema_version: "0.1",
      status: "passed",
      admission_stage: "preparation-only",
      execution_allowed: false,
      runtime_admission_required: true,
      authorized_controller_lease: null,
      locked_plan_sha256: authority.lockedPlanSha256,
      preparation_state_sha256: authority.preparationStateSha256,
      task_set_sha256: authority.taskSetSha256,
      schedule_sha256: authority.scheduleSha256,
      normalization_policy: "complete-block-effort-scaling",
      report_sha256: "e".repeat(64),
    };
    const runtimePreflight = {
      status: "complete",
      runtimes: ["codex"],
      checks: [{ runtime: "codex", resource: "cli-runtime", status: "ready" }],
    };
    const receipt = sealCompleteBlockRuntimeAdmission(
      plan,
      prepared,
      runtimePreflight,
      authority,
    );
    expect(receipt).toMatchObject({
      status: "passed",
      admission_stage: "runtime-preflight",
      execution_allowed: true,
      sealed_after_runtime_preflight: true,
      prepared_admission_report_sha256: prepared.report_sha256,
      runtime_preflight: runtimePreflight,
    });
    expect(receipt.runtime_preflight_sha256).toMatch(/^[a-f0-9]{64}$/u);
    expect(() => sealCompleteBlockRuntimeAdmission(
      plan,
      prepared,
      { ...runtimePreflight, status: "failed" },
      authority,
    )).toThrow("complete-block runtime admission preflight did not pass");
  });

  it("never overwrites a compatibility artifact that predates controller promotion", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-controller-copy-"));
    const workspace = join(root, "cell-a");
    const benchmark = join(workspace, ".benchmark");
    const authority = join(root, ".controller-artifacts", "cell-a");
    mkdirSync(benchmark, { recursive: true });
    mkdirSync(authority, { recursive: true });
    writeFileSync(join(authority, "score.json"), "{\"trusted\":\"score\"}\n");
    writeFileSync(join(authority, "run-record.json"), "{\"trusted\":\"record\"}\n");
    writeFileSync(join(benchmark, "score.json"), "{\"provider\":\"forged\"}\n");
    expect(() => installTrustedCompatibilityArtifacts(workspace))
      .toThrow("trusted compatibility artifact target already exists");
    expect(readFileSync(join(benchmark, "score.json"), "utf8"))
      .toBe("{\"provider\":\"forged\"}\n");
    expect(existsSync(join(benchmark, "run-record.json"))).toBe(false);
  });

  it("pins controller observation to the exact Codex CLI and post-run execution-home profile", () => {
    const plan = {
      controller_observation_contract: {
        codex_cli_version: "0.144.1",
        model_profile_policy: "post-run-execution-home-observed",
      },
      cells: [{ runtime: "codex", model_id: "gpt-5.6-luna" }],
    };
    expect(preflightRuntimeEnvironment(plan, {
      codexCliProbe: () => ({ ready: true, version: "0.144.1" }),
    }).checks).toContainEqual({
      runtime: "codex",
      resource: "cli-runtime",
      status: "ready",
      version: "0.144.1",
      model_profile_policy: "post-run-execution-home-observed",
    });
    expect(() => preflightRuntimeEnvironment(plan, {
      codexCliProbe: () => ({ ready: true, version: "0.146.0" }),
    })).toThrow("runtime-preflight-failure:codex-cli-version-mismatch:0.144.1:0.146.0");
  });
  it("prepares exact snapshots before both doctors and pins both to the locked Codex wrapper", () => {
    const workspace = "/tmp/omd-exact-runtime-preflight-cell";
    const lockedWrapper = "/opt/locked/codex.js";
    const cell = {
      id: "cell-1",
      runtime: "codex",
      model_id: "gpt-5.6-luna",
      effort: "medium",
    };
    const exactRuntimeContract = {
      catalog_snapshot_contract: {
        codex_cli: { executable_path: lockedWrapper },
      },
      model_effort_contract: { models: [] },
      matrix_cell: cell,
      locked_cell: cell,
    };
    const plan = {
      browser_execution_contract: { require_browser_proof: true },
      codex_catalog_snapshot_contract: {
        enforcement_mode: "exact-runtime-per-invocation",
      },
      cells: [cell],
    };
    const prepared = [];
    let browserSpec = null;
    let authSpec = null;
    const result = preflightRuntimeEnvironment(plan, {
      workspaceRoot: workspace,
      browserEnv: {
        BH_RUNTIME_DIR: "/tmp/runtime",
        BU_NAME: "exact-test",
        BU_CDP_URL: "http://127.0.0.1:9336",
      },
      exactRuntimeContractProbe: (receivedWorkspace) => {
        expect(receivedWorkspace).toBe(workspace);
        return exactRuntimeContract;
      },
      codexHomePrepare: (...received) => prepared.push(received),
      browserProbe: (spec) => {
        browserSpec = spec;
        return {
          status: 0,
          stdout: "[ok  ] daemon alive\n[ok  ] active browser connections — 1\n  exact-test — active page: about:blank",
        };
      },
      codexProbe: (spec) => {
        authSpec = spec;
        return { status: 0, stderr: "Logged in using ChatGPT" };
      },
    });
    expect(prepared).toEqual([[
      workspace,
      expect.objectContaining({ BU_NAME: "exact-test" }),
      {
        exactRuntimeContract,
        modelId: "gpt-5.6-luna",
        effort: "medium",
      },
    ]]);
    expect(browserSpec.executable).toBe(lockedWrapper);
    expect(authSpec.executable).toBe(lockedWrapper);
    expect(authSpec.args).toContain(lockedWrapper);
    expect(result.checks).toContainEqual({
      runtime: "shared-host-policy",
      resource: "codex-auth",
      status: "ready",
      sandbox: "external-workspace-openai-browser",
    });
  });
  it("fails exact preflight before doctors or home mutation when the prepared lock is unavailable", () => {
    let prepared = false;
    let probed = false;
    expect(() => preflightRuntimeEnvironment({
      browser_execution_contract: { require_browser_proof: true },
      codex_catalog_snapshot_contract: {
        enforcement_mode: "exact-runtime-per-invocation",
      },
      cells: [{
        runtime: "codex",
        model_id: "gpt-5.6-luna",
        effort: "medium",
      }],
    }, {
      exactRuntimeContractProbe: () => null,
      codexHomePrepare: () => { prepared = true; },
      browserProbe: () => {
        probed = true;
        return { status: 0, stdout: "ready" };
      },
      codexProbe: () => ({ status: 0, stderr: "Logged in" }),
    })).toThrow("runtime-preflight-failure:codex-exact-runtime-contract-unavailable");
    expect(prepared).toBe(false);
    expect(probed).toBe(false);
  });
  it("excludes isolated Codex and browser runtime state from benchmark attestation", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-runtime-attestation-"));
    const benchmark = join(root, ".benchmark");
    mkdirSync(benchmark);
    writeFileSync(join(benchmark, "manifest.json"), "{}\n");
    const before = benchmarkArtifactManifest(benchmark).sha256;
    mkdirSync(join(benchmark, "codex-home"));
    mkdirSync(join(benchmark, "browser-harness"));
    const auth = join(root, "source-auth.json");
    writeFileSync(auth, "{}\n");
    symlinkSync(auth, join(benchmark, "codex-home", "auth.json"));
    writeFileSync(join(benchmark, "browser-harness", "debug.log"), "runtime\n");
    expect(benchmarkArtifactManifest(benchmark).sha256).toBe(before);
    expect(benchmarkArtifactManifest(benchmark).files.map((file) => file.path)).toEqual(["manifest.json"]);
  });
  it("round-trips host-policy admission through a checkpoint summary", () => {
    const workspace = mkdtempSync(join(tmpdir(), "omd-host-admission-summary-"));
    const benchmarkDir = join(workspace, ".benchmark");
    mkdirSync(benchmarkDir);
    writeFileSync(join(benchmarkDir, "run-result.json"), JSON.stringify({
      output: {},
    }));
    writeFileSync(join(benchmarkDir, "score.json"), JSON.stringify({
      critical_gates: { evidence_honesty: true },
    }));
    writeFileSync(join(benchmarkDir, "run-record.json"), JSON.stringify({
      validity: "valid",
      ui_resolved: false,
      objective_score: 77,
      objective_max: 85,
      wall_time_ms: 565610,
      tokens: 1993652,
      complete_block_outcome: {
        schema_version: "0.1",
        disposition: "terminal-provider-failure",
        reason: "complete-block-provider-proof-noncompliance",
        tool_diagnostics: {
          availability: { available: true },
          tool_error_count: 0,
          recoverable_tool_error_count: 0,
          agent_tool_call_count: 1,
          agent_tool_error_count: 0,
        },
      },
      runtime_diagnostics: {
        host_policy: { gate: { pass: false } },
        host_policy_admission: {
          disposition: "valid-system-failure",
          reason: "installed-host-policy-rejected-system-output",
        },
      },
    }));
    const checkpointSummary = completedCellSummary(
      { id: "control" },
      0,
      workspace,
      { includeArtifactHashes: false },
    );
    expect(checkpointSummary).toMatchObject({
      status: "complete",
      complete_block_outcome: {
        disposition: "terminal-provider-failure",
        reason: "complete-block-provider-proof-noncompliance",
      },
    });
    expect(checkpointSummary.host_policy_admission).toEqual({
      disposition: "valid-system-failure",
      reason: "installed-host-policy-rejected-system-output",
    });
  });

  it("separates host infrastructure faults from a ready host rejecting system output", () => {
    const plan = { shared_host_policy: { require_delivery_ready: true } };
    const base = {
      proof_trace: { analyzable: true },
      host_policy: {
        installation: { ready: true },
        observed: { available: true, state_files: 1, valid_state_files: 1 },
      },
    };
    expect(hostPolicyAdmissionDisposition(plan, {
      ...base,
      host_policy_gate: {
        pass: false,
        reasons: ["installed-policy-delivery-incomplete"],
      },
    })).toEqual({
      disposition: "valid-system-failure",
      reason: "installed-host-policy-rejected-system-output",
    });
    expect(hostPolicyAdmissionDisposition(plan, {
      ...base,
      host_policy_gate: {
        pass: false,
        reasons: ["installed-policy-state-invalid"],
      },
    })).toEqual({
      disposition: "invalid-infrastructure",
      reason: "installed-host-policy-gate-failed",
    });
    expect(hostPolicyAdmissionDisposition(plan, {
      ...base,
      host_policy_gate: { pass: true, reasons: [] },
    })).toEqual({ disposition: "admit", reason: null });

    const completeBlockPlan = {
      ...plan,
      control_contract: { admission_normalization_policy: "complete-block-effort-scaling" },
    };
    expect(hostPolicyAdmissionDisposition(completeBlockPlan, {
      ...base,
      proof_trace: { analyzable: false },
      validity: "valid",
      host_policy_gate: {
        pass: false,
        reasons: ["proof-trace-not-analyzable"],
      },
    })).toEqual({
      disposition: "valid-system-failure",
      reason: "complete-block-provider-proof-noncompliance",
    });
    expect(hostPolicyAdmissionDisposition(completeBlockPlan, {
      ...base,
      proof_trace: { analyzable: false },
      validity: "valid",
      host_policy_gate: {
        pass: false,
        reasons: ["native-browser-unintercepted"],
      },
    })).toEqual({
      disposition: "invalid-infrastructure",
      reason: "installed-host-policy-gate-failed",
    });
  });

  it("rejects unknown CLI options instead of silently dropping checkpoint bounds", () => {
    expect(() => validateRunPreparedMatrixCliArgs(new Map([
      ["root", "/private/tmp/example"],
      ["max-new", "1"],
    ]))).toThrow("unknown option(s): --max-new");
    expect(validateRunPreparedMatrixCliArgs(new Map([
      ["root", "/private/tmp/example"],
      ["max-new-cells", "1"],
    ])).get("max-new-cells")).toBe("1");
  });

  it("accepts the preregistered host-policy attestation during checkpoint resume", () => {
    const hashes = {
      benchmark_tree_sha256: "a".repeat(64),
      product_tree_sha256: "b".repeat(64),
    };
    expect(validPreparedCellAttestation(hashes)).toBe(true);
    expect(validPreparedCellAttestation({
      ...hashes,
      host_policy: {
        schema_version: "0.1",
        target: "codex",
        mode: "installed-opt-in",
        git_root: true,
        ready: true,
      },
    }, { hostPolicy: true })).toBe(true);
    expect(validPreparedCellAttestation(hashes, { hostPolicy: true })).toBe(false);
  });

  it("bypasses native hook trust only for the explicitly installed Codex policy arm", () => {
    const base = {
      runtime: "codex",
      model_id: "gpt-5.6-luna",
      effort: "high",
      timeout_seconds: 900,
    };
    const control = runArgsForCell({
      ...base,
      host_policy_mode: "controller-observation",
    }, "/tmp/control");
    const policy = runArgsForCell({
      ...base,
      host_policy_mode: "installed-opt-in",
    }, "/tmp/policy");
    expect(control).toContain("--load-user-config");
    expect(control).not.toContain("--bypass-hook-trust");
    expect(policy).toContain("--load-user-config");
    expect(policy).toContain("--bypass-hook-trust");
  });

  it("proves Cursor project-cache writeability before provider execution", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-cursor-runtime-preflight-"));
    const projects = join(temp, "projects");
    mkdirSync(projects);
    const result = preflightRuntimeEnvironment(
      { cells: [{ runtime: "cursor" }] },
      { cursorProjectsRoot: projects },
    );
    expect(result).toEqual({
      status: "complete",
      runtimes: ["cursor"],
      checks: [{
        runtime: "cursor",
        resource: "project-cache",
        status: "writable",
      }],
    });
  });

  it("fails before provider execution when Cursor project cache is unavailable", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-cursor-runtime-preflight-fail-"));
    expect(() => preflightRuntimeEnvironment(
      { cells: [{ runtime: "cursor" }] },
      { cursorProjectsRoot: join(temp, "missing", "projects") },
    )).toThrow("runtime-preflight-failure:cursor-project-cache-not-writable:ENOENT");
  });

  it("rejects installed Codex proof enforcement for code-mode-only models before provider use", () => {
    const plan = {
      shared_host_policy: { mode: "installed-opt-in", require_browser_attempt: false },
      cells: [{
        runtime: "codex",
        model_id: "gpt-5.6-luna",
        host_policy_mode: "installed-opt-in",
      }],
    };
    expect(() => preflightRuntimeEnvironment(plan, {
      codexToolModeProbe: (modelId) => ({
        model_id: modelId,
        tool_mode: "code_mode_only",
        installed_policy_eligible: false,
      }),
    })).toThrow(
      "runtime-preflight-failure:codex-installed-policy-tool-mode-uninterceptable:gpt-5.6-luna:code_mode_only",
    );
  });

  it("admits only a directly interceptable Codex tool mode for installed enforcement", () => {
    const plan = {
      shared_host_policy: { mode: "installed-opt-in", require_browser_attempt: false },
      cells: [{
        runtime: "codex",
        model_id: "direct-model",
        host_policy_mode: "installed-opt-in",
      }],
    };
    expect(preflightRuntimeEnvironment(plan, {
      codexToolModeProbe: (modelId) => ({
        model_id: modelId,
        tool_mode: "function",
        installed_policy_eligible: true,
        cache_sha256: "a".repeat(64),
        model_profile_sha256: "b".repeat(64),
      }),
    }).checks).toContainEqual({
      runtime: "codex",
      resource: "installed-proof-policy-tool-mode",
      status: "eligible",
      model_id: "direct-model",
      tool_mode: "function",
      cache_sha256: "a".repeat(64),
      model_profile_sha256: "b".repeat(64),
    });
  });

  it("admits a Codex cell only when the live model-effort profile exactly matches its lock", () => {
    const contract = {
      cache_sha256: "a".repeat(64),
      cache_fetched_at: "2026-08-09T04:32:08Z",
      cache_client_version: "0.146.1",
      models: [{
        model_id: "gpt-5.6-terra",
        model_profile_sha256: "b".repeat(64),
        default_effort: "medium",
        supported_efforts: ["low", "medium", "high", "xhigh", "max", "ultra"],
      }],
    };
    const plan = {
      codex_model_effort_contract: contract,
      cells: [{ runtime: "codex", model_id: "gpt-5.6-terra", effort: "ultra" }],
    };
    const result = preflightRuntimeEnvironment(plan, {
      codexModelEffortProbe: (modelId) => ({
        ready: true,
        model_id: modelId,
        cache_sha256: "a".repeat(64),
        cache_fetched_at: "2026-08-09T04:32:08Z",
        cache_client_version: "0.146.1",
        model_profile_sha256: "b".repeat(64),
        default_effort: "medium",
        supported_efforts: ["low", "medium", "high", "xhigh", "max", "ultra"],
      }),
    });
    expect(result.checks).toContainEqual({
      runtime: "codex",
      resource: "model-effort-profile",
      status: "pinned",
      model_id: "gpt-5.6-terra",
      default_effort: "medium",
      supported_efforts: ["low", "medium", "high", "xhigh", "max", "ultra"],
      cache_sha256: "a".repeat(64),
      model_profile_sha256: "b".repeat(64),
    });
  });

  it("fails before provider use on Codex cache, profile, or ordered effort drift", () => {
    const plan = {
      codex_model_effort_contract: {
        cache_sha256: "a".repeat(64),
        cache_fetched_at: "2026-08-09T04:32:08Z",
        cache_client_version: "0.146.1",
        models: [{
          model_id: "gpt-5.6-sol",
          model_profile_sha256: "b".repeat(64),
          default_effort: "low",
          supported_efforts: ["low", "medium", "high"],
        }],
      },
      cells: [{ runtime: "codex", model_id: "gpt-5.6-sol", effort: "high" }],
    };
    const observation = {
      ready: true,
      model_id: "gpt-5.6-sol",
      cache_sha256: "a".repeat(64),
      cache_fetched_at: "2026-08-09T04:32:08Z",
      cache_client_version: "0.146.1",
      model_profile_sha256: "b".repeat(64),
      default_effort: "low",
      supported_efforts: ["low", "medium", "high"],
    };
    expect(() => preflightRuntimeEnvironment(plan, {
      codexModelEffortProbe: () => ({ ...observation, cache_sha256: "c".repeat(64) }),
    })).toThrow("codex-model-effort-cache-sha256-drift");
    expect(() => preflightRuntimeEnvironment(plan, {
      codexModelEffortProbe: () => ({ ...observation, model_profile_sha256: "c".repeat(64) }),
    })).toThrow("codex-model-effort-profile-sha256-drift");
    expect(() => preflightRuntimeEnvironment(plan, {
      codexModelEffortProbe: () => ({
        ...observation,
        supported_efforts: ["medium", "low", "high"],
      }),
    })).toThrow("codex-model-effort-support-drift");
  });

  it("accepts an exact, complete harness attribution", () => {
    expect(preregisteredStopReason(cell, manifest, validRun)).toBeNull();
  });

  it("stops on specialist model or cardinality mismatch", () => {
    const run = structuredClone(validRun);
    run.output.agent_calls[0].requested_model = "sonnet";
    expect(preregisteredStopReason(cell, manifest, run)).toBe("specialist-model-or-cardinality-mismatch");
  });

  it("keeps recoverable verifier failures outside the stop class", () => {
    const run = structuredClone(validRun);
    run.output.recoverable_tool_error_count = 3;
    expect(preregisteredStopReason(cell, manifest, run)).toBeNull();
  });

  it("stops on timeout, sandbox failure, or observed parent-model mismatch", () => {
    const timeout = structuredClone(validRun);
    timeout.process.timed_out = true;
    expect(preregisteredStopReason(cell, manifest, timeout)).toBe("timeout");
    const attributableTimeoutCell = {
      runtime: "codex",
      model_id: "gpt-5.6-luna",
      effort: "high",
    };
    const attributableTimeout = {
      ...structuredClone(timeout),
      runtime: {
        runtime_target: "codex",
        agent: "codex-cli",
        model_requested: "gpt-5.6-luna",
        model_reported: null,
        model_evidence_mode: "cli-argument",
        effort_requested: "high",
        auth_mode: null,
        provider_route: null,
      },
      process: { ...timeout.process, spawn_error: null },
      output: {
        ...timeout.output,
        final_message_present: false,
        diagnostic_availability: { available: false, fields: [], reason: "unsupported" },
        usage_attribution: {
          available: false,
          evidence_mode: "unavailable",
          reason: "provider-stream-contained-no-usage",
        },
        usage_events: [],
      },
    };
    expect(preregisteredStopReason(
      attributableTimeoutCell,
      { runtime_target: "codex", variant: { kind: "portable-skill" } },
      attributableTimeout,
      {
      schemaVersion: "0.3",
      timeoutPolicy: "count-as-valid-failure",
      },
    )).toBeNull();

    const sandbox = structuredClone(validRun);
    sandbox.output.sandbox_error_count = 1;
    expect(preregisteredStopReason(cell, manifest, sandbox)).toBe("sandbox-error");

    const model = structuredClone(validRun);
    model.output.model_usage = [{ model: "claude-sonnet-4-6" }];
    expect(preregisteredStopReason(cell, manifest, model)).toBe("observed-model-mismatch");
  });

  it("admits a preregistered timeout as a valid unresolved host failure", () => {
    expect(hostPolicyAdmissionDisposition(
      { shared_host_policy: { require_delivery_ready: true } },
      { run_status: "timed_out", validity: "valid" },
    )).toEqual({
      disposition: "valid-system-failure",
      reason: "preregistered-valid-timeout",
    });
  });

  it("maps the frozen cell budget to the Claude runner", () => {
    expect(runArgsForCell(cell, "/tmp/u197/pricing-t1-harness")).toEqual([
      "--workspace", "/tmp/u197/pricing-t1-harness",
      "--model", "claude-opus-4-8",
      "--effort", "xhigh",
      "--timeout-ms", "900000",
    ]);
  });

  it("stops a harness on a late or missing first product write", () => {
    const gates = { first_product_write_ms_max: 450000, forbid_replacement_verifier: true };
    const late = structuredClone(validRun);
    late.output.milestones.first_builtin_product_write_ms = 450001;
    expect(harnessDeliveryStopReason(manifest, late, gates)).toBe("late-first-product-write");

    const missing = structuredClone(validRun);
    delete missing.output.milestones;
    expect(harnessDeliveryStopReason(manifest, missing, gates)).toBe("missing-first-product-write-milestone");
  });

  it("measures and gates the last advisory to first useful product edit", () => {
    const events = [
      {
        type: "assistant",
        timestamp: "2026-07-23T00:01:00.000Z",
        message: { content: [{ type: "tool_use", id: "writer", name: "Agent", input: {} }] },
      },
      {
        type: "assistant",
        timestamp: "2026-07-23T00:01:01.000Z",
        message: { content: [{ type: "tool_use", id: "engineer", name: "Agent", input: {} }] },
      },
      {
        type: "user",
        timestamp: "2026-07-23T00:03:30.000Z",
        message: { content: [{ type: "tool_result", tool_use_id: "writer", content: "done" }] },
      },
      {
        type: "user",
        timestamp: "2026-07-23T00:04:00.000Z",
        message: { content: [{ type: "tool_result", tool_use_id: "engineer", content: "done" }] },
      },
    ];
    const run = structuredClone(validRun);
    run.output.milestones.first_builtin_product_write_ms = 313484;
    expect(lastAdvisoryToFirstProductWriteMs(run, events)).toBe(73484);

    const gates = {
      first_product_write_ms_max: 450000,
      last_advisory_to_first_product_write_ms_max: 90000,
      forbid_replacement_verifier: true,
    };
    expect(harnessDeliveryStopReason(manifest, run, gates, events)).toBeNull();

    run.output.milestones.first_builtin_product_write_ms = 330001;
    expect(harnessDeliveryStopReason(manifest, run, gates, events))
      .toBe("late-advisory-to-first-product-write");

    run.output.milestones.first_builtin_product_write_ms = 200000;
    expect(harnessDeliveryStopReason(manifest, run, gates, events))
      .toBe("product-write-before-last-advisory");

    expect(harnessDeliveryStopReason(manifest, validRun, gates, []))
      .toBe("missing-advisory-to-first-write-milestone");
  });

  it("requires the first product transaction to be a real targeted Edit", () => {
    const edit = [{
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Edit",
          input: {
            file_path: "/tmp/workspace/index.html",
            old_string: "min-height: 40px",
            new_string: "min-height: 44px",
          },
        }],
      },
    }];
    expect(firstProductWriteTransaction(validRun, edit)).toMatchObject({
      tool: "Edit",
      path: "index.html",
      no_op: false,
    });
    const gates = {
      first_product_write_ms_max: 450000,
      require_targeted_first_product_edit: true,
      forbid_replacement_verifier: true,
    };
    expect(harnessDeliveryStopReason(manifest, validRun, gates, edit)).toBeNull();

    const write = structuredClone(edit);
    write[0].message.content[0].name = "Write";
    expect(harnessDeliveryStopReason(manifest, validRun, gates, write))
      .toBe("non-targeted-first-product-write");

    const noOp = structuredClone(edit);
    noOp[0].message.content[0].input.new_string = "min-height: 40px";
    expect(harnessDeliveryStopReason(manifest, validRun, gates, noOp))
      .toBe("no-op-first-product-edit");

    expect(harnessDeliveryStopReason(manifest, validRun, gates, []))
      .toBe("missing-first-product-write-transaction");
  });

  it("detects an authored replacement verifier but allows a real-browser probe", () => {
    const shim = [{
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: { command: "cat > .t/verify.js <<'EOF'\nclass Element {}\nglobalThis.document = {}\nEOF" },
        }],
      },
    }];
    expect(replacementVerifierAuthorship(shim)).toMatchObject({
      detected: true,
      reason: "suspicious-verifier-path",
    });

    const probe = [{
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: { command: "python3 - probe.html <<'EOF'\nopen('probe.html','w').write('<script>document.querySelectorAll(\"button\")</script>')\nEOF" },
        }],
      },
    }];
    expect(replacementVerifierAuthorship(probe)).toEqual({ detected: false });

    const realBrowserHtml = [{
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: { command: "python3 - verify.html <<'EOF'\nopen('verify.html','w').write('<script>document.querySelectorAll(\"button\")</script>')\nEOF\n/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --headless verify.html" },
        }],
      },
    }];
    expect(replacementVerifierAuthorship(realBrowserHtml)).toEqual({ detected: false });
  });

  it("counts actual headless browser invocations without counting discovery", () => {
    const discovery = {
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: {
            command: 'ls "/Applications/Google Chrome.app/Contents/MacOS/" 2>/dev/null; which chromium',
          },
        }],
      },
    };
    const oneBrowser = {
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: {
            command: '"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --dump-dom index.html',
          },
        }],
      },
    };
    const twoBrowsersOneCall = {
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: {
            command: "chromium --headless --dump-dom index.html; google-chrome-stable --headless=new --dump-dom index.html",
          },
        }],
      },
    };
    expect(directBrowserCommandCount([discovery])).toBe(0);
    expect(directBrowserCommandCount([discovery, oneBrowser])).toBe(1);
    expect(directBrowserCommandCount([twoBrowsersOneCall])).toBe(2);
  });

  it("fails closed when the direct-browser command budget is exceeded", () => {
    const localeManifest = { variant: { kind: "locale-skill-stack" } };
    const gates = {
      variant_kinds: ["locale-skill-stack"],
      first_product_write_ms_max: 450000,
      forbid_replacement_verifier: true,
      max_direct_browser_commands: 1,
    };
    const run = {
      output: { milestones: { first_builtin_product_write_ms: 313841 } },
      workspace: { changed_product_files: [{ path: "index.html" }] },
    };
    const invocation = (suffix) => ({
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: {
            command: `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --dump-dom index.html ${suffix}`,
          },
        }],
      },
    });
    expect(harnessDeliveryStopReason(localeManifest, run, gates, [])).toBeNull();
    expect(harnessDeliveryStopReason(localeManifest, run, gates, [invocation("2>/dev/null")])).toBeNull();
    expect(harnessDeliveryStopReason(
      localeManifest,
      run,
      gates,
      [invocation("2>/dev/null"), invocation("2>&1")],
    )).toBe("direct-browser-command-budget-exceeded");

    const zeroGate = { ...gates, max_direct_browser_commands: 0 };
    expect(harnessDeliveryStopReason(localeManifest, run, zeroGate, [])).toBeNull();
    expect(harnessDeliveryStopReason(
      localeManifest,
      run,
      zeroGate,
      [invocation("2>/dev/null")],
    )).toBe("direct-browser-command-budget-exceeded");
  });

  it("fails closed when replacement-verifier authorship is observed", () => {
    const gates = { first_product_write_ms_max: 450000, forbid_replacement_verifier: true };
    const events = [{
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Write",
          input: { file_path: ".t/dom-shim.mjs", content: "class Document {}" },
        }],
      },
    }];
    expect(harnessDeliveryStopReason(manifest, validRun, gates, events)).toBe("replacement-verifier-authored");
  });

  it("applies delivery authority to an explicitly named non-agent skill stack", () => {
    const localeManifest = { variant: { kind: "locale-skill-stack" } };
    const gates = {
      variant_kinds: ["locale-skill-stack"],
      first_product_write_ms_max: 450000,
      forbid_replacement_verifier: true,
    };
    const run = {
      output: { milestones: { first_builtin_product_write_ms: 339542 } },
      workspace: { changed_product_files: [{ path: "index.html" }] },
    };
    const productWrite = {
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Write",
          input: { file_path: "index.html", content: "<main>done</main>" },
        }],
      },
    };
    expect(harnessDeliveryStopReason(localeManifest, run, gates, [productWrite])).toBeNull();
    expect(harnessDeliveryStopReason(localeManifest, run, gates, [
      productWrite,
      {
        type: "assistant",
        message: {
          content: [{
            type: "tool_use",
            name: "Write",
            input: { file_path: ".t/verify.mjs", content: "export const ok = true" },
          }],
        },
      },
    ])).toBe("replacement-verifier-authored");
  });
});
