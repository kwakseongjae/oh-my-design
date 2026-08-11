# Autopilot Luna/high smoke 1.9.863 — frozen diagnostic

- Source commit: `77789f516bd434072f2bcbbdbaf0012c4d70c4ba`
- Locked plan SHA-256: `18babf5b93a549ae49234711550500a18ed075c9ea0873a2d79a1c74d9b8ab08`
- Runtime: exact `gpt-5.6-luna/high`, serial, maximum one scheduled cell per invocation
- Retry / replacement / fallback / model substitution / effort substitution / Cursor: `0`
- Root state: `stopped-preregistered`; it is permanently non-reusable

## Result

The objective-first state-machine change worked. Landing and cold-chain both
reached the controller evaluator immediately after the initial product build,
received exact hash-bound failure evidence, and consumed at most two bounded
same-mission repair calls.

The quality target was not met:

- landing: `30 → 80 → 50`, valid terminal failure;
- cold-chain: `20 → 40 → 40`, valid terminal failure;
- five-locale clinic prep: provider completed, then the controller evaluator
  stopped without a score.

The landing regression from 80 to 50 is important evidence. The second repair
fixed contrast but removed the previously observable reservation-start state.
The controller currently reports the failing assertions but does not protect
already-passing assertions as explicit invariants in the next repair prompt.

Cold-chain improved accessibility and owner-error behavior, but its second
repair did not improve the remaining queue/filter/persistence/responsive
contract. Its evaluator observations and repair instructions still disagree
about the exact user-observable state expected after filtering and assignment.

The third cell exposed a controller bug rather than a model failure. The
generated native checkbox was keyboard-operable, but Playwright `.check()`
forced a pointer click that the visible checklist wrapper intercepted. The
evaluator timed out instead of writing a failed score, so the root correctly
froze. A provider-free re-evaluation after replacing the pointer action with
`focus + Space` wrote a normal score (`30`) with SHA-256
`cee20b70d7c0875e38bd045af4e05d4b8def0fdfc5822f92f3b7d4585848d694`.
That diagnostic does not replace the sealed missing score.

All three provider outputs produced a valid project-owned DESIGN.md proof and
no user-question artifact. Observed across seven provider calls: `9,454,296`
input tokens, `8,799,488` cached input tokens, `130,978` output tokens, and
`2,697,294 ms` provider wall time. Public one-shot and superiority claims
remain blocked.

## Next patch

1. Preserve every currently passing assertion as a repair invariant so a
   focused repair cannot silently regress an earlier success.
2. Align cold-chain repair observations with the role/state evaluator contract
   and calibrate them against both valid oracles and isolated mutants.
3. Keep locale checkbox activation keyboard-first and add a regression for a
   native checkbox whose visual wrapper intercepts pointer events.
4. Run provider-free gates, commit the evaluator/controller authority, then
   preregister a fresh root. Never resume or reinterpret 1.9.863.
