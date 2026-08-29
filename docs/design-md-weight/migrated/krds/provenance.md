# KRDS provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/krds/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | krds |
| name | KRDS |
| country | KR |
| category | government |
| homepage | `https://www.krds.go.kr/html/site/index.html` |
| primary_color | `#256ef4` |
| logo | `type: favicon`, `slug: https://www.krds.go.kr/resources/img/guide/favicon_192.png` |
| omd format (source) | 0.1 |
| verified | 2026-07-11 |
| verification_v2.schema | 2 |
| verification_v2.checked | 2026-07-11 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-11 |
| components_harvested | true |
| ds.name | KRDS — Korea Republic Design System |
| ds.url | `https://www.krds.go.kr/html/site/index.html` |
| ds.type | system |
| ds.description | `행정안전부 주관 범정부 통합 디자인 시스템. Government Blue #256EF4, Pretendard GOV, WCAG/KWCAG 2.2 a11y-first tokens and components.` |
| ds.og_image | `https://www.krds.go.kr/resources/img/guide/KRDS_Open_Graph.png` |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a first-party KRDS-hosted PNG. The Open Graph URL is dual-destination in the same way.

Token note from source, verbatim: `Canonical tokens are limited to official KRDS pages with current live capture or still-fresh 2026-05 official-document evidence. Unreverified card, toggle, tab, toast, and floating-button candidates remain prose-only and are not exposed as machine tokens.`

`ds.type: system` is kept here (A1c). `ds.description`'s `WCAG/KWCAG 2.2` byte form is this identity string; the visible body records KWCAG 2.1 / WCAG 2.1 AA from the source sections. The two writings are not collapsed.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-11 |
| verification_v2.checked | 2026-07-11 |
| tokens.extracted | 2026-07-11 |
| layout + tag official-doc capture | 2026-05-08 |
| rebuilt / deep-pass (source HTML comment) | 2026-05-08 |
| footer **Verified:** | 2026-07-11 (8-surface live recapture + still-fresh layout/tag official evidence) |

Conflicts unresolved: none — the source footer states that unreverified components were excluded from machine tokens rather than overwritten as conflicts.

## Surfaces and sources

YAML `verification_v2.surfaces`:

| id | kind | url | inspected |
|---|---|---|---|
| home | design-system | `https://www.krds.go.kr/html/site/index.html` | 2026-07-11 |
| typography | design-system | `https://www.krds.go.kr/html/site/style/style_03.html` | 2026-07-11 |
| colors | design-system | `https://www.krds.go.kr/html/site/style/style_02.html` | 2026-07-11 |
| buttons | design-system | `https://www.krds.go.kr/html/site/component/component_05_02.html` | 2026-07-11 |
| text-input | design-system | `https://www.krds.go.kr/html/site/component/component_09_03.html` | 2026-07-11 |
| select | design-system | `https://www.krds.go.kr/html/site/component/component_06_03.html` | 2026-07-11 |
| modal | design-system | `https://www.krds.go.kr/html/site/component/component_04_05.html` | 2026-07-11 |
| badges | design-system | `https://www.krds.go.kr/html/site/component/component_04_06.html` | 2026-07-11 |
| layout | design-system | `https://www.krds.go.kr/html/site/style/style_05.html` | 2026-05-08 |
| tag | design-system | `https://www.krds.go.kr/html/site/component/component_06_04.html` | 2026-05-08 |

YAML `verification_v2.sources` use the same URLs with ids `home-live`, `type-doc`, `colors-doc`, `button-doc`, `input-doc`, `select-doc`, `modal-doc`, `badge-doc`, `layout-doc`, `tag-doc`.

### Tier 1 (source footer)

- `https://www.krds.go.kr/html/site/index.html`
- `https://www.krds.go.kr/html/site/style/style_02.html`
- `https://www.krds.go.kr/html/site/style/style_03.html`
- `https://www.krds.go.kr/html/site/style/style_05.html`
- `https://www.krds.go.kr/html/site/component/component_05_02.html`
- `https://www.krds.go.kr/html/site/component/component_09_03.html`
- `https://www.krds.go.kr/html/site/component/component_06_03.html`
- `https://www.krds.go.kr/html/site/component/component_06_04.html`
- `https://www.krds.go.kr/html/site/component/component_04_05.html`
- `https://www.krds.go.kr/html/site/component/component_04_06.html`

Homepage, `ds.url`, and favicon/OG URLs are dual-destination (Experience Scope / Assets + this ledger).

