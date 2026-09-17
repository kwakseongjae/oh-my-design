---
id: spoqa
name: Spoqa
display_name_kr: 스포카
country: KR
category: fintech
homepage: "https://spoqa.co.kr"
primary_color: "#00ab6e"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=spoqa.co.kr&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live CTA + stat-numeral green (#00ab6e); active/hover state darkens to #008c5e. Ink near-black slate (#292f33); body slate (#434b4f). Brand typeface = Spoqa Han Sans Neo. Typeface specimen site uses a near-equal ink (#363a3c) and a blue/mint specimen accent pair (#4c80f1 / #76e8ad)."
  colors:
    primary: "#00ab6e"
    primary-active: "#008c5e"
    ink: "#292f33"
    ink-alt: "#363a3c"
    body: "#434b4f"
    muted: "#717d85"
    muted-alt: "#5c6469"
    faint: "#a9afb3"
    canvas: "#ffffff"
    surface: "#f5f8fa"
    surface-alt: "#f8fafb"
    hairline: "#e4e9ed"
    hairline-alt: "#e1e4e6"
    on-primary: "#ffffff"
    accent-blue: "#4c80f1"
    accent-mint: "#76e8ad"
  typography:
    family: { display: "Spoqa Han Sans Neo", body: "Spoqa Han Sans Neo" }
    display-hero:  { size: 56, weight: 700, lineHeight: 1.29, use: "Hero headline + stat numerals, SHS Neo Bold" }
    display-md:    { size: 48, weight: 500, lineHeight: 1.0, use: "Section statement, SHS Neo Medium" }
    sub-hero:      { size: 32, weight: 300, lineHeight: 1.4, use: "Light sub-hero / timeline year, SHS Neo Thin-ish" }
    nav:           { size: 18, weight: 500, lineHeight: 1.5, use: "Top nav item (700 when active)" }
    body:          { size: 18, weight: 400, lineHeight: 1.5, use: "Standard reading text, SHS Neo Regular" }
    button:        { size: 18, weight: 700, lineHeight: 1.0, use: "CTA button label, SHS Neo Bold" }
    caption:       { size: 13, weight: 400, lineHeight: 1.4, use: "Form/select label, fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 28, xxl: 32, section: 64 }
  rounded: { sm: 4, md: 10, lg: 16, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#00ab6e", fg: "#ffffff", radius: "10px", padding: "20px 32px", height: "67px", font: "18px / 700 Spoqa Han Sans Neo", states: "active/hover #008c5e", use: "Primary CTA (키친보드 바로가기)" }
    button-dark: { type: button, bg: "#292f33", fg: "#ffffff", border: "1px solid #ffffff", radius: "10px", padding: "20px 32px", height: "69px", font: "18px / 700 Spoqa Han Sans Neo", use: "Secondary dark CTA (채용공고 보러가기)" }
    nav-item: { type: tab, fg: "#434b4f", font: "18px / 500 Spoqa Han Sans Neo", padding: "0px 28px", active: "text #008c5e weight 700", use: "Top navigation item" }
    select-input: { type: input, bg: "#f5f8fa", fg: "#5c6469", radius: "4px", padding: "3px 7px", height: "29px", font: "13px / 400 Spoqa Han Sans Neo", use: "Form select / filter control" }
    card-surface: { type: card, bg: "#f5f8fa", fg: "#292f33", radius: "16px", use: "Tinted content block on grey surface, separated by tint not shadow" }
    card-canvas: { type: card, bg: "#ffffff", fg: "#292f33", border: "1px solid #e4e9ed", radius: "16px", use: "White feature card with hairline outline (no shadow)" }
    stat-figure: { type: badge, fg: "#00ab6e", font: "56px / 700 Spoqa Han Sans Neo", use: "Big green numeric metric (486,384 +)" }
    footer-link: { type: listItem, fg: "#434b4f", font: "18px / 400 Spoqa Han Sans Neo", use: "Footer / utility navigation link" }
  components_harvested: true
---

# Design System Inspiration of Spoqa

## 1. Visual Theme & Atmosphere

Spoqa (스포카) is the Korean restaurant-tech company behind Dodo Point (도도 포인트) and, today, Kitchenboard (키친보드) — a food-ingredient ordering platform for small business owners. Its corporate site reads like a calm, engineering-led product company rather than a flashy startup: a pure white canvas (`#ffffff`) with near-black slate ink (`#292f33`), generous breathing room, and a single confident fresh-green accent (`#00ab6e`) that does almost all of the brand's emotional work. The green is not minty-pastel nor corporate-emerald — it is a balanced, optimistic spring-green that signals "growth" and "go," and it appears in exactly two roles: the primary CTA fill and the big stat numerals (`486,384 +` orders, `48,081 +` stores). Training the eye to read that one hue as both "the action" and "the proof" is the whole system in miniature.

The typographic identity is unmistakable and self-made: Spoqa designed and open-sourced its own corporate typeface, **Spoqa Han Sans Neo**, first released on 한글날 (Hangul Day) 2015 and redrawn into the "Neo" cut. It carries the entire site — display headlines run at 56px Bold (weight 700), sub-heros drop to a quiet light weight (300) at 32px, and body settles at 18px Regular (400). The official weight set is deliberately small — Thin / Regular / Medium / Bold — which keeps hierarchy clean and disciplined. This is a brand that treats its font as core infrastructure, not decoration: 770 of the page's elements resolve to Spoqa Han Sans Neo, with Open Sans appearing only on the latin logotype.

What distinguishes Spoqa from typical fintech chrome is its restraint with depth. Live inspection found `box-shadow: none` across the hero, nav, headings, and CTAs — separation comes from flat tinted surfaces (`#f5f8fa`) and thin `#e4e9ed` hairlines, never elevation. Geometry is gentle but not pill-extreme: buttons sit at a moderate 10px radius, cards at 16px. The result is a flat, modern, trustworthy aesthetic — a tool-maker's site that looks engineered and approachable at once, mirroring the product promise of taking the daily headache (식자재 걱정) out of a restaurant owner's morning.

**Key Characteristics:**
- Spoqa Han Sans Neo (the brand's own open-source typeface) carries every headline and body line — Thin/Regular/Medium/Bold only
- Single fresh-green accent (`#00ab6e`) reserved for the primary CTA and big stat numerals — the one "action + proof" color
- Active/hover green darkens to `#008c5e` for nav and interactive emphasis
- Near-black slate ink (`#292f33`) for headings instead of pure black — warm, trustworthy
- Flat depth: no shadows; tinted `#f5f8fa` surfaces + `#e4e9ed` hairlines do all the separating
- Moderate 10px button radius and 16px card radius — gentle, never sharp, never full-pill
- Weight contrast as hierarchy: 700 Bold display vs 300 light sub-hero vs 400 body
- Cool-grey neutral ladder (`#434b4f` → `#717d85` → `#a9afb3`) for text emphasis steps

## 2. Color Palette & Roles

### Primary
- **Spoqa Green** (`#00ab6e`): Primary brand color, CTA background, and big stat-numeral color. The single saturated fresh-green that means "growth / go / proof" — the system's one action hue.
- **Active Green** (`#008c5e`): Darker green for active nav items, hover, and interactive emphasis. The pressed/selected companion to the primary.
- **Slate Ink** (`#292f33`): Primary heading and dark-CTA color. A near-black blue-slate used instead of pure black for warmth and financial-grade trust.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white card surfaces, text on green/dark fills.
- **Surface Grey** (`#f5f8fa`): Cool-grey tinted surface for content cards, form controls, and segmented sections.
- **Surface Alt** (`#f8fafb`): A near-white secondary grey used on the typeface specimen surfaces.
- **Hairline** (`#e4e9ed`): Thin borders, card outlines, and dividers — the primary separation device in this shadow-free system.
- **Hairline Alt** (`#e1e4e6`): Secondary hairline tone on the typeface site.

### Text Hierarchy
- **Slate Ink** (`#292f33`): Primary headings, hero, strong labels.
- **Ink Alt** (`#363a3c`): Near-equal ink used on the typeface specimen site for body/headings.
- **Body Slate** (`#434b4f`): Standard body copy, nav (inactive), footer links.
- **Muted Slate** (`#717d85`): Tertiary text, captions, metadata.
- **Muted Alt** (`#5c6469`): Alternate muted slate (timeline years, select-input text).
- **Faint Grey** (`#a9afb3`): Disabled / lowest-emphasis labels (lang toggles, placeholders).

### Specimen Accents (typeface site)
- **Accent Blue** (`#4c80f1`): Highlight/sample color on the Spoqa Han Sans specimen page for emphasized glyphs and links.
- **Accent Mint** (`#76e8ad`): Light mint companion used to highlight sample characters on the specimen page.

## 3. Typography Rules

### Font Family
- **Display & Body**: `Spoqa Han Sans Neo` (the brand's own open-source custom typeface, first released 한글날 2015) — used for headlines, nav, body, and button labels alike. Latin logotype uses `Open Sans`.
- **Official weight set**: Thin (100), Regular (400), Medium (500), Bold (700) — "가는 굵기 / 보통 굵기 / 중간 굵기 / 두꺼운 굵기" per the official repo. The specimen site additionally renders ultra-light display at weight 200–300.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Spoqa Han Sans Neo | 56px (3.50rem) | 700 | 1.29 (72px) | Hero headline + big stat numerals |
| Section Statement | Spoqa Han Sans Neo | 48px (3.00rem) | 500 | ~1.0 | Mid-page mission statement |
| Sub-hero / Year | Spoqa Han Sans Neo | 32px (2.00rem) | 300 | 1.4 | Light sub-hero copy, timeline year labels |
| Nav Item | Spoqa Han Sans Neo | 18px (1.13rem) | 500 (700 active) | 1.5 | Top navigation |
| Body | Spoqa Han Sans Neo | 18px (1.13rem) | 400 | 1.5 (27px) | Standard reading text |
| Button | Spoqa Han Sans Neo | 18px (1.13rem) | 700 | 1.0 | CTA label |
| Caption | Spoqa Han Sans Neo | 13px (0.81rem) | 400 | 1.4 | Form/select labels, fine print |

### Principles
- **The font is the brand**: Spoqa designed and open-sourced its own typeface. Using Spoqa Han Sans Neo is non-negotiable for an on-brand surface — it is core infrastructure, not a choice.
- **Small weight set, clear contrast**: Only Thin/Regular/Medium/Bold exist. Hierarchy is built from weight jumps (700 display → 300 light sub-hero → 400 body), not from many sizes.
- **Big numbers in green**: Headline numerals (`486,384 +`) run at 56px Bold in Spoqa Green `#00ab6e` — numbers are first-class proof, rendered as brand color.
- **Hangul-first sizing**: Body sits at a generous 18px / line-height 1.5 — comfortable for hangul, calm rather than dense.

## 4. Component Stylings

### Buttons

**Primary CTA (키친보드 바로가기)**
- Background: `#00ab6e`
- Text: `#ffffff`
- Radius: 10px
- Padding: 20px 32px
- Height: 67px
- Font: 18px / 700 / Spoqa Han Sans Neo
- Active: `#008c5e`
- Use: Primary product call-to-action

**Dark CTA (채용공고 보러가기)**
- Background: `#292f33`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 10px
- Padding: 20px 32px
- Height: 69px
- Font: 18px / 700 / Spoqa Han Sans Neo
- Use: Secondary action on dark/imagery backgrounds (careers)

### Inputs & Forms

**Select / Filter Control**
- Background: `#f5f8fa`
- Text: `#5c6469`
- Radius: 4px
- Padding: 3px 7px
- Height: 29px
- Font: 13px / 400 / Spoqa Han Sans Neo
- Use: Form select / filter control on tinted surface

### Cards & Containers

**Tinted Surface Card**
- Background: `#f5f8fa`
- Text: `#292f33`
- Radius: 16px
- Use: Content block on the cool-grey surface, separated by tint (no shadow)

**White Feature Card**
- Background: `#ffffff`
- Text: `#292f33`
- Border: 1px solid `#e4e9ed`
- Radius: 16px
- Use: White feature card with hairline outline, shadow-free

### Badges

**Stat Figure (green numeral)**
- Text: `#00ab6e`
- Font: 56px / 700 / Spoqa Han Sans Neo
- Use: Big numeric proof metric ("486,384 +", "48,081 +")

### Navigation
- Background: `#ffffff`
- Text: `#434b4f`
- Font: 18px / 500 / Spoqa Han Sans Neo
- Padding: 0px 28px
- Active: `#008c5e` text at weight 700
- Use: Top horizontal nav ("소개", "채용", "성장", "기술 블로그", "스포카 한 산스")

### Footer
- Links: `#434b4f`, 18px / 400 / Spoqa Han Sans Neo
- Use: Footer / utility navigation links

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://spoqa.co.kr, https://spoqa.github.io/spoqa-han-sans/, https://github.com/spoqa/spoqa-han-sans
**Tier 2 sources:** getdesign.md/spoqa — 404 (not covered); styles.refero.design/?q=spoqa — no Spoqa entry (fuzzy "q" matches only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 20px, 28px, 32px, 64px
- Notable: CTA padding lands at a generous 20px × 32px, giving the green button a confident, tappable presence

### Grid & Container
- Centered single-column hero with the 56px Spoqa Han Sans Neo headline as the anchor
- Stat row of big green numerals (`486,384 +`) presented as horizontal proof metrics
- A chronological timeline section ("2024 / 2022~2023 / 2020~2021 / 2019~2011") tracking product milestones (도도 포인트 → 도도 카트 → 키친보드)
- Feature sections alternate white (`#ffffff`) and tinted grey (`#f5f8fa`) full-width bands

### Whitespace Philosophy
- **Breathing room over density**: the marketing surface is airy — generous vertical rhythm between sections, calm and confident rather than packed.
- **Flat segmentation**: sections separate by background tint (`#f5f8fa` vs `#ffffff`) and `#e4e9ed` hairlines, not by shadow or heavy borders.
- **Green as punctuation**: the single green accent is used sparingly so each green element (CTA, stat numeral) reads as significant.

### Border Radius Scale
- Small (4px): form/select controls
- Medium (10px): buttons / CTAs — the interactive workhorse
- Large (16px): cards and content containers
- Full (9999px): occasional pills / circular media

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f5f8fa` background shift | Card / section separation without elevation |
| Hairline (Level 2) | `1px solid #e4e9ed` border | White card outlines, dividers |

**Shadow Philosophy**: Spoqa is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, and CTAs. Depth and grouping are communicated entirely through flat tinted surfaces (`#f5f8fa`) and thin `#e4e9ed` hairlines. This is a deliberate modern-flat choice that keeps the product-company surface feeling clean, fast, and engineered. When emphasis is needed, the system reaches for color (green `#00ab6e`) or the dark slate fill (`#292f33`), never elevation.

## 7. Do's and Don'ts

### Do
- Use Spoqa Han Sans Neo for every headline and body line — it is the brand's own typeface
- Reserve green (`#00ab6e`) for the primary CTA and big stat numerals — keep it the single "action + proof" color
- Darken to `#008c5e` for active nav and hover states
- Use near-black slate (`#292f33`) for headings instead of pure black
- Separate sections with flat tinted surfaces (`#f5f8fa`) and `#e4e9ed` hairlines, not shadows
- Build hierarchy from weight jumps (700 Bold display, 300 light sub-hero, 400 body)
- Keep button radius moderate at 10px and cards at 16px
- Render big proof numerals at 56px Bold in green

### Don't
- Use drop shadows for elevation — Spoqa is a flat, shadow-free system
- Spread green across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for headings — reserve near-black slate `#292f33`
- Use a font other than Spoqa Han Sans Neo on an on-brand surface
- Use sharp/square corners on buttons — keep the gentle 10px radius
- Introduce a second saturated accent on the marketing surface — green is the only brand hue
- Pack the page densely — Spoqa breathes; keep generous vertical rhythm
- Set every weight available — stay within Thin/Regular/Medium/Bold discipline

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, stat numerals stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Primary CTA at 67px height with 20px × 32px padding — large and unmistakable
- Dark CTA at 69px height, full-width comfortable hit area
- Nav links spaced with 28px horizontal padding for touch

### Collapsing Strategy
- Hero: 56px Spoqa Han Sans Neo headline scales down on mobile, weight 700 maintained
- Stat numeral row: horizontal proof metrics wrap/stack on narrow viewports
- Timeline: chronological milestone columns collapse to a stacked vertical list
- Tinted/white alternating sections maintain full-width treatment

### Image Behavior
- Product screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain 16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / stat numeral: Spoqa Green (`#00ab6e`)
- Active / hover green: Active Green (`#008c5e`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f5f8fa`)
- Heading: Slate Ink (`#292f33`)
- Body text: Body Slate (`#434b4f`)
- Muted text: Muted Slate (`#717d85`)
- Faint / disabled: Faint Grey (`#a9afb3`)
- Hairline: `#e4e9ed`

### Example Component Prompts
- "Create a hero on white background. Headline at 56px Spoqa Han Sans Neo weight 700, color #292f33. Below it a row of big proof numerals at 56px weight 700 in green #00ab6e ('486,384 +'). Primary CTA: #00ab6e background, white text, 10px radius, 20px 32px padding, 18px weight 700 — '키친보드 바로가기'."
- "Design a feature card: white background, 1px solid #e4e9ed border, 16px radius, no shadow. Title 32px Spoqa Han Sans Neo weight 700, #292f33. Body 18px weight 400, #434b4f, line-height 1.5."
- "Build a tinted section: #f5f8fa background, full-width. Cards inside use white #ffffff with #e4e9ed hairline and 16px radius. No drop shadows anywhere."
- "Create top nav: white header. Spoqa Han Sans Neo 18px weight 500 links, #434b4f text, active item #008c5e at weight 700. Green CTA right-aligned, 10px radius."

### Iteration Guide
1. Spoqa Han Sans Neo for every headline and paragraph — it is the brand's own typeface
2. Green (`#00ab6e`) is the single action + proof color — don't spread it; darken to `#008c5e` on active/hover
3. No shadows — separate with `#f5f8fa` tint and `#e4e9ed` hairlines
4. Button radius 10px, cards 16px — gentle, never sharp or full-pill
5. Heading color is `#292f33` slate, never pure black
6. Build hierarchy from weight (700/500/400/300), not many sizes
7. Render big proof numerals at 56px Bold in green

---

## 10. Voice & Tone

Spoqa's voice is **practical, owner-facing, and quietly confident** — it speaks directly to the 사장님 (small-business owner) and frames every feature as a worry lifted off their shoulders. The site's mission line, "우리는 사장님의 식자재 걱정을 덜어주는 편리한 서비스를 만듭니다" ("We build convenient services that lift restaurant owners' worries about ingredients"), sets the register: empathetic, concrete, never hype. Copy is plain and benefit-first, naming the real daily pain (식자재 주문 / 미납 관리 / 견적) rather than abstractions, and it celebrates proof through numbers rather than adjectives.

| Context | Tone |
|---|---|
| Hero / mission | Empathetic, owner-facing. "사장님의 식자재 걱정을 덜어주는…" Concrete, not grand. |
| Product feature labels | Plain and functional. "AI 주문서 생성", "미납 관리", "견적", "결제". |
| CTAs | Direct, low-pressure. "키친보드 바로가기", "채용공고 보러가기". |
| Proof / metrics | Numbers do the talking. "486,384 +" orders, "48,081 +" stores — stated, not boasted. |
| Milestone timeline | Chronological and factual. Product history listed as dated events. |

**Voice samples (verbatim from live homepage):**
- "우리는 사장님의 식자재 걱정을 덜어주는 편리한 서비스를 만듭니다" — hero mission (empathetic, owner-facing). *(verified live 2026-06-17)*
- "스포카는 매장의 풀기 어려운 문제를 해결하여 식자재 유통시장을 바꾸고 있습니다" — sub-hero (problem→change framing). *(verified live 2026-06-17)*
- "스포카는 소상공인과 함께 오늘도 새로운 역사를 쓰고 있습니다" — section statement (partnership, with-the-owner register). *(verified live 2026-06-17)*

**Forbidden register**: hype superlatives, fear-based sales urgency, undefined jargon left unexplained, exclamation-heavy marketing. Spoqa speaks to a busy owner who wants the worry gone, not a pitch.

## 11. Brand Narrative

Spoqa (주식회사 스포카) was founded in **May 2011** and built its first hit, **Dodo Point (도도 포인트)** — a tablet-based loyalty/점수 적립 service that replaced paper coupons for small offline merchants (정식 출시 2012.04). Dodo Point scaled into the tens of thousands of stores and millions of monthly accruing users, and along the way Spoqa designed and open-sourced its own corporate typeface, **Spoqa Han Sans**, released on 한글날 (Hangul Day) 2015 — a public artifact of the company's engineering-and-design culture, given away free for anyone to use.

In **February 2022**, Spoqa transferred the Dodo Point business to Yanolja F&B Solutions and turned fully toward a new problem: the messy, manual world of restaurant ingredient procurement. Dodo Cart (도도 카트) was rebranded to **Kitchenboard (키친보드)** in September 2022 — a platform that makes a restaurant owner's daily 식자재 주문 (ingredient ordering) fast and simple, connecting merchants with distributors and adding 견적 / 결제 / 미납 관리 / AI 주문서 생성 over time. By late 2024 Kitchenboard was processing tens of thousands of orders a month (월 주문 수 24,000건 돌파, 2024.12).

What Spoqa refuses, visible in its design: the loud, intimidating chrome of legacy B2B software and the dark-pattern urgency of hard-sell marketing. What it embraces: a flat, fast, owner-friendly interface; a single trustworthy green; its own carefully made typeface; and copy that names the owner's real worry and promises to lift it. The brand frames itself as the small-business owner's partner ("소상공인과 함께") — building infrastructure for the people who run the shops.

## 12. Principles

1. **Lift the owner's worry.** Every feature is framed as a 걱정 removed from a busy 사장님's day. *UI implication:* lead with the concrete pain solved; keep flows short and the next action obvious.
2. **One action, one color.** Green (`#00ab6e`) means "do this" and "this is proof." *UI implication:* reserve the saturated green for the primary CTA and headline metrics; never dilute it across decoration.
3. **Proof in numbers, not adjectives.** Spoqa shows 486,384 orders rather than calling itself "leading." *UI implication:* render real metrics prominently (56px Bold green numerals); let data carry credibility.
4. **Flat and fast.** Owner-facing clarity beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; keep the page light and quick to scan.
5. **The font is the brand.** Spoqa made and gave away its own typeface. *UI implication:* use Spoqa Han Sans Neo everywhere; build hierarchy from its disciplined Thin/Regular/Medium/Bold weights.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Spoqa user segments (Korean restaurant owners ordering ingredients, small-business operators, ingredient distributors), not individual people.*

**박정현, 47, 대구.** A 김밥집 owner who orders ingredients daily and used to juggle phone calls and paper ledgers with three distributors. Chose Kitchenboard because one tap replaces the morning scramble. Values that the app is calm and obvious — she doesn't have time to learn complicated software.

**이도윤, 33, 서울.** A franchise café operator managing 미납 (unpaid balances) and 견적 across multiple suppliers. Appreciates that Spoqa surfaces the numbers plainly and that 결제 and 미납 관리 live in one place. Trusts the brand's plain, proof-driven tone.

**최민수, 52, 경기.** An ingredient distributor (유통사) using Kitchenboard's distributor-side service to receive and manage orders. Wants a clean order pipeline and a partner that treats both sides — merchant and distributor — fairly. Reads the dated milestone history as a sign of steady, real progress.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no orders yet)** | White canvas. Single Slate Ink (`#292f33`) line explaining nothing is ordered yet, with one green CTA to start an order. No illustration clutter. |
| **Empty (no saved distributors)** | Muted Slate (`#717d85`) single line: nothing saved yet, plus a path to add a distributor. Honest, calm. |
| **Loading (order list fetch)** | Skeleton rows on `#f5f8fa` tinted surface at final dimensions, 16px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle green (`#00ab6e`) progress indicator; previous values stay visible. Never block the list during refresh. |
| **Error (order failed)** | Inline message in Slate Ink with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "필수". |
| **Success (order placed)** | Brief inline confirmation in calm tone; order detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f5f8fa` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Faint Grey (`#a9afb3`) text on reduced-opacity surface; green actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card / section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast aesthetic. Buttons respond to press with a subtle opacity/scale shift; content reveals fade-in from below at `motion-standard / ease-enter`; stat numerals may count up once on first view. No bounce or spring — a tool a busy owner relies on every morning signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle:
- https://spoqa.co.kr/ — homepage tokens (Spoqa Green #00ab6e CTA + stat numerals, active green #008c5e,
  slate ink #292f33, body #434b4f, Spoqa Han Sans Neo, 10px button radius, shadowless)
- https://spoqa.github.io/spoqa-han-sans/ — typeface specimen (ink #363a3c, accents #4c80f1 / #76e8ad,
  weight set, 2015 한글날 release)
- https://github.com/spoqa/spoqa-han-sans — official repo README (Thin/Regular/Medium/Bold weight spec)

Voice samples (§10) are verbatim from the live homepage (hero mission, sub-hero, section statement).

Brand narrative (§11) facts are taken from the live homepage's own About + milestone timeline:
- (주)스포카 설립 2011.05; 도도 포인트 정식 출시 2012.04; 도도 포인트 사업양도 to 야놀자에프앤비솔루션 2022.02;
  도도 카트 → 키친보드 리브랜딩 2022.09; 키친보드 월 주문 수 24,000건 돌파 2024.12; 대표 손성훈.
- Spoqa Han Sans released 한글날 2015 (per the typeface site + repo).
These are stated on Spoqa's own surfaces inspected this turn; broader detail is general public knowledge,
not directly quoted beyond what the homepage shows.

Personas (§13) are fictional archetypes informed by publicly observable Spoqa/Kitchenboard user segments
(Korean restaurant owners ordering ingredients, distributors). Names are illustrative; they do not refer
to real people.

Interpretive claims (e.g., "one action one color", "proof in numbers", "the font is the brand") are
editorial readings connecting Spoqa's observed design and stated mission to its positioning, not directly
sourced Spoqa statements.
-->
