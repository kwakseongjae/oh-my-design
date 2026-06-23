---
id: paypal
name: PayPal
country: US
category: fintech
homepage: "https://www.paypal.com/us/home"
primary_color: "#002991"
logo:
  type: simpleicons
  slug: paypal
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = live brand midnight blue (#002991) used in immersive sections; sky blue (#60cdff) is the hero surface accent. PayPal Pro at weight 900 for display; Plain for UI text. All CTAs are full-pill (1000px radius) weight 900."
  colors:
    primary: "#002991"
    primary-light: "#60cdff"
    canvas: "#ffffff"
    on-primary: "#ffffff"
    ink: "#000000"
    link: "#0070e0"
    muted: "#686a6d"
    surface-warm: "#f1efea"
    surface-grey: "#edf0f2"
    surface-light-blue: "#f0f2f9"
    accent-sky: "#60cdff"
    accent-pale-sky: "#b8e9ff"
    border-default: "#e6e7e8"
    success: "#007a56"
    error: "#c0212b"
  typography:
    family: { display: "PayPal Pro", ui: "Plain", fallback: "Helvetica Neue, Arial, sans-serif" }
    display-hero: { size: 99, weight: 900, lineHeight: 1.10, tracking: -1.5, use: "Homepage hero headline — PayPal Pro ExtraBold" }
    display-lg: { size: 67, weight: 900, lineHeight: 1.15, tracking: -1.0, use: "Section headings — PayPal Pro ExtraBold" }
    section: { size: 45, weight: 900, lineHeight: 1.20, tracking: -0.6, use: "Sub-section titles — PayPal Pro" }
    body: { size: 16, weight: 400, lineHeight: 1.40, use: "Standard UI and body text — Plain" }
    nav: { size: 16, weight: 400, lineHeight: 1.00, use: "Navigation links — Plain" }
    button: { size: 18, weight: 900, lineHeight: 1.00, use: "CTA button labels — PayPal Pro" }
    caption: { size: 14, weight: 400, lineHeight: 1.50, use: "Small labels and metadata — Plain" }
  spacing: { xs: 4, sm: 8, md: 16, base: 24, lg: 32, xl: 48, xxl: 64, section: 96 }
  rounded: { sm: 4, md: 8, lg: 25, full: 1000 }
  shadow:
    card: "rgba(0, 0, 0, 0.08) 0px 24px 48px 0px"
    elevated: "rgba(0, 0, 0, 0.15) 0px 8px 24px"
  components:
    button-primary: { type: button, bg: "#000000", fg: "#ffffff", radius: "1000px", padding: "14px 33px", height: "52px", font: "18px / 900 PayPal Pro", use: "Primary CTA — black fill on light backgrounds" }
    button-outline-dark: { type: button, fg: "#000000", border: "1px solid #000000", radius: "1000px", padding: "14px 33px", height: "52px", font: "18px / 900 PayPal Pro", use: "Secondary CTA on light sections" }
    button-outline-light: { type: button, fg: "#ffffff", border: "1px solid #ffffff", radius: "1000px", padding: "14px 33px", height: "52px", font: "18px / 900 PayPal Pro", use: "Secondary CTA on dark blue sections" }
    button-white: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #ffffff", radius: "1000px", padding: "14px 33px", height: "52px", font: "18px / 900 PayPal Pro", use: "Play/video CTA on dark surfaces" }
    nav-tab: { type: tab, fg: "#000000", font: "16px / 400 Plain", radius: "104px", padding: "0 20px", height: "40px", active: "black bg with link-blue text", use: "Top nav section tabs (Personal / Business)" }
    input-form: { type: input, bg: "#ffffff", border: "1px solid #e6e7e8", radius: "8px", font: "16px / 400 Plain", use: "Login and form inputs, focus ring #0070e0" }
    card-surface: { type: card, bg: "#ffffff", radius: "16px", shadow: "rgba(0,0,0,0.08) 0px 24px 48px 0px", use: "Elevated content card — layered-card class; large-radius diffuse lift shadow" }
    badge-status: { type: badge, bg: "#f0f2f9", fg: "#002991", radius: "4px", padding: "2px 8px", font: "12px / 400 Plain", use: "Status and category tag" }
    cookie-dialog: { type: dialog, bg: "#ffffff", radius: "1000px", border: "2px solid #cfd3d8", use: "Cookie consent bottom bar action buttons" }
  components_harvested: true
---

# Design System Inspiration of PayPal

## 1. Visual Theme & Atmosphere

PayPal's homepage is a study in high-contrast black-and-white modernism punctuated by a signature sky blue hero. The page opens with an immersive pale-blue section (`#60cdff`) carrying a monumental black headline in **PayPal Pro** at nearly 100px weight 900 — a typographic statement that projects authority and consumer-brand boldness in equal measure. This "PayPal Open" aesthetic is the 2023 rebrand: out with the legacy gradient blues, in with a graphic, editorial visual language that stands closer to Nike or Apple than to a traditional bank. Every call-to-action on the consumer homepage is a full-pill `1000px` radius button at weight 900 — not tentative, not rounded-rectangle — an opinionated choice that signals confidence.

Beneath the sky-blue hero, the system alternates between pure white canvas sections and deep midnight-blue (`#002991`) immersive sections — PayPal's signature brand dark. These dark sections carry white-text headlines and white-outline pill buttons, creating a dramatic light/dark cadence. The custom `PayPal Pro` typeface with its geometrically rounded `Century Gothic`-lineage letterforms is everywhere display-scale: weight 900 exerts the brand at headlines while the UI font `Plain` at weight 400 handles functional legibility for navigation and body copy, creating a clear two-font two-weight system.

**Key Characteristics:**
- Full-pill CTAs (1000px radius) in weight 900 PayPal Pro — no hedging, maximum brand confidence
- Sky blue (`#60cdff`) as the hero surface accent and the new signature PayPal visual entry point
- Midnight blue (`#002991`) for immersive brand-dark sections — replacing the legacy #003087 deep navy
- PayPal Pro display font (Century Gothic heritage) at weight 900 for all headlines
- Plain UI font at weight 400 for navigation and body — a clean functional pairing
- Black-on-white / white-on-black as the everyday CTA contrast system (not the old PayPal blue)
- Minimal shadow system: large-radius diffuse lift `rgba(0,0,0,0.08) 0px 24px 48px 0px` on `layered-card` elements; everything else is flat color separation

## 2. Color Palette & Roles

### Primary Brand
- **PayPal Midnight Blue** (`#002991`): Deep brand blue for immersive sections, the PayPal logo field, and dark-surface backgrounds. Replaces the legacy `#003087` dark navy as the primary immersive color.
- **PayPal Sky Blue** (`#60cdff`): The signature hero accent — a vibrant, modern light blue (`blue-400-plate` in PayPal's internal palette) used for the hero section background and card accents. This is the new face of PayPal's refresh.
- **Pale Sky** (`#b8e9ff`): Tinted sky-blue surface for lighter section accents and gradient transitions.

### Canvas & Surface
- **Pure White** (`#ffffff`): Primary page background and content card surface. The dominant canvas.
- **Warm Ivory** (`#f1efea`): Warm off-white used for select feature sections, adding warmth to break the cold white grid.
- **Surface Grey** (`#edf0f2`): Cool neutral light grey for close-button backgrounds and subtle chrome.
- **Surface Light Blue** (`#f0f2f9`): A barely-there blue-tinted surface for badge/tag backgrounds.

### Interactive & Semantic
- **Link Blue** (`#0070e0`): Standard hyperlink and inline-action text color (standard blue accessibility value).
- **Ink Black** (`#000000`): Primary heading, CTA button fill on light sections, and body text on marketing surfaces.
- **Muted Grey** (`#686a6d`): Secondary text, captions, metadata, muted labels.

### Semantic Colors
- **Success Green** (`#007a56`): Success state indicators — payment confirmed, action completed.
- **Error Red** (`#c0212b`): Error state indicators — payment declined, form validation failures.

### Border & Utility
- **Border Default** (`#e6e7e8`): Standard border for form inputs and card outlines.

## 3. Typography Rules

### Font Family
- **Display**: `PayPal Pro` (internally named; Century Gothic heritage, geometric rounded modern) — all headlines and CTAs
- **UI / Body**: `Plain` — PayPal's proprietary UI sans-serif; fallback to `"Helvetica Neue", Arial, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | PayPal Pro | ~99px (fluid) | 900 | 1.10 | -1.5px | "Pay, send, and save smarter" — viewport-relative size |
| Section Heading | PayPal Pro | ~67px (fluid) | 900 | 1.15 | -1.0px | H2 feature headings |
| Sub-section | PayPal Pro | ~45px (fluid) | 900 | 1.20 | -0.6px | H3 product feature subheads |
| CTA Button | PayPal Pro | 17.86px (≈18px) | 900 | 1.00 | normal | All pill CTA buttons |
| Navigation | Plain | 16px | 400 | 1.00 | normal | Tab navigation |
| Body / UI | Plain | 16px | 400 | 1.40 | normal | Standard functional text |
| Caption / Label | Plain | 14px | 400 | 1.50 | normal | Metadata, small labels |
| Muted text | Plain | 14px | 500 | 1.40 | normal | Helper links, footnotes |

### Principles
- **Weight 900 as brand signature**: PayPal uses maximum weight (900 / ExtraBold / Black) exclusively for all display text. There is no headline at 600 or 700. This creates an unambiguous typographic identity — decisive and bold.
- **Two fonts, two registers**: PayPal Pro owns brand/marketing/CTA; Plain owns every functional UI element. Neither font crosses into the other's domain.
- **Fluid headline scale**: Display sizes are fluid/viewport-relative (using CSS `clamp` or viewport units), so the hero headline ranges from ~56px on mobile to ~99px on large desktop. The underlying weight never changes.
- **Short copy discipline**: Headlines are brief declarative statements ("Pay, send, and save smarter"). Description copy is minimal. The type does not explain; it announces.

## 4. Component Stylings

### Buttons

**Primary (Black Fill)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 1000px
- Padding: 14px 33px
- Height: 52px
- Font: 17.86px PayPal Pro weight 900
- Use: Primary CTAs on light backgrounds ("Sign Up", "Enterprise Solutions", "Read Case Study")

**Outline Dark**
- Background: transparent
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 1000px
- Padding: 14px 33px
- Height: 52px
- Font: 17.86px PayPal Pro weight 900
- Use: Secondary CTAs on white sections ("Browse Offers", "Contact Sales", "Learn More")

**Outline Light (Dark Section)**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 1000px
- Padding: 14px 33px
- Height: 52px
- Font: 17.86px PayPal Pro weight 900
- Use: Secondary CTAs on midnight blue sections ("Learn About Pay in 4", "Send Money", "Get Paid")

**White Fill (Dark Section)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#ffffff`
- Radius: 1000px
- Padding: 14px 33px
- Height: 52px
- Font: 17.86px PayPal Pro weight 900
- Use: Video/media play triggers on dark sections ("Play video")

**Cookie Consent (Tertiary)**
- Background: `rgba(255, 255, 255, 0.7)`
- Text: `#000000`
- Border: 2px solid `#cfd3d8`
- Radius: 1000px
- Padding: 10px 30px
- Height: 48px
- Font: 14px Plain weight 500
- Use: Cookie accept/decline actions in the consent bar

### Inputs & Forms

**Default**
- Background: `#ffffff`
- Border: 1px solid `#e6e7e8`
- Radius: 8px
- Font: 16px Plain weight 400
- Focus: border/ring shifts to `#0070e0`
- Use: Login email/phone, form fields

### Cards & Containers

**Standard Content Card** (`layered-card`)
- Background: `#ffffff`
- Radius: 16px
- Shadow: `rgba(0, 0, 0, 0.08) 0px 24px 48px 0px`
- Use: Feature cards, product showcases on white sections — large-radius diffuse lift (live-measured on `.layered-card` class, 5 instances)

**Sky Blue Section**
- Background: `#60cdff`
- Use: Hero entry section background — the new PayPal signature opener

**Midnight Blue Section**
- Background: `#002991`
- Use: Immersive brand-dark content sections — "Pay in 4", product highlight panels

### Badges & Tags

**Status Tag**
- Background: `#f0f2f9`
- Text: `#002991`
- Radius: 4px
- Padding: 2px 8px
- Font: 12px Plain weight 400
- Use: Category labels, status indicators

### Navigation

**Top Nav**
- Background: `#000000` (sticky/transparent at scroll top)
- Text: `#000000` (inverted when on light sections)
- Font: 16px Plain weight 400
- Height: 40px tab height
- Active tab: black background with `rgb(0, 0, 238)` link text
- Radius: 104px per tab item
- Use: Personal / Business top-level tabs

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.paypal.com/us/home, https://www.paypal.com/us/webapps/mpp/merchant
**Tier 2 sources:** getdesign.md/paypal — not found (404); styles.refero.design/?q=paypal — no results returned
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px
- Section rhythm: alternating white and sky-blue/midnight-blue full-width bands create a dramatic horizontal cadence without explicit grid gutters

### Grid & Container
- Full-width immersive sections at 100vw for the brand moments (sky blue hero, midnight blue product sections)
- Centered content container approximately 1200px max-width
- Hero text is left-aligned at large scale, centered on mobile
- Feature section cards in 2-column or 3-column grids on desktop

### Whitespace Philosophy
- **Generous macro, tight micro**: section-to-section spacing is very generous (96px+), but the in-section content is dense with large type doing the heavy lifting. This is a marketing site optimized for scroll, not information density.
- **Type as spacer**: enormous PayPal Pro headlines at 99px don't need margin to create separation — they inherently dominate vertical space, creating white space by their own scale.
- **Color as divider**: full-bleed section background changes replace border/line dividers. The palette handles all section separation.

### Border Radius Scale
- Micro (4px): badge/tag pills
- Small (8px): form inputs, small containers
- Medium (16px): content cards and feature panels
- Large (25px): nav item container chrome
- Full (1000px): all CTA buttons — the signature pill shape

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow — full-bleed color sections | Hero, product highlight sections |
| Elevated Card (Level 1) | `rgba(0,0,0,0.08) 0px 24px 48px 0px` | `layered-card` elements — feature cards on white canvas (live-measured) |
| Standard (Level 2) | `rgba(0,0,0,0.15) 0px 8px 24px` | Elevated cards, sticky nav |
| Overlay (Level 3) | `rgba(0,0,0,0.3)` scrim | Modals and video overlays |

**Shadow Philosophy**: PayPal's rebrand moved away from the heavy blue-tinted shadows of the legacy system toward flat color-section architecture. Depth is communicated through background-color contrast (white → sky blue → midnight blue) rather than elevation. When shadows appear (on standalone `layered-card` elements), they use a large-radius, low-opacity diffuse lift — `rgba(0,0,0,0.08) 0px 24px 48px 0px` — not brand-colored and not a tight drop shadow. There is also an ambient `rgba(0,0,0,0.01) 0px 0px 17px` on the CookieBanner container (radius 16px), effectively invisible. The focus is on surface, not lift.

## 7. Do's and Don'ts

### Do
- Use PayPal Pro weight 900 for all display headlines — the maximum weight is the brand
- Use full-pill radius (1000px) for every CTA button — no rounded rectangles on marketing surfaces
- Use sky blue (`#60cdff`) as the hero entry surface color — it is the new face of PayPal
- Use midnight blue (`#002991`) for immersive brand-dark sections
- Alternate white and brand-color sections to create the PayPal scroll cadence
- Use `Plain` at weight 400 for all navigation and functional UI text
- Pair black-fill buttons on light sections with white-outline buttons as secondary actions
- Keep headline copy short and declarative — the type announces, not explains

### Don't
- Don't use the legacy PayPal blue (#003087 or #0070ba) for the primary brand color — the 2023 rebrand moved to midnight blue (#002991) and sky blue (#60cdff)
- Don't use rounded-rectangle buttons (16px or 24px radius) — PayPal CTAs are full-pill
- Don't apply the PayPal brand blue as an interactive element color — `#0070e0` is for hyperlinks only
- Don't use weight 700 or lower for PayPal Pro headlines — 900 is the only weight at display scale
- Don't use drop shadows for section separation — use full-bleed background color changes
- Don't use Plain for headlines — PayPal Pro owns every display-scale text element
- Don't mix warm and cool neutrals in the same section — the system separates them intentionally

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses (fluid type), CTAs full-width |
| Tablet | 640-1024px | 2-column feature cards, moderate padding |
| Desktop | 1024-1280px | Full 3-column grid, max-width container |
| Large Desktop | >1280px | Centered content, fluid type at maximum scale |

### Touch Targets
- All CTA buttons at 52px height — comfortably above the 44px minimum
- Cookie consent buttons at 48px height
- Navigation tabs at 40px height with generous horizontal padding

### Collapsing Strategy
- Hero headline: ~99px at desktop → scales to ~56px on mobile (fluid/viewport units), weight 900 maintained throughout
- Navigation: horizontal tab strip → hamburger collapse on mobile
- Feature cards: 3-column → 2-column → stacked single column
- Full-bleed section colors maintained at all widths — the alternating bands are mobile-native
- Section spacing: 96px → 48px on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand dark (immersive sections): PayPal Midnight Blue (`#002991`)
- Hero accent surface: PayPal Sky Blue (`#60cdff`)
- Page background: Pure White (`#ffffff`)
- Primary CTA (light backgrounds): Ink Black (`#000000`) fill
- Heading / body text: Ink Black (`#000000`)
- Muted text: Muted Grey (`#686a6d`)
- Link / interactive: Link Blue (`#0070e0`)
- Border: `#e6e7e8`

### Example Component Prompts
- "Create a PayPal-style hero section: #60cdff background, full-width. Headline ~96px PayPal Pro weight 900, letter-spacing -1.5px, color #000000. One black-fill pill CTA (#000000 bg, white text, 1000px radius, 14px 33px padding) and one outline pill CTA (transparent, 1px solid #000000, black text)."
- "Design a PayPal brand-dark section: #002991 background, white text. Headline 67px PayPal Pro weight 900 color #ffffff. Outline CTAs: 1px solid #ffffff, white text, 1000px radius, 52px height."
- "Build a feature card (layered-card): white background, 16px radius, rgba(0,0,0,0.08) 0px 24px 48px 0px shadow. Title 45px PayPal Pro weight 900 color #000000. Body 16px Plain weight 400 color #686a6d."
- "Create top navigation: white or black sticky header. Plain 16px weight 400 for nav links. Tabs with 104px radius, 40px height. Log In = white fill + 3px black border; Sign Up = black fill, white text."

### Iteration Guide
1. PayPal Pro weight 900 is the only display weight — never use 600 or 700 for headlines
2. Every CTA is a full-pill: 1000px radius, 52px height, 14px 33px padding
3. Black-on-white + white-on-black is the core CTA contrast system — not the old PayPal blue
4. Section cadence: white → sky blue (#60cdff) → white → midnight blue (#002991) → repeat
5. Plain font handles all UI text: 16px/400 for nav and body, 14px/400 for captions
6. No brand-colored shadows — layered-card elevation uses `rgba(0,0,0,0.08) 0px 24px 48px 0px` (large-radius diffuse lift)
7. Sky blue (#60cdff) is the modern PayPal entry color; midnight blue (#002991) is the immersive depth color

---

## 10. Voice & Tone

PayPal's voice is **direct, bold, and empowering** — a global payments brand that speaks to everyday users and enterprise merchants in the same confident register. Post-2023 rebrand, the tone shifted from financial-services caution to consumer-brand boldness. Hero copy reads like a product manifesto: "Pay, send, and save smarter." "PayPal Open." Section headings declare rather than explain: "Pay now or pay over time. It's your choice." There are no hedges, no fine print in the headlines, and no exclamation marks performing excitement — the scale of the type does that work.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, bold. Noun-first or verb-first. "Pay, send, and save smarter." Never conditional. |
| Product feature heads | Benefit-led, crisp. "Take your business further, faster." |
| CTAs | Direct imperative. "Sign Up", "Send Money", "Get Paid", "Browse Offers". |
| Dark section copy | Slightly more expansive — builds momentum. "The tools your business runs on. In one place." |
| Legal / security copy | Plain, reassuring. "See How You're Safe." |
| Developer surfaces | Functional and precise — aligns with global developer expectations. |
| Merchant surfaces | Results-focused. "Real stories. Real wins." |

**Voice samples (verified live 2026-06-22):**
- "Pay, send, and save smarter" — homepage hero H2 (PayPal Pro 99px/900)
- "Take your business further, faster" — merchant page H2
- "PayPal Open" — business page hero H1
- "Real stories. Real wins." — merchant page H2

**Forbidden register**: passive constructions, jargon-heavy explanations in above-fold copy, legacy banking formality, exclamation-heavy excitement.

## 11. Brand Narrative

PayPal was founded in **1998** by **Peter Thiel, Max Levchin, Luke Nosek, Ken Howery,** and others — originally as **Confinity**, a cryptography-focused startup based in Palo Alto. The company merged with **Elon Musk's X.com** in **2000**, with PayPal emerging as the combined brand. eBay acquired PayPal in **2002 for $1.5 billion** and spun it off as an independent publicly traded company in **2015** (NASDAQ: PYPL). Headquartered in **San Jose, California**, PayPal today operates across **200+ countries**, supports **25+ currencies**, and serves approximately **400 million active accounts globally**.

The founding insight — that moving money should be as simple as sending email — defined a category that didn't formally exist: digital wallet + peer-to-peer payments + online checkout, all in one network. PayPal's network effect is its moat: merchants accept PayPal because customers trust it; customers use it because merchants accept it.

The 2023 rebrand under CEO Alex Chriss signaled a deliberate pivot: away from legacy financial-services visual language (muted blues, cautious rounded-rectangle buttons, corporate gradients) toward a bold consumer-brand aesthetic anchored by sky blue, maximum-weight headlines, and full-pill CTAs. The "PayPal Open" campaign positioned the platform as infrastructure for independent commerce — not a bank, not just a checkout button, but an open financial network. The word "Open" in PayPal Pro at nearly 100px is the design-system argument made typographically: unambiguous, large, and confident.

## 12. Principles

1. **Financial inclusion by design.** PayPal's mission is "democratizing financial services" — making tools available to those underserved by traditional banking. *UI implication:* the checkout experience prioritizes clarity; zero unnecessary friction between intent and action.
2. **Trust through simplicity.** The brand earns trust by removing complexity, not by performing security theater. *UI implication:* no cluttered dashboards; bold simple type over decorative chrome; "See How You're Safe" is a CTA, not a warning.
3. **Open infrastructure.** The rebrand explicitly positions PayPal as a platform for independent commerce. *UI implication:* the design system supports both consumer-wallet and merchant-tools surfaces with the same token set — the font, the pill, the color cadence are identical.
4. **Bold confidence, not corporate caution.** The shift from rounded-rectangle to full-pill, from 600-weight to 900-weight, from muted-blue to sky-blue is intentional brand repositioning. *UI implication:* every design decision should read as decisive. If a component feels tentative, it is off-brand.
5. **Color as architecture.** The alternating white / sky-blue / midnight-blue section system is not decoration — it is the structural logic of every PayPal marketing page. *UI implication:* color sections replace dividers; background-change is the primary navigation cue between content blocks.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable PayPal user segments (peer-to-peer senders, online shoppers, small merchants, enterprise checkout integrators), not individual people.*

**Amara Osei, 27, Atlanta.** A freelance photographer who uses PayPal to get paid by clients and split dinner with friends via Venmo (PayPal subsidiary). Values the network — everyone already has a PayPal. Doesn't think of PayPal as a "bank"; thinks of it as "the button on checkout pages that I trust."

**David Lin, 42, Houston.** Owner of a mid-sized e-commerce business (outdoor gear). Chose PayPal as a payment processor because its checkout button converts — customers abandon carts when they don't see it. Uses PayPal Business Dashboard weekly. Cares about dispute resolution speed more than UI aesthetics.

**Priya Mehta, 34, Chicago.** A frequent international online shopper who pays in USD on US sites. Uses PayPal because it doesn't expose her card number to every merchant. Noticed the 2023 design refresh; found the new sky-blue hero more "energetic" than before but still trusts the logo above everything.

**Marcus Rodriguez, 38, San Jose.** Engineering director at a Series-B fintech integrating PayPal Checkout into a B2B SaaS tool. Works with the developer docs daily. Wants a clean, stable API — doesn't care about the marketing homepage. Trusts PayPal because of its fraud protection and global reach, not its visual identity.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no transactions, personal wallet)** | White canvas. Single line in muted grey (`#686a6d`) describing zero activity. One black-fill pill CTA to a first action ("Send your first payment"). Minimal — no illustrations. |
| **Empty (merchant dashboard, no sales)** | Clean statement in `#000000` at body scale; a single CTA in the primary pill style. |
| **Loading (checkout page)** | PayPal spinner — the wordmark animates into a ring. Background stays white. Content shifts in when ready. |
| **Loading (dashboard data)** | Skeleton rectangles at the dimensions of the final content. Neutral grey `#e6e7e8` blocks, no shimmer color tint. |
| **Error (payment declined)** | Inline alert with error red-adjacent tone. Specific code + clear plain-English explanation + retry path. PayPal's error system names the decline reason (e.g., "Insufficient funds") rather than hiding behind a generic message. |
| **Error (form validation)** | Field-level inline message below the input. Red border on the field. The message says what went wrong and how to fix it. |
| **Success (payment sent)** | Brief inline confirmation. No toast — the transaction row updates inline. "Sent. [amount] to [name]." Then transaction history reflects immediately. |
| **Success (checkout complete)** | Dedicated confirmation screen. PayPal wordmark + "You're all set." + order summary. Calm, uncluttered. No celebration animation. |
| **Skeleton** | Grey `#e6e7e8` blocks at final dimensions. Simple opacity or shimmer. No brand-colored animation. |
| **Disabled** | Reduced opacity on button surface and text. Black fill fades to grey; pill shape preserved. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection ticks, checkbox, radio |
| `motion-fast` | 120ms | Hover states, button press, focus ring |
| `motion-standard` | 200ms | Dropdown, sheet, tooltip, form validation |
| `motion-slow` | 300ms | Section transitions, modal entrance, page-level reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — modals, sheets, menus |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals and exits |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Signature motions:**
1. **Pill button hover**: subtle scale-up (`scale(1.02)`) on hover at `motion-fast / ease-standard` — the pill inflates slightly to signal responsiveness without losing its contained geometry.
2. **Section scroll reveal**: content blocks within blue sections fade in from below at `motion-slow / ease-enter` as the user scrolls. The section background color is already visible before content appears.
3. **Checkout loading**: the PayPal two-letter monogram logo animates to signal processing. This is a brand-owned animation used at the moment of highest trust (payment processing).
4. **Reduce motion**: under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`. The PayPal checkout loader falls back to a static state indicator. No motion at the cost of accessibility.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on https://www.paypal.com/us/home
and https://www.paypal.com/us/webapps/mpp/merchant:

- H2 "Pay, send, and save smarter": PayPal Pro 99.4px / weight 900 / color rgb(0,0,0) on #60cdff bg
- H2 "Take your business further, faster": PayPal Pro 67.1px / weight 900
- H1 "PayPal Open": PayPal Pro 99.4px / weight 900 / color rgb(0,0,0)
- CTAs ("Sign Up", "Browse Offers", "Send Money"): 1000px radius / 52px height / 17.86px PayPal Pro weight 900 / padding 13.93px 32.86px
- Outline light CTA "Learn About Pay in 4": transparent bg / #ffffff text / 1px solid #ffffff
- Black fill CTA "Sign Up": #000000 bg / #ffffff text
- White fill CTA "Play video": #ffffff bg / #000000 text
- Nav tabs "Personal"/"Business": 104px radius / 40px height / 16px Plain weight 400
- Hero section bg (blue-400-plate class): rgb(96, 205, 255) = #60cdff
- Brand dark section bg: rgb(0, 41, 145) = #002991
- Cookie consent buttons: rgba(255,255,255,0.7) bg / 1000px radius / 2px solid #cfd3d8
- body: font-family Plain / color rgb(0,0,0) / font-size 16px / line-height 18.4px
- bgFreq top: #ffffff ×12, #000000 ×6, #60cdff ×2, #002991 ×2

Brand narrative: publicly documented history (PayPal / Confinity merger, eBay acquisition 2002,
spin-off 2015, HQ San Jose). CEO Alex Chriss as of 2023 — publicly documented leadership transition.
2023 rebrand details inferred from live inspect of new homepage design vs. widely documented rebrand.

Personas are fictional archetypes for illustrative purposes only.

Voice samples verified from live homepage and merchant page inspects (2026-06-22).
-->
