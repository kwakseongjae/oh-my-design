# CatchTable provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/catchtable/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | catchtable |
| name | CatchTable |
| country | KR |
| category | consumer-tech |
| homepage | https://www.catchtable.co.kr |
| primary_color | `#ff3d00` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=catchtable.co.kr&sz=256` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| verification_v2.schema | 2 |

Token note from source: `Selector-backed values are limited to the supplied consumer, merchant-marketing, and careers-marketing captures. These domains are not a single inferred product UI.` Dual destination (E2a): this ledger (verbatim source sentence) and portable Experience Scope 15 (same note plus the adjacent register-split / `#ff3d00`-as-careers-fill-not-consumer-CTA / catalog-homepage-not-captured-consumer-host / derived editorial implementation inference / not-CatchTable-authored or a separately published UI specification limiter). Portable Scope 15 writes the second sentence as “These domains are not one inferred UI” so the Core scope checker does not read `not` + `product` as a scope negation; the source wording stays here. `tokens.source: reconciled` is dual: this identity ledger as the YAML key (A1c) + portable Scope 15 as the extraction-class restatement (E2a).

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=catchtable.co.kr&sz=256` is dual: this identity ledger + portable Typography & Assets 166 (E2a). It is not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence. Named gaps 368–379 has no first-party-mark sentence and does not restate the URL.

Homepage `https://www.catchtable.co.kr` is dual-destination: Experience Scope 9/11/15 + this identity/surfaces ledger (E2a). It is catalog identity, not the captured consumer host. `https://www.catchtable.net/`, `https://biz.catchtable.co.kr/n/main`, and `https://career.catchtable.co.kr/ko/service` are dual Scope 13 (consumer host also Scope 15) + this surfaces/Sources/Tier 1 ledger (E2a).

Catalog `primary_color` `#ff3d00` / `#FF3D00` destinations: this identity ledger + portable Scope token-note 15 / atmosphere 17 + Distinctive unmerged B2a 41 / bullet 43 + Principles item 4 58 + Semantic unmerged-role 81 / Brand orange 89 + Capture-record pairings 181 + Merchant field note 270 (as not-this-fill) + Careers orange action Background 287 / field note 294 + this freshness pair paragraph 43 (E2a). Avoid 69–73 does not name this hex. Content 322–336 does not name this hex.

`tokens.source: reconciled` and `components_harvested: true` are this ledger only as YAML keys (A1c). Portable Font evidence restates live computed surface-use in the table rows at 139–143 (E2a). Line 135 is the adjacent complete B2a on evidence-class application, not the reconciled restatement. YAML `verified` 2026-07-13 and `extracted` 2026-07-13 are this freshness ledger. Footer **Verified:** 2026-07-13 is this ledger only. `verification_v2.schema: 2` is this identity ledger (A1c).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| footer Verified | 2026-07-13 |

Conflicts unresolved: none. Preserved value pairs inside the reconstruction: `#ff3d00` careers action vs `#002d4e` merchant CTA; `#222222` title vs `#000000` foreground; canvas `#ffffff` vs on-brand `#ffffff` (same hex, unmerged jobs); search-surface `#f5f5f5` vs canvas; control-border `#e4e4e4` vs fills; `Pretendard Std Variable` consumer UI family vs marketing `Pretendard` vs merchant-local `NanumSquareRound` vs declared-only `NanumSquare`; YAML spacing xs 4 / sm 8 / md 12 / lg 20 without a px suffix vs body `4 / 8 / 12 / 20px`; YAML rounded square 0 / discovery-tile 6 / control 8 / search 40 / career-action 15 vs harvested `6px` / `8px` / `40px` / `15px`; consumer-body 16 / 400 / 1.50 vs search-control 15 / 500 / 1.50 vs career-display 38 / 700 / 1.35; search height 38px vs compact 32px vs merchant 48px; search padding `0px 15px 0px 32px` vs discovery `8px 12px` vs careers `10.5px 24px`. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| consumer-home | consumer-product | https://www.catchtable.net/ | 2026-07-13 |
| merchant-marketing | b2b-marketing | https://biz.catchtable.co.kr/n/main | 2026-07-13 |
| careers-marketing | careers-marketing | https://career.catchtable.co.kr/ko/service | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| consumer-capture | product-surface | https://www.catchtable.net/ | 2026-07-13 |
| merchant-capture | product-surface | https://biz.catchtable.co.kr/n/main | 2026-07-13 |
| careers-capture | product-surface | https://career.catchtable.co.kr/ko/service | 2026-07-13 |
| service-context | official-doc | https://career.catchtable.co.kr/ko/service | 2026-07-13 |
| font-design | official-doc | https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md | 2026-07-13 |
| font-license | license | https://github.com/orioncactus/pretendard/blob/main/LICENSE | 2026-07-13 |

