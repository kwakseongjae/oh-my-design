---
id: quotabook
name: Quotabook
display_name_kr: 쿼타북
country: KR
category: fintech
homepage: "https://quotabook.com/"
primary_color: "#00e8c5"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=quotabook.com&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live interactive mint on CTA (#00e8c5 rgb 0,232,197); brighter #21fce3 used for decorative section fills. Canvas is pure black (#000000); display type is oversized Pretendard Black/ExtraBold; shadowless system."
  colors:
    primary: "#00e8c5"
    primary-bright: "#21fce3"
    primary-muted: "#7be3d3"
    canvas: "#000000"
    surface: "#050505"
    surface-raised: "#121212"
    surface-chip: "#1c1c1c"
    ink-dark: "#171b21"
    foreground: "#ffffff"
    heading-soft: "#e6e6e6"
    muted: "#bfbfbf"
    muted-alt: "#8e8e94"
    faint: "#979797"
    slate: "#7e8387"
  typography:
    family: { display: "Pretendard", mono: "Fragment Mono", latin: "Geist" }
    display-mega:    { size: 180, weight: 800, use: "Oversized single-word hero, Pretendard ExtraBold" }
    display-hero:    { size: 130, weight: 900, use: "Page hero headline, Pretendard Black" }
    display-section: { size: 100, weight: 900, use: "Full-bleed section labels, Pretendard Black" }
    display-md:      { size: 90, weight: 900, use: "Feature section heads, Pretendard Black" }
    subhead:         { size: 26, weight: 900, use: "Card / feature subheads, Pretendard Black" }
    button:          { size: 12, weight: 400, use: "Pill button and nav labels" }
    body:            { size: 12, weight: 400, use: "Base UI / body text" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 48, section: 140 }
  rounded: { xs: 3, sm: 8, chip: 30, pill: 50, full: 1000 }
  shadow:
    none: "none"
  components:
    button-pay:     { type: button, bg: "#00e8c5", fg: "#171b21", radius: "50px", padding: "15px 16px", height: "46px", font: "12px / 400 Pretendard", use: "Primary mint CTA — 바로 결제" }
    button-login:   { type: button, bg: "#ffffff", fg: "#171b21", radius: "50px", padding: "14px 16px", height: "42px", font: "12px / 400 Pretendard", use: "Login pill, white on black" }
    button-outline: { type: button, fg: "#ffffff", radius: "50px", padding: "15px 16px", height: "46px", font: "12px / 400 Pretendard", use: "Secondary transparent pill — 견적 문의" }
    chip-category:  { type: badge, bg: "#ffffff", fg: "#171b21", radius: "30px", padding: "12px 15px", height: "39px", font: "12px / 400 Pretendard", use: "White category chip — 디지털 플랫폼" }
    social-button:  { type: button, bg: "#121212", fg: "#ffffff", radius: "3px", padding: "10px 12px", height: "34px", font: "12px / 400 Pretendard", use: "Footer social buttons — 링크드인 / 네이버 블로그" }
    nav-link:       { type: tab, fg: "#ffffff", font: "12px / 400 Pretendard", active: "text #00e8c5", use: "Top nav item, mint on active" }
    card-dark:      { type: card, bg: "#121212", radius: "8px", use: "Dark surface card on black canvas, shadowless" }
    badge-mint:     { type: badge, bg: "#21fce3", fg: "#171b21", radius: "1000px", font: "12px / 400 Pretendard", use: "Bright mint highlight tag" }
  components_harvested: true
---

# Design System Inspiration of Quotabook

## 1. Visual Theme & Atmosphere

Quotabook (쿼타북) is Korea's equity-and-securities-management platform — a Carta-style cap table, stock-option, and fund-administration suite that markets itself as "국내유일 기업 증권금융" (Korea's only corporate securities finance). Its homepage rejects the pastel, rounded friendliness of most Korean consumer fintech and instead commits to a confident, almost editorial dark aesthetic: a pure black canvas (`#000000`) carrying oversized Pretendard headlines and a single electric mint accent (`#00e8c5`). The effect is closer to a design-studio portfolio or a financial-infrastructure brand than a retail banking app — it signals seriousness, capital-markets weight, and technical competence to a B2B audience of founders, CFOs, and investors.

