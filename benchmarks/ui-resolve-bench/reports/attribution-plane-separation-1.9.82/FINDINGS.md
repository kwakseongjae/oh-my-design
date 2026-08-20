# Attribution Plane Separation — 1.9.82 Findings

## Status

**PROVIDER-FREE ACCEPTED**

Execution validity and public model-attribution eligibility are now separate.
Provider generation remained zero.

## Contract

Run matrices may freeze one of two scopes:

- `provider-observed-only` — default; display-name evidence stays invalid.
- `internal-registered-display-name` — permits Internal validity only when the
  Cursor selector maps to the exact registered runtime label.

The scope is copied into every locked matrix-cell and exported run record.
Every record also emits `public_model_attribution_eligible`. An Internal
display-name row is explicitly false even when its execution result is valid.

Unknown or drifted labels remain invalid. The existing runtime controller still
checks the runtime target, agent, requested selector, requested effort,
registered reported label, process metadata, provider route, and provider-event
usage before export.

## Acceptance evidence

- export and matrix-control tests: 16/16 passed
- default display-name invalidation: passed
- exact registered Internal mapping: passed
- drifted display-name rejection: passed
- unsupported matrix scope rejection: passed
- explicit non-public eligibility on Internal record: passed
- TypeScript lint: passed
- build: passed
- provider calls: 0

## Claim boundary

`/tmp/u1980` remains frozen and is not rescored. This patch does not recover,
reinterpret, or promote its first diagnostic cell.

The next valid step is a fresh replacement matrix with
`internal-registered-display-name` locked before preparation. Any public or
Verified model claim continues to require provider-observed immutable identity.
