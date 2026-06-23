---
id: liner
name: Liner
display_name_kr: 라이너
country: KR
category: ai
homepage: "https://liner.com"
primary_color: "#197b2e"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=liner.com&sz=128"
verified: "2026-06-22"
added: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = Liner Green CTA (#197b2e); dark forest heading (#14371b); near-black body (#1e1e1f); muted grey (#6d6d70 at 80% opacity); active-tab mint tint (#edf3ed). Display font = Flare (custom serif). UI font = Pretendard Variable / Pretendard JP Variable."
  colors:
    primary: "#197b2e"
    primary-dark: "#14371b"
    primary-tint: "#edf3ed"
    ink: "#1e1e1f"
    muted: "#6d6d70"
    canvas: "#ffffff"
    surface: "#f9f9fa"
    surface-alt: "#f6f6f7"
    on-primary: "#ffffff"
    warning: "#fe8f16"
  typography:
    family: { display: "Flare", body: "Pretendard Variable", ui: "Pretendard JP Variable" }
    hero-display: { size: 54, weight: 400, lineHeight: 1.1, use: "Hero display headline — Flare serif" }
    section:      { size: 42, weight: 400, lineHeight: 1.19, use: "Section heading — Flare serif" }
    page-title:   { size: 34, weight: 400, lineHeight: 1.21, use: "Page title (pricing H1) — Flare serif" }
    h3:           { size: 17, weight: 400, lineHeight: 1.35, use: "Feature card heading — Pretendard JP Variable" }
    nav:          { size: 16, weight: 400, lineHeight: 1.25, use: "Nav links — Pretendard JP Variable" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Body copy — Pretendard JP Variable" }
    button:       { size: 15, weight: 500, lineHeight: 1.33, use: "Button labels — Pretendard Variable" }
    caption:      { size: 14, weight: 400, lineHeight: 1.29, use: "Caption and dropdown text — Pretendard Variable" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 40 }
  rounded: { sm: 8, md: 12, lg: 200, full: 9999 }
  shadow:
    none: "none"
    subtle: "0 1px 4px rgba(0,0,0,0.08)"
  components:
    button-primary: { type: button, bg: "#197b2e", fg: "#ffffff", radius: "8px", height: "40px", font: "15px / 500 Pretendard Variable", use: "Primary CTA — Get started / Get Pro / Get Max" }
    button-outline: { type: button, bg: "#ffffff", fg: "#1e1e1f", border: "1px solid rgba(109,109,112,0.24)", radius: "8px", height: "40px", font: "15px / 500 Pretendard Variable", use: "Secondary free-tier CTA — Start for free" }
    button-ghost-green: { type: button, bg: "transparent", fg: "#197b2e", border: "1px solid #197b2e", radius: "8px", height: "40px", font: "15px / 500 Pretendard Variable", use: "Enterprise / contact CTA — Contact us" }
    button-get-started-pill: { type: button, bg: "transparent", fg: "#000000", border: "1px solid #197b2e", radius: "200px", height: "48px", font: "16px / 400 Pretendard JP Variable", use: "Hero section expanded get-started pill" }
    tab-product-active: { type: tab, bg: "#edf3ed", fg: "#000000", radius: "9999px", padding: "0px 20px", active: "text #000000 bg #edf3ed", use: "Product selector tab — active state (Search / Research / Write)" }
    tab-product-inactive: { type: tab, bg: "transparent", fg: "#000000", radius: "9999px", padding: "0px 20px", use: "Product selector tab — inactive" }
    toggle-billing: { type: toggle, bg: "#ffffff", fg: "#1e1e1f", radius: "200px", height: "44px", use: "Billing toggle (Monthly / Annual)" }
    card-pricing: { type: card, bg: "#ffffff", fg: "#1e1e1f", radius: "12px", use: "Pricing plan card with shadow" }
    card-surface: { type: card, bg: "#f9f9fa", fg: "#1e1e1f", radius: "12px", use: "Feature card on light surface" }
    badge-warning: { type: badge, bg: "#fe8f16", fg: "#ffffff", radius: "9999px", font: "12px / 500", use: "Save % promo badge on Annual tab" }
  components_harvested: true
---

# Design System Inspiration of Liner

## 1. Visual Theme & Atmosphere

Liner (라이너) is a Korean AI startup that began as a web highlighter and has evolved into an AI-powered search and research copilot serving 11M+ professionals. Its homepage embodies a quiet authority: a near-white canvas (`#ffffff`) punctuated by a signature Liner Green (`#197b2e`) that appears almost exclusively on CTAs, reserving the single brand color for decisive action. Headings speak in **Flare** — a custom humanist serif with elegant weight contrast — in a deep forest green (`#14371b`) rather than black, anchoring the page in an organic, nature-informed palette rooted in Liner's highlighting origin.

The typographic system splits into two clear registers: editorial display in Flare for emotional impact, and functional UI in **Pretendard Variable / Pretendard JP Variable** for menus, body, and labels. This duality — editorial serif for "what Liner is," humanist sans for "how to use it" — gives the product a professional, research-grade credibility without feeling cold. Hero text arrives at 54px / weight 400 in Flare, section titles at 42px, and pricing page H1 at 34px, all in the dark forest `#14371b`. Body and UI text sits in near-black `#1e1e1f` at 16px, with muted copy in a grey-80 (`#6d6d70` at opacity 0.8).

Interactive geometry is restrained: standard buttons at 8px radius for nav and pricing CTAs; hero pill buttons at a generous 200px for the product-feature "Get started" moments; and a full-pill selector for product tabs. The system avoids shadows almost entirely — depth appears through surface tints (`#f9f9fa`, `#f6f6f7`) and 1px borders rather than elevation. The result reads as an AI product that respects your cognitive space: focused, calm, and oriented toward professionals who have no patience for noise.

**Key Characteristics:**
- Flare serif (custom) for all display headlines — elegant and research-grade
- Pretendard Variable / Pretendard JP Variable for all UI and body — global-ready, KR-native
- Single brand green (`#197b2e`) reserved for primary CTAs — one-action-one-color discipline
- Deep forest green (`#14371b`) for headings — organic, nature-referenced
- Near-black `#1e1e1f` for body — warm and legible, not harsh pure-black
- Flat depth: shadow-free on most surfaces; tinted `#f9f9fa` and hairlines for separation
- Geometric mix: 8px radius for buttons, 200px for pills, 9999px for tab selectors
- Light neutral palette (`#f9f9fa`, `#f6f6f7`) with deliberate forest-green accents

## 2. Color Palette & Roles

### Primary Brand

- **Liner Green** (`#197b2e`): The single saturated action color. Appears on nav "Get started" CTA, "Get Pro" and "Get Max" plan buttons. Its 80% derivation (`rgb(25,123,46)`) covers link text and ghost button borders. Comes from Liner's highlighter-green origin — the color you reach for to mark what matters.
- **Forest Dark** (`#14371b`): Heading and display color for H1–H3. A deep, near-black forest green that gives editorial weight to Flare serif headlines without reaching for neutral black.
- **Primary Tint** (`#edf3ed`): Active state background for product-selector tabs. A very soft mint that signals selection without visual aggression.

### Neutral & Surface

- **White Canvas** (`#ffffff`): Page background, pricing cards, feature cards.
- **Surface Light** (`#f9f9fa`): Alternate card and section background — barely-there tint.
- **Surface Alt** (`#f6f6f7`): Secondary tinted block surfaces.
- **Near-Black Ink** (`#1e1e1f`): Primary body text, plan names, specs. Warm near-black, not pure black.
- **Muted Grey** (`#6d6d70`): Muted text at 80% opacity for subtitles, toggle labels, secondary copy. Rendered as `rgba(109, 109, 112, 0.8)` in live DOM.
- **Pure Black** (`#000000`): Highest-contrast element labels and select heading contexts.

### Semantic

- **Warning Orange** (`#fe8f16`): "Save 20%" promo badge on Annual billing toggle. Only semantic color on the pricing surface.
- **On-Primary White** (`#ffffff`): Text on all green backgrounds.

## 3. Typography Rules

### Font Family

- **Display**: `Flare` — a custom humanist serif used exclusively for H1, H2, H3 at headline sizes. Weight 400 across all display sizes (the letterforms carry authority via shape, not weight).
- **UI/Body**: `Pretendard Variable` — the Korean-standard humanist sans, weight 400 for body / 500 for buttons. Loaded as `"Pretendard Variable"` for button/body contexts.
- **Multilingual UI**: `"Pretendard JP Variable", "Pretendard JP", "Pretendard Variable"` — extended version for nav items and interactive controls supporting CJK glyph coverage.

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Hero Display | Flare | 54px | 400 | Homepage main H2 — color `#14371b` |
| Section Heading | Flare | 42px | 400 | Product-feature H2 |
| Page Title | Flare | 34px | 400 | Pricing page H1 |
| Feature H3 | Pretendard JP Variable | 17px | 400 | Feature card heading |
| Nav Link | Pretendard JP Variable | 16px | 400 | Top nav items, height 36px |
| Body | Pretendard JP Variable | 16px | 400 | Body copy |
| Button Label | Pretendard Variable | 15px | 500 | All CTA buttons |
| Caption | Pretendard Variable | 14px | 400 | Dropdown items, footnotes |

### Principles

- **Serif for persuasion, sans for function**: Flare carries all aspirational communication; Pretendard handles all operational UI. They never swap roles.
- **Weight-light at display**: Flare displays at weight 400 — authority through letterform, not boldness.
- **CJK readiness built in**: Pretendard JP Variable covers Korean, Japanese, and Latin seamlessly — essential for a product with large Korean and Japanese user bases.
- **Consistent 15px/500 buttons**: All button labels (primary, outline, ghost, toggle) share the same 15px Pretendard Variable 500 spec for visual cohesion across pricing tier differences.

## 4. Component Stylings

### Buttons

**Primary (Get started / Get Pro / Get Max)**
- Background: `#197b2e`
- Text: `#ffffff`
- Radius: 8px
- Height: 40px
- Font: 15px / 500 / Pretendard Variable
- Use: Primary upgrade CTAs in nav and pricing cards

**Outline (Start for free)**
- Background: `#ffffff`
- Text: `#1e1e1f`
- Border: 1px solid rgba(109, 109, 112, 0.24)
- Radius: 8px
- Height: 40px
- Font: 15px / 500 / Pretendard Variable
- Use: Free-tier CTA on pricing page — low-emphasis alternative

**Ghost Green (Contact us / Contact Liner)**
- Background: transparent
- Text: `#197b2e`
- Border: 1px solid `#197b2e`
- Radius: 8px
- Height: 40px
- Font: 15px / 500 / Pretendard Variable
- Use: Enterprise inquiry CTA — same green family, lower visual weight

**Hero Get-Started Pill**
- Background: transparent
- Text: `#000000`
- Border: 1px solid `#197b2e`
- Radius: 200px
- Height: 48px
- Font: 16px / 400 / Pretendard JP Variable
- Use: Hero section product-feature "Get started" — larger pill form for product emphasis

### Inputs

**Default Search / Form**
- Background: `#f9f9fa`
- Border: 1px solid rgba(109, 109, 112, 0.12)
- Radius: 8px
- Text: `#1e1e1f`
- Placeholder: `#6d6d70` at 80% opacity
- Font: 16px / 400 / Pretendard JP Variable
- Use: Search and form inputs on live product surface

### Cards & Containers

**Pricing Plan Card**
- Background: `#ffffff`
- Text: `#1e1e1f`
- Radius: 12px
- Shadow: 0 1px 4px rgba(0,0,0,0.08)
- Use: Plan tier cards (Free / Pro / Max / Enterprise) on pricing page

**Feature Card (Surface)**
- Background: `#f9f9fa`
- Text: `#1e1e1f`
- Radius: 12px
- Use: Feature highlight cards on light tinted sections

### Badges

**Promo Badge (Save %)**
- Background: `#fe8f16`
- Text: `#ffffff`
- Radius: 9999px
- Font: 12px / 500 / Pretendard Variable
- Use: "Save 20%" badge on Annual billing selector

### Tabs

**Product Selector (Active)**
- Background: `#edf3ed`
- Text: `#000000`
- Radius: 9999px
- Padding: 0px 20px
- Height: 48px
- Font: 16px / 400 / Pretendard JP Variable
- Use: Active state of Search / Research / Write product tabs

**Product Selector (Inactive)**
- Background: transparent
- Text: `#000000`
- Radius: 9999px
- Padding: 0px 20px
- Height: 48px
- Use: Inactive product tab states

### Toggles

**Billing Toggle (Monthly / Annual)**
- Background: `#ffffff`
- Text active: `#1e1e1f`
- Text inactive: rgba(109, 109, 112, 0.8)
- Radius: 200px
- Height: 44px
- Use: Monthly / Annual billing period selector on pricing page

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://liner.com, https://liner.com/pricing, https://liner.com/blog
**Tier 2 sources:** getdesign.md/liner — 404 (not listed); styles.refero.design/?q=liner — no Liner entry found after full search
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System

- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 40px
- Nav height: 36px interactive elements in a floating nav bar
- Button height: 40px (standard), 48px (hero pill)
- Section padding: generous whitespace between content bands — minimalist information hierarchy

### Grid & Container

- Centered single-column hero with 54px Flare headline as the anchor
- Product tab selector sits beneath the hero, full-pill row of three options
- Pricing page uses a 4-column card layout (Free / Pro / Max / Enterprise) at desktop
- Feature sections in alternating white/light-surface bands following a top-to-bottom scroll narrative

### Whitespace Philosophy

- **Breathe first, fill second**: Generous vertical spacing between all sections — AI product that respects professional attention.
- **Flat separation**: White vs `#f9f9fa` alternating backgrounds replace shadow stacks.
- **Green as punctuation**: `#197b2e` appears only on action nodes; the rest of the page is intentionally monochromatic.

### Border Radius Scale

- 8px: Standard buttons, inputs, nav dropdown items
- 12px: Content cards, pricing plan cards
- 200px: Hero pill CTA, billing toggle container
- 9999px: Product selector pills, promo badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Nav, hero, most content sections |
| Surface (1) | `#f9f9fa` background shift | Feature card groups, alternate page sections |
| Card (2) | `0 1px 4px rgba(0,0,0,0.08)` | Pricing plan cards |

**Shadow Philosophy**: Liner is near-shadowless. Live inspection confirmed `box-shadow: none` across nav, hero, product tabs, and most cards. Only pricing plan cards carry a light 1px-blur shadow. Depth is achieved through background tint shifts (`#f9f9fa`, `#f6f6f7`) and thin rgba-borders. The system signals "AI research tool" through clarity and restraint — visual noise is treated as a barrier to focus.

## 7. Do's and Don'ts

### Do
- Use Flare serif for all display headlines at weight 400 — let letterform do the work
- Use Pretendard Variable for all button labels and captions at 15px/500
- Reserve Liner Green (`#197b2e`) exclusively for primary action buttons
- Use Forest Dark (`#14371b`) for heading text — not pure black
- Apply 200px radius for hero pills and billing toggles; 8px for action buttons
- Separate page sections with `#f9f9fa` tint shifts and rgba borders — no shadow
- Use muted grey at 80% opacity for secondary and placeholder text
- Write button labels in sentence case at 15px/500 Pretendard

### Don't
- Apply Flare to body copy or small UI text — it belongs exclusively to headlines
- Spread green (`#197b2e`) to decorative elements — it signals "action" only
- Use pure black (`#000000`) for heading text — the brand palette uses Forest Dark `#14371b`
- Stack heavy shadows or gradient overlays — Liner is a flat, clean AI system
- Use weight 700+ on display text — Flare at 400 is canonical; boldness is a design mistake here
- Mix border radius scales arbitrarily — 8px for buttons, 12px for cards, 200px for pills
- Create new saturated accent colors — the palette is intentionally near-monochromatic with single green

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Nav collapses, hero headline font-size reduces, product tabs scroll horizontally |
| Tablet | 640-1024px | 2-column pricing card grid, moderate padding |
| Desktop | 1024px+ | Full 4-column pricing, centered hero, multi-column feature rows |

### Touch Targets

- Standard buttons: 40px height — appropriate for professional keyboard-and-mouse desktop users
- Hero pill CTA: 48px height — generously tappable on tablet
- Product tabs: 48px height, full-pill — large touch target for mobile product switching
- Nav items: 36px — standard desktop nav hit area

### Collapsing Strategy

- Hero 54px Flare headline scales down proportionally on mobile
- Product selector tabs compress to horizontal scroll row
- Pricing cards stack to single column below tablet
- Billing toggle remains full-width pill on all breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference

- Primary action: Liner Green (`#197b2e`)
- Display headings: Forest Dark (`#14371b`)
- Active tab / tint: Primary Tint (`#edf3ed`)
- Background: White Canvas (`#ffffff`)
- Light surface: Surface Light (`#f9f9fa`)
- Body text: Near-Black Ink (`#1e1e1f`)
- Muted / placeholder: Muted Grey (`#6d6d70` at 80% opacity)
- Promo accent: Warning Orange (`#fe8f16`)

### Example Component Prompts

- "Create a hero section on white background. Display headline at 54px Flare weight 400, color `#14371b`. Subtitle at 24px Pretendard JP Variable weight 400, color rgba(109,109,112,0.8). Green pill CTA: transparent background, 1px solid `#197b2e` border, 200px radius, 48px height, 16px Pretendard JP Variable, color `#000000`."
- "Design a pricing card: white background `#ffffff`, 12px radius, 0 1px 4px rgba(0,0,0,0.08) shadow. Plan name 17px Pretendard JP Variable 400 `#1e1e1f`. Primary CTA: `#197b2e` bg, white text, 8px radius, 40px height, 15px Pretendard Variable 500."
- "Build a product tab selector: full-pill container. Active tab: `#edf3ed` bg, `#000000` text, 9999px radius, 0px 20px padding, 48px height, 16px Pretendard JP Variable. Inactive: transparent, same dimensions."
- "Create nav: white background, 36px item height. 16px Pretendard JP Variable weight 400 `#000000` nav links. Right-aligned primary CTA: `#197b2e` bg, white text, 8px radius, 40px height, 15px Pretendard Variable 500."

### Iteration Guide

1. Flare at weight 400 for every headline; Pretendard Variable 400/500 for every UI element
2. Liner Green (`#197b2e`) is the single action color — guard it fiercely
3. No shadows except the lightest card shadow on pricing tiers
4. Forest Dark `#14371b` for all display text — not black
5. Radius is context-specific: 8px buttons, 12px cards, 200px pills
6. Muted text = `rgba(109, 109, 112, 0.8)` — never a flat opaque grey
7. Background separation = `#f9f9fa` tint, not depth/shadow

---

## 10. Voice & Tone

Liner's voice is **precise, professional, and quietly confident** — an AI research partner that speaks to knowledge workers, academics, and professionals who demand accuracy over hype. The homepage opener "Meet AI agents purpose-built for professionals to search smarter, research deeper, and write better" is declarative and benefit-led without exclamation or urgency. Liner's copy style strips away AI buzzwords and grounds every claim in a user outcome.

| Context | Tone |
|---|---|
| Hero headline | Confident, outcome-led. "Accurate AI agents built for smarter work." No exclamation, no jargon. |
| Feature descriptions | Benefit-first, precise. "Get accurate answers. Skip forward to relevant results." |
| Pricing CTAs | Direct, low-pressure. "Start for free." "Get Pro." "Contact us." Sentence case. |
| Blog engineering | Honest and technical. Shares startup constraints openly ("제한된 리소스로 디자인 시스템 개발하기"). |
| Product tab labels | Single-word clarity. "Search." "Research." "Write." |

**Voice samples (verbatim from live surface):**
- "Accurate AI agents built for smarter work" — homepage H2 (mission-framed, Flare serif). *(verified live 2026-06-22)*
- "Meet AI agents purpose-built for professionals to search smarter, research deeper, and write better" — homepage H1 subtitle. *(verified live 2026-06-22)*
- "Why pro is built for serious research" — pricing page H2 (audience-respecting, no hype). *(verified live 2026-06-22)*

**Forbidden register**: AI superlatives without grounding, urgency patterns ("Act now!"), casualness that undermines the professional research context, undefined technical jargon.

## 11. Brand Narrative

Liner began around **2016** as a web-highlighting extension — a digital analog to drawing a yellow line on a physical page. The brand name itself comes from "liner" as in highlighter, and the signature green palette echoes that origin: the color you reach for when something matters. As the highlighting use case deepened, Liner evolved from passive curation (saving highlighted text) into active cognition assistance — surfacing what you saved, connecting research threads, and ultimately generating answers grounded in real sources.

By **2026**, Liner positions itself as "AI agents for professionals" with over **11 million users**, having made the transition from productivity extension to research copilot. The product now encompasses Search (AI-powered web search with cited answers), Research (deep-dive academic and multi-source reports), and Write (grounded writing with reference integration). The tagline "Inside the AI Search Engine 11M+ People Trust" signals the pivot from tool to trusted collaborator. The blog post "스타트업에서 제한된 리소스로 디자인 시스템 개발하기" (Building a design system with limited startup resources) reveals an engineering team that builds thoughtfully under constraint — a philosophy visible in the product itself: no unnecessary visual weight, no wasted motion.

Liner's positioning is squarely anti-hallucination: the word "accurate" appears in both the homepage headline and the brand's core product promise. For a Korean AI startup competing globally against entrenched players, "accuracy" is the chosen moat — not features, not UX bells, but epistemic trustworthiness.

## 12. Principles

1. **Accuracy before impression.** Liner's core promise is truthful, cited AI output. *UI implication:* source attribution is a first-class UI citizen; never hide provenance of AI-generated content.
2. **Professional context, not consumer entertainment.** Liner serves researchers, academics, and knowledge workers. *UI implication:* dense information layouts are acceptable; playful micro-interactions are not the register.
3. **One color, one action.** Liner Green (`#197b2e`) is the single call-to-action color. *UI implication:* every green element should be actionable; decorative green is a design error.
4. **Serif for aspiration, sans for function.** Flare carries the brand promise; Pretendard carries the work. *UI implication:* never render operational UI in Flare; never render the brand headline in Pretendard.
5. **Restraint as credibility.** A tool trusted with professional research earns that trust through visual discipline. *UI implication:* remove shadows, reduce palette, add whitespace before adding decoration.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Liner user segments (professionals, academics, knowledge workers), not individual people.*

**박지민, 27, 서울.** Graduate student using Liner's Research agent for literature reviews before writing papers. Values cited sources over generated summaries. Relies on the deep-research report feature because it feels more like a research assistant than a chatbot.

**Sarah K., 34, San Francisco.** Product strategist who uses Liner's Search to cut through content farms for industry signals. Appreciates that Liner doesn't hallucinate citations. Uses the Write feature to draft market analysis from her research highlights.

**田中 健, 41, Tokyo.** Senior analyst at a consulting firm who switched from manual search workflows to Liner after a colleague recommended it. Finds the Pretendard JP Variable rendering of Japanese text surprisingly clean. Uses it daily for competitive intelligence.

**이준호, 38, 판교.** Engineering lead at a Korean startup who read Liner's design-system blog post. Curious about the product for internal research tasks. Represents Liner's KR base where the brand began.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Near-black `#1e1e1f` single-line message. One green CTA to refine query. No decorative illustration. |
| **Empty (no saved highlights)** | Muted grey `rgba(109,109,112,0.8)` copy explaining the state, with a green link to start searching. |
| **Loading (search in progress)** | Skeleton rows on `#f9f9fa` tinted surface at expected result heights, 8px radius. Flat shimmer — no heavy animation. |
| **Loading (research generation)** | Step-by-step progress indicator with source count updating; maintains context visible. |
| **Error (network / API failure)** | Inline message in near-black `#1e1e1f` with plain-language explanation; green retry CTA. |
| **Error (content not found)** | "No results" state with suggestion to broaden search terms; calm, non-accusatory tone. |
| **Success (research complete)** | Research report renders inline with source citations. No celebratory animation — the content is the reward. |
| **Skeleton** | `#f9f9fa` blocks at final content dimensions, 8px radius, flat opacity pulse. |
| **Disabled** | Muted grey `rgba(109,109,112,0.8)` label; green buttons fade to reduced opacity, not grey — preserves brand read. |
| **Focus** | 2px `#197b2e` outline on interactive elements — green focus ring consistent with the action color. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Hover state transitions, tab indicator movement |
| `motion-standard` | 200ms | Card reveals, dropdown open/close, billing toggle |
| `motion-slow` | 300ms | Page section entrance, research result streaming onset |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving elements — cards, dropdowns, research reports |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Toggles, tab switches, two-way transitions |

**Motion rules**: Motion is minimal and purposeful — this is a professional research tool, not an entertainment experience. Product tabs switch at `motion-fast / ease-standard`; research results stream into view at `motion-slow / ease-enter` to signal that valuable content is arriving. No bounce, no spring, no celebration animations. Under `prefers-reduced-motion: reduce`, all transitions are instant. The product remains fully functional without animation — motion is an enhancement, not a dependency.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on https://liner.com and https://liner.com/pricing:
- H2 "Accurate AI agents built for smarter work": Flare / 54px / weight 400 / color rgb(20,55,27) = #14371b
- H1 subtitle "Meet AI agents purpose-built for professionals": 24px / Pretendard JP Variable / color rgba(109,109,112,0.8)
- Nav "Get started" CTA: bg rgb(25,123,46) = #197b2e / white text / radius 8px / 40px height / 15px Pretendard Variable 500
- Hero "Get started" pill: transparent / border 1px solid rgb(25,123,46) / radius 200px / 48px height / 16px Pretendard JP Variable
- Product tab "Search" active: bg rgb(237,243,237) = #edf3ed / radius 3.35544e+07px (full pill) / 0px 20px padding / 48px height
- Pricing "Get Pro" / "Get Max": bg rgb(25,123,46) = #197b2e / white / 8px radius / 40px height / 15px 500
- Pricing "Start for free": bg rgb(255,255,255) / color rgb(30,30,31) = #1e1e1f / border 1px solid rgba(109,109,112,0.24) / 8px radius / 40px
- "Contact us" ghost: transparent / color rgb(25,123,46) / border 1px solid rgb(25,123,46) / 8px radius / 40px
- Pricing H1 "Liner pricing plan": Flare / 34px / weight 400 / color rgb(20,55,27)
- Pricing H2 "Why pro is built for serious research": Flare / 34px / weight 400 / color rgb(20,55,27)
- Body font-family: "Pretendard JP Variable", "Pretendard JP", "Pretendard Variable", sans-serif
- Body color: rgb(0,0,0); size 16px / weight 400
- Near-black body text on pricing: rgb(30,30,31) = #1e1e1f
- bgFreq (pricing page): #ffffff ×11, #f9f9fa ×7, #197b2e ×6
- fgFreq (pricing page): rgb(0,0,0) ×719, rgb(30,30,31) ×334, rgba(109,109,112,0.8) ×31, #ffffff ×18, #197b2e ×13, #14371b ×4, #fe8f16 ×1
- document.title: "AI agents for professionals | Search, academic research, write with Liner"
- Liner blog at liner.com/blog confirmed brand-owned; article "스타트업에서 제한된 리소스로 디자인 시스템 개발하기" found

Brand narrative (§11): Liner Inc. — Korean AI startup founded ~2016 as a web highlighter, evolved into AI research copilot. 11M+ users per homepage header. These facts are from the live homepage.

Personas (§13) are fictional archetypes. Names do not refer to real people.

Interpretive claims are editorial readings connecting observed design choices to Liner's brand positioning.
-->