### Tier 2

- `https://getdesign.md/krds` — rendered `No designs found`
- `https://styles.refero.design/?q=KRDS` — no rendered `/style/` result in available path

### Tier 3 (Philosophy, source footer)

행정안전부 보도자료, 대한민국 정책브리핑, Design Compass(KR/EN), TPGi(KWCAG·장차법), AAAtraq(2025 a11y 동향), GOV.UK / USWDS / Singapore GDS 비교 좌표.

- https://designcompass.org/2024/04/17/krds/
- https://designcompass.org/en/2025/01/22/krds-start/
- https://www.heropy.dev/s/68
- https://namu.wiki/w/%EB%B2%94%EC%A0%95%EB%B6%80%20UI/UX%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C
- https://www.tpgi.com/south-koreas-disability-discrimination-act-kiosk-web-mobile-accessibility/
- https://aa.aaatraq.com/news/2025/08/evolving-digital-accessibility-south-korea

Style-ref names in the source footer (`yeogiotte`, `karrot`) are writer-process notes, not KRDS tokens. 한국 공공·민간 정중한 한국어 톤 참조 / 한국 voice 형식 참조.

## Sibling handling (`web/references/krds/.verification.md`)

The sibling exists — confirmed with `find web/references/krds -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Selector naming, `rgb()` byte forms, and coverage scores were not promoted into `DESIGN.md`. The sibling count `1,934` visible uses of Pretendard GOV stays here and is not a portable-body fact.

Its own record, transcribed here:

- Header: Pipeline `spec/verification-pipeline.md` · Skill: `omd:add-reference`. Inspected 2026-07-11. Raw bundle `artifacts/reference-evidence/krds.json`. Packaged-Playwright: 8 surfaces · 25 colors · 3 font candidates · 51 component fingerprints · 6 safe dialog expansions · coverage 94/100. Later hybrid reinspection: 8/8 surfaces, 89 machine variants, coverage 99. Canonical components remain the reconciled 12 without automatic promotion of the 89 raw variants.
- `Pretendard GOV` loaded/high, 1,934 visible uses, FontFace-backed. `swiper-icons` and `VideoJS` declared/unused — not UI typography. Unsupported `SF Mono` was removed; a published or familiar monospace face is not a KRDS live-UI font claim.
- `surface-2::h1` — `rgb(30, 33, 36)` = `#1e2124`; 40px/700/60px; tracking 1px; `Pretendard GOV`.
- `home::[data-omd-capture="5"]` — GNB trigger: `rgb(70, 76, 83)` = `#464c53`; padding `0 16px`; 19px/700/28.5px; 56px high.
- `surface-3::[data-omd-capture="2"]` — color-page setting trigger: `rgb(238, 242, 247)` = `#eef2f7`; 6px radius; 15px/400.
- `surface-7::[data-omd-interaction-capture="dialog-0-5"]` — opened modal: white; border `rgb(177, 184, 190)` = `#b1b8be`; 12px radius; 760×501px; two-layer shadow.
- `surface-7::[data-omd-interaction-capture="dialog-0-3"]` — modal primary: `rgb(37, 110, 244)` = `#256ef4`; white text; 1px border; 6px radius; padding `0 16px`; 48px high; 17px/400.
- `surface-7::[data-omd-interaction-capture="dialog-0-2"]` — modal tertiary: transparent; `rgb(30, 33, 36)` = `#1e2124`; border `rgb(88, 97, 106)` = `#58616a`; 6px radius; 48px high.
- `surface-7::[data-omd-interaction-capture="dialog-0-9"]` — action row padding `16px 40px 40px`; 8px gap; 17px/400/25.5px.
- `open-modal` controls remain buttons; opened `[role=dialog]` and `.modal-content` are the dialog. `lnb-toggle` remains a navigation button, not a boolean toggle. Page-changing tabs excluded; repeated trigger selectors deduplicated.
- getdesign.md/krds returned `No designs found for "krds"` / `No designs found for 'krds'` / `0 DESIGN.md files`.
- Public quality: `verified_v2`; 193/193 claims; 10 indexed surfaces; 10 sources; 0 conflicts; next reverify 2026-10-09. Reference gate 27/27 including live favicon. Fixture precision/recall/F1 1.0/1.0/1.0; exactly 5 interaction kinds.
- 588 CSS colour vars enumerated, 88 base hex values for the 8×11 grid. Home GNB walk: 65 internal links (9 style pages, ~55 component pages across 11 categories).
- Input xlarge right padding 72px for icon (sibling-only detail on that size).
- Size-height scale: 2=16, 3=20, 4=24, 5=32, 6=40, 7=48, 8=56, 9=64, 10=72, 11=80 px. Radius rem forms: xsmall 0.2rem (2px) through max 100rem (1000px).
- GNB style pages named: 디자인 스타일 소개 / 색상 / 타이포그래피 / 형태 / 레이아웃 / 아이콘 / 엘리베이션 / 선명한 화면 모드 / 디자인 토큰.
- Component categories 02–12 as listed in the sibling (아이덴티티 through 모바일).
- Conflict matrix (prior-pass corrections): H1 34px→40/28; input error 1.5px→2px `#DE3412`; disabled bg `#F4F6F8`→`#CDD1D5`; select error `#AB2B36` added; modal radius clarified to 12px; breakpoints 3→4; radius 5→7 steps; primary pressed `#0B50D0` 계열 → `#083891`; basic-pattern URL `pattern/` → `global/`.
- Phase 3: 12 basic-pattern pages + 5 service-pattern pages all HTTP 200. 404: `pattern/pattern_summary.html`, `intro/intro_summary.html`, `intro/intro_01.html`, `main/main_index.html`. Implication recorded in the sibling: KRDS does not publish a numbered design-principles page; §12 retained from mission + 행정안전부 documentation.
- Deterministic acceptance and Web 692/692 / TypeScript green are pipeline receipts, not portable tokens.

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- Homepage-adjacent foundation intros: `색상은 정보 전달과 시각적 경험을 결정하는 중요한 요소다` (style_02); `타이포그래피는 정보를 효과적으로 전달하고 일관된 사용자 경험을 제공하는 데 필수적인 요소이다` (style_03).
- MOIS press full title: 「누구나 쉽게 사용할 수 있는 공공 웹·앱 혁신, '범정부 UI/UX 디자인시스템(KRDS)'으로부터」.
- 정책브리핑 full title: 「누구나 쉽게 이용하는 디지털정부 서비스 구현을 위한 '범정부 디자인시스템' 제공」.
- MOIS English title: `Pan-Government UI/UX Design Systems(KRDS), Transforming Public Websites and Applications`.
- Every `rgb()` byte form, every selector (`surface-2::h1`, `home::[data-omd-capture="5"]`, `krds-form-select`, `[role=dialog]`, `.modal-content`), every frequency/coverage count including `1,934` visible uses, 588 vars, 760×501px modal box, action-row `16px 40px 40px`, xlarge-input 72px right padding, size-height `72`, `SF Mono`, `swiper-icons`, `VideoJS`, `lnb-toggle`.
- Tag `btn-delete` sibling measure `(16px icon, no border)` — kept here; not added to the Tag Use row.
- getdesign phrases `No designs found for "krds"` / `No designs found for 'krds'` / `0 DESIGN.md files`.
- Skill name `omd:add-reference`.
- Next reverify `2026-10-09`.
- Prior-pass retracted measurements named in the source reconstruction note and sibling conflict matrix (not current tokens): H1 `34px·700`; input error `1.5px solid critical red`; disabled bg `#F4F6F8` 계열; disabled text `#9DA5AD` 계열.

