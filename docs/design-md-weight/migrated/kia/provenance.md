# Kia provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kia/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kia |
| name | Kia |
| display_name_kr | 기아 |
| country | KR |
| category | automotive |
| homepage | `https://www.kia.com/kr/` |
| primary_color | `#05141f` |
| logo.type | simpleicons |
| logo.slug | kia |
| omd format (source) | 0.1 |
| verified | 2026-06-22 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The simpleicons slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: simpleicons` / `logo.slug: kia`. That is an identity pointer, not a Kia-hosted file. SimpleIcons confirmation URL `https://cdn.simpleicons.org/kia` is dual: identity corroboration here, and a portable Assets pointer in `DESIGN.md` §3.

Token note from source, kept as ledger metadata: primary = deep charcoal-navy (`#05141f`) used for text, button bg, nav surfaces. Canvas is pure white. Accent steel (`#697278`) for secondary text. No saturated brand accent color — Kia's identity uses monochrome restraint. Those facts also land in the portable body as the YAML note restatement in Foundations Semantic color.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| Tier 1 live inspect (source footer) | 2026-06-22 |
| sibling inspect | 2026-06-22 |

The source footer records the verification verbatim as **Verified:** 2026-06-22. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states. Both Tier-2 catalogs returned no Kia data; all values from Tier 1 live inspect.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | KR homepage | `https://www.kia.com/kr/` | 2026-06-22 |
| ev6 | EV6 vehicle page | `https://www.kia.com/kr/vehicles/ev6/` | 2026-06-22 |
| brand-identity | official-doc — brand identity / Opposites United | `https://worldwide.kia.com/en/brand/our-brand/brand-identity/who-we-are` | 2026-06-22 |
| newsroom | official-doc — Kia Korea newsroom | `https://www.kia.com/kr/discover-kia/news/list` | 2026-06-22 |

### Tier 1 (as listed in the source footer)

- `https://www.kia.com/kr/` (homepage, computed style live inspect)
- `https://www.kia.com/kr/vehicles/ev6/` (EV6 vehicle page, second surface)
- `https://worldwide.kia.com/en/brand/our-brand/brand-identity/who-we-are` (Kia global brand identity page)
- `https://www.kia.com/kr/discover-kia/news/list` (Kia Korea newsroom)

### Tier 2

