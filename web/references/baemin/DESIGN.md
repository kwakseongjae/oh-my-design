---
omd: 0.1
brand: Baemin
---

# Design System Inspiration of Baemin (배달의민족)

## 1. Visual Theme & Atmosphere

Baemin is Korea's beloved food delivery platform -- a brand that turned ordering takeout into a cultural experience through typography, humor, and a fiercely distinctive mint green. The interface opens on a clean white canvas (`#ffffff`) with warm dark headings (`#212529`) and that unmistakable Baemin Mint (`#2AC1BC`) that feels like no other app. This isn't the utilitarian teal of medical software; it's a warm, playful cyan-green chosen specifically because the food industry conventionally uses warm reds and oranges -- Baemin is the deliberate contrast.

Typography IS the brand. Where most companies treat fonts as infrastructure, Baemin has released over a dozen custom typefaces -- each one preserving disappearing Korean signage culture. From the 1960s acrylic-cut Hanna (한나체) to the weathered Euljiro district lettering (을지로체), every font tells a story. But for the functional UI itself, the system uses the platform's native sans-serif -- brand fonts appear only in promotional banners and splash screens, creating a layered personality where the app is professional but the brand is warm and irreverent.

The design philosophy is "playful warmth." The UX writing is legendary in Korea for its conversational wit ("배민다움"), and the illustration-based icon system uses appetizing, sketch-like drawings rather than flat geometric icons. The overall impression is of a neighborhood restaurant's charm scaled to a platform serving millions.

**Key Characteristics:**
- Baemin Mint (`#2AC1BC`) as the singular brand accent -- warm, fresh, deliberately counter-industry
- 10+ custom open-source fonts (OFL) preserving Korean signage culture -- brand display only
- System fonts for functional UI, brand fonts for personality moments
- Card-based layout composition -- "all information composed of card-format combinations"
- Illustration-based icons: appetizing, hand-drawn feel over flat minimalism
- Conversational UX writing ("배민다움") -- witty, warm, human
- Five-variant shadow system (Natural through Crisp) for nuanced elevation

## 2. Color Palette & Roles

### Primary
- **Baemin Mint** (`#2AC1BC`): Primary brand color, CTA backgrounds, active states. Warm cyan-green, instantly recognizable. Official spec: CMYK 65:0:29:0 (hex is approximate).
- **Pure White** (`#ffffff`): Page background, card surfaces. Clean and appetizing.
- **Dark Charcoal** (`#212529`): Primary heading and text color. Warm, not harsh.

### Accent
- **Primary Teal** (`#12B886`): UI primary green, confirmation button fills, positive accents.
- **Teal Light** (`#20C997`): Hover states on teal elements, lighter accent.
- **Destructive Red** (`#FF6B6B`): Error states, destructive actions, out-of-stock indicators.
- **Warning Orange** (`#FFB347`): Attention-needed states, delivery delays, star ratings.
- **Info Blue** (`#74C0FC`): General information, order status updates.
- **Promo Red** (`#FF0000`): High-urgency alerts, promotional countdown timers.

### Neutral Scale
- **Text Primary** (`#212529`): Headings, menu item names, strong labels.
- **Text Secondary** (`#495057`): Body text, descriptions, ingredient lists.
- **Text Tertiary** (`#868E96`): Captions, timestamps, secondary metadata.
- **Text Disabled** (`#ADB5BD`): Placeholder text, disabled labels.
- **Border Light** (`#DEE2E6`): Standard card borders, dividers, input borders.
- **Surface Fill** (`#F8F9FA`): Background fill, secondary canvas.
- **Surface Subtle** (`#F1F3F5`): Tertiary background, input fills.

### Surface & Borders
- **Border Default**: `#DEE2E6`. Card borders, list dividers.
- **Border Strong**: `#343A40`. High-contrast borders for emphasis.
- **Overlay**: `rgba(0,0,0,0.5)`. Modal/sheet backdrops.
- **Overlay Dark**: `rgba(0,0,0,0.7)`. Full-screen image viewers.

## 3. Typography Rules

