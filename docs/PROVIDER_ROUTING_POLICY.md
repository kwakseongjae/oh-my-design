# Provider routing and billing safety

This policy is fail-closed for benchmark execution. It does not start a model call; it only decides whether a runner may start one.

## Fixed routes

| Model | Allowed runtime | Billing rule |
| --- | --- | --- |
| `gpt-5.6-luna` | Codex | Codex-native only |
| `gpt-5.6-sol` | Codex | Codex-native only |
| `cursor-grok-4.5-high` | Cursor | Included usage only |

Cursor is not a route for Luna or Sol. Cursor live execution is currently reserved for the Grok lane. Other Cursor model selectors are denied by the OmD runner even if an older matrix lists them.

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
