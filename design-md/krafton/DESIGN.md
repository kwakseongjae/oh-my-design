---
id: krafton
name: "KRAFTON"
country: KR
category: consumer-tech
homepage: "https://www.krafton.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=krafton.com&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#000000"
    brand: "#000000"
    canvas: "#000000"
    foreground: "#ffffff"
    muted: "#777777"
    on-primary: "#ffffff"
    surface: "#0a0a0a"
    hairline: "#393939"
    body: "#555555"
    content: "#222222"
    placeholder: "#adadad"
    disabled: "#dddddd"
    error: "#ed2929"
    link: "#3d7fd9"
  typography:
    family: { sans: "Poppins", mono: "SF Mono" }
    hero-logotype:  { size: 140, weight: 400, use: "Hero logotype, KRAFTON custom font, display only" }
    page-header:    { size: 70, weight: 700, use: "PageHeader title on light pages" }
    article-body:   { size: 16, weight: 400, lineHeight: 1.9, use: "Article/single body copy" }
    nav:            { size: 18, weight: 600, use: "Navigation, Poppins" }
    body:           { size: 14, weight: 400, lineHeight: 1.7, use: "Base body text" }
    selector:       { size: 13, weight: 400, use: "Language selector links" }
    footer:         { size: 12, weight: 400, use: "Footer copyright, Poppins" }
  spacing: { xs: 15, sm: 20, md: 40, base: 60, lg: 80, xl: 100, xxl: 140 }
  rounded: { sm: 0, md: 0, lg: 0, full: 9999 }
  shadow:
    none: "No box-shadow in brand CSS; depth via dark background bleed and self-lit imagery"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#ffffff", fg: "#000000", border: "2px solid #000000", padding: "8px 43px 8px 15px", font: "14px / 700", radius: "0px", hover: "bg #000000 fg #ffffff (inverted)", use: "Download button on white surface" }
    input-search: { type: input, bg: "#ffffff", fg: "#222222", border: "2px solid #000000", height: "46px", padding: "12px 20px", font: "15px / 500", radius: "0px", use: "Search input, placeholder #adadad" }
    tab-third: { type: tab, bg: "#f7f7f7", fg: "#000000", font: "19px / 500", height: "2.4em", active: "bg #000000 fg #ffffff 19px/700", use: "ThirdDepthTab navigation" }
    listItem-link: { type: listItem, fg: "#222222", font: "15px / 500", hover: "underline expands 0 to 100% 2px over 0.3s", use: "Download link, text + animated underline" }
---

# KRAFTON

KRAFTON is a South Korean game publisher and developer whose digital identity is built entirely in monochrome — deep black surfaces carry white type and logotypes while a proprietary KRAFTON typeface, Zalando Sans Expanded, and Poppins work in concert to communicate ambition at cinematic scale.

## 1. Visual Theme & Atmosphere

KRAFTON's corporate site operates as a dark-mode-first canvas where the page body is assigned the class `Bg-black`, the footer background is `#000000`, and the cookie-consent overlay uses `#0a0a0a`. This near-total blackness is not merely decorative; it positions each game property and studio card as a self-contained illuminated world against the void, echoing the brand's "Pioneer the Undiscovered" manifesto. The rare white surface — appearing only on inner article pages — feels like daylight breaking through. Motion is purposeful and cinematic: content tiles ascend 100px with an opacity fade over 0.8 s (ease-out), hero backgrounds reveal themselves in a 0.4 s parallax bloom with a 0.2 s delay, and a 5px diagonal-skewed progress bar crowns the header on scroll. Typography scales dramatically between breakpoints — a 140px custom-font logotype on desktop collapses gracefully through responsive vw units, maintaining the feeling of largeness even on mobile. Hover interactions on text links extend a thin 2px underline from left to right over 0.3 s, lending restraint to a design that could otherwise feel aggressive.

## 2. Color Palette & Roles

- **Brand Black:** `#000000` — primary background (homepage, footer, header bar, mega-menu backdrop)
- **Site Black:** `#0a0a0a` — cookie-consent bar background; near-black alternate
- **Dark Surface:** `#393939` — footer divider lines, dark-mode border, footer header background
- **Body Background:** `#ffffff` — inner page (article/single) background
- **Body Text:** `#555555` — default body copy color
- **Content Text:** `#222222` — rich-text body, table data
- **Mid Gray:** `#777777` — secondary labels, nav hover (Bg-black context)
- **Muted Gray:** `#ADADAD` — input placeholder text
- **Disabled Gray:** `#DDDDDD` — scrollbar track, disabled borders
- **Alert Red:** `#ED2929` — required-field markers and error states (`#E84847` alternate)
- **Link Blue:** `#3D7FD9` — inline hyperlink color in article content
- **White Text:** `#ffffff` — all text on black/dark surfaces including nav, footer copy

