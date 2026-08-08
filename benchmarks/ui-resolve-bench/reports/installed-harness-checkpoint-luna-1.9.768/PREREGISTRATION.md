# Progressive-disclosure checkpoint repeat — 1.9.768

## Question

After moving visual-only detail behind a sidecar, does Luna/high preserve the
same exact checkpoint behavior, and what descriptive input-cost change is
observed against 1.9.766?

## Fixed design

- Same three tasks, oracle, order, model, effort, runner prompt, timeout, and
  retry-0 policy as 1.9.766.
- Fresh workspaces; one Codex-native Luna/high invocation per case.
- Cursor forbidden; only `master-decision.json` may be written.
- The task replay and possible provider cache effects are disclosed. Token and
  wall changes are descriptive, not causal proof.
- `master-visual-grounding.md` is not read for checkpoint classification; that
  is the progressive-disclosure behavior under test.

## Gates

Exact ready/interview/blocked oracle 3/3, exit 0, timeout 0, unauthorized write
0, retry/replacement 0, Cursor 0. Any failure freezes the run.

## Baseline

1.9.766 passed 3/3 with input 457,473 (cached 355,840), output 3,924,
reasoning 1,508, and summed wall 107,962ms. The initial harness file was
48,736B; the 1.9.768 locked initial harness is 30,194B.

No UI quality, model ranking, skill superiority, or 2.0 claim follows from this
checkpoint-cost repeat.
