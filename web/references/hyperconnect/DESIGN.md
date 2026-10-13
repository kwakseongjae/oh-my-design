---
name: Hyperconnect
colors:
  primary: '#00dd99'
  azar-cta: '#1cd092'
  ink: '#222222'
  text-secondary: '#858585'
  text-muted: '#b4b4b4'
  legal: '#888888'
  on-dark: '#ffffff'
typography:
  hero:
    fontSize: 62px
    fontWeight: 700
    lineHeight: 1.17
    use: Page hero headline (h1 Our Mission) in white over the hero video, the same on all three captured pages
  section:
    fontSize: 46px
    fontWeight: 700
    lineHeight: 1.2
    use: Home section title (h2 Grow Rapidly & Expand Globally) in rgba(0, 0, 0, 0.8)
  hero-body:
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.5
    use: Hero paragraph under the headline; Pretendard on /ko/, Inter on the English pages
  nav:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.63
    use: Global navigation item and footer column heading (Poppins)
  card-title:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
    use: 'Press card title on /en/news (h2, Poppins, #222222)'
  caption:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    use: Press card date and footer copyright (Inter on the English pages)
  link:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.86
    use: Footer link; its stack asks for noto-sans, which never loads, so it renders in the fallback sans
  button:
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.75
    letterSpacing: 0.42855px
    use: Azar call-to-action label on /en/business (Roboto stack, no web font loaded)
  pagination:
    fontSize: 15.75px
    fontWeight: 500
    lineHeight: 1.75
    use: Page numbers under the press list on /en/news (Inter)
  label:
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.75
    use: RELATED SITE footer button (Pretendard on /ko/, Inter on the English pages)
rounded:
  none: 0px
  pill: 28px
spacing:
  pagination-y: 6
  pagination-x: 8
  cta-y: 6
  cta-x: 16
  arrow: 12
  footer-gap: 90
  footer-heading: 20
components:
  global-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#ffffff'
    height: 26px
    typography: 16px / 700 / 26.1px Poppins
    selected: 'fg #00dd99 on the current section: About on /ko/ (home c=1), Product on /en/business (surface-2 c=2), Newsroom on /en/news (surface-3 c=4)'
    states: 'selected read from rest values on all three pages; one hover and pressed pair on home (Product, c=2) reads #505050 and one pressed frame on /en/business (Newsroom, c=4) reads #f5fefb; the two disagree and neither has a sibling to agree, so they are treated as transition frames and no hover value is declared; focus is not declared from the capture'
    use: Header navigation over the hero video (About, Product, Tech, Newsroom, Career, Contact) at home::[data-omd-capture="2"], 65 x 26
  language-switch:
    type: tab
    backgroundColor: transparent
    textColor: '#ffffff'
    typography: 12px / 400 / 26.1px Poppins
    selected: 'weight 700 on the active language: KOR on /ko/ (home c=8), ENG on the English pages (surface-2 c=7)'
    states: selected read from rest values; no pointer frame
    use: ENG / KOR switch at the right end of the header at home::[data-omd-capture="7"], 24 x 26
  accent-link:
    type: button
    backgroundColor: transparent
    textColor: '#00dd99'
    typography: 14px / 700 / 26.1px (noto-sans stack, falls back)
    states: 'one element; its hover and pressed frames read #b4b4b4, but with no sibling to agree no state is declared'
    use: 자세히 알아보기 text link under Technology Driven on /ko/ at home::[data-omd-capture="10"], 630 x 26
  azar-cta:
    type: button
    backgroundColor: '#1cd092'
    textColor: rgba(0, 0, 0, 0.87)
    rounded: 28px
    padding: 6px 16px
    height: 52px
    typography: 15px / 700 / 26.25px, 0.42855px tracking, Roboto stack (no web font loaded)
    states: rest on two sibling buttons (c=12, c=14); no state frame
    use: START VIDEO CHAT and INSTALL AZAR APP on the Product page at surface-2::[data-omd-capture="12"] and "14", 183 x 52 and 181 x 52; Azar's calls to action carried onto the corporate site in a separate MUI instance
  news-card:
    type: card
    rounded: 0px
    size: 344px x 350px
    use: 'Press card on /en/news (six captured, c=10-15), two per row: title 16px / 700 / 19.2px Poppins #222222, date 12px / 400 / 18px Inter #b4b4b4; the anchor computes the browser-default link colour, so the visible label colours come from its children'
  pagination-button:
    type: button
    backgroundColor: transparent
    textColor: '#b4b4b4'
    rounded: 0px
    padding: 6px 8px
    size: 50px x 50px
    typography: 15.75px / 500 / 27.5625px Inter
    hover: 'fg #858585'
    pressed: 'fg #858585'
    selected: 'fg #222222 on the current page (c=17)'
    states: 'rest, hover and pressed; five sibling buttons (c=18-22) read #858585 in both frames; focus is not declared from the capture'
    use: Page numbers under the press list on /en/news at surface-3::[data-omd-capture="18"]
  pagination-arrow:
    type: button
    backgroundColor: '#858585'
    textColor: '#ffffff'
    rounded: 0px
    padding: 12px
    size: 51px x 51px
    disabled: icon rgba(0, 0, 0, 0.26) on the previous arrow (c=16), which is disabled at rest
    states: rest on the next arrow (c=23); the disabled variant is a rest attribute, not a pointer frame
    use: Previous and next arrows beside the page numbers on /en/news at surface-3::[data-omd-capture="23"]
  related-site-button:
    type: button
    backgroundColor: transparent
    textColor: '#858585'
    border: 1px solid rgba(233, 233, 233, 0.15)
    rounded: 0px
    padding: 6px 8px
    height: 35px
    typography: 12px / 500 / 21px
    states: rest only; no state frame
    use: RELATED SITE button with an end icon in the footer of all three pages (home c=34, surface-2 c=37, surface-3 c=46), 135 x 35; Pretendard on /ko/, Inter on the English pages
