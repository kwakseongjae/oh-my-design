# Provider routing and billing safety

This policy is fail-closed for benchmark execution. It does not start a model call; it only decides whether a runner may start one.

## Fixed routes

| Model | Allowed runtime | Billing rule |
| --- | --- | --- |
| `gpt-5.6-luna` | **RETIRED 2026-08-14** (was: Codex) | no new calls |
| `gpt-5.6-sol` | **RETIRED 2026-08-14** (was: Codex) | no new calls |
| `cursor-grok-4.5-high` | Cursor | Included usage only |
| `grok-4.6` | Grok Build CLI (`~/.grok/bin/grok`, headless) | SuperGrok subscription (shared weekly pool) |

Owner decision 2026-08-14: Luna and Sol are retired for all roles. `grok-4.6`
is now both the benchmark model-under-test (isolated run-grok lane, see
`docs/OMD_2_0_GROK_RESTART_SEED.md`) and the implementation-worker model
(grok-fleet contract). Claude Fable orchestrates, plans, and reviews. The Luna
epoch `caf0e62d` (terminal 4/48) is permanently frozen as immutable diagnostic
evidence and is never resumed; cross-model score comparison against it is
forbidden.

Cursor is not a route for Luna or Sol. Cursor live execution is currently reserved for the Grok lane. Other Cursor model selectors are denied by the OmD runner even if an older matrix lists them.

## Grok Build CLI lane (2026-08-14 owner directive, superseding Sol/Luna)

`grok-4.6` through the headless Grok Build CLI now serves two separated lanes:

1. **Worker/reviewer lane** (replaces `gpt-5.6-sol`): harness/product
   implementation, test verification, independent review. Never enters the
   benchmark denominator; time/tokens reported separately.
2. **Benchmark MUT lane** (replaces `gpt-5.6-luna`): comparison cells run in
   an isolated HOME (frozen `auth.json`, byte-gated `models_cache.json`,
   `--no-subagents --no-memory --disable-web-search --no-auto-update`,
   isolation proven 2026-08-14). Cells from the two lanes never share
   HOME/cache/sessions.

- Operational limits (measured 2026-08-14): parallel cap 1–2 (refresh-token
  rotation conflicts), diff-copy scratch cwd as default worker isolation, and
  every Grok finding or implementation is re-verified by the orchestrator
  before it is acted on. No repo secrets in the prompt or scratch cwd.
- Shared SuperGrok weekly quota: capacity-exhaustion cells are excluded from
  quality comparison and reported separately; a second capacity event makes
  the epoch inconclusive (locked before any cell runs — see
  `docs/OMD_2_0_GROK_RESTART_SEED.md`).

## Cursor included-use gate

The Cursor runner refuses to spawn unless both values were verified from the Cursor billing screen immediately before a run:

```sh
export OMD_CURSOR_BILLING_TYPE=included
export OMD_CURSOR_INCLUDED_USAGE_CONFIRMED=I_CONFIRM_CURSOR_INCLUDED_USAGE
```

Any missing, unknown, or `on-demand` value fails before the Cursor binary is probed or spawned. The confirmation is intentionally explicit and is not inferred from a model name, account login, prior usage, or a benchmark plan. Fake calibration may use a non-live fake model; it cannot bypass the gate for a live Grok selector.

The canonical machine-readable policy is [`benchmarks/ui-resolve-bench/config/provider-routing-policy.json`](/Users/kwakseongjae/Desktop/projects/oh-my-design/benchmarks/ui-resolve-bench/config/provider-routing-policy.json). The guard is enforced by `runtime-contract.mjs`, `run-cursor.mjs`, and the automated review runner. A direct Cursor app action outside these runners is outside this local guard and must remain manually disabled unless the billing screen says Included.

## Required preflight record

Every future Cursor result must carry `billing_type: included` and an `included-only-cursor-grok` guard decision. If that metadata is absent, the run is not publishable evidence. Luna/Sol results must carry the Codex runtime and must never contain a Cursor provider route.
