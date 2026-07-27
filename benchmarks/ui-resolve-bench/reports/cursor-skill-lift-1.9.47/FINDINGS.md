# Cursor/Grok Skill Lift — 1.9.47 findings

Status: **execution complete; bounded hypothesis passed**.

## Outcome

All nine fresh Cursor/Grok 4.5 High cells completed serially without retry,
fallback, timeout, manual product edits, Auto/Router, or provider effort
arguments. Every cell changed only `index.html`, retained usage evidence, and
passed Evidence & Unknown.

| Condition | Scores | Automated gate | Median wall | Median non-cached tokens |
|---|---:|---:|---:|---:|
| No skill / no DESIGN.md | 61, 63, 65 / 85 | 0/3 | 256,706 ms | 99,499 |
| Raw DESIGN.md | 79, 85, 79 / 85 | 1/3 | 289,735 ms | 61,228 |
| OmD apply skill | 85, 85, 85 / 85 | 3/3 | 224,473 ms | 100,583 |

Raw→OmD paired objective deltas were `+6`, `0`, and `+6`: two wins, one tie,
and zero losses. OmD passed accessibility and all six automated gates in 3/3
trials. The semantic-orange contrast, invalid table parentage, and
keyboard-unreachable comparison failures were 0/3.

This passes the preregistered bounded one-task Skill Lift hypothesis.

## Efficiency observation

OmD's median wall time was 22.5% lower than Raw, while median non-cached token
use was 64.3% higher. Cached input is separate. These are Internal descriptive
measurements from one task × three trials and do not establish a Pareto or
efficiency result.

## Attribution and publication boundary

Every run reported the expected `Cursor Grok 4.5 High` display name, but Cursor
does not expose an immutable model ID. The public aggregator therefore
correctly retains zero valid rows and no paired public comparison. The result
is Internal and cannot support a public model winner, confidence interval,
general best-skill claim, or 2.0 frontier promotion.

## Decision

The schema `0.5` focus correction has fresh provider evidence and did not
produce a new false-green cluster. Proceed to a fresh Composer 2.5 replication
with the same task, evaluator, order, acceptance, and runtime controller.
