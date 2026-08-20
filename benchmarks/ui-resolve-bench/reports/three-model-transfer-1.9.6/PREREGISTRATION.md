# Three-model/runtime transfer smoke — 1.9.6

Locked before generation on 2026-07-22.

## Question

Does the portable OmD apply contract remain attributable, executable, and
evidence-honest across the three locally available frontier model/runtime cells
without regressing the paired raw-DESIGN.md control?

This is a compatibility and failure-discovery smoke. It is not a model
leaderboard, a runtime-neutral causal estimate, or evidence that OmD is the best
UI skill.

## Frozen matrix

- Benchmark family: `factorial` (Transfer Matrix calibration)
- Task: `pricing-conversion-v0.1`
- Task contract: `0.3.0`
- Conditions per model/runtime cell: `raw-design-md`, then `omd-portable`
- Trials: one per cell and condition; six scheduled runs
- Output root: `/tmp/u196`
- Timeout: 900 seconds per run
- Reasoning/effort: `xhigh`
- Runner compatibility commit: `a6be981`
- Evaluator: the frozen deterministic Chrome/axe evaluator already attached to
  task contract `0.3.0`

| Cell | Agent runtime | Exact model |
|---|---|---|
| Terra | Codex CLI | `gpt-5.6-terra` |
| Fable | Claude Code `2.1.217` | `claude-fable-5` |
| Opus | Claude Code `2.1.217` | `claude-opus-4-8` |

Fable and Opus share Claude Code while Terra uses Codex CLI. Cross-row
differences are therefore model-plus-runtime observations. Only raw-versus-OmD
comparisons inside the same row are paired.

## Frozen Evidence & Unknown slice

The task freezes a complete DESIGN.md contract and also freezes unknown product
claims and unsupported proof structures. The evaluator requires a non-empty
evidence ledger, zero protected unknown claims, and zero unsupported testimonial,
logo-wall, or social-proof structures.

The 1.9.5 reference-query implementation remains fixed during this experiment,
but this task does not invoke semantic reference search or compare catalog
ranking quality. It measures whether the downstream portable apply contract
preserves evidence boundaries across model/runtime cells. Reference-quality
status transfer remains a separate future task-pack expansion.

## Isolation and attribution

- Raw and OmD receive the same starter, task prompt, DESIGN.md, model, effort,
  timeout, local files, and frozen evaluator.
- Only OmD receives the canonical portable `omd:apply` skill plus its explicit
  activation delta.
- Fresh prepared workspaces are used for every run.
- Auto-memory, session persistence, MCP, Chrome integration, remote assets,
  package installation, and network access are disabled.
- Claude runs require unshadowed first-party subscription authentication and an
  immutable full model ID. Codex runs use ephemeral, ignored-user-config mode.
- Every scheduled cell remains in the denominator.

## Validity, acceptance, and stop rule

A run is valid only when model/auth preflight succeeds, the process completes
without timeout, the runner reports a final response and product-only diff, no
Claude infrastructure/sandbox/cwd error occurs, the frozen evaluator completes,
and a normalized record is exported.

The smoke passes its bounded hypothesis only when:

1. all six runs are valid and attributable;
2. all six pass the Evidence & Unknown gate;
3. OmD has no within-row UI-Resolved loss against raw DESIGN.md; and
4. no OmD cell introduces an unsupported claim or proof structure absent from
   its paired control.

An auth, quota, model-resolution, timeout, sandbox, cwd, or runner failure stops
generation. The failed cell is preserved and there are no silent retries,
resumes, model fallbacks, or replacement outputs inside this preregistration.

## Reporting limits

Report every run's validity, exact runtime/model attribution, UI-Resolved state,
objective points and critical gates, evidence diagnostics, product diff, wall
time, and available token telemetry. Descriptive within-row raw/OmD deltas are
allowed. One public task with one trial cannot support a confidence interval,
model ranking, model-agnostic lift, efficiency claim, frontier claim, or public
superiority statement.
