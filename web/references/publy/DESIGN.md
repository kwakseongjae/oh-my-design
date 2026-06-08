---
id: publy
name: PUBLY
display_name_kr: 퍼블리
country: KR
category: education
homepage: "https://publy.co"
primary_color: "#7a3bff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=publy.co&sz=128"
verified: "2026-05-27"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#7a3bff"
    primary-pressed: "#6429e6"
    primary-tint: "#f1ebff"
    canvas: "#ffffff"
    ink: "#0f172a"
    slate-950: "#111213"
    slate-800: "#282b2f"
    slate-700: "#3c4043"
    slate-600: "#575b5c"
    slate-500: "#77797b"
    slate-400: "#979b9e"
    slate-300: "#ced0d1"
    slate-200: "#e2e8f0"
    slate-100: "#f5f5f5"
    error: "#ef4444"
    success: "#16a34a"
    on-primary: "#ffffff"
  typography:
    family: { sans: "system-ui" }
    display:     { size: 30, weight: 700, lineHeight: 1.33, tracking: -0.4, use: "Landing hero, report cover title" }
    heading-lg:  { size: 24, weight: 700, lineHeight: 1.33, tracking: -0.3, use: "Section / report title" }
    heading:     { size: 20, weight: 700, lineHeight: 1.40, tracking: -0.3, use: "Sub-section, card group header" }
    title:       { size: 16, weight: 600, lineHeight: 1.50, tracking: -0.2, use: "Card title, list header" }
    body-lg:     { size: 16, weight: 400, lineHeight: 1.63, tracking: -0.2, use: "Long-form report body, generous leading" }
    body:        { size: 14, weight: 400, lineHeight: 1.57, tracking: -0.2, use: "Default body, card description" }
    label:       { size: 14, weight: 600, lineHeight: 1.43, tracking: -0.2, use: "Tab label, emphasized inline" }
    caption:     { size: 13, weight: 400, lineHeight: 1.38, tracking: -0.2, use: "Metadata, author, read-time" }
    micro:       { size: 12, weight: 500, lineHeight: 1.33, tracking: -0.2, use: "Fine print, control labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    ambient: "rgba(0,0,0,0.06) 0px 2px 8px"
    standard: "rgba(0,0,0,0.08) 0px 4px 16px"
    elevated: "rgba(0,0,0,0.12) 0px 8px 28px"
  components:
    button-primary: { type: button, bg: "#7a3bff", fg: "#ffffff", radius: 8, padding: "12px 16px", font: "14px / 600", use: "Primary CTA — 멤버십 시작하기, 3일 무료체험" }
    button-outline: { type: button, bg: "#ffffff", fg: "#7a3bff", radius: 8, padding: "12px 16px", font: "14px / 600", use: "Secondary CTA — 저장하기, 공유하기, 1px #7a3bff border" }
    button-neutral: { type: button, bg: "#ffffff", fg: "#282b2f", radius: 8, padding: "12px 16px", font: "14px / 500", use: "Tertiary action, 1px #e2e8f0 border" }
    button-ghost: { type: button, fg: "#7a3bff", radius: 8, padding: "8px 12px", font: "14px / 600", use: "Inline text action, 더 보기" }
    input: { type: input, bg: "#ffffff", fg: "#0f172a", radius: 8, padding: "12px 14px", font: "14px / 400", use: "Default text input, 1px #e2e8f0 border, focus #7a3bff" }
    search: { type: input, bg: "#f5f5f5", fg: "#0f172a", radius: 8, padding: "12px 16px", use: "Header / discovery search bar" }
    content-card: { type: card, bg: "#ffffff", radius: 12, padding: "20px", use: "Report / content card, 1px #e2e8f0 border" }
    membership-card: { type: card, bg: "#f1ebff", radius: 12, padding: "24px", use: "Membership / paywall promotion" }
    tag-default: { type: badge, bg: "#f5f5f5", fg: "#575b5c", radius: 6, padding: "4px 8px", font: "13px / 600", use: "Topic category" }
    tag-active: { type: badge, bg: "#f1ebff", fg: "#7a3bff", radius: 6, padding: "4px 8px", font: "13px / 600", use: "Selected topic filter" }
    badge-best: { type: badge, bg: "#7a3bff", fg: "#ffffff", radius: 4, padding: "3px 6px", font: "11px / 700", use: "BEST / NEW / Series flags" }
    tab: { type: tab, fg: "#575b5c", font: "14px / 600", use: "Topic nav", active: "#7a3bff text + 2px purple underline" }
  components_harvested: true
---

# Design System Inspiration of PUBLY (퍼블리)

## 1. Visual Theme & Atmosphere

PUBLY is a Korean career-knowledge membership, and its interface reads like a calm professional reading room rebuilt for the work-from-anywhere generation -- clean, credible, and quietly confident. The page opens on a crisp white canvas (`#ffffff`) with deep slate-ink type (`#0f172a`) and a single decisive purple (`#7a3bff`) that carries every interactive moment: the membership CTA, links, active states, the "알림 설정하기" button. This isn't the institutional blue of legacy edtech nor the playful pastel of a consumer app; it's a saturated, modern violet that signals *premium knowledge, made for ambitious people.*

The system is built on a slate-gray neutral foundation -- the Tailwind-style slate family (`#0f172a` ink, `#e2e8f0` borders) is everywhere, observed thousands of times across the live surface -- giving the product a composed, design-system-disciplined feel. Content is organized into clean cards with generous whitespace and a comfortable 14-16px reading scale, because the product *is* reading: long-form career reports, templates, and curated knowledge. The purple appears sparingly and deliberately, concentrated on the actions that move a member forward, while a soft purple-tint surface (`#f1ebff`) provides gentle emphasis without shouting.

What defines PUBLY visually is the pairing of a credible slate-and-white reading environment with one ambitious purple accent. The chrome stays out of the way of the prose; the purple says "act on this knowledge." The result is a tool that feels both trustworthy enough to pay for and modern enough to feel like growth.

**Key Characteristics:**
- PUBLY Purple (`#7a3bff`) as the sole interactive accent — membership CTA, links, active states
- Slate-ink type (`#0f172a`) on white, with a Tailwind-style slate neutral scale
- System-UI / Pretendard font stack — clean, neutral, reading-optimized
- Card-based content organization with generous whitespace — a professional reading room
- Soft purple-tint surface (`#f1ebff`) for gentle emphasis, used sparingly
- 8px radius rounded chrome — composed and modern, not sharp, not bubbly
- Comfortable 14-16px reading scale — the product is long-form career knowledge
- Slate-200 (`#e2e8f0`) hairline borders for clean card and section separation

## 2. Color Palette & Roles

### Primary
- **PUBLY Purple** (`#7a3bff`): The sole primary interactive color — membership CTA, links, active tabs, selection. The workhorse accent (observed `rgb(122,59,255)`, ~100 occurrences).
- **Purple Pressed** (`#6429e6`): Pressed / hover state for purple CTAs.
- **Purple Tint** (`#f1ebff`): Soft purple-tinted backgrounds, selected-state fills, gentle emphasis (observed `rgb(241,235,255)`).
- **Pure White** (`#ffffff`): Page canvas, card surfaces, button text on purple.
- **Slate Ink** (`#0f172a`): Primary heading + body text color — deep slate, the most-used text color (observed `rgb(15,23,42)`).

### Neutral Scale (Slate)
- **Slate 950** (`#111213`): Near-black for strongest emphasis (observed `rgb(17,18,19)`).
- **Slate 800** (`#282b2f`): Strong labels, dark text (observed `rgb(40,43,47)`).
- **Slate 700** (`#3c4043`): Emphasized body / sub-headings (observed `rgb(60,64,67)`).
- **Slate 600** (`#575b5c`): Body secondary text, descriptions (observed `rgb(87,91,92)`).
- **Slate 500** (`#77797b`): Caption text, metadata (observed `rgb(119,121,123)`).
- **Slate 400** (`#979b9e`): Placeholder text, disabled labels (observed `rgb(151,155,158)`).
- **Slate 300** (`#ced0d1`): Disabled borders, inactive icons (observed `rgb(206,208,209)`).
- **Slate 200** (`#e2e8f0`): Default border, dividers, card outline — the most-used non-text color (observed `rgb(226,232,240)`, ~900 occurrences).
- **Slate 100** (`#f5f5f5`): Secondary background, section fill (observed `rgb(245,245,245)`).

### Semantic
- **Action Purple** (`#7a3bff`): Primary action / selected — the brand color doubles as the action color.
- **Error Red** (`#ef4444`): Error states, destructive actions, validation failure.
- **Success Green** (`#16a34a`): Confirmations, completion.
- **Veil Dark** (`rgba(0,0,0,0.9)`): Strong overlay scrim for modals over content.

### Borders
- **Border Default** (`#e2e8f0`): Card outline, divider, input border (slate-200).
- **Border Strong** (`#ced0d1`): Emphasized border, active input outline (slate-300).
- **Border Focus** (`#7a3bff`): Focused input, selected card.

## 3. Typography Rules

### Font Family
- **Primary**: `-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji"` (observed on live `publy.co`, 2026-05; Korean falls through to system Korean / Pretendard where installed)
- **Design Principle**: A neutral system-UI stack chosen for reading credibility, not branding flourish. Hierarchy comes from a disciplined slate-scale + weight contrast, not from a bespoke face. Korean and Latin render co-equally; long-form reports favor comfortable leading.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | System sans | 30px | 700 | 40px | -0.4px | Landing hero, report cover title |
| Heading Large | System sans | 24px | 700 | 32px | -0.3px | Section / report title |
| Heading | System sans | 20px | 700 | 28px | -0.3px | Sub-section, card group header |
| Title | System sans | 16px | 600 | 24px | -0.2px | Card title, list header |
| Body Large | System sans | 16px | 400 | 26px | -0.2px | Long-form report body — generous leading |
| Body | System sans | 14px | 400 | 22px | -0.2px | Default body, card description |
| Label | System sans | 14px | 600 | 20px | -0.2px | Tab label, emphasized inline |
| Caption | System sans | 13px | 400 | 18px | -0.2px | Metadata, author, read-time |
| Caption Bold | System sans | 13px | 600 | 18px | -0.2px | Tag / category label |
| Micro | System sans | 12px | 500 | 16px | -0.2px | Fine print, control labels |

### Principles
- **Reading-first leading**: Long-form report body sits at 16px with generous ~26px line height — the product is sustained reading, not scanning.
- **Slate hierarchy**: Text rank is built in the slate scale (`#0f172a` headings → `#575b5c` body → `#77797b` captions), not in color.
- **Three weights**: 400 (body), 600 (titles / labels), 700 (headings). Light avoided.
- **Purple stays off text**: The brand purple appears on links and interactive labels only — body text never inherits it.
- **Tight tracking**: `-0.2px` to `-0.4px` letter-spacing keeps Korean and Latin titles composed.

## 4. Component Stylings

### Buttons

**Primary (PUBLY Purple)**
- Background: `#7a3bff`
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 12px 16px
- Font: 14px / 600 / system sans
- Hover: `#6429e6`
- Pressed: `#5a23cc`
- Disabled: `#ced0d1` background, `#ffffff` text
- Use: Primary CTA — `멤버십 시작하기`, `알림 설정하기`, `3일 무료체험`

**Outline (Purple Border)**
- Background: `#ffffff`
- Text: `#7a3bff`
- Border: 1px solid `#7a3bff`
- Radius: 8px
- Padding: 12px 16px
- Font: 14px / 600 / system sans
- Hover: `#f1ebff` background
- Use: Secondary CTA — `저장하기`, `공유하기`

**Neutral (Slate Outline)**
- Background: `#ffffff`
- Text: `#282b2f`
- Border: 1px solid `#e2e8f0`
- Radius: 8px
- Padding: 12px 16px
- Font: 14px / 500 / system sans
- Hover: `#f5f5f5` background
- Use: Tertiary actions — filter, sort, more options

**Ghost (Text)**
- Background: transparent
- Text: `#7a3bff`
- Border: none
- Radius: 8px
- Padding: 8px 12px
- Font: 14px / 600 / system sans
- Hover: `#f1ebff` background
- Use: Inline text action, "더 보기" with arrow

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#0f172a`
- Border: 1px solid `#e2e8f0`
- Radius: 8px
- Padding: 12px 14px
- Font: 14px / 400 / system sans
- Placeholder: `#979b9e`
- Focus: 1px solid `#7a3bff`
- Use: Default text input — login, profile, settings forms

**Search**
- Background: `#f5f5f5`
- Text: `#0f172a`
- Border: none
- Radius: 8px
- Padding: 12px 16px 12px 40px (left-pad for inline magnifier)
- Font: 14px / 400 / system sans
- Placeholder: `#77797b` ("어떤 지식이 필요하세요?")
- Focus: `#ffffff` background, 1px solid `#7a3bff` border
- Use: Header / discovery search bar

**Error**
- Background: `#ffffff`
- Text: `#0f172a`
- Border: 1px solid `#ef4444`
- Radius: 8px
- Padding: 12px 14px
- Font: 14px / 400 / system sans
- Use: Form validation failure — helper text 13px/400 `#ef4444` below

### Cards

**Content Card**
- Background: `#ffffff`
- Border: 1px solid `#e2e8f0`
- Radius: 12px
- Padding: 20px
- Shadow: none (hover adds `0px 2px 8px rgba(0,0,0,0.06)`)
- Use: Default report / content card — cover image, title, author, read-time

**Featured Card**
- Background: `#ffffff` (or purple-tint `#f1ebff` accent strip)
- Border: 1px solid `#e2e8f0`
- Radius: 12px
- Padding: 24px
- Shadow: `0px 2px 8px rgba(0,0,0,0.06)`
- Use: BEST / curated highlight on the home feed

**Membership Card**
- Background: `#f1ebff` (purple-tint) or `#7a3bff` (full purple for emphasis)
- Border: none
- Radius: 12px
- Padding: 24px
- Use: Membership / paywall promotion — the one place the brand purple fills a surface

### Badges & Tags

**Category Tag (Default)**
- Background: `#f5f5f5`
- Text: `#575b5c`
- Border: none
- Radius: 6px
- Padding: 4px 8px
- Font: 13px / 600 / system sans
- Use: Topic category (커리어, 마케팅, 개발)

**Category Tag (Active)**
- Background: `#f1ebff`
- Text: `#7a3bff`
- Border: none
- Radius: 6px
- Padding: 4px 8px
- Font: 13px / 600 / system sans
- Use: Selected topic filter

**BEST / New Badge**
- Background: `#7a3bff`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 3px 6px
- Font: 11px / 700 / system sans
- Use: "BEST", "NEW", "Series" content flags

**Read-time / Meta**
- Background: transparent
- Text: `#77797b`
- Border: none
- Radius: 0px
- Padding: 0px
- Font: 13px / 400 / system sans
- Use: Inline "8분", author name, publish date

### Navigation
- Top header: `#ffffff` background, ~56px height, 1px bottom border `#e2e8f0`. Logo left, search center, profile / membership CTA right.
- Topic nav: horizontal items (BEST / 시리즈 / 템플릿 / 커리어), 14px/600, active = `#7a3bff` text + 2px purple underline, inactive `#575b5c`.
- Profile-driven feed: role / experience profiling powers a personalized "오늘의 콘텐츠" feed.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 56px
- Global gutter (mobile): 16px each side
- Global gutter (desktop): 24px each side, max content width ~1080px
- Card internal padding: 20-24px (comfortable reading-room spacing)
- Inter-section vertical spacing: 32-40px between feed sections

### Grid & Container
- Mobile: single-column stack of content cards
- Tablet: 2-column card grid
- Desktop: 2-3 column card grid, centered ~1080px column; report-reading view narrows to a single comfortable measure (~720px)
- The feed is a vertical stack of curated card sections — a personalized reading list

### Whitespace Philosophy
- **Room to read**: Long-form reports get a narrow, comfortable measure with generous leading — reading comfort over density.
- **Cards breathe**: 20-24px internal padding and 32-40px section gaps keep the professional reading-room composure.
- **Purple is rare on purpose**: The accent earns its emphasis by appearing sparingly amid the calm slate-and-white.

### Border Radius Scale
- Subtle (4px): Small badges (BEST / NEW)
- Standard (6px): Category tags
- Comfortable (8px): Buttons, inputs, ghost actions
- Soft (12px): Content cards, membership cards
- Note: PUBLY is a *composed mid-radius* system — nothing sharp (transactional), nothing bubbly (consumer-app). 8-12px is the credible-professional range.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, 1px `#e2e8f0` border | Default content card, page surface |
| Hover (Level 1) | `0px 2px 8px rgba(0,0,0,0.06)` | Card hover lift, featured card |
| Soft (Level 2) | `0px 4px 12px rgba(0,0,0,0.08)` | Dropdown menus, sticky header on scroll |
| Floating (Level 3) | `0px 8px 24px rgba(0,0,0,0.12)` | Modals, bottom sheets |

**Shadow Philosophy**: PUBLY communicates credibility through composed flatness, not depth. Default cards carry a 1px slate-200 border instead of a shadow — the design-system-disciplined look. Shadows appear only on hover lift and floating overlays, always neutral pure-black at low opacity. No brand-tinted shadows; the purple lives in fills and borders.

## 7. Do's and Don'ts

### Do
- Use PUBLY Purple (`#7a3bff`) for the membership CTA, links, and active states
- Use the slate scale (`#0f172a` → `#575b5c` → `#77797b`) to build text hierarchy
- Give long-form report body generous ~26px leading at 16px
- Use purple-tint `#f1ebff` for gentle emphasis (selected tags, membership surface)
- Default cards to 1px `#e2e8f0` border, no shadow — the composed look
- Keep radius in the 8-12px credible-professional range
- Reserve the purple for forward-moving actions — let it stay rare

### Don't
- Don't introduce a second brand hue — purple is the only accent
- Don't put the brand purple on body text — links and actions only
- Don't drop card borders for heavy shadows — the 1px slate border is the brand
- Don't sharpen corners to 0-4px (transactional) or balloon to 20px+ (consumer-toy)
- Don't crowd long-form reading — comfort over density
- Don't use red for anything but errors
- Don't overuse the purple — its scarcity is what makes it read as premium

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single-column card stack, bottom nav |
| Tablet | 768-1024px | 2-column card grid, side filters |
| Desktop | >1024px | 2-3 column grid, ~1080px column; report view narrows to ~720px |

### Touch Targets
- Primary CTA: 44-47px height
- Category tags: 32px height
- Nav items: 44px height
- Content card: full card tap area

### Collapsing Strategy
- Desktop multi-column card grid → mobile single-column stack
- Side filters → mobile bottom-sheet filter
- Report reading view stays a comfortable single measure at every breakpoint

### Image Behavior
- Report cover images: 16:9 or 3:2, 8px radius top corners on cards
- Author avatars: circular, 32-40px
- Inline report imagery: full content-width, rounded 8px

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: PUBLY Purple (`#7a3bff`)
- CTA Hover: Purple Dark (`#6429e6`)
- Background: Pure White (`#ffffff`)
- Surface fill: Slate 100 (`#f5f5f5`)
- Heading text: Slate Ink (`#0f172a`)
- Body text: Slate 600 (`#575b5c`)
- Caption: Slate 500 (`#77797b`)
- Placeholder: Slate 400 (`#979b9e`)
- Border: Slate 200 (`#e2e8f0`)
- Purple tint (emphasis): (`#f1ebff`)
- Error: Red (`#ef4444`)

### Example Component Prompts
- "Create a PUBLY content card: white bg, 1px solid #e2e8f0 border, 12px radius, 20px padding, no shadow. 16:9 cover image with 8px top radius, then title 16px/600 #0f172a (2 lines, ellipsis), 8px gap, author 13px/400 #77797b + '·' + read-time '8분'. Hover adds 0px 2px 8px rgba(0,0,0,0.06)."
- "Build a primary CTA: #7a3bff bg, white text, 14px weight 600 system-sans, padding 12px 16px, 8px radius. Hover #6429e6. Label '멤버십 시작하기'."
- "Design a topic tag bar: horizontal scroll, 8px gap. Default: #f5f5f5 bg, #575b5c 13px/600, 6px radius, 4px 8px padding. Active: #f1ebff bg, #7a3bff text."
- "Create a membership card: #f1ebff purple-tint bg, no border, 12px radius, 24px padding. Heading 20px/700 #0f172a, benefit list 14px/400 #575b5c, full-purple #7a3bff CTA '3일 무료체험'."
- "Design a PUBLY header: white bg, 56px height, 1px bottom border #e2e8f0. Logo left, search center (#f5f5f5 bg, 8px radius, placeholder #77797b '어떤 지식이 필요하세요?'), profile + purple membership CTA right."

### Iteration Guide
1. PUBLY purple `#7a3bff` is the sole interactive accent — CTA, links, active states
2. Text hierarchy is built in the slate scale, never in color
3. Default cards: 1px `#e2e8f0` border, no shadow — the composed look
4. Long-form body: 16px / ~26px leading for reading comfort
5. Radius 8-12px — credible-professional, not sharp, not bubbly
6. Purple-tint `#f1ebff` for gentle emphasis; full purple only on membership surfaces
7. Keep the purple rare — scarcity is the premium signal

---

## 10. Voice & Tone

PUBLY speaks like a sharp, generous senior colleague who has done the reading for you — credible, direct, and growth-oriented without being preachy. The voice respects the reader's time and ambition; it sells knowledge as a tool for steady career growth (`꾸준한 성장`), not as hustle-culture pressure. Korean copy uses clear professional endings (`-요`, `-합니다` in formal report contexts) and confident imperatives (`멤버십 시작하기`, `더 알아보기`). The brand positions itself as the place where you encounter useful new career content month after month.

| Context | Tone |
|---|---|
| CTAs | Confident Korean (`멤버십 시작하기`, `3일 무료체험`, `알림 설정하기`, `더 보기`) |
| Membership / paywall | Value-forward, respectful (`커리어에 필요한 지식, 매달 새롭게`). Never `지금 결제 안 하면 손해`. |
| Report titles / deks | Specific, useful, no clickbait (`PM이 알아야 할 데이터 지표 7가지`). |
| Empty states | Helpful + suggestion (`아직 저장한 콘텐츠가 없어요` + `콘텐츠 둘러보기`). Never `데이터가 없습니다`. |
| Error messages | Blameless + actionable (`다시 시도해 주세요`). No `오류가 발생했습니다` boilerplate. |
| Profile / onboarding | Treats the reader as a professional (`어떤 일을 하고 계세요?`), used to personalize. |
| Notifications | Curated relevance (`이번 주 커리어 콘텐츠가 도착했어요`), low-frequency. |

**Forbidden phrases.** `지금 결제 안 하면 손해`, `인생 역전`, `대박 꿀팁!!!`, `데이터가 없습니다`, `오류가 발생했습니다`, `불편을 드려 죄송합니다`. The brand sells credible knowledge, not hustle hype or clickbait. Emoji used sparingly, never in error states or paywall copy.

**Voice samples.**

- `커리어 멤버십 PUBLY` — App Store / product positioning. <!-- cited: apps.apple.com PUBLY listing, 2026-05 -->
- `꾸준한 성장` — brand value framing around steady career growth. <!-- cited: live publy.co, 2026-05 -->
- `알림 설정하기` — primary engagement CTA on the live home surface. <!-- cited: live publy.co, 2026-05 -->
- `이번 주 커리어 콘텐츠가 도착했어요` — curated notification. <!-- illustrative: standard PUBLY content-delivery pattern -->
- `3일 무료체험` — membership trial CTA. <!-- illustrative: standard PUBLY membership pattern -->

## 11. Brand Narrative

PUBLY (퍼블리) is a Korean career-knowledge membership that delivers career trends and workplace-useful knowledge across the arc of a professional's career, framing itself as an integrated career membership where members encounter new, beneficial content every month ([apps.apple.com — 커리어 멤버십 PUBLY](https://apps.apple.com/bb/app/%ED%8D%BC%EB%B8%94%EB%A6%AC-%EC%BB%A4%EB%A6%AC%EC%96%B4-%EB%A9%A4%EB%B2%84%EC%8B%AD-publy/id1440756899)). It began as a curated long-form digital-content platform — readers funded and read in-depth reports on business, product, and career topics — and evolved into a subscription membership organized around topics, series, templates, and a personalized feed driven by each member's role and experience profile.

The design reflects that evolution. The product is fundamentally about reading credible knowledge, so the interface is a composed slate-and-white reading room: 1px slate borders instead of heavy shadows, comfortable long-form leading, and a personalized "오늘의 콘텐츠" feed. The single saturated purple `#7a3bff` is the brand's signal of ambition and forward motion, concentrated on the actions that turn knowledge into a member's next step. The current live surface is built on a Tailwind-style slate foundation, giving it a clean, design-system-disciplined credibility.

What PUBLY refuses: the hustle-culture hype of self-improvement content mills, the institutional dryness of legacy corporate e-learning, and the clickbait packaging of free content farms. Its bet is that ambitious professionals will pay for curated, credible, well-designed knowledge — and the design has to look worth paying for: composed enough to trust, modern enough to feel like growth.

## 12. Principles

1. **The product is reading.** Everything serves sustained reading of credible knowledge. *UI implication:* long-form body gets a comfortable measure and generous leading; never sacrifice reading comfort for density.
2. **One purple, rarely used.** `#7a3bff` is the only accent and earns emphasis through scarcity. *UI implication:* if purple appears on more than the forward-moving actions and active states, it has been overused — pull it back.
3. **Hierarchy in slate, not color.** Text rank is built in the slate scale. *UI implication:* never reach for a colored label to create hierarchy; restate with weight + slate-shade.
4. **Composed flatness over depth.** Default cards carry a 1px slate border, not a shadow. *UI implication:* shadows are for hover and floating overlays only; the flat-bordered card is the credible-professional default.
5. **Credible, not hype.** The brand sells knowledge as a tool, not a life-hack. *UI implication:* copy and packaging avoid clickbait and urgency; titles are specific and useful.
6. **Worth paying for.** The design has to justify a membership fee. *UI implication:* polish, whitespace, and consistency are non-negotiable — a cheap-looking surface undermines the value proposition.

## 13. Personas

*Personas are fictional archetypes informed by PUBLY's publicly described user base (Korean knowledge workers and ambitious professionals investing in career growth), not individual people.*

**지원 (Jiwon), 30, Seoul.** Product manager at a startup. Reads PUBLY reports on the subway to keep up with PM frameworks and data literacy. Saves templates she can adapt at work. Subscribed because the curation saves her the time of filtering free content of unknown quality.

**태경 (Taekyung), 36, Seoul.** Marketing team lead. Uses PUBLY to brief himself before strategy meetings and to share relevant reports with his team. Values the credible, well-edited packaging — he'd be embarrassed to forward a clickbait blog post.

**현지 (Hyunji), 27, Pangyo.** Junior developer transitioning toward engineering management. Follows career-growth series and reads on her laptop in the evening. The calm slate reading view is part of why she actually finishes reports instead of bookmarking and forgetting.

**민호 (Minho), 42, Seoul.** Mid-career professional considering a pivot. Set up a detailed role/experience profile so the feed surfaces relevant transition content. Treats the monthly fee as a small, deliberate investment in his own growth.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no saved content)** | Single line (`아직 저장한 콘텐츠가 없어요`) in 14px/400 `#575b5c`, 12px gap, purple-outline CTA `콘텐츠 둘러보기`. No harsh empty illustration. |
| **Empty (search no results)** | One line `'{검색어}'에 대한 결과가 없어요` 14px/400 `#575b5c`, then recommended topics below. Never a dead-end. |
| **Empty (filter cleared)** | `조건에 맞는 콘텐츠가 없어요` 14px/400 `#77797b`. No CTA — user adjusts filters. |
| **Loading (feed)** | Skeleton cards at `#f5f5f5` matching the card layout: 16:9 cover rectangle, two title lines, one meta line. Shimmer 1.2s, 6% white highlight. No spinner overlay. |
| **Loading (report content)** | Skeleton text blocks at `#f5f5f5` matching paragraph rhythm; cover fades in. No blocking spinner. |
| **Loading (subscribe action)** | Purple button text swaps to a 20px `#ffffff` spinner — geometry unchanged for frame-stability. |
| **Error (inline form)** | Input border `#ef4444` 1px, helper text 13px/400 `#ef4444` below. One actionable sentence (`이메일을 다시 확인해 주세요`). |
| **Error (toast)** | `#0f172a` background, white 14px/500 text, 8px radius, 3s auto-dismiss. Bottom of screen. One sentence, no icon. |
| **Error (network / blocking)** | Centered: 16px/700 `#0f172a` headline (`연결이 불안정해요`), 14px/400 `#575b5c` subline, purple retry button. No illustration. |
| **Success (saved)** | Bottom snackbar: `#0f172a` bg, white 14px/500 `저장했어요`, purple-text `저장함 보기` button on right. 3s auto-dismiss. |
| **Success (membership started)** | Dedicated confirmation screen: `멤버십이 시작되었어요` 24px/700 `#0f172a`, benefit summary card, purple `콘텐츠 둘러보기` CTA. Composed, not confetti-heavy. |
| **Skeleton** | `#f5f5f5` blocks at exact card dimensions, shimmer 1.2s. Title and meta slots blank until resolved. |
| **Disabled** | Button bg drops to `#ced0d1`, text stays `#ffffff`. No outline tricks. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox states |
| `motion-fast` | 150ms | Hover, focus, button press, card lift |
| `motion-standard` | 220ms | Default — card expand, tab switch, dropdown reveal |
| `motion-slow` | 320ms | Sheet / modal presentation, success entry |
| `motion-page` | 280ms | Route push/pop |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, modals, route entries |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, modal close |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — card hover, tab content |

