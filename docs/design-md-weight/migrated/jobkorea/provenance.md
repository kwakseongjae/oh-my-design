# JobKorea provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/jobkorea/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | jobkorea |
| name | JobKorea |
| country | KR |
| category | consumer-tech |
| homepage | `https://www.jobkorea.co.kr` |
| primary_color | `#083ccc` |
| logo.type | favicon |
| logo.slug | `https://www.jobkorea.co.kr/display/images/favicon.png` |
| omd format (source) | 0.1 |
| verified | 2026-06-03 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected homepage `https://www.jobkorea.co.kr` is the portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / the primary CTA in `DESIGN.md`. The favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with `https://www.jobkorea.co.kr/display/images/favicon.png`. That is an identity pointer, not a separately published brand-asset kit.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-03 |
| surfaces inspected | 2026-06-03 |
| tokens.extracted | 2026-06-09 |

The source footer records the verification verbatim as **Verified:** 2026-06-03. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: the 2023 Sodiumpartners rebrand narrative describes "JOBKOREA Black" as the primary brand color, but the live CSS token system (`data-brand-theme=jk`) maps `--themecolor-brand-primary` to `--color-jkblue-600` (`#083ccc`). The deep blue is used for all primary buttons and interactive states in the current production build; the near-black (`#1a1a1e`) functions as the primary text color, not the brand color. That pair is dual: portable Recorded unresolved in `DESIGN.md`, and this ledger row.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface | `https://www.jobkorea.co.kr` | 2026-06-03 |
| css-main | token-bundle | `https://fe-static-cdn.jobkorea.co.kr/display/web/_next/static/css/ff9addcaa74e70a7.css` | 2026-06-03 |
| css-utility | token-bundle | `https://fe-static-cdn.jobkorea.co.kr/display/web/_next/static/css/fd29aacb4b8b02e0.css` | 2026-06-03 |
| css-component | token-bundle | `https://fe-static-cdn.jobkorea.co.kr/display/web/_next/static/css/fa90ad3a5df82bc3.css` | 2026-06-03 |
| company | official-doc | `https://www.jobkorea.co.kr/company/1517115` | 2026-06-03 |

### Tier 1 (as listed in the source footer)

- `https://www.jobkorea.co.kr` (homepage HTML)
- `https://fe-static-cdn.jobkorea.co.kr/display/web/_next/static/css/ff9addcaa74e70a7.css` (main CSS bundle with full token system)
- `https://fe-static-cdn.jobkorea.co.kr/display/web/_next/static/css/fd29aacb4b8b02e0.css`
- `https://fe-static-cdn.jobkorea.co.kr/display/web/_next/static/css/fa90ad3a5df82bc3.css`
- `https://www.jobkorea.co.kr/company/1517115` (Worxphere / JobKorea company page — brand narrative)

### Tier 2

- getdesign.md/jobkorea — NOT LISTED (no data)
- refero — no results for JobKorea

Tier 2 data was not used to establish any token or component value.

## Token note

The source frontmatter records `tokens.source: prose-derived` and `tokens.extracted: 2026-06-09`. The YAML `tokens.source` value is `prose-derived`.

## Sibling handling (`web/references/jobkorea/.verification.md`)