Mention of those sibling-only items here is disposition (where they live), not a use of them as portable facts, and this paragraph does not assert that they are absent from this file (E2d).

## Byte-form notes

- YAML colour keys are lowercase (`#256ef4`). Visible tables are uppercase (`#256EF4`). Both writings are in the portable body; neither replaces the other (A1a). `#ffffff` / `#FFFFFF` is canvas (page/card/input), on-primary (text on Primary 50), and harvested-control fill or text depending on the row; those roles stay separate (A4). `#256ef4` is both the `primary` and `brand` YAML keys.
- YAML `primary-deep: #083891` is Primary 70. Visible Brand **Primary Deep** is `#0B50D0` (Primary 60). They stay two records (A4).
- Line-height is unitless `1.5` in YAML and in the portable type table. Sibling computed px (60px, 28.5px, 25.5px) stay here and are not rewritten over the ratio (A1a).
- YAML spacing/radius steps are unitless (`xs: 2` … `xxl: 40`; `sm: 4` … `full: 1000`). The portable body keeps the unitless steps and the px forms. `full: 1000` is not `9999`.
- YAML component font shorthands keep `17px / 400` and `19px / 400`. YAML disabled keeps `bg #cdd1d5 fg #6d7882`. YAML input focus keeps `0 0 0 4px #256ef4 halo`. YAML select error keeps `error border 2px solid #ab2b36`.
- Token-set modal shadow `0 0.2rem 0 0 rgba(0,0,0,0.1), 0 0.4rem 0.8rem 0 rgba(0,0,0,0.1)` and visible `rgba(0,0,0,a1)` / `rgba(0,0,0,a2)` are both kept.
- Focus outline is written `0 0 0 0.4rem #256EF4` and `0 0 0 4px #256EF4`. Both forms stay.
- Primitive types are preserved per harvested component: `button` ×3, `input` ×2, `dialog` ×1, `badge` ×6 (A1b).

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 Personas — five entries | whole section | The source's own italic line labels them fictional reconstructions of publicly named groups, not specific people. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar. Names, ages, and cities are dropped and are deliberately not restated here (D2, D2a). |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |
| Prior-pass H1 `34px·700`, input error `1.5px`, disabled `#F4F6F8` / `#9DA5AD` | superseded values only | The source's reconstruction note and sibling conflict matrix mark these as corrected, not current. Current H1 is 40px/28px; input error is `2px solid #DE3412`; disabled bg is `#CDD1D5`. |
| Exact floating-button box-shadow | value only | The source writes only "약한 box-shadow"; no length/color is supplied. |
| High-contrast and dark-mode hex scales | hex values only | The source names the `--krds-color-high-contrast-*` layer and a token-swap dark mode, not the hexes. |
| Mobile 탭바 / 바텀시트 heights | value only | The source says those heights are defined in the mobile category and does not record them. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Quick Color Reference: `#256EF4`, `#0B50D0`, `#ECF2FE`, `#1E2124`, `#464C53`, `#58616A`, `#B1B8BE`, `#CDD1D5`, `#FFFFFF`, `#F4F5F6`, `#DE3412`, `#228738`, `#0B78CB`, `#FFB114`, `#9E6A00` — all are Foundations semantic-color roles. Example Component Prompts: Primary xlarge `#256EF4` / white / 19px·400 / 8px / 0 24px / 64px / hover `#0B50D0` / pressed `#083891` / 4px focus; required large input white / `#58616A` 1px / 8px / 56px / `#464C53` placeholder / 4px halo / red `*` + `aria-required`; error field `2px solid #DE3412` + helper `#DE3412` 15px·400 + `aria-invalid`; Light Primary panel `#ECF2FE` / 8px / 16px 24px / `#0B50D0` + `#1E2124`; outline Primary badge transparent / `#0B50D0` / `#256EF4` 1px / 4px / 0 8px / 15px·400 / 24px; Tertiary large transparent / `#1E2124` / `#58616A` 1px / 8px / 0 20px / 56px; Select large white / `#58616A` 1px / 6px / 0 48px 0 16px / 19px·400 / 56px / error `2px solid #AB2B36`; Tag large white / `#CDD1D5` 1px / 40px pill / 8px 12px / 17px·400 / 40px / selected `#ECF2FE` + `#256EF4` + `#0B50D0`; Modal medium 560px / `#FFFFFF` / 12px / 40px / drop shadow + black/0.5 fade 400ms — all are Components, Typography, or Foundations entries. Iteration Guide: magic-number first candidate; radius 2/4/6/8/10/12/1000; body 17px/400/`1.5` (not 16px); five sizes 32/40/48/56/64; 4px `#256EF4` focus; shadow limited to modal/dropdown/tooltip; `aria-*` / keyboard / KWCAG 2.1 AA from the token layer; two token layers; motion 400ms / ease-in-out with `prefers-reduced-motion: reduce` instant — all are Foundations, Typography, Experience application rules, or Layout. §9 contributed no value that is absent elsewhere.

