# Asleep provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/asleep/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | asleep |
| name | Asleep |
| display_name_kr | 에이슬립 |
| country | KR |
| category | ai |
| homepage | https://www.asleep.ai/ |
| primary_color | `#2a75fc` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=asleep.ai&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

Token note from source: `primary = live marketing CTA blue (#2a75fc) on a near-black #121212 canvas; the docs surface (docs.asleep.ai, ReadMe-powered) flips to light mode with its own accent blue #3a61f2. Marketing chrome is sharp-cornered (0px radius) and shadowless.` Dual destination (E2a): this ledger and portable Experience Scope (same note plus the adjacent register-split / derived editorial implementation inference / not-Asleep-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=asleep.ai&sz=128` is this identity ledger only. Portable Typography & Assets states a Google-favicon identity-boundary sentence without the URL (E2a). It is not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence.

Homepage `https://www.asleep.ai/` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a). Inspect URL `https://www.asleep.ai/` is the same host with trailing slash and is dual Scope + this surfaces/Tier 1 ledger (E2a). Docs inspect URL `https://docs.asleep.ai/docs/brand-guideline` is dual Scope + this surfaces/Tier 1 ledger (E2a). `https://www.asleep.ai/company` is dual Scope (quotation source, not a token sheet) + this Tier 1/narrative ledger (E2a).

Catalog `primary_color` `#2a75fc` is identity metadata + portable Scope token-note + Distinctive + Distinctive unmerged-role + Principles item 3 + capture-bound + Avoid + Foundations Asleep Blue / Semantic unmerged-role + Capture-record Empty (no sleep sessions yet) + Primary CTA Background + Primary CTA field note (fills). The hex value additionally appears in Scope atmosphere, Top Nav active text / field note / additional observed active appearance, Docs Callout field note (as not Primary), Info Tint field note (as not Primary) (E2a). It is not Docs Accent `#3a61f2` and not Info Blue `#118cfd`.

`display_name_kr` `에이슬립` is dual: this identity ledger (YAML key) + portable Scope running prose `Asleep (에이슬립)` (value destination). H1 is `Asleep Design System` and is not the YAML key. `tokens.source: live-extract` and `components_harvested: true` are this ledger only (A1c). `added` 2026-07-02 is this ledger only.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| live inspect (playwright getComputedStyle) | 2026-07-02 |
| Observed voice samples | 2026-07-02 |
| company-page WebFetch | 2026-07-02 |
| footer Verified | 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces) |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: `#2a75fc` marketing action blue vs Docs Accent `#3a61f2` vs Info `#118cfd`; on-dark `#ffffff` vs light-docs canvas `#ffffff` (shared hex, two jobs); Heading `#222222` vs Body `#333333` vs docs-control `#000000`; Canvas-dark `#121212` as page fill and Feature Card fill (shared hex); YAML `rounded.full` 9999 / `9999px` / `100%` vs marketing `0px`; YAML line-height ratios `1.31` / `1.30` / `1.20` / `1.43` vs body-table Hero `68px` at 52px and Body `20px` at 14px; YAML `family.sans` `Pretendard Variable` vs harvested-control font `Pretendard`; Primary CTA 38px vs Outlined 45px vs header 65px; Docs Search 13px / 400 vs Info Tint 13px / 500; YAML button padding `8px 12px` vs nav `0 10px` vs feature-card headings `0 20px`; YAML `shadow.none` vs docs `shadow.subtle`. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-homepage | https://www.asleep.ai/ | 2026-07-02 |
| docs-brand-guideline | docs-brand-guideline | https://docs.asleep.ai/docs/brand-guideline | 2026-07-02 |

Catalog homepage identity `https://www.asleep.ai/` is recorded in Identity; it is the same inspect URL as `home`, not a third inspect URL.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.asleep.ai/ | 2026-07-02 |
| docs-live | product-surface | https://docs.asleep.ai/docs/brand-guideline | 2026-07-02 |
| company | company-page | https://www.asleep.ai/company | 2026-07-02 (quoted founding/mission; not a token inspect) |

### Tier 1

- https://www.asleep.ai/ — marketing homepage, live computed style (bg rgb(18,18,18) `#121212`; hero H1 "수면으로의 영역 확장, 어렵지 않습니다" Pretendard 52px/600 white; primary CTA bg rgb(42,117,252) `#2a75fc` radius `0px` padding `8px 12px`; outlined button 1px solid `#ffffff` radius `0px`; nav 18px/400 white on 65px header; body Pretendard 14px/400 rgb(51,51,51) `#333333`; `box-shadow: none` across hero/nav/cards; feature cards radius `0px`)
- https://docs.asleep.ai/docs/brand-guideline — ReadMe docs (accent rgb(58,97,242) `#3a61f2`; sidebar nav rgb(68,78,87) `#444e57` 14px/450 radius 8px; search bg `#ffffff` fg `#000000` radius 6px; info tint rgb(17,140,253) `#118cfd`; brand-guideline copy "서비스에 Asleep 브랜드를 활용하는 방법")
- https://www.asleep.ai/company — founding, mission, and executive quotes (WebFetch 2026-07-02); not in the HTML-comment live-inspect list for tokens

