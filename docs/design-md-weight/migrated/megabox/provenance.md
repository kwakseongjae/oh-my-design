# MEGABOX provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 Core v2 migration of `web/references/megabox/DESIGN.md`. The canonical source remains that file until catalog adoption. This file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | megabox |
| name | MEGABOX |
| display_name_kr | 메가박스 |
| country | KR |
| category | consumer-tech |
| homepage | `https://www.megabox.co.kr/` |
| primary_color | `#503396` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=megabox.co.kr&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| verification_v2.schema | 2 |
| verification_v2.checked | 2026-07-13 |

YAML has no `ds.name` / `ds.url` / `ds.type` field; the absence is recorded, not filled.

Catalog `homepage` `https://www.megabox.co.kr/` is dual: this identity table and portable Experience Scope (E2a). Catalog `primary_color` `#503396` is dual: this identity table and portable Scope / Distinctive / Semantic Primary / movie-list action Text (E2a). Logo `type: favicon` / Google s2 slug is dual: this identity table and portable Typography & Assets (E2a). `components_harvested: true` is this ledger only as a YAML key (A1c). `tokens.source: reconciled` is this ledger; portable Scope restates the token note in the source’s own words.

Token note from source, kept as ledger text:

> Machine tokens are limited to selector-backed public-web values in the supplied three-surface capture. Company, font-asset, and licence sources provide narrative or asset context only unless a claim explicitly cites a product surface.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| source footer **Verified:** | 2026-07-13 |

Conflicts unresolved: none.

## Sibling verification file (E2)

`web/references/megabox/.verification.md` was read and **adopted as evidence grading only**. Confirmed with `find web/references/megabox -type f`, because a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

**Method, quoted from the sibling:** supplied deterministic collector evidence (`artifacts/reference-evidence/megabox.json`) plus built-in web search/open for official context, font distribution, and Tier 2 attempts. No browser capture was rerun and no MCP session was used.

The supplied artifact was captured at `2026-07-13T15:02:11.071Z`. Sibling record: three public product surfaces, coverage score 80, five component types, 26 component variants, one static observed state, zero interaction kinds, and zero interaction records.

### Sibling-only values — held here, not promoted into the portable body

These strings are named as sibling-only. This file does not assert that they are absent from itself.

| Value | Sibling record | Why it stays here |
|---|---|---|
| `home::body` `rgb(68, 68, 68)` text and border; transparent background; 0px radius | Raw sample | Source already writes foreground `#444444` and 15px/400/22.5px. The raw `rgb(68, 68, 68)` sample and the body-as-border observation are sibling grading. |
| Reservation link `surface-2::[data-omd-capture="30"]` fill `rgb(80, 51, 150)` / `#503396`, text `rgb(255, 255, 255)`, 4px radius, **74px × 36px**, NanumBarunGothic **15px/400/36px** | Raw sample | Source body promotes the 36px-high purple reservation **link** (`a.button.purple.bokdBtn`) and `#503396` / on-primary `#ffffff`. Width `74px`, type `15px/400/36px`, and attributing 4px radius to this link are sibling-only. Source 4px is `movie-like-button.radius` and “Compact movie controls use 4px corners”. |
| Movie-list button **72px × 36px**, font **13.0005px/400/34px** | Raw sample `data-omd-capture="29"` | Source body writes height `36px` and font `13.0005px / 400 / NanumBarunGothic`. Width `72px` and line-height `34px` are sibling-only. |
| Theater lookup `home::[data-omd-capture="91"]` transparent background, 1px `rgb(216, 217, 219)` border, **106px × 30px** | Raw sample | Source body writes 30px radius and muted `#666666`. Border `rgb(216, 217, 219)` and size `106px × 30px` are sibling-only. |
| Carousel previous `home::[data-omd-capture="73"]` **16px × 30px** | Raw sample | Source body writes a disabled carousel-arrow with icon-like zero-size text treatment. Pixel box `16px × 30px` is sibling-only. |
| Movie h2 `rgb(34, 34, 34)`; padding `0px 0px 26px` | Raw sample `surface-2::h2` | Source body writes 27.999px/400/30.7989px and `-1px` tracking. Ink `rgb(34, 34, 34)` and padding `0px 0px 26px` are sibling-only. |
| Search input `surface-2::[data-omd-capture="25"]` `#ffffff` background, `#444444` text, 0px radius, `0px 10px` padding, **197px × 34px** | Raw sample | Source body writes `tokens.spacing.search-input-inline: 10` / `10px`. Padding `0px 10px` and size `197px × 34px` are sibling-only. `0px` radius on the search input is consistent with source “zero-radius text and navigation” and is not promoted as a third rounded token. |
| coverage score 80; five component types; 26 component variants | Sibling scope paragraph | Not in the source DESIGN.md body. |
| Artifact timestamp `2026-07-13T15:02:11.071Z` | Sibling | Ledger freshness only. |

