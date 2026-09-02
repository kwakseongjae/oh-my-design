# Monzo Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Monzo. Catalog homepage identity is `https://monzo.com`. Country in the source catalog is UK; category is fintech. Catalog `primary_color` is `#ff4f40`.

Treating the following two URLs as the named evidence domains of this reconstruction, including values-stay-attached-to-the-surface-that-established-them, homepage-value-not-a-proxy-for-the-product-page, product-page-teal-CTA-not-a-stand-in-for-the-homepage-midnight-CTA, and YAML `heading-lg` use `Section titles (clamp ~48.8px at 1440px)` as that role's clamp note rather than as a layout breakpoint, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification. This contract covers two named first-party web surfaces from the 2026-06-22 packet: the homepage at `https://monzo.com/` and the product surface at `https://monzo.com/current-account/`. Color, type, and component values below stay attached to the surface that established them. This contract does not treat a homepage Midnight Ink CTA as a proxy for the product-page Teal CTA. A product-page Mint surface is not a stand-in for the homepage white canvas.

Source token note: primary = Hot Coral (`#ff4f40`) — brand signature on logo, card product, headings; CTA buttons use Midnight Ink (`#091723`) on home and Teal (`#016b83`) on product pages. Custom MonzoSansText/MonzoSansDisplay type system. Treating that note as a register split — `#ff4f40` is catalog `primary_color` and YAML `primary` rather than YAML `primary-alt` `#f64d3f`; `#091723` as YAML `midnight` / YAML `ink` / homepage CTA fill rather than YAML `deep-navy` `#112231`; `#016b83` as the product-page CTA rather than a second midnight; `#ffffff` as YAML `canvas` / `on-primary` / `on-dark` / `on-midnight` rather than a second white paint — is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

The following atmosphere readings — UK's-most-recognisable-neobank, one-audacious-choice, nearly-achromatic-canvas, reserved-almost-entirely-for-the-physical-card-the-logo-and-occasional-editorial-headings, every-appearance-of-the-accent-feel-intentional-almost-ceremonial, cool-Mint-surface-carries-content-cards, dramatic-chiaroscuro-against-all-that-white, warm-but-engineered, approachable-enough-for-a-16-year-old-opening-their-first-account, precise-enough-for-a-freelancer-checking-their-tax-pot, geometry-as-what-distinguishes-Monzo-from-its-fintech-peers, essentially-no-hard-corners-on-interactive-surfaces, nearly-zero-shadows, depth-through-flat-surface-alternation — are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification. Monzo is the UK's most recognisable neobank, and its visual identity is built around one audacious choice: a single saturated Hot Coral (`#ff4f40`) on a canvas that is otherwise nearly achromatic. The homepage opens on pure white (`#ffffff`) with a deep Midnight Ink (`#091723`) nav bar and the coral reserved almost entirely for the physical card, the logo, and occasional editorial headings — a ratio that makes every appearance of the accent feel intentional, almost ceremonial. Product pages shift the palette slightly: a cool Mint surface (`#f2f8f3`) carries content cards, Teal (`#016b83`) powers the primary CTA, and dark full-bleed sections in Midnight Ink create a dramatic chiaroscuro against all that white.

The typography is a two-font custom system — **MonzoSansDisplay** for all headlines and **MonzoSansText** for body and UI — both commissioned exclusively for Monzo. Display headlines run weight 800 at large sizes (approximately 48.8px on hero at desktop), while body and UI text runs MonzoSansText at 16px / weight 400 with `-0.05em` letter-spacing built into the brand spec. The combination reads as warm but engineered: approachable enough for a 16-year-old opening their first account, precise enough for a freelancer checking their tax pot.

What distinguishes Monzo from its fintech peers is the geometry: every interactive element — buttons, nav links, the search bar — uses a full 500px pill radius. There are essentially no hard corners on interactive surfaces. Cards use generous 32px–64px radii. Shadows are nearly absent; the sole exception is a soft `rgba(0,0,0,0.1)` float on the search bar. Depth and section separation come entirely from alternating backgrounds (white ↔ mint ↔ midnight), not from elevation.

Treating the following public-history facts as narrative rather than interface tokens — founded-in-2015-in-London, named-founders, team-largely-assembled-from-Starling-Bank, prepaid-beta-card-in-2016, fully-licensed-UK-bank-in-2017, radical-transparency, named-high-street-banks, real-time-spending-notifications, instant-balance-updates, zero-foreign-transaction-fees, viral-waitlist, Hot-Coral-debit-card-as-social-signal, over-15-million-customers-as-of-2025, mission-includes-under-16s-16-17s-and-business-customers — is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification. Monzo was founded in **2015** in London by **Tom Blomfield** (CEO), Jonas Huckestein, Jason Bates, Paul Rippon, and Gary Dolman — a team largely assembled from Starling Bank — and launched its first prepaid beta card in 2016 before becoming a fully licensed UK bank in 2017. The company's founding premise was radical transparency: at a time when UK high-street banks (Barclays, HSBC, Lloyds, NatWest) still operated on legacy core-banking systems and charged opaque fees, Monzo offered real-time spending notifications, instant balance updates, and zero foreign transaction fees — features so obviously missing from traditional banking that the viral waitlist was the proof of demand.

The signature product decision was the **Hot Coral debit card** — a color so loud it became a social signal. Being spotted paying with the coral card became a status marker among London millennials; the color itself became the brand. Monzo has grown to serve **over 15 million personal and business customers** in the UK (as of 2025), with a stated mission of *"making money work for everyone"* — which explicitly includes under-16s, 16-17s, and business customers, not just the financially comfortable early-adopter demographic.

