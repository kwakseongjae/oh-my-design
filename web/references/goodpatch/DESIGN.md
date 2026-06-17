---
id: goodpatch
name: Goodpatch
country: JP
category: design-tools
homepage: "https://goodpatch.com/"
primary_color: "#096fc8"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=goodpatch.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live CTA / link signature blue (#096fc8, rgb(9,111,200)); light-blue (#81b0da) is the decorative/secondary work-title tint; ink is warm grey #333333 (not pure black) over a #f6f6f6 paper canvas. Pill CTAs use an effectively-full radius (computed 1584px). Latin display = My Galano Grotesque; CJK body = Yu Gothic Pr6N (computed family 'A+EqpB-游ゴシック体 Pr6N')."
  colors:
    primary: "#096fc8"
    primary-light: "#81b0da"
    sky: "#76b7ed"
    ink: "#333333"
    ink-pure: "#000000"
    body: "#6e6e6e"
    muted: "#9096a2"
    faint: "#8f95a1"
    canvas: "#ffffff"
    paper: "#f6f6f6"
    dark: "#191b1f"
    dark-chrome: "#45474a"
    coral: "#ff776b"
    coral-tint: "#ffaba3"
    plum: "#534c97"
    on-primary: "#ffffff"
  typography:
    family: { display: "My Galano Grotesque", cjk: "Yu Gothic Pr6N", sans: "sans-serif" }
    display-hero: { size: 150, weight: 700, lineHeight: 0.85, tracking: -5.25, use: "English hero wordmark headline, Galano Grotesque Bold" }
    display-news:  { size: 53, weight: 600, lineHeight: 1.13, tracking: -1.33, use: "Large section banner (News), Galano Grotesque" }
    work-title:    { size: 40, weight: 600, lineHeight: 1.10, tracking: -1, use: "Work / case-study card titles" }
    section-label: { size: 23, weight: 400, lineHeight: 1.23, use: "Section sub-heads (Company profile, Culture), Galano Grotesque" }
    eyebrow:       { size: 16, weight: 400, lineHeight: 1.25, use: "Blue section eyebrow labels (Services, Work, Products)" }
    body:          { size: 16, weight: 400, lineHeight: 2.00, use: "Standard reading text, Yu Gothic Pr6N" }
    news-head:     { size: 18, weight: 400, lineHeight: 1.58, use: "News item headlines, Yu Gothic Pr6N B" }
    button:        { size: 15, weight: 400, lineHeight: 1.25, use: "Pill CTA label, Galano Grotesque" }
    nav-jp:        { size: 15, weight: 400, lineHeight: 2.20, use: "Sub-nav Japanese links, Yu Gothic Pr6N B" }
  spacing: { xs: 4, sm: 8, base: 16, md: 24, lg: 40, xl: 66, section: 120 }
  rounded: { sm: 8, pill: 9999, full: 9999 }
  shadow:
    none: "none"
  components:
    cta-primary: { type: button, bg: "#096fc8", fg: "#ffffff", radius: "9999px", padding: "16px 24px", height: "56px", font: "15px / 400 My Galano Grotesque", use: "Primary pill CTA — View services / View selected works" }
    cta-outline: { type: button, bg: "#ffffff", fg: "#096fc8", border: "1px solid #096fc8", radius: "9999px", padding: "16px 24px", height: "56px", font: "15px / 400 My Galano Grotesque", use: "Secondary outline pill — View career info" }
    cta-consent: { type: button, bg: "#096fc8", fg: "#ffffff", radius: "9999px", padding: "0 40px", height: "48px", font: "15px / 400 Yu Gothic Pr6N", use: "Cookie-consent confirm (同意する)" }
    contact-card: { type: card, bg: "#ffffff", fg: "#096fc8", radius: "8px", padding: "66px 16px", use: "Large Contact / Careers entry panel, blue-on-white, no shadow" }
    work-card: { type: card, bg: "#ffffff", fg: "#333333", radius: "8px", use: "Work / case-study tile on #f6f6f6 paper, title shifts to #81b0da" }
    section-eyebrow: { type: badge, bg: "#ffffff", fg: "#096fc8", radius: "8px", font: "16px / 400 My Galano Grotesque", use: "Blue section eyebrow label (Services, Work, Products)" }
    nav-link: { type: tab, fg: "#333333", font: "16px / 400 My Galano Grotesque", active: "text #096fc8", use: "Top nav item; hover/active turns signature blue" }
    footer-link: { type: listItem, fg: "#333333", font: "15px / 400 Yu Gothic Pr6N", use: "Footer / sub-nav Japanese navigation link" }
  components_harvested: true
---

# Design System Inspiration of Goodpatch

## 1. Visual Theme & Atmosphere

Goodpatch (グッドパッチ) is Japan's best-known UI/UX design firm — a Tokyo-listed studio whose entire web presence is itself a portfolio piece, an argument that "design has the power to move business." The homepage opens not on a marketing gradient but on a quiet warm-grey paper canvas (`#f6f6f6`) carrying an enormous English wordmark headline — "Design to empower" — set at a colossal 150px in My Galano Grotesque Bold (weight 700) with line-height crushed to 0.85 and `-5.25px` tracking. Text is a soft warm grey (`#333333`), never pure black for running copy, which gives the whole surface an editorial, gallery-wall calm rather than a hard tech-product edge. This is a studio that treats whitespace and typographic scale, not color, as its primary expressive instrument.

The single saturated brand accent is a confident signature blue (`#096fc8`, rgb(9,111,200)). It is disciplined: it appears on the primary pill CTAs ("View services", "View selected works"), on every interactive link, and — distinctively — as the small blue **eyebrow labels** that announce each section ("Services", "Work", "Products"). A lighter companion sky-blue (`#81b0da`) is reserved for decoration and for the hover/secondary read of work-card titles, so the eye learns that deep blue means "act" and light blue means "atmosphere." Two rare accents surface on culture/products surfaces — a warm coral (`#ff776b`) and a muted plum (`#534c97`) — used sparingly as editorial punctuation, never as UI chrome.

What distinguishes Goodpatch is its restraint with depth and its commitment to the pill. Live inspection found `box-shadow: none` across the hero, nav, CTAs, and cards — separation comes from the paper-vs-white surface split (`#f6f6f6` vs `#ffffff`) and generous spacing, not elevation. Interactive geometry is bimodal: action CTAs are full pills (a computed `1584px` radius that is effectively `9999px`), while content panels (Contact, Careers, work tiles) sit at a calm 8px radius. The bilingual type system is the other signature: Latin display runs in **My Galano Grotesque**, while Japanese body and labels run in **Yu Gothic Pr6N** (the live computed family is `"A+EqpB-游ゴシック体 Pr6N"`), with body line-height opened to a luxurious `2.0` for hangul-adjacent CJK legibility.

**Key Characteristics:**
- Colossal English display headlines in My Galano Grotesque Bold (150px, weight 700, line-height 0.85, `-5.25px` tracking) — typography as the hero, not color
- Single disciplined signature blue (`#096fc8`) for CTAs, links, and section eyebrow labels
- Light sky-blue (`#81b0da`) reserved for decoration and secondary work-title reads
- Warm grey ink (`#333333`) for running text instead of pure black — editorial, gallery-calm
- Paper canvas (`#f6f6f6`) under white (`#ffffff`) cards — surface split does the separating
- Flat depth: `box-shadow: none` everywhere; no elevation language
- Bimodal radius — full-pill CTAs (`9999px`) vs calm 8px content panels
- Bilingual font split — My Galano Grotesque (Latin) over Yu Gothic Pr6N (CJK body), body line-height 2.0
- Rare editorial accents (coral `#ff776b`, plum `#534c97`) as punctuation, never as UI

## 2. Color Palette & Roles

### Primary
- **Goodpatch Blue** (`#096fc8`): Primary brand color — pill CTA backgrounds, all interactive links, blue section eyebrow labels, outline-CTA text/border. The system's single "action" color (live `rgb(9, 111, 200)`).
- **Sky Light** (`#81b0da`): Secondary/decorative blue. Hover and secondary read of work-card titles, decorative tints (live `rgb(129, 176, 218)`).
- **Sky Bright** (`#76b7ed`): Brighter accent blue used in decorative blocks and badges (live `rgb(118, 183, 237)`).

### Ink & Neutrals
- **Warm Ink** (`#333333`): Primary text, headings, nav — a soft warm grey, used instead of pure black for running copy (live `rgb(51, 51, 51)`).
- **Pure Black** (`#000000`): Maximum-contrast moments — occasional heading emphasis.
- **Body Grey** (`#6e6e6e`): Secondary body copy and descriptions (live `rgb(110, 110, 110)`).
- **Muted Grey** (`#9096a2`): Tertiary text, captions, metadata (live `rgb(144, 150, 162)`).
- **Faint Grey** (`#8f95a1`): Lowest-emphasis labels, fine print (live `rgb(143, 149, 161)`).

### Surface
- **Pure White** (`#ffffff`): Cards, CTA-on-white, Contact/Careers panels, text on blue/dark.
- **Paper Canvas** (`#f6f6f6`): The page background — a warm-grey paper tone the white cards float on (live `rgb(246, 246, 246)`).
- **Dark Chrome** (`#191b1f`): Near-black dark sections / overlay chrome (live `rgb(25, 27, 31)`).
- **Slate Chrome** (`#45474a`): A softer dark used in chrome panels (live `rgb(69, 71, 74)`).

### Editorial Accents (sparingly used)
- **Coral** (`#ff776b`): Warm editorial accent on culture/product surfaces (live `rgb(255, 119, 107)`).
- **Coral Tint** (`#ffaba3`): Soft coral surface/highlight block (live `rgb(255, 171, 163)`).
- **Plum** (`#534c97`): Muted purple editorial accent block (live `rgb(83, 76, 151)`).

## 3. Typography Rules

### Font Family
- **Latin display**: `My Galano Grotesque` (with `sans-serif` fallback) — all English headlines, nav, eyebrow labels, CTA labels, work-card titles. Geometric humanist sans.
- **CJK body**: `Yu Gothic Pr6N` — the live computed family is `"A+EqpB-游ゴシック体 Pr6N"` (Morisawa-delivered Yu Gothic Pr6N), used for Japanese body copy, news headlines, and sub-nav links at weight 400 (with a Bold "B" cut for emphasis).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | My Galano Grotesque | 150px (9.38rem) | 700 | 0.85 (127.5px) | -5.25px | "Design to empower" wordmark headline |
| Section Banner | My Galano Grotesque | 53px (3.33rem) | 600 | 1.13 (60px) | -1.33px | Large banner (News) |
| Work Title | My Galano Grotesque | 40px (2.50rem) | 600 | 1.10 (44px) | -1px | Case-study card titles |
| Section Label | My Galano Grotesque | 23px (1.43rem) | 400 | 1.23 (28px) | normal | Company profile / Culture sub-heads |
| Eyebrow | My Galano Grotesque | 16px (1.00rem) | 400 | 1.25 (20px) | normal | Blue section labels (Services, Work) |
| News Headline | Yu Gothic Pr6N B | 18px (1.11rem) | 400 | 1.58 (28px) | normal | News item headlines |
| Body | Yu Gothic Pr6N | 16px (1.00rem) | 400 | 2.00 (32px) | normal | Standard reading text |
| Button | My Galano Grotesque | 15px (0.91rem) | 400 | 1.25 | normal | Pill CTA labels |
| Sub-nav (JP) | Yu Gothic Pr6N B | 15px (0.91rem) | 400 | 2.20 (32px) | normal | Japanese sub-nav links |

### Principles
- **Display is English, body is Japanese**: My Galano Grotesque owns every large Latin headline; Yu Gothic Pr6N owns running Japanese copy. The two fonts never swap roles — the studio signs in Latin and explains in Japanese.
- **Extreme display scale, crushed leading**: the hero runs at 150px with line-height 0.85 and `-5.25px` tracking — the headline is a graphic object, not a sentence.
- **Open CJK leading**: body line-height is a generous `2.0` (32px on 16px), giving Japanese text air and editorial calm.
- **Light functional weight**: nav, eyebrows, and CTA labels all sit at weight 400 — the system never leans on heavy UI text; scale and color carry hierarchy.
- **Negative tracking scales with size**: -5.25px at 150px, -1.33px at 53px, -1px at 40px; body and labels stay at normal tracking.

## 4. Component Stylings

### Buttons

**Primary Pill CTA**
- Background: `#096fc8`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 16px 24px
- Font: 15px My Galano Grotesque weight 400
- Height: 56px
- Use: Primary pill call-to-action ("View services", "View selected works", "Why design")

**Outline Pill CTA**
- Background: `#ffffff`
- Text: `#096fc8`
- Border: 1px solid `#096fc8`
- Radius: 9999px
- Padding: 16px 24px
- Font: 15px My Galano Grotesque weight 400
- Height: 56px
- Use: Secondary outline pill ("View career info")

**Consent Confirm**
- Background: `#096fc8`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 0px 40px
- Font: 15px Yu Gothic Pr6N weight 400
- Height: 48px
- Use: Cookie-consent confirm button ("同意する")

### Cards & Containers

**Contact / Careers Panel**
- Background: `#ffffff`
- Text: `#096fc8`
- Radius: 8px
- Padding: 66px 16px
- Use: Large blue-on-white entry panel ("Contact お気軽にお問い合わせください", "Careers 一緒にデザインの力を証明しませんか？") — no shadow

**Work Card**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 8px
- Use: Work / case-study tile on the `#f6f6f6` paper canvas; title shifts to `#81b0da` on the secondary read

### Badges

**Section Eyebrow**
- Background: `#ffffff`
- Text: `#096fc8`
- Radius: 8px
- Font: 16px My Galano Grotesque weight 400
- Use: Small blue eyebrow label announcing each section ("Services", "Work", "Products")

### Navigation
- Background: `#ffffff`
- Text: `#333333`
- Font: 16px My Galano Grotesque weight 400
- Active: signature blue `#096fc8` text on hover/active
- Use: Top horizontal nav ("Why design", "Services", "Work", "Company") plus Japanese sub-nav in Yu Gothic Pr6N

### Footer
- Links: `#333333`, 15px Yu Gothic Pr6N weight 400
- Use: Footer / sub-nav Japanese navigation links ("会社概要", "代表メッセージ", "沿革", "アクセス")

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://goodpatch.com/ (homepage, live computed style); https://goodpatch.com/company (Company surface, live computed style); https://goodpatch.com/company/profile (company profile facts)
**Tier 2 sources:** getdesign.md/goodpatch — no data ("No designs found"); styles.refero.design/?q=goodpatch — no Goodpatch-specific entry (generic browse cards only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 16px, 24px, 40px, 66px, 120px
- Notable: Contact/Careers panels use a dramatic 66px vertical padding, giving the entry panels a deliberate, gallery-poster presence

### Grid & Container
- Centered single-column hero anchored by the 150px English wordmark headline
- Section eyebrow (blue, Galano Grotesque) sits above each block as a label, then content
- Work/case-study tiles arranged in a grid on the paper canvas, each at 8px radius
- Full-width alternation between paper (`#f6f6f6`) and white (`#ffffff`) bands

### Whitespace Philosophy
- **Scale over density**: the studio uses enormous type and generous air as its primary expressive tool — the page reads like an exhibition catalog, not a SaaS landing.
- **Surface-split segmentation**: sections separate by the `#f6f6f6` paper vs `#ffffff` card contrast, not by borders or shadows.
- **Pill rhythm at the action layer**: full-pill CTAs create a consistent, friendly cadence wherever the user is invited to act.

### Border Radius Scale
- Small (8px): content panels, work cards, Contact/Careers entry panels — the workhorse for surfaces
- Full (9999px): every pill CTA (computed `1584px`, effectively full-round)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, headings, most surfaces |
| Surface (Level 1) | `#f6f6f6` paper vs `#ffffff` card split | Section / card separation without elevation |

**Shadow Philosophy**: Goodpatch is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, CTAs, work cards, and Contact/Careers panels. Depth is communicated entirely through the warm paper canvas (`#f6f6f6`) versus white cards (`#ffffff`), generous spacing, and the disciplined blue action layer. This is a deliberate editorial-flat choice — for a design studio whose surface IS the portfolio, restraint signals confidence; the work, not the chrome, carries the weight. When emphasis is needed, the system reaches for the signature blue (`#096fc8`) or sheer typographic scale, never elevation.

## 7. Do's and Don'ts

### Do
- Use My Galano Grotesque for large English display headlines — it is the studio's signing voice
- Use Yu Gothic Pr6N for Japanese body and labels at weight 400, line-height 2.0
- Reserve signature blue (`#096fc8`) for CTAs, links, and section eyebrow labels — the single action color
- Use warm grey (`#333333`) for running text instead of pure black
- Separate sections with the paper (`#f6f6f6`) vs white (`#ffffff`) surface split, not shadows
- Use full-pill geometry for action CTAs and a calm 8px radius for content panels
- Push display type to extreme scale (150px hero) with crushed leading and tight tracking
- Use the light sky-blue (`#81b0da`) only for decoration and secondary work-title reads

### Don't
- Use drop shadows for elevation — Goodpatch is a flat, shadow-free system
- Spread the signature blue across many UI elements — it dilutes the single-action signal
- Use pure black (`#000000`) for running body copy — reserve warm grey `#333333`
- Set Japanese body text in My Galano Grotesque — Yu Gothic Pr6N owns CJK reading text
- Put English display copy in the CJK font — My Galano Grotesque owns Latin display
- Use the coral (`#ff776b`) or plum (`#534c97`) accents as UI chrome — they are editorial punctuation only
- Use sharp square corners on action CTAs — actions are full pills
- Crowd the layout — scale and whitespace are the studio's primary expressive instruments

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses dramatically, CTAs stack full-width |
| Tablet | 640-1024px | Moderate padding, 2-up work tiles |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column work grid |

### Touch Targets
- Primary pill CTAs at 56px height — comfortably tappable, full-pill for an unmistakable target
- Consent button at 48px height with 40px horizontal padding
- Nav links spaced for touch with 8px vertical padding within the white header

### Collapsing Strategy
- Hero: the 150px English wordmark scales down sharply on mobile, weight 700 maintained
- Work tile grid: multi-column → 2-up → stacked single column
- Paper/white alternating bands maintain full-width treatment
- Contact/Careers panels keep their generous internal padding, reflowing to full-width

### Image Behavior
- Case-study imagery and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain 8px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / link: Goodpatch Blue (`#096fc8`)
- Decorative / secondary blue: Sky Light (`#81b0da`)
- Heading / body text: Warm Ink (`#333333`)
- Secondary text: Body Grey (`#6e6e6e`)
- Muted text: Muted Grey (`#9096a2`)
- Background: Paper Canvas (`#f6f6f6`)
- Cards / panels: Pure White (`#ffffff`)
- Dark chrome: `#191b1f`
- Editorial accents: Coral (`#ff776b`), Plum (`#534c97`)

### Example Component Prompts
- "Create a hero on a #f6f6f6 paper canvas. English wordmark headline at 150px My Galano Grotesque weight 700, line-height 0.85, letter-spacing -5.25px, color #333333. Below it primary pill CTAs: #096fc8 background, white text, 9999px radius, 16px 24px padding, 56px tall, 15px Galano Grotesque — 'View services'. One outline pill: white background, #096fc8 text, 1px solid #096fc8 border, 9999px radius — 'View career info'."
- "Design a section with a blue eyebrow label: 16px My Galano Grotesque weight 400, color #096fc8 ('Services'). Body in Yu Gothic Pr6N 16px weight 400, line-height 2.0, color #333333."
- "Build a Contact entry panel: white #ffffff background, #096fc8 text, 8px radius, 66px 16px padding, no shadow. Title in Galano Grotesque, Japanese subtitle in Yu Gothic Pr6N."
- "Create a work card grid on #f6f6f6 paper. Each tile: white #ffffff, 8px radius, no shadow. Title 40px My Galano Grotesque weight 600, letter-spacing -1px, color #333333; secondary read shifts title to #81b0da."

### Iteration Guide
1. My Galano Grotesque for English display; Yu Gothic Pr6N for Japanese body (line-height 2.0)
2. Signature blue (`#096fc8`) is the single action color — keep it on CTAs, links, eyebrows only
3. No shadows — separate with the `#f6f6f6` paper vs `#ffffff` card split
4. Bimodal radius — full pills (`9999px`) for CTAs, 8px for content panels
5. Text color is warm grey `#333333`, never pure black for body
6. Push display type to extreme scale (150px hero) with crushed leading and tight tracking
7. Use coral `#ff776b` / plum `#534c97` only as rare editorial accents, never as UI chrome

---

## 10. Voice & Tone

Goodpatch's voice is **conviction-driven, articulate, and quietly evangelical about design** — a studio that frames its entire existence as a mission to "prove the power of design." The brand signs in confident English ("Design to empower") and explains in measured, professional Japanese. The careers invitation "一緒にデザインの力を証明しませんか？" ("Won't you prove the power of design together?") sets the register: it speaks to peers and believers, not to buyers. Copy is declarative and missionary, never gimmicky or sales-pressured — the work and the craft are presented as the argument.

| Context | Tone |
|---|---|
| Hero / English headlines | Declarative, mission-framed. "Design to empower." Confident, anthemic, not hype. |
| Section eyebrows | Plain English labels — "Services", "Work", "Products", "Culture". Calm, structural. |
| Japanese body | Professional, articulate, peer-to-peer. Explains the value of design without jargon-gatekeeping. |
| CTAs | Direct, low-pressure. "View services", "View selected works", "View career info". |
| Careers / culture | Evangelical and inviting. "一緒にデザインの力を証明しませんか？" — recruiting believers, not staff. |

**Voice samples (verbatim from live surfaces):**
- "Design to empower" — hero wordmark headline (mission anthem). *(verified live 2026-06-17, homepage H1)*
- "デザインの力を証明する" — page title / brand promise ("prove the power of design"). *(verified live 2026-06-17, document.title)*
- "一緒にデザインの力を証明しませんか？" — Careers panel invitation. *(verified live 2026-06-17, homepage Careers card)*

**Forbidden register**: hype superlatives, aggressive sales urgency, undefined buzzword-stacking, exclamation-heavy marketing. The voice persuades through conviction and craft, not pressure.

## 11. Brand Narrative

Goodpatch (株式会社グッドパッチ / Goodpatch Inc.) was founded in **September 2011** by **土屋尚史 (Naofumi Tsuchiya, 代表取締役社長 / Representative Director & President)** in Tokyo, on a then-uncommon conviction in Japan: that UI/UX design was not decoration applied at the end, but a strategic force that could change a business. From a small studio, Goodpatch grew into one of Japan's most influential design firms, shaping the user experience of numerous flagship Japanese apps and later going public on the Tokyo Stock Exchange — a rare path for a design studio, and itself a statement that design can be a publicly accountable business.

The company's mission is stated plainly across its surfaces: **"デザインの力を証明する"** — to *prove the power of design* (rendered in English as "Design to empower"). This is not a tagline bolted on for marketing; it is the operating thesis. Goodpatch built its own products to demonstrate the claim — the prototyping tool **Prott**, the designer-careers platform **ReDesigner**, and design-collaboration platforms — alongside its design-partnership consulting. As the company puts it, its business spans "企業変革支援、UI/UXデザイン、ビジネスモデルデザイン、ブランド体験デザイン、組織デザイン" (corporate transformation, UI/UX design, business-model design, brand-experience design, and organizational design) — design pushed up the value chain from screens to strategy.

What Goodpatch refuses, visible in its design: the loud, gradient-heavy aesthetics of typical tech marketing, and the decorative-only view of design it was founded to overturn. What it embraces: extreme typographic scale as confidence, a single disciplined blue, warm editorial calm, and a flat, shadow-free surface where the work — not the chrome — carries the argument. The website is the proof: a studio whose own front door is a portfolio piece for the thesis that design has power.

## 12. Principles

1. **Prove the power of design.** The mission "デザインの力を証明する" is the literal operating thesis. *UI implication:* every surface must be evidence — craft, scale, and restraint are the argument; nothing decorative is allowed to weaken the proof.
2. **Type carries the conviction.** Goodpatch leads with enormous English display headlines, not color washes. *UI implication:* push display type to extreme scale with crushed leading; let typography, not effects, command attention.
3. **One blue means "act."** The signature blue (`#096fc8`) is reserved for CTAs, links, and section eyebrows. *UI implication:* never spread the action color into decoration — the next step must always be unambiguous.
4. **Flat as confidence.** No shadows; separation comes from the paper-vs-white surface split. *UI implication:* communicate depth with surface tone and spacing, not elevation — a confident studio doesn't decorate its container.
5. **Sign in English, explain in Japanese.** My Galano Grotesque signs the brand; Yu Gothic Pr6N carries the reading. *UI implication:* keep the two fonts in their lanes — Latin display vs CJK body — and give CJK text generous line-height (2.0).

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Goodpatch audience segments (Japanese enterprise design/product leaders, designers seeking studio careers, founders hiring a design partner), not individual people.*

**佐藤健太, 38, 東京.** A product director at a large Japanese enterprise tasked with a digital transformation. Evaluates Goodpatch as a design partner precisely because the studio frames design as business strategy, not screen polish. Reads the case studies as proof, and trusts the calm, evidence-first presentation.

**山田美咲, 26, 大阪.** A young designer considering ReDesigner and a Goodpatch career. Drawn to the "一緒にデザインの力を証明しませんか？" invitation — it speaks to her as a believer in design's value, not a recruit to be filled into a seat. Reads the Culture section closely.

**陳偉倫, 41, 台北.** A founder of a regional startup shopping for a high-craft design studio for a flagship app. Notices immediately that Goodpatch's own site is a portfolio piece — the extreme typographic confidence and shadow-free restraint signal a studio that practices what it sells.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no work results in a filter)** | Paper canvas (`#f6f6f6`). Single Warm Ink (`#333333`) line at body size in Yu Gothic Pr6N explaining no matching work, with one blue (`#096fc8`) action to reset the filter. No illustration clutter. |
| **Empty (saved / list, none yet)** | Muted Grey (`#9096a2`) single line in calm tone, plus a path back. Honest, gallery-quiet. |
| **Loading (work grid fetch)** | Flat skeleton tiles on white (`#ffffff`) at final card dimensions, 8px radius. No shadow shimmer — flat pulse consistent with the shadowless system. |
| **Loading (in-place)** | Subtle blue (`#096fc8`) progress indicator; previous content stays visible. |
| **Error (load failed)** | Inline message in Warm Ink (`#333333`) with a plain-language explanation and a retry, never a bare "エラーが発生しました". States the next step. |
| **Error (form validation)** | Field-level message below the input in a calm tone; describes what is valid, not just "必須". |
| **Success (contact submitted)** | Brief inline confirmation in calm professional tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | White blocks at final dimensions, 8px radius, flat pulse. |
| **Disabled** | Faint Grey (`#8f95a1`) text on reduced-opacity surface; blue actions fade rather than turn grey to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, link color shift to blue, button press |
| `motion-standard` | 240ms | Card / section reveal, sheet, dropdown |
| `motion-slow` | 400ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sections, cards, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is composed and editorial — consistent with the gallery-flat aesthetic. Section content and work tiles fade-in from below at `motion-standard / ease-enter`; nav links and CTA text shift to signature blue (`#096fc8`) on hover at `motion-fast`. The colossal hero headline may reveal with a slow, confident fade at `motion-slow`. No bounce or spring — a publicly listed design studio signals craft and composure, not playful delight. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the surface remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle on
https://goodpatch.com/ and https://goodpatch.com/company:
- Hero H1 "Design to empower" — My Galano Grotesque 150px / weight 700 / line-height 127.5px (0.85) / -5.25px tracking / color rgb(51,51,51)
- Primary pill CTAs ("View services","View selected works","Why design") — bg rgb(9,111,200) #096fc8 / white text / radius 1584px (≈9999px) / 16px 24px padding / 56px tall / Galano Grotesque 14.55px
- Outline pill CTA "View career info" — bg #ffffff / text #096fc8 / radius 1584px / 56px
- Contact/Careers panels — bg #ffffff / text #096fc8 / radius 8px / 66px 16px padding / no shadow
- Section eyebrow labels ("Services","Work","Products") — color rgb(9,111,200) #096fc8 / Galano Grotesque 16px
- Body — Yu Gothic Pr6N (computed "A+EqpB-游ゴシック体 Pr6N M") / 16px / line-height 32px (2.0) / color rgb(51,51,51)
- box-shadow: none across hero/nav/CTAs/cards (shadowless system confirmed)
- document.title: "Goodpatch グッドパッチ｜デザインの力を証明する"

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live surfaces (hero H1 "Design to empower",
document.title "デザインの力を証明する", Careers card "一緒にデザインの力を証明しませんか？").

Brand narrative (§11) facts verified via WebFetch on https://goodpatch.com/company/profile
(2026-06-17): 株式会社グッドパッチ / Goodpatch Inc.; 設立 2011年9月 (founded September 2011);
代表取締役社長 土屋尚史 (CEO Naofumi Tsuchiya); business scope "企業変革支援、UI/UXデザイン、
ビジネスモデルデザイン、ブランド体験デザイン、組織デザイン、ソフトウェア開発"; HQ Shibuya, Tokyo.
Goodpatch's Tokyo Stock Exchange listing (IPO 2020, Growth market) and its products
(Prott prototyping tool, ReDesigner) are widely documented public facts, referenced via the
site's IR / Products sections but not quoted verbatim here.

Personas (§13) are fictional archetypes informed by publicly observable Goodpatch audience
segments (Japanese enterprise design/product leaders, designers seeking studio careers,
founders hiring a design partner). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "type carries the conviction", "flat as confidence", "the website
is the proof") are editorial readings connecting Goodpatch's observed design to its stated
mission "デザインの力を証明する", not directly sourced Goodpatch statements.
-->
