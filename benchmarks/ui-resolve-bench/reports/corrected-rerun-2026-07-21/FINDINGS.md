# Corrected activation rerun — 2026-07-21

This rerun corrects the exact activation and platform-install defects found in
the first internal pilot. It is still one public development fixture with one
in-app observation per condition, no normalized efficiency trace, and no blind
practitioner verdict. It is not causal evidence or a leaderboard.

| Condition | Objective gates | Specific failure |
|---|---:|---|
| Taste Skill v2 | 81/85 · fail | `color-contrast` at all four evaluated viewport modes |
| UI UX Pro Max official Codex bundle | 81/85 · fail | `aria-required-children` and `aria-required-parent` at all four modes |
| oh-my-design `$omd:apply` | 85/85 · automated gate pass | none in the current objective evaluator |

## Non-scoring visual inspection

This identity-aware inspection is descriptive only and must not be counted as
`Ship Preference`.

- Taste produced the most editorial hero and the simplest plan-comparison
  rhythm, but muted/orange text combinations caused the measured contrast
  failure.
- UI UX Pro Max exposed the most explicit comparison table and supporting
  information, but also left a visible skip-link-like control at the viewport
  edge and created invalid ARIA parent/child relationships.
- OmD used the quietest hierarchy and fewest secondary structures. It cleared
  the current checks, but the familiar cream/serif/blue composition is not
  evidence of superior craft.

All three converged strongly because the frozen `DESIGN.md` oracle specifies
the same colors, fonts, radii, and page goal. That is a benchmark lesson: the
12-task set needs open-brief and screenshot-grounded tasks in addition to
DESIGN.md-grounded tasks, otherwise the test will mostly measure contract
obedience rather than range or taste.

All three workspaces shared the same frozen starter, `DESIGN.md`, core task
prompt hash, model (`gpt-5.6-terra`), reasoning (`xhigh`), sandbox policy, and
task-time network restriction. Each condition received a preregistered minimal
activation delta, so the final prompt hashes intentionally differ.

The useful OmD result is narrower than “OmD won.” Exact `$omd:apply` activation
plus the repaired delivery-ownership contract removed the previous no-op and
produced a changed workspace that passed the current objective checks. Whether
practitioners prefer that interface remains an unanswered `Ship Preference`
question. Reliability also remains unknown until three independent trials run
across the 12-task internal set.
