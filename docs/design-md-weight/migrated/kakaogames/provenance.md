# 카카오게임즈 provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kakaogames/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kakaogames |
| name | 카카오게임즈 |
| country | KR |
| category | consumer-tech |
| homepage | `https://www.kakaogames.com/` |
| primary_color | `#000000` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=kakaogames.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here (www host as the catalog field), and the inspected public homepage `https://kakaogames.com/` is the portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations ink / the hero-arrow foreground in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a Kakao Games-hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | public-marketing | `https://kakaogames.com/` | 2026-07-13 |
| error | public-utility | `https://kakaogames.com/error/` | 2026-07-13 |
| company-about | corporate | `https://kakaogames.com/en-us/about/` | 2026-07-13 |
| suit-license | font-license | `https://github.com/sun-typeface/SUIT/blob/main/LICENSE` | 2026-07-13 |

YAML `verification_v2.sources`:

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | `https://kakaogames.com/` | 2026-07-13 |
| error-live | product-surface | `https://kakaogames.com/error/` | 2026-07-13 |
| company-about-doc | official-doc | `https://kakaogames.com/en-us/about/` | 2026-07-13 |
| suit-license | license | `https://github.com/sun-typeface/SUIT/blob/main/LICENSE` | 2026-07-13 |

### Tier 1 (as listed in the source footer)

- `https://kakaogames.com/`
- `https://kakaogames.com/error/`
- `https://kakaogames.com/en-us/about/`
- `https://github.com/sun-typeface/SUIT/blob/main/LICENSE`

### Tier 2

- `https://getdesign.md/kakaogames` — attempted; no usable Kakao Games record returned
- `https://styles.refero.design/?q=kakaogames` — attempted; no usable Kakao Games style record returned

Tier 2 data was not used to establish any token or component value.

## Token note

The source frontmatter has no `tokens.note` field. The YAML `tokens.source` value is `live-extract`. `components_harvested` is `true`. Two component records sit in the token set: `home-game-card` and `home-hero-arrow`.

## Sibling handling (`web/references/kakaogames/.verification.md`)

The sibling exists — confirmed with `find web/references/kakaogames -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-13. Method: supplied deterministic collector evidence (`artifacts/reference-evidence/kakaogames.json`) plus first-party and Tier 2 built-in-web checks. No browser capture was rerun and no MCP was used. Artifact captured `2026-07-13T15:02:24.705Z` with `playwright_cli`. Three captured surfaces, coverage score `65`, 19 component variants, zero observed states, zero interaction kinds, and zero interaction snapshots.
- `home` is `https://kakaogames.com/`; `surface-2` and `surface-3` both resolve to `https://kakaogames.com/error/`. Repeated error-route samples are retained as raw coverage, not counted as a distinct product UI.
- `home::p.title-main.only-pc` — `color rgb(255, 255, 255)`; `background rgba(0, 0, 0, 0)`; `padding 30px 0px 0px`; `font-size 50px`; `font-weight 700`; `line-height 60px`.
- `home::h1.section__title` — `color rgb(0, 0, 0)`; `border-radius 0px`; `padding 0px 0px 28px`; `font-size 34px`; `font-weight 600`.
- `home::div.card` — `color rgb(0, 0, 0)`; `background rgba(0, 0, 0, 0)`; `border-radius 0px`; `padding 0px 0px 40px`; `box-shadow none`; `rect 248px × 437px`.
- `home::[data-omd-capture="1"]` (`.btn-arrow.btn-arrow--prev`) — `color rgb(0, 0, 0)`; `background rgba(255, 255, 255, 0.05)`; `border-radius 0px`; `padding 0px`; `rect 60px × 60px`.
- `home::li.news-box__item` — `color rgb(0, 0, 0)`; `border-radius 4px`; `padding 0px`; `rect 650px × 230px`.
- `home::p.footer-info__item` — `color rgb(137, 137, 137)`; `font-size 14px`; `font-weight 300`; `line-height 19.6px`.
- FontFaceSet: **SUIT Variable** 224 visible computed uses; collector status `loaded` / high confidence, backed by `https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.woff2`.
- Context sources named only in the sibling: `https://kakaogames.com/en-us/news/list/` and `https://webofficial.kakaogames.com/live/official/file/csr/report/2024-kakaogames-esg-Eng.pdf`. Corporate narrative only.

Sibling-only items (transcribed as sibling records; mention here is not portable-body use):

