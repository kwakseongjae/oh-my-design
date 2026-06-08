---
id: shopline
name: SHOPLINE
country: TW
category: e-commerce
homepage: "https://shopline.tw"
primary_color: "#356dff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=shopline.tw&sz=128"
verified: "2026-06-08"
added: "2026-06-08"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-08"
  note: "primary = live CTA blue (#356dff); ink = navy text/dark-section (#00142d); shadows are neutral soft-gray, alpha kept in shadow strings only"
  colors:
    primary: "#356dff"
    primary-ink: "#ffffff"
    ink: "#00142d"
    canvas: "#ffffff"
    surface-tint: "#edf4fd"
    surface-mist: "#f2f7fc"
    dark-section: "#00142d"
    heading: "#00142d"
    body: "#00142d"
    on-dark: "#ffffff"
    cta-black: "#000000"
    hairline: "#d6d6d6"
  typography:
    family: { sans: "Noto Sans TC", fallback: "-apple-system, system-ui, Segoe UI, Roboto" }
    display-hero: { size: 48, weight: 700, lineHeight: 1.33, tracking: 0, use: "Hero headline (h1), white-on-navy" }
    section:      { size: 40, weight: 700, lineHeight: 1.37, tracking: 0, use: "Section titles (h2)" }
    subheading:   { size: 24, weight: 700, lineHeight: 1.40, use: "Card / feature heads" }
    cta-lg:       { size: 18, weight: 700, lineHeight: 1.00, use: "Primary pill CTA label" }
    cta-sm:       { size: 14, weight: 700, lineHeight: 1.00, use: "Nav header CTA label" }
    nav:          { size: 16, weight: 400, lineHeight: 1.50, use: "Top navigation links" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    caption:      { size: 13, weight: 400, lineHeight: 1.85, use: "Small descriptions, metadata" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 80 }
  rounded: { sm: 3, md: 6, lg: 9, pill: 30, full: 9999 }
  shadow:
    soft: "rgba(200,200,200,0.27) 2px 2px 6px 0px"
    card: "rgba(0,0,0,0.08) 0px 8px 16px 0px"
    float: "rgba(0,0,0,0.08) 0px 4px 24px 0px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#356dff", fg: "#ffffff", radius: "30px", height: "45px", padding: "0 24px", font: "18px / 700", use: "Primary marketing CTA" }
    button-outline: { type: button, bg: "#ffffff", fg: "#356dff", border: "1px solid #356dff", radius: "30px", height: "45px", font: "18px / 700", use: "Secondary action beside primary" }
    button-dark: { type: button, bg: "#00142d", fg: "#ffffff", radius: "30px", height: "44px", padding: "8px 24px", font: "16px / 700", use: "High-emphasis booking/conversion CTA" }
    button-nav: { type: button, bg: "#000000", fg: "#ffffff", radius: "30px", height: "38px", padding: "0 24px", font: "14px / 700", use: "Always-visible free-trial CTA in sticky nav" }
    card: { type: card, bg: "#ffffff", radius: "8px", shadow: "rgba(0,0,0,0.08) 0px 8px 16px 0px", use: "Standard elevated card; elevation from soft shadow not hairlines" }
    input: { type: input, bg: "#ffffff", fg: "#00142d", border: "1px solid #d6d6d6", radius: "6px", focus: "#356dff blue ring/border", use: "Form input" }
    section-band: { type: card, bg: "#edf4fd", use: "Light-blue wash band (#edf4fd / #f2f7fc) alternating with white; navy #00142d for immersive sections" }
---

# Design System Inspiration of SHOPLINE

## 1. Visual Theme & Atmosphere

SHOPLINE presents itself as a bright, optimistic, merchant-friendly commerce platform built for the Taiwan and Hong Kong markets — its homepage opens on a clean white canvas (`#ffffff`) with a confident, saturated royal blue (`#356dff`) doing almost all of the brand work. Where Stripe whispers in light-weight type, SHOPLINE speaks in bold weight-700 Traditional-Chinese headlines, fully-rounded pill buttons, and gentle light-blue section washes. The atmosphere is approachable SaaS-for-shopkeepers: trustworthy enough that a small business owner believes their store and money are safe, friendly enough that a first-time entrepreneur feels invited in. The tagline "全方位零售整合專家" (all-in-one retail integration expert) sets the register — capable, comprehensive, but never intimidating.

