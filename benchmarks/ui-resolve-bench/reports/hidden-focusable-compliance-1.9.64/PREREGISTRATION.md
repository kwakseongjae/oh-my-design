# Hidden-focusable execution compliance — 1.9.64

Status: **LOCKED; provider-free implementation pending**.

## Frontier gate and bounded hypothesis

GLM 1.9.62 showed that a model can read the existing protected-ledger,
320px/200% clipped-control, and focus-reveal rules yet still add an
unauthorized permanently clipped skip link. The missing layer is not another
accessibility rule. It is an explicit post-edit transaction that reconciles
the actual focusable diff against those existing rules before optional
browser verification or delivery.

The bounded hypothesis is that one mandatory `interactive closure` in the
canonical `omd-apply` skill will make the execution order unambiguous:

1. enumerate every added or changed focusable element from the product diff;
2. reconcile each element with the protected ledger and original-user
   authority;
3. remove unauthorized additions when `allowed_delta: 0`;
4. require an explicit focus-reveal path for any intentionally hidden
   focusable control;
5. block acceptance while an unauthorized or permanently clipped focusable
   remains.

## Frozen denominator

- product version: `1.9.64`;
- source skill:
  `skills/omd-apply/SKILL.md`;
- source skill SHA-256:
  `938c6f0a7bb2ce172786274599b56591f01a82ee8e6bd1bf3d54bef03c74e4c7`;
- sidecar SHA-256:
  `f0ad5294de3f599bbed124708c61988be9098e20d4723ce3574023144751253e`;
- observed defect:
  `cursor-glm-multitask-preview-1.9.62`, incident OmD;
- implementation model/runtime: local provider-free repository edit;
- provider generation: zero;
- changed product surface: canonical OmD apply skill and its contract tests
  only.

The candidate may clarify execution order and add contract assertions. It may
not change DESIGN.md authority, product facts, task prompts, benchmark
evaluator, score thresholds, runtime allowlists, provider pacing, or frozen
historical artifacts.

## Acceptance

Pass only when:

- the skill names the transaction `interactive closure`;
- the closure runs immediately after product edits and before optional browser
  verification or delivery;
- it reconciles the real focusable diff with `current_count`,
  `allowed_delta`, and `change_authority`;
- unauthorized focusable additions are removed rather than rationalized;
- visually hidden focusable controls require a source-level
  `:focus`/`:focus-visible` reveal path and same-route in-view acceptance;
- unresolved unauthorized or permanently clipped focusables block acceptance;
- the existing foreground closure, delivery reserve, replacement-verifier
  boundary, and unknown-as-absent behavior remain intact;
- focused skill-contract, install-skills, Cursor preparation, TypeScript,
  build, and diff checks pass.

## First-failure and rollback

Any contract regression, generated-channel mismatch, install failure, test
failure, or unrelated repository change rejects the candidate. Roll back the
single skill/test delta; do not weaken the protected ledger or evaluator.

Passing is provider-free evidence that the skill contract became more
executable. It does not prove model compliance or Skill Lift. A fresh
preregistered Grok matrix is required for that evidence.
