# Attribution Plane Separation — 1.9.82 Preregistration

## Purpose

1.9.81 proved that the runtime can report the exact registered Cursor display
label and provider-event usage while the exporter still invalidates the run
categorically. Execution validity and public model-attribution eligibility are
currently collapsed into one flag.

1.9.82 separates those planes without weakening public claims. Provider
generation remains closed.

## Allowed delta

- add a frozen matrix `attribution_scope` with exactly:
  - `provider-observed-only` (default and public-safe);
  - `internal-registered-display-name` (Internal comparison only);
- carry the scope into each locked matrix-cell record and exported run record;
- keep display-name runs invalid by default;
- permit Internal validity only when the Cursor selector maps to the exact
  registered display label and the existing runtime contract, agent, binary,
  provider route, process, and provider-event usage checks pass;
- add negative tests for an unknown label, missing explicit Internal scope,
  and public/default promotion;
- add aggregation/publication metadata sufficient to keep Internal rows out of
  public model claims.

No historical root may be rescored. No task, skill, prompt, evaluator, score,
model selector, timeout, pacing, retry, fallback, or UI contract change is
allowed.

## Acceptance

1. Existing display-name-only tests remain invalid under the default scope.
2. Exact registered Cursor selector/display label becomes valid only under
   `internal-registered-display-name`.
3. Unknown or drifted labels remain invalid under every scope.
4. Matrix validation rejects unsupported scope values.
5. Exported records surface the scope explicitly.
6. Focused tests, lint, build, syntax, and diff checks pass.
7. Provider calls: 0.

## Stop and next step

Do not rescore `/tmp/u1980`; it stays frozen at 1/18. After provider-free
acceptance, preregister and prepare a fresh 18-cell replacement root with the
explicit Internal scope. Public/Verified model attribution continues to
require provider-observed immutable identity.
