---
id: cafe24
name: Cafe24
display_name_kr: 카페24
country: KR
category: ecommerce
homepage: "https://www.cafe24.com"
primary_color: "#084fff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=cafe24.com&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = live marketing CTA blue (#084fff, full pill); the product/login app surface uses a slightly lighter blue (#3971ff) on sharp 4px buttons. Ink near-black (#1c1c1c). Lime (#bbf94f) is the single saturated accent reserved for dark hero sections."
  colors:
    primary: "#084fff"
    primary-app: "#3971ff"
    ink: "#1c1c1c"
    ink-input: "#1b1e26"
    canvas: "#ffffff"
    charcoal: "#323232"
    slate-deep: "#1a1d22"
    navy: "#012255"
    pure-black: "#000000"
    nav-grey: "#616161"
    body-grey: "#5f5f5f"
    muted: "#757575"
    faint: "#bfbfbf"
    lime: "#bbf94f"
    surface: "#f9fafb"
    surface-alt: "#f0f2f3"
    chip-surface: "#f7f8fa"
    tint-blue: "#e6edff"
    hairline: "#e0e0e0"
    border-soft: "#e6e8eb"
    input-border: "#d6dae1"
  typography:
    family: { sans: "Pretendard", legacy: "Noto Sans KR" }
    display:    { size: 48, weight: 700, lineHeight: 1.21, use: "Section hero headline (H2)" }
    heading-xl: { size: 40, weight: 700, lineHeight: 1.35, tracking: -0.4, use: "Store / feature section title" }
    heading-lg: { size: 30, weight: 700, lineHeight: 1.53, use: "Sub-section headline" }
    heading-md: { size: 24, weight: 700, lineHeight: 1.42, use: "Card headline" }
    heading-sm: { size: 20, weight: 700, lineHeight: 1.40, use: "Small card / persona title" }
    body:       { size: 18, weight: 400, lineHeight: 1.50, use: "Body copy, Pretendard" }
    nav:        { size: 16, weight: 500, lineHeight: 1.50, use: "Top navigation links" }
    button:     { size: 18, weight: 700, lineHeight: 1.00, use: "Primary CTA label" }
    caption:    { size: 14, weight: 400, lineHeight: 1.50, use: "Tag chips, captions, fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 32, xxl: 40, section: 64 }
  rounded: { sm: 4, md: 6, lg: 8, xl: 20, pill: 24, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#084fff", fg: "#ffffff", radius: "9999px", height: "56px", padding: "0 32px", font: "18px / 700", use: "Marketing primary CTA — 지금 무료로 시작하기, full pill" }
    button-app: { type: button, bg: "#3971ff", fg: "#ffffff", radius: "4px", height: "56px", padding: "0 20px", font: "16px / 700", use: "Product / login app submit — 로그인, sharp corner" }
    chip-selector: { type: button, bg: "#f9fafb", fg: "#1c1c1c", border: "1px solid #e0e0e0", radius: "24px", padding: "10px 16px", height: "46px", font: "15px / 700", use: "Family-site / country selector pill" }
    nav-link: { type: tab, fg: "#616161", radius: "6px", padding: "8px 12px", font: "16px / 500", active: "text #1c1c1c on active", use: "Top nav item" }
    card-persona: { type: card, bg: "#f9fafb", fg: "#1c1c1c", radius: "20px", padding: "40px 32px", use: "Persona / segment entry card, shadowless" }
    input-text: { type: input, bg: "#ffffff", fg: "#1b1e26", border: "1px solid #d6dae1", radius: "4px", padding: "14px 12px", height: "48px", font: "14px / 400", use: "Login / form text field" }
    tag-chip: { type: badge, bg: "#f7f8fa", fg: "#5f5f5f", radius: "6px", padding: "4px 9px", font: "14px / 400", use: "Category / filter tag chip" }
    badge-step: { type: badge, bg: "#e6edff", fg: "#084fff", radius: "8px", font: "14px / 800", use: "Numbered step indicator" }
  components_harvested: true
---

# Design System Inspiration of Cafe24

## 1. Visual Theme & Atmosphere

Cafe24 (카페24) is Korea's foundational e-commerce platform — the infrastructure that builds, operates, and markets a huge share of the country's online stores — and its 2026 marketing site reads like a confident, approachable SaaS product rather than the dense merchant-admin tooling it powers underneath. The canvas is pure white (`#ffffff`) broken up by soft cool-grey surfaces (`#f9fafb`, `#f0f2f3`) that segment the page into calm, breathable bands. Text sits in a warm near-black (`#1c1c1c`) — never pure black for body copy — which keeps the long, information-rich marketing page feeling light and legible. The single saturated action color is an electric royal blue (`#084fff`), reserved almost entirely for the primary "지금 무료로 시작하기" (Start free now) call-to-action, so the eye is trained to read that one blue as "do this."

The typographic personality is unmistakably Korean-modern: everything is set in **Pretendard**, the de-facto Korean product sans, with a heavy bold/regular split doing all the hierarchy work. Headlines run at weight 700 across a wide scale — 48px section heroes, 40px store-feature titles, down through 30px / 24px / 20px card heads — while body copy drops to a quiet 18px regular at a generous 1.5 line-height. There is almost no decorative letter-spacing; the system leans on size and weight, not tracking, to build rhythm. The result feels engineered and friendly at once: bold where it persuades ("처음이어도 할 수 있어요!" / "You can do it even your first time"), calm where it informs.

What gives Cafe24 its distinctive edge is the interplay of two registers. The bright, white, blue-accented marketing surface alternates with deep dark sections — charcoal (`#323232`), near-black slate (`#1a1d22`), and an occasional deep navy (`#012255`) — where a single high-voltage lime-chartreuse (`#bbf94f`) is deployed as the accent. That lime is the brand's one moment of swagger, used sparingly on dark backgrounds to signal energy and momentum. Geometry is friendly and rounded: the primary CTA is a full pill (`9999px`), persona cards round at a soft 20px, selector chips at 24px, and the smaller chrome (nav, tags) at a tidy 6px. Depth is handled with restraint — separation comes from flat tinted surfaces and thin hairlines (`#e0e0e0`, `#e6e8eb`) rather than drop shadows. Notably, the product/login app surface (eclogin) runs a tighter, more utilitarian variant of the same identity: a slightly lighter blue (`#3971ff`) on sharp 4px buttons and inputs, signalling "tool" where the marketing site signals "invitation."

**Key Characteristics:**
- Pretendard everywhere — bold (700) headlines over regular (400) body is the entire hierarchy engine
- Single saturated royal blue (`#084fff`) reserved for the primary marketing CTA
- Warm near-black (`#1c1c1c`) for text instead of pure black — light, legible on long pages
- High-voltage lime (`#bbf94f`) as the one swagger accent, only on dark sections
- Dual register: bright white/blue marketing chrome vs. charcoal/slate dark hero bands (`#323232`, `#1a1d22`)
- Friendly rounded geometry — 9999px pill CTA, 20px cards, 24px selector chips, 6px nav/tags
- Flat depth: separation via tinted surfaces (`#f9fafb`) + thin hairlines (`#e0e0e0`), minimal shadow
- A tighter app/product variant (`#3971ff`, 4px) that diverges intentionally from the marketing pill chrome

## 2. Color Palette & Roles

### Primary
- **Cafe24 Blue** (`#084fff`): The primary brand action color. The electric royal blue on the marketing "지금 무료로 시작하기" CTA and on numbered step indicators — the system's single "action" signal.
- **App Blue** (`#3971ff`): A slightly lighter blue used on the product/login app surface (eclogin) for submit buttons. The utilitarian sibling of the marketing blue.
- **Ink** (`#1c1c1c`): Primary text and heading color across the marketing site — a warm near-black that carries weight without the harshness of pure black.
- **Input Ink** (`#1b1e26`): The text color inside form fields on the app surface; a marginally cooler near-black tuned for dense input legibility.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white cards, and text on blue/dark surfaces.
- **Surface Grey** (`#f9fafb`): The workhorse cool-grey for persona cards and segmented sections.
- **Surface Alt** (`#f0f2f3`): A secondary grey band for alternating content sections.
- **Chip Surface** (`#f7f8fa`): The fill for small category/filter tag chips.
- **Tint Blue** (`#e6edff`): A pale blue wash behind numbered step badges, paired with the blue ink.
- **Hairline** (`#e0e0e0`): Thin borders and dividers — the primary separation device given the near-flat system.
- **Border Soft** (`#e6e8eb`): A slightly cooler border / circular icon-button fill.
- **Input Border** (`#d6dae1`): The 1px border on app/login text fields.

### Dark Sections
- **Charcoal** (`#323232`): The most common dark-section background — used for immersive feature bands.
- **Slate Deep** (`#1a1d22`): A near-black slate for high-contrast dark hero sections.
- **Navy** (`#012255`): A deep brand navy used occasionally for accent dark blocks.
- **Pure Black** (`#000000`): Maximum-contrast dark sections and overlays.

### Accent
- **Lime** (`#bbf94f`): The single saturated accent — a high-voltage chartreuse reserved for highlights and emphasis text on dark sections. Never used on light backgrounds.

### Text Hierarchy
- **Ink** (`#1c1c1c`): Primary text, headings, strong labels.
- **Nav Grey** (`#616161`): Top-navigation link text.
- **Body Grey** (`#5f5f5f`): Tag-chip labels and secondary copy.
- **Muted** (`#757575`): Tertiary text, metadata.
- **Faint** (`#bfbfbf`): Lowest-emphasis labels, placeholder-level text.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard` (with `-apple-system`, `system-ui` fallbacks) — used for all marketing headlines, body, nav, and UI. Bold (700) for display, regular (400) for body.
- **Legacy**: `Noto Sans KR` (with Dotum fallback) — used on the older developer-docs surface (`developers.cafe24.com`), a separate brand-owned chrome from the modern Pretendard marketing site.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Section Hero | Pretendard | 48px (3.00rem) | 700 | 1.21 (58px) | normal | H2 section heroes |
| Store / Feature Title | Pretendard | 40px (2.50rem) | 700 | 1.35 (54px) | -0.4px | Store hub & feature section titles |
| Sub-section | Pretendard | 30px (1.88rem) | 700 | 1.53 (46px) | normal | Recommendation headlines |
| Card Headline | Pretendard | 24px (1.50rem) | 700 | 1.42 (34px) | normal | Feature card heads |
| Small Card / Persona | Pretendard | 20px (1.25rem) | 700 | 1.40 (28px) | normal | Persona/segment card titles |
| Body | Pretendard | 18px (1.13rem) | 400 | 1.50 (27px) | normal | Standard reading text |
| Nav Link | Pretendard | 16px (1.00rem) | 500 | 1.50 | normal | Top navigation |
| Button | Pretendard | 18px (1.13rem) | 700 | 1.00 | normal | Primary CTA label |
| Caption / Tag | Pretendard | 14px (0.88rem) | 400 | 1.50 | normal | Tag chips, captions |

### Principles
- **Bold display, regular body**: Weight 700 carries every headline; weight 400 carries every paragraph. The weight contrast is the system's primary hierarchy signal.
- **Size-driven, not tracking-driven**: Letter-spacing is almost always normal; only the 40px store title pulls a slight -0.4px. Hierarchy is built from the size ladder, not tracking.
- **One family, many jobs**: Pretendard does display, body, nav, and UI. There is no display/body font split — weight and size do the work.
- **Generous body line-height**: Body sits at 18px / 1.5 for comfortable scanning across a long, content-dense marketing page.

## 4. Component Stylings

### Buttons

**Primary CTA (Marketing)**
- Background: `#084fff`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 0px 32px
- Height: 56px
- Font: 18px / 700 / Pretendard
- Use: The single primary marketing call-to-action — "지금 무료로 시작하기"

**App Submit (Product / Login)**
- Background: `#3971ff`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 20px
- Height: 56px
- Font: 16px / 700 / Pretendard
- Use: Submit action on the eclogin product surface — "로그인"

**Selector Chip**
- Background: `#f9fafb`
- Text: `#1c1c1c`
- Border: 1px solid `#e0e0e0`
- Radius: 24px
- Padding: 10px 16px
- Height: 46px
- Font: 15px / 700 / Pretendard
- Use: Family-site / country selector pills ("패밀리 사이트", "대한민국")

### Inputs

**Text Field (App / Login)**
- Background: `#ffffff`
- Text: `#1b1e26`
- Border: 1px solid `#d6dae1`
- Radius: 4px
- Padding: 14px 12px
- Height: 48px
- Font: 14px / 400 / Pretendard
- Use: Login and form text input (placeholder e.g. "아이디를 입력해 주세요.")

### Cards & Containers

**Persona / Segment Card**
- Background: `#f9fafb`
- Text: `#1c1c1c`
- Radius: 20px
- Padding: 40px 32px
- Use: Audience-segment entry cards on the hero ("신규 창업자", "크리에이터", "기업형", "글로벌"), shadowless

**Circular Icon Button**
- Background: `#e6e8eb`
- Radius: 100%
- Height: 48px
- Use: Round icon/utility buttons in the hero carousel chrome

### Badges

**Tag Chip**
- Background: `#f7f8fa`
- Text: `#5f5f5f`
- Radius: 6px
- Padding: 4px 9px
- Font: 14px / 400 / Pretendard
- Use: Category / filter tags ("창업 구축", "쇼핑몰 설정", "상품/주문/배송")

**Numbered Step Badge**
- Background: `#e6edff`
- Text: `#084fff`
- Radius: 8px
- Font: 14px / 800 / Pretendard
- Use: Numbered step indicators in "3가지만 결정하면 시작할 수 있어요" flows

### Navigation
- Background: `#ffffff`
- Text: `#616161`
- Radius: 6px
- Padding: 8px 12px
- Height: 40px per item
- Font: 16px / 500 / Pretendard
- Active: text shifts to ink `#1c1c1c` on the active item
- Use: Top horizontal nav ("서비스 소개", "시작 가이드", "쇼핑몰 솔루션 이전")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces)
**Tier 1 sources:** https://www.cafe24.com, https://developers.cafe24.com/design/front/smart, https://eclogin.cafe24.com/Shop/, https://news.cafe24.com
**Tier 2 sources:** getdesign.md/cafe24 — NOT LISTED; styles.refero.design — searched "cafe24", no brand-specific Cafe24 style surfaced
**Conflicts unresolved:** none (marketing `#084fff`/pill vs. app `#3971ff`/4px documented as an intentional two-surface split, not a conflict)

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 9px, 12px, 16px, 20px, 32px, 40px, 64px
- Notable: persona cards use a generous 40px 32px internal padding; tag chips a tight 4px 9px — the same scale stretches from dense chrome to spacious hero cards

### Grid & Container
- Centered, wide marketing column with full-width alternating bands
- Hero audience-segment cards arranged in a horizontal row of rounded 20px tiles ("신규 창업자", "크리에이터" …)
- Feature sections alternate white (`#ffffff`), tinted grey (`#f9fafb` / `#f0f2f3`), and dark (`#323232` / `#1a1d22`) full-width bands
- Numbered "3-step" flows lay out blue step badges in sequence

### Whitespace Philosophy
- **Breathing room on a dense product**: despite Cafe24 being deep operational tooling, the marketing surface is airy, with generous vertical rhythm between bands.
- **Flat segmentation**: sections separate by background tint and dark/light alternation, not by shadow stacks.
- **Rounded rhythm**: the repeated soft-corner geometry (20px cards, 24px chips, pill CTA) creates a consistent friendly cadence.

### Border Radius Scale
- Small (4px): app/login buttons and inputs (sharp, utilitarian)
- Medium (6px): nav items, tag chips
- Large (8px): numbered step badges
- XL (20px): persona / segment cards
- Pill (24px): selector chips
- Full (9999px): primary CTA, carousel arrows, circular icon buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, most cards and CTAs |
| Tint (Level 1) | `#f9fafb` / `#f0f2f3` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e0e0e0` (or `#e6e8eb`) border | Selector chips, dividers, white card outlines |
| Dark Band (Level 3) | `#323232` / `#1a1d22` / `#012255` background | Immersive feature/hero sections with lime accent |

**Shadow Philosophy**: Cafe24's marketing surface is near-shadowless. Live inspection found `box-shadow: none` across the hero CTAs, persona cards, nav, and selector chips. Depth and grouping are communicated through flat tinted surfaces (`#f9fafb`), thin hairlines (`#e0e0e0`), and — most distinctively — bold light/dark band alternation. When a section needs to feel premium or energetic, the system swaps the entire band to charcoal (`#323232`) or slate (`#1a1d22`) and reaches for the lime accent (`#bbf94f`), rather than stacking elevation. The app/product surface keeps the same flat philosophy with sharper 4px geometry.

## 7. Do's and Don'ts

### Do
- Use Pretendard weight 700 for every headline and weight 400 for body — the weight split is the hierarchy
- Reserve royal blue (`#084fff`) for the primary marketing CTA — keep it the single "action" color
- Use warm near-black (`#1c1c1c`) for text instead of pure black
- Separate sections with flat tint (`#f9fafb`) and `#e0e0e0` hairlines, plus light/dark band alternation
- Deploy the lime accent (`#bbf94f`) sparingly and only on dark sections (`#323232`, `#1a1d22`)
- Use full pill geometry (9999px) for the primary CTA and 20px for cards
- Switch to the tighter app variant (`#3971ff`, 4px corners) on product/login/tool surfaces
- Keep body copy at a generous 18px / 1.5 line-height for long marketing pages

### Don't
- Spread the blue across many elements — it dilutes the single-action signal
- Use the lime (`#bbf94f`) on white/light backgrounds — it only reads on dark bands
- Use pure black (`#000000`) for body text — reserve near-black `#1c1c1c`
- Lean on drop shadows for elevation — separate with tint, hairlines, and dark bands
- Mix the marketing pill chrome and the app 4px chrome on the same surface — keep the two registers distinct
- Add a second saturated accent — blue is the action color, lime is the lone dark-section accent
- Set headlines in a light weight — display is always bold (700)
- Add heavy decorative letter-spacing — the system is size- and weight-driven

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, segment cards stack/scroll |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, wide centered column, multi-column feature bands |

### Touch Targets
- Primary CTA at 56px height, full pill — an unmistakable tap target
- Selector chips at 46px height; circular icon buttons at 48px
- App/login inputs at 48px height with comfortable 14px 12px padding
- Nav items at 40px height with 8px 12px padding

### Collapsing Strategy
- Hero: 48px section headlines scale down on mobile, weight 700 maintained
- Segment-card row: horizontal scroll / wrap on narrow viewports
- Feature bands: multi-column → stacked single column
- Light/dark alternating sections maintain full-width treatment, reduce internal padding

### Image Behavior
- Product screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain their 20px radius across breakpoints
- Dark hero bands keep full-bleed treatment with the lime accent intact

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Cafe24 Blue (`#084fff`)
- App/product action: App Blue (`#3971ff`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f9fafb`), Surface Alt (`#f0f2f3`)
- Heading / body text: Ink (`#1c1c1c`)
- Nav text: Nav Grey (`#616161`)
- Secondary text: Body Grey (`#5f5f5f`), Muted (`#757575`)
- Faint / placeholder: Faint (`#bfbfbf`)
- Dark sections: Charcoal (`#323232`), Slate Deep (`#1a1d22`), Navy (`#012255`)
- Dark-section accent: Lime (`#bbf94f`)
- Hairline: `#e0e0e0` / `#e6e8eb`

### Example Component Prompts
- "Create a hero on white background. Section headline at 48px Pretendard weight 700, line-height 1.21, color #1c1c1c. Below it a row of rounded persona cards: #f9fafb background, 20px radius, 40px 32px padding, no shadow, 20px/700 titles. One primary CTA: #084fff background, white text, 9999px pill radius, 0 32px padding, 56px height, 18px/700 — '지금 무료로 시작하기'."
- "Design a dark feature band: #1a1d22 background, full-width. Headline 40px Pretendard weight 700, letter-spacing -0.4px, white text. Use lime #bbf94f sparingly for one emphasis word. No shadow."
- "Build a login form: white card. Text input — #ffffff background, 1px solid #d6dae1 border, 4px radius, 14px 12px padding, 48px height, #1b1e26 text. Submit button — #3971ff background, white text, 4px radius, 56px height, 16px/700 — '로그인'."
- "Create a step section: numbered badges with #e6edff background, #084fff text, 8px radius, 14px/800. Category tags with #f7f8fa background, #5f5f5f text, 6px radius, 4px 9px padding."

### Iteration Guide
1. Pretendard 700 for every headline; 400 for every paragraph
2. Royal blue (`#084fff`) is the single marketing action color — don't spread it
3. No shadows — separate with `#f9fafb` tint, `#e0e0e0` hairlines, and light/dark band alternation
4. Lime (`#bbf94f`) only on dark bands, only as a sparing accent
5. Text is `#1c1c1c` near-black, never pure black for body
6. Pill CTA (9999px), 20px cards, 24px chips on marketing; 4px buttons/inputs on the app surface
7. Body copy at 18px / 1.5 line-height

---

## 10. Voice & Tone

Cafe24's voice is **encouraging, plain-spoken, and enabling** — it talks to would-be merchants the way a capable colleague would, removing intimidation from the act of starting and running an online store. The register is reassuring and can-do ("처음이어도 할 수 있어요!" / "You can do it even your first time"), promising ease without hype. Copy frames Cafe24 as the partner that handles the hard, administrative parts so the merchant can focus on their product and brand.

| Context | Tone |
|---|---|
| Hero headlines | Encouraging, capability-framed. "모든 단계를 PRO처럼 쉽게 시작하세요." Confident, never fear-based. |
| Segment labels | Plain and inclusive. "신규 창업자", "크리에이터", "기업형", "글로벌" — names the user, not a feature. |
| CTAs | Direct, low-pressure, free-first. "지금 무료로 시작하기", "체험하기". |
| Feature descriptions | Benefit-first, ease-led. Explains what Cafe24 does *for* the merchant. |
| Step / onboarding copy | Reductive in a good way. "3가지만 결정하면 시작할 수 있어요" — shrinks the perceived effort. |

**Voice samples (verbatim from live surfaces, 2026-06-26):**
- "Cafe24 - No.1 E-Commerce Platform" — homepage H1 (positioning). *(verified live)*
- "모든 단계를 PRO처럼 쉽게 시작하세요" — section hero (ease promise). *(verified live)*
- "처음이어도 할 수 있어요!" — section hero (encouragement). *(verified live)*
- "3가지만 결정하면 시작할 수 있어요" — step section (effort reduction). *(verified live)*
- "쇼핑몰 운영에 필요한 모든 솔루션, 카페24 스토어 하나로 연결" — store hub headline (one-stop promise). *(verified live)*

**Forbidden register**: fear-based urgency, jargon-heavy enterprise speak that intimidates first-time sellers, over-promising "get rich" hype, and any tone that makes commerce feel gated behind expertise.

## 11. Brand Narrative

Cafe24 (카페24) was founded in **1999** by **이재석 (Lee Jae-suk, Founder & CEO)** and is operated by Cafe24 Corp., headquartered in Seoul. It grew into Korea's foundational global e-commerce platform — providing the infrastructure to **build, operate, and market** online stores on a one-stop basis. In 2018 it became the first company to enter the KOSDAQ market via Korea's "Tesla listing" route (ticker 042000), and in 2021 **Naver** acquired roughly a 20% stake to deepen the two companies' commerce partnership ([KED Global](https://www.kedglobal.com/m-as/newsView/ked202108090008), [Cafe24 Wikipedia](https://en.wikipedia.org/wiki/Cafe24)).

The company's founding premise is merchant empowerment. As founder Jaesuk Lee put it, *"With a merchant-centric approach, Cafe24 aims to help merchants concentrate on their creativity"* and *"Merchants need to focus on their brand content to differentiate their products. Thus, they must be free as much as possible from administrative work"* ([Cafe24 Newsroom Q&A](https://news.cafe24.com/global/qna-with-jaesuk-lee-founder-and-ceo-of-cafe24/)). That philosophy — take the operational burden off the seller so they can focus on creativity and brand — is visible in everything from the "원스톱 운영대행" (one-stop operations agency) framing to the "처음이어도 할 수 있어요" encouragement.

What Cafe24's design refuses: the intimidating density of legacy commerce-admin software and fear-based sales urgency. What it embraces: an airy, encouraging marketing surface; a single trustworthy blue for action; bold Pretendard headlines that speak plainly; and a dual register that keeps the merchant-facing app tight and utilitarian while the public site stays warm and inviting. The lime-on-dark accent is the brand's one note of momentum — a signal that commerce here is energetic, not bureaucratic.

## 12. Principles

1. **Merchant-centric — free them to create.** Cafe24's stated mission is to let merchants "concentrate on their creativity" by absorbing administrative work. *UI implication:* reduce perceived effort everywhere — "3가지만 결정하면" step compression, one-stop framing, free-first CTAs.
2. **Encouragement over intimidation.** Commerce should feel achievable for a first-timer. *UI implication:* can-do headlines ("처음이어도 할 수 있어요"), inclusive segment labels, low-pressure language.
3. **One action, one blue.** Royal blue (`#084fff`) means "do this." *UI implication:* reserve the saturated blue for the primary CTA so the next step is never ambiguous.
4. **Flat and friendly.** Clarity beats decorative depth. *UI implication:* no shadow stacks; separate with tint, hairlines, and bold light/dark band alternation; round the corners.
5. **Two registers, kept distinct.** A warm, inviting marketing site and a tight, utilitarian merchant app. *UI implication:* pill/`#084fff` chrome for marketing; sharp 4px/`#3971ff` chrome for the product/login surfaces — never blur the two.
6. **Restrained swagger.** *UI implication:* the lime accent (`#bbf94f`) appears rarely and only on dark bands — energy that lands because it is scarce.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Cafe24 user segments (first-time founders, creators, migrating merchants, enterprise and global sellers), not individual people.*

**김도윤, 28, 서울.** A first-time founder launching a small apparel brand. Has never run a store and is intimidated by the operational side. Chose Cafe24 because the homepage promised "처음이어도 할 수 있어요" and a free start — it made commerce feel approachable rather than expert-gated.

**이서아, 31, 경기.** A YouTube creator turning an audience into a shop. Uses Cafe24's creator-segment entry and YouTube Shopping tie-in. Values that the platform handles fulfillment and operations so she can stay focused on content and brand.

**박준호, 45, 부산.** Operations lead at a mid-size brand migrating off another solution. Came in through the "쇼핑몰 솔루션 이전" (migration) path. Cares about a tight, fast merchant admin — appreciates the utilitarian app surface that gets out of his way.

**Mei Chen, 38, Singapore.** A cross-border seller using Cafe24's global tooling to reach Korean and international buyers. Trusts the platform's one-stop "build, operate, market" promise and its scale as Korea's foundational commerce infrastructure.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no stores / no products yet)** | White canvas. Single Ink (`#1c1c1c`) line at body size with an encouraging next step, plus one blue CTA (`#084fff`) to start. No intimidation, no clutter. |
| **Empty (dashboard, no data)** | Muted (`#757575`) single line explaining nothing's here yet, with a path to the first action. Calm and reductive. |
| **Loading (page/section)** | Skeleton blocks on `#f9fafb` tint at final card dimensions, 20px radius. Flat pulse, consistent with the shadowless system. |
| **Loading (app submit)** | Inline progress on the `#3971ff` button; the field stays visible. |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "필수". Border tone shifts on the affected field. |
| **Error (operation failed)** | Inline message in Ink with a plain-language explanation and a retry — never a bare "오류가 발생했습니다". |
| **Success (action saved)** | Brief inline confirmation in a calm tone; next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#f9fafb` blocks at final dimensions, 20px radius, flat pulse. |
| **Disabled** | Faint (`#bfbfbf`) text on a reduced-opacity surface; blue actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Card/section reveal, carousel slide, dropdown |
| `motion-slow` | 360ms | Page-level transitions, light/dark band crossfade |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, carousel |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and friendly — consistent with the flat, approachable aesthetic. The hero carousel advances on `motion-standard / ease-enter`; persona cards and feature bands fade-in from below as they enter the viewport. Transitions into dark bands use a `motion-slow` background crossfade so the shift in register feels intentional rather than jarring. No bounce or spring on core chrome — a commerce platform signals dependability, not gimmickry. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the carousel pauses; the page remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on three brand-owned surfaces:
- https://www.cafe24.com — modern marketing site (Pretendard). Primary CTA "지금 무료로 시작하기"
  bg rgb(8,79,255) #084fff / radius 9999px / 56px / 18px·700. Ink rgb(28,28,28) #1c1c1c.
  Section H2 48px·700 / store H3 40px·700·-0.4px. Persona cards #f9fafb / 20px / 40px·32px.
  Tag chips #f7f8fa / #5f5f5f / 6px. Step badge bg #e6edff / fg #084fff / 8px·800.
  Lime rgb(187,249,79) #bbf94f as fg accent on dark bands (#323232, #1a1d22, #012255).
- https://developers.cafe24.com/design/front/smart — developer design docs (legacy Noto Sans KR chrome).
- https://eclogin.cafe24.com/Shop/ — product/login app. Input bg #ffffff / border 1px #d6dae1 /
  4px / 14px·12px / 48px / text rgb(27,30,38) #1b1e26. Submit button bg rgb(57,113,255) #3971ff / 4px / 56px.

Token-level claims (§1-9) are sourced from this live inspection. Voice samples (§10) are verbatim
from the live homepage (H1, section heroes, store hub headline).

Brand narrative (§11): Cafe24 Corp., founded 1999 by 이재석 (Lee Jae-suk, Founder & CEO); Korea's
foundational global e-commerce platform; 2018 KOSDAQ "Tesla listing" (ticker 042000); Naver ~20%
stake 2021. Founder quotes ("merchant-centric approach… concentrate on their creativity";
"must be free as much as possible from administrative work") are verbatim from the Cafe24 Newsroom
Q&A (news.cafe24.com, brand-owned). Listing/ownership facts cross-referenced via KED Global and
Wikipedia.

Personas (§13) are fictional archetypes informed by publicly observable Cafe24 user segments
(first-time founders, creators, migrating merchants, enterprise/global sellers). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "one action, one blue", "two registers kept distinct", "restrained
swagger via lime-on-dark") are editorial readings connecting Cafe24's observed design to its stated
merchant-centric philosophy, not directly sourced Cafe24 statements.
-->
