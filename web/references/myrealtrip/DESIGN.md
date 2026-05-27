---
id: myrealtrip
name: MyRealTrip
country: KR
category: travel
homepage: "https://www.myrealtrip.com"
primary_color: "#2B96ED"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=myrealtrip.com&sz=128"
verified: "2026-05-19"
omd: "0.1"
---

# Design System Inspiration of MyRealTrip (마이리얼트립)

## 1. Visual Theme & Atmosphere

MyRealTrip is Korea's largest travel-experience marketplace — the platform that started by connecting Korean travelers with local guides abroad and grew into a one-stop super-app for flights, hotels, tours, tickets, and packages. After a 2023 rebrand built around the idea of *"My"* — travel that is genuinely yours — the interface settled into a bright, optimistic, content-forward marketplace look: a clean white canvas (`#FFFFFF`) under a near-translucent frosted header (`rgba(248,248,248,0.8)`), wall-to-wall with photographic tour and accommodation cards. The brand wordmark renders in near-black (`#0F0F0F`), so the page reads as a confident editorial travel magazine rather than a discount-shouting OTA.

The interactive system is anchored by a friendly sky-blue, observed live as `#2B96ED` on the primary "로그인 및 회원가입" CTA — a lighter, more approachable blue than the deep "Science Blue" (`#0250CB`) of the marketing/logo lockups. This split is intentional: the deep blue carries brand gravity in hero and logo contexts, while the lighter `#2B96ED` does the day-to-day interactive work. Alongside the blue, a vivid violet (`#8238FA`) appears as a promotional/membership accent across the home feed — the color that flags benefits, membership, and "특가" energy. The result is a two-accent system: blue for trust-and-action, violet for offers-and-delight.

Typography is Pretendard (loaded as a self-hosted variable face, `__pretandard_*`), the modern Korean product sans, in a black-to-gray scale on white. Geometry is rounded and soft — `12px` radius on the primary CTA, `8px` on cards — giving the marketplace a tactile, friendly feel that says "booking should feel easy, not bureaucratic."

**Key Characteristics:**
- Sky-blue interactive accent (`#2B96ED`) for primary actions; deep "Science Blue" (`#0250CB`) reserved for brand/logo
- Violet promotional accent (`#8238FA`) for membership, benefits, and special-offer surfaces
- Clean white canvas (`#FFFFFF`) with a frosted-translucent header (`rgba(248,248,248,0.8)`)
- Near-black wordmark (`#0F0F0F`) — editorial, not discount-loud
- Pretendard variable type stack in a black→gray scale
- Soft rounded geometry — `12px` CTA radius, `8px` cards
- Photographic, content-forward marketplace: imagery carries the page

## 2. Color Palette & Roles

Colors below are extracted from live computed styles on myrealtrip.com (2026-05-19) plus the MyRealTrip product team's published color-system writeup. The brand uses a documented gray scale (`gray_300`–`gray_700` tokens observed in markup).

### Brand / Interactive
- **MRT Blue** (`#2B96ED`): Primary interactive — login/signup CTA, primary buttons, active states. Observed `rgb(43, 150, 237)` on the header CTA, 12px radius.
- **Science Blue** (`#0250CB`): Deep brand blue (per Brandfetch / brand assets) — logo, hero, marketing lockups. The gravity blue, distinct from the lighter UI `#2B96ED`.
- **Blue Pressed** (`#1583DB`): Hover/pressed for MRT Blue. Observed `rgb(21, 131, 219)`.

### Accent (Promotional)
- **MRT Violet** (`#8238FA`): Membership, benefits, special-offer surfaces and badges — the most-frequent accent in the home feed. Observed `rgb(130, 56, 250)`.

### Surfaces
- **Canvas White** (`#FFFFFF`): Page background, card surfaces.
- **Header Frosted** (`rgba(248,248,248,0.8)`): Translucent sticky header background.
- **Surface Tint** (`#F8F8F8`): Section bands, subtle grouping fills.
- **Blue Tint** (`#F0F6FE`): Informational blue-tinted blocks.

