---
id: bigin
name: Bigin
display_name_kr: 빅인
country: KR
category: marketing
homepage: "https://www.bigin.io"
primary_color: "#006fff"
logo:
  type: favicon
  slug: "https://www.bigin.io/favicon.ico"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = live CTA electric blue (#006fff); inline text links sit on a slightly deeper #0066cc. Hero band is a deep navy (#0b1335) with white type. Feature surfaces ladder through tinted blues (#f4f9ff -> #f1f5fd -> #e1f1ff) plus one mint accent (#dbf4eb / #7edbb9). Everything is SpoqaHanSansNeo at weight 700."
  colors:
    primary: "#006fff"
    link: "#0066cc"
    navy: "#0b1335"
    ink: "#000000"
    heading: "#3d4046"
    body: "#53585f"
    muted: "#7e8696"
    faint: "#b2c0cb"
    canvas: "#ffffff"
    surface-blue: "#f4f9ff"
    surface-tint: "#f1f5fd"
    accent-surface: "#e1f1ff"
    mint: "#dbf4eb"
    mint-border: "#7edbb9"
    hairline: "#e8eaee"
  typography:
    family: { display: "SpoqaHanSansNeo", body: "SpoqaHanSansNeo" }
    display-hero: { size: 56, weight: 700, lineHeight: 1.3, use: "Hero headline on navy band, Spoqa Han Sans Neo Bold" }
    section:      { size: 40, weight: 700, lineHeight: 1.4, use: "Section / feature titles" }
    plan-title:   { size: 32, weight: 700, use: "Pricing comparison heading" }
    subhead:      { size: 24, weight: 700, lineHeight: 1.5, use: "Feature subheads in slate #3d4046" }
    eyebrow:      { size: 20, weight: 700, use: "Section eyebrow category label in muted #7e8696" }
    body:         { size: 16, weight: 400, lineHeight: 1.3, use: "Body copy and inline links" }
    nav:          { size: 14, weight: 700, use: "Nav links and pill button labels" }
    link-arrow:   { size: 18, weight: 500, use: "Arrow more-links in #0066cc" }
  spacing: { xs: 4, sm: 8, base: 16, card: 26, lg: 40, section: 48 }
  rounded: { sm: 8, md: 20, lg: 24, xl: 32, full: 9999 }
  shadow:
    cta-glow: "rgba(0,104,255,0.4) 0px 4px 16px -4px"
    cta-glow-tight: "rgba(0,104,255,0.4) 2px 2px 8px 0px"
    card-ambient: "rgba(0,0,0,0.04) 0px 5px 51px 0px"
    none: "none"
  components:
    button-primary: { type: button, bg: "#006fff", fg: "#ffffff", radius: "20px", padding: "10px 15px", height: "40px", font: "14px / 700", shadow: "rgba(0,104,255,0.4) 2px 2px 8px", use: "Header 상담 신청 CTA, electric-blue pill" }
    button-cta-lift: { type: button, bg: "#006fff", fg: "#ffffff", radius: "24px", padding: "0 16px", height: "58px", font: "18px / 700", shadow: "rgba(0,104,255,0.4) 0px 4px 16px -4px", use: "Hero / pricing 상담 신청하기 lift CTA" }
    button-connect: { type: button, bg: "#006fff", fg: "#ffffff", radius: "8px", height: "36px", shadow: "rgba(0,111,255,0.4) 0px 4px 16px -4px", use: "Inline 연동 connect chip, the one square-ish blue button" }
    nav-link: { type: tab, fg: "#b2c0cb", active: "text #3d4046", font: "14px / 700", use: "Top nav item; muted #7e8696 on inner pages, slate on active" }
    feature-card: { type: card, bg: "#ffffff", border: "1px solid #e8eaee", radius: "20px", padding: "40px", shadow: "rgba(0,0,0,0.04) 0px 5px 51px", use: "Elevated white feature card" }
    tinted-card: { type: card, bg: "#f4f9ff", border: "1px solid rgba(0,0,0,0.05)", radius: "20px", padding: "48px", use: "Light-blue section container" }
    accent-card: { type: card, bg: "#e1f1ff", radius: "32px", padding: "28px 57px 48px 77px", use: "Blue accent feature block carrying the new tag" }
    mint-card: { type: card, bg: "#dbf4eb", border: "1px solid #7edbb9", radius: "20px", use: "Mint integration card / callout" }
    eyebrow-label: { type: badge, fg: "#7e8696", font: "20px / 700", use: "Section eyebrow category label (캠페인, 자동화)" }
    inline-link: { type: listItem, fg: "#0066cc", font: "16px / 400", use: "Inline body / footer text link" }
  components_harvested: true
---

# Design System Inspiration of Bigin

## 1. Visual Theme & Atmosphere

Bigin (빅인) is a Korean MarTech product — a full-funnel CRM marketing-automation platform built by Biginsight (빅인사이트) — and its marketing site reads like a confident SaaS dashboard turned outward: clean white canvas, one electric-blue action color, and a single dramatic dark band where the product narrative peaks. The page opens on a deep navy hero (`#0b1335`) with white display type, then drops into an airy white (`#ffffff`) editorial flow where feature stories sit inside soft blue-tinted cards. The single saturated accent is an electric blue (`#006fff`) that is reserved almost exclusively for the "상담 신청" (request consultation) call-to-action and a handful of connect/convert chips, so the eye is trained to read that one blue as "the next step." Inline text links use a slightly deeper, more legible blue (`#0066cc`).

The typographic personality is entirely **Spoqa Han Sans Neo at weight 700**. This is unusual: headlines, subheads, nav items, and even button labels all run Bold — Bigin builds hierarchy through *size* (56px hero down to 14px nav) rather than weight contrast, which gives the whole page a sturdy, engineered, declarative voice ("고객 획득부터 충성고객 확보까지 마케팅 전략은 선택이 아닌 필수입니다."). Only body copy and the arrow more-links relax to weight 400-500. Heading color shifts by context: pure black (`#000000`) on the brightest sections, a warmer slate (`#3d4046`) for inner-page titles and subheads, with descriptive copy in `#53585f` and eyebrow category labels in muted `#7e8696`.

What distinguishes Bigin from its fintech-blue peers is its **rounded, low-shadow, tint-laddered** surface language. The geometry is soft and consistent — a 20px radius is the workhorse (cards, sections, header pills), stretching to 24px on the hero CTA and 32px on the largest accent block, with one 8px exception for the small inline connect button. Depth is barely-there: most cards are flat, separated by a ladder of pale blue surfaces (`#f4f9ff` -> `#f1f5fd` -> `#e1f1ff`) plus a single mint accent block (`#dbf4eb` with a `#7edbb9` stroke), thin hairlines (`#e8eaee`), and faint nav text (`#b2c0cb`). When elevation appears it is whisper-soft (`rgba(0,0,0,0.04)` ambient on white feature cards) or a colored glow under the blue CTA. The result is a friendly, modern, data-product aesthetic — capable but unintimidating.

**Key Characteristics:**
- Spoqa Han Sans Neo at weight 700 across headlines, nav, and buttons — hierarchy by size, not weight
- Single saturated electric blue (`#006fff`) reserved for the primary 상담 신청 CTA and convert chips
- Deeper blue (`#0066cc`) for inline text links; arrow more-links at weight 500
- One dramatic deep-navy hero band (`#0b1335`) with white type, against an otherwise white page
- Soft 20px radius as the default geometry — 24px hero CTA, 32px largest accent block, 8px micro button
- Near-flat depth: pale blue tint ladder (`#f4f9ff` / `#f1f5fd` / `#e1f1ff`) + mint (`#dbf4eb` / `#7edbb9`) + `#e8eaee` hairlines
- Blue-tinted CTA glow shadow (`rgba(0,104,255,0.4)`) instead of neutral elevation
- Slate text ladder: `#000000` -> `#3d4046` -> `#53585f` -> `#7e8696` -> faint nav `#b2c0cb`

## 2. Color Palette & Roles

### Primary
- **Bigin Blue** (`#006fff`): Primary brand color and CTA background. The electric blue on the "상담 신청" pill and convert chips — the system's single "action" color.
- **Link Blue** (`#0066cc`): Deeper blue used for inline text links and footer links, tuned for legibility on white.
- **Hero Navy** (`#0b1335`): Deep navy background of the product-narrative hero band, carrying white display type.

### Text Hierarchy
- **Ink Black** (`#000000`): Maximum-contrast headings and body on the brightest white sections.
- **Slate Heading** (`#3d4046`): Inner-page H1s, feature subheads, and active nav — a warmer near-black.
- **Body Slate** (`#53585f`): Standard body copy and feature descriptions.
- **Muted Slate** (`#7e8696`): Eyebrow category labels, inactive inner-page nav, captions.
- **Faint Blue-Grey** (`#b2c0cb`): Lowest-emphasis nav text on the homepage header.

### Surface & Accent
- **Pure White** (`#ffffff`): Page background, white feature cards, text on blue/navy.
- **Surface Blue** (`#f4f9ff`): The lightest blue tint for full-width section containers.
- **Surface Tint** (`#f1f5fd`): A slightly cooler blue-grey block tint for description panels.
- **Accent Surface** (`#e1f1ff`): A stronger blue accent block (32px radius) for the headline "new" feature.
- **Mint** (`#dbf4eb`): The one non-blue accent surface, used for an integration callout block.
- **Mint Border** (`#7edbb9`): The green hairline stroke that outlines mint-themed integration cards.
- **Hairline** (`#e8eaee`): Thin neutral border on white feature cards and dividers.

## 3. Typography Rules

### Font Family
- **Display & Body**: `SpoqaHanSansNeo` (Spoqa Han Sans Neo) — used for the entire interface, headlines through body. Bold (700) carries every heading, nav item, and button label; Regular (400) and Medium (500) carry body copy and arrow links.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | SpoqaHanSansNeo | 56px (3.50rem) | 700 | ~1.3 | Hero headline on navy band, white |
| Section / Feature | SpoqaHanSansNeo | 40px (2.50rem) | 700 | ~1.4 | Section and feature titles |
| Pricing Title | SpoqaHanSansNeo | 32px (2.00rem) | 700 | normal | "플랜 별 기능 비교" comparison heading |
| Subhead | SpoqaHanSansNeo | 24px (1.50rem) | 700 | ~1.5 | Feature subheads in slate `#3d4046` |
| Eyebrow Label | SpoqaHanSansNeo | 20px (1.25rem) | 700 | normal | Section category label in muted `#7e8696` |
| Arrow Link | SpoqaHanSansNeo | 18px (1.13rem) | 500 | normal | "자세히 보기 →" more-links in `#0066cc` |
| Body | SpoqaHanSansNeo | 16px (1.00rem) | 400 | ~1.3 | Standard reading text, inline links |
| Nav / Button | SpoqaHanSansNeo | 14px (0.88rem) | 700 | normal | Nav items and pill button labels |

### Principles
- **One font, mostly one weight**: Spoqa Han Sans Neo Bold (700) carries the brand voice from 56px hero to 14px nav. Hierarchy comes from size, not from a light/heavy split.
- **Bold everywhere it persuades**: headings, nav, and button labels are all 700; only body copy and arrow links step down to 400-500.
- **Hangul-first sizing**: body sits at a comfortable 16px, generous for hangul legibility in a marketing context.
- **Slate, not pure black, for inner pages**: titles on the pricing and blog surfaces use `#3d4046` rather than `#000000`, softening the dense Bold type.

## 4. Component Stylings

### Buttons

**Primary CTA (상담 신청)**
- Background: `#006fff`
- Text: `#ffffff`
- Radius: 20px
- Padding: 10px 15px
- Height: 40px
- Font: 14px Spoqa Han Sans Neo weight 700
- Shadow: `rgba(0,104,255,0.4) 2px 2px 8px`
- Use: Header consultation-request CTA — the system's single primary action

**Lift CTA (상담 신청하기)**
- Background: `#006fff`
- Text: `#ffffff`
- Radius: 24px
- Padding: 0px 16px
- Height: 58px
- Font: 18px Spoqa Han Sans Neo weight 700
- Shadow: `rgba(0,104,255,0.4) 0px 4px 16px -4px`
- Use: Hero and pricing closing CTA with a stronger colored glow

**Connect Chip (연동)**
- Background: `#006fff`
- Text: `#ffffff`
- Radius: 8px
- Height: 36px
- Shadow: `rgba(0,111,255,0.4) 0px 4px 16px -4px`
- Use: Small inline connect button inside integration cards — the one square-ish blue control

### Inputs & Forms
- Background: `#ffffff`
- Border: 1px solid `#e8eaee`
- Radius: 8px
- Text: 16px Spoqa Han Sans Neo, `#3d4046`
- Focus: `#006fff` accent
- Use: Consultation / contact form fields (sales@bigin.io intake)

### Cards & Containers

**White Feature Card**
- Background: `#ffffff`
- Border: 1px solid `#e8eaee`
- Radius: 20px
- Padding: 40px
- Shadow: `rgba(0,0,0,0.04) 0px 5px 51px`
- Use: Elevated white feature card with a whisper-soft ambient shadow

**Tinted Section Container**
- Background: `#f4f9ff`
- Border: 1px solid `rgba(0,0,0,0.05)`
- Radius: 20px
- Padding: 48px
- Use: Full-width light-blue section grouping campaign/feature content

**Blue Accent Block**
- Background: `#e1f1ff`
- Radius: 32px
- Padding: 28px 57px 48px 77px
- Use: Headline accent feature block carrying the "new" tag

**Mint Integration Card**
- Background: `#dbf4eb`
- Border: 1px solid `#7edbb9`
- Radius: 20px
- Use: Integration callout card — the one non-blue accent surface

### Badges

**Eyebrow Label**
- Text: `#7e8696`
- Font: 20px Spoqa Han Sans Neo weight 700
- Use: Section category eyebrow above feature titles ("캠페인", "자동화 new")

### Navigation
- Background: `#ffffff`
- Text: `#b2c0cb` (homepage header) / `#7e8696` (inner pages)
- Active: slate `#3d4046`
- Font: 14px Spoqa Han Sans Neo weight 700
- Height: ~40px nav items
- Use: Top horizontal nav ("블로그", "플랜 안내", "회사 소개", "로그인/회원가입")

### Footer
- Links: `#0066cc` inline blue / muted slate
- Use: Footer navigation and contact (sales@bigin.io, 02-558-8867)

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces)
**Tier 1 sources:** https://www.bigin.io, https://www.bigin.io/pricing, https://www.bigin.io/company
**Tier 2 sources:** getdesign.md/bigin — not listed (404); styles.refero.design — Bigin not indexed (KR brand)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px
- Scale: 4px, 8px, 16px, 26px, 40px, 48px
- Notable: feature cards pad to 40px, tinted section containers to 48px, and a tighter 26px on compact item cards — generous, breathable rhythm typical of a SaaS marketing page

