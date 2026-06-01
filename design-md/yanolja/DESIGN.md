---
id: yanolja
name: Yanolja
country: KR
category: consumer-tech
homepage: "https://www.yanolja.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=yanolja.com&sz=128"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: Yanolja Brand Center
  url: "https://www.yanoljagroup.com/brand_center"
  type: brand
  description: Yanolja's official brand center — visual identity inspired by the Multiverse of Dreams.
  og_image: "https://www.yanoljagroup.com/common/assets/yanolja_colored_og_image.jpg"
---

# Design System Inspiration of Yanolja (야놀자)

## 1. Visual Theme & Atmosphere

Yanolja's interface is the digital equivalent of a Korean weekend getaway -- warm, energetic, and built around the simple proposition that **playing is the best thing you can do**. The home surface (now consolidated under the **NOL** consumer brand at `nol.yanolja.com`) opens on a clean white canvas (`#ffffff`) with deep near-black text (`#1E1928`) and the unmistakable **Yanolja Orange** (`#F54B1E`) -- a coral-leaning red-orange that sits halfway between a sunset and a hot pepper. This is not the corporate orange of fintech or the carrot orange of marketplace apps; it is the high-saturation, slightly-pink orange of leisure, of "let's go," of a discount sticker on a hotel banner.

The brand stack is built for a Korean leisure traveler in motion: thumb-zone CTAs, image-dominant lodging cards, prominent percentage discounts in coral, and category chips ("호텔", "펜션", "레저", "티켓", "특가") sized for one-handed scrolling. Underneath the consumer NOL surface sits a much larger group brand system (Yanolja Group / Yanolja Cloud B2B), but the master brand color remains constant across all of it. The system reads as **playful but not childish, dense but not cluttered** -- closer to a glossy travel magazine than to a utility app.

**Key Characteristics:**
- Yanolja Orange (`#F54B1E`) as the singular brand accent -- coral-red-orange, energetic, unmistakably leisure
- "Multiverse of Dreams" brand concept -- the symbol represents connection between travel and travelers
- Image-dominant lodging cards with prominent discount percentages in coral
- Korean-first microcopy with friendly `-요` endings ("어디로 갈까요?", "우리도 호캉스 갈까?")
- Mobile-first super-app architecture: hotels + leisure + tickets + live commerce + flights in one shell
- Clean white surfaces with warm near-black headings, no gradient-heavy chrome
- Discount-first information hierarchy: percentage badge before price, price before name
- 8px standard radius across cards, buttons, and badges -- not pill-heavy, not square-corner brutal

## 2. Color Palette & Roles

### Primary
- **Yanolja Orange** (`#F54B1E`): Primary CTA, brand accent, discount badges, active states. The signature coral-red-orange that defines every Yanolja and NOL touchpoint. Pantone 2028C/U.
- **Pure White** (`#ffffff`): Page background, card surfaces, modal panels.
- **Near Black** (`#1E1928`): Primary heading and text color. A warm dark with a hint of plum -- not pure `#000`, deliberately soft.

### Secondary (Brand Grays)
- **Light Sand** (`#F5EBE1`): Secondary surface, soft warm fill -- a brand-warm gray that pulls slightly toward orange in adjacent context.
- **Medium Gray** (`#8C8282`): Body and metadata text. Warm-leaning gray that complements the coral primary.
- **Deep Gray** (`#555055`): Strong body text, secondary headings.
- **Dark Gray** (`#1E1928`): Primary headings (same as Near Black).

### Discount & Promotion
- **Coral CTA** (`#F54B1E`): Discount percentage labels (`-45%`, `-86%`), live-deal badges (`라이브 단독!`), flash-sale tags (`플래시 특가`).
- **Coral Tint** (`~#FEEAE2`, derived): Soft promotional surfaces, brand-weak backgrounds for hero strips.

### Semantic (Inferred)
- **Critical Red** (`~#E5342B`): Error states, validation failures.
- **Informative Blue** (`~#2D8CFF`): Links and informational accents in body copy.
- **Positive Green** (`~#1FA873`): Confirmation states, "예약 완료" success.
- **Warning Amber** (`~#F2A600`): Deadline reminders, rate-change advisories.

### Surface & Borders
- **Border Default** (`rgba(30, 25, 40, 0.08)`): Card borders, dividers.
- **Border Strong** (`rgba(30, 25, 40, 0.16)`): Input borders, defined separators.
- **Overlay** (`rgba(0, 0, 0, 0.6)`): Modal backdrops, full-screen takeovers.

## 3. Typography Rules

