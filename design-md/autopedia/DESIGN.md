---
id: autopedia
name: "Dr.Cha (Autopedia)"
display_name_kr: 닥터차(오토피디아)
country: KR
category: automotive
homepage: "https://company.autopedia.co.kr/"
primary_color: "#7A00FF"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=company.autopedia.co.kr&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live brand violet #7A00FF (rgb 122,0,255), used as the active-nav accent and the full-bleed brand-statement band; near-shadowless high-contrast black/white system on Pretendard; corners are mostly sharp (0px), with 8px only on the CI asset-download buttons."
  colors:
    primary: "#7A00FF"
    ink: "#000000"
    canvas: "#ffffff"
    on-primary: "#ffffff"
    muted: "#4B5563"
    hairline: "#E5E7EB"
  typography:
    family: { body: "Pretendard" }
    display:    { size: 34, weight: 600, lineHeight: 1.44, tracking: -1.36, use: "Display / brand-statement headlines" }
    section:    { size: 26, weight: 600, lineHeight: 1.54, tracking: -1.04, use: "Business/feature section titles" }
    subsection: { size: 22, weight: 600, lineHeight: 1.55, tracking: -0.88, use: "Sub-headings, partnership prompts" }
    nav:        { size: 16, weight: 700, lineHeight: 1.50, use: "Top nav items, CI button labels" }
    body:       { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, Pretendard" }
    caption:    { size: 14, weight: 400, lineHeight: 1.43, use: "Footer links, fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 36, xxl: 48, section: 96 }
  rounded: { sharp: 0, md: 8, full: 9999 }
  shadow:
    none: "none"
  components:
    nav-link: { type: tab, fg: "#000000", font: "16px / 700 Pretendard", active: "violet #7A00FF text on active item", use: "Top navigation item (회사소개·사업소개·소식)" }
    button-outline-dark: { type: button, fg: "#000000", border: "1px solid #000000", radius: "8px", padding: "18px 0px", height: "63px", font: "16px / 700 Pretendard", use: "CI / brand-asset download button — transparent bg, black hairline outline" }
    button-outline-light: { type: button, fg: "#ffffff", border: "3px solid #ffffff", radius: "0px", padding: "8px 24px", height: "47px", font: "16px / 400 Pretendard", use: "Hero / partnership CTA (문의하기) on dark image scrim" }
    button-solid-white: { type: button, bg: "#ffffff", fg: "#000000", radius: "0px", padding: "12px 36px", height: "49px", font: "16px / 600 Pretendard", use: "In-section homepage-link CTA (홈페이지 바로가기) on dark / violet band" }
    brand-band: { type: card, bg: "#7A00FF", fg: "#ffffff", radius: "0px", use: "Full-bleed violet brand-statement section" }
    feature-card: { type: card, bg: "#ffffff", fg: "#000000", border: "1px solid #E5E7EB", radius: "0px", use: "Business/feature card (닥터차·퀀텀모빌리티·부품유통·AI) with hairline, no shadow" }
    footer-link: { type: listItem, fg: "#000000", font: "14px / 400 Pretendard", use: "Footer navigation link (제휴문의·사업소개·블로그)" }
  components_harvested: true
---

# Design System Inspiration of Dr.Cha (Autopedia)

## 1. Visual Theme & Atmosphere

Autopedia (오토피디아) — the company behind the 닥터차(Dr.Cha) automotive-aftermarket platform — presents itself with a stark, high-contrast corporate identity that reads as engineering-forward rather than consumer-cute. The canvas is pure white (`#ffffff`) and the type is pure black (`#000000`) — no softened near-blacks, no tinted greys for headings. Against that black-and-white foundation a single vivid violet (`#7A00FF`) does all the brand work: it colors the active navigation item, and, most dramatically, fills an entire full-bleed brand-statement band ("오토피디아는 기술로써 모빌리티의 진화를 이끌어 냅니다" — "Autopedia drives the evolution of mobility through technology"). The violet is reserved and deliberate; the eye learns that this one saturated hue means "Autopedia."

The typographic voice is unmistakably Korean-corporate-modern: **Pretendard** throughout, with display headlines at 34px weight 600 and a tight `-1.36px` letter-spacing that compresses the hangul into confident, declarative blocks. Navigation is set noticeably heavier — 16px at weight 700 — so the chrome feels bold and structural, while body copy relaxes to 16px weight 400 at a comfortable 24px line-height. Secondary labels drop to a cool grey (`#4B5563`). The system never reaches for a display serif or a decorative face; Pretendard's neutral geometric sans carries both the persuasion and the reading.

What distinguishes Autopedia from softer fintech-adjacent peers is its refusal of decoration. Live inspection found `box-shadow: none` across the nav, hero, headings, buttons, and cards — this is a genuinely shadowless system. Separation comes from flat color blocking (white sections, black image sections with a `rgba(0, 0, 0, 0.6)` scrim, and the violet band) and thin `#E5E7EB` hairlines, never from elevation. Geometry is mostly sharp: corners sit at 0px by default, and the only rounding in the system is the modest 8px on the CI asset-download buttons. The result is a flat, editorial, almost architectural aesthetic — a mobility-technology company that wants to look precise and industrial, not playful.

**Key Characteristics:**
- Pretendard everywhere — 34px/600 display, 16px/700 nav, 16px/400 body — no secondary display face
- Single saturated violet (`#7A00FF`) as the only brand accent — active nav + a full-bleed statement band
- Pure black (`#000000`) text on pure white (`#ffffff`) — maximum contrast, no tinted heading greys
- Shadowless: `box-shadow: none` across the whole system; separation via color blocks and `#E5E7EB` hairlines
- Sharp geometry — 0px corners by default; 8px only on CI download buttons
- Dark photographic sections overlaid with a `rgba(0, 0, 0, 0.6)` scrim, white outline CTAs on top
- Tight negative tracking that scales with size (-1.36px at 34px, -1.04px at 26px, -0.88px at 22px)
- Cool grey (`#4B5563`) for secondary/label text below the pure-black primary

## 2. Color Palette & Roles

### Primary
- **Autopedia Violet** (`#7A00FF`): The single brand accent. Colors the active navigation item and fills the full-bleed brand-statement band. A vivid electric violet (rgb 122, 0, 255) — the only saturated hue in the system.

### Ink & Canvas
- **Pure Black** (`#000000`): Primary text, headings, nav labels, and the background of dark photographic sections. Autopedia uses true black, not a softened navy.
- **Pure White** (`#ffffff`): Page background, card surfaces, and text/outline color on black or violet backgrounds. Also the `on-primary` color for content that sits over the violet band.

### Text Hierarchy
- **Pure Black** (`#000000`): Primary text, headings, strong nav labels.
- **Muted Grey** (`#4B5563`): Secondary text, sub-labels, captions, and fine print — the one grey in the ladder (rgb 75, 85, 99).

### Surface & Border
- **Hairline** (`#E5E7EB`): Thin card outlines and dividers — the primary separation device in this shadowless system (rgb 229, 231, 235).
- **Scrim**: A `rgba(0, 0, 0, 0.6)` black overlay sits over hero/section photography so white headlines and outline CTAs stay legible.

## 3. Typography Rules

### Font Family
- **Body & Display**: `Pretendard` (with `Pretendard Fallback`) — the document default and the only typeface. Weight 600 (SemiBold) at display sizes, 700 (Bold) for navigation, 400 (Regular) for body.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | Pretendard | 34px (2.13rem) | 600 | 1.44 (49px) | -1.36px | Brand-statement headlines, on white or dark |
| Section | Pretendard | 26px (1.63rem) | 600 | 1.54 (40px) | -1.04px | Business/feature titles (퀀텀모빌리티, 부품 유통) |
| Sub-section | Pretendard | 22px (1.38rem) | 600 | 1.55 (34px) | -0.88px | Sub-headings, partnership prompts |
| Nav | Pretendard | 16px (1.00rem) | 700 | 1.50 (24px) | normal | Top navigation, CI button labels |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |
| Caption | Pretendard | 14px (0.88rem) | 400 | 1.43 (20px) | normal | Footer links, fine print |

### Principles
- **One typeface, weight-driven hierarchy**: Pretendard carries everything; the jump from 400 (body) to 600 (display) to 700 (nav) is the primary hierarchy signal, not a font swap.
- **Tight tracking scales with size**: -1.36px at 34px, -1.04px at 26px, -0.88px at 22px; body and captions stay at normal tracking.
- **Heavy, structural navigation**: nav sits at weight 700 — heavier than the display copy's 600 — giving the chrome a bold, architectural read.
- **Hangul-first sizing**: body at 16px with a 24px line-height is generous for dense Korean reading; display line-heights stay open (1.44–1.55) so tall hangul stacks breathe.

## 4. Component Stylings

### Navigation
- Text: `#000000`
- Font: 16px Pretendard weight 700
- Height: 24px per link
- Active: violet `#7A00FF` text on the active item
- Use: Top horizontal nav (회사소개, 사업소개, 소식, 블로그↗)

### Buttons

**CI Download (Outline Dark)**
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 8px
- Padding: 18px 0px
- Height: 63px
- Font: 16px Pretendard weight 700
- Use: Brand-asset download buttons on the CI guide (JPG/PNG/브랜드 가이드 다운 받기) — transparent fill, black hairline outline

**Hero CTA (Outline Light)**
- Text: `#ffffff`
- Border: 3px solid `#ffffff`
- Radius: 0px
- Padding: 8px 24px
- Height: 47px
- Font: 16px Pretendard weight 400
- Use: 문의하기 CTA sitting on a dark image scrim in the hero / partnership sections

**In-Section Link (Solid White)**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 0px
- Padding: 12px 36px
- Height: 49px
- Font: 16px Pretendard weight 600
- Use: 홈페이지 바로가기 CTA on the dark / violet product bands (Dr.Cha page)

### Cards & Containers

**Feature Card**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#E5E7EB`
- Radius: 0px
- Use: Business/feature cards (닥터차, 퀀텀모빌리티, 부품유통, AI 기술 플랫폼) — hairline outline, no shadow

**Brand Band**
- Background: `#7A00FF`
- Text: `#ffffff`
- Radius: 0px
- Use: Full-bleed violet brand-statement section ("오토피디아는 기술로써 모빌리티의 진화를 이끌어 냅니다")

### Footer
- Links: `#000000`, 14px Pretendard weight 400
- Use: Footer navigation (제휴문의, 사업소개, 블로그)

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces)
**Tier 1 sources:** https://company.autopedia.co.kr/ ; https://company.autopedia.co.kr/about/ci-guide ; https://company.autopedia.co.kr/business/doctor-cha ; https://medium.com/autopedia
**Tier 2 sources:** getdesign.md/autopedia (SPA fallback — no KR coverage) ; styles.refero.design/?q=autopedia (not listed)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px, doubling through 8 / 12 / 16 / 24 / 36 / 48
- Notable: section-level padding is generous (the partnership block measured 96px vertical), giving the flat layout room to breathe between full-width bands

### Grid & Container
- Full-width horizontal bands stacked vertically — white content sections alternate with black photographic sections and the violet brand band
- Business offerings (닥터차 / 퀀텀모빌리티 / 부품유통 / AI) presented as large tappable feature cards in a row
- Centered single-column measure for display headlines; text is set left- or center-aligned within each band

### Whitespace Philosophy
- **Blocked, not layered**: content separates by full-width color blocking (white / black / violet), not by elevation or nested cards.
- **Generous vertical rhythm**: large gaps between bands keep the high-contrast surfaces from feeling cramped.
- **Sharp edges**: the near-total absence of rounding makes the layout read as architectural and precise.

### Border Radius Scale
- Sharp (0px): the default — nav, hero CTAs, feature cards, brand band
- Medium (8px): the single exception — CI asset-download buttons
- Full (9999px): reserved only for incidental circular elements (avatars/icons)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Everything — page, cards, buttons, bands |
| Color block (Level 1) | White / black / `#7A00FF` full-width section fill | Primary separation device |
| Scrim (Level 2) | `rgba(0, 0, 0, 0.6)` over photography | Keeps white headlines/CTAs legible on image sections |
| Hairline (Level 3) | 1px solid `#E5E7EB` | Feature-card outlines and dividers |

**Shadow Philosophy**: Autopedia is a strictly shadowless system — live inspection returned `box-shadow: none` on the nav, hero, headings, buttons, and cards without exception. Depth is communicated entirely through flat, full-width color blocking (white, pure black `#000000`, and the violet `#7A00FF` band), a dark `rgba(0, 0, 0, 0.6)` scrim over photography, and thin `#E5E7EB` hairlines on cards. This is a deliberate industrial-modern choice: it keeps the mobility-technology brand looking engineered and confident rather than soft. When emphasis is needed the system reaches for contrast (black-on-white, white-on-violet), never for elevation.

## 7. Do's and Don'ts

### Do
- Use Pretendard for everything — 34px/600 display, 16px/700 nav, 16px/400 body
- Reserve violet (`#7A00FF`) as the single brand accent — active nav and the full-bleed statement band
- Set primary text in pure black (`#000000`) on pure white (`#ffffff`) for maximum contrast
- Keep the system shadowless — separate with color blocks and `#E5E7EB` hairlines
- Use sharp 0px corners by default; reserve 8px only for CI/brand-asset buttons
- Overlay photographic sections with a `rgba(0, 0, 0, 0.6)` scrim and use white outline CTAs on top
- Set navigation heavier (weight 700) than display copy (weight 600) — the chrome is structural
- Apply tight negative tracking on headlines (-1.36px at 34px, scaling down with size)

### Don't
- Add drop shadows for elevation — Autopedia is a flat, shadowless system
- Spread violet across many elements — it must stay the single "Autopedia" signal
- Use softened near-black or tinted grey for headings — primary text is pure black `#000000`
- Round corners freely — geometry is sharp (0px), 8px is the only exception
- Introduce a second accent color or a decorative display face — Pretendard and one violet do all the work
- Set body headlines at a light weight — display is always SemiBold (600), nav is Bold (700)
- Put dark text on the violet band or the dark image sections — use white (`#ffffff`)
- Use positive letter-spacing at display sizes — Autopedia tracks tight

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, display headline compresses, feature cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full-width bands, feature cards in a row, centered display measure |

### Touch Targets
- CI download buttons at 63px height — comfortably tappable
- In-section solid-white CTA at 49px height with 12px 36px padding
- Hero outline CTA at 47px height with 8px 24px padding

### Collapsing Strategy
- Display headlines: 34px scale down on mobile, weight 600 maintained
- Feature-card row: multi-column → stacked single column
- Full-width color bands (white / black / violet): maintain full-bleed treatment, reduce internal padding
- Dark photographic sections keep the `rgba(0, 0, 0, 0.6)` scrim at all sizes

### Image Behavior
- Hero/section photography carries the dark scrim at every breakpoint so white text stays legible
- Cards and images stay sharp-cornered and shadowless across sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand accent (active nav, brand band): Autopedia Violet (`#7A00FF`)
- Primary text / dark sections: Pure Black (`#000000`)
- Background / text-on-dark: Pure White (`#ffffff`)
- Secondary text: Muted Grey (`#4B5563`)
- Hairline / card border: `#E5E7EB`
- Photo scrim: `rgba(0, 0, 0, 0.6)`

### Example Component Prompts
- "Create a hero band with a background photo under a rgba(0,0,0,0.6) scrim. Headline at 34px Pretendard weight 600, line-height 49px, letter-spacing -1.36px, color #ffffff. One outline CTA: transparent background, #ffffff text, 3px solid #ffffff border, 0px radius, 8px 24px padding — '문의하기'."
- "Design a feature card: white #ffffff background, 1px solid #E5E7EB border, 0px radius, no shadow. Title 26px Pretendard weight 600, letter-spacing -1.04px, #000000. Body 16px Pretendard weight 400, #4B5563."
- "Build a full-bleed brand band: #7A00FF background, white #ffffff text. Statement headline 34px Pretendard weight 600, letter-spacing -1.36px, centered."
- "Create top nav: white header, Pretendard 16px weight 700 links in #000000, violet #7A00FF text on the active item."
- "Design a CI download button: transparent background, #000000 text, 1px solid #000000 border, 8px radius, 18px 0px padding, 16px Pretendard weight 700."

### Iteration Guide
1. Pretendard for every element; weight 600 display / 700 nav / 400 body
2. Violet (`#7A00FF`) is the single accent — active nav and the brand band only
3. No shadows — separate with color blocks and `#E5E7EB` hairlines
4. Sharp 0px corners by default; 8px only on CI buttons
5. Text is pure black `#000000` on white `#ffffff`; secondary is `#4B5563`
6. Dark image sections use a `rgba(0, 0, 0, 0.6)` scrim + white outline CTAs
7. Negative tracking on headlines, normal on body

---

## 10. Voice & Tone

Autopedia's voice is **confident, mission-framed, and technology-first** — a mobility company that speaks about "the evolution of mobility" and "mobility assets" rather than simply "car repair." The brand-band statement "오토피디아는 기술로써 모빌리티의 진화를 이끌어 냅니다" ("Autopedia drives the evolution of mobility through technology") sets the register: declarative, ambitious, framed around technology and change rather than discount or urgency. Product copy is plain and functional at the offering level (닥터차, 퀀텀모빌리티, 부품 유통, AI 기술 플랫폼) but rises to vision language in the brand sections.

| Context | Tone |
|---|---|
| Brand-statement bands | Declarative, visionary. "오토피디아는 기술로써 모빌리티의 진화를 이끌어 냅니다." Ambitious, not hype. |
| Business/offering titles | Plain, categorical. "퀀텀모빌리티", "부품 유통", "AI 기술 플랫폼". |
| Product framing (Dr.Cha) | Benefit-framed. "닥터차는 고객의 '모빌리티 자산'을 관리하는 최적의 서비스입니다." |
| CTAs | Direct, low-pressure. "문의하기", "홈페이지 바로가기", "제휴문의". |
| Corporate / CI | Formal and precise. "오토피디아의 CI를 소개합니다." |

**Voice samples (verbatim from live surfaces):**
- "오토피디아는 기술로써 모빌리티의 진화를 이끌어 냅니다." — full-bleed violet brand band (mission-framed). *(verified live 2026-07-02)*
- "닥터차는 고객의 '모빌리티 자산'을 관리하는 최적의 서비스입니다." — Dr.Cha product page lead. *(verified live 2026-07-02)*
- "오토피디아는 첨단 AI 기술로 운전자들에게 새로운 차원의 경험을 제공합니다." — AI section headline. *(verified live 2026-07-02)*

**Forbidden register**: discount-driven urgency, fear-based repair-scare messaging, undefined automotive jargon left unexplained, exclamation-heavy hype. Autopedia positions as a technology company, so copy stays visionary and measured.

## 11. Brand Narrative

Autopedia (오토피디아) is a Korean mobility-technology company — corporate registration 236-86-01261, represented by CEO 김병근 (Kim Byung-geun) per the company's own CI page — building an ecosystem around the automotive aftermarket. Its founding observation, stated across the homepage brand bands, is that while cars have woven themselves ever deeper into daily life ("집에 갈 때, 쇼핑을 할 때, 여행을 갈 때 — 자동차는 이미 우리의 일상 깊숙이"), *the way people drive and manage those cars has barely changed* ("차를 운전하고 관리하는 방식은 달라지지 않았습니다"). Autopedia's premise is to close that gap with technology.

That mission fans out into four business lines shown on the site: **닥터차 (Dr.Cha)**, the flagship automotive-aftermarket management platform for owners; **퀀텀모빌리티 (Quantum Mobility)**, specialist repair for imported brands (BMW, Audi, Benz, Tesla); **부품 유통 (Parts Distribution)**, an efficient supply network delivering imported-car parts to repair shops; and an **AI 기술 플랫폼 (AI platform)** for vehicle-problem diagnosis, prediction, and consultation. The unifying frame is "모빌리티 자산" (mobility assets) — Autopedia treats a car not as a repair ticket but as an asset to be managed over its life.

What Autopedia refuses, visible in its design: the cluttered, promotion-heavy chrome of legacy auto-repair marketing (no shadow-stacked coupons, no alarmist red banners) and the softness of consumer-cute apps. What it embraces: a stark black-and-white technology aesthetic, a single decisive violet, bold Pretendard headlines that speak in mission terms, and a flat, architectural layout that signals precision and engineering seriousness.

## 12. Principles

1. **Technology over transaction.** Autopedia frames itself as driving "the evolution of mobility," not selling repairs. *UI implication:* lead with mission bands and capability, keep pricing/promotion out of the hero; the violet band carries vision, not a discount.
2. **The car is a managed asset.** The "모빌리티 자산" framing treats a vehicle as something owned and tended over time. *UI implication:* favor management/overview surfaces (status, history, prediction) over one-off transactional flows.
3. **One accent, decisive.** Violet (`#7A00FF`) means "Autopedia." *UI implication:* reserve the saturated violet for the active state and the brand band; never dilute it across ordinary UI.
4. **Flat and precise.** Engineering seriousness reads as clarity, not decoration. *UI implication:* no shadows; separate with color blocks and `#E5E7EB` hairlines; keep corners sharp.
5. **High contrast, no hedging.** Pure black on pure white. *UI implication:* commit to `#000000`/`#ffffff` for maximum legibility; use the grey `#4B5563` only for genuine secondary text.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Autopedia / Dr.Cha user and partner segments (imported-car owners, repair-shop operators, parts buyers), not individual people.*

**정민호, 38, 서울.** An imported-car owner (BMW) who distrusts opaque dealer service pricing. Uses Dr.Cha to track his car's maintenance history and get transparent diagnosis. Values that Autopedia treats his vehicle as an asset to manage, not a repair to upsell.

**이수경, 45, 경기.** Runs an independent import-specialist repair shop. Sources parts through Autopedia's distribution network because the supply is faster and more reliable than the fragmented channels she used before. Trusts a partner that looks engineered and organized.

**박재현, 33, 부산.** A software-minded early adopter drawn to the AI diagnosis platform. Reads Autopedia's Medium blog for the technology story and believes the "evolution of mobility" framing literally rather than as marketing.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no vehicles/records yet)** | White canvas. Single pure-black (`#000000`) line at body size explaining nothing is registered yet, with one CTA to add a vehicle. No illustration clutter. |
| **Empty (no parts results)** | Muted Grey (`#4B5563`) single line stating no matching parts, plus a path to adjust the search. Honest and plain. |
| **Loading (diagnosis/compute)** | Flat pulse blocks on white at final dimensions, sharp 0px corners. No shadow shimmer — consistent with the shadowless system. |
| **Loading (list fetch)** | Hairline-bordered (`#E5E7EB`) placeholder cards; previous content stays visible during in-place refresh. |
| **Error (diagnosis failed)** | Inline message in pure black with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". |
| **Success (inquiry submitted)** | Brief inline confirmation in a calm, technical tone; next-step / contact detail linked immediately below. No celebratory emoji. |
| **Skeleton** | White blocks at final dimensions, sharp corners, flat pulse — no elevation. |
| **Disabled** | Muted Grey (`#4B5563`) text on reduced-opacity surface; violet actions fade rather than turn a different color, preserving the single-accent read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, nav active-state change, button press |
| `motion-standard` | 220ms | Card/section reveal, band transition, dropdown |
| `motion-slow` | 360ms | Page-level transitions, brand-band reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sections, cards, bands |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is restrained and purposeful — consistent with the flat, high-contrast, engineering-forward aesthetic. Full-width bands (white / black / violet) reveal with a quiet fade-up at `motion-standard / ease-enter` as they scroll into view; the active nav item transitions to violet (`#7A00FF`) at `motion-fast`. No bounce or spring — a mobility-technology brand signals precision and steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the interface stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle across three surfaces:
- https://company.autopedia.co.kr/ (homepage: nav, display headlines, full-bleed violet #7A00FF brand band, business feature cards, partnership CTA)
- https://company.autopedia.co.kr/about/ci-guide (CI page: asset-download buttons, company registry — 대표 김병근, 사업자등록번호 236-86-01261, contact@autopediacar.com)
- https://company.autopedia.co.kr/business/doctor-cha (Dr.Cha product page: "모빌리티 자산" framing, in-section homepage-link CTA)

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Proof block).

Voice samples (§10) are verbatim from the live surfaces (violet brand band, Dr.Cha lead, AI section headline).

Brand narrative (§11): Company registry facts (CEO 김병근, registration 236-86-01261, contact email) are
read directly from the company's own CI page. The four business lines (닥터차 / 퀀텀모빌리티 / 부품 유통 /
AI 기술 플랫폼) and the "모빌리티 자산" / "모빌리티의 진화" framing are quoted from the live homepage and
Dr.Cha page. Broader company-history details beyond these on-site statements are not independently
verified in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Autopedia/Dr.Cha user and
partner segments (imported-car owners, repair-shop operators, parts buyers). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "technology over transaction", "the car as a managed asset", "one accent,
decisive", "flat and precise as engineering seriousness") are editorial readings connecting Autopedia's
observed design and copy to its positioning, not directly sourced Autopedia statements.
-->
