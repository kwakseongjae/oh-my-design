---
id: hwahae
name: Hwahae
display_name_kr: 화해
country: KR
category: consumer-tech
homepage: "https://www.hwahae.co.kr"
primary_color: "#00d5ce"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=hwahae.co.kr&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "brand = turquoise flower mark (#00d5ce logo / #22d3d6 live blog accent / #00a5aa darker UI teal); amber (#ffaa3c) is the functional rating-star accent and the single most visible hue on the product surface. Product web runs Pretendard Variable on a #f7f7f7 canvas; the official tech blog runs Spoqa Han Sans."
  colors:
    brand: "#00d5ce"
    brand-bright: "#22d3d6"
    brand-deep: "#00a5aa"
    tint: "#eefbfb"
    rating: "#ffaa3c"
    info: "#467dff"
    alert: "#ff5555"
    ink: "#000000"
    ink-soft: "#111111"
    ink-blog: "#212529"
    body: "#3d3d3d"
    muted: "#666666"
    faint: "#999999"
    placeholder: "#aaaaaa"
    divider: "#d8d8d8"
    hairline: "#e8e8e8"
    canvas: "#ffffff"
    surface: "#f7f7f7"
    on-brand: "#ffffff"
  typography:
    family: { product: "Pretendard Variable", blog: "Spoqa Han Sans" }
    blog-display: { size: 32, weight: 700, lineHeight: 1.44, tracking: -1.0, use: "Blog section heads, Spoqa Han Sans Bold" }
    section:    { size: 18, weight: 600, lineHeight: 1.33, tracking: -0.2, use: "Product section titles, Pretendard SemiBold" }
    nav:        { size: 15, weight: 600, lineHeight: 1.5, use: "Top nav item (active 600 / inactive 400)" }
    card-title: { size: 14, weight: 600, lineHeight: 1.5, use: "Card / category labels, Pretendard SemiBold" }
    body:       { size: 16, weight: 400, lineHeight: 1.5, use: "Standard body text, Pretendard" }
    label:      { size: 14, weight: 400, lineHeight: 1.5, use: "Search / dense UI text, Pretendard" }
    caption:    { size: 12, weight: 400, lineHeight: 1.5, use: "Button labels, metadata" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 48 }
  rounded: { xs: 4, sm: 8, md: 16, lg: 20, full: 99999 }
  shadow:
    card: "rgba(0, 0, 0, 0.08) 0px 2px 8px 0px"
    hairline-ring: "rgb(232, 232, 232) 0px 0px 0px 1px"
    none: "none"
  components:
    button-primary: { type: button, bg: "#00d5ce", fg: "#ffffff", radius: "8px", font: "16px / 600", use: "Brand turquoise primary action — app-install / key CTA" }
    button-outline: { type: button, bg: "#ffffff", fg: "#3d3d3d", border: "1px solid #e8e8e8", radius: "4px", padding: "0 8px", height: "24px", font: "12px / 400", use: "Secondary chip (로그인) — white with hairline" }
    nav-tab: { type: tab, fg: "#111111", active: "text #111111 weight 600", font: "15px / 400", use: "Top nav (홈 / 랭킹 / 어워드)" }
    product-card: { type: card, bg: "#ffffff", radius: "16px", shadow: "rgba(0, 0, 0, 0.08) 0px 2px 8px", use: "Product / ranking card — 1px #e8e8e8 hairline ring" }
    tint-card: { type: card, bg: "#eefbfb", fg: "#000000", radius: "16px", use: "Pale-mint brand tint section / card" }
    search-input: { type: input, bg: "#ffffff", border: "1px solid #e8e8e8", radius: "8px", fg: "#000000", use: "Header search — #aaaaaa placeholder" }
    rating-badge: { type: badge, bg: "#ffffff", fg: "#ffaa3c", radius: "4px", font: "12px / 600", use: "Amber star-rating value" }
    info-chip: { type: badge, bg: "#ffffff", fg: "#467dff", radius: "4px", font: "12px / 600", use: "Blue inline accent / info tag" }
  components_harvested: true
---

# Design System Inspiration of Hwahae

## 1. Visual Theme & Atmosphere

