# Kraken provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kraken/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kraken |
| name | Kraken |
| country | US |
| category | fintech |
| homepage | `https://www.kraken.com` |
| primary_color | `#5741d9` |
| logo.type | github |
| logo.slug | krakenfx |
| omd format (source) | 0.1 |
| verified | 2026-05-15 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The catalog `primary_color` `#5741d9` is dual: identity here, and a Scope / Foundations disambiguation from `tokens.colors.primary-hover` `#5741d8` in `DESIGN.md`. The github slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled). There is no `display_name_kr` field in the source frontmatter.

**Logo decision.** The catalog field is `logo.type: github` / `logo.slug: krakenfx`. That is an identity pointer, not a Kraken-hosted file.

Token note from source YAML: `tokens.source: prose-derived`. Those facts also land in the portable body as the Scope `prose-derived` sentence and the Motion attribution sentence.

## Freshness

| Event | Date |
|---|---|
| frontmatter verified | 2026-05-15 |
| source footer **Verified:** | 2026-05-08 |
| sibling inspect | 2026-05-08 |
| tokens.extracted | 2026-06-09 |

The source footer records the verification verbatim as **Verified:** 2026-05-08 (omd:migrate run 31 — Apple-tier). The frontmatter records `verified: "2026-05-15"`. Both writings stay. Neither was chosen as a replacement. Those producer strings are ledger metadata.

Conflicts unresolved: none — as the source footer states. Both Tier-2 catalogs returned no Kraken record; Tier 1 (kraken.com home + /prices) treated as authoritative.

Style ref from the source footer: `stripe`. That is a catalog style-reference pointer, not a portable token.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | consumer home — Crypto, Stocks & more positioning | `https://www.kraken.com` | 2026-05-08 |
| prices | live price market table — filter pill toolbar | `https://www.kraken.com/prices` | 2026-05-08 |

### Tier 1 (as listed in the source footer)

- kraken.com home + /prices (live DOM via playwright — Primary `#7132f5` Kraken Purple 12px tiered (header 36 / page 48-52) 8-15×12-16 / 14-16px·500; Light Purple ghost `rgba(133,91,251,0.16)` 12px; Light Secondary `#f5f5f5` 12px; **3-tier radius scale 12/10/8** = Action/Filter/Selector hierarchy)

### Tier 2

- styles.refero.design / getdesign.md — no record
- getdesign.md/kraken — directory only
- styles.refero.design `?q=Kraken` — no record

### Tier 2 (Philosophy/founders/IPO)

