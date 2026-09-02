# Mintlify Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Mintlify is "The Intelligent Knowledge Platform" (homepage 2026-05). The source positions documentation infrastructure as the brand. Catalog homepage is `https://mintlify.com`. This contract covers the first-party public surfaces the source names: that homepage, and the footer Tier 1 pair `mintlify.com` home + `/pricing` (live DOM via playwright, 2026-05-08). Catalog `primary_color` is `#0d9373`. YAML `tokens.colors.brand` is `#18e299` / `#18E299`. Those two hexes stay unmerged. YAML grades the token block `tokens.source: prose-derived` (`tokens.extracted` 2026-06-09). Treating those named routes as this contract's surfaces, keeping catalog `primary_color` `#0d9373` unmerged from `tokens.colors.brand`, and keeping the prose-derived token grade as the source's own metadata rather than as a live-computed harvest claim, are a derived editorial implementation inference from the verified surfaces; they are not Mintlify-authored or a separately published UI specification.

The visible §1–§4 reconstruction describes Mintlify's website as documentation-as-product design — a white, airy, information-rich surface that treats clarity as its highest aesthetic value. The page opens with a luminous white (`#ffffff`, YAML `tokens.colors.canvas`) background, near-black (`#0d0d0d`, YAML `tokens.colors.ink`) text, and a signature green brand accent (`#18E299` / `#18e299`) that the source says signals freshness and intelligence without dominating the palette. The overall mood is calm, confident, and engineered for legibility — a design system that whispers "we care about your developer experience" in every pixel. The Inter font family carries the typographic load. Geist Mono appears exclusively for code and technical labels. What the source says distinguishes Mintlify from other documentation platforms is its atmospheric gradient hero: a soft, cloud-like green-to-white gradient wash behind the hero content. Below the hero, the page settles into a disciplined alternation of white sections separated by subtle 5% opacity borders (`rgba(0,0,0,0.05)`). Cards use generous padding (24px+) with large radii (16px–24px) and whisper-thin borders. The source footer records a later live-DOM pass on home + `/pricing` that does not replace that reconstruction: Primary `lab(100 0 0)` White 9999px / 34-40px / 4.5-7×12-24 / 15-16px·500; Mintlify Near-Black `lab(2.42579 -0.165291 -0.470081)` (`#0a0d10` w/ blue cast) inverse for featured tier; Translucent ghost `lab(100 0 0 / 0.05)`; 60px announcement banner sub-pill; **`lab()` color-space canonical**. This contract does not choose between the prose-derived light-canvas reconstruction and the footer live-DOM measurements. Every value stays attached to the writing that established it. The hex values, Inter, Geist Mono, the 5% opacity border, the 16px–24px radii, the `lab()` strings, `#0a0d10`, 34-40px, 4.5-7×12-24, 15-16px·500, and the 60px banner are the source's own. Readings of that captured layer as airy, as documentation-as-product, as a gradient that signals ethereal intelligence, and the refusal to merge the light-canvas reconstruction with the footer live-DOM pass, are a derived editorial implementation inference from the verified surfaces; they are not Mintlify-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Mintlify was founded by **Han Wang (CEO)** and **Hahnbee Lee** — Cornell classmates who built the company through **Y Combinator's Winter 2022 (W22)** batch. Funding ladder: **$2.8M seed (2022)** with Bain Capital Ventures + YC → **$18M Series A (Sept 2024)** led by **Andreessen Horowitz** with Bain Capital Ventures + YC bringing total to ~$21M → continuing rounds bringing **total ~$67M** with **a16z, Salesforce Ventures, Bain Capital Ventures, YC, DST Global**. The platform serves **100M+ developers/year and powers documentation for 18,000+ companies** including **Anthropic, Cursor, PayPal, Coinbase**. The brand voice tracks the founder positioning: "documentation is product, not afterthought." Their own docs serve as the marketing site, demonstrating what customers get. Strong adoption among API-first SaaS companies. The years, founder names, W22, the funding ladder, 100M+ developers/year, 18,000+ companies, the named customers, the quoted founder positioning, the docs-as-marketing-site sentence, and that closing adoption sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-to-funding narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a CTA or control the source records outside its Personas section, is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification. They do not come from the source's persona section.

- Act on the recorded primary CTA ("Get Started", "Start Building").
- Act on the recorded secondary CTA ("Request Demo", "View Docs").
- Use the recorded email input on the CTA footer ("Make documentation your winning advantage").
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its figures as fictional archetypes informed by Mintlify user segments (DevRel engineers, technical writers, API documentation owners), not individual people, so those archetypes are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records at a group level, outside that Personas section, is Brand Narrative's 100M+ developers/year and 18,000+ companies including Anthropic, Cursor, PayPal, Coinbase, and strong adoption among API-first SaaS companies. The source's own §13 header names those Mintlify user segments in that wording; this Audience restates that header wording and the Brand Narrative groups, and does not rebuild jobs from dropped biographies. Dropping those archetypes rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are a derived editorial implementation inference from the verified surfaces; they are not Mintlify-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside it, is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.

