---
name: iKala
colors:
  primary: '#061232'
  white: '#ffffff'
  action-blue: '#2563eb'
  nexus-blue: '#3b81db'
  timeline-blue: '#1677ff'
  arrow-blue: '#005cec'
  link: '#3a82dd'
  footer-blue: '#4770df'
  tab-selected: '#2a415e'
  tab-idle: '#95a2b2'
  heading: '#333333'
  body: '#525151'
  black: '#000000'
  field-border: '#cccccc'
  hairline: '#dbdbdb'
typography:
  display-hero:
    fontSize: 72px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: '-2.99px'
    use: Hero headline on home (Data → Intelligence → Impact) and /zh-tw/ (數據 → 智慧 → 決策), 100.8px line, white over the hero image
  nexus-title:
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.5px
    use: 'iKala Nexus hero title, 78px line, #333333'
  section:
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: '-1.5px'
    use: 'Section headings on home and /zh-tw/, 50.4px line, #333333 (white on dark bands)'
  section-nexus:
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-1.5px'
    use: Section headings on iKala Nexus, 36px line
  card-title:
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: '-1px'
    use: Data-science cards on home (DataOps, MLOps, Predictive Analytics), 33.6px line
  industry-title:
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: '-1px'
    use: Industry card titles on home (Manufacturing, Retail & Marketing, Medical, Finance), 24px line
  case-name:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.3px
    use: Customer names in the iKala Nexus case carousel, 33.6px line
  footer-heading:
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: '-0.83px'
    use: Footer column headings (About, Solutions), 25px line, white
  body:
    fontSize: 18px
    fontWeight: 400
    letterSpacing: '-0.27px'
    use: 'Page default on all three pages, line-height normal, #525151'
  nav:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-0.5px'
    use: 'Header navigation links, 27px line, #333333'
  news-title:
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: '-0.75px'
    use: News and insight card titles, 25.2px line
  button:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1
    use: Hero and news button labels in Noto Sans, 18px line
  tab:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.53px
    use: iKala Nexus solution tabs, 20px line, white
  label:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.48
    use: News / Insight pills, 17.7px line, white
rounded:
  field: 2px
  button: 8px
  label: 30px
  arrow: 50px
spacing:
  cta-y: 20
  cta-x: 30
  button-y: 16
  button-x: 24
  tab-y: 8
  tab-x: 16
  accordion: 20
  label-y: 3
  label-x: 10
