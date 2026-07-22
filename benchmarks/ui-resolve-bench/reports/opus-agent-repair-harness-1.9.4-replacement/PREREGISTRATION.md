# Opus 4.8 bounded repair harness — 1.9.4 replacement

Locked before generation on 2026-07-22.

## Replacement scope

This is a fresh replacement for the failed `opus-agent-repair-harness-1.9.4`
smoke. No product output or session state from `/tmp/u17` is reused. The prior
run remains a timed-out invalid result.

The single variable is the harness control patch at `7af6e91`: protected
cardinality can change only when the original user prompt explicitly requests
it, and each specialist receives `bounded-repair-advisory` with one or two
named risks, at most five findings, and about 600 words. Model, task, runtime,
agent pair, permissions, evaluator, and timeout are unchanged.

## Frozen cell

- Family/status: `harness` / `internal`
- Task contract: `0.3.0`
- Task: `pricing-conversion-v0.1`
- Variant: `omd-repair-harness`
- Trials: one
- Fresh output root: `/tmp/u18/omd-repair-harness-pricing-t1`
- Claude Code: `2.1.217` or newer, recorded at run time
- Model/effort: exact `claude-opus-4-8` / `xhigh`
- Permission mode: `acceptEdits` inside native strict sandbox
- Timeout: 900 seconds
- Auth: unshadowed first-party subscription OAuth
- Candidate implementation commit: `7af6e91`

## Success and guardrails

Adapter and delivery success requires all of:

1. `omd-ux-writer` and `omd-ux-engineer` requested exactly once each, with no
   Agent error;
2. child/process zero, no timeout, final response present, zero infrastructure,
   sandbox, and cwd errors;
3. first built-in product write before 600,000ms, leaving at least five minutes
   for implementation, acceptance, and delivery;
4. each specialist follows the bounded mode in substance: no general full-page
   audit, no proposal to expand protected cardinality, maximum five ranked
   findings, and a concise result;
5. the artifact contains exactly two protected FAQ buttons at every viewport;
6. product diff, frozen evaluator, and normalized Harness Track record complete.

Report UI-Resolved, objective gates, all protected-hook counts, contrast,
320px/200% geometry, tokens, provider price equivalent, wall time, and write
milestones. The prior timed-out artifact and the older 66/85 skill-only cell are
diagnostic context only; neither is a paired baseline for a quality-lift claim.

## Isolation and stop rule

The workspace is prepared from one clean source commit. Auto-memory,
background tasks, IDE connection, hooks, browser integration, network, MCP,
package installation, session persistence, and unsandboxed fallback are off.
The native Agent tool is enabled only because this is the preregistered harness
arm; specialists inherit the pinned parent model and are advisory-only.

Any auth, quota, timeout, sandbox, cwd, Agent permission/discovery, or source
attribution failure stops the replacement. There is no retry or resumed
session under this preregistration.

One public task and one trial cannot support reliability, superiority,
frontier, Pareto, or public leaderboard claims.
