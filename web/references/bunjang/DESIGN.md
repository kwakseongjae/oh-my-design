---
id: bunjang
name: Bunjang
display_name_kr: 번개장터
country: KR
category: ecommerce
homepage: "https://m.bunjang.co.kr"
primary_color: "#d80c18"
logo:
  type: favicon
  slug: "https://static.bunjang.co.kr/web/ui/favicon.ico"
verified: "2026-05-14"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "primary = --color-primary / --color-red-500 #d80c18 (matches primary_color); no box-shadow anywhere — depth is borders + tints"
  colors:
    primary: "#d80c18"
    primary-hover: "#c00b15"
    brand: "#d80c18"
    canvas: "#ffffff"
    foreground: "#191919"
    muted: "#999999"
    on-primary: "#ffffff"
    surface: "#f6f6f6"
    hairline: "#e5e5e5"
    body: "#666666"
    error: "#d80c18"
    success: "#00a587"
    info: "#027aff"
    warning: "#ffc200"
    safe: "#5558a8"
    care: "#ffe1a6"
  typography:
    family: { sans: "Pretendard Variable", mono: "sans-serif" }
    section-title:  { size: 20, weight: 700, lineHeight: 1.2, use: "Section title (오늘의 추천 아이템), gray-900" }
    subsection:     { size: 18, weight: 700, lineHeight: 1.2, use: "Subsection title / large emphasis, gray-900" }
    body:           { size: 16, weight: 400, lineHeight: 1.2, use: "Default body, CTA label, gray-900 / white-on-red" }
    price:          { size: 16, weight: 700, lineHeight: 1.2, use: "Price — the headline, gray-900" }
    search-input:   { size: 15, weight: 500, lineHeight: 18, use: "Search input value + placeholder, gray-900" }
    card-title:     { size: 14, weight: 500, lineHeight: 1.2, use: "Product card title, gray-600 #666" }
    chip-emphasis:  { size: 13, weight: 700, lineHeight: 1.2, use: "Compact emphasized chip" }
    meta:           { size: 12, weight: 500, lineHeight: 1.2, use: "Meta / timestamp / region, gray-300 #999" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 6, lg: 20, full: 999 }
  shadow:
    none: "none — no box-shadow on any sampled element"
    overlay-chip: "rgba(0,0,0,0.3) semi-transparent bubble for carousel counter overlay"
    heart-inner: "10% black inner-fill under heart SVG so white stroke reads on any thumbnail"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#d80c18", fg: "#ffffff", border: "none", radius: "6px", padding: "16px 20px", font: "16px / 400", hover: "bg #c00b15", use: "Single highest-intent CTA per surface — the only place red appears" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#4c4c4c", border: "1px solid #e5e5e5", radius: "6px", padding: "12px 20px", font: "16px / 400", use: "Secondary action" }
    input-search: { type: input, bg: "transparent", fg: "#191919", radius: "999px", font: "15px / 500", use: "Search input; rounded pill container carries chrome, placeholder 검색" }
    product-card: { type: card, bg: "#f6f6f6", radius: "6px", use: "81:100 portrait thumb placeholder; price 16/700 #191919, title 14/500 #666, meta 12/500 #999, heart top-right" }
    chip-safe: { type: badge, bg: "#5558a8", fg: "#ffffff", radius: "6px", font: "13px / 700", use: "안전결제 escrow chip — indigo --color-safe ladder" }
    chip-care: { type: badge, bg: "#ffe1a6", fg: "#191919", radius: "6px", font: "13px / 700", use: "감정완료 luxury-auth chip — warm amber --color-care ladder" }
    chip-info: { type: badge, bg: "#027aff", fg: "#ffffff", radius: "6px", font: "13px / 700", use: "내폰시세 price-verified chip — info blue" }
    heart-button: { type: toggle, fg: "#ffffff", shadow: "10% black inner-fill glow under SVG", active: "solid #d80c18 fill", use: "찜 heart button, white stroke legible on any thumbnail" }
---

# Design System Inspiration of Bunjang (번개장터)