The sibling exists — confirmed with `find web/references/jobkorea -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-03. Method: raw source-file fetch (homepage HTML + 4 CSS bundles).
- Homepage HTML 194 KB. Main DS token bundle 223 KB. Tailwind utility CSS 21 KB. Component CSS 32 KB.
- `ff9addcaa74e70a7.css` `:root`: `--color-jkblue-600:#083ccc` resolved from `[data-brand-theme=jk] { --themecolor-brand-primary:var(--color-jkblue-600) }`.
- `--color-jkblue-500:#1b55f6`, `--color-jkblue-400:#4c7afb`, `--color-jkblue-50:#f0f2fa`.
- `--color-amorange-500:#ff6d12`.
- `.textfield-size-52){height:52px}`, `.button-size-48){--button-height:48px}`, `.button-size-40){--button-height:40px}`.
- `--themeradius-xl:var(--unit12)` → 12px, `--themeradius-lg:var(--unit10)` → 10px, `--themeradius-xs:var(--unit6)` → 6px.
- `font-family:Pretendard,Apple SD Gothic Neo,Malgun Gothic,sans-serif`.
- `--shadow-default-color:#0000001f` (rgba 0,0,0,0.12), `--shadow-default-blur:var(--unit16)` → 16px.
- `transition-timing-function:cubic-bezier(.4,0,.2,1)` on `.transition`, `.transition-colors`, `.transition-transform` utilities.
- `--color-gray-50:#f6f7f8`, `--color-gray-100:#e6e8ea`, `--color-gray-950:#1a1a1e`.
- `fd29aacb4b8b02e0.css`: `font-family:var(--font-pretendard),"Apple SD Gothic Neo","Malgun Gothic",sans-serif`.
- country: KR; brand HQ: Seoul, South Korea (Worxphere LLC).

Sibling-only items (transcribed as sibling records; mention here is not portable-body use):

- Homepage / bundle sizes `194 KB` / `223 KB` / `21 KB` / `32 KB`
- `--themeradius-xs` / `--unit6` → 6px
- `--shadow-default-color:#0000001f`
- `--shadow-default-blur:var(--unit16)`
- Selector fragments `.textfield-size-52)` / `.button-size-48)` / `.button-size-40)`
- `cubic-bezier(.4,0,.2,1)` shorthand on Tailwind utilities
- Seoul / Worxphere LLC headquarters wording
- getdesign.md page text `No designs found for 'jobkorea'`

`#083ccc` / `#1b55f6` / `#4c7afb` / `#f0f2fa` / `#ff6d12` / Pretendard / 52px / 48px / 40px / 10px / 12px elevated-card radius already in the source body are corroboration, not sibling-only promotion.

## Byte-form notes

- The source frontmatter records display / h1 / h4 / body / caption line heights as unitless `1.33` / `1.31` / `1.4` / `1.5` / `1.38`. They are carried in that form in the portable type-role table. Observed px spellings `64px` / `42px` / `28px` / `24px` / `18px` sit on the Type-roles prose. They are not rewritten as replacements for the unitless figures (A1a).
- `tokens.spacing.md: 12` is not `tokens.rounded.md: 10` and is not Elevated Card `12px`.
- `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16` and is not a type size.
- `tokens.rounded.full: 9999` is not search `999px`.
- `tokens.shadow.card` `rgba(0,0,0,0.06) 0px 2px 8px` is not List shadow `0 4px 8px rgba(0,0,0,0.02)` and is not Default shadow `0 4px 16px rgba(0,0,0,0.12)`.
- `#012ca2` is `tokens.colors.primary-hover`. It is not `tokens.colors.primary-500` `#1b55f6`.
- `#d5d8dc` / `#f11e1e` / `#fbf5f5` are §4 / §14 records, not `tokens.colors` keys.
- YAML `tokens.components.button-primary.type: button`, `chip-selected` / `badge-urgent` / `badge-error` / `badge-success` `type: badge`, `input.type: input`, `card.type: card` are attached only to those records. Secondary Outlined, Small, Ghost, AI Search, Standard Search, and Elevated Card are not in the token set.
- YAML hex is lowercase. The portable body keeps that form.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 personas (4 illustrative entries) | whole fictional-biography class | The source labels them illustrative and not based on published JobKorea research. Not promoted to Audience or to `primary-tasks`, and not re-hosted here: no name, age, city, motivation, or occupation classification is restated (D2, D2a). Audience in the portable body keeps only the source's own group-level wording. |
| §15 two curve values | `cubic-bezier(0.4, 0, 0.2, 1)` · `cubic-bezier(0, 0, 0.2, 1)` | Template / Material-standard re-injection path. Durations, animation names, and the reduced-motion rule stay. Named in portable Recorded unresolved as omitted tokens, not as promoted Foundations curves. |
| Agent-prompt / tool-command examples | §9 restatements | Deleted as tool-facing copy. Every value §9 names was already in Foundations / Components / Layout before deletion. |

