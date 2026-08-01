# Research-sample routing task contract — findings

Status: **ACCEPTED after v10 commit and before provider generation**.

## Contract

- New non-approval field-research operations domain: `research-sample-routing-v0.1`
- Existing `onboarding-v1` interaction adapter only; no evaluator or score delta
- Three exact sample/destination/steward mappings
- Three routing-policy choices, one reversible field-note toggle, one validated handoff label
- Compact control naming copy uses a `<span>` relationship rather than a semantic `label`
- Four-view target → evidence → state → action hierarchy and text geometry locked before generation
- Protected empty dynamic status selector has its own baseline `min-height`

## Untouched starter

Fresh `/tmp/u19160-sample-starter` scores **79/85**. Task contract, all state
journeys, accessibility, DESIGN.md grounding, evidence honesty, horizontal
overflow, clipping, control overlap, and decision hierarchy are green.
Responsive text geometry alone is red by construction:

- desktop percentage widths survive the mobile block layout;
- sample, destination, and steward identifiers fragment at reflow viewports;
- supplied-count evidence inherits 16px body type and wraps at 200%;
- the `<span>` naming copy competes with its paired compact toggle;
- no injected break opportunity or single-text horizontal scroller is present.

## Locked identity

- core/full prompt SHA-256: `cfd01edd68779260b73237233c43e7bf308c19c3dc67253361fd205e6ebb730a`
- starter tree SHA-256: `30926173fe7a78403d07c70f7948230f787fc39b68d17f55972ca7da66ef41c3`
- index.html SHA-256: `d4956f868681a6c8e94fdc3423682248aef9417b09b19ae81373b92c505b00fe`
- DESIGN.md SHA-256: `8804e99a88f2d0ba3cbabed573f0cb40b62453c10f530df4bd88547deae184fe`
- task.json SHA-256: `abb7f4fbc1aa9889a463b77cdb8beb032d29013f8449bfc911c6fd86e2fbae56`

## Next

Pin exact v10 from commit `e3e5c6e` as a detached clean candidate, then compare it against exact previous canonical in a fresh 2 arms × 3 trials matrix. Do not reuse this starter diagnostic as a benchmark result.
