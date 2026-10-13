---
name: 42dot
colors:
  primary: '#5a46fa'
  on-primary: '#ffffff'
  ink: '#171717'
  heading: '#0d0d0d'
  body: '#333333'
  muted: '#666666'
  slate: '#737d8c'
  faint: '#aaaaaa'
  graphite: '#32353f'
  mist: '#f6f6f9'
  hairline: '#dddddd'
  white: '#ffffff'
typography:
  display-hero:
    fontSize: 67.5px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: '-2.025px'
    use: 'Home key-visual headline (Advancing Mobility, Realizing Possibilities), techSans, 77.625px line, in #ffffff over the hero video; set on a p element'
  page-title:
    fontSize: 32.4px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: '-0.162px'
    use: 'Page headlines on /company/about and /stories/blog-news, techSans, 43.74px line, in #0d0d0d (#171717 on blog-news)'
  section:
    fontSize: 27px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: '-0.054px'
    use: 'Blog heading on /stories/blog-news, Asta Sans, 36.45px line, in #0d0d0d'
  band-title:
    fontSize: 21.6px
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: '-0.108px'
    use: 'Careers band heading on home, Asta Sans, 31.32px line, in #ffffff'
  card-title:
    fontSize: 18.9px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: '-0.0945px'
    use: 'Link-card headings at the foot of /company/about (Global One Team), Asta Sans, 27.405px line, in #0d0d0d'
  milestone:
    fontSize: 16.2px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: '-0.081px'
    use: 'Milestone text in the Our Journey So Far timeline on /company/about, Asta Sans, 23.49px line, in #ffffff'
  lead:
    fontSize: 13.5px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: '-0.068px'
    use: 'Home hero description under the headline, Asta Sans, 19.575px line, in #ffffff'
  tab:
    fontSize: 13.5px
    fontWeight: 500
    lineHeight: 1.45
    use: Blog category tabs (전체, Publication, Tech, Insight, Culture), Asta Sans, 19.575px line
  intro:
    fontSize: 12.15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-0.061px'
    use: Banner description on /stories/blog-news and intro copy on /company/about, Asta Sans, 18.225px line
  body:
    fontSize: 10.8px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-0.054px'
    use: 'Link-card descriptions on /company/about, Asta Sans, 16.2px line, in #333333; the document default is also 10.8px Asta Sans in #171717'
  nav:
    fontSize: 10.8px
    fontWeight: 500
    lineHeight: 1.5
    use: 'Header navigation labels (SDV, AI, Company, Stories), techSans, 16.2px line, in #0d0d0d'
  button:
    fontSize: 10.8px
    fontWeight: 400
    lineHeight: 1.5
    use: Careers label in the header, techSans, 16.2px line
  pill-label:
    fontSize: 9.45px
    fontWeight: 500
    lineHeight: 1.57
    letterSpacing: '-0.047px'
    use: Pill link labels (Explore Stories, Open Roles, Explore Locations), Asta Sans, 14.85px line
  tag:
    fontSize: 9.45px
    fontWeight: 500
    lineHeight: 1.71
    use: Blog tag filter labels, Asta Sans, 16.2px line
  submenu:
    fontSize: 9.45px
    fontWeight: 500
    lineHeight: 1.55
    use: 'Header dropdown sub-items in #666666, techSans, 14.6475px line'
rounded:
  none: 0px
  tag: 5.4px
  badge: 6.75px
  field: 33.75px
  pill: 67.5px
spacing:
  cta-y: 6.75
  cta-x: 18.9
  pill-y: 8.1
  pill-x: 13.5
  tag-y: 2.025
  tag-x: 7.425
  badge-x: 8.1
  tab-bottom: 5.4
