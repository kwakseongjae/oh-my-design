---
id: datarize
name: Datarize
display_name_kr: 데이터라이즈
country: KR
category: marketing
homepage: "https://www.datarize.ai"
primary_color: "#f9ff91"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=datarize.ai&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "Signature = neon lime highlight (#f9ff91) used as decorative blobs and status pills; action color = near-black ink pill (#111111). Blue (#466cf3) and iOS-blue (#007aff) are secondary accents. Shadowless flat system on white."
  colors:
    lime: "#f9ff91"
    lime-alt: "#f7ff91"
    yellow: "#ffef42"
    blue: "#466cf3"
    link: "#007aff"
    ink: "#111111"
    ink-soft: "#181818"
    heading: "#191919"
    body: "#46484d"
    muted: "#555555"
    faint: "#aeb2ba"
    canvas: "#ffffff"
    surface: "#f2f5fa"
    surface-alt: "#fafafa"
    hairline: "#e5e7eb"
    ink-pure: "#000000"
  typography:
    family: { sans: "Pretendard" }
    display-hero: { size: 64, weight: 700, use: "Hero headline, Pretendard Bold" }
    section:      { size: 44, weight: 600, use: "Section titles, Pretendard SemiBold" }
    feature:      { size: 22, weight: 600, use: "Feature / card heads" }
    body:         { size: 15, weight: 400, use: "Body and inline link text, Pretendard" }
    button:       { size: 16, weight: 600, use: "CTA button label" }
    caption:      { size: 12, weight: 400, use: "Badge / meta labels" }
  spacing: { xs: 6, sm: 10, md: 12, base: 14, lg: 16, xl: 24, xxl: 32, section: 56 }
  rounded: { sm: 8, md: 14, lg: 16, pill: 50, full: 999 }
  shadow:
    none: "none"
  components:
    cta-primary: { type: button, bg: "#111111", fg: "#ffffff", radius: "50px", padding: "14px 24px", font: "16px / 600 Pretendard", use: "Primary CTA 무료로 시작하기 — near-black pill" }
    cta-outline: { type: button, fg: "#111111", border: "1px solid #111111", radius: "100px", padding: "14px 24px", font: "16px / 600 Pretendard", use: "Secondary CTA 도입 문의하기 — outline pill" }
    dark-chip: { type: button, bg: "#181818", fg: "#ffffff", radius: "100px", padding: "12px 24px", font: "15px / 400 Pretendard", use: "Inline dark info pill 데이터라이즈 AI 자세히 보기" }
    lang-button: { type: button, fg: "#111111", radius: "8px", padding: "10px 12px", font: "15px / 500 Pretendard", use: "Header language switcher — ghost" }
    badge-lime: { type: badge, bg: "#f7ff91", fg: "#000000", radius: "999px", padding: "6px 16px", font: "12px / 400 Pretendard", use: "Neon lime status pill 매월 업데이트" }
    stat-card: { type: card, bg: "#f2f5fa", fg: "#111111", radius: "14px", padding: "32px 56px", use: "Tinted stat / feature card on white" }
    feature-tab: { type: tab, active: "text #111111", disabled: "#aeb2ba label", font: "22px / 600 Pretendard", use: "Feature section segmented heads — active ink, inactive faint" }
  components_harvested: true
---

# Design System Inspiration of Datarize

## 1. Visual Theme & Atmosphere

Datarize (데이터라이즈) is a Korean e-commerce AI marketing-automation platform, and its site reads like a confident, product-led B2B SaaS that refuses to look like enterprise software. The canvas is pure white (`#ffffff`), broken up by cool-grey tinted panels (`#f2f5fa`) and a quieter alternate grey (`#fafafa`) on the pricing surface, so content sits in calm, airy bands. Text is set in near-black inks — a hero-weight `#191919`, a dark-section `#181818`, and an action-grade `#111111` — never pure black for running copy, which keeps the page feeling engineered rather than harsh. The defining move is the brand's signature **neon lime** (`#f9ff91`): big soft chartreuse blobs float behind the hero like highlighter ink, and the same lime (`#f7ff91`) returns as small rounded status pills. A more saturated yellow (`#ffef42`) appears in the gradient blobs, and two blues — a punchy royal `#466cf3` and an iOS-style `#007aff` — handle decorative icon fills and inline "learn more →" links respectively.