### Font Family
- **UI Primary**: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", sans-serif`
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace`
- **Brand Display**: `"BMHANNA Pro"` -- signature Baemin font for brand headings and promotional banners
- **Brand Playful**: `"BMJua"` -- rounded, friendly, for casual brand copy

All 12 Baemin fonts are free under OFL license. Four are on Google Fonts (Jua, Do Hyeon, Kirang Haerang, Yeon Sung). Hanna variants available via direct download from woowahan.com.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | BMHANNA Pro | 42px | 700 | 1.20 | normal | Splash screens, brand moments |
| Display Large | System | 36px | 700 | 1.25 | normal | Campaign titles, section heroes |
| Heading Large | System | 24px | 700 | 1.33 | normal | Feature section titles |
| Heading | System | 20px | 700 | 1.40 | normal | Card headings, menu categories |
| Title | System | 18px | 600 | 1.44 | normal | Restaurant names, item titles |
| Body Large | System | 16px | 400 | 1.50 | normal | Descriptions, menu details |
| Body | System | 14px | 400 | 1.57 | normal | Standard reading, reviews |
| Body Small | System | 13px | 400 | 1.54 | normal | Secondary info, ingredients |
| Caption | System | 12px | 400 | 1.50 | normal | Timestamps, delivery times |
| Price Display | System | 20px | 700 | 1.30 | normal | Menu item prices, order totals |

### Principles
- **Dual personality**: System fonts for functional UI (ordering, tracking, payments), brand fonts for the experiential layer (banners, promotions, splash). The separation keeps the app professional while the brand stays playful.
- **Bold for clarity**: In food ordering, weight 700 is used liberally for menu names, prices, and CTAs. Users scan quickly through many options.
- **All fonts are free**: Every Baemin typeface is available under OFL license for personal and commercial use.

## 4. Component Stylings

### Buttons

**Primary (Brand Mint)**
- Background: `#2AC1BC`
- Text: `#ffffff`
- Padding: 12px 24px
- Radius: 8px
- Font: 16px system weight 700
- Pressed: `#20A8A4` (darkened mint)
- Disabled: `#DEE2E6` background, `#ADB5BD` text
- Use: Primary CTAs ("주문하기", "배달 주문")

**Secondary (Ghost)**
- Background: transparent
- Text: `#2AC1BC`
- Border: 1px solid `#2AC1BC`
- Radius: 8px
- Pressed: `rgba(42,193,188,0.08)` background
- Use: Secondary actions ("장바구니", "찜하기")

**Neutral**
- Background: `#F8F9FA`
- Text: `#212529`
- Radius: 8px
- Use: Tertiary actions, filter toggles

**Destructive**
- Background: `#FF6B6B`
- Text: `#ffffff`
- Use: Cancel order, remove item

### Cards & Containers
- Background: `#ffffff`
- Border: 1px solid `#DEE2E6` or no border with shadow
- Radius: 8px (standard), 12px (featured restaurant cards)
- Shadow: `0px 2px 8px rgba(0,0,0,0.06)` (standard)

### Restaurant Cards (Key Component)
- Image: full-width, 16:9, 12px top radius
- Name: 18px weight 700, `#212529`
- Rating: star icon (`#FFB347`) + score 14px weight 600
- Delivery info: 13px weight 400, `#868E96`
- Tags: pill (9999px radius), `#F1F3F5` bg, `#495057` text, 12px
- Internal padding: 16px

### Tags & Badges
- **Category Tag**: `#F1F3F5` bg, `#495057` text, pill radius, 12px font weight 500
- **Promo Badge**: `#FF6B6B` or `#FFB347` bg, white text, 4px radius, 11px weight 700
- **Delivery Badge**: `#2AC1BC` bg, white text, 4px radius

### Inputs & Forms
- Border: 1px solid `#DEE2E6`, Radius: 8px
- Focus: 2px solid `#2AC1BC`
- Text: `#212529`, Placeholder: `#ADB5BD`
- Search bar: 20px radius, `#F8F9FA` background, search icon left

### Navigation
- Bottom tab bar: white, top border `#DEE2E6`
- Active: `#2AC1BC` icon + text, Inactive: `#868E96`
- Top app bar: white, centered title 18px weight 700
- Cart badge: `#FF6B6B` circle, white count text

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
- Card internal padding: 16px
- Section gaps: 24px-32px

### Grid & Container
- Mobile: full-width, 16px horizontal padding
- Content max-width: 768px for tablet/web
- Restaurant list: single-column on mobile, 2-column on tablet
- Category grid: horizontal scroll with equal-width items

### Whitespace Philosophy
- **Appetizing spacing**: Food photos get generous whitespace to feel premium. A cramped photo kills appetite; a well-spaced one invites exploration.
- **Scan-friendly density**: Restaurant lists balance showing 3-4 options per viewport with enough detail per card to decide without tapping.
- **Card-format composition**: All service information is composed of card-format combinations that auto-transform based on device.