components:
  careers-button:
    type: button
    backgroundColor: '#5a46fa'
    textColor: '#ffffff'
    rounded: 67.5px
    padding: 6.75px 18.9px
    height: 29.7px
    typography: 10.8px / 400 / 16.2px techSans
    hover: 'bg #ffffff, fg #0d0d0d, while the header bar behind it turns from rgba(255, 255, 255, 0.6) to solid #ffffff'
    pressed: 'bg #ffffff, fg #0d0d0d'
    states: hover and pressed settle after a 0.3s background-color and color transition (probe on /stories/blog-news and /company/about); the focus reading persisted after blur, so no focus style is attributed
    use: Careers in the fixed header of all three captured pages at home::[data-omd-capture="15"], 75.5 x 29.7; the only filled chromatic action on the site
  pill-link:
    type: button
    backgroundColor: '#32353f'
    textColor: '#ffffff'
    rounded: 67.5px
    padding: 8.1px 13.5px 8.1px 16.2px
    height: 31px
    typography: 9.45px / 500 / 14.85px Asta Sans, letter-spacing -0.04725px
    hover: 'bg #737d8c; the trailing arrow moves 2.025px right'
    pressed: 'bg #737d8c'
    states: '0.15s background transition; focus (Tab #34) draws only the browser default ring, so no brand focus style is declared'
    use: Dark pill links on /company/about (Explore Locations, Open Roles, Explore Stories) at surface-2::[data-omd-capture="27"], 108 x 31 for Explore Stories
  pill-link-light:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0d0d0d'
    rounded: 67.5px
    padding: 8.1px 13.5px 8.1px 16.2px
    height: 31px
    typography: 9.45px / 500 / 14.85px Asta Sans, letter-spacing -0.04725px
    states: rest only; no state frame or probe
    use: White pill link in the lower part of home at home::[data-omd-capture="29"], 92 x 31, the light counterpart of the dark pill
  tag-filter:
    type: badge
    textColor: '#333333'
    border: '1px solid #dddddd'
    rounded: 5.4px
    padding: 2.025px 7.425px
    height: 22px
    typography: 9.45px / 500 / 16.2px Asta Sans
    hover: 'bg #f6f6f9'
    pressed: 'bg #f6f6f9'
    states: '0.2s background-color transition; focus (Tab #31) shows no change'
    use: 'Filter by Tags buttons on /stories/blog-news (#3DOccupancyPrediction, #AKit, #Autonomous and others, 85 instances) at surface-3::[data-omd-capture="26"], transparent at rest'
  category-tab:
    type: tab
    textColor: '#333333'
    border: 2px solid transparent (bottom only)
    padding: 0px 0px 5.4px
    height: 27px
    typography: 13.5px / 500 / 19.575px Asta Sans
    selected: 'fg #0d0d0d with a 2px solid #5a46fa bottom border'
    hover: 'fg #0d0d0d'
    pressed: 'fg #0d0d0d'
    states: '0.2s color transition on unselected tabs; the selected tab shows no change; focus (Tabs #118 and #120) shows no change on either'
    use: Blog category tabs on /stories/blog-news (전체, Publication, Tech, Insight, Culture) at surface-3::[data-omd-capture="114"]
  nav-item:
    type: tab
    textColor: '#0d0d0d'
    height: 16px
    typography: 10.8px / 500 / 16.2px techSans
    selected: 'fg #5a46fa on the current section (Company on /company/about, Stories on /stories/blog-news)'
    states: hover and pressed widen the button box from 44.3px to 97.9px with no colour change; the focus reading persisted after blur and is not attributed
    use: Header navigation labels at home::[data-omd-capture="1"] (SDV, AI, Company, Stories)
  story-badge:
    type: badge
    backgroundColor: '#f6f6f9'
    textColor: '#0d0d0d'
    rounded: 6.75px
    padding: 2.7px 8.1px
    height: 20px
    typography: 9.45px / 500 / 14.6475px Asta Sans
    use: Category badges on the Tech and Stories cards on home (5 instances) at home::span
  search-field:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#0d0d0d'
    border: '1px solid #dddddd'
    rounded: 33.75px
    padding: 8.775px 51.3px 8.1px 15.984px
    height: 38px
    typography: 16px / 400 / 24px Asta Sans, letter-spacing -0.08px
    states: rest only; no state frame or probe reading
    use: Search field on /stories/blog-news at surface-3::[data-omd-capture="24"], 248 x 38
  search-field-dark:
    type: input
    backgroundColor: rgba(0, 0, 0, 0.4)
    textColor: '#ffffff'
    border: 1px solid rgba(255, 255, 255, 0.1)
    rounded: 33.75px
    height: 54px
    typography: 16px / 400 / 24px Asta Sans, letter-spacing -0.08px
    states: rest only; the bundle's focus and pressed frames are not used (focus is never declared from bundle frames and no probe read this field)
    use: Translucent field under the careers heading on home at home::[data-omd-capture="23"], 509 x 54
  pagination-page:
    type: button
    textColor: '#aaaaaa'
    rounded: 5.4px
    size: 27px x 27px
    typography: 10.8px / 600 / 16.2px Asta Sans
    selected: 'bg #737d8c, fg #ffffff'
    disabled: the previous arrow is disabled at rest in rgba(16, 16, 16, 0.3)
    use: Blog pagination on /stories/blog-news; idle pages at surface-3::[data-omd-capture="129"], current page at surface-3::[data-omd-capture="128"]
  video-play-button:
    type: button
    border: '1px solid #ffffff'
    rounded: 100% (circle)
    size: 43px x 43px
    states: rest only; a bundle hover frame shows a white fill, but no probe confirmed it, so no hover is declared
    use: Circular play control over the home hero video at home::[data-omd-capture="22"]; a 54 x 54 version sits over the /company/about video
  footer-select:
    type: button
    textColor: '#dddddd'
    border: 1px solid rgba(255, 255, 255, 0.2)
    rounded: 33.75px
    padding: 0px 14.85px 0px 18.9px
    height: 31px
    typography: 10.8px / 400 / 16.2px Asta Sans, letter-spacing -0.054px
    states: rest only; no state frame or probe reading
    use: Family Site toggle in the footer of all three pages at home::[data-omd-capture="56"], 146 x 31
