# Monzo provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the Monzo migration. Canonical source remains `web/references/monzo/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | monzo |
| name | Monzo |
| country | UK |
| category | fintech |
| homepage | https://monzo.com |
| primary_color | `#ff4f40` |
| logo | `type: simpleicons`, `slug: monzo` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

The logo slug is a Simple Icons catalog pointer, not a Monzo-hosted brand file. The portable Assets section names it as a catalog pointer.

Source token note (verbatim): primary = Hot Coral (`#ff4f40`) — brand signature on logo, card product, headings; CTA buttons use Midnight Ink (`#091723`) on home and Teal (`#016b83`) on product pages. Custom MonzoSansText/MonzoSansDisplay type system.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| added | 2026-06-22 |
| surfaces inspected | 2026-06-22 |
| tokens.extracted | 2026-06-22 |

Conflicts unresolved: none (Refero confirmed coral as brand-signature / pill-500px / mint surface system; live inspect confirmed identical values).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-web | https://monzo.com/ | 2026-06-22 |
| current-account | product-web | https://monzo.com/current-account/ | 2026-06-22 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://monzo.com/ | 2026-06-22 |
| current-account-live | product-surface | https://monzo.com/current-account/ | 2026-06-22 |
| tone-of-voice | content-guide | https://monzo.com/tone-of-voice/ | 2026-06-22 |
| about | corporate | https://monzo.com/about/ | 2026-06-22 |

### Tier 1

- https://monzo.com/ (homepage, live DOM inspect)
- https://monzo.com/current-account/ (product surface, live DOM inspect)

### Tier 2

- https://styles.refero.design/style/e8a1d114-6924-4f03-acd2-996dd30f15a6 (Monzo — Warm coral on cool mint paper)
- https://getdesign.md/monzo — not found

Those directory findings describe this catalog's coverage. They stay here. They are lookup queries, not portable copy.

## Claim ledger

Claims rest on the source YAML plus the 2026-06-22 live inspect named in the source footer and HTML comment. `home` = https://monzo.com/ / computed-style / 2026-06-22; `current-account` = https://monzo.com/current-account/ / computed-style / 2026-06-22.

| claim | surface |
|---|---|
| tokens.colors.primary `#ff4f40` | home |
| tokens.colors.primary-alt `#f64d3f` | home (flashcard) |
| tokens.colors.midnight `#091723` | home |
| tokens.colors.deep-navy `#112231` | home |
| tokens.colors.teal `#016b83` | current-account |
| tokens.colors.canvas `#ffffff` | home |
| tokens.colors.mint `#f2f8f3` | home / current-account |
| tokens.colors.soft-mint `#e3ebe4` | home |
| tokens.colors.ink `#091723` | home |
| tokens.colors.body `#6b747b` | home |
| tokens.colors.muted `#b5b9bd` | home |
| tokens.colors.on-primary `#ffffff` | home |
| tokens.colors.on-dark `#ffffff` | home |
| tokens.colors.on-midnight `#ffffff` | home |
| tokens.colors.hairline `#c2c8d0` | home |
| tokens.typography.family.display `MonzoSansDisplay` | home |
| tokens.typography.family.body `MonzoSansText` | home |
| tokens.typography.display-hero.size / weight / lineHeight / use `Hero billboard, MonzoSansDisplay ExtraBold` | home |
| tokens.typography.heading-lg.size / weight / lineHeight / use `Section titles (clamp ~48.8px at 1440px)` | home |
| tokens.typography.heading.size / weight / lineHeight / use `Sub-section heads (clamp ~39px)` | home |
| tokens.typography.subheading.size / weight / lineHeight / use `Card heads, H3, footer category (MonzoSansDisplay)` | home |
| tokens.typography.body.size / weight / lineHeight / use `Standard reading text, MonzoSansText` | home |
| tokens.typography.body-sm.size / weight / lineHeight / use `Captions, metadata` | home |
| tokens.typography.button.size / weight / lineHeight / use `Button labels, MonzoSansText SemiBold` | home |
| tokens.typography.nav.size / weight / lineHeight / use `Nav links, MonzoSansText` | home |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home |
| tokens.rounded.xs / sm / md / lg / full | home |
| tokens.shadow.none | home |
| tokens.shadow.float `rgba(0, 0, 0, 0.1) 0px 0px 10px 0px` | home |
| tokens.components.button-primary.* | home |
| tokens.components.button-teal.* | current-account |
| tokens.components.button-white.* | home |
| tokens.components.button-chip.* | current-account |
| tokens.components.input-search.* | home |
| tokens.components.card-mint.* | home |
| tokens.components.card-white.* | home |
| tokens.components.card-dark.* | home |
| tokens.components.badge-coral.* | home |
| tokens.components.nav-tab.* | home |

