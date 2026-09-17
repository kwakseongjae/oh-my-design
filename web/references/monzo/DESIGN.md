---
id: monzo
name: Monzo
country: UK
category: fintech
homepage: "https://monzo.com"
primary_color: "#ff4f40"
logo:
  type: simpleicons
  slug: monzo
verified: "2026-06-22"
added: "2026-06-22"
omd: "0.1"
tokens:
  source: reconciled
  extracted: "2026-06-22"
  note: "primary = Hot Coral (#ff4f40) — brand signature on logo, card product, headings; CTA buttons use Midnight Ink (#091723) on home and Teal (#016b83) on product pages. Custom MonzoSansText/MonzoSansDisplay type system."
  colors:
    primary: "#ff4f40"
    primary-alt: "#f64d3f"
    midnight: "#091723"
    deep-navy: "#112231"
    teal: "#016b83"
    canvas: "#ffffff"
    mint: "#f2f8f3"
    soft-mint: "#e3ebe4"
    ink: "#091723"
    body: "#6b747b"
    muted: "#b5b9bd"
    on-primary: "#ffffff"
    on-dark: "#ffffff"
    on-midnight: "#ffffff"
    hairline: "#c2c8d0"
  typography:
    family: { display: "MonzoSansDisplay", body: "MonzoSansText" }
    display-hero: { size: 61, weight: 800, lineHeight: 1.0, use: "Hero billboard, MonzoSansDisplay ExtraBold" }
    heading-lg:   { size: 49, weight: 800, lineHeight: 1.15, use: "Section titles (clamp ~48.8px at 1440px)" }
    heading:      { size: 39, weight: 800, lineHeight: 1.2, use: "Sub-section heads (clamp ~39px)" }
    subheading:   { size: 25, weight: 800, lineHeight: 1.3, use: "Card heads, H3, footer category (MonzoSansDisplay)" }
    body:         { size: 16, weight: 400, lineHeight: 1.4, use: "Standard reading text, MonzoSansText" }
    body-sm:      { size: 14, weight: 400, lineHeight: 1.4, use: "Captions, metadata" }
    button:       { size: 16, weight: 600, lineHeight: 1.0, use: "Button labels, MonzoSansText SemiBold" }
    nav:          { size: 16, weight: 400, lineHeight: 1.0, use: "Nav links, MonzoSansText" }
  spacing: { xs: 4, sm: 8, md: 16, base: 24, lg: 32, xl: 48, xxl: 64, section: 80 }
  rounded: { xs: 4, sm: 24, md: 32, lg: 64, full: 500 }
  shadow:
    none: "none"
    float: "rgba(0, 0, 0, 0.1) 0px 0px 10px 0px"
  components:
    button-primary: { type: button, bg: "#091723", fg: "#ffffff", radius: "500px", padding: "12px 24px", font: "16px / 600 MonzoSansText", use: "Primary CTA on home ('Sign up')" }
    button-teal: { type: button, bg: "#016b83", fg: "#ffffff", radius: "500px", padding: "12px 24px", font: "16px / 600 MonzoSansText", use: "Product-page primary CTA ('Open a personal account')" }
    button-white: { type: button, bg: "#ffffff", fg: "#091723", radius: "500px", padding: "12px 24px", font: "16px / 600 MonzoSansText", use: "Hero-dark surface CTA ('Open a free bank account')" }
    button-chip: { type: button, bg: "#3b4c54", fg: "#ffffff", radius: "64px", padding: "8px 16px", font: "16px / 600 MonzoSansText", use: "Filter chip / feature tab ('Free features')" }
    input-search: { type: input, bg: "#ffffff", border: "1px solid #c2c8d0", radius: "500px", font: "16px MonzoSansText", shadow: "rgba(0,0,0,0.1) 0px 0px 10px 0px", use: "Search field on light background" }
    card-mint: { type: card, bg: "#f2f8f3", radius: "32px", use: "Tinted content card on mint surface" }
    card-white: { type: card, bg: "#ffffff", radius: "32px", use: "White feature card on mint background" }
    card-dark: { type: card, bg: "#091723", fg: "#ffffff", radius: "32px", use: "Dark card on brand dark surface" }
    badge-coral: { type: badge, bg: "#ff4f40", fg: "#ffffff", radius: "4px", use: "Hot Coral accent badge / tag" }
    nav-tab: { type: tab, fg: "#091723", font: "16px / 400 MonzoSansText", use: "Top nav item; active = coral #ff4f40 text" }
  components_harvested: true
