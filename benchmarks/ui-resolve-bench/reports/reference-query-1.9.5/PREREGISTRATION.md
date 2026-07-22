# 1.9.5 reference query layer — preregistration

Locked on 2026-07-22 before implementation or result inspection.

## Hypothesis

A deterministic, quality-aware local reference query will preserve exact brand
selection while preventing the current in-head scorer from returning ungraded
defaults or promoting Partial/Legacy references as product facts.

## Product and benchmark slice

- Product candidate: `1.9.5-candidate`
- Benchmark family/status: Evidence & Unknown / Internal
- Source baseline: `f70efa2`
- Catalog: the same installed `reference-fingerprints.json`, plus a generated
  conservative quality manifest derived from canonical `web/references/`
- Runtime: dependency-free Node 18 helper shipped inside `omd-init`
- Network/API/MCP/model call: none
- Existing user checkpoint: unchanged; the user still chooses a candidate
- Changed variable: Phase 2 candidate retrieval and evidence eligibility only

## Frozen fixtures

1. EN calm/trustworthy fintech product;
2. KO warm/local marketplace;
3. JA precise/minimal developer dashboard;
4. ZH-CN clear enterprise productivity tool;
5. ZH-TW trustworthy financial service;
6. exact-id request for a non-Verified reference;
7. vague request with no usable category/tone/brand signal;
8. missing quality manifest.

Catalog-scale acceptance also runs across all 440 entries.

## Objective gates

All gates are required:

1. **Determinism:** three runs per fixture produce identical ordered ids,
   scores, quality labels, and promotion policies.
2. **Catalog integrity:** every result id exists; exact valid id hint is rank 1;
   an unknown id is never fabricated.
3. **Quality integrity:** returned status equals the generated manifest and the
   manifest count equals the installed fingerprint count.
4. **Unknown honesty:** `partial` and `legacy_snapshot` have
   `token_policy: context-only-reverify-first`; only `verified_v2` may use
   `evidence-qualified-fields-only`.
5. **Abstention:** a query with no recognized signal returns
   `needs_clarification` and zero candidates; no Vercel/Linear/Notion fallback.
6. **Locale coverage:** all five locale fixtures return at least one semantic
   candidate without translating user copy through a network service.
7. **Fail closed:** missing or mismatched quality data returns a non-zero CLI
   result and names `omd install-skills` or `omd doctor` as recovery.
8. **Distribution:** Claude Code, Codex, OpenCode, and Cursor installs receive
   the same quality manifest; folder-based skill channels also receive the query
   helper.

## Metrics and guardrails

Report exact-id recall, locale fixture success, unsafe promotion count,
unsupported fallback count, quality mismatch count, deterministic mismatch
count, wall time, and packaged bytes. This patch is successful only with 100%
exact-id/locale fixture success and zero unsafe promotion, fallback, quality,
or determinism errors.

No model/skill lift, UI-Resolved, frontier, or superiority claim follows from
this product-contract calibration. A later paired Evidence & Unknown task must
measure whether the query layer changes delivered UI outcomes.

## Retention

Failures and mutants remain in the repository. Do not adjust the frozen fixtures
or quality thresholds after seeing results; a semantic change creates the next
product patch and benchmark contract.
