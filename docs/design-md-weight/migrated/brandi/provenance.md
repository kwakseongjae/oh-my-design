# Brandi provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/brandi/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | brandi |
| name | Brandi |
| country | KR |
| category | ecommerce |
| homepage | https://www.brandi.co.kr |
| primary_color | `#1e1e1e` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=brandi.co.kr&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

`tokens.source: reconciled` and `components_harvested: true` are this ledger only as YAML keys (A1c). Catalog `primary_color` `#1e1e1e` destinations: this identity ledger 14/21 + Freshness pair 39 + omitted-§9 hex restatement 132 + portable Scope atmosphere 13 / Distinctive limiter 38 / Distinctive bullet 41 / Principles limiter 50 / Principles Do 52 / Semantic unmerged-role 78 / Foundations Direct purchase 82 / Direct purchase Background 182 / field note 189 / Partner field note 212 (as not-direct-purchase) (E2a). Avoid does not contain this hex.

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=brandi.co.kr&sz=128` is this identity ledger only. Portable Assets 160 records the Google-favicon identity-only boundary without the URL. It is not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence.

Homepage `https://www.brandi.co.kr` is dual-destination: Experience Scope 9/11 + this identity 13/25 / Surfaces 45 / Sources 53 / Tier 1 61 (E2a). Product URLs `https://www.brandi.co.kr/products/106329458` and `https://www.brandi.co.kr/products/125381184` are dual Scope 11 + this identity 25 / Surfaces 46–47 / Sources 54–55 / Tier 1 62–63 (E2a).

## Freshness

| Event | Date |
|---|---|
| added | 2026-06-09 |
| verified (YAML) | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| footer Verified | 2026-07-13 |

Conflicts unresolved: none (source footer and `verification_v2.conflicts: []`). Preserved value pairs inside the reconstruction: `#1e1e1e` direct-purchase fill vs partner `#00c73c` vs promo `#ff365d`; canvas `#ffffff` vs on-action `#ffffff` (same hex, named fields unmerged); option border `#e6e6e6` vs disabled `#e1e1e1`; badge pair `#ebeef2` / `#808893` vs purchase fills; YAML `rounded` 6 vs body `6px` vs listbox `0px 0px 6px 6px`; YAML lineHeight `1.0` vs body `normal`; Noto Sans KR as sole UI-family token vs Spoqa Han Sans live surface use vs Pretendard declared-only vs Arial system-only. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | commerce-home | https://www.brandi.co.kr/ | 2026-07-13 |
| product-a | commerce-product | https://www.brandi.co.kr/products/106329458 | 2026-07-13 |
| product-b | commerce-product | https://www.brandi.co.kr/products/125381184 | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.brandi.co.kr/ | 2026-07-13 |
| product-a-live | product-surface | https://www.brandi.co.kr/products/106329458 | 2026-07-13 |
| product-b-live | product-surface | https://www.brandi.co.kr/products/125381184 | 2026-07-13 |
| spoqa-font | official-doc | https://github.com/spoqa/spoqa-han-sans | 2026-07-13 |
| noto-font | official-doc | https://notofonts.github.io/noto-docs/website/use/ | 2026-07-13 |

### Tier 1

- https://www.brandi.co.kr/ — captured home route. Dual portable Scope 9/11 + this ledger (E2a).
- https://www.brandi.co.kr/products/106329458 — captured product-a. Dual portable Scope 11 + this ledger (E2a).
- https://www.brandi.co.kr/products/125381184 — captured product-b. Dual portable Scope 11 + this ledger (E2a).
- https://github.com/spoqa/spoqa-han-sans — Spoqa Han Sans SIL OFL / webfont distribution context. This ledger. Portable Font evidence 126/131 and Assets 162 restate the licence/distribution boundary without this URL.
- https://notofonts.github.io/noto-docs/website/use/ — Noto OFL use-boundary documentation. This ledger. Portable Font evidence 126/130 and Assets 162 restate that licence context without this URL.

### Tier 2 (no usable record)

- https://getdesign.md/brandi (no indexed Brandi record found)
- https://styles.refero.design/?q=brandi (no Brandi result found in the public search result set)

These two URLs are this ledger only. They are not portable Named-gaps rows and not interface tokens.

### Narrative (not interface tokens)

