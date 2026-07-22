# 1.9.1 paired smoke — final calibration findings

> Status: **18/18 complete, structurally valid, and not publishable as a
> superiority claim** · preregistered Terra/xhigh matrix completed on
> 2026-07-22.

This run closes the full three-task × two-condition × three-trial matrix. It is
useful as calibration evidence, but its evaluator predates the task-owned
semantic contract fixed in 1.9.2. The completed matrix must remain visible; it
must not be relabelled as a leaderboard result.

## Final result

| Slice | Raw DESIGN.md | OmD portable | Interpretation |
|---|---:|---:|---|
| Valid completed runs | 9/9 | 9/9 | No missing or replaced trials |
| UI-Resolved | 3/9 (33.3%) | 4/9 (44.4%) | Paired lift +11.1pp |
| 95% hierarchical bootstrap CI | 0–77.8% | 11.1–77.8% | Wide, overlapping intervals |
| Objective mean | 94.9/100 | 97.0/100 | OmD +2.09pp mean paired lift |
| Objective median | 95.3/100 | 95.3/100 | Median paired lift is 0 |
| Reliability@3 | 0/3 tasks | 0/3 tasks | Neither condition resolved all three trials |
| Mean token volume | 350,663 | 641,180 | Input + output; cached input is not added twice |
| Mean wall time | 342s | 368s | OmD +7.4% elapsed time |

Across all nine matched pairs, OmD records **one win, eight ties, and no
losses** on the all-or-nothing resolution gate. The resolved lift is +11.1
percentage points with a 95% hierarchical bootstrap interval of **0 to
+44.4pp**. Objective lift has a mean of +2.09pp, median 0, and maximum +4.71pp.

OmD mean token volume is 290,517 tokens higher per run (+82.8%). This is model
context volume, not provider billing cost: provider quotas and prompt caching
may weight cached and uncached tokens differently. OmD mean wall time is
25,451ms higher (+7.4%).

## Failure taxonomy

- Pricing: five of six runs failed serious color contrast. The sole complete
  pass was OmD trial 3. This is a real implementation-quality signal.
- Onboarding: four of six runs failed only because the 1.9.1 evaluator required
  a `nav` landmark that the task contract did not require. Raw and OmD produced
  the same `80, 80, 85` sequence. This is an evaluator-contract defect, not a
  skill difference.
- Operations: the two failed first trials rendered a truthful dynamic count
  such as “4 incidents shown,” but the broad unsupported-claim regex classified
  it as marketing proof. Raw and OmD trials 2 and 3 passed. This is the second
  evaluator-contract defect.

## Decision

Do not publish a leaderboard row, “OmD wins,” or X performance comparison from
1.9.1. The lift interval touches zero, eight of nine pairs tie, Reliability@3 is
zero for both conditions, and two task contracts are known to be wrong.

Keep this matrix as the immutable calibration baseline. The bounded 1.9.2
change moves landmark requirements into each task manifest and recognizes only
the exact task-derived operations count. Oracle copies and negative mutants
have passed that contract; the next causal estimate is a fresh matrix under
task contract `0.3.0`.

## Reproduction artifacts

- Preregistration: `PREREGISTRATION.md`
- Curated permanent aggregate: `SUMMARY.final.json`
- Prepared run root: `/tmp/ui-resolve-paired-smoke-1.9.1-6d7edc6`
- Final records: `records.final.json` inside that run root
- Full aggregate: `aggregate.final.{json,md}` inside that run root
