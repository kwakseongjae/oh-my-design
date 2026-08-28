# Hyundai Card provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, evidence grading, and omission record for the Core v2 migration of `web/references/hyundaicard/DESIGN.md`. The canonical source remains that file until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | hyundaicard |
| name | Hyundai Card |
| country | KR |
| category | fintech |
| homepage | `https://www.hyundaicard.com` |
| primary_color | `#000000` |
| logo.type | favicon |
| logo.slug | `https://newsroom.hyundaicard.com/images/favicon.ico` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | Hyundai Card Design Library |
| ds.url | `https://newsroom.hyundaicard.com/front/board/Hyundai-Card-Design-Library?country=en` |
| ds.type | brand |
| ds.description | A Hyundai Card cultural space, not a public component design-system specification. |

**Logo decision.** The catalog logo entry is `type: favicon`, `slug` the newsroom favicon URL. That catalog field is kept here and is also named in portable Assets. This file does not treat it as a product-home hosted brand file.

**Token note, quoted from the source YAML:**

> Current product home and corporate-information surfaces are separate from DIVE, marketing, and unobserved interaction states.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none.

The source footer's producer string: Verified 2026-07-13.

## Sibling verification file (E2)

`web/references/hyundaicard/.verification.md` was read and **adopted as evidence grading only**. Confirmed with `find web/references/hyundaicard -type f`, because a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact.

**Method, quoted from the sibling:** supplied Playwright computed-style / FontFaceSet / `@font-face` evidence; no browser recapture was run. Sources: product home `https://www.hyundaicard.com/index.jsp` and the two corporate-information routes.

### Sibling-only values — held here, not promoted into the portable body

| Value | Sibling record | Why it stays here |
|---|---|---|
| product detail link `16px / 700` | `home::[data-omd-capture="54"/"63"/"72"/"76"]` | Source body records the product-link hex, not this weight/size pairing as a type role. |
| corporate link `13px / 400` | `surface-2`/`surface-3` `.btn_type04` | Source body records the corporate-link hex, not this size/weight pairing. |
| outline action height `46px` | `surface-2::[data-omd-capture="11"]` / `surface-3::[data-omd-capture="12"]` | Source §4 records padding `0px 29px` and font `16px / 400`, not a 46px height. |
| class names `.btn_dep2`, `.card_link`, `.btn_type03`, `.btn_type04` | Raw samples | Capture selectors. Not token-set keys. |
| `rgb(0,0,0)`, `rgb(255,255,255)`, `rgb(0,112,240)`, `rgb(30,117,214)` | Raw samples | RGB spellings of hex values the source already records. |
| 4 component types, 57 default variants, overall coverage score 71 | Raw bundle summary | Collector score. Not a portable contract value. |
| 45 Hyundai Card-hosted `YouandiNewKrTitle` font-file URLs | Font evidence | Source names the hosted `YouandiNewKrTitle` files, not the 45 count. |
| 28 declared source URLs for `Spoqa Han Sans Neo` | Font evidence | Source names the family as declared-only, not the 28 count. |

These sibling-only strings are named as sibling-only. This file does not assert that they are absent from itself.

## Raw samples (from the sibling)

- `home::h2` — `YouandiNewKr`, `rgb(0,0,0)`, 40px / 600 / 52px; four visible observations.
- `home::[data-omd-capture="1"–"7"]` (`.btn_dep2`) — transparent, `rgb(0,0,0)`, 0px radius, padding `0px 20px`, `YouandiNewKr`, 18px / 500 / 26px.
- `home::[data-omd-capture="55"–"84"]` (`.card_link`) — transparent, `rgb(0,0,0)`, 0px border/radius, platform system stack, 16px / 400.
- `home::[data-omd-capture="54"/"63"/"72"/"76"]` — product detail link `rgb(0,112,240)` = `#0070F0`, 16px / 700.
- `surface-2::h2` and `surface-3::h2` — `YouandiNewKr`, `rgb(255,255,255)`, 54px / 700 / 80px.
- `surface-2::[data-omd-capture="11"]` and `surface-3::[data-omd-capture="12"]` (`.btn_type03`) — transparent, text `rgb(255,255,255)`, border `rgba(255,255,255,0.6)` / 1px, 3px radius, padding `0px 29px`, 16px / 400 / 46px.
- `surface-2`/`surface-3` `.btn_type04` — corporate link `rgb(30,117,214)` = `#1E75D6`, 13px / 400.

## Evidence class