The defining typographic choice is `Noto Sans TC`, Google's Traditional-Chinese sans-serif, run at weight 700 for every headline and CTA. This is the opposite of the boutique custom-font approach: SHOPLINE deliberately uses a free, ubiquitous, perfectly-legible CJK typeface because legibility across thousands of merchant-uploaded product names, in 繁體中文, at every screen size, matters more than a bespoke letterform. Headlines run large (48px hero, 40px sections) and heavy, with normal letter-spacing — Chinese characters do not benefit from the negative tracking that Latin display type uses.

The color story is two-note and disciplined: SHOPLINE Blue (`#356dff`) as the single hero/interactive accent, and a deep ink navy (`#00142d`) that does triple duty as heading color, body text color, and the background of immersive dark sections. Between them sit two barely-there light-blue surface tints (`#edf4fd`, `#f2f7fc`) that segment the long marketing page into rhythmic bands without ever introducing a competing hue. Shadows are soft, neutral, and low-contrast (`rgba(0,0,0,0.08)`), keeping the page feeling light and airy rather than heavily layered.

**Key Characteristics:**
- `Noto Sans TC` at weight 700 for all headlines and CTAs — legibility-first CJK typography
- A single saturated brand blue (`#356dff`) carries every CTA, link, and interactive accent
- Fully-rounded **30px pill buttons** everywhere — the signature shape of the system
- Deep ink navy (`#00142d`) used for headings, body, and dark immersive sections alike
- Light-blue surface tints (`#edf4fd`, `#f2f7fc`) band the page into calm rhythmic sections
- Soft, neutral, low-alpha shadows (`rgba(0,0,0,0.08)`) — airy, not heavy
- Bright white canvas (`#ffffff`) as the default ground; navy as the dramatic counterpoint

## 2. Color Palette & Roles

### Primary
- **SHOPLINE Blue** (`#356dff`): The primary brand color. Fills primary CTA buttons, colors outlined-button text and borders, and marks links and interactive accents. A saturated royal blue that reads energetic and trustworthy.
- **Ink Navy** (`#00142d`): The workhorse dark. Heading text, body text, dark-section backgrounds, and the navy CTA variant. Not pure black — a very deep desaturated blue-navy that feels softer and more premium than `#000000`.
- **Pure White** (`#ffffff`): Page background, card surfaces, primary-CTA text, and the fill of outlined buttons.

### Surface & Section Tints
- **Surface Tint** (`#edf4fd`): A pale blue wash used for alternating section backgrounds and feature bands — keeps the page on-brand without a second hue.
- **Surface Mist** (`#f2f7fc`): An even lighter blue-gray surface for subtle cards and secondary bands.
- **Dark Section** (`#00142d`): Full-bleed navy sections (hero band, footer, immersive feature blocks) with white text reversed out.

### Text
- **Heading** (`#00142d`): All headings on light backgrounds.
- **Body** (`#00142d`): Standard reading text and captions share the same ink navy.
- **On Dark** (`#ffffff`): Headings and body text reversed out on navy sections.

### CTA & Accent Variants
- **Primary Ink** (`#ffffff`): Text color on the blue primary button.
- **CTA Black** (`#000000`): A pure-black pill variant used for the compact header "免費試用" (free trial) button — higher contrast against the white sticky nav.

### Borders & Hairlines
- **Hairline** (`#d6d6d6`): Neutral gray for dividers, input borders, and subtle separators.

### Shadow Colors
- **Card Shadow** (`rgba(0,0,0,0.08)`): The standard soft neutral shadow for elevated cards.
- **Float Shadow** (`rgba(0,0,0,0.08)`): Same alpha, wider blur (24px) for floating/popover elements.
- **Soft Shadow** (`rgba(200,200,200,0.27)`): A tiny offset gray shadow for low-lift chips and small elements.

## 3. Typography Rules