---

# Design System Inspiration of Monzo

## 1. Visual Theme & Atmosphere

Monzo is the UK's most recognisable neobank, and its visual identity is built around one audacious choice: a single saturated Hot Coral (`#ff4f40`) on a canvas that is otherwise nearly achromatic. The homepage opens on pure white (`#ffffff`) with a deep Midnight Ink (`#091723`) nav bar and the coral reserved almost entirely for the physical card, the logo, and occasional editorial headings — a ratio that makes every appearance of the accent feel intentional, almost ceremonial. Product pages shift the palette slightly: a cool Mint surface (`#f2f8f3`) carries content cards, Teal (`#016b83`) powers the primary CTA, and dark full-bleed sections in Midnight Ink create a dramatic chiaroscuro against all that white.

The typography is a two-font custom system — **MonzoSansDisplay** for all headlines and **MonzoSansText** for body and UI — both commissioned exclusively for Monzo. Display headlines run weight 800 at large sizes (approximately 48.8px on hero at desktop), while body and UI text runs MonzoSansText at 16px / weight 400 with `-0.05em` letter-spacing built into the brand spec. The combination reads as warm but engineered: approachable enough for a 16-year-old opening their first account, precise enough for a freelancer checking their tax pot.

What distinguishes Monzo from its fintech peers is the geometry: every interactive element — buttons, nav links, the search bar — uses a full 500px pill radius. There are essentially no hard corners on interactive surfaces. Cards use generous 32px–64px radii. Shadows are nearly absent; the sole exception is a soft `rgba(0,0,0,0.1)` float on the search bar. Depth and section separation come entirely from alternating backgrounds (white ↔ mint ↔ midnight), not from elevation.

**Key Characteristics:**
- Hot Coral (`#ff4f40`) appears only on logo, card product, and select headings — never as a button fill
- Midnight Ink (`#091723`) is the primary CTA background on home; Teal (`#016b83`) on product pages
- MonzoSansDisplay (weight 800) for all display titles — warm, rounded, distinctly non-banking
- MonzoSansText for all body and UI — semibolded (600) on interactive labels
- 500px pill radius on every button and interactive element — the brand's most recognisable gesture
- Nearly zero shadows; depth through flat surface alternation (white / mint `#f2f8f3` / midnight `#091723`)
- Negative letter-spacing (`-0.05em`) on MonzoSansText throughout the UI

## 2. Color Palette & Roles

### Primary
- **Hot Coral** (`#ff4f40`): The signature brand color. Appears on the physical Hot Coral debit card, the Monzo logo, certain editorial headings, and icon/link accents. Never fills a button background. This restraint is the rule — the system keeps the interface 95% achromatic so coral retains maximum attention value.
- **Midnight Ink** (`#091723`): The dominant dark color. Primary CTA button background on the homepage ("Sign up"), the nav bar background in dark mode, footer, and full-bleed dark sections. Deep, almost navy-black — warmer than pure black.
- **Pure White** (`#ffffff`): Page canvas and card surface on light sections.

### Brand & Surface
- **Mint Canvas** (`#f2f8f3`): The primary page tint. Used for content card backgrounds, section washes, and alternating light sections. A very pale green-white that reads as fresh and clean.
- **Soft Mint** (`#e3ebe4`): Hover fill and chip inactive state. Slightly deeper than Mint Canvas.
- **Deep Navy** (`#112231`): A slightly lighter dark than Midnight Ink, used for section backgrounds and footer accents.

