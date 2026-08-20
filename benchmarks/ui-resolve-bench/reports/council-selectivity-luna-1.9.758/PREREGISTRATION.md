# Council selectivity — Luna/high 1.9.758

## Question

Can a bounded advisory council defer three questions whose answers are already constrained by repository evidence while retaining one mandatory pricing-authority question?

## Locked denominator

The single mixed case begins with four interview decisions:

- `primary-audience` — expected to become `defer` because the existing audience is documented;
- `exit-scope` — expected to become `defer` because the existing page boundary is documented;
- `primary-cta` — expected to become `defer` because the existing Contact sales contract is documented;
- `regulated-commitment` — must remain `interview` because no annual-pricing authority exists.

## Locked runtime and limits

- Runtime: Codex native only
- Model: `gpt-5.6-luna`
- Effort: `high`
- Selected lanes: exactly two at most
- Retry budget: zero
- Cursor calls: zero
- Product writes: zero
- Allowed lane output: one declared JSON artifact
- Context contract: compact decision packet plus product brief, ledger, and dispatch plan

## Acceptance

The selectivity gate passes only when all three expected deferrals occur and the mandatory pricing interview remains. Any automatic promotion, mandatory-question loss, undeclared write, invalid artifact, timeout, or Cursor call fails the run.

The run reports input tokens per correctly deferred question. A single case cannot establish general council superiority or UI-output lift.

## Frozen inputs

- Fixture SHA-256: `f4488c248733d9896a8533a491ea7d96b0cc6fdd6484e9d5bb59a7353201fbc9`
- Runner SHA-256: `dd8245a5fe39fd9f9951d3c36d7a8ffa5a0607618bda1f1e5c3c236e40dfcdb6`