The typographic personality is unmistakably Korean-product: everything is **Pretendard**, the de-facto hangul UI font, run across three weights. Headlines hit hard — a 64px Pretendard Bold (700) hero, 44px SemiBold (600) section titles, and 22px (600) feature heads — while body and links drop to a quiet 15px / weight 400 in `#46484d`. Secondary copy steps down through `#555555` to a faint `#aeb2ba` that Datarize uses deliberately for the *inactive* item in its feature carousels, so the active head reads in ink and the rest recede. This single-family, multi-weight discipline is the system's backbone: weight does the hierarchy work, not extra typefaces.

What distinguishes Datarize from its fintech-adjacent peers is restraint with depth paired with boldness in shape. Live inspection found `box-shadow: none` across the hero, nav, CTAs, and cards — separation comes entirely from flat tinted surfaces (`#f2f5fa`) and thin `#e5e7eb` hairlines, never elevation. Geometry, by contrast, leans all the way into the pill: the primary CTA is a near-black `#111111` capsule at 50px radius, the outline CTA rounds to 100px, lime badges go to 999px, and only structural cards hold a calmer 14–16px corner. The result is a flat, fast, neon-accented marketing site that signals "data product, not legacy dashboard."

**Key Characteristics:**
- Neon lime (`#f9ff91` / `#f7ff91`) as the signature accent — decorative blobs + rounded status pills
- Near-black action ink (`#111111`) for the primary CTA, distinct from heading inks `#181818` / `#191919`
- Pretendard everywhere, three weights — 700 hero, 600 section, 400 body
- Pure-white canvas (`#ffffff`) segmented by cool-grey tints (`#f2f5fa`, `#fafafa`)
- Flat depth: `box-shadow: none`; `#e5e7eb` hairlines do the dividing
- Pill-forward geometry — 50px primary, 100px outline, 999px badges, 14–16px cards
- Faint grey (`#aeb2ba`) reserved for inactive carousel heads; body ink steps `#46484d` → `#555555`
- Secondary accents: royal blue `#466cf3` (icon fills), iOS blue `#007aff` (inline text links), saturated yellow `#ffef42` (gradient blobs); pure black `#000000` only as label text on lime

## 2. Color Palette & Roles

### Signature & Accent
- **Datarize Lime** (`#f9ff91`): The brand signature — soft neon chartreuse used for the large decorative hero blobs and as the highlight identity color.
- **Lime Alt** (`#f7ff91`): A near-identical lime used on rounded status pills ("매월 업데이트") and secondary blobs.
- **Saturated Yellow** (`#ffef42`): A punchier yellow that appears inside the gradient decorative circles for warmth and depth.
- **Royal Blue** (`#466cf3`): Secondary accent for small icon fills and decorative blocks.
- **Link Blue** (`#007aff`): iOS-style blue reserved for inline "→ 알아보기" text links.

### Ink & Neutral
- **Heading Ink** (`#191919`): The hero H1 and several H2 titles — a near-black with a hair of warmth.
- **Dark Ink** (`#181818`): Dark section backgrounds, the inline info chip, and blog headings.
- **Action Ink** (`#111111`): The primary CTA fill and active feature-head text — the darkest functional ink.
- **Pure Black** (`#000000`): Used narrowly as label text on the lime status pills for maximum contrast.

### Text Hierarchy
- **Body Slate** (`#46484d`): Standard body copy and descriptions.
- **Muted Slate** (`#555555`): Secondary text and captions.
- **Faint Blue-Grey** (`#aeb2ba`): Inactive feature-carousel heads, placeholders, lowest-emphasis labels.