### Interactive
- **Teal CTA** (`#016b83`): The primary CTA color on product/feature pages ("Open a personal account", "Personal account"). A deep blue-green that complements the coral without competing.
- **Muted Slate** (`#6b747b`): Secondary body text, metadata, and navigation links in the muted state.
- **Fog** (`#b5b9bd`): Placeholder text, tertiary labels, and borders.

### Text
- **Ink / Midnight** (`#091723`): Primary headings and body text on light surfaces.
- **White** (`#ffffff`): All text on dark (midnight / teal) surfaces.
- **Muted Nav** (`rgba(9, 23, 35, 0.6)`): Inactive / secondary nav items at reduced opacity.

### Hairline & Border
- **Hairline** (`#c2c8d0`): Card borders, form field outlines, dividers.

## 3. Typography Rules

### Font Family
- **Display**: `MonzoSansDisplay` — custom commissioned type, weights 600–800. Used for all headlines, H1–H4, and footer section titles.
- **Body/UI**: `MonzoSansText` — custom commissioned type, weights 400–700. Document default for body copy, nav links, button labels, and captions.
- **CSS Variables**: `--font-stack-body: "MonzoSansText", sans-serif` / `--font-stack-title: "MonzoSansDisplay", sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | MonzoSansDisplay | ~61px (clamp) | 800 | 1.0 | Maximum billboard; single-line authority |
| Heading LG | MonzoSansDisplay | ~49px (clamp) | 800 | 1.15 | Hero H2 / feature section titles |
| Heading | MonzoSansDisplay | ~39px (clamp) | 800 | 1.2 | Sub-section H2 heads |
| Subheading | MonzoSansDisplay | ~25px (clamp) | 800 | 1.3 | Card H3, footer category labels |
| Body | MonzoSansText | 16px | 400 | 1.4 | Standard reading text |
| Body Small | MonzoSansText | 14px | 400 | 1.4 | Captions, metadata |
| Button | MonzoSansText | 16px | 600 | 1.0 | All button labels, semibold |
| Nav | MonzoSansText | 16px | 400 | 1.0 | Navigation links |

### Principles
- **Two-font discipline**: MonzoSansDisplay owns headlines; MonzoSansText owns everything else. They never swap.
- **Weight 800 as the display voice**: Headlines at 800 weight create a bold, confident, consumer-app personality — the opposite of the understated European banking tradition.
- **Clamp-driven fluid sizing**: Monzo uses CSS `clamp()` extensively — headline sizes scale fluidly between mobile and desktop. No hard breakpoint font-size jumps.
- **SemiBold for interactive labels**: Button labels and nav items use weight 600 (not 400 or 700) — precise mid-weight for legibility without visual noise.
- **Letter-spacing on body**: `-0.05em` on MonzoSansText throughout, giving the body text a slightly tight, refined quality without going full condensed.

## 4. Component Stylings

### Buttons

**Primary (Home — Midnight Ink)**
- Background: `#091723`
- Text: `#ffffff`
- Radius: 500px
- Padding: 12px 24px
- Font: 16px / 600 / MonzoSansText
- Height: 51px (computed)
- Use: Primary nav CTA ("Sign up") — dark pill on light background

**Primary (Product — Teal)**
- Background: `#016b83`
- Text: `#ffffff`
- Radius: 500px
- Padding: 12px 24px
- Font: 16px / 600 / MonzoSansText
- Height: 48px (computed)
- Use: Product-page primary CTA ("Open a personal account", "Personal account") — teal pill on light or mint background

**Inverse (White on Dark)**
- Background: `#ffffff`
- Text: `#091723`
- Radius: 500px
- Padding: 12px 24px
- Font: 16px / 600 / MonzoSansText
- Height: 48px (computed)
- Use: CTA within dark/hero sections ("Open a free bank account") — white pill on midnight surface

**Filter Chip (Active)**
- Background: `#3b4c54`
- Text: `#ffffff`
- Radius: 64px
- Padding: 8px 16px
- Font: 16px / 600 / MonzoSansText
- Height: 38px (computed)
- Use: Active state tab/filter ("Free features")

