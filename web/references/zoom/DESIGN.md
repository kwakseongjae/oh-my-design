---
id: zoom
name: Zoom
country: US
category: saas
homepage: "https://www.zoom.com"
primary_color: "#0b5cff"
logo:
  type: simpleicons
  slug: zoom
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = live CTA blue (#0b5cff = rgb(11,92,255)); dark navy (#00053d) for headings/brand sections. Two custom fonts: Happy Face Semi Bold (display) + Almaden Sans (UI). 12px border-radius on buttons."
  colors:
    primary: "#0b5cff"
    primary-hover: "#0d6bde"
    brand-dark: "#00053d"
    canvas: "#ffffff"
    surface-blue: "#f3f8ff"
    surface-tint: "#e6f0ff"
    border-light: "#d1dee2"
    heading: "#000000"
    body: "#222325"
    body-alt: "#232333"
    muted: "#696b6e"
    on-primary: "#ffffff"
    hairline: "#dfe3e8"
  typography:
    family: { display: "Happy Face Semi Bold", ui: "Almaden Sans", fallback: "Helvetica, Arial, sans-serif" }
    display-hero: { size: 54, weight: 500, lineHeight: 1.12, use: "Hero headline — Happy Face Semi Bold" }
    display-h2: { size: 46, weight: 400, lineHeight: 1.14, tracking: -1.4, use: "Section headings — Happy Face Semi Bold, weight 400 or 500" }
    display-h3: { size: 32, weight: 500, lineHeight: 1.20, use: "Feature card headings — Happy Face Semi Bold" }
    ui-h2: { size: 20, weight: 600, lineHeight: 1.20, use: "Subheadings in UI — Almaden Sans" }
    ui-h3: { size: 20, weight: 500, lineHeight: 1.15, tracking: -0.4, use: "News card titles — Almaden Sans" }
    body: { size: 16, weight: 400, lineHeight: 1.50, use: "Body copy — Almaden Sans" }
    nav: { size: 14, weight: 500, lineHeight: 1.40, use: "Nav links, buttons — Almaden Sans" }
    caption: { size: 14, weight: 400, lineHeight: 1.50, use: "Labels, captions — Almaden Sans" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 48 }
  rounded: { sm: 6, md: 8, lg: 12, full: 9999 }
  shadow:
    card: "0 2px 8px rgba(0,0,0,0.08)"
    elevated: "0 4px 16px rgba(0,0,0,0.12)"
  components:
    button-primary: { type: button, bg: "#0b5cff", fg: "#ffffff", radius: "12px", padding: "13px 14px", height: "48px", font: "16px / 500 Almaden Sans", border: "1px solid #0b5cff", use: "Primary CTA — Buy Now, Sign Up Free" }
    button-secondary: { type: button, bg: "#f3f8ff", fg: "#333333", radius: "12px", padding: "13px 14px", height: "48px", font: "16px / 500 Almaden Sans", border: "1px solid #d1dee2", use: "Secondary CTA — Sign Up Free (outline variant), Contact Sales" }
    button-ghost-nav: { type: button, bg: "#0b5cff", fg: "#ffffff", radius: "12px", padding: "4px 20px", height: "46px", font: "14px / 600 Almaden Sans", use: "Nav-bar primary CTA — Sign Up Free on homepage header" }
    button-contact: { type: button, bg: "#e6f0ff", fg: "#00053d", radius: "12px", padding: "4px 20px", height: "46px", font: "14px / 600 Almaden Sans", border: "1px solid #e6f0ff", use: "Nav-bar secondary — Contact Sales" }
    nav-link: { type: tab, fg: "#ffffff", font: "14px / 500 Almaden Sans", radius: "12px", use: "Top nav on dark hero", active: "active = white text with subtle bg" }
    card-feature: { type: card, bg: "#ffffff", fg: "#000000", radius: "8px", use: "Feature / product card, 1px #dfe3e8 border" }
    card-tinted: { type: card, bg: "#f3f8ff", fg: "#00053d", radius: "8px", use: "Tinted info card / pricing tier card" }
    badge-pill: { type: badge, bg: "#e6f0ff", fg: "#0b5cff", radius: "9999px", font: "12px / 500 Almaden Sans", use: "Product label pill, category tag" }
    input-default: { type: input, bg: "#ffffff", fg: "#222325", border: "1px solid #dfe3e8", radius: "8px", font: "14px / 400 Almaden Sans", use: "Search / form input" }
    toggle-on: { type: toggle, bg: "#0b5cff", fg: "#ffffff", radius: "9999px", use: "Feature comparison toggle, on state" }
  components_harvested: true
---

# Design System Inspiration of Zoom

## 1. Visual Theme & Atmosphere

Zoom's website communicates confidence and clarity through a dual-surface palette — a deep, immersive midnight navy (`#00053d`) hero paired with a clean white (`#ffffff`) body — that creates a dramatic first impression before settling into an airy, information-dense product experience. The brand's signature blue (`#0b5cff`) cuts across both surfaces as the single interactive action color, so the eye never loses the "do this" signal whether it's reading white text on navy or scanning product cards on white. The overall feeling is of enterprise software that has been carefully humanized: direct, capable, and built for real work.

Two custom typefaces do the heavy lifting. **Happy Face Semi Bold** appears on every headline — a geometric display face with rounded, approachable letterforms that soften what could otherwise feel purely corporate. At 54px on the hero, weight 500, it reads as confident without aggression. **Almaden Sans** handles all UI, navigation, body copy, and buttons — a workmanlike humanist sans with excellent legibility at small sizes and strong multilingual support (Noto fallbacks for JP, KR, SC, TC). The combination feels intentional: display type that has personality, UI type that gets out of the way.

Zoom's depth vocabulary is restrained. Cards use thin `#dfe3e8` hairline borders and subtle shadow lift rather than heavy elevation. Tinted surfaces (`#f3f8ff`, `#e6f0ff`) segment content into breathable zones. Border-radius lands at 12px on buttons and interactive elements, 8px on cards — generous enough to feel modern and friendly, conservative enough to signal enterprise reliability. The overall system reads as polished SaaS: familiar, trustworthy, and never flashy.

**Key Characteristics:**
- Dual custom fonts: Happy Face Semi Bold (display) + Almaden Sans (UI/body/nav)
- Signature Zoom Blue (`#0b5cff`) as the single primary interactive color
- Deep midnight navy (`#00053d`) hero canvas — immersive brand entry point
- 12px button radius — rounded but not pill; 8px for cards
- Thin hairline borders (`#dfe3e8`) and soft shadows for depth, no heavy elevation
- Tinted blue-white surfaces (`#f3f8ff`, `#e6f0ff`) for content zone separation
- Strong typographic hierarchy: 54px display, 46px section, 32px feature, 20px sub

## 2. Color Palette & Roles

### Primary
- **Zoom Blue** (`#0b5cff`): Primary brand and CTA color. Used on primary buttons ("Buy Now", "Sign Up Free"), interactive links, and accent elements. The defining visual signal throughout the product.
- **Primary Hover** (`#0d6bde`): Slightly darker Zoom Blue for button hover states on primary CTAs. Maintains the blue family without jarring contrast shift.
- **Brand Dark** (`#00053d`): Deep midnight navy for the hero section background, dark feature surfaces, and high-impact brand moments. Also the primary heading foreground on white surfaces.

### Surface
- **Canvas** (`#ffffff`): Default page and card background. The workhorse surface.
- **Surface Blue** (`#f3f8ff`): Cool blue-tinted surface for tinted content cards, pricing tier backgrounds, and segmented content zones.
- **Surface Tint** (`#e6f0ff`): Slightly more saturated blue tint for secondary button fill (Contact Sales variant) and badge/pill backgrounds.
- **Border Light** (`#d1dee2`): Standard border color for secondary button outlines and dividers.
- **Hairline** (`#dfe3e8`): Thin card and container border; the primary separation device in the white-surface sections.

### Text
- **Heading** (`#000000`): Pure black for some heading contexts; also `#00053d` navy for headings inside product sections.
- **Body** (`#222325`): Near-black for primary body copy — warm, readable, not pure black.
- **Body Alt** (`#232333`): Alternate near-black for body text in some contexts, nearly identical density to `#222325`.
- **Muted** (`#696b6e`): Muted mid-grey for secondary labels, captions, and metadata.

### Interaction
- **On-Primary** (`#ffffff`): White text on all blue CTAs and the dark nav surface.

## 3. Typography Rules

### Font Families
- **Display**: `Happy Face Semi Bold` — custom geometric display face; fallback Helvetica, Arial.
- **UI / Body**: `Almaden Sans` — custom humanist sans; fallbacks Helvetica, Noto Sans JP/KR/SC/TC, Arial.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero Headline | Happy Face Semi Bold | 54px | 500 | 1.12 (60px) | normal | Full-bleed hero on navy |
| Section H2 | Happy Face Semi Bold | 46px | 400–500 | 1.14 (52px) | -1.4px (some) | Feature sections on white |
| Feature H3 | Happy Face Semi Bold | 32px | 500 | 1.20 (38px) | normal | Card headlines |
| UI Subheading | Almaden Sans | 20px | 600 | 1.20 | normal | Small section labels |
| News / Card H3 | Almaden Sans | 20px | 500 | 1.15 | -0.4px | Blog/news card titles |
| Body | Almaden Sans | 16px | 400 | 1.50 | normal | Standard reading copy |
| Nav / Button | Almaden Sans | 14px | 500 | 1.40 | normal | Navigation, CTA labels |
| Caption / Label | Almaden Sans | 14px | 400 | 1.50 | normal | Supporting labels |
| Pricing H2 | Happy Display | 32px | 400 | auto | normal | Pricing page comparison heading |

### Principles
- **Display for story, Almaden for function**: Happy Face Semi Bold handles headline moments that set emotional tone; Almaden Sans handles everything users interact with or read for information.
- **Weight restraint**: Display runs at weight 500 — confident but not aggressive. UI labels run at weight 500; body at 400. The system avoids weight 700 for marketing text.
- **Negative tracking at large sizes**: Section H2 at 46px uses -1.4px letter-spacing for tighter, more authoritative headline blocks.
- **Multilingual foundation**: Almaden Sans declares Noto Sans fallbacks for JP/KR/SC/TC, reflecting Zoom's global enterprise user base.

## 4. Component Stylings

### Buttons

**Primary (Buy Now / Sign Up Free)**
- Background: `#0b5cff`
- Text: `#ffffff`
- Radius: 12px
- Padding: 13px 14px
- Height: 48px
- Font: 16px Almaden Sans weight 500
- Border: 1px solid `#0b5cff`
- Hover: `#0d6bde` background
- Use: Primary transactional CTAs on pricing and product pages

**Secondary (Sign Up Free outline / Contact Sales)**
- Background: `#f3f8ff`
- Text: `#333333`
- Radius: 12px
- Padding: 13px 14px
- Height: 48px
- Font: 16px Almaden Sans weight 500
- Border: 1px solid `#d1dee2`
- Use: Secondary tier CTAs alongside primary on pricing cards

**Nav Primary (Sign Up Free — header)**
- Background: `#0b5cff`
- Text: `#ffffff`
- Radius: 12px
- Padding: 4px 20px
- Height: 46px
- Font: 14px Almaden Sans weight 600
- Use: Primary CTA in the sticky navigation bar

**Nav Secondary (Contact Sales — header)**
- Background: `#e6f0ff`
- Text: `#00053d`
- Radius: 12px
- Padding: 4px 20px
- Height: 46px
- Font: 14px Almaden Sans weight 600
- Border: 1px solid `#e6f0ff`
- Use: Secondary CTA in the navigation bar

### Inputs & Forms

**Default Input**
- Background: `#ffffff`
- Border: 1px solid `#dfe3e8`
- Radius: 8px
- Text: `#222325`
- Font: 14px Almaden Sans weight 400
- Use: Search and form inputs across product surfaces

### Cards & Containers

**Feature Card**
- Background: `#ffffff`
- Border: 1px solid `#dfe3e8`
- Radius: 8px
- Use: Product feature cards and content cards on white sections

**Tinted Card**
- Background: `#f3f8ff`
- Text: `#00053d`
- Radius: 8px
- Use: Pricing tier cards, info panels with blue-tinted surface

### Badges

**Blue Pill Badge**
- Background: `#e6f0ff`
- Text: `#0b5cff`
- Radius: 9999px
- Font: 12px Almaden Sans weight 500
- Use: Product label pills, category tags (e.g., "AI", "New")

### Navigation

**Top Nav (Dark Hero)**
- Background: transparent (over `#00053d` hero)
- Text: `#ffffff`
- Font: 14px Almaden Sans weight 500
- Radius: 12px on dropdown containers
- Height: ~56px header
- Use: Products, AI, Solutions, Pricing, Sign In, Support nav links

**Dropdown Sub-items**
- Radius: 8px
- Font: 14px Almaden Sans weight 500
- Use: Sub-navigation items inside product mega-menus (Meet, Phone, Team Chat, etc.)

### Toggle

**Feature Toggle (On)**
- Background: `#0b5cff`
- Text: `#ffffff`
- Radius: 9999px
- Use: Feature comparison toggles in pricing page (Annual/Monthly billing switch)

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.zoom.com/ (homepage, live DOM), https://zoom.us/pricing (pricing page, live DOM)
**Tier 2 sources:** getdesign.md/zoom — no entry found; styles.refero.design/?q=zoom — no Zoom match in results
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px
- Key surfaces: hero uses generous vertical padding; product sections alternate white / tinted backgrounds

### Grid & Container
- Max content width: approximately 1200px centered
- Hero: full-width dark navy (`#00053d`) with centered headline and sub-copy
- Product feature sections: alternating white and `#f3f8ff` tinted full-width bands
- Pricing: 3-4 column card grid on desktop

### Whitespace Philosophy
- **Generous above-the-fold**: The hero lavishes vertical space around a single H1 and one CTA pair — makes the product feel premium and focused.
- **Dense-but-breathable feature rows**: Product feature sections pack information into responsive grids while using tinted surfaces to separate conceptual groupings.
- **Flat surface separation**: Content zones divide by background tint or hairline rather than shadow depth — clean, enterprise-grade.

### Border Radius Scale
- Standard (8px): Cards, feature containers, inputs
- Interactive (12px): Buttons, dropdown panels, nav items
- Pill (9999px): Badges, toggles, small status indicators

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, tinted surface cards |
| Hairline (Level 1) | `1px solid #dfe3e8` border | White content cards, input fields |
| Ambient (Level 2) | `0 2px 8px rgba(0,0,0,0.08)` | Card hover lift, feature panels |
| Elevated (Level 3) | `0 4px 16px rgba(0,0,0,0.12)` | Dropdowns, popover menus |

**Shadow Philosophy**: Zoom's shadow system is minimal and neutral — no brand-colored tint in shadows, unlike Stripe. Depth comes primarily from surface color contrast (white vs `#f3f8ff` vs `#00053d`) and hairline borders. The limited shadow vocabulary keeps the enterprise product feeling clean and performant.

## 7. Do's and Don'ts

### Do
- Use Happy Face Semi Bold for all display headlines — it is Zoom's visual personality
- Use `#0b5cff` Zoom Blue as the single primary action color across all surfaces
- Apply 12px border-radius on all button and interactive elements — the rounded-square feel is intentional
- Use the dark navy (`#00053d`) for hero and immersive brand sections
- Separate content zones with `#f3f8ff` tinted surfaces and `#dfe3e8` hairlines
- Use Almaden Sans for all UI text, navigation, labels, and body copy
- Apply tight negative tracking (-1.4px) on large 46px section headings
- Pair primary blue button with secondary tinted button for pricing CTA pairs

### Don't
- Don't substitute Arial or Helvetica for Happy Face in headline contexts — the display font is the brand
- Don't use multiple accent colors for interactive elements — Zoom Blue is the only interactive color
- Don't use pill-shaped (>20px radius) buttons — 12px is the system's maximum interactive radius
- Don't apply heavy drop shadows — Zoom uses hairline borders and subtle lift only
- Don't use weight 700 for marketing headlines — weight 500 is the display maximum
- Don't place `#0b5cff` buttons on navy hero sections without ensuring `#ffffff` text contrast
- Don't use warm accent colors (orange, yellow, red) for CTAs — the palette is cool and restrained
- Don't skip Almaden Sans fallbacks for multilingual contexts — Noto Sans coverage is intentional

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, nav collapses to hamburger |
| Tablet | 640-1024px | 2-column feature grids, moderate padding |
| Desktop | 1024-1280px | Full 3-column layout, expanded nav |
| Large Desktop | >1280px | Centered content, generous margins |

### Touch Targets
- Primary buttons: 48px height with 14px padding — comfortable tap targets
- Nav links: 36px minimum hit area
- Toggle switches: 32px+ with pill shape for clear affordance

### Collapsing Strategy
- Hero headline: 54px → scales down with viewport, weight 500 maintained
- Navigation: horizontal mega-menu → hamburger with off-canvas drawer
- Pricing table: 4-column → 2-column → stacked single card
- Feature bands: multi-column grid → stacked single column
- Tinted/white alternating sections: full-width at all breakpoints

### Image Behavior
- Product screenshots (meeting UI, dashboard) maintain consistent card treatment across breakpoints
- Dark hero sections maintain full-width at all sizes; internal padding reduces on mobile
- Cards maintain 8px radius across all viewport widths

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Zoom Blue (`#0b5cff`)
- CTA Hover: `#0d6bde`
- Dark Hero / Brand: Midnight Navy (`#00053d`)
- Background: Canvas White (`#ffffff`)
- Tinted Surface: `#f3f8ff`
- Secondary Button Fill: Surface Tint (`#e6f0ff`)
- Heading / Body: Near-Black (`#222325`)
- Muted Text: `#696b6e`
- Border: Hairline (`#dfe3e8`)
- Secondary Button Border: `#d1dee2`

### Example Component Prompts
- "Create a hero on `#00053d` navy. Headline at 54px Happy Face Semi Bold weight 500, color #ffffff, line-height 1.12. Sub-copy at 16px Almaden Sans weight 400, rgba(255,255,255,0.85). Two CTAs: Sign Up Free (#0b5cff bg, white text, 12px radius, 46px h, 14px Almaden weight 600) + Contact Sales (#e6f0ff bg, #00053d text, same geometry)."
- "Design a pricing card: #f3f8ff background, 8px radius, 1px #dfe3e8 border. Tier name at 20px Almaden weight 600, #00053d. Price at 32px Happy Face weight 500, #000000. Two buttons: Buy Now (#0b5cff, white, 12px radius, 48px h) + Sign Up Free (#f3f8ff, #333333, 12px radius, 1px #d1dee2 border)."
- "Build a feature section: white #ffffff background. Section heading at 46px Happy Face weight 500, #00053d, -1.4px tracking. Feature cards: white bg, 8px radius, 1px #dfe3e8 border, 8px shadow. Product label pill badge: #e6f0ff bg, #0b5cff text, 9999px radius."
- "Create top nav: fixed/sticky, white bg on scroll. Almaden Sans 14px weight 500 for links, #000000 text. Sign Up Free CTA: #0b5cff bg, white text, 12px radius. Contact Sales: #e6f0ff bg, #00053d text, 12px radius. Logo link uses 24px Almaden weight 700 in #0b5cff."

### Iteration Guide
1. Always pair Happy Face Semi Bold display with Almaden Sans UI — never swap roles
2. One blue (`#0b5cff`) for all interactive elements; dark navy (`#00053d`) is structural/brand only
3. Button geometry: 12px radius, 48px height for large, 36-38px for nav-bar size
4. Card geometry: 8px radius, 1px `#dfe3e8` hairline border
5. Section separation via background tint (`#f3f8ff`) not shadow or border
6. Negative tracking (-1.4px) on 46px+ headings; normal tracking below that
7. Pricing CTAs always come in pairs: primary blue + secondary tinted

---

## 10. Voice & Tone

Zoom's voice is **direct, inclusive, and quietly optimistic** — the voice of a platform that believes work is better when people can connect easily. Copy is conversational without being casual, confident without being arrogant. The hero headline "Find out what's possible when work connects" sets the register: benefit-framed, present-tense, inviting rather than commanding. Feature copy leads with what users gain ("Your new AI note taker") not what the product does. CTA labels are short and concrete: "Sign Up Free", "Buy Now", "Contact Sales".

| Context | Tone |
|---|---|
| Hero headlines | Aspirational, connection-framed. "Find out what's possible when work connects." |
| Feature section headers | Direct, benefit-first. "One platform. Endless ways to work together." |
| Product feature names | Clear nouns. "My Notes", "AI Companion", "Zoom Phone". |
| CTAs | Short, concrete imperatives. "Sign Up Free", "Buy Now", "Contact Sales". |
| Pricing | Transparent and direct. No "limited time" urgency. |
| Trust / security copy | Calm, factual. "Trusted by millions." States facts over claims. |
| News / press | Journalistic brevity. Headlines summarize the actual news event. |

**Voice samples (verbatim from live site):**
- "Find out what's possible when work connects" — hero H1 *(verified live 2026-06-22)*
- "One platform. Endless ways to work together." — section H2 *(verified live 2026-06-22)*
- "Trusted by millions. Built for you." — section H2 *(verified live 2026-06-22)*
- "Businesses achieve more with Zoom" — section H2 *(verified live 2026-06-22)*

**Forbidden register**: enterprise jargon ("synergize", "leverage", "best-in-class"), aggressive urgency ("Act now!", countdown timers on standard pricing), tech buzzword stacking, anything that makes video calls feel complex.

## 11. Brand Narrative

Zoom was founded in **2011** by **Eric S. Yuan**, a Chinese-American engineer and former VP of Engineering at Cisco's WebEx division. Yuan left WebEx after growing frustrated with what he saw as an overly complex, customer-unfriendly video conferencing platform. His founding vision was simple and radical: build a video meeting product that works so reliably, at such quality, that no one needs to think about the technology — just the conversation. Zoom launched its cloud-based platform in **2013** and went public on Nasdaq in **2019** (ticker: ZM).

Zoom's breakout moment came during the 2020 COVID-19 pandemic, when distributed work became mandatory and the product became the default verb for video calling globally — "to Zoom" entered everyday language in dozens of languages. At peak pandemic, Zoom hosted more daily meeting participants than it had in entire previous years combined. The company expanded beyond meetings into a full communications stack (Zoom Phone, Zoom Chat, Zoom Events, Zoom Contact Center) and rebranded its core product as **Zoom Workplace** in 2024, positioning itself as the AI-powered hub for hybrid work.

What Zoom refuses: over-engineered complexity in the meeting experience, fragmentation of communication tools, and the enterprise assumption that reliability requires a procurement cycle. What it embraces: a single platform that spans meetings, phone, chat, and AI assistant — with an AI Companion that doesn't cost extra on paid plans, a quiet but significant commitment to democratizing enterprise AI.

Eric Yuan's public persona — accessible, direct, frequently posting on LinkedIn about remote work challenges — mirrors the brand's communication style. The company's Emmy win for Engineering, Science & Technology in 2023 signals that beneath the consumer-friendly surface is serious infrastructure engineering.

## 12. Principles

1. **Reliability first.** Before features, before design, the connection must work. *UI implication:* error states are informative, not apologetic; retry actions are immediately visible; skeleton loading maintains layout stability to communicate "this is loading, not broken."
2. **Simplicity at every level.** Yuan left WebEx because complexity wasn't neutral — it was the product killing trust. *UI implication:* primary actions are never buried in dropdowns; the most important CTA is always the most visually prominent element.
3. **One platform, not a suite.** Meetings, phone, chat, and AI in one place reduces context-switching. *UI implication:* navigation consistently surfaces all product areas; cross-product handoffs feel seamless, not siloed.
4. **AI as a quiet multiplier.** AI Companion surfaces in meeting summaries, note-taking, and conversation intelligence — always assistive, never in the way. *UI implication:* AI features are integrated into existing workflows, not launched as separate modal experiences.
5. **Inclusion by design.** From closed captions to multi-language support to accessibility overlays, Zoom's stated commitment ("technology for all") shows up in feature investment. *UI implication:* accessibility is a first-class feature, not an afterthought; ARIA labels, keyboard navigation, and reduced-motion support are not optional.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Zoom user segments (remote workers, enterprise IT, educators, event organizers), not individual people.*

**Priya Sharma, 34, Bangalore.** Product Manager at a US-headquartered SaaS company, working fully remote with a distributed team across three time zones. Runs 12–15 Zoom calls per week. Values AI Companion meeting summaries because they let her skip the half of meetings she's not the decision-maker in. Her frustration: when the connection degrades mid-demo and she loses the room's trust in the product she's demoing.

**Marcus Thompson, 58, Chicago.** IT Director at a regional hospital system. Selected Zoom over Microsoft Teams because of reliability metrics and the ability to run Zoom Phone through a single vendor contract. His mental model is plumbing: it either works or he gets calls at 2am. He cares about the admin console, not the meeting UI.

**Yuki Tanaka, 26, Tokyo.** Customer Success Manager at a Japanese SaaS startup serving global clients. Zoom's Noto Sans JP support and Japanese-language AI Companion are deciding factors over native competitors. She notices when font rendering looks wrong — it signals that a product wasn't built with her market in mind.

**David Kim, 45, Austin, TX.** Co-founder and CEO of a 30-person remote-first startup. Uses Zoom Workplace as the company's entire communications stack. Appreciates that AI Companion comes with the paid plan — it makes a small team look like a larger one. Would switch providers if the monthly bill required a conversation with a sales rep.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no upcoming meetings)** | Canvas White (`#ffffff`) surface. Single line in Body (`#222325`): "No upcoming meetings." One Zoom Blue CTA to schedule or join. No illustration required. |
| **Empty (no search results)** | Muted text (`#696b6e`): "No results for '[query]'." Suggestion link in Zoom Blue. Clean and non-alarming. |
| **Loading (meeting join)** | Full-screen `#00053d` navy with centered Zoom logo mark and a subtle progress indicator in `#0b5cff`. Maintains brand immersion during the most critical transition. |
| **Loading (content panel)** | Skeleton blocks on `#ffffff` at final card dimensions, 8px radius. Hairline border shimmer. No brand-colored shadows — neutral shimmer pulse. |
| **Error (connection failed)** | Inline alert with a plain-language description of what failed and a concrete retry action. Never "Something went wrong" alone — always the next step. |
| **Error (form validation)** | Field-level message below the input in `#696b6e` muted text; the border shifts to a warning treatment. Describes what is invalid. |
| **Error (payment failed, billing)** | Structured: error type + one-sentence plain explanation + link to billing help. Professional tone, no alarm. |
| **Success (meeting recorded)** | Brief toast notification at top of screen, 3-second auto-dismiss. "Meeting recorded." Past tense, sentence case. No emoji. |
| **Success (plan upgraded)** | Inline confirmation in the billing section. Next-step link to explore new features. Calm, not celebratory. |
| **Skeleton** | `#ffffff` + `#f3f8ff` blocks at final layout dimensions, 8px radius. Neutral shimmer pulse consistent with the non-shadowed system. |
| **Disabled** | Reduced opacity on text and background together. Blue actions fade to `rgba(11,92,255,0.4)` rather than switching to grey — preserves brand color read. |
| **AI Processing** | Subtle animated indicator in Zoom Blue within the AI Companion panel. Non-blocking — content remains accessible while AI generates. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Focus rings, selection ticks, immediate state commits |
| `motion-fast` | 120ms | Button hover, nav link highlight, toggle switch |
| `motion-standard` | 200ms | Dropdown open, card hover lift, panel reveal |
| `motion-slow` | 320ms | Page section transitions, mega-menu open, modal entrance |
| `motion-ambient` | 600ms+ | AI Companion loading pulse, subtle background animations |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, panels, modals |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals — panels closing, tooltips |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Bidirectional — toggles, tabs, accordion |

**Motion rules**: Motion serves communication, not delight. Dropdown menus open with `ease-enter` at `motion-standard` — fast enough to feel responsive, slow enough that the spatial relationship is legible. Hover states on buttons use `motion-fast` so the interactivity confirmation is near-instant. The AI Companion's ambient loading pulse is the one place where slower, looping motion lives — it signals "working" without blocking or alarming. Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`; the product remains fully functional and the AI pulse halts.

**Signature motion**:
1. **Meeting join transition**: The full-screen navy (`#00053d`) loading screen fades out to the meeting grid at `motion-slow / ease-exit` — the transition from "anticipation" to "presence" is intentionally cinematic.
2. **Pricing toggle (Annual/Monthly)**: Billing period toggle animates the thumb at `motion-standard / ease-standard`, and prices cross-fade simultaneously at the same duration — the linked animation makes the relationship between the toggle and the price legible.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on https://www.zoom.com/ and https://zoom.us/pricing.
All visual token claims (colors, fonts, radii, sizes) derive from this live inspection.

Voice samples (§10) are verbatim from the live homepage (hero H1, section H2 text verified 2026-06-22).

Brand narrative (§11): Eric Yuan, founding story, WebEx background, 2013 launch, 2019 IPO, pandemic growth, Zoom Workplace rebrand — widely documented public facts. Emmy win is public record.

Personas (§13) are fictional archetypes informed by publicly observable Zoom user segments. Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "verb entered everyday language", "plumbing mental model", "quiet multiplier") are editorial readings connecting Zoom's observed design to its positioning, not directly sourced Zoom statements.
-->
