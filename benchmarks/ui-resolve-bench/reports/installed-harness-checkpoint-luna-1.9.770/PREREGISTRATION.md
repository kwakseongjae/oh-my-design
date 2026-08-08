# Thin-master checkpoint repeat — 1.9.770

## Question

After moving inactive master phases behind two sidecars, does Luna/high preserve
the same exact checkpoint behavior, and what descriptive input-cost change is
observed against 1.9.768?

## Fixed design

- Same three tasks, oracle, order, model, effort, runner prompt, timeout, and
  retry-0 policy as 1.9.768.
- Fresh workspaces; one Codex-native Luna/high invocation per case.
- Cursor forbidden; only `master-decision.json` may be written.
- Task replay and provider cache effects are disclosed. Token and wall changes
  are descriptive, not causal proof.
- Intake classification reads the thin master kernel. Legacy-production and
  execution-phase sidecars are not needed for these three checkpoint outcomes.

## Gates

Exact ready/interview/blocked oracle 3/3, exit 0, timeout 0, unauthorized write
0, retry/replacement 0, Cursor 0. Any failure freezes the run.

## Baseline

1.9.768 passed 3/3 with input 420,483 (cached 350,208), output 3,956,
reasoning 1,352, and summed wall 123,386ms. The always-exposed master was
37,261B before the 1.9.769 split and is 22,378B in this candidate.

No UI quality, model ranking, skill superiority, or 2.0 claim follows from this
checkpoint-cost repeat.
