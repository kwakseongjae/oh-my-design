# KB Pay provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kbpay/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kbpay |
| name | KB Pay |
| display_name_kr | KB페이 |
| country | KR |
| category | fintech |
| homepage | `https://card.kbcard.com/CXPRISVC0127.cms` |
| primary_color | `#FFCC00` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=kbcard.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-22 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

Token note from source: primary = live primary CTA yellow (`#FFCC00` = rgb(255,204,0)); brand accent purple (`#614CC2`) appears on label/menu tints; heading text near-black (`#151515` effective from rgba(0,0,0,0.87)); font family = KB Financial Group proprietary KBFGText / KBFGDisplayM.

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog identity `primary_color` `#FFCC00` is dual: identity here, and the portable Semantic color primary role. The favicon URL is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Google s2 favicon URL for `kbcard.com`, kept as the catalog identity pointer and classified in the portable document as that identity pointer, not a KB-hosted brand file.

No `ds.*` record is in the source YAML. The portable B2a close uses the toss-form `not KB Pay-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석: no first-party published UI specification is named).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| surfaces inspected | 2026-06-22 |
| sources captured | 2026-06-22 |

The source footer records the verification verbatim as **Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| kbpay-intro | product-surface | `https://card.kbcard.com/CXPRISVC0127.cms` | 2026-06-22 |
| kbcard-home | product-surface | `https://card.kbcard.com/` | 2026-06-22 |

YAML token claims resolve to the live-extract on the KB Pay introduction page. The homepage is the second Tier 1 confirming surface the source names. The voice-sample URL `https://m.kbcard.com/BON/DVIEW/MBEM0007` is a named copy source in the source comment; it is not a YAML token-claim surface.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| kbpay-intro-live | product-surface | `https://card.kbcard.com/CXPRISVC0127.cms` | 2026-06-22 |
| kbcard-home-live | product-surface | `https://card.kbcard.com/` | 2026-06-22 |
| voice-sample-live | product-surface | `https://m.kbcard.com/BON/DVIEW/MBEM0007` | 2026-06-22 |

### Tier 1

- https://card.kbcard.com/CXPRISVC0127.cms (KB Pay introduction page)
- https://card.kbcard.com/ (KB Kookmin Card homepage)

### Tier 2 (no usable record)

- getdesign.md/kbpay — not found (404)
- styles.refero.design/?q=KB+Pay — no KB Pay entries found

### Domain resolution (source comment)

- `kbpay.kbcard.com` → HTTP 404
- `m.kbpay.kbcard.com` → DNS not resolved (sibling note)
- Primary domain recorded as `card.kbcard.com`

## Sibling handling (`web/references/kbpay/.verification.md`)

The sibling exists — confirmed with a path listing of `web/references/kbpay`. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-22; method playwright getComputedStyle (live DOM) on the two Tier 1 URLs
- body: KBFGText; color rgba(0,0,0,0.87); font-size 15px; line-height normal
- H1 "KB Pay": KBFGDisplayM 32px / 400 / rgba(0,0,0,0.87)
- H3 "서비스 특징": KBFGDisplayM 24px / 400 / rgb(21,21,21)
- Primary CTA `.btn.btn--primary`: bg rgb(255,204,0); color rgb(0,0,0); radius 4px; height 48px; font 18px / 600; padding 0px 16px
- Secondary login `.kbBtn.btnS.login`: height 42–44px
- Main nav `.linkDep1`: padding 27px 0px; height 80px
- Utility nav "회원가입": 13px / 400 / rgb(102,102,102); height 60px
- Active breadcrumb "KB Pay": bg rgb(250,234,173) `#FAEAAD`
- Nav depth1-bar `em.depth1-bar`: bg rgb(255,224,102) `#FFE066`; height 14px; width 60px
- Notification badge span "1": bg rgb(255,223,1) `#FFDF01`; color rgb(51,51,51); radius 3px; font 12px / 600
- Editorial label "인기 메뉴": rgb(97,76,194) `#614CC2` at 18px
- `.recom-card`: radius 16px; shadow rgba(0,0,0,0.16) 0px 1px 3px 0px; height 541px; width 1080px
- `.finance-menu__item`: radius 16px; same shadow; height 176px; width 344px
- `.braille-card`: bg rgb(249,250,252); radius 4px; box-shadow none; height 105px
- guide-area link: bg rgb(249,250,252); radius 16px; padding 20px 32px; height 106px
- bg frequency top: white ×74, `#F9F9F9` ×29, `#F2F2F2` ×11, `#FFCC00` ×11
- fg frequency top: rgba(0,0,0,0.87) ×2396, rgb(51,51,51) ×1089, rgb(68,68,68) ×703, rgb(102,102,102) ×405, rgb(0,0,0) ×25, rgb(97,76,194) ×8