### Font Family
- **Primary**: `Noto Sans TC`, with fallback stack `-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Script coverage**: Traditional Chinese (繁體中文) first-class, Latin secondary. Both share the Noto Sans TC family for visual consistency between Chinese product/marketing copy and Latin numerals or brand names.
- **No custom font**: SHOPLINE intentionally uses a free, broadly-available CJK font — the priority is universal legibility of merchant-supplied content, not a proprietary letterform.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero (h1) | Noto Sans TC | 48px (3.00rem) | 700 | 1.33 | Hero headline, usually white-on-navy |
| Section Title (h2) | Noto Sans TC | 40px (2.50rem) | 700 | 1.37 | Feature section titles |
| Sub-heading | Noto Sans TC | 24px (1.50rem) | 700 | 1.40 | Card heads, feature names |
| CTA Large | Noto Sans TC | 18px (1.13rem) | 700 | 1.00 | Primary pill button label |
| CTA Small | Noto Sans TC | 14px (0.88rem) | 700 | 1.00 | Compact header CTA label |
| Nav Link | Noto Sans TC | 16px (1.00rem) | 400 | 1.50 | Top navigation links |
| Body | Noto Sans TC | 16px (1.00rem) | 400 | 1.50 | Standard reading text |
| Caption | Noto Sans TC | 13px (0.81rem) | 400 | 1.85 | Small descriptions, metadata |

### Principles
- **Bold weight as authority**: Weight 700 on every headline and CTA is SHOPLINE's signature — the opposite of the light-weight luxury convention. Heavy type reads as clear, confident, and reassuring to merchants.
- **Two-weight system**: 700 for everything that should command attention (headings, CTAs), 400 for everything readable (nav, body, captions). There is no in-between medium weight in the marketing chrome.
- **Normal tracking for CJK**: Letter-spacing stays `normal` — Traditional-Chinese glyphs are designed on a fixed em square and do not take the negative tracking Latin display type uses.
- **Generous CJK line-height**: Body runs at 1.5 and captions at ~1.85 line-height, giving dense Chinese characters room to breathe and stay legible.
- **Legibility over personality**: The deliberate choice of Noto Sans TC means the brand personality lives in color, shape (pills), and weight — never in exotic letterforms.

## 4. Component Stylings

### Buttons

All SHOPLINE buttons share one geometry: a **30px fully-rounded pill** with weight-700 labels. The system differentiates by fill color and size, not by shape.

**Primary (Blue)**
- Background: `#356dff`
- Text: `#ffffff`
- Radius: 30px (pill)
- Height: 45px
- Padding: 0 24px
- Font: 18px Noto Sans TC weight 700
- Use: Primary marketing CTA — "了解所有方案" (see all plans), "免費試用 14 天" (14-day free trial)

**Outlined (Blue-on-White)**
- Background: `#ffffff`
- Text: `#356dff`
- Border: 1px solid `#356dff`
- Radius: 30px (pill)
- Height: 45px
- Font: 18px Noto Sans TC weight 700
- Use: Secondary action beside a primary blue CTA — "了解更多" (learn more)

**Dark (Navy)**
- Background: `#00142d`
- Text: `#ffffff`
- Radius: 30px (pill)
- Height: ~44px
- Padding: 8px 24px
- Font: 16px Noto Sans TC weight 700
- Use: High-emphasis booking/conversion CTA — "立即預約 GO!" (book now)

**Header CTA (Black)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 30px (pill)
- Height: 38px (compact)
- Padding: 0 24px
- Font: 14px Noto Sans TC weight 700
- Use: Always-visible free-trial CTA in the sticky white nav — "免費試用"

### Cards & Containers
- Background: `#ffffff` (or `#edf4fd` / `#f2f7fc` on tinted bands)
- Radius: 8px (standard), 6px and 9px also observed for smaller/larger elements
- Shadow (standard): `rgba(0,0,0,0.08) 0px 8px 16px 0px`
- Shadow (floating): `rgba(0,0,0,0.08) 0px 4px 24px 0px`
- Shadow (low-lift chip): `rgba(200,200,200,0.27) 2px 2px 6px 0px`
- Borders kept minimal — elevation comes from soft shadow, not hairlines

### Section Bands
- White (`#ffffff`) is the default ground
- Light-blue washes (`#edf4fd`, `#f2f7fc`) alternate to segment the long marketing page
- Navy (`#00142d`) full-bleed sections for hero and immersive feature blocks, white text reversed out