components:
  hero-cta:
    type: button
    backgroundColor: '#061232'
    textColor: '#ffffff'
    rounded: 8px
    padding: 20px 30px
    height: 58px
    typography: 18px / 500 / 18px Noto Sans
    states: rest only; no state frame was captured and no probe was run, so no hover, pressed or focus value is declared
    use: Get in Touch on the home hero at home::[data-omd-capture="18"] (167 x 58) and 聯絡我們 on /zh-tw/ (132 x 58)
    pressed: text-decoration underline (+2 nested-layer changes) (:hover + :active)
  blue-button:
    type: button
    backgroundColor: '#2563eb'
    textColor: '#ffffff'
    rounded: 8px
    padding: 16px 24px
    height: 50px
    typography: 18px / 500 / 18px Noto Sans
    states: rest only; no state frame
    use: Read More Articles / 閱讀更多文章 under the news list on home and /zh-tw/
  white-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#2563eb'
    rounded: 8px
    padding: 16px 24px
    height: 50px
    typography: 18px / 500 / 18px Noto Sans
    shadow: rgba(0, 0, 0, 0.19) 0px 0px 10px 0px
    states: rest only; no state frame
    use: View More News / 查看更多新聞 beside the blue button
  nexus-hero-button:
    type: button
    backgroundColor: '#3b81db'
    textColor: '#ffffff'
    rounded: 0px
    padding: 20px 40px
    height: 60px
    typography: 20px / 700 / 20px Noto Sans
    states: rest only; no state frame
    use: Contact Us on the iKala Nexus hero, 188 x 60
  timeline-pill:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1677ff'
    rounded: 8px
    padding: 12px 24px
    height: 38px
    typography: 14px / 700 / 14px Noto Sans
    states: rest only; no state frame
    use: 1st Month, 2nd Month, 3rd Month, Go Live in the iKala Nexus four-step section, 216 x 38
  carousel-arrow:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#005cec'
    rounded: 50px
    size: 44px x 44px
    shadow: rgba(135, 158, 180, 0.7) 0px 6px 25px 0px
    disabled: the previous arrow (capture 43) is disabled at rest and computes the same values
    states: rest and disabled only; no pointer frame
    use: Next and previous arrows of the iKala Nexus case carousel
  form-submit:
    type: button
    backgroundColor: '#3b81db'
    textColor: '#ffffff'
    rounded: 2px
    padding: 10px
    height: 40px
    typography: 14px / 500 / 20.3px Noto Sans TC
    states: rest only; no state frame
    use: Submit on the iKala Nexus contact form, 100 x 40
  solution-tab:
    type: tab
    backgroundColor: '#95a2b2'
    textColor: '#ffffff'
    rounded: 8px
    padding: 8px 16px
    height: 50px
    typography: 16px / 600 / 20px Noto Sans TC, letter-spacing 0.53px
    selected: 'bg #2a415e (Answer FAQs, capture 19)'
    states: selected variant read from rest values; no pointer frame
    use: Seven use-case tabs on iKala Nexus, 362 x 50
  faq-accordion-row:
    type: tab
    border: 1px solid rgba(0, 0, 0, 0.02)
    padding: 20px
    height: 60px
    states: rest only; no state frame
    use: Getting-started questions on home and /zh-tw/ and the iKala Nexus FAQ, 940 x 60; the question text sits in a child element the capture did not record, so no label colour or font is declared
  nav-link:
    type: tab
    textColor: '#333333'
    padding: 0px 20px 0px 0px
    typography: 18px / 400 / 27px Noto Sans TC, letter-spacing -0.5px
    selected: '2px solid #000000 bottom border on the current section menu item (Solutions on iKala Nexus)'
    states: selected variant read from rest values; no pointer frame
    use: Header navigation (Solutions, AI Technology, Blog, About) in the white fixed header
  text-field:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#525151'
    border: '1px solid #cccccc'
    rounded: 2px
    padding: 9px
    height: 41px
    typography: 16px / 400 / 20.8px Noto Sans TC, letter-spacing -0.24px
    states: rest only
    use: Contact form fields on iKala Nexus, 255 x 41 and 540 x 41
  news-label:
    type: badge
    backgroundColor: rgba(0, 0, 0, 0.7)
    textColor: '#ffffff'
    rounded: 30px
    padding: 3px 10px
    height: 24px
    typography: 12px / 400 / 17.7px Noto Sans TC
    use: News / Insight (新聞 / 洞察) labels over news card images on home and /zh-tw/
fonts:
  roles:
    body: Noto Sans TC
    button: Noto Sans
---

# Design System Inspiration of iKala

## Overview

### Visual Theme & Atmosphere

iKala is a Taiwanese AI company that describes itself as "a data science native company" and sells AI transformation to enterprises. Its About page says it was "Co-founded by Sega Cheng in 2012" and "originated with its core software technology in data analysis". Today it runs two pillars, "AI Adoption and Marketing Super-Intelligence". The site's solution menu lists **iKala Nexus** (enterprise knowledge and AI agents), **Kolr** (an "influence search engine" that tracks "over 300 million influencers"), **iKala Cloud** and **iKala Foundry**. The footer of every page states the scale: "Headquartered in Taiwan with a global footprint, iKala serves over 1,000 enterprises and 50,000 brands across more than 190 countries". The home's news list shows where the company stands in 2026. iKala is extending TMMLU+, a Traditional Chinese benchmark, "to Strengthen Taiwan's Sovereign AI Evaluation Capabilities", and co-founder and chairman Sega Cheng was named the 2026 Jeffrey Koo Fellow.