### Grid & Container
- Centered ~1200px content column
- Deep-navy (`#0b1335`) hero band anchors the top with a 56px white headline
- Feature stories alternate between white (`#ffffff`) and tinted-blue (`#f4f9ff`) full-width bands
- Two-up and grid feature cards at 20px radius group related capabilities
- Pricing uses a comparison table plus a closing navy CTA band

### Whitespace Philosophy
- **Breathing room over density**: despite being a data product, the marketing surface is airy, with large section padding (48px) and tall hero rhythm.
- **Tint segmentation**: sections separate by background tint (`#f4f9ff`, `#f1f5fd`, `#e1f1ff`, mint `#dbf4eb`) rather than heavy borders or shadows.
- **Rounded cadence**: the repeated 20px radius across cards, sections, and pills sets a soft, consistent horizontal rhythm.

### Border Radius Scale
- Small (8px): inline connect button, form fields
- Medium (20px): cards, section containers, header pills — the workhorse
- Large (24px): hero / pricing lift CTA
- Extra (32px): the largest blue accent feature block
- Full (9999px): pill/round decorative elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Most surfaces, tinted section blocks |
| Tint (Level 1) | Pale blue background shift (`#f4f9ff` / `#f1f5fd` / `#e1f1ff`) | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e8eaee` border | White feature card outlines, dividers |
| Ambient (Level 3) | `rgba(0,0,0,0.04) 0px 5px 51px` | Elevated white feature cards |
| Glow (CTA) | `rgba(0,104,255,0.4) 0px 4px 16px -4px` | Blue primary CTA colored lift |

**Shadow Philosophy**: Bigin is a near-flat system. Most cards rely on the pale-blue tint ladder and thin `#e8eaee` hairlines for separation; real elevation appears only as a whisper-soft ambient shadow (`rgba(0,0,0,0.04)`) on white feature cards. The one expressive shadow is the **blue-tinted CTA glow** (`rgba(0,104,255,0.4)`), which makes the electric-blue "상담 신청" pill feel lifted and clickable while staying on-brand — color, not neutral grey, does the lifting. The mint integration card adds depth through its `#7edbb9` border rather than a shadow.

