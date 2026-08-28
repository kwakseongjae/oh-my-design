# Hyperconnect provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/hyperconnect/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | hyperconnect |
| name | Hyperconnect |
| country | KR |
| category | consumer-tech |
| homepage | `https://hyperconnect.com` |
| primary_color | `#00dd99` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=hyperconnect.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-09 |
| added | 2026-06-09 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not a Hyperconnect-hosted asset. The catalog identity field is kept here and is classified in the portable document as an identity pointer, not a hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-09 |
| added | 2026-06-09 |
| tokens.extracted | 2026-06-09 |
| Tier 1 live inspect (source footer) | 2026-06-09 |

The source footer records the verification verbatim as **Verified:** 2026-06-09 (live DOM inspect). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source records no conflict row.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | corporate home — hero, nav, buttons, links, headings | `https://hyperconnect.com` | 2026-06-09 |
| about | about / company surface | `https://hyperconnect.com/about/hyperconnect` | 2026-06-09 |

### Tier 1 (as listed in the source footer)

- `https://hyperconnect.com`
- `https://hyperconnect.com/about/hyperconnect`

## Sibling handling (`web/references/hyperconnect/.verification.md`)

The sibling exists — confirmed with `find web/references/hyperconnect -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-09. Method: playwright getComputedStyle (live DOM).
- Sources: `https://hyperconnect.com` (corporate home — hero, nav, buttons, links, headings); `https://hyperconnect.com/about/hyperconnect` (about / company surface).
- `h1` "Our Mission" — Poppins, font-size 62px, weight 700, line-height 72.354px, color rgb(255, 255, 255)
- `h2` "Grow Rapidly & Expand Globally" — Poppins, font-size 46px, weight 700, line-height 55.2px, color rgba(0, 0, 0, 0.8)
- `h3` "Serviced in" — Poppins, font-size 13px, weight 400, color rgb(180, 180, 180)
- nav link "About" — Poppins, font-size 16px, weight 700, color rgb(0, 221, 153) → #00dd99 (brand mint)
- body — noto-sans, font-size 18px, weight 400, line-height 26.1px, color rgba(0, 0, 0, 0.8)
- CTA "Apply" button — bg rgb(34, 34, 34) → #222222, color rgb(255, 255, 255), padding 12px 30px, border-radius 2px, font 14.4px / weight 700, letter-spacing 0.144px
- dialog button "Confirm My Choices" — bg rgb(34, 34, 34) → #222222, color rgb(255, 255, 255), padding 10px 30px, border-radius 2px, font 13.008px / weight 600
- filter button — bg rgb(56, 96, 190) → #3860be, border-radius 17px, border 1px solid rgb(187, 187, 187) → #bbbbbb
- footer link "Hyperconnect" — noto-sans, font-size 14px, weight 400, color rgb(133, 133, 133) → #858585
- accent (computed harvest) — rgb(24, 218, 158) → #18da9e (mint bright); surfaces rgb(248, 248, 248) → #f8f8f8 and rgb(244, 244, 244) → #f4f4f4; tint rgb(205, 220, 242) → #cddcf2

Color reconciliation (rgb → hex) as the sibling lists it:

- rgb(0, 221, 153) → #00dd99 (primary mint)
- rgb(24, 218, 158) → #18da9e (mint bright)
- rgb(34, 34, 34) → #222222 (ink / button bg)
- rgb(56, 96, 190) → #3860be (utility blue)
- rgb(133, 133, 133) → #858585 (label/link)
- rgb(105, 105, 105) → #696969 (body)
- rgb(180, 180, 180) → #b4b4b4 (muted eyebrow)
- rgb(187, 187, 187) → #bbbbbb (hairline)
- rgb(248, 248, 248) → #f8f8f8 / rgb(244, 244, 244) → #f4f4f4 (surfaces)
- rgb(205, 220, 242) → #cddcf2 (blue tint)

