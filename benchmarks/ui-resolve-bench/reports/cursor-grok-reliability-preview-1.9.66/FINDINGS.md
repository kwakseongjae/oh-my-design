# Cursor/Grok three-task Reliability@3 Preview — 1.9.66 findings

Status: **execution complete; bounded hypothesis rejected**.

## Outcome

All 18 locked cells and 17 pacing waits completed without retry, fallback,
model substitution, timeout, manual product edit, or provider capacity failure.

| Task | Raw scores | OmD scores | Paired deltas | Raw R@3 | OmD R@3 |
|---|---|---|---|---:|---:|
| Onboarding | 85 / 85 / 81 | 85 / 85 / 85 | 0 / 0 / +4 | fail | pass |
| Incident operations | 85 / 85 / 77 | 81 / 85 / 81 | -4 / 0 / +4 | fail | fail |
| Five-locale handoff | 85 / 85 / 85 | 85 / 85 / 85 | 0 / 0 / 0 | pass | pass |

- paired wins / ties / losses: **2 / 6 / 1**;
- paired mean delta: **+0.44**;
- paired median delta: **0**;
- Raw mean / median: **83.67 / 85**;
- OmD mean / median: **84.11 / 85**;
- Raw automated gates: **7/9**;
- OmD automated and all-critical gates: **9/9**;
- task Reliability@3: Raw **1/3**, OmD **2/3**;
- Evidence & Unknown: **18/18**;
- task-owned `index.html` diff: **18/18**.

The preregistered zero-loss and positive-median requirements failed. This
matrix therefore does not promote the candidate, even though OmD improved the
mean, automated-gate count, and task Reliability@3 count.

## Failure cluster

Incident OmD scored 81, 85, and 81. Both 81-point cells passed every critical
gate, task behavior, responsive, accessibility, and Evidence & Unknown, but
lost four design-grounding points because the produced cards did not preserve
the declared card radius. The cluster repeated in two of three trials.

This is not the GLM 1.9.62 hidden-focusable regression:

- no OmD cell contains a skip-link, `.sr-only`, visually-hidden, clipping, or
  absolute-positioned hidden-focus pattern;
- all evaluator-observed OmD focusables were visited exactly once at desktop,
  mobile, 320px, and the 200% surrogate;
- all visited OmD targets were visibly focused, in view, and fully in view.

Raw also varied: onboarding trial 3 lost accessibility, and incident trial 3
lost page-background/card-radius design grounding. Those Raw failures explain
the two positive OmD pairs but do not erase the incident trial 1 OmD loss.

The next bounded repair should add post-edit **geometry-token closure**:
enumerate changed card/control surfaces, compare their computed radius against
the declared role token, and correct mismatches before acceptance. It must not
change the evaluator, task, Raw condition, color/focus contracts, or historical
scores.

## Efficiency and claim boundary

Observed non-cached tokens were Raw 944,889 and OmD 763,067. Provider cell wall
time was Raw 2,486,491 ms and OmD 2,132,994 ms. Locale Raw trial 2 alone used
284,673 tokens and 577,865 ms, so these aggregate differences are descriptive
only and not an efficiency verdict.

Cursor exposed only the display name `Cursor Grok 4.5 High`; all rows remain
`invalid-attribution` for public comparison. Three tasks × three trials do not
support a confidence interval, public rank, cross-model conclusion, or frontier
claim.

Grok completed the matrix without quota or capacity exhaustion, so Terra High
and Luna High were not opened as substitute lanes.
