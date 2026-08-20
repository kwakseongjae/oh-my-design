# Audit-export delivery holdout — findings

Status: **ACCEPTED; provider generation has not started**.

`audit-export-delivery-v0.1` was contract-locked after the reflow v5 commit and
before any provider run. It uses the existing `onboarding-v1` interaction
adapter in a new compliance-delivery domain: three delivery-channel choices,
one reversible recipient-verification toggle, an invalid/valid export-label
journey, three artifact/destination pairs, and one visible decision boundary.

The untouched starter scores 79/85. Task contract, all state journeys,
accessibility, DESIGN grounding, evidence honesty, overflow, clipping, overlap,
and decision hierarchy are green. The only critical failure is the intended
text-geometry cluster at mobile, 320px, and 200%: residual desktop percentage
widths constrain the `<dl>`-style manifest after mobile stacking, a fixed label
track leaves atomic artifacts and destinations in destructive vertical
fragments, and the compact recipient-verification control competes with its
label. The 320px screenshot confirms these failures directly.

This is a valid unseen repair holdout. It is neither a native table nor a
per-item card surface, contains no injected break opportunity or single-text
scroller, and was created only after v5 was committed. Next, pin exact v5 from
`c615067` and compare it with exact previous canonical in a fresh 2 arms × 3
trials root with task, prompt, starter, DESIGN, runtime, model, effort, timeout,
and activation held equal.
