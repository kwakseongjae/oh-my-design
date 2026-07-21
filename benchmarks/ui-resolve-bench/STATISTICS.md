# UI-Resolve statistics and ranking policy

## Why no single average is enough

UI generation mixes binary product correctness, continuous diagnostic scores,
open-ended visual preference, latency, and cost. A mean can hide a broken
journey behind visual polish, while a maximum rewards lucky sampling. Public
ranking therefore starts with the all-or-nothing product gate and reports the
rest as a vector.

## Required descriptive statistics

For every candidate and benchmark family, publish:

- scheduled, completed, failed, timed-out, and incomplete run counts;
- `UI-Resolved@1` pass rate over every scheduled run;
- `Reliability@k` over tasks with the preregistered `k` trials;
- objective score count, mean, median, standard deviation, min, P10, P25, P75,
  P90, max, and IQR for completed scored runs;
- median and P90 elapsed time, tokens, and tool calls;
- task-family and locale slices, with no slice ranking below its minimum sample;
- 95% confidence intervals and the exact bootstrap method.

Min and max are useful for showing instability, not for ranking. The public
example gallery shows the run closest to the median objective score by default,
plus the actual worst and best runs with their failure labels.

## Primary ordering

Leaderboards use lexicographic ordering rather than an opaque composite:

1. `UI-Resolved@1` with its 95% interval;
2. `Reliability@k`;
3. blind `Visual Ship Preference` with its 95% interval;
4. completion rate;
5. efficiency within the same budget tier.

Candidates whose primary intervals overlap are labelled **statistically tied**.
Mean diagnostic score cannot break a failed critical gate.

## Repeated runs

| Stage | Tasks | Runs per task | Purpose |
|---|---:|---:|---|
| Patch smoke | 3 | 3 | detect obvious regressions quickly |
| Internal candidate | 12 | 5 | estimate variance before a product patch decision |
| Verified public | 24+ | 10 | publish stable model/skill results |
| Quarterly live set | 6+ new | 5 | contamination and capability-drift check |

When cost prevents the verified target, the result remains Preview and displays
its actual run count. We do not extrapolate a ten-run claim from three trials.

## Confidence intervals

For pass rates and paired lift, use a deterministic hierarchical percentile
bootstrap:

1. sample tasks with replacement;
2. within each sampled task, sample its scheduled run outcomes with replacement;
3. compute the target statistic;
4. repeat at least 10,000 times for a verified public result;
5. publish the 2.5th and 97.5th percentiles.

Internal patch runs may use 2,000 resamples. Seed the bootstrap and record the
seed in the artifact. Failures, timeouts, and incomplete scheduled runs remain
false outcomes in the pass-rate denominator.

For Skill Lift, match candidate and no-skill runs by task and trial index before
bootstrapping. Publish resolved lift in percentage points plus win/tie/loss.
Never compare unpaired means as a skill-effect estimate.

## Visual Ship Preference

- candidate identity and order are blinded;
- reviewers compare runs for the same task and budget;
- ties and both-fail are allowed;
- hidden reversed duplicates measure order consistency;
- use at least five practitioners for Preview and ten for Verified;
- fit Bradley–Terry scores and obtain confidence intervals by resampling
  reviewers and task-level comparisons;
- publish agreement, order-reversal, abstention, and both-fail rates.

The visual leaderboard uses `Visual Ship Preference`, not a generic “quality”
label. It cannot overrule objective task failures.

## Missing data and outliers

- Never delete a scheduled timeout, failure, or incomplete run.
- Do not replace a missing score with the cohort mean or zero. Report score
  coverage separately; only the binary resolved outcome is fail-closed.
- Do not trim visual, time, or token outliers from the primary report.
- A corrected infrastructure failure requires a new run ID; preserve and mark
  the original as invalid with a reason.
- Report model/provider refusals separately but keep them in completion and
  resolved denominators when the task was eligible.

## Task-quality uncertainty

Before a task enters the hidden set, it must accept at least two valid solutions
and reject targeted mutants. Five independent reviewers audit ambiguous or
flagged tasks. Task retirement changes the suite version and triggers result
recomputation; it never silently rewrites historical score packages.

## Research anchors

- HELM motivates scenario coverage, explicit gaps, and multi-metric reporting:
  <https://nlp.stanford.edu/helm/vhelm/>.
- Chatbot Arena uses pairwise human preference, Bradley–Terry estimation, and
  bootstrap confidence intervals: <https://arxiv.org/abs/2403.04132>.
- GeneBench reports repeated independent runs and hierarchical bootstrap over
  problems and run outcomes: <https://cdn.openai.com/pdf/6dc7175d-d9e7-4b8d-96b8-48fe5798cd5b/oai_genebench_benchmark.pdf>.
- HumanEval's `pass@k` work demonstrates why repeated sampling changes observed
  success: <https://arxiv.org/abs/2107.03374>.
- MLPerf separates comparable divisions, requires complete submission
  manifests, and publishes full run data: <https://docs.mlcommons.org/inference/submission/>.
- OpenAI's 2026 SWE-bench audit is a warning that underspecified prompts,
  overly strict tests, and low test coverage can invalidate rankings:
  <https://openai.com/index/separating-signal-from-noise-coding-evaluations/>.