### Font Family
- **Primary (Korean-first)**: `"Pretendard", "Apple SD Gothic Neo", "Malgun Gothic", -apple-system, BlinkMacSystemFont, sans-serif`
- **Latin fallback**: System sans (San Francisco / Roboto) for English numerals and Latin captions.
- **Design Principle**: Pretendard handles Korean and Latin in a single metric, which keeps mixed-script lodging titles ("그랜드 조선 부산", "Premier Suite") on a stable baseline. No custom display face -- the brand uses weight and color, not a typeface, to establish hierarchy.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Display | 28px | 700 | 36px | Hero promo headlines ("우리도 호캉스 갈까?") |
| Heading Large | 22px | 700 | 30px | Section headers ("인기 호텔 미리 예약!") |
| Heading | 18px | 700 | 26px | Card titles, list section headers |
| Title | 16px | 600 | 22px | Lodging name, primary list item |
| Body | 14px | 400 | 20px | Standard body, lodging description |
| Body Bold | 14px | 700 | 20px | Price (always bold), discount label |
| Caption | 12px | 400 | 16px | Metadata ("05.31까지", neighborhood, distance) |
| Caption Bold | 12px | 700 | 16px | Discount % badges, "라이브 단독!" tags |
| Micro | 11px | 500 | 14px | Legal, fine print |

### Principles
- **Discount-first weight rule**: Discount percentage and price are always weight 700; lodging name is 600; supporting metadata is 400. The eye reads `45% → 89,000원 → 그랜드 조선 부산` in that order.
- **Three weights only**: Regular (400), Semibold (600), Bold (700). No light, no extra-bold.
- **Korean-aware leading**: Line heights err generous (1.4-1.5) to accommodate Korean glyph density; tracking stays at 0em.
- **No italic**: Korean does not have native italic; the system avoids fake-slanting Latin fallbacks.

## 4. Component Stylings

### Buttons

**Brand Solid (Primary CTA)**
- Background: `#F54B1E` (Yanolja Orange)
- Text: `#ffffff`
- Radius: 8px
- Min-height: 52px (large), 44px (medium), 36px (small)
- Font: 16px weight 700 (large), 14px weight 700 (medium/small)
- Pressed: ~`#D63E14` (Yanolja Orange shade)
- Disabled: `#F5EBE1` background, `#8C8282` text
- Use: "예약하기", "결제하기", "지금 예매", main booking flow

**Neutral Outline**
- Background: transparent
- Text: `#1E1928`
- Border: 1px solid rgba(30, 25, 40, 0.16)
- Radius: 8px
- Pressed: `#F5EBE1` background
- Use: "관심 숙소", "다른 날짜 확인", secondary actions

**Neutral Weak**
- Background: `#F5EBE1`
- Text: `#1E1928`
- Radius: 8px
- Use: Tertiary actions, "더 보기", filter buttons

**Critical Solid**
- Background: `~#E5342B`
- Text: `#ffffff`
- Use: "예약 취소", destructive confirmations

### Inputs & Forms
- Background: `#ffffff` or `#F5EBE1` (search variant)
- Border: 1px solid rgba(30, 25, 40, 0.16)
- Radius: 8px
- Focus: 2px solid `#F54B1E` outline
- Text: `#1E1928`, Placeholder: `#8C8282`
- Search bar: pill or 8px radius, large 48-56px height with location icon left, "어디로 갈까요?" placeholder

### Cards (Lodging / Activity)
- Background: `#ffffff`
- Border: none (image edge defines the card)
- Radius: 8px (image and outer card)
- Shadow: `0 2px 8px rgba(30, 25, 40, 0.08)` on hover, flat at rest
- Layout: image-top (16:9 or 4:3), title-second, price-row-bottom
- Internal padding: 12-16px below image
- **Discount overlay**: top-left of image, coral `#F54B1E` background, white text, 4-6px radius, weight 700

### Badges & Tags
- **Discount badge**: `#F54B1E` bg / white text, 11-12px weight 700, 4px radius, padding 2px 6px
- **Status badge** ("라이브 단독!", "신규오픈", "MD추천"): coral bg or coral border + coral text, pill shape (9999px), 11px weight 600
- **Category chip** ("제주", "테마파크"): `#F5EBE1` bg / `#1E1928` text, pill, 32px height, 12-14px weight 500. Selected: `#F54B1E` bg / white text.
- **Ranking medal** (top-5 lists): circular, gold/silver/bronze for 1-3, gray for 4-5

### Navigation
- **Top bar**: white bg, sticky, 56-64px height, logo left (NOL or Yanolja wordmark), search center, profile/cart right
- **Bottom tab bar (mobile app)**: white bg, 5 tabs (홈 / 검색 / 찜 / 마이 / 장바구니), active = coral icon + label, inactive = `#8C8282`
- **Category strip**: horizontal scroll under search, icon + Korean label, 56-72px tap target

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64
- Global gutter: 16px on mobile, 24px on tablet, 32px on desktop web
- Card-to-card gap: 12-16px vertical, 8-12px horizontal in grids

### Grid & Container
- Mobile: full-width cards with 16px horizontal gutter
- Tablet: 2-column grid for lodging cards
- Desktop web (NOL): centered content, 1280px max-width, 3-4 column lodging grid
- Hero promo strips: edge-to-edge, no max-width, on home only

