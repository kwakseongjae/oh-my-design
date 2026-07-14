# Periodic reference reverify pipeline

Status: R0 implemented (queue, task contract, schedule, deterministic gates, provider-neutral adapter, and a local ChatGPT-subscription Codex Terra adapter). Paid API credentials remain optional operator configuration.

## Goal

Keep 400+ DESIGN.md references fresh without letting a model, timestamp, or prose claim promote public trust by itself. A high-reasoning model collects and reconciles evidence; `reference-quality.mjs` alone computes the public tier.

## Pipeline

1. **Detect** — the daily Quality workflow recomputes all public quality tiers and TTL failures.
2. **Prioritize** — the weekly Reverify Queue workflow ranks conflicts, expired evidence, freshness conflicts, missing proof, missing Tier-1 sources, evidence gaps, and optional demand scores.
3. **Packetize** — every queue item emits string commands for humans plus shell-free `{ executable, args[] }` commands for runners, followed by `/omd:add-reference <id> --mode update`.
4. **Execute** — an external Codex/Claude/other agent runner checks out one branch or worktree per item and runs the packet with a frontier high-reasoning profile. Model names are runner configuration, not repository truth.
5. **Validate** — each item must pass `verify-reference.mjs`, the full reference pipeline, Web tests, and typecheck. Network evidence must be captured during execution; deterministic CI may repeat non-network gates.
6. **Review and merge** — one reference per PR by default. Batch PRs are allowed only when every reference has independent evidence and gate output.
7. **Observe** — the next quality run recomputes status and `nextReverifyAt`; no workflow writes `verified_v2` directly.

## Model boundary

The queue carries:

- `modelPolicy.profile`, e.g. `frontier-high-reasoning` or an operator label such as `opus-class`;
- `modelPolicy.reasoningEffort`, e.g. `high`;
- `modelPolicy.authority = evidence_worker_only`.

An Opus-class model or any future high-reasoning model can be attached by the runner. The generic queue does not hard-code a marketing model name or API endpoint because availability, auth, and tool access change independently. An explicitly selected local adapter may pin a model after validating the signed-in account's live model catalog. Local Playwright/browser-harness performs source capture before model work, without an MCP transport.

The model may:

- inspect at least two product surfaces;
- inspect official design-system, font, brand-asset, and license sources;
- reconcile Tier 1 with getdesign/refero-style Tier 2 sources;
- update DESIGN.md and `.verification.md` with atomic claim evidence;
- explain unresolved conflicts.

The model may not:

- assign or assert `verified_v2`;
- refresh dates without fresh evidence;
- resolve conflicts by majority vote;
- replace a brand UI font with an unverified fallback;
- combine unrelated references to make a failing gate disappear.

## Queue commands

From `web/`:

```bash
npm run quality:references
npm run reverify:queue -- --limit 20 --horizon-days 30
npm run reverify:queue -- --ids toss,baemin --model-profile opus-class --reasoning-effort high
```

The generated `artifacts/reverify/queue.json` and `.md` are ephemeral CI artifacts. The scheduled workflow loads the latest committed `data/reference-demand.json` snapshot. Another flat JSON map or a `{ "scores": { ... } }` document can be supplied with `--demand <path>`; reference ids are keys and larger values raise priority. Analytics refresh work updates this snapshot separately so ignored raw analytics never enter CI.

## Execution adapter contract

For each `tasks[]` item, a runner must:

1. create `codex/reverify-<id>-<date>` (or an equivalent isolated worktree);
2. load `.agents/skills/omd-add-reference/SKILL.md` completely;
3. run `worker.captureCommand` and verify that `worker.evidenceArtifact` exists, matches schema v1, has the requested `referenceId`, and contains at least one surface plus coverage;
4. run the task packet's `worker.invocation` in UPDATE mode, using that bundle as the raw truth input;
5. preserve reconciled claim evidence and conflict notes under `web/references/<id>/` (the full raw bundle remains an ephemeral artifact);
6. run every command in `acceptance[]`;
7. open a PR whose body lists surfaces, sources, changed claims, unresolved conflicts, and gate output.

Provider adapters should consume the JSON contract without changing its schema. Secrets remain in the runner or GitHub environment, never in task packets.

The implemented runner is `npm --prefix web run reverify:run -- --id <id>`. It processes exactly one reference, writes a reviewable packet/run log, invokes commands with `shell: false`, enforces adapter budget/timeout/retry/task/PR limits, validates evidence before model work, and runs structured acceptance commands after the worker returns.

