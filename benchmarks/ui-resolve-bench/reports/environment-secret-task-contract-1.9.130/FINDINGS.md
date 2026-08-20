# Environment-secret mapping holdout — findings

Status: **ACCEPTED; provider generation has not started**.

`environment-secret-mapping-v0.1` was contract-locked after the reflow v3
candidate commit and before any provider run. It uses the existing
`onboarding-v1` interaction adapter in a new release-configuration domain:
three environment choices, one reversible toggle, an invalid/valid mapping
label journey, three supplied atomic identifiers, and one visible decision
boundary.

The untouched starter scores 79/85. Task contract, all three state journeys,
accessibility, DESIGN grounding, evidence honesty, overflow, clipping,
overlap, and decision hierarchy are green. The only critical failure is the
intended text-geometry cluster at mobile, 320px, and 200%: desktop
`td:nth-child` widths survive the mobile stack and squeeze atomic identifiers
into destructive vertical fragments. The 320px screenshot confirms the
failure directly.

This is a valid repair holdout, not an already-polished ceiling and not a
fixture with broken functionality. It contains no injected `<wbr>` and the
prompt explicitly forbids inserted break opportunities. Next, compare exact
previous canonical and exact reflow v3 in a fresh 2 arms × 3 trials root with
the task, prompt, starter, DESIGN, runtime, model, effort, timeout, and
activation held equal.
