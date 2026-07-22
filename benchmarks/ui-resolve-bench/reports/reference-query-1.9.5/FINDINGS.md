# 1.9.5 reference query layer — findings

## Decision

Accept the product contract at commit `4d29347`. Keep the benchmark family
`Evidence & Unknown` at **Internal**. This result proves deterministic retrieval,
distribution, and evidence policy; it does not prove model lift, UI-Resolved
lift, frontier performance, or superiority over another skill.

## Frozen-gate result

| Gate | Result |
|---|---:|
| Five-locale semantic fixtures | 5 / 5 |
| Exact catalog id at rank 1 | 440 / 440 |
| Three-run deterministic mismatches | 0 |
| Unsafe Partial/Legacy promotions | 0 |
| Unsupported generic fallbacks | 0 |
| Catalog/quality mismatches | 0 |
| Missing-quality fail-closed recovery | pass |
| Full evaluator wall time | 960.5ms |
| Installed query payload | 532,633 bytes |

The canonical machine result is `SUMMARY.final.json`. The quality manifest has
440 entries generated from canonical `web/references/` on 2026-07-22.

## Product outcome

- `omd:init` no longer asks the model to score the catalog in its head. It runs
  the bundled Node 18 helper against one installed data root.
- Exact brand comes first; semantic match follows; quality and stable id break
  ties. The model may not reorder the returned candidates.
- `verified_v2` exposes only evidence-qualified fields. `partial` and
  `legacy_snapshot` remain context-only until reverified. Unknown fields are
  omitted at the smallest unresolved boundary.
- A vague request returns `needs_clarification` with zero candidates. The old
  Vercel/Linear/Notion “safe reference” behavior is removed.
- Korean, English, Japanese, Simplified Chinese, and Traditional Chinese query
  aliases run locally. A packaged Korean neighborhood-marketplace query selects
  `karrot` with the observed `marketplace` and `neighborhood` theme terms.
- Claude Code, Codex, OpenCode, and Cursor receive the same quality manifest;
  folder-based skill channels also receive the query helper. `omd doctor` rejects
  a missing helper, missing manifest, invalid status, duplicate id, or id drift.

## Failures retained

1. The first catalog-scale evaluator recomputed every tone/theme normalization
   for every query and exceeded the bounded smoke window. It was interrupted.
   A load-time immutable reference index reduced the complete 440 × 3 exact-id
   cell plus locale fixtures to 960.5ms without changing ordered results.
2. The first package command hit a user npm-cache ownership error. No user cache
   was changed; a temporary cache produced the final tarball.
3. The first Korean marketplace smoke produced a semantic tie. Localized product
   nouns (`동네` → `neighborhood`, `중고거래` → `marketplace`) now disambiguate
   Karrot without a network translation or brand-specific override.

## Distribution and verification

- Final tarball: 5,775,747 bytes.
- Direct execution from the extracted tarball returned `karrot`,
  `verified_v2`, `evidence-qualified-fields-only` for the Korean marketplace
  query.
- Root suite: 190 pass / 1 conditional skip. TypeScript, build, generated-data
  check, JSON/syntax checks, count drift, and diff checks passed.

## Next experiment

`1.9.6` is the pre-registered model-transfer patch: keep this query contract
fixed and measure the Evidence & Unknown slice across three model families. Do
not turn this calibration into a public ranking. If the frontier gates remain
open after `1.9.9`, continue `1.9.10`, `1.9.11`, and further bounded `1.9.x`
experiments; the number 9 is not a release deadline.
