# Museum-loan routing task contract — findings

Status: **ACCEPTED after v9 commit and before provider generation**.

## Contract

- New non-approval collections-operations domain: `museum-loan-routing-v0.1`
- Existing `onboarding-v1` interaction adapter only; no evaluator or score delta
- Three exact object/destination/registrar mappings
- Three routing-policy choices, one reversible source-note toggle, one validated handoff label
- Four-view target → evidence → state → action hierarchy
- Mobile, 320px, and 200% text-geometry scopes locked before generation
- Protected empty dynamic status selector has its own baseline `min-height`
- DESIGN.md explicitly declares a 12/17 label/metadata role without prescribing a task selector or CSS recipe

## Untouched starter

Fresh `/tmp/u19156-museum-starter` scores **79/85**. Task contract, all state
journeys, accessibility, DESIGN.md grounding, evidence honesty, horizontal
overflow, clipping, control overlap, and decision hierarchy are green.
Responsive text geometry is red by construction:

- desktop percentage widths survive the mobile block layout;
- object, destination, and registrar identifiers fragment at 390px, 320px, and 200%;
- the supplied-evidence line inherits 16px body type and wraps at 200%;
- the source-note label competes with its compact toggle;
- no injected break opportunity or single-text horizontal scroller is present.

The 320px screenshot confirms ancestor/column width competition and ordinary
type-role inheritance, not a fabricated semantic, interaction, accessibility,
or horizontal-overflow failure.

## Locked identity

- core/full prompt SHA-256: `f512b7f6bf2ea2474953f9f8ec98cae6095effa49007e5da5091c1a76e85bf10`
- starter tree SHA-256: `1c838a6b6eebeb41b5795c8ff0c754cb620ecc0d831f93686a4ffdb01cb58a47`
- index.html SHA-256: `13efa80a1a25f59cd924c7c333b1d9aefc973cc526140a061d387a41d5356203`
- DESIGN.md SHA-256: `d3a07624a9bd4784b1f9d26b67221190c315add918e5f9f585741ba1eeb65109`
- task.json SHA-256: `28e190050a074bb2f7af587b2efca6b3e0ef0d586a920dbd5e9cfcbf913d0160`

## Next

Pin exact v9 from commit `b6fa87d` as a detached clean candidate, then compare
it against exact previous canonical in a fresh 2 arms × 3 trials matrix. Do not
reuse this starter diagnostic as a benchmark result.
