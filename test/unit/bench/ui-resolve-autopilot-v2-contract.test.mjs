import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const repoRoot = resolve(import.meta.dirname, '../../..');
const contractPath = resolve(repoRoot, 'benchmarks/ui-resolve-bench/config/autopilot-v2-qualification.json');
const contract = JSON.parse(readFileSync(contractPath, 'utf8'));
const smokePath = resolve(repoRoot, 'benchmarks/ui-resolve-bench/config/autopilot-luna-high-smoke-v0.1.json');
const smoke = JSON.parse(readFileSync(smokePath, 'utf8'));

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

describe('OmD Autopilot 2.0 qualification contract', () => {
  it('remains provider-zero and claim-blocked until fresh evidence exists', () => {
    expect(contract).toMatchObject({
      schema_version: '0.1',
      status: 'provider-zero-template',
      provider_execution_allowed: false,
      claim_state: 'blocked-until-fresh-evidence',
    });
  });

  it('separates portable skills from browser or hook harnesses', () => {
    expect(contract.tracks.portable_skill).toMatchObject({
      included: true,
      task_specific_setup_allowed: false,
      harness_configuration_allowed: false,
      preselected_reference_allowed: false,
    });
    expect(contract.tracks.browser_or_hook_harness).toEqual({ included: false, report_separately: true });
    expect(contract.portable_arms).toEqual([
      'model-only',
      'anthropic-frontend-design',
      'impeccable-prompt-only',
      'ui-ux-pro-max',
      'taste-eligible-scope-only',
      'omd-autopilot-v2',
    ]);
  });

  it('locks the hidden greenfield and authority denominators before provider use', () => {
    expect(contract.greenfield_task_families).toHaveLength(12);
    expect(new Set(contract.greenfield_task_families).size).toBe(12);
    const taskSetPath = resolve(repoRoot, contract.greenfield_task_set_authority.path);
    const taskSetBytes = readFileSync(taskSetPath);
    const taskSet = JSON.parse(taskSetBytes);
    expect(createHash('sha256').update(taskSetBytes).digest('hex')).toBe(contract.greenfield_task_set_authority.sha256);
    expect(taskSet.tasks).toHaveLength(contract.greenfield_task_set_authority.task_count);
    expect(contract.greenfield_task_set_authority.provider_zero_validation_required).toBe(true);
    const adapterBytes = readFileSync(resolve(repoRoot, contract.greenfield_adapter_authority.path));
    const adapters = JSON.parse(adapterBytes);
    expect(createHash('sha256').update(adapterBytes).digest('hex')).toBe(contract.greenfield_adapter_authority.sha256);
    expect(adapters.adapters).toHaveLength(contract.greenfield_adapter_authority.adapter_count);
    expect(contract.greenfield_adapter_authority).toMatchObject({
      locator_policy: 'role-and-accessible-name-observable-outcomes', provider_zero_validation_required: true,
    });
    expect(contract.authority_perturbations).toHaveLength(6);
    expect(new Set(contract.authority_perturbations).size).toBe(6);
    expect(contract.task_calibration).toEqual({
      valid_implementations_required_per_task: 2,
      targeted_mutants_required: true,
      must_complete_before_provider_execution: true,
      independent_broken_or_ambiguous_task_estimate_max: 0.05,
    });
  });

  it('requires one-prompt autonomy, system proof, fair controls, and three-model transfer', () => {
    expect(contract.controls).toEqual({
      exact_prompt_bytes: true,
      blank_framework_shell: true,
      same_model: true,
      same_effort: true,
      same_timeout: true,
      same_network_policy: true,
      same_tool_permissions: true,
      retry_budget_per_cell: 0,
      replacement_budget_per_cell: 0,
      fallback_budget_per_cell: 0,
      task_specific_design_md_allowed: false,
      task_specific_tokens_allowed: false,
      task_specific_component_library_allowed: false,
      task_specific_examples_allowed: false,
    });
    expect(contract.trial_program).toMatchObject({
      preview_hidden_tasks: 12,
      preview_trials_per_arm: 5,
      verified_hidden_tasks_min: 24,
      verified_trials_per_arm: 10,
      blind_practitioners: 5,
      transfer_models: ['gpt-5.6-luna', 'gpt-5.6-terra', 'gpt-5.6-sol'],
      locked_comparison_effort: 'high',
    });
    expect(contract.promotion_gates).toMatchObject({
      fully_authorized_prompt_follow_up_questions: 0,
      fully_authorized_prompt_unplanned_interventions: 0,
      authority_question_batches_max: 1,
      required_authority_escalation_recall: 1,
      unsupported_auto_decisions: 0,
      parseable_design_md_task_rate: 1,
      unsupported_product_facts: 0,
      scheduled_ui_resolved_rate_min: 0.8,
      reliability_at_5_task_count_min: 8,
      strongest_eligible_skill_result: 'first-or-statistically-tied',
      each_transfer_model_direction: 'nonnegative',
      claim_after_preview: 'preview-only-not-industry-best',
    });
    expect(contract.distribution_gate).toEqual({
      package_source: 'npm-tarball',
      consumer_install_required: true,
      network_required: false,
      channels: ['claude-code', 'codex', 'opencode', 'cursor'],
      doctor_self_test_required: true,
      installed_autopilot_skill_required: true,
      installed_design_system_architect_required: true,
      installed_helper_execution_required: true,
      design_system_proof_contract: 'hash-bound-resolvable-evidence-v1',
      authority_perturbation_matrix_required: true,
      provider_calls: 0,
      terminal_state: 'HANDOFF',
    });
  });

  it('locks a provider-zero Luna/high smoke before any model execution', () => {
    expect(smoke).toMatchObject({
      schema_version: '0.1',
      experiment_id: 'autopilot-luna-high-smoke-1.9.857',
      track: 'portable-autopilot-skill',
      status: 'provider-zero-preregistration-template',
      provider_execution_allowed: false,
      claim_state: 'diagnostic-only-block-public-one-shot',
    });
    expect(smoke.selection.task_ids).toEqual([
      'neighborhood-library-landing',
      'cold-chain-operations',
      'clinic-visit-prep-locales',
    ]);
    expect(smoke.selection.families).toEqual(['landing', 'dense-operations', 'five-locale-surface']);
    expect(smoke.cells.map((cell) => cell.order)).toEqual([1, 2, 3]);

    const taskSetBytes = readFileSync(resolve(repoRoot, smoke.authorities.task_set_path));
    const taskSet = JSON.parse(taskSetBytes);
    expect(sha256(taskSetBytes)).toBe(smoke.authorities.task_set_sha256);
    for (const cell of smoke.cells) {
      const task = taskSet.tasks.find((item) => item.id === cell.task_id);
      expect(task).toBeDefined();
      expect(sha256(Buffer.from(task.prompt, 'utf8'))).toBe(cell.prompt_sha256);
      expect(Buffer.byteLength(task.prompt)).toBe(cell.prompt_bytes);
      expect(task.design_system_authority).toBe('establish');
    }

    for (const [pathKey, shaKey] of [
      ['adapter_set_path', 'adapter_set_sha256'],
      ['evaluator_path', 'evaluator_sha256'],
      ['starter_path', 'starter_sha256'],
    ]) {
      expect(sha256(readFileSync(resolve(repoRoot, smoke.authorities[pathKey])))).toBe(smoke.authorities[shaKey]);
    }
    const bundle = smoke.authorities.portable_bundle_files;
    expect(new Set(bundle.map((item) => item.path)).size).toBe(bundle.length);
    for (const item of bundle) {
      const bytes = readFileSync(resolve(repoRoot, item.path));
      expect(bytes.byteLength).toBe(item.bytes);
      expect(sha256(bytes)).toBe(item.sha256);
    }
    expect(sha256(JSON.stringify(bundle))).toBe(smoke.authorities.portable_bundle_sha256);
  });

  it('keeps smoke execution serial, no-retry, no-fallback, and non-promotional', () => {
    expect(smoke.runtime).toEqual({
      provider: 'codex', model: 'gpt-5.6-luna', effort: 'high', trial_count_per_task: 1,
      serial: true, timeout_seconds: 900, max_new_cells_per_invocation: 1,
      retry_budget_per_cell: 0, replacement_budget_per_cell: 0, fallback_budget_per_cell: 0,
      bounded_repair_model_calls_max: 2,
      model_substitution_budget: 0, effort_substitution_budget: 0,
      cursor_allowed: false, claude_code_allowed: false,
    });
    expect(smoke.autonomy_contract).toMatchObject({
      slash_command_or_harness_setup_allowed: false,
      preselected_reference_allowed: false,
      task_specific_design_md_allowed: false,
      task_specific_component_or_token_setup_allowed: false,
      fully_authorized_prompt_question_batches_max: 0,
      fabricated_user_answer_artifacts_max: 0,
      unplanned_human_interventions_max: 0,
      active_mission_lineages_max: 1,
      terminal_mission_non_resumable: true,
      acceptance_plan_required_before_product_build: true,
      atomic_proof_schema_version: '0.2',
      same_mission_repair_receipt_chain_required: true,
      implementation_owner: 'main-agent',
      initial_turn_soft_budget_ms: 720000,
      minimum_controller_handoff_reserve_ms: 180000,
      advisory_lane_attempts_per_lane_max: 1,
      advisory_result_repair_calls_max: 0,
      advisory_coordination_calls_max: 6,
    });
    expect(smoke.admission).toEqual({
      clean_committed_source_required: true,
      source_commit_must_contain_exact_authorities: true,
      immutable_codex_auth_and_model_catalog_required: true,
      exact_luna_high_profile_required: true,
      named_existing_browser_required: true,
      provider_zero_preflight_required: true,
      fresh_root_required: true,
      existing_oracle_or_mutant_bytes_may_enter_workspace: false,
    });
    expect(smoke.diagnostic_gate).toMatchObject({
      scheduled_cells: 3,
      valid_terminal_cells_required: 3,
      ui_resolved_cells_required: 3,
      design_system_proof_pass_required: 3,
      public_claim_allowed: false,
    });
    const controller = readFileSync(resolve(repoRoot, 'benchmarks/ui-resolve-bench/scripts/autopilot-smoke-controller.mjs'), 'utf8');
    expect(controller).toContain('const autopilotProof = taskPass ? controllerAutopilotProof(plan, next, workspace)');
    expect(controller).toContain('const success = run.process.exit_code === 0 && !run.process.timed_out && dsProof.pass && autopilotProof.pass && taskPass');
    expect(controller).toContain('autopilot_proof: autopilotProof');
    expect(controller).toContain('objective-score-did-not-improve');
    expect(controller).toContain('protected-assertion-regressed');
    const skill = readFileSync(resolve(repoRoot, 'skills/omd-autopilot/SKILL.md'), 'utf8');
    expect(skill).toMatch(/never discover, install, launch, or probe a\s+local browser/u);
    expect(skill).toMatch(/controller owns all browser execution/u);
    expect(skill).toMatch(/Preserve every positive journey and supported-item claim at equal or\s+stronger semantics/u);
    expect(skill).toMatch(/it never satisfies or\s+replaces that journey/u);
    const taskSet = JSON.parse(readFileSync(resolve(repoRoot, contract.greenfield_task_set_authority.path), 'utf8'));
    const localeTask = taskSet.tasks.find((task) => task.id === 'clinic-visit-prep-locales');
    expect(localeTask.prompt).toContain('honest unavailable-translation state');
    expect(localeTask.prompt).toContain('All five locales must provide localized core checklist copy');
    expect(localeTask.prompt).toContain('without replacing any of the five core locale journeys');
  });
});
