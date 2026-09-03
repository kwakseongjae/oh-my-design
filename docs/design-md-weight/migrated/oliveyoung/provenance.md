# Olive Young provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/oliveyoung/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | oliveyoung |
| name | Olive Young |
| display_name_kr | Olive Young (올리브영) |
| country | KR |
| category | ecommerce |
| homepage | `https://www.oliveyoung.co.kr` |
| primary_color | `#82dc28` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=oliveyoung.co.kr&sz=256` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog `primary_color` `#82dc28` is dual: identity here, and Foundations / corporate-brand-green in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not an Olive Young-hosted asset. It is classified in the portable document as an identity pointer, not a hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none.

The source footer records **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| storefront-home | storefront | `https://www.oliveyoung.co.kr/store/main/main.do?oy=0` | 2026-07-13 |
| corporate-home | corporate | `https://corp.oliveyoung.com/ko` | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| storefront-live | product-surface | `https://www.oliveyoung.co.kr/store/main/main.do?oy=0` | 2026-07-13 |
| corporate-live | product-surface | `https://corp.oliveyoung.com/ko` | 2026-07-13 |
| brand-resources | brand-asset | `https://corp.oliveyoung.com/en/company/brand` | 2026-07-13 |
| history-context | official-doc | `https://corp.oliveyoung.com/en/company/history` | 2026-07-13 |
| mission-context | official-doc | `https://corp.oliveyoung.com/en/company/main` | 2026-07-13 |
| vision-context | official-doc | `https://corp.oliveyoung.com/en/company/vision` | 2026-07-13 |

### Tier 1

- `https://www.oliveyoung.co.kr/store/main/main.do?oy=0` (public storefront)
- `https://corp.oliveyoung.com/ko` (public corporate surface)
- `https://corp.oliveyoung.com/en/company/brand` (official brand resources)
- `https://corp.oliveyoung.com/en/company/history` (official history)
- `https://corp.oliveyoung.com/en/company/main` (official mission)
- `https://corp.oliveyoung.com/en/company/vision` (official vision)

### Tier 2 (no usable record)

- `https://getdesign.md/oliveyoung` (attempted through built-in web open; internal error, no usable record)
- `https://styles.refero.design/?q=oliveyoung` (attempted through built-in web open; internal error, no usable record)

### Narrative (not interface tokens)

- Official history: `https://corp.oliveyoung.com/en/company/history`
- Official mission: `https://corp.oliveyoung.com/en/company/main`
- Official vision: `https://corp.oliveyoung.com/en/company/vision`
- Official brand resources: `https://corp.oliveyoung.com/en/company/brand`

## Claim ledger

Claims use YAML anchors from the source: `storefront` = storefront-home / storefront-live / computed-style / 2026-07-13; `corporate` = corporate-home / corporate-live / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.storefront-canvas | storefront |
| tokens.colors.storefront-ink | storefront |
| tokens.colors.storefront-body | storefront |
| tokens.colors.storefront-muted | storefront |
| tokens.colors.storefront-line | storefront |
| tokens.colors.storefront-current | storefront |
| tokens.colors.corporate-brand-green | corporate |
| tokens.typography.family.storefront | storefront |
| tokens.typography.family.corporate | corporate |
| tokens.typography.storefront-body.size / weight / lineHeight / tracking / use | storefront |
| tokens.typography.corporate-display.size / weight / lineHeight / tracking / use | corporate |
| tokens.spacing.search-x | storefront |
| tokens.spacing.search-end | storefront |
| tokens.rounded.outline-control | storefront |
| tokens.rounded.search-field | storefront |
| tokens.rounded.pagination-current | storefront |
| tokens.components.pagination-current.type | storefront |
| tokens.components.pagination-current.bg | storefront |
| tokens.components.pagination-current.fg | storefront |
| tokens.components.pagination-current.radius | storefront |
| tokens.components.pagination-current.font | storefront |
| tokens.components.pagination-current.active | storefront |
| tokens.components.pagination-current.use | storefront |

## Capture selectors

