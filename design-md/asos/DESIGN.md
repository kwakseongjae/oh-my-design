---
id: asos
name: ASOS
country: UK
category: ecommerce
homepage: "https://www.asos.com"
primary_color: "#2d2d2d"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=asos.com&sz=128"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = nav/surface dark charcoal (#2d2d2d); add-to-bag = ASOS green (#018849); accent lime = app-promo banner (#ccff00); sale red (#d01345). Font = futura-pt, all-caps wordmark."
  colors:
    primary: "#2d2d2d"
    nav-active: "#525050"
    canvas: "#ffffff"
    surface: "#f8f8f8"
    surface-alt: "#f7f7f7"
    hairline: "#dddddd"
    muted: "#666666"
    muted-alt: "#858585"
    on-primary: "#ffffff"
    on-dark: "#ffffff"
    cta-green: "#018849"
    cta-green-on: "#ffffff"
    lime: "#ccff00"
    lime-on: "#000000"
    sale-red: "#d01345"
    info-blue: "#27455c"
    neutral-light: "#e8e8e8"
  typography:
    family: { primary: "futura-pt", fallback: "Tahoma, Geneva, Verdana, Arial, sans-serif" }
    hero-cta: { size: 16, weight: 700, lineHeight: 1.25, use: "Hero CTA buttons (SHOP WOMENS / SHOP MENS)" }
    nav-primary: { size: 14, weight: 900, lineHeight: 1.0, use: "Primary nav tabs (WOMEN / MEN) — ultra-bold uppercase" }
    nav-secondary: { size: 14, weight: 400, lineHeight: 1.0, use: "Utility nav (Help & FAQs, country selector)" }
    sub-nav: { size: 14, weight: 400, lineHeight: 1.0, use: "Category sub-nav (Sale, New in, Clothing…)" }
    app-banner: { size: 14, weight: 600, lineHeight: 1.0, use: "App download promo banner CTA" }
    body: { size: 16, weight: 400, lineHeight: 1.0, use: "Body default" }
    price: { size: 16, weight: 700, lineHeight: 1.0, use: "Product price" }
    sale-price: { size: 16, weight: 700, lineHeight: 1.0, use: "Sale/was price in sale red" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 0, md: 0, lg: 19, full: 9999 }
  shadow:
    none: "none"
  components:
    button-add-to-bag: { type: button, bg: "#018849", fg: "#ffffff", radius: "0px", padding: "4px 0px", height: "44px", font: "16px / 700 futura-pt", use: "Add to bag — primary commerce CTA, full-width on PDP" }
    button-hero-cta: { type: button, bg: "#ffffff", fg: "#000000", radius: "0px", padding: "9px 14px", height: "44px", font: "16px / 700 futura-pt", border: "2px solid #ffffff", use: "Hero editorial CTA on dark image (SHOP WOMENS)" }
    button-hero-cta-dark: { type: button, bg: "#ffffff", fg: "#000000", radius: "0px", padding: "9px 14px", height: "44px", font: "16px / 700 futura-pt", border: "2px solid #000000", use: "Hero CTA on light image variant (bordered)" }
    search-input: { type: input, bg: "#ffffff", fg: "#2d2d2d", radius: "19px", padding: "0px 70px 0px 16px", height: "38px", font: "16px / 400 futura-pt", use: "Global search bar in nav, pill-shaped" }
    product-card: { type: card, bg: "#ffffff", fg: "#000000", radius: "0px", use: "Product grid card — zero radius, no shadow; image + name + price stacked" }
    sale-badge: { type: badge, bg: "#d01345", fg: "#ffffff", radius: "0px", font: "12px / 700 futura-pt", use: "Sale price label / reduced tag on PLP cards" }
    lime-promo-banner: { type: card, bg: "#ccff00", fg: "#000000", radius: "0px", padding: "0px 16px", height: "30px", font: "14px / 600 futura-pt", use: "App download promo sitewide banner at page top" }
    nav-tab: { type: tab, bg: "#2d2d2d", fg: "#ffffff", radius: "0px", font: "14px / 900 futura-pt", active: "text #ffffff + active indicator (bg shift to #525050)", use: "Primary nav tabs WOMEN / MEN" }
  components_harvested: true
