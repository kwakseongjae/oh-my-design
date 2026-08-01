# Proof-policy real-host recovery smoke — 1.9.212

Status: **recovery PASS; outcome attribution FAIL; promotion HOLD**  
Host: Codex CLI 0.144.1  
Model: `gpt-5.6-luna`, high effort  
Fixture: fresh Git root `/private/tmp/omd-proof-policy-recovery-smoke-1.9.212`

## Contract

The prompt required one product edit and deliberately made browser proof the first verification attempt. The model was told to follow the installed policy's `Next allowed step` after any denial and to stop when the result became ready. The production-built CLI installed the Codex skill bundle and opt-in proof policy into the fresh fixture. User configuration remained loaded and hook trust was explicitly bypassed for this vetted automation run.

## Observed sequence

| Sequence | Event | Policy result |
| --- | --- | --- |
| 1 | `index.html` h1 `before` → `after` | allowed; revision opened |
| 2 | `browser-harness capture_screenshot` | denied; `static-closure-required` guidance delivered |
| 3 | one static verification (`rg` exact expected h1) | allowed; passed |
| 4 | one browser proof retry | allowed; command exited 1 after printing browser-harness usage |
| 5 | delivery | model stopped without another tool call |

The installed state contains six decisions, one browser attempt, no duplicate static closure, no browser recovery violation, and no verification-after-ready violation. This proves the state-specific guidance repaired the behavioral dead end seen in 1.9.210.

## Discovered attribution defect

The browser command visibly failed with exit code 1, but the saved policy state recorded `browser-proof-passed` and `browser_proof: closed`. Codex exposes shell `tool_response` to PostToolUse as a formatted string. The current mapper treats any non-empty response string that does not begin with `error` or `failed` as success, so a formatted non-zero exit can be promoted incorrectly.

The host policy still limited the model to one browser attempt and stopped later verification, but its proof outcome label is not trustworthy on this path. Therefore this smoke does **not** authorize a scored comparison or broader policy promotion.

## Decision

Keep proof policy opt-in. Next, make string response parsing fail closed on explicit non-zero exit markers while accepting explicit zero-exit markers, add cross-host fixtures, and rerun a provider-free contract suite. Then repeat the real-host recovery smoke in a new root with a browser command that exits non-zero; the saved outcome must be `unresolved`, not `passed`.
