# Renderer observability — 1.9.12 findings

Calibrated on 2026-07-23 from the immutable 1.9.11 event trace. No new provider
generation was run for this bounded telemetry patch.

## Disposition

Source commit `ad3c3b6` closes the shell-masked renderer telemetry gap without
changing execution validity or explicit tool-error totals.

The classifier now:

1. continues to derive `tool_error_count`, recoverable errors, and
   infrastructure errors only from `is_error:true` tool results;
2. independently observes known `qlmanage` or headless Chrome environment
   blocks in every linked result; and
3. continues to fail closed on cwd, built-in permission, auth, model, timeout,
   evaluator, and export failures.

## Retained-trace integration replay

| signal | frozen 1.9.11 output | 1.9.12 classifier replay |
|---|---:|---:|
| explicit tool errors | 3 | 3 |
| recoverable / infrastructure | 3 / 0 | 3 / 0 |
| optional renderer environment blocks | 0 | 1 |
| sandbox / cwd errors | 0 / 0 | 0 / 0 |

The newly observed block is linked to a real headless Chrome command and
contains Crashpad and ProcessSingleton environment failures. It is telemetry,
not a replacement browser or a fabricated verifier. The stored 1.9.11 result
remains inconclusive; this replay does not rewrite it.

## Verification

- focused Claude runner and matrix tests: 24/24
- full root tests: 207 passed / 1 conditional skip
- TypeScript: pass
- CLI build: pass
- `git diff --check`: pass
- catalog count drift: 440 references / 20 skills / 18 agents

## Decision

Mark 1.9.12 calibration complete. A fresh preregistered repeated matrix may be
opened as 1.9.13. It must use new workspaces and the 1.9.12 classifier from the
start; 1.9.9 and 1.9.11 remain immutable and outside its denominator.