## Evidence class

| Domain | Surface | What it establishes | What it does not establish |
|---|---|---|---|
| Public product home | `https://www.megabox.co.kr/` | Computed public-home values, static controls, font loading, disabled carousel element | Authenticated account, mobile, seat, payment, or interaction-flow claims |
| Public movie listing | `https://www.megabox.co.kr/movie` | Computed movie-list colors/type/geometry and the selector-backed HTML `button` token | Generic booking-button semantics for links; hover/focus/pressed states |
| Public booking entry | `https://www.megabox.co.kr/booking` | Public booking-route computed typography and shared header evidence | Completed booking or payment flow |
| Official company introduction | `https://www.megabox.co.kr/megaboxinfo/` | Company history, 2017 BI, mission, core values, official brand narrative | Product CSS, component geometry, or state styling |
| Official recruiting | `https://www.megabox.co.kr/recruit` | Stakeholder and culture context: customer orientation, challenge, and communication | Product CSS, component geometry, or state styling |
| First-party font asset | `https://img.megabox.co.kr/static/pc/font/nanum/NanumBarunGothicSubset.woff` | First-party-hosted asset corroborating loaded NanumBarunGothic | A licence grant or proof for an uncaptured surface |
| Naver Nanum catalogue | `https://hangeul.naver.com/fonts/search?f=nanum` | Identifies 나눔바른고딕 and Ultra Light·Light·Regular·Bold | Megabox product use; that is established only by computed/FontFaceSet evidence |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-product-web | https://www.megabox.co.kr/ | 2026-07-13 |
| surface-2 | public-product-web | https://www.megabox.co.kr/movie | 2026-07-13 |
| surface-3 | public-product-web | https://www.megabox.co.kr/booking | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| product-home | product-surface | https://www.megabox.co.kr/ | 2026-07-13 |
| product-movie | product-surface | https://www.megabox.co.kr/movie | 2026-07-13 |
| product-booking | product-surface | https://www.megabox.co.kr/booking | 2026-07-13 |
| company-introduction | official-doc | https://www.megabox.co.kr/megaboxinfo/ | 2026-07-13 |
| recruiting | official-doc | https://www.megabox.co.kr/recruit | 2026-07-13 |
| nanum-webfont-asset | brand-asset | https://img.megabox.co.kr/static/pc/font/nanum/NanumBarunGothicSubset.woff | 2026-07-13 |
| naver-nanum-catalog | brand-asset | https://hangeul.naver.com/fonts/search?f=nanum | 2026-07-13 |

### Tier 1

- `https://www.megabox.co.kr/` (public product home)
- `https://www.megabox.co.kr/movie` (public movie product surface)
- `https://www.megabox.co.kr/booking` (public booking product surface)
- `https://www.megabox.co.kr/megaboxinfo/` (official company, BI, history, mission, and values)
- `https://www.megabox.co.kr/recruit` (official culture and stakeholder context)
- `https://img.megabox.co.kr/static/pc/font/nanum/NanumBarunGothicSubset.woff` (first-party-hosted font asset)
- `https://hangeul.naver.com/fonts/search?f=nanum` (official Nanum font catalogue)