The following refusal-and-embrace readings — institutional-gravity-of-dark-navy-and-gold-banking-aesthetics, dense-fee-disclosure-buried-in-fine-print, bank-account-as-a-product-to-be-sold-rather-than-a-problem-to-be-solved, consumer-app-sensibility-applied-to-financial-infrastructure, a-single-audacious-coral-as-the-only-saturated-accent, tone-that-treats-the-reader-as-an-intelligent-adult-who-deserves-plain-English — are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification. What Monzo refuses, visible in its design system: the institutional gravity of dark-navy-and-gold banking aesthetics, dense fee disclosure buried in fine print, and any design that treats a bank account as a product to be sold rather than a problem to be solved. What it embraces: a consumer-app sensibility applied to financial infrastructure; a single audacious coral as the only saturated accent; and a tone of voice that treats the reader as an intelligent adult who deserves plain English.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Treating the three YAML component-use strings / live hosts below as Primary tasks, and not lifting tasks from source §13 fictional archetypes, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

- Sign up from the homepage Midnight Ink pill (YAML use: `Primary CTA on home ('Sign up')`).
- Open a personal account from the product-page Teal pill (YAML use: `Product-page primary CTA ('Open a personal account')`).
- Open a free bank account from the hero-dark White pill (YAML use: `Hero-dark surface CTA ('Open a free bank account')`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 names fictional archetypes, not individual people. Restricting Audience so no individual personas are promoted, those fictional archetypes are not Audience and are not primary tasks, and keeping only the source's own publicly observable Monzo user segments wording from that §13 header — UK millennials, Gen Z first-time bankers, small business owners, families — is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

### Distinctive traits

The following unmerged-role extras — treating `#ff4f40` as catalog `primary_color` plus YAML `primary` rather than YAML `primary-alt` `#f64d3f`, treating `#091723` as midnight/ink/homepage-CTA rather than deep-navy `#112231`, treating `#016b83` as product-page CTA rather than homepage midnight, treating `#ffffff` canvas as unmerged from on-primary / on-dark / on-midnight as roles, treating 500px pills as unmerged from card 32px / chip 64px / badge 4px, treating MonzoSansDisplay 800 as unmerged from MonzoSansText 400/600, treating `-0.05em` as MonzoSansText letter-spacing rather than a display tracking, and treating `rgba(0, 0, 0, 0.1) 0px 0px 10px 0px` as search-only rather than a card shadow — plus the bullet characterizations warm-rounded-distinctly-non-banking and 500px-as-the-brand's-most-recognisable-gesture — are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification.

- Hot Coral (`#ff4f40`) appears only on logo, card product, and select headings — never as a button fill
- Midnight Ink (`#091723`) is the primary CTA background on home; Teal (`#016b83`) on product pages
- MonzoSansDisplay (weight 800) for all display titles — warm, rounded, distinctly non-banking
- MonzoSansText for all body and UI — semibolded (600) on interactive labels
- 500px pill radius on every button and interactive element — the brand's most recognisable gesture
- Nearly zero shadows; depth through flat surface alternation (white / mint `#f2f8f3` / midnight `#091723`)
- Negative letter-spacing (`-0.05em`) on MonzoSansText throughout the UI

### Principles

These 5 items (Make money work for everyone; Transparency, always; Restraint earns attention; A bank in your pocket; Warm but precise), including each stem and each *UI implication*, are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification.

1. **Make money work for everyone.** The company's stated mission. *UI implication:* the product must be legible to a 16-year-old opening their first account and to a small business owner managing cash flow — the same interface, the same clarity.
2. **Transparency, always.** Real-time notifications, instant balance, no hidden fees. *UI implication:* never surface a number the user hasn't understood; states (loading, error, empty) must tell users exactly what's happening and what to do.
3. **Restraint earns attention.** The coral is powerful because it appears rarely. *UI implication:* use one accent color; keep 95% of the UI achromatic; make every coral touch an intentional event.
4. **A bank in your pocket.** Monzo lives in the app; the website is a sign-up surface. *UI implication:* 500px pill geometry, flat shadows, and generous touch targets reflect native iOS/Android DNA, not desktop-web banking conventions.
5. **Warm but precise.** MonzoSansDisplay is rounded and friendly; the system is still exact about spacing and color values. *UI implication:* warmth through form (rounded type, pill shapes), precision through function (consistent tokens, no improvisation).

Treating the following as a capture-bound application of source §7 Do's is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

- Use Hot Coral (`#ff4f40`) only on logo, card product, editorial headings, and icon accents
- Use Midnight Ink (`#091723`) for primary CTAs on home and for dark full-bleed sections
- Use Teal (`#016b83`) for CTAs on product feature pages
- Apply 500px radius to every button and interactive pill — it's the brand's signature geometry
- Use MonzoSansDisplay weight 800 for all display headlines
- Use MonzoSansText weight 600 for all button labels and interactive text
- Separate sections by alternating white, mint (`#f2f8f3`), and midnight — never with shadows
- Apply `-0.05em` letter-spacing on MonzoSansText body elements

### Avoid

The following items copy source §7 Don'ts. They are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification.

- Do not use Hot Coral as a button background fill — it must stay as an accent color, not a CTA color
- Do not use shadows for card elevation — Monzo's depth comes from surface-color contrast
- Do not apply hard square corners to buttons or interactive elements — everything is a pill
- Do not mix in additional accent colors beyond coral, teal, and midnight
- Do not use light-weight (300 / 400) headlines — display is always weight 800
- Do not use MonzoSansDisplay for body text — it's a display-only face
- Do not introduce gradients on backgrounds — sections are flat, single-tone fills
- Do not over-decorate: the system's power is restraint; every coral touch is an event

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following unmerged-role readings, including Hot-Coral-not-primary-alt, midnight-not-deep-navy, teal-not-midnight, canvas-white-not-a-second-paint-from-on-primary, mint-not-soft-mint, ink-not-a-second-paint-from-midnight, body-not-muted, on-primary-on-dark-on-midnight-as-roles-not-second-whites, hairline-not-muted, muted-nav-rgba-as-§2-only, and component-fields-such-as-chip-`#3b4c54`-staying-on-that-control, plus the source-copied characterizations 95%-achromatic-so-coral-retains-maximum-attention, warmer-than-pure-black, fresh-and-clean, slightly-deeper-than-mint, slightly-lighter-than-midnight, and teal-complements-coral-without-competing — are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification. Catalog `primary_color` `#ff4f40` is YAML `primary` and the coral accent; it is not YAML `primary-alt` `#f64d3f`. YAML `midnight` `#091723` shares a hex with YAML `ink` `#091723` and is this reconstruction's dark fill / heading role split, not a second paint. YAML `on-primary` / `on-dark` / `on-midnight` share a hex with YAML `canvas` `#ffffff` and are on-fill label roles, not a second white paint. YAML component fields such as button-chip `bg` `#3b4c54` stay on those controls. They are not extra general inks.

**Primary**

- **Hot Coral** (`#ff4f40`): YAML `primary`. Catalog `primary_color`. Token-set path `tokens.colors.primary`. The signature brand color. Appears on the physical Hot Coral debit card, the Monzo logo, certain editorial headings, and icon/link accents. Never fills a button background. This restraint is the rule — the system keeps the interface 95% achromatic so coral retains maximum attention value.
- **Midnight Ink** (`#091723`): YAML `midnight`. Token-set path `tokens.colors.midnight`. The dominant dark color. Primary CTA button background on the homepage ("Sign up"), the nav bar background in dark mode, footer, and full-bleed dark sections. Deep, almost navy-black — warmer than pure black.
- **Pure White** (`#ffffff`): YAML `canvas`. Token-set path `tokens.colors.canvas`. Page canvas and card surface on light sections.

**Brand & Surface**

- **Mint Canvas** (`#f2f8f3`): YAML `mint`. Token-set path `tokens.colors.mint`. The primary page tint. Used for content card backgrounds, section washes, and alternating light sections. A very pale green-white that reads as fresh and clean.
- **Soft Mint** (`#e3ebe4`): YAML `soft-mint`. Token-set path `tokens.colors.soft-mint`. Hover fill and chip inactive state. Slightly deeper than Mint Canvas.
- **Deep Navy** (`#112231`): YAML `deep-navy`. Token-set path `tokens.colors.deep-navy`. A slightly lighter dark than Midnight Ink, used for section backgrounds and footer accents.
- **Hot Coral alt** (`#f64d3f`): YAML `primary-alt`. Token-set path `tokens.colors.primary-alt`. Source HTML comment records Hot Coral sections: bg `rgb(255,79,64)` `#ff4f40` (app download media column) and `rgb(246,77,63)` `#f64d3f` (flashcard). Those two hexes stay unmerged.

**Interactive**

- **Teal CTA** (`#016b83`): YAML `teal`. Token-set path `tokens.colors.teal`. The primary CTA color on product/feature pages ("Open a personal account", "Personal account"). A deep blue-green that complements the coral without competing.
- **Muted Slate** (`#6b747b`): YAML `body`. Token-set path `tokens.colors.body`. Secondary body text, metadata, and navigation links in the muted state.
- **Fog** (`#b5b9bd`): YAML `muted`. Token-set path `tokens.colors.muted`. Placeholder text, tertiary labels, and borders.

**Text**

- **Ink / Midnight** (`#091723`): YAML `ink`. Token-set path `tokens.colors.ink`. Primary headings and body text on light surfaces. Same hex as YAML `midnight`; this is the on-light text role.
- **White** (`#ffffff`): YAML `on-primary`, `on-dark`, `on-midnight`. Token-set paths `tokens.colors.on-primary` · `tokens.colors.on-dark` · `tokens.colors.on-midnight`. All text on dark (midnight / teal) surfaces. Same hex as YAML `canvas`; these are on-fill label roles.
- **Muted Nav** (`rgba(9, 23, 35, 0.6)`): Inactive / secondary nav items at reduced opacity. Not a YAML `tokens.colors` key.

**Hairline & Border**

- **Hairline** (`#c2c8d0`): YAML `hairline`. Token-set path `tokens.colors.hairline`. Card borders, form field outlines, dividers.

Source HTML comment background frequency (home): white ×34, midnight `#091723` ×21, mint-soft `#e3ebe4` ×11, mint `#f2f8f3` ×10.

### Spacing

Treating those YAML numbers as recorded without a required px suffix (none is added here as a replacement), treating body px writings as body-recorded steps rather than a converted YAML scale, treating §5 `128px` as a §5-only step that is not a YAML spacing key, and treating harvested control heights 51px / 48px / 38px and paddings `12px 24px` / `8px 16px` as component fields rather than replacements for the YAML spacing scale, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification. YAML scale: xs 4, sm 8, md 16, base 24, lg 32, xl 48, xxl 64, section 80. Token-set paths `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 16` · `tokens.spacing.base: 24` · `tokens.spacing.lg: 32` · `tokens.spacing.xl: 48` · `tokens.spacing.xxl: 64` · `tokens.spacing.section: 80`. Those YAML numbers are recorded without a px suffix. Body layout names a scale of 4px, 8px, 16px, 24px, 32px, 48px, 64px, 80px, 128px. YAML `md` 16 is not YAML `base` 24 and is not button font 16px. YAML `base` 24 is not button padding `24px` as a converted spacing step.

The following generous-breathing-room / surface-alternation-as-structure / pill-geometry-as-warmth readings are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification. Base unit: 8px. Card padding: 30–32px. Section gaps: 64–80px. Element gap within cards: 24px.

### Shape

YAML `rounded`: xs 4, sm 24, md 32, lg 64, full 500. Token-set paths `tokens.rounded.xs: 4` · `tokens.rounded.sm: 24` · `tokens.rounded.md: 32` · `tokens.rounded.lg: 64` · `tokens.rounded.full: 500`.

The following local-geometry reading, including Micro-4px-badges, Card-SM-24px, Card-MD-32px-workhorse, Card-LG-64px-large-feature-cards-and-filter-chip, Full-500px-buttons-nav-pills-search, and 64px-unmerged-from-500px, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

- Micro (4px): Badges and small tags (YAML `rounded.xs`)
- Card SM (24px): Smaller containers (YAML `rounded.sm`)
- Card MD (32px): Content cards — the workhorse (YAML `rounded.md`)
- Card LG (64px): Large feature cards; also the Filter Chip radius (YAML `rounded.lg`)
- Full (500px): Buttons, nav pills, all interactive elements; Input / Search (YAML `rounded.full`)

Treating 4px badges, 24px smaller containers, 32px content cards, 64px large feature cards and filter chips, and 500px pills as local harvested geometry rather than a universal radius for every unlisted control, and treating YAML `lg` 64 as a YAML step and as `64px` on the filter chip rather than merged with YAML `full` 500, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

### Elevation

The following elevation-table Use readings, including all-cards-nav-sections-most-of-the-system and search-bar-only, plus the near-shadowless / background-alternation / mobile-first-flat-surface / lift-based-skeuomorphism-would-feel-out-of-place readings that follow the table, are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | All cards, nav, sections — most of the system |
| Float (Level 1) | `rgba(0,0,0,0.1) 0px 0px 10px 0px` | Search bar only — the system's single shadow usage |

YAML `tokens.shadow.none`: `none`. YAML `tokens.shadow.float`: `rgba(0, 0, 0, 0.1) 0px 0px 10px 0px`.

**Shadow Philosophy**: Monzo is near-shadowless. Background alternation (white / `#f2f8f3` mint / `#091723` midnight) creates visual hierarchy without elevation. This mobile-first, flat-surface approach makes the UI feel native on iOS/Android where it lives natively as a banking app — lift-based skeuomorphism would feel out of place.

### Motion

Source-stated duration roles. Treating the duration table, easing names, signature motions, and reduced-motion line as source-stated rather than computed CSS, treating Arriving / Dismissals / Two-way / spec-template-ease-exit-match / functional-and-app-native / no-bounce-or-spring / current-account-product-signals-steady-reliability / coral-accent-never-animates readings as editorial, and treating the five-kind promotion gate as reconstruction rather than a Monzo-authored motion specification, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, notification ticks, focus rings |
| `motion-fast` | 100ms | Hover, chip press, pill ripple |
| `motion-standard` | 200ms | Card expand, dropdown, sheet |
| `motion-slow` | 300ms | Page-level transitions, hero section reveals |

Source-stated easing names (uncomputed cubic-bezier omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only) | Arriving elements — sheets, cards, notifications |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only) | Two-way transitions |

