# Harness delivery-budget recovery — 1.9.8 findings

Run on 2026-07-23 against the preregistration in this directory.

## Disposition

The fresh recovery cell passes all six preregistered gates. Exact Opus 4.8
completed the onboarding repair in 456,045ms, produced a final response, and
the frozen evaluator returned 85/85 with every critical gate and Evidence &
Unknown passing. The first product write occurred at 313,484ms, inside the
450,000ms delivery gate.

This closes the single-cell 1.9.8 delivery-budget recovery and unlocks a new
1.9.9 repeated matrix. It does not retry or repair the failed 1.9.7 denominator,
prove stable efficiency, or support a public harness, skill, or model claim.

## Acceptance record

| gate | observed | result |
|---|---:|---:|
| Process / child / timeout | `0` / `0` / no | pass |
| Final response | present at 456,045ms | pass |
| Frozen evaluator | 85 / 85 · UI-Resolved | pass |
| Critical gates | 6 / 6 | pass |
| Evidence & Unknown | pass | pass |
| First product write | 313,484ms ≤ 450,000ms | pass |
| Last product write | 415,072ms | diagnostic |
| Required Agent calls | writer 1 + engineer 1 | pass |
| Requested Agent models | Opus + Opus | pass |
| Agent / infrastructure / sandbox / cwd errors | 0 / 0 / 0 / 0 | pass |
| Product diff | `index.html` only | pass |
| Replacement verifier / DOM shim / mock browser | 0 | pass |

Runtime telemetry recorded 85,062 Opus input tokens, 41,320 Opus output tokens,
448,552 cached Opus input tokens, and a small Claude Code internal Haiku helper
allocation of 1,135 input plus 16 output tokens. Total uncached input and output
volume was 127,533 tokens; provider price-equivalent telemetry was $1.99360 and
is not a billing claim.

## Verification behavior

The parent attempted the browser path, received the expected sandbox
`ProcessSingleton`/Crashpad failure, explicitly stopped browser attempts, and
did not author a DOM shim, mock browser, or replacement verifier. It ran bounded
static checks, corrected two low-contrast borders in `index.html`, and delivered
with browser proof clearly labelled unresolved. The external frozen evaluator
then independently exercised desktop, 390px, 320px, and the 200% zoom surrogate,
including protected state transitions, keyboard traversal, focus visibility,
axe, geometry, design grounding, and evidence honesty.

The one recoverable tool error was the blocked local Chrome verification. It
was not an infrastructure, sandbox-classification, cwd, Agent, product, or
frozen-evaluator failure.

## Historical diagnostic only

Relative to the preserved invalid 1.9.7 timeout cell, this fresh observation
reached first write 45.99% earlier, last write 52.62% earlier, final delivery
49.33% earlier, and used 36.63% fewer uncached tokens. Both artifacts scored
85/85 after external evaluation, but the 1.9.7 score was post-stop forensic and
cannot enter a paired estimate. These deltas are root-cause evidence, not an
efficiency or quality-lift claim.

## Decision

Mark 1.9.8 calibration complete. Keep the repair harness opt-in. Preregister a
fresh 1.9.9 portable-versus-delivery-budget-harness repeated matrix before any
new generation. The new matrix must retain every scheduled cell in the
denominator and apply the original quality, attribution, reliability, Evidence
& Unknown, wall-time, token, and intervention gates plus the 1.9.8 delivery
gates to every harness cell.