- Inter with tight negative tracking at display sizes (-0.8px to -1.28px) — compressed yet readable
- Geist Mono for code labels: uppercase, 12px, tracked-out, the terminal voice
- Brand green (`#18E299` / `#18e299`) used sparingly — CTAs, hover states, focus rings, and accent touches
- Atmospheric gradient hero with cloud-like green-white wash
- Ultra-round corners: 16px for containers, 24px for featured cards, full-round (9999px) for buttons and pills
- Subtle 5% opacity borders (`rgba(0,0,0,0.05)`) creating barely-there separation
- 8px base spacing system with generous section padding (48px–96px)
- Clean white canvas — no gray backgrounds, no color sections, depth through borders and whitespace alone
- Footer live-DOM (home + `/pricing`): `lab(100 0 0)` White primary, Near-Black `lab(2.42579 -0.165291 -0.470081)` (`#0a0d10`) inverse, 60px announcement banner sub-pill, `lab()` color-space canonical

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Mintlify-authored or a separately published UI specification. The numbered stems rest on the source's own Principles section. Every *UI implication* below is the source's own editorial reading.

1. **Documentation is product.** *UI implication:* their own docs ARE the marketing surface.
2. **White throughout, no gray sections.** *UI implication:* separation via borders + whitespace.
3. **Pill nav 9999px.** *UI implication:* primary nav uses fully-pill chrome.
4. **Generous section padding (64-96px desktop).** *UI implication:* never cramp; whitespace is the design.
5. **Mint accent reserved for CTA.** *UI implication:* don't use mint for chrome; only for primary actions.

### Application rules

The source states these as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Mintlify-authored or a separately published UI specification.

- Keep the canvas white (`#ffffff`) and let depth come from 5% opacity borders + whitespace alone. No gray sections.
- Use Inter with tight negative tracking (-0.8px to -1.28px) at display sizes for that compressed, "well-engineered docs" feel.
- Reserve the brand green `#18E299` for CTAs, hover states, focus rings, and small accent touches only.
- Use generous radii: 16px containers, 24px featured cards, 9999px (full pill) buttons. The roundness is intentional.
- Apply 5% opacity borders (`rgba(0,0,0,0.05)`) for whisper-weight separation between cards and sections.
- Use Geist Mono ONLY for code labels, tracked-out, uppercase, ~12px — the terminal voice should remain a minority.

### Avoid

The source states these as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Mintlify-authored or a separately published UI specification.

- Don't introduce filled background sections to break up content — Mintlify's visual rhythm comes from whitespace, not color blocks.
- Don't use loose default tracking on headlines — it reads as generic and undersells the typographic discipline.
- Don't use the green for backgrounds, large surfaces, or decorative gradients — it cheapens the singular-accent strategy.
- Don't mix in sharp 2-4px corners — that aesthetic belongs to commerce or engineering brands, not docs.
- Don't use heavy 1px solid borders or visible shadows — they break the "floating, atmospheric" mood.
- Don't use mono fonts for body or UI labels — Inter handles all non-code text.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys follow the YAML paths. Pairing each hex to the token-set path named beside it, keeping catalog `primary_color` `#0d9373` unmerged from `tokens.colors.brand` `#18e299` / `#18E299`, keeping YAML lowercase and §2 `#18E299` as two writings of the brand key, keeping `tokens.colors.ink` `#0d0d0d` unmerged from Gray 900's same hex and from footer Near-Black `#0a0d10`, keeping `tokens.colors.canvas` `#ffffff` unmerged from card surfaces and from footer `lab(100 0 0)` White primary, keeping `tokens.colors.border` `#e5e5e5` unmerged from Border Subtle `rgba(0,0,0,0.05)` and Border Medium `rgba(0,0,0,0.08)`, keeping `tokens.colors.surface` `#f5f5f5` and `tokens.colors.surface-tint` `#fafafa` as YAML keys beside the source's "no gray sections" rule rather than deleting either, keeping `--twoslash-warn-bg` / `--twoslash-tag-bg` / `--twoslash-error-bg` / `var(--color-brand)` as the source's own use writings, keeping Near Black's "Not pure black — the micro-softness improves reading comfort" as the source's own §2 writing, keeping Focus Ring `#18E299` as the source's generic focus-outline color rather than as a `focus-visible` token, and keeping §7 dark-mode hexes as §7 writings rather than extra `tokens.colors.*` keys, is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.

**Primary**

- **Near Black** (`#0d0d0d`): Primary text, headings, dark surfaces. Not pure black — the micro-softness improves reading comfort. Token-set path `tokens.colors.ink`. Catalog identity `primary_color` is `#0d9373`, a different hex.
- **Pure White** (`#ffffff`): Page background, card surfaces, input backgrounds. Token-set path `tokens.colors.canvas`.
- **Brand Green** (`#18E299` / `#18e299`): The signature accent — CTAs, links on hover, focus rings, brand identity. Token-set path `tokens.colors.brand`.

**Secondary accents**

- **Brand Green Light** (`#d4fae8`): Tinted green surface for badges, hover states, subtle backgrounds. Token-set path `tokens.colors.brand-light`.
- **Brand Green Deep** (`#0fa76e`): Darker green for text on light-green badges, hover states on brand elements. Token-set path `tokens.colors.brand-deep`.
- **Warm Amber** (`#c37d0d`): Warning states, caution badges — `--twoslash-warn-bg`. Token-set path `tokens.colors.amber`.
- **Soft Blue** (`#3772cf`): Tag backgrounds, informational annotations — `--twoslash-tag-bg`. Token-set path `tokens.colors.blue`.
- **Error Red** (`#d45656`): Error states, destructive actions — `--twoslash-error-bg`. Token-set path `tokens.colors.error`.

**Neutral scale**

