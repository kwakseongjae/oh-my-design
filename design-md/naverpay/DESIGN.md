---
id: naverpay
name: Naver Pay
display_name_kr: 네이버페이
country: KR
category: fintech
homepage: "https://new.pay.naver.com/"
primary_color: "#09aa5c"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=pay.naver.com&sz=128"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = live Green 500 (#09aa5c) from official bridge UI guide (developers.pay.naver.com/design/bridge); brand logo bg = Naver Pay Green (#00de5a) from logo guide. Merchant center main surface (admin.pay.naver.com) and official developer design guide are the two brand-owned Tier 1 sources. Web app (new.pay.naver.com) is fully login-gated — tokens from pre-auth surfaces and official design spec."
  colors:
    primary: "#09aa5c"
    primary-hover: "#0b9552"
    brand-green: "#00de5a"
    green-tint-100: "#eef9f3"
    green-tint-200: "#e3f6ed"
    canvas: "#ffffff"
    surface: "#f6f8fa"
    surface-alt: "#f3f5f7"
    ink: "#1e1e23"
    body: "#404048"
    muted: "#767678"
    muted-light: "#aaaaac"
    hairline: "#dcdee0"
    hairline-alt: "#c8cacc"
    on-primary: "#ffffff"
    link: "#007eff"
  typography:
    family: { display: "NanumSquareNeo", body: "Pretendard" }
    display-hero: { size: 42, weight: 700, lineHeight: 1.33, use: "Hero headline — NanumSquareNeo Bold, merchant center H2" }
    section:      { size: 40, weight: 700, lineHeight: 1.25, use: "Section title — Pretendard Bold" }
    subsection:   { size: 28, weight: 600, lineHeight: 1.50, use: "Feature card header — Pretendard SemiBold" }
    nav:          { size: 16, weight: 400, lineHeight: 1.50, use: "Nav link — Pretendard Regular" }
    body:         { size: 14, weight: 400, lineHeight: 1.50, use: "Body copy — Pretendard Regular" }
    caption:      { size: 13, weight: 400, lineHeight: 1.46, use: "Footer link — Pretendard Regular" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 28, xxl: 40, section: 60 }
  rounded: { sm: 6, md: 8, lg: 20, xl: 28, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#1e1e23", fg: "#ffffff", radius: "8px", padding: "18px 24px", font: "20px / 700 NanumSquareNeo", use: "Primary hero CTA (가맹점 가입하기)" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#1e1e23", radius: "6px", padding: "10px 13px", font: "16px / 500 Pretendard", border: "1px solid #dcdee0", use: "Secondary action (로그인)" }
    button-green: { type: button, bg: "#09aa5c", fg: "#ffffff", radius: "8px", font: "16px / 700 Pretendard", use: "Green payment CTA — primary pay action in checkout" }
    card-surface: { type: card, bg: "#f6f8fa", radius: "20px", use: "Feature content card on grey surface (no shadow)" }
    card-benefit: { type: card, bg: "#f6f8fa", radius: "28px", use: "Benefit/feature showcase card — larger radius" }
    card-green-tint: { type: card, bg: "#eef9f3", fg: "#404048", radius: "12px", padding: "40px 26px", use: "Guide/help card on green-tinted surface" }
    badge-green: { type: badge, bg: "#eef9f3", fg: "#09aa5c", radius: "9999px", font: "12px / 400 Pretendard", use: "Naver Pay point/benefit badge" }
    badge-ink: { type: badge, bg: "#1e1e23", fg: "#ffffff", radius: "9999px", font: "12px / 400 Pretendard", use: "Dark label badge" }
    input-default: { type: input, bg: "#ffffff", fg: "#1e1e23", border: "1px solid #dcdee0", radius: "6px", font: "16px / 400 Pretendard", use: "Default text input (from bridge UI spec)" }
    input-focus: { type: input, bg: "#ffffff", fg: "#1e1e23", border: "1px solid #09aa5c", radius: "6px", font: "16px / 400 Pretendard", use: "Focused text input — green border" }
    nav-link: { type: tab, fg: "#767678", font: "16px / 400 Pretendard", radius: "8px", use: "Top nav item", active: "text #09aa5c on active" }
  components_harvested: true
---

# Design System Inspiration of Naver Pay

## 1. Visual Theme & Atmosphere

Naver Pay (네이버페이) is Korea's dominant payment platform, embedded across the Naver super-app ecosystem — spanning shopping, booking, banking, and loyalty. Its visual language reflects that scale: a system engineered to be instantly recognizable in every merchant checkout context while remaining calm and trustworthy. The merchant-facing landing at `admin.pay.naver.com` opens on a clean white canvas (`#ffffff`) with a cool blue-grey surface (`#f6f8fa`) that organizes content into ordered, airy zones. Primary text is near-black ink (`#1e1e23`) rather than pure black — a subtle premium move. The single "action" color, Naver Pay Green (`#09aa5c`), carries the weight of every purchase interaction: it's bright, unambiguous, and instantly associated with Naver's broader brand identity.

The typographic personality is split across two registers. Hero headlines use **NanumSquareNeo Bold (weight 700)** at 42px — the typeface native to the Naver ecosystem, with its distinctly Korean-optimized geometric strokes — delivering declarative Korean fintech confidence ("매출을 만드는 가장 쉬운 방법"). Section and body text drop to **Pretendard**, Korea's refined system font, at weights 400–700, keeping dense information legible and neutral. This is a two-font system where the display font persuades and the body font explains — a pattern common to Korean fintech products (Toss, Finda, Naver) that must serve both mobile-first consumers and information-heavy transaction contexts.

What distinguishes Naver Pay visually is its **shadow-free flatness**. Depth is achieved through flat `#f6f8fa` surface tints rather than elevation — cards exist as tinted rectangles (border-radius 20–28px) against white or grey bands, with no drop shadows detected across the merchant surface. The generous rounded corners (20px–28px) on cards give the system a soft, approachable character without the pill extremes of some payment apps. The green color system uses a careful four-step ramp: brand logo green (`#00de5a`) for signature logomark contexts, primary interactive green (`#09aa5c`), hover green (`#0b9552`), and two tinted surfaces (`#eef9f3`, `#e3f6ed`) for benefit badges and help cards.

**Key Characteristics:**
- NanumSquareNeo Bold at hero scale — Naver ecosystem's native display voice
- Pretendard 400–700 for body and dense UI — clean, hangul-optimized
- Naver Pay Green (`#09aa5c`) as the single payment-action color
- Logo brand color (`#00de5a`) reserved for logomark and brand surface contexts
- Shadow-free flat system — tinted `#f6f8fa` surfaces + `#dcdee0` hairlines for separation
- Large-radius cards (20–28px) for warmth and approachability
- Near-black ink (`#1e1e23`) instead of pure black for premium feel
- Grayscale ladder from `#f6f8fa` to `#1e1e23` — eight defined steps

## 2. Color Palette & Roles

### Primary
- **Naver Pay Green** (`#09aa5c`): Primary interactive color — payment CTAs, focus rings on inputs, active nav states, and all payment-action elements. Live-confirmed as Green 500 in the official bridge UI color system.
- **Green Hover** (`#0b9552`): Green 600 — darker shade for hover/pressed states on green interactive elements.
- **Brand Green** (`#00de5a`): The signature Naver Pay logomark background color. Brighter and more saturated than the interactive green — used exclusively for logo/brand surface contexts per the official logo guide.

### Green Tint
- **Green Tint 100** (`#eef9f3`): Soft green surface for benefit badges, guide cards, and success-state backgrounds.
- **Green Tint 200** (`#e3f6ed`): Slightly deeper green tint for secondary success surfaces.

### Neutral & Surface
- **Canvas** (`#ffffff`): Page background, white card surfaces, button text on dark backgrounds.
- **Surface** (`#f6f8fa`): Grayscale 100 — cool-grey tinted surface for feature cards and content bands.
- **Surface Alt** (`#f3f5f7`): Grayscale 150 — slightly deeper surface variant.
- **Hairline** (`#dcdee0`): Grayscale 250 — primary border color for inputs, dividers, secondary button outlines.
- **Hairline Alt** (`#c8cacc`): Grayscale 300 — stronger divider for prominent separation.

### Text Hierarchy
- **Ink** (`#1e1e23`): Grayscale 900 — primary heading and body text; near-black with warmth.
- **Body** (`#404048`): Grayscale 800 — secondary text and card descriptions.
- **Muted** (`#767678`): Grayscale 700 — nav links, tertiary text, metadata.
- **Muted Light** (`#aaaaac`): Grayscale 500 — placeholder text, disabled labels.

### Interactive
- **Link Blue** (`#007eff`): Accent link color for inline anchors in merchant context (e.g., "취급불가상품안내", "내 사업에 맞는 가입 유형 확인하기").

## 3. Typography Rules

### Font Family
- **Display**: `NanumSquareNeo` — Naver's own typeface, used for hero-level headlines and primary CTAs at the largest scale. Bold (700) exclusively.
- **Body**: `Pretendard` — the Korean fintech standard, used for all navigation, body copy, UI labels, buttons, and secondary headings. Weights 400, 500, 600, 700.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | NanumSquareNeo | 42px | 700 | 1.33 | Merchant center hero H2 |
| Section Large | Pretendard | 40px | 700 | 1.25 | "내 사업에는 어떤 방식이 맞을까?" |
| Sub-section | Pretendard | 28px | 600 | 1.50 | Feature card headers |
| Nav Link | Pretendard | 16px | 400 | 1.50 | Top nav items, muted gray |
| Button Primary | NanumSquareNeo | 20px | 700 | 1.00 | Hero CTA "가맹점 가입하기" |
| Button Default | Pretendard | 16px | 500 | 1.50 | Secondary/outlined buttons |
| Body | Pretendard | 14px | 400 | 1.50 | Card body, descriptions |
| Caption / Footer | Pretendard | 13px | 400 | 1.46 | Footer links, fine print |

### Principles
- **Two fonts, two registers**: NanumSquareNeo owns the persuasive hero layer; Pretendard owns every functional UI text layer. They do not swap.
- **Bold for action**: CTA labels run at 700 weight; body text at 400. The weight contrast is the clearest hierarchy signal.
- **Hangul-first sizing**: 14px body is deliberate — the sweet spot for dense hangul legibility in data-heavy financial layouts.
- **Display restraint**: Large headlines are in Korean ("매출을 만드는 가장 쉬운 방법"), never in English — the brand speaks to Korean merchants in their language.

## 4. Component Stylings

### Buttons

**Primary CTA (Hero)**
- Background: `#1e1e23`
- Text: `#ffffff`
- Radius: 8px
- Padding: 18px 24px
- Font: 20px NanumSquareNeo weight 700
- Height: 62px
- Use: Main landing page action — "가맹점 가입하기" (merchant signup)

**Secondary (Outlined)**
- Background: `#ffffff`
- Text: `#1e1e23`
- Radius: 6px
- Padding: 10px 13px
- Font: 16px Pretendard weight 500
- Border: 1px solid `#dcdee0`
- Height: 44px
- Use: "로그인" — secondary nav-level action

**Green Payment Button**
- Background: `#09aa5c`
- Text: `#ffffff`
- Radius: 8px
- Font: 16px Pretendard weight 700
- Use: Primary payment/checkout CTA — the green pay button that appears in merchant checkout contexts

### Cards & Containers

**Surface Feature Card**
- Background: `#f6f8fa`
- Radius: 20px
- Use: Merchant type info cards and step info cards — shadow-free flat surface

**Benefit Showcase Card**
- Background: `#f6f8fa`
- Radius: 28px
- Use: Larger benefit showcase panels with more corner radius — consistent shadow-free flatness

**Green Tint Guide Card**
- Background: `#eef9f3`
- Text: `#404048`
- Radius: 12px
- Padding: 40px 26px
- Use: Help/guide cards — the green tint marks Naver Pay branded informational surfaces

### Badges

**Benefit Badge (Green)**
- Background: `#eef9f3`
- Text: `#09aa5c`
- Radius: 9999px (full pill)
- Font: 12px Pretendard weight 400
- Use: Naver Pay point/benefit highlight tag

**Dark Label Badge**
- Background: `#1e1e23`
- Text: `#ffffff`
- Radius: 9999px (full pill)
- Font: 12px Pretendard weight 400
- Use: Dark label — partner tags, count badges

### Inputs & Forms

**Default Input**
- Background: `#ffffff`
- Text: `#1e1e23`
- Border: 1px solid `#dcdee0`
- Radius: 6px
- Font: 16px Pretendard weight 400
- Use: Default text field state (휴대폰 번호 입력, bridge UI pattern)

**Focus Input**
- Background: `#ffffff`
- Text: `#1e1e23`
- Border: 1px solid `#09aa5c`
- Radius: 6px
- Font: 16px Pretendard weight 400
- Use: Active/focused text field — green border is the pay brand's focus signal

**Error Input**
- Border: 1px solid `#e53935` (error red, standard; not green-system)
- Use: Validation error state per bridge UI spec

### Navigation

**Top Nav**
- Background: `#ffffff`
- Text: `#767678` (nav links), `#1e1e23` (logo)
- Font: 16px Pretendard weight 400
- Radius on items: 8px
- Height: 44px
- Active: green `#09aa5c` text on active item
- Use: Horizontal top navigation with logo left-aligned

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://admin.pay.naver.com/front/m/v2, https://developers.pay.naver.com/design/bridge, https://developers.pay.naver.com/design/brand/logo
**Tier 2 sources:** getdesign.md/naverpay — not found (404); refero — no results for "naver pay"
**Conflicts unresolved:** none — core green palette cross-confirmed between merchant center live DOM and official bridge UI spec (#09aa5c = Green 500 in both); brand logo green (#00de5a) is separate from interactive green (#09aa5c) per official logo guide, not a conflict

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 28px, 40px, 60px
- Notable: Hero CTA uses 18px vertical padding for a commanding 62px hit height on the main "가맹점 가입하기" button; card padding tends to 35–40px vertical for generous content breathing room

### Grid & Container
- Centered single-column hero with 42px NanumSquareNeo headline as the anchor
- Feature cards arranged in horizontal scroll/wrap rows (merchant benefit cards, type selector cards)
- Full-width grey surface bands (`#f6f8fa`) alternate with white sections for content rhythm
- Feature cards sit at fixed heights (420px showcase cards, 208px step cards, 480px type info cards)

### Whitespace Philosophy
- **Generous card padding**: Cards breathe — 35–40px vertical internal padding on showcase cards
- **Flat segmentation**: sections separate by `#f6f8fa` vs `#ffffff` tint, never shadows
- **Large radius creates warmth**: 20–28px card radius softens what could be a cold financial layout

### Border Radius Scale
- Small (6px): inputs, secondary buttons — tight, utilitarian
- Medium (8px): primary buttons, nav items — moderate, action-oriented
- Large (20px): standard content cards — the workhorse
- XLarge (28px): showcase/benefit cards — generous, consumer-friendly
- Full (9999px): badges, pill chips — fully round

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, nav |
| Surface (Level 1) | `#f6f8fa` background shift | Card/section separation |
| Hairline (Level 2) | `1px solid #dcdee0` border | Input outlines, secondary button borders |

**Shadow Philosophy**: Naver Pay's merchant and developer surfaces are entirely shadow-free — `box-shadow: none` was confirmed across nav, hero, cards, buttons, and chips across both inspected surfaces. Depth is communicated via flat color bands and hairlines. This is consistent with modern Korean fintech (Finda, Toss mobile-web, KakaoBank) and keeps the surface feeling fast, clean, and mobile-native. The green color system does the work that shadows do elsewhere: a green focus ring on an input creates more depth signal than a soft shadow could.

## 7. Do's and Don'ts

### Do
- Use NanumSquareNeo Bold (700) for hero-level Korean headlines — it carries the Naver ecosystem voice
- Use Pretendard 400–700 for all body, nav, and button labels
- Reserve Naver Pay Green (`#09aa5c`) for payment/purchase action elements — keep it the single action color
- Use `#00de5a` brand green only on the logo and brand surface contexts — not for UI buttons
- Separate sections with flat `#f6f8fa` tint bands and `#dcdee0` hairlines, not shadows
- Apply green focus rings on inputs — `#09aa5c` border signals the Naver Pay checkout context
- Use large border-radius (20–28px) on cards — warmth matters in a payment context
- Use near-black `#1e1e23` for primary text instead of pure black

### Don't
- Use drop shadows on any surface — the system is flat-first
- Apply `#00de5a` brand green to interactive buttons or links — it's a logo color, not a UI color
- Use a second saturated accent alongside green — the system is monochromatic except for the blue link color
- Set headlines in Pretendard — NanumSquareNeo owns the hero display register
- Use pure black (`#000000`) for body text — the system uses warm near-black `#1e1e23`
- Create pill-shaped buttons for primary actions — the system uses moderate 8px radius buttons, not full-round
- Use the green colors for error states — errors use a separate red signal independent of the green system

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, cards stack |
| Tablet | 640-1024px | 2-column card grids, moderate padding |
| Desktop | 1024-1440px | Full layout, multi-column feature cards, centered hero |

### Touch Targets
- Primary CTA at 62px height — very comfortable tap target
- Secondary nav buttons at 44px height — standard Korean mobile minimum
- Input fields at 44px height with clear focus ring (green border)

### Collapsing Strategy
- Hero: 42px NanumSquareNeo headline compresses on mobile, weight 700 maintained
- Feature cards: horizontal multi-card → single-column stacked
- Tinted surface bands: maintain full-width treatment at all sizes
- Nav: horizontal links collapse to condensed top navigation on mobile

### Image Behavior
- Product illustrations and screenshots carry no shadow at any size — consistent with flat system
- Cards maintain 20–28px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary payment CTA: Naver Pay Green (`#09aa5c`)
- Green hover: `#0b9552`
- Logo brand green: `#00de5a`
- Green tint surface: `#eef9f3`
- Dark hero CTA: Ink (`#1e1e23`)
- Background: Canvas (`#ffffff`)
- Surface / card bg: `#f6f8fa`
- Primary text: Ink (`#1e1e23`)
- Secondary text: Body (`#404048`)
- Muted / nav: `#767678`
- Border / hairline: `#dcdee0`
- Inline link: `#007eff`

### Example Component Prompts
- "Create a hero on white background. Headline at 42px NanumSquareNeo weight 700, color #1e1e23. Black CTA button: #1e1e23 background, white text, 8px radius, 18px 24px padding, 20px NanumSquareNeo. Green link: #007eff text. Subtitle 28px Pretendard 600, color #1e1e23."
- "Design a feature card: #f6f8fa background, 20px radius, no shadow. Title 28px Pretendard weight 600, color #1e1e23. Body 14px Pretendard weight 400, color #404048."
- "Build a tinted section: #f6f8fa background full-width. Section title 40px Pretendard weight 700, #1e1e23. Cards inside: #f6f8fa bg, 20px radius, no shadow."
- "Create a checkout payment button: #09aa5c background, white text, 8px radius, Pretendard 16px/700."
- "Build a benefit badge: #eef9f3 background, #09aa5c text, full pill radius, 12px Pretendard."

### Iteration Guide
1. NanumSquareNeo Bold (700) for hero Korean copy only; Pretendard for everything else
2. Green (`#09aa5c`) = payment action; avoid spreading to non-payment UI elements
3. No shadows — separate content bands with `#f6f8fa` and hairlines
4. Cards at 20–28px radius, inputs and buttons at 6–8px
5. Text color is `#1e1e23`, never pure black for body
6. Green focus ring on inputs: `1px solid #09aa5c` is the checkout context signal
7. Secondary buttons use white bg + `1px solid #dcdee0` + `#1e1e23` text

---

## 10. Voice & Tone

Naver Pay's voice is **practical, merchant-friendly, and confidence-instilling** — a platform that speaks to Korean business owners in plain, efficient Korean. The merchant center headline "매출을 만드는 가장 쉬운 방법" ("The easiest way to generate revenue") sets the register: direct, benefit-first, zero hype. Copy is grounded in concrete outcomes (매출, 정산, 포인트 혜택) and treats the merchant as a capable operator who wants clear answers, not marketing language.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, benefit-first. "매출을 만드는 가장 쉬운 방법." Confident without superlatives. |
| Feature descriptions | Outcome-framed. "Npay 포인트 혜택으로 고객의 구매를 더 쉽게" (Make it easier for customers to buy). |
| CTAs | Direct, specific. "가맹점 가입하기", "내 사업에 맞는 가입 유형 확인하기". |
| Design guide text | Matter-of-fact spec language. "로고 사이의 간격 길이를 사용하여 로고 바깥쪽에 최소 여백을 둡니다." |
| Error / guidance | Calm, actionable. "잘못된 사용은 브랜드 이미지를 왜곡하거나 커뮤니케이션 효과를 약화하므로 사용상 주의를 필요로 합니다." |

**Voice samples (verbatim from live surfaces):**
- "매출을 만드는 가장 쉬운 방법" — hero H2 (merchant center). *(verified live 2026-06-22)*
- "Npay 포인트 혜택으로 고객의 구매를 더 쉽게" — benefit H3 (merchant center). *(verified live 2026-06-22)*
- "사업자라면 누구나 쉽게 시작할 수 있어요" — onboarding H3 (merchant center). *(verified live 2026-06-22)*

**Forbidden register**: technical payment jargon left unexplained, aggressive urgency cues, English-language hero copy, exclamation-heavy sales tone.

## 11. Brand Narrative

Naver Pay (네이버페이) launched in **2015** as Naver Corporation's integrated payment and financial services product, initially embedded within Naver Shopping and gradually expanding across the Naver super-app ecosystem. Part of **Naver Financial Corp** (네이버파이낸셜), a Naver subsidiary established in 2019 to house the company's financial infrastructure, Naver Pay benefits from Naver's dominant position in Korean search and content — making it one of the highest-reach payment touchpoints in Korea without requiring standalone acquisition.

The product's positioning is built on the Naver ecosystem advantage: users who are already logged into Naver for search, news, blogs, and webtoons can pay across millions of merchant integrations without re-entering credentials. The loyalty layer — Naver Pay Points — creates a closed-loop reward system that keeps spending within the Naver ecosystem. The merchant-facing pitch ("매출을 만드는 가장 쉬운 방법") leans on this reach: integration with Naver Pay means exposure to Korea's most-used digital platform.

What Naver Pay refuses: the cold institutional chrome of legacy Korean banking (no navy-and-gold, no heavy corporate formality). What it embraces: a clean, almost editorial layout; a Naver-green that signals trust and familiarity to tens of millions of daily Naver users; and a merchant experience that makes onboarding feel achievable even for a solo business operator.

## 12. Principles

1. **Ecosystem trust as the product.** Naver Pay's strongest design signal is the green — Koreans associate Naver green with search results, map pins, and webtoon bookmarks. Bringing that color into the payment button creates an instant trust transfer. *UI implication:* the green pay button must be unambiguous and undiluted — no secondary greens competing for attention.
2. **Flat and fast for mobile commerce.** Korea's mobile-first commerce context demands surfaces that load fast and render cleanly. *UI implication:* shadow-free flatness with surface tints is the right call — it keeps file sizes small and rendering sharp on Korean mobile networks.
3. **Benefit before process.** The merchant center leads with outcomes (revenue, settlement, points) rather than technical setup steps. *UI implication:* feature cards lead with benefit headlines, not feature names; the CTA is "시작하기" not "설치하기".
4. **Clear hierarchy through weight contrast.** Two fonts at many weights means the hierarchy must be clear — NanumSquareNeo Bold for hero scale, Pretendard for everything else. *UI implication:* do not mix NanumSquareNeo with body text; the contrast between the two fonts IS the hierarchy.
5. **Design guide as brand protection.** The official Naver Pay design guide (logo guide, bridge UI, benefit badge) is unusually explicit — color steps are named (Green 500, Grayscale 900), spacing is measured. *UI implication:* these specs should be treated as hard constraints by any integration using Naver Pay branding.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Naver Pay user segments (Korean online merchants, small business operators, everyday shoppers using Naver Pay in checkout), not individual people.*

**이준혁, 38, 서울.** Online clothing reseller on SmartStore (네이버 스마트스토어). Chose to integrate Naver Pay because his customers already have Naver accounts and points. Doesn't write code — followed the merchant center guide to set up the payment integration himself in under a day. Values quick settlement so he can reinvest in inventory. Trusts Naver because he uses Naver Search, Maps, and Pay Points daily.

**박미경, 44, 부산.** Runs a small restaurant listed on Naver Maps. Added Naver Pay QR as a payment option after seeing other restaurants use it. Pays attention to her Naver Pay Point accumulation because she shops online herself and knows the value of the point system from the consumer side.

**김태우, 29, 경기.** A freelance web developer who builds SmartStore sites for small businesses. Uses the Naver Pay developer docs frequently and reads the bridge UI spec to implement compliant checkout pages. Cares about the design guide because non-compliant logo usage can fail the Naver Pay integration review.

**최수아, 25, 서울.** A daily Naver Pay user — pays for convenience stores, online shopping, and food delivery using Naver Pay QR and the app. Values points accumulation and the seamless checkout (no re-entering card details). Trusts the green button — when she sees it, she knows how to complete the payment.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no merchant transactions)** | White canvas. Ink Navy (`#1e1e23`) single line at body size with plain Korean explanation. One green CTA to set up payment. No illustration clutter. |
| **Loading (merchant dashboard first paint)** | Skeleton blocks on `#f6f8fa` surface at final card dimensions, 20px radius. No shimmer shadow — flat pulse consistent with the shadow-free system. |
| **Loading (transaction list refresh)** | Flat inline progress indicator; previous data stays visible. No full-page block. |
| **Error (payment failed)** | Inline message in near-black ink with plain Korean explanation and a retry action. No generic "오류가 발생했습니다" alone — states what went wrong and next step. |
| **Error (form validation — bridge UI)** | Field-level message below the input in red; describes what's valid, not just "필수". Green focus ring switches to red border on error field. |
| **Success (payment complete)** | Brief inline confirmation. Green tint (`#eef9f3`) background with `#09aa5c` text confirmation. Transaction reference shown immediately. No confetti. |
| **Success (merchant onboarded)** | Calm confirmation page in Pretendard. Next-step action highlighted with green CTA. |
| **Skeleton** | `#f6f8fa` blocks at final dimensions, 20–28px radius, flat pulse. Consistent with card shapes. |
| **Disabled** | Muted Light (`#aaaaac`) text; surfaces reduce opacity. Green elements fade to muted grey rather than disappear — avoids losing the brand signal entirely. |
| **Benefit badge (active)** | Green tint `#eef9f3` surface with `#09aa5c` text, full-pill shape — "N% 적립" or similar. Activates when merchant has configured point benefits. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Button press, badge tap, checkbox check |
| `motion-standard` | 200ms | Card enter, modal open, dropdown reveal |
| `motion-slow` | 300ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, modals, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is minimal and purposeful — consistent with the flat, fast payment context. Green CTAs respond to press with a brief `#0b9552` color shift at `motion-fast`. Cards entering the viewport fade in from below at `motion-standard / ease-enter`. No bounce, spring, or overshoot — a payment interface signals reliability, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the checkout flow remains fully functional without any animation.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://admin.pay.naver.com/front/m/v2 (Naver Pay merchant center — brand-owned, pre-login public landing)
  - Hero H2 "매출을 만드는 가장 쉬운 방법" — NanumSquareNeo 42px/700/color #1e1e23
  - H3s "Npay 포인트 혜택으로 고객의 구매를 더 쉽게" etc — Pretendard 28px/600
  - Primary CTA "가맹점 가입하기" — bg #1e1e23 / 8px radius / NanumSquareNeo 20px/700
  - Secondary btn "로그인" — bg #ffffff / border 1px solid #dcdee0 / 6px radius
  - Cards — bg #f6f8fa / radius 20–28px / shadow none
  - Link color — rgb(0,126,255) = #007eff (merchant type link, "취급불가상품안내")
  - Color frequency: #f6f8fa ×13, #ffffff ×5, #1e1e23 ×2, #eef9f3 ×1
  - Nav font: Pretendard, 16px/400, color #767678

- https://developers.pay.naver.com/design/bridge (official Naver Pay bridge UI design spec — Tier 1)
  - Official color palette confirmed: Green 500 = #09AA5C, Green 600 = #0B9552
  - Green tints: Green 100 = #EEF9F3, Green 200 = #E3F6ED
  - Grayscale 900 = #1E1E23 (primary dark), 800 = #404048, 700 = #767678, 500 = #AAAAAC, 250 = #DCDEE0
  - Surface/card colors: Grayscale 100 = #F6F8FA
  - Input field spec: default 1px #dcdee0 border, focus 1px #09aa5c border, error state documented
  - Button spec: primary 60% width / secondary 40% (payment completion flow)
  - box-shadow: none across all components

- https://developers.pay.naver.com/design/brand/logo (official logo guide — Tier 1)
  - Logo background green = #00de5a (live DOM: rgb(0,222,90)) — brand logomark context ONLY
  - Naver green (secondary logo context) = #09aa5c (same as interactive Green 500)
  - Login page (nid.naver.com redirect): rgb(9,170,92) = #09aa5c confirmed on sign-in button

Token-level claims (§1-9) are sourced from these three live inspections.

Voice samples (§10) are verbatim from the live merchant center (admin.pay.naver.com 2026-06-22).

Brand narrative (§11): Naver Pay launched 2015, Naver Financial Corp established 2019.
These are widely documented public facts about the company; specific founding details 
are general public knowledge about the Naver ecosystem.

Personas (§13) are fictional archetypes informed by publicly observable Naver Pay user 
segments (Korean merchants, everyday Naver app users). Names are illustrative; they do 
not refer to real people.

Interpretive claims (e.g., "ecosystem trust as the product", "shadow-free for mobile commerce") 
are editorial readings connecting Naver Pay's observed design to its market positioning,
not directly sourced Naver statements.
-->
