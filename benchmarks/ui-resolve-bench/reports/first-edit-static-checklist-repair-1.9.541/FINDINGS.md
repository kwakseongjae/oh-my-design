# 1.9.541 — First-edit static checklist repair

## What failed

Aggregate carrier measurement transferred, but neither pharmaceutical candidate closed proof. Trial 1 used a broad regex that treated safe `min-width:0` containment as a fixed-width failure. Trial 2 measured its carriers correctly but left one forbidden decision-grid declaration in the only product edit. In both cases the exactly-once static close correctly prevented promotion.

## Repair

- Added structured `forbidden_css_declarations` assertions.
- `positive-length` rejects positive fixed widths while allowing zero containment resets.
- `any-declaration` rejects the named property itself for an exact selector.
- Acceptance-debt assertions must be duplicated in the global manifest before locking.
- `plan-close` now emits one ordered `first_edit_checklist` covering required literals, forbidden literals, forbidden regex patterns, structured CSS declarations, and hook counts.
- The skill requires every checklist item to be satisfied in the single product edit before consuming static closure.

## Acceptance

The deterministic smoke allows `.ledger { min-width: 0 }`, rejects `.ledger { min-width: 1060px }`, and rejects `.decision { grid-template-columns: 1fr }` under `any-declaration`. Focused skill/helper tests are 44/44 and TypeScript lint passes. The full suite is 567 passed, 1 skipped, with four pre-existing environment or attribution-fixture failures.

This is a provider-free candidate repair, not a promotion. It does not reopen the frozen pharmaceutical matrix.