Hwahae (화해) is Korea's dominant cosmetics-review and ingredient-analysis platform, and its product web reads like a clean, content-dense beauty index rather than a glossy brand microsite. The canvas is a soft neutral grey (`#f7f7f7`) layered over pure white (`#ffffff`) cards, so the imagery — product shots, ranking thumbnails, brand tiles — carries all the color and the chrome stays quiet. Text sits in pure black (`#000000`) for headings and a softened near-black (`#111111`) for navigation, giving the page an honest, encyclopedic weight. The brand's signature is a vivid turquoise flower mark (`#00d5ce`), echoed live on the engineering blog as `#22d3d6` and in UI accents as the deeper teal `#00a5aa`, all resting on a barely-there pale-mint tint (`#eefbfb`) that appears in hero and section backgrounds.

What dominates the live product surface, though, is amber (`#ffaa3c`) — the rating-star color. Because Hwahae is fundamentally a review and ranking service, the amber star appears more than any other accent on the page, training the eye to read it as "score / trust." A small functional palette rounds it out: an action blue (`#467dff`) for inline links and tags, and a coral (`#ff5555`) for sale and wishlist signals. The neutrals run a long, careful ladder — `#3d3d3d` body, `#666666` secondary, `#999999` captions, `#aaaaaa` placeholders, `#d8d8d8` dividers, `#e8e8e8` hairlines — the kind of granular grey scale you only get from a real design system.

That design system is explicit: utility classes across the site are namespaced `hds-` (Hwahae Design System), and Hwahae's product-design team has publicly documented its construction — a Foundation layer (Color, Typography, Grid, Radius, Spacing) feeding Components and Templates, built in Figma and shipped through Storybook. The geometry is soft and consistent: 8px is the workhorse radius, 16px for cards, 4px for tight chips, full-round (99999px) for pills and 50% for avatars; the blog leans to a rounder 20px. Depth is minimal — a single light card shadow (`rgba(0, 0, 0, 0.08) 0px 2px 8px`) and a 1px `#e8e8e8` hairline ring do almost all the separating. Typography is split by surface: the product web is set in **Pretendard Variable** at a dense, app-like scale (18px section heads, 16px body, 14–15px UI), while the official tech blog is set in **Spoqa Han Sans** at a larger editorial 32px / weight 700.

**Key Characteristics:**
- Turquoise flower brand mark (`#00d5ce`) — quiet on chrome, loud as identity; live blog accent `#22d3d6`, deeper UI teal `#00a5aa`
- Amber (`#ffaa3c`) as the most-present accent — it is the rating-star color of a review-first product
- Pretendard Variable on the product web; Spoqa Han Sans on the engineering/design blog
- Pure black (`#000000`) headings, softened `#111111` nav — honest, index-like text
- Soft neutral `#f7f7f7` canvas with pure-white (`#ffffff`) cards carrying the imagery
- Pale-mint tint (`#eefbfb`) for hero/section backgrounds — the brand turquoise at 5% presence
- Granular grey ladder (`#3d3d3d` → `#666666` → `#999999` → `#aaaaaa`) from a real `hds-` design system
- Minimal depth: one `rgba(0, 0, 0, 0.08)` card shadow + 1px `#e8e8e8` hairline ring
- Soft radius scale — 8px workhorse, 16px cards, 4px chips, 99999px pills, 20px on the blog

## 2. Color Palette & Roles

### Brand
- **Hwahae Turquoise** (`#00d5ce`): The flower-mark brand color and primary identity hue. Used for the logo, brand moments, and the primary action color.
- **Turquoise Bright** (`#22d3d6`): The live turquoise measured on the official tech blog — the same brand hue rendered slightly brighter on screen.
- **Turquoise Deep** (`#00a5aa`): A darker interactive teal used for accent text and small UI elements on the product surface.
- **Mint Tint** (`#eefbfb`): A near-white pale mint, the brand turquoise at minimal presence — hero and section backgrounds.

### Functional Accents
- **Rating Amber** (`#ffaa3c`): The star-rating color — the single most-present accent on the product web, signalling score and trust.
- **Action Blue** (`#467dff`): Inline links, info tags, and interactive accents.
- **Alert Coral** (`#ff5555`): Sale prices, wishlist/heart, and attention signals.