The typographic personality is built on scale and weight. Headlines run in **Pretendard Black (weight 900)** and **Pretendard ExtraBold (weight 800)** at genuinely enormous display sizes — a single word "금융" set at 180px, section labels at 100px, the pricing hero at 130px — layered directly on black in white (`#ffffff`) and a soft display grey (`#e6e6e6`). This oversized-type-on-black treatment is the system's loudest gesture: the words themselves are the visual, doing the work that photography or illustration would do elsewhere. Body and UI text drop dramatically to a quiet 12px, so the page reads as a hierarchy of huge statements punctuated by small, functional labels.

What distinguishes Quotabook from its fintech peers is the tension between that monumental type and its restrained interactive chrome. Depth is entirely flat — live inspection found `box-shadow: none` across the nav, hero, cards, and chips. Separation comes from near-black surface steps (`#050505`, `#121212`, `#1c1c1c`) rather than elevation. Interaction leans hard into the pill: the mint pay CTA and login button at 50px radius, white category chips at 30px, and small 3px-radius social buttons in the footer. The lone saturated hue — mint, at `#00e8c5` on the CTA and a brighter `#21fce3` on decorative section fills — is the system's single "action / energy" color against an otherwise monochrome black-and-grey field.

**Key Characteristics:**
- Pure black canvas (`#000000`) as the default surface — not dark-grey, true black
- Oversized Pretendard Black / ExtraBold headlines (90px–180px) as the primary visual
- Single electric mint accent (`#00e8c5`) reserved for the primary CTA; brighter `#21fce3` for decorative fills
- Flat, shadowless depth — near-black surface steps (`#050505` → `#121212` → `#1c1c1c`) do the separating
- Pill geometry — 50px CTA/login buttons, 30px category chips, 1000px full-round tags
- Tiny 12px functional UI/body text against monumental display type
- Cool grey text ladder (`#e6e6e6` → `#bfbfbf` → `#979797` → `#8e8e94`) for hierarchy on black
- Dark ink (`#171b21`) for labels on light/mint surfaces; `Fragment Mono` for occasional mono detail

## 2. Color Palette & Roles

### Primary / Accent
- **Quotabook Mint** (`#00e8c5`): The primary brand accent and CTA background (rgb 0,232,197). The single saturated hue — the "action" color on the pay button across home and pricing.
- **Bright Mint** (`#21fce3`): A brighter, more electric mint used for decorative full-bleed section fills and highlight tags. The high-energy companion to the primary.
- **Muted Mint** (`#7be3d3`): A softened mint that appears in secondary text/graphic accents on dark surfaces.

### Canvas & Surfaces (dark ladder)
- **Canvas Black** (`#000000`): The page background — true black, the default surface for the entire system.
- **Surface** (`#050505`): The deepest near-black section fill, a barely-perceptible step off pure black.
- **Surface Raised** (`#121212`): Near-black raised surface for dark cards and the footer social buttons.
- **Surface Chip** (`#1c1c1c`): A slightly lighter raised step for chips and inset panels.

### Text & Ink
- **White** (`#ffffff`): Primary heading and hero text on black; also the login-button and category-chip background.
- **Heading Soft** (`#e6e6e6`): Soft display grey for large section labels — a step down from pure white to keep the monumental type from over-glaring.
- **Muted** (`#bfbfbf`): Muted grey for secondary text and inactive labels on dark.
- **Faint** (`#979797`): Faint grey for tertiary/disabled labels — the most-used muted text color in the frequency scan.
- **Muted Alt** (`#8e8e94`): An alternate cool grey for fine print and metadata.
- **Ink Dark** (`#171b21`): Near-black ink used for text/labels sitting on light or mint surfaces (mint CTA, white pills), and for body text on the light pricing plan surface.
- **Slate** (`#7e8387`): A mid grey used as the pricing plan comparison surface fill.

