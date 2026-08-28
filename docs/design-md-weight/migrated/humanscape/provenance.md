# Humanscape provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/humanscape/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | humanscape |
| name | Humanscape |
| display_name_kr | 휴먼스케이프 |
| country | KR |
| category | healthcare |
| homepage | `https://humanscape.io/` |
| primary_color | `#00adf7` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=humanscape.io&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a favicon-service URL keyed to the domain rather than a Humanscape-hosted brand file, and the portable record says so.

Token note from source, kept as ledger text: Humanscape rebranded to LifeX (humanscape.io -> lifex.io). primary = azure hero-highlight `#00adf7` (coded as Tailwind `text-[#00ADF7]`); secondary accent violet `#7b61ff` on section index labels. Near-black ink `#191a1f`, shadowless flat system, oversized Pretendard display type.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| Tier 1 live inspect (source footer) | 2026-07-02 |

The source footer records the verification verbatim as **Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| homepage | corporate homepage (LifeX) | `https://humanscape.io/` (resolves to `https://lifex.io/`) | 2026-07-02 |
| our-business | Our Business page | `https://lifex.io/our-business` | 2026-07-02 |

### Tier 1 (as listed in the source footer)

- `https://humanscape.io/` (redirects to `https://lifex.io/` — live homepage inspect)
- `https://lifex.io/our-business` (second surface live inspect)

`https://humanscape.io/` is dual-destination: Experience Scope in `DESIGN.md` and this ledger. `https://lifex.io/` is dual-destination the same way. `https://lifex.io/our-business` is dual-destination the same way.

### Tier 2

- getdesign.md/humanscape — SPA shell, no brand data
- styles.refero.design/?q=humanscape — no brand-specific match (default "Browse 2,000+" grid)

Both Tier 2 catalogs under-cover Humanscape. The source assigns proof to the Tier 1 brand-owned surfaces. No Tier 1 ↔ Tier 2 conflicts (Tier 2 silent).

Narrative citations named by the source §11, kept as narrative sources, not token surfaces:

- `https://www.sisajournal-e.com/news/articleView.html?idxno=181666` (시사저널e interview with CEO 장민후)
- `https://www.venturesquare.net/1093607` (VentureSquare LifeX coverage)

## Sibling handling (`web/references/humanscape/.verification.md`)