### Navigation
- White (`#ffffff`) sticky header
- Links: 16px Noto Sans TC weight 400, `#00142d` ink navy
- Always-visible black pill CTA "免費試用" right-aligned (`#000000` fill, 38px tall, 30px radius)
- Clean, horizontal, generous spacing

### Inputs & Forms
- Border: 1px solid `#d6d6d6` hairline
- Radius: 6px–8px
- Focus: `#356dff` blue ring/border
- Text & label: `#00142d`

### Avatars & Icons
- Circular (`50%` radius / `9999` full) for avatars and round icon chips
- Small rounding (3px) for tags and inline chips

---

**Verified:** 2026-06-08 (omd:add-reference — Tier 1 live inspect)
**Tier 1 sources:** https://shopline.tw, https://blog.shopline.tw (homepage, live DOM getComputedStyle — body, h1, h2, primary/outline/dark/nav CTA buttons, nav links, paragraph text, section backgrounds, shadows)
**Country sources:** https://shopline.tw (official TW site, zh-TW), https://blog.shopline.tw (official TW blog), https://shopline.hk (HK regional sibling), Apple App Store TW listing
**`.verification.md`:** `web/references/shopline/.verification.md`

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, with ~80px between major marketing sections
- Generous vertical rhythm between bands keeps the long homepage scannable

### Grid & Container
- Centered single-column hero with large bold headline and a pair of pill CTAs
- Feature sections use 2–3 column card grids on light-blue washes
- Full-bleed navy sections for immersive hero/feature moments
- Comfortable max content width with generous side gutters

### Whitespace Philosophy
- **Airy and calm**: Low-alpha shadows and pale tints keep the page feeling light, never heavy or dense.
- **Banded rhythm**: White / light-blue / navy bands alternate down the page, giving a clear visual cadence that helps a long sales page stay legible.
- **Breathing room for CJK**: Generous line-height and padding give Traditional-Chinese text room, since dense characters need more air than Latin.

### Border Radius Scale
- Pill (30px): every button — the defining shape
- Small (3px): tags, inline chips
- Standard (6px–8px): cards, inputs
- Large (9px): larger panels
- Full (50% / 9999): avatars, circular icon chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, section bands, inline text |
| Low-lift (Level 1) | `rgba(200,200,200,0.27) 2px 2px 6px 0px` | Chips, small floating tags |
| Card (Level 2) | `rgba(0,0,0,0.08) 0px 8px 16px 0px` | Standard feature cards, panels |
| Float (Level 3) | `rgba(0,0,0,0.08) 0px 4px 24px 0px` | Popovers, floating CTAs, dropdowns |
| Focus ring | `#356dff` border/ring | Keyboard focus, active inputs |

**Shadow Philosophy**: SHOPLINE keeps elevation deliberately gentle. Shadows are neutral (gray/black at only 0.08 alpha), never tinted or dramatic. The intent is an airy, trustworthy, low-friction feel — depth exists to lift interactive cards just enough to read as tappable, never to create heavy visual drama. Where Stripe makes shadows a branded chromatic signature, SHOPLINE deliberately makes them recede, letting the blue accent and pill shapes carry the brand.

### Decorative Depth
- Navy (`#00142d`) full-bleed sections create depth through color contrast rather than shadow
- Light-blue washes (`#edf4fd`, `#f2f7fc`) provide subtle layering between bands

## 7. Do's and Don'ts

### Do
- Use `Noto Sans TC` at weight 700 for every headline and CTA — bold legibility is the voice
- Make every button a 30px pill — the fully-rounded shape is the signature
- Use SHOPLINE Blue (`#356dff`) as the single interactive/CTA accent
- Use ink navy (`#00142d`) for headings, body, and dark sections — never pure black for text
- Band the page with light-blue washes (`#edf4fd`, `#f2f7fc`) alternating with white
- Keep shadows soft and neutral (`rgba(0,0,0,0.08)`) — airy elevation only
- Reverse white text out of `#00142d` navy for immersive sections
- Give Traditional-Chinese text generous line-height (1.5+) and padding

