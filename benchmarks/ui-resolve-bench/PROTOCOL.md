# UI-Resolve Bench v0.1 protocol

## 1. Unit of evaluation

Each private evaluation task freezes:

```text
starter repository
+ product brief
+ optional DESIGN.md, screenshots, and licensed assets
+ public acceptance contract
+ hidden user journeys
+ hidden design oracle
+ evidence graph
+ protected unknown fields
```

Public development fixtures may expose their oracle to make evaluator behavior
reviewable; they are never leaderboard instances. Private evaluation oracles,
journeys, and control manifests stay outside the submission's readable and
writable filesystem.

Tasks may be `open-brief`, `design-md`, or `screenshot` grounded. A benchmark
made only of `DESIGN.md` tasks would measure oh-my-design on its home field, not
general UI capability.

## 2. Tracks

### Skill Layer

Only the skill changes. Pin all of the following:

- model and exact model version
- agent/runtime version
- reasoning level
- task and starter commit
- prompt bytes
- operating system, browser, viewport, locale, and fonts
- network policy
- wall-time, context, and tool-call budgets

Minimum ablation for oh-my-design:

1. model only
2. model + raw `DESIGN.md`
3. model + portable OmD skill
4. OmD full harness (reported in Full System, not ranked here)

### Full System

Use the vendor's documented recommended workflow. Hooks, browser iteration,
specialist agents, checkpoints, and generated context files are allowed. Record
every intervention and report quality on a cost/time Pareto frontier.

### Evidence & Unknown

Mix verified fields, unresolved fields, and tempting fallbacks. A submission
fails if it promotes an unsupported value, font, component, or adjacent surface
as a product fact. Omitting the smallest unresolved field is correct; deleting
the rest of the verified reference is not.

## 3. Primary metric

```text
UI-Resolved@1
= tasks passing every critical gate on the first independent run / all tasks
```

Critical gates for the eventual private suite:

- build and protected regression tests pass
- hidden primary user journey passes
- task-specific design contract threshold passes
- no clipping, horizontal overflow, or reading-order failure at target viewports
- zero critical/serious automated accessibility violations plus required manual
  keyboard checks
- zero protected-unknown inventions
- visual-fidelity threshold when the task provides a visual target

These gates are objective and task-oracle-backed. Blinded human visual craft is
reported separately as `Ship Preference`; it does not turn an otherwise passing
task into a failure. This separation keeps `UI-Resolved@1` reproducible across
the full private set while still exposing whether practitioners would ship the
result.

`Reliability@3` is the share of tasks that pass all three independent runs. A
mean score is diagnostic only and must not allow polish to cancel a functional
failure.

## 4. Diagnostic vector (100 points)

| Dimension | Points | Evidence |
|---|---:|---|
| Task contract | 25 | protected tests and required product content |
| Design grounding | 20 | token/role/IA/copy agreement with the oracle |
| State and journey coverage | 15 | loading, empty, error, success, interaction |
| Responsive robustness | 10 | reflow, priority, clipping, target viewports |
| Accessibility | 10 | axe plus keyboard, focus, error, zoom/reflow checks |
| Ship preference | 10 | blinded pairwise practitioner preference, ties allowed |
| Efficiency | 5 | wall time, tokens, tool calls, intervention count |
| Evidence honesty | 5 | unsupported claims and protected unknowns |

The current development evaluator emits up to the first 85 diagnostic points.
It labels an all-green result `automated_gate_pass`; this is not
`UI-Resolved@1`. Efficiency is normalized only after all paired runs complete.
Ship preference is never filled by a single LLM absolute rating and is not part
of the `UI-Resolved@1` critical gate. Visual-target fidelity, where applicable,
is scored by the task oracle instead.

The development fixture records both 24px minimum and 44px recommended target
counts. Only the 24px minimum is currently gated; WCAG spacing exceptions are
not yet modeled, so target conformance remains a pilot limitation rather than a
general WCAG claim.

## 5. Human visual evaluation

- remove product and competitor names from screenshots
- randomize candidate labels and left/right order
- repeat a subset with A/B swapped
- allow ties and “both fail”
- ask “Would you ship this for the stated task?” before asking for taste
- use at least five independent practitioners on the public evaluation set
- publish Bradley–Terry or TrueSkill estimates with 95% confidence intervals
- publish judge agreement and order-reversal rates

Synthetic personas remain diagnostic. They report task success, steps versus
optimal, friction, heuristic violations, and abandonment—never SUS, NPS, or a
fabricated satisfaction score.

## 6. Reproducibility and sandboxing

1. Pin git commit, model snapshot, runtime binary, npm/Node/browser versions,
   fonts, OS image, and downloaded tarball SHA-256.
2. Prepare a new workspace for every preregistered task × variant × trial.
3. Keep the prompt, evaluator, oracle, and run manifest in a read-only control
   plane outside the submission's readable and writable tree.
4. Record a filesystem manifest before execution and verify control-plane plus
   submission hashes afterward.
5. Disable network at the OS/container boundary after dependencies are present.
6. Never expose SSH agents, real browser profiles, credentials, or project data.
7. Record hooks and executable files added by installers.
8. Keep prompt-only and hook/browser-enabled arms separate.
9. Preserve every scheduled success, failure, crash, timeout, and raw artifact;
   never overwrite or silently drop a trial.

The repository's current preparation script deliberately copies reviewed source
files instead of running third-party installation commands. It is a local pilot
convenience, not yet the read-isolated public execution boundary described
above.

## 7. Task quality and contamination

- maintain public development, private evaluation, and quarterly live sets
- use fictional brands and first-party/licensed assets for public tasks
- add canary copy and assets to detect memorized solutions
- test for textual and embedding similarity against public corpora
- calibrate every threshold with at least two valid implementations and
  intentionally defective mutants, including decoy hooks, partial interactions,
  clipping, broken focus order, unsupported claims, metadata tampering, and
  timeout/failure cases
- require a task's tests to accept the valid implementations and reject the
  relevant mutants before publication
- retire or repair ambiguous tasks; a benchmark is also software and must be
  continuously reverified

## 8. Pilot-to-public sequence

1. Internal P0 discovery: 12 tasks × every eligible condition × 1 run.
2. Internal P1 reliability: the same 12 tasks × every eligible arm × 3 trials.
3. Public v0.1: 24 hidden tasks × 4 eligible systems × 3 trials.
4. Include EN (8) and KO/JA/ZH-CN/ZH-TW (4 each) tasks.
5. Blind-evaluate eight representative tasks with at least five practitioners
   and report `Ship Preference` separately.
6. Calibrate automatic thresholds against human verdicts.
7. Publish task failures and limitations, not only wins.
8. Expand beyond 60 tasks and add a quarterly live set before calling the suite
   an industry benchmark.
