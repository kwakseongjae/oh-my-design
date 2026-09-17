---
id: codeit
name: Codeit
display_name_kr: 코드잇
country: KR
category: education
homepage: "https://www.codeit.kr"
primary_color: "#9933ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=codeit.kr&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = live CTA purple (#9933ff) across home/subscription/explore; brighter #8f00ff + deep #760dde are emphasis violets; recommended-plan card fills lavender #b363fd. Text is warm near-black ink #333236, never pure black. Display H1 is Pretendard 800; all other headings + body are SpoqaHanSansNeo."
  colors:
    primary: "#9933ff"
    primary-bright: "#8f00ff"
    primary-deep: "#760dde"
    lavender: "#b363fd"
    lavender-soft: "#c47cfd"
    pink: "#ff52b7"
    ink: "#333236"
    night: "#080c14"
    plum: "#3d1457"
    canvas: "#ffffff"
    surface: "#f6f6f8"
    surface-violet: "#f8ecff"
    tint-violet: "#f3e1fd"
    surface-pink: "#ffebf7"
    on-primary: "#ffffff"
  typography:
    family: { display: "Pretendard", text: "SpoqaHanSansNeo" }
    hero:       { size: 68, weight: 800, lineHeight: 1.21, tracking: -1.5, use: "Hero H1, Pretendard ExtraBold (5분마다 인생이 바뀐다)" }
    display:    { size: 48, weight: 700, lineHeight: 1.29, tracking: -1.0, use: "Large section titles, SpoqaHanSansNeo Bold" }
    section:    { size: 32, weight: 700, lineHeight: 1.38, tracking: -0.3, use: "Section headings" }
    card-title: { size: 28, weight: 700, lineHeight: 1.43, tracking: -0.3, use: "Card / feature heads (H3)" }
    subhead:    { size: 18, weight: 700, lineHeight: 1.67, tracking: -0.3, use: "Small headings, testimonial titles" }
    body:       { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, SpoqaHanSansNeo" }
    button:     { size: 16, weight: 500, lineHeight: 1.50, use: "Standard CTA label" }
    nav:        { size: 13, weight: 500, lineHeight: 1.50, use: "Nav links and chips" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 48 }
  rounded: { sm: 6, md: 8, base: 12, lg: 20, xl: 24, pill: 9999 }
  shadow:
    card: "rgba(0,0,0,0.08) 0px 2px 14px"
    elevated: "rgba(0,0,0,0.2) 0px 4px 24px"
    none: "none"
  components:
    button-primary: { type: button, bg: "#9933ff", fg: "#ffffff", radius: "10px", padding: "10px 32px", height: "48px", font: "18px / 700 SpoqaHanSansNeo", use: "Hero primary CTA — 무료 체험 시작하기 / 멤버십 시작하기" }
    button-chip: { type: button, bg: "#9933ff", fg: "#ffffff", radius: "6px", padding: "6px 12px 5px", height: "32px", font: "13px / 500 SpoqaHanSansNeo", use: "Nav membership chip — 멤버십 안내" }
    button-pill: { type: button, bg: "#9933ff", fg: "#ffffff", radius: "22px", padding: "8px 16px", height: "43px", font: "16px / 500 SpoqaHanSansNeo", use: "Rounded inline CTA — 지원 기기" }
    button-ghost: { type: button, fg: "#333236", radius: "8px", padding: "8px 24px", height: "45px", border: "1px solid rgba(51,50,54,0.2)", font: "16px / 500 SpoqaHanSansNeo", use: "Outline secondary CTA — 모든 IT 강의 보러가기" }
    button-neutral: { type: button, bg: "#f6f6f8", fg: "#333236", radius: "8px", padding: "14px 0px", height: "55px", font: "16px / 400 SpoqaHanSansNeo", use: "Neutral full-width action — 이메일로 로그인하기" }
    card-plan: { type: card, bg: "#ffffff", radius: "24px", shadow: "rgba(0,0,0,0.08) 0px 2px 14px", border: "2px solid rgba(51,50,54,0.1)", use: "Standard membership plan card" }
    card-highlight: { type: card, bg: "#b363fd", fg: "#ffffff", radius: "24px", shadow: "rgba(0,0,0,0.2) 0px 4px 24px", use: "Recommended / featured plan card" }
    card-course: { type: card, bg: "#ffffff", radius: "20px", border: "1px solid rgba(51,50,54,0.15)", use: "Course card on the explore grid" }
    badge-count: { type: badge, bg: "#9933ff", fg: "#ffffff", radius: "6px", padding: "0px 6px", height: "28px", font: "15px / 500 SpoqaHanSansNeo", use: "Cart / notification counter" }
    input-search: { type: input, bg: "#f6f6f8", fg: "#333236", radius: "21px", padding: "8px 16px", height: "40px", font: "14px SpoqaHanSansNeo", use: "Course search field — 어떤 강의를 찾고 있나요?" }
    nav-tab: { type: tab, fg: "#333236", active: "solid #333236 label", use: "Top nav / explore category tabs — inactive at 80% opacity, active solid ink" }
  components_harvested: true
---

# Design System Inspiration of Codeit

## 1. Visual Theme & Atmosphere

Codeit (코드잇) is Korea's micro-learning-first IT education platform, and its homepage reads like a friendly, energetic consumer product rather than a dry e-learning portal. The canvas is pure white (`#ffffff`) broken up by soft cool-grey (`#f6f6f8`) and pale violet (`#f8ecff`) section bands, so the page feels open and modern. Text sits in a warm near-black ink (`#333236`) — deliberately not pure black — which keeps the long Korean copy readable and approachable. The single saturated brand color is an electric purple (`#9933ff`) that the system trains the eye to read as "the action": it appears on the membership chip in the nav, the hero "무료 체험 시작하기" button, and every plan CTA, and almost nowhere else.

The typographic personality is a two-font split. The hero headline "5분마다 인생이 바뀐다" runs in **Pretendard ExtraBold (weight 800)** at a commanding 68px with very tight `-1.5px` tracking — a bold, declarative promise. Everything else — section titles, card heads, navigation, and all body copy — is set in **SpoqaHanSansNeo**, the warm, rounded Korean sans that gives Codeit its distinctly soft, encouraging voice. Section titles land at 48px / 32px weight 700, card heads at 28px weight 700, and body settles to a comfortable 16px weight 400 at 1.5 line-height for dense hangul reading. The result is "bold where it motivates, calm where it teaches."

What distinguishes Codeit from typical fintech-minimal Korean sites is its playful use of color and shape. Beyond the core purple it reaches for a brighter violet (`#8f00ff`), a deep violet text accent (`#760dde`), lavenders (`#b363fd`, `#c47cfd`), and even a warm pink (`#ff52b7`) for highlight moments, plus dark immersive bands in night (`#080c14`) and plum (`#3d1457`). Geometry is generous and rounded: cards at 20–24px radius, pill chips at full radius, and CTAs in a 6–10px-to-22px range. Depth is mostly flat — the homepage is nearly shadowless — but the subscription page lifts plan cards with a soft `rgba(0,0,0,0.08) 0px 2px 14px` shadow and the recommended (lavender `#b363fd`) card with a stronger `rgba(0,0,0,0.2) 0px 4px 24px`. Supporting tints — violet `#f3e1fd` cards and pink `#ffebf7` blocks — keep the palette warm and friendly.

**Key Characteristics:**
- Single saturated purple (`#9933ff`) reserved almost entirely for the primary CTA / action
- Warm near-black ink (`#333236`) for text instead of pure black
- Two-font split: Pretendard ExtraBold (800) for the hero, SpoqaHanSansNeo for everything else
- Tight negative tracking on display type (-1.5px at 68px, -1px at 48px)
- Rounded, friendly geometry — 20–24px cards, pill chips, 6–10px CTAs
- Mostly flat depth; soft shadows appear only on plan cards
- A wide, playful violet-to-pink accent family (`#8f00ff`, `#760dde`, `#b363fd`, `#c47cfd`, `#ff52b7`)
- Dark immersive bands in night (`#080c14`) and plum (`#3d1457`) for feature storytelling

## 2. Color Palette & Roles

### Primary & Accent
- **Codeit Purple** (`#9933ff`): The single dominant brand and action color. Every primary CTA — the nav "멤버십 안내" chip, the hero "무료 체험 시작하기", plan "멤버십 시작하기" — uses this electric purple.
- **Bright Violet** (`#8f00ff`): A more saturated violet used on the subscription surface for emphasis accents and price highlights.
- **Deep Violet** (`#760dde`): A darker violet for active / pressed link text and emphasis labels on light backgrounds.
- **Lavender** (`#b363fd`): The fill of the highlighted / recommended membership card.
- **Soft Lavender** (`#c47cfd`): A lighter lavender for decorative tints, gradient stops, and secondary accents.
- **Pink** (`#ff52b7`): A warm pink accent used sparingly for playful highlights and tags.

### Ink & Dark
- **Ink** (`#333236`): The signature warm near-black for all body text and most headings — never pure black.
- **Night** (`#080c14`): The darkest section background for immersive dark feature bands.
- **Plum** (`#3d1457`): A deep purple card / section background for premium dark-on-violet moments.

### Surface & Neutral
- **Canvas** (`#ffffff`): The default page and card background.
- **Surface** (`#f6f6f8`): A cool, barely-there grey for segmented sections, the search field, and neutral buttons.
- **Violet Surface** (`#f8ecff`): A pale violet tint for soft branded section bands.
- **Violet Tint** (`#f3e1fd`): A slightly deeper violet tint for cards sitting on violet sections.
- **Pink Surface** (`#ffebf7`): A pale pink tint for warm highlight blocks.
- **On Primary** (`#ffffff`): Text and icons on the purple CTA.

## 3. Typography Rules

### Font Family
- **Display**: `Pretendard` — used for the hero H1 at ExtraBold (800). High-impact, declarative.
- **Text**: `SpoqaHanSansNeo` (with `Apple SD Gothic Neo`, `Noto Sans KR` fallbacks) — the workhorse for section titles, card heads, navigation, buttons, and all body copy. Bold (700) for headings, Regular (400) for body, Medium (500) for nav and buttons.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero | Pretendard | 68px (4.25rem) | 800 | 1.21 (82px) | -1.5px | Hero H1, ExtraBold |
| Display | SpoqaHanSansNeo | 48px (3.00rem) | 700 | 1.29 (62px) | -1.0px | Large section titles |
| Section | SpoqaHanSansNeo | 32px (2.00rem) | 700 | 1.38 (44px) | -0.3px | Section headings |
| Card Title | SpoqaHanSansNeo | 28px (1.75rem) | 700 | 1.43 (40px) | -0.3px | Card / feature heads (H3) |
| Subhead | SpoqaHanSansNeo | 18px (1.13rem) | 700 | 1.67 (30px) | -0.3px | Small headings, testimonial titles |
| Body | SpoqaHanSansNeo | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text |
| Button | SpoqaHanSansNeo | 16px (1.00rem) | 500 | 1.50 | normal | Standard CTA label |
| Nav | SpoqaHanSansNeo | 13px (0.81rem) | 500 | 1.50 | normal | Nav links and chips |

### Principles
- **Hero is Pretendard, the rest is Spoqa**: the only place Pretendard appears is the 68px ExtraBold hero; switching back to SpoqaHanSansNeo everywhere else keeps the system warm and consistent.
- **Bold display, regular body**: headings are weight 700–800; body is a quiet 400. Weight contrast carries the hierarchy.
- **Tracking tightens with size**: -1.5px at 68px, -1px at 48px, -0.3px on mid headings; body stays at normal tracking.
- **Hangul-comfortable body**: 16px / 1.5 line-height gives Korean paragraphs room to breathe inside content-dense lesson layouts.

## 4. Component Stylings

### Buttons

**Primary CTA (Hero)**
- Background: `#9933ff`
- Text: `#ffffff`
- Radius: 10px
- Padding: 10px 32px
- Height: 48px
- Font: 18px SpoqaHanSansNeo weight 700
- Use: Hero / page primary CTA ("무료 체험 시작하기", "멤버십 시작하기")

**Membership Chip (Nav)**
- Background: `#9933ff`
- Text: `#ffffff`
- Radius: 6px
- Padding: 6px 12px 5px
- Height: 32px
- Font: 13px SpoqaHanSansNeo weight 500
- Use: Compact purple chip in the top nav ("멤버십 안내")

**Pill CTA**
- Background: `#9933ff`
- Text: `#ffffff`
- Radius: 22px
- Padding: 8px 16px
- Height: 43px
- Font: 16px SpoqaHanSansNeo weight 500
- Use: Rounded inline CTA inside feature sections ("지원 기기")

**Ghost / Outline**
- Text: `#333236`
- Radius: 8px
- Padding: 8px 24px
- Height: 45px
- Border: 1px solid rgba(51,50,54,0.2)
- Font: 16px SpoqaHanSansNeo weight 500
- Use: Secondary outline CTA ("모든 IT 강의 보러가기", "전체 후기 보기")

**Neutral (Surface)**
- Background: `#f6f6f8`
- Text: `#333236`
- Radius: 8px
- Padding: 14px 0px
- Height: 55px
- Font: 16px SpoqaHanSansNeo weight 400
- Use: Full-width neutral action on grey surface ("이메일로 로그인하기")

### Inputs & Forms

**Course Search**
- Background: `#f6f6f8`
- Text: `#333236`
- Radius: 21px
- Padding: 8px 16px
- Height: 40px
- Font: 14px SpoqaHanSansNeo
- Use: Pill-shaped search field on the explore page ("어떤 강의를 찾고 있나요?")

### Cards & Containers

**Membership Plan Card**
- Background: `#ffffff`
- Radius: 24px
- Border: 2px solid rgba(51,50,54,0.1)
- Shadow: `rgba(0,0,0,0.08) 0px 2px 14px`
- Use: Standard plan card on the subscription page

**Recommended Plan Card**
- Background: `#b363fd`
- Text: `#ffffff`
- Radius: 24px
- Shadow: `rgba(0,0,0,0.2) 0px 4px 24px`
- Use: Featured / recommended plan, lifted and color-filled

**Course Card**
- Background: `#ffffff`
- Radius: 20px
- Border: 1px solid rgba(51,50,54,0.15)
- Use: Course card on the explore grid (flat, hairline outline)

### Badges

**Count Badge**
- Background: `#9933ff`
- Text: `#ffffff`
- Radius: 6px
- Padding: 0px 6px
- Height: 28px
- Font: 15px SpoqaHanSansNeo weight 500
- Use: Cart / notification counter

### Navigation
- Background: `#ffffff`
- Text: `#333236`
- Font: 13px SpoqaHanSansNeo weight 500
- Inactive: `#333236` at ~80% opacity
- Active: solid `#333236` label (explore category tabs)
- Use: Top horizontal nav ("부트캠프", "기업교육", "커뮤니티", "수강 후기") and explore category tabs

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 4 surfaces)
**Tier 1 sources:** https://www.codeit.kr (homepage, /subscription, /explore, /signin — live computed styles); https://tech.codeit.kr (Codeit official engineering blog — brand-owned); https://about.codeit.com/ko/ (Codeit official company intro — brand-owned)
**Tier 2 sources:** getdesign.md/codeit — directory placeholder, no Codeit-specific data; styles.refero.design — not listed (searched "codeit", no match)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px
- Notable: CTA padding clusters at 8px 24px (outline) and 10px 32px (primary); card padding runs 24px 32px