## 1. Visual Theme & Atmosphere

Bunjang is what happens when Korea's first generation of mobile flea-market sellers — high-school sneakerheads, K-pop merch traders, used-iPhone flippers — grow up and demand an interface that respects their hustle. The home screen is a near-monochrome canvas: pure white (`#ffffff`) underneath, near-black text (`#191919`), and a single accent — **Bunjang Red** (`#d80c18`) — used so sparingly that when it appears, it lands. There is no gradient sweep, no shadow ladder, no marketing flourish. Depth is signaled by 1px gray-100 (`#e5e5e5`) borders and the occasional gray-50 (`#f6f6f6`) tint behind the footer or as a placeholder for an image that hasn't loaded yet. The aesthetic is **trader-tool sober** — adjacent to Karrot's warm-orange neighborliness, but Bunjang is less "친근한 동네 이웃" and more "거래 정확하게 끝내자."

The atomic unit is the **portrait product card** — a 81:100 vertical thumbnail (the brand has formalized this with `--bun-ui-aspect-ratio-vertical: 81 / 100`), price in 16px/700, title in 14px/500 gray-600, a single meta row in 12px/500 gray-300 ("19시간 전 · 지역 · 찜 N"), and a top-right heart button outlined against the photo with a 10% inner glow so it stays legible no matter what photo the seller uploaded. Cards stack 2-up on mobile, 4-up on desktop, and they go on, and on, and on — because Bunjang's defining promise is that *the next listing you scroll to could be exactly the thing you've been searching for at the price you've been waiting for.*

Pretendard Variable carries 100% of UI text. There is no display face, no custom logotype anywhere outside the rounded-square app icon. The brand voice rides entirely on Pretendard's weight axis — 400 for body, 500 for secondary, 700 for price. The "Bun UI" internal design system (private; CSS custom-property prefix `--bun-ui-*` visible in production) provides the radius, aspect-ratio, z-index, and safe-area tokens; the rest is `--color-*` semantic ladders.

**Key Characteristics:**
- **Bunjang Red** (`#d80c18`) as a *scarcity asset* — exclusively reserved for the single highest-intent CTA on a surface (e.g. "앱 다운로드", "번개장터 앱으로 시작하기")
- 81:100 portrait thumbnail as the canonical product photo (phones, sneakers, K-pop goods photograph taller than they are wide)
- Pretendard Variable as the only typeface — three weights (400/500/700), no italics
- No box-shadow anywhere in sampled production code — depth is borders + tints, not elevation
- Two-tier card economics: basic card vs. service-tagged card (`안전결제` escrow chip, `감정완료` luxury-auth chip, `내폰시세` price-verified chip)
- Mobile-first at 390px baseline — `m.bunjang.co.kr` is the canonical web surface; desktop is a courtesy
- Korean text dominates; the system stack handles incidental Latin (prices use Hindu-Arabic numerals + "원" suffix)
- Bottom of the home page is always an app-install rail — web is a discovery funnel, the app is the trade venue

## 2. Color Palette & Roles

All colors below were extracted from production `:root` CSS custom properties (`getComputedStyle(document.documentElement)`) on 2026-05-14. Token names preserve Bunjang's own naming.

### Primary
- **Bunjang Red** (`#d80c18`) — `--color-primary` / `--color-red-500`. The single brand accent. Used on `_variant-primary` buttons only. Pressed-state would darken toward `#c00b15` (interpolated; not directly observed in computed styles since no hover state was captured).
- **Pure White** (`#ffffff`) — `--color-white`. Page background, card surface, primary CTA text color.
- **Gray-900** (`#191919`) — `--color-gray-900`. Primary text. Used on body, all headings, prices.

