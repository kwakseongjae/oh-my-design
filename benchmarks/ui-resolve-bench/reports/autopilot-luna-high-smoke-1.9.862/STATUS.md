# Autopilot Luna/high smoke 1.9.862 — complete

- Source commit: `3706003cd9de18ee3034cbaf5b9029fcb5ca089d`
- Locked plan SHA-256: `d0fc37ad1b1fa7beb9d7e05e6262dcd6660bee3770270771a62211552f393888`
- Runtime: exact `gpt-5.6-luna/high`, three serial cells
- Retry / replacement / fallback / model substitution / effort substitution: `0`
- Bounded same-mission repair calls: maximum `2` after the initial call
- Provider / model / Cursor calls during preregistration: `0 / 0 / 0`

This fresh diagnostic epoch is bound to the committed evaluator phrase
classification repair. It does not reuse any 1.9.861 workspace, product,
score, state, or model output. No public one-shot or superiority claim is
authorized, and every valid terminal failure remains in the denominator.

## Result

- Execution state: `complete`; three of three cells are valid terminal results.
- UI-Resolved: `0 / 3`; project-owned DESIGN.md proof: `3 / 3`.
- User-question artifacts: `0` across all three cells.
- Attempt scores:
  - neighborhood library landing: `10` — FAIL
  - cold-chain operations: `40` — FAIL
  - five-locale clinic prep: `20 → 40 → 40` — FAIL
- Model calls: `5`, including `2` bounded controller repair calls.
- Wall time across all attempts: `3,065,460 ms`.
- Observed token usage: `10,758,648` input, `9,968,896` cached input,
  `142,229` output; input plus output `10,900,877`.

All three generated a valid project-owned design system without asking the
user. The surfaces are visually strong, but visual polish did not substitute
for observable journey and accessibility correctness.

Landing and cold-chain each consumed two local proof-repair rounds inside the
initial provider turn and ended in `FAILED_HANDOFF`. Because the mission was
already terminal, the host controller correctly made no replacement call.
This exposed a sequencing problem: when a controller-verification policy is
installed, local proof should yield to the objective controller before any
repair budget is consumed, whether the local proof says pass or fail.

Locale followed that path correctly. It reached `EXTERNAL_VERIFY`, received
two hash-bound repair rounds, and improved locale switching and persistent
completion. It still lacks a user-reachable unavailable-translation state and
retains accessibility failures.

Read-only in-app inspection also found one evaluator false negative. The final
locale UI uses an accessible custom checkbox (`role=checkbox` plus
`aria-checked`) and visibly updates its progressbar and status. The sealed
evaluator counted only the native `.checked` property, so
`progress_textual_and_persistent` remained false. The sealed run record is not
rewritten; this finding is diagnostic and must be fixed and recalibrated before
another fresh epoch.

A provider-free read-only recheck with the patched evaluator produced SHA-256
`1b4a83a09dc3643504baf543f7e94869ff388245ab88c0fbb8c3f962b122fb37`.
It correctly changed `progress_textual_and_persistent` to `true`. The diagnostic
score remained `40` because the journey group still fails on the missing
unavailable-translation path, and accessibility still fails. This diagnostic
does not alter or replace the sealed benchmark record.

The next patch therefore changes no marketing claim. It will make external
verification precede local repair consumption under the controller policy,
measure native and ARIA checkbox state equivalently, run the provider-free
oracle/mutant suite, and only then preregister a fresh root.
