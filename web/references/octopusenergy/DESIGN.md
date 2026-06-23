---
id: octopusenergy
name: Octopus Energy
country: UK
category: consumer-tech
homepage: "https://octopus.energy"
primary_color: "#f050f8"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=octopus.energy&sz=128"
verified: "2026-06-23"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-23"
  note: "primary = live CTA magenta (#f050f8); canvas = deep indigo (#100030); h1/h2 cyan (#60f0f8); nav ghost text (#f0ffff). Brand owns Chromatophore custom font."
  colors:
    primary: "#f050f8"
    primary-border: "#f050f8"
    canvas: "#100030"
    canvas-alt: "#180048"
    brand-accent: "#5840ff"
    cyan: "#60f0f8"
    foreground: "#f0ffff"
    on-primary: "#100030"
    muted: "#a49fc8"
  typography:
    family: { sans: "Chromatophore, helvetica, arial, sans-serif" }
    display-hero: { size: 36, weight: 500, lineHeight: 1.5, use: "H1 hero headline — cyan on deep indigo" }
    section:      { size: 36, weight: 500, lineHeight: 1.5, use: "H2 section headings — cyan" }
    subsection:   { size: 28, weight: 500, lineHeight: 1.5, use: "H3 feature subheadings — foreground white" }
    body:         { size: 18, weight: 400, lineHeight: 1.5, use: "Body paragraphs — foreground white" }
    body-sm:      { size: 16, weight: 400, lineHeight: 1.5, use: "Nav links, captions — foreground white" }
    caption:      { size: 12, weight: 400, lineHeight: 1.5, use: "Fine-print trust indicators" }
    button:       { size: 16, weight: 500, lineHeight: 1.11, use: "Button label — Chromatophore medium" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#f050f8", fg: "#100030", radius: "12px", padding: "12px 16px", font: "16px / 500 Chromatophore", border: "2px solid #f050f8", use: "Primary CTA — cookie accept, standard action" }
    button-primary-lg: { type: button, bg: "#f050f8", fg: "#f0ffff", radius: "12px", padding: "16px 20px", font: "18px / 500 Chromatophore", border: "2px solid #f050f8", use: "Large primary CTA — Get a quote on tariffs page" }
    button-outlined: { type: button, bg: "transparent", fg: "#f050f8", radius: "12px", padding: "12px 16px", font: "16px / 500 Chromatophore", border: "2px solid #f050f8", use: "Secondary outlined button — Fine tune / cookie secondary" }
    button-ghost: { type: button, bg: "transparent", fg: "#f0ffff", radius: "12px", padding: "12px 16px", font: "16px / 500 Chromatophore", use: "Nav ghost link-buttons — Energy, Heat pumps, Log in" }
    input-postcode-hero: { type: input, bg: "#ffffff", fg: "#000000", radius: "12px 0px 0px 12px", padding: "16px", font: "18px / 600 Arial", height: "60px", use: "Hero homepage postcode field — white bg / black text / Arial 600, left-rounded, attached to magenta Get-a-quote button on right" }
    input-postcode-tariffs: { type: input, bg: "transparent", fg: "#f0ffff", radius: "0px", padding: "16px", font: "18px / 400 Chromatophore", border: "2px solid transparent", height: "60px", use: "Tariffs page full-width postcode input — transparent / #f0ffff text / Chromatophore 400 / no radius" }
    button-hero-cta: { type: button, bg: "#f050f8", fg: "#f0ffff", radius: "0px 12px 12px 0px", padding: "16px 20px", font: "18px / 400 Chromatophore", border: "2px solid #f050f8", use: "Hero attached-CTA button — magenta, right-rounded, paired with hero postcode input" }
    nav-link: { type: tab, fg: "#f0ffff", font: "16px / 500 Chromatophore", use: "Top nav item", active: "text #f0ffff on #180048 background" }
    card-product: { type: card, bg: "#180048", fg: "#100030", radius: "12px", use: "Product feature card (Energy/Heat pumps/Solar) on deep indigo" }
    badge-trust: { type: badge, bg: "#180048", fg: "#f0ffff", radius: "9999px", font: "12px / 400 Chromatophore", use: "Trust indicator pill — star ratings, awards" }
    link-inline: { type: listItem, fg: "#60f0f8", font: "18px / 500 Chromatophore", use: "Inline body links and sub-nav anchor text" }
  components_harvested: true
---

# Design System Inspiration of Octopus Energy

## 1. Visual Theme & Atmosphere

Octopus Energy is the UK's most awarded energy supplier, and its digital presence makes an immediately striking and distinctive impression: a deep cosmic indigo (`#100030`) canvas saturated with electric magenta (`#f050f8`) and cyan (`#60f0f8`) — a palette that feels more like a rave-poster-turned-utility-brand than anything a traditional energy company would dare. This is fully intentional. Octopus has built an identity that positions clean energy as something exciting, modern, and even joyful, rather than the dull obligation of switching suppliers. The result is a screen that glows at you from the dark like a neon sign in a midnight sky.

The custom typeface `Chromatophore` — named after the pigment cells in octopus skin — carries all text at a single weight family (400 for body, 500 for headings and buttons). It is a humanist sans-serif with just enough warmth to counterbalance the electric palette, never feeling cold or corporate. Headlines sit at 36px weight 500 on a 1.5 line-height, colored in the signature cyan (`#60f0f8`), providing a cool counterpoint to the hot magenta CTA. Body copy uses the near-white `#f0ffff` (azure-tinted white) rather than pure white, softening the contrast against the deep background.

What makes the system work is the disciplined three-color hierarchy: **deep indigo for canvas**, **magenta for action**, **cyan for headlines**. The mascot Constantine the Octopus provides the warmth and character that illustration-heavy energy brands need; the visual system gives it a technological edge. There are effectively no drop shadows — this is a flat, glow-based system where brightness and color temperature create depth.

**Key Characteristics:**
- Chromatophore custom font at weight 500 for all interactive elements — tactile, brand-exclusive
- Deep indigo (`#100030`) as the page canvas — dark-mode-native before dark mode was fashionable
- Signature magenta (`#f050f8`) reserved strictly for primary CTAs and borders
- Cyan (`#60f0f8`) for all major headings — cool complement to the hot CTA
- Azure-tinted near-white (`#f0ffff`) for body text — gentler than pure white on dark backgrounds
- Zero shadows — depth via color temperature and background tint variation (`#180048`)
- 12px border-radius on all interactive elements — rounded but not pill
- Cookie-banner button system doubles as the primary component pattern

## 2. Color Palette & Roles

### Primary Action
- **Octopus Magenta** (`#f050f8`): The single primary action color — CTA button backgrounds, borders on outlined buttons. The brand's most saturated and eye-catching hue, inspired by the deep-water bioluminescent signature. Used only for action; never decorative.
- **Deep Indigo** (`#100030`): Page canvas and primary background. The "night sky" base that makes the magenta and cyan pop. Also used as foreground text color on magenta buttons to create readable contrast.

### Surface
- **Canvas Alt** (`#180048`): Slightly lighter indigo for elevated card surfaces, sticky nav background (`rgba(16, 0, 48, 0.9)`), and product feature cards. Creates hierarchy without shadow.
- **Brand Accent Blue** (`#5840ff`): A vivid blue-violet, seen in secondary branded areas — appears on feature illustration backgrounds and accent surfaces.

### Text & Heading
- **Cyan** (`#60f0f8`): H1 and H2 heading text color across the site. An electric aqua-teal that reads as energetic and modern against the dark indigo canvas.
- **Foreground** (`#f0ffff`): Primary body text, nav links, and secondary elements. Azure-white rather than pure white — it has warmth.
- **Muted** (`#a49fc8`): Tertiary text and fine-print items on the dark canvas.
- **On-primary** (`#100030`): Text color used on magenta buttons — the deep indigo as foreground ensures readable contrast.

## 3. Typography Rules

### Font Family
- **Primary**: `Chromatophore` — Octopus Energy's custom typeface, named after octopus chromatophores (pigment cells). Fallback: `helvetica, arial, sans-serif`.
- No monospace/code variant observed on marketing surfaces.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero (H1) | Chromatophore | 36px | 500 | 1.5 (54px) | Cyan `#60f0f8` on indigo canvas |
| Section Heading (H2) | Chromatophore | 36px | 500 | 1.5 (54px) | Cyan, same scale as H1 |
| Sub-heading (H3) | Chromatophore | 28px | 500 | 1.5 (42px) | `#f0ffff` foreground or `#100030` on light card |
| Body Large | Chromatophore | 18px | 400 | 1.5 (27px) | `#f0ffff` foreground white |
| Body / Nav | Chromatophore | 16px | 500 | 1.11 | Nav links, button labels |
| Caption | Chromatophore | 12px | 400 | 1.5 (18px) | Trust indicators, fine print |

### Principles
- **Single typeface, all surfaces**: Chromatophore carries 100% of the typographic load. No secondary or mono companion visible on the marketing surface.
- **Medium weight as the default**: Weight 500 is used for all interactive and heading elements; weight 400 for body paragraphs only.
- **H1 = H2 in size**: The 36px heading scale does not differentiate H1 from H2 by size — context and color do the hierarchy work (cyan for main, white for sub).
- **Line height 1.5 throughout**: A single, generous line-height ratio applies across all sizes — simplified and consistent.

## 4. Component Stylings

### Buttons

**Primary (Standard)**
- Background: `#f050f8`
- Text: `#100030`
- Radius: 12px
- Padding: 12px 16px
- Font: 16px Chromatophore weight 500
- Border: 2px solid `#f050f8`
- Use: Standard primary action (cookie accept "That's cool", navigation CTAs)

**Primary (Large / Tariff CTA)**
- Background: `#f050f8`
- Text: `#f0ffff`
- Radius: 12px
- Padding: 16px 20px
- Font: 18px Chromatophore weight 500
- Height: 56px
- Border: 2px solid `#f050f8`
- Use: Large hero CTA — "Get a quote" on tariffs page

**Outlined / Secondary**
- Background: transparent
- Text: `#f050f8`
- Radius: 12px
- Padding: 12px 16px
- Font: 16px Chromatophore weight 500
- Border: 2px solid `#f050f8`
- Use: Secondary option alongside primary (cookie "Fine tune")

**Ghost / Nav**
- Background: transparent
- Text: `#f0ffff`
- Radius: 12px
- Padding: 12px 16px
- Font: 16px Chromatophore weight 500
- Border: 2px solid transparent
- Use: Navigation link-buttons — "Energy", "Heat pumps", "Log in"

### Inputs

There are two distinct postcode input surfaces on the site, and they are styled differently.

**Hero Homepage Postcode Input** (`#hero-quote-form-field-postcode`)
- Background: `#ffffff` (white)
- Text: `#000000` (black)
- Font: 18px Arial weight 600 (system font, not Chromatophore)
- Radius: 12px 0px 0px 12px (left-rounded; the attached CTA button is on the right)
- Height: 60px
- Padding: 16px
- Use: Postcode entry in the homepage hero "Get a quote" attached-CTA form

**Hero "Get a Quote" Attached CTA Button** (paired with the hero input above)
- Background: `#f050f8`
- Text: `#f0ffff`
- Radius: 0px 12px 12px 0px (right-rounded; completes the pill formed with the input)
- Padding: 16px 20px
- Font: 18px Chromatophore weight 400
- Border: 2px solid `#f050f8`
- Use: Inline submit button attached to the hero postcode field

**Tariffs Page Postcode Input** (`#postcode`)
- Background: transparent (`rgba(0,0,0,0)`)
- Text: `#f0ffff`
- Font: 18px Chromatophore weight 400
- Radius: 0px (no rounding — full-width standalone field)
- Height: 60px
- Padding: 16px
- Border: 2px solid transparent
- Use: Full-width postcode entry on the /tariffs/ page, separate from the large magenta "Get a quote" button below it

### Cards

**Product Feature Card**
- Background: `#180048`
- Text: `#100030`
- Radius: 12px
- Use: Product category cards (Energy / Heat pumps / Solar & batteries / Electric vehicles) sitting on the deeper `#100030` canvas

### Badges

**Trust Indicator Pill**
- Background: `#180048`
- Text: `#f0ffff`
- Radius: 9999px
- Font: 12px Chromatophore weight 400
- Use: Award and rating trust pills ("Which? Recommended Provider", "Rated 4.8 stars")

### Navigation

**Top Nav**
- Background: `rgba(16, 0, 48, 0.9)` (sticky, slightly translucent)
- Text: `#f0ffff` for links, `#60f0f8` for logo wordmark
- Font: 16px Chromatophore weight 500
- Radius: 12px on nav items
- Height: ~60px
- Use: Sticky global nav with product category links + "Log in" ghost button

---

**Verified:** 2026-06-23
**Tier 1 sources:** https://octopus.energy/ (homepage, live DOM computed style); https://octopus.energy/tariffs/ (tariff products page, secondary live inspect)
**Tier 2 sources:** getdesign.md/octopusenergy — 0 results (not listed); styles.refero.design/?q=octopus+energy — no matching brand card found
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 16px
- Scale observed: 4px, 8px, 12px, 16px, 20px, 24px, 48px, 64px
- Postcode input inner padding: 16px; button padding: 12–24px

### Grid & Container
- Centered single-column hero with the 36px cyan headline anchoring the top
- 4-column product cards below (Energy / Heat pumps / Solar / EV) on desktop
- Full-width dark sections; no container border — the indigo bleeds edge to edge
- Max content width: approximately 1200px centered

### Whitespace Philosophy
- **Dark-canvas breathing room**: generous vertical padding between sections keeps the dark canvas from feeling claustrophobic
- **Color as separator**: different tints of indigo (`#100030` vs `#180048`) create section breaks without any visible borders or shadows
- **Illustration as content**: the Constantine octopus mascot fills hero space that other brands give to photography — character, not whitespace

### Border Radius Scale
- Standard (12px): all buttons, inputs, nav items — consistent and rounded
- Card (12px): product feature cards match the button system
- Full pill (9999px): trust indicator badges only

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | `#100030` — base canvas | Page background |
| Raised (Level 1) | `#180048` tint | Product cards, nav background |
| Translucent (Sticky) | `rgba(16, 0, 48, 0.9)` + implied blur | Sticky top nav on scroll |

**Shadow Philosophy**: Octopus Energy is a shadow-free system. Live inspection confirmed `box-shadow: none` across all major elements — buttons, cards, nav, and hero. Depth is handled entirely by background-color contrast between the two indigo tints (`#100030` vs `#180048`), creating a low-key depth that preserves the neon-on-dark aesthetic. Shadows would add a material realism that conflicts with the brand's otherworldly, bioluminescent feel.

## 7. Do's and Don'ts

### Do
- Use Chromatophore at weight 500 for all headings and buttons
- Use magenta (`#f050f8`) exclusively for primary CTAs and their borders
- Use cyan (`#60f0f8`) for H1 and H2 headings on the dark canvas
- Keep the page canvas dark (`#100030`) — the brand's identity lives in the contrast
- Use `#f0ffff` azure-white for body text rather than pure `#ffffff`
- Apply 12px radius to all interactive elements — consistent and rounded
- Use `#180048` for card and elevated surfaces instead of shadows
- Keep typography at weight 500 for interactive elements, 400 for body

### Don't
- Use drop shadows — Octopus is a flat, glow-based system
- Use magenta for decorative or text elements — it signals action only
- Use a light canvas (`#ffffff`) for any page section — the brand lives in darkness
- Use pure white text (`#ffffff`) — the brand uses azure-tinted `#f0ffff`
- Use font weight 700 or bold — Chromatophore 500 is the maximum
- Use rounded pills on buttons — 12px is the brand's radius cap (pills are for badges only)
- Mix cyan into interactive elements — cyan is for headings, magenta is for action
- Use a secondary typeface — Chromatophore is the sole font across all surfaces

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, product cards stack |
| Tablet | 640-1024px | 2-column product cards, moderate padding |
| Desktop | 1024px+ | Full 4-column product grid, centered 1200px container |

### Touch Targets
- Nav buttons at 46px height with 12px 16px padding — well within touch target guidelines
- Large CTA buttons at 56px height on tariff pages — generous for mobile
- Postcode input at 60px height for easy tap

### Collapsing Strategy
- Hero headline stays at weight 500, scales down on mobile
- 4-column product cards collapse to 2-up then single column
- Sticky nav compresses to hamburger toggle at mobile
- Dark background sections maintain full-width indigo treatment

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Octopus Magenta (`#f050f8`)
- Page canvas: Deep Indigo (`#100030`)
- Card surface: Indigo Alt (`#180048`)
- Heading text: Cyan (`#60f0f8`)
- Body text: Azure White (`#f0ffff`)
- Muted text: Muted Purple-Grey (`#a49fc8`)
- On-primary text: Deep Indigo (`#100030`)
- Accent blue: Brand Accent (`#5840ff`)

### Example Component Prompts
- "Create a hero section: `#100030` background. Headline 36px Chromatophore weight 500, color `#60f0f8`, line-height 1.5. Body text 18px weight 400, `#f0ffff`. Postcode input: 60px height, `#ffffff` white background, `#000000` black text, 18px Arial weight 600, radius 12px 0 0 12px (left-rounded). Inline 'Get a quote' CTA button: `#f050f8` bg, `#f0ffff` text, 18px Chromatophore weight 400, radius 0 12px 12px 0 (right-rounded), 16px 20px padding, 2px solid `#f050f8` border."
- "Design a product card: `#180048` background, `#100030` text, 12px radius. Product name at 16px Chromatophore weight 500, `#100030`. No shadow."
- "Build a trust badge pill: `#180048` bg, `#f0ffff` text, full 9999px radius, 12px Chromatophore weight 400, 4px 12px padding."
- "Create a nav bar: `rgba(16, 0, 48, 0.9)` bg, sticky. Nav links 16px Chromatophore weight 500, `#f0ffff`, 12px radius, 12px 16px padding. Logo text in `#60f0f8`. Log in ghost button: transparent bg, `#f0ffff` text, 12px radius."

### Iteration Guide
1. Canvas is always dark (`#100030`) — the hero postcode input is an exception (white `#ffffff` bg, `#000000` text, Arial 600) for readability inside the attached-CTA component
2. Magenta (`#f050f8`) is action-only; don't spread it to headings or decorative elements
3. Cyan (`#60f0f8`) is heading-only; don't use on buttons
4. Standalone buttons use 12px full radius; attached-CTA pairs split the radius (input: left-round 12px 0 0 12px, button: right-round 0 12px 12px 0); full-width tariffs input uses 0px radius
5. No shadows anywhere — use `#180048` for elevation
6. Body text is `#f0ffff` (not `#ffffff`) — the azure tint is intentional; `#ffffff` only appears as the hero postcode input background
7. Font is Chromatophore weight 500 for headings/buttons, weight 400 for body; the hero postcode input uses Arial weight 600 (system font, not Chromatophore)

---

## 10. Voice & Tone

Octopus Energy's voice is **warm, direct, and cheeky** — the energy brand that doesn't talk like an energy brand. Where competitors use utility-grade corporate prose ("Switching is simple — just provide your account details"), Octopus uses the friendly confidence of a trusted friend who happens to know a lot about renewable energy. The homepage headline "Join the UK's most popular energy supplier" isn't a claim — it's a casual invitation. The brand's playfulness is genuine rather than performed; it flows from a founding mission (make clean energy affordable and accessible) rather than a marketing brief.

| Context | Tone |
|---|---|
| Hero headlines | Confident and welcoming. "Join the UK's most popular energy supplier." |
| Tariff descriptions | Plain-language, benefit-first. "Most homes could save with our fixed and flexible tariffs." |
| CTAs | Action-forward, friendly. "Get a quote", "That's cool", "change my tariff." |
| Trust signals | Factual and proud. "Rated 4.8 stars for customer service from 815,906 reviews." |
| Support / help | Warm and pragmatic. Explains without condescension. |
| Sustainability | Earnest without preaching. States the mission, lets the numbers speak. |

**Voice samples (verbatim from live homepage):**
- "Join the UK's most popular energy supplier" — H1 hero headline, welcoming not boastful. *(verified live 2026-06-23)*
- "Everything you need for a cheaper, greener home & business" — H2 section heading, benefit-led. *(verified live 2026-06-23)*
- "Great value energy for your home or business" — H2, plain and accessible. *(verified live 2026-06-23)*
- "Our standard prices have always been cheaper than the price cap" — body copy, confident claim with data behind it. *(verified live 2026-06-23)*

**Forbidden register**: corporate energy jargon, fear-of-missing-out pricing urgency, vague greenwashing ("we care about the planet"), defensive contract language foregrounded in user flows, and excessive exclamation points.

## 11. Brand Narrative

Octopus Energy was founded in **2015** by **Greg Jackson (CEO)** as a vertically-integrated energy retailer and technology company, built on the conviction that the UK energy market was broken — overpriced, opaque, and hostile to innovation. The company's proprietary Kraken platform (a cloud-based energy management system) powers Octopus's ability to offer smart tariffs, agile pricing, and direct-to-bill renewable energy at a scale that incumbents cannot match.

The brand's defining move was refusing the norms of utility-brand communication: instead of institutional imagery and corporate language, Octopus built a brand around an octopus mascot called **Constantine**, a playful illustration character whose many arms hold products (energy, heat pumps, solar, EV charging) like a friendly multi-tasker. The deep indigo and magenta palette — far from any competitor's safe blues and greens — signals that this is a technology company wearing a utility's licence, not the other way around.

By 2023-2024, Octopus Energy had become the UK's largest domestic energy supplier by customer numbers, with the Which? Recommended Provider status held for nine consecutive years. The Kraken platform has been licensed internationally (to E.ON, EDF, Origin Energy in Australia, and others), making the company's technology as significant a revenue stream as its retail energy business.

What Octopus refuses: greenwashing without substance, the incumbent utility's "cheapest deal" race to the bottom, and the assumption that sustainability has to be dull. What it embraces: radical transparency on pricing, a brand that feels like a tech company, and the position that clean energy is a source of joy and pride for households — not just an obligation.

## 12. Principles

1. **Technology over incumbency.** Octopus's Kraken platform is the product; the energy licence is the delivery mechanism. *UI implication:* the interface feels like a tech product — custom font, dark canvas, electric palette — not a utility bill.
2. **Warmth in the unexpected place.** A grid-connected household energy company built a beloved mascot. *UI implication:* Constantine appears in hero illustrations; the brand earns affection through character, not just price.
3. **Transparency as differentiation.** In a market famous for opaque pricing, Octopus publishes its tariff rates prominently and compares them to the price cap on its own homepage. *UI implication:* pricing copy is upfront, direct, and data-backed.
4. **Clean energy as cause and commerce.** The brand never separates "cheap" from "green" — they are the same offer. *UI implication:* sustainability language is woven into product descriptions, not siloed in a CSR section.
5. **One action, one color.** Magenta (`#f050f8`) means "do this now." *UI implication:* the CTA button stands as the only saturated warm hue on the deep indigo canvas — it cannot be missed.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Octopus Energy user segments (UK households switching energy suppliers, early-adopter EV and solar homeowners, sustainability-conscious renters), not individual people.*

**Sarah Thornton, 37, Manchester.** A dual-income household manager who switched to Octopus because a neighbour mentioned the 4.8-star rating. She doesn't care deeply about energy tariff mechanics — she wants the cheapest bill and no drama when something goes wrong. The postcode-to-quote funnel on the homepage converted her in under two minutes. She now uses the app primarily to track usage and has signed up for an Agile tariff after reading about EV overnight charging savings.

**James Okafor, 44, Bristol.** A sustainability-oriented homeowner who installed solar panels through Octopus Solar and added a home battery. He chose Octopus because the Kraken technology means his excess solar export is automatically credited at market-rate, not a fixed export tariff. He is the kind of user who reads the blog and recommends Octopus to colleagues with EVs.

**Priya Mehta, 28, London.** A renter in a flat who cannot control which supplier her landlord uses, but has bookmarked Octopus for when she moves. The brand's tone resonates with her; she follows the @OctopusEnergy account partly because Constantine the mascot makes energy content feel like something she actually wants to read.

## 14. States

| State | Treatment |
|---|---|
| **Empty (postcode, no input)** | Input field with placeholder text in muted `#a49fc8`; magenta CTA is present and enabled — the empty state is the default CTA state. |
| **Loading (postcode quote fetch)** | Inline progress on the CTA; the deep indigo canvas stays visible. No full-page spinner — the quote funnel is fast. |
| **Error (invalid postcode)** | Inline field-level message below the input. Plain-language: "Please enter a valid UK postcode." Magenta border on the input field. |
| **Success (quote returned)** | Redirect to the quote flow with tariff cards on dark canvas. No celebratory toast — the product is the feedback. |
| **Empty (account, no usage data)** | Friendly message with a Constantine illustration reference; single CTA to set up smart meter. Calm and on-brand. |
| **Loading (account dashboard)** | Skeleton placeholder rows on `#180048` surface; flat pulse consistent with shadow-free system. |
| **Error (payment failed)** | Inline banner with plain-language explanation; "Update payment details" as a magenta CTA. No jargon. |
| **Success (payment taken)** | Confirmation email rather than in-app toast; app view shows updated balance. Understated. |
| **Disabled** | Reduced opacity on magenta elements; `#a49fc8` muted text for inactive fields. Brand magenta fades, does not switch to grey. |
| **Skeleton** | `#180048` blocks at final dimensions, flat colour pulse — no shimmer or shadow. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Hover states, button press, focus ring |
| `motion-standard` | 200ms | Card transitions, nav dropdown, input focus |
| `motion-slow` | 300ms | Page-level reveals, hero illustration entrance |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, nav panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, nav close |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion supports the brand's energy and warmth without becoming frivolous. The Constantine mascot illustration may entrance with a gentle float-in on hero load. Button hover shows a subtle brightness shift on the magenta (`#f050f8` → slightly lighter); outlined buttons fill on hover. No spring or bounce — the brand is playful but its energy infrastructure must feel dependable. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; Constantine does not animate on load.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-23) via playwright getComputedStyle:
- https://octopus.energy/ (homepage — title "Octopus Energy: The UK's most awarded energy supplier")
- https://octopus.energy/tariffs/ (tariffs page — title "All our tariffs | Octopus Energy")

Raw DOM observations (homepage):
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

Brand narrative (§11): Octopus Energy founded 2015, CEO Greg Jackson, Kraken platform, Which? Recommended Provider 9 consecutive years, UK's largest domestic energy supplier — widely documented public facts.

Personas (§13) are fictional archetypes informed by publicly observable Octopus Energy user segments. Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "technology company wearing a utility's licence", "Constantine earns affection through character") are editorial readings connecting observed design to positioning.

Tier 2: getdesign.md/octopusenergy — 0 results. styles.refero.design — no Octopus Energy brand card found after search.
-->
