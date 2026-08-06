# Isolated named-browser terminal runner Reliability@3 — 1.9.748

This provider-zero experiment replaces frozen 1.9.747 without replaying microscopy. It uses the two tasks frozen before exposure and one fresh herbarium task. The controller must see a dedicated local CDP Chrome as the exact active `omd1748` browser-harness connection before any provider call.

The browser has no user profile, login state, or cloud dependency. `browser_execution_contract` requires the shared runtime directory and exact named socket; the model receives only that socket, not the CDP endpoint, and the shipped runner must attach rather than launch a browser.

The fixed order is manuscript, geology, then herbarium. All cells use Codex, `gpt-5.6-luna`, high effort, a 720-second timeout, concurrency one, a fixed 30-second pause, and no retry or replacement.

A pass requires 85/85, all critical gates resolved, one product revision, static closure 1/0, zero user handoffs, unchanged sealed inventory, exact candidate-to-final bytes, and analyzable shipped-runner proof with an existing named attachment and zero recovery. Reliability requires 3/3; a lifecycle failure freezes the remainder.

This remains internal diagnostic evidence. Provider execution is forbidden until this exact plan is committed, provider-zero preparation passes, and runtime preflight independently confirms the named browser, isolated Codex auth, task/skill locks, and absent execution artifacts.