- getdesign.md/kia — 0 results (not listed)
- styles.refero.design/?q=kia — no exact match found (search returned automotive brands Ferrari, BMW, Tesla, Lamborghini, Rivian but not Kia)

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: live-extract` and `tokens.extracted: 2026-06-22`. That producer string is ledger metadata. The portable body names `live-extract` as the token-set source on the Font evidence Live computed surface-use row and on the Motion attribution sentence.

## Sibling handling (`web/references/kia/.verification.md`)

The sibling exists — confirmed with `find web/references/kia -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-22. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless, domcontentloaded), goto `https://www.kia.com/kr/` + waitForTimeout 3500ms, modal/cookie dismissal pass, then getComputedStyle on body, headings, buttons, links, nav elements; full-DOM bg/fg color frequency scan. Second surface: `https://www.kia.com/kr/vehicles/ev6/`.
- body: `font-family: "Kia Signature Regular", Arial, sans-serif, Hevetica`; `color: rgb(5, 20, 31)` (`#05141f`); `font-size: 16px`; `background-color: rgb(255, 255, 255)`
- nav link "차량": `font-family: "Kia Signature Regular"`; `font-size: 16px`; `font-weight: 400`; `padding: 0px 24px`; height 60px; `color: rgb(0, 0, 238)` (browser default, actual rendered `#05141f` on nav)
- nav header expanded "차량" panel: `color: rgb(255, 255, 255)`; `font-size: 18px`; `font-weight: 400`; `font-family: "Kia Signature Bold"`
- CTA "렌터카 견적 내기" (white on dark hero): `background-color: rgb(255, 255, 255)`; `color: rgb(5, 20, 31)` (`#05141f`); `border-radius: 0px`; `padding: 16px 24px`; height 48px; `border: 1px solid rgb(255, 255, 255)`; `font-family: "Kia Signature Bold"`; `font-size: 14px`
- CTA "바로가기" (dark primary): `background-color: rgb(5, 20, 31)` (`#05141f`); `color: rgb(255, 255, 255)`; `border-radius: 0px`; `padding: 16px 24px`; height 48px; `border: 1px solid rgb(5, 20, 31)`; `font-family: "Kia Signature Bold"`; `font-size: 14px`
- CTA "견적 내기" (dark, EV6 page): `background-color: rgb(255, 255, 255)`; `color: rgb(5, 20, 31)`; `border-radius: 0px`; `padding: 16px 24px`; height 48px; `font-family: "Kia Signature Bold"`
- H2 "Best Kia" (homepage): `font-family: "Kia Signature Bold"`; `font-size: 42px`; `font-weight: 400`; `line-height: 54.18px`; `color: rgb(5, 20, 31)` (`#05141f`); `letter-spacing: normal`
- H2 "The 2026 EV6" (vehicle hero): `font-size: 52px`; `font-weight: 400`; `font-family: "Kia Signature Bold"`; `color: rgb(255, 255, 255)`; height 64px
- H2 "EV6" (vehicle sub-nav panel): `font-size: 28px`; `font-weight: 400`; `color: rgb(5, 20, 31)`; `font-family: "Kia Signature Bold"`
- Vehicle tab "특징" (active): `color: rgb(5, 20, 31)`; `font-size: 20px`; `font-family: "Kia Signature Bold"`; height 52px
- Vehicle tab "제원" (inactive): `color: rgb(105, 114, 120)` (`#697278`); `font-size: 20px`; `font-family: "Kia Signature Bold"`
- vehicle card (`.best-model__item`): `background-color: rgb(255, 255, 255)`; `border-radius: 15px`; `border: 1px solid rgb(218, 219, 220)` (`#dadce0`); `box-shadow: none`; height 840px
- bg frequency scan (homepage): `rgb(255, 255, 255)` ×37 (dominant), `rgb(5, 20, 31)` ×20, `rgb(248, 248, 248)` ×12, `rgb(210, 210, 210)` ×5, `rgb(1, 14, 24)` ×5, `rgb(0, 0, 0)` ×3, `rgb(105, 114, 120)` ×1
- fg frequency scan (homepage): `rgb(5, 20, 31)` ×635 (dominant), `rgb(0, 0, 0)` ×77, `rgb(255, 255, 255)` ×75, `rgb(55, 67, 75)` ×71 (`#37434b`), `rgb(105, 114, 120)` ×63 (`#697278`)
- box-shadow: `none` across nav, hero CTAs, vehicle cards, all buttons
- document.title: "기아 - Movement that inspires"
- getdesign.md/kia: 0 results — page showed "No designs found for kia"
- styles.refero.design/?q=kia — automotive brands Ferrari, BMW, Tesla, Lamborghini, Rivian but not Kia
- SimpleIcons kia slug confirmed 200 at `https://cdn.simpleicons.org/kia`

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts.

- nav link padding `0px 24px`
- browser-default nav color `rgb(0, 0, 238)`
- H2 "Best Kia" computed line-height `54.18px`
- H2 "The 2026 EV6" height `64px`
- vehicle card height `840px`
- bg-frequency leftover `rgb(210, 210, 210)` ×5
- bg-frequency leftover `rgb(0, 0, 0)` ×3
- getdesign.md miss page `No designs found for kia`