### Text & Ink
- **Ink Black** (`#000000`): Primary headings and high-emphasis text.
- **Ink Soft** (`#111111`): Navigation labels and strong UI text — a softened near-black.
- **Ink Blog** (`#212529`): The blog body/heading text color (Spoqa Han Sans surface).
- **Body** (`#3d3d3d`): Secondary body copy and button labels.
- **Muted** (`#666666`): Tertiary text and descriptions.
- **Faint** (`#999999`): Captions, metadata, low-emphasis labels.
- **Placeholder** (`#aaaaaa`): Input placeholder text.

### Surface & Lines
- **Canvas White** (`#ffffff`): Card surfaces, text on brand/dark, and the cleanest backgrounds.
- **Surface Grey** (`#f7f7f7`): The page background — a soft neutral that lets imagery carry the color.
- **Divider** (`#d8d8d8`): Heavier separators and segmented controls.
- **Hairline** (`#e8e8e8`): Card outlines, dividers, and the 1px ring that replaces shadow.
- **On-Brand** (`#ffffff`): Foreground text/icons on the turquoise brand color.

## 3. Typography Rules

### Font Family
- **Product web**: `Pretendard Variable` (with system fallbacks: `-apple-system`, `Apple SD Gothic Neo`, `Noto Sans KR`, `Roboto`) — the de-facto Korean product font, used for all product-surface text.
- **Blog**: `Spoqa Han Sans` (with `Roboto`, `Malgun Gothic` fallbacks) — used on the official engineering/design blog at editorial sizes.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Blog Display | Spoqa Han Sans | 32px (2.00rem) | 700 | 1.44 (46px) | -1.0px | Blog section heads ("Tech", "추천 아티클") |
| Section Title | Pretendard Variable | 18px (1.13rem) | 600 | 1.33 | -0.2px | Product section titles ("급상승 랭킹") |
| Nav Link | Pretendard Variable | 15px (0.94rem) | 600 / 400 | 1.5 | normal | Active 600, inactive 400 |
| Card Title | Pretendard Variable | 14px (0.88rem) | 600 | 1.5 (21px) | normal | Category / card labels |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | 1.5 (24px) | normal | Standard reading text |
| Label | Pretendard Variable | 14px (0.88rem) | 400 | 1.5 | normal | Search, dense UI text |
| Caption | Pretendard Variable | 12px (0.75rem) | 400 | 1.5 | normal | Button labels, metadata |

### Principles
- **Two surfaces, two fonts**: Pretendard Variable owns the product web (dense, app-like); Spoqa Han Sans owns the blog (editorial, larger). They never mix on one surface.
- **Dense product scale**: The product web tops out at an 18px section head with a 16px body — a deliberately app-native, information-rich scale rather than a marketing-hero scale.
- **Weight as hierarchy**: SemiBold (600) carries titles and active nav; Regular (400) carries body, inactive nav, and captions. Bold (700) is reserved for blog display.
- **Tight tracking on heads**: Headings carry slight negative tracking (-0.2px product, -1.0px blog); body stays at normal tracking for hangul legibility.

## 4. Component Stylings

### Buttons

**Primary (Brand Turquoise)**
- Background: `#00d5ce`
- Text: `#ffffff`
- Radius: 8px
- Font: 16px Pretendard weight 600
- Use: Brand turquoise primary action — app-install and key CTAs (the identity color carried into action)

**Secondary Chip (Outline)**
- Background: `#ffffff`
- Text: `#3d3d3d`
- Border: 1px solid `#e8e8e8`
- Radius: 4px
- Padding: 0px 8px
- Height: 24px
- Font: 12px Pretendard weight 400
- Use: Compact secondary action ("로그인") — white with hairline border

**Language / Icon Button**
- Background: transparent
- Text: `#111111`
- Radius: 8px
- Padding: 10px
- Height: 44px
- Use: Header utility buttons ("한국어", icon toggles) — 44px touch target

### Inputs & Forms

**Header Search**
- Background: `#ffffff`
- Border: 1px solid `#e8e8e8`
- Radius: 8px
- Text: `#000000`
- Placeholder: `#aaaaaa`
- Font: 14px Pretendard weight 400
- Use: Top search field

### Cards & Containers

**Product / Ranking Card**
- Background: `#ffffff`
- Radius: 16px
- Shadow: `rgba(0, 0, 0, 0.08) 0px 2px 8px`
- Border: 1px solid `#e8e8e8` (hairline ring on shadowless variants)
- Use: Product, ranking, and brand tiles — imagery carries the color

