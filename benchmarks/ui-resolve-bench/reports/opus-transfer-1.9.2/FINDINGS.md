# Opus 4.8 Transfer Matrix — runtime calibration findings

Run on 2026-07-22 against the frozen preregistration in this directory.

## Disposition

The calibration is **complete but invalid for comparison**. Both scheduled
artifacts were generated and evaluated, but Claude Code `2.1.212` did not honor
the runner's absolute sandbox write allowances on macOS. The raw run contained
four sandbox permission failures; the OmD run contained six and reached the
900-second cap before returning a final message.

The original raw export classified the process as valid because Claude's child
process exited zero even though several Bash tool results had failed. The
post-run audit fixed the exporter to read `events.jsonl`, retain tool and
sandbox diagnostics, and fail closed. The corrected records are:

- `/tmp/ui-resolve-opus-transfer-1.9.2/raw.record.final.json`
- `/tmp/ui-resolve-opus-transfer-1.9.2/omd.record.final.json`

Do not use this cell for a skill win/loss, model ranking, or UI-Resolved lift.

## Artifact observations

These are diagnostic observations only, not comparable benchmark scores.

| condition | delivery | deterministic artifact | tool / sandbox errors | uncached input + output | cached read | wall | provider price equivalent |
|---|---:|---:|---:|---:|---:|---:|---:|
| Raw DESIGN.md | child exit 0, post-hoc invalid | 81 / 85 | 6 / 4 | 131,773 | 1,402,319 | 663,305 ms | $2.8483 |
| OmD portable | timeout, invalid | 85 / 85 | 8 / 6 | 148,788 | 1,718,082 | 900,062 ms censored | $3.2655 |

The raw artifact missed the primary-action color oracle. The OmD artifact met
all deterministic gates, but the runtime did not deliver a final response. OmD
used 12.91% more uncached input plus output, 22.52% more cached reads, and
14.65% more provider price-equivalent work. Its wall delta is censored by the
timeout and must not be interpreted as a stable latency estimate.

`provider price equivalent` is Claude Code's API-price-equivalent telemetry. It
is not evidence that the subscription account was billed that amount.

## Root cause

The two runs did load the intended exact model and the OmD skill. The dominant
failure was runtime isolation, not missing activation:

1. Claude Code's shell wrapper writes cwd tracking files beneath its temp root.
2. Version `2.1.212` rejected writes and reads that the runner had explicitly
   allowed, including paths under the prepared workspace and `/tmp/claude-*`.
3. The OmD verification contract kept retrying local validation after these
   infrastructure failures, consuming the remaining budget and timing out.
4. Anthropic's later changelog explicitly records fixes for absolute
   `sandbox.filesystem.allowWrite` paths and output redirection into allowlisted
   temp directories.

Claude Code `2.1.217` was installed after the frozen run. That remediation does
not retroactively make these observations valid; a new short calibration cell
must pass a clean Bash probe before any scored rerun.

## Product implication for 1.9.3

The result exposed two independent improvements:

- **Runner fail-closed:** any sandbox permission error is infrastructure
  invalidity even when Claude's top-level result reports success.
- **Verification budget:** `omd:apply` needs a bounded verification plan, an
  infrastructure-error stop condition, and a guaranteed final delivery reserve.

The next scored Opus cell stays blocked until the updated runner completes a
read-only sandbox probe with zero tool and sandbox errors. After that, rerun
this one task once per condition as a calibration replacement; only then resume
the fresh task-contract `0.3.0` matrix.

## Sources

- https://www.anthropic.com/news/claude-opus-4-8
- https://support.claude.com/en/articles/11940350-claude-code-model-configuration
- https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan
- https://code.claude.com/docs/en/authentication
- https://code.claude.com/docs/en/sandboxing
- https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md
