---
omd: 0.1
brand: Tesla
---

# Design System Inspiration of Tesla

## 1. Visual Theme & Atmosphere

Tesla's website is an exercise in radical subtraction — a digital showroom where the product is everything and the interface is almost nothing. The page opens with a full-viewport hero that fills the entire screen with cinematic car photography: three vehicles arranged on polished concrete against a hazy cityscape sky, with a single model name floating above in translucent white type. There are no decorative borders, no gradients, no patterns, no shadows. The UI exists only to provide just enough navigational structure to get out of the way. Every pixel that isn't product imagery is white space, and that restraint is the design system's most powerful statement.

The color philosophy is almost ascetic: a single blue (`#3E6AE1`) for primary calls to action, three shades of dark gray for text hierarchy, and white for everything else. The entire emotional weight is carried by photography — sprawling landscape shots, studio-lit vehicle profiles, and atmospheric environmental compositions that stretch edge-to-edge across each viewport-height section. The UI chrome dissolves into the imagery. The navigation bar floats above the hero with no visible background, border, or shadow — the TESLA wordmark and five navigation labels simply exist in the space, trusting the content beneath them to provide sufficient contrast.

Typography recently transitioned from Gotham to Universal Sans — a custom family split into "Display" for headlines and "Text" for body/UI elements — unifying the website, mobile app, and in-car software into a single typographic voice. The Display variant renders hero titles at 40px weight 500, while the Text variant handles everything from navigation (14px/500) to body copy (14px/400). The font carries a geometric precision with slightly humanist terminals that feels engineered rather than designed — exactly matching Tesla's brand identity of technology that doesn't need to announce itself. There are no text shadows, no text gradients, no decorative type treatments. Every letterform earns its place through clarity alone.

**Key Characteristics:**
- Full-viewport hero sections (100vh) dominated by cinematic car photography with minimal overlay UI
- Near-zero UI decoration: no shadows, no gradients, no borders, no patterns anywhere on the page
- Single accent color — Electric Blue (`#3E6AE1`) — used exclusively for primary CTA buttons
- Universal Sans font family (Display + Text) unifying web, app, and in-car interfaces
- Photography-first presentation where product imagery carries all emotional weight
- Frosted-glass navigation concept with transparent/white nav that floats over hero content
- 0.33s cubic-bezier transitions as the universal timing for all interactive state changes
- Carousel-driven hero with dot indicators and edge arrow navigation for multiple vehicle showcases
- "Ask a Question" persistent chatbot bar anchored to the viewport bottom

## 2. Color Palette & Roles

### Primary
- **Electric Blue** (`#3E6AE1`): Primary CTA button background — a confident, mid-saturation blue (rgb 62, 106, 225) that stands alone as the only chromatic color in the entire interface. Used exclusively for "Order Now" and other primary action buttons
- **Pure White** (`#FFFFFF`): Dominant background color for all surfaces, panels, navigation, and secondary button fills — the canvas that lets photography breathe

### Secondary & Accent
- **Promo Blue** (`#3E6AE1`): Blue also serves for promotional text ("0% APR Available") displayed over hero imagery in the same hue as the CTA — creating a visual link between incentive messaging and action
- No secondary accent colors exist. Tesla deliberately avoids color variety to maintain extreme visual discipline

### Surface & Background
- **White Canvas** (`#FFFFFF`): Page background, navigation panel, dropdown menus, and all surface containers
- **Light Ash** (`#F4F4F4`): Subtle alternate surface for section differentiation — barely perceptible shift from pure white (rgb 244, 244, 244)
- **Carbon Dark** (`#171A20`): Dark surface color for hero text overlays and potential dark-mode contexts (rgb 23, 26, 32) — a warm near-black with a blue undertone
- **Frosted Glass** (`rgba(255, 255, 255, 0.75)`): Semi-transparent white for navigation backdrop-filter effects on scroll

### Neutrals & Text
- **Carbon Dark** (`#171A20`): Primary heading and navigation text — the darkest text value (rgb 23, 26, 32), used for model names, nav labels, and hero titles on light backgrounds
- **Graphite** (`#393C41`): Body text and secondary content (rgb 57, 60, 65) — the default paragraph color, slightly warmer than pure gray
- **Pewter** (`#5C5E62`): Tertiary text for sub-links, secondary navigation links like "Learn" and "Order" (rgb 92, 94, 98)
- **Silver Fog** (`#8E8E8E`): Placeholder text in input fields and disabled states (rgb 142, 142, 142)
- **Cloud Gray** (`#EEEEEE`): Light borders and divider lines (rgb 238, 238, 238)
- **Pale Silver** (`#D0D1D2`): Subtle UI borders and delineation (rgb 208, 209, 210)

