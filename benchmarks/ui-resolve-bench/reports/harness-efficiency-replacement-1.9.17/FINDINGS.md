# Harness efficiency replacement — 1.9.17 findings

Executed on 2026-07-23 under the frozen preregistration. The matrix stopped at
cell 8 and was not resumed or retried.

## Disposition

Mark 1.9.17 calibration failed.

- 18 scheduled
- 8 attempted
- 7 valid completed cells
- 1 preregistered stop: `pricing-t2-harness`
- 10 not started
- stop reason: `late-first-product-write`

The stopped provider exited zero with a final response, exact Opus attribution,
both required Opus specialist calls, no Agent/tool/infrastructure/sandbox/cwd
error, one changed product file (`index.html`), and no replacement verifier.
Its first product write occurred at 510,648ms, 60,648ms beyond the frozen
450,000ms delivery gate. The executor therefore stopped before evaluation or
export. The retained product is forensic process evidence only and does not
enter any quality denominator.

## Completed cells before the stop

Three complete first-trial task pairs are available only as incomplete-matrix
diagnostics.

| paired valid-only metric | portable | harness |
|---|---:|---:|
| valid cells | 3 | 3 |
| UI-Resolved | 3/3 | 3/3 |
| Evidence & Unknown | 3/3 | 3/3 |
| mean objective score | 83.67 | 83.67 |
| median wall time | 430,140ms | 500,022ms |
| median uncached tokens | 105,380 | 152,485 |
| maximum first product write | 337,212ms | 414,907ms |

Paired objective outcomes are 0 harness wins / 3 ties / 0 losses. Pricing and
Onboarding scored 85/85 in both systems. Operations scored 81/85 in both because
the frozen `primary_action` design oracle missed while every critical gate,
state, viewport, accessibility check, and Evidence & Unknown check passed.
Harness medians are 1.162x wall time and 1.447x tokens relative to the three
paired portable cells. One additional unpaired portable Pricing cell completed
at 85/85, 580,269ms, 94,721 tokens, and a 476,387ms first write before the
candidate stop. None of these incomplete-matrix values support reliability,
Pareto, promotion, or frontier claims.

## Root cause

Authentication, model routing, and specialist execution all worked. In the
stopped candidate:

- first specialist call: 97,834ms
- last required specialist result: 282,111ms
- first product write: 510,648ms
- last-advisory to first-write gap: 228,537ms

The two specialist calls overlapped and finished normally. The parent then
spent 162,825ms producing a second synthesis before announcing that editing
would start, followed by another 65,712ms generating a whole-file `Write`.
This contradicted the activation's intent to edit immediately after both
advisories and exposed the 450-second gate to normal model-latency variance.
The three completed candidate cells also waited 119,006–164,538ms after their
last advisory, showing that the issue is the advisory-to-edit scheduler rather
than a one-off authentication or tool failure.

## Next bounded patch

1. A timed repair advisory returns at most three findings in roughly 300 words
   and names one `first_safe_edit` grounded in the immutable ledgers.
2. After the last required advisory, the main agent emits no ledger recap,
   plan, or synthesis before applying one acceptance-relevant targeted `Edit`.
3. The first transaction may not be a no-op or timestamp touch. When a safe
   existing snippet can be patched, a whole-file rewrite is not the first
   transaction.
4. A fresh Pricing harness recovery must pass the existing 450-second gate and
   a new last-advisory-to-first-write gate before any new full matrix is opened.

This failure stays visible. The `/tmp/u1917` root is frozen permanently.