### Don't
- Don't use light/thin font weights for headlines — SHOPLINE is weight 700, bold and clear
- Don't use sharp-cornered or small-radius buttons — pills (30px) are non-negotiable
- Don't introduce a second accent hue — blue is the only brand color, navy and tints support it
- Don't apply heavy, dark, or chromatic shadows — elevation stays soft and neutral
- Don't use pure `#000000` for body/heading text — use ink navy `#00142d` (the black pill is the one exception, reserved for the nav CTA)
- Don't apply negative letter-spacing to Chinese text — CJK glyphs use normal tracking
- Don't crowd CJK type — dense Traditional-Chinese needs breathing room

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, reduced heading sizes, stacked cards, hamburger nav |
| Tablet | 640–1024px | 2-column grids, moderate padding |
| Desktop | 1024–1280px | Full layout, 3-column feature grids |
| Large Desktop | >1280px | Centered content with generous side gutters |

### Touch Targets
- Pill CTAs are 38px–45px tall — comfortably tappable
- Nav links at 16px with generous spacing
- Header free-trial pill always reachable in the sticky nav

### Collapsing Strategy
- Hero: 48px headline scales down on mobile, weight 700 maintained
- Navigation: horizontal links → hamburger toggle, header CTA pill persists
- Feature cards: 3-column → 2-column → single stacked column
- Navy/tinted bands keep full-bleed treatment, reduce internal padding on mobile
- Section spacing compresses (~80px → ~40px) on mobile

### Image Behavior
- Product/dashboard screenshots maintain soft card shadow at all sizes
- Cards keep consistent 8px radius
- Pill buttons keep 30px radius regardless of width

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: SHOPLINE Blue (`#356dff`)
- CTA text: White (`#ffffff`)
- Outlined CTA text/border: SHOPLINE Blue (`#356dff`)
- Dark CTA / dark section: Ink Navy (`#00142d`)
- Header CTA: Black (`#000000`)
- Background: Pure White (`#ffffff`)
- Section tint: Pale Blue (`#edf4fd`) / Mist (`#f2f7fc`)
- Heading & body text: Ink Navy (`#00142d`)
- Border: Hairline Gray (`#d6d6d6`)

### Example Component Prompts
- "Create a hero section on a `#00142d` navy background with white text. Headline at 48px Noto Sans TC weight 700, line-height 1.33, color `#ffffff`. Below it, two 30px-pill CTAs: a primary blue button (`#356dff` fill, white 18px/700 text, 45px tall, 0 24px padding) and an outlined button (white fill, `#356dff` text + border)."
- "Design a feature card on a `#edf4fd` band: white background, 8px radius, shadow `rgba(0,0,0,0.08) 0px 8px 16px 0px`. Title 24px Noto Sans TC weight 700 `#00142d`; body 16px weight 400 `#00142d` at line-height 1.5."
- "Build a sticky white nav: `#ffffff` background, links 16px Noto Sans TC weight 400 `#00142d`, and a right-aligned black pill CTA (`#000000` fill, white 14px/700 text, 38px tall, 30px radius) labeled '免費試用'."
- "Create a dark conversion band: `#00142d` background, white 40px/700 headline, and a `#00142d`-vs-white navy pill CTA '立即預約 GO!' (or a white-on-blue `#356dff` pill) at 16px weight 700."

### Iteration Guide
1. Every button is a 30px pill — check radius first
2. Headlines and CTAs are weight 700; nav/body/captions are weight 400
3. Blue (`#356dff`) is the only accent — do not add a second hue
4. Text is ink navy (`#00142d`), not black — except the nav header pill which is `#000000`
5. Shadows stay soft and neutral at 0.08 alpha — never heavy or tinted
6. Band the page: white / `#edf4fd` / `#f2f7fc` / `#00142d`
7. Give Traditional-Chinese type generous line-height (1.5+) and normal tracking

---

## 10. Voice & Tone

