# Payout frontier skill comparison — 1.9.103 findings

Status: **deterministic comparison complete; blind preference pending**.

The fresh `/tmp/u19103` denominator completed all six preregistered cells.
Every cell was valid, UI-Resolved, evidence-honest, and scored 85/85. There
were no provider, timeout, pacing, evaluator, attribution, retry, fallback,
repair, failed-cell replacement, or model-substitution events.

## Deterministic result

| Arm | Valid / scheduled | UI-Resolved | Reliability@3 | Objective median |
|---|---:|---:|---:|---:|
| Exact OmD `omd-apply` | 3 / 3 | 100% | 100% | 100 |
| Exact Impeccable prompt-only | 3 / 3 | 100% | 100% | 100 |

The matched objective win/tie/loss count for Impeccable relative to OmD is
`0 / 3 / 0`. The observed UI-Resolved lift and objective lift are both zero.
This task therefore does not support a deterministic superiority claim for
either skill.

All three runs in both arms passed the approval-specific behavior contract:
the dialog began closed, opened with focus inside, cancelled with trigger-focus
restoration, and confirmed with a visible status change, close, and restored
trigger focus. Four viewport geometries, keyboard focus, axe serious/critical,
protected hooks/facts, DESIGN grounding, and unknown-evidence handling also
passed.

## Descriptive efficiency

| Arm | Wall time mean | Wall time median | Token mean | Token median |
|---|---:|---:|---:|---:|
| OmD | 321,257 ms | 334,675 ms | 182,213 | 148,689 |
| Impeccable | 556,041 ms | 464,729 ms | 312,106 | 239,720 |

OmD used less time and fewer reported tokens in this small sample. These are
descriptive signals only. The exported execution metadata marks latency as not
comparable, the sample contains one task family and three trials, and provider
cost equivalents were unavailable. Efficiency cannot decide the winner.

## Execution integrity

- six controller invocations each added exactly one cell;
- all five inter-cell waits passed the 120–125 second monotonic window;
- the first three runs used `jade / ivory / ivory` and the last three
  `jade / jade / ivory`, preserving the locked 2/1 arm-first balance;
- the same task version, core prompt, starter/DESIGN tree, model selector,
  effort, timeout, and evaluator were used throughout;
- a Codex sandbox-only cache preflight returned `EPERM` before invocation 4
  existed or a cell started; the checkpoint remained 3/6. The authorized
  controller invocation then passed the same runtime preflight and became the
  sole recorded invocation 4. No benchmark cell was retried.

## Decision

Retain the current OmD skill unchanged. There is no repeated correctness
failure from which to derive a new rule, and adding guidance from a ceiling-tie
task would be benchmark overfitting.

The deterministic plane cannot see visual preference among eligible 85/85
artifacts. The next valid step is a same-trial anonymous owner review on
Functionality, Usability, Fidelity, and Ship Preference. Identity stays hidden
until the three matched judgments are exported and locked. No public skill
ranking or Grok model claim is authorized by this Internal comparison.
