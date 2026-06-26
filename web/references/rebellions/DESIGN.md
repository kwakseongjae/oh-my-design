---
id: rebellions
name: Rebellions
display_name_kr: 리벨리온
country: KR
category: ai
homepage: "https://rebellions.ai"
primary_color: "#52f756"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=rebellions.ai&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = signature neon green (#52f756) used on CTAs / links / event badges; ink near-black (#24292e) carries body + dark CTAs + dark panels (#1b1f23). Sharp-corner system: buttons/cards measure 0px radius. Sohne display over Pretendard Korean fallback. Neutral ladder echoes a GitHub-Primer-like engineering palette."
  colors:
    primary: "#52f756"
    ink: "#24292e"
    panel: "#1b1f23"
    black: "#000000"
    canvas: "#f6f8fa"
    white: "#ffffff"
    on-dark: "#d9e4ed"
    muted: "#8d959c"
    steel: "#3b434a"
    docs-dark: "#14151a"
  typography:
    family: { display: "Sohne", body: "Pretendard", mono: "Space Mono" }
    display-hero: { size: 75, weight: 400, lineHeight: 1.25, use: "Hero headline (Power AI Inference)" }
    section:      { size: 58, weight: 400, lineHeight: 1.25, use: "Section titles (System-Level Scalability)" }
    title:        { size: 53, weight: 400, lineHeight: 1.25, use: "Large titles (Let's Talk.)" }
    subtitle:     { size: 40, weight: 400, lineHeight: 1.25, use: "Sub-section titles (Rebellions SDK)" }
    feature:      { size: 32, weight: 400, lineHeight: 1.25, use: "Feature headings (Built for Inference)" }
    card-label:   { size: 24, weight: 600, lineHeight: 1.25, use: "Card labels (Compute, Generality)" }
    body-lg:      { size: 21, weight: 400, lineHeight: 1.25, use: "Lead paragraph" }
    nav:          { size: 20, weight: 500, lineHeight: 1.40, use: "Top nav items" }
    body:         { size: 16, weight: 400, lineHeight: 1.40, use: "Standard reading text" }
    caption:      { size: 14, weight: 500, lineHeight: 1.25, use: "Footer text, badges, fine print" }
  spacing: { xs: 4, sm: 8, md: 10, base: 16, lg: 24, xl: 40, xxl: 64 }
  rounded: { none: 0, xs: 2, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary-dark: { type: button, bg: "#24292e", fg: "#f6f8fa", radius: "0px", height: "50px", padding: "10px 24px", font: "20px / 600 Sohne", use: "Hero primary CTA (Explore RebelServer™)" }
    button-primary-green: { type: button, bg: "#52f756", fg: "#24292e", radius: "0px", height: "50px", padding: "10px 24px", font: "20px / 600 Sohne", use: "Signature green CTA (Explore Rebellions SDK / 자세히 보기)" }
    button-contact: { type: button, bg: "#000000", fg: "#52f756", radius: "0px", height: "36px", padding: "8px 20px", font: "14px / 500 Sohne", use: "Sticky-header contact CTA (Let's Talk / 도입 문의하기)" }
    button-outline: { type: button, bg: "#ffffff", fg: "#24292e", border: "1px solid #24292e", radius: "0px", padding: "0 16px", font: "16px / 400 Sohne", use: "Outlined secondary action" }
    segmented-tab: { type: tab, bg: "#f6f8fa", active: "text #24292e", use: "Chiplet strategy segmented control (Compute / Generality / Scalability / Capacity)" }
    nav-link: { type: tab, fg: "#d9e4ed", active: "text #52f756", use: "Top nav item on dark hero; green denotes the primary nav action" }
    badge-event: { type: badge, bg: "#24292e", fg: "#52f756", border: "1px solid #52f756", radius: "0px", font: "14px / 400 Sohne", use: "Event announcement pill in top bar (RAISE Summit 2026)" }
    card-feature: { type: card, bg: "#ffffff", fg: "#24292e", radius: "0px", use: "Feature / spec card, sharp corners, flat (no shadow)" }
    panel-dark: { type: card, bg: "#1b1f23", fg: "#f6f8fa", radius: "0px", use: "Dark feature / spec panel section" }
  components_harvested: true
---

# Design System Inspiration of Rebellions

## 1. Visual Theme & Atmosphere

Rebellions (리벨리온) is Korea's leading AI-inference semiconductor company, and its website looks exactly like its product promises: engineered, energy-conscious, and built for scale. The canvas is a cool near-white (`#f6f8fa`) that reads like a clean datasheet, while the type and chrome sit in a deep engineering near-black (`#24292e`) instead of pure black — a warm graphite that gives the page the feel of a precision instrument panel rather than a consumer app. Against that restrained neutral field, a single electric, almost radioactive green (`#52f756`) does all the signalling: it marks the primary CTA, the live event banners, and the one nav action that matters. The result is a hardware-company aesthetic — sober, technical, and quietly aggressive, like a server rack with one glowing power LED.

The defining geometric choice is sharpness. Buttons, cards, panels, and the contact pill all measure `0px` border-radius — there is essentially no rounding anywhere in the interactive system. In an industry where every SaaS site reaches for the friendly 8–12px corner, Rebellions' square edges read as silicon-precise and uncompromising, the visual equivalent of a tape-out. Typography reinforces this: the brand sets **Sohne** at very large display sizes (75px hero, 58px section heads) at a confident regular weight (400), with **Pretendard** carrying Korean body text on the localized `kr.rebellions.ai` surface. Headlines are big but not bold — the scale does the shouting, not the weight.

Depth is deliberately flat. Live inspection found `box-shadow: none` across the hero, nav, feature cards, and CTAs; separation comes from alternating light (`#f6f8fa`, `#ffffff`) and dark (`#1b1f23`, `#24292e`) full-bleed bands rather than elevation. On the dark sections, body and nav text lift to a soft blue-grey (`#d9e4ed`), with a muted steel-grey (`#8d959c`) for tertiary labels and a darker steel (`#3b434a`) for secondary dark surfaces. The strict-black (`#000000`) appears only on the sticky-header contact pill, where the neon green text sits inside it for maximum contrast. The developer documentation surface (`docs.rbln.ai`) shifts to its own darker code-grade neutral (`#14151a`) but keeps the same green accent — proof that the green is the brand's one non-negotiable color.

**Key Characteristics:**
- Single neon-green accent (`#52f756`) reserved for CTAs, event banners, and the one primary nav action — the system's only saturated hue
- Engineering near-black (`#24292e`) for text and dark CTAs instead of pure black — a warm graphite, GitHub-Primer-adjacent
- Sharp `0px` corners on every button, card, and panel — silicon-precise, anti-friendly
- Sohne display at regular weight 400 at very large sizes (75px hero) — scale-driven, not weight-driven
- Pretendard for Korean body text on the `kr.rebellions.ai` surface
- Flat depth — no shadows; light/dark full-bleed bands (`#f6f8fa` / `#1b1f23`) do the separating
- Cool-neutral ladder: `#d9e4ed` text on dark, `#8d959c` muted, `#3b434a` secondary dark
- Strict black (`#000000`) only on the contact pill; docs-grade dark (`#14151a`) only on developer docs

## 2. Color Palette & Roles

### Primary
- **Rebel Green** (`#52f756`): The signature neon green. Primary CTA background ("Explore Rebellions SDK", KR "자세히 보기"), event-banner text, link/nav accent, and contact-pill label. The single saturated "action" color in the whole system.
- **Engineering Ink** (`#24292e`): Primary text, heading, and dark CTA background ("Explore RebelServer™"). A warm graphite near-black — never pure black for body — that anchors the technical, instrument-panel feel.

### Neutral & Surface
- **Canvas** (`#f6f8fa`): Cool near-white page background; also the light text color on dark sections.
- **White** (`#ffffff`): Card surfaces and the outlined-button background.
- **Panel Dark** (`#1b1f23`): Near-black background for dark feature/spec panels and bands.
- **Steel** (`#3b434a`): Secondary dark surface and divider tone within dark sections.
- **Strict Black** (`#000000`): Reserved for the sticky-header contact pill background, where neon-green text sits inside.

### Text Hierarchy
- **Engineering Ink** (`#24292e`): Primary text, headings, nav (on light), strong labels.
- **On-Dark Text** (`#d9e4ed`): Soft blue-grey for body, nav links, and footer text on dark sections.
- **Muted Grey** (`#8d959c`): Tertiary text, captions, inactive labels.

### Developer Surface
- **Docs Dark** (`#14151a`): The darker code-grade neutral used on the `docs.rbln.ai` SDK documentation chrome — same green accent, different (darker) ground.

## 3. Typography Rules

### Font Family
- **Display / UI**: `Sohne` — used for all headlines, nav, and button labels across the global `.ai` site.
- **Body (Korean)**: `Pretendard` — the document default on the localized `kr.rebellions.ai` surface and the Korean fallback in the global stack.
- **Monospace**: `Space Mono` (global site) / `Fira Code` (docs) — for technical specs, code, and numeric callouts.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Sohne | 75px (4.69rem) | 400 | 1.25 | "Power AI Inference. Efficiently. At Scale." |
| Section Heading | Sohne | 58px (3.63rem) | 400 | 1.25 | "System-Level Scalability", "MoE in Action" |
| Large Title | Sohne | 53px (3.31rem) | 400 | 1.25 | "Let's Talk." |
| Sub-section | Sohne | 40px (2.50rem) | 400 | 1.25 | "Rebellions SDK", "Our Strategic Investors" |
| Feature Heading | Sohne | 32px (2.00rem) | 400 | 1.25 | "Built for Inference", "Efficient by Design" |
| Card Label | Sohne | 24px (1.50rem) | 600 | 1.25 | "Compute", "Generality", "Scalability" |
| Lead Paragraph | Sohne | 21px (1.31rem) | 400 | 1.25 | Section intro paragraphs |
| Nav Item | Sohne | 20px (1.25rem) | 500 | 1.40 | Top navigation links |
| Body | Sohne / Pretendard | 16px (1.00rem) | 400 | 1.40 | Standard reading text |
| Caption | Sohne | 14px (0.88rem) | 500 | 1.25 | Footer text, event badges, fine print |

### Principles
- **Scale, not weight**: Headlines run at 400 (regular) even at 75px. The brand commands attention through size and whitespace, not bold weight — the few weight-600 elements are the small card labels, where size alone is insufficient.
- **Sohne global, Pretendard Korean**: Sohne is the brand/display voice; Pretendard carries dense Korean body text on `kr.rebellions.ai`. They never swap roles.
- **Mono for the machine**: Space Mono / Fira Code surface technical specs and code, keeping engineering numerics visually distinct from prose.
- **Big, plain, declarative**: No decorative letter-spacing tricks — tracking stays normal. The type is matter-of-fact, like spec-sheet copy.

## 4. Component Stylings

### Buttons

**Primary Dark**
- Background: `#24292e`
- Text: `#f6f8fa`
- Radius: 0px
- Padding: 10px 24px
- Height: 50px
- Font: 20px Sohne weight 600
- Use: Hero primary CTA ("Explore RebelServer™")

**Primary Green**
- Background: `#52f756`
- Text: `#24292e`
- Radius: 0px
- Padding: 10px 24px
- Height: 50px
- Font: 20px Sohne weight 600
- Use: Signature green CTA ("Explore Rebellions SDK", KR "자세히 보기")

**Contact Pill**
- Background: `#000000`
- Text: `#52f756`
- Radius: 0px
- Padding: 8px 20px
- Height: 36px
- Font: 14px Sohne weight 500
- Use: Sticky-header contact CTA ("Let's Talk", KR "도입 문의하기")

**Outline**
- Background: `#ffffff`
- Text: `#24292e`
- Border: 1px solid `#24292e`
- Radius: 0px
- Padding: 0 16px
- Font: 16px Sohne weight 400
- Use: Outlined secondary action

### Inputs

**Default**
- Background: `#ffffff`
- Border: 1px solid `#24292e`
- Radius: 0px
- Text: `#24292e`
- Use: Form field / search input on light surfaces (sharp-cornered, hairline outline)

### Cards & Containers

**Feature Card**
- Background: `#ffffff`
- Text: `#24292e`
- Radius: 0px
- Use: Feature / spec card on light bands — sharp corners, flat (no shadow)

**Dark Panel**
- Background: `#1b1f23`
- Text: `#f6f8fa`
- Radius: 0px
- Use: Dark feature / spec panel sections and full-bleed bands

### Badges

**Event Pill**
- Background: `#24292e`
- Text: `#52f756`
- Border: 1px solid `#52f756`
- Radius: 0px
- Font: 14px Sohne weight 400
- Use: Event announcement in the top banner ("RAISE Summit 2026", "LEAP EAST 2026")

### Tabs / Segmented Control

**Chiplet Strategy Segments**
- Background: `#f6f8fa`
- Active: text `#24292e`
- Padding: 5px 40px
- Use: Segmented control on the Chiplet Design Strategy section ("Compute", "Generality", "Scalability", "Capacity")

### Navigation
- Background (dark hero): transparent over `#24292e`
- Text: `#d9e4ed`
- Active: green `#52f756` text (the "Let's Talk" primary nav action)
- Font: 20px Sohne weight 500
- Use: Top horizontal nav ("Products", "Developers", "Resources", "Company")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces)
**Tier 1 sources:** https://rebellions.ai/ (homepage, live computed style); https://kr.rebellions.ai/ (Korean site — same tokens, KR copy "자세히 보기" / "도입 문의하기" / "대규모 AI 서비스 추론 성능"); https://docs.rbln.ai/ (RBLN SDK developer docs — green accent confirmed); https://github.com/rebellions-sw (official GitHub org)
**Tier 2 sources:** getdesign.md/rebellions — 0 DESIGN.md files (not covered); styles.refero.design/?q=rebellions — not listed (96 fuzzy non-Rebellions matches)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px
- Scale: 4px, 8px, 10px, 16px, 24px, 40px, 64px
- Notable: CTA padding lands at 10px 24px; segmented-control chips use a generous 5px 40px horizontal pad for wide, scannable tap targets

### Grid & Container
- Centered single-column hero with the 75px Sohne headline as the anchor
- Alternating full-bleed bands: light (`#f6f8fa` / `#ffffff`) and dark (`#1b1f23` / `#24292e`) sections create the page rhythm
- Feature rows group spec cards in 2–4 column arrangements (Built for Inference / Efficient by Design / Seamless Deployment / Scalable Infrastructure)
- Chiplet Design Strategy uses a segmented control to swap Compute / Generality / Scalability / Capacity views

### Whitespace Philosophy
- **Spec-sheet calm**: generous vertical rhythm between sections; the page reads like a well-set technical document, not a busy marketing site.
- **Band segmentation**: sections separate by light/dark background swaps, not by borders or shadows.
- **One bright point**: the neon green is rationed so the eye always knows where the next action is.

### Border Radius Scale
- None (0px): buttons, cards, panels, inputs, badges — the entire interactive system is square
- Docs (2px): a minimal 2px appears only on the developer-docs "skip to content" control
- Full (9999px): reserved conceptually for any avatar/dot indicators

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Band (Level 1) | Light/dark background swap (`#f6f8fa` ↔ `#1b1f23`) | Section separation without elevation |
| Edge (Level 2) | `1px solid #24292e` hairline | Outlined buttons, input fields, sharp card edges |

**Shadow Philosophy**: Rebellions is a shadow-free system. Live inspection found `box-shadow: none` across the hero, nav, headings, feature cards, and CTAs. Depth is communicated entirely by alternating light and dark full-bleed bands and by hard `0px` edges — never by elevation. This is a deliberate engineering-grade choice: the flat, square treatment reads as precise and manufactured, in keeping with a silicon company. When emphasis is needed the system reaches for the neon green (`#52f756`) or the dark panel (`#1b1f23`), not a drop shadow.

## 7. Do's and Don'ts

### Do
- Reserve neon green (`#52f756`) for the primary CTA, event banners, and the one primary nav action — keep it the single "action" color
- Use engineering ink (`#24292e`) for text and dark CTAs instead of pure black
- Keep every button, card, panel, and input at `0px` radius — sharp corners are the brand
- Set headlines in Sohne at regular weight 400, letting size carry the hierarchy
- Separate sections with light/dark full-bleed bands (`#f6f8fa` ↔ `#1b1f23`), not shadows
- Use Pretendard for Korean body text on localized surfaces
- Lift text to `#d9e4ed` on dark sections and `#8d959c` for muted/tertiary labels
- Keep the layout flat, square, and spec-sheet calm

### Don't
- Spread the green across many elements — it dilutes the single-action signal
- Use rounded corners on interactive elements — the system is uniformly square
- Use pure black (`#000000`) anywhere except the contact pill background
- Set headlines in heavy bold weights — scale, not weight, drives emphasis
- Add drop shadows for elevation — Rebellions is flat
- Introduce a second saturated accent color — green is the only hue
- Use decorative letter-spacing on headlines — tracking stays normal
- Let card edges go soft — hard `1px` hairlines and `0px` corners only

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, segmented control wraps/scrolls |
| Tablet | 640-1024px | 2-up feature cards, moderate padding |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Primary CTAs at 50px height with 10px 24px padding — comfortably tappable
- Contact pill at 36px height for the persistent header action
- Segmented-control chips use wide 5px 40px padding for large hit areas

### Collapsing Strategy
- Hero: 75px Sohne headline scales down on mobile, weight 400 maintained
- Feature bands: multi-column → stacked single column
- Light/dark alternating sections keep full-width treatment
- Chiplet segmented control: horizontal scroll/wrap on narrow viewports

### Image Behavior
- Product renders and diagrams carry no shadow at any size, consistent with the flat system
- Cards and media keep `0px` corners across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA (green): Rebel Green (`#52f756`)
- Primary CTA (dark): Engineering Ink (`#24292e`)
- Background: Canvas (`#f6f8fa`)
- Card surface: White (`#ffffff`)
- Dark panel: Panel Dark (`#1b1f23`)
- Text on light: Engineering Ink (`#24292e`)
- Text on dark: On-Dark (`#d9e4ed`)
- Muted text: Muted Grey (`#8d959c`)
- Contact pill: Strict Black (`#000000`) bg + green text
- Docs dark: Docs Dark (`#14151a`)

### Example Component Prompts
- "Create a hero on engineering-ink (`#24292e`) background. Headline at 75px Sohne weight 400, line-height 1.25, color `#f6f8fa`: 'Power AI Inference. Efficiently. At Scale.' Below it a green CTA: `#52f756` background, `#24292e` text, 0px radius, 10px 24px padding, 20px Sohne weight 600 — 'Explore Rebellions SDK'."
- "Design a feature card: white `#ffffff` background, 0px radius, no shadow. Heading 32px Sohne weight 400, `#24292e`. Label 24px Sohne weight 600. Body 16px, `#24292e`."
- "Build a dark spec band: `#1b1f23` background, full-width. Section title 58px Sohne weight 400, `#f6f8fa`. Card labels 24px weight 600 in `#f6f8fa`; muted captions in `#8d959c`."
- "Create the sticky header: nav links 20px Sohne weight 500 in `#d9e4ed`, with the primary action in green `#52f756`. Contact pill: black `#000000` background, `#52f756` text, 0px radius, 8px 20px padding — 'Let's Talk'."
- "Event banner badge: `#24292e` background, `#52f756` text, 1px solid `#52f756` border, 0px radius, 14px Sohne — 'RAISE Summit 2026 →'."

### Iteration Guide
1. Green (`#52f756`) is the single action color — never spread it
2. Every corner is `0px` — buttons, cards, inputs, panels, badges
3. Headlines are Sohne weight 400; size carries hierarchy, not weight
4. No shadows — separate with light/dark bands (`#f6f8fa` ↔ `#1b1f23`)
5. Text is `#24292e` on light, `#d9e4ed` on dark, `#8d959c` muted
6. Pure black (`#000000`) only on the contact pill
7. Pretendard for Korean body; Sohne for display everywhere

---

## 10. Voice & Tone

Rebellions' voice is **technical, declarative, and efficiency-obsessed** — a chip company that talks like an engineer briefing a deployment, not a startup selling a dream. The hero line "Power AI Inference. Efficiently. At Scale." sets the register: three short clauses, each a claim that can be benchmarked. Copy leads with the workload ("Built for Inference", "Optimized for Real-World AI Deployment") and the physics ("Maximize Performance per Watt"), never with hype. The mission framing — "AI that Scales, without the Energy Burn." — reads as a problem statement, not a slogan.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, benchmarkable. "Power AI Inference. Efficiently. At Scale." |
| Feature headings | Capability + physics. "Built for Inference", "Efficient by Design", "Seamless Deployment". |
| CTAs | Direct imperatives. "Explore RebelServer™", "Explore Rebellions SDK", "Let's Talk." |
| Product names | Trademarked, system-like. REBEL™, ATOM™, RebelServer™, RebelRack™, RebelPOD™. |
| Mission / about | Engineering-grade plain English. "AI that Scales, without the Energy Burn." |
| Developer docs | Terse, reference-style, code-first (RBLN SDK User Guide). |

**Voice samples (verbatim from live surfaces):**
- "Power AI Inference. Efficiently. At Scale." — hero headline. *(verified live 2026-06-26)*
- "AI that Scales, without the Energy Burn." — about-page mission. *(verified live 2026-06-26)*
- "The fastest way to scale AI is to start talking." — closing CTA section. *(verified live 2026-06-26)*

**Forbidden register**: empty superlatives ("revolutionary", "game-changing"), consumer-app exclamation hype, vague benefit-speak untethered from a measurable claim, and any marketing that buries the performance-per-watt and deployment story.

## 11. Brand Narrative

Rebellions (리벨리온) was **founded in September 2020 in Korea** with, in its own words, "a mission to design inference-first silicon from the ground up" — to "push beyond the limits of general-purpose hardware" (verified live on the company's About timeline, 2026-06-26). The company's bet is that the AI era will be defined not by training but by *inference at scale*, and that the deciding constraint is energy: its positioning line is "AI that Scales, without the Energy Burn." — purpose-built accelerators optimized for performance-per-watt.

The timeline is a hardware story told in tape-outs. ATOM™, a GDDR6-based inference accelerator, taped out in **June 2022** and shipped to KT Cloud just three months later (**May 2023**) — an early live data-center deployment. **November 2024** brought the tape-out of the REBEL SoC, which the company describes as "the world's first UCIe-Advanced AI chiplet," fusing 144GB of HBM3E with scalable silicon. In **December 2024** Rebellions merged with **SK Sapeon**, unifying Korea's AI-semiconductor capabilities and deepening its supply chain through SK hynix's HBM leadership. Global expansion followed: **Rebellions Japan** (Feb 2025) and a **Saudi subsidiary** backed by Aramco's strategic investment (Aug 2025) aimed at sovereign-scale AI.

What Rebellions refuses, visible in its design: the friendly, rounded, shadow-stacked look of generic SaaS, and hype-driven marketing untethered from measurable claims. What it embraces: a flat, square, spec-sheet aesthetic; an engineering-graphite neutral palette; one disciplined neon-green accent; and copy that reads like a deployment brief. As investor Fleur Pellerin (CEO & Founder, Korelya Capital) frames it on the site: "Tech sovereignty starts with control over compute" — a statement the brand's restrained, instrument-panel design quietly echoes.

## 12. Principles

1. **Inference-first, efficiency-always.** The company exists to make AI inference cheaper per watt. *UI implication:* lead copy and spec cards with the workload and the power story, not abstract benefits.
2. **One action, one color.** Neon green (`#52f756`) means "do this." *UI implication:* reserve the green exclusively for the primary CTA, event banners, and the single primary nav action so the next step is unambiguous.
3. **Square is precise.** `0px` corners everywhere. *UI implication:* never round interactive elements; sharp edges signal silicon-grade precision.
4. **Scale over weight.** Headlines are large but regular-weight. *UI implication:* drive hierarchy with size and whitespace, not bold type.
5. **Flat, not decorated.** No shadows; light/dark bands carry depth. *UI implication:* separate sections by background swap and hard hairlines, keeping the surface clean and manufactured.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Rebellions audiences (data-center / cloud infra teams, ML platform engineers, sovereign-AI buyers), not individual people.*

**서지훈, 38, 경기 성남.** ML infrastructure lead at a Korean cloud provider evaluating inference accelerators. Cares about performance-per-watt and total cost of ownership over peak FLOPS. Reads the RebelServer and SDK pages for deployment realism, not marketing.

**Aiko Tanaka, 41, Tokyo.** Enterprise AI platform architect at a Japanese systems integrator. Needs PyTorch and vLLM support out of the box and stable SDK docs. Values the terse, reference-style documentation and the trademarked, system-like product naming.

**Khalid Al-Otaibi, 45, Riyadh.** Program director on a sovereign-AI infrastructure initiative. Thinks in rack- and data-center-scale deployments and supply-chain reliability. Reads "tech sovereignty starts with control over compute" literally — it's why Rebellions is on the shortlist.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results / no data)** | Canvas (`#f6f8fa`) surface. Single Engineering-Ink (`#24292e`) line explaining the empty state, with one green (`#52f756`) action. No illustration clutter. |
| **Empty (saved/compare list none yet)** | Muted Grey (`#8d959c`) single line: nothing added yet, plus a path back. Honest, terse. |
| **Loading (page/section fetch)** | Flat skeleton blocks at final dimensions on the canvas, `0px` radius. No shadow shimmer — flat pulse consistent with the shadowless, square system. |
| **Loading (docs/spec compute)** | Inline progress; previous content stays visible. Reference-style, no spinner theatrics. |
| **Error (request failed)** | Inline message in Engineering-Ink with a plain-English explanation and a retry. No generic "Something went wrong" alone. |
| **Error (form validation)** | Field-level message below the input; describes what's valid, not just "Required". Sharp `1px solid #24292e` field edge. |
| **Success (form / contact submitted)** | Brief inline confirmation in a calm, technical tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f6f8fa` blocks at final dimensions, `0px` radius, flat pulse. |
| **Disabled** | Muted Grey (`#8d959c`) text on reduced-opacity surface; green actions fade rather than turn grey to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Segmented-control swap, card/section reveal, dropdown |
| `motion-slow` | 360ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — panels, cards, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions, segmented swaps |

**Motion rules**: Motion is functional and restrained — consistent with the flat, square, engineering aesthetic. The Chiplet Design Strategy segmented control swaps views at `motion-standard / ease-standard`; sections reveal with a short fade-up at `ease-enter`. No bounce, spring, or overshoot — a silicon-infrastructure brand signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the site remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on:
- https://rebellions.ai/ — homepage, hero/nav/CTA/headings/footer + full-DOM color frequency scan
- https://kr.rebellions.ai/ — Korean site; same token system, KR copy ("자세히 보기" green CTA,
  "도입 문의하기" black contact pill, "대규모 AI 서비스 추론 성능" headline)
- https://docs.rbln.ai/ — RBLN SDK developer docs (Inter/Fira Code docs theme; green #52f756 accent confirmed)
- https://github.com/rebellions-sw — official GitHub org (avatar fetch 200)

Token-level claims (§1-9) are sourced from this live inspection:
- Rebel Green #52f756 (rgb 82,247,86); Engineering Ink #24292e (rgb 36,41,46); Canvas #f6f8fa
  (rgb 246,248,250); Panel Dark #1b1f23 (rgb 27,31,35); On-Dark #d9e4ed (rgb 217,228,237);
  Muted #8d959c (rgb 141,149,156); Steel #3b434a (rgb 59,67,74); Docs Dark #14151a (rgb 20,21,26).
- box-shadow: none across hero/nav/headings/cards/CTAs (shadowless system).
- 0px border-radius across buttons/cards/panels/inputs (sharp-corner system).
- Sohne display @ 75px/400 hero, 58px/400 section; Pretendard Korean body.

Voice samples (§10) and brand narrative (§11) are verbatim/derived from the live homepage and
About-page timeline (founding 2020.09; ATOM tape-out 2022.06; KT Cloud shipment 2023.05; REBEL SoC
tape-out 2024.11; SK Sapeon merger 2024.12; Japan 2025.02; Saudi/Aramco 2025.08). Investor quote
(Fleur Pellerin, Korelya Capital) and partner quote (Johannes Stahl, Synopsys) are verbatim from the
live About page.

The company's HQ is Bundang, Seongnam, Gyeonggi-do, Korea (footer address) → country: KR (parent HQ).
The founder/CEO name is not asserted here because the live About page did not name an individual in
this turn; only company-stated founding facts are used.

Personas (§13) are fictional archetypes informed by publicly observable Rebellions audiences
(cloud/data-center infra teams, ML platform engineers, sovereign-AI buyers). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "square is precise", "one action, one color", "spec-sheet calm") are
editorial readings connecting Rebellions' observed design to its positioning, not directly sourced
Rebellions statements.
-->