- **Gray 900** (`#0d0d0d`): Primary heading text, nav links. Same hex as `tokens.colors.ink`; two source role names, one hex.
- **Gray 700** (`#333333`): Secondary text, descriptions, body copy. Token-set path `tokens.colors.gray-700`.
- **Gray 500** (`#666666`): Tertiary text, muted labels. Token-set path `tokens.colors.gray-500`.
- **Gray 400** (`#888888`): Placeholder text, disabled states, code annotations. Token-set path `tokens.colors.gray-400`.
- **Gray 200** (`#e5e5e5`): Borders, dividers, card outlines. Token-set path `tokens.colors.border`.
- **Gray 100** (`#f5f5f5`): Subtle surface backgrounds, hover states. Token-set path `tokens.colors.surface`.
- **Gray 50** (`#fafafa`): Near-white surface tint. Token-set path `tokens.colors.surface-tint`.

**Interactive**

- **Link Default** (`#0d0d0d`): Links match text color, relying on underline/context.
- **Link Hover** (`#18E299`): Brand green on hover — `var(--color-brand)`.
- **Focus Ring** (`#18E299`): Brand green focus outline for inputs and interactive elements. This is the source's Focus Ring color. It is not a `focus-visible` token.

**Surface & overlay**

- **Card Background** (`#ffffff`): White cards on white background, separated by borders.
- **Border Subtle** (`rgba(0,0,0,0.05)`): 5% black opacity borders — the primary separation mechanism.
- **Border Medium** (`rgba(0,0,0,0.08)`): Slightly stronger borders for interactive elements.
- **Input Border Focus** (`var(--color-brand)`): Green ring on focused inputs.

**Shadows & depth (color writings; elevation tokens sit under Elevation)**

- **Card Shadow** (`rgba(0,0,0,0.03) 0px 2px 4px`): Barely-there ambient shadow for subtle lift. Token-set path `tokens.shadow.card`.
- **Button Shadow** (`rgba(0,0,0,0.06) 0px 1px 2px`): Micro-shadow for button depth. Token-set path `tokens.shadow.button`.
- **No heavy shadows**: Mintlify relies on borders, not shadows, for depth.

**Dark mode (source §7 — not YAML `tokens.colors.*` keys)**

- **Background**: `#0d0d0d` (near-black)
- **Text Primary**: `#ededed` (near-white)
- **Text Secondary**: `#a0a0a0` (muted gray)
- **Brand Green**: `#18E299` (unchanged — the green works on both backgrounds)
- **Border**: `rgba(255,255,255,0.08)` (white at 8% opacity)
- **Card Background**: `#141414` (slightly lighter than page)
- **Shadow**: `rgba(0,0,0,0.4) 0px 2px 4px` (stronger shadow for contrast)

Key adjustments the source records: Buttons invert: white background dark text becomes dark background light text. Badge backgrounds shift to deeper tones with lighter text. Focus ring remains brand green. Hero gradient shifts to dark-tinted green atmospheric wash.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `tokens.spacing.xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 32` · `xxl: 48` · `section: 64`.

Source §5 writes a longer scale with a unit: Base unit: 8px. Scale: 2px, 4px, 5px, 6px, 7px, 8px, 10px, 12px, 16px, 24px, 32px, 48px, 64px. Section padding: 48px–96px vertical. Card padding: 24px–32px. Component gaps: 8px–16px. Source §1 also writes generous section padding (48px–96px). Source §12 writes 64-96px desktop. Source §9 iteration guide writes 64px–96px on desktop, 48px on mobile. Both the YAML keys and the longer §5 list stay. 2px, 5px, 6px, 7px, 10px, and 96px are §5/§1/§9/§12 writings, not extra YAML `tokens.spacing` keys.

`tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8` and is not nav-button radius 8px. `tokens.spacing.md: 12` is not the `12px` in input padding `0px 12px` or secondary padding `4.5px 12px`. `tokens.spacing.base: 16` is not `tokens.rounded.md: 16`, not body size 16, and not standard-card radius 16px. `tokens.spacing.lg: 24` is not `tokens.rounded.lg: 24`, not subheading size 24, and not standard-card padding `24px`. `tokens.spacing.xl: 32` is not featured-card padding `32px`. `tokens.spacing.xxl: 48` is not section padding 48px. `tokens.spacing.section: 64` is not `tokens.typography.display-hero.size` `64`. Keeping those unitless spacing steps on their own keys rather than rewriting them as a grid, keeping those writings of `4`, `8`, `12`, `16`, `24`, `32`, `48`, and `64` on their own records, and keeping 2px, 5px, 6px, 7px, 10px, and 96px as §5/§1/§9/§12 writings rather than extra YAML `tokens.spacing` keys, are a derived editorial implementation inference from the verified surfaces; they are not Mintlify-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 8` · `md: 16` · `lg: 24` · `full: 9999`.

Source §5 named radius uses, kept on their own rows:

- Small (4px): Inline code, small tags, tooltips. Not a YAML `tokens.rounded` key.
- Medium (8px): Nav buttons, transparent buttons, small containers. Token-set key `tokens.rounded.sm`. YAML `button-nav.radius` is `8`.
- Standard (16px): Cards, content containers, image wrappers. Token-set key `tokens.rounded.md`. YAML `card.radius` is `16`.
- Large (24px): Featured cards, hero containers, section panels. Token-set key `tokens.rounded.lg`. YAML `card-featured.radius` is `24`.
- Full Pill (9999px): Buttons, inputs, badges, pills — the signature shape. Token-set key `tokens.rounded.full`. YAML component radii write `9999`.

`tokens.rounded.sm: 8` stays the medium radius step. `tokens.rounded.md: 16` stays the standard card step. `tokens.rounded.lg: 24` stays the featured-card step. `tokens.rounded.full: 9999` stays the pill step. The §5 4px small radius stays a §5 writing, not a YAML key. Keeping `8`, `16`, `24`, and `9999` as four YAML keys beside the §5 4px row, and not treating that split as a universal radius for every unlisted Mintlify surface, is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, no border | Page background, text blocks |
| Subtle Border (Level 1) | `1px solid rgba(0,0,0,0.05)` | Standard card borders, dividers |
| Medium Border (Level 1b) | `1px solid rgba(0,0,0,0.08)` | Interactive elements, input borders |
| Ambient Shadow (Level 2) | `rgba(0,0,0,0.03) 0px 2px 4px` | Cards with subtle lift. Token-set path `tokens.shadow.card`. |
| Button Shadow (Level 2b) | `rgba(0,0,0,0.06) 0px 1px 2px` | Button micro-depth. Token-set path `tokens.shadow.button`. |
| Focus Ring (Accessibility) | `1px solid #18E299` outline | Focused inputs, active interactive elements |

