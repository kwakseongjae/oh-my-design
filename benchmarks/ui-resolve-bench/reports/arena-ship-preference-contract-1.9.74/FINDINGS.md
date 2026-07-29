# Arena-style Ship Preference contract — 1.9.74 findings

Status: **accepted, provider-free**.

## What changed

The existing blind gallery now records four separate judgments for every pair:

1. **Functionality** — visible task fulfillment and necessary product states;
2. **Usability** — hierarchy, scanning, and next-action clarity;
3. **Fidelity** — coherence with the supplied product and design context;
4. **Ship Preference** — the overall result a practitioner would ship.

Each axis allows A, B, tie, or both fail, and every axis is required before the
browser exports a local judgment file.

## Correctness remains upstream

Only completed artifacts with `automated_gate_pass=true` enter pairwise review.
This prevents attractive but behaviorally broken, inaccessible, or dishonest
artifacts from gaining standing through human taste. Pairwise preference
remains a separate plane and does not change deterministic scores.

The calibration supplied three eligible and one ineligible artifact. The
gallery created three base pairs plus one hidden reversed duplicate from only
the three eligible artifacts and reported the excluded count without revealing
its identity.

## Epoch and blindness

Schema `0.2` requires an opaque methodology epoch. Assignment IDs, candidate
IDs, reviewer hashes, side order, and final order bind that epoch:

- same salt, reviewer, and epoch reproduces the same assignment;
- changing the reviewer changes the order;
- changing the epoch produces a new assignment identity.

Reviewer-visible files and HTML contain no variant labels, automatic scores,
gate results, or reversal markers. The external reveal map retains candidate
identity and reversal linkage and is still rejected if placed inside the
gallery.

## Validation

- focused gallery and evaluator tests: 18/18;
- TypeScript, build, Node syntax, and diff checks: pass;
- provider generation: zero.

## What is deliberately not claimed

This patch defines valid data collection. It does not yet calculate a rating,
confidence interval, practitioner agreement, order bias, or winner. Those
statistics require multiple locked reviewer exports and belong to the next
provider-free aggregation patch.
