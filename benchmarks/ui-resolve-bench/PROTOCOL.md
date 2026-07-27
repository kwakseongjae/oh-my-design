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

The public benchmark has separate Model, Skill Lift, and Harness leaderboards,
plus a non-ranked Prompt Arena and model×skill Transfer Matrix. Their fixed and
variable factors are defined in
[`BENCHMARK-FAMILIES.md`](./BENCHMARK-FAMILIES.md); results from different
families are never merged into one global rank.

Cross-runtime effort, wall-time, step, token, and cost controls follow
[`COMPUTE-CONTROL.md`](./COMPUTE-CONTROL.md). In particular, provider-native
effort labels are ordinal within a runtime and are never treated as equivalent
compute across providers.

### Model Track

Only the model snapshot changes. No third-party portable skill, harness, vendor
hook, or hidden candidate-specific system prompt is allowed. The agent shell,
tools, reasoning and context budgets, starter, task order, and environment stay
fixed. Model-native and model-plus-raw-`DESIGN.md` are separate conditions.

### Skill Lift Track

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
4. OmD full harness (reported in Harness Track, not ranked here)

### Harness Track

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

`Reliability@k` is the share of tasks that pass all `k` preregistered independent
runs. Pilot reports may name `Reliability@3`; internal candidates use
`Reliability@5`, and a Verified public result uses `Reliability@10`. A mean
score is diagnostic only and must not allow polish to cancel a functional
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
- use at least five independent practitioners for Preview and ten for Verified
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
   submission hashes afterward. Record a second product-only manifest that
   excludes installed skills, agent definitions, benchmark control files, and
   run-state directories; only this diff can prove delivery changed the UI.
5. Disable network at the OS/container boundary after dependencies are present.
6. Never expose SSH agents, real browser profiles, credentials, or project data.
7. Record hooks and executable files added by installers.
8. Keep prompt-only and hook/browser-enabled arms separate.
9. Preserve every scheduled success, failure, crash, timeout, and raw artifact;
   never overwrite or silently drop a trial.
10. Reject dirty candidate or vendor source trees by default. An explicitly
    allowed dirty diagnostic remains non-publishable and invalid for attribution.
11. Export every completed workspace through the normalized run-record schema
    before aggregation; do not hand-edit leaderboard rows.

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

1. Patch smoke: 3 tasks × candidate and control × 3 runs.
2. Internal P0 discovery: 12 tasks × every eligible condition × 1 run.
3. Internal candidate: the same 12 tasks × every eligible arm × 5 trials.
4. Public Preview: 24 hidden tasks × eligible systems × 5 trials.
5. Verified public: at least 24 hidden tasks × eligible systems × 10 trials.
6. Include EN (8) and KO/JA/ZH-CN/ZH-TW (4 each) tasks in the first 24.
7. Blind-evaluate representative tasks with five practitioners for Preview and
   ten for Verified; report `Visual Ship Preference` separately.
8. Publish min/median/mean/max, IQR, distribution intervals, every scheduled
   failure, and the hierarchical-bootstrap policy in
   [`STATISTICS.md`](./STATISTICS.md).
9. Expand beyond 60 tasks and add a quarterly live set before calling the suite
   an industry benchmark.
