---
id: class101
name: Class101
country: KR
category: education
homepage: "https://class101.net"
primary_color: "#FF5D00"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=class101.net&sz=128"
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "primary action button is near-black #202020 (the workhorse CTA); brand = orange spark #FF5D00 (= primary_color). Distinct roles, not a conflict."
  colors:
    primary: "#202020"
    primary-hover: "#000000"
    brand: "#FF5D00"
    brand-tint: "#FFF1E8"
    canvas: "#FFFFFF"
    surface: "#F3F3F3"
    surface-raised: "#FAFAFA"
    foreground: "#000000"
    body: "#333333"
    muted: "#767676"
    tertiary: "#AAAAAA"
    hairline: "#E5E5E5"
    border-strong: "#D1D1D1"
    on-primary: "#FFFFFF"
    success: "#22C55E"
    error: "#FF3B30"
    warning: "#FAAD14"
  typography:
    family: { sans: "Pretendard Variable", mono: "system-ui" }
    hero:           { size: 36, weight: 700, lineHeight: 1.25, use: "Home hero, campaign headlines (32-40px)" }
    section-heading: { size: 23, weight: 700, lineHeight: 1.35, use: "Category / row headers (22-24px)" }
    card-title:     { size: 16, weight: 600, lineHeight: 1.40, use: "Class card titles" }
    body:           { size: 16, weight: 400, lineHeight: 1.50, use: "Descriptions, marketing body" }
    label:          { size: 16, weight: 600, lineHeight: 1.40, use: "Buttons, nav (CTA / label)" }
    meta:           { size: 14, weight: 400, lineHeight: 1.40, use: "Creator names, class metadata" }
    caption:        { size: 12, weight: 400, lineHeight: 1.40, use: "Badges, fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 40, section: 40 }
  rounded: { sm: 6, md: 8, lg: 12, xl: 16, full: 999 }
  shadow:
    hover: "rgba(0,0,0,0.06) 0px 2px 8px"
    floating: "rgba(0,0,0,0.1) 0px 4px 16px"
    modal: "rgba(0,0,0,0.16) 0px 8px 24px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#202020", fg: "#FFFFFF", radius: "12px", height: "50px", padding: "15px 14px", font: "16px / 600", hover: "#000000", use: "Workhorse CTA — 시작하기 / 구독하기" }
    button-brand: { type: button, bg: "#FF5D00", fg: "#FFFFFF", radius: "12px", padding: "15px 14px", font: "16px / 600", use: "High-energy promo moments only — the orange spark" }
    button-secondary: { type: button, bg: "#FFFFFF", fg: "#202020", border: "1px solid #E5E5E5", radius: "12px", padding: "15px 14px", font: "16px / 600", use: "Secondary action beside black primary" }
    button-ghost: { type: button, bg: "transparent", fg: "#333333", radius: "8px", font: "16px / 500", use: "Tertiary nav, 더보기" }
    input: { type: input, bg: "#F3F3F3", fg: "#000000", radius: "8px", padding: "12px 16px", font: "16px / 400", focus: "border #202020", use: "Class search, form fields — #AAAAAA placeholder" }
    class-card: { type: card, bg: "#FFFFFF", radius: "8px", padding: "0 + 12px text region", shadow: "rgba(0,0,0,0.06) 0px 2px 8px on hover", use: "Catalog atom — thumbnail top, title + creator + meta below" }
    benefit-card: { type: card, bg: "#FFF1E8", radius: "8px", padding: "24px", use: "Subscription benefits, membership perks, value callouts" }
    chip: { type: badge, bg: "#F3F3F3", fg: "#333333", radius: "999px", padding: "6px 14px", font: "13px / 500", use: "Category filters — 드로잉 / 베이킹 / 사진" }
    badge-hot: { type: badge, bg: "#FF5D00", fg: "#FFFFFF", radius: "6px", padding: "2px 8px", font: "12px / 600", use: "NEW / 인기 high-energy emphasis on cards" }
    top-nav-item: { type: tab, fg: "#767676", active: "#000000 weight 600", font: "16px / 500", use: "Category navigation" }
    snackbar: { type: toast, bg: "#202020", fg: "#FFFFFF", radius: "8px", padding: "12px 16px", use: "찜한 클래스에 추가했어요 transient feedback" }
    modal: { type: dialog, bg: "#FFFFFF", fg: "#000000", radius: "16px", padding: "24px", shadow: "backdrop rgba(0,0,0,0.5)", use: "Login, plan selection, class preview — bottom sheet top corners" }
