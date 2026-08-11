# Autopilot Luna/high smoke 1.9.857 — complete, 2.0 gate failed

- Source commit: `6db8a26bdbdd02365afea2d0952080306e72dd3c`
- Locked plan SHA-256: `a61bfe7c4a622f6bda5f04093f4b6b4c423563340904557e70226a798b4013c0`
- Execution-state SHA-256: `34c659eec4d3cb45db3b5e9998b971a11ed70c5d01d234c7bd67cf27817d4654`
- Named in-app browser receipt SHA-256: `d6084438148b239ddf88c5802b6640720fa56e21900b5a4793fc349fc7dbe6c8`
- Runtime: exact `gpt-5.6-luna/high`, three serial cells, one provider invocation per cell
- Retry / replacement / fallback / model substitution / effort substitution: `0`
- Terminal valid cells: `3/3`; UI-Resolved: `0/3`
- DESIGN.md system proof: `3/3`; terminal autopilot proof: `1/3`
- Scores: landing `30`, cold-chain `20`, five-locale `10` (mean/median `20`)
- Observed wall time: `1,975,958 ms`
- Observed input + output tokens: `7,276,794` (`6,776,064` cached input)

The diagnostic gate failed. This epoch is complete and non-resumable. Results
must remain in the denominator and must not be retried, replaced, repaired in
place, or promoted to a public one-shot claim.

The common architecture defect is now explicit: the provider attempted local
browser verification inside its isolated workspace, recorded browser-dependent
checks as failed, and two cells stopped in `BOUNDED_REVISION` without applying
the permitted same-mission repair. The controller evaluated the real route only
after the provider turn ended, so its objective findings could not guide that
turn's bounded repair. The next version must close this loop with
controller-owned evaluation feedback and hash-bound same-mission repair rounds;
it must keep model-call, wall-time, and token cost visible.

Generated UI defects remain real and separate from that controller gap:

- landing: no unique operable reservation transition/focus transfer, contrast
  failures, and unresolved availability represented dishonestly;
- cold-chain: task identity/urgency dataset mismatch, incomplete filter/detail
  journey, missing owner validation/options, undersized controls, and a11y
  failures;
- five-locale: missing fictional/non-medical context, progress persistence and
  unavailable-translation honesty failures, undersized controls, and 320px
  a11y failures.

This is diagnostic evidence only. The 12-task competitor qualification remains
blocked until a fresh bounded-repair smoke passes its preregistered gate.
