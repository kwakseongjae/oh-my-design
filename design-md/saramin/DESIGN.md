---
id: saramin
name: Saramin
display_name_kr: 사람인
country: KR
category: saas
homepage: "https://www.saramin.co.kr"
primary_color: "#4876ef"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=saramin.co.kr&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = action blue (#4876ef, gray120/blue80 token, most-used CTA/link color); hero keyword-search field border is the brighter blue90 (#2d67ff); AI features carry a sky-blue glow (#02c6ff). Near-black ink is #292e41 (gray120). Two live surfaces inspected; values cross-checked against Saramin's own /sri_css token scales (gray/blue/coral/green)."
  colors:
    primary: "#4876ef"
    primary-strong: "#3157dd"
    primary-bright: "#2d67ff"
    tint: "#eff5ff"
    ink: "#292e41"
    ink-strong: "#151822"
    body: "#373f57"
    slate: "#475067"
    muted: "#5c667b"
    muted-alt: "#67738e"
    faint: "#8491a7"
    hairline: "#d7dce5"
    divider: "#eaedf4"
    surface: "#f4f6fa"
    surface-soft: "#f8fafc"
    canvas: "#ffffff"
    success: "#17a187"
    alert: "#ff5656"
    highlight: "#fff7d6"
    ai: "#02c6ff"
  typography:
    family: { sans: "Pretendard", fallback: "Malgun Gothic" }
    display: { size: 32, weight: 700, lineHeight: 1.3, use: "Page / section titles (title_common)" }
    title:   { size: 20, weight: 700, lineHeight: 1.4, use: "Segmented-tab heads, sub-section titles (국내/해외)" }
    body:    { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text and nav items" }
    label:   { size: 14, weight: 700, lineHeight: 1.4, use: "Emphasis labels and button text (AI 검색)" }
    caption: { size: 13, weight: 400, lineHeight: 1.5, use: "Meta, region counts, secondary labels" }
    micro:   { size: 11, weight: 400, lineHeight: 1.4, use: "Fine print, tiny tags" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 48 }
  rounded: { sm: 8, md: 12, lg: 16, xl: 20, pill: 28, round: 40, full: 9999 }
  shadow:
    card: "rgba(17,42,128,0.08) 2px 6px 16px 0px"
    soft: "rgba(55,63,87,0.13) 0px 6px 10px 0px"
    ai: "rgba(0,161,248,0.3) 0px 0px 10px 0px"
  components:
    search-bar:     { type: input, bg: "#ffffff", fg: "#292e41", border: "2px solid #2d67ff", radius: "28px", height: "52px", font: "16px / 400 Pretendard", use: "Hero keyword-search field — the homepage centerpiece" }
    button-primary: { type: button, bg: "#4876ef", fg: "#ffffff", radius: "8px", font: "15px / 700 Pretendard", states: "shadow rgba(72,118,239,0.1) · hover #3157dd", use: "Primary action — search submit / apply CTA" }
    button-ai:      { type: button, bg: "#02c6ff", fg: "#ffffff", radius: "20px", height: "40px", font: "14px / 700 Pretendard", states: "cyan glow shadow rgba(0,161,248,0.3)", use: "AI search entry — sky-blue pill with glow" }
    button-outline: { type: button, fg: "#373f57", border: "1px solid #d7dce5", radius: "16px", height: "32px", padding: "0 13px", font: "13px / 700 Pretendard", use: "Secondary outline action (기업서비스)" }
    entry-pill:     { type: button, bg: "#ffffff", fg: "#292e41", radius: "40px", padding: "3px 12px", font: "13px / 700 Pretendard", use: "Inline white pill (공식관 입장하기)" }
    job-card:       { type: card, bg: "#ffffff", fg: "#292e41", border: "1px solid #d7dce5", radius: "16px", padding: "16px", states: "shadow rgba(17,42,128,0.08)", use: "Job-posting card in list / featured grid" }
    surface-card:   { type: card, bg: "#f4f6fa", fg: "#292e41", border: "1px solid #eaedf4", radius: "16px", use: "Tinted utility card (tool shortcuts, greeting links)" }
    region-tab:     { type: tab, active: "text #475067 + 2px bottom border #4876ef", disabled: "#67738e label", font: "20px / 700 Pretendard", use: "국내 / 해외 segmented tabs" }
    badge-alert:    { type: badge, bg: "#fff7d6", fg: "#ff5656", radius: "4px", font: "12px / 700 Pretendard", use: "D-day / urgency tag on highlighted listings" }
    chip-region:    { type: badge, bg: "#eff5ff", fg: "#292e41", radius: "4px", font: "13px / 400 Pretendard", use: "Selected region / filter chip (tinted)" }
  components_harvested: true
---

# Design System Inspiration of Saramin

## 1. Visual Theme & Atmosphere

Saramin (사람인) is one of Korea's two dominant recruitment platforms, and its interface reads like a high-density information utility that has been deliberately civilized — a wall of job postings, region counts, and filters that never tips into chaos because a disciplined blue-and-grey system holds it together. The canvas is pure white (`#ffffff`), and the working surface is a cool, almost imperceptible grey (`#f4f6fa`) that Saramin uses to fence off cards, tool shortcuts, and filter rows without ever resorting to heavy borders. Text sits in a deep blue-black ink (`#292e41`) rather than pure black, which keeps a screen full of company names and deadlines feeling calm instead of harsh. The single saturated brand hue is an action blue (`#4876ef`) — reserved for the things you click: the primary CTA, links, the active-tab underline — so in a layout with hundreds of competing elements, the blue is always the answer to "what do I press next?"

The typographic personality is functional Korean-product: everything is set in **Pretendard** (falling back to `Malgun Gothic`), the de-facto hangul UI typeface, tuned for dense legibility at small sizes. There is almost no decorative weight play — Saramin leans on a tight two-step contrast, weight 400 for the river of reading text and weight 700 for the things that must be scanned (tab heads at 20px, button labels, section titles at 32px). This is a system optimized for *scanning under pressure*: a job seeker comparing 64,706 Seoul postings needs hierarchy that survives at a glance, not expressive headlines.

What distinguishes Saramin from a flat content portal is a small, precise depth language and a layered accent system. Cards lift on a signature navy-tinted shadow (`rgba(17,42,128,0.08)`) — the shadow itself is blue, echoing the brand — while secondary lifts use a neutral slate shadow. Around the action blue sits a supporting cast that each carry a job: a brighter blue (`#2d67ff`) outlines the hero keyword-search field, a sky blue (`#02c6ff`) marks the newer AI features with a soft cyan glow, a coral red (`#ff5656`) flags D-day urgency, and a warm cream (`#fff7d6`) tints premium/highlighted listings so paid placements read as "lit" rows in the feed. The result is engineered, trustworthy, and quietly modern — a twenty-year-old job board that has been continuously refactored into a real design system.

**Key Characteristics:**
- Pretendard everywhere (fallback `Malgun Gothic`) — dense, hangul-optimized, two-step weight contrast (400 body / 700 emphasis)
- Action blue (`#4876ef`) reserved for interactive elements — CTA, links, active-tab underline
- Near-black blue ink (`#292e41`) for text instead of pure black — calm under high density
- Cool-grey neutral ladder (`#475067` → `#5c667b` → `#67738e` → `#8491a7`) for text hierarchy
- Tinted-surface zoning (`#f4f6fa`) and thin hairlines (`#d7dce5`) instead of heavy chrome
- Signature navy-tinted card shadow (`rgba(17,42,128,0.08)`) — elevation that is on-brand blue
- A working accent cast: bright blue (`#2d67ff`) search outline, sky-blue (`#02c6ff`) AI glow, coral (`#ff5656`) urgency, cream (`#fff7d6`) premium-listing highlight
- 16px radius as the card workhorse; pills (28px / 40px) for search and inline chips

## 2. Color Palette & Roles

### Primary
- **Action Blue** (`#4876ef`): The primary brand color — used for the main CTA, links, and the active-tab underline. The most frequently declared color in Saramin's own stylesheets (its `blue80` token), it is the system's single "click me" signal.
- **Blue Strong** (`#3157dd`): Deeper blue (`blue100`) for pressed/hover states and high-emphasis fills.
- **Blue Bright** (`#2d67ff`): A brighter, more saturated blue (`blue90`) used specifically for the 2px outline of the hero keyword-search field — the page's focal interactive element.
- **Blue Tint** (`#eff5ff`): Pale blue wash (`blue20`) for selected filter chips, hovered rows, and tinted information panels.

### Ink & Text Hierarchy
- **Ink** (`#292e41`): Primary text and heading color (`gray120`) — a deep blue-black used instead of pure black.
- **Ink Strong** (`#151822`): The darkest neutral (`gray130`) for maximum-contrast moments.
- **Body** (`#373f57`): Secondary body and label text (`gray110`).
- **Slate** (`#475067`): Tertiary text and active segmented-tab labels (`gray100`).
- **Muted** (`#5c667b`): Muted captions and helper text (`gray90`).
- **Muted Alt** (`#67738e`): Inactive tab labels and metadata (`gray80`).
- **Faint** (`#8491a7`): Lowest-emphasis labels, icon strokes, and input placeholders (`gray70`).

### Surface & Borders
- **Canvas** (`#ffffff`): Page background, cards, and text on colored fills.
- **Surface** (`#f4f6fa`): Cool-grey tinted surface (`gray20`) for utility cards and segmented sections.
- **Surface Soft** (`#f8fafc`): The lightest grey (`gray10`) for subtle alternating blocks.
- **Hairline** (`#d7dce5`): The primary border/divider color (`gray40`) for cards and outline buttons.
- **Divider** (`#eaedf4`): Lighter hairline (`gray30`) for inner separators and tinted-card outlines.

### Accent & Semantic
- **AI Sky** (`#02c6ff`): Sky-blue (`skyBlue80`) marking AI-powered features, paired with a soft cyan glow shadow.
- **Alert Coral** (`#ff5656`): Coral red (`coral90`) for D-day deadlines, urgency, and error states.
- **Highlight Cream** (`#fff7d6`): Warm cream (`yellow20`) tint for premium / highlighted job rows in the feed.
- **Success Green** (`#17a187`): Teal-green (`green100`) for success and positive status.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard`, the document default for every text element.
- **Fallback stack**: `Malgun Gothic`, `dotum`, `gulim`, `sans-serif` — the legacy Korean web-safe ladder for environments without Pretendard.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display / Page Title | Pretendard | 32px (2.00rem) | 700 | 1.3 | Page and section titles (`title_common`) |
| Tab / Sub-section | Pretendard | 20px (1.25rem) | 700 | 1.4 | Segmented tab heads (국내 / 해외) |
| Body / Nav | Pretendard | 16px (1.00rem) | 400 | 1.5 | Standard reading text, top-nav items |
| Label / Button | Pretendard | 14px (0.88rem) | 700 | 1.4 | Emphasis labels, button text (AI 검색) |
| Caption | Pretendard | 13px (0.81rem) | 400 | 1.5 | Meta, region counts, secondary labels |
| Micro | Pretendard | 11px (0.69rem) | 400 | 1.4 | Fine print, tiny tags |

### Principles
- **One typeface, two weights**: Pretendard 400 carries reading text; Pretendard 700 carries everything that must be scanned. Hierarchy comes from weight and size, not from a second family.
- **Density over drama**: Body sits at 16px and drops to 13px for meta — sizes chosen so a feed of hundreds of postings stays legible without scrolling fatigue.
- **Scan-first headings**: 700-weight at 20–32px gives tab heads and section titles enough authority to anchor a dense page at a glance.
- **Hangul-safe fallback**: The `Malgun Gothic / dotum / gulim` chain guarantees consistent hangul rendering everywhere Pretendard is unavailable.

## 4. Component Stylings

### Buttons

**Primary Action**
- Background: `#4876ef`
- Text: `#ffffff`
- Radius: 8px
- Font: 15px Pretendard weight 700
- Hover: `#3157dd` background
- Shadow: `rgba(72,118,239,0.1) 0px 3px 10px`
- Use: Primary CTA — search submit, apply, confirm

**AI Search**
- Background: `#02c6ff`
- Text: `#ffffff`
- Radius: 20px
- Height: 40px
- Font: 14px Pretendard weight 700
- Shadow: `rgba(0,161,248,0.3) 0px 0px 10px` (cyan glow)
- Use: AI-powered search entry pill

**Outline Action**
- Text: `#373f57`
- Border: 1px solid `#d7dce5`
- Radius: 16px
- Height: 32px
- Padding: 0px 13px
- Font: 13px Pretendard weight 700
- Use: Secondary actions in the header (기업서비스)

**Entry Pill**
- Background: `#ffffff`
- Text: `#292e41`
- Radius: 40px
- Padding: 3px 12px
- Font: 13px Pretendard weight 700
- Use: Inline white pill links (공식관 입장하기)

### Inputs

**Hero Keyword Search**
- Background: `#ffffff`
- Text: `#292e41`
- Border: 2px solid `#2d67ff`
- Radius: 28px
- Height: 52px
- Font: 16px Pretendard weight 400
- Placeholder: `#8491a7`
- Use: The homepage centerpiece search field

### Cards & Containers

**Job Card**
- Background: `#ffffff`
- Text: `#292e41`
- Border: 1px solid `#d7dce5`
- Radius: 16px
- Padding: 16px
- Shadow: `rgba(17,42,128,0.08) 2px 6px 16px`
- Use: Job-posting card in the list and featured grid

**Tinted Surface Card**
- Background: `#f4f6fa`
- Text: `#292e41`
- Border: 1px solid `#eaedf4`
- Radius: 16px
- Use: Utility cards — tool shortcuts, greeting links

### Tabs

**Region Segmented Tab**
- Active: text `#475067` + 2px bottom border `#4876ef`
- Inactive: text `#67738e`
- Font: 20px Pretendard weight 700
- Use: 국내 / 해외 segmented switch on the jobs page

### Badges

**Urgency / D-day**
- Background: `#fff7d6`
- Text: `#ff5656`
- Radius: 4px
- Font: 12px Pretendard weight 700
- Use: D-day countdown and urgency flags on highlighted listings

**Selected Filter Chip**
- Background: `#eff5ff`
- Text: `#292e41`
- Radius: 4px
- Font: 13px Pretendard weight 400
- Use: Selected region / filter chip (e.g., 서울 (64,706))

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces + own CSS token scales)
**Tier 1 sources:** https://www.saramin.co.kr/zf_user/, https://www.saramin.co.kr/zf_user/jobs/list/domestic, https://saramin.github.io/
**Tier 2 sources:** getdesign.md/saramin (directory shell — no usable KR token data); styles.refero.design (not listed — KR under-coverage)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 48px
- Notable: Card and list padding lands consistently at 16px; horizontal control padding clusters at 13–14px, keeping the dense header chrome tight but tappable

### Grid & Container
- Centered max-width content column with a fixed top nav (64px) over the keyword-search band
- Jobs surface is filter-first: a sticky filter rail (region / job / keyword) above a vertically stacked list of 16px-radius cards
- Featured/recommendation modules use horizontal card carousels with `다음` (next) arrow buttons
- Region selectors render as a dense grid of count-bearing chips (서울 (64,706), 경기 (55,520) …)

### Whitespace Philosophy
- **Controlled density**: Saramin embraces information density — the goal is comparison at speed — but fences each cluster with a tinted `#f4f6fa` surface and `#d7dce5` hairlines so the eye can parse zones.
- **Tint as grouping**: Selected and hovered states wash to a pale blue (`#eff5ff`) rather than adding borders, keeping the grid visually quiet.
- **Cards as the unit**: Almost everything substantive is a 16px-radius card; rhythm comes from consistent card gaps, not decorative spacing.

### Border Radius Scale
- Small (4px): chips, badges, inline tags
- Medium (8px–12px): buttons, small controls
- Large (16px): cards and containers — the workhorse
- Pill (20px / 28px): AI pill, hero search field
- Round (40px): inline white pills
- Full (9999px): circular avatars and icon buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most rows |
| Tint (Level 1) | `#f4f6fa` surface / `#eff5ff` selected wash | Zone separation without elevation |
| Hairline (Level 2) | `1px solid #d7dce5` | Card outlines, dividers |
| Card (Level 3) | `rgba(17,42,128,0.08) 2px 6px 16px` | Job cards, featured modules |
| Soft (Level 4) | `rgba(55,63,87,0.13) 0px 6px 10px` | Carousel arrows, floating controls |
| Glow (Accent) | `rgba(0,161,248,0.3) 0px 0px 10px` | AI feature emphasis (cyan glow) |

**Shadow Philosophy**: Saramin's signature elevation is a *blue* shadow — `rgba(17,42,128,0.08)`, a deep navy tint rather than neutral grey. Cards therefore lift in a way that echoes the brand blue instead of looking generically dropped onto the page. Neutral slate shadows (`rgba(55,63,87,...)`) are reserved for secondary floating controls like carousel arrows, and the one expressive exception is the AI feature glow (`rgba(0,161,248,0.3)`), a soft cyan halo that visually tags the newer machine-learning surfaces as distinct from the classic catalog.

## 7. Do's and Don'ts

### Do
- Reserve action blue (`#4876ef`) for interactive elements — CTA, links, active-tab underline
- Use near-black blue ink (`#292e41`) for text rather than pure black
- Set everything in Pretendard with the `Malgun Gothic` fallback; rely on the 400/700 two-weight contrast
- Zone dense content with tinted `#f4f6fa` surfaces and `#d7dce5` hairlines
- Lift cards on the navy-tinted shadow (`rgba(17,42,128,0.08)`) so elevation stays on-brand
- Use the brighter blue (`#2d67ff`) only for the hero search outline — the page's focal control
- Tag AI features with the sky-blue glow (`#02c6ff`); flag urgency with coral (`#ff5656`)
- Tint premium/highlighted listings with cream (`#fff7d6`) so paid rows read as "lit"
- Keep cards on a 16px radius and pad them at 16px

### Don't
- Spread the action blue across non-interactive decoration — it dilutes the "click me" signal
- Use pure black for body text — the system's ink is `#292e41`
- Reach for heavy borders or grey drop shadows to separate content — use tint and the navy shadow
- Introduce a second display typeface — Pretendard carries the whole system
- Mix the accent colors' jobs (coral is urgency/error, sky-blue is AI, cream is premium) — each hue means one thing
- Apply the cyan glow to ordinary buttons — it is the AI marker only
- Let card radii drift below 16px — consistency is what keeps the dense grid calm

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, filter rail collapses to sheets, cards stack full-width |
| Tablet | 768–1024px | 2-column card grids, condensed nav |
| Desktop | 1024–1440px | Full filter rail + multi-column feed, fixed top nav |

### Touch Targets
- Top-nav items at 64px height with comfortable horizontal spacing
- AI search pill at 40px height; outline header buttons at 32px
- Region/filter chips sized for tap with count labels inline

### Collapsing Strategy
- Hero search: full-width 28px-radius field maintained, controls wrap below on mobile
- Filter rail: region / job / keyword selectors collapse into bottom-sheet pickers
- Card feed: multi-column grid → single stacked column, 16px radius preserved
- Carousels: arrow controls give way to native horizontal swipe

### Image Behavior
- Company logos render inside fixed-ratio card thumbnails
- Premium/highlighted rows keep their cream (`#fff7d6`) tint across breakpoints
- Card shadows persist at all sizes, keeping the navy-tinted depth consistent

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / link: Action Blue (`#4876ef`)
- CTA pressed: Blue Strong (`#3157dd`)
- Search outline: Blue Bright (`#2d67ff`)
- Selected wash: Blue Tint (`#eff5ff`)
- Heading / text: Ink (`#292e41`)
- Secondary text: Body (`#373f57`)
- Tertiary text: Slate (`#475067`)
- Muted text: Muted (`#5c667b`) / Muted Alt (`#67738e`)
- Placeholder / icon: Faint (`#8491a7`)
- Surface: `#f4f6fa`; Soft surface: `#f8fafc`; Canvas: `#ffffff`
- Border: Hairline (`#d7dce5`); inner divider (`#eaedf4`)
- AI accent: Sky (`#02c6ff`); urgency: Coral (`#ff5656`); premium tint: Cream (`#fff7d6`); success: Green (`#17a187`)

### Example Component Prompts
- "Create a job card: white `#ffffff` background, 1px solid `#d7dce5` border, 16px radius, 16px padding, shadow `rgba(17,42,128,0.08) 2px 6px 16px`. Title 16px Pretendard 700 in `#292e41`, company meta 13px 400 in `#5c667b`, a coral `#ff5656` D-day badge on a `#fff7d6` highlight strip."
- "Build the hero search: white field, 2px solid `#2d67ff` border, 28px radius, 52px tall, 16px Pretendard, placeholder `#8491a7`. Right-aligned AI pill: `#02c6ff` background, white text, 20px radius, cyan glow `rgba(0,161,248,0.3)`."
- "Design a region filter: chips at 4px radius, selected chip `#eff5ff` background with `#292e41` text. Segmented tab 국내/해외 at 20px Pretendard 700: active `#475067` with a 2px `#4876ef` underline, inactive `#67738e`."
- "Primary CTA button: `#4876ef` background, white text, 8px radius, 15px Pretendard 700, hover `#3157dd`."

### Iteration Guide
1. Pretendard for all text; 400 for reading, 700 for emphasis — no second family
2. Action blue (`#4876ef`) only on interactive elements
3. Ink is `#292e41`, not black; muted ladder is `#475067` → `#5c667b` → `#67738e` → `#8491a7`
4. Separate with tint (`#f4f6fa`) and hairlines (`#d7dce5`), never heavy chrome
5. Cards: 16px radius, 16px padding, navy-tinted shadow `rgba(17,42,128,0.08)`
6. Accent meanings are fixed — sky `#02c6ff` = AI, coral `#ff5656` = urgency, cream `#fff7d6` = premium

---

## 10. Voice & Tone

Saramin's voice is **practical, encouraging, and matchmaking-framed** — it positions itself as the partner that hands you the right opportunity rather than a passive listings board. The brand line *"나에게 딱 맞는 커리어만 매치, 사람인!"* ("Only the career that fits me — matched, Saramin!") sets the register: personal, benefit-first, lightly upbeat without hype. Copy is concrete and verb-led ("취업 준비, 여기서 다 끝낼 수 있어요" / "You can finish all your job-prep right here"), and scale is stated as reassurance, not boast ("1,700만명이 선택한 사람인").

| Context | Tone |
|---|---|
| Brand tagline | Personal, matchmaking-framed. "나에게 딱 맞는 커리어만 매치, 사람인!" |
| Hero / section copy | Concrete promise. "취업 준비, 여기서 다 끝낼 수 있어요." |
| Navigation / labels | Plain, functional. "채용정보", "기업·연봉", "커뮤니티", "취업 자료". |
| Tool & feature names | Descriptive. "AI 검색", "AI서류합격코칭", "맞춤법 검사", "연봉계산기". |
| CTAs | Direct, low-pressure. "로그인", "회원가입", "공식관 입장하기". |
| Trust / scale | Calm reassurance. "1,700만명이 선택한 사람인". |

**Voice samples (verbatim from live surfaces):**
- "나에게 딱 맞는 커리어만 매치, 사람인!" — brand tagline (page title meta). *(verified live 2026-06-26)*
- "취업 준비, 여기서 다 끝낼 수 있어요" — hero promise. *(verified live 2026-06-26)*
- "커리어의 시작, 사람인" — search-field brand line. *(verified live 2026-06-26)*
- "나에게 딱 맞는 커리어만 매치! 사람인에서 새로운 기회를 제안 받고…" — meta description. *(verified live 2026-06-26)*

**Forbidden register**: hard-sell urgency that pressures applicants, fear-based "you'll miss out" framing left unsupported, undefined recruiting jargon, exclamation-stacked hype.

## 11. Brand Narrative

Saramin (사람인) — literally a play on *사람* ("person") with the homophonic *人* — is one of Korea's leading 취업·채용 (job-search and recruiting) platforms, operated by the KOSDAQ-listed company Saramin (사람인, formerly Saramin HR). The saramin.co.kr service grew into a national-scale marketplace connecting job seekers with employers, and the homepage states its reach plainly: *"1,700만명이 선택한 사람인"* (chosen by 17 million members). Its mission, encoded in the tagline *"나에게 딱 맞는 커리어만 매치"*, reframes a job board as a **matching** product — the platform's job is to surface the opportunity that fits *you*, not to dump every listing on the table.

The product is a comprehensive career hub: keyword and AI-assisted job search, region/role/keyword filtering across hundreds of thousands of live postings (서울 alone shows 64,706), company and salary intelligence (기업·연봉), interview reviews, a community, and a growing set of AI tools (AI 검색, AI서류합격코칭) plus practical utilities (연봉계산기, 맞춤법 검사). Saramin also maintains an official engineering culture in public — the Saramin Tech Blog at `saramin.github.io` ("Saramin Tech Blog / 사람인 기술 블로그") — signaling a company that treats its platform as an evolving engineering product, not a static directory.

What Saramin's design refuses: the cluttered, banner-heavy chrome of legacy Korean portals, and the cold institutional look of enterprise HR software. What it embraces: a single disciplined action blue, a calm blue-black ink, tinted-surface zoning that tames extreme information density, and a navy-tinted shadow that makes even a wall of cards feel composed and on-brand.

## 12. Principles

1. **Match, don't just list.** The brand promise is fit, not volume. *UI implication:* recommendation modules, AI search, and personalized rows ("회원님을 위한 추천공고") get prime placement; the action blue points to the next best step.
2. **Density is a feature, not a flaw.** Job seekers compare at speed. *UI implication:* embrace information-rich layouts but fence every cluster with tint (`#f4f6fa`) and hairlines (`#d7dce5`) so the page stays parseable.
3. **One color means action.** *UI implication:* reserve `#4876ef` for interactive elements so, in a crowded grid, "what do I click" is never ambiguous.
4. **Accents are a vocabulary.** *UI implication:* sky-blue (`#02c6ff`) = AI, coral (`#ff5656`) = urgency, cream (`#fff7d6`) = premium. Each hue has exactly one meaning.
5. **Calm under load.** *UI implication:* blue-black ink, navy-tinted shadows, and a single typeface keep a high-density screen feeling steady rather than frantic.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Saramin user segments (Korean job seekers and HR/recruiting teams), not individual people.*

**김민서, 26, 서울.** A new graduate scanning 신입·인턴 postings every morning. Lives in the recommendation feed and the D-day badges; trusts Saramin because the AI search surfaces roles that actually fit her major instead of a flood of irrelevant listings.

**이준호, 34, 경기.** A mid-career engineer quietly exploring 이직 (a move). Uses 기업·연봉 and interview reviews to vet employers before ever applying. Values the calm, scannable card feed — he can compare ten companies in a sitting without the page feeling like an ad wall.

**박지영, 41, 서울.** An HR manager at a mid-sized company posting roles and screening applicants through Saramin's employer tools (기업서비스). Needs dense, reliable controls and trusts a platform that publishes its own engineering blog — it reads as a serious, maintained product.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas, an Ink (`#292e41`) line explaining no matches, and a `#4876ef` CTA to adjust filters. No decorative clutter. |
| **Empty (no saved jobs)** | Muted (`#5c667b`) single line with a path back to search. Calm and practical. |
| **Loading (results fetch)** | Skeleton cards on `#f4f6fa` at final 16px-radius dimensions; quiet pulse, no heavy shimmer. |
| **Selected (filter / region)** | Chip washes to blue tint (`#eff5ff`); active segmented tab gets a 2px `#4876ef` underline with `#475067` text. |
| **Highlighted (premium listing)** | Row tinted cream (`#fff7d6`); D-day flagged with coral (`#ff5656`). |
| **Error (form validation)** | Field-level message in coral (`#ff5656`) below the input, describing what is valid — not just "필수". |
| **Success (application sent)** | Brief inline confirmation; success cues use teal-green (`#17a187`). No celebratory emoji. |
| **Disabled** | Faint (`#8491a7`) text on reduced-opacity surface; blue actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip select, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions, carousel slides |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, dropdowns, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and restrained — appropriate for a high-density utility. Hover and selection respond at `motion-fast` with subtle tint shifts; result cards and recommendation modules fade in from below at `motion-standard / ease-enter`; carousels slide at `motion-slow`. The one expressive flourish is the AI feature glow (`rgba(0,161,248,0.3)`), a soft cyan pulse that draws attention to machine-learning surfaces. No bounce or spring — a recruitment platform signals reliability, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the glow holds static; the product stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle (headed real Chrome,
--disable-http2; headless Chromium connections were reset by Saramin's edge) on two surfaces:
- https://www.saramin.co.kr/zf_user/ (homepage)
- https://www.saramin.co.kr/zf_user/jobs/list/domestic (regional jobs list)
Cross-checked against Saramin's own /sri_css token stylesheets (gray/blue/coral/green/yellow
scales: --blue80 #4876ef, --blue90 #2d67ff, --gray120 #292e41, --gray40 #d7dce5,
--gray20 #f4f6fa, --coral90 #ff5656, --green100 #17a187, --yellow20 #fff7d6, --skyBlue80 #02c6ff).

Voice samples (§10) are verbatim from the live homepage (page title meta, hero copy, meta
description, search-field brand line).

Brand narrative (§11): Saramin (사람인) is a KOSDAQ-listed Korean recruitment platform;
"1,700만명이 선택한 사람인" and the matchmaking tagline are quoted from the live homepage.
The official Saramin Tech Blog (saramin.github.io, "Saramin Tech Blog / 사람인 기술 블로그")
confirms an active first-party engineering surface. Country = KR (parent-company HQ, Seoul).
Broader company facts are widely documented public knowledge, not quoted Saramin statements.

Personas (§13) are fictional archetypes informed by publicly observable Saramin user segments
(Korean job seekers, HR/recruiting teams). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "one color means action", "density is a feature", "the blue shadow
is on-brand elevation") are editorial readings connecting Saramin's observed design to its
positioning, not directly sourced Saramin statements.
-->