### Semantic & Accent
- Tesla's marketing site avoids semantic color coding (no green/red/yellow status indicators). Error, success, and warning states follow standard browser defaults in form contexts
- The blue CTA (`#3E6AE1`) serves as the sole interactive color signal

### Gradient System
- No gradients are used anywhere in the interface
- Depth is achieved entirely through photography, whitespace, and the binary contrast between full-bleed imagery and clean white surfaces
- The navigation achieves layering through opacity (frosted glass effect) rather than gradient or shadow

## 3. Typography Rules

### Font Family
- **Display**: `Universal Sans Display`, -apple-system, Arial, sans-serif — used for hero titles and large model names. A geometric sans-serif with precisely engineered proportions, recently replacing Gotham to unify Tesla's digital ecosystem (website, mobile app, vehicle interface)
- **Text/UI**: `Universal Sans Text`, -apple-system, Arial, sans-serif — used for navigation, body copy, buttons, and all UI text. Optimized for legibility at smaller sizes with slightly wider proportions than the Display variant
- **No OpenType features** detected — typography is completely unembellished
- **No italic variants** observed on the marketing site

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Hero Title | 40px (2.50rem) | 500 | 48px (1.20) | normal | Universal Sans Display, white on dark hero imagery |
| Product Name | 17px (1.06rem) | 500 | 20px (1.18) | normal | Universal Sans Text, model names in nav panel and cards |
| Nav Item | 14px (0.88rem) | 500 | 16.8px (1.20) | normal | Universal Sans Text, primary navigation labels |
| Body Text | 14px (0.88rem) | 400 | 20px (1.43) | normal | Universal Sans Text, paragraph and descriptive content |
| Button Label | 14px (0.88rem) | 500 | 16.8px (1.20) | normal | Universal Sans Text, CTA button text |
| Sub-link | 14px (0.88rem) | 400 | 20px (1.43) | normal | Tertiary links (Learn, Order, Experience) |
| Promo Text | 22px (1.38rem) | 400 | 20px (0.91) | normal | White promotional text on hero ("0% APR Available") |
| Category Label | 16px (est.) | 500 | — | normal | White text labels on category cards ("Sport Sedan") |

### Principles
- **"Normal" letter-spacing everywhere**: Unlike most modern tech brands that use negative tracking for headlines, Tesla uses default letter-spacing at every level. This reflects a philosophy that the typeface should speak for itself without manipulation
- **Weight restraint**: Only two weights appear — 500 (medium) for headings/UI and 400 (regular) for body. No bold (700), no light (300). The system avoids typographic drama
- **Unified font sizing**: Most UI text clusters at 14px with only hero titles (40px) and promo text (22px) breaking away. This extreme uniformity creates a sense of engineered consistency
- **Display vs Text split**: The two-variant system (Display for hero, Text for UI) creates subtle optical correction without visible stylistic difference — they appear as the same typeface at different sizes
- **No text transforms**: No uppercase text appears in the main navigation or CTAs — the lowercase approach reinforces Tesla's understated confidence

## 4. Component Stylings

### Buttons
All buttons use barely-rounded rectangles (4px border-radius) — creating a sharp, technical aesthetic that mirrors the precision of the vehicles.

**Primary CTA** — The main action button:
- Default: bg `#3E6AE1` (Electric Blue), text `#FFFFFF`, fontSize 14px, fontWeight 500, padding 4px with inner content centering, borderRadius 4px, minHeight 40px, width 200px
- Border: 3px solid transparent (reserves space for focus/active border animation)
- Box Shadow: `rgba(0,0,0,0) 0px 0px 0px 2px inset` (invisible at rest, animates to visible on focus)
- Transition: `border-color 0.33s, background-color 0.33s, color 0.33s, box-shadow 0.25s`
- Hover: subtle darkening of blue background
- Used for: "Order Now" calls to action

**Secondary CTA** — The alternative action button:
- Default: bg `#FFFFFF`, text `#393C41` (Graphite), same dimensions and border pattern as primary
- Transition: identical timing to primary (0.33s)
- Used for: "View Inventory" alongside primary CTA

**Nav Button** — Top navigation items:
- Default: bg transparent, text `#171A20` (Carbon Dark), fontSize 14px, fontWeight 500, borderRadius 4px, padding 4px 16px, minHeight 32px
- Transition: `color 0.33s, background-color 0.33s`
- Active/expanded: subtle background highlight
- Used for: "Vehicles", "Energy", "Charging", "Discover", "Shop"

