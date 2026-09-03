# Patreon provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/patreon/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | patreon |
| name | Patreon |
| country | US |
| category | consumer-tech |
| homepage | `https://www.patreon.com` |
| primary_color | `#000000` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=patreon.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon URL is dual: identity here, and a portable Assets pointer in `DESIGN.md` §3.

Token note from source, kept as ledger metadata and restated as the facts it names in Experience Scope: monochrome system from the 2023 Wolff Olins / Dinamo / Active Theory rebrand; primary = pure black (`#000000`) CTA fill on light surfaces, inverting to white (`#ffffff`) on dark surfaces; single typeface (Oracle) at ultra-light weight 250 for expressive display; marketing site is rem-scaled ≈1.5×; token sizes are design-intent (≈ live computed ÷ 1.5); Periwinkle/cornflower (`#94bbff` / `#71a0ff`) and brand blue (`#002a57`) are expressive accents, not chrome.

## Freshness

| Event | Date |
|---|---|
| added | 2026-06-17 |
| verified | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| surfaces inspected | 2026-06-17 |

The source footer records the verification verbatim as **Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | `https://www.patreon.com` | 2026-06-17 |
| pricing | marketing | `https://www.patreon.com/pricing` | 2026-06-17 |
| brand-announcement | official-doc | `https://news.patreon.com/articles/patreon-redesigned` | 2026-06-17 |
| dinamo-oracle | typeface-partner | `https://abcdinamo.com/custom/patreon` | 2026-06-17 |

### Tier 1 (as listed in the source footer)

- `https://www.patreon.com`
- `https://www.patreon.com/pricing`
- `https://news.patreon.com/articles/patreon-redesigned`
- `https://abcdinamo.com/custom/patreon`

### Tier 2

- getdesign.md/patreon — no entry ("No designs found")
- styles.refero.design/style/bb94375b-cf09-47d4-a2e3-7b332b2c9216 — Patreon entry, corroborates Oracle 250–500 / 30px buttons / 45px inputs / `#1a1a1a` ink / `#002a57` brand blue / shadow-free

### Narrative URLs named in source §11 (not interface tokens)

- Patreon fact sheet: `https://c5.patreon.com/external/press/resources/fact-sheet.pdf`
- Wikipedia: `https://en.wikipedia.org/wiki/Patreon`
- TechCrunch: `https://techcrunch.com/2019/02/12/patreon-story/`
- patreon.com/about: `https://www.patreon.com/about`
- CNBC: `https://www.cnbc.com/2022/03/31/how-jack-conte-sam-yam-built-a-4-billion-start-up-called-patreon.html`

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: live-extract` and `tokens.extracted: 2026-06-17`. That producer string is ledger metadata. The portable body names live-extract and the YAML note in Experience Scope.

## Claim ledger

Claims use YAML anchors from the source: `home` = https://www.patreon.com / playwright getComputedStyle / 2026-06-17; `pricing` = https://www.patreon.com/pricing / playwright getComputedStyle / 2026-06-17.

| claim | surface |
|---|---|
| tokens.colors.primary / on-primary / canvas / ink / black / muted / hairline / near-black / brand-blue / accent-cornflower / accent-periwinkle / accent-sage | home + pricing (frequency scan) |
| tokens.typography.family.display / body | home + pricing (Oracle ×1556) |
| tokens.typography.display-hero / display-section / stat / label-lg / subhead / body / nav / button | home + pricing |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home + pricing |
| tokens.rounded.sm / md / lg / pill / full | home + pricing |
| tokens.shadow.none | home + pricing |
| tokens.components.button-primary-dark | pricing |
| tokens.components.button-primary-light | home |
| tokens.components.button-outline | home |
| tokens.components.nav-item | home |
| tokens.components.search-input | home |
| tokens.components.card-pricing | pricing |
| tokens.components.chip-translucent | home |
| tokens.components.accent-band | home + pricing (band scan) |

## Sibling handling (`web/references/patreon/.verification.md`)

The sibling exists — confirmed with `find web/references/patreon -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-17. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), Chrome UA, goto https://www.patreon.com and https://www.patreon.com/pricing (domcontentloaded + 4.5s settle), Escape/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, nav, buttons, links, inputs, cards, plus a full-DOM background/text-color/font/border-radius frequency scan. Two surfaces inspected.
- Note on scale: marketing site sets an enlarged rem root (≈1.5×); computed `font-size` values read large (hero 187.5px, section 127.5px, subhead 22.5px). Design-intent sizes are ≈ computed ÷ 1.5. Raw computed values recorded verbatim in the sibling; tokens use design-intent sizes and note the live computed value.
- Sources also include https://news.patreon.com/articles/patreon-redesigned and https://abcdinamo.com/custom/patreon.
- Conflict matrix: Typeface Oracle ×1556 / refero Oracle 250–500; headline weight 250 / refero 250–300 @ -0.04 to -0.06em; button radius 30px; input radius 45px; primary CTA fill surface-dependent inversion; body ink `#1a1a1a`; brand blue `#002a57`; shadows none. No conflicts. getdesign.md has no Patreon entry ("No designs found for 'patreon'"). refero corroborates the Tier 1 live inspect on every field.

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts.

