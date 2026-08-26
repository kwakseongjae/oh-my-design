# Coinone provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/coinone/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | coinone |
| name | Coinone |
| country | KR |
| category | fintech |
| homepage | https://coinone.co.kr |
| primary_color | `#006BD6` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=coinone.co.kr&sz=256` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| verification_v2.schema | 2 |
| ds.name | Coinone Brand Guideline |
| ds.url | https://www.coinonecorp.com/company/brand |
| ds.type | brand |

`tokens.source: reconciled` is this identity/Claim ledger only (A1c). The portable body does not contain `reconciled`. Portable Font evidence restates live home/trading computed use in the table rows at DESIGN 123 / 124 (E2a). Line 119 is the adjacent complete B2a on evidence-class application, not a reconciled restatement.

Catalog logo type `favicon` / Google s2 slug is this identity ledger only (E1). Portable Typography & Assets 150 records a Google favicon lookup without the URL (E2a: lookup dual, URL provenance-only). It is not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence.

Homepage `https://coinone.co.kr` (YAML `homepage`, no trailing slash) is dual Scope 9 + this identity ledger 13 / 29 / 83 / 153 (E2a). It is not on Scope 11. It is catalog identity, not an extra captured host beyond the two named product URLs. `https://coinone.co.kr/` is dual Scope 11 + this Surfaces/Sources/Tier 1 ledger 29 / 56 / 64 / 74 / 83 (E2a). `https://coinone.co.kr/exchange/trade/btc/krw` is dual Scope 11 + this Surfaces/Sources/Tier 1 ledger 29 / 57 / 65 / 75 (E2a). YAML `ds.url` `https://www.coinonecorp.com/company/brand` is dual Scope 11 + this identity / Sources / Tier 1 ledger 22 / 29 / 76 (E2a). Line 50 names the `ds.url` field versus the non-www host and does not restate that URL. YAML `verification_v2` surface `brand-guideline` / source `brand-capture` host `https://coinonecorp.com/company/brand` (no www) is dual Scope 11 + this Surfaces/Sources ledger 29 / 58 / 66 / 77 (E2a). The two brand-host writings stay unmerged.

YAML `ds.type: brand` and `ds.name: Coinone Brand Guideline` are dual Scope 11 + this identity ledger (A1c, E2a). `ds.description` (“Official BI/brand guideline for the Coinone Blue palette, signature, and clear space.”) is this ledger only.

Catalog `primary_color` `#006BD6` destinations: this identity ledger + portable Scope token-note 13 / Distinctive unmerged B2a 36 / Distinctive bullet 38 / Semantic unmerged-role 75 / Coinone Blue 77 / Product primary “Distinct from official `#006BD6`” 83 (E2a; later component uses of other blues stay on those controls).

`tokens.source: reconciled` and `components_harvested: true` are this ledger only as YAML keys (A1c). YAML `verified` 2026-07-13 and `extracted` 2026-07-13 are this freshness ledger. Footer **Verified:** 2026-07-13 is this ledger only. `verification_v2.schema: 2` is this identity ledger (A1c).

`web/references/coinone/.verification.md` exists (SHA-256 `4e4d9e1d11719095cc69506d31c94f87543c708b8cc6bcb02ac621b12fa0e75d`). Canonical DESIGN.md and this packet do not adopt or link it; contents are not this packet’s source. Hidden sidecar Proof was not imported.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| footer Verified | 2026-07-13 |

