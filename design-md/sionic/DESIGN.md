---
id: sionic
name: SIONIC AI
display_name_kr: 사이오닉에이아이
country: KR
category: ai
homepage: "https://www.sionic.ai/"
primary_color: "#007ff5"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=sionic.ai&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live section-eyebrow / outlined-CTA electric blue (#007ff5); hero primary CTA is a dark graphite pill (#3b4043) with a white-pill and blue-outline companion. Near-shadowless flat system; body/heading text pure black (#000000) on white (#ffffff); Pretendard throughout with a global -0.5px tracking."
  colors:
    primary: "#007ff5"
    primary-tint: "#e7f3ff"
    primary-wash: "#f5faff"
    ink: "#000000"
    canvas: "#ffffff"
    cta-dark: "#3b4043"
    dark-surface: "#282a2b"
    nav: "#334155"
    muted: "#7a8287"
    muted-alt: "#596066"
    surface: "#eceff1"
    hairline: "#e2e8f0"
    border: "#cdd1d5"
    on-dark: "#f9fafb"
  typography:
    family: { sans: "Pretendard" }
    hero:        { size: 44, weight: 700, lineHeight: 1.50, tracking: -0.5, use: "Product-page hero headline (STORM Platform)" }
    display:     { size: 36, weight: 700, lineHeight: 1.30, tracking: -0.5, use: "Closing section CTA headline (Ready to transform)" }
    section:     { size: 32, weight: 700, lineHeight: 1.50, tracking: -0.5, use: "Feature section titles (Optimized for RAG)" }
    subsection:  { size: 28, weight: 700, lineHeight: 1.50, tracking: -0.5, use: "Use-case sub-heads" }
    card-title:  { size: 24, weight: 700, lineHeight: 1.33, tracking: -0.5, use: "Feature card / news titles" }
    eyebrow:     { size: 16, weight: 700, lineHeight: 1.50, tracking: -0.5, use: "Blue section eyebrow label" }
    body:        { size: 16, weight: 400, lineHeight: 1.50, tracking: -0.5, use: "Standard reading text, Pretendard" }
    button:      { size: 16, weight: 700, lineHeight: 1.50, tracking: -0.5, use: "Pill button label" }
    footer:      { size: 14, weight: 500, lineHeight: 1.50, tracking: 0.35, use: "Footer links, small positive tracking" }
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 30, section: 48 }
  rounded: { sm: 8, md: 20, lg: 30, pill: 90, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary-dark: { type: button, bg: "#3b4043", fg: "#ffffff", radius: "90px", padding: "16px 30px", height: "56px", font: "16px / 700 Pretendard", use: "Primary dark graphite pill CTA (Learn More)" }
    button-white-pill: { type: button, bg: "#ffffff", fg: "#000000", radius: "90px", padding: "16px 30px", height: "56px", font: "16px / 700 Pretendard", use: "White pill CTA on dark hero (See STORM PARSE in Action)" }
    button-outline-blue: { type: button, bg: "#ffffff", fg: "#007ff5", border: "1px solid #007ff5", radius: "90px", padding: "16px 24px", height: "58px", font: "16px / 700 Pretendard", use: "Blue outlined product CTA (Explore STORM PLATFORM)" }
    button-contact: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #000000", radius: "8px", height: "38px", font: "15px / 700 Pretendard", use: "Nav contact button (Contact us)" }
    contact-sales-cta: { type: button, bg: "#ffffff", fg: "#000000", radius: "90px", padding: "20px 32px", height: "70px", font: "20px / 700 Pretendard", use: "Large closing Contact Sales CTA" }
    card-feature: { type: card, bg: "#ffffff", border: "1px solid #eceff1", radius: "30px", padding: "24px 28px", font: "16px / 500 Pretendard", use: "Feature / use-case card, 30px rounded, hairline border, no shadow" }
    card-blue-tint: { type: card, bg: "#e7f3ff", radius: "20px", use: "Blue-tint highlight surface panel" }
    usecase-tab: { type: tab, active: "text #ffffff on #000000 fill", fg: "#7a8287", bg: "#eceff1", use: "Use-case selector strip; active tab black fill white text, inactive grey" }
    footer-link: { type: listItem, fg: "#7a8287", font: "14px / 500 Pretendard", use: "Footer navigation link" }
  components_harvested: true
---

# Design System Inspiration of SIONIC AI

## 1. Visual Theme & Atmosphere

SIONIC AI (사이오닉에이아이) is a Korean enterprise-AI company whose homepage reads like a confident B2B infrastructure product — clean, engineered, and quietly technical rather than flashy. The canvas is pure white (`#ffffff`) alternating with dramatic near-black sections (`#282a2b`), and text sits in unapologetic pure black (`#000000`) instead of a softened navy — a high-contrast, no-nonsense posture that suits a company selling "hallucination-free" RAG infrastructure. The single saturated brand accent is an electric blue (`#007ff5`) reserved almost exclusively for section eyebrows ("STORM PLATFORM", "USE CASE", "NEWS"), key highlight words ("Optimized for RAG", "No Experts Needed"), and the blue outlined product CTA. The eye is trained to read that one blue as "this is the important part."

The typographic personality is Korean-modern and utilitarian: everything is set in **Pretendard**, the de-facto Korean product sans, with a distinctive global `-0.5px` letter-spacing that tightens every headline, label, and body line into a dense, engineered block. Headlines run heavy — weight 700 at 44px on the product hero, 32px on feature sections, 28px on use-case sub-heads — while body and UI text sit at a quiet 16px / weight 400 with a comfortable 24px line-height. There is no lightweight display treatment here; SIONIC leans on bold weight and tight tracking to project engineering authority.

What distinguishes SIONIC is its restraint with depth. The system is effectively **shadowless** — live inspection found `box-shadow: none` across the hero, nav, headings, buttons, and cards. Separation comes from flat tinted surfaces (light grey `#eceff1`, blue washes `#e7f3ff` and `#f5faff`) and thin hairlines (`#e2e8f0`, `#cdd1d5`) rather than elevation. Geometry is emphatically rounded: 90px pill CTAs, 30px rounded feature cards, and the occasional asymmetric corner (`30px 0px 0px 0px`) on the use-case tab strip. The result is a flat, high-contrast, generously-rounded aesthetic — precise where it matters, approachable where it counts.

**Key Characteristics:**
- Pretendard everywhere with a global `-0.5px` letter-spacing — tight, engineered, Korean-modern
- Bold weight 700 for all headlines; weight 400 body at 16px / 24px line-height
- Single saturated electric blue (`#007ff5`) reserved for eyebrows, highlight words, and the outlined CTA
- Pure black (`#000000`) text on white (`#ffffff`) — deliberately high-contrast, not softened navy
- Dramatic near-black sections (`#282a2b`) for hero/immersive moments
- Near-shadowless flat system — tinted surfaces (`#eceff1`, `#e7f3ff`, `#f5faff`) and hairlines do the separating
- Pill-and-rounded geometry — 90px CTA pills, 30px cards, asymmetric tab corners
- A dark graphite primary pill (`#3b4043`) as the workhorse CTA, with white-pill and blue-outline companions

## 2. Color Palette & Roles

### Primary
- **SIONIC Blue** (`#007ff5`): The single saturated brand accent. Section eyebrow labels, highlight words, active links, and the blue outlined product CTA. The system's one "look here" color.
- **Blue Tint** (`#e7f3ff`): Soft blue-50 surface for highlight panels and tinted content blocks on the product page.
- **Blue Wash** (`#f5faff`): The faintest blue background wash for full-width tinted bands.

### Ink & Canvas
- **Ink Black** (`#000000`): Primary text and heading color — deliberately pure black for maximum contrast and an engineered feel.
- **Pure White** (`#ffffff`): Page background, card surfaces, and text/pills on dark sections.
- **Graphite CTA** (`#3b4043`): The dark graphite fill of the primary "Learn More" pill button — a warm near-black distinct from the ink text.
- **Dark Surface** (`#282a2b`): The darkest near-black background for hero and immersive full-width sections.

### Text Hierarchy
- **Ink Black** (`#000000`): Primary headings and body text.
- **Nav Slate** (`#334155`): Top-nav link text — a cool slate (Tailwind slate-700) that reads calmer than pure black.
- **Muted Grey** (`#7a8287`): Inactive tab labels, footer links, tertiary metadata.
- **Muted Alt** (`#596066`): Secondary muted text such as small "Learn More" inline links.
- **On-Dark Off-White** (`#f9fafb`): Footer heading labels and text on the dark footer band.

### Surface & Borders
- **Surface Grey** (`#eceff1`): Light neutral surface for inactive use-case tabs and card fills; also the card hairline border color.
- **Hairline** (`#e2e8f0`): The default thin border (Tailwind slate-200) on nav and container edges.
- **Border Grey** (`#cdd1d5`): A slightly stronger grey border used on segmented/card outlines.

## 3. Typography Rules

### Font Family
- **Sans (all roles)**: `Pretendard` (with `Pretendard Fallback`) — the single family for headlines, UI, and body. Bold (700) for display, medium (500) for footer/labels, regular (400) for body.

### Global Tracking
- A distinctive **`-0.5px` letter-spacing** is applied globally to headings, nav, buttons, and body text — the system's signature typographic tightening. Footer links flip to a small **positive `0.35px`** tracking for a subtle small-caps-like cadence.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero | Pretendard | 44px (2.75rem) | 700 | ~1.50 | -0.5px | Product-page hero headline (STORM Platform) |
| Display CTA | Pretendard | 36px (2.25rem) | 700 | 1.30 | -0.5px | Closing section CTA (Ready to transform) |
| Section Heading | Pretendard | 32px (2.00rem) | 700 | 1.50 (48px) | -0.5px | Feature section titles (Optimized for RAG) |
| Sub-section | Pretendard | 28px (1.75rem) | 700 | 1.50 (42px) | -0.5px | Use-case sub-heads |
| Card / News Title | Pretendard | 24px (1.50rem) | 700 | 1.33 (32px) | -0.5px | Feature card and news titles |
| Eyebrow | Pretendard | 16px (1.00rem) | 700 | 1.50 (24px) | -0.5px | Blue section eyebrow labels |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 (24px) | -0.5px | Standard reading text |
| Button | Pretendard | 16px (1.00rem) | 700 | 1.50 | -0.5px | Pill button labels |
| Footer Link | Pretendard | 14px (0.88rem) | 500 | 1.50 | 0.35px | Footer navigation, positive tracking |

### Principles
- **One family, weight-driven hierarchy**: Pretendard does every job; the jump from 700 headlines to 400 body carries the hierarchy, not a font switch.
- **Signature tight tracking**: the global `-0.5px` letter-spacing is the typographic DNA — every headline and body line is subtly compressed.
- **Bold display, quiet body**: display is always heavy (700); body stays at a calm 16px / 24px for dense, readable enterprise copy.
- **Blue is a typographic tool**: `#007ff5` is applied to eyebrows and highlight words as a color accent within otherwise-black headlines.

## 4. Component Stylings

### Buttons

**Primary Dark Pill (Learn More)**
- Background: `#3b4043`
- Text: `#ffffff`
- Radius: 90px
- Padding: 16px 30px
- Height: 56px
- Font: 16px Pretendard weight 700
- Use: Primary workhorse CTA — dark graphite pill ("Learn More")

**White Pill**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 90px
- Padding: 16px 30px
- Height: 56px
- Font: 16px Pretendard weight 700
- Use: Primary CTA on dark hero ("See STORM PARSE in Action")

**Blue Outline**
- Background: `#ffffff`
- Text: `#007ff5`
- Border: 1px solid `#007ff5`
- Radius: 90px
- Padding: 16px 24px
- Height: 58px
- Font: 16px Pretendard weight 700
- Use: Product-page CTA ("Explore STORM PLATFORM")

**Contact (Nav)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 8px
- Height: 38px
- Font: 15px Pretendard weight 700
- Use: Nav contact button ("Contact us")

**Contact Sales (Large)**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 90px
- Padding: 20px 32px
- Height: 70px
- Font: 20px Pretendard weight 700
- Use: Large closing-section CTA ("Contact Sales")

### Cards & Containers

**Feature Card**
- Background: `#ffffff`
- Border: 1px solid `#eceff1`
- Radius: 30px
- Padding: 24px 28px
- Font: 16px Pretendard weight 500
- Use: Feature / use-case card — rounded 30px, hairline border, no shadow

**Blue-Tint Panel**
- Background: `#e7f3ff`
- Radius: 20px
- Use: Blue-tint highlight surface panel on the product page

### Tabs

**Use-Case Selector**
- Active: text `#ffffff` on `#000000` fill
- Text (inactive): `#7a8287`
- Background (inactive): `#eceff1`
- Padding: 24px 8px
- Use: Use-case selector strip; active tab is a black fill with white text, inactive tabs sit on grey (first/last tabs carry asymmetric `30px 0px 0px 0px` corners)

### Badges / Eyebrows

**Section Eyebrow**
- Text: `#007ff5`
- Font: 16px Pretendard weight 700
- Use: Blue section label above each block ("STORM PLATFORM", "USE CASE", "NEWS")

### Footer

**Footer Link**
- Text: `#7a8287`
- Font: 14px Pretendard weight 500
- Use: Footer navigation links ("STORM Parse", "STORM Retrieval", "Company", "News")

**Footer Heading**
- Text: `#f9fafb`
- Font: 14px Pretendard weight 700
- Use: Footer column headings ("Address", "E-mail") on the dark band

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 SIONIC-designed surfaces)
**Tier 1 sources:** https://www.sionic.ai/, https://www.sionic.ai/en/platform, https://blog.sionic.ai/, https://github.com/sionic-ai
**Tier 2 sources:** getdesign.md/sionic (HTTP 200, 0 DESIGN.md files — not listed); styles.refero.design/?q=sionic (no SIONIC match — default gallery only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 16px, 24px, 30px, 48px
- Notable: button padding lands at 16px 30px (pill CTAs), cards at 24px 28px, and the large closing CTA at 20px 32px — generous, tappable hit areas

### Grid & Container
- Centered single-column hero with a heavy 44px Pretendard headline as the anchor
- Full-width dramatic dark sections (`#282a2b`) for the hero and feature reveals, alternating with white bands
- Use-case selector as a horizontal tab strip with asymmetric rounded end-corners
- Feature and news content in 30px-rounded cards with `#eceff1` hairline borders, grid-arranged

### Whitespace Philosophy
- **Breathing, high-contrast bands**: white sections alternate with near-black (`#282a2b`) bands, creating a dramatic light/dark cadence without introducing new colors.
- **Flat segmentation**: sections separate by background tint (`#eceff1`, `#e7f3ff`, `#f5faff`) and hairlines (`#e2e8f0`, `#cdd1d5`), not by shadow.
- **Rounded rhythm**: the repeated 30px card radius and 90px pill CTA create a consistent soft-cornered cadence across the page.

### Border Radius Scale
- Small (8px): the nav "Contact us" button, small containers
- Medium (20px): blue-tint highlight panels
- Large (30px): feature / use-case cards — the workhorse card radius
- Pill (90px): primary CTAs
- Full (9999px): carousel arrow buttons, round controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#eceff1` / `#e7f3ff` / `#f5faff` background shift | Card, tab, and section separation without elevation |
| Hairline (Level 2) | `1px solid #e2e8f0` or `#cdd1d5` border | Card outlines, nav edge, dividers |
| Contrast (Level 3) | Near-black `#282a2b` section against white | Hero / immersive band separation |

**Shadow Philosophy**: SIONIC is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, buttons, and cards (the single `.CtaButton` shadow declaration resolved to a fully transparent value). Depth and grouping are communicated entirely through flat tinted surfaces (`#eceff1`, `#e7f3ff`, `#f5faff`), thin hairlines (`#e2e8f0`, `#cdd1d5`), and dramatic light/dark band contrast (`#ffffff` vs `#282a2b`). This is a deliberate modern-flat, engineering-forward choice — it keeps the enterprise-AI UI feeling clean, fast, and precise. When emphasis is needed, the system reaches for the electric blue (`#007ff5`) or a dark fill, never elevation.

## 7. Do's and Don'ts

### Do
- Set everything in Pretendard with a global `-0.5px` letter-spacing — it's the typographic DNA
- Use weight 700 for all headlines; weight 400 at 16px / 24px for body
- Reserve electric blue (`#007ff5`) for eyebrows, highlight words, and the outlined CTA — keep it the single accent
- Use pure black (`#000000`) text on white (`#ffffff`) for high-contrast, engineered legibility
- Separate content with flat tints (`#eceff1`, `#e7f3ff`, `#f5faff`) and hairlines (`#e2e8f0`, `#cdd1d5`), not shadows
- Use pill (90px) CTAs and 30px rounded cards for the signature soft-cornered geometry
- Alternate white bands with dramatic near-black (`#282a2b`) sections for rhythm
- Use the dark graphite pill (`#3b4043`) as the primary workhorse CTA

### Don't
- Use drop shadows for elevation — SIONIC is a flat, near-shadowless system
- Spread the blue (`#007ff5`) across many elements — it dilutes the single-accent signal
- Soften body text to navy or grey — headings and body are deliberately pure black
- Use sharp/square corners on CTAs — primary actions are 90px pills
- Introduce a second saturated accent color — electric blue is the only brand hue
- Set headlines in a light weight — display is always bold (700)
- Add positive letter-spacing to headlines — the global tracking is a tight `-0.5px` (only footer links go positive)

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, cards stack, tab strip scrolls |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature and news grids |

### Touch Targets
- Pill CTAs at 56-58px height with 16px 30px padding — comfortably tappable
- Large closing CTA at 70px height for an unmistakable target
- Use-case tabs at 108px height give a generous hit area
- Nav "Contact us" button at 38px with an 8px radius

### Collapsing Strategy
- Hero: 44px Pretendard headline scales down on mobile, weight 700 maintained
- Use-case tab strip: horizontal scroll on narrow viewports
- Feature / news cards: multi-column grid → stacked single column
- Dark (`#282a2b`) and white alternating bands maintain full-width treatment

### Image Behavior
- Product screenshots and diagrams carry no shadow at any size, consistent with the flat system
- Cards maintain the 30px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary accent / eyebrow / outline CTA: SIONIC Blue (`#007ff5`)
- Blue tint surface: Blue Tint (`#e7f3ff`), Blue Wash (`#f5faff`)
- Primary dark pill CTA: Graphite (`#3b4043`)
- Dark section background: Dark Surface (`#282a2b`)
- Heading / body text: Ink Black (`#000000`)
- Background: Pure White (`#ffffff`)
- Nav text: Nav Slate (`#334155`)
- Muted text / footer links: Muted Grey (`#7a8287`), Muted Alt (`#596066`)
- Surface / inactive tab: Surface Grey (`#eceff1`)
- Hairlines: `#e2e8f0`, `#cdd1d5`
- Footer text on dark: Off-White (`#f9fafb`)

### Example Component Prompts
- "Create a hero on a near-black `#282a2b` section. Headline 44px Pretendard weight 700, letter-spacing -0.5px, color #ffffff. A blue eyebrow label above it: 16px weight 700, #007ff5. Two CTAs: a dark graphite pill (#3b4043 bg, white text, 90px radius, 16px 30px padding) and a white pill (#ffffff bg, #000000 text, 90px radius)."
- "Design a feature card: white #ffffff background, 1px solid #eceff1 border, 30px radius, no shadow. Title 32px Pretendard weight 700, letter-spacing -0.5px, #000000, with the key phrase in #007ff5. Body 16px weight 400, #000000."
- "Build a use-case tab strip: inactive tabs on #eceff1 with #7a8287 text, the active tab a black #000000 fill with white text; first/last tabs get an asymmetric 30px top corner. 24px 8px padding."
- "Create a blue outlined CTA: white #ffffff background, #007ff5 text, 1px solid #007ff5 border, 90px radius, 16px 24px padding, 16px Pretendard weight 700 — 'Explore STORM PLATFORM'."
- "Design a footer on the dark band: column headings 14px Pretendard weight 700 in #f9fafb with 0.35px tracking; links 14px weight 500 in #7a8287."

### Iteration Guide
1. Pretendard for everything, with a global -0.5px letter-spacing
2. Blue (`#007ff5`) is the single accent — eyebrows, highlight words, outlined CTA only
3. No shadows — separate with tints (`#eceff1`, `#e7f3ff`, `#f5faff`) and hairlines (`#e2e8f0`, `#cdd1d5`)
4. Pill geometry — 90px CTAs, 30px cards, 8px nav button
5. Text is pure black (`#000000`) on white (`#ffffff`); dark bands are `#282a2b`
6. Bold 700 headlines, 400 body at 16px / 24px
7. Primary workhorse CTA is the graphite pill (`#3b4043`)

---

## 10. Voice & Tone

SIONIC AI's voice is **plain, confident, and enterprise-practical** — it sells generative-AI infrastructure to businesses by promising concrete outcomes ("real-world results", "hallucination-free answers") rather than hype. The hero line "The Power of AI for Every Business" sets the register: inclusive, benefit-first, and declarative. Copy repeatedly frames AI as something *every* company and *non-technical* teams can operate, decoding an intimidating domain into approachable, no-code capability.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, benefit-first. "The Power of AI for Every Business." Confident, not hype. |
| Feature titles | Outcome-named. "Reliable, Hallucination-Free Answers", "A Data Engine for High-Accuracy AI". |
| Product / capability copy | Plain-English, empowerment-framed. "anyone can design and deploy powerful AI agents." |
| CTAs | Direct, low-friction. "Explore STORM PLATFORM", "See STORM PARSE in Action", "Contact Sales". |
| Company / vision | Mission-framed, inclusive. "AI for All Companies", "Enabling all companies to prepare for the AI era". |

**Voice samples (verbatim from live surfaces):**
- "The Power of AI for Every Business" — homepage hero headline. *(verified live 2026-07-02)*
- "We turn AI-native potential into real-world results." — homepage hero subhead. *(verified live 2026-07-02)*
- "Reliable, Hallucination-Free Answers" — feature card title (grounded-RAG promise). *(verified live 2026-07-02)*
- "AI for All Companies" — company vision statement. *(verified live 2026-07-02)*

**Forbidden register**: undefined AI jargon left unexplained, fear-based or breathless hype, exclamation-heavy marketing, and anything that implies AI is only for specialists — the brand's whole framing is accessibility for non-experts.

## 11. Brand Narrative

SIONIC AI (사이오닉에이아이) is a Korean enterprise-AI company building **STORM**, a hands-on generative-AI platform that lets a company's own business experts design and deploy AI agents with no coding required. Its stated vision, printed on the company page, is **"AI for All Companies"**: SIONIC "aims not only to advance artificial intelligence technology but also to increase accessibility and usability so that all companies can freely utilize AI." The positioning is explicitly *AI-Native* — building "a link that can easily and cost-effectively connect AI to users' daily lives and work areas" to lead the era "where AI technology naturally integrates into work" ([company/vision, www.sionic.ai/en/company](https://www.sionic.ai/en/company)).

The strategy the company states is **Enterprise Specialization**: "solutions that allow users to design AI in various corporate environments without restrictions, enabling even non-experts to easily and quickly operate, manage, and control it." That belief — that the domain experts inside a company, not just ML specialists, should be the ones building the agents — shapes the whole product surface: a no-code interface, pre-built templates, flexible deployment (on-premise, private cloud, or SaaS), and a data engine that turns "messy, unstructured data into clean, meaningful information." The RAG system is pitched as grounding "every answer in your own company data, eliminating hallucinations." SIONIC's leadership is listed publicly: **Sukhyun Ko (CEO)**, **Woomyoung Park (CDO)**, **Sihyeung Han (CSO)**, and **Dukhyun Kim (HOD)**, and the company describes a track record across finance, media, manufacturing, and the public sector.

What SIONIC refuses, visible in its design: the intimidating, specialist-gated framing of much enterprise AI, and decorative flash. What it embraces: high-contrast black-on-white clarity, a single trustworthy electric blue, bold Pretendard headlines that speak plainly, and a flat, engineered, near-shadowless surface — the visual equivalent of "reliable, hallucination-free" infrastructure you can count on.

## 12. Principles

1. **AI for everyone in the company.** SIONIC's stated vision is accessibility — non-experts, not just ML engineers, should build agents. *UI implication:* no-code, template-first flows; plain-language labels; never gate capability behind specialist jargon.
2. **Grounded, not hallucinated.** The product promise is answers grounded in the customer's own data. *UI implication:* surface sources and grounding; design states that make provenance and trust visible.
3. **One accent, one signal.** Electric blue (`#007ff5`) means "this matters." *UI implication:* reserve the saturated blue for eyebrows, highlight words, and the primary outlined action so attention is never ambiguous.
4. **Flat and engineered.** High-contrast, near-shadowless clarity signals reliable infrastructure. *UI implication:* separate with tint and hairlines, not elevation; keep surfaces clean and fast.
5. **Bold where it states, calm where it explains.** *UI implication:* weight-700 Pretendard headlines that assert outcomes; weight-400 body that explains capability without hype.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable SIONIC AI user segments (enterprise buyers adopting generative AI, non-technical domain experts, ML platform engineers), not individual people.*

**김도현, 41, 서울.** A digital-transformation lead at a mid-size manufacturer evaluating on-premise generative AI. Cares about deployment flexibility and data security; chose to trial STORM because it offered on-premise and private-cloud options, not SaaS-only. Trusts the "hallucination-free, grounded in your own data" framing.

**이하늘, 33, 판교.** A non-technical operations manager tasked with building an internal support chatbot. Has never written code; values the no-code template interface that lets her design and deploy an agent herself without waiting on the ML team.

**Park Woojin, 29, Seoul.** A platform engineer integrating STORM APIs (Parse, Retrieval) into an existing product. Reads the docs and the tech blog for reference implementations; cares that the parsing engine reliably turns messy documents into RAG-ready data.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no agents yet)** | White canvas. Single Ink Black (`#000000`) line explaining nothing is built yet, with one blue outlined CTA (`#007ff5`) to create the first agent from a template. No illustration clutter. |
| **Empty (no results)** | Muted Grey (`#7a8287`) single line stating no matching results, with a path back to adjust the query. Calm and plain. |
| **Loading (agent build / data parse)** | Skeleton blocks on `#eceff1` tinted surface at final card dimensions, 30px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle blue (`#007ff5`) progress indicator; previous content stays visible with previous values. |
| **Error (parse / retrieval failed)** | Inline message in Ink Black with a plain-language explanation of what failed and the next step. No bare "오류가 발생했습니다" — state what to do. |
| **Error (form validation)** | Field-level message below the input; describes what is valid, not just "required". |
| **Success (agent deployed)** | Brief inline confirmation in a calm tone; next-step detail (endpoint, test link) linked immediately below. No celebratory emoji. |
| **Skeleton** | `#eceff1` blocks at final dimensions, 30px radius, flat pulse. |
| **Disabled** | Muted Grey (`#7a8287`) text on a reduced-opacity surface; blue actions fade rather than turn a different color to preserve the single-accent read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, tab select, focus |
| `motion-standard` | 200ms | Card / section reveal, tab-panel switch, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero / dark-band reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, panels, tab content |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, engineered aesthetic. Pill CTAs respond to press with a subtle scale/opacity shift; use-case tab panels and feature cards fade-in from below at `motion-standard / ease-enter`. No bounce or spring — an enterprise-AI infrastructure product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on
https://www.sionic.ai/ and https://www.sionic.ai/en/platform — all token-level
claims (§1-9) are sourced from this live inspection (see web/references/sionic/.verification.md
"## Proof — Tier 1 live inspect" for the raw computed-style samples).

Voice samples (§10) are verbatim from the live homepage (hero headline + subhead,
feature card titles) and the company/vision page (/en/company).

Brand narrative (§11) quotes the live company/vision page (www.sionic.ai/en/company):
"AI for All Companies", the accessibility/usability vision, the "Enterprise
Specialization" strategy, and the publicly listed leadership (Sukhyun Ko CEO,
Woomyoung Park CDO, Sihyeung Han CSO, Dukhyun Kim HOD). These are direct reads of
the company's own stated positioning as displayed on that page in this turn.

Personas (§13) are fictional archetypes informed by publicly observable SIONIC AI
user segments (enterprise AI buyers, non-technical domain experts, platform
engineers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "flat and engineered as the visual equivalent of reliable
infrastructure", "one accent, one signal") are editorial readings connecting SIONIC's
observed design to its stated positioning, not directly sourced SIONIC statements.
-->