### Surface & Border
- **Pure White** (`#ffffff`): Page background, white cards, and text on dark/lime fills.
- **Surface Grey** (`#f2f5fa`): The workhorse tinted card and stat-panel surface.
- **Surface Alt** (`#fafafa`): A lighter grey surface used on the pricing page.
- **Hairline** (`#e5e7eb`): Thin borders for nav buttons, dividers, and card outlines — the primary separation device in this shadowless system.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard` (Pretendard Variable / Bold / SemiBold / Regular) — the single family across the entire site, optimized for dense hangul legibility.

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Display Hero | Pretendard Bold | 64px (4.00rem) | 700 | Homepage H1, `#191919` |
| Blog Hero | Pretendard Bold | 54px (3.38rem) | 700 | Blog index H1, `#181818` |
| Section Heading | Pretendard SemiBold | 44px (2.75rem) | 600 | Section titles `#181818` / `#191919` |
| Feature Head | Pretendard | 22px (1.38rem) | 600–700 | Carousel/card heads; active `#111111`, inactive `#aeb2ba` |
| Button | Pretendard | 16px (1.00rem) | 600 | Primary / outline CTA labels |
| Body | Pretendard | 15px (0.94rem) | 400 | Standard reading text + inline links |
| Caption / Badge | Pretendard | 12px (0.75rem) | 400 | Lime pill labels, meta |

### Principles
- **One family, weight-driven hierarchy**: Pretendard carries everything; the jump from 700 hero to 600 section to 400 body is the primary signal — no second typeface.
- **Bold display, quiet body**: Headlines are large and heavy (64px / 700); paragraphs and links stay calm at 15px / 400.
- **Faint as a state, not a color**: `#aeb2ba` is used intentionally to dim *inactive* carousel heads so the active one reads in ink.
- **Hangul-first sizing**: Body sits at 15px — generous for hangul, dense enough for information-rich B2B copy.

## 4. Component Stylings

### Buttons

**Primary CTA (무료로 시작하기)**
- Background: `#111111`
- Text: `#ffffff`
- Radius: 50px
- Padding: 14px 24px
- Font: 16px / 600 / Pretendard
- Height: 47px
- Use: Primary call-to-action — near-black pill, the single "do this" action

**Outline CTA (도입 문의하기)**
- Background: transparent
- Text: `#111111`
- Border: 1px solid `#111111`
- Radius: 100px
- Padding: 14px 24px
- Font: 16px / 600 / Pretendard
- Height: 49px
- Use: Secondary action paired beside the primary CTA

**Dark Info Chip (데이터라이즈 AI 자세히 보기)**
- Background: `#181818`
- Text: `#ffffff`
- Radius: 100px
- Padding: 12px 24px
- Height: 46px
- Use: Inline dark pill linking into deeper product/AI content

**Language Switcher (한국어)**
- Background: transparent
- Text: `#111111`
- Border: 1px solid transparent
- Radius: 8px
- Padding: 10px 12px
- Font: 15px / 500 / Pretendard
- Height: 40px
- Use: Header ghost button for locale switching

**Testimonial Nav**
- Background: transparent
- Border: 1px solid `#e5e7eb`
- Radius: 8px
- Use: Prev/next arrows on the testimonial carousel

### Cards & Containers

**Tinted Stat Card**
- Background: `#f2f5fa`
- Text: `#111111`
- Radius: 14px
- Padding: 32px 56px
- Use: Stat panels ("3,845% 평균 ROAS") and feature blocks on white — no shadow

**Pricing Card**
- Background: `#fafafa`
- Radius: 16px
- Use: Plan cards on the pricing surface

### Badges

**Lime Status Pill (매월 업데이트)**
- Background: `#f7ff91`
- Text: `#000000`
- Radius: 999px
- Padding: 6px 16px
- Font: 12px / 400 / Pretendard
- Height: 36px
- Use: Small neon status / freshness tag — the signature accent in pill form

### Tabs

**Feature Carousel Head**
- Active: `#111111` text
- Inactive: `#aeb2ba` text
- Font: 22px / 600 / Pretendard
- Use: Segmented feature heads ("질문 하나로 시작하는 CRM" active, others faint)

### Inputs

