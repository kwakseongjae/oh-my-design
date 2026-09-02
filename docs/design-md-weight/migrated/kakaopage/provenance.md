# KakaoPage provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kakaopage/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kakaopage |
| name | KakaoPage |
| display_name_kr | 카카오페이지 |
| country | KR |
| category | consumer-tech |
| homepage | `https://page.kakao.com` |
| primary_color | `#ffd618` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=page.kakao.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-22 |
| added | 2026-06-22 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected public homepage `https://page.kakao.com/` is the portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations yellow / the primary CTA in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a KakaoPage-hosted brand file.

**Token note** (source frontmatter, kept here): primary = live content CTA yellow (`#ffd618`); canvas = white; ink = pure black (`#000000`) for all text; surface = `#eeeeee` for content cards; error/best-badge = `#ff3042`.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| added | 2026-06-22 |
| surfaces inspected | 2026-06-22 |
| tokens.extracted | 2026-06-22 |

The source footer records the verification verbatim as **Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | catalog | `https://page.kakao.com/` | 2026-06-22 |
| content-detail | catalog | `https://page.kakao.com/content/57668776` | 2026-06-22 |

### Tier 1 (as listed in the source footer)

- `https://page.kakao.com/`
- `https://page.kakao.com/content/57668776`

### Tier 2

- getdesign.md/kakaopage — not found
- styles.refero.design/?q=kakaopage — not found

Tier 2 data was not used to establish any token or component value. The source names both lookups; they stay as Named gaps of unnamed records, not as new product domains.

## Sibling handling (`web/references/kakaopage/.verification.md`)

The sibling exists — confirmed with `find web/references/kakaopage -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-22. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), goto `https://page.kakao.com` networkidle + goto `https://page.kakao.com/content/57668776` networkidle, wait 8s each.
- body: `font-family: "Pretendard Variable", Pretendard, ...`; `color: rgb(0, 0, 0)` = `#000000`; `background-color: rgb(255, 255, 255)` = `#ffffff`; `font-size: 16px`; `line-height: 22.4px`
- nav header: `background-color: rgb(255, 255, 255)`; height 96px; `font-family: "Pretendard Variable"`; `color: rgb(0, 0, 0)`; `font-size: 16px`
- primary CTA div "첫 화 보기": `background-color: rgb(255, 214, 24)` = `#ffd618`; `color: rgb(34, 34, 34)` = `#222222`; `border-radius: 8px`; height 56px; width 272px; `font-size: 16px`; typography pass: `font-weight: 700` at 12px for inner label
- active main nav tab pill "선택됨, 지금핫한 탭": `background-color: rgb(0, 0, 0)`; `color: rgb(255, 255, 255)`; `border-radius: 100px`; height 36px; `padding: 0px 14px 0px 6px`; `font-size: 16px`
- active section tab pill "선택됨, 홈탭": `background-color: rgb(0, 0, 0)`; `color: rgb(0, 0, 0)`; `border-radius: 16px`; height 32px; `padding: 7px 14px`; `font-size: 16px`
- coin badge "충전": `background-color: rgb(255, 214, 24)` = `#ffd618`; `color: rgb(0, 0, 0)`; `border-radius: 2px`; `padding: 3px 8px`; `font-size: 16px`
- BEST badge: `background-color: rgb(255, 48, 66)` = `#ff3042`; `color: rgb(255, 255, 255)`; `border-radius: 5px`; `padding: 0px 3px`; height 16px; `font-size: 11px`; `font-weight: 700`
- content card: `background-color: rgb(238, 238, 238)` = `#eeeeee`; `border-radius: 12px`; height 284px; width ~152px
- skeleton card: `background-color: rgba(153, 153, 153, 0.15)`; `border-radius: 8px`; height 274px; width 152px
- comment/interaction chip: `background-color: rgba(0, 0, 0, 0.05)`; `border-radius: 8px`; height 28px
- error/back CTA "홈으로 가기": `background-color: rgb(0, 0, 0)`; `color: rgb(255, 255, 255)`; `border-radius: 100px`; height 54px; `padding: 0px 20px`; `font-weight: 700`; `font-size: 16px`
- content title "마법학교 마법사로 살아가는 법": `font-size: 21px`; `font-weight: 700`; `line-height: 26px`; `color: rgb(0, 0, 0)`
- episode date "21.08.17": `font-size: 11px`; `font-weight: 400`; `color: rgb(102, 102, 102)` = `#666666`; `line-height: 16px`
- bgFreq (homepage): rgba(153,153,153,0.15)×131, rgb(255,255,255)×19, rgb(0,0,0)×5, rgb(238,238,238)×2, rgb(255,214,24)×1
- fgFreq (homepage): rgb(0,0,0)×1209, rgb(255,255,255)×44, rgb(102,102,102)×30, rgb(153,153,153)×20

