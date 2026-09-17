---
id: greeting
name: Greeting
display_name_kr: 그리팅
country: KR
category: saas
homepage: "https://www.greetinghr.com"
primary_color: "#1890ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=greetinghr.com&sz=128"
verified: "2026-06-11"
added: "2026-06-11"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-11"
  note: "primary = live CTA azure (#1890ff); dark CTA/ink (#0f0f0f, #171717). Deep navy stat band bg (#001946). Text on a zinc neutral ladder (#27272a→#71717a→#a1a1aa). Surfaces white/near-white with light-blue tints (#f2f9ff, #e4f0fc)."
  colors:
    primary: "#1890ff"
    primary-hover: "#2c93f2"
    primary-deep: "#0a58a1"
    ink: "#0f0f0f"
    ink-soft: "#171717"
    heading: "#27272a"
    body: "#3f3f46"
    muted: "#71717a"
    faint: "#a1a1aa"
    hairline: "#e4e4e7"
    disabled: "#d4d4d8"
    navy: "#001946"
    canvas: "#ffffff"
    surface: "#fcfcfc"
    surface-alt: "#fafafa"
    surface-zinc: "#f4f4f5"
    tint-blue: "#f2f9ff"
    tint-blue-alt: "#e4f0fc"
    success: "#4ba63d"
    on-primary: "#ffffff"
  typography:
    family: { display: "Pretendard SemiBold", body: "Pretendard Regular", numeral: "Poppins" }
    hero-accent:  { size: 60, weight: 600, lineHeight: 1.20, tracking: -0.6, use: "Hero accent word 채용 성공, Pretendard SemiBold, azure" }
    display:      { size: 48, weight: 600, lineHeight: 1.30, tracking: -0.48, use: "Primary section headline, Pretendard SemiBold" }
    section:      { size: 36, weight: 600, lineHeight: 1.20, tracking: -0.36, use: "Band headline, Pretendard SemiBold" }
    feature:      { size: 28, weight: 600, lineHeight: 1.40, tracking: -0.56, use: "Feature card heading, Pretendard SemiBold" }
    quote:        { size: 24, weight: 600, lineHeight: 1.50, tracking: -0.24, use: "Testimonial quote, Pretendard SemiBold" }
    card-title:   { size: 20, weight: 600, lineHeight: 1.50, tracking: -0.4, use: "Product card title, Pretendard SemiBold" }
    label:        { size: 16, weight: 600, lineHeight: 1.00, tracking: -0.16, use: "Eyebrow / badge H1-H2 labels, Pretendard SemiBold" }
    numeral:      { size: 175, weight: 400, lineHeight: 1.00, tracking: -8.74, use: "Big stat numeral 10,000+, Poppins" }
  spacing: { xs: 4, sm: 8, base: 12, md: 16, lg: 20, xl: 25, xxl: 48, section: 80 }
  rounded: { sm: 4, md: 8, lg: 16, xl: 30, pill: 50 }
  shadow:
    none: "none"
    card-inset: "rgba(255,255,255,0.12) 0px 0px 2px 0px inset"
  components:
    button-primary: { type: button, bg: "#1890ff", fg: "#ffffff", radius: "4px", padding: "5px 8px 5px 12px", height: "36px", font: "12px / 600 Pretendard", states: "hover #2c93f2", use: "Header 도입 문의 azure CTA" }
    button-dark: { type: button, bg: "#0f0f0f", fg: "#ffffff", radius: "4px", padding: "14px 25px", height: "50px", font: "12px / 600 Pretendard", states: "hover #171717", use: "Primary dark CTA 도입 문의하기 / 견적 문의하기" }
    button-white: { type: button, bg: "#ffffff", fg: "#171717", radius: "4px", padding: "14px 25px", height: "50px", border: "1px solid #e4e4e7", font: "12px / 600 Pretendard", use: "Secondary CTA 무료 체험하기 / 서비스 소개서 다운로드" }
    badge-pill: { type: badge, bg: "#ffffff", fg: "#0f0f0f", radius: "50px", padding: "8px 20px", height: "32px", font: "12px / 600 Pretendard", use: "국내 1위 채용 관리 솔루션 eyebrow pill" }
    badge-tag: { type: badge, bg: "#ffffff", fg: "#0f0f0f", radius: "6px", padding: "8px 10px", height: "30px", border: "1px solid #e4e4e7", font: "12px / 600 Pretendard", use: "Pricing feature tag 소규모 팀 추천 / 커뮤니케이션" }
    card-product: { type: card, bg: "#fafafa", fg: "#27272a", radius: "16px", padding: "16px", use: "Hero product feature card 채용 홈페이지/다이렉트 소싱" }
    card-zinc: { type: card, bg: "#f4f4f5", fg: "#27272a", radius: "8px", use: "Light zinc list / menu surface" }
    card-pricing: { type: card, bg: "#001946", fg: "#ffffff", radius: "30px", shadow: "rgba(255,255,255,0.12) 0px 0px 2px 0px inset", use: "Pricing plan card on deep navy band" }
    nav-link: { type: tab, fg: "#171717", font: "12px / 600 Pretendard", radius: "4px", padding: "18px 12px", active: "azure #1890ff text on active", use: "Top nav item 제품/솔루션/가격" }
  components_harvested: true
