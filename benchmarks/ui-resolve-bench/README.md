# UI-Resolve Bench

UI-Resolve Bench asks a stricter question than “which agent made the prettiest
screenshot?”:

> Did the system deliver a working, grounded, responsive, accessible interface
> without inventing missing product or brand facts?

The benchmark is product-neutral. oh-my-design is the first implementation and
one of the systems under test, not the definition of a passing result.

## Status

`v0.2` is an internal method draft. It currently contains three inspectable
development fixtures covering pricing, first-run onboarding, and incident
operations. They are used to calibrate the runner and score contract; they are
not a hidden or representative public task set. The fixtures, evaluator, and
oracles are inspectable, and the in-app fallback runs do not have
immutable transcripts or normalized budgets. It is not sufficient for causal
skill comparisons, `UI-Resolved@1`, a public leaderboard, or a “best UI skill”
claim.

The first pilot's Taste, UI UX Pro Max, and OmD artifacts failed an independent
activation/platform attribution audit and remain marked invalid rather than
silently deleted. A corrected exact-activation rerun now exists for those three
conditions: OmD passed the current 85 objective points, while Taste and UI UX
Pro Max each reached 81 and failed different accessibility checks. Those remain
single in-app observations, not comparative proof. See
[`reports/corrected-rerun-2026-07-21/FINDINGS.md`](./reports/corrected-rerun-2026-07-21/FINDINGS.md).

The first exact Opus 4.8 replacement matrix is also internal: across three
tasks, raw `DESIGN.md` and OmD each resolved one task, while OmD was faster and
slightly higher on mean objective score. It supports patch selection, not a
public lift claim. The separate 1.9.4 repair-harness smoke then passed 85/85 with
an Opus parent and two Opus-pinned specialists after an earlier timeout and a
mixed-model attribution defect were preserved and corrected. One task × one
trial is still insufficient for a Harness Track rank. See
[`reports/opus-paired-matrix-1.9.3-replacement-2/FINDINGS.md`](./reports/opus-paired-matrix-1.9.3-replacement-2/FINDINGS.md)
and
[`reports/opus-agent-repair-harness-1.9.4-replacement-2/FINDINGS.md`](./reports/opus-agent-repair-harness-1.9.4-replacement-2/FINDINGS.md).

Each task owns its state adapter and design oracle. Known-good implementations
must pass every gate, while injected pricing, toggle, and filtering mutants must
fail their intended state gate before model runs begin.

The eventual public result is `UI-Resolved@1`: the share of private evaluation
tasks that pass every objective critical gate on the first run. A visually
attractive submission cannot offset a broken journey, inaccessible control,
ungrounded brand claim, or mobile overflow. Blind practitioner preference is
reported beside it as `Ship Preference`; it is not silently folded into the
pass gate. When a task provides a visual target, target fidelity remains an
objective task-specific critical gate.

## Benchmark families

1. **Model Track** — no portable skill; same agent runtime, task, tool and
   reasoning budget, environment, and prompt. Only the model snapshot changes.
2. **Skill Lift** — same model, agent runtime, repository, core task prompt,
   context budget, and tool budget. Compare no-skill, raw `DESIGN.md`, and
   exactly one installed skill using a preregistered, minimal activation delta.
3. **Harness Track** — allow each product's documented orchestration, browser
   loop, hooks, and specialist agents. Publish quality and cost together; never
   mix this table with the Skill Lift table.
4. **Prompt Arena** — repeat the rough prompts people share on X/Threads, keep a
   small objective floor, and rank only blinded run-level visual preference.
   It is legible and shareable, but not the controlled capability leaderboard.
5. **Transfer Matrix** — sample model×skill combinations to measure whether
   skill lift generalizes instead of merely fitting one anchor model.
6. **Evidence & Unknown** — evaluate collection provenance, protected unknown
   fields, and unsupported design claims. This track is intentionally absent
   from screenshot-only tasks.