| Component | Pointer |
|---|---|
| Storefront carousel pagination — current item | `home::[data-omd-capture="174"]`; selected markup `home::#slick-slide10` |
| Storefront carousel pagination — other item | `home::[data-omd-capture="175"]` |
| Storefront wishlist control | `home::[data-omd-capture="85"]`, class `btn_zzim jeem` (29 occurrences) |
| Storefront search field | `home::[data-omd-capture="8"]`, `header_search_input` |
| Storefront outline control | `home::[data-omd-capture="66"]`, class `btn` |
| Corporate skip link | `surface-2::[data-omd-capture="0"]`, `btn_skip` |
| Corporate top button (elevation exception only) | named in the source as `btn_top`; sibling selector `surface-2::[data-omd-capture="26"]` |

## Token-set fields (verbatim)

| Key path | Source YAML value |
|---|---|
| tokens.colors.storefront-canvas | `#ffffff` |
| tokens.colors.storefront-ink | `#131518` |
| tokens.colors.storefront-body | `#666666` |
| tokens.colors.storefront-muted | `#888888` |
| tokens.colors.storefront-line | `#ebebeb` |
| tokens.colors.storefront-current | `#2f3030` |
| tokens.colors.corporate-brand-green | `#82dc28` |
| tokens.typography.family.storefront | Montserrat |
| tokens.typography.family.corporate | CJONLYONENew |
| tokens.typography.storefront-body | size 14, weight 400, lineHeight 20, tracking -0.56, use `Storefront home body and navigation text` |
| tokens.typography.corporate-display | size 25.2, weight 700, lineHeight 35.28, tracking 0, use `Corporate home display copy` |
| tokens.spacing.search-x | 14 |
| tokens.spacing.search-end | 10 |
| tokens.rounded.outline-control | 4 |
| tokens.rounded.search-field | 5 |
| tokens.rounded.pagination-current | 12 |
| tokens.components.pagination-current | type `tab`, bg `#2f3030`, fg `#ffffff`, radius 12, font `14px/700/Montserrat`, active `Current carousel pagination item; selected markup observed`, use `24px current item in storefront home carousel pagination` |

## Sibling file

Sibling read (not the migration input): `web/references/oliveyoung/.verification.md`. SHA-256 `7ad95572e310aefd0b69a782144335c0185ea7736a1f000c3c0af906fbce4aa4`. Nothing in it was used to establish a portable body fact that the source body does not already record.

Sibling-only observations kept here, not promoted:

- Bundle timestamp context: captured on 2026-07-13 at 1440×900 (the 1440×900 size is also in the source body).
- Collector totals: `surfaceCount: 2`, `score: 73`, `componentTypes: 5`, `componentVariants: 42`, `observedStates: 1`.
- Raw RGB samples for the same selectors the source already records in hex (`rgb(102, 102, 102)`, `rgb(19, 21, 24)`, `rgb(255, 255, 255)`, `rgb(235, 235, 235)`, `rgb(47, 48, 48)`, `rgb(136, 136, 136)`, `rgb(221, 221, 221)`, `rgb(0, 0, 255)`).
- Skip-link line-height `21.6px` on `surface-2::[data-omd-capture="0"]`.
- `btn_top` extra fields: background `rgb(255, 255, 255)`, border `rgb(0, 0, 0)` `2px`, radius `50%`, size `48px × 48px`, selector `surface-2::[data-omd-capture="26"]`. The source body records only the shadow `0px 10px 15px rgba(0, 0, 0, 0.1)` for that control.
- Font host paths: `https://static.oliveyoung.co.kr/pc-static-root/fonts/` and `https://corp.oliveyoung.com/font/ONLYONE_KR/`; Montserrat Light / Regular / SemiBold files; CJONLYONENew weights 300–800.
- Declared-only `swiper-icons`; OY Greta Sans declared-source count of 480.
- Official brand-resource hex casings `#82DC28` / `#FF7878` (source body writes `#82dc28` / `#ff7878`).
- CJ newsroom URL for the 2025 logo renewal (the source body records the 2025 newsroom announcement without that URL).

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: reconciled
- Interaction expansions: 0; `interactionCount: 0`; only default component observations plus static selected carousel markup (`aria-selected="true"`) are promoted.
- Uncaptured hover/focus/pressed/disabled/loading/error/success/empty/toast/dialog/form-validation treatments are omitted. They are not `not-applicable` solely for that reason. Applicability follows control meaning. State coverage is not claimed complete.
- No published first-party UI specification was found; the B2a example form is used as-is.
- Official history, mission, vision, brand resources, and the 2025 wordmark announcement are narrative or identity context, not storefront-token sources, except where the source DESIGN.md itself records a computed value (`#82dc28` on the corporate home).
- Same-hex / same-number splits in the portable body, kept unmerged: `#ffffff` storefront canvas vs YAML `pagination-current.fg` `#ffffff` (text) vs wishlist Background `#FFFFFF` vs skip-link Text `#FFFFFF`; `#2f3030` vs current-item `#2F3030`; `#ebebeb` vs wishlist `#EBEBEB`; YAML `search-x` 14 vs `storefront-body.size` 14 vs search font 14px; YAML `search-end` 10 vs padding 10px; YAML rounded 4 / 5 / 12 vs those controls' px radii; YAML lineHeight 20 / 35.28 vs table 20px / 35.28px; YAML tracking -0.56 vs -0.56px.
- YAML `tokens.components.pagination-current.type: tab` is the only primitive type in the token set. Other §4 records are labelled `not in the token set`.
- Generic Focus capture is not used as `focus-visible` treatment (B1).

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Two inspected URLs as this contract's token surfaces; Brand Resources / history / mission / vision as named context that does not supply computed interface tokens; the source's own bound that the two surfaces are not one interchangeable UI system |
| Experience Scope `:11` | Characterizations (information-dense white and charcoal retail interface; black-to-gray as a text hierarchy; 2025 wordmark announcement as identity context rather than as a storefront component token) |
| Experience Scope `:13` | Origin-to-renewal narrative (1999 / category shift / lifestyle-platform sentence / 2017 / 2018 / 2019 / 2025 / mission / closing brand-and-business-facts sentence) as brand context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three primary tasks from captured storefront or corporate controls or surfaces; not from the source's persona section |
| Audience `:28` | Dropping the derived stakeholder-group entries rather than promoting them; carrying no affiliation classification or motivation; using only the source wording customers |
| Distinctive traits `:32` | Classifying the list as a restatement of measured values, and the groupings inside it |
| Principles `:43` | Four items; numbered stems resting on first-party brand-essence, core-value, history, and 2025 logo-renewal sentences; every *UI implication* as the source's own editorial reading |
| Application rules `:52` | Five Do rules and the reasons attached to them |
| Application rules `:60` | Keeping the Agent Prompt Guide unique constraint on this page rather than as a tool prompt |
| Avoid `:64` | Four Don'ts and the reasons inside them |
| Avoid `:71` | Keeping the Agent Prompt Guide unique prohibition here rather than as a tool prompt |
| Semantic color `:79` | Pairing each hex to its token-set path; YAML lowercase beside body uppercase; `storefront-current` unmerged from `#2F3030`; `storefront-line` unmerged from `#EBEBEB`; `storefront-ink` not a universal corporate text token; `#82dc28` corporate rather than storefront; Coral Orange not added to `tokens.colors` |
| Semantic color `:89` | Not promoting isolated browser/vendor-like blues, reds, and other local values to a semantic palette |
| Spacing `:98` | Two YAML spacing keys unmerged from type size 14 and from the frequency list; frequency list as a capture-frequency record rather than as a published spacing scale |
| Shape `:108` | Three rounded keys as local control radii rather than as a universal radius scale; `0px` off the rounded map |
| Elevation `:112` | `box-shadow: none` as those observed storefront elements only; `btn_top` shadow as a corporate-surface exception rather than as a shared elevation token |
| Motion `:116` | Recording Slick and Swiper class names without promoting a duration, easing curve, animation name, transition property, or reduced-motion behavior |
| Font evidence `:124` | Evidence-class sorting; Montserrat as the only storefront family token; CJONLYONENew as corporate-surface rather than storefront; `NotoSansCJKkr` as loaded fallback; `Arial` as system-resolved; declared-only faces omitted; substitutes refused |
| Family `:143` | Montserrat as the storefront family and CJONLYONENew as the corporate family; substitutes refused; the two families kept from mixing across surfaces |
| Type roles `:155` | Roles unmerged; YAML `use` verbatim; storefront-body `14` off `search-x` 14; YAML lineHeight and tracking beside table px forms; carousel-pagination 14px/700 row off the YAML typography map |
| Assets `:159` | Google s2 favicon as a catalog identity pointer rather than as an Olive Young-hosted brand file |
| Assets `:161` | Refusing invented brand-color decoration in place of first-party catalog content |
| Capture record `:174` | Applicability note; every interactive-kind and applicability verdict and the reason for either; YAML `Primitive type` only when the token set records that type; five §4 records labelled `not in the token set`; not a complete state-coverage claim; generic Focus not invented as `focus-visible` treatment; recorded control sizes and observed contrast combinations not a conformance audit |
| Wishlist `:244` | Omitting the uncaptured active/selected icon treatment rather than inventing one |
| Outline control `:295` | Not asserting a foreground or reusable button-color token from that sample |
| Skip link `:320` | Classification as corporate accessibility chrome rather than storefront evidence or a general primary-action token |
| Layout `:339` | 1440×900 as the supplied capture size rather than as a breakpoint system; frequency list as a capture-frequency record; 24px and 40px squares as recorded dimensions rather than as a touch-target audit; authenticated-product, documentation, and mobile domains left unresolved rather than filled from corporate marketing or legacy notes |
| Content `:357` | Naming the company language optimistic, practical, and discovery-oriented; reading the storefront capture as short functional labels and dense retail scanning; refusing to treat official wording samples as a complete product microcopy system or as verbatim checkout or error-copy |
| Named gaps `:391` | List as unnamed values rather than as coverage of domains the source never named |