Sibling-only items (mention, not portable use). This sentence names the field kind so the row can be found; it does not assert that those strings are absent from this file:

- notification badge `#FFDF01` / rgb(255,223,1)
- notification badge text rgb(51,51,51) against YAML fg `#000000`
- secondary login height range `42–44px`
- depth1-bar height `14px` and width `60px`
- `.recom-card` height `541px` and width `1080px`
- `.braille-card` computed `rgb(249, 250, 252)` against YAML/body `#F9FAFE`
- `.braille-card` height `105px`
- guide-area padding `20px 32px` and height `106px`
- bg `#F2F2F2` ×11
- `m.kbpay.kbcard.com` DNS note

Those sibling-only strings are transcribed in the bullet list above. They are not promoted into `DESIGN.md`.

Values the sibling shares with the source body (corroboration, not new portable facts): `#FFCC00`, `#FFFFFF`, `#333333`, `#666666`, `#AAAAAA`, `#FAEAAD`, `#FFE066`, `#614CC2`, `#151515` / rgba(0,0,0,0.87), 4px button radius, 48px CTA height, `0 16px` padding, 18px / 600, 16px card radius, card shadow, 80px nav, 60px utility, 176px finance-menu height, KBFGDisplayM, KBFGText.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / primary-light / primary-tint / canvas / surface / surface-alt / ink / body / muted / faint / divider / on-primary / accent-purple | kbpay-intro |
| tokens.typography.family.display / body | kbpay-intro |
| tokens.typography.display-hero.* / section.* / nav-main.* / body.* / nav-util.* / button-lg.* / label.* | kbpay-intro |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | kbpay-intro |
| tokens.rounded.sm / md / lg / full | kbpay-intro |
| tokens.shadow.card / none | kbpay-intro |
| tokens.components.button-primary.* | kbpay-intro |
| tokens.components.button-outlined.* | kbpay-intro |
| tokens.components.input-text.* | kbpay-intro |
| tokens.components.card-standard.* | kbpay-intro |
| tokens.components.card-surface.* | kbpay-intro |
| tokens.components.badge-yellow.* | kbpay-intro |
| tokens.components.badge-accent.* | kbpay-intro |
| tokens.components.nav-tab.* | kbpay-intro |
| tokens.components.toggle-switch.* | kbpay-intro |

`#776C61` is source §2 body only; it has no YAML `tokens.colors.*` path. Tag/Badge 14px is source §3 hierarchy only; it has no YAML `tokens.typography.*` path.

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 Personas — 4 fictional archetypes | Deleted. No name, motivation, or affiliation classification is re-hosted here (D2, D2a). The four source-named groups survive in `DESIGN.md` Audience because the source calls them publicly observable KB Pay user segments, not fictional biographies. |
| §9 Agent Prompt Guide — tool-facing construction prompts and iteration list | Deleted. No receiving slot. Every value the prompts name (yellow `#FFCC00`, black `#000000`, 4px / 48px / `0 16px` / 18px / 600, card 16px + shadow, 인기 메뉴 `#614CC2`, nav 80px, outlined login) is already in Foundations / Typography / Components / Experience. |
| Unsourced easing curves | Curve values omitted at the curve-value boundary. Duration tokens 120ms / 200ms / 320ms and the three easing *roles* plus reduced-motion stay in `DESIGN.md` Motion. B3 promotion gate is in `DESIGN.md` Motion. |
| Sibling-only collector measurements (`#FFDF01`, 42–44px, depth1-bar 14×60, recom-card 541×1080, braille computed rgb(249,250,252), `#F2F2F2`) | Mentioned in the sibling section above. Not promoted into `DESIGN.md`. |
| YAML `omd`, `verified`, `tokens.source` / `extracted`, `components_harvested` | Kept in this ledger (A1c). Not copied into portable top matter. |