### Neutral Scale
The gray ladder is unusually granular — 11 stops. This is the spine of Bunjang's depth system.
- `--color-gray-900` `#191919` — primary text
- `--color-gray-800` `#333333` — strong secondary text
- `--color-gray-700` `#4c4c4c` — secondary button text
- `--color-gray-600` `#666666` — product card title, footer text
- `--color-gray-500` `#7f7f7f` — tertiary text
- `--color-gray-400` `#8c8c8c` — icon-only buttons, banner-close ×
- `--color-gray-300` `#999999` — meta / timestamp / "19시간 전"
- `--color-gray-200` `#b2b2b2` — disabled-ish placeholder text
- `--color-gray-150` `#cccccc` — strong dividers
- `--color-gray-100` `#e5e5e5` — secondary button border, light dividers
- `--color-gray-70` `#f0f0f0` — subtle row hover / pressed bg
- `--color-gray-50` `#f6f6f6` — footer surface, image placeholder bg (also aliased as `--color-gray`)
- `--color-gray-10` `#fafafa` — barely-tinted section divider

### Semantic Tiers (4-stop ladders)
- **Red** — `--color-red-{50: #fdf3f3, 100: #fbe7e8, 400: #f5c2c5, 500: #d80c18}` — error / destructive / primary share the 500
- **Green** — `--color-green-{50: #edf9f7, 100: #dbf2ee, 400: #a6dfd5, 500: #00a587}` — success / available / verified-OK (note: a teal-leaning green, not a Korean-marketplace stoplight green)
- **Blue** — `--color-blue-{50: #ebf5ff, 100: #d9ebff, 400: #b3d7ff, 500: #027aff}` — informational link / verified info (e.g. `내폰시세` price-check confirmed)
- **Yellow** — `--color-yellow-{50: #fffbed, 100: #fff6db, 400: #ffeaa6, 500: #ffc200}` — warning / highlight

### Specialty Tiers (Bunjang's distinctive contribution)
These two ladders don't appear in generic DS palettes — they map to Bunjang's escrow + luxury-authentication services.
- **Care** — `--color-care-{50: #FDF4E2, 100: #F8ECD3, 300: #F6E5C3, 500: #FFE1A6}` — warm amber / cream, used on the `감정완료` (authentication-complete) badge family for luxury items (watches, bags, K-pop signed goods). It's the color of "this thing is worth careful handling."
- **Safe** — `--color-safe-{50: #EFF2FE, 100: #E1E7FE, 300: #7775E3, 400: #6458E2, 500: #5558A8}` — a cool indigo / blue-violet ladder used on `안전결제` (escrow) chips. Distinct from informational blue — it specifically signals "Bunjang holds the money until both parties confirm."

### Partner Brand Colors (social login only)
- `--color-brand-kakao` `#fae100` + `--color-brand-kakao-2` `#3c1e1e` (KakaoTalk yellow + dark text)
- `--color-brand-naver` `#03cf5d`
- `--color-brand-facebook` `#1877f2` (+ gradient variant `#00B2FF → #006AFF`)
- `--color-brand-twitter` `#1da1f2`
- `--color-brand-line` `#00b900`
- `--color-brand-band` `#21c531`
- `--color-brand-apple` `#000000`

These are NOT brand-extension colors — they are partner-correct fills for federated login buttons only. Never reuse them in Bunjang chrome.

## 3. Typography

One family. Three weights. No exceptions.

- **Family:** Pretendard Variable, fallback `sans-serif`. Self-hosted from a Bunjang CDN. Verified across 211/211 sampled DOM nodes — there is no second typeface anywhere in the production tree.
- **Weights:** 400 (regular), 500 (medium), 700 (bold). No 600 stop observed; the visual hierarchy jumps directly from 500 to 700, which is why prices feel as urgent as they do — they're not just "a little heavier," they're *significantly* heavier.

### Observed scale (mobile)
| Size | Weight | Role | Color |
|---|---|---|---|
| 20px | 700 | Section title ("오늘의 추천 아이템") | gray-900 |
| 18px | 700 | Subsection title / large emphasis | gray-900 |
| 16px | 400 | Default body, CTA label | gray-900 / white-on-red |
| 16px | 700 | **Price** | gray-900 |
| 15px | 500 | Search input value + placeholder | gray-900 |
| 14px | 500 | Product card title | gray-600 (`#666`) |
| 13px | 700 | Compact emphasized chip | varies |
| 12px | 500 | Meta / timestamp / region | gray-300 (`#999`) |