---

# Design System Inspiration of Greeting

## 1. Visual Theme & Atmosphere

Greeting (그리팅) is Korea's self-described #1 recruitment-management SaaS — an applicant-tracking system (ATS) built by the operator 두들린 (Doodlin) — and its marketing surface reads like a confident, enterprise-grade B2B product that has shed the heaviness of legacy HR software. The canvas is overwhelmingly white (`#ffffff`) and near-white (`#fcfcfc`, `#fafafa`), with content segmented into airy full-width bands. Text rides a cool, near-neutral zinc ladder — headings in `#27272a`, body in `#3f3f46`, supporting copy fading through `#71717a` to `#a1a1aa` — which gives the page a clean, modern, slightly technical temperature rather than warm or playful. The brand's single saturated accent is a bright azure (`#1890ff`), reserved for the hero accent word ("채용 성공") and the primary inquiry CTA, so the eye learns to read that one blue as "the action / the promise."

Typographically the system is unmistakably Korean-product-modern: every headline and UI label runs in **Pretendard SemiBold** with characteristic tight negative tracking that scales with size (-0.6px at 60px, -0.48px at 48px, -0.36px at 36px, -0.56px at 28px), while body and dense UI copy fall to **Pretendard Regular**. The one departure is the oversized statistic numeral — "10,000+" rendered at ~175px in **Poppins** — a deliberate Latin-numeral flourish that lets the headline metric breathe at billboard scale. The result is a layout that feels engineered and trustworthy: bold where it persuades (SemiBold display, azure accent, giant proof numbers), quiet where it informs (Regular body on a muted zinc scale).

What distinguishes Greeting from flashier consumer fintech is its corporate restraint. Buttons are tight 4px-radius rectangles rather than pills; the primary persuasion CTA is often near-black (`#0f0f0f` / `#171717`) rather than colored, with azure held in reserve for the header inquiry button. Depth is almost entirely flat — `box-shadow: none` across nav, hero, and feature cards — separation comes from background shifts (white → `#fafafa` → deep navy `#001946`) and thin `#e4e4e7` hairlines. The one place the system goes dramatic is the dark proof/pricing band: a deep navy (`#001946`) surface carrying the giant white stat numeral and the pricing plan cards (30px radius, a faint white inset rim). This light-to-dark rhythm — clean white product story, then a confident navy "by the numbers" — is the signature of the page.

**Key Characteristics:**
- Pretendard SemiBold for every headline/label; Pretendard Regular for body — weight + tracking carry hierarchy
- Single azure accent (`#1890ff`) reserved for hero accent word and header inquiry CTA
- Near-black CTAs (`#0f0f0f` / `#171717`) for primary persuasion buttons, azure held back
- Cool zinc neutral ladder (`#27272a` → `#3f3f46` → `#71717a` → `#a1a1aa`) for text hierarchy
- Tight 4px-radius rectangular buttons (corporate, not pill-y); 16px cards; 30px pricing cards
- Flat depth: `box-shadow: none`; separation by background tint + `#e4e4e7` hairlines
- Light-to-dark band rhythm — white product story → deep navy (`#001946`) proof/pricing band
- Poppins for the oversized billboard stat numeral (10,000+) at ~175px
- Negative tracking scales with size (-0.6px at 60px down to -0.16px at 16px)

## 2. Color Palette & Roles

