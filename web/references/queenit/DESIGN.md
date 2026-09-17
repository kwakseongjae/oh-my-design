---
id: queenit
name: Queenit
display_name_kr: 퀸잇
country: KR
category: ecommerce
homepage: "https://www.rapportlabs.kr"
primary_color: "#642fe9"
logo:
  type: favicon
  slug: "https://static.queenit.kr/damoa-mobile-web/public/android-icon-192x192.png"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = app-icon brand purple (#642fe9); live commerce UI uses a sale-purple (#714fd8) for discount-rate % and a deeper accent-purple (#603ec5) for emphasis; pink (#e54d76) is the secondary accent. Parent corporate site (rapportlabs.kr) runs a separate near-black ink (#393838) + yellow (#ffcb27) system."
  colors:
    primary: "#642fe9"
    sale-purple: "#714fd8"
    accent-purple: "#603ec5"
    pink: "#e54d76"
    ink: "#000000"
    slate: "#292c31"
    muted: "#aaafbb"
    muted-alt: "#7d8597"
    canvas: "#ffffff"
    surface: "#edeef0"
    surface-alt: "#f2f3f5"
    hairline: "#e2e2e8"
    on-primary: "#ffffff"
    corp-ink: "#393838"
    corp-yellow: "#ffcb27"
  typography:
    family: { product: "Pretendard", corp: "Noto Sans Korean" }
    display:   { size: 38, weight: 700, lineHeight: 1.50, use: "Corporate section headlines (rapportlabs.kr), Pretendard Bold" }
    discount:  { size: 16, weight: 600, use: "Discount-rate percentage on product cards, Pretendard SemiBold" }
    body:      { size: 16, weight: 400, use: "Product UI text and category-nav labels, Pretendard" }
    promo:     { size: 14, weight: 600, use: "Promo overlay labels on banner images, Pretendard" }
    caption:   { size: 14, weight: 400, lineHeight: 1.57, use: "Corporate body copy, Noto Sans Korean" }
    input:     { size: 14, weight: 500, use: "Search input text, Pretendard" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, section: 64 }
  rounded: { sm: 4, md: 6, base: 8, lg: 16, full: 9999 }
  shadow:
    chip: "rgba(27,32,42,0.16) 0px 2px 6px -2px"
    float: "rgba(27,32,42,0.08) 0px 4px 8px -2px"
  components:
    category-chip:  { type: button, bg: "#ffffff", fg: "#000000", radius: "8px", padding: "3.5px 11.5px", height: "45px", shadow: "rgba(27,32,42,0.16) 0px 2px 6px -2px", font: "16px / 400 Pretendard", use: "Home shortcut chip (잘 사는 비결, 2만원 쿠폰, 매거진Q)" }
    floating-icon:  { type: button, bg: "#ffffff", fg: "#000000", radius: "50%", padding: "8px", height: "42px", shadow: "rgba(27,32,42,0.08) 0px 4px 8px -2px", use: "Floating circular quick-action icon button" }
    nav-tab:        { type: tab, active: "text #000000", fg: "#aaafbb", font: "16px / 400 Pretendard", use: "Top category nav (추천·라이프·뷰티·컨템퍼러리·남성)" }
    product-card:   { type: card, bg: "#ffffff", fg: "#000000", radius: "16px", use: "Product tile in the recommendation grid" }
    skeleton-block: { type: card, bg: "#edeef0", radius: "16px", use: "Loading skeleton / image placeholder" }
    discount-badge: { type: badge, bg: "#ffffff", fg: "#714fd8", radius: "4px", font: "16px / 600 Pretendard", use: "Discount-rate percentage on product cards" }
    promo-pill:     { type: badge, bg: "#000000", fg: "#ffffff", radius: "8px", font: "14px / 600 Pretendard", use: "Promo overlay label on hero banner images" }
  components_harvested: true
---

# Design System Inspiration of Queenit

## 1. Visual Theme & Atmosphere

Queenit (퀸잇) is Korea's leading lifestyle-commerce app for the 4050 generation — "멋진 어른들의 라이프스타일링샵" (a lifestyling shop for stylish grown-ups), operated by Rapportlabs (라포랩스). Its live storefront (web.queenit.kr) reads like a confident, scroll-fast mobile marketplace rather than a fussy department-store site. The canvas is pure white (`#ffffff`) carrying near-black ink (`#000000`) for product titles and prices, so merchandise photography does the talking while the chrome stays quiet. Soft cool-grey surfaces (`#edeef0`, `#f2f3f5`) fill image placeholders and skeletons, and a thin hairline (`#e2e2e8`) separates rows without heavy borders. The single brand anchor is a vivid electric purple (`#642fe9`) — the color of the white-"Q" app icon — which signals "Queenit" the instant the app opens.

In the commerce UI the purple shows up as a working color, not just a logo: the discount-rate percentages that drive this deal-heavy storefront are set in a saturated sale-purple (`#714fd8`) at 16px / weight 600, and a deeper accent-purple (`#603ec5`) handles links and emphasis. A warm pink (`#e54d76`) is the secondary accent for highlight tags, and a muted cool-grey ladder (`#aaafbb` → `#7d8597`) carries metadata and secondary labels alongside a darker slate (`#292c31`) used for input and label text. Geometry leans rounded and friendly — 16px product cards as the workhorse, 8px shortcut chips, 4px–6px micro-tags, and full-circle (50%) floating icon buttons — with light, low-spread shadows (`rgba(27,32,42,0.16) 0px 2px 6px -2px`) that lift chips just enough to feel tappable on a phone. The product font throughout is **Pretendard**, chosen for dense, legible hangul at the larger touch sizes a 40s–50s audience appreciates.

Queenit's parent company runs a deliberately different identity on its corporate/recruiting site (rapportlabs.kr): big 38px Pretendard Bold section headlines over calm body copy set in **Noto Sans Korean** at 14px, a softer near-black ink (`#393838`), and a single warm yellow accent (`#ffcb27`). The two surfaces share a flat, photography-forward sensibility but speak to different audiences — the storefront sells to shoppers with purple and deals; the corporate site recruits talent with restraint and a friendly yellow highlight.

**Key Characteristics:**
- Electric brand purple (`#642fe9`) from the app icon — the system's single identity color
- Sale-purple (`#714fd8`) reserved for discount-rate percentages — the storefront's most repeated brand cue
- Deeper accent-purple (`#603ec5`) for links and emphasis; pink (`#e54d76`) as the secondary accent
- Near-black ink (`#000000`) on white (`#ffffff`) — merchandise-first, quiet chrome
- Cool-grey surfaces (`#edeef0`, `#f2f3f5`) for skeletons and placeholders; hairlines (`#e2e2e8`) over heavy borders
- Rounded, mobile-friendly geometry — 16px cards, 8px chips, 50% circle icons
- Light low-spread shadows for chips/floating icons instead of deep elevation
- Pretendard for the product UI; corporate site uses Noto Sans Korean + a `#ffcb27` yellow accent over `#393838` ink

## 2. Color Palette & Roles

### Primary
- **Queenit Purple** (`#642fe9`): The brand color — the vivid electric purple of the app icon (white "Q" on purple). Used as the identity anchor and primary brand accent.
- **Sale Purple** (`#714fd8`): The live commerce accent. Set on discount-rate percentages at 16px / weight 600 — the most frequently repeated colored element on the storefront.
- **Accent Purple** (`#603ec5`): A deeper purple for links, active emphasis, and interactive text.

### Accent
- **Highlight Pink** (`#e54d76`): Secondary accent for emphasis tags and highlight labels.

### Text Hierarchy
- **Ink Black** (`#000000`): Primary text — product titles, prices, nav labels.
- **Slate** (`#292c31`): Input text and strong secondary labels.
- **Muted Grey** (`#aaafbb`): Tertiary text, inactive tabs, low-emphasis metadata.
- **Muted Alt** (`#7d8597`): Alternate muted grey for captions and fine print.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, chip backgrounds, text on purple/dark.
- **Surface Grey** (`#edeef0`): Cool-grey fill for image placeholders and loading skeletons.
- **Surface Alt** (`#f2f3f5`): A lighter secondary grey for alternating blocks.
- **Hairline** (`#e2e2e8`): Thin borders and dividers — the primary separation device.
- **On Primary** (`#ffffff`): Text/icon color used on purple and dark overlay surfaces.

### Corporate (rapportlabs.kr)
- **Corp Ink** (`#393838`): Near-black body text on the parent company site.
- **Corp Yellow** (`#ffcb27`): The single warm accent on the corporate/recruiting surface — highlights and callouts.

## 3. Typography Rules

### Font Family
- **Product**: `Pretendard` (with the platform hangul stack — `Apple SD Gothic Neo`, `Malgun Gothic`, `Noto Sans KR`). The de-facto Korean product font; used for all storefront UI.
- **Corporate**: `Noto Sans Korean` for body copy on rapportlabs.kr, with `Pretendard` Bold reserved for the large corporate headlines.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Corporate Headline | Pretendard | 38px (2.38rem) | 700 | 1.50 | rapportlabs.kr section heads |
| Discount % | Pretendard | 16px (1.00rem) | 600 | normal | Sale-purple discount-rate on cards |
| Body / Nav | Pretendard | 16px (1.00rem) | 400 | normal | Product UI text, category-nav labels |
| Promo Label | Pretendard | 14px (0.88rem) | 600 | normal | White overlay text on banner images |
| Corporate Body | Noto Sans Korean | 14px (0.88rem) | 400 | 1.57 (22px) | rapportlabs.kr paragraph copy |
| Search Input | Pretendard | 14px (0.88rem) | 500 | normal | Search field text |

### Principles
- **Pretendard owns the storefront**: every shopper-facing label, price, and nav item is Pretendard — dense, legible hangul at comfortable touch sizes.
- **Weight as emphasis, not size**: prices and discount rates jump to weight 600 rather than ballooning in size, keeping product rows scannable.
- **Generous reading size for the audience**: body/nav sits at 16px (larger than a typical 14px product app) — a deliberate legibility choice for a 40s–50s user base.
- **Two surfaces, two fonts**: the product app is Pretendard; the corporate site pairs Pretendard Bold headlines with Noto Sans Korean body — the systems never blend.

## 4. Component Stylings

### Buttons

**Category Shortcut Chip**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 8px
- Padding: 3.5px 11.5px
- Height: 45px
- Shadow: `rgba(27,32,42,0.16) 0px 2px 6px -2px`
- Font: 16px Pretendard weight 400
- Use: Home shortcut chips ("잘 사는 비결", "2만원 쿠폰", "매거진Q", "명품 초특가")

**Floating Icon Button**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 50%
- Padding: 8px
- Height: 42px
- Shadow: `rgba(27,32,42,0.08) 0px 4px 8px -2px`
- Use: Floating circular quick-action icon button

### Inputs

**Search Field**
- Text: `#292c31`
- Font: 14px Pretendard weight 500
- Use: Top search input

### Cards & Containers

**Product Card**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 16px
- Use: Product tile in the recommendation grid

**Skeleton / Placeholder Block**
- Background: `#edeef0`
- Radius: 16px
- Use: Loading skeleton and image placeholder

### Badges

**Discount Rate**
- Background: `#ffffff`
- Text: `#714fd8`
- Radius: 4px
- Font: 16px Pretendard weight 600
- Use: Discount-rate percentage on product cards (41%, 63%, 79%)

**Promo Overlay Pill**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 8px
- Font: 14px Pretendard weight 600
- Use: Promo label over hero banner images ("주얼리 특가전 ~50%", "이번주만 10% 더 할인")

### Navigation

**Top Category Nav**
- Active: `#000000` text
- Inactive: `#aaafbb` text
- Font: 16px Pretendard weight 400
- Use: Horizontal category tabs ("추천", "라이프", "뷰티", "컨템퍼러리", "남성")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://web.queenit.kr (live commerce UI, computed style); https://www.rapportlabs.kr (parent company site, live computed style); https://apps.apple.com/kr/app/id1526439940 (Queenit App Store listing — brand-owned product listing)
**Tier 2 sources:** getdesign.md/queenit — no Queenit-specific data (generic shell); styles.refero.design/?q=queenit — searched, no Queenit style page returned. (KR coverage gap — expected per spec/regional-sources.yaml; Tier 1 carries the proof.)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 64px
- Notable: shortcut chips use a tight asymmetric 3.5px / 11.5px padding with a leading icon, keeping the chip rail compact while staying tappable

### Grid & Container
- Mobile-first single column centered in a phone-width frame (the web storefront renders the app layout)
- Home is a vertical scroll of merchandising bands: a category-nav header, a shortcut-chip rail, banner carousels, and product grids
- Product grids are 2-up tiles with 16px-radius cards; prices and discount rates sit directly beneath each image
- Corporate site (rapportlabs.kr) uses a wide multi-section scroll with 38px headlines and generous vertical rhythm

### Whitespace Philosophy
- **Merchandise-first**: chrome stays minimal so product photography dominates; white space frames imagery rather than decorating it
- **Flat segmentation**: bands separate by tinted surface (`#edeef0` / `#f2f3f5`) and `#e2e2e8` hairlines, not by shadow stacks
- **Dense but legible**: information-rich deal layouts kept readable by the 16px base size and consistent card rhythm

### Border Radius Scale
- Tiny (4px): discount/price micro-tags
- Small (6px): inner controls
- Base (8px): shortcut chips, promo pills
- Large (16px): product cards and content containers — the workhorse
- Circle (50% / full): floating icon buttons, avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, product rows, most surfaces |
| Tint (Level 1) | `#edeef0` background shift | Skeletons, image placeholders, section separation |
| Chip (Level 2) | `rgba(27,32,42,0.16) 0px 2px 6px -2px` | Shortcut chips, small floating controls |
| Float (Level 3) | `rgba(27,32,42,0.08) 0px 4px 8px -2px` | Floating circular icon buttons |

**Shadow Philosophy**: Queenit uses depth sparingly and softly. Most of the storefront is flat — separation comes from cool-grey tinted surfaces (`#edeef0`) and `#e2e2e8` hairlines. Where elevation appears it is a low-spread, short-offset shadow (`0px 2px 6px -2px`) tuned for the small interactive surfaces of a mobile UI: shortcut chips and floating circular icons that need to read as "lift up and tap." This keeps the merchandise-heavy page feeling fast and uncluttered rather than card-stacked.

## 7. Do's and Don'ts

### Do
- Use the brand purple (`#642fe9`) as the single identity anchor — it's the app-icon color
- Set discount-rate percentages in sale-purple (`#714fd8`) at weight 600 — it's the storefront's signature cue
- Keep product chrome quiet: near-black (`#000000`) text on white (`#ffffff`) so photography leads
- Use 16px-radius cards as the default product container
- Separate bands with tinted surfaces (`#edeef0`) and `#e2e2e8` hairlines, not heavy shadows
- Use Pretendard at a generous 16px base for legibility with a 40s–50s audience
- Use light low-spread shadows for chips and floating icons only
- Use pink (`#e54d76`) sparingly as a secondary highlight accent

### Don't
- Spread the brand purple across large fills — keep it an accent and identity color, not a background wash
- Use deep, heavy drop shadows or stacked cards — Queenit's depth is light and selective
- Drop the body size below 16px on shopper-facing labels — the larger size is intentional for the audience
- Introduce a third saturated hue beyond purple and pink — it dilutes the deal signal
- Mix the corporate yellow (`#ffcb27`) into the storefront — it belongs to rapportlabs.kr only
- Use sharp/square corners on cards or chips — geometry is rounded throughout
- Let metadata compete with prices — keep secondary text in muted grey (`#aaafbb`)

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Native single-column app layout; 2-up product grid |
| Tablet | 640–1024px | Same centered phone-width frame, more side margin |
| Desktop | >1024px | Storefront stays phone-width centered; corporate site expands to full multi-section layout |

### Touch Targets
- Shortcut chips at 45px height with leading icon — comfortable thumb targets
- Floating icon buttons at 42px circles
- Category-nav items spaced for touch within the header
- 16px base text size aids both readability and tap accuracy

### Collapsing Strategy
- Home bands stack vertically and scroll; banner carousels swipe horizontally
- Product grids stay 2-up on phones; chip rails scroll horizontally when overflowing
- Corporate headlines (38px) scale down on narrow viewports, weight 700 maintained

### Image Behavior
- Product and banner imagery uses 16px-radius framing; placeholders fall back to `#edeef0`
- Promo overlay text (`#ffffff` weight 600) sits on darkened image regions for contrast

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / identity: Queenit Purple (`#642fe9`)
- Discount-rate %: Sale Purple (`#714fd8`)
- Links / emphasis: Accent Purple (`#603ec5`)
- Secondary accent: Highlight Pink (`#e54d76`)
- Primary text: Ink Black (`#000000`)
- Input / strong label: Slate (`#292c31`)
- Muted text / inactive: Muted Grey (`#aaafbb`)
- Background: Pure White (`#ffffff`)
- Skeleton / placeholder: Surface Grey (`#edeef0`)
- Hairline: `#e2e2e8`
- Corporate ink / accent: `#393838` / `#ffcb27`

### Example Component Prompts
- "Create a 2-up product grid. Cards are white (#ffffff), 16px radius, no border. Below each image: product title 16px Pretendard #000000, original price struck-through in muted grey (#aaafbb), discount rate 16px Pretendard weight 600 in sale-purple (#714fd8), final price 16px weight 600 #000000."
- "Build a home shortcut chip rail: white (#ffffff) chips, 8px radius, 3.5px 11.5px padding, 45px tall, shadow rgba(27,32,42,0.16) 0px 2px 6px -2px, leading icon + 16px Pretendard #000000 label."
- "Design a promo banner: full-width image with a dark overlay, white (#ffffff) promo label 14px Pretendard weight 600 ('이번주만 10% 더 할인'), 8px radius pill."
- "Create a top category nav: horizontal tabs in 16px Pretendard, active item #000000, inactive items muted grey (#aaafbb)."
- "Build a loading state: skeleton blocks in surface grey (#edeef0) at 16px radius matching final card dimensions; no shadow."

### Iteration Guide
1. Purple (`#642fe9`) is identity; sale-purple (`#714fd8`) is the discount cue — don't conflate them
2. Photography leads; keep chrome near-black on white
3. 16px-radius cards and 16px base text are the defaults
4. Separate with `#edeef0` tint and `#e2e2e8` hairlines, not heavy shadows
5. Shadows are light and low-spread, for chips and floating icons only
6. Keep the corporate yellow (`#ffcb27`) off the storefront
7. Muted grey (`#aaafbb`) for metadata so prices stay dominant

---

## 10. Voice & Tone

Queenit's voice is **warm, confident, and deal-savvy** — it speaks to grown-up shoppers as people of taste, not as a niche "senior" segment. The positioning line "멋진 어른들의 라이프스타일링샵" ("a lifestyling shop for stylish grown-ups") sets the register: aspirational and respectful, never patronizing. Copy is benefit-first and value-led — discount rates, coupons, and "완판" (sold-out) social proof are front and center — but framed as savvy curation ("백화점 옷인데 더 저렴해", "department-store clothes, cheaper") rather than desperate urgency. The parent company (Rapportlabs) voice on the corporate site is mission-framed and plainspoken, addressing the scale of the 4050 market with quiet ambition.

| Context | Tone |
|---|---|
| Storefront positioning | Aspirational, respectful. "멋진 어른들의 라이프스타일링샵." |
| Promo / deal labels | Value-led, concrete. "주얼리 특가전 ~50%", "이번주만 10% 더 할인". |
| Category / nav | Plain and functional. "추천", "라이프", "뷰티", "컨템퍼러리", "남성". |
| Social proof | Reassuring. "홈쇼핑 완판템", "1000만이 사랑하는 멋과 스타일". |
| Corporate / recruiting | Mission-framed, ambitious-but-calm. "4050의 일상을 연결하는 라이프스타일 플랫폼." |

**Voice samples (verbatim, verified live 2026-06-26):**
- "멋진 어른들의 라이프스타일링샵, 퀸잇" — storefront meta title (positioning). *(web.queenit.kr og:title)*
- "1000만이 사랑하는 멋과 스타일을 한 곳에" — storefront meta description (social proof). *(web.queenit.kr og:description)*
- "한국에서 가장 크고 소비력이 강한 4050 시장" — corporate headline (market framing). *(rapportlabs.kr)*
- "4050의 일상을 연결하는 라이프스타일 플랫폼" — corporate tagline (mission). *(rapportlabs.kr)*

**Forbidden register**: ageist or condescending framing of the 4050 audience, fear-based urgency, undefined jargon, exclamation-stacked hype. The audience is treated as discerning, not as a problem to be solved.

## 11. Brand Narrative

Queenit (퀸잇) is operated by **Rapportlabs (라포랩스)**, a startup founded in **May 2020** and based in Gangnam, Seoul, led by co-CEOs **최희민 (Choi Hee-min)** and **홍주영 (Hong Ju-young)**. After an initial product pivot, the team launched **Queenit in September 2020** to serve a market most fashion-commerce players had overlooked: Korean women in their **40s and 50s** — a demographic the company describes as the country's largest and most purchasing-powerful consumer segment.

The founding insight was that the 4050 generation shopped for fashion the way younger users shopped years earlier — increasingly on mobile, but underserved by apps designed for 20s tastes and 20s-sized type. Queenit's answer was a curated, deal-forward storefront of contemporary and premium brands ("백화점 옷인데 더 저렴해" — department-store clothes for less), with a generous, legible UI and value framing (discount rates, coupons, sold-out social proof) that respects the shopper's intelligence. Early growth was rapid, with weekly GMV compounding as word spread through the target demographic.

What Queenit refuses, visible in its design: the cramped 14px type and youth-coded aesthetics of typical fashion apps, and any framing that treats the 4050 audience as a "senior" afterthought. What it embraces: a confident brand purple, photography-first merchandising, a generous 16px reading size, and copy that calls its users "멋진 어른들" (stylish grown-ups). The parent brand's stated ambition — a 4050 lifestyle super-app reaching 8M MAU and 3조+ in GMV — frames the storefront as the first surface of a much larger platform.

## 12. Principles

1. **Respect the grown-up shopper.** The 4050 user is discerning, not a niche to be condescended to. *UI implication:* aspirational copy ("멋진 어른들"), generous 16px text, and clean merchandise-first layouts — never shrunken type or youth-coded clutter.
2. **Photography leads, chrome follows.** Product imagery is the hero. *UI implication:* near-black text on white, 16px-radius image cards, quiet hairlines; the brand purple is an accent, not a background.
3. **Value is the message.** Deals, coupons, and sold-out proof drive the storefront. *UI implication:* discount rates get the saturated sale-purple (`#714fd8`) at weight 600 so the savings read instantly.
4. **One identity color.** Purple (`#642fe9`) means Queenit. *UI implication:* reserve the saturated purple for identity and the discount cue; don't dilute it across surfaces.
5. **Flat and fast.** A deal-heavy scroll must stay light. *UI implication:* tint and hairlines for separation, light low-spread shadows only on chips and floating icons.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Queenit user segments (Korean women in their 40s–50s shopping fashion on mobile), not individual people.*

**정미경, 52, 서울.** Shops for contemporary brands she used to buy at department stores, now at better prices. Trusts the "완판" (sold-out) tags and the larger, readable type. Came to Queenit after a friend showed her "백화점 옷인데 더 저렴해."

**한영주, 47, 경기.** Busy professional who scans discount rates first — the sale-purple percentages let her judge a deal in a glance. Appreciates that the app feels made for her taste, not a teenager's.

**김선호, 55, 부산.** Browses the 남성 category for quality basics. Values the calm, photography-forward layout and the absence of aggressive pop-ups; buys when the coupon framing makes the value obvious.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas, single Ink Black (`#000000`) line explaining no matching products, with a path back to categories. No clutter. |
| **Empty (wishlist / cart none yet)** | Muted Grey (`#aaafbb`) single line inviting the shopper to browse; calm, non-pushy. |
| **Loading (product grid)** | Skeleton blocks in Surface Grey (`#edeef0`) at 16px radius, matching final card dimensions. Flat pulse, no shadow. |
| **Loading (image)** | `#edeef0` placeholder fill until the product photo resolves. |
| **Error (fetch failed)** | Inline message in Ink Black with a plain-language explanation and a retry — never a bare error code. |
| **Error (form / coupon invalid)** | Field-level message below the input describing what's valid, not just "오류". |
| **Success (added to cart / coupon applied)** | Brief inline confirmation; next-step detail immediately below. No celebratory emoji. |
| **Skeleton** | `#edeef0` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Muted Grey (`#aaafbb`) text on reduced-opacity surface; purple actions fade rather than turn grey to keep the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Chip press, icon-button tap, focus |
| `motion-standard` | 220ms | Card/section reveal, banner crossfade, sheet |
| `motion-slow` | 320ms | Page transitions, hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, chips |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quick — consistent with a deal-heavy, scroll-fast storefront. Chips and floating icons respond to press with a subtle scale/opacity shift; product grids and banners fade in from below at `motion-standard / ease-enter`; banner carousels auto-advance with a gentle crossfade. No bounce or spring — a value-focused commerce app signals reliability over playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and carousels stop auto-advancing; the storefront stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle:
- https://web.queenit.kr/home/RECOMMENDATION (queenit.kr redirects here) — product/commerce UI:
  brand purple #642fe9 (app icon, sampled rgb(100,47,233)); discount % rgb(113,79,216)=#714fd8 at 16px/600;
  accent purple rgb(96,62,197)=#603ec5; pink rgb(229,77,118)=#e54d76; ink rgb(0,0,0); slate rgb(41,44,49)=#292c31;
  muted rgb(170,175,187)=#aaafbb, rgb(125,133,151)=#7d8597; surface rgb(237,238,240)=#edeef0, rgb(242,243,245)=#f2f3f5;
  hairline rgb(226,226,232)=#e2e2e8; radius 16px (cards), 8px (chips), 4px/6px (tags), 50% (circle icons);
  shadow rgba(27,32,42,0.16) 0px 2px 6px -2px (chips), rgba(27,32,42,0.08) 0px 4px 8px -2px (floating icons);
  font Pretendard. og:title "멋진 어른들의 라이프스타일링샵, 퀸잇", og:description "1000만이 사랑하는 멋과 스타일을 한 곳에".
- https://www.rapportlabs.kr (parent company / recruiting site) — corp identity: H3 38px/700 Pretendard,
  body 14px/400 Noto Sans Korean, ink rgb(57,56,56)=#393838, yellow rgb(255,203,39)=#ffcb27.
  Verbatim copy: "한국에서 가장 크고 소비력이 강한 4050 시장", "4050의 일상을 연결하는 라이프스타일 플랫폼",
  "4050의 라이프를 책임지는 슈퍼앱이 되어 800만 MAU, 3조 이상의 거래액을 만듭니다".

Token-level claims (§1–9) are sourced from this live inspection. Full raw samples in
web/references/queenit/.verification.md.

Voice samples (§10) are verbatim from the live surfaces (queenit.kr meta + rapportlabs.kr headlines).

Brand narrative (§11): Rapportlabs (라포랩스) founded May 2020, Seoul; co-CEOs 최희민 / 홍주영;
Queenit (퀸잇) launched Sept 2020 as a 4050 women's fashion-commerce app. These founding details are
general public knowledge corroborated by company-profile aggregators (THE VC, Wanted, Rocketpunch,
한국경제인협회 startup story) via web search 2026-06-26 — not directly quoted from a verified
Rapportlabs statement in this turn. Market-ambition figures (8M MAU, 3조+ GMV) are verbatim from the
live corporate site.

Personas (§13) are fictional archetypes informed by publicly observable Queenit user segments
(Korean women in their 40s–50s shopping fashion on mobile). Names are illustrative; they do not refer
to real people.

Interpretive claims (e.g., "photography leads, chrome follows", "value is the message",
"respect the grown-up shopper") are editorial readings connecting Queenit's observed design to its
positioning, not directly sourced company statements.
-->
