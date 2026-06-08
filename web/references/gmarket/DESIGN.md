---
id: gmarket
name: Gmarket
display_name_kr: 지마켓
country: KR
category: ecommerce
homepage: "https://www.gmarket.co.kr"
primary_color: "#ffd200"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=gmarket.co.kr&sz=256"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: Gmarket Sans
  url: "https://corp.gmarket.com/fonts/"
  type: brand
  description: "Gmarket's SIL OFL brand typeface — 3 weights, TTF/OTF, 11,172 KR glyphs. First-party font artifact from a 25-year-old open marketplace; backing 247 :root CSS vars + Smile Yellow #ffd200 + Club/Event/Service sub-systems on the storefront."
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#da120d"
    brand: "#da120d"
    error: "#ef2b2a"
    canvas: "#ffffff"
    surface: "#ffffff"
    foreground: "#222222"
    muted: "#757575"
    on-primary: "#ffffff"
    hairline: "#e0e0e0"
    success: "#00c400"
    accent-smile: "#ffd200"
    accent-stardelivery: "#7130f3"
    accent-connect: "#00c3a0"
    club-navy: "#002041"
    club-blue: "#497cff"
    event-bf: "#f1266d"
    event-bs: "#fd4e28"
    event-bsd: "#7b00e7"
  typography:
    family: { sans: "Gmarket Sans", mono: "system-ui" }
    section-hero:  { size: 28, weight: 700, lineHeight: 1.2, use: "Hero module section H2" }
    section-compact: { size: 24, weight: 700, lineHeight: 1.2, use: "Compact module H2" }
    card-title:    { size: 18.72, weight: 700, lineHeight: 1.3, use: "Card H3 heading" }
    body:          { size: 16, weight: 400, lineHeight: 1.5, use: "Body, card title, primary nav" }
    body-strong:   { size: 16, weight: 700, lineHeight: 1.4, use: "Price emphasis, strong body" }
    secondary:     { size: 14, weight: 400, lineHeight: 1.4, use: "Secondary nav, filter/utility" }
    utility:       { size: 13.3333, weight: 400, lineHeight: 1.4, use: "Utility text, tooltip, swiper label" }
    meta:          { size: 12, weight: 400, lineHeight: 1.4, use: "Meta text, footer notices, micro-badge" }
    price-modifier: { size: 11, weight: 500, lineHeight: 1.4, use: "Price-modifier label 쿠폰적용가" }
  spacing: { micro: 4, sm: 8, md: 16, lg: 24, module: 64 }
  rounded: { sm: 3, md: 4, lg: 20, full: 9999 }
  shadow:
    none: "none"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#da120d", fg: "#ffffff", radius: "4px", padding: "14px 24px", font: "16px / 700", use: "Highest-intent purchase CTA, one per surface" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#222222", border: "1px solid #e0e0e0", radius: "3px", font: "14px / 400", use: "Chrome-utility actions, footer button" }
    button-pill: { type: button, bg: "#ffffff", fg: "#666666", border: "1px solid #e0e0e0", radius: "20px", font: "16px / 400", states: "active fg #222222", use: "Home module entry pills, GNB sub-category chips" }
    input-search: { type: input, bg: "#ffffff", fg: "#222222", border: "2px solid #222222", radius: "0px", height: "44px", font: "16px / 400", use: "Header search field, signature dark-stroked" }
    input-filter: { type: input, bg: "#ffffff", border: "1px solid #e0e0e0", radius: "3px", font: "14px / 400", use: "Filter / sort refinement strip" }
    card-product: { type: card, bg: "#ffffff", radius: "6px", shadow: "none", padding: "8px 0", use: "Home / bestsellers product card; title #222222, price #da120d 700, separation via gutter not shadow" }
    badge-discount: { type: badge, bg: "#fff5f5", fg: "#da120d", radius: "3px", font: "12px / 700", use: "Discount-rate badge, percentage-off" }
    badge-club: { type: badge, bg: "#002041", fg: "#ffd200", radius: "4px", font: "11px / 700", use: "Smile Club loyalty badge" }
    chip-delivery: { type: badge, bg: "#ffd200", fg: "#222222", radius: "3px", padding: "2px 6px", font: "11px / 500", use: "스마일배송 yellow chip; 무료배송 gray #f5f5f5, StarDelivery purple #7130f3 w/ white text" }
    nav-anchor: { type: tab, fg: "#222222", padding: "17px 0px 20px", font: "16px / 400", active: "current fg #da120d, 2px bottom border #222222 on hover", use: "GNB top primary anchor" }
    layer-recent: { type: dialog, bg: "#ffffff", border: "1px solid #e0e0e0", shadow: "none", use: "Recent-products layer; title 16px/700 #222222" }
    banner-event: { type: card, bg: "#f1266d", fg: "#ffffff", use: "BF/BS/BSD full-bleed event-week module; BS #fd4e28, BSD #7b00e7" }
---

# Design System Inspiration of Gmarket (지마켓)

## 1. Visual Theme & Atmosphere

