# 1.9.823 pre-provider isolated-auth failure

- Status: frozen before provider exposure
- Completed cells: 0 / 51
- Native Codex provider/model calls: 0 / 0
- Cursor/Claude calls: 0 / 0
- Local preflight: browser-harness doctor and Codex login-status checks passed. The controller recorded one pre-edit measurement through the already-running local `omd1823` browser connection; no provider-owned browser proof was attempted and no page content was sent to a model.
- Non-provider network scope: the browser-harness doctor performed its built-in PyPI release check. Browser-harness telemetry was enabled, so an anonymous PostHog event may also have been attempted; local evidence cannot prove delivery. No benchmark prompt, page body, task artifact, or model request was sent.
- Error: `codex exact runtime isolated auth JSON must be a regular file`
- Cause: the complete-block runtime preflight prepared the next cell's exact Codex home through the legacy auth path, creating `.benchmark/codex-home/auth.json` as a symlink. The exact provider runner then correctly rejected that symlink before its child-provider `spawn` boundary.
- Evidence: `.benchmark/events.jsonl` is zero bytes; no `run-result.json`, `final-message.txt`, controller score, or controller run record exists. The provider child `spawn` boundary was never reached. `execution-state.json` is `stopped-preregistered` with all 51 cells uncompleted.
- Outcome: the 1.9.823 root is retained and will not be reused. A code-fixed plan must use a fresh version, immutable plan, and fresh root.
