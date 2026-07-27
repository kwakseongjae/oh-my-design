# Semantic-color closure repair — 1.9.49

Status: **LOCKED; local deterministic acceptance pending**.

## Bounded hypothesis

The 1.9.48 failure occurred because the skill's pre-edit ledger and final
checklist did not force a post-edit inventory of actual foreground
declarations. Adding one mandatory foreground closure should make the
fail-closed action executable across channels without changing design tokens,
the benchmark evaluator, task, Raw control, or runtime.

## Exact candidate delta

Only canonical `skills/omd-apply/SKILL.md` and its contract/install tests may
change. The skill must require:

1. one post-edit pass over every changed `color`/foreground declaration and
   the real text receiving it;
2. normal-text, large-text, and non-text classification with background
   surface;
3. token semantics not counting as measured contrast proof;
4. exact 4.5:1 proof for accent normal text, otherwise a declared text-role
   token;
5. adjacent non-text accent preservation without inventing a darker color;
6. zero unresolved normal-text accent pairs before acceptance begins.

No runtime agent, evaluator, DESIGN.md, fixture, threshold, or Raw result may
change.

## Acceptance and rollback

Pass only when the canonical skill contract, Cursor-native installed skill,
TypeScript, and build are green. Existing unrelated vendor-checkout metadata
failures remain environment failures and cannot be waived as candidate tests.

Rollback the prose delta if it removes unknown-means-absent, invents colors,
permits unresolved normal-text accents, changes protected behavior authority,
or fails channel adaptation. Passing only unlocks a fresh Composer recovery;
it is not Skill Lift evidence by itself.
