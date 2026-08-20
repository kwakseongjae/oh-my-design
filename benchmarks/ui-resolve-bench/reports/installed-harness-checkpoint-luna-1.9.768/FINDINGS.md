# Findings — progressive-disclosure repeat 1.9.768

## Compliance

The exact checkpoint gate remained 3/3. Ready, product-authority interview, and
external-evidence blocker outcomes all matched the preregistered oracle.
Unauthorized writes, timeout, retry, replacement, and Cursor calls were zero.

## Descriptive cost comparison

Initial harness bytes fell 38.05%, while aggregate input tokens fell only 8.09%
(457,473 → 420,483). Cached input fell 1.58%, reasoning output fell 10.34%, output
rose 0.82%, and summed wall time rose 14.29%.

Per-case variance was large: the ready case fell from 249,300 to 117,842 input
tokens, the interview case rose from 91,650 to 186,237, and the blocked case was
nearly flat. Task replay, provider caching, and model/runtime variance prevent a
causal efficiency claim from this single repeat.

## Next implication

The refactor preserved behavior and reduced the initial skill file, but the
37KB master role remains always exposed in this canary. The next bounded change
is to keep authority/handoff invariants in a thin master kernel and load phase
implementation details only for the active state. It must pass provider-zero
install/doctor/state-machine contracts before another live repeat.

No UI quality, ranking, superiority, or 2.0 readiness claim is supported here.