| Domain | Surface | What it establishes | What it does not establish |
|---|---|---|---|
| Product home | `https://www.hyundaicard.com/index.jsp` | Ink, canvas, product link, YouandiNewKr hero/nav, product-card link, nav-inline 20, carousel-control 5, flat shadow | Corporate inverse treatments as product-home defaults |
| Corporate information | the two `/about/` routes | Inverse text, corporate link, 54px hero, 3px outline action, corporate-action-inline 29 | Product-home navigation or card-link geometry |
| Official typeface account | newsroom Youandi / YouandiNew history | 2003 Youandi, card-plate construction, 2021 YouandiNew, variable-font, proprietary corporate use | A public redistribution license or a component design-system specification |
| Official company overview | `https://img.hyundaicard.com/about/common/en/pageView.hc?id=ceabi0201_01` | Technology-company identity; libraries, performance programs, branded spaces, card plates, Youandi | Current CSS values |
| Design Library | newsroom Design Library page | Cultural/design context; `ds.type: brand` | Token or component evidence |
| Token-set | YAML `tokens.source: reconciled` | Machine-token keys and values as the source wrote them | Interaction states; a shared spacing scale |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product | https://www.hyundaicard.com/index.jsp | 2026-07-13 |
| corporate-ceh | corporate-information | https://www.hyundaicard.com/about/ceh/ho/cehho0101_01.hc | 2026-07-13 |
| corporate-ckh | corporate-information | https://www.hyundaicard.com/about/ckh/ho/ckhho0101_01.hc | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| collector-home | product-surface | https://www.hyundaicard.com/index.jsp | 2026-07-13 |
| collector-ceh | product-surface | https://www.hyundaicard.com/about/ceh/ho/cehho0101_01.hc | 2026-07-13 |
| collector-ckh | product-surface | https://www.hyundaicard.com/about/ckh/ho/ckhho0101_01.hc | 2026-07-13 |
| youandi-official | official-doc | https://newsroom.hyundaicard.com/front/board/Hyundai-Card-branding-through-typeface?country=en | 2026-07-13 |

### Tier 1

- https://www.hyundaicard.com/index.jsp (current product home, supplied computed-style capture)
- https://www.hyundaicard.com/about/ceh/ho/cehho0101_01.hc and https://www.hyundaicard.com/about/ckh/ho/ckhho0101_01.hc (current corporate-information routes, supplied capture)
- https://newsroom.hyundaicard.com/front/board/Hyundai-Card-branding-through-typeface?country=en (official Youandi/YouandiNew history and product-use context)
- https://img.hyundaicard.com/about/common/en/pageView.hc?id=ceabi0201_01 (official company overview)
- https://newsroom.hyundaicard.com/front/board/Hyundai-Card-Design-Library?country=en (official cultural/design context; not token evidence)

### Tier 2 (no usable record)

- https://getdesign.md/hyundaicard (attempted; built-in fetch path rejected the direct URL and search yielded no importable record)
- https://styles.refero.design/?q=Hyundai%20Card (attempted; built-in fetch path rejected the direct URL and search yielded no importable record)

No Tier 2 values were promoted.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / collector-home / computed-style / 2026-07-13; `corporate` = corporate-ceh / collector-ceh / computed-style / 2026-07-13; `font` = home / collector-home / computed-style-fontfaceset-source / 2026-07-13.

| claim | surface | portable destination |
|---|---|---|
| tokens.colors.ink `#000000` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.canvas `#ffffff` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.inverse `#ffffff` | corporate-ceh | DESIGN.md Foundations Semantic color |
| tokens.colors.link-product `#0070f0` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.link-corporate `#1e75d6` | corporate-ceh | DESIGN.md Foundations Semantic color |
| tokens.typography.family.sans `YouandiNewKr` | home | DESIGN.md Typography Family |
| tokens.typography.hero.size / weight / lineHeight / use | home | DESIGN.md Type roles |
| tokens.typography.corporate-hero.size / weight / lineHeight / use | corporate-ceh | DESIGN.md Type roles |
| tokens.typography.nav.size / weight / lineHeight / use | home | DESIGN.md Type roles |
| tokens.typography.card-title.size / weight / lineHeight / use | home | DESIGN.md Type roles |
| tokens.spacing.nav-inline `20` | home | DESIGN.md Foundations Spacing · Product-home navigation link |
| tokens.spacing.corporate-action-inline `29` | corporate-ceh | DESIGN.md Foundations Spacing · Corporate-information outline action |
| tokens.rounded.corporate-outline-action `3` | corporate-ceh | DESIGN.md Foundations Shape · Corporate-information outline action |
| tokens.rounded.carousel-control `5` | home | DESIGN.md Foundations Shape |
| tokens.shadow.flat `none` | home | DESIGN.md Foundations Elevation |
| tokens.components.product-card-link.type / fg / font / use | home | DESIGN.md Components & States Product-card link |

