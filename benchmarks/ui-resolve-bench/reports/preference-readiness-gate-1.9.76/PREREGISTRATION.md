# Preference coverage and readiness gate — 1.9.76

Status: **LOCKED; provider-free implementation pending**.

## Problem found after 1.9.75

Schema `0.2` matches one judgment and one reveal by reviewer hash alone. Because
each gallery contains one task, the same practitioner cannot review a second
task without appearing as a duplicate reviewer. Treating each reviewer-task as
a different person would corrupt reviewer counts and the hierarchical
bootstrap.

The current aggregator can also fit a number when candidate comparisons are
missing or the non-`both_fail` comparison graph is disconnected. Such a number
must not be presented as a public rank.

## Frozen schema correction

- product experiment `1.9.76`;
- collection schema `0.3`;
- `reviewer_hash` remains one stable, epoch-scoped practitioner identity;
- new `review_unit_id` binds epoch + reviewer + task id + task version + core
  prompt hash;
- judgments and reveals both carry `review_unit_id` and the same task metadata;
- uniqueness is `(reviewer_hash, review_unit_id)`, not reviewer alone;
- one reviewer may contribute to multiple tasks but only once per task;
- schema `0.2` is rejected by the readiness aggregator rather than silently
  promoted.

No provider, visual artifact, deterministic score, benchmark task, or
historical result changes.

## Frozen coverage rules

For each task:

- every review unit must expose the same candidate identity set;
- every unordered candidate pair must have one primary assignment per reviewer;
- every review unit must have exactly one valid hidden reversed duplicate;
- pair coverage counts unique reviewers, not exported files;
- Bradley–Terry-valid coverage excludes `both_fail` and includes ties;
- every axis must have a connected candidate graph before ratings or ranks are
  publishable.

The output reports task, candidate, pair, reviewer, valid-vote, `both_fail`,
and graph-component coverage. Ratings, ranks, and intervals are set to `null`
for an axis whose graph is disconnected.

## Frozen evidence grades

These grades apply to the **preference plane only**:

- `diagnostic`: structurally valid, but one or more publication thresholds are
  unmet;
- `preview`: at least 24 tasks and at least 5 unique reviewers with 5
  Bradley–Terry-valid votes for every task × pair × axis;
- `verified`: the same 24-task coverage with at least 10 unique reviewers and
  10 valid votes for every task × pair × axis.

The output must list every unmet threshold and the exact next review units
needed. It must also state that automated run/trial, attribution, task-quality,
and deterministic-gate requirements remain external; therefore a preference
grade alone never makes the overall benchmark publishable.

## Acceptance

Pass only when:

- one reviewer can complete two tasks without inflating the unique reviewer
  count;
- repeating the same reviewer-task fails closed;
- judgment/reveal task or review-unit mismatch fails closed;
- missing candidate pairs and inconsistent task candidate sets fail closed;
- a disconnected axis suppresses rating, rank, rating CI, and rank interval;
- 4 reviewers remain diagnostic, 5 × 24 complete coverage reaches preview, and
  10 × 24 reaches verified;
- a `both_fail`-dominated edge remains under-covered and cannot reach preview;
- output gives deterministic deficit and next-review-unit diagnostics;
- prior side normalization, reversal exclusion, tie symmetry, strict axes, and
  byte stability remain green;
- focused tests, lint, build, Node syntax, and diff checks pass.

## Claim limit

Synthetic coverage fixtures prove only the readiness gate. They do not
constitute practitioner preference, an OmD win, a public rank, or overall
benchmark publication readiness.
