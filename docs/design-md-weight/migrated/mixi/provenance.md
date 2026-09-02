# MIXI provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/mixi/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | mixi |
| name | MIXI |
| country | JP |
| category | consumer-tech |
| homepage | `https://mixi.co.jp/` |
| primary_color | `#000000` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=mixi.co.jp&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations ink / header and news-label text in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a MIXI-hosted brand file.

Token source from YAML, kept as ledger metadata: `tokens.source: reconciled`, `tokens.extracted: 2026-07-13`.

`tokens.note`, verbatim from the source frontmatter:

> Only selector-backed values from the supplied MIXI corporate-site capture are canonical tokens. Corporate history, product strategy, logo rationale, and design-culture sources provide narrative context only; no unobserved product, marketing, or interaction pattern is inferred.

That note is dual: ledger metadata here, and a capture bound in `DESIGN.md` Scope.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states. Both Tier-2 catalogs returned no usable MIXI record; all selector-backed values are from the supplied corporate capture.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | corporate-home | `https://mixi.co.jp/` | 2026-07-13 |
| about | corporate-about | `https://mixi.co.jp/about/` | 2026-07-13 |
| conduct | corporate-guidelines | `https://mixi.co.jp/about/conductguidelines/` | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-capture | product-surface | `https://mixi.co.jp/` | 2026-07-13 |
| about-capture | product-surface | `https://mixi.co.jp/about/` | 2026-07-13 |
| conduct-capture | product-surface | `https://mixi.co.jp/about/conductguidelines/` | 2026-07-13 |
| about-context | official-doc | `https://mixi.co.jp/en/about/` | 2026-07-13 |
| history-context | official-doc | `https://mixi.co.jp/en/company/history/` | 2026-07-13 |
| design-culture | official-doc | `https://design-note.mixi.co.jp/n/n72743daaf24b` | 2026-07-13 |

### Tier 1 (as listed in the source footer)

- `https://mixi.co.jp/` (captured corporate home)
- `https://mixi.co.jp/about/` (captured corporate about)
- `https://mixi.co.jp/about/conductguidelines/` (captured conduct guidelines)
- `https://mixi.co.jp/en/about/` (official company and brand context)
- `https://mixi.co.jp/en/company/history/` (official history)

### Tier 2 (as listed in the source footer)

- `https://getdesign.md/mixi` (attempted; built-in web open returned no usable record)
- `https://styles.refero.design/?q=mixi` (attempted; built-in web open returned no usable record)

Tier 2 data was not used to establish any token or component value.

### Narrative (not interface tokens)

- Official about: `https://mixi.co.jp/en/about/`
- Official history: `https://mixi.co.jp/en/company/history/`
- MIXI DESIGN activity report: `https://design-note.mixi.co.jp/n/n72743daaf24b`

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-capture / computed-style / 2026-07-13; `about` = about / about-capture / computed-style / 2026-07-13; `conduct` = conduct / conduct-capture / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.canvas | home |
| tokens.colors.ink | home |
| tokens.colors.muted | about |
| tokens.colors.news-red | home |
| tokens.typography.family.ui | home |
| tokens.typography.body.size / weight / lineHeight / use | about |
| tokens.typography.header-navigation.size / weight / lineHeight / use | home |
| tokens.typography.guideline-heading.size / weight / lineHeight / use | conduct |
| tokens.rounded.control | home |
| tokens.rounded.news-image | home |
| tokens.components.header-global-navigation.type / bg / fg / radius / padding / height / font / states / use | home |
| tokens.components.news-category-label.type / bg / fg / border / radius / padding / height / font / use | home |

## Capture selectors

| Component | Pointer |
|---|---|
| Header global navigation | `home::[data-omd-capture=3]` (YAML use) and `home::[data-omd-capture="3"]` (source §4) |
| News category label | `home::div.c-newsCard__info--category` |

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.canvas | home `#ffffff` |
| tokens.colors.ink | home `#000000` |
| tokens.colors.muted | about `#5c5c5c` |
| tokens.colors.news-red | home `#e5004d` |
| tokens.typography.family.ui | Noto Sans JP |
| tokens.typography.body | 15 / 400 / 1.8 — Observed about and conduct-guideline body copy |
| tokens.typography.header-navigation | 13 / 600 / 1.15 — Observed corporate-header global-navigation control |
| tokens.typography.guideline-heading | 35 / 600 / 1.5 — Observed conduct-guideline section heading |
| tokens.rounded.control | 3 |
| tokens.rounded.news-image | 5 |
| tokens.components.header-global-navigation | Observed header global-navigation button at home::[data-omd-capture=3]. |
| tokens.components.news-category-label | Observed news-card category label at home::div.c-newsCard__info--category. |

