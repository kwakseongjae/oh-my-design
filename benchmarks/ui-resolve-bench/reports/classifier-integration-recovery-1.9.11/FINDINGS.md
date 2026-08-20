# Classifier integration recovery — 1.9.11 findings

Executed once on 2026-07-23 under the frozen preregistration. The workspace at
`/tmp/u1911` is retained and was not resumed or retried.

## Disposition

The product run is valid evidence, but the classifier recovery is
`inconclusive-path-not-observed` under its original measurement contract.

- exact `claude-opus-4-8` / xhigh, Claude Code 2.1.217
- provider and child exit zero; final response present
- frozen evaluator 85/85, UI-Resolved, all six critical gates, and Evidence &
  Unknown pass
- first/last product write 258,593ms / 332,121ms; wall 505,230ms
- one allowed product file changed: `index.html`
- no replacement verifier, DOM shim, or mock browser authored
- three recoverable tool errors; infrastructure/sandbox/cwd counts zero

The agent did invoke headless Chrome. Chrome emitted Crashpad write denials,
`Failed to create socket directory`, and `Failed to create a ProcessSingleton`.
However, the command piped output through `tail`, and Claude Code recorded the
linked tool result as `is_error:false`. The frozen 1.9.11 classifier inspected
only explicit error results, so its stored optional-renderer count remained
zero. Acceptance required that count to be at least one.

## Decision

Do not retroactively pass 1.9.11 and do not use it for quality, efficiency,
harness, model, or frontier claims. Preserve its 85/85 artifact as valid product
evidence and its classifier disposition as inconclusive.

The newly discovered issue is a telemetry gap, not an execution-authority
failure. A separate 1.9.12 patch may observe known renderer environment blocks
in all linked tool results while leaving explicit tool-error totals unchanged.

