# 1.9.79 Preparation Amendment

## Trigger

The canonical 1.9.78 skill was accepted at
`c285d25515ec8959e66ceeb7703417aad531cd95`. Committing the 1.9.79
preregistration then advanced repository HEAD to `8a3e2f0` without changing the
skill bytes. Preparing the candidate through the mutable current-repository
variant would therefore report the later metadata commit rather than the
preregistered skill commit.

## Correction

Use two identity-neutral versioned competitor entries and two clean detached
vendor checkouts:

- historical control:
  `1aa81ddb1aa15defbd12b4af36b4dd6784131c9f`
- visual-equity candidate:
  `c285d25515ec8959e66ceeb7703417aad531cd95`

Both entries must keep the same user-visible label, declared skill name,
activation, install adapter, eligible tracks, and prompt. Only internal
variant IDs, exact source commits, and skill hashes may differ.

This adds a second versioned competitor entry to the allowed implementation
surface. It does not change task, provider, model, trial, score, evaluator,
timeout, pacing, retry, fallback, activation, or benchmark denominator.

Provider execution remains closed until both detached variants pass
provider-free provenance and leak tests.

