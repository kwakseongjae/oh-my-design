# KakaoPay provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kakaopay/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kakaopay |
| name | KakaoPay |
| country | KR |
| category | fintech |
| homepage | `https://www.kakaopay.com` |
| primary_color | `#ffeb00` |
| logo.type | favicon |
| logo.slug | `https://t1.kakaocdn.net/kakaopay/icons/web/192-brand.png` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | KakaoPay design story |
| ds.url | `https://story.kakaopay.com/225-kakaopay-design/` |
| ds.type | brand |
| ds.description | Official KakaoPay article describing its graphic-accessibility work; it is not a public component library. |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog identity `primary_color` `#ffeb00` stays here as an identity field. The source states that this value is not promoted into the reconciled token block; the portable Semantic color section records that refusal and does not add `#ffeb00` as a color role. The favicon URL is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a hosted favicon URL on `t1.kakaocdn.net`, kept as the catalog identity pointer and classified in the portable document as that identity pointer.

**ds.type: brand (A1c).** The source records an official design-story article, not a published UI specification. The portable B2a close uses the toss-form `not KakaoPay-authored or a separately published UI specification`. The source's own sentence that the article is graphic-accessibility work and not a public component library is kept as a source fact in `DESIGN.md` Scope.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| marketing-main | marketing | `https://www.kakaopay.com/main` | 2026-07-13 |
| design-story | marketing-content | `https://story.kakaopay.com/225-kakaopay-design/` | 2026-07-13 |
| story-home | marketing-content | `https://story.kakaopay.com/` | 2026-07-13 |
| corporate-service | corporate-service | `https://www.kakaocorp.com/page/service/service/KakaoPay` | 2026-07-13 |
| font-resource | brand-asset | `https://www.kakaocorp.com/page/detail/11571` | 2026-07-13 |
| developer-docs | documentation | `https://developers.kakaopay.com/docs/payment/online/reference` | 2026-07-13 |

YAML token claims all resolve to the corporate-service / corporate-service-live / live-inspect / 2026-07-13 anchor. Marketing, story, font-resource, and developer-docs URLs are named sources; they are not that token-claim surface.

Body-only first-party URLs the source also names (not YAML surface rows): `https://www.kakaopay.com/services/life/payment?t_ch=membership&t_src=homepage`, `https://partner.kakaopay.com/partner/online/introduction`.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| marketing-main-live | product-surface | `https://www.kakaopay.com/main` | 2026-07-13 |
| story-live | product-surface | `https://story.kakaopay.com/` | 2026-07-13 |
| design-story-doc | official-doc | `https://story.kakaopay.com/225-kakaopay-design/` | 2026-07-13 |
| corporate-service-live | product-surface | `https://www.kakaocorp.com/page/service/service/KakaoPay` | 2026-07-13 |
| font-resource-doc | brand-asset | `https://www.kakaocorp.com/page/detail/11571` | 2026-07-13 |
| developer-docs-live | official-doc | `https://developers.kakaopay.com/docs/payment/online/reference` | 2026-07-13 |

### Tier 1

- https://www.kakaopay.com/main
- https://www.kakaopay.com/services/life/payment?t_ch=membership&t_src=homepage
- https://story.kakaopay.com/
- https://story.kakaopay.com/225-kakaopay-design/
- https://www.kakaocorp.com/page/service/service/KakaoPay
- https://www.kakaocorp.com/page/detail/11571
- https://developers.kakaopay.com/docs/payment/online/reference

### Tier 2 (no usable record)

- getdesign.md/kakaopay was attempted through built-in web search; no usable record returned
- styles.refero.design/?q=kakaopay was attempted through built-in web search; no usable style record returned

## Sibling handling (`web/references/kakaopay/.verification.md`)

The sibling exists — confirmed with `find web/references/kakaopay -type f`. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Machine artifact: `artifacts/reference-evidence/kakaopay.json`, captured 2026-07-13T11:02:53.360Z with `playwright_cli`
- Capture coverage: three public routes, score 83, 27 component variants, three observed state labels, zero interaction kinds, and zero interaction snapshots
- corporate-service `surface-3::[data-omd-capture="1"]` (`.item_menu`): background rgb(255, 255, 255); color rgb(0, 0, 0); border-radius 999px; padding 4px 16px 6px; font-size 17px; line-height 27px
- same capture `::state-hover`: background rgb(243, 243, 243)
- `surface-3::[data-omd-capture="7"]::state-hover` (`.btn_search`): background rgb(238, 238, 238); color rgb(51, 51, 51); border-radius 18px; padding 0px; font-size 14px; line-height 21px
- `surface-3::div.item_card_new.item_normal_card`: background rgb(243, 243, 243); color rgb(51, 51, 51); border-radius 16px; padding 0px; font-size 14px; line-height 21px
- `surface-3::[data-omd-capture="26"]` (`.link_tag`): background rgb(238, 238, 238); color rgb(0, 0, 0); border-radius 34px; padding 0px 15px; font-size 13px; line-height 34px
- `surface-3::strong.tit_card`: color rgb(0, 0, 0); padding 0px 32px; font-size 26px; font-weight 700; line-height 36px; letter-spacing -0.6px
- KakaoSmall computed on 156 elements; KakaoBig on 45; KakaoDigitLatin declared-only; Helvetica Neue unresolved