- Artifact timestamp `2026-07-13T15:02:24.705Z`, `playwright_cli`, coverage score `65`
- RGB spellings of hex values already in the source (`rgb(255, 255, 255)`, `rgb(0, 0, 0)`, `rgb(137, 137, 137)`)
- Hero padding `30px 0px 0px`; section-title padding `0px 0px 28px`
- Arrow background `rgba(255, 255, 255, 0.05)`
- `home::li.news-box__item` geometry `650px × 230px`
- Full jsDelivr face URL `https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.woff2` (the source body says only “a matching jsDelivr source URL”)
- News-list and ESG-report URLs
- Evidence-limitation nouns the source body does not name as domains: social, customer-support, developer-console

A `_research.md` file also exists under `web/references/kakaogames/`. It is a CREATE research ledger, not the migration input, and was not used to establish a portable body fact.

## Byte-form notes

- The source frontmatter records hero / section-title / footer line heights as unitless `1.2` / `1` / `1.4`. They are carried in that form in the portable type-role table. Observed px spellings `60px` / `normal` / `19.6px` sit beside them. They are not rewritten as replacements for the ratios (A1a).
- `tokens.spacing.card-bottom: 40` is not `tokens.rounded.news-item: 4`, and it is not a type-role size.
- `tokens.rounded.none: 0` is not `tokens.components.home-game-card.radius: 0` written as a second scale step; both keys are kept and named.
- `tokens.rounded.news-item: 4` has no matching component record in the token set and is not promoted into a news-item component.
- YAML `tokens.components.home-game-card.type: card` and `tokens.components.home-hero-arrow.type: button` are attached only to those two records.
- YAML hex is lowercase. The portable body keeps that form.
- Catalog homepage is `https://www.kakaogames.com/`; inspected live surfaces use `https://kakaogames.com/`. Both host forms are kept on their original fields.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 stakeholder archetypes | whole fictional-biography class | The source labels its three entries as stakeholder archetypes derived from published audience and operating scope, not synthetic research personas. They are not promoted to Audience or to `primary-tasks`, and they are not re-hosted here: no name, motivation, or affiliation classification is restated as an item (D2, D2a). Audience in the portable body keeps only the group-level wording the source records independently of that section: global users, and publishing, development studios, and partnerships. |
| Unsourced motion curves | value boundary | The source preserves no duration, easing, transition property, or animation-state value. No `spec/omd-v0.1.md` example-table curve appears. Nothing was deleted as an unsourced curve because none was present. |

## Claim ledger

Claims use the YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13.

| Claim | Surface |
|---|---|
| `tokens.colors.ink` | home live (source: all three supplied captures) |
| `tokens.colors.hero-on-dark` | home live |
| `tokens.colors.footer-muted` | home live |
| `tokens.typography.family.ui` SUIT Variable | home live (font-face-and-computed-style) |
| `tokens.typography.hero` (size, weight, lineHeight, tracking, use) | home live |
| `tokens.typography.section-title` (size, weight, lineHeight, tracking, use) | home live |
| `tokens.typography.footer` (size, weight, lineHeight, tracking, use) | home live |
| `tokens.spacing.card-bottom` | home live |
| `tokens.rounded.none` / `tokens.rounded.news-item` | home live |
| `tokens.shadow.none` | home live |
| `tokens.components.home-game-card` (type, radius, padding, use) | home live |
| `tokens.components.home-hero-arrow` (type, fg, radius, padding, height, states, use) | home live |
| Published strings 카카오게임즈 / Uniting the World Through Games / Challenge through new experiences / Connection across players and regions / Expansion across genres and platforms / Joyful creation | source §1 / §10 / §11 / §12 |
| Illustrative, not official UI copy: Discover a new world to play together. / Find your next adventure across platforms. / Share the game with players everywhere. | source §10 |
| 2016 Korea founding / offices in Europe, Japan, and other regions / global studio-and-partnership model / no documented separate visual-identity rebrand / closing sentence that this narrative is company context, not proof of any unobserved visual token | source §1 / §11 narrative |

## Capture selectors

| Component | Pointer |
|---|---|
| Homepage game card | `home::div.card` |
| Homepage hero arrow | `home::[data-omd-capture="1"]` (`.btn-arrow.btn-arrow--prev`) |

## Proof notes

- Four named Tier 1 sources, recorded 2026-07-13. The homepage and error route are the computed-token surfaces. The company profile is a corporate narrative source. The SUIT license page is a font-license source, not a computed-token surface.
- `components_harvested: true`; two component records in the source token set (`home-game-card`, `home-hero-arrow`).
- The source records no `focus-visible` string. Uncaptured hover, pressed, focus, disabled, error, and success treatments are omitted as values; they are not turned into `not-applicable` for that reason. Applicability follows control role. State coverage is not claimed complete.
- Kakao Games has no published first-party UI specification in the source. Derived-editorial qualifications therefore close with the toss-form example: not Kakao Games-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- 2016 Korea founding, offices in Europe, Japan, and other regions, the publisher-and-developer operating scope, the global studio-and-partnership model, the absence of a documented separate visual-identity rebrand, the mission “Uniting the World Through Games,” and the source §11 closing sentence — “This narrative is company context, not proof of any unobserved visual token.” — are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## §9 deletion check