### Tier 2 (no usable record)

- `https://getdesign.md/megabox` (attempted; built-in web open returned Internal Error)
- `https://styles.refero.design/?q=megabox` (attempted; built-in web open returned Internal Error); built-in search returned no Megabox-specific record on either catalog

## Claim ledger

Claims use YAML anchors from the source.

| claim | surface | method | captured |
|---|---|---|---|
| tokens.colors.primary | surface-2 / product-movie | computed-style | 2026-07-13 |
| tokens.colors.canvas | surface-2 / product-movie | computed-style | 2026-07-13 |
| tokens.colors.foreground | home / product-home | computed-style | 2026-07-13 |
| tokens.colors.muted | home / product-home | computed-style | 2026-07-13 |
| tokens.colors.on-primary | surface-2 / product-movie | computed-style | 2026-07-13 |
| tokens.typography.family.ui | home / product-home | computed-style-and-FontFaceSet | 2026-07-13 |
| tokens.typography.body.size / weight / lineHeight / use | home / product-home | computed-style / selector-provenance | 2026-07-13 |
| tokens.typography.section-title.size / weight / lineHeight / tracking / use | surface-2 / product-movie | computed-style / selector-provenance | 2026-07-13 |
| tokens.spacing.like-button-inline | surface-2 / product-movie | computed-style | 2026-07-13 |
| tokens.spacing.search-input-inline | surface-2 / product-movie | computed-style | 2026-07-13 |
| tokens.rounded.compact-control | surface-2 / product-movie | computed-style | 2026-07-13 |
| tokens.rounded.theater-lookup | home / product-home | computed-style | 2026-07-13 |
| tokens.shadow.none | surface-2 / product-movie | computed-style | 2026-07-13 |
| tokens.components.movie-like-button.* | surface-2 / product-movie | selector-provenance / computed-style / static-selector-and-interaction-summary | 2026-07-13 |

## Capture selectors

| Component / observation | Pointer |
|---|---|
| Movie list action | `surface-2::[data-omd-capture="29"]`, actual `button` |
| Movie reservation link (proof record, not a button token) | `a.button.purple.bokdBtn` (sibling also records `surface-2::[data-omd-capture="30"]`; that capture-id is sibling-only) |
| Theater lookup link (shape proof) | source: home theater lookup link; sibling pointer `home::[data-omd-capture="91"]` is sibling-only |
| Carousel previous control (static disabled) | source: home disabled carousel-arrow; sibling pointer `home::[data-omd-capture="73"]` is sibling-only |

Portable Components names the movie-list action pointer `surface-2::[data-omd-capture="29"]` because that string is in the source YAML `use` field. Sibling-only capture ids stay in this table’s sibling column and are not promoted as portable facts.

## Proof notes

- `verification_v2` schema 2; conflicts: []
- `components_harvested: true`
- `tokens.source: reconciled`; extracted 2026-07-13
- Interaction expansions: 0; `interactionCount: 0`; only default component observations promoted, plus one static disabled carousel-arrow
- Uncaptured hover/focus/pressed/error/empty/loading/success/skeleton/transition treatments are omitted as values. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Named Focus is absent from the source. `focus-visible` rows are applicable with visual treatment omitted; no hex is attached to that row (B1)
- Official history and the 2017 Life Theater BI statement are narrative context, not token sources
- Megabox publishes no first-party design-system documentation in the source (getdesign Internal Error; refero Internal Error). Derived-editorial qualifications therefore close with the toss-form: not Megabox-authored or a separately published UI specification (rulebook v12 B2a 전제 주석). The official introduction is company narrative, not a UI specification.

## Byte-form notes