### Whitespace Philosophy
- **Image-dense, copy-dense, chrome-light**: The brand sells leisure through photography. Cards must show a hero image at full bleed with minimal frame. Text below is compact, weight-driven, never airy.
- **Discount visibility is sacred**: A lodging card without a visible discount % feels broken. Coral badges always sit top-left of image at minimum 24px tall.
- **Korean text density**: Korean glyphs are wider per character than Latin. Cards budget for 2 lines of 14-16px title + 1 metadata line + 1 price line; never expand to 3 title lines.

### Border Radius Scale
- Micro (4px): Discount badges, small chips
- Standard (8px): Buttons, inputs, cards
- Large (12px): Featured promo cards, prominent containers
- Sheet (16px): Bottom sheet top corners
- Pill (9999px): Category chips, status tags, search bar in some surfaces

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Default cards at rest, page surfaces |
| Soft (s1) | `0 2px 8px rgba(30, 25, 40, 0.08)` | Card hover, list-item lift |
| Standard (s2) | `0 4px 16px rgba(30, 25, 40, 0.12)` | Dropdowns, popovers, bottom-sheet |
| Prominent (s3) | `0 8px 24px rgba(30, 25, 40, 0.16)` | Modal dialogs, full-screen takeover |

**Shadow Philosophy**: Yanolja uses shadow as functional layering, not as brand expression. The brand's warmth comes from the coral primary and the photography in cards -- shadows are quiet, low-saturation, slightly plum-tinted (because the dark gray base is `#1E1928`, not pure black). Never colored shadows. Never inner shadows.

## 7. Do's and Don'ts

### Do
- Use Yanolja Orange (`#F54B1E`) for primary CTAs, discount badges, and active states -- and almost nowhere else
- Lead lodging cards with a full-bleed image -- the photo is the product
- Show discount % before price, price before name -- discount-first hierarchy
- Use Korean `-요` sentence endings in microcopy ("어디로 갈까요?", "확인해 드릴게요")
- Round to the 4px grid: 4, 8, 12, 16, 24, 32
- Pretendard for both Korean and Latin -- never split fonts mid-string
- Keep card chrome minimal -- the photo carries the visual weight

### Don't
- Don't use coral for body text, dividers, or backgrounds -- it is reserved for CTA, badge, and accent
- Don't put two coral CTAs on one viewport -- demote one to neutral outline
- Don't use pure black (`#000`) for text -- always `#1E1928`
- Don't add gradients to brand surfaces -- the system is flat-color, photo-driven
- Don't use formal `-습니다` endings in consumer copy -- the brand voice is friendly, not corporate
- Don't drop the discount badge to "save space" on a promo card -- it is the entire reason the card exists
- Don't skin Yanolja Orange into a "Yanolja Pink" or "Yanolja Red" variant -- the master color is `#F54B1E`, full stop

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <480px | Single-column cards, 16px gutter, sticky bottom tab bar |
| Mobile-large | 480-768px | 2-column lodging grid, expanded category strip |
| Tablet | 768-1024px | 3-column grid, search bar expands inline in nav |
| Desktop | >1024px | 4-column grid, max-width 1280px content, hover states activate |

### Touch Targets
- Buttons: 52px (large), 44px (medium), 36px (small)
- Bottom tab items: 56px height with icon + label
- Category chips: 32-40px height
- Search bar: 48-56px height (always thumb-friendly)
- Lodging card: full card is tappable (entire image + text region)

### Collapsing Strategy
- Search bar: full-width sticky on mobile, inline in nav above tablet
- Category strip: horizontal scroll on mobile, wrap to grid on desktop
- Lodging grid: 1 → 2 → 3 → 4 columns as width grows
- Bottom CTA bar (booking detail): sticky full-width on mobile with safe-area inset; inline beside content on desktop

### Image Behavior
- Lodging hero: 16:9 on cards, 4:3 on detail, full-bleed crop
- Activity card: square 1:1 with 8px radius
- Discount banner image: edge-to-edge no radius
- Avatar (host, reviewer): circular 9999px, 32-48px

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Yanolja Orange (`#F54B1E`)
- Discount badge: Yanolja Orange (`#F54B1E`)
- Background: White (`#ffffff`)
- Heading text: `#1E1928`
- Body text: `#555055`
- Caption text: `#8C8282`
- Soft fill: `#F5EBE1`
- Border: `rgba(30, 25, 40, 0.08)`

