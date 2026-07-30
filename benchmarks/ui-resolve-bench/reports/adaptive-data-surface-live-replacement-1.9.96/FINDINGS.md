# Adaptive data-surface live replacement — 1.9.96 findings

Status: **COMPLETE; deterministic plane tied**.

## Result

The fresh pricing denominator completed all six cells without provider,
infrastructure, attribution, evaluator, pacing, retry, repair, fallback, or
substitution failure.

| Arm | Exact source | UI-Resolved | Reliability@3 | Objective |
|---|---|---:|---:|---:|
| slate | 1.9.78 `c285d255…` | 3/3 | 100% | 85/85 × 3 |
| ember | 1.9.95 `7364cbd…` | 3/3 | 100% | 85/85 × 3 |

Candidate paired W/T/L is `0/3/0`. Resolved lift and objective lift are both
zero.

## Adaptive regression outcome

Every cell passed:

- desktop, 390px, 320px, and 200% zoom/reflow horizontal-overflow checks;
- clipped-control and control-overlap checks;
- keyboard traversal, focus-visible, and focused-control-in-view checks at all
  four viewports;
- serious/critical axe, named-control, labelled-input, and evidence/unknown
  gates.

The 1.9.94 failures therefore did not recur in this fresh denominator.
However, the 1.9.78 arm also reached Reliability@3. The improvement cannot be
causally assigned to the 1.9.95 closure from these three stochastic repeats.

## Compute

- all cells: 1,266,530 observed tokens; 1,875,636 ms cell wall time;
- slate: 669,114 tokens; 966,395 ms;
- ember: 597,416 tokens; 909,241 ms;
- ember median tokens: 70,212 versus slate 190,077;
- ember median wall time: 244,175 ms versus slate 320,241 ms.

Latency remains descriptive-only. Token distributions are wide, and this
single-task three-repeat result does not establish an efficiency advantage.

## Operational integrity

- six one-cell controller invocations completed in the locked order;
- all five inter-cell monotonic intervals were 120.001–120.006 seconds;
- Cursor project-cache preflight passed before every invocation;
- public model attribution remains ineligible under the Internal registered
  display-name scope;
- `/tmp/u1996` is complete and immutable.

## Decision

Retain the provider-free 1.9.95 closure because it introduced no deterministic
regression and its target failures were absent. Do not claim deterministic
superiority over 1.9.78.

All three exact pairs are eligible for the preregistered anonymous visual
review plane. Automated judgments remain calibration/triage evidence and do
not count as practitioners or public model evidence.