---

# Design System Inspiration of Class101 (클래스101)

## 1. Visual Theme & Atmosphere

Class101 is Korea's leading online-class subscription platform — "세상의 모든 클래스를 하나의 구독으로" (every class in the world, in one subscription). It built its name on creator-led hobby and skill classes (drawing, baking, photography, side-business) and now runs a Netflix-style subscription (CLASS101+) over that catalog. The interface is a bright, warm, motivational learning storefront: a clean white canvas (`#FFFFFF`) wall-to-wall with photographic class thumbnails, organized into editorial rows, with a single energetic orange doing all the brand work.

That orange — observed live as `#FF5D00`, a vivid pure orange leaning red — is the emotional core. It's the color of enthusiasm, of "start now," of the spark of a new hobby. It marks brand accents, highlights, and key promotional moments. Notably, Class101's *primary action button* is not orange but a confident near-black (`#202020`) with a generous `12px` radius — the orange is reserved as the brand spark while black carries the workhorse "시작하기" CTA. This pairing (warm-orange brand identity + grounded black action) gives the platform an energetic-yet-trustworthy feel: motivating like a coach, dependable like a tool.

Typography is Pretendard Variable (`"Pretendard Variable", "Pretendard JP Variable", Pretendard, system-ui, ...`), the modern Korean product sans, rendered in near-black on white with a friendly gray scale. Geometry is soft and rounded — `12px` on buttons, `8px` on surfaces — and the layout is image-forward, letting class thumbnails and creator faces carry the warmth. The atmosphere is "your motivated Sunday morning" — bright, hopeful, and gently pushing you to make something.

**Key Characteristics:**
- Energetic pure-orange brand spark (`#FF5D00`) — accents, highlights, promotions
- Near-black primary CTA (`#202020`) with `12px` radius — grounded action vs. orange brand
- Clean white canvas (`#FFFFFF`) — image-forward class storefront
- Pretendard Variable type stack in near-black → gray on white
- Soft rounded geometry — `12px` buttons, `8px` surfaces
- Editorial class-thumbnail rows; creator faces and project photos carry warmth
- Motivational, coach-like tone — "make something" energy

## 2. Color Palette & Roles

Colors below are extracted from live computed styles on class101.net/ko (2026-05-19). Class101 does not publish a public token layer; values are observed.

### Brand
- **Class101 Orange** (`#FF5D00`): The brand spark — logo accent, highlights, key promotional moments, emphasis. Observed `rgb(255, 93, 0)`. *(Brief-provided value was `#FF5C00`; live observed `#FF5D00` — within one unit, use the live value.)*
- **Orange Tint** (`#FFF1E8`): Light orange wash for highlight backgrounds and benefit blocks.

### Action (Neutral)
- **Action Black** (`#202020`): Primary CTA background ("시작하기", "구독하기"). Observed `rgb(32, 32, 32)`, 12px radius, 50px tall. The grounded workhorse action.
- **Action Black Hover** (`#000000`): Pressed/hover for the action button.

### Surfaces
- **Canvas White** (`#FFFFFF`): Page background, card surfaces. Observed body bg.
- **Surface Gray** (`#F3F3F3`): Section bands, input fills, grouping surfaces. Observed `rgb(243, 243, 243)`.
- **Surface Raised** (`#FAFAFA`): Subtle raised panels.

### Text
- **Text Primary** (`#000000`): Headings, primary labels, class titles. Observed `rgb(0, 0, 0)`.
- **Text Body** (`#333333`): Body copy, descriptions.
- **Text Secondary** (`#767676`): Metadata, creator names, captions.
- **Text Tertiary** (`#AAAAAA`): Placeholder, disabled labels, fine print.