The sibling exists — confirmed with `find web/references/humanscape -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-02. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), Chrome UA + ko-KR locale, goto domcontentloaded + settle, Escape/modal dismissal, in-page canvas `toHex()` normalization of `lab()`/`oklab()` computed colors to sRGB hex
- Sources: `https://humanscape.io/` (redirects to `https://lifex.io/`); `https://lifex.io/our-business`
- body: `font-family: pretendard, "pretendard Fallback", system-ui`; `color: #0a0a0a`; `font-size: 16px`; `line-height: 24px`; `background: #ffffff`
- hero section: `background-color: #dfe7e4`; `height: 100dvh`
- hero H1 "eXploring human Life...": Pretendard; `font-size: 58px`; `font-weight: 500`; `color: #ffffff` (over hero art)
- sub-hero H1 "Intelligence Across the Life Journey": `font-size: 52px`; `font-weight: 500`; `color: rgb(26, 27, 30)` (`#1a1b1e`)
- hero highlight span `text-[#00ADF7]` "the Life Journey": `color: rgb(0, 173, 247)` (`#00adf7`); `font-size: 52px`; `font-weight: 500`
- azure data dot: `background-color: rgb(0, 173, 247)` (`#00adf7`); `border-radius: 9999px`; size 14px
- section headline "The Foundation for Scalable Innovation.": `font-size: 64px`; `font-weight: 500`; `color: #1a1b1e`
- "Our Business" page hero H1: `font-size: 112px`; `font-weight: 600`
- closing statement "eXplore Life, Decide Better.": `font-size: 90px`; `font-weight: 500`; `color: #1a1b1e`
- section index label "1. Built on Healthcare Network": Pretendard; `font-size: 16px`; `font-weight: 500`; `color: rgb(123, 97, 255)` (`#7b61ff`)
- "we're hiring" tag: `font-size: 12px`; `font-weight: 600`; `color: #7b61ff`
- nav link "Our Business": `color: rgb(26, 27, 30)` (`#1a1b1e`); `border-radius: 8px`; `padding: 8px 14px`; `font-size: 16px`; `font-weight: 400`; height 40px
- language toggle "KR": `background-color: #f4f6f9`; `color: rgb(40, 41, 45)` (`#28292d`); `border-radius: 9999px`; `padding: 8px 14px`; `font-size: 14px`; `font-weight: 600`; height 38px (inactive "EN" `color: #b0b3ba`)
- inline CTA "eXplore Our Business": `color: rgb(40, 41, 45)` (`#28292d`); `border-bottom: 1px solid #28292d`; `font-size: 18px`; `font-weight: 400`
- business-area card button: `border-radius: 24px` (some 32px); `color: #191a1f`; `box-shadow: none`
- Growth Layers list row: `padding: 40px 0px`; `border-bottom: 1px solid rgb(215, 221, 229)` (~`#d8dde4` / `#d7dde5`); `font-size: 16px`; `color: #191a1f`
- data-viz tint card surfaces: `#c7e1ff`, `#cde4ff`, `#deecfc`
- H3 category head "Strategic Technology Investors": `font-size: 24px`; `font-weight: 500`; `color: #1a1b1e`
- top background colors (frequency scan): `#ffffff` ×13, `#f4f6f9` ×10, `#5d5d60` ×9, `#b0b3ba` ×8, `#00adf7` ×5, `#d2d4d9` ×4, `#c7e1ff` ×3, `#dfe7e4` ×1
- top foreground colors (frequency scan): `#191a1f` ×183, `#5d5d60` ×119, `#0a0a0a` ×65, `#3c3d42` ×55, `#000000` ×50, `#28292d` ×44, `#ffffff` ×41, `#1a1b1e` ×27, `#7b61ff` ×5
- box-shadow: `none` across hero, nav, headings, cards, and list rows
- document.title: "LifeX | 데이터 기반 헬스케어 인텔리전스" (home) / "LifeX | 사업 영역" (Our Business)

Values and forms the sibling carries that the visible source body does not, kept here as corroboration and not promoted into the portable body as new facts:

- Language-toggle height `38px`
- Extra pale-blue tints `#cde4ff`, `#deecfc`
- Frequency-scan hex `#d2d4d9`
- Hairline sample `#d7dde5` (sibling conflict matrix; source body canonicalizes to `#d8dde4`)
- document.title `LifeX | 데이터 기반 헬스케어 인텔리전스` and `LifeX | 사업 영역`
- Phrase `Strategic Technology Investors`
- Frequency counts (`#191a1f` ×183 and the rest of the sibling scans)
- Method strings `playwright getComputedStyle`, `lab()` / `oklab()`
- Note that `medium.com/humanscape-tech` returned a Cloudflare challenge and is not cited as a verified source

Hex values those RGB samples convert to (`#00adf7`, `#7b61ff`, `#191a1f`, `#1a1b1e`, `#0a0a0a`, `#28292d`, `#dfe7e4`, `#f4f6f9`, `#c7e1ff`, `#d8dde4`) are already in the source body.