## 3. Typography Rules

KRAFTON uses a four-family hierarchy. "KRAFTON" is a proprietary display face used exclusively for the 140 px hero logotype (single weight, normal style). "Zalando Sans Expanded" (weights 200–900, hosted via Google Fonts and self-hosted woff2) serves editorial and marketing headings — the vision tagline "PIONEER THE UNDISCOVERED" and core values use this face in a large, expanded treatment. "Poppins" (weights 400/500/700) covers all navigation, download buttons, footer links, and language selectors. "Noto Sans" / "Noto Sans KR" / "Noto Sans SC" (weights 300/400/500/700) covers Korean, Chinese, and Japanese body copy globally.

Base body: 14 px / 1.7 line-height, `#555555`, weight 400, word-break: keep-all.  
PageHeader title: 70 px bold, color `#000` (light pages).  
Hero large logotype: 140 px, font-family "KRAFTON".  
Article/Single body: 16 px / 1.9, H1 1.30em, H2 1.24em, H3 1.18em.  
Navigation: Poppins, default 18 px on hamburger button, weight 600.  
Language selector links: Poppins 13 px, color `#A2A2A2`.  
Footer copyright: Poppins 12 px, `rgba(255,255,255,0.4)`.

## 4. Component Stylings

### Download Button

**Primary (White Background)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 2px solid `#000000`
- Padding: 8px 43px 8px 15px
- Font: 14px / 700
- Transition: background-color 0.1s

**Hover (Inverted)**
- Background: `#000000`
- Text: `#ffffff`
- Border: 2px solid `#000000`
- Transition: background-color 0.1s

### Search Input

**Default**
- Background: `#ffffff`
- Text: `#222222`
- Border: 2px solid `#000000`
- Height: 46px
- Padding: 12px 20px
- Font: 15px / 500

**Placeholder**
- Text: `#ADADAD`
- Font: 15px / 500

### Tab Navigation (ThirdDepthTab)

**Default Tab**
- Background: `#f7f7f7`
- Text: `#000000`
- Font: 19px / 500
- Height: 2.4em

**Active Tab**
- Background: `#000000`
- Text: `#ffffff`
- Font: 19px / 700

### Download Link (Text + Underline)

**Default**
- Text: `#222222`
- Font: 15px / 500
- Underline: linear-gradient(`#000000`,`#000000`) 0 2px, width 0
- Transition: background-size 0.2s ease-out

**Hover**
- Underline: expands to 100% 2px

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://www.krafton.com (homepage HTML + inline CSS), https://www.krafton.com/wp-content/themes/krafton/style.css, https://www.krafton.com/wp-content/themes/krafton/assets/css/component.css, https://www.krafton.com/wp-content/themes/krafton/assets/css/header.css, https://www.krafton.com/wp-content/themes/krafton/assets/css/footer.css, https://www.krafton.com/wp-content/themes/krafton/assets/css/page.css, https://www.krafton.com/about/brandcenter/, https://www.krafton.com/en/about/vision/
**Tier 2 sources:** getdesign.md/krafton — NOT LISTED (0 DESIGN.md files). refero — no result for KRAFTON KR.
**Conflicts unresolved:** none

## 5. Layout Principles

The site uses a max-width 1280px centered container with 40px horizontal padding on desktop (`.site-container`). The header container uses proportional `4.11458vw` gutters to stay edge-aligned. At breakpoints 1300–1025 px the container shifts to `98.461vw` max-width, at 1024–768 px it becomes full-width with `2.607vw` padding, and below 767 px padding expands to `4.25vw–6.25vw`. The homepage body (`Bg-black`) has `overflow:hidden` to contain parallax video backgrounds. Inner pages receive `padding-top: 220px` to clear the sticky header. Mega-menu columns use a `table`/`table-cell` layout pattern consistent with a pre-flex-era codebase. Bottom-margin utility classes step in increments of 5–10 px from 15 px to 140 px, providing the spacing rhythm.

## 6. Depth & Elevation

KRAFTON does not use drop shadows for component elevation. Depth is expressed instead through two mechanisms: (1) dark background bleed — game and studio cards appear as self-lit images floating on the black void, creating apparent foreground/background separation without shadows; (2) the `SiteHeaderBar`, a 5px diagonal-skewed element at the top of the header viewport that changes from `#000` to `#fff` (on Bg-black pages) when the user scrolls (`is-View` state), creating a subtle kinetic highlight. The cookie-consent overlay uses `background-color: rgba(0,0,0,0.64)` to produce a scrim; popups use `rgba(0,0,0,0.5)`. No box-shadow declarations appear in the brand's own CSS files.

## 7. Do's and Don'ts