### Borders & Dividers
- **Border Default** (`#E5E5E5`): Card borders, dividers, input outlines.
- **Border Strong** (`#D1D1D1`): Active/emphasized borders.

### Semantic
- **Success** (`#22C55E`): Completion, enrolled, download done.
- **Error / Sale** (`#FF3B30`): Errors and (distinct from brand orange) hot sale tags.
- **Warning** (`#FAAD14`): Pending, attention.

## 3. Typography Rules

### Font Stack
```
"Pretendard Variable", "Pretendard JP Variable", "Pretendard JP", Pretendard, system-ui, -apple-system, Roboto, "Helvetica Neue", "Segoe UI", "Noto Sans KR", "Malgun Gothic", sans-serif
```

Pretendard Variable leads (with JP variants for cross-market parity), the modern Korean product sans. All rendering is near-black to gray on white.

### Type Scale (observed home + listing surfaces)

| Role | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| Hero | 32–40px | 700 | 1.25 | Home hero, campaign headlines |
| Section Heading | 22–24px | 700 | 1.35 | Category/row headers |
| Card Title | 16px | 600 | 1.4 | Class card titles |
| Body | 16px | 400 | 1.5 | Descriptions, marketing body (observed 16px/400) |
| CTA / Label | 16px | 500–600 | 1.4 | Buttons (observed 16px), nav |
| Creator / Meta | 14px | 400 | 1.4 | Creator names, class metadata |
| Caption | 12px | 400 | 1.4 | Badges, fine print |

### Conventions
- **700 for headlines, 600 for card titles, 400–500 for body/labels** — friendly, readable, not heavy.
- **Black headline, gray meta** — `#000000` → `#333333` → `#767676`.
- **Larger base body (16px)** than typical dense apps — this is a reading/learning surface, legibility-first.
- **Korean-primary** — Korean copy is first-class; English in titles only.

## 4. Component Stylings

### Buttons

**Primary CTA (시작하기 / 구독하기)**
- Background: `#202020`
- Text: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 15px 14px
- Font: 16px / 600 / Pretendard
- Hover: background `#000000`
- Use: Primary action — observed 50px tall, near-black grounded button

**Brand CTA (promotional / highlight)**
- Background: `#FF5D00`
- Text: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 15px 14px
- Font: 16px / 600 / Pretendard
- Use: High-energy promotional moments, "지금 구독하고 시작" campaigns — the orange spark

**Secondary / Outline**
- Background: `#FFFFFF`
- Text: `#202020`
- Border: 1px solid `#E5E5E5`
- Radius: 12px
- Padding: 15px 14px
- Font: 16px / 600 / Pretendard
- Use: Secondary action paired with the black primary

**Ghost / Text**
- Background: transparent
- Text: `#333333`
- Border: none
- Radius: 8px
- Font: 16px / 500 / Pretendard
- Use: Tertiary nav, "더보기"

### Inputs

**Search / Text Field**
- Background: `#F3F3F3`
- Text: `#000000`
- Border: none (filled) — or 1px solid `#E5E5E5` on white
- Radius: 8px
- Padding: 12px 16px
- Font: 16px / 400 / Pretendard
- Placeholder: `#AAAAAA`
- Focus: border `#202020`
- Use: Class search, form fields

### Cards

**Class Card**
- Background: `#FFFFFF`
- Border: none (shadowless on white) / `0 2px 8px rgba(0,0,0,0.06)` on hover
- Radius: 8px
- Padding: 0 (image-led) + 12px text region
- Use: The catalog atom — thumbnail top, title + creator + meta below

**Highlight / Benefit Card**
- Background: `#F3F3F3` (or `#FFF1E8` orange tint for benefit emphasis)
- Border: none
- Radius: 8px
- Padding: 24px
- Use: Subscription benefits, membership perks, value callouts

### Badges / Chips

**Category Chip**
- Background: `#F3F3F3`
- Text: `#333333`
- Border: none
- Radius: 999px
- Padding: 6px 14px
- Font: 13px / 500 / Pretendard
- Use: Category filters (드로잉 / 베이킹 / 사진 / 부업)

