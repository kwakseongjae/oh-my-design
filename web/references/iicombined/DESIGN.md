---
id: iicombined
name: IICOMBINED
display_name_kr: 아이아이컴바인드
country: KR
category: ecommerce
homepage: "https://www.gentlemonster.com"
primary_color: "#111111"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=gentlemonster.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "House design language of IICOMBINED (parent of Gentle Monster, Tamburins, Nudake). primary = near-black ink (#111111) used as text and the solid-button fill on gentlemonster.com; Tamburins runs a parallel near-black ink (#1d1d1d). Achromatic black/white system — no chromatic brand hue. Display voice = custom Gentle Monster Serif; UI = GentleSans (Light 350 / Regular 400) on GM, Pretendard on Tamburins."
  colors:
    primary: "#111111"
    ink-alt: "#1d1d1d"
    ink-pure: "#000000"
    canvas: "#ffffff"
    surface: "#f3f4f6"
    surface-alt: "#f2f4f5"
    on-dark: "#ffffff"
    muted: "#858585"
    muted-deep: "#343434"
    muted-mid: "#555555"
    navy-accent: "#27455c"
    alert: "#d12b2b"
  typography:
    family: { display: "Gentle Monster Serif", sans: "GentleSans", sans-alt: "Pretendard" }
    campaign-serif: { size: 24, weight: 400, lineHeight: 1.17, tracking: 0, use: "Editorial campaign H1 over imagery, Gentle Monster Serif" }
    section-heading: { size: 24, weight: 500, lineHeight: 1.00, use: "Section / campaign H2, uppercase, Pretendard (Tamburins)" }
    subhead: { size: 18, weight: 500, lineHeight: 1.57, use: "Collection subhead, Pretendard (Tamburins)" }
    product-title: { size: 18, weight: 400, lineHeight: 1.50, use: "Product / item heading, GentleSans / Pretendard" }
    body: { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, GentleSans Regular" }
    nav: { size: 16, weight: 350, lineHeight: 1.00, use: "Top nav label, GentleSans Light" }
    meta: { size: 13, weight: 350, lineHeight: 1.38, use: "Menu / overlay label, GentleSans Light" }
    caption: { size: 12, weight: 350, lineHeight: 1.42, use: "Product name / fine label, GentleSans Light" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 23, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 8, md: 25, lg: 45, full: 9999 }
  shadow:
    none: "none"
  components:
    button-outline: { type: button, fg: "#111111", radius: "25px", padding: "0px 23px", height: "36px", font: "16px / 400 GentleSans", border: "1px solid #ffffff", use: "Primary CTA over imagery — 구매하기 / 캠페인 보기, transparent fill, hairline pill" }
    button-solid: { type: button, bg: "#111111", fg: "#ffffff", radius: "8px", height: "48px", font: "13px / 400 GentleSans", use: "Solid consent / commit action — uppercase, near-black fill" }
    button-pill-dark: { type: button, fg: "#1d1d1d", radius: "9999px", height: "45px", font: "10px / 400 Pretendard", border: "1px solid #000000", use: "Tamburins outlined pill — full-round, hairline black on white" }
    nav-link: { type: tab, fg: "#111111", font: "16px / 350 GentleSans", use: "Top nav item", active: "white #ffffff label when over dark hero imagery" }
    product-card: { type: card, bg: "#ffffff", fg: "#111111", radius: "0px", use: "Full-bleed product / campaign tile — no border, no shadow, image-led" }
    surface-card: { type: card, bg: "#f3f4f6", fg: "#111111", radius: "0px", use: "Tinted grey content band on canvas" }
    overlay-label: { type: badge, fg: "#ffffff", font: "13px / 350 GentleSans", use: "White uppercase label set over campaign imagery" }
    footer-link: { type: listItem, fg: "#111111", font: "16px / 400 GentleSans", use: "Footer / menu navigation link" }
  components_harvested: true
---

# Design System Inspiration of IICOMBINED

## 1. Visual Theme & Atmosphere

IICOMBINED (아이아이컴바인드) is the Korean creative house behind Gentle Monster (eyewear), Tamburins (fragrance), and Nudake (dessert art), and its shared design language reads less like an e-commerce site and more like an installation-grade gallery that happens to sell products. The house aesthetic is rigorously achromatic: a stark canvas of pure white (`#ffffff`) and near-black ink (`#111111` on Gentle Monster, `#1d1d1d` on Tamburins) with no chromatic brand hue at all. Color, when it appears, belongs to the campaign photography and full-bleed video — never to the chrome. The UI deliberately recedes so the imagery can perform, which is the opposite of conventional retail UI that competes for attention with saturated buttons and badges.

The typographic identity is the house's signature flex. Gentle Monster ships a **custom "Gentle Monster Serif"** used exclusively for editorial campaign headlines (24px, weight 400) set in white over dark imagery — a high-fashion, magazine-cover register that signals art-direction over merchandising. Underneath sits the bespoke **GentleSans** family at two quiet weights — Light (350) and Regular (400) — handling navigation, menus, and product labels in a whispered 12–16px. Tamburins runs the parallel structure with **Pretendard** as its functional sans and uppercase section heads. Across both surfaces the principle is identical: one expressive display voice for the campaign, one near-silent sans for the machinery.

What distinguishes IICOMBINED from other premium retail is its total commitment to flatness and restraint. Live inspection found `box-shadow: none` across nav, hero, and product tiles on both brands — depth comes from full-bleed imagery and tinted grey bands (`#f3f4f6`), never elevation. Interactive chrome is reduced to the hairline pill: a transparent `25px`-radius outlined button on Gentle Monster ("구매하기", "캠페인 보기") and a fully-rounded `9999px` outlined pill on Tamburins, both rendered as a single `1px` stroke. The only solid button in the system is the near-black consent action (`#111111`, 8px radius). The result is a gallery-grade, editorial commerce experience — confident, monochrome, and image-first.

**Key Characteristics:**
- Achromatic system — pure white (`#ffffff`) + near-black ink (`#111111` / `#1d1d1d`), no chromatic brand color
- Custom "Gentle Monster Serif" for editorial campaign H1 — white over imagery, high-fashion register
- Bespoke GentleSans at Light (350) and Regular (400); Pretendard on Tamburins — quiet 12–16px UI
- Hairline outlined pills — 25px-radius transparent CTA (GM), 9999px full pill (Tamburins), 1px stroke
- Single solid button only — near-black (`#111111`) consent/commit action at 8px radius
- Flat depth — `box-shadow: none` everywhere; tinted grey bands (`#f3f4f6`) separate, not elevation
- Full-bleed image and video tiles with zero border — the imagery is the interface
- Cool neutral text ladder (`#343434` → `#555555` → `#858585`) for secondary hierarchy

## 2. Color Palette & Roles

### Primary (Achromatic)
- **Ink Black** (`#111111`): The house primary. Gentle Monster's text color (the dominant foreground), the solid-button fill, and the system's single "ink". Near-black rather than pure black for a softer, premium read.
- **Ink Alt** (`#1d1d1d`): Tamburins' parallel primary ink — the near-black used for body text and outlined-pill labels on the fragrance surface.
- **Pure White** (`#ffffff`): Page background, product-tile surface, and the label/CTA color when set over dark campaign imagery.

### Neutral & Surface
- **Pure Black** (`#000000`): Maximum-contrast accent — Tamburins' pill borders and occasional hero text.
- **Surface Grey** (`#f3f4f6`): Cool light-grey content band that segments sections on the canvas without a border.
- **Surface Alt** (`#f2f4f5`): A near-identical secondary grey for alternating blocks and menu overlays.

### Text Hierarchy
- **Ink Black** (`#111111`): Primary text, headings, nav, strong labels.
- **Muted Deep** (`#343434`): Secondary copy and sub-labels.
- **Muted Mid** (`#555555`): Tertiary text and metadata.
- **Muted Grey** (`#858585`): Lowest-emphasis labels, disabled/placeholder text.
- **On-Dark White** (`#ffffff`): All text and labels set over campaign imagery or dark sections.

### Rare Accents (campaign-scoped, not chrome)
- **Navy Accent** (`#27455c`): A muted slate-navy that appears only inside campaign artwork/section blocks — never on interactive chrome.
- **Alert Red** (`#d12b2b`): A sharp editorial red seen sparingly on Tamburins (e.g. notice/error or a single accent mark) — the one warm note in an otherwise monochrome system.

## 3. Typography Rules

### Font Family
- **Display**: `Gentle Monster Serif` (custom) — used exclusively for Gentle Monster's editorial campaign headlines; a `Times`-class serif fallback covers Latin glyphs. This is the house's expressive, art-directed voice.
- **Sans (Gentle Monster)**: `GentleSans` — bespoke sans in two weights: Light (350) for nav/menus/captions and Regular (400) for body and product titles.
- **Sans (Tamburins)**: `Pretendard` — the de-facto Korean product sans, used for all Tamburins UI and uppercase section heads.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Campaign Headline | Gentle Monster Serif | 24px (1.50rem) | 400 | 1.17 (28px) | Editorial H1 over imagery, white |
| Section Heading | Pretendard | 24px (1.50rem) | 500 | 1.00 | Uppercase campaign H2 (Tamburins) |
| Collection Subhead | Pretendard | 18px (1.13rem) | 500 | 1.57 (28.2px) | Collection / feature subhead |
| Product Title | GentleSans / Pretendard | 18px (1.13rem) | 400 | 1.50 (27px) | Product / item heading |
| Body | GentleSans | 16px (1.00rem) | 400 | 1.50 (24px) | Standard reading text |
| Nav Label | GentleSans | 16px (1.00rem) | 350 | 1.00 | Top navigation items |
| Menu / Overlay | GentleSans | 13px (0.81rem) | 350 | 1.38 (18px) | Overlay menu labels |
| Caption / Product Name | GentleSans | 12px (0.75rem) | 350 | 1.42 (17px) | Product names, fine labels |

### Principles
- **One serif for art, one sans for machinery**: the custom Gentle Monster Serif carries every campaign headline; GentleSans / Pretendard carry every functional label. They never swap roles.
- **Whisper-weight UI**: navigation and labels run at weight 350 (GentleSans Light) — an unusually light UI weight that keeps the chrome quiet and the imagery loud.
- **Small, dense labels**: product names and menu items sit at 12–13px, treating the storefront like a printed catalog index rather than a clickable button grid.
- **Uppercase for campaign register**: section heads and overlay labels lean on uppercase + letter-spacing to read as editorial titling, not UI copy.

## 4. Component Stylings

### Buttons

**Outlined CTA (Primary)**
- Text: `#111111`
- Border: 1px solid `#ffffff`
- Radius: 25px
- Padding: 0px 23px
- Font: 16px GentleSans weight 400
- Height: 36px
- Use: Primary call-to-action over campaign imagery — "구매하기" (Buy), "캠페인 보기" (View campaign); transparent fill, hairline pill

**Solid Consent**
- Background: `#111111`
- Text: `#ffffff`
- Radius: 8px
- Font: 13px GentleSans weight 400
- Height: 48px
- Use: The system's only solid button — uppercase consent / commit action ("ACCEPT ALL COOKIES")

**Tamburins Outlined Pill**
- Text: `#1d1d1d`
- Border: 1px solid `#000000`
- Radius: 9999px
- Font: 10px Pretendard weight 400
- Height: 45px
- Use: Tamburins' fully-rounded outlined pill — hairline black stroke on white

### Cards & Containers

**Product / Campaign Tile**
- Background: `#ffffff`
- Text: `#111111`
- Radius: 0px
- Use: Full-bleed product / campaign tile — no border, no shadow, image is the surface

**Tinted Surface Band**
- Background: `#f3f4f6`
- Text: `#111111`
- Radius: 0px
- Use: Cool-grey content band segmenting sections on the white canvas

### Badges

**Overlay Label**
- Text: `#ffffff`
- Font: 13px GentleSans weight 350
- Use: White uppercase label set over campaign imagery (collection names, tags)

### Navigation
- Background: transparent over imagery
- Text: `#111111` on light, `#ffffff` over dark hero
- Font: 16px GentleSans weight 350
- Height: 90px header
- Active: white `#ffffff` label when nav sits over dark campaign imagery
- Use: Top horizontal nav ("선글라스", "안경", "베스트셀러", "2026 컬렉션", "선물")

### Footer
- Links: `#111111`, 16px GentleSans weight 400
- Use: Footer / menu navigation links

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, two brand-owned surfaces)
**Tier 1 sources:** https://www.gentlemonster.com, https://www.tamburins.com
**Tier 2 sources:** getdesign.md/gentlemonster — SPA shell, no token content (directory-only); styles.refero.design/?q=gentle+monster — no IICOMBINED-specific style entry (generic catalog grid only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px
- Scale: 4px, 8px, 12px, 16px, 23px, 32px, 48px, 64px
- Notable: CTA horizontal padding lands at a measured 23px, giving the hairline pill a generous, gallery-label hit area

### Grid & Container
- Full-bleed campaign hero — edge-to-edge imagery/video with the serif headline and outlined CTA overlaid
- Product grids run as borderless image tiles with the product name caption beneath (12px GentleSans)
- Sections alternate between white (`#ffffff`) canvas and tinted grey (`#f3f4f6`) bands, full-width
- Tall 90px header floating transparent over the hero, switching label color from ink to white over dark imagery

### Whitespace Philosophy
- **Imagery over chrome**: the page is mostly photography and video; UI is a thin layer that never competes with the campaign.
- **Flat segmentation**: sections separate by background tint (`#f3f4f6` vs `#ffffff`) and full-bleed image edges, never by shadow or heavy border.
- **Gallery rhythm**: generous vertical breathing room between campaign blocks, like rooms in an exhibition.

### Border Radius Scale
- Sharp (0px): product tiles, surface bands, imagery — the default
- Small (8px): the solid consent button
- Pill (25px): the outlined CTA on Gentle Monster
- Full (45px / 9999px): Tamburins' fully-rounded outlined pill

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, product tiles, nav — nearly everything |
| Tint (Level 1) | `#f3f4f6` background shift | Section / band separation without elevation |
| Image (Level 2) | Full-bleed photography/video | The primary depth device — the imagery itself |

**Shadow Philosophy**: IICOMBINED is a shadowless house system. Live inspection found `box-shadow: none` across nav, hero, headings, and product tiles on both Gentle Monster and Tamburins. Depth and focus are created entirely by full-bleed imagery, tinted grey bands (`#f3f4f6`), and the contrast of near-black ink (`#111111`) on white. This is a deliberate gallery-grade choice — elevation and card-stacking would read as conventional retail; the house wants the surface to feel like an exhibition wall where the artwork (the product photography) carries all the depth.

## 7. Do's and Don'ts

### Do
- Keep the palette achromatic — pure white (`#ffffff`) and near-black ink (`#111111` / `#1d1d1d`) only for chrome
- Reserve color for the campaign imagery and video, never for buttons or labels
- Use the custom Gentle Monster Serif for editorial campaign headlines set over imagery
- Run UI labels at whisper weight (GentleSans Light 350) in small 12–16px sizes
- Use hairline outlined pills for CTAs — 25px-radius transparent (GM), 9999px full pill (Tamburins)
- Reserve the single solid button (`#111111`, 8px radius) for consent / commit actions only
- Separate sections with tinted grey bands (`#f3f4f6`) and full-bleed image edges, not shadows
- Let product tiles run borderless and full-bleed — the imagery is the interface

### Don't
- Introduce a chromatic brand hue into the chrome — the system is monochrome by design
- Use drop shadows or card elevation — IICOMBINED is a flat, shadowless house
- Set body or UI text at heavy weights — UI is whisper-weight (350) GentleSans Light
- Wrap product tiles in borders or rounded corners — they are sharp, borderless image surfaces
- Spread solid fills across buttons — only the consent action is solid; CTAs are hairline outlines
- Use pure black (`#000000`) for large text where near-black ink (`#111111`) is the house tone
- Let UI compete with the imagery — chrome recedes so the campaign performs

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, full-bleed hero, nav collapses to menu |
| Tablet | 640-1024px | 2-up product tiles, moderate padding |
| Desktop | 1024-1440px | Full layout, floating transparent header, multi-column tile grid |

### Touch Targets
- Outlined CTA at 36px height with 23px horizontal padding — comfortably tappable
- Tamburins pill at 45px height — generous full-round target
- Nav labels spaced within the tall 90px header

### Collapsing Strategy
- Hero: full-bleed campaign imagery maintained at all sizes; serif headline scales down
- Product grid: multi-column image tiles → 2-up → single column, captions preserved
- Tinted/white alternating bands maintain full-width treatment
- Floating header collapses nav items into a menu overlay on mobile

### Image Behavior
- Campaign imagery and video run full-bleed and borderless at every breakpoint — the core of the system
- Product tiles maintain sharp 0px corners across breakpoints
- No shadow on any image at any size, consistent with the flat house language

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary ink / text: Ink Black (`#111111`)
- Tamburins ink: Ink Alt (`#1d1d1d`)
- Background: Pure White (`#ffffff`)
- Tinted band: Surface Grey (`#f3f4f6`)
- Over-imagery text / label: On-Dark White (`#ffffff`)
- Secondary text: Muted Deep (`#343434`)
- Tertiary text: Muted Mid (`#555555`)
- Faint / disabled: Muted Grey (`#858585`)
- Solid button fill: Ink Black (`#111111`)
- Rare accent (campaign only): Navy Accent (`#27455c`), Alert Red (`#d12b2b`)

### Example Component Prompts
- "Create a full-bleed campaign hero: edge-to-edge image, white serif headline at 24px (Gentle Monster Serif / Times fallback), line-height 1.17. Overlay a hairline pill CTA: transparent fill, 1px solid #ffffff border, #111111 text, 25px radius, 0 23px padding, 36px tall, 16px GentleSans — 'Buy' / 'View campaign'."
- "Design a product tile: white #ffffff background, 0px radius, no border, no shadow. Full-bleed product image with a 12px GentleSans weight 350 product-name caption (#111111) beneath."
- "Build a tinted section band: #f3f4f6 background, full-width, 0px radius. Uppercase section heading 24px Pretendard weight 500, #111111. No shadow anywhere."
- "Create the only solid button — consent / commit: #111111 background, #ffffff text, 8px radius, 13px GentleSans, 48px tall, uppercase."
- "Create a Tamburins outlined pill: transparent fill, 1px solid #000000 border, #1d1d1d text, 9999px radius, 45px tall, 10px Pretendard."

### Iteration Guide
1. Keep chrome achromatic — white + near-black ink (`#111111`); color lives only in imagery
2. Gentle Monster Serif for campaign headlines; GentleSans / Pretendard 350–400 for all UI
3. No shadows — separate with `#f3f4f6` tint and full-bleed image edges
4. CTAs are hairline outlined pills (25px GM / 9999px Tamburins); only consent is solid `#111111`
5. Product tiles are sharp (0px), borderless, image-led
6. UI weight is light (350) and small (12–16px) — the chrome whispers
7. Let the campaign imagery carry all depth and color

---

## 10. Voice & Tone

IICOMBINED's voice is **editorial, restrained, and art-directed** — it speaks like an exhibition wall text, not a retail banner. Copy is sparse and confident: campaign titles ("2026 Veggie Collection", "BOLD COLLECTION", "SUMMER TAILS") read as gallery show names, and CTAs are minimal imperatives ("구매하기" / Buy, "캠페인 보기" / View campaign). The house treats the visitor as someone visiting an exhibition who will be moved by the imagery first and informed second — there is no hard sell, no urgency, no discount-driven shouting.

| Context | Tone |
|---|---|
| Campaign titles | Editorial, exhibition-named. "2026 Veggie Collection", "BOLD COLLECTION". Title-cased or uppercase, never salesy. |
| CTAs | Minimal imperatives. "구매하기" (Buy), "캠페인 보기" (View campaign). Two words, no urgency. |
| Product names | Short, coined, catalog-style. "토피 02", "베르 02", "아덴 02" — product as named object. |
| Collection copy | Concept-first. "새로운 헤어 퍼퓸 컬렉션" (a new hair-perfume collection) — states the idea plainly. |
| Consent / system | Functional and quiet. "모두 수락 - ACCEPT ALL COOKIES" — uppercase, no flourish. |

**Voice samples (verbatim from live homepages):**
- "2026 Veggie Collection" — Gentle Monster campaign H1 (exhibition-named collection). *(verified live 2026-06-17, gentlemonster.com)*
- "캠페인 보기" — Gentle Monster CTA (view-the-campaign, art-first framing). *(verified live 2026-06-17, gentlemonster.com)*
- "새로운 헤어 퍼퓸 컬렉션" — Tamburins section heading (concept-first collection copy). *(verified live 2026-06-17, tamburins.com)*

**Forbidden register**: discount urgency ("SALE!", countdown timers), exclamation-heavy hype, hard-sell upselling, anything that competes with the campaign imagery for attention.

## 11. Brand Narrative

IICOMBINED (아이아이컴바인드) is the Korean creative house founded by **Hankook Kim (김한국)** that operates a portfolio of experiential brands — **Gentle Monster** (eyewear, launched 2011), **Tamburins** (fragrance and body care), and **Nudake** ("make a new dream", a conceptual dessert/art brand). The house's founding premise rejects the convention that a retail brand is a catalog of products: instead, each brand is run as an art-and-space practice, where flagship stores are rotating installations and the product is the artifact left behind by an exhibition.

That installation-first thinking shapes everything in the digital experience. The Gentle Monster site is built like a gallery — full-bleed campaign video, a custom serif used the way a museum uses titling, and a UI so quiet it nearly disappears. Tamburins extends the same monochrome, sculptural sensibility to fragrance, with stark white space and editorial photography. The house treats commerce and art direction as the same discipline; the storefront is a continuation of the physical installation, not a separate marketing channel.

What IICOMBINED refuses, visible in its design: the saturated, badge-heavy urgency of conventional e-commerce; chromatic brand palettes that fight the product photography; and decorative depth (shadows, card stacks) that would make the surface feel like a shop rather than a space. What it embraces: an achromatic black-and-white system, custom typography as identity, full-bleed imagery as the primary medium, and a restraint that signals art over merchandising.

## 12. Principles

1. **The imagery is the interface.** Campaign photography and video carry the experience; the UI is a thin overlay. *UI implication:* keep chrome minimal and achromatic so it never competes with full-bleed imagery.
2. **Monochrome by conviction.** No chromatic brand hue exists in the chrome. *UI implication:* white and near-black ink (`#111111`) only for buttons, text, and structure — color belongs to the campaign.
3. **Custom type is the identity.** The Gentle Monster Serif and GentleSans are bespoke and non-substitutable. *UI implication:* one expressive serif for campaign headlines, one whisper-weight sans for everything functional.
4. **Flat as a gallery wall.** Elevation reads as retail; flatness reads as exhibition. *UI implication:* no shadows; separate with tinted bands and image edges.
5. **Restraint signals premium.** Fewer elements, quieter weights, sharper geometry. *UI implication:* small light labels, one solid button, hairline outlined pills — nothing shouts.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable IICOMBINED audience segments (design-aware fashion buyers, fragrance enthusiasts, art-and-retail followers), not individual people.*

**정유진, 27, 서울.** A design-aware shopper who follows Gentle Monster's flagship installations on social. Visits the site to experience the campaign as much as to buy; values that the interface feels like a gallery, not a sale. Would be put off by discount banners or badge clutter.

**Marcus Lee, 33, 싱가포르.** A fragrance collector drawn to Tamburins' sculptural bottles and editorial photography. Appreciates the stark monochrome presentation and reads the product as an art object. Distrusts brands whose sites feel like conventional e-commerce.

**한소희, 41, 서울.** A creative director who studies IICOMBINED as a case study in retail-as-art. Notices the custom serif, the shadowless flatness, and the whisper-weight UI; cites the house when arguing that restraint and bespoke type signal premium more than ornament does.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no products / sold out)** | White canvas. A single near-black ink (`#111111`) line in GentleSans stating the collection is unavailable, with a quiet link back to the campaign. No illustration, no clutter. |
| **Empty (cart / wishlist, none yet)** | Muted Grey (`#858585`) single line, calm and editorial — nothing saved yet, with a path back to browsing. |
| **Loading (campaign / imagery)** | Full-bleed neutral placeholder block (`#f3f4f6`) at final dimensions, flat fade-in. No shadow shimmer — consistent with the shadowless system. |
| **Loading (product grid)** | Sharp 0px-radius `#f3f4f6` tile placeholders at final dimensions, flat pulse. |
| **Error (load failed)** | Inline near-black (`#111111`) message in GentleSans with a plain retry; if a warm signal is needed, the rare Alert Red (`#d12b2b`) marks it. No generic dialog. |
| **Error (form validation)** | Field-level message below the input, quiet and specific; describes what is valid, not just "required". |
| **Success (added / submitted)** | Brief inline confirmation in calm ink tone; next-step detail linked immediately below. No celebratory emoji or color burst. |
| **Skeleton** | `#f3f4f6` blocks at final dimensions, 0px radius, flat pulse — matches the borderless tile geometry. |
| **Disabled** | Muted Grey (`#858585`) text on reduced-opacity surface; outlined pills fade their stroke rather than fill grey. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover, pill press, focus |
| `motion-standard` | 280ms | Image cross-fade, tile reveal, overlay open |
| `motion-slow` | 500ms | Full-bleed campaign transitions, hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — overlays, tiles, campaign reveals |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions, cross-fades |

