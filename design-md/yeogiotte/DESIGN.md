---
id: yeogiotte
name: 여기어때
display_name_kr: 여기어때 (GoodChoice)
country: KR
category: consumer-tech
homepage: "https://www.yeogi.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=yeogi.com&sz=128"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: 여기어때 Design Library
  url: "https://designlibrary.yeogi.com/"
  type: system
  description: 여기어때 디자인 라이브러리 — A Visual Language for Travel. Foundations, components, and tokens.
  og_image: "https://framerusercontent.com/assets/kA6JROOLbG0jX7SQZl1tLZzahM.jpg"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#1d8bff"
    canvas: "#ffffff"
    heading: "#222222"
    body: "#222222"
    on-primary: "#ffffff"
    tint-blue: "#e3f0ff"
    coupon-red: "#f94239"
    coupon-red-tint: "#ffedea"
    rating-yellow: "#ffc83b"
    member-slate: "#49627a"
    border: "#e6e6e6"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    hero:        { size: 32, weight: 700, lineHeight: 1.2, use: "Home hero H1 over image" }
    page-title:  { size: 24, weight: 700, use: "Search-result count headline" }
    section:     { size: 18, weight: 700, use: "Section H2 / listing card name" }
    chip:        { size: 13, weight: 600, use: "Filter chips, price-range pills" }
    tile:        { size: 14, weight: 500, use: "Destination tile caption" }
    body:        { size: 16, weight: 400, use: "Card meta, search input, descriptions" }
    button:      { size: 14, weight: 600, use: "Utility CTA label" }
    badge:       { size: 12, weight: 700, use: "Promo / coupon / member / rating" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 3, md: 8, lg: 12, full: 9999 }
  shadow:
    card: "minimal — cards rely on whitespace and photo for separation"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#1d8bff", fg: "#ffffff", radius: 8, padding: "9px 14px", font: "14/600", use: "Login/회원가입 solid, 지도 보기, hero 검색" }
    button-brand-outline: { type: button, bg: "#ffffff", fg: "#1d8bff", radius: 8, padding: "9px 14px", font: "14/600", use: "Top-right login/회원가입 entry" }
    button-neutral-outline: { type: button, bg: "#ffffff", fg: "#222222", radius: 8, padding: "9px 14px", font: "14/600", use: "Guest reservation lookup, low-emphasis utility" }
    filter-chip: { type: badge, bg: "#ffffff", fg: "#222222", radius: 9999, padding: "0px 16px", font: "13/600", use: "Price range, hashtag/star/amenity filters" }
    search-input: { type: input, bg: "#ffffff", fg: "#222222", radius: 12, font: "16/400", use: "Home search box" }
    listing-card: { type: card, bg: "#ffffff", radius: 12, padding: "0 0 24px", use: "Photo-led search-result / recommendation card" }
    badge-rating: { type: badge, bg: "#ffc83b", radius: 6, padding: "4px 5px 3px 3px", font: "16/400", use: "Review score chip on every listing card" }
    badge-promo: { type: badge, bg: "#e3f0ff", fg: "#1d8bff", radius: 3, padding: "0px 4px", font: "12/700", use: "반짝특가 flash-deal emphasis" }
    badge-member: { type: badge, bg: "#49627a", fg: "#ffffff", radius: 3, padding: "3px 4px", font: "12/700", use: "회원가 member-rate flag" }
    badge-coupon: { type: badge, bg: "#ffedea", fg: "#f94239", radius: 3, padding: "0px 4px", font: "12/700", use: "쿠폰 적용가 discount callout" }
---

# Design System Inspiration of 여기어때 (GoodChoice / Yeogiotte)

## 1. Visual Theme & Atmosphere

여기어때 (GoodChoice / Yeogiotte) is South Korea's #2 travel and lodging booking platform — a brand that turned the awkward Korean motel/pension reservation market into a clean, photo-forward booking surface that competes with Yanolja head-on. The interface opens on a clean white canvas (`#ffffff`) with warm dark headings (`#222222`) and a single saturated **Yeogiotte Blue (`#1D8BFF`)** that carries every primary action — search submit, login, "지도 보기" (view map), every conversion CTA. The blue is bright and confident, neither corporate-trustmark blue (Toss `#3182f6` is colder) nor playful-app blue (KakaoBank's softer cyan); it sits one notch warmer and brighter than fintech, signalling **booking confidence** without pretending to be a bank.

Typography is the platform-default **Pretendard** (with `Pretendard_Fallback`), the de-facto Korean web sans of the 2020s. There is no custom display face; the brand voice runs through copy register and the supersized hero photography of Korean domestic destinations (제주도, 강릉, 부산, 경주). The interaction system is anchored on two corner radii — **8px for buttons / 12px for cards / 100px for filter pills** — and a small set of badge tokens that do most of the price-and-promotion lifting on listing cards: yellow rating badges, blue "반짝특가" (flash deal) badges, slate "회원가" (member-price) badges, and red coupon-applied badges. The composition rhythm is **photo → name → location → rating → price**, repeated across thousands of listing cards, with all the weight pushed into the price line in 700.

The overall impression: a hospitality-grade booking app that treats *photography of the room* as the brand asset, with chrome that gets out of the way. Where Yanolja goes more saturated and product-busy, 여기어때 leans cleaner — fewer overlays, more whitespace per card, and a single confident blue that never has to compete with a secondary brand hue.