**Text Link** — In-content actions:
- Default: text `#5C5E62` (Pewter), fontSize 14px, fontWeight 400, no background, no border
- Hover: underline decoration with box-shadow transition
- Transition: `box-shadow 0.33s cubic-bezier(0.5, 0, 0, 0.75), color 0.33s`
- Used for: "Learn", "Order", "Experience", "New", "Pre-Owned" links in dropdown panel

### Cards & Containers

**Vehicle Card** (Navigation panel):
- Background: transparent (inherits panel white)
- Border: none
- Shadow: none
- Content: vehicle image (transparent PNG) + model name centered below + two text links
- Layout: 3-column grid within the dropdown panel
- No hover animation on the card itself — interaction is via the text links beneath

**Category Card** (Homepage lower section):
- Background: full-bleed landscape photography
- Border radius: approximately 12px (subtly rounded)
- Overflow: hidden (clips image to rounded corners)
- Text: white label in top-left corner ("Sport Sedan", "Midsize SUV")
- Size: large format, approximately 2:1 aspect ratio
- No shadow, no border, no overlay gradient — text relies on image darkness for contrast

### Inputs & Forms
- Background: transparent
- Text color: `#171A20` (Carbon Dark)
- Placeholder color: `#8E8E8E` (Silver Fog)
- Border: minimal, inherits from browser defaults
- Font: Universal Sans Text, 14px
- The "Ask a Question" chatbot input bar sits at the viewport bottom with a clean white background and subtle border

### Navigation
- **Desktop**: Centered horizontal nav with TESLA wordmark (spaced uppercase letters) on the left, five category buttons center-aligned, and three icon buttons (help, globe/language, account) on the right
- **Background**: White (transitions from transparent over dark hero to opaque white on scroll via class toggle `tds-site-header--white-background`)
- **Dropdown panel**: Full-width white panel with 3-column vehicle grid + right sidebar text links, no shadow, no border — appears seamlessly below the nav
- **Sticky behavior**: `sticky-without-slide` class — stays at top without slide-in animation
- **Mobile**: Hamburger collapse pattern
- **No visible separator** between nav and content — the nav blends with the hero

### Image Treatment
- **Hero**: Full-viewport (100vh) sections with cinematic photography — edge-to-edge, no padding, no margin
- **Vehicle images**: Transparent PNG renders on white background in dropdown panel, studio-quality 3/4 angle shots
- **Category cards**: Landscape photography with approximately 2:1 ratio, rounded corners (12px)
- **Carousel**: Auto-advancing with dot indicators (3 dots) and left/right arrow navigation on edges
- **Lazy loading**: Below-fold sections use lazy loading, rendering as blank white until scrolled into view

### Persistent Chat Bar
- Anchored to viewport bottom, visible across all sections
- White background with subtle border
- Contains: chat icon + "Ask a Question" label + placeholder text ("What's Dog Mode?") + send icon + "Schedule a Drive Today" secondary CTA
- Schedule CTA has a teal/blue icon accent

## 5. Layout Principles

### Spacing System
- **Base unit**: 8px
- **Common values**: 8px (0.5rem), 16px (1rem), 21.44px (1.34rem)
- **Button padding**: 4px (minimal outer) with content centering via flexbox, 4px 16px for nav items
- **Section padding**: Full-viewport sections with content centered vertically
- **Card gap**: approximately 16px between category cards

### Grid & Container
- **Max width**: approximately 1383px (full viewport width used for most content)
- **Hero**: Full-bleed, edge-to-edge, 100vh sections
- **Navigation panel**: 3-column grid for vehicle cards with right-aligned text sidebar (~70/30 split)
- **Category cards**: 2-up horizontal layout (large left card + smaller right card)

### Whitespace Philosophy
Tesla uses whitespace as a luxury signal. The generous vertical spacing between sections (each section is a full viewport height) means you can only see one "message" at a time — one car, one model name, one CTA pair. This creates a gallery-like browsing experience where each scroll is a deliberate transition, not a continuous feed. White space is not empty — it's the frame that elevates each vehicle to the status of art piece.

### Border Radius Scale
| Value | Context |
|-------|---------|
| 0px | Most elements — sharp edges are the default |
| 4px | Buttons (primary, secondary, nav items) — barely perceptible rounding |
| ~12px | Category cards — noticeable but restrained rounding on larger surfaces |
| 50% | Carousel dot indicators — perfect circles |

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Level 0 (Flat) | No shadow, no border | Default state for all elements — cards, panels, buttons at rest |
| Level 1 (Frost) | `rgba(255,255,255,0.75)` backdrop | Navigation bar on scroll — frosted glass transparency |
| Level 2 (Overlay) | `rgba(128,128,128,0.65)` | Modal overlays and region/cookie popups |
| Level 3 (Subtle) | `rgba(0,0,0,0.05)` | Minimal shadow hints on rare hover states |