Line-height is `normal` (browser default) for almost every node — Bunjang relies on padding and explicit gap, not line-height, for vertical rhythm. The single exception observed: the search input forces `line-height: 18px` to align caret height across browsers.

Letter-spacing is `normal` everywhere. Hangul stems are never tightened.

## 4. Iconography & Imagery

- **Logo:** A 100×100 rounded-square app icon (radius 22px) with a stylized lightning-bolt mark inside a gradient field. The web wordmark sits next to it in Pretendard 700. The logo icon SVG is served from `https://static.bunjang.co.kr/web/ui/logo-icon.svg`.
- **System icons:** Inline SVG, 20×20 default, fill via `path[fill]` attribute (not CSS) — fill `#191919` for foreground, `#8c8c8c` for muted (close ×, secondary nav).
- **Heart (찜) button:** outlined SVG with a 10% black-fill inner shape underneath, so the white outline reads against any thumbnail. Tapped state: solid red fill (`--color-red-500`).
- **Product thumbnails:** `loading="lazy"`, served from `media.bunjang.co.kr` with a `?crop=` parameter (e.g. `media.bunjang.co.kr/product/{id}_1_{ts}_w1200.jpg?crop=0`). Aspect ratio forced to 81/100 via inline `--aspectRatioVar__1nf1jaf0: var(--bun-ui-aspect-ratio-vertical)`.
- **Photo aesthetic:** seller-uploaded, unedited, often well-lit-but-amateur. The platform does not impose a photography style — Bunjang's identity comes from *containing* heterogeneous photos consistently, not from prescribing what they look like.
- **No illustrations** observed in the home-page surface. No mascot. No empty-state cartoons in sampled nodes.

## 5. Spacing, Radius & Elevation

### Radius
- `4px` — small chip / banner CTA (XS variant: "앱 다운로드")
- `6px` — primary CTA, secondary CTA, thumbnail container (`--radiusVar__1j9duj80: 6px`)
- `20px` — soft large chip
- `999px` — circular icon button, pill counter chip, heart button hit area
- Token: `--bun-ui-radius-pill: 999px`

### Spacing
Bunjang does not expose a numeric spacing scale via CSS variable. Observed padding patterns:
- CTA button padding: `12px 20px` (medium), `8px 12px` (XS), `16px 20px` (XL/full-width)
- Footer padding: `20px 132px 40px` desktop, tighter on mobile
- Section vertical rhythm: ~24-32px between sections
- Card grid gap: ~12-16px

### Elevation
**There is no box-shadow on any sampled element.** Depth comes from:
1. A 1px solid `#e5e5e5` border (secondary buttons, dividers)
2. A `#f6f6f6` background tint (footer surface, image placeholders)
3. A 10% black inner-fill on overlay icons (heart button against bright thumbnails)
4. A `rgba(0,0,0,0.3)` semi-transparent bubble for overlay chips (carousel counter "1 / 10")

This is a deliberate choice. Bunjang treats every surface as a *transparent ledger* — you can see what's there, you can see how it's edged, but nothing floats. The product is the photograph; the chrome shouldn't compete for elevation.

## 6. Layout & Grid

- Page max-width tokens: `--layout-width-xsmall: 480px` / `--layout-width-small: 640px` / `--layout-width-large: 1240px` / `--layout-width-full: 100vw`
- Canonical viewport: **390px mobile** (m.bunjang.co.kr is mobile-first; desktop centers content within 1240px with generous side gutters)
- Drawer width: `--drawer-width: 480px` (used for category drawer, filter sheet)
- Product grid: 2-col mobile / 4-col desktop, card gap ~12-16px
- iOS safe-area: `--bun-ui-sat`, `--bun-ui-sab`, `--bun-ui-sal`, `--bun-ui-sar` (top/bottom/left/right inset variables; populate at runtime on iPhone)

## 7. z-index Tokens