## 3. Typography Rules

### Font Family
- **Display / Body**: `Pretendard` — the de-facto Korean product font, carrying every headline and label. Used at Black (900) and ExtraBold (800) for display, and Regular (400) for UI/body. Bold and SemiBold appear for intermediate emphasis.
- **Latin / numeric**: `Geist` — appears for select Latin and numeric runs.
- **Monospace**: `Fragment Mono` — occasional mono detailing (labels, technical accents).

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Display Mega | Pretendard ExtraBold | 180px | 800 | Oversized single-word hero ("금융") |
| Display Hero | Pretendard Black | 130px | 900 | Pricing / page hero headline |
| Display Section | Pretendard Black | 100px | 900 | Full-bleed section labels |
| Display Medium | Pretendard Black | 90px | 900 | Feature section heads |
| Subhead | Pretendard Black | 26px | 900 | Card / feature subheads |
| Button / Nav | Pretendard | 12px | 400 | Pill button and nav labels |
| Body | Pretendard | 12px | 400 | Base UI / body text |

### Principles
- **Monumental display, tiny UI**: Headlines at 90–180px in weight 900/800 carry all visual weight; functional text sits at a quiet 12px. The size contrast IS the hierarchy.
- **Black is a weight, not just a color**: Pretendard Black (900) is the signature display weight — the type reads as heavy, architectural, capital-markets-serious.
- **Soft-grey the giants**: The largest labels use `#e6e6e6` rather than pure white so monumental type doesn't glare; only the sharpest hero words go full `#ffffff`.
- **One font family, many weights**: Pretendard does display and UI both; Geist and Fragment Mono are supporting roles, never the headline voice.

## 4. Component Stylings

### Buttons

**Pay CTA (Primary)**
- Background: `#00e8c5`
- Text: `#171b21`
- Radius: 50px
- Padding: 15px 16px
- Height: 46px
- Font: 12px Pretendard weight 400
- Use: Primary mint call-to-action ("바로 결제") — the system's single primary action

**Login (White Pill)**
- Background: `#ffffff`
- Text: `#171b21`
- Radius: 50px
- Padding: 14px 16px
- Height: 42px
- Font: 12px Pretendard weight 400
- Use: Header login button — white pill on the black nav

**Quote / Secondary (Transparent Pill)**
- Background: transparent
- Text: `#ffffff`
- Radius: 50px
- Padding: 15px 16px
- Height: 46px
- Font: 12px Pretendard weight 400
- Use: Secondary action ("견적 문의") — transparent pill beside the mint CTA

**Social Button**
- Background: `#121212`
- Text: `#ffffff`
- Radius: 3px
- Padding: 10px 12px
- Height: 34px
- Font: 12px Pretendard weight 400
- Use: Footer social links ("링크드인", "네이버 블로그", "브런치 스토리")

### Inputs & Forms
- Background: `#121212`
- Text: `#ffffff`
- Radius: 8px
- Use: Dark form fields on the black canvas; placeholder in muted grey (`#8e8e94`), no shadow

### Cards & Containers

**Dark Surface Card**
- Background: `#121212`
- Radius: 8px
- Use: Dark content card on the black canvas — shadowless, separated by surface step

**Pricing Plan Surface**
- Background: `#7e8387`
- Text: `#171b21`
- Radius: 8px
- Use: Pricing plan comparison panel (lighter slate block against black)

### Badges

**Category Chip**
- Background: `#ffffff`
- Text: `#171b21`
- Radius: 30px
- Padding: 12px 15px
- Height: 39px
- Font: 12px Pretendard weight 400
- Use: White navigation/category chip ("디지털 플랫폼")

**Mint Highlight Tag**
- Background: `#21fce3`
- Text: `#171b21`
- Radius: 1000px (full)
- Font: 12px Pretendard weight 400
- Use: Bright mint emphasis tag / highlight pill