## 7. Do's and Don'ts

### Do
- Use Spoqa Han Sans Neo at weight 700 for headlines, nav, and button labels — Bold is the brand voice
- Reserve electric blue (`#006fff`) for the primary 상담 신청 CTA and convert chips — keep it the single action color
- Use deeper `#0066cc` for inline text links and footer links
- Anchor the page with one deep-navy band (`#0b1335`) and white type, keeping the rest white
- Separate sections with the pale blue tint ladder (`#f4f9ff` / `#f1f5fd` / `#e1f1ff`) and `#e8eaee` hairlines
- Keep geometry soft — 20px radius default, 24px on the hero CTA, 32px on the largest accent block
- Use the blue-tinted glow (`rgba(0,104,255,0.4)`) under the CTA instead of a neutral shadow
- Step heading color from `#000000` to slate `#3d4046` on inner pages for a softer read

### Don't
- Build hierarchy with light weights — headings stay Bold (700), size carries the hierarchy
- Spread electric blue across many elements — it dilutes the single-action signal
- Use heavy drop shadows for elevation — Bigin separates with tint and hairlines
- Use sharp/square corners on cards — 20px rounding is the default (8px only for the micro connect chip)
- Introduce a second saturated accent — blue leads, with mint (`#dbf4eb` / `#7edbb9`) as the only secondary tint
- Use neutral grey shadows under the CTA — the lift is always blue-tinted
- Set body copy in Bold — only headings/nav/buttons are 700; body relaxes to 400

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, nav collapses to a drawer |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full ~1200px layout, multi-column feature bands |