## Claim ledger

Claims use the source token-set keys. Surfaces: `colors-doc` = style_02 / 2026-07-11; `type-doc` = style_03 / 2026-07-11; `layout-doc` = style_05 / 2026-05-08; `button-doc` = component_05_02 / 2026-07-11; `input-doc` = component_09_03 / 2026-07-11; `select-doc` = component_06_03 / 2026-07-11; `modal-doc` = component_04_05 / 2026-07-11; `badge-doc` = component_04_06 / 2026-07-11; `tag-doc` = component_06_04 / 2026-05-08.

| claim | surface |
|---|---|
| tokens.colors.* (18 keys) | colors |
| tokens.typography.family.sans | typography |
| tokens.typography.display-large / display-small / heading-* / body-* | typography |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl | layout |
| tokens.rounded.sm / md / lg / full | layout |
| tokens.shadow.focus | buttons |
| tokens.shadow.modal | modal |
| tokens.components.button-primary / button-secondary / button-tertiary | buttons |
| tokens.components.input-text | text-input |
| tokens.components.select | select |
| tokens.components.dialog | modal |
| tokens.components.badge-primary / badge-point / badge-success / badge-danger / badge-warning | badges |
| tokens.components.badge-tag | tag |

## Portable derived-editorial scope

Each row is one complete B2a close in `DESIGN.md` (derived editorial implementation inference / not KRDS-authored / including the published KRDS documentation). Auditor-close measure `grep -o 'including the published KRDS documentation' DESIGN.md | wc -l` = 25.