- body rem-scaled `font-size: 7.5px` (= 5px design × 1.5 root); `line-height: 11.25px`
- `Times` ×1 (fallback artifact)
- H1 live `letter-spacing: -11.25px`; `line-height: 183.75px`
- H2 live `letter-spacing: -7.65px`; `line-height: 110.925–127.5px`
- H2 "10%" live `letter-spacing: -2.88px`
- H2 subhead live `letter-spacing: -0.45px`
- H2 string "Explore our features"
- H2 string "Patreon pricing"
- nav padding live `11.25px 18px` (source YAML writes `11px 18px`)
- language pill copy "English (United States)"
- document.title home: "Where Creator Communities Thrive — Patreon"; pricing: "Patreon Pricing Plans — Patreon"
- top text color `rgb(149,149,149)` ×7 (`#959595`)
- border-radius `37.5px` ×12 (≈25px design large pills as live computed)
- border-radius `50px` ×4
- border-radius `22.5px` ×7 (pricing surface chips)
- getdesign.md wording "No designs found for 'patreon'" (source footer writes "No designs found")

Values the sibling shares with the source body (corroboration, not new portable facts): Oracle ×1556, 187.5px / 127.5px / 72px / 30px / 22.5px / 13.5px live sizes, weight 250 / 400 / 350, `#000000` / `#ffffff` / `#1a1a1a` / `#999999` / `#cccccc` / `#0f0c13` / `#71a0ff` / `#94bbff` / `#002a57` / `#9fb08b`, `rgba(255,255,255,0.16)`, 30px / 45px / 50% radii, 47px / 45px heights, `15px 21px` padding, `box-shadow: none`, "Where podcasts grow", "Your wildest creative reality", "Start Your Patreon for Free", "Complete creative control", "Earning made easy", "Secure payments handled for you", "No setup headaches", "Get Started", "Get started", "Log in", "Updates", "Find a Creator", "Creators" / "Features" / "Pricing" / "Resources", "Where Creator Communities Thrive".

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / on-primary / canvas / ink / black / muted / hairline / near-black / brand-blue / accent-cornflower / accent-periwinkle / accent-sage | home + pricing |
| tokens.typography.family.display / body | home + pricing |
| tokens.typography.display-hero / display-section / stat / label-lg / subhead / body / nav / button | home + pricing |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home + pricing |
| tokens.rounded.sm / md / lg / pill / full | home + pricing |
| tokens.shadow.none | home + pricing |
| tokens.components.button-primary-dark | pricing |
| tokens.components.button-primary-light / button-outline / nav-item / search-input / chip-translucent | home |
| tokens.components.card-pricing | pricing |
| tokens.components.accent-band | home + pricing |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — construction prompts | Deleted. Tool-facing recreate-the-control prompts. Values they restated are already in Foundations / Typography / Components. |
| §13 fictional archetypes | Dropped. Source labels them fictional archetypes informed by publicly observable segments, not individual people. No name, age, city, occupation, or motivation is re-hosted here (D2, D2a). The source's own grouping string lands in Audience. |
| §15 unattributed cubic-bezier values | Curve values omitted from the portable body. Names and uses kept. Values recorded only on this ledger: `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`; `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` (matches the legacy spec-template `ease-exit` example); `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`. Duration tokens and reduced-motion behavior remain in Foundations Motion. B3 promotion gate stays in Foundations Motion. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Stage Black / Paper White / Obsidian / Grey / hairline / brand blue / Cornflower / Periwinkle / Sage — Semantic color. Full-bleed photo hero, Oracle weight 250, ~125px, line-height 0.98, letter-spacing -0.06em, white text, "PATREON" wordmark, Oracle 9px weight 400, white pill "Get Started" (`#ffffff` fill, `#000000` text, 30px radius, 15px 21px padding), no shadows — Scope + Primary (on dark) + Navigation item. Pricing card white `#ffffff`, 1px solid `#cccccc`, 30px radius, no shadow, title Oracle weight 250, body Oracle 15px weight 400 `#1a1a1a`, black pill CTA — Pricing / Feature Card + Primary (on light). Feature band full-width `#94bbff`, black `#000000` Oracle headline weight 250 — Expressive Accent Band. Search input pill 45px radius, translucent `rgba(255,255,255,0.16)`, "Find a Creator" — Find-a-Creator Search.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Two inspected marketing URLs as this contract's token surfaces; live-extract date kept beside the YAML token note; values stay attached |
| Experience Scope ¶2 `:11` | Restraint-as-a-stage; color deliberately given away; chrome almost never carrying a brand hue; editorial-and-warm / culture-magazine-rather-than-SaaS-dashboard |
| Experience Scope ¶3 `:13` | Ultra-light oversized treatment as the brand's signature; confident enough to whisper at billboard scale so photography and headline carry the page |
| Experience Scope ¶4 `:15` | Mapping the Patreon-authored visual-language quote onto color-as-creator-expression-rather-than-brand-swatch; bands never a fixed button color |
| Experience Scope last unit `:21` | Founding-and-rebrand narrative classified as context that does not by itself supply interface tokens; refuses / embraces / "a brand that gets out of the way" kept as the source's own last-paragraph unit |
| Primary tasks `:27` | Selecting the three surface-or-control outcomes as primary tasks; not from the persona section |
| Audience `:36` | Restricting Audience to the source-stated grouping string; refusing to recast dropped biographies as tasks |
| Distinctive traits `:40` | Groupings and readings of the recorded-value list |
| Principles `:53` | Six numbered items as derived editorial implementation inference; toss-form close; source HTML-comment interpretive claims named |
| Application rules `:64` | Do rules and the reasons attached to them |
| Avoid `:78` | Don't prohibitions and the reasons inside them |
| Semantic color `:95` | Role names from the source; YAML keys unmerged (primary off black; canvas off on-primary); live `color(srgb …)` writings kept beside hex; translucent rgba off the solid map; slightly-softened / hair-warmer / closest-thing-to-a-Patreon-color classified as observation labels |
| Spacing `:124` | Unitless steps kept on their own keys; §5 px restatement beside them; harvested `15px 21px` kept with controls, not as `tokens.rounded.sm: 15` |
| Shape `:138` | Five rounded keys kept; `50%` beside `9999`; ≈25px as a body observation rather than a sixth YAML key; pill `45` off search height `45px` |
| Elevation `:149` | Deliberately shadow-free; depth from photography, black/white contrast, and color bands; hairline as separator; emphasis never elevation |
| Motion `:153` | Philosophy-layer rather than live-inspect; duration table / easing names / morphing-logo / reduced-motion as source-stated rather than computed CSS; omitted `ease-exit` as spec-template match; omitted `ease-enter` / `ease-standard` as unattributed |
| Motion rules `:170` | Motion as first-class identity rather than decoration; interactive UI motion quiet and functional; brand-level morphing as a slower ambient register |
| Font evidence `:180` | Evidence-class sorting; fallbacks not a second identity family; Oracle canonical because live scan and Dinamo partner page agree; no system-font substitution |
| Family `:196` | Computed visible use plus Dinamo partner credit as the reason Oracle is the UI family; fallback list not extended into a second identity family |
| Type roles `:200` | Unitless ratios kept as ratios; YAML `use` verbatim; longer §3 live-computed / tracking column beside them; type sizes off spacing and radius steps |
| Type-rule readings `:215` | One typeface full range; ultra-light as signature; scale is the hierarchy; tight display tracking |
| Assets `:224` | Google s2 favicon as catalog identity pointer; Dinamo URL as typeface-partner page rather than a live specimen; creator photography not replaceable with invented decoration; planned creator-mark tool as a source-narrative name rather than a harvested asset file |
| Capture record graph `:231` | Preserving the source state contract while the catalog graph is not adopted |
| Capture record philosophy-layer `:233` | Source §14 table as philosophy-layer implementation guidance, not live-inspect chrome paints copied onto harvested CTAs |
| Capture record table characterizations `:247` | "No illustration clutter — restraint is the brand"; "Calm and plain"; no-shadow-shimmer; no-spinner-blocking; no generic "Something went wrong" alone; not just "Required"; no celebratory emoji; pill geometry and monochrome preserved |
| Capture / applicability `:249` | Interactive-kind and applicability verdicts; kind-omission on Pricing / Feature Card and Expressive Accent Band; not a complete state-coverage claim; `Primitive type` attached only when YAML records that type; no §4-only component outside the eight token-set records; generic Focus ≠ `focus-visible`; named hover rgba is not keyboard-focus treatment; absence of capture is not `not-applicable`; loading / error / success follow product role not primitive kind |
| Primary (on light) field note `:268` | Light-surface `#000000` fill off dark-hero `#ffffff` fill; height `47px` off search `45px`; radius `30px` as `tokens.rounded.lg`; padding `15px 21px` off `tokens.rounded.sm: 15` |
| Primary (on dark) field note `:295` | Dark-hero `#ffffff` fill off light-surface `#000000` fill; quoted label "Get Started" unmerged from "Get started"; two primaries kept as separate components |
| Outline field note `:322` | Named hover fill `rgba(255,255,255,0.16)` unmerged from nav-item hover and chip default that share the rgba |
| Navigation item field note `:349` | Nav weight `400` off button `350`; padding `11px 18px` off `15px 21px`; "PATREON" wordmark and "Get Started" pill as adjacent chrome rather than this tab's anatomy |
| Find-a-Creator Search field note `:374` | Radius `45px` as `tokens.rounded.pill`; height `45px` as this control's height; font weight `350` with buttons rather than nav `400` |
| Pricing / Feature Card field note `:398` | `#ffffff` as this card's fill and Canvas; `#1a1a1a` as this card's copy and Obsidian Ink; radius `30px` as `tokens.rounded.lg` rather than search `45px` |
| Pricing / Feature Card kind-omission `:400` | Withholding kind and a map because the source supplies no interaction evidence |
| Translucent Utility Chip field note `:414` | Radius `9999px` as `tokens.rounded.full`; `9999px` beside `50%` rather than rewriting one as the other; chip default fill unmerged from outline / nav hover |
| Expressive Accent Band field note `:437` | `#94bbff` as this band's fill and Periwinkle, not Cornflower / Brand Blue / Sage; radius `30px` as `tokens.rounded.lg` |
| Expressive Accent Band kind-omission `:439` | Withholding kind and a map because the source supplies no interaction evidence |
| Layout `:444` | Band-rhythm / photography-over-ornament / headline-as-graphic as layout character; breakpoint table as the source's own named Mobile / Tablet / Desktop spans |
| Content voice `:493` | Warm / creator-first / quietly confident register; tone table plus forbidden register as source-stated marketing-surface voice rather than a complete product-microcopy guide |
| Content captions `:509` | "mission-framed positioning" and "low-friction onboarding" as citation character rather than additional microcopy; no additional synthetic voice samples |
| Named gaps `:547` | List as a catalog of source-unnamed values, not coverage of domains the source never named |