The site is a white, bilingual corporate page in English, Traditional Chinese and Japanese. Its tagline is "Data → Intelligence → Impact", or "數據 → 智慧 → 決策" on /zh-tw/. The hero sets that line in white at 72px / 600 with tight -2.99px tracking over a full-bleed image. Beneath it sits one dark navy call-to-action, **Get in Touch** (聯絡我們 on the Chinese page), filled `#061232` with an 8px radius. Below the hero the page turns light. Section headings are `#333333` at 36px / 600, body copy is a warm grey `#525151` at 18px, and links take the theme's blue `#3a82dd`. Blue appears in several shades rather than one: `#2563eb` fills Read More Articles, `#3b81db` fills the iKala Nexus hero button and the form's Submit, `#1677ff` labels the Nexus timeline pills, and `#4770df` underlines the footer logo.

Type is Google's **Noto Sans TC**, set first in the stack (`"Noto Sans TC", "Noto Sans", sans-serif`) so Han and Latin text share one family. The marketing buttons are set in the Latin **Noto Sans**. Depth is used sparingly: one soft glow under the white View More News button, a cool blue-grey shadow under the Nexus carousel arrows, and translucent black pills for the News and Insight labels.

**Key Characteristics:**
- Deep navy `#061232` as the hero call-to-action fill on the English and Chinese home pages
- Several working blues, each tied to a surface: `#2563eb`, `#3b81db`, `#1677ff`, `#3a82dd`
- Noto Sans TC first in every text stack; Noto Sans on the marketing buttons
- A 72px / 600 white hero with -2.99px tracking, then calm 36px / 600 section headings in `#333333`
- Warm grey `#525151` body copy at 18px
- 8px radius on buttons and tabs, 30px on label pills, 50px on round arrows, 2px on form fields
- Translucent black `rgba(0, 0, 0, 0.7)` pills for News and Insight labels

### Primary tasks

- Contact iKala about an AI transformation project
- Find the solution for a goal: iKala Nexus for enterprise knowledge, Kolr for creator and social intelligence
- Read the same material in English, Traditional Chinese or Japanese
- Read iKala's news and AI insights
- Check the credibility signals before shortlisting iKala as a vendor

### Brand Narrative

iKala's About page tells the story in its own words: "Co-founded by Sega Cheng in 2012, iKala originated with its core software technology in data analysis." The company now offers AI solutions to enterprises and brand owners through two pillars, AI Adoption and Marketing Super-Intelligence. It reports over 1,000 enterprises using its AI implementation solutions and more than 50,000 brand owners and advertisers using its marketing technology. **Kolr**, the "influence search engine" iKala built, "collects and continuously tracks data on over 300 million influencers and billions of social data points worldwide everyday". **iKala Nexus** turns enterprise data into structured knowledge and deploys AI agents. The home says the platforms, models and solutions are built in-house by "iKala's AI Lab, a team of 50+ AI and data science experts".

The About page lists the recognition the company leads with: Google Cloud Partner of the Year (2025), Best AI Transformation Solution Provider in APAC by APAC Insider (2024 and 2023), Taiwan's Top 10 Innovative Enterprises by Startup City Taiwan (2023), Top 10 Emerging Giants in Taiwan by KPMG and HSBC (2022), the Taiwan government's NEXT BIG national startups project (2021) and Gartner Cool Vendor (2020). The 2026 news adds work on Taiwan's sovereign AI evaluation through TMMLU+.

The design follows the positioning. A Traditional-Chinese-first typeface signals a company rooted in Taiwan. A navy hero action and a white canvas present it as a credible vendor to procurement-minded enterprise buyers. Industry sections and an FAQ about ROI keep the page about outcomes.

### Principles

1. **Impact over algorithms.** The brand frames itself as Data → Intelligence → Impact; pages lead with outcomes and industries.
2. **Regional authenticity.** Noto Sans TC leads every stack; the brand reads as Taiwanese and serves three languages.
3. **Enterprise credibility.** A navy hero action, a white canvas and plain answers about security and ROI.
4. **One loud moment.** The 72px hero is the only display-size type on the home; everything below is 36px or smaller.
5. **Bilingual parity.** The English and Chinese home pages share the same layout and components.

### Personas

*Fictional archetypes informed by the audiences iKala's pages address (enterprise AI buyers, marketers using creator intelligence, IT leads). They are not real people.*

**Wei-Chen Lin, 42, Taipei.** Head of digital transformation at a precision manufacturer. Evaluates vendors on whether they understand his processes. Reads the Manufacturing section and the FAQ on timelines.