See [`BENCHMARK-FAMILIES.md`](./BENCHMARK-FAMILIES.md) and
[`STATISTICS.md`](./STATISTICS.md). Cross-runtime effort, timeout, step, token,
and cost controls are fixed in
[`COMPUTE-CONTROL.md`](./COMPUTE-CONTROL.md). The future public result browser is specified
in [`PUBLIC-SITE.md`](./PUBLIC-SITE.md), and the `1.9.1 → 2.0.0` experiment train
is in [`RELEASE-TRAIN.md`](./RELEASE-TRAIN.md).

## Local pilot

The preparation step copies a frozen starter and only the selected skill
directory into a new sandbox. It verifies the source commit and clean-tree
attestation before copying and does not execute third-party installers or hooks.
`--allow-dirty-source` exists only for non-publishable diagnostics; the exporter
marks that run `invalid-attribution`. Product changes are hashed separately from
installed skill/runtime files so editing only the harness cannot masquerade as
delivery.

```bash
node benchmarks/ui-resolve-bench/scripts/prepare-sandbox.mjs \
  --task pricing-conversion-v0.1 \
  --variant anthropic-frontend-design \
  --vendors /tmp/omd-ui-skills-bench/vendors \
  --out /tmp/ui-resolve-runs/anthropic-frontend-design

node benchmarks/ui-resolve-bench/scripts/run-codex.mjs \
  --workspace /tmp/ui-resolve-runs/anthropic-frontend-design \
  --model gpt-5.6-terra \
  --reasoning xhigh

node benchmarks/ui-resolve-bench/scripts/evaluate-run.mjs \
  --workspace /tmp/ui-resolve-runs/anthropic-frontend-design

node benchmarks/ui-resolve-bench/scripts/export-run-record.mjs \
  --workspace /tmp/ui-resolve-runs/anthropic-frontend-design \
  --family skill \
  --system anthropic-frontend-design \
  --trial 1
```

Claude Code is a separate Transfer Matrix runtime, not a replacement row in the
Terra Skill Lift estimate. Prepare with `--runtime claude-code`, verify
subscription auth without shadowing API credentials, then pin the exact model:

```bash
npm run bench:ui:claude:check -- --model claude-opus-4-8

node benchmarks/ui-resolve-bench/scripts/prepare-sandbox.mjs \
  --task pricing-conversion-v0.1 \
  --variant omd-portable \
  --runtime claude-code \
  --out /tmp/ui-resolve-runs/claude-omd

npm run bench:ui:claude:run -- \
  --workspace /tmp/ui-resolve-runs/claude-omd \
  --model claude-opus-4-8 \
  --effort xhigh
```

The opt-in repair harness uses a different variant and benchmark family. It
installs the portable repair skill plus model-pinned, read-only UX writer and UX
engineer agents. Do not compare this row directly with a Skill Lift row:

```bash
node benchmarks/ui-resolve-bench/scripts/prepare-sandbox.mjs \
  --task pricing-conversion-v0.1 \
  --variant omd-repair-harness \
  --runtime claude-code \
  --out /tmp/ui-resolve-runs/claude-omd-repair

npm run bench:ui:claude:run -- \
  --workspace /tmp/ui-resolve-runs/claude-omd-repair \
  --model claude-opus-4-8 \
  --effort xhigh
```

See [`CLAUDE-PRINT-RUNNER.md`](./CLAUDE-PRINT-RUNNER.md) for isolation, quota,
and login-probe details.

Once repeated runs are exported as
[`run-record.schema.json`](./run-record.schema.json) records, aggregate them
without hiding failed or timed-out trials:

```bash
npm run bench:ui:aggregate -- \
  --input /tmp/ui-resolve-runs/runs.jsonl \
  --out /tmp/ui-resolve-runs/aggregate.json \
  --baseline-system no-skill \
  --reliability 5 \
  --bootstrap 2000
```

