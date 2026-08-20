# Benchmark robustness — 1.9.10 findings

Calibrated on 2026-07-23 from retained 1.9.7, 1.9.8, and 1.9.9 event traces.
No provider generation was run for this deterministic classifier patch.

## Disposition

The two benchmark-classification defects that stopped 1.9.9 are closed in
source commit `67df331`.

1. Claude tool-error classification now joins every error result to its source
   tool use. A known environment block from optional `qlmanage` or headless
   Chrome rendering is recoverable; a Claude shell cwd failure or denied
   built-in file/shell tool remains infrastructure and fail-closed.
2. Replacement-verifier authorship now permits HTML files that are passed to a
   real browser. It still rejects verifier scripts, explicit DOM shim or mock
   browser paths, and authored DOM/browser implementations.

The fix does not mutate, resume, or retroactively validate the failed 1.9.9
matrix.

## Frozen classifier cases

| case | expected | observed |
|---|---|---|
| Claude shell `cwd-*` operation denied | infrastructure | infrastructure |
| Built-in Edit/Write/Read/Bash permission denied | infrastructure | infrastructure |
| Ordinary red verifier/Edit result | recoverable | recoverable |
| `qlmanage` sandbox initialization blocked | optional-renderer recoverable | optional-renderer recoverable |
| Real-browser `probe.html` / `verify.html` | allowed | allowed |
| Explicit `dom-shim` / `mock-browser` path | replacement verifier | replacement verifier |
| `.t/verify.js` containing a DOM implementation | replacement verifier | replacement verifier |

## Retained-trace replay

The replay reads the immutable event logs rather than rewriting their stored
run results.

| trace | tool errors | recoverable / infra / optional renderer | replacement authored |
|---|---:|---:|---:|
| 1.9.7 timeout harness | 0 | 0 / 0 / 0 | yes · `.t/verify.js` |
| 1.9.8 passed recovery | 1 | 1 / 0 / 0 | no |
| 1.9.9 stopped portable | 2 | 2 / 0 / 1 | no |

The 1.9.9 stored run result remains invalid because it was produced by the old
classifier. The replay establishes only that the bounded rules now separate
optional-renderer limitations from execution authority failures and distinguish
a real browser probe from a replacement runtime.

## Verification

- focused Claude runner and matrix tests: 23/23
- full root tests: 206 passed / 1 conditional skip
- TypeScript: pass
- CLI build: pass
- Node syntax and `git diff --check`: pass
- catalog count drift: 440 references / 20 skills / 18 agents

## Decision

Mark 1.9.10 calibration complete. Any new provider comparison must use a fresh
preregistration and fresh workspaces. Keep the fail-closed boundary for actual
cwd, permission, auth, quota, model, Agent, timeout, evaluator, and export
failures. Do not use the repaired classifier to backfill a valid 1.9.9 row.