Public site title “여성 패션 쇼핑앱 브랜디” is restated in portable Scope 9 and Content 288/290 under adjacent complete B2a. Newnex hosting-operator / payment/intermediation footer strings are restated in portable Scope 19 and Content 290 under adjacent complete B2a. They are not interface tokens. First-party history, mission, and current-evolution remain in the omission ledger below.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13; `product` = product-a / product-a-live / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.canvas | home |
| tokens.colors.ink | home |
| tokens.colors.promo-active | home |
| tokens.colors.action-direct | product-a |
| tokens.colors.action-partner | product-a |
| tokens.colors.action-on | product-a |
| tokens.colors.option-border | product-a |
| tokens.colors.option-border-disabled | product-a |
| tokens.colors.badge-surface | product-a |
| tokens.colors.badge-text | product-a |
| tokens.typography.family.ui | product-a |
| tokens.typography.product-action.size / weight / lineHeight / use | product-a |
| tokens.typography.option.size / weight / lineHeight / use | product-a |
| tokens.typography.badge.size / weight / lineHeight / use | product-a |
| tokens.spacing.action-x / action-y | product-a |
| tokens.spacing.option-item | product-a |
| tokens.spacing.badge-x / badge-y-start / badge-y-end | product-a |
| tokens.rounded.product-action / option / option-menu / badge | product-a |
| tokens.components.product-badge.type / bg / fg / radius / padding / font / use | product-a |

verification_v2 schema 2; conflicts: []. `components_harvested: true`. Token extraction is `reconciled` (2026-07-13).

## Capture selectors

| Component | Pointer |
|---|---|
| Direct purchase | `surface-2::[data-omd-capture="17"]` / `.btn-buy`; also observed on surface-3. Dual this ledger + portable Direct purchase Use 187 / default row 193 / Primary tasks 28 (E2a). |
| Partner purchase | `surface-2::[data-omd-capture="18"]` / `.btn-n-buy`; also observed on surface-3. Dual this ledger + portable Partner purchase Use 210 / default row 216 / Primary tasks 29 (E2a). |
| Product option select (expanded trigger) | `surface-2::[data-omd-capture="15"]`. Dual this ledger + portable Product option select Use 233 (E2a). |
| Product option select (disabled trigger) | `surface-2::[data-omd-capture="16"]`. Dual this ledger + portable Product option select Use 233 / disabled row 242 (E2a). |
| Product option listbox | `surface-2::[data-omd-interaction-capture="menu-0-0"]` / `.ui-menu`. Dual this ledger + portable Product option listbox Expanded 258 / field-note C4 prose 260 (E2a). No Kind field. |
| Product detail badge | `surface-2::span` / `.badge`; also observed on surface-3. Dual this ledger + portable Product detail badge Use 272 (E2a). |

## Proof notes

- verification_v2 schema 2; conflicts: []
- tokens.source: reconciled
- components_harvested: true
- Interaction: one recorded expansion (`menu-0-0`) opening the product-option listbox; disabled option trigger also captured
- Uncaptured hover/loading/error/success treatments are omitted. They are not `not-applicable` merely because they were not captured; applicability follows control meaning. Direct purchase, Partner purchase, and Product option select omit loading·error·success at the unresolved request/outcome boundary (portable 198 / 221 / 244). State coverage is not claimed complete.
- Noto documentation and Spoqa project URLs are licence/distribution context, not Brandi-owned font assets

## Omitted unattributed curves