Sibling-only items (transcribed as sibling records; mention here is not portable-body use):

- CTA width `272px`
- Main-nav padding `0px 14px 0px 6px` (source YAML writes `0px 14px`)
- Section-tab computed `color: rgb(0, 0, 0)` against the source body white-text record
- Content-card height `284px`
- BEST badge height `16px`
- Inspected title 마법학교 마법사로 살아가는 법
- Episode date `21.08.17`
- CTA outer `font-size: 16px` against the source inner-label `12px`
- bgFreq / fgFreq tallies
- Evidence-limitation nouns the source body does not name as domains: getdesign / refero are source-named lookups, already in Named gaps

A `_promo.json` file also exists under `web/references/kakaopage/`. It is not the migration input and was not used to establish a portable body fact.

## Byte-form notes

- The source frontmatter records type-role line heights as unitless `1.24` / `1.40` / `1.38` / `1.43` / `1.38` / `1.33` / `1.33` / `1.45` / `1.45`. They are carried in that form in the portable type-role table. Observed px spellings sit beside them. They are not rewritten as replacements for the ratios (A1a).
- `tokens.spacing.base: 16` is not `tokens.rounded.pill: 16`, and it is not a type-role size.
- `tokens.spacing.md: 14` is not the section-tab padding `7px 14px`.
- `tokens.spacing.lg: 20` is not the Back/Error CTA padding `0px 20px`.
- `tokens.rounded.full: 100` is not the component `100px` writings on the back CTA and the main-nav pill.
- `tokens.colors.canvas` and `tokens.colors.on-error` both write `#ffffff`. They stay two keys.
- `tokens.colors.ink-dark` and `tokens.colors.on-primary` both write `#222222`. They stay two keys.
- `tokens.components.card-skeleton.bg` is `#eeeeee`; the live fill `rgba(153,153,153,0.15)` sits beside it. They stay two writings.
- YAML `type` values are attached only to the eleven records that carry them: button 2, tab 2, card 2, badge 4, input 1.
- YAML hex is lowercase. The portable body keeps that form.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 fictional archetypes | whole fictional-biography class | The source labels its three entries as fictional archetypes informed by publicly observable KakaoPage user segments, not individual people. They are not promoted to Audience or to `primary-tasks`, and they are not re-hosted here: no name, age, city, motivation, or affiliation classification is restated as an item (D2, D2a). Audience in the portable body keeps only the group-level wording the source records independently of that section: Korean webtoon and web-novel readers. |
| Unsourced motion curves | value boundary | The source lists `cubic-bezier(0.0, 0.0, 0.2, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, and `cubic-bezier(0.4, 0.0, 0.2, 1)`. Those values match the `spec/omd-v0.1.md` example-table re-injection path and are not traceable to KakaoPage-computed samples. Durations, easing roles, motion rules, and reduced-motion stay. The three curve values are omitted at the value boundary. |

## Claim ledger

Claims use the YAML anchors from the source: `home` = page.kakao.com / computed-style / 2026-06-22; `content-detail` = page.kakao.com/content/57668776 / computed-style / 2026-06-22.

| Claim | Surface |
|---|---|
| `tokens.colors.primary` `#ffd618` | content-detail live (CTA); home live (충전 badge) |
| `tokens.colors.ink` `#000000` | home live + content-detail live |
| `tokens.colors.ink-dark` / `tokens.colors.on-primary` `#222222` | content-detail live (CTA label) |
| `tokens.colors.canvas` `#ffffff` | home live + content-detail live |
| `tokens.colors.surface` `#eeeeee` | home live + content-detail live |
| `tokens.colors.muted` `#666666` | content-detail live (episode date) |
| `tokens.colors.tertiary` `#999999` | home live (search placeholder) |
| `tokens.colors.error` `#ff3042` | content-detail live (BEST badge) |
| `tokens.colors.on-error` `#ffffff` | content-detail live (BEST badge text) |
| `tokens.typography.family.display` Pretendard Variable / `tokens.typography.family.body` Pretendard | home live + content-detail live |
| `tokens.typography.content-title` / `body` / `tab-active` / `list-item` / `sub-label` / `caption` / `cta-label` / `date` / `badge` | home live + content-detail live (roles as the source assigns them) |
| `tokens.spacing` xs 3 / sm 7 / md 14 / base 16 / lg 20 / xl 32 / section 48 | home live + content-detail live |
| `tokens.rounded` xs 2 / sm 5 / md 8 / lg 12 / pill 16 / full 100 | home live + content-detail live |
| `tokens.shadow.none` | home live + content-detail live |
| `tokens.components.button-primary` | content-detail live |
| `tokens.components.button-back` | error/empty surface (source §4 / §14) |
| `tokens.components.tab-active-pill` | content-detail live |
| `tokens.components.tab-nav-pill` | home live |
| `tokens.components.card-content` / `card-skeleton` | home live |
| `tokens.components.badge-best` / `badge-free` / `comment-chip` | content-detail live |
| `tokens.components.badge-coin` / `search-input` | home live |
| Published strings 카카오페이지 / 첫 화 보기 / 이어보기 / 홈으로 가기 / 지금핫한 / 실시간 랭킹 / 충전 / 무료 / 제목, 작가를 입력하세요. / 추천 / 웹툰 / 웹소설 / 책 / 요일연재 / 완결추천 / 기다리면 무료 / BEST | source §4 / §10 / YAML use |
| 2013 launch / 기다리면 무료 / Wait for Free / Tapas / Piccoma / 2021 Kakao M / Kakao Page merger / closing sentence that the design is engineered to serve hundreds of distinct visual identities without diluting any of them | source §11 narrative |

