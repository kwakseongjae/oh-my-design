# Cursor/Composer Skill Lift — 1.9.51 findings

Status: **execution stopped; provider resource exhausted**.

## Outcome

The fresh nine-cell replacement completed six cells serially. The seventh Raw
cell failed before any model output with Cursor Provider
`resource_exhausted`; the controller stopped and retained the final two cells
as `not-started`.

| Order | Cell | Score | Automated gate | Wall | Non-cached tokens |
|---:|---|---:|---:|---:|---:|
| 1 | baseline t1 | 69/85 | fail | 170,753 ms | 38,715 |
| 2 | Raw t1 | 79/85 | fail | 111,117 ms | 41,113 |
| 3 | OmD t1 | 85/85 | pass | 248,077 ms | 72,341 |
| 4 | OmD t2 | 85/85 | pass | 116,753 ms | 55,163 |
| 5 | baseline t2 | 63/85 | fail | 124,653 ms | 41,129 |
| 6 | Raw t2 | 79/85 | fail | 125,058 ms | 50,527 |
| 7 | Raw t3 | no score | provider failure | 25,541 ms | unavailable |
| 8 | OmD t3 | not started | — | — | — |
| 9 | baseline t3 | not started | — | — | — |

Every completed cell passed Evidence & Unknown and changed only `index.html`.
Both completed OmD cells passed all six critical gates and axe
serious/critical zero. Those observations are retained diagnostics only.

## Provider failure

The stopped cell produced no final response, usage event, product diff, or
score. Its event stream contains three Cursor-managed reconnect/resume
attempts followed by:

`RetriableError: [resource_exhausted] Error`

This is an infrastructure stop, not a Raw, OmD, evaluator, or task failure.

## Decision boundary

The matrix is incomplete and therefore cannot produce paired W/T/L,
Reliability@3, efficiency, or a Composer replication decision. Display-name
attribution also keeps every completed cell Internal only. Freeze `/tmp/u1951`
and preregister a fully fresh operational replacement; do not resume or replace
only the failed cell.