### Navigation
- Background: `#000000`
- Text: `#ffffff`
- Font: 12px Pretendard weight 400
- Active: mint `#00e8c5` text on active item
- Use: Top nav ("금융 컨설팅", "요금제", "회사 소개") on the black header

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://quotabook.com/ , https://quotabook.com/pricing , https://blog.naver.com/quotabook
**Tier 2 sources:** getdesign.md/quotabook (not listed — "0 DESIGN.md files") ; styles.refero.design/?q=quotabook (not listed — search falls back to generic catalog, no Quotabook style page)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 24px, 48px, and a dramatic 140px section rhythm
- Notable: Section vertical padding lands at 140px (measured), giving the oversized headlines room to breathe as full-bleed statements

### Grid & Container
- Full-bleed dark sections stacked vertically, each anchored by a monumental Pretendard headline
- Horizontal pill-chip rows for category/product navigation beneath hero statements
- Pricing surfaces group plan tiers as lighter slate (`#7e8387`) panels against the black field
- Cards use an 8px radius and sit directly on black, separated by surface tone rather than borders

### Whitespace Philosophy
- **Scale over density**: enormous headlines with generous 140px section padding — the marketing surface is spacious and cinematic, not information-dense.
- **Flat segmentation**: sections separate by near-black surface steps (`#050505` / `#121212` / `#1c1c1c`) and by the mint accent, never by shadow.
- **Pill rhythm**: repeated 50px and 30px pills create a consistent rounded cadence across CTAs and category chips.

### Border Radius Scale
- Micro (3px): footer social buttons, small tags
- Small (8px): cards, dark inputs, content containers
- Chip (30px): white category/navigation chips
- Pill (50px): primary CTA, login, secondary buttons
- Full (1000px): highlight tags, fully-round elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, hero, most surfaces |
| Surface step 1 | `#050505` fill on `#000000` | Barely-there section separation |
| Surface step 2 | `#121212` fill | Dark cards, footer social buttons, inputs |
| Surface step 3 | `#1c1c1c` fill | Raised chips, inset panels |

**Shadow Philosophy**: Quotabook is a strictly shadowless system. Live inspection returned `box-shadow: none` across the nav, hero, cards, and chips on both the homepage and pricing surface. Depth is communicated entirely through a ladder of near-black surface tones (`#000000` → `#050505` → `#121212` → `#1c1c1c`) and through the mint accent, never through elevation. This keeps the dark UI feeling flat, modern, and architectural — the monumental type and the single mint hue carry all the emphasis that a shadow system would otherwise provide.

## 7. Do's and Don'ts

### Do
- Use a true black (`#000000`) canvas — the whole system is built on it
- Set headlines in Pretendard Black (900) or ExtraBold (800) at monumental sizes (90px+)
- Reserve mint (`#00e8c5`) for the primary CTA — keep it the single "action" color
- Use the brighter mint (`#21fce3`) only for decorative section fills and highlight tags
- Separate surfaces with near-black steps (`#050505`, `#121212`, `#1c1c1c`), never shadows
- Use pill geometry — 50px buttons, 30px category chips, full-round tags
- Soften the largest labels to `#e6e6e6` so monumental type doesn't glare
- Use dark ink (`#171b21`) for labels on mint or white surfaces

### Don't
- Use drop shadows for elevation — Quotabook is a flat, shadowless system
- Spread mint across many elements — it dilutes the single-action signal
- Use a dark-grey "almost black" as the canvas — the base is true `#000000`
- Set headlines in a light weight — display is always Black/ExtraBold
- Use sharp square corners on interactive elements — CTAs and chips are pills
- Introduce a second saturated accent hue — mint is the only color
- Blow up 12px UI text to compensate for the giant headlines — the size contrast is intentional
- Put light-on-light or white text on the mint CTA — labels on mint are dark ink

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, monumental headlines scale down sharply, chips wrap |
| Tablet | 640-1024px | Moderate padding, 2-up feature blocks |
| Desktop | 1024-1440px | Full layout, oversized hero statements, multi-column product grids |