### Text
- **Text Primary** (`#0F0F0F`): Wordmark, headings, primary labels. Observed `rgb(15, 15, 15)` on logo.
- **Text Body** (`#333333`): Body copy, card titles.
- **Text Secondary** (`#767676`): Metadata, secondary nav, captions. Observed `rgb(118, 118, 118)`.
- **Text Tertiary** (`#999999`): Placeholder, fine print, disabled labels.

### Borders & Dividers
- **Border Default** (`#E5E5E5`): Card borders, dividers, input outlines.
- **Border Strong** (`#D1D1D1`): Emphasized borders, active outlines.

### Semantic
- **Success / Confirm** (`#22C55E`): Instant-confirm badge ("즉시확정"), booking confirmed.
- **Discount / Sale** (`#FF4D4F`): Discount percentages, sale tags.
- **Warning** (`#FAAD14`): Pending, attention-needed.

## 3. Typography Rules

### Font Stack
```
Pretendard (variable, self-hosted), -apple-system, "system-ui", Roboto, "Noto Sans KR", "Malgun Gothic", sans-serif
```

Pretendard leads as a self-hosted variable face (observed `__pretandard_*` font-face names), with system fallbacks. All rendering is black-to-gray on white.

### Type Scale (observed home + listing surfaces)

| Role | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| Hero | 32–40px | 700 | 1.25 | Home hero, campaign titles |
| Section Heading | 22–24px | 700 | 1.35 | "투어·티켓", "숙소" row headers |
| Card Title | 16px | 600 | 1.4 | Tour/accommodation card titles |
| Body | 14px | 400 | 1.5 | Descriptions, list copy |
| CTA / Label | 14px | 600 | 1.4 | Buttons (login CTA observed 14px/600), nav |
| Price | 16–18px | 700 | 1.3 | Price emphasis on cards |
| Caption | 12px | 400 | 1.4 | Metadata, badges, fine print |

### Conventions
- **700 for headings and prices, 600 for CTAs/card titles, 400 for body** — prices get heading-level weight because they're the decision.
- **Black headline, gray body** — `#0F0F0F` → `#333333` → `#767676` hierarchy.
- **Discount numerals are loud** — `15%`, `10%` rendered in sale-red with emphasis weight.
- **Korean-primary, English secondary** — Korean copy is first-class; English used in language-toggle parity, not as default.

## 4. Component Stylings

### Buttons

**Primary CTA (로그인 및 회원가입 / 예약하기)**
- Background: `#2B96ED`
- Text: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 0 24px
- Font: 14px / 600 / Pretendard
- Hover: background `#1583DB`
- Use: Login/signup, primary booking action — observed 40px tall in header

**Membership / Promo CTA**
- Background: `#8238FA`
- Text: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 0 24px
- Font: 14px / 600 / Pretendard
- Use: Membership join, benefit/offer CTAs — the violet accent

**Secondary / Outline**
- Background: `#FFFFFF`
- Text: `#2B96ED`
- Border: 1px solid `#2B96ED`
- Radius: 12px
- Padding: 0 24px
- Font: 14px / 600 / Pretendard
- Use: Secondary action paired with the filled primary

**Ghost / Text**
- Background: transparent
- Text: `#333333`
- Border: none
- Radius: 8px
- Font: 14px / 600 / Pretendard
- Use: Tertiary nav, "더보기"

### Inputs

**Search / Text Field**
- Background: `#FFFFFF`
- Text: `#0F0F0F`
- Border: 1px solid `#E5E5E5`
- Radius: 12px
- Padding: 12px 16px
- Font: 14px / 400 / Pretendard
- Placeholder: `#999999`
- Focus: border `#2B96ED`
- Use: Destination/keyword search, form fields

