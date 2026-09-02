# Jobplanet provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/jobplanet/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | jobplanet |
| name | Jobplanet |
| display_name_kr | 잡플래닛 |
| country | KR |
| category | saas |
| homepage | `https://www.jobplanet.co.kr/` |
| primary_color | `#00c362` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=jobplanet.co.kr&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The YAML homepage is `https://www.jobplanet.co.kr/` (no path). The token surfaces the source inspected are `https://www.jobplanet.co.kr/welcome/index` and `https://www.jobplanet.co.kr/companies`. All three spellings are kept. The homepage path is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a Jobplanet-hosted brand file.

Token note from source, kept as ledger metadata: primary = live interactive/CTA green (`#00c362`); neon highlight green (`#00ff91`) is a marker accent; green-line (`#00c274`) an underline/border variant; deep forest (`#003a1c`) a dark-on-light label. Near-shadowless — separation via `#f3f3f4` surface + `#e5e6e9` hairline. Product font Pretendard Variable; tech blog uses IBM Plex Sans.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| Tier 1 live inspect (source footer) | 2026-07-02 |

The source footer records the verification verbatim as **Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 product surfaces + tech blog). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states. Both Tier-2 catalogs returned no Jobplanet data; all values from Tier 1 live inspect.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| welcome | product homepage | `https://www.jobplanet.co.kr/welcome/index` | 2026-07-02 |
| companies | company-search | `https://www.jobplanet.co.kr/companies` | 2026-07-02 |
| techspace | tech blog (editorial type only) | `https://techspace.jobplanet.co.kr/` | 2026-07-02 |
| techspace-product | tech blog inspected route | `https://techspace.jobplanet.co.kr/category/product` | 2026-07-02 |

### Tier 1 (as listed in the source footer)

- `https://www.jobplanet.co.kr/welcome/index`
- `https://www.jobplanet.co.kr/companies`
- `https://techspace.jobplanet.co.kr/`

The HTML comment also names `https://techspace.jobplanet.co.kr/category/product` as the inspected blog route.

### Tier 2

- getdesign.md/jobplanet — NOT LISTED (0 DESIGN.md files — not listed).
- styles.refero.design/?q=jobplanet — no Jobplanet-specific match.

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: live-extract` and `tokens.extracted: 2026-07-02`. That producer string is ledger metadata. The portable body names `live-extract` as the token-set source on the Font evidence Live computed product-web row.

## Sibling handling (`web/references/jobplanet/.verification.md`)

The sibling exists — confirmed with `find web/references/jobplanet -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-02. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), Chrome UA, viewport 1440×900, `goto` domcontentloaded + 3.5s settle, Escape/modal-dismiss pass, then `getComputedStyle` plus a full-DOM frequency scan.
- body: `font-family: "Pretendard Variable", Roboto, "Noto Sans KR"`; `color: rgb(51, 51, 51)` (`#333333`); `font-size: 13px`; `line-height: 19.5px`; `background-color: rgb(243, 243, 244)` (`#f3f3f4`)
- H1 "오늘의 추천": `#333333`; 24px / 700 / 36px; `letter-spacing: normal`
- H2 "커뮤니티 인기글": `#323438`; 24px / 700 / 36px
- Primary CTA "바로가기": `#00c362` / white; 5px; `0px 16px`; 14px / 700; height 40px
- Nav "기업 랭킹" / "커뮤니티" / "채용": `#4b4c50`; 15px / 400; `0px 16px`; height 50px
- Nav "로그인" / "회원가입": `#686a6d`; 15px / 400
- Stat chip "782개의 전∙현직자 리뷰": `#f3f3f4` / `#333333`; 8px; `0px 16px`; 16px / 700; height 48px
- Content story card: white; 12px; `box-shadow: none`; height 300px
- Circular icon button: white; `1px solid #e5e6e9`; `9999px` (computed `3.35544e+07px`); `6px`; height 32px
- Global search "기업, 공고, 콘텐츠 검색": white / `#333333`; 16px; borderless; height 48px
- Interactive green (pagination, footer link "이용약관", inline arrows): `#00c362`; 700
- Neon highlight: `#00ff91`
- Green line: `#00c274`
- Dark-green label: `#003a1c`
- background-color frequency includes sibling-only `rgb(246,251,254)` ×1 and `rgb(249,249,251)` ×1
- border-radius frequency includes sibling-only `30px` ×2
- document.title: "NO.1 기업 정보 플랫폼 | 잡플래닛"
- Tech blog: body `"IBM Plex Sans", "Pretendard Variable"`; sibling-only `color: rgb(9, 9, 11)`; H1 "잡플래닛 테크블로그" 48px / 600; sibling-only category pill `rgb(244,244,245)`, `6px`, `6px 14px`, `14px / 600`
- getdesign.md: "No designs found for 'jobplanet'" / "jobplanet — 0 DESIGN.md files"; site-chrome hexes `#F5A623`, `#e3971c` are getdesign.md's own, not Jobplanet

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts.