## Claim ledger

Claims use the live-extract introduction-page anchor from the source: kbpay-intro / kbpay-intro-live / live-extract / 2026-06-22.

| claim | surface |
|---|---|
| tokens.colors.primary | kbpay-intro |
| tokens.colors.primary-light | kbpay-intro |
| tokens.colors.primary-tint | kbpay-intro |
| tokens.colors.canvas | kbpay-intro |
| tokens.colors.surface | kbpay-intro |
| tokens.colors.surface-alt | kbpay-intro |
| tokens.colors.ink | kbpay-intro |
| tokens.colors.body | kbpay-intro |
| tokens.colors.muted | kbpay-intro |
| tokens.colors.faint | kbpay-intro |
| tokens.colors.divider | kbpay-intro |
| tokens.colors.on-primary | kbpay-intro |
| tokens.colors.accent-purple | kbpay-intro |
| tokens.typography.family.display / body | kbpay-intro |
| tokens.typography.display-hero / section / nav-main / body / nav-util / button-lg / label | kbpay-intro |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | kbpay-intro |
| tokens.rounded.sm / md / lg / full | kbpay-intro |
| tokens.shadow.card / none | kbpay-intro |
| tokens.components.button-primary.* | kbpay-intro |
| tokens.components.button-outlined.* | kbpay-intro |
| tokens.components.input-text.* | kbpay-intro |
| tokens.components.card-standard.* | kbpay-intro |
| tokens.components.card-surface.* | kbpay-intro |
| tokens.components.badge-yellow.* | kbpay-intro |
| tokens.components.badge-accent.* | kbpay-intro |
| tokens.components.nav-tab.* | kbpay-intro |
| tokens.components.toggle-switch.* | kbpay-intro |

## Derived-editorial inventory (B2a, 1:1 with portable complete-form closes)

Each row names one portable sentence that carries the complete close `derived editorial implementation inference` + `not KB Pay-authored or a separately published UI specification`. Count must match `DESIGN.md`.