## Capture selectors

The source HTML comment records the live inspect, not CSS selectors. Pointers below are the source’s own surface + control names.

| Component | Pointer |
|---|---|
| Primary CTA | content-detail "첫 화 보기" / "이어보기" |
| Back / Error CTA | error/empty "홈으로 가기" |
| Active section tab | content-detail 홈 / 정보 / 소식 |
| Active main nav tab | home 지금핫한 / 실시간 랭킹 |
| Content card / skeleton | home catalog thumbnails |
| BEST / free / comment chip | content-detail episode rows |
| Coin badge / search | home nav header |

## Proof notes

- Two named Tier 1 sources, recorded 2026-06-22. Homepage and content detail are the computed-token surfaces.
- `components_harvested: true`; eleven component records in the source token set.
- The source records no `focus-visible` string. Uncaptured hover and focus-visible treatments are omitted as values; they are not turned into `not-applicable` for that reason. Applicability follows control role. State coverage is not claimed complete.
- KakaoPage has no published first-party UI specification in the source. Derived-editorial qualifications therefore close with the toss-form example: not KakaoPage-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- 2013 launch, 기다리면 무료 / Wait for Free, the patience-not-piracy account, the Kakao Entertainment IP pipeline, Tapas and Piccoma, the 2021 Kakao M / Kakao Page merger, and the source §11 closing sentence — “The design — clean, content-first, IP-respectful — is engineered to serve hundreds of distinct visual identities without diluting any of them.” — are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## §9 deletion check

§9 Agent Prompt Guide was deleted as tool-facing restatement. Each unique brand constraint it names was checked against the portable body before deletion (A2, A3):

| §9 item | Portable landing |
|---|---|
| Primary CTA `#ffd618` | Foundations yellow (`DESIGN.md` 87) + Primary CTA (`DESIGN.md` 250) |
| Ink `#000000` | Foundations ink (`DESIGN.md` 92) |
| Dark Label `#222222` | Foundations ink-dark (`DESIGN.md` 88) |
| Canvas `#ffffff` | Foundations canvas (`DESIGN.md` 93) |
| Card surface `#eeeeee` | Foundations surface (`DESIGN.md` 97) |
| Muted `#666666` | Foundations muted (`DESIGN.md` 102) |
| Rank badge `#ff3042` | Foundations error (`DESIGN.md` 107) |
| Title 21px Pretendard 700 `#000000` | Type roles Content Title (`DESIGN.md` 201) |
| Primary CTA 8px / 56px | Primary CTA (`DESIGN.md` 252–253) |
| Episode row 84px / 14px / 11px / BEST | Layout (`DESIGN.md` 481) + Type roles + BEST badge |
| Category nav active black pill 100px / 36px | Active Main Nav Tab (`DESIGN.md` 330–331) |
| Skeleton 152×274px / rgba / 8px / no pulse | Layout (`DESIGN.md` 477) + Skeleton Card (`DESIGN.md` 360–371) |
| Yellow = one CTA per page | Principles + Application rules (`DESIGN.md` 49 / 57) |
| Hierarchy via weight 400/700 | Type principles (`DESIGN.md` 211) |
| Active selection = black pill | Distinctive traits + Avoid (`DESIGN.md` 37 / 74) |
| No shadows | Elevation + Avoid (`DESIGN.md` 141 / 70) |
| Red only for rank | Principles + Avoid (`DESIGN.md` 50 / 62) |