**Shadow Philosophy** (source §6): Mintlify barely uses shadows. The depth system is almost entirely border-driven — ultra-subtle 5% opacity borders create separation without visual weight. When shadows appear, they're atmospheric whispers (`0.03 opacity, 2px blur, 4px spread`) that add the barest sense of lift. This restraint keeps the page feeling flat and paper-like — appropriate for a documentation company whose product is about clarity and readability.

Decorative depth the source records: Hero gradient: atmospheric green-white cloud gradient behind hero content. No background color alternation — white on white throughout. Depth comes from border opacity variation (5% → 8%) and whitespace.

Reading those six levels as the source's elevation table rather than as a global shadow scale for every unlisted surface, and classifying the shadow-philosophy paragraph as the source's own editorial reading, is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.

### Motion

Source §15 durations, preserved. Treating the duration table and "Standard cubic-bezier; no bounce" as source-stated rather than computed CSS, and treating the cubic-bezier as unattributed rather than as a promoted curve token, is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |

Standard cubic-bezier; no bounce. `prefers-reduced-motion: reduce` removes hover transitions.

Exact cubic-bezier numbers are unattributed and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the table above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation, and keeping the source's duration table, "Standard cubic-bezier; no bounce", and `prefers-reduced-motion: reduce` sentence, is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating Inter as the named UI family and Geist Mono as the named mono family, treating the fallback stacks as fallbacks rather than as the brand face, and refusing to substitute a system font while calling it Inter or Geist Mono, are derived editorial implementation inferences from the verified surfaces; they are not Mintlify-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | The source names Inter as Primary and Geist Mono as Monospace on the reconstructed website. It does not publish a separate Mintlify type specimen in this record. |
| Live surface-use | YAML `tokens.source: prose-derived`. The source footer adds a 2026-05-08 live-DOM pass on home + `/pricing` that records 15-16px·500 on the measured CTAs; it does not replace the Inter / Geist Mono family names. |
| Official distributed asset | No Mintlify-exclusive distributed type family is named in the source. Inter and Geist Mono remain the named families. |
| Fallback / system stack | `Inter Fallback, system-ui, -apple-system, sans-serif` and `Geist Mono Fallback, ui-monospace, SFMono-Regular, monospace` are fallbacks, not the brand face. |
| License | This packet does not establish redistribution terms for Inter or Geist Mono. |

### Family

- **Primary:** `Inter`, with fallback: `Inter Fallback, system-ui, -apple-system, sans-serif`. YAML `tokens.typography.family.sans`: `Inter`.
- **Monospace:** `Geist Mono`, with fallback: `Geist Mono Fallback, ui-monospace, SFMono-Regular, monospace`. YAML `tokens.typography.family.mono`: `Geist Mono`.
- Do not replace Inter or Geist Mono with a different claimed family, and do not present a system or fallback stack as Inter or Geist Mono.

Keeping Inter as the named sans family and Geist Mono as the named mono family, keeping the two fallback stacks as fallbacks, and refusing to present a system font as Inter or Geist Mono, is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.

### Type roles

