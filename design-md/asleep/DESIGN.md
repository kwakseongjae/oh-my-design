---
id: asleep
name: Asleep
display_name_kr: 에이슬립
country: KR
category: ai
homepage: "https://www.asleep.ai/"
primary_color: "#2a75fc"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=asleep.ai&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live marketing CTA blue (#2a75fc) on a near-black #121212 canvas; the docs surface (docs.asleep.ai, ReadMe-powered) flips to light mode with its own accent blue #3a61f2. Marketing chrome is sharp-cornered (0px radius) and shadowless."
  colors:
    primary: "#2a75fc"
    accent-docs: "#3a61f2"
    info: "#118cfd"
    canvas-dark: "#121212"
    canvas: "#ffffff"
    on-dark: "#ffffff"
    ink: "#222222"
    body: "#333333"
    muted: "#444e57"
    black: "#000000"
  typography:
    family: { sans: "Pretendard Variable" }
    display-hero: { size: 52, weight: 600, lineHeight: 1.31, use: "Hero headline, Pretendard SemiBold on dark" }
    section:      { size: 40, weight: 600, lineHeight: 1.30, use: "Section titles" }
    nav:          { size: 18, weight: 400, lineHeight: 1.30, use: "Top nav items on dark header" }
    button:       { size: 16, weight: 400, lineHeight: 1.20, use: "CTA button label" }
    body:         { size: 14, weight: 400, lineHeight: 1.43, use: "Body text, 20px line-height" }
    docs-nav:     { size: 14, weight: 450, lineHeight: 1.43, use: "Docs sidebar navigation row" }
  spacing: { xs: 4, sm: 8, base: 10, md: 12, lg: 20, xl: 32, xxl: 48, section: 64 }
  rounded: { none: 0, sm: 6, md: 8, lg: 20, full: 9999 }
  shadow:
    none: "none"
    subtle: "rgba(0, 0, 0, 0.1) 0px 1px 2px"
  components:
    button-primary: { type: button, bg: "#2a75fc", fg: "#ffffff", radius: "0px", padding: "8px 12px", font: "16px / 400 Pretendard", use: "Marketing primary CTA (API 도입 문의하기) — sharp-edged electric blue" }
    button-outline: { type: button, fg: "#ffffff", border: "1px solid #ffffff", radius: "0px", padding: "8px 12px", font: "16px / 400 Pretendard", use: "Marketing secondary CTA (API Docs) outlined on dark hero" }
    nav-link: { type: tab, fg: "#ffffff", font: "18px / 400 Pretendard", active: "text #2a75fc", use: "Top nav item on dark #121212 header" }
    docs-search: { type: input, bg: "#ffffff", fg: "#000000", radius: "6px", font: "13px / 400 Pretendard", use: "Docs search field (⌘K) on the light docs surface" }
    docs-nav-item: { type: listItem, fg: "#444e57", radius: "8px", font: "14px / 450 Pretendard", active: "bg rgba(255,255,255,0.1)", use: "Docs sidebar navigation row" }
    docs-callout: { type: card, bg: "#ffffff", border: "1px solid #118cfd", radius: "6px", use: "Docs info callout / content card with a blue accent edge" }
  components_harvested: true
---

# Design System Inspiration of Asleep

## 1. Visual Theme & Atmosphere

Asleep (에이슬립) is a KAIST-born sleep-tech AI company, and its marketing site reads exactly like that lineage suggests: a dark, cinematic, research-grade surface where a single electric blue does all the persuading. The hero canvas is a near-black `#121212`, text is pure white (`#ffffff`), and the one saturated accent — an electric blue `#2a75fc` — is reserved almost entirely for the primary call-to-action. The effect is a page that feels like a laboratory at night: quiet, precise, technically confident, letting sleep-data visualizations glow against the dark rather than competing with decorative color.

The typographic voice is unmistakably Korean-modern: everything runs in **Pretendard Variable**, the de-facto Korean product typeface, with headlines at weight 600 and large sizes (52px on the hero, 40px on section titles) projecting a calm, declarative authority ("수면으로의 영역 확장, 어렵지 않습니다" / "Expanding into sleep is not difficult"). Body and UI text drop to a quiet 14px / weight 400 with a generous 20px line-height, optimized for dense hangul legibility. There is no second display font and no weight above 600 — the hierarchy comes from size and the dark/light contrast, not from typographic flourish.

The most distinctive geometric choice is what is *absent*: the marketing chrome is **sharp-cornered and shadowless**. Live inspection found `border-radius: 0px` on the primary CTA, the outlined button, and the feature cards, and `box-shadow: none` across the hero, nav, and cards. Nothing is a pill, nothing floats on elevation — separation comes from the dark canvas, thin outlines, and the blue accent alone. The developer documentation (docs.asleep.ai, a ReadMe-hosted surface) is the deliberate counterpoint: it flips to light mode with a slightly different accent blue `#3a61f2`, softer 6–8px rounded controls, muted slate navigation (`#444e57`), and an informational tint blue `#118cfd`. Two surfaces, one company — the marketing site is the confident dark pitch; the docs are the calm, legible workbench.

**Key Characteristics:**
- Near-black `#121212` marketing canvas with pure-white (`#ffffff`) text — a dark, laboratory-at-night atmosphere
- A single electric blue (`#2a75fc`) reserved for the primary CTA — the system's only "action" color
- Sharp `0px` corners on buttons and cards — no pills, no rounding on the marketing surface
- Shadowless marketing chrome — separation via dark canvas, outlines, and color, never elevation
- Pretendard Variable everywhere; weight 600 headlines at 52px, weight 400 body at 14px / 20px line-height
- Light-mode docs surface (ReadMe) with its own accent blue `#3a61f2`, muted slate nav `#444e57`, info tint `#118cfd`, and 6–8px rounding
- Near-black heading (`#222222`) and dark-grey body (`#333333`) on light sections; pure `#000000` for maximum-contrast docs controls

## 2. Color Palette & Roles

### Primary & Accents
- **Asleep Blue** (`#2a75fc`): Primary brand color and CTA background. The saturated electric blue on the "API 도입 문의하기" button — the marketing system's single "action" color.
- **Docs Accent Blue** (`#3a61f2`): The accent blue of the ReadMe-hosted docs surface — links, active states, and interactive highlights inside `docs.asleep.ai`. A close but distinct sibling of the marketing blue.
- **Info Blue** (`#118cfd`): Informational highlight/tint blue used in the docs (callout borders, tinted note backgrounds at low alpha).

### Dark Canvas & Text
- **Ink Black Canvas** (`#121212`): The near-black background of the marketing hero and dark sections.
- **Pure White** (`#ffffff`): Text and outlines on the dark canvas, and the background of the light docs surface.
- **Heading Grey** (`#222222`): Near-black heading color on light sections — warm, not pure black.
- **Body Grey** (`#333333`): Default body/paragraph text color (document default, 14px).
- **Pure Black** (`#000000`): Maximum-contrast text for docs controls (search field, high-emphasis labels).

### Docs Neutrals
- **Muted Slate** (`#444e57`): Docs sidebar navigation text and secondary/muted labels — the quiet neutral of the documentation surface.

## 3. Typography Rules

### Font Family
- **Sans (universal)**: `Pretendard Variable` (with `sans-serif` fallback) — used for every headline, nav item, button label, and paragraph across both the marketing site and the docs. There is no separate display face.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Pretendard Variable | 52px (3.25rem) | 600 | 1.31 (68px) | Hero headline on dark canvas, white |
| Section Heading | Pretendard Variable | 40px (2.50rem) | 600 | 1.30 | Section titles |
| Nav Link | Pretendard Variable | 18px (1.13rem) | 400 | 1.30 | Top navigation items on dark header |
| Button | Pretendard Variable | 16px (1.00rem) | 400 | 1.20 | CTA button labels |
| Body | Pretendard Variable | 14px (0.88rem) | 400 | 1.43 (20px) | Standard reading / UI text |
| Docs Nav | Pretendard Variable | 14px (0.88rem) | 450 | 1.43 | Docs sidebar navigation rows |

### Principles
- **One typeface, size-driven hierarchy**: Pretendard Variable carries everything. Contrast comes from size (52 → 40 → 18 → 14) and from the dark/light surface split, not from mixing fonts.
- **Restrained weight**: Headlines top out at weight 600 — confident but never heavy. There is no 700/800 display weight anywhere on the marketing surface.
- **Hangul-first body sizing**: Body sits at 14px with a 20px line-height — generous for dense hangul legibility while keeping information-rich API content compact.
- **Docs nudge to 450**: The documentation sidebar uses an intermediate weight (450) — a subtle legibility bump for long navigation lists, distinct from the marketing 400.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#2a75fc`
- Text: `#ffffff`
- Radius: 0px
- Padding: 8px 12px
- Font: 16px / 400 / Pretendard Variable
- Height: 38px
- Use: Marketing primary action ("API 도입 문의하기") — sharp-edged electric-blue CTA

**Outlined (Secondary)**
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 0px
- Padding: 8px 12px
- Font: 16px / 400 / Pretendard Variable
- Height: 45px
- Use: Secondary action ("API Docs ↗") outlined on the dark hero

### Inputs

**Docs Search**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 6px
- Font: 13px / 400 / Pretendard Variable
- Use: Documentation search field (⌘K) on the light docs surface

### Cards & Containers

**Feature Card (Marketing)**
- Background: `#121212`
- Text: `#ffffff`
- Radius: 0px
- Use: Product/feature entry card on the dark canvas (Dashboard, Asleep Docs, Sleep Report Design Guide) — sharp corners, shadowless

**Docs Callout**
- Background: `#ffffff`
- Border: 1px solid `#118cfd`
- Radius: 6px
- Use: Documentation info callout / content card with a blue accent edge

### Badges

**Info Tint**
- Background: `rgba(17,140,253,0.1)`
- Text: `#118cfd`
- Radius: 6px
- Font: 13px / 500 / Pretendard Variable
- Use: Docs informational tint pill / note highlight

### Tabs

**Top Nav**
- Text (inactive): `#ffffff`
- Text (active): `#2a75fc`
- Font: 18px / 400 / Pretendard Variable
- Height: 65px header
- Use: Top navigation on the dark `#121212` header ("Products", "Research", "Company", "FAQ")

### Navigation
- Marketing header: dark `#121212`, 65px tall, white 18px nav items, blue `#2a75fc` accent on the CTA
- Docs sidebar: light surface, muted slate `#444e57` rows at 14px / weight 450, 8px radius, active row tinted `rgba(255,255,255,0.1)`

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.asleep.ai/ | https://docs.asleep.ai/docs/brand-guideline
**Tier 2 sources:** getdesign.md/asleep — 0 DESIGN.md files (not listed); styles.refero.design/?q=asleep — no Asleep match (only sleep-adjacent brands: Eight Sleep, Sandland Sleep)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base grid: ~4px, with control padding landing at 8px vertical / 10–12px horizontal
- Scale: 4px, 8px, 10px, 12px, 20px, 32px, 48px, 64px
- Notable: buttons use a tight 8px 12px padding; nav items use 0 10px; feature-card headings use 0 20px

### Grid & Container
- Dark full-width hero with a centered 52px Pretendard headline as the anchor
- Product/feature entries arranged as a row of large equal-height cards (~450px tall) on the dark canvas
- Sections alternate between the dark `#121212` canvas and lighter content bands
- Docs surface uses a fixed left navigation sidebar + wide content column (classic ReadMe three-zone layout)

### Whitespace Philosophy
- **Dark breathing room**: the marketing surface leans on generous negative space filled by the dark canvas, so the single blue CTA and white headline carry the eye.
- **Flat segmentation**: sections separate by surface tone and thin outlines, not by shadow or heavy borders.
- **Docs density**: the documentation flips the priority — dense, scannable navigation and compact rows for information-rich API reference.

### Border Radius Scale
- None (0px): marketing buttons, feature cards — the sharp-cornered signature
- Small (6px): docs search field, docs callouts
- Medium (8px): docs sidebar navigation rows
- Large (20px): occasional rounded media/containers
- Full (9999px / 100%): circular icons and avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Marketing hero, nav, feature cards — the default |
| Tone (Level 1) | Dark `#121212` vs lighter band | Section separation without elevation |
| Subtle (Level 2) | `rgba(0, 0, 0, 0.1) 0px 1px 2px` | Docs controls (search, dropdowns) — a faint lift only |

**Shadow Philosophy**: Asleep's marketing surface is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, and feature cards. Depth is communicated by the dark canvas, thin white outlines, and the single blue accent — never by drop shadows or floating card stacks. The only place elevation appears is the docs surface, where ReadMe's chrome adds a barely-there `rgba(0,0,0,0.1)` lift on interactive controls. This flat, sharp-cornered treatment reads as engineered and technical — appropriate for a company selling a precision measurement API.

## 7. Do's and Don'ts

### Do
- Use the near-black `#121212` canvas with white (`#ffffff`) text for hero and dark sections
- Reserve electric blue (`#2a75fc`) for the primary CTA — keep it the single "action" color on the marketing surface
- Use sharp `0px` corners on marketing buttons and cards — the square edge is the signature
- Keep the marketing surface shadowless — separate with the dark canvas, outlines, and color
- Set every headline in Pretendard Variable at weight 600, sized 40–52px
- Use body text at 14px / weight 400 with a 20px line-height for dense hangul legibility
- On the docs surface, switch to the docs accent blue (`#3a61f2`), light mode, and 6–8px rounding
- Use muted slate (`#444e57`) for documentation navigation rows

### Don't
- Use drop shadows for elevation on the marketing surface — it is a flat, shadowless system
- Round the marketing CTA or cards — corners stay at `0px`, never pills
- Spread the electric blue (`#2a75fc`) across many elements — it dilutes the single-action signal
- Mix in a second saturated accent hue on the marketing site — blue is the only one
- Use a heavy display weight (700/800) — headlines top out at 600
- Use pure black (`#000000`) for marketing headings — reserve near-black `#222222` / dark-grey `#333333`
- Carry the marketing dark canvas into the docs — documentation is deliberately light-mode

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, nav collapses to a menu |
| Tablet | 640–1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024–1440px | Full layout, centered hero, multi-card feature row; docs sidebar visible |

### Touch Targets
- Primary CTA at 38px height, secondary outlined button at 45px — comfortably tappable
- Nav items sit within a tall 65px header for generous hit area
- Docs search and sidebar rows sized for pointer + touch on the documentation surface

### Collapsing Strategy
- Hero: 52px Pretendard headline scales down on mobile, weight 600 maintained
- Feature card row: multi-column → stacked single column
- Dark/light sections maintain full-width treatment
- Docs: fixed sidebar collapses to a toggle menu on narrow viewports

### Image Behavior
- Product/data visualizations sit on the dark canvas with no shadow at any size, consistent with the flat system
- Marketing cards keep sharp `0px` corners across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Asleep Blue (`#2a75fc`)
- Dark canvas: Ink Black (`#121212`)
- Text on dark: Pure White (`#ffffff`)
- Heading (light section): Heading Grey (`#222222`)
- Body text: Body Grey (`#333333`)
- Docs accent: Docs Accent Blue (`#3a61f2`)
- Docs info tint: Info Blue (`#118cfd`)
- Docs nav text: Muted Slate (`#444e57`)
- Max-contrast control text: Pure Black (`#000000`)

### Example Component Prompts
- "Create a hero on a near-black `#121212` canvas. Headline at 52px Pretendard Variable weight 600, line-height 1.31, white `#ffffff`. Two CTAs: a filled electric-blue button (`#2a75fc` background, white text, `0px` radius, 8px 12px padding, 16px Pretendard) labelled 'API 도입 문의하기', and an outlined button (transparent, 1px solid `#ffffff`, white text, `0px` radius) labelled 'API Docs ↗'. No shadow."
- "Design a feature card on the dark canvas: `#121212` background, white `#ffffff` text, `0px` radius, no shadow, ~450px tall, heading in Pretendard 600 with a small 'Dashboard ↗' link at the bottom."
- "Build a light-mode docs layout: white `#ffffff` surface, muted slate `#444e57` sidebar rows at 14px weight 450 with 8px radius, docs accent blue `#3a61f2` on links, and an info callout card with a 1px solid `#118cfd` border at 6px radius."
- "Create a top nav on a `#121212` header, 65px tall: white 18px Pretendard nav items ('Products', 'Research', 'Company', 'FAQ'), electric-blue `#2a75fc` on the active/CTA item."

### Iteration Guide
1. Pretendard Variable for everything; headlines weight 600 at 40–52px, body weight 400 at 14px
2. Electric blue (`#2a75fc`) is the single marketing action color — don't spread it
3. Marketing corners stay at `0px`; docs controls use 6–8px
4. No shadows on the marketing surface — separate with the dark canvas and outlines
5. Text on dark is `#ffffff`; headings on light are `#222222`, body is `#333333`
6. Docs surface flips to light mode with accent `#3a61f2`, info tint `#118cfd`, slate nav `#444e57`
7. Keep the atmosphere quiet and technical — the data glows, the chrome recedes

---

## 10. Voice & Tone

Asleep's voice is **calm, credible, and quietly ambitious** — a research team that turned a lab breakthrough into an API and talks about it with evidence, not hype. The hero line "수면으로의 영역 확장, 어렵지 않습니다" ("Expanding into sleep is not difficult") sets the register: reassuring and enabling, framed around the partner's ease rather than Asleep's cleverness. Claims are backed with numbers ("세계에서 가장 정확한 수면 AI 모델", 2,201,145 training instances, 74 patent applications, 22 papers, KFDA Class-2 certification) rather than adjectives. The tone treats the reader — usually a developer or product team integrating sleep measurement — as a capable peer.

| Context | Tone |
|---|---|
| Hero headline | Enabling, partner-focused. "수면으로의 영역 확장, 어렵지 않습니다." Calm, not hype. |
| Product / API descriptions | Precise and evidence-led. States the capability and the number behind it. |
| CTAs | Direct and low-pressure. "API 도입 문의하기", "API Docs ↗", "Dashboard ↗". |
| Docs / brand guideline | Instructional and exact. "서비스에 Asleep 브랜드를 활용하는 방법" — clear rules, no fluff. |
| Company / mission | Mission-framed and humble about the science. "잘 자는 세상은 잠 자체를 잘 아는 것에서부터 시작한다." |

**Voice samples (verbatim from live surfaces):**
- "수면으로의 영역 확장, 어렵지 않습니다" — hero headline, homepage. *(verified live 2026-07-02)*
- "세계에서 가장 정확한 수면 AI 모델을 사용하여" — product section, homepage. *(verified live 2026-07-02)*
- "서비스에 Asleep 브랜드를 활용하는 방법" — brand guideline heading, docs.asleep.ai. *(verified live 2026-07-02)*

**Forbidden register**: fear-based health scare marketing, undefined medical jargon left unexplained, exclamation-heavy hype, and unquantified superlatives ("revolutionary", "magical") — accuracy claims must carry a number.

## 11. Brand Narrative

Asleep (에이슬립) was founded in **2020** as a spin-out of a **KAIST** research lab, led by CEO **이동헌 (Lee Dong-heon)** — a KAIST AI graduate — with CTO **홍준기 (Hong Jun-ki)** and a founding group of KAIST electrical-engineering researchers. The company describes itself as "잠이 부족한 세상을 기술로 혁신하고 있는 슬립테크 스타트업" (a sleep-tech startup innovating a sleep-deprived world through technology), and its founding conviction was blunt about the science: as the CEO put it, "호흡음이 실제로 가장 정확할 거라는 근거는 없었지만... 확신을 가지고 진행시켰습니다" ("there was no initial evidence that breathing sounds would be the most accurate signal — but we proceeded with conviction"). That bet — measuring sleep stages from breathing sound alone, contactless, with no wearable — became **AsleepTrack**, the API and SDK the company now licenses to partners.

The founding pain point was access: a proper polysomnography sleep study historically cost around a million won and required a clinic. The CEO frames the mission around removing that barrier — "누구나 필요하다면 비용걱정 없이 검사를 받았으면 합니다" ("anyone who needs it should be able to get tested without worrying about cost"). Asleep's belief statement makes the philosophy explicit: "잘 자는 세상은 잠 자체를 잘 아는 것에서부터 시작한다" ("a world that sleeps well begins with understanding sleep itself"). Rather than sell a consumer device, Asleep chose to be the measurement layer other products build on — smart home, health/fitness, wellness, and finance partners integrate the sleep model instead of building their own.

What Asleep refuses, visible in its design: the fear-driven, over-decorated aesthetic of much health marketing, and the intimidating chrome of clinical software. What it embraces: a dark, quiet, evidence-first surface where the data visualization is the hero and a single blue CTA points to the one next step; numbers instead of adjectives; and a documentation experience precise enough for a developer to integrate a medically-certified model in an afternoon. As the CTO frames the posture: "혁신을 주도하는 스타트업은 바람을 직접 일으킬 줄도 알아야 합니다" ("a startup that leads innovation has to know how to create the wind itself").

## 12. Principles

1. **Evidence over adjectives.** Asleep sells accuracy, so it shows accuracy. *UI implication:* pair every capability claim with the number behind it (accuracy, training instances, patents, certification) rather than superlatives.
2. **The data is the hero; the chrome recedes.** *UI implication:* keep the canvas dark and quiet so sleep visualizations glow; use one blue accent and no decorative color.
3. **One action, one color.** Electric blue (`#2a75fc`) means "do this next." *UI implication:* reserve the saturated blue for the single primary CTA so the next step is never ambiguous.
4. **Engineered, not soft.** A precision measurement API should look precise. *UI implication:* sharp `0px` corners and a shadowless flat surface on the marketing site; save the softer rounding for the docs.
5. **Be the layer, not the app.** Asleep succeeds when partners integrate easily. *UI implication:* the developer documentation is a first-class design surface — legible, exact, and fast to navigate.
6. **Access is the mission.** Sleep measurement should not require a clinic. *UI implication:* copy and flows emphasize ease of adoption ("어렵지 않습니다") over technical gatekeeping.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Asleep customer segments (developers and product teams integrating sleep measurement, smart-home and wellness partners), not individual people.*

**정민석, 33, 서울.** A mobile engineer at a smart-home company adding sleep tracking to a bedside device. Values that AsleepTrack is contactless and API-first, so he can ship a sleep feature without building an ML pipeline. Judges the product by how fast he can get a first measurement working from the docs.

**Hannah Cho, 38, Seoul.** A product manager at a wellness app evaluating sleep vendors. Cares about the KFDA Class-2 certification and the published accuracy numbers because her app makes health-adjacent claims. Trusts the evidence-first tone over competitors who lead with lifestyle imagery.

**이서연, 29, 대전.** A founder building a fitness-recovery product who needs sleep-stage data but has no hardware budget. Chose Asleep because measuring from breathing sound means her users need nothing but a phone by the bed. Reads the brand guideline to place the partnership logo correctly.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no sleep sessions yet)** | Dark `#121212` canvas. Single white (`#ffffff`) line explaining no measurements yet, with one blue `#2a75fc` CTA to start a first session. No decorative illustration. |
| **Empty (dashboard, no data)** | Muted line on the surface tone; a clear path to create an API key or run a sample session. Honest and calm. |
| **Loading (measurement / analysis)** | Flat progress indicator consistent with the shadowless system; previous values stay visible during in-place refresh. |
| **Loading (page / docs)** | Skeleton blocks at final dimensions, no shadow shimmer — a flat pulse matching the flat surface. |
| **Error (API call failed)** | Inline message stating the error type and a plain next step; on the docs surface, the error code is shown verbatim with a link to the Error Codes reference. No generic "문제가 발생했습니다" alone. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". |
| **Success (session complete / key created)** | Brief inline confirmation in a calm tone; the resulting data or key is surfaced immediately below. No celebratory emoji. |
| **Skeleton** | Flat blocks at final dimensions on the surface, sharp corners on the marketing side and 6px on the docs side. |
| **Disabled** | Reduced-opacity control; the blue action fades rather than turning grey, preserving the single-action read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, button press |
| `motion-standard` | 200ms | Card/section reveal, dropdown, docs sidebar expand |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sections, cards, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and restrained — consistent with the flat, evidence-first aesthetic. Sections and data cards fade in from slightly below at `motion-standard / ease-enter`; the primary blue CTA responds to press with a subtle opacity/scale shift. No bounce or spring — a precision measurement product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on 2 brand-owned surfaces:
- https://www.asleep.ai/ (marketing homepage) — bg rgb(18,18,18) #121212; hero H1 "수면으로의 영역 확장, 어렵지 않습니다" Pretendard 52px/600 white; primary CTA bg rgb(42,117,252) #2a75fc radius 0px padding 8px 12px; outlined button 1px solid #ffffff radius 0px; nav 18px/400 white on 65px header; body Pretendard 14px/400 rgb(51,51,51) #333333; box-shadow none across hero/nav/cards; feature cards radius 0px.
- https://docs.asleep.ai/docs/brand-guideline (ReadMe docs) — accent rgb(58,97,242) #3a61f2; sidebar nav rgb(68,78,87) #444e57 14px/450 radius 8px; search bg #ffffff fg #000000 radius 6px; info tint rgb(17,140,253) #118cfd; brand-guideline copy "서비스에 Asleep 브랜드를 활용하는 방법".

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage (hero H1, product section) and the
docs brand-guideline heading.

Brand narrative (§11): founded 2020 as a KAIST spin-out; CEO 이동헌 (Lee Dong-heon), CTO
홍준기 (Hong Jun-ki); product AsleepTrack (contactless breathing-sound sleep AI). Mission,
belief, and executive quotes are from the company page (https://www.asleep.ai/company,
WebFetch 2026-07-02) and corroborated by public reporting (Forbes Korea, THE VC, Daum/news
"KAIST 연구실서 글로벌 슬립테크 강자로"). Credentials (2,201,145 training instances, 74
patent applications, 22 papers, KFDA Class-2 certification, CES 2025 Innovation Award,
Forbes 30-under-30) are stated on Asleep's own surfaces and public reporting.

Personas (§13) are fictional archetypes informed by publicly observable Asleep customer
segments (developers/product teams integrating sleep measurement, smart-home/wellness
partners). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "the data is the hero; the chrome recedes", "engineered, not
soft") are editorial readings connecting Asleep's observed design to its positioning, not
directly sourced Asleep statements.
-->
