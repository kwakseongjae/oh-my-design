# Book signature host-policy comparison — 1.9.210

## Verdict

The experiment completed 6/6 valid Codex/Luna-high cells. The installed policy
is a reliable execution guard, but it is **not eligible for broader promotion**
in its current form because it reduced completion quality and did not produce a
single UI-Resolved trial.

Frozen 1.9.207 and 1.9.208 cells were not reused. This result comes only from
the fresh `/tmp/u19210` root after the 1.9.209 runner-boundary smoke passed.

## Result

| Metric | Controller observation | Installed policy |
| --- | ---: | ---: |
| Valid runs | 3/3 | 3/3 |
| Scores | 81, 85, 79 | 79, 79, 81 |
| UI-Resolved | 1/3 | 0/3 |
| Reliability@3 | 0% | 0% |
| Proof trace analyzable | 3/3 | 3/3 |
| Proof compliant | 0/3 | 3/3 |
| Duplicate static executions | 1, 1, 6 | 0, 0, 0 |
| Valid installed state | n/a | 3/3 |
| Unblocked policy violations | n/a | 0, 0, 0 |

Matched UI-Resolved win/tie/loss for the policy arm was 0/2/1. Point deltas by
trial were -2, -6, and +2; mean objective lift was -2.35 percentage points.

The policy arm used 25.4% less mean wall time and 26.4% fewer mean tokens. Its
median wall time was 27.4% lower, while median tokens were only 4.9% lower. The
mean token reduction is driven partly by the controller's 1.08M-token outlier,
so it must not be presented as a stable efficiency gain.

## What the policy proved

- All three installed cells produced one valid state file.
- Five denied decisions were retained separately from executed commands.
- Browser recovery, duplicate static closure, and verification-after-ready had
  zero unblocked executions in every installed cell.
- The controller repeated static closure 1, 1, and 6 times; the policy reduced
  actual duplicate execution to zero.

## Why promotion is held

The guard enforces sequence but its denial response does not give enough
state-specific recovery direction. Two installed trials stopped without
browser proof after a denied action. Their final messages treated the policy as
an environment failure instead of continuing through the one remaining legal
transition. The first installed trial reached browser proof but still scored
79 and then attempted verification after delivery was ready.

This is not evidence that enforcement should be removed. It is evidence that a
deny-only guard is incomplete as an agent interface. The next bounded delta is
state-specific recovery guidance in the denial payload:

- `static-closure-required` → run exactly one static closure, then one browser proof;
- `duplicate-static-closure` → do not retry static; advance to browser proof or stop if ready;
- `verification-after-ready` → stop tool use and deliver the result.

That delta must be tested on a new unseen task. The current opt-in policy stays
opt-in; no default-install or public quality claim is promoted from this run.