**Motion rules**: Motion is functional and app-native — consistent with Monzo's mobile-first DNA. Pill chips respond to press with subtle scale/opacity; transaction rows reveal at `motion-standard / ease-enter`. No bounce or spring — a current-account product signals steady reliability. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional and the coral accent never animates.

Exact cubic-bezier curves are unattributed and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings, including custom-commissioned-MonzoSansDisplay-and-MonzoSansText-as-live-computed-families, CSS-variables-as-source-stated-stacks, live-computed-body-rgb(0,0,0)-unmerged-from-YAML-ink-`#091723`, 48.8288px-as-a-computed-companion-not-a-replacement-for-YAML-61-or-49, and `--default-line-height-1.4`-as-a-CSS-variable-not-a-replacement-for-unitless-lineHeight, are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | Custom commissioned type: **Display** `MonzoSansDisplay` — weights 600–800; **Body/UI** `MonzoSansText` — weights 400–700. No separately published Monzo UI-type specification is carried beyond those families and the CSS variables below. |
| Live computed surface-use | Fonts on page: MonzoSansText, MonzoSansDisplay (only). Source HTML comment: body `font-family MonzoSansText`; `color rgb(0,0,0)`; `font-size 16px`; `line-height 22.4px`. H2 hero "Monzo for all your money": MonzoSansDisplay; `48.8288px`; weight 800; color `rgb(255,255,255)`. H1 "Current accounts that keep up": MonzoSansDisplay; `48.8288px`; weight 800; white. YAML `family.display` `MonzoSansDisplay` and YAML `family.body` `MonzoSansText` name those live computed families. |
| CSS variables | `--font-stack-body: "MonzoSansText", sans-serif` / `--font-stack-title: "MonzoSansDisplay", sans-serif`. HTML comment companion: `--font-stack-body "MonzoSansText"`; `--font-stack-title "MonzoSansDisplay"`; `--default-line-height 1.4`. |
| Official distributed asset | Both faces are commissioned exclusively for Monzo. Keep metadata; do not present a system stack as MonzoSansDisplay or MonzoSansText. |
| Outside these captures | Surfaces other than the two named URLs. |

