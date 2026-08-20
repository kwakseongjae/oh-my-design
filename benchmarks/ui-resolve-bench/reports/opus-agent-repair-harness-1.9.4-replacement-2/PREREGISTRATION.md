# Opus 4.8 model-pinned repair harness — 1.9.4 replacement 2

Locked before generation on 2026-07-22.

## Replacement scope

This fresh cell replaces the mixed-model attribution result in
`opus-agent-repair-harness-1.9.4-replacement`. No `/tmp/u18` product or session
state is reused. The prior artifact remains a completed 85/85 product diagnostic
but is invalid for its preregistered all-Opus attribution because both native
Agent calls requested Sonnet.

The single variable is commit `f6c3f4a`: the installed specialist envelopes and
parent activation require `model: opus`; the event normalizer records the model
requested by every Agent call; the exporter fails attribution when a specialist
ID is missing or uses another selector. Immutable ledger and bounded advisory
rules are unchanged.

## Frozen cell

- Family/status: `harness` / `internal`
- Task contract: `0.3.0`
- Task/variant: `pricing-conversion-v0.1` / `omd-repair-harness`
- Trials: one
- Fresh output root: `/tmp/u19/omd-repair-harness-pricing-t1`
- Claude Code: `2.1.217` or newer, recorded at run time
- Parent model/effort: exact `claude-opus-4-8` / `xhigh`
- Required specialist Agent selector: `opus`
- Permission mode: `acceptEdits` inside native strict sandbox
- Timeout: 900 seconds
- Auth: unshadowed first-party subscription OAuth
- Candidate implementation commit: `f6c3f4a`

## Success and guardrails

Success requires all of:

1. exact native calls to `omd-ux-writer` and `omd-ux-engineer` once each, every
   call requesting `model: opus`, no other specialist model observed, and no
   Agent error;
2. child/process zero, no timeout, final response present, zero infrastructure,
   sandbox, and cwd errors;
3. first built-in product write before 600,000ms;
4. bounded specialist responses with no protected-cardinality expansion;
5. exactly two protected FAQ buttons at every viewport;
6. product diff, frozen evaluator, and normalized Harness Track record complete.

Claude Code may still report its internal Haiku helper for runtime bookkeeping;
that helper is recorded separately and is not a requested product specialist.
Every product specialist must resolve to the Opus model family in model usage.

## Isolation, stop, and reporting

Auto-memory, background tasks, IDE connection, hooks, browser integration,
network, MCP, package installation, session persistence, and unsandboxed
fallback are off. Only this harness arm receives the native Agent tool.

Any auth, quota, timeout, sandbox, cwd, Agent permission/discovery, source
attribution, or specialist model mismatch stops the replacement. There is no
retry or resumed session under this preregistration.

Report UI-Resolved, objective gates, hook counts, contrast, 320px/200% geometry,
agent calls/models, model usage, wall time, tokens, provider price equivalent,
and write milestones. One public task and one trial cannot support reliability,
superiority, frontier, Pareto, or public leaderboard claims.
