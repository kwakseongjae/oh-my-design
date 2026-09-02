# KakaoBank provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kakaobank/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kakaobank |
| name | KakaoBank |
| country | KR |
| category | fintech |
| homepage | `https://www.kakaobank.com` |
| primary_color | `#ffe300` |
| logo.type | simpleicons |
| logo.slug | kakaotalk |
| omd format (source) | 0.1 |
| verified | 2026-07-12 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-12 |
| components_harvested | true |
| ds.name | KakaoBank Brand Resource |
| ds.url | `https://www.kakaobank.com/view/about/brand/resource` |
| ds.type | brand |
| ds.description | Official KakaoBank identity resource with symbol, wordmark, and brand-color guidance; it does not substitute for native banking-product UI evidence. |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The YAML homepage is `https://www.kakaobank.com` (no trailing slash). The inspected home surface is `https://www.kakaobank.com/` (trailing slash). Both spellings are kept. Catalog identity `primary_color` `#ffe300` matches `tokens.colors.primary` and is also the portable KakaoBank Yellow role. The Simple Icons slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3 classified as an identity pointer, not hosted brand artwork.

**Logo decision.** The `logo.slug` above is a Simple Icons identifier (`kakaotalk`), not a KakaoBank-hosted asset URL. The catalog identity field is kept here and is classified in the portable document as an identity pointer, not a hosted brand file and not a substitute for the protected wordmark.

**ds.type: brand (A1c).** The source records an official identity resource, not a published UI specification. The portable B2a close uses the toss-form `not KakaoBank-authored or a separately published UI specification`. The source's own sentence that this identity resource does not substitute for native banking-product UI evidence is kept as a source fact in `DESIGN.md` Scope.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-12 |
| verification_v2.checked | 2026-07-12 |
| tokens.extracted | 2026-07-12 |
| surfaces inspected | 2026-07-12 |
| sources captured | 2026-07-12 |

The source footer records the verification verbatim as **Verified:** 2026-07-12 (omd:migrate). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | corporate-product | `https://www.kakaobank.com/` | 2026-07-12 |
| service | public-service | `https://www.kakaobank.com/view/service` | 2026-07-12 |
| brand | official-brand | `https://www.kakaobank.com/view/about/brand/resource` | 2026-07-12 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | `https://www.kakaobank.com/` | 2026-07-12 |
| service-live | product-surface | `https://www.kakaobank.com/view/service` | 2026-07-12 |
| brand-live | brand-asset | `https://www.kakaobank.com/view/about/brand/resource` | 2026-07-12 |
| brand-pdf | official-doc | `https://www.kakaobank.com/static/etc/logo/KakaoBank_BrandIdentityGuidelines_V2.0.pdf` | 2026-07-12 |

### Tier 1

- https://www.kakaobank.com/
- https://www.kakaobank.com/view/service
- https://www.kakaobank.com/view/about/brand/resource
- https://www.kakaobank.com/static/etc/logo/KakaoBank_BrandIdentityGuidelines_V2.0.pdf

### Tier 2 (no usable record)

- getdesign.md/kakaobank returned no design record
- Refero had no reliable KakaoBank match

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names:

> Fresh corporate home, service, and official brand-resource capture. Brand identity and public web measurements are promoted; native banking-product controls are not inferred.

## Sibling handling (`web/references/kakaobank/.verification.md`)

The sibling exists — confirmed with `find web/references/kakaobank -type f`. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Machine artifact: `artifacts/reference-evidence/kakaobank.json`
- Fresh capture: four collected surfaces, three effective first-party routes, 24 color candidates, two font declarations, 20 component variants, coverage 77/100. No menu/dialog interaction was exposed by the safe collector.
- official primary: KakaoBank Yellow `#ffe300`, specified by current official brand resource and V2.0 guide
- corporate canvas: `#ffffff`, black foreground; `#f7f7f7` repeated section fill
- top navigation: transparent / black, 0px, `0 20px`, 62px, 14px/600; focus/hover/pressed captured
- service tab: transparent / black, 1px `#e6e6e6` bottom rule, `16px 0`, 62px, 16px/400
- corporate action: black / white, 6px, `9.5px 18px`, 42px, 15px/600
- resource download: black / white, 6px, `10px 16px 10px 20px`, 43px, 16px/400
- brand spec row: transparent / black, 1px `#e6e6e6` top rule, `10px 0`, 16px/400/24px
- hero: Pretendard Variable 90px/800/117px, -0.9px
- service title: Pretendard Variable 42px/700/52.08px, -0.84px
- Conflict matrix previous/secondary: `#1e1e1e` generalized foreground; nearby Kakao-family yellows possible; error/success/warning/link roles; yellow CTA / transfer inputs / status badges / account rows; mixed 12/16px app-like controls; whisper/subtle/sheet shadows; Pretendard + SF Mono
- Current resolutions: official `#FFE300`; live public foreground `#000000`; those semantic and native roles removed; 0px nav/tabs, 6px current black actions, 16px section shapes; promoted public components flat; Pretendard loaded, no mono role observed