**Filter Chip (Inactive)**
- Background: `#e3ebe4`
- Text: `#091723`
- Radius: 64px
- Padding: 8px 16px
- Font: 16px / 600 / MonzoSansText
- Height: 38px (computed)
- Use: Inactive tab/filter pill ("Paid features")

### Inputs

**Search / Default**
- Background: `#ffffff`
- Border: 1px solid `#c2c8d0`
- Radius: 500px
- Font: 16px MonzoSansText
- Shadow: `rgba(0, 0, 0, 0.1) 0px 0px 10px 0px`
- Use: Search bar on light background — the only surface using a shadow in the system

### Cards & Containers

**Mint Surface Card**
- Background: `#f2f8f3`
- Radius: 32px
- Use: Content card on page mint background — separation via flat tint, no border

**White Feature Card**
- Background: `#ffffff`
- Radius: 32px
- Use: White card on mint background — light elevation via background contrast

**Dark (Midnight) Card**
- Background: `#091723`
- Text: `#ffffff`
- Radius: 32px
- Use: Dark feature card on midnight-background section

### Badges

**Hot Coral Badge**
- Background: `#ff4f40`
- Text: `#ffffff`
- Radius: 4px
- Use: Accent badge — the one context where coral fills a surface rather than tinting text

### Navigation

- Background: transparent (white page) / `#091723` (dark mode / mobile)
- Text: `rgba(9, 23, 35, 0.6)` for inactive; `#091723` for active
- Font: 16px MonzoSansText weight 400
- Active: personal/business toggle uses `#091723` background pill, white text
- CTA: Midnight Ink pill ("Sign up") right-aligned

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://monzo.com/ (homepage, live DOM inspect) · https://monzo.com/current-account/ (product surface, live DOM inspect)
**Tier 2 sources:** styles.refero.design/style/e8a1d114-6924-4f03-acd2-996dd30f15a6 (Monzo — Warm coral on cool mint paper) · getdesign.md/monzo — not found
**Conflicts unresolved:** none (Refero confirmed coral as brand-signature / pill-500px / mint surface system; live inspect confirmed identical values)

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 80px, 128px
- Card padding: 30–32px
- Section gaps: 64–80px
- Element gap within cards: 24px

### Grid & Container
- Max content width: ~1200px (centered)
- Hero: full-bleed dark section with centered single-column content
- Feature sections: 2-column card grids alternating white ↔ mint backgrounds
- Dark sections (`#091723`) for brand immersion and closing CTAs

### Whitespace Philosophy
- **Generous breathing room**: Monzo uses wide section spacing (64–80px gaps) to let each value proposition breathe — the consumer-app analogue to Stripe's engineering density.
- **Surface alternation as structure**: White → Mint → Midnight alternation creates rhythm without borders or shadows.
- **Pill geometry as warmth**: The 500px radius on all interactive elements signals friendliness — the antithesis of institutional banking corners.

### Border Radius Scale
- Micro (4px): Badges and small tags
- Input / Search (500px): Buttons and search pill — full radius
- Card SM (24px): Smaller containers
- Card MD (32px): Content cards — the workhorse
- Card LG (64px): Large feature cards
- Full (500px): Buttons, nav pills, all interactive elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | All cards, nav, sections — most of the system |
| Float (Level 1) | `rgba(0,0,0,0.1) 0px 0px 10px 0px` | Search bar only — the system's single shadow usage |

**Shadow Philosophy**: Monzo is near-shadowless. Background alternation (white / `#f2f8f3` mint / `#091723` midnight) creates visual hierarchy without elevation. This mobile-first, flat-surface approach makes the UI feel native on iOS/Android where it lives natively as a banking app — lift-based skeuomorphism would feel out of place.

## 7. Do's and Don'ts

