# Instacart provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/instacart/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | instacart |
| name | Instacart |
| country | US |
| category | ecommerce |
| homepage | `https://www.instacart.com` |
| primary_color | `#108910` |
| logo.type | simpleicons |
| logo.slug | instacart |
| omd format (source) | 0.1 |
| verified | 2026-06-22 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The YAML homepage is `https://www.instacart.com` (no trailing slash). The source body and footer write `https://www.instacart.com/`. Both spellings are kept. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The Simple Icons slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Simple Icons identifier, not an Instacart-hosted asset URL. The catalog identity field is kept here and is classified in the portable document as an identity pointer, not a hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| Tier 1 live inspect (source footer) | 2026-06-22 |

The source footer records the verification verbatim as **Verified:** 2026-06-22. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | homepage, live computed style | `https://www.instacart.com/` | 2026-06-22 |
| kroger-storefront | store storefront, live computed style | `https://www.instacart.com/store/kroger/storefront` | 2026-06-22 |

### Tier 1 (as listed in the source footer)

- `https://www.instacart.com/`
- `https://www.instacart.com/store/kroger/storefront`

### Tier 2

- getdesign.md/instacart — not found (no entry)
- styles.refero.design?q=instacart — no results for Instacart

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names (live CTA/add-to-cart green `#108910` = `rgb(16,137,16)`; dark Kale green `#003D29` as brand dark surface; forest green `#1E6F30` for Instacart+ banners; custom Instacart Sans throughout):

