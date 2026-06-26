---
id: elice
name: Elice
display_name_kr: 엘리스
country: KR
category: education
homepage: "https://elice.io"
primary_color: "#7353ea"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=elice.io&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "Two-surface system. Corporate elice.io runs a monochrome marketing chrome (dark #212121 primary CTA on white, Elice DX Neolli display font) with a violet→blue→magenta gradient accent set. The product surface 엘카데미/academy.elice.io uses brand violet #7353ea as the primary action. primary = brand violet #7353ea (product primary action + corporate accent + logo); #524fa1 is the classic deep-indigo brand mark."
  colors:
    primary: "#7353ea"
    primary-deep: "#524fa1"
    primary-light: "#7875c8"
    ink: "#191f28"
    ink-strong: "#212121"
    body: "#222222"
    slate: "#343e4b"
    muted: "#66717e"
    accent-blue: "#2f5efb"
    accent-sky: "#00a6ff"
    accent-magenta: "#b853ea"
    success: "#00ab53"
    success-deep: "#1b5e20"
    success-tint: "#dfebe0"
    danger: "#fa466a"
    canvas: "#ffffff"
    surface: "#f0f1f3"
    hairline: "#e9ebf0"
  typography:
    family: { display: "Elice DX Neolli", body: "Pretendard Variable" }
    display-hero: { size: 40, weight: 500, lineHeight: 1.2, tracking: -2.4, use: "Hero headline + section heads + stats, Elice DX Neolli" }
    body:    { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text, Pretendard" }
    nav:     { size: 14, weight: 600, lineHeight: 1.5, use: "Top-nav items + button labels, Pretendard" }
    nav-alt: { size: 14, weight: 500, lineHeight: 1.5, use: "Product nav items, Pretendard" }
    badge:   { size: 11, weight: 500, use: "Status pill label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, section: 48 }
  rounded: { sm: 4, md: 8, lg: 16, xl: 24, pill: 500 }
  shadow:
    none: "none"
  components:
    button-cta-dark: { type: button, bg: "#212121", fg: "#ffffff", radius: "8px", padding: "8px 16px", height: "40px", font: "14px / 600", use: "Corporate primary CTA — Try Free Trial / Start with Elice" }
    button-cta-violet: { type: button, bg: "#7353ea", fg: "#ffffff", radius: "8px", padding: "8px 16px", height: "40px", font: "14px / 600", use: "Product (엘카데미) primary action — 로그인 / sign-in" }
    button-outline: { type: button, fg: "#212121", radius: "8px", padding: "7px 15px", border: "1px solid rgba(33,33,33,0.5)", font: "14px / 600", use: "Secondary outline button — Contact" }
    button-soft: { type: button, bg: "#e9ebf0", fg: "#222222", radius: "8px", padding: "8px 16px", height: "40px", font: "14px / 600", use: "Tertiary soft button — 회원가입 / sign-up" }
    nav-tab: { type: tab, fg: "#212121", radius: "4px", padding: "8px 12px", font: "14px / 500", active: "rgba(115,83,234,0.08) tint + #7353ea label", use: "Product top-nav item, active = violet tint" }
    card-feature: { type: card, bg: "#ffffff", border: "1px solid #e9ebf0", radius: "24px", use: "Bordered feature card, hairline separation, no shadow" }
    card-tinted: { type: card, bg: "rgba(102,113,126,0.04)", radius: "16px", padding: "32px", use: "Tinted content card on white" }
    input-underline: { type: input, fg: "#191f28", radius: "0px", padding: "16px 12px", border: "1px solid #e9ebf0", font: "14px", use: "Underline auth field (accounts.elice.io) — Email / Password" }
    badge-recruiting: { type: badge, bg: "#dfebe0", fg: "#1b5e20", radius: "4px", font: "11px / 500", use: "Hiring / Recruiting status pill" }
  components_harvested: true
---

# Design System Inspiration of Elice

## 1. Visual Theme & Atmosphere

Elice (엘리스) is Korea's "AI Full Stack" education company, and its design language splits cleanly across two surfaces that share one brand spine. The corporate site (`elice.io`) is calm, editorial, and almost monochrome: a pure white (`#ffffff`) canvas, deep navy-ink text (`#191f28`), and — distinctively — a near-black (`#212121`) as the *primary* call-to-action color rather than a saturated hue. The brand's signature violet (`#7353ea`) is held in reserve on the corporate site, surfacing instead inside the product, 엘카데미 (`academy.elice.io`), where it becomes the unmistakable primary-action color. This restraint is deliberate: the marketing surface reads as a confident, grown-up technology company, while the learning product reads as friendly and energetic.

The typographic identity is carried by **Elice DX Neolli**, the company's proprietary display typeface, which sets every hero headline, section title, and statistic at 40px / weight 500 with a tight `-2.4%` tracking and a 48px line-height. Against it, **Pretendard Variable** does all the functional work — body copy at 16px / 1.5, navigation and button labels at 14px / weight 600. The pairing of a bespoke, slightly editorial display face over the de-facto Korean product font (Pretendard) is the core tension: branded where it speaks, neutral where it informs. On the product side body text drops to `#222222` and nav labels soften to weight 500.

What distinguishes Elice from its peers is its near-total avoidance of elevation. Live inspection found `box-shadow: none` across the nav, hero, cards, and chips on both surfaces; separation is done entirely with flat tinted fills — a `rgba(102,113,126,0.04)` whisper-grey card on white, the product's `#f0f1f3` page surface — and thin `#e9ebf0` hairlines. Geometry is gently rounded and consistent: an 8px radius dominates buttons and inputs, 16px and 24px on cards, 4px on small chips, with the occasional 500px pill. Color energy is concentrated in a violet→blue→magenta accent set — violet `#7353ea`, deep indigo `#524fa1`, light violet `#7875c8`, royal blue `#2f5efb`, sky blue `#00a6ff`, and magenta `#b853ea` — used for gradients, illustration, and emphasis rather than chrome. Status colors round it out: a confident green (`#00ab53`) with its deep-green badge text (`#1b5e20`) on a mint tint (`#dfebe0`), and a coral-pink (`#fa466a`) for alerts. Secondary text steps down through `#343e4b` and `#66717e`.

**Key Characteristics:**
- Elice DX Neolli (proprietary display face) for every headline/stat at 40px / weight 500, tight `-2.4%` tracking
- Pretendard Variable for body (16px / 1.5) and UI (14px / weight 600) — the Korean product-font workhorse
- Two-surface color split: monochrome dark `#212121` CTA on corporate `elice.io`, brand violet `#7353ea` primary on product `academy.elice.io`
- Deep navy-ink text (`#191f28`) instead of pure black on the corporate site; `#222222` on the product
- Flat depth: `box-shadow: none` everywhere; separation via `rgba(102,113,126,0.04)` tints and `#e9ebf0` hairlines
- Violet→blue→magenta accent family (`#7353ea`, `#524fa1`, `#7875c8`, `#2f5efb`, `#00a6ff`, `#b853ea`) for gradients and emphasis
- Consistent rounding: 8px buttons/inputs, 16–24px cards, 4px chips, 500px pills
- Status palette: green `#00ab53` / `#1b5e20` on `#dfebe0`, coral `#fa466a` for alerts

## 2. Color Palette & Roles

### Primary (Brand Violet)
- **Elice Violet** (`#7353ea`): The brand's signature color and the primary-action color on the product surface (엘카데미 로그인 button, links, active-nav tint). On the corporate site it appears as a gradient/accent rather than chrome — the brand's identity hue.
- **Deep Indigo** (`#524fa1`): The classic Elice deep-indigo brand mark; the dominant accent text color on the product surface. A grounded, trustworthy violet-navy.
- **Light Violet** (`#7875c8`): A lighter violet used in illustration, decorative fills, and secondary emphasis.

### Ink & Text
- **Ink Navy** (`#191f28`): Corporate primary heading and body text — a deep blue-black, never pure black, for a warm premium read.
- **Ink Strong** (`#212121`): The corporate primary-CTA background and nav text color — a near-black used as the marketing "action" color.
- **Body Grey** (`#222222`): Product-surface (엘카데미) body text color.
- **Slate** (`#343e4b`): Secondary heading and body color on the corporate site.
- **Muted** (`#66717e`): Tertiary text, captions, and the base of the `rgba(102,113,126,0.04)` card tint.

### Accent (Gradient Family)
- **Royal Blue** (`#2f5efb`): Gradient and emphasis accent.
- **Sky Blue** (`#00a6ff`): Bright blue accent for illustration and highlights.
- **Magenta** (`#b853ea`): The warm end of the violet→magenta gradient set.

### Status
- **Success Green** (`#00ab53`): Success state and positive status text on the product.
- **Success Deep** (`#1b5e20`): Recruiting/hiring badge text color.
- **Success Tint** (`#dfebe0`): Mint background for the recruiting/hiring badge.
- **Coral** (`#fa466a`): Alert / error / attention accent on the product.

### Surface & Borders
- **Pure White** (`#ffffff`): Page background, cards, and text on violet/dark.
- **Surface Grey** (`#f0f1f3`): Product page background tint.
- **Hairline** (`#e9ebf0`): Card borders, dividers, and soft-button fills — the primary separation device in the shadowless system.

## 3. Typography Rules

### Font Family
- **Display**: `Elice DX Neolli` — the company's proprietary display typeface. Used for every hero headline, section title, and statistic at weight 500.
- **Body / UI**: `Pretendard Variable` (with `Pretendard` fallback) — the document default for all body copy, navigation, and button labels.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Notes |
|------|------|------|--------|-------------|----------|-------|
| Display / Hero | Elice DX Neolli | 40px (2.50rem) | 500 | 1.20 (48px) | -2.4% | Hero headlines, section titles, stats |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |
| Nav / Button | Pretendard Variable | 14px (0.88rem) | 600 | 1.50 (21px) | normal | Top-nav items, button labels |
| Nav (Product) | Pretendard | 14px (0.88rem) | 500 | 1.50 | normal | Product (엘카데미) nav items |
| Badge | Pretendard | 11px (0.69rem) | 500 | normal | normal | Status pill labels |

### Principles
- **Bespoke display, neutral body**: Elice DX Neolli carries brand voice in every headline; Pretendard Variable carries every paragraph and UI label. The display/body font split is the system's primary hierarchy signal.
- **One display size, repeated**: The corporate site sets headlines, section heads, and statistics all at the same 40px / weight 500 — a flat, even typographic rhythm rather than a steep scale.
- **Tight display tracking**: Headlines run at `-2.4%` letter-spacing; body and UI stay at normal tracking.
- **Hangul-first body**: Pretendard at 16px / 1.5 is tuned for dense hangul legibility; UI labels sit at 14px.

## 4. Component Stylings

### Buttons

**Corporate Primary CTA (Dark)**
- Background: `#212121`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Height: 40px
- Font: 14px Pretendard weight 600
- Use: Corporate primary CTA ("Try Free Trial", "Start with Elice")

**Product Primary CTA (Violet)**
- Background: `#7353ea`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Height: 40px
- Font: 14px Pretendard weight 600
- Use: Product (엘카데미) primary action ("로그인" / sign-in)

**Outline (Secondary)**
- Text: `#212121`
- Radius: 8px
- Padding: 7px 15px
- Border: 1px solid `rgba(33,33,33,0.5)`
- Font: 14px Pretendard weight 600
- Use: Secondary action ("Contact"); on dark sections the border switches to `#ffffff`

**Soft (Tertiary)**
- Background: `#e9ebf0`
- Text: `#222222`
- Radius: 8px
- Padding: 8px 16px
- Height: 40px
- Font: 14px Pretendard weight 600
- Use: Tertiary action ("회원가입" / sign-up)

### Inputs

**Underline Field**
- Text: `#191f28`
- Border: 1px solid `#e9ebf0` (bottom underline)
- Radius: 0px
- Padding: 16px 12px
- Font: 14px Pretendard
- Height: 52px
- Use: Auth fields on accounts.elice.io ("Email", "Password")

### Cards & Containers

**Bordered Feature Card**
- Background: `#ffffff`
- Border: 1px solid `#e9ebf0`
- Radius: 24px
- Use: Feature/content card with hairline separation, no shadow

**Tinted Card**
- Background: `rgba(102,113,126,0.04)`
- Radius: 16px
- Padding: 32px
- Use: Whisper-grey content card on white

### Badges

**Recruiting / Hiring Pill**
- Background: `#dfebe0`
- Text: `#1b5e20`
- Radius: 4px
- Font: 11px Pretendard weight 500
- Use: Status pill ("Recruiting", "Hiring")

### Navigation
- Background: `#ffffff`
- Text: `#212121`, 14px Pretendard weight 600 (corporate) / weight 500 (product)
- Item radius: 8px (corporate) / 4px (product)
- Padding: 8px 16px (corporate) / 8px 12px (product)
- Active: violet tint `rgba(115,83,234,0.08)` with `#7353ea` label (product)
- Use: Top horizontal nav ("Elice AX", "Elice Cloud", "Resources" / "탐색", "내 클래스", "대시보드")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces)
**Tier 1 sources:** https://elice.io/en, https://academy.elice.io, https://accounts.elice.io, https://github.com/elicer
**Tier 2 sources:** getdesign.md/elice (SPA shell, no token data returned); styles.refero.design/?q=elice (search query echoed, no Elice style listed)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px
- Notable: Cards carry a generous 32px internal padding; button padding is a compact 8px 16px

### Grid & Container
- Centered single-column hero anchored by the 40px Elice DX Neolli headline
- Statistic rows ("13,000 +", "2,810,000 +") set in the same display face at 40px
- Feature sections alternate white (`#ffffff`) and tinted (`rgba(102,113,126,0.04)`) bands; the product surface sits on `#f0f1f3`
- Cards use 16px (tinted) and 24px (bordered) radii to group related content

### Whitespace Philosophy
- **Breathing room over density**: generous vertical rhythm between sections; the corporate site is airy and editorial.
- **Flat segmentation**: sections separate by background tint and `#e9ebf0` hairlines, never by shadow.
- **Even rhythm**: the single repeated 40px display size and consistent 8px button radius create a calm, predictable cadence.

### Border Radius Scale
- Small (4px): chips, small status pills, product nav items
- Medium (8px): buttons, corporate nav items, inputs (product) — the workhorse
- Large (16px): tinted cards
- XL (24px): bordered feature cards
- Pill (500px): occasional full-round elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `rgba(102,113,126,0.04)` / `#f0f1f3` fill | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e9ebf0` border | Bordered feature cards, dividers |

**Shadow Philosophy**: Elice is a shadowless system. Live inspection found `box-shadow: none` across the nav, hero, cards, and chips on both `elice.io` and `academy.elice.io`. Depth and grouping are communicated entirely through flat tinted fills (`rgba(102,113,126,0.04)`, the `#f0f1f3` product surface) and thin `#e9ebf0` hairlines. This keeps the education UI feeling clean, modern, and fast. When emphasis is needed the system reaches for color — brand violet `#7353ea` or the gradient accent family — never elevation.

## 7. Do's and Don'ts

### Do
- Use Elice DX Neolli for every headline, section title, and statistic at 40px / weight 500
- Use Pretendard Variable for body (16px / 1.5) and UI labels (14px / weight 600)
- Reserve dark `#212121` for the corporate primary CTA and brand violet `#7353ea` for the product primary action
- Use deep navy-ink (`#191f28`) for corporate text, `#222222` for product body — never pure black
- Separate sections with flat tints (`rgba(102,113,126,0.04)`, `#f0f1f3`) and `#e9ebf0` hairlines, not shadows
- Keep an 8px radius on buttons and corporate nav; 16–24px on cards; 4px on chips
- Hold the violet→blue→magenta accent family (`#7353ea`, `#2f5efb`, `#00a6ff`, `#b853ea`) for gradients and emphasis
- Use the green `#00ab53` / `#1b5e20` on `#dfebe0` status palette for positive/recruiting states

### Don't
- Use drop shadows for elevation — Elice is a flat, shadow-free system
- Spread brand violet `#7353ea` across the corporate marketing chrome — it stays an accent there
- Use pure black (`#000000`) for body text — use `#191f28` or `#222222`
- Set headlines in a heavy weight — display is a calm weight 500, not bold
- Use Pretendard for big headlines — Elice DX Neolli owns display
- Mix in unrelated accent hues — stay within the violet→blue→magenta family
- Use positive letter-spacing on display — headlines track tight at `-2.4%`
- Stack many radii on one surface — 8px is the default workhorse

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, stat rows stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Buttons at 40px height with 8px 16px padding — comfortably tappable
- Nav items at 40px height within the header
- Auth inputs at 52px height for an easy tap target

### Collapsing Strategy
- Hero: 40px Elice DX Neolli headline scales down on mobile, weight 500 maintained
- Feature bands: multi-column → stacked single column
- Tinted/white alternating sections maintain full-width treatment
- Stat rows: horizontal row → stacked

### Image Behavior
- Illustrations and product screenshots carry no shadow at any size, consistent with the flat system
- Cards maintain their 16px / 24px radii across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Corporate CTA: Ink Strong (`#212121`)
- Product CTA / brand: Elice Violet (`#7353ea`)
- Deep brand accent: Deep Indigo (`#524fa1`)
- Background: Pure White (`#ffffff`), Product surface (`#f0f1f3`)
- Corporate text: Ink Navy (`#191f28`); Product text: Body Grey (`#222222`)
- Secondary text: Slate (`#343e4b`), Muted (`#66717e`)
- Hairline: `#e9ebf0`
- Success: `#00ab53` / `#1b5e20` on `#dfebe0`; Alert: Coral (`#fa466a`)
- Gradient accents: `#2f5efb`, `#00a6ff`, `#b853ea`, `#7875c8`

### Example Component Prompts
- "Create a hero on white. Headline in Elice DX Neolli at 40px weight 500, line-height 48px, letter-spacing -2.4%, color #191f28. Two CTAs: dark #212121 bg with white text, 8px radius, 8px 16px padding ('Try Free Trial'); and an outline button (transparent, 1px solid rgba(33,33,33,0.5), #212121 text, 8px radius)."
- "Design a feature card: white #ffffff background, 1px solid #e9ebf0 border, 24px radius, no shadow, 32px padding. Title in Elice DX Neolli 40px weight 500 #191f28; body 16px Pretendard #343e4b."
- "Build a product (엘카데미) nav: white header, 14px Pretendard weight 500 items, #212121 text, 4px radius items; active item uses rgba(115,83,234,0.08) tint with #7353ea label. Violet #7353ea primary '로그인' button, white text, 8px radius."
- "Create a recruiting badge: #dfebe0 background, #1b5e20 text, 4px radius, 11px Pretendard weight 500."

### Iteration Guide
1. Elice DX Neolli for every headline/stat (40px / 500); Pretendard for everything else
2. Dark `#212121` is the corporate action color; violet `#7353ea` is the product action color
3. No shadows — separate with `rgba(102,113,126,0.04)` tints, `#f0f1f3` surface, and `#e9ebf0` hairlines
4. 8px radius is the workhorse; 16–24px on cards; 4px on chips
5. Text is `#191f28` (corporate) / `#222222` (product), never pure black
6. Tight `-2.4%` tracking on display, normal on body
7. Keep saturated color in the violet→blue→magenta accent family

---

## 10. Voice & Tone

Elice's voice is **confident, capability-forward, and plainly technical** — a company that positions itself as "AI Full Stack" and speaks about learning, building, and operating AI as one continuous capability rather than a slogan. The corporate headline "Learn, build, and execute — AI happens at Elice" sets the register: declarative, builder-oriented, and grounded in real numbers ("13,000 +", "2,810,000 +"). On the product (엘카데미) the tone warms up and becomes practical and student-facing: "오늘 배워서 내일 바로 적용하는 실습중심 AI 교육" ("hands-on AI education you learn today and apply tomorrow").

| Context | Tone |
|---|---|
| Corporate hero | Declarative, capability-framed. "Learn, build, and execute." Confident, not hype. |
| Statistics | Concrete and unembellished. "13,000 +", "2,810,000 +". Numbers as proof. |
| Section heads | Outcome-oriented. "AI-powered, reliable education operation", "Stable AI development and operation infrastructure". |
| Product (엘카데미) | Practical, encouraging, student-facing. "오늘 배워서 내일 바로 적용하는 실습중심 AI 교육". |
| CTAs | Direct, low-pressure. "Try Free Trial", "Contact", "로그인", "회원가입". |

**Voice samples (verbatim from live surfaces):**
- "Learn, build, and execute — AI happens at Elice" — corporate hero headline. *(verified live 2026-06-26)*
- "AI-powered, reliable education operation" — section heading. *(verified live 2026-06-26)*
- "엘카데미 | 오늘 배워서 내일 바로 적용하는 실습중심 AI 교육" — product page title. *(verified live 2026-06-26)*

**Forbidden register**: vague AI hype without proof, fear-based upsell, exclamation-heavy marketing, undefined jargon left unexplained.

## 11. Brand Narrative

Elice (엘리스), operated by **엘리스그룹 (Elice Group)**, was founded in **2015** as a spin-off rooted in KAIST, with a mission to make practical, hands-on software and AI education scalable. The name and the original product center on a cloud-based, browser-run coding/AI learning environment — learners write and execute real code without local setup, and instructors operate classes at scale. Over time the company expanded from coding education into a broader "AI Full Stack" positioning that spans learning (엘카데미 / Elcademy LXP), enterprise upskilling (Elice AX), and the GPU/cloud infrastructure that runs it (Elice Cloud).

The product's founding premise — visible in its design — is that AI capability is a continuum: you **learn**, you **build**, and you **execute/operate**, all on one platform. The corporate homepage states this literally ("Learn, build, and execute — AI happens at Elice") and backs it with operational claims around reliable education operation and stable AI infrastructure, plus a security posture aimed at domestic enterprise and public-sector customers.

What Elice refuses, visible in its design: the heavy, decorated chrome of legacy e-learning (no shadow-stacked cards, no clip-art gradients as UI) and undefined AI hype. What it embraces: a calm monochrome corporate surface anchored by a proprietary display typeface (Elice DX Neolli), a flat shadowless system separated by tints and hairlines, a disciplined violet→blue→magenta accent family, and a warmer, more energetic violet-led product surface where the brand color finally takes the lead.

## 12. Principles

1. **One continuum: learn, build, execute.** Elice frames education, building, and operation as a single capability. *UI implication:* keep navigation and surfaces consistent across learning, product, and infrastructure so the journey reads as one platform.
2. **Proof over hype.** The brand leads with concrete numbers and operational claims, not adjectives. *UI implication:* surface real statistics in the display face; avoid decorative superlatives.
3. **Calm corporate, energetic product.** *UI implication:* hold brand violet `#7353ea` as an accent on the marketing site and let it lead as the primary action inside the product.
4. **Flat and fast.** Modern shadowless clarity over decorative depth. *UI implication:* separate with `rgba(102,113,126,0.04)` tints and `#e9ebf0` hairlines; never reach for drop shadows.
5. **Bespoke where it speaks, neutral where it informs.** *UI implication:* Elice DX Neolli for headlines and stats; Pretendard for everything functional.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Elice user segments (students upskilling in AI/coding, enterprise L&D buyers, public-sector training operators, developers using the cloud), not individual people.*

**김도윤, 26, 서울.** A non-CS graduate reskilling into AI development through 엘카데미. Values that he can write and run real code in the browser without setup, and that lessons are "learn today, apply tomorrow." Chose Elice because the hands-on, practical framing felt more credible than lecture-only platforms.

**이서연, 38, 판교.** An L&D manager at a mid-size enterprise rolling out an AI-upskilling program for 300 employees. Cares about reliable operation at scale, progress dashboards, and a security posture acceptable to her compliance team. Trusts the calm, proof-forward corporate tone over hype-driven vendors.

**박준호, 31, 대전.** A platform engineer evaluating Elice Cloud for GPU-backed training workloads. Reads the infrastructure claims literally and expects stability; appreciates that the brand treats learning, building, and operating as one stack rather than separate products.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no courses / no results)** | White canvas. Single Ink (`#191f28` / `#222222`) line explaining there's nothing yet, with one violet `#7353ea` CTA to explore. No illustration clutter. |
| **Empty (dashboard, no activity)** | Muted (`#66717e`) single line plus a path to start a course. Honest, calm. |
| **Loading (course list fetch)** | Skeleton cards on `rgba(102,113,126,0.04)` tint at final dimensions, 16px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (code/AI run)** | Inline progress within the run panel; previous output stays visible until the new result arrives. |
| **Error (run/network failed)** | Inline message in coral (`#fa466a`) tone with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the underline input; describes what's valid, not just "필수". |
| **Success (submission / enrollment)** | Brief confirmation in the green (`#00ab53`) status tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `rgba(102,113,126,0.04)` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Muted (`#66717e`) text on a reduced-opacity surface; violet actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, tab switch |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, menus |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast aesthetic. Buttons respond to press with a subtle opacity/scale shift; content fades in from below at `motion-standard / ease-enter`. No bounce or spring — an education-and-infrastructure product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle:
- https://elice.io/en (corporate homepage) — body Pretendard Variable rgb(25,31,40) #191f28 16px/24px;
  hero/section/stat H3 in "Elice DX Neolli" 40px / weight 500 / line-height 48px / letter-spacing -2.4%;
  primary CTA "Try Free Trial" bg rgb(33,33,33) #212121 / white / radius 8px / 8px 16px / 14px 600 / 40px;
  outline "Contact" border 1px solid rgba(33,33,33,0.5); feature card white + 1px #e9ebf0 + 24px radius;
  tinted card rgba(102,113,126,0.04) 16px radius 32px padding; recruiting badge bg rgb(223,235,224) #dfebe0
  text rgb(27,94,32) #1b5e20 4px/11px; box-shadow none across surfaces.