### Cards

**Tour / Product Card**
- Background: `#FFFFFF`
- Border: 1px solid `#E5E5E5` (or shadowless on tinted bands)
- Radius: 8px
- Padding: 0 (image-led) + 12px text region
- Shadow: `0 2px 8px rgba(0,0,0,0.06)` on hover
- Use: The marketplace atom — image top, title + rating + price below

**Accommodation Card**
- Background: `#FFFFFF`
- Border: 1px solid `#E5E5E5`
- Radius: 8px
- Padding: 0 + 12px text
- Use: Hotel/stay listing, same rhythm as tour card

### Badges / Chips

**Instant-Confirm Badge (즉시확정)**
- Background: `rgba(34,197,94,0.12)`
- Text: `#22C55E`
- Border: none
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 600 / Pretendard
- Use: "✨즉시확정" instant booking flag

**Discount Tag**
- Background: transparent
- Text: `#FF4D4F`
- Font: 14px / 700 / Pretendard
- Use: "15%", "10%" discount percentages on cards

**Category Chip**
- Background: `#F8F8F8`
- Text: `#333333`
- Border: none
- Radius: 999px
- Padding: 6px 14px
- Font: 13px / 500 / Pretendard
- Use: Category filters (투어·티켓 / 숙소 / 패키지 / 한인민박)

### Tabs / Nav

**Top Nav Item**
- Active text: `#0F0F0F` (weight 600)
- Inactive text: `#767676`
- Indicator: bottom bar `#2B96ED` 2px (on active)
- Font: 14px / 500–600 / Pretendard
- Use: Category navigation in the frosted header

### Toasts

**Snackbar**
- Background: `#0F0F0F`
- Text: `#FFFFFF`
- Radius: 8px
- Padding: 12px 16px
- Use: "찜 목록에 추가했어요" transient feedback

### Dialogs

**Modal / Bottom Sheet**
- Background: `#FFFFFF`
- Text: `#0F0F0F`
- Radius: 16px (top corners on sheet)
- Padding: 24px
- Backdrop: `rgba(0,0,0,0.5)`
- Use: Login, date picker, option selection

---

**Verified:** 2026-05-19
**Tier 1 sources:** myrealtrip.com (live computed styles via Playwright — primary CTA `#2B96ED` (rgb 43,150,237) / 12px radius / 14px·600 / 40px tall; violet accent `#8238FA` (rgb 130,56,250) most-frequent feed color; blue pressed `#1583DB` (rgb 21,131,219); wordmark `#0F0F0F` (rgb 15,15,15); secondary glyph `#767676` (rgb 118,118,118); header bg `rgba(248,248,248,0.8)`; font self-hosted Pretendard `__pretandard_*`; bg white).
**Tier 2 sources:** Brandfetch (myrealtrip.com) — brand "Science Blue" `#0250CB`, White `#FFFFFF`, Woodsmoke `#141719`; MyRealTrip product Medium (medium.com/myrealtrip-product/color-system) — documented flexible color system + gray-scale tokens (`gray_300`–`gray_700` observed in markup).
**Conflicts unresolved:** Brand blue split — Brandfetch lists deep `#0250CB` (Science Blue) as primary brand; live UI primary action is the lighter `#2B96ED`. Resolved as distinct surfaces: `#0250CB` = logo/marketing gravity, `#2B96ED` = interactive UI (Toss brand-vs-UI-blue precedent). `primary_color` frontmatter set to the live interactive `#2B96ED`.

## 5. Layout Principles

### Page Structure
- Frosted sticky header (~64px) over a centered max-width content column (~1200px).
- Home feed is a stack of horizontally-scrolling product rows ("투어·티켓", "숙소", "패키지") with section headers.

### Spacing
- Base unit 8px; common values 4 / 8 / 12 / 16 / 24 / 32 / 40.
- Card gutter ~16px; vertical gap between sections ~40px.
- Page horizontal padding ~24px desktop, 16px mobile.

