# Cathay provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/cathay/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | cathay |
| name | Cathay |
| country | TW |
| category | finance |
| homepage | https://www.cathaybk.com.tw |
| primary_color | `#00512a` |
| logo | type `favicon`, slug `https://www.cathaybk.com.tw/apple-touch-icon.png` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

Token note from source: `primary = deep brand green #00512a (live primary CTA fill); accent = bright Cathay green #26a862 (most-used non-neutral, icon + emphasis)`. Dual destination (E2a): this ledger and portable Experience Scope 13 (same note plus the adjacent register-split / `#00512a`-as-CTA-fill-not-accent / `#fafafa`-as-canvas-not-surface / derived editorial implementation inference / not-Cathay-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / first-party apple-touch slug URL `https://www.cathaybk.com.tw/apple-touch-icon.png` is dual: this identity ledger + portable Typography & Assets 211 (E2a). Named gaps 594–603 has no first-party-mark sentence and does not restate the URL.

Homepage `https://www.cathaybk.com.tw` is dual-destination: Experience Scope 9/11 + this identity/surfaces/Proof ledger (E2a). Redirect host `https://www.cathay-cube.com.tw/cathaybk` and named Tier 1 host `https://www.cathay-cube.com.tw` are dual Scope 11 + this surfaces/Tier 1/Proof ledger (E2a). `https://www.cathayholdings.com` is dual Scope 11 (country-identity, not a token capture) + this country-sources ledger (E2a).

Catalog `primary_color` `#00512a` destinations: this identity ledger + portable Scope token-note 13 / atmosphere 15 + Distinctive unmerged B2a 38 / bullet 40 + Principles capture-bound 61 / Do 63 + Semantic unmerged-role 94 / Cathay Deep Green 96 + Capture-record Empty 225 / Focus 231 / named-Focus prose 235 + Primary CTA Background 247 / Border 249 / field note 256 + Outline text/border 276–277 / field note 282 + Motion CTA press 168 + Form Input named Focus 418 / 432 + Off-white Hero 459 / 464 + Product Card local child 479 + Named gaps 600 (E2a). Avoid 82 names `#e87c07`, not this hex. Content Observed 534–536 is the live tagline/CTA strings without this hex. Warn orange `#e87c07` destinations: Distinctive 47 + Avoid limiter 75 / Don’t 82 + Semantic unmerged-role 94 / Warn Orange 108 + Capture-record Error 227 + Form Input error reason 428 (E2a). YAML `rounded.full` 9999 destinations: Distinctive unmerged 38 + Shape YAML row 118 / limiter 120 / list item 124 / local-not-universal 126 + Primary CTA field note 256 + Outline field note 282 (E2a).

`tokens.source: live-extract` and `components_harvested: true` are this ledger only as YAML keys (A1c). Portable Font evidence restates live computed surface-use in the table row at 183 (E2a). Line 179 is the adjacent complete B2a on evidence-class application, not the live-extract restatement. YAML `verified` 2026-06-08, `added` 2026-06-08, and `extracted` 2026-06-08 are this freshness ledger. Footer **Verified:** 2026-06-08 is this ledger only.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-08 |
| added | 2026-06-08 |
| tokens.extracted | 2026-06-08 |
| footer Verified | 2026-06-08 (omd-add-reference — Tier 1 live inspect) |
| HTML-comment live inspect | 2026-06-08 |
| design-md sidecar inspected | 2026-06-08 |

Conflicts unresolved: none. Preserved value pairs inside the reconstruction: `#00512a` primary CTA fill vs `#26a862` accent; `#fafafa` canvas vs `#ffffff` surface / on-primary; `#333333` heading vs `#555555` body vs `#888888` muted; `#00283d` footer vs heading ink; `#eeeeee` hairline vs `#bebebe` border-mute; YAML card padding `27px` vs body `21-27px`; 5px harvested corners vs link 0px vs YAML `rounded.full` 9999; 50px primary CTA vs 40px 登入 vs ≈187px glass tiles; 16px nav vs 16-18px Quiet Nav vs 18px subheading; footer on-band `#ffffff` vs sub-nav/footer-group `#555555`; overlay shadow `rgba(0,0,0,0.22)` vs scrim `rgba(0,0,0,0.5)` / same-value overlay-as-scrim; YAML/live stack Roboto Flex + Noto Sans TC vs §9 prompt-stated Noto Sans TC headline. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen. §9 parent-child tuples stay on local recipes, not as extra global tokens.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | bank-homepage | https://www.cathaybk.com.tw (301/redirect to https://www.cathay-cube.com.tw/cathaybk) | 2026-06-08 (source footer + HTML comment + canonical `web/references/cathay/.verification.md`) |
| cube-host | same-homepage-host | https://www.cathay-cube.com.tw | named in source footer as Tier 1 for the same inspect |
| holdings | group-corporate | https://www.cathayholdings.com | country source; not a token capture |
| app-store-tw | country-identity | Apple App Store TW (CUBE App listing) | country source; not a token capture |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.cathaybk.com.tw → https://www.cathay-cube.com.tw/cathaybk | 2026-06-08 |
| cube-host | product-surface | https://www.cathay-cube.com.tw | named footer; same inspect |
| holdings | group-corporate | https://www.cathayholdings.com | country source |
| verification | proof-sidecar | `web/references/cathay/.verification.md` | 2026-06-08 |

### Tier 1

- https://www.cathaybk.com.tw — requested URL for the 國泰世華銀行 homepage. Dual portable Scope 9/11 + this ledger (E2a).
- https://www.cathay-cube.com.tw — named source-footer Tier 1 host; live inspect resolved to `https://www.cathay-cube.com.tw/cathaybk`. Dual portable Scope 11 + this ledger (E2a).

### Country sources (not token captures)

Brand-owned / regional Taiwanese sources from the source footer and `web/references/cathay/.verification.md`:

1. https://www.cathaybk.com.tw — official site of 國泰世華銀行; redirects to the unified `cathay-cube.com.tw/cathaybk` digital platform.
2. https://www.cathayholdings.com — 國泰金融控股 corporate site; confirms the parent group and the banking/insurance/securities structure surfaced in the bank's footer.
3. Apple App Store — Taiwan (CUBE App) listing for the Cathay United Bank CUBE App — regional TW store page. The source sidecar truncates the listing path as `apps.apple.com/tw/app/...`; the full path is not invented here.

Source sidecar states that getdesign.md, refero.design, and the Google favicon proxy are explicitly not counted as country sources. That exclusion is this ledger only. The portable body does not re-host it.

### Proof (source HTML comment + sidecar `web/references/cathay/.verification.md`)

Canonical proof sidecar exists at `web/references/cathay/.verification.md` (A1c; heading `## Proof — Tier 1 live inspect`). Derived mirror `design-md/cathay/.verification.md` has the same SHA-256 `8b5dbcc3d3cb7d7ed35c75371c3f6248c002b0080688e0139188aaa7ce21ea94`. Canonical is `web/references`. Source footer points to `web/references/cathay/.verification.md`. The same live-inspect method and overlapping raw samples also sit in the source DESIGN.md HTML comment (philosophy-layer block). This ledger records both. They are not a second portable token table.

- **Heading (sidecar):** `## Proof — Tier 1 live inspect`
- **Inspected:** 2026-06-08
- **Method:** playwright getComputedStyle (live DOM) — global playwright (chromium headless, args `--disable-http2`), `waitUntil: networkidle`, cookie/promo dismissed (Escape + close-button click)
- **Sources:**
  - https://www.cathaybk.com.tw — requested URL; 301/redirect resolved to https://www.cathay-cube.com.tw/cathaybk (live homepage of 國泰世華銀行, page title "國泰世華銀行")

Raw samples in the source HTML comment / sidecar (this ledger; portable Semantic/Components restate the matching hex/geometry, not the rgb dump):

- body: `background-color: rgb(250, 250, 250)` → `#fafafa`; `color: rgb(51, 51, 51)` → `#333333`; font `"Roboto Flex", "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", "Heiti TC", sans-serif`; font-size 16px; line-height 24px
- Primary CTA "把握好機匯" (a): bg `rgb(0, 81, 42)` → `#00512a`; white text; `border: 1px solid rgb(0, 81, 42)`; border-radius 5px; height 50px; padding 12px 20px; font-size 16px; weight 400
- Primary CTA "我有興趣" / "更多新鮮事" (a): `#00512a`; 5px; 50px
- Hero h1 "每次都是更好的體驗": 36px / 700 / line-height 54px / `#333333`
- Section h2 "用科技讓金融生活更安全簡單": 28px / 700 / line-height 42px / `#333333`
- Quick-action link "換匯" (a): `#555555`; font-size 18px; weight 400; height 50px; line-height 27px — sidecar-only height 50px on this link stays in this Proof ledger; portable Quiet Nav keeps body 16-18px / radius 0 without promoting that sidecar height as a YAML field
- Glass tile "開戶" (a): `rgba(255,255,255,0.5)`; 5px; padding 40px 15px; height 187px
- Footer group link "國泰人壽" (a): sidecar records `#555555` at 14px / 400, and dark-band footer links measured `#ffffff`
- Nav link "個人金融" (a): `#333333`; 16px / 400

Color frequency scan (sidecar; portable Semantic restates role hexes already in the legacy DESIGN.md token bag; extra sidecar-only frequency-scan hexes that are not in that token bag stay on this Proof ledger as observations and are not promoted as portable tokens):

- `rgb(51, 51, 51)` → `#333333` — 592
- `rgb(255, 255, 255)` → `#ffffff` — 91
- `rgb(85, 85, 85)` → `#555555` — 59
- `rgb(0, 0, 0)` → `#000000` — 45 (sidecar frequency-scan black row; proof-only; not a portable token)
- `rgb(38, 168, 98)` → `#26a862` — 37
- `rgb(243, 255, 247)` → `#f3fff7` — 18
- `rgb(0, 81, 42)` → `#00512a` — 14
- `rgb(136, 136, 136)` → `#888888` — 6
- `rgb(190, 190, 190)` → `#bebebe` — 5
- `rgb(0, 40, 61)` → `#00283d` — 2
- `rgb(232, 124, 7)` → `#e87c07` — 1

**Primary selection rationale (sidecar):** `#00512a` is the live primary-CTA fill and is set as `primary_color`. `#26a862` is the most-used non-neutral (37 applications) and is recorded as the bright-green accent.

HTML-comment / sidecar full `rgb(...)` sample dump and the sidecar frequency-scan table are this Proof ledger only. Portable Foundations Semantic restates role hexes; Font evidence 183 restates the live stack and hero/section metrics (E2a).

### Narrative (not interface tokens)

Source §11 2003 merger of Cathay Commercial Bank and United World Chinese Commercial Bank (世華聯合商業銀行), group companies 國泰金控 / 國泰人壽 / 國泰產險 / 國泰綜合證券 / 國泰投信, CUBE App / CUBE信用卡, and taglines "每次都是更好的體驗" / "用科技讓金融生活更安全簡單" are restated in portable Scope under adjacent complete B2a (product-origin 9 / public-history 17 / refusal-embrace 19). They are not interface tokens. Evidence class is public-history narrative plus live homepage strings. Tagline strings are also Content Observed 534–535 (E2a).

## Claim ledger

Token extraction is `live-extract` (2026-06-08). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body `#00512a`, `#26a862`, `#f3fff7`, `#00283d`, `#fafafa`, `#ffffff`, `#333333`, `#555555`, `#888888`, `#eeeeee`, `#bebebe`, `#e87c07` | live-extract tokens + body §2; homepage named as inspection host; HTML comment + sidecar raw samples. `#00512a` is primary CTA fill; `#26a862` is accent |
| YAML typography Roboto Flex / Noto Sans TC roles hero 36/700/1.50 through caption 14/400/1.50; body-table Notes | YAML + body §3; portable Type roles 203–207. YAML `use` and body Notes are separate fields on each row. Hero 203 Notes: Homepage hero — "每次都是更好的體驗". Section 204 Notes: Feature / activity section heads. Subheading 205 Notes: Quick-action labels, intro copy. Body 206 Notes: Standard text, nav, button label. Caption 207 Notes: Footer links, metadata, fine print. Live computed surface-use in portable Font evidence 183 |
| YAML spacing xs 5 / sm 11 / md 15 / base 20 / lg 27 / xl 40 / section 64 (unitless); body also 5px, 11px, 15px, 20px, 27px, 40px | YAML; portable Spacing 112 (no px suffix added to YAML numbers) |
| YAML rounded sm 5 / md 5 / lg 5 / full 9999 | YAML; portable Shape; full as YAML step 9999, not converted to a harvested pill |
| YAML shadow.ambient / standard / overlay; body also scrims `rgba(0,0,0,0.5)` / `rgba(0,0,0,0.22)` | YAML + body §6; portable Elevation |
| YAML components button-primary / button-outline type `button`; nav-link / footer-link type `tab`; card / card-glass type `card`; input type `input` | YAML + portable Components (A1b). Quiet Nav Action and Utility Sign-in have no YAML `tokens.components` row; Type is not invented |
| YAML component use strings | YAML + portable Use fields 254/280/302/376/392/417/443 and Primary tasks 27–29. Body-only Use dests (not YAML `use`): Quiet Nav 326, Utility Sign-in 352 |
| §9 parent-child tuples | prompt wrappers deleted; unique tuples restored as local recipes Off-white Hero 457–467 / Product Card 469–482 / Mint Highlight Band 484–494. Not promoted as global tokens |
| §14 Empty / Loading / Error / Success / Disabled / Focus | source state contract; portable Capture record 225–231 under adjacent complete B2a on table characterizations 221 (limiter precedes the table) |
| §15 durations 150ms / 250ms / 400ms, easing names, reduced-motion, signature tile-hover / CTA-press / reduce-motion | source-stated; portable Motion under adjacent complete B2a 145 and 163. Cubic-bezier values omitted (omission ledger below) |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`
- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`

These are unattributed. Duration tokens (`150ms` / `250ms` / `400ms`), easing names, signature motions, and `prefers-reduced-motion: reduce` remain in portable Motion under the source-stated limiter 145 plus the adjacent signature-motion limiter 163. The B3 five-kind per-component computed gate is Foundations Motion 171 only (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 603 names animation/transition/duration and refers to all five kinds; it is not the B3 full promotion-gate sentence and does not enumerate the five kinds.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts wrappers, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Unique parent-child tuples from those prompts are restored as receiving local recipes (A3/A4): Off-white Hero 457–467, Product Card 469–482, Mint Highlight Band 484–494. Verified hexes, radii, heights, and type metrics already in Foundations / Type / Components stay there; the tuples are not scattered as extra global tokens. Remaining prompt-only constructions stay omitted here as deleted tool prompts.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Omitted §13 fictional archetypes

Source §13 names fictional archetypes. They are not Audience, not primary tasks, and not re-hosted here (D2). No names, biographies, ages, or cities from that section are listed in this file.

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not Cathay-authored or a separately published UI specification`) on the current portable body: Scope product-origin (9); Scope URL evidence-domain including values-stay-attached / homepage-not-proxy / holdings-and-App-Store-as-country-identity / redirect-host-same-homepage (11); Scope token-note register-split including `#00512a`-as-CTA-fill-not-accent (13); Scope atmosphere extra names (15); Scope public-history / narrative-not-interface-token including 2003-merger / CUBE-as-digital-identity (17); Scope refusal / embrace extra names (19); Primary tasks YAML-use-strings-not-from-§13 / independently-verified-homepage-URL / harvested-strings-controls-not-independently-verified-destination-routes (25); Audience no-individual-personas-promoted / fictional-archetypes-not-Audience / observable-work-follows-three-tasks (34); Distinctive unmerged-role extras, limiter immediately before the bullets (38); numbered Principles seven stems (51); capture-bound grouping of §7 Do’s named rules (61); §16 copy Do (71); Avoid named Don’ts (75); Avoid last-bullet (86); Semantic unmerged-role extra characterizations (94); Spacing unitless-YAML-not-required-px-suffix / body-px / heights-as-component-fields (112); Spacing ~5px-base / generous-internal-breathing-room (114); Shape local-geometry / role labels limiter-precedes-list (120); Shape local-harvested-not-universal / YAML-full-9999-not-harvested-pill (126); Elevation table Use precede / extra philosophy / overlay-shadow-and-scrim-same-value-unmerged (130); Elevation overlay-scrim unmerged, limiter on the following-the-table sentence (141); Motion source-stated classification / Arriving-Dismissals-Two-way / spec-template-ease-exit-match / no-bounce-or-spring / tile-rises-it-does-not-light-up (145); Motion signature no-bounce / slow-end / tile-rises-it-does-not-light-up / subtle-tactile-trustworthy / function-is-never-sacrificed-for-delight (163); Font evidence-class extras including live-computed-stack / YAML-family-keys-naming-those-live-computed-families (179); Family font-use named / do-not-replace-unavailable-or-unobserved-on-a-surface-that-did-not-establish-it (193); Type-role ratio-versus-size-local / px-companions-local / tracking-unmerged (197); Type-rule extras (199); Assets apple-touch identity-only (211); Assets imagery-not-invented-decoration (212); Capture-record graph-not-adopted / hex-and-geometry-remain-source-stated / philosophy-layer / §14-as-source-stated-contract-not-computed-CSS (219); Capture-record table characterizations, limiter immediately before the table (221); Capture-record YAML-row-absent-Type-not-invented (239); Primary CTA field-note unmerged-field / YAML-active-named-press-not-hover (256); Primary CTA named-press-not-hover-not-focus-visible (267); Outline field-note unmerged-field (282); Top Nav field-note unmerged-field (304); Quiet Nav YAML-row-absent-Type-not-invented (328); Quiet Nav field-note unmerged-field (329); Utility Sign-in YAML-row-absent-Type-not-invented (354); Utility Sign-in field-note unmerged-field (355); Standard Card field-note unmerged-field (378); Glass Tile field-note unmerged-field (394); Form Input field-note unmerged-field / named-Focus-observation (419); Form Input named-Focus-not-focus-visible (432); Footer Link field-note unmerged-field (445); Off-white Hero local-composition (459) / field-note (467); Product Card local-composition (471) / field-note (482); Mint Highlight Band local-composition (486) / field-note (494); Layout extras (501); Layout recorded-span / collapsing / image-behavior / touch-purpose, limiter precedes the breakpoint table (510); Content Observed citation-character (532); Content §14-not-extra-Observed (545); Content derived voice extra names / tone-table labels / forbidden-register items (549). Reconstruction-boundary exemption not used. Governance Authority is not a substitute. No “no unqualified sentence remains” claim (E2c). This ledger does not re-host those sentences.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog apple-touch URL is dual: this identity ledger + portable Typography & Assets 211 (E2a). Named gaps has no first-party-mark sentence and does not restate the URL
- Homepage / cube-host / holdings URLs are dual-destination with portable Experience Scope (E2a)
- `primary_color` `#00512a` destinations listed in Identity (E2a)
- Token note is dual-destination: Experience Scope 13 + this ledger (E2a)
- YAML typography `use` fields restored on Type roles 203–207 together with body Notes as a separate field on each row (A1). Section Notes: Feature / activity section heads. Subheading Notes: Quick-action labels, intro copy. Body Notes: Standard text, nav, button label
- YAML unitless `lineHeight` 1.50 preserved as a ratio (A1a)
- Verified primitive types preserved per component: button×2 (245/273) + tab×2 (297/438) + card×2 (370/386) + input (410). Quiet Nav Action and Utility Sign-in Type `link` 320/345 from body/Proof `(a)` (A1b). Glass Tile keeps YAML `type: card` 386 and Kind `interactive` 385 from Proof `(a)` / quick-entry
- Named Focus `#00512a` is preserved as observed Focus, not copied onto `focus-visible` rows (B1, 233/262/288/310/335/361/400/426/451)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete (233/237)
- Primary CTA omits loading/error/success fields (C2) 265. Outline / Secondary omits loading/error/success 291. Form Input keeps error applicable as a form field (428) and omits loading/success (430). Top Nav and Footer Link loading/error/success remain destination/selection role-based (312–314, 453–455)
- Standard Card omits kind/map (C4). Quiet Nav Action / Utility Sign-in / Glass Tile restore source-confirmed link/anchor interactive kind and role-based maps; unobserved visual treatments stay omitted. Local recipes also omit kind/map: Off-white Hero, Product Card, Mint Highlight Band (E2a)
- Source §13 fictional archetypes are not copied here (D2). Primary tasks come from YAML use / live CTA and tile strings, not §13. The portable body does not call those tasks independently verified destination routes (E2c)
- Footer live-inspect method, source HTML comment, and canonical sidecar path `web/references/cathay/.verification.md` are this ledger only. Derived mirror `design-md/cathay/.verification.md` has the same SHA-256 `8b5dbcc3d3cb7d7ed35c75371c3f6248c002b0080688e0139188aaa7ce21ea94`
- Sidecar-only 換匯 height 50px stays in this Proof ledger; YAML/body Quiet Nav keep 16-18px. Extra sidecar measurements that are not in the legacy DESIGN.md token bag are not copied here as portable tokens.