The sibling excludes Google favicon and getdesign.md / refero.design from the KR brand-owned count. That exclusion is recorded here and in the portable Assets classing; it is not a new token.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.2` hero, `1.5` body). They are carried as ratios in the portable body, never converted to a single px form (A1a). The source itself also writes `1.50 (24px)` and `~1.2`; both forms stay.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `band: 144`; `sm: 8`, `lg: 24`, `xl: 32`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `tokens.rounded.full: 9999` stays a step. The source also writes `9999px`.
- `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8`. `tokens.spacing.md: 24` is not `tokens.rounded.lg: 24`. `tokens.rounded.xl: 32` is not the 32px card-section title. `tokens.spacing.base` is not a source key.
- Frontmatter `primary_color` is `#00adf7`, the same byte form as `tokens.colors.primary`.
- YAML `family.sans` is `Pretendard`.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 Personas — three entries | whole section | Fictional archetypes. Not promoted to verified tasks and not re-hosted in a sidecar. Role labels, ages, cities, affiliations, motivations, and biographies are dropped and are deliberately not restated here (D2, D2a). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompt and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |
| Three unsourced easing curves | curve values only | `ease-enter` / `ease-exit` / `ease-standard` roles and uses stay. The three cubic-bezier values match the catalog template set and are not traceable to Humanscape evidence. Durations 120ms / 240ms / 400ms and the motion rules stay. The B3 promotion condition is kept in the portable body. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. LifeX Azure `#00adf7`, Accent Violet `#7b61ff`, Ink `#191a1f`, Heading Navy `#1a1b1e`, Body Black `#0a0a0a`, Dark Slate `#28292d`, Meta Grey `#3c3d42`, Muted Grey `#5d5d60`, Faint Grey `#b0b3ba`, Pure White `#ffffff`, Cool-grey `#f4f6f9`, Hero Mint `#dfe7e4`, Data Blue Tint `#c7e1ff`, Hairline `#d8dde4` — Semantic color. Hero 58px Pretendard 500 / mint wash / azure highlight — Type roles + Scope. Feature card `#f4f6f9` / 24px / no shadow — Feature Card. Data card `#c7e1ff` / 32px / azure dot — Data Card + Data Dot. Nav 16px / 400 / `#1a1b1e` / 8px / 8px 14px — Nav Link. Language toggle `#f4f6f9` / 14px / 600 / 9999px — Language Toggle Pill. Inline CTA `#28292d` / 18px / 1px bottom border — Inline Underlined CTA. Growth Layers 40px padding / `#d8dde4` hairline / violet numbered label — Growth Layers Row + Section Index Label. Radius 8 / 24 / 32 / 9999 — Shape.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `accent-violet` / `ink` / `heading` / `body` / `dark` / `meta` / `muted` / `faint` / `canvas` / `surface` / `hero-mint` / `blue-tint` / `hairline` | live humanscape.io → lifex.io + lifex.io/our-business |
| `tokens.typography.family.sans` | live humanscape.io → lifex.io |
| `tokens.typography.display` / `display-lg` / `hero` / `h1` / `h2` / `h3` / `label` / `body` / `toggle` / `micro` | live humanscape.io → lifex.io + our-business |
| `tokens.spacing.xs` / `sm` / `nav` / `md` / `lg` / `xl` / `section` / `band` | source token set (live-extract) |
| `tokens.rounded.sm` / `lg` / `xl` / `full` | live geometry + token-set full step |
| `tokens.shadow.none` | live humanscape.io → lifex.io + our-business (`box-shadow: none`) |
| `tokens.components.nav-link` / `lang-toggle` / `inline-cta` / `feature-card` / `data-card` / `index-label` / `hiring-badge` / `growth-row` / `data-dot` | live humanscape.io → lifex.io + our-business |
| Founding March 2016; CEO 장민후; RareNote; MamiTalk; early blockchain health-data era; LifeX rebrand; US / Indonesia / Vietnam | source §11 narrative (sisajournal-e + VentureSquare + live site) |
| Voice strings "eXploring human Life…"; "The Foundation for Scalable Innovation."; "eXplore Life, Decide Better." | live homepage |

## Proof notes