### Border Radius Scale
- Standard (4px): Small badges, promotional tags
- Comfortable (8px): Buttons, inputs, standard cards
- Featured (12px): Restaurant cards, image containers
- Search (20px): Search bar, large rounded containers
- Pill (9999px): Category tags, filter chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline elements |
| Natural (Level 1) | `0px 1px 3px rgba(0,0,0,0.04)` | Subtle card separation, list items |
| Deep (Level 2) | `0px 2px 8px rgba(0,0,0,0.08)` | Standard restaurant cards |
| Sharp (Level 3) | `0px 4px 12px rgba(0,0,0,0.10)` | Floating cart button, active overlays |
| Outlined (Level 4) | `0px 4px 16px rgba(0,0,0,0.12)` | Bottom sheets, modal dialogs |
| Crisp (Level 5) | `0px 8px 24px rgba(0,0,0,0.16)` | Full-screen overlays, floating menus |

**Shadow Philosophy**: Baemin uses five tiers -- richer than most mobile apps, reflecting the layered nature of a delivery platform where maps, restaurant lists, order sheets, and cart overlays compete for attention. The naming (Natural, Deep, Sharp, Outlined, Crisp) reflects Baemin's design culture of using evocative, human language rather than cold technical terms.

## 7. Do's and Don'ts

### Do
- Use Baemin Mint (`#2AC1BC`) as the primary brand accent for CTAs and active states
- Apply brand fonts (BMHANNA, BMJua) for promotional banners and special moments only
- Use system fonts for the core ordering/tracking UI -- keep it functional
- Make food photography the star: generous whitespace, no overlapping UI on images
- Keep border-radius between 4px-12px for standard UI elements
- Use the conversational, warm tone for UX writing (Baemin voice)
- Use illustration-based icons for food categories -- appetizing over geometric

### Don't
- Don't use brand fonts for body text or functional UI -- they're for personality moments only
- Don't use heavy shadows on food photos -- let the photography speak
- Don't introduce competing accent colors alongside mint -- one-accent system
- Don't use cold, clinical blues for interactive elements -- warm mint territory
- Don't use pure black (`#000000`) for text -- `#212529` is the correct dark
- Don't apply mint to large background areas -- it works as an accent, not a canvas
- Don't make checkout/payment "fun" -- ordering should be clear and trustworthy

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <480px | Full design, single column, 16px gutter |
| Tablet | 480-768px | 2-column restaurant grid, expanded cards |
| Desktop (Web) | >768px | Centered content, max-width 768px |

### Touch Targets
- CTA buttons: minimum 48px height, full-width on mobile
- Restaurant cards: entire card tappable, min 120px height
- Category scrollers: 44px minimum touch height
- Cart floating button: 56px circular, fixed bottom-right
- Quantity steppers: 36px minimum

### Collapsing Strategy
- Restaurant grid: 2-column → single column below 480px
- Category bar: horizontal scroll on all sizes, no wrapping
- Order summary: full-width sheet on mobile, side panel on tablet+
- Search: full-screen overlay on mobile, inline on desktop

### Image Behavior
- Restaurant photos: 16:9 aspect ratio, full card width, 12px top radius
- Menu thumbnails: 1:1 square, 8px radius, 80-100px on mobile
- Promotional banners: full-width, swipeable carousel

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Baemin Mint (`#2AC1BC`)
- CTA Pressed: Deep Mint (`#20A8A4`)
- Alternate CTA: Teal (`#12B886`)
- Background: Pure White (`#ffffff`)
- Background Surface: Light Gray (`#F8F9FA`)
- Heading text: Dark Charcoal (`#212529`)
- Body text: Dark Gray (`#495057`)
- Caption text: Medium Gray (`#868E96`)
- Placeholder: Soft Gray (`#ADB5BD`)
- Border: Light Gray (`#DEE2E6`)
- Error: Warm Red (`#FF6B6B`)
- Rating: Warm Orange (`#FFB347`)

### Example Component Prompts
- "Create a restaurant card: white bg, 12px radius. Full-width photo (16:9, 12px top radius). Name 18px weight 700, #212529. Star icon (#FFB347) + rating 14px weight 600. Delivery time + fee 13px weight 400, #868E96. Tags as pills (#F1F3F5 bg, #495057 text). 16px padding."
- "Build a primary button: #2AC1BC bg, white text, 16px weight 700, 48px height, 8px radius, full-width. Pressed: #20A8A4."
- "Design a menu item row: 16px padding. Left: name (16px weight 600, #212529) + description (13px weight 400, #868E96, 2-line max) + price (16px weight 700). Right: 80px square thumbnail, 8px radius. Divider: 1px solid #DEE2E6."
- "Build a floating cart button: 56px circle, #2AC1BC bg, white cart icon. Badge: 18px circle, #FF6B6B bg, white text 11px weight 700, top-right. Shadow: 0px 4px 12px rgba(0,0,0,0.10)."
- "Design a search bar: #F8F9FA bg, 20px radius, 44px height. Left: 16px padding + #868E96 search icon. Placeholder '맛집을 검색해보세요' in #ADB5BD. Text: #212529. Full-width with 16px margin."