The aggregate includes completion, `UI-Resolved`, hierarchical confidence
intervals, Reliability@k, objective min/mean/median/max and percentiles,
median-representative/best/worst run IDs, plus paired Skill Lift where a control
is supplied. Min and max are descriptive and never determine rank.

Blind Ship Preference uses a separate evidence plane. Build one schema `0.3`
gallery per reviewer, lock their exported judgment JSON, and keep the reveal
maps outside the galleries. After every reviewer has exactly one matching
judgment and reveal per task:

```bash
npm run bench:ui:preference -- \
  --judgments /tmp/ui-resolve-review/judgments \
  --reveals /tmp/ui-resolve-review/reveals \
  --out /tmp/ui-resolve-review/preference.json \
  --bootstrap 2000 \
  --seed 20260729
```

The command fails closed on schema, epoch, reviewer, review-unit, task,
candidate-set, pair, assignment, axis, or choice mismatch. One stable reviewer
may review multiple tasks without being counted as multiple people. It
normalizes A/B to revealed candidate identity, excludes hidden reversed
duplicates from primary votes, reports reversal consistency, ties, both-fail
and modal agreement, then writes regularized Bradley–Terry ratings with
task→reviewer bootstrap rating and rank intervals.

The readiness gate stays `diagnostic` until every task×candidate-pair×axis has
enough unique reviewers and non-`both_fail` votes. A disconnected rating graph
suppresses rating, rank, and both intervals. Preference-plane `preview` requires
24 tasks×5 reviewers; `verified` requires 24×10. Neither grade makes the
overall benchmark publishable without the separate run/trial, attribution,
task-quality, and deterministic-gate evidence. The JSON and Markdown companion
contain no generated timestamp, so the same inputs, seed, and iteration count
are byte-stable.

For a multi-task reviewer round, declare opaque reviewer slots and frozen task
run directories in a private plan. Keep the salt in a permission-controlled
file; the round preparer does not put its value on the command line:

```bash
npm run bench:ui:review:prepare -- \
  --plan /tmp/ui-review/plan.json \
  --blind-salt-file /tmp/ui-review/secret-salt.txt \
  --galleries-out /tmp/ui-review/public-galleries \
  --reveals-out /tmp/ui-review/private-reveals \
  --manifest-out /tmp/ui-review/private-round-manifest.json
```

Distribute only `public-galleries`. Collect exported judgment JSON in a
separate directory, then run intake repeatedly:

```bash
npm run bench:ui:review:intake -- \
  --manifest /tmp/ui-review/private-round-manifest.json \
  --judgments /tmp/ui-review/judgments \
  --reveals /tmp/ui-review/private-reveals \
  --out /tmp/ui-review/progress.json \
  --aggregate-out /tmp/ui-review/preference.json \
  --lock-out /tmp/ui-review/intake-lock.json
```

Incomplete intake writes exact missing reviewer-task units and does not
calculate preference. Complete intake writes the accepted aggregate and a hash
lock over the round manifest, judgments, reveals, and aggregate. Rechecking the
same lock succeeds only if every byte is unchanged.

The direct CLI path records model/runtime metadata, full and product-only
hashes, changed product files, source attestation, wall time, and raw output.
Every task owns its design oracle, including typography; the evaluator contains
no candidate-specific font fallback. When a host security policy blocks nested execution, the
manual in-app fallback must be labelled as an observation and excluded from
causal or efficiency claims. Generated workspaces stay in `/tmp`; only curated,
explicitly labelled pilot reports are committed.

## Current competitors

- no-skill control
- raw `DESIGN.md` control
- Anthropic Frontend Design
- Taste Skill
- Impeccable (prompt-only and hook-enabled arms must remain separate)
- UI UX Pro Max
- Vercel Web Design Guidelines (review track only)
- oh-my-design portable skill
- oh-my-design repair harness (opt-in Harness Track only)
- oh-my-design full harness (Full System track only)

Pinned sources and track eligibility live in
[`competitors.json`](./competitors.json). See [`PROTOCOL.md`](./PROTOCOL.md) for
the full score and publication contract.
