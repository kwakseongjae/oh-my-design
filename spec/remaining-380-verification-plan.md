# Remaining 380 reference verification plan

Status: execute after the current v2 release is deployed and the first complete
UTC analytics day is available.

## Objective

Promote the remaining 171 Partial and 209 Legacy references to Verified v2
without lowering the evidence contract. The unit of delivery is 10 references:
38 independently releasable batches, never one opaque 380-reference rewrite.

## Demand-ranked queue

Rebuild the queue before every batch. Exclude the existing 20 Verified v2
references and rank the rest using normalized, trailing-28-day signals:

| Signal | Weight | Source |
|---|---:|---|
| Builder reference selection | 30% | Upstash `select` |
| Builder export/handoff | 25% | Upstash `download` + `copy` + `install` |
| Search demand | 20% | GSC brand/reference impressions and clicks |
| The Wall opens | 15% | GA4 `wall_reference_open` |
| Verification risk | 10% | Legacy before Partial; stale/conflicted evidence first |

If production data is below 30 users for a signal, omit that signal and
renormalize the remaining weights. Ties resolve by Partial before Legacy, then
catalog id. No model chooses the queue by taste.

## Delivery waves

| Wave | Scope | Pace | Exit condition |
|---|---:|---:|---|
| 1 — demand leaders | 60 refs / 6 batches | 20 per week | top unverified demand is covered |
| 2 — active long tail | 160 refs / 16 batches | 20 per week | every ref with observed select/search/wall demand is verified |
| 3 — catalog completion | 160 refs / 16 batches | 20 per week | 400/400 are Verified v2 or explicitly held with a public-evidence reason |

The pace is a quality ceiling, not a quota. A held reference does not count as
verified and returns to the next queue after its evidence blocker changes.

## Ten-reference batch pipeline

1. Generate a demand-ranked queue and lock the 10 ids for the batch.
2. Capture official multi-surface evidence with the MCP-free collector.
3. Use browser-harness only for SPA, overlay, interaction, responsive, or
   conflict exceptions that deterministic capture cannot settle.
4. Reconcile through the same `omd:add-reference` skill. Codex subscription
   execution uses `gpt-5.6-terra` + `high`; provider output remains an
   evidence worker proposal, never the acceptance authority.
5. Apply `unknown means absent` at the smallest field boundary. Never promote a
   fallback font, generic component, heuristic spacing, or adjacent surface.
6. Run deterministic claim/source/surface/conflict acceptance and font-state
   classification.
7. Acceptance-test every id through Home → `/builder` → preview at desktop and
   390px. `/reference/[id]` is diagnostic only.
8. Sync canonical `web/references`, generated registry/quality/AST, then run the
   full Web tests, typecheck, quality/AST checks, and production build.
9. Release the batch and record before/after quality counts and held reasons.
10. Recompute demand before selecting the next 10.

## Per-reference acceptance

- product/company context remains useful and first-party grounded;
- every promoted token has a claim, source, surface, method, and checked date;
- product-use, live surface-use, official distributed fonts, declared-only
  fonts, and runtime specimen availability remain separate facts;
- unresolved conflicts are zero, or the affected field stays absent;
- no substitute font or generic component is rendered as brand truth;
- builder has no warning chrome replacing valid content and no horizontal
  overflow on desktop or 390px;
- copy/download outputs contain only the same canonical high-confidence values.

## Reverification after 400/400

- daily: deterministic freshness/TTL scan, no automatic content promotion;
- weekly: rebuild a risk queue from changed sources, conflicts, demand, and
  failed captures;
- monthly: reverify the highest-demand 20 and every reference whose primary
  source changed;
- model-assisted reconcile always ends at deterministic acceptance plus builder
  browser QA.

## Stop conditions

Pause a batch when an official surface is inaccessible, the product/marketing
domain boundary cannot be resolved, the font identity is ambiguous, or a
component claim cannot be tied to an inspectable surface. Preserve the existing
reference and record the blocker; do not fill the gap.
