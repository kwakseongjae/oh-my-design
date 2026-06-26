---
id: vuno
name: VUNO
display_name_kr: 뷰노
country: KR
category: healthcare
homepage: "https://www.vuno.co"
primary_color: "#40e2de"
logo:
  type: github
  slug: vuno
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = signature teal accent (#40e2de) used for active nav / CTA links / featured-card border; dominant brand surface is deep navy (#102135) with a navy ladder (#0c1a29 / #12273d / #244161). Light blue-grey text ladder on dark (#d7dfe6 → #9bacbb). White content cards on a near-shadowless, sharp-cornered system."
  colors:
    primary: "#40e2de"
    ink: "#102135"
    navy-deep: "#0c1a29"
    navy-mid: "#12273d"
    navy-steel: "#244161"
    canvas: "#ffffff"
    surface: "#f8f8f8"
    on-dark: "#d7dfe6"
    muted: "#9bacbb"
    body: "#000000"
    secondary: "#555555"
    caption: "#707070"
    hairline: "#dddddd"
  typography:
    family: { display: "Poppins", korean: "NANUMSQUARE", fallback: "Roboto" }
    hero-section: { size: 50, weight: 600, lineHeight: 1.36, use: "Section / hero headlines, NANUMSQUARE-700" }
    mega-nav:     { size: 45, weight: 500, lineHeight: 1.04, use: "Full-screen overlay nav items" }
    eyebrow:      { size: 40, weight: 500, lineHeight: 1.15, use: "Section eyebrow label (often teal)" }
    card-title:   { size: 20, weight: 600, lineHeight: 1.50, use: "News / feature card titles, NANUMSQUARE-700" }
    nav:          { size: 18, weight: 400, lineHeight: 1.15, use: "Top navigation links" }
    body:         { size: 16, weight: 400, lineHeight: 1.15, use: "Body copy and CTA links, Poppins + NANUMSQUARE-400" }
    caption:      { size: 15, weight: 300, lineHeight: 1.50, use: "Trademark / legal fine print" }
    legal:        { size: 14, weight: 400, lineHeight: 1.50, use: "Cookie / policy small text" }
  spacing: { xs: 5, sm: 8, base: 16, md: 22, lg: 40, xl: 68, section: 150 }
  rounded: { sharp: 0, pill: 30, circle: 9999 }
  shadow:
    soft: "rgba(0,0,0,0.2) 0px 0px 10px 0px"
    card: "rgba(35,48,59,0.25) 0px 0px 12px 0px"
    deep: "rgba(0,0,0,0.2) 0px 0px 30px 0px"
  components:
    cta-contact: { type: button, fg: "#40e2de", font: "16px / 600", height: "60px", use: "Teal text CTA on the navy contact band — 문의사항 남기기" }
    cta-inline: { type: button, fg: "#102135", font: "16px / 600", padding: "0 8px", height: "60px", use: "Inline more-link on white — 더 알아보기" }
    nav-link: { type: tab, fg: "#ffffff", font: "18px / 400", active: "text #40e2de", use: "Top nav item on dark chrome; active turns teal" }
    lang-toggle: { type: tab, fg: "#9bacbb", font: "16px / 500", active: "text #ffffff", use: "KR/EN language switch — active white, inactive muted blue-grey" }
    news-card-featured: { type: card, bg: "#ffffff", border: "2px solid #40e2de", radius: "0px", use: "Featured press-release card — sharp corners, teal accent border" }
    news-card: { type: card, bg: "#ffffff", radius: "0px", use: "Standard press-release card on white" }
    icon-circle: { type: avatar, border: "1px solid #ffffff", radius: "50%", use: "Round arrow / scroll indicator on the dark hero" }
  components_harvested: true
---

# Design System Inspiration of VUNO

## 1. Visual Theme & Atmosphere

VUNO (뷰노) is Korea's pioneer medical-AI company, and its site carries the calm, clinical authority of a firm that sells diagnostic confidence to hospitals. The chrome is a deep navy (`#102135`) — closer to the color of a darkened reading room than to corporate blue — layered over a navy ladder (`#0c1a29`, `#12273d`, `#244161`) that gives the dark sections quiet depth without ever turning to pure black for structure. Against that navy, a single saturated teal (`#40e2de`) does all the pointing: it is the active navigation item, the contact CTA, and the 2px border that frames the featured press card. The effect is restraint with one bright signal — the eye is trained to read teal as "look here."

The typographic personality is bilingual and editorial: **Poppins** for Latin display and UI, **NANUMSQUARE** for Korean, with NANUMSQUARE-700 carrying the bold 50px section headlines ("주요 소식", "의료인공지능의 미래, 뷰노가 이끌어갑니다") and NANUMSQUARE-400 carrying the quiet 16px body. Headlines are weighty (weight 600) and confident; body copy stays small and matter-of-fact, the register of a company that lets clinical evidence do the talking. Content lives on a white (`#ffffff`) canvas with a faint grey surface (`#f8f8f8`) for alternating bands, while text on the dark sections steps down a cool blue-grey ladder — light `#d7dfe6` for primary, muted `#9bacbb` for secondary, with a near-black `#000000` body and grey `#555555` / `#707070` for supporting copy on white.

What distinguishes VUNO from consumer fintech or SaaS peers is its geometry and its near-absence of decoration. Corners are sharp — radius 0 is the default across cards, sections, and links — and the only curves are perfect circles (50%) for icon and scroll indicators, plus an occasional 30px pill. Elevation is whispered: a subtle `rgba(35,48,59,0.25) 0px 0px 12px` card glow and soft `rgba(0,0,0,0.2)` ambient shadows, never a heavy card stack. Separation comes from the navy/white contrast and thin `#dddddd` hairlines. The result reads as precise, evidence-led, and quietly premium — a medical instrument's UI, not a marketing brochure.

**Key Characteristics:**
- Deep navy chrome (`#102135`) over a navy ladder (`#0c1a29`, `#12273d`, `#244161`) — clinical, not corporate-blue
- A single saturated teal (`#40e2de`) reserved for active nav, CTA links, and the featured-card accent border
- Poppins (Latin) + NANUMSQUARE (Korean) — NANUMSQUARE-700 for bold 50px headlines, NANUMSQUARE-400 for quiet body
- Sharp-cornered geometry (radius 0) with circles (50%) only for icons / indicators
- Near-shadowless depth — faint `rgba(35,48,59,0.25)` card glow, `#dddddd` hairlines do the separating
- Cool blue-grey text ladder on dark (`#d7dfe6` → `#9bacbb`); near-black `#000000` body on white
- White (`#ffffff`) content cards on a faint grey surface (`#f8f8f8`)
- Restrained, evidence-first tone — small body copy, weighty headlines

## 2. Color Palette & Roles

### Primary
- **VUNO Teal** (`#40e2de`): The signature accent and single "action" color. Used for the active navigation item, the contact CTA text ("문의사항 남기기"), section eyebrow labels, and the 2px accent border on the featured press card. The one saturated hue in the system.

### Navy Surface Ladder
- **Ink Navy** (`#102135`): The dominant brand surface and a primary text color on white. The dark reading-room navy that defines the chrome, hero, and contact band.
- **Navy Deep** (`#0c1a29`): The darkest navy, for the deepest sections and overlay backdrops.
- **Navy Mid** (`#12273d`): A mid step in the dark ladder, for layered dark blocks.
- **Navy Steel** (`#244161`): The lightest navy step, used for raised dark surfaces and decorative panels.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, content cards, and text on the dark chrome.
- **Surface Grey** (`#f8f8f8`): Faint grey for alternating content bands and panels.
- **Hairline** (`#dddddd`): Thin borders and dividers — the main separation device in this near-shadowless system.

### Text Hierarchy
- **Near-Black** (`#000000`): Primary body and card-title text on white.
- **On-Dark Light** (`#d7dfe6`): Primary text and links on the navy sections.
- **Muted Blue-Grey** (`#9bacbb`): Secondary / inactive text on dark (e.g. the inactive language toggle), also used at reduced alpha for trademark fine print.
- **Secondary Grey** (`#555555`): Secondary copy on white.
- **Caption Grey** (`#707070`): Cookie / policy fine print on white.

## 3. Typography Rules

### Font Family
- **Display / Latin**: `Poppins` — the Latin and UI face across nav, labels, and body.
- **Korean**: `NANUMSQUARE` — `NANUMSQUARE-700` (bold) for headlines, `NANUMSQUARE-400` for body, `NANUMSQUARE-300` for fine print.
- **Fallback**: `Roboto`, then `sans-serif`.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Section / Hero | NANUMSQUARE-700 / Poppins | 50px | 600 | 68–80px | Bold section headlines ("주요 소식") |
| Mega Nav | Poppins / NANUMSQUARE | 45px | 500 | ~47px | Full-screen overlay navigation items |
| Eyebrow Label | Poppins / NANUMSQUARE | 40px | 500 | 46px | Section eyebrow (often teal `#40e2de`) |
| Card Title | NANUMSQUARE-700 | 20px | 600 | 30px | News / feature card titles |
| Nav Link | Poppins / NANUMSQUARE | 18px | 400 | ~21px | Top navigation links |
| Body / CTA | Poppins / NANUMSQUARE-400 | 16px | 400–600 | ~18px | Body copy; CTA links at weight 600 |
| Caption | NANUMSQUARE-300 | 15px | 300 | 22px | Trademark fine print |
| Legal | Poppins | 14px | 400 | 21px | Cookie / policy small text |

### Principles
- **Bold headline, quiet body**: Weighty 50px / weight 600 headlines over small 16px / weight 400 body. The contrast carries the hierarchy.
- **Two scripts, two faces**: Poppins owns Latin, NANUMSQUARE owns Korean — they share the same sizes and never trade roles.
- **Weight as emphasis**: NANUMSQUARE-700 marks every headline and card title; NANUMSQUARE-300/400 keeps supporting text recessive.
- **Teal eyebrows**: Section labels render in teal (`#40e2de`) to signal navigation context above the bold headline.

## 4. Component Stylings

### Buttons

**Contact CTA (Teal Link)**
- Text: `#40e2de`
- Font: 16px / 600 Poppins
- Height: 60px
- Padding: 0px 8px
- Radius: 0px
- Use: Primary contact call-to-action on the navy band — "문의사항 남기기"

**Inline More-Link**
- Text: `#102135`
- Font: 16px / 600 Poppins
- Height: 60px
- Padding: 0px 8px
- Radius: 0px
- Use: Inline "더 알아보기" more-link on white sections

**On-Dark More-Link**
- Text: `#d7dfe6`
- Font: 15px / 500 Poppins
- Padding: 6px 40px 5px 0px
- Radius: 0px
- Use: "모든 소식 보기" view-all link on the dark news section

### Cards & Containers

**Featured Press Card**
- Background: `#ffffff`
- Border: 2px solid `#40e2de`
- Radius: 0px
- Use: Highlighted / active press-release card — sharp corners with the teal accent border

**Standard Press Card**
- Background: `#ffffff`
- Radius: 0px
- Use: Default press-release card on white; title 20px / 600 NANUMSQUARE-700, `#000000` text

### Navigation

**Top Nav**
- Text: `#ffffff`
- Font: 18px / 400 Poppins
- Active: teal `#40e2de` text on the active item
- Radius: 0px
- Use: Top navigation on the dark chrome ("About VUNO", "Products", "News", "IR", "Publications", "Career")

**Language Toggle**
- Text: `#9bacbb`
- Font: 16px / 500 Poppins
- Padding: 0px 8px
- Active: `#ffffff` text for the selected language (KR), muted `#9bacbb` for the other (EN)
- Use: KR/EN language switcher in the header

### Indicators

**Icon Circle**
- Border: 1px solid `#ffffff`
- Radius: 50%
- Height: 40px
- Use: Round arrow / scroll-down indicator on the dark hero

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.vuno.co, https://www.vuno.co/about, https://github.com/vuno
**Tier 2 sources:** getdesign.md/vuno — not listed ("No designs found for vuno"); styles.refero.design/?q=vuno — not listed (no VUNO match)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px, with a wide vertical scale for editorial breathing room
- Scale: 5px, 8px, 16px, 22px, 40px, 68px, 150px (section padding)
- Notable: Dark content bands use very large 150px vertical padding, giving the corporate narrative a spacious, unhurried rhythm

### Grid & Container
- Centered max-width content (~1440px full-bleed dark bands, contained inner columns)
- Full-screen dark hero with a bold 50px headline anchored over a muted background
- News presented as a horizontal row of white press cards, one featured with a teal border
- Alternating navy (`#102135`) and white (`#ffffff`) full-width bands structure the page

### Whitespace Philosophy
- **Editorial spaciousness**: large vertical padding (up to 150px) between major bands; the page reads slowly and deliberately
- **Contrast over chrome**: sections separate by navy/white background shifts and `#dddddd` hairlines, not by heavy borders or shadows
- **One accent, sparingly**: teal appears only at decision points, keeping the dark canvas calm

### Border Radius Scale
- Sharp (0px): default for cards, sections, links, nav — the system's geometry
- Pill (30px): occasional rounded chip / control
- Circle (50% / 9999px): icon and scroll indicators only

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, navy bands, most surfaces |
| Hairline (Level 1) | `1px solid #dddddd` | Card outlines, dividers |
| Soft (Level 2) | `rgba(0,0,0,0.2) 0px 0px 10px 0px` | Subtle lift on floating elements |
| Card (Level 3) | `rgba(35,48,59,0.25) 0px 0px 12px 0px` | Press cards, raised panels — a navy-tinted glow |
| Deep (Level 4) | `rgba(0,0,0,0.2) 0px 0px 30px 0px` | Overlays, prominent floating chrome |

**Shadow Philosophy**: VUNO is a near-shadowless system. Where elevation is needed, the card shadow is a soft, symmetric `rgba(35,48,59,0.25)` glow — note the navy-grey tint (`#23303b` family) that echoes the brand's dark palette rather than a neutral black. Most separation is done by the navy/white contrast and thin `#dddddd` hairlines. The restraint keeps the clinical surfaces feeling clean and instrument-like, never decorative.

## 7. Do's and Don'ts

### Do
- Use deep navy (`#102135`) as the dominant dark surface for chrome, hero, and contact bands
- Reserve teal (`#40e2de`) for active nav, CTA links, and the featured-card accent — keep it the single signal color
- Set headlines in NANUMSQUARE-700 (weight 600) at large sizes; keep body in NANUMSQUARE-400 at 16px
- Use Poppins for Latin and NANUMSQUARE for Korean at matching sizes
- Keep corners sharp (radius 0); reserve circles (50%) for icons and indicators
- Separate sections with navy/white contrast and `#dddddd` hairlines, not heavy shadows
- Step text on dark down the blue-grey ladder (`#d7dfe6` → `#9bacbb`)
- Give dark bands generous vertical padding for an editorial, unhurried rhythm

### Don't
- Spread teal across many elements — it dilutes the single-signal accent
- Use pure black sections for structure — reach for the navy ladder (`#0c1a29`, `#12273d`, `#244161`)
- Apply large rounded rectangles or pill cards — VUNO's geometry is sharp
- Lean on heavy drop shadows or card stacks — depth is a faint navy-tinted glow at most
- Set headlines in a light weight — display is weighty NANUMSQUARE-700
- Swap Poppins and NANUMSQUARE roles between scripts
- Use warm accent colors — the only saturated hue is teal
- Crowd the dark bands — spaciousness is part of the clinical authority

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, news cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up press cards |
| Desktop | 1024-1440px | Full layout, full-bleed navy bands, horizontal card row |

### Touch Targets
- Nav and CTA links sit at ~60px height for comfortable tapping
- Language toggle items carry 8px horizontal padding
- Circle indicators at 40px for clear targets on the dark hero

### Collapsing Strategy
- Hero: 50px headline scales down on mobile, weight 600 maintained
- News row: horizontal press cards wrap / stack into a single column
- Navy/white alternating bands keep full-width treatment, padding reduces from 150px
- Full-screen overlay nav replaces the inline header on smaller viewports

### Image Behavior
- Product and press imagery carries the same faint card glow at all sizes
- Sharp-cornered media (radius 0) is preserved across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Accent / CTA: VUNO Teal (`#40e2de`)
- Dominant dark surface: Ink Navy (`#102135`)
- Dark ladder: `#0c1a29`, `#12273d`, `#244161`
- Background: Pure White (`#ffffff`)
- Surface band: Surface Grey (`#f8f8f8`)
- Body on white: Near-Black (`#000000`); secondary `#555555`; caption `#707070`
- Text on dark: `#d7dfe6` primary, `#9bacbb` muted
- Hairline: `#dddddd`

### Example Component Prompts
- "Create a dark hero: `#102135` background, full-bleed, 150px vertical padding. Headline 50px NANUMSQUARE-700 weight 600, color `#ffffff`. A teal eyebrow label 40px in `#40e2de` above it. Body 16px NANUMSQUARE-400 in `#d7dfe6`. A teal text CTA 'Contact us' in `#40e2de`, 16px / 600, sharp corners."
- "Design a press card: white `#ffffff` background, sharp corners (radius 0). Title 20px NANUMSQUARE-700 weight 600 in `#000000`. The featured card adds a 2px solid `#40e2de` border. Faint glow shadow `rgba(35,48,59,0.25) 0px 0px 12px`."
- "Build a dark nav: `#102135` chrome, Poppins 18px links in `#ffffff`, active item in teal `#40e2de`. Right-aligned KR/EN toggle — active `#ffffff`, inactive `#9bacbb`."
- "Create a white content band: `#ffffff` (or `#f8f8f8`) background, `#dddddd` hairline dividers, no heavy shadow. Inline 'Learn more' link in `#102135`, 16px / 600."

### Iteration Guide
1. Navy (`#102135`) chrome + white content; teal (`#40e2de`) is the single accent
2. NANUMSQUARE-700 headlines, NANUMSQUARE-400 body; Poppins for Latin
3. Sharp corners (radius 0); circles only for icons / indicators
4. Depth is a faint navy-tinted glow at most; separate with `#dddddd` hairlines
5. Text on dark steps `#d7dfe6` → `#9bacbb`; body on white is `#000000`
6. Generous 150px band padding for an editorial, clinical pace
7. Don't spread teal — it marks decisions, not decoration

---

## 10. Voice & Tone

VUNO's voice is **clinical, evidence-led, and quietly confident** — the register of a research-grade company that earns trust through approvals, papers, and clinical outcomes rather than hype. The English slogan "View the Invisible, Know the Unknown" frames the mission as making the imperceptible legible; the Korean hero "의료인공지능의 미래, 뷰노가 이끌어갑니다" ("VUNO leads the future of medical AI") states leadership plainly, without exclamation. Product copy is precise and capability-first, naming exactly what each solution detects.

| Context | Tone |
|---|---|
| Slogan / mission | Aspirational but measured. "View the Invisible, Know the Unknown." No hype words. |
| Product descriptions | Clinical and specific. States the modality and what the AI detects (e.g. chest X-ray abnormality localization). |
| Press / IR | Factual, outcome-led. Quantified results ("심정지 21% 감소", quarterly revenue). |
| CTAs | Direct, low-pressure. "더 알아보기", "문의사항 남기기", "모든 소식 보기". |
| Trademark / legal | Formal, careful. Registration notices ("VUNO® Reg. KIPO., U.S. PTO & EUIPO"). |

**Voice samples (verbatim from live surfaces):**
- "View the Invisible, Know the Unknown" — brand slogan (page title + meta description). *(verified live 2026-06-26)*
- "의료인공지능의 미래, 뷰노가 이끌어갑니다." — hero statement. *(verified live 2026-06-26)*
- "뷰노메드 솔루션은 의료진들의 일상적인 워크플로우에서 새로운 경험을 제공하고 있습니다." — solutions section copy. *(verified live 2026-06-26)*

**Forbidden register**: consumer-app hype, exclamation-heavy marketing, vague superlatives, unqualified medical claims without clinical or regulatory grounding.

## 11. Brand Narrative

VUNO (뷰노) was founded in **2014** by engineers from Samsung's research organization — **이예하 (Yeha Lee, CEO)** with co-founders **김현준** and **정규환 (CTO)** — making it one of Korea's earliest dedicated medical-AI companies. The founding premise was that deep learning could read medical data (images, pathology slides, biosignals) at a level that augments clinicians, captured in the slogan **"View the Invisible, Know the Unknown"** — surfacing what the human eye cannot reliably see and quantifying what was previously uncertain.

The company built a portfolio of VUNO Med® solutions across three data domains it states on its site — **Medical Imaging** (CT / X-ray / MRI), **Pathology** (digital slides), and **Biosignals** (ECG / vital signs) — including VUNO Med-BoneAge (bone-age assessment), VUNO Med-Chest X-ray, VUNO Med-Fundus AI, VUNO Med-DeepBrain, and the DeepCARS cardiac-arrest risk predictor. VUNO Med-BoneAge is widely recognized as the first AI-based medical device to receive Korean regulatory approval, and VUNO listed on the KOSDAQ in 2021 as the country's first domestic medical-AI IPO. The brand also extends from hospital tooling toward personal chronic-disease management with VUNO Care-HATIV.

What VUNO's design refuses is the bright, playful chrome of consumer apps and the institutional blue-and-gold of legacy healthcare IT. What it embraces, visible in the work: a dark reading-room navy, a single precise teal signal, weighty bilingual headlines, sharp instrument-like geometry, and copy that lets clinical evidence — approvals, trials, quantified outcomes — carry the persuasion.

## 12. Principles

1. **Evidence over assertion.** VUNO earns trust with approvals, papers, and quantified outcomes. *UI implication:* lead press and product copy with concrete clinical results and regulatory status, not adjectives.
2. **One signal in a calm room.** A single teal accent on a deep-navy canvas keeps attention undivided. *UI implication:* reserve `#40e2de` for active nav, CTAs, and the featured card; let navy and white do everything else.
3. **Clinician in the workflow.** The product augments daily medical work. *UI implication:* describe each solution by modality and exactly what it detects; design for legibility under clinical conditions.
4. **Precision is the aesthetic.** Sharp corners and an instrument-like restraint signal rigor. *UI implication:* default to radius 0; reserve circles for indicators; avoid decorative depth.
5. **Bilingual by default.** Korean and Latin scripts are first-class peers. *UI implication:* pair NANUMSQUARE and Poppins at matching sizes; never let one script feel like a translation afterthought.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable VUNO user and stakeholder segments (radiologists, ICU clinicians, hospital IT leaders, investors), not individual people.*

**박민수, 44, 서울.** A radiologist at a tertiary hospital using VUNO Med-Chest X-ray as a second read. Trusts the tool because it cites where the abnormality is, not just that one exists, and because it has regulatory clearance behind it.

**정하늘, 38, 대구.** An ICU nurse-lead relying on DeepCARS to flag cardiac-arrest risk within 24 hours. Values calm, unambiguous risk signals during a busy shift — no alarm fatigue, no decorative noise.

**이준호, 51, 경기.** A hospital CIO evaluating medical-AI vendors. Reads VUNO's IR and clinical-evidence pages closely; the quantified outcomes and approvals matter more than the marketing.

**Sarah Kim, 35, Singapore.** A healthcare investor tracking VUNO's KOSDAQ performance and global expansion. Reads the press and IR sections for revenue and partnership signals, and reads the calm, evidence-led tone as a sign of seriousness.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no press results)** | White canvas. Single near-black (`#000000`) line explaining no matching items, with one teal (`#40e2de`) link to broaden the filter. No illustration clutter. |
| **Empty (saved / IR list, none yet)** | Muted line on dark in `#9bacbb`: nothing here yet, plus a path back. Calm and honest. |
| **Loading (press / data fetch)** | Skeleton cards at final dimensions on white, sharp corners (radius 0), faint pulse — no heavy shimmer, consistent with the near-shadowless system. |
| **Loading (in-place refresh)** | A slim teal (`#40e2de`) progress indicator; previous content stays visible. |
| **Error (fetch failed)** | Inline message in `#102135` with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level note below the input describing what is valid, not just "필수". |
| **Success (inquiry submitted)** | Brief calm confirmation; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | Sharp-cornered grey blocks at final dimensions, faint pulse. |
| **Disabled** | Muted blue-grey (`#9bacbb`) text on reduced-opacity surface; teal actions fade rather than turn grey to preserve the brand signal. |
| **Active / Selected** | Teal (`#40e2de`) marks the active nav item and the featured card's 2px border. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, link, focus |
| `motion-standard` | 240ms | Card reveal, nav overlay, section transitions |
| `motion-slow` | 400ms | Full-screen overlay nav, hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — overlays, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is quiet and purposeful, matching the clinical-authority tone. The full-screen overlay navigation expands at `motion-slow / ease-enter`; press cards and sections fade-in from below at `motion-standard`. No bounce or spring — a medical-AI product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on https://www.vuno.co and https://www.vuno.co/about:
- Deep navy chrome rgb(16,33,53) #102135; navy ladder rgb(12,26,41) #0c1a29, rgb(18,39,61) #12273d, rgb(36,65,97) #244161
- Signature teal accent rgb(64,226,222) #40e2de — active nav "About VUNO", CTA "문의사항 남기기", featured news card 2px border
- Headlines NANUMSQUARE-700 50px / weight 600; body Poppins + NANUMSQUARE-400 16px
- Text on dark: rgb(215,223,230) #d7dfe6, rgb(155,172,187) #9bacbb; body on white rgb(0,0,0)
- Sharp corners (radius 0) dominant; circles 50% for indicators; card glow rgba(35,48,59,0.25) 0px 0px 12px
- Page title / meta slogan: "View the Invisible, Know the Unknown"
- GitHub org github.com/vuno — verified org "VUNO Inc.", location Korea South, blog vuno.co, medical-AI research repos (ECG, retinal, radiology report generation)

Token-level claims (§1-9) are sourced from this live inspection. Full raw samples in web/references/vuno/.verification.md.

Voice samples (§10) are verbatim from the live site (page title/meta slogan, hero statement, solutions copy).

Brand narrative (§11): VUNO (뷰노) founded 2014 by ex-Samsung engineers (CEO 이예하 / Yeha Lee, CTO 정규환, co-founder 김현준); Korea's pioneer medical-AI company; VUNO Med-BoneAge widely cited as the first Korea-approved AI medical device; KOSDAQ-listed 2021. These are widely documented public facts about the company; product domains (Medical Imaging / Pathology / Biosignals) and product names are stated verbatim on the live site. Founding details beyond the site are general public knowledge, not quoted from a verified VUNO statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable VUNO user/stakeholder segments (radiologists, ICU clinicians, hospital IT leaders, healthcare investors). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "one signal in a calm room", "precision is the aesthetic as a rejection of consumer-app chrome") are editorial readings connecting VUNO's observed design to its positioning, not directly sourced VUNO statements.
-->
