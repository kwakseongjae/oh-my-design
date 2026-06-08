---
id: appier
name: Appier
country: TW
category: ai
homepage: "https://www.appier.com"
primary_color: "#1D2EFF"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=appier.com&sz=128"
verified: "2026-05-19"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "primary = electric Klein-adjacent blue (#1D2EFF, brief-provided + brand); secondary palette is grounded B2B approximation pending live re-inspection (per §2 note)"
  colors:
    primary: "#1D2EFF"
    primary-hover: "#1626D9"
    primary-tint: "#EBEDFF"
    accent: "#00D4FF"
    canvas: "#FFFFFF"
    surface-soft: "#F5F6FA"
    ink: "#101130"
    foreground: "#101130"
    body: "#4A4E69"
    muted: "#8A8FA3"
    disabled: "#C4C7D4"
    on-primary: "#FFFFFF"
    hairline: "#E6E8F0"
    border: "#D1D5E3"
    success: "#16A34A"
    warning: "#F59E0B"
    error: "#DC2626"
  typography:
    family: { sans: "-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif", tc: "PingFang TC, Microsoft JhengHei, sans-serif", jp: "Hiragino Kaku Gothic Pro, Meiryo, sans-serif" }
    caption:      { size: 13, weight: 400, use: "Caption, metadata" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Body, descriptions" }
    body-lg:      { size: 18, weight: 400, use: "Body large / lead" }
    card-heading: { size: 22, weight: 600, use: "Card titles, subheads" }
    section:      { size: 32, weight: 700, use: "Section headings" }
    hero:         { size: 48, weight: 700, use: "Hero headlines, value proposition" }
    stat:         { size: 48, weight: 700, use: "Case-study stat figures, in Appier Blue" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, section: 64, section-lg: 96 }
  rounded: { sm: 6, md: 8, lg: 12, full: 9999 }
  shadow:
    card: "0 4px 16px rgba(16,17,48,0.08)"
    header: "0 1px 4px rgba(16,17,48,0.06)"
    modal: "0 12px 40px rgba(16,17,48,0.2)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#1D2EFF", fg: "#FFFFFF", radius: 8, padding: "12px 24px", font: "16px/600", use: "primary CTA, flat; hover #1626D9" }
    button-secondary: { type: button, bg: "#FFFFFF", fg: "#1D2EFF", radius: 8, use: "1px #1D2EFF border; hover #EBEDFF bg" }
    input: { type: input, bg: "#FFFFFF", radius: 8, padding: "12px 14px", use: "1px #D1D5E3 border; focus #1D2EFF; error #DC2626" }
    card-solution: { type: card, bg: "#FFFFFF", radius: 12, padding: "24px", use: "1px #E6E8F0 border, blue Learn more link" }
    card-dark: { type: card, bg: "#101130", fg: "#FFFFFF", radius: 12, use: "deep-ink bg, blue to cyan gradient accent" }
    badge-credential: { type: badge, bg: "#F5F6FA", fg: "#101130", radius: 6, use: "1px #E6E8F0 border, 4-6px radius" }
omd: "0.1"
---

# Design System Inspiration of Appier

## 1. Visual Theme & Atmosphere