Adapter configuration follows the inert `config/reverify-runner.example.json`. Optional authenticated-CLI templates are provided for usage-billed Claude and ChatGPT-subscription Codex. Both parse structured output and keep browser capture outside the model process:

- `command.executable` and `command.args[]` can target an Opus-class CLI, a high-reasoning CLI, or an internal wrapper;
- placeholders include `{packet}`, `{referenceId}`, `{modelProfile}`, `{reasoningEffort}`, `{budgetUsd}`, `{workspace}`, and `{evidenceArtifact}`;
- `maxTasksPerRun` and `maxPullRequestsPerRun` must both be 1 in runner v1;
- `billingMode: usage` requires a positive `maxBudgetUsd`; `billingMode: subscription` rejects `--budget-usd` and records `budgetUsd: null`;
- `maxRetries` and `timeoutMinutes` are mandatory hard limits;
- secret values are never written into the queue, packet, command preview, or run log.

Dry-run packet validation:

```bash
npm --prefix web run reverify:run -- --id naver --budget-usd 1
```

Actual execution requires either `--adapter <path>` or `OMD_REVERIFY_ADAPTER_JSON`, then `--execute`. The manual Reverify Queue workflow exposes the same one-reference execution path and accepts optional Anthropic/OpenAI credentials. Scheduled runs remain queue-only unless explicitly enabled.

## Local Codex Terra subscription path

`config/reverify-runner.codex-terra.example.json` runs the same `omd:add-reference` skill with the locally authenticated Codex CLI:

```bash
npm --prefix web run reverify:queue -- --ids krds --limit 1 --model-profile gpt-5.6-terra --reasoning-effort high
npm --prefix web run reverify:run -- --id krds --adapter config/reverify-runner.codex-terra.example.json
npm --prefix web run reverify:run -- --id krds --execute --adapter config/reverify-runner.codex-terra.example.json
```

The wrapper requires Codex CLI 0.144.1+, `codex login status` = `Logged in using ChatGPT`, and a live account model entry that advertises `gpt-5.6-terra` plus `high`. It removes API-key environment variables before launch, disables apps and user configuration, and does not silently fall back to another model. The deterministic collector records raw browser measurements first; Terra high then gathers official context/Tier 2 sources and reconciles them with that evidence. Actual `--execute` sends those two local files to OpenAI and therefore remains an explicit per-reference data-transfer action.

External workers receive the local task packet and raw evidence artifact. This is a data transfer boundary, so the CLI template is never selected by default and execution requires explicit operator approval after reviewing the referenced files and provider policy. Deterministic capture, manual reconciliation, and acceptance remain fully usable without that transfer.

## TTL policy

The evaluator computes the earliest `nextReverifyAt` from source capture dates:

| Evidence kind | TTL |
|---|---:|
| product surface | 90 days |
| official documentation | 180 days |
| brand asset | 365 days |
| font/license | 365 days |

Verified references enter the queue before expiry according to `--horizon-days`. Partial and Legacy references remain eligible until their blockers are resolved.

## What is operational now

- Daily deterministic stale/conflict detection: yes.
- Weekly/manual prioritized queue and model-ready packets: yes.
- Provider-neutral high-reasoning profile and high hint: yes.
- Per-reference validation and PR quality gates: yes.
- Local ChatGPT-subscription Codex Terra adapter: implemented and model/auth probe verified; packet execution remains explicit because it transfers local packet/evidence.
- Direct paid-model invocation from GitHub Actions: manual opt-in path implemented. It remains inactive until `OMD_REVERIFY_ADAPTER_JSON`, a provider executable/wrapper, credentials, an operator-selected budget, and explicit approval of packet/evidence transfer are configured.

## Standardized in-app hybrid batch

The flagship audit no longer runs as ten unrelated manual checks. `config/hybrid-reverify-v2.json` defines the target set, official inspection URL, and non-regressing capture budget. The batch contract is:

1. deterministic multi-surface capture for every reference;
2. one authoritative official/product surface in the Codex in-app browser;
3. local `/reference/<id>` desktop and 375×812 checks;
4. font-boundary, title, section, image, guideline, and horizontal-overflow checks;
5. independent reference gates followed by fleet quality/AST, Web tests, and typecheck;
6. `hold-for-reconcile` instead of silent promotion when any layer conflicts.

`npm --prefix web run reverify:hybrid:report` combines the evidence bundles with the in-app QA result contract and exits non-zero when any reference is on hold. The 2026-07-11 baseline is 10 pass / 0 hold.