### Density
**Medium-density, image-forward.** Cards pack 3–4 per row at desktop with generous imagery; text regions are compact. Detail/booking pages loosen up for trust (price breakdown, policy, reviews get breathing room).

### Border Radius Scale
- Small (6px): badges
- Standard (8px): cards, ghost buttons
- Comfortable (12px): primary buttons, inputs
- Large (16px): modals, bottom sheets
- Pill (999px): category chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | no shadow | Page bg, inline elements, cards on tinted bands |
| Subtle | `0 1px 3px rgba(0,0,0,0.04)` | Resting cards |
| Hover | `0 2px 8px rgba(0,0,0,0.06)` | Card hover lift |
| Floating | `0 4px 16px rgba(0,0,0,0.1)` | Dropdowns, sticky CTA bar |
| Modal | `0 8px 24px rgba(0,0,0,0.16)` | Dialogs, bottom sheets |

Shadows are light and neutral — the frosted header (`backdrop-filter: blur`) is the most distinctive depth cue, separating sticky chrome from the scrolling photographic feed beneath without a hard border.

## 7. Do's and Don'ts

### Do
- Use `#2B96ED` for primary interactive actions; reserve deep `#0250CB` for logo/marketing.
- Use `#8238FA` violet only for membership/benefit/offer surfaces.
- Keep the canvas white and let photography carry the page.
- Render prices at heading weight (700) — they're the decision.
- Use the frosted translucent header over scrolling content.

### Don't
- Don't fill UI buttons with the deep Science Blue (`#0250CB`) — that's brand gravity, not UI action.
- Don't overuse violet — it's the offer accent, not a second primary.
- Don't bury the price; never render it lighter than the title.
- Don't add hard borders to the sticky header — the blur is the separation.
- Don't shout with sale-red across non-discount UI.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Single-column feed, ~1.5 cards peeking per row, bottom tab nav, full-width sticky CTA |
| Tablet | 768–1024px | 2–3 cards per row, condensed header |
| Desktop | >1024px | 3–4 cards per row, full frosted header, ~1200px content |

### Touch & Media
- Cards swipeable in carousels on touch; chevron-driven on desktop.
- Sticky bottom CTA ("예약하기") with safe-area inset on product detail.
- Min 44px tap targets on controls.

### Image Behavior
- Product images 4:3 or 1:1, `object-fit: cover`, lazy-loaded, rounded 8px top.
- Hero campaigns full-bleed with text overlay.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: MRT Blue `#2B96ED` (pressed `#1583DB`)
- Brand/logo: Science Blue `#0250CB`
- Promo/membership: Violet `#8238FA`
- Canvas: White `#FFFFFF`; tint `#F8F8F8`; blue tint `#F0F6FE`
- Text: `#0F0F0F` → `#333333` → `#767676` → `#999999`
- Border: `#E5E5E5`; focus `#2B96ED`
- Confirm green `#22C55E`; sale red `#FF4D4F`; warning `#FAAD14`

### Example Component Prompts
- "Build a MyRealTrip primary button: bg `#2B96ED`, white text 14px weight 600, 12px radius, padding 0 24px, 40px tall. Hover bg `#1583DB`."
- "Create a MyRealTrip tour card: white bg, 1px border `#E5E5E5`, 8px radius. Image top (4:3, cover, rounded 8px top). Below: title (16px weight 600 `#0F0F0F`), rating + review count (12px `#767676`), price (16px weight 700 `#0F0F0F`), discount `15%` (14px weight 700 `#FF4D4F`), instant-confirm badge (bg `rgba(34,197,94,0.12)`, text `#22C55E`, 6px radius). Hover shadow `0 2px 8px rgba(0,0,0,0.06)`."
- "Design a membership CTA: bg `#8238FA`, white text 14px weight 600, 12px radius — for benefit/offer surfaces only."
- "Create the frosted header: bg `rgba(248,248,248,0.8)`, backdrop-filter blur, no hard border, near-black wordmark `#0F0F0F`, category nav (active `#0F0F0F` weight 600 with 2px `#2B96ED` underbar, inactive `#767676`)."

