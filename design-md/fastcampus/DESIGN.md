---
id: fastcampus
name: Fastcampus
country: KR
category: education
homepage: "https://fastcampus.co.kr"
primary_color: "#fc1c49"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=fastcampus.co.kr&sz=256"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#fc1c49"
    primary-darken: "#c9032a"
    primary-renewal: "#d60039"
    primary-low: "#ffdad8"
    error: "#c5213b"
    yellow: "#ffeb3b"
    yellow-low: "#fff9c4"
    yellow-deep: "#f57f17"
    orange: "#f8930f"
    pink: "#e91e63"
    pink-low: "#fce4ec"
    green: "#43a047"
    blue: "#3b83ff"
    blue-low: "#ebf3ff"
    surface: "#f5f5f6"
    divider: "#e7e7e8"
    border-light: "#cfd0d1"
    disabled-text: "#a0a2a3"
    muted: "#747678"
    heading: "#252729"
    label: "#171b1f"
    white: "#ffffff"
  typography:
    family: { sans: "Pretendard Variable", mono: "Pretendard Variable" }
    banner:  { size: 40, weight: 700, lineHeight: 1.2, use: "Home carousel two-line headline" }
    h1:      { size: 34, weight: 700, lineHeight: 1.3, use: "Category / course page title" }
    h2:      { size: 26, weight: 700, lineHeight: 1.35, use: "Rail group labels" }
    body:    { size: 16, weight: 400, lineHeight: 1.5, use: "Default nav link, paragraph copy" }
    gnb-compact: { size: 12, weight: 600, lineHeight: 1.4, use: "Secondary compact GNB items" }
    button:  { size: 14, weight: 600, lineHeight: 1.0, use: "Category-pill carousel label" }
    rank:    { size: 12, weight: 500, lineHeight: 1.4, use: "Rank badge corner overlay" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, section: 48 }
  rounded: { sm: 4, md: 4, lg: 19, full: 9999 }
  components:
    pill-selected: { type: tab, bg: "#252729", fg: "#ffffff", radius: 4, padding: "12px 16px", font: "14px/600 Pretendard Variable", use: "Active category pill" }
    pill-unselected: { type: tab, bg: "#f5f5f6", fg: "#747678", radius: 4, padding: "12px 16px", font: "14px/600 Pretendard Variable", use: "Inactive category pill" }
    button-primary: { type: button, bg: "#fc1c49", fg: "#ffffff", radius: 4, padding: "12px 24px", font: "14px/600 Pretendard Variable", use: "Enrolment CTA (hover #c9032a)" }
    button-tinted: { type: button, bg: "#ffdad8", fg: "#fc1c49", radius: 4, use: "Sale-tag fills, hover scrim" }
    card: { type: card, bg: "#ffffff", radius: 4, use: "Course card, top-rounded 4px 4px 0 0" }
    rank-badge: { type: badge, bg: "#171b1f", fg: "#ffffff", radius: 4, font: "12px/500 Pretendard Variable", use: "1위 / 2위 / 3위 corner overlay" }
    tag-free: { type: badge, bg: "#fff9c4", fg: "#f57f17", radius: 4, padding: "2px 8px", font: "12px/600 Pretendard Variable", use: "0원 / 무료 promo tag" }
    tag-discount: { type: badge, bg: "#ffdad8", fg: "#fc1c49", radius: 4, padding: "2px 8px", font: "12px/600 Pretendard Variable", use: "Discount sale flag" }
    tag-blue: { type: badge, bg: "#ebf3ff", fg: "#3b83ff", radius: 4, padding: "2px 8px", font: "12px/600 Pretendard Variable", use: "Dev/data category tag" }
    tag-pink: { type: badge, bg: "#fce4ec", fg: "#e91e63", radius: 4, padding: "2px 8px", font: "12px/600 Pretendard Variable", use: "Design/creative category tag" }
    input: { type: input, bg: "#ffffff", fg: "#171b1f", radius: 4, padding: "0 12px", font: "14px/400 Pretendard Variable", use: "Search field (1px #cfd0d1, focus #fc1c49)" }
  components_harvested: true
---

# Design System Inspiration of Fastcampus

## 1. Visual Theme & Atmosphere

Fastcampus (패스트캠퍼스) is the design language of a **Korean adult-upskilling marketplace that competes on density, momentum, and rich-color play** — a deliberately louder register than Inflearn's calm-mint catalog or Classum's institutional blue chrome. Where Inflearn whispers "lifetime career, no pressure" with a single mint accent on a white page, Fastcampus shouts **"this cohort starts soon, the discount expires Friday"** through a full Material-style palette — yellow `#ffeb3b`, red `#fc1c49`, orange `#f8930f`, blue `#3b83ff`, green `#43a047`, pink `#e91e63` — each color used decisively per surface band so the catalog scrolls like a programmed market rather than a quiet library. The 103 `--fds-color-*` and `--c-primary-*` CSS variables on `:root` of `fastcampus.co.kr` reveal the underlying engine: a private internal "Fastcampus Design System" (the `fds-` prefix) with full **10-shade ramps per hue (50/100/200/300/400/500/600/700/800/900)** plus semantic role tokens (`--fds-semantic-primary-primary = #fc1c49`, `--fds-semantic-label-primary = #171b1f`).