YAML writes unitless `lineHeight` `1.15`, `1.10`, `1.30`, `1.50`. Source §3 writes the matching notes `1.15 (tight)`, `1.10 (tight)`, `1.30 (tight)`, `1.50`, rem sizes, and extra roles that are not YAML keys. Both writings stay. Unitless ratios stay ratios and are never converted to a replacement px (A1a). YAML tracking `-1.28`, `-0.8`, `-0.24`, `-0.2`, `0.65`, `0.6` stays beside §3 `-1.28px`, `-0.8px`, `-0.24px`, `-0.2px`, `0.65px`, `0.6px`. YAML sizes stay `64` / `40` / `24` / `20` / `18` / `16` / `15` / `14` / `13` / `12` beside §3 `64px` / `40px` / `24px` / `20px` / `18px` / `16px` / `15px` / `14px` / `13px` / `12px`. Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping unitless YAML line heights unconverted, keeping `tokens.typography.display-hero.size` `64` off `tokens.spacing.section: 64`, keeping `tokens.typography.section.size` `40` off a spacing step, keeping `tokens.typography.subheading.size` `24` off `tokens.spacing.lg: 24`, keeping `tokens.typography.body.size` `16` and `tokens.typography.body-medium.size` `16` off `tokens.spacing.base: 16`, keeping Card Title Light / Caption / Small / Mono Badge / Mono Micro as §3-only rows rather than inventing YAML keys, and keeping Caption `1.50–1.71` as the source's own range, is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use / Notes |
|---|---|---:|---:|---|---|---|
| Display Hero | Inter | 64 / 64px (4.00rem) | 600 | 1.15 / 1.15 (tight) | -1.28 / -1.28px | Maximum impact, hero headlines. Path `tokens.typography.display-hero`. YAML use: Hero headlines |
| Section Heading | Inter | 40 / 40px (2.50rem) | 600 | 1.10 / 1.10 (tight) | -0.8 / -0.8px | Feature section titles. Path `tokens.typography.section`. |
| Sub-heading | Inter | 24 / 24px (1.50rem) | 500 | 1.30 / 1.30 (tight) | -0.24 / -0.24px | Card headings, sub-sections. Path `tokens.typography.subheading`. |
| Card Title | Inter | 20 / 20px (1.25rem) | 600 | 1.30 / 1.30 (tight) | -0.2 / -0.2px | Feature card titles. Path `tokens.typography.card-title`. |
| Card Title Light | Inter | 20px (1.25rem) | 500 | 1.30 (tight) | -0.2px | Secondary card headings. Not a YAML `tokens.typography` key. |
| Body Large | Inter | 18 / 18px (1.13rem) | 400 | 1.50 | normal | Hero descriptions, introductions. Path `tokens.typography.body-lg`. YAML use: Hero descriptions, intros |
| Body | Inter | 16 / 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text. Path `tokens.typography.body`. |
| Body Medium | Inter | 16 / 16px (1.00rem) | 500 | 1.50 | normal | Navigation, emphasized text. Path `tokens.typography.body-medium`. |
| Button | Inter | 15 / 15px (0.94rem) | 500 | 1.50 | normal | Button labels. Path `tokens.typography.button`. |
| Link | Inter | 14 / 14px (0.88rem) | 500 | 1.50 | normal | Navigation links, small CTAs. Path `tokens.typography.link`. |
| Caption | Inter | 14px (0.88rem) | 400–500 | 1.50–1.71 | normal | Metadata, descriptions. Not a YAML `tokens.typography` key. |
| Label Uppercase | Inter | 13 / 13px (0.81rem) | 500 | 1.50 | 0.65 / 0.65px | Uppercase section labels. Path `tokens.typography.label`. `text-transform: uppercase`. |
| Small | Inter | 13px (0.81rem) | 400–500 | 1.50 | -0.26px | Small body text. Not a YAML `tokens.typography` key. |
| Mono Code | Geist Mono | 12 / 12px (0.75rem) | 500 | 1.50 | 0.6 / 0.6px | Uppercase technical labels, Geist Mono. Path `tokens.typography.mono-code`. `text-transform: uppercase`. |
| Mono Badge | Geist Mono | 12px (0.75rem) | 600 | 1.50 | 0.6px | `text-transform: uppercase`, status badges. Not a YAML `tokens.typography` key. |
| Mono Micro | Geist Mono | 10px (0.63rem) | 500 | 1.50 | normal | `text-transform: uppercase`, tiny labels. Not a YAML `tokens.typography` key. |

**Type principles** (source §3). Tight tracking at display sizes: Inter at 40–64px uses -0.8px to -1.28px letter-spacing. This compression creates headlines that feel deliberate and space-efficient — documentation headings, not billboard copy. Relaxed reading at body sizes: 16–18px body text uses normal tracking with 150% line-height, creating generous reading lanes. Documentation demands comfort. Two-font system: Inter for all human-readable content, Geist Mono exclusively for technical/code contexts. The boundary is strict — no mixing. Uppercase as hierarchy signal: Section labels and technical tags use uppercase + positive tracking (0.6px–0.65px) as a clear visual delimiter between content types. Three weights: 400 (body/reading), 500 (UI/navigation/emphasis), 600 (headings/titles). No bold (700) in the system. Treating tight-tracking-at-display / relaxed-reading-at-body / two-font-system / uppercase-as-hierarchy-signal / three-weights as source-stated type rules rather than as a published Mintlify type specification is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.

### Assets

Catalog identity points at `logo.type: simpleicons`, `slug: mintlify`. That pointer is a third-party icon-set entry, not a Mintlify-distributed mark file. Source §4 Image Treatment: Product screenshots with subtle 1px borders; rounded containers: 16px–24px radius; atmospheric gradient backgrounds behind hero images; cloud/sky imagery with soft green tinting. Keeping Source §4 Image Treatment writings on this Assets record rather than as a component with kind or a state-applicability map, and treating the simpleicons slug as identity metadata rather than a portable first-party asset file, are a derived editorial implementation inference from the verified surfaces; they are not Mintlify-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Source §14 state treatments, preserved in this same file (catalog graph is not adopted; nothing is delegated). Declared interactive components still declare Core §4.4 applicability by control meaning. `default` and `focus-visible` apply. Pointer-web hover applies wherever a pointer control exists. Loading, error, and success follow the control's product role, not its primitive kind: a control that commits an operation can be pending, can fail, and can confirm, while a destination action, nav item, or card reports none of those itself. Where a state applies by role, the visual treatment from the tables below is used when the source recorded it; otherwise the state stays applicable and only its visual treatment is omitted. Absence of an observation is never a `not-applicable` reason. Source §2 Focus Ring `#18E299` / `var(--color-brand)` is a generic focus-outline color. `focus-visible` stays applicable by control meaning; visual treatment on `focus-visible` rows is omitted because the source never names `focus-visible` as a state token (B1). Every interactive-kind verdict, every applicability verdict, the omission of kind and a state-applicability map for Featured Card, Logo/Trust Card, Atmospheric Hero, Trust Bar, Feature Cards with Icons, CTA Footer Section, Pill badge, and the live-DOM footer records, keeping `Primitive type` only on YAML components that record that key, keeping each YAML `use` string as a Token-set use row beside the longer §4 Use line, and keeping §9-only Title/Body writings on Standard Card as type-role copy already declared rather than as new YAML keys, is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification. This is not a complete state-coverage claim.