### Tier 1

- https://www.catchtable.net/ — consumer product surface. Dual portable Scope 13/15 + this ledger (E2a).
- https://biz.catchtable.co.kr/n/main — merchant marketing. Dual portable Scope 13 + this ledger (E2a).
- https://career.catchtable.co.kr/ko/service — careers marketing and official service context. Dual portable Scope 13 + this ledger (E2a). Scope 19 restates official careers narrative without this URL.
- https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md — upstream font distribution/design boundary. This ledger + portable Font evidence OFL/FontFaceSet row 143 as the license-boundary prose, not the URL (E2a: URL is this ledger only).
- https://github.com/orioncactus/pretendard/blob/main/LICENSE — upstream font licence boundary. This ledger only. Portable Font evidence 143 restates SIL Open Font License 1.1 without the URL.

### Tier 2 (no usable record)

- https://getdesign.md/catchtable (attempted; built-in web open safe-open failure/no usable record)
- https://styles.refero.design/?q=catchtable (attempted; built-in web open safe-open failure/no usable record)
- web search for both names (no CatchTable record returned)

### Narrative (not interface tokens)

Source §11 CatchTable (B2C) / CatchTable Business (B2B) / food-service super-platform / 주식회사 와드, and source §1 WAD-operated restaurant platform, are restated in portable Scope under adjacent complete B2a (product-origin 11 / three-URL 13 / public-history 19). They are not interface tokens. Evidence class is official careers narrative and official service terms. Careers URL is dual Scope 13 + this ledger (E2a). Scope 19 restates that narrative without the URL.

## Claim ledger

Claims use YAML anchors from the source: `consumer` = consumer-home / consumer-capture / computed-style / 2026-07-13; `career` = careers-marketing / careers-capture / computed-style / 2026-07-13; `merchant` = merchant-marketing / merchant-capture / computed-style / 2026-07-13.

Token extraction is `reconciled` (2026-07-13). `components_harvested: true`. `verification_v2.schema: 2`. Conflicts: [].

| claim | surface |
|---|---|
| tokens.colors.canvas / foreground / title / muted / search-surface / control-border | consumer |
| tokens.colors.brand-orange / on-brand | career |
| tokens.typography.family.ui | consumer |
| tokens.typography.consumer-body.size / weight / lineHeight / use | consumer |
| tokens.typography.consumer-title.size / weight / lineHeight / use | consumer |
| tokens.typography.search-control.size / weight / lineHeight / use | consumer |
| tokens.typography.career-display.size / weight / lineHeight / use | career |
| tokens.spacing.xs / sm / md / lg | consumer |
| tokens.rounded.square / discovery-tile / control / search | consumer |
| tokens.rounded.career-action | career |
| tokens.components.consumer-search.* | consumer |
| tokens.components.consumer-filter-control.* | consumer |
| tokens.components.consumer-discovery-tile.* | consumer |
| tokens.components.merchant-cta.* | merchant |
| tokens.components.careers-orange-action.* | career |