**Mint Tint Card**
- Background: `#eefbfb`
- Text: `#000000`
- Radius: 16px
- Use: Pale-mint brand-tinted section / feature card

### Badges

**Rating Star (Amber)**
- Background: `#ffffff`
- Text: `#ffaa3c`
- Radius: 4px
- Font: 12px Pretendard weight 600
- Use: Star-rating score value — the product's most-present accent

**Info Chip (Blue)**
- Background: `#ffffff`
- Text: `#467dff`
- Radius: 4px
- Font: 12px Pretendard weight 600
- Use: Inline accent / info tag

**Image Count Pill**
- Background: `rgba(0, 0, 0, 0.4)`
- Text: `#ffffff`
- Radius: 4px
- Padding: 4px 8px
- Use: Image counter overlay on carousels ("1/10")

### Navigation
- Background: `#ffffff`
- Text: `#111111`
- Font: 15px Pretendard weight 400 (active 600)
- Active: weight 600, `#111111`
- Use: Top horizontal nav ("홈", "랭킹", "어워드")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://www.hwahae.co.kr ; https://blog.hwahae.co.kr/ ; https://blog.hwahae.co.kr/all/tech/13236
**Tier 2 sources:** getdesign.md/hwahae — not listed ("No designs found for hwahae"); styles.refero.design — no hwahae-specific match (KR under-coverage)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px
- Notable: Touch-utility buttons land at a 44px height with 10px padding; compact chips drop to 0px 8px

### Grid & Container
- Centered, content-first layout: ranking and product cards arranged in horizontally scrolling rows and responsive grids
- Section bands stack vertically with quiet section titles (18px) introducing each ranking/recommendation block
- White (`#ffffff`) cards float on the soft `#f7f7f7` canvas; pale-mint (`#eefbfb`) tints mark hero/feature zones
- Cards use 16px radius and cluster related products, rankings, and brands

### Whitespace Philosophy
- **Imagery carries color, chrome stays quiet**: the neutral canvas and white cards keep product photography the loudest thing on the page
- **Dense but breathable**: an app-native information density (many rankings/products) softened by generous card radii and consistent gutters
- **Flat separation**: sections separate by background tint (`#f7f7f7` vs `#ffffff`) and `#e8e8e8` hairlines more than by elevation

### Border Radius Scale
- Tight (4px): chips, small badges, count pills
- Workhorse (8px): buttons, inputs, utility controls
- Card (16px): product/ranking/brand cards — the dominant container radius
- Blog (20px): editorial cards on the tech blog
- Full (99999px / 50%): pills and circular avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, tinted sections |
| Hairline (Level 1) | `1px solid #e8e8e8` / `rgb(232, 232, 232) 0px 0px 0px 1px` ring | White card outlines, dividers |
| Card (Level 2) | `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px` | Floating product / ranking cards |

**Shadow Philosophy**: Hwahae is a near-flat system. Live inspection found the overwhelming majority of surfaces shadowless; where elevation is needed, a single soft card shadow (`rgba(0, 0, 0, 0.08) 0px 2px 8px`) or a 1px `#e8e8e8` hairline ring does the work. This keeps the review/ranking content scannable and fast, and lets product imagery — not chrome — provide visual interest. Emphasis is reached through color (amber `#ffaa3c` ratings, turquoise `#00d5ce` brand) rather than depth.

## 7. Do's and Don'ts

### Do
- Use Pretendard Variable for the product web and Spoqa Han Sans for the blog — keep them per-surface
- Keep the brand turquoise (`#00d5ce`) for identity and the primary action; let imagery carry color elsewhere
- Use amber (`#ffaa3c`) for rating stars — it is the product's trust signal
- Set the canvas to soft grey (`#f7f7f7`) with white (`#ffffff`) cards so photography stays loudest
- Separate with `#e8e8e8` hairlines and a single soft card shadow, not heavy elevation
- Use the soft radius scale — 8px controls, 16px cards, 4px chips, full-round pills
- Use pure black (`#000000`) for headings and softened `#111111` for nav
- Reserve action blue (`#467dff`) and coral (`#ff5555`) for links and sale/wishlist signals