### Iteration Guide
1. Blue `#2B96ED` for action, deep `#0250CB` for brand only, violet `#8238FA` for offers.
2. White canvas; photography is the color.
3. Pretendard stack first.
4. Prices at 700 weight — never quieter than the title.
5. Radius: 12px buttons/inputs, 8px cards, 16px sheets, 999px chips.
6. Frosted blur header over scrolling feed; no hard border.
7. Sale-red stays inside discount contexts.

---

## 10. Voice & Tone

MyRealTrip speaks like a well-traveled friend helping you plan the trip that's truly *yours* — warm, encouraging, second-person, with the post-2023 "진짜 나다운 여행" (real, you-shaped travel) thesis running through every line. The register is friendly-polite Korean with `~요`/`~어요` endings (`찜 목록에 추가했어요`, `이 여행, 어때요?`), never the stiff travel-agency `~습니다` except in policy/legal. Korean is primary; English exists for inbound and the language toggle. Copy centers the traveler's intent — *your* trip, *your* taste, *your* moment — not the platform's inventory size.

| Context | Tone |
|---|---|
| CTAs | Short Korean verb form (`예약하기`, `로그인`, `둘러보기`, `찜하기`). |
| Discovery | Encouraging, second person (`이런 여행은 어때요?`, `취향저격 추천`). |
| Success toasts | Past-tense soft ending (`찜 목록에 추가했어요`). No emoji on system chrome. |
| Error messages | Blameless, specific, one action (`예약 정보를 다시 확인해 주세요`). Never `오류가 발생했습니다`. |
| Empty states | Warm explanation + one action (`아직 찜한 여행이 없어요. 마음에 드는 여행을 담아보세요`). |
| Price / policy | Exact numbers + clear conditions; honest about fees and cancellation. |
| Legal / terms | Formal `~합니다` register — the exception to the warm default. |

**Forbidden phrases.** `오류가 발생했습니다` (generic error), `죄송하지만` on non-destructive failures, hidden-fee vagueness on price, pressure CTAs (`지금 예약하세요!` → `예약하기`), superlatives (`최저가 보장!` style) on UI chrome unless contractually true, English-first strings on Korean surfaces.

**Voice samples.**
- `로그인 및 회원가입` — header primary CTA, observed live on the `#2B96ED` button. <!-- verified: myrealtrip.com via Playwright 2026-05-19 -->
- `투어·티켓` / `숙소` / `패키지` / `한인민박` — category nav labels, observed live. <!-- verified: myrealtrip.com via Playwright/WebFetch 2026-05-19 -->
- `진짜 나다운 여행` — page-title tagline (`<title>진짜 나다운 여행 - 마이리얼트립</title>`), the post-rebrand brand line. <!-- verified: page title via Playwright 2026-05-19 -->
- `찜 목록에 추가했어요` — illustrative wishlist-add toast, soft `~요` ending. <!-- illustrative: not verified verbatim -->

## 11. Brand Narrative

MyRealTrip (마이리얼트립) is operated by **MyRealTrip Co., Ltd.**, founded by **Lee Dong-geon (이동건)** in 2012. It began as a peer-to-peer marketplace connecting Korean outbound travelers with **Korean-speaking local guides abroad** — "real trips" led by real people, the opposite of the packaged group bus tour. That origin explains the name and the brand: travel that is personal, guided by someone who actually lives there, shaped around what *you* want to do. Over the 2010s it expanded from guided tours into a full travel super-app — flights, hotels, tours and tickets, packages, and 한인민박 (Korean-run guesthouses) — becoming one of Korea's largest travel platforms. ([about.myrealtrip.com](https://about.myrealtrip.com/) — company; [thevc.kr/myrealtrip](https://thevc.kr/myrealtrip/products) — product history)