### Family

- **Display:** `MonzoSansDisplay` — YAML `tokens.typography.family.display`. Used for all headlines, H1–H4, and footer section titles.
- **Body/UI:** `MonzoSansText` — YAML `tokens.typography.family.body`. Document default for body copy, nav links, button labels, and captions.

The following type-rule readings (two-font-discipline, weight-800-as-the-display-voice, clamp-driven-fluid-sizing, SemiBold-for-interactive-labels, letter-spacing-on-body, opposite-of-understated-European-banking-tradition, not-presenting-sans-serif-as-either-commissioned-family, not-replacing-either-family-with-a-system-font, not-using-the-display-face-for-body) are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification.

- **Two-font discipline**: MonzoSansDisplay owns headlines; MonzoSansText owns everything else. They never swap.
- **Weight 800 as the display voice**: Headlines at 800 weight create a bold, confident, consumer-app personality — the opposite of the understated European banking tradition.
- **Clamp-driven fluid sizing**: Monzo uses CSS `clamp()` extensively — headline sizes scale fluidly between mobile and desktop. No hard breakpoint font-size jumps.
- **SemiBold for interactive labels**: Button labels and nav items use weight 600 (not 400 or 700) — precise mid-weight for legibility without visual noise. Nav YAML weight is 400; button YAML weight is 600. Those two YAML roles stay unmerged.
- **Letter-spacing on body**: `-0.05em` on MonzoSansText throughout, giving the body text a slightly tight, refined quality without going full condensed.