SHOPLINE's voice (in 繁體中文) is encouraging, practical, and merchant-empowering — it speaks to small-business owners and aspiring entrepreneurs as capable partners, not as targets. The positioning line "全方位零售整合專家" (all-in-one retail integration expert) and copy like "讓你的生意不斷成長" (keep your business growing) set a tone that is confident about the platform's breadth while staying warm and accessible. CTAs are direct and action-oriented: "免費試用" (free trial), "了解所有方案" (see all plans), "立即預約 GO!" (book now). The voice avoids hype-laden superlatives in favor of concrete capability and reassurance.

| Context | Tone |
|---|---|
| Hero headlines | Confident, comprehensive. "全方位…專家" — capable without arrogance. |
| Feature descriptions | Practical, benefit-led. Concrete merchant outcomes, not abstract promises. |
| CTAs | Direct imperatives. "免費試用", "了解所有方案", "立即預約". |
| Pricing / plans | Transparent, reassuring. Emphasis on free trial and flexible scale. |
| Support / help | Patient, plain-language, merchant-first. |
| Marketing / blog | Educational — how-to-open-a-store guidance, e-commerce know-how. |

**Forbidden register.** Cold enterprise jargon that alienates small merchants; hype superlatives that undercut trust; anything that makes a first-time店主 feel the platform is "too advanced" for them. The brand wins by feeling attainable.

## 11. Brand Narrative

SHOPLINE is a commerce / online-store SaaS platform serving the Greater China region, with a strong presence in **Taiwan (台灣)** and **Hong Kong (香港)** and across Southeast Asia. It gives merchants — from solo creators to established brands — an all-in-one toolkit to open and run an online store: storefront building, product and inventory management, payments, marketing, and increasingly omni-channel (online + physical retail, social commerce) integration. The Taiwan-facing brand promise, "全方位零售整合專家" (all-in-one retail integration expert) and "完整開店功能讓你的生意不斷成長" (complete store-opening features to keep your business growing), positions SHOPLINE as the partner that handles the technical complexity so the merchant can focus on selling.

What SHOPLINE embraces: accessibility for first-time店主, breadth of features under one roof, and a bright, trustworthy, friendly design language. What it rejects: the intimidating, developer-first or enterprise-procurement feel of platforms built for engineers — SHOPLINE's audience is shopkeepers, not staff engineers, and the design reflects that through bold legible type, friendly pill shapes, and a single calm blue.

The design system encodes this positioning directly: weight-700 Noto Sans TC for maximum legibility across merchant content in 繁體中文, fully-rounded pill buttons that read as friendly and approachable, a single confident blue (`#356dff`) that signals trust, and soft airy shadows that keep the experience light rather than heavy. Light-blue washes and navy immersive bands give the long marketing page rhythm without ever introducing a competing color.

*Note: brand-history specifics beyond the publicly observable TW/HK commerce-SaaS positioning are not independently verified here; claims above are grounded in the live zh-TW homepage and regional brand-owned sources.*

## 12. Principles

1. **Legibility before personality.** A free, ubiquitous CJK font (Noto Sans TC) at bold weight 700 means merchant-supplied product names and marketing copy are always perfectly readable. The brand's personality lives in color and shape, not exotic letterforms.
2. **One blue, used decisively.** A single accent (`#356dff`) carries every CTA, link, and highlight. Restraint reads as trustworthy; a rainbow of accents would read as cheap.
3. **Friendly geometry.** The 30px pill is a deliberate emotional choice — rounded shapes feel approachable and safe to a small-business owner trusting the platform with their livelihood.
4. **Airy, never heavy.** Soft 0.08-alpha shadows and pale tints keep the interface light. Heaviness would feel like enterprise software; lightness feels attainable.
5. **Bands give rhythm.** Alternating white / light-blue / navy sections turn a long sales page into a scannable, paced experience.
6. **Navy, not black, for text.** Ink navy (`#00142d`) is softer and warmer than pure black, reinforcing the friendly-but-trustworthy register.
7. **Merchant-first, not engineer-first.** Every design decision favors the non-technical store owner: clear CTAs, big readable type, no intimidating density.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable SHOPLINE user segments (first-time online sellers, established TW/HK retail brands, social-commerce sellers, omni-channel merchants), not individual people.*

**陳怡君 (Chen Yi-Chun), 29, Taipei.** Runs a handmade-accessories side business on Instagram and wants a real online store. Not technical. Chose SHOPLINE because the free trial let her open a storefront in an afternoon and the bold, clear Chinese interface never made her feel lost. The friendly pill buttons and "免費試用" everywhere lowered her fear of committing.

**Marcus Wong, 41, Hong Kong.** Operations lead at an established apparel brand expanding from physical retail into omni-channel. Values SHOPLINE's integration breadth — inventory synced across online and in-store. Trusts the calm, professional blue-and-navy design as a signal that the platform is serious infrastructure, not a toy.

**林家豪 (Lin Chia-Hao), 34, Taichung.** Sells specialty coffee equipment and runs marketing campaigns himself. Reads SHOPLINE's blog (blog.shopline.tw) for e-commerce how-tos. Appreciates that the dashboard's readable weight-700 headings and generous spacing make managing hundreds of SKUs in 繁體中文 painless.

**Priya Nair, 27, Singapore.** Social-commerce seller scaling a beauty brand across Southeast Asia. Picked SHOPLINE for its regional reach and the approachable onboarding. The bright, trustworthy visual language reassured her customers at checkout.

## 14. States

| State | Treatment |
|---|---|
| **Empty (store, no products)** | White canvas. A single encouraging line in ink navy (`#00142d`) at 18px Noto Sans TC weight 700, plus one blue pill CTA ("新增商品" / add product). Friendly, action-oriented — not a dead end. |
| **Empty (orders, none yet)** | Light line at 16px `#00142d`: "尚無訂單" (no orders yet), with guidance toward sharing the store. Encouraging, never discouraging. |
| **Loading** | Soft skeleton blocks in hairline gray (`#d6d6d6`) at final dimensions, gentle shimmer. Keeps the airy feel. |
| **Error (form validation)** | Field-level message below the input describing what's invalid, in a warm tone. Border shifts to an error color; the blue focus ring is the calm default. |
| **Error (action failed)** | Inline banner with plain-language explanation and a retry CTA. No cold error codes for merchant-facing flows. |
| **Success (saved / published)** | Brief confirmation, often a toast with the blue accent. Sentence-case, encouraging ("商品已上架" / product is live). |
| **Disabled** | Reduced opacity on the pill; blue actions fade rather than turn gray, preserving the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection ticks, focus rings |
| `motion-fast` | 150ms | Hover, button press, pill state changes |
| `motion-standard` | 250ms | Dropdowns, modals, card reveals |
| `motion-slow` | 400ms | Section reveals on scroll, hero transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, cards, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Character.** Motion is smooth, gentle, and reassuring — in keeping with the airy, friendly atmosphere. Hover states on pill buttons lift subtly (soft shadow grows, slight darken of the blue). Scroll-reveal on marketing bands fades content in gently. No aggressive springs or bounces that would undercut the trustworthy register.

**Signature motions.**
1. **Pill hover.** Primary blue pills darken slightly and the soft card shadow grows on hover — a gentle invitation to tap.
2. **Band scroll-reveal.** As each white/tinted/navy section enters the viewport, its content fades and rises a few pixels using `motion-standard / ease-enter`.
3. **Reduce motion.** Under `prefers-reduced-motion: reduce`, reveals become instant and hover transitions collapse to `motion-instant`. The interface stays fully functional and calm.

## 16. Do's and Don'ts

### Do
- Lead with bold weight-700 Noto Sans TC headlines and a single SHOPLINE Blue (`#356dff`) accent
- Make every button a friendly 30px pill
- Use ink navy (`#00142d`) for text and dark sections; band the page with `#edf4fd` / `#f2f7fc`
- Keep shadows soft and neutral (`rgba(0,0,0,0.08)`); keep the page airy
- Write merchant-first, encouraging copy with direct CTAs ("免費試用", "了解所有方案")
- Give Traditional-Chinese text generous line-height and normal tracking

### Don't
- Don't use thin/light headline weights — SHOPLINE is bold (700)
- Don't use sharp or small-radius buttons — pills only
- Don't add a second brand hue or use heavy/tinted shadows
- Don't use pure black for text (`#00142d` instead) — the black pill nav CTA is the sole exception
- Don't crowd CJK type or apply negative letter-spacing
- Don't adopt cold enterprise/developer-first tone — the audience is shopkeepers