| # | DESIGN.md location | Legacy source | Qualifier placement |
|---|---|---|---|
| Documentation-versus-adopting-service split | Scope | YAML surfaces + token note | adjacent, same paragraph |
| Atmosphere readings (public-service tool, one action colour, weight held down) | Scope | §1 | adjacent, same paragraph |
| "기본 동작" / "행위의 색" / one-line utility summary / GOV.UK·USWDS·Singapore as comparison coordinates not token sources / official history not a token source | Scope | §1 + §11 | adjacent, same paragraph |
| Naming of the three primary tasks | Primary tasks | homepage CTAs + foundation/component pages | adjacent, section head |
| Audience grouping from captured surfaces + §11 | Audience | captured surfaces, not §13 biographies | adjacent, same paragraph |
| Distinctive-trait selection and naming | Distinctive traits | §1 Key Characteristics | adjacent, section head |
| Five numbered principles and *UI implication* sentences | Principles | §12; reconstruction note that a numbered principles URL is unpublished | adjacent, section head |
| Justifications inside the nine Do rules | Application rules | §7 Do | adjacent, section head |
| Reasons inside the nine Don'ts | Avoid | §7 Don't | adjacent, section head |
| Characterizing phrases on semantic-color roles | Semantic color | §2 | adjacent, section head |
| Keyboard users as first group / focus not a compromise | Focus | §2 Focus | adjacent, same paragraph |
| 8px as standard round; 1000px as pill/circle | Shape | §5 radius | adjacent, after the scale |
| Shadow-philosophy paragraph | Elevation | §6 | adjacent, same paragraph |
| Motion-stance causal reading (no "재미있는" interaction; reduced-motion as 기본 동작) | Motion | §15 | adjacent, same paragraph |
| Adopting-service typography as outside this contract | Font evidence | §3 Unresolved | adjacent, same cell |
| fallback stack is not the brand face | Family | §3 | adjacent, next paragraph |
| Type-rules reading (two weights, 17px default, 1.5 as WCAG 1.4.12) | Type rules | §3 Principles | adjacent, section head |
| Fourteen-row surface state contract as the state contract | Surface state contract | §14 | adjacent, section head |
| Every kind / applicability / reason verdict | How applicability is decided | Core §4.4 rewrite | adjacent, after the procedure |
| Prose-only inventory grouping | Prose-only inventory | YAML token note | adjacent, section head |
| Breakpoint table as declared documentation, not live-width observation of an adopting service | Layout | §5 + §8 | adjacent, after the table |
| Whitespace as civic density rather than premium positioning | Layout | §5 Whitespace Philosophy | adjacent, same paragraph |
| Voice characterization (안내 데스크, 절제) | Content | §10 | adjacent, same paragraph |
| Register table and forbidden-pattern rule as the voice contract | Content | §10 | adjacent, after the table |
| Named-gaps list taken from the source's own unresolved fields | Named gaps | token note + unnamed high-contrast/dark/floating/mobile heights | adjacent, section head |

## Proof notes

- verification_v2 schema 2; conflicts: []
- `ds.type: system` is kept in the Identity table (A1c)
- `components_harvested: true`
- Uncaptured treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history (2024-04 release, 2023 survey quotes, 장차법 / KWCAG 2.1) is narrative context, not a token source
- `focus-visible` occurs 0 times in the source (`grep -o 'focus-visible' web/references/krds/DESIGN.md | wc -l` = 0). The portable body keeps `#256EF4` 4px / `0.4rem` as a generic Focus observation and does not attach it to any `focus-visible` row (B1)
- B3 is held in full in Foundations Motion: computed transition properties, animation name, duration, easing, reduced-motion behavior, and the per-component gate. Recorded motion tokens keep their live `--krds-transition-*` values; the gate applies to additional promotions
- Footer **Style ref** `yeogiotte` / `karrot` is writer-process metadata, not a KRDS token
- Sibling abbreviated modal shadow `0 0.2rem 0 0 rgba a1, 0 0.4rem 0.8rem 0 rgba a2` (no `(0,0,0)`). Portable body keeps the source visible form `rgba(0,0,0,a1)` / `rgba(0,0,0,a2)` and the YAML `0.1` form.

