# Cursor/Composer Skill Lift — 1.9.52 findings

Status: **execution stopped; repeated provider capacity hard-pause**.

## Outcome

The fresh operational replacement completed five cells serially. The sixth
Raw cell failed before any model output with the same Cursor Provider
`resource_exhausted` condition that stopped 1.9.51. The controller froze the
remaining three cells as `not-started`.

| Order | Cell | Score | Automated gate | Wall | Non-cached tokens |
|---:|---|---:|---:|---:|---:|
| 1 | baseline t1 | 53/85 | fail | 126,433 ms | 42,723 |
| 2 | Raw t1 | 79/85 | fail | 239,521 ms | 55,190 |
| 3 | OmD t1 | 85/85 | pass | 125,577 ms | 80,465 |
| 4 | OmD t2 | 85/85 | pass | 187,662 ms | 54,905 |
| 5 | baseline t2 | 67/85 | fail | 108,611 ms | 40,851 |
| 6 | Raw t2 | no score | provider failure | 26,433 ms | unavailable |
| 7–9 | remaining cells | not started | — | — | — |

Every completed cell passed Evidence & Unknown and changed only `index.html`.
Both completed OmD cells passed all six critical gates and axe
serious/critical zero. Those observations remain diagnostics only.

## Repeated provider failure

The stopped cell produced no final response, usage event, product diff, or
score. Its event stream contains three Cursor-managed reconnect/resume
attempts followed by:

`RetriableError: [resource_exhausted] Error`

The same condition stopped 1.9.51 after six completed cells. This is a
provider-capacity boundary, not a Raw, OmD, evaluator, or task failure.

## Decision boundary

The matrix is incomplete and cannot produce paired W/T/L, Reliability@3,
efficiency, or a Composer replication decision. Display-name attribution also
keeps completed cells Internal only.

The preregistered repeated-capacity hard-pause is now active. Do not create an
immediate 1.9.53 clone. Resume the Composer lane only after Cursor capacity is
confirmed available, or explicitly defer Composer while another separately
preregistered model/task lane proceeds.