Sibling-only items (mention, not portable use). This sentence names the field kind so the row can be found; it does not assert that those strings are absent from this file:

- coverage score `83`
- 27 component variants
- three observed state labels
- `playwright_cli`
- `2026-07-13T11:02:53.360Z`
- `artifacts/reference-evidence/kakaopay.json`
- rgb() spellings
- menu line-height `27px`
- tag line-height `34px` (the source's `34px` is the tag radius)
- tit_card padding shorthand `0px 32px` (the source names `32px` horizontal inner-card padding)

Those sibling-only strings are transcribed in the bullet list above. They are not promoted into `DESIGN.md`.

Values the sibling shares with the source body (corroboration, not new portable facts): `#ffffff` / `#000000` / `#f3f3f3` / `#eeeeee` / `#333333`, 999px, `4px 16px 6px`, 17px, 18px, `0px`, 14px, 16px, 34px radius, `0px 15px`, 13px, 26px / 700 / 36px / -0.6, KakaoSmall 156, KakaoBig 45, KakaoDigitLatin, Helvetica Neue, OFL, 3:1, “마음 놓고 금융하다”.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.ink / text / muted / subtle / canvas / surface / surface-soft | corporate-service |
| tokens.typography.family.sans / display | corporate-service |
| tokens.typography.card-title.* | corporate-service |
| tokens.typography.public-body.* | corporate-service |
| tokens.typography.utility.* | corporate-service |
| tokens.spacing.compact / control / card | corporate-service |
| tokens.rounded.none / card / search / action / pill | corporate-service |
| tokens.shadow.none | corporate-service |
| tokens.components.corporate-menu.* | corporate-service |
| tokens.components.corporate-search.* | corporate-service |
| tokens.components.corporate-card.* | corporate-service |
| tokens.components.corporate-tag.* | corporate-service |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 Personas — the source already leaves named, demographic, and behavioral fields unfilled | Deleted. No name, motivation, or affiliation classification is re-hosted here (D2, D2a). The two source-named groups survive in `DESIGN.md` Audience because the source calls them publicly identified audiences, not fictional biographies. |
| §9 Agent Prompt Guide — tool-facing construction prompt | Deleted. No receiving slot. Every value the prompt names (white `#ffffff` pill, black `#000000` text, 999px radius, `4px 16px 6px`, 17px KakaoBig, graphic principles) is already in Foundations / Typography / Components / Experience. |
| Unsourced motion curve | None in the source. No curve was deleted. Durations are unnamed. B3 promotion gate is in `DESIGN.md` Motion. |
| Sibling-only collector metadata (score 83, 27 variants, rgb() spellings, menu `27px` line-height, tag `34px` line-height) | Mentioned in the sibling section above. Not promoted into `DESIGN.md`. |
| YAML `omd`, `verified`, `verification_v2`, `tokens.source` / `extracted`, `ds.*`, `components_harvested` | Kept in this ledger (A1c). Not copied into portable top matter. |
| Catalog identity `primary_color` `#ffeb00` as a reconciled color role | Kept here as identity. The source refuses promotion into the token block; portable Semantic color records that refusal. |

## Claim ledger

Claims use the YAML corporate-service anchor from the source: corporate-service / corporate-service-live / live-inspect / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.ink | corporate-service |
| tokens.colors.text | corporate-service |
| tokens.colors.muted | corporate-service |
| tokens.colors.subtle | corporate-service |
| tokens.colors.canvas | corporate-service |
| tokens.colors.surface | corporate-service |
| tokens.colors.surface-soft | corporate-service |
| tokens.typography.family.sans / display | corporate-service |
| tokens.typography.card-title.size / weight / lineHeight / tracking / use | corporate-service |
| tokens.typography.public-body.size / weight / lineHeight / tracking / use | corporate-service |
| tokens.typography.utility.size / weight / lineHeight / tracking / use | corporate-service |
| tokens.spacing.compact / control / card | corporate-service |
| tokens.rounded.none / card / search / action / pill | corporate-service |
| tokens.shadow.none | corporate-service |
| tokens.components.corporate-menu.* | corporate-service |
| tokens.components.corporate-search.* | corporate-service |
| tokens.components.corporate-card.* | corporate-service |
| tokens.components.corporate-tag.* | corporate-service |

## Derived-editorial inventory (B2a, 1:1 with portable complete-form closes)

Each row names one portable sentence that carries the complete close `derived editorial implementation inference` + `not KakaoPay-authored or a separately published UI specification`. Count must match `DESIGN.md`.

| # | Portable site | Judgment named |
|---|---|---|
| 1 | Scope ¶1 | corporate-service page as token surface; values stay attached; main / payment / partner / story / font-resource / developer-docs URLs as named sources for framing, graphic direction, font license, or API error-code documentation rather than as that token surface |
| 2 | Scope ¶2 | everyday-finance framing; graphic-system principles kept from authorizing a private payment-app component kit |
| 3 | Scope narrative | classifying the §11 paragraph — including the closing pair on accessible reusable graphic communication and the refusal to substantiate historical, market-share, or user-persona claims — as narrative context that does not by itself supply interface tokens |
| 4 | Primary tasks | selecting the three surface-or-control outcomes as primary tasks; classifying them as surface-or-control outcomes rather than fictional biographies |
| 5 | Audience | refusing to promote individual personas; reading the two source-named groups as this product's audience |
| 6 | Distinctive traits | classifying the list as a restatement of the source Key Characteristics; groupings and readings inside the list |
| 7 | Principles | every *UI implication*; reading the official-article values as implementation principles for the captured public and corporate surfaces |
| 8 | Application rules | the four source Do rules and the reasons attached |
| 9 | Avoid | the four source Don't prohibitions and the reasons inside them |
| 10 | Semantic color | pairing each hex to its token-set path; taking role names from the source's own labels; keeping `#ffeb00` off the reconciled token block; attaching every role to the corporate-service YAML claim |
| 11 | Spacing | keeping each number on its own key path |
| 12 | Shape | keeping local radii on their components; keeping each YAML step on its own key path |
| 13 | Elevation | reading the stack as flat observed layering on the corporate-service controls and card only |
| 14 | Motion | treating the absence as an unnamed motion set rather than a default curve; leaving reduced-motion unnamed |
| 15 | Font evidence | Kakao Big / Kakao Small as official display and body/caption roles; KakaoDigitLatin as declared-only; Apple SD Gothic Neo / Malgun Gothic / 맑은 고딕 as fallback context; Helvetica Neue omitted |
| 16 | Family | fallback prohibition |
| 17 | Type roles | keeping YAML line heights as unitless ratios; keeping YAML singles and §3 px spellings on separate readings; attaching surfaces from YAML claim anchors |
| 18 | Type roles sizes | reading 26px / 17px / 13px / 14px as the roles or controls named beside them rather than as shared numerals |
| 19 | Assets | favicon URL as an identity pointer; OFL sentence as a font-asset license rather than a KakaoPay product-surface specification |
| 20 | Capture record | preserving the source state contract here rather than delegating to an unadopted catalog graph; role-based decision procedure; every interactive-kind verdict; every applicability verdict and reason; refusal to treat the map as a complete state-coverage claim |
| 21 | Menu action | reading 999px / `4px 16px 6px` / 17px as this menu's geometry rather than those YAML steps or type-role rows |
| 22 | Search action | reading `#eeeeee` default and hover as two readings on this control rather than a transfer from `tokens.colors.surface-soft`; reading 18px / 14px as this search action's geometry |
| 23 | Service card | reading 16px as this card's geometry rather than `tokens.spacing.control: 16`; reading the 14px / 400 / KakaoSmall font as this card's font rather than as a shared public-body type-role row |
| 24 | Topic tag | reading 34px / 13px / `#eeeeee` as this tag's geometry rather than a YAML rounded step, a type-role row, or another component's background |
| 25 | Layout rules | reading 32px / 4px / 16px as the corporate-service observations the source names rather than as a checkout or authenticated-layout specification |
| 26 | Layout measurements | reading named radii, fonts, and paddings as that page's measurements rather than as cross-viewport specifications |
| 27 | Content & Locales | reading the source register as this contract's public voice rather than as a separately published KakaoPay microcopy guide |
| 28 | Named gaps | calling the list a set of named gaps rather than a domain inventory; treating the items as unnamed values rather than permissions to invent |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: reconciled
- Interaction: collector labels for hover and pressed on `.item_menu` and `.btn_search`; `interactionCount: 0`; no interaction snapshots
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official 2024 design article is graphic-accessibility narrative; it is not a public component library
- Narrative context (everyday-life positioning, biometric verification, four-step merchant journey, accessibility/operational-efficiency redesign, closing evidence-boundary sentence) does not by itself supply interface tokens