### Primary
- **Greeting Azure** (`#1890ff`): Primary brand accent and CTA color. The saturated blue on the hero accent word ("채용 성공") and the header 도입 문의 inquiry button — the system's single "action / promise" color.
- **Azure Hover** (`#2c93f2`): Slightly lighter azure observed on interactive/hover blue surfaces.
- **Deep Azure** (`#0a58a1`): A darker blue used for stronger blue accents and deep links.

### Ink & CTA
- **Ink Black** (`#0f0f0f`): Near-black background for the primary dark CTA buttons (도입 문의하기, 견적 문의하기) and maximum-contrast labels.
- **Ink Soft** (`#171717`): Soft near-black for primary headings on dark CTAs and strong labels.
- **Deep Navy** (`#001946`): The dramatic dark band background — carries the giant white stat numeral and the pricing plan cards.

### Text Hierarchy (Zinc ladder)
- **Heading** (`#27272a`): Primary feature-card and product headings.
- **Body** (`#3f3f46`): Secondary body copy and small headings.
- **Muted** (`#71717a`): Tertiary text, captions, metadata.
- **Faint** (`#a1a1aa`): Lowest-emphasis labels, footnotes (e.g. "*2026년 1월 그리팅 이용 고객사").
- **Disabled** (`#d4d4d8`): Disabled text, lowest contrast.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, cards, text on dark/azure.
- **Surface** (`#fcfcfc`): Near-white nav/button surface.
- **Surface Alt** (`#fafafa`): Warm-neutral product card background.
- **Surface Zinc** (`#f4f4f5`): Cool light zinc list / menu surface.
- **Hairline** (`#e4e4e7`): Thin borders, dividers, card outlines — the primary separation device in the shadowless system.
- **Tint Blue** (`#f2f9ff`): Faint blue wash for highlighted blue zones.
- **Tint Blue Alt** (`#e4f0fc`): Slightly stronger blue tint for emphasis blocks.

### Semantic
- **Success Green** (`#4ba63d`): Positive/success accent observed on checkmarks and confirmation marks.

## 3. Typography Rules

### Font Family
- **Display / UI**: `Pretendard SemiBold` — used for all headlines, nav, labels, and button text at weight 600.
- **Body**: `Pretendard Regular` — body copy and dense UI text at weight 400.
- **Numeral**: `Poppins` — reserved for the oversized billboard statistic numeral (10,000+).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero Accent | Pretendard SemiBold | 60px | 600 | 72px (1.20) | -0.6px | Hero accent word "채용 성공", azure `#1890ff` |
| Display | Pretendard SemiBold | 48px | 600 | 62.4px (1.30) | -0.48px | Primary section headline |
| Section | Pretendard SemiBold | 36px | 600 | 43.2px (1.20) | -0.36px | Band headline |
| Feature | Pretendard SemiBold | 28px | 600 | 39.2px (1.40) | -0.56px | Feature card heading |
| Quote | Pretendard SemiBold | 24px | 600 | 36px (1.50) | -0.24px | Testimonial quote |
| Card Title | Pretendard SemiBold | 20px | 600 | 30px (1.50) | -0.4px | Product card title |
| Label / Eyebrow | Pretendard SemiBold | 16px | 600 | 16px (1.00) | -0.16px | Badge / eyebrow labels |
| Big Numeral | Poppins | ~175px | 400 | 1.00 | -8.74px | "10,000+" billboard stat |

### Principles
- **One family, two weights**: Pretendard SemiBold (600) carries every headline and label; Pretendard Regular (400) carries body. The weight contrast is the primary hierarchy signal.
- **Tracking compresses with size**: -0.6px at 60px, -0.48px at 48px, -0.36px at 36px, narrowing toward -0.16px at 16px. Display compresses; small text relaxes.
- **Latin numerals get Poppins**: big proof statistics switch to Poppins for a confident billboard read, while Korean copy stays Pretendard.
- **Tight, technical, calm**: negative tracking + cool zinc color give the type an engineered, enterprise-trustworthy feel rather than a warm consumer one.

## 4. Component Stylings

### Buttons

**Azure Inquiry CTA (Primary)**
- Background: `#1890ff`
- Text: `#ffffff`
- Radius: 4px
- Padding: 5px 8px 5px 12px
- Font: 12px Pretendard SemiBold weight 600
- Height: 36px
- Hover: `#2c93f2`
- Use: Header 도입 문의 azure call-to-action — the system's single colored action