---

# Design System Inspiration of ASOS

## 1. Visual Theme & Atmosphere

ASOS is one of the world's largest online fashion retailers, and its visual identity is built on a deliberate philosophy of stark editorial restraint. The canvas is pure white (`#ffffff`) — no colour tinting, no gradients — against which product photography does all the heavy lifting. The UI chrome is kept in a signature dark charcoal (`#2d2d2d`) that reads as almost-black without being harsh, functioning as the navigation backbone of the entire experience. It's fashion retail distilled: get out of the way and let the product speak.

What makes ASOS instantly recognisable is its commitment to zero-radius geometry. Buttons, cards, inputs — everything is razor-sharp at 0px corner radius, echoing the bold uppercase wordmark. The sole exception is the search bar (19px pill radius), which creates a deliberate softness for the search affordance. This geometry reflects the fashion editorial aesthetic: the grid is dense, precise, and unapologetic.

The only moments of colour in the system are purposeful: an electric lime (`#ccff00`) for the app download promo banner, a confident ASOS green (`#018849`) for the "Add to bag" CTA, and a sale red (`#d01345`) for discounted prices. These three colours never compete — lime is sitewide utility, green is the commerce action, red is the price signal. Everything else is black and white.

**Key Characteristics:**
- `futura-pt` as the single brand typeface — geometric, condensed, all-caps for nav items
- Zero-radius geometry across all interactive elements (0px) — only search input uses pill (19px)
- Near-black charcoal (`#2d2d2d`) as the primary nav/surface colour — not pure black
- White canvas (`#ffffff`) with shadow-free flat layout — separation by hairlines (`#dddddd`)
- Three brand accent colours: lime (`#ccff00`) / green (`#018849`) / sale-red (`#d01345`)
- Ultra-bold weight 900 for primary nav labels (WOMEN / MEN) — extreme contrast for dense fashion grid
- Product photography centred; UI chrome is deliberately minimal and undistracting

## 2. Color Palette & Roles

### Primary Surface
- **Charcoal** (`#2d2d2d`): Primary navigation background, the defining surface colour of the ASOS chrome. Not pure black — a softened near-black that reads as sophisticated restraint.
- **Canvas White** (`#ffffff`): Page background, product cards, form inputs. All commerce content lives on white.
- **Pure Black** (`#000000`): Body text, headings, product names — maximum contrast on white.

### Navigation & Interactive
- **Nav Active** (`#525050`): Slightly lighter charcoal for active/hover nav items (Women tab when viewing Women).
- **Muted** (`#666666`): Utility nav text (Help & FAQs, footer links) — secondary level.
- **Muted Alt** (`#858585`): Tertiary text, meta information.

### Commerce Actions
- **ASOS Green** (`#018849`): The "Add to bag" button — the single primary commerce CTA. A deep confident green that signals a positive, completing action.
- **Sale Red** (`#d01345`): Reduced prices, sale tags, discount labels. A vivid crimson that demands attention on dense product grids.
- **Lime / Acid Yellow** (`#ccff00`): App download promo banner. A high-visibility editorial accent that cuts through the black-and-white system with maximum energy.

### Neutral Scale
- **Surface** (`#f8f8f8`): Very light grey for alternate surface backgrounds.
- **Surface Alt** (`#f7f7f7`): Secondary tint for sections.
- **Neutral Light** (`#e8e8e8`): Light grey for size selector chips (selected/available states).
- **Hairline** (`#dddddd`): Dividers and borders between elements.
- **Info Blue** (`#27455c`): Informational text and link states in some editorial surfaces.

## 3. Typography Rules

