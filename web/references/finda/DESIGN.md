---
id: finda
name: Finda
country: KR
category: fintech
homepage: "https://finda.co.kr"
primary_color: "#4e2eed"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=finda.co.kr&sz=128"
verified: "2026-06-09"
added: "2026-06-09"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-09"
  note: "primary = live app-download CTA violet (#4e2eed); secondary brand violet (#5d4cf2) appears on tinted surfaces. Headings near-black navy (#010a26); dark pill chips bg (#15161b)."
  colors:
    primary: "#4e2eed"
    primary-alt: "#5d4cf2"
    ink: "#010a26"
    ink-pure: "#000000"
    dark-chip: "#15161b"
    body: "#3a415a"
    muted: "#65798e"
    muted-alt: "#737a94"
    faint: "#a9b0c9"
    canvas: "#ffffff"
    surface: "#f5f6fa"
    surface-alt: "#f6f6f6"
    hairline: "#dedede"
    on-primary: "#ffffff"
  typography:
    family: { display: "SUIT", body: "Pretendard" }
    display-hero: { size: 64, weight: 800, lineHeight: 1.31, tracking: -0.96, use: "Hero headline, SUIT ExtraBold" }
    section:      { size: 34, weight: 800, lineHeight: 1.41, tracking: -0.51, use: "Section titles, SUIT ExtraBold" }
    subsection:   { size: 28, weight: 800, lineHeight: 1.43, tracking: -0.42, use: "Card / feature heads, SUIT" }
    body:         { size: 14, weight: 400, lineHeight: 1.50, use: "Standard reading text, Pretendard" }
    nav:          { size: 14, weight: 400, lineHeight: 1.50, use: "Nav links, SUIT" }
    button:       { size: 14, weight: 400, lineHeight: 1.50, use: "Dark pill chip label, SUIT" }
    button-sm:    { size: 12, weight: 400, lineHeight: 1.50, use: "App-download CTA label, SUIT" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 29, xxl: 48, section: 64 }
  rounded: { sm: 8, md: 16, lg: 60, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#4e2eed", fg: "#ffffff", radius: "100px", font: "12px / 400 SUIT", use: "App-download CTA in header, full pill" }
    button-dark-chip: { type: button, bg: "#15161b", fg: "#010a26", radius: "60px", padding: "14px 29px", font: "14px / 400 SUIT", use: "Calculator/tool entry chips on hero" }
    button-more: { type: button, bg: "#15161b", fg: "#010a26", radius: "60px", padding: "0px 20px", font: "14px / 400 SUIT", use: "More-link pill chip" }
    nav-link: { type: tab, fg: "#010a26", font: "14px / 400 SUIT", use: "Top nav item", active: "violet #4e2eed text on active" }
    card-surface: { type: card, bg: "#f5f6fa", fg: "#010a26", radius: "16px", use: "Tinted content card on grey surface" }
    card-canvas: { type: card, bg: "#ffffff", fg: "#010a26", radius: "16px", use: "White feature card, 1px #dedede hairline" }
    badge-violet: { type: badge, bg: "#5d4cf2", fg: "#ffffff", radius: "9999px", font: "12px / 400 SUIT", use: "Highlight pill / emphasis tag" }
    footer-link: { type: listItem, fg: "#010a26", font: "14px / 400 SUIT", use: "Footer navigation link" }
  components_harvested: true
---

# Design System Inspiration of Finda

## 1. Visual Theme & Atmosphere

Finda (핀다) is Korea's design-forward loan-comparison fintech, and its homepage reads like a calm, editorial financial product rather than a hard-sell lending site. The canvas is pure white (`#ffffff`) layered with a soft cool-grey surface (`#f5f6fa`) that segments content into airy, breathable zones. Text sits in a deep near-black navy (`#010a26`) — never pure black for body — which gives the page a premium, trustworthy weight without harshness. The single saturated brand accent is a confident electric violet (`#4e2eed`), reserved almost exclusively for the app-download call-to-action, so the eye is trained to treat that one color as "the action."

The typographic personality is unmistakably Korean-premium: headlines run in **SUIT ExtraBold (weight 800)** at large sizes — 64px on the hero with tight `-0.96px` tracking — projecting a bold, declarative confidence ("금융 선택의 기준을 바꾸다" / "We change the standard of financial choice"). Body and UI text drop to **Pretendard** at a quiet 14px / weight 400, the de-facto Korean product font, optimized for dense hangul legibility. This split — heavy display SUIT over light functional Pretendard — is the core tension of the system: bold where it persuades, calm where it informs.

What distinguishes Finda from its fintech peers is its restraint with depth. There are essentially no drop shadows; separation comes from flat tinted surfaces (`#f5f6fa`) and thin `#dedede` hairlines rather than elevation. Interactive chrome leans hard into the pill: dark near-black chips (`#15161b`) at 60px radius for calculator/tool entries, and the violet CTA at a full 100px radius. The result is a flat, modern, mobile-first aesthetic that feels engineered and consumer-friendly at once — financial tooling that doesn't look intimidating.

**Key Characteristics:**
- SUIT ExtraBold (weight 800) for all display headlines — bold, declarative Korean-premium voice
- Pretendard weight 400 at 14px for body/UI — quiet, dense, hangul-optimized
- Single saturated violet (`#4e2eed`) reserved for the primary app-download CTA
- Near-black navy (`#010a26`) for text instead of pure black — warm, trustworthy
- Flat depth: no shadows; tinted `#f5f6fa` surfaces + `#dedede` hairlines do the separating
- Pill-everything geometry — 60px chips, 100px CTA, full-round badges
- Negative letter-spacing on headlines (-0.96px at 64px, -0.51px at 34px)
- Cool-grey neutral ladder (`#3a415a` → `#65798e` → `#a9b0c9`) for text hierarchy

## 2. Color Palette & Roles

### Primary
- **Finda Violet** (`#4e2eed`): Primary brand color and CTA background. The saturated electric violet on the app-download button — the system's single "action" color.
- **Violet Alt** (`#5d4cf2`): Secondary brand violet for tinted highlights, badges, and emphasis surfaces. A slightly lighter, softer companion to the primary.
- **Ink Navy** (`#010a26`): Primary text and heading color. A very dark blue-black that carries warmth and financial-grade trust — used instead of pure black.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white card surfaces, text on violet/dark.
- **Surface Grey** (`#f5f6fa`): Cool-grey tinted surface for content cards and segmented sections.
- **Surface Alt** (`#f6f6f6`): A warmer secondary grey surface for alternating blocks.
- **Hairline** (`#dedede`): Thin borders, dividers, and card outlines — the primary separation device given the shadow-free system.
- **Dark Chip** (`#15161b`): Near-black background for the dark calculator/tool pill chips on the hero.
- **Pure Black** (`#000000`): Occasional maximum-contrast heading text (e.g. hero H1, feature H3).

### Text Hierarchy
- **Ink Navy** (`#010a26`): Primary text, headings, nav, strong labels.
- **Body Slate** (`#3a415a`): Secondary body copy and descriptions.
- **Muted Slate** (`#65798e`): Tertiary text, captions, metadata.
- **Muted Alt** (`#737a94`): Alternate muted slate for fine print.
- **Faint Blue-Grey** (`#a9b0c9`): Disabled text, placeholder, lowest-emphasis labels.

## 3. Typography Rules

### Font Family
- **Display**: `SUIT` (with `SUIT Fallback`) — used for all headlines, nav, and button labels. ExtraBold (800) at display sizes.
- **Body**: `Pretendard` (with `Pretendard Fallback`) — the document default, used for body copy and dense UI text at weight 400.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | SUIT | 64px (4.00rem) | 800 | 1.31 (84px) | -0.96px | Hero headline, ExtraBold |
| Section Heading | SUIT | 34px (2.13rem) | 800 | 1.41 (48px) | -0.51px | Section titles |
| Sub-section | SUIT | 28px (1.75rem) | 800 | 1.43 (40px) | -0.42px | Card / feature heads |
| Nav Link | SUIT | 14px (0.88rem) | 400 | 1.50 (21px) | normal | Top navigation items |
| Button | SUIT | 14px (0.88rem) | 400 | 1.50 (21px) | normal | Dark pill chip labels |
| Button Small | SUIT | 12px (0.75rem) | 400 | 1.50 (18px) | normal | App-download CTA label |
| Body | Pretendard | 14px (0.88rem) | 400 | 1.50 (21px) | normal | Standard reading text |

### Principles
- **Bold display, light body**: SUIT ExtraBold (800) carries every headline; Pretendard 400 carries every paragraph. The weight contrast is the system's primary hierarchy signal.
- **Tight tracking scales with size**: -0.96px at 64px, -0.51px at 34px, -0.42px at 28px. Headlines compress; body text stays at normal tracking.
- **Hangul-first sizing**: Body sits at a deliberate 14px — generous for hangul legibility, dense enough for information-rich financial layouts.
- **Two fonts, two jobs**: SUIT is the persuasive/branding voice; Pretendard is the functional/reading voice. They never swap roles.

## 4. Component Stylings

### Buttons

**App-Download CTA (Primary)**
- Background: `#4e2eed`
- Text: `#ffffff`
- Radius: 100px
- Font: 12px SUIT weight 400
- Height: 33px
- Use: Header app-download call-to-action — the system's single primary action

**Dark Tool Chip**
- Background: `#15161b`
- Text: `#010a26`
- Radius: 60px
- Padding: 14px 29px
- Font: 14px SUIT weight 400
- Height: 48px
- Use: Calculator/tool entry chips on hero ("대출이자", "연봉 실수령", "DSR")

**More Link Pill**
- Background: `#15161b`
- Text: `#010a26`
- Radius: 60px
- Padding: 0px 20px
- Font: 14px SUIT weight 400
- Height: 48px
- Use: "더 보러가기" more-link pill chips

### Cards & Containers

**Tinted Surface Card**
- Background: `#f5f6fa`
- Text: `#010a26`
- Radius: 16px
- Use: Content card sitting on the cool-grey surface

**White Feature Card**
- Background: `#ffffff`
- Text: `#010a26`
- Border: 1px solid `#dedede`
- Radius: 16px
- Use: White feature card with hairline outline (no shadow)

### Badges

**Violet Highlight Pill**
- Background: `#5d4cf2`
- Text: `#ffffff`
- Radius: 9999px (full)
- Font: 12px SUIT weight 400
- Use: Emphasis tag / highlight pill

### Navigation
- Background: `#ffffff`
- Text: `#010a26`
- Font: 14px SUIT weight 400
- Height: 56px header
- Active: violet `#4e2eed` text on active item
- Use: Top horizontal nav ("핀다소개", "회사소개", "언론보도", "서비스")

### Footer
- Links: `#010a26`, 14px SUIT weight 400
- Use: Footer navigation ("이용약관", "개인정보처리방침", "제휴 금융기관")

---

**Verified:** 2026-06-09 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://finda.co.kr, https://blog.finda.co.kr

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 20px, 29px, 48px, 64px
- Notable: Chip horizontal padding lands at 29px (measured), giving the dark tool pills a generous, tappable hit area

### Grid & Container
- Centered single-column hero with the 64px SUIT headline as the anchor
- Tool/calculator chips arranged in a horizontal scrolling/wrapping pill row beneath the hero
- Feature sections alternate between white (`#ffffff`) and tinted grey (`#f5f6fa`) full-width bands
- Cards use 16px radius and group related calculators/services

### Whitespace Philosophy
- **Breathing room over density**: despite being a data-heavy financial product, the marketing surface is airy — generous vertical rhythm between sections.
- **Flat segmentation**: sections separate by background tint (`#f5f6fa` vs `#ffffff`) and hairlines, not by shadow or border weight.
- **Pill rhythm**: the repeated 60px-radius chip creates a consistent horizontal cadence across tool entry points.

### Border Radius Scale
- Small (8px): inner elements, small containers
- Medium (16px): cards, content containers — the workhorse
- Large (60px): pill chips, tool buttons
- Full (100px / 9999px): primary CTA, badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f5f6fa` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #dedede` border | White card outlines, dividers |

**Shadow Philosophy**: Finda is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, and tool chips. Depth and grouping are communicated entirely through flat tinted surfaces (`#f5f6fa`) and thin `#dedede` hairlines. This is a deliberate modern-flat choice — it keeps the financial UI feeling clean, fast, and mobile-native, avoiding the heavy "card stack" look of legacy banking apps. When emphasis is needed, the system reaches for color (violet `#4e2eed`) or the dark chip (`#15161b`), never elevation.

## 7. Do's and Don'ts

### Do
- Use SUIT ExtraBold (weight 800) for all display headlines — it's the brand's voice
- Use Pretendard weight 400 at 14px for body and dense UI text
- Reserve violet (`#4e2eed`) for the primary app-download CTA — keep it the single "action" color
- Use near-black navy (`#010a26`) for text instead of pure black
- Separate sections with flat tinted surfaces (`#f5f6fa`) and `#dedede` hairlines, not shadows
- Use pill geometry — 60px chips, 100px CTA, full-round badges
- Apply tight negative tracking on headlines (-0.96px at 64px)
- Use the dark chip (`#15161b`) for secondary tool/calculator entry buttons

### Don't
- Use drop shadows for elevation — Finda is a flat, shadow-free system
- Spread violet across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for body text — reserve near-black navy `#010a26`
- Use sharp/square corners on interactive elements — everything is a pill
- Mix in a second accent color — violet is the only saturated hue
- Set headlines in a light weight — display is always ExtraBold (800)
- Use Pretendard for big headlines — SUIT owns display
- Use positive letter-spacing at display sizes — Finda tracks tight

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, chips wrap/scroll |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1366px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Dark tool chips at 48px height with 29px horizontal padding — comfortably tappable
- App-download CTA at 33px height, full pill for an unmistakable target
- Nav links spaced for touch within the 56px header

### Collapsing Strategy
- Hero: 64px SUIT headline scales down on mobile, weight 800 maintained
- Tool chip row: horizontal wrap/scroll on narrow viewports
- Feature bands: multi-column → stacked single column
- Tinted/white alternating sections maintain full-width treatment

### Image Behavior
- App screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain 16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Finda Violet (`#4e2eed`)
- Secondary violet / badge: Violet Alt (`#5d4cf2`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f5f6fa`)
- Heading / body text: Ink Navy (`#010a26`)
- Secondary text: Body Slate (`#3a415a`)
- Muted text: Muted Slate (`#65798e`)
- Faint / disabled: Faint Blue-Grey (`#a9b0c9`)
- Dark chip: `#15161b`
- Hairline: `#dedede`

### Example Component Prompts
- "Create a hero on white background. Headline at 64px SUIT weight 800, line-height 1.31, letter-spacing -0.96px, color #010a26. Below it a row of dark pill chips: #15161b background, #010a26 text, 60px radius, 14px 29px padding, 14px SUIT. One violet CTA: #4e2eed background, white text, 100px radius, 12px SUIT — 'app download'."
- "Design a feature card: white background, 1px solid #dedede border, 16px radius, no shadow. Title 28px SUIT weight 800, letter-spacing -0.42px, #010a26. Body 14px Pretendard weight 400, #3a415a."
- "Build a tinted section: #f5f6fa background, full-width. Section title 34px SUIT weight 800, letter-spacing -0.51px, #010a26. Cards inside use white #ffffff with #dedede hairline and 16px radius."
- "Create top nav: white 56px header. SUIT 14px weight 400 links, #010a26 text, violet #4e2eed on active. Violet app-download CTA right-aligned, 100px pill."

### Iteration Guide
1. SUIT ExtraBold (800) for every headline; Pretendard 400 for every paragraph
2. Violet (`#4e2eed`) is the single action color — don't spread it
3. No shadows — separate with `#f5f6fa` tint and `#dedede` hairlines
4. Pill geometry throughout — 60px chips, 100px CTA, 16px cards
5. Text color is `#010a26` navy, never pure black for body
6. Negative tracking on headlines, normal on body
7. Dark chip `#15161b` for secondary tool buttons

---

## 10. Voice & Tone

Finda's voice is **clear, reassuring, and empowering** — a financial guide that simplifies a stressful, jargon-heavy domain (loans, interest rates, credit) into confident plain Korean. The hero line "금융 선택의 기준을 바꾸다" ("We change the standard of financial choice") sets the register: declarative, mission-framed, never gimmicky. Copy treats the user as a smart person who deserves comparison and transparency, not a target to be upsold.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, mission-framed. "금융 선택의 기준을 바꾸다." Confident, not hype. |
| Tool/calculator labels | Plain and functional. "대출이자", "연봉 실수령", "DSR", "전월세 비교". |
| CTAs | Direct, low-pressure. "앱 다운받기", "더 보러가기". |
| Feature descriptions | Benefit-first, jargon decoded. Explains the financial term in user language. |
| Trust / security copy | Calm, concrete. "악성 앱 차단" — states the protection plainly. |

**Voice samples (verbatim from live homepage):**
- "금융 선택의 기준을 바꾸다" — hero headline (mission-framed). *(verified live 2026-06-09)*
- "대출 비교부터 신청까지" — section heading (end-to-end promise). *(verified live 2026-06-09)*
- "1분만에 국내 최다 금융사 대출 비교" — page title meta (speed + scope claim). *(verified live 2026-06-09)*

**Forbidden register**: aggressive sales urgency, fear-based lending pitches, undefined financial jargon left unexplained, exclamation-heavy hype.

## 11. Brand Narrative

Finda (핀다) was founded in **2015** by **이혜민 (Lee Hye-min, CEO)** and co-founders as a loan-comparison platform addressing a uniquely Korean pain point: borrowers had no transparent way to compare loan products across dozens of banks, savings banks, and capital companies, and were often steered toward whatever a single institution offered. Finda's founding premise — to "change the standard of financial choice" — reframed lending from an opaque, single-vendor process into a transparent comparison marketplace.

The product matured into Korea's leading 대출 비교 (loan-comparison) platform, letting users compare offers from the country's largest set of financial institutions in about a minute and apply directly in-app — the "비교부터 신청까지" (from comparison to application) end-to-end promise stated on the homepage. The brand positions itself as the user's advocate inside a system historically tilted toward lenders.

What Finda refuses, visible in its design: the heavy, intimidating chrome of legacy banking (no shadow-stacked cards, no institutional navy-and-gold), and the dark-pattern urgency of predatory lending marketing. What it embraces: a flat, fast, mobile-native interface; a single trustworthy violet; bold SUIT headlines that speak plainly; and copy that decodes financial jargon rather than hiding behind it.

## 12. Principles

1. **Transparency over steering.** Finda exists to compare, not to push one product. *UI implication:* present options side-by-side with clear terms; never visually privilege one lender without disclosure.
2. **Decode, don't intimidate.** Financial jargon (DSR, 연봉 실수령) is surfaced as friendly tools, not gatekeeping. *UI implication:* every financial term gets a plain-language tool or label; the dark tool chips make calculators feel approachable.
3. **One action, one color.** Violet (`#4e2eed`) means "do this." *UI implication:* reserve the saturated violet exclusively for the primary CTA so the next step is never ambiguous.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; keep the page light and quick to scan.
5. **Bold where it persuades, calm where it informs.** *UI implication:* SUIT ExtraBold for headlines that motivate; Pretendard 400 for content that explains.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Finda user segments (Korean borrowers comparing loans, young professionals managing credit), not individual people.*

**김지원, 29, 서울.** A first-time borrower comparing personal-loan offers before a deposit move. Distrusts going bank-by-bank; values seeing the country's lenders in one minute. Chose Finda because the comparison felt neutral, not like a sales funnel.

**박서준, 35, 경기.** A freelancer who uses the 연봉 실수령 and DSR calculators to understand his borrowing capacity before applying. Appreciates that the financial jargon is turned into simple tools he can tap without feeling judged.

**이수진, 42, 부산.** A homeowner exploring 대출 갈아타기 (loan switching) to lower her rate. Wants transparency on terms and a calm interface that doesn't pressure her. Trusts the brand's plain, non-hype tone.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no comparison results)** | White canvas. Single Ink Navy (`#010a26`) line at body size explaining no matching products, with one violet CTA to adjust criteria. No illustration clutter. |
| **Empty (saved list, none yet)** | Muted Slate (`#65798e`) single line: nothing saved yet, plus a path back to comparison. Honest, calm. |
| **Loading (results fetch)** | Skeleton rows on `#f5f6fa` tinted surface at final card dimensions, 16px radius. No shadow shimmer — flat pulse consistent with the shadowless system. |
| **Loading (calculator compute)** | Inline progress within the tool chip; previous values stay visible. |
| **Error (comparison failed)** | Inline message in Ink Navy with a plain-language explanation and a retry. No generic "오류가 발생했습니다" alone — states what to do next. |
| **Error (form validation)** | Field-level message below the input in a warm error tone; describes what's valid, not just "필수". |
| **Success (application submitted)** | Brief inline confirmation in calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f5f6fa` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Faint Blue-Grey (`#a9b0c9`) text on reduced-opacity surface; violet actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, chips |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast aesthetic. Pill chips respond to press with a subtle scale/opacity shift; comparison results fade-in from below at `motion-standard / ease-enter`. No bounce or spring — a loan-comparison product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-09) via playwright getComputedStyle on https://finda.co.kr:
- Hero H1 "금융 선택의 기준을 바꾸다" — SUIT 64px / weight 800 / -0.96px / color rgb(1,10,38)
- Section H2 "대출 비교부터 신청까지" — SUIT 34px / 800 / -0.51px
- App-download CTA — bg rgb(78,46,237) #4e2eed / radius 100px / SUIT 12px / white text
- Dark tool chips ("대출이자","연봉 실수령","DSR") — bg rgb(21,22,27) #15161b / radius 60px / 14px 29px padding
- Nav header — bg #ffffff / 56px / SUIT 14px / text rgb(1,10,38)
- box-shadow: none across hero/nav/headings/chips (shadowless system)
- Page title meta: "대출비교플랫폼, 핀다 | 1분만에 국내 최다 금융사 대출 비교"

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage (hero H1, section H2, page title meta).

Brand narrative (§11): Finda (핀다) founded 2015 as a Korean loan-comparison platform;
CEO 이혜민 (Lee Hye-min). These are widely documented public facts about the company;
specific founding details beyond the homepage are general public knowledge, not directly
quoted from a verified Finda statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Finda user
segments (Korean borrowers comparing loans). Names are illustrative; they do not refer
to real people.

Interpretive claims (e.g., "one action, one color", "flat and fast as a rejection of
legacy banking chrome") are editorial readings connecting Finda's observed design to its
positioning, not directly sourced Finda statements.
-->
