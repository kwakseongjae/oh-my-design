# Autopilot Luna/high smoke 1.9.876

Status: **stopped-preregistered; diagnostic only**.

The exact in-app-browser admission and provider-zero audit passed. The first
landing cell completed valid and UI-Resolved after one bounded repair
(`10 → 100`). The second cold-chain provider run completed, but the controller
evaluator waited on an owner combobox that the implementation removed after an
invalid assignment. No task score was written, so the controller correctly
froze the preregistered root before repair or the locale cell.

- provider exposures: 3 model calls across 2 cells
- valid terminal cells: 1 / 3
- UI-Resolved terminal cells: 1 / 3 scheduled
- retries, replacements, fallbacks, Cursor, Claude: 0
- observed input/output tokens: 3,934,511 / 65,618
- observed cached input tokens: 3,679,232
- provider wall time: 1,348,524 ms
- frozen root: `/private/tmp/omd-autopilot-luna-high-smoke-1.9.876`

Provider-free replay after the evaluator fix writes a terminal cold-chain score
of 40 rather than crashing. It still fails owner-error association, sample-owner
selection, persistent assignment, and accessibility. The evaluator change does
not promote or soften those failures; it only converts a stale optional locator
into an honest terminal result.

This root must not be resumed. A fresh, commit-bound epoch is required before
another provider exposure. Public one-shot and 2.0 readiness claims remain
blocked until a fresh three-cell smoke reaches 3 / 3 valid UI-Resolved results.