- YAML lineHeight is already px (`22.5px`, `30.7989px`). Portable Type roles keep that px form; they are not rewritten as unitless ratios (A1a does not apply as a conversion, because the source is not unitless).
- YAML spacing and radius steps are unitless (`like-button-inline: 5`, `search-input-inline: 10`, `compact-control: 4`, `theater-lookup: 30`). Portable Foundations keep those unitless keys beside the source’s `5px` / `10px` / `4px` / `30px` writings. Neither writing replaces the other.
- YAML `tokens.components.movie-like-button.type: button` is preserved as Primitive type `button` (A1b).
- Canvas `#ffffff`, on-primary `#ffffff`, and component Background `#FFFFFF` stay unmerged (A4). YAML `tokens.components.movie-like-button.bg` `#ffffff` is kept beside that source-body `#FFFFFF` writing; the two writings are not collapsed.
- Component border `#EBEBEB` stays a component field, not a general Line token (A4). YAML `tokens.components.movie-like-button.border` `1px solid #ebebeb` is kept beside that source-body `#EBEBEB` writing.
- Font size `27.999` and `13.0005px` stay in that form.

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host dropped content as a fact. This file does not assert that the named kinds are absent from itself.

| Omitted | Boundary | Reason |
|---|---|---|
| Unobserved interaction paints | hover, focus, pressed, error, empty, loading, success, skeleton, transition treatments | Source records `interactionCount: 0`. Values omitted; applicability is not inverted to `not-applicable` (C1). |
| Unsourced motion curves | none in source | Source has no duration, easing, animation, carousel transition, or reduced-motion value. Nothing to delete as a template curve. B3 promotion gate is in portable Foundations. |
| §13 fictional biographies | none in source | Source §13 is stakeholder groups, not synthetic research personas. Groups move to Audience. No name, age, or city existed to drop (D2 n/a as a deletion; D2a n/a). |
| Agent Prompt Guide | no such section | Source §9 is Content & Voice, not a tool-prompt section. No tool command was deleted. |

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -oF 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **26**. This table has **26** rows (E1 1:1). The same 26 lines also carry `not Megabox-authored` and `separately published UI specification`.

