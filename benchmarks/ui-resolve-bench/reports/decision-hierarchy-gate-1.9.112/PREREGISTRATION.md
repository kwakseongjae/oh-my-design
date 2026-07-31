# Marker-backed decision hierarchy gate — 1.9.112

Status: **ACCEPTED provider-free evaluator capability**.

## Purpose

The 1.9.110 owner review showed that interaction correctness and viewport
containment do not guarantee a legible irreversible-decision boundary. This
contract measures hierarchy only when a future task declares five stable
semantic roles. It does not infer quality from a generic card, a fashionable
layout, or a model-authored class name.

## Opt-in roles

1. context container;
2. selected target;
3. supplied evidence;
4. current state or blocker;
5. final action.

The task owns the selectors, viewports, and minimum action gap before
generation. Every role must resolve exactly once.

## Checks

- every role exists exactly once and is visible;
- target, evidence, state, and action are descendants of the context container;
- target precedes evidence and state in DOM reading order;
- action follows all three context roles in DOM reading order;
- target has at least a 2px size advantage or 100 numeric-weight advantage over
  evidence;
- state differs from evidence in at least one bounded channel: weight, color,
  background, or border color;
- action is spatially separated from every context role by the registered
  horizontal or vertical gap.

The checks join the existing viewport-geometry critical gate. They add no
points and do not change score schema `0.5` or the 85-point maximum.

## Acceptance

- complete marker-backed hierarchy: 7/7 pass;
- flat target/state plus reordered/overlapping action: the four corresponding
  checks fail;
- missing role: exact-role check fails;
- legacy tasks without the oracle: unchanged;
- focused evaluator tests: 17/17 green;
- TypeScript: green;
- provider calls: zero.

## Boundary

The markers are measurement handles, not proof by themselves. Styling all five
markers identically still fails. The gate does not require a card, warning
banner, icon, risk score, color choice, or newly invented fact.