Home / docs URLs are dual-destination with portable Experience Scope (E2a). Company URL is dual Scope boundary + this ledger (E2a).

### Tier 2 (no usable record)

- getdesign.md/asleep — 0 DESIGN.md files (not listed)
- styles.refero.design/?q=asleep — no Asleep match (only sleep-adjacent brands: Eight Sleep, Sandland Sleep)

### Narrative (not interface tokens)

- Founded 2020 as a KAIST spin-out; CEO 이동헌 (Lee Dong-heon), CTO 홍준기 (Hong Jun-ki); founding group of KAIST electrical-engineering researchers. Dual portable Scope (under public-history / product-line B2a) + this ledger (E2a).
- Product AsleepTrack: measuring sleep stages from breathing sound alone, contactless, with no wearable — the API and SDK licensed to partners. Dual portable Scope + this ledger (E2a).
- Founding pain: polysomnography historically around a million won and a clinic; belief statement "잘 자는 세상은 잠 자체를 잘 아는 것에서부터 시작한다"; measurement layer rather than a consumer device; smart home / health/fitness / wellness / finance partners. Dual portable Scope (under founding-pain / clinic-barrier / belief-statement / measurement-layer-not-consumer-device B2a) + this ledger (E2a).
- Credentials stated on Asleep's own surfaces and public reporting, restated in portable Content derived voice: 2,201,145 training instances, 74 patent applications, 22 papers, KFDA Class-2 certification. Dual portable Content derived voice + this ledger (E2a).
- HTML-comment additional credentials not in the visible source §11 body: CES 2025 Innovation Award, Forbes 30-under-30. This ledger only; not copied as portable tokens.
- Public reporting named in the HTML comment as corroboration (Forbes Korea, THE VC, Daum/news "KAIST 연구실서 글로벌 슬립테크 강자로") is this ledger only.

Voice samples (§10) are verbatim from the live homepage (hero H1, product section) and the docs brand-guideline heading. Dual-destination for the Observed strings and the 2026-07-02 date: portable Content & Locales + this ledger (E2a). "API 도입 문의하기" / "API Docs ↗" / "Dashboard ↗" are also in Primary tasks; "API 도입 문의하기" is also Primary CTA Use and Foundations Asleep Blue; "API Docs ↗" is also Outlined Use; "Dashboard ↗" is also Feature Card mixed-anatomy; "수면으로의 영역 확장, 어렵지 않습니다" is also Scope atmosphere, Font evidence live-computed, and Content derived hero-tone row; "서비스에 Asleep 브랜드를 활용하는 방법" is also Content derived docs-tone row; "잘 자는 세상은 잠 자체를 잘 아는 것에서부터 시작한다" is also Scope belief statement and Content derived company-tone row (E2a). Derived §10 tone table and forbidden register are not this observation class. Observed citation-character is live-inspect attributions / harvested-control-string grouping / company-page quotation restatement, not enabling / partner-focused parentheticals (those labels are the derived tone table).

## Claim ledger

