import { describe, expect, it } from 'vitest';
import { validateCliFunnelComparison } from '../../scripts/activation/compare-cli-funnel.mjs';

function report() {
  return {
    schema_version: '0.1',
    human_interventions: 0,
    provider_calls: 0,
    baseline: { installs_succeeded: 3, actionable_workflows: 0 },
    candidate: { installs_succeeded: 3, actionable_workflows: 3, steps_to_actionable_workflow: 3 },
  };
}

describe('CLI activation comparison report', () => {
  it('accepts the right-censored baseline and three successful candidate trials', () => {
    expect(validateCliFunnelComparison(report())).toEqual({ accepted: true, failures: [] });
  });

  it('fails closed instead of inventing a candidate success', () => {
    const value = report();
    value.candidate.actionable_workflows = 2;
    expect(validateCliFunnelComparison(value)).toEqual({
      accepted: false,
      failures: ['candidate:route'],
    });
  });
});
