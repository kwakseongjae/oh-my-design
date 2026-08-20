# Opt-in text-geometry gate — 1.9.111

Status: **ACCEPTED provider-free evaluator capability**.

## Training evidence

The 1.9.110 owner review identified a deterministic false positive: six
artifacts passed overflow, clipping, overlap, target, accessibility, and state
checks, yet every trial was rejected for Fidelity and Ship Preference because
short metadata and controls fragmented and the decision context flattened.

The seen `/tmp/u19108` root remains immutable. It is not rescored and does not
enter a new denominator.

## Contract

- task authors must explicitly register viewports and dense-data scopes;
- historical tasks without the oracle retain their exact score contract;
- scoped mid-token splits fail;
- scoped atomic text of at most the registered character budget fails when it
  exceeds the registered line budget;
- scoped short control labels obey the same line budget;
- generated label content with a measurable declared box must fit that box;
- a missing registered scope fails closed;
- paragraph and headline wrapping outside registered scopes is not judged;
- no aesthetic, brand, or hierarchy preference is inferred from these signals.

The checks extend the existing viewport-geometry critical gate. They do not add
points, change the 85-point maximum, or change score schema `0.5`.

## Acceptance

- pure good observation: all seven geometry checks pass;
- adversarial observation matching the observed failure modes: the four new
  text checks fail while overflow, clipping, and overlap remain green;
- missing registered scope fails closed;
- legacy observation without an oracle remains the original three checks;
- focused evaluator and owner-intake tests: 18/18 green;
- TypeScript: green;
- provider calls: zero.

## Boundary

This patch closes severe text-geometry blindness only. Decision-context
hierarchy remains a separate contract: it must use a new marker-backed fixture
and may not be claimed from font size or color heuristics alone.