Token extraction is `live-extract` (2026-07-02). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body marketing blue `#2a75fc`, docs accent `#3a61f2`, info `#118cfd`, canvas-dark `#121212`, on-dark/canvas `#ffffff`, ink/body/black ladder, muted `#444e57`, `box-shadow: none` | home-live / docs-live computed style (footer HTML comment) |
| Primary / outlined CTA geometry, nav labels, feature-card radius `0px`, docs search / sidebar / callout | home-live / docs-live |
| YAML `rounded.full` 9999 / body `9999px` / `100%` | YAML + portable Shape + Distinctive |
| Feature Card geometry (bg `#121212`, fg `#ffffff`, radius `0px`, ~450px) | body §4 / §5 / §9 only (not YAML `tokens.components`) |
| Info Tint (`rgba(17,140,253,0.1)` / `#118cfd` / 6px / 13px / 500) | body §4 only |
| Nav padding `0 10px`; feature-card heading padding `0 20px`; header height 65px; Primary height 38px; Outlined height 45px | body §4 / §5 / §8 |
| §9-only Feature Card mixed anatomy (Pretendard 600 heading + `Dashboard ↗` link at the bottom) | body §9 + portable Feature Card field-note |
| §14 empty/loading/error/success/skeleton/disabled rows | source state contract; portable Capture record under adjacent complete B2a on table characterizations and philosophy-layer classification |
| §15 durations 120ms/200ms/320ms, easing names, reduced-motion, signature fade-in / CTA opacity-scale | philosophy layer (sections 10–15); not in the live-inspect list; portable Motion under adjacent complete B2a |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed. Duration tokens (`120ms` / `200ms` / `320ms`), easing names, “No bounce or spring”, and `prefers-reduced-motion: reduce` remain in portable Motion. Philosophy-layer / source-stated classification and the ease-exit spec-template-match sit under the Motion table limiter; functional-restrained / consistent-with-flat-evidence-first / signature fade-in / CTA opacity-scale / steadiness / product-remains-fully-functional sit under the adjacent motion-rule limiter. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables. Named gaps lists the omitted curve names and “all five kinds” without enumerating the five evidence kinds; the B3 full text is Foundations Motion only.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Verified hexes and harvested geometry in that guide already live in Foundations / Components / Experience capture-bound. Unique §9 Feature Card mixed anatomy (Pretendard 600 heading + `Dashboard ↗` at the bottom) is portable Feature Card field-note, unmerged from YAML Button 16px / 400 (A3/A4). Unique §9 Outlined `Background: transparent` is restored on the Outlined component as a local renderable field, not a general canvas or color token (A3/A4). Prompt-only constructions stay omitted here as deleted tool prompts, not as harvested components.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog Google favicon URL is this identity ledger only. Portable Typography & Assets identity-boundary sentence is URL-free (E2a). No Named-gaps first-party-logo-file negative was kept
- Homepage `https://www.asleep.ai/` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a)
- Inspect homepage and docs URLs are dual Scope + this surfaces/Tier 1 ledger (E2a)
- Company URL is dual Scope boundary + this Tier 1/narrative ledger (E2a)
- `primary_color` `#2a75fc` destinations: identity + Scope token-note + Distinctive + Distinctive unmerged-role + Principles item 3 + capture-bound + Avoid + Foundations Asleep Blue / Semantic unmerged-role + Capture-record Empty (no sleep sessions yet) + Primary CTA Background + Primary CTA field note (fills). Hex also in Scope atmosphere, Top Nav active text / field note / additional observed active, Docs Callout field note as not Primary, Info Tint field note as not Primary (E2a)
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- `display_name_kr` `에이슬립` is dual: this identity ledger (YAML key) + portable Scope running prose (value). Not provenance-only
- Observed 2026-07-02 voice strings and date are dual-destination: portable Content & Locales + this freshness/narrative ledger; live CTA strings are also in Primary tasks (E2a)
- YAML typography `use` fields restored on Type roles (A1)
- YAML unitless `lineHeight` 1.31 / 1.30 / 1.20 / 1.43 preserved as ratios (A1a)
- Verified primitive types preserved per component: button×2 (Primary CTA, Outlined) + tab×1 (Top Nav) + card×2 (Feature Card from Cards & Containers heading, Docs Callout YAML) + input×1 (Docs Search) + listItem×1 (Docs Nav Item) + badge×1 (Info Tint from Badges heading). Feature Card / Info Tint have no YAML `tokens.components` type; heading classification is preserved, not invented from nothing (A1b)
- No generic Focus capture is promoted to `focus-visible` treatment; focus-visible rows carry no hex (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Primary CTA / Outlined omit loading/error/success fields (C2). Docs Search omits loading/error/success at the field boundary; source §14 generic form-validation is not attached to this documentation-search role, and primitive `Form field` is not the applicability reason. Those three fields are not closed as `not-applicable`. Top Nav / Docs Nav Item loading/error/success remain grouping/destination role-based. Feature Card / Docs Callout / Info Tint omit kind/map (C4)
- Feature Card and Info Tint are body §4 (and §5/§9 for the card) only (not YAML `tokens.components`)
- Source §13 personas are fictional archetypes informed by publicly observable segments (developers and product teams integrating sleep measurement, smart-home and wellness partners), not specific individuals. Portable Audience keeps the exclusion boundary only. Names, ages, cities, occupations, and biographies from source §13 are not copied here (D2). Primary tasks come from live CTA / feature-link strings, not §13
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Asleep-authored or a separately published UI specification`): see Derived inventory
- Footer `(omd:add-reference CREATE)` is this freshness ledger only

## Derived inventory (portable B2a sites)

Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Asleep-authored or a separately published UI specification`). Reconstruction-boundary exemption not used. F3 2026-08-24 restated the inventory to the actual adjacent-complete sites (worker inventory under-named atmosphere extras, Shape role labels / limiter direction, Elevation limiter direction, Motion spec-template-match vs motion-rule split, type-rule compact/legibility-bump, Docs Nav Observed captured-variant, Layout YAML-versus-body-px, and Content citation-character of parentheticals that are not on the Observed quotes):

