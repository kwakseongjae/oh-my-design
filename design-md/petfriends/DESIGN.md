---
id: petfriends
name: Pet Friends
display_name_kr: 펫프렌즈
country: KR
category: ecommerce
homepage: "https://www.pet-friends.co.kr/"
primary_color: "#ff4081"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=pet-friends.co.kr&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live vivid pink #ff4081 (Material Pink A400) used as emphasis type + solid action fills; deeper magenta #ea306f for sale copy; signal red #f33f46 for discount %. Charcoal ink #2d3035 for text. Near-flat/shadowless system — separation via tint + #e9ebec hairlines."
  colors:
    primary: "#ff4081"
    primary-deep: "#ea306f"
    discount: "#f33f46"
    surface-pink: "#fff1f5"
    pink-soft: "#ffaac7"
    ink: "#2d3035"
    ink-pure: "#000000"
    muted: "#9ca1aa"
    surface: "#f8f8f8"
    surface-alt: "#fafafa"
    hairline: "#e9ebec"
    overlay: "#1c1e21"
    accent-blue: "#6078e4"
    canvas: "#ffffff"
    on-primary: "#ffffff"
  typography:
    family: { brand: "Lific", fallback: "Noto Sans KR" }
    section-title: { size: 18, weight: 700, lineHeight: 1.30, tracking: -0.2, use: "Section headings (H2), Lific Bold" }
    emphasis:      { size: 18, weight: 900, tracking: -0.2, use: "Emphasized phrase inside a heading, pink #ff4081" }
    discount:      { size: 16, weight: 700, lineHeight: 1.38, tracking: -0.32, use: "Discount percentage, signal red #f33f46" }
    label:         { size: 14, weight: 700, tracking: -0.2, use: "Bold UI labels (delivery address, tabs)" }
    body:          { size: 14, weight: 400, use: "Standard reading text, Noto Sans KR fallback" }
    product-title: { size: 13, weight: 400, lineHeight: 1.38, tracking: -0.2, use: "Product names in cards" }
  spacing: { xs: 4, sm: 8, md: 12, base: 15, lg: 16, gutter: 44 }
  rounded: { sm: 6, md: 8, lg: 16, pill: 36, full: 9999 }
  shadow:
    none: "none"
  components:
    chip-category: { type: button, bg: "#fff1f5", fg: "#000000", radius: "36px", padding: "4px 8px 4px 12px", height: "32px", use: "Header category / delivery-address selector chip" }
    pill-keyword: { type: badge, bg: "#ffaac7", fg: "#ffffff", radius: "19px", padding: "3px 15px", height: "30px", use: "Trending search-keyword pill (rendered at 0.5 alpha over hero)" }
    input-search: { type: input, bg: "#ffffff", fg: "#2d3035", border: "1px solid #e9ebec", radius: "6px", padding: "15px 44px 15px 16px", height: "52px", font: "20px / 500 Lific", use: "Main product search field, placeholder 어떤 상품을 찾으시나요?" }
    card-product: { type: card, bg: "#f8f8f8", radius: "16px", use: "Product image card surface in grids / carousels" }
    button-primary: { type: button, bg: "#ff4081", fg: "#ffffff", font: "16px / 700 Lific", use: "Primary brand action — solid pink fill (add-to-cart / buy)" }
    badge-overlay: { type: badge, bg: "#1c1e21", fg: "#ffffff", radius: "20px", padding: "5px 8px", use: "Carousel index / image counter (rendered at 0.6 alpha)" }
    avatar-round: { type: avatar, radius: "9999px", use: "Circular avatar / icon frame (border-radius 50%)" }
  components_harvested: true
---

# Design System Inspiration of Pet Friends

## 1. Visual Theme & Atmosphere