Wikipedia (Kraken), Contrary Research (3-founder origin), Tracxn ($867M @ $20B), Caproasia (Nov 2025 IPO filing), Forge Global, Kraken press (leadership succession), Fortune.

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: prose-derived` and `tokens.extracted: 2026-06-09`. That producer string is ledger metadata. The portable body names `prose-derived` as the token-set source on Experience Scope and on the Motion attribution sentence.

## Sibling handling (`web/references/kraken/.verification.md`)

The sibling exists — confirmed with a direct path read of `web/references/kraken/.verification.md`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Pipeline: `spec/verification-pipeline.md` · Skill: `omd:migrate`. Inspected 2026-05-08. Method: playwright getComputedStyle (live DOM). Surfaces: `kraken.com/` (consumer home — Crypto, Stocks & more positioning); `kraken.com/prices` (live price market table — filter pill toolbar).
- Sign up / Try Kraken / Sign-up now / Get Kraken / Confirm eligibility / Get in touch — Kraken Purple Primary: bg `rgb(113, 50, 245)` = `#7132f5`; color `#ffffff`; radius 12px; padding 8×12 (header 36px) / 13-15×16 (page 48-52px); 36 / 48 / 52px / 14-16px·500. Use: every Primary CTA across home + prices.
- Log in — Light Purple Ghost: bg `rgba(133, 91, 251, 0.16)` (16% Light Purple `#855bfb`); color `#7132f5`; radius 12px; padding 8×12; 36px / 14px·500. Use: header Login Outline.
- Open your free account — Light Surface Secondary: bg `rgb(245, 245, 245)` = `#f5f5f5`; color `rgb(13, 13, 13)` = `#0d0d0d`; radius 12px; padding 15×16; 52px / 16px·500. Use: Secondary on dark hero.
- Most popular / Tradable (661) / 24H — Filter Pills (prices): bg `#ffffff`; color `rgb(16, 17, 20)` = `#101114`; radius 10px; padding 6-8×8-12; 28-36px / 12-14px·500. Use: filter chips in market table.
- USD — Currency Selector (compact): bg `rgba(104, 107, 130, 0.12)` (12% Cool Gray); color `rgb(104, 107, 130)` = `#686b82`; radius 8px; padding 8px; 36px / 14px·500. Use: currency selector compact.
- Single-system: 12px Kraken Purple + tiered radius scale 12 / 10 / 8 = Action > Filter > Selector. All weight 500. Padding scales with height.
- Tier 2a getdesign.md/kraken — directory only. Tier 2b `?q=Kraken` — no record. Tier 2 status: unavailable.
- Conflict matrix: Primary bg / radius / padding / height / font, Light Purple ghost, Filter pill, Currency selector — all resolved as canonical. Unresolved: none.
- Philosophy sources: Payward, Inc. founded 2011 San Francisco; Jesse Powell, Thanh Luu, Michael Gronager; Powell's path 2001 / 2010 / 2011 Mt. Gox; survived 2014 / 2017 / 2018 / 2022-2023; $867M at ~$20B; U.S. IPO filed November 2025; Powell stepped back from CEO (leadership succession plan); 2024 expansion into stocks.
- Voice samples (live-verified): "Sign up"; "Log in"; "Try Kraken" / "Sign-up now" / "Get Kraken" / "Confirm eligibility" / "Get in touch"; "Open your free account"; "Most popular" / "Tradable (661)" / "24H" / "USD".
- Verified-against: Tier 1 kraken.com/, kraken.com/prices; Tier 2 refero/getdesign — no record; Founders/funding/IPO: Wikipedia, Contrary Research, Tracxn, Caproasia, Forge Global, Kraken press, Fortune (Jesse Powell SF politics).

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are mention of sibling-only observations, not portable facts and not a claim that the three output files omit them.

- Light Secondary text `#0d0d0d` / `rgb(13, 13, 13)`
- Light Purple hex `#855bfb` (sibling names this as the 16% source of `rgba(133, 91, 251, 0.16)`)
- rgb spellings `rgb(113, 50, 245)` / `rgb(245, 245, 245)` / `rgb(16, 17, 20)` / `rgb(104, 107, 130)`
- Ghost padding `8×12` / height `36px` / font `14px·500` as a Login Outline writing
- Light Secondary padding `15×16` / height `52px` / font `16px·500`
- Filter pill padding `6-8×8-12` / height `28-36px` / font `12-14px·500`
- Currency selector padding `8px` / height `36px` / font `14px·500`
- Sibling-measured labels: `Sign-up now` / `Get Kraken` / `Confirm eligibility` / `Get in touch` / `Log in` / `Open your free account` / `Most popular` / `Tradable (661)` / `24H` / `USD`
- Powell stepped back from CEO (leadership succession plan)
- Fortune (Jesse Powell SF politics)
- sibling tool strings `omd:migrate` / `?q=Kraken`
- sibling atmosphere line that every radius value carries semantic meaning / cleanest financial-tier chrome