## Sibling handling (`web/references/mixi/.verification.md`)

The sibling exists — confirmed with `find web/references/mixi -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Checked 2026-07-13. Method: supplied deterministic collector evidence (`artifacts/reference-evidence/mixi.json`) plus first-party and Tier 2 built-in web checks. No browser capture was rerun.
- Artifact captured `2026-07-13T14:58:16.213Z`. Three official surfaces, 30 component variants, four component classes, zero interaction expansions, zero observed state changes, coverage 71.
- `home::[data-omd-capture="3"]` Header global-navigation `button`: transparent background, `rgb(0, 0, 0)` / `#000000` text, 0px radius, 0px padding, 52px × 70px, Noto Sans JP 13px/600/14.95px. Class `c-header__globalNavi--itemInner`.
- `home::[data-omd-capture="1"]` Header hamburger `button`: `rgb(0, 0, 0)` background, 3px radius, `15px 0px 9px` padding, 130px × 70px.
- `home::div.c-newsCard__info--category` News category label: transparent background, `#000000` text, 1px `#000000` border, 3px radius, `4px 9px 5px` padding, 98px × 22px, Noto Sans JP 11px/600/11px.
- `home::div.c-newsCard__colorTag.u-red` News red label: `rgb(229, 0, 77)` / `#e5004d` background, `rgb(255, 255, 255)` text, 2px white border, 5px radius, `3px 0px 4px` padding, 42px × 21px.
- `home::figure.c-newsCard__imgWrap--imgWrap` News image wrapper: transparent background, 5px radius, 120px × 90px.
- `surface-2::p.s-message__left--text` Corporate about copy: Noto Sans JP 15px/400/27px, `rgb(0, 0, 0)` text.
- `surface-2::[data-omd-capture="17"]` About breadcrumb link: `rgb(92, 92, 92)` / `#5c5c5c`, Noto Sans JP 11px/400/15.4px.
- `surface-3::h2.s-guidline__top--title` Conduct-guideline heading: Noto Sans JP 35px/600/52.5px, `rgb(0, 0, 0)` text.
- `mixi-bold` declared with MIXI-hosted `MIXISANS-BOLD.woff` and `.ttf`; `mixi-medium` declared with `MIXISANS-MEDIUM.woff` and `.ttf`.
- News-card rows/links: `a.c-newsCard__inner` and `li.c-newsCard` — do not recast as buttons.
- Official MIXI DESIGN report: Designer Relations activity, 3C (contents, communication, community).
- getdesign / Refero: built-in web open returned an internal safe-open failure; no usable MIXI record.

### Sibling-only strings (ledger here; not promoted into portable `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts.

- Header hamburger `button` at `home::[data-omd-capture="1"]`: black background, 3px radius, `15px 0px 9px` padding, 130px × 70px
- Header navigation width `52px` (source / YAML write height `70px` only)
- News category label width `98px`; news-label line-height `11px` as a sibling computed sample
- News red label treatments beyond YAML `#e5004d` background: `rgb(255, 255, 255)` text, 2px white border, 5px radius, `3px 0px 4px` padding, 42px × 21px
- News image wrapper 120px × 90px
- Breadcrumb type `11px/400/15.4px`
- `MIXISANS-BOLD.woff` / `MIXISANS-MEDIUM.woff` file names
- `c-header__globalNavi--itemInner`; `a.c-newsCard__inner`; `li.c-newsCard`; `c-newsCard__colorTag.u-red`; `c-newsCard__imgWrap--imgWrap`; `s-message__left--text`; `s-guidline__top--title`
- Artifact timestamp `2026-07-13T14:58:16.213Z`
- four component classes
- Designer Relations; 3C as an acronym
- getdesign.md / Refero “internal safe-open failure” wording

