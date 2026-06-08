---
id: dji
name: DJI
country: CN
category: consumer-hardware
homepage: "https://www.dji.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=dji.com&sz=128"
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  note: "Non-black/white hexes are best-fit approximations per brand-guide (Titan, sky-blue named but hex not public)"
  colors:
    black: "#000000"
    titan: "#1c1c1e"
    canvas: "#ffffff"
    silver: "#86868b"
    accent: "#0a84ff"
    surface: "#f5f5f7"
    hairline: "#d2d2d7"
    dark-panel: "#161617"
    success: "#34c759"
    error: "#ff3b30"
    warning: "#ff9f0a"
  typography:
    family: { sans: "DJI", mono: "DJI" }
    hero:      { size: 64, weight: 700, use: "Product reveal headlines on black, tight tracking" }
    h2:        { size: 42, weight: 700, use: "Capability section heads" }
    h3:        { size: 26, weight: 700, use: "Feature module titles" }
    subhead:   { size: 19, weight: 500, use: "Lead-in copy under headlines" }
    body:      { size: 16, weight: 400, use: "Descriptions, paragraph copy" }
    spec-label: { size: 14, weight: 500, use: "Spec-table left column, nav" }
    caption:   { size: 12, weight: 400, use: "Footnotes, disclaimers, legal" }
  spacing: { sm: 12, base: 24, lg: 28, xl: 32, section: 120 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    hover: "0 4px 16px rgba(0,0,0,0.08)"
    floating: "0 8px 32px rgba(0,0,0,0.16)"
  components:
    button-primary: { type: button, bg: "#000000", fg: "#ffffff", radius: 4, padding: "12px 28px", font: "15px/500", use: "Primary purchase CTA (inverts on black pages)" }
    button-secondary: { type: button, bg: "transparent", fg: "#000000", radius: 4, padding: "12px 28px", font: "15px/500", use: "Ghost button beside primary CTA" }
    button-link: { type: button, bg: "transparent", fg: "#0a84ff", font: "15px/400", use: "Inline links, learn-more affordances" }
    input: { type: input, bg: "#ffffff", fg: "#1c1c1e", radius: 4, padding: "12px 14px", font: "15px/400", use: "Account, checkout, search fields" }
    product-tile: { type: card, bg: "#ffffff", fg: "#1c1c1e", radius: 8, padding: "24px", use: "Product grid tile" }
    spec-module: { type: card, bg: "#f5f5f7", radius: 12, padding: "32px", use: "Highlighted spec/feature block" }
    badge: { type: badge, bg: "transparent", fg: "#0a84ff", radius: 4, padding: "4px 8px", font: "12px/500", use: "New, Pre-order, Coming soon flags" }
  components_harvested: true
---

# Design System Inspiration of DJI

## 1. Visual Theme & Atmosphere

DJI (大疆创新) is the company that turned the consumer drone into a category, and its digital design carries the same conviction its hardware does — that the most advanced engineering deserves the quietest possible presentation. The dji.com surface is built on a near-total commitment to **black, white, and silver**: hero sections are full-bleed product photography or cinematic flight footage on pure black (`#000000`), product detail pages sit on clean white (`#ffffff`), and the only chromatic intrusion is a restrained **sky blue accent** reserved for links and a handful of interactive moments. The result reads as industrial-premium — closer to a high-end camera brand or an automotive flagship configurator than to a typical Chinese consumer-tech site. There are no gradients-for-decoration, no rounded playful shapes, no mascot. The product is the only ornament.

This restraint is codified. DJI maintains a 500-page global Brand & Product Communication Design Style Guide, and the foundational pieces are explicitly named: a primary color called **Titan** (the deep near-black/charcoal that anchors the palette), secondary white/black/silver, a single sky-blue accent, a custom DJI typeface, and a proprietary grid called the **X-Factor** — a layout module derived from the height of the lowercase "i" in the DJI wordmark. Every margin, every column gutter, every clearspace around the logo is expressed in multiples of that single unit. This is the same logic Massimo Vignelli or the Braun/Dieter Rams school used: one derived unit, applied everywhere, produces a coherence that feels inevitable rather than designed.

Typography is functional sans-serif throughout. The wordmark and display headings use DJI's custom geometric face (DJI-Demi); running UI and body copy fall back to a clean neutral sans (system Helvetica/Arial-class stack with CJK fallbacks like PingFang SC and Source Han Sans / 思源黑体 for Simplified Chinese). Headlines tend to be tight, confident, and short — product names set large, capability statements set as terse evocative phrases ("Just Fly", "See It All", "未来无所不能" / *the future of possible*). DJI never explains where a glance will do.

**Key Characteristics:**
- Monochrome-first palette: black (`#000000`) chrome, white (`#ffffff`) content, silver/gray neutrals, **Titan** charcoal as the named primary
- A single accent — **sky blue** — used sparingly for links and key interactive states, never decoratively
- **X-Factor grid**: every spacing and clearspace value is a multiple of the lowercase-"i" height in the DJI logo
- Full-bleed product photography and flight footage as the hero language; the product is the only ornament
- Custom DJI display typeface (DJI-Demi) for wordmark/headlines; neutral sans + Source Han Sans / PingFang SC for body and Simplified-Chinese running text
- Tight, terse, capability-led headlines — short evocative phrases over feature lists
- Sharp-to-modest corner radii; nothing playfully rounded; the aesthetic is precision-instrument, not app-toy
- Generous negative space; one message per fold; cinematic black backgrounds for product reveals
- No gradients-as-decoration, no mascot, no illustration system — engineering credibility carried by photography and restraint

## 2. Color Palette & Roles

DJI does not publicly expose a CSS token layer the way a forum or a fintech does; the values below combine the publicly documented brand-guide palette (Titan + white/black/silver + sky-blue accent) with the observable live-site usage. Hex values for Titan and the sky-blue accent are stated by the brand guide by name but not published openly, so the specific hexes below are **best-fit approximations** of the observed values and are flagged accordingly.

### Brand
- **Black / Chrome** (`#000000`): The dominant brand surface. Used for the global header/footer, hero backgrounds, cinematic product reveals. This is the brand's emotional ground.
- **Titan** (≈`#1c1c1e`, approximate): The named primary — a deep charcoal/near-black used for primary text on white, dark UI panels, and product-spec tables. Slightly warmer/softer than pure `#000000`. (Named in the brand guide; exact hex not public.)
- **Pure White** (`#ffffff`): Default content background on product and store pages, primary text on black.
- **Silver / Mid Gray** (≈`#86868b`–`#b0b0b5`, approximate): Secondary text, captions, spec labels, disabled states. The "instrument readout" gray.
- **Sky Blue Accent** (≈`#0a84ff`, approximate): The single accent. Links, selected swatches, key interactive affordances. Used as a finite signal — never as a fill for large areas. (Named "sky blue" in the brand guide; exact hex not public.)

### Neutrals (Surface Ladder)
- **Light Gray Surface** (≈`#f5f5f7`): Section dividers, alternating content bands, card backgrounds on white pages.
- **Border / Hairline** (≈`#d2d2d7`): Thin dividers, spec-table rules, input borders. DJI favors 1px hairlines over heavy borders.
- **Dark Panel** (≈`#161617`): Cards and modules on black backgrounds — a hair lighter than the `#000000` ground for subtle separation.

### State
- **Success** (≈`#34c759`, approximate): Order confirmation, in-stock indicators.
- **Error / Sold-out** (≈`#ff3b30`, approximate): Form errors, out-of-stock, destructive confirmations.
- **Warning** (≈`#ff9f0a`, approximate): Low-stock, shipping caveats.

> Role note: DJI's palette is deliberately almost colorless. Color is information, not mood. The mood is supplied by the photography; the chrome stays neutral so the product photography never competes with the interface.

## 3. Typography Rules

### Font Stack
```
"DJI", "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Source Han Sans SC", "思源黑体", "Microsoft YaHei", sans-serif
```

The custom DJI face (DJI-Demi and family) carries the wordmark and large display headings. Running UI and body fall to a neutral Helvetica/Arial-class sans with first-class Simplified-Chinese fallbacks (`PingFang SC` on Apple platforms, `Source Han Sans SC` / `思源黑体` cross-platform, `Microsoft YaHei` on Windows).

### Weights
- **DJI-Demi / Bold (700-class)**: Display headlines, product names, capability statements. The display tier does the shouting.
- **Medium (500)**: Sub-heads, nav, button labels, spec-row labels.
- **Regular (400)**: Body copy, descriptions, captions.

DJI almost never uses light/thin weights for UI text — thin weights read as fragile, which contradicts a brand built on ruggedness and precision.

### Type Scale (observed, marketing + store surfaces)
| Role | Size | Weight | Notes |
|---|---|---|---|
| Hero display | `56–80px` | 700 | Product reveal headlines on black; tight tracking |
| H2 section | `36–48px` | 700 | Capability section heads |
| H3 module | `24–28px` | 500–700 | Feature module titles |
| Sub-head | `18–20px` | 500 | Lead-in copy under headlines |
| Body | `15–16px` | 400 | Descriptions, paragraph copy |
| Spec label | `14px` | 500 | Spec-table left column, nav |
| Caption / legal | `12px` | 400 | Footnotes, disclaimers, legal |

### Conventions
- **Tracking tightens as size grows** — display headlines are set tight; body stays neutral.
- **Headlines are short.** A DJI headline is a phrase, not a sentence. Detail lives in the spec table below.
- **Numerals matter.** DJI sells on specs (flight time, transmission range, sensor size); spec figures are set in medium weight, often with the unit in lighter/smaller type beside the number.
- **CJK and Latin coexist at the same optical weight** — Source Han Sans / PingFang SC are chosen because they sit visually alongside the Latin face without one looking heavier.

## 4. Component Stylings

### Buttons

**Primary CTA (Buy / 立即购买)**
- Background: `#000000` (on white pages) or `#ffffff` (on black pages — inverts)
- Text: `#ffffff` (on black) / `#000000` (on white)
- Border: none
- Radius: 4px
- Padding: 12px 28px
- Font: 15px / 500
- Use: Primary purchase / configure CTA. High-contrast, monochrome, no fill color.

**Secondary CTA (Learn More / 了解更多)**
- Background: transparent
- Text: `#000000` (light pages) / `#ffffff` (dark pages)
- Border: 1px solid current color
- Radius: 4px
- Padding: 12px 28px
- Font: 15px / 500
- Use: Ghost button beside the primary CTA.

**Text / Link**
- Background: transparent
- Text: sky-blue accent (≈`#0a84ff`)
- Border: none
- Font: 15px / 400
- Use: Inline links, "learn more" affordances, spec-detail expanders. The only place the blue accent reliably appears.

### Inputs

**Default**
- Background: `#ffffff`
- Text: Titan (≈`#1c1c1e`)
- Border: 1px solid hairline (≈`#d2d2d7`)
- Radius: 4px
- Padding: 12px 14px
- Font: 15px / 400
- Focus: border transitions to sky-blue accent
- Use: Account, checkout, search fields.

### Cards

**Product Tile (store grid)**
- Background: `#ffffff` (or dark panel ≈`#161617` on black sections)
- Text: Titan
- Border: none (separation by whitespace) or 1px hairline
- Radius: 8px
- Padding: 24px
- Shadow: none by default; subtle lift on hover
- Use: Product grid tile — centered product shot, name (H3), one-line capability, price, CTA.

**Spec Module**
- Background: `#f5f5f7` (light) / `#161617` (dark)
- Radius: 12px
- Padding: 32px
- Use: Highlighted spec/feature block within a long product page.

### Spec Table

**Row**
- Background: transparent
- Label: silver/mid-gray (≈`#86868b`), 14px / 500, left column
- Value: Titan, 14–16px / 400, right column
- Divider: 1px hairline (≈`#d2d2d7`) between rows
- Use: Technical specification listings — the heart of every DJI product page.

### Navigation

- Global header: black (`#000000`) bar, white wordmark left, product categories center, account/cart/search right
- Sticky on scroll; mega-menu drops on category hover
- Active/hover nav item: subtle underline or opacity shift; no color fill
- Footer: black, multi-column link grid, region/language switcher, fine legal type in silver

### Badges

**Status Pill (New / Pre-order)**
- Background: transparent or hairline outline
- Text: sky-blue accent or Titan
- Radius: 4px
- Padding: 4px 8px
- Font: 12px / 500
- Use: "New", "Pre-order", "Coming soon" product flags. Understated — no loud red "SALE" energy.

## 5. Layout Principles

### The X-Factor Grid
DJI's signature layout primitive. The unit is the height of the lowercase "i" in the DJI logo; all margins, gutters, and logo clearspace are integer multiples of that unit. In practice this produces a tight, consistent rhythm across every surface — the brand reads as "engineered" because the spacing literally derives from the logo's own geometry.

### Spacing
| Use | Value |
|---|---|
| Button padding | `12px 28px` |
| Card padding | `24px` |
| Section vertical | `80–120px` (full-fold product reveals) |
| Content max-width | `~1440px` centered |
| Spec-table row | hairline-divided, generous vertical air |

### Grid
- Product pages: alternating full-bleed photography folds and centered max-width content blocks
- Store: responsive card grid (typically 3–4 across desktop)
- One message per fold — DJI never crowds a viewport with competing claims

### Density
DJI is **low-density, high-impact** on marketing folds and **high-density, instrument-precise** on spec tables. The contrast is intentional: the photography breathes, the numbers pack tight. This mirrors the product itself — sleek exterior, dense capability.

## 6. Depth & Elevation

DJI's chrome is **predominantly flat**. Depth comes from photography and from the black/white surface contrast, not from drop shadows. Where elevation appears it is whisper-light.

| Level | Value | Use |
|---|---|---|
| Flat | none | Default for buttons, spec modules, content blocks |
| Hover lift | `0 4px 16px rgba(0,0,0,0.08)` | Product tile on hover (light pages) |
| Floating | `0 8px 32px rgba(0,0,0,0.16)` | Dropdown mega-menu, modal, cart drawer |

### Z-Index
- Sticky black header above content
- Mega-menu / cart drawer above page
- Modal (region selector, media lightbox) above all chrome
- Cinematic media lightboxes use a full black backdrop, not a translucent scrim — the product video takes the whole screen

### Animation
- Scroll-triggered fade/translate reveals on product folds
- Smooth, slow easing — nothing bouncy; precision, not playfulness
- Product 360° / parallax rotation on flagship reveals

## 7. Do's and Don'ts

- **DO** keep the palette monochrome — black, white, silver, Titan. Color is information, not decoration.
- **DON'T** introduce decorative brand colors or gradients. The photography supplies the color.
- **DO** reserve the sky-blue accent for links and key interactive states only. It is a finite signal.
- **DON'T** fill large surfaces with the accent blue, or use it for warnings/success — that's the neutral state palette's job.
- **DO** let product photography and flight footage carry the page on full-bleed black folds.
- **DON'T** crowd a fold with multiple competing CTAs or feature claims. One message per viewport.
- **DO** derive spacing from a single unit (the X-Factor logic) — multiples of one base value across margins, gutters, clearspace.
- **DON'T** use playful/large corner radii. DJI corners are sharp-to-modest (4–12px); the brand is a precision instrument.
- **DO** set headlines short and confident; put the detail in the spec table.
- **DON'T** write paragraph headlines or feature-bullet hero copy. A DJI headline is a phrase.
- **DO** include Source Han Sans / PingFang SC in every font stack so Simplified-Chinese renders at the same optical weight as Latin.
- **DON'T** use thin/light weights for UI — they read as fragile against a ruggedness brand.

## 8. Responsive Behavior

| Width | Behavior |
|---|---|
| Desktop `>1280px` | Centered ~1440px max-width, mega-menu nav, full-bleed hero folds, 3–4-col store grid |
| Laptop `1024–1280px` | Grid tightens to 3-col, hero headlines step down (~56px) |
| Tablet `768–1024px` | 2-col store grid, mega-menu collapses, hero ~40px |
| Mobile `<768px` | Single column, hamburger nav, full-width product folds, sticky bottom Buy bar, hero ~28–32px |

### Touch & Mobile
- Sticky bottom purchase bar on product pages (price + Buy) on mobile
- Spec tables become stacked label/value pairs
- Photography art-directed with mobile crops; flight footage autoplays muted
- Min 44px tap targets

### Media
- Hero video: full-bleed, autoplay muted, lazy-loaded, mobile-specific crops
- Product imagery: high-res, `object-fit: cover` in tiles, lightbox on click
- 360° product spins on flagship pages degrade to a static hero on low-power devices

## 9. Agent Prompt Guide

### Quick Color Reference
- Chrome / hero bg: `#000000`
- Primary text / named primary: Titan ≈`#1c1c1e`
- Content bg: `#ffffff`
- Secondary text / spec labels: silver ≈`#86868b`
- Accent (links, focus): sky blue ≈`#0a84ff`
- Surface band: ≈`#f5f5f7`; hairline: ≈`#d2d2d7`; dark panel: ≈`#161617`

### Example Component Prompts
- "Create a DJI product hero: full-bleed black (`#000000`) section, centered product photo, headline in custom-display weight 700 white at 64px (one short phrase like 'See It All'), one-line subhead 18px silver, two buttons below — primary white-fill black-text 4px radius, secondary ghost white-outline. No accent color except an optional 'Learn more' link in sky blue."
- "Build a DJI spec table: two-column rows, left label silver `#86868b` 14px weight 500, right value Titan 14px weight 400, 1px hairline `#d2d2d7` divider between rows, generous vertical padding. Spec figures set with the number larger than its unit."
- "Design a DJI store tile: white bg, 8px radius, no border, centered product shot, product name 24px weight 700 Titan, one-line capability 15px silver, price, primary CTA. On hover, lift with `0 4px 16px rgba(0,0,0,0.08)`."
- "Create a DJI primary CTA: monochrome only. On white pages: black bg, white text. On black pages: white bg, black text. 4px radius, 12px/28px padding, 15px weight 500. No color fill, no shadow."

### Iteration Guide
1. **Monochrome by default.** Black / white / silver / Titan. If you reach for a brand color, stop — use photography instead.
2. **Sky blue is the only accent, and only for links/focus.** Never large fills, never status.
3. **Headlines are phrases.** Short, confident, capability-led. Detail belongs in the spec table.
4. **Spacing from one unit.** Pick a base (the X-Factor analog) and express every margin/gutter/clearspace as a multiple.
5. **4–12px radii, never playful.** The brand is a precision instrument.
6. **Custom-display weight 700 for headlines, neutral sans + Source Han Sans for body.** Never thin weights.
7. **One message per fold.** Let the photography breathe; pack the specs.
8. **Flat chrome, photographic depth.** Shadows only for genuinely floating UI (menus, drawers, modals).

---

## 10. Voice & Tone

DJI's voice is the voice of an engineer who has already done the impossible and feels no need to oversell it. It is **confident, terse, and capability-led**. Marketing copy reaches for the aspirational in three or four words ("See It All", "Just Fly", "Possibility in motion") and then immediately backs it with hard numbers — flight time in minutes, transmission range in kilometers, sensor size in inches. The brand never gushes. It states what the machine does and trusts the spec sheet to do the persuading. In Simplified Chinese the register is clean, modern, slightly literary in the taglines (未来无所不能 — *the future of possible*) but resolutely factual in product copy. English and Chinese are treated as peers: DJI is a global brand born in Shenzhen, and neither language reads as a translation of the other.

| Context | Tone |
|---|---|
| Hero headlines | Three-to-five-word aspirational phrase. `See It All`. `未来无所不能`. No sentence, no hedge. |
| Product names | The model name, set large and plain — `Mavic 4 Pro`, `Air 3S`, `Osmo Pocket`. The name is the headline. |
| Capability copy | Plain declarative + a number. "Up to 51 minutes of flight time." Never "amazing", "revolutionary". |
| CTAs | Imperative verb, short. `Buy Now` / `立即购买`, `Learn More` / `了解更多`, `Pre-order` / `预订`. |
| Spec tables | Pure data. Figure + unit. No adjectives. The numbers are the argument. |
| Support / error | Direct, blameless, instructional. State the condition and the next step. |
| Legal / regulatory | Formal, precise — drone regulation and safety copy is exacting and unembellished. |

**Forbidden phrases.** Marketing inflation — `革命性` (revolutionary), `颠覆` (disruptive), `极致` as filler, `世界第一` unqualified. Exclamation marks as emphasis on CTAs (`立即购买！` is wrong; `立即购买` is right). Emoji on product/spec surfaces. Hype that the spec sheet can't substantiate — DJI's credibility is that every claim is a measurable number.

**Voice samples.**
- `See It All` — illustrative of DJI's terse aspirational hero pattern (capability stated as a short phrase). <!-- illustrative: follows DJI marketing-headline convention observed on dji.com; not quoted as a specific live string -->
- `Just Fly` — illustrative product-reveal phrasing in the same register. <!-- illustrative: convention observed, not a verified live string -->
- `未来无所不能` — illustrative Simplified-Chinese brand tagline register (*the future of possible*). <!-- illustrative: reflects DJI's CN tagline style; not verified verbatim -->
- `立即购买` / `了解更多` — store CTA verbs in the imperative-short pattern. <!-- illustrative: standard CN e-commerce CTA register consistent with DJI store surfaces -->

## 11. Brand Narrative

DJI was founded in **2006 in Shenzhen** by **Frank Wang (汪滔)**, then a student at the Hong Kong University of Science and Technology, out of a dorm-room obsession with flight-control systems. The company's first products were not finished drones but flight controllers — the unglamorous, mathematically demanding brains that keep a multirotor stable in the air. That origin is the whole brand: DJI began as a controls-engineering company, and its design language still privileges precision, measurability, and the quiet authority of something that simply works. By the mid-2010s DJI's Phantom line had defined what a consumer drone *is* in the public imagination, and the company came to hold the dominant share of the global civilian drone market. <!-- source: widely documented public history (Frank Wang / HKUST / Shenzhen 2006); not re-verified against a primary DJI source in this pass -->

The visual identity follows from the engineering culture. The 500-page brand guide, the named **Titan** primary, the single sky-blue accent, and the **X-Factor** grid (spacing derived from the logo's own lowercase-"i" height) are not stylistic preferences — they are the same systematizing instinct that produces a flight controller, applied to communication. Where many consumer-tech brands reach for warmth and personality, DJI reaches for *correctness*. The black backgrounds, the absence of decoration, the spec tables that read like instrument panels — all of it says: this was built by people who care more about what the machine does than about how the website feels.

What DJI refuses: the gradient-and-mascot playfulness of consumer apps, the warm illustration systems of lifestyle commerce, marketing language that outruns the spec sheet, and any color that competes with the product photography. What it embraces: monochrome restraint, photography as the only ornament, numbers as the argument, and a global bilingual voice in which Chinese and English are genuine peers.

## 12. Principles

1. **The product is the only ornament.** Every surface exists to present the hardware — full-bleed photography and flight footage carry the page; the chrome stays out of the way. *UI implication:* No decorative graphics, no illustration system, no brand-colored fills behind content. If a fold needs visual interest, it needs a better product shot, not a gradient.

2. **Color is information, not mood.** The palette is black, white, silver, Titan, with one finite sky-blue accent. Mood comes from photography. *UI implication:* Use the accent only for links and focus. Status colors (success/error/warning) appear only on functional surfaces (checkout, forms). Never fill a hero with brand color.

3. **One derived unit, everywhere (X-Factor).** Spacing is not arbitrary — it descends from a single base unit. *UI implication:* Pick a base spacing unit and express every margin, gutter, and clearspace as an integer multiple. Coherence comes from the system, not from per-screen judgment.

4. **The number is the argument.** DJI sells on measurable capability. *UI implication:* Spec tables are first-class, not afterthoughts. Set figures clearly, pair number with unit, divide rows with hairlines, and never dilute a spec row with adjectives.

5. **Restraint reads as authority.** Quiet design signals that the engineering doesn't need to shout. *UI implication:* Short headlines, flat chrome, generous negative space, sharp-to-modest radii. When in doubt, remove an element rather than add one.

6. **Chinese and English are peers.** Born in Shenzhen, sold worldwide. *UI implication:* Every font stack carries Source Han Sans / PingFang SC so CJK sits at the same optical weight as the Latin face; neither language's copy reads as a translation of the other.

## 13. Personas

*Personas are fictional archetypes informed by publicly described DJI customer segments (consumer creators, prosumer pilots, enterprise/industrial users), not individual people.*

**马磊 (Ma Lei), 29, Shenzhen.** Freelance travel videographer. Owns a Mavic and an Osmo gimbal; researches every new release the moment it drops, reads the full spec table before the marketing copy, and cross-checks flight time and transmission range against his current rig. Buys direct from dji.com. Distrusts any drone brand whose website leads with adjectives instead of numbers.

**Elena Rossi, 38, Milan.** Survey-mapping engineer at a construction firm. Uses DJI enterprise drones for site inspection and photogrammetry. Reads dji.com in English, cares about payload, sensor accuracy, and regulatory compliance copy far more than cinematic hero footage. Wants the spec sheet downloadable as a PDF.

**Kenji Watanabe, 24, Osaka.** Hobbyist who bought his first DJI mini-drone for weekend flying. Came for the "Just Fly" approachability, stays because the app and hardware genuinely just work. Will upgrade within two years — DJI's restraint reads to him as trustworthiness, and he wouldn't consider a flashier competitor.

## 14. States

| State | Treatment |
|---|---|
| **Empty (cart)** | White canvas, centered single line of silver body copy, one black primary CTA ("Continue shopping" / 继续购物). No illustration. |
| **Empty (search no results)** | One line, silver, factual ("No products match your search"). No mascot, no suggestion spam. |
| **Loading (product page)** | Skeleton blocks at final dimensions on white/black surfaces; hero media fades in when ready. Slow, smooth — never a bouncy spinner. |
| **Loading (store grid)** | Grayscale tile placeholders matching the final grid; single shimmer pass. |
| **Error (form field)** | Field border turns error red (≈`#ff3b30`), one-sentence message below in the same red, 13px. State the fix. |
| **Error (out of stock)** | Product CTA replaced with a disabled silver "Sold out" / 售罄 state + an optional "Notify me" link in accent blue. No alarm coloring. |
| **Success (order placed)** | Clean white confirmation, black checkmark, order number in Titan, next-step link in accent blue. Confident, not celebratory. |
| **Success (added to cart)** | Subtle cart-drawer slide-in from the right; item appears; no confetti. The drawer is the feedback. |
| **Skeleton** | Hairline-bordered gray blocks at exact final dimensions; never on price (price shows a neutral placeholder). |
| **Disabled** | Silver fill + silver text together; reduced contrast, never a different hue. Disabled CTA keeps its 4px radius. |

## 15. Motion & Easing

DJI's motion is **slow, precise, and gravity-free** — the motion equivalent of a stabilized aerial shot. Nothing snaps, nothing bounces; transitions glide.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle/select commits |
| `motion-fast` | 200ms | Hover, link, button feedback |
| `motion-standard` | 350ms | Dropdown/mega-menu, cart drawer, fade-reveals |
| `motion-slow` | 600ms | Hero media fade-in, scroll-triggered fold reveals, 360° product spins |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Drawers, menus, reveals arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Spring stance.** Spring/overshoot is **forbidden** on DJI surfaces. The brand's emotional register is precision and control — a stabilized gimbal does not overshoot, and neither does the UI. The only kinetic flourish allowed is the slow parallax/360° reveal of a product, which mimics the smooth, mechanical motion of the hardware itself.

**Signature motions.**
1. **Hero media fade-in.** Product photography/footage fades from black over `motion-slow / ease-enter` as the fold enters the viewport. The black ground stays; the product emerges from it.
2. **Scroll-triggered fold reveal.** Headlines and spec modules translate up `~24px` and fade in over `motion-standard / ease-standard` as each fold scrolls into view. Sequential, not simultaneous.
3. **360° product spin.** On flagship pages the product rotates on scroll or drag with smooth, mechanical easing — no inertia overshoot. It reads as turning a real object in your hands.
4. **Cart drawer.** Slides in from the right over `motion-standard / ease-enter`; backdrop dims to a low-alpha black. The slide is the only confirmation.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all reveals collapse to immediate opacity-1, the 360° spin shows a static hero, and the cart drawer appears without slide. Fully functional, no kinetics.

<!--
OmD v0.1 Sources — DJI

Tier 1 (live): dji.com homepage + product/store surfaces via WebFetch 2026-05-19.
Confirmed monochrome black/white/silver palette, full-bleed product photography
as hero language, sans-serif typography, minimal/premium-industrial aesthetic,
imperative store CTAs (立即购买 / 了解更多). No public CSS token layer is exposed.

Tier 2 (brand guide / philosophy): WebSearch 2026-05-19 surfaced DJI's global
500-page Brand & Product Communication Design Style Guide (Behance "DJI – Design
Style Guide"; Scribd "DJI Toolbox BASICS"). These confirm by NAME: the primary
color "Titan", secondary white/black/silver, a single sky-blue accent, a custom
DJI typeface (DJI-Demi referenced in app font assets), and the "X-Factor" grid
derived from the lowercase-"i" height in the DJI wordmark. The brand guide does
NOT publish exact hex values for Titan or the sky-blue accent openly.

⚠️ SOURCING CAVEAT: All specific hex values in §2/§4 except #000000 and #ffffff
are BEST-FIT APPROXIMATIONS of observed/Apple-class neutral usage, flagged
"approximate" inline. Titan and sky-blue are named in the guide but not published
as hex. Do not present these specific hexes to the brand owner as verbatim DJI
tokens — present them as observed approximations pending the official guide.

Founding facts (§11): Frank Wang / 汪滔, HKUST, Shenzhen, 2006 — widely documented
public history, not re-verified against a primary DJI source this pass.

Personas (§13) and voice samples (§10) are illustrative/fictional, flagged inline.
-->

---

**Verified:** 2026-05-19 (omd:add-reference — CN batch)
**Tier 1 sources:** dji.com (live — monochrome black/white/silver palette, full-bleed product photography hero language, premium-industrial minimalism, imperative CN store CTAs; no public token layer).
**Tier 2 sources:** Behance "DJI – Design Style Guide" + Scribd "DJI Toolbox BASICS" (500-page brand guide — named primary "Titan", white/black/silver secondary, sky-blue accent, custom DJI typeface, "X-Factor" lowercase-"i" grid). Brandfetch dji.com (logo assets).
**Style ref:** `apple` (premium-monochrome hardware-store tone).
**Conflicts unresolved:** Exact hex values for Titan and the sky-blue accent are not publicly published; §2/§4 specific non-black/white hexes are flagged approximate.
