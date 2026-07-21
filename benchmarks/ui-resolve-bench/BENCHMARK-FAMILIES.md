# UI-Resolve benchmark families

UI-Resolve must answer three different causal questions without pretending they
are one leaderboard:

1. How capable is the model by itself?
2. How much does a portable UI skill improve a fixed model?
3. How reliably does a complete design harness deliver under a fixed budget?

The public site may place the results under one benchmark brand, but it must
never merge their ranks or scores.

## 1. Resolve Suite — controlled product work

This is the objective core. Every task freezes a starter, product contract,
public brief, hidden journeys, design oracle, viewports, locale, assets, and
budget. It measures working product UI rather than screenshot appeal alone.

The primary metric is `UI-Resolved@1`. Repeated trials add reliability and
distribution estimates. This suite supplies the skill, model, and harness
leaderboards below.

## 2. Prompt Arena — social, rough-prompt comparisons

X and Threads comparisons often start with prompts such as “make a premium
weather app” or “redesign this dashboard.” That is a valid measure of first-pass
interpretation and visual judgment, but it has high generation variance and a
weak product oracle.

Prompt Arena preserves that useful format while making it auditable:

- publish the exact rough prompt, assets, viewport, runtime, and budget;
- disable skills when comparing models;
- pin one model when comparing skills;
- run at least five independent generations per candidate internally and ten
  before a verified public result;
- enforce a small objective floor: page loads, required interaction works,
  no mobile overflow, no critical/serious axe violation, no forbidden claims;
- collect blinded pairwise `Visual Ship Preference` at the run level;
- show the median-representative run by default and expose the best and worst
  runs beside it;
- never promote a cherry-picked best screenshot to the leaderboard row.

Prompt Arena is optimized for legibility and sharing. Resolve Suite remains the
capability benchmark.

## 3. Model Track

Question: **What does the model deliver without a third-party UI skill?**

Freeze:

- no portable UI skill, design harness, hidden system prompt, or vendor hook;
- the same agent shell, tool permissions, context, reasoning budget, and task;
- the exact model snapshot and provider settings;
- the same starter, task order, fonts, browser, OS image, and network policy.

Report model-native and model-plus-raw-`DESIGN.md` as different conditions. A
model leaderboard must not contain OmD, Taste, Impeccable, or another skill.

## 4. Skill Lift Track

Question: **How much does a portable skill change a fixed model?**

Every skill result is paired with a no-skill run for the same model, task, and
trial index. Report:

- absolute `UI-Resolved@1`;
- paired resolved lift in percentage points;
- task-level win / tie / loss counts;
- diagnostic objective-score lift;
- 95% task-and-run hierarchical bootstrap intervals;
- completion, wall time, tokens, and tool calls.

Use at least one anchor model during patch experiments. Before a public skill
claim, repeat the skill on at least three model families. A skill that improves
one model but regresses another is not model-agnostic.

## 5. Harness Track

Question: **Does the complete workflow resolve the task within an explicit
human, time, and compute budget?**

Hooks, browser iteration, specialist agents, checkpoints, persistent memory,
and generated context are allowed only when they are part of the documented
workflow. Record planned checkpoints separately from unplanned rescue.

Do not rank harnesses on one blended score. Publish a Pareto view of:

- UI-Resolved rate and `Reliability@k`;
- `Visual Ship Preference`;
- median and P90 elapsed time;
- model/tool calls and tokens;
- planned checkpoint count;
- unplanned operator interventions;
- task abandonment and timeout rate.

## 6. Transfer Matrix — model × skill interaction

The full Cartesian product is expensive, so use a preregistered subset after
the main tracks:

```text
3 model families × no skill / OmD / strongest external skill
× 6 representative tasks × 3 trials
```

This matrix estimates whether a skill's lift transfers across models and
whether rankings are mostly model effects, skill effects, or interactions. It
is a generalization audit, not a fourth public leaderboard.

## 7. Labels shown to users

| Status | Meaning |
|---|---|
| Internal | runner or task calibration; may change without notice |
| Preview | reproducible run package, but insufficient tasks, trials, or review |
| Verified | all publication gates pass for the named suite version |
| Retired | previously valid result invalidated by a suite, task, or runtime change |

Every score card must name its benchmark family, suite version, task-set hash,
model snapshot, skill/harness commit, budget tier, run count, and verified date.