### Shadow Philosophy
Tesla's approach to elevation is essentially "none." The site avoids box-shadows entirely in its primary interface. Depth is communicated through three alternative strategies:
1. **Z-index layering**: The sticky navigation sits above hero content through positioning, not shadow
2. **Opacity-based transparency**: The frosted glass nav and overlay modals use background-color opacity rather than shadow to indicate layering
3. **Photography-as-depth**: The full-bleed images create their own visual depth through perspective, lighting, and composition — making UI shadows redundant

### Decorative Depth
- No gradients, glows, or atmospheric effects on UI elements
- The hero imagery itself provides all visual richness — sunset skies, reflected light on car surfaces, ground shadows from studio lighting
- The carousel arrow buttons use a semi-transparent white background to float above the hero imagery without disrupting it

## 7. Do's and Don'ts

### Do
- Let photography dominate every screen — the product IS the design
- Use Electric Blue (`#3E6AE1`) exclusively for primary CTAs — never for decorative purposes
- Maintain viewport-height sections for major content blocks — one message per screen
- Keep typography at weight 400-500 only — no bold, no light, no extremes
- Use 4px border-radius for all interactive elements — precision over playfulness
- Trust whitespace as a luxury signal — never fill available space just because it's empty
- Keep all transitions at 0.33s — consistency in motion is as important as consistency in color
- Use transparent PNG vehicle imagery on white backgrounds for product showcases
- Center CTAs horizontally below model names — the vertical rhythm is model → subtitle → buttons
- Maintain the Display/Text font split — Display for hero-scale text only, Text for everything else

### Don't
- Add shadows to any element — elevation through shadow contradicts the flat, gallery aesthetic
- Use more than one chromatic color besides the blue CTA — the palette is intentionally monochrome-plus-one
- Apply gradients, patterns, or decorative backgrounds to surfaces — white and photography are the only backgrounds
- Use text larger than 40px on the web — the typography is deliberately restrained even at hero scale
- Add borders to cards or containers — separation is achieved through spacing, not lines
- Use uppercase text transforms — Tesla's confidence is expressed through lowercase calm
- Introduce rounded-pill buttons or large border-radii — the 4px radius is deliberate and precise
- Override the Universal Sans family with other typefaces — cross-platform consistency is a core brand value
- Add hover animations with scale/translate transforms — Tesla's interactions are color-only (background and border transitions)
- Clutter the viewport with multiple CTAs — every screen should have at most two action buttons

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single-column layout, hamburger nav replaces horizontal labels, hero text scales to ~28px, CTA buttons stack vertically, category cards become full-width |
| Tablet | 768-1024px | 2-column nav panel, hero maintains full-viewport height, CTAs remain side-by-side, reduced horizontal padding |
| Desktop | 1024-1440px | Full horizontal nav, 3-column vehicle grid in dropdown, hero at 40px, side-by-side CTAs at 200px/160px width |
| Large Desktop | >1440px | Content remains centered, hero photography scales to fill wider viewports, max-width container for nav panel content |

### Touch Targets
- Primary CTA buttons: 200px × 40px minimum (well above 44×44px WCAG requirement)
- Nav buttons: minimum 32px height with 4px 16px padding — adequate touch targets
- Carousel arrows: ~44px square white semi-transparent buttons at viewport edges
- Text links ("Learn", "Order"): 14px text with adequate line-height spacing for touch

### Collapsing Strategy
- **Navigation**: Horizontal category buttons (Vehicles, Energy, Charging, Discover, Shop) collapse to a hamburger/drawer menu on mobile
- **Hero CTA pair**: Side-by-side buttons on desktop stack vertically on mobile
- **Category cards**: 2-up horizontal layout collapses to single-column full-width on mobile
- **Vehicle grid**: 3-column grid in desktop nav panel becomes 2-column on tablet, single-column on mobile
- **Spacing**: Section vertical padding remains generous (viewport-height sections) but horizontal padding reduces

### Image Behavior
- Hero images are fully responsive and fill the entire viewport at every breakpoint
- Vehicle carousel images use `object-fit: cover` to maintain cinematic composition across widths
- Transparent PNG vehicle images in the nav panel scale proportionally within their grid cells
- Category card images maintain their landscape ratio and clip via `overflow: hidden` with border-radius

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: "Electric Blue (#3E6AE1)"
- Background: "Pure White (#FFFFFF)"
- Heading text: "Carbon Dark (#171A20)"
- Body text: "Graphite (#393C41)"
- Tertiary text: "Pewter (#5C5E62)"
- Placeholder: "Silver Fog (#8E8E8E)"
- Alternate surface: "Light Ash (#F4F4F4)"
- Dark surface: "Carbon Dark (#171A20)"

