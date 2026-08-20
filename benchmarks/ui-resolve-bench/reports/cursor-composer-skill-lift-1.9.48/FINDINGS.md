# Cursor/Composer Skill Lift — 1.9.48 findings

Status: **execution complete; replication rejected**.

## Outcome

All nine fresh Composer 2.5 cells completed serially without retry, fallback,
timeout, manual product edits, Auto/Router, or provider effort arguments.
Every cell changed only `index.html`, retained usage, and passed Evidence &
Unknown.

| Condition | Scores | Automated gate | Median wall | Median non-cached tokens |
|---|---:|---:|---:|---:|
| No skill / no DESIGN.md | 65, 59, 61 / 85 | 0/3 | 142,777 ms | 49,252 |
| Raw DESIGN.md | 81, 79, 85 / 85 | 1/3 | 131,573 ms | 45,915 |
| OmD apply skill | 85, 85, 81 / 85 | 2/3 | 118,840 ms | 52,353 |

Raw→OmD paired deltas were `+4`, `+6`, and `-4`: two wins, no ties, and one
loss. OmD failed the preregistered 3/3, zero-loss, and accessibility 3/3
gates. The Composer replication is rejected.

## Failure cluster

The sole OmD failure is a real semantic-color defect, not an evaluator issue.
Trial 3 rendered two `.check-state.blocked` labels as 13px bold
`signal-orange #E7683D` on white. Axe measured 3.25:1 at mobile, 320px, and
the 200% surrogate against the required 4.5:1.

The skill already says unmeasured accents must not carry normal text, but that
instruction is expressed as a planning ledger and acceptance checklist.
Composer followed it in two trials and skipped the closure in one. The bounded
repair should add a mandatory post-edit foreground-declaration closure:

- inspect every changed normal-text foreground;
- a semantic accent declaration is not contrast proof;
- without measured 4.5:1, use a declared text-role token;
- preserve the accent only as an adjacent non-text dot, border, ring, or icon;
- do not invent a darker color.

The Raw control, task, evaluator, and historical result stay unchanged.

## Efficiency observation

OmD's median wall time was 9.7% lower than Raw and median non-cached tokens
were 14.0% higher. The rejected quality gate and one-task sample prohibit an
efficiency or Pareto claim.

## Attribution boundary and decision

Composer reported only the expected display name, so public aggregation
correctly retains zero valid rows. Proceed to one semantic-color closure repair
and deterministic skill acceptance, then a fresh Composer candidate
replacement. No public model, skill, confidence, or frontier claim follows.