## Capture selectors

| Component | Pointer |
|---|---|
| Product-home navigation link | `home::[data-omd-capture="1"–"7"]` |
| Product-card link | `home::[data-omd-capture="55"–"84"]` |
| Corporate-information outline action | `surface-2::[data-omd-capture="11"]`, `surface-3::[data-omd-capture="12"]` |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction expansions: 0; only default component observations promoted
- Uncaptured hover/disabled/loading/error/success treatments are omitted. Destination-link loading/error/success are `not-applicable` for a role reason. State coverage is not claimed complete.
- Official typeface history, company overview, and Design Library are narrative / cultural context, not token sources
- Resolution note from the source footer: prior DIVE-only palette, Noto Sans KR body, 26px heading, 24px/48px pill, category tags, and interaction guidance were removed because this packet did not corroborate them on current product/corporate routes.

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (서비스 맥락 원형; 이름·나이·도시 필드 없음) | Deleted. Service-context archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as role titles, motives, or affiliation labels (D2, D2a). |
| §15 unattributed cubic-bezier curves | None present in the source. Nothing to delete. |
| §9 Agent Prompt Guide — tool-facing prompt sentences | Deleted. Tool-facing copy-paste prompts. Brand constraints they restated (surface-local blues, YouandiNewKr vs platform stack, DIVE / 48px pill / Noto Sans KR) are already in Experience Avoid and Foundations. |

## Derived editorial inventory

Portable `DESIGN.md` carries 24 complete B2a qualifications. This table is 24 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience — Scope ¶1 | Surface boundary: three inspected routes as token surfaces; newsroom / overview / Design Library as named sources that do not supply computed tokens |
| 2 | Experience — Scope ¶2 | Most-recognizable / history-visible / not-uniform-monochrome readings |
| 3 | Experience — Scope ¶3 | Broader-than-one-page / clearest-continuity-thread / not-merely-historical readings; classifying the 2003 / 2021 / technology-company narrative as context that does not supply tokens |
| 4 | Experience — Primary tasks | Selecting the three surface-and-control tasks; they do not come from the persona section |
| 5 | Experience — Audience | Reading the source-named credit-card / culture-and-design groups as the audience |
| 6 | Experience — Distinctive traits | Grouping the six traits |
| 7 | Experience — Principles | The three source principles and their UI implications (toss-form header) |
| 8 | Experience — Application rules | The four Do-list rules and the reasons attached to them |
| 9 | Experience — Avoid | The Don’t-list prohibitions plus the §9 brand constraints, and the reasons inside them |
| 10 | Foundations — Semantic color | Refusing either blue as a universal brand primary; pairing table uppercase beside token-set lowercase; keeping inverse on its own path |
| 11 | Foundations — Semantic color (DIVE omission) | Reading the omitted DIVE tags as a current-token-set boundary rather than a missing DIVE palette |
| 12 | Foundations — Spacing | Keeping `20` and `29` on spacing keys, not radius or type keys |
| 13 | Foundations — Shape | Keeping `3` and `5` as two keys; 0px nav/card radii stay on component records; carousel-control is not a declared component |
| 14 | Foundations — Elevation | Flat default for retained components only; native-app / marketing sentence as an evidence boundary, not a global flat-system claim |
| 15 | Foundations — Motion | Five-kind promotion gate and the refusal to derive motion from flat defaults |
| 16 | Typography — Font evidence | Official product-use / Live computed only-verified-branded-family / System-use fallback / Official distributed / Declared-only / License / Outside-captures classifications |
| 17 | Typography — Family | Fallback prohibition |
| 18 | Typography — Type roles | Keeping unitless token-set line-heights beside §3 px spellings; card-title `500` off product-card-link `400` |
| 19 | Typography — Assets | Favicon as identity pointer; Design Library as cultural context |
| 20 | Components — Capture record | Treating zero observed states as a reason to reinspect, not as a published state token |
| 21 | Components — How applicability is decided | Role-based decision procedure, kind verdicts, applicability verdicts, and reasons |
| 22 | Components — State non-attachment | Reading the three defaults as not attached hover/focus/pressed/disabled/error/loading/success treatments |
| 23 | Layout — Surface split | Hierarchy as heading / nav / card links rather than a card-container recipe; surface-specific compositions; 1440×900 as supplied desktop evidence; YAML spacing/rounded restatements on their own paths |
| 24 | Content — Voice | Precise / design-literate / concrete rather than “luxury”; Do / Don't table as register guidance |