Portable `DESIGN.md` carries 40 complete B2a qualifications. This table is 40 data rows. Preamble sentences on this page are not portable qualifications.

## Proof notes

- `components_harvested: true`
- Uncaptured hover (on the two primary CTAs) / focus-visible / disabled visual treatments are omitted at the component. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Generic Focus is absent from the source and is not promoted to `focus-visible` treatment; focus-visible rows carry no hex (B1)
- Destination CTAs ("Get started" / "Get Started" / "Log in" / "Updates") and nav tabs close loading / error / success as `not-applicable` from role, not from absence of capture (C2)
- Pricing / Feature Card and Expressive Accent Band omit kind and map (C4)
- A `Primitive type` line is attached only when YAML records that type on that component (A1b)
- YAML unitless lineHeight `0.98` / `0.87` / `0.80` / `1.50` / `1.33` preserved as ratios (A1a)
- Official history, 2023 rebrand quotes, and Dinamo partner page are narrative / typeface-partner context; live tokens come from the two inspected marketing surfaces
- Source HTML comment: interpretive claims ("the creator is the brand", "color belongs to creators", "a brand that gets out of the way") are editorial readings connecting Patreon's stated rebrand philosophy to its observed design, not directly quoted Patreon statements
- B3 five-kind gate is written in full in Foundations Motion
