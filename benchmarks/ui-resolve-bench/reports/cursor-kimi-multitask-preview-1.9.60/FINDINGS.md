# Cursor/Kimi K3 multi-task Skill Lift Preview — 1.9.60 findings

Status: **execution stopped; user pause and infrastructure-invalid fourth cell**.

## Outcome

| Order | Cell | Score | Automated gate | Wall | Non-cached tokens |
|---:|---|---:|---:|---:|---:|
| 1 | onboarding Raw | 85/85 | pass | 496,617 ms | 73,509 |
| 2 | incident OmD | 85/85 | pass | 174,601 ms | 50,043 |
| 3 | locale Raw | 85/85 | pass | 357,062 ms | 65,986 |
| 4 | onboarding OmD | no score | infrastructure failure | 395 ms | unavailable |
| 5 | incident Raw | not started | — | — | — |
| 6 | locale OmD | not started | — | — | — |

All three completed cells passed every automated and critical gate, including
Evidence & Unknown and accessibility. The three cells used 189,538 non-cached
tokens and 1,028,280 ms of provider cell wall time.

No task has both its Raw and OmD arm, so there are zero complete pairs.

## Stop and pacing evidence

The user requested an immediate pause after the third completed cell. No live
provider process remained when the controller state was inspected. The fourth
cell had already failed before product modification with:

`Error: [unavailable] getaddrinfo ENOTFOUND api2.cursor.sh`

It emitted no provider event, reported model, usage, final response, or product
change. The final two cells are retained as not started.

The first two 120-second waits conform to the lock. The third retained wait
declares 120 seconds but its timestamps span about 659 seconds, so execution
control also fails closed. This matrix is infrastructure-invalid independently
of the fourth-cell DNS failure.

## Decision boundary

The matrix is incomplete and contains no complete pair. Multi-task Preview
acceptance, paired delta or median, Reliability@3, efficiency, cross-model
comparison, skill superiority, and frontier claims are all prohibited.
Completed cells remain Internal diagnostics with display-name-only attribution.

Do not resume `/tmp/u1960`, replace its failed cell, or insert another model
into this denominator. A future Kimi rerun requires a fresh preregistered root.
GLM 5.2 execution is paused until the user explicitly resumes the queue.