Gmarket is what a quarter-century-old Korean open-market looks like after Shinsegae's 2021 acquisition: a department-store conglomerate has bought a Y2K-era trading floor and is mid-renovation, but the floor is still open and the deals are still moving. The home page is unapologetically dense — a 1200px fixed canvas (`--minWidth: 1200px`), white surface, ink-near-black text (`#222222`), and a single, surgical brand asset: **Gmarket Red** `#da120d`, deployed almost exclusively on price (`쿠폰적용가`, `52%`, the final-card-discount line). There is no gradient, no hero video, no marketing flourish. The atmosphere is **"전단지가 잘 정돈된 백화점 1층"** — a leaflet, organized — where every pixel of vertical real estate is a chance to surface another deal, and the visual job of design is to keep that density legible.

The page reads as a vertical stack of category modules, each anchored by an H2 in 28px/700 (or 24px/700 in the compact module variant), beneath which 2-up or 4-up product cards repeat indefinitely. The product card itself is a Korean-marketplace classic: thumbnail (mostly 1:1 square, occasionally 16:9 banner), title in body weight, price in 16–18px Gmarket Red and bold, then a delivery chip (스마일배송 / 무료배송), a few badges (쿠폰적용가 / 카드혜택가), and a heart. Cards never carry box-shadow — depth, in Gmarket's chrome, is borders and color tints, not elevation. Pills, however, are everywhere: navigation chips, filter strips, "Smile Club" loyalty rails, all radius 20–27px.

The token system, captured live from `:root`, is **enormous** — 247 CSS custom properties — and unusually formal for a legacy marketplace. Ten hues (gray, red, orange, yellow, green, teal, blue, indigo, purple, pink), each in a clean 10-stop ladder (50→900), plus three sub-systems that map directly to revenue programs: **Club Smile** (Shinsegae Universe loyalty — navy/blue/gray, each in 5 stops), **Event** (BF / BS / BSD sub-brand event accents), and three single-token service accents (Smile-Yellow `#ffd200`, StarDelivery-Purple `#7130f3`, Green-Connect-Blue `#00c3a0`). The display face is the brand's own **Gmarket Sans** — distributed at `corp.gmarket.com/fonts/` under the SIL Open Font License in three weights (Light 300 / Medium 500 / Bold 700) — used for section H2s, banner copy, and the (image-replacement) wordmark. The body, in contrast, rides the Apple-SD-Gothic-Neo / Noto Sans CJK KR system stack, which is the conventional choice when you cannot guarantee the user has downloaded the brand font.

**Key Characteristics:**
- **Gmarket Red** `#da120d` as the *price-discount asset* — almost exclusively used on numerical price/discount strings, not as a generic primary CTA fill
- **Gmarket Sans** as the official display typeface (SIL OFL, 3 weights) — one of the rare Korean DSes with a first-party distributed brand font
- **Ten-hue × 10-stop formal color ladder** + three named sub-systems (Club Smile / Event / Service-accent) — atypical token-system maturity for a legacy 2000-era marketplace
- **1200px fixed desktop canvas** — Gmarket has not committed to fluid responsive on its web flagship; mobile lives at `m.gmarket.co.kr`
- **No box-shadow** in sampled production — depth is borders + tints, identical to Bunjang
- **Sprite-driven icons** (`sprite__common--before` / `sprite__common--after`) — legacy CSS sprites, deliberately not migrated to SVG
- **BEM-flavored naming** — `button__category-all`, `text__title`, `box__layer-title`, `list-item--recent` — the production code is more disciplined than the rendered density suggests
- **Density over hierarchy** — page is 10+ stacked category modules deep; users scan visual rhythm (red price + thumbnail), not headings

## 2. Color Palette & Roles

All values captured 2026-05-15 from production `:root` CSS custom properties via `getComputedStyle(document.documentElement)` on `https://www.gmarket.co.kr/` and `https://corners.gmarket.co.kr/Bestsellers`. Token names preserve Gmarket's own casing (PascalCase-Hyphen, e.g. `--Red-600`, `--Club-Navy-Main`).

### Primary Brand
- **Gmarket Red** (`#da120d`) — `--Red-600`. The brand-level red. Observed exclusively on price-discount text, percentage-off chips, and the occasional CTA edge — not used as a flooded button fill in sampled chrome.
- **Pure White** (`#ffffff`) — `--White`. Page background, card surface.
- **Near-Black Ink** (`#222222`) — `--Gray-900`. Primary text, headings, prices co-anchor with `--Red-600`.

### Service-line Accents
- **Smile Yellow** (`#ffd200`) — `--Smile-Yellow`. Loyalty / SmilePay / SmileClub program color.
- **StarDelivery Purple** (`#7130f3`) — `--StarDelivery-Purple`. Same-day premium delivery service color.
- **Green-Connect-Blue** (`#00c3a0`) — `--Green-Connect-Blue`. Cross-app continuity / Shinsegae connect program teal.

### Event Sub-brands (promotional surfaces only)
- **BF main** (`#f1266d`) — `--Event-bf-main`. Black Friday / large promo pink-red.
- **BS main** (`#fd4e28`) — `--Event-bs-main`. Big-sale orange-red.
- **BSD main** (`#7b00e7`) — `--Event-bsd-main`. Specialty promotion violet.