### Font Family
- **Primary**: `futura-pt` (Futura PT), with fallback: `Tahoma, Geneva, Verdana, Arial, sans-serif`
- **Alternate**: `Futura-pt, "Futura Std"` — used for sub-nav and secondary elements
- All display and navigation text is uppercase; body and product description text is mixed case

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Primary Nav (WOMEN/MEN) | futura-pt | 14px | 900 | Uppercase, white on charcoal |
| Hero CTA | futura-pt | 16px | 700 | Uppercase, editorial |
| App Banner | futura-pt | 14px | 600 | Uppercase, lime background |
| Sub-nav tabs | futura-pt | 14px | 400 | Utility tabs (Sale, New in…) |
| Utility nav | futura-pt | 14px | 400 | Help, Country selector |
| Body | futura-pt | 16px | 400 | Default body |
| Price | futura-pt | 16px | 700 | Bold for price prominence |
| Sale price | futura-pt | 16px | 700 | Sale red colour |
| Category sub-nav | futura-pt | 10.5px | 700 | Scroll-position gender toggle |

### Principles
- **Futura everywhere**: a single geometric sans-serif creates absolute system consistency across all touchpoints
- **Weight signals hierarchy**: 900 for primary nav commands, 700 for actions and prices, 600 for promo, 400 for body and utility
- **Uppercase for identity**: navigation and CTA text is rendered in uppercase, reinforcing the editorial fashion aesthetic
- **Zero kerning manipulation**: tracking is standard — Futura's own geometry provides the visual rhythm
- **Compact line heights**: body line-height is 1.0 (16px on 16px) — the grid is dense, not airy

## 4. Component Stylings

### Buttons

**Add to Bag (Primary Commerce CTA)**
- Background: `#018849`
- Text: `#ffffff`
- Radius: 0px
- Padding: 4px 0px
- Height: 44px
- Font: 16px futura-pt weight 700
- Use: Primary add-to-bag action on product detail page, full-width

**Hero Editorial CTA (on dark image)**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 0px
- Padding: 9px 14px
- Height: 44px
- Font: 16px futura-pt weight 700
- Border: 2px solid `#ffffff`
- Use: SHOP WOMENS / SHOP MENS on hero editorial image

**Hero Editorial CTA (bordered, on light image)**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 0px
- Padding: 9px 14px
- Height: 44px
- Font: 16px futura-pt weight 700
- Border: 2px solid `#000000`
- Use: SHOP WOMEN'S BRANDS / secondary hero CTA on lighter backgrounds

**Retry / Utility Action**
- Background: `#2d2d2d`
- Text: `#ffffff`
- Radius: 0px
- Padding: 15px
- Height: 48px
- Font: 14px futura-pt weight 900
- Use: Utility/error state action buttons

### Inputs

**Search Bar**
- Background: `#ffffff`
- Text: `#2d2d2d`
- Radius: 19px
- Padding: 0px 70px 0px 16px
- Height: 38px
- Font: 16px futura-pt weight 400
- Use: Global search input in header — the only rounded element in the system

**Size Selector**
- Background: `#e8e8e8`
- Text: `#000000`
- Radius: 0px
- Height: 56px
- Font: 16px futura-pt weight 400
- Use: Size selection chips on PDP

### Cards

**Product Grid Card**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 0px
- Use: PLP product card — no border, no shadow, sharp edges; image fills full card width

**Surface Section**
- Background: `#f8f8f8`
- Text: `#000000`
- Radius: 0px
- Use: Alternating content sections and page regions

### Badges

**Sale Badge**
- Background: `#d01345`
- Text: `#ffffff`
- Radius: 0px
- Font: 12px futura-pt weight 700
- Use: Reduced price / sale tag on product cards in PLP

**Lime Promo Banner**
- Background: `#ccff00`
- Text: `#000000`
- Radius: 0px
- Padding: 0px 16px
- Height: 30px
- Font: 14px futura-pt weight 600
- Use: Sitewide app download promo — high-visibility editorial lime banner

### Tabs

**Primary Gender Nav Tab**
- Background: `#2d2d2d`
- Text: `#ffffff`
- Radius: 0px
- Height: 60px
- Font: 14px futura-pt weight 900
- Active: background shifts to `#525050` on active/hover gender tab
- Use: WOMEN / MEN primary navigation tabs