**Dark CTA**
- Background: `#0f0f0f`
- Text: `#ffffff`
- Radius: 4px
- Padding: 14px 25px
- Font: 12px Pretendard SemiBold weight 600
- Height: 50px
- Hover: `#171717`
- Use: Primary persuasion buttons (도입 문의하기, 견적 문의하기)

**White Secondary CTA**
- Background: `#ffffff`
- Text: `#171717`
- Border: 1px solid `#e4e4e7`
- Radius: 4px
- Padding: 14px 25px
- Font: 12px Pretendard SemiBold weight 600
- Height: 50px
- Use: Secondary actions (무료 체험하기, 서비스 소개서 다운로드)

### Cards & Containers

**Product Feature Card**
- Background: `#fafafa`
- Text: `#27272a`
- Radius: 16px
- Padding: 16px
- Use: Hero product feature cards (채용 홈페이지 빌더, 다이렉트 소싱, 인재풀 구축)

**Zinc List Surface**
- Background: `#f4f4f5`
- Text: `#27272a`
- Radius: 8px
- Use: Light zinc list / menu surface and grouped tiles

**Pricing Plan Card**
- Background: `#001946`
- Text: `#ffffff`
- Radius: 30px
- Shadow: `rgba(255,255,255,0.12) 0px 0px 2px 0px inset`
- Use: Pricing plan cards on the deep navy proof band

### Badges

**Eyebrow Pill**
- Background: `#ffffff`
- Text: `#0f0f0f`
- Radius: 50px
- Padding: 8px 20px
- Font: 12px Pretendard SemiBold weight 600
- Height: 32px
- Use: Eyebrow pill ("국내 1위 채용 관리 솔루션")

**Feature Tag**
- Background: `#ffffff`
- Text: `#0f0f0f`
- Border: 1px solid `#e4e4e7`
- Radius: 6px
- Padding: 8px 10px
- Font: 12px Pretendard SemiBold weight 600
- Height: 30px
- Use: Pricing feature tags (소규모 팀 추천, 커뮤니케이션, 캘린더 연동)

### Navigation
- Background: `#ffffff`
- Text: `#171717`
- Font: 12px Pretendard SemiBold weight 600
- Radius: 4px (hover surface)
- Padding: 18px 12px
- Active: azure `#1890ff` text on active item
- Use: Top horizontal nav (왜 그리팅인가, 제품, 솔루션, 고객 사례, 가격, 유용한 자료)

---

**Verified:** 2026-06-11 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.greetinghr.com, https://www.greetinghr.com/pricing, https://blog.greetinghr.com, https://www.doodlin.co.kr
**Tier 2 sources:** getdesign.md/greeting (no data) | styles.refero.design (no Greeting match — search returns Workable/other ATS, not Greeting)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 20px, 25px, 48px, 80px
- Notable: CTA buttons land at 14px×25px padding (50px tall); nav links at 18px×12px

### Grid & Container
- Centered single-column hero with the azure accent word as the focal anchor
- Product features arranged as a row of `#fafafa` cards (16px radius)
- Sections alternate white (`#ffffff` / `#fcfcfc` / `#fafafa`) full-width bands
- The proof/pricing section flips to a deep navy (`#001946`) band carrying the giant Poppins numeral and 30px-radius plan cards

### Whitespace Philosophy
- **Breathing room over density**: generous vertical rhythm (≈80px) between bands despite information-rich enterprise content.
- **Flat segmentation**: bands separate by background tint (white → `#fafafa` → navy `#001946`) and `#e4e4e7` hairlines, not by shadow.
- **Light-to-dark crescendo**: the layout builds from clean white product storytelling to a dramatic navy "by the numbers" band.

### Border Radius Scale
- Small (4px): buttons — corporate, tight rectangles
- Medium (8px): zinc list/menu surfaces, eyebrow tag chips
- Large (16px): product feature cards
- XL (30px): pricing plan cards
- Pill (50px): eyebrow status pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, nav, hero, most feature cards |
| Tint (Level 1) | `#fafafa` / `#f4f4f5` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e4e4e7` border | White card/button outlines, dividers |
| Inset rim (Level 3) | `rgba(255,255,255,0.12) 0px 0px 2px 0px inset` | Pricing plan cards on the dark navy band |

**Shadow Philosophy**: Greeting is a near-shadowless system. Live inspection found `box-shadow: none` across the nav, hero, and feature cards. Depth and grouping are communicated through flat background tints (`#fafafa`, `#f4f4f5`) and thin `#e4e4e7` hairlines rather than drop shadows. The only elevation cue is a faint white inset rim (`rgba(255,255,255,0.12)`) on the pricing cards, which separates them from the deep navy `#001946` band without a heavy outer shadow. This keeps the enterprise UI feeling clean, fast, and modern.