**Minimal Field (검색 / Email)**
- Background: transparent
- Text: `#000000`
- Font: 15px / 400 / Pretendard Regular
- Use: Borderless search and newsletter email inputs on the blog — underline-free, relies on surrounding container

### Navigation
- Background: `#ffffff`
- Text: `#111111`
- Font: 15px / Pretendard
- Use: Top horizontal nav (Why Datarize / AI / 제품 / 고객 사례 / 리소스 / 가격 정책 / 도입 문의)

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces)
**Tier 1 sources:** https://www.datarize.ai, https://www.datarize.ai/blog, https://www.datarize.ai/pricing
**Tier 2 sources:** getdesign.md/datarize — no entry ("No design"); styles.refero.design/?q=datarize — no datarize result
**Conflicts unresolved:** none (KR brand — Tier 2 catalogs do not cover Datarize; Tier 1 live DOM carries all values)

## 5. Layout Principles

### Spacing System
- Base unit: ~from 6px → section 56px
- Scale: 6px, 10px, 12px, 14px, 16px, 24px, 32px, 56px
- Notable: CTA padding lands at 14px 24px; stat cards use a generous 32px 56px internal padding

### Grid & Container
- Centered single-column hero with the 64px Pretendard Bold headline as the anchor, floated over soft lime blobs
- Feature sections use a segmented head pattern: one active head in ink, the rest faint, with a synced visual panel
- Stat/feature cards sit on `#f2f5fa` tinted surfaces with 14px radius
- Pricing page switches to a lighter `#fafafa` ground with 16px plan cards

### Whitespace Philosophy
- **Airy bands over density**: full-width white and tinted-grey sections alternate to give the data-heavy product room to breathe.
- **Flat segmentation**: sections separate by background tint (`#f2f5fa` vs `#ffffff`) and `#e5e7eb` hairlines, not by shadow.
- **Highlighter accents**: the lime blobs act like marker strokes — emphasis through a signature color rather than boxes or rules.

### Border Radius Scale
- Small (8px): ghost buttons, nav controls
- Medium (14px): stat / feature cards — the workhorse
- Large (16px): pricing cards, larger containers
- Pill (50px / 100px): primary and outline CTAs
- Full (999px): lime badges, fully-round pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f2f5fa` / `#fafafa` background shift | Card and section separation without elevation |
| Hairline (Level 2) | `1px solid #e5e7eb` border | Nav button outlines, dividers |

**Shadow Philosophy**: Datarize is a near-shadowless system. Live inspection returned `box-shadow: none` across the hero, nav, CTAs, stat cards, and badges. Depth and grouping are communicated entirely through flat tinted surfaces (`#f2f5fa`) and thin `#e5e7eb` hairlines. Emphasis is delivered by color — the neon lime (`#f9ff91`) blobs and the near-black `#111111` pill — never by elevation. This keeps the marketing UI feeling fast, modern, and product-native rather than like a legacy dashboard with stacked cards.

## 7. Do's and Don'ts

### Do
- Use Pretendard for everything, leaning on weight (700 / 600 / 400) for hierarchy
- Reserve the neon lime (`#f9ff91` / `#f7ff91`) for decorative blobs and small status pills — keep it the signature
- Use the near-black `#111111` pill as the single primary action color
- Use near-black inks (`#191919` / `#181818` / `#111111`) for text instead of pure black for running copy
- Separate sections with flat tints (`#f2f5fa`, `#fafafa`) and `#e5e7eb` hairlines, not shadows
- Lean into pill geometry — 50px primary, 100px outline, 999px badges
- Dim inactive carousel heads to `#aeb2ba` so the active head reads in ink
- Keep `#007aff` for inline "→ 알아보기" text links, distinct from the royal `#466cf3` icon blue