### Iteration Guide
1. System fonts for UI, BMHANNA for brand display moments only
2. Primary accent is `#2AC1BC` (Baemin Mint) -- warm, not cold
3. Food photography is centerpiece: 16:9 for restaurants, 1:1 for menu items
4. Bold (700) used liberally for names, prices, CTAs -- food ordering needs scannable bold
5. Border-radius: 8px buttons/inputs, 12px restaurant cards, pill for tags
6. Five shadow levels: use Deep (Level 2) as default card shadow
7. Warm neutrals: #212529 headings, #F8F9FA backgrounds

---

## 10. Voice & Tone

Baemin's voice is **warm, witty, unmistakably Korean-vernacular**. It talks to users the way a neighborhood delivery shop would — casual banmal register on marketing surfaces, polite 요-endings on functional UI, and a low-grade sense of humor Koreans call "B급 감성" that mixes retro signboard nostalgia with everyday slang. The copy is allowed to be playful because the *act* of ordering food is small and low-stakes; money, checkout, and delivery tracking drop the wit and become matter-of-fact. Korean is the primary voice — English UI strings are translations, not parity.

| Context | Tone |
|---|---|
| Marketing surfaces / campaign slogans | Wordplay, rhyme, Korean B급 감성 humor. "세상 모든 것이 식지 않도록" — evocative, never literal. <!-- verified: baemin.com hero campaign, 2026-04 --> |
| Category / service labels | Two- to four-character declarative nouns: `음식배달`, `B마트`, `선물하기`, `전국특가`. Never English acronyms on primary nav. <!-- verified: baemin.com, 2026-04 --> |
| CTAs on ordering flow | Short Korean verb form + 요 ending (`주문하기`, `장바구니에 담기`, `결제하기`). Imperative but not curt. |
| Empty states | Explain the *why* conversationally in one line, suggest one action. Lightly playful tolerated; never a blank "데이터 없음". |
| Error messages | Blameless + specific + actionable. Humor retreats here — a failed payment is never funny. |
| Success toasts | Past-tense single sentence (`주문이 접수됐어요`). Exclamation marks allowed in sparing quantity; emoji allowed in promo-only contexts. |
| Delivery tracking | Matter-of-fact, present tense (`가게에서 음식을 준비하고 있어요`, `라이더가 픽업했어요`). Progression is the drama; copy stays calm. |
| Promotional banners / push | Wordplay + rhyme licensed here. "지금 배민됩니다", "시켜도 시켜도 배달팁 무료 배민클럽!". <!-- verified: baemin.com, 2026-04 --> |
| Payment / refund / dispute | Formal 합니다 endings. Humor forbidden. The only surface where Baemin stops being funny. |

**Forbidden phrases.** `불편을 드려 죄송합니다` as a boilerplate opener (be specific instead), `Oops`, English `Sorry` on Korean UI, generic `데이터가 없습니다` / `오류가 발생했습니다`. On payment, refund, or delivery-dispute screens: rhyme, puns, and B급 감성 humor are all forbidden — the brand's playfulness is a marketing-surface privilege, not a universal voice. Never use Baemin Mint (`#2AC1BC`) as a decorative tone cue in text ("<span style="color:mint">재밌게</span>") — color is not voice.

**Representative voice samples.** Baemin's most quoted Korean copy (e.g., *"치킨은 살 안 쪄요, 살은 내가 쪄요"*) comes from the annual **배민신춘문예** user-submitted poetry contest — that string is a 2017 grand-prize entry by a Baemin user, [not a Baemin product string](https://www.ajunews.com/view/20170411135156182). When agents generate "Baemin-style" copy they should emulate the *register* (wordplay, rhyme, retro B급 감성) on marketing surfaces only, not quote the contest entries as if they were live UI.

- Hero campaign slogan (verified): *"세상 모든 것이 식지 않도록"* <!-- verified: baemin.com hero, 2026-04 --> — evocative, metaphorical; sets the tone for marketing headlines.
- Membership banner (verified): *"시켜도 시켜도 배달팁 무료 배민클럽!"* <!-- verified: baemin.com, 2026-04 --> — rhyme + repetition, classic Baemin marketing register.
- Gift service tagline (verified): *"마음을 배달해드려요"* <!-- verified: baemin.com 선물하기 section, 2026-04 --> — polite 요 ending, sentiment-forward.
- Payment speed claim (verified): *"10초 만에 결제 완료"* <!-- verified: baemin.com 배민페이, 2026-04 --> — matter-of-fact on functional surface; no humor.
- Empty state (cart): *"장바구니에 담긴 메뉴가 없어요. 드시고 싶은 메뉴를 담아보세요."* <!-- illustrative: not verified as live Baemin copy -->
- Error (payment failed): *"결제가 완료되지 않았어요. 카드 정보를 다시 확인해주세요."* <!-- illustrative: not verified as live Baemin copy -->
- Success (order placed): *"주문이 접수됐어요. 가게에서 확인 중이에요."* <!-- illustrative: not verified as live Baemin copy -->