Conflicts unresolved: none. Preserved value pairs inside the reconstruction: catalog `primary_color` / YAML `brand` / official Coinone Blue `#006BD6` vs observed home primary `#0B59D5` vs official point `#0090FF` vs brand-deep `#194386` vs brand-navy `#062554`; canvas `#FFFFFF` vs compact-control fill `#FFFFFF` (same hex, unmerged jobs); product foreground `#17181B` vs compact-control `#040505` vs chart-tab `#18191C` vs sign-in `#79818F` vs side-tab `#9E9E9E`; compact-control border `#DDE4EB` vs sign-in border `#AEB3BB`; YAML `family.home` `pretendardCoinone` vs YAML `family.trading` `Spoqa Han Sans`; YAML home-control size `13` / weight `500` / lineHeight `1.38` vs sign-in `12px` / `400` vs chart-tab `13px` / `400` vs side-tab `14px` / `400`; YAML rounded login 3 / control 6 / badge 26 vs harvested `3px` / `6px` / `26px`; YAML spacing xs 4 / sm 8 / md 12 / lg 16 without a px suffix vs body `4px` / `8px` / `12px` / `16px` paddings; home heights 24px / 32px vs trading 37px / 40px; YAML `ds.url` www host vs `verification_v2` brand host without www. Both sides of each pair stay in portable Foundations, Typography, Components, or Scope. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| exchange-home | product-home | https://coinone.co.kr/ | 2026-07-13 |
| exchange-trading | product-trading | https://coinone.co.kr/exchange/trade/btc/krw | 2026-07-13 |
| brand-guideline | official-brand-guideline | https://coinonecorp.com/company/brand | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-capture | product-surface | https://coinone.co.kr/ | 2026-07-13 |
| trading-capture | product-surface | https://coinone.co.kr/exchange/trade/btc/krw | 2026-07-13 |
| brand-capture | official-doc | https://coinonecorp.com/company/brand | 2026-07-13 |
| brand-guideline-pdf | official-doc | https://image-public.coinone.co.kr/download/corphome/coinone_guide_4.0.pdf | 2026-07-13 |
| mission-context | official-doc | https://www.coinonecorp.com/company/mission | 2026-07-13 |
| history-context | official-doc | https://www.coinonecorp.com/company/history | 2026-07-13 |
| business-context | official-doc | https://www.coinonecorp.com/business/ | 2026-07-13 |

### Tier 1

- https://coinone.co.kr/ — public exchange home. Dual portable Scope 11 + this ledger (E2a).
- https://coinone.co.kr/exchange/trade/btc/krw — public BTC/KRW trading. Dual portable Scope 11 + this ledger (E2a).
- https://www.coinonecorp.com/company/brand — official brand guideline (YAML `ds.url` / footer). Dual portable Scope 11 + this identity / Tier 1 ledger (E2a).
- https://coinonecorp.com/company/brand — official brand guideline (YAML `verification_v2` surface/source, no www). Dual portable Scope 11 + this Surfaces/Sources ledger (E2a).
- https://image-public.coinone.co.kr/download/corphome/coinone_guide_4.0.pdf — official brand-guideline PDF. This Sources/Tier 1 / `brand-guideline-pdf` ledger only. Portable Scope 17 restates palette / signature / clear-space narrative without this URL (E1).
- https://www.coinonecorp.com/company/mission — official mission. This Sources/Tier 1 / `mission-context` ledger only. Portable Scope 17 names the mission page without this URL (E1).
- https://www.coinonecorp.com/company/history — official history. This Sources/Tier 1 / `history-context` ledger only. Portable Scope 17 names official history without this URL (E1).
- https://www.coinonecorp.com/business/ — official business page. This Sources/Tier 1 / `business-context` ledger only. Portable Scope 17 names the official business page without this URL (E1).

Catalog homepage `https://coinone.co.kr` (no trailing slash in YAML `homepage`) is dual Scope 9 + this identity ledger (E2a). Scope 11 names the captured home URL `https://coinone.co.kr/` with slash. It is not listed as a fourth captured surface.

### Tier 2 (no usable record)

- https://getdesign.md/coinone (attempted; built-in web open returned a safe-open failure; subsequent web searches returned no Coinone record; no token or component values used)
- https://styles.refero.design/?q=coinone (attempted; built-in web open returned a safe-open failure; subsequent web searches returned no Coinone record; no token or component values used)

Portable body does not re-host these Tier 2 failure strings (E1).

### Narrative (not interface tokens)

Source §1 / §11 official company account (2014 establishment; Bitcoin exchange launch that October; slogan “Bringing Blockchain into the World”; values trust, innovation, and expertise; blockchain-enabled connection; Coinone Exchange as a Korean professional virtual-asset exchange; asset safety, AML, transparent listing policy, user-centered trading environment; horizontal signature as the default; protected clear space; blue as the main color representing the future) is restated in portable Scope official-account 17 under adjacent complete B2a. They are not interface tokens. Evidence class is Coinone’s official history / mission / business / brand-guideline writing. Mission / history / business / PDF URLs are this ledger only (E1).

## Claim ledger

Claims use YAML anchors from the source: `brand` = brand-guideline / brand-capture / official-guideline / 2026-07-13; `home` = exchange-home / home-capture / computed-style / 2026-07-13; `trading` = exchange-trading / trading-capture / computed-style / 2026-07-13.

Token extraction is `reconciled` (2026-07-13). `components_harvested: true`. `verification_v2.schema: 2`. Conflicts: [].