### Club Smile (Shinsegae Universe loyalty)
A separate sub-system, with its own Navy / Blue / Gray ladders — used on members-only Club rails and the Smile Universe surface.
- **Navy** — `--Club-Navy-Main #002041` / `-80 #334d67` / `-60 #66798d` / `-40 #99a6b3` / `-20 #ccd2d9`
- **Blue** — `--Club-Blue-Main #497cff` / `-80 #6d96ff` / `-60 #92b0ff` / `-40 #b6cbff` / `-20 #dbe5ff`
- **Gray** — `--Club-Gray-Main #c8c8c8` / `-80 #d3d3d3` / `-60 #dedede` / `-40 #e9e9e9` / `-20 #f4f4f4`

### Neutral Scale (`--Gray-*`)
A 10-stop ladder, semantically aligned with Material's named stops but with Gmarket's own observed text-color discipline.
- `--Gray-900` `#222222` — primary text, prices (when not red), headings
- `--Gray-800` `#424242` — strong secondary text
- `--Gray-700` `#616161` — secondary text
- `--Gray-600` `#757575` — tertiary text, footer
- `--Gray-500` `#9e9e9e` — disabled text, placeholder
- `--Gray-400` `#bdbdbd` — disabled-icon, divider-strong
- `--Gray-300` `#e0e0e0` — divider, input border
- `--Gray-200` `#eeeeee` — light divider, card edge
- `--Gray-100` `#f5f5f5` — section tint, row hover
- `--Gray-50`  `#fafafa` — barely-tinted alternate row

### Semantic / Utility Hues (each as a 10-stop ladder; `-600` is the most-deployed default)
- **Red** — 50→900 (`#fff5f5` → `#7d0800`); brand & price use `-600 #da120d`, destructive/error typically `-500 #ef2b2a`
- **Orange** — 50→900 (`#fff6f2` → `#5e2700`); time-pressure / countdown / "마감임박" badges use `-500 #f9560e` and `-600 #da4000`
- **Yellow** — 50→900 (`#fffce5` → `#592500`); warning + the Smile-program family
- **Green** — 50→900 (`#e5fce3` → `#013600`); availability / success — `-500 #00c400` observed for delivery-confirmed and stock-ok states
- **Teal** — 50→900 (`#eaf9fa` → `#0a3545`); informational secondary, connect-program accent
- **Blue** — 50→900 (`#eef7ff` → `#072182`); information, link, secondary CTA; `--swiper-theme-color: #007aff` is Swiper.js default, separately
- **Indigo** — 50→900 (`#f5f5ff` → `#2d2587`); intentionally-cool informational, used on tab strips
- **Purple** — 50→900 (`#fbf5ff` → `#37188c`); brand-extension, premium feature surfaces
- **Pink** — 50→900 (`#fff2fc` → `#64009a`); promotional surfaces, often paired with `--Event-bf-main`

### Default Page Surfaces
- Page background: `#ffffff`
- Card / surface: `#ffffff`
- Footer / footer-area tint: `--Gray-100 #f5f5f5`
- Section-divider tint: `--Gray-50 #fafafa`

## 3. Typography

Gmarket runs a two-tier typography model: a **first-party display face** for set-piece moments and a **conventional Korean system stack** for body density.

### Type Stack
- **Display** — `--gmarketFont: "Gmarket Sans", sans-serif`. Used on section H2s (28px / 700 in hero modules, 24px / 700 in compact modules), the H1 wordmark (image-replacement, `font-size: 0`), and promotional banner copy.
- **Body / system** — `-apple-system, system-ui, "Apple SD Gothic Neo", Roboto, "Noto Sans CJK KR", Tahoma, "Noto Sans Korean", "Noto Sans KR", "Gmarket Sans", sans-serif`. Used on 146 / 272 sampled elements — the conventional Korean Apple-first → Noto-fallback chain, with Gmarket Sans as the final fallback before generic sans.

### Gmarket Sans (first-party)
Distributed at `corp.gmarket.com/fonts/` under the **SIL Open Font License** (free commercial + non-commercial), released in TTF and OTF, in three weights:
- **Light** (300)
- **Medium** (500)
- **Bold** (700)

Character set: 11,172 Korean syllables · 95 Latin · 986 special. Design intent (per the distribution page): geometric forms within square boundaries, aligned for accessibility across print/web/mobile. The font is the strongest single Tier-1 design-system artifact Gmarket publishes — no token JSON, no Storybook, no Figma library is publicly available, but the brand font is fully open and free to vendor.

### Observed Size Scale (px)
- `28px / 700` — Section H2 (hero modules: "지금 제일 잘 나가는 상품")
- `28px / 400` — Subpage H2 (베스트 page: "G마켓 베스트" — note the lighter weight, used when the page itself is the title)
- `24px / 700` — Compact module H2 ("전체카테고리", "프로모션 배너")
- `18.72px / 700` — Card H3 ("하나더 상품", "베스트 상품")
- `16px / 400-700` — Body, primary card title, primary nav anchor, price emphasis
- `14px / 400` — Secondary nav, GNB language switcher ("Global"), filter/utility text
- `13.3333px / 400` — Utility text, tooltip, swiper-button label, layer-close
- `12px / 400-500` — Meta text, footer notices, micro-badges
- `11px / 500` — Price-modifier labels ("쿠폰적용가"), the smallest legible price-context tag