### Example Component Prompts
- "Create a Yanolja lodging card: white background, 8px radius. Top: full-bleed 16:9 hero image with 8px top-radius. Top-left of image: coral `#F54B1E` discount badge `45%` in white 12px weight 700, 4px radius. Below image: 16px padding. Title 16px weight 600 `#1E1928` (max 2 lines, ellipsis). Below title: 12px caption `#8C8282` neighborhood. Bottom row: discount % in coral 14px weight 700, then price `89,000원~` in `#1E1928` 16px weight 700."
- "Build a Yanolja primary booking CTA: `#F54B1E` background, white text, 16px weight 700, 52px min-height, 8px radius, full-width. Pressed: `#D63E14`. Disabled: `#F5EBE1` bg, `#8C8282` text."
- "Design a Yanolja category chip strip: horizontal scroll, 8px gap. Each chip: `#F5EBE1` bg, `#1E1928` text, 13px weight 500, 32px height, 9999px radius, 14px h-padding. Selected: `#F54B1E` bg, white text."
- "Create a Yanolja search bar: white bg, 1px border `rgba(30,25,40,0.16)`, 8px radius, 52px height. Left icon: 24px location pin `#1E1928`. Placeholder `어디로 갈까요?` `#8C8282` 16px weight 400. Focus: 2px coral outline."
- "Design a Yanolja discount banner card: full-bleed image, coral `#F54B1E` corner ribbon top-left with `라이브 단독!` white 12px weight 700. Below image: heading 18px weight 700 `#1E1928`, subheading 13px weight 400 `#555055`. CTA pill bottom-right: coral bg, white text, 36px height, 9999px radius."

### Iteration Guide
1. Master color is `#F54B1E` -- coral-red-orange. Not pink. Not carrot-orange. Not pure red.
2. Discount % comes before price; price comes before lodging name. Reorder if reversed.
3. Pretendard handles Korean + Latin together -- do not split fonts mid-line.
4. Card images are 16:9 hero -- never crop to square unless it's an activity tile.
5. Bottom tab bar persists on mobile; use sticky bottom CTA on detail screens with safe-area inset.
6. Korean `-요` endings only -- formal `-습니다` reads as corporate marketing, off-brand.
7. The badge always wins -- if a card looks crowded, demote chrome, never demote the discount %.

---

## 10. Voice & Tone

Yanolja speaks like a friend texting you about a long weekend that just got 45% cheaper -- warm, casual, slightly impatient with hesitation, and built around the company name, which literally means **"Hey, let's play."** The voice assumes the user is already in motion -- already curious about Jeju, already comparing Friday-night rates, already thinking about whether to bring the dog -- and the app's job is to *not get in the way*. Korean copy lands in conversational `-요` endings (`갈까요?`, `확인해 드릴게요`, `가실래요?`) rather than the formal `-습니다`. English on group/B2B surfaces (Yanolja Cloud, Yanolja Group corporate) stays plain and aspirational -- *"Making dream travels a reality for anyone on earth"* -- not jargon-heavy.

| Context | Tone |
|---|---|
| CTAs | Verb-first Korean (`예약하기`, `지금 예매`, `결제하기`, `장바구니 담기`). Never `결제 진행`. |
| Empty states | Friendly nudge with a question (`아직 찜한 숙소가 없어요. 어떤 여행을 떠나볼까요?`). Never `데이터가 없습니다`. |
| Search prompt | One question, generous tap target (`어디로 갈까요?`). |
| Promo headlines | Conversational invitation, often a question (`우리도 호캉스 갈까?`, `로맨틱 데이트 완벽준비!`). |
| Discount labels | Loud, short, numeric (`-45%`, `라이브 단독!`, `플래시 특가`, `얼리버드특가`). |
| Error messages | Specific, blameless, actionable (`날짜를 다시 선택해 주세요`). |
| Success toasts | Past-tense, single sentence (`예약이 완료되었어요`). |
| B2B / Cloud surfaces | Plain English, aspirational, less casual -- the audience is a hotelier, not a couple booking a pension. |

**Forbidden phrases.** `불편을 드려 죄송합니다`, `오류가 발생했습니다`, `데이터가 없습니다`, `시스템 점검 중입니다`. Marketing-speak bans: `혁신적인 여행`, `차별화된 서비스`, `최고의 경험`, English boilerplate like `Best deals ever` or `Unbeatable prices`. Emoji are permitted in promo banners, category icons, and review surfaces -- never in payment confirmations, never in error states, never in cancellation flows.

**Voice samples.**

- `어디로 갈까요?` -- search bar placeholder. <!-- verified: nol.yanolja.com/hotel, 2026-05 -->
- `우리도 호캉스 갈까?` -- promo headline (staycation theme). <!-- verified: nol.yanolja.com/hotel, 2026-05 -->
- `국내여행 준비는 NOL에서` -- consumer hero positioning. <!-- verified: nol.yanolja.com, 2026-05 -->
- `놀라운 특가` -- recurring promo wordplay (NOL + 놀라운 = "amazing/surprising"). <!-- verified: nol.yanolja.com, 2026-05 -->
- `라이브 단독!` -- live-deal exclusivity tag. <!-- verified: nol.yanolja.com/hotel, 2026-05 -->
- `다른 날짜 확인` -- soft fallback when sold-out (illustrative microcopy pattern). <!-- verified: nol.yanolja.com/hotel, 2026-05 -->
- `Hey, Let's Play!` -- English brand-name explainer on group site. <!-- verified: yanoljagroup.com/about, 2026-05 -->

## 11. Brand Narrative