- Two brand-owned Tier 1 web surfaces, recorded 2026-07-02. Computed interface values in the source body attach to humanscape.io (resolving to lifex.io) and lifex.io/our-business.
- `components_harvested: true`; nine component records in the source token set.
- The source records no interaction expansion and no `focus-visible` string. Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable` for lack of capture. Applicability follows control role. State coverage is not claimed complete.
- Humanscape publishes no first-party design-system documentation in the source (getdesign SPA shell; refero silent). Derived-editorial qualifications therefore close with the toss-form: not Humanscape-authored or a separately published UI specification (rulebook v12 B2a).
- March 2016, Jang Min-hoo (장민후), RareNote (레어노트), MamiTalk (마미톡), blockchain-based health-data sharing, LifeX rebrand, 1,800+ / 2.5M+ / 230M+, and United States / Indonesia / Vietnam are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens. The §11 closing refusal/embrace sentence stays in the same Scope paragraph.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **35**. This table has **35** rows (E1 1:1). The same 35 lines also carry `not Humanscape-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | The surface boundary that keeps values on the surface that established them |
| Experience — Scope ¶2 | The atmosphere readings: calm editorial register, azure as the signal in the data, medium weight vs heavy-800, science-forward trust |
| Experience — Scope ¶3 | Classing the §11 founding-rebrand-and-expansion narrative as not a token source |
| Experience — Scope ¶4 | Reading the refusal/embrace closing unit as a current-surface design instruction |
| Experience — Primary tasks | The step from observed labels to "primary tasks" |
| Experience — Audience | The step from the source's group labels to an audience grouping |
| Experience — Distinctive traits | The grouping and characterizing half of the recorded values |
| Experience — Principles | All five §12 principles and their UI implications |
| Experience — Application rules | Grouping the Do list as application rules, and their rationales |
| Experience — Avoid | The rationales in the Don't list |
| Foundations — Semantic color | The characterizing phrases attached to roles |
| Foundations — Spacing | Keeping `sm: 8` / `md: 24` off the radius keys that share a number |
| Foundations — Shape | Calling 24px the workhorse, keeping rounded steps off spacing keys, and keeping 32px radius off the 32px type size |
| Foundations — Elevation | Reading the stack as a flat, wash-and-hairline elevation system |
| Foundations — Motion / omitted curves | Classing the three source-listed curves as untraceable to Humanscape evidence and omitting them on that ground |
| Foundations — Motion | Reading the motion rules as a science-forward / steadiness signal |
| Typography — Font evidence / Official product-use | Classing the live surfaces as not a separately issued typography specification |
| Typography — Font evidence / Official distributed | Classing the absence of a separately distributed family as an evidence class |
| Typography — Font evidence / Declared-only | Classing `Pretendard Fallback` and `system-ui` as load-stack fallbacks, not the Humanscape face |
| Typography — Font evidence / License | Treating Pretendard as an upstream face, not a Humanscape-owned brand asset |
| Typography — Font evidence / Outside these captures | Naming only the two source-established pages as the capture boundary |
| Typography — Family | The ban on substituting a fallback and presenting it as the Humanscape face |
| Typography — Type roles | Keeping line heights as unitless ratios and refusing a single px conversion |
| Typography — Type rules | Reading the scale as the four typography principles |
| Typography — Assets | Classing the favicon slug as a third-party favicon service |
| Typography — Assets / image behavior | Reading shadowless product screenshots as consistent with the flat system |
| Components — How to read this section | The role-based decision procedure, and every Reason cell in every per-component table |
| Components — State record | The nine-row §14 contract read as this surface's state contract, not as per-control observations or treatments attached to corporate destination controls |
| Layout & Platforms | Reading the page as air-as-authority, tint-not-elevate bands, and evidence rather than decoration |
| Layout & Platforms — Responsive | Reading the breakpoints and collapsing strategy as system-level rather than cross-viewport measurements |
| Layout & Platforms — Image behavior | Reading that image behavior as consistent with the flat system |
| Content & Locales — voice / register | The voice reading and the register-table contract |
| Content & Locales — voice samples | The parenthetical readings after the three live homepage quotes |
| Content & Locales — byte-exact | The byte-exact / gloss-beside rule for Korean strings |
| Governance — Recorded unresolved | Framing the list as source-opened values, not a license to invent or a list of never-established domains |