- Scope product-origin / sleep-tech-definition as public-history narrative (9)
- Scope two-URL evidence-domain assignment (9)
- Scope token-note register-split (11)
- Scope evidence-domain (company page not a token sheet) (13)
- Scope visual-character / laboratory-at-night / Korean-modern typographic (de-facto-product-typeface / calm-declarative-authority / generous-line-height / hierarchy-from-size-not-flourish) / sharp-and-shadowless (reserved-almost-entirely / nothing-is-a-pill / deliberate-counterpoint) / two-surface / marketing-pitch versus docs-workbench (15)
- Scope public-history / product-line narrative-not-interface-token (21)
- Scope founding-pain / clinic-barrier / belief-statement / measurement-layer-not-consumer-device (23)
- Scope refusal / embrace / measurement-layer readings (25)
- Primary-tasks live-CTA mapping (31)
- Audience no-individual-personas-promoted / exclusion / observable-work-follows-three-tasks (40)
- Distinctive unmerged-role readings including hierarchy-by-size / two-surface / sharp-and-shadowless / reserved-9999px-for-icons-avatars (58)
- six numbered principles and UI implications (62)
- capture-bound grouping of §7 Do’s / live inspect (71)
- Avoid §7 Don’ts (84)
- Semantic color unmerged-role readings including extra list characterizations (single-action / close-but-distinct-sibling / info-on-callout-edges / warm-not-pure-black / quiet-neutral) (100)
- Spacing unitless-versus-px (114)
- Spacing ~4px-base / tight-8px-12px / 0-10px-nav / 0-20px-feature-heading as recorded application (116)
- Shape local-geometry / None-Small-Medium-Large-Full role labels / 0px-marketing-signature / 6-8px-docs-only / 20px-occasional-media / reserved-9999px-for-icons-avatars (limiter precedes the labeled list) (122)
- Elevation tone-not-elevation and shadow-philosophy readings including table Use assignments (limiter precedes the table) (138)
- Motion philosophy-layer / source-stated classification / ease-exit spec-template match (150)
- Motion functional-restrained / consistent-with-flat-evidence-first / signature fade-in / CTA opacity-scale / no-bounce / steadiness / product-remains-fully-functional (166)
- Font evidence-class application including fallback-not-product-face (176)
- Family font-use boundary (183)
- Typography one-typeface / size-driven / restrained-weight / hangul-first including information-rich-API-content-compact / docs-nudge-to-450 including subtle-legibility-bump (185)
- Type roles ratio-versus-size-local including omitted-tracking-not-invented (193)
- Type roles YAML-Pretendard versus Pretendard-Variable unmerged; SemiBold as use string not a second family (195)
- Type roles 13px component-fields-not-type-roles (206)
- Assets Google-favicon identity-only reading (210)
- Assets imagery-not-invented-decoration / no-shadow-at-any-size / consistent-with-flat (212)
- Capture-record graph-not-adopted (219)
- Capture-record philosophy-layer classification (221)
- Capture-record table characterizations (235)
- Primary CTA field-note unmerged-role / fills (257)
- Outlined field-note unmerged-role / §9-only transparent background (283)
- Docs Search field-note unmerged-role (306)
- Feature Card field-note mixed-anatomy (329)
- Docs Callout field-note unmerged-role (343)
- Info Tint field-note unmerged-role (359)
- Top Nav captured-variant-not-click-transition (375, 388)
- Top Nav field-note unmerged-field (376)
- Docs Nav Item captured-variant-not-click-transition on Observed and additional-observed (401, 414)
- Docs Nav Item field-note unmerged-field (402)
- Layout YAML-versus-body-px restatement / padding-height-radius as recorded measurements not a universal layout scale (419)
- Layout dark-breathing-room / flat-segmentation / docs-density / centered-hero / equal-height feature-row / ReadMe three-zone (421)
- Layout breakpoint table as recorded span not complete specification of every unlisted control, collapsing-strategy / image-behavior as recorded application, surface measurements not universal layout tokens, and touch-target record as a purpose reading rather than a complete target-size specification (445)
- Content Observed citation-character of live-inspect attributions / harvested-control-string grouping / company-page quotation restatement, not enabling / partner-focused parentheticals (452)
- Content empty/loading strings as state-contract not extra Observed samples (460)
- Content derived voice + tone table + forbidden register (464)