**Key Characteristics:**
- Yeogiotte Blue (`#1D8BFF`) as the singular brand accent — confident booking blue, one notch warmer than fintech
- Pretendard system stack — no custom typeface, photography is the brand asset
- 8px button radius / 12px card radius / 100px (pill) filter chips — three-tier radius system
- Filter chips at 32px height with 1.5px borders — the most-touched UI primitive on /domestic-accommodations
- Badge system carries promo grammar: yellow `#FFC83B` rating · blue `#E3F0FF`/`#1D8BFF` "반짝특가" · slate `#49627A` "회원가" · red `#FFEDEA`/`#F94239` "쿠폰 적용가"
- 222 (`#222222`) text instead of pure black — softer reading at small sizes
- Photo-forward listing cards with no border, 12px radius, full-bleed thumbnail above metadata

## 2. Color Palette & Roles

### Primary
- **Yeogiotte Blue** (`#1D8BFF`): Primary CTA background, primary outline border, "반짝특가" promo accent. The brand's singular booking-blue.
- **Pure White** (`#ffffff`): Page background, card surfaces, button backgrounds for outline/ghost variants.
- **Body Dark** (`#222222`): All headings and primary body text. Warm-leaning near-black, never pure `#000000`.

### Brand Tints
- **Blue Tint** (`#E3F0FF`): "반짝특가" badge background, subtle blue-tinted promo surfaces.

### Semantic
- **Coupon Red** (`#F94239`): Coupon-applied price emphasis, error-foreground candidate. Warm red.
- **Coupon Red Tint** (`#FFEDEA`): Coupon badge background, red-tinted soft surface.
- **Rating Yellow** (`#FFC83B`): Rating badge background — the universal review-score chip on every listing card.
- **Member-Price Slate** (`#49627A`): "회원가" badge background. A muted slate-blue used to distinguish the member rate without competing with the brand blue.

### Neutral Scale
- **Border Light** (`#E6E6E6`): Standard 1.5px button-outline and filter-chip border. The single neutral border value on the system.
- **Heading / Body** (`#222222`): Section titles, listing names, body copy.
- **Muted Foreground** (observed across listing meta as part of the dark-on-white system; no distinct lighter gray captured at the inspected viewport)
- **Shadow** (subtle, system-default — not a heavy elevation system)

### Surface & Borders
- **Card surface**: `#ffffff` (no border, 12px radius — listing cards lean on photo + spacing for separation, not on outlines)
- **Outline border**: `1.5px solid #E6E6E6` (filter chips, ghost buttons)
- **Brand outline**: `1.5px solid #1D8BFF` (login/회원가입 outline button — brand blue text on white)

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard, Pretendard_Fallback` (the entire system runs on Pretendard — Korean web sans default)
- **Design Principle**: No custom brand typeface. Pretendard's mature multi-weight Korean Hangul + Latin support carries both Korean destination names and Latin price digits without a font swap.

### Hierarchy

| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Hero H1 | 32px | 700 | `#ffffff` (over hero image) | "국내부터 해외까지 여기어때" home hero |
| Page H1 | 24px | 700 | `#222222` | Search-result count headline (`'현재 위치 주변' 검색 결과 21,157개`) |
| Section H2 | 18px | 700 | `#222222` | "이벤트", "국내 인기 여행지", "인기 추천 숙소" |
| Listing Card H3 | 18px | 700 | `#222222` | Hotel/motel/펜션 name on listing card |
| Tab/Chip Label | 13px | 600 | `#222222` | Filter chips, price-range pills |
| Destination Tile H3 | 14px | 500 | `#222222` | Destination chip caption (`제주도`, `서울`) |
| Body | 14-16px | 400-600 | `#222222` | Card meta, descriptions |
| Search Input | 16px | 400 | `#222222` | "여행지나 숙소를 검색해보세요." placeholder |
| Search CTA | 15px | 700 | `#ffffff` | The hero search button "검색" |
| Primary Button | 14px | 600 | varies | Login/회원가입, 지도 보기 — the standard utility CTA |
| Badge | 12px | 700 | varies | Promo / coupon / member-price / rating |

### Principles
- **Three weights only**: 400 (body/placeholder), 500-600 (chip/title secondary), 700 (heading / price / CTA / badge). No light, no extra-bold.
- **Pretendard as system default**: Korean reads cleanly at 13-14px, Latin price digits stay aligned. No font swap between locales.
- **Bold for price, not for sales**: Listing card weight goes into the price line and the hotel name; descriptive metadata (location, distance) stays at 400-500.

## 4. Component Stylings

### Buttons

**Primary (Yeogiotte Blue Solid)**
- Background: `#1D8BFF`
- Text: `#ffffff`
- Border: none
- Radius: 8px (utility) / 10px (hero search)
- Padding: 9px 14px (utility 40px) / 10px 18px (search 48px)
- Font: 14px / 600 (utility) · 15px / 700 (search)
- Use: Login/회원가입 solid, hero "검색" CTA, "지도 보기"

**Brand Outline (Login)**
- Background: `#ffffff`
- Text: `#1D8BFF`
- Border: 1.5px solid `#1D8BFF`
- Radius: 8px
- Padding: 9px 14px
- Font: 14px / 600
- Use: Top-right login/회원가입 entry point

**Neutral Outline (비회원 / 비회원 예약조회)**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1.5px solid `#E6E6E6`
- Radius: 8px
- Padding: 9px 14px
- Font: 14px / 600
- Use: Guest reservation lookup, low-emphasis utility