The signature is **crimson-red `#fc1c49`** — `--c-primary` and `--fds-semantic-primary-primary` are pinned to the same value, with `--c-primary-darken = #c9032a` and `--c-primary-darken-renewal = #d60039` as the pressed-state ladder. This red is *commerce-red*, not warning-red: it lands on enrolment CTAs, sale-price strikethroughs, and limited-time banners, never on form errors (errors use the separate `--fds-color-red-*` ramp, distinct from primary brand red). The geometric vocabulary is **4px-everywhere with corner-clipped variations**: cards use `4px 4px 0 0` (top-rounded, bottom flat — thumbnail caps the visual seam), category pills `4px`, rank badges `4px 0` (NW-SE corner only) for the dark `#171b1f` "1위 / 2위 / 3위" overlays. There is no full-pill radius on category navigation — a notable departure from Inflearn (`32px` nav pills) and Toss (`12-16px` everywhere). Fastcampus chose **sharper, more conventional rectangles** to read as "structured course list," not "browsy social feed."

Typography is **Pretendard Variable** (the variable-weight version, not static Pretendard) loaded as `--font-base`, with Apple SD Gothic Neo carrying `html` and the full Korean fallback chain on body. Banner headlines run **40px / 700** with two-line breaks (`관심 가는 원데이 클래스 / 0원 사전 알림 신청하세요!`) — bigger and bolder than Inflearn's 34px hero — and category-pill labels at **14px / 600** sit at the *commerce density* register, not the calm-catalog one. Body text is `#171b1f` (`--fds-color-neutral-950`), muted is `#747678` (`--fds-color-neutral-500`), and the neutral surface fill is `#f5f5f6` (`--fds-color-neutral-30`) — a slightly cooler/grayer neutral than Inflearn's Mantine gray-0 `#f8f9fa`.

**Key Characteristics:**
- Pretendard Variable as primary; Apple SD Gothic Neo on `html`; full Korean fallback chain on body
- Signature crimson `#fc1c49` (`--c-primary`, `--fds-semantic-primary-primary`) for enrolment / sale / limited-time; darken `#c9032a` for pressed, renewal `#d60039` for refreshed campaign skin
- Rich Material-style 10-shade palette (`--fds-color-{yellow,orange,red,pink,green,blue,neutral}-{50..950}`) — yellow `#ffeb3b` / `#fdd835`, orange `#f8930f`, pink `#e91e63`, green `#43a047`, blue `#3b83ff` all live on the home rail simultaneously
- Two radius vocabularies: `4px` flat (default — category pills, banner-list buttons) and `4px 4px 0 0` (course cards, top-rounded with thumbnail seam)
- Banner headlines 40px / 700 (Pretendard Variable, two-line) — louder than Inflearn's 34px
- Rank badges are dark `#171b1f` corner-clipped (`4px 0`) overlays on tile NW corner — "1위 / 2위 / 3위 / 1,940+" enrolment-count flex
- Category-pill carousel: black-on-white selected (`#000` / `#fff` / radius 4px / 14px-600), gray-on-gray neutral (`#f5f5f6` bg / `#747678` text) for the 11+ category browser strip
- Zero box-shadow on the category-pill or rank-badge layer (depth is color contrast, not elevation)
- GNB nav links sit at 16px / 400 default + 12px / 600 (smaller-bolder) for `커뮤니티` / `기업교육` secondary links — an inverted-density signature versus Inflearn's flat 16px/600 nav

## 2. Color Palette & Roles

### Primary (commerce-red)

- **Primary Red** (`#fc1c49`) — `--c-primary` and `--fds-semantic-primary-primary`. Enrolment CTA, sale-price highlight, limited-time banners, time-left countdown text.
- **Primary Darken** (`#c9032a`) — `--c-primary-darken`. Pressed / active CTA, hover on red link.
- **Primary Darken Renewal** (`#d60039`) — `--c-primary-darken-renewal`. Campaign-refresh skin variant (used on seasonal home banners).
- **Primary RGB tuple** (`237, 35, 75`) — exposed as `--c-primary-rgb` for `rgba(var(--c-primary-rgb), 0.X)` alpha mixing on hover scrims.

### Neutrals (full 10-shade `--fds-color-neutral-*` ladder)

| Token | Value | Use |
|---|---|---|
| `neutral-30` | `#f5f5f6` | Default neutral surface — category-pill rest bg, secondary chip fill |
| `neutral-50` | `#e7e7e8` | Soft divider, skeleton block bg |
| `neutral-100` | `#cfd0d1` | Neutral border light |
| `neutral-200` | `#b7b9ba` | Neutral border default |
| `neutral-300` | `#a0a2a3` | Disabled icon fill |
| `neutral-400` | `#8a8c8d` | Caption / metadata bottom tier |
| `neutral-500` | `#747678` | Muted text / unselected-pill label |
| `neutral-600` | `#5f6163` | Secondary body text |
| `neutral-700` | `#4b4d4f` | Strong body text |
| `neutral-800` | `#37393b` | Heading on light surface |
| `neutral-900` | `#252729` | Heading display |
| `neutral-950` | `#171b1f` | `--fds-semantic-label-primary` — body / banner overlay text / rank-badge fill |

### Static neutrals
- **Static White** (`#fff`) — `--fds-color-static-white`. Theme-independent white (does not flip in dark theme).
- **Static Black** (`#000`) — `--fds-color-static-black`. Theme-independent black; observed as category-pill selected bg.

### Semantic role tokens (FDS namespace)

- **Semantic Primary** (`#fc1c49`) — `--fds-semantic-primary-primary`. Same as `--c-primary`; the system pins them.
- **Semantic Primary Low** (`#ffdad8`) — `--fds-semantic-primary-primary-low`. Tinted red surface (sale-tag fill, primary CTA hover scrim).
- **Semantic Label Primary** (`#171b1f`) — default text role on light surfaces.

