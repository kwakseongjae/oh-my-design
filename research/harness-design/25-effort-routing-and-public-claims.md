# UI effort routing and public benchmark claims

## Decision

For Codex-native Luna, Terra, and Sol UI design execution, OmD uses **high** as
its policy default when the caller does not supply an effort. This is an OmD
routing default, not a rewrite of each model catalog's native default.

The decision comes from the exact 1.9.826 three-task block:

- high resolved the objective and proof-execution gates together in 8/9 cells;
- low, medium, xhigh, max, and ultra resolved both gates in 6/9, 6/9, 6/9,
  5/9, and 3/6 cells respectively;
- max and ultra required substantially more observed tokens and wall time without
  improving the bounded success rate.

This evidence is useful enough for an internal default and too small for a
universal model or effort ranking. Three tasks and one trial per cell cannot
establish reliability or statistical superiority.

## Resolution contract

1. Scope is exactly `ui-design-execution` on the Codex runtime.
2. Missing effort resolves to `high` only for pinned Luna, Terra, and Sol.
3. An explicit supported effort is preserved exactly.
4. An unsupported effort or unknown model fails closed.
5. Failure is returned as failure. OmD does not retry at a higher effort,
   substitute a model, or fall back to another effort.
6. Max and ultra remain explicit opt-ins.
7. Non-Codex runtimes require an explicit effort; this experiment does not set
   their defaults.

The machine contract lives in
`benchmarks/ui-resolve-bench/config/provider-routing-policy.json` and is consumed
by `runtime-contract.mjs` before runner arguments are constructed.

## Public claim ladder

### Allowed: qualified descriptive facts

Use the full boundary in the same paragraph:

> In three fixed UI tasks with one trial per model-effort-task cell, Codex
> configuration-routed Luna/Terra/Sol completed 51 valid cells. High passed both
> the objective and proof-execution gates in 8/9 cells. Model identity was
> configuration-attributed, not independently provider-attested.

Exact counts, task-specific tables, wall time, and token coverage may be shown
when their denominators are visible. The token total must say 50/51 because the
valid timeout did not report usage.

### Forbidden: conclusions the experiment cannot support

- “Luna is the best model” or any cross-model leaderboard
- “High is statistically superior” or a reliability estimate
- “Max/ultra improves quality”
- calling 38 objective passes “promotion-ready”; only 34 also passed proof
- provider-attested model identity
- any claim that this result alone satisfies a 2.0 frontier gate

The machine-readable wording and forbidden-claim list live in
`config/public-benchmark-claim-policy.json`. Its auditor hashes both source
artifacts, recomputes portable aggregate facts, checks the independently audited
proof disclosures, and verifies the runtime routing policy.

## Promotion effect

None. The policy reduces default-routing ambiguity and prevents overclaiming.
It does not change any of the ten normative 2.0 frontier gate statuses.