### Don't
- Don't spread the turquoise across many elements — it is identity, not decoration
- Don't stack heavy drop shadows — Hwahae separates with hairlines and tint
- Don't mix Spoqa Han Sans into the product web or Pretendard into the blog
- Don't use amber for anything but ratings/scores — it would dilute the trust signal
- Don't set the canvas pure white edge-to-edge — the `#f7f7f7` grey is what frames the cards
- Don't use sharp 0px corners on cards or controls — the system is consistently softened
- Don't introduce a competing saturated accent beyond the functional amber/blue/coral set
- Don't oversize product-web headings — the scale is deliberately dense and app-native

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, ranking rows scroll horizontally, cards full-bleed |
| Tablet | 640-1024px | 2-up product grids, moderate gutters |
| Desktop | 1024-1440px | Centered content, multi-column ranking/recommendation bands |

### Touch Targets
- Header utility buttons at 44px height (10px padding) — comfortable tap targets
- Compact chips ("로그인") at 24px height for dense desktop chrome
- Ranking cards sized for thumb-scroll on mobile, click on desktop

### Collapsing Strategy
- Section bands maintain their quiet 18px titles; card grids reflow multi-column → single column
- Horizontal ranking rows convert to swipe-scroll on narrow viewports
- White/tinted (`#ffffff` / `#eefbfb`) section treatment is preserved across breakpoints

### Image Behavior
- Product and ranking thumbnails keep 16px radius across sizes
- Cards retain the soft `rgba(0, 0, 0, 0.08)` shadow or `#e8e8e8` hairline at all breakpoints
- Carousels show an image-count pill overlay (`rgba(0, 0, 0, 0.4)`, white text)

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / primary action: Hwahae Turquoise (`#00d5ce`)
- Rating accent: Amber (`#ffaa3c`)
- Inline link / info: Action Blue (`#467dff`)
- Sale / wishlist: Coral (`#ff5555`)
- Mint tint background: (`#eefbfb`)
- Canvas: Surface Grey (`#f7f7f7`); cards White (`#ffffff`)
- Heading text: Ink Black (`#000000`); nav `#111111`
- Body / labels: `#3d3d3d`; muted `#666666`; faint `#999999`
- Placeholder: `#aaaaaa`; hairline `#e8e8e8`; divider `#d8d8d8`

### Example Component Prompts
- "Create a product-ranking card: white `#ffffff` background, 16px radius, soft shadow `rgba(0, 0, 0, 0.08) 0px 2px 8px`, 1px `#e8e8e8` hairline. Title 14px Pretendard weight 600 `#000000`; an amber `#ffaa3c` star-rating value at 12px weight 600."
- "Build a header on `#f7f7f7`: white search field, 8px radius, 1px solid `#e8e8e8`, `#aaaaaa` placeholder, 14px Pretendard. Nav links 15px Pretendard `#111111`, active weight 600. A turquoise `#00d5ce` primary button with white text, 8px radius."
- "Design a mint feature section: `#eefbfb` background. Section title 18px Pretendard weight 600, -0.2px tracking, `#000000`. Cards inside use white `#ffffff` with 16px radius and `#e8e8e8` hairline."
- "Make a blog article head: Spoqa Han Sans 32px weight 700, line-height 1.44, -1.0px tracking, color `#212529`, on white, in a 20px-radius editorial card."

### Iteration Guide
1. Pretendard Variable for the product web; Spoqa Han Sans for the blog — never cross them
2. Turquoise (`#00d5ce`) is identity + primary action; don't spread it
3. Amber (`#ffaa3c`) means rating/score — keep it to stars and trust signals
4. Canvas is `#f7f7f7` grey, cards are `#ffffff` white — imagery is the loudest layer
5. Separate with `#e8e8e8` hairlines and one soft card shadow, not heavy elevation
6. Radius: 8px controls, 16px cards, 4px chips, full-round pills, 20px on the blog
7. Headings `#000000`, nav `#111111`, body `#3d3d3d` — a careful neutral ladder

---

## 10. Voice & Tone

Hwahae's voice is **trustworthy, plain-spoken, and evidence-first** — a beauty guide that turns an opaque, marketing-heavy category (cosmetics) into transparent ingredients, real reviews, and honest rankings. The product name itself, 화해 ("화장품을 해석하다" — "decoding cosmetics"), sets the register: explanatory, on the user's side, never a sales funnel. Copy leans on real, user-generated data — rankings "화해 고객들이 직접 선택한" (chosen directly by Hwahae users), "급상승 랭킹" (rising ranking), and skin-type and age-tailored recommendations — rather than brand superlatives.