Bunjang ships explicit named z-index tokens — a sign of an internal DS that's gone through stacking-context disputes:
- `--z-index-sticky: 100`
- `--z-index-footer: 100`
- `--z-index-header: 200`
- `--z-index-widget: 500`
- `--z-index-drawer-dim: 900`
- `--z-index-drawer: 1000`
- `--z-index-popup-dim: 1100`
- `--z-index-popup: 1200`
- `--z-index-snackbar: 1500`

Snackbar (transient toast) sits on top of everything — confirms Bunjang's preference for transient, non-blocking feedback over modal interruption.

## 8. Components — atomic anatomy

### Button (Bun UI `_button_1cw4e_1`)
Three variants × four sizes observed in class names: `_variant-{normal|primary|…}` × `_size-{XS|M|XL}` × `_full`.

| variant | bg | text | border | radius | size XS pad | size M pad | size XL pad |
|---|---|---|---|---|---|---|---|
| primary | `#d80c18` | `#ffffff` | none | 4-6px | `8 12` | — | `16 20` |
| normal (secondary) | `#ffffff` | `#4c4c4c` | `1px solid #e5e5e5` | 6px | — | `12 20` | — |

### Search input (Bun UI `_input_au7f1_17`)
- Pretendard Variable, 15px / 500 / `#191919`
- Line-height: 18px (explicit override for caret alignment)
- Transparent background — the rounded pill container behind it carries the visual chrome
- Placeholder: "검색" (or contextual)

### Product Card (Bun UI `_container_15rjm_1`)
```
┌─────────────────┐ ← Thumbnail
│                 │    aspect-ratio: 81 / 100
│      [img]    ♡│   border-radius: 6px
│                 │    bg #f6f6f6 (placeholder)
│                 │   heart absolute top-right, 40×40 hit
└─────────────────┘    SVG fill=none stroke=#fff + 10% black inner glow
  600,000원            ← Price: 16px / 700 / #191919
  맥북에어 m1 2020...    ← Title: 14px / 500 / #666 (1-2 lines)
  19시간 전 · 강남 · 찜2 ← Meta: 12px / 500 / #999
```

Card variants add a single small chip (4-6px radius) above the title row:
- `안전결제` — `--color-safe-*` ladder, indigo
- `감정완료` — `--color-care-*` ladder, warm amber
- `내폰시세` — `--color-blue-*` ladder, info blue

### Header
- Hamburger (left) — 20×20 icon button
- Logo wordmark (clickable, /)
- Search input (center, flex-grow)
- Right cluster: notification bell, wishlist heart, login button or avatar
- Sticky at z-index 200

### App-Download Top Banner
- Sticky above header at z-index 100 (footer/sticky tier)
- Logo icon 32×32 + body copy + primary CTA chip + close ×
- Dismissible (close × on right)

## 9. Microcopy & Voice (analysis-only — do not transplant phrases verbatim)

Bunjang's voice on the home surface is **direct, fast, lower-case-energy even when written in Korean.** Sentences default to plain `~해요/세요` register without exclamation marks. The brand does NOT shout.

Observed patterns:
- CTAs use verbs over nouns: "앱 다운로드" not "앱 다운로드 페이지로"
- App-install nudges acknowledge the user's autonomy: the banner copy frames the app as a *better* path, not the only path
- Product cards never editorialize the listing — no "🔥 인기!" "마지막 1개!" — the only emphasis comes from typography weight on the price
- Time stamps are conversational ("19시간 전") not absolute ("2026-05-13 22:14")
- Region is abbreviated to the smallest disambiguating unit ("강남" not "서울특별시 강남구")

**Voice principles when you write Bunjang-tier copy:**
1. **Verb-first, present-tense.** Push the next action; don't describe the current state.
2. **No urgency manufacturing.** Bunjang trusts that scarcity is already real — there are 6 million listings and the user knows it.
3. **Specificity over enthusiasm.** "오늘 19시간 전 등록" beats "방금 막!"
4. **The price is the headline.** Never write a marketing line above a price; let the price be loud and let the title be quiet.
5. **Respect the trader.** Both buyer and seller are users — never copy that flatters one side at the other's expense.