fonts:
  roles:
    display: techSans
    body: Asta Sans
---

# Design System Inspiration of 42dot

## Overview

### Visual Theme & Atmosphere

42dot (포티투닷) is the Global Software Center of Hyundai Motor Group. It builds Software-Defined Vehicles — E/E architecture, a Vehicle OS and infotainment — and mobility AI: autonomous-driving AI, an LLM-based agentic AI called Gleo AI, and fleet AI. Its own timeline on /company/about starts with the founding of 42dot in March 2019 under the earlier name CODE42. It was selected as Seoul's autonomous transport platform and paid-transport operator in November 2021 and designated Hyundai Motor Group's global software center in June 2023. An Autonomous EV followed in September 2023, the SDV E/E architecture at CES 2024 and SDV technology at Pleos 25 in March 2025. The company page now frames the mission as "Advancing Mobility, Realizing Possibilities — 움직임의 미래를 열고, 모든 가능성을 현실로" and adds "Physical AI 소프트웨어와 로보틱스 혁신으로 미래를 움직입니다."

The name carries the brand. On the company page, 42 is the number that stands for "the answer to life, the universe and everything" in a science-fiction novel, and also the ASCII code of the asterisk (*), the wildcard that matches any character. Shortening the asterisk to a dot gives 42dot, and the company says the name holds two values, inclusiveness and simplicity. The same asterisk shaped the company's own typeface, Asta Sans, which 42dot publishes as open source under the SIL Open Font License.

On 42dot.ai the brand speaks in a quiet, near-monochrome register. Pages open on full-bleed video with a white techSans headline — 67.5px, weight 400, tracked at -2.025px on the home key visual — under a translucent white header. Content then settles on white, with headings in near-black `#0d0d0d`, the document text in `#171717`, and supporting copy in `#333333` and `#666666`. One violet, `#5a46fa`, carries the chromatic weight: it fills the Careers button in every header, colours the current section in the navigation and underlines the selected blog tab. A graphite `#32353f` pill with a slate `#737d8c` hover handles secondary links. Tag chips and badges sit on the pale `#f6f6f9`. None of the 591 captured records carries a box-shadow.

**Key Characteristics:**
- One violet, `#5a46fa`, for the header Careers action, the selected navigation label and the selected tab's 2px underline
- Two typefaces: techSans (served as 42dot Tech Sans files) for headlines, navigation and the Careers label; Asta Sans, 42dot's open-source corporate face, for everything else
- A large, light display headline (67.5px, weight 400, -2.025px tracking) over video, then medium-weight (500) headings at 32.4px and 27px
- Near-black text scale: `#0d0d0d` headings, `#171717` default text, `#333333` descriptions, `#666666` dropdown items, `#737d8c` footer titles
- Pills everywhere an action lives: 67.5px radius on buttons and links, 33.75px on fields, 6.75px on badges, 5.4px on tags
- Flat: no box-shadow on any captured element; separation comes from `#f6f6f9` fills, `#dddddd` hairlines and full-bleed media

### Primary tasks

- Read what 42dot builds across SDV (E/E Architecture, Vehicle OS, Infotainment) and AI (Autonomous Driving AI, Agentic AI, Fleet AI)
- Browse Blog & News and filter posts by category tab or by tag
- Read the company story, timeline and global office network on /company/about
- Move from any page to Careers and open roles

### Brand Narrative