Appier is a Taiwan-founded, Tokyo-listed enterprise AI company — its software helps businesses "turn AI into ROI" through marketing, personalization, and data clouds — and its design system carries the confidence of a deep-tech brand that has graduated from startup to public company. The atmosphere is **clean enterprise futurism**: a predominantly white, high-contrast canvas anchored by a vivid, almost electric blue (`#1D2EFF`) that reads close to International Klein Blue — saturated, intelligent, and unmistakably "AI." Where consumer brands warm their blues toward friendliness, Appier keeps its blue pure and charged, signaling that this is precision technology for enterprises (L'Oréal, BMW, and similar logos populate the social-proof rail). The feel is sophisticated and credible, not playful — a brand that earns trust through measurable results (case-study stats like "41% conversion boost") and third-party credentials (Gartner, ISO 27001).

Typography is a clean, modern sans (system or near-system stack) with clear bold-headline / regular-body hierarchy, supporting English as the primary global voice and Traditional Chinese for its TW market. The visual storytelling leans on **animated product demos and gradient motion** — Appier shows its three "clouds" (Ad / Personalization / Data) as living, animated systems, using subtle blue gradient animation to suggest intelligence in motion. Layout is card-based and grid-disciplined: case-study cards, solution tiles, tabbed industry results — the orderly information architecture of a B2B brand that must explain complex AI to a CMO in thirty seconds.

What distinguishes Appier from a generic SaaS template is the **charged blue and the "agentic AI" confidence**. The electric blue is the brand — CTAs, links, key accents, the logo — and the rest stays crisp white-and-dark so the blue always reads as the intelligent, active element. It is an enterprise-AI system: rigorous, results-forward, and quietly futuristic.

**Key Characteristics:**
- **Electric Klein-adjacent blue (`#1D2EFF`)** as the brand + action color — saturated, intelligent, "AI"
- Clean white, high-contrast enterprise canvas — credible, precise, B2B
- Bold-headline / regular-body hierarchy in a modern sans (EN primary, TC for TW)
- Animated product demos + subtle blue gradient motion — "intelligence in motion"
- Card- and grid-based IA — case-study cards, solution tiles, tabbed results
- Results-forward: measurable stats and third-party credentials as primary trust signals
- Logo social-proof rail (enterprise brands) as a homepage anchor
- Blue rationed to action/intelligence; white + dark neutral for everything else
- Sophisticated, confident, futurist register — "Empowering Businesses to Turn AI into ROI"
- Conservative-to-moderate radius (`8px` workhorse) for a clean professional feel

## 2. Color Palette & Roles

> **Note:** Live computed-style verification was not completed this pass (the inspection browser session redirected unreliably; WebFetch confirmed the blue-dominant identity but not exact hexes). Values below combine the brief-provided primary, Appier's known electric-blue enterprise-AI identity, and conventional B2B SaaS roles. Hexes other than the primary are well-grounded approximations pending live re-inspection.

### Primary (Brand / Action)
- **Appier Blue** (`#1D2EFF`): The brand + primary action color. CTAs ("Book a Demo", "Contact Us"), links, key accents, the logo. Electric, Klein-adjacent.
- **Blue Pressed** (`#1626D9`): Darker press/hover state.
- **Blue Tint** (`#EBEDFF`): Very light blue wash for highlight surfaces, selected states, soft section backgrounds.

### Surface & Background
- **Pure White** (`#FFFFFF`): Primary content + card surface; the enterprise canvas.
- **Surface Soft** (`#F5F6FA`): Grouped sections, subtle page tint.
- **Ink / Dark Section** (`#0A0E27` / `#101130`): Deep near-navy for dark hero/feature sections where the blue glows against dark.

### Neutral / Text
- **Text Primary** (`#101130` / `#1A1A2E`): Headings, primary copy — deep ink with a blue cast.
- **Text Secondary** (`#4A4E69`): Body, descriptions.
- **Text Muted** (`#8A8FA3`): Metadata, captions, helper text.
- **Text Disabled** (`#C4C7D4`): Disabled labels, placeholders.

### Borders & Dividers
- **Border Light** (`#E6E8F0`): Row dividers, soft separators.
- **Border Mid** (`#D1D5E3`): Component borders (inputs, outlined buttons, cards).

### Accent / Gradient
- **Cyan Accent** (`#00D4FF`): Secondary tech accent in gradient animations and data visualizations.
- **Brand Gradient**: Blue→cyan (`#1D2EFF` → `#00D4FF`) for "intelligence in motion" hero/demo motion and key graphics.
- **Stat Highlight**: Appier Blue (`#1D2EFF`) used to emphasize case-study numbers (e.g., "41%").

### Semantic
- **Success** (`#16A34A`): Success states, positive deltas in dashboards.
- **Warning** (`#F59E0B`): Attention, neutral alerts.
- **Error / Danger** (`#DC2626`): Errors, destructive actions.

## 3. Typography Rules

### Font Stack (inferred — modern B2B sans)
| Locale | Stack |
|---|---|
| Default (EN) | `-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` (or a geometric brand sans) |
| Traditional Chinese | `… "PingFang TC", "Microsoft JhengHei", sans-serif` |
| Japanese | `… "Hiragino Kaku Gothic Pro", "Meiryo", sans-serif` |

A clean, modern sans; English leads as the global B2B voice, with TC/JP fallbacks for Appier's Taiwan home market and Japan listing.

### Weights
- **700 (Bold)**: Hero headlines, section headings, case-study stats, CTA emphasis.
- **600 (Semibold)**: Subheads, button labels, card titles.
- **400 (Regular)**: Body, descriptions, metadata.

### Size Scale (px, inferred)
| Use | Size |
|---|---|
| Caption / meta | `12–13px` |
| Body | `15–16px` |
| Body large / lead | `18px` |
| Card heading | `20–24px` |
| Section heading | `28–36px` |
| Hero headline | `40–56px` |
| Stat figure | `36–64px` (bold, blue) |

### Conventions
- **Big bold hero headlines** stating the value proposition; B2B clarity over decoration.
- **Stats are hero material** — case-study numbers render large and bold, often in Appier Blue.
- **Weight + the blue accent** drive hierarchy; neutral dark for copy, blue for action/emphasis.
- **English primary**, with native TC/JP per market — authored, not machine-translated.

## 4. Component Stylings

### Buttons

**Primary (Demo / Contact)**
- Background: `#1D2EFF`
- Text: `#FFFFFF`
- Border: none
- Radius: `8px`
- Padding: `12px 24px`
- Font: `16px` / `600`
- Hover: bg `#1626D9`
- Use: "Book a Demo", "Contact Us", primary conversion CTA

**Secondary (Outlined)**
- Background: `#FFFFFF`
- Text: `#1D2EFF`
- Border: `1px solid #1D2EFF`
- Radius: `8px`
- Padding: `12px 24px`
- Font: `16px` / `600`
- Hover: bg `#EBEDFF`
- Use: Secondary actions, "Learn more"

**Ghost / Nav**
- Background: transparent
- Text: `#101130`
- Hover: text `#1D2EFF`
- Use: Navigation links, tertiary actions

**On-dark CTA**
- Background: `#1D2EFF` (or white)
- Text: `#FFFFFF` (or `#101130`)
- Radius: `8px`
- Use: CTAs on the deep-ink hero/feature sections

### Inputs

**Default**
- Background: `#FFFFFF`
- Text: `#101130`
- Border: `1px solid #D1D5E3`
- Radius: `8px`
- Padding: `12px 14px`
- Font: `16px` / `400`
- Focus: border `#1D2EFF`, subtle blue focus ring
- Error: border `#DC2626`
- Use: Contact/demo-request forms

### Cards

**Solution / Cloud Card**
- Background: `#FFFFFF`
- Border: `1px solid #E6E8F0` or shadow-separated
- Radius: `12px`
- Padding: `24px`
- Use: Ad Cloud / Personalization Cloud / Data Cloud tiles — icon (wand), title, description, blue "Learn more"

**Case-Study Card**
- Background: `#FFFFFF` (or image-led)
- Radius: `12px`
- Padding: `24px`
- Use: Customer results — logo, big blue stat ("41% conversion boost"), one-line outcome

**Dark Feature Card**
- Background: `#101130` deep ink
- Text: `#FFFFFF`
- Accent: blue→cyan gradient line/graphic
- Radius: `12px`
- Use: On-dark storytelling where the blue glows

### Badges & Chips

**Credential / Award Chip**
- Background: `#F5F6FA` or white
- Text: `#101130`
- Border: `1px solid #E6E8F0`
- Radius: `4–6px`
- Use: Gartner / ISO 27001 / TAG Anti-Fraud trust badges

**Industry Tab**
- Active: `#1D2EFF` text + underline/indicator
- Inactive: `#8A8FA3`
- Use: Tabbed industry-results switcher

### Navigation
- White sticky header: logo left, product/solutions/resources nav, blue "Book a Demo" CTA right
- Nav links `15–16px` / `500`, blue hover/active
- Mega-menu for the three clouds + solutions

## 5. Layout Principles

### Structure
- Centered max-width (~1200–1280px) marketing layout
- Alternating white / soft / deep-ink sections to pace the narrative
- Logo social-proof rail near the top; case-study + solution grids below; credential strip near the footer

### Spacing
- 8px-based spacing scale
- Generous section rhythm (64–96px) for an uncluttered enterprise feel; comfortable card internals (24px)

### Density
Appier is **medium density** — more breathing room than a commerce surface, befitting a considered B2B purchase, but information-rich (stats, credentials, solution explainers). Whitespace conveys credibility and focus.

## 6. Depth & Elevation

Appier leans **clean with soft elevation and luminous gradient accents**.

- **Card shadow**: `0 4px 16px rgba(16,17,48,0.08)` — soft, cool-cast lift
- **Sticky header**: `0 1px 4px rgba(16,17,48,0.06)` on scroll
- **Modal / dialog**: `0 12px 40px rgba(16,17,48,0.2)`
- **Glow accents**: blue→cyan gradient glows behind product demos and hero graphics — the system's "lighting", suggesting AI in motion
- Buttons are flat; blue color is the weight.

### Z-Index
- Sticky nav above content; mega-menu above nav; modals above chrome; toasts highest.

## 7. Do's and Don'ts

- **DO** reserve electric blue (`#1D2EFF`) for brand + action + intelligence — CTAs, links, stat highlights, gradient accents.
- **DON'T** dilute the blue toward a friendly/pastel tone; its charged saturation is the "AI precision" signal.
- **DO** lead with measurable results (case-study stats) and third-party credentials (Gartner, ISO).
- **DON'T** rely on vague AI hype; Appier's credibility is numbers and proof.
- **DO** use the blue→cyan gradient for "intelligence in motion" moments (hero, product demos).
- **DON'T** scatter gradients everywhere; they're reserved for the AI-in-motion narrative.
- **DO** keep a crisp white/dark-ink neutral base so the blue always reads as the active element.
- **DON'T** introduce competing accent colors that muddy the single-blue brand signal.
- **DO** use `8–12px` radius (buttons 8px, cards 12px) for a clean professional feel.
- **DON'T** use playful pill geometry or heavy shadows — Appier is enterprise, not consumer.
- **DO** use big bold headlines and big bold stats; B2B clarity over decoration.
- **DO** author EN primary with native TC/JP per market; never machine-translate.

## 8. Responsive Behavior

### Breakpoints
| Width | Behavior |
|---|---|
| Desktop `>1200px` | Full nav + mega-menu, multi-column solution/case-study grids, centered container |
| Laptop `1024–1200px` | 2–3 column grids, condensed nav |
| Tablet `768–1024px` | 2 column → single column; nav collapses; logo rail wraps |
| Mobile `<768px` | Single column, hamburger nav, full-width blue CTA, stacked cards, tabs become a scrollable row |

### Touch & Mobile
- Full-width primary CTA on mobile
- Industry-results tabs become horizontally scrollable
- Animated demos degrade to static graphics on mobile for performance
- Generous tap targets (44px+)

### Media
- Product-demo animations (GIF/video) with static fallback
- Logo rail and graphics use SVG; responsive scaling

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / action / intelligence: Appier Blue (`#1D2EFF`); pressed `#1626D9`; tint `#EBEDFF`
- Cyan accent / gradient: `#00D4FF`; gradient `#1D2EFF → #00D4FF`
- Text primary: `#101130`; muted: `#8A8FA3`
- Surface: white `#FFFFFF`; soft `#F5F6FA`; deep ink `#101130`
- Border: `#D1D5E3`
- Semantic: Success `#16A34A` · Warning `#F59E0B` · Error `#DC2626`

### Example Component Prompts
- "Create an Appier primary CTA: `#1D2EFF` bg, white text, 8px radius, 16px/600, padding 12px 24px, no shadow. Hover bg `#1626D9`. Label 'Book a Demo'."
- "Build an Appier solution (cloud) card: white bg, 12px radius, 1px solid #E6E8F0, 24px padding, wand icon in `#1D2EFF`, title 20px/600 #101130, description 15px/400 #4A4E69, 'Learn more' link in #1D2EFF. Hover: shadow `0 4px 16px rgba(16,17,48,0.08)`."
- "Design a case-study card: white bg, 12px radius, customer logo top, big stat '41%' in 48px/700 #1D2EFF, one-line outcome in 16px/400 #4A4E69."
- "Create a dark hero feature: deep-ink bg (#101130), white headline 48px/700, blue→cyan (#1D2EFF → #00D4FF) gradient glow behind an animated product demo, white CTA + blue secondary."
- "Build a credential strip: white/soft bg, row of Gartner / ISO 27001 / TAG chips (white, 1px solid #E6E8F0, 6px radius), small #8A8FA3 caption 'Trusted & certified'."

### Iteration Guide
1. **Blue is brand + intelligence + action.** Keep saturation charged; keep the base crisp neutral.
2. **Results and credentials are the trust signals** — big stats in blue, third-party badges.
3. **Blue→cyan gradient = AI in motion**, reserved for hero/demos.
4. **8px buttons / 12px cards; flat, soft cool-cast shadows.** Enterprise, not consumer.
5. **Big bold headlines + big bold stats.** B2B clarity.
6. **One-blue discipline** — no competing accent colors.
7. **EN primary, native TC/JP per market.**

---

## 10. Voice & Tone

Appier speaks like a confident enterprise-AI advisor — precise, outcome-oriented, and credible, never hypey or jargon-drunk. The register is **results-forward and authoritative**: it leads with what AI does for the business ("turn AI into ROI") and backs every claim with a number or a credential. The brand is fluent in the language of CMOs and growth teams — ROI, ROAS, conversion, retention — and frames its own technology in terms of the customer's outcome, not the model's cleverness. English is the primary global voice; Traditional Chinese and Japanese serve the home and listing markets, authored natively. The tagline "Empowering Businesses to Turn AI into ROI" and the vision "Making AI easy by making software intelligent" capture the tone — ambitious but grounded, futuristic but accountable.

| Context | Tone |
|---|---|
| Hero / positioning | Confident, outcome-led. `Empowering Businesses to Turn AI into ROI.` Ambition tied to a measurable promise. |
| CTAs | Direct, low-friction. `Book a Demo`, `Contact Us`, `Get Started`. No exclamation. |
| Product / solution copy | Benefit-then-mechanism. What it achieves for the business, then how the AI does it. |
| Case studies | Number-led. `41% conversion boost` — the stat is the headline; narrative supports it. |
| Credentials | Plain and factual. Gartner / ISO / awards stated, not embellished. |
| Empty states (product) | Clear next step toward value (connect a data source / launch a campaign). |
| Errors | Blameless, technical-but-clear, actionable. |
| Corporate / About | First-person-plural, plain, mission-forward. `Appier's vision is…`. |

**Forbidden phrases.** Empty AI hype (`revolutionary AI magic`, `the future is here`) without a metric, `Oops! Something went wrong` without a reason, buzzword stacking (`synergistic agentic blockchain AI`), unsubstantiated superlatives, approximate or unsourced stats (every number must be real), emoji in enterprise chrome, Simplified-Chinese characters on TW surfaces.

**Voice samples.**
- `Empowering Businesses to Turn AI into ROI` — homepage tagline / page title <!-- verified: appier.com page title via WebFetch + WebSearch 2026-05-19 -->
- `Making AI easy by making software intelligent` — vision statement <!-- verified: appier.com via WebFetch 2026-05-19 -->
- `Autonomous, Adaptive, and Agentic` — product-capability framing <!-- verified: appier.com homepage messaging via WebFetch 2026-05-19 -->
- `Book a Demo` — primary conversion CTA <!-- verified: appier.com CTA inventory via WebFetch 2026-05-19 -->
- `41% conversion boost` — illustrative case-study stat pattern <!-- illustrative: representative of Appier's stat-led case-study format observed via WebFetch; specific figure not pinned to a named customer here -->

## 11. Brand Narrative

Appier was founded in **2012** with a deceptively simple but ambitious vision: **"Making AI easy by making software intelligent."** The founders — a team with deep AI research roots — built the company on the thesis that artificial intelligence's value would not come from impressive demos but from being **operationalized into everyday business software** so that ordinary marketing and growth teams could capture ROI without building their own ML stacks. Appier grew from an AI-for-advertising startup in Taipei into a multi-product enterprise platform spanning **Ad Cloud, Personalization Cloud, and Data Cloud**, each now infused with what Appier calls **agentic AI** — and it became one of Taiwan's most prominent deep-tech success stories, listing publicly on the Tokyo Stock Exchange. ([appier.com/en/about](https://www.appier.com/en/about); WebSearch 2026-05-19) <!-- source: appier.com + press via WebFetch/WebSearch 2026-05-19; not independently audited -->

The design language is the surface expression of that "make AI easy" thesis. The charged electric blue says *intelligent technology* without resorting to robot clichés; the crisp white enterprise canvas and disciplined card/grid IA say *this complex AI is organized and explainable*; and the relentless focus on measurable stats and third-party credentials (Gartner, ISO 27001, TAG Anti-Fraud) says *trust us — here is the proof*. The blue→cyan gradient motion behind the product demos is the one place the brand allows itself to look futuristic, visualizing "intelligence in motion" — but even that is in service of clarity, animating how the clouds actually work.

Appier's customer roster — global enterprises like **L'Oréal, BMW, and Nexon** — anchors its homepage as social proof, and its messaging consistently reframes AI from a buzzword into a P&L line: the recurring promise is not "we have AI" but "we turn AI into ROI." That accountability — ambition paired with measurement — is the brand's core, and the design's job is to make a sophisticated AI platform feel both visionary and bankable to a CMO with a budget to defend.

## 12. Principles

1. **AI into ROI, always.** Appier reframes AI from capability to outcome. *UI implication:* Lead with the business result (a stat, a P&L benefit), then explain the mechanism. Never headline with model cleverness alone.

2. **Charged blue is intelligence.** The electric blue is the brand's single voice of "active AI." *UI implication:* Apply `#1D2EFF` to CTAs, links, stat highlights, and gradient accents; keep the base crisp neutral so the blue always reads as the intelligent/active element. Resist competing accents.

3. **Proof over promise.** Credibility comes from numbers and credentials, not adjectives. *UI implication:* Surface case-study stats (large, blue) and third-party badges (Gartner/ISO) as first-class components. Every claim should be backed by a real figure.

4. **Organized complexity.** AI is complex; the design makes it explainable. *UI implication:* Use disciplined card/grid IA, tabbed industry results, and clear three-cloud structure. Whitespace and order convey "this is under control."

5. **Futurist, but accountable.** The brand looks forward without losing rigor. *UI implication:* Reserve the blue→cyan gradient and demo motion for the "intelligence in motion" narrative; keep the rest enterprise-crisp. Visionary visuals must still clarify, not just dazzle.

6. **Global EN, native local.** English leads; TC/JP are authored natively. *UI implication:* Route copy through locale bundles; never machine-translate; never Simplified on TW surfaces.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Appier customer segments (enterprise marketing/growth teams across APAC and global brands), not individual people.*

**Priya, 38, VP of Growth (regional consumer brand).** Evaluates Appier to lift conversion and retention without expanding her data-science headcount. Cares about measurable ROAS, integration with her existing stack, and case studies from comparable brands. The "41%" stats and the Gartner badge are what move her from interest to a demo.

**Kenta, 44, CMO (Japanese enterprise).** Risk-aware, credential-driven buyer who needs board-level confidence before committing. Reads the trust/credential strip (ISO 27001, awards) closely, wants Japanese-language support and proof of data governance. Books a demo only after the credibility signals check out.

**Wei-Chen, 31, marketing-ops lead (Taiwan).** Hands-on operator who will actually run the clouds day-to-day. Cares about whether the dashboards are clear, whether "agentic AI" automations are controllable, and whether reporting maps to her KPIs. Reads the product pages for mechanism, not vision.

## 14. States

| State | Treatment |
|---|---|
| **Empty (dashboard, no data connected)** | One `#8A8FA3` line + primary CTA (`#1D2EFF`) to connect a data source / launch first campaign. Onboarding-oriented. |
| **Empty (no results in a report)** | Clear caption explaining the zero-result in the user's filter terms + adjust-filter action. Never terminal "No data". |
| **Loading (dashboard / report)** | Skeleton cards at `#F5F6FA`, 12px radius; chart areas as gray blocks. Existing data stays during refresh; no full-page spinner. |
| **Loading (inline — submit demo form)** | CTA holds width, in-button spinner; prevents double-submit. |
| **Error (form field)** | Border `1px solid #DC2626`, helper text below in `#DC2626` 12px, field-specific and blameless. |
| **Error (data / API failure)** | Inline banner with `#DC2626` accent, plain technical-but-clear sentence + retry. Never a bare error code. |
| **Success (demo requested)** | Confirmation screen/section — what happens next (a specialist will reach out), not a fleeting toast. |
| **Success (campaign launched)** | Clear confirmation + link to monitoring view; no celebratory animation in an enterprise tool. |
| **Skeleton** | `#F5F6FA` blocks at exact dimensions; numeric placeholders render as `—`, never `0` (a fake metric is worse than none). |
| **Disabled (button)** | Faded fill, `#C4C7D4` text, geometry preserved. |

## 15. Motion & Easing

Appier motion is **purposeful and futurist-restrained** — gradient/demo motion suggests intelligence in motion; UI chrome stays crisp and quick.

**Durations:**
| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, reduce-motion fallback |
| `motion-fast` | 150ms | Hover/press, tab switch, link transitions |
| `motion-standard` | 250ms | Dropdowns, mega-menu, card lifts, tooltip fades |
| `motion-slow` | 400ms | Modal open, section reveals |
| `motion-ambient` | 2000ms+ | Looping blue→cyan gradient / product-demo animation |

**Easings:**
| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Things appearing — modals, menus, cards |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Dismissals |
| `ease-ambient` | `ease-in-out` (looping) | Gradient glow / demo loops |

**Spring stance.** Spring/overshoot is **avoided** on UI chrome — Appier's register is enterprise precision, not playful bounce. The brand's motion energy lives in **ambient gradient and product-demo animation** ("intelligence in motion"), which loops smoothly rather than bouncing. Interactive feedback (hover, press, tab) is quick and platform-native.

**Signature motions.**
1. **Gradient glow (ambient).** A slow blue→cyan (`#1D2EFF → #00D4FF`) gradient drifts behind hero/demo graphics over `motion-ambient / ease-ambient`, looping — the visual signature of "active intelligence."
2. **Product-demo animation.** The three clouds animate to show how data flows / personalization adapts — explanatory motion, looping, with a static fallback on mobile/reduce-motion.
3. **Card lift.** Solution/case-study cards lift via shadow fade-in (`0 4px 16px rgba(16,17,48,0.08)`) over `motion-standard`. No scale jump.
4. **Tab switch (industry results).** Active indicator slides under the new tab over `motion-fast / ease-standard`; content cross-fades.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, ambient gradient and demo animations freeze to a static gradient still; card lifts and tab transitions go instant; all `motion-*` collapse to `motion-instant`. The explanatory content remains (as a static diagram); only the motion is removed.

<!--
OmD v0.1 Sources — appier
Created: 2026-05-19

Tier 1 (partial): appier.com/en WebFetched successfully (2026-05-19) — confirmed primary-blue
identity (blue nav/CTAs/UI, "white logo on blue background" per brand-asset search), tagline
"Empowering Businesses to Turn AI into ROI", vision "Making AI easy by making software intelligent",
"Autonomous, Adaptive, and Agentic" framing, three clouds (Ad/Personalization/Data), enterprise
social proof (L'Oréal, BMW, Nexon), case-study stats (e.g. "41% conversion boost"), credentials
(Gartner, ISO 27001, TAG Anti-Fraud), card/tabbed IA, gradient demo animation. Live computed-style
DOM inspection NOT completed (Playwright MCP session redirected to injected interstitials).
primary_color #1D2EFF is the creation-brief-provided value and matches Appier's known electric-/
Klein-adjacent blue identity; the secondary palette in §2 is a well-grounded approximation (B2B
SaaS conventions) pending live re-inspection. Flagged for a future omd:add-reference UPDATE.

Tier 2 (philosophy/founders):
- appier.com/en/about + appier.com/en (WebFetch 2026-05-19) — founded 2012; vision "Making AI easy
  by making software intelligent"; SaaS AI for business decisions; three clouds; agentic AI; Tokyo
  Stock Exchange listing; enterprise customers.
- WebSearch 2026-05-19 (PRNewswire/Sharecast press) — agentic-AI product-line framing, ROI-driven
  positioning. Metrics not independently audited.

Illustrative (not verified as exact live values): secondary/semantic hexes, type scale, font stack
(inferred from B2B SaaS conventions), the named "41%" stat (representative of Appier's stat-led
case-study format, not pinned to a specific named customer here). Marked inline. Personas
fictional (§13).
-->

---

**Verified:** 2026-05-19
**Tier 1 sources:** appier.com/en (WebFetch — blue-dominant identity, tagline "Empowering Businesses to Turn AI into ROI", vision "Making AI easy by making software intelligent", "Autonomous, Adaptive, and Agentic", three clouds, L'Oréal/BMW/Nexon social proof, case-study stats, Gartner/ISO credentials). Live DOM inspect NOT completed (browser redirect); primary `#1D2EFF` is brief-provided and matches Appier's electric-blue identity; other hexes are grounded approximations pending live re-inspection.
**Tier 2 sources:** styles.refero.design / getdesign.md — not checked this pass (browser session unreliable); brandfetch/logokit aggregators returned 403.
**Tier 2 (Philosophy/founders):** appier.com/en/about (founded 2012, "Making AI easy…", three clouds, TSE listing); PRNewswire/Sharecast (agentic-AI / ROI positioning).
**Style ref:** `stripe` (engineering/enterprise tone). **Conflicts unresolved:** production hexes beyond primary not live-verified this pass (browser unreliable) — flagged for UPDATE.