**Priya Raman, 35, Singapore.** Regional marketing director at a consumer brand. Uses Kolr to vet creators and measure campaigns across Southeast Asia.

**Hiroshi Tanaka, 48, Tokyo.** Enterprise IT director assessing AI partners for an APAC rollout. Reads the Japanese page and checks the information security page before shortlisting.

**Mei-Ling Wu, 29, Kaohsiung.** Data analyst at a retail group. Follows iKala's insight articles on new models.

## Colors

### Primary
- **Deep Navy** (`#061232`): The hero call-to-action fill, on Get in Touch (home, 167 × 58) and 聯絡我們 (/zh-tw/, 132 × 58). It is the primary because it fills the first and only hero action on both home pages. No single blue plays that role across all three captured pages; each blue belongs to one page or one component.
- **White** (`#ffffff`): The page canvas, the label on every filled button, and the white hero and footer headings.

### Action blues
- **Action Blue** (`#2563eb`): The fill of Read More Articles (閱讀更多文章) and the label of View More News (查看更多新聞) under the home news list.
- **Nexus Blue** (`#3b81db`): The fill of the iKala Nexus hero button (Contact Us) and of the contact form's Submit.
- **Timeline Blue** (`#1677ff`): The label of the four timeline pills on iKala Nexus (1st Month, 2nd Month, 3rd Month, Go Live).
- **Arrow Blue** (`#005cec`): The icon colour of the round carousel arrows on iKala Nexus.
- **Link Blue** (`#3a82dd`): The theme's link colour (`a{color:#3a82dd}` in the page CSS), measured on the header logo link.
- **Footer Blue** (`#4770df`): The 1px underline and text colour of the footer logo block.

### Tabs
- **Tab Selected** (`#2a415e`): The fill of the selected solution tab on iKala Nexus (Answer FAQs).
- **Tab Idle** (`#95a2b2`): The fill of the six unselected solution tabs.

### Neutrals
- **Heading** (`#333333`): Section and card headings, and the header navigation links.
- **Body** (`#525151`): The body's text colour on all three pages, and form text.
- **Black** (`#000000`): The header menu item, and the 2px underline of the current section on iKala Nexus.
- **Field Border** (`#cccccc`): The 1px border of the contact form inputs.
- **Hairline** (`#dbdbdb`): The 1px border of the Nexus case table and the form textarea.

### Brand assets and declared values
- `#2168c2` is declared in the header CSS for the menu toggle but did not compute on any captured element.
- Translucent values stay in component fields: the news label fill `rgba(0, 0, 0, 0.7)`, the accordion border `rgba(0, 0, 0, 0.02)` and both shadows.

## Typography

### Font Family
- **Noto Sans TC** — live surface use on 479 elements: body, headings, tabs, form fields and labels. It is the first family in the theme's rule for `body`, `button`, `.entry-content`, `.entry-content h2` and `.entry-content p` (`font-family:"Noto Sans TC","Noto Sans",sans-serif!important`). Served by the site's own `@font-face` rules. Official distributed asset: Noto Sans CJK / Noto Sans TC from the Noto project, SIL Open Font License 1.1.
- **Noto Sans** — live surface use on 33 elements, mainly the Elementor buttons (Get in Touch, Read More Articles, View More News, Contact Us, the timeline pills). SIL Open Font License 1.1.
- **Declared only** — `Montserrat`, `AdobeClean-Bold`, `AdobeClean-Regular`, `forminator-icons-font` and `swiper-icons` have `@font-face` rules but no observed use.
- **Official product use** — no ikala.ai page opened names its typefaces.

### Hierarchy

