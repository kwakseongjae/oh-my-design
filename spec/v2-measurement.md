# v2 discovery + sharing measurement

Status: instrumentation complete; production baseline starts on the first full
UTC day after deploy.

## Pre-deploy context

The latest local analytics snapshot covers GA4 through the current 60-day pull
and GSC through 2026-07-07. It is context, not a baseline for the new events.

- GA4 active users are still concentrated in South Korea (8,784 in the pull),
  while the United States contributes 305.
- GSC shows 9,756 US impressions but only 48 clicks (0.5% CTR). English discovery
  has reach but weak snippet/landing conversion.
- `/design-systems` has 2,877 impressions and 10 clicks (0.3% CTR); individual
  reference pages and shareable evidence artifacts are the intended long-tail fix.
- Existing builder volume is sufficient for a fast read: 6,090 `bld_generate`
  events and 2,486 `bld_export` events in the current pull.

## New event contracts

| Lane | Events | Primary read |
|---|---|---|
| Source formats | `bld_source_format_view`, `bld_source_format_export` | export users / format-view users by `format` |
| Collections | `col_view`, `col_open`, `col_builder_click` | builder-click users / collection-view users by `color_family` |
| Sharing | `ref_share_copy` | share-copy users by `artifact` and `location` |
| The Wall | `wall_reference_open` | direct builder-preview demand by `reference` |
| Viral landing | page/session data on `/design-systems/*/evolution` | landing → builder-open rate |

All dimensions are finite enums or catalog ids. Raw URLs, free text, and query
strings are excluded.

## Baseline protocol

1. Deploy the code and run `node scripts/analytics/setup-ga4.mjs --apply` after
   GA4 has observed each new event at least once.
2. Mark the next complete UTC day as baseline day 1. Partial deployment day is
   excluded.
3. Pull 7 complete days with `node scripts/analytics/pull-all.mjs --days 7`.
4. Read the new `SOURCE_FORMATS`, `COLLECTIONS`, and `REFERENCE_SHARES` blocks
   from `node scripts/analytics/summarize.mjs`.
5. Do not make winner/loser calls until each compared row has at least 30 users;
   continue collecting otherwise.

## Decision rules

- Keep all four source tabs through the first 14 complete days. Promote a
  non-DESIGN.md tab only if its export-user rate is at least 50% of DESIGN.md's.
- Keep standalone color chips for families with at least 30 references; combine
  smaller families into `Etc`. Order chips by the current canonical reference
  count, not traffic, so the control remains deterministic as the catalog changes.
- Continue evolution artifacts if they produce either share copies or organic
  entrances. A zero-share artifact may still be valuable SEO content, so require
  both zero share users and zero organic entrances for 14 complete days before
  considering removal.
- Guardrail: `bld_generate → act_handoff` must not fall by more than 10% relative
  to the preceding complete 14-day window after adding source/share controls.

## Next expansion

After the five Korean demand leaders establish the template, select the next
evolution batch by actual `select` demand and English search impressions. The
current candidate order is Apple → KRDS → 29CM → Banksalad → Channel Talk; each
entry still requires a repository-recorded before/after change and a Verified v2
evidence graph. Unknown history remains absent.
