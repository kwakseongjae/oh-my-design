# Source-contract Reliability@3 replacement — 1.9.722

This is the provider-zero replacement for the frozen 1.9.721 root. Task bytes, fixed order, runtime, model, effort, timeout, no-retry policy, and success criteria are unchanged. The sole methodological change is an explicit `cross-task-reliability` admission policy.

The policy preserves each task's distinct prompt, starter, baseline evidence, and source-contract hashes. It requires all three cells to share the exact variant, system, runtime, model, effort, timeout, clean skill hash, objective evaluator, and provider-sealed source-contract shape. The task ids must be distinct and must match the fixed preregistered task-lock order.

The fixed order is orbital optics transfer, seed-vault accession, then audio-archive ingest. Each cell uses Codex with `gpt-5.6-luna`, high effort, a 720-second timeout, one product revision, no retry, and no replacement. Execution is checkpointed one new cell at a time.

A cell passes only at 85/85 with resolved UI, one product revision, one successful and zero failed static closures, zero user handoffs, proof compliance, and unchanged sealed inventory. Reliability@3 passes only at 3/3. Inventory drift, a second product edit, failed static closure, or contract-proof noncompliance freezes the remaining cells.

The experiment is diagnostic only. It does not enter public ranking, establish provider superiority, or promote a 2.0 release gate by itself. External execution remains gated until the new root passes provider-zero preparation and admission.