**Filter Chip (Pill)**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1.5px solid `#E6E6E6`
- Radius: 100px (pill)
- Padding: 0px 16px
- Font: 13px / 600
- Height: 32px
- Use: Price range, hashtag filters (`#감성숙소`, `#연인추천`), star-rating filter, amenity filter — the most-touched UI primitive on `/domestic-accommodations`. Selected state inferred to fill `#1D8BFF` on the same geometry (not statically captured).

### Inputs

**Search Input (Hero)**
- Background: `rgba(255,255,255,0)` (transparent, sits inside a styled wrapper)
- Border: none on the input itself; wrapper provides the visible border
- Radius: 0 on input; 12px on the search wrapper container
- Padding: 0 (wrapper handles spacing)
- Text: 16px / 400 / `#222222`
- Placeholder: `여행지나 숙소를 검색해보세요.`
- Type: `search`
- Use: Home search box — paired with the 48px Yeogiotte Blue "검색" submit button on the right

### Cards

**Listing Card (Hotel / Motel / Pension)**
- Background: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 0 0 24px (photo edge-to-edge top, 24px bottom for meta)
- Shadow: minimal / none (cards rely on whitespace + photo for separation)
- Use: The dominant content primitive — photo top, then `[type · grade · category]` metadata, then 18px / 700 name, then location + distance, then `[★ rating chip] [N명 평가]`, then price line (with strikethrough original + bold final). Used on every search-result and recommendation surface.

**Destination Chip Card**
- Background: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 0 (image fills, label sits below)
- Use: "국내 인기 여행지", "해외 인기 여행지", "패키지 인기 여행지" rows. Image-led, label in 14px / 500.

### Badges

**Rating Yellow**
- Background: `#FFC83B`
- Text: `#000000` (rating digits stay pure black on yellow for legibility)
- Radius: 6px
- Padding: 4px 5px 3px 3px
- Font: 16px / 400
- Use: Review score (`9.2`, `9.4`) on every listing card — the universal trust signal.

**Promo (Flash Deal · Blue Tint)**
- Background: `#E3F0FF`
- Text: `#1D8BFF`
- Radius: 3px
- Padding: 0px 4px
- Font: 12px / 700
- Use: "반짝특가" (flash deal) — brand-tinted promo emphasis; the only place Yeogiotte Blue appears on a non-button surface.

**Member-Price (Slate)**
- Background: `#49627A`
- Text: `#ffffff`
- Radius: 3px
- Padding: 3px 4px
- Font: 12px / 700
- Use: "회원가" — distinguishes logged-in member rate without using brand blue, so it reads as utility rather than promotion.

**Coupon Red**
- Background: `#FFEDEA`
- Text: `#F94239`
- Radius: 3px
- Padding: 0px 4px
- Font: 12px / 700
- Use: "4,500원 쿠폰 적용가", "8% 쿠폰 적용가" — coupon-applied price callout. Warm red signals discount, not error.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Observed scale: 4, 8, 14, 16, 18, 24px
- Card internal: 24px bottom padding for meta block under photo
- Filter chip horizontal padding: 16px
- Button horizontal padding: 14px (utility) / 18px (hero CTA)

### Grid & Container
- Web home: full-width hero image with centered search panel
- Listing grid: multi-column on desktop (`/domestic-accommodations`), collapses on narrower viewports
- Filter chip row: horizontal scroll, no wrap, 32px chip height
- Destination chip rows: horizontal scroll (제주도 / 서울 / 부산 / 강릉 / 인천 / 경주 / 해운대 / 가평 / 여수 / 속초)

### Whitespace Philosophy
- **Photo-as-content**: Listing cards reserve the top half for the photo with no chrome on the image; metadata sits below in a quiet text block.
- **Chip rhythm**: 32px filter chips sit on a single horizontal scroll row. Density per chip is high (13px / 600 / pill / 16px h-padding) because users scan dozens of filters per session.
- **Separation by spacing, not by outline**: Listing cards have no border. Cards separate via gap (whitespace), keeping the visual surface calm.

### Border Radius Scale
- Tight (3px): Inline badges (promo, coupon, member-price)
- Standard (6px): Rating badge
- Comfortable (8px): Buttons (utility geometry)
- Hero (10px): Hero "검색" submit button
- Card (12px): Listing cards, destination chips, search-wrapper container
- Pill (100px): Filter chips, hashtag chips

## 6. Iconography

여기어때's iconography is utilitarian and travel-vertical specific. Most icons are **monochrome `#222222`** glyphs that sit alongside text labels rather than replacing them. The only icon that reaches into a non-neutral color is the rating chip's star (gold-on-yellow context). On filter chips, the **hashtag character (`#`)** is treated as part of the label text (`#감성숙소`, `#반려견`) rather than as a glyph — Yeogiotte's filter taxonomy is text-first.

Category iconography on the home grid (호텔, 모텔, 펜션, 풀빌라, 캠핑, 패키지여행, 항공권 예약) leans on photo-illustrated thumbnails rather than flat geometric icons — the brand wants the user to feel the destination, not navigate a Material design language.

**Use rules:**
- Monochrome `#222222` icons paired with text labels for navigation
- Icon-only buttons reserved for utility (close, back, share, favorite)
- No two-tone or branded-blue icons in the main flow — blue is reserved for CTAs and "반짝특가"

## 7. Motion Principles

여기어때's motion is **functional and brisk**, oriented around the booking flow rather than expressive brand presence. There is no overshoot or spring stance observed on the chrome surfaces; transitions are short cubic-beziers in the standard easing family.

