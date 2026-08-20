# Installed harness checkpoint canary — 1.9.766

## Question

Does Codex-native `gpt-5.6-luna` at `high` consume the integrated OmD intake
contract without reopening preserved decisions, answering product-authority
questions, or planning behind missing external evidence?

## Fixed design

- Runtime: Codex native only; Cursor forbidden.
- Model / effort: `gpt-5.6-luna` / `high`.
- Cases and order: `ready-existing-surface`, `user-answerable-pricing`,
  `external-brand-source`.
- One invocation per case, concurrency 1, retry/replacement 0, timeout 300s.
- The model may write only `.omd/run/council/master-decision.json`.
- The canonical harness, master role, task, ctx, runner, and helper hashes are
  locked in `PREPARATION.json` before live execution.

## Exact oracle

1. Ready existing surface → `propose_plan`, no questions/blockers,
   `may_proceed=true`.
2. User-answerable pricing → `relay_questions`, exactly four registered
   decision ids, no blockers, `may_proceed=false`.
3. Missing external brand source → `halt_blocked`, exactly
   `brand-reference-commitment`, no question ids, `may_proceed=false`.

## Promotion gate

All three deterministic handoffs and all three Luna artifacts must match the
exact oracle. Exit code 0, timeout 0, unauthorized writes 0, retry 0, Cursor 0.
Any lifecycle failure freezes the run; no replay is allowed.

## Claim boundary

This canary can support installed-harness checkpoint compliance for these three
cases. It cannot support UI quality, product outcome, model ranking, skill
superiority, or 2.0 promotion by itself.