§9 Agent Prompt Guide was deleted as tool-facing restatement. Each unique brand constraint it names was checked against the portable body before deletion (A2, A3):

| §9 item | Portable landing |
|---|---|
| observed Kakao Games public web shell, not a game UI | Experience Scope (`DESIGN.md` 9) |
| black `#000000` text | Foundations ink (`DESIGN.md` 76) |
| white `#ffffff` hero text on an existing dark/image field | Foundations hero-on-dark (`DESIGN.md` 77) |
| SUIT Variable | Typography Family (`DESIGN.md` 131) |
| square card geometry | Components game card (`DESIGN.md` 173) |
| no shadow | Foundations elevation (`DESIGN.md` 105) |
| do not generate in-game navigation, combat HUDs, account flows, store states, or interaction variants as though they were captured facts | Experience Avoid (`DESIGN.md` 66) |

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **23**. This table has **23** rows (E1 1:1). The same 23 lines also carry `not Kakao Games-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 (`DESIGN.md` 9) | Three inspected routes as token surfaces; SUIT license page does not supply tokens; public web shell is not a proxy for an unobserved in-game interface |
| Experience — Scope ¶2 (`DESIGN.md` 11) | High-contrast editorial shell rather than product-dashboard language; measured public-marketing and error-surface values kept distinct from unobserved in-game interfaces |
| Experience — Scope ¶3 (`DESIGN.md` 13) | Classifying the 2016 / offices / mission narrative, including the closing company-context-not-token sentence, as context that does not supply tokens |
| Experience — Primary tasks (`DESIGN.md` 19) | Selecting the two surface tasks; they do not come from the persona section |
| Experience — Audience (`DESIGN.md` 27) | Reading the source-named groups as audience, and dropping archetype biographies rather than promoting them |
| Experience — Distinctive traits (`DESIGN.md` 31) | Grouping the six traits |
| Experience — Principles (`DESIGN.md` 42) | Reading official-profile values as implementation principles; every UI implication |
| Experience — Application rules (`DESIGN.md` 51) | Grouping the four Do-list rules |
| Experience — Avoid (`DESIGN.md` 60) | Grouping the Don’t-list and §9 brand constraints |
| Foundations — Semantic color (`DESIGN.md` 74) | Role names for ink / hero-on-dark / footer-muted; refusing to promote `#0000ee` |
| Foundations — Spacing (`DESIGN.md` 90) | Treating `card-bottom: 40` as the only spacing token, not a full scale |
| Foundations — Shape (`DESIGN.md` 101) | Keeping `none: 0` and `news-item: 4` as local recorded values, not a universal radius scale; refusing to promote the news-item radius into a news-item component |
| Foundations — Elevation (`DESIGN.md` 105) | Reading `box-shadow: none` as flat for observed homepage cards and controls only |
| Foundations — Motion (`DESIGN.md` 109) | Omitting motion values and refusing to promote a token from zero-snapshot carousel controls; holding the five-kind promotion gate rather than treating a single official curve as sufficient |
| Typography — Font evidence (`DESIGN.md` 119) | Evidence-class application readings |
| Typography — Family (`DESIGN.md` 132) | Fallback-never-substitute reading |
| Typography — Type roles (`DESIGN.md` 136) | Keeping each role on its homepage selector and YAML `use` string rather than merging them into one type ramp; keeping YAML line heights as unitless ratios rather than a replacement px |
| Typography — Assets (`DESIGN.md` 148) | Catalog-boundary reading of the Google s2 favicon slug; classifying the SUIT license URL as a font-asset license, not a Kakao Games brand asset |
| Components — Capture record (`DESIGN.md` 164) | Applicability procedure, hero-arrow state map, and kind-omission on the static game card |
| Layout & Platforms (`DESIGN.md` 210) | Reading the homepage as promotional hero then content modules rather than an application shell; reading 1440px as capture width rather than a layout breakpoint |
| Content & Locales — voice (`DESIGN.md` 215) | Calling the register global, energetic, and inviting; refusing to treat the mission as an in-game tone guide |
| Content & Locales — samples (`DESIGN.md` 223) | Classifying the three lines as illustrative samples rather than official UI copy |
| Governance — Named gaps (`DESIGN.md` 257) | Reading the list as unnamed values, not as coverage of domains the source never named |
