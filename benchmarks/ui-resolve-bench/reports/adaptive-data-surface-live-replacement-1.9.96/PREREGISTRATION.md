# Adaptive data-surface live replacement — 1.9.96

Status: **LOCKED; provider calls 0**.

## Purpose

Determine whether the accepted 1.9.95 adaptive-data-surface closure fixes the
responsive overflow and keyboard-focus failures observed on the unseen pricing
holdout without changing the model, task, starter, evaluator, or activation
path.

## Frozen denominator

- task: pricing conversion `0.3.0`;
- opaque control: exact detached 1.9.78 source
  `c285d25515ec8959e66ceeb7703417aad531cd95`;
- opaque candidate: exact detached 1.9.95 source
  `7364cbde3b58733c9e732fb75c179d6f37cd4c5b`;
- same declared `omd:apply` skill and activation in both arms;
- two arms × three trials = six fresh cells;
- alternating arm-first order across trials;
- Cursor/Grok 4.5 High, runtime effort High;
- 900-second timeout, global concurrency 1, 120-second inter-cell pacing;
- one controller invocation may add at most one cell;
- no retry, repair, fallback, failed-cell replacement, or model substitution;
- Internal registered-display-name attribution only; no public model row.

## Primary outcomes

1. UI-Resolved rate and paired objective score.
2. Adaptive-regression gates:
   - outer document horizontal overflow at 390px and 320px;
   - clipped comparison/data content;
   - scroll-region keyboard reachability;
   - measurable focus-visible paint at 320px / 200% zoom;
   - unnecessary region tab stops.
3. Reliability@3 for each exact arm.

## Review ladder

Only exact pairs where both cells pass deterministic, behavioral,
accessibility, evidence, unknown, and product-diff eligibility may enter
anonymous visual review. If any pair is ineligible, it remains a denominator
result and is not repaired or replaced.

## Decision boundary

The patch may advance only if it raises resolved outcomes without introducing
new deterministic critical failures. Descriptive score lift alone is
insufficient. Three trials are diagnostic and do not establish general
superiority.

## Stop conditions

- Freeze the fresh root at the first preparation, provider, timeout, pacing,
  evaluator, export, attribution, or infrastructure/process failure.
- Keep valid quality failures in the denominator.
- Never resume, mutate, or rescore `/tmp/u1994`.
- Do not run a provider until exact-source preparation and focused tests are
  green and committed.

