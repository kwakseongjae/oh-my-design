# Objective epoch admission — 1.9.677

## Outcome

Prepared UI-Resolve runs now bind execution to the objective methodology that
was current when the workspace was created. A prepared matrix records the
objective score schema, methodology epoch, evaluator source hash, and
methodology-contract source hash in four places:

- `RUN-MATRIX.locked.json`
- `matrix-state.json`
- each cell's `.benchmark/manifest.json`
- each cell's `.benchmark/matrix-cell.json`

The runner validates every pin before acquiring its invocation lease. Missing,
historical, or edited pins fail with `objective-methodology-drift` before
runtime preflight, pacing, execution-state creation, or provider invocation.

## Acceptance evidence

- A fresh two-arm matrix carries the same non-empty pin in all four records.
- A locked plan changed to a historical epoch is rejected.
- The negative fixture creates no execution lease, execution state, pacing
  wait, or fake provider invocation.
- Historical prepared roots are not modified or rescored; they must be copied
  into a newly prepared matrix when a fresh run is intended.

This is provider-free admission evidence. It is not a model, skill, or Ship
Preference result.
