# Support-routing handoff task contract — findings

Status: **ACCEPTED before provider generation**.

## Contract

- New non-approval support-operations domain: `support-routing-handoff-v0.1`
- Existing `onboarding-v1` interaction adapter only; no evaluator or score delta
- Three exact queue/destination/owner mappings
- Three routing choices, one reversible context toggle, one validated handoff label
- Four-view target → evidence → state → action hierarchy
- Mobile, 320px, and 200% text-geometry scopes locked before generation

## Untouched starter

Fresh `/tmp/u19148-support-starter` scores **79/85**. Task contract, state
journey, accessibility, DESIGN.md grounding, evidence honesty, clipping,
control overlap, and decision hierarchy are green. Responsive text geometry is
red by construction:

- desktop percentage columns and `nth-child` widths survive the mobile stack;
- destination and owner identifiers fragment at 390px, 320px, and 200%;
- `3 supplied queues · 1 routing policy` and `Preserve original-assignee
  context` wrap in the narrow conditions;
- 320px and 200% produce horizontal overflow.

The 320px screenshot confirms destructive column competition rather than a
fabricated semantic or interaction failure. There are no injected break
opportunities or single-text scrollers.

## Next

Pin exact v7 from commit `0b81b52` as a detached clean candidate, then compare
it against exact previous canonical in a fresh 2 arms × 3 trials matrix. Do not
reuse this starter diagnostic as a benchmark result.