Pet Friends (펫프렌즈) is Korea's self-described "반려동물 1등 쇼핑몰" (No.1 pet shopping mall), and its interface reads like a friendly, high-energy commerce app built for anxious-but-loving pet parents (집사님). The canvas is pure white (`#ffffff`) broken up by soft grey product surfaces (`#f8f8f8`) and warm pink tints (`#fff1f5`), so the page feels bright and merchandising-forward rather than clinical. Text sits in a soft charcoal (`#2d3035`) — never a harsh pure black for reading copy — which keeps the dense product grids legible without feeling heavy. The signature move is color as emotion: a single vivid pink (`#ff4081`, Material's Pink A400) carries the brand's affection and doubles as the "do this" action color.

The typographic personality is warm and declarative. Section headlines run in the brand's custom **Lific** typeface at 18px / weight 700 with tight `-0.2px` tracking, and the persuasive word in each headline jumps to **weight 900 in pink** (`#ff4081`) — e.g. "재구매율 **89%**", "최저가 **도전 사료 모음!**", "집사님을 위한 **오늘 특가!**". Body and product-name text drop to Lific / **Noto Sans KR** at 13–14px weight 400, optimized for dense hangul product listings. This heavy-pink-emphasis-over-quiet-grey-body split is the core tension of the system: shout the deal, whisper the detail.

What distinguishes Pet Friends from generic marketplaces is its commitment to friendly geometry and near-flat depth. Interactive chrome leans hard into the pill and the rounded rectangle: category chips at 36px radius on a pink tint (`#fff1f5`), soft-pink search-keyword pills (`#ffaac7`) at ~19px radius, product cards at a comfortable 16px, and circular avatars. Live inspection returned `box-shadow: none` on chips, inputs, and headings — separation comes from tinted surfaces, thin `#e9ebec` hairlines, and a near-black image overlay (`#1c1e21`), not from elevation. Price urgency gets its own dedicated signal red (`#f33f46`) for discount percentages and a deeper magenta (`#ea306f`) for sale copy, keeping the primary pink from being diluted by commerce noise. A periwinkle accent-blue (`#6078e4`) and alternate light surface (`#fafafa`) show up on promotional landing bands.

**Key Characteristics:**
- Custom **Lific** typeface with **Noto Sans KR** fallback — one warm family across display and body
- Single vivid pink (`#ff4081`) as both emotional brand color and primary action fill
- Heading emphasis in weight 900 pink; quiet 13–14px weight-400 grey body (`#2d3035`)
- Friendly geometry — 36px chips, ~19px keyword pills, 16px cards, circular avatars
- Near-flat / shadowless: tint surfaces (`#f8f8f8`, `#fff1f5`) + `#e9ebec` hairlines do the separating
- Dedicated commerce signals: signal red (`#f33f46`) for discount %, deeper magenta (`#ea306f`) for sale copy
- Near-black overlay (`#1c1e21`) for image counters instead of drop shadows
- Muted grey ladder (`#9ca1aa`) for secondary/metadata text

## 2. Color Palette & Roles

### Primary
- **Pet Friends Pink** (`#ff4081`): The brand's signature vivid pink (Material Pink A400). Used for weight-900 emphasis words in headlines, solid primary-action button/badge fills, and brand accents. The system's single "do this" color.
- **Deep Magenta** (`#ea306f`): A deeper pink-magenta for sale copy and secondary emphasis text where the primary pink would be too light.

### Text
- **Ink Charcoal** (`#2d3035`): Primary text, headings, product names, labels. A soft near-black used instead of pure black for reading comfort in dense grids.
- **Pure Black** (`#000000`): Maximum-contrast text used on some hero headings and chip labels.
- **Muted Grey** (`#9ca1aa`): Tertiary text, captions, metadata, disabled labels.

### Commerce Signals
- **Signal Red** (`#f33f46`): The discount-percentage color — used almost exclusively on the bold "17%", "50%", "36%" markdown that drives conversion.

