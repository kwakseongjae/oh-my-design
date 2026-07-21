# UI-Resolve Bench

UI-Resolve Bench asks a stricter question than “which agent made the prettiest
screenshot?”:

> Did the system deliver a working, grounded, responsive, accessible interface
> without inventing missing product or brand facts?

The benchmark is product-neutral. oh-my-design is the first implementation and
one of the systems under test, not the definition of a passing result.

## Status

`v0.1` is an internal method draft. It currently contains one public development
fixture used to find defects in the runner and score contract. The fixture,
evaluator, and oracle are inspectable, and the in-app fallback runs do not have
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
[`STATISTICS.md`](./STATISTICS.md). The future public result browser is specified
in [`PUBLIC-SITE.md`](./PUBLIC-SITE.md), and the `1.9.1 → 2.0.0` experiment train
is in [`RELEASE-TRAIN.md`](./RELEASE-TRAIN.md).

## Local pilot

The preparation step copies a frozen starter and only the selected skill
directory into a new sandbox. It verifies the source commit before copying and
does not execute third-party installers or hooks.

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
```

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

The direct CLI path is designed to record model/runtime metadata, hashes, wall
time, and raw output. When a host security policy blocks nested execution, the
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
- oh-my-design full harness (Full System track only)

Pinned sources and track eligibility live in
[`competitors.json`](./competitors.json). See [`PROTOCOL.md`](./PROTOCOL.md) for
the full score and publication contract.
