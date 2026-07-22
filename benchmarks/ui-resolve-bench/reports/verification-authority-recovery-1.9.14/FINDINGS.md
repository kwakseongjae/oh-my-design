# Verification authority recovery — 1.9.14 findings

Executed once on 2026-07-23 under the frozen preregistration. The workspace at
`/tmp/u1914` is retained and was not retried.

## Disposition

Mark 1.9.14 calibration complete.

- exact `claude-opus-4-8` / xhigh, Claude Code 2.1.217
- provider and child exit zero; final response present
- frozen evaluator 85/85, UI-Resolved, all six critical gates, and Evidence &
  Unknown pass
- first/last product write 408,324ms / 408,324ms; wall 476,800ms
- uncached tokens 134,824
- exactly one Opus-requested call to each required specialist; Agent errors 0
- tool/infrastructure/sandbox/cwd errors 0
- one allowed product file changed: `index.html`
- replacement verifier, DOM shim, mock browser, and authored verification
  program count 0

## Authority behavior

The parent performed one direct headless Chrome `--dump-dom` attempt. It
received no usable output, did not retry a browser variant, and did not create
`verify.*`, `check.*`, `probe.*`, a shell file, CDP automation, or a new test
runner. It ran only static observations available without authoring files, then
separated its final response into implemented, verified, and unresolved.

Browser interactions, rendered overflow, and instrument-sampled contrast were
reported as unobserved rather than passed. The external frozen evaluator then
independently verified the interactions, desktop/390/320/200% geometry,
keyboard/focus, axe, design grounding, and evidence honesty.

The direct Chrome attempt produced no classifier-matched optional environment
error text, so `optional_verifier_environment_error_count` remained zero. The
preregistered acceptance did not require that optional signal; it required any
such signal, if present, to be recoverable. No execution-authority error was
observed.

## Verification

Before generation, source commit `dc27f8f` passed:

- focused product/benchmark contract tests: 26/26
- full root tests: 207 passed / 1 conditional skip
- TypeScript: pass
- CLI build: pass
- JSON and `git diff --check`: pass
- catalog count drift: 440 references / 20 skills / 18 agents

## Decision

The bounded authority contract recovered the exact stopped behavior without
reducing product quality or losing delivery. This single cell does not
retroactively pass 1.9.13 and cannot establish harness efficiency or
superiority. It may unlock a fresh preregistered 1.9.15 repeated matrix in new
workspaces.