## Capture selectors

The source packet does not record `data-omd-capture` IDs. Pointers below are the source HTML comment's live-inspect observations.

| Component | Pointer |
|---|---|
| Primary (Home — Midnight Ink) | Nav CTA "Sign up": bg `rgb(9,23,35)` `#091723`; color white; radius 500px; `12px 24px`; 16px/600 MonzoSansText; height 51px |
| Primary (Product — Teal) | Product CTA "Open a personal account": bg `rgb(1,107,131)` `#016b83`; white; radius 500px; `12px 24px`; height 48px |
| Inverse (White on Dark) | Hero dark CTA "Open a free bank account": bg `rgb(255,255,255)`; color `rgb(9,23,35)`; radius 500px; `12px 24px`; height 48px |
| Filter Chip (Active) | "Free features": bg `rgb(59,76,84)` `#3b4c54`; white; radius 64px; `8px 16px`; height 38px |
| Filter Chip (Inactive) | "Paid features": bg `rgb(227,235,228)` `#e3ebe4`; color `#091723`; radius 64px; `8px 16px`; height 38px |
| Display / Heading LG computed companion | H2 "Monzo for all your money" and H1 "Current accounts that keep up": MonzoSansDisplay; `48.8288px`; weight 800 |

## Sibling file

`web/references/monzo/.verification.md` exists. Method: playwright getComputedStyle (live DOM) on https://monzo.com/ and https://monzo.com/current-account/, 2026-06-22. SHA-256 of the sibling file is recorded in the migration log after hashing.

Values that exist in the sibling and not in the source `DESIGN.md` stay in this ledger. They are not portable tokens. Mention here is disposition of the sibling, not use as a portable value.

Sibling-only observations recorded here:

- H2 "Manage your money today": MonzoSansDisplay; `39.0624px`; weight 800; color `rgb(9, 23, 35)` on light. The YAML heading size `39` is portable; this headline string and the `39.0624px` writing are sibling-only.
- Carousel nav button: `background-color: rgba(9, 23, 35, 0.3)`; `color: rgb(255, 255, 255)`; `border-radius: 100%`; height 43px.
- Muted nav link extra geometry: `border-radius: 100px`; `padding: 8px 12px`; height 40px. The inactive color `rgba(9, 23, 35, 0.6)` is portable from the source body.
- Background frequency extra on homepage: `rgba(9,23,35,0.3)` ×20. Source HTML comment frequency (white ×34, midnight ×21, mint-soft ×11, mint ×10) is portable.
- Background frequency (current-account): `rgb(255,255,255)` ×22, `rgb(242,248,243)` ×8, `rgb(1,107,131)` ×8, `rgb(9,23,35)` ×6.
- Text frequency (homepage): `rgb(0,0,0)` ×619, `rgb(255,255,255)` ×328, `rgba(9,23,35,0.6)` ×193, `rgb(9,23,35)` ×142. Source HTML comment body color `rgb(0,0,0)` is portable; these frequency counts are sibling-only.
- Refero result line "Warm coral on cool mint paper — confident restraint with a single hot accent" and Refero-stated rules ("Never use Hot Coral as button background fill"; "500px border-radius for all interactive pills"; "-0.05em letter-spacing on MonzoSansText"; "Layer surfaces via color stepping, not drop shadows"). The matching constraints already stand in the source body and are portable there; the Refero wording stays here.

