---
id: jandi
name: JANDI
country: KR
category: productivity
homepage: "https://www.jandi.com"
primary_color: "#00c473"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=www.jandi.com&sz=128"
verified: "2026-06-09"
added: "2026-06-09"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-09"
  components_harvested: true
  colors:
    primary: "#00c473"
    primary-border: "#00c473"
    ink-dark: "#333333"
    ink-deepest: "#041911"
    heading: "#000000"
    canvas: "#ffffff"
    canvas-soft: "#fafafc"
    tint-blue: "#eaf6fc"
    body: "#a2a2a2"
    subhead: "#c2c2c2"
    footer-bg: "#181818"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Noto Sans" }
    display-hero: { size: 56, weight: 700, lineHeight: 1.43, use: "Hero headline on dark/imagery, white text" }
    section:      { size: 42, weight: 700, lineHeight: 1.43, use: "Feature section titles" }
    subheading:   { size: 24, weight: 700, lineHeight: 1.58, use: "Card / sub-section heads" }
    body:         { size: 16, weight: 400, lineHeight: 1.00, use: "Standard reading text" }
    button:       { size: 15, weight: 500, lineHeight: 1.33, use: "Primary button label" }
    nav:          { size: 14, weight: 400, lineHeight: 1.43, use: "Navigation links" }
    caption:      { size: 14, weight: 400, lineHeight: 1.43, use: "Muted descriptions, metadata" }
    eyebrow:      { size: 13, weight: 700, lineHeight: 1.54, use: "Green eyebrow labels above headings" }
  spacing: { xs: 4, sm: 7, md: 14, base: 16, lg: 30, xl: 36, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 6, lg: 16, full: 9999 }
  shadow:
    card: "rgba(0,0,0,0.08) 0px 2px 16px 3px"
  components:
    button-login: { type: button, bg: "#00c473", fg: "#ffffff", radius: "6px", padding: "7px 14px", font: "14px / 500", use: "Top-nav green login CTA, 1px #00c473 border" }
    button-cta-dark: { type: button, bg: "#333333", fg: "#ffffff", radius: "6px", padding: "5px 14px", font: "15px / 500", use: "Secondary dark action, 더 알아보기" }
    button-signup: { type: button, bg: "#ffffff", fg: "#041911", radius: "6px", padding: "12px 30px", font: "15px / 500", use: "회원가입 / 도입문의 on dark hero, white pill on green" }
    eyebrow-label: { type: badge, fg: "#00c473", radius: "4px", padding: "8px 16px", font: "13px / 700", use: "Green eyebrow above section headings" }
    nav-link: { type: tab, fg: "#000000", font: "14px / 400", use: "Top-nav menu item", active: "green #00c473 text on hover/active" }
    card: { type: card, bg: "#ffffff", radius: "16px", use: "Feature card, shadow rgba(0,0,0,0.08) 0px 2px 16px 3px" }
    card-tint: { type: card, bg: "#eaf6fc", radius: "16px", use: "Tinted feature card on soft canvas" }
    input-text: { type: input, fg: "#333333", radius: "6px", font: "15px / 400", use: "Form field, placeholder #a2a2a2" }
    footer-link: { type: listItem, fg: "#a2a2a2", font: "14px / 400", use: "Footer nav link on #181818 background" }
---

# Design System Inspiration of JANDI

## 1. Visual Theme & Atmosphere

JANDI (잔디) is the Korean business-collaboration messenger built by TossLab, and its website carries the calm, trustworthy confidence of a productivity tool that lives in offices all day. The page opens on a clean white canvas (`#ffffff`) — occasionally cooling into a near-white `#fafafc` — with pure black headings (`#000000`) and a single, decisive signature: JANDI Green (`#00c473`). That green is the brand's whole personality compressed into one hue. The name "잔디" literally means "grass/lawn", and the fresh, growth-coded green reads exactly that way: alive, approachable, optimistic, and unmistakably not the corporate-blue of legacy enterprise software. Everything else in the palette is deliberately quiet so the green can do the talking.

The typographic voice is set in Noto Sans across the entire site, run at weight 700 for headlines and weight 400 for body. Hero headlines reach 56px and section titles 42px, both at bold 700 with relaxed line-heights (1.43), giving the page a friendly, legible, distinctly Korean-web rhythm rather than the tight, ultra-light tracking of Western design-foundry sites. Bold-but-warm is the register: the headlines are confident and large, the supporting copy recedes into soft grays (`#a2a2a2`, `#c2c2c2`), and the green eyebrow labels (13px, weight 700) act like small sprigs of color that orient the reader through each section.

Depth is handled with extreme restraint. There is essentially one shadow in the system — a soft, evenly-spread `rgba(0,0,0,0.08) 0px 2px 16px 3px` — used to lift feature cards a few millimeters off the canvas. No multi-layer chromatic stacks, no dramatic elevation. Surfaces are rounded generously (16px on cards) while interactive controls stay tighter (6px on buttons), and the overall feel is of a product that wants to be calm, scannable, and immediately usable by a whole company, not just designers.

**Key Characteristics:**
- JANDI Green (`#00c473`) as the single decisive brand and CTA color — fresh, growth-coded, anti-corporate-blue
- Noto Sans everywhere; weight 700 for headlines, 400 for body — friendly Korean-web legibility
- Pure black (`#000000`) headings on white (`#ffffff`) / near-white (`#fafafc`) canvas
- Soft gray supporting text (`#a2a2a2` body, `#c2c2c2` subheads) so green stays the only accent
- One restrained card shadow (`rgba(0,0,0,0.08) 0px 2px 16px 3px`) — calm, flat-leaning depth
- Generous 16px card radius, tighter 6px control radius — comfortable but not playful
- Green eyebrow labels (13px / 700) as wayfinding sprigs above section headings
- Deep near-black ink (`#041911`, `#333333`) for high-contrast text on light pill buttons

## 2. Color Palette & Roles

### Primary
- **JANDI Green** (`#00c473`): Primary brand color, login CTA background, eyebrow labels, link/hover accent. A bright, slightly emerald growth-green that anchors the whole system.
- **Pure White** (`#ffffff`): Page background, card surfaces, signup/inquiry button fills on dark hero, on-green text.
- **Black** (`#000000`): Primary heading color, nav text. JANDI uses true black for headings rather than a tinted near-black.

### Ink & Dark
- **Ink Dark** (`#333333`): Secondary dark button background ("더 알아보기"), input text color.
- **Deepest Ink** (`#041911`): Near-black green-tinted text used on white pill buttons over green/hero backgrounds.
- **Footer Black** (`#181818`): Dark footer background section.

### Surface & Tint
- **Canvas** (`#ffffff`): Default surface.
- **Canvas Soft** (`#fafafc`): Cool near-white section background for alternating bands.
- **Tint Blue** (`#eaf6fc`): Light blue-tinted card/illustration surface for feature blocks.

### Neutral Text Scale
- **Body Gray** (`#a2a2a2`): Secondary descriptions, captions, footer links.
- **Subhead Gray** (`#c2c2c2`): Muted sub-headings and supporting titles.
- **Heading Black** (`#000000`): Primary headings and strong labels.
- **On-Primary** (`#ffffff`): Text on green CTA fills.

## 3. Typography Rules

### Font Family
- **Primary**: `Noto Sans`, with system sans fallback. Used for 100% of text — headings, body, UI, footer.
- **Weights**: 400 (body / nav / captions), 500 (buttons), 700 (headings / eyebrows / sub-section titles).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Noto Sans | 56px | 700 | 1.43 (80px) | Hero headline, white on dark/imagery |
| Section Heading | Noto Sans | 42px | 700 | 1.43 (60px) | Feature section titles, black |
| Sub-heading | Noto Sans | 24px | 700 | 1.58 (38px) | Card / sub-section heads |
| Body | Noto Sans | 16px | 400 | 1.00 | Standard reading text |
| Button | Noto Sans | 15px | 500 | 1.33 | Primary / secondary button labels |
| Nav Link | Noto Sans | 14px | 400 | 1.43 | Top-nav menu items |
| Caption | Noto Sans | 14px | 400 | 1.43 | Muted descriptions, metadata, footer links |
| Eyebrow | Noto Sans | 13px | 700 | 1.54 | Green eyebrow labels above headings |

