# Cursor Kimi K3 / GLM 5.2 adapter calibration — 1.9.59

Status: **LOCKED; provider-free implementation pending**.

## Bounded hypothesis

The no-write canaries in 1.9.58 accepted selectors `kimi-k3-high` and
`glm-5.2-high` with exact display names `Kimi K3 High` and `GLM 5.2 High`.
Adding only those selector/display pairs to the frozen Cursor live allowlist
should preserve exact fail-closed attribution without changing runtime flags,
effort semantics, usage requirements, Auto/Router exclusion, or existing
Grok/Composer behavior.

## Frozen source scope

- add `kimi-k3-high` and `glm-5.2-high` to
  `CURSOR_LIVE_MODEL_ALLOWLIST`;
- add their exact 1.9.58 display labels;
- extend provider-free fixtures for allowed selector, correct display, wrong
  display, and existing Grok/Composer regression;
- do not add low/max/fast/Kimi K2.7 or any other newly visible selector;
- do not execute a provider or scored benchmark in this patch.

## Acceptance

Pass only when:

1. the allowlist contains exactly Grok 4.5 High, Composer 2.5, Kimi K3 High,
   and GLM 5.2 High selectors;
2. exact Kimi/GLM display labels yield
   `runtime-reported-display-name`;
3. wrong/crossed labels fail with `reported-model-mismatch`;
4. Auto, Fast, Low, Max, and unregistered selectors remain rejected;
5. focused Cursor/provider-neutral tests, Node syntax, TypeScript, build, and
   diff checks pass.

Passing authorizes separately preregistered Internal scored matrices, Kimi
first and GLM second. It creates no quality, efficiency, ranking, public model,
or frontier claim.