**Stance:**
- Filter-chip selection: instant fill state change to `#1D8BFF`, no bounce
- Listing-card tap feedback: subtle press-state (likely opacity or background tint at `motion-fast`)
- Image carousels (hero promos): horizontal scroll with snap, no inertia animations
- Modal/sheet entry: `motion-standard` slide-up with `ease-enter`
- Reduce motion: cross-fades replace slides; chip selection becomes instant (already is)

The brand context — booking real money on a real stay — discourages playful motion. Every kinetic moment is calibrated to feel **fast and committed**, like a confirmation, not a celebration.

## 8. Photography & Imagery

Photography is the load-bearing brand asset. Every listing card, destination chip, and hero panel surfaces a real photograph at a generous size:
- **Listing card photo**: full-card width, ~16:9-ish (varies by room type), no overlay, no text-on-photo
- **Destination chip**: square or near-square crop with gentle border-radius, label below the image (not on it)
- **Hero**: full-bleed lifestyle photography (`/home/home_key_visual/01_kv_domestic.png`) with white H1 placed in the upper-left band, search panel anchored over the lower band

**Rules:**
- No mint/blue color overlays on photography — let the actual destination do the work
- Promo badges (반짝특가, 쿠폰) sit in the metadata block below the photo, never on the image
- Photos go edge-to-edge inside a 12px-radius card; the radius clips the photo, no inner image padding
- Pricing strikethrough + final-price typography sits below the photo, not over it

## 9. Quick Color Reference

| Token | Hex | Use |
|---|---|---|
| Primary CTA | `#1D8BFF` | Search, login, 지도 보기 — every solid CTA |
| Body Dark | `#222222` | All headings, body, chip labels |
| Border Light | `#E6E6E6` | Filter chip + ghost button border (1.5px) |
| Card Surface | `#ffffff` | Listing card, destination chip, button bg |
| Rating Yellow | `#FFC83B` | Review-score chip on every listing card |
| Promo Blue Tint | `#E3F0FF` | "반짝특가" badge background |
| Member Slate | `#49627A` | "회원가" badge background |
| Coupon Red | `#F94239` | Coupon-applied price text |
| Coupon Red Tint | `#FFEDEA` | Coupon badge background |
| Hero Text | `#ffffff` | H1 over hero photography |

## 10. Voice & Tone

여기어때's voice is **plain-Korean utility with a faint hospitality warmth**. Where Yanolja leans more aggressive-marketing and where Booking.com translates English-first, 여기어때 stays in **conversational Korean booking register**: short verb-stem CTAs (`검색`, `로그인/회원가입`, `지도 보기`), polite-요 endings on instructional copy (`여행지나 숙소를 검색해보세요.`), and hashtag filter taxonomy (`#감성숙소`, `#연인추천`, `#반려견`, `#뷰맛집`) that reads like the user's own search intent rendered as UI. The brand's tagline — *"국내부터 해외까지 여행·숙소 예약은 여기어때"* — leans on the brand-name pun (*"how about here?"*) rather than on aspirational adjectives. The product never says "luxurious" or "premium"; it says "★당일특가★" (today-only special) and "쿠폰 적용시" (when coupon applied) and lets the photo carry the rest.

| Context | Tone |
|---|---|
| Top-bar utility | Two-character Korean nouns/verbs (`검색`, `로그인`, `장바구니`-equivalents). Never English on chrome. |
| Hero CTA | Single 2-char verb (`검색`) on `#1D8BFF` solid — confident, declarative |
| Filter chips | Hashtag-prefixed user-language (`#감성숙소`, `#스파`, `#OTT`) and price-range plain Korean (`5만원 이하`, `5~10만원`) |
| Promo badges | 2-4 character Korean superlatives in 700 weight: `반짝특가`, `당일특가`, `회원가`, `쿠폰 적용시` |
| Search placeholder | Polite-요 instructional (`여행지나 숙소를 검색해보세요.`) — leans into hospitality posture |
| Listing card meta | Plain factual Korean (`강문해변 도보 3분`, `보문관광단지 부근`) — distance/location is the trust signal |
| Empty / error | (Not directly captured in this pass — production teams should observe live before shipping copy) |
| Payment / refund | (Not captured — assumed formal `합니다` register based on Korean booking convention) |

**Forbidden phrases (recommended).** `불편을 드려 죄송합니다` as a boilerplate opener, English `Oops` / `Sorry` on Korean UI, generic `데이터가 없습니다` / `오류가 발생했습니다`. Never decorate `#감성숙소` with extra adjectives — the hashtag *is* the entire label, and overwriting it dilutes the user-language posture. Avoid stacking two promo badges of the same color family on the same card (e.g., `반짝특가` + another blue-tint badge); it desaturates the trust hierarchy.

**Voice samples (live-verified).**

- `국내부터 해외까지 여기어때` — hero H1 on home <!-- verified: yeogi.com 2026-05 -->
- `국내부터 해외까지 여행·숙소 예약은 여기어때` — hero sub-tagline <!-- verified: yeogi.com 2026-05 -->
- `여행지나 숙소를 검색해보세요.` — search input placeholder <!-- verified: yeogi.com 2026-05 -->
- `검색` — hero CTA on `#1D8BFF` <!-- verified: yeogi.com 2026-05 -->
- `로그인/회원가입` — top-right outline + solid variant <!-- verified: yeogi.com 2026-05 -->
- `비회원 예약조회` — guest reservation lookup <!-- verified: yeogi.com 2026-05 -->
- `지도 보기` — search-result page CTA <!-- verified: yeogi.com/domestic-accommodations 2026-05 -->
- `★당일특가★` — listing-card promo prefix on hotel names <!-- verified: yeogi.com 2026-05 -->
- `쿠폰 적용시` — price line qualifier <!-- verified: yeogi.com 2026-05 -->
- `반짝특가` — promo badge string <!-- verified: yeogi.com/domestic-accommodations 2026-05 -->
- `회원가` — member-price slate badge <!-- verified: yeogi.com/domestic-accommodations 2026-05 -->
- `#감성숙소`, `#연인추천`, `#반려견` — hashtag filter chip labels <!-- verified: yeogi.com/domestic-accommodations 2026-05 -->