| Context | Tone |
|---|---|
| Section titles | Plain, functional, data-framed. "급상승 랭킹", "내 피부에 꼭 맞는 제품 랭킹", "나이대별 추천". |
| Rankings / labels | Neutral and concrete. Category, skin-type, and age labels; amber score values. |
| CTAs | Low-pressure, helpful. "화해 앱에서 더 편리하게", "검색 페이지로 이동". |
| Blog (engineering/design) | Reflective, first-person, craft-oriented. "사용 가능한 진짜 디자인 시스템을 만드는 여정". |
| Trust / data copy | Calm and specific — leans on user-generated rankings and ingredient analysis, not hype. |

**Voice samples (verbatim from live surfaces):**
- "화장품 정보는 화해 — 화장품 성분과 정보, 리뷰 확인하고 구매 하세요" — homepage title (decoding/ingredient-first). *(verified live 2026-06-26)*
- "화해 고객들이 직접 선택한 랭킹" — homepage section (user-evidence framing). *(verified live 2026-06-26)*
- "사용 가능한 진짜 디자인 시스템을 만드는 여정" — official tech blog (craft, candor). *(verified live 2026-06-26)*

**Forbidden register**: cosmetic-marketing superlatives, unverifiable efficacy claims, fear-based "your skin is failing" pitches, and undefined jargon left unexplained. Hwahae's whole premise is decoding, so copy explains rather than dazzles.

## 11. Brand Narrative

Hwahae (화해) launched in **2013** to solve a uniquely consumer-unfriendly problem in Korean cosmetics: severe **information asymmetry** (화장품 정보 비대칭). Shoppers could not easily see what was actually in a product or trust the marketing on the box. Hwahae's founding act was to make cosmetic **ingredients legible** — surfacing full ingredient lists, safety/grade information, and, crucially, real user **reviews** — so people could choose with evidence rather than advertising. Over its first decade the service grew from an ingredient lookup into a full beauty platform spanning makeup, inner beauty, sample experiences (샘플체험), ingredient analysis, reviews, and direct purchase, becoming the category's dominant review-and-ranking destination in Korea. (Source: Hwahae product-design team, official tech blog, *"사용 가능한 진짜 디자인 시스템을 만드는 여정"*, 2023-08-03.)

That same blog post documents the maturation of Hwahae's design language. After ten years of rapid experimentation, the team found legacy screens and per-page color/layout drift accumulating as design and engineering debt — at odds with Hwahae's "experiment fast, validate" culture. In **January 2023** they committed to a proper design system (the `hds-` namespace seen across the live site = Hwahae Design System), built as a **Foundation** layer (Color, Typography, Grid, Radius, Spacing) feeding reusable **Components** and **Templates**, authored in Figma and shipped to engineers through Storybook and a TestApp QA loop.

What Hwahae's design refuses, visible on the surface: the glossy, color-saturated chrome of beauty-brand marketing, and dark-pattern urgency. What it embraces: a quiet neutral canvas that lets product imagery and user data lead; a single trustworthy turquoise identity; amber rating stars as the honest trust signal; and a real, documented design system that keeps a sprawling, content-heavy product consistent.

## 12. Principles

1. **Decode, don't sell.** Hwahae exists to make cosmetics legible — ingredients, grades, and real reviews over marketing claims. *UI implication:* lead with data (rankings, ratings, ingredients); keep chrome neutral so evidence is the loudest element.
2. **User evidence over brand voice.** Rankings are framed as "chosen by Hwahae users." *UI implication:* surface ratings (amber `#ffaa3c`) and review counts prominently; never visually privilege a brand without disclosure.
3. **Imagery carries color, chrome stays quiet.** *UI implication:* soft `#f7f7f7` canvas, white cards, restrained accents — product photography is the color layer.
4. **One identity hue.** Turquoise (`#00d5ce`) is the brand; don't dilute it. *UI implication:* reserve turquoise for identity and the primary action.
5. **Consistency at scale via a real system.** The `hds-` Foundation→Components→Templates pipeline exists so a content-heavy product stays coherent. *UI implication:* reuse tokens (the granular grey ladder, the 8/16px radius scale) rather than re-inventing per page.
6. **Flat and fast.** *UI implication:* minimal elevation — hairlines and one soft shadow — to keep dense ranking content quick to scan.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Hwahae user segments (Korean beauty shoppers comparing ingredients and reviews), not individual people.*