- viewport `1440×900`
- content story card height `300px`
- computed icon radius `3.35544e+07px`
- footer link label `이용약관`
- frequency leftovers `rgb(246,251,254)` and `rgb(249,249,251)`
- border-radius frequency `30px` ×2
- tech-blog ink `rgb(9, 9, 11)`
- tech-blog H1 `잡플래닛 테크블로그`
- tech-blog category pill `rgb(244,244,245)` / `6px` / `6px 14px` / `14px / 600`
- getdesign.md miss page `No designs found for 'jobplanet'`
- getdesign.md chrome `#F5A623` / `#e3971c`
- refero sibling boolean `hasJobplanet: false`

Values the sibling shares with the source body (corroboration, not new portable facts): `#00c362`, `#00ff91`, `#00c274`, `#003a1c`, `#333333`, `#323438`, `#4b4c50`, `#686a6d`, `#a4a6ad`, `#c5c7cc`, `#ffffff`, `#f3f3f4`, `#e5e6e9`, Pretendard Variable, IBM Plex Sans 48px / 600, 5px CTA, 8px chip, 12px card, `9999px` icon, `box-shadow: none`, `NO.1 기업 정보 플랫폼 | 잡플래닛`.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / primary-bright / green-line / green-deep / ink / ink-strong / nav / muted / faint / disabled / canvas / surface / hairline / on-primary | welcome + companies |
| tokens.typography.family.body | welcome + companies |
| tokens.typography.family.blog | techspace |
| tokens.typography.section / card-title / nav / button / input / body | welcome + companies |
| tokens.typography.blog-hero | techspace |
| tokens.spacing.xs / sm / base / md / lg / xl | welcome + companies |
| tokens.rounded.sm / md / lg / full | welcome + companies |
| tokens.shadow.none | welcome + companies |
| tokens.components.button-primary / button-stat-chip / icon-button-round / card-content | welcome |
| tokens.components.search-input | companies |
| tokens.components.nav-link / badge-highlight | welcome + companies |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시·동기·소속 분류 포함) | Deleted. The source's own header labels them fictional archetypes informed by publicly observable segments. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or occupation classifications (D2, D2a). |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed curve; byte-related to `spec/omd-v0.1.md` `ease-exit`. Role name and use kept. |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §9 Agent Prompt Guide — construction prompts | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Primary / neon / green-line / deep-green / ink / ink-strong / nav / muted / faint / disabled / canvas / surface / hairline — Foundations semantic color. Company-review card on `#f3f3f4`, white 12px no-shadow card, 24px / 700 section title, grey stat chip 8px / 48px / 16px/700 / `782개의 전∙현직자 리뷰`, green CTA 5px / 40px / 14px/700 — Components. Top nav white 50px, 15px / 400 / `#4b4c50`, active `#00c362`, login/sign-up `#686a6d` — Top Navigation. Global search white, borderless, 48px, 16px, `#c5c7cc` placeholder, `기업, 공고, 콘텐츠 검색` — Global Search. Neon badge `#00ff91` / `#333333` / 4px / 13px — Neon Highlight. Iteration-guide rules (Pretendard on product, IBM Plex on blog, one action color, no shadows, weight over size, `#333333`, radius ladder, 13px / 1.5) — Application rules + Avoid + Type principles.