### Don't
- Use drop shadows for elevation — Datarize is a flat, shadow-free system
- Spread the lime across large fills or many elements — it works as an accent/blob, not a body color
- Use pure black (`#000000`) for paragraphs — reserve it for label text on lime
- Set the primary CTA in any color but the near-black `#111111` pill
- Introduce a second display typeface — Pretendard carries all weights
- Use sharp/square corners on CTAs or badges — interactive chrome is pill-shaped
- Mix the two blues randomly — `#466cf3` is for icon fills, `#007aff` is for inline links
- Add positive emphasis with weight under 600 on headlines — display is always bold

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, CTAs stack, blobs scale down |
| Tablet | 640-1024px | Moderate padding, 2-up feature/stat cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Primary CTA at ~47px height, full pill — an unmistakable target
- Outline CTA at ~49px height with 14px 24px padding
- Language switcher at 40px height; testimonial nav arrows at comfortable hit area

### Collapsing Strategy
- Hero: 64px Pretendard Bold headline scales down on mobile, weight 700 maintained
- Feature carousel: segmented heads stack; active/inactive ink contrast preserved
- Stat/feature cards: multi-column → stacked single column
- Tinted/white alternating bands maintain full-width treatment

### Image Behavior
- Product screenshots and the lime decorative blobs carry no shadow at any size, consistent with the flat system
- Cards hold 14–16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Signature accent: Datarize Lime (`#f9ff91`), pill lime (`#f7ff91`)
- Saturated yellow blob: (`#ffef42`)
- Primary CTA: Action Ink (`#111111`)
- Heading text: Heading Ink (`#191919`) / Dark Ink (`#181818`)
- Body text: Body Slate (`#46484d`); secondary (`#555555`); faint (`#aeb2ba`)
- Background: Pure White (`#ffffff`); tinted (`#f2f5fa`), alt (`#fafafa`)
- Hairline: (`#e5e7eb`)
- Accents: royal blue (`#466cf3`), link blue (`#007aff`); pure black label-on-lime (`#000000`)

### Example Component Prompts
- "Create a hero on white background with two or three soft `#f9ff91` lime circles floating behind. Headline at 64px Pretendard Bold weight 700, color `#191919`. A near-black pill CTA: `#111111` background, white text, 50px radius, 14px 24px padding, 16px / 600 — '무료로 시작하기'. Beside it an outline pill: transparent, `#111111` text, 1px solid `#111111` border, 100px radius."
- "Design a stat card: `#f2f5fa` background, 14px radius, 32px 56px padding, no shadow. Big number in `#111111`, label in `#46484d` 15px Pretendard."
- "Build a lime status pill: `#f7ff91` background, `#000000` text, 999px radius, 6px 16px padding, 12px Pretendard — '매월 업데이트'."
- "Create a feature carousel: active head 22px / 600 in `#111111`, inactive heads in `#aeb2ba`; inline link '오디언스 알아보기 →' in `#007aff` 15px."

### Iteration Guide
1. Pretendard only; hierarchy via weight (700 / 600 / 400)
2. Lime (`#f9ff91`) is a signature accent/blob — never a body fill
3. The `#111111` pill is the single primary action
4. No shadows — separate with `#f2f5fa` tint and `#e5e7eb` hairlines
5. Pill geometry throughout — 50px CTA, 100px outline, 999px badges, 14–16px cards
6. Inactive carousel heads go faint `#aeb2ba`; body ink is `#46484d`
7. Keep the two blues in their lanes: `#466cf3` icon fills, `#007aff` inline links

---

## 10. Voice & Tone

Datarize's voice is **clear, outcome-focused, and quietly expert** — a data partner that turns the messy work of e-commerce marketing into something a busy shop owner can act on. The hero line "모든 행동이 매출로 이어지는 AI 마케팅 플랫폼" ("An AI marketing platform where every action leads to revenue") sets the register: benefit-first, revenue-anchored, never hype. Copy speaks to operators who care about ROAS and conversion, decoding CRM and targeting jargon into plain Korean rather than hiding behind it.