In **2023 the company rebranded** around the idea of *"My"* — visually expanding the wordmark and tightening the system into the bright, photographic, editorial marketplace it is today. ([designcompass.org rebrand writeup](https://designcompass.org/en/2023/08/11/myrealtrip-rebrand/)) The product team has publicly documented its engineering culture, including a writeup on building a *flexible, shareable color system* for efficient cross-team collaboration ([medium.com/myrealtrip-product](https://medium.com/myrealtrip-product/color-system-f8b7607ba57)) — evidence that the design system is a deliberate, maintained artifact, not an accident of templates.

What MyRealTrip refuses: the discount-shouting, banner-stuffed aesthetic of legacy OTAs (the rebrand pulled it toward editorial calm), the impersonal "inventory firehose" feed, and the one-size group-tour packaging it was founded to replace. The two-accent system — trustworthy blue for action, delightful violet for benefits — is the visual form of its promise: booking should feel both safe and joyful.

## 12. Principles

1. **Travel is yours, so the UI is personal.** Copy and discovery center the traveler's intent, not the catalog. *UI implication:* `취향저격 추천`, `이런 여행 어때요?`, not `인기 상품`. Lead with the user.

2. **Two accents, two jobs.** Blue (`#2B96ED`) is trust-and-action; violet (`#8238FA`) is offers-and-delight. *UI implication:* Never use violet for a generic primary CTA, never use blue for a "membership benefit" flag. Each color keeps its meaning.

3. **Photography is the page; chrome is calm.** Imagery carries color and emotion; chrome stays near-monochrome. *UI implication:* White canvas, near-black wordmark, gray nav. Don't compete with the travel photos.

4. **The price is the decision.** Price gets heading weight and clarity; fees are honest. *UI implication:* Price at 700 weight, discounts visible, no hidden-fee vagueness. Trust is the conversion lever.

5. **Brand gravity vs. UI action are different blues.** Deep `#0250CB` carries the wordmark; lighter `#2B96ED` carries the tap. *UI implication:* Don't fill buttons with Science Blue; don't logo-lockup with the UI blue.

## 13. Personas

*Personas are fictional archetypes informed by publicly described MyRealTrip user segments (Korean outbound and domestic travelers), not individual people.*

**현우 (Hyun-woo), 31, Seoul.** Plans an annual overseas trip and books tours, tickets, and a 한인민박 through MyRealTrip in one session. Values instant-confirm ("즉시확정") and Korean-language support abroad. Compares prices but converts on trust signals — reviews, clear cancellation policy.

**예린 (Ye-rin), 26, Seongnam.** Frequent short-haul traveler (Japan, Southeast Asia). Discovers experiences through the home feed's curated rows and "취향저격" recommendations. Joins membership for the violet-flagged benefits. Books almost entirely on mobile.

**정아 (Jeong-a), 45, Daegu.** Plans family trips. Wants a one-stop flow — flights + hotel + a kid-friendly tour — without juggling apps. Reads every fee line; abandons if the price feels unclear. The honest price breakdown is why she completes the booking.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no wishlist)** | Single warm line `#767676` (`아직 찜한 여행이 없어요`) + one blue CTA (`여행 둘러보기`). |
| **Empty (search no results)** | `#767676` caption (`검색 결과가 없어요. 다른 키워드로 찾아보세요`) + suggested categories. |
| **Loading (feed first paint)** | Card-shaped skeleton blocks at `#F2F2F2` matching listing layout, subtle shimmer. |
| **Loading (search submit)** | Inline spinner in `#2B96ED` on the search button; content stays. |
| **Error (inline field)** | Input border `#FF4D4F`, caption below in red, one actionable sentence (`예약 정보를 다시 확인해 주세요`). |
| **Error (toast)** | `#0F0F0F` bg, white 14px text, 3s dismiss, one sentence, no icon. |
| **Error (payment)** | Dedicated screen: `#0F0F0F` heading, clear reason, retry button `#2B96ED`. Never blames the user. |
| **Success (wishlist add)** | Snackbar `#0F0F0F` + white text (`찜 목록에 추가했어요`), heart fills, 3s dismiss. |
| **Success (booking confirmed)** | Dedicated confirmation screen — green `#22C55E` check, booking number, date, single `확인` CTA. Never a toast. |
| **Skeleton** | `#F2F2F2` blocks at exact card dimensions, 8px radius, ~1.2s shimmer. |
| **Disabled (button)** | Background `rgba(43,150,237,0.4)`, white text; geometry stable. |

## 15. Motion & Easing

MyRealTrip's motion is friendly and smooth — gentle reveals and lifts, optimistic but never gimmicky. The frosted header and card hovers are the signature moments.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle/checkbox, heart fill |
| `motion-fast` | 150ms | Hover lift, button press, chip select |
| `motion-standard` | 250ms | Card hover, sheet open, tab switch |
| `motion-slow` | 350ms | Page-to-detail, hero crossfade |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default — most motion |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, modals, toasts appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Spring stance.** Spring/overshoot is reserved for small delight moments only (heart-favorite pop). Booking and navigation flows use standard easing — a travel-booking app must feel trustworthy, and overshoot on a price or a confirm would read as unserious.

**Signature motions.**
1. **Card hover lift.** Card raises with `0 2px 8px rgba(0,0,0,0.06)` shadow and a ~2px translate-up over `motion-standard / ease-standard`. Image stays crisp.
2. **Header frost-on-scroll.** Header transitions from transparent to `rgba(248,248,248,0.8)` + `backdrop-filter: blur` over `motion-fast` as content scrolls under it.
3. **Wishlist heart.** On tap, the heart fills instantly and pops to ~1.2 scale, settling over `motion-fast / ease-spring`. The one licensed spring.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, lifts and slides collapse to instant; skeletons go static `#F2F2F2`. No exceptions.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 (UI tokens, §1–9): myrealtrip.com live computed styles via Playwright
MCP, 2026-05-19. Confirmed: primary CTA `#2B96ED` (rgb 43,150,237) 12px radius
14px·600 40px tall; violet accent `#8238FA` (rgb 130,56,250) most-frequent feed
color; blue pressed `#1583DB`; wordmark/logo `#0F0F0F` (rgb 15,15,15);
secondary glyph `#767676`; header bg `rgba(248,248,248,0.8)`; self-hosted
Pretendard variable (`__pretandard_*`); white bg. Page title
`진짜 나다운 여행 - 마이리얼트립`.

Tier 2: Brandfetch (myrealtrip.com) lists brand "Science Blue" `#0250CB`,
White, Woodsmoke `#141719`. MyRealTrip product Medium documents a flexible
color system (medium.com/myrealtrip-product/color-system). designcompass.org
documents the 2023 "My" rebrand. about.myrealtrip.com / thevc.kr for company
history (founder Lee Dong-geon, founded 2012, guide-marketplace origin). Not
all re-verified against primary MRT press.

Brand-blue split (`#0250CB` brand vs `#2B96ED` UI) flagged in §4 footer as a
distinct-surface resolution (Toss precedent). frontmatter primary_color set to
the live interactive blue `#2B96ED`.

Voice samples: `로그인 및 회원가입`, category labels, and `진짜 나다운 여행`
verified live. `찜 목록에 추가했어요`, `이런 여행 어때요?`, empty/error copy
are ILLUSTRATIVE patterns following MRT's warm `~요` register; not verbatim.

Personas (§13) are fictional archetypes. Any resemblance to specific users is
unintended.
-->
