# Proof-policy recovery guidance — 1.9.211

Status: **provider-free bounded delta complete**  
Provider calls: **0**

## Why this delta exists

The 1.9.210 installed-policy comparison proved that the host policy blocks prohibited verification calls: all three policy trials had a valid installed state, were proof-compliant, and recorded zero unblocked violations. It did not improve the product result, however. Two of three policy trials failed to recover from a denial and never completed browser proof. The policy enforced the boundary but did not explain the legal transition out of the denied state.

## Change

Enforcement semantics and state transitions are unchanged. Denial payloads now add one state-specific next action:

| Denial reason | Recovery guidance |
| --- | --- |
| `static-closure-required` | Run exactly one static verification command, then one browser proof. |
| `duplicate-static-closure` | Do not retry static verification; run one browser proof if it is still open, otherwise stop tool use and deliver. |
| `verification-after-ready` | Stop tool use and deliver the result. |

The guidance is emitted by the shared hook mapper, so installed Claude Code and Codex policy files receive the same contract. It neither converts a denial to an allow nor weakens fail-closed behavior.

## Verification

- Focused proof-policy state/hook/runtime suite: **22/22 green**.
- Full UI Resolve bench suite: **61/63 green**. The two failures are the known local environment precondition: external `taste-skill` and `ui-ux-pro-max` vendor directories are not Git repositories. The production managed-renderer parity check passed.
- Type-check: **green**.
- Build: **green**.
- npm package dry-run using an isolated cache: **green**, 545 files. The package includes `proof-policy-hook.mjs`, `proof-policy-hook-mapper.mjs`, and `proof-policy-state.mjs`.

## Decision

Keep installed proof policy opt-in. This change is eligible for a real-host recovery smoke, not broader promotion. The next check must deliberately attempt browser proof before static closure and confirm that the model follows the denial guidance through exactly one static verification and one browser proof, with zero unblocked violations. A scored comparison comes only after that smoke, on a new unseen task rather than the 1.9.210 book task.