| State | Treatment |
|---|---|
| **Empty (no docs)** | "Connect your repo" CTA + template gallery |
| **Empty (search)** | "No results. Try different keywords." |
| **Loading (build)** | Inline build progress + log link |
| **Loading (AI search)** | Two-phase: retrieving → answering |
| **Error (build)** | Specific MDX/frontmatter error + line number |
| **Error (deploy)** | Domain verification status |
| **Success (deploy)** | Live URL copy + analytics preview |
| **Success (search match)** | Highlighted snippet + page link |
| **Skeleton (page list)** | White rows with subtle border |
| **Disabled (insufficient plan)** | Upgrade link |
| **Loading (large build)** | Persistent progress with file count |

Source §10 error register, kept with the table: Specific. "Build failed: invalid frontmatter at line 12".

### Primary Brand (Full-round)

- Role: Primary CTA ("Get Started", "Start Building")
- Token-set use: Primary CTA Get Started
- Primitive type: `button` · Kind: interactive
- Token-set path: `tokens.components.button-primary`
- Background: `#0d0d0d` (token-set `bg`)
- Text: `#ffffff` (token-set `fg`)
- Padding: `8px 24px` (token-set `padding`)
- Radius: `9999` / 9999px (full pill). Token-set `radius: 9999`
- Font: Inter 15px weight 500. Token-set `font`: `15px/500`
- Shadow: `rgba(0,0,0,0.06) 0px 1px 2px`
- Hover: opacity 0.9
- Use (source §4, longer): Primary CTA ("Get Started", "Start Building")

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the near-black primary CTA |
| hover | applicable | Pointer-web button; treatment opacity 0.9 |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; Gray 400 `#888888` is the source's disabled-states color; paint-on-button omitted |
| loading | applicable | A Get Started / Start Building action can wait on destination or session start; visual treatment omitted |
| error | applicable | A Get Started conversion can fail to start; visual treatment omitted |
| success | applicable | A Get Started conversion can confirm that start; visual treatment omitted |

### Secondary / Ghost (Full-round)

- Role: Secondary actions ("Request Demo", "View Docs")
- Token-set use: Secondary action Request Demo
- Primitive type: `button` · Kind: interactive
- Token-set path: `tokens.components.button-secondary`
- Background: `#ffffff` (token-set `bg`)
- Text: `#0d0d0d` (token-set `fg`)
- Padding: `4.5px 12px` (token-set `padding`)
- Radius: `9999` / 9999px (full pill)
- Border: `1px solid rgba(0,0,0,0.08)`
- Font: Inter 15px weight 500. Token-set `font`: `15px/500`
- Hover: opacity 0.9
- Use (source §4, longer): Secondary actions ("Request Demo", "View Docs")

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the ghost secondary CTA |
| hover | applicable | Pointer-web button; treatment opacity 0.9 |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | Request Demo / View Docs is a destination action; this button does not commit an in-place operation whose pending result it would report |
| error | not-applicable | Same destination role |
| success | not-applicable | Same destination role |

### Transparent / Nav Button

- Role: Navigation items, icon buttons
- Token-set use: Navigation items, icon buttons
- Primitive type: `button` · Kind: interactive
- Token-set path: `tokens.components.button-nav`
- Background: transparent (token-set `bg`)
- Text: `#0d0d0d` (token-set `fg`)
- Padding: `5px 6px` (token-set `padding`)
- Radius: `8` / 8px. Token-set `radius: 8`
- Border: none or `1px solid rgba(0,0,0,0.05)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as navigation items, icon buttons |
| hover | applicable | Pointer-web nav control; visual treatment omitted on this variant (nav chrome hover is recorded on Navigation) |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav item can be unavailable; visual treatment omitted |
| loading | not-applicable | A navigation item or icon button opens a destination or menu; the control itself does not enter a loading state |
| error | not-applicable | Opening a nav destination is not a validation or request-failure state on this control |
| success | not-applicable | Arrival is the destination's outcome, not a success confirmation on this control |

### Brand Accent Button

- Role: Special promotional CTAs
- Token-set use: Special promotional CTAs
- Primitive type: `button` · Kind: interactive
- Token-set path: `tokens.components.button-accent`
- Background: `#18e299` / `#18E299` (token-set `bg`)
- Text: `#0d0d0d` (token-set `fg`)
- Padding: `8px 24px` (token-set `padding`)
- Radius: `9999` / 9999px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the brand-green promotional CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A promotional CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | A special promotional CTA presents a destination; it does not commit an in-place operation whose pending result this button would report |
| error | not-applicable | Same destination role |
| success | not-applicable | Same destination role |

### Standard Card

