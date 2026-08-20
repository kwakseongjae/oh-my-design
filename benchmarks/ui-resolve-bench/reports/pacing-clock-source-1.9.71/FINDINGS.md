# Pacing clock-source repair — 1.9.71 findings

Status: **accepted provider-free calibration**.

Elapsed cooldown duration now uses the monotonic clock as its authoritative
source. The exact 120–125-second window is unchanged. Wall time remains
retained and must be finite, non-negative, chronological, and within the
existing 5,000 ms disagreement limit.

The new regression reproduced the 1.9.70 boundary shape: monotonic 120,002 ms
and wall 119,998 ms. It completed the second fake provider only after accepting
the valid monotonic duration. Existing tests continued to reject:

- monotonic 119,999 ms early return;
- 659,462 ms overshoot;
- greater-than-5,000 ms clock disagreement;
- operator STOP during cooldown;
- prepared-suffix drift and checkpoint-history corruption.

Focused controller tests passed 40/40. TypeScript lint, CLI build, Node syntax,
and diff checks passed. No provider was called.

`/tmp/u1970` remains frozen. This repair unlocks only a separately
preregistered fresh 18-cell replacement with the same task, condition, model,
skill, evaluator, ordering, timeout, and requested 120-second pacing.
