# K bank provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kbank/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kbank |
| name | K bank |
| country | KR |
| category | fintech |
| homepage | `https://www.kbanknow.com` |
| primary_color | `#0114a7` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=kbanknow.com&sz=256` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and inspected public-web home in `DESIGN.md` §1. The YAML homepage is `https://www.kbanknow.com`. The inspected home surface is `https://www.kbanknow.com/web/web-home/home/main`. Both spellings are kept. Catalog identity `primary_color` `#0114a7` matches `tokens.colors.primary` and is also the portable Primary role. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3 classified as an identity pointer, not hosted brand artwork.

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not a K bank-hosted asset. The catalog identity field is kept here and is classified in the portable document as an identity pointer, not a hosted brand file and not a substitute for the official logo or K identification icon.

No `ds.name` / `ds.url` / `ds.type` fields are in the source YAML. The official resource center is a brand-asset page, not a published UI specification. The portable B2a close uses the toss-form `not K bank-authored or a separately published UI specification`.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |

The source footer records the verification as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-product-web | `https://www.kbanknow.com/web/web-home/home/main` | 2026-07-13 |
| product-index | public-product-web | `https://www.kbanknow.com/web/product/info/list?tab=deposit` | 2026-07-13 |
| product-curious | public-product-web | `https://www.kbanknow.com/web/product/deposit/curious-saving` | 2026-07-13 |
| product-rolling | public-product-web | `https://www.kbanknow.com/web/product/deposit/rolling-farm` | 2026-07-13 |
| product-one-card | public-product-web | `https://www.kbanknow.com/web/product/card/one-card` | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| product-home | product-surface | `https://www.kbanknow.com/web/web-home/home/main` | 2026-07-13 |
| product-index-source | product-surface | `https://www.kbanknow.com/web/product/info/list?tab=deposit` | 2026-07-13 |
| product-curious-source | product-surface | `https://www.kbanknow.com/web/product/deposit/curious-saving` | 2026-07-13 |
| product-rolling-source | product-surface | `https://www.kbanknow.com/web/product/deposit/rolling-farm` | 2026-07-13 |
| product-one-card-source | product-surface | `https://www.kbanknow.com/web/product/card/one-card` | 2026-07-13 |
| brand-resource | brand-asset | `https://brand.kbanknow.com/resource.html` | 2026-07-13 |
| brand-story | official-doc | `https://brand.kbanknow.com/` | 2026-07-13 |
| culture-story | official-doc | `https://blog.kbanknow.com/%EC%BC%80%EB%AF%B8%EC%BD%94%EB%93%9C-1%ED%8E%B8-%EC%BC%80%EB%AF%B8%EC%BD%94%EB%93%9C-%ED%83%84%EC%83%9D-%EA%B8%B0%EB%A1%9D-%EC%9D%91%EC%95%A0%F0%9F%90%A3/` | 2026-07-13 |

### Tier 1

- https://www.kbanknow.com/web/web-home/home/main
- https://www.kbanknow.com/web/product/info/list?tab=deposit
- https://www.kbanknow.com/web/product/deposit/curious-saving
- https://www.kbanknow.com/web/product/deposit/rolling-farm
- https://www.kbanknow.com/web/product/card/one-card
- https://brand.kbanknow.com/resource.html
- https://brand.kbanknow.com/
- https://blog.kbanknow.com/%EC%BC%80%EB%AF%B8%EC%BD%94%EB%93%9C-1%ED%8E%B8-%EC%BC%80%EB%AF%B8%EC%BD%94%EB%93%9C-%ED%83%84%EC%83%9D-%EA%B8%B0%EB%A1%9D-%EC%9D%91%EC%95%A0%F0%9F%90%A3/

### Tier 2 (no usable record)

- `https://getdesign.md/kbank` was attempted with built-in web open and returned an internal error; corresponding built-in web search returned no K bank-specific record.
- `https://styles.refero.design/?q=kbank` was attempted with built-in web open and returned an internal error; corresponding built-in web search returned no K bank-specific record.

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names:

> Product tokens are selector-backed values from the supplied six-route public-web capture. The official resource center corroborates the two blue brand colors and Pretendard K Edition as a brand font, but does not create extra product components or states.

## Sibling handling (`web/references/kbank/.verification.md`)

The sibling exists — confirmed with `find web/references/kbank -type f`. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Machine artifact: `artifacts/reference-evidence/kbank.json`, captured `2026-07-13T12:47:01.730Z` with `playwright_cli`
- Collector coverage: six records, five distinct public product URLs plus a duplicate home snapshot; score 66; four component types; 14 component variants; one observed element state; zero interaction kinds; and zero interaction records
- `home :: body` — background `rgb(255, 255, 255)` / `#ffffff`; text `rgb(0, 0, 0)` / `#000000`
- `home :: [data-omd-capture="3"]` — `oklch(0.571 0.235 268.681)` / derived `#4262ff`
- `home :: [data-omd-capture="18"]` — `oklch(0.343 0.219 264.362)` / derived `#0114a7`
- Pretendard K Edition four first-party WOFF2 URLs under `https://www.kbanknow.com/fonts/` (ExtraLight, Regular, Medium, Bold subsets)
- Official culture named as K bank’s 케미코드 article
- Older `assets/_reference/tokens.json` (captured 2026-05-14) records `#B6F23D`, a 56px CTA, a 12px CTA radius, and a 14px body size from a prior single-route inspect. The source conflict matrix rolled those generalizations back. They stay here.