### Grid & Container
- Centered single-column hero anchored by the 68px Pretendard headline
- Feature sections alternate full-width white (`#ffffff`), cool-grey (`#f6f6f8`), and pale-violet (`#f8ecff`) bands
- Subscription page uses a 2–3 column plan-card grid with one lifted, color-filled recommended card
- Explore page uses a responsive course-card grid with a pill search field and text category tabs

### Whitespace Philosophy
- **Open and friendly**: generous vertical rhythm between sections; the page never feels cramped despite long Korean copy.
- **Color-banded segmentation**: sections separate by background color (white / `#f6f6f8` / `#f8ecff`), not by heavy borders.
- **Rounded rhythm**: the repeated 20–24px card radius and full-pill chips create a soft, consistent cadence.

### Border Radius Scale
- Small (6px): nav chips, count badges
- Medium (8px–10px): standard buttons, neutral actions
- Base (12px): inner containers
- Large (20px): course cards
- XL (24px): membership plan cards
- Pill (22px / full): rounded CTAs, search field, carousel controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Homepage hero, nav, most sections |
| Tint (Level 1) | `#f6f6f8` / `#f8ecff` background shift | Section separation without elevation |
| Card (Level 2) | `rgba(0,0,0,0.08) 0px 2px 14px` | Membership / content plan cards |
| Elevated (Level 3) | `rgba(0,0,0,0.2) 0px 4px 24px` | Recommended (lavender) plan card |