### Do
- Use the KRAFTON custom font for hero-scale logotype moments at 140 px or above
- Set all major page backgrounds to `#000000`; reserve `#ffffff` for body-copy pages only
- Apply Poppins for all Latin navigation, buttons, and footer links
- Use Noto Sans KR/SC/JP for any East Asian body copy to honour the multi-locale character set
- Animate content entrance with a combined translateY(100px) → translateY(0) + opacity 0 → 1 over 0.8 s ease-out
- Use a 2px solid `#000000` border as the default frame for interactive white-surface components (search, download buttons)
- Scale typography proportionally using vw units between breakpoints to preserve the cinematic headline feeling

### Don't
- Do not introduce drop-shadow on cards or containers — the brand achieves depth without shadows
- Do not use coloured CTAs; brand buttons are strictly black-on-white or white-on-black
- Do not mix the KRAFTON display font with body-weight copy — it is reserved for large-scale display only
- Do not break the max-width 1280px container with full-bleed section content without a dedicated full-bleed block pattern
- Do not use font-weight below 300 in navigation or body contexts
- Do not add border-radius to buttons or interactive controls — the brand uses sharp 0 px corners throughout

## 8. Responsive Behavior

Four explicit breakpoint ranges are defined in CSS:

| Range | Container max-width | H. padding | Heading size |
|---|---|---|---|
| ≥ 1301 px | 1280 px | 40 px | 70 px |
| 1025–1300 px | 98.46 vw | 3.48 vw | 5.38 vw |
| 768–1024 px | 100% | 2.61 vw | 5.08 vw |
| ≤ 767 px | 100% | 4.25–6.25 vw | 10.38 vw |

The hamburger menu (`SiteHeaderMapButton`) is hidden at ≥1025 px with `opacity:0; visibility:hidden`. The mega-menu transforms from horizontal columns to full-screen mobile panels. Typography vw scaling means the 140 px hero becomes ~16.77 vw on mobile (≈108 px on 375 px screen). Video hero panels (`KeyVisualVideoBox`) use an `opacity:0.6` black overlay (`#000`) that persists across all breakpoints. ThirdDepthTab collapses into an accordion on mobile.

## 9. Agent Prompt Guide

When building KRAFTON-style UI: set `background:#000; color:#fff` on all primary surfaces. Use `font-family:"Zalando Sans Expanded", sans-serif` at 600–800 weight for display headings; use `font-family:"Poppins", sans-serif` at 500 for nav links and buttons; use `font-family:"Noto Sans","Noto Sans KR", sans-serif` at 400 for body Korean copy. Buttons are rectangular with `border:2px solid #000; background:#fff; color:#000` and invert to `background:#000; color:#fff` on hover with `transition:background-color 0.1s`. Entrance animations use `transform:translateY(100px); opacity:0` transitioning to `transform:translateY(0); opacity:1` over `0.8s ease-out`. Text-link hover uses a pseudo-element underline that scales from 0 to 100% width over `0.3s ease-out`. All border-radius values are 0. No box-shadows. If generating game cards, place imagery on `#000` with no visible frame — let the image be the only light source.

## 10. Voice & Tone

**Adjectives:** pioneering, cinematic, direct

| Do | Don't |
|---|---|
| Speak in ambitious imperatives: "Pioneer the Undiscovered." | Soften with hedges: "We try to push boundaries." |
| Lead with the vision, then back with craft detail. | Over-explain the technology before the emotional promise. |
| Use present tense for values: "Fans are at the center." | Use passive constructions: "Fans are being considered." |
| Short sentences that land hard. | Long compound sentences that dilute impact. |

Voice samples (illustrative):
- *Illustrative:* "We pioneer the path to players' dreams. With bold imagination and breakthrough technology, we create unforgettable worlds for fans across the globe."
- *Illustrative:* "PIONEER THE UNDISCOVERED — our vision is not a destination. It is the act of moving into uncharted territory and making it a world worth living in."
- *Illustrative:* "Deep thinking and meticulous groundwork fuel our success. We don't rush into the undiscovered; we prepare to own it."

## 11. Brand Narrative

KRAFTON was founded in 2007 as Bluehole Studio, a small Korean game development company whose first major title, TERA, established a reputation for ambitious massively multiplayer experiences. Over the following decade the studio portfolio grew into a holding structure; in 2018 the parent company renamed itself KRAFTON — a compound that emphasises the act of crafting — to reflect its role as a creator of original intellectual property rather than a portfolio of acquired products.

The global moment arrived in 2017 with PUBG: Battlegrounds, which reached over 75 million copies sold and became a defining cultural touchstone for the battle-royale genre. KRAFTON went public on the Korea Stock Exchange in 2021, deploying that capital into studios across North America, Europe, and India. The studio network now spans PUBG Studios, Bluehole Studio, Striking Distance Studios, Unknown Worlds, Neon Giant, and more than a dozen additional teams creating games ranging from survival-horror to life-simulation.