| Role | Font | Size | Weight | Line height | Tracking | Notes |
|---|---|---|---|---|---|---|
| Display hero | Noto Sans TC | 72px | 600 | 100.8px | -2.99px | Home and /zh-tw/ hero, white |
| Nexus title | Noto Sans TC | 60px | 700 | 78px | 0.5px | iKala Nexus hero, `#333333` |
| Section | Noto Sans TC | 36px | 600 | 50.4px | -1.50px | Home section headings |
| Section (Nexus) | Noto Sans TC | 36px | 700 | 36px | -1.50px | iKala Nexus section headings |
| Card title | Noto Sans TC | 24px | 600 | 33.6px | -1.00px | Data-science cards |
| Industry title | Noto Sans TC | 24px | 600 | 24px | -1.00px | Manufacturing, Retail & Marketing, Medical, Finance |
| Case name | Noto Sans TC | 24px | 700 | 33.6px | 0.3px | Nexus case carousel |
| Footer heading | Noto Sans TC | 20px | 500 | 25px | -0.83px | Footer columns, white |
| Body | Noto Sans TC | 18px | 400 | normal | -0.27px | Page default |
| Navigation | Noto Sans TC | 18px | 400 | 27px | -0.50px | Header links |
| News title | Noto Sans TC | 18px | 600 | 25.2px | -0.75px | News and insight cards |
| Button | Noto Sans | 18px | 500 | 18px | normal | Hero and news buttons |
| Tab | Noto Sans TC | 16px | 600 | 20px | 0.53px | Nexus solution tabs |
| Label | Noto Sans TC | 12px | 400 | 17.7px | normal | News / Insight pills |

### Principles
- Han first: Noto Sans TC leads every text stack, with Noto Sans as the Latin fallback.
- Tracking tightens with size: -2.99px at 72px, -1.5px at 36px, -1px at 24px, -0.27px at 18px. The Nexus page breaks the pattern with +0.5px on its 60px title.
- Weight 600 carries most headings; 700 appears on the Nexus page.

## Layout

### Spacing
- The bundle's spacing histogram is led by 20px (71 uses) and 10px (51).
- Measured paddings: 20px 30px on the hero button, 16px 24px on the news buttons, 8px 16px on tabs, 12px 24px on timeline pills, 20px on accordion rows, 3px 10px on labels, 9px in fields.

### Grid and container
- Hero and section headings run 1180px wide on home and /zh-tw/; the Nexus page uses 1200px.
- Industry cards sit four across in 215px columns; data-science cards three across at about 300px; news cards in 318px and 259px columns.
- The FAQ accordion is a 940px column of 60px rows.
- iKala Nexus shows its customer cases in a bordered table (1px `#dbdbdb`, 18px Noto Sans TC body) and a carousel of case names.

### Border radius
- 0px for most elements (474 of 512 recorded radii).
- 2px on form fields and Submit; 8px on buttons, tabs and pills; 30px on labels; 50px on round arrows.

### Responsive Behavior

Only a 1440px-wide desktop view was captured. No breakpoint, collapse or touch-target behaviour was measured, and none is declared. At that width the hero button is 58px tall, the news buttons 50px and the form fields 41px.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Headings, text, navy and blue buttons, tabs, fields |
| Glow | `rgba(0, 0, 0, 0.19) 0px 0px 10px 0px` | White View More News button |
| Floating | `rgba(135, 158, 180, 0.7) 0px 6px 25px 0px` | Nexus carousel arrows |

The filled buttons are flat; shadow marks only the white button on a white field and the arrows that float over the case carousel.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.glow`: `rgba(0, 0, 0, 0.19) 0px 0px 10px 0px`
- `shadow.floating`: `rgba(135, 158, 180, 0.7) 0px 6px 25px 0px`

## Motion & Easing

No motion was measured. The header's submenu toggle declares `data-toggle-duration="250"` in its markup, which is a declared attribute and not an observed transition, so no duration or easing token is set.

<!--
Sources: three logged-out ikala.ai pages captured through the owner's browser on 2026-10-01 (bundle artifacts/reference-evidence/ikala.json, raw docs/research/2026-09-29-growth/raw/aside/ikala-capture.json); page text and the About page read by plain HTTP the same day. ikala.tw serves a GoDaddy parking page and contributes nothing. Full proof block in .verification.md.
-->

## Components

### Buttons

**Hero call-to-action (navy)**
- Background: `#061232`
- Text: `#ffffff`
- Radius: 8px
- Padding: 20px 30px
- Height: 58px
- Font: 18px / 500 / 18px Noto Sans
- Use: Get in Touch on home, 聯絡我們 on /zh-tw/

