# 1.9.1 paired smoke — partial findings

> Status: **incomplete and not publishable** · 16/18 scheduled runs recorded ·
> generated from the preregistered Terra/xhigh matrix on 2026-07-22.

The final two `incident-operations-v0.1 × omd-portable` trials were not started
after the external execution boundary was blocked. This report does not impute
them, compare unmatched group rates as lift, or support a superiority claim.

## What the completed evidence says

| Slice | Raw DESIGN.md | OmD portable | Interpretation |
|---|---:|---:|---|
| Completed runs | 9/9 | 7/9 | Two OmD operations trials are missing |
| UI-Resolved | 3/9 | 2/7 | Unmatched rates are descriptive only |
| Objective median | 95.3/100 | 95.3/100 | Same median |
| Reliability@3 | 0/3 tasks | 0/2 eligible tasks | No condition resolved all three trials |
| Mean token volume | 350,663 | 610,429 | Input + output; cached input is not added twice |
| Mean wall time | 342s | 340s | Similar elapsed time despite larger OmD context |

Across the seven completed matched pairs, OmD records one win, six ties, and no
losses on the all-or-nothing resolution gate. The paired objective lift has a
median of 0 points and mean of +1.34 percentage points. Mean token volume is
242,567 tokens higher per matched OmD run (+73.5%); this is context volume, not
provider billing cost, because cached input can be priced or quota-weighted
differently.

These are diagnostic observations, not a final effect estimate. The missing
pair and two evaluator specification defects below prevent publication.

## Failure taxonomy

- Pricing: five of six completed runs failed serious color contrast. The sole
  complete pass was OmD trial 3. This is a real implementation-quality signal.
- Onboarding: four of six runs failed only because the evaluator required a
  `nav` landmark. The task contract itself does not require navigation. Raw and
  OmD produced the same `80, 80, 85` sequence, so this is an evaluator-contract
  defect, not evidence of a skill difference.
- Operations: both failed first trials rendered a truthful dynamic count such
  as “4 incidents shown,” but the broad unsupported-claim regex classified it
  as marketing proof. This is another evaluator-contract defect. Raw trials 2
  and 3 passed; OmD trials 2 and 3 are missing.

## Decision

Do not publish a leaderboard row or X comparison from 1.9.1. Preserve every
artifact and use this run as the calibration input for 1.9.2.

The next patch should change one bounded variable: **task-owned semantic
contracts**. Landmark requirements move into each task manifest, and protected
unknown checks must distinguish task-derived live counts from unsupported
social proof. Re-run oracle and negative mutants under a new suite version,
then repeat the same paired matrix. Token reporting must retain input, cached
input, output, reasoning output, provider cost when available, and wall time as
separate fields.

## Reproduction artifacts

- Preregistration: `PREREGISTRATION.md`
- Prepared run root: `/tmp/ui-resolve-paired-smoke-1.9.1-6d7edc6`
- Partial records: `records.partial.json` inside that run root
- Partial aggregate: `aggregate.partial.{json,md}` inside that run root