## 10. Patterns & Anti-Patterns

### Patterns this DS encodes
- **Restraint of red.** A single hex (`#d80c18`) marks one action per surface. Red is a finite resource; spending it on everything makes it worth nothing.
- **Portrait product photography.** 81:100 is non-negotiable — designers crop, not photographers re-shoot.
- **Borders, not shadows.** Every depth signal is a 1px gray-100 line or a gray-50 fill.
- **Typography as hierarchy.** No need for color emphasis on the price when 16px/700 vs. 14px/500 already does the work.
- **Service tiers are colorways.** Safe = indigo; Care = warm amber; Verified = info blue. Each chip teaches the user the brand's product taxonomy without copy.

### Anti-patterns to refuse
- ❌ Red used for secondary or tertiary actions (drains the primary).
- ❌ Square or square-ish thumbnails on product cards (breaks the 81:100 vertical convention and makes phones / sneakers look stunted).
- ❌ Box-shadow on cards or buttons (introduces an elevation language the rest of the system rejects).
- ❌ Mixing Noto Sans KR, Apple SD Gothic Neo, or a display face — Pretendard Variable is the contract.
- ❌ Heart icon without the 10% black inner glow — it disappears on bright photos.
- ❌ Manufactured urgency copy ("마지막 1개!", "지금 바로!"). The platform's depth IS the urgency.
- ❌ Modal interruptions where a snackbar would do (z-index 1500 is meant for non-blocking confirmation, not consent gates).

## 11. Brand Voice Summary

If Karrot is your warm neighbor who'll meet you at the playground after work, Bunjang is the high-volume trader at the next desk who already has the link, the price, and the timestamp — and who will absolutely close the deal before lunch. Both serve the same market; they serve it from completely different temperaments.

Bunjang's interface earns trust by being *unsentimental about its job*. White canvas, monochrome type, one red button. The promise is not warmth — it's **velocity and price discovery**. Six million listings, sort by lowest, scroll until you find it. The internal DS (`bun-ui`) is the rails; the marketplace is the freight.

## 12. When to draw inspiration from Bunjang

Use this reference for:
- C2C / P2P marketplaces where listing volume is the value proposition
- Surfaces where the user's primary mode is **scanning many similar items** (resale, classifieds, vertical commerce)
- Brands that need to feel **trustworthy without being formal** — escrow / payments / verification services that prove credibility through small color-coded chips rather than long copy
- Mobile-first Korean (or East-Asian) audiences who expect Pretendard-grade type rendering and won't accept laggy infinite scroll
- Products where **one CTA per surface** is the right discipline (vs. dashboards with five competing primaries)

Do NOT use this reference for:
- Premium / luxury brands where shadows, gradients, and curated photography are the value
- Editorial commerce where the photo deserves a 4:5 or 1:1 art-directed frame
- B2B SaaS where information density and table-rendering trump scrollable feeds


## 13. Do's and Don'ts