**Filled blue button**
- Background: `#2563eb`
- Text: `#ffffff`
- Radius: 8px
- Padding: 16px 24px
- Height: 50px
- Font: 18px / 500 / 18px Noto Sans
- Use: Read More Articles / 閱讀更多文章 under the news list

**White button**
- Background: `#ffffff`
- Text: `#2563eb`
- Radius: 8px
- Padding: 16px 24px
- Height: 50px
- Font: 18px / 500 / 18px Noto Sans
- Shadow: `rgba(0, 0, 0, 0.19) 0px 0px 10px 0px`
- Use: View More News / 查看更多新聞 beside the blue button

**Nexus hero button**
- Background: `#3b81db`
- Text: `#ffffff`
- Radius: 0px
- Padding: 20px 40px
- Height: 60px
- Font: 20px / 700 / 20px Noto Sans
- Use: Contact Us on the iKala Nexus hero

**Timeline pill**
- Background: `#ffffff`
- Text: `#1677ff`
- Radius: 8px
- Padding: 12px 24px
- Height: 38px
- Font: 14px / 700 / 14px Noto Sans
- Use: 1st Month, 2nd Month, 3rd Month, Go Live in the iKala Nexus four-step section

**Carousel arrow**
- Background: `#ffffff`
- Icon: `#005cec`
- Radius: 50px
- Size: 44px x 44px
- Shadow: `rgba(135, 158, 180, 0.7) 0px 6px 25px 0px`
- Disabled: the previous arrow is disabled at rest with the same values
- Use: Next and previous arrows of the Nexus case carousel

**Form submit**
- Background: `#3b81db`
- Text: `#ffffff`
- Radius: 2px
- Padding: 10px
- Height: 40px
- Font: 14px / 500 / 20.3px Noto Sans TC
- Use: Submit on the iKala Nexus contact form

### Tabs and navigation

**Solution tab**
- Background: `#95a2b2`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Height: 50px
- Font: 16px / 600 / 20px Noto Sans TC, letter-spacing 0.53px
- Selected: background `#2a415e` (Answer FAQs)
- Use: Seven use-case tabs on iKala Nexus (Answer FAQs, Doc Review, Smart Customer Service, Sales Data Insights, Marketing Automation, CEO Trend Reports, Industry Trends)

**FAQ accordion row**
- Border: 1px solid `rgba(0, 0, 0, 0.02)`
- Padding: 20px
- Height: 60px
- Use: Getting-started questions on home and /zh-tw/ and the iKala Nexus FAQ; the question text sits in a child element the capture did not record

**Header navigation link**
- Text: `#333333`
- Padding: 0px 20px 0px 0px
- Font: 18px / 400 / 27px Noto Sans TC, letter-spacing -0.5px
- Selected: 2px solid `#000000` bottom border on the current section's menu item (Solutions on iKala Nexus)
- Use: Solutions, AI Technology, Blog, About in the white fixed header

### Inputs

**Text field**
- Background: `#ffffff`
- Text: `#525151`
- Border: 1px solid `#cccccc`
- Radius: 2px
- Padding: 9px
- Height: 41px
- Font: 16px / 400 / 20.8px Noto Sans TC, letter-spacing -0.24px
- Use: Contact form fields on iKala Nexus

### Badges

**News label**
- Background: `rgba(0, 0, 0, 0.7)`
- Text: `#ffffff`
- Radius: 30px
- Padding: 3px 10px
- Height: 24px
- Font: 12px / 400 / 17.7px Noto Sans TC
- Use: News / Insight (新聞 / 洞察) labels over news card images

---