Sibling-only items (mention, not portable use). This sentence names the field kind so the row can be found; it does not assert that those strings are absent from this file:

- coverage score 66
- four component types / 14 component variants
- `rgb(255, 255, 255)` / `rgb(0, 0, 0)` spellings
- compact-action `oklch(0.571 0.235 268.681)` and primary-action `oklch(0.343 0.219 264.362)` (the source body uses hex for those two actions)
- `https://www.kbanknow.com/fonts/` and ExtraLight / Regular / Medium / Bold subset names
- 케미코드 as the culture-article title
- `#B6F23D`, 56px CTA, 12px CTA radius, 14px body from the older tokens.json
- `artifacts/reference-evidence/kbank.json`
- `playwright_cli` / `2026-07-13T12:47:01.730Z`

Those sibling-only strings are transcribed in the bullet list above. They are not promoted into `DESIGN.md`.

Values the sibling shares with the source body (corroboration, not new portable facts): `#0114a7` / `#0114A7`, `#4262ff` / `#4262FF`, `#ffffff` / `#FFFFFF`, `#000000`, Pretendard K Edition, 58, 181, `-apple-system`, `swiper-icons`, `1365px × 840px`, `1440×900`, `oklch(0.47 0.024 264.308)`, `oklch(1 0 0)`, `oklch(0.301 0.016 264.308)`, `oklch(0.87 0.02 267.27)`, `18.72px`, `interactionCount: 0`.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.secondary | home |
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.typography.family.ui | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.product-display.size / weight / lineHeight / tracking / use | product-curious |
| tokens.spacing.compact-action-inline | home |
| tokens.spacing.wide-action-inline | product-curious |
| tokens.rounded.compact-action | home |
| tokens.rounded.primary-action | product-curious |
| tokens.rounded.selected-tab | product-index |
| tokens.shadow.none | home |
| tokens.components.public-home-shell.type / bg / radius / shadow / use | home |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 service audiences — four groups; the source already leaves names, ages, cities, and affiliation classifications unspecified | Deleted as biographies. No name, age, city, or affiliation classification is re-hosted here (D2, D2a). The four source-named group wordings survive in `DESIGN.md` Primary tasks and Audience because the source calls them source-grounded service audiences, not fictional user profiles. |
| §9 Agent Prompt Guide | Not present in this source. §9 is Content & Voice and lands in Content & Locales. No tool-facing prompt was deleted. |
| Unsourced motion curve | None in the source. No curve was deleted. B3 promotion gate is in `DESIGN.md` Motion. |
| Sibling-only previous/secondary fields (score 66, `#B6F23D`, 56px CTA, 12px CTA radius, ExtraLight/Regular/Medium/Bold URL path, 케미코드 title) | Mentioned in the sibling section above. Not promoted into `DESIGN.md`. |
| YAML `omd`, `verified`, `verification_v2`, `tokens.source` / `extracted`, `components_harvested` | Kept in this ledger (A1c). Not copied into portable top matter. |

## Claim ledger

Claims use YAML anchors from the source: `home` = home / product-home / computed-style / 2026-07-13; `product-index` = product-index / product-index-source / computed-style-and-aria-selected / 2026-07-13; `product-curious` = product-curious / product-curious-source / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.secondary | home |
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.typography.family.ui | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.product-display.size / weight / lineHeight / tracking / use | product-curious |
| tokens.spacing.compact-action-inline | home |
| tokens.spacing.wide-action-inline | product-curious |
| tokens.rounded.compact-action | home |
| tokens.rounded.primary-action | product-curious |
| tokens.rounded.selected-tab | product-index |
| tokens.shadow.none | home |
| tokens.components.public-home-shell.* | home |

## Derived-editorial inventory (B2a, 1:1 with portable complete-form closes)

Each row names one portable sentence that carries the complete close `derived editorial implementation inference` + `not K bank-authored or a separately published UI specification`. Count must match `DESIGN.md`.