42dot's company page tells its history as a short timeline: founded in March 2019 as CODE42; selected in November 2021 as Seoul's autonomous transport platform and paid-transport operator; ranked first in the Ministry of Land, Infrastructure and Transport's evaluation of autonomous-driving pilot zones in December 2022; designated Hyundai Motor Group's global software center in June 2023; an Autonomous EV unveiled in September 2023; its SDV E/E architecture shown at CES 2024; and SDV technology unveiled at Pleos 25 in March 2025. As the group's global software center it says it leads Hyundai Motor Group's transition to Software-Defined Vehicles and works as "Global One Team" with offices worldwide.

The home page lays out the product as two families. SDV covers E/E Architecture ("Simplified, Scalable, and Standardized Framework"), Vehicle OS and Infotainment built on the agentic Gleo AI. AI covers Autonomous Driving AI for mass production, LLM-based Agentic AI and Fleet AI. The company page adds robotics: "Physical AI 소프트웨어와 로보틱스 혁신으로 미래를 움직입니다."

The identity starts from the name. 42 answers "life, the universe and everything"; 42 is also the ASCII code of the asterisk, a wildcard that matches anything; the dot is the asterisk made small. The company reads that as inclusiveness and simplicity. Asta Sans, the corporate typeface 42dot published as open source in 2024, takes the asterisk as its source too and describes itself as a balance of "precision and approachability". On the website that becomes a near-monochrome page, one violet and two in-house typefaces.

### Principles

1. **Inclusiveness and simplicity.** The two values 42dot reads into its name. *UI implication:* a restrained palette with one accent and plain, capability-first labels.
2. **Clarity, neutrality, and inclusiveness.** The aims stated for Asta Sans. *UI implication:* set reading text in Asta Sans at modest sizes with slight negative tracking; let techSans carry the headline voice.
3. **One accent, one meaning** (editorial reading of the capture). `#5a46fa` marks the primary action and the current place. *UI implication:* never spend it on decoration.
4. **Media leads, the interface stays flat** (editorial reading). *UI implication:* full-bleed video under a translucent header, no shadows, fills and hairlines for separation.

### Personas

*Personas below are fictional archetypes informed by the audiences 42dot's own pages address (engineers evaluating SDV and AI technology, readers of its tech blog, and job seekers), not individual people.*

**정민호, 38, 서울.** A software architect at an automotive supplier who reads the SDV pages (E/E Architecture, Vehicle OS) for architectural depth. He trusts the plain, technical Korean copy more than slogans.

**Sarah Kim, 29, Seoul.** An ML engineer who follows Blog & News, switches to the Tech tab and filters by tags such as #AKit and #Autonomous. She reads posts like the one on Gleo Guard, the safety guardrail for 42dot's in-car AI agent.

**David Park, 26, remote.** A new-grad engineer who arrives on /company/about, reads the timeline and Global One Team, and follows Careers to Open Roles.

## Colors

Every token below was read on 2026-09-30 from https://42dot.ai/ko, /ko/company/about and /ko/stories/blog-news by the deterministic collector at 1440 × 900, and every state by the fixed keyboard probe. They describe 42dot's public website; no vehicle or in-car interface was captured, and none of its values is claimed.

### Primary
- **42dot Violet** (`#5a46fa`): The fill of Careers, the one filled action in the fixed header of all three captured pages (a 75.5 × 29.7 pill with a `#ffffff` label; `home::[data-omd-capture="15"]`). The same violet colours the label of the current section in the header (Company on /company/about, Stories on /stories/blog-news) and draws the 2px bottom border of the selected blog tab (전체). It is the primary because it is the only chromatic colour the site renders in a primary role — the persistent action fill and the selected state — and no other hue appears in any action, selection or accent. On hover and pressed the Careers button inverts to `#ffffff` with a `#0d0d0d` label.
- **On Primary** (`#ffffff`): The Careers label, and white text over video and the dark pill.

### Neutral & Surface
- **White** (`#ffffff`): The body background on all three pages and the light pill fill.
- **Mist** (`#f6f6f9`): Category badges on the home story cards and the hover fill of the blog tag chips.
- **Graphite** (`#32353f`): The dark pill links on /company/about (Explore Locations, Open Roles, Explore Stories).
- **Slate** (`#737d8c`): The dark pill's hover fill, the current page in the blog pagination and the footer navigation titles.
- **Hairline** (`#dddddd`): The 1px border of the blog tag chips and of the blog search field; also the Family Site label in the footer.

