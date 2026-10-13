---
name: Scatter Lab
colors:
  primary: '#fbb401'
  on-primary: '#ffffff'
  ink: '#222222'
  nav-ink: '#212429'
  black: '#000000'
  muted: '#8c8c8c'
  canvas: '#ffffff'
  blog-ink: '#09090b'
  blog-muted: '#646470'
  blog-meta: '#71717a'
  blog-strong: '#020a0f'
  blog-tab-fill: '#f4f4f5'
typography:
  display:
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.35
    use: Page headline (h1) on the intro and ethos pages
  section:
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.35
    use: Section heading (h2) on the ethos page
  subhead:
    fontSize: 23px
    fontWeight: 700
    lineHeight: 1.35
    use: Chapter heading (h3) in the intro letter and carousel card titles
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Company-site paragraph and list text
  caption:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    use: Footer links on the company site
  blog-hero:
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1
    use: Blog header title (h1), set in white
  blog-feature:
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
    use: Featured post title (h2) on the blog home
  blog-card-title:
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.375
    use: Post card title (h2) on the blog home
  blog-body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Blog body text
  blog-button:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    use: Blog subscribe button label
rounded:
  sm: 4px
  md: 6px
spacing:
  nav-y: 5.5
  nav-x: 12
  cta-y: 8
  cta-x: 16
  tab-y: 6
  tab-x: 14
components:
  nav-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#212429'
    rounded: 4px
    padding: 5.5px 12px
    height: 32px
    typography: 16px / 400 / normal Pretendard
    states: rest on the intro and ethos pages; no state frame was recorded and the collector expanded no menus
    use: 'Header navigation item (제타 소개, 문화, 블로그, 채용, AI 윤리, English, 日本語) at home::[data-omd-capture="2"], 76 x 32; each sits inside a link whose own colour is #000000'
  blog-header-cta:
    type: button
    backgroundColor: '#fbb401'
    textColor: '#ffffff'
    rounded: 6px
    padding: 8px 16px
    height: 36px
    typography: 16px / 500 / 24px IBM Plex Sans
    shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px
    states: hover and pressed frames match rest in every compared property (the inline background overrides the hover:bg-primary/90 class); the class list also names a hover lift (hover:-translate-y-0.5) that the collector does not measure, so no state is declared
    use: 채용공고 in the blog header, linking to www.scatterlab.co.kr/ko/recruiting, at surface-3::[data-omd-capture="3"], 87 x 36
  blog-subscribe-button:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 6px
    padding: 8px 16px
    height: 36px
    typography: 14px / 500 / 20px IBM Plex Sans
    shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px
    states: rest only; no state frame was recorded
    use: 구독하기 beside the newsletter field at surface-3::[data-omd-capture="5"], 80 x 36; read without submitting
  blog-email-input:
    type: input
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 6px
    padding: 4px 12px
    height: 36px
    typography: 14px / 400 / 20px IBM Plex Sans
    states: rest captured; the pressed frame adds only zero-width ring layers, a transition frame, so no pressed value is declared; focus is not declared from the capture
    use: Newsletter email field on the blog home at surface-3::[data-omd-capture="4"], 262 x 36; never filled or submitted
  blog-category-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#646470'
    rounded: 6px
    padding: 6px 14px
    height: 36px
    typography: 14px / 500 / 20px IBM Plex Sans
    selected: 'bg #f4f4f5, fg #020a0f, weight 600 (capture 6)'
    states: selected variant read from rest values (capture 6 against 7); no pointer frame
    use: Post-category filter on the blog home at surface-3::[data-omd-capture="7"], 86 x 36, with -0.4px tracking
  blog-icon-button:
    type: button
    backgroundColor: transparent
    textColor: '#020a0f'
    rounded: 6px
    size: 36px x 36px
    states: rest only; no state frame was recorded
    use: Icon-only button at the left of the blog header at surface-3::[data-omd-capture="2"]
  culture-slide-card:
    type: card
    backgroundColor: transparent
    size: 456px x 383px
    use: 'Slide in the intro page''s closing carousel (div.slider__Card); title 23px / 700 / 31.05px #222222, text 16px / 400 / 24px #222222, stepped by 40 x 40 arrow buttons'
