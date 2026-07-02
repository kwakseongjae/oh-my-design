---
id: dable
name: Dable
display_name_kr: 데이블
country: KR
category: marketing
homepage: "https://dable.io/ko/"
primary_color: "#0071ce"
logo:
  type: github
  slug: teamdable
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live CTA blue (#0071ce); a distinctive mint/teal (#56cfc2) is the secondary CTA accent. Flat, shadowless, pill-heavy adtech marketing site. Poppins for display + buttons, Open Sans for body + product-page headings."
  colors:
    primary: "#0071ce"
    primary-link: "#0b7ed1"
    accent-mint: "#56cfc2"
    ink: "#000000"
    ink-soft: "#181818"
    body: "#3d3d3d"
    slate: "#464646"
    muted: "#8a8a8a"
    faint: "#cccccc"
    neutral-btn: "#e8e8e8"
    neutral-btn-text: "#6f6f6f"
    surface: "#efefef"
    dark: "#212121"
    outline-text: "#2b2b2b"
    canvas: "#ffffff"
    on-primary: "#ffffff"
  typography:
    family: { display: "Poppins", body: "Open Sans" }
    display:       { size: 56, weight: 400, lineHeight: 1.0, use: "Full-screen hero feature words (Personalization, Machine learning), Poppins" }
    heading-lg:    { size: 35, weight: 400, lineHeight: 1.0, use: "Product-page hero heading, Open Sans" }
    heading:       { size: 26, weight: 400, lineHeight: 1.0, use: "Section titles (데이블 네이티브 애드란?), Open Sans" }
    subheading:    { size: 22, weight: 400, lineHeight: 1.0, use: "Feature sub-titles, Open Sans" }
    feature-title: { size: 18, weight: 700, lineHeight: 1.0, use: "Targeting-option card titles, Open Sans Bold" }
    body:          { size: 14, weight: 400, lineHeight: 1.5, use: "Body and dense UI text, Open Sans" }
    button:        { size: 14, weight: 400, lineHeight: 1.0, use: "CTA pill label, Poppins" }
    nav:           { size: 13, weight: 600, lineHeight: 1.0, use: "Top-nav links, Poppins SemiBold" }
    footer:        { size: 15, weight: 400, lineHeight: 3.0, use: "Footer section headings, Open Sans" }
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 44, section: 64 }
  rounded: { square: 0, pill: 50, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#0071ce", fg: "#ffffff", radius: "50px", height: "48px", padding: "17px 44px", font: "14px / 400 Poppins", use: "Primary CTA pill (자세히 보기, 광고계정 생성하기, 시작하기)" }
    button-mint: { type: button, bg: "#56cfc2", fg: "#ffffff", radius: "50px", height: "48px", padding: "17px 29px", font: "14px / 400 Poppins", use: "Secondary teal CTA (기본 견적 확인)" }
    button-ghost-light: { type: button, bg: "#ffffff", fg: "#2b2b2b", radius: "50px", height: "48px", padding: "17px 44px", font: "14px / 400 Poppins", use: "White pill over dark hero (서비스 문의하기, 광고주 지원)" }
    button-neutral: { type: button, bg: "#e8e8e8", fg: "#6f6f6f", radius: "50px", height: "48px", padding: "17px 29px", font: "14px / 400 Poppins", use: "Tertiary grey pill (콘텐츠 검토 가이드)" }
    nav-link: { type: tab, fg: "#ffffff", font: "13px / 600 Poppins", active: "text #0071ce", use: "Top-nav item over dark hero" }
    feature-card: { type: card, bg: "#ffffff", fg: "#000000", use: "Flat feature/content block on white band — no shadow, no border" }
    surface-band: { type: card, bg: "#efefef", fg: "#3d3d3d", use: "Alternating grey content band / section surface" }
  components_harvested: true
---

# Design System Inspiration of Dable

## 1. Visual Theme & Atmosphere

Dable (데이블) is Korea's leading content-discovery and native-advertising platform, and its site reads like a confident, technology-forward adtech product rather than a busy media page. The canvas is pure white (`#ffffff`) broken up by full-bleed dark cinematic hero bands (`#212121`) and light-grey content surfaces (`#efefef`), giving the page a clean, spacious, presentation-like rhythm. Body copy sits in a soft near-black (`#3d3d3d`) — never a harsh pure-black wall of text — while headings drop to true black (`#000000`) for maximum authority. The single saturated brand anchor is a clear, trustworthy blue (`#0071ce`), reserved almost exclusively for the pill call-to-action, so the eye learns to read that one color as "the action."

The typographic personality is a deliberate two-font split. Display moments — the full-screen hero feature words "Personalization", "Machine learning", "Auto-optimization" — run in **Poppins** at a large 56px, a geometric sans that gives the technology story a modern, engineered feel. Body and product-page content shift to **Open Sans** at a quiet 14px / weight 400, the workhorse reading font, with section titles at 26px and feature sub-heads at 18px weight 700. Poppins also carries the CTA labels (14px) and the top-nav links (13px weight 600), so the interactive chrome always speaks in the geometric display voice while the explanatory copy stays calm in Open Sans.

What distinguishes Dable from heavier adtech dashboards is its restraint with depth. Live inspection found `box-shadow: none` across the hero, nav, headings, and every button — this is a flat system where separation comes from full-width color bands (`#212121` dark / `#efefef` grey / `#ffffff` white) rather than elevation. Interactive chrome leans hard into the pill: every CTA is a fully rounded 50px capsule, whether it is the primary blue (`#0071ce`), the distinctive secondary mint (`#56cfc2`), a white ghost pill on a dark hero, or a muted grey pill (`#e8e8e8`). The result is a fast, mobile-native, slide-like aesthetic — engineered and approachable at once.

**Key Characteristics:**
- Poppins for display headlines (56px hero words) and interactive chrome (buttons, nav)
- Open Sans weight 400 at 14px for body and dense product copy
- Single saturated blue (`#0071ce`) reserved for the primary pill CTA
- Distinctive mint/teal (`#56cfc2`) as the one secondary-action accent
- Near-black body (`#3d3d3d`) with true-black (`#000000`) headings — warm, readable
- Flat depth: no shadows; full-width `#212121` dark / `#efefef` grey / `#ffffff` bands do the separating
- Pill-everything geometry — 50px capsules on every button
- Cool neutral ladder (`#464646` → `#8a8a8a` → `#cccccc`) for text hierarchy

## 2. Color Palette & Roles

### Primary
- **Dable Blue** (`#0071ce`): Primary brand color and CTA background — the saturated blue on the pill call-to-action, the system's single "action" color.
- **Link Blue** (`#0b7ed1`): A slightly brighter blue used for inline links and text-level emphasis.
- **Accent Mint** (`#56cfc2`): The secondary-action teal, used for the one alternate CTA ("기본 견적 확인"). The only saturated hue besides the blue.

### Ink & Text Hierarchy
- **Ink Black** (`#000000`): Primary heading color — true black for section titles and hero copy.
- **Ink Soft** (`#181818`): Near-black for smaller feature-card titles (targeting options).
- **Body Grey** (`#3d3d3d`): The dominant body-copy color across the site.
- **Slate** (`#464646`): Secondary section sub-headings and stronger captions.
- **Muted** (`#8a8a8a`): Tertiary text, metadata, and de-emphasized labels.
- **Faint** (`#cccccc`): Lowest-emphasis text, disabled labels, and hairline-weight greys.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white content bands, and text on blue/dark.
- **Surface Grey** (`#efefef`): The light-grey content band used to alternate against white.
- **Dark Band** (`#212121`): Near-black background for the cinematic full-width hero sections.
- **Neutral Button** (`#e8e8e8`): Light-grey background for tertiary/muted pill buttons.
- **Neutral Button Text** (`#6f6f6f`): Text color inside the light-grey neutral pill.
- **Outline Text** (`#2b2b2b`): Dark label color inside the white ghost pill on dark heroes.
- **On Primary** (`#ffffff`): White text sitting on the blue and mint CTAs.

## 3. Typography Rules

### Font Family
- **Display**: `Poppins` — used for hero feature words, CTA labels, and top-nav links. Geometric sans, weights 400 (display/buttons) and 600 (nav).
- **Body**: `Open Sans` (the document default) — used for body copy, product-page section titles, and footer headings at weight 400, with feature-card titles at weight 700.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Poppins | 56px (3.50rem) | 400 | ~1.0 | Full-screen hero feature words |
| Product Hero | Open Sans | 35px (2.19rem) | 400 | 1.0 (35px) | Product-page hero heading |
| Section Heading | Open Sans | 26px (1.63rem) | 400 | 1.0 (26px) | Section titles |
| Sub-section | Open Sans | 22px (1.38rem) | 400 | 1.0 (22px) | Feature sub-titles |
| Feature Title | Open Sans | 18px (1.13rem) | 700 | 1.0 (18px) | Targeting-option card titles |
| Nav Link | Poppins | 13px (0.81rem) | 600 | 1.0 | Top navigation items |
| Button | Poppins | 14px (0.88rem) | 400 | 1.0 | CTA pill labels |
| Body | Open Sans | 14px (0.88rem) | 400 | 1.5 | Standard reading text |
| Footer Heading | Open Sans | 15px (0.94rem) | 400 | 3.0 (45px) | Footer section headings |

### Principles
- **Two fonts, two jobs**: Poppins is the geometric display + interactive voice; Open Sans is the functional reading voice. They never swap roles.
- **Weight over size for emphasis**: within Open Sans, hierarchy is signalled by weight (700 feature titles vs 400 body) more than by dramatic size jumps.
- **Quiet body**: body copy holds a dense, readable 14px / 400 with 1.5 line-height — information-forward, never shouting.
- **Poppins for the chrome**: every tappable label (CTA, nav) is Poppins, so the interactive layer is visually distinct from explanatory Open Sans copy.

## 4. Component Stylings

### Buttons

**Primary CTA (Blue)**
- Background: `#0071ce`
- Text: `#ffffff`
- Radius: 50px
- Padding: 17px 44px
- Font: 14px / 400 / Poppins
- Height: 48px
- Use: Primary call-to-action pill ("자세히 보기", "광고계정 생성하기", "시작하기")

**Secondary CTA (Mint)**
- Background: `#56cfc2`
- Text: `#ffffff`
- Radius: 50px
- Padding: 17px 29px
- Font: 14px / 400 / Poppins
- Height: 48px
- Use: Alternate secondary action ("기본 견적 확인")

**Ghost Pill (White on Dark)**
- Background: `#ffffff`
- Text: `#2b2b2b`
- Radius: 50px
- Padding: 17px 44px
- Font: 14px / 400 / Poppins
- Height: 48px
- Use: White pill sitting over a dark hero band ("서비스 문의하기", "광고주 지원")

**Neutral Pill (Grey)**
- Background: `#e8e8e8`
- Text: `#6f6f6f`
- Radius: 50px
- Padding: 17px 29px
- Font: 14px / 400 / Poppins
- Height: 48px
- Use: Tertiary / muted action ("콘텐츠 검토 가이드")

**Small Pill (on Blue band)**
- Background: `#0071ce`
- Text: `#ffffff`
- Radius: 50px
- Padding: 10px 40px
- Font: 13px / 400 / Poppins
- Height: 39px
- Use: Compact contact pill in dark footer band ("Contact Us")

### Cards & Containers

**Flat Feature Block**
- Background: `#ffffff`
- Text: `#000000`
- Use: Feature/content block on a white band — flat, no shadow, no border

**Grey Surface Band**
- Background: `#efefef`
- Text: `#3d3d3d`
- Use: Alternating light-grey full-width content band

### Navigation
- Background: transparent over `#212121` dark hero
- Text: `#ffffff`
- Font: 13px / 600 / Poppins
- Active: blue `#0071ce` text on the active item
- Use: Top horizontal nav ("Advertisers", "Publishers", "Support", "Resources", "About")

### Footer
- Headings: `#ffffff`, 15px / 400 / Open Sans
- Background: `#212121`
- Use: Footer section headings ("Seoul Office", "Careers", "Privacy Policy")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://dable.io/ko/, https://dable.io/ko/advertising/, https://teamdable.github.io/techblog
**Tier 2 sources:** getdesign.md/dable (SPA shell — no dable coverage); styles.refero.design/?q=dable (query returned default gallery, no dable-specific match)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px, scaling 4px → 8px → 16px → 24px → 44px → 64px
- Notable: CTA pills use a generous asymmetric 17px vertical / 29–44px horizontal padding, giving the capsules a comfortable, tappable hit area

### Grid & Container
- Full-screen cinematic hero bands anchor the page, each a single dark (`#212121`) slide with a large Poppins feature word
- Product/feature sections alternate white (`#ffffff`) and light-grey (`#efefef`) full-width bands
- Content is centered and generously spaced — a slide-deck cadence rather than dense dashboard packing
- CTAs are grouped as horizontal rows of pills beneath section copy

### Whitespace Philosophy
- **Presentation rhythm**: the layout reads like a scroll-driven deck — one idea per band, generous vertical breathing room between sections.
- **Flat segmentation**: sections separate by background color (`#212121` / `#efefef` / `#ffffff`), never by shadow or heavy borders.
- **Pill cadence**: the repeated 50px capsule creates a consistent horizontal rhythm across every call-to-action.

### Border Radius Scale
- Square (0px): content blocks, image tiles, section bands
- Pill (50px): every button and CTA — the system's defining geometry
- Full (9999px): circular play buttons and icon frames

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, text, buttons, most surfaces |
| Band (Level 1) | Background color shift (`#212121` / `#efefef` / `#ffffff`) | Section separation without elevation |

**Shadow Philosophy**: Dable is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, and every pill button. Depth and grouping are communicated entirely through full-width color bands — cinematic dark (`#212121`), light grey (`#efefef`), and white (`#ffffff`) — rather than elevation. This is a deliberate flat, presentation-like choice that keeps the adtech story feeling fast and modern. When emphasis is needed, the system reaches for color (blue `#0071ce` or mint `#56cfc2`) or a dark band, never a drop shadow.

## 7. Do's and Don'ts

### Do
- Use Poppins for display feature words (56px) and all interactive chrome (buttons, nav)
- Use Open Sans weight 400 at 14px for body and product copy
- Reserve blue (`#0071ce`) for the primary pill CTA — keep it the single "action" color
- Use the mint (`#56cfc2`) only for the one secondary/alternate CTA
- Use near-black (`#3d3d3d`) for body text and true black (`#000000`) for headings
- Separate sections with full-width color bands (`#212121` / `#efefef` / `#ffffff`), not shadows
- Use pill geometry — every button is a 50px capsule
- Put white ghost pills (`#ffffff` bg, `#2b2b2b` text) on dark hero bands for contrast

### Don't
- Use drop shadows for elevation — Dable is a flat, shadow-free system
- Spread the blue across many elements — it dilutes the single-action signal
- Introduce a third saturated accent — blue and mint are the only two hues
- Use sharp/square corners on buttons — every CTA is a full pill
- Set body copy in pure black — reserve `#000000` for headings, use `#3d3d3d` for text
- Mix the display and body fonts — Poppins owns chrome, Open Sans owns reading
- Use the mint (`#56cfc2`) for primary CTAs — the primary action is always blue

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero feature word compresses, pill rows wrap/stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature blocks |
| Desktop | 1024-1440px | Full slide-band layout, centered heroes, multi-column feature bands |

### Touch Targets
- CTA pills at 48px height with 17px vertical padding — comfortably tappable
- Compact contact pill at 39px height for dense footer bands
- Nav links spaced for touch across the top bar

### Collapsing Strategy
- Hero: 56px Poppins feature word scales down on mobile, weight maintained
- Pill rows: wrap or stack on narrow viewports
- Feature bands: multi-column → stacked single column
- Dark/grey/white alternating bands maintain full-width treatment

### Image Behavior
- Product screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Content blocks stay square-cornered across breakpoints; only buttons and circular play frames round

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Dable Blue (`#0071ce`)
- Secondary CTA: Accent Mint (`#56cfc2`)
- Inline link: Link Blue (`#0b7ed1`)
- Heading: Ink Black (`#000000`), small feature titles Ink Soft (`#181818`)
- Body text: Body Grey (`#3d3d3d`)
- Muted text: Muted (`#8a8a8a`), faint (`#cccccc`)
- Dark band: `#212121`, grey surface: `#efefef`, white: `#ffffff`
- Neutral pill: `#e8e8e8` bg / `#6f6f6f` text; ghost pill text `#2b2b2b`

### Example Component Prompts
- "Create a full-screen dark hero band: #212121 background, a large 56px Poppins weight 400 feature word in white. Below it a blue pill CTA — #0071ce background, white text, 50px radius, 17px 44px padding, 14px Poppins — and a white ghost pill (#ffffff bg, #2b2b2b text, 50px radius)."
- "Design a feature section on a white band: #ffffff background, no shadow. Section title 26px Open Sans weight 400, #000000. Feature-card titles 18px Open Sans weight 700, #181818. Body 14px Open Sans weight 400, #3d3d3d."
- "Build an alternating grey band: #efefef background, full-width. A mint secondary CTA — #56cfc2 background, white text, 50px radius, 17px 29px padding — and a neutral grey pill (#e8e8e8 bg, #6f6f6f text)."
- "Create a top nav over the dark hero: transparent bar, Poppins 13px weight 600 links in #ffffff, blue #0071ce on the active item."

### Iteration Guide
1. Poppins for feature words + chrome; Open Sans 400 for body
2. Blue (`#0071ce`) is the single primary action; mint (`#56cfc2`) is the one secondary
3. No shadows — separate with `#212121` / `#efefef` / `#ffffff` bands
4. Pill geometry throughout — every button is a 50px capsule
5. Body text is `#3d3d3d` near-black; headings are true `#000000`
6. Keep to two hues — a third saturated color breaks the system
7. White ghost pills (`#2b2b2b` text) belong on dark hero bands

---

## 10. Voice & Tone

Dable's voice is **clear, technical, and quietly confident** — an adtech company that leads with capability, not hype. The homepage opens on three single-word promises ("Personalization", "Machine learning", "Auto-optimization") and a mission line about connecting "사용자와 미디어, 콘텐츠" (users, media, and content). Copy treats the reader as a professional — an advertiser or publisher — who wants to know what the technology does and what results it produces, stated plainly with concrete numbers (500M+ monthly users, 3,000+ media partners).

| Context | Tone |
|---|---|
| Hero feature words | Single-word, declarative capability. "Personalization", "Machine learning", "Auto-optimization". |
| Product headings | Plain, benefit-first. "인공 지능 기반의 네이티브 광고를 통한 적합한 고객 발견". |
| CTAs | Direct, functional imperatives. "자세히 보기", "광고계정 생성하기", "기본 견적 확인". |
| Feature descriptions | Explains the technology in professional language; leads with the outcome for advertisers/publishers. |
| Metrics / proof | Concrete and specific — user counts, media-partner counts, market coverage. |

**Voice samples (verbatim from live surfaces):**
- "네이티브 광고와 콘텐츠 디스커버리" — homepage title (category positioning). *(verified live 2026-07-02)*
- "인공 지능 기반의 네이티브 광고를 통한 적합한 고객 발견" — advertising product title. *(verified live 2026-07-02)*
- "글로벌 프리미엄 미디어 네트워크에 광고하세요" — product hero heading (scope claim). *(verified live 2026-07-02)*

**Forbidden register**: buzzword-stacking without substance, fear-based marketing, undefined jargon left unexplained, exclamation-heavy hype. Dable's authority comes from stated capability and numbers, not adjectives.

## 11. Brand Narrative

Dable (데이블) was founded in **2015** by **이채현 (Lee Chae-hyun, CEO)** and three co-founders who had built the RecoPick recommendation venture inside SK Planet. The name itself encodes the thesis — "Data" + "able", doing everything possible with data. Lee, a POSTECH computer-science graduate with a background in big-data processing and recommendation algorithms, framed the company around a single mission: to "connect users, media, and content" (사용자와 미디어, 콘텐츠를 연결하자).

The product grew into two linked engines: **Dable News**, a personalized content-discovery widget that recommends articles to readers on media sites, and **Dable Native Ad**, described as Asia's largest native ad exchange. Together they process the behavior of **500 million-plus monthly users** through machine learning, powering personalized recommendations and auto-optimized native campaigns. By 2021 Dable had passed **3,000 media partnerships** and expanded across 10+ Asia-Pacific markets — Korea, Japan, Taiwan, Indonesia, Vietnam, Malaysia, Thailand, Hong Kong, Singapore, and beyond — before being acquired by Yanolja.

What Dable's design refuses, visible in the site: the cluttered, banner-heavy chrome of legacy ad networks and the dark-pattern urgency of performance marketing. What it embraces: a flat, cinematic, presentation-like interface; two disciplined brand hues (blue for action, mint for the alternate); geometric Poppins display over calm Open Sans copy; and a technology story told through capability words and hard numbers rather than superlatives.

## 12. Principles

1. **Lead with capability.** The homepage is three technology words, not a slogan. *UI implication:* let the feature word and the metric carry the section; keep decoration minimal.
2. **One action, one color.** Blue (`#0071ce`) means "do this." *UI implication:* reserve the saturated blue exclusively for the primary CTA so the next step is unambiguous; the mint (`#56cfc2`) is the single sanctioned alternate.
3. **Flat and fast.** Cinematic clarity beats decorative depth. *UI implication:* no shadows; separate sections with full-width color bands and let color do the work.
4. **Two voices, two fonts.** *UI implication:* Poppins for feature words and interactive chrome; Open Sans for the reading layer — never blend the two roles.
5. **Prove it with numbers.** Trust in adtech comes from scale. *UI implication:* surface concrete counts (users, media partners, markets) rather than adjectives.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Dable user segments (performance advertisers, media/publisher partners, adtech buyers across APAC), not individual people.*

**정민수, 34, 서울.** A performance marketer at a mid-size ecommerce brand buying native campaigns. Cares that auto-optimization actually lowers his cost-per-acquisition and that the reporting is legible. Chose Dable because the pitch led with the machine-learning capability and concrete results, not with hype.

**Aria Tan, 29, Singapore.** A publisher-side partnerships lead evaluating content-discovery widgets for a regional media network. Values that Dable is present across APAC and integrates cleanly; wants a partner whose product looks engineered, not like a legacy banner network.

**김서연, 41, 판교.** A marketing director allocating budget across channels. Uses Dable's scale numbers (media partners, monthly users) to justify the buy internally. Trusts the calm, capability-first brand tone over urgency-driven ad tooling.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no campaign/report data)** | White canvas. A single Body Grey (`#3d3d3d`) line explaining there is nothing yet, with one blue (`#0071ce`) pill CTA to create the first campaign. No clutter. |
| **Empty (saved list, none yet)** | Muted (`#8a8a8a`) single line noting nothing saved, plus a path back. Calm and factual. |
| **Loading (dashboard/results)** | Flat skeleton blocks on the grey surface (`#efefef`) at final dimensions — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle blue (`#0071ce`) progress indicator; previous values stay visible. |
| **Error (fetch/compute failed)** | Inline message in Body Grey (`#3d3d3d`) with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input; describes what is valid, not just "필수". |
| **Success (campaign submitted)** | Brief inline confirmation in a calm tone; next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#efefef` blocks at final dimensions, square corners, flat pulse. |
| **Disabled** | Faint (`#cccccc`) text on a neutral (`#e8e8e8`) surface; blue actions fade rather than switch to grey to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 240ms | Band/section reveal, dropdown, sheet |
| `motion-slow` | 360ms | Full-screen hero slide transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sections, sheets, pills |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is presentation-driven and quiet — the site scrolls like a deck, with full-screen hero bands revealing one idea at a time at `motion-slow / ease-standard`. Pills respond to press with a subtle scale/opacity shift; section content fades in from below at `motion-standard / ease-enter`. No bounce or spring — an adtech platform signals steadiness and precision, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the hero bands snap into place; the product stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on 2 surfaces:
- https://dable.io/ko/ (homepage) — hero feature words "Personalization"/"Machine learning"/"Auto-optimization"
  Poppins 56px weight 400 color rgb(0,0,0); primary CTA "자세히 보기" bg rgb(0,113,206) #0071ce radius 50px
  padding 17px 44px Poppins 14px white text; nav links Poppins 13px weight 600 white; body font "Open Sans" 14px
  color rgb(0,0,0); box-shadow none across hero/nav/headings/buttons; document.title
  "네이티브 광고와 콘텐츠 디스커버리".
- https://dable.io/ko/advertising/ (product page) — headings Open Sans 35px/26px/22px/18px(700); CTAs:
  blue #0071ce "광고계정 생성하기"/"상품소개서 다운로드"/"시작하기"; mint rgb(86,207,194) #56cfc2 "기본 견적 확인";
  white ghost pill rgb(255,255,255) bg text rgb(43,43,43) #2b2b2b "서비스 문의하기"; grey pill rgb(232,232,232)
  #e8e8e8 bg text rgb(111,111,111) #6f6f6f "콘텐츠 검토 가이드"; document.title
  "인공 지능 기반의 네이티브 광고를 통한 적합한 고객 발견 | Dable".

Token-level claims (§1-9) are sourced from this live inspection; see web/references/dable/.verification.md
for the full raw-sample list and the Tier-2 conflict matrix.

Voice samples (§10) are verbatim from the live homepage title, the advertising product title, and the product
hero heading.

Brand narrative (§11): Dable (데이블) founded 2015; CEO 이채현 (Lee Chae-hyun), POSTECH CS; four founders out of
SK Planet's RecoPick recommendation venture; name = "Data" + "able"; mission "사용자와 미디어, 콘텐츠를 연결하자";
Dable News (content discovery) + Dable Native Ad (Asia's largest native ad exchange); 500M+ monthly users;
3,000+ media partners by 2021; APAC expansion (Japan/Taiwan/Indonesia/Vietnam/Malaysia/Thailand/Hong Kong/
Singapore); acquired by Yanolja. Sourced from Dable's own /dable-story/ page and public interviews
(startuptoday.kr, theteams.kr). Specific figures beyond the site are widely documented public facts, not
directly quoted from a single verified Dable statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Dable user segments (advertisers,
publisher partners, adtech buyers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "one action, one color", "flat and fast as a rejection of legacy banner-network
chrome") are editorial readings connecting Dable's observed design to its positioning, not directly sourced
Dable statements.
-->
