---
id: ringle
name: Ringle
display_name_kr: 링글
country: KR
category: education
homepage: "https://www.ringleplus.com"
primary_color: "#3c2bac"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ringleplus.com&sz=128"
verified: "2026-06-11"
added: "2026-06-11"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-11"
  note: "primary = live CTA indigo (#3c2bac, '링글 시작하기' / '무료체험'); deeper indigos (#2b1e90, #4130a4, #201852, #120b60) anchor dark hero bands. Headings near-black indigo #140f33; muted nav/sub text #80839e. Single body font Pretendard Variable; display in Pretendard JP ExtraBold. Flat, shadowless on inspected nodes."
  colors:
    primary: "#3c2bac"
    primary-deep: "#2b1e90"
    indigo: "#4130a4"
    indigo-darker: "#201852"
    indigo-darkest: "#120b60"
    indigo-title: "#1c1374"
    ink: "#140f33"
    body: "#3e426a"
    slate: "#5a5e7f"
    muted: "#80839e"
    tint: "#eeebfa"
    tint-mid: "#cbc5f0"
    lilac: "#a89ee6"
    canvas: "#ffffff"
    surface: "#f8f8fb"
    gold: "#ffd391"
    promo-blue: "#2259e5"
    teens-blue: "#4495ff"
    on-primary: "#ffffff"
  typography:
    family: { display: "Pretendard JP ExtraBold", body: "Pretendard Variable" }
    display-hero: { size: 52, weight: 800, lineHeight: 1.30, use: "Hero headline, Pretendard JP ExtraBold" }
    section:      { size: 40, weight: 800, lineHeight: 1.30, use: "Product/section headlines, ExtraBold" }
    feature:      { size: 32, weight: 800, lineHeight: 1.31, use: "Feature headline, ExtraBold" }
    eyebrow:      { size: 22, weight: 700, lineHeight: 1.40, use: "Section label, Pretendard JP Bold" }
    lead:         { size: 20, weight: 500, lineHeight: 1.40, use: "Hero sub / lead text, Pretendard JP Medium" }
    body:         { size: 14, weight: 400, lineHeight: 1.57, use: "Body + nav, Pretendard Variable" }
    nav:          { size: 14, weight: 500, lineHeight: 1.57, use: "Top nav items, Pretendard JP Medium" }
  spacing: { xs: 4, sm: 8, md: 10, base: 16, lg: 24, xl: 40, xxl: 60 }
  rounded: { xs: 4, sm: 5, md: 8, lg: 12, xl: 24, full: 40 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#3c2bac", fg: "#ffffff", radius: "8px", height: "61px", font: "18px / 400 Pretendard", use: "Primary CTA — 링글 시작하기" }
    button-nav: { type: button, bg: "#3c2bac", fg: "#ffffff", radius: "5px", padding: "10px 16px", height: "42px", use: "Header 무료체험 CTA" }
    button-on-dark: { type: button, bg: "#120b60", fg: "#ffffff", radius: "8px", height: "60px", use: "더 알아보기 link on dark indigo band" }
    button-teens: { type: button, bg: "#4495ff", fg: "#ffffff", radius: "8px", height: "60px", use: "링글 틴즈 더 알아보기 CTA" }
    nav-link: { type: tab, fg: "#80839e", font: "14px / 500 Pretendard JP Medium", active: "text #3c2bac", use: "Top nav item, indigo on active/hover" }
    card-tint: { type: card, bg: "#eeebfa", fg: "#140f33", radius: "12px", use: "Soft lilac-tint content card" }
    card-promo: { type: card, bg: "#2259e5", fg: "#ffffff", radius: "24px", padding: "60px", use: "Promotion banner card, gold accent #ffd391" }
    badge-gold: { type: badge, bg: "#2259e5", fg: "#ffd391", radius: "4px", font: "16px / 700 Pretendard JP Bold", use: "Promo accent label (gold on promo blue)" }
    footer-link: { type: listItem, fg: "#80839e", font: "14px / 400 Pretendard Variable", use: "Footer / nav link" }
  components_harvested: true
---

# Design System Inspiration of Ringle

## 1. Visual Theme & Atmosphere

Ringle (링글) is Korea's premium 1:1 video-English edtech — "명문대 튜터와의 1:1 화상영어" — and its marketing surface reads like a serious, career-grade learning product rather than a playful language app. The canvas is pure white (`#ffffff`) with the occasional cool near-white surface (`#f8f8fb`), and the whole identity orbits a single confident indigo: the CTA purple `#3c2bac` that fills every "링글 시작하기" / "무료체험" button. That indigo deepens into a family of dark blues — `#2b1e90`, `#4130a4`, `#201852`, `#120b60`, `#1c1374` — that paint the full-bleed feature bands where Ringle showcases its 1:1 화상영어, AI 스피킹, and 기업 솔루션 products in reversed-out white type. The effect is studious and trustworthy: indigo signals focus and intellect, the right register for a product that pairs learners with Ivy/top-MBA tutors.

Typography is the system's backbone and its single most distinctive trait. Display runs in **Pretendard JP ExtraBold (weight 800)** at large sizes — 52px on the hero, 40px on product headlines, 32px on features — in a deep near-black indigo `#140f33`, projecting declarative confidence ("영어는 실전처럼"). Body and UI text collapse to a single workhorse, **Pretendard Variable**, at a quiet 14px / weight 400, with nav and lead text stepping up to Pretendard JP Medium at 14–20px in muted slate `#80839e`. The hierarchy is carried almost entirely by weight and size, not color: ExtraBold black-indigo to persuade, Medium grey to inform.

What distinguishes Ringle is its restraint. There is essentially no decorative depth — inspected hero, nav, headings, and CTAs all return `box-shadow: none`; separation comes from flat indigo bands and soft lilac tints (`#eeebfa`, `#cbc5f0`, `#a89ee6`) rather than elevation. Geometry is gently rounded: 8px on primary buttons and cards, 5px on the compact nav CTA, 12px on tinted cards, and a generous 24px on promo banners. A warm gold accent (`#ffd391`) and a saturated promo blue (`#2259e5`) appear only in time-boxed promotion chrome, and a bright sky blue (`#4495ff`) is reserved for the 틴즈 (teens) sub-brand. The result is a calm, intellectual, mobile-first system — premium without being cold.

**Key Characteristics:**
- Single indigo identity — CTA purple `#3c2bac` deepening into `#2b1e90`, `#4130a4`, `#201852`, `#120b60` dark bands
- Pretendard JP ExtraBold (weight 800) for all display headlines — declarative, career-grade voice
- Pretendard Variable weight 400 at 14px as the single body/UI workhorse
- Near-black indigo `#140f33` for headings; muted slate `#80839e` for nav and sub-text
- Flat depth: no shadow on inspected nodes; lilac tints (`#eeebfa`, `#cbc5f0`, `#a89ee6`) and indigo bands do the separating
- Gently rounded geometry — 8px buttons/cards, 5px nav CTA, 12px tint cards, 24px promo banners
- Reserved accents: gold `#ffd391` + promo blue `#2259e5` for promotions; sky blue `#4495ff` for 틴즈
- Hierarchy by weight/size, not color — ExtraBold to persuade, Medium grey to inform

## 2. Color Palette & Roles

### Primary
- **Ringle Indigo** (`#3c2bac`): Primary brand color and CTA background — the saturated indigo-purple that fills "링글 시작하기" and "무료체험". The single "action" color.
- **Deep Indigo** (`#2b1e90`): Brand-text indigo used for inline product names and emphasis (e.g. "링글 1:1 화상영어").
- **Indigo Band** (`#4130a4`): A mid dark-indigo seen as a recurring surface fill across feature sections.

### Dark Indigo Bands
- **Indigo Dark** (`#201852`): Dark band background behind reversed-out white feature copy.
- **Indigo Darkest** (`#120b60`): Near-black indigo for "더 알아보기" links on the darkest product bands.
- **Indigo Title** (`#1c1374`): Deep indigo used on some product-landing hero headlines.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white cards, reversed-out text on indigo bands.
- **Surface** (`#f8f8fb`): Cool near-white surface for alternating sections.
- **Tint** (`#eeebfa`): Soft lilac-tint card and section background.
- **Tint Mid** (`#cbc5f0`): A stronger lilac tint for highlighted surfaces.
- **Lilac** (`#a89ee6`): The mid lilac used for illustration fills and accent surfaces.

### Text Hierarchy
- **Ink Indigo** (`#140f33`): Primary heading and strong text — near-black indigo, never pure black.
- **Body Slate** (`#3e426a`): Secondary body copy.
- **Slate** (`#5a5e7f`): Tertiary headings and labels.
- **Muted** (`#80839e`): Nav items, captions, lead/sub text, lowest-emphasis labels.

### Accents (reserved)
- **Gold** (`#ffd391`): Warm gold accent text, used only inside promotion chrome.
- **Promo Blue** (`#2259e5`): Saturated blue for the time-boxed promotion bar and banner cards.
- **Teens Blue** (`#4495ff`): Bright sky blue reserved for the 링글 틴즈 (teens) sub-brand CTAs.
- **On Primary** (`#ffffff`): White text/icons on indigo and blue surfaces.

## 3. Typography Rules

### Font Family
- **Display**: `Pretendard JP ExtraBold` (also `Pretendard JP Bold`, `Pretendard JP Medium`, `Pretendard JP Regular`) — all headlines, eyebrows, nav, and lead text.
- **Body**: `Pretendard Variable` (with `Noto Sans KR` fallback) — the document default and the single body/UI workhorse at weight 400.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Pretendard JP ExtraBold | 52px (3.25rem) | 800 | ~1.30 | Homepage hero, color `#140f33` |
| Section Headline | Pretendard JP ExtraBold | 40px (2.50rem) | 800 | ~1.30 | Product hub headlines |
| Feature Headline | Pretendard JP ExtraBold | 32px (2.00rem) | 800 | ~1.31 | In-section feature heads |
| Eyebrow / Label | Pretendard JP Bold | 22px (1.38rem) | 700 | ~1.40 | Product name label (e.g. "링글 AI 스피킹") |
| Lead / Sub | Pretendard JP Medium | 20px (1.25rem) | 500 | ~1.40 | Hero sub-line, color `#80839e` |
| Nav | Pretendard JP Medium | 14px (0.88rem) | 500 | ~1.57 | Top nav items |
| Body | Pretendard Variable | 14px (0.88rem) | 400 | ~1.57 | Standard reading text |

### Principles
- **Bold display, light body**: ExtraBold (800) carries every headline; Pretendard Variable 400 carries every paragraph. Weight contrast is the primary hierarchy signal.
- **One body font**: Pretendard Variable is the single workhorse for body and UI — the system does not mix functional typefaces.
- **Color stays quiet in type**: headings sit in near-black indigo `#140f33`, sub/nav in muted `#80839e`; saturated indigo is reserved for interactive elements, not running text.
- **Hangul-first sizing**: body at 14px with ~1.57 line-height — generous for dense hangul reading.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#3c2bac`
- Text: `#ffffff`
- Radius: 8px
- Font: 18px Pretendard
- Height: 61px
- Use: Primary call-to-action — "링글 시작하기"

**Header CTA (무료체험)**
- Background: `#3c2bac`
- Text: `#ffffff`
- Radius: 5px
- Padding: 10px 16px
- Height: 42px
- Use: Compact header free-trial button

**On-Dark Link**
- Background: `#120b60`
- Text: `#ffffff`
- Radius: 8px
- Height: 60px
- Use: "더 알아보기" link on the darkest indigo feature bands

**Teens CTA**
- Background: `#4495ff`
- Text: `#ffffff`
- Radius: 8px
- Height: 60px
- Use: 링글 틴즈 sub-brand "틴즈 더 알아보기" button

### Inputs

**Default**
- Background: `#ffffff`
- Border: 1px solid `#cbc5f0`
- Radius: 8px
- Text: 14px Pretendard Variable
- Use: Form / auth text field on white canvas

### Cards & Containers

**Lilac Tint Card**
- Background: `#eeebfa`
- Text: `#140f33`
- Radius: 12px
- Use: Soft lilac-tinted content card on white

**Promotion Banner**
- Background: `#2259e5`
- Text: `#ffffff`
- Radius: 24px
- Padding: 60px
- Use: Time-boxed promotion banner card (gold `#ffd391` accent label inside)

### Badges

**Gold Promo Label**
- Background: `#2259e5`
- Text: `#ffd391`
- Radius: 4px
- Font: 16px Pretendard JP Bold
- Use: Promotion accent label — warm gold on promo blue

### Navigation
- Background: `#ffffff`
- Text: `#80839e`
- Active: `#3c2bac` indigo text
- Font: 14px Pretendard JP Medium
- Use: Top horizontal nav ("제품소개", "고객사례", "튜터", "교재", "가격")

### Footer
- Links: `#80839e`, 14px Pretendard Variable
- Use: Footer navigation links

---

**Verified:** 2026-06-11 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.ringleplus.com, https://www.ringleplus.com/ko/student/landing/home, https://www.ringleplus.com/en/student/landing/blog
**Tier 2 sources:** none available (getdesign.md/ringle → "No designs found"; styles.refero.design ?q=ringle → no Ringle-specific style)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 10px, 16px, 24px, 40px, 60px
- Notable: promotion banner cards use a generous 60px padding for an editorial, full-bleed feel

### Grid & Container
- Centered single-column hero anchored by the 52px ExtraBold headline
- Product hubs (1:1 화상영어 / AI 스피킹 / 기업 / 틴즈) stack as alternating full-width bands — white sections vs dark indigo bands (`#201852`, `#120b60`)
- Each product band pairs a 22px Bold eyebrow label, a 40px ExtraBold headline, and an indigo "더 알아보기" CTA
- Cards group related case studies and use 12px radius

### Whitespace Philosophy
- **Editorial breathing room**: generous vertical rhythm between product bands; the page reads top-to-bottom as a sequence of self-contained product stories.
- **Band segmentation**: sections separate by background — white `#ffffff`, near-white `#f8f8fb`, lilac tint `#eeebfa`, and dark indigo bands — not by borders or shadow.
- **Reserved accent rhythm**: gold `#ffd391` and promo blue `#2259e5` appear only in promotion chrome, keeping the indigo identity dominant.

### Border Radius Scale
- Extra small (4px): badges, small chips
- Small (5px): compact header CTA
- Medium (8px): primary buttons, inputs, standard cards — the workhorse
- Large (12px): tinted content cards
- Extra large (24px): promotion banner cards

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, hero, nav, CTAs (inspected `box-shadow: none`) |
| Tint (Level 1) | Lilac `#eeebfa` / surface `#f8f8fb` background shift | Card/section separation without elevation |
| Band (Level 2) | Dark indigo (`#201852`, `#120b60`) full-bleed band | Product feature sections with reversed white type |

**Shadow Philosophy**: Ringle reads as a near-shadowless system on its primary surfaces. Live inspection found `box-shadow: none` across the hero, nav, headings, and CTAs. Depth and grouping are communicated through flat color — soft lilac tints (`#eeebfa`, `#cbc5f0`) and full-bleed dark indigo bands (`#201852`, `#120b60`) — rather than elevation. When emphasis is needed the system reaches for color (indigo `#3c2bac`, or a dark band), not a drop shadow.

## 7. Do's and Don'ts

### Do
- Use indigo `#3c2bac` as the single primary action color for CTAs ("링글 시작하기", "무료체험")
- Use Pretendard JP ExtraBold (800) for all display headlines — it's the brand's voice
- Use Pretendard Variable weight 400 at 14px for body and dense UI text
- Use near-black indigo `#140f33` for headings instead of pure black
- Separate sections with flat tints (`#eeebfa`, `#f8f8fb`) and dark indigo bands (`#201852`, `#120b60`)
- Reverse copy out to white on the dark indigo product bands
- Reserve gold `#ffd391` and promo blue `#2259e5` for promotion chrome only
- Use sky blue `#4495ff` only for the 틴즈 sub-brand

### Don't
- Spread the indigo across many elements — keep `#3c2bac` the single action signal
- Use a drop shadow for elevation — separate with tint and bands instead
- Use pure black for headings — reserve near-black indigo `#140f33`
- Mix a second body typeface — Pretendard Variable is the one workhorse
- Let gold or promo blue leak outside time-boxed promotion surfaces
- Set headlines in a light weight — display is always ExtraBold (800)
- Carry color in running text — keep saturated indigo for interactive elements

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, product bands stack |
| Tablet | 640-1024px | Moderate padding, 2-up case-study cards |
| Desktop | 1024-1440px | Full layout, centered hero, full-bleed alternating bands |

### Touch Targets
- Primary CTA at 61px height — an unmistakable tap target
- Header CTA at 42px height with 10px 16px padding
- On-dark and teens links at 60px height

### Collapsing Strategy
- Hero: 52px ExtraBold headline scales down on mobile, weight 800 maintained
- Product bands: full-bleed white/indigo alternation preserved on all viewports
- Case-study cards: multi-column → stacked single column

### Image Behavior
- Product/illustration imagery carries no shadow, consistent with the flat system
- Cards maintain 12px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Ringle Indigo (`#3c2bac`)
- Deep / brand-text indigo: (`#2b1e90`)
- Dark bands: (`#201852`, `#120b60`)
- Background: Pure White (`#ffffff`); near-white surface (`#f8f8fb`)
- Lilac tints: (`#eeebfa`, `#cbc5f0`, `#a89ee6`)
- Heading text: Ink Indigo (`#140f33`)
- Body text: Body Slate (`#3e426a`)
- Nav / muted text: Muted (`#80839e`)
- Promotion accents: gold (`#ffd391`) + promo blue (`#2259e5`)
- Teens sub-brand: (`#4495ff`)

### Example Component Prompts
- "Create a hero on white. Headline at 52px Pretendard JP ExtraBold weight 800, color #140f33. Sub-line 20px Pretendard JP Medium, color #80839e. Primary CTA: #3c2bac background, white text, 8px radius, 61px tall — '링글 시작하기'."
- "Design a dark product band: #120b60 background, full width. 22px Bold white eyebrow, 40px ExtraBold white headline, and a '더 알아보기' link on #120b60 with 8px radius."
- "Build a lilac tint card: #eeebfa background, 12px radius, no shadow. Title 32px Pretendard JP ExtraBold #140f33, body 14px Pretendard Variable #3e426a."
- "Create a top nav: white background, 14px Pretendard JP Medium links in #80839e, active item indigo #3c2bac. Right-aligned '무료체험' CTA: #3c2bac, 5px radius, 10px 16px padding."

### Iteration Guide
1. Pretendard JP ExtraBold (800) for every headline; Pretendard Variable 400 for every paragraph
2. Indigo `#3c2bac` is the single action color — don't spread it
3. No shadows — separate with lilac tint `#eeebfa` and dark indigo bands `#201852` / `#120b60`
4. Gently rounded — 8px buttons/cards, 12px tint cards, 24px promo banners
5. Heading color is `#140f33` indigo, never pure black
6. Reverse to white on dark bands; keep gold/promo blue inside promotion chrome only
7. Sky blue `#4495ff` only for the 틴즈 sub-brand

---

## 10. Voice & Tone

Ringle's voice is **earnest, ambitious, and pragmatic** — an English-learning guide aimed squarely at working adults and high achievers who want real, career-grade fluency, not casual chat practice. The hero line "영어는 실전처럼" ("English, like the real thing") sets the register: outcome-focused, confident, never gimmicky. Copy treats the learner as a serious professional building a skill that compounds into a career — "일하는 사람을 위한 영어" (English for people who work).

| Context | Tone |
|---|---|
| Hero headlines | Declarative, outcome-framed. "영어는 실전처럼." Confident, not hype. |
| Product labels | Plain and structural. "링글 1:1 화상영어", "링글 AI 스피킹", "링글 기업 영어 솔루션". |
| CTAs | Direct, low-pressure. "링글 시작하기", "무료체험", "더 알아보기". |
| Feature descriptions | Benefit-first, career-framed. Ties English skill to professional outcomes. |
| Trust copy | Concrete and proof-led. "200+개 이상의 기업이 링글과 함께 하고 있습니다". |

**Voice samples (verbatim from live surfaces):**
- "영어는 실전처럼. 명문대 튜터와의 1:1 맞춤 화상영어" — homepage hero. *(verified live 2026-06-11)*
- "꿈꾸던 영어실력과 커리어를 만드는 일하는 사람을 위한 영어, 링글" — hero sub-line. *(verified live 2026-06-11)*
- "200+개 이상의 기업이 링글과 함께 하고 있습니다" — B2B proof headline. *(verified live 2026-06-11)*

**Forbidden register**: casual gamified hype, fear-based "you're behind" pressure, undefined jargon, exclamation-heavy marketing.

## 11. Brand Narrative

Ringle (링글, 링글잉글리시에듀케이션서비스) was founded in **2015** by **이성파 (Lee Sungpah)** and **이승훈 (Lee Seunghoon)**, two co-founders who met as classmates in the **Stanford MBA** program. The founding insight came directly from their own pain: despite strong credentials, they struggled to express themselves in English in a top global environment — and realized many capable Korean professionals hit the same wall. The product they built reframed English education from rote test-prep into real conversation practice with tutors from top universities, structured around current-affairs reading material and AI-assisted feedback.

Ringle's stated mission, per the founders, is "영어 장벽이 없는 세상을 만드는 것" — to build a world without the English-language barrier. The product matured into Korea's leading premium 1:1 화상영어 (video-English) platform: 20–40 minute lessons with Ivy/top-MBA tutors, a library of 200+ discussion materials, real-time Google Docs collaboration, and AI conversation analysis — later extended into AI 스피킹 (unlimited AI speaking), a 기업 (B2B corporate) solution used by 200+ companies, and the 틴즈 (teens) sub-brand.

What Ringle refuses, visible in its design: the playful, gamified chrome of casual language apps, and the intimidating test-factory aesthetic of legacy English academies. What it embraces: a calm, intellectual indigo identity; bold ExtraBold headlines that speak to ambition; and copy that ties English fluency directly to career and real-world performance. The company also notes it now earns 30%+ of revenue outside Korea, reflecting a global ambition consistent with its founding story.

## 12. Principles

1. **Real practice over rote prep.** Ringle exists to build usable fluency, not test scores. *UI implication:* lead with conversation/outcome framing ("영어는 실전처럼"); keep product structure (tutor, material, feedback) visible and concrete.
2. **Premium and intellectual, not playful.** The brand earns trust by feeling serious. *UI implication:* indigo `#3c2bac` identity, ExtraBold display type, near-black indigo `#140f33` text — no gamified color or bounce.
3. **One action, one color.** Indigo means "do this." *UI implication:* reserve `#3c2bac` for the primary CTA so the next step is never ambiguous.
4. **Calm bands over decorative depth.** *UI implication:* no shadows; separate with lilac tints and full-bleed dark indigo bands; reverse copy to white on dark.
5. **Career-first framing.** English is a professional skill that compounds. *UI implication:* tie features to outcomes ("일하는 사람을 위한 영어", B2B proof), and address the learner as a serious professional.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Ringle user segments (Korean working professionals, jobseekers targeting global roles, corporate L&D buyers), not individual people.*

**김도현, 31, 서울.** A product manager preparing to interview at global tech companies. Wants real speaking reps with a sharp tutor, not vocabulary drills. Chose Ringle because the lessons feel like the actual high-stakes conversations he's preparing for.

**박지은, 36, 경기.** A working parent who studies in 20-minute lessons between job and home life. Values the flexibility and the AI 스피킹 app for unlimited low-pressure practice on her own schedule.

**이상우, 44, 기업 HR.** An L&D manager rolling out Ringle's B2B solution to employees. Wants measurable speaking assessment, managed delivery, and a vendor that feels premium enough to put in front of executives.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no lessons booked)** | White canvas. Single Ink Indigo (`#140f33`) line at body size explaining nothing is scheduled, with one indigo `#3c2bac` CTA to book. No clutter. |
| **Empty (no saved material)** | Muted (`#80839e`) single line: nothing saved yet, plus a path back to the material library. Calm and honest. |
| **Loading (tutor list / schedule)** | Skeleton rows on lilac tint `#eeebfa` at final card dimensions, 12px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (AI speaking compute)** | Inline progress within the tool surface; previous content stays visible. |
| **Error (booking failed)** | Inline message in Ink Indigo with a plain-language explanation and a retry. States the next step, never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "필수". |
| **Success (lesson booked)** | Brief inline confirmation in calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#eeebfa` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Muted (`#80839e`) text on reduced-opacity surface; indigo actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 340ms | Page-level transitions, hero/band reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, bands, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and composed — consistent with the calm, intellectual aesthetic. Product bands fade-and-rise into view at `motion-standard / ease-enter`; CTAs respond to press with a subtle scale/opacity shift. No bounce or spring — a career-grade learning product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-11) via playwright getComputedStyle on https://www.ringleplus.com
and https://www.ringleplus.com/ko/student/landing/home:
- Hero H1 "영어는 실전처럼. 명문대 튜터와의 1:1 맞춤 화상영어" — Pretendard JP ExtraBold 52px / 800 / color rgb(20,15,51) #140f33
- Hero sub-H3 "꿈꾸던 영어실력과 커리어를 만드는 일하는 사람을 위한 영어, 링글" — Pretendard JP Medium 20px / 500 / rgb(128,131,158) #80839e
- Primary CTA "링글 시작하기" — bg rgb(60,43,172) #3c2bac / radius 8px / 61px tall
- Dark band "더 알아보기" — bg rgb(18,11,96) #120b60 / radius 8px / 60px
- Teens CTA "틴즈 더 알아보기" — bg rgb(68,149,255) #4495ff
- B2B proof "200+개 이상의 기업이 링글과 함께 하고 있습니다" — ExtraBold 40px #140f33
- box-shadow: none across hero/nav/headings/CTAs (flat system on inspected nodes)

Voice samples (§10) are verbatim from live surfaces (homepage hero, hero sub-line, B2B proof headline).

Brand narrative (§11): Ringle (링글잉글리시에듀케이션서비스) founded 2015 by co-founders
이성파 (Lee Sungpah) and 이승훈 (Lee Seunghoon), who met in the Stanford MBA program; stated
mission "영어 장벽이 없는 세상을 만드는 것". These are widely documented public facts (founder
interviews, company press); the "30%+ revenue outside Korea" figure appears on Ringle's own
company/team page (https://www.ringleplus.com/en/company/4). Details beyond the inspected
homepage are general public knowledge, not directly quoted from a single verified statement in
this turn.

Personas (§13) are fictional archetypes informed by publicly observable Ringle user segments
(Korean working professionals, global-role jobseekers, corporate L&D buyers). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "premium and intellectual, not playful", "calm bands over
decorative depth") are editorial readings connecting Ringle's observed design to its
positioning, not directly sourced Ringle statements.
-->