**Spring stance.** Spring and overshoot easings are avoided on PUBLY surfaces. The brand is a credible professional reading product; bouncy motion reads as consumer-toy and undermines the worth-paying-for composure. Motion is calm and functional — a card lifts gently on hover, a sheet slides up, content fades in. The reading experience stays still and steady.

**Signature motions.**

1. **Card hover lift.** On desktop, a content card raises with a soft shadow (`0px 2px 8px rgba(0,0,0,0.06)`) over `motion-fast / ease-standard` — a quiet invitation to read, never a bounce.
2. **Report fade-in.** Long-form report content fades in section by section as it loads (`motion-standard / ease-enter`) — the reading surface composes calmly rather than popping.
3. **Membership sheet.** The paywall / membership sheet rises from `y+40px` (`motion-slow / ease-enter`) with a backdrop fade to `rgba(0,0,0,0.5)`. Dismissal `motion-fast / ease-exit`.
4. **Tab switch.** Topic-feed tabs cross-fade content (`motion-standard`) — sliding would imply an axial relationship the topics don't have.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` collapse to `motion-instant`, cross-fades replace any slide. The reading experience stays fully usable.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — Direct verification (MCP playwright, 2026-05-27):
- https://publy.co/ (live home surface). Confirmed: body font-family
  -apple-system, "system-ui", "Segoe UI", Roboto, ... sans-serif; body
  color rgb(15,23,42) = #0f172a (slate ink, dominant text); body bg
  #ffffff; primary CTA bg rgb(122,59,255) = #7a3bff ("알림 설정하기",
  8px radius, 12px padding, 14px) — the sole interactive accent
  (~100 occurrences); purple-tint rgb(241,235,255) = #f1ebff; dominant
  border rgb(226,232,240) = #e2e8f0 (slate-200, ~900 occurrences);
  slate scale rgb(87,91,92)/rgb(119,121,123)/rgb(151,155,158)/
  rgb(206,208,209); section fill rgb(245,245,245).