### Surface & Neutral
- **Pure White** (`#ffffff`): Page background, card surfaces, and text on pink/dark fills.
- **Product Grey** (`#f8f8f8`): The light-grey image surface behind product photography in cards and carousels.
- **Alt Surface** (`#fafafa`): A slightly warmer alternate light surface for promotional landing bands.
- **Surface Pink** (`#fff1f5`): A pale pink tint used as the background of header category / delivery chips.
- **Soft Pink** (`#ffaac7`): The soft pink of the trending search-keyword pills (rendered at 0.5 alpha over the hero imagery).
- **Hairline** (`#e9ebec`): Thin borders, input outlines, and dividers — the primary separation device given the shadow-free system.
- **Overlay Ink** (`#1c1e21`): A near-black used (at ~0.6 alpha) for image overlays and carousel index counters.

### Accent
- **Accent Blue** (`#6078e4`): A periwinkle blue used sparingly on promotional / event landing bands as a secondary accent to the pink.
- **On-Primary White** (`#ffffff`): Text and iconography on pink, magenta, and dark overlay fills.

## 3. Typography Rules

### Font Family
- **Brand**: `Lific` — Pet Friends' custom typeface, used across headings, UI, and body.
- **Fallback**: `Noto Sans KR` — the hangul fallback that carries dense product-listing and body copy.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Section Heading | Lific | 18px (1.13rem) | 700 | ~1.30 | -0.2px | H2 section titles ("맘마값 부담 DOWN…") |
| Emphasis | Lific | 18px (1.13rem) | 900 | normal | -0.2px | Emphasized phrase in a heading, pink `#ff4081` |
| Discount | Lific | 16px (1.00rem) | 700 | 1.38 (22px) | -0.32px | Discount percentage, signal red `#f33f46` |
| Label | Lific | 14px (0.88rem) | 700 | ~1.48 | -0.2px | Bold UI labels (배송지 입력, tabs) |
| Body | Noto Sans KR | 14px (0.88rem) | 400 | normal | normal | Standard reading text |
| Product Title | Lific | 13px (0.81rem) | 400 | 1.38 (18px) | -0.2px | Product names in cards |

### Principles
- **Bold pink emphasis, quiet grey body**: Headlines carry a weight-900 pink phrase for the persuasive beat; product names and body drop to weight 400 charcoal. The weight-and-color jump is the primary hierarchy signal.
- **Tight negative tracking on headings**: -0.2px on titles, -0.32px on discount figures. Body stays at normal tracking.
- **Hangul-first sizing**: Product titles sit at a deliberate 13px, body at 14px — dense enough for merchandising grids, legible for hangul.
- **One warm family**: Lific covers display and UI; Noto Sans KR is the reading/fallback voice. There is no second display typeface competing for attention.

## 4. Component Stylings

### Buttons

**Primary Action (Pink)**
- Background: `#ff4081`
- Text: `#ffffff`
- Font: 16px Lific weight 700
- Use: Primary brand action — the solid vivid-pink fill used for add-to-cart / buy and headline CTAs

**Category / Delivery Chip**
- Background: `#fff1f5`
- Text: `#000000`
- Radius: 36px
- Padding: 4px 8px 4px 12px
- Height: 32px
- Use: Header chips for category ("강아지") and delivery-address ("배송지 입력") selection

### Inputs

**Search Field**
- Background: `#ffffff`
- Text: `#2d3035`
- Border: 1px solid `#e9ebec`
- Radius: 6px
- Padding: 15px 44px 15px 16px
- Height: 52px
- Font: 20px Lific weight 500
- Use: Main product search — placeholder "어떤 상품을 찾으시나요?"

### Cards

**Product Card**
- Background: `#f8f8f8`
- Radius: 16px
- Use: Light-grey image surface behind product photography in grids and carousels

### Badges

**Search-Keyword Pill**
- Background: `#ffaac7`
- Text: `#ffffff`
- Radius: 19px
- Padding: 3px 15px
- Height: 30px
- Use: Trending search-keyword pills on the hero (rendered at 0.5 alpha)

**Image Counter Overlay**
- Background: `#1c1e21`
- Text: `#ffffff`
- Radius: 20px
- Padding: 5px 8px
- Use: Carousel index / image counter ("2/14"), rendered at ~0.6 alpha over media