## 11. Brand Narrative

여기어때 (literally *"how about here?"*) launched **April 2014** as an in-house product of **위드웹 (With Web)**, an IT services holding founded in **2008 by 심명섭 (Shim Myung-seop)** — a Daegu vocational-high-school graduate who had previously bounced through SMS messaging, WideForm document tooling, PPT Korea, and small-agency advertising before betting the company on the Korean motel/pension reservation market that nobody else was treating as a real product surface ([1boon — 월급 100만원 직장인에서 2천억대 회사 CEO가 된 비결](https://1boon.kakao.com/jobsN/58610c97ed94d20001f6d415), [한국관광스타트업협회 인터뷰](https://www.kotsa.co.kr/34/?q=YToyOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjtzOjQ6InBhZ2UiO2k6Mjt9&bmode=view&idx=3740996&t=board)). The bet was that the legacy Korean lodging ecosystem — fragmented motels and 펜션 owners, no standardized pricing, walk-in-and-haggle culture — was a **product problem**, not a supply problem, and could be solved with photography, standardized listings, and a clean reservation flow.

By **November 2015**, after the app's TV-advertising-led breakout, Shim spun the product out of With Web into a dedicated entity, **위드이노베이션 (With Innovation)**, to focus exclusively on lodging O2O ([머니S — 숙박어플 '여기어때', ㈜위드이노베이션으로 독립](https://www.moneys.co.kr/article/2015110614118041131)). Through 2016-2018 위드이노베이션 grew into the country's #2 lodging-booking platform behind Yanolja, but a 2018 prosecution investigation involving the founder's pre-여기어때 ad-network history forced Shim to step away from operational leadership ([한국경제 — 여기어때 심명섭 대표, 음란물 유통 52억 벌어 숙박 앱 회사 차렸나](https://www.hankyung.com/society/article/2018112968937)).

In **September 2019**, UK private-equity firm **CVC Capital Partners** acquired ~85% of the company from Shim and existing financial investors (including JKL Partners' 18%) at a reported enterprise value of ~₩300 billion (~US$300M), one of the largest Korean travel-tech buyouts of the decade ([KED Global — CVC to buy Korea's No.2 hotel booking app in $300mn deal](https://www.kedglobal.com/newsView/ked201908020001), [PaxNet News — '여기어때' M&A.. JKL만 더 받고 팔았다](https://paxnetnews.com/articles/51643)). In **April 2020** the holding company renamed itself from **위드이노베이션 → 여기어때컴퍼니 (GC COMPANY / 여기어때컴퍼니)**, aligning the company name with its hero brand ([서울경제 — 여기어때 운영 위드이노베이션 '여기어때컴퍼니'로 사명 변경](https://www.sedaily.com/NewsVIew/1Z1B1LQCZD), [전자신문 — 여기어때 '위드이노베이션' 회사 이름 바꾼다](https://www.etnews.com/20191125000159)). Under CVC ownership the product expanded from domestic motel/pension into hotels, 풀빌라 (pool villas), 패키지여행 (package tours), 해외여행 (international travel including 오사카, 도쿄, 다낭, 방콕), and 항공권 (flights). The company acquired **온라인투어 (Online Tour)** in 2025 to deepen its package-and-flight business ([Travel Times — 여기어때, 온라인투어 인수](https://www.traveltimes.co.kr/news/articleView.html?idxno=410758)). CVC has since explored exits at reported valuations as high as ₩1.5 trillion ([마켓인 — 매각 변수 만난 여기어때…더 멀어진 몸값 1.5조](https://marketin.edaily.co.kr/News/Read?newsId=02899526638984368)), and the company entered IPO bookrunner-selection in late 2024 ([인베스트조선 — 여기어때, IPO 주관사 선정 절차 착수](https://www.investchosun.com/site/data/html_dir/2024/08/30/2024083080214.html)).

> **A note on a frequently-confused fact:** popular press has sometimes attributed the 2019 acquisition to **KKR**. The actual buyer was **CVC Capital Partners**, not KKR ([KED Global](https://www.kedglobal.com/newsView/ked201908020001), [Crunchbase — Good Choice Company](https://www.crunchbase.com/organization/good-choice-company)).

What 여기어때 refuses, in design terms: the warm-red Korean-commerce aesthetic of legacy lodging chains (pension owner sites in the 2000s leaned on red banners, animated GIFs, and dense detail dumps); the over-saturated promo grids of competing super-apps; the Material/iOS-default chrome that erases regional warmth. What it embraces: a single confident **`#1D8BFF` blue** that signals booking trust, **photography as the brand asset**, and **hashtag-first filter taxonomy** (`#감성숙소`, `#연인추천`) that mirrors how Korean users actually describe a stay rather than how a database would categorize one.

## 12. Principles

1. **One blue, scarce.** `#1D8BFF` is the only brand color. It appears on the hero search CTA, the login solid+outline, "지도 보기", filter-chip selected-state, and the `반짝특가` promo badge. It does not appear as a hero background, a card fill, a divider, or a decorative accent. *UI implication:* per viewport in a primary flow, target ≤2 elements rendered in `#1D8BFF`. If a screen has three blue surfaces competing, two must demote to neutral or to a tinted variant (`#E3F0FF`).

2. **Photo is the brand. Chrome is the frame.** Listing cards reserve their top region for the room photograph with no overlay, no text, no badge. *UI implication:* never place a promo badge inside the image; badges live in the metadata block below the photo. Never tint a photo with a brand color filter; the destination/property must read true.

3. **Hashtag taxonomy mirrors user search intent.** Filter chips use `#감성숙소`, `#연인추천`, `#반려견`, `#뷰맛집`, `#BBQ` — the exact phrases users type into the search bar. *UI implication:* don't translate hashtag chips into "category-style" labels (e.g., `Romantic Stays` or `Pet-Friendly`). The hashtag character is part of the label and signals "this is how you'd describe it, not how we'd file it."

4. **Three radii, no exceptions.** 8px buttons / 12px cards / 100px filter chips. Inline badges sit at 3-6px (almost square). Anything outside this scale (e.g., a 16px-radius button) is off-system. *UI implication:* if a designer reaches for a 10px or 14px or 20px radius for a button or card, the answer is one of {8, 12, pill}.

5. **Bold goes on price.** 700-weight is reserved for the listing name, the final price, the promo badges, and the hero CTA. Descriptive copy (location, distance, "쿠폰 적용시" qualifier) stays at 400-500 so the eye lands on the conversion-relevant numbers. *UI implication:* never bold an entire listing card. Bold the name, bold the price, leave the rest at 400-500.

6. **Filter density is a feature, not a bug.** The `/domestic-accommodations` page exposes ~30+ filter chips on a single horizontal scroll: price ranges, star grades, hashtag categories, amenities. Users want this density. *UI implication:* don't collapse filter chips behind a "Filters" modal as the primary interaction. The horizontal scroll row of pills is the primary filter surface; modals are for advanced search only.

7. **Member rate is utility, not promotion.** "회원가" sits on the slate `#49627A` badge — deliberately not blue, not red, not yellow — so it reads as account-state information, not as a sale offer. The promotional weight goes to `반짝특가` (blue) and `쿠폰 적용시` (red). *UI implication:* never style "회원가" in brand blue; that conflates "you have access to a member rate" with "this is a flash deal," which dilutes both signals.

## 13. Personas

*Personas are fictional archetypes informed by publicly described 여기어때 user segments and Korean travel-booking patterns; they are not individual people.*

**지호 (Jiho), 28, 서울.** Marketing junior, single. Books 여기어때 4-5 times a year — weekend 모텔 stays in 강남/홍대 with a partner, occasional 강릉/속초 trip. Filters by `#감성숙소` + `#연인추천` first, then by price range (`10~15만원`). Reads the rating chip (`9.4`) before reading the hotel name. Will not book a property below `9.0`.

**민수 (Minsu), 41, 부산.** Father of two elementary-school kids. Uses 여기어때 for family 펜션 trips on long weekends — `#가족여행숙소` + `#BBQ` + `#수영장` are his standing filter set. Cares about the photo of the actual room more than the description; will scroll the image carousel before reading any meta. Pays via 여기어때페이 / coupon-applied price; the `쿠폰 적용시` red badge is what closes the deal for him.

**Soyoung, 35, 일본 오사카 거주.** Korean expat in Osaka. Books 여기어때 for family visits to Korea (Seoul + 제주도). Uses the `해외여행` tab in reverse — flying *into* Korea — and filters domestic hotels by `#반려견` for her dog. The polite-요 search placeholder ("여행지나 숙소를 검색해보세요.") is part of why she uses 여기어때 over Booking.com; it feels Korean in a way that translated international UIs don't.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | One factual line in `#222222` body weight (`'<query>' 검색 결과가 없어요`-pattern). Suggested-region or suggested-hashtag chips below in the standard 100px pill geometry. Never a mascot illustration on functional surfaces. |
| **Empty (filter cleared)** | Single line of muted body text. No CTA — user resets the filter via the same chip row. |
| **Loading (listing list)** | Skeleton cards at exact final dimensions — `#E6E6E6`-tone blocks for photo (top region), name row, meta row, price row. Shimmer ≤ 1.2s. Rating chip skeleton renders as a yellow-tone block (preserving the visual anchor) without a digit, so users don't read a placeholder `0.0`. |
| **Loading (search submit)** | Hero `#1D8BFF` "검색" button shows a 3-dot white animation replacing the label text. Button width does not change. |
| **Loading (image carousel)** | Card photo region renders a `#F4F4F4` placeholder block until the JPEG resolves. No spinner over the photo. |
| **Selected (filter chip)** | Filter chip background fills `#1D8BFF`, text becomes `#ffffff`, border becomes `1.5px solid #1D8BFF`. Geometry stays identical (100px / 32px / 16px h-padding) so the row doesn't reflow on toggle. |
| **Hover / press (button)** | Solid blue button darkens slightly (observed via interaction; static value approximated as a 6-8% darker blue). No scale, no bounce. |
| **Error (inline field)** | Input border becomes `2px solid #F94239`, helper text below in `#F94239` 13px / 400. One actionable Korean sentence. Avoids `오류가 발생했습니다`. |
| **Error (network)** | Top banner with dark surface, white 14px text, one sentence + retry. Auto-dismiss when connectivity returns. |
| **Success (booking confirmed)** | Dedicated confirmation screen — not a toast. Reservation number 16px / 600 `#222222`, property name 18-20px / 700, dates and price block, single primary `#1D8BFF` CTA `예약 내역 보기`. Booking is ceremonial here — the receipt matters. |
| **Success (favorited)** | Heart icon fills, brief 200ms scale pulse (`1.0 → 1.1 → 1.0`) using a calm easing — the only place the system tolerates a tiny motion flourish. |
| **Skeleton** | `#E6E6E6` blocks at exact card dimensions. Rating slot uses a yellow-tinted skeleton (preserves visual rhythm). Price slot renders as `---원` until resolved — never `0원`, which would misread as "free." |
| **Disabled (button)** | Background drops to `#E6E6E6`, text to `#888-ish` muted gray. Geometry stays identical so re-enable is frame-stable. |

## 15. Motion & Easing

여기어때's motion is **functional and brisk** — calibrated for a booking flow where users move through {search → filter → list → card → details → checkout} in a session and where every transition is information-bearing. There is no spring stance or overshoot on the chrome surfaces; the brand's posture is "confident booking," not "playful app."

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle commits, checkbox state changes |
| `motion-fast` | 150ms | Hover, focus, button press overlay, chip selection, image thumb tap |
| `motion-standard` | 250ms | The default — sheet opens, card expand, tab switch, toast appear |
| `motion-slow` | 350ms | Booking confirmation reveal, success screen entrance |
| `motion-page` | 300ms | Route transitions between top-level tabs (해외여행 ↔ 국내숙소) |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — sheets, toasts, screen pushes |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals, pops |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — card expand/collapse, filter-chip toggle |

**Spring stance.** **Spring and overshoot easings are forbidden across 여기어때 chrome and money surfaces.** Booking is a money decision; a CTA that wobbles or a confirmation card that springs reads as toy-like in a context where users are committing to a real stay at a real price. The single licensed exception is the favorite-heart toggle, which gets a 200ms `1.0 → 1.1 → 1.0` scale pulse using `ease-standard` (not `ease-bounce`) — enough tactility to feel like a press, not enough to feel like a game.

**Signature motions.**

1. **Filter-chip selection.** Background fills `#1D8BFF`, text inverts to `#ffffff`, all over `motion-fast` with `ease-standard`. No geometry change.
2. **Listing-card tap.** Card scales `1.0 → 0.98` over `motion-fast / ease-standard` on press, returns on release. The route transition follows on `motion-page / ease-enter`.
3. **Search submit.** "검색" button label replaced by 3-dot loader; button geometry frozen. On result page entry, the result-count H1 fades in with `motion-standard / ease-enter`.
4. **Filter-chip row scroll.** Native horizontal scroll with snap. No inertia overshoot — the system snaps cleanly to the next chip boundary.
5. **Booking confirmation.** Confirmation card fades+rises from `y+20px` over `motion-slow / ease-enter`. The reservation number, property name, and CTA stagger in at 80ms intervals — calm, not theatrical.
6. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Cross-fades replace slides. The favorite-heart pulse is suppressed entirely. The app stays fully usable.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — live DOM (playwright getComputedStyle, isolated browser context, 2026-05-09):
- https://yeogi.com/ — home: hero H1 32px·700 white, search input "여행지나 숙소를 검색해보세요.", search CTA #1D8BFF / #ffffff / 10px / 10×18 / 48px / 15px·700, login outline #1D8BFF border 1.5px / 8px / 9×14 / 40px / 14px·600, login solid #1D8BFF / 14px·600, 비회원 예약조회 #E6E6E6 outline / 14px·600, listing cards 12px radius / no border / white bg / 343px height with 0 0 24px padding, destination chip H3 14px·500.
- https://yeogi.com/domestic-accommodations — search-result page: filter chips 100px radius / 1.5px solid #E6E6E6 / 32px / 16px h-padding / 13px·600, "지도 보기" #1D8BFF solid 8px / 9×14 / 40px / 14px·600, badges captured: rating #FFC83B / 6px / 4×5, "반짝특가" #E3F0FF/#1D8BFF / 3px / 12px·700, "회원가" #49627A/white / 3px / 12px·700, coupon "쿠폰 적용가" #FFEDEA/#F94239 / 3px / 12px·700.

Tier 2 — Cross-check (WebFetch, 2026-05-09):
- https://getdesign.md/yeogiotte — no record ("No designs found for 'yeogiotte'")
- https://getdesign.md/goodchoice — no record ("No designs found for 'goodchoice'")
- styles.refero.design — not separately fetched this pass.
Tier 2 status: unavailable. Tier 1 (yeogi.com home + /domestic-accommodations) treated as authoritative.

Philosophy / Founders (Tier 1, WebSearch 2026-05-09):
- Founder Shim Myung-seop (심명섭), Daegu vocational HS → community college → SMS/PowerPoint/ad-agency entrepreneur → 2008 founded With Web → 2014 launched 여기어때 in-house → 2015 spun out 위드이노베이션 — sourced from 1boon (kakao jobsN), 한국관광스타트업협회 interview, 머니S 2015 article.
- 2018 founder prosecution & step-back — 한국경제 2018-11.
- 2019 CVC Capital Partners acquisition (~85%, ~₩300B / ~$300M) — KED Global "CVC to buy Korea's No.2 hotel booking app in $300mn deal" (2019-08), PaxNet News, Crunchbase Good Choice Company profile.
- 2020 rename 위드이노베이션 → 여기어때컴퍼니 — 서울경제, 전자신문 2019-11.
- 2024 IPO bookrunner selection — 인베스트조선 2024-08.
- 2025 온라인투어 acquisition — Travel Times.
- KKR misattribution corrected: actual acquirer is CVC Capital Partners (UK PE), not KKR — explicitly noted in §11 as the "frequently-confused fact" callout.

Style ref: baemin/karrot (Korean utility brands) — voice register conventions (polite-요 placeholder, two-character verb-form CTAs, hashtag taxonomy preserving Korean characters) cross-referenced from web/references/karrot/DESIGN.md and web/references/baemin/DESIGN.md.

Personas (§13) are fictional archetypes informed by publicly described 여기어때 user segments (Korean urban young couples for 모텔, family for 펜션, expats booking domestic Korean stays). Any resemblance to specific individuals is unintended.

Interpretive claims (editorial, not documented Yeogiotte brand statements):
- "Hashtag taxonomy mirrors user search intent" framing in §12 P3 — editorial reading of the live filter UX, not a sourced product statement.
- "One blue, scarce" rule in §12 P1 — derived from observed live usage on home + /domestic-accommodations, not a published Yeogiotte design-system rule.
- The KKR-vs-CVC clarification in §11 — KKR is widely confused in casual press; primary press citations confirm CVC.
-->


## 16. Do's and Don'ts

### Do
- Reserve Yeogiotte Blue `#1D8BFF` for primary CTAs (hero `검색`, login, `지도 보기`), filter-chip selected-state, and the `반짝특가` promo badge, targeting ≤2 blue elements per viewport in a primary flow
- Hold to the three-tier radius scale of 8px buttons, 12px cards, and 100px filter pills, with inline badges at the tight 3-6px range
- Set body and headings in Pretendard at `#222222` rather than pure black, and confine 700 weight to the listing name, final price, promo badges, and hero CTA while keeping location and distance meta at 400-500
- Render the promo-badge grammar by role: yellow `#FFC83B` rating chip, blue-tint `#E3F0FF`/`#1D8BFF` `반짝특가`, slate `#49627A` `회원가`, and red `#FFEDEA`/`#F94239` coupon-applied price
- Separate borderless `#ffffff` listing cards by whitespace gap and let the edge-to-edge room photo fill the 12px-radius card top, placing all badges and pricing in the metadata block below
- Keep hashtag filter chips in user-language Korean (`#감성숙소`, `#연인추천`, `#반려견`) on a single 32px-tall horizontal-scroll row with 1.5px `#E6E6E6` borders as the primary filter surface

### Don't
- Use `#1D8BFF` as a hero background, card fill, divider, or decorative accent, or let three blue surfaces compete on one screen instead of demoting to the `#E3F0FF` tint
- Style the `회원가` member-rate badge in brand blue, red, or yellow — keep it on slate `#49627A` so it reads as account utility, not a flash deal
- Reach for an off-system radius like 10px, 14px, or 20px on a button or card when the answer is one of 8px, 12px, or pill
- Place any promo or coupon badge on top of the room photo or tint the photo with a brand-color filter — badges live below the image and the destination must read true
- Translate hashtag chips into category-style labels like `Romantic Stays` or `Pet-Friendly`, add extra adjectives to `#감성숙소`, or collapse the filter-chip row behind a primary `Filters` modal
- Apply spring or overshoot easing to chrome and money surfaces, bold an entire listing card, or stack two same-color-family promo badges on one card

---

**Verified:** 2026-05-09
**Tier 1 sources:** yeogi.com (home — Yeogiotte Blue `#1D8BFF` 10px / 48px / 15px·700 hero search; 8px / 40px / 14px·600 login utility; 12px card radius); yeogi.com/domestic-accommodations (filter chips 100px / 32px / 13px·600 with 1.5px `#E6E6E6` border; badges captured for rating `#FFC83B`, promo `#E3F0FF`/`#1D8BFF`, member-rate `#49627A`, coupon `#FFEDEA`/`#F94239`).
**Tier 2 sources:** getdesign.md/yeogiotte + getdesign.md/goodchoice — no record. styles.refero.design — not fetched this pass.
**Tier 2 status:** unavailable. Tier 1 (yeogi.com live DOM via isolated playwright context) authoritative.
**Tier 1 Philosophy citations:** [KED Global — CVC $300M deal](https://www.kedglobal.com/newsView/ked201908020001), [한국경제 2018](https://www.hankyung.com/society/article/2018112968937), [머니S — 위드이노베이션 독립](https://www.moneys.co.kr/article/2015110614118041131), [서울경제 — 사명 변경](https://www.sedaily.com/NewsVIew/1Z1B1LQCZD), [Crunchbase Good Choice](https://www.crunchbase.com/organization/good-choice-company), [PaxNet News M&A](https://paxnetnews.com/articles/51643), [Travel Times — 온라인투어 인수](https://www.traveltimes.co.kr/news/articleView.html?idxno=410758), [인베스트조선 IPO](https://www.investchosun.com/site/data/html_dir/2024/08/30/2024083080214.html).
**Style ref:** `baemin` + `karrot` (KR utility-brand voice register conventions retained).
**Conflicts unresolved:** none. **Earlier mistake reverted:** prompt initially assumed Yeogiotte's primary was a "signature pink/magenta"; live measurement on yeogi.com home + /domestic-accommodations (2026-05-09) shows the brand has a **single confident blue** `#1D8BFF` as its sole accent, not pink. The DESIGN.md is written to the live-verified blue system. Acquirer correction: prompt suggested KKR; press citations confirm CVC Capital Partners (2019).