Country sources the sibling names (KR requirement; not computed-token surfaces):

- `https://hyperconnect.com/about/hyperconnect` — official corporate About page (company origin, Seoul HQ, mission)
- `https://hyperconnect.com/careers` — official careers/culture surface
- Azar on the Apple App Store (KR storefront) — `https://apps.apple.com/kr/app/azar/id901229276`

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- Computed line-heights `72.354px`, `55.2px`, `26.1px`
- CTA font `14.4px` (source token is 14px)
- Dialog font `13.008px` (source token is 13px)
- Nav link label `About`
- Footer link sample label `Hyperconnect` as a measured footer string (the company name is already in the source identity)
- Careers URL `https://hyperconnect.com/careers`
- App Store listing `https://apps.apple.com/kr/app/azar/id901229276`
- rgb() sample forms

`rgba(0,0,0,0.8)` is not sibling-only: the source §2 records Ink Soft as rendered that way. It is dual: portable Foundations + this ledger.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.17`, `1.20`, `1.45`, `1.50`, `1.63`, `1.86`, `1.00`). They are carried as ratios in the portable body, never converted to a replacement px (A1a).
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `section: 64`; `sm: 2`, `md: 8`, `lg: 17`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step.
- `tokens.spacing.base: 16` is not body 16px and is not nav 16px. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.xl: 30` is not button padding `12px 30px`.
- YAML `tokens.typography.button.tracking: 0.144` sits beside the visible-section form `0.144px`. Neither was chosen as a replacement.
- YAML `tokens.colors.canvas`, `tokens.colors.on-primary`, and `tokens.colors.heading-on-dark` share `#ffffff` and stay three keys.
- Dialog Action tracking `0.13px` is a §4 body value, not a YAML key.

## Claim ledger

