import { describe, expect, it } from 'vitest';
import { scoreGreenfieldEvidence } from '../../../benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield.mjs';

function validEvidence() {
  const viewport = { document_overflow_px: 0, visible_control_min_height_px: 48, axe_serious_or_critical: 0 };
  return {
    design_system: { proof_pass: true, final_state: 'HANDOFF', hashes_bound: true, provenance_complete: true },
    functionality: { dialog_opens: true, initial_focus: true, empty_submit_error: true, valid_submit_closes: true, success_feedback: true },
    viewports: [viewport, viewport, viewport, viewport],
    runtime: {
      semantic_main: true, h1_count: 1, unknown_claims: [], design_action_color_conforms: true,
      sections_11_13_honest: true, console_errors: [], page_errors: [], external_requests: [],
    },
  };
}

describe('Autopilot greenfield evaluator scoring', () => {
  it('requires every critical group for a resolved 100/100 oracle', () => {
    expect(scoreGreenfieldEvidence(validEvidence())).toMatchObject({ score: 100, deterministic_max: 100, critical_pass: true, ui_resolved: true });
  });

  it.each([
    ['system provenance mutant', (value) => { value.design_system.provenance_complete = false; }, 'design_system'],
    ['dialog validation mutant', (value) => { value.functionality.empty_submit_error = false; }, 'functionality'],
    ['mobile overflow mutant', (value) => { value.viewports[2] = { ...value.viewports[2], document_overflow_px: 120 }; }, 'responsive'],
    ['contrast mutant', (value) => { value.viewports[1] = { ...value.viewports[1], axe_serious_or_critical: 1 }; }, 'accessibility'],
    ['invented testimonial mutant', (value) => { value.runtime.unknown_claims = ['social-proof']; }, 'fidelity_and_honesty'],
    ['external request mutant', (value) => { value.runtime.external_requests = ['https://example.com/font.woff2']; }, 'runtime'],
  ])('rejects %s', (_name, mutate, group) => {
    const evidence = validEvidence();
    mutate(evidence);
    const result = scoreGreenfieldEvidence(evidence);
    expect(result.groups[group].pass).toBe(false);
    expect(result.score).toBeLessThan(100);
    expect(result.ui_resolved).toBe(false);
  });
});
