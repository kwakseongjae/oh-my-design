# 104人力銀行 provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/104/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | 104 |
| name | 104人力銀行 |
| country | TW |
| category | productivity |
| homepage | https://www.104.com.tw/ |
| primary_color | `#ff9100` |
| logo | favicon `https://www.google.com/s2/favicons?domain=104.com.tw&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |

Catalog `primary_color` `#ff9100` is multi-destination (E2a): this identity ledger, Distinctive orange action, capture-bound Keep a single high-priority public action, Foundations Action Orange, Semantic unmerged-role (catalog hex as high-confidence product action orange), Search Action Background, and Outline Action Text/Border. Catalog homepage `https://www.104.com.tw/` is this identity ledger + portable Experience Scope home URL + Surfaces/Sources/Tier 1 (E2a).

Catalog logo metadata is a Google favicon lookup, not a captured first-party mark. The literal URL `https://www.google.com/s2/favicons?domain=104.com.tw&sz=128` is this identity ledger only (provenance-only). Portable Typography & Assets and Named gaps hold URL-free first-party-mark boundary sentences, not the URL string (E2a: URL destination and URL-free boundary destinations are separate).

YAML `tokens.source` is `live-extract` (A1c) — provenance-only type/source field. YAML has no `ds.type`.

Token note from source: Only values backed by the supplied public product-surface evidence are tokens. Corporate, marketing, and declared-only font evidence stay outside this token set. Dual destination (E2a): this identity note and portable Foundations Semantic evidence-domain paragraph. Corporate/campaign color non-promotion is also Scope operational-clarity + Avoid + Named gaps (E2a).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-14 |
| verification_v2.checked | 2026-07-14 |
| surfaces inspected | 2026-07-13 |
| product sources captured | 2026-07-13 |
| official-doc sources captured | 2026-07-14 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none.

Verified note from source footer: 2026-07-14. The source footer does not contain `(omd:migrate)`.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product | https://www.104.com.tw/ | 2026-07-13 |
| surface-2 | product | https://www.104.com.tw/ | 2026-07-13 |
| surface-3 | product | https://www.104.com.tw/company/main/ | 2026-07-13 |

Verification product URLs (`https://www.104.com.tw/` and `https://www.104.com.tw/company/main/`) are dual-destination: portable Experience Scope and this ledger (E2a). Official-doc URLs are provenance-only in Surfaces/Sources/Tier 1/Narrative; unique first-party narrative propositions from those pages are in portable Experience Scope (E2a: facts dual, URLs provenance-only).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.104.com.tw/ | 2026-07-13 |
| company-live | product-surface | https://www.104.com.tw/company/main/ | 2026-07-13 |
| brand-story | official-doc | https://corp.104.com.tw/zh/about104/brand-story/ | 2026-07-14 |
| vision-mission | official-doc | https://corp.104.com.tw/zh/about104/vision-mission/ | 2026-07-14 |
| innovative-services | official-doc | https://corp.104.com.tw/zh/sustainability/customer/ | 2026-07-14 |
| be-a-giver | official-doc | https://corp.104.com.tw/zh/sustainability/community/be-a-giver | 2026-07-14 |

### Tier 1

- https://www.104.com.tw/
- https://www.104.com.tw/company/main/
- https://corp.104.com.tw/zh/about104/brand-story/
- https://corp.104.com.tw/zh/about104/vision-mission/
- https://corp.104.com.tw/zh/sustainability/customer/
- https://corp.104.com.tw/zh/sustainability/community/be-a-giver

### Tier 2 (no usable record)

- https://getdesign.md/104 (attempted 2026-07-14; direct open was rejected as unsafe by the retriever, no values used)
- https://styles.refero.design/?q=104 (attempted 2026-07-14; direct open was rejected as unsafe by the retriever, no values used)

### Narrative (not interface tokens)

- Official brand story: https://corp.104.com.tw/zh/about104/brand-story/
- Official vision and mission: https://corp.104.com.tw/zh/about104/vision-mission/
- Official innovative services: https://corp.104.com.tw/zh/sustainability/customer/
- Official Be A Giver: https://corp.104.com.tw/zh/sustainability/community/be-a-giver

Official 1996 / 楊基寬 origin, career-mission language (direction vs job; manage talent vs find people), children / working-age adults / healthy older adults, “Be A Giver,” and AI-powered recommendations are first-party narrative in portable Experience Scope. They do not convert corporate campaign colors or AI-service imagery into UI tokens.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / supplied-live-extract / 2026-07-13; `surface-3` = surface-3 / company-live / supplied-live-extract / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.primary-deep | surface-3 |
| tokens.colors.teal | home |
| tokens.colors.teal-soft | home |
| tokens.colors.teal-dark | surface-3 |
| tokens.colors.canvas | home |
| tokens.colors.surface | home |
| tokens.colors.foreground | surface-3 |
| tokens.colors.muted | home |
| tokens.colors.hairline | home |
| tokens.colors.link | surface-3 |
| tokens.colors.on-primary | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.label.size / weight / lineHeight / use | home |
| tokens.typography.heading.size / weight / lineHeight / use | home |
| tokens.spacing.xs / sm / md / lg / xl / xxl | home |
| tokens.rounded.sm | home |
| tokens.rounded.md | surface-3 |
| tokens.rounded.lg | home |
| tokens.rounded.full | home |
| tokens.shadow.tab | home |
| tokens.shadow.dialog | home |
| tokens.components.search-action.* | home |
| tokens.components.outline-action.* | home |
| tokens.components.topic-tab.* | home |
| tokens.components.active-topic-tab.* | home |
| tokens.components.company-card.* | home |
| tokens.components.login-dialog.* | home |

## Capture selectors