### Avatars

**Circular Frame**
- Radius: 9999px (border-radius 50%)
- Use: Circular avatar / icon frame in list and community surfaces

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces)
**Tier 1 sources:** https://www.pet-friends.co.kr/ , https://m.pet-friends.co.kr/main/product/list/16982
**Tier 2 sources:** getdesign.md/petfriends (0 files) ; styles.refero.design/?q=petfriends (no genuine Pet Friends entry — returns generic default styles)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base units (measured): 4px, 8px, 12px, 15px, 16px, 44px
- Notable: chip padding lands at an asymmetric `4px 8px 4px 12px` (room for a trailing chevron icon); the search field reserves a 44px right gutter for its search/clear icon

### Grid & Container
- Mobile-first, single-column app shell (the desktop `www` host redirects to the `m.` mobile commerce surface)
- Sticky header: category + delivery chips over a full-width search field
- Trending-keyword pill row directly beneath search
- Product merchandising in horizontally scrolling carousels and 2-up grids, each product on a `#f8f8f8` card at 16px radius
- Section headlines ("최저가 도전 사료 모음!") anchor each merchandising band

### Whitespace Philosophy
- **Merchandising density with breathing room**: product grids are information-rich, but each card gets a clean grey surface and generous rounding so the page never feels cramped.
- **Flat segmentation**: sections separate by background tint (`#f8f8f8` grey, `#fff1f5` pink, `#fafafa` alt) and `#e9ebec` hairlines, not shadow.
- **Pill rhythm**: repeated rounded chips and pills create a consistent, friendly horizontal cadence.

### Border Radius Scale
- Small (6px): search input
- Medium (8px): icon buttons, small controls
- Large (16px): product cards, content containers — the workhorse
- Pill (36px): category / delivery chips
- Full (9999px / 50%): keyword pills, avatars, circular frames

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, chips, inputs, headings |
| Tint (Level 1) | `#f8f8f8` / `#fff1f5` / `#fafafa` background shift | Card & section separation without elevation |
| Hairline (Level 2) | `1px solid #e9ebec` border | Input outlines, dividers |
| Overlay (Level 3) | `#1c1e21` at ~0.6 alpha | Image-on-media counters and scrims |

**Shadow Philosophy**: Pet Friends is a near-shadowless, flat system. Live inspection returned `box-shadow: none` across the header chips, search input, and headings. Depth and grouping come from flat tinted surfaces (`#f8f8f8`, `#fff1f5`), thin `#e9ebec` hairlines, and — where content sits on photography — a near-black `#1c1e21` overlay rather than a cast shadow. This keeps the commerce UI feeling fast, bright, and mobile-native. When emphasis is needed the system reaches for color (pink `#ff4081`, red `#f33f46`), never elevation.

## 7. Do's and Don'ts

### Do
- Use the custom Lific typeface (with Noto Sans KR fallback) across headings and body
- Reserve the vivid pink (`#ff4081`) for emphasis words and the primary action — keep it the single "do this" color
- Put the persuasive word of a headline in weight 900 pink; keep the rest quiet grey
- Use signal red (`#f33f46`) only for discount percentages, and deeper magenta (`#ea306f`) for sale copy
- Use soft charcoal (`#2d3035`) for reading text instead of pure black
- Separate sections with flat tints (`#f8f8f8`, `#fff1f5`) and `#e9ebec` hairlines, not shadows
- Use friendly geometry — 36px chips, 16px product cards, circular avatars
- Apply the `#1c1e21` overlay for counters/scrims on top of product imagery

### Don't
- Spread the pink across many elements — it dilutes the single-action signal
- Use drop shadows for elevation — Pet Friends is a flat, shadow-free system
- Use signal red (`#f33f46`) for anything other than price/discount urgency
- Set headline emphasis in a light weight — the persuasive word is always weight 900
- Use pure black (`#000000`) for long-form body text — reserve charcoal `#2d3035`
- Introduce a competing display typeface — Lific owns the voice
- Use sharp square corners on chips, cards, or pills — everything is rounded
- Let the periwinkle accent-blue (`#6078e4`) compete with pink as a primary action

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Primary target — single column app shell, chips + search header, carousels |
| Tablet | 640-1024px | Wider grids, 2–3-up product cards |
| Desktop | >1024px | `www` host redirects to the `m.` mobile commerce experience; layout stays app-width and centered |