Values the sibling shares with the source body (corroboration, not new portable facts): `#7132f5`, `#ffffff`, `#101114`, `#686b82`, `#f5f5f5`, `rgba(133,91,251,0.16)`, 12px primary radius, header 36 / page 48-52, 8-15×12-16, 14-16px·500, 12/10/8 Action/Filter/Selector, Sign up, Try Kraken, Payward, Inc., 2011, Jesse Powell, Thanh Luu, Michael Gronager, $867M, ~$20B, November 2025 IPO, 2024 stocks expansion.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / brand / primary-hover / primary-deep / canvas / foreground / muted / on-primary / hairline / body / success / success-text / error | home + prices (prose-derived) |
| tokens.typography.family.sans | Kraken-Product (UI / Body) |
| tokens.typography.family.mono | IBM Plex Sans (YAML writing; §3 also uses it as a Display fallback) |
| tokens.typography.display-hero / section-heading / sub-heading | Kraken-Brand display roles |
| tokens.typography.feature-title / body / button / caption / small | Kraken-Product UI roles |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl | home + prices |
| tokens.rounded.sm / md / lg / full | home + prices |
| tokens.shadow.micro / subtle | home + prices |
| tokens.components.button-primary / button-outline / button-subtle / button-white / button-secondary | home + prices |
| tokens.components.badge-success / badge-neutral | home + prices |
| tokens.components.card / card-stat / card-featured | home + prices |

Catalog identity `primary_color` `#5741d9` is not a `tokens.colors` key and is not `tokens.colors.primary-hover` `#5741d8`.

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시·동기·소속 분류 포함) | Deleted. The source's own header labels them fictional archetypes informed by Kraken user segments. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). The published positioning line "still here since 2011" lands on Content published strings, not as a biography. A portfolio-share numeral written only in that dropped section (`5%`) is named here as a deleted field kind, not as an audience or task fact. |
| §15 "Standard cubic-bezier" curve value | Deleted at the curve-value boundary. The source names no numeric curve. Duration tokens, the continuous pulse, the no-bounce stance, live price flashes, and reduced-motion stay. |
| §9 Agent Prompt Guide — construction prompts | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Brand Kraken Purple `#7132f5`, Dark variant `#5741d8`, Text Near Black `#101114`, Secondary text `#9497a9`, Background White `#ffffff` — Foundations semantic color. Hero Kraken-Brand 48px weight 700, letter-spacing -1px, Purple CTA `#7132f5`, 12px radius, 13px 16px padding — Type roles Display Hero + Components Primary Purple.

## Derived editorial inventory