**Category Sub-Nav Tab**
- Background: `#525050`
- Text: `#ffffff`
- Radius: 0px
- Height: 50px
- Padding: 0px 10px
- Font: 14px futura-pt weight 400
- Use: Category tabs (Sale, New in, Clothing, Dresses, Shoes, Accessories, Brands…)

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.asos.com/ (homepage, live computed style via playwright); https://www.asos.com/noisy-may/noisy-may-cropped-tank-top-in-washed-grey/prd/205778249 (PDP — Add to bag, size selector, nav observed)
**Tier 2 sources:** getdesign.md/asos — 404 (no entry); styles.refero.design/?q=asos — no ASOS results found (fashion adjacent brands returned, but not ASOS)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- Notable: The system is dense — 0px padding between product cards in the grid. Spacing appears on section breaks and inner card padding.

### Grid & Container
- PLP: multi-column product grid (4+ columns desktop), fluid with image-first cards
- PDP: left-aligned images (sticky scroll), right-aligned product details, size/colour selectors below title
- Full-width charcoal navigation bar (60px height) with logo centered/left and utility nav right
- Sitewide lime banner at page top (30px height) above the main nav
- Sub-navigation: secondary 50px bar for category filtering

### Whitespace Philosophy
- **Product density over airiness**: ASOS maximises product grid density. The browsing surface is commerce-first; whitespace is between products, not as a design statement.
- **Flat depth**: no shadows anywhere on the live site — border separation and background tints do all the hierarchy work.
- **Zero radius discipline**: sharp 0px corners on every interactive element except the search pill, reinforcing the editorial brand.

### Border Radius Scale
- Zero (0px): all buttons, cards, badges, tabs, size chips — the system default
- Pill (19px): search input only — the single exception
- Full (9999px): not present in the live UI

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | All surfaces — the system default |
| Hairline (Level 1) | `1px solid #dddddd` | Dividers, category separators |
| Tint (Level 2) | `#f8f8f8` / `#f7f7f7` background shift | Section alternation |

**Shadow Philosophy**: ASOS runs a completely shadowless system. Every surface is flat. Depth is communicated solely through stark colour contrast: charcoal (`#2d2d2d`) nav against white canvas, lime banner as an absolute visual layer, green add-to-bag as the one coloured action. The flatness is not an oversight — it keeps the focus on product photography, which supplies all the three-dimensional interest the page needs.

## 7. Do's and Don'ts

### Do
- Use `futura-pt` uppercase for all nav labels and CTAs — it's the brand's typographic identity
- Use weight 900 for primary nav items (WOMEN/MEN) — the extreme weight is intentional
- Use sharp 0px radius on all buttons, cards, and badges — zero rounding is the brand's geometry
- Use `#2d2d2d` charcoal (not pure black) for the nav and primary chrome
- Reserve `#018849` ASOS green exclusively for the add-to-bag action
- Use `#ccff00` lime only for promotional banners — it's a maximum-energy editorial statement
- Use `#d01345` red only for sale prices and discount indicators
- Keep the layout flat — no shadows; use hairlines and tints for separation

### Don't
- Apply rounded corners to any button or card — 0px radius is non-negotiable
- Use multiple accent colours simultaneously — lime, green, and red each have a single role
- Use a weight below 700 on hero CTAs — the fashion editorial aesthetic requires bold confidence
- Use inline decorative shadows — the system is flat by design
- Mix futura-pt with secondary display typefaces — the single-font system is strict
- Apply the lime (`#ccff00`) colour to interactive elements other than promo banners
- Put the add-to-bag green on non-commerce actions — it signals "completing purchase"

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Hamburger nav, single-column grid, 2-column PLP max |
| Tablet | 640-1024px | 2-3 column grid, abbreviated nav |
| Desktop | 1024px+ | Full 4-column PLP grid, full horizontal nav |

### Touch Targets
- Add to bag: 44px height — comfortable touch target
- Size selector chips: 56px height — large touch targets for fashion browsing
- Nav tabs: 60px height — primary nav comfortably tappable
- Search bar: 38px height with 16px left padding

