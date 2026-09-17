---
id: 8percent
name: 8percent
display_name_kr: 에잇퍼센트
country: KR
category: fintech
homepage: "https://www.8percent.kr/"
primary_color: "#3282f0"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=8percent.kr&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live action/emphasis blue (#3282f0); #6741d9 purple is the secondary accent (tinted 'more' pills). Data-dense, near-shadowless product surface on a cool-grey canvas (#f1f3f5) with white (#ffffff) cards. Official DS = EDS (Eight Design System): EdsButton/EdsTextfield/EdsToggle/EdsCheckbox."
  colors:
    primary: "#3282f0"
    accent-purple: "#6741d9"
    ink: "#1d2024"
    slate: "#3c3c3c"
    body: "#606060"
    label: "#4b525a"
    muted: "#858d94"
    faint: "#9ca5ad"
    canvas: "#f1f3f5"
    surface: "#ffffff"
    surface-blue: "#f1f6fe"
    divider: "#dee3e8"
    hairline: "#d2d2d2"
    grade-accent: "#3770b2"
  typography:
    family: { body: "Pretendard", blog: "NanumSquare" }
    stat:    { size: 40, weight: 400, lineHeight: 1.10, tracking: -0.9, use: "Hero stat numerals (누적 대출액), Pretendard" }
    section: { size: 24, weight: 700, lineHeight: 1.50, tracking: -0.6, use: "Section titles (모집중 상품), Pretendard Bold" }
    subhead: { size: 16, weight: 700, lineHeight: 1.50, use: "Active nav / disclosure tab, Pretendard Bold" }
    body:    { size: 14, weight: 400, lineHeight: 1.15, use: "Standard product text, Pretendard" }
  spacing: { xs: 4, sm: 6, md: 8, base: 12, lg: 16, xl: 32 }
  rounded: { xs: 3, sm: 4, md: 8, lg: 10, xl: 16, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary:   { type: button, bg: "#3282f0", fg: "#ffffff", radius: "8px", font: "16px / 700 Pretendard", states: "EdsButton variants primary/secondary/tertiary, sizes xs/s/m/l", use: "Primary action, brand blue" }
    button-soft:      { type: button, bg: "#f1f6fe", fg: "#3282f0", radius: "8px", padding: "6px 16px 6px 12px", font: "14px / 400 Pretendard", use: "Soft blue-tint action pill ('전체 상품, 한 번에 투자')" }
    button-news-pill: { type: button, bg: "rgba(103, 65, 217, 0.1)", fg: "#6741d9", radius: "6px", padding: "8px 16px", font: "14px / 700 Pretendard", use: "Tinted 'more' pill (언론기사 더 보기), purple accent" }
    button-confirm:   { type: button, bg: "#ffffff", fg: "#4b525a", border: "1px solid #d2d2d2", radius: "3px", font: "16px / 700 Pretendard", use: "Neutral confirm button (date-picker 확인)" }
    input-text:       { type: input, bg: "#ffffff", fg: "#1d2024", border: "1px solid #d2d2d2", radius: "4px", font: "14px Pretendard", focus: "#3282f0", use: "EdsTextfield, brand-blue focus" }
    product-card:     { type: card, bg: "#ffffff", border: "1px solid #dee3e8", radius: "10px", use: "Investment product card, flat with #dee3e8 divider" }
    grade-badge:      { type: badge, bg: "#3770b2", fg: "#ffffff", radius: "4px", font: "14px / 400 Pretendard", use: "Credit-grade tag on product cards (B tier blue; grades color-coded)" }
    nav-tab:          { type: tab, fg: "#9ca5ad", active: "text #1d2024 weight 700", use: "Disclosure section tabs — active bold ink, inactive faint" }
  components_harvested: true
---

# Design System Inspiration of 8percent

## 1. Visual Theme & Atmosphere

8percent (에잇퍼센트) is Korea's first licensed online investment-linked finance (온투업) platform, and its product surface reads exactly like what it is: a data-dense, trust-first financial marketplace that stays calm instead of loud. The page sits on a soft cool-grey canvas (`#f1f3f5`) with white (`#ffffff`) cards floating on it, separated not by shadows but by a light divider grey (`#dee3e8`) and thin `#d2d2d2` hairlines. Text runs in a restrained cool-neutral ladder — near-black ink (`#1d2024`) for headings, a softer slate (`#3c3c3c`) for the big statistic numerals, and a quiet mid-grey (`#606060`) for body copy. The single saturated action color is a confident blue (`#3282f0`), reserved for emphasis words, links, and the primary call-to-action, so the eye is trained to read that blue as "do this / go here."

The typographic personality is Korean-product-standard: everything is set in **Pretendard**, the de-facto hangul UI font, tuned for dense legibility. Headlines are Bold (700) and tightly tracked — section titles at 24px with `-0.6px` tracking (`#1d2024`), and the marquee accumulated-loan statistic at 40px weight 400 with `-0.9px` tracking in slate (`#3c3c3c`). Body and UI text drop to a quiet 14px / weight 400 in `#606060`. The result is a hierarchy driven by weight and size rather than color — appropriate for a page that must present interest rates, credit grades, and loan balances without ever feeling like a hard sell.

What distinguishes 8percent from flashier fintech peers is its restraint with depth and its disciplined use of a second accent. There are essentially no drop shadows; grouping comes from flat tinted surfaces and hairlines. Beyond the primary blue, a measured purple (`#6741d9`) appears only on tinted "more" pills (a `rgba(103, 65, 217, 0.1)` wash behind `#6741d9` text). Investment products carry color-coded credit-grade markers — a blue tier (`#3770b2`) plus gold, green, and lilac variants — that turn risk grading into a scannable visual system. Interactive chrome is softly rounded (10px cards dominate, with a 3–16px radius family), and a light-blue tint surface (`#f1f6fe`) hosts the softer secondary actions. It is engineered, orderly, and deliberately un-intimidating — a bank-grade tool that looks like a modern product.

**Key Characteristics:**
- Pretendard throughout — Bold (700) for headings, weight 400 for body/UI, hierarchy by weight not color
- Single saturated action blue (`#3282f0`) reserved for emphasis, links, and the primary CTA
- Measured purple accent (`#6741d9`) only on tinted `rgba(103, 65, 217, 0.1)` "more" pills
- Cool-neutral text ladder: ink (`#1d2024`) → slate (`#3c3c3c`) → body (`#606060`) → muted (`#858d94`) → faint (`#9ca5ad`)
- Near-shadowless: cool-grey canvas (`#f1f3f5`), white (`#ffffff`) cards, `#dee3e8` dividers and `#d2d2d2` hairlines
- Color-coded credit grades — blue (`#3770b2`) and a gold/green/lilac spectrum — for scannable risk
- Softly rounded geometry: 10px card radius dominant, 3–16px family
- Light-blue tint surface (`#f1f6fe`) for soft secondary actions
- Official design system EDS (Eight Design System): EdsButton, EdsTextfield, EdsToggle, EdsCheckbox

## 2. Color Palette & Roles

### Primary
- **8percent Blue** (`#3282f0`): Primary brand and action color. Emphasis words, links ("사업공시 보러가기"), active markers, and the primary CTA. The system's single "action" hue.
- **Accent Purple** (`#6741d9`): Secondary accent for tinted "more" pills and press/press-more affordances, shown as `#6741d9` text on a `rgba(103, 65, 217, 0.1)` wash.

### Text Ladder
- **Ink** (`#1d2024`): Primary heading and strong-label color; also the active disclosure-tab label. A near-black with a faint cool cast.
- **Slate** (`#3c3c3c`): Large statistic numerals and secondary headings (the accumulated-loan figure).
- **Body** (`#606060`): Standard body/product text — the document default.
- **Label** (`#4b525a`): Strong secondary labels, neutral confirm-button text, notice-pill text.
- **Muted** (`#858d94`): Tertiary text, captions, metadata.
- **Faint** (`#9ca5ad`): Inactive nav labels, disabled/low-emphasis text.

### Surface & Border
- **Canvas Grey** (`#f1f3f5`): Page background; also the neutral notice-pill fill.
- **Pure White** (`#ffffff`): Card and content surfaces, confirm-button fill, text on the blue CTA.
- **Surface Blue** (`#f1f6fe`): Light-blue tint surface behind soft secondary actions.
- **Divider** (`#dee3e8`): The most frequent surface separator — card dividers and section rules in the shadow-free system.
- **Hairline** (`#d2d2d2`): Thin borders on buttons, inputs, and containers.

### Status / Grade
- **Grade Accent Blue** (`#3770b2`): Credit-grade marker (B tier). Investment products color-code credit grades across a spectrum — the `#3770b2` blue alongside gold (`#d2b82f`), green (`#4a7656`), and lilac (`#8884c9`) — turning risk grade into a scannable cue.

## 3. Typography Rules

### Font Family
- **Product**: `Pretendard` (with `Malgun Gothic`, `Apple SD Gothic Neo` fallbacks) — used for all product/marketing UI at weights 400 and 700.
- **Blog**: `NanumSquare` (with `Source Sans Pro`) — used only on the official product/engineering blog (`8percent.github.io`), not on the product surface.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero Stat | Pretendard | 40px (2.50rem) | 400 | 1.10 (44px) | -0.9px | Accumulated-loan numerals (`#3c3c3c`) |
| Section Heading | Pretendard | 24px (1.50rem) | 700 | 1.50 (36px) | -0.6px | Section titles (`#1d2024`) |
| Subhead / Active Tab | Pretendard | 16px (1.00rem) | 700 | 1.50 | normal | Active nav / disclosure tab (`#1d2024`) |
| Body | Pretendard | 14px (0.88rem) | 400 | 1.15 (16.1px) | normal | Standard product text (`#606060`) |

### Principles
- **Weight over color for hierarchy**: 700 headings vs 400 body carry the structure; the palette stays neutral so financial data reads cleanly.
- **Tight tracking on display**: -0.9px at 40px and -0.6px at 24px compress headlines; body stays at normal tracking.
- **One typeface, two weights**: Pretendard 700 and 400 do all product work — no decorative display face. NanumSquare is walled off to the blog.
- **Hangul-first density**: body at a deliberate 14px with a tight 16.1px line-height suits information-rich financial layouts.

## 4. Component Stylings

### Buttons

**Primary (EdsButton)**
- Background: `#3282f0`
- Text: `#ffffff`
- Radius: 8px
- Font: 16px Pretendard weight 700
- Use: Primary action, brand blue (EDS EdsButton — variants primary/secondary/tertiary, sizes xs/s/m/l)

**Soft Blue-Tint**
- Background: `#f1f6fe`
- Text: `#3282f0`
- Radius: 8px
- Padding: 6px 16px 6px 12px
- Font: 14px Pretendard weight 400
- Height: 40px
- Use: Soft secondary action pill ("전체 상품, 한 번에 투자해볼까요?") with blue emphasis

**News-More Pill**
- Background: `rgba(103, 65, 217, 0.1)`
- Text: `#6741d9`
- Radius: 6px
- Padding: 8px 16px
- Font: 14px Pretendard weight 700
- Height: 40px
- Use: Tinted "more" pill ("언론기사 더 보기") — the purple accent's home

**Neutral Confirm**
- Background: `#ffffff`
- Text: `#4b525a`
- Border: 1px solid `#d2d2d2`
- Radius: 3px
- Font: 16px Pretendard weight 700
- Height: 60px
- Use: Neutral confirm button (date-picker "확인")

### Inputs

**EdsTextfield**
- Background: `#ffffff`
- Text: `#1d2024`
- Border: 1px solid `#d2d2d2`
- Radius: 4px
- Font: 14px Pretendard
- Focus: `#3282f0`
- Use: Standard text field (EDS EdsTextfield), brand-blue focus

### Cards & Containers

**Product Card**
- Background: `#ffffff`
- Border: 1px solid `#dee3e8`
- Radius: 10px
- Use: Investment product card — flat, separated by the `#dee3e8` divider (no shadow)

### Badges

**Credit-Grade Tag**
- Background: `#3770b2`
- Text: `#ffffff`
- Radius: 4px
- Font: 14px Pretendard weight 400
- Use: Credit-grade marker on product cards (B tier blue; grades color-coded across a gold/green/lilac spectrum)

### Navigation
- Text (active): `#1d2024`
- Text (inactive): `#9ca5ad`
- Font: 16px Pretendard weight 700 (active), weight 400 (inactive)
- Use: Disclosure section tabs ("경영현황", "이용정보", "취급현황") — active bold ink, inactive faint

### Notice Pill
- Background: `#f1f3f5`
- Text: `#4b525a`
- Radius: 16px
- Padding: 0px 16px
- Height: 56px
- Use: Notice/announcement link pill ("[공지] 개인정보 처리방침 개정 안내")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces)
**Tier 1 sources:** https://www.8percent.kr/, https://www.8percent.kr/disclosures/, https://8percent.github.io/, https://8percent.github.io/2024-07-15/frontend-eds-improvement/
**Tier 2 sources:** getdesign.md/8percent — 404 (no entry); styles.refero.design/?q=8percent — not listed (generic catalog only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 6px, 8px, 12px, 16px, 32px
- Notable: soft pills use compact 6px vertical / 12–16px horizontal padding; cards and product blocks use generous internal padding, with a dense 16.1px body line-height to pack financial data

### Grid & Container
- Cool-grey (`#f1f3f5`) full-width canvas hosting white (`#ffffff`) cards
- Investment products laid out as a scannable card grid with color-coded grade markers
- Hero statistic band ("누적 대출액") anchors the top with a large 40px numeral
- Disclosure surfaces use tabbed sections ("경영현황"/"이용정보"/"취급현황") over tabular data

### Whitespace Philosophy
- **Flat segmentation**: sections separate by the `#dee3e8` divider and `#d2d2d2` hairlines, not by elevation
- **Dense data, calm chrome**: rates, grades, and balances are packed tightly while the surrounding chrome stays airy and neutral
- **Restraint with color**: the neutral field keeps the single blue action color and purple accent legible

### Border Radius Scale
- Extra-small (3px): confirm buttons, tight controls
- Small (4px): inputs, grade tags, small containers
- Medium (8px): soft action pills
- Large (10px): product cards — the workhorse radius (dominant on the page)
- Extra-large (16px): notice pills, large containers
- Full (9999px): pills / circular markers

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f1f3f5` canvas vs `#ffffff` card shift | Card/section separation without elevation |
| Divider (Level 2) | `#dee3e8` rule / `1px solid #d2d2d2` hairline | Card outlines, list separators, dividers |

**Shadow Philosophy**: 8percent is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, section headings, product cards, and buttons; the dominant repeated surface color is the `#dee3e8` divider rather than any elevation token. Separation and grouping are communicated through flat tint (cool-grey `#f1f3f5` canvas vs white `#ffffff` cards) and thin `#d2d2d2` hairlines. This is a deliberate modern-flat choice that keeps a data-heavy financial UI feeling clean, fast, and trustworthy — when emphasis is needed the system reaches for color (blue `#3282f0`) or a tinted surface (`#f1f6fe`), never a drop shadow.

## 7. Do's and Don'ts

### Do
- Use Pretendard throughout — 700 for headings, 400 for body/UI
- Drive hierarchy with weight and size, keeping the palette neutral for dense financial data
- Reserve blue (`#3282f0`) for the primary action, emphasis, and links — the single action color
- Use the purple accent (`#6741d9`) only on tinted `rgba(103, 65, 217, 0.1)` "more" pills
- Separate surfaces with the `#dee3e8` divider and `#d2d2d2` hairlines, not shadows
- Set the canvas to cool-grey (`#f1f3f5`) with white (`#ffffff`) cards
- Color-code credit grades (blue `#3770b2` plus the gold/green/lilac spectrum) for scannable risk
- Use the 10px card radius as the default; keep the 3–16px radius family

### Don't
- Use drop shadows for elevation — 8percent is a flat, hairline-and-divider system
- Spread the blue across many elements — it dilutes the single-action signal
- Introduce a third saturated accent — blue is primary, purple is the one measured accent
- Set body text in the ink navy — reserve `#1d2024` for headings; body is `#606060`
- Use heavy display faces — Pretendard 700/400 carries everything on the product surface
- Use NanumSquare on the product UI — it belongs to the blog only
- Use positive letter-spacing on headlines — display tracks tight (-0.9px / -0.6px)
- Rely on color alone to grade risk — pair the grade color with the letter grade

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single-column product cards, hero stat compresses, tabs scroll |
| Tablet | 640-1024px | 2-up product cards, moderate padding |
| Desktop | 1024-1440px | Full multi-column product grid, centered content |

### Touch Targets
- Neutral confirm buttons at 60px height — an unmistakable tap target
- Notice pills at 56px height; soft action pills at 40px
- Nav/disclosure tabs spaced for touch within the header

### Collapsing Strategy
- Hero statistic: 40px numeral scales down on mobile, weight 400 maintained
- Product grid: multi-column → 2-up → single column stacked
- Disclosure tables: horizontal scroll on narrow viewports
- Tinted/white surfaces maintain full-width treatment

### Image Behavior
- Product/grade thumbnails keep their color-coded backgrounds at all sizes
- Cards maintain the 10px radius across breakpoints, no shadow at any size

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action / link: 8percent Blue (`#3282f0`)
- Secondary accent (tinted pill): Accent Purple (`#6741d9`)
- Heading / active label: Ink (`#1d2024`)
- Statistic numerals: Slate (`#3c3c3c`)
- Body text: Body Grey (`#606060`)
- Strong label / confirm text: Label (`#4b525a`)
- Muted text: `#858d94`
- Faint / inactive: `#9ca5ad`
- Canvas: Cool Grey (`#f1f3f5`)
- Card surface: White (`#ffffff`)
- Soft tint surface: `#f1f6fe`
- Divider: `#dee3e8`
- Hairline: `#d2d2d2`
- Credit-grade blue: `#3770b2`

### Example Component Prompts
- "Create a fintech product listing on a cool-grey canvas (#f1f3f5) with white (#ffffff) cards, 10px radius, separated by a #dee3e8 divider and no shadow. Section title 24px Pretendard weight 700, letter-spacing -0.6px, color #1d2024. Primary CTA: #3282f0 background, white text, 8px radius, 16px Pretendard 700."
- "Design a hero statistic band: 40px Pretendard weight 400, letter-spacing -0.9px, color #3c3c3c ('누적 대출액'). Body labels 14px weight 400, #606060."
- "Build a soft secondary action pill: #f1f6fe background, 8px radius, 6px 16px 6px 12px padding, near-ink label with a #3282f0 emphasis word. And a 'more' pill: rgba(103,65,217,0.1) background, #6741d9 text, 6px radius."
- "Create disclosure tabs: active label #1d2024 16px Pretendard 700, inactive label #9ca5ad weight 400. Below, a text field: white background, 1px solid #d2d2d2, 4px radius, #3282f0 focus."
- "Add a credit-grade badge: #3770b2 background, white text, 4px radius, 14px Pretendard — one of a color-coded grade spectrum (also gold, green, lilac)."

### Iteration Guide
1. Pretendard for everything on the product surface — 700 headings, 400 body
2. Blue (`#3282f0`) is the single action color; purple (`#6741d9`) is the one measured accent (tinted pills only)
3. No shadows — separate with `#dee3e8` dividers and `#d2d2d2` hairlines
4. Canvas is cool-grey `#f1f3f5`; cards are white `#ffffff` at 10px radius
5. Text color is `#606060` body / `#1d2024` headings — never ink for body copy
6. Tight negative tracking on headlines, normal on body
7. Color-code credit grades but always pair the color with the letter grade

---

## 10. Voice & Tone

8percent's voice is **plain, reassuring, and evidence-led** — a financial platform that earns trust by showing numbers, not by hyping returns. Its name states the thesis directly (targeting a mid-single-digit yield that sits between low deposit rates and high consumer-loan rates), and the homepage leads with a verifiable statistic ("누적 대출액 1조 3,955억 2,815만 원" / accumulated loan volume) rather than a slogan. Copy treats the reader as a rational investor who deserves disclosure and comparison, and it foregrounds regulatory standing ("온투업 1호" — the first licensed online investment-linked finance company).

| Context | Tone |
|---|---|
| Hero / statistics | Concrete and quantified. Leads with accumulated-loan figures, not adjectives. |
| Product labels | Functional and precise. Credit grade, rate, term stated plainly. |
| CTAs | Direct, low-pressure. "한 번에 투자", "사업공시 보러가기", "더 보기". |
| Disclosure / compliance | Formal, transparent. Business-disclosure tabs read like a regulatory filing. |
| Press / trust copy | Factual, third-party-anchored. Cites coverage and milestones, not superlatives. |

**Voice samples (verbatim from live surfaces):**
- "모집중 상품" — section heading; plainly names the state ("products now funding"). *(verified live 2026-07-02)*
- "누적 대출액 1조 3,955억 2,815만 원" — hero statistic (quantified trust). *(verified live 2026-07-02)*
- "사업공시 보러가기" — disclosure link (transparency-first CTA). *(verified live 2026-07-02)*

**Forbidden register**: guaranteed-return language, fear- or urgency-based investment pressure, undefined financial jargon left unexplained, exclamation-heavy hype.

## 11. Brand Narrative

8percent (에잇퍼센트) was founded around **2014 by 이효진 (Lee Hyo-jin, CEO)**, a former bank employee, to attack a uniquely Korean gap: the chasm between the low single-digit rates savers earned on deposits and the high double-digit rates borrowers paid on consumer and card loans. The brand name encodes the mission — connect lenders and borrowers directly so both meet near a fairer middle (an ~8% register) — reframing lending as a transparent, data-driven marketplace rather than an opaque bank product. The company became **Korea's first licensed online investment-linked finance provider (온투업 1호)**, a positioning it still leads with on the homepage.

Over a decade the platform matured into an established P2P/online-investment brand — the live homepage marks its 10th-anniversary milestones and an accumulated loan volume above 1.39 trillion won, and press coverage on the site documents institutional-investor inflows and the CEO's public profile (including a noted meeting with then-U.S. Treasury Secretary Janet Yellen). The brand positions itself as the disciplined, disclosure-forward operator in a category that has seen less-careful players fail.

What 8percent refuses, visible in its design: the hard-sell urgency and guaranteed-return theatrics of predatory lending marketing, and the heavy institutional chrome of legacy banking. What it embraces: a flat, data-dense, near-shadowless interface; a single trustworthy blue; verifiable statistics leading the page; and color-coded credit grading that makes risk legible rather than hidden.

## 12. Principles

1. **Show the numbers.** Trust is earned with verifiable data, not adjectives. *UI implication:* lead with real statistics (accumulated loan volume, rates, grades); keep the palette neutral so figures read cleanly.
2. **Make risk legible.** Credit grade is a first-class citizen, not fine print. *UI implication:* color-code grades (blue `#3770b2` and a gold/green/lilac spectrum) and always pair the color with the letter grade.
3. **One action, one color.** Blue (`#3282f0`) means "do this." *UI implication:* reserve the saturated blue for the primary CTA, emphasis, and links so the next step is never ambiguous.
4. **Flat and calm.** Data density beats decorative depth. *UI implication:* no shadows; separate with `#dee3e8` dividers and `#d2d2d2` hairlines on a cool-grey canvas.
5. **Disclosure over persuasion.** Regulatory transparency is a design surface. *UI implication:* give business disclosures tidy tabbed layouts that read like a filing, not a sales page.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable 8percent user segments (Korean retail investors seeking mid-yield alternatives, borrowers refinancing high-rate loans), not individual people.*

**정민수, 34, 서울.** A salaried retail investor parking part of his savings for a better-than-deposit yield. Distrusts "guaranteed return" pitches; values that 8percent leads with accumulated-loan figures and a visible license status. Chose it because the credit grades and disclosures let him judge risk himself.

**한지영, 41, 경기.** A small-business owner who used 8percent to refinance a high-rate loan into a lower-rate one. Appreciates that terms and grades are shown plainly and that the interface feels like a calm tool, not a pressure funnel.

**오세라, 29, 부산.** A cautious first-time P2P investor who reads the business-disclosure tabs before committing. Trusts the brand's factual, third-party-anchored tone and its decade-long track record over flashier newcomers.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no products funding)** | White (`#ffffff`) card on the `#f1f3f5` canvas. Single Ink (`#1d2024`) line stating no products are currently funding, with a calm path to upcoming products. No illustration clutter. |
| **Empty (no investments yet)** | Muted (`#858d94`) single line explaining nothing invested yet, plus a `#3282f0` link into the product list. Honest and quiet. |
| **Loading (product list fetch)** | Skeleton cards at final dimensions, 10px radius, on the `#dee3e8`/`#f1f3f5` neutral field. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (figures compute)** | Inline placeholder within the statistic band; previously loaded numbers stay visible until refreshed. |
| **Error (fetch failed)** | Inline message in Ink (`#1d2024`) with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the EdsTextfield describing what is valid, not just "필수". |
| **Success (investment placed)** | Brief inline confirmation in a calm tone; the transaction/grade detail is linked immediately below. No celebratory emoji. |
| **Skeleton** | `#dee3e8` blocks at final dimensions, 10px radius, flat pulse. |
| **Disabled** | Faint (`#9ca5ad`) text on a reduced-opacity surface; the blue action fades rather than turning grey, preserving the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 200ms | Card/section reveal, tab switch, dropdown |
| `motion-slow` | 320ms | Page-level transitions, modal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and restrained — consistent with the flat, data-first aesthetic. Pills and buttons respond to press with a subtle opacity/scale shift; product cards fade-in from below at `motion-standard / ease-enter`. No bounce or spring — a regulated finance product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on https://www.8percent.kr/,
https://www.8percent.kr/disclosures/, and https://8percent.github.io/:
- Action/emphasis blue rgb(50,130,240) #3282f0; secondary accent purple rgb(103,65,217) #6741d9
  on a rgba(103,65,217,0.1) tint pill ("언론기사 더 보기")
- Headings rgb(29,32,36) #1d2024 (H3 24px/700/-0.6px); hero stat rgb(60,60,60) #3c3c3c (40px/400/-0.9px)
- Body Pretendard rgb(96,96,96) #606060 14px/line-height 16.1px; canvas rgb(241,243,245) #f1f3f5
- box-shadow: none across hero/cards/buttons; dominant divider rgb(222,227,232) #dee3e8
- Credit-grade card backgrounds color-coded: #3770b2 blue / #d2b82f gold / #4a7656 green / #8884c9 lilac
- Official DS = EDS (Eight Design System): EdsButton (primary/secondary/tertiary, xs/s/m/l),
  EdsTextfield, EdsToggle, EdsCheckbox — https://8percent.github.io/2024-07-15/frontend-eds-improvement/

Token-level claims (§1-9) are sourced from this live inspection + the EDS blog post.

Voice samples (§10) are verbatim from the live homepage ("모집중 상품", "누적 대출액 …",
"사업공시 보러가기").

Brand narrative (§11): 8percent (에잇퍼센트) founded ~2014, CEO 이효진 (Lee Hyo-jin); Korea's first
licensed online investment-linked finance company (온투업 1호). The 10th-anniversary milestone,
accumulated-loan figure (>1.39 trillion won), institutional-inflow coverage, and the CEO/Janet
Yellen meeting are all surfaced on the live homepage's press links. Broader founding details are
widely documented public facts, not directly quoted from a verified 8percent statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable 8percent user segments
(Korean retail investors, refinancing borrowers). Names are illustrative; they do not refer to
real people.

Interpretive claims (e.g., "one action, one color", "flat and calm as a rejection of predatory-
lending theatrics and legacy-bank chrome") are editorial readings connecting 8percent's observed
design to its positioning, not directly sourced 8percent statements.
-->
