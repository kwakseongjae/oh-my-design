# 1.9.1 paired smoke preregistration

Locked before the first model run on 2026-07-22.

## Question

With model, reasoning, starter, DESIGN.md, core prompt, tools, and run budget
held constant, does the portable `omd:apply` skill improve first-run objective
UI resolution over raw DESIGN.md alone?

This is a diagnostic patch smoke, not leaderboard evidence and not a claim that
OmD is the best UI skill.

## Fixed matrix

- Benchmark family: Skill Lift
- Suite slice: UI-Resolve v0.2 development fixtures
- Model: `gpt-5.6-terra`
- Reasoning: `xhigh`
- Runtime: Codex CLI 0.144.1, ephemeral, ignored user config
- Network: disabled inside each workspace
- Conditions: `raw-design-md` and `omd-portable`
- Tasks:
  - `pricing-conversion-v0.1`
  - `onboarding-setup-v0.1`
  - `incident-operations-v0.1`
- Trials: 1, 2, 3 for every task×condition cell
- Timeout: 900 seconds per run
- Total scheduled runs: 18

`raw-design-md` is the paired control because it preserves the exact DESIGN.md
available to OmD. Comparing OmD only with the no-context baseline would confound
the effect of the skill with the effect of receiving the design contract.

## Gates and reporting

- A run resolves only when all objective critical gates pass and at least one
  product file changed.
- Dirty skill source is invalid attribution and must be replaced after a clean
  commit.
- Failed and timed-out trials remain in the denominator.
- Report completion, UI-Resolved, Reliability@3, objective distribution, wall
  time, paired win/tie/loss, and every failure gate.
- Three tasks×three runs are too small for a superiority claim or a stable
  confidence interval. Results select the next 0.0.1 hypothesis only.

## Calibration lock

Before model runs, all three oracle implementations passed 85/85 in Chrome,
axe, keyboard, responsive, design-grounding, and state checks. Three injected
mutants failed the intended state gate:

- pricing: incorrect annual price;
- onboarding: preference toggle no-op;
- operations: severity filter no-op.

Changing thresholds, task facts, or journey expectations after seeing model
results creates a new suite version and invalidates this matrix.
