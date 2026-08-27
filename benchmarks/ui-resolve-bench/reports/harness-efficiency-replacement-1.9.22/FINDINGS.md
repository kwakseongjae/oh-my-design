# Harness efficiency replacement — 1.9.22 findings

Executed once on 2026-07-23 under the frozen preregistration. All 18 fresh
cells in `/tmp/u1922` completed without retry, resume, or unplanned
intervention.

## Disposition

Promote the bounded repair-harness contract and mark 1.9.22 calibration
complete.

- 18 scheduled / 18 attempted / 18 valid completed
- exact `claude-opus-4-8` / xhigh attribution for every cell
- candidate specialist attribution 18/18 calls, Agent errors 0
- candidate first product write 153,174–290,669ms, below the 450,000ms gate
- candidate last advisory → first product write 3,613–23,691ms, below the
  90,000ms gate
- candidate first transaction targeted non-no-op `Edit` 9/9
- candidate Evidence & Unknown 9/9
- candidate serious/critical axe violations 0 across four viewports
- authored verification programs and replacement verifiers 0
- infrastructure, sandbox, and cwd failures 0
- only `index.html` changed in every cell

The candidate passes every preregistered promotion gate. This promotes the
internal repair-harness process contract to the next release lanes; it does not
establish a public best-skill, frontier, model, or global-rank claim.

## Quality and reliability

| metric | portable | repair harness |
|---|---:|---:|
| valid cells | 9/9 | 9/9 |
| UI-Resolved | 5/9 (55.6%) | 8/9 (88.9%) |
| mean objective score | 79.89/85 | 83.67/85 |
| median objective score | 83/85 | 85/85 |
| Evidence & Unknown | 9/9 | 9/9 |
| overall Reliability@3 tasks | 1/3 | 2/3 |

Paired objective outcomes are 4 harness wins / 4 ties / 1 loss. Mean objective
lift is +4.44 percentage points and UI-Resolved lift is +33.33 points. The
hierarchical 95% interval for resolved lift is -22.22 to +100.00 points, so this
small internal calibration is not a public superiority estimate.

Task-level Reliability@3 has no candidate loss:

| task | portable | repair harness | result |
|---|---:|---:|---|
| Pricing | 0/3 | 3/3 | candidate win |
| Onboarding | 3/3 | 3/3 | tie |
| Incident Operations | 2/3 | 2/3 | tie |

Pricing is the clearest harness effect. The three paired scores are
68→85, 70→85, and 83→85. Onboarding is a stable 85/85 tie in all three
trials. Incident Operations is more variable: 85→85, 77→81, and 81→77.

The only candidate loss is `operations-t3-harness`. It preserved the protected
task contract, interactions, responsive geometry, keyboard traversal,
accessibility, and evidence ledger, but missed two grounded design checks:

- the primary action computed transparent instead of the declared action role;
- the incident card computed `0px` instead of the declared `14px` radius.

Portable also missed the Operations primary-action check in all three trials.
The card-radius miss moved between systems across trials, producing equal
Operations Reliability@3 rather than a candidate task loss.

## Efficiency and process

| metric | portable | repair harness | harness ratio |
|---|---:|---:|---:|
| median wall time | 548,196ms | 465,985ms | 0.850x |
| P90 wall time | 719,335ms | 631,743ms | 0.878x |
| median uncached tokens | 116,512 | 132,900 | 1.141x |
| P90 uncached tokens | 133,013 | 164,826 | 1.239x |

The candidate is about 15% faster at the median while using about 14% more
uncached tokens. Portable remains cheaper; the repair harness is higher-quality
and faster. Neither strictly dominates the other, and both efficiency ratios
remain inside the preregistered 1.50x wall and 1.75x token ceilings.

The delivery-budget repair is stable across all nine candidate cells:

| process metric | result |
|---|---:|
| first product write median / max | 219,497ms / 290,669ms |
| advisory → first edit median / max | 10,133ms / 23,691ms |
| specialists exactly 2/2 | 9/9 |
| targeted first Edit | 9/9 |
| first Edit non-no-op | 9/9 |
| replacement verifier authored | 0/9 |

Two candidate recoverable tool errors and four portable recoverable tool errors
were retained. None was an infrastructure, sandbox, cwd, Agent, attribution, or
delivery failure.

## Promotion meaning

1. The bounded specialist response and first-safe-edit scheduler can remain in
   the canonical repair harness.
2. Verification-authority and semantic-color safety contracts remain active.
3. Locale/evidence expansion may start at 1.9.23 without another Harness Track
   replacement matrix.
4. The Operations design-token miss becomes a named future task slice, not a
   blocker for this promotion because Reliability@3 is tied and all critical
   product gates pass.

## Reporting limits

- Internal Harness Track calibration only.
- No frontier, best-skill, model, or global-rank claim.
- The confidence interval includes zero and the task set is three families ×
  three trials.
- No retry, resume, or retroactive repair.
- Raw successes, failures, scores, and timing records remain downloadable in
  this report directory.