fonts:
  roles:
    sans: Pretendard
    blog: IBM Plex Sans
---

# Design System Inspiration of Scatter Lab

## Overview

### Visual Theme & Atmosphere

Scatter Lab (스캐터랩; 주식회사 스캐터랩, Scatter Lab, Inc.) is a Seoul AI company, based in Seongsu-dong under CEO 김종윤, that builds products around conversation and relationships. Its culture document lists the line in order: 텍스트앳, an app that reads KakaoTalk chats to guess whether someone likes you; 진저, an AI that helps with dating; 연애의 과학, dating content grounded in psychology papers; 블림프, content for peace of mind; 이루다, "당신의 AI 친구"; and 제타, AI-based entertainment that combines interaction with narrative. The company's AI ethics site records the turn that shaped it: 이루다 1.0 launched on 22 December 2020 and was shut down after about three weeks over its data-consent process and discriminatory expressions; the team spent 2021 on privacy protection and abuse models, drew up an AI chatbot ethics checklist with KISDI, reopened 이루다 2.0 as a closed beta in January 2022, and names the CEO as chief ethics officer.

Today the company presents itself through Zeta. Its home page is the CEO's April 2025 letter for Zeta's first anniversary — "zeta: 엔터테인먼트의 새로운 패러다임" — reporting that the service, launched on 1 April 2024, reached two million sign-ups and 800,000 monthly users in a year, averages 2 hours 40 minutes of use a day, runs on the company's own model Spotwrite-1 tuned for fun rather than accuracy, and has been profitable for six straight months since the fourth quarter of 2024. The culture page states the ambition as "많은 유저에게 사랑받는 우리만의 제품".

The captured company pages read as a letter, not a storefront: `#222222` Pretendard text on white, bold 52px, 38px and 23px headings in a 960px column, white header buttons with `#212429` labels and a 4px corner, and no chromatic colour at all. The site is built with Greeting, a hosted career-site builder ("made with Greeting" in its footer; job pages live at /ko/o/<id>). The blog, blog.scatterlab.co.kr, runs on the inblog platform in IBM Plex Sans with zinc greys (`#09090b` text); Scatter Lab's own choice there is a primary colour its page data names "scatter yellow", `#fbb401`, which fills the header's 채용공고 action. Zeta itself lives on its own domain (zeta-ai.io) and was not captured, so nothing here describes the Zeta app.

**Key Characteristics:**
- A monochrome, text-first company site: `#222222` on `#ffffff`, bold Pretendard headings, no coloured controls
- White header buttons with `#212429` labels, 4px corners and 5.5px 12px padding
- One saturated colour on the captured surfaces: "scatter yellow" `#fbb401` on the blog's 채용공고 action
- A black `#000000` subscribe button and 6px corners on the blog's controls
- Two type stacks by surface: Pretendard on the company site, IBM Plex Sans on the blog
- Flat pages; the only shadow is a small two-layer shadow on the blog's two buttons
- Metric-led, first-person copy from the CEO's letter

### Primary tasks

- Read what Zeta is and why the company calls it a new kind of entertainment
- Read the culture document (Ethos) before applying
- Check how the company handles AI ethics after 이루다
- Browse engineering and product posts on the blog and open the job postings (채용공고)

### Brand Narrative

Scatter Lab's products have always been about conversation. The early apps read the texture of real chats to help people understand relationships (텍스트앳, 진저, 연애의 과학); 이루다 turned that into an AI friend; 제타 turns it into entertainment, where the user plays out a story with AI characters instead of watching one. The ethos page describes each product as something "스캐터랩만이 만들 수 있는" — a product that would not exist if the team had not made it.

The defining chapter was 이루다. Its 2020 launch drew intense attachment and then a privacy and discrimination failure that closed it within weeks. The company's own account, on its AI ethics site, is specific: a year of rebuilding its data and abuse safeguards, a correction order from the personal-information regulator carried out, a checklist written with KISDI, a relaunch in 2022, and the CEO as chief ethics officer. "AI 윤리" is now an item in the company site's main navigation.