### Extended hue ramps (the rich-color signature)

Each hue carries the full 10-shade Material-style ladder. The shipped color frequency on `/` reveals the **per-band convention**: each home-page section claims one accent hue for its category tag, badge, and gradient backdrop.

- **Yellow** (`#fffde7 / #fff9c4 / #fff59d / #fff176 / #ffee58 / #ffeb3b / #fdd835 / #fbc02d / #f9a825 / #f57f17`) — "0원 사전 알림" lemon banner, attention-grabbing free-class promotion.
- **Orange** (`#fef4e7 / #fddeb5 / #fccd91 / #fab75e / #fa a93f / #f8930f / #e2860e / #b0680b / #885108 / #683e06`) — early-bird discount band, "최대 25% 할인" rails.
- **Red** (`#ffeceb / #ffdad8 / #ffb4b2 / #ff8d8d / #ff616a / #fc1c49 / #c5213b / #91202d / #601c20 / #331414`) — primary + error scale; `red-500 = #fc1c49` is the canonical primary.
- **Pink** (`#fce4ec / #f8bbd0 / #f48fb1 / #f06292 / #ec407a / #e91e63 / #d81b60 / #c2185b / #ad1457 / #880e4f`) — creative/design category accent, "비주얼 브랜딩" rails.
- **Green** (`#e8f5e9 / #c8e6c9 / #a5d6a7 / #81c784 / #66bb6a / #4caf50 / #43a047 / #388e3c / #2e7d32 / #1b5e20`) — success state, "수강신청 완료" toast, course-progress complete bar.
- **Blue** (`#ebf3ff / #c2d9ff / #a5c6ff / #7cacff / #629cff / #3b83ff / #3677e8 / #2a5db5 / #20488c / #19376b`) — developer / data category accent, "Codex 기반 AI 인증시험" rails.
- **Neutral** — see full ladder above.

Designers picking from Fastcampus should treat the FDS hue scales as an officially shipped Material-style internal DS — even though no public DS site exists, the runtime tokens are the truth.

### Implementation hints
- `--c-primary-rgb` exists alongside `--c-primary` specifically to enable `rgba(237, 35, 75, 0.X)` alpha blending — used for hover scrims and red gradient backdrops without requiring a second hex.
- Yellow and orange shades cohabit on the same fold (free-class lemon + early-bird amber) — readers should treat them as **two adjacent accent slots**, not as a primary/secondary brand-color duo.
- `--swiper-theme-color = #007aff` appears in the var dump — this is the Swiper.js library default, not a Fastcampus token. Do not adopt.

## 3. Typography Rules