Yanolja (야놀자, *"hey, let's play"*) was founded in **2005** -- formalized as a hotel-review and booking site in **2007** -- by **이수진 (Lee Su-jin)**, whose origin story is one of the most retold in Korean tech: orphaned as a child, he worked first as a **motel janitor** in Korea's love-motel industry, then as a manager, and in 2004 launched a forum site called **모텔 이야기 (Motel Story)** that grew to ~10,000 members. In 2005 he acquired **모텔투어 (Motel Tour)**, then the third-largest site in the segment with ~200,000 members, and used that as the seed of Yanolja. The thesis was unsentimental: Korea's motel and pension market was huge but stigmatized and opaque, and the operator who could **modernize the inventory and remove the shame** of booking a Friday-night room would own the next decade ([CNBC](https://www.cnbc.com/2023/07/18/yanolja-founder-started-as-a-motel-janitornow-he-is-a-billionaire.html), [Wikipedia](https://en.wikipedia.org/wiki/Lee_Su-jin_(businessman))).

The product followed the thesis. Cards led with **photography**, not text. **Discount percentages** were visible before prices were visible. The brand color settled on a coral-red-orange (`#F54B1E`) -- not the carrot-orange of marketplaces, not the corporate orange of fintech, but a **leisure orange**, sunset-adjacent, calibrated to feel like a vacation poster. By **June 2019** Yanolja became South Korea's eighth unicorn after a $180M round led by **Booking Holdings + GIC**. In **July 2021** SoftBank's **Vision Fund 2** invested **$1.7 billion** at a reported **~$9-10B valuation** -- the **largest single investment in a travel startup** since the pandemic began ([Skift](https://skift.com/2021/07/15/softbanks-1-7-billion-bet-on-yanolja-is-largest-investment-in-a-travel-startup-since-pandemic-began/), [Bloomberg](https://www.bloomberg.com/news/articles/2021-07-15/softbank-invests-1-7-billion-in-korea-s-yanolja-ahead-of-ipo)). Three months later, October 2021, Yanolja acquired a **70% stake in Interpark for ~$250M**, folding Korea's e-commerce-and-tickets pioneer into the super-app stack ([TechCrunch](https://techcrunch.com/2021/10/14/softbank-backed-travel-tech-startup-yanolja-acquires-korean-e-commerce-company-interpark/)).

Yanolja then split itself into two strategic halves. **Yanolja (consumer)** -- now branded **NOL** -- handles B2C: hotels, pensions, leisure tickets, flights, live commerce, and the Interpark inventory. **Yanolja Cloud (B2B SaaS)** sells hospitality software globally; it acquired **eZee** (India, hotel PMS) and in May 2023 acquired Israeli B2B travel-tech firm **Go Global Travel (GGT)**, which distributes 1M+ hotels across 200 countries to 20,000+ partners ([PRNewswire](https://www.prnewswire.com/news-releases/yanolja-cloud-acquires-leading-b2b-travel-solution-provider-go-global-travel-enhancing-its-global-presence-and-technology-solution-offerings-301824499.html)). The group has been openly preparing for a **Nasdaq IPO** ([KED Global](https://www.kedglobal.com/corporate-restructuring/newsView/ked202408130019)). The brand frame for all of this is the **"Multiverse of Dreams"** -- the symbol "represents the connection between the travel industry and travelers digitally" -- with the mission **"Making dream travels a reality for anyone on earth"** ([yanoljagroup.com](https://www.yanoljagroup.com/brand_center)).

What Yanolja refuses: the **embarrassment economy** of legacy Korean motel booking (call-the-front-desk, no published prices, no photos), the **price opacity** of legacy OTAs, and the **stiffness** of corporate hospitality language. The voice is `-요`, not `-습니다`. The hero copy is `우리도 호캉스 갈까?`, not `프리미엄 호캉스 패키지 안내`. The brand insists, in its name and in its color, that **playing is not a guilty pleasure** -- it is the entire point. Coral is the accent because the brand is selling *the feeling of leaving on Friday*, not the feature list of a hotel.

## 12. Principles

1. **Coral is scarce, on purpose.** `#F54B1E` appears on the primary CTA, the discount badge, and selected/active states -- and almost nowhere else. It never tints a card background, never decorates a divider. *UI implication:* at most one coral CTA per viewport in the primary flow; if two compete, demote one to neutral outline. The discount badge is exempt -- multiple discount badges per viewport are normal because they belong to *cards*, not to *flow*.
2. **Discount-first information hierarchy.** On a lodging card the eye reads `45% → 89,000원 → 그랜드 조선 부산 → 부산 해운대` in that order, enforced by weight (700 → 700 → 600 → 400) and color (coral → black → black → gray). *UI implication:* never demote the discount % below the title to "improve aesthetics"; the badge is the reason the card converts.
3. **Photography is the product.** Lodging cards are image-led at 16:9. Activity cards are image-led at 1:1. The text region exists to confirm what the photograph already promised. *UI implication:* never insert a heavy text panel above the hero image; never swap the hero image for an icon.
4. **`-요`, never `-습니다`.** The consumer brand is a friend, not a vendor. Korean sentences end in conversational `-요` endings throughout the consumer surface (NOL, Yanolja app). Formal `-습니다` is reserved for legal text, ToS, and B2B Cloud surfaces. *UI implication:* if a screen of consumer copy contains `-습니다`, it has drifted into corporate register -- rewrite.
5. **Korean glyph density is a layout constraint.** Korean characters are wider per-glyph than Latin, and titles routinely run to 16-20 characters. Cards must accommodate 2 lines of 14-16px Korean title without ellipsizing the brand name. *UI implication:* card title slot budgets for 2 lines and ellipsizes on line 3 -- never on line 2.
6. **One color system, two surfaces.** Consumer (NOL / Yanolja) and B2B (Yanolja Cloud) share the same `#F54B1E` master and the same brand grays, but consumer leans **playful + image-dense + Korean -요** and B2B leans **clean + data-dense + plain English**. *UI implication:* if you are styling a Yanolja Cloud dashboard, keep the coral but quiet the photography; if you are styling a NOL listing card, keep the coral and let the photography lead.
7. **Discount badges are sacred geometry.** Top-left of image, coral background, white text, weight 700, 4-6px radius, never less than 24px tall. *UI implication:* if a localized translation overflows the badge, change the layout, not the geometry.
8. **The brand promises play, not luxury.** Yanolja does not present itself as a luxury concierge (Banyan Tree, Aman) or a price-aggregator commodity (Trivago). It promises the energy of a long weekend, the relief of a discount, the warmth of a friend who already booked. *UI implication:* avoid both luxury cues (gold accents, serif typefaces, full-bleed cinematic blacks) and discount-aggregator cues (yellow alarm bars, comparison-table chrome). Stay in the leisure-magazine middle.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Yanolja user segments, not individual people.*

**서연 (Seo-yeon), 28, Seoul.** Marketing manager in 강남구. Books a 호캉스 (hotel-staycation) every 6-8 weeks with her boyfriend -- usually a Friday-night downtown 5-star at 40-60% off. Opens NOL on the subway home Wednesday, filters by `오늘-내일`, sorts by discount. Will pay extra for a city view and a late checkout; will not tolerate a card without a photo.

**민준 (Min-jun), 34, Daegu.** Married, two kids under 8. Books a pension or kids-pool resort every long weekend (어린이날, 추석 연휴). Cares more about kids' amenities and parking than about discount %. Reads every review. Treats the chat-with-host feature as essential, not optional.

**Sarah, 31, Singapore.** Visits Korea twice a year for K-pop concerts and food tourism. Uses NOL for hotel + Interpark for concert tickets and finds it convenient that the same login covers both. Wants English UI but is fine with Korean photos and venue names; expects credit-card billing with no surprise FX fees.

**호스트 박사장님 (Mr. Park), 52, Gangwon.** Runs a 12-room pension on the East Sea. Yanolja Cloud user -- the calendar, pricing, and channel-manager screens are his daily UI, not the consumer app. Cares about reliable double-booking prevention, fast payout settlement, and a Korean-speaking support line. Reads English screens slowly; prefers Korean throughout.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no saved 찜)** | One-line warm prompt (`아직 찜한 숙소가 없어요. 어떤 여행을 떠나볼까요?`) + primary CTA `둘러보기` in coral. Never an illustration filling the screen. |
| **Empty (no search results)** | Single line of `#8C8282` body (`조건에 맞는 숙소가 없어요. 날짜를 바꿔볼까요?`) + secondary outline CTA `날짜 변경`. |
| **Empty (sold out for selected dates)** | Inline soft fallback (`다른 날짜 확인`) directly inside the affected card -- not a full-screen state. The card stays, the price slot becomes the link. |
| **Loading (first paint)** | Skeleton blocks at `#F5EBE1` matching the lodging-card layout -- 16:9 image box, 1 title line, 1 metadata line, 1 price line. Shimmer at 1.2s with 8% white highlight. |
| **Loading (infinite scroll)** | Bottom-of-list spinner in coral `#F54B1E`, 24px diameter. Existing cards stay visible. |
| **Loading (booking submission)** | Full-screen overlay with coral spinner + status copy (`예약을 확정하고 있어요`). Never auto-dismiss; wait for server. |
| **Error (inline field)** | Border becomes `~#E5342B` 2px, helper text below in critical-red 13px (`날짜를 다시 선택해 주세요`). |
| **Error (toast)** | `#1E1928` bg, white 14px weight 400 text, 3s auto-dismiss. Bottom of screen, 16px above tab bar. One sentence. |
| **Error (payment failure)** | Dedicated screen, not a toast. Critical-red icon top, one-line cause (`결제가 처리되지 않았어요`), one-line guidance (`다른 카드를 시도해 보시겠어요?`), primary CTA `다시 시도하기` in coral. |
| **Success (favorite added)** | Brief 200ms coral heart animation + toast `찜 목록에 담았어요`. |
| **Success (booking complete)** | Dedicated confirmation screen. Coral check icon top, one-line past-tense sentence (`예약이 완료되었어요`), reservation summary card, primary `예약 내역 보기`. Never a toast for a paid booking. |
| **Skeleton** | `#F5EBE1` blocks at exact card dimensions. Discount-badge slot stays blank until resolved -- never a placeholder %. |
| **Disabled** | Button bg drops to `#F5EBE1`, text to `#8C8282`. Geometry stays identical to enabled state for frame stability. |

## 15. Motion & Easing

**Durations** (named tokens):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state changes |
| `motion-fast` | 150ms | Hover, focus, button press, inline favorite flash |
| `motion-standard` | 240ms | Card taps, tab switches, bottom-sheet reveal |
| `motion-slow` | 360ms | Booking confirmation reveal, full-sheet presentations |
| `motion-page` | 280ms | Push/pop between routes |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, toasts, screens entering |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, pops, toast auto-close |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions -- expandable cards, tab content |

**Spring stance.** Light, controlled spring is **permitted on playful interactions** -- the favorite-heart bounce, the category-chip selection pop, the discount-badge enter on first paint -- because the brand is leisure and the name literally means "let's play." But spring is **forbidden on payment, cancellation, and error surfaces** -- bouncing a `결제하기` button reads as toy-like, and overshooting a refund confirmation looks irresponsible. Spring stays in the consumer-discovery layer; it never enters the money layer.

**Signature motions.**

1. **Lodging-card tap.** Card compresses to 97% scale on press (`motion-fast / ease-standard`), releases on tap-up before navigation begins. Route transition then runs `motion-page / ease-enter` with a 16px upward push.
2. **Discount-badge enter.** On first card paint, the coral discount badge scales from 0.85 → 1.0 with a soft spring (stiffness 180, damping 18) over `motion-standard`. The price slot fades in 80ms after, so the eye reads the % first.
3. **Favorite (찜) heart.** Tap triggers a coral `#F54B1E` heart that scales 1.0 → 1.25 → 1.0 with spring (stiffness 220, damping 14) over `motion-fast`. A toast slides in from bottom on `motion-standard / ease-enter`.
4. **Bottom-sheet (date picker, region picker).** Sheet rises from `y+40px` with `motion-standard / ease-enter`; backdrop fades to `rgba(0,0,0,0.6)`. Dismissal is `motion-fast / ease-exit` -- leaving is lighter than entering.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Spring on hearts and badges is replaced with instant scale. Cross-fade replaces slide. The app stays fully usable; just less kinetic.

<!--
OmD v0.1 Sources -- Philosophy Layer (sections 10-15)

Tier 1 -- Direct verification (WebFetch + redirect resolution, 2026-05):
- https://nol.yanolja.com/ (consumer home, redirected from www.yanolja.com)
  Confirmed: hero "국내여행 준비는 NOL에서", title "NOL | 전세계 숙소, 항공, 레저, 공연 특가",
  promo phrase "놀라운 특가", coral discount badges, 8px card radius, white surface,
  category nav (홈/티켓/쿠폰·혜택/특가/마이/찜/장바구니).
- https://nol.yanolja.com/hotel
  Confirmed: search placeholder "어디로 갈까요?", region selector "지역선택",
  promo "우리도 호캉스 갈까?", "인기 호텔 미리 예약!", "로맨틱 데이트 완벽준비!",
  status tags "라이브 단독!", "플래시 특가", "얼리버드특가", fallback "다른 날짜 확인",
  price formatting "660,000원~", coral/pink-leaning accent confirmed for promotional UI.
- https://nol.yanolja.com/leisure
  Confirmed: leisure card grid, ranking medals (1-3 gold/silver/bronze),
  status tags "신규오픈", "MD추천", "★LIVE 특가★", validity dates "05.31까지",
  CTA "자세히보기".
- https://www.yanoljagroup.com/brand_center
  Confirmed canonical brand colors: Yanolja Orange #F54B1E (Pantone 2028C/U),
  Light Sand #F5EBE1, Medium Gray #8C8282, Deep Gray #555055, Dark Gray #1E1928.
  Confirmed brand concept "Multiverse of Dreams".
- https://www.yanoljagroup.com/about
  Confirmed mission "Making dream travels a reality for anyone on earth",
  brand-name meaning "Hey, Let's Play!", funding milestones (Skylake 2017,
  AJU IB 2017, Hanwha 2018, GIC + Booking Holdings 2019 $180M, KT 2019,
  SoftBank Vision Fund II 2021 $1.7B), product taxonomy
  (Cloud Hospitality Solution / Transaction Solution / AI Data Solution / NOL UNIVERSE).

Tier 2 -- getdesign.md / refero (WebFetch, 2026-05):
- https://getdesign.md/yanolja -- "No designs found for 'yanolja'". No record.

Tier 2 -- Press / philosophy (WebSearch, 2026-05):
- https://www.cnbc.com/2023/07/18/yanolja-founder-started-as-a-motel-janitornow-he-is-a-billionaire.html
  Lee Su-jin orphaned, motel janitor origin, founded Yanolja 2007.
- https://en.wikipedia.org/wiki/Lee_Su-jin_(businessman)
  2004 Motel Story (10K members), 2005 acquired Motel Tour (200K members),
  2007 Yanolja launch as hotel booking site.
- https://skift.com/2021/07/15/softbanks-1-7-billion-bet-on-yanolja-is-largest-investment-in-a-travel-startup-since-pandemic-began/
  SoftBank Vision Fund 2 invested $1.7B July 2021 -- largest travel-startup
  investment since pandemic onset.
- https://www.bloomberg.com/news/articles/2021-07-15/softbank-invests-1-7-billion-in-korea-s-yanolja-ahead-of-ipo
  SoftBank deal valued Yanolja at >10 trillion KRW (~$9B); 24.9% stake.
- https://techcrunch.com/2021/10/14/softbank-backed-travel-tech-startup-yanolja-acquires-korean-e-commerce-company-interpark/
  Yanolja acquired 70% of Interpark for ~$250M, October 2021.
- https://www.prnewswire.com/news-releases/yanolja-cloud-acquires-leading-b2b-travel-solution-provider-go-global-travel-...
  Yanolja Cloud acquired Go Global Travel May 2023; eZee + GGT + SanhaIT
  named as Yanolja Cloud member companies.
- https://www.kedglobal.com/corporate-restructuring/newsView/ked202408130019
  Group restructure ahead of Nasdaq IPO ambition.

Re-verification status:
- The $9B / 10 trillion KRW valuation in §11 is press-sourced, not an
  official Yanolja disclosure. Re-verify before quoting publicly.
- The funding ladder (Skylake 60B, AJU IB 21B, Hanwha 30B, GIC+Booking $180M,
  KT 20B, SoftBank $1.7B) is from yanoljagroup.com/about -- carry as-is until
  next official update.

Personas (§13) are fictional archetypes informed by publicly described
Yanolja user segments (KR urban 호캉스 user, KR family pension user,
international concert/food tourist via Interpark cross-sell, KR pension
operator on Yanolja Cloud). Any resemblance to specific individuals is
unintended.

Interpretive claims (editorial, not documented Yanolja statements):
- "Coral leisure orange, sunset-adjacent" framing in §1 and §11 -- editorial
  reading of the verified #F54B1E primary, not a sourced brand statement.
- "Embarrassment economy of legacy Korean motel booking" in §11 closing --
  editorial framing of the founding thesis based on published founder
  interviews, not a direct Yanolja quote.
- The spring-permitted-on-discovery / spring-forbidden-on-money stance in
  §15 -- derived from the brand's own playful-name + leisure-positioning
  posture; not a documented motion-system rule.
- The "-요 vs -습니다" register split between consumer NOL and B2B Yanolja
  Cloud is observed across surfaces but not codified in a published voice
  guide.
-->

---

**Verified:** 2026-05-08 (omd:add-reference initial create -- Apple-tier philosophy)
**Tier 1 sources:** nol.yanolja.com (consumer -- Yanolja Orange `#F54B1E` 8px / 52px / 16px·700 Primary CTA + coral discount badge top-left of 16:9 image + `어디로 갈까요?` search + `라이브 단독!` / `플래시 특가` / `얼리버드특가` status tags); nol.yanolja.com/hotel (lodging surface -- "우리도 호캉스 갈까?" promo + "다른 날짜 확인" sold-out fallback + ranking medals on leisure); yanoljagroup.com/brand_center (canonical palette -- Yanolja Orange `#F54B1E` Pantone 2028C/U, Light Sand `#F5EBE1`, Medium Gray `#8C8282`, Deep Gray `#555055`, Dark Gray `#1E1928`; "Multiverse of Dreams" symbol concept).
**Tier 2 sources:** getdesign.md/yanolja -- no record. styles.refero.design -- not searched (no record expected).
**Tier 2 (Philosophy/founders):** CNBC (Lee Su-jin motel-janitor origin), Wikipedia (Lee Su-jin -- 2004 Motel Story / 2005 Motel Tour acquisition / 2007 Yanolja launch), Skift + Bloomberg (SoftBank Vision Fund 2 $1.7B July 2021, ~$9B valuation, 24.9% stake), TechCrunch (Interpark 70% / $250M October 2021), PRNewswire (Yanolja Cloud + Go Global Travel May 2023), KED Global (Nasdaq IPO restructuring 2024), yanoljagroup.com/about (mission + funding ladder).
**Style ref:** `karrot` (KR consumer warmth + image-dense card grammar).
**Conflicts unresolved:** The brief described Yanolja as "pink/red signature." Live Tier 1 verification of yanoljagroup.com/brand_center confirms the master brand color is **coral-red-orange `#F54B1E`** (Pantone 2028C/U), not pink. Promotional surfaces on nol.yanolja.com lean visually warm and can read as coral/pink-adjacent in context, but the canonical token is documented as orange. DESIGN.md follows the canonical brand-center value.