### Principles
- **Bold-warm, not light-luxe**: JANDI commits to weight 700 for all headlines. Where foundry-driven sites whisper at weight 300, JANDI speaks clearly at 700 — friendly authority for a tool used by entire companies.
- **One typeface, three weights**: Noto Sans at 400 / 500 / 700 covers the whole site. No serif, no display face, no monospace.
- **Relaxed line-height**: Headlines run at ~1.43 line-height (80px on 56px, 60px on 42px), generous spacing tuned for Korean + Latin mixed text legibility.
- **Green eyebrows for wayfinding**: The 13px / 700 green eyebrow label is JANDI's signature small-type move — a colored orienting sprig above each section heading.
- **Gray descends, never competes**: Supporting copy steps down into `#a2a2a2` and `#c2c2c2` so the green accent and black headings own the contrast.

## 4. Component Stylings

### Buttons

**Login (Green Primary)**
- Background: `#00c473`
- Text: `#ffffff`
- Padding: 7px 14px
- Radius: 6px
- Border: `1px solid #00c473`
- Font: 14px Noto Sans weight 500
- Use: Top-nav primary CTA ("로그인")

**Secondary Dark**
- Background: `#333333`
- Text: `#ffffff`
- Padding: 5px 14px
- Radius: 6px
- Font: 15px Noto Sans weight 500
- Use: Secondary action ("더 알아보기")

**Signup / Inquiry (Light Pill on Hero)**
- Background: `#ffffff`
- Text: `#041911`
- Padding: 12px 30px
- Radius: 6px
- Font: 15px Noto Sans weight 500
- Use: High-contrast white button over green / dark hero ("회원가입", "도입문의")

### Cards & Containers
- Background: `#ffffff` (standard) or `#eaf6fc` (tinted feature block)
- Radius: 16px
- Shadow: `rgba(0,0,0,0.08) 0px 2px 16px 3px`
- Sit on `#fafafc` soft-canvas bands for gentle separation

### Badges / Eyebrows
- **Green Eyebrow**: `#00c473` text, transparent bg, 8px 16px padding, 4px radius, 13px weight 700 — orienting label above section headings

### Inputs & Forms
- Radius: 6px
- Text: `#333333`
- Placeholder: `#a2a2a2`
- Comfortable touch padding consistent with button scale

### Navigation
- Clean horizontal nav on white, brand logotype left-aligned
- Links: Noto Sans 14px weight 400, `#000000` text, green `#00c473` on hover/active
- Container padding 0 36px
- Green login CTA right-aligned

### Footer
- Background: `#181818` dark band
- Links: `#a2a2a2`, 14px Noto Sans weight 400

**Verified:** 2026-06-09 (live DOM inspect)
**Tier 1 sources:** https://www.jandi.com, https://www.tosslab.com

## 5. Layout Principles

### Spacing System
- Base unit: ~7-8px, scaling through 14px, 16px, 30px, 36px
- Button padding clusters around 7px / 14px / 30px horizontal — comfortable, generous tap zones
- Section rhythm built on large vertical bands alternating white and `#fafafc`

### Grid & Container
- Centered single-column hero with bold headline and a white pill CTA
- Feature sections use multi-column card grids on white / soft-canvas bands
- Tinted (`#eaf6fc`) illustration blocks break up the feature flow
- Nav container padded 0 36px horizontal, full-width sticky header