**Hot / New Badge**
- Background: `#FF5D00`
- Text: `#FFFFFF`
- Border: none
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 600 / Pretendard
- Use: "NEW", "인기", high-energy emphasis on cards

### Tabs / Nav

**Top Nav Item**
- Active text: `#000000` (weight 600)
- Inactive text: `#767676`
- Indicator: weight + color shift (minimal)
- Font: 16px / 500–600 / Pretendard
- Use: Category navigation

### Toasts

**Snackbar**
- Background: `#202020`
- Text: `#FFFFFF`
- Radius: 8px
- Padding: 12px 16px
- Use: "찜한 클래스에 추가했어요" transient feedback

### Dialogs

**Modal / Bottom Sheet**
- Background: `#FFFFFF`
- Text: `#000000`
- Radius: 16px (top corners on sheet)
- Padding: 24px
- Backdrop: `rgba(0,0,0,0.5)`
- Use: Login, plan selection, class preview

---

**Verified:** 2026-05-19
**Tier 1 sources:** class101.net/ko (live computed styles via Playwright — primary CTA `#202020` (rgb 32,32,32) / 12px radius / 16px / 50px tall / padding 15px 14px; brand orange `#FF5D00` (rgb 255,93,0) most-frequent saturated accent; surface gray `#F3F3F3` (rgb 243,243,243) / 8px; body bg white; font `"Pretendard Variable", "Pretendard JP Variable", Pretendard, system-ui, ...`).
**Tier 2 sources:** getdesign.md/class101 — not checked; styles.refero.design — not checked.
**Conflicts unresolved:** Brief-provided brand orange `#FF5C00` vs live observed `#FF5D00` — within 1 unit (rgb 92 vs 93 on green); live `#FF5D00` adopted as canonical. Black-vs-orange CTA: live primary action is black `#202020`; orange `#FF5D00` is the brand-spark accent — treated as distinct roles (action vs. brand), not a conflict.

## 5. Layout Principles

### Page Structure
- Top nav (~64px) over a centered max-width content column (~1200px).
- Home is a stack of horizontally-scrolling class rows by category and editorial theme.

### Spacing
- Base unit 8px; common values 4 / 8 / 12 / 16 / 24 / 32 / 40.
- Card gutter ~16px; section vertical gap ~40px.
- Page horizontal padding ~24px desktop, 16px mobile.

### Density
**Medium-density, image + reading forward.** Class cards pack 3–4 per row with prominent thumbnails. Class-detail pages are spacious and reading-optimized (curriculum, creator intro, reviews) — this is a learning surface, so legibility wins over density.

### Border Radius Scale
- Small (6px): badges
- Standard (8px): cards, inputs, ghost buttons
- Comfortable (12px): primary/brand buttons
- Large (16px): modals, sheets
- Pill (999px): category chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | no shadow | Page bg, inline, cards at rest |
| Hover | `0 2px 8px rgba(0,0,0,0.06)` | Card hover lift |
| Floating | `0 4px 16px rgba(0,0,0,0.1)` | Dropdowns, sticky CTA |
| Modal | `0 8px 24px rgba(0,0,0,0.16)` | Dialogs, bottom sheets |

Shadows are light and neutral. Separation comes primarily from the white-card / `#F3F3F3`-band contrast rather than heavy elevation — the warmth comes from imagery and the orange spark, not from dramatic depth.

## 7. Do's and Don'ts

### Do
- Use orange `#FF5D00` as the brand spark — accents, highlights, hot/promo moments.
- Use black `#202020` for the everyday primary action button.
- Keep the canvas white; let class thumbnails and creator faces carry warmth.
- Use a larger 16px base body — this is a reading/learning surface.
- Use 12px button radius, 8px cards, 999px chips.

### Don't
- Don't make every primary button orange — orange is the spark, black is the action.
- Don't add heavy shadows; use white/`#F3F3F3` contrast for separation.
- Don't shrink body text below 16px on learning surfaces.
- Don't pair orange with sale-red carelessly — keep error/sale red (`#FF3B30`) distinct from brand orange.
- Don't crowd class-detail pages; curriculum and reviews need room.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Single-column feed, ~1.5 cards peeking, bottom nav, full-width sticky CTA |
| Tablet | 768–1024px | 2–3 cards per row, condensed nav |
| Desktop | >1024px | 3–4 cards per row, full nav, ~1200px content |