The CEO's April 2025 letter marks where the company stands: Zeta as "AI-native" entertainment, a model (Spotwrite-1) trained for fun rather than correctness, a business that is already profitable, and users in Japan who spend even longer in it than users in Korea. The design of the company's own pages stays deliberately plain — a letter in black and white, set in Pretendard — and the only brand colour it chose to show on the captured surfaces is the yellow on its blog's call to join.

### Principles

1. **A product only we could make.** From Ethos 1. *UI implication:* favour distinctive content over generic chrome; let the writing lead.
2. **Numbers over adjectives.** *UI implication:* give metrics their own line and plain type.
3. **Ethics in the open.** *UI implication:* surface responsibility in primary navigation, not a footer.
4. **One colour for one action.** *UI implication:* `#fbb401` marks the single call to act; everything else stays monochrome.
5. **Flat and quiet.** *UI implication:* no shadows or cards on reading pages; hierarchy by size and weight.

### Personas

*Personas below are fictional archetypes informed by publicly observable Scatter Lab / Zeta stakeholder segments (AI-entertainment users, engineers considering the company, ethics-conscious observers), not individual people.*

**이서연, 22, 서울.** A university student who plays story scenarios on Zeta daily. Reads the company's letter to understand what the team thinks it is building.

**김도현, 34, 판교.** An ML engineer weighing an application. Reads the Ethos page end to end and the blog's engineering posts for how the team reasons.

**박지은, 41, 서울.** A policy-minded reader who followed the 이루다 controversy and checks how Korean AI companies handle ethics; trusts the dated, specific account on the ethics site more than slogans.

## Colors

Every token below was read by the deterministic collector on 2026-09-30 from www.scatterlab.co.kr/ko/intro, /ko/ethos and blog.scatterlab.co.kr.

**Why `#fbb401` is the primary.** It is the only colour any captured surface renders in a primary role: the fill of the blog header's 채용공고 action (surface-3 capture 3, white label), recorded in its rest, hover and pressed frames — the three `#fbb401` backgrounds in the bundle's census. The blog's own served page names the same value as its primary preset ("scatter yellow", `is_primary: true`), which confirms the choice is Scatter Lab's rather than the platform's. The company site renders no filled action and no chromatic colour. The scope is narrow — one control on one surface — and the token should be read that way.

### Action
- **Scatter Yellow** (`#fbb401`): Fill of the blog header's 채용공고 action.
- **On Primary** (`#ffffff`): The white label on it.
- **Black** (`#000000`): Fill of the blog's 구독하기 button and the text of the newsletter field; also the own colour of the company site's header links, whose visible labels are the `#212429` buttons inside them.

### Company site
- **Ink** (`#222222`): Headings, paragraphs and lists on the intro and ethos pages.
- **Nav Ink** (`#212429`): Labels of the header buttons.
- **Muted** (`#8c8c8c`): Footer links.
- **Canvas** (`#ffffff`): Page background and the header buttons' fill.

### Blog (inblog platform chrome)
- **Blog Ink** (`#09090b`): Body text and post titles.
- **Blog Muted** (`#646470`): Unselected category filters.
- **Blog Meta** (`#71717a`): Footer and meta links.
- **Blog Strong** (`#020a0f`): The selected category filter and the header icon button.
- **Tab Fill** (`#f4f4f5`): Background of the selected category filter.