### Touch Targets
- Primary mint CTA at 46px height, full 50px pill — an unmistakable target
- Login pill at 42px height; category chips at 39px height with 12px 15px padding
- Nav labels spaced for touch on the black header

### Collapsing Strategy
- Hero: 180px/130px display type scales down aggressively on mobile, weight 900/800 maintained
- Category chip rows: horizontal wrap/scroll on narrow viewports
- Full-bleed dark sections maintain their treatment; 140px section padding compresses
- Pricing plan panels stack single-column

### Image Behavior
- Product/app imagery carries no shadow at any size, consistent with the flat system
- Cards maintain 8px radius across breakpoints
- Mint accents and decorative fills persist across sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Quotabook Mint (`#00e8c5`)
- Decorative fill / highlight: Bright Mint (`#21fce3`)
- Canvas: Black (`#000000`)
- Surfaces: `#050505` → `#121212` → `#1c1c1c` (near-black ladder)
- Heading text: White (`#ffffff`), softened to `#e6e6e6` at largest sizes
- Muted text: `#bfbfbf` / `#979797` / `#8e8e94`
- Ink on light/mint: `#171b21`
- Pricing slate panel: `#7e8387`

### Example Component Prompts
- "Create a hero on a pure black (#000000) background. Headline as a single word at 180px Pretendard ExtraBold weight 800, color #ffffff. Below it, a mint CTA: #00e8c5 background, #171b21 text, 50px radius, 15px 16px padding, 12px Pretendard — '바로 결제'. Beside it a transparent 50px pill with white text — '견적 문의'."
- "Design a dark card: #121212 background, 8px radius, no shadow, on a #000000 canvas. Subhead 26px Pretendard Black weight 900, #ffffff. Body 12px Pretendard weight 400, #bfbfbf."
- "Build a category chip row: white #ffffff chips, #171b21 text, 30px radius, 12px 15px padding, 12px Pretendard — 'digital platform' labels."
- "Create a top nav on #000000. 12px Pretendard weight 400 links, #ffffff text, mint #00e8c5 on active. White login pill (#ffffff bg, #171b21 text, 50px radius) right-aligned."
- "Add a bright-mint highlight tag: #21fce3 background, #171b21 text, full 1000px radius, 12px Pretendard."

### Iteration Guide
1. Canvas is true black (`#000000`); build up with near-black surface steps, never shadows
2. Headlines are Pretendard Black/ExtraBold at 90px+; UI text stays at 12px
3. Mint (`#00e8c5`) is the single action color — don't spread it
4. Brighter mint (`#21fce3`) is decorative-only (section fills, tags)
5. Pill geometry throughout — 50px buttons, 30px chips, 1000px tags, 8px cards
6. Labels on mint/white use dark ink (`#171b21`); text on black uses white → grey ladder
7. Soften the largest labels to `#e6e6e6` to avoid glare

---

## 10. Voice & Tone

Quotabook's voice is **authoritative, precise, and category-defining** — it speaks to founders, CFOs, and institutional investors as a peer in capital markets, not to consumers being onboarded. The positioning line "국내유일 기업 증권금융" ("Korea's only corporate securities finance") sets the register: a confident category claim, stated plainly, no exclamation. Copy favors institutional financial vocabulary (증권금융, 주주명부, 스톡옵션, RSU, 팬텀스톡, 공시연동) used correctly and without over-explanation, trusting that its B2B audience already knows the terms. Where consumer fintech decodes jargon, Quotabook wields it as a competence signal.

| Context | Tone |
|---|---|
| Positioning / hero | Category-defining, declarative. "국내유일 기업 증권금융." Confident, not hype. |
| Product labels | Precise capital-markets vocabulary. "주주명부", "스톡옵션", "이사회", "공시연동". |
| CTAs | Direct, transactional. "바로 결제", "견적 문의". |
| Pricing | Growth-framed, plain. "기업 성장에 최적화된 요금제". |
| Service framing | End-to-end, enterprise. "기업 맞춤형 End-to-End 서비스". |