### Touch Targets
- Primary CTA pill at 40px height; lift CTA at 58px for an unmistakable target
- Nav items at ~40px height within the header
- Connect chips at 36px height

### Collapsing Strategy
- Hero: 56px Spoqa headline scales down on mobile, weight 700 maintained
- Feature bands: multi-column grid -> stacked single column
- Tinted/white alternating sections maintain full-width treatment
- Nav: horizontal links -> hamburger drawer (icons-ic-drawer)

### Image Behavior
- Product screenshots sit inside 20px-radius cards across breakpoints
- The navy hero band retains its full-width treatment, reducing internal padding on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Bigin Blue (`#006fff`)
- Inline link: Link Blue (`#0066cc`)
- Hero band: Navy (`#0b1335`)
- Heading (bright): Ink Black (`#000000`)
- Heading (inner): Slate (`#3d4046`)
- Body text: Body Slate (`#53585f`)
- Muted / eyebrow: Muted Slate (`#7e8696`)
- Faint nav: Faint Blue-Grey (`#b2c0cb`)
- Background: Pure White (`#ffffff`)
- Tinted surfaces: `#f4f9ff`, `#f1f5fd`, `#e1f1ff`
- Mint accent: `#dbf4eb` with `#7edbb9` border
- Hairline: `#e8eaee`