## A5 / A5a

Hand sweep of brand-issued strings (labels, CTAs, headlines, error/empty/success copy, MOIS quotations). Gate `copy-loss` needles are non-Latin runs inside quotations; `compared < candidates` is expected, so this sweep is mandatory.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Brand-issued strings in the source body | 70 distinct | 0 | 0 | All survive in `DESIGN.md` Content & Locales, Components, Experience, or Foundations. |
| Brand-issued strings in the sibling | 5 distinct extra | 0 | 0 | style_02 / style_03 intros and the two MOIS full titles plus the English title survive in this file. |
| `node test-v2/tools/latin-copy-audit.mjs --brand krds` after provenance | 95 candidates | 8 reported | 0 | 3 are §13 fictional-persona fragments (D2). 2 are 404 path names (`pattern_summary`, `foundation_*`). 1 is English meta (`design principles`). 1 is a punctuation-sliced UI-meta fragment (`. Error: border 2px solid`). 1 is the sibling's abbreviated `rgba a1` shadow spelling, transcribed above. |

A5 분모: latin-copy-audit 95 candidates / 8 missing / 0 published-copy missing. Sibling published-copy 5/5 survived in provenance.

## Source quoted Korean runs (A5 ledger)

Non-Latin runs that appear inside quotations in the source. Brand-issued labels already live in `DESIGN.md`. The remainder is source-writer prose (parentheticals, reconstruction notes, philosophy). Transcribed here so the bytes survive. Two §13 fictional-persona fragments are not in this list (D2).

- 가 다른 서체 대비 작아 보이기 때문에 의도적으로
- 가 아닌
- 각 4단계
- 값 선택 후
- 기본 패턴 상세
- 기본 패턴 인덱스
- 는 아니지만
- 단계 텍스트
- 대형 라운드
- 뒤로가기 등
- 드롭다운·툴팁과 공유
- 등 5단계 배경
- 라이브 측정
- 라이브 토큰
- 라이브 페이지에서 측정된
- 를 사용해 입력 폼과 시각 구분
- 를 쓴다
- 마지막 항목
- 모달이 아니므로
- 미감 절제
- 배경 위 텍스트는 검정으로 대비 확보
- 배너만 한정
- 버튼·입력·셀렉트·모달 등
- 버튼·입력·표·페이지네이션
- 보더가 이 컬러
- 본문 등
- 부드러움
- 부서별로 묶자
- 브랜드 문장 패턴
- 브레이크포인트
- 블리드 띠
- 사용성·접근성·인터랙션 가이드·플랫폼 고려사항
- 사이즈 스케일
- 생체·다요소 사용자 다수
- 서비스 패턴 노드별 상태
- 서비스 패턴 상세
- 서비스 패턴 인덱스
- 성능 우선
- 셀렉트는
- 셋 박스
- 스크롤 시 표시
- 시 가시화
- 시민이 같은 시점에 함께 처리하는 일끼리 묶자
- 실제 페이지 카피의 톤을 재구성
- 양식 제출 등 핵심 액션
- 여정 노드 상태
- 옆 동일 위계
- 와 동일
- 와 시각 구분
- 우측 영역에서 펼쳐짐
- 의 업무 구조
- 이 아님
- 이전 4개
- 이전 5단계
- 이전 7행
- 이전의 전자정부 사이트 파편화
- 자유 폭
- 자체 폰트를 가진 기관의 경우
- 적색 배지
- 정부 블루 딥
- 정부 서비스 사용자 중 전정기관 민감성·인지장애 보유자 비율이 일반 사이트보다 높습니다
- 정부 시스템 미수록
- 좁은 페이지
- 좌우 여백 증가
- 체크박스·라디오·링크
- 층위가 많아 보이는
- 컴포넌트 상태
- 콘텐츠 내 탐색
- 태그 필터 칩
- 텍스트 입력
- 텍스트 흐름에 맞춤
- 토큰 기준
- 페이지 제목
- 현재 위치
- 홈 배지