**Voice samples (verbatim from live site):**
- "국내유일 기업 증권금융" — homepage positioning / page title. *(verified live 2026-07-02)*
- "기업 맞춤형 End-to-End 서비스" — homepage section head. *(verified live 2026-07-02)*
- "기업 성장에 최적화된 요금제" — pricing hero headline. *(verified live 2026-07-02)*

**Forbidden register**: consumer-cutesy tone, emoji, exclamation-heavy hype, over-explaining basic securities terms to a professional audience, or softening the category claim with hedges.

## 11. Brand Narrative

Quotabook (쿼타북) is operated by **Quotalab (쿼타랩)** and addresses a structural gap in the Korean startup ecosystem: equity, cap tables, stock options, and shareholder records were historically managed in spreadsheets, scattered paper filings, and law-firm back-and-forth, with no single source of truth connecting founders, employees, and investors. Quotabook reframed that fragmentation into a single digital platform — a "BizSuite" spanning cap-table management (주주명부), stock options and RSU/phantom-stock programs, shareholder meetings (주주총회) and board governance (이사회), regulatory disclosure integration (공시연동), and, on the investor side, fund administration and portfolio management.

The homepage states the ambition directly — "국내유일 기업 증권금융" (Korea's only corporate securities finance) and "기업 맞춤형 End-to-End 서비스" — positioning Quotabook not as a single tool but as the connective financial infrastructure between a company and its stakeholders, from incorporation through IPO. It is frequently described as the Korean analog to Carta.

What Quotabook refuses, visible in its design: the pastel, rounded, consumer-friendly look of retail fintech, and the intimidating navy-and-gold institutionalism of legacy financial software. What it embraces: a black, editorial, capital-markets-serious aesthetic; monumental Pretendard type that makes the words themselves the visual; a single electric mint accent; and a flat, shadowless, engineered surface that signals technical competence to a professional B2B audience.

## 12. Principles

1. **Category authority, stated plainly.** Quotabook claims a category ("국내유일 기업 증권금융") rather than describing features. *UI implication:* lead with monumental, declarative headlines; let the words carry the page.
2. **One action, one color.** Mint (`#00e8c5`) means "do this." *UI implication:* reserve the saturated mint exclusively for the primary CTA so the next step is never ambiguous on the dark field.
3. **Serious by surface.** The black canvas and heavy type signal capital-markets weight, not consumer play. *UI implication:* true black (`#000000`), Pretendard Black display, no decorative softness.
4. **Flat and engineered.** Depth comes from surface tone, not shadow. *UI implication:* build the near-black ladder (`#050505` / `#121212` / `#1c1c1c`); never reach for a drop shadow.
5. **Competence over hand-holding.** Financial vocabulary is used correctly and confidently. *UI implication:* label products with real capital-markets terms; don't dumb them down for the professional audience.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Quotabook user segments (Korean startup founders, finance/CFO teams, and venture investors), not individual people.*

**정민석, 38, 서울.** Co-founder and CEO of a Series-B SaaS startup. Migrated his cap table off spreadsheets before a new financing round. Values a single source of truth for the 주주명부 and stock-option pool that his lawyers, board, and employees can all trust. Chose Quotabook because it looked and felt like serious financial infrastructure, not a consumer app.

**한지우, 33, 성남.** Finance lead at a growth-stage company running an employee stock-option and RSU program. Uses Quotabook to manage grants, vesting, and 공시연동 without stitching together spreadsheets and law-firm emails. Appreciates that the product speaks her professional vocabulary directly.

**이도현, 45, 서울.** Partner at a venture fund using Quotabook's investor-side tools for fund administration and portfolio management. Wants clean, precise reporting across portfolio companies. Trusts the brand's serious, capital-markets-grade presentation over flashier alternatives.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no cap-table data yet)** | Black canvas. Single white (`#ffffff`) line explaining nothing has been added, with one mint (`#00e8c5`) CTA to import or add. No decorative illustration. |
| **Empty (no portfolio/fund yet)** | Muted grey (`#979797`) single line: nothing tracked yet, plus a path to add the first entity. Calm, professional. |
| **Loading (data fetch)** | Skeleton rows on a `#121212` surface at final dimensions, 8px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (compute/report)** | Inline progress on a dark surface; previous values stay visible. |
| **Error (action failed)** | Inline message in white text on a `#121212` surface with a plain explanation and a retry. No bare "오류가 발생했습니다" — states the next step. |
| **Error (form validation)** | Field-level message below the dark input; describes what is valid, not just "필수". |
| **Success (action completed)** | Brief inline confirmation in a calm tone; next-step detail linked below. Mint (`#00e8c5`) accent, no celebratory emoji. |
| **Skeleton** | `#121212` blocks at final dimensions, 8px radius, flat pulse. |
| **Disabled** | Faint grey (`#8e8e94`) text on a reduced-opacity dark surface; mint actions fade rather than turn grey to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 220ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 340ms | Page-level transitions, monumental hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, chips |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is restrained and precise — consistent with the flat, serious aesthetic. Pills respond to press with a subtle scale/opacity shift; monumental section headlines reveal with a quiet fade-and-rise at `motion-slow / ease-enter` as the user scrolls. No bounce or spring — a capital-markets platform signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on
https://quotabook.com/ and https://quotabook.com/pricing:
- Home H1 "금융" — Pretendard ExtraBold 180px / weight 800 / color rgb(255,255,255) #ffffff
- Home H2 "쿼타북 BizSuite" — Pretendard Black 100px / weight 900 / rgb(230,230,230) #e6e6e6
- Home H2 "기업 맞춤형 End-to-End 서비스" — 90px / weight 900
- Pay CTA "바로 결제" — bg rgb(0,232,197) #00e8c5 / radius 50px / 15px 16px padding
- Login pill "로그인" — bg rgb(255,255,255) #ffffff / radius 50px
- Category chip "디지털 플랫폼" — bg #ffffff / radius 30px
- Social buttons "링크드인/네이버 블로그/브런치 스토리" — bg rgb(18,18,18) #121212 / radius 3px
- Pricing H1 "기업 성장에 최적화된 요금제" — Pretendard Black 130px / weight 900
- box-shadow: none across nav/hero/cards/chips (shadowless system confirmed)
- Canvas bg rgb(0,0,0) #000000; near-black ladder #050505 / #121212 / #1c1c1c
- document.title home: "쿼타북｜국내유일 기업 증권금융"; pricing: "쿼타북｜요금제"

Token-level claims (§1–9) are sourced from this live inspection (see
web/references/quotabook/.verification.md for the full raw sample set).

Voice samples (§10) are verbatim from the live site (homepage positioning/title,
homepage section head, pricing hero).

Brand narrative (§11): Quotabook (쿼타북) is operated by Quotalab (쿼타랩) and is a
Korean equity / cap-table / stock-option / fund-administration platform positioned
as "국내유일 기업 증권금융" and frequently described as the Korean analog to Carta.
The product scope (주주명부, 스톡옵션, RSU, 팬텀스톡, 주주총회, 이사회, 공시연동,
fund/portfolio management) is drawn directly from the live homepage navigation. These
are widely documented public facts about the company; specific corporate details beyond
the site are general public knowledge, not directly quoted from a verified Quotabook
statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Quotabook user
segments (Korean startup founders, finance/CFO teams, venture investors). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "black as a capital-markets seriousness signal", "one action,
one color", "flat and engineered as a rejection of both consumer-fintech softness and
legacy financial institutionalism") are editorial readings connecting Quotabook's observed
design to its positioning, not directly sourced Quotabook statements.
-->
