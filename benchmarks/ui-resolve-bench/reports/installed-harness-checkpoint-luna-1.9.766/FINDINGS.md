# Findings — installed harness checkpoint Luna/high 1.9.766

## Result

The exact gate passed 3/3. Luna preserved the deterministic OmD boundary:

- Existing-surface preservation proceeded without reopening product decisions.
- User-answerable pricing retained exactly the four registered interview ids.
- Missing official brand evidence halted without being disguised as an
  interview or plan.

All invocations exited cleanly. Unauthorized writes, timeout, retry,
replacement, and Cursor calls were zero.

## Cost observation

The three calls consumed 457,473 input tokens (355,840 cached), 3,924 output
tokens, and 1,508 reasoning tokens. Summed wall time was 107,962ms. The first
ready case alone consumed 249,300 input tokens because the canary exposed the
full harness and master contracts.

This is a context-efficiency warning, not a quality failure. The next patch
should move phase-specific detail behind progressive disclosure and repeat the
same exact checkpoint oracle before making any broader efficiency claim.

## Claim boundary

This result supports checkpoint authority compliance for these three
Luna/high cases. It does not establish UI quality, user outcome, model ranking,
general skill superiority, or 2.0 readiness.