Values the sibling shares with the source body (corroboration, not new portable facts): `#05141f`, `#ffffff`, `#f8f8f8`, `#dadce0`, `#37434b`, `#697278`, `#010e18`, Kia Signature Bold / Regular, `Arial, sans-serif, Hevetica`, 0px button radius, 15px card radius, 16px 24px CTA padding, 48px CTA height, 60px nav, 52px tabs, 18px panel heading, 42px Best Kia, 52px The 2026 EV6, 28px EV6 sub-head, `box-shadow: none`, document.title `기아 - Movement that inspires`, labels 차량 / 렌터카 견적 내기 / 바로가기 / 견적 내기 / Best Kia / The 2026 EV6 / EV6 / 특징 / 제원.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / canvas / surface / border / body / muted / muted-alt / on-primary | home + ev6 |
| tokens.colors.primary-dark | dark-mode hero (source §2 Dark Surface) |
| tokens.colors.dark-bg | EV6 vehicle page dark banner |
| tokens.typography.family.display / body / fallback | home + ev6 |
| tokens.typography.display-hero | ev6 vehicle hero |
| tokens.typography.section / subsection / nav / body / button | home |
| tokens.typography.vehicle-nav | ev6 vehicle page tabs |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home + ev6 |
| tokens.rounded.sm / md / lg / full | home + ev6 |
| tokens.shadow.none | home + ev6 |
| tokens.components.button-primary / button-secondary / button-white-outlined | home + ev6 |
| tokens.components.card-vehicle | home (Best Kia) |
| tokens.components.nav-tab-active / nav-tab-inactive | ev6 |
| tokens.components.badge-model | home + ev6 |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시·동기·소속 분류 포함) | Deleted. The source's own header labels them fictional archetypes informed by publicly observable segments. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed curve; byte-related to `spec/omd-v0.1.md` `ease-exit`. Role name and use kept. |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §9 Agent Prompt Guide — construction prompts | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. The §9-only sentence that the tab bar itself has no background color lands on Vehicle Page Tab (Active). |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Primary / CTA background `#05141f`, CTA text on dark `#ffffff`, body text `#05141f`, Body Slate `#37434b`, Steel Grey `#697278`, page background `#ffffff`, Surface Grey `#f8f8f8`, card border `#dadce0`, Dark sections `#01141b` — Foundations semantic color. Hero 52px Kia Signature Bold, two-CTA 0px / 16px 24px / 14px Kia Signature Bold — Components Primary Dark + Secondary White. Vehicle lineup card `#ffffff` / `1px solid #dadce0` / 15px / no shadow / vehicle name 28px — Vehicle Card + Type roles. Page sub-nav active `#05141f` / 20px Kia Signature Bold / bottom border; inactive `#697278`; no background color on tab bar — Vehicle Page Tab. Iteration-guide rules (0px interactive corners, `#05141f` only for primary actions, no `box-shadow`, Bold for CTAs + headings and Regular for nav/body, white and dark sections alternate, vehicle photography primary) — Application rules + Avoid + Elevation + Type principles.

## Derived editorial inventory