| Component | Pointer |
|---|---|
| Search Action | `home::[data-omd-capture="11"]` |
| Outline Action | `home::[data-omd-capture="56"]` |
| Topic Tab | `home::[data-omd-capture="35"]` |
| Active Topic Tab | `home::[data-omd-capture="34"]` |
| Company Card | `home::div` with class `card-container overflow-hidden container p-4 row no-gutters bg-white` |
| Login Dialog | `home::div` with class `login-prompt__dialog overflow-auto bg-white fade-enter-active fade-enter-to` |

Class tokens `fade-enter-active` / `fade-enter-to` are capture-selector strings. They are not promoted motion duration, easing, or reduced-motion evidence.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: live-extract
- Interaction expansions: 0; `observedStates: 0`, `interactionKinds: 0`, `interactionCount: 0`; only default static selector observations promoted
- Uncaptured hover/pressed/focus/disabled/loading/error/success/empty/skeleton/validation/toast/menu/authenticated-product treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Search Action and Outline Action loading/error/success applicability is omitted: source names the controls as Observed home navigation-search action (`home::[data-omd-capture="11"]`) and Observed compact public home action (`home::[data-omd-capture="56"]`); exact label/destination/request/outcome is unresolved. Those selectors are known and are not in the unresolved set (C2). Dual: portable Use + this Capture selectors table.
- Topic Tab and Active Topic Tab loading/error/success remain role-based on grouping selection (the tab itself does not enter loading, request-failure, or action-outcome confirmation)
- Company Card has no interactive-kind evidence; kind and state-applicability maps are omitted (C4)
- Login Dialog C4: `Type: dialog` and verified geometry/shadow/use are kept; `Kind` and the state-applicability map are omitted. Dialog internals being interactive is not evidence that the dialog surface itself has hover, disabled, or loading
- YAML `tokens.source: live-extract` is identity metadata
- §13 names official mission stakeholder groups, not biographical personas. Those groups are Audience only. Independently verified surface work is the three primary tasks. No fictional demographics are re-hosted here
- Catalog `primary_color` `#ff9100` is identity + Distinctive + capture-bound + Foundations Action Orange + Semantic unmerged-role + Search Action Background + Outline Action Text/Border (E2a)
- Catalog Google favicon literal URL is provenance identity only. URL-free first-party-mark boundary sentences are portable Assets + Named gaps (E2a: destinations split; not a URL triple)
- Token note is dual this identity note + portable Foundations Semantic evidence-domain (E2a)
- Corporate/campaign color non-promotion is Scope operational-clarity + Avoid + Foundations evidence-domain + Named gaps (E2a)
- Arial / `MsJhengHeiBold` not-proprietary / not-substitute is Font evidence + Family + Type-role named-family + Avoid + Named gaps (E2a)

## Derived editorial inventory (portable body, adjacent complete B2a)

These portable sentences are derived editorial implementation inference from the verified surfaces; they are not 104人力銀行-authored or a separately published UI specification:

- Experience Scope product-story (grew from inefficient advertising into a broader ecosystem)
- Experience Scope capture-bound coverage (does not treat those routes as a proxy)
- Experience Scope capture-bound visual-character reading (practical/information-forward; orange marks a search or commitment action)
- Experience Scope operational-clarity / people-centered-context reading (useful context for a direct, supportive posture)
- Audience no-invented-behaviors / no-named-personas / observable-work restriction
- Distinctive teal-not-substitute
- Distinctive four-color information-hierarchy reading
- Distinctive no-uncaptured-states-promoted
- numbered Principles 1–5 including *UI implication* notes
- capture-bound application list (including the orange → dark/gray → optional teal sequence and supplied geometric levels)
- Avoid list
- Foundations Semantic unmerged-role (catalog primary as high-confidence action orange; Soft Teal not-canvas; Teal Outline narrower; Link Blue not-general-CTA)
- Foundations Canvas / On Action field-identity (`#ffffff` shared hex, distinct fields)
- Foundations Semantic evidence-domain (corporate/campaign not used to extend the palette; token note)
- Foundations Shape local-geometry / not a universal radius scale
- Foundations Elevation hairline-not-shadow / not-a-general-ladder
- Typography Font evidence-class application (OS stack not 104-owned; declared-only not loadable specimen; `104_icon` not body type; Arial not proprietary)
- Typography Family font-use boundary (locale-aware stack labeled as a stack)
- Typography Type-role ratio-versus-size-local / public-body stack not a named 104 UI family
- Typography & Assets Google-favicon identity-not-captured
- Components capture-record omitted-rather-than-synthesized / no generic job-board pattern
- Layout compact-information vs marketing-grid application
- Layout desktop-public measurement-boundary
- Content citation-character / product-voice / Do-Don't table / Be A Giver-informs-tone-not-tokens application
- Content no-synthetic-voice

Left unqualified as first-party or observed-technical: 104人力銀行 product/surface identity and URLs; 1996 founding / 楊基寬 origin; official career mission, Be A Giver, children / working-age adults / healthy older adults, AI-powered recommendations; selector-backed color/spacing/shape/elevation values; operating-system stack string and 543 Arial uses; declared-only `MsJhengHeiBold` / `swiper-icons` existence; `104_icon` loaded from CDN; YAML unitless lineHeight 1.43 / 2.14 / 1.4; component anatomy and primitive types; `observedStates` / `interactionKinds` / `interactionCount` 0; B3 five-kind gate; Core C1/C2/C3 capture-record policy and per-control C2 omission / C4 kind-omission notes; Topic Tab / Active Topic Tab loading/error/success role map; official Traditional Chinese voice samples; Governance; Named gaps inventory. Reconstruction-boundary exemption not used.