Sibling-only items (mention, not portable use). This sentence names the field kind so the row can be found; it does not assert that those strings are absent from this file:

- coverage `77/100`
- 24 color candidates, two font declarations, 20 component variants
- four collected surfaces / three effective first-party routes
- previous foreground `#1e1e1e`
- SF Mono
- whisper/subtle/sheet shadow names
- mixed 12/16px app-like controls (as a previous/secondary field, not a current token)
- `artifacts/reference-evidence/kakaobank.json`

Those sibling-only strings are transcribed in the bullet list above. They are not promoted into `DESIGN.md`.

Values the sibling shares with the source body (corroboration, not new portable facts): `#ffe300` / `#FFE300`, `#ffffff`, `#f7f7f7`, `#e6e6e6`, `#000000`, Pretendard Variable, 645, 90px/800/117px, 42px/700/52.08px, 62px, `0 20px`, `9.5px 18px`, `10px 16px 10px 20px`, `swiper-icons`.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary | brand |
| tokens.colors.canvas / foreground / secondary / surface | home |
| tokens.colors.body | service |
| tokens.colors.divider | brand |
| tokens.typography.family.ui | home |
| tokens.typography.hero.* | home |
| tokens.typography.display.* / section.* / card-title.* | service |
| tokens.typography.body.* / navigation.* | home |
| tokens.spacing.xs | home |
| tokens.spacing.sm | home |
| tokens.spacing.md | home |
| tokens.spacing.lg | service |
| tokens.spacing.xl | brand |
| tokens.rounded.action | home |
| tokens.rounded.section | home |
| tokens.rounded.full | home |
| tokens.components.top-navigation.* / black-action.* | home |
| tokens.components.service-tab.* | service |
| tokens.components.resource-download.* / brand-spec-row.* | brand |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 first-party task contexts — project-specific names, ages, balances, credit profiles, income, risk tolerance, and success metrics | Deleted. The source already leaves those fields unspecified. No name, age, city, balance, or affiliation classification is re-hosted here (D2, D2a). The four task-context wordings survive in `DESIGN.md` Primary tasks and Audience because the source calls them first-party task contexts, not fictional biographies. |
| §9 Agent Prompt Guide — tool-facing construction prompt | Deleted. No receiving slot. Every value the prompt names is already in Foundations / Typography / Components / Experience. |
| Unsourced motion curve | None in the source. No curve was deleted. Durations are unnamed. B3 promotion gate is in `DESIGN.md` Motion. |
| Sibling-only previous/secondary fields (`#1e1e1e`, SF Mono, whisper/subtle/sheet, coverage 77/100) | Mentioned in the sibling section above. Not promoted into `DESIGN.md`. |
| YAML `omd`, `verified`, `verification_v2`, `tokens.source` / `extracted`, `ds.*`, `components_harvested` | Kept in this ledger (A1c). Not copied into portable top matter. |

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-12; `service` = service / service-live / live-inspect / 2026-07-12; `brand` = brand / brand-live / official-brand-inspect / 2026-07-12.

| claim | surface |
|---|---|
| tokens.colors.primary | brand |
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.secondary | home |
| tokens.colors.body | service |
| tokens.colors.surface | home |
| tokens.colors.divider | brand |
| tokens.typography.family.ui | home |
| tokens.typography.hero.size / weight / lineHeight / tracking / use | home |
| tokens.typography.display.size / weight / lineHeight / tracking / use | service |
| tokens.typography.section.size / weight / lineHeight / tracking / use | service |
| tokens.typography.card-title.size / weight / lineHeight / tracking / use | service |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.navigation.size / weight / lineHeight / tracking / use | home |
| tokens.spacing.xs | home |
| tokens.spacing.sm | home |
| tokens.spacing.md | home |
| tokens.spacing.lg | service |
| tokens.spacing.xl | brand |
| tokens.rounded.action | home |
| tokens.rounded.section | home |
| tokens.rounded.full | home |
| tokens.components.top-navigation.* | home |
| tokens.components.service-tab.* | service |
| tokens.components.black-action.* | home |
| tokens.components.resource-download.* | brand |
| tokens.components.brand-spec-row.* | brand |