| claim | surface |
|---|---|
| tokens.colors.brand / point / brand-deep / brand-navy | brand |
| tokens.colors.canvas / foreground / product-primary / control-border / login-text | home |
| tokens.typography.family.home / home-control.size / weight / lineHeight / use | home |
| tokens.typography.family.trading / trading-tab.size / weight / use | trading |
| tokens.spacing.xs / sm / md | home |
| tokens.spacing.lg | trading |
| tokens.rounded.login / control / badge | home |
| tokens.components.sign-in-outline.* | home |
| tokens.components.home-compact-control.* | home |
| tokens.components.trading-chart-tab.* | trading |
| tokens.components.trading-side-tab.* | trading |

YAML `brand` `#006BD6` is catalog `primary_color` and official Coinone Blue in portable Semantic 77, not observed home primary `#0B59D5`. Dual also Scope 13, Distinctive 36/38, Semantic unmerged-role 75 / Product primary 83, this freshness pair paragraph 50, and this Claim-ledger sentence 116 (E2a). `#0B59D5` destinations: DESIGN 13 / 36 / 38 / 75 / 83 + this freshness pair paragraph 50 + this Claim-ledger sentence 116 (E2a).

## Capture selectors

| Component | Pointer |
|---|---|
| Home sign-in control | `home::[data-omd-capture="14"]` (YAML `home::[data-omd-capture=14]`) |
| Home compact control | `home::[data-omd-capture="59"]` (YAML `home::[data-omd-capture=59]`) |
| Trading chart tab | `surface-2::[data-omd-capture="49"]` (YAML `surface-2::[data-omd-capture=49]`) |
| Trading side tab | `surface-2::[data-omd-capture="156"]` (YAML `surface-2::[data-omd-capture=156]`) |

Portable Type roles 143–146 and component Use fields keep these selectors. Dual: this table + DESIGN 25/26/27/143/144/145/146/183/209/232/257 (E2a). YAML Use strings without quotes also appear on Primary tasks 25–27.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Omitted unattributed curves

No cubic-bezier values exist in the source DESIGN.md. None are stored here. Duration, easing names, and reduced-motion behavior are also absent from the source as measured values; portable Motion 109–111 records that absence and the B3 five-kind per-component computed gate. Sidecar Proof is not a source DESIGN.md claim and is not promoted.

## Source-stated removed / unpromoted claims

Source §4 footer / §7 / §14 / §15 (this ledger + portable Capture record 163 / Avoid 63–67 / Named gaps 331–340): static hover, focus, and pressed selector snapshots are not promoted as reusable states; empty / loading / success / validation-error / network-error / skeleton / disabled / toast / responsive states are intentionally not specified; no named icon set, image treatment, illustration style, or media-card specification; no motion token is promoted; legacy generic CTA, filter-chip, store-button, icon-button, trading-state, system-font, shadow, motion, and fallback-family claims were removed or narrowed. Those names are source-stated omissions, not new negative coverage invented for an unmentioned domain (D1).

## Omitted §13 fictional archetypes

