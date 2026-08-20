# Warehouse-transfer routing task contract — findings

Status: **ACCEPTED after v8 commit and before provider generation**.

## Contract

- New non-approval inventory-operations domain: `warehouse-transfer-routing-v0.1`
- Existing `onboarding-v1` interaction adapter only; no evaluator or score delta
- Three exact request/warehouse/owner mappings
- Three transfer-policy choices, one reversible bin-context toggle, one validated handoff label
- Four-view target → evidence → state → action hierarchy
- Mobile, 320px, and 200% text-geometry scopes locked before generation
- Protected empty dynamic status selector has its own baseline `min-height`

## Untouched starter

Fresh `/tmp/u19152-warehouse-starter-v2` scores **79/85**. Task contract,
all state journeys, accessibility, DESIGN.md grounding, evidence honesty,
horizontal overflow, clipping, control overlap, and decision hierarchy are
green. Responsive text geometry is red by construction:

- desktop percentage widths survive the mobile block layout;
- request, warehouse, and owner identifiers fragment at 390px, 320px, and 200%;
- the selected source, supplied-evidence line, and bin-context label compete with retained outer/card/section insets;
- no injected break opportunity or single-text horizontal scroller is present.

The 320px screenshot confirms destructive ancestor/column width competition,
not a fabricated semantic, interaction, or accessibility failure.

## Locked identity

- core/full prompt SHA-256: `477737f4088207b740be7d69744fff9f1b3e3be0e448725a709c544f553f6cc2`
- starter SHA-256: `4f6ec8eaf629cb0258caaffcf45d67ba40ec520cb273e6782c394abe7c0aa80e`
- DESIGN.md SHA-256: `d8b7891da94281ec684c2668a7bb7804eb865eca773577f24af5129dfb01977a`
- index.html SHA-256: `328265550e54f8af9d715a855acf0a92e7a330d0cab0619bcfc53c9819348572`

## Next

Pin exact v8 from commit `e33fd21` as a detached clean candidate, then compare it against exact previous canonical in a fresh 2 arms × 3 trials matrix. Do not reuse this starter diagnostic as a benchmark result.
