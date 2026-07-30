# Adaptive data-surface blind review — 1.9.97

Status: **LOCKED; provider calls 0**.

## Purpose

Measure whether the deterministically tied 1.9.78 and 1.9.95 pricing outputs
have a repeatable visual-product preference difference. This is the visual
plane for the complete 1.9.96 denominator, not a new generation experiment.

## Frozen source

- immutable source: `/tmp/u1996/execution-state.json`;
- source experiment: `adaptive-data-surface-live-replacement-1.9.96`;
- source status: complete, 6/6 valid, UI-Resolved, evidence-safe cells;
- exact comparisons: pricing trial 1, 2, and 3;
- each pair contains the two exact arms from the same task and trial only.

## Review design

- three opaque automated judge identities;
- one review unit per judge × exact pair = nine units;
- primary and A/B-reversed duplicate run as separate invocations;
- 18 isolated provider invocations total;
- four axes: functionality, usability, fidelity, ship preference;
- valid choices: A, B, tie, both fail;
- judge-visible packets contain only the neutral task brief and anonymous
  desktop/mobile screenshots;
- arm identity, skill commit, automatic score, source workspace, and reversal
  linkage remain private.

## Runtime contract

- Cursor selector `cursor-grok-4.5-high`;
- Internal selector-plus-registered-alias attribution only;
- current registry label and source-registered historical alias locked in
  private state; public model attribution remains false;
- 300-second invocation timeout;
- global concurrency 1 and 30-second start pacing;
- one controller call may add at most one invocation;
- no retry, response repair, fallback, model substitution, manual fill, or
  failed-invocation replacement.

## Interpretation

Automated judgments are calibration and triage evidence. They do not count as
practitioners and cannot establish Preview, Verified, a public model row, or a
winner claim.

The round reports:

- identity-normalized reversal consistency by axis;
- cross-judge modal agreement;
- tie and both-fail rates;
- task/trial aggregate direction with uncertainty;
- deterministic selection for any later human escalation.

## Stop conditions

Freeze the fresh review root at the first packet, cache, registry, provider,
timeout, display-label, strict-JSON, artifact, or aggregation failure. Never
resume or fill a frozen root with another model.