| Location | Qualified material |
|---|---|
| Experience — Scope token-surface paragraph (`DESIGN.md` 11) | Three URLs as token surfaces; company/font/licence as narrative unless a claim cites a product surface; `#503396` not a universal filled-CTA; captured layer as 세 개의 데스크톱 공개 웹 경로… not 극장 현장 / 모바일 앱 / 로그인 후 예매 |
| Experience — Scope Life Theater paragraph (`DESIGN.md` 13) | 2017 Life Theater as current expression; seven golden-ratio boxes and 보라 계열 인디고 as official explanation; public-web capture as implementing that story only in a narrow range |
| Experience — Scope §11 narrative paragraph (`DESIGN.md` 15) | Classing 2000–2017 Life Theater narrative and the stated mission as company narrative, not product CSS |
| Experience — Primary tasks (`DESIGN.md` 21) | The step from captured public-web work to “primary tasks”, not from §13 groups |
| Experience — Audience (`DESIGN.md` 30) | Reading the three source groups as audience; keeping them out of primary-tasks; carrying no name/age/city |
| Experience — Distinctive traits (`DESIGN.md` 38) | Classifying the list as Key characteristics restatement; 조용한 정보 밀도 / 서로 다른 밀도의 형태; `interactionCount: 0` / default-enabled movie-list `button` as a capture bound on this list, not a fifth Key characteristic from §1 |
| Experience — Principles (`DESIGN.md` 48) | Three official-value stems plus every *UI implication* |
| Experience — Application rules (`DESIGN.md` 59) | Grouping the Do list as application rules, and their reasons |
| Experience — Avoid (`DESIGN.md` 67) | Don’t list plus the Accessibility extrapolation bound |
| Foundations — Semantic color (`DESIGN.md` 80) | Token-set role pairing; `#503396` not 단일 CTA 규칙; canvas / on-primary / `#FFFFFF` unmerged; YAML `movie-like-button.bg` `#ffffff` beside source-body Background `#FFFFFF`; 보라 계열 인디고와 같은 맥락이지만 CSS hex는 공식 설명이 공급하지 않음 |
| Foundations — Semantic `#EBEBEB` field (`DESIGN.md` 88) | YAML `1px solid #ebebeb` beside source-body `#EBEBEB`; keeping that hex on the control rather than promoting it as a color-role token |
| Foundations — Spacing (`DESIGN.md` 94) | Unitless 5 / 10 kept beside 5px / 10px as route-local, not a global scale |
| Foundations — Shape (`DESIGN.md` 104) | 4 / 30 as two keys; zero-radius common rather than a third token; no universal corner rule |
| Foundations — Elevation (`DESIGN.md` 108) | `none` as this observed control, not a house elevation system |
| Foundations — Motion absence (`DESIGN.md` 112) | Absence as a prohibition on inferring motion from the carousel, not as a Megabox-authored motion specification |
| Typography — Font evidence (`DESIGN.md` 122) | Live computed / Official distributed / System / Declared-only resolution; Roboto System; text-security-disc Declared-only |
| Typography — Family (`DESIGN.md` 134) | NanumBarunGothic as current visible UI family inside public-web scope; source Don’t restated as a prohibition on replacing unobserved type or presenting Roboto / text-security-disc as that family |
| Typography — Type roles form (`DESIGN.md` 147) | Keeping px / decimal line-height and size writings rather than converting them |
| Typography — Assets favicon (`DESIGN.md` 151) | Classing the Google s2 slug as a favicon-service URL, not a captured first-party mark |
| Typography — Assets imagery (`DESIGN.md` 153) | Film/poster imagery as captured surface content, not a reusable media-card token |
| Components — Capture record (`DESIGN.md` 168) | Reservation link as proof-record not a button token; carousel-arrow as static disabled not a reusable pattern; seven-state map by role not by capture completeness |
| Components — proof-record controls (`DESIGN.md` 200) | Reservation link as proof-record geometry not a second button token; theater lookup as `tokens.rounded.theater-lookup` proof without a component token; carousel as static disabled observation without a component token or reusable disabled style |
| Layout & Platforms (`DESIGN.md` 224) | `230px × 450px` / `245px × 352px` as captured geometry not grid/ratio tokens; `1440×900` as supplied viewport not a breakpoint system; control heights as desktop-capture not cross-viewport |
| Content & Locales — official language (`DESIGN.md` 229) | Official language as editorial direction (clear, welcoming, activity-oriented), not a measured UI copy system |
| Content & Locales — voice table (`DESIGN.md` 231) | Voice labels as this reconstruction’s table; Korean lines as editorial illustrations |
| Governance — Named gaps (`DESIGN.md` 277) | Framing the list as source-opened values, not a licence to invent |

## A5a published-copy sweep (source + sibling)

Needles are brand-issued strings and sibling-named measured copy, not UI metadata, font stacks, or third-party catalog names the source excluded.

Extracted from `web/references/megabox/DESIGN.md` (brand-issued or source-quoted): MEGABOX, 메가박스, Life Theater, 공감, 창조, 재미, Empathy, Creation, Fun, 상영 시간 확인하기, 함께 볼 영화 찾아보기, 가까운 극장 보기, 나눔바른고딕, NanumBarunGothic, 씨너스, Cinus, 코엑스, COEX, 보라 계열 인디고, seven golden-ratio boxes / 일곱 개의 황금비율 박스.

Extracted from `.verification.md` as sibling-named copy/identity (not new tokens): MEGABOX/메가박스 identity is already in the source; no additional CTA quotes.

Disposition of every needle is in the migration-log A5a table after grep. `verdict: PASS` there means the compared needles survived, not that every descriptive sentence was copied.
