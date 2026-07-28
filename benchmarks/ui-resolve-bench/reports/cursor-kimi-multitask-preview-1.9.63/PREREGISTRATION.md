# Cursor/Kimi K3 multi-task Skill Lift Preview replacement — 1.9.63

Status: **LOCKED; awaiting fresh preparation and provider execution**.

## Operational replacement and bounded hypothesis

This is the fresh operational replacement permitted after Kimi 1.9.60 froze
with three completed cells, an infrastructure-invalid fourth cell, and a
nonconformant retained cooldown. The failed 1.9.60 root and every artifact
under it are outside this denominator. No prepared workspace, provider output,
run result, score, record, event stream, log, screenshot, execution state, or
completed cell from that matrix may be copied, resumed, replayed, or counted
here.

GLM 1.9.62 completed all six cells through the accepted 1.9.61 durable
checkpoint controller. It establishes that one fully evaluated cell per
invocation and five retained cooldowns can complete without replay. Its
provider outputs and scores remain outside this independent Kimi denominator.

With Cursor Agent and `kimi-k3-high` fixed, the reviewed OmD apply skill should
match or improve Raw DESIGN.md on onboarding setup, incident operations, and
five-locale CLI handoff while preserving every task contract, accessibility,
and Evidence & Unknown.

There is no candidate, task, prompt, evaluator, order, scoring, or acceptance
delta from the frozen Kimi Preview. The only operational changes are a fresh
experiment identity and root plus the accepted checkpoint-bounded controller.
This remains one trial per task and condition, not a reliability run,
cross-model winner test, or public leaderboard run.

## Frozen denominator

- schema: `0.3`; suite: `ui-resolve-v0.2`; evaluator: `0.5`;
- runtime: Cursor Agent `2026.07.23-e383d2b`;
- runtime binary SHA-256:
  `eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831`;
- selector: `kimi-k3-high`;
- expected display name: `Kimi K3 High`;
- attribution: runtime-reported display name only, Internal;
- provider effort argument: none; controller effort metadata: `high`;
- tasks: onboarding, incident operations, five-locale CLI handoff;
- conditions: Raw DESIGN.md and OmD apply;
- trials: 1 per task and condition, 6 total;
- timeout: 900 seconds per cell;
- live-provider concurrency: globally serial, 1;
- execution bound: immutable `max_new_cells=1` on all six invocations;
- pacing: fixed 120 seconds between adjacent cells, accepted only when both
  wall and monotonic elapsed time are 120,000–125,000 ms and disagree by no
  more than 5,000 ms;
- evaluator preflight: Playwright and axe on every invocation;
- retry, fallback, model substitution, failed-cell replacement, and manual
  product edits: none;
- root-local execution lease plus a separate cross-root global provider lock;
- root: fresh `/tmp/u1963`.

The balanced order is frozen:

1. onboarding Raw;
2. incident operations OmD;
3. five-locale CLI handoff Raw;
4. onboarding OmD;
5. incident operations Raw;
6. five-locale CLI handoff OmD.

## Canonical source equality

Fresh preparation must materialize all six workspaces from the committed
canonical task and skill sources. These hashes are equality requirements, not
permission to copy any historical prepared workspace or output:

- onboarding:
  - starter `ac9e78666ee78bf270e62e0aff79b8510081bf50e05312d557979ca00aabe652`;
  - DESIGN.md `f4f241e042004655c960df1edbc28b92ddb287d39af9edfcc65f2ceb7d471e3e`;
  - Raw prompt `b9f5f52815b1ac4705b1b5acda94bd9b776e199179bfba4b10962f82e56f316c`;
  - OmD prompt `6acc53665ba591a76cc1a6656b3318f16156582f0f380f679b2d34eedd2a0774`;
- incident operations:
  - starter `0ea045c3b297e86dbee9a094da113e2b85f2d109daaf2c25631c2432d545217b`;
  - DESIGN.md `bbeab902a6a23d0de5ce8c7d804923844f1e87f96a960d32f04f8e52de041b3a`;
  - Raw prompt `a004d513d96e7826df6a1d001fc0daee81c05242aed29914a5aeeb1b291739c4`;
  - OmD prompt `7b1b16cca519c9abb4f0779919909d68812e2f66cb28eb24e92493610ea50f2d`;
- five-locale CLI handoff:
  - starter `a4c2916ecd58ff750a8948e687bc3da2a489c8848cb394568118131ed31a6586`;
  - DESIGN.md `4c1228e1a6a237e6a4b73017ff7b4ad41e48aefec5e5c5553cb94f1721c4050f`;
  - Raw prompt `31b9f87d00ae019cb61b276f823c48249d20eb45cd8341953db7532441410efe`;
  - OmD prompt `029708a6f6d17aeee2c824db30e4b79bd0e243df2d695a4cc21bcf2ae3b693ff`;
- OmD SKILL.md
  `938c6f0a7bb2ce172786274599b56591f01a82ee8e6bd1bf3d54bef03c74e4c7`;
- OmD sidecar
  `f0ad5294de3f599bbed124708c61988be9098e20d4723ce3574023144751253e`;
- installed OmD skill tree
  `497ff12a9858b2cacc9cf183050c45ee3dc42eae5b183e046edbbc1d0479fe19`;
- generated local AGENTS.md
  `ae41238bb704a4a7d86647789d0055634f41c7c1fae7cdcf7953006b36e4b848`.

Any mismatch stops before provider execution. The fresh source commit,
preparation state, manifest, matrix-cell, prepared benchmark tree, and product
tree hashes must be generated from `/tmp/u1963`; historical values must not be
copied into the preparation record.

## Transmission boundary

Standing benchmark authorization applies only to each newly prepared locked
task workspace: task-owned `index.html`; `DESIGN.md`;
`.benchmark/PROMPT.md`, `manifest.json`, and `matrix-cell.json`; local
`AGENTS.md`; and, for the OmD arm only,
`.cursor/skills/omd-apply/SKILL.md` plus `agents/openai.yaml`.

Credentials, secrets, repository history, unrelated source, catalog data,
user documents, `web/public/llms-full.txt`, other skills, all historical
prepared roots, and all historical provider outputs are excluded.

## Checkpoint, acceptance, and stop

Each invocation must use `--max-new-cells 1`. A checkpoint is valid only after
the new cell has a valid provider result, frozen evaluator score, exported run
record, and retained product and complete `.benchmark` tree attestations.
Continuations must revalidate the completed prefix, untouched suffix,
invocation/preflight/pacing chains, immutable execution bound, and exact
prepared attestations without replaying a provider, evaluator, exporter, or
cooldown.

Pass only when all 6 fresh cells and 5 cooldowns complete; OmD passes automated
and accessibility gates on 3/3 tasks; every paired OmD score is at least Raw;
median paired delta is non-negative; task behavior and Evidence & Unknown pass
6/6; product diff remains task-owned product files only; and all five
checkpoint continuations validate their retained prefix and untouched suffix.

Stop and freeze at the first source, preparation, preflight, lease, auth,
quota, selector, display-name, runtime, hash, process, timeout, pacing,
product-diff, evaluator, exporter, history, or attestation failure. A root
`STOP` sentinel, early wait, oversleep, invalid clock, or clock disagreement
also freezes before the next provider. No retry, same-root resume after a
stop, stale-lease deletion, score change, failed-cell replacement, model
substitution, automatic loop, or invisible continuation is allowed.

Passing establishes bounded Internal Kimi multi-task Preview evidence only. It
does not establish Reliability@3, confidence intervals, efficiency, public
model ranking, cross-model superiority, or frontier status.
