# Cursor/Grok multi-task Skill Lift Preview — 1.9.57 findings

Status: **execution stopped; provider capacity after four completed cells**.

## Outcome

| Order | Cell | Score | Automated gate | Wall | Non-cached tokens |
|---:|---|---:|---:|---:|---:|
| 1 | onboarding Raw | 81/85 | fail | 357,913 ms | 79,050 |
| 2 | incident OmD | 85/85 | pass | 223,609 ms | 105,833 |
| 3 | locale Raw | 85/85 | pass | 307,417 ms | 78,275 |
| 4 | onboarding OmD | 85/85 | pass | 148,234 ms | 54,195 |
| 5 | incident Raw | no score | provider failure | 24,563 ms | unavailable |
| 6 | locale OmD | not started | — | — | — |

All four completed cells passed Evidence & Unknown. All three 85-point cells
passed every critical gate. Onboarding Raw lost four points on accessibility;
the complete onboarding pair is therefore Raw 81 → OmD 85, +4.

Four planned 120-second inter-cell waits completed and were retained outside
provider cell wall time.

## Provider stop

The fifth cell reported `Cursor Grok 4.5 High`, then performed three
provider-managed reconnect/resume attempts and terminated with:

`RetriableError: [resource_exhausted] Error`

There was no usage event, final response, product change, evaluator score, or
manual intervention. This is an infrastructure stop, not an incident task,
Raw condition, evaluator, or product failure.

## Decision boundary

The matrix is incomplete. Incident lacks its Raw pair and locale lacks its OmD
pair, so multi-task Preview acceptance, paired median, Reliability@3,
efficiency, and cross-model or skill superiority are all prohibited.
Completed scores remain Internal diagnostics with display-name-only
attribution.

The Grok long-form lane has now consumed four successful cells in this window
and hit provider capacity despite fixed pacing. Do not create an immediate
replacement. Continue with separately preregistered Kimi K3 attribution
canary, then GLM 5.2, without inserting either model into this Grok
denominator.