The example-prompt secondary “Subscribe” as a black outline pill is not a source-observed component (absent from YAML and from §4). It is not promoted. That absence is not written as a new denial in the portable body (D1).

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **23**. This table has **23** rows (E1 1:1). The same 23 lines also carry `not KakaoPage-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 (`DESIGN.md` 9) | Two inspected routes as token surfaces; values attached to the surface that established them |
| Experience — Scope ¶2 (`DESIGN.md` 11) | Constraint-first palette; near-invisible UI frame; cover art as heroes; dark-adjacent without being dark; high-contrast editorial register; yellow unmistakable once per detail page |
| Experience — Scope ¶3 (`DESIGN.md` 13) | Classifying the 2013 / 기다리면 무료 / Tapas / Piccoma / 2021 merger narrative, including the closing identity-without-dilution sentence, as context that does not supply tokens |
| Experience — Primary tasks (`DESIGN.md` 19) | Selecting the four surface tasks; they do not come from the persona section |
| Experience — Audience (`DESIGN.md` 29) | Reading the source-named group as audience, and dropping archetype biographies rather than promoting them |
| Experience — Distinctive traits (`DESIGN.md` 33) | Classifying the list as a restatement of recorded values; grouping the seven traits and the readings inside them |
| Experience — Principles (`DESIGN.md` 45) | Reading the five source principles and every UI implication as implementation principles |
| Experience — Application rules (`DESIGN.md` 55) | Grouping the seven Do-list rules and the reasons attached to them |
| Experience — Avoid (`DESIGN.md` 67) | Grouping the seven Don’t-list prohibitions and the reasons inside them |
| Foundations — Semantic color (`DESIGN.md` 83) | Role names from token-set keys; keep-both on shared hexes; calling yellow derived from Kakao golden-yellow; treating the skeleton ghost fill as the live observation on `tokens.components.card-skeleton` rather than as a `tokens.colors.*` key |
| Foundations — Spacing (`DESIGN.md` 116) | Keeping unitless spacing steps on their own keys rather than a grid; keep-both on 14 / 16 / 20 / 32 / 48 |
| Foundations — Shape (`DESIGN.md` 131) | Keeping six rounded keys; keep-both on `100` vs `100px`, `8` vs skeleton `8px`, `12` vs card `12px` |
| Foundations — Elevation (`DESIGN.md` 141) | Reading the flat treatment as performance-conscious and content-first |
| Foundations — Motion (`DESIGN.md` 145) | Omitting the three untraceable curves; holding durations, roles, rules, and the five-kind promotion gate |
| Typography — Font evidence (`DESIGN.md` 179) | Evidence-class application readings |
| Typography — Family (`DESIGN.md` 193) | Fallback-never-substitute; keeping the two family keys rather than merging them |
| Typography — Type roles (`DESIGN.md` 197) | Keeping each role on its YAML key and `use` string; keeping YAML line heights as unitless ratios |
| Typography — Assets (`DESIGN.md` 215) | Catalog-boundary reading of the Google s2 favicon slug; classifying Pretendard OFL as a font-asset license, not a KakaoPage brand asset; treating cover art as first-party catalog content that must not be replaced with invented decoration |
| Components — Capture record (`DESIGN.md` 240) | Applicability procedure, destination/form state maps, kind-omission on the static content card, and Kind:non-interactive readings on the skeleton, BEST, free-episode, and comment-chip records |
| Layout & Platforms (`DESIGN.md` 483) | Keeping measured chrome on the surface that established it; reading whitespace as the source’s own layout rules rather than a new density system; reading the breakpoint table, touch-target characterizations, and collapsing strategy as the source’s own layout rules rather than a new responsive specification |
| Content & Locales — voice (`DESIGN.md` 515) | Calling the register immersive, fan-fluent, and quietly epic; reading chrome as sparse to the point of near-invisibility |
| Content & Locales — samples (`DESIGN.md` 532) | Classifying the parenthetical glosses as editorial readings of verified live copy |
| Governance — Named gaps (`DESIGN.md` 568) | Reading the list as unnamed values, not as coverage of domains the source never named |