**Shadow Philosophy**: Codeit is mostly flat. The marketing homepage is effectively shadowless — separation comes from white / grey / violet color bands and rounded shapes. Elevation is introduced deliberately and only where hierarchy demands it: on the subscription page, standard plan cards get a soft `rgba(0,0,0,0.08) 0px 2px 14px` lift, and the single recommended plan — filled with lavender `#b363fd` — gets a stronger `rgba(0,0,0,0.2) 0px 4px 24px` so it visibly floats above its neighbors. Emphasis is carried by color (the purple CTA, the lavender card) far more than by shadow.

## 7. Do's and Don'ts

### Do
- Reserve purple (`#9933ff`) for the primary CTA / action — keep it the single "do this" color
- Use Pretendard ExtraBold (800) for the hero headline and SpoqaHanSansNeo for everything else
- Use warm near-black ink (`#333236`) for text instead of pure black
- Separate sections with color bands (`#ffffff`, `#f6f6f8`, `#f8ecff`), not heavy borders
- Keep geometry rounded — 20–24px cards, pill chips, 6–10px CTAs
- Lift only the recommended plan card; keep the rest flat
- Apply tight negative tracking on display type (-1.5px at 68px)
- Use the lavender (`#b363fd`) fill to mark the featured plan

### Don't
- Don't spread purple across many elements — it dilutes the single-action signal
- Don't use pure black for body text — use ink `#333236`
- Don't set the hero in SpoqaHanSansNeo — Pretendard owns the 68px display moment
- Don't add drop shadows to the marketing homepage — it's a flat, color-banded system
- Don't use sharp / square corners on cards or chips — everything is rounded
- Don't introduce a second saturated hue as a CTA color — purple is the action color
- Don't use positive letter-spacing on headlines — Codeit tracks tight
- Don't overload accent colors (`#8f00ff`, `#760dde`, `#c47cfd`, `#ff52b7`) onto interactive controls — they are decorative

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero compresses, plan cards stack |
| Tablet | 640-1024px | 2-up plan / course cards, moderate padding |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column grids |

