# Funnel analytics — redesign (2026-06-23)

Authoritative tracking plan for the **two core product paths**. Supersedes the
ad-hoc `reference_select` / `generation_complete` / `builder_export` / `ds_*` /
`curation_*` events. Pattern follows the reference impl
(`src/lib/fonts/analytics.ts` + `docs/font-playground-analytics.md`).

## Why this redesign

The current taxonomy conflates intents that must be measured apart:

| Problem (today) | Evidence | Fix |
|---|---|---|
| **Builder path ≠ Directory path, but share counters** | both fire `trackRef("select"/"copy"/"download")`; GA4 `reference_select` vs `ds_detail_view` are siblings but un-unified | separate namespaces `bld_*` vs `ds_*`; GA4 owns path funnels |
| **`generation_complete` conflates as-is + customize** | as-is sets `mode:"as_is"`, customize omits `mode` → unsplittable; `customEvent:mode` unregistered (400) | always emit `mode`, register the dimension |
| **`builder_export` is not an export** | fires automatically on reaching preview; ≈1:1 with `generation_complete` (redundant) | drop it; the real export = `bld_export` (download/copy) |
| **Upstash `copy` counter is polluted** | `install-cta.tsx` fires `trackRef("copy")` → copying the npx command inflates a reference's *content*-copy popularity | route install copies to a new `install` counter |
| **Cardinality leaks** | `search_reference {query: rawText}`, `ds_detail_view {referrer: document.referrer}` | bucket / enum them |
| **Curation is dead weight** | 28d: 53 completes (~2% of builder), **0 shares, 0 shared_view** — viral hypothesis falsified | remove `curation_*` + `shared_view_*` surfaces & events |

## Decisions feeding this plan

1. **Use-as-is is the single primary builder path.** The upfront Customize/Use-as-is
   toggle is removed; picking a reference generates as-is in one step. Customize is
   **demoted** to a secondary "tweak" affordance on the preview screen (still
   measured via `bld_customize_*`, so we can later decide full removal on data).
2. **Curation quiz + share machinery removed** (`/curation`, `/result/[typeCode]`,
   survey components). KEEP `/collections` (separate curated browse, SEO value) and
   KEEP the `matchReferences` scoring lib (reuse for builder recommendations).
3. **One-time taxonomy reset is acceptable now** — the product is ~1 month old and
   just redesigned (2026-06-10); GA4 history break is cheap today, expensive later.
   Cut over on a dated boundary and annotate it in GA4.

---

## Namespace

`<surface>_<action>`, snake_case, verb form. Surfaces:

- `bld_` — the builder (`/builder`)
- `ds_` — the design-system directory (`/design-systems/[id]`)
- `act_` — activation (install hand-off; shared across surfaces)

ID parameter is **always `reference`** (finite catalog ~356 → safe dimension).

---

## Primary funnels

### Builder (`bld_`) — the generator
```
bld_open            land on /builder
bld_reference_select{reference, category, entry}   pick a reference
bld_generate        {reference, mode}              DESIGN.md generated = preview reached
bld_export          {reference, channel}           actually grab the .md (download|copy)
act_install_copy    {reference, surface}           copy the npx install command  ← KEY EVENT
```
`mode = as_is | customize`. `channel = download | copy`. `entry = search | browse | hot | deeplink`.

### Directory (`ds_`) — use-as-is browse
```
ds_detail_view      {reference, channel}           open a reference page
ds_export           {reference, channel}           copy/download the canonical .md as-is
act_install_copy    {reference, surface}           (if a directory install CTA exists)
```
`channel` on `ds_detail_view` = bucketed referrer enum (`direct|search|social|ai|referral|internal`), NOT the raw referrer.

---

## Events table (current → target)

| Target event | Status | Replaces | Params | Fires when |
|---|---|---|---|---|
| `bld_open` | **add** | — | — | /builder mounts |
| `bld_reference_select` | rename | `reference_select` | reference, category, entry | a reference is picked |
| `bld_generate` | rename+merge | `generation_complete` (+`builder_export`) | reference, **mode** | DESIGN.md generated / preview reached |
| `bld_export` | rename+merge | `download_designmd`, `copy_designmd` | reference, channel | user downloads/copies the generated .md |
| `bld_customize_open` | rename | `wizard_step_view`/`skip_wizard_toggle` | reference | customize panel opened (demoted path) |
| `bld_customize_change` | rename | `style_preference` | reference, token | a style token changed (`color\|font\|weight\|radius\|dark\|components`) |
| `bld_search` | rename+fix | `search_reference` | query_len_bucket, has_results | search in builder (**no raw query**) |
| `bld_category_filter` | rename | `category_filter` | category | category chip toggled |
| `ds_detail_view` | keep+fix | `ds_detail_view` | reference, channel | detail page mounts (**referrer→enum**) |
| `ds_export` | rename+merge | `ds_copy_md`, `ds_download_md` | reference, channel | copy/download canonical .md |
| `ds_external_click` | keep | `ds_external_click` | reference, destination | outbound to official DS |
| `ds_md_view_toggle` | merge | `ds_view_toggle`, `md_view_toggle` | reference, view | rendered/raw toggle |
| `ds_philosophy_toggle` | rename | `philosophy_toggle` | reference, on | philosophy section toggled |
| `ds_prompt_copy` | rename | `prompt_copy` | reference | copy the agent prompt |
| `ds_browse` | merge | `browse_ds_directory`, `browse_open`, `hot_filter` | filter | directory browse / filter |
| `act_install_copy` | rename | `install_copy` | reference, surface | npx install command copied ← **KEY EVENT** |
| — | **remove** | `curation_*` (10), `shared_view_*` (3) | — | curation surfaces deleted |
| — | **remove** | `builder_export` | — | redundant with `bld_generate` (1:1 auto-fire) |