## Derived-editorial inventory (B2a, 1:1 with portable complete-form closes)

Each row names one portable sentence that carries the complete close `derived editorial implementation inference` + `not KakaoBank-authored or a separately published UI specification`. Count must match `DESIGN.md`.

| # | Portable site | Judgment named |
|---|---|---|
| 1 | Scope ¶1 | three inspected routes as token surfaces; values stay attached; Brand Resource and V2.0 guide as identity sources that do not automatically supply native banking-product controls |
| 2 | Scope ¶2 | restrained and digitally accessible while retaining the clarity expected of a regulated financial institution; restraint as the distinctive system; yellow as identity rather than proof that every banking control uses yellow |
| 3 | Scope ¶3 | brand character from scale, disciplined yellow, and product imagery rather than a proprietary display face |
| 4 | Scope narrative | classifying the §11 paragraph — including the closing pair on wordmark/yellow ownership and product layers requiring their own evidence — as narrative context that does not by itself supply interface tokens |
| 5 | Primary tasks | selecting the four first-party task contexts as primary tasks; classifying them as first-party task contexts rather than fictional biographies |
| 6 | Audience | refusing to promote individual personas; reading those source-named groups as this product's audience |
| 7 | Distinctive traits | classifying the list as a restatement of the source Key Characteristics; groupings and readings inside the list |
| 8 | Principles | the four source Principles items |
| 9 | Application rules | the four source Do rules and the reasons attached |
| 10 | Avoid | the four source Don't prohibitions and the reasons inside them |
| 11 | Semantic color | pairing each hex to its token-set path; taking role names from the source's own labels; keeping `#FFE300` beside `#ffe300`; keeping `#007AFF` off the promoted set; attaching surfaces from YAML claim anchors rather than from the role name |
| 12 | Spacing | keeping each number on its own key path |
| 13 | Shape | keeping local radii on their components; keeping `full: 9999` on its own key path |
| 14 | Elevation | reading the stack as flat public layering; keeping sheet/card/focus shadows off the promoted set |
| 15 | Motion | treating public interaction capture as a state record rather than a motion token; leaving reduced-motion unnamed |
| 16 | Font evidence | wordmark as protected artwork rather than a font; `swiper-icons` as declared-only; native iOS/Android banking typography unresolved |
| 17 | Family | fallback prohibition |
| 18 | Type roles | keeping YAML line heights as unitless ratios; keeping YAML singles and §3 px spellings on separate readings; attaching surfaces from YAML claim anchors |
| 19 | Type roles sizes | reading 90px / 42px / 16px / 14px as the roles named beside them rather than as shared numerals across spacing or the 42px-tall black-action |
| 20 | Assets | Simple Icons `kakaotalk` slug as an identity pointer rather than hosted brand artwork |
| 21 | Capture record | preserving the source state contract here rather than delegating to an unadopted catalog graph; role-based decision procedure; every interactive-kind verdict; every applicability verdict and reason; refusal to treat the map as a complete state-coverage claim |
| 22 | Service-category tab | reading 62px and `16px 0` as this tab's geometry rather than the top-navigation 62px or `tokens.spacing.md: 16` |
| 23 | Corporate black action | reading 42px as this action's geometry rather than the service-page title |
| 24 | Brand-resource download | reading 43px and the padding as this control's geometry rather than `tokens.spacing.md: 16` |
| 25 | Brand specification row | reading `24px` as this row's line-height spelling rather than `tokens.spacing.lg: 24` |
| 26 | Layout rules | reading the five source layout rules as the layout contract for the three inspected public surfaces rather than as a native banking-task layout |
| 27 | Layout measurements | reading named heights as surface measurements rather than cross-viewport specifications |
| 28 | Content & Locales | reading the source register as this contract's voice rather than as a separately published KakaoBank microcopy guide |
| 29 | Named gaps | calling the list a set of named gaps rather than a domain inventory; treating the items as unnamed values rather than permissions to invent |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction: top navigation focus, hover, and pressed captured. One current service control exposed a disabled state; semantic role insufficient for promotion.
- Uncaptured hover/pressed treatments on black-action and resource-download are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official Brand Resource and V2.0 identity guide are identity context; they do not substitute for native banking-product UI evidence
- Narrative context (ordinary-life positioning, official symbol, catalog expansion, consumer-product and financial-institution register, closing evidence-boundary sentence) does not by itself supply interface tokens