## Claim ledger

Claims use the inspected homepage and the three CSS bundles named in the source footer.

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `primary-hover` / `primary-500` / `primary-400` / `primary-50` / `point-orange` / `text` / `text-secondary` / `text-tertiary` / `placeholder` / `border` / `canvas` / `error` / `success` / `white` | home + css-main |
| `tokens.typography.family.sans` Pretendard | home + css-main |
| `tokens.typography.display` / `h1` / `h4` / `body` / `caption` (size, weight, lineHeight, tracking where present, use) | home + css-main |
| `tokens.spacing.xs` / `sm` / `md` / `base` / `lg` / `xl` / `xxl` / `section` | home + css-main |
| `tokens.rounded.sm` / `md` / `lg` / `full` | home + css-main |
| `tokens.shadow.card` | home + css-main |
| `tokens.components.button-primary` (type, bg, fg, radius, padding, font, use) | home + css-main |
| `tokens.components.chip-selected` (type, bg, fg, use) | home + css-main |
| `tokens.components.badge-urgent` (type, fg, use) | home + css-main |
| `tokens.components.input` (type, bg, fg, border, use) | home + css-main |
| `tokens.components.card` (type, bg, border, use) | home + css-main |
| `tokens.components.badge-error` (type, fg, use) | home + css-main |
| `tokens.components.badge-success` (type, fg, use) | home + css-main |
| Published strings JobKorea / Dreammark / JOBKOREA Black / Jobko / LOOP AI / N명 지원 / 맞는 공고가 없어요 / 지원 완료! / 지원완료 | source §1 / §10 / §11 / §14 |
| 1996 / 1998 / 2023 Dreammark / Sodiumpartners / 100 KRW / Worxphere / AlbaMon / GameJob / NineHire / JobPlanet / K-BPI 2023–2025 / LOOP AI on web and mobile | source §11 narrative |

## Capture selectors

The source body does not record `data-omd-capture` selectors. Token evidence is the homepage HTML plus the three named CSS bundles. Component records stay attached to those surfaces.

## Proof notes