| # | Portable site | Judgment named |
|---|---|---|
| 1 | Scope ¶1 | five inspected product routes plus duplicate home as token surfaces; values stay attached; resource center, brand story, and culture writing as context/asset sources that do not create extra product components or states |
| 2 | Scope ¶2 | public-web capture more restrained than the marketing story; white canvas, black chrome, two blue actions, and webfont-with-system-stack mix as that public expression rather than proof of every banking control |
| 3 | Scope narrative | classifying the §11 paragraph — including the closing pair on a bounded web slice and that those routes do not prove protected banking work or the native app — as narrative context that does not by itself supply interface tokens |
| 4 | Primary tasks | selecting the four source-grounded service audiences as primary tasks; classifying them as source-grounded service audiences rather than fictional biographies |
| 5 | Audience | refusing to promote individual personas; reading those source-named groups as this product's audience |
| 6 | Distinctive traits | classifying the list as a restatement of the source Key characteristics; groupings and readings inside the list |
| 7 | Principles | the four source Principles items |
| 8 | Application rules | the three source Do rules and the reasons attached |
| 9 | Avoid | the source Don't prohibitions and the reasons inside them |
| 10 | Semantic color | pairing each hex to its token-set path; taking role names from the source's own labels; keeping official uppercase beside token-set lowercase; keeping `#E0E6F1` / `#EDF1F7` / `#F7F9FD` / `#2848DF` off the promoted set; attaching surfaces from YAML claim anchors rather than from the role name |
| 11 | Spacing | keeping each YAML number on its own key path; keeping `0px 14px` / `0px 28px` on the actions that established them; refusing to promote bundle observations into a global scale |
| 12 | Shape | keeping local radii on their components; keeping `tokens.rounded.compact-action: 8` / `primary-action: 10` / `selected-tab: 0` on their own key paths |
| 13 | Elevation | reading the stack as route-level flatness; keeping a shadow scale off the promoted set |
| 14 | Motion | treating the selected-tab observation as an element-state record rather than a motion token; leaving reduced-motion unnamed |
| 15 | Motion B3 gate | holding the five-kind per-component promotion gate; treating a partial confirmation as insufficient |
| 16 | Font evidence | Pretendard as officially named alternate; official-use designation as brand guidance rather than a license grant; Pretendard K Edition as sole UI-family because computed use and FontFaceSet/source evidence are present; `-apple-system` as system evidence; `swiper-icons` as declared-only; downloadable license unnamed; resource-center font statement as not authorizing rehosting or substitution |
| 17 | Family | fallback prohibition |
| 18 | Type roles | keeping YAML `normal` and `59.4px`; keeping YAML singles and §3 px spellings on separate readings; attaching surfaces from YAML claim anchors; keeping the 18px tab on the deposit index |
| 19 | Type roles sizes | reading 16px / 44px / 18px as the roles named beside them rather than as shared numerals across spacing or another surface's control |
| 20 | Assets icon-library | reading the icon-guide K-position rule as brand-asset guidance rather than a general application icon library; refusing to substitute `swiper-icons` for a K bank text or icon token |
| 21 | Assets favicon | Google favicon slug as an identity pointer rather than hosted brand artwork |
| 22 | Assets logo-visibility | reading the visibility rule as asset guidance rather than evidence for control contrast, accessible names, landmarks, or mobile behavior |
| 23 | Capture record | preserving the source state contract here rather than delegating to an unadopted catalog graph; role-based decision procedure; every interactive-kind verdict; every applicability verdict and reason; refusal to treat the white-on-blue pairing as a contrast or accessibility audit; refusal to treat the map as a complete state-coverage claim |
| 24 | Public compact action | reading 40px / `8px` / `0px 14px` as this action's geometry rather than the primary action or `tokens.spacing.wide-action-inline: 28` |
| 25 | Public primary action | reading 48px / `10px` / `0px 28px` as this action's product-page geometry; keeping the 16px system-stack font on product-curious rather than on the duplicate home 14px Pretendard instance |
| 26 | Product index tab | reading 44px / `0px` / `10px 4px 12px` / `18px / 700` as this tab's geometry rather than another control |
| 27 | Product-index bordered choice | reading 32px / `6px` / `0px 12px` as this choice's geometry rather than a token-set radius |
| 28 | Product-detail full-width text button | reading 60px / `16px 20px` / `18.72px` as this control's geometry; refusing to name an unobserved expansion |
| 29 | Public home shell | reading `1365px × 840px` as this static shell rather than a general card family |
| 30 | Layout viewport | reading `1440×900` as the collector viewport on the named pages rather than as a breakpoint; reading the second home record as a duplicate URL |
| 31 | Layout measurements | reading named heights as surface measurements rather than cross-viewport specifications |
| 32 | Content & Locales | reading the source register as this contract's voice; reading the opening bound that this does not establish copy rules for regulated disclosures, transaction confirmations, eligibility decisions, or errors; rather than as a separately published K bank microcopy guide |
| 33 | Named gaps | calling the list a set of named gaps rather than a domain inventory; treating the items as unnamed values rather than permissions to invent |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction expansions: 0; only default component observations promoted, plus the selected-tab element-state
- Uncaptured hover/pressed/focus/disabled/loading/error/success treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official resource center, brand story, and culture story are context and asset evidence; they do not create extra product components or states
- Narrative context (first internet-only bank, pleasant daily financial life, closing bounded-web-slice sentence) does not by itself supply interface tokens