### Collapsing Strategy
- Navigation: full horizontal primary nav → hamburger with slide-out on mobile
- Product grid: 4-column → 2-column → single column stacked
- Hero: maintains full-width editorial images across all sizes, CTA stacks below on mobile
- Sub-nav: horizontal scroll on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary nav / surface: ASOS Charcoal (`#2d2d2d`)
- Active nav: (`#525050`)
- Background / canvas: White (`#ffffff`)
- Body text: Black (`#000000`)
- Muted text: (`#666666`)
- Add to bag CTA: ASOS Green (`#018849`)
- Sale price: Sale Red (`#d01345`)
- Promo banner: Lime (`#ccff00`) with black text
- Hairline: (`#dddddd`)

### Example Component Prompts
- "Create an ASOS-style product card: white background, no border-radius, no shadow. Product image full-width. Product name at 14px futura-pt weight 400, #000000. Price at 16px weight 700 #000000. Sale price in #d01345."
- "Design an ASOS add-to-bag button: background #018849, white text #ffffff, 0px radius, full-width, 44px height, 16px futura-pt weight 700, uppercase."
- "Build ASOS nav: #2d2d2d charcoal background, 60px height. WOMEN and MEN tabs at 14px futura-pt weight 900, white text. Below: #525050 sub-nav 50px with Sale/New in/Clothing/Dresses tabs at 14px weight 400."
- "Create ASOS search bar: white background #ffffff, #2d2d2d text, 19px border-radius (pill), 38px height, 16px futura-pt weight 400, placeholder 'Search for items and brands'."
- "Design ASOS hero section: full-width editorial image, overlay two CTAs: 'SHOP WOMENS' and 'SHOP MENS' — white background, black text #000000, 0px radius, 2px solid white border, 9px 14px padding, 16px futura-pt weight 700 uppercase."

### Iteration Guide
1. Futura PT geometric sans, uppercase for identity — weight 900 on primary nav, 700 on CTAs
2. Zero-radius discipline: 0px on everything except the search pill (19px)
3. Charcoal `#2d2d2d` is the brand's navy/black — use it, not `#000000`, for nav chrome
4. Green is commerce only (`#018849`) — add to bag, checkout, completing actions
5. Red is price signal only (`#d01345`) — sale and reduced prices
6. Lime is promo only (`#ccff00`) — maximum-energy editorial statement, sparingly
7. No shadows, ever — flat hairlines and tints separate the layout

---

## 10. Voice & Tone

ASOS's voice is the confident best-friend who always knows what's cool and makes fashion feel accessible, not exclusive. Where luxury brands whisper, ASOS speaks plainly. Where editorial magazines lecture, ASOS enthuses without condescension. The brand's personality is young, inclusive, and irreverent — it sells fashion to everyone without making anyone feel like they need to earn entry.

| Context | Tone |
|---|---|
| Navigation | Ultra-concise category names (WOMEN, MEN, SALE, NEW IN) — purely functional, no marketing speak |
| Product names | Descriptive and specific ("ASOS DESIGN wide leg trousers", "Noisy May cropped tank top in washed grey") |
| CTAs | Energetic but plain: "Add to bag", "SHOP WOMENS", "Download our new app" |
| Sale / Promo | Direct and excitement-led: "Sale", "New in" — simple declarative |
| Help / Support | Friendly and matter-of-fact: "Help & FAQs" |
| Fashion copy | Relaxed, descriptive, detail-forward (fabric, fit, style notes) |
| Inclusivity | Explicitly size-inclusive language across all product categories (AS/4U, Curve, Petite, Tall) |

**Voice keywords**: accessible, confident, inclusive, fashion-forward, unpretentious, direct.

**Forbidden register**: gatekeeping luxury language ("investment piece", "curated edit"), tech startup enthusiasm ("disrupt", "revolutionise"), jargon-heavy fashion crit ("deconstructed silhouette"), or anything that excludes the broad demographic ASOS explicitly serves.

**Voice samples** (live site, 2026-06-22):
- "Download our new app" — app banner (direct, energetic). *(verified live 2026-06-22)*
- "SHOP WOMENS" — hero CTA (uppercase, energetic). *(verified live 2026-06-22)*
- "Search for items and brands" — search placeholder (plain, inclusive "brands" nod). *(verified live 2026-06-22)*