### Text
- **Heading** (`#0d0d0d`): Page headlines, the blog heading, navigation labels and the selected tab label.
- **Ink** (`#171717`): The document default text colour on all three pages.
- **Body** (`#333333`): Link-card descriptions, unselected tabs and tag labels.
- **Muted** (`#666666`): Sub-items in the header dropdown.
- **Faint** (`#aaaaaa`): Idle page numbers in the blog pagination.

### Brand assets, not tokens
- Earlier versions of this reference named `#786efa` as the accent, `#282b32` as a hero fill and `#fbfbfb` as a content band. None of them appears in the 2026-09-30 capture, so they are not tokens.
- The hero and footer fills sit behind video or on elements the collector did not record; no fill colour is claimed for them. The header bar is translucent white, `rgba(255, 255, 255, 0.6)` at rest.
- The 42dot logo was not measured; no logo colour is claimed.

## Typography

### Font Family
- **Live surface use**: `Asta Sans` (464 observed uses) and `techSans` (127), both `loaded / high`. Asta Sans is self-hosted from `42dot.ai/fonts/asta/` as WOFF2 subsets (AstaSans-Light, -Regular, -Medium, -SemiBold and others) and sets the body, headings h2–h3, tabs, tags, badges and fields. techSans is served from `42dot.ai/_next/static/media/` as `42dotTechSans_Regular` and `42dotTechSans_Medium` WOFF2 files and sets the hero headline, the h1 page titles, the header navigation, the Careers label and the footer titles. The body element computes `"Asta Sans", sans-serif`.
- **Official distributed font assets**: Asta Sans is published by 42dot itself at github.com/42dot/Asta-Sans ("42dot Sans is the corporate typeface for 42dot"), under the SIL Open Font License 1.1 (OFL.txt: "Copyright 2024 The Asta Sans Project Authors"), and has a Google Fonts specimen page. The README says the face takes its inspiration from the asterisk (ASCII 42) and aims for "clarity, neutrality, and inclusiveness".
- **Official product use**: 42dot's own repository names Asta Sans its corporate typeface. No page opened this session names techSans; its identity rests on the served file names, and no licence or distribution page for it was found.
- **Declared only (no visible use)**: `techSans Fallback`, the metric-matched fallback declared with techSans, with 0 observed uses.
- **Unresolved**: the licence and public availability of 42dot Tech Sans.

All sizes below were computed at a 1440 × 900 viewport and are fractional there (10.8px, 13.5px, 67.5px); other widths were not measured.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Display Hero | techSans | 67.5px | 400 | 77.625px (1.15) | -2.025px | Home key-visual headline, `#ffffff` over video |
| Page Title | techSans | 32.4px | 500 | 43.74px (1.35) | -0.162px | /company/about and /stories/blog-news headlines |
| Section | Asta Sans | 27px | 500 | 36.45px (1.35) | -0.054px | Blog heading |
| Band Title | Asta Sans | 21.6px | 600 | 31.32px (1.45) | -0.108px | Careers band on home, `#ffffff` |
| Card Title | Asta Sans | 18.9px | 500 | 27.405px (1.45) | -0.0945px | Link cards on /company/about |
| Milestone | Asta Sans | 16.2px | 500 | 23.49px (1.45) | -0.081px | Timeline entries on /company/about |
| Lead | Asta Sans | 13.5px | 500 | 19.575px (1.45) | -0.068px | Home hero description |
| Tab | Asta Sans | 13.5px | 500 | 19.575px (1.45) | normal | Blog category tabs |
| Intro | Asta Sans | 12.15px | 400 | 18.225px (1.5) | -0.061px | Blog banner description, about intro |
| Body | Asta Sans | 10.8px | 400 | 16.2px (1.5) | -0.054px | Link-card descriptions, `#333333` |
| Nav | techSans | 10.8px | 500 | 16.2px (1.5) | normal | Header navigation |
| Button | techSans | 10.8px | 400 | 16.2px (1.5) | normal | Careers |
| Pill Label | Asta Sans | 9.45px | 500 | 14.85px (1.57) | -0.047px | Pill links |
| Tag | Asta Sans | 9.45px | 500 | 16.2px (1.71) | normal | Blog tag chips |
| Submenu | techSans | 9.45px | 500 | 14.6475px (1.55) | normal | Header dropdown items, `#666666` |