### Weight Discipline
Two production weights dominate: **400** (body / nav / meta) and **700** (headings / prices / strong emphasis). Gmarket Sans's available **500 (Medium)** is *less frequently observed in sampled production CSS* — primarily reserved for the rendered logotype and certain banner overlays. The marketing surfaces lean on the 400/700 binary because the body system stack (Apple SD Gothic Neo, Noto Sans KR) is most stable at those two weights.

### Line-height
Largely default-browser (1.2–1.5 depending on element). Gmarket does not enforce a strict line-height token system on the home/bestsellers surfaces.

## 4. Components

All values from live CDP inspect on 2026-05-15. Where a state was not directly observed (hover / pressed / focus / disabled), the value is marked `(Inferred)`. Schema: one field per bullet.

### Buttons

**Primary CTA (price-anchor / "쇼핑하러 가기")**
- Background: `#da120d` *(Inferred — observed as text color, also matches `--Red-600`; some commerce-detail CTAs ship as red flood fills)*
- Text: `#ffffff`
- Border: none
- Radius: `4px` *(matches observed --radius level)*
- Padding: `14px 24px` *(Inferred from observed nav padding scale)*
- Font: 16px / 700 / system stack
- Use: highest-intent purchase action; restricted to one per surface

**Secondary / Outlined**
- Background: `#ffffff`
- Text: `#222222`
- Border: `1px solid #e0e0e0`  (`--Gray-300`)
- Radius: `3px`
- Padding: `0px` *(observed on `button__sellermenu` — chrome-utility variant; commerce-page secondary buttons inflate to `10px 16px`)*
- Font: 14px / 400 / system stack
- Use: chrome-utility actions, "판매자서비스" footer button

**Pill / Filter (nav anchor + category chips)**
- Background: `transparent` or `#ffffff`
- Text: `#222222` (active) / `#666666` (default)
- Border: `1px solid #e0e0e0`  *(default, Inferred from card edge token)*
- Radius: `20px`
- Padding: variable `(8–12)px (16–20)px`
- Font: 16px / 400 / system stack
- Use: home-page module entry pills, GNB sub-category chips

**Pill / Promo banner ("하나더")**
- Background: `transparent`
- Text: `#666666`
- Radius: `20px`
- Font: 16px / 400 / system stack
- Use: in-card promo link with rounded pill affordance, observed live

**Sprite / Icon Button**
- Background: `transparent`
- Text: `transparent` (icon-only — text hidden via sprite)
- Border: none
- Radius: `0px`
- Padding: `0–5px`
- Use: layer-close (×), swiper-next/prev, tooltip-info, search-clear; legacy CSS-sprite-driven (`sprite__common`)

### Inputs

