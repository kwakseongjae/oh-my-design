# Geometry target-role contract — 1.9.73

Status: **ACCEPTED; provider-free**.

## Frontier gate and bounded hypothesis

The complete 1.9.72 Grok matrix retained exact DESIGN.md geometry in both
conditions, but incident trial 3 scored the card radius as `0px` for Raw and
OmD. Both outputs placed the generic `data-dashboard-card` marker on a square
inner incident panel while rendering the declared `14px` radius on the outer
main console.

The bounded hypothesis is that an explicit, protected
`data-bench-design-role="main-console"` contract will identify the intended
measurement surface without relaxing the `14px` oracle or searching the DOM
for a conveniently matching radius.

## Frozen denominator

- product experiment `1.9.73`;
- task `incident-operations-v0.1`;
- previous task version `0.3.0`;
- evaluator schema `0.5`;
- score weights, radius tolerance, viewports, journey, accessibility, evidence,
  and all other task oracles unchanged;
- provider generation zero;
- historical 1.9.66–1.9.72 artifacts and scores immutable.

The only permitted task delta is:

1. bump the task contract to `0.4.0`;
2. replace ambiguous `data-dashboard-card` with exactly one protected
   `data-bench-design-role="main-console"` marker;
3. state that the marker follows the overall console role if markup is
   reorganized and must not be copied onto a subordinate panel;
4. use that exact role selector for the existing card-radius observation;
5. extract the existing design checks into a pure helper only if scoring and
   tolerance remain byte-for-byte equivalent.

The canonical `omd-apply` skill, DESIGN.md, model/runtime controls, benchmark
score thresholds, and historical run records may not change.

## Acceptance

Pass only when:

- the starter contains exactly one visible main-console marker and it computes
  to the existing `14px` contract;
- the task protects exactly one marker at every viewport;
- the prompt explicitly preserves and relocates the role marker with the
  overall console role;
- a `14px` main-console observation passes the unchanged design oracle;
- a marker on a `0px` subordinate panel fails `card_radius`;
- missing or duplicate main-console markers fail protected-hook exactness;
- task, evaluator-hardening, preparation, lint, build, syntax, and diff checks
  pass;
- no provider or historical artifact is executed or re-evaluated.

## Decision and next queue

Acceptance closes only the benchmark target-role ambiguity. It does not repair
or upgrade any historical score and it is not Skill Lift evidence.

After acceptance, the next fresh provider matrix must use task version `0.4.0`
and a new denominator. Separately, the Arena-inspired blind Ship Preference
plane may be calibrated without changing deterministic correctness gates.
