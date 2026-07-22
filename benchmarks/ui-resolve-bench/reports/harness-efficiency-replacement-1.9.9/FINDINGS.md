# Harness efficiency replacement — 1.9.9 findings

Run on 2026-07-23 against the preregistration in this directory.

## Disposition

The matrix stopped fail-closed on its first portable cell. The provider itself
completed normally with exact Opus 4.8, child exit zero, a final response, and a
product-only `index.html` diff. The benchmark runner nevertheless forced process
exit one because it classified a sandbox-blocked optional `qlmanage` preview as
an infrastructure sandbox breach.

This is a benchmark-classification failure, not a valid product observation.
The frozen 18-cell denominator is 1 attempted, 0 valid, and 17 not started.
There is no retry and no quality, paired, reliability, efficiency, or Pareto
decision.

## Stop record

| signal | observed |
|---|---:|
| Stop cell | `pricing-t1-portable` |
| Scheduled / attempted / valid / not started | 18 / 1 / 0 / 17 |
| Executor stop reason | `process-failure` |
| Provider child exit / result subtype | 0 / success |
| Runner-normalized exit | 1 |
| Timeout / final response | no / present |
| Wall time | 610,152ms |
| First / last product write | 367,160 / 549,510ms |
| Uncached input + output tokens | 78,197 + 48,970 |
| Tool errors | 2 |
| Runner-classified recoverable / infrastructure | 1 / 1 |
| Product diff | `index.html` only |

One error was an ordinary ambiguous Edit match that the parent repaired. The
other came from an optional QuickLook command whose result was
`sandbox initialization failed: Operation not permitted`. The current error
summarizer matches any error text containing “operation not permitted” and
therefore grouped the preview limitation with a denied built-in file tool or
broken Claude shell cwd. `run-claude` then rewrote an otherwise successful
provider exit to one.

This conflicts with the preregistered rule that a blocked optional verification
mechanism is recoverable when the parent reports it unresolved, does not author
a substitute verifier, and still delivers a final product diff.

## Secondary classifier finding

The 1.9.9 replacement-verifier detector also flags the retained event trace
because the parent created `verify.html` for a real headless Chrome attempt.
That HTML probe is not a DOM shim, mock browser, or replacement runtime. The
detector correctly catches the preserved 1.9.7 `.t/verify.js` shim but its path
rule is too broad for HTML files intended for an actual browser.

Both defects must be fixed and regression-tested against retained 1.9.7,
1.9.8, and 1.9.9 event traces before another provider matrix is registered.

## Forensic artifact only

After the stop, the frozen evaluator was run once against the retained product
artifact for root-cause separation. It returned 85/85 with all critical gates,
responsive viewports, interactions, accessibility, design grounding, and
Evidence & Unknown passing. That score is post-stop forensic evidence only. It
does not make the cell valid and must not enter any aggregate or paired result.

## Decision

Mark 1.9.9 calibration failed. Do not resume `/tmp/u199`, reclassify its cell in
place, or run its 17 unstarted workspaces. Use 1.9.10 for the bounded benchmark
robustness patch: context-aware optional-renderer error classification plus a
narrow replacement-verifier authorship rule. A future full matrix requires a
new preregistration and fresh workspaces.

