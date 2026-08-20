# Semantic-color closure repair — 1.9.49 findings

Status: **local deterministic acceptance passed**.

## Change

The canonical OmD apply skill now requires a post-edit `foreground closure`.
Before acceptance, the agent must inspect every changed foreground declaration
and the text receiving it, classify the content and background, and remove any
unmeasured accent normal-text pair.

The rule is deliberately fail-closed:

- semantic names such as accent, brand, signal, status, and warning are not
  contrast evidence;
- normal text needs measured 4.5:1 for the exact pair;
- otherwise text uses a declared `ink`/text-role token;
- the accent stays only in an adjacent non-text role that can meet 3:1;
- no darker hex is invented;
- absence of a replacement token removes the accent foreground, not the
  status text.

## Deterministic acceptance

- canonical skill contract: 6/6;
- Cursor sandbox adaptation focused test: pass;
- install-skills suite: 36/36;
- overall selected run: 55/57, with only the two pre-existing external vendor
  checkout `.git` metadata failures;
- focused final run: 7/7, 14 unrelated tests skipped;
- TypeScript: pass;
- CLI build: pass;
- diff check: pass.

No evaluator, task, Raw DESIGN.md, token, runtime, or historical score changed.

## Decision

The bounded local repair passes and unlocks one fresh Composer candidate-only
recovery. It cannot retroactively change 1.9.48 or establish Skill Lift.