**Search Field (header)**
- Background: `#ffffff`
- Text: `#222222`
- Border: `2px solid #222222` *(Inferred — Gmarket's signature dark-stroked search input)*
- Radius: `0px`
- Height: `42–48px`
- Font: 16px / 400 / system stack
- Inner button: `button__search` sprite icon-only
- Placeholder: `#9e9e9e` (`--Gray-500`)

**Filter / Sort Input (refinement strip)**
- Background: `#ffffff`
- Border: `1px solid #e0e0e0`
- Radius: `3px` *(observed)*
- Padding: `0`
- Font: 14px / 400

### Cards

**Product Card (home / bestsellers)**
- Background: `#ffffff`
- Border: none (separation via 8–16px gutter)
- Radius: `0–6px` on thumbnail container; card itself: `0px`
- Shadow: none
- Padding: thumbnail flush, content padding `8px 0`
- Thumbnail aspect: 1:1 (square) — dominant; 16:9 for banner-card variants
- Title: 14–16px / 400 / `#222222`
- Price (current): 16–18px / 700 / `#da120d`
- Price (original / strike): 12–13px / 400 / `#9e9e9e` with `text-decoration: line-through`
- Discount %: 12–18px / 700 / `#da120d`
- Delivery chip: 11–12px / 500 / chip-background tied to service (스마일배송 yellow / 무료배송 gray)

**Ranking Card (bestsellers)**
- Adds: numeric rank badge (1, 2, 3 ...) top-left, 18–24px / 700, no fill
- Top-3 ranks: `#da120d` text
- Ranks 4+: `#222222` text

### Badges / Chips

**Discount-rate Badge**
- Background: transparent (text-only) or `--Red-50 #fff5f5`
- Text: `#da120d`
- Radius: `0px` or `3px`
- Font: 12–14px / 700

**Smile Club / Loyalty Badge**
- Background: `--Club-Navy-Main #002041`
- Text: `#ffd200` (Smile-Yellow)
- Radius: `3–4px`
- Font: 11–12px / 700

**Delivery Chip (스마일배송 / 무료배송 / 도착보장)**
- Background: `--Smile-Yellow #ffd200` (스마일배송) / `--Gray-100 #f5f5f5` (무료배송) / `--StarDelivery-Purple #7130f3` (StarDelivery)
- Text: `#222222` on yellow / `#616161` on gray / `#ffffff` on purple
- Radius: `2–3px`
- Padding: `2px 6px`
- Font: 11px / 500

### Navigation

**GNB Anchor (top primary)**
- Background: `transparent` (default) → `#222222` underline 2px (hover)
- Text: `#222222` (default) / `#da120d` (current)
- Padding: `17px 0px 20px`  *(observed live on `button__category-all`)*
- Font: 16px / 400 / system stack

**Utility Nav (top-bar mypage / cart / global)**
- Text: `#777777` (`--Gray-medium`)
- Font: 14px / 400 / system stack
- Padding: minimal — text-only with sprite icon

### Layers / Modals

**Recent-products Layer (`box__layer-title`)**
- Background: `#ffffff`
- Border: `1px solid #e0e0e0` *(Inferred)*
- Shadow: none observed
- Title: 16px / 700 / `#222222` ("최근 본 상품")
- Tab inactive: `#666666` (`--Gray-medium`)

### Service Banners (event-system surfaces)

**BF / BS / BSD promotional fills**
- Background: `--Event-bf-main #f1266d` (BF) / `--Event-bs-main #fd4e28` (BS) / `--Event-bsd-main #7b00e7` (BSD)
- Text: `#ffffff`
- Use: full-bleed event-week landing modules — these are *not* part of the everyday chrome; they swap in for event-period campaigns and revert

---

**Verified:** 2026-05-15
**Tier 1 sources:**
- Live CDP `:9222` inspect — `https://www.gmarket.co.kr/` (182 samples, 247 :root CSS vars)
- Live CDP `:9222` inspect — `https://corners.gmarket.co.kr/Bestsellers` (90 samples, 246 :root CSS vars)
- `corp.gmarket.com/fonts/` — Gmarket Sans SIL OFL distribution page (typeface = Tier-1-positive)
**Tier 2 sources:**
- `getdesign.md/gmarket` — "No designs found for 'gmarket'" (verified 2026-05-15)
- `styles.refero.design/?q=gmarket` — no result cards in SSR DOM (verified 2026-05-15)
**Conflicts unresolved:**
- Primary CTA flooded-red variant inferred (not observed in 272 sampled chrome elements; commerce-detail-page surfaces not captured this pass — flagged for UPDATE)
- Hover / pressed / focus / disabled states not directly captured — single-pass CDP only

## 5. Layout & Spacing

Gmarket's flagship runs a **fixed-1200px desktop canvas** (`--minWidth: 1200px`). This is a deliberate legacy decision — the 2000-founded marketplace has not committed to fluid responsive on `www.`; the mobile flagship lives at `m.gmarket.co.kr` as a separate surface. Below 1200px, the desktop site horizontal-scrolls rather than reflowing.

### Grid
- **Outer max-width**: 1200px, centered, no bleed
- **Module spacing**: ~48–64px vertical between category modules (H2 → first card row → repeat)
- **Card grid**: 2-up on narrow modules, 4-up on standard modules, 5-up on bestsellers-page rank grid
- **Card gutter**: 8–16px horizontal, 16–24px vertical
- **Inner card padding**: 8px around content, thumbnail flush
- **GNB strip height**: ~50–60px sticky, white background

### Spacing Scale (inferred from observed padding/margin frequencies)
Gmarket does not expose `--space-*` tokens. Observed paddings cluster at:
- `4px` — micro (chip vertical)
- `8px` — small (card inner)
- `12–16px` — medium (button horizontal, list-item padding)
- `20–24px` — large (section internal gap)
- `48–64px` — module vertical break

### Page Anatomy (home, top-to-bottom)
1. Top utility bar — mypage / cart / global / lang (12–13px utility text)
2. Main header — wordmark + search + cart icon
3. GNB — 전체카테고리 / 베스트 / 신상마켓 / 슈퍼딜 / 알뜰쇼핑 / 브랜드데이 / G마켓Pay / 골프 / 라이브
4. Hero swiper banner (Swiper.js, `--swiper-theme-color: #007aff`)
5. Vertical category modules ×10 (each = H2 + grid)
6. Footer — seller-services + legal + corp links + 신세계그룹 family-site row

## 6. Iconography & Imagery

- **CSS Sprites** — Gmarket has not migrated to SVG / icon-font for chrome icons. Production class system: `sprite`, `sprite__common`, `sprite__common--before`, `sprite__common--after`. Icons are positioned slivers of a master PNG, sized via `--spriteSize: 100% 100%`. This is a legacy choice — performance-fine, but inaccessible to recoloring at runtime.
- **Product thumbnails** — 1:1 square dominant; 16:9 banner cards for category-feature modules
- **Banner imagery** — promotional photography, large-typography overlays in Gmarket Sans, typically text + product + offer; brand stays out of the way
- **No illustration system** observed in chrome — Gmarket is a photo-first marketplace; illustrations appear only in onboarding / empty-states (not captured this pass)

## 7. Motion & Interaction

Motion tokens **not directly captured** in single-pass CDP. Observed motion patterns:
- **Swiper.js carousel** on hero banner — paged horizontal swipe (default Swiper timing, ~300ms)
- **Sticky GNB** — fixed on scroll, no transform animation
- **Hover affordances** — primarily underline + color shift on text-link; observed `cursor: pointer` on most clickable elements without elaborate transition
- **No view-transition / scroll-driven animation** observed in chrome

Flagged for UPDATE: capture explicit `transition` and `animation` shorthand frequencies, capture hover/focus states.

## 8. Accessibility & States

Gmarket's flagship has **observable a11y debt** — surfaced here factually, not editorialized.

- **H1 image-replacement** — the wordmark `<h1>` carries `font-size: 0px`; logo is a sprite background-image. Screen readers receive the text "G마켓" via inner span, but visually-rendered alt-text is absent. Acceptable pattern, but text-color falls back to `--Gray-500 #9e9e9e` in some sampled cases (image hides this).
- **Color contrast on price-red on white** — `#da120d` on `#ffffff` = 5.5:1 — passes WCAG AA for normal text (4.5:1) and AAA for large text (7:1+). Strong.
- **`--Smile-Yellow #ffd200` on `#ffffff`** — 1.6:1 — fails WCAG AA. Used as background fill with dark text, not on white as foreground. Risk only if reused inverted.
- **Fixed-1200px canvas** — fails WCAG 1.4.10 Reflow (320px reflow requirement). Mitigated only by the separate `m.gmarket.co.kr` mobile surface.
- **Sprite-driven icons** — no `aria-label` consistently observed on `button__layer-close`, `button__tooltip`, swiper next/prev. Mixed: `<button>` carries text "닫기" in some cases, sprite-only in others.
- **State coverage** — visible focus rings inconsistent; default-browser focus outline observed on `<a>`, custom focus rarely surfaced. Disabled state not directly captured.

Captured floor: focus rings + disabled states are an UPDATE-pass target.

## 9. Content Voice (analyst paraphrase — no verbatim Gmarket copy)

Gmarket's chrome voice is **transactional and time-pressured**. It speaks in numeric specificity (price, discount %, time-remaining) and in service-naming (스마일배송 / 안전결제 / 도착보장 / 카드혜택가). It does not advertise brand personality from the chrome — the chrome is the deal. Brand voice lives in event-week landing banners and in the corporate site (`corp.gmarket.com`), where positioning copy reads aspirational ("Korea's e-commerce benchmark", "We Connect", "지금부터의 마켓").

**Voice traits (analyst paraphrase, not lifted)**:
- Specific over evocative — "쿠폰적용가 7,840원" beats "Great deal"
- Compound service nouns — "스마일배송", "최종카드혜택가", "감정완료" — Korean marketplace argot, dense
- Numeric urgency — countdown, stock-low, "마감임박" are first-class typographic citizens
- Brand restraint — "G마켓" rarely speaks in first-person; the user does the verb

**Do**: lead with price, name the service plainly, let the number do the work
**Don't**: invent a brand voice from chrome — Gmarket's chrome is a venue, not a personality

## 10. Voice & Tone (illustrative — OmD fresh derivations, not Gmarket copy)

Three voice samples illustrating the analyst paraphrase above. **These are fresh derivations for ports — not Gmarket marketing copy. Verify before adoption.**

- *"오늘 가격, 오늘 도착."* — six syllables, two facts, no adjective
- *"쿠폰 적용 시 22% 더."* — price-context as headline; the verb is invisible
- *"이 가격, 이번 주만."* — temporal scarcity without exclamation

**Do**: specificity, service-name accuracy, price-first
**Don't**: emotional adjectives ("amazing", "최고의"), abstract brand-claims, hero-tagline gestures in card chrome

## 11. Brand Narrative

Gmarket (지마켓) was founded as **2000** as an open-market predecessor of Korean e-commerce — among the first generations of platforms that let any individual seller post a product to a national catalog. eBay acquired the platform in 2009 and ran it as eBay Korea, alongside Auction (founded 1998, the older sibling). In **2021, Shinsegae Group (신세계그룹)** — the conglomerate behind E-Mart, the Shinsegae Department Store, and Starbucks Korea — acquired the eBay Korea business unit, bringing Gmarket and Auction under the Shinsegae Universe umbrella, alongside SSG.com and E-Mart Mall. The 2024–2026 chrome reflects this transition: the home page now surfaces "신세계 유니버스 클럽 전용" modules, the **Club Smile** color sub-system maps to Shinsegae's loyalty programme, and an "이마트몰" (E-Mart Mall) section ships fresh groceries inside the Gmarket interface.

Gmarket's positioning slogan, observed on the corporate site as factual context: **"지금부터의 마켓"** ("the market from-now-onward"). The narrative argues that 25 years of marketplace experience is being relaunched as a Shinsegae-integrated commerce floor — Auction for the auction-hunters, Gmarket for the open-market regulars, SSG.com for the premium-vertical, all stitched together with SmilePay (single wallet), StarDelivery (premium delivery), and Smile Club (loyalty + members-only pricing).

Service portfolio (per `corp.gmarket.com`, captured 2026-05-15): **Gmarket** (open market, since 2000), **Auction** (since 1998), **SmilePay** (wallet), **StarDelivery** (premium delivery), **Smile Club** (Shinsegae Universe loyalty), **G마켓Pay** (payment integration). HQ city, current CEO, headcount, and total funding not captured this pass (corporate site does not surface them on the analyzed page) — flagged for UPDATE.

*(Founder name and 1999/2000 founding-team specifics from earlier eBay-Korea era have evolved through three ownership transitions — eBay Korea → Shinsegae acquisition 2021 — and any "founder quote" attribution must verify against multiple ownership-era sources. Not included here without that verification.)*

## 12. Design Principles (analyst-derived from observed patterns)

1. **Density is the service.** Gmarket users come to scan, not to read. The chrome optimizes scroll efficiency — vertical stacks of category modules, repeating thumbnail-price-chip rhythm — because finding the deal you didn't know you wanted is the value proposition.
   *UI implication*: do not introduce hierarchy that breaks scan rhythm; do not pad sections to "breathe" at the expense of card count per fold.

2. **Red is for price, not personality.** Gmarket Red `#da120d` is reserved almost exclusively for numerical price-discount tokens. The brand does not flood it as a generic primary fill in observed chrome.
   *UI implication*: when porting Gmarket's palette to a new surface, treat red as a *semantic-price asset* (like Bunjang's), not a brand-button color.