| Context | Tone |
|---|---|
| Hero headline | Outcome-framed, confident. "모든 행동이 매출로 이어지는 AI 마케팅 플랫폼." |
| Section heads | Plain, capability-first. "우리 쇼핑몰에 필요한 마케팅을 대신하는 AI", "CRM의 모든 과정을 한 곳에서". |
| CTAs | Direct, low-pressure. "무료로 시작하기", "도입 문의하기". |
| Feature labels | Concrete + benefit. "정교한 고객 타겟팅", "실행으로 이어지는 분석". |
| Proof / stats | Numeric and specific. "3,845% 평균 ROAS", "900+ 고객사가 선택한 데이터라이즈". |

**Voice samples (verbatim from live surfaces):**
- "모든 행동이 매출로 이어지는 AI 마케팅 플랫폼" — hero headline (outcome-framed). *(verified live 2026-06-26)*
- "900+ 고객사가 선택한 데이터라이즈" — social-proof section head. *(verified live 2026-06-26)*
- "데이터라이즈 | 데이터 기반 이커머스 AI 마케팅 자동화" — homepage title meta (category positioning). *(verified live 2026-06-26)*

**Forbidden register**: vague hype without a number, fear-based urgency, undefined marketing jargon left unexplained, exclamation-heavy sales pitches.

## 11. Brand Narrative

Datarize (데이터라이즈) is a Korean B2B SaaS built around a single conviction: that an online store's every customer action — a search, a click, a hovered product — should compound into revenue rather than evaporate into an analytics dashboard nobody reads. The product positions itself as "데이터 기반 이커머스 AI 마케팅 자동화" (data-driven e-commerce AI marketing automation), folding CRM, audience targeting, campaign execution, on-site search/recommendation widgets, and analysis into one place so a lean marketing team — or an AI agent acting for them — can run the whole loop.

The company's stated proof points are operator-grade and specific: a homepage social-proof line of "900+ 고객사" (900+ customer companies) and campaign results quoted in hard ROAS multiples ("3,845% 평균 ROAS"). That numeric posture is the narrative — Datarize sells outcomes a merchant can measure, not a rebrand of "growth."

What Datarize refuses, visible in its design: the heavy, intimidating chrome of legacy enterprise analytics (no shadow-stacked card walls, no dense corporate blue) and the dark-pattern urgency of performance-marketing hype. What it embraces: a flat, fast, white-and-lime interface; one near-black action pill; bold Pretendard headlines that state the benefit plainly; and a highlighter-lime accent that makes a data product feel approachable.

## 12. Principles

1. **Every action should lead to revenue.** The product's thesis is that customer behavior is an asset. *UI implication:* surface the path from a behavior to a campaign to a measurable result; keep stat cards (ROAS, conversion) prominent and legible.
2. **Decode, don't intimidate.** CRM, targeting, and DSR-grade jargon are turned into plain, tappable features. *UI implication:* label features by outcome ("실행으로 이어지는 분석"), not by internal system name.
3. **One action, one color.** The near-black `#111111` pill means "do this." *UI implication:* reserve the primary pill for the single next step so the CTA is never ambiguous.
4. **Flat and fast.** Product-native clarity beats decorative depth. *UI implication:* no shadows; separate with `#f2f5fa` tint and `#e5e7eb` hairlines; keep the page quick to scan.
5. **Accent, don't flood.** The lime is a highlighter, not a wall. *UI implication:* use `#f9ff91` for blobs and small pills only; let white and ink carry the structure.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Datarize user segments (Korean e-commerce operators, growth marketers, agency teams), not individual people.*

**김도현, 33, 서울.** Growth marketer at a mid-size D2C fashion brand. Lives in ROAS and conversion numbers; chose Datarize because the stat cards let him show his founder a measurable result in one screen. Distrusts tools that promise "growth" without a number.

**이서연, 29, 경기.** Solo operator running a Cafe24 shop. Has no data team, so she relies on Datarize's AI to run targeting and campaigns for her. Values that the features are labeled by outcome and that the UI doesn't feel like enterprise analytics.