### Example Component Prompts
- "Create a navy hero (`#0b1335`) with a white 56px Spoqa Han Sans Neo weight 700 headline. Below it a blue CTA pill: `#006fff` background, white text, 24px radius, 18px Bold, glow shadow `rgba(0,104,255,0.4) 0px 4px 16px -4px` — '상담 신청'."
- "Design a white feature card: `#ffffff` background, 1px solid `#e8eaee` border, 20px radius, 40px padding, ambient shadow `rgba(0,0,0,0.04) 0px 5px 51px`. Title 24px Spoqa weight 700 in `#3d4046`, body 16px weight 400 in `#53585f`."
- "Build a tinted section: `#f4f9ff` background, 20px radius, 48px padding. Eyebrow label 20px weight 700 in `#7e8696` ('캠페인'), section title 40px weight 700 in `#000000`."
- "Create top nav: white header, 14px Spoqa weight 700 links in `#b2c0cb`, slate `#3d4046` on active, blue `#006fff` 20px-radius CTA pill right-aligned."

### Iteration Guide
1. Spoqa Han Sans Neo at weight 700 for every heading, nav item, and button; 400-500 for body and arrow links
2. Electric blue (`#006fff`) is the single action color — keep inline links on `#0066cc`
3. One navy band (`#0b1335`); the rest is white with a pale-blue tint ladder
4. 20px radius default, 24px hero CTA, 32px largest accent, 8px micro chip
5. Separate with tint + `#e8eaee` hairlines, not heavy shadow
6. CTA lift is always the blue glow `rgba(0,104,255,0.4)`, never neutral grey
7. Mint (`#dbf4eb` / `#7edbb9`) is the only secondary accent surface