### Principles
- **Two faces with separate jobs**: techSans for the voice of the page — the hero, page titles, navigation and Careers — and Asta Sans for reading, tabs, tags and fields.
- **Light display, medium headings**: the largest headline is weight 400 with -3% tracking; page titles and section heads step to 500; only the careers band heading reaches 600.
- **Slight negative tracking throughout**: about -0.5% on Asta Sans text from 10.8px to 27px.

## Layout

### Spacing System
- Values come from the captured components, not from a published scale: Careers pads 6.75px × 18.9px, the pill links 8.1px × 13.5px (16.2px on the leading side), tag chips 2.025px × 7.425px, badges 2.7px × 8.1px, and tabs keep 5.4px below the label for the underline.
- Spacing census (all records): 7px, 2px and 8px dominate, followed by 4px, 11px, 3px and 16px.

### Grid & Container
- Full-bleed video key visuals under a fixed, translucent white header on home and /company/about.
- Home stacks SDV and AI sections, each with a Learn More link, then a careers band with a field over media, then Tech and Stories cards.
- /stories/blog-news pairs a tag cloud (Filter by Tags) with a category tab row, a search field and a paginated list.

### Whitespace Philosophy
- **Media first, then white**: each page opens on full-bleed video and resolves into white content.
- **Fill and hairline, not elevation**: chips separate with a `#dddddd` hairline, badges with a `#f6f6f9` fill.

### Border Radius Scale
- None (0px): containers, tabs and list items — 476 of the measured radii
- Tag (5.4px): tag chips and pagination
- Badge (6.75px): story badges
- Field (33.75px): search fields and the footer toggle
- Pill (67.5px): Careers and the pill links
- Circle (100%): the video play buttons

### Responsive Behavior

Only the 1440 × 900 desktop layout was captured. Type, radii and spacing compute to fractional values at that width (for example 10.8px body text and a 67.5px pill radius), but no other viewport was measured, so no breakpoint, collapsing rule or touch-target size is claimed.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every captured element — 0 of 591 records carries a box-shadow |
| Fill | `#f6f6f9` | Story badges; tag chip hover |
| Dark fill | `#32353f` | Dark pill links |
| Translucent | `rgba(255, 255, 255, 0.6)` header over content; `rgba(0, 0, 0, 0.4)` field over media | Fixed header; careers field |

**Shadow Philosophy**: 42dot uses no shadows on its public site. Layering comes from the translucent header over full-bleed video and from fills.

## Motion & Easing

The fixed probe read these transitions on 2026-09-30; nothing else is claimed.

| Element | Transition |
|---|---|
| Careers | `background-color 0.3s ease, color 0.3s ease` |
| Header navigation item | `color 0.3s ease` |
| Dark pill link | `background 0.15s ease, border-color 0.15s ease` |
| Tag chip | `background-color 0.2s ease` |
| Category tab | `color 0.2s ease` |

No custom easing curve was observed; every measured transition uses `ease`. Reduced-motion behaviour was not tested.

## Components

### Buttons

**Careers (primary)**
- Background: `#5a46fa`
- Text: `#ffffff`
- Radius: 67.5px
- Padding: 6.75px 18.9px
- Height: 29.7px
- Font: 10.8px / 400 / 16.2px techSans
- Hover: background `#ffffff`, text `#0d0d0d`, while the header bar turns solid white
- Pressed: background `#ffffff`, text `#0d0d0d`
- States: 0.3s background-color and color transition; the focus reading persisted after blur, so no focus style is attributed
- Use: Careers in the fixed header of every captured page

**Dark pill link**
- Background: `#32353f`
- Text: `#ffffff`
- Radius: 67.5px
- Padding: 8.1px 13.5px 8.1px 16.2px
- Height: 31px
- Font: 9.45px / 500 / 14.85px Asta Sans, letter-spacing -0.04725px
- Hover: background `#737d8c`; the trailing arrow moves 2.025px right
- Pressed: background `#737d8c`
- States: 0.15s background transition; focus shows only the browser default ring
- Use: Explore Locations, Open Roles and Explore Stories on /company/about

**Light pill link**
- Background: `#ffffff`
- Text: `#0d0d0d`
- Radius: 67.5px
- Padding: 8.1px 13.5px 8.1px 16.2px
- Height: 31px
- Font: 9.45px / 500 / 14.85px Asta Sans
- Use: the white pill link in the lower part of home (92 × 31); rest only

**Blog pagination**
- Text: `#aaaaaa` on idle pages
- Radius: 5.4px
- Size: 27px × 27px
- Font: 10.8px / 600 / 16.2px Asta Sans
- Selected: background `#737d8c`, text `#ffffff`
- Disabled: the previous arrow at rest in `rgba(16, 16, 16, 0.3)`
- Use: page numbers under the blog list