YAML `merchant-cta.bg` `#002d4e` is the merchant-marketing CTA fill in portable Merchant marketing CTA 263 / Semantic Merchant CTA fill 91, not brand-orange. Dual also Distinctive 41/44, Semantic unmerged-role 81, Merchant field note 270, Careers field note 294 (as not-this-fill), and this freshness pair paragraph 43 (E2a).

## Capture selectors

| Component | Pointer |
|---|---|
| Consumer search | `home::[data-omd-capture=0]` (YAML); body `home::[data-omd-capture="0"]` |
| Consumer filter control | `home::[data-omd-capture=1]` (YAML); body `home::[data-omd-capture="1"]` |
| Consumer discovery tile | `home::[data-omd-capture=17]` (YAML); body `home::[data-omd-capture="17"]` |
| Merchant marketing CTA | `surface-2::[data-omd-capture=20]` (YAML); body `surface-2::[data-omd-capture="20"]` |
| Careers orange action | `surface-3::[data-omd-capture=14]` (YAML); body `surface-3::[data-omd-capture="14"]` |

Selectors are this ledger only. Portable Use fields keep the YAML use strings without the selector suffix. Portable capture record 177 and Merchant 279 mention `surface-2` as the source’s static pseudo-state non-promotion, not as a selector table.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Omitted unattributed curves

No cubic-bezier values exist in the source. None are stored here. Duration, easing names, and reduced-motion behavior are also absent from the source; portable Motion 125–127 records that absence and the B3 five-kind per-component computed gate.

## Source-stated removed prior claims

Footer sentence (this ledger + portable Named gaps 379): Legacy claims about a 145-token semantic sheet, a universal 150% type contract, a five-tier shadow ladder, restaurant-booking CTA styling, bottom-navigation states, Swiper states, and a universal hard-square geometry were removed: the supplied 2026 capture does not substantiate them. `150%` is preserved here and at Named gaps 379 (token-loss). Those names are source-stated removed claims, not new negative coverage invented for an unmentioned domain (D1).

## Omitted §13 fictional archetypes