Portable `DESIGN.md` carries 41 complete B2a qualifications. This table is 41 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 `:9` | Two inspected KR URLs as this contract's token surfaces; brand-identity and newsroom as named sources that do not supply computed tokens; values stay attached |
| 2 | Experience Scope ¶2 `:11` | Automotive-restraint / showroom / athletic-engineered / precision / "engineered," not "consumer app." / interface-steps-back atmosphere |
| 3 | Experience Scope ¶3 `:13` | Founding-and-rebrand narrative as context that does not supply interface tokens |
| 4 | Primary tasks `:19` | Selecting the three recorded surfaces and labels as primary tasks; not from the persona section |
| 5 | Audience `:28` | Biography-drop (no name, age, city, motivation, or affiliation classification); group-level Korean car buyers, EV early adopters, family SUV buyers |
| 6 | Distinctive traits `:32` | Grouping the recorded Key Characteristics as the distinctive layer |
| 7 | Principles `:45` | The five numbered items and their UI implications |
| 8 | Application rules `:55` | The seven Do rules and the reasons attached |
| 9 | Avoid `:67` | The six Don't rules and the reasons inside them |
| 10 | Foundations Semantic color `:82` | Role names from the source's labels; canvas / on-primary unmerged; primary-dark / dark-bg unmerged; muted / muted-alt unmerged |
| 11 | Foundations Spacing `:115` | Unitless steps unmerged from matching type sizes and padding halves |
| 12 | Foundations Shape `:128` | `sm: 0` / `md: 0` unmerged; `lg: 15` off spacing; `full: 9999` off the chat `50%` |
| 13 | Foundations Elevation `:139` | Shadow-free photography-first treatment as a clean automotive brochure rather than an app |
| 14 | Foundations Motion `:143` | Unattributed durations, roles, rules, and signature; three untraceable curve values omitted |
| 15 | Motion signature `:172` | Crossfade as reinforcing "Movement that inspires" |
| 16 | Typography Official product-use `:182` | "No published type token" |
| 17 | Typography Font-evidence wrap `:188` | Official-use / licence-boundary / fallback classifications; typography beyond the two inspected KR surfaces stays outside this contract |
| 18 | Typography Family `:196` | Fallback prohibition |
| 19 | Type roles `:200` | YAML unitless ratios kept; YAML use and §3 notes both kept; nav/body `16` off spacing `16` |
| 20 | Type principles `:218` | Three type principles as current-surface type rules; Bold-as-medium-weight observation |
| 21 | Assets `:226` | Simpleicons slug as identity pointer; first-party photography not replaced |
| 22 | Components how-to-read `:237` | Kind and applicability verdicts; not a complete state-coverage claim |
| 23 | Primary Dark `:260` | 48px / 16px 24px / 14px as this button's geometry |
| 24 | Secondary White `:293` | 48px / 16px 24px as this button's geometry |
| 25 | White Outlined `:326` | 48px / 16px 24px as this button's geometry |
| 26 | Vehicle Card geometry `:355` | 15px as this card's geometry rather than a spacing step |
| 27 | Vehicle Card C4 `:356` | Kind and map withheld because the source supplies no interaction evidence |
| 28 | Vehicle Page Tab Active `:373` | 52px as the §8 touch-target; tab bar has no background |
| 29 | Vehicle Page Tab Inactive `:398` | 52px as the touch-target measurement rather than a type size |
| 30 | Model Badge `:426` | `Kind: non-interactive` because the source records a label / metadata tag |
| 31 | Surface Section C4 `:435` | Kind and map withheld because the source supplies no interaction evidence |
| 32 | Vehicle Sub-navigation Panel C4 `:463` | Kind and map withheld because the source supplies no interaction evidence |
| 33 | Surface state contract `:467` | System-level treatments without attaching every row to destination CTAs |
| 34 | Network-failure clause `:482` | "Automotive reliability = errors are uncommon" as editorial |
| 35 | Layout whitespace `:504` | Scale and 16px 24px as the source's own; photography-first / generous-section / two-button as layout rules |
| 36 | Layout responsive `:529` | Recorded measurements rather than a cross-viewport specification invented on top of them |
| 37 | Content voice `:534` | Public voice rather than a separately published microcopy guide |
| 38 | Voice samples `:551` | Three verbatim lines rather than a complete copy manual |
| 39 | Named gaps `:589` | Named gaps rather than a domain inventory; unnamed values rather than permissions to invent |
| 40 | Content published-string close `:553` | "이 달의 구매 혜택" kept as published copy rather than as a persona fact; forbidden-register list as the source's own Don'ts, not a published microcopy specification |
| 41 | Foundations Motion B3 `:162` | Five-kind promotion gate; partial confirmation insufficient |

## HTML comment (source philosophy layer)

The source HTML comment records: Tier 1 live inspect 2026-06-22 via playwright getComputedStyle on the homepage and EV6 page; WebFetch confirmation of worldwide.kia.com/en, the Korea newsroom, and cdn.simpleicons.org/kia; Brand narrative (§11) founding / etymology ("Rising from Asia") / Schreyer / 2021 rebrand as widely documented public automotive industry facts; Personas (§13) as fictional archetypes; Interpretive claims (e.g. "0px radius as engineered confidence", "photography-first UI") as editorial readings connecting observed design to "Opposites United", not directly sourced Kia statements. Those interpretive claims keep adjacent complete B2a closes in the portable body.