Generic collisions to namespace in a follow-up (likely landing-scope, out of this surface): `cta_click`, `click`, `nav_click`, `outbound_click`. Flagged, not in scope here.

---

## Parameters table

| Param | Type | Cardinality | Notes |
|---|---|---|---|
| `reference` | string (catalog id) | ~356, finite | THE join key; register as custom dimension |
| `mode` | enum `as_is\|customize` | 2 | splits the demoted customize path |
| `channel` (export) | enum `download\|copy` | 2 | on `bld_export` / `ds_export` |
| `channel` (view) | enum `direct\|search\|social\|ai\|referral\|internal` | 6 | on `ds_detail_view` — bucketed referrer |
| `entry` | enum `search\|browse\|hot\|deeplink` | 4 | how the reference was reached |
| `surface` (install) | enum `hero\|ref_detail\|collection\|builder` | 4 | where the install command was copied (matches `InstallSurface` in `lib/activation/analytics.ts`) |
| `category` | enum (catalog categories) | ~12 | finite |
| `token` | enum `color\|font\|weight\|radius\|dark\|components` | 6 | which style was customized |
| `query_len_bucket` | enum (`0`,`1-5`,…) | 7 | replaces raw search query |
| `has_results` / `on` | boolean | 2 | `has_*`/`is_*` style |
| `destination` | enum `official_ds\|homepage\|github` | ~3 | outbound target |

**Banned:** raw `query`, `referrer`/`url`, `brand_name`, array `.join(",")` of free text.

---

## Active users (DAU / WAU / MAU) — server-side, consent-independent

GA4/Mixpanel DAU is consent-gated (EU fail-closed) and ad-blocker-lossy, so it
under-counts and *swings whenever dashboards or config change* — which is exactly
how the 2026-06-23 taxonomy reset reads as a "decline" that isn't real. The
north-star (DAU=1000) needs a floor that does NOT depend on GA4 being configured
or consent being granted.

**Mechanism (added 2026-06-24):**
- Client: `src/lib/active.ts` → `pulseActive()`, mounted once in `AnalyticsInit`.
  Generates a random first-party visitor id (`localStorage omd:vid`, no PII) and
  pings `/api/active` **once per session** (`sessionStorage` dedupe).
- Server: `POST /api/active` → `PFADD omd:active:YYYYMMDD <vid>` (+ 35-day TTL).
  One HyperLogLog per UTC day; Redis keeps an aggregate cardinality sketch only,
  never the individual ids.
- Read: `GET /api/active` → `{ dau, wau, mau }`. DAU = today's sketch; rolling
  WAU/MAU = `PFCOUNT` *union* of the trailing 7 / 30 day keys (no per-window
  writes). CLI: `node scripts/analytics/pull-active.mjs` (writes
  `data/analytics/raw/active.json` incl. a 30-day per-day DAU series).

**Why it's privacy-safe & consent-independent:** the beacon carries no analytics
payload (no page, no referrer, no event) — purely "a unique browser was active
today" — and is irreversibly folded into an aggregate HLL. Treat it as the truth
for *active users*; keep GA4/Mixpanel for *what they did* (the funnel). If legal
later wants this consent-gated, move `pulseActive()` behind the same gate as GA —
but you then re-inherit the ad-blocker/consent under-count.

## Upstash counter fix (per-reference popularity)

Keep `omd:counter:{select,generate,download,copy}` as the unified popularity
leaderboard, with TWO fixes:

1. **`install-cta.tsx` must stop calling `trackRef("copy")`.** Add a new event type
   `install` → `omd:counter:install`. Net: copying the npx command increments
   per-reference *install intent* (a genuinely useful leaderboard) instead of
   polluting content-copy popularity.
   ```ts
   // src/lib/kv.ts
   export type TrackEvent = "select" | "generate" | "download" | "copy" | "install";
   export const TRACK_EVENTS = ["select","generate","download","copy","install"] as const;
   ```
2. (Optional) If path-separated popularity is wanted, namespace keys
   `omd:counter:<surface>:<event>`. Recommendation: **don't** — keep Upstash as
   surface-agnostic "which references do people want", and let GA4 `bld_*`/`ds_*`
   own path-separated conversion. (Role-split: Upstash=popularity, GA4=funnel.)