### Touch Targets
- Primary CTA at 48px height, full-padded for an unmistakable target
- Outline / neutral buttons at 45–55px height
- Pill search field at 40px height with 8px 16px padding
- Nav chips comfortably tappable within the header

### Collapsing Strategy
- Hero: 68px Pretendard headline scales down on mobile, weight 800 maintained
- Plan-card grid: 3-up → 2-up → stacked single column
- Course grid: responsive wrap; category tabs become a horizontal scroll
- Color-banded sections maintain full-width treatment across breakpoints

### Image Behavior
- Feature illustrations and course thumbnails keep their rounded (20–24px) corners at all sizes
- Dark feature bands (`#080c14`, `#3d1457`) maintain full-width treatment

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Codeit Purple (`#9933ff`)
- Emphasis violet: Bright Violet (`#8f00ff`), Deep Violet (`#760dde`)
- Featured card fill: Lavender (`#b363fd`)
- Text / headings: Ink (`#333236`)
- Background: Canvas (`#ffffff`)
- Tinted surfaces: Surface (`#f6f6f8`), Violet Surface (`#f8ecff`), Pink Surface (`#ffebf7`)
- Dark bands: Night (`#080c14`), Plum (`#3d1457`)
- Decorative accents: Soft Lavender (`#c47cfd`), Pink (`#ff52b7`)