- Role: Standard card, border-led
- Token-set use: Standard card, border-led
- Primitive type: `card` · Kind: interactive
- Token-set path: `tokens.components.card`
- Background: `#ffffff` (token-set `bg`)
- Border: `1px solid rgba(0,0,0,0.05)`
- Radius: `16` / 16px. Token-set `radius: 16`
- Padding: `24px` (token-set `padding`)
- Shadow: `rgba(0,0,0,0.03) 0px 2px 4px`
- Hover: subtle border darkening to `rgba(0,0,0,0.08)`

§9 card prompt also records Title at 20px Inter weight 600, letter-spacing -0.2px, Body at 14px weight 400, `#666666`. Those values sit on this card as §9-only copy already declared as type roles.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the standard card |
| hover | applicable | Pointer-web tile; treatment border darkening to `rgba(0,0,0,0.08)` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tile can be unavailable; visual treatment omitted |
| loading | not-applicable | A border-led card is a destination module; it commits no operation of its own that could be pending |
| error | not-applicable | The same destination role |
| success | not-applicable | The same destination role |

### Featured Card

- Role: Featured card
- Token-set use: Featured card
- Primitive type: `card`
- Token-set path: `tokens.components.card-featured`
- Background: `#ffffff` (token-set `bg`)
- Border: `1px solid rgba(0,0,0,0.05)`
- Radius: `24` / 24px. Token-set `radius: 24`
- Padding: `32px` (token-set `padding`)
- Inner content areas may have their own 16px radius containers
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.

### Email Input

- Role: Email input, pill matching buttons
- Token-set use: Email input, pill matching buttons
- Primitive type: `input` · Kind: interactive
- Token-set path: `tokens.components.input`
- Background: transparent or `#ffffff` (token-set `bg`: `#ffffff`)
- Text: `#0d0d0d` (token-set `fg`)
- Padding: `0px 12px` (height controlled by line-height). Token-set `padding`: `0px 12px`
- Border: `1px solid rgba(0,0,0,0.08)`
- Radius: `9999` / 9999px (full pill, matching buttons)
- Focus: `1px solid var(--color-brand)` + `outline: 1px solid var(--color-brand)`
- Placeholder: `#888888`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the email input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted. Recorded Focus treatment is `1px solid var(--color-brand)` + outline; that generic Focus is not a `focus-visible` token |
| disabled | applicable | An email field can be unavailable; visual treatment omitted |
| loading | not-applicable | This email field collects an address; it does not itself report a pending submit |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | Returning a live URL is recorded on Success (deploy), not as paint on this field |

### Navigation

- Role: Clean horizontal nav on white, sticky with backdrop blur
- not in the token set
- Brand logotype left-aligned
- Links: Inter 14–15px weight 500, `#0d0d0d` text
- Hover: color shifts to brand green `var(--color-brand)`
- CTA: dark pill button right-aligned ("Get Started")
- Mobile: hamburger menu collapse at 768px
- §9-only: white sticky header with `backdrop-filter blur(12px)`; Inter 15px weight 500 for links; dark pill CTA 'Get Started' right-aligned, 9999px radius; Bottom border: `1px solid rgba(0,0,0,0.05)`
- Kind: interactive. Anatomy: logotype + links + CTA. `Primitive type` is not attached (no YAML component key).

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the horizontal nav |
| hover | applicable | Pointer-web links; treatment color shifts to `var(--color-brand)` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav item can be unavailable; visual treatment omitted |
| loading | not-applicable | A public navigation chrome opens destinations; the chrome itself does not enter a loading state |
| error | not-applicable | Opening a nav destination is not a request-failure state on the chrome |
| success | not-applicable | Arrival is the destination's outcome |

### Logo/Trust Card

- Role: Centered logo/icon with consistent sizing
- not in the token set
- Background: `#fafafa` or `#ffffff`
- Border: `1px solid rgba(0,0,0,0.05)`
- Radius: 16px
- Kind: omitted. Default geometry only; no interactive-kind evidence.

### Atmospheric Hero

- Role: Full-width gradient wash: soft green-to-white cloud-like gradient
- not in the token set
- Centered headline with tight tracking
- Subtitle in muted gray. §9-only: Subtitle at 18px Inter weight 400, line-height 1.50, color `#666666`. Headline at 64px Inter weight 600, line-height 1.15, letter-spacing -1.28px, color `#0d0d0d`
- Dual CTA buttons (dark primary + ghost secondary)
- The gradient creates a sense of elevation and intelligence
- Kind: omitted. Composition, not a control. That elevation-and-intelligence sentence is the source's own §4 writing; classifying it as source-stated register rather than as a published Mintlify hero specification is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.

### Trust Bar / Logo Grid

- Role: "Loved by your favorite companies" section
- not in the token set
- Company logos in muted grayscale
- Grid or horizontal layout with consistent sizing
- Subtle border separation between logos
- §9-only: Grid layout with 16px radius containers, 1px border at 5% opacity. Label above: 'Loved by your favorite companies' at 13px Inter weight 500, uppercase, tracking 0.65px
- Kind: omitted. Default geometry only.

### Feature Cards with Icons

- Role: Icon or illustration at top; Title at 20px weight 600; Description at 14–16px in gray
- not in the token set
- Consistent padding and border treatment
- Grid layout: 2–3 columns on desktop
- Kind: omitted. Default geometry; the YAML Standard Card already holds the token-set card.

### CTA Footer Section

