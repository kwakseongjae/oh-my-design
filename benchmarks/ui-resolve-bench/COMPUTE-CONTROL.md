# Model comparison compute-control protocol

UI-Resolve compares a **model × runtime system**, not an abstract model name.
`high`, `xhigh`, extended thinking, and provider-default reasoning are
runtime-native ordinal settings. They do not represent equal inference compute
across providers and must never be relabelled as though they do.

This protocol applies to future Luna, Terra, Sol, Opus 5, Fable 5, Sonnet 5,
Composer 2.5, and Grok 4.5 comparisons. Exact selectors and runtime versions
remain unresolved until a preregistration is locked.

## What other benchmarks control

- [SkillsBench](https://www.skillsbench.ai/skillsbench.pdf) pairs no-Skill and
  Skill conditions, uses deterministic verification, sets temperature to zero,
  varies max rounds by task tier, uses per-task 600–1,200 second timeouts, runs
  five main-condition trials, and performs no primary-condition retries. It
  reports input and output tokens separately and discloses when a runtime does
  not expose complete usage.
- [Harness-Bench](https://arxiv.org/abs/2605.27922) fixes the task state,
  external budget, timeout, and evaluator while preserving each harness's
  native prompting, tools, state, and recovery behavior. It reports the result
  as a model–harness configuration, not a pure model effect.
- [OSWorld](https://github.com/xlang-ai/OSWorld) freezes an action budget
  (`max_steps`) and execution pacing in a reproducible VM. This is a useful
  precedent for keeping action limits separate from token limits.
- [SWE-bench](https://www.swebench.com/SWE-bench/api/harness/) exposes explicit
  evaluation timeouts and preserves test-based resolved status.
- [METR](https://evals.alignment.org/time-horizons/) runs multiple independent
  attempts under token and time limits, then checks whether the token budget
  was sufficient. Its “human task duration” is a difficulty covariate, not the
  agent's wall-clock latency.
- Recent benchmark audits from
  [OpenAI](https://openai.com/index/separating-signal-from-noise-coding-evaluations/)
  and the
  [Agentic Benchmark Checklist](https://arxiv.org/abs/2507.02825) show that
  broken tasks, grader mismatch, and contamination can overwhelm apparent model
  differences. Task and evaluator audits are therefore publication gates.

## Three comparison modes

### 1. Native capability

Use the exact, preregistered runtime-native effort setting intended for each
system. Freeze the model selector, runtime binary, provider route, and effort
argument independently. Apply a common wall-clock timeout, task, environment,
tool permission set, and retry policy.

This is the default public Model Track. It answers “which named system delivers
better under its declared production setting?” It does not answer “which base
model is intrinsically better at equal compute?”

### 2. Iso external budget

Use only systems for which the same hard wall-clock and action/round cap can be
enforced. A token cap is common only when every runtime exposes a reliable hard
cap with compatible semantics. Systems without that control belong in a
separate stratum rather than receiving an estimated cap.

This mode compares behavior under the same external envelope. Native internal
reasoning and context management remain part of the system.

### 3. Effort scaling

Run each system at multiple native effort levels and publish its own
quality–time–token curve. Compare curves and Pareto frontiers; do not align
`medium`, `high`, or `xhigh` labels across vendors.

## Required execution controls

Every schema `0.3` matrix must lock:

- exact model selector, runtime version/hash, provider route, and auth mode;
- `effort_semantics=runtime-native-ordinal-not-cross-provider-equivalent`;
- temperature as either `explicit-fixed` or `runtime-default-frozen`;
- one wall-clock timeout per matrix;
- serial execution (`max_concurrency=1`) for comparable wall latency, otherwise
  latency is `descriptive-only`;
- hard or observed-only step and token budgets, never a fictional hard cap;
- fresh workspace and independent trial state;
- no primary retry; a task timeout is a valid failure;
- infrastructure failure retention followed by matrix freeze and a newly
  preregistered replacement, never an invisible retry;
- balanced task/order rotation and unchanged evaluator.

## Token and cost accounting

Store the following without folding them into one opaque number:

1. fresh input tokens;
2. cached input tokens;
3. output tokens;
4. reasoning output tokens when the runtime reports them;
5. provider-reported cost, or a separately labelled price-equivalent computed
   from a pinned public price snapshot.

`total_tokens` is fresh input plus output for continuity with existing reports.
Cached input and reasoning tokens remain visible alongside it. Missing
reasoning-token telemetry is `not-reported`, never zero-cost reasoning.

Primary quality ranking never changes because of cost. Among statistically
indistinguishable valid systems, publish median/P90 wall time, token
distributions, cost per scheduled trial, and a quality–cost Pareto view.
Timeouts and failed trials remain in spend totals. Cost-per-success may be shown
only with the raw success count and total spend.

The aggregator therefore uses every valid scheduled run—not only successful
completions—for wall-time, token, tool-call, intervention, and cost
distributions. It exposes usage-telemetry coverage and refuses to mark
efficiency publication-ready unless every valid run has complete input/output
usage and one consistent execution-control contract.

## Repetition and reporting

- Patch calibration: 3 trials per cell.
- Internal candidate: 5 trials per task.
- Public Verified: 10 trials per task.
- Report min, median, mean, max, IQR, P90, Reliability@k, and hierarchical
  bootstrap intervals.
- Report usage-telemetry coverage. If input/output usage is incomplete for any
  system, token and cost ordering is non-comparable.
- Keep Model, Skill Lift, Harness, and Prompt Arena denominators separate.

## Current Cursor limitation

Cursor Agent reports `Cursor Grok 4.5 High` and `Composer 2.5` display names,
not immutable provider model IDs, and exposes no provider effort flag. These
runs can calibrate the internal model×runtime pipeline, but cannot support a
public pure-model leaderboard until immutable attribution becomes available.
