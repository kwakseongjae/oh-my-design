# 1.9.108 preregistration — deletion decision-context comparison

- Holdout: `deletion-approval-v0.1@0.1.0`
- Arms: exact current OmD control vs non-canonical bounded decision-context
  experimental skill.
- Trials: 3 per arm.
- Order: control/experimental, experimental/control, control/experimental.
- Runtime: Cursor.
- Registered model selector: `cursor-grok-4.5-high`.
- Effort: high.
- Timeout: 900 seconds per cell.
- Concurrency: global serial, one cell per controller call.
- Pacing: 120 seconds between cells, outside cell wall time.
- Attribution: Internal registered display-name only; no public model claim.
- Retries, fallback, repair, replacement, and model substitution: none.
- Token budget: observed-only with input, cached input, output, and reasoning
  output recorded.
- Objective gate: 85/85 and all critical gates for every valid success.
- Comparison gate: Reliability@3 and paired deterministic W/T/L.
- Promotion gate: objective eligibility is necessary but insufficient; if both
  arms are eligible, same-trial anonymous owner review decides usability,
  fidelity, and ship preference.
- Canonical mutation: forbidden during this experiment.