### Whitespace Philosophy
- **Calm and scannable**: JANDI uses generous whitespace and large bold headings so a whole company — not just designers — can scan the page instantly.
- **Alternating bands**: White and `#fafafc` sections create gentle rhythm without color noise.
- **Green as punctuation**: The only saturated color is the green; it appears as small eyebrows and CTAs, never as large fills, keeping the page airy.

### Border Radius Scale
- Small (4px): Eyebrow labels
- Control (6px): Buttons, inputs
- Card (16px): Feature cards, illustration blocks

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, bands, inline text |
| Card (Level 1) | `rgba(0,0,0,0.08) 0px 2px 16px 3px` | Feature cards, floating panels |

**Shadow Philosophy**: JANDI's elevation system is intentionally singular. One soft, low-opacity, evenly-spread shadow (`rgba(0,0,0,0.08) 0px 2px 16px 3px`) lifts cards a few millimeters off the canvas — no multi-layer stacks, no colored shadows, no dramatic depth. The result reads as calm and trustworthy: a productivity tool that prioritizes clarity over spectacle. Separation between sections is achieved primarily through the alternating white / `#fafafc` bands rather than shadow, reserving the single shadow for genuine card surfaces.

## 7. Do's and Don'ts

### Do
- Use JANDI Green (`#00c473`) as the single accent — CTAs, eyebrows, hover states
- Set all type in Noto Sans; weight 700 for headlines, 400 for body, 500 for buttons
- Use pure black (`#000000`) headings on white (`#ffffff`) / soft-white (`#fafafc`)
- Step supporting text down into grays (`#a2a2a2`, `#c2c2c2`) so green stays the accent
- Use the green eyebrow label (13px / 700) above section headings for wayfinding
- Use 16px radius on cards, 6px on buttons and inputs
- Apply the one soft card shadow (`rgba(0,0,0,0.08) 0px 2px 16px 3px`) for elevation
- Use white pill buttons (`#ffffff` bg, `#041911` text) on green / dark hero backgrounds

### Don't
- Don't introduce a second accent color — green is the only saturated hue
- Don't use corporate blue as a brand color — that's exactly what JANDI rejects
- Don't use light heading weights — JANDI headlines are bold (700), confident and friendly
- Don't stack multi-layer or colored shadows — one soft gray shadow only
- Don't use pill / fully-round buttons — controls stay at 6px radius
- Don't let supporting text compete with headings — keep it gray and recessive
- Don't mix multiple typefaces — Noto Sans carries the entire system
- Don't fill large areas with green — keep it to CTAs, eyebrows, and small accents

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, reduced heading sizes, stacked cards, hamburger nav |
| Tablet | 640-1024px | 2-column card grids, moderate padding |
| Desktop | 1024-1280px | Full layout, multi-column feature grids |
| Large Desktop | >1280px | Centered content with generous margins |

### Touch Targets
- Buttons use comfortable padding (7-12px vertical, 14-30px horizontal)
- Nav links at 14px with adequate spacing
- Green login CTA sized for thumb tapping

### Collapsing Strategy
- Hero: 56px display compresses toward ~32-40px on mobile, weight 700 maintained
- Navigation: horizontal links + green CTA collapse to hamburger toggle
- Feature cards: multi-column to 2-column to single stacked
- Soft-canvas bands maintain full-width treatment, reduce internal padding
- Section spacing compresses on smaller viewports while preserving band rhythm

### Image Behavior
- Tinted (`#eaf6fc`) illustration blocks maintain 16px radius across sizes
- Card shadows persist at all viewport widths
- Product screenshots scale within their card containers

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: JANDI Green (`#00c473`)
- CTA text: White (`#ffffff`)
- Background: White (`#ffffff`) / Soft (`#fafafc`)
- Heading text: Black (`#000000`)
- Body text: Gray (`#a2a2a2`)
- Subhead text: Light Gray (`#c2c2c2`)
- Tinted surface: Light Blue (`#eaf6fc`)
- Dark button: Ink (`#333333`)
- Hero pill text: Deepest Ink (`#041911`)
- Footer: Footer Black (`#181818`)