### Example Component Prompts
- "Create a hero on white background. Headline at 68px Pretendard weight 800, line-height 1.21, letter-spacing -1.5px, color #333236. One purple CTA: #9933ff background, #ffffff text, 10px radius, 10px 32px padding, 18px SpoqaHanSansNeo weight 700 — '무료 체험 시작하기'."
- "Design a membership plan grid: standard cards white #ffffff, 24px radius, 2px solid rgba(51,50,54,0.1) border, soft shadow rgba(0,0,0,0.08) 0px 2px 14px. The recommended card fills lavender #b363fd with white text, 24px radius, and a stronger rgba(0,0,0,0.2) 0px 4px 24px shadow so it floats."
- "Build a course explore page: pill search field #f6f6f8, 21px radius, 8px 16px padding, 14px SpoqaHanSansNeo, placeholder '어떤 강의를 찾고 있나요?'. Course cards white #ffffff, 20px radius, 1px solid rgba(51,50,54,0.15) border, no shadow. Text category tabs in #333236, active solid."
- "Create the top nav: white header, 13px SpoqaHanSansNeo weight 500 links in #333236, a purple #9933ff membership chip (6px radius, 6px 12px padding) right-aligned."

### Iteration Guide
1. Purple `#9933ff` is the single action color — don't spread it
2. Hero is Pretendard 800; everything else is SpoqaHanSansNeo
3. Text is ink `#333236`, never pure black
4. Rounded geometry throughout — 20–24px cards, pill chips, 6–10px CTAs
5. Flat by default; lift only the recommended plan card
6. Negative tracking on headlines, normal on body
7. Use color bands (`#f6f6f8`, `#f8ecff`) to segment sections