> primary = live CTA/add-to-cart green (#108910 = rgb(16,137,16)); dark Kale green (#003D29) as brand dark surface; forest green (#1E6F30) for Instacart+ banners. Custom Instacart Sans font throughout.

## Sibling handling (`web/references/instacart/.verification.md`)

The sibling exists — confirmed with `find web/references/instacart -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-22. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), goto https://www.instacart.com/ domcontentloaded + 3500ms settle, modal dismissal pass, then getComputedStyle on body, h1/h2/h3, buttons, inputs, filter chips, and full-DOM background/text color frequency scan. Secondary surface: https://www.instacart.com/store/kroger/storefront — add-to-cart buttons, store tabs, storefront search.
- body: `font-family: "Instacart Sans", "Instacart Sans Fallback", Arial, sans-serif`; `color: rgb(0, 0, 0)`; `font-size: 16px`; `background-color: rgba(0, 0, 0, 0)` (transparent over white canvas)
- h1 "Order groceries for delivery or pickup t": `color: rgb(255, 255, 255)`; `font-size: 26px`; `font-weight: 600`; `font-family: "Instacart Sans"`
- h2 "Stores to help you save": `color: rgb(0, 0, 0)`; `font-size: 24px`; `font-weight: 700`; `font-family: "Instacart Sans"`
- nav Log In button: `background-color: rgb(255, 255, 255)`; `color: rgb(36, 37, 41)` (#242529); `border-radius: 20px`; `padding: 0px 16px`; height 40px; `font-size: 16px`; `font-weight: 400`; `border: 1px solid rgb(199, 200, 205)` (#C7C8CD)
- nav Sign Up button: `background-color: rgb(16, 137, 16)` (#108910); `color: rgb(255, 255, 255)`; `border-radius: 20px`; `padding: 0px 16px`; height 40px; `font-size: 16px`; `font-weight: 400`
- hero CTA "Sign up to get $0 delivery fee*": `background-color: rgb(16, 137, 16)` (#108910); `color: rgb(255, 255, 255)`; `border-radius: 28px`; `padding: 0px 16px`; height 56px; `font-size: 16px`; `font-weight: 400`
- search INPUT: `background-color: rgba(0, 0, 0, 0)`; `border: 1px solid rgb(199, 200, 205)` (#C7C8CD); `border-radius: 28px`; `padding: 0px 48px 0px 0px`; height 56px; `font-size: 15px`; `color: rgb(52, 53, 56)` (#343538); `box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 4px 0px inset`
- filter chip active "All": `background-color: rgb(36, 37, 41)` (#242529); `color: rgb(255, 255, 255)`; `border-radius: 999px`; `padding: 0px 16px`; height 32px; `font-size: 14px`; `font-weight: 600`
- filter chip inactive "EBT": `background-color: rgb(232, 233, 235)` (#E8E9EB); `color: rgb(36, 37, 41)` (#242529); `border-radius: 999px`; `padding: 0px 16px`; height 32px; `font-size: 14px`; `font-weight: 600`
- filter chip inactive "Fastest": same as EBT chip
- background frequency scan: `rgb(255,255,255)` ×28, `rgb(246,247,248)` ×25 (#F6F7F8), `rgb(232,233,235)` ×14 (#E8E9EB), `rgb(255,220,35)` ×10 (third-party Instacart+ logo yellow), `rgb(16,137,16)` ×3 (#108910), `rgb(30,111,48)` ×2 (#1E6F30), `rgb(0,61,41)` ×1 (#003D29)
- text color frequency: `rgb(0,0,0)` ×567, `rgb(52,53,56)` ×367 (#343538), `rgb(36,37,41)` ×249 (#242529), `rgb(16,137,16)` ×22 (#108910 — green text links)
- storefront Add to cart: `background-color: rgb(16, 137, 16)` (#108910); `color: rgb(255, 255, 255)`; `border-radius: 20px`; height 36px; `font-size: 16px`; `font-weight: 400`
- storefront Log In CTA: `background-color: rgb(16, 137, 16)` (#108910); `border-radius: 24px`; `padding: 8px 16px`; height 48px; `font-size: 14px`; `font-weight: 600`; `color: rgb(255, 255, 255)`
- storefront Delivery tab (active): `background-color: rgb(255, 255, 255)`; `color: rgb(52, 53, 56)` (#343538); `border: 2px solid rgb(52, 53, 56)`; `border-radius: 20px`; height 40px
- storefront Pickup tab (inactive): `background-color: rgba(0,0,0,0)`; `color: rgb(199, 200, 205)` (#C7C8CD); `border-radius: 20px`; height 40px
- dark green surface div: `background-color: rgb(0, 61, 41)` (#003D29); height 230px (Instacart+ banner)
- forest green div: `background-color: rgb(30, 111, 48)` (#1E6F30); height 72px

Sibling-only items (mention, not portable use). This sentence names the field kind so the row can be found; it does not assert that those strings are absent from this file:

- body computed `color: rgb(0, 0, 0)` as a live body ink (the source portable ink is `#242529`)
- h1 computed `color: rgb(255, 255, 255)` (the source portable hero type role does not assign that hex to the H1)
- `rgb(255,220,35)` third-party Instacart+ logo yellow
- Instacart+ banner height `230px`
- forest-green div height `72px`
- frequency counts (×28 / ×25 / ×14 / ×10 / ×3 / ×2 / ×1 / ×567 / ×367 / ×249 / ×22)
- getdesign.md page text "No designs found for instacart."

Those sibling-only strings are transcribed in the bullet list above. They are not promoted into `DESIGN.md`.

Values the sibling shares with the source body (corroboration, not new portable facts): `#108910`, `#003D29`, `#1E6F30`, `#242529`, `#343538`, `#F6F7F8`, `#E8E9EB`, `#C7C8CD`, Instacart Sans, 20px / 28px / 999px radii, 40px / 56px / 36px / 32px / 48px heights, "Order groceries for delivery or pickup", "Stores to help you save", "Sign up to get $0 delivery fee*", "All", "EBT", "Fastest".

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / primary-dark / primary-forest / on-primary / ink / ink-secondary / canvas / surface / surface-alt / hairline / on-dark | home + kroger-storefront |
| tokens.typography.family.sans / family.fallback | home + kroger-storefront |
| tokens.typography.display-hero / section / body / body-sm / button / button-sm | home + kroger-storefront |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home + kroger-storefront |
| tokens.rounded.sm / md / lg / pill / full | home + kroger-storefront |
| tokens.shadow.card / input | home + kroger-storefront |
| tokens.components.button-primary / button-nav / button-secondary / search-input | home |
| tokens.components.button-add / button-dark / store-tab | kroger-storefront |
| tokens.components.filter-chip-active / filter-chip / card-surface | home + kroger-storefront |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or occupation classifications (D2, D2a). |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed, and byte-identical to the documented re-injection path in `spec/omd-v0.1.md`. |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Instacart Green `#108910`, Kale Dark Green `#003D29`, Canvas White `#ffffff`, Surface Grey `#F6F7F8`, Chip Grey `#E8E9EB`, Ink Near-Black `#242529`, Ink Secondary `#343538`, Hairline `#C7C8CD` — Foundations semantic color. Search 56px / 28px / `1px solid #C7C8CD` / Instacart Sans 15px — Search. Hero CTA `#108910` / white / 28px / 56px / `16px / 400 Instacart Sans` / 16px horizontal padding — Hero Primary CTA. Filter pills `#242529` / white / 999px / 32px / `0 16px` / `14px / 600` and inactive `#E8E9EB` / `#242529` — Filter Chip Active / Inactive. Nav Log In white / `#C7C8CD` 1px / 20px / 40px / `16px / 400` and Sign Up `#108910` / white / same geometry — Nav Log In / Nav Sign Up. Product card `#F6F7F8` / 8px / no shadow and Add `#108910` / white / 20px / 36px / 16px Instacart Sans — Surface Card + Add to Cart. Iteration-guide rules (Instacart Sans 400 default, 600 for dense UI, `#108910` for every action, `#F6F7F8` surfaces, pill scale 8→20→28→999, `#242529` not pure black, `#003D29` Kale reserved) — Principles + Application rules + Avoid + Type rules + Shape.

## Derived editorial inventory

Portable `DESIGN.md` carries 34 complete B2a qualifications. This table is 34 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Grocery e-commerce infrastructure; two inspected pages as this contract's token surfaces; values stay attached |
| 2 | Experience Scope ¶2 | "do-this" signal / geometric friendly aperture / graduated rounding as interactivity hierarchy |
| 3 | Experience Scope ¶3 | Founding-and-rebrand narrative as context that does not supply interface tokens |
| 4 | Primary tasks | Selecting the five recorded labels as primary tasks |
| 5 | Audience | Group-level busy professionals, parents, elderly or mobility-limited shoppers |
| 6 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 7 | Principles | The five numbered items and their UI implications |
| 8 | Application rules | The seven Do rules and the reasons attached |
| 9 | Avoid | The six Don't rules and the reasons inside them |
| 10 | Foundations Semantic color | Green-as-action / Kale-as-immersion / forest-as-Instacart+ / cool-grey-as-hierarchy / ink-as-slightly-warm-not-pure-black characterizations |
| 11 | Foundations Semantic color On-Dark | `tokens.colors.canvas`, `tokens.colors.on-primary`, and `tokens.colors.on-dark` stay unmerged despite a shared hex |
| 12 | Foundations Spacing | Unitless steps unmerged from matching radius keys, type sizes, and padding halves |
| 13 | Foundations Shape | `full: 999` unmerged from `9999`, matching spacing keys, and type size; named uses kept on their own rows; Medium 8px as the workhorse |
| 14 | Foundations Elevation keep-both | Two inset spellings unmerged; card inset stays a token-set record, not a product-card drop shadow |
| 15 | Foundations Elevation | Clean / fast / mobile-native reading of the shadow-free product |
| 16 | Foundations Motion | Unattributed durations, roles, and rules; three untraceable curve values omitted |
| 17 | Typography Official product-use | "No published type token" |
| 18 | Typography Official distributed asset | No exclusive downloadable font package |
| 19 | Typography Declared-only | Fallback stack members are not the brand face |
| 20 | Typography License | Custom family without an Instacart-issued license notice |
| 21 | Typography Outside these captures | Typography beyond the two pages sits outside this contract |
| 22 | Typography Family | Single-family restatement; fallback prohibition |
| 23 | Type roles | Six token-set roles kept on their paths; 15px search size stays on the search component |
| 24 | Type rules | Default-weight / dense-UI / monolithic-voice readings |
| 25 | Assets | Simple Icons slug as identity pointer; Instacart Plak as narrative, not a current type token |
| 26 | Components how-to-read | Kind and applicability verdicts |
| 27 | State record | System-level treatments without per-control observation |
| 28 | State record close | Rows are not attached as visual treatments to destination controls; add-to-cart cites matching system-level treatments |
| 29 | Layout whitespace | Utilitarian density / grey-as-separator / search bar anchoring the user journey / full-width hero search |
| 30 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 31 | Content & Locales | Voice characterization, register reading, and tone table |
| 32 | Content Forbidden register | Premise-to-register causal |
| 33 | Content & Locales close | Byte-exact published strings; a gloss may sit beside a line and never replaces it |
| 34 | Recorded unresolved | Named values, not a license to invent |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-06-22; conflicts: none
- components_harvested: true
- Uncaptured hover / focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history is narrative context, not a token source. The source's own §11 strings kept as narrative facts: `2012`; `Apoorva Mehta`; `San Francisco`; `Y Combinator`; `Sequoia Capital`; `Costco`; `Kroger`; `Safeway`; `Whole Foods`; `empowering retailers`; `2022` rebrand; `Instacart Plak`; `carrot orange`; `2023`; `NASDAQ`; `CART`; `Shop at [Retailer]`; speed transparency; savings messaging; EBT acceptance. They do not by themselves supply interface tokens.
- No separately published Instacart UI specification is named in the source. Every derived-editorial close uses the toss-form `not Instacart-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석)
