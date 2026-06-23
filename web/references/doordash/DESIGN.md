---
id: doordash
name: DoorDash
country: US
category: consumer-tech
homepage: "https://www.doordash.com"
primary_color: "#eb1700"
logo:
  type: simpleicons
  slug: doordash
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = live CTA red (#eb1700 = rgb(235,23,0)); brand font DD Norms (DD-TTNorms / TT-Norms). Near-black body (#191919 = rgb(25,25,25)) used instead of pure black for all text."
  colors:
    primary: "#eb1700"
    on-primary: "#ffffff"
    canvas: "#ffffff"
    ink: "#191919"
    ink-pure: "#000000"
    muted: "#767676"
    surface: "#f6f6f6"
    hairline: "#cccccc"
    error: "#eb1700"
  typography:
    family: { display: "TTNormsProCond-Blk", body: "DD Norms" }
    display-hero: { size: 40, weight: 900, lineHeight: 1.0, tracking: -0.5, use: "Hero banner headline, TTNormsProCond-Blk Black" }
    section:      { size: 40, weight: 800, lineHeight: 1.0, use: "Section headlines ('Everything you crave, delivered.')" }
    subsection:   { size: 32, weight: 800, lineHeight: 1.2, use: "Sub-section titles ('Become a Dasher')" }
    body-lg:      { size: 18, weight: 500, lineHeight: 1.4, use: "Feature sub-headlines, DD Norms Medium" }
    body:         { size: 16, weight: 400, lineHeight: 1.15, use: "Standard body, nav links, button labels" }
    nav:          { size: 18, weight: 500, lineHeight: 1.15, use: "Nav links, about site" }
    input:        { size: 16, weight: 500, lineHeight: 1.15, use: "Address/search input text" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    soft: "rgba(25, 25, 25, 0.2) 0px 2px 8px 0px"
    ring: "rgba(25, 25, 25, 0) 0px 0px 0px 1px inset"
  components:
    button-primary: { type: button, bg: "#eb1700", fg: "#ffffff", radius: "9999px", height: "40px", font: "16px / 400 DD Norms", states: "hover darker red", use: "Primary CTA — 'Find restaurants', 'Get DashPass', 'Sign In'" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#191919", radius: "9999px", height: "40px", font: "16px / 400 DD Norms", shadow: "rgba(25,25,25,0) 0px 0px 0px 1px inset", use: "Secondary CTA — 'Sign Up'" }
    button-ghost-sm: { type: button, bg: "#ffffff", fg: "#191919", radius: "9999px", height: "32px", font: "16px / 400 DD Norms", shadow: "rgba(25,25,25,0) 0px 0px 0px 1px inset, rgba(25,25,25,0.2) 0px 2px 8px 0px", use: "Soft ghost — 'Sign in for saved address', 'Use current location'" }
    input-address: { type: input, bg: "#ffffff", fg: "#191919", radius: "0px", font: "16px / 500 DD Norms", use: "Address / delivery location search field" }
    card-content: { type: card, bg: "#ffffff", fg: "#191919", radius: "8px", use: "Content card, feature section" }
    badge-red: { type: badge, bg: "#eb1700", fg: "#ffffff", radius: "9999px", font: "12px / 400 DD Norms", use: "Promotional pill badge" }
    nav-link: { type: tab, fg: "#191919", font: "18px / 500 TT-Norms", use: "About-site top nav item", active: "#191919 underline accent" }
    dot-indicator: { type: toggle, bg: "#cccccc", radius: "50%", height: "32px", use: "Carousel prev/next slide control dot" }
  components_harvested: true
---

# Design System Inspiration of DoorDash

## 1. Visual Theme & Atmosphere

DoorDash's product surface is defined by a single, unmistakable decision: a vivid delivery-truck red (`#eb1700`) that functions as both brand identifier and every interactive element in the system. The page opens on a clean white canvas (`#ffffff`) with near-black body text (`#191919`) — a choice that reads warmer than pure black and is used consistently across nav, headings, body copy, and secondary buttons. The only color with real weight is the brand red, which appears on every primary CTA from "Find restaurants" to "Get DashPass" to "Become a Dasher" — making the eye's next move impossible to miss.

The typographic personality is confident and physical. Banner headlines run in **TTNormsProCond-Blk** — a condensed, heavily-weighted typeface (weight 900) that reads as engineered speed, echoing the urgency of on-demand delivery. Section headings beneath it drop to **DD Norms** (DoorDash's custom version of TT Norms) at weight 800. Feature callouts run at 18px / weight 500 — a deliberate middle layer between the loud headlines and quiet body text. The combination produces a clear three-level hierarchy: loud display, confident subsection, calm information.

Geometry throughout is pill-dominant. Every button is `9999px` border-radius — a complete oval. Address search fields sit in a sharp-cornered container that contrasts intentionally with the oval buttons, anchoring the functional search surface while the CTAs float above it as tactile pills. Shadows are minimal: a soft `rgba(25,25,25,0.2)` 2px blur ring is used on ghost buttons to float them off the white canvas, but full red buttons rely on color saturation alone, not elevation, to command attention.

**Key Characteristics:**
- `TTNormsProCond-Blk` (condensed black weight 900) for hero banner headlines — speed, urgency, bold identity
- `DD Norms` (DoorDash's custom TT Norms) for all section/body/UI text at weights 400–800
- Single saturated red (`#eb1700`) as the only interactive color — every CTA, one color
- Near-black `#191919` for all text instead of pure black — slightly warm, consumer-grade
- Pill geometry (`9999px` radius) on all primary and secondary buttons
- White-dominant surface; red provides all contrast for action
- Minimal shadow: soft `rgba(25,25,25,0.2)` ring on ghost buttons; no elevation on red buttons

## 2. Color Palette & Roles

### Primary
- **DoorDash Red** (`#eb1700`): The defining brand color. Applied to every primary CTA button, anchor link acting as CTA, and promotional accents. `rgb(235, 23, 0)` live-measured from the DOM — an orange-leaning red that reads energetic and accessible at large sizes.
- **Pure White** (`#ffffff`): Page canvas, card surfaces, secondary button background, text on red.
- **Ink Near-Black** (`#191919`): `rgb(25, 25, 25)` — primary body text, secondary button text, nav links. Slightly warmer than `#000000`, used pervasively on the consumer surface.

### Neutral & Surface
- **Pure Black** (`#000000`): Occasional maximum-contrast context, hero label text.
- **Muted Grey** (`#767676`): Placeholder, disabled, secondary metadata text.
- **Surface Light** (`#f6f6f6`): Subtle tinted sections.
- **Hairline** (`#cccccc`): Carousel dot indicators, dividers.

### Interactive & State
- **DoorDash Red** (`#eb1700`): Primary interactive color — no secondary accent hue.
- **On-Primary** (`#ffffff`): Text and icons on red backgrounds.

## 3. Typography Rules

### Font Family
- **Display**: `TTNormsProCond-Blk` — condensed black variant, used for hero banner headlines at weight 900. On-demand boldness.
- **Body / UI**: `DD Norms` (aliased as `DD-TTNorms` / `TT-Norms`) — DoorDash's custom cut of TT Norms Pro. Used for all sections, nav, buttons, inputs, and body copy.
- **Fallback**: `-apple-system`, `"system-ui"`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`, sans-serif.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Hero Banner | TTNormsProCond-Blk | 40px | 900 | 1.0 | Condensed black for maximum impact |
| Section H2 | DD Norms | 40px | 800 | 1.0 | "Everything you crave, delivered." |
| Subsection H2 | DD Norms | 32px | 800 | 1.2 | "Become a Dasher", "DashPass is delivery for less" |
| Feature Body | DD Norms | 18px | 500 | 1.4 | Feature sub-headlines |
| Nav / Button | DD Norms / TT-Norms | 16–18px | 400–500 | 1.15 | Navigation links, CTA labels |
| Body | DD Norms | 16px | 400 | 1.15 | Standard reading text |
| Input | DD Norms | 16px | 500 | 1.15 | Address search input |

### Principles
- **Two-tier type family**: Condensed Black for display moments (TTNormsProCond-Blk), custom-cut DD Norms for everything functional. Never swapped.
- **Weight as hierarchy**: 900 (hero) → 800 (sections) → 500 (feature callouts) → 400 (body/nav). Predictable, structured.
- **No positive letter-spacing**: Display sizes use neutral or slightly negative tracking to maintain the compressed, energetic feel.
- **Consumer-friendly sizing**: Body text sits at 16px with no miniaturized captions — this is a mass-market delivery app, not a productivity tool.

## 4. Component Stylings

### Buttons

**Primary Red (Full Pill)**
- Background: `#eb1700`
- Text: `#ffffff`
- Radius: 9999px
- Height: 40px
- Font: 16px DD Norms weight 400
- Shadow: `rgba(25, 25, 25, 0) 0px 0px 0px 1px inset`
- Use: All primary CTAs — "Find restaurants", "Get DashPass", "Sign In", "Shop Groceries", "Become a Dasher"

**Secondary White Pill**
- Background: `#ffffff`
- Text: `#191919`
- Radius: 9999px
- Height: 40px
- Font: 16px DD Norms weight 400
- Shadow: `rgba(25, 25, 25, 0) 0px 0px 0px 1px inset`
- Use: "Sign Up" — equal visual weight at a glance, distinguished from primary by white fill

**Ghost Soft Pill (Small)**
- Background: `#ffffff`
- Text: `#191919`
- Radius: 9999px
- Height: 32px
- Font: 16px DD Norms weight 400
- Shadow: `rgba(25, 25, 25, 0) 0px 0px 0px 1px inset, rgba(25, 25, 25, 0.2) 0px 2px 8px 0px`
- Use: Contextual inline actions — "Sign in for saved address", "Use current location" — floating over white

### Inputs

**Address Search (Default)**
- Background: `#ffffff`
- Text: `#191919`
- Radius: 0px
- Font: 16px DD Norms weight 500
- Placeholder: "Enter delivery address" (muted text)
- Use: Primary address/location input — sharp corners contrast intentionally with pill buttons

### Cards & Containers

**Content Card**
- Background: `#ffffff`
- Text: `#191919`
- Radius: 8px
- Use: Feature content cards, product category tiles

**Tinted Surface Section**
- Background: `#f6f6f6`
- Radius: 0px
- Use: Alternating section backgrounds to segment page content

### Badges

**Promo Red Pill**
- Background: `#eb1700`
- Text: `#ffffff`
- Radius: 9999px
- Font: 12px DD Norms weight 400
- Use: Promotional labels, offer badges

### Navigation

**Top Nav (About surface — about.doordash.com)**
- Background: `#ffffff`
- Text: `#191919`
- Font: 18px TT-Norms weight 500
- Padding: 8px 0px
- Height: ~38px
- Use: Horizontal about-site navigation ("Products", "Company", "Impact", "News", "Blog")

**Top Nav CTA**
- Background: `#eb1700`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 0px 6px
- Height: 40px
- Font: 16px TT-Norms weight 400
- Use: "Get Started" nav CTA on about.doordash.com

### Carousel / Dot Controls

**Dot Indicator**
- Background: `#cccccc`
- Radius: 50%
- Height: 32px
- Use: Carousel slide navigation dots

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.doordash.com (homepage, live computed style), https://about.doordash.com/en-us (products/about surface, live computed style)
**Tier 2 sources:** getdesign.md/doordash — not found (404); styles.refero.design/?q=doordash — searched, no DoorDash-specific style page found
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: The hero area gives generous vertical breathing room; section dividers use alternating white / light-grey (`#f6f6f6`) backgrounds rather than explicit spacing tokens

### Grid & Container
- Centered single-column hero with address search widget below the headline
- Full-width alternating content bands: white → tinted (`#f6f6f6`) → white
- Feature sections: 2-column side-by-side (image + headline/CTA pairs) at desktop widths
- Max content width: approximately 1200px; hero text left-aligned with image right

### Whitespace Philosophy
- **Red as the only separator**: Because the red CTAs are so saturated, no other design element needs to anchor the eye. Whitespace is generous, allowing the red buttons to float.
- **Section rhythm through background-color**: Unlike systems using shadow cards, DoorDash uses flat background shifts (`#f6f6f6` tint) to segment content blocks.
- **Pill CTA isolation**: Each section ends with one pill CTA — never stacked buttons, never competing actions.

### Border Radius Scale
- Sharp (0px): Input fields — search box anchors the UI
- Standard (8px): Content cards
- Full (9999px): All CTA buttons, nav CTAs, badge pills, ghost buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, red buttons, most cards |
| Soft Lift (Level 1) | `rgba(25,25,25,0.2) 0px 2px 8px 0px` | Ghost pill buttons floating on white |
| Ring (Accessibility) | `rgba(25,25,25,0) 0px 0px 0px 1px inset` | Implicit inset ring on all buttons |

**Shadow Philosophy**: DoorDash relies almost entirely on color contrast (`#eb1700` red) for visual hierarchy rather than elevation. The primary buttons cast no shadow — the red is loud enough. Ghost buttons on white surfaces get a soft 2px ambient shadow to distinguish them from the flat background without competing with the red CTA. This is a consumer-facing system that prioritizes clarity over sophistication.

## 7. Do's and Don'ts

### Do
- Use `#eb1700` red for every primary CTA — one color means no ambiguity
- Apply `9999px` radius to all buttons — the pill shape IS the DoorDash interactive language
- Use `DD Norms` (TT-Norms) for all UI, nav, and body text
- Reserve `TTNormsProCond-Blk` (weight 900) for hero banner moments only
- Use `#191919` near-black for all text instead of pure `#000000`
- Segment sections with flat `#f6f6f6` backgrounds, not shadows or borders
- Keep each section to a single pill CTA — no stacked or competing buttons

### Don't
- Don't use red on non-interactive elements — it must remain the sole action signal
- Don't use non-pill button shapes (squares, rounded-md) — DoorDash is full-pill only
- Don't use pure black (`#000000`) for body text — always `#191919`
- Don't add drop shadows to red buttons — color does the work, shadow is unnecessary
- Don't introduce secondary accent colors — the system is deliberately monochromatic except for red
- Don't mix `TTNormsProCond-Blk` into body or nav text — condensed black belongs only in hero banners
- Don't use small font sizes — minimum is 16px; DoorDash is mass-market, not data-dense

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero stacks, address input full-width, navigation collapses |
| Tablet | 640-1024px | 2-up content cards, moderate padding |
| Desktop | 1024-1280px | Full layout, 2-column feature sections, hero image visible |
| Large Desktop | >1280px | Centered content, generous horizontal margin |

### Touch Targets
- All primary pill buttons at 40px height — comfortable thumb tap
- Ghost small buttons at 32px — adequate for touch with `8px` soft lift
- Nav links spaced for tap on mobile

### Collapsing Strategy
- Hero: Headline + address input → stacked, full-width on mobile
- Feature sections: 2-column image+text → single-column stacked
- Nav: Horizontal links → hamburger or icon menu on mobile
- Background bands: Maintain full-width at all breakpoints
- Red CTA: Always full-width on mobile — too important to be inline

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: DoorDash Red (`#eb1700`)
- Background: Pure White (`#ffffff`)
- Heading / body text: Ink Near-Black (`#191919`)
- Surface tint: Light Grey (`#f6f6f6`)
- Muted text: Grey (`#767676`)
- Divider: Hairline (`#cccccc`)
- On-red text: Pure White (`#ffffff`)

### Example Component Prompts
- "Create a hero section: white background. Headline at 40px TTNormsProCond-Blk weight 900, color #ffffff (on a red background image). Below it, an address input: white fill, 0px radius, DD Norms 16px weight 500. Then a red pill CTA: #eb1700 background, #ffffff text, 9999px radius, 40px height, 16px DD Norms."
- "Design a feature section: #f6f6f6 background. Heading 32px DD Norms weight 800, #191919. Sub-text 18px weight 500. One red pill CTA right-aligned: #eb1700, white text, 40px height, 9999px radius."
- "Build a nav: white 48px header. DD Norms 18px weight 500 links, #191919 text. Red CTA 'Get Started' right-aligned: #eb1700, #ffffff, 9999px radius, 40px height."
- "Make a ghost pill button: white background, #191919 text, 9999px radius, 32px height, soft shadow rgba(25,25,25,0.2) 0px 2px 8px 0px."

### Iteration Guide
1. The red (`#eb1700`) is the single interactive color — use it on CTAs only
2. Button shape is always `9999px` — never square, never rounded-md
3. Condensed display font (TTNormsProCond-Blk / weight 900) for hero banners only; DD Norms for everything else
4. Section depth comes from background tint (`#f6f6f6`), not shadows or borders
5. Text is always `#191919`, not `#000000`
6. Keep sections to one CTA per section — don't stack competing actions

---

## 10. Voice & Tone

DoorDash's voice is **energetic, inclusive, and low-friction** — a consumer brand that wants to feel like your neighborhood made faster. Copy is direct and benefit-first: "Everything you crave, delivered" doesn't explain the mechanics, it names the outcome. "DashPass is delivery for less" is a claim, not a description. CTAs are action-word imperatives: "Find restaurants", "Get DashPass", "Become a Dasher", "Shop Groceries" — concrete, present-tense, one-click obvious.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, outcome-framed. "Everything you crave, delivered." Never instructional. |
| Section headings | Concise claim + audience ("Become a Dasher" — tells you exactly who it's for). |
| CTAs | Single-verb imperatives. "Find", "Get", "Shop", "Become". No "Let's", no "Start your journey". |
| Feature callouts | Benefit-first, jargon-free. "Make money and work on your schedule." |
| Merchant / driver surfaces | Partnership tone — growth-framed ("Attract new customers", "0% commission"). |
| Promotions / offers | Specific and punchy: "$0 DELIVERY FEE ON FIRST ORDER" — uppercase, number-forward. |
| App / product | Casual, fast. Matches the pace of food delivery itself. |

**Voice samples (verbatim from live homepage):**
- "$0 DELIVERY FEE ON FIRST ORDER" — hero banner headline (uppercase, promotion-forward). *(verified live 2026-06-22)*
- "Everything you crave, delivered." — section heading (outcome-first, no brand jargon). *(verified live 2026-06-22)*
- "DashPass is delivery for less" — section heading (product name, direct claim). *(verified live 2026-06-22)*
- "As a delivery driver, make money and work on your schedule." — feature callout (benefit-first, inclusive). *(verified live 2026-06-22)*
- "Your Door to More" — about site hero (wordplay, expansive brand claim). *(verified live 2026-06-22)*

**Forbidden register**: corporate mission-statement bloat ("We are transforming the way…"), technical jargon left unexplained, passive voice, slow preambles ("We're excited to share…"), and anything that delays the obvious next action.

## 11. Brand Narrative

DoorDash was founded in **2013** by **Tony Xu (CEO)**, Stanley Tang, Andy Fang, and Evan Moore — four Stanford students who started with a simple experiment: delivering from Palo Alto restaurants that didn't have delivery. The founding insight was local commerce, not food: the same logistics infrastructure that could deliver a burrito could deliver anything from a neighborhood business. DoorDash's stated mission — *"to grow and empower local economies"* — reflects that origin; food delivery is the on-ramp, local commerce connectivity is the destination.

The brand grew into the largest food delivery platform in the United States, introducing **DashPass** as a subscription layer that converts transactional delivery into a recurring relationship, and expanding the surface from restaurants into grocery, convenience, retail, beauty, and alcohol. The "Door to More" positioning (live on the about site) signals this platform ambition: DoorDash is the last mile of everything, not just dinner.

What DoorDash refuses in its design: the intimidating chrome of logistics enterprise software, the playful density of Uber Eats' pop-art aesthetic, and the muted minimalism of premium grocery brands. What it embraces: a singular, memorable red that identifies every action; a condensed display typeface that feels fast; and a white-dominant surface that lets the food photography (and the red buttons) do all the work.

## 12. Principles

1. **One color, one action.** `#eb1700` red appears on every interactive element and nowhere decorative. *UI implication:* if a user sees red, it's clickable. If it's not red, it informs rather than invites.
2. **Speed of understanding.** The system is designed for a shopper who arrived with hunger, not curiosity. *UI implication:* every section leads with a benefit claim, ends with a single CTA, and eliminates competing decisions.
3. **Pill = trust.** The full-oval button is DoorDash's most recognizable design signature. *UI implication:* never use a non-pill button shape anywhere the brand CTA appears — the shape is a recognition signal.
4. **Display as urgency.** The condensed black display font reads fast because it's engineered for compression. *UI implication:* hero banner headlines should feel like a sign you read at speed, not text you settle in to parse.
5. **Local scale, national presence.** The brand must feel equally at home in a Midwestern suburb and a Manhattan high-rise. *UI implication:* warm near-black text (`#191919`), white-dominant surfaces, and consumer-grade type sizes — no elitist minimalism, no intimidating enterprise density.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable DoorDash user segments (urban professionals, suburban families, gig workers, local restaurant owners), not individual people.*

**Maya, 28, Chicago.** An apartment dweller who orders dinner 3–4 times a week. Chooses DoorDash because DashPass makes the subscription math feel obvious — she treats it like a utility bill. Judges a delivery app by how fast she can go from craving to checkout. Would abandon an ordering flow that had more than three taps to confirm her saved address.

**Carlos, 34, Houston.** A Dasher who treats deliveries as supplemental income between shifts. Values the "work on your schedule" promise literally — logs in at 6pm and off at 10pm. Measures the app by payout clarity and how quickly he can accept the next order. Notices immediately when the driver app adds unnecessary steps.

**Lena, 44, Minneapolis.** A busy parent who uses DoorDash for weekly grocery delivery in addition to restaurant orders. Appreciates the expanded "shop anything" positioning because she consolidated two apps into one. Trusts the brand because the experience has been consistent for three years; brand loyalty built through repetition, not marketing.

**Marcus, 52, Atlanta.** Owner of a mid-sized soul food restaurant who joined DoorDash during the pandemic when in-person dining collapsed. Values the merchant dashboard's clarity — can see orders, ratings, and payout timing without calling anyone. Would leave the platform if the commission structure made unit economics untenable; loyalty to the platform is conditional on profitability.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results for address)** | White canvas. Ink Near-Black (`#191919`) single explanatory line. One red pill CTA to try a different address or browse featured restaurants. No illustration — the message is functional. |
| **Empty (DashPass, no saved restaurants)** | Brief prompt to order from a restaurant to build a history. Tone is warm encouragement, not system error. One red CTA: "Find restaurants". |
| **Loading (restaurant feed)** | Skeleton cards at exact final card dimensions with `#f6f6f6` tinted blocks. No shimmer animation by default on marketing surface. Feed appears in place. |
| **Loading (order tracking)** | Live map view with progress indicator. Red accent on the delivery progress bar / Dasher icon. Previous state data stays visible during refresh. |
| **Error (delivery address unrecognized)** | Inline below the address input field. Plain English explanation: "We couldn't find that address. Check the spelling or try a nearby address." Red accent on the error state border. |
| **Error (payment failed)** | Modal / inline error. States the decline reason if available and offers a direct path to update payment method. Not a generic "something went wrong." |
| **Success (order placed)** | Confirmation screen: red checkmark, order summary, estimated delivery time prominently displayed. Tone is celebratory but brief — the transaction is done, now the countdown begins. |
| **Success (DashPass subscribed)** | Brief confirmation with immediate value restatement: "$0 delivery fees on your next order." Transitions directly to the restaurant feed. |
| **Skeleton** | `#f6f6f6` blocks at final dimensions matching the restaurant/product card grid. Clean and quiet — no pulsing animation that suggests technical problems. |
| **Disabled** | Red buttons fade to a lower-opacity red (`rgba(235,23,0,0.4)`) rather than switching to grey — preserves the brand read. Ink text drops to `#767676` muted for disabled labels. |
| **Promo / Offer state** | Uppercase, number-forward: "$0 DELIVERY FEE" — reads like a sign, not a tooltip. Applied via the hero banner pattern; TTNormsProCond-Blk weight 900 in white on red or image background. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection ticks, focus ring state commit |
| `motion-fast` | 120ms | Button hover, CTA press feedback |
| `motion-standard` | 200ms | Sheet, dropdown, address autocomplete list |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, suggestion lists, nav dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and unobtrusive — matching the app's "get in, order fast, get out" promise. The red button responds to hover with a subtle background shift (`ease-standard`, `motion-fast`); the address autocomplete drops in at `motion-standard / ease-enter`. No spring, no overshoot — a delivery app signals reliability, not playfulness. Carousel slide transitions use `motion-standard` with a horizontal slide; dot indicators update instantly. Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; the product remains fully functional without animation.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle:
- https://www.doordash.com (homepage — hero, nav, CTAs, feature sections)
  · Hero H1 "$0 DELIVERY FEE ON FIRST ORDER" — TTNormsProCond-Blk 40px / weight 900 / color #ffffff
  · Primary CTA "Find restaurants" — bg rgb(235,23,0) = #eb1700 / radius 9999px / height 40px / 16px DD Norms
  · Secondary CTA "Sign Up" — bg rgb(255,255,255) / text rgb(25,25,25) / radius 9999px / height 40px
  · Ghost pill "Sign in for saved address" — bg #ffffff / text #191919 / radius 9999px / h 32px / shadow rgba(25,25,25,0.2)
  · Address input — bg #ffffff / text rgb(25,25,25) / radius 0px / font DD Norms 16px weight 500
  · H2 "Become a Dasher" — DD Norms 32px weight 800 / color rgb(25,25,25)
  · H2 "Everything you crave, delivered." — DD Norms 40px weight 800
  · body font: DD-TTNorms / TT-Norms / DD Norms family
- https://about.doordash.com/en-us (about/products surface)
  · body font: TT-Norms, DD-TTNorms / color rgb(25,25,25) / bg rgb(255,255,255)
  · Nav links "Products","Company","Impact" — TT-Norms 18px weight 500 / padding 8px 0px / color #191919
  · CTA "Get Started" — bg rgb(235,23,0) = #eb1700 / radius 9999px / 40px height / padding 0px 6px
  · H1 "Your Door to More" — 40px weight 700 / color rgb(25,25,25)
  · Carousel dots — bg rgb(204,204,204) / radius 50% / height 32px

Brand narrative and founding facts (Tony Xu, 2013, Stanford, local commerce origin) are
widely documented public facts: DoorDash S-1, Wikipedia, public press interviews.

Personas are fictional archetypes informed by publicly observable DoorDash user segments
(consumers, Dashers, merchants). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "pill = trust", "one color one action") are editorial readings
connecting DoorDash's observed design choices to its product positioning.
-->