### Do
- Reserve Bunjang Red (#d80c18, --color-primary) for the single highest-intent CTA per surface — the only place red appears
- Build the product card on the 81:100 portrait thumbnail (--bun-ui-aspect-ratio-vertical: 81 / 100) with a 6px radius and #f6f6f6 placeholder bg
- Signal depth with 1px #e5e5e5 (gray-100) borders and #f6f6f6 (gray-50) tints instead of elevation
- Set all UI text in Pretendard Variable using only the 400/500/700 weights, letting 16px/700 price outweigh 14px/500 gray-600 (#666) titles
- Color-code service chips by their dedicated ladders — indigo --color-safe-* for 안전결제, warm-amber --color-care-* for 감정완료, info-blue --color-blue-* for 내폰시세
- Outline the heart (찜) button with a 10% black inner glow so its white stroke stays legible on any seller photo, flipping to solid --color-red-500 when tapped

### Don't
- Spend red (#d80c18) on secondary or tertiary actions — it drains the single primary it is meant to mark
- Use square or square-ish thumbnails that break the 81:100 vertical convention and make phones and sneakers look stunted
- Add box-shadow to any card or button — no sampled element carries elevation, and it contradicts the borders-and-tints depth language
- Mix in Noto Sans KR, Apple SD Gothic Neo, or any display face — Pretendard Variable carries 100% of UI text
- Manufacture urgency with copy like '마지막 1개!' or '지금 바로!' — the platform's listing depth is the urgency, and only price typography earns emphasis
- Reuse partner login colors (kakao #fae100, naver #03cf5d, etc.) or interrupt with a modal where a z-index 1500 snackbar would do

---

## Verification footer

**Verified:** 2026-05-14
**Verifier:** omd:add-reference live capture
**URL:** https://m.bunjang.co.kr/

### Tier 1 — Live inspection (PASS)
- Chrome DevTools Protocol over `:9222` (websocket, `suppress_origin=True` to bypass `--remote-allow-origins` block)
- Two viewport captures: desktop 1280×713 dpr=2 + mobile-emulated 390×844 dpr=3 (iPhone UA)
- 73 CSS custom properties extracted from `:root` via `getComputedStyle(document.documentElement)`
- 211 DOM nodes sampled across header / nav / cards / buttons / footer / price / heart / meta
- 9 raw_samples preserved in `assets/_reference/.live-inspect-proof.json`
- Logo SVG archived in `assets/_reference/logo-icon.svg`

### Tier 1 — Official published DS (NEGATIVE — documented)
Attempted lookups (all 2026-05-14):
- `https://design.bunjang.co.kr/` → DNS no-resolve (000)
- `https://bun-ui.bunjang.co.kr/` → DNS no-resolve (000)
- `https://tech.bunjang.co.kr/` → DNS no-resolve (000)
- `https://brand.bunjang.co.kr/` → DNS no-resolve (000)
- `https://company.bunjang.co.kr/` → DNS no-resolve (000)
- `https://blog.bunjang.co.kr/` → DNS no-resolve (000)
- `https://medium.com/bunjang-tech/` → 404
- `https://github.com/bunjang` → 200 but **org has no public repos / members / packages**
- `https://www.npmjs.com/package/@bunjang/bun-ui` → 403 (package does not exist on public npm)

**Conclusion:** Bunjang operates a real, mature internal design system branded **"Bun UI"** (proven by `--bun-ui-*` CSS-variable prefix, vanilla-extract class-name patterns `Box__7nn0kn17`, `Flex__wsrgth3`, `Typography_typography__1wr8iu13`, and explicit z-index/radius/aspect-ratio token families). However, as of the verification date there is **no public Storybook, no public npm package, no published documentation site, and no public GitHub presence**. The DS exists; the public artifacts do not.

### Tier 2 — 3rd-party indexes (NEGATIVE)
- `https://getdesign.md/bunjang` → "No designs found for 'bunjang'"
- `https://styles.refero.design/?q=bunjang` → no entry

Consistent with the KR-10 systemic finding (2026-05-13 audit): English-tooling-oriented DS directories have weak Korean coverage.

### Tier 3 — Reconciliation
This DESIGN.md reconciles Tier 1 live capture as the sole authoritative source. Token names, hex values, type scale, radius scale, z-index scale, aspect-ratio tokens, and semantic palette ladders are all taken verbatim from production CSS custom properties. Component anatomy and microcopy patterns are observed from rendered DOM and live text, then re-described in our own analytical voice — **no taglines or copy are transplanted verbatim**. Brand red, gray ladder, and Bun UI primitives are documented as a *reference* for downstream design work, not for re-use of brand assets.

### IP / asset guardrails
- Logo SVG is archived in `assets/_reference/` for verification of capture fidelity only — **not for downstream use** in derivative products
- No taglines, no marketing copy, no product-listing text is reproduced verbatim
- Brand color names ("Bunjang Red"), service-feature names ("안전결제", "감정완료", "내폰시세") are used descriptively for accurate documentation — they are not appropriated as product names
- Voice analysis in §9 describes patterns observed in production; the practical guidance is original interpretation
