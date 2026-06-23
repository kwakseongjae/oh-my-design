---
id: hubspot
name: HubSpot
country: US
category: marketing
homepage: "https://www.hubspot.com"
primary_color: "#ff4800"
logo:
  type: simpleicons
  slug: hubspot
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: reconciled
  extracted: "2026-06-22"
  note: "primary = live CTA orange (#ff4800 = rgb(255,72,0)); canvas cream (#fcfcfa) page bg; ink (#1f1f1f) text. Deep teal (#042729) dark sections. Custom HubSpot Sans + HubSpot Serif brand fonts."
  colors:
    primary: "#ff4800"
    primary-tint: "#fcded2"
    canvas: "#fcfcfa"
    warm-parchment: "#f8f5ee"
    ink: "#1f1f1f"
    deep-teal: "#042729"
    graphite: "#60605f"
    mist: "#cacac8"
    on-primary: "#ffffff"
    cadet-navy: "#15295a"
  typography:
    family: { sans: "HubSpot Sans", serif: "HubSpot Serif", fallback-sans: "Inter", fallback-serif: "Source Serif 4" }
    display-hero: { size: 80, weight: 500, lineHeight: 1.19, use: "Hero display — HubSpot Serif Page Header Human" }
    heading-xl: { size: 48, weight: 500, lineHeight: 1.10, use: "Large section headlines — HubSpot Serif" }
    heading-lg: { size: 40, weight: 500, lineHeight: 1.15, use: "Section headings — HubSpot Serif" }
    heading: { size: 24, weight: 500, lineHeight: 1.42, use: "Card headings — HubSpot Sans" }
    heading-sm: { size: 22, weight: 500, lineHeight: 1.45, use: "Sub-section heads — HubSpot Sans" }
    subheading: { size: 18, weight: 400, lineHeight: 1.67, use: "Feature descriptions" }
    body: { size: 16, weight: 400, lineHeight: 1.56, use: "Standard reading text" }
    body-sm: { size: 14, weight: 400, lineHeight: 1.57, use: "Secondary UI text, labels" }
    caption: { size: 12, weight: 500, lineHeight: 1.60, use: "Small labels, eyebrows" }
    button: { size: 16, weight: 500, lineHeight: 1.00, use: "Primary button label" }
    button-sm: { size: 14, weight: 500, lineHeight: 1.00, use: "Small button label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    none: "none"
    hairline: "0 0 0 1px rgba(31,31,31,0.11)"
  components:
    button-primary: { type: button, bg: "#ff4800", fg: "#ffffff", radius: "8px", padding: "16px 40px", font: "18px / 500 HubSpot Sans", border: "2px solid rgba(0,0,0,0)", states: "hover darken", use: "Primary CTA — Get a demo / Get started" }
    button-outlined: { type: button, bg: "#ffffff", fg: "#ff4800", radius: "8px", padding: "16px 40px", font: "18px / 500 HubSpot Sans", border: "2px solid #ff4800", use: "Secondary CTA — Get started free" }
    button-dark: { type: button, bg: "#1f1f1f", fg: "#ffffff", radius: "8px", padding: "8px 16px", font: "14px / 500 HubSpot Sans", use: "Dark surface CTA — Learn more" }
    button-sm: { type: button, bg: "#ff4800", fg: "#ffffff", radius: "8px", padding: "8px 16px", font: "14px / 500 HubSpot Sans", use: "Compact primary button" }
    input-default: { type: input, bg: "#ffffff", border: "1px solid #cacac8", radius: "4px", fg: "#1f1f1f", font: "16px HubSpot Sans", use: "Standard text/email input" }
    card-product: { type: card, bg: "#fcfcfa", fg: "#1f1f1f", radius: "16px", border: "2px solid rgba(0,0,0,0.11)", padding: "24px", use: "Product hub overview card" }
    card-feature: { type: card, bg: "#ffffff", fg: "#1f1f1f", radius: "16px", border: "1px solid #1f1f1f", padding: "24px 32px", use: "Feature content card with hairline border" }
    badge-default: { type: badge, bg: "#fcded2", fg: "#ff4800", radius: "4px", padding: "4px 8px", font: "12px / 500 HubSpot Sans", use: "Warm peach accent pill / tag" }
    tab-filter: { type: tab, bg: "#f8f5ee", fg: "#1f1f1f", radius: "16px", font: "14px / 500 HubSpot Sans", active: "text #1f1f1f bg #f8f5ee", use: "Filter tab (By Use Case / By Team Size)" }
  components_harvested: true
ds:
  name: Canvas
  url: https://canvas.hubspot.com
  type: system
  description: HubSpot's internal design system powering all product surfaces — 5 principles (Clear, Human, Inbound, Integrated, Collaborative)
---

# Design System Inspiration of HubSpot

## 1. Visual Theme & Atmosphere

HubSpot's homepage is a warm, modern marketing platform — approachable and energetic without sacrificing professionalism. The page opens on a canvas cream background (`#fcfcfa`), a softly warmed white that reads organic and friendly rather than clinical. The primary brand accent is an assertive Sprout Orange (`#ff4800`), reserved almost exclusively for CTAs and key functional icons, making every call-to-action unmistakably clear. Deep ink (`#1f1f1f`) anchors headings and body text — almost-black with a touch of warmth that prevents harshness. Dark teal sections (`#042729`) appear as immersive brand moments, providing dramatic contrast without defaulting to pure black.

HubSpot's typographic system is built on two proprietary fonts: **HubSpot Sans** (weight 300–500) for all UI and body copy, and **HubSpot Serif** (weight 500) for display and section headlines. At hero sizes, a third variant — HubSpot Serif Page Header Human — appears at 80px, projecting warmth and confidence simultaneously. This serif/sans split is unusual for a SaaS brand but reflects HubSpot's positioning: part technology company, part inbound-marketing thought leader. The result is a system that feels editorial and trustworthy rather than purely technical.

Elevation is minimal and intentional. Rather than multi-layer shadows, HubSpot uses hairline borders (`rgba(0,0,0,0.11)`) and alternating background tints — canvas cream versus warm parchment (`#f8f5ee`) — to segment content. When CTAs appear on dark teal sections, they switch to outlined variants with cream borders, maintaining the orange-is-primary-action rule without breaking accessibility.

**Key Characteristics:**
- Sprout Orange (`#ff4800`) as the single CTA and action color — never decorative
- Canvas cream (`#fcfcfa`) page background — warm, organic, not clinical white
- HubSpot Sans + HubSpot Serif proprietary type system — editorial SaaS hybrid
- 8px border-radius on all interactive elements (buttons, inputs, nav items)
- 16px radius on cards and content containers
- Nearly shadow-free: separation via hairline borders and tint alternation
- Deep teal (`#042729`) for dark brand-immersive sections
- Warm parchment (`#f8f5ee`) as alternating section tint

## 2. Color Palette & Roles

### Primary & Brand
- **Sprout Orange** (`#ff4800`): The single action color. Primary CTA backgrounds, active states, brand icons, functional accents. Reserved — never for decorative backgrounds.
- **Peach Tint** (`#fcded2`): Soft warm accent surface. Used for badges, soft highlights, and the subtle hero gradient area.

### Canvas & Surfaces
- **Canvas Cream** (`#fcfcfa`): Primary page background and default card surface. Warm, slightly off-white.
- **Warm Parchment** (`#f8f5ee`): Alternating section background. Creates visual rhythm without borders or shadows.
- **Pure White** (`#ffffff`): Secondary card surface for outlined cards; button background for outlined CTA variant.

### Text & Ink
- **Ink** (`#1f1f1f`): Primary text and heading color. All body copy, headings, and interactive labels on light backgrounds.
- **Graphite** (`#60605f`): Muted secondary text. Descriptions, captions, metadata.
- **Mist** (`#cacac8`): Disabled states, inactive markers, input borders.

### Dark & Depth
- **Deep Teal** (`#042729`): Dark brand sections. Footer, immersive product features, high-contrast brand moments.
- **Cadet Navy** (`#15295a`): Deep blue-navy for occasional dark accents and enterprise-tier section backgrounds.

### On-Surface
- **On-Primary** (`#ffffff`): Text on orange primary CTA buttons.

## 3. Typography Rules

### Font Family
- **Primary Display**: `HubSpot Serif` — 40–80px, weight 500 only. Section headlines and hero moments.
- **Primary UI/Body**: `HubSpot Sans` — 12–24px, weights 300/400/500. All navigation, buttons, labels, body copy.
- **Fallbacks**: `Source Serif 4` for HubSpot Serif; `Inter` for HubSpot Sans.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Use |
|------|------|------|--------|-------------|-----|
| Display Hero | HubSpot Serif | 80px | 500 | 1.19 | Hero section headline |
| Heading XL | HubSpot Serif | 48px | 500 | 1.10 | Large section titles |
| Heading LG | HubSpot Serif | 40px | 500 | 1.15 | Section headings |
| Heading | HubSpot Sans | 24px | 500 | 1.42 | Card headings, sub-sections |
| Heading SM | HubSpot Sans | 22px | 500 | 1.45 | Smaller section heads |
| Subheading | HubSpot Sans | 18px | 400 | 1.67 | Feature descriptions, intro text |
| Body | HubSpot Sans | 16px | 400 | 1.56 | Standard reading text |
| Body SM | HubSpot Sans | 14px | 400 | 1.57 | Secondary UI, labels, nav items |
| Caption | HubSpot Sans | 12px | 500 | 1.60 | Eyebrows, small labels |
| Button LG | HubSpot Sans | 18px | 500 | 1.00 | Large CTA button labels |
| Button | HubSpot Sans | 16px | 500 | 1.00 | Standard button labels |
| Button SM | HubSpot Sans | 14px | 500 | 1.00 | Compact button labels |

### Principles
- **Serif for display, sans for UI**: HubSpot Serif owns every headline above 32px. HubSpot Sans owns every interactive, label, and body element. The split signals trustworthy authority (serif) and functional clarity (sans).
- **Weight 500 as the signature**: Heading, button, and caption elements all land at 500 — a medium weight that reads confident without shouting.
- **Weight 400 for reading**: Body, subheading, and nav use 400 to stay legible and approachable.
- **Line-height relaxes at body sizes**: 1.56–1.67 at body scale gives the marketing copy room to breathe; display sizes tighten to 1.10–1.19.

## 4. Component Stylings

### Buttons

**Primary CTA (Large)**
- Background: `#ff4800`
- Text: `#ffffff`
- Radius: 8px
- Padding: 16px 40px
- Font: 18px HubSpot Sans weight 500
- Border: 2px solid transparent
- Use: Primary page-level CTA ("Get a demo", "Get a demo of HubSpot's premium software")

**Primary CTA (Medium)**
- Background: `#ff4800`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 24px
- Font: 16px HubSpot Sans weight 500
- Use: Section-level primary CTA

**Primary CTA (Small)**
- Background: `#ff4800`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Font: 14px HubSpot Sans weight 500
- Use: Inline small CTA

**Secondary Outlined (Large)**
- Background: `#ffffff`
- Text: `#ff4800`
- Radius: 8px
- Padding: 16px 40px
- Font: 18px HubSpot Sans weight 500
- Border: 2px solid `#ff4800`
- Use: Secondary CTA paired with primary ("Get started free")

**Secondary Outlined (Medium)**
- Background: `#ffffff`
- Text: `#ff4800`
- Radius: 8px
- Padding: 12px 24px
- Font: 16px HubSpot Sans weight 500
- Border: 2px solid `#ff4800`
- Use: Section-level secondary action

**Dark Surface CTA**
- Background: `#1f1f1f`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Font: 14px HubSpot Sans weight 500
- Use: CTA on light canvas — "Learn more about Revenue Hub"

**Dark Section Outlined**
- Background: rgba(0,0,0,0.11)
- Text: `#f8f5ee`
- Radius: 8px
- Padding: 12px 24px
- Font: 16px HubSpot Sans weight 500
- Border: 2px solid `#f8f5ee`
- Use: Secondary CTA when page is on deep teal dark section

### Inputs & Forms

**Default Input**
- Background: `#ffffff`
- Border: 1px solid `#cacac8`
- Radius: 4px
- Text: `#1f1f1f`
- Font: 16px HubSpot Sans weight 300
- Padding: 3.2px 8px
- Use: Email/text fields in nav search and landing forms

### Cards & Containers

**Product Card**
- Background: `#fcfcfa`
- Text: `#1f1f1f`
- Radius: 8px
- Border: 2px solid rgba(0,0,0,0.11)
- Padding: 12px 24px
- Use: Product suite overview tabs in header dropdown

**Feature Card**
- Background: `#ffffff`
- Text: `#1f1f1f`
- Radius: 16px
- Border: 1px solid `#1f1f1f`
- Padding: 24px 32px
- Use: Feature content card with hairline border (no shadow)

### Badges

**Peach Tag**
- Background: `#fcded2`
- Text: `#ff4800`
- Radius: 4px
- Padding: 4px 8px
- Font: 12px HubSpot Sans weight 500
- Use: Warm peach accent labels, category tags

### Tabs

**Filter Tab (Active)**
- Background: `#f8f5ee`
- Text: `#1f1f1f`
- Radius: 16px
- Padding: 8px
- Font: 14px HubSpot Sans weight 500
- Use: Active filter tab ("By Use Case", "By Team Size", "Why HubSpot?")

**Filter Tab (Inactive)**
- Background: `#ffffff`
- Text: `#1f1f1f`
- Radius: 16px
- Padding: 8px
- Font: 14px HubSpot Sans weight 400
- Use: Inactive filter tab option

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.hubspot.com/ (live DOM, homepage, computed styles); https://www.hubspot.com/pricing (secondary surface, pricing page); https://canvas.hubspot.com (Canvas Design System)
**Tier 2 sources:** styles.refero.design/style/3e100552-a8ad-4179-b89a-6aa5113b92e1 (HubSpot refero entry — confirmed #ff4800 primary, 8px button radius, 16px card radius); getdesign.md/hubspot — 404, not listed
**Conflicts unresolved:** none (Tier 1 live orange #ff4800 = rgb(255,72,0) matches refero Sprout Orange exactly)

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 56px, 64px, 80px
- Notable: Section gaps land at 64–80px; card padding at 24–32px; element gaps at 16–24px

### Grid & Container
- Max content width: 1200px
- Hero: dual-column on desktop — left text block with serif headline + CTA pair, right product screenshot
- Feature sections: alternating 2-column and 3-column grid layouts
- Full-width dark sections (`#042729`) with cream/white text for brand immersion
- Product hub cards in a multi-tab dropdown grid (3–4 columns)

### Whitespace Philosophy
- **Tint alternation over shadow**: canvas cream (`#fcfcfa`) and warm parchment (`#f8f5ee`) alternating sections create visual rhythm without dividers or elevation.
- **Hairline restraint**: card borders are 1–2px at low opacity (`rgba(0,0,0,0.11)`) rather than solid lines.
- **Breathing sections**: 64–80px vertical rhythm between sections gives the marketing surface a generous, editorial cadence.

### Border Radius Scale
- Micro (4px): badges, input fields
- Standard (8px): buttons, navigation pills, form elements
- Relaxed (16px): cards, content containers, filter tabs
- Full (9999px): avatar circles (if used)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, headings, text |
| Tint (Level 1) | `#f8f5ee` warm parchment background | Section alternation |
| Hairline (Level 2) | `rgba(0,0,0,0.11)` border or `1px solid #1f1f1f` | Card outlines, product tabs |
| Dark (Level 3) | `#042729` full-width section | Immersive brand-dark moments |

**Shadow Philosophy**: HubSpot's live DOM shows `box-shadow: none` across the hero, nav, buttons, and most cards. Separation is achieved entirely through background tinting and thin hairline borders. This is a deliberate modern-flat approach: warm-toned surfaces already have visual warmth, and shadows would add visual noise inconsistent with the clean editorial aesthetic. When depth emphasis is needed, the system reaches for the ink border (`#1f1f1f`) or the orange brand color — never a shadow stack.

## 7. Do's and Don'ts

### Do
- Use Sprout Orange (`#ff4800`) exclusively for CTAs and active-state icons — it is the system's action signal
- Use HubSpot Serif (weight 500) for all section headlines above 32px
- Use HubSpot Sans for all body text, labels, buttons, and navigation
- Apply 8px radius to all buttons and interactive elements
- Apply 16px radius to cards and content containers
- Separate sections with canvas cream / warm parchment alternation — not with shadows
- Pair every primary orange CTA with a secondary outlined variant
- Use `#1f1f1f` ink as the text color instead of pure black

### Don't
- Use Sprout Orange for decorative backgrounds or illustration fills — reserve it for action
- Apply large drop shadows to cards — use hairline borders instead
- Mix HubSpot Serif into body or UI copy — it belongs only at display sizes
- Use more than two CTAs side-by-side without clear hierarchy (primary orange + secondary outlined)
- Apply a radius larger than 16px to cards — HubSpot cards are not pill-shaped
- Use pure white (`#ffffff`) as the default page background — canvas cream (`#fcfcfa`) is the correct base
- Use the orange as a section background color — it loses its call-to-action signal value

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero stacks, nav collapses to hamburger |
| Tablet | 640–1024px | 2-column feature grids, reduced padding |
| Desktop | 1024–1280px | Full 2–3 column layout, serif hero headline at full scale |
| Large Desktop | >1280px | Centered content with generous margins, 1200px max-width |

### Touch Targets
- Primary CTA at 42px height (small) to 68px (large hero) — generous tap targets
- Navigation tabs at 38px height with 16px radius
- Input fields at 34px minimum height
- Filter tabs: 38px height with 16px radius

### Collapsing Strategy
- Hero: serif 80px display → 48px on tablet → 32px on mobile; CTA buttons stack vertically
- Navigation: horizontal product mega-menu → collapsed hamburger with slide-out panel
- Feature cards: 3-column → 2-column → single column
- Dark brand sections: maintain full-width treatment; reduce internal padding on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Sprout Orange (`#ff4800`)
- Background: Canvas Cream (`#fcfcfa`)
- Alternate section: Warm Parchment (`#f8f5ee`)
- Primary text: Ink (`#1f1f1f`)
- Secondary text: Graphite (`#60605f`)
- Disabled / input border: Mist (`#cacac8`)
- Dark section: Deep Teal (`#042729`)
- Accent badge: Peach Tint (`#fcded2`)

### Example Component Prompts
- "Create a hero on canvas cream (#fcfcfa). Headline in HubSpot Serif 48px weight 500, line-height 1.10, color #1f1f1f. Subtext HubSpot Sans 18px weight 400, color #1f1f1f. Orange primary CTA: #ff4800 bg, white text, 8px radius, 16px 40px padding, 18px/500. Paired outlined CTA: white bg, #ff4800 text and 2px border, same geometry."
- "Design a feature card: white background, 1px solid #1f1f1f border, 16px radius, no shadow. Heading 24px HubSpot Sans weight 500, color #1f1f1f. Body 16px weight 400, color #60605f. Card padding 24–32px."
- "Build an alternating-section layout: first section #fcfcfa, second #f8f5ee. HubSpot Serif 40px/500 for section titles. HubSpot Sans 16px/400 for descriptions."
- "Create a product card tab: #fcfcfa background, 8px radius, 2px rgba(0,0,0,0.11) border. Title 16px HubSpot Sans weight 500, #1f1f1f. Orange #ff4800 icon."

### Iteration Guide
1. HubSpot Serif for all headlines above 32px; HubSpot Sans for everything else
2. Orange (`#ff4800`) = action only. Every other color is neutral.
3. No shadows — use tint alternation and hairline borders for separation
4. Button geometry: 8px radius; cards: 16px radius; badges: 4px radius
5. Canvas cream is the page background, not pure white
6. CTA pairing is always orange primary + white/orange-outlined secondary
7. Dark sections use deep teal (`#042729`), not black

---

## 10. Voice & Tone

HubSpot's voice is **warm, helpful, and confident** — the inbound-marketing pioneer who genuinely believes that if you help people first, business follows. Where enterprise SaaS defaults to authoritative distance or technical density, HubSpot's copy leans into clarity, optimism, and approachability. Headlines favor concrete capability over abstract superlative ("Grow better" not "Revolutionize your pipeline"). CTAs are action-forward without pressure: "Get a demo" and "Get started free" rather than "Unlock unlimited power." The Inbound methodology — attract, engage, delight — echoes through every surface.

| Context | Tone |
|---|---|
| Hero headlines | Declarative and warm. "The HubSpot Customer Platform." Confident without superlatives. |
| Product descriptions | Benefit-first, concrete. "Manage your pipeline" not "Transform your revenue potential." |
| CTAs | Direct, generous. "Get started free." "Get a demo." No manufactured urgency. |
| Marketing blog / Academy | Educational, accessible, peer-to-peer. Shares frameworks, not just features. |
| Error messages | Helpful and specific. States what's wrong and what to do next. |
| Onboarding | Encouraging, step-oriented. Celebrates small wins on the path to platform mastery. |
| Pricing | Transparent, tier-explicit. Free tier prominently available. |

**Voice samples (verbatim from live homepage):**
- "The HubSpot Customer Platform" — hero heading (declarative, brand-anchored). *(verified live 2026-06-22)*
- "Get a demo of HubSpot's premium software" — primary CTA label (action + context). *(verified live 2026-06-22)*
- "Get started free with HubSpot's free tools" — secondary CTA label (generous, no-pressure). *(verified live 2026-06-22)*

**Forbidden register**: aggressive scarcity tactics, jargon-stacked feature lists presented without benefit context, exclamation-heavy hype, "revolutionary" or "game-changing" superlatives, heavy enterprise procurement tone ("request a quote", "contact a specialist" as the first option).

## 11. Brand Narrative

HubSpot was founded in **2006** by **Brian Halligan** and **Dharmesh Shah** at MIT, emerging from a shared observation: traditional outbound marketing (cold calls, purchased email lists, intrusive ads) was becoming less effective as buyers gained control of their information consumption. Their answer was the **Inbound methodology** — create content people actually want, attract them to you, engage them with useful tools, and delight them after they become customers. This was not merely a business model; it was a philosophy that HubSpot turned into a product category.

The company's flagship product began as a marketing automation and CMS platform, grew into a full CRM suite spanning Marketing Hub, Sales Hub, Service Hub, Content Hub, and Operations Hub, and evolved further into the **HubSpot Customer Platform** — a unified system where customer data, AI tools, and connected workflows sit in a single database rather than a patchwork of integrations. The Canvas design system codifies the visual and interaction language of this unified platform.

What makes HubSpot distinctive as a brand is its dual identity: a technology company with the soul of a publishing house. HubSpot Academy has trained millions; the HubSpot Blog is one of the most-read marketing resources on the internet; the annual INBOUND conference draws tens of thousands of practitioners. The brand earns trust not by outspending competitors on advertising but by being genuinely useful before asking for anything — which is exactly what it recommends to customers.

## 12. Principles

1. **Inbound over outbound.** Build tools that attract; don't push. *UI implication:* CTAs are invitations, not demands. Free tiers and free educational resources are first-class citizens of every pricing surface.
2. **Clear, not clever.** One of the five Canvas principles: "We design for clarity and focus." *UI implication:* a single orange CTA per pairing; no competing action colors; visual hierarchy that leads the eye to the next right step without ambiguity.
3. **Human connection at scale.** Another Canvas principle: "We foster a sense of joy by humanizing the experience in ways that resonate across cultures." *UI implication:* warm type choices (HubSpot Serif, canvas cream), people-centric photography, copy that addresses the user's goal rather than the product's feature.
4. **Integrated, not bolted-on.** The unified Customer Platform is the antithesis of the point-solution stack. *UI implication:* design system tokens are shared across Marketing, Sales, Service, and Content surfaces — the orange, the fonts, the radius scale do not differ by hub.
5. **Grow better, not just bigger.** HubSpot's mission is to help businesses "grow better" — implying that the manner of growth (sustainable, customer-centric, inbound) matters as much as velocity. *UI implication:* trust-building touchpoints (transparent pricing, free tools, educational resources) are designed with the same fidelity as revenue-driving CTAs.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable HubSpot user segments (SMB marketers, growth-stage sales teams, customer success managers, operations leads), not individual people.*

**Priya Nair, 33, Austin.** Marketing manager at a 50-person SaaS startup. Runs HubSpot Marketing Hub for email, SEO, and landing pages. Chose HubSpot over competitors because the free CRM let her start without a budget approval cycle. Uses HubSpot Academy certifications to upskill her team. Measures HubSpot's value by whether it helps her move faster than her head count would otherwise allow.

**Marcus Osei, 28, London.** BDR at a Series B fintech. Lives in HubSpot Sales Hub and uses Sequences to manage outbound follow-up without losing the inbound philosophy — every touch is useful, not just a bump. Values the clean pipeline view and the fact that every prospect interaction is logged automatically. Would be frustrated by a redesign that added steps to the daily workflow.

**Jess Thornton, 41, Chicago.** VP of Customer Success at a mid-market software company. Uses Service Hub to manage a 12-person support team. Cares about the 360-degree contact view because it means her team can see every marketing and sales interaction before picking up the phone. Chose HubSpot because it eliminated the "who owns this customer?" question.

**Tomás Ferrara, 37, Buenos Aires.** Marketing agency owner running HubSpot for 14 SMB clients via the Solutions Partner Program. Appreciates the standardization — one set of tools, one UI, one certification ecosystem. Uses the HubSpot Blog as much as the product documentation.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no contacts in CRM)** | Canvas cream background. HubSpot Sans 18px weight 400 in ink: "You haven't added any contacts yet." Orange CTA: "Import contacts" or "Create a contact." No heavy illustration — warm and direct. |
| **Empty (no deals in pipeline)** | Graphite (`#60605f`) at 14px: "No deals in this pipeline." Pipeline tabs remain visible so user can switch stages or add manually. Clear action path. |
| **Loading (dashboard)** | Skeleton rows on canvas cream at final card dimensions. 16px radius on card skeletons. Subtle shimmer consistent with the flat, warm-toned system. No animated orange — reserve the primary for action. |
| **Loading (report generating)** | Inline progress indicator below the report title. Previous data stays visible. HubSpot Sans 14px weight 400 "Generating your report..." |
| **Error (connection failed)** | Inline banner in peach tint (`#fcded2`) with orange left-border accent. Ink text at 14px: specific failure reason + retry link. Never a generic "Something went wrong." |
| **Error (form validation)** | Field-level. Orange-tint border on the input. HubSpot Sans 12px weight 500 error text below: describes what's missing and how to fix it. |
| **Error (API / integration)** | Contextual inline message with the integration name and the failed action explicitly stated. Link to troubleshooting documentation. |
| **Success (form submitted)** | Brief inline confirmation on canvas cream. Ink heading at 24px/500: "You're all set!" Body 16px/400: confirms next step (email on the way, meeting link follows). No toast on form pages — the confirmation replaces the form. |
| **Success (deal closed)** | Toast at top-right. 3-second auto-dismiss. HubSpot Sans 14px/500: "Deal marked as Closed Won." Optional confetti on first-close milestone. |
| **Skeleton** | Canvas cream blocks at final element dimensions, 16px radius for cards, 4px for badges, 8px for buttons. Warm-toned shimmer pulse. |
| **Disabled** | Mist (`#cacac8`) border and 40% opacity on surface. Orange actions fade to peach tint (`#fcded2`) text — preserves brand read while clearly indicating inactivity. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Focus rings, selection ticks, toggle commits |
| `motion-fast` | 120ms | Hover, focus, button press overlay |
| `motion-standard` | 200ms | Dropdown open, card expand, sheet slide |
| `motion-slow` | 320ms | Page transitions, hero reveal, modal enter |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving elements — dropdowns, modals, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is purposeful and unobtrusive — consistent with HubSpot's "clear and human" design principles. The mega-navigation dropdown opens at `motion-standard / ease-enter`; filter tabs switch at `motion-fast`; CRM row expansions use `motion-standard`. No spring or bounce — HubSpot is professional SaaS, not a consumer entertainment app. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional and all state changes remain perceptible through color and content rather than motion.

**Signature motions**: Pipeline card drag-and-drop uses `motion-fast` positional updates with a subtle card lift (hairline border intensification rather than shadow — consistent with the flat system). The hero section on hubspot.com fades in at `motion-slow / ease-enter` on first paint. Email campaign send animation plays a brief single-loop success illustration then settles into the Closed Won toast.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://www.hubspot.com/ (homepage, primary surface)
- https://www.hubspot.com/pricing (secondary surface)

Canvas DS (2026-06-22): https://canvas.hubspot.com — confirmed 5 design principles
(Clear, Human, Inbound, Integrated, Collaborative) and Canvas system description.

Voice samples (§10) are verbatim from the live homepage hero section (2026-06-22).

Brand narrative (§11): HubSpot founded 2006 by Brian Halligan and Dharmesh Shah at MIT;
Inbound methodology as founding concept. These are widely documented public facts;
specifics from Wikipedia and HubSpot's public About/history pages.

Personas (§13) are fictional archetypes informed by publicly observable HubSpot user
segments (SMB marketers, SDRs, CS managers, agency partners). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "dual identity as a technology company with the soul of a
publishing house", "inbound philosophy echoes through every surface") are editorial
readings connecting HubSpot's stated methodology to observed design patterns, not
directly sourced HubSpot statements.
-->