### Do
- Use Hot Coral (`#ff4f40`) only on logo, card product, editorial headings, and icon accents
- Use Midnight Ink (`#091723`) for primary CTAs on home and for dark full-bleed sections
- Use Teal (`#016b83`) for CTAs on product feature pages
- Apply 500px radius to every button and interactive pill — it's the brand's signature geometry
- Use MonzoSansDisplay weight 800 for all display headlines
- Use MonzoSansText weight 600 for all button labels and interactive text
- Separate sections by alternating white, mint (`#f2f8f3`), and midnight — never with shadows
- Apply `-0.05em` letter-spacing on MonzoSansText body elements

### Don't
- Use Hot Coral as a button background fill — it must stay as an accent color, not a CTA color
- Use shadows for card elevation — Monzo's depth comes from surface-color contrast
- Apply hard square corners to buttons or interactive elements — everything is a pill
- Mix in additional accent colors beyond coral, teal, and midnight
- Use light-weight (300 / 400) headlines — display is always weight 800
- Use MonzoSansDisplay for body text — it's a display-only face
- Introduce gradients on backgrounds — sections are flat, single-tone fills
- Over-decorate: the system's power is restraint; every coral touch is an event

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses via clamp, button full-width |
| Tablet | 640–1024px | 2-up cards, moderate padding |
| Desktop | 1024–1200px | Full layout, centered max-width 1200px, 3-column feature grids |

### Touch Targets
- All pill buttons at minimum 48px height — generous touch target
- Nav height ~56–64px header
- Filter chips at 38px height with 16px padding — comfortable tap area

### Collapsing Strategy
- Hero: clamp `--text-billboard` from ~47px (mobile) to ~61px (desktop), weight 800 maintained
- Cards: 2-column → single-column stacked
- Nav: horizontal pill links → hamburger toggle on mobile

### Image Behavior
- App/phone mockups carry no shadow, consistent with the flat system
- Cards maintain radius at all sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Hot Coral: `#ff4f40` — logo, card, editorial accent only
- Primary CTA (home): Midnight Ink `#091723`
- Primary CTA (product): Teal `#016b83`
- Inverse CTA: White `#ffffff` on dark backgrounds
- Page canvas: White `#ffffff`
- Tinted surface: Mint `#f2f8f3`
- Dark section: Midnight `#091723`
- Body text (light bg): Midnight `#091723`
- Secondary text: Slate `#6b747b`
- Muted nav: `rgba(9,23,35,0.6)`
- Hairline / border: `#c2c8d0`

### Example Component Prompts
- "Create a hero section with midnight-ink background (`#091723`). Headline at ~49px MonzoSansDisplay weight 800, color white. Subhead 16px MonzoSansText weight 400, rgba(255,255,255,0.7). White pill CTA: white bg, #091723 text, 500px radius, 12px 24px padding, 16px/600 MonzoSansText."
- "Design a feature card: white background (#ffffff), 32px radius, no shadow. Title at 25px MonzoSansDisplay weight 800, color #091723. Body 16px MonzoSansText weight 400, #6b747b. On a mint (#f2f8f3) section background."
- "Create a teal CTA button: bg #016b83, white text, 500px radius, 12px 24px padding, 16px/600 MonzoSansText — 'Open a personal account'."
- "Build a primary nav: white background, transparent. MonzoSansText 16px/400 links in rgba(9,23,35,0.6) inactive, #091723 active. Midnight pill ('Sign up') right-aligned: bg #091723, white text, 500px radius, 12px 24px padding."

### Iteration Guide
1. Hot Coral (`#ff4f40`) is the brand ace — never dilute by spreading it on CTAs
2. All interactive elements are 500px radius pills — this is non-negotiable
3. Page depth = surface alternation, not shadows (white → mint → midnight)
4. Headline = MonzoSansDisplay 800; UI = MonzoSansText 400/600
5. CTA color depends on surface: midnight on white, teal on light/product, white on dark
6. `-0.05em` letter-spacing on MonzoSansText gives body text its brand-specific feel

---

## 10. Voice & Tone