---

## 10. Voice & Tone

Bigin's voice is **direct, capability-forward, and confidently consultative** — a MarTech expert who frames marketing as a discipline you should run end-to-end, not a feature you bolt on. The hero line "고객 획득부터 충성고객 확보까지 마케팅 전략은 선택이 아닌 필수입니다." ("From customer acquisition to loyalty — marketing strategy is a necessity, not a choice") sets the register: declarative, full-funnel, and slightly imperative. Copy speaks to growth-minded operators and treats the reader as someone ready to consolidate their stack ("모든 마케팅 액션, 한 번에 집행하세요" — run every marketing action in one place).

| Context | Tone |
|---|---|
| Hero headlines | Declarative, full-funnel. "고객 획득부터 충성고객 확보까지…" Confident, mission-framed. |
| Feature titles | Capability-forward. "모든 마케팅 액션, 한 번에 집행하세요", "원하는 모든 유형을 하나의 솔루션에서". |
| Eyebrow labels | Terse category words. "캠페인", "자동화 new". |
| CTAs | Consultative, low-pressure. "상담 신청", "상담 신청하기", "브랜드 메시지 자세히 보기 →". |
| Company / about | Authority-framed. "데이터로 MarTech 산업을 선도하는 빅인사이트". |

**Voice samples (verbatim from live surfaces):**
- "고객 획득부터 충성고객 확보까지  마케팅 전략은 선택이 아닌 필수입니다." — hero headline. *(verified live 2026-06-26)*
- "모든 마케팅 액션, 한 번에 집행하세요" — feature heading. *(verified live 2026-06-26)*
- "새로운 기능으로 더 강력해진 Bigin 4.0" — product-update heading. *(verified live 2026-06-26)*
- "데이터로 MarTech 산업을 선도하는 빅인사이트" — company page positioning. *(verified live 2026-06-26)*