3. **Service-name accuracy over copy-craft.** "스마일배송" / "안전결제" / "도착보장" / "쿠폰적용가" are first-class typographic citizens. The brand does not abbreviate or rebrand them for casual surfaces.
   *UI implication*: in any localized port, render Korean service-names exactly; do not translate "스마일배송" to "Smile Delivery" in Korean chrome.

4. **Sub-brand color systems beat a flat palette.** Club Smile (5×3 navy/blue/gray), Event (BF/BS/BSD), and three single-token service accents map color directly to revenue programs.
   *UI implication*: when extending Gmarket's palette, add named sub-systems for each commercial program, not generic "tertiary" tokens.

5. **Legacy is not debt — it's discipline.** CSS sprites, fixed-1200px canvas, BEM naming — these are deliberate (cost / stability / muscle-memory for the seller community), not unmaintained.
   *UI implication*: do not propose "modernization" without surfacing the operational cost of breaking 25-year-old seller workflows. The mobile flagship at `m.gmarket.co.kr` is where modern responsive lives.

## 13. Personas (analyst inference — illustrative, verify before adoption)

> *Disclaimer: Gmarket does not publish official user personas. The four archetypes below are inferred from observed surface design and Korean-marketplace context. Treat as illustrative analyst fiction for porting decisions, not as ground-truth.*