## Proof notes

- Conflicts unresolved: none
- components_harvested: true
- tokens.source: reconciled
- Live inspect method named in the source: playwright getComputedStyle on the two URLs above
- Uncaptured hover/focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Source HTML comment: body color `rgb(0,0,0)` on MonzoSansText 16px / 22.4px. YAML `ink` remains `#091723`. Those two writings stay unmerged.
- Official tone-of-voice guide and About page are content-guide / mission context. They do not supply computed interface tokens except where the source DESIGN.md itself records a value.
- No published first-party UI specification was found; the B2a example form is used as-is. The tone-of-voice guide is a content spec, not a UI specification.

## Derived editorial inventory

Sites in the portable `DESIGN.md` that carry an adjacent complete qualifier. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification." This is an index of the derived-reading sites, not a completeness claim. Portable `DESIGN.md` carries 36 complete B2a qualifications. This table is 36 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:11` | Two homepage / current-account URLs as this contract's token surfaces; values stay attached to the surface that established them; YAML `heading-lg` use as that role's clamp note rather than as a layout breakpoint |
| Experience Scope `:13` | Source token note as a register split — `#ff4f40` not `#f64d3f`; `#091723` midnight/ink not `#112231`; `#016b83` as product-page CTA not a second midnight; `#ffffff` roles unmerged |
| Experience Scope `:15` | Atmosphere characterizations (recognisable neobank; audacious choice; ceremonial accent; chiaroscuro; warm but engineered; geometry as peer distinction; nearly-zero shadows) as source readings, not a published UI specification |
| Experience Scope `:21` | 2015 founding, named founders, Starling Bank, 2016 beta, 2017 licence, radical transparency, named high-street banks, waitlist, coral card as social signal, 15 million customers as of 2025, under-16s / 16-17s / business customers as narrative rather than interface tokens |
| Experience Scope `:25` | Refusal (dark-navy-and-gold; buried fee disclosure; account as a product to be sold) and embrace (consumer-app sensibility; single audacious coral; plain English for an intelligent adult) as source readings |
| Primary tasks `:31` | Selecting the three YAML component-use strings as primary tasks; not lifting tasks from source §13 fictional archetypes |
| Audience `:40` | Dropping fictional archetypes; carrying no name, age, city, motivation, or affiliation classification; keeping only the source §13 header's publicly observable Monzo user segments wording |
| Distinctive traits `:44` | Unmerged-role extras (coral vs alt; midnight vs deep-navy; teal vs midnight; white roles; 500px vs 64px vs 4px vs 32px; Display 800 vs Text 400/600; `-0.05em` as Text tracking; search-only float) plus bullet characterizations warm-rounded-distinctly-non-banking and 500px-as-the-brand's-most-recognisable-gesture |
| Principles `:56` | Five numbered stems plus every UI implication as a reconstruction pairing |
| Application rules `:64` | Source §7 Do list as capture-bound application |
| Avoid `:77` | Source §7 Don't list as reconstruction prohibitions |
| Semantic color `:94` | Role names from token-set keys; pairing each hex to its path; unmerged same-hex roles; `#3b4c54` staying on the chip; muted-nav rgba as §2-only; source-copied characterizations 95%-achromatic-so-coral-retains-maximum-attention, warmer-than-pure-black, fresh-and-clean, slightly-deeper-than-mint, slightly-lighter-than-midnight, teal-complements-coral-without-competing |
| Spacing `:129` | YAML numbers without a replacement px suffix; body px as body-recorded steps; §5 `128px` as §5-only; harvested heights and paddings as component fields |
| Spacing `:131` | Generous breathing room / surface alternation / pill geometry as warmth as source whitespace readings |
| Shape `:137` | Local geometry mapping (4 / 24 / 32 / 64 / 500) rather than a universal radius |
| Shape `:145` | YAML `lg` 64 as a YAML step and as `64px` on the filter chip, unmerged from YAML `full` 500 |
| Elevation `:149` | Elevation-table Use readings plus near-shadowless / background-alternation / mobile-first-flat-surface / lift-based-skeuomorphism-would-feel-out-of-place |
| Motion `:162` | Durations, easing names, signature motions, and reduced-motion as source-stated rather than computed CSS; five-kind promotion gate; spec-template `ease-exit` match |
| Font evidence `:189` | Evidence-class sorting; live `rgb(0,0,0)` unmerged from YAML ink; `48.8288px` as a computed companion; `--default-line-height 1.4` as a CSS variable not a replacement for unitless lineHeight |
| Family `:204` | Two-font discipline; weight 800 as display voice; clamp-driven sizing; SemiBold for interactive labels; letter-spacing on body; opposite-of-understated-European-banking-tradition; not presenting sans-serif as either commissioned family; not substituting a system font; not using the display face for body |
| Type roles `:216` | YAML unitless ratios kept beside §3 px; YAML `use` verbatim; Display Hero 61 unmerged from Heading LG 49 and from `48.8288px`; Body 16/400 unmerged from Button 16/600 and Nav 16/400 |
| Assets `:233` | Simple Icons slug as a catalog identity pointer rather than a captured first-party mark file |
| Assets `:235` | No-shadow app/phone mockups as source-stated image behavior rather than a complete image specification |
| Capture record `:242` | Preserving the source state contract in this file while the catalog graph is not adopted |
| Capture record `:244` | Characterizations inside the §14 table (no illustration by default; honest, calm, no hype; no shadow shimmer; no spinner overlay; no generic Something went wrong alone; no toast with emoji) |
| Capture record `:260` | Applicability by control meaning; YAML primitive type attached only when recorded; Filter Chip Inactive as §4-only; unmerged radii and heights; not a complete state-coverage claim |
| Nav Tab `:491` | Inactive rgba versus active `#091723` plus YAML active coral text as a captured variant, not `focus-visible` evidence |
| Hero dark local recipe `:495` | §9 midnight parent + ~49px headline + `rgba(255,255,255,0.7)` subhead + white pill as a local composition, not a rewrite of YAML Inverse |
| Feature card local recipe `:505` | §9 white 32px card + 25px title + 16px `#6b747b` body on mint as a local composition, not a rewrite of YAML White Feature Card |
| Primary nav local recipe `:517` | §9 white transparent header + 16px/400 links + right-aligned Sign up pill as a local composition, not a rewrite of YAML Nav Tab / Primary Home |
| Layout `:530` | Recorded layout and whitespace philosophy (1200px; full-bleed hero; 2-column white↔mint; Stripe analogue; pill geometry as warmth) as reconstruction |
| Layout `:541` | Breakpoint table as a recorded span of named widths; 51/48/38/~56–64px as surface measurements; YAML 1440px as a type-role clamp note; collapsing and image behavior as recorded rather than complete specifications |
| Content `:568` | Parenthetical characterizations of the four live strings as citation-character, not extra microcopy |
| Content `:575` | §14 empty/loading/error/success strings as the state contract, not extra Observed voice samples |
| Content `:579` | Through-line (approachability), channel table, and forbidden-register list as reconstruction; the three official principle names remain Monzo-authored |
| Named gaps `:625` | List as unnamed values rather than as coverage of domains the source never named |

No published first-party UI specification was found; the B2a example form is used as-is.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 fictional archetypes (4 people; names, ages, and cities included) | Not promoted. Audience in the portable body is the source §13 header's publicly observable segment wording only. No name, age, city, motivation, or affiliation classification is carried (D2, D2a). |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Unique values it named (`rgba(255,255,255,0.7)` subhead; ~49px white headline on midnight; 25px title / 16px `#6b747b` body on a 32px white card; nav composition) already have receiving slots as local recipes. |
| Unattributed cubic-bezier curves for `ease-enter` / `ease-exit` / `ease-standard` | Curve values omitted. Token names and uses kept. `ease-exit` matches the legacy spec-template example. Durations and signature-motion statements were not deleted. B3 five-kind promotion gate stays in portable Motion. |
| Sibling-only computed values listed under Sibling file | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |
