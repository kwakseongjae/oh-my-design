---
id: samsung
name: Samsung
display_name_kr: 삼성전자
country: KR
category: consumer-tech
homepage: "https://www.samsung.com/sec/"
primary_color: "#000000"
logo:
  type: simpleicons
  slug: samsung
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = live e-commerce CTA black (#000000) — Samsung.com KR uses pure black pill buttons as the dominant action color across all product pages. One UI primary blue (#0381fe) governs the mobile OS layer, not the web commerce surface."
  colors:
    primary: "#000000"
    primary-alt: "#212425"
    canvas: "#ffffff"
    surface: "#f7f7f7"
    foreground: "#000000"
    muted: "#707070"
    muted-alt: "#555555"
    on-primary: "#ffffff"
    hairline: "#dddddd"
    interactive-blue: "#0381fe"
    interactive-blue-dark: "#0072de"
    link-blue: "#007aff"
    link-blue-alt: "#2189ff"
    error: "#ef3434"
    error-alt: "#fa2337"
    badge-red: "#ef3434"
  typography:
    family: { display: "Samsung Sharp Sans", body: "SamsungOneKorean", fallback: "Dotum, 돋움, sans-serif" }
    display-hero:   { size: 56, weight: 700, lineHeight: 1.2, use: "Hero section headline, Samsung Sharp Sans Bold" }
    display-section: { size: 40, weight: 700, lineHeight: 1.2, use: "Section hero headline, Samsung Sharp Sans" }
    card-heading:   { size: 24, weight: 700, lineHeight: 1.3, use: "Product card heading, Samsung Sharp Sans" }
    nav-primary:    { size: 16, weight: 700, lineHeight: 1.5, use: "Top nav category links, SamsungOneKorean Bold" }
    nav-secondary:  { size: 14, weight: 700, lineHeight: 1.5, use: "Sub-nav links, SamsungOneKorean" }
    body:           { size: 16, weight: 400, lineHeight: 1.5, use: "Body copy, SamsungOneKorean Regular" }
    caption:        { size: 14, weight: 400, lineHeight: 1.5, use: "Captions, labels, metadata" }
    button:         { size: 14, weight: 700, lineHeight: 1.0, use: "Button label, SamsungOneKorean Bold" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 8, md: 20, lg: 40, full: 9999 }
  shadow:
    card: "0 2px 8px rgba(0,0,0,0.08)"
    elevated: "0 4px 16px rgba(0,0,0,0.12)"
  components:
    button-primary: { type: button, bg: "#000000", fg: "#ffffff", radius: "20px", padding: "0px 24px", height: "40px", font: "14px / 700 SamsungOneKorean", border: "1px solid #000000", states: "hover bg #212425", use: "Primary CTA: 구매하기, 더 알아보기, 제품 모두 보기" }
    button-outline: { type: button, bg: "#ffffff", fg: "#000000", radius: "20px", padding: "0px 24px", height: "40px", font: "14px / 700 SamsungOneKorean", border: "1px solid #000000", use: "Secondary outline CTA on light backgrounds" }
    button-chip: { type: button, bg: "#f7f7f7", fg: "#000000", radius: "40px", padding: "9px 16px", height: "36px", font: "16px / 400 SamsungOneKorean", border: "1px solid #f7f7f7", use: "Product series filter chip (갤럭시 S26 울트라, etc.)" }
    filter-button: { type: button, bg: "#ffffff", fg: "#000000", radius: "8px", padding: "1px 15px", height: "40px", font: "14px / 700 SamsungOneKorean", border: "1px solid #dddddd", use: "Filter/facet button on product listing pages" }
    product-card: { type: card, bg: "#ffffff", radius: "0px", use: "Product listing card — frameless, image-led, no border or shadow on standard listing" }
    input-default: { type: input, bg: "#ffffff", fg: "#000000", border: "1px solid #dddddd", radius: "0px", font: "16px / 400 SamsungOneKorean", use: "Search and form input on e-commerce pages" }
    badge-error: { type: badge, bg: "#ef3434", fg: "#ffffff", radius: "9999px", font: "12px / 700 SamsungOneKorean", use: "Notification badge, error indicator" }
    nav-tab: { type: tab, fg: "#000000", font: "16px / 700 SamsungOneKorean", active: "text #000000 + 2px bottom border #000000", use: "Top horizontal nav category tab" }
  components_harvested: true
  ds:
    name: Samsung One UI Design System
    url: "https://developer.samsung.com/one-ui"
    type: system
    description: "Samsung's official mobile OS design language for Galaxy devices — principles, color system, motion, typography, and component specs for One UI apps."
---

# Design System Inspiration of Samsung

## 1. Visual Theme & Atmosphere

Samsung's web commerce and device branding operate under a single, unwavering visual principle: black leads. The Samsung Korea e-commerce surface (`samsung.com/sec`) is built on a pure white canvas (`#ffffff`) intersected with a light cool-grey surface (`#f7f7f7`), with virtually every headline, body copy, and interactive element anchored in pure black (`#000000`). This is not minimalism for minimalism's sake — it is a deliberate assertion of premium hardware confidence. Samsung's products are the hero; the UI frame must be neutral enough to disappear.

Two typefaces carry the entire brand's voice. **Samsung Sharp Sans** — Samsung's proprietary display typeface — handles all headlines and section titles at weights 700 and sizes from 24px to 56px, its geometric, architectural letterforms lending the product catalog a crisp, engineered quality. For body text, navigation labels, and button copy, **SamsungOneKorean** (part of the SamsungOne global typeface family) takes over, delivering clean, legible Korean Hangul at 14–16px weights 400–700. Together they create a typographic voice that is simultaneously global and deeply Korean.

The CTA system is strikingly economical. The primary purchase button ("구매하기") is a 40px-tall black pill — `#000000` background, white text, `20px` radius, `0px 24px` padding — applied identically across every product listing and category page. There is no secondary brand color for action; black is the action color. A lighter outline variant (white bg, 1px black border, matching 20px radius) serves secondary calls. This duality — black vs. white pill — is the entire button grammar. Filter chips and facet selectors switch to a `#f7f7f7` light-grey pill at 40px radius, visually distinguishing selection from action.

**Key Characteristics:**
- Samsung Sharp Sans Bold at large display sizes — geometric, Korean-premium, hardware-confident
- SamsungOneKorean for all body, nav, and UI copy — dense Hangul legibility at scale
- Pure black (`#000000`) as the sole primary action color — no colorful CTA
- 20px radius on primary pill buttons — restrained rounding for a premium feel
- White (`#ffffff`) and cool-grey (`#f7f7f7`) canvas — product photography as the only decoration
- Interactive blue (`#0381fe`) reserved for One UI mobile OS and link text on commerce pages
- Error/notification red (`#ef3434`) for badges and error states
- Link blue (`#007aff`) for informational links and highlights, inherited from iOS-adjacent patterns on Korean market pages

## 2. Color Palette & Roles

### Primary
- **Primary Black** (`#000000`): The dominant action color. All primary CTA buttons, navigation text, headings. Samsung's e-commerce color philosophy is monochrome: black on white, white on black.
- **Primary Alt** (`#212425`): Near-black for hover states and dark UI surfaces (error page CTAs, dark overlays).
- **Pure White** (`#ffffff`): Page background, button text on dark. The default canvas.

### Surface & Borders
- **Surface Grey** (`#f7f7f7`): Secondary surface for tinted sections, filter chip backgrounds, alternating content zones.
- **Hairline** (`#dddddd`): Border color for filter buttons, input fields, and UI dividers.

### Text Hierarchy
- **Foreground** (`#000000`): All headings and primary body text.
- **Muted** (`#707070`): Secondary text, captions, metadata below product prices.
- **Muted Alt** (`#555555`): Tertiary text, fine print.

### Interactive / Brand Blue (One UI & links)
- **Interactive Blue** (`#0381fe`): Samsung One UI primary — used for floating action buttons, sliders, and key interactive elements in the Galaxy mobile OS. Also appears as link/accent blue on web.
- **Interactive Blue Dark** (`#0072de`): One UI primary button background in light mode.
- **Link Blue** (`#007aff`): Hyperlinks and highlighted text on Samsung Korea commerce pages.
- **Link Blue Alt** (`#2189ff`): Stronger blue accent for hover or emphasis.

### Semantic
- **Error / Badge Red** (`#ef3434`): Notification badges, error states, "sale" indicators. A saturated warm red.
- **Error Alt** (`#fa2337`): Secondary error/warning accent.

## 3. Typography Rules

### Font Family
- **Display**: `Samsung Sharp Sans` — Samsung's proprietary geometric typeface, with `SamsungOneKorean` as Korean companion.
- **Body/UI**: `SamsungOneKorean, Dotum, 돋움, sans-serif` — the primary Korean web typeface for all navigation, body, and button text.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Samsung Sharp Sans | 56px | 700 | 1.2 | Main hero headline |
| Display Section | Samsung Sharp Sans | 40px | 700 | 1.2 | Section hero or promo headline |
| Card Heading | Samsung Sharp Sans | 24px | 700 | 1.3 | Product card title (e.g. "Galaxy S26 \| S26+") |
| Nav Primary | SamsungOneKorean | 16px | 700 | 1.5 | Category nav (모바일, TV/영상∙음향) |
| Nav Secondary | SamsungOneKorean | 14px | 700 | 1.5 | Sub-nav, utility links (고객지원, 비즈니스) |
| Body | SamsungOneKorean | 16px | 400 | 1.5 | Body copy |
| Caption / Button | SamsungOneKorean | 14px | 700 | 1.0–1.5 | Button labels, captions, metadata |

### Principles
- **Two typefaces, two registers**: Samsung Sharp Sans for product and brand identity; SamsungOneKorean for UI and reading. They never swap roles.
- **Bold everywhere at display sizes**: Weight 700 is the default for all headlines and nav labels — Samsung's voice is confident and direct.
- **Korean-first sizing**: 14–16px body size provides generous Hangul legibility in dense product listing contexts.
- **Zero decorative typefaces**: The system uses no italic, condensed, or script styles. Samsung communicates through geometry and weight alone.

## 4. Component Stylings

### Buttons

**Primary (구매하기 / 더 알아보기)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 20px
- Padding: 0px 24px
- Height: 40px
- Font: 14px SamsungOneKorean weight 700
- Border: 1px solid `#000000`
- Hover: background shifts to `#212425`
- Use: All primary purchase and learn-more CTAs on product and listing pages

**Outline (Secondary)**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 20px
- Padding: 0px 24px
- Height: 40px
- Font: 14px SamsungOneKorean weight 700
- Border: 1px solid `#000000`
- Use: Secondary CTA on dark backgrounds or alongside a primary button

**Filter Chip**
- Background: `#f7f7f7`
- Text: `#000000`
- Radius: 40px
- Padding: 9px 16px
- Height: 36px
- Font: 16px SamsungOneKorean weight 400
- Border: 1px solid `#f7f7f7`
- Use: Product series selector (갤럭시 S26 울트라, 갤럭시 Z, 갤럭시 A 등)

### Inputs

**Default Form Input**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#dddddd`
- Radius: 0px
- Font: 16px SamsungOneKorean weight 400
- Use: Search field and form inputs on e-commerce and support pages

**Filter Button (faceted search)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#dddddd`
- Radius: 8px
- Padding: 1px 15px
- Height: 40px
- Font: 14px SamsungOneKorean weight 700
- Use: Category filter dropdowns on all-products listing (배송 유형, 유형, 스토리지 등)

### Cards & Containers

**Product Listing Card**
- Background: `#ffffff`
- Radius: 0px
- Use: Standard product card on listing pages — frameless, photography-led, no border or shadow; product image bleeds to card edge

**Tinted Section Card**
- Background: `#f7f7f7`
- Radius: 0px
- Use: Feature/promotional content zones on the homepage alternating with white sections

### Badges

**Error / Notification Badge**
- Background: `#ef3434`
- Text: `#ffffff`
- Radius: 9999px
- Font: 12px SamsungOneKorean weight 700
- Use: Red notification dot, badge count, error indicators

### Navigation

**Top Category Tab**
- Text: `#000000`
- Font: 16px SamsungOneKorean weight 700
- Active: text `#000000` with 2px bottom border `#000000`
- Height: 47px header
- Background: `#ffffff`
- Use: Top horizontal nav (AI 구독클럽, 모바일, TV/영상∙음향, 주방가전, 리빙가전, PC/주변기기)

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.samsung.com/sec/, https://www.samsung.com/sec/smartphones/, https://developer.samsung.com/one-ui/color/system.html
**Tier 2 sources:** getdesign.md/samsung — 404 (not in catalog); styles.refero.design/?q=samsung — no Samsung style found
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: Product listing cards use generous 48–64px vertical section gaps; horizontal padding at content edges is typically 24–32px

### Grid & Container
- Max content width: approximately 1440px on desktop (full-bleed hero images)
- Hero sections: full-bleed photography with text overlay; headline and CTA in the lower-left or centered
- Product listing: 3–4 column grid on desktop, collapsing to 2 then 1 on mobile
- Category nav is sticky below the top utility bar

### Whitespace Philosophy
- **Product as hero**: extreme whitespace around product photography — the UI disappears, the device shines
- **Flat segmentation**: white and `#f7f7f7` alternating sections divide content without elevation or shadow
- **Dense nav, spacious content**: the 47px header is functionally dense (bold 16px labels at 14px 12px padding each side), while main content areas breathe

### Border Radius Scale
- Sharp (0px): Product cards, image containers, section backgrounds
- Soft (8px): Filter dropdowns, utility UI elements
- Pill-moderate (20px): Primary and outline CTA buttons — the signature rounding
- Pill-generous (40px): Filter chip selectors
- Full pill (9999px): Notification badges, color swatches

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Product cards, page background, nav |
| Surface (Level 1) | `#f7f7f7` background shift | Section separation without elevation |
| Ambient (Level 2) | `0 2px 8px rgba(0,0,0,0.08)` | Dropdowns, floating search panels |
| Standard (Level 3) | `0 4px 16px rgba(0,0,0,0.12)` | Modals, expanded menus |

**Shadow Philosophy**: Samsung's commerce surface is near-shadowless. Depth and content grouping come from alternating flat backgrounds (`#ffffff` vs `#f7f7f7`) and thin `#dddddd` hairlines. This keeps the visual focus on product hardware photography. When elevation does appear — dropdowns, quick-view panels — it uses a neutral grey shadow without any brand-colored tinting.

## 7. Do's and Don'ts

### Do
- Use Samsung Sharp Sans Bold (weight 700) for all product headings and display text
- Use SamsungOneKorean for all body, UI, and button label text
- Use pure black (`#000000`) pill buttons (20px radius) for all primary purchase CTAs
- Apply `#f7f7f7` surface grey to alternate section backgrounds for flat separation
- Use `#0381fe` interactive blue only for One UI mobile contexts and hyperlinks
- Use `#ef3434` red for error badges and notification indicators
- Let product photography fill the card — frame it with minimal chrome
- Maintain the 20px radius pill shape for all primary buttons across platforms

### Don't
- Use a colorful brand CTA — Samsung's action color is black, not a brand hue
- Apply drop shadows to product cards — the system is flat; shadows cheapen the premium feel
- Use Samsung Sharp Sans for body copy — it belongs exclusively to display and headlines
- Break the black-and-white CTA duality with a third button color
- Apply large, decorative border-radius (60px+) to primary CTAs — 20px is the upper bound for e-commerce
- Mix `#0381fe` blue into e-commerce buttons — blue is for links and the mobile OS layer only
- Use weight 400 for nav labels — Samsung navigation is always bold (weight 700)
- Introduce competing accent colors — the system's palette is intentionally near-monochrome

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single-column product grid, hamburger nav, stacked hero text |
| Tablet | 640–1024px | 2-column product grid, condensed nav labels |
| Desktop | 1024–1440px | 3–4 column grid, sticky full horizontal nav |
| Wide | >1440px | Centered content with generous lateral margins |

### Touch Targets
- Primary buttons at 40px height — comfortably tappable
- Category nav at 47px header — full-width tap area per nav item
- Filter chips at 36px — adequate touch target on mobile
- Color swatch buttons at 24px with 2px outer ring indicator

### Collapsing Strategy
- Hero: 56px Sharp Sans headline → compresses proportionally on mobile
- Nav: full horizontal category row → hamburger toggle
- Product grid: 4-column → 2-column → single-column stacked
- CTA: button pill maintained at 40px height across all breakpoints

### Image Behavior
- Product images maintain aspect ratio at all sizes; no shadow added at any breakpoint
- Hero full-bleed images crop from center on narrow viewports
- Samsung maintains `alt` text in Korean for all product imagery

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Black (`#000000`)
- CTA Hover: Near-black (`#212425`)
- Background: White (`#ffffff`)
- Surface grey: `#f7f7f7`
- Text: Black (`#000000`)
- Muted text: `#707070`
- Hairline borders: `#dddddd`
- Link / One UI blue: `#0381fe`
- Error / badge red: `#ef3434`

### Example Component Prompts
- "Create a Samsung-style product hero: white background, full-bleed device image. Headline at 56px Samsung Sharp Sans weight 700, color #000000. Black pill CTA button — #000000 bg, white text, 20px radius, 0px 24px padding, 40px height, 14px SamsungOneKorean weight 700. Link text 'AI 구독클럽' in #000000."
- "Design a product listing card: white background, no border, no shadow. Product heading at 24px Samsung Sharp Sans weight 700, color #000000. Price in SamsungOneKorean 16px weight 400. Black purchase button at bottom."
- "Build a top nav: white background, 47px height. Category tabs in 16px SamsungOneKorean weight 700, color #000000, active tab with 2px solid #000000 bottom border."
- "Create a filter bar: #f7f7f7 background filter chips with 40px radius, 36px height, 16px SamsungOneKorean weight 400. Separate facet filter buttons with 8px radius, #dddddd border."

### Iteration Guide
1. Black pill buttons are always the primary action — never color them blue or any brand hue
2. Samsung Sharp Sans is display-only; SamsungOneKorean handles all UI text
3. Separate sections with flat `#f7f7f7` backgrounds, not shadows or borders
4. 20px radius on buttons, 40px on filter chips, 0px on cards — consistent scale
5. Interactive blue (`#0381fe`) is for mobile OS (One UI) and links only, not e-commerce CTAs
6. Error/badge states use `#ef3434` red
7. Weight 700 dominates — Samsung is bold, direct, confident

---

## 10. Voice & Tone

Samsung's brand voice is **confident, efficient, and aspirational** — the voice of a company that has defined global consumer electronics for decades and knows it. Copy on Samsung Korea's e-commerce surface is declarative and product-forward: "갤럭시 S26 | S26+" is the headline, not a tagline. Navigation labels are functional (모바일, TV/영상∙음향, PC/주변기기), never whimsical. CTAs are direct imperatives ("구매하기", "더 알아보기") that respect the user's time without urgency tricks.

The brand shifts register by channel. The `design.samsung.com` editorial surface uses English and a more expansive, philosophical voice — "Where Design Meets Reality," "Samsung Design Vision," "Designed to Be Seen" — positioning Samsung as a cultural and aesthetic force, not just a hardware company. The One UI design system documentation speaks in precise, developer-respecting technical prose. These three voices (commerce = direct Korean, design editorial = expansive English, OS documentation = technical) coexist without contradiction because each serves a distinct audience.

| Context | Tone |
|---|---|
| E-commerce nav / CTAs | Direct, Korean, zero decoration. "구매하기", "더 알아보기". |
| Product headlines | Bold brand + model names as the headline. No superlatives. |
| Design editorial (design.samsung.com) | Visionary, philosophical, English-primary. "Where Design Meets Reality." |
| One UI documentation | Technical, precise, developer-respecting. Principles before pixel specs. |
| Sustainability / CSR | Earnest, global-citizen register. Data-backed claims. |
| Galaxy AI features | Forward-looking, benefit-first. "AI 구독클럽" as a product category, not a description. |

**Voice samples (verbatim from live www.samsung.com/sec, 2026-06-22):**
- "AI 구독클럽" — nav category label for AI subscription services *(verified live 2026-06-22)*
- "구매하기" — universal primary CTA across all product pages *(verified live 2026-06-22)*
- "삼닷 Live 보기" — live-commerce CTA on homepage featured products *(verified live 2026-06-22)*

**Forbidden register**: vague superlatives ("world's most innovative"), fear-based urgency, emoji in e-commerce CTAs, informal Korean honorifics (반말) on any branded surface.

## 11. Brand Narrative

Samsung Electronics was established in **1969** as Samsung-Sanyo Electronics (renamed Samsung Electronics in 1974), emerging from the Samsung Group founded by **이병철 (Lee Byung-chul)** in 1938. Headquartered in **Suwon, South Korea** (with global HQ functions in Seoul), Samsung Electronics became the world's largest producer of memory chips, smartphones, and televisions — a position held continuously since the 2010s. The flagship **Galaxy** mobile line, launched in 2009 with the original Galaxy smartphone, grew into the world's best-selling Android device family, anchoring Samsung's identity as a consumer-facing premium brand.

Samsung's design philosophy crystallized in the **One UI** design language, introduced with One UI 1.0 in 2018. One UI's founding premise — "Focus on the task at hand, interact naturally, be visibly comfortable, make things responsive" — represented Samsung's explicit rejection of feature-packed, visually busy interfaces in favor of content-forward, thumb-friendly layouts. The design team's stated rationale: "simple, intuitive designs to help users focus on content" rather than chrome. This principle extended to the visual language: calm backgrounds, a primary blue that "symbolizes trust, hope, and stability" drawn from Samsung's heritage, and dark mode support as a first-class feature rather than an afterthought.

What Samsung's e-commerce design refuses: brand-colored CTA buttons (Samsung runs pure black purchase buttons, not blue), decorative shadows, and any visual element that competes with the hardware being sold. What it embraces: Samsung Sharp Sans as a proprietary display font that signals ownership of the premium display space, the Galaxy brand name as the sole hero element in product headlines, and a near-monochrome palette that makes product photography the only color in the room. The result is a design system that defers to the product at every turn — a confidence move that only a brand with genuinely iconic hardware can afford.

## 12. Principles

1. **Product is the hero.** Every design decision on samsung.com defers to product photography. White canvas, no shadows, minimal chrome — the device fills the frame. *UI implication:* product cards are frameless and shadowless; the only decor is the hardware.
2. **Black is the action color.** Unlike most consumer-tech brands that reach for a colorful primary CTA, Samsung's purchase buttons are pure black. This signals premium confidence: the product sells itself, the CTA doesn't need to shout. *UI implication:* all primary buttons are the black pill system — no exceptions.
3. **Bold type, calm palette.** Samsung Sharp Sans at weight 700 declares the headline; the surrounding space is white silence. *UI implication:* reserve Samsung Sharp Sans for product names and section titles; let white space amplify the typography.
4. **Design comfort at scale.** One UI's foundational principle — "be visibly comfortable" — extends to all Samsung surfaces. Dark mode, variable font sizes, high contrast: accessibility is baked in, not bolted on. *UI implication:* all interactive states must support high-contrast mode and the full font-size range.
5. **Global identity, Korean at heart.** SamsungOneKorean is the UI typeface because the Korean market is Samsung's home market and the standard bearer for Galaxy design quality. *UI implication:* Hangul legibility at 14–16px is non-negotiable; Korean copy drives spacing and rhythm decisions.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Samsung user segments (Galaxy device owners, Korean premium electronics buyers, Galaxy AI early adopters), not individual people.*

**김민준, 33, 서울 강남.** A tech-forward software engineer upgrading to Galaxy S26 Ultra. Visits samsung.com/sec directly, comparing camera specs. Values the clean product listing — he doesn't want marketing noise, just specs, price, and a clear "구매하기." Trusts the black CTA as a signal of seriousness, not as persuasion.

**박지현, 47, 부산.** A homeowner replacing a QLED TV and pairing it with a Bespoke AI refrigerator. Navigates the "주방가전" and "TV/영상∙음향" categories. Appreciates that the Samsung.com KR e-commerce experience doesn't feel different from a premium department store — clean, authoritative, product-first.

**이수아, 26, 서울 종로.** A Galaxy Z Fold early adopter who follows samsung.com/design for design vision content. Reads "Where Design Meets Reality" editorials and follows Samsung Design's Instagram. Connects the hardware design to the One UI software aesthetic — she experiences them as the same brand promise.

**George Whitmore, 38, London.** An IT procurement manager choosing Galaxy smartphones for a 500-seat enterprise deployment. Uses Samsung's business portal. Values the consistency between One UI and Samsung's global brand presence — the same confident, low-decoration design language in every market signals enterprise-grade reliability.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Single line in black `#000000` at 16px SamsungOneKorean: "검색 결과가 없습니다." One black pill CTA to return home or adjust filters. No illustration, no decorative element. |
| **Empty (comparison, no products added)** | `#f7f7f7` surface card with a neutral message in `#707070` muted text. Thin `#dddddd` hairline card outline. |
| **Loading (product listing)** | `#f7f7f7` skeleton blocks at exact final dimensions for product image, title, price areas. No shimmer animation — static flat grey consistent with shadowless system. |
| **Loading (page navigation)** | Thin black progress bar at top of viewport. Samsung's commerce pages use native browser load with no custom loader overlay. |
| **Error (form validation)** | Field-level red text in `#ef3434` below the input. Plain Korean description of what is invalid. No inline icon — text is the signal. |
| **Error (API / add to cart fail)** | Inline banner below the action button. `#ef3434`-tinted background, `#000000` text. Message states the issue concretely (재고 없음, 결제 오류 등). |
| **Success (order placed)** | Dedicated confirmation page with order number. Clean white layout, black typography. No animation or confetti — the confirmation is the hero, presented directly. |
| **Skeleton** | `#f7f7f7` flat rectangle at content dimensions, no pulse shimmer. Consistent with the near-shadowless, flat visual language. |
| **Disabled** | Opacity 0.4 on button surface and text together. Black CTA fades to `rgba(0,0,0,0.4)` rather than switching to grey — preserves brand read. |
| **Out of stock** | Product card retains image and title; "구매하기" button replaced by `#707070` muted text "일시품절" (temporary out of stock). No color change to the card itself. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, selection ticks, radio/checkbox |
| `motion-fast` | 150ms | Button press, hover, focus ring |
| `motion-standard` | 250ms | Dropdown open, tab switch, modal |
| `motion-slow` | 400ms | Page-level hero reveal, carousel slide |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, menus, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Hover, two-way transitions |

**Signature motions**:

1. **Hero carousel**: Full-bleed product images slide horizontally at `motion-slow / ease-standard`. The image is always in motion (auto-advancing at 5s intervals); text overlay fades rather than slides to reduce cognitive noise.
2. **Button press**: Black CTA shifts background to `#212425` in `motion-fast` with no scale transform — Samsung's press state is color-only, not kinetic. Consumer electronics gravity demands steadiness.
3. **Product card hover**: A subtle shadow lift (`0 4px 16px rgba(0,0,0,0.12)`) emerges at `motion-standard / ease-enter` on desktop product listing hover states — the only elevation in an otherwise flat system.
4. **One UI transitions**: On the mobile OS layer, Samsung uses `ease-enter` curves at 300ms for screen transitions, consistent with Android Material principles but calibrated to Samsung's more restrained tempo.
5. **Reduce motion**: Under `prefers-reduced-motion: reduce`, hero carousel pauses auto-advance, button hover is instant, and all transitions collapse to `motion-instant`. The commerce surface remains fully navigable without motion.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://www.samsung.com/sec/ (homepage, primary surface)
- https://www.samsung.com/sec/smartphones/ (smartphones listing page)

Key raw measurements:
- body: font-family SamsungOneKorean, Dotum, 돋움, sans-serif; color rgb(0,0,0); font-size 16px
- nav links (모바일, TV/영상∙음향): 16px / 700 / SamsungOneKorean; color #000000; padding 14px 12px; height 47px
- H2 hero headline: 56px / 700 / "Samsung Sharp Sans", SamsungOneKorean; color #000000
- H2 product card (Galaxy S26 | S26+): 24px / 700 / "Samsung Sharp Sans"; color #000000
- Primary CTA "구매하기": bg rgb(0,0,0) / color rgb(255,255,255) / radius 20px / padding 0px 24px / height 40px / 14px/700 SamsungOneKorean
- "삼닷 Live 보기" button: same spec as 구매하기 (black pill)
- "더 알아보기" link: 14px / 700 / transparent bg / underline on hover
- Filter chips: bg #f7f7f7 / radius 40px / height 36px / 16px/400
- Filter buttons: bg #ffffff / border 1px #dddddd / radius 8px / height 40px / 14px/700

From developer.samsung.com/one-ui/color/system.html:
- Primary Dark (light theme): #0072de
- Primary (interactive): #0381fe
- Color Control Activated: #3e91ff
- Quote: "Blue symbolizes trust, hope, and stability, and it's also a key part of Samsung's heritage and brand identity."

Brand narrative: Samsung Electronics founded 1969 (publicly documented); Galaxy line launched 2009; One UI introduced 2018; HQ Suwon/Seoul Korea — widely documented public facts.

Voice samples (§10) verbatim from live homepage 2026-06-22.
Personas (§13) are fictional archetypes informed by publicly observable Samsung user segments. Names are illustrative; they do not refer to real people.
-->
