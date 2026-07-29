# Automated blind review contract — 1.9.86 findings

Status: **accepted, provider-free preparation**.

## What closed

The complete 1.9.85 matrix can now enter visual review without treating its
three repeated trials as six unrelated candidates. The preparer groups only
same-task, same-trial cells and requires exactly two distinct eligible arms.

For every exact pair it creates three opaque judge units. Each unit has two
separate packet directories: one randomized A/B order and one reversed order.
The judge-visible packet contains only a neutral task brief, four anonymous
screenshots, a four-axis rubric, and a strict JSON response contract. Skill
identity, commits, objective scores, source workspace paths, and reversal
linkage stay in the private reveal/manifest plane.

## Real preparation proof

`/tmp/u1986` was prepared from the immutable complete state hash
`0537faae…`:

- 9 exact task×trial pairs;
- 3 automated judge identities;
- 27 review units;
- 54 isolated invocations;
- 216 copied screenshots;
- zero public hits for the opaque arm names, installed skill id, visual-equity
  label, exact arm commits, automatic gate label, or reversal metadata.

No provider was invoked during this acceptance.

## Validation

- automated review + existing reviewer operations focused tests: 6/6;
- Node syntax, TypeScript, and production build: pass;
- collision, incomplete-state, missing-workspace, duplicate-judge, overwrite,
  and public/private nesting protections: covered;
- provider generation: zero.

## Claim boundary

This proves review-packet correctness, not a preference result. Automated
judges do not count as practitioners. The next patch must run each invocation
fail-closed, validate exact JSON without repair, normalize identity through the
private reveal, and emit only disagreement/reversal/tie/both-fail plus a fixed
audit sample for later human review.