- Five named Tier 1 sources, recorded 2026-06-03. The homepage and the three CSS bundles are the computed-token surfaces. The company page is a brand-narrative source, not a computed-token surface for the live palette.
- `components_harvested: true`; seven component records in the source token set (`button-primary`, `chip-selected`, `badge-urgent`, `input`, `card`, `badge-error`, `badge-success`).
- The source records generic focus rings on JK Blue 600 and a Focused input border `#1a1a1e`. Those are not promoted as `focus-visible` treatment. Uncaptured visual treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- JobKorea has no published first-party UI specification in the source. The live CSS token system is a product bundle, not a separately published UI specification. Derived-editorial qualifications therefore close with the toss-form example: not JobKorea-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- 1996 establishment, 1998 portal launch, 2023 Dreammark / Sodiumpartners / Jobko, the purpose line, the 100 KRW donation, Worxphere / AlbaMon / GameJob / NineHire / JobPlanet, K-BPI 2023–2025, and the source §11 closing sentence that LOOP AI now powers the core job-discovery experience on both web and mobile are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **32**. This table has **32** rows (E1 1:1). The same 32 lines also carry `not JobKorea-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 (`DESIGN.md` 9) | Inspected homepage and three CSS bundles as token surfaces; company page does not supply computed tokens |
| Experience — Scope ¶2 (`DESIGN.md` 11) | Atmosphere readings (confident / data-forward / authority / urgency hierarchy / youthful mobile-first / legacy-portal to career-management) |
| Experience — Scope ¶3 (`DESIGN.md` 13) | Classifying the 1996–2025 founding-and-Dreammark narrative, including the LOOP AI on web and mobile close, as context that does not supply tokens; leaving JOBKOREA Black / JK Blue unresolved |
| Experience — Primary tasks (`DESIGN.md` 19) | Selecting the three surface-and-control tasks; they do not come from the persona section |
| Experience — Audience (`DESIGN.md` 28) | Reading the source-named groups as audience; dropping illustrative biographies |
| Experience — Distinctive traits (`DESIGN.md` 32) | Grouping the seven traits |
| Experience — Principles (`DESIGN.md` 44) | The five source principles |
| Experience — Application rules (`DESIGN.md` 54) | The seven Do-list rules and the reasons attached to them |
| Experience — Avoid (`DESIGN.md` 66) | The six Don’t-list prohibitions |
| Foundations — Semantic color (`DESIGN.md` 81) | Role names taken from the source token-set keys; `#012ca2` off `#1b55f6`; `#d5d8dc` / `#f11e1e` / `#fbf5f5` kept off invented color keys |
| Foundations — Spacing (`DESIGN.md` 105) | Eight unitless steps, not a grid; `20` / `40` stay layout multiples; spacing keys stay off matching radius and type sizes |
| Foundations — Shape (`DESIGN.md` 120) | Keeping `sm 4` / `md 10` / `lg 16` / `full 9999` / search `999px` / Elevated Card `12px` on their own paths |
| Foundations — Elevation (`DESIGN.md` 132) | YAML `tokens.shadow.card` kept beside the five named §6 levels |
| Foundations — Motion (`DESIGN.md` 136) | Curve omission; durations and animation names kept; five-kind promotion gate |
| Typography — Font Official product-use (`DESIGN.md` 171) | Company / Dreammark pages as evolution account, not a published type token |
| Typography — Font Official distributed (`DESIGN.md` 173) | Absence of an exclusive downloadable package |
| Typography — Font Declared-only (`DESIGN.md` 174) | Fallback members are not a second brand face |
| Typography — Font License (`DESIGN.md` 175) | No Pretendard licence line; no invented licence claim |
| Typography — Font evidence close (`DESIGN.md` 178) | Evidence-class readings as a group, including the missing-licence absence |
| Typography — Family (`DESIGN.md` 186) | No-substitution rule |
| Typography — Type roles (`DESIGN.md` 198) | Unitless ratios kept beside §3 px spellings; §3-only sizes off token-set keys |
| Typography — Assets (`DESIGN.md` 205) | Favicon as identity pointer; Jobko as the source-named mascot |
| Components — Applicability (`DESIGN.md` 216) | Role-based decision procedure; interactive-kind and not-applicable verdicts; refusal to treat the map as a complete state-coverage claim |
| Components — Standard Search (`DESIGN.md` 371) | Gradient reservation as the source's own Don't rule rather than a new surface |
| Components — Elevated Card (`DESIGN.md` 414) | `12px` kept on this record; kind and map withheld |
| Components — Surface state contract (`DESIGN.md` 451) | Eight §14 rows as a surface contract rather than a treatment on every control; hover-row cubic-bezier omitted as template / Material-standard re-injection |
| Layout — Breakpoints (`DESIGN.md` 467) | Two declared breakpoints as the source's own pair; 20 / 40 multiples kept on this layout record and off `tokens.spacing` keys |
| Layout — Responsive (`DESIGN.md` 469) | Collapsing rules as recorded responsive behavior rather than a cross-product specification |
| Content — Voice (`DESIGN.md` 474) | Direct / encouraging / data-grounded and the advisor reading |
| Content — Voice samples (`DESIGN.md` 483) | Illustrative, not a complete product-microcopy guide |
| Content — Byte-exact close (`DESIGN.md` 517) | Byte-exact / gloss-beside rule; voice observation rather than invented authenticated-product microcopy |
| Governance — Recorded unresolved (`DESIGN.md` 551) | Named values rather than permissions to invent; naming the list from the source's own unresolved fields; getdesign.md / refero misses classed as ledger facts rather than token sources |