The brand's governing philosophy is stated simply: "Pioneer the Undiscovered." This is not merely a tagline — it operationalises as five internal values: Aim for Bold Objectives, Depth Builds the Edge, Imagination + Technology, Fan-First Thinking, and Embrace Global Perspectives. Every product launch and communication is measured against whether it advances territory that has not been claimed before.

## 12. Principles

1. **Pioneer the Undiscovered** — seek problems no competitor has solved and genres no studio has fully defined. *UI implication:* Do not follow platform conventions blindly; introduce distinctive interaction patterns where the genre expects them least.

2. **Depth Builds the Edge** — deep research and meticulous groundwork underpin every creative decision. *UI implication:* Design systems must account for every state, edge case, and locale before shipping; shallow prototypes are not shippable artefacts.

3. **Imagination + Technology** — fuse creative vision with engineering capability. *UI implication:* Motion and micro-interaction must be intentional and technically precise, never decorative noise; every animated element should have a measurable purpose.

4. **Fan-First Thinking** — fans drive every decision from discovery to long-term retention. *UI implication:* Reduce friction on discovery surfaces (game listings, studio pages) so players can reach content within one or two interactions; information hierarchy privileges experience over brand-speak.

5. **Embrace Global Perspectives** — the brand operates across KR, EN, ZH, and JA locales simultaneously. *UI implication:* All typographic and layout decisions must degrade gracefully across character sets; reserve pixel-perfect vw scaling for Latin text and test all display scenarios in Korean first.

## 13. Personas

*Illustrative Competitive Gamer — "Seungjae":* A 24-year-old Korean PC-bang regular who monitors PUBG patch notes daily and filters the KRAFTON careers page for gameplay engineer roles. He reads the studio subpages to understand the technical depth behind favourite titles.

*Illustrative Global IP Fan — "Mia":* A 29-year-old based in São Paulo who discovered KRAFTON through PUBG Mobile and has since explored the Callisto Protocol and inZOI. She browses the games listing in English, using language selector prominently, and follows KRAFTON's Instagram for behind-the-scenes glimpses.

*Illustrative Investor Analyst — "David":* A 40-year-old institutional equity analyst in Hong Kong who tracks KRAFTON's IR page for quarterly earnings, share buyback announcements, and ESG disclosures. He needs dense information accessed in two clicks.

*Illustrative Indie Developer — "Yuki":* A 27-year-old Japanese developer studying the KRAFTON studios ecosystem to understand what kinds of team they might acquire. She reads the "Our Challenges" history page looking for signals about cultural fit and creative autonomy.

## 14. States

- **Empty:** Cards render as black-background placeholders with no content message; absence of game image signals "coming soon" implicitly through a darkened aspect-ratio box
- **Loading (image):** `img[data-src]` elements carry `opacity:0` until the browser resolves `src`, at which point `opacity:1` transitions via CSS
- **Error (form):** Required fields highlighted with `color:#ED2929` on label; no border-color change observed in source CSS
- **Error (link/status):** Alert-red `#E84847` / `#ED2929` applied as `.text-red` utility to error messaging in body copy contexts
- **Success:** Positive states use `color:#3D7FD9` (`.text-blue`) as affirmation colour in forms and news status labels
- **Skeleton / Appear:** `.a-Opacity` applies `opacity:0; transition:opacity 1.6s ease-out` until `.is-Opacity` is added; `.a-OpacityTop` applies `opacity:0; transform:translateY(100px); transition:transform, opacity 0.8s ease-out` with JS adding `.is-OpacityTop` to reveal on scroll
- **Disabled:** `.is-Disable` applies `opacity:0.3` with `cursor:default` on anchor children and removes TextHoverLine underline animations
- **Active Tab:** `background-color:#000000; color:#ffffff; font-weight:bold` on `.ThirdDepthTab-item.is-Current .ThirdDepthTab-link`

## 15. Motion & Easing

| Token | Value |
|---|---|
| Fade-in duration | 1.6 s |
| Slide-up duration | 0.8 s |
| Hover (button BG) | 0.1 s |
| Hover (underline / download link) | 0.2–0.3 s |
| Parallax appear | 0.4 s (delay 0.2 s) |
| Default easing | `ease-out` |
| Parallax easing | `ease` |

Rules:
- All on-scroll entrance animations use `ease-out` to communicate confident arrival
- Hover micro-interactions target 0.1–0.3 s to feel immediate without being abrupt
- No entrance animation should use `ease-in` (elements never struggle to appear)
- The progress bar in the header uses a skew transform with `transition-property:background-color; transition-duration:0.2s` — keep this as the only element using colour transition on header scroll
- Parallax video backgrounds use `animation-fill-mode:forwards` to hold the final opacity:1 state without a reversal
