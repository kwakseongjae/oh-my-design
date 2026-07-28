# Cursor/Grok incident geometry Reliability@3 replacement — 1.9.69 findings

Status: **passed; bounded Internal incident Reliability@3**.

## Result

All six cells and five retained cooldowns completed without retry, fallback,
model substitution, provider-capacity failure, pacing failure, or manual
product edit.

| Trial | Raw | OmD | Delta |
|---|---:|---:|---:|
| 1 | 85 | 85 | 0 |
| 2 | 85 | 85 | 0 |
| 3 | 85 | 85 | 0 |

- OmD ≥ Raw: 3/3;
- paired median delta: 0;
- Raw automated/all-critical/Evidence: 3/3;
- OmD automated/all-critical/Evidence: 3/3;
- OmD exact card radius: 3/3;
- OmD exact control radius: 3/3;
- OmD four-viewport focus closure: 3/3;
- changed product file: `index.html` only, 6/6;
- retained pacing: 5/5 inside 120,000–125,000 ms;
- hidden, clipped, overlapping, invisible, or out-of-view OmD focusable
  controls: 0.

The repeated card-radius failure seen in two of three 1.9.66 incident OmD
trials did not recur. The prior hidden-focusable regression also remained
absent across all three OmD trials and all four viewports per trial.

## Descriptive compute

- Raw observed tokens: 280,467;
- OmD observed tokens: 251,774;
- Raw wall time: 588,871 ms;
- OmD wall time: 690,175 ms.

OmD used 10.23% fewer observed tokens and 17.20% more wall time in this small
task-local sample. These values are descriptive only: the run had no hard
token cap, provider reasoning tokens were not visible, and this matrix is not
an efficiency experiment.

## Validity boundary

Every cell remains `invalid-attribution` for public Model Track purposes
because Cursor exposed `Cursor Grok 4.5 High` as a runtime display name rather
than an immutable provider model identifier. Deterministic task results are
therefore retained only as Internal runtime×skill evidence.

## Decision

The bounded 1.9.69 hypothesis passes. Geometry-token closure now has one fresh
candidate recovery plus a fresh incident Reliability@3 replacement with zero
paired losses and exact radius compliance 3/3.

This closes the specific incident geometry cluster. It does not revise 1.9.66
or establish general three-task Skill Lift, public model attribution,
cross-model superiority, efficiency, or frontier status. The next valid step
is a separately preregistered three-task replacement or a new failure-cluster
audit; this root is frozen complete.
