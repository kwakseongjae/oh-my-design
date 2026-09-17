---
id: teamsparta
name: Team Sparta
display_name_kr: 팀스파르타 (스파르타코딩클럽)
country: KR
category: education
homepage: "https://spartacodingclub.kr/"
primary_color: "#fa0030"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=spartaclub.kr&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live signature red (#fa0030) used on the full-bleed conversion band, numbered step accents, and eyebrow labels; ink near-black (#0c0e13) for headings; deep red (#d90b32), teal-dark (#0b495c) and purple (#8723ba) are the hero course-card backgrounds. Near-flat system (box-shadow: none)."
  colors:
    primary: "#fa0030"
    primary-deep: "#d90b32"
    coral: "#ff4660"
    red-alt: "#e8354e"
    ink: "#0c0e13"
    canvas: "#ffffff"
    surface: "#f2f6f8"
    surface-cyan: "#ecf8fc"
    teal-dark: "#0b495c"
    teal: "#249eb3"
    cyan: "#93e6f5"
    purple: "#8723ba"
    body: "#41414b"
    muted: "#858793"
    faint: "#a4a7b0"
    hairline: "#e0e1e5"
    on-primary: "#ffffff"
    tag-green: "#66d417"
    tag-green-bg: "#f0ffeb"
    tag-orange: "#ff7300"
    tag-orange-bg: "#ffeac7"
  typography:
    family: { display: "Pretendard Bold", body: "Pretendard", accent: "Gmarket Sans" }
    display-step:  { size: 40, weight: 700, lineHeight: 1.30, use: "Numbered step display (1/2/3), Pretendard Bold" }
    section:       { size: 32, weight: 700, lineHeight: 1.375, use: "Hero / section H1, Pretendard Bold" }
    subsection:    { size: 28, weight: 700, lineHeight: 1.36, use: "Feature section heads, Pretendard Bold" }
    title:         { size: 22, weight: 700, lineHeight: 1.45, use: "Card / decorative titles" }
    body-lg:       { size: 18, weight: 700, lineHeight: 1.44, use: "Lead / sub-head copy" }
    eyebrow:       { size: 15, weight: 700, lineHeight: 1.47, tracking: -0.2, use: "Eyebrow label (e.g. Total Career Solution), red" }
    body:          { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, Pretendard" }
    caption:       { size: 12, weight: 500, lineHeight: 1.40, use: "Tags, nav, metadata" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 6, lg: 8, xl: 12, pill: 99, full: 9999 }
  shadow:
    none: "none"
    inset: "rgba(255,255,255,0.12) 0px 0px 2px 0px inset"
  components:
    cta-primary: { type: button, bg: "#fa0030", fg: "#ffffff", radius: "8px", padding: "10px 16px", height: "42px", font: "16px / 700", use: "Primary enrollment CTA / red conversion band action" }
    cta-enterprise: { type: button, bg: "#0b495c", fg: "#ffffff", radius: "6px", padding: "10px 12px", height: "40px", font: "16px / 700", use: "기업교육 알아보기 — secondary teal-dark CTA" }
    cta-dark: { type: button, bg: "#0c0e13", fg: "#ffffff", radius: "6px", padding: "8px 12px", height: "36px", font: "14px / 600", use: "후기 자세히 보기 — dark ink button" }
    login-chip: { type: button, bg: "#ffffff", fg: "#0c0e13", border: "1px solid #e0e1e5", radius: "4px", padding: "8px 11px", height: "36px", font: "14px / 500", use: "Header login chip" }
    course-card: { type: card, bg: "#ffffff", radius: "8px", padding: "24px", use: "Course catalog card, white on canvas, no shadow" }
    surface-card: { type: card, bg: "#f2f6f8", radius: "12px", padding: "16px", use: "Info / summary card on tinted surface" }
    tag-green: { type: badge, bg: "#f0ffeb", fg: "#66d417", radius: "4px", padding: "0 4px", font: "12px / 500", use: "국비지원 category tag" }
    tag-orange: { type: badge, bg: "#ffeac7", fg: "#ff7300", radius: "4px", padding: "0 4px", font: "12px / 500", use: "NEW category tag" }
    nav-link: { type: tab, fg: "#0c0e13", font: "16px / 600", active: "text #fa0030", use: "Top nav item, red on active" }
    challenge-chip: { type: badge, bg: "#249eb3", fg: "#ffffff", radius: "4px", padding: "6px 12px", font: "12px / 600", use: "챌린지형 강의 course-type chip" }
  components_harvested: true
---

# Design System Inspiration of Team Sparta

## 1. Visual Theme & Atmosphere

Team Sparta (팀스파르타), the operator of 스파르타코딩클럽 (Spartacodingclub), runs Korea's most recognizable coding-education brand, and its site reads like a high-energy motivational campaign rather than a quiet courseware catalog. The canvas is pure white (`#ffffff`) broken up by big, saturated, full-bleed color blocks — a signature electric red (`#fa0030`), a deep red (`#d90b32`), a teal-dark (`#0b495c`), and a vivid purple (`#8723ba`) — each carrying a course category as an oversized card. Headlines sit in a near-black ink (`#0c0e13`), never pure black on body copy, keeping the page grounded and readable between the loud color bands. The overall impression is bootcamp adrenaline made tasteful: bold, confident, and unafraid of color, but disciplined by a clean grid and a single dominant accent.

The typographic personality is Korean-product-modern: every headline runs in **Pretendard Bold (weight 700)** — 40px on the numbered step displays, 32px on section titles, 28px on feature heads — with **Gmarket Sans** appearing as an occasional display accent. Body and UI text stay in **Pretendard** at weight 400, the de-facto Korean product font optimized for dense hangul legibility. The signature red is reserved for high-intent moments: the full-bleed conversion band ("지금 스파르타클럽에서 잠재력을 깨우세요"), the numbered "1 / 2 / 3" step markers, and the small red eyebrow labels ("Total Career Solution") — so the eye is trained to read `#fa0030` as "this is where the momentum is."

What distinguishes Team Sparta from typical ed-tech is its confidence with flat, shadowless depth. Live inspection found `box-shadow: none` across the hero, nav, headings, catalog cards, and tags — separation comes from bold background color and thin `#e0e1e5` hairlines, not elevation. Interactive chrome is compact and pragmatic: 4px-6px radii on buttons and chips, 8px-12px on cards, 16px on the big hero course cards, and occasional 99px pills. Category tags form a pastel-on-saturated system — a light green tint (`#f0ffeb`) with green label (`#66d417`), a light orange tint (`#ffeac7`) with orange label (`#ff7300`) — that keeps a dense catalog scannable without shouting.

**Key Characteristics:**
- Pretendard Bold (weight 700) for every headline; Gmarket Sans as an occasional display accent
- Pretendard weight 400 for body and dense UI text — hangul-optimized
- Signature electric red (`#fa0030`) reserved for the conversion band, numbered steps, and eyebrow labels
- Near-black ink (`#0c0e13`) for headings instead of pure black
- Full-bleed saturated color blocks — deep red (`#d90b32`), teal-dark (`#0b495c`), purple (`#8723ba`), teal (`#249eb3`), light cyan (`#93e6f5`)
- Flat, shadowless system — `#e0e1e5` hairlines and color blocks do the separating
- Pastel-on-saturated category tags — green (`#f0ffeb` / `#66d417`), orange (`#ffeac7` / `#ff7300`)
- Compact geometry — 4px-6px buttons, 8px-12px cards, 16px hero cards, 99px pills

## 2. Color Palette & Roles

### Primary
- **Sparta Red** (`#fa0030`): The signature brand color and single "action" red. Used on the full-bleed conversion band, the numbered step accents, the red eyebrow labels, and the primary enrollment CTA.
- **Deep Red** (`#d90b32`): A darker, richer red used as a full hero course-card background — the "취업 캠프" block.
- **Coral** (`#ff4660`): A lighter, softer red for secondary accents, hover tints, and highlight text.
- **Red Alt** (`#e8354e`): An intermediate red seen in accent text and gradient transitions between the reds.

### Ink & Neutral
- **Ink** (`#0c0e13`): Primary heading, nav, and strong-label color — a near-black with a faint blue undertone, warmer than pure black. Also the dark ink button background.
- **Pure White** (`#ffffff`): Page background, white course cards, and text on saturated blocks.
- **Body Slate** (`#41414b`): Secondary body copy and descriptions.
- **Muted Slate** (`#858793`): Tertiary text, metadata, captions.
- **Faint Grey** (`#a4a7b0`): Lowest-emphasis labels, placeholder, disabled text.
- **Hairline** (`#e0e1e5`): Thin borders, dividers, and card outlines — the primary separation device in the shadowless system.

### Surface
- **Surface Grey** (`#f2f6f8`): Cool-grey tinted surface for summary/info cards.
- **Surface Cyan** (`#ecf8fc`): A very light cyan tint for alternating section bands and soft feature blocks.

### Category Color Blocks
- **Teal-Dark** (`#0b495c`): Full course-card background ("AI 입문") and the enterprise-education CTA button.
- **Teal** (`#249eb3`): Course-type chip background ("챌린지형 강의").
- **Purple** (`#8723ba`): Full course-card background ("직장인 스킬업").
- **Light Cyan** (`#93e6f5`): Decorative heading color on dark bands ("도전하는 누구나...").

### Category Tags
- **Tag Green** (`#66d417`) on **Green Tint** (`#f0ffeb`): "국비지원" (gov-funded) tag.
- **Tag Orange** (`#ff7300`) on **Orange Tint** (`#ffeac7`): "NEW" tag.
- **On-Primary** (`#ffffff`): Label color on red / saturated backgrounds.

## 3. Typography Rules

### Font Family
- **Display**: `Pretendard Bold` (weight 700) — carries every headline, from the 40px numbered steps down to the 18px lead copy.
- **Body**: `Pretendard` (weight 400) — the document default for body copy and dense UI text.
- **Accent**: `Gmarket Sans` — an occasional display accent font (G마켓 산스) used on select promotional headings.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Step Display | Pretendard Bold | 40px (2.50rem) | 700 | 1.30 (52px) | normal | Numbered "1 / 2 / 3" step markers, in red `#fa0030` |
| Section Heading | Pretendard Bold | 32px (2.00rem) | 700 | 1.375 (44px) | normal | Hero / section H1 |
| Sub-section | Pretendard Bold | 28px (1.75rem) | 700 | 1.36 (38px) | normal | Feature section heads |
| Title | Pretendard Bold | 22px (1.38rem) | 700 | 1.45 (32px) | normal | Card / decorative titles |
| Lead | Pretendard Bold | 18px (1.13rem) | 700 | 1.44 (26px) | normal | Lead / sub-head copy |
| Eyebrow | Pretendard Bold | 15px (0.94rem) | 700 | 1.47 (22px) | -0.2px | Small red eyebrow labels |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text |
| Caption | Pretendard | 12px (0.75rem) | 500 | 1.40 | normal | Tags, nav, metadata |

### Principles
- **Bold everywhere it persuades**: display, section, and lead text all run at Pretendard Bold 700 — the weight itself is the hierarchy signal.
- **Ink for reading, red for action**: headings and body sit in ink `#0c0e13`; the red `#fa0030` is spent only on numbers, eyebrows, and CTAs.
- **Hangul-first sizing**: body sits at a comfortable 16px with 1.5 line-height for dense Korean curriculum copy.
- **One display voice**: Pretendard Bold owns headlines; Gmarket Sans is a rare accent, never the workhorse.

## 4. Component Stylings

### Buttons

**Primary Enrollment CTA**
- Background: `#fa0030`
- Text: `#ffffff`
- Radius: 8px
- Padding: 10px 16px
- Height: 42px
- Font: 16px Pretendard Bold weight 700
- Use: Primary enrollment action ("무료 수강신청") and the full-bleed red conversion band CTA

**Enterprise CTA (Teal-Dark)**
- Background: `#0b495c`
- Text: `#ffffff`
- Radius: 6px
- Padding: 10px 12px
- Height: 40px
- Font: 16px Pretendard Bold weight 700
- Use: "기업교육 알아보기" secondary call-to-action

**Dark Ink Button**
- Background: `#0c0e13`
- Text: `#ffffff`
- Radius: 6px
- Padding: 8px 12px
- Height: 36px
- Font: 14px Pretendard weight 600
- Use: "후기 자세히 보기" low-emphasis dark button

**Login Chip**
- Background: `#ffffff`
- Text: `#0c0e13`
- Border: 1px solid `#e0e1e5`
- Radius: 4px
- Padding: 8px 11px
- Height: 36px
- Font: 14px Pretendard weight 500
- Use: Header login chip

### Cards & Containers

**Course Card (White)**
- Background: `#ffffff`
- Text: `#0c0e13`
- Radius: 8px
- Padding: 24px
- Use: Course catalog card on white canvas — no shadow

**Summary Card (Tinted)**
- Background: `#f2f6f8`
- Text: `#0c0e13`
- Radius: 12px
- Padding: 16px
- Use: Info / summary card sitting on the cool-grey surface

### Badges

**Category Tag — Gov-Funded**
- Background: `#f0ffeb`
- Text: `#66d417`
- Radius: 4px
- Padding: 0px 4px
- Font: 12px Pretendard weight 500
- Use: "국비지원" (gov-funded) course tag

**Category Tag — New**
- Background: `#ffeac7`
- Text: `#ff7300`
- Radius: 4px
- Padding: 0px 4px
- Font: 12px Pretendard weight 500
- Use: "NEW" course tag

**Course-Type Chip (Teal)**
- Background: `#249eb3`
- Text: `#ffffff`
- Radius: 4px
- Padding: 6px 12px
- Font: 12px Pretendard weight 600
- Use: "챌린지형 강의" course-type chip

### Navigation
- Background: `#ffffff`
- Text: `#0c0e13`
- Font: 16px Pretendard weight 600
- Active: red `#fa0030` text on active item
- Use: Top horizontal nav ("전체 강의", "재직자 캠프", "커뮤니티", "수강후기", "이벤트")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://spartacodingclub.kr/ ; https://spartaclub.kr/catalog/scc ; https://blog.career.spartaclub.kr/designer
**Tier 2 sources:** getdesign.md/teamsparta — 404 (also getdesign.md/spartacodingclub — 404); styles.refero.design/?q=team+sparta — not listed (only unrelated fuzzy matches)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: Hero course cards use a generous 32px 32px 48px padding; catalog cards use 24px; summary cards 16px

### Grid & Container
- Full-bleed saturated color bands stack vertically, each carrying a course category as an oversized 16px-radius card
- Course catalog uses a multi-column grid of 8px-radius white cards (~373px wide)
- Numbered "1 / 2 / 3" step sections walk the visitor through the value proposition
- The page closes on a full-width red (`#fa0030`) conversion band with a white enrollment CTA

### Whitespace Philosophy
- **Momentum over minimalism**: color blocks and bold headlines create energy; whitespace paces the sections rather than emptying them.
- **Flat segmentation**: sections separate by saturated background color and `#e0e1e5` hairlines, not by shadow.
- **Scannable density**: the catalog packs many course cards but stays legible via pastel category tags and consistent card geometry.

### Border Radius Scale
- Small (4px): tags, chips, small buttons, login chip
- Medium (6px): standard buttons (enterprise CTA, dark button)
- Large (8px): white course cards, primary CTA
- XL (12px): tinted summary cards
- Hero (16px): oversized full-color course cards
- Pill (99px): occasional fully-rounded pills and media frames

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | `box-shadow: none` | Page background, headings, most surfaces |
| Color block (Level 1) | Saturated background fill (`#fa0030` / `#0b495c` / `#8723ba` / `#d90b32`) | Section / course-card separation |
| Hairline (Level 2) | `1px solid #e0e1e5` border | White card outlines, dividers |
| Inset (rare) | `rgba(255,255,255,0.12) 0px 0px 2px 0px inset` | Faint inner edge on rounded media frames |

**Shadow Philosophy**: Team Sparta is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, catalog cards, and category tags. Depth and grouping come from bold, full-bleed color blocks and thin `#e0e1e5` hairlines — never elevation. This keeps the high-energy marketing surface feeling flat, fast, and mobile-native. When emphasis is needed the system reaches for color (the red `#fa0030` or a saturated block), not a drop shadow.

## 7. Do's and Don'ts

### Do
- Use Pretendard Bold (weight 700) for every headline — it's the brand's display voice
- Reserve the red `#fa0030` for high-intent moments: the conversion band, numbered steps, eyebrow labels, and the primary CTA
- Use near-black ink `#0c0e13` for headings and body instead of pure black
- Separate sections with saturated color blocks and `#e0e1e5` hairlines, not shadows
- Use full-bleed color bands (`#d90b32`, `#0b495c`, `#8723ba`) to carry course categories
- Keep the pastel-on-saturated tag system consistent — green (`#f0ffeb` / `#66d417`), orange (`#ffeac7` / `#ff7300`)
- Keep geometry compact — 4px-6px on buttons/chips, 8px-12px on cards, 16px on hero cards
- Use white (`#ffffff`) course cards on the white canvas, relying on hairlines for definition

### Don't
- Spread the red `#fa0030` across decorative elements — it dilutes the single-action signal
- Use pure black for text — reserve near-black ink `#0c0e13`
- Add drop shadows for elevation — Team Sparta is a flat, shadowless system
- Set headlines in a light weight — display is always Pretendard Bold (700)
- Mix in a competing accent color against the red — the reds and category blocks are the palette
- Use Gmarket Sans for body text — it is a rare display accent only
- Overload a card with more than one category-tag color role at a time

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, color bands stack, hero cards full-width |
| Tablet | 640-1024px | 2-up course cards, moderate padding |
| Desktop | 1024-1440px | Full layout, multi-column catalog grid, full-bleed bands |

### Touch Targets
- Primary CTA at 42px height, comfortable 10px 16px padding
- Enterprise CTA at 40px, dark button at 36px height
- Category tags compact (0px 4px) but grouped with generous card padding for tap comfort

### Collapsing Strategy
- Hero color bands maintain full-bleed treatment; cards go full-width on mobile
- Catalog grid: multi-column → 2-up → single column stacked
- Numbered step sections stack vertically on narrow viewports
- The red conversion band stays full-width across all breakpoints

### Image Behavior
- Course thumbnails and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain their radius (8px catalog, 16px hero) across breakpoints
- Media frames may use the faint inset edge and larger 30px-50px radii

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / action: Sparta Red (`#fa0030`)
- Deep red block: (`#d90b32`)
- Coral accent: (`#ff4660`)
- Heading / body ink: Ink (`#0c0e13`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f2f6f8`), Surface Cyan (`#ecf8fc`)
- Teal-dark block / enterprise CTA: (`#0b495c`)
- Teal chip: (`#249eb3`)
- Purple block: (`#8723ba`)
- Light cyan decorative: (`#93e6f5`)
- Body text: Slate (`#41414b`), muted (`#858793`), faint (`#a4a7b0`)
- Hairline: (`#e0e1e5`)
- Tags: green (`#66d417` on `#f0ffeb`), orange (`#ff7300` on `#ffeac7`)

### Example Component Prompts
- "Create a hero on white background with Pretendard Bold. Section H1 at 32px weight 700, line-height 44px, color #0c0e13. Below it, oversized 16px-radius course cards with full color backgrounds (#d90b32, #0b495c, #8723ba), white heading text, 32px 32px 48px padding."
- "Build a red conversion band: full-width #fa0030 background, 80px top / 40px bottom padding, white Pretendard Bold headline, and a white 8px-radius CTA button (#ffffff bg, red text, 10px 16px padding)."
- "Design a course catalog card: white #ffffff background, 8px radius, 24px padding, no shadow, 1px solid #e0e1e5 hairline. Title 22px Pretendard Bold #0c0e13, body 16px Pretendard #41414b. Add category tags: green (#f0ffeb bg, #66d417 text) and orange (#ffeac7 bg, #ff7300 text), 4px radius, 0 4px padding, 12px."
- "Create top nav: white 56px header, Pretendard 16px weight 600 links in #0c0e13, red #fa0030 on active. Enterprise CTA right-aligned: #0b495c background, white text, 6px radius."

### Iteration Guide
1. Pretendard Bold (700) for every headline; Pretendard 400 for body
2. Red `#fa0030` is the single action color — spend it on CTAs, numbers, eyebrows only
3. No shadows — separate with color blocks and `#e0e1e5` hairlines
4. Ink `#0c0e13` for text, never pure black
5. Compact geometry: 4px-6px buttons, 8px-12px cards, 16px hero cards
6. Category tags are pastel-bg + saturated-label pairs; keep them consistent
7. Full-bleed saturated bands carry course categories; the page ends on a red band

---

## 10. Voice & Tone

Team Sparta's voice is **energetic, encouraging, and plain-spoken** — a motivational coach that removes the intimidation from learning to build software. The brand's positioning "AI시대, 미래를 돌파하는 힘" ("the power to break through the future in the AI era") and the recurring "누구나 잠재력을 깨워 나아가도록" ("so anyone can awaken their potential and move forward") set the register: high-agency, inclusive, forward-leaning, never elitist. Copy treats the learner as someone on the verge of doing something big, not a student to be lectured.

| Context | Tone |
|---|---|
| Hero headlines | Aspirational, momentum-driven. "AI시대, 미래를 돌파하는 힘." Confident, inclusive. |
| Course / section labels | Plain and outcome-first. "AI 시대 취업 캠프", "직장인 스킬업", "누구나 쉽게". |
| CTAs | Direct, low-friction. "무료 수강신청", "기업교육 알아보기", "후기 자세히 보기". |
| Curriculum copy | Benefit-first, jargon decoded — explains what the learner will be able to do. |
| Enterprise copy | Credible and proof-led. "대한민국 대표 기업들의 AI 교육도 스파르타입니다." |

**Voice samples (verbatim from live surfaces):**
- "도전하는 누구나 잠재력을 깨울 수 있도록" — decorative section heading, on the homepage. *(verified live 2026-07-02)*
- "맞춤형 AI 교육으로 IT 커리어의 모든 성장 과정을 함께해 보세요" — hero headline. *(verified live 2026-07-02)*
- "지금 스파르타클럽에서 잠재력을 깨우세요" — red conversion-band CTA copy. *(verified live 2026-07-02)*

**Forbidden register**: fear-based "you'll fall behind" pressure, credential gatekeeping, undefined jargon left unexplained, cynical hype without a concrete outcome.

## 11. Brand Narrative

Team Sparta (팀스파르타) was founded in **2018** and built its reputation through **스파르타코딩클럽 (Spartacodingclub)**, which set out to make coding — long treated in Korea as the domain of a technical elite — accessible to complete beginners. The brand's founding conviction is captured in its recurring mission language: "각자의 삶에 소프트웨어라는 도구를 더해 나만의 큰일을 가꾸어 나아갈 수 있도록" ("so that everyone can add software as a tool to their life and grow their own big thing"). The Sparta name — evoking rigorous, high-intensity training — is the promise: an environment engineered to get ordinary people across the finish line, "온라인 강의를 끝까지 완주하는 경험" (the experience of actually completing an online course).

The product matured from beginner coding classes into a full "Total Career Solution" — bootcamps (내일배움캠프 / 항해), professional up-skilling (직장인 스킬업), AI-era job camps, 1:1 mentoring and career coaching, and corporate training for Korea's largest companies. The design surface mirrors this breadth: many course categories, each carried by its own saturated full-bleed color block, unified by a single red action color and a flat, fast, mobile-native aesthetic.

What Team Sparta refuses, visible in its design and copy: the dry, intimidating chrome of institutional e-learning, and the passive lecture-hall framing of "study." What it embraces: bootcamp energy made tasteful — bold Pretendard headlines, loud but disciplined color, and copy that insists "누구나" (anyone) can break through. Internally the design team frames itself as **"디자인팀은 사용자 대변인이다" (the design team is the user's advocate)**, guided by the company value **"빠우성"** — 빠름 (speed), 와우 (wow), 진정성 (authenticity) — with a stated emphasis on authenticity.

## 12. Principles

1. **Anyone can break through.** The brand exists to make software skills accessible to non-experts. *UI implication:* keep entry copy plain and outcome-first; never gate the value proposition behind jargon or credentials.
2. **One action, one red.** The red `#fa0030` means "start here." *UI implication:* reserve the saturated red for CTAs, numbered steps, and eyebrows so the next move is never ambiguous.
3. **Momentum by color, not clutter.** Energy comes from bold full-bleed blocks, not decoration. *UI implication:* use saturated bands (`#0b495c`, `#8723ba`, `#d90b32`) to segment and motivate; stay shadow-free.
4. **Bold where it persuades.** *UI implication:* Pretendard Bold 700 on every headline; the weight itself carries the drive.
5. **Speed, wow, authenticity (빠우성).** The company value made visible. *UI implication:* pages load fast and flat, moments of delight are earned, and claims are backed by real proof ("누적 수강생 1위", enterprise logos), not empty superlatives.
6. **The design team is the user's advocate.** *UI implication:* dense catalogs stay scannable (pastel category tags, consistent card geometry) so the learner — not the funnel — is served first.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Team Sparta / Spartacodingclub user segments (career-changers, working professionals up-skilling, gov-funded bootcamp students, enterprise L&D buyers), not individual people.*

**김도현, 27, 서울.** A non-CS graduate preparing for a career change into tech. Enrolled in an AI 취업 캠프 after browsing the 국비지원 (gov-funded) options. Values that the curriculum is outcome-first and the copy never assumes prior coding knowledge. Chose Sparta because it felt like it would push him to actually finish.

**이서연, 34, 판교.** A marketer up-skilling with 직장인 스킬업 to add AI tools to her workflow after hours. Appreciates the plain "퇴근 후" framing and the bold, motivating headlines that make studying feel like momentum rather than homework.

**박준호, 41, 기업 인사팀.** An L&D manager evaluating "기업교육" for his company's employees. Trusts the brand because it leads with proof — "대한민국 대표 기업들의 AI 교육도 스파르타입니다" — and a credible Total Career Solution rather than vague promises.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no course results)** | White canvas. Single Ink (`#0c0e13`) line at body size explaining no matching courses, with one red (`#fa0030`) CTA to adjust filters. No illustration clutter. |
| **Empty (saved list, none yet)** | Muted Slate (`#858793`) single line: nothing saved yet, plus a path back to the catalog. Calm and honest. |
| **Loading (catalog fetch)** | Skeleton course cards on white at final 8px-radius dimensions. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place filter)** | Previous cards stay visible; a subtle red (`#fa0030`) progress indicator signals the refresh. |
| **Error (fetch failed)** | Inline message in Ink with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the input in a warm error tone (coral `#ff4660`); describes what's valid, not just "필수". |
| **Success (enrollment complete)** | Brief inline confirmation in an encouraging tone; next-step (수강 시작) linked immediately below. No gratuitous emoji. |
| **Skeleton** | Surface-grey (`#f2f6f8`) blocks at final dimensions, matching card radius, flat pulse. |
| **Disabled** | Faint Grey (`#a4a7b0`) text on reduced-opacity surface; the red CTA fades rather than turning grey, to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus |
| `motion-standard` | 220ms | Card / section reveal, sheet, dropdown |
| `motion-slow` | 340ms | Page-level transitions, hero band reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, chips, sections |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is energetic but controlled — consistent with the bold, flat aesthetic. Course cards and color bands fade-in from below at `motion-standard / ease-enter` as the visitor scrolls; the red CTA responds to press with a subtle scale/opacity shift. Numbered step sections may reveal sequentially to reinforce the "1 → 2 → 3" progression. No excessive bounce or spring — the energy comes from color and copy, not novelty motion. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and scroll reveals become immediate; the site stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on
https://spartacodingclub.kr/ (301 → spartaclub.kr) and https://spartaclub.kr/catalog/scc:
- Signature red #fa0030 (rgb 250,0,48) — full-bleed conversion band, numbered "1/2/3" steps, "Total Career Solution" eyebrow
- Ink #0c0e13 (rgb 12,14,19) headings; Pretendard Bold 700 across all headlines; Gmarket Sans accent
- Hero course-card backgrounds: deep red #d90b32, teal-dark #0b495c, purple #8723ba; 16px radius
- box-shadow: none across hero/nav/headings/cards (flat system); #e0e1e5 hairlines
- Category tags: green #66d417 on #f0ffeb, orange #ff7300 on #ffeac7; 4px radius
- Live voice samples: "도전하는 누구나 잠재력을 깨울 수 있도록", "맞춤형 AI 교육으로 IT 커리어의 모든 성장 과정을 함께해 보세요", "지금 스파르타클럽에서 잠재력을 깨우세요"
- document.title: "스파르타클럽 | AI시대, 미래를 돌파하는 힘"

Brand values / philosophy (§10-12) sourced from Team Sparta's official design-team blog
https://blog.career.spartaclub.kr/designer:
- Company value "빠우성" = 빠름 (speed) / 와우 (wow) / 진정성 (authenticity), emphasis on authenticity
- Design-team self-identity "디자인팀은 사용자 대변인이다" (the design team is the user's advocate)
- Mission framing "각자의 삶에 소프트웨어라는 도구를 더해 나만의 큰일을 가꾸어 나아갈 수 있도록"
  and "누구나 잠재력을 깨워 나아가도록" (from spartaclub.kr homepage copy)

Founding year (2018) and product breadth (Spartacodingclub, 내일배움캠프/항해 bootcamps, 직장인 스킬업,
기업교육) are widely documented public facts about Team Sparta; not directly quoted from a single
verified statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Team Sparta user segments
(career-changers, working professionals, gov-funded bootcamp students, enterprise L&D). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "one action, one red", "momentum by color, not clutter", "bootcamp energy
made tasteful") are editorial readings connecting Team Sparta's observed design to its positioning,
not directly sourced statements.
-->
