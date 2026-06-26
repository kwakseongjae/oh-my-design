---
id: lemonbase
name: Lemonbase
display_name_kr: 레몬베이스
country: KR
category: saas
homepage: "https://www.lemonbase.com"
primary_color: "#328af6"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=lemonbase.com&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = live CTA blue (#328af6) used for 도입 문의 across home + pricing; consult-green (#469f68) is the secondary action on pricing; purple/yellow/pink are tinted feature-icon accents only. Headings near-black navy (#1a2128); shadow-light flat system."
  colors:
    primary: "#328af6"
    primary-tint: "#edf5ff"
    consult-green: "#469f68"
    accent-purple: "#5d3dd5"
    accent-yellow: "#ffd750"
    accent-pink: "#c7317b"
    ink: "#1a2128"
    body: "#4c5967"
    muted: "#677583"
    faint: "#cfd3d8"
    hairline: "#e2e5e9"
    canvas: "#ffffff"
    surface: "#f1f5f9"
    surface-alt: "#f9f9f9"
    dark: "#2c2c38"
    on-primary: "#ffffff"
  typography:
    family: { display: "Pretendard Bold", body: "Pretendard Regular", accent: "Manrope" }
    display-hero: { size: 48, weight: 700, lineHeight: 1.30, use: "Hero headline, Pretendard Bold" }
    section:      { size: 44, weight: 700, lineHeight: 1.40, use: "Pricing/section title, Pretendard Bold" }
    subsection:   { size: 36, weight: 700, lineHeight: 1.44, use: "Feature section heads, Pretendard Bold" }
    card-head:    { size: 28, weight: 700, lineHeight: 1.40, tracking: -0.56, use: "Card / promo heading, Pretendard" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Reading text, links, Pretendard Regular" }
    ui:           { size: 14, weight: 700, lineHeight: 1.50, use: "Button / CTA label, Pretendard Bold" }
    caption:      { size: 12, weight: 400, lineHeight: 1.50, use: "Nav items, small UI labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { xs: 6, sm: 8, md: 12, lg: 16, xl: 24, pill: 36 }
  shadow:
    ambient: "rgba(0,0,0,0.08) 0px 8px 36px 0px"
    soft: "rgba(0,0,0,0.04) 0px 12px 36px 0px"
    tight: "rgba(0,0,0,0.08) 0px 1px 24px 0px"
  components:
    button-primary: { type: button, bg: "#328af6", fg: "#ffffff", radius: "8px", padding: "0 16px", height: "40px", font: "14px / 700 Pretendard Bold", use: "Primary CTA 도입 문의, hover darken" }
    button-consult: { type: button, bg: "#469f68", fg: "#ffffff", radius: "8px", padding: "16px", font: "14px / 700 Pretendard Bold", use: "Secondary consult CTA 상담 문의 on pricing" }
    button-neutral: { type: button, bg: "#f1f5f9", fg: "#1a2128", radius: "8px", padding: "0 16px", height: "40px", font: "14px / 700 Pretendard Bold", use: "Neutral header button 로그인" }
    nav-link: { type: tab, fg: "#1a2128", font: "12px / 400 Pretendard", active: "text #328af6", use: "Top nav item 가격 / 제품" }
    card-elevated: { type: card, bg: "#ffffff", radius: "12px", shadow: "rgba(0,0,0,0.08) 0px 8px 36px", use: "Feature / customer-logo card, soft ambient shadow, no border" }
    card-tint: { type: card, bg: "#f1f5f9", radius: "24px", use: "Tinted feature container on grey band" }
    badge-accent: { type: badge, bg: "#edf5ff", fg: "#328af6", radius: "8px", padding: "4px 8px", font: "12px / 700 Pretendard Bold", use: "Label / category chip (e.g. AI TRENDS, report tag)" }
  components_harvested: true
---

# Design System Inspiration of Lemonbase

## 1. Visual Theme & Atmosphere

Lemonbase (레몬베이스) is a Korean HR SaaS for performance management — evaluation, goals/OKR, 1:1s, and engagement surveys — and its marketing site reads like a calm, confident enterprise product rather than a noisy growth-hack landing page. The canvas is pure white (`#ffffff`), segmented by a cool slate surface (`#f1f5f9`) and a warmer off-white (`#f9f9f9`) into airy, generously-spaced bands. Text sits in a deep near-black navy (`#1a2128`) for headings, never pure black, dropping through a measured cool-grey ladder — body slate (`#4c5967`), muted slate (`#677583`), faint grey (`#cfd3d8`) — that keeps dense HR copy readable without harshness. The separation device is the hairline (`#e2e5e9`) and flat tint, not heavy chrome.

The single saturated brand action color is a clear, friendly blue (`#328af6`), reserved almost exclusively for the primary "도입 문의" (Contact sales) CTA and active nav state, so the eye is trained to read that one blue as "the next step." On the pricing surface a confident consult-green (`#469f68`) appears as the secondary "상담 문의" action, and the system keeps a small festive accent set — feature-icon purple (`#5d3dd5`), the lemon-yellow signature (`#ffd750`), and a magenta-pink (`#c7317b`) — strictly for decorative tinted icon backgrounds and illustration, never for interactive chrome. Tinted action surfaces like the pale blue card wash (`#edf5ff`) carry labels and report chips. A dark slate (`#2c2c38`) anchors the occasional inverted block; CTA labels are white (`#ffffff` — `on-primary`).

Typographically the system is unmistakably Korean-premium: every headline runs in **Pretendard Bold** (loaded as a named bold family, rendering heavy at large sizes) — 48px on the hero, 44px on the pricing title, 36px on feature heads — with tight negative tracking (around -0.56px at 28px) projecting a steady, declarative confidence. Body and UI text drop to **Pretendard Regular** at a quiet 16px / weight 400, the de-facto Korean product font tuned for dense hangul legibility, with **Manrope** as a Latin/numeral companion. Depth is restrained: there are essentially no hard borders, only soft ambient shadows (`rgba(0,0,0,0.08) 0px 8px 36px`) under feature cards. Geometry is rounded but disciplined — 8px buttons, 12px cards, 24px feature containers, 36px carousel pills.

**Key Characteristics:**
- Single friendly blue (`#328af6`) reserved for the primary "도입 문의" CTA and active nav — the one "action" color
- Consult-green (`#469f68`) as the dedicated secondary action on pricing ("상담 문의")
- Pretendard Bold for all display headlines (heavy, declarative Korean-premium voice); Pretendard Regular 16px for body
- Near-black navy (`#1a2128`) for headings instead of pure black — warm, trustworthy
- Flat depth: hairlines (`#e2e5e9`) + tinted surfaces (`#f1f5f9`) + soft ambient `rgba(0,0,0,0.08)` shadows, never hard borders
- Festive but disciplined accent set — purple (`#5d3dd5`), lemon-yellow (`#ffd750`), magenta-pink (`#c7317b`) — for decorative icon tints only
- Pale blue wash (`#edf5ff`) for label / report chips on white
- Disciplined rounded geometry — 8px buttons, 12px cards, 24px containers, 36px pills

## 2. Color Palette & Roles

### Primary
- **Lemonbase Blue** (`#328af6`): Primary brand and action color. The clear blue on the "도입 문의" CTA and active nav state — the system's single primary action.
- **Blue Tint** (`#edf5ff`): Pale blue wash for label chips, report tags, and tinted cards sitting on white.
- **Ink Navy** (`#1a2128`): Primary text and heading color. A very dark blue-black carrying warmth and enterprise trust — used instead of pure black.

### Secondary & Accent
- **Consult Green** (`#469f68`): Secondary action color for the "상담 문의" CTA on the pricing page; also a tinted feature-icon accent.
- **Accent Purple** (`#5d3dd5`): Decorative feature-icon accent (tinted backgrounds), never interactive chrome.
- **Lemon Yellow** (`#ffd750`): The brand's namesake signature accent — illustration and highlight pops.
- **Accent Pink** (`#c7317b`): Magenta accent for decorative icons and illustration variety.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white card surfaces, and CTA label text (`on-primary`).
- **Surface Slate** (`#f1f5f9`): Cool-grey tinted surface for content cards, neutral buttons, and segmented bands.
- **Surface Alt** (`#f9f9f9`): Warmer off-white for alternating section blocks.
- **Hairline** (`#e2e5e9`): Thin dividers and card outlines — the primary separation device in the near-shadowless system.
- **Dark Slate** (`#2c2c38`): Near-black surface for occasional inverted blocks and footers.

### Text Hierarchy
- **Ink Navy** (`#1a2128`): Primary text, headings, nav, strong labels.
- **Body Slate** (`#4c5967`): Secondary body copy and descriptions.
- **Muted Slate** (`#677583`): Tertiary text, captions, "더 알아보기" link labels, metadata.
- **Faint Grey** (`#cfd3d8`): Disabled text, placeholder, lowest-emphasis labels.

## 3. Typography Rules

### Font Family
- **Display**: `Pretendard Bold` (with `Pretendard Bold Fallback`) — used for all headlines, CTA labels, and emphasis. Loaded as a named bold cut, it renders heavy even at nominal weight, giving headlines their declarative weight.
- **Body**: `Pretendard Regular` (with `Pretendard Regular Fallback`) — the document default, used for body copy and dense UI text at weight 400.
- **Accent**: `Manrope` — Latin/numeral companion for English words and figures.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Pretendard Bold | 48px (3.00rem) | 700 | 1.30 | tight | Hero headline "고성과를 위한 변화" |
| Section Heading | Pretendard Bold | 44px (2.75rem) | 700 | 1.40 | tight | Pricing/section title "가격 안내" |
| Sub-section | Pretendard Bold | 36px (2.25rem) | 700 | 1.44 | tight | Feature section heads |
| Card / Promo Head | Pretendard | 28px (1.75rem) | 700 | 1.40 | -0.56px | Card and promo headings |
| Body | Pretendard Regular | 16px (1.00rem) | 400 | 1.50 | normal | Reading text, "더 알아보기" links |
| Button / CTA | Pretendard Bold | 14px (0.88rem) | 700 | 1.50 | normal | CTA label ("도입 문의") |
| Caption / Nav | Pretendard | 12px (0.75rem) | 400 | 1.50 | normal | Nav items, small UI labels |

### Principles
- **Bold display, light body**: Pretendard Bold carries every headline; Pretendard Regular 400 carries every paragraph. The weight contrast is the system's primary hierarchy signal.
- **Tight tracking on headlines**: display sizes compress (around -0.56px at 28px); body text stays at normal tracking.
- **Hangul-first sizing**: Body sits at a comfortable 16px — generous for hangul legibility, calm for information-rich HR layouts.
- **Two fonts, two jobs**: Pretendard is the persuasive/branding and reading voice; Manrope handles Latin and numerals. They never swap roles.

## 4. Component Stylings

### Buttons

**Primary CTA (도입 문의)**
- Background: `#328af6`
- Text: `#ffffff`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px
- Font: 14px Pretendard Bold weight 700
- Hover: blue darkens
- Use: Primary call-to-action across header, hero, and product sections — the system's single primary action

**Consult CTA (상담 문의)**
- Background: `#469f68`
- Text: `#ffffff`
- Radius: 8px
- Padding: 16px
- Font: 14px Pretendard Bold weight 700
- Use: Secondary consult action on the pricing page

**Neutral Button (로그인)**
- Background: `#f1f5f9`
- Text: `#1a2128`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px
- Font: 14px Pretendard Bold weight 700
- Use: Low-emphasis header action (login)

**Outline CTA (소개서 신청)**
- Background: `#ffffff`
- Text: `#1a2128`
- Radius: 8px
- Padding: 16px
- Use: Tertiary white request action sitting alongside the primary CTA

### Cards & Containers

**Elevated Feature Card**
- Background: `#ffffff`
- Radius: 12px
- Shadow: `rgba(0,0,0,0.08) 0px 8px 36px 0px`
- Use: Feature and customer-logo cards — soft ambient shadow, no border

**Tinted Container**
- Background: `#f1f5f9`
- Radius: 24px
- Use: Tinted feature container on grey bands

**Tight-Shadow Panel**
- Background: `#ffffff`
- Radius: 16px
- Shadow: `rgba(0,0,0,0.08) 0px 1px 24px 0px`
- Use: Pricing panel / inline elevated block

### Badges

**Accent Label Chip**
- Background: `#edf5ff`
- Text: `#328af6`
- Radius: 8px
- Padding: 4px 8px
- Font: 12px Pretendard Bold weight 700
- Use: Label / category chip (e.g. "AI TRENDS", report tags)

### Navigation
- Background: `#ffffff`
- Text: `#1a2128`
- Font: 12px Pretendard weight 400
- Active: blue `#328af6` text on the active item
- Use: Top horizontal nav ("성과관리", "몰입관리", "가격", "리더십 진단")

### Carousel Controls
- Background: `rgba(0,0,0,0.2)`
- Radius: 36px (full circle)
- Height: 36px
- Use: Previous/Next controls on the customer-logo and testimonial carousels

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.lemonbase.com, https://www.lemonbase.com/pricing, https://lemonbase.com/blog/
**Tier 2 sources:** getdesign.md/lemonbase — "No designs found" (0 files, checked live 2026-06-26); styles.refero.design — Lemonbase not indexed
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: CTA buttons use a comfortable 16px padding; sections breathe with 48–64px vertical rhythm

### Grid & Container
- Centered single-column hero with the 48px Pretendard Bold headline as the anchor
- Customer logos and testimonials arranged in horizontal carousels with circular prev/next controls
- Feature sections alternate between white (`#ffffff`), slate (`#f1f5f9`), and off-white (`#f9f9f9`) full-width bands
- Cards use 12px radius (elevated) and 24px radius (tinted containers) to group related features

### Whitespace Philosophy
- **Breathing room over density**: despite being an information-rich HR product, the marketing surface is airy with generous vertical rhythm.
- **Flat segmentation**: sections separate by background tint (`#f1f5f9` / `#f9f9f9` vs `#ffffff`) and hairlines, not by shadow weight.
- **One action color**: the blue (`#328af6`) is rationed so each band has a single obvious next step.

### Border Radius Scale
- Extra-small (6px): nav hover pills, small inner elements
- Small (8px): buttons, badges — the interactive workhorse
- Medium (12px): elevated feature cards
- Large (16px): pricing panels
- Extra-large (24px): tinted feature containers
- Pill (36px): carousel controls, fully-round circles

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f1f5f9` / `#f9f9f9` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e2e5e9` divider | Dividers and subtle outlines |
| Ambient (Level 3) | `rgba(0,0,0,0.08) 0px 8px 36px 0px` | Elevated feature cards |
| Soft (Level 4) | `rgba(0,0,0,0.04) 0px 12px 36px 0px` | Floating illustration panels |

**Shadow Philosophy**: Lemonbase is a near-flat system. Live inspection found most surfaces carry `box-shadow: none`, with elevation appearing only on feature cards as a soft, wide, low-opacity ambient shadow (`rgba(0,0,0,0.08) 0px 8px 36px`) and a tighter `rgba(0,0,0,0.08) 0px 1px 24px` variant on pricing panels. Depth and grouping are communicated primarily through flat tinted surfaces (`#f1f5f9`, `#f9f9f9`) and thin `#e2e5e9` hairlines. This is a deliberate modern-flat choice that keeps an enterprise HR UI feeling clean and calm rather than heavy. When emphasis is needed, the system reaches for the blue (`#328af6`) or a tinted accent, rarely for elevation.

## 7. Do's and Don'ts

### Do
- Use Pretendard Bold for all display headlines — it's the brand's voice
- Use Pretendard Regular weight 400 at 16px for body and reading text
- Reserve blue (`#328af6`) for the primary "도입 문의" CTA and active nav — keep it the single "action" color
- Use consult-green (`#469f68`) only for the secondary consult action on pricing
- Use near-black navy (`#1a2128`) for headings instead of pure black
- Separate sections with flat tinted surfaces (`#f1f5f9` / `#f9f9f9`) and `#e2e5e9` hairlines, not heavy borders
- Use soft wide ambient shadows (`rgba(0,0,0,0.08) 0px 8px 36px`) for elevated feature cards
- Keep the lemon-yellow (`#ffd750`), purple (`#5d3dd5`), and pink (`#c7317b`) accents for decorative icon tints only

### Don't
- Spread blue (`#328af6`) across many elements — it dilutes the single-action signal
- Use the accent purple/yellow/pink for buttons or links — they are decorative only
- Use pure black (`#000000`) for body text — reserve near-black navy `#1a2128`
- Use hard 1px borders on cards — separate with hairlines and soft shadow instead
- Set headlines in a light weight — display is always Pretendard Bold
- Use Manrope for hangul headlines — Pretendard owns display; Manrope is Latin/numerals only
- Use heavy dark drop shadows — elevation stays soft, wide, and low-opacity

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, carousels swipe |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Primary and consult CTAs at 40–44px height for comfortable tapping
- Carousel controls at 36px circular targets
- Nav items spaced within a comfortable header band

### Collapsing Strategy
- Hero: 48px Pretendard Bold headline scales down on mobile, weight maintained
- Customer/testimonial carousels: swipe on narrow viewports
- Feature bands: multi-column → stacked single column
- Tinted/white/off-white alternating sections maintain full-width treatment

### Image Behavior
- Feature illustrations and screenshots carry soft ambient shadow, consistent across sizes
- Cards maintain 12px (elevated) / 24px (tinted) radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Lemonbase Blue (`#328af6`)
- Secondary/consult: Consult Green (`#469f68`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Slate (`#f1f5f9`) / Surface Alt (`#f9f9f9`)
- Heading text: Ink Navy (`#1a2128`)
- Body text: Body Slate (`#4c5967`)
- Muted text: Muted Slate (`#677583`)
- Faint / disabled: Faint Grey (`#cfd3d8`)
- Hairline: `#e2e5e9`
- Label chip: Blue Tint (`#edf5ff`)
- Decorative accents: Purple (`#5d3dd5`), Lemon Yellow (`#ffd750`), Pink (`#c7317b`)
- Dark surface: Dark Slate (`#2c2c38`)

### Example Component Prompts
- "Create a hero on white background. Headline at 48px Pretendard Bold, line-height 1.30, color #1a2128. Below it a blue primary CTA: #328af6 background, white #ffffff text, 8px radius, 0 16px padding, 40px height, 14px Pretendard Bold — '도입 문의'. Next to it a white outline request CTA with #1a2128 text."
- "Design a feature card: white #ffffff background, 12px radius, no border, shadow rgba(0,0,0,0.08) 0px 8px 36px. Title 28px Pretendard Bold, letter-spacing -0.56px, #1a2128. Body 16px Pretendard Regular weight 400, #4c5967."
- "Build a tinted band: #f1f5f9 background, full-width. Section title 36px Pretendard Bold, #1a2128. Tinted feature containers inside use #f1f5f9 with 24px radius. A label chip: #edf5ff background, #328af6 text, 8px radius, 4px 8px padding, 12px Pretendard Bold."
- "Create top nav: white header. Pretendard 12px links, #1a2128 text, blue #328af6 on active. Blue '도입 문의' CTA right-aligned, 8px radius."

### Iteration Guide
1. Pretendard Bold for every headline; Pretendard Regular 16px for every paragraph
2. Blue (`#328af6`) is the single action color — don't spread it; consult-green (`#469f68`) is pricing-only
3. Near-flat — separate with `#f1f5f9` / `#f9f9f9` tint and `#e2e5e9` hairlines; soft wide shadows only on cards
4. Rounded geometry — 8px buttons, 12px cards, 24px containers, 36px pills
5. Text color is `#1a2128` navy, never pure black for body
6. Tight tracking on headlines, normal on body
7. Reserve lemon-yellow `#ffd750`, purple `#5d3dd5`, pink `#c7317b` for decorative icon tints

---

## 10. Voice & Tone

Lemonbase's voice is **clear, encouraging, and expert** — an HR partner that turns a heavy, politically-charged domain (evaluation, goals, feedback) into confident plain Korean. The hero line "고성과를 위한 변화, 필요한 솔루션을 한번에" ("Change for high performance — every solution you need, in one place") sets the register: outcome-framed, declarative, never gimmicky. Copy treats the reader as a capable HR leader who wants better outcomes, not a target to be pressured.

| Context | Tone |
|---|---|
| Hero headlines | Outcome-framed, declarative. "고성과를 위한 변화, 필요한 솔루션을 한번에." Confident, not hype. |
| Feature heads | Trust- and benefit-first. "구성원이 신뢰할 수 있는 평가", "어렵기만 한 성과관리, 이제는 쉽게". |
| CTAs | Direct, low-pressure. "도입 문의", "상담 문의", "소개서 신청", "더 알아보기". |
| Customer / social proof | Partnership-framed. "레몬베이스와 함께 더 높은 성과를 만들어가는 고객사". |
| Expert/consulting copy | Calm authority. "신뢰할 수 있는 전문가와 함께 더 나은 성과를 만드세요". |

**Voice samples (verbatim from live surfaces):**
- "고성과를 위한 변화, 필요한 솔루션을 한번에" — hero headline / page title (outcome-framed). *(verified live 2026-06-26)*
- "구성원이 신뢰할 수 있는 평가" — feature heading (trust-first). *(verified live 2026-06-26)*
- "어렵기만 한 성과관리, 이제는 쉽게" — feature heading (simplify promise). *(verified live 2026-06-26)*
- "신뢰할 수 있는 전문가와 함께 더 나은 성과를 만드세요" — consulting section heading. *(verified live 2026-06-26)*

**Forbidden register**: aggressive sales urgency, fear-based performance-management framing, undefined HR jargon left unexplained, exclamation-heavy hype.

## 11. Brand Narrative

Lemonbase (레몬베이스) is a Korean HR-tech SaaS built around one premise: that performance management — historically an opaque, anxiety-inducing annual ritual — can become a continuous, trusted, and even motivating practice. The product spans evaluation (평가), goal/OKR management (목표관리), 1:1s, and engagement/HR surveys (몰입관리), with consulting services layered on top (leadership assessment 리더십 역량 진단, organization diagnosis 조직 진단, leadership education). The positioning stated across the site — "고성과를 위한 변화, 필요한 솔루션을 한번에" — frames the company as the single place an organization assembles the tools and expertise it needs to raise performance.

The brand's stated promise is trust and ease: "구성원이 신뢰할 수 있는 평가" (evaluation employees can trust) and "어렵기만 한 성과관리, 이제는 쉽게" (performance management that was only ever hard — now made easy). Lemonbase positions itself as the customer's advocate inside a domain historically tilted toward top-down, compliance-driven HR, pairing software with "신뢰할 수 있는 전문가" (trusted experts) to help teams actually act on the data.

What Lemonbase refuses, visible in its design: the heavy, intimidating chrome of legacy enterprise HR (no shadow-stacked cards, no institutional grey-on-grey density), and the fear-based framing of evaluation as judgment. What it embraces: a flat, calm, mobile-friendly interface; a single trustworthy blue; bold Pretendard headlines that speak plainly; and a small, friendly accent set — led by the lemon-yellow namesake — that keeps an HR product feeling approachable rather than punitive.

## 12. Principles

1. **Trust over judgment.** Evaluation should feel fair and transparent, not punitive. *UI implication:* calm navy text, generous spacing, and plain-language headings ("구성원이 신뢰할 수 있는 평가"); never alarmist red or dense compliance chrome.
2. **One place, one next step.** The product consolidates scattered HR tools; the UI mirrors that with a single action color. *UI implication:* reserve the saturated blue (`#328af6`) for the primary CTA so the next step is never ambiguous.
3. **Make the hard thing easy.** Performance management is intimidating; the interface decodes it. *UI implication:* simplify, label plainly, and keep surfaces airy and uncluttered.
4. **Flat and calm.** Enterprise clarity beats decorative depth. *UI implication:* no hard borders; separate with tint and hairlines; reach for soft wide shadows only when a card must lift.
5. **Bold where it persuades, calm where it informs.** *UI implication:* Pretendard Bold for headlines that motivate; Pretendard Regular 16px for content that explains.
6. **Friendly, not frivolous.** The lemon-yellow and accent set add warmth, disciplined to decorative icon tints. *UI implication:* never let accent color leak into interactive chrome.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Lemonbase user segments (Korean HR leaders, people-team managers, team leads running evaluations), not individual people.*

**한지영, 38, 서울.** People-team lead at a 300-person scale-up rolling out its first structured evaluation cycle. Distrusts spreadsheet-based reviews; values that employees can see the process as fair. Chose Lemonbase because the evaluation felt trustworthy ("신뢰할 수 있는 평가"), not like a top-down verdict.

**이도현, 34, 경기.** A team lead who runs quarterly 1:1s and goal check-ins. Appreciates that goal management and feedback live in one place instead of scattered across docs and chat. Likes that the interface is calm and quick rather than a dense HR console.

**최수민, 45, 부산.** Head of HR at a manufacturing company exploring engagement surveys (몰입관리) and leadership assessment. Wants expert guidance alongside the software and a non-intimidating tool her managers will actually adopt. Trusts the brand's plain, partnership-framed tone.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no evaluations yet)** | White canvas. Single Ink Navy (`#1a2128`) line at body size explaining nothing has been set up, with one blue CTA to start. No illustration clutter. |
| **Empty (no survey responses)** | Muted Slate (`#677583`) single line: nothing collected yet, plus a path to send the survey. Honest, calm. |
| **Loading (dashboard fetch)** | Skeleton blocks on `#f1f5f9` tinted surface at final card dimensions, 12px radius. Soft pulse consistent with the near-flat system. |
| **Loading (in-place refresh)** | Subtle blue (`#328af6`) progress affordance; previous values stay visible. |
| **Error (action failed)** | Inline message in Ink Navy with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the input in a calm error tone; describes what's valid, not just "필수". |
| **Success (cycle published)** | Brief inline confirmation in calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f1f5f9` blocks at final dimensions, 12px radius, soft pulse. |
| **Disabled** | Faint Grey (`#cfd3d8`) text on reduced-opacity surface; blue actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, carousel slide, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, carousel |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the calm, flat aesthetic. Customer-logo and testimonial carousels advance with a smooth `motion-standard / ease-standard` slide; cards fade-in from below at `motion-standard / ease-enter`. No bounce or spring — an enterprise HR product signals steadiness and trust, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and carousels pause; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via global playwright getComputedStyle on:
- https://www.lemonbase.com (homepage) — hero H1 "고성과를 위한 변화 / 필요한 솔루션을 한번에"
  Pretendard Bold 48px color rgb(26,33,40) #1a2128; primary CTA "도입 문의" bg rgb(50,138,246)
  #328af6 / white label rgb(255,255,255) Pretendard Bold 14px / radius 8px; H3 section heads 36px;
  feature cards radius 12px shadow rgba(0,0,0,0.08) 0px 8px 36px; carousel controls bg rgba(0,0,0,0.2)
  radius 36px. Accent set purple rgb(93,61,213) #5d3dd5, green rgb(70,159,104) #469f68, yellow
  rgb(255,215,80) #ffd750, pink rgb(199,49,123) #c7317b; surface rgb(241,245,249) #f1f5f9.
- https://www.lemonbase.com/pricing — H2 "가격 안내" 44px #1a2128; consult CTA "상담 문의" bg
  rgb(70,159,104) #469f68; tight-shadow panel rgba(0,0,0,0.08) 0px 1px 24px; blue-tint card
  rgb(237,245,255) #edf5ff.
- https://lemonbase.com/blog/ — corroborated heading ink #1a2128, body #4c5967, muted #677583, and
  primary blue #328af6; note the blog runs a separate CMS template (Ant Design rgb(24,144,255)), so
  brand tokens are anchored on the marketing site + pricing only, NOT the blog CMS chrome.

Token-level claims (§1-9) are sourced from this live inspection (homepage + pricing).

Voice samples (§10) are verbatim from the live homepage and consulting/feature sections
(hero H1, feature H3s, page title meta).

Brand narrative (§11): Lemonbase (레몬베이스) is a Korean HR-tech SaaS for performance management
(평가 / 목표관리 / 1:1 / 몰입관리) plus consulting services (리더십 역량 진단 / 조직 진단 /
리더십 교육). Product scope and positioning are directly observable from the live site nav and
section copy; no specific founder names or founding dates are asserted here to avoid unverified
claims.

Personas (§13) are fictional archetypes informed by publicly observable Lemonbase user segments
(Korean HR leaders, people-team managers, team leads). Names are illustrative; they do not refer
to real people.

Interpretive claims (e.g., "trust over judgment", "one place, one next step", "flat and calm as a
rejection of legacy enterprise HR chrome") are editorial readings connecting Lemonbase's observed
design and copy to its positioning, not directly sourced Lemonbase statements.
-->