Do not present `sans-serif` as MonzoSansDisplay or MonzoSansText. Do not replace either family with a system font. Do not use MonzoSansDisplay for body text.

### Type roles

Verified YAML `lineHeight` values are the unitless ratios `1.0`, `1.15`, `1.2`, `1.3`, and `1.4`. YAML sizes `61`, `49`, `39`, `25`, `16`, `14` stay as those numbers beside the §3 `~61px (clamp)` / `16px` writings. The following ratio-versus-size-local reading, including unitless-ratios-not-fixed-px, YAML-use-strings-kept-verbatim, Display-Hero-61-unmerged-from-Heading-LG-49-and-from-computed-48.8288px, Heading-39-unmerged-from-Subheading-25, Body-16-400-unmerged-from-Button-16-600-and-from-Nav-16-400, Body-Small-14-unmerged-from-form-error-14px, and YAML-`heading-lg`-use-`Section titles (clamp ~48.8px at 1440px)`-kept-as-that-role's-clamp-note-rather-than-a-layout-breakpoint, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification. The unitless ratios scale with font size and are not fixed px. `22.4px` is a computed companion of body 16px × 1.4, not a replacement for YAML `lineHeight` `1.4`.

| Role | Font | Size | Weight | Line height (YAML) | Tracking | Use (YAML) / Notes |
|---|---|---:|---:|---:|---|---|
| Display Hero | MonzoSansDisplay | YAML `61` / §3 `~61px (clamp)` | 800 | 1.0 | | `Hero billboard, MonzoSansDisplay ExtraBold` / Maximum billboard; single-line authority |
| Heading LG | MonzoSansDisplay | YAML `49` / §3 `~49px (clamp)` | 800 | 1.15 | | `Section titles (clamp ~48.8px at 1440px)` / Hero H2 / feature section titles |
| Heading | MonzoSansDisplay | YAML `39` / §3 `~39px (clamp)` | 800 | 1.2 | | `Sub-section heads (clamp ~39px)` / Sub-section H2 heads |
| Subheading | MonzoSansDisplay | YAML `25` / §3 `~25px (clamp)` | 800 | 1.3 | | `Card heads, H3, footer category (MonzoSansDisplay)` / Card H3, footer category labels |
| Body | MonzoSansText | YAML `16` / §3 `16px` | 400 | 1.4 | `-0.05em` | `Standard reading text, MonzoSansText` |
| Body Small | MonzoSansText | YAML `14` / §3 `14px` | 400 | 1.4 | | `Captions, metadata` |
| Button | MonzoSansText | YAML `16` / §3 `16px` | 600 | 1.0 | | `Button labels, MonzoSansText SemiBold` / All button labels, semibold |
| Nav | MonzoSansText | YAML `16` / §3 `16px` | 400 | 1.0 | | `Nav links, MonzoSansText` |

YAML `button` 16 / 600 / 1.0 is not merged with YAML `body` 16 / 400 / 1.4 or with YAML `nav` 16 / 400 / 1.0. Computed `48.8288px` is a live companion of Heading LG / Display Hero, not a replacement for YAML `61` or YAML `49`. Token-set paths: `tokens.typography.display-hero` · `tokens.typography.heading-lg` · `tokens.typography.heading` · `tokens.typography.subheading` · `tokens.typography.body` · `tokens.typography.body-sm` · `tokens.typography.button` · `tokens.typography.nav`.

### Assets

Catalog logo: type `simpleicons`, slug `monzo`. Treating that Simple Icons slug as a catalog identity-boundary record rather than a captured first-party Monzo mark file, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

App/phone mockups carry no shadow, consistent with the flat system. Treating that no-shadow imagery reading as source-stated image behavior rather than a complete image specification, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification. Hex values and geometry in the harvested components remain source-stated.

Characterizations in the following table such as “No illustration by default”, “Honest, calm, no hype”, “no shadow shimmer, consistent with the shadowless system”, “no spinner overlay that blocks the rest of the UI”, “No generic Something went wrong alone”, “States what's wrong and what would be valid”, “No jargon”, “No toast with emoji — the transaction row is the state”, and “midnight CTAs fade to reduced opacity rather than switch to grey to preserve brand read” are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no transactions)** | Mint canvas (`#f2f8f3`), single Midnight Ink sentence in body size explaining no activity, one teal or midnight pill CTA to add a pot or make a payment. No illustration by default. |
| **Empty (pot, no savings)** | Muted Slate (`#6b747b`) single line with next step ("Add money to this pot"). Honest, calm, no hype. |
| **Loading (transactions fetch)** | Skeleton rows at final card dimensions with 32px radius; flat mint pulse shimmer — no shadow shimmer, consistent with the shadowless system. |
| **Loading (account balance)** | Blurred/skeleton balance string in midnight ink; no spinner overlay that blocks the rest of the UI. |
| **Error (network fail)** | Inline banner in near-coral tone (coral `#ff4f40` border, white background); plain-English description of what failed and one retry action. No generic "Something went wrong" alone. |
| **Error (form validation)** | Field-level: red-toned border with 14px MonzoSansText message below. States what's wrong and what would be valid. |
| **Error (card declined)** | Push notification + in-app state: names the decline type in plain English. No jargon. |
| **Success (payment sent)** | Instant in-app confirmation with the transaction amount and recipient in a coral-accented row. No toast with emoji — the transaction row is the state. |
| **Success (pot created)** | Brief inline confirmation in warm tone; pot visible immediately below. 3s auto-dismiss if a toast appears. |
| **Skeleton** | Mint (`#f2f8f3`) blocks at final dimensions, 32px radius, flat pulse — no shadow shimmer. |
| **Disabled** | Muted Slate (`#6b747b`) on reduced-opacity background; midnight CTAs fade to reduced opacity rather than switch to grey to preserve brand read. |

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, attaching a YAML `Primitive type` only when the token set records that type on that component, keeping YAML fields beside the longer §4 writings, keeping Filter Chip Inactive as §4-only (`not in the token set`), keeping `#3b4c54` on the chip rather than as a general ink, keeping 500px pills unmerged from 64px chips and 4px badges and 32px cards, keeping homepage 51px height unmerged from product/hero 48px, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source records no `focus-visible` treatment; `focus-visible` visual treatment remains omitted. Source §15 names `focus rings` only as a `motion-instant` duration use (State commits, notification ticks, focus rings); that duration role is not `focus-visible` evidence and is not copied onto a `focus-visible` row as a colour. A later generic Focus observation would not be `focus-visible` evidence. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component.