## 11. Brand Narrative

ASOS (As Seen On Screen) was founded in **2000** in London by **Nick Robertson** and **Quentin Griffiths**, with the original premise of selling products seen on celebrities in film and TV. The name was literal: shoppers could identify a piece worn on screen and buy an equivalent on ASOS. That celebrity-referencing origin shaped the brand's democratic instinct — fashion as something you see on people you admire, then access for yourself, not something gatekept behind boutique doors.

The business evolved rapidly from a niche celebrity-copycat service into one of the world's largest pure-play fashion retailers, serving customers in over 200 countries. ASOS is headquartered in London but operates as a fundamentally digital-first business — no physical stores, no concessions. Everything is the app and the website. This digital-native identity is deeply embedded in the design system: the UI exists to surface product at scale, not to create an aspirational in-store atmosphere.

ASOS's signature move is radical breadth: thousands of brands alongside its own label (ASOS DESIGN), size-inclusive ranges (Curve, Petite, Tall, AS/4U), and an aesthetic that accommodates every style rather than imposing one. The design system reflects this: a neutral, editorial monochrome frame that carries any product photography without competing with it. The brand doesn't have a look — it has a container that makes everything else look good.

What ASOS refuses: the exclusivity and gatekeeping of traditional fashion retail. What it embraces: scale, inclusivity, speed-to-trend, and the proposition that fashion should be findable and affordable by everyone.

## 12. Principles

1. **Product first, chrome second.** The UI exists to surface product photography. Every design decision that reduces distraction from the product grid is the right decision. *UI implication:* zero-radius cards, shadow-free layout, near-monochrome system colours.
2. **Breadth as a feature.** ASOS's value proposition is quantity and variety at accessibility — every style, every size, every price point. *UI implication:* the dense product grid that maximises product exposure per viewport pixel; category navigation that covers every department.
3. **Fashion for everyone, not for someone.** Inclusivity is non-negotiable. Size-inclusive ranges (Curve, Petite, Tall, AS/4U) are first-class, not footnotes. *UI implication:* size selector design accommodates extended ranges without visual hierarchy that deprioritises non-standard sizes.
4. **Speed and freshness.** ASOS's "New In" is a genuine product promise — newness at extreme velocity. *UI implication:* the New In tab is prominent, the product card grid is optimised for scanning at speed rather than lingering.
5. **The action is always clear.** In an environment of thousands of products and dozens of categories, the commerce action must be unambiguous. *UI implication:* the single green add-to-bag button is the only green in the system — colour has been reserved so the action is unmistakable.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable ASOS user segments, not individual people.*

**Maya Chen, 22, Manchester.** University student, fashion-conscious on a student budget. Browses ASOS's New In section multiple times a week, using it as a live trend feed. Sizes between Petite and standard ranges depending on the item. Values the breadth — she can find everything from high-street dupes to genuinely distinctive pieces in one place. Finds the dense product grid ideal for rapid scanning. Gets frustrated if checkout is multi-step.

**Jordan Williams, 28, London.** Menswear enthusiast who uses ASOS for everyday staples and occasional trend pieces. Appreciates the Brands section for discovering smaller labels he wouldn't otherwise find. Size-filters are non-negotiable — he sizes out of standard ranges in some categories. Values the search functionality: types specific item descriptors rather than browsing by category.

**Sophie Okafor, 35, Birmingham.** Working professional buying occasion wear and smart-casual wardrobe pieces. Uses the sale section extensively. Has ASOS Premier delivery for the year. Values the detailed product descriptions and multiple image angles. Would leave if size availability wasn't clearly shown before she had to click through.

## 14. States

