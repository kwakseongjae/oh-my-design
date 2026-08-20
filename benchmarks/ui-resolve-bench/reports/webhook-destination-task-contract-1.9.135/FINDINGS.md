# Webhook destination routing holdout — findings

Status: **ACCEPTED; provider generation has not started**.

`webhook-destination-routing-v0.1` was contract-locked after the reflow v4
candidate commit and before any provider run. It uses the existing
`onboarding-v1` interaction adapter in a new integration-routing domain: three
delivery-lane choices, one reversible signature-policy toggle, an invalid/valid
route-label journey, three event identifiers and endpoint paths, and one
visible decision boundary.

The untouched starter scores 79/85. Task contract, all three state journeys,
accessibility, DESIGN grounding, evidence honesty, overflow, clipping, overlap,
and decision hierarchy are green. The only critical failure is the intended
text-geometry cluster at mobile, 320px, and 200%: residual desktop percentage
widths constrain mobile reading cells while a fixed generated-label track
leaves atomic event IDs and endpoint paths in destructive vertical fragments.
The 320px screenshot confirms the failure directly, including the selected
source filename wrapping inside the same decision context.

This is a valid unseen repair holdout, not an already-polished ceiling. It uses
a coherent definition surface rather than a native table or per-event cards,
contains no injected break opportunities, and was never included in the v4
skill authoring evidence. Next, pin exact v4 from `c8416c4` and compare it with
the exact previous canonical in a fresh 2 arms × 3 trials root with task,
prompt, starter, DESIGN, runtime, model, effort, timeout, and activation held
equal.