### Primary (Home — Midnight Ink)

- Role: Primary nav CTA on home
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Background: `#091723`
- Text: `#ffffff`
- Radius: 500px
- Padding: `12px 24px`
- Font: `16px / 600 MonzoSansText`
- Height: 51px (computed)
- Use: YAML `Primary CTA on home ('Sign up')` — dark pill on light background
- Observed: default only
- YAML `tokens.components.button-primary`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the homepage Midnight Ink CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A primary action can be unavailable; visual treatment omitted. Source §14 Disabled says midnight CTAs fade to reduced opacity rather than switch to grey; that row is not copied here as a computed paint |
| loading | applicable | Sign-up is an in-place commit; visual treatment omitted. Source §14 Loading rows are not copied here as a computed paint |
| error | applicable | Sign-up can fail as a request; visual treatment omitted. Source §14 Error rows are not copied here as a computed paint |
| success | applicable | Sign-up can complete; visual treatment omitted. Source §14 Success rows are not copied here as a computed paint |

### Primary (Product — Teal)

- Role: Product-page primary CTA
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Background: `#016b83`
- Text: `#ffffff`
- Radius: 500px
- Padding: `12px 24px`
- Font: `16px / 600 MonzoSansText`
- Height: 48px (computed)
- Use: YAML `Product-page primary CTA ('Open a personal account')` — teal pill on light or mint background. Body also names "Personal account".
- Observed: default only
- YAML `tokens.components.button-teal`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the product-page Teal CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A primary action can be unavailable; visual treatment omitted |
| loading | applicable | Opening an account is an in-place commit; visual treatment omitted |
| error | applicable | Account-opening can fail as a request; visual treatment omitted |
| success | applicable | Account-opening can complete; visual treatment omitted |

### Inverse (White on Dark)

- Role: CTA within dark/hero sections
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Background: `#ffffff`
- Text: `#091723`
- Radius: 500px
- Padding: `12px 24px`
- Font: `16px / 600 MonzoSansText`
- Height: 48px (computed)
- Use: YAML `Hero-dark surface CTA ('Open a free bank account')` — white pill on midnight surface
- Observed: default only
- YAML `tokens.components.button-white`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the hero-dark White CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A primary action can be unavailable; visual treatment omitted |
| loading | applicable | Opening an account is an in-place commit; visual treatment omitted |
| error | applicable | Account-opening can fail as a request; visual treatment omitted |
| success | applicable | Account-opening can complete; visual treatment omitted |

### Filter Chip (Active)

- Role: Active state tab/filter
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Background: `#3b4c54`
- Text: `#ffffff`
- Radius: 64px
- Padding: `8px 16px`
- Font: `16px / 600 MonzoSansText`
- Height: 38px (computed)
- Use: YAML `Filter chip / feature tab ('Free features')`
- Observed: default (active) only
- YAML `tokens.components.button-chip`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the active filter chip |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A filter chip can be unavailable; visual treatment omitted |
| loading | not-applicable | A feature tab selects Free vs Paid features; the chip itself does not commit an in-place operation |
| error | not-applicable | Tab/filter meaning is selected versus resting, not a request or validation failure on the chip |
| success | not-applicable | Tab/filter meaning is selection, not action-outcome confirmation |

### Filter Chip (Inactive)

- Role: Inactive tab/filter pill
- Primitive type: not in the token set · Kind: interactive
- Anatomy: label
- Background: `#e3ebe4`
- Text: `#091723`
- Radius: 64px
- Padding: `8px 16px`
- Font: `16px / 600 MonzoSansText`
- Height: 38px (computed)
- Use: Inactive tab/filter pill ("Paid features")
- Observed: default (inactive) only
- YAML `tokens.components` does not record this control; values are body §4 only.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the inactive filter chip |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A filter chip can be unavailable; visual treatment omitted |
| loading | not-applicable | A feature tab selects Free vs Paid features; the chip itself does not commit an in-place operation |
| error | not-applicable | Tab/filter meaning is selected versus resting, not a request or validation failure on the chip |
| success | not-applicable | Tab/filter meaning is selection, not action-outcome confirmation |

### Search / Default

- Role: Search field on light background
- Primitive type: `input` · Kind: interactive
- Anatomy: value field
- Background: `#ffffff`
- Border: `1px solid #c2c8d0`
- Radius: 500px
- Font: `16px MonzoSansText`
- Shadow: `rgba(0, 0, 0, 0.1) 0px 0px 10px 0px`
- Use: YAML `Search field on light background` — the only surface using a shadow in the system
- Observed: default only
- YAML `tokens.components.input-search`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the search field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | An input can be unavailable; visual treatment omitted |
| loading | applicable | A search field can wait on results; visual treatment omitted |
| error | applicable | Form field; visual treatment omitted. Source §14 names a field-level 14px MonzoSansText message; that row is not copied here as a computed paint |
| success | not-applicable | A search field submits a query; it does not report action-outcome success on itself |