---

## 10. Voice & Tone

Codeit's voice is **warm, motivating, and plain-spoken** — an encouraging coach who turns "learning to code" from an intimidating commitment into a series of small, winnable five-minute steps. The hero line "5분마다 인생이 바뀐다" ("Your life changes every 5 minutes") sets the register: aspirational but concrete, energetic without hype. Copy speaks directly to the learner ("당신을 도와줄"), frames effort as bite-sized and repeatable, and leans on micro-learning, habit, and gamified progress rather than fear of falling behind.

| Context | Tone |
|---|---|
| Hero headlines | Aspirational, concrete. "5분마다 인생이 바뀐다." Bold promise, not hype. |
| Feature copy | Benefit-first, anti-boredom. "20분 이상 영상만 보는 지루한 학습은 그만." |
| Product / AI features | Helpful, direct. "1초 만에 당신을 도와줄 AI GURU." |
| CTAs | Low-pressure invitations. "무료 체험 시작하기", "멤버십 시작하기", "모든 IT 강의 보러가기". |
| Progress / gamification | Encouraging, habit-framed. "페이스 메이커", "레벨업 시스템", "월별 챌린지". |

**Voice samples (verbatim from live surfaces, verified 2026-06-26):**
- "5분마다 인생이 바뀐다" — hero H1 and page title (mission-framed promise).
- "20분 이상 영상만 보는 지루한 학습은 그만" — feature heading (anti-boredom positioning).
- "전문가 20인의 노하우로 탄생한 가장 완벽한 5분" — section heading (credibility + micro-learning).
- "1초 만에 당신을 도와줄 AI GURU" — AI feature heading.
- "코드잇 멤버십 구독" — subscription page H1.

**Forbidden register**: fear-based "you're falling behind" urgency, undefined jargon left unexplained, hype-heavy superlatives, and any tone that makes a beginner feel judged.

## 11. Brand Narrative

Codeit (코드잇) is a Korean EdTech company operating an online IT-education platform centered on a distinctive idea: that meaningful learning happens in short, repeatable cycles rather than marathon video sessions. Its homepage promise — "5분마다 인생이 바뀐다" and a "5분 학습 사이클" built from short lessons, hands-on practice (실습), and quizzes — reframes coding education around micro-learning, retention, and habit rather than passive watching.

The platform spans self-paced courses (the explore catalog across 입문/데이터/웹/디자인/프로그래밍/AI/비즈니스 tracks), a membership subscription, career-track bootcamps (운영 via sprint.codeit.kr), corporate training (기업교육), and government-subsidized lifelong-education vouchers (평생교육이용권). More recently Codeit has layered AI into the product — the "AI GURU" tutor that answers learner questions instantly — alongside gamified progress systems (페이스 메이커, 레벨업 시스템, 월별 챌린지) designed to keep learners coming back.

What Codeit refuses, visible in its design: the dry, text-heavy chrome of legacy LMS portals and the fear-driven urgency of cram-style 학원 marketing. What it embraces: a friendly white-and-purple consumer aesthetic, a single trustworthy action color, bold Pretendard headlines that motivate, and warm SpoqaHanSansNeo copy that explains. The brand positions learning as approachable, habitual, and even fun — "개발도 게임처럼."

## 12. Principles

1. **Small steps, real progress.** The five-minute cycle is the product thesis. *UI implication:* keep units short and self-contained; make "start now" the easiest possible action with one purple CTA.
2. **One action, one color.** Purple (`#9933ff`) means "do this." *UI implication:* reserve the saturated purple for the primary CTA so the next step is never ambiguous.
3. **Motivate, don't intimidate.** Coding is framed as approachable and game-like. *UI implication:* warm ink text, rounded shapes, encouraging copy; no fear-based urgency.
4. **Bold where it persuades, calm where it teaches.** *UI implication:* Pretendard ExtraBold for the hero promise; quiet SpoqaHanSansNeo 400 for lesson and feature content.
5. **Flat and friendly.** Color and shape carry hierarchy, not heavy elevation. *UI implication:* segment with color bands and rounded cards; reserve shadow for the one card that must stand out.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Codeit user segments (Korean career-changers, university students, working professionals upskilling), not individual people.*