| # | Portable site | Judgment named |
|---|---|---|
| 1 | Scope ¶1 | two inspected routes as token surfaces; voice-sample URL as a named copy source rather than a second token extract; values stay attached; 404 domain note as the source's own resolution fact |
| 2 | Scope ¶2 | yellow as the action color rather than an accent flourish; display face as confident and calm; approachable-and-warm rather than austere; 4px/16px as a fintech-aesthetic balance |
| 3 | Scope narrative | classifying the §11 paragraph — including the years 2020/2022, the "KB국민카드 모바일홈" consolidation, Yeongdeungpo, 듀얼홈, "국민", and the closing national-infrastructure sentence — as narrative context that does not by itself supply interface tokens |
| 4 | Primary tasks | selecting the three introduction-page outcomes as primary tasks; refusing the persona section |
| 5 | Audience | refusing to promote individual personas; reading the four source-named groups as this product's audience |
| 6 | Distinctive traits | classifying the list as a restatement of the source Key Characteristics; groupings and readings inside the list |
| 7 | Principles | the five items and every *UI implication*; the source comment's editorial-reading note on "one action, one color" and the national-infrastructure framing |
| 8 | Application rules | the seven source Do rules and the reasons attached |
| 9 | Avoid | the seven source Don't prohibitions and the reasons inside them |
| 10 | Semantic color | pairing each hex to its token-set path; keeping `#776C61` on the §2 body role; keeping `#000000` as on-primary rather than body ink; attaching roles to the live-extract claim |
| 11 | Semantic color attachments | reading `#000000` / `#151515` / `#FFFFFF` as the roles named beside them rather than as a swapped pair |
| 12 | Spacing | keeping each number on its own key path |
| 13 | Shape | keeping local radii on their components; keeping each YAML step on its own key path |
| 14 | Elevation | reading the single thin shadow as deliberately minimal, as making cards feel clickable without visual noise, and as appropriate for a mobile payment product where cognitive load should be low |
| 15 | Motion | durations and easing roles kept; three untraceable curves omitted; five-kind promotion gate held |
| 16 | Font evidence | applying the official-product-use / live-computed / proprietary-asset classes to KBFGDisplayM / KBFGText |
| 17 | Family | fallback prohibition |
| 18 | Type roles | keeping YAML line heights as unitless ratios; keeping YAML use and the §3 longer use on the same role |
| 19 | Type roles sizes | reading 32px / 24px / 15px / 18px / 14px as the roles named beside them rather than as shared numerals |
| 20 | Type rules | the four §3 Principles rules and the readings inside them |
| 21 | Assets | favicon URL as an identity pointer rather than hosted brand artwork |
| 22 | Capture record §14 | keeping the ten state rows attached to the source §14 section rather than transferring them onto a different control as computed treatments |
| 23 | Capture record applicability | preserving the source state contract here rather than delegating to an unadopted catalog graph; role-based decision procedure; every interactive-kind verdict; every applicability verdict and reason; refusal to treat the map as a complete state-coverage claim |
| 24 | Primary CTA | reading 4px / 16px / 48px / 18px as this button's geometry rather than those YAML steps or a shared type-role row; keeping the §14 Disabled opacity / `#FAEAAD` treatment on the §14 button row rather than rewriting it as a computed hover |
| 25 | Secondary Outlined | reading 3px / 14px as this outlined button's geometry rather than those YAML steps or the Tag/Badge type-role row |
| 26 | Text Input | reading 4px / 15px as this input's geometry rather than those YAML steps or the Body type-role row |
| 27 | Standard Card | reading 16px and the card shadow as this card's geometry rather than those YAML steps |
| 28 | Surface Card | reading 4px as this card's geometry; omitting kind and the map because the source supplies no interaction evidence |
| 29 | Notification Badge | omitting kind and the map because the source supplies no interaction evidence; reading 3px as this badge's geometry |
| 30 | Breadcrumb Highlight | keeping YAML `4px` and §4 `0px` as a conflict; omitting kind and the map |
| 31 | Main Nav Item | keeping both text and active records; reading 80px / `#FFE066` as this nav item's geometry |
| 32 | Toggle Switch | reading `9999px` as this toggle's geometry rather than only `tokens.rounded.full: 9999` |
| 33 | Feature Banner | reading 16px as this banner's geometry rather than only `tokens.rounded.lg: 16`; omitting a primitive type because the row is not in the token set; omitting kind and the map |
| 34 | Utility Nav Links | omitting a primitive type because the row is not in the token set; reading 60px / 13px as this bar's geometry |
| 35 | Layout spacing | reading 20px utility padding and 16px button padding as layout measurements rather than as those YAML spacing steps |
| 36 | Layout feature tabs | keeping feature-tab labels and main-nav labels on the rows that name them rather than merging them |
| 37 | Layout whitespace | reading the three whitespace-philosophy sentences as layout rules for the recorded surfaces |
| 38 | Layout measurements | reading 48px / 80px / 176px+ / 60px / 1024-1440px as the layout and touch measurements the source recorded |
| 39 | Content & Locales | reading the source register as this contract's voice rather than as a separately published KB Pay microcopy guide |
| 40 | Named gaps | calling the list a set of named gaps rather than a domain inventory; treating the items as unnamed values rather than permissions to invent |

## Proof notes

- conflicts: []
- components_harvested: true
- tokens.source: live-extract
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Narrative context (2020 launch, 2022 consolidation, Yeongdeungpo, star-b carry-through, 듀얼홈, "국민", closing national-infrastructure sentence) does not by itself supply interface tokens
- The source comment records interpretive claims such as "one action, one color" and the "national infrastructure product" framing as editorial readings, not directly sourced KB statements
