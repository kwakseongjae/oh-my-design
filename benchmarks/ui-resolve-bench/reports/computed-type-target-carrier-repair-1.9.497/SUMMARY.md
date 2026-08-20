# 1.9.497 — Computed type + target-only comparison carrier repair

## Outcome

The provider-free repair closes both causes exposed by the frozen 1.9.496
flight-recorder candidate:

- `lock` now captures the exact pre-edit product source and SHA-256. The shipped
  browser runner renders that snapshot and the edited product under the same
  390px, 320px, and actual-200% conditions, then compares computed font size,
  line height, and weight. The model no longer supplies guessed pixel values.
- A `comparison-scroll` row must bind to one separately registered, target-only
  carrier. Evidence, state, and actions remain outside it. Runtime acceptance
  rejects unregistered overflow, focusable descendants inside the comparison
  carrier, and any clipped focusable control.
- Static cardinality assertions now accept bare boolean HTML attributes such as
  `data-primary-action`.

## Deterministic replay

A fresh copy of `flight-recorder-download-review-v0.1` was locked before the
product edit at `/private/tmp/u19497-flight-replay`. The edited product used a
target-only `Decision target comparison` carrier while preserving all registered
rows and actions.

The shipped runner attached to the existing named consumer browser
`bench19366`; it did not launch another browser. It rendered the pre-edit
snapshot and edited product in all three conditions and finalized:

```text
registered_carriers: 6
registered_rows: 22
closure: closed
quality_pass: true
unresolved_known_failures: 0
static_closure: passed (1 attempt)
OMD_DELIVERY_READY
```

This replay is engineering validation only. It does not alter the frozen
1.9.493 experiment or retroactively promote its failed candidate.

## Verification

- JavaScript syntax: pass
- Python compilation: pass
- Focused helper/contract/proof tests: 52/52 pass
- TypeScript type-check: pass
- Existing consumer-browser replay: pass
- Provider/model calls: 0

## Next

Pin this repair immutably, then run it against another genuinely unseen task.