**정민재, 26, 서울.** A non-CS graduate preparing for a developer career change. Likes that lessons are five minutes each, so he can study on the subway without losing the thread. Chose Codeit because the free trial let him start in one tap, with no sales call.

**한소연, 31, 경기.** A marketer learning data analysis to grow into a PM role. Uses the explore catalog to pick a 데이터 track and the AI GURU when she gets stuck. Values that the tone never makes her feel behind for being a beginner.

**오준혁, 23, 부산.** A university student using the membership subscription and monthly challenges (월별 챌린지) to stay consistent. The level-up system and pace maker keep him studying like a game rather than a chore.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no course results)** | White canvas. Single Ink (`#333236`) line explaining no matching courses, with one purple CTA to adjust filters. No clutter. |
| **Empty (no enrolled courses)** | Muted ink line inviting the learner to explore the catalog, plus a purple "모든 강의" path. Encouraging, never scolding. |
| **Loading (catalog fetch)** | Skeleton course cards at final dimensions on white, 20px radius, flat pulse consistent with the mostly-shadowless system. |
| **Loading (AI GURU answer)** | Inline typing indicator within the assistant panel; prior context stays visible. |
| **Error (request failed)** | Inline message in Ink (`#333236`) with a plain-language explanation and a retry — no bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "필수". |
| **Success (enrollment / subscription)** | Brief inline confirmation in a calm tone; next-step ("학습 시작하기") linked immediately below. No celebratory emoji spam. |
| **Skeleton** | `#f6f6f8` blocks at final dimensions, rounded corners, flat pulse. |
| **Disabled** | Reduced-opacity surface and text; purple actions fade rather than turn grey to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus |
| `motion-standard` | 220ms | Card / section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, chips |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is friendly but restrained — consistent with the flat, rounded aesthetic. Purple CTAs and pill chips respond to press with a subtle scale / opacity shift; course and plan cards fade-in from below at `motion-standard / ease-enter`. The gamified surfaces (level-up, challenges) may use a single celebratory pop on milestone completion, but routine navigation stays calm. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on:
- https://www.codeit.kr (homepage) — hero H1 "5분마다 인생이 바뀐다" Pretendard 68px/800/-1.5px color rgb(51,50,54);
  section H2s 48px/32px weight 700; card H3 28px/700; body SpoqaHanSansNeo 16px rgb(51,50,54);
  primary CTA bg rgb(153,51,255) #9933ff radius 6–10–22px; surface rgb(246,246,248) #f6f6f8.
- https://www.codeit.kr/subscription — H1 "코드잇 멤버십 구독" 68px/800; plan cards white 24px radius
  shadow rgba(0,0,0,0.08) 0px 2px 14px border 2px rgba(51,50,54,0.1); recommended card bg rgb(179,99,253)
  #b363fd shadow rgba(0,0,0,0.2) 0px 4px 24px.
- https://www.codeit.kr/explore — pill search FORM bg #f6f6f8 radius 21px padding 8px 16px;
  course cards white 20px radius 1px rgba(51,50,54,0.15) border; count badge #9933ff radius 6px.
- https://www.codeit.kr/signin — neutral "이메일로 로그인하기" button bg #f6f6f8 radius 8px h55.

Brand-owned secondary surfaces confirmed live (2026-06-26):
- https://tech.codeit.kr — "Codeit blog" (official engineering blog).
- https://about.codeit.com/ko/ — "코드잇 소개" (official company intro).

Tier 2 (cross-check): getdesign.md/codeit returned a directory placeholder with no Codeit-specific
data; styles.refero.design search for "codeit" returned no match (not listed). Per KR policy these
do not count toward the brand-owned regional minimum and are recorded as Tier-2 only.

Voice samples (§10) are verbatim from the live homepage and subscription page (verified 2026-06-26).

Brand narrative (§11): Codeit (코드잇) is a Korean online IT-education platform; product scope (courses,
membership, bootcamp via sprint.codeit.kr, corporate training, lifelong-education vouchers, AI GURU,
gamified progress) is drawn from the live site. Broader corporate facts beyond the inspected surfaces
are general public knowledge, not quoted from a verified company statement this turn.

Personas (§13) are fictional archetypes informed by publicly observable Codeit user segments. Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "one action, one color", "small steps, real progress") are editorial readings
connecting Codeit's observed design to its positioning, not directly sourced Codeit statements.
-->