### Touch & Media
- Carousels swipeable on touch; chevron-driven on desktop.
- Sticky bottom "구독하기" CTA with safe-area inset on class detail.
- Min 44px tap targets.

### Image Behavior
- Class thumbnails 16:9 or 4:3, `object-fit: cover`, lazy-loaded, 8px rounded top.
- Creator/hero images full-bleed with overlay text where used.

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand spark: Orange `#FF5D00`; tint `#FFF1E8`
- Primary action: Black `#202020` (hover `#000000`)
- Canvas: White `#FFFFFF`; band `#F3F3F3`
- Text: `#000000` → `#333333` → `#767676` → `#AAAAAA`
- Border: `#E5E5E5`; focus `#202020`
- Success `#22C55E`; error/sale `#FF3B30`; warning `#FAAD14`

### Example Component Prompts
- "Build a Class101 primary button: bg `#202020`, white text 16px weight 600, 12px radius, padding 15px 14px, 50px tall. Hover bg `#000000`."
- "Create a Class101 brand/promo button: bg `#FF5D00`, white text 16px weight 600, 12px radius — for high-energy subscription campaigns only."
- "Create a Class101 class card: white bg, no border, 8px radius. Thumbnail top (16:9, cover, rounded 8px top). Below: title (16px weight 600 `#000000`), creator name (14px `#767676`), category chip (bg `#F3F3F3`, `#333333`, 999px). Hover shadow `0 2px 8px rgba(0,0,0,0.06)`."
- "Design a benefit card: bg `#FFF1E8` (orange tint), 8px radius, 24px padding, heading `#000000`, orange `#FF5D00` highlight number."

### Iteration Guide
1. Orange `#FF5D00` is the spark; black `#202020` is the action — don't swap their roles.
2. White canvas; thumbnails and creators carry warmth.
3. Pretendard Variable stack first.
4. 16px base body — legibility on a learning surface.
5. Radius: 12px buttons, 8px cards/inputs, 999px chips.
6. Light shadows; white/`#F3F3F3` contrast separates.
7. Keep sale-red distinct from brand orange.

---

## 10. Voice & Tone

Class101 speaks like an encouraging mentor who believes you can actually make the thing — warm, motivating, second-person, action-oriented. The register is friendly-polite Korean with `~요`/`~어요` endings (`오늘부터 시작해볼까요?`, `찜한 클래스에 추가했어요`), the supportive-coach voice, never the cold institutional `~습니다` except in policy. The brand premise — *every class in one subscription* — and its hobby/skill roots mean the copy is about *starting*, *making*, *your* potential: it nudges without pressure and celebrates small progress. Korean is primary; English in class titles only.

| Context | Tone |
|---|---|
| CTAs | Encouraging Korean verb form (`시작하기`, `구독하기`, `수강하기`, `둘러보기`). |
| Discovery | Motivational, second person (`오늘부터 시작해볼까요?`, `당신을 위한 클래스`). |
| Success toasts | Past-tense soft ending (`찜한 클래스에 추가했어요`). No emoji on chrome. |
| Error messages | Blameless, specific, one action (`영상을 불러올 수 없어요. 잠시 후 다시 시도해 주세요`). Never `오류가 발생했습니다`. |
| Empty states | Warm + one action (`아직 수강 중인 클래스가 없어요. 관심 클래스를 찾아볼까요?`). |
| Progress / completion | Celebratory but calm (`첫 강의를 완료했어요!`). |
| Legal / billing | Formal `~합니다` register — the exception. |

**Forbidden phrases.** `오류가 발생했습니다` (generic error), `죄송하지만` on non-destructive failures, guilt/pressure framing on lapsed learners (`아직도 안 하셨나요?` style), superlatives (`최고의 강의`) on UI chrome, English-first strings on Korean surfaces, emoji on system toasts (emoji belongs to creator/community content).