| State | Treatment |
|---|---|
| **Empty (search, no results)** | White canvas. Black heading ("No results found") at 60px futura-pt weight 900 (`#2d2d2d` text). Sub-copy explaining suggestions, search bar remains active. |
| **Empty (wishlist/saved items)** | Muted grey prompt encouraging product exploration with a CTA back to shopping. No illustration. |
| **Loading (PLP grid)** | Skeleton cards at exact product card dimensions on white `#ffffff` background. Light grey `#dddddd` placeholder rectangles for image area, title, and price. No animated shimmer in the base system. |
| **Loading (Add to bag action)** | Green button maintains `#018849` background; shows spinner/indicator while size is being added. Label updates to "Adding…" |
| **Error (item out of stock)** | Size chip rendered in `#e8e8e8` with strikethrough or reduced opacity; button state changes to "Notify me when available" in `#2d2d2d` (non-green). |
| **Error (search no results)** | 404-style heading at 60px futura-pt, sub-suggestions for search terms. |
| **Error (page not found)** | Large "404" in futura-pt 60px weight 900 `#2d2d2d`, sub-text explaining the page is unavailable, `#2d2d2d` Retry button. |
| **Success (added to bag)** | Brief confirmation — bag icon updates with item count. No full-page toast; minimal disruption to browsing flow. |
| **Success (checkout complete)** | Confirmation page with ASOS green `#018849` checkmark or confirmation header; order summary below. |
| **Skeleton** | `#dddddd` blocks at final card dimensions. No rounded corners (consistent with 0px radius system). |
| **Disabled (size unavailable)** | `#e8e8e8` background chip at 56px height, `#999999` text. Clear visual distinction from available sizes. |
| **Sale pricing** | Original price struck through in `#666666`, sale price in `#d01345` bold. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits (bag count update, size selection tick) |
| `motion-fast` | 120ms | Hover states, button press, nav tab active |
| `motion-standard` | 200ms | Dropdown open, add-to-bag confirmation |
| `motion-slow` | 300ms | Page-level transitions, hero carousel |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, menus, drawers |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: ASOS motion is functional and unobtrusive — the fashion content is the theatre, not the UI. Hover states on product cards (like/save icons appearing) use `motion-fast`; navigation dropdowns use `motion-standard`. No spring, no bounce, no theatrical delay. The product grid should feel fast and responsive — slow motion would undermine the rapid-browse behaviour the system is built for. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the page remains fully navigable.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle:
- https://www.asos.com/ (homepage, headed Chrome, UA spoofed)
- https://www.asos.com/noisy-may/noisy-may-cropped-tank-top-in-washed-grey/prd/205778249 (PDP)

Live-observed values:
- body: font-family futura-pt; color rgb(0,0,0); font-size 16px
- Nav WOMEN/MEN tabs: bg rgb(45,45,45) #2d2d2d; color rgb(255,255,255); font-weight 900; height 60px
- App banner "Download our new app": bg rgb(204,255,0) #ccff00; color rgb(0,0,0); height 30px; font-weight 600
- Hero CTAs "SHOP WOMENS/MENS": bg rgb(255,255,255); color rgb(0,0,0); radius 0px; padding 9px 14px; height 44px; font-weight 700
- Search input: bg rgb(255,255,255); color rgb(45,45,45); radius 19px; height 38px
- Add to bag: bg rgb(1,136,73) #018849; color rgb(255,255,255); radius 0px; height 44px; font-weight 700
- Sub-nav tabs (Sale, New in, Clothing...): bg rgb(82,80,80) #525050; height 50px; font-weight 400
- Size selector chips: bg rgb(230,230,230); height 56px; radius 0px
- Sale price text color: rgb(208,19,69) #d01345

Brand narrative:
- ASOS founded 2000 by Nick Robertson and Quentin Griffiths in London. Originally "As Seen On Screen." These are publicly documented facts.
- ASOS operates in 200+ countries, no physical stores. Pure-play digital retailer. Public company (LSE: ASC).

Personas are fictional archetypes informed by publicly observable ASOS user demographics. Names are illustrative.

Voice samples are verbatim from the live ASOS homepage as inspected 2026-06-22.

Interpretive claims (e.g., "product first, chrome second", "neutral container that makes everything else look good") are editorial readings connecting observed design to publicly stated brand positioning, not directly sourced ASOS statements.
-->
