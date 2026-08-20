# Cursor review alias plane — 1.9.90 findings

Status: **accepted, provider-free**.

Fresh automated judge state now records an Internal-only alias set made from
the current exact-selector registry label and the source-registered historical
label. For `cursor-grok-4.5-high`, the accepted set is currently:

- `Cursor Grok 4.5`;
- `Cursor Grok 4.5 High`.

The exact selector and current registry row remain locked and re-probed before
every call. A provider event may report the selector or one of those recorded
aliases. Any other name freezes the root.

This is explicitly `internal-selector-plus-registered-alias` evidence with
`public_model_attribution_eligible:false`. It cannot create or support a public
Model Track row.

Focused tests prove current-label/old-event-label acceptance while preserving
unknown-label rejection and pre-provider registry drift freezing. Reviewer
focused tests are 12/12; Node syntax, TypeScript, and build pass. Provider
generation for the correction is zero.