## 7. Do's and Don'ts

### Do
- Use Pretendard SemiBold (weight 600) for every headline and label
- Use Pretendard Regular (400) for body and dense UI text
- Reserve azure (`#1890ff`) for the hero accent word and the header inquiry CTA — keep it the single colored action
- Use near-black (`#0f0f0f` / `#171717`) for primary persuasion CTAs
- Keep text on the cool zinc ladder (`#27272a` → `#71717a` → `#a1a1aa`)
- Use tight 4px-radius rectangular buttons — corporate, not pill-y
- Separate sections with background tint (`#fafafa`) and `#e4e4e7` hairlines, not shadows
- Flip to the deep navy band (`#001946`) for the proof/pricing crescendo
- Apply tight negative tracking that scales with size (-0.6px at 60px)
- Use Poppins for oversized billboard statistic numerals

### Don't
- Use drop shadows for elevation — Greeting is a flat, shadow-free system
- Spread azure across many elements — it dilutes the single-action signal
- Use pill-shaped (50px) radius on buttons — buttons are tight 4px rectangles
- Use warm or playful colors — the palette is cool zinc + azure
- Set headlines in a light weight — display is always SemiBold (600)
- Use pure black (`#000000`) for body text — text rides the zinc ladder
- Use positive letter-spacing at display sizes — Greeting tracks tight
- Use Pretendard for the giant proof numerals — those are Poppins

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, feature cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature/pricing bands |

### Touch Targets
- Primary CTAs at 50px height — comfortably tappable
- Header inquiry CTA at 36px height
- Nav links with 18px×12px padding within the header

### Collapsing Strategy
- Hero: 60px accent word + 48px headline scale down on mobile, weight 600 maintained
- Feature card row: multi-column → stacked single column
- Pricing plan cards: side-by-side → stacked, 30px radius maintained
- Deep navy proof band: full-width treatment with the big numeral scaling down

### Image Behavior
- Product screenshots carry no shadow at any size, consistent with the flat system
- Cards maintain 16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary accent / CTA: Greeting Azure (`#1890ff`)
- Dark CTA: Ink Black (`#0f0f0f`) / Ink Soft (`#171717`)
- Dark band: Deep Navy (`#001946`)
- Heading text: Heading (`#27272a`)
- Body text: Body (`#3f3f46`)
- Muted text: Muted (`#71717a`) / Faint (`#a1a1aa`)
- Background: Pure White (`#ffffff`)
- Surfaces: `#fafafa`, `#f4f4f5`
- Hairline: `#e4e4e7`
- Success: `#4ba63d`

### Example Component Prompts
- "Create a hero on white background. Eyebrow pill: white bg, 50px radius, 8px 20px padding, 12px Pretendard SemiBold, '국내 1위 채용 관리 솔루션'. Headline 48px Pretendard SemiBold weight 600, line-height 1.30, letter-spacing -0.48px, color #171717 — with the accent word '채용 성공' at 60px in azure #1890ff."
- "Design a product feature card: #fafafa background, 16px radius, 16px padding, no shadow. Title 20px Pretendard SemiBold, letter-spacing -0.4px, #27272a. Body 12px Pretendard Regular, #3f3f46."
- "Build a CTA row: primary dark button (#0f0f0f bg, white text, 4px radius, 14px 25px padding, 12px Pretendard SemiBold) + secondary white button (#ffffff bg, #171717 text, 1px solid #e4e4e7 border, 4px radius)."
- "Create a proof band: deep navy #001946 full-width. Giant numeral '10,000+' in Poppins at 175px, white, letter-spacing -8.74px. Below, pricing plan cards: #001946 bg, 30px radius, faint white inset rim rgba(255,255,255,0.12) 0 0 2px inset."

