---
id: frip
name: Frip
display_name_kr: 프립
country: KR
category: consumer-tech
homepage: "https://www.frip.co.kr/"
primary_color: "#7a29fa"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=frip.co.kr&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live booking-CTA violet (#7a29fa) — the '참여하기' button + Superhost badge; red family (#f4373d exclusive tag / #ff3f33 discount % / #e21d47 points) is promo-only accent. Near-flat system: box-shadow none, #e6e6e6 hairlines + tint separation."
  colors:
    primary: "#7a29fa"
    accent: "#f4373d"
    sale: "#ff3f33"
    point: "#e21d47"
    pink-tint: "#fff4f7"
    ink: "#000000"
    charcoal: "#333333"
    near-black: "#111111"
    body: "#777777"
    muted: "#999999"
    faint: "#aaaaaa"
    canvas: "#ffffff"
    surface: "#fafafa"
    surface-alt: "#f4f4f4"
    disabled: "#eeeeee"
    hairline: "#e6e6e6"
    border: "#dddddd"
  typography:
    family: { display: "SUIT", body: "SUIT", fallback: "UI Frip, Noto Sans KR" }
    detail-heading: { size: 18, weight: 700, lineHeight: 1.33, use: "Section / product-detail headings (프립 정보), SUIT Bold" }
    product-title:  { size: 20, weight: 400, lineHeight: 1.40, tracking: -0.6, use: "Product-detail H1 title, SUIT" }
    discount:       { size: 24, weight: 700, use: "Hero discount percentage in sale red" }
    body:           { size: 14, weight: 400, lineHeight: 1.50, use: "Standard reading + UI text, SUIT" }
    cta:            { size: 16, weight: 400, lineHeight: 1.50, use: "Primary booking button label (참여하기), SUIT" }
    app-cta:        { size: 12, weight: 700, use: "App-download bar label (앱 다운로드), SUIT Bold" }
    badge:          { size: 10, weight: 500, use: "Corner tags (프립단독 / 슈퍼호스트), SUIT Medium" }
  spacing: { xs: 4, sm: 6, md: 10, base: 16, lg: 20, xl: 32 }
  rounded: { xs: 3, sm: 5, md: 10, lg: 12, pill: 20, full: 9999 }
  shadow:
    none: "none"
  components:
    cta-primary: { type: button, bg: "#7a29fa", fg: "#ffffff", radius: "10px", height: "56px", padding: "16px", font: "16px / 400 SUIT", use: "Primary booking CTA (참여하기) on product pages" }
    cta-disabled: { type: button, bg: "#eeeeee", fg: "#ffffff", radius: "10px", height: "56px", padding: "16px", font: "16px / 400 SUIT", use: "Sold-out / disabled booking button (신청마감)" }
    app-download: { type: button, bg: "#333333", fg: "#ffffff", radius: "0px", font: "12px / 700 SUIT", use: "App-download bar CTA (앱 다운로드)" }
    count-pill: { type: input, bg: "#ffffff", fg: "#333333", border: "1px solid #dddddd", radius: "20px", padding: "7px 15px", height: "36px", font: "14px / 400 SUIT", use: "Quantity / option selector pill on booking panel" }
    product-card: { type: card, bg: "#ffffff", radius: "5px", border: "1px solid #e6e6e6", use: "Experience/product card — thumbnail + title, hairline outline, no shadow" }
    badge-exclusive: { type: badge, bg: "#f4373d", fg: "#ffffff", radius: "5px", padding: "4px 6px", font: "10px / 500 SUIT", use: "프립단독 (Frip-exclusive) corner tag" }
    badge-superhost: { type: badge, bg: "#7a29fa", fg: "#ffffff", radius: "5px", padding: "4px 6px", font: "10px / 500 SUIT", use: "슈퍼호스트 (Superhost) corner tag" }
    nav-tab: { type: tab, fg: "#000000", font: "14px / 400 SUIT", active: "text #7a29fa on active nav/category item", use: "Top navigation / category tab" }
  components_harvested: true
---

# Design System Inspiration of Frip

## 1. Visual Theme & Atmosphere

Frip (프립) is Korea's self-described "대한민국 1등 취미여가 탐색 플랫폼" (No.1 hobby-and-leisure discovery platform) — a marketplace where people book experiences, classes, and social outings. Its web surface reads like a bright, content-dense commerce feed rather than a minimalist brand site: a pure white (`#ffffff`) canvas packed with square-cornered thumbnail cards, corner tags, and price callouts, organized into scannable horizontal shelves ("주간 인기 BEST", "신규 프립", "기획전"). The mood is energetic and consumer-friendly, closer to a lifestyle shopping app than a calm fintech dashboard — the page wants you to browse dozens of experiences at a glance.

The color system is built on a single saturated action color: an electric violet (`#7a29fa`) that carries the primary booking button ("참여하기") on every product page and marks trust signals like the "슈퍼호스트" (Superhost) tag. This purple is the one thing the eye is trained to treat as "the next step." Running alongside it is a hot promo-red family — `#f4373d` for the "프립단독" (Frip-exclusive) corner tag, `#ff3f33` for the big discount percentages, and `#e21d47` for point/reward labels — reserved strictly for urgency and savings, never for navigation. Text is set in near-pure black (`#000000`) for headings and a warm charcoal (`#333333`) for product titles and secondary copy, over a cool grey ladder (`#777777` → `#999999` → `#aaaaaa`) for metadata.

Typographically the system is unmistakably Korean-modern: everything runs in **SUIT** (with `UI Frip` / `Noto Sans KR` fallbacks), a clean geometric hangul sans. Section and detail headings sit at a restrained 18px / weight 700; product titles at 20px / 400 with tight `-0.6px` tracking; body and UI text at a dense 14px / 400. Depth is almost entirely absent — live inspection found `box-shadow: none` across the nav, hero carousel, and section headers. Separation comes from thin `#e6e6e6` hairlines, tinted `#fafafa` / `#f4f4f4` surfaces, and a soft pink `#fff4f7` promo band, not elevation. Geometry is gently rounded: a 5px radius is the workhorse (cards, badges — 78 occurrences), the primary CTA sits at 10px, and selector pills reach a 20px near-round.

**Key Characteristics:**
- Single saturated violet (`#7a29fa`) reserved for the primary booking action and Superhost trust tag
- Hot promo-red family — `#f4373d` exclusive tag, `#ff3f33` discount %, `#e21d47` points — used only for savings/urgency
- SUIT typeface throughout — 18px/700 headings, 20px/400 product titles, 14px/400 body
- Near-black `#000000` headings + warm `#333333` charcoal titles instead of flat black-on-white monotony
- Near-flat depth: `box-shadow: none`; `#e6e6e6` hairlines + `#fafafa`/`#f4f4f4` tints do the separating
- 5px radius as the workhorse; 10px CTA; 20px selector pills; occasional full circles for avatars/dots
- Content-dense commerce feed: thumbnail cards, corner tags, price callouts on a white canvas
- Dark charcoal (`#333333`) app-download bar as the recurring cross-sell chrome

## 2. Color Palette & Roles

### Primary & Accent
- **Frip Violet** (`#7a29fa`): Primary action color. Fills the "참여하기" booking CTA on every product page and the "슈퍼호스트" Superhost badge — the system's single "do this / trust this" color.
- **Exclusive Red** (`#f4373d`): The "프립단독" (Frip-exclusive) corner-tag background — a hot red that flags first-party / can't-get-elsewhere inventory.
- **Sale Red** (`#ff3f33`): Discount-percentage text (e.g. "48%", "89%") at 24px/700 on the hero and 14px/700 on cards. Savings emphasis only.
- **Point Red** (`#e21d47`): Reward/point labels such as "신규프립 에너지x2" at 10px/500 — a slightly deeper magenta-red for loyalty callouts.

### Ink & Text Hierarchy
- **Ink Black** (`#000000`): Primary heading and dominant body text — the most frequent foreground color on the page.
- **Charcoal** (`#333333`): Product-detail titles, secondary copy, and the app-download bar background. A warm near-black that softens dense text.
- **Near-Black** (`#111111`): Occasional maximum-contrast dark surface / overlay panel.
- **Body Grey** (`#777777`): Secondary descriptions and supporting copy.
- **Muted Grey** (`#999999`): Tertiary text, metadata, timestamps.
- **Faint Grey** (`#aaaaaa`): Lowest-emphasis labels, placeholders, disabled captions.

### Surfaces & Borders
- **Pure White** (`#ffffff`): Page background, card surfaces, text on violet/red/dark.
- **Surface Grey** (`#fafafa`): Tinted section/card background for gentle segmentation.
- **Surface Alt** (`#f4f4f4`): A second neutral grey for alternating blocks and inset panels.
- **Pink Tint** (`#fff4f7`): Soft pink promo band behind sale/curation shelves.
- **Disabled Grey** (`#eeeeee`): Background of sold-out / disabled buttons ("신청마감").
- **Hairline** (`#e6e6e6`): Thin card outlines and dividers — the primary separation device in this near-flat system.
- **Border Grey** (`#dddddd`): 1px outline on selector/quantity pills and input chrome.

## 3. Typography Rules

### Font Family
- **Primary**: `SUIT` (with `UI Frip`, `Noto Sans KR`, Helvetica, Arial, sans-serif fallbacks) — used for headings, body, UI, and button labels alike.
- SUIT is a geometric hangul-first sans; Frip runs it across the whole surface rather than splitting display vs. body across two families.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Detail / Section Heading | SUIT | 18px (1.13rem) | 700 | 1.33 (24px) | normal | "프립 정보", "주간 인기 BEST" |
| Product Title | SUIT | 20px (1.25rem) | 400 | 1.40 (28px) | -0.6px | Product-detail H1 |
| Discount % | SUIT | 24px (1.50rem) | 700 | — | normal | Hero sale percentage, sale red |
| Booking CTA | SUIT | 16px (1.00rem) | 400 | 1.50 | normal | "참여하기" primary button label |
| Body / UI | SUIT | 14px (0.88rem) | 400 | 1.50 (21px) | normal | Standard reading + nav text |
| App-download CTA | SUIT | 12px (0.75rem) | 700 | — | normal | "앱 다운로드" bar label |
| Corner Badge | SUIT | 10px (0.63rem) | 500 | — | normal | "프립단독" / "슈퍼호스트" tags |

### Principles
- **One typeface, weight-driven hierarchy**: SUIT carries everything; contrast comes from weight (700 headings vs 400 body) and size, not from a second family.
- **Restrained heading scale**: headings top out at 18–20px on the feed — the design leans on card density and imagery, not oversized type, to structure the page.
- **Tight tracking only on titles**: product titles compress to `-0.6px`; body and UI text stay at normal tracking for hangul legibility at 14px.
- **Bold for money and structure**: weight 700 is reserved for headings and numeric emphasis (discount %), signaling "read this first."

## 4. Component Stylings

### Buttons

**Booking CTA (Primary)**
- Background: `#7a29fa`
- Text: `#ffffff`
- Radius: 10px
- Padding: 16px
- Height: 56px
- Font: 16px SUIT weight 400
- Use: Primary product-page action ("참여하기") — the system's single primary action

**Booking CTA (Disabled / Sold Out)**
- Background: `#eeeeee`
- Text: `#ffffff`
- Radius: 10px
- Padding: 16px
- Height: 56px
- Font: 16px SUIT weight 400
- Use: Sold-out / closed state ("신청마감") — greyed, full-width, same geometry as active

**App-Download Bar**
- Background: `#333333`
- Text: `#ffffff`
- Radius: 0px
- Height: 45px
- Font: 12px SUIT weight 700
- Use: Recurring dark app-download cross-sell chrome ("앱 다운로드")

### Inputs & Forms

**Quantity / Option Pill**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#dddddd`
- Radius: 20px
- Padding: 7px 15px
- Height: 36px
- Font: 14px SUIT weight 400
- Use: Selectable quantity / option pill on the booking panel

### Cards & Containers

**Experience Card**
- Background: `#ffffff`
- Border: 1px solid `#e6e6e6`
- Radius: 5px
- Font: 14px SUIT
- Use: Product/experience card — thumbnail + title + price, hairline outline, no shadow

### Badges

**Exclusive Tag**
- Background: `#f4373d`
- Text: `#ffffff`
- Radius: 5px
- Padding: 4px 6px
- Font: 10px SUIT weight 500
- Use: "프립단독" (Frip-exclusive) corner tag

**Superhost Tag**
- Background: `#7a29fa`
- Text: `#ffffff`
- Radius: 5px
- Padding: 4px 6px
- Font: 10px SUIT weight 500
- Use: "슈퍼호스트" (Superhost) host-trust corner tag

### Navigation
- Background: `#ffffff`
- Text: `#000000`
- Font: 14px SUIT weight 400
- Height: ~56px header
- Active: violet `#7a29fa` text on the active nav / category item
- Use: Top horizontal nav ("카테고리", "피드", "메시지", "찜", "마이")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.frip.co.kr/ (homepage, live computed style); https://medium.com/frientrip (Frip official Medium publication, brand-owned)
**Tier 2 sources:** getdesign.md/frip (no entry — "0 DESIGN.md files"); styles.refero.design/?q=frip (no entry — fuzzy "F…" matches only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 6px, 10px, 16px, 20px, 32px
- Notable: badge padding lands at 4px 6px; selector pills at 7px 15px; the primary CTA uses a symmetric 16px pad — dense, tap-friendly commerce spacing

### Grid & Container
- Content-dense feed: horizontal shelves of thumbnail cards ("주간 인기 BEST", "신규 프립", "기획전") stacked vertically
- Product cards use a 5px radius and a fixed thumbnail-over-title-over-price layout
- Product-detail pages pin a full-width 56px booking CTA at the bottom of the panel
- Sections separate by tinted band (`#fafafa` / `#f4f4f4` / pink `#fff4f7`) rather than rules

### Whitespace Philosophy
- **Density over emptiness**: this is a browse-many-options marketplace; cards pack tightly into shelves and the eye scans laterally.
- **Flat segmentation**: sections separate by background tint and `#e6e6e6` hairlines, not shadow or heavy borders.
- **Tag rhythm**: repeated 5px corner tags ("프립단독", "슈퍼호스트") create a consistent visual cadence across the card grid.

### Border Radius Scale
- Micro (3px): fine inner elements
- Small (5px): cards, badges, corner tags — the workhorse (×78 in scan)
- Medium (10px): primary booking CTA
- Large (12px): larger containers / feature cards
- Pill (20px): quantity/option selector pills
- Full (9999px / 50%): avatars, dots, circular controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, nav, hero carousel, section headings, most surfaces |
| Hairline (Level 1) | `1px solid #e6e6e6` border | Card outlines, dividers |
| Tint (Level 2) | `#fafafa` / `#f4f4f4` / `#fff4f7` background shift | Section / shelf separation without elevation |
| Overlay (Level 3) | `rgba(0,0,0,0.4)` scrim | Carousel index chips, image overlays |

**Shadow Philosophy**: Frip is a near-shadowless system. Live inspection found `box-shadow: none` across the nav, hero carousel, and section headers. Depth and grouping are communicated through thin `#e6e6e6` hairlines, tinted surfaces (`#fafafa`, `#f4f4f4`, pink `#fff4f7`), and the imagery inside cards — not elevation. When Frip needs to lift something above content it reaches for a translucent black scrim (`rgba(0,0,0,0.4)`) on the carousel index chip, and for emphasis it reaches for color (violet `#7a29fa` or promo red `#f4373d`), never a drop shadow. This keeps the commerce feed feeling fast, flat, and mobile-native.

## 7. Do's and Don'ts

### Do
- Reserve violet (`#7a29fa`) for the primary booking action and the Superhost trust tag — keep it the single "action" color
- Use the promo-red family only for savings/urgency: `#f4373d` exclusive tag, `#ff3f33` discount %, `#e21d47` points
- Set everything in SUIT — weight 700 for headings/numbers, 400 for body and CTA labels
- Use near-black `#000000` for headings and warm charcoal `#333333` for product titles
- Separate sections with `#e6e6e6` hairlines and `#fafafa`/`#f4f4f4` tints, not shadows
- Keep cards and badges at a 5px radius; the primary CTA at 10px
- Pack cards densely into horizontal shelves — this is a browse-many marketplace
- Keep the full-width 56px booking CTA anchored on product pages

### Don't
- Spread violet across decorative elements — it dilutes the single booking-action signal
- Use the promo reds for navigation, links, or non-sale UI — they mean savings/urgency
- Introduce drop shadows for elevation — Frip is a flat, hairline-and-tint system
- Set a light weight on numeric/discount emphasis — money is always weight 700
- Use large pill radii on cards — cards stay at the 5px workhorse corner
- Mix in a second display typeface — SUIT owns the whole surface
- Grey the active nav item — the active state is violet `#7a29fa` text
- Use pure `#000000` for every text tier — step down through `#333333` → `#777777` → `#999999`

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single-column shelves, cards scroll horizontally, bottom-anchored CTA |
| Tablet | 640-1024px | 2–3 up card grids, moderate padding |
| Desktop | 1024-1440px | Full multi-column shelves, centered content, persistent nav |

### Touch Targets
- Primary booking CTA at 56px height, full-width — an unmistakable tap target
- Selector pills at 36px height with 7px 15px padding — comfortably tappable
- Nav items within a ~56px header, spaced for touch
- Corner tags are non-interactive labels at 10px, kept out of the tap flow

### Collapsing Strategy
- Card shelves: horizontal scroll on narrow viewports, multi-column grid on desktop
- Product detail: booking panel collapses to a bottom-fixed CTA bar on mobile
- Tinted / white alternating sections maintain full-width treatment
- Headings hold their 18–20px size; density adjusts via column count, not type scale

### Image Behavior
- Card thumbnails carry no shadow at any size, consistent with the flat system
- Corner tags overlay the top of thumbnails at a fixed 5px radius
- Cards maintain the 5px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action / booking CTA: Frip Violet (`#7a29fa`)
- Exclusive tag: `#f4373d` · Discount %: `#ff3f33` · Points: `#e21d47`
- Heading text: Ink Black (`#000000`)
- Product title / dark bar: Charcoal (`#333333`)
- Secondary text: `#777777` · Muted: `#999999` · Faint: `#aaaaaa`
- Background: Pure White (`#ffffff`) · Tint: `#fafafa` / `#f4f4f4` · Pink promo: `#fff4f7`
- Disabled button: `#eeeeee` · Hairline: `#e6e6e6` · Input border: `#dddddd`

### Example Component Prompts
- "Create a product card: white `#ffffff` background, 1px solid `#e6e6e6` border, 5px radius, no shadow. A `#f4373d` corner tag '프립단독' (white 10px SUIT 500, 5px radius, 4px 6px padding) over the thumbnail. Title 14px SUIT `#333333`; discount '48%' in `#ff3f33` 14px weight 700."
- "Build a booking panel: full-width primary CTA '참여하기' — `#7a29fa` background, white text, 10px radius, 16px padding, 56px height, 16px SUIT. Quantity pills: white background, 1px solid `#dddddd`, 20px radius, 7px 15px padding, `#333333` text."
- "Design a section shelf: heading 18px SUIT weight 700 `#000000` ('주간 인기 BEST'), horizontal row of 5px-radius white cards, separated from the next section by a `#fafafa` tint band — no shadows."
- "Create top nav: white ~56px header, 14px SUIT weight 400 items in `#000000`, active item in violet `#7a29fa`. Dark `#333333` app-download bar with white 12px weight 700 label '앱 다운로드'."

### Iteration Guide
1. Violet (`#7a29fa`) is the single action color — booking CTA + Superhost tag only
2. Promo reds (`#f4373d` / `#ff3f33` / `#e21d47`) mean savings/urgency — never navigation
3. SUIT everywhere; weight 700 for headings and money, 400 for body/CTA
4. No shadows — separate with `#e6e6e6` hairlines and `#fafafa`/`#f4f4f4` tints
5. 5px radius on cards/badges, 10px on the CTA, 20px on selector pills
6. Text steps down `#000000` → `#333333` → `#777777` → `#999999` → `#aaaaaa`
7. Booking CTA stays full-width at 56px height on product pages

---

## 10. Voice & Tone

Frip's voice is **energetic, invitational, and experience-first** — it sells the feeling of doing something new with other people, not a transaction. The positioning line "대한민국 1등 취미여가 탐색 플랫폼" (Korea's No.1 hobby-and-leisure discovery platform) and the English brand ethos "WE INSPIRE PEOPLE TO EXPERIENCE THE WORLD" set the register: aspirational, warm, community-minded. Copy addresses members as "크루" (crew) and hosts as "슈퍼호스트", framing the marketplace as a shared adventure rather than a vendor list.

| Context | Tone |
|---|---|
| Section headings | Bright, curatorial. "주간 인기 BEST 🏆", "크루님을 위한 고감도 경험" — emoji-friendly, warm. |
| CTAs | Direct, inviting. "참여하기" (join in), "앱 다운로드". Low-pressure, action-forward. |
| Tags | Terse trust/urgency signals. "프립단독" (exclusive), "슈퍼호스트" (trusted host). |
| Promo / points | Playful savings language. "신규프립 에너지x2", discount percentages in bold red. |
| Community copy | Members addressed as "크루" — belonging over customer-hood. |

**Voice samples (verbatim from live surfaces):**
- "대한민국 1등 취미여가 탐색 플랫폼" — homepage title tag (category-leader positioning). *(verified live 2026-07-02)*
- "주간 인기 BEST 🏆" — homepage section heading (curatorial, emoji-warm). *(verified live 2026-07-02)*
- "WE INSPIRE PEOPLE TO EXPERIENCE THE WORLD" — Frip Medium publication tagline (brand ethos). *(verified live 2026-07-02, medium.com/frientrip)*

**Forbidden register**: cold transactional phrasing, fear-based urgency, corporate stiffness, or treating experiences as inventory rather than adventures. Savings language stays playful, never predatory.

## 11. Brand Narrative

Frip (프립) began as **프렌트립 (Frientrip)** — a contraction of "friends" and "trip" — a Korean startup built to solve a distinctly modern loneliness problem: it was hard to find good hobbies, classes, and outings, and harder still to do them with like-minded people. Frip reframed leisure as a discoverable, bookable marketplace of "experiences" (프립) hosted by individuals and small businesses, with the company positioning itself as "대한민국 1등 취미여가 탐색 플랫폼."

The brand's mission, stated plainly on its own publication, is to **"inspire people to experience the world."** That ethos shapes the product: members are "크루" (crew), trusted sellers earn a "슈퍼호스트" badge, and the feed is curated into warm, human shelves ("크루님을 위한 고감도 경험", "이런 모임은 어때요?") rather than a cold catalog. The design follows suit — bright imagery, playful emoji in headings, and a single confident violet for the moment of commitment.

What Frip refuses, visible in its design: the intimidating chrome of legacy booking sites (no heavy shadow stacks, no institutional blue) and predatory sale-pressure aesthetics. What it embraces: a flat, fast, image-forward commerce feed; a single trustworthy violet action color; promo reds kept in their lane; and copy that treats browsing as the start of an adventure.

## 12. Principles

1. **Experiences, not transactions.** Frip sells the feeling of trying something new with others. *UI implication:* lead with imagery and warm curation ("고감도 경험"), keep the transactional CTA to a single clear violet button.
2. **One action, one color.** Violet (`#7a29fa`) means "join this." *UI implication:* reserve the saturated violet for the booking CTA and Superhost trust tag so the next step is never ambiguous.
3. **Savings stays in its lane.** The red family signals discount/exclusive/points, never navigation. *UI implication:* `#f4373d`/`#ff3f33`/`#e21d47` only appear on tags, percentages, and reward labels.
4. **Flat and fast.** A browse-many marketplace must feel quick. *UI implication:* no shadows; separate with `#e6e6e6` hairlines and tints; pack cards densely into scannable shelves.
5. **Belonging over customer-hood.** Members are "크루", hosts are "슈퍼호스트". *UI implication:* trust and community signals (Superhost badge, crew language) get first-class visual treatment.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Frip user segments (Koreans seeking hobbies/classes, solo travelers, experience hosts), not individual people.*

**김하늘, 27, 서울.** A young professional looking for weekend hobbies to meet new people. Browses the "주간 인기 BEST" shelf on her phone during her commute, drawn to cards with a "프립단독" tag and a bold discount. Books a pottery class because the "참여하기" button made the next step obvious.

**박민준, 34, 경기.** A solo traveler who uses Frip for guided small-group trips ("혼자여행"). Trusts the "슈퍼호스트" badge as a quality signal and reads host profiles before committing. Values that the flat, image-forward layout lets him judge an experience by its photos fast.

**이서연, 41, 부산.** An experience host teaching a craft class. Cares that her listing's thumbnail, tags, and price read clearly in the card grid, and that the Superhost badge she earned is prominently shown. Sees Frip as a community platform ("크루") more than a booking pipe.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results / saved list)** | White canvas, single Ink Black (`#000000`) line explaining nothing matches yet, with a violet CTA back to browsing. No clutter. |
| **Loading (feed / shelf)** | Skeleton cards at final 5px-radius dimensions on `#fafafa` tint. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (booking submit)** | Inline progress on the 56px violet CTA; label swaps while the panel stays visible. |
| **Error (booking failed)** | Inline message in Ink Black with a plain-language explanation and a retry — states the next step, not just "오류". |
| **Error (form validation)** | Field-level message below the input (1px `#dddddd` pill), describing what's valid. |
| **Success (booking confirmed)** | Brief inline confirmation in warm tone; reservation detail linked immediately below. No aggressive celebration. |
| **Skeleton** | `#fafafa` blocks at final card dimensions, 5px radius, flat pulse. |
| **Disabled (sold out)** | Full-width CTA turns `#eeeeee` with white "신청마감" label — same 56px geometry, greyed rather than removed. |
| **Disabled (low-emphasis)** | Faint Grey (`#aaaaaa`) text on reduced-opacity surface. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Card hover, tag press, focus |
| `motion-standard` | 200ms | Shelf scroll snap, sheet, dropdown, card reveal |
| `motion-slow` | 320ms | Hero carousel crossfade, page-level transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is bright but functional — consistent with a fast commerce feed. The hero carousel crossfades at `motion-slow`; card shelves snap-scroll at `motion-standard / ease-enter`; the booking CTA and tags respond to press with a subtle scale/opacity shift at `motion-fast`. No heavy bounce or spring — the feed favors quick, legible transitions over playful physics. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the carousel stops auto-advancing; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on https://www.frip.co.kr/
and product-detail surfaces (/165667, /121737, /191730, /188510):
- Primary booking CTA "참여하기" — bg rgb(122,41,250) #7a29fa / white / radius 10px / padding 16px / 56px / 16px SUIT (identical across product pages)
- Disabled CTA "신청마감" — bg rgb(238,238,238) #eeeeee / white / 10px / 56px
- App-download bar "앱 다운로드" — bg rgb(51,51,51) #333333 / white / 12px / 700
- Badges "프립단독" bg #f4373d, "슈퍼호스트" bg #7a29fa — 10px / 500 / radius 5px / 4px 6px
- Discount % text #ff3f33 24px/700; points "신규프립 에너지x2" #e21d47 10px/500
- Section headings SUIT 18px/700; product H1 20px/400/-0.6px; body 14px/400
- box-shadow none across nav/hero/headings; #e6e6e6 hairlines + #fafafa/#f4f4f4 tints
- document.title "프립(FRIP) : 대한민국 1등 취미여가 탐색 플랫폼"

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Proof block).

Voice samples (§10) are verbatim: homepage title tag + section heading (live homepage),
and the "WE INSPIRE PEOPLE TO EXPERIENCE THE WORLD" tagline from Frip's official Medium
publication (medium.com/frientrip, verified live 2026-07-02).

Brand narrative (§11): Frip (프립) originated as 프렌트립 (Frientrip = friends + trip), a
Korean hobby/leisure experience marketplace positioning itself as "대한민국 1등 취미여가
탐색 플랫폼." The mission phrasing "inspire people to experience the world" is quoted from
Frip's own Medium publication. Broader founding specifics beyond these first-party surfaces
are general public knowledge, not directly quoted from a verified Frip statement this turn.

Personas (§13) are fictional archetypes informed by publicly observable Frip user segments
(hobby seekers, solo travelers, experience hosts). Names are illustrative; they do not refer
to real people.

Interpretive claims (e.g., "one action, one color", "savings stays in its lane", "flat and
fast as a rejection of legacy booking chrome") are editorial readings connecting Frip's
observed design to its positioning, not directly sourced Frip statements.
-->
