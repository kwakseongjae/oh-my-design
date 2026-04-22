# Font Playground — GA4 Tracking Plan

Source of truth: `src/lib/fonts/analytics.ts`. All tracked events are
emitted through typed helpers there (`trackOpen`, `trackHeroSubmit`, …).
This file is the companion "deploy side" document — what to register in
GA4 admin so the parameters land in Explorations and Funnel reports.

## Primary funnel

```
1. fp_open              → landed on /font-playground
2. fp_hero_submit       → described a vibe (free text or chip)
3. fp_match_view        → results rendered (AI or offline fallback)
4. fp_match_select      → clicked one of the 3 picks
5. fp_customize_open    → customize modal opened
6. fp_customize_save    → saved a finished font
7. fp_export_copy       → copied CSS / DESIGN.md / share link
```

Each fires at most once per user interaction. Build a **Funnel
Exploration** in GA4 with these seven events in this order; each step's
drop-off tells you where the UX is bleeding.

**Alternate entry:** `fp_share_land` replaces step 2 for users arriving
via share link; they skip directly to step 5.

## Secondary events

| Event | Fires on | Purpose |
|---|---|---|
| `fp_stage_enter` | Every stage transition | UX pathing — `from` and `to` stage |
| `fp_hero_chip_click` | Suggestion chip clicked on Stage 1 | Measures which canned queries convert |
| `fp_match_fallback` | AI match failed → deterministic picks shown | Tracks AI availability + reasons |
| `fp_browse_filter` | Script / mood filter changed in catalog | Popularity of filter values |
| `fp_modal_tweak` | Color / weight / size / spacing / line-height changed | Which knobs get used |
| `fp_modal_similar_pick` | Similar-font card clicked inside modal | Lateral exploration |
| `fp_modal_reset` | Reset button clicked in modal | "I gave up" signal |
| `fp_saved_open` | Opened a saved font from Stage 5 | Re-engagement |
| `fp_saved_delete` | Deleted a saved font | Churn |
| `fp_external_click` | "Get font" / source link opened | Outbound interest |
| `fp_query_refine` | Refinement form submitted on Stage 2 | User iteration |

## Parameters

| Parameter | Type | Used by | Notes |
|---|---|---|---|
| `reference` | string | most events | Catalog id (e.g. `pretendard`). Finite cardinality. Matches the project-wide convention used by `ds_*` events. |
| `source` | string | open, hero_submit, customize_open | `direct \| share \| browse_modal \| catalog \| input \| chip \| match \| browse \| saved` |
| `kind` | string | match_view, match_select | `ai \| fallback` |
| `fallback_reason` | string | match_view, match_fallback | `no_api_key \| rate_limited \| upstream_error \| no_picks \| network` |
| `rank` | number | match_select | 1/2/3 — which pick was clicked |
| `pick_count` | number | match_view | Usually 3; useful for anomalies |
| `query_len_bucket` | string | hero_submit, match_view, match_select, query_refine | `0 \| 1-5 \| 6-15 \| 16-30 \| 31-60 \| 61-120 \| 121+` (bucketed to limit cardinality) |
| `name_len_bucket` | string | customize_save | Same bucketing for the save-name field |
| `scripts` | string | hero_submit, match_view, query_refine | `any \| hangul \| latin \| hangul+latin` (sorted for stability) |
| `channel` | string | export_copy | `css \| designmd \| share` |
| `surface` | string | export_copy | `modal \| guide \| saved` |
| `has_customizations` | boolean | customize_save | Did the user tweak away from defaults? |
| `from` / `to` | string | stage_enter | Stage names — origin + destination |
| `mood`, `script` | string | browse_filter | Filter values |
| `destination` | string | external_click | `get_font \| source \| google_fonts` |
| `position` | number | hero_chip_click | 0-5 index of the suggestion chip |

## One-time GA4 setup

For any parameter to appear in **Exploration / Funnel / Segment**
builders, register it as a custom dimension / metric under
`Admin → Custom definitions`:

### Register as custom *dimensions* (all string params above)

`reference`, `source`, `kind`, `fallback_reason`, `query_len_bucket`,
`name_len_bucket`, `scripts`, `channel`, `surface`, `from`, `to`,
`mood`, `script`, `destination`, `has_customizations`.

Scope: **Event** for all of the above.

### Register as custom *metrics*

`rank`, `pick_count`, `position` — scope **Event**, unit **Standard**.

### Mark key conversions

Mark as `Mark as key event`:
- `fp_customize_save` (primary success — user committed to a font)
- `fp_export_copy` (economic success — user took the artefact)

## Sample Funnel Exploration

- Step 1: `event_name = fp_open`
- Step 2: `event_name = fp_hero_submit`
- Step 3: `event_name = fp_match_view`
- Step 4: `event_name = fp_match_select`
- Step 5: `event_name = fp_customize_open`
- Step 6: `event_name = fp_customize_save`
- Step 7: `event_name = fp_export_copy`

Set the funnel to **open** so users can enter at any step (accounts for
share-link landings). Segment by `source` to split direct vs share
traffic.

## Debugging

- **Real-time check:** `Admin → DebugView` while browsing
  `?gtm_debug=1` locally fires all events in real time.
- **Event lookup:** every emit lives in `src/lib/fonts/analytics.ts` —
  search for the helper (e.g. `trackMatchView`) to find its call sites.
- **Adding a new event:** add a helper in `analytics.ts`, document it
  here, register any new dimension in GA4 admin. Keep event names
  ≤ 40 chars, parameter names ≤ 40 chars, values ≤ 100 chars.