### Example Component Prompts
- "Create a hero on a green/dark imagery background. Headline at 56px Noto Sans weight 700, line-height 80px, white text. White pill CTA (#ffffff bg, #041911 text, 6px radius, 12px 30px padding, 15px weight 500) labeled '회원가입'."
- "Design a feature card: white background, 16px radius, shadow rgba(0,0,0,0.08) 0px 2px 16px 3px. Green eyebrow label above (13px Noto Sans weight 700, #00c473). Title at 24px weight 700 black, body at 14px weight 400 #a2a2a2."
- "Build a top nav: white sticky header, JANDI logo left, links in Noto Sans 14px weight 400 #000000 (green #00c473 on hover), green login button right (#00c473 bg, white text, 6px radius, 7px 14px padding)."
- "Create a tinted feature block: #eaf6fc background, 16px radius, on a #fafafc soft-canvas band. Bold 42px weight 700 black section heading with a green eyebrow above."

### Iteration Guide
1. Green (`#00c473`) is the only accent — apply it sparingly to CTAs, eyebrows, hovers
2. Noto Sans weight 700 for headings, 400 for body, 500 for buttons — no other faces
3. Headings are pure black (`#000000`); supporting text is gray (`#a2a2a2` / `#c2c2c2`)
4. Cards: 16px radius + the single soft shadow; buttons / inputs: 6px radius
5. Alternate white and `#fafafc` bands for section rhythm; use `#eaf6fc` for tinted blocks
6. On green/dark hero, use white pill buttons with `#041911` text for contrast
7. Keep depth flat — one shadow only, no colored or stacked shadows

---

## 10. Voice & Tone

JANDI's voice is warm, practical, and reassuring — the tone of a Korean SaaS that wants every team member, technical or not, to feel that work will go smoothly ("일이 술술 풀리는"). Copy is benefit-first and plain-spoken: it describes what the tool does for your team rather than boasting about technology. Korean is the primary language, friendly-formal (해요/합니다 register), with English product terms (AI, messenger, knowledge base) woven in naturally. CTAs are direct and low-pressure: "도입문의" (inquire about adoption), "회원가입" (sign up), "더 알아보기" (learn more).

| Context | Tone |
|---|---|
| Hero headlines | Warm, benefit-led. "AI로 일이 술술 풀리는 협업툴 잔디." Confident, never hyped. |
| Feature descriptions | Concrete capability + team benefit. Plain, scannable. |
| CTAs | Direct, low-pressure imperatives. "도입문의", "회원가입", "더 알아보기". |
| Customer stories | Trust-building, evidence-led. Real companies, real outcomes. |
| Pricing / inquiry | Clear, helpful, B2B-appropriate. Invites contact, never pushy. |

**Forbidden register.** Over-hyped superlatives, fear-based urgency, jargon-for-its-own-sake. JANDI sells calm productivity, not disruption.

## 11. Brand Narrative

JANDI (잔디) is a business-collaboration messenger developed by **TossLab (토스랩)**, a Korean SaaS company. The name means "grass / lawn" in Korean — a deliberate metaphor for a workspace where teams grow together, captured in the fresh JANDI Green (`#00c473`) that defines the brand. Positioned as a 협업툴 (collaboration tool) for Korean and Asian businesses, JANDI combines team messaging, topic-based chat rooms, file sharing, and — increasingly — AI features (the "Sprinkler" AI assistant, conversation summaries, knowledge base) to help whole organizations work more smoothly.

JANDI's design rejects the cold institutional blue of legacy enterprise software in favor of an approachable, growth-coded green and friendly bold typography. The brand's promise is right in the hero: "일이 술술 풀리는" — work that flows easily. Everything in the visual system serves that promise: calm whitespace, one decisive accent color, bold-but-warm Noto Sans headlines, and restrained flat depth that keeps the focus on getting work done.

## 12. Principles

