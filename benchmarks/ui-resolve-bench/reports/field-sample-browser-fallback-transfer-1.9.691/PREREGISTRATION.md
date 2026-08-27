# Field-sample browser fallback transfer — 1.9.691

## Question

Does exact `omd:apply` at commit `5d3a069` continue a bounded source-backed repair when browser infrastructure is unavailable, without asking the user to grant permissions or resume the run?

## Frozen comparison

- Task: `field-sample-custody-review-v0.1`
- Runtime/model/effort: Codex / `gpt-5.6-luna` / `high`
- Arms: Raw DESIGN.md and exact current `omd:apply`
- Trials: three matched pairs, balanced arm order
- Timeout: 900 seconds per cell; no retries
- Pacing: fixed 120 seconds between cells; serial execution
- Objective epoch: locked by the prepared matrix
- Skill source: commit `5d3a069`, expected SHA-256 `6a48a96fe794255e547e9673a909f3ae7e618d835048e28476fb65371c4f81ee`

## Acceptance

The browser fallback repair is successful only if all OmD trials avoid unplanned user-intervention requests, make a product edit when the supplied source is sufficient, and report browser proof separately from any deterministic static closure. The Verified Skill Lift gate additionally requires reliable objective resolution and its existing statistical acceptance rules; a clean fallback alone does not promote the gate.

## Claim boundary

This is a public-task transfer diagnostic. It is not hidden-task evidence, an independent audit, practitioner preference, production reuse, or a public cross-model superiority claim.
