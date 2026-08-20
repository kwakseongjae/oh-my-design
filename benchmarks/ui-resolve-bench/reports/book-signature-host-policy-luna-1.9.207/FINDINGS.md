# Book signature host-policy comparison — 1.9.207

## Verdict: execution-invalid, frozen

The first controller-observation cell completed validly at 79/85 with a compliant proof trace. Before the second cell reached the provider, checkpoint resume rejected the newly added `host_policy` preparation attestation because the legacy validator still required exactly two attestation keys.

This is a controller implementation defect, not a model, task, policy, or provider result. `/tmp/u19207` is frozen after one completed cell and must not be resumed. The isolated 79/85 result is retained for audit but is not included in the 2×3 comparison denominator.

## Preserved first-cell evidence

- Cell: `luna-book-r1-controller`
- Validity: valid
- Deterministic score: 79/85
- UI-Resolved: false
- Proof trace: analyzable and compliant
- Browser recovery / duplicate static / after-ready: 0 / 0 / 0
- Wall time: 298,349 ms
- Reported tokens: 525,885

## Replacement rule

The validator must accept and structurally validate the third `host_policy` attestation key. After a focused regression test and clean commit, the exact same frozen contract may be registered under a new experiment ID and fresh output root. No same-root retry, result repair, or first-cell reuse is allowed.
