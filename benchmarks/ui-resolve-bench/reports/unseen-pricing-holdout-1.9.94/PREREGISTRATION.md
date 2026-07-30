# Unseen pricing holdout — 1.9.94

Status: **LOCKED; fresh preparation complete, provider calls 0**.

## Purpose

Test whether the retained 1.9.78 visual-equity patch generalizes to an unseen
task and establish a first holdout for automated-judge calibration. The three
1.9.85 task families are calibration-only and may not be rescored.

## Frozen denominator

- task: pricing conversion `0.3.0`, absent from the 1.9.85 live matrix;
- opaque exact arms at detached commits `1aa81ddb…` and `c285d255…`;
- two arms × three trials = six cells;
- alternating arm-first order across trials;
- Cursor/Grok 4.5 High, runtime effort High;
- 900-second timeout, global concurrency 1, 120-second inter-cell pacing;
- one controller invocation may add at most one cell;
- no retry, repair, fallback, failed-cell replacement, or model substitution;
- Internal registered-display-name attribution only; no public model row.

## Review ladder

1. All six cells must pass deterministic, behavioral, accessibility, evidence,
   and product-diff eligibility.
2. Existing automated judge rubric receives anonymous exact pairs with three
   judges and isolated side reversal.
3. The practitioner sees only unresolved pairs plus one bounded audit sample.
4. Automated modal agreement is measured against the practitioner without
   changing the rubric on this denominator.

## Stop conditions

Freeze the fresh root at the first preparation, cache, registry, provider,
timeout, pacing, product-diff, evaluator, export, or attribution failure.
Never resume or fill a frozen root with another model.
