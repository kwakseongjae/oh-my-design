# Cursor/Grok three-task replacement — 1.9.70 findings

Status: **frozen infrastructure-invalid after 7/18 cells**.

## Stop evidence

The eighth invocation stopped before provider execution. The requested
120-second cooldown measured:

- monotonic elapsed: `120002.07758299999` ms;
- wall elapsed: `119998` ms;
- clock disagreement: `4.077582999991137` ms.

The monotonic duration was inside the accepted 120,000–125,000 ms window and
the two clocks agreed to within 5 ms, but the controller independently required
the wall clock to be at least 120,000 ms. A 2 ms wall-clock step therefore
triggered `pacing-window-violation`.

This is a fail-closed controller stop, not a Grok quota or capacity failure.
The `locale-t2-omd` provider call never started and its prepared workspace
remained untouched. `/tmp/u1970` is frozen and must not be resumed or repaired.
Luna High is not unlocked by this stop.

## Retained partial evidence

Seven provider calls completed with exit 0 and the expected display name.
Six cooldowns completed inside the frozen window. All seven rows passed
Evidence & Unknown.

The only complete trial is descriptive:

| Task | Raw | OmD | Delta |
| --- | ---: | ---: | ---: |
| onboarding | 85 | 85 | 0 |
| incident operations | 81 | 85 | +4 |
| five-locale handoff | 75 | 85 | +10 |

`incident-t2-raw` also completed at 85, but its OmD pair was never started.
The partial rows do not establish Reliability@3, Skill Lift, confidence,
efficiency, model superiority, or frontier status.

## Root cause and next action

Elapsed-duration enforcement should use the monotonic clock as the authoritative
120–125-second duration. The retained wall clock should prove timestamp
chronology and remain within the already-frozen 5,000 ms disagreement bound; it
should not independently reject a valid monotonic duration for a 2 ms wall-clock
step.

The next patch is provider-free. It must add the observed boundary regression,
preserve rejection of genuinely early monotonic waits, overshoots, clock
disagreement, and cancellation, and pass focused controller tests before any
fresh provider root is opened.
