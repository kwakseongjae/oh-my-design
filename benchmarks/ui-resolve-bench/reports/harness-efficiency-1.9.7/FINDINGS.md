# Harness efficiency patch smoke — 1.9.7 findings

Run on 2026-07-23 against the preregistration in this directory.

## Decision

Reject promotion of the current repair harness and keep it opt-in while its
delivery budget is redesigned. The preregistered matrix stopped at cell 12 of
18 when `onboarding-t3-harness` exceeded the 900-second limit. Eleven cells
completed validly, one timed out, and the remaining six were not started.

This is a visible failed internal calibration, not a rerunnable outlier. The
timeout is not replaced, the six unstarted cells are not imputed, and the five
complete pairs cannot support a public quality, efficiency, or frontier claim.

## Frozen execution result

| Item | Result |
|---|---:|
| Scheduled cells | 18 |
| Attempted cells | 12 |
| Valid completed cells | 11 |
| Timed-out cells | 1 |
| Not-started cells | 6 |
| Complete matched pairs | 5 / 9 |
| Valid-pair win / tie / loss | 2 / 3 / 0 |
| Evidence & Unknown pass among valid cells | 11 / 11 |
| Exact specialist attribution among attempted harness cells | 6 / 6 |

The five complete pairs contain all three pricing trials and the first two
onboarding trials. Pricing produced two harness wins and one tie; onboarding
produced two ties. The partial paired resolved lift is +40 percentage points,
but its internal hierarchical interval is 0 to 83.33 points and the matrix is
incomplete. It is diagnostic only.

Operations was never reached. Aggregate task coverage, Harness
`Reliability@3`, and the preregistered nine-pair decision are therefore not
estimable.

## Descriptive efficiency before the stop

These distributions include valid completed runs only and are not a Pareto
decision for the stopped matrix.

| System | Valid runs | Median wall | P90 wall | Median uncached tokens | P90 uncached tokens |
|---|---:|---:|---:|---:|---:|
| `omd-portable` | 6 | 685,112ms | 743,612ms | 139,096 | 152,094 |
| `omd-repair-harness` | 5 | 717,338ms | 779,986ms | 179,402 | 190,542 |

On this partial valid slice the harness used 1.047× median wall time and 1.290×
median uncached tokens. Both ratios are inside the preregistered budget, but
the missing candidate trial and unstarted operations trials prevent a valid
efficiency conclusion.

## Timeout forensic

`onboarding-t3-harness` retained exact Opus attribution and called
`omd-ux-writer` and `omd-ux-engineer` once each with `model: opus`. It changed
only `index.html`, but the process was terminated at 900,027ms before a complete
final response.

- first product write: 580,406ms;
- last product write: 876,047ms;
- uncached input + output tokens: 201,263;
- child exit: 143;
- final response: absent.

The two specialists overlapped and returned by roughly 249 seconds. The parent
then delayed the first product edit until 580 seconds. After the edit it tried
multiple direct Chrome launches inside the Claude native sandbox, hit blocked
ProcessSingleton/socket behavior, authored a 20,840-byte DOM-shim verifier,
retried it, attempted QuickLook, edited again, and began the final response only
as the runner terminated it.

A post-stop run of the frozen evaluator scored the retained `index.html` 85/85
with every critical gate passing. That is forensic evidence that the product
artifact was complete; it does **not** turn the timed-out cell into a valid run
or a harness win.

## Promotion audit

1. Nine valid and attributable harness cells — **fail** (5 valid, 1 timeout,
   3 not started).
2. Aggregate UI-Resolved non-regression — **not estimable**.
3. More wins than losses and at least one win — **observed on five pairs, but
   insufficient for the frozen nine-pair decision**.
4. No task loses `Reliability@3` — **fail** (onboarding candidate trial 3 is
   invalid; operations absent).
5. Evidence & Unknown in every harness cell — **not estimable** (all five valid
   harness cells pass; four scheduled cells lack valid results).
6. Median wall/token budget — **descriptively inside the limit, not a complete
   matrix decision**.
7. Zero unplanned human interventions — **pass among attempted cells**.

Overall promotion: **rejected**.

## Runner robustness finding

Normalizing the preserved workspaces exposed a separate collector defect:
Claude scratch directories can contain expired task-output symlinks, and the
collector followed them with `statSync`. The collector now uses `lstatSync` and
skips symlinks. A regression test covers a broken runtime link. This changes no
run, score, or preregistered decision.

## Next experiment

`1.9.8` is a single-cell delivery-budget recovery, not a silent retry of this
matrix. It should keep the same onboarding contract, exact Opus parent,
specialist attribution, and 900-second limit while adding one bounded delivery
envelope: first product edit by 50% of the budget, one verification mechanism
attempt per class, no self-authored replacement browser harness after a sandbox
block, and final-delivery reserve. Only after that fresh cell is valid may a new
full repeated matrix be preregistered as `1.9.9`.

`1.9.7` remains immutable and Internal. Do not use its partial wins, post-stop
85/85 artifact, or descriptive cost ratios in an X comparison or leaderboard.