Portable `DESIGN.md` carries 29 complete B2a qualifications. This table is 29 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification."

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| §13 Personas — three derived stakeholder-group entries | Deleted. The source's own persona header states that official sources describe customers generally rather than publishing research-backed personas, and that the entries are derived from the documented service model, not demographic profiles. Group labels, motivations, and affiliation classifications are not re-hosted here (D2, D2a). Audience uses only the source wording customers. |
| §9 Agent Prompt Guide — tool-facing prompt wrapper | Deleted as a tool prompt. Unique constraints were restated rather than dropped (A3): the factual dense Korean beauty-retail storefront moment, and the prohibition on presenting a system fallback, declared-only face, logo color, or unobserved cart interaction as a storefront fact, now on Experience Application rules / Avoid. |
| Legacy H1 `# Olive Young — Design Reference` | Replaced by the Core v2 identity line `# Olive Young Design System`. |
| Legacy footer `**Verified:** … / Tier 1 / Tier 2 / Conflicts unresolved` | Moved to Freshness and Sources above. |
| Source §4 closing note on the previous legacy snapshot (unrecaptured flag palette, inferred product states, product-detail migration account, cart/checkout claims, motion timings, uncorroborated component variants) | Capture-history metadata. Kept here; not a current token. |
| Sibling-only observations listed under Sibling file | Kept in this file. Not promoted into the portable body. |

## Notes on evidence separation

- Storefront-home and corporate-home are separate evidence domains. Every value in the portable body carries its domain. `#82dc28` is corporate brand evidence; Coral Orange `#ff7878` stays an official counterpart that was not a computed token.
- Brand Resources, history, mission, and vision are first-party narrative/identity sources. They do not publish a storefront token specification.
- The sibling's RGB samples, skip-link `21.6px` line-height, `btn_top` extra geometry, font host paths, `swiper-icons`, OY Greta Sans declared-source count, uppercase official hex casings, and CJ newsroom URL stayed in this file. None of them became a structural fact in the portable body.
- Motion has Slick and Swiper class names and no captured duration, easing, or interaction sequence. No motion token is asserted. This file does not claim a B3 five-kind promotion gate in the portable body, because the source does not state one.
