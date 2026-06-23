---
id: starling
name: Starling Bank
country: UK
category: fintech
homepage: "https://www.starlingbank.com"
primary_color: "#50ffeb"
logo:
  type: simpleicons
  slug: starlingbank
verified: "2026-06-22"
added: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary CTA = live-inspect teal/mint (#50ffeb); brand dark = deep aubergine (#321e37); interactive purple (#6935d3) appears on skip links and focus rings."
  colors:
    primary: "#50ffeb"
    brand-dark: "#321e37"
    interactive: "#6935d3"
    canvas: "#ffffff"
    surface-warm: "#f8f5f0"
    surface-cream: "#f6efea"
    ink: "#321e37"
    muted-purple: "#706273"
    hairline: "#d6d2d7"
    footer-muted: "#a3a9ba"
    on-primary: "#321e37"
    on-dark: "#ffffff"
  typography:
    family: { display: "Avantt", mono: "CoFo Sans Semi-Mono", fallback: "Inter tight, sans-serif" }
    display-hero: { size: 48, weight: 550, lineHeight: 1.125, use: "Hero headlines, Avantt weight 550" }
    section:      { size: 36, weight: 550, lineHeight: 1.22, use: "Section titles, Avantt" }
    subsection:   { size: 21, weight: 600, lineHeight: 1.14, use: "Card / feature heads, Avantt" }
    body:         { size: 18, weight: 450, lineHeight: 1.33, use: "Standard body text, Avantt" }
    nav:          { size: 18, weight: 550, lineHeight: 1.00, use: "Nav links, CoFo Sans Semi-Mono" }
    button:       { size: 18, weight: 550, lineHeight: 1.00, use: "Button label, CoFo Sans Semi-Mono" }
    footer:       { size: 15, weight: 600, lineHeight: 1.60, use: "Footer navigation links, Avantt" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#50ffeb", fg: "#321e37", radius: "4px", padding: "10px 16px", height: "40px", font: "18px / 550 CoFo Sans Semi-Mono", border: "1px solid #50ffeb", use: "Apply now, Learn more, Tell me more — primary CTA" }
    button-ghost: { type: button, fg: "#321e37", radius: "4px", padding: "10px 16px", height: "40px", font: "18px / 550 CoFo Sans Semi-Mono", use: "Outlined secondary action on dark backgrounds" }
    nav-link: { type: tab, fg: "#321e37", font: "18px / 550 CoFo Sans Semi-Mono", use: "Top nav items", active: "text #321e37 active indicator" }
    card-warm: { type: card, bg: "#f8f5f0", fg: "#321e37", radius: "8px", use: "Warm off-white content card on main surface" }
    card-white: { type: card, bg: "#ffffff", fg: "#321e37", radius: "8px", use: "White elevated card, 1px #d6d2d7 border" }
    badge-teal: { type: badge, bg: "#50ffeb", fg: "#321e37", radius: "4px", padding: "4px 8px", font: "15px / 600 Avantt", use: "Status tag, feature highlight" }
    input-default: { type: input, bg: "#ffffff", fg: "#321e37", border: "1px solid #d6d2d7", radius: "4px", font: "18px / 450 Avantt", use: "Form field" }
  components_harvested: true
---

# Design System Inspiration of Starling Bank

## 1. Visual Theme & Atmosphere

Starling Bank's visual identity is one of the most distinctive in UK neobanking — a bold, high-contrast system that pairs a deep aubergine-purple canvas (`#321e37`) with an electric teal/mint CTA (`#50ffeb`) that lights up every page like a circuit trace. Where most fintech brands retreat to safe navy-and-white, Starling leans into a dark, warm body color and a neon-adjacent accent that reads as both technically precise and unmistakably contemporary. The hero opens on a rich, dark background — the brand's signature aubergine (`#321e37`) — with white headline text and that single mint CTA anchoring the action.

The typographic system divides into two distinct roles: **Avantt** carries all display prose at weights 450–600, giving the brand a geometric, humanist warmth that feels neither rigid nor whimsical — it reads like a confident mid-century Swiss typeface reimagined for mobile-first banking. **CoFo Sans Semi-Mono** takes every interactive element (buttons, nav labels) at weight 550, injecting a subtle monospaced precision that whispers "engineered" without shouting "developer tool." This font split — humanist prose over mono UI chrome — is Starling's most unusual typographic choice and the clearest signal of its engineering-first, consumer-friendly dual identity.

The page surface is warm rather than clinical: the main body background is a soft off-white (`#f8f5f0`) rather than pure white, and the content zones alternate between this warm cream and a slightly darker cream variant (`#f6efea`). Cards live on these tinted surfaces with thin `#d6d2d7` hairlines rather than box shadows. This flat, warm-tinted approach keeps the financial UI feeling approachable and premium rather than sterile or corporate.

**Key Characteristics:**
- Avantt at weight 550 for all headlines — geometric, confident, humanist warmth
- CoFo Sans Semi-Mono at 550 for all interactive chrome — mono precision signals engineering
- Mint/teal CTA (`#50ffeb`) as the single action color — neon-adjacent, unmissable
- Deep aubergine (`#321e37`) for hero backgrounds and primary ink — warm, distinctive, non-corporate
- Flat depth: warm tinted surfaces (`#f8f5f0`, `#f6efea`) and `#d6d2d7` hairlines, no shadows
- Conservative 4px radius on buttons and inputs — confident and clean, not pill-shaped
- Interactive/focus purple (`#6935d3`) for skip links and keyboard focus rings

## 2. Color Palette & Roles

### Primary
- **Starling Mint** (`#50ffeb`): Primary CTA background and the brand's defining accent. This electric teal-green lights up every interactive surface — "Apply now", "Learn more", "Tell me more". Reserved almost exclusively for primary actions.
- **Brand Dark** (`#321e37`): Starling's signature aubergine-purple. Serves as hero section background, primary ink/text color, and the CTA text on mint backgrounds. Not black, not navy — a warm, distinctive purple-brown that carries authority without corporate coldness.
- **Interactive Purple** (`#6935d3`): Appears on skip-to-content links and keyboard focus rings. The web-safety purple signals accessibility-first engineering.

### Surface & Background
- **Canvas White** (`#ffffff`): Card surfaces, elevated panels, white sections.
- **Surface Warm** (`#f8f5f0`): Primary page background — a warm off-white that prevents the stark clinical feel of pure white.
- **Surface Cream** (`#f6efea`): Secondary tinted surface for alternating content zones.
- **Muted Purple-Grey** (`#706273`): Secondary text layer on warm backgrounds — a desaturated aubergine.
- **Hairline** (`#d6d2d7`): Thin borders, card outlines, dividers — the system's primary separation device.
- **Footer Muted** (`#a3a9ba`): Subtle blue-grey for footer nav and metadata.

## 3. Typography Rules

### Font Family
- **Display/Body**: `Avantt` with fallback `"Inter tight", sans-serif` — used for all headlines and body prose at weights 450–600.
- **Interactive/Mono**: `"CoFo Sans Semi-Mono"` with fallback `"Roboto mono", sans-serif` — used for all button labels and nav items at weight 550. The semi-monospaced quality creates visual rhythm in interactive surfaces.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Avantt | 48px | 550 | 1.125 | Hero H1, white on dark |
| Section Heading | Avantt | 36px | 550 | 1.22 | H2 section titles |
| Card Heading | Avantt | 21px | 600 | 1.14 | H3 card/feature heads |
| Body | Avantt | 18px | 450 | 1.33 | Standard reading text |
| Nav / Button | CoFo Sans Semi-Mono | 18px | 550 | 1.00 | Interactive chrome |
| Footer Links | Avantt | 15px | 600 | 1.60 | Footer navigation |

### Principles
- **Two-font system with clear job demarcation**: Avantt owns prose and display; CoFo Semi-Mono owns all interactive touchpoints. They never swap roles.
- **Weight 550 as the Starling signature**: Not 500 (regular) or 600 (semibold) — the 550 midpoint is a variable-font refinement that gives headlines and buttons a quietly confident authority.
- **Body size at 18px**: Generous for a financial product, signaling accessibility and warmth over information density. Starling's target is consumers, not power traders.
- **No negative tracking at display sizes**: Unlike many fintech brands, Starling doesn't compress its headlines — the type breathes at natural spacing, reinforcing the approachable register.

## 4. Component Stylings

### Buttons

**Primary CTA (Mint Fill)**
- Background: `#50ffeb`
- Text: `#321e37`
- Radius: 4px
- Padding: 10px 16px
- Height: 40px
- Font: 18px CoFo Sans Semi-Mono weight 550
- Border: 1px solid `#50ffeb`
- Use: Primary calls to action ("Apply now", "Learn more", "Do life together", "Tell me more")

**Ghost / Outlined**
- Background: transparent
- Text: `#321e37`
- Radius: 4px
- Padding: 10px 16px
- Height: 40px
- Font: 18px CoFo Sans Semi-Mono weight 550
- Use: Secondary actions on light backgrounds

### Inputs & Forms

**Default**
- Background: `#ffffff`
- Border: 1px solid `#d6d2d7`
- Radius: 4px
- Text: `#321e37`
- Font: 18px Avantt weight 450
- Focus: 2px solid `#6935d3` focus ring
- Use: Form fields across personal and business account applications

### Cards & Containers

**Warm Surface Card**
- Background: `#f8f5f0`
- Text: `#321e37`
- Radius: 8px
- Use: Feature cards on warm body background — no shadow, flat and warm

**White Elevated Card**
- Background: `#ffffff`
- Text: `#321e37`
- Border: 1px solid `#d6d2d7`
- Radius: 8px
- Use: Elevated content panel on warm surface, testimonials, comparison cards

### Badges

**Mint Tag**
- Background: `#50ffeb`
- Text: `#321e37`
- Radius: 4px
- Padding: 4px 8px
- Font: 15px Avantt weight 600
- Use: Feature badges, award callouts, status indicators

### Navigation

**Top Nav**
- Background: `#ffffff` (or transparent on dark sections)
- Text: `#321e37`
- Font: 18px CoFo Sans Semi-Mono weight 550
- Height: ~64px
- Active: `#321e37` (same weight, contextual underline)
- CTA: Mint "Apply now" button right-aligned
- Use: Personal / Business / About / Help / Log in + Apply now

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.starlingbank.com/ (homepage, computed style — hero, nav, buttons, headings, color frequency); https://www.starlingbank.com/business/ (business page — confirmed same button/typography system)
**Tier 2 sources:** getdesign.md/starling — not found; styles.refero.design/?q=starling+bank — no Starling entry (general fintech results returned, closest was N26)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: Buttons use 10px vertical / 16px horizontal padding — slightly asymmetric, generous for touch targets

### Grid & Container
- Wide hero spans full 1440px with centered content and image background
- Section width: ~1392px inner constraint (measured from inspect)
- Trust badges (Which? / CASS / FSCS) arranged horizontally below hero headline
- Feature sections use 3–4 column card grid on warm surface
- Account type section (Joint / Personal / Business / Under 16s) uses 4-up card grid

### Whitespace Philosophy
- **Warm, open spacing**: The 18px body text and generous section padding make the page feel unhurried. Starling positions itself as the calm, confident alternative to stressful banking, and the layout communicates this.
- **Flat segmentation**: Sections alternate between `#f8f5f0` and `#f6efea` warm cream bands, with no shadows. Background color alone does the work of separation.
- **Card rhythm**: The consistent 8px radius on all cards and the absence of shadows creates a clean, unified card family across the site.

### Border Radius Scale
- Small (4px): Buttons, inputs, badges — the interactive default
- Standard (8px): Cards, containers — the layout workhorse
- Large (16px): Rare, hero image panels
- No pill shapes: Starling's system is angular-leaning — round corners signal approachability, not consumer-app softness

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text |
| Tint (Level 1) | `#f8f5f0` or `#f6efea` background | Section / card separation |
| Hairline (Level 2) | `1px solid #d6d2d7` | White card outlines, dividers |
| Focus (Accessibility) | `2px solid #6935d3` outline | Keyboard focus ring |

**Shadow Philosophy**: Starling is a near-shadowless system. Live inspection found `box-shadow: none` across buttons, nav, headings, and cards. Elevation and grouping are communicated through warm tinted backgrounds (`#f8f5f0`, `#f6efea`) and `#d6d2d7` hairlines. When visual emphasis is needed, the system reaches for the mint accent (`#50ffeb`) or dark aubergine (`#321e37`), not elevation. This choice keeps the product feeling fast, modern, and mobile-native.

## 7. Do's and Don'ts

### Do
- Use Avantt weight 550 for headlines — it's the brand's voice
- Use CoFo Sans Semi-Mono weight 550 for all buttons and nav labels — the mono distinction matters
- Reserve mint (`#50ffeb`) for primary CTAs — it's the single action signal
- Use deep aubergine (`#321e37`) for hero backgrounds and primary ink
- Separate sections with warm tinted surfaces (`#f8f5f0`) and `#d6d2d7` hairlines, not shadows
- Keep border-radius at 4px for interactive elements, 8px for cards
- Use `#6935d3` for keyboard focus rings — accessibility-first engineering signal

### Don't
- Use drop shadows for elevation — Starling is flat and warm
- Apply Avantt to nav/button labels — CoFo Semi-Mono owns the interactive layer
- Spread mint across decorative elements — one action signal, one color
- Use pure black (`#000000`) for body text — use brand dark aubergine `#321e37`
- Use pill-shaped or large-radius buttons — the system is deliberately angular
- Apply negative letter-spacing to headlines — Starling lets its type breathe
- Use cold clinical white (`#ffffff`) as the main page background — `#f8f5f0` warm off-white is the canvas

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses to ~32px, cards stack |
| Tablet | 640-1024px | 2-column cards, moderate padding |
| Desktop | 1024-1440px | Full layout, 3–4 column feature grids |

### Touch Targets
- Primary CTA at 40px height with 10px/16px padding — comfortable tap target
- Nav links at 18px with 3px/8px minimum padding within 64px header
- Cards span full column width on mobile for large tap areas

### Collapsing Strategy
- Hero headline 48px compresses on mobile; weight 550 maintained throughout
- Account type cards: 4-up → 2-up → single column
- Trust badge row: horizontal → 2-row wrap on mobile
- CoFo Semi-Mono on buttons stays consistent across breakpoints

### Image Behavior
- Hero background image scales with full-bleed approach
- App screenshots maintain flat (no shadow) treatment at all sizes
- Card images at 8px radius throughout

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Starling Mint (`#50ffeb`)
- Brand dark / hero bg / ink: Aubergine (`#321e37`)
- Interactive / focus: Purple (`#6935d3`)
- Page background: Warm off-white (`#f8f5f0`)
- Secondary surface: Cream (`#f6efea`)
- White card: `#ffffff`
- Hairline: `#d6d2d7`
- Muted purple: `#706273`
- Footer muted: `#a3a9ba`

### Example Component Prompts
- "Create a hero section on dark aubergine (#321e37). H1 at 48px Avantt weight 550, white text. Subtitle 18px Avantt weight 450, #ffffff opacity 80%. Mint CTA: #50ffeb background, #321e37 text, 4px radius, 10px 16px padding, 18px CoFo Sans Semi-Mono weight 550."
- "Design a feature card on warm off-white (#f8f5f0). Card: white #ffffff background, 1px solid #d6d2d7 border, 8px radius, no shadow. Title 21px Avantt weight 600, #321e37. Body 18px Avantt weight 450, #706273."
- "Build a section with warm tinted band (#f8f5f0). Section title 36px Avantt weight 550, #321e37. Cards use white #ffffff with #d6d2d7 hairline, 8px radius."
- "Create a navigation: white background, ~64px height. CoFo Sans Semi-Mono 18px weight 550 for nav links, #321e37 text. Mint 'Apply now' CTA right-aligned, 4px radius."

### Iteration Guide
1. Avantt weight 550 for all display headlines — weight 600 for subheadings, 450 for body
2. CoFo Sans Semi-Mono for buttons and nav — never Avantt in those roles
3. Mint (`#50ffeb`) is the single action color — don't spread it beyond primary CTAs
4. No shadows — separate with `#f8f5f0` tint and `#d6d2d7` hairlines
5. 4px radius for buttons/inputs, 8px for cards — angular-leaning system
6. Hero backgrounds use `#321e37` aubergine — never pure black or standard navy

---

## 10. Voice & Tone

Starling's voice is **direct, warm, and quietly disruptive** — a challenger brand that has earned the right to be confident. The founding line "Banking was broken — so we decided to fix it" sets the register: declarative, mission-driven, no hedging. Copy speaks to people who are skeptical of financial institutions and want to be treated as intelligent adults, not products to be managed.

| Context | Tone |
|---|---|
| Hero headlines | Declarative and punchy. "Good with money starts here." / "Business banking. But better." Short, confident, a touch of cheek. |
| Product descriptions | Benefit-led and human-scaled. "Fast technology, fair service and honest values. All at the tap of a phone." |
| CTAs | Warm imperatives with personality. "Do life together" (joint accounts), "Let's talk business", "Teach life skills" (under-16s). |
| Awards / trust signals | Matter-of-fact. States the accolade ("Which? Recommended provider") without excessive celebration. |
| Blog / editorial | Conversational, practical, non-judgmental. Uses first-person stories and concrete financial examples. |
| Accessibility / legal | Plain English. No jargon. FSCS protection stated simply. |
| Sustainability | Values-driven but specific, not vague ("95% recycled debit cards", "funded 100,000 trees"). |

**Voice samples (verbatim from live site):**
- "Good with money starts here." — hero headline *(verified live 2026-06-22)*
- "Game-changing banking. Life-changing habits." — homepage H2 *(verified live 2026-06-22)*
- "Business banking. But better." — business page H1 *(verified live 2026-06-22)*

**Forbidden register**: institutional banking stiffness, jargon-heavy product descriptions, fear-based messaging about financial risk, aggressive sales urgency, superlatives without proof.

## 11. Brand Narrative

Starling Bank was founded in **2014** by **Anne Boden**, who had spent 30 years in traditional banking and left to start what would become the first British bank to be founded by a woman. Boden's founding premise was simple and radical: "Banking was broken — so we decided to fix it." Having worked at banks including ABN AMRO, HBOS, and Allied Irish Banks, Boden understood exactly what was wrong with the incumbent model — slow technology, opaque fees, and a culture that sold products rather than solved problems.

Starling received its UK banking licence in 2016 and launched its first current account in 2017, built entirely in-house on modern cloud infrastructure (Google Cloud). The brand distinguished itself from other neobanks — particularly Monzo, which launched around the same time — through its full banking licence (rather than an e-money licence), its emphasis on business banking alongside personal accounts, and its partnership banking model, which allowed other financial brands to use Starling's infrastructure. By 2022, Starling had turned its first profit, and the bank was valued at £2.5 billion.

What Starling refuses, visible in its design and copy: the legacy banking aesthetic (dark navy, serif headings, gold accents), the predatory cross-selling of unsuitable products ("obsessed with solving people's problems rather than selling them stuff"), and the cold techno-minimalism of some US fintech brands. What it embraces: the confidence to use a teal-mint CTA that no bank before it has dared, a warm aubergine palette that belongs to no banking archetype, plain English everywhere, and a genuine commitment to financial inclusion (the #MakeMoneyEqual campaign, the Women in Finance Charter).

## 12. Principles

1. **Fix the actual problem.** Starling exists because banking was broken, not because banking needed a better app. *UI implication:* features are designed around real financial pain points — instant notifications, spending insights, integrated savings spaces — not novelty.
2. **Technology should be invisible.** "Fast technology" is in the brand promise, but the word "technology" barely appears in the product copy. *UI implication:* the CoFo Semi-Mono button label and the 4px radius whisper engineering precision without announcing it.
3. **Plain English, every time.** Starling's founding commitment to plain English means no terms and conditions written to confuse, no fees hidden in footnotes. *UI implication:* CTA copy is human ("Do life together", "Teach life skills") not legalistic ("Open a joint account", "Create a youth account").
4. **Values are product.** Ethical investing policy, 95% recycled debit cards, 100,000 trees funded, Women in Finance Charter membership — these are presented as product facts, not marketing claims. *UI implication:* sustainability and inclusion data appears in the about section as specifications, not slogans.
5. **One CTA, one color.** The mint `#50ffeb` is reserved for the primary action. The eye is trained to associate that neon-adjacent teal with "the thing to do next." *UI implication:* never use mint decoratively — diluting it dilutes the signal.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Starling user segments (UK personal current account holders, sole traders, small business owners, parents managing youth finances), not individual people.*

**Priya Sharma, 28, Birmingham.** A UX designer who switched from HSBC to Starling after being charged an unexpected fee she didn't understand. Chose Starling because the app showed her exactly what she spent and where, in plain English, in real time. Trusts brands that don't sell her things. Considers it mildly embarrassing that she's proud of her bank.

**Tom Hartley, 39, Bristol.** A sole trader architect who runs his business through Starling's business current account. Values the instant payment notifications when clients pay invoices. Chose Starling over Monzo because Starling felt more serious — the website looked like a bank made choices, not just a startup with a card. Uses the Spaces feature to put aside VAT automatically.

**Sarah and James Chen, 33 & 35, London.** A dual-income couple with a Starling joint account for shared expenses and individual personal accounts for discretionary spending. Found the joint account application required "Do life together" instead of "Open a joint account" and found it charming rather than cloying. Would not have responded well to the same line from a traditional bank.

**Olivia Musa, 14, Manchester.** Uses the Starling under-16s account at her mum's suggestion. Has never been in a bank branch. Understands that her account is different from her mum's without understanding exactly why. The teal card is the coolest thing about her wallet.

## 14. States

| State | Treatment |
|---|---|
| **Empty (new account, no transactions)** | Warm off-white `#f8f5f0` canvas. Avantt headline at 21px weight 600, `#321e37`: "No transactions yet." Single mint CTA: "Make a payment." No illustration filler — honest and calm. |
| **Empty (Spaces, none created)** | Muted purple `#706273` body text explaining Spaces concept with one mint CTA to create first Space. Shows product value rather than just empty state. |
| **Loading (first app paint)** | Skeleton blocks at final card dimensions on warm `#f8f5f0` surface, 8px radius. No shimmer shadows — flat pulse consistent with shadowless system. |
| **Loading (balance refresh)** | Inline activity indicator within the balance area; previous value stays visible. Never blocks the entire screen. |
| **Error (payment failed)** | Inline message below the failing field, `#321e37` text with a warm error background tint. Plain English: states what went wrong and what to do. No generic "Something went wrong." |
| **Error (form validation)** | Field-level message in the muted purple `#706273` tone. Describes what's required, not just "Required". |
| **Success (payment sent)** | Brief in-app confirmation notification at top. Avantt 18px, `#321e37` on mint `#50ffeb` tint: "Payment sent." Dismisses at 3s. No emoji, no excessive celebration. |
| **Success (account opened)** | Dedicated success state with the account card visual and a "Make your first payment" mint CTA. Welcome without fanfare. |
| **Skeleton** | `#f8f5f0` warm blocks at final dimensions, 8px radius, flat pulse. Tabular numbers skeletonized at expected character width. |
| **Disabled** | Muted purple `#706273` for disabled text; mint CTA opacity reduced to 0.4 (not switched to grey — preserves brand palette read). |
| **Offline / connection error** | Top-of-screen inline banner in `#f6efea` with `#321e37` text: states the connectivity issue and confirms data was last synced at \[time\]. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, selection ticks, focus rings |
| `motion-fast` | 100ms | Hover, button press, input focus |
| `motion-standard` | 200ms | Card reveals, nav dropdown, sheet entrance |
| `motion-slow` | 300ms | Page transitions, hero elements, carousels |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, menus, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, close actions |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Starling's motion is functional and warm — consistent with the accessible, consumer-first aesthetic. The homepage carousel (account type cards) slides at `motion-standard / ease-enter`. The mint CTA carries no hover animation on desktop — it relies on the color's inherent authority rather than movement. Nav dropdowns fade-enter from a 4px upward offset. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional and no information is conveyed through motion alone.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via Node.js playwright getComputedStyle:
- Homepage https://www.starlingbank.com/ — hero H1 "Good with money starts here.", body Avantt 18px/450, buttons CoFo Sans Semi-Mono 18px/550, CTA bg rgb(80,255,235) #50ffeb / radius 4px / padding 10px 16px / height 40px
- Business page https://www.starlingbank.com/business/ — H1 "Business banking. But better." / Avantt 48px 550 / white on dark bg
- Color frequency scan: primary bg rgb(50,30,55) #321e37, CTA rgb(80,255,235) #50ffeb, surface rgb(248,245,240) #f8f5f0, cream rgb(246,239,234) #f6efea, interactive purple rgb(105,53,211) #6935d3
- Nav: CoFo Sans Semi-Mono 18px weight 550, height ~64px
- Document title: "Starling | Award-winning bank accounts"

Brand narrative (§11): Starling Bank founded 2014 by Anne Boden; first woman-founded UK bank; banking licence 2016; current account launch 2017; first profit 2022; £2.5B valuation — publicly documented facts per starlingbank.com/about and widely reported news.

Voice samples (§10) are verbatim from live homepage inspection (hero H1, homepage H2, business page H1).

Personas (§13) are fictional archetypes informed by publicly observable Starling user segments. Names are illustrative; they do not refer to real people.

Tier 2: getdesign.md/starling — returned "No designs found". styles.refero.design/?q=starling+bank — no Starling entry; general fintech results returned. Noted in footer.

Interpretive claims (e.g., "CoFo Semi-Mono whispers engineering precision", "one CTA, one color") are editorial readings connecting Starling's observed design to its positioning, not directly sourced Starling statements.
-->