**Forbidden register**: hype without substance, undefined buzzwords left unexplained, exclamation-heavy urgency, and any tone that treats marketing as a one-click trick rather than a strategy.

## 11. Brand Narrative

Bigin (빅인) is the MarTech product of **Biginsight (주식회사 빅인사이트 / Biginsight Inc.)**, a Seoul-based company that, per its own company page, was founded in **May 2015** as **(주)어플리켓 (Applicat)** and rebranded to **(주)Biginsight** in **October 2018**. The product line evolved from a deep-learning web-analytics tool ("Bigin", 2018-04) into an AI marketing-automation solution (2019-05) and a big-data AI analytics platform (2019-12), then matured through **Bigin 3.0** (2021-05, with a global launch and Southeast-Asia expansion in 2021-12) to the current **Bigin 4.0** (2023-07).

Along the way the company raised investment from **Crescendo Equity Partners** (2021-03), signed a **Mixpanel** partnership and MOUs with **Naver Cloud** and **제일기획 (Cheil)**, and acquired **(주)태거스 (Taggers)** and **(주)오피노마케팅 (Opinno Marketing)** in 2022. Recognition includes selection as an **APAC MarTech Startup TOP 10** by *MarTech Outlook*, a Minister of Science and ICT award at the Korea Internet Awards, **Korea AI Startup 100**, and a **TIPS** program selection — all listed on the brand-owned company timeline. The brand positions itself as "데이터로 MarTech 산업을 선도하는 빅인사이트" (Biginsight, leading the MarTech industry through data) and frames its product as "The Ultimate Guide to Full-funnel Marketing."

What Bigin refuses, visible in its design: the heavy, intimidating chrome of legacy enterprise analytics, and the dark-pattern urgency of growth-hack marketing. What it embraces: a clean, rounded, mostly-flat interface; a single trustworthy electric blue; Bold Spoqa Han Sans Neo type that states capabilities plainly; and a consultative CTA ("상담 신청") that invites a conversation rather than forcing a signup.

## 12. Principles

1. **Full-funnel, one place.** Bigin's promise is consolidating acquisition through loyalty into one solution. *UI implication:* group capabilities into clear feature bands; the hero asserts end-to-end coverage, not a single trick.
2. **One action, one blue.** Electric blue (`#006fff`) means "do this." *UI implication:* reserve the saturated blue for the primary CTA and convert chips so the next step is never ambiguous; inline links use the deeper `#0066cc`.
3. **Capable but unintimidating.** A data product should feel approachable. *UI implication:* soft 20px radius, pale blue tints, and whisper-soft shadows instead of heavy enterprise chrome.
4. **Bold states it plainly.** Spoqa Han Sans Neo weight 700 carries the message. *UI implication:* build hierarchy with size, keep type confident and direct.
5. **Consult, don't pressure.** The primary CTA invites a conversation ("상담 신청"). *UI implication:* low-pressure, advisory CTA language; no countdown-timer urgency.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Bigin user segments (Korean e-commerce marketers, growth leads, agency operators), not individual people.*

**김도현, 33, 서울.** A growth marketer at a mid-size D2C brand who is tired of stitching together analytics, messaging, and ad tools. Chose Bigin to run "모든 마케팅 액션, 한 번에" from one solution, and values that the platform spans acquisition through retention.

