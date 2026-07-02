---
id: idus
name: idus (Backpackr)
display_name_kr: 아이디어스 (백패커)
country: KR
category: ecommerce
homepage: "https://www.idus.com"
primary_color: "#ef7014"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=idus.com&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live purchase-CTA carrot orange (#ef7014), the single action color across CTA, outlined buttons, rank flags and social-proof pills. Sale/price accent is coral (#ff4b50); rating gold (#ffaf00). Near-black ink (#111111) for dark caption chips; text ladder #333333 → #666666 → #999999. Flat, near-shadowless commerce UI on a white canvas."
  colors:
    primary: "#ef7014"
    primary-tint: "#fff7f2"
    sale: "#ff4b50"
    sale-tint: "#fff2f4"
    rating: "#ffaf00"
    highlight: "#ffea2c"
    ink: "#111111"
    text: "#333333"
    text-muted: "#666666"
    text-faint: "#999999"
    border: "#d9d9d9"
    border-strong: "#acacac"
    canvas: "#ffffff"
    on-primary: "#ffffff"
  typography:
    family: { sans: "system-ui", kr: "Apple SD Gothic Neo / Malgun Gothic (system stack)" }
    cta:          { size: 18, weight: 700, lineHeight: 1.4, use: "Primary purchase button label (구매하기)" }
    section-tab:  { size: 16, weight: 400, lineHeight: 1.5, use: "Category navigation tabs (선물추천, 할인, 베스트)" }
    button-strong: { size: 14, weight: 700, lineHeight: 1.5, use: "Outlined brand-action button labels (작품문의, 팔로우)" }
    body:         { size: 14, weight: 400, lineHeight: 1.5, use: "Standard reading text, search field" }
    caption:      { size: 12, weight: 400, lineHeight: 1.5, use: "Top utility nav links, social-proof pills" }
    micro:        { size: 11, weight: 400, lineHeight: 1.4, use: "Icon labels (관심, 내 정보, 장바구니)" }
  spacing: { xs: 4, sm: 8, base: 14, md: 16, lg: 20, xl: 24 }
  rounded: { sm: 2, md: 4, lg: 12, full: 100 }
  shadow:
    none: "none"
  components:
    button-primary:   { type: button, bg: "#ef7014", fg: "#ffffff", radius: "2px", height: "48px", padding: "0 16px", font: "18px / 700", use: "Primary purchase CTA (구매하기)" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #acacac", radius: "2px", height: "48px", padding: "0 16px", font: "18px / 700", use: "Secondary actions (장바구니, 선물하기)" }
    button-outline:   { type: button, bg: "#ffffff", fg: "#ef7014", border: "1px solid #ef7014", radius: "2px", height: "40px", padding: "0 16px", font: "14px / 700", use: "Tertiary brand-outline actions (작품문의, 팔로우)" }
    badge-purchased:  { type: badge, bg: "#ef7014", fg: "#ffffff", radius: "100px", height: "33px", padding: "0 14px", font: "14px / 700", use: "Social-proof pill (최근 N건 더 많이 구매되었어요)" }
    badge-rank:       { type: badge, bg: "#ef7014", fg: "#ffffff", radius: "0 0 6px 6px", font: "16px / 700", use: "Ranking number flag on best-seller cards" }
    search-input:     { type: input, bg: "#ffffff", fg: "#333333", border: "none", radius: "2px", font: "14px / 400", use: "Global search field (찾으시는 작가, 작품이 있나요?)" }
    nav-tab:          { type: tab, fg: "#666666", active: "text #333333", font: "16px / 400", use: "Category navigation tabs" }
    product-card:     { type: card, bg: "#ffffff", radius: "12px", use: "Product thumbnail card in curation grids" }
  components_harvested: true
---

# Design System Inspiration of idus (Backpackr)

## 1. Visual Theme & Atmosphere

idus (아이디어스), operated by Backpackr, is Korea's largest handmade-goods marketplace — a place where independent 작가 (makers) sell handcrafted rings, ceramics, candles, baked goods and classes. Its web surface reads like a warm, high-density Korean commerce app rather than a minimalist boutique: a pure white canvas (`#ffffff`) packed with product thumbnails, ranking flags and social-proof, all organised by a quiet grey text ladder and punctuated by one confident brand color — a carrot orange (`#ef7014`). That orange is disciplined: it appears almost exclusively on the things that mean "act" — the `구매하기` (purchase) CTA, brand-outline buttons, ranking number flags, and the "recently purchased" pills — so the eye is trained to read orange as commitment.

The typographic personality is deliberately system-native. idus does not ship a bespoke brand webfont; body and UI text render in the platform system stack (`system-ui` → Apple SD Gothic Neo / Malgun Gothic on Korean devices), tuned for dense hangul legibility. Hierarchy is carried by weight and size rather than typeface: the primary purchase CTA runs at 18px / weight 700, category tabs at 16px / 400, body and button labels settle at a workmanlike 14px, and utility chrome (top nav, icon labels) drops to 12px and 11px. The result feels engineered for scanning hundreds of handmade listings quickly, not for editorial pause.

What distinguishes idus from a glossy DTC store is its restraint with depth. Live inspection found `box-shadow: none` and `0px` borders across most of the chrome — separation comes from flat hairlines (`#d9d9d9`), a light border on secondary buttons (`#acacac`), and tinted wash surfaces (`#fff7f2` orange, `#fff2f4` pink) rather than elevation. Geometry is mostly tight and square: 2px-radius action buttons, 4px dark caption chips, 12px product-image cards, and a single dramatic exception — the fully-rounded 100px social-proof pill. A small warm accent set rounds out the palette: coral (`#ff4b50`) marks sale and discount prices, gold (`#ffaf00`) draws rating stars, and event yellow (`#ffea2c`) flags promotions. Dark near-black (`#111111`) anchors the curation caption chips.

**Key Characteristics:**
- Single brand action color — carrot orange (`#ef7014`) — reserved for CTAs, brand-outline buttons, rank flags and social-proof pills
- System font stack (`system-ui` / Apple SD Gothic Neo / Malgun Gothic) — hierarchy carried by weight (700 CTA vs 400 body) and size, not a bespoke typeface
- Flat, near-shadowless commerce UI: `box-shadow: none`, separation via `#d9d9d9` hairlines and `#acacac` button outlines
- Tight square geometry — 2px buttons, 4px chips, 12px product cards — with one 100px full-pill exception for social-proof
- Warm accent trio: coral sale price (`#ff4b50`), gold rating stars (`#ffaf00`), event yellow (`#ffea2c`)
- Near-black (`#111111`) dark caption chips over curation imagery
- Cool-neutral text ladder: `#333333` primary → `#666666` secondary → `#999999` tertiary/faint
- Tinted wash surfaces (`#fff7f2`, `#fff2f4`) instead of shadows for gentle section emphasis
- White (`#ffffff`) canvas and white text (`#ffffff`) on the orange primary

## 2. Color Palette & Roles

### Primary
- **idus Carrot** (`#ef7014`): The single brand action color. Live-measured as the `구매하기` purchase CTA background, the brand-outline button text/border, the ranking number flag, and the "recently purchased" social-proof pill. If it is orange, it means "act."
- **Carrot Tint** (`#fff7f2`): A barely-there orange wash surface for gentle emphasis blocks and orange-themed sections.
- **On-Primary White** (`#ffffff`): Text and icons on the carrot CTA and on dark chips.

### Accents
- **Sale Coral** (`#ff4b50`): Discount / sale price emphasis and favorite (heart) marks — the second most frequent foreground color on the page after the neutral text ladder.
- **Sale Tint** (`#fff2f4`): Light pink wash surface for discount and event blocks.
- **Rating Gold** (`#ffaf00`): Rating stars and review scores.
- **Highlight Yellow** (`#ffea2c`): Event / promotion highlight flags.

### Neutral & Ink
- **Ink** (`#111111`): Near-black background for the dark caption chips overlaid on curation banners; also strong emphasis text.
- **Text** (`#333333`): Primary text and heading color — the dominant foreground across the whole surface. A soft near-black, never pure `#000000`.
- **Text Muted** (`#666666`): Secondary text — top-nav utility links, descriptions, metadata.
- **Text Faint** (`#999999`): Tertiary / lowest-emphasis text, timestamps, disabled labels.

### Surface & Borders
- **Canvas** (`#ffffff`): Page background and all card surfaces.
- **Border** (`#d9d9d9`): Hairline dividers and light borders — the primary separation device in the shadow-free system.
- **Border Strong** (`#acacac`): The 1px outline on secondary white buttons (`장바구니`, `선물하기`), a touch heavier than the divider hairline.

## 3. Typography Rules

### Font Family
- **UI / Body**: system stack — `system-ui`, `-apple-system`, with `Apple SD Gothic Neo` / `Malgun Gothic` as the Korean fallbacks. idus does not load a bespoke brand webfont on web; the OS hangul font does the work.
- **Weights in use**: 400 (regular) for body, nav and utility; 700 (bold) for action buttons, ranking flags and social-proof pills. There is no light-weight display tier — hierarchy is size × weight, not a special headline face.

### Hierarchy

| Role | Size | Weight | Line Height | Use |
|------|------|--------|-------------|-----|
| Purchase CTA | 18px | 700 | 1.4 | Primary `구매하기` / `장바구니` / `선물하기` button labels |
| Category Tab | 16px | 400 | 1.5 | Home category navigation (선물추천, 할인, 베스트…) |
| Button Strong | 14px | 700 | 1.5 | Brand-outline button labels (작품문의, 팔로우) |
| Body | 14px | 400 | 1.5 | Standard reading text, search field, product meta |
| Caption | 12px | 400 | 1.5 | Top utility nav (로그인, 회원가입, 고객센터), social-proof pills |
| Micro | 11px | 400 | 1.4 | Icon labels (관심, 내 정보, 장바구니) |

### Principles
- **Weight over typeface**: with a system font, idus signals importance by jumping to weight 700 (CTAs, flags) against a 400 body — never by swapping fonts.
- **Dense, scannable sizing**: body and buttons sit at 14px, utility chrome at 11–12px, so a grid of hundreds of handmade listings stays legible without scrolling fatigue.
- **Bold is for action and proof**: 700 is reserved for things the shopper acts on (purchase, follow) or trusts (ranking, "recently purchased"), reinforcing the orange = act signal.
- **No pure black**: text is `#333333`, not `#000000` — a softer near-black that keeps the busy commerce surface from feeling harsh.

## 4. Component Stylings

### Buttons

**Primary Purchase CTA (`구매하기`)**
- Background: `#ef7014`
- Text: `#ffffff`
- Radius: 2px
- Padding: 0px 16px
- Height: 48px
- Font: 18px / 700
- Use: The primary purchase action on product detail pages

**Secondary (`장바구니` / `선물하기`)**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#acacac`
- Radius: 2px
- Padding: 0px 16px
- Height: 48px
- Font: 18px / 700
- Use: Add-to-cart and gift actions sitting beside the primary CTA

**Brand Outline (`작품문의` / `팔로우`)**
- Background: `#ffffff`
- Text: `#ef7014`
- Border: 1px solid `#ef7014`
- Radius: 2px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 700
- Use: Tertiary brand-tinted actions (inquiry, follow-maker)

**Top Utility (`로그인` / `회원가입` / `고객센터`)**
- Background: transparent
- Text: `#666666`
- Padding: 0px 8px
- Height: 30px
- Font: 12px / 400
- Use: Header utility links

### Inputs

**Global Search**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 2px
- Font: 14px / 400
- Use: Header search field, placeholder "찾으시는 작가, 작품이 있나요?" — borderless, sits on a hairline row rather than a boxed field

### Cards & Containers

**Product Card**
- Background: `#ffffff`
- Radius: 12px
- Use: Product thumbnail card in curation grids — image corners rounded, flat (no shadow)

**Dark Caption Chip**
- Background: `#111111`
- Text: `#ffffff`
- Radius: 4px
- Padding: 6px 8px
- Use: Overlay caption label on curation banner imagery

### Badges

**Social-Proof Pill**
- Background: `#ef7014`
- Text: `#ffffff`
- Radius: 100px
- Padding: 0px 14px
- Height: 33px
- Font: 14px / 700
- Use: "최근 N건 더 많이 구매되었어요" purchase-momentum pill on product cards

**Ranking Flag**
- Background: `#ef7014`
- Text: `#ffffff`
- Radius: 0px 0px 6px 6px
- Font: 16px / 700
- Use: Rank number (1, 2, 3) flag on best-seller ranking cards

### Navigation

**Category Tab**
- Text: `#666666`
- Font: 16px / 400
- Active: `#333333` text
- Use: Home category navigation (선물추천, 할인, 베스트, 취향발견, 실시간, 최신작품, 커뮤니티)

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.idus.com (homepage, live computed style), https://www.idus.com/v2/product/ (product detail page, live computed style — purchase CTA, secondary/outline buttons), https://github.com/backpackr (Backpackr official GitHub org)
**Tier 2 sources:** getdesign.md/idus — no entry ("0 DESIGN.md files, No designs found"); styles.refero.design/?q=idus — no idus-specific style listed (search returns unrelated generic results)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base rhythm: 4px steps — measured paddings land at 0×8px (utility), 6×8px (chips), 0×14px (pills), 0×16px (primary buttons)
- Scale: 4px, 8px, 14px, 16px, 20px, 24px
- Notable: action buttons use generous 48px height with 16px horizontal padding for confident tap targets; social-proof pills use 14px horizontal padding

### Grid & Container
- Dense multi-column product-thumbnail grids are the dominant layout unit
- A horizontal category tab row (선물추천 / 할인 / 베스트 …) anchors the top of the home feed
- Product detail pages stack a media column with a sticky action rail (장바구니 / 선물하기 / 구매하기)
- Curation banners layer dark caption chips (`#111111`) over full-bleed imagery

### Whitespace Philosophy
- **Density with breathing hairlines**: idus is intentionally information-rich; separation comes from `#d9d9d9` hairlines and white gutters rather than large empty margins.
- **Flat segmentation**: sections separate by hairline and tint wash (`#fff7f2`, `#fff2f4`), not by shadow stacks.
- **Action clarity in a busy field**: within a crowded grid, the orange CTA and pills are the only saturated elements, so the next action always stands out.

### Border Radius Scale
- Sharp (2px): action buttons, search field — the workhorse
- Small (4px): dark caption chips
- Medium (12px): product-image cards
- Full (100px): social-proof pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, most surfaces, product cards |
| Hairline (Level 1) | `1px solid #d9d9d9` | Dividers, light card outlines |
| Outline (Level 2) | `1px solid #acacac` | Secondary white button borders |
| Tint (Level 3) | `#fff7f2` / `#fff2f4` wash | Gentle section emphasis without elevation |

**Shadow Philosophy**: idus is a near-shadowless system. Live inspection returned `box-shadow: none` and `0px solid` borders across the header, category tabs, product cards and action buttons. Depth is communicated by flat hairlines (`#d9d9d9`), a slightly heavier outline (`#acacac`) on secondary buttons, and low-saturation tint washes (`#fff7f2` orange, `#fff2f4` pink). When something needs to pop, the system reaches for the carrot orange (`#ef7014`) or the near-black ink (`#111111`) chip — never a drop shadow. This keeps a very dense commerce grid feeling fast and flat rather than heavy.

## 7. Do's and Don'ts

### Do
- Reserve carrot orange (`#ef7014`) for actions and proof — CTA, brand-outline buttons, rank flags, social-proof pills
- Use weight 700 on action labels and 400 on body/nav — let weight carry hierarchy under a system font
- Separate sections with `#d9d9d9` hairlines and `#acacac` outlines, not shadows
- Keep action geometry tight (2px radius) and reserve the 100px full-pill only for social-proof momentum
- Use `#333333` for primary text, never pure black
- Use coral (`#ff4b50`) for sale/discount prices and gold (`#ffaf00`) for rating stars
- Overlay dark near-black (`#111111`) caption chips on curation imagery
- Keep body and buttons at a dense 14px for fast scanning of large product grids

### Don't
- Spread orange across decorative elements — it dilutes the single-action signal
- Use drop shadows for elevation — idus is a flat, hairline-separated system
- Use pure black (`#000000`) for body text — the ladder is `#333333` → `#666666` → `#999999`
- Introduce a bespoke display webfont — the system stack is intentional for hangul density
- Round action buttons heavily — they stay at a tight 2px (the 100px pill is only for social-proof)
- Reuse the sale coral (`#ff4b50`) or rating gold (`#ffaf00`) as a primary action color — carrot is the only CTA color
- Add large empty margins that break the dense, scannable grid rhythm
- Set a light font weight on CTAs — action labels are always 700

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single/2-up product grid, sticky bottom action bar, category tabs scroll horizontally |
| Tablet | 640-1024px | 3-4 column product grids, moderate gutters |
| Desktop | 1024-1440px | 4-6 column dense grids, full category tab row, product detail media + sticky action rail |

### Touch Targets
- Primary action buttons at 48px height with 16px horizontal padding — comfortably tappable
- Social-proof pills at 33px height, full 100px radius for an unmistakable target
- Icon utility buttons (관심 / 내 정보 / 장바구니) at ~67px stacked icon+label hit areas

### Collapsing Strategy
- Product grids reflow from 4-6 columns down to 2-up / single column
- Category tab row switches to horizontal scroll on narrow viewports
- Product detail action rail (장바구니 / 선물하기 / 구매하기) becomes a sticky bottom bar on mobile
- Curation banners maintain full-bleed treatment with the dark caption chip repositioned

### Image Behavior
- Product thumbnails keep 12px rounded corners across breakpoints
- Curation imagery stays full-bleed; dark `#111111` caption chips overlay at all sizes
- No shadows on imagery at any size, consistent with the flat system

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: idus Carrot (`#ef7014`)
- CTA text: White (`#ffffff`)
- Sale / discount price: Coral (`#ff4b50`)
- Rating stars: Gold (`#ffaf00`)
- Event highlight: Yellow (`#ffea2c`)
- Primary text: `#333333`
- Secondary text: `#666666`
- Faint text: `#999999`
- Dark chip: Ink (`#111111`)
- Hairline: `#d9d9d9`
- Button outline (secondary): `#acacac`
- Tint surfaces: `#fff7f2` (orange), `#fff2f4` (pink)
- Canvas: White (`#ffffff`)

### Example Component Prompts
- "Create a product detail action rail: three 48px-tall buttons at 2px radius. Secondary 'add to cart' and 'gift' are white with 1px solid #acacac border and #333333 text; primary '구매하기' is #ef7014 background with #ffffff text, all 18px weight 700."
- "Design a product card: white #ffffff background, 12px rounded image, no shadow. Overlay a full-pill social-proof badge — #ef7014 background, #ffffff text, 100px radius, 14px weight 700 — reading 'recently purchased'. Rank flag: #ef7014 with 0 0 6px 6px radius top-left."
- "Build a category nav row: system-font tabs at 16px weight 400, inactive #666666 and active #333333, on a white header. No underline, no shadow."
- "Create a brand-outline button: white background, #ef7014 text, 1px solid #ef7014 border, 2px radius, 40px height, 14px weight 700 — for '작품문의' / '팔로우'."

### Iteration Guide
1. Orange (`#ef7014`) is the only action color — CTA, outline buttons, flags, pills; don't spread it decoratively
2. Weight 700 for actions/proof, 400 for everything else — hierarchy is weight, not typeface
3. No shadows — separate with `#d9d9d9` hairlines, `#acacac` outlines, and tint washes
4. Action buttons stay at 2px radius; only social-proof pills go full 100px
5. Text is `#333333` → `#666666` → `#999999`, never pure black
6. Coral (`#ff4b50`) = price/sale, gold (`#ffaf00`) = rating — never CTAs
7. Keep body/buttons dense at 14px for large scannable grids
8. Dark `#111111` chips for caption overlays on curation imagery

---

## 10. Voice & Tone

idus's voice is **warm, encouraging, and maker-centric** — it speaks about handmade 작품 (works) and the 작가 (makers) behind them, not "products" and "sellers." The register is friendly Korean commerce: it invites discovery ("취향발견" / discover-your-taste), reassures with social proof ("최근 573건 더 많이 구매되었어요" / "573 more purchased recently"), and asks rather than commands ("찾으시는 작가, 작품이 있나요?" / "Is there a maker or work you're looking for?"). Actions are plain and functional (`구매하기`, `장바구니`, `선물하기`, `작품문의`), never hype-driven.

| Context | Tone |
|---|---|
| Search prompt | Inviting, question-framed. "찾으시는 작가, 작품이 있나요?" |
| Category nav | Playful discovery labels. "취향발견", "선물추천", "베스트". |
| CTAs | Plain, functional imperatives. "구매하기", "선물하기", "작품문의". |
| Social proof | Warm, momentum-framed. "최근 N건 더 많이 구매되었어요". |
| Maker relationship | Respectful of the artisan. "작가홈", "팔로우" — you follow a person, not a shop. |

**Voice samples (verbatim from live surfaces):**
- "찾으시는 작가, 작품이 있나요?" — search placeholder (invites discovery, maker-first). *(verified live 2026-07-02)*
- "최근 573건 더 많이 구매되었어요" — social-proof pill (warm momentum, no pressure). *(verified live 2026-07-02)*
- "취향발견" — category tab (discovery-framed, taste-centric). *(verified live 2026-07-02)*

**Forbidden register**: aggressive scarcity/urgency ("지금 아니면 끝!"), treating makers as anonymous "sellers", undefined marketing jargon, exclamation-heavy hype. The tone stays warm and human because the goods are handmade and personal.

## 11. Brand Narrative

idus (아이디어스) was founded in **2014** by **Backpackr (백패커)**, led by CEO **김동환 (Kim Dong-hwan)**, to solve a specific gap in Korean commerce: talented independent makers of handmade goods — ceramics, jewelry, candles, baked goods, leather craft — had no dedicated, trusted marketplace to reach buyers who valued craft over mass production. The name reads as "idea + us / ideas," and the founding premise reframed a handmade purchase as a relationship with a 작가 (maker) rather than a transaction with a store.

The platform matured into Korea's largest handmade marketplace, expanding from physical goods into handmade classes (클래스) and gifting, and Backpackr later broadened its creator-economy footprint (including the crowdfunding platform 텀블벅 / Tumblbug). The homepage's own vocabulary — 작가 (maker), 작품 (work), 작가홈 (maker's home), 팔로우 (follow) — encodes the thesis: idus is a place to follow and support people who make things by hand.

What idus refuses, visible in its design: the glossy, shadow-stacked chrome of a mass DTC store and the hard-sell scarcity tactics of discount commerce. What it embraces: a warm single accent (carrot orange), a flat and dense but scannable grid, social proof framed as encouragement rather than pressure, and a maker-first vocabulary throughout the interface. *(Founding attribution and platform history are widely documented public facts about Backpackr / idus; specific interpretive readings of the design are editorial.)*

## 12. Principles

1. **Makers, not sellers.** The interface names people (작가, 작가홈, 팔로우), not shops. *UI implication:* surface the maker identity on cards and detail pages; make "follow the maker" a first-class action.
2. **One color means act.** Carrot orange (`#ef7014`) is the only saturated action color. *UI implication:* reserve orange for CTA, outline buttons, rank flags and social-proof; keep everything else neutral so the next step is unambiguous.
3. **Encourage, don't pressure.** Social proof is framed as warm momentum ("recently purchased"), never fear-based scarcity. *UI implication:* use positive, count-based reassurance pills; avoid countdown timers and "last chance" urgency.
4. **Dense but scannable.** The catalog is huge, so density is a feature. *UI implication:* separate with hairlines and tint washes, keep body at 14px, and let the single orange accent guide the eye through a crowded grid.
5. **Flat and warm.** Handmade goods deserve a light, human surface, not heavy banking chrome. *UI implication:* no drop shadows; lean on `#d9d9d9` hairlines, warm tint surfaces, and rounded product imagery.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable idus user segments (gift-shoppers seeking something personal, supporters of independent makers, hobbyists browsing handmade classes), not individual people.*

**정유진, 28, 서울.** Shopping for a friend's birthday and wants something that doesn't look mass-produced. Uses "선물추천" and the social-proof pills to feel confident a small maker is trustworthy. Chose idus because it feels like discovering a person, not scrolling a warehouse.

**김도현, 34, 경기.** A repeat buyer who follows several ceramic and leather 작가. Values the "작가홈" and 팔로우 flow — he buys again when a maker he follows releases new 작품. Trusts the flat, no-pressure interface over hard-sell discount apps.

**이서연, 41, 부산.** Browses handmade classes and gifts for family occasions. Appreciates that the copy is warm and the grid is dense enough to compare many options quickly without feeling rushed by urgency banners.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Single `#333333` line explaining no matching 작가/작품 were found, with a muted `#666666` suggestion to adjust the query. One carrot (`#ef7014`) CTA to browse categories. No clutter. |
| **Empty (empty cart / wishlist)** | `#666666` single line ("아직 담은 작품이 없어요"), with a carrot CTA back into discovery ("작품 둘러보기"). Warm, not scolding. |
| **Loading (grid fetch)** | Flat skeleton cards at final product-card dimensions, 12px radius, `#d9d9d9`-tinted blocks. No shadow shimmer — a flat pulse consistent with the shadowless system. |
| **Loading (purchase submit)** | Inline spinner within the `#ef7014` CTA; button label swaps to a progress state, previous page content stays visible. |
| **Error (network / fetch failed)** | Inline `#333333` message with a plain-language explanation and a retry, never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input in a coral (`#ff4b50`) tone; describes what's valid, not just "필수". |
| **Success (added to cart / purchased)** | Brief inline confirmation in a calm tone; next-step (장바구니 / 주문내역) linked immediately below. No celebratory emoji spam. |
| **Skeleton** | `#d9d9d9` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | `#999999` faint text on reduced-opacity surface; carrot actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, follow toggle |
| `motion-standard` | 200ms | Card/grid reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, banner carousel |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, pills |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, dense commerce aesthetic. Product cards fade-in from below as grids load at `motion-standard / ease-enter`; the carrot CTA and follow toggle respond to press with a subtle opacity/scale shift; curation banners cross-fade on a slow carousel. No bounce or spring — a marketplace signals steadiness and trust, not gimmickry. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the banner carousel freezes; the catalog remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle:
- https://www.idus.com (homepage) — primary brand color #ef7014 (rgb 239,112,20) on rank
  flags, social-proof pills (100px radius, 14px/700, "최근 N건 더 많이 구매되었어요"); text
  ladder rgb(51,51,51)/#333333 ×7587, rgb(102,102,102)/#666666 ×819, rgb(153,153,153)/#999999
  ×270; accents rgb(255,75,80)/#ff4b50 ×455, rgb(255,175,0)/#ffaf00 ×300,
  rgb(255,234,44)/#ffea2c ×210; dark chips rgb(17,17,17)/#111111; hairline
  rgb(217,217,217)/#d9d9d9; tint surfaces rgb(255,247,242)/#fff7f2, rgb(255,242,244)/#fff2f4;
  box-shadow none across chrome; system font stack; search placeholder
  "찾으시는 작가, 작품이 있나요?"; category tabs 선물추천/할인/베스트/취향발견/실시간/최신작품/커뮤니티.
- https://www.idus.com/v2/product/... (product detail) — primary CTA "구매하기" bg #ef7014 /
  #ffffff / 2px / 48px / 18px-700; secondary "장바구니"/"선물하기" white / #333333 / 1px solid
  #acacac (rgb 172,172,172); outline "작품문의"/"팔로우" white / #ef7014 text+border / 14px-700.

Token-level claims (§1-9) are sourced from this live inspection; full raw samples in
web/references/idus/.verification.md.

Voice samples (§10) are verbatim from the live idus surfaces (search placeholder,
social-proof pill, category tab).

Brand narrative (§11): idus (아이디어스) operated by Backpackr (백패커), founded 2014,
CEO 김동환 — Korea's largest handmade-goods marketplace. These are widely documented
public facts; specific design readings are editorial, not directly quoted brand statements.

Personas (§13) are fictional archetypes informed by publicly observable idus user segments.
Names are illustrative; they do not refer to real people.

Tier 2: getdesign.md/idus returned "0 DESIGN.md files / No designs found"; styles.refero.design
?q=idus returned no idus-specific style. KR Tier-2 under-coverage — Tier 1 carries the proof.
-->