### Example Component Prompts
- "Create a hero section with a full-viewport background image, centered 'Model Y' title in Universal Sans Display at 40px weight 500 in white, a subtitle line below, and two buttons side by side: a primary Electric Blue (#3E6AE1) 'Order Now' button and a secondary white 'View Inventory' button, both with 4px border-radius and 40px height"
- "Design a navigation bar with a spaced-letter wordmark on the left, five text buttons (14px, weight 500, Carbon Dark #171A20) centered, and three icon buttons on the right, all on a white background with no shadow or border"
- "Build a vehicle card grid with 3 columns, each card showing a transparent-background car image above a model name (17px, weight 500, Carbon Dark) and two text links (14px, weight 400, Pewter #5C5E62) labeled 'Learn' and 'Order', on a pure white surface with no borders or shadows"
- "Create a category card with full-bleed landscape photography, 12px border-radius, overflow hidden, and a white text label ('Sport Sedan') positioned in the top-left corner with no overlay gradient"
- "Design a persistent bottom bar with a chat input ('Ask a Question' placeholder), a send icon, and a secondary CTA ('Schedule a Drive Today') with a teal icon, anchored to the viewport bottom on a white background"

### Iteration Guide
When refining existing screens generated with this design system:
1. Focus on ONE component at a time — Tesla's system is so minimal that each element must be pixel-perfect
2. Reference specific color names and hex codes from this document — there are only 6-7 colors in the entire system
3. Use natural language descriptions, not CSS values — "barely rounded corners" not "border-radius: 4px"
4. Describe the desired "feel" alongside specific measurements — "gallery-like silence between sections" communicates the whitespace philosophy better than "margin-bottom: 100vh"
5. Always verify that photography is doing the emotional heavy-lifting — if the UI itself feels "designed," it's too much

---

## 10. Voice & Tone

Tesla writes the way an engineer briefs a room: short declarative sentences, nouns before adjectives, and no adjective that doesn't earn its place. The voice treats the reader as someone capable of assessing a specification, not a prospect to be convinced. Range, charge time, and price appear before any superlative — and usually instead of one. When Tesla does reach for scale, it reaches for numbers, not words ("1.66 million vehicles delivered" rather than "record-breaking"). Marketing copy and a technical release note read in the same register; the surface changes, the voice does not.

| Context | Tone |
|---|---|
| Headlines | Model name + single-word or short-phrase claim. "Model Y. Long Range." No verbs unless necessary. |
| Primary CTA | Verb + noun, no modifier. "Order Now", "View Inventory", "Schedule a Drive". Never "Unlock", "Experience", "Discover". |
| Vehicle specs | Number + unit, stated in isolation. "358 miles", "3.5 s 0–60 mph". No "up to" unless legally required; no "!". |
| Mission / impact copy | Plain, declarative, direct from the filing. Reads like a prospectus paragraph, not a manifesto. |
| Master Plan essays | First-principles reasoning in numbered steps. Long-form only when the argument actually requires it. |
| Error (configurator / order) | States the blocker and the exact next step. No apologetic preamble. |
| Service messaging | Time window, location, cost. Never "rest assured", never "our team is working hard". |
| Legal / autonomy disclosures | Precise, regulator-ready. Capabilities and their conditions in the same sentence. |
| Marketing email / announcement | Lowercase, under 12 words where possible. "Cybertruck Deliveries Begin." |

**Forbidden phrases.** "Revolutionary", "game-changer", "unleash", "next-generation", "reimagined", "elevate", "experience the future", "buckle up", "beyond". No exclamation marks on routine CTAs. No emoji in product copy, configurator flows, service updates, or legal surfaces. No lifestyle adjectives stacked on specifications ("luxurious premium performance" — pick at most one and only when measurable). No "simply" or "just" preceding any action verb. No asking-a-question patterns in CTAs ("Ready to change the world?") — Tesla asserts, it doesn't prompt.

**Voice samples.**