1. **One green, used sparingly.** JANDI Green (`#00c473`) is the entire accent system. Restraint makes it powerful — it appears as CTAs and eyebrows, never as large fills.
2. **Bold-but-warm typography.** Weight-700 Noto Sans headlines are friendly and confident, not aggressive. Approachability is a feature.
3. **Calm over spectacle.** One soft shadow, flat bands, generous whitespace. A productivity tool earns trust by being clear, not flashy.
4. **Everyone is the user.** The whole company uses JANDI, so the design optimizes for instant scannability by non-designers — large headings, plain copy, gray supporting text.
5. **Growth as metaphor.** The "lawn" name and green color encode the brand's belief that good tools help teams grow together.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable JANDI user segments (Korean SMB teams, operations leads, non-technical office staff), not individual people.*

**Ji-woo Kang, 34, Seoul.** Operations manager at a 60-person Korean manufacturing company. Chose JANDI because the whole team — including older staff uncomfortable with foreign tools — could pick it up in a day. Values the Korean-language support and the calm, uncluttered interface.

**Min-seok Park, 41, Busan.** Team lead at a mid-market logistics firm. Uses JANDI's topic-based chat rooms to keep projects organized and the AI summaries to catch up after meetings. Trusts the brand's evidence-led customer stories.

**Hye-jin Lee, 29, Seongnam.** Marketing coordinator at a B2B SaaS startup. Appreciates that JANDI feels friendly and approachable rather than corporate, and that its green-accented design is pleasant to look at all day.

## 14. States

| State | Treatment |
|---|---|
| **Empty** | White canvas, single plain-Korean line in black (`#000000`) at 16px Noto Sans, one green (`#00c473`) CTA. Honest, calm, no clutter. |
| **Loading** | Soft skeleton blocks in light gray at final dimensions; gentle shimmer. No spinner spectacle. |
| **Error** | Inline message in plain Korean explaining what happened and the next step. Calm tone, no alarm. |
| **Success** | Brief green (`#00c473`) confirmation, sentence-case past tense. No exclamation, no emoji. |
| **Disabled** | Reduced opacity on surface and text together; green actions fade rather than switch to gray, preserving brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, button press |
| `motion-standard` | 200ms | Dropdowns, card reveals, section transitions |
| `motion-slow` | 320ms | Page-level transitions, hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving panels, dropdowns |

**Signature motions.**

1. **Card hover lift.** Feature cards raise gently via the single soft shadow on hover using `motion-fast / ease-standard` — calm, never bouncy.
2. **Green CTA hover.** Login / inquiry buttons shift hue subtly on hover at `motion-fast`. No scale jump, no overshoot.
3. **Section reveal.** Feature bands fade up softly on scroll with `motion-standard / ease-enter`, matching the calm, trustworthy register.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, transitions collapse to instant. The product stays fully functional; calm clarity is the priority over delight.

<!--
OmD v0.1 Sources — JANDI

Tier 1 live inspect (2026-06-09): https://www.jandi.com via playwright getComputedStyle (live DOM).
Harvested: JANDI Green #00c473 (rgb 0,196,115) login CTA bg + eyebrow + border; #333333 dark
secondary button; #041911 deepest ink on white hero pills; #000000 headings; #ffffff / #fafafc
canvas; #eaf6fc tinted card; #a2a2a2 body gray; #c2c2c2 subhead gray; #181818 footer; Noto Sans
700 headlines (56px hero / 42px section / 24px sub) and 400 body; card shadow
rgba(0,0,0,0.08) 0px 2px 16px 3px; 16px card radius / 6px control radius.

Brand context (잔디 / JANDI by TossLab — Korean business-collaboration messenger): publicly
documented; TossLab is the developer (https://www.tosslab.com). Personas (§13) are fictional
archetypes informed by publicly observable JANDI user segments, not real individuals.
Interpretive claims (green-as-growth, calm-over-spectacle) are editorial readings connecting
JANDI's stated positioning to its observed design system.
-->