### Touch Targets
- Category / delivery chips at 32px height with asymmetric padding — comfortably tappable
- Search field at 52px height, full-width
- Keyword pills at 30px height, 3px 15px padding

### Collapsing Strategy
- Header: category + delivery chips stay pinned above the search field
- Product carousels scroll horizontally on narrow viewports
- Merchandising bands stack vertically, each keeping its tinted background
- Product cards maintain 16px radius across breakpoints

### Image Behavior
- Product photography sits on `#f8f8f8` card surfaces at all sizes, no shadow
- Media carousels carry the `#1c1e21` overlay counter regardless of viewport
- Cards maintain consistent 16px radius

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action / emphasis: Pet Friends Pink (`#ff4081`)
- Sale copy: Deep Magenta (`#ea306f`)
- Discount %: Signal Red (`#f33f46`)
- Background: Pure White (`#ffffff`)
- Product surface: Product Grey (`#f8f8f8`)
- Chip tint: Surface Pink (`#fff1f5`)
- Keyword pill: Soft Pink (`#ffaac7`)
- Text / headings: Ink Charcoal (`#2d3035`)
- Muted text: Muted Grey (`#9ca1aa`)
- Hairline: `#e9ebec`
- Overlay: `#1c1e21`
- Accent: Periwinkle (`#6078e4`)

### Example Component Prompts
- "Create a mobile commerce header on white. A row of pill chips: `#fff1f5` background, `#000000` text, 36px radius, 4px 8px 4px 12px padding, 32px height (category + '배송지 입력'). Below it a 52px search field: white background, 1px solid `#e9ebec` border, 6px radius, 20px Lific text, placeholder '어떤 상품을 찾으시나요?'."
- "Design a section headline in Lific 18px weight 700, letter-spacing -0.2px, `#2d3035`, with the key phrase in weight 900 pink `#ff4081` — e.g. 최저가 **도전 사료 모음!**."
- "Build a product card: `#f8f8f8` background, 16px radius, no shadow. Product title 13px Lific weight 400, `#2d3035`. Discount percentage 16px weight 700 in signal red `#f33f46`."
- "Create a trending-keyword pill row: soft pink `#ffaac7` background, white text, 19px radius, 3px 15px padding, 30px height."

### Iteration Guide
1. Lific (Noto Sans KR fallback) everywhere; no second display face
2. Pink (`#ff4081`) is the single action / emphasis color — don't spread it
3. Headline emphasis word = weight 900 pink; body = weight 400 charcoal
4. No shadows — separate with `#f8f8f8` / `#fff1f5` tint and `#e9ebec` hairlines
5. Discount % is always signal red `#f33f46`; sale copy is deep magenta `#ea306f`
6. Friendly geometry — 36px chips, 16px cards, circular avatars
7. Overlay counters on media use `#1c1e21` at low alpha, never a cast shadow

---

## 10. Voice & Tone

Pet Friends' voice is **warm, playful, and reassuring** — it speaks to owners as fellow "집사" (butlers/servants of their pets) raising "내새꾸" (my babies), turning the transactional act of buying pet food into a caring, community-flavored ritual. The register is upbeat and benefit-first, unafraid of a pun: the search placeholder reads "어떤 상품을 찾고 있개?" — swapping 개 (dog) into "찾고 있어?" for a smile. Copy leads with the deal and the emotional payoff, then backs it with hard numbers (재구매율 89%, 최저가).

