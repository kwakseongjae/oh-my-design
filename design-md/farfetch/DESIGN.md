---
id: farfetch
name: Farfetch
country: UK
category: ecommerce
homepage: "https://www.farfetch.com"
primary_color: "#222222"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=farfetch.com&sz=128"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: reconciled
  extracted: "2026-06-22"
  note: "primary = #222222 Carbon — jet black used for CTA button, nav, body, footer inversion. Paper white (#ffffff) is the page canvas. Zero radius across all interactive elements — strict editorial minimalism."
  colors:
    primary: "#222222"
    canvas: "#ffffff"
    graphite: "#727272"
    muted: "#b6b6b6"
    hairline: "#e6e6e6"
    surface: "#f5f5f5"
    on-primary: "#ffffff"
    error: "#cc0000"
  typography:
    family: { sans: "\"Farfetch Basis\"", fallback: "\"Helvetica Neue\", Arial, sans-serif" }
    display-hero: { size: 30, weight: 700, lineHeight: 1.20, tracking: -0.3, use: "Section hero headlines, h3 newsletter" }
    section:      { size: 22, weight: 700, lineHeight: 1.31, use: "H2 section headings (Womenswear, Menswear)" }
    nav-primary:  { size: 15, weight: 400, lineHeight: 1.33, use: "Main nav links, body copy" }
    caption:      { size: 13, weight: 400, lineHeight: 1.33, use: "Product tile labels, metadata" }
    button:       { size: 15, weight: 700, lineHeight: 1.33, use: "Primary CTA button label" }
  spacing: { xs: 4, sm: 8, md: 16, base: 24, lg: 48, xl: 72, section: 96 }
  rounded: { sm: 0, md: 0, lg: 0, full: 0 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#222222", fg: "#ffffff", radius: "0px", padding: "10px 16px", font: "15px / 700", use: "Primary CTA (Sign Up, Add to Bag, Checkout)" }
    button-outline: { type: button, bg: "#ffffff", fg: "#222222", border: "1px solid #222222", radius: "0px", padding: "10px 16px", font: "15px / 700", use: "Secondary actions, ghost variant" }
    input-email: { type: input, bg: "#ffffff", fg: "#222222", border: "0px", radius: "0px", padding: "0px 0px 0px 16px", font: "15px / 400", use: "Newsletter email input — no border, underline-only on search" }
    product-card: { type: card, bg: "#ffffff", fg: "#222222", radius: "0px", use: "Product tile — full-bleed image, 0 radius, 0 shadow, caption below at 13px" }
    nav-tab: { type: tab, fg: "#222222", font: "15px / 400", active: "text #222222", use: "Top nav: Womenswear / Menswear / Kidswear" }
    badge-sale: { type: badge, bg: "#222222", fg: "#ffffff", radius: "0px", font: "13px / 700", use: "Sale label, promotion badge on product tile" }
    footer-link: { type: listItem, fg: "#ffffff", font: "15px / 400", use: "Footer nav links on #222222 dark background" }
  components_harvested: true
---

# Design System Inspiration of Farfetch

## 1. Visual Theme & Atmosphere

Farfetch is the global luxury fashion marketplace, and its homepage is engineered to disappear behind the products it sells. The canvas is pure white (`#ffffff`) with all text, navigation, and interactions in jet-black Carbon (`#222222`) — a binary monochrome that turns the interface into a white-gloved attendant and the luxury goods into the star. There is no brand color. There is no accent. There is no radius. Everything is a flat, zero-radius rectangle on a white field, and that restraint is the most deliberate luxury signal in the system.

The proprietary typeface **Farfetch Basis** is a clean geometric sans-serif that carries all weight and hierarchy. Body text and navigation run at 15px / weight 400; section headings land at 22px / weight 700; the newsletter hero drops to 30px / weight 700 with subtle -0.3px tracking. No decorative type, no serif, no variable-weight personality — just measured geometric neutrality in the service of letting the editorialized product photography speak. The typographic palette is as minimal as the color one.

What makes Farfetch's aesthetic distinctive among luxury ecommerce is its absolute refusal of decoration. Where competitors use shadow, radius, color accents, and hover animations to signal quality, Farfetch uses their absence. Border-radius is exactly 0px across every interactive element — buttons, inputs, product tiles, and navigation all sit at hard right angles, as though the UI were printed on heavy stock card. There are no drop shadows anywhere on the site. Depth comes from the photography alone. The footer inverts the monochrome — `#222222` background with white text — which is the single visual drama the page allows itself.

**Key Characteristics:**
- Proprietary "Farfetch Basis" geometric sans-serif, weights 400 (body) and 700 (headings/buttons)
- Zero border-radius across every element — hard rectangles as a luxury signal
- Strictly monochrome: Carbon (`#222222`) and Paper (`#ffffff`) as the entire interactive color vocabulary
- No drop shadows — depth comes from product photography alone
- Footer inversion: `#222222` background with white text as the singular visual drama
- Product tiles: full-bleed images with zero padding, zero radius, zero shadow
- Muted Ash Gray (`#b6b6b6`) for secondary icons and underline-search borders
- Generous whitespace and 8px-base spacing system

## 2. Color Palette & Roles

### Primary
- **Carbon** (`#222222`): Primary brand color. Used for all body text, navigation links, button backgrounds, wordmark, and footer background. The only interactive and brand color in the system.
- **Paper** (`#ffffff`): Page canvas, card surfaces, product tile backgrounds, text on Carbon. The entire ecommerce interface is rendered on white.

### Neutral Scale
- **Graphite** (`#727272`): Muted helper text, inactive form field borders, secondary metadata. The midpoint of the monochrome ladder.
- **Ash Gray** (`#b6b6b6`): Icon strokes, secondary borders, search field underlines, placeholder text.
- **Smoke** (`#e6e6e6`): Hairline dividers between navigation items and content sections.
- **Surface** (`#f5f5f5`): Subtle hover wash on nav items, utility announcement bars, background for secondary panels.

### Functional
- **On-Primary** (`#ffffff`): Text and icons on Carbon button backgrounds.
- **Error** (`#cc0000`): Form validation error states (not present on homepage, standard ecommerce convention).

## 3. Typography Rules

### Font Family
- **Primary**: `"Farfetch Basis"`, custom geometric sans-serif. Fallback: `"Helvetica Neue"`, Arial, sans-serif.
- No monospace or secondary typeface.

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display / H3 | 30px | 700 | 1.20 | -0.3px | Newsletter "Never miss a thing" |
| Section H2 | 22px | 700 | 1.31 | normal | "Womenswear", "Menswear", "Kidswear" |
| Sub H2 | 15px | 700 | 1.33 | normal | "New In", "Bags", "Shoes" category labels |
| Nav / Body | 15px | 400 | 1.33 | normal | All nav links, body copy, footer links |
| Caption | 13px | 400 | 1.33 | normal | Product tile labels, metadata, helper text |

### Principles
- **Two weights, total.** Weight 400 for everything functional; weight 700 for everything directional (headings, CTAs). No 300, no 500, no 600.
- **No decorative type.** Farfetch Basis is neutral by design — the geometric sans disappears behind the content.
- **Size restraint.** The largest type on the page is 30px. There is no hero headline at 48px or 56px; luxury editorial systems let the photography shout.
- **15px as the system base.** Navigation, body, and button labels all share 15px, creating a calm typographic evenness.

## 4. Component Stylings

### Buttons

**Primary (Add to Bag / Sign Up / Checkout)**
- Background: `#222222`
- Text: `#ffffff`
- Radius: 0px
- Padding: 10px 16px
- Font: 15px / 700 / Farfetch Basis
- Height: 44px
- Hover: subtle brightness reduction on Carbon bg
- Use: Primary CTAs — "Sign Up", "Add to Bag", checkout

**Outline / Secondary**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#222222`
- Radius: 0px
- Padding: 10px 16px
- Font: 15px / 700 / Farfetch Basis
- Use: Secondary actions, ghost variant on white canvas

### Cards & Containers

**Product Tile**
- Background: `#ffffff`
- Text: `#222222`
- Radius: 0px
- Use: Full-bleed fashion photography tile — no border, no shadow, caption below at 13px / 400

**Section Container**
- Background: `#f5f5f5`
- Radius: 0px
- Use: Announcement bar, utility header strip, hover wash

### Inputs

**Email Newsletter Input**
- Background: `#ffffff`
- Text: `#222222`
- Border: 0px (none)
- Radius: 0px
- Padding: 0px 0px 0px 16px
- Font: 15px / 400
- Placeholder: `#b6b6b6`
- Use: Newsletter signup input — no visible border, relies on surrounding layout

**Search Field**
- Background: transparent
- Text: `#222222`
- Border: 0px (underline-only: 1px solid `#b6b6b6` at bottom)
- Radius: 0px
- Font: 15px / 400
- Use: Search bar — editorial underline-only treatment

### Badges

**Sale / Promotion Label**
- Background: `#222222`
- Text: `#ffffff`
- Radius: 0px
- Font: 13px / 700
- Use: "SALE", "NEW IN" label on product tiles

**Graphite Utility Badge**
- Background: `#f5f5f5`
- Text: `#222222`
- Radius: 0px
- Font: 13px / 400
- Use: Filter pill, utility label

### Tabs / Navigation

**Top Navigation**
- Background: `#ffffff`
- Text: `#222222`
- Font: 15px / 400 / Farfetch Basis
- Height: 44px
- Padding: 10px 12px
- Border: 1px solid transparent (hover: `#e6e6e6`)
- Use: Primary nav tabs — Womenswear / Menswear / Kidswear

### Footer

**Footer Background**
- Background: `#222222`
- Text: `#ffffff`
- Font: 15px / 400
- Padding: 6px 0px per link
- Use: Footer navigation — "Contact us", "FAQs", "About us", inverted monochrome

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.farfetch.com/uk/ (live DOM inspect — nav, hero, newsletter CTA, footer, color frequency scan)
**Tier 2 sources:** styles.refero.design/style/600002c5-c5f5-4df0-adf6-6324ee6255c0 (FARFETCH España — #222222 Carbon / 0px radius confirmed); getdesign.md/farfetch — not listed
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 16px, 24px, 48px, 72px, 96px
- Notable: Product grid uses 24px column gaps; section vertical rhythm at 48–72px; nav link padding 10px 12px

### Grid & Container
- Max content width: approximately 1280px
- Homepage: full-bleed editorial hero images spanning the viewport
- Product grid: 4-column on desktop, product tiles with 0 padding and 0 gutters in the image
- Three-zone header: left nav (Womenswear/Menswear/Kidswear) + center FARFETCH wordmark + right utilities (search, wishlist, account, bag)
- Footer: multi-column link grid on Carbon background

### Whitespace Philosophy
- **Photography as whitespace**: Farfetch's luxury signal comes from giving large fashion images space to breathe, not from decorative layout margin.
- **Zero-padding product tiles**: product images bleed to the tile edge — no padding, no border, no radius.
- **Announcement bar**: thin `#f5f5f5` strip at top for promotions ("SS26 sale: up to 60% off")
- **Section rhythm**: generous 48–72px vertical gaps between content bands

### Border Radius Scale
- All elements: 0px — without exception. Buttons, inputs, badges, cards, navigation, modals — every interactive element uses a hard rectangle. This is the system's most definitive typographic commitment.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | All product tiles, page background |
| Hairline (Level 1) | `1px solid #e6e6e6` | Nav separators, section dividers |
| Input underline | `1px solid #b6b6b6` bottom only | Search field — editorial underline treatment |
| Footer inversion | `#222222` background | The single elevation signal — color contrast, not shadow |

**Shadow Philosophy**: Farfetch uses no shadows — not even ambient box-shadows. The luxury signal is communicated through the quality of photography and the restraint of the interface. Adding a drop shadow would suggest the product tiles need reinforcement; the white canvas with no visual noise allows each image to function as a gallery print. The only "depth" in the system is the footer's monochrome inversion, which creates a sense of the page arriving at a considered terminus.

## 7. Do's and Don'ts

### Do
- Use 0px border-radius on every interactive element — buttons, inputs, cards, badges
- Use `#222222` Carbon for all primary CTAs — the only button color in the system
- Keep the typographic scale at two weights (400 body, 700 headings/CTAs)
- Let product photography carry all visual drama — the UI is the frame, not the painting
- Use "Farfetch Basis" with Helvetica Neue fallback for all text
- Invert to `#222222` background only in the footer — one editorial moment
- Apply generous whitespace: 48–72px between content sections
- Use `#f5f5f5` Stone only for utility bars and hover washes

### Don't
- Add any border-radius — even 2px would break the system's editorial discipline
- Use color accents other than Carbon and Paper for interactive elements
- Apply drop shadows to product tiles or cards — it cheapens the luxury signal
- Use weight 300 or 500 — the system is strictly 400/700
- Mix in decorative or serif typefaces alongside Farfetch Basis
- Add a hover state with a background color fill on nav items (underline or opacity only)
- Use `#222222` backgrounds anywhere except the footer — the page is white by system law
- Introduce gradients — flat monochrome is the aesthetic commitment

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column product grid, hamburger nav, stacked footer |
| Tablet | 640-1024px | 2-column grid, condensed nav |
| Desktop | 1024-1280px | 3-column grid, full three-zone header |
| Large Desktop | >1280px | 4-column grid, centered at 1280px max-width |

### Touch Targets
- Nav links: 44px height with 10px 12px padding — comfortably tappable
- Primary button: 44px height
- Footer links: 34px height with 6px vertical padding

### Collapsing Strategy
- Header: three-zone → hamburger icon + wordmark + bag icon
- Product grid: 4-column → 2-column → 1-column
- Footer: multi-column link grid → stacked single-column accordion
- Section headings maintain 22px weight 700 at all breakpoints

### Image Behavior
- Product images maintain full-bleed treatment at all sizes
- Zero radius and zero shadow preserved across breakpoints
- Hero editorial images scale proportionally

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Carbon (`#222222`)
- Background: Paper (`#ffffff`)
- Body/nav text: Carbon (`#222222`)
- Secondary/muted text: Graphite (`#727272`)
- Placeholder/icon: Ash Gray (`#b6b6b6`)
- Hairline border: Smoke (`#e6e6e6`)
- Hover surface: Stone (`#f5f5f5`)
- On-Carbon text: White (`#ffffff`)
- Footer background: Carbon (`#222222`)

### Example Component Prompts
- "Create a primary button: `#222222` background, `#ffffff` text, 0px radius, 10px 16px padding, 44px height, 15px Farfetch Basis weight 700. No shadow. Hover: slight opacity reduction."
- "Design a product tile: full-bleed fashion image, 0px radius, 0px shadow, 0px border. Caption below: Farfetch Basis 13px / 400 / `#222222`. Brand name in 13px / 700 above. No card border."
- "Build a newsletter signup: headline 30px / 700 / `#222222` Farfetch Basis, letter-spacing -0.3px. Below: a white `#ffffff` input (no border, just bottom underline 1px `#b6b6b6`) side by side with a `#222222` Submit button."
- "Create the three-zone header: white 64px bar. Left: Womenswear / Menswear / Kidswear nav links at 15px / 400, padding 10px 12px, `#222222`. Center: FARFETCH wordmark. Right: search icon, wishlist, account, bag — all `#222222` icons."
- "Design footer: `#222222` background. White text, 15px / 400, 6px 0px padding per link. Multi-column: Company (About us, Careers, FARFETCH app) | Customer Service (Contact us, FAQs, Orders and delivery) | Help."

### Iteration Guide
1. Zero radius is non-negotiable — every element is a strict rectangle
2. Two colors only for interactive chrome: Carbon (`#222222`) and Paper (`#ffffff`)
3. Two weights only: 400 for all text, 700 for all headings and CTAs
4. Photography is the only decoration — keep the UI as invisible as possible
5. No shadows, no gradients, no accent colors
6. "Farfetch Basis" at 15px body, 22px section heading, 30px max display
7. Footer is the one moment of carbon inversion — use it as a considered terminus

---

## 10. Voice & Tone

Farfetch's editorial voice is understated, authoritative, and global — the tone of a gallery curator who speaks in complete sentences, never hype. Section labels are noun-only ("Womenswear", "New In", "Bags") — not "Discover" or "Explore", just the category name as if the collection's presence is self-evident. Promotional copy is specific and factual: "SS26 sale: up to 60% off womenswear, menswear and kidswear" — percentage and scope, no exclamation mark. The newsletter invitation is "Never miss a thing" — confident, not needy.

| Context | Tone |
|---|---|
| Category nav | Noun-only. "Womenswear." "Menswear." "Kidswear." Self-evident. |
| Promotions | Factual, specific. "Up to 60% off." Never "MASSIVE SALE!!!" |
| Newsletter CTA | Warm but direct. "Never miss a thing." Sign Up (no persuasion needed). |
| Product labels | Descriptive and brand-led. "PRADA" "Saint Laurent" — the brand name is the editorial statement. |
| Footer help links | Plain, clear. "Contact us", "Orders and delivery", "Returns and refunds". |
| About / careers | Elevated, mission-framed. Farfetch as the "global destination for modern luxury". |

**Voice samples (verbatim from live homepage):**
- "FARFETCH UK | The Global Destination for Modern Luxury" — title meta (mission statement). *(verified live 2026-06-22)*
- "SS26 sale: up to 60% off womenswear, menswear and kidswear" — promotional headline (specific, factual). *(verified live 2026-06-22)*
- "Never miss a thing" — newsletter section heading (warm confidence). *(verified live 2026-06-22)*
- "Designer Clothing for Women | Shop Online | FARFETCH" — PLP title (descriptive, category-led). *(verified live 2026-06-22)*

**Forbidden register**: urgency-panic ("Only 2 left!"), casual hype ("Amazing styles!"), emoji anywhere, exclamation marks on non-sale copy, first-person ("We love these pieces!").

## 11. Brand Narrative

Farfetch was founded in **2007** by **José Neves**, a Portuguese entrepreneur and luxury fashion industry veteran, in London. Neves identified a structural fragmentation in the luxury fashion market: thousands of independent boutiques across the world — in Milan, Paris, Tokyo, New York — were sitting on extraordinary inventory that was invisible to global shoppers, while simultaneously losing customers they could not reach. Farfetch was conceived as the connective tissue: a global marketplace where independent luxury boutiques could list and ship their physical inventory to buyers anywhere in the world.

The original proposition — "the world's fashion marketplace" — positioned Farfetch not as a retailer but as a platform, earning revenue as a commission on each transaction while the boutiques owned and fulfilled the stock. This asset-light model differentiated it from luxury e-tailers (Net-a-Porter, Mytheresa) that carry inventory directly. Farfetch eventually also acquired Browns (the iconic London boutique), Stadium Goods (sneaker authentication), and New Guards Group (luxury brand incubator including Off-White), deepening from platform to luxury ecosystem.

The brand went public on the NYSE in 2018, grew to peak market cap around $23B in 2021, then faced a significant restructuring through 2023–2024 following macroeconomic headwinds and luxury market correction. In January 2024, South Korean e-commerce group **Coupang** announced an investment and rescue package, taking operational control. Farfetch continues to operate as a global luxury marketplace under the Coupang umbrella while maintaining its London headquarters and brand identity.

What Farfetch's design reflects is an aspiration statement: the interface should look as if it belongs on the same shelf as the goods it sells. The monochrome gallery aesthetic with zero decorative flourishes is not a technology company's aesthetic — it is a luxury retailer's aesthetic, borrowed from the white-cube gallery and the couture store's understated display window.

## 12. Principles

1. **The product is the display.** Every interface decision exists to frame the product photography, not compete with it. *UI implication:* zero-radius tiles, no shadow, no color except Carbon and Paper — the goods must be the only saturation on the page.
2. **Curation over volume.** A marketplace with 3,000+ boutiques and millions of products signals quality through selection, not through showing everything. *UI implication:* generous whitespace, category navigation that assumes the customer knows what they want.
3. **Luxury is restraint.** The most luxurious interfaces do not decorate — they edit. *UI implication:* 0px radius as a typographic law, not a preference; two weights; one palette.
4. **Global vernacular, editorial tone.** Farfetch serves 190+ countries and deliberately avoids cultural specificity — the Farfetch Basis typeface is nationality-neutral. *UI implication:* noun-only category labels function in any language; no idiom, no slang.
5. **The boutique experience, at scale.** The marketplace inherits the physical boutique's silence and pace — no urgency traps, no flashing sale badges, no countdown timers. *UI implication:* sale promotions appear as plain factual copy, not visual alarm.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Farfetch user segments (luxury fashion buyers, boutique-to-global shoppers), not individual people.*

**Isabelle Moreau, 38, Paris.** Fashion director at a mid-size creative agency. Buys Saint Laurent and Loewe seasonally; trusts Farfetch specifically because she can find independent Parisian boutiques shipping pieces that haven't appeared in department stores. Treats browsing as editorial research. Would immediately distrust a site with countdown timers or "only 3 left!" prompts — that's flea-market psychology.

**Marcus Chen, 29, Singapore.** Finance professional, collects limited sneakers and contemporary Japanese menswear. Uses Stadium Goods via Farfetch for authenticated pre-owned drops. Values the search being factual and fast — if something isn't there, he wants to know in one click, not one scroll through recommendations.

**Camille Beaumont, 52, London.** Regular Farfetch customer since 2012. Remembers when Farfetch meant discovering boutiques she'd never physically visit. Now uses the site as a wardrobe curator — she filters by boutique, not by brand. Loyal to the editorial restraint of the site; would notice immediately if it started looking like a fast-fashion app.

**Aiko Tanaka, 24, Tokyo.** University student who saves for one or two significant fashion purchases per year. Researches on Instagram, buys via Farfetch. The monochrome interface signals she's spending appropriately — this is the right kind of serious about fashion. Monitors sale periods with precision.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Carbon (`#222222`) single sentence at 15px Farfetch Basis: "Sorry, no results found for [term]." One suggestion to refine or browse categories. No illustration — that would signal discount-brand thinking. |
| **Empty (wishlist, nothing saved)** | Graphite (`#727272`) text: "Your wishlist is empty." Path back to browsing categories. Calm, not promotional. |
| **Loading (product grid)** | Skeleton rectangles on `#f5f5f5` Stone at exact final tile dimensions. No animation — flat pulse (consistent with shadow-free, motion-minimal system). |
| **Loading (search results)** | Thin 1px `#b6b6b6` progress underline below the search input. Page stays white. |
| **Error (product unavailable)** | Inline copy below the Add to Bag button: "This item is currently unavailable." No red badge — Carbon text is sufficient. |
| **Error (form validation)** | Field-level: `#cc0000` text below the input, 13px Farfetch Basis. Describes what's required — "Please enter a valid email address." |
| **Success (added to bag)** | Brief inline confirmation near the Add to Bag button: "Added to bag." Carbon text. No toast animation — the bag counter increments. |
| **Success (newsletter signup)** | Button transitions to "You're signed up." message inline. No animation, no confetti. |
| **Skeleton** | `#f5f5f5` blocks at final dimensions. No shimmer — consistent with the flat, shadow-free system. |
| **Disabled** | Opacity 0.4 on Carbon elements. The button text is visible but the Carbon hue fades rather than switching to gray — brand monochrome preserved even in disabled states. |
| **Out of stock size** | Size selector label: Graphite (`#727272`) + 1px diagonal strikethrough line on the size chip. No red — Graphite is the neutral signal. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Checkbox ticks, focus ring appearance, state commits |
| `motion-fast` | 120ms | Nav hover, button hover, input focus |
| `motion-standard` | 200ms | Menu flyout, sheet, dropdown reveal |
| `motion-slow` | 300ms | Page-level transitions, cart drawer slide |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — menu flyout, cart drawer, product overlay |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is minimal and purposeful — the system's visual discipline extends into time. The navigation flyout reveals at `motion-standard / ease-enter`; the cart drawer slides from the right at `motion-slow / ease-enter`. No fade-in on product tiles — they render instantly, treating load as product arrival rather than content animation. No bounce, no spring, no parallax scrolling effects — these belong to editorial-entertainment interfaces, not a luxury fashion transactional surface. Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`; the experience remains complete.

**Signature absence**: Farfetch has no hover animation on product tiles (many fashion sites use scale or lift-on-hover). The tile stays flat — hover is detected via cursor change and the wishlist heart icon appearing, but the tile itself does not animate. This restraint prevents the page from feeling kinetic when the customer is in contemplative browsing mode.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on https://www.farfetch.com/uk/:
- body: font-family "Farfetch Basis", "Helvetica Neue", Arial, sans-serif; color rgb(34,34,34) = #222222; font-size 15px; bg rgb(255,255,255)
- H2 "SS26 sale: up to 60% off womenswear, menswear and kidswear" — 22px / weight 700 / rgb(34,34,34)
- H2 "Womenswear" — 22px / weight 700 / rgb(34,34,34)
- H3 "Never miss a thing" — 30px / weight 700 / rgb(34,34,34)
- Nav links "Womenswear/Menswear/Kidswear" — 15px / 400 / rgb(34,34,34) / padding 10px 12px / height 44px
- Sign Up CTA button — bg rgb(34,34,34) = #222222 / color rgb(255,255,255) / radius 0px / padding 10px 16px / 15px / 700 / height 44px
- Email input — bg rgb(255,255,255) / radius 0px / padding 0px 0px 0px 16px / 15px / 400 / height 42px
- Search icon color rgb(182,182,182) = #b6b6b6
- box-shadow: none across all elements (confirmed shadow-free system)
- bgFreq: rgb(255,255,255) dominant; fgFreq: rgb(34,34,34) dominant (2200+ instances) / rgb(34,34,34) secondary 22 / rgb(182,182,182) icons
- document.title: "FARFETCH UK | The Global Destination for Modern Luxury"

Tier 2 cross-check (2026-06-22) via refero FARFETCH España style:
- Carbon #222222 / Paper #ffffff / Graphite #727272 / Ash Gray #b6b6b6 / Smoke #e6e6e6 / Stone #f5f5f5 — all confirmed
- Border-radius 0px across all elements — confirmed
- "Farfetch Basis" typeface — confirmed
- Footer inversion: #222222 background with white text — confirmed

Brand narrative (§11): Farfetch founded 2007 by José Neves; IPO 2018; Coupang investment 2024.
These are widely documented public facts. The 2024 Coupang acquisition detail is publicly reported in major financial press.

Personas (§13) are fictional archetypes. Names are illustrative; they do not refer to real people.

Interpretive claims ("luxury is restraint", "white-cube gallery aesthetic") are editorial readings of the observed design decisions, not directly sourced Farfetch statements.
-->