**Video play button**
- Border: 1px solid `#ffffff`
- Radius: 100% (circle)
- Size: 43px × 43px on home, 54px × 54px on /company/about
- Use: play control over the hero videos

**Footer Family Site toggle**
- Text: `#dddddd`
- Border: 1px solid `rgba(255, 255, 255, 0.2)`
- Radius: 33.75px
- Padding: 0px 14.85px 0px 18.9px
- Height: 31px
- Font: 10.8px / 400 / 16.2px Asta Sans
- Use: Family Site in the footer of every page

### Tags and Badges

**Tag filter chip**
- Text: `#333333`
- Border: 1px solid `#dddddd`
- Radius: 5.4px
- Padding: 2.025px 7.425px
- Height: 22px
- Font: 9.45px / 500 / 16.2px Asta Sans
- Hover: background `#f6f6f9`
- Pressed: background `#f6f6f9`
- States: 0.2s background-color transition; focus shows no change
- Use: Filter by Tags on /stories/blog-news (#3DOccupancyPrediction, #AKit, #Autonomous and 80 more)

**Story badge**
- Background: `#f6f6f9`
- Text: `#0d0d0d`
- Radius: 6.75px
- Padding: 2.7px 8.1px
- Height: 20px
- Font: 9.45px / 500 / 14.6475px Asta Sans
- Use: category badges on the Tech and Stories cards on home

### Navigation

**Header navigation item**
- Text: `#0d0d0d`
- Height: 16px
- Font: 10.8px / 500 / 16.2px techSans
- Selected: text `#5a46fa` on the current section
- States: hover widens the item box from 44.3px to 97.9px with no colour change; focus not attributed
- Use: SDV, AI, Company and Stories in the fixed header; dropdown sub-items are 9.45px techSans in `#666666`

**Blog category tab**
- Text: `#333333`
- Border: 2px solid transparent at the bottom
- Padding: 0px 0px 5.4px
- Height: 27px
- Font: 13.5px / 500 / 19.575px Asta Sans
- Selected: text `#0d0d0d` with a 2px solid `#5a46fa` bottom border
- Hover: text `#0d0d0d`
- Pressed: text `#0d0d0d`
- States: 0.2s color transition; focus shows no change
- Use: 전체, Publication, Tech, Insight and Culture on /stories/blog-news

### Inputs

**Blog search field**
- Background: `#ffffff`
- Text: `#0d0d0d`
- Border: 1px solid `#dddddd`
- Radius: 33.75px
- Padding: 8.775px 51.3px 8.1px 15.984px
- Height: 38px
- Font: 16px / 400 / 24px Asta Sans
- Use: search on /stories/blog-news (248 × 38)

**Translucent field on media**
- Background: `rgba(0, 0, 0, 0.4)`
- Text: `#ffffff`
- Border: 1px solid `rgba(255, 255, 255, 0.1)`
- Radius: 33.75px
- Height: 54px
- Font: 16px / 400 / 24px Asta Sans
- Use: the field under the careers heading on home (509 × 54)

---

**Verified:** 2026-09-30 (deterministic collector on 3 surfaces + fixed keyboard probe on 2 pages)
**Tier 1 sources:** https://42dot.ai/ko | https://42dot.ai/ko/company/about | https://42dot.ai/ko/stories/blog-news | https://github.com/42dot/Asta-Sans
**Tier 2 sources:** not attempted this session (the July record found no 42dot entry on getdesign.md or styles.refero.design)
**Conflicts unresolved:** none

### States

Only states read by the fixed probe or present at rest in the capture are listed.

| Component | State | Treatment |
|---|---|---|
| Careers | Hover, pressed | `#5a46fa` → `#ffffff` fill, `#ffffff` → `#0d0d0d` label; header bar turns solid white |
| Careers | Focus | Not attributed: the reading persisted after blur |
| Dark pill link | Hover, pressed | `#32353f` → `#737d8c`; arrow moves 2.025px right |
| Dark pill link | Focus | Browser default ring only |
| Tag chip | Hover, pressed | Transparent → `#f6f6f9` |
| Category tab | Hover, pressed | `#333333` → `#0d0d0d` on unselected tabs |
| Category tab | Selected | `#0d0d0d` label, 2px `#5a46fa` underline |
| Header navigation | Selected | `#5a46fa` label |
| Pagination | Selected | `#737d8c` fill, `#ffffff` number |
| Pagination arrow | Disabled | `rgba(16, 16, 16, 0.3)` |

Empty, loading, error and success states were not observed on these public pages and are not described.

## Do's and Don'ts

### Do
- Use `#5a46fa` for the one primary action and for the selected state (navigation label, tab underline)
- Set headlines in techSans and reading text in Asta Sans
- Keep the display headline light (400) with tight tracking; use 500 for page and section headings
- Use pills: 67.5px for actions and links, 33.75px for fields
- Separate with `#f6f6f9` fills and `#dddddd` hairlines instead of shadows
- Put white text directly over full-bleed media, with a translucent white header on top

### Don't
- Introduce a second chromatic accent; the site renders only one
- Spread `#5a46fa` over body text or decoration
- Add drop shadows
- Replace techSans or Asta Sans with a system face and present it as the brand type
- Use pure black for text; the site's darkest text is `#0d0d0d`

## Voice & Tone

42dot writes in short English headlines paired with Korean explanations. The headlines are capability statements; the Korean copy explains what the technology does and for whom.

| Context | Tone |
|---|---|
| Hero | Mission in English, restated in Korean: "Advancing Mobility, Realizing Possibilities" / "움직임의 미래를 열고, 모든 가능성을 현실로." |
| Positioning | Institutional and exact: "42dot, the Global Software Center of Hyundai Motor Group" |
| Section heads | Capability-first: "Software-Defined Vehicles for Enhanced User Value", "AI Drives the Future of Mobility" |
| Product copy | Technical Korean that names the system and its effect, for example the Vehicle OS as "SDV 전용 운영체제" |
| Calls to action | Plain verbs: "Learn More", "Explore Stories", "Open Roles", "Explore Locations" |
| Careers | Inviting: "Come Ride With Us!" |
| Stories | Friendly: "42dot의 tech, culture 등 다양한 소식을 만나보세요!" |

**Voice samples (verbatim from 42dot.ai, 2026-09-30):**
- "Advancing Mobility, Realizing Possibilities" — home and /company/about hero
- "42dot은 현대자동차그룹의 글로벌 소프트웨어 센터로, 소프트웨어와 AI를 통해 모빌리티 패러다임을 바꾸고 있습니다." — home hero description
- "Come Ride With Us!" — careers link card on /company/about

**Forbidden register**: consumer hype and exclamation-heavy selling; claims without a named system or capability behind them.

## Agent Prompt Guide

### Quick Color Reference
- Primary action and selected state: 42dot Violet (`#5a46fa`)
- Headings: `#0d0d0d`
- Default text: `#171717`
- Descriptions: `#333333`
- Dropdown items: `#666666`
- Secondary pill: Graphite (`#32353f`), hover Slate (`#737d8c`)
- Chip and badge fill: Mist (`#f6f6f9`)
- Hairline: `#dddddd`
- Canvas: `#ffffff`

### Example Component Prompts
- "Create a fixed header: translucent white bar (rgba(255, 255, 255, 0.6)), navigation labels in techSans 10.8px weight 500 `#0d0d0d`, the current section in `#5a46fa`, and a Careers pill at the right: `#5a46fa` fill, white techSans 10.8px label, 67.5px radius, 6.75px × 18.9px padding. On hover it turns `#ffffff` with a `#0d0d0d` label over 0.3s."
- "Create a hero over full-bleed video: white techSans headline at 67.5px, weight 400, line-height 77.625px, letter-spacing -2.025px; a 13.5px Asta Sans weight 500 description below; a 43px circular play button with a 1px white border."
- "Build a blog filter: tag chips with a transparent fill, `#333333` Asta Sans 9.45px weight 500 labels, 1px solid `#dddddd` border, 5.4px radius, 2.025px × 7.425px padding, hover fill `#f6f6f9`; below them a tab row in Asta Sans 13.5px weight 500, unselected `#333333`, selected `#0d0d0d` with a 2px `#5a46fa` underline."

### Iteration Guide
1. One violet, `#5a46fa`, for the primary action and the selected state
2. techSans for headlines, navigation and Careers; Asta Sans for everything else
3. Pills: 67.5px actions, 33.75px fields, 6.75px badges, 5.4px chips
4. No shadows; fills `#f6f6f9` and hairline `#dddddd`
5. Text runs `#0d0d0d` → `#171717` → `#333333` → `#666666`

---