Source §13 says the first-party sources identify stakeholder groups rather than publishing user-research personas, and labels Exchange members / prospective or returning users completing customer verification / customers seeking security or investor-protection guidance as source-grounded service audiences, not synthetic behavioral profiles. Those groups are restated in portable Audience 32. No fictional names, ages, locations, or quantitative goals exist in the source; none are re-hosted here (D2). Generic deletion only: no fictional archetype material to delete. Audience 32 has adjacent complete B2a.

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not Coinone-authored or a separately published UI specification`) on the current portable body: Scope catalog-homepage-as-identity (9); Scope evidence-domain including this-contract-covers-two-current-first-party-product-surfaces-and-a-corporate-brand-guideline-from-the-2026-07-13-packet / values-stay-attached-to-the-surface-or-guideline-that-established-them / public-home-not-a-stand-in-for-the-public-trading-route / public-trading-not-a-stand-in-for-the-public-home / corporate-guideline-not-a-source-of-exchange-control-CSS / public-captures-not-a-stand-in-for-logged-in-balance-order-entry-or-mobile-navigation / yaml-ds-type-brand / yaml-ds-name-Coinone-Brand-Guideline / www-versus-non-www-brand-hosts-stay-unmerged / corporate-brand-page-as-a-third-distinct-source-domain / Roboto-led-documentation-chrome-stays-documentation-chrome-rather-than-an-exchange-UI-family (11); Scope token-note register split (13); Scope atmosphere extras including formal-blue-corporate-identity / white-compact-current-home-in-loaded-`pretendardCoinone` / denser-public-trading-route-in-separately-loaded-`Spoqa Han Sans` / utilitarian-product-language-on-the-captured-routes / corporate-guideline-as-a-third-distinct-source-domain / this-reference-preserves-those-boundaries-rather-than-forcing-them-into-one-inferred-UI-system (15); Scope official-account including 2014-establishment / Bitcoin-exchange-launch-that-October / slogan-Bringing-Blockchain-into-the-World / values-trust-innovation-and-expertise / blockchain-enabled-connection-and-movement-of-value / Coinone-Exchange-as-a-Korean-professional-virtual-asset-exchange / asset-safety-anti-money-laundering-transparent-listing-policy-and-a-user-centered-trading-environment / horizontal-signature-as-the-default / protected-clear-space / blue-as-the-main-color-representing-the-future / public-brand-guideline-gives-that-service-context-a-consistent-visual-identity / official-history-mission-business-and-brand-guideline-writing-do-not-by-themselves-supply-interface-tokens (17); Primary tasks YAML-use-and-§4-Use-strings-not-from-§13 / independently-verified-in-this-packet-as-the-two-captured-product-URLs / harvested-strings-controls-not-independently-verified-destination-routes / Sign-in-on-the-public-exchange-home / Use-a-compact-product-control-on-the-public-exchange-home / Select-a-chart-tab-on-the-public-BTC-KRW-trading-route (23); Audience no-individual-personas / first-party-sources-identify-stakeholder-groups-rather-than-publishing-user-research-personas / source-grounded-service-audiences-not-synthetic-behavioral-profiles / official-groups-not-primary-tasks / this-is-an-audience-boundary-not-a-substitute-for-Coinone-user-research (32); Distinctive unmerged-role extras, limiter immediately before the bullets (36); numbered Principles four stems Make-trust-legible / Separate-identity-from-surface-evidence / Support-expert-use-without-inventing-density-rules / Keep-product-and-support-boundaries-clear (46); UI-implication tails (53); capture-bound grouping of §7 Do’s named rules (55); Avoid named Don’ts (63); Semantic unmerged-role extra characterizations including source-stated-distinct-from-but-compatible-with-not-collapsed (75); Spacing YAML-without-px / body-padding-not-converted-YAML / observed-component-spacing-intentionally-kept-small-and-local / no-reusable-page-grid-as-asserted-from-those-local-values (89); Shape local-geometry / not-a-universal-radius-scale (95); Shape closer these-are-observations-not-a-universal-radius-scale (101); Elevation no-reusable-shadow-or-elevation-ladder-is-established (105); Motion source-stated-absence / not-promoted (109); Font evidence-class extras including live-home-`pretendardCoinone`-408 / live-trading-`Spoqa Han Sans`-314 / documentation-chrome-Roboto-and-Arial / loaded-icon-asset-`coinone_glyph_ui` / declared-only faces / licence-boundary-live-loading-not-redistribution-terms (119); Family font-use named including do-not-substitute-a-declared-only-or-system-family / do-not-replace-unavailable-or-unobserved-brand-type-outside-the-route-that-established-them / Roboto-and-Arial-not-product-UI-tokens / `coinone_glyph_ui`-not-a-text-family / trading-family-not-a-fallback-for-the-home (135); Type-role YAML-numbers-without-px / yaml-1.38-scales-with-font-size-and-is-not-a-fixed-px / yaml-trading-tab-records-no-lineHeight-none-invented / yaml-lineHeight-1.38-preserved-as-that-ratio-not-rewritten-as-a-px-line-height (139); Assets Google-favicon-lookup identity-only (150); Assets `coinone_glyph_ui` loaded-icon-font-not-a-named-icon-set (152); Capture-record graph-not-adopted (159); Capture-record §14-as-source-stated-copy / omitted-L-E-S-fields-rather-than-closed-from-§14-rows / not-a-complete-state-coverage-claim (167; Core C1/C2/focus-visible sentences on that line stay unqualified policy); Capture-record Pressed-and-static-hover-focus-as-additional-named-observed-samples-not-Core-rows (169); Home sign-in field-note unmerged-field including this-static-focus-and-pressed-selector-snapshots-are-named-observed-samples-not-focus-visible-evidence (185); Home sign-in omitted-L-E-S-because-mapping-unresolved (194); Home compact field-note unmerged-field (211); Home compact omitted-L-E-S-because-mapping-unresolved (220); Trading chart tab field-note unmerged-field (234); Trading chart tab panel-select so L/E/S not-applicable on the tab (236); Trading side tab field-note unmerged-field (259); Trading side tab panel-select so L/E/S not-applicable on the tab (261); Layout YAML-without-px / observed-component-spacing-kept-small-and-local / home-capture-heights-24px-and-32px / trading-heights-37px-and-40px (276); Layout recorded-span extras including public-home-and-public-BTC-KRW-trading-as-separate-product-sub-surfaces / compact-24px-and-32px-home-controls-versus-37px-chart-tab-and-40px-side-tab / no-reusable-page-grid-breakpoint-logged-in-balance-view-order-entry-flow-or-mobile-navigation-behavior / corporate-brand-guideline-not-used-to-populate-exchange-layout-tokens (278); Layout captured-surface-not-cross-viewport / no-accessibility-conformance-score / no-screen-reader-behavior / no-validation-behavior / no-mobile-target-rule-as-claimed-from-these-public-captures (280); Content voice extras including product-and-support-materials-pair-task-specific-guidance-with-customer-verification-and-investor-protection-information (285); Content tone-table directions including the six Do/Don’t labels (289). Complete-product-microcopy-guide / current-exchange-microcopy / synthetic-voice-sample negatives are not current-class. Reconstruction-boundary exemption not used. Governance Authority is not a substitute. No “no unqualified sentence remains” claim (E2c). This ledger does not re-host those sentences.

## Proof notes

- tokens.source: `reconciled`; `components_harvested: true`; `verification_v2.schema: 2`; `ds.type: brand` preserved (A1c)
- Catalog Google favicon slug is this identity ledger only. Portable Assets 150 is a Google favicon lookup without the URL (E2a). Named gaps has no first-party-mark sentence and does not restate the slug as a missing-file gap
- Catalog homepage `https://coinone.co.kr` (no slash) is dual Scope 9 + this identity ledger 13 / 29 / 83 / 153 (E2a), not Scope 11. Home `https://coinone.co.kr/` is dual Scope 11 + this ledger 29 / 56 / 64 / 74 / 83. Trading `https://coinone.co.kr/exchange/trade/btc/krw` is dual Scope 11 + this ledger 29 / 57 / 65 / 75. Brand www URL is dual Scope 11 + 22 / 29 / 76; non-www host is dual Scope 11 + 29 / 58 / 66 / 77. Line 50 names the `ds.url` field and does not restate the www URL (E2a)
- Mission / history / business / PDF URLs are this Tier 1 / Sources ledger only. Portable Scope 17 names those pages without the URLs (E1)
- `primary_color` `#006BD6` destinations listed in Identity (E2a)
- YAML typography `use` restored on Type roles 143–146 and on component Use 183/209/232/257 (A1). YAML compact-control / sign-in / chart-tab `use` also Primary tasks 25–27. Trading side-tab Use 257 remains on that component and is not an extra primary task
- YAML lineHeight `1.38` preserved as that ratio, not rewritten as a px line-height (A1a) Distinctive 36 / 40, Type roles 139 / 143 / 144, field notes 185 / 234. YAML `trading-tab` has no lineHeight; none invented (Type-role B2a 139)
- Verified primitive type preserved: `Type: button` ×2 (175 / 200), `Type: tab` ×2 (226 / 252) (A1b). `Kind: interactive` does not replace Type. No C4 omit-kind set; all four harvested controls have YAML type and interactive-kind
- Static focus/pressed/hover selector snapshots are additional named observed samples; focus-visible rows carry no hex (B1, 167/169/185/191/217/242/267)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete (167)
- Home sign-in / Home compact omit loading/error/success fields (C2) 194/220 under adjacent complete B2a on omitted-L-E-S-because-mapping-unresolved. Trading chart tab / Trading side tab loading/error/success remain role-based not-applicable (C2, 244–246 / 269–271; B2a 236 / 261). `not captured` is not the reason (C1)
- Source §13 audience groups are Audience 32, not primary tasks, not fictional biographies, and not re-hosted as demographics here (D2)
- The B3 five-kind per-component computed gate is Foundations Motion 111 only (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 336 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence
- Capture selectors from source YAML/§4 are dual this table + portable Type roles / component evidence (E2a)
- Source has no §9 Agent Prompt Guide; catalog §9 is Content & Voice and maps to Content & Locales. No `omd-apply` / `npx omd` in the portable body
- `web/references/coinone/.verification.md` exists (SHA-256 `4e4d9e1d11719095cc69506d31c94f87543c708b8cc6bcb02ac621b12fa0e75d`); canonical DESIGN.md and this packet do not adopt or link it; contents are not this packet’s source. Sidecar Proof tuples (including `home::[data-omd-capture="12"]`, `surface-2::[data-omd-capture="13"]`, `surface-3::[data-omd-capture="7"]`, and compact-control `18px` line-height) are not source DESIGN.md component claims and are not imported
- Source token note is dual Scope 13 + this Identity/Claim ledger