## Derived editorial inventory

Portable `DESIGN.md` carries 34 complete B2a qualifications. This table is 34 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Two product URLs as this contract's token surfaces; tech blog on its own editorial-type record; values stay attached |
| 2 | Experience Scope ¶2 | Bright data-dense rather than glossy; flat scannable blocks; confident spring-green; trustworthy-and-functional / compare-at-a-glance / information-architecture-over-spectacle atmosphere |
| 3 | Experience Scope ¶3 | Founding-and-marketplace narrative as context that does not supply interface tokens |
| 4 | Primary tasks | Selecting the four recorded surfaces and labels as primary tasks |
| 5 | Audience | Group-level Korean job-seekers, career-movers, HR/employer-branding teams |
| 6 | Distinctive traits | Grouping the recorded values as the distinctive layer |
| 7 | Principles | The five numbered items and their UI implications |
| 8 | Application rules | The eight Do rules and the reasons attached |
| 9 | Avoid | The eight Don't rules and the reasons inside them |
| 10 | Foundations Semantic color | Role names from token-set keys; canvas / on-primary unmerged; four greens unmerged; reserved-for-action characterizations |
| 11 | Foundations Spacing | Unitless steps unmerged from matching radius keys, type sizes, and padding halves |
| 12 | Foundations Shape | `full: 9999` unmerged from a type size; CTA `5px` kept off the rounded map |
| 13 | Foundations Elevation | Near-shadowless treatment as a deliberate modern-flat choice |
| 14 | Foundations Motion | Unattributed durations, roles, and rules; three untraceable curve values omitted |
| 15 | Typography Official product-use | "No published type token" |
| 16 | Typography Official distributed asset | No exclusive downloadable font package |
| 17 | Typography Declared-only | Fallback stack members are not the brand face |
| 18 | Typography License | Pretendard Variable / IBM Plex Sans without a Jobplanet-issued license notice |
| 19 | Typography Outside these captures | Typography beyond the three inspected surfaces stays outside this contract |
| 20 | Typography Font-evidence wrap | Official-use / live-computed / declared-only classifications |
| 21 | Typography Family | First-face restatement; fallback prohibition; blog-quarantine rule |
| 22 | Type roles | Seven token-set roles kept on their paths; Button / Search Input without an invented line-height; §3 px spellings beside YAML sizes; blog hero off product roles |
| 23 | Type principles | Four type principles as current-surface type rules |
| 24 | Assets | Favicon as identity pointer; no-shadow thumbnails as the source's image behavior |
| 25 | Components how-to-read | Kind and applicability verdicts; not a complete state-coverage claim |
| 26 | Card C4 | Kind and map withheld because the source supplies no interaction evidence |
| 27 | State record | System-level treatments without attaching every row to destination CTAs |
| 28 | Layout whitespace | Flat segmentation, dense-but-breathable packing, one-action-in-one-color rarity |
| 29 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 30 | Content & Locales | Voice characterization, register reading, and tone table |
| 31 | Content voice-sample | Verbatim samples are not a complete product-microcopy guide |
| 32 | Content Forbidden register | Premise-to-register causal |
| 33 | Content & Locales close | Byte-exact published strings; a gloss may sit beside a line and never replaces it |
| 34 | Recorded unresolved | Named values, not a license to invent; list taken from the source's own unresolved fields |

## Proof notes

- verification schema from sibling: Tier 1 playwright getComputedStyle 2026-07-02; conflicts: none
- tokens.source: live-extract
- components_harvested: true
- Uncaptured focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history is narrative context, not a token source. The source's own §11 strings kept as narrative facts: `2014`; `BrainCommerce`; 기업 정보 group; information-asymmetry premise; 전·현직자; Glassdoor positioning; salary / interview / ranking / marketplace / community layers; 기업 회원 서비스; homepage `NO.1 기업 정보 플랫폼`; refusal of glossy chrome; closing sentence that the design is an argument that the data is the product. They do not by themselves supply interface tokens.
- No separately published Jobplanet UI specification is named in the source. Every derived-editorial close uses the toss-form `not Jobplanet-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석)