### Iteration Guide
1. Pretendard SemiBold (600) for every headline; Pretendard Regular (400) for body
2. Azure (`#1890ff`) is the single accent — reserve it for the hero word + inquiry CTA
3. Primary persuasion buttons are near-black (`#0f0f0f`), not colored
4. No shadows — separate with `#fafafa` tint and `#e4e4e7` hairlines
5. Buttons are tight 4px rectangles; cards 16px; pricing 30px
6. Text rides the zinc ladder (`#27272a` → `#71717a` → `#a1a1aa`), never pure black
7. Build to the deep navy band (`#001946`) for the proof/pricing crescendo

---

## 10. Voice & Tone

Greeting's voice is **confident, professional, and outcome-oriented** — an enterprise HR guide that frames recruiting not as administrative drudgery but as a strategic path to "채용 성공" (recruitment success). The hero line "채용 관리를 넘어 채용 성공으로" ("Beyond recruitment management, toward recruitment success") sets the register: it positions the product above mere tooling, promising an outcome. Copy speaks to HR practitioners and talent teams as capable professionals, leaning on proof ("국내 1위", "10,000+ 기업") rather than hype, and decoding the recruiting workflow into clear, named steps (모집 → 선발, 다이렉트 소싱, 인재풀 구축).

| Context | Tone |
|---|---|
| Hero headline | Outcome-framed, confident. "채용 관리를 넘어 채용 성공으로." Promise over feature. |
| Proof / stats | Quietly authoritative. "국내 1위 채용 관리 솔루션", "10,000+ 기업이 그리팅과 함께합니다." |
| Feature labels | Plain and functional. "다이렉트 소싱", "인재풀 구축", "채용 홈페이지 빌더". |
| CTAs | Direct, low-pressure. "무료 체험하기", "도입 문의하기", "1:1 맞춤 상담받기". |
| Section titles | Strategy-framed. "유연한 모집 전략", "데이터 기반 운영 · 최적화". |

**Voice samples (verbatim from live homepage):**
- "채용 관리를 넘어 채용 성공으로" — hero headline (outcome-framed promise). *(verified live 2026-06-11)*
- "국내 1위 채용 관리 솔루션" — eyebrow / positioning claim. *(verified live 2026-06-11)*
- "성과를 만드는 인재, 전략에 구애받지 말고 확보하세요" — section headline (strategic empowerment). *(verified live 2026-06-11)*

**Forbidden register**: aggressive sales urgency, exclamation-heavy hype, undefined HR jargon left unexplained, casual/cutesy consumer tone that undercuts enterprise trust.

## 11. Brand Narrative

Greeting (그리팅) is the flagship product of **두들린 (Doodlin)**, a Korean HR-tech company building software to fix a structural pain in Korean hiring: recruiting workflows scattered across email, spreadsheets, and disconnected tools, with no system of record from sourcing through selection. Greeting consolidates that workflow into a single applicant-tracking system (ATS) — "모집부터 선발까지, 수시부터 대규모 채용까지 그리팅 하나로" (from sourcing to selection, from rolling to large-scale hiring, all in one Greeting).

The product has grown into what the company describes as Korea's #1 recruitment-management solution, with **10,000+ companies** using it (per the homepage's "*2026년 1월 그리팅 이용 고객사" footnote). Its positioning thesis — "채용 관리를 넘어 채용 성공으로" — reframes the category from passive applicant-tracking into active recruiting outcomes: not just managing who applied, but helping teams source proactively (다이렉트 소싱), build talent pools (인재풀 구축), and run structured, data-driven evaluation.

What Greeting refuses, visible in its design: the heavy, dated chrome of enterprise HR legacy software (no shadow-stacked panels, no institutional gradients), and the gimmicky over-coloring of consumer apps. What it embraces: a clean white product canvas, a cool zinc type ladder, a single disciplined azure accent, and a confident navy "by the numbers" band — an enterprise tool that signals competence and trust without intimidation.

## 12. Principles

1. **Outcome over administration.** The product is sold as 채용 성공 (recruitment success), not just management. *UI implication:* lead with outcome-framed headlines and proof metrics; keep feature lists secondary to the promise.
2. **Proof over hype.** Authority comes from "국내 1위" and "10,000+", not exclamation marks. *UI implication:* give proof numbers billboard scale (Poppins 175px on the navy band); keep copy calm and declarative.
3. **One disciplined accent.** Azure (`#1890ff`) means "the action / the promise." *UI implication:* reserve azure for the hero accent word and the inquiry CTA; use near-black for other CTAs so the blue stays meaningful.
4. **Flat and clean.** Modern enterprise clarity beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; keep the page fast and scannable.
5. **Decode the workflow.** Recruiting is broken into clearly named, approachable steps. *UI implication:* label every stage plainly (모집, 다이렉트 소싱, 인재풀, 평가, 데이터 분석) so the product feels comprehensible.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Greeting user segments (Korean HR/talent-acquisition teams), not individual people.*