### Not carried forward
- `#212529` (the July record's floating scroll-to-top button) does not appear in this capture; the nearest value, `#212429`, is the header button label.
- The July blog-article palette and chrome — `#292929`, `#242424`, `#595959`, `#4b5563`, `#a1a1aa`, surfaces `#f3f4f6`, `#fafafa`, `#ebebeb`, chip `#e5e7eb` — came from an article page and older chrome; none was observed on the three captured pages.
- `#e4e4e7` is present only as the border colour of elements whose border width is 0 (the blog platform's inherited default), so no hairline is drawn with it and none is claimed.

## Typography

### Font Family
- **Company site, live use**: `Pretendard` — loaded, 204 observed uses, served as static files from jsDelivr (`cdn.jsdelivr.net/gh/orioncactus/pretendard/…/static/woff2/`). Pretendard is Kil Hyung-jin's open typeface under the SIL Open Font License 1.1.
- **Blog, live use**: `IBM Plex Sans` — loaded, 128 observed uses as the first computed family, served by the platform from `inblog.ai/fonts/ibm-plex-sans/`. IBM's licence file releases it under the SIL Open Font License 1.1 (Reserved Font Name "Plex"). Which face draws the blog's Korean text was not resolved.
- **Declared only (no observed use)**: `Pretendard Variable` (dynamic subsets on inblog.ai), twelve `KaTeX_*` math families (inblog.ai) and `slick` (a carousel icon font on the company site).
- **Official brand typeface**: none was found on the captured or context pages, so none is claimed.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Observed on |
|------|------|------|--------|-------------|-------------|
| Display | Pretendard | 52px | 700 | 70.2px (1.35) | Intro and ethos h1 |
| Blog Hero | IBM Plex Sans | 48px | 600 | 48px (1.0) | Blog header title, white |
| Section | Pretendard | 38px | 700 | 51.3px (1.35) | Ethos h2 |
| Blog Feature | IBM Plex Sans | 32px | 600 | 40px (1.25) | Featured post title |
| Subhead | Pretendard | 23px | 700 | 31.05px (1.35) | Letter chapter heads, carousel titles |
| Blog Card Title | IBM Plex Sans | 22px | 600 | 30.25px (1.375) | Post card titles |
| Body | Pretendard | 16px | 400 | 24px (1.5) | Company-site text |
| Blog Body | IBM Plex Sans | 16px | 400 | 24px (1.5) | Blog text |
| Blog Button | IBM Plex Sans | 14px | 500 | 20px | Subscribe button |
| Caption | Pretendard | 12px | 400 | 18px (1.5) | Company footer links |

### Principles
- **Bold, not big, on the company site**: every heading is 700 with a 1.35 line height; hierarchy steps 52 → 38 → 23 → 16px with no colour change.
- **Semibold on the blog**: post titles run at 600 from 48px down to 22px.
- **Letter spacing stays normal** except the blog's category filters, which tighten to -0.4px.

## Layout

### Spacing System
- Company header buttons: 5.5px vertical, 12px horizontal
- Blog actions: 8px 16px at 36px height; category filters 6px 14px; the newsletter field 4px 12px

### Grid & Container
- The intro and ethos pages set everything in a single 960px column under a full-width header: the letter's headings, paragraphs and lists (lists indent to 936px).
- The intro page closes with a carousel of 456px slide cards stepped by 40 × 40 buttons.
- The blog home stacks a white-titled header, a newsletter row (262px field and a button), category filters and a grid of posts titled at 32px (featured) and 22px.

### Whitespace Philosophy
- **Read like a letter**: long paragraphs at 16px / 24px with bold chapter heads, and no interface chrome between them.
- **Nothing decorative**: no cards, fills or rules on the company pages beyond the header buttons.

### Border Radius Scale
- 0px: almost everything on the company site
- 4px: company header buttons
- 6px: every blog control — actions, the field, category filters, the icon button

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport was captured; no breakpoint was measured.

#### Touch Targets
- Company header buttons: 32px tall
- Blog actions, the field and category filters: 36px tall
- Carousel arrow buttons: 40 × 40

#### Collapsing Strategy
- Not measured.

#### Image Behavior
- The blog header sets its title in white over a background that the collector did not record as a colour.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Company pages, blog text, filters, the field |
| Small | `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` | The blog's two buttons |

**Shadow Philosophy**: the captured pages are flat. The company site uses no shadow, border or fill to group content; the blog's platform gives its two buttons a faint two-layer shadow and nothing else.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.cta`: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`

## Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. The blog's header action names a transform transition and a small hover lift in its utility classes, which shows motion exists there without timing it. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/scatterlab.json (capturedAt 2026-09-30T07:00:45.657Z), deterministic collector, 1440x900, logged out: www.scatterlab.co.kr/ko/intro (www.scatterlab.co.kr/ redirects there), /ko/ethos, blog.scatterlab.co.kr.
- "scatter yellow" preset (#FBB401, is_primary true, created 2026-07-29) and the 채용공고 inline style: served HTML of blog.scatterlab.co.kr, 2026-09-30.
- §1, §10, §11 context: www.scatterlab.co.kr/ko/intro (CEO letter, April 2025), /ko/ethos, ethics.scatterlab.co.kr, blog.scatterlab.co.kr/zeta-intro-2506, company footer (주식회사 스캐터랩, 대표이사 김종윤, 성동구 왕십리로 125). All opened 2026-09-30.
- zeta-ai.io (Zeta) returned HTTP 200 and was not captured; no value comes from it.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Navigation

**Company header button**
- Background: `#ffffff`
- Text: `#212429`
- Radius: 4px
- Padding: 5.5px 12px
- Height: 32px
- Font: 16px / 400 / normal Pretendard
- States: rest on the intro and ethos pages; no state frame was recorded and no menu was expanded
- Use: 제타 소개, 문화, 블로그, 채용, AI 윤리, English, 日本語

**Blog category filter**
- Background: transparent
- Text: `#646470`
- Radius: 6px
- Padding: 6px 14px
- Height: 36px
- Font: 14px / 500 / 20px IBM Plex Sans, -0.4px
- Selected: background `#f4f4f5`, text `#020a0f` at 600
- States: selected variant read from rest values; no pointer frame
- Use: post categories on the blog home

### Buttons

**Blog header action (채용공고)**
- Background: `#fbb401`
- Text: `#ffffff`
- Radius: 6px
- Padding: 8px 16px
- Height: 36px
- Font: 16px / 500 / 24px IBM Plex Sans
- Shadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`, after two transparent zero-width layers
- States: hover and pressed frames match rest in every compared property; a hover lift named in its classes is outside what the collector measures, so no state is declared
- Use: links to the company's recruiting page, 87 × 36

**Blog subscribe button (구독하기)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 6px
- Padding: 8px 16px
- Height: 36px
- Font: 14px / 500 / 20px IBM Plex Sans
- Shadow: the same two visible layers as the header action
- States: rest only; no state frame was recorded
- Use: newsletter subscription, 80 × 36; read without submitting

**Blog header icon button**
- Background: transparent
- Text: `#020a0f`
- Radius: 6px
- Size: 36 × 36
- States: rest only; no state frame was recorded
- Use: icon-only button at the left of the blog header

### Inputs & Forms

**Blog newsletter field**
- Background: transparent
- Text: `#000000`
- Radius: 6px
- Padding: 4px 12px
- Height: 36px
- Font: 14px / 400 / 20px IBM Plex Sans
- States: rest captured; the pressed frame adds only zero-width ring layers, so nothing is declared; focus is not declared from the capture
- Use: email field beside 구독하기, 262 × 36; never filled

### Cards & Containers

**Culture carousel card**
- Background: transparent
- Size: 456 × 383
- Use: slides at the foot of the intro page; title 23px / 700 `#222222`, text 16px / 400 `#222222`, stepped by 40 × 40 arrow buttons

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages, logged out, plus first-party context)
**Tier 1 sources:** https://www.scatterlab.co.kr/ko/intro ; https://www.scatterlab.co.kr/ko/ethos ; https://blog.scatterlab.co.kr/ ; https://ethics.scatterlab.co.kr/ ; https://blog.scatterlab.co.kr/zeta-intro-2506
**Tier 2 sources:** getdesign.md/scatterlab (HTTP 200; the served page contains no occurrence of the name) and styles.refero.design/?q=scatterlab (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Selected (blog category filter)** | Background `#f4f4f5`, text `#020a0f` at 600, against `#646470` at 500. |
| **Disabled (carousel arrows)** | The intro page's 40 × 40 arrow buttons carry a recorded disabled state at capture. |
| **Hover and pressed (blog header action)** | No change in the compared properties; not declared. |
| **Transition frames (not declared)** | The newsletter field's pressed and focus frames carry zero-width ring layers. |

Focus rings, hover values, error, empty, loading and success treatments were not captured and are not described.

## Do's and Don'ts

### Do
- Keep company pages monochrome: `#222222` text on `#ffffff`, bold Pretendard headings
- Use white header buttons with `#212429` labels, 4px corners and 5.5px 12px padding
- Reserve "scatter yellow" `#fbb401` with a white label for the one action that matters — on the blog, 채용공고
- Keep blog controls at 6px corners and 36px height
- Set company pages in Pretendard and the blog in IBM Plex Sans
- Let long-form text carry the page, as the CEO's letter does

### Don't
- Don't spread `#fbb401` across the company site; the captured company pages carry no colour
- Don't add cards, hairlines or shadows to the company pages; none were observed
- Don't revive the July scroll-to-top `#212529` or the grey chips and bands; they are not on the current pages
- Don't describe the Zeta app from these pages; it lives on another domain and was not captured
- Don't invent hover or focus values the capture did not settle

## Voice & Tone

Scatter Lab's voice is **earnest, first-person and metric-backed** — a team explaining a new category in the register of a letter. The home page opens with a declarative frame, then argues with numbers: 2 hours 40 minutes a day, 800,000 monthly users, six months of profit. The culture page is candid to the point of warning applicants off, and the ethics site speaks plainly about 이루다's failure.

| Context | Tone |
|---|---|
| Headline | Declarative, category-framing. "zeta: 엔터테인먼트의 새로운 패러다임." |
| Evidence | Numbers as the argument. "제타의 특별함은 '사용 시간'으로 드러납니다." |
| Culture | Candid and demanding. "스캐터랩 Ethos: 우리가 일하는 방식." |
| Ethics | Plain accountability, with dates and specifics. |
| Recruiting | Direct invitation. "채용공고". |

**Voice samples (verbatim, opened 2026-09-30):**
- "zeta: 엔터테인먼트의 새로운 패러다임" — intro page headline and blog post title.
- "일주일에 12시간을 사용하는 AI 엔터테인먼트 서비스" — intro page subhead.
- "제타의 특별함은 '사용 시간'으로 드러납니다." — the CEO's letter.
- "우리는 많은 유저에게 사랑받는 우리만의 제품을 만들기 위해 모였다." — Ethos 1.

**Forbidden register**: exclamation-heavy hype, superlative stacking, vague "revolutionary" claims, and any register that treats AI ethics or user trust as garnish.

## Agent Prompt Guide

### Quick Color Reference
- Company text `#222222`; header labels `#212429`; footer `#8c8c8c`; canvas `#ffffff`
- Blog text `#09090b`; filters `#646470` (selected `#020a0f` on `#f4f4f5`); meta `#71717a`
- Primary action: `#fbb401` with `#ffffff` label; secondary action `#000000`

### Example Component Prompts
- "Create a company page header: white buttons with #212429 16px / 400 Pretendard labels, 4px radius, 5.5px 12px padding, 32px tall, no shadow."
- "Set a letter-style page: a 960px column, 52px / 700 Pretendard headline in #222222 with 1.35 line height, 23px / 700 chapter heads and 16px / 400 / 24px paragraphs."
- "Build a blog header action: #fbb401 fill, white 16px / 500 IBM Plex Sans label, 6px radius, 8px 16px padding, 36px tall, with a faint rgba(0, 0, 0, 0.1) 0 1px 3px shadow."
- "Make category filters: 14px / 500 IBM Plex Sans in #646470 with -0.4px tracking, 6px radius, 6px 14px padding; the selected one #020a0f at 600 on #f4f4f5."

### Iteration Guide
1. Monochrome on the company site; hierarchy by size and weight only
2. One yellow action with a white label, nowhere else
3. Pretendard for the company, IBM Plex Sans for the blog
4. 4px corners on the company header, 6px on blog controls
5. No shadows except the blog buttons' faint one

---

## Governance

### Known Gaps

- **Contrast, `blog-header-cta`.** Text `#ffffff` on `#fbb401` measures 1.81:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `blog-email-input`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `blog-category-tab`.** Text `#646470` on `#00000000` measures 3.60:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `blog-icon-button`.** Text `#020a0f` on `#00000000` measures 1.05:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
