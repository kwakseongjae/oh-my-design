# Payout frontier skill comparison — 1.9.103

Status: **LOCKED; provider calls 0**.

## Purpose

Compare the exact current OmD apply skill with the closest eligible
prompt-only frontier repair skill on the unseen payout-approval family.
Impeccable hook/browser mode is intentionally excluded so the benchmark
compares portable skill guidance rather than extra runtime capability.

## Frozen denominator

- task: payout approval `0.1.0`;
- OmD arm: exact detached source
  `f013dbd9f94a1e018f7cf8a4e500207fe982b00a`;
- frontier arm: exact detached Impeccable source
  `4d849eb75f216109ea7053ed21530a11fafcc786`;
- both arms receive the same task version, starter, DESIGN.md, and core prompt;
- each arm receives only its own preregistered activation delta;
- two arms × three trials = six fresh cells;
- alternating arm-first order: OmD / Impeccable, Impeccable / OmD,
  OmD / Impeccable;
- Cursor/Grok 4.5 High, runtime effort High;
- 900-second timeout, global concurrency 1, 120-second inter-cell pacing;
- one controller invocation may add at most one cell;
- no retry, repair, fallback, failed-cell replacement, or model substitution;
- Internal registered-display-name attribution only; no public model row.

## Primary outcomes

1. UI-Resolved@1 and Reliability@3 for each exact arm.
2. Paired objective W/T/L.
3. Approval regression gates: dialog initial state, focus entry, cancel focus
   restoration, confirm status change/close/focus restoration.
4. Protected facts/hooks, four viewport geometry, keyboard/focus,
   accessibility, DESIGN grounding, and evidence honesty.
5. Provider-reported time and token components as descriptive telemetry.

## Review ladder

Only same-trial pairs where both cells are valid, UI-Resolved, evidence-honest,
and product-diff eligible enter anonymous screenshot review. Deterministic
failures remain in the denominator and are not repaired or replaced.

Automated visual judges may select escalation candidates only. They cannot
promote a skill. Unresolved or reversal-inconsistent pairs go to owner blind
review; owner functionality/usability/fidelity/ship preference controls the
bounded decision.

## Decision boundary

- Deterministic superiority requires more paired wins than losses and no
  Reliability@3 loss.
- A deterministic tie proceeds to blind visual review rather than a fabricated
  winner.
- Any proposed OmD rule must be derived from a repeated failure cluster and
  validated later on another holdout; this comparison cannot directly train
  and validate the same rule.

## Stop conditions

Freeze the fresh root at the first preparation, provider, timeout, pacing,
evaluator, export, attribution, or infrastructure/process failure. Keep valid
quality failures in the denominator. Never retry, repair, resume a frozen root,
or substitute another model.