| Context | Tone |
|---|---|
| Section headlines | Upbeat, benefit-first, one emphasized phrase in pink. "집사님을 위한 오늘 특가!" |
| Product titles | Plain, descriptive, brand + spec. Quiet grey, no hype. |
| Discount / price | Numeric and confident. Big red "%", "최저가 도전". |
| Search / empty prompts | Playful, pet-punny. "어떤 상품을 찾고 있개?" |
| Trust / community copy | Warm, proof-backed. "써봐야 아니까! 심쿵 체험단", "재구매율 89%". |

**Voice samples (verbatim from live surfaces):**
- "반려동물 1등 쇼핑몰, 펫프렌즈" — page title / positioning. *(verified live 2026-07-02)*
- "내새꾸 친구들에게 재구매율 89%를 보이는 영양/기능" — merchandising headline (proof-backed care). *(verified live 2026-07-02)*
- "육아비는 펫프랑 나눠요\n집사님을 위한 오늘 특가!" — section headline (community + deal). *(verified live 2026-07-02)*
- "어떤 상품을 찾고 있개?" — search placeholder (pet pun). *(verified live 2026-07-02)*

**Forbidden register**: cold marketplace/logistics jargon, guilt-based pet-parent pressure, undefined promotional fine print, hype that isn't backed by a concrete number.

## 11. Brand Narrative

Pet Friends (펫프렌즈) launched in **2015** and grew into Korea's leading pet-commerce platform, positioning itself plainly on every surface as the "반려동물 1등 쇼핑몰" (No.1 pet shopping mall). Its founding premise addressed a specific Korean pain point: pet owners buying food and supplies across fragmented offline shops and generic marketplaces, with little curation and slow delivery. Pet Friends reframed the category around fast (same-day / dawn) delivery of pet essentials, data-driven product curation, and a community of owners who trust each other's reviews.

The product's identity is built around the emotional relationship between owner and pet — the recurring "집사님" (butler) and "내새꾸" (my baby) language treats customers as devoted caregivers rather than shoppers. Merchandising leans on social proof ("재구매율 89%", "심쿵 체험단" trial squads) and price confidence ("최저가 도전"), reflecting a business that competes on trust, speed, and value at once.

What Pet Friends refuses, visible in its design: the cold, shadow-heavy chrome of a generic logistics marketplace, and the guilt-driven marketing sometimes used in the pet category. What it embraces: a bright, near-flat mobile-first interface; a single affectionate pink; playful, punny copy; and a relentless, number-backed focus on the deal — all in service of making caring for a pet feel joyful and effortless.

## 12. Principles

1. **Pink means love and action.** The vivid pink (`#ff4081`) is both the brand's warmth and its call-to-action. *UI implication:* reserve pink for emphasis words and the primary action so affection and "do this" read as the same gesture.
2. **Owner as devoted caregiver.** Customers are 집사 raising 내새꾸, not buyers. *UI implication:* copy and empty states speak with warmth and play (the 개 pun), never cold transaction language.
3. **Prove the promise.** Trust is earned with numbers — 재구매율 89%, 최저가, 체험단. *UI implication:* pair every persuasive headline with a concrete figure in red or bold.
4. **Flat and fast.** A mobile-native commerce app should feel bright and quick. *UI implication:* no shadows; separate with tint and `#e9ebec` hairlines; keep cards clean and rounded.
5. **Friendly geometry.** Rounded chips, pills, and cards make a data-dense store feel approachable. *UI implication:* use 36px chips, 16px cards, and circular frames; avoid sharp corners.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Pet Friends user segments (Korean dog and cat owners buying food and supplies online), not individual people.*

**김서연, 32, 서울.** A first-time puppy owner who orders food, treats, and pads weekly. Values same-day delivery and the "심쿵 체험단" trials that let her test products before committing. Chose Pet Friends because the app feels warm and the reviews feel honest, not like a faceless marketplace.

**이준호, 41, 경기.** A two-cat household manager who buys in bulk and chases "최저가 도전" deals. Scans the red discount percentages first, then the product title. Appreciates that the price signal is unmistakable without hunting through fine print.