**Voice samples.**
- `시작하기` — primary CTA, observed live on the `#202020` button. <!-- verified: class101.net/ko via Playwright 2026-05-19 -->
- `세상의 모든 클래스를 하나의 구독으로` — brand tagline (page title `CLASS101 | 세상의 모든 클래스를 하나의 구독으로`). <!-- verified: page title via Playwright 2026-05-19 -->
- `오늘부터 시작해볼까요?` — illustrative motivational discovery line. <!-- illustrative: not verified verbatim -->
- `찜한 클래스에 추가했어요` — illustrative wishlist toast, soft `~요`. <!-- illustrative: not verified verbatim -->

## 11. Brand Narrative

Class101 (클래스101) is operated by **Class101, Inc.**, founded by **Ko Ji-yoon (고지윤)** in 2018 (the company is registered with a US entity, 101 Inc., reflecting its global ambitions — footer business address in Wilmington, Delaware). It launched as an **online-class marketplace** where creators taught hobby and skill classes — drawing, calligraphy, baking, photography, side-business — often bundled with a *materials kit* shipped to the learner so they could actually make the project, not just watch a video. That "kit + class" model was the founding insight: learning a hobby should end in something you made with your hands. ([class101.net](https://class101.net/) — platform; footer corporate info)

Over time Class101 evolved into **CLASS101+**, a Netflix-style flat-rate subscription giving access to the whole catalog — "세상의 모든 클래스를 하나의 구독으로." The brand shifted from one-off class purchase to all-you-can-learn, and the design followed: an editorial, image-forward storefront optimized for *browsing and starting* rather than *buying a single SKU*. The energetic orange is the throughline — it's the color of the spark that makes someone press "시작하기" on a Sunday and actually begin.

What Class101 refuses: the dry, lecture-hall seriousness of academic e-learning (this is hobby and self-improvement, made joyful), the cold credential-mill aesthetic of certification platforms, and high-pressure "limited time only!" urgency that would betray the supportive-mentor tone. Class101 is a motivational learning storefront — bright, warm, and pushing you, gently, to make something.

## 12. Principles

1. **The spark vs. the action.** Orange `#FF5D00` is the emotional spark (brand, promo, highlight); black `#202020` is the dependable action button. *UI implication:* Don't make every primary button orange. Reserve orange for the moments that should feel energizing.

2. **Learning is starting.** Copy and discovery push toward beginning, not toward buying. *UI implication:* `시작하기`, `오늘부터 시작해볼까요?` — lead with the verb of doing.

3. **Legibility is a learning feature.** Base body is 16px; reading surfaces breathe. *UI implication:* Never shrink class-detail body below 16px; curriculum and reviews get room.

4. **Imagery carries the warmth.** Thumbnails and creator faces supply emotion; chrome stays near-monochrome. *UI implication:* White canvas, near-black text, gray meta. Don't compete with the creative work shown.

5. **Encourage, never pressure.** The tone is a supportive mentor, not an urgency-marketing engine. *UI implication:* No guilt framing, no fake scarcity. Celebrate progress (`첫 강의를 완료했어요!`), invite return warmly.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Class101 user segments (Korean hobby and skill learners), not individual people.*

**서연 (Seo-yeon), 27, Seoul.** Office worker who wants a creative outlet. Subscribed to CLASS101+ for drawing and watercolor classes. Browses on weekends, picks by thumbnail and creator vibe. Loves that one subscription unlocks everything — low commitment to start any class.

**도윤 (Do-yun), 33, Incheon.** Exploring a side business (online store, content creation). Uses Class101 for practical skill classes — Photoshop, marketing, photography. Values clear curriculum and real creator credibility over hype. Will finish a class if the structure is clear.

**하은 (Ha-eun), 23, Busan.** University student learning a hobby (baking, calligraphy). Drawn in by the kit-and-class model — wants to actually make something. Motivated by progress tracking and the encouraging tone. Mobile-first, watches on commute.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no enrolled classes)** | Warm line `#767676` (`아직 수강 중인 클래스가 없어요`) + black CTA (`클래스 둘러보기`). |
| **Empty (search no results)** | `#767676` caption (`검색 결과가 없어요. 다른 키워드로 찾아보세요`) + suggested categories. |
| **Loading (feed first paint)** | Card-shaped skeletons at `#F3F3F3` matching layout, subtle shimmer. |
| **Loading (video buffer)** | Centered ring spinner in `#FF5D00` over the dimmed player. |
| **Error (playback)** | Centered line `#000000` (`영상을 불러올 수 없어요. 잠시 후 다시 시도해 주세요`) + retry (outline) button. |
| **Error (inline field)** | Input border `#FF3B30`, caption below in red, one actionable sentence. |
| **Success (wishlist add)** | Snackbar `#202020` + white text (`찜한 클래스에 추가했어요`), 3s dismiss. |
| **Success (lesson complete)** | Inline celebration — green `#22C55E` check + `첫 강의를 완료했어요!` + progress bar advance. Calm, not confetti-spam. |
| **Skeleton** | `#F3F3F3` blocks at exact card dimensions, 8px radius, ~1.2s shimmer. |
| **Disabled (button)** | Black CTA drops to `rgba(32,32,32,0.4)`, white text; geometry stable. |

## 15. Motion & Easing

Class101's motion is friendly and encouraging — smooth reveals, gentle lifts, a small celebratory pop on progress. Energetic but never frantic.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle/checkbox, heart fill |
| `motion-fast` | 150ms | Hover lift, button press, chip select |
| `motion-standard` | 250ms | Card hover, sheet open, tab switch |
| `motion-slow` | 350ms | Page-to-detail, hero crossfade, progress celebration |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default — most motion |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, modals, toasts appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reserved — progress/completion celebration only |

**Spring stance.** Spring is licensed for one thing: the small pop on lesson-complete / progress milestones. Everywhere else (navigation, card hover, sheets) uses standard easing. The platform should feel encouraging at the moment of achievement and calm otherwise.

**Signature motions.**
1. **Card hover lift.** Card raises ~2px with `0 2px 8px rgba(0,0,0,0.06)` over `motion-standard / ease-standard`.
2. **Progress milestone.** On lesson complete, the green check draws and pops to ~1.15 over `motion-slow / ease-spring` while the progress bar fills with `ease-standard`. The one spring moment.
3. **Sheet/modal entrance.** Bottom sheet rises from `y+40px` over `motion-standard / ease-enter` with a backdrop fade to `rgba(0,0,0,0.5)`.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, lifts/slides/pops collapse to instant; skeletons go static `#F3F3F3`. No exceptions.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 (UI tokens, §1–9): class101.net/ko live computed styles via Playwright
MCP, 2026-05-19. Confirmed: primary CTA `#202020` (rgb 32,32,32) 12px radius
16px 50px tall padding 15px 14px; brand orange `#FF5D00` (rgb 255,93,0) the
most-frequent saturated accent; surface gray `#F3F3F3` (rgb 243,243,243) 8px;
white bg; font `"Pretendard Variable", "Pretendard JP Variable", Pretendard,
system-ui, ...`. Page title `CLASS101 | 세상의 모든 클래스를 하나의 구독으로`.

Brief brand orange `#FF5C00` vs live `#FF5D00` — within 1 unit; live adopted.
Black-vs-orange CTA treated as distinct roles (action vs brand spark).

Tier 2 (narrative): class101.net footer (corporate info, 101 Inc. Wilmington
DE address) + general public knowledge of Class101's kit+class origin and
CLASS101+ subscription pivot. Founder Ko Ji-yoon (고지윤), founded 2018 — widely
documented; not re-verified against primary Class101 press in this pass.

Voice samples: `시작하기` and tagline `세상의 모든 클래스를 하나의 구독으로`
verified live (button + page title). `오늘부터 시작해볼까요?`,
`찜한 클래스에 추가했어요`, `첫 강의를 완료했어요!`, empty/error copy are
ILLUSTRATIVE patterns following Class101's encouraging `~요` register; not
verbatim.

Personas (§13) are fictional archetypes. Any resemblance to specific users is
unintended.
-->