**박지현, 34, 서울.** An in-house HR manager at a mid-size company running both rolling and large-scale hiring. Tired of tracking applicants across email and spreadsheets; values one system of record from sourcing to selection. Chose Greeting because it consolidated the whole workflow.

**김도윤, 29, 경기.** A talent-acquisition lead focused on proactive sourcing. Uses 다이렉트 소싱 and 인재풀 구축 to reach candidates before they apply. Appreciates that the tool makes proactive recruiting feel structured rather than ad-hoc.

**이서연, 41, 서울.** A people-ops leader evaluating ATS vendors for the org. Wants proof (국내 1위, 10,000+ 고객사) and a clean, trustworthy interface she can present to executives. Trusts the calm, enterprise tone over flashier competitors.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no candidates yet)** | White canvas. Single Heading (`#27272a`) line explaining no applicants yet, with one azure CTA to post a job or import. No illustration clutter. |
| **Empty (no talent pool)** | Muted (`#71717a`) single line: nothing in the pool yet, plus a path to 인재풀 구축. Honest, calm. |
| **Loading (list fetch)** | Skeleton rows on `#fafafa` surface at final card dimensions, 16px radius. Flat pulse, no shadow shimmer — consistent with the shadowless system. |
| **Loading (action submit)** | Inline spinner within the dark CTA; previous state stays visible. |
| **Error (load failed)** | Inline message in Heading color with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다" — states the next step. |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "필수". |
| **Success (action complete)** | Brief inline confirmation, optionally with the `#4ba63d` success mark; next-step linked immediately below. No celebratory excess. |
| **Skeleton** | `#f4f4f5` / `#fafafa` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Disabled text (`#d4d4d8`) on reduced-opacity surface; azure actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, menu |
| `motion-slow` | 320ms | Page-level transitions, band reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, menus, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, clean enterprise aesthetic. Buttons respond to hover with a subtle background shift (azure `#1890ff` → `#2c93f2`, dark `#0f0f0f` → `#171717`); feature cards and bands fade-in from below at `motion-standard / ease-enter`. No bounce or spring — an enterprise recruiting product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-11) via playwright getComputedStyle on https://www.greetinghr.com and /pricing:
- Hero accent "채용 성공" — Pretendard SemiBold 60px / weight 600 / -0.6px / color rgb(24,144,255) #1890ff
- Section headline "성과를 만드는 인재, 전략에 구애받지 말고 확보하세요" — 48px / 600 / -0.48px / rgb(23,23,23) #171717
- Feature card H3 "지원자를 사로잡는 첫인상, 채용 홈페이지로부터" — 28px / 600 / -0.56px / rgb(39,39,42) #27272a
- Eyebrow pill "국내 1위 채용 관리 솔루션" — white bg, 50px radius, 8px 20px padding
- Header CTA "도입 문의" — bg rgb(24,144,255) #1890ff / radius 4px / height 36px
- Dark CTA "도입 문의하기" / "견적 문의하기" — bg rgb(15,15,15) #0f0f0f & rgb(23,23,23) #171717 / radius 4px / 14px 25px
- Big numeral "10,000+" — Poppins ~175px / -8.74px / white on navy rgb(0,25,70) #001946
- Pricing card — bg navy #001946 / radius 30px / inset rim rgba(255,255,255,0.12) 0 0 2px inset
- box-shadow: none across nav/hero/feature cards (shadowless system)
- document.title: "그리팅 | 채용 성공을 위한, 국내 1위 채용 관리 솔루션"

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage and blog title.

Brand narrative (§11): Greeting (그리팅) is operated by 두들린 (Doodlin) — confirmed via doodlin.co.kr
(operator careers page lists [그리팅] roles). "10,000+" and "국내 1위" are from the homepage; the operator
relationship is from the operator's own site. Specifics beyond these surfaces are general public knowledge,
not directly quoted from a verified company statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Greeting user segments
(Korean HR/TA teams). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "outcome over administration", "light-to-dark crescendo") are editorial readings
connecting Greeting's observed design to its positioning, not directly sourced Greeting statements.
-->