Tier 2 — Press / secondary (WebSearch, 2026-05):
- https://apps.apple.com/bb/app/퍼블리-커리어-멤버십-publy/id1440756899
  — "커리어 멤버십" positioning; monthly career content; integrated
  career membership across a professional's career arc.

ASSUMED-VS-VERIFIED NOTE: The task brief assumed primary blue #2440FF
(+ black). Live inspect found the sole interactive accent is purple
#7a3bff (rgb(122,59,255)), NOT a blue. PUBLY's current surface is
purple-led. This DESIGN.md uses the live-verified #7a3bff as
primary_color. The assumed #2440FF does not appear as a dominant token
on the current live surface.

Personas (§13) are fictional archetypes informed by PUBLY's publicly
described user base (Korean knowledge workers / ambitious professionals).
Any resemblance to specific individuals is unintended.

Interpretive claims (editorial, not documented PUBLY statements):
- "Professional reading room" / "worth paying for" framing (§1, §11,
  §12) — editorial reading of the slate-and-white reading surface +
  membership model.
- The 6 numbered principles (§12) — synthesized from observed surface
  behavior + the curated-knowledge membership positioning; not a
  published design-principles list.
- Component-internal geometry beyond observed tokens (card radii, badge
  values, shadow specs) is reconciled from the live composed-flat slate
  surface; re-verify in a stable session before treating as
  authoritative DS specs.
- The spring stance (§15) — derived from the credible-professional
  brand posture, not a documented PUBLY motion rule.
-->

---

**Verified:** 2026-05-27 (omd:add-reference initial create — Tier 1 live inspect / Tier 2 press confirmed)
**Tier 1 sources:** publy.co (live playwright inspect — system-UI font stack, body slate-ink `#0f172a` on `#fff`, sole interactive accent purple `#7a3bff` on primary CTA at 8px radius / 12px padding / 14px·600, purple-tint `#f1ebff`, dominant border slate-200 `#e2e8f0`, full slate neutral scale, section fill `#f5f5f5`).
**Tier 2 sources:** getdesign.md/publy — not checked. styles.refero.design — not checked. App Store ("커리어 멤버십 PUBLY", monthly career content, integrated career membership).
**Style ref:** `notion` (neutral composed-reading tone scaffolding).
**Conflicts unresolved:** Assumed primary `#2440FF` blue (from task brief) NOT confirmed — live inspect found the sole interactive accent is purple `#7a3bff`. Resolved in favor of Tier 1 live value `#7a3bff`. Component-internal geometry reconciled from surface treatment; re-run Tier 2 (getdesign/refero) to lock token values.
