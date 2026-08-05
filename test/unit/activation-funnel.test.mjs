import { describe, expect, it } from 'vitest';
import { validateActivationFunnelReport } from '../../scripts/activation/run-local-funnel.mjs';

function acceptedReport() {
  return {
    schema_version: '0.1',
    human_interventions: 0,
    provider_calls: 0,
    automated_steps_per_channel: 5,
    elapsed_ms: 1500,
    channels: ['claude-code', 'codex', 'opencode', 'cursor'].map((id) => ({
      id,
      pre_design_state: 'needs-design-md',
      establish_workflow: 'establish-design-system',
      ready_state: 'ready',
      repair_workflow: 'repair-existing-ui',
      repair_ambiguous: false,
      same_surface_reverification: true,
    })),
  };
}

describe('local activation funnel report', () => {
  it('accepts the exact four-channel zero-human contract', () => {
    expect(validateActivationFunnelReport(acceptedReport())).toEqual({
      accepted: true,
      failures: [],
    });
  });

  it('fails closed on a skipped reverify contract or hidden human step', () => {
    const report = acceptedReport();
    report.human_interventions = 1;
    report.channels[2].same_surface_reverification = false;
    expect(validateActivationFunnelReport(report)).toEqual({
      accepted: false,
      failures: ['human_interventions', 'opencode:same_surface_reverification'],
    });
  });
});