Source §15 records no cubic-bezier values, durations, animation names, transition properties, or reduced-motion behavior. None are stored here. Portable Motion keeps the not-promoted absence under adjacent complete B2a (116). The B3 five-kind per-component computed gate is Foundations Motion 118 only (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 338 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence.

## Omitted §9 construction prompts

§9 Agent Prompt Guide is deleted from the portable body (no adapter slot). Verified hexes `#1e1e1e` / `#00c73c` / `#e6e6e6`, 17px/500 Noto Sans KR, 13px Spoqa Han Sans, 6px radius, and `18px 4px` padding already live in Foundations / Components / Experience capture-bound. The quoted reconstruction prompt, including “heart toggles” and the “Recreate only…” wrapper, is deleted, not migrated as a harvested component.

## Omitted §13 fictional archetypes

Source §13 is `[FILL IN: first-party, source-backed stakeholder groups or research. No synthetic personas are included.]` No synthetic personas are in the source. None are Audience, none are primary tasks, and none are re-hosted here (D2). No names, biographies, or segment labels from that section are listed in this file.

## Omission ledger (source `[FILL IN]` placeholders)

Portable `DESIGN.md` emits no `[FILL IN]`. These source placeholders are recorded here as omissions, not as values:

- `[FILL IN: official voice principles or source-backed microcopy.]` — Content & Locales states the capture has service name and commerce labels only; no synthetic voice samples. Portable 288. Named gaps 328.
- `[FILL IN: first-party history, mission, or current-evolution source.]` — Scope keeps Newnex / payment-intermediation as legal-context facts and omits a broader origin story. Portable Scope 19 + Content 290. Named gaps 327.
- `[FILL IN: official Brandi product or design principles. The observed commerce constraints above are not presented as official principles.]` — Principles states official principles are not presented; capture-bound §7/§16 Do’s are listed under adjacent complete B2a. Portable 50. Named gaps 326.
- `[FILL IN: first-party, source-backed stakeholder groups or research. No synthetic personas are included.]` — Audience promotes no individual personas. Portable 34. Named gaps 329.

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not Brandi-authored or a separately published UI specification`) on the current portable body: Scope three-URL evidence-domain / three-current-first-party-public-routes-as-contract-coverage / stay-attached / home-route-promo-rather-than-purchase-link-fill (11); Scope atmosphere / action-ranking extras / white-with-`#202429` / direct-`#1e1e1e`-versus-adjacent-partner-`#00c73c` / home-slider-`#ff365d`-not-universal-action (13); Scope product-evidence concentration (15); Scope desktop-only evidence-domain bound / app-marketing-documentation-account-area-not-established (17); Scope public-identity / legal-context as narrative / not-authority-for-origin-mission-rebrand (19); Primary tasks captured-controls-not-from-§13 (25); Audience no-individual-personas-promoted / §13-not-Audience / observable-work-follows-three-tasks (34); Distinctive unmerged-role extras / three-route-canvas-ink / `#ff365d`-not-a-general-CTA-rule / Spoqa-live-surface-use-not-additional-UI-family / Arial-system-only, limiter immediately before the bullets (38); official-principles-not-presented / observed-constraints-not-official / capture-bound named §7/§16 Do’s (50); Avoid named Don’ts, limiter immediately before the list (62); Avoid last-bullet do-not-invent-checkout-account-marketing-documentation-mobile (70); Semantic unmerged-role extra characterizations / canvas-as-page-control-background / ink-as-option-menu-and-general-text (78); `#ff204b` not-retained causal (91); Spacing unitless-YAML-not-universal-px (95); Spacing harvested-padding-stays-with-controls (97); Shape local-geometry / listbox-unmerged / YAML-6-without-px-suffix / not-universal-for-unlisted-controls, limiter immediately before the list (103); Shape trailing local-geometry restatement (108); Elevation limiter-precedes / box-shadow-none-flat-for-observed-elements-only / no-shadow-scale-or-image-overlay (112); Motion not-promoted-absence (116); Font evidence-class extras, limiter immediately before the table (126); Family font-use named, limiter immediately before the bullets (137); Family trailing do-not-substitute / Spoqa-not-second-UI-family (144); Type-role YAML-1.0-not-fixed-px / normal-as-size-local (148); Type-role unmerged purchase-vs-option-vs-badge / shared-13px-not-merged (156); Assets Google-favicon identity-only (160); Assets live-faces-not-Brandi-exclusive / Pretendard-remains-declared-only / licence-context-not-owned (162); Capture-record graph-not-adopted (169); Capture-record applicability-by-meaning extras (173); Capture-record listbox-and-badge C4 (175); Direct purchase field-note yaml-type-not-invented / unmerged-field (189); Direct purchase C2 omit (198); Partner purchase field-note yaml-type-not-invented / unmerged-field (212); Partner purchase C2 omit (221); Product option select field-note yaml-type-not-invented / unmerged-field (235); Product option select C2 omit (244); Product option select expanded-as-named-variant (246); Product option listbox field-note yaml-has-no-primitive-type / no-interactive-kind-confirmation / no-§4.4-map / unmerged-field (260); Product detail badge field-note no-interactive-kind-confirmation / no-§4.4-map / unmerged-field (274); Layout supports-only harvested paddings / no-product-grid-page-container-sticky-mobile-checkout without selector (281); Layout desktop-capture-not-cross-viewport / no-mobile-viewport / no-breakpoints-touch-sticky-product-grid-mobile-nav (283); Content voice extras / no-synthetic (288); Content site-title-and-Newnex-not-microcopy-system (290). Reconstruction-boundary exemption not used. Governance Authority is not a substitute. No “no unqualified sentence remains” claim (E2c). This ledger does not re-host those sentences.