**Verified:** 2026-10-01 (logged-out capture of three public ikala.ai pages through the owner's browser; deterministic bundle; no state frames)
**Tier 1 sources:** https://ikala.ai/ , https://ikala.ai/ikala-nexus/ , https://ikala.ai/zh-tw/ , https://ikala.ai/about/
**Tier 2 sources:** not attempted
**Conflicts unresolved:** none

### States

No state frames were captured: the capture recorded rest values only, with `interactionCount: 0`, which does not mean the site has no states. Read from rest values are the selected solution tab (`#2a415e`), the current-section underline in the header (2px `#000000`) and the disabled carousel arrow. Hover, pressed, focus, loading, error and success treatments are not declared.

Live state probe, 2026-10-16 (`https://ikala.ai/`), `hero-cta`: pressed — text-decoration underline (+2 nested-layer changes).

## Do's and Don'ts

### Do
- Put Noto Sans TC first in the font stack, with Noto Sans as the Latin fallback
- Fill the hero call-to-action with deep navy `#061232` and an 8px radius
- Use `#333333` for headings and `#525151` for body copy
- Track large headings tight (-2.99px at 72px, -1.5px at 36px)
- Use the 0.19-alpha glow only on a white button that sits on white
- Mark the selected tab with the darker `#2a415e` and keep idle tabs `#95a2b2`

### Don't
- Treat any one blue as universal; each blue belongs to a specific page or component
- Replace Noto Sans TC with a Latin-only font
- Add shadows to the filled navy or blue buttons; they are flat
- Use pure black for body copy; `#000000` marks only the header menu item and the current-section underline
- Use positive tracking on hero headings; the +0.5px Nexus title is the one exception
- Promote `#2168c2` to a token; it never computed on the captured pages

## Voice & Tone

iKala speaks as an enterprise AI partner that talks about business outcomes, not algorithms. The tagline "Data → Intelligence → Impact" and the section heading "Total AI Transformation Solutions and Services for Key Verticals" set the register. Copy leads with results ("turning data into measurable financial and performance results") and reassures newcomers ("Even if you don't have a data science team or prior AI experience…"). Calls-to-action are short imperatives: "Get in Touch", "Contact Us", "Try it Now", "Read More Articles". The Traditional Chinese page carries the same voice ("數據 → 智慧 → 決策", "全方位 AI 轉型解決方案，專注核心垂直產業").

| Context | Tone |
|---|---|
| Hero | Outcome-first: "We provide intelligent infrastructure for AI transformation" |
| Industries | Sector by sector, tied to measurable results |
| FAQ | Plain, reassuring answers about timelines, readiness, security and ROI |
| Calls-to-action | Short imperatives |
| Bilingual pages | One voice across English, 繁體中文 and 日本語 |

**Forbidden register.** Hype superlatives, emoji on enterprise pages, and AI claims that are not tied to a business outcome.

## Agent Prompt Guide

### Quick colour reference
- Hero action fill: `#061232`
- White: `#ffffff`
- Action blue: `#2563eb`
- Nexus blue: `#3b81db`
- Timeline blue: `#1677ff`
- Arrow blue: `#005cec`
- Link blue: `#3a82dd`
- Footer blue: `#4770df`
- Tab selected / idle: `#2a415e` / `#95a2b2`
- Heading: `#333333`
- Body: `#525151`
- Black: `#000000`
- Field border: `#cccccc`
- Hairline: `#dbdbdb`

### Example component prompts
- "Hero: full-bleed image, white Noto Sans TC 72px / 600 headline with -2.99px tracking and 100.8px line; one `#061232` button, white Noto Sans 18px / 500 label, 20px 30px padding, 8px radius, 58px tall."
- "News footer: a `#2563eb` filled button and a white button with `#2563eb` label and `rgba(0, 0, 0, 0.19) 0px 0px 10px 0px` glow, both 16px 24px padding, 8px radius, 50px tall."
- "Use-case tabs: 50px tall, 8px radius, white Noto Sans TC 16px / 600 labels; idle `#95a2b2`, selected `#2a415e`."

### Iteration guide
1. Noto Sans TC first, always.
2. Navy for the hero action, blues for page-level actions.
3. Headings `#333333`, body `#525151`.
4. Radii come in four sizes: 2, 8, 30 and 50px.
5. Shadows only where a white control sits on white or floats over content.

## Governance

### Known Gaps

- **Contrast, `nexus-hero-button`.** Text `#ffffff` on `#3b81db` measures 3.93:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `timeline-pill`.** Text `#1677ff` on `#ffffff` measures 4.10:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `form-submit`.** Text `#ffffff` on `#3b81db` measures 3.93:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `solution-tab`.** Text `#ffffff` on `#95a2b2` measures 2.60:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
