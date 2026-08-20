# Runtime conjunctive reflow closure repair — 1.9.395

The rail candidate exposed a mechanical gap rather than another prose gap. The skill said unresolved rows could not pass quality closure, but `reflow-artifact.mjs finalize` still accepted mixed pass/unresolved outcomes and `finalize-unresolved` could run without a real browser attempt. The host blocked delivery, yet the model could spend its remaining budget accounting for unresolved work instead of measuring and correcting it.

The helper now rejects resolved finalization whenever any registered carrier or row is unresolved. Honest unresolved accounting requires exactly one recorded browser infrastructure attempt with a named mechanism; skipping the browser or finding a product defect cannot use that path. Unresolved accounting writes `closure.state: unresolved`, `quality_pass: false`, and a nonzero runtime `known_failure_closure`, while a resolved artifact must mechanically reach zero unresolved rows and carriers.

The installed host validator enforces the same contract, so hand-authored JSON cannot bypass the helper semantics. Canonical and experimental skill prose now tell the model to attempt the prepared route, fix measured product defects, and reserve `finalize-unresolved` only for infrastructure failure.

Focused contract/runtime tests are 74/74, the new exact candidate registration check is 1/1, type-check and diff checks pass. The wider benchmark contract suite is 144 pass with two pre-existing external vendor fixtures lacking Git roots; those failures are unrelated to this repair. Provider calls for the repair: 0.
