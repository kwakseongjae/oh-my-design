---
id: intercom
name: Intercom
country: US
category: productivity
homepage: "https://www.intercom.com"
primary_color: "#286efa"
logo:
  type: simpleicons
  slug: intercom
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  note: "primary text/buttons are off-black #111111; Fin Orange #ff5600 is the singular brand accent"
  colors:
    off-black: "#111111"
    white: "#ffffff"
    canvas: "#faf9f6"
    fin-orange: "#ff5600"
    report-orange: "#fe4c02"
    report-blue: "#65b5ff"
    report-green: "#0bdf50"
    report-red: "#c41c1c"
    report-pink: "#ff2067"
    black-80: "#313130"
    black-60: "#626260"
    muted: "#7b7b78"
    tertiary: "#9c9fa5"
    border: "#dedbd6"
    warm-sand: "#d3cec6"
  typography:
    family: { sans: "Saans", serif: "Serrif", mono: "SaansMono" }
    display-hero: { size: 80, weight: 400, lineHeight: 1.00, tracking: -2.4, use: "Display hero, ultra-compressed" }
    section:      { size: 54, weight: 400, lineHeight: 1.00, tracking: -1.6, use: "Section heading" }
    feature:      { size: 24, weight: 400, lineHeight: 1.00, tracking: -0.48, use: "Feature title" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text" }
    nav:          { size: 18, weight: 400, lineHeight: 1.00, use: "Nav / UI" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 6, lg: 8, full: 9999 }
  shadow:
    flat: "none"
  components:
    button-primary: { type: button, bg: "#111111", fg: "#ffffff", radius: 4, padding: "0px 14px", use: "Primary dark button, scale(1.1) hover" }
    button-outlined: { type: button, bg: "#faf9f6", fg: "#111111", radius: 4, use: "Outlined button, 1px off-black border" }
    button-warm: { type: button, bg: "#faf9f6", fg: "#111111", padding: "16px", use: "Warm card button" }
    card: { type: card, bg: "#faf9f6", radius: 8, use: "Warm cream card, oat border, no shadow" }
    nav-link: { type: tab, fg: "#111111", font: "16px Saans", use: "Nav link, off-black on white" }
  components_harvested: true
---

# Design System Inspiration of Intercom

## 1. Visual Theme & Atmosphere

Intercom's website is a warm, confident customer service platform that communicates "AI-first helpdesk" through a clean, editorial design language. The page operates on a warm off-white canvas (`#faf9f6`) with off-black (`#111111`) text, creating an intimate, magazine-like reading experience. The signature Fin Orange (`#ff5600`) — named after Intercom's AI agent — serves as the singular vibrant accent against the warm neutral palette.

The typography uses Saans — a custom geometric sans-serif with aggressive negative letter-spacing (-2.4px at 80px, -0.48px at 24px) and a consistent 1.00 line-height across all heading sizes. This creates ultra-compressed, billboard-like headlines that feel engineered and precise. Serrif provides the serif companion for editorial moments, and SaansMono handles code and uppercase technical labels. MediumLL and LLMedium appear for specific UI contexts, creating a rich five-font ecosystem.

What distinguishes Intercom is its remarkably sharp geometry — 4px border-radius on buttons creates near-rectangular interactive elements that feel industrial and precise, contrasting with the warm surface colors. Button hover states use `scale(1.1)` expansion, creating a physical "growing" interaction. The border system uses warm oat tones (`#dedbd6`) and oklab-based opacity values for sophisticated color management.

**Key Characteristics:**
- Warm off-white canvas (`#faf9f6`) with oat-toned borders (`#dedbd6`)
- Saans font with extreme negative tracking (-2.4px at 80px) and 1.00 line-height
- Fin Orange (`#ff5600`) as singular brand accent
- Sharp 4px border-radius — near-rectangular buttons and elements
- Scale(1.1) hover with scale(0.85) active — physical button interaction
- SaansMono uppercase labels with wide tracking (0.6px–1.2px)
- Rich multi-color report palette (blue, green, red, pink, lime, orange)
- oklab color values for sophisticated opacity management

## 2. Color Palette & Roles

### Primary
- **Off Black** (`#111111`): `--color-off-black`, primary text, button backgrounds
- **Pure White** (`#ffffff`): `--wsc-color-content-primary`, primary surface
- **Warm Cream** (`#faf9f6`): Button backgrounds, card surfaces
- **Fin Orange** (`#ff5600`): `--color-fin`, primary brand accent
- **Report Orange** (`#fe4c02`): `--color-report-orange`, data visualization

### Report Palette
- **Report Blue** (`#65b5ff`): `--color-report-blue`
- **Report Green** (`#0bdf50`): `--color-report-green`
- **Report Red** (`#c41c1c`): `--color-report-red`
- **Report Pink** (`#ff2067`): `--color-report-pink`
- **Report Lime** (`#b3e01c`): `--color-report-lime-300`
- **Green** (`#00da00`): `--color-green`
- **Deep Blue** (`#0007cb`): Deep blue accent

### Neutral Scale (Warm)
- **Black 80** (`#313130`): `--wsc-color-black-80`, dark neutral
- **Black 60** (`#626260`): `--wsc-color-black-60`, mid neutral
- **Black 50** (`#7b7b78`): `--wsc-color-black-50`, muted text
- **Content Tertiary** (`#9c9fa5`): `--wsc-color-content-tertiary`
- **Oat Border** (`#dedbd6`): Warm border color
- **Warm Sand** (`#d3cec6`): Light warm neutral

## 3. Typography Rules

### Font Families
- **Primary**: `Saans`, fallbacks: `Saans Fallback, ui-sans-serif, system-ui`
- **Serif**: `Serrif`, fallbacks: `Serrif Fallback, ui-serif, Georgia`
- **Monospace**: `SaansMono`, fallbacks: `SaansMono Fallback, ui-monospace`
- **UI**: `MediumLL` / `LLMedium`, fallbacks: `system-ui, -apple-system`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Display Hero | Saans | 80px | 400 | 1.00 (tight) | -2.4px |
| Section Heading | Saans | 54px | 400 | 1.00 | -1.6px |
| Sub-heading | Saans | 40px | 400 | 1.00 | -1.2px |
| Card Title | Saans | 32px | 400 | 1.00 | -0.96px |
| Feature Title | Saans | 24px | 400 | 1.00 | -0.48px |
| Body Emphasis | Saans | 20px | 400 | 0.95 | -0.2px |
| Nav / UI | Saans | 18px | 400 | 1.00 | normal |
| Body | Saans | 16px | 400 | 1.50 | normal |
| Body Light | Saans | 14px | 300 | 1.40 | normal |
| Button | Saans | 16px / 14px | 400 | 1.50 / 1.43 | normal |
| Button Bold | LLMedium | 16px | 700 | 1.20 | 0.16px |
| Serif Body | Serrif | 16px | 300 | 1.40 | -0.16px |
| Mono Label | SaansMono | 12px | 400–500 | 1.00–1.30 | 0.6px–1.2px uppercase |

## 4. Component Stylings

### Buttons

**Primary Dark**
- Background: `#111111`
- Text: `#ffffff`
- Padding: 0px 14px
- Radius: 4px
- Hover: white background, dark text, scale(1.1)
- Active: green background (`#2c6415`), scale(0.85)

**Outlined**
- Background: transparent
- Text: `#111111`
- Border: `1px solid #111111`
- Radius: 4px
- Same scale hover/active behavior

**Warm Card Button**
- Background: `#faf9f6`
- Text: `#111111`
- Padding: 16px
- Border: `1px solid oklab(... / 0.1)`

### Cards & Containers
- Background: `#faf9f6` (warm cream)
- Border: `1px solid #dedbd6` (warm oat)
- Radius: 8px
- No visible shadows

### Navigation
- Saans 16px for links
- Off-black text on white
- Small 4px–6px radius buttons
- Orange Fin accent for AI features

## 5. Layout Principles

### Spacing: 8px, 10px, 12px, 14px, 16px, 20px, 24px, 32px, 40px, 48px, 60px, 64px, 80px, 96px
### Border Radius: 4px (buttons), 6px (nav items), 8px (cards, containers)

## 6. Depth & Elevation
Minimal shadows. Depth through warm border colors and surface tints.

## 7. Do's and Don'ts

### Do
- Use Saans with 1.00 line-height and negative tracking on all headings
- Apply 4px radius on buttons — sharp geometry is the identity
- Use Fin Orange (#ff5600) for AI/brand accent only
- Apply scale(1.1) hover on buttons
- Use warm neutrals (#faf9f6, #dedbd6)

### Don't
- Don't round buttons beyond 4px
- Don't use Fin Orange decoratively
- Don't use cool gray borders — always warm oat tones
- Don't skip the negative tracking on headings

## 8. Responsive Behavior
Breakpoints: 425px, 530px, 600px, 640px, 768px, 896px

## 9. Agent Prompt Guide

### Quick Color Reference
- Text: Off Black (`#111111`)
- Background: Warm Cream (`#faf9f6`)
- Accent: Fin Orange (`#ff5600`)
- Border: Oat (`#dedbd6`)
- Muted: `#7b7b78`

### Example Component Prompts
- "Create hero: warm cream (#faf9f6) background. Saans 80px weight 400, line-height 1.00, letter-spacing -2.4px, #111111. Dark button (#111111, 4px radius). Hover: scale(1.1), white bg."

## 10. Voice & Tone

Intercom's voice is **support-team-first and product-agentic** — speaks as a customer messaging platform that's positioned itself for the AI agent era ("the only helpdesk designed for the AI Agent era"). Marketing copy emphasizes the support team workflow + AI agent integration.

| Context | Tone |
|---|---|
| CTA | Verb. "Get started", "Try Fin", "Book a demo" |
| Marketing | AI-agent-positioned. Fin (their AI agent) is first-class brand element |
| Documentation | Practical, integration-heavy |
| Error | Specific. "Conversation not synced. Refresh to retry." |

**Voice samples**
- Marketing tagline: *"The only helpdesk designed for the AI Agent era"* <!-- verified: intercom.com homepage 2026-05 -->

**Forbidden phrases.** "Revolutionary support", "AI-powered" without specifics.

## 11. Brand Narrative

Intercom was founded **2011** in **California** by **four Irish designers and engineers** — **Eoghan McCabe (Chairman, ex-CEO)**, **Des Traynor**, **Ciaran Lee**, and **David Barrett** ([Intercom — Wikipedia](https://en.wikipedia.org/wiki/Intercom,_Inc.), [Eoghan McCabe — Crunchbase](https://www.crunchbase.com/person/eoghan-mccabe)). The four had previously run a Dublin design consultancy named **Contrast** and built the bug-tracking tool **Exceptional**, which they **sold to Rackspace 2011** — those proceeds funded Intercom. Initially employed 30 people in **Dublin** before the founders relocated HQ to **San Francisco**. Funding/lineage: **2012 angel from Twitter co-founder Biz Stone**, then seed from **David Sacks, Andy McLoughlin (Huddle), Dan Martell, 500 Global, Digital Garage** → **Series A $6M March 2013** led by **Social Capital** ([Irish Times — Four Irishmen on a billion-dollar mission](https://www.irishtimes.com/business/technology/four-irishmen-on-a-mission-to-build-a-billion-dollar-company-1.1664244)) → **$250M debt financing 2025** alongside **€87M / $94M extra AI investment 2024** ([Irish Times — €87M AI investment](https://www.irishtimes.com/business/2024/05/14/intercom-boss-wants-aggression-on-all-fronts-amid-extra-94m-ai-investment/), [Silicon Republic — $250M debt](https://www.siliconrepublic.com/business/intercom-eoghan-mccabe-debt-financing-hiring-jobs-ai)). Originally positioned as "the customer messaging platform" (challenging Zendesk's ticketing model with conversation-first UX). **2023 launch of Fin** — AI chatbot powered by GPT-4 — became the central product story; in 2025 the AI Agent now ships on **fin.ai** as a discrete product surface alongside intercom.com helpdesk chrome.

## 12. Principles

1. **Conversations over tickets.** *UI implication:* main inbox is conversation-shaped, not row-shaped.
2. **Fin is the agent layer.** *UI implication:* Fin Resolutions metric has main-nav placement; AI agent isn't a sub-feature.
3. **Saans is the type voice.** *UI implication:* warm cream + Saans 80px hero is the brand register.
4. **Hover scale signals interactive.** Buttons grow on hover (scale 1.1). *UI implication:* preserve hover scale; don't replace with color-only transition.
5. **Cream over white.** Default canvas `#faf9f6`. *UI implication:* don't use pure white — the cream is intentional warmth.

## 13. Personas

*Personas are fictional archetypes informed by Intercom user segments (support team leads, RevOps, AI/Fin admins), not individual people.*

**Aisha Patel, 33, Dublin.** Support team lead at SaaS startup. Configures Fin to deflect 60% of tier-1 tickets.

**Marcus Webb, 41, San Francisco.** RevOps at B2B SaaS. Uses Intercom outbound for product-led growth campaigns.

**Priya Krishnan, 28, Bengaluru.** Frontline support agent. Cares about Inbox keyboard shortcuts + macros.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no conversations)** | "Welcome to your Inbox" + onboarding tour |
| **Empty (Fin disabled)** | "Enable Fin to deflect tickets" with single CTA |
| **Loading (conversation history)** | Skeleton message bubbles in cream tones |
| **Loading (Fin response)** | Typing indicator with Fin avatar |
| **Error (sync)** | Banner top-of-inbox with retry |
| **Error (Fin failed)** | Inline below message + escalate-to-human option |
| **Success (assigned)** | Subtle bg shift on conversation row |
| **Success (Fin resolved)** | Resolution badge appears on conversation |
| **Skeleton (inbox)** | Cream rows with subtle shimmer |
| **Disabled (no permission)** | 0.5 opacity + tooltip permission level |
| **Loading (long Fin run)** | Per-step "Searching knowledge base..." trace |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover scale (1.0 → 1.1) |
| `motion-standard` | 250ms | Modal, panel |
| `motion-typing` | continuous | Fin "typing" indicator |

Standard cubic-bezier; **hover scale 1.1 is signature**. `prefers-reduced-motion: reduce` disables hover scale (color shift only).

---

**Verified:** 2026-05-08 (omd:migrate run 29 — Apple-tier)
**Tier 1 sources:** intercom.com home + fin.ai/ (dual-product live DOM via playwright — Hero Primary `#000` 6px / 42px / 12×16 / 16px·400 (intercom.com Cream `#faf9f6` canvas) and `#fff` 6px (fin.ai dark canvas); Compact Primary **`#111111`** Intercom Charcoal 4px / 40px / 0×14).
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 2 (Philosophy/founders):** Wikipedia (Intercom Inc.), Crunchbase (McCabe), Irish Times (4-Irishmen origin + €87M AI investment), Silicon Republic ($250M debt), Tracxn, Paperflite.
**Style ref:** `claude`. **Conflicts unresolved:** none. **Earlier mistake reverted:** prior footer captured only nav + canvas; canonical Primary is Black 6px hero + Charcoal `#111111` 4px compact across dual-product (intercom.com + fin.ai) chrome.