---

## GA4 admin setup (one-time, after deploy)

**Custom dimensions (event-scoped):** register so the funnel is queryable via the
Data API (these are currently 400-erroring):

| Dimension | Param | Scope |
|---|---|---|
| Reference | `reference` | Event |
| Mode | `mode` | Event |
| Export channel | `channel` | Event |
| Entry | `entry` | Event |
| Install surface | `surface` | Event |

**Key events (conversions):** `bld_generate`, `act_install_copy`. (Optionally
`bld_export` as a mid-funnel conversion.)

**Annotation:** add a GA4 annotation on the cutover date marking the taxonomy reset.

---

## Funnel Exploration specs (GA4 UI)

**Builder activation funnel** (open → select → generate → export → install):
`bld_open` → `bld_reference_select` → `bld_generate` → `bld_export` → `act_install_copy`,
breakdown by `mode` and `entry`.

**Directory as-is funnel:** `ds_detail_view` → `ds_export` → `act_install_copy`,
breakdown by `channel`.

**As-is vs customize:** segment `bld_generate` by `mode`; compare downstream
`bld_export` + `act_install_copy` rates → answers "do customizers convert better?"
(the question we currently can't answer).

---

## Helper modules (to create)

- `src/lib/builder/analytics.ts` — `trackOpen`, `trackReferenceSelect`,
  `trackGenerate`, `trackExport`, `trackCustomizeOpen`, `trackCustomizeChange`,
  `trackSearch`, `trackCategoryFilter` (+ shared `lenBucket`).
- `src/lib/design-systems/analytics.ts` — `trackDetailView`, `trackExport`,
  `trackExternalClick`, `trackMdViewToggle`, `trackPhilosophyToggle`,
  `trackPromptCopy`, `trackBrowse`.
- `src/lib/activation/analytics.ts` — `trackInstallCopy`.

All `track*` wrap `@/lib/gtag` `event()` + the appropriate `trackRef()`/install
counter. **No raw `event("...")` left at any callsite.**

---

## Implementation status (2026-06-23 — DONE, staged)

✅ **Shipped in this changeset** (tsc clean · `next build` green · 553 tests pass):
1. **Curation removed** — deleted `/curation`, `/result/[typeCode]`, all of
   `components/survey/`; 308 redirects added (`/curation`→`/builder`,
   `/result/:typeCode`→`/design-systems`); sitemap + footer + builder links
   pruned. Kept `lib/survey/` (`matchReferences` + `DESIGN_TYPES`) and `/collections`.
2. **Upstash `install` counter** — `kv.ts` + `gtag.ts` add the `install` type;
   `install-cta` now fires `trackRef("install")` (was the polluting `copy`).
3. **3 helper modules** — `lib/builder/analytics.ts`, `lib/design-systems/analytics.ts`,
   `lib/activation/analytics.ts`. All funnel callsites migrated; `builder_export`
   deleted; `bld_generate` always carries `mode`; query/referrer/url leaks bucketed.
4. **Customize demoted** — builder mode toggle removed (pick → as-is → preview);
   `Customize` button on the preview screen opens the wizard; `bld_customize_*`
   measures the opt-in path.

✅ **GA4 admin config DONE (2026-06-23)** — via `scripts/analytics/setup-ga4.mjs --apply`
(idempotent; needs the Admin API enabled + the SA at Editor). Created the 5 custom
dimensions (`reference`, `mode`, `channel`, `entry`, `surface`) and the 2 key events
(`bld_generate`, `act_install_copy`). The old key events (`copy_designmd`,
`download_designmd`, `ds_copy_md`, `ds_download_md`, `cli_install_cta_click`) go
stale after deploy — harmless; optionally prune later.

⏭️ **Remaining (post-deploy):**
- **Cutover annotation** — add a GA4 reporting annotation on the DEPLOY date
  (UI, ~10s) marking the taxonomy reset. (Do it after deploy, not now.)
- **DebugView verify** — confirm `bld_generate{mode}` / `bld_export{channel}` /
  `act_install_copy{surface}` fire once each post-deploy.
- **2-week read**, then decide full customize deletion from the `mode` split.
- **Peripheral events NOT migrated** (out of the activation funnel — left as raw
  `event()` to avoid history churn): `browse-modal` (`browse_*`),
  `content-preview-modal` (`copy_content`/`download_content`), `preview.tsx`
  (`component_add`/`component_remove`), `landing-v2/nav` (`nav_click`/`cta_click`/
  `outbound_click`). `playground_*` stays untouched per the house rule.

---

## Debug checklist

- [ ] DebugView: `bld_reference_select` → `bld_generate{mode}` → `bld_export{channel}`
      → `act_install_copy{surface}` all fire once per interaction.
- [ ] `bld_generate` carries `mode=as_is` on direct pick, `mode=customize` after a tweak.
- [ ] No raw query/referrer in any payload.
- [ ] Upstash: copying npx increments `omd:counter:install`, NOT `:copy`.
- [ ] No `curation_*` / `shared_view_*` / `builder_export` events appear.