- Homepage hero CTA pair: "Order Now" / "View Inventory" <!-- verified: tesla.com homepage, 2026-04, observed via base DESIGN.md §1 live recon and cross-referenced in third-party UX audit -->
- Vehicle card secondary links: "Learn" / "Order" <!-- verified: tesla.com navigation dropdown, 2026-04, base DESIGN.md §4 -->
- Persistent bottom bar: "Ask a Question" / "Schedule a Drive Today" <!-- verified: tesla.com chat bar, 2026-04, base DESIGN.md §4 -->
- Mission statement (Impact page): "Our mission is to accelerate the world's transition to sustainable energy." <!-- cited: [tesla.com/impact](https://www.tesla.com/impact) -->
- Master Plan Part IV framing: "sustainable abundance" <!-- cited: [tesla.com/master-plan-part-4](https://www.tesla.com/master-plan-part-4), Sept 2025 -->
- Order-flow error (illustrative pattern): "This configuration isn't available in your region. Change delivery location or select a different trim." <!-- illustrative: not verified as live Tesla copy; pattern follows the voice rules above — state blocker, state exact next step, no apology -->

## 11. Brand Narrative

Tesla Motors was incorporated in July 2003 by **Martin Eberhard** and **Marc Tarpenning**, two Silicon Valley engineers who had concluded that the binding constraint on electric transport was no longer physics but industrial will. Elon Musk joined in February 2004 as chairman and lead Series A investor; J.B. Straubel joined as CTO the same year. A 2009 settlement recognizes all five early contributors — Eberhard, Tarpenning, Ian Wright, Musk, and Straubel — as co-founders ([Wikipedia: Tesla, Inc.](https://en.wikipedia.org/wiki/Tesla,_Inc.)). The founding premise was blunt: build a car company that is a technology company, where the battery, software, and motor are treated as proprietary engineering problems rather than purchased components.

The mission, as stated on the company's Impact page, is *"to accelerate the world's transition to sustainable energy"* ([tesla.com/impact](https://www.tesla.com/impact)). The 2006 original Master Plan described the mechanism — sell a premium low-volume car, use the margin to fund a mid-priced one, use that to fund a mass-market one, and bundle solar generation so personal transport becomes energy-positive. Master Plan Part 3 (April 2023) extended the logic from vehicles to a fully electrified global energy economy, modeled end-use-by-end-use in a 41-page technical paper rather than a keynote slide deck ([Tesla Master Plan Part 3 PDF](https://www.tesla.com/ns_videos/Tesla-Master-Plan-Part-3.pdf)). Master Plan Part IV (September 2025) reframes the destination as *"sustainable abundance"* and rests on five stated principles: growth is infinite; innovation removes constraints; technology solves tangible problems; autonomy benefits all humanity; greater access drives greater growth ([tesla.com/master-plan-part-4](https://www.tesla.com/master-plan-part-4)).

What Tesla's brand refuses is the marketing grammar of its industry: no chrome badges, no "ultimate driving machine" mood films, no exterior wordmarks on most surfaces. It delivered 1.66 million vehicles in 2025 and deployed 46.7 GWh of battery storage <!-- source: [Wikipedia: Tesla, Inc.](https://en.wikipedia.org/wiki/Tesla,_Inc.), not re-verified against Tesla's own IR filings -->, and neither figure is presented with "more than ever" in any primary surface. The editorial decision is consistent: when the data is good, the data is the statement.

## 12. Principles

1. **First principles over convention.** Every constraint should be re-derived from physics and cost before it is accepted. If the industry says "batteries must be assembled this way", the answer is a structural pack; if it says "a pickup needs a frame", the answer is a stainless exoskeleton. *UI implication:* do not carry over a control because "car configurators have one" — re-ask whether the user needs it to make the decision. A Tesla configurator has fewer steps than any peer because each step was justified from scratch.
2. **The product is the hero; the UI is scaffolding.** Photography, specification, and vehicle render carry emotional weight. Chrome dissolves. *UI implication:* buttons are 4px-radius rectangles in a single accent blue; the hero image is 100vh with no overlay gradient. If a component competes with the product for attention, the component is wrong.
3. **One action per screen.** Each viewport presents at most two CTAs, usually a primary and a secondary ("Order Now" / "View Inventory"), and one decision moves the user forward. *UI implication:* ban stacked CTA columns and in-page feature lists more than five items long; if more actions exist, they belong in the next section, not this one.
4. **Specification beats adjective.** Numbers with units, in isolation, outperform "fast", "efficient", "long-range". *UI implication:* present spec tables with generous whitespace and a single weight (500) for the label, 400 for the value — no bars, no stars, no relative comparisons against anonymous peers.
5. **Whitespace is a luxury claim.** The cost of empty space is implicitly the cost of restraint; filling it would dilute the product. *UI implication:* viewport-height section breaks, no sidebars on marketing pages, body text at 14px with 1.43 line-height — the typographic system is uniform so the photograph is not.
6. **Monochrome plus one.** Exactly one chromatic accent (`#3E6AE1`) exists, and it is reserved for the primary CTA and the occasional promo label that should read as the same action class. *UI implication:* never introduce a second brand hue for status, marketing, or decoration; status colors default to neutral where the product doesn't warrant a signal color.
7. **Cross-platform typographic unity.** Universal Sans was commissioned so the website, the mobile app, and the in-car display share a typographic voice. *UI implication:* when building any Tesla-adjacent surface, use the Display/Text split at weights 400/500 only; system-font fallbacks are `-apple-system`, not Inter or Roboto.
8. **Quiet interactivity.** State changes happen through color and border-color transitions at `0.33s`, never scale, translate, or spring. *UI implication:* disallow `scale(1.02)` on hover, disallow any overshoot curve, and keep the single transition timing so the whole interface exhales in the same rhythm.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Tesla customer segments (early-adopter engineers, sustainability-motivated households, performance buyers, and fleet operators), not individual people.*

**Priya Narayan, 34, Sunnyvale.** Staff software engineer who reads the Master Plan Part 3 PDF before test-driving anything. Configures at 1am, refuses financing from any salesperson, and values that the configurator exposes kWh/mi instead of "long range" as a marketing word. Would leave the brand the first time a CTA says "Unleash".

**The Parks family, Denver.** Two working parents with two kids and a rooftop solar install from 2023. Chose a Model Y because the Powerwall-plus-solar-plus-car math pencilled out on a spreadsheet and because they wanted the family's transport to run on the same electrons as the dishwasher. Engage with the app daily; ignore the marketing site entirely after purchase.

**Dmitri Volkov, 41, Miami.** Bought a Plaid for the 0–60 figure and keeps it because the specs it quoted on day one are the specs it still hits. Does not care about autonomy marketing; does care that acceleration claims survive independent instrumented tests. Treats the vehicle as an engineering artifact, not a lifestyle.

**Jamie Okonkwo, fleet manager, Atlanta.** Operates a 140-vehicle delivery fleet and evaluates Tesla quarterly against alternatives on cost-per-mile, uptime, and OTA update cadence. Needs dashboards that expose consumption by route and a service SLA that reads in operational terms, not consumer-marketing terms.

## 14. States

| State | Treatment |
|---|---|
| **Empty (configurator, no trim selected)** | Full-viewport vehicle render centered on pure white (`#FFFFFF`). One Carbon Dark (`#171A20`) headline with the model name. No illustration, no "start here" arrow. The vehicle is the prompt. |
| **Empty (inventory search, no matches)** | Single Graphite (`#393C41`) line at 14px/1.43: "No vehicles match these filters in your area." One Electric Blue (`#3E6AE1`) text link: "Broaden search". No empty-state illustration. |
| **Loading (route / page transition)** | White surface with no spinner. Below-fold content renders as blank white until scrolled into view (lazy load). Hero imagery fades in at `0.33s`. Spinners are forbidden — silent white is the load state. |
| **Loading (CTA press, order submission)** | Primary button keeps its Electric Blue fill; label swaps to a neutral verb ("Submitting…"). No spinner inside the button; the `0.33s` background-color transition is the only motion. |
| **Skeleton (spec table, card grid)** | Cloud Gray (`#EEEEEE`) blocks sized to final dimensions. No shimmer gradient — static blocks only. Blue-tinted skeletons are banned; they introduce a chromatic color the system doesn't carry. |
| **Error (configurator conflict)** | Inline below the conflicting option. Graphite text states the blocker and the exact next step. Example: "This wheel isn't available with Tow Package. Remove Tow Package or select 20-inch wheels." No icon, no red background, no apology. |
| **Error (service / network)** | Light Ash (`#F4F4F4`) banner with Carbon Dark text: specific failure + recovery action. "Order couldn't be submitted. Try again, or contact Tesla Support with reference number #####." Never speculate about cause. |
| **Error (input validation)** | Field border shifts to `#D0D1D2` → Carbon Dark on the invalid field. Message appears below at 14px Graphite. One sentence. No tooltip, no ⚠. |
| **Success (order placed)** | Full-viewport white confirmation. Headline at 40px weight 500 Universal Sans Display: "Your Model Y is on order." Body states estimated delivery window as a date range in plain text. No checkmark illustration, no confetti, no toast. |
| **Success (account / inline action)** | Field transitions to its resting state; one Graphite micro-line confirms the change at 14px. No toast component exists anywhere in the system. |
| **Disabled (CTA)** | Button retains 4px radius and 40px height. Fill shifts to Cloud Gray (`#EEEEEE`), text to Silver Fog (`#8E8E8E`). Border remains `3px solid transparent` so geometry stays identical if re-enabled. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Focus rings, toggle state commit |
| `motion-fast` | 250ms | Box-shadow transitions, small property changes |
| `motion-standard` | 330ms | Color, background-color, border-color — the signature Tesla timing |
| `motion-slow` | 500ms | Hero carousel cross-fade, section-level photographic transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.5, 0, 0, 0.75)` | The observed default on text-link hover underlines and box-shadow transitions — pulls into and out of state with a slight settle |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Panel and dropdown reveals — lands without overshoot |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Panel and dropdown dismissals — quiet removal |

**Explicitly forbidden.** No spring or overshoot easings anywhere in the system. No `cubic-bezier(0.34, 1.56, 0.64, 1)`, no bounce, no rubber-banding on hover. Tesla's brand register is considered, not playful; a bouncing CTA reads as consumer-app exuberance and contradicts the engineering-first stance that carries every other design decision. The vehicle's acceleration curve may be exciting; the interface's state transition is not.

**Signature motions.**

1. **The 330ms color transition.** Every interactive state change — button hover, nav background on scroll, link underline, inventory filter selection — moves through the same `border-color 0.33s, background-color 0.33s, color 0.33s` triad. The uniformity is the signature; deviating for a single component breaks the rhythm of the whole site.
2. **Hero cross-fade, not slide.** The carousel advances by opacity, not by horizontal translation. The photograph below the type-layer changes; the type-layer re-materializes. Sliding introduces a direction of travel the brand does not want to imply.
3. **Scroll-triggered nav background.** The top nav transitions from transparent-over-hero to opaque white via the `tds-site-header--white-background` class toggle — a single property change at `motion-standard`, no translate, no scale, no blur beyond the already-declared backdrop-filter.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. The hero carousel stops auto-advancing and exposes its dot indicators as still buttons. The interface is fully functional without a single animated transition; Tesla's motion vocabulary is small enough that removing it loses nothing the product depends on.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification (2026-04-20):
- https://en.wikipedia.org/wiki/Tesla,_Inc. — confirms founding (Eberhard, Tarpenning,
  July 2003), Musk's Series A in Feb 2004, Straubel CTO May 2004, and the 2009
  co-founder settlement. Also sources 2025 delivery figures (1.66M vehicles,
  46.7 GWh storage) used in §11.
- tesla.com is behind Cloudflare 403 for programmatic fetch; primary Tesla
  surfaces (tesla.com/about, /impact, /mission, /blog, master-plan-part-4) were
  verified through web search that returned confirmed on-page phrasing of:
    · "Our mission is to accelerate the world's transition to sustainable energy"
      (tesla.com/impact)
    · "sustainable abundance" + five guiding principles (tesla.com/master-plan-part-4,
      Sept 2025)
    · Master Plan Part 3 (April 2023) as 41-page document modeling an electrified
      global energy economy (tesla.com/ns_videos/Tesla-Master-Plan-Part-3.pdf)

Base DESIGN.md (sections 1–9) is the direct source for token-level claims
used in the Philosophy layer (Electric Blue #3E6AE1, Carbon Dark #171A20,
Graphite #393C41, 0.33s transition, 4px radius, Universal Sans Display/Text,
hero 100vh, lazy-load behavior, nav class toggle tds-site-header--white-background).

Voice samples verification:
- "Order Now", "View Inventory", "Learn", "Order", "Ask a Question",
  "Schedule a Drive Today" — observed on tesla.com marketing surfaces during
  base DESIGN.md §1 / §4 live recon; cross-referenced in third-party UX
  audits (plerdy.com) that quote identical button labels.
- Mission statement quoted from tesla.com/impact.
- Master Plan Part IV framing "sustainable abundance" quoted from
  tesla.com/master-plan-part-4 (Sept 2025).
- The order-flow error example is explicitly marked illustrative; it follows
  the documented voice rules but is not a verified string from live Tesla
  configurator copy.

Personas (§13) are fictional archetypes informed by publicly described Tesla
customer segments (early-adopter engineers, sustainability-motivated
households, performance buyers, fleet operators). Any resemblance to specific
individuals is unintended.

Interpretive claims — editorial readings, not official Tesla statements:
- "The product is the hero; the UI is scaffolding" as a design principle
  derived from the site's zero-decoration, 100vh-photography pattern.
- The "engineering-first register contradicts bouncing motion" rationale for
  the forbidden spring stance — extrapolated from the base DESIGN.md §7 Do's
  and Don'ts ban on scale/translate hover transforms, not from an explicit
  Tesla brand guideline.
- Tesla ≠ Musk: the narrative is deliberately framed around the company's
  founding (Eberhard/Tarpenning) and the published Master Plan documents,
  not around Musk's individual persona.
-->

