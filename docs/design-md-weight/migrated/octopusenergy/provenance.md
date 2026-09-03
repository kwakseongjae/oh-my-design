# Octopus Energy provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the Octopus Energy migration. Canonical source remains `web/references/octopusenergy/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | octopusenergy |
| name | Octopus Energy |
| country | UK |
| category | consumer-tech |
| homepage | https://octopus.energy |
| primary_color | `#f050f8` |
| logo | `type: favicon`, slug `https://www.google.com/s2/favicons?domain=octopus.energy&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-23 |
| components_harvested | true |

Token note from the source, quoted in full:

> primary = live CTA magenta (#f050f8); canvas = deep indigo (#100030); h1/h2 cyan (#60f0f8); nav ghost text (#f0ffff). Brand owns Chromatophore custom font.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-23 |
| tokens.extracted | 2026-06-23 |
| surfaces inspected | 2026-06-23 |

Conflicts unresolved: none (source footer). Sibling live sample for the tariffs-page large `Get a quote` foreground is recorded below as sibling-only and is not used to rewrite the source's `#f0ffff` on that control.

## Sibling verification file (E2)

`web/references/octopusenergy/.verification.md` exists and was read in full (`ls -la` + read). It is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish, and no structural classification from it (frequency ranks, method timings, sibling-only labels) was promoted into a portable-body fact.

- **Inspected:** 2026-06-23
- **Method (verbatim):** playwright getComputedStyle (live DOM) — global playwright (chromium, headless), goto homepage + tariffs page, domcontentloaded + 3500ms wait, cookie/modal dismissal pass, then `getComputedStyle` on body, H1/H2/H3, buttons, inputs, nav, and full-DOM background/text color frequency scan.

Sibling-only observations kept here and **not** written into the portable body:

- body computed `line-height: 24px` (the portable type table keeps YAML unitless `1.5` / `1.11` and the source table's parenthetical px equivalents; it does not add this body 24px as a type role)
- BUTTON `That's cool` computed height `46px` (the portable 46px stays on nav buttons, which is the job the source §8 assigned)
- BUTTON `No thanks` (ghost): transparent background, magenta `#f050f8` text, `border: 2px solid rgba(0,0,0,0)`, radius 12px — a sibling-only control and a sibling-only published label
- A `Read more` (homepage body link): `#60f0f8`, 18px / 500 — sibling-only published label for the inline-link geometry the source already named
- A `Get a quote` on the tariffs page, large CTA: sibling sample `color: rgb(16, 0, 48)` (`#100030`); the legacy DESIGN.md YAML and §4 write that control's text as `#f0ffff`. The portable body keeps `#f0ffff`. This sibling sample is not used to close or rewrite that field.
- Direct favicon `https://octopus.energy/favicon.ico` (200, 15086 bytes) and SimpleIcons `https://cdn.simpleicons.org/octopusenergy` (404)
- Frequency extras beyond the source HTML comment: background `#f0ffff` ×6, `#5840ff` ×2, `rgb(255, 255, 255)` ×2; text `rgb(0, 0, 0)` ×87, `#100030` ×42, `#f050f8` ×6
- Google favicon byte size **1879 bytes** and the 450-byte generic-globe threshold

## Evidence class

| Domain | Surface | What it establishes | What it does not establish |
|---|---|---|---|
| Homepage marketing | `https://octopus.energy/` | Deep indigo canvas `#100030`, Chromatophore, cyan H1/H2, magenta cookie/hero CTA, hero postcode Arial 600, Constantine as illustration | Tariffs-page large-CTA foreground as a different hex from the source record |
| Tariffs marketing | `https://octopus.energy/tariffs/` | Full-width transparent postcode `#postcode`, large 56px Get a quote, 18px / 500 Chromatophore on that CTA as the source wrote it | A computed easing curve on that CTA |
| Official narrative | source §11, classified there as widely documented public facts | 2015 founding, Greg Jackson, Kraken, Which? Recommended Provider nine consecutive years, UK's largest domestic energy supplier by customer numbers | Current CSS values |
| Philosophy layer | source §12–§15 and trailing comment | Principles, state treatments, motion durations and rules as source prose | Computed per-component hover/easing |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://octopus.energy/ | 2026-06-23 |
| tariffs | marketing | https://octopus.energy/tariffs/ | 2026-06-23 |

## Sources

### Tier 1

- https://octopus.energy/ (homepage, live DOM computed style); title "Octopus Energy: The UK's most awarded energy supplier"
- https://octopus.energy/tariffs/ (tariff products page, secondary live inspect); title "All our tariffs | Octopus Energy"

### Tier 2 (no usable record)

- getdesign.md/octopusenergy — HTTP 200 but "No designs found for octopusenergy" — 0 DESIGN.md files indexed
- styles.refero.design/?q=octopus+energy — no matching brand card; only unrelated energy brands (T1 Energy, ON.energy) appeared

Both Tier 2 sources returned no data for this brand. All token and component values are sourced exclusively from Tier 1 live inspect.

## Claim ledger

Claims use YAML anchors from the source: `home` = homepage live computed / 2026-06-23; `tariffs` = tariffs live computed / 2026-06-23.

| claim | surface |
|---|---|
| tokens.colors.primary `#f050f8` | home, tariffs |
| tokens.colors.primary-border `#f050f8` | home, tariffs |
| tokens.colors.canvas `#100030` | home, tariffs |
| tokens.colors.canvas-alt `#180048` | home |
| tokens.colors.brand-accent `#5840ff` | home |
| tokens.colors.cyan `#60f0f8` | home, tariffs |
| tokens.colors.foreground `#f0ffff` | home, tariffs |
| tokens.colors.on-primary `#100030` | home |
| tokens.colors.muted `#a49fc8` | home |
| tokens.typography.family.sans `Chromatophore, helvetica, arial, sans-serif` | home, tariffs |
| tokens.typography.display-hero size/weight/lineHeight/use | home |
| tokens.typography.section size/weight/lineHeight/use | home |
| tokens.typography.subsection size/weight/lineHeight/use | home |
| tokens.typography.body size/weight/lineHeight/use | home |
| tokens.typography.body-sm size/weight/lineHeight/use | home |
| tokens.typography.caption size/weight/lineHeight/use | home |
| tokens.typography.button size/weight/lineHeight/use | home |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home |
| tokens.rounded.sm / md / lg / full | home |
| tokens.shadow.none | home, tariffs |
| tokens.components.button-primary.* (`type: button`) | home |
| tokens.components.button-primary-lg.* (`type: button`) | tariffs |
| tokens.components.button-outlined.* (`type: button`) | home |
| tokens.components.button-ghost.* (`type: button`) | home |
| tokens.components.input-postcode-hero.* (`type: input`) | home |
| tokens.components.input-postcode-tariffs.* (`type: input`) | tariffs |
| tokens.components.button-hero-cta.* (`type: button`) | home |
| tokens.components.nav-link.* (`type: tab`, active `text #f0ffff on #180048 background`) | home |
| tokens.components.card-product.* (`type: card`) | home |
| tokens.components.badge-trust.* (`type: badge`) | home |
| tokens.components.link-inline.* (`type: listItem`) | home |
| Voice samples (4, §10) | home |
| Brand narrative 2015 / Greg Jackson / Kraken / Which? Recommended Provider | public facts per source comment |

Values recorded in §9 example prompts but absent from the source frontmatter component records: Trust Indicator Pill padding `4px 12px`; Product Feature Card product name 16px Chromatophore weight 500 `#100030`. Moved into those portable component records rather than dropped.

Same-hex `#f050f8` keeps two source jobs unmerged: `tokens.colors.primary` and `tokens.colors.primary-border`. Same-hex `#100030` keeps two source jobs unmerged: `tokens.colors.canvas` and `tokens.colors.on-primary`. Further same-hex jobs that stay unmerged, recorded here because the portable body assigns them separately: `#100030` is also `tokens.components.card-product` fg; `#ffffff` is the hero postcode field background and is not page canvas and is not body text; `#f0ffff` is `tokens.colors.foreground` and also large-tariff-CTA / hero-attached-CTA / tariffs-postcode / trust-pill / nav text; `#180048` is `tokens.colors.canvas-alt` and also product-card bg / trust-pill bg / skeleton / nav-active bg.

## Capture selectors

| Component | Pointer |
|---|---|
| Hero Homepage Postcode Input | `#hero-quote-form-field-postcode` |
| Tariffs Page Postcode Input | `#postcode` |
| Primary (Standard) | cookie accept `That's cool` |
| Outlined / Secondary | cookie `Fine tune` |
| Primary (Large / Tariff CTA) | tariffs `Get a quote` |
| Hero attached CTA | homepage inline `Get a quote` |
| Ghost / Nav | `Energy`, `Heat pumps`, `Log in` |

## Raw live-inspect record (source HTML comment)

- body: font-family: Chromatophore, helvetica, arial, sans-serif; color: rgb(240, 255, 255) #f0ffff; font-size: 16px; bg: rgb(16, 0, 48) #100030
- H1 "Join the UK's most popular energy supplier": font-size: 36px; font-weight: 500; line-height: 54px; color: rgb(96, 240, 248) #60f0f8
- H2 "Everything you need for a cheaper, greener home & business": 36px / 500 / rgb(96,240,248) #60f0f8
- H3 "Most homes could save with our fixed and flexible tariffs": 28px / 500 / rgb(240,255,255) #f0ffff
- Button "That's cool" (primary): bg rgb(240,80,248) #f050f8; color rgb(16,0,48) #100030; radius 12px; padding 12px 16px; font 16px / 500
- Button "Fine tune" (outlined): bg transparent; color rgb(240,80,248) #f050f8; radius 12px; border 2px solid rgb(240,80,248)
- Button "Get a quote" (large primary, tariffs page): bg rgb(240,80,248) #f050f8; color rgb(240,255,255) #f0ffff; radius 12px; padding 16px 20px; height 56px
- Nav links (Energy, Heat pumps, etc.): bg transparent; color rgb(240,255,255) #f0ffff; radius 12px; padding 12px 16px; font 16px / 500
- Postcode input: color rgb(240,255,255); padding 16px; height 60px
- Background frequency: rgb(24,0,72) #180048 ×16, rgb(16,0,48) #100030 ×14, rgb(240,80,248) #f050f8 ×9
- Text frequency: rgb(240,255,255) #f0ffff ×1748, rgb(96,240,248) #60f0f8 ×547

## Evidence-class boundaries carried into the body

- Founding year 2015, CEO Greg Jackson, Kraken platform, Which? Recommended Provider 9 consecutive years, and UK's largest domestic energy supplier are described by the source itself as widely documented public facts.
- The source states that interpretive claims (e.g. "technology company wearing a utility's licence", "Constantine earns affection through character") are editorial readings connecting observed design to positioning.
- Personas (§13) are fictional archetypes informed by publicly observable Octopus Energy user segments. Names are illustrative; they do not refer to real people. They are not re-recorded here.
- Token-level claims are sourced from the live inspection, as the source's trailing comment states.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 | Inspected `https://octopus.energy/` and `https://octopus.energy/tariffs/` as this contract's token surfaces; values stay attached |
| Experience Scope ¶2 | Atmosphere characterizations: rave-poster-turned-utility-brand; neon sign in a midnight sky; fully intentional; exciting, modern, and even joyful; humanist warmth; never cold or corporate; cool counterpoint; disciplined three-color hierarchy; dark-mode-native; flat glow-based depth |
| Experience Scope ¶3 | Founding-and-Kraken narrative as context that does not by itself supply interface tokens; public-facts class; "technology company wearing a utility's licence" as the source's own editorial reading; refuse/embrace pairing through the closing obligation sentence kept as one unit |
| Primary tasks | Selecting the four recorded surfaces and controls as primary tasks; not from the persona section |
| Audience | Biography-drop (no name, age, city, motivation, or affiliation classification); source-named groups UK households switching energy suppliers, early-adopter EV and solar homeowners, sustainability-conscious renters |
| Distinctive traits | Grouping the recorded Key Characteristics as the distinctive layer; readings inside the bullets |
| Principles | The five numbered items and their UI implications, including "the brand earns affection through character, not just price" |
| Application rules | The eight Do rules, the four source iteration constraints, and the reasons attached |
| Avoid | The eight Don't rules and the reasons inside them |
| Foundations Semantic color | Role names from the source's labels; bioluminescent / night-sky / never-decorative / azure-white characterizations; `primary` unmerged from `primary-border`; `canvas` unmerged from `on-primary`; sticky-nav `rgba(16, 0, 48, 0.9)` kept on Canvas Alt as the source wrote it |
| Foundations Spacing | Unitless steps unmerged from matching radii, paddings, type sizes, and max-width |
| Foundations Shape | Four rounded keys unmerged; `full: 9999` kept on its own key; `sm: 4` / `md: 8` without an invented use; attached-CTA split radii and tariffs `0px` kept on those components |
| Foundations Elevation | Tint-not-shadow elevation; "implied blur" and "otherworldly, bioluminescent feel" as the source's own elevation prose |
| Foundations Motion | Philosophy-layer attribution; durations / roles / signature / reduced-motion kept; unsourced cubic-bezier curves omitted |
| Motion B3 gate | Five-kind promotion gate (computed transition properties, animation name, duration, easing, reduced-motion behavior); refusal of a partial confirmation; official documentation of a single curve or duration is not that gate |
| Typography Font evidence | Evidence-class application readings; Chromatophore as owned custom face rather than a published type specimen; Arial 600 as a live computed control; no distributed file URL; no monospace on marketing surfaces; no license string |
| Typography Family | Chromatophore as the sole marketing face; Arial 600 as a recorded control exception rather than a second brand family; fallback never substitute |
| Type roles | YAML unitless `1.5` / `1.11` kept beside §3 parenthetical px; YAML `use` and §3 notes as two writings; `body-sm` unmerged from Body / Nav and from `button` |
| Typography rules | Four source typography principles; `button` lineHeight `1.11` not rewritten into `1.5` |
| Assets | Google s2 slug as catalog identity pointer; Constantine as first-party illustration content rather than a published illustration specification; the source's character-not-whitespace photography-replacement reading of that illustration |
| Components Capture record | Role-based applicability; kind and map omitted where interactive-kind evidence is absent; YAML primitive type only when recorded; qualitative hover without a hex; not a complete state-coverage claim |
| State record | Ten-row state contract as composed, uncomputed treatments |
| State non-attachment | System-level treatments not attached to destination controls; quote CTAs cite postcode loading/success; postcode fields cite empty/error |
| Product Feature Card A3 keep | Keeping the agent-prompt-only product-name metric on the card rather than dropping it with the prompt guide |
| Trust Indicator Pill A3 keep | Keeping the agent-prompt-only padding on the pill rather than dropping it with the prompt guide |
| Layout Whitespace | Dark-canvas breathing room; color as separator; illustration as content |
| Layout Responsive | Breakpoint table and collapsing rules; inspections taken as a computed-style pass rather than measured across viewports |
| Layout measurement keep-both | Nav `~60px` unmerged from nav-button `46px` and from postcode `60px`; `56px` / approximately `1200px` kept on the jobs the source assigned |
| Content Voice and tone | Warm / direct / cheeky register; "casual invitation" reading; genuine-rather-than-performed reading; the tone table |
| Content Voice samples | Parenthetical captions (welcoming not boastful / benefit-led / plain and accessible / confident claim with data behind it) on four verbatim live strings |
| Content Forbidden register | Corporate energy jargon, FOMO pricing urgency, vague greenwashing, defensive contract language, excessive exclamation points |
| Content Locale bound | UK English and UK postcode as recorded copy and a recorded market rather than as a complete locale profile |

Portable `DESIGN.md` carries 32 complete B2a qualifications. This table is 32 data rows. Preamble sentences on this page are not portable qualifications.

## Omission ledger

| Omitted | Reason |
|---|---|
| §13 personas — three named fictional archetypes with ages and cities, introduced by the source as fictional archetypes informed by publicly observable audience groups | Fictional biography. Not promoted, and deliberately not re-recorded here, not even as names or cities. The source's own group-level segments (UK households switching energy suppliers, early-adopter EV and solar homeowners, sustainability-conscious renters) survive in the body's Audience. |
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | The three exact curves carry no attribution in the source, whose motion section is part of an unsourced philosophy layer; `ease-exit` is the same value carried by the legacy authoring template. Token names, durations, and uses survive in the body; the curves are dropped rather than promoted. |
| §9 tool-facing prompt wrappers, iteration checklist restatement, and the quick color reference restatement | Tool-specific prompt packaging with no receiving slot. The value pairs that existed only there — Trust Indicator Pill padding `4px 12px`, and Product Feature Card product name 16px Chromatophore weight 500 `#100030` — were moved into Components instead of dropped. |
| Original H1 `# Design System Inspiration of Octopus Energy` | Core identity `# Octopus Energy Design System` replaces it. |

## Proof notes

- `tokens.source: live-extract`, `components_harvested: true`, `logo.type: favicon` are identity metadata in this file (A1c). The continuous strings `tokens.source: live-extract` and `components_harvested: true` appear in this Proof notes paragraph.
- Interaction expansions: the source records default component observations plus qualitative motion-rule hover (magenta slightly lighter; outlined fill) without computed hexes. Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- The source never records `focus-visible` as a captured state; no `focus-visible` treatment value appears anywhere in the outputs.
- Product Feature Card and sticky top nav chrome carry no interactive-kind evidence, so kind and the state-applicability map are omitted for them.
- Trust Indicator Pill is `kind: non-interactive` for a role reason — a trust marker, not a commit control.
- Loading, error, and success are closed as `not-applicable` on Ghost / Nav, Outlined / Secondary (Fine tune), Top Nav item, Inline body link, and both postcode fields' loading/success, for role reasons — destination or value-accepting fields — never for absence of observation.
- Quote CTAs (Primary Large, Hero attached CTA) keep loading/error/success applicable because they commit Get a quote.
- Primary (Standard) cookie accept keeps loading/error/success applicable because it commits consent.
- **Proof grade.** The Tier 1 proof for this reference is the adopted sibling `web/references/octopusenergy/.verification.md`: `## Proof — Tier 1 live inspect`, dated 2026-06-23. See "Sibling verification file (E2)" above.
- Type-role Notes keep the YAML `use` writing beside the §3 Notes writing. Component Font fields keep the YAML `font` writing beside the §4 Font writing.