Values the sibling shares with the source body (corroboration, not new portable facts): `#000000`, `#ffffff`, `#5c5c5c`, `#e5004d`, 70px header height, 0px header radius/padding, `4px 9px 5px`, 22px label height, 3px label radius, 13px/600/14.95px, 15px/400/27px, 35px/600/52.5px, 11px/600 news-label font, 5px news-image rounding, Noto Sans JP 337 uses, `mixi-bold` / `mixi-medium` declared-only, interactionCount 0, coverage 71, 30 component variants, 1997 Find Job!, 2004 mixi, 2022 MIXI name change.

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 stakeholder groups | Not deleted. The source labels them source-grounded groups, not fictional personas. The three group wordings move to Experience Audience. No named biography is present in the source, so none is re-hosted here (D2, D2a). |
| §9 Agent Prompt Guide — construction prompts | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components / Experience. The §9-only sentence that a product UI, a brand-font specimen, or any interaction state needs new evidence for that exact surface and selector lands on Avoid. |
| §15 cubic-bezier values | None in the source. No unattributed template curve was deleted. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Transparent 70px-high square-cornered black-text header control using Noto Sans JP 13px/600; static default specimen, not a state model — Header global navigation + Capture record. Home news category label as transparent black text with a 1px black border, 3px radius, 4px 9px 5px padding, 22px height, and Noto Sans JP 11px/600 — News category label. White/transparent corporate surfaces with black typography and boundaries; `#e5004d` as a home-news label only — Semantic color + Application rules. Do not generate a product UI, a brand-font specimen, or any interaction state without new evidence for that exact surface and selector — Avoid.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Three corporate routes as this contract's token surfaces; about/history/DESIGN URLs as named sources that do not supply computed tokens; values stay attached |
| Experience Scope ¶2 `:11` | Unusually deliberate / stark editorial black-and-white / restrained rather than a universal product system; red news label retained as a route-local measured news treatment rather than a universal action colour |
| Experience Scope ¶3 `:14` | Founding-and-portfolio narrative as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three recorded surfaces and controls as primary tasks; not from the stakeholder-groups section |
| Audience `:28` | Reading the three source-grounded groups as audience rather than rewriting them as new segment labels |
| Distinctive traits `:36` | Grouping the recorded values as the distinctive layer |
| Principles `:48` | The four numbered items and their UI implications |
| Application rules `:57` | The four Do rules and the reasons attached |
| Avoid `:66` | The Don't prohibitions, including the §9 exact-surface-and-selector sentence, and the reasons inside them |
| Foundations Semantic color `:80` | Role names from the source's labels; catalog `primary_color` beside ink, not a second colors token; same ink hex on header and news-label text/border component paths, not extra colors keys; news-red kept off global CTA/error/action; muted as supporting corporate text only; official red/orange rationale kept separate from selector-backed values; canvas = home logo block and news-label foreground/border context (same role, two observations) |
| Foundations Spacing `:91` | Absence of a `tokens.spacing` map omitted at that field boundary rather than invented from measured shapes |
| Foundations Shape `:103` | `control: 3` and `news-image: 5` unmerged; header `0px` kept as a component writing |
| Foundations Elevation `:107` | Recorded transparent fields / black rules / image framing / whitespace as this capture's elevation contract rather than filling a documented elevation ladder |
| Foundations Motion `:113` | Five-kind promotion gate; refusal of a partial confirmation; source emotion narrative read as not a motion contract |
| Typography Font evidence `:129` | Live-use count as the reason Noto Sans JP is canonical here; refused as a substitute for MONSTER STRIKE, mixi2, or another MIXI service; MIXISANS as declared implementation evidence rather than tokens or specimens; class column `Unresolved in this capture` keeps the source label Unresolved in the resolution cell rather than as a prescriptive placeholder |
| Typography Family `:136` | Fallback prohibition; Noto Sans / system font / MIXISANS refused as the captured corporate-web face |
| Type roles `:140` | YAML unitless ratios kept beside §3 px; YAML `use` beside surface-boundary; `11px` kept on the news-label component rather than as a fourth type role |
| Assets `:152` | Google s2 slug as identity pointer; MIXISANS as declared files rather than specimens |
| Components how-to-read `:165` | Source state contract kept rather than delegated to an unadopted catalog graph; role-based decision procedure; kind and applicability verdicts; badge kind omitted rather than confirmed; generic Focus not treated as focus-visible; not a complete state-coverage claim |
| Header global navigation `:190` | 70px / 13px 600 / 0px as this button's geometry; YAML use beside §4 use; radius `0px` off `tokens.rounded.control: 3`; captured control as a static default specimen rather than a state model |
| News category label `:225` | 3px / 4px 9px 5px / 11px as this label's geometry; trailing 5px padding off `tokens.rounded.news-image: 5`; kind omitted rather than confirmed; observed news-card rows as links/rows rather than button semantics |
| Layout `:234` | 70px / 390px / 22px / 5px as route-local measured shapes of the supplied desktop capture rather than a breakpoint system or a spacing map |
| Content voice `:239` | Purposeful / emotionally literate / concrete register; not a complete product-microcopy guide for every MIXI service |
| Voice samples `:249` | Three illustrative lines rather than official UI copy |
| Named gaps `:283` | Named gaps rather than a domain inventory; unnamed values rather than permissions to invent |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction expansions: 0; only default component observations promoted
- Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Official about, history, and MIXI DESIGN are narrative / culture context, not token sources