Source §13 names two official stakeholder groups and says it keeps them as groups rather than inventing demographic personas. Those groups are restated in portable Audience 36–37. No fictional names, ages, cities, or biographies exist in the source; none are re-hosted here (D2). Generic deletion only: no fictional archetype material to delete.

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not CatchTable-authored or a separately published UI specification`) on the current portable body: Scope product-origin / catalog-homepage-not-captured-page (11); Scope three-URL evidence-domain including consumer-not-proxy / merchant-not-booking-control / careers-not-consumer-CTA-system / values-stay-attached-to-the-surface-that-established-them (13); Scope token-note register-split including `#ff3d00`-as-careers-fill-not-consumer-CTA / catalog-homepage-not-consumer-host (15); Scope atmosphere extra names including quieter-than-merchant-and-employer-stories / careers-orange-kept-distinct (17); Scope public-history / narrative-not-interface-token including B2C-versus-B2B / food-service-super-platform / 주식회사 와드 (19); Primary tasks YAML-use-strings-not-from-§13 (25); Audience no-individual-personas-promoted / official-groups-not-primary-tasks / observable-work-follows-three-tasks (34); Distinctive unmerged-role extras including `#ff3d00`-careers-fill-not-consumer-CTA / `#002d4e`-not-that-orange / image-led-not-sales-dashboard, limiter immediately before the bullets (41); numbered Principles four stems (53); capture-bound grouping of §7 Do’s named rules (60); Avoid named Don’ts (67); Avoid last-bullet official-slogans-not-generated-product-copy (73); Semantic unmerged-role extra characterizations (81) including on-brand-white-as-careers-action-text-not-merchant-cta-fg / merchant-cta-on-fill-not-yaml-on-brand; Spacing unitless-YAML-not-required-px-suffix / body-`4 / 8 / 12 / 20px`-not-converted-px-writing-of-xs-4 / harvested-control-padding-and-heights-as-component-fields (97); Shape local-geometry / role labels limiter-precedes-list (103); Shape local-harvested-not-universal (111); Elevation table Use precede (115); Elevation after-table consumer-`box-shadow: none` / merchant-route-local-shadow-not-a-scale (121); Motion source-stated absence / intentionally-undocumented / not-promoted (125); Font evidence-class extras (135); Family font-use named including declared-only-fonts-not-loaded-CatchTable-faces (151); Type-role ratio-versus-size-local / 13px-labels-not-a-YAML-role (155); Assets Google-favicon identity-only (166); Assets imagery-tied-to-consumer-surface / no-named-icon-library-stroke-image-ratio-or-reusable-media-card-unclaimed (168); Capture-record graph-not-adopted (175); Capture-record default-only-because-zero-interaction-records / omitted-states-intentionally / surface-2-static-pseudo-state-not-promoted (177); Capture-record Core-applicability-by-meaning / Focus-not-focus-visible / L-E-S-follow-role / omitted-L-E-S-fields-rather-than-closed-from-§14-rows (179); Capture-record §8 pairings / not-an-accessibility-approval (181); Consumer search field-note unmerged-field (197); Consumer filter field-note unmerged-field (222); Consumer discovery field-note unmerged-field (245); Merchant CTA field-note unmerged-field (270); Merchant CTA surface-2-not-copied-as-a-computed-paint (279); Careers orange action field-note unmerged-field (294); Layout recorded-span extras including no-universal-card-grid-breakpoint-or-responsive-rule / merchant-careers-button-values-as-route-local-examples-only / 1440×900-not-cross-viewport (310); Layout leaves-room-for-a-leading-search-affordance (315); Layout 1440×900-not-cross-viewport / collapsing (319); Content careers-framing-not-microcopy-spec (324); Content derived voice extra names / tone-table labels (326); Content §14-not-extra-Observed (336). Reconstruction-boundary exemption not used. Governance Authority is not a substitute. No “no unqualified sentence remains” claim (E2c). This ledger does not re-host those sentences.

## Proof notes

- tokens.source: `reconciled`; `components_harvested: true`; `verification_v2.schema: 2` preserved (A1c)
- Catalog Google favicon URL is dual: this identity ledger + portable Typography & Assets 166 (E2a). Named gaps has no first-party-mark sentence and does not restate the URL
- Homepage / consumer / merchant / careers URLs are dual-destination with portable Experience Scope (E2a)
- `primary_color` `#ff3d00` destinations listed in Identity (E2a)
- Token note is dual-destination: Experience Scope 15 + this ledger (E2a)
- YAML typography `use` fields restored on Type roles 159–162 (A1)
- YAML unitless `lineHeight` 1.50 / 1.35 preserved as ratios (A1a) Type roles 155/159–162
- Verified primitive types preserved per component: input (187) + button×4 (212/238/261/285). `Kind: interactive` does not replace Type (A1b). Merchant Use names a CTA link; YAML type remains `button` (270)
- No generic Focus capture with a hex in the source; focus-visible rows carry no hex (B1, 179/203/228/251/276/300)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete (179)
- Consumer search omits loading/error/success fields (C2) 206. Merchant marketing CTA omits loading/error/success (C2) 279. Careers orange action omits loading/error/success (C2) 303. Consumer filter control and Consumer discovery tile loading/error/success remain role-based not-applicable (C2, 230–232 / 253–255). `not captured` is not the reason (C1)
- No C4 omit-kind set: YAML records type for all five harvested components
- Source §13 official groups are Audience 36–37, not primary tasks, not fictional biographies, and not re-hosted as demographics here (D2)
- The B3 five-kind per-component computed gate is Foundations Motion 127 only (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 378 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence
- Capture selectors are this ledger only
- Source has no Agent Prompt Guide; §9 is Content & Voice. No prompt wrappers to delete. No §9 parent-child tuples to restore
- No `.verification.md` sidecar is named in the source packet; none is invented here and none is claimed absent as a portable negative