**박준영, 41, 서울.** Performance lead at a small agency managing several e-commerce clients. Uses Datarize to unify CRM, audiences, and on-site widgets across accounts. Appreciates the calm, flat interface that doesn't pressure or overwhelm his junior marketers.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no campaign data yet)** | White canvas. Single Action Ink (`#111111`) line explaining no data yet, with one near-black pill CTA to connect a store or start a campaign. No illustration clutter. |
| **Empty (saved audience, none yet)** | Muted Slate (`#555555`) single line: nothing saved yet, plus a path back to audience creation. Calm and honest. |
| **Loading (results / dashboard)** | Skeleton blocks on `#f2f5fa` tinted surface at final card dimensions, 14px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (campaign compute)** | Inline progress within the action area; previous values stay visible. |
| **Error (data sync failed)** | Inline message in Action Ink with a plain-language explanation and a retry. No generic "오류가 발생했습니다" alone — states what to do next. |
| **Error (form validation)** | Field-level message below the input in a calm error tone; describes what's valid, not just "필수". |
| **Success (campaign launched)** | Brief inline confirmation; next-step detail (results link) immediately below. No celebratory emoji. |
| **Skeleton** | `#f2f5fa` blocks at final dimensions, 14px radius, flat pulse. |
| **Disabled** | Faint Blue-Grey (`#aeb2ba`) text on reduced-opacity surface; the near-black pill fades rather than turning grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 200ms | Card/section reveal, carousel head switch |
| `motion-slow` | 320ms | Page-level transitions, hero blob drift |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, pills, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions, carousel |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast aesthetic. The lime hero blobs drift slowly as ambient atmosphere; feature carousel heads cross-fade between active ink and faint `#aeb2ba` at `motion-standard / ease-standard`; pills respond to press with a subtle scale/opacity shift. No bounce or spring — a data product signals steadiness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the blobs freeze; the product stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on https://www.datarize.ai,
https://www.datarize.ai/pricing, and https://www.datarize.ai/blog:
- Hero H1 "모든 행동이 매출로 이어지는 AI 마케팅 플랫폼" — Pretendard Bold 64px / weight 700 / color rgb(25,25,25) #191919
- Section H2 "우리 쇼핑몰에 필요한 마케팅을 대신하는 AI" / "CRM의 모든 과정을 한 곳에서" — Pretendard SemiBold 44px / 600
- Primary CTA "무료로 시작하기" — bg rgb(17,17,17) #111111 / white text / radius 50px / padding 14px 24px / 16px 600
- Outline CTA "도입 문의하기" — transparent / text #111111 / 1px solid #111111 / radius 100px
- Lime decorative blobs rgb(249,255,145) #f9ff91 + rgb(247,255,145) #f7ff91 + rgb(255,239,66) #ffef42 (radius 100%)
- Lime badge "매월 업데이트" — bg #f7ff91 / text #000000 / radius 999px / padding 6px 16px
- Tinted stat card "3,845% 평균 ROAS" — bg rgb(242,245,250) #f2f5fa / radius 14px / padding 32px 56px
- box-shadow: none across hero/nav/CTAs/cards (shadowless system)
- Homepage title meta: "데이터라이즈 | 데이터 기반 이커머스 AI 마케팅 자동화"
- Pricing title meta: "데이터라이즈 요금제 | 무료 체험·최대 10% 할인 혜택"
- Blog title meta: "데이터라이즈 블로그 이커머스 AI 마케팅, CRM, 실전 가이드"

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage (hero H1, social-proof head, page title meta).

Brand narrative (§11): Datarize (데이터라이즈) is a Korean e-commerce AI marketing-automation
SaaS; positioning "데이터 기반 이커머스 AI 마케팅 자동화" and proof points ("900+ 고객사",
"3,845% 평균 ROAS") are taken verbatim from the live homepage. Broader company facts beyond the
site are general public knowledge, not quoted from a verified Datarize statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Datarize user segments
(Korean e-commerce operators, growth marketers, agency teams). Names are illustrative; they do
not refer to real people.

Interpretive claims (e.g., "one action, one color", "accent, don't flood", "flat and fast as a
rejection of legacy analytics chrome") are editorial readings connecting Datarize's observed
design to its positioning, not directly sourced Datarize statements.
-->