### Mint Surface Card

- Role: Tinted content card on mint surface
- Primitive type: `card`
- Anatomy: surface
- Background: `#f2f8f3`
- Radius: 32px
- Use: YAML `Tinted content card on mint surface` — separation via flat tint, no border
- Observed: default
- YAML `tokens.components.card-mint`

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### White Feature Card

- Role: White feature card on mint background
- Primitive type: `card`
- Anatomy: surface
- Background: `#ffffff`
- Radius: 32px
- Use: YAML `White feature card on mint background` — light elevation via background contrast
- Observed: default
- YAML `tokens.components.card-white`

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### Dark (Midnight) Card

- Role: Dark feature card on midnight-background section
- Primitive type: `card`
- Anatomy: surface
- Background: `#091723`
- Text: `#ffffff`
- Radius: 32px
- Use: YAML `Dark card on brand dark surface`
- Observed: default
- YAML `tokens.components.card-dark`

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### Hot Coral Badge

- Role: Accent badge / tag
- Primitive type: `badge`
- Anatomy: label
- Background: `#ff4f40`
- Text: `#ffffff`
- Radius: 4px
- Use: YAML `Hot Coral accent badge / tag` — the one context where coral fills a surface rather than tinting text
- Observed: default
- YAML `tokens.components.badge-coral`

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### Nav Tab

- Role: Top nav item
- Primitive type: `tab` · Kind: interactive
- Anatomy: label
- Background: transparent (white page) / `#091723` (dark mode / mobile)
- Text: `rgba(9, 23, 35, 0.6)` for inactive; `#091723` for active
- Font: `16px / 400 MonzoSansText`
- Active: YAML `Top nav item; active = coral #ff4f40 text`. Body also records a personal/business toggle that uses `#091723` background pill, white text.
- CTA: Midnight Ink pill ("Sign up") right-aligned
- Use: YAML `Top nav item; active = coral #ff4f40 text`
- Observed: default plus named active/inactive
- YAML `tokens.components.nav-tab`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the top nav item |
| hover | applicable | Pointer-web tab/link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav item can be unavailable; visual treatment omitted |
| loading | not-applicable | A nav item selects a destination; the item itself does not enter a loading state |
| error | not-applicable | Tab/link meaning is selected versus resting, not a request or validation failure on the item |
| success | not-applicable | Tab/link meaning is selection, not action-outcome confirmation |

Additional observed named state: inactive `rgba(9, 23, 35, 0.6)` versus active `#091723`, with YAML active coral `#ff4f40` text. Treating that appearance as a captured variant, not `focus-visible` evidence, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

### Hero dark (local recipe)

Treating the following as a source §9 local composition — midnight-ink `#091723` parent + ~49px MonzoSansDisplay weight 800 white headline + subhead 16px MonzoSansText weight 400 `rgba(255,255,255,0.7)` + white pill CTA — and not as a rewrite of YAML Inverse (White on Dark) or a page-wide token, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

- Role: hero-dark parent surface
- Anatomy: surface
- Background: `#091723`
- Local children (this composition only): Headline at ~49px MonzoSansDisplay weight 800, color white. Subhead 16px MonzoSansText weight 400, `rgba(255,255,255,0.7)`. White pill CTA: white bg, `#091723` text, 500px radius, `12px 24px` padding, 16px/600 MonzoSansText.
- Kind, Type, and a state-applicability map are omitted. Harvested Inverse (White on Dark) stays in its own slot.

### Feature card (local recipe)

Treating the following as a source §9 local composition — white `#ffffff` parent + 32px radius + no shadow + title 25px MonzoSansDisplay weight 800 `#091723` + body 16px MonzoSansText weight 400 `#6b747b` on a mint `#f2f8f3` section background — and not as a rewrite of YAML White Feature Card or a global card-copy token, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

- Role: feature-card parent
- Anatomy: surface
- Background: `#ffffff`
- Radius: 32px
- Shadow: none
- Local children (this composition only): Title at 25px MonzoSansDisplay weight 800, color `#091723`. Body 16px MonzoSansText weight 400, `#6b747b`. On a mint (`#f2f8f3`) section background.
- Kind, Type, and a state-applicability map are omitted. Harvested White Feature Card stays in its own slot.

### Primary nav (local recipe)

Treating the following as a source §9 local composition — white background, transparent; MonzoSansText 16px/400 links in `rgba(9,23,35,0.6)` inactive, `#091723` active; Midnight pill ("Sign up") right-aligned — and not as a rewrite of YAML Nav Tab / Primary (Home — Midnight Ink) or a global header token, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

- Role: primary-nav parent
- Anatomy: surface
- Background: white, transparent
- Local children (this composition only): MonzoSansText 16px/400 links in `rgba(9,23,35,0.6)` inactive, `#091723` active. Midnight pill ("Sign up") right-aligned: bg `#091723`, white text, 500px radius, `12px 24px` padding.
- Kind, Type, and a state-applicability map are omitted. Harvested Nav Tab and Primary (Home — Midnight Ink) stay in their own slots.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

YAML spacing is xs 4, sm 8, md 16, base 24, lg 32, xl 48, xxl 64, section 80. Body layout repeats 4px, 8px, 16px, 24px, 32px, 48px, 64px, 80px, 128px. Harvested heights: 51px homepage pill, 48px product/hero pills, 38px filter chips. Nav height ~56–64px header.

