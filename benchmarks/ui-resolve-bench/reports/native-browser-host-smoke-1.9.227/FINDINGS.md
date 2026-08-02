# Native browser real-host smoke — 1.9.227

Status: **FAIL; fresh diagnostic required**
Host: Codex CLI 0.144.1
Model: `gpt-5.6-luna`, high effort
Fixture: frozen Git root `/private/tmp/omd-native-browser-policy-smoke-1.9.227`

## Acceptance result

The production-built CLI installed the 1.9.226 opt-in policy with matcher `Bash|apply_patch|Edit|Write|mcp__agent-browser__browser_.*`. The model edited the product and completed one static closure, then emitted three native `agent-browser.browser_navigate` calls. None reached the project hook state.

| Condition | Result |
| --- | --- |
| Product edit | PASS — `before` → `after` |
| Static closure | PASS — one allowed attempt |
| Native browser emitted | PASS — three `mcp_tool_call` starts in Codex JSONL |
| First native call observed by hook | FAIL — `browser_attempts: 0` |
| Second native call denied | FAIL — all three calls executed |
| Delivery ready | FAIL — remained blocked |
| Offline trace honesty | PASS — three mechanisms, two recoveries, two after-ready violations, noncompliant |

## Diagnosis boundary

The canonical MCP name is not speculative: the Codex 0.144.1 source constructs `mcp__<namespace>__<tool>` and exposes that name in MCP Pre/Post payloads. The failed result therefore narrows the defect to live matcher/discovery behavior for this project-hook configuration, not the event normalizer.

The current wildcard matcher must not be treated as accepted. Freeze this root and run one fresh diagnostic with an exact native tool matcher. If exact matching works, production should install an explicit finite matcher list; if it does not, Codex native MCP enforcement remains host-blocked and only offline trace auditing can cover it.

Events SHA-256: `0afc85d6019fcd49f5228a31a51832deb75d77b0c141f36ef8f69e41e2531341`.
Policy state SHA-256: `6be18cfb93f96521892a1b77d0ea1c1b5216abb40cd29c640ef86cd8ab15ef70`.