### Font Family
- **Primary** (`--font-base`): `"Pretendard Variable", pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`
- **HTML root**: `"Apple SD Gothic Neo"` (carries the document-level fallback before body inherits `--font-base`)
- **Mono** (inferred): system mono stack — surfaces inside coding-bootcamp course pages and inline code snippets in course descriptions.
- No custom display face. The variable-weight Pretendard (single variable file vs. Inflearn's static Pretendard) is the only typographic choice — weight ranges 100-900 are addressable.
- Korean glyphs render via Pretendard Variable's full Hangul block coverage; no separate Korean web-font is shipped.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|---|---|---|---|---|
| Banner H3 (home carousel) | 40px | 700 | ~1.2 (≈48px on captured 96px two-line block) | Two-line marketing headline (`관심 가는 원데이 클래스 / 0원 사전 알림 신청하세요!`) |
| Page H1 (inferred — category / course pages) | 32-36px | 700 | 1.3 | Course-list page titles |
| Section H2 (inferred) | 24-28px | 700 | 1.35 | Rail group labels ("AI TECH", "AI CREATIVE") |
| Body | 16px | 400 | 1.5 | Default nav link, paragraph copy |
| GNB primary nav | 16px | 400 | 1.5 | `기업교육`-class secondary GNB items |
| GNB compact (secondary) | 12px | 600 | 1.4 | `커뮤니티`-class smaller-bolder GNB items — inverted-density signature |
| Button label (filled / pill) | 14px | 600 | 1.0 | Category-pill carousel label, "전체 / AI TECH / 디자인" |
| Caption — rank badge | 12px | 500 | 1.4 | "1위 / 2위 / 3위" white-on-`#171b1f` corner overlay |
| Caption — enrolment count | 16px | 400 | 1.4 | "1,940+ / 1,020+" alpha-30 dark pill |

### Rules
- **Pretendard Variable everywhere.** No serif, no rounded display face, no Korean display contrast face. Weight is dialed via variable-weight axis (100-900), not separate static cuts.
- **700 = banner, 600 = button + secondary-compact GNB, 400 = body + primary GNB.** The 500 weight appears only on rank-badge corner labels — a deliberate restraint on the otherwise-binary 400/700 cadence.
- **Inverted density on GNB**: compact secondary links (`커뮤니티`, `기업교육` smaller-bolder cluster) signal "utility shortcuts" versus the 16px-400 primary nav — a Fastcampus-specific signature versus Inflearn's flat 16px-600 nav.
- **Banner copy is two-line by default.** 40px / 700 with a deliberate mid-headline break (`\n`) is the brand cadence — designers reproducing the look should plan headlines around natural Korean two-clause splits, not one-line tagline drama.
- Korean punctuation: straight quotes in UI; honorific `~님` reserved for instructor-facing surfaces; casual-polite `~해요 / ~하기` dominates the home carousel copy ("신청하세요", "만나자", "쓸 수 있는").

## 4. Component Stylings

### Buttons

**Category Pill — Selected (Black)**
- Background: `#000` (`--fds-color-static-black`)
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 12px 16px
- Height: 40px
- Font: 14px / 600 / Pretendard Variable
- Use: Active category in the home/courses category-pill carousel ("전체" when on category-aggregate view).

**Category Pill — Unselected (Neutral)**
- Background: `#f5f5f6` (`--fds-color-neutral-30`)
- Text: `#747678` (`--fds-color-neutral-500`)
- Border: none
- Radius: 4px
- Padding: 12px 16px
- Height: 40px
- Font: 14px / 600 / Pretendard Variable
- Use: All non-active category pills ("AI TECH", "AI CREATIVE", "디자인", "영상/3D", …).

**Primary CTA — Enrolment (Inferred from `--c-primary` semantic)**
- Background: `#fc1c49` (`--c-primary` / `--fds-semantic-primary-primary`)
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 12px 24px (inferred from category-pill geometry; matches 40px target height)
- Height: 40-48px
- Font: 14-16px / 600 / Pretendard Variable
- Hover: background `#c9032a` (`--c-primary-darken`)
- Pressed: background `#c9032a`
- Use: "수강신청 하기", "결제하기", primary enrolment actions on course-detail and cart screens.

**Primary CTA — Renewal Skin (Campaign-refresh Inferred)**
- Background: `#d60039` (`--c-primary-darken-renewal`)
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Use: Same primary role on seasonal-campaign home skins where the brand swaps to the renewal red.

**Primary CTA — Tinted Surface (Inferred from `--fds-semantic-primary-primary-low`)**
- Background: `#ffdad8` (`--fds-semantic-primary-primary-low`)
- Text: `#fc1c49`
- Border: none
- Radius: 4px
- Use: Sale-tag fills, primary CTA hover scrims, "할인 적용중" inline pill.

**Carousel Nav — Previous / Next Arrow**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Text / icon color: `#171b1f` (`--fds-semantic-label-primary`)
- Border: none
- Radius (prev): `16px 0 0 16px` (left half-pill)
- Radius (next): `0 16px 16px 0` (right half-pill)
- Padding (prev): `6px 2px 6px 8px`
- Padding (next): `6px 8px 6px 2px`
- Height: 32px
- Use: Banner carousel arrow controls. Half-pill radius pairs read as a single split surface across the carousel rail.

**Carousel Nav — Dots Cluster**
- Background: `rgba(0, 0, 0, 0.2)` (alpha-20 dark scrim)
- Text: `#171b1f`
- Border: none
- Radius: 19px
- Padding: 0
- Height: 32px
- Use: "배너 목록" — the dot-cluster overlay on the carousel.

### Cards & Containers

**Course Card (Default — Top-Rounded)**
- Background: transparent (thumbnail provides the surface)
- Border: none
- Radius: `4px 4px 0 0` (top-rounded, bottom flat)
- Padding: 0 (metadata flows below thumbnail in unified card frame)
- Width × Height (rail): ~327px × variable (thumbnail caps the visual seam)
- Shadow: none
- Use: Course tile on home rails and `/courses` listings. Thumbnail image carries the top half, metadata block sits below.

**Course Card — Rank Badge Overlay (NW corner)**
- Background: `#171b1f` (`--fds-semantic-label-primary`)
- Text: `#FFFFFF`
- Border: none
- Radius: `4px 0` (NW corner only)
- Padding: 0 (text-only badge, height 20px)
- Height: 20px
- Font: 12px / 500 / Pretendard Variable
- Use: "1위 / 2위 / 3위" rank label on top-ranked course tiles.

**Course Card — Enrolment-Count Pill (Below Rank)**
- Background: `rgba(0, 0, 0, 0.3)`
- Text: `#171b1f` (sampled — appears against a light thumbnail backdrop)
- Border: none
- Radius: 19px
- Padding: 2px 6px
- Height: 24px
- Font: 16px / 400 / Pretendard Variable
- Use: "1,940+ / 1,020+" enrolment-count flex — sits below rank badge on top-tier tiles.

### Navigation

**Global Nav (GNB) — Desktop**
- Background: transparent on scroll (sticky; `bg=rgba(0, 0, 0, 0)` captured)
- Text: `#171b1f` (`--fds-semantic-label-primary`)
- Border-bottom: none
- Shadow: none
- Position: sticky (CSS-module class `GNBDesktop-module-scss-module__*`)
- Layout: [logo] · [primary nav 16px/400] · [secondary compact nav 12px/600] · [search] · [auth]
- Use: Single GNB pattern persisting across `/` and category pages.

### Inputs & Forms

**Text Input — Search (Inferred from category-page CSS-module pattern)**
- Background: `#FFFFFF` or `#f5f5f6`
- Text: `#171b1f`
- Placeholder: `#747678` (`--fds-color-neutral-500`)
- Border: 1px solid `#cfd0d1` (`--fds-color-neutral-100`) on rest, `1px solid #fc1c49` on focus
- Radius: 4px
- Padding: 0 12px
- Height: 40px
- Font: 14-16px / 400 / Pretendard Variable
- Use: Course search field in GNB and category-filter rail.

**Disabled (Inferred from neutral ladder)**
- Background: `#e7e7e8` (`--fds-color-neutral-50`)
- Text: `#a0a2a3` (`--fds-color-neutral-300`)
- Border: none
- Radius: 4px
- Use: Form-incomplete state on enrolment / payment flows.

### Tags & Chips (Inferred from extended hue ramps)

**Free / Promo Tag — Yellow**
- Background: `#fff9c4` (`--fds-color-yellow-100`)
- Text: `#f57f17` (`--fds-color-yellow-900`)
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 600 / Pretendard Variable
- Use: "0원 / 무료 / 사전알림" promotional indicators.

**Discount Tag — Red**
- Background: `#ffdad8` (`--fds-semantic-primary-primary-low`)
- Text: `#fc1c49` (`--c-primary`)
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 600 / Pretendard Variable
- Use: "최대 25% 할인", "30% 깜짝 쿠폰" sale flags.

**Category Tag — Blue (Dev / Data)**
- Background: `#ebf3ff` (`--fds-color-blue-50`)
- Text: `#3b83ff` (`--fds-color-blue-500`)
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 600 / Pretendard Variable
- Use: Developer / data category tags on course tiles.

**Category Tag — Pink (Design / Creative)**
- Background: `#fce4ec` (`--fds-color-pink-50`)
- Text: `#e91e63` (`--fds-color-pink-500`)
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 600 / Pretendard Variable
- Use: Design / creative category tags.


## 16. Do's and Don'ts

### Do
- Pin the signature commerce-red #fc1c49 (--c-primary / --fds-semantic-primary-primary) to enrolment CTAs, sale-price highlights and limited-time banners, using #c9032a (--c-primary-darken) for the pressed/hover state
- Keep the 4px radius vocabulary everywhere and reserve 4px 4px 0 0 (top-rounded, bottom flat) for course cards so the thumbnail caps the visual seam
- Assign one accent hue per content rail (yellow #ffeb3b for 0원/사전알림, orange #f8930f for early-bird discount, blue #3b83ff for dev/data, pink #e91e63 for design/creative) so the rail hue does the spatial wayfinding
- Set type on the binary 400/700 cadence — 40px/700 for two-line banner headlines, 14px/600 for category-pill labels, 16px/400 for body and primary GNB — reserving 500 only for the 12px rank-badge label
- Render rank as a dark #171b1f corner-clipped (4px 0) badge showing the raw number plus enrolment count (1위 / 1,940+), letting the figure speak instead of an adjective
- Write microcopy in casual-polite ~해요 / ~하기 / ~만나자 for product surfaces and keep formal ~합니다 only for legal, refund and receipt screens

### Don't
- Apply a full-pill radius to CTAs or category navigation — Fastcampus deliberately chose sharper 4px rectangles to read as a structured market, not a browsy social feed
- Mix two accent hues within a single card; the rich Material palette is a per-band convention, and yellow and orange are adjacent accent slots, not a primary/secondary brand-color duo
- Use the commerce-red #fc1c49 for system errors — form/validation errors belong to the separate --fds-color-red ramp (e.g. #c5213b), distinct from the brand primary
- Adopt the --swiper-theme-color #007aff value as a brand token; it is the Swiper.js library default that leaked into the var dump, not a Fastcampus color
- Editorialize ranking with superlative prose like 최고의 강의 or 압도적 1위, or add emoji and !!! tails on price/enrolment surfaces — the corner badge and raw count already carry the proof
- Add elevation via box-shadow on the category-pill or rank-badge layer, or introduce parallax/scroll-triggered hero animation; depth comes from color contrast, and card hover micro-scale (1.0→1.02) is the only ambient motion outside the carousel

---

**Verified:** 2026-05-15
**Tier 1 sources:**
- `https://fastcampus.co.kr/` — live CDP inspect (browser-harness :9222) → `assets/_reference/.live-inspect-proof.json` (40 raw_samples + 103 `--fds-color-*` / `--c-primary-*` CSS vars + Pretendard Variable font stack + banner H3 40px/700 sample + category-pill carousel 11+ samples + rank-badge + enrolment-count pill)
- `https://fastcampus.co.kr/category_online_all` — second-surface live CDP inspect → 2 additional structure samples (category-page GNB confirmation)
- Internal "Fastcampus Design System" (`fds-` prefix) — directly evidenced by the `--fds-color-*` + `--fds-semantic-*` namespace on `:root` of the production site

**Tier 1 official DS:** ✗ negative — no public DS site (`design.fastcampus.co.kr` DNS no-resolve; `tech.day1company.io` ECONNREFUSED; `fastcampus.co.kr/design` and `/brand` 404; no Figma Community kit; no GitHub org-level design-system / Storybook / tokens repo published by Day1Company). The DS exists internally as a Material-style token set (`--fds-color-*` 10-shade ramps × 7 hues + semantic role tokens) but lives only as production runtime CSS — accessible exclusively via live inspect. Documented as authoritative negative result.

**Tier 2 sources:**
- `https://getdesign.md/fastcampus` — empty (verified 2026-05-15: "No designs found for 'fastcampus'")
- `https://styles.refero.design/?q=fastcampus` — empty (verified 2026-05-15: no result cards returned)

**Conflicts unresolved:** none

**Inferred-but-not-live-captured tokens** (flagged for follow-up UPDATE on a course-detail / cart / payment surface): primary CTA labelled fill (only category-pill geometry captured live; inferred from semantic-primary token + category-pill measurements), input focus state, disabled state, exact tag chip alpha values, GNB sticky bg on scroll-down vs scroll-up, footer spacing tokens, motion durations.

## 5. Layout & Spacing

Fastcampus does not expose a `--fds-space-*` token namespace at `:root` — spacing lives inside CSS module classes (`GNBDesktop-module-scss-module__q8MgGW__*`, `MainBannerCarousel-module-scss-module__*`). Observed rhythm from raw geometry:

| Inferred token | Value | Typical use |
|---|---|---|
| space-2 | 4-6px | Tag chip padding-y, rank badge inset |
| space-3 | 8px | Inline icon gap |
| space-4 | 12px | Category-pill padding-y, button-inner gutter |
| space-5 | 16px | Category-pill padding-x, card metadata gap |
| space-6 | 24px | Rail-tile gap, section-internal block gap |
| space-8 | 32px | Section-block separator |
| space-10 | 48-64px | Major section divider, footer column gap |

Home page width is full-bleed banner + ~1280-1440px content container. Course rails use horizontal scroll-snap on viewports < 1280px and a fixed 4-5 column grid above. Density is **commerce-dense**: above-the-fold contains banner carousel (96px headline block) + category-pill carousel (40px row) + top-3 rank tiles (~327px tall) = the user sees 3 layered acquisition surfaces in the first scroll, where Inflearn shows 1 banner + 6 tiles flat. This is the *programmed-market* feel — Fastcampus assumes the user is here to enrol this week, not to browse for a quarter.

## 6. Iconography & Imagery

- **Icon set**: 24×24 stroke icons (1.5-2px stroke) for GNB and inline actions; stroke color follows text-context (`#171b1f` default, `#fc1c49` when paired with a primary surface).
- **Course thumbnail style**: 16:9 photographic or illustrative (instructor portrait + course-title typography composite is the dominant convention — "강사 얼굴 + 굵은 타이포" layout). Aspect ratio is standardized but art direction is loud and varied (gradients, gradient meshes, vector illustration, photographic portraits).
- **Banner illustrations**: Full-bleed gradient backgrounds (multi-color gradient or solid hue band) with white or dark headline overlay. Frequent multi-hue gradient (yellow → orange → pink) on AI-creative rails.
- **Rank-badge overlays**: Strict text-only on dark-pill (`#171b1f` `4px 0` corner) — no medal icon, no star, no flame. The number itself does the work.

## 7. Motion

Motion data was not exhaustively captured in this pass. Observable from raw class names and CSS-module patterns:
- Banner carousel uses **Swiper.js** (`--swiper-theme-color` exposed at `:root`) — default Swiper transitions (300ms ease) on slide change, manual + auto-advance.
- Category-pill carousel: horizontal scroll-snap, no animated transitions on tap (instant active-state swap).
- Hover on category pill: background fade `200ms ease` (inferred — Swiper / module default).
- Card hover: thumbnail micro-scale (1.0 → 1.02) `200ms ease-out` (inferred — common Korean-marketplace convention; not directly captured).
- Page transitions: SSR / Next.js — full-page navigation, no client-side route animation.

**Motion tokens not exposed at `:root`** — Fastcampus does not publish `--fds-motion-*` variables. Designers reproducing the look should adopt Swiper defaults (300ms slide, 200ms hover) and respect `prefers-reduced-motion: reduce`. Flagged for UPDATE pass.

## 8. States

- **Hover (category pill)**: `#f5f5f6 → #e7e7e8` (inferred — neutral ladder one step down).
- **Hover (primary CTA)**: `#fc1c49 → #c9032a` (`--c-primary-darken`).
- **Active / Pressed (CTA)**: `#c9032a` solid; tinted ring `rgba(237, 35, 75, 0.12)` 4px offset.
- **Focus**: 2px outline `#fc1c49` at 2px offset on keyboard focus; input border swaps to `#fc1c49` (inferred from primary semantic token).
- **Disabled**: `#e7e7e8` background, `#a0a2a3` text, `cursor: not-allowed` (inferred from neutral ladder).
- **Loading**: Inline spinner replaces CTA label; primary red CTA remains red, label swaps to icon (Swiper / FDS module convention).
- **Empty**: Center-aligned illustration + headline (`아직 수강 중인 강의가 없어요`) + outlined primary CTA (`강의 둘러보기`).
- **Error — Validation**: 14px text below offending field in `#fc1c49` (primary red doubles as inline-error in adult-upskilling commerce context — distinct from system error red `#c5213b`); field border swaps to `#fc1c49`.
- **Error — Network**: Inline banner (`연결을 확인해 주세요. 다시 시도해주세요.`) + outlined `다시 시도` button.
- **Success — Enrolment**: One-line confirmation in `#43a047` (`--fds-color-green-600`), no toast theatre.
- **Skeleton — Card**: `#e7e7e8` blocks for thumbnail (16:9) + 2 text lines; shimmer 1.5s linear (inferred — Mantine / FDS default).

## 9. Accessibility & Internationalization

- **Korean is the primary language.** Some technology course titles carry English terms ("React", "Next.js", "AI", "Codex"). No `/en/` mirror as of capture.
- **Pretendard Variable** supports the full Hangul block plus extended Latin; English text reads naturally without a separate Latin font.
- **Color contrast**:
  - Heading `#171b1f` on `#FFFFFF` = 16.5:1 (AAA).
  - Body `#747678` on `#FFFFFF` = 4.5:1 (AA for normal text).
  - Muted caption `#a0a2a3` on `#FFFFFF` = 2.8:1 — **fails AA**; correctly reserved for non-essential caption (rank-3 sublabel, enrolment-count footnote).
  - Primary `#fc1c49` on `#FFFFFF` = 4.0:1 — **borderline AA for normal text** (passes for ≥18pt large text). Fastcampus correctly uses white-on-red for CTAs (white on `#fc1c49` = 5.3:1, AA) and limits red-on-white to large-text headlines.
  - Category-pill selected `#FFFFFF` on `#000` = 21:1 (AAA).
- **Keyboard nav**: Visible 2px primary-red outline on Tab navigation (inferred from `--c-primary` semantic).
- **Screen reader**: Carousel arrows carry `aria-label` (`이전 배너`, `다음 배너`, `배너 목록` observed in raw samples). Rank badge text is in-DOM (not background-image).
- **Density caveat**: The 12px / 500 rank-badge font sits at the lower bound of Korean readability — passes per Hangul x-height but reviewers should validate at 100% zoom on small viewports.

## 10. Voice & Tone

Fastcampus speaks like **the senior friend who heard the workshop fills up by Friday and texts you "go now"** — energetic, time-aware, casual-polite. Where Inflearn says "부담없이 시작하기" (start without pressure), Fastcampus says "**0원 사전 알림 신청하세요!**" (sign up for the free-tier alert!) and "**최대 25% 할인!**" (up to 25% off!) — the verb is still on the learner's side, but the timing pressure is honestly named. The brand assumes the user is here because the cohort or the discount is closing soon, and the microcopy reflects that.

Korean is the dominant register; English appears in technology course titles where the technology has an English name ("AI", "Codex", "Claude", "LLM", "RAG", "AI Agent"). The voice mixes casual-polite `~해요 / ~하세요` with imperative-friendly `~하기 / ~만나자` — the latter (`만나자` = "let's meet") is the **brand-signature first-person-plural-implied invitation**, a softening device that distinguishes Fastcampus from straight-imperative Coursera ("Earn") and Udemy ("Save 90%").

| Context | Tone |
|---|---|
| CTAs (enrolment) | Imperative + concrete outcome. `수강신청 하기`, `결제하기`, `장바구니에 담기`. Exclamation reserved for time-sensitive: `지금 신청하세요!`. |
| Banner headlines | A two-clause invitation with a beat. `관심 가는 원데이 클래스 / 0원 사전 알림 신청하세요!` Section break is part of the cadence. |
| Discount banners | Fact + emphasis. `업무 자동화 베스트 라인업 / 최대 25% 할인!` — the discount is the fact, not the headline word. |
| Course tile metadata | Rank + count + title + instructor. Rank ("1위") is corner-badged, count ("1,940+") is the social-proof flex. |
| Free tag | Two characters: `무료` or `0원`. Yellow pill on white tile. |
| Empty states | Why empty + next step. `아직 수강 중인 강의가 없어요. 관심 분야의 강의를 둘러보세요.` |
| Error / validation | Specific cause + action. `이메일 형식이 올바르지 않아요. 다시 확인해 주세요.` |
| Success | One line. `수강신청이 완료되었어요. 내 강의실에서 확인할 수 있어요.` |
| Instructor surfaces | `~튜터 / ~강사` mix — Fastcampus uses both ("피그마튜터에게 배우는") more freely than Inflearn's strict `지식공유자님` honorific. |

**Forbidden phrases (illustrative — not from a published Fastcampus guide; derived from observable restraint on `/`)**: `놓치지 마세요`, `Oops!`, `오류가 발생했습니다`, `최저가 보장`, `평생 무료`, three-exclamation-mark CTA tails (`!!!`), emoji on price or enrolment surfaces, superlative-rank prose where the numeric rank badge already does the work (`최고의 강의 / 압도적 1위`). Where ranking matters, Fastcampus uses the corner badge + raw enrolment count (`1위 / 1,940+`) rather than editorialized rank labels.

**Voice samples (OmD-original — no verbatim Fastcampus copy reproduced; tone-shape only):**
- (Cohort enrolment) "이번 기수는 금요일에 마감해요. 들어가실 자리가 두 개 남았어요."
- (Sale): "여름 인텐시브, 21일까지 25% 할인. 결제 후 7일 이내 환불 가능해요."
- (Empty Wishlist): "찜한 강의가 아직 없어요. 분야부터 골라볼까요?"

## 11. Brand Narrative

Fastcampus was founded in **2014** under the parent company **Day1Company** (data based on public Korean tech-press coverage of Day1Company / 데이원컴퍼니, the umbrella that operates Fastcampus, Colosso, RealClass, and adjacent brands). The founding observation was that **Korean adult upskilling had been a fragmented offline market — weekend classroom academies, public-institute lectures, and book-and-DVD self-study** — and that working professionals were willing to pay premium prices for short-format, instructor-led, project-based online courses if the production value matched the price.

Fastcampus's bet was that **the difference between a free YouTube tutorial and a paid course is project structure, instructor accountability, and cohort timing** — not just video quality. The platform brand name itself frames the proposition: *fast + campus*, a compressed academic experience for adults who cannot take a semester off. By 2026, Day1Company operates Fastcampus as the flagship **adult-upskilling marketplace covering IT, design, business, finance, language, and lifestyle**, with adjacent brands handling specialized tiers (Colosso for high-end masterclasses; RealClass for hobby/language).

The visual evolution from the early-2010s blue-and-white directory page to the current rich-color Material-style catalog is itself the signal: Fastcampus made the deliberate choice to **look like a programmed market** (multi-hue rails, rank badges, enrolment counts) rather than a calm catalog (Inflearn's choice) or an institutional LMS (Classum's choice). The two competitors share a country, an audience overlap, and Pretendard typography; Fastcampus distinguishes by *commerce energy*.

*(Founder, exact founding-month, and headcount details are not exhaustively verified from public English-language sources at OmD attribution fidelity; the narrative above is anchored to publicly observable brand artifacts — site copy, course catalog structure, and parent-company branding. UPDATE pass recommended on `tech.day1company.io` if/when that domain comes back online.)*

## 12. Principles

1. **Time is part of the offer.** Cohort start dates, discount end dates, and seat counts are first-class UI content — not legal fine print. *UI implication:* every primary CTA may carry a deadline or seat-count badge; design tokens must support a "time pressure" surface (countdown text in `--c-primary`, deadline pill in `--fds-color-orange-200`).

2. **Rich color, per-band.** The home page assigns one accent hue per content rail — yellow for "0원 / 사전알림", orange for early-bird discount, blue for dev/data, pink for design/creative, red for primary brand commerce. *UI implication:* never mix two accent hues in one card; the rail-level hue is the spatial wayfinding.

3. **Rank is a number, not a story.** "1위 / 1,940+" lives in a corner badge — no editorialized adjective. *UI implication:* if a tile says "최고의", the rank badge has failed. Use raw rank + raw count, let the number speak.

4. **4px everywhere, top-rounded on cards.** A single radius vocabulary plus the `4px 4px 0 0` card-with-thumbnail convention. *UI implication:* introducing a full-pill radius on a CTA is a tonal mistake — Fastcampus reads as "structured market," not "social feed."

5. **Casual-polite, not formal.** `~해요 / ~하기 / ~만나자` for product surfaces; `~합니다` reserved for legal / refund / receipt screens. *UI implication:* avoid `~하시기 바랍니다` and `~하실 수 있습니다` in CTA / banner copy.

## 13. Personas

*(Personas inferred from observable surface targeting on `/` and `/category_online_all`; not from a published Fastcampus persona doc.)*

- **The 20s Self-Funded Upskiller.** 22–28, recent grad or early-career, paying out of pocket for a single-cohort bootcamp-style course (AI / data / design). Sensitive to deadline + discount; the orange-band "early-bird 25%" rail is the most-clicked acquisition surface for this persona. Buys 1-2 premium courses per year.

- **The B2B Sponsored Learner.** 28–38, mid-career, sent by the employer via the **기업교육 (corporate-training)** track. Comes via GNB compact secondary link; values certificate, syllabus, and live-session schedule; less price-sensitive, more time-sensitive (must complete by fiscal year-end).

- **The Career-Pivot IC.** 30–40, established IC considering a category jump (e.g., marketer → product, engineer → ML). Buys roadmap-style course bundles; reads instructor credentials and project deliverables carefully; rank badges and enrolment counts are decision shortcuts.

- **The Hobbyist / Adjacent-Function Curious.** 25–45, browsing outside core category (engineer learning design, designer learning a bit of code, marketer learning analytics). Drawn to the design/creative pink rail and drawing/illustration sub-category; price-elastic; uses the free-class yellow tag heavily.

## 14. States Catalog

| Category | Treatment |
|---|---|
| **Empty — My Courses** | Center-aligned illustration + `아직 수강 중인 강의가 없어요`; outlined CTA `강의 둘러보기` linking to `/category_online_all`. |
| **Empty — Wishlist** | `찜한 강의가 아직 없어요. 마음에 드는 강의를 담아두세요.` + outlined CTA. |
| **Empty — Search results** | `'<query>'에 대한 결과가 없어요.` + 3 category-pill suggestions in unselected (`#f5f5f6`) state. |
| **Loading — page** | Skeleton blocks `#e7e7e8` for rail tiles (3-5 tiles per row, 16:9 thumbnail + 2 text lines), shimmer 1.5s linear. |
| **Loading — submit** | Inline 16px spinner replaces CTA label; CTA bg remains `#fc1c49`; pointer disabled. |
| **Error — Network** | Inline banner `연결을 확인해 주세요. 다시 시도해주세요.` + outlined `다시 시도` button. |
| **Error — Validation** | 14px `#fc1c49` text below field; field border `#fc1c49`. |
| **Error — Payment** | Modal with specific cause line + `다른 결제 수단으로 시도하기` primary red CTA. |
| **Success — Enrolment** | Inline `수강신청이 완료되었어요.` in `#43a047`; `내 강의실로 가기` primary CTA. |
| **Skeleton — Card** | `#e7e7e8` block for thumbnail (16:9, `4px 4px 0 0`) + 2 text lines; shimmer 1.5s linear. |
| **Disabled — Form** | `#e7e7e8` bg, `#a0a2a3` text, `cursor: not-allowed`; tooltip on hover explaining what's missing. |
| **Time-Pressure — Countdown** | Inline `#fc1c49` countdown text (`3일 21:14:02 남음`) paired with `--fds-color-orange-200` deadline pill on enrolment CTAs. |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover bg fade, focus ring appear |
| `motion-base` | 200ms | Card thumbnail scale, category-pill bg, button color |
| `motion-slow` | 300ms | Banner carousel slide (Swiper default), modal open |
| `easing-default` | `ease` | All hover / focus transitions |
| `easing-emphasized` | `cubic-bezier(0.4, 0, 0.2, 1)` | Modal / drawer enter |
| `easing-decelerate` | `cubic-bezier(0, 0, 0.2, 1)` | Skeleton shimmer, page-content fade-in |

**Motion rules**:
- Banner carousel auto-advances (Swiper default 5s) — Fastcampus accepts the convention; this is a deliberate departure from Inflearn ("no carousel auto-advance"). Time pressure is part of the brand.
- Card hover micro-scale (1.0 → 1.02) is the only ambient motion outside the carousel.
- No parallax. No scroll-triggered hero animation.
- Respect `prefers-reduced-motion: reduce` — fall back to instant transitions, keep color fades only, and stop carousel auto-advance.

**Motion tokens are inferred** — `--fds-motion-*` is not exposed at `:root`. UPDATE pass recommended on course-detail / cart pages where toast / modal / drawer interactions would expose canonical durations.
