# Cursor/Grok three-task replacement — 1.9.72 findings

Status: **complete, Internal display-name attribution**.

## Outcome

- Grok 4.5 High completed all 18 cells and all 17 retained cooldowns in global
  serial order. There was no retry, fallback, quota/capacity failure, or Luna
  lane.
- OmD passed every frozen critical gate and Evidence & Unknown check in all
  nine candidate cells. Internal task Reliability@3 is therefore 3/3 for OmD
  versus 2/3 for Raw.
- The nine exact Raw→OmD objective deltas are
  `0, +8, +4, 0, 0, 0, 0, 0, 0`: W/T/L `2/7/0`, mean `+1.33`, median `0`.
  The zero median is a ceiling-heavy Skill Lift result, not a Reliability
  failure.
- Cursor exposed only the runtime display name `Cursor Grok 4.5 High`.
  Consequently all exported run records are `invalid-attribution` for the
  public Model Track. “UI-Resolved” is not published from this run; the
  reliability numbers above are explicitly Internal critical-gate eligibility.

## What changed relative to Raw

The positive pairs are both onboarding repairs:

| Pair | Raw | OmD | Delta | Explanation |
|---|---:|---:|---:|---|
| onboarding t1 | 85 | 85 | 0 | ceiling tie |
| onboarding t2 | 77 | 85 | +8 | OmD closes accessibility and design-grounding failures |
| onboarding t3 | 81 | 85 | +4 | OmD closes the accessibility failure |
| incident t1–t3 | 85/85/81 | 85/85/81 | 0/0/0 | equal outcomes |
| locale t1–t3 | 85/85/85 | 85/85/85 | 0/0/0 | ceiling ties |

This is bounded positive, zero-loss Internal evidence across three tasks and
three trials. It is not yet a public frontier claim, a 24-task Verified gate,
or a confidence-qualified leaderboard result.

## Geometry recurrence

Incident trial 3 reports `card_radius_px = 0` for both Raw and OmD even though
both files declare and render a 14px outer console. In both outputs the model
placed `data-dashboard-card` on an inner square incident panel, so the
evaluator measured the wrong surface role. This is not an OmD regression and
does not fail a critical gate, but it exposes a remaining benchmark contract
ambiguity: exact geometry needs a stable role-to-measurement target, not merely
a CSS value.

The next change must therefore begin with a provider-free target-role audit.
Do not patch the skill or relax the evaluator until the intended “dashboard
card” role is made unambiguous in the task contract.

## Controller evidence

The 1.9.71 monotonic-clock repair was exercised by a real backward wall-clock
step at invocation 15: monotonic elapsed was `120004.898ms`, wall elapsed was
`119989ms`, and disagreement was only `15.898ms`. The retained cooldown was
correctly accepted. Under the former independent wall-duration lower bound,
this valid wait would have frozen another root.

## Compute is descriptive only

| Condition | Provider wall total | Median wall | Non-cached input + output |
|---|---:|---:|---:|
| Raw | 2,304,323ms | 287,980ms | 1,295,128 |
| OmD | 2,281,731ms | 249,617ms | 875,084 |

This was not an efficiency experiment. The differences must not be generalized
as a latency, token, or cost advantage.

## Arena-informed next benchmark plane

The companion Arena research recommends keeping the present deterministic
contract score and adding a separate blind pairwise **Ship Preference** plane:

1. judge Functionality, Usability, and Fidelity independently;
2. allow left, right, tie, and both-fail outcomes;
3. publish Bradley–Terry rating with 95% CI, vote count, and rank spread;
4. slice by task category and report quality/time/token Pareto views;
5. start a fresh epoch whenever the environment or judging methodology changes.

The deterministic plane remains the correctness gate. Pairwise preference must
not override accessibility, behavior, evidence, or unknown-data failures.