- https://academy.elice.io (엘카데미 LXP) — body Pretendard rgb(34,34,34) #222222 on rgb(240,241,243) #f0f1f3;
  primary "로그인" bg rgb(115,83,234) #7353ea / white / 8px radius / 40px; soft "회원가입" bg rgb(233,235,240)
  #e9ebf0 / #222222; active nav "탐색" bg rgba(115,83,234,0.08) 4px radius; link rgb(115,83,234) #7353ea;
  deep-indigo text rgb(82,79,161) #524fa1 (dominant accent); success rgb(0,171,83) #00ab53; coral rgb(250,70,106)
  #fa466a; light violet rgb(120,117,200) #7875c8.
- https://accounts.elice.io — underline auth inputs Email/Password, color rgb(25,31,40) #191f28, padding 16px 12px,
  14px, height 52px.
- https://github.com/elicer — official GitHub org (brand-owned), avatar fetched 1558B.

Voice samples (§10) are verbatim from the live surfaces (corporate hero, section heading, product page title).

Brand narrative (§11): Elice / 엘리스그룹 (Elice Group), founded ~2015 with KAIST roots; AI Full Stack positioning
spanning 엘카데미 (LXP), Elice AX (enterprise), and Elice Cloud (GPU/cloud infrastructure). These are widely
documented public facts and claims observed on the live corporate site ("AI Full Stack Company" page title,
"Learn, build, and execute" hero); specific founding details beyond the site are general public knowledge, not
directly quoted from a verified Elice statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Elice user segments. Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "one continuum: learn, build, execute", "calm corporate / energetic product as a
two-surface color split") are editorial readings connecting Elice's observed design to its positioning, not
directly sourced Elice statements.
-->
