# Cursor/Grok interactive-closure Skill Lift Preview — 1.9.65 findings

Status: **execution complete; bounded Internal Preview passed**.

## Outcome

All six locked cells and five fixed pacing waits completed without retry,
fallback, model substitution, timeout, manual product edit, or provider
capacity failure.

| Task | Raw | OmD | Delta |
|---|---:|---:|---:|
| Onboarding setup | 81/85 | 85/85 | +4 |
| Incident operations | 81/85 | 85/85 | +4 |
| Five-locale CLI handoff | 85/85 | 85/85 | 0 |

- paired median delta: **+4**;
- paired mean delta: **+2.67**;
- OmD automated gates: **3/3 pass**;
- Evidence & Unknown: **6/6 pass**;
- product diff: `index.html` only in **6/6** cells;
- runtime display name: `Cursor Grok 4.5 High` in **6/6** cells;
- child exit code: `0` in **6/6** cells;
- non-cached tokens: Raw **149,998**, OmD **178,505**;
- provider cell wall time: Raw **567,537 ms**, OmD **684,969 ms**.

Raw onboarding lost four points because its design-grounding critical gate did
not pass. Raw incident lost four design-grounding points on card radius while
its six critical gates still passed. OmD scored 85/85 on all three tasks.

## Interactive-closure check

The GLM 1.9.62 hidden-focusable regression did not recur.

- no OmD product contains a skip link, `.sr-only`, visually-hidden,
  clipping, or absolute-positioned hidden-focus pattern;
- every evaluator-observed focusable control was visited exactly once at
  desktop, mobile, 320px, and the 200% surrogate;
- every visited focus target was visibly focused, in view, and fully in view;
- incident and onboarding OmD retained seven focusable controls at all four
  viewports;
- locale OmD exposed three task-relevant focusable controls at all four
  viewports, with no clipped or unauthorized hidden addition;
- serious/critical axe findings, clipped controls, overlapping controls, and
  horizontal overflow remained zero across the OmD cells.

The 1.9.64 `interactive closure` therefore passes its bounded execution-
compliance hypothesis in this one-trial Grok Preview.

## Efficiency and claim boundary

OmD used 28,507 more non-cached tokens and 117,432 ms more provider wall time
in aggregate than Raw. These descriptive values are not an efficiency verdict:
the run has one trial per pair, runtime-native effort semantics, and no pinned
provider cost.

Cursor exposed only a runtime-reported display name, so every cell remains
`invalid-attribution` for public comparison. This result is Internal evidence
that the reviewed OmD skill matched or improved Raw on these three locked
tasks. It does not establish Reliability@3, confidence intervals, public
leaderboard eligibility, cross-model superiority, frontier status, or a
general efficiency claim.

Grok did not exhaust quota or capacity during this matrix. Terra High and Luna
High were therefore not opened as substitute lanes.