**박민지, 27, 부산.** A dog owner active in the community and 체험단 program. Loves the playful copy ("찾고 있개?") and the sense that Pet Friends is run by fellow 집사. Trusts the "재구매율 89%" style proof more than star ratings.

## 14. States

| State | Treatment |
|---|---|
| **Empty (search, no results)** | White canvas. Charcoal (`#2d3035`) line explaining no matching products, with a pink (`#ff4081`) suggestion to browse categories. Playful, never a dead end. |
| **Empty (cart)** | Charcoal single line plus a pink CTA back to shopping. Warm, low-pressure tone. |
| **Loading (product grid)** | Skeleton cards on `#f8f8f8` at final 16px-radius dimensions. Flat pulse, no shadow shimmer — consistent with the shadowless system. |
| **Loading (search)** | Inline spinner in the 52px field; previous results stay visible where possible. |
| **Error (fetch failed)** | Inline message in charcoal with a plain-language explanation and a retry. No bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input in a warm tone; describes what's valid, not just "필수". |
| **Success (added to cart)** | Brief confirmation in the pink brand tone; quick path to cart. No guilt, no clutter. |
| **Skeleton** | `#f8f8f8` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Muted grey (`#9ca1aa`) text on reduced-opacity surface; pink actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Chip / pill press, hover, focus |
| `motion-standard` | 220ms | Card & sheet reveal, carousel slide, dropdown |
| `motion-slow` | 320ms | Page-level transitions, promotional reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, carousels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is friendly but quick — consistent with the bright, fast commerce feel. Pill chips respond to press with a subtle scale/opacity shift; product carousels slide at `motion-standard / ease-enter`; add-to-cart confirmations pop briefly in the pink tone. No heavy bounce that would slow browsing. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the store remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on Pet Friends
mobile commerce surfaces (www.pet-friends.co.kr redirects to m.pet-friends.co.kr):
- Homepage (m.pet-friends.co.kr/main/tab/2): body font "Lific, Noto Sans KR";
  section H2 18px/700/-0.2px color rgb(45,48,53) #2d3035 with <b> emphasis 18px/900
  in rgb(255,64,129) #ff4081; product H3 13px/400/lh18px; discount <strong> 16px/700
  color rgb(243,63,70) #f33f46; category chip bg rgb(255,241,245) #fff1f5 radius 36px;
  keyword pill bg rgba(255,170,199,0.5) (#ffaac7) radius 18.5px; search input radius 6px
  border-color rgb(233,235,236) #e9ebec text rgb(45,48,53); product card bg rgb(248,248,248)
  #f8f8f8 radius 16px; overlay counter bg rgba(28,30,33,0.6) #1c1e21 radius 20px.
- Search surface (m.pet-friends.co.kr/search/result): same chip/pill/input system;
  placeholders "어떤 상품을 찾으시나요?" and "어떤 상품을 찾고 있개?".
- Product-list surface (m.pet-friends.co.kr/main/product/list/16982): bg-frequency scan
  showed rgb(255,64,129) #ff4081 ×20 (solid pink action fills), rgb(45,48,53) ×20,
  rgb(96,120,228) #6078e4 ×20 (promo accent), rgb(250,250,250) #fafafa ×20; circular
  avatar bg rgb(249,249,249) radius 50%.

Token-level claims (§1–9) are sourced from this live inspection; raw samples logged in
web/references/petfriends/.verification.md.

Voice samples (§10) are verbatim from live surfaces (page title, merchandising headlines,
search placeholder).

Brand narrative (§11): Pet Friends (펫프렌즈) is a Korean pet e-commerce platform that
launched in 2015 and positions itself as the "반려동물 1등 쇼핑몰" (verified live on the
homepage/title). Broader founding/company details beyond the on-site positioning are
general public knowledge and were not independently re-verified from a first-party Pet
Friends statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Pet Friends user
segments (Korean dog/cat owners). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "pink means love and action", "flat and fast as a rejection of
cold marketplace chrome") are editorial readings connecting the observed design to the
brand's positioning, not directly sourced Pet Friends statements.
-->
