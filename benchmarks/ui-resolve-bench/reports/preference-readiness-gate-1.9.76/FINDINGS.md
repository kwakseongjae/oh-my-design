# Preference coverage and readiness gate — 1.9.76 findings

Status: **accepted, provider-free**.

## The collection unit is now correct

Schema `0.2` keyed one export pair by reviewer alone even though each gallery
contains only one task. A practitioner reviewing a second task was therefore
either rejected as a duplicate or had to be assigned a fake second identity.
Both outcomes make reviewer-level statistics wrong.

Schema `0.3` now keeps two identities:

- `reviewer_hash` — one stable practitioner inside a methodology epoch;
- `review_unit_id` — that practitioner’s locked evaluation of one exact task
  version and core prompt.

Judgment and reveal files both carry the review unit and exact task metadata.
The downloaded filename also uses the review unit, preventing the browser from
overwriting an earlier task export from the same reviewer.

A synthetic reviewer completed two tasks and produced two review units while
the unique practitioner count remained exactly one. Repeating the same
reviewer-task, changing task metadata, changing the review-unit pairing, or
submitting legacy schema `0.2` failed closed.

## Coverage is measured before rank

Every review unit must now contain:

- the same candidate set as every other reviewer of that task;
- every unordered candidate pair exactly once as a primary comparison;
- exactly one valid hidden reversed duplicate;
- all four accepted axes and choices.

The aggregator reports task, candidate, pair, axis, unique-reviewer,
Bradley–Terry-valid vote, and `both_fail` coverage. It also calculates the
minimum additional non-`both_fail` review units required for each existing
task, new tasks, and the complete preference plane.

## Disconnected numbers are suppressed

For every axis, only non-`both_fail` edges establish the Bradley–Terry
comparison graph. A three-candidate mutation left the third candidate connected
only by `both_fail` responses. The gate detected two graph components and set
all candidate rating, rank, rating CI, and rank interval fields on that axis to
`null`.

This prevents a regularizer from turning an unidentifiable comparison into a
plausible-looking leaderboard.

## Evidence grades

Synthetic complete round-robin panels produced the preregistered results:

| Fixture | Result |
|---|---|
| 24 tasks × 4 reviewers | `diagnostic`; 24 minimum additional review units |
| 24 tasks × 5 reviewers | `preview`; Preview deficits zero |
| 24 tasks × 10 reviewers | `verified`; Verified deficits zero |
| 24 × 5 with three `both_fail` votes on one axis edge | `diagnostic`; three valid votes still required |

These labels apply only to Ship Preference evidence. The output always keeps
`overall_benchmark_publishable=false` and lists the independent automated
run/trial, attribution, task-quality, and deterministic-gate requirements.

## Validation

- focused gallery, schema, aggregation, coverage, and readiness tests: 15/15;
- stable reviewer across tasks: pass;
- duplicate reviewer-task, task mismatch, review-unit mismatch: fail closed;
- missing pair and inconsistent task candidate set: fail closed;
- disconnected graph suppression: pass;
- 4/5/10-reviewer grade boundaries: pass;
- `both_fail` valid-vote deficit: pass;
- TypeScript, build, both Node syntax checks, and diff check: pass;
- broader repository suite: 287 pass, 2 pre-existing `/tmp` vendor Git-metadata
  failures, 1 opt-in skip;
- provider generation: zero.

## Claim boundary

All panels were synthetic. This patch proves collection identity and publication
gating behavior only. It does not provide real practitioner preference, an OmD
win, a public rank, or overall benchmark publication readiness.
