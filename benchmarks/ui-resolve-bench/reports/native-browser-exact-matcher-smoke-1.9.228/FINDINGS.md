# Native browser exact-matcher diagnostic — 1.9.228

Status: **FAIL; host interception unsupported on the tested path**  
Host: Codex CLI 0.144.1  
Model: `gpt-5.6-luna`, high effort  
Fixture: frozen Git root `/private/tmp/omd-native-browser-exact-smoke-1.9.228`

Replacing the wildcard with exact `mcp__agent-browser__browser_navigate` did not change live behavior. Three native calls executed, the hook recorded zero browser attempts, and delivery stayed blocked. The offline trace correctly reports two recoveries and two after-ready violations.

This rules out wildcard syntax as the cause. On the tested `codex exec` + project hook + deferred `agent-browser` path, native MCP interception is unavailable even though Codex emits `mcp_tool_call` JSONL events. Production must not advertise PreTool enforcement for those calls.

The next bounded remedy is final-boundary reconciliation: the ephemeral benchmark runner streams its own event JSONL to the Stop hook; one native attempt closes proof as unresolved, while repeated calls are recorded as **unintercepted** and force the acceptance gate to fail. The normal shell/browser-harness PreTool enforcement remains unchanged.

Events SHA-256: `60009ff89f5b417c1b7c0c364f656ff6c5f472c33bee313a43abcf862f87d02c`.  
Policy state SHA-256: `18cadba4c8429b4cc091937ede6fc71a4b13b120b123041903aad00d7df07567`.