**이서연, 26, 서울.** Checks every new product's ingredient list and Hwahae rating before buying. Distrusts brand marketing; trusts the amber score and the volume of real reviews. Chose Hwahae because it decodes ingredients she can't parse on the box.

**박지호, 33, 경기.** Sensitive, acne-prone skin. Relies on skin-type-tailored rankings ("내 피부에 꼭 맞는 제품 랭킹") to avoid trial-and-error. Values that the interface is calm and data-first rather than a hard-sell beauty funnel.

**최유진, 21, 부산.** A student following age-band recommendations ("나이대별 추천") and rising rankings to find affordable products. Appreciates the fast, scannable card grid and that imagery — not ads — leads the page.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no ranking / search results)** | Soft `#f7f7f7` canvas. A single Ink (`#000000`) line explaining no matching products, with a quiet path to broaden filters. No illustration clutter. |
| **Empty (saved / wishlist none yet)** | Faint (`#999999`) single line: nothing saved yet, plus a route back to rankings. Calm and honest. |
| **Loading (ranking fetch)** | Skeleton cards on white `#ffffff` at final 16px-radius dimensions, soft pulse — no heavy shimmer, consistent with the near-flat system. |
| **Loading (image carousel)** | Image-count pill (`rgba(0, 0, 0, 0.4)`, white text) holds position while the next image loads. |
| **Error (load failed)** | Inline message in Ink (`#000000`) with a plain-language explanation and a retry — never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "필수". |
| **Success (review submitted / saved)** | Brief inline confirmation in a calm tone; next-step detail linked below. No celebratory emoji. |
| **Skeleton** | White `#ffffff` blocks at final dimensions, 16px radius, soft pulse. |
| **Disabled** | Faint (`#999999`) text on reduced-opacity surface; turquoise actions fade rather than turn grey, to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus |
| `motion-standard` | 200ms | Card / section reveal, carousel slide, sheet |
| `motion-slow` | 320ms | Page-level transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, carousels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the near-flat, content-first aesthetic. Cards and ranking rows fade-in from below at `motion-standard / ease-enter`; carousels slide at the same timing; chips respond to press with a subtle scale/opacity shift. No bounce or spring — a trust-and-evidence product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on two brand-owned surfaces:
- https://www.hwahae.co.kr — Pretendard Variable; canvas rgb(247,247,247) #f7f7f7 / white cards;
  black #000000 headings, #111111 nav; amber rgb(255,170,60) #ffaa3c rating stars (most-present accent);
  teal rgb(0,165,170) #00a5aa; blue rgb(70,125,255) #467dff; coral rgb(255,85,85) #ff5555;
  pale-mint rgb(238,251,251) #eefbfb; radii 8px/16px/4px/99999px/50%; card shadow rgba(0,0,0,0.08) 0px 2px 8px;
  hairline ring rgb(232,232,232) 0px 0px 0px 1px; utility classes namespaced hds- (Hwahae Design System).
- https://blog.hwahae.co.kr/ — Spoqa Han Sans; body rgb(33,37,41) #212529; H3 32px/700/-1px/46px;
  live brand turquoise rgb(34,211,214) #22d3d6; card radius 20px.
- Logo/OG (https://static.hwahae.co.kr/og/OG_1200.png) — turquoise flower mark sampled #00d5ce / #00d6cf / #00dad4
  with black "hwahae" wordmark on pale-mint background.

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from live surfaces (homepage title/section, official tech blog post title).

Brand narrative (§11) is sourced from Hwahae's official product-design team tech blog post
"사용 가능한 진짜 디자인 시스템을 만드는 여정" (https://blog.hwahae.co.kr/all/tech/13236, 2023-08-03):
2013 founding to solve cosmetics information asymmetry; growth into a full beauty platform; January 2023
design-system adoption (HDS, Foundation→Components→Templates, Figma + Storybook). These are brand-stated facts
from that post; broader market-position claims are general public knowledge, not separately quoted.

Personas (§13) are fictional archetypes informed by publicly observable Hwahae user segments
(Korean beauty shoppers comparing ingredients and reviews). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "imagery carries color, chrome stays quiet", "amber is the honest trust signal")
are editorial readings connecting Hwahae's observed design to its decoding-cosmetics positioning, not directly
quoted Hwahae statements.
-->