Portable `DESIGN.md` carries 40 complete B2a qualifications. This table is 40 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 `:9` | Two inspected public URLs as this contract's token surfaces; `prose-derived` class; `#5741d9` kept off `#5741d8`; values stay attached |
| 2 | Experience Scope ¶2 `:11` | Clean / trustworthy / commanding / professional / UI-workhorse atmosphere |
| 3 | Experience Scope ¶3 `:13` | Founding-and-survival narrative as context that does not supply interface tokens |
| 4 | Primary tasks `:19` | Selecting the three recorded surfaces and labels as primary tasks; not from the persona section |
| 5 | Audience `:28` | Biography-drop (no name, age, city, motivation, or affiliation classification); group-level long-term holders, professional traders, institutional clients |
| 6 | Distinctive traits `:32` | Grouping the recorded Key Characteristics as the distinctive layer |
| 7 | Principles `:43` | The five numbered items and their UI implications |
| 8 | Application rules `:53` | The three Do rules and the reasons attached |
| 9 | Avoid `:61` | The two Don't rules and the reasons inside them |
| 10 | Foundations Semantic color `:72` | Role names from the source's labels; primary / brand unmerged; canvas / on-primary unmerged; `#5741d9` off `#5741d8`; Purple Subtle §2 role and footer Light Secondary `#f5f5f5` kept off YAML `tokens.colors` |
| 11 | Foundations Spacing `:107` | Unitless steps unmerged from matching type sizes and padding halves |
| 12 | Foundations Shape `:122` | `sm: 6` / `md: 8` / `lg: 12` / `full: 9999` unmerged from spacing, from footer 12/10/8, and from §5 `50%` |
| 13 | Foundations Elevation `:132` | Whisper-level / subtle-lift reading; featured inset kept on the featured card |
| 14 | Foundations Motion `:136` | Unattributed durations, continuous signature, no-bounce stance; untraceable curve omitted |
| 15 | Motion B3 `:153` | Five-kind promotion gate; partial confirmation insufficient |
| 16 | Typography Official product-use `:163` | "No published type specimen" |
| 17 | Typography Font-evidence wrap `:169` | Licence-boundary / fallback classifications; type roles as YAML / §3 writings, not a new computed extract; typography beyond the two inspected public surfaces stays outside this contract |
| 18 | Typography Family `:179` | Fallback prohibition; `IBM Plex Sans` kept as both YAML mono and §3 Display fallback |
| 19 | Type roles `:183` | YAML unitless ratios kept; YAML use and §3 bands both kept |
| 20 | Assets `:204` | Github slug as identity pointer |
| 21 | Components how-to-read `:215` | Kind and applicability verdicts; generic `Focus` is not a `focus-visible` treatment; not a complete state-coverage claim |
| 22 | Primary Purple `:235` | `13px 16px` / `16px / 500` as this button's geometry; footer 36 / 48-52 / 8-15×12-16 / 14-16px·500 kept beside YAML |
| 23 | Purple Outlined `:263` | 12px as this button's geometry |
| 24 | Purple Subtle `:291` | 8px padding / 12px radius as this button's geometry |
| 25 | White Button `:319` | 10px as this button's geometry rather than the Filter tier |
| 26 | Secondary Gray `:345` | 12px as this button's geometry |
| 27 | Success Badge `:371` | `Kind: non-interactive` because the source records a badge |
| 28 | Neutral Badge `:387` | `Kind: non-interactive`; 8px as this badge's geometry |
| 29 | Default Card `:407` | Kind and map withheld; 24px / 12px as this card's geometry |
| 30 | Stat Card `:426` | Kind and map withheld; §4 Title / Value / Delta as the longer writing |
| 31 | Featured Card `:446` | Kind and map withheld; 16px / 32px as this card's geometry; premium/upgrade-prompts use kept |
| 32 | Light Secondary `:456` | Footer-only row labeled `not in the token set` |
| 33 | Filter pill `:475` | Footer-only 10px row labeled `not in the token set` |
| 34 | Currency / utility selector `:494` | Footer-only 8px row labeled `not in the token set` |
| 35 | Surface state contract `:508` | System-level treatments without attaching every row to destination CTAs |
| 36 | Layout `:539` | §5 lists and seven breakpoint widths as recorded measurements rather than invented cross-viewport specification; footer Primary 36 / 48-52 / 8-15×12-16 kept on the Primary Purple record |
| 37 | Content voice `:546` | Public voice rather than a separately published microcopy guide |
| 38 | Voice samples `:559` | One verbatim line rather than a complete copy manual |
| 39 | Content published-string close `:561` | "still here since 2011" kept as published copy rather than as a persona fact; forbidden-register list as the source's own Don'ts |
| 40 | Named gaps `:597` | Named gaps rather than a domain inventory; unnamed values rather than permissions to invent |

## HTML comment / footer philosophy layer

The source footer records: Verified 2026-05-08 (omd:migrate run 31 — Apple-tier); Tier 1 kraken.com home + /prices live DOM via playwright with the Primary / Light Purple / Light Secondary / 12/10/8 hierarchy; Tier 2 styles.refero.design / getdesign.md — no record; Tier 2 Philosophy/founders/IPO Wikipedia, Contrary Research, Tracxn, Caproasia, Forge Global, Kraken press, Fortune; Style ref `stripe`; Conflicts unresolved: none. Those footer facts that have a portable slot land in Scope, Shape, Primary Purple, Light Secondary, Filter, Selector, and Content. The remainder stays on this ledger.