- Role: Dark or gradient background
- not in the token set
- Large headline: "Make documentation your winning advantage"
- Email input with pill styling
- Brand green accent on CTAs
- Kind: omitted. Section composition; the email input and CTAs are declared above.

### Pill badge

- Role: §9-only pill badge
- not in the token set
- Background: `#d4fae8`
- Text: `#0fa76e`
- Radius: 9999px
- Padding: `4px 12px`
- Font: 13px Inter weight 500, uppercase
- Kind: omitted. Status label; the source records no control role.

### Live-DOM home + /pricing (source footer, 2026-05-08)

These writings are the source footer's live-DOM pass. They are not YAML `tokens.components.*` keys and do not replace the prose-derived button records above. `Primitive type` is not attached. Treating this block as the source footer's live-DOM pass rather than as YAML `tokens.components.*` keys, refusing to replace the prose-derived button records above, classifying the Cursor + Lovable pattern sentence as the source footer's own writing, and omitting kind and a state-applicability map because these are footer measurements rather than a YAML component with interactive-kind evidence, is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.

- Primary `lab(100 0 0)` White 9999px / 34-40px / 4.5-7×12-24 / 15-16px·500
- Mintlify Near-Black `lab(2.42579 -0.165291 -0.470081)` (`#0a0d10` w/ blue cast) inverse for featured tier
- Translucent ghost `lab(100 0 0 / 0.05)`
- 60px announcement banner sub-pill
- **`lab()` color-space canonical** — joins Cursor + Lovable in modern AI-tooling DS pattern
- Earlier addition the footer names: Mintlify Near-Black inverse + pricing-hero 40px/7×24 + lab() token convention + 60px banner sub-pill missed by prior pass

Kind: omitted. Footer measurements, not a YAML component with interactive-kind evidence.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The spacing, radius, and breakpoint figures in this section are the source's own. Reading them under the source's whitespace philosophy rather than as a live-computed breakpoint harvest, and keeping YAML spacing keys unmerged from §5 extra steps and from type/radius jobs, is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.

### Spacing system

Base unit: 8px. YAML `tokens.spacing` as recorded under Foundations. Source §5 scale: 2px, 4px, 5px, 6px, 7px, 8px, 10px, 12px, 16px, 24px, 32px, 48px, 64px. Section padding: 48px–96px vertical; §12 64-96px desktop; §9 64px–96px on desktop, 48px on mobile. Card padding: 24px–32px. Component gaps: 8px–16px. Consistent horizontal padding: 24px (mobile) to 32px (desktop).

### Grid & container

Max content width: approximately 1200px. Hero: centered single-column with generous top padding (96px+). Feature sections: 2–3 column CSS Grid for cards. Full-width sections with contained content.

### Whitespace philosophy (source §5)

Documentation-grade breathing room: Every element has generous surrounding whitespace. Mintlify sells documentation, so the marketing page itself demonstrates reading comfort. Sections as chapters: Each feature section is a self-contained unit with 48px–96px vertical padding, creating clear "chapter breaks." Content density is low: Unlike developer tools that pack the page, Mintlify uses 1–2 key messages per section with supporting imagery. Treating documentation-grade-breathing-room / sections-as-chapters / content-density-is-low as source-stated register rather than as a published layout specification is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Single column, stacked layout, hamburger nav |
| Tablet | 768–1024px | Two-column grids begin, expanded padding |
| Desktop | >1024px | Full layout, 3-column grids, maximum content width |

### Touch targets

Buttons with full-pill shape have comfortable 8px+ vertical padding. Navigation links spaced with adequate 16px+ gaps. Mobile menu provides full-width tap targets.

### Collapsing strategy

- Hero: 64px → 40px headline, maintains tight tracking proportionally
- Navigation: horizontal links + CTA → hamburger menu at 768px
- Feature cards: 3-column → 2-column → single column stacked
- Section spacing: 96px → 48px on mobile
- Footer: multi-column → stacked single column
- Trust bar: grid → horizontal scroll or stacked

### Image behavior

Product screenshots maintain aspect ratio with responsive containers. Hero gradient simplifies on mobile. Full-width sections maintain edge-to-edge treatment.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Mintlify's voice is **documentation-as-product and developer-warm.** "The Intelligent Knowledge Platform" (homepage 2026-05) — positions documentation infrastructure as the brand. Copy is approachable but technical, with strong open-source-aware register. Treating that voice paragraph and the table below as source-stated register rather than as a published microcopy specification is a derived editorial implementation inference from the verified surfaces; it is not Mintlify-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| CTA | Verb. "Get started", "Sign up free", "Talk to sales" |
| Marketing | Customer-driven. Mintlify-built docs as social proof |
| Documentation | Meta — Mintlify's docs are the product showcase |
| Error | Specific. "Build failed: invalid frontmatter at line 12" |

**Voice samples**

- Tagline: *"The Intelligent Knowledge Platform"*

**Forbidden phrases.** "Revolutionary docs platform". "AI-powered" without specifics.

Recorded labels and headlines kept as issued copy: "Get Started", "Start Building", "Request Demo", "View Docs", "Loved by your favorite companies", "Make documentation your winning advantage", "Connect your repo", "No results. Try different keywords."

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Named gaps

These decisions are unnamed values, not permissions to invent:

- exact cubic-bezier numbers for the source's "Standard cubic-bezier"
- a `focus-visible` treatment token (the source records Focus Ring `#18E299` / `var(--color-brand)`, never the name `focus-visible`)