| Claim | Surface |
|---|---|
| tokens.colors.primary / primary-bright / ink / ink-soft / canvas / surface / surface-alt / dark / heading-on-dark / body / label / muted / blue-accent / blue-tint / on-primary / hairline | home + about |
| tokens.typography.family.display / body / ui | home + about |
| tokens.typography.hero / section / body-lg / body / nav / link / eyebrow / button | home + about |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home + about |
| tokens.rounded.sm / md / lg / full | home + about |
| tokens.shadow.none / soft / raised | home + about |
| tokens.components.button-primary / button-secondary / button-filter / nav-item / link-footer / card / card-tint / input-text / eyebrow-label / dialog-cookie | home + about |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 4인 (이름·나이·도시·동기·소속 분류 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motives, or affiliation classes (D2, D2a). Audience keeps only the source's own publicly observable segment list: global app users, engineers, recruiters, partners. |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed, and byte-identical to the documented re-injection path in `spec/omd-v0.1.md`. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. The one unique reading-text color `rgba(255,255,255,0.85)` was moved to Foundations semantic color before the section was dropped (A3). |
| §16 Do's and Don'ts (Quick Reference) | Deleted as a duplicate restatement of §7. The §7 list is the portable Application rules / Avoid. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Mint `#00dd99`, Ink `#222222`, White `#ffffff`, surfaces `#f8f8f8` / `#f4f4f4`, heading ink / white on dark, Body `#696969`, ink-soft `#333333`, Label `#858585`, muted `#b4b4b4`, Blue `#3860be`, blue tint `#cddcf2`, Dark `#1c1c1c` — Foundations semantic color. Hero Poppins 62px / 700 / 1.17 / white — Type roles + Primary color. Body noto-sans 18px / 400 — Type roles. Section on `#f8f8f8`, Poppins 46px / 700 / `#222222`, cards white / 8px / soft shadow — Type roles + Content Card. Primary button `#222222` / white / 2px / 12px 30px / noto-sans 14px / 700 / 0.144px / "Apply" — Primary (Ink). Top nav white / Poppins 16px / 700 / `#222222` / active mint — Nav Item. Filter pill `#3860be` / white / 17px / `1px solid #bbbbbb` — Filter Pill. Iteration-guide rules (mint as accent, Poppins 700 / noto-sans Inter 400, ink buttons 2px / 30px, whitespace and light/dark cadence, blue as utility, bimodal type scale) — Principles + Application rules + Avoid + Type rules. Unique §9 hero-body color `rgba(255,255,255,0.85)` — Foundations semantic color.

## Derived editorial inventory

Portable `DESIGN.md` carries complete B2a qualifications. This table is a data inventory of those qualifications. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Two inspected pages as this contract's token surfaces; values stay attached |
| 2 | Experience Scope ¶2 | Employer-brand / Silicon Valley / optimistic-human / geometric-authority / bold-claim / decisive-not-playful / cadence-not-elevation characterizations |
| 3 | Experience Scope ¶3 | Founding-and-acquisition narrative, including the design-duality sentence, as context that does not supply interface tokens |
| 4 | Primary tasks | Selecting the four recorded labels as primary tasks |
| 5 | Audience | Group-level global app users / engineers / recruiters / partners |
| 6 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 7 | Principles | The six numbered items |
| 8 | Application rules | The seven Do rules and the reasons attached |
| 9 | Avoid | The six Don't rules and the reasons inside them |
| 10 | Foundations Semantic color | Defining-accent / near-twin / workhorse / reserved-utility characterizations |
| 11 | Foundations Semantic color close | Prompt-only `rgba(255,255,255,0.85)` kept off the YAML `#ffffff` keys |
| 12 | Foundations Spacing | Unitless steps unmerged from radius, type size, and padding keys; 30px horizontal padding as a recurring rhythm / confident footprint |
| 13 | Foundations Shape | `full: 9999` unmerged from other 8 / 17 uses; Tight named-use as corporate and decisive |
| 14 | Foundations Elevation | Quiet-last-resort elevation reading; Focus row classed as observed Focus, not a `focus-visible` treatment |
| 15 | Foundations Motion | Unattributed durations, roles, signature motions, and reduced-motion |
| 16 | Typography Official product-use | "No published type token" |
| 17 | Typography Declared-only | Fallback stack members are not the brand face |
| 18 | Typography Outside these captures | Typography beyond the two pages sits outside this contract |
| 19 | Typography Family | Fallback prohibition |
| 20 | Type roles | Ratios kept beside tracking forms; Hero `1.17` unmerged from Eyebrow `1.17` |
| 21 | Type rules | Bold-claim / two-family / bimodal-scale readings |
| 22 | Assets | Favicon-service as identity pointer; photography as first-party corporate imagery |
| 23 | Components how-to-read | Kind and applicability verdicts |
| 24 | State record | System-level treatments without per-control observation |
| 25 | State record close | Rows are not attached as visual treatments to destination controls |
| 26 | Layout whitespace | Bright-and-open / cinematic-cadence / content-over-decoration |
| 27 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 28 | Content & Locales | Voice characterization, register reading, and tone table |
| 29 | Content & Locales forbidden register | Keeping the source's forbidden-register list as this contract's voice constraint |
| 30 | Content & Locales close | Byte-exact strings; English gloss may sit beside a line and never replaces it |
| 31 | Layout grid and container | Centered full-bleed hero / multi-column grids / generous-margin centering / alternating bands as vertical rhythm |
| 32 | Recorded unresolved decisions | Named unresolved values rather than permissions to invent |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-06-09; conflicts: none
- components_harvested: true
- Uncaptured hover (except nav mint) / focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history (Seoul founding / Azar / WebRTC / on-device ML / Match Group acquisition / Korean-app-company exit / design-duality sentence) is narrative context, not a token source
- Hyperconnect has no published first-party design system in this packet, so every derived-editorial close uses the toss-form "not Hyperconnect-authored or a separately published UI specification"
