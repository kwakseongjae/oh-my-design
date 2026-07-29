# UI-Resolve Bench execution roadmap

The product reaches its `2.0.0` frontier target through the patch experiments in
[`RELEASE-TRAIN.md`](./RELEASE-TRAIN.md). This file remains the benchmark
execution queue; product versions do not redefine score semantics.

## Internal P0 — 12 tasks

| ID | Locale | Track | Ground truth | Primary hidden failure |
|---|---|---|---|---|
| `pricing-conversion-v0.1` | EN | landing redesign | DESIGN.md | billing/FAQ/form regression, mobile overflow, invented claims |
| `release-onboarding-ko` | KO | stateful journey | DESIGN.md | skipped error/partial-success states and unnatural Korean |
| `search-recovery-ja` | JA | existing UI repair | product contract | empty/error conflation, focus loss, Japanese truncation |
| `checkout-locale-zh-tw` | ZH-TW | locale + responsive | content oracle | field-order, address-format, and mobile CTA failure |
| `account-settings-zh-cn` | ZH-CN | existing UI repair | code + task assertions | nested-card slop, destructive-action ambiguity |
| `font-evidence-unknown-ko` | KO | evidence & unknown | evidence graph | fallback font promoted as brand fact |
| `operations-density-en` | EN | product UI | open brief | desktop cards merely shrink on mobile; comparison becomes slow |
| `editor-screenshot-en` | EN | screenshot → implementation | screenshot + DOM oracle | visual match without working keyboard interaction |
| `mobile-navigation-ja` | JA | responsive repair | route oracle | hidden primary route, broken reading order |
| `accessible-form-en` | EN | audit + repair | WCAG/task oracle | visual polish masks label/error/focus regression |
| `reference-to-surface-zh-tw` | ZH-TW | evidence → UI | graded reference | adjacent marketing evidence promoted as product token |
| `open-brief-product-en` | EN | open-brief creation | two valid oracles | overfitting the benchmark's preferred aesthetic |

The first six tasks become a public development set only after mutation testing.
The other six remain hidden. Every public task uses a fictional brand and
first-party fixture assets.

## Execution queue

### Queue A — runner hardening

Completed in the current internal pilot:

- normalized task↔track eligibility with explicit off-label opt-in;
- preregistered ordering and retention of complete, failed, timed-out, and
  incomplete prepared trials in reports;
- exact price round trips, every-FAQ open/close, exact protected-hook counts,
  1440/390/320 geometry plus a labelled 200% CSS-zoom surrogate,
  overlap/clipping checks, real Tab
  traversal, axe, and expanded unsupported-claim checks;
- reviewer-specific blind pairwise assignments, hidden A/B reversal repeat,
  ties, both-fail, local judgment export, and a reveal map kept outside the
  gallery;
- strict multi-reviewer judgment/reveal aggregation with identity-normalized
  votes, reversal consistency, tie/both-fail/modal-agreement diagnostics,
  regularized Bradley–Terry ratings, and seeded task→reviewer intervals.

Remaining before a paired 12-task run:

1. Split the runner into a read-only control plane and a submission-only
   readable/writable workspace; keep private tests and oracles outside the model
   sandbox.
2. Add control-plane integrity checks and immutable trial manifests before
   execution, not only prepared-workspace hashes.
3. Normalize streamed event/token/tool logs across every runtime; the current
   direct CLI control has a trace, while in-app observations do not.
4. Pin the exact model snapshot, runtime/browser/OS/font/container manifests,
   budgets, and
   dirty-tree checks.
5. Add process-group timeout tests and a fake Codex executable integration test.
6. Replace the current simple target-size check with WCAG spacing-aware geometry.
7. Add deterministic locale snapshots and replace/calibrate the existing CSS
   zoom surrogate with a browser-level zoom/reflow method,
   occlusion, and tab-order checks against valid and defective fixtures.
8. Add valid solutions plus adversarial mutants and calibrate thresholds before
   interpreting arm scores.
9. Complete the connected Cursor account-gateway lane in
   [`CURSOR-RUNTIME-PLAN.md`](./CURSOR-RUNTIME-PLAN.md): fake stream contract,
   exact-model attribution, fixed-runtime Grok/Composer/Codex pilot, and a
   separate modern Agent Skill install channel. Never invoke the ambiguous local
   `agent` command and never mix Cursor Auto/Router with named-model rows.

### Queue B — paired Skill Lift pilot

First run one diagnostic discovery trial for every track-eligible arm on all 12
tasks. After task/mutant calibration, run five independent candidate trials in
Latin-square arm order:

1. no context / no skill
2. raw `DESIGN.md`
3. Anthropic Frontend Design
4. Taste Skill (only on documented eligible task families)
5. Impeccable prompt-only
6. UI UX Pro Max
7. OmD apply skill
8. Vercel review as a second-pass repair arm, not greenfield generation

Publish completion, min/mean/median/max, IQR, `UI-Resolved@1`,
`Reliability@5`, hierarchical-bootstrap intervals, paired lift against the
no-skill control, and separate blind pairwise `Visual Ship Preference`. Never
rank an off-label arm as though the vendor claimed support.

### Queue C — Harness pilot

The OmD harness has mandatory human checkpoints and cannot be honestly reduced
to a headless single prompt. A benchmark operator must attend each checkpoint,
use a preregistered response rubric, and preserve the prompt/response artifact.
Do not auto-approve or bypass checkpoints.

Compare:

- Impeccable recommended hook/browser loop
- OmD full checkpointed harness
- a generic agent allowed the same wall-time and model-call budget

Report quality, elapsed time, model/tool calls, human interventions, and
iteration count on a Pareto chart rather than mixing these systems into the
Skill Lift leaderboard.

### Queue D — public standardization

1. 24 hidden tasks × eligible systems × 5 trials for Preview.
2. 24 hidden tasks × eligible systems × 10 trials for Verified.
3. Five-language semantic QA.
4. Five practitioner blind reviews for Preview; ten for Verified.
5. Automatic/human correlation and order-bias audit.
6. Public spec, dev set, task QA log, median/best/worst example gallery, failure
   gallery, and signed run manifests.
7. Separate Model, Skill Lift, and Harness leaderboards; Prompt Arena remains a
   labelled social comparison surface rather than the capability rank.
8. Quarterly live tasks and a public process for retiring broken tasks.

## Go/no-go gates for an X launch

Do not frame the project as a benchmark launch until:

- at least 12 tasks and five trials are complete;
- all skills are pinned and track-eligible;
- run manifests and failures are downloadable;
- blind visual review has at least five practitioners;
- the score threshold rejects known mutants and accepts both valid oracles;
- OmD losses are published next to wins.

Before that point, call it an “open benchmark design and internal pilot.” That is
still a credible X narrative and invites practitioners to challenge the rubric.

## Queue E — benchmark product surface

1. Implement the run-distribution aggregator and paired Skill Lift report.
2. Materialize `/benchmarks/models`, `/skills`, `/harnesses`, `/prompt-arena`,
   task, run, methodology, and changelog routes from signed result packages.
3. Default examples to the run nearest the median objective score; expose the
   actual best and worst instead of curating a hero screenshot.
4. Launch fresh models as Internal 3×3 Prompt Arena cards, then promote through
   12×5 Preview and 24×10 Verified gates.
5. Track benchmark view → blind vote → artifact inspection → qualified install,
   without allowing acquisition metrics to alter benchmark scoring.