Monzo's voice is defined by three official principles — **Straightforward Kindness**, **Everyday Magic**, and **Warm Wit** — calibrated by channel, so operational messages dial up clarity and dial down humor, while campaigns can fully embrace wit. The through-line is approachability: every word prioritises what matters to the reader, not what's convenient to say internally. Monzo's tone-of-voice guide explicitly bans passive voice (to obscure responsibility), empty marketing clichés ("discover", "so much more"), and any humor that targets or punches down.

| Context | Tone |
|---|---|
| Operational (notifications, alerts) | Straightforward Kindness maxed; Warm Wit absent — direct, responsible, solution-oriented |
| Customer service | Clear and warm; single sincere apology then pivot to resolution |
| Marketing / campaigns | All three principles active; vivid unexpected word choices over tired adjectives |
| Nav / UI labels | Plain, functional, lowercase-friendly ("Bank accounts", "Savings and ISAs") |
| Hero headlines | Confident declarative, consumer-warm: "Your New Favourite Bank", "Bank on an award-winning app" |

**Voice samples (verbatim from live site):**
- "Your New Favourite Bank" — homepage title *(verified live 2026-06-22)*
- "Monzo for all your money" — homepage H2 hero *(verified live 2026-06-22)*
- "Current accounts that keep up" — current-account H1 *(verified live 2026-06-22)*
- "We're here to make money work for everyone" — about page mission statement *(verified via WebFetch 2026-06-22)*

**Forbidden register**: passive-voice responsibility-dodging, empty hype verbs ("unlock", "discover"), gendered or ableist language, clichés requiring specialized cultural knowledge, literal magic references, punch-down humor.

## 11. Brand Narrative

Monzo was founded in **2015** in London by **Tom Blomfield** (CEO), Jonas Huckestein, Jason Bates, Paul Rippon, and Gary Dolman — a team largely assembled from Starling Bank — and launched its first prepaid beta card in 2016 before becoming a fully licensed UK bank in 2017. The company's founding premise was radical transparency: at a time when UK high-street banks (Barclays, HSBC, Lloyds, NatWest) still operated on legacy core-banking systems and charged opaque fees, Monzo offered real-time spending notifications, instant balance updates, and zero foreign transaction fees — features so obviously missing from traditional banking that the viral waitlist was the proof of demand.

The signature product decision was the **Hot Coral debit card** — a color so loud it became a social signal. Being spotted paying with the coral card became a status marker among London millennials; the color itself became the brand. Monzo has grown to serve **over 15 million personal and business customers** in the UK (as of 2025), with a stated mission of *"making money work for everyone"* — which explicitly includes under-16s, 16-17s, and business customers, not just the financially comfortable early-adopter demographic.

What Monzo refuses, visible in its design system: the institutional gravity of dark-navy-and-gold banking aesthetics, dense fee disclosure buried in fine print, and any design that treats a bank account as a product to be sold rather than a problem to be solved. What it embraces: a consumer-app sensibility applied to financial infrastructure; a single audacious coral as the only saturated accent; and a tone of voice that treats the reader as an intelligent adult who deserves plain English.

## 12. Principles

1. **Make money work for everyone.** The company's stated mission. *UI implication:* the product must be legible to a 16-year-old opening their first account and to a small business owner managing cash flow — the same interface, the same clarity.
2. **Transparency, always.** Real-time notifications, instant balance, no hidden fees. *UI implication:* never surface a number the user hasn't understood; states (loading, error, empty) must tell users exactly what's happening and what to do.
3. **Restraint earns attention.** The coral is powerful because it appears rarely. *UI implication:* use one accent color; keep 95% of the UI achromatic; make every coral touch an intentional event.
4. **A bank in your pocket.** Monzo lives in the app; the website is a sign-up surface. *UI implication:* 500px pill geometry, flat shadows, and generous touch targets reflect native iOS/Android DNA, not desktop-web banking conventions.
5. **Warm but precise.** MonzoSansDisplay is rounded and friendly; the system is still exact about spacing and color values. *UI implication:* warmth through form (rounded type, pill shapes), precision through function (consistent tokens, no improvisation).

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Monzo user segments (UK millennials, Gen Z first-time bankers, small business owners, families), not individual people.*