**Motion rules**: Motion is cinematic but disciplined — consistent with the gallery aesthetic. Campaign imagery and video cross-fade slowly (`motion-slow / ease-enter`) so transitions feel like scene changes in an exhibition; product tiles fade in flat from neutral placeholders; hairline pills respond to press with a subtle opacity shift, never a bounce. No spring, no overshoot — the house signals art-direction and steadiness, not consumer-app playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and ambient campaign motion freezes; the storefront remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle on two IICOMBINED brand-owned surfaces:
- https://www.gentlemonster.com (redirects to /kr/ko) — body text rgb(17,17,17) #111111 (1438× foreground),
  custom fonts __gentleSansRegularKo (400) / __gentleSansLightKo (350) / __gentleMonsterSerif (campaign H1),
  campaign H1 "2026 Veggie Collection" 24px serif white, outlined CTA "구매하기"/"캠페인 보기"
  (transparent, 1px solid #ffffff, 25px radius, 0 23px padding, 36px), solid consent button #111111 8px radius 48px,
  body bg #f3f4f6, box-shadow none throughout, doc title "Home | 젠틀몬스터 공식 온라인 스토어"
- https://www.tamburins.com (redirects to /kr/) — body text rgb(29,29,29) #1d1d1d (494× foreground),
  Pretendard sans, outlined pill button (transparent, 1px solid #000000, 9999px radius, 45px), uppercase H2
  "SUMMER TAILS" 24px white, "새로운 헤어 퍼퓸 컬렉션" 18px, rare accent rgb(209,43,43) #d12b2b,
  box-shadow none, doc title "TAMBURINS 탬버린즈 공식 온라인 스토어"

Token-level claims (§1-9) are sourced from this live inspection of the two brand-owned surfaces.

Voice samples (§10) are verbatim from the live homepages (Gentle Monster campaign H1 + CTA, Tamburins section H2).

Brand narrative (§11): IICOMBINED (아이아이컴바인드) is the parent house of Gentle Monster (eyewear, 2011),
Tamburins (fragrance), and Nudake (dessert/art), founded by Hankook Kim (김한국). These are widely documented
public facts about the company; the installation-first creative practice is observable across the brands' flagship
stores and campaigns. Founding details beyond the live surfaces are general public knowledge, not directly quoted
from a verified IICOMBINED statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable IICOMBINED audience segments. Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "the imagery is the interface", "flat as a gallery wall", "monochrome by conviction")
are editorial readings connecting the house's observed design to its installation-first positioning, not directly
sourced IICOMBINED statements.

Tier 2: getdesign.md/gentlemonster returns an empty SPA shell (no token content); styles.refero.design has no
IICOMBINED-specific style entry (search returns the generic catalog grid). Consistent with the documented KR
coverage gap in spec/regional-sources.yaml — Tier 1 (two brand-owned live inspects) carries the proof.
-->