**이서연, 38, 경기.** A marketing team lead evaluating CRM-automation vendors. Reads the pricing comparison closely and books a "상담 신청" consultation rather than self-serving a trial — she wants to confirm the data integrations fit her stack before committing.

**박준영, 41, 서울.** An agency operator managing campaigns for multiple e-commerce clients. Uses Bigin's audience and automation features to run personalized, behavior-based messaging at scale, and trusts the brand's MarTech track record (APAC TOP 10, Bigin 4.0).

## 14. States

| State | Treatment |
|---|---|
| **Empty (no campaign data)** | White canvas. Single slate (`#3d4046`) line explaining no campaigns yet, with one blue (`#006fff`) CTA to create or connect. No clutter. |
| **Empty (no integrations)** | Muted slate (`#7e8696`) line prompting a data connection, with a mint integration card (`#dbf4eb` / `#7edbb9`) offering connect chips. |
| **Loading (dashboard fetch)** | Skeleton blocks at final card dimensions, 20px radius, on a `#f4f9ff` tinted surface — flat pulse consistent with the near-shadowless system. |
| **Loading (report compute)** | Inline progress; previous values stay visible. |
| **Error (sync/connection failed)** | Inline message in slate with a plain-language explanation and a retry. States what to do next, not just that something failed. |
| **Error (form validation)** | Field-level message below the input; describes what's valid, not just "필수". |
| **Success (consultation submitted)** | Brief inline confirmation in a calm tone; the team will follow up via sales@bigin.io. No celebratory emoji. |
| **Skeleton** | `#f4f9ff` blocks at final dimensions, 20px radius, flat pulse. |
| **Disabled** | Faint blue-grey (`#b2c0cb`) text on reduced-opacity surface; the blue CTA fades rather than turning grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the clean, rounded aesthetic. The primary CTA responds to hover with a subtle lift of its blue glow (`rgba(0,104,255,0.4)`); feature cards fade in from below at `motion-standard / ease-enter` as the user scrolls the narrative. No bounce or spring — a B2B data product signals competence, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on three brand-owned surfaces:
- https://www.bigin.io (homepage)
- https://www.bigin.io/pricing (플랜 안내)
- https://www.bigin.io/company (회사 소개)

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Raw samples):
- Primary CTA "상담 신청" — bg rgb(0,111,255) #006fff / radius 20px (24px lift variant) / shadow rgba(0,104,255,0.4)
- Hero band — bg rgb(11,19,53) #0b1335 / white H1 56px / weight 700 / Spoqa Han Sans Neo
- Inline links — color rgb(0,102,204) #0066cc
- Tint ladder — #f4f9ff / #f1f5fd / #e1f1ff section surfaces; mint #dbf4eb with #7edbb9 border
- White feature card — bg #ffffff / 1px #e8eaee / radius 20px / shadow rgba(0,0,0,0.04) 0px 5px 51px

Voice samples (§10) are verbatim from the live homepage and company page.

Brand narrative (§11): Biginsight (빅인사이트 / 어플리켓 → Biginsight 2018) founded 2015; product
timeline (Bigin 2018 → 3.0 2021 → 4.0 2023), investors (Crescendo Equity Partners, Mixpanel
partnership), acquisitions (Taggers, Opinno Marketing 2022), and awards (APAC MarTech Startup TOP 10,
Korea AI Startup 100, TIPS) are all read directly from the brand-owned company page
(https://www.bigin.io/company) on 2026-06-26.

Personas (§13) are fictional archetypes informed by publicly observable Bigin user segments
(Korean e-commerce marketers, growth leads, agency operators). Names are illustrative; they do
not refer to real people.

Interpretive claims (e.g., "one action, one blue", "capable but unintimidating as a rejection of
legacy enterprise chrome") are editorial readings connecting Bigin's observed design to its
positioning, not directly sourced Bigin statements.
-->