**Priya Mehta, 24, London.** A graduate working her first full-time job. Opened Monzo because her flatmate showed her the coral card and real-time notifications. Uses spending pots religiously — one for rent, one for groceries, one for festivals. Trusts Monzo because it never hid a fee and the UI tells her exactly what happened the second she spends. Would switch banks if Monzo ever started feeling like her parents' bank.

**Jake Thornton, 31, Manchester.** A freelancer who uses Monzo Business for invoicing and personal Monzo for living expenses. Values the tax pot feature and the clear separation of business income. Reads the in-app explanations because they're in plain English. Gets mildly annoyed by traditional banks' 48-hour confirmation SMS — Monzo's instant notifications feel like the baseline of respect.

**Amara Osei, 42, Birmingham.** A parent who opened a Monzo Under 16 account for her daughter. Appreciates the controls and the notifications sent to both accounts. Chose Monzo specifically because the app didn't feel intimidating or "like banking" — it felt like a practical tool.

**Dan Kowalski, 37, Leeds.** An e-commerce seller who switched from a high-street business account. The switching guarantee and instant setup made it a no-brainer. Judges fintech apps by how quickly he can find a transaction from six months ago; Monzo's search passes that test.

## 14. States

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

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, notification ticks, focus rings |
| `motion-fast` | 100ms | Hover, chip press, pill ripple |
| `motion-standard` | 200ms | Card expand, dropdown, sheet |
| `motion-slow` | 300ms | Page-level transitions, hero section reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving elements — sheets, cards, notifications |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and app-native — consistent with Monzo's mobile-first DNA. Pill chips respond to press with subtle scale/opacity; transaction rows reveal at `motion-standard / ease-enter`. No bounce or spring — a current-account product signals steady reliability. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional and the coral accent never animates.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://monzo.com/ (homepage)
- https://monzo.com/current-account/ (product surface)

Key observations:
- body: font-family MonzoSansText; color rgb(0,0,0); font-size 16px; line-height 22.4px
- H2 hero "Monzo for all your money": MonzoSansDisplay; 48.8288px; weight 800; color rgb(255,255,255)
- H1 "Current accounts that keep up": MonzoSansDisplay; 48.8288px; weight 800; white
- Nav CTA "Sign up": bg rgb(9,23,35) #091723; color white; radius 500px; 12px 24px; 16px/600 MonzoSansText; height 51px
- Product CTA "Open a personal account": bg rgb(1,107,131) #016b83; white; radius 500px; 12px 24px; height 48px
- Hero dark CTA "Open a free bank account": bg rgb(255,255,255); color rgb(9,23,35); radius 500px; 12px 24px; height 48px
- Filter chip "Free features": bg rgb(59,76,84) #3b4c54; white; radius 64px; 8px 16px; height 38px
- Filter chip "Paid features": bg rgb(227,235,228) #e3ebe4; color #091723; radius 64px; 8px 16px; height 38px
- Hot Coral sections: bg rgb(255,79,64) #ff4f40 (app download media column) and rgb(246,77,63) #f64d3f (flashcard)
- CSS vars: --font-stack-body "MonzoSansText"; --font-stack-title "MonzoSansDisplay"; --default-line-height 1.4
- Background frequency (home): white ×34, midnight #091723 ×21, mint-soft #e3ebe4 ×11, mint #f2f8f3 ×10
- Fonts on page: MonzoSansText, MonzoSansDisplay (only)

Voice samples from live site and WebFetch of monzo.com/tone-of-voice/ and monzo.com/about/.
Mission "make money work for everyone" from monzo.com/about/.
Brand narrative (founding 2015, Tom Blomfield, 15M customers) is widely documented public fact.
Tier-2: styles.refero.design/style/e8a1d114-6924-4f03-acd2-996dd30f15a6 confirmed coral + mint + midnight system.
getdesign.md/monzo: not found.

Personas (§13) are fictional archetypes, names illustrative.
Interpretive claims are editorial readings connecting Monzo's observed design to its positioning.
-->