1. **The 40-something household manager** — primary buyer for the family. Comes for staples (생필품 / 식품 / 세제), comes back for the Smile Club coupon. Scans the home grid by category, opens 4–6 product cards per visit, completes one purchase per session. Values: price accuracy, delivery reliability (스마일배송), coupon-stack legibility.

2. **The deal-hunting 30-something** — knows the platform inside out. Bookmarks the bestsellers page, sorts by 가격 / 인기 / 신상품, uses keyboard shortcuts. Comes daily during 슈퍼딜 / 빅스마일데이 events. Values: countdown timers, "마감임박" badges, transparent card-discount math.

3. **The 50+ open-market regular** — Gmarket-since-Y2K. Trusts the brand because it predates current Korean e-commerce. Less mobile-fluent — uses `www.gmarket.co.kr` on desktop, prefers the fixed-1200px canvas because it's predictable. Values: large enough text (won't tolerate < 14px), Korean service-names (won't tolerate Latin abbreviations), call-center hotline visibility.

4. **The Shinsegae Universe loyalty member** — newer cohort, post-2021 acquisition. Discovered Gmarket through SSG.com cross-sell or E-Mart. Engages with the Club Smile modules, uses SmilePay as the default wallet. Values: members-only pricing, cross-app continuity (Green-Connect-Blue program), unified loyalty across Shinsegae brands.

## 14. States

| State | Surface | Token / pattern |
|---|---|---|
| **Default** | All chrome | Page bg `#ffffff`, text `--Gray-900 #222222`, accents per palette |
| **Hover (link)** | Underline + color shift to `--Red-600 #da120d` *(Inferred — common Korean marketplace pattern, not directly captured)* |
| **Hover (card)** | Subtle border highlight, no shadow added *(Inferred)* |
| **Pressed** | `0.96` scale or no visual feedback *(Inferred, low-confidence)* |
| **Focus** | Browser-default outline on `<a>` and `<input>`; custom focus ring not consistently observed |
| **Disabled** | Text `--Gray-400 #bdbdbd`, background `--Gray-100 #f5f5f5` *(Inferred)* |
| **Empty (recent-products layer)** | "최근 본 상품이 없습니다." — observed verbatim in layer; analyst note only, not adopted |
| **Loading** | Skeleton not observed in chrome (page is server-rendered) |
| **Error (search no-result)** | Not captured this pass — flagged for UPDATE |
| **Success (purchase / cart-add)** | Toast / layer — not captured this pass |
| **Promotional / Event-week** | Surface swaps to `--Event-bf-main` / `--Event-bs-main` / `--Event-bsd-main` fills with `#ffffff` text |
| **Loyalty (Smile Club)** | Module backgrounds shift to `--Club-Navy-Main #002041`, accent `#ffd200` text |

## 15. Motion & Easing

Motion tokens **partially captured** — the chrome relies on Swiper.js defaults and CSS-transition shorthand rather than a public token system.

### Observed
- **Swiper carousel** — `--swiper-theme-color: #007aff` (Swiper.js library color, not a Gmarket brand token), default ~300ms slide duration
- **Sticky GNB** — `position: sticky` with no transform animation
- **Sprite-icon hover** — typically `transition: background-position 0.1s` (inferred from sprite pattern)

### Not Captured (UPDATE targets)
- Modal / layer open-close timing
- Toast / snackbar duration
- Scroll-driven animation
- Reduced-motion handling

### Motion Rules (analyst recommendation for ports, not lifted)
- Carousels should default ~300ms
- Hover responses should be ≤150ms
- Layer / modal transitions should be 200–250ms with ease-out
- Respect `prefers-reduced-motion: reduce` — disable swiper auto-advance, eliminate non-essential transitions


## 16. Do's and Don'ts

### Do
- Reserve Gmarket Red #da120d (--Red-600) for numeric price-discount strings, percentage-off, and strike-through context — treat it as a semantic-price asset, not a generic CTA fill
- Set section H2s in Gmarket Sans at 28px/700 for hero modules and 24px/700 for compact modules, keeping the body on the Apple SD Gothic Neo / Noto Sans CJK KR system stack
- Stack 10+ category modules vertically with ~48-64px breaks and repeating thumbnail-price-chip card rhythm so users scan the grid, not headings
- Convey depth through borders and Gray-ladder tints (--Gray-200 #eeeeee card edge, --Gray-100 #f5f5f5 row/section tint) instead of box-shadow, which is absent in production chrome
- Map color to revenue programs via named sub-systems — Smile-Yellow #ffd200 for loyalty/SmilePay, StarDelivery-Purple #7130f3 for premium delivery, Club-Navy-Main #002041 for Smile Club rails
- Render Korean service-names exactly as-is (스마일배송 / 안전결제 / 도착보장 / 쿠폰적용가) and lead card copy with the price, letting the number do the work

### Don't
- Flood Gmarket Red #da120d as a primary button fill across large surfaces — in 272 sampled chrome elements it appears on price text, not as a button background
- Place Smile-Yellow #ffd200 as a foreground on white (1.6:1 contrast, fails WCAG AA) — use it only as a background fill behind #222222 dark text
- Add box-shadow or elevation to product cards; separation comes from the 8-16px gutter and color tints, never drop shadows
- Pad sections to 'breathe' or introduce hierarchy that breaks the dense scan rhythm at the expense of card count per fold
- Translate or rebrand Korean service-names (e.g. 스마일배송 to 'Smile Delivery') in Korean chrome, and avoid emotional adjectives or hero-tagline gestures inside card chrome
- Collapse the type scale onto Medium 500 — production leans on the 400/700 binary, with 500 reserved mainly for the rendered logotype and banner overlays

---

**Verified:** 2026-05-15
**Tier 1 sources:**
- Live CDP `:9222` inspect: `https://www.gmarket.co.kr/` (182 samples, 247 `:root` CSS vars)
- Live CDP `:9222` inspect: `https://corners.gmarket.co.kr/Bestsellers` (90 samples, 246 `:root` CSS vars)
- `https://corp.gmarket.com/` — corporate-narrative source (founding year, parent company, service portfolio)
- `https://corp.gmarket.com/fonts/` — **Tier-1-positive** Gmarket Sans SIL OFL distribution
**Tier 2 sources:**
- `https://getdesign.md/gmarket` — "No designs found for 'gmarket'" (negative, verified 2026-05-15)
- `https://styles.refero.design/?q=gmarket` — no result cards in SSR DOM (negative, verified 2026-05-15)
**Tier 1 official DS:**
- **Partial positive** — Gmarket Sans typeface (SIL OFL) is a first-party distributed brand-font artifact. No public Storybook / Figma library / token JSON / `design.gmarket.*` surface exists; `design.gmarket.co.kr`, `tech.gmarket.co.kr`, `brand.gmarket.co.kr`, `ui.gmarket.co.kr`, `gmarket.design` all DNS-no-resolve as of 2026-05-15. Production `:root` token system (247 CSS vars) is the de-facto public artifact, captured directly.
**Conflicts unresolved:**
- Primary CTA flooded-red variant inferred only — not directly observed in 272 sampled chrome elements; commerce-detail-page surface not captured this pass
- Hover / pressed / focus / disabled / error / loading states largely not captured in single-pass CDP
- Founder / CEO / HQ / headcount not captured from `corp.gmarket.com` analyzed page
- Smile Club / SSG cross-app surfaces not directly inspected — Club Smile colors confirmed from `:root` but on-surface usage not sampled
**IP guardrails:**
- Gmarket logo / wordmark: reference-only, not redistributed
- Gmarket Sans font files: NOT vendored in this repo (SIL OFL permits redistribution, but we link to first-party distribution at `corp.gmarket.com/fonts/`)
- No verbatim Gmarket marketing copy reproduced; "지금부터의 마켓" quoted once as factual brand-narrative context in §11
- Service-feature names (스마일배송 / 안전결제 / 도착보장 / Club Smile / SmilePay / StarDelivery) used descriptively
- §10 voice samples are OmD-original illustrative reconstructions; explicitly marked "fresh derivations for ports — not Gmarket marketing copy"
- §13 personas explicitly marked analyst inference, with disclaimer
- Token CSS values reproduced under analytical fair-use as factual public-CSS observations
