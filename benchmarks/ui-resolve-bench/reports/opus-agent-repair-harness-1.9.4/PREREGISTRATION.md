# Opus 4.8 agent-enabled repair harness — 1.9.4 smoke

Locked before generation on 2026-07-22.

## Question

Can the new Claude Code Harness Track adapter execute the documented OmD repair
workflow end to end: load `omd:apply`, request independent advisory input from
`omd-ux-writer` and `omd-ux-engineer`, keep one main implementation owner, and
return a scored product change without infrastructure or attribution failure?

This is an adapter/product smoke, not a comparison against the earlier
skill-only cell. The product contract and commit changed after that cell, so no
lift, win, or causal quality claim may be computed from the two artifacts.

## Frozen cell

- Family: `harness`
- Status: `internal`
- Task contract: `0.3.0`
- Task: `pricing-conversion-v0.1`
- Variant: `omd-repair-harness`
- Trials: one
- Fresh output root: `/tmp/u17/omd-repair-harness-pricing-t1`
- Claude Code: `2.1.217` or newer, recorded at run time
- Model/effort: exact `claude-opus-4-8` / `xhigh`
- Permission mode: `acceptEdits` inside native strict sandbox
- Timeout: 900 seconds
- Auth: unshadowed first-party subscription OAuth
- Candidate implementation commit: `5c432eb`

## Adapter contract

The prepared workspace contains the canonical `omd:apply` skill plus the
canonical `omd-ux-writer` and `omd-ux-engineer` agent definitions. The Claude
adapter changes each specialist model selector to `inherit` so the entire cell
uses the pinned parent model. It appends an advisory-only boundary; specialists
must not edit product files. Agent, hooks, browser, network, MCP, auto-memory,
background tasks, IDE connection, package installation, session persistence,
and unsandboxed fallback remain off except that the native `Agent` tool is
enabled for this harness arm.

The normalized run is valid only if both preregistered specialist IDs appear in
native `Agent` tool events, neither Agent call errors, the source is clean, and
the standard task/runtime validity contract passes. Missing specialist calls
are `invalid-attribution`, not silently treated as a skill-only run.

## Success and guardrails

Primary adapter success requires all of:

1. both specialists requested exactly once (two native Agent calls total);
2. child/process zero, no timeout, final response present;
3. zero infrastructure, sandbox, cwd, and Agent-tool errors;
4. product diff exists and contains no specialist-authored product file outside
   the main delivery;
5. frozen evaluator and normalized Harness Track record complete.

Product diagnostics are reported without promotion thresholds: UI-Resolved,
85-point objective score, exact two-item FAQ hook/state contract, small-text
contrast, 320px/200% geometry, wall time, tokens, provider price equivalent,
and first/last write milestones. The earlier skill-only Pricing cell scored
66/85 and failed; it is context for patch selection only, not a paired baseline.

## Stop and reporting rules

Any auth, quota, timeout, sandbox, cwd, Agent permission, agent discovery, or
source-attribution failure stops the smoke. There is no retry or resumed
session inside this preregistration. A failed adapter remains visible with its
raw logs and is repaired under a new preregistration.

One public task and one trial cannot support reliability, superiority,
frontier, Pareto, or public leaderboard claims.