fonts:
  roles:
    display: Poppins
    body: Inter
    body-ko: Pretendard
---

# Design System Inspiration of Hyperconnect

## Overview

### Visual Theme & Atmosphere

Hyperconnect (하이퍼커넥트) is a video-technology company founded in 2014 and best known for Azar, its video chat app (the Product page's calls to action read "START VIDEO CHAT" and "INSTALL AZAR APP"). Its careers site describes it as a global video-technology company with world-class depth in video communication (WebRTC) and artificial intelligence, working under a mission to connect people around the world and create social and cultural value; the Tech page claims the world's first mobile version of WebRTC. The company's own history page tracks the arc: Azar's first global Google Play feature and 10 million users in 2015, a real-time voice-translation feature built with Google in 2016, subsidiaries in Singapore and Japan, Hakuna Live in 2019, 300 million cumulative Azar users by January 2022 — and, in 2021, the acquisition by Match Group. The footer now reads "HYPERCONNECT LLC" and links to Match Group's site, and every page title carries the registered mark: "HYPERCONNECT®".

The corporate site hyperconnect.com wears that story plainly. Each page opens on a full-bleed hero video under a translucent dark overlay, with a 62px Poppins "Our Mission" headline and the mission line "Innovate Social Experiences, Making Every Connection a Delightful Adventure" set in white. The header links are white Poppins at 16px / 700, and one of them — the section you are in — turns mint `#00dd99`. That mint is the site's only chromatic signal on its own chrome: it marks the current section on every captured page and colours the "자세히 알아보기" link on the Korean home. Below the hero, section titles drop to near-black `rgba(0, 0, 0, 0.8)` in Poppins 46px / 700, press cards carry `#222222` titles and `#b4b4b4` dates, and a dark footer lists links in `#858585`. Corners are square almost everywhere; the one rounded shape is Azar's own pill-shaped `#1cd092` call to action on the Product page.

**Key Characteristics:**
- One mint, `#00dd99`, reserved for the current navigation item and an accent link
- Poppins 700 for the hero (62px), section titles (46px), navigation and footer headings
- Body type split by language: Pretendard on the Korean pages, Inter on the English ones
- Square geometry: pagination, arrows and footer buttons at 0px radius
- Greys by role: `#222222` titles, `#858585` secondary text, `#b4b4b4` dates and idle page numbers, `#888888` legal links
- Azar's CTAs keep their own look — `#1cd092` fill, 28px pill, dark label — inside the corporate Product page
- No box-shadow on any captured element

### Primary tasks

- Understand the mission and the company's history
- See what Azar is and get the app
- Read about the company's WebRTC, AI and data work, and its tech blog
- Read press releases in the newsroom
- Find open roles on the careers site

### Brand Narrative

Hyperconnect was founded in 2014 around one idea its careers site still states: connect people around the world through video and create social and cultural value doing it. Azar was the vehicle. The company's history page reads as a list of reach — Azar featured by Google Play in more than 56 countries in 2015, 100 million cumulative users by December 2017, 200 million by November 2019, 300 million by January 2022 — interleaved with engineering: a real-time voice-translation function built with Google in 2016, the mobile WebRTC work the Tech page calls a world first, and a steady run of papers at venues such as CVPR, INTERSPEECH, EMNLP, ECCV, ICCV and WSDM. Founder Sang-il Ahn won the EY Entrepreneur Of The Year award in 2018, the year Forbes listed the company among Korea's top ten start-ups.

2021 is the turn: Singletown by SLIDE launched, the company started an enterprise business, and Match Group acquired it. The site now closes with "Copyright © 2026, HYPERCONNECT LLC" and a link to Match Group; the newsroom keeps publishing in Korean, and the tech blog (hyperconnect.github.io) keeps writing about on-device AI and LLM evaluation.

The design is the company in miniature: a dark video hero and big Poppins claims for the consumer side, square controls and plain grey text for the engineering side, and one mint that tells you where you are.

### Principles

1. **Connection is the mission.** *UI implication:* lead with the mission line and the people it connects, not with features.
2. **Show where the user is.** *UI implication:* mint `#00dd99` marks the current section; nothing else competes for it.
3. **Engineering shown as record.** *UI implication:* history and research as dated lists, press as dated cards.
4. **Square and quiet controls.** *UI implication:* 0px corners and grey text on corporate controls; colour belongs to the product's own CTAs.
5. **Language-aware type.** *UI implication:* Pretendard for Korean, Inter for English, Poppins for the brand voice in both.

### Personas

*Personas below are fictional archetypes informed by publicly observable Hyperconnect audiences (Azar users, engineers considering the company, press and partners), not individual people.*

**김도윤, 29, 서울.** A backend engineer reading the Tech page and the tech blog before applying; wants evidence of WebRTC and on-device AI depth.

**Mehmet Yılmaz, 24, Istanbul.** An Azar user who reached the Product page from a search; looks for the START VIDEO CHAT and app-store buttons.

**Sara Lindholm, 41, Stockholm.** A partnerships lead checking the history and newsroom to judge scale and ownership before a meeting.

## Colors

Every token below was read by the deterministic collector on 2026-09-30 from the Korean home (hyperconnect.com/ko/), the Product page and the newsroom.

### Accent
- **Hyperconnect Mint** (`#00dd99`): The current navigation item — About on /ko/, Product on the Product page, Newsroom in the newsroom — and the "자세히 알아보기" text link on the home page. This is the primary because it is the one chromatic colour the corporate chrome renders in a selected role, on all three captured pages.
- **Azar CTA** (`#1cd092`): The fill of START VIDEO CHAT and INSTALL AZAR APP on the Product page, with a dark `rgba(0, 0, 0, 0.87)` label. It appears on one page only, in a separate MUI instance with a Roboto stack — Azar's product action carried onto the corporate site — so it is its own token and not the primary.

### Ink & Text
- **Heading** (`rgba(0, 0, 0, 0.8)`): Home section titles and the default body colour. It carries alpha, so it is recorded here and on the section type role rather than as a colour token (colour tokens are six-digit hex).
- **Ink** (`#222222`): Press card titles and the current page number.
- **Secondary** (`#858585`): Footer links, the copyright line, the RELATED SITE button, the pagination hover colour and the pagination arrow's fill.
- **Muted** (`#b4b4b4`): Press dates and idle page numbers.
- **Legal** (`#888888`): The Notice, IP, Code of Ethics and privacy links along the footer's bottom edge.
- **On Dark** (`#ffffff`): The hero headline and paragraph, the header links, the language switch and the footer column headings.

### Surfaces
- The pages set no background on `html` or `body` (both compute transparent), so the white page is the browser default and no canvas token is declared. The hero's dark overlay and the footer's dark fill sit on elements the collector did not record, so neither is a token.

### Not carried forward
- The June record's `#3860be` filter pill, `#cddcf2` tint card, `#222222` "Apply" and "Confirm My Choices" buttons with 2px corners, and its cookie dialog: none was observed on the three captured pages, and no consent banner appeared on any page opened this session. `#18da9e`, `#f8f8f8`, `#f4f4f4`, `#333333`, `#696969` and `#bbbbbb` were not observed either.
- The June soft and raised shadows: no captured element has a box-shadow.

## Typography

### Font Family
- **Live surface use (display and navigation)**: `Poppins` — loaded, 55 observed uses: the hero headline, section titles, navigation, the language switch, press card titles and footer headings.
- **Live surface use (English body and UI)**: `Inter` — loaded, 37 observed uses: the hero paragraph on English pages, press dates, page numbers, the copyright line and the RELATED SITE button.
- **Live surface use (Korean body)**: `Pretendard` — loaded, 11 observed uses: the hero paragraph, copyright and RELATED SITE button on /ko/, and the App Store and Google Play links on the Product page.
- **Declared, not loaded**: `Noto Sans` — the stylesheet declares the face and 146 elements ask for `noto-sans`, but no face loaded, so body copy, list items and footer links render in the browser's fallback sans. No token uses it.
- **System stack**: `Roboto` — the Azar CTAs' MUI stack (`Roboto, Helvetica, Arial, sans-serif`); no web font loads for it.
- **Brand typeface**: none is published on the pages opened; the collector did not record the file URLs of the loaded faces.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Observed on |
|------|------|------|--------|-------------|----------------|-------------|
| Hero | Poppins | 62px | 700 | 72.354px (1.17) | normal | All three pages |
| Section | Poppins | 46px | 700 | 55.2px (1.2) | normal | Home |
| Hero Body | Pretendard / Inter | 22px | 400 | 33px (1.5) | normal | /ko/ / English pages |
| Nav | Poppins | 16px | 700 | 26.1px (1.63) | normal | Header, footer headings |
| Card Title | Poppins | 16px | 700 | 19.2px (1.2) | normal | Newsroom |
| Pagination | Inter | 15.75px | 500 | 27.5625px (1.75) | normal | Newsroom |
| Button | Roboto stack | 15px | 700 | 26.25px (1.75) | 0.42855px | Product page (Azar) |
| Link | fallback sans | 14px | 400 | 26.1px (1.86) | normal | Footer |
| Label | Pretendard / Inter | 12px | 500 | 21px (1.75) | normal | Footer button |
| Caption | Inter | 12px | 400 | 18px (1.5) | normal | Press dates, copyright |

### Principles
- **Poppins carries the brand voice**: every headline and every navigation label is Poppins 700.
- **Body type follows the language**: Korean pages switch the hero paragraph and footer text to Pretendard; English pages use Inter.
- **Weight, not size, separates UI text**: the selected language is the same 12px Poppins at 700 instead of 400.

## Layout

### Spacing System
- Measured paddings: 6px 8px on page numbers, 6px 16px on the Azar CTA, 12px on the arrows, 6px 8px on the RELATED SITE button.
- Footer columns sit 90px apart (right padding on each column heading) with 20px under each heading.

### Grid & Container
- A full-width hero with a 720px text block at the left.
- The newsroom lays press cards out two per row at 344px wide, rows repeating about every 440px.
- A dark footer closes every page with six link columns, a copyright line and the RELATED SITE button.

### Whitespace Philosophy
- Large headline, short paragraph, generous gaps: the home page gives each section title (Grow Rapidly & Expand Globally, Technology Driven, Creating Enjoyment) its own band.

### Border Radius Scale
- 0px: page numbers, arrows, footer button, press cards
- 28px: the Azar CTA pill
- 50%: a 60 × 60 icon button on the hero

### Responsive Behavior

#### Breakpoints
- Captured at 1440 × 900 only; no breakpoint behaviour was measured.

#### Touch Targets
- Page numbers are 50 × 50 and arrows 51 × 51; header links are 26px tall.

#### Collapsing Strategy
- Not measured.

#### Image Behavior
- The hero is a full-bleed video under a dark overlay; press cards set their title and date at the foot of a 344 × 350 tile.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every captured element |

**Shadow Philosophy:** No captured element has a box-shadow. Depth comes from the hero video under its overlay and from the dark footer, not from elevation.

## Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. The navigation frames caught values between white and the next colour (`#f5fefb`), which shows the links animate without timing them. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/hyperconnect.json (capturedAt 2026-09-30), deterministic collector, 1440x900, logged out: hyperconnect.com (landed on /ko/), /en/business/, /en/news/.
- §1, §10, §11 context: hyperconnect.com/en/company/milestone/ and /ko/company/milestone/ (History), /en/tech/, career.hyperconnect.com, hyperconnect.github.io. All opened headless 2026-09-30.
- hyperconnect.com answers every unknown path with a redirect to /en/ (a catch-all), so the June "about" and "careers" URLs were the home page; they are not cited.
- Azar is a separate product domain; only its CTAs rendered on hyperconnect.com were measured.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Navigation

**Global navigation link**
- Background: transparent
- Text: `#ffffff`
- Selected: `#00dd99` on the current section
- Height: 26px
- Font: 16px / 700 / 26.1px Poppins
- States: one hover and pressed pair reads `#505050` and another pressed frame `#f5fefb`; they disagree, so they are treated as transition frames and no hover is declared
- Use: About, Product, Tech, Newsroom, Career, Contact over the hero video

**Language switch**
- Text: `#ffffff`, 12px Poppins
- Selected: weight 700 on the active language (KOR on /ko/, ENG on English pages); the other stays at 400

**Accent link**
- Text: `#00dd99`
- Font: 14px / 700 (noto-sans stack, falls back)
- Use: 자세히 알아보기 under Technology Driven on the home page

### Buttons

**Azar CTA**
- Background: `#1cd092`
- Text: `rgba(0, 0, 0, 0.87)`
- Radius: 28px
- Padding: 6px 16px
- Height: 52px
- Font: 15px / 700 / 26.25px, 0.42855px tracking, Roboto stack
- Use: START VIDEO CHAT and INSTALL AZAR APP on the Product page

**Pagination button**
- Background: transparent
- Text: `#b4b4b4`; current page `#222222`
- Hover and pressed: `#858585`
- Padding: 6px 8px
- Size: 50 × 50
- Font: 15.75px / 500 Inter

**Pagination arrow**
- Background: `#858585`
- Icon: `#ffffff`; `rgba(0, 0, 0, 0.26)` while disabled
- Radius: 0px
- Padding: 12px
- Size: 51 × 51

**RELATED SITE button**
- Background: transparent
- Text: `#858585`
- Border: 1px solid `rgba(233, 233, 233, 0.15)`
- Padding: 6px 8px
- Height: 35px
- Font: 12px / 500 / 21px

### Cards

**Press card**
- Radius: 0px
- Size: 344 × 350, two per row
- Title: 16px / 700 / 19.2px Poppins `#222222`
- Date: 12px / 400 / 18px Inter `#b4b4b4`

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages, logged out, plus first-party context)
**Tier 1 sources:** https://hyperconnect.com/ko/ ; https://hyperconnect.com/en/business/ ; https://hyperconnect.com/en/news/ ; https://hyperconnect.com/en/company/milestone/ ; https://hyperconnect.com/en/tech/ ; https://career.hyperconnect.com/ ; https://hyperconnect.github.io/
**Tier 2 sources:** getdesign.md/hyperconnect (HTTP 200; the served page contains no occurrence of the name) and styles.refero.design/?q=hyperconnect (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Selected (global navigation)** | Current section in `#00dd99`; others `#ffffff`. |
| **Selected (language switch)** | Active language at 700, the other at 400. |
| **Selected (pagination)** | Current page `#222222`; others `#b4b4b4`. |
| **Hover and pressed (pagination)** | `#b4b4b4` → `#858585` on five sibling buttons. |
| **Disabled (pagination arrow)** | Previous arrow's icon at `rgba(0, 0, 0, 0.26)` on the `#858585` fill. |
| **Transition frames (not declared)** | Navigation hover `#505050` and pressed `#f5fefb` on different links; the accent link's `#b4b4b4` on one element. |

Focus rings, error, empty, loading and success treatments were not captured and are not described.

## Do's and Don'ts

### Do
- Mark the current section with `#00dd99` and keep the other links white over the hero
- Set headlines and navigation in Poppins 700
- Switch body type with the language: Pretendard for Korean, Inter for English
- Keep controls square; use weight to show the selected language
- Use `#222222`, `#858585` and `#b4b4b4` for title, secondary and meta text

### Don't
- Don't spread mint across fills or backgrounds — on the corporate chrome it only marks selection and one link
- Don't treat Azar's `#1cd092` pill as the corporate button; it belongs to the product
- Don't add shadows or rounded cards; none is observed
- Don't rely on `noto-sans` — the family never loads

## Voice & Tone

Hyperconnect speaks as a global technology company with a consumer product: mission-first headlines, factual history, and engineering claims stated as achievements. English carries the brand lines; Korean carries the press releases and the careers site.

| Context | Tone |
|---|---|
| Hero / mission | Aspirational. "Innovate Social Experiences, Making Every Connection a Delightful Adventure." |
| Company pitch | Global and plain. "Hyperconnect is a truly global platform, transcending borders, barriers and boundaries of all types." |
| Tech | Achievement-led. "Hyperconnect developed the world's first mobile version of WebRTC." |
| Product CTAs | Short imperatives in capitals. "START VIDEO CHAT", "INSTALL AZAR APP". |
| Careers | Values as short verbs. Proactive, One team, Aim High, Prioritize, Move fast, Logical, Open. |
| Press | Korean newsroom register, with the registered mark: "하이퍼커넥트®". |

**Voice samples (verbatim, opened 2026-09-30):**
- "Innovate Social Experiences, Making Every Connection a Delightful Adventure" — hero line on every captured page.
- "Connecting the world with innovative technology" — Tech page headline.
- "2014년 설립된 하이퍼커넥트는 비디오 커뮤니케이션(WebRTC)과 인공지능(AI) 분야에서 세계 수준의 실력과 경험을 보유하고 있는 글로벌 영상 기술 기업입니다." — careers site.

**Forbidden register**: hype adjectives without a number behind them, exclamation-heavy CTAs, emoji on the corporate site.

## Agent Prompt Guide

### Quick Color Reference
- Current section and accent link: `#00dd99`
- Hero, header and footer headings: `#ffffff`
- Section titles and body: `rgba(0, 0, 0, 0.8)`; card titles `#222222`
- Secondary `#858585`; meta `#b4b4b4`; legal `#888888`
- Azar CTA: `#1cd092` with an `rgba(0, 0, 0, 0.87)` label

### Example Component Prompts
- "Create a header over a dark hero video: white 16px / 700 Poppins links, the current one in `#00dd99`, and an ENG / KOR switch where the active language is 700."
- "Design a press card grid: two cards per row, 344px wide, square corners, title 16px / 700 Poppins `#222222`, date 12px Inter `#b4b4b4`."
- "Build pagination: 50 × 50 transparent buttons with 15.75px / 500 Inter numbers in `#b4b4b4`, hover `#858585`, current page `#222222`, and square `#858585` arrow buttons with white icons."

### Iteration Guide
1. Poppins 700 for every headline and navigation label
2. One mint, only for selection and a single accent link
3. Square corners on every corporate control
4. Pretendard for Korean text, Inter for English
5. No shadows

---

## Governance

### Known Gaps

- **Contrast, `pagination-arrow`.** Text `#ffffff` on `#858585` measures 3.69:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