The following layout readings — max-content-width-~1200px-centered, hero-full-bleed-dark-section-with-centered-single-column-content, feature-sections-2-column-card-grids-alternating-white-mint, dark-sections-for-brand-immersion-and-closing-CTAs, generous-breathing-room, consumer-app-analogue-to-Stripe's-engineering-density, surface-alternation-as-structure, pill-geometry-as-warmth, antithesis-of-institutional-banking-corners — are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification.

Recorded layout:

- Max content width: ~1200px (centered)
- Hero: full-bleed dark section with centered single-column content
- Feature sections: 2-column card grids alternating white ↔ mint backgrounds
- Dark sections (`#091723`) for brand immersion and closing CTAs

Whitespace philosophy (source): **Generous breathing room**: Monzo uses wide section spacing (64–80px gaps) to let each value proposition breathe — the consumer-app analogue to Stripe's engineering density. **Surface alternation as structure**: White → Mint → Midnight alternation creates rhythm without borders or shadows. **Pill geometry as warmth**: The 500px radius on all interactive elements signals friendliness — the antithesis of institutional banking corners.

Treating that table as a recorded span of named widths, not a complete specification of every unlisted control, treating the 51px / 48px / 38px / ~56–64px figures as surface measurements in this packet rather than a cross-viewport specification, treating YAML `heading-lg` use `Section titles (clamp ~48.8px at 1440px)` as that type role's clamp note rather than as a breakpoint row, treating the touch-target record as a purpose reading of those measurements rather than a complete target-size specification, treating app/phone-mockups-no-shadow / cards-maintain-radius-at-all-sizes as source-stated image behavior rather than a complete image specification, and treating hero-clamp / cards-2-column-to-single-column / nav-horizontal-to-hamburger as recorded collapsing rather than a complete responsive specification, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

Source breakpoint table:

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses via clamp, button full-width |
| Tablet | 640–1024px | 2-up cards, moderate padding |
| Desktop | 1024–1200px | Full layout, centered max-width 1200px, 3-column feature grids |

Collapsing strategy recorded in the source: Hero: clamp `--text-billboard` from ~47px (mobile) to ~61px (desktop), weight 800 maintained; Cards: 2-column → single-column stacked; Nav: horizontal pill links → hamburger toggle on mobile.

Image behavior: App/phone mockups carry no shadow, consistent with the flat system; Cards maintain radius at all sizes.

Touch-target record: All pill buttons at minimum 48px height — generous touch target; Nav height ~56–64px header; Filter chips at 38px height with 16px padding — comfortable tap area.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Official voice principles

The three named principles below are from Monzo's tone-of-voice guide as the source records it (`monzo.com/tone-of-voice/` and `https://monzo.com/about/`). They are Monzo-authored content-guide names, not a reconstruction of a UI specification.

Monzo's voice is defined by three official principles — **Straightforward Kindness**, **Everyday Magic**, and **Warm Wit** — calibrated by channel, so operational messages dial up clarity and dial down humor, while campaigns can fully embrace wit. The source records that Monzo's tone-of-voice guide explicitly bans passive voice (to obscure responsibility), empty marketing clichés ("discover", "so much more"), and any humor that targets or punches down.

### Observed (live surfaces, 2026-06-22)

The live strings below are source-stated. Treating the parenthetical characterizations (homepage-title / homepage-H2-hero / current-account-H1 / about-page-mission-statement) as citation-character of those live strings is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

- "Your New Favourite Bank" — homepage title *(verified live 2026-06-22)*
- "Monzo for all your money" — homepage H2 hero *(verified live 2026-06-22)*
- "Current accounts that keep up" — current-account H1 *(verified live 2026-06-22)*
- "We're here to make money work for everyone" — about page mission statement *(verified via WebFetch 2026-06-22)*

Treating the §14 empty/loading/error/success strings as part of the state contract, not extra Observed voice samples, is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

### Channel register

The following through-line reading, context table, and forbidden-register list — approachability, every-word-prioritises-what-matters-to-the-reader, Operational-Straightforward-Kindness-maxed-Warm-Wit-absent, Customer-service-clear-and-warm, Marketing-all-three-principles-active, Nav-plain-functional-lowercase-friendly, Hero-confident-declarative-consumer-warm — are a derived editorial implementation inference from the verified surfaces; they are not Monzo-authored or a separately published UI specification. They are not the Observed strings above. The three principle names in Official voice principles remain Monzo-authored.

The through-line is approachability: every word prioritises what matters to the reader, not what's convenient to say internally.

| Context | Tone |
|---|---|
| Operational (notifications, alerts) | Straightforward Kindness maxed; Warm Wit absent — direct, responsible, solution-oriented |
| Customer service | Clear and warm; single sincere apology then pivot to resolution |
| Marketing / campaigns | All three principles active; vivid unexpected word choices over tired adjectives |
| Nav / UI labels | Plain, functional, lowercase-friendly ("Bank accounts", "Savings and ISAs") |
| Hero headlines | Confident declarative, consumer-warm: "Your New Favourite Bank", "Bank on an award-winning app" |

**Forbidden register**: passive-voice responsibility-dodging, empty hype verbs ("unlock", "discover"), gendered or ableist language, clichés requiring specialized cultural knowledge, literal magic references, punch-down humor.

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

Treating the list below as unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Monzo-authored or a separately published UI specification.

These decisions are unnamed values, not permissions to invent:

- `ease-enter` / `ease-exit` / `ease-standard` cubic-bezier curves
- hover and `focus-visible` visual treatments on the harvested controls
- exact form-validation red hex (source §14 writes `red-toned border`; no hex is recorded)
- interactive kind and state-applicability map for Mint Surface Card, White Feature Card, Dark (Midnight) Card, and Hot Coral Badge
- Primitive type on Filter Chip (Inactive) (YAML `tokens.components` has no row)
- motion animation names, transition properties, and any duration beyond the four source tokens — promote only after per-component computed capture of all five kinds; a single named duration is not that gate