## 11. Brand Narrative

Baemin (배달의민족) launched in 2010, founded by Kim Bong-jin (김봉진) and bootstrapped into Woowa Brothers (우아한형제들) after [Kim scanned restaurant flyers off the streets of Gangnam, Seoul](https://en.wikipedia.org/wiki/Baedal_Minjok) to build the first catalog. The app's name — a pun on "the people of delivery" (배달의 민족) that riffs on the Korean national-identity phrase "배달민족" (descendants of Dangun) — set the tone: a delivery app would be **vernacular Korean culture**, not a sterile logistics utility. Kim, whose graduate thesis was ["Font design reflecting Korea's indigenous visual culture"](https://en.sandoll.co.kr/Story/?bmode=view&idx=19495712), built the brand around typography as heritage — the **Baemin Hanna (한나체) typeface** was inspired by 1960s–70s Korean acrylic-cut shop signboards and named after his eldest daughter, Hanna.

From there Baemin grew into **Korea's largest food delivery platform** (2020 revenue ~₩1.09 trillion, ~US$960M <!-- source: base DESIGN.md context + Wikipedia, not re-verified this pass -->). [Delivery Hero announced its acquisition of Woowa Brothers in December 2019 and completed the deal in December 2020](https://en.wikipedia.org/wiki/Baedal_Minjok), conditional on Delivery Hero divesting its Korean subsidiary Yogiyo; Baemin continues to operate under its own brand and local leadership. Today the app spans food delivery, B마트 (instant grocery, 24/7), 선물하기 (gift delivery), 배민페이 (payments), 전국특가 (nationwide specials), and 배민클럽 (membership) — one interface, seven service verticals.

What Baemin refuses: the institutional seriousness of Korean legacy e-commerce (G마켓, 11번가 — dense banners, red sale-burst overlays, 90s Helvetica-derivative type); the **cold utility aesthetic** of Western delivery apps (DoorDash's flat gray, Uber Eats' corporate black); food-industry-standard warm reds and oranges. What it embraces: the deliberate **counter-industry mint green** (`#2AC1BC`), a fleet of **13+ free open-source fonts** preserving disappearing Korean signage culture, and the ethos captured in the company's four internal values — *[규율위의 자율, 스타보다 팀웍, 진지함과 위트, 열심만큼 성과](https://jiwon.app/blog/baemin-hiring-branding-culture)* (autonomy over discipline, teamwork over stars, seriousness with wit, results matched to effort). The third value — **진지함과 위트** (seriousness and wit) — is the one that shows up in the product.

## 12. Principles

1. **Wit on marketing, calm on money.** Campaign surfaces, promo banners, and empty states are licensed for wordplay, rhyme, and B급 감성 humor. Checkout, payment, refund, and dispute screens drop the wit entirely. *UI implication:* a single screen can host both registers if it spans both surfaces — the promo banner at the top can rhyme, the CTA at the bottom stays imperative-plain. Never mix tones inside the same sentence.

2. **Typography is heritage, not infrastructure.** Baemin's custom fonts (한나체, 주아체, 도현체, 을지로체, 기랑해랑체) exist to preserve Korean signboard vocabulary that would otherwise disappear. They are brand-presence fonts, not UI-text fonts. *UI implication:* system sans-serif for functional UI (menu lists, prices, forms, tracking); BMHANNA / BMJua for hero banners, splash screens, and promotional moments only. Never set body text in a Baemin custom font — the quirks that make it beautiful kill readability at 14px.

3. **Mint is the counter-industry signal.** `#2AC1BC` was chosen specifically because the food-delivery category defaults to warm reds and oranges. Mint is the brand's "we are not a logistics company" flag. *UI implication:* mint is an accent, not a canvas — use it for CTAs, active tab states, selection highlights, and the app-icon. Flooding a screen with mint (full-width mint hero backgrounds, mint card fills) erases the signal it was meant to carry.

4. **Food is the star; UI is the frame.** A restaurant card's job is to make the food photo appetizing. Chrome that crowds, overlays, or desaturates the photography fails the brief. *UI implication:* 16:9 photo at card-top, no text overlays on photos, no mint badges pinned inside the image area. Promo badges sit in the padding, not on the food.

5. **Scannable bold for decision screens.** Food ordering is a high-choice low-value decision (30+ options per list, tap in 1–2 seconds each). Users scan, not read. *UI implication:* 700-weight for restaurant names, prices, primary CTAs, and delivery ETAs. Reserve 400 for descriptions and metadata. Mid-weight 500/600 is allowed on titles and subtitles but not on scan-value items (names, prices).

6. **Progressive density, spacious summaries.** The home screen and category screens are spacious; the menu page and cart page are denser. *UI implication:* as the user commits (home → restaurant → menu → cart → checkout), horizontal padding tightens (16px → 12px) and row heights compress. The shallower the context, the more whitespace; the deeper, the more information per pixel.

7. **Card-format composition.** All service information is rendered as cards that recompose by device. *UI implication:* every major block (restaurant, menu item, promo, order summary) is a self-contained card with its own corner radius and padding. Two rules: cards never overlap, and adjacent cards never share a border — spacing between cards is the separator.

8. **Illustration over geometry for food categories.** Category icons are sketch-style illustrations (치킨, 피자, 한식) rather than flat geometric glyphs. *UI implication:* when category art is needed, use the hand-drawn illustration family (warm line weight, single-color ink on light background). Never swap to Material-style outline icons for category taxonomy — the warmth of the illustration is load-bearing brand.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Baemin user segments, not individual people.*

**지현 (Jihyun), 29, Seoul.** Marketing manager, lives in a Gangnam officetel. Opens Baemin 4–6 times a week — late-lunch when she skipped the office canteen, post-work dinner, late-night chicken with roommates. Taps the same 5–6 restaurants on repeat; the "Recent orders" row is her actual home screen. Refuses to wait more than 40 minutes for food — anything over 40 and she filters out the restaurant regardless of rating.

**대호 (Daeho), 38, Busan.** Runs a small ad agency with 4 employees. Uses Baemin for team lunches 2–3 times a week and for the occasional client dinner order. Cares about delivery tip transparency more than food price — a ₩1,000 tip variance matters when ordering for 5 people. Skeptical of promoted banners; actively scrolls past the hero carousel to reach the category row.

**수민 (Sumin), 22, Daegu.** University student, fourth year, Communications. Baemin is her default food app — she's never used Yogiyo, and treats the Baemin 배민신춘문예 contest as legitimate poetry. Orders small: solo lunches under ₩10,000, split chicken with one friend at 10pm. Reads the promo copy for fun before tapping through to order; the wordplay is part of why she opens the app even when she isn't hungry yet.

**지영 (Jiyoung), 45, Incheon.** Mother of two, orders through Baemin 3–4 times a week for family meals. Uses Baemin only in Korean — the English option is invisible to her. Primary need: 선물하기 to send grandparents in Gwangju food-gift certificates on holidays, and B마트 for last-minute kitchen items on weekends. Values receipts and can recite her household's monthly Baemin spend; a 20% delivery-fee jump would move her to a competitor.

## 14. States

*Copy strings below are illustrative treatments of Baemin's tone applied to each state except where marked verified. A production team should replace illustrative copy with Baemin's actual live strings before shipping.*

| State | Treatment |
|---|---|
| **Empty (first use, no orders)** | White canvas. One line of `#495057` body text (14px weight 400) in a lightly warm register (*"아직 주문한 내역이 없어요. 맛있는 걸 시켜볼까요?"* <!-- illustrative: not verified as live Baemin copy -->). Below: one mint (`#2AC1BC`) CTA *"주문하러 가기"*. No mascot illustration on functional surfaces. |
| **Empty (cart)** | Single line of `#868E96` caption (*"장바구니가 비어 있어요. 메뉴를 담아보세요."* <!-- illustrative -->). Cart icon above in `#DEE2E6` at 48px. No CTA — user navigates back themselves. |
| **Empty (search, no results)** | `#495057` body text, neutral and specific: *"'<query>' 검색 결과가 없어요. 다른 키워드로 찾아보시겠어요?"* <!-- illustrative -->. Suggested-category chips follow below. Never a "sorry" apology. |
| **Loading (restaurant list)** | Skeleton cards at exact final dimensions — `#F1F3F5` blocks for photo (16:9), name, and meta rows. Ratings skeleton shows as an 80px wide block, never a placeholder star. Shimmer ≤ 1.2s. |
| **Loading (map-tracking)** | Map renders first; rider icon pulses between two opacity values over 1.5s while position resolves. ETA text shows `--` until server returns, never a placeholder minute count. |
| **Loading (checkout / payment)** | Full-width button shows a 3-dot white animation replacing the label text. Button width does not change. User cannot double-tap; the press is committed. |
| **Error (inline field)** | 2px `#FF6B6B` border on the input. Error text below in red500 (13px weight 400). One actionable sentence (*"주소를 다시 확인해주세요"* <!-- illustrative -->). |
| **Error (payment declined)** | Modal (this is not a transient error). Headline 18px weight 700 `#212529`: *"결제가 완료되지 않았어요"* <!-- illustrative -->. Body 14px weight 400 explaining the cause (insufficient funds / card expired / 3DS failed). Two CTAs: *"다른 카드로 결제"* (primary mint) and *"취소"* (neutral). No humor on this surface. |
| **Error (network / service down)** | Top banner, `#343A40` bg, white text, one sentence (*"일시적으로 연결이 불안정해요"* <!-- illustrative -->) + retry pill. Banner auto-dismisses when connectivity returns. |
| **Success (order placed)** | Dedicated confirmation screen — not a toast. Mint checkmark icon top-center, order number in 16px weight 600 `#495057`, restaurant name in 20px weight 700 `#212529`, estimated delivery time in 14px weight 400. Single primary CTA *"주문 내역 보기"*. Ordering is ceremonial here — receipts matter. |
| **Success (item added to cart)** | Bottom toast, `#212529` bg, white 14px 400 text, 2.5s auto-dismiss (*"장바구니에 담겼어요"* <!-- illustrative -->). Floating cart button badge increments simultaneously. |
| **Skeleton** | `#F1F3F5` blocks at exact final card dimensions (16:9 photo slot, name row, meta row). Shimmer 1.2s. Ratings render as an 80px-wide block, never a placeholder star that could read as 0. Prices render as `---원` until resolved — never `0원`, which reads as "free" and misleads. |
| **Disabled** | Button background drops to `#DEE2E6`, text to `#ADB5BD`. Corner radius stays at 8px — never flattens or rounds to a different shape. Disabled state on the "주문하기" CTA shows *why* inline above the button (e.g., "최소 주문 금액 ₩12,000에 ₩3,000 부족해요" <!-- illustrative -->), not as a separate toast. |

## 15. Motion & Easing

Baemin's motion is **warm, responsive, and slightly playful** — a touch more kinetic than Toss's fintech restraint, a touch more disciplined than a social app. Spring and overshoot are **licensed in two narrow places only** (category icon tap feedback, favorite heart toggle) because Baemin's brand voice leans playful and the physicality of those two interactions reinforces the "neighborhood warmth" positioning. Everywhere else — checkout, delivery tracking, payment — motion is standard-easing and functional. A spring on the "결제하기" button would read as unserious with money; a spring on a chicken-category tap reads as a lightly tactile wink.

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle commits, checkbox state changes |
| `motion-fast` | 150ms | Hover, focus, button press overlay, image thumbnail tap |
| `motion-standard` | 250ms | The default — sheet opens, card expands, tab switches, toast appear |
| `motion-slow` | 400ms | Order-confirmation reveal, success checkmark stroke |
| `motion-page` | 300ms | Route transitions between top-level tabs |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — sheets, toasts, screen pushes |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals, pops |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — card expand/collapse, tab content |
| `ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | **Licensed only for:** category icon tap feedback and favorite heart toggle. Overshoot on CTAs, payment confirmation, or checkout transitions is forbidden — commerce precision outranks kinetic delight on money surfaces. |

**Signature motions.**

1. **Restaurant card tap feedback.** Card scales `1.0` → `0.98` over `motion-fast / ease-standard` on press, returns on release. Tactile but not bouncy.
2. **Category icon tap.** Icon scales `1.0` → `1.1` → `1.0` over `motion-standard` with `ease-bounce`. This is one of two places overshoot is allowed — the category row is where Baemin's warmth lives most visibly.
3. **Favorite heart toggle.** Heart icon fills over `motion-fast` with a brief scale pulse (`1.0` → `1.15` → `1.0`) using `ease-bounce`. Second and final licensed overshoot location.
4. **Bottom sheet presentation.** Sheets rise from `y+40px` with `motion-standard / ease-enter`, synchronized with backdrop fade from `rgba(0,0,0,0)` to `rgba(0,0,0,0.5)`. Dismissal uses `motion-fast / ease-exit` — leaving is lighter than arriving.
5. **Order confirmation success.** Mint checkmark draws over `motion-slow` with `ease-standard` (not `ease-bounce` — money-related completions stay precise). Card contents reveal below with a 100ms staggered fade.
6. **Floating cart button emerge.** When the cart transitions from empty to non-empty, the floating cart button rises from `y+20px` with a subtle scale-in (`0.9` → `1.0`) over `motion-standard / ease-enter`. Disappearance is a reversed fade, not a slide-out — the empty cart state shouldn't draw attention.
7. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. `ease-bounce` is suppressed entirely — category taps and favorite toggles swap to a crossfade. The app stays fully usable; motion is never load-bearing for comprehension.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Extracted 2026-04-20 via omd:add-reference AUGMENT mode.
Style reference: toss/DESIGN.md (auto-picked — 🇰🇷 KR region matrix).

Direct verification via WebFetch (2026-04-20):
- https://www.baemin.com/ — confirms hero campaign slogan "세상 모든 것이
  식지 않도록", 배민클럽 membership banner "시켜도 시켜도 배달팁 무료
  배민클럽!", 선물하기 tagline "마음을 배달해드려요", 배민페이 tagline
  "10초 만에 결제 완료", and the seven service verticals (음식배달, 배민클럽,
  B마트, 장보기・쇼핑, 선물하기, 전국특가, 배민페이). Used for §10 Voice & Tone
  verified samples and §11 Narrative service list.
- https://en.sandoll.co.kr/Story/?bmode=view&idx=19495712 — confirms the Baemin
  Hanna font origin story (1960s–70s acrylic-cut Korean signboard inspiration,
  named after Kim Bong-jin's eldest daughter Hanna, Sandoll renewal preserving
  "kitsch charm"), and references Kim's 2015 Master's thesis "Font design
  reflecting Korea's indigenous visual culture". Used for §11 Narrative.
- https://en.wikipedia.org/wiki/Baedal_Minjok — confirms 2010 founding by Kim
  Bong-jin, the flyer-scanning origin story from Gangnam streets, 2020 revenue
  ~₩1.09T (~US$960M), Delivery Hero acquisition announced Dec 2019 and
  completed Dec 2020 conditional on Yogiyo divestiture. Used for §11.
- https://www.ajunews.com/view/20170411135156182 — confirms "치킨은 살 안 쪄요,
  살은 내가 쪄요" is the 2017 배민신춘문예 grand-prize USER-SUBMITTED entry,
  not Baemin product UI copy. Used for §10 voice-samples framing paragraph.

KOREAN-SOURCE-ONLY (not bilingual — Korean blog / press only):
- https://jiwon.app/blog/baemin-hiring-branding-culture — Korean recruitment-
  culture analysis blog citing Woowa Brothers' four core values
  (규율위의 자율, 스타보다 팀웍, 진지함과 위트, 열심만큼 성과). English
  rendering in this file ("autonomy over discipline, teamwork over stars,
  seriousness with wit, results matched to effort") is a translation, not a
  citation of an English-language Woowa source — Woowa does not publish the
  four values on an English surface this augmentation verified. If a reader
  needs an English-official source, it must come from a future Woowa English
  culture page or a translated press release.

Base DESIGN.md (sections 1–9) is the source for all token-level claims:
Baemin Mint #2AC1BC, five-tier shadow system (Natural / Deep / Sharp /
Outlined / Crisp), the 13+ open-source OFL fonts, the 8px spacing base,
and the card-radius scale (4/8/12/20/pill).

Not independently verified in this session — widely documented public facts:
- Woowa Brothers (우아한형제들) was founded in 2010 by Kim Bong-jin.
- Baemin's custom font family includes 한나체, 주아체, 도현체, 을지로체,
  기랑해랑체, 연성체 (13 total free fonts under SIL OFL license).
- Delivery Hero acquisition: announced December 2019, regulatory approval
  granted December 2020 conditional on Yogiyo divestiture. Instructions
  cited 2019 as the acquisition year; per Wikipedia the announcement was
  Dec 2019 and the deal closed Dec 2020 — both dates are reflected here.

⚠️ THIN SOURCING WARNING (honored from instructions):
- 배민다움 is Korean-culture-famous but English-language documentation is
  thin. Voice register characterization ("warm, witty, unmistakably Korean-
  vernacular", "B급 감성") is a reasoned synthesis from Korean press, not
  a direct citation of an English Baemin brand guideline. A Baemin-published
  English voice & tone book would strengthen §10.
- Famous playful strings associated with Baemin in Korean media (e.g.,
  "치킨은 살 안 쪄요, 살은 내가 쪄요") are 배민신춘문예 CONTEST entries from
  users, not Baemin product copy. This file explicitly frames them that way
  in §10 to avoid fabricating a false provenance.
- Illustrative voice samples in §10 (empty cart, payment-failed, order-placed)
  and all illustrative state copy in §14 are written in Baemin's register but
  not verified as live baemin.com strings. A production team with access to
  the logged-in app should replace them with observed copy before shipping.

Personas (§13) are fictional archetypes informed by publicly described
Korean food-delivery user segments. Any resemblance to specific individuals
is unintended.

Interpretive claims (e.g., "Mint was chosen specifically because the food-
delivery category defaults to warm reds and oranges") are editorial readings
of the visual system, not direct Baemin brand-guideline statements.
-->
