# Native browser Stop reconciliation smoke — 1.9.229

Status: **PASS within the declared final-boundary scope**
Host: Codex CLI 0.144.1
Model: `gpt-5.6-luna`, high effort
Fixture: frozen Git root `/private/tmp/omd-native-stop-reconcile-smoke-1.9.229`

## Acceptance result

The actual benchmark runner streamed the Codex JSONL event output to the path
provided to the project `Stop` hook. The model edited the product, ran one
static closure, made one native `agent-browser.browser_navigate` call, and
returned a final response. The Stop adapter reconciled that native call as the
single unresolved browser attempt before evaluating delivery.

| Condition | Result |
| --- | --- |
| Product edit | PASS — `before` → `after` |
| Static closure | PASS — one allowed attempt |
| Native browser emitted | PASS — one `mcp_tool_call` start |
| Native call reconciled at Stop | PASS — `browser_attempts: 1` |
| Browser outcome represented honestly | PASS — `browser_proof: unresolved` |
| Delivery ready | PASS |
| Unintercepted extra-call violation | PASS — 0 |
| Final response | PASS — reports `ERR_NAME_NOT_RESOLVED` rather than claiming visual success |

## Claim boundary

This is final-boundary accounting, not live native MCP interception. The
1.9.227 and 1.9.228 diagnostics established that wildcard and exact Codex MCP
matchers do not invoke the tested project hook. The runner-owned JSONL path lets
the Stop hook observe one native call and fail acceptance when extra calls were
allowed to execute. Normal interactive installs without that runner trace do
not receive this guarantee.

Events SHA-256: `188ff2b30d0a17f2ff5daf1652643d820a87588c5ebd041c4b52d2a828a75380`.
Policy state SHA-256: `ebff99e0e8969b3d688f0897190a473ffd035dc3c4100d95c54698c912505914`.
Product SHA-256: `61c4e7b7aaa7cc99ed44cf8d7b3664504942d37da5fbe9ad7f7681da78404c94`.
