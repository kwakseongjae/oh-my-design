---
id: cuboai
name: Cubo Ai
country: TW
category: consumer-tech
homepage: "https://us.getcubo.com/"
primary_color: "#5be3d3"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=getcubo.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live teal CTA pill (#5be3d3); deeper teal (#24cdb9) carries headings/accents. Warm parent-friendly accents: coral (#ff8784), amber (#ffb516), sky (#4cc3e5). Text is soft charcoal (#4b4b4b), never pure black for body. museo-sans-rounded throughout, headings weight 600."
  colors:
    primary: "#5be3d3"
    primary-deep: "#24cdb9"
    mint-tint: "#bbefe9"
    mint-faint: "#e9f4f3"
    coral: "#ff8784"
    amber: "#ffb516"
    amber-soft: "#ffcf68"
    sky: "#4cc3e5"
    ink: "#4b4b4b"
    ink-soft: "#6d6d6d"
    muted: "#9a9a9a"
    canvas: "#ffffff"
    surface: "#ebebef"
    surface-deep: "#dddddd"
    hairline: "#dedede"
    on-primary: "#4b4b4b"
  typography:
    family: { display: "museo-sans-rounded", body: "museo-sans-rounded" }
    display-hero: { size: 40, weight: 600, lineHeight: 1.20, use: "Page H1 (product / About hero), Museo Sans Rounded SemiBold" }
    section:      { size: 32, weight: 600, lineHeight: 1.20, use: "Section titles, Museo Sans Rounded SemiBold" }
    subsection:   { size: 24, weight: 600, lineHeight: 1.20, use: "Card / feature heads" }
    label:        { size: 18, weight: 600, lineHeight: 1.20, use: "Feature pill labels (Safety/Sleep/Health/Memories)" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, charcoal" }
    button:       { size: 20, weight: 700, lineHeight: 1.20, use: "Primary CTA label (Bold)" }
    button-sm:    { size: 14, weight: 600, lineHeight: 1.20, use: "Compact add-to-cart label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 25, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 12, lg: 50, full: 9999 }
  shadow:
    soft: "rgba(0,0,0,0.08) 0px 4px 6px 0px"
  components:
    button-primary: { type: button, bg: "#5be3d3", fg: "#4b4b4b", radius: "50px", padding: "12px 20px", height: "48px", font: "20px / 700 museo-sans-rounded", use: "Primary teal CTA pill (Go to Shop / Checkout)" }
    button-add: { type: button, bg: "#5be3d3", fg: "#4b4b4b", radius: "50px", padding: "5px 8px", height: "28px", font: "14px / 600 museo-sans-rounded", shadow: "rgba(0,0,0,0.08) 0px 4px 6px", use: "Compact add-to-cart quantity button" }
    input-pill: { type: input, bg: "#ffffff", fg: "#4b4b4b", radius: "50px", padding: "16px 20px", height: "52px", font: "16px museo-sans-rounded", use: "Newsletter / form pill input, placeholder #4b4b4b" }
    feature-pill: { type: badge, bg: "#24cdb9", fg: "#ffffff", radius: "9999px", font: "18px / 600 museo-sans-rounded", use: "Feature category pill (Safety / Sleep / Health / Memories)" }
    card-surface: { type: card, bg: "#ebebef", fg: "#4b4b4b", radius: "12px", use: "Grey product / content card surface" }
    card-canvas: { type: card, bg: "#ffffff", fg: "#4b4b4b", radius: "12px", use: "White feature card, 1px #dedede hairline" }
    nav-link: { type: tab, fg: "#6d6d6d", font: "16px / 400 museo-sans-rounded", active: "teal #24cdb9 text on active", use: "Top nav / footer link" }
    country-row: { type: listItem, bg: "#ffffff", fg: "#4b4b4b", height: "38px", padding: "10px 25px 10px 20px", font: "16px museo-sans-rounded", use: "Region selector dropdown row" }
  components_harvested: true
---

# Design System Inspiration of Cubo Ai

## 1. Visual Theme & Atmosphere

Cubo Ai (built by Taiwan's Cubo brand) is an AI smart baby monitor — a bird-shaped camera plus sleep sensor — and its storefront is engineered to lower the heart rate of an anxious new parent. The canvas is pure white (`#ffffff`) broken up by soft, cool-grey surfaces (`#ebebef`) and faint mint tints (`#e9f4f3`), so the page reads as airy and calm rather than busy or salesy. Text sits in a warm soft charcoal (`#4b4b4b`) — deliberately never pure black for body copy — which keeps the long-form reassurance ("we know parents deserve better") gentle instead of clinical. The single saturated brand color is a fresh aqua teal (`#5be3d3`), reserved almost entirely for the call-to-action pill, training the eye to read that one mint-teal capsule as "the safe next step."

The typographic personality is unmistakably soft-tech: every headline, label, and button runs in **Museo Sans Rounded** (`museo-sans-rounded`) — a humanist rounded sans whose circular terminals echo the rounded, bird-shaped industrial design of the device itself. Headlines land at SemiBold (weight 600): 40px for page H1s ("CuboAi Smart Baby Monitor 3", "About Us"), 32px for section titles, 24px for card heads, all at a tight 1.2 line-height. Body drops to weight 400 at 16px / 1.5 line-height for comfortable reading. The rounded letterforms plus the soft charcoal ink give the whole system a pediatric, trust-forward warmth — competent without being cold.

What distinguishes Cubo Ai from typical hardware-commerce sites is its commitment to the **pill and to warmth**. Interactive geometry is almost entirely capsule: the teal CTA at 50px radius, newsletter inputs at 50px radius, feature-category chips at full-round. Depth is minimal — surfaces separate by flat tint (`#ebebef`, `#dddddd`) and thin `#dedede` hairlines, with only a whisper of shadow (`rgba(0,0,0,0.08) 0px 4px 6px`) on the small add-to-cart control. A trio of warm accents — coral (`#ff8784`), amber (`#ffb516`) and sky (`#4cc3e5`) — appears in feature iconography and tip callouts, the palette of a nursery rather than a gadget catalog.

**Key Characteristics:**
- Museo Sans Rounded for everything — rounded humanist sans echoing the bird-shaped device
- Headlines at SemiBold (600); CTA label at Bold (700) 20px; body at 400 / 16px / 1.5
- Single saturated aqua teal (`#5be3d3`) reserved for the primary CTA pill
- Deeper teal (`#24cdb9`) for accent headings and feature category chips
- Soft charcoal (`#4b4b4b`) text instead of pure black — gentle, parent-friendly
- Pill geometry — 50px CTA/input radius, full-round feature chips
- Near-flat depth: tinted `#ebebef` surfaces + `#dedede` hairlines, only a soft shadow on small controls
- Warm nursery accents — coral (`#ff8784`), amber (`#ffb516`), sky (`#4cc3e5`)

## 2. Color Palette & Roles

### Primary
- **Cubo Teal** (`#5be3d3`): Primary brand color and CTA background. The fresh aqua-mint on every "Go to Shop" / "Checkout" pill — the system's single "action" color.
- **Deep Teal** (`#24cdb9`): Accent teal for emphasis headings (e.g. "CuboAi Smart Baby Monitor" in the comparison block) and feature-category chips. A more saturated companion to the primary.
- **Soft Charcoal** (`#4b4b4b`): Primary text and heading color, and the label color on the teal CTA. A warm dark grey used instead of pure black for a gentle, trustworthy read.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white feature cards, pill input fills.
- **Surface Grey** (`#ebebef`): Cool-grey tinted surface for product cards and segmented blocks.
- **Surface Deep** (`#dddddd`): Slightly deeper grey for nested card / media wells on product pages.
- **Hairline** (`#dedede`): Thin borders, dividers, and white-card outlines — the primary separation device given the near-flat system.
- **Ink Soft** (`#6d6d6d`): Secondary text, nav links, sub-headings, captions.
- **Muted** (`#9a9a9a`): Tertiary text, fine print, lowest-emphasis labels.

### Warm Accents
- **Coral** (`#ff8784`): Warm red-pink for feature icons, alerts, and accent badges.
- **Amber** (`#ffb516`): Golden highlight for tips, ratings, and decorative emphasis.
- **Amber Soft** (`#ffcf68`): A lighter amber for tinted highlight surfaces.
- **Sky** (`#4cc3e5`): Calm blue accent for secondary feature highlights and links.
- **Mint Tint** (`#bbefe9`): Pale mint fill for soft circular badges and decorative discs.
- **Mint Faint** (`#e9f4f3`): The faintest mint wash for tinted section bands.

### Text Hierarchy
- **Soft Charcoal** (`#4b4b4b`): Primary text, headings, strong labels.
- **Ink Soft** (`#6d6d6d`): Secondary copy, nav, sub-heads.
- **Muted** (`#9a9a9a`): Tertiary text, captions, metadata.

## 3. Typography Rules

### Font Family
- **Display & Body**: `museo-sans-rounded` (with `sans-serif` and `Corbel` / `Corbel Bold` fallbacks) — a single rounded humanist sans used for headlines, labels, body, and buttons alike. SemiBold (600) at display sizes, Regular (400) for body, Bold (700) for the CTA.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Museo Sans Rounded | 40px (2.50rem) | 600 | 1.20 (48px) | Page H1 (product / About hero) |
| Section Heading | Museo Sans Rounded | 32px (2.00rem) | 600 | 1.20 (38.4px) | Section titles |
| Sub-section | Museo Sans Rounded | 24px (1.50rem) | 600 | 1.20 (28.8px) | Card / feature heads |
| Feature Label | Museo Sans Rounded | 18px (1.13rem) | 600 | 1.20 (21.6px) | Safety / Sleep / Health / Memories pills |
| Button | Museo Sans Rounded | 20px (1.25rem) | 700 | 1.20 | Primary CTA label (Bold) |
| Body | Museo Sans Rounded | 16px (1.00rem) | 400 | 1.50 | Standard reading text |
| Button Small | Museo Sans Rounded | 14px (0.88rem) | 600 | 1.20 | Compact add-to-cart label |

### Principles
- **One rounded family, three weights**: Museo Sans Rounded carries the whole system; hierarchy comes from size and weight (600 heads, 400 body, 700 CTA), not from swapping typefaces.
- **SemiBold heads, regular body**: Headlines at weight 600 stay friendly rather than shouty; body at 400 / 1.5 line-height is built for comfortable parent reading.
- **Rounded as brand DNA**: The circular terminals of Museo Sans Rounded deliberately rhyme with the rounded, bird-shaped camera — softness is the typographic signature.
- **Charcoal over black**: Text is `#4b4b4b`, never `#000000` for body, to keep the long reassurance copy gentle.

## 4. Component Stylings

### Buttons

**Primary CTA Pill**
- Background: `#5be3d3`
- Text: `#4b4b4b`
- Radius: 50px
- Padding: 12px 20px
- Height: 48px
- Font: 20px Museo Sans Rounded weight 700
- Use: Primary teal CTA — "Go to Shop", "Checkout" — the system's single primary action

**Compact Add Button**
- Background: `#5be3d3`
- Text: `#4b4b4b`
- Radius: 50px
- Padding: 5px 8px
- Height: 28px
- Font: 14px Museo Sans Rounded weight 600
- Shadow: `rgba(0,0,0,0.08) 0px 4px 6px`
- Use: Compact add-to-cart / quantity control

### Inputs & Forms

**Pill Input**
- Background: `#ffffff`
- Text: `#4b4b4b`
- Radius: 50px
- Padding: 16px 20px
- Height: 52px
- Font: 16px Museo Sans Rounded
- Placeholder: `#4b4b4b`
- Use: Newsletter / lead-capture pill input

### Cards & Containers

**Grey Surface Card**
- Background: `#ebebef`
- Text: `#4b4b4b`
- Radius: 12px
- Use: Product / content card on the cool-grey surface

**White Feature Card**
- Background: `#ffffff`
- Text: `#4b4b4b`
- Border: 1px solid `#dedede`
- Radius: 12px
- Use: White feature card with hairline outline (near-flat, soft shadow at most)

### Badges

**Feature Category Pill**
- Background: `#24cdb9`
- Text: `#ffffff`
- Radius: 9999px (full)
- Font: 18px Museo Sans Rounded weight 600
- Use: Feature category chip ("Safety", "Sleep", "Health", "Memories")

### Navigation
- Background: `#ffffff`
- Text: `#6d6d6d`
- Font: 16px Museo Sans Rounded weight 400
- Active: deep teal `#24cdb9` text on active item
- Use: Top horizontal nav and footer link rows ("About Us", feature links)

### Region Selector
- Background: `#ffffff`
- Text: `#4b4b4b`
- Height: 38px row
- Padding: 10px 25px 10px 20px
- Font: 16px Museo Sans Rounded
- Use: Country/region dropdown rows (United States, Taiwan, Japan, etc.)

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces)
**Tier 1 sources:** https://us.getcubo.com/ (homepage, live computed style); https://us.getcubo.com/products/cuboai-smart-baby-monitor (product page "CuboAi Smart Baby Monitor 3", live computed style); https://us.getcubo.com/pages/cuboai-about-us (About Us brand/mission page, live computed style — pill inputs)
**Tier 2 sources:** getdesign.md/cuboai — no coverage ("No designs found"); styles.refero.design/?q=cubo — no matching Cubo Ai entry (generic gallery results only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 20px, 25px, 48px, 64px
- Notable: Region rows use an asymmetric 10px 25px 10px 20px padding; CTA pills use 12px 20px; pill inputs use a generous 16px 20px for a comfortable tap target

### Grid & Container
- Centered single-column heroes anchored by a 40px Museo Sans Rounded H1
- Feature categories arranged as a row of full-round teal pills (Safety / Sleep / Health / Memories)
- Product / About sections alternate white (`#ffffff`) and tinted grey (`#ebebef`) full-width bands
- Cards use a 12px radius and group related features, specs, and comparison rows

### Whitespace Philosophy
- **Calm over density**: a hardware storefront that resists clutter — generous vertical rhythm keeps an anxious parent's eye relaxed.
- **Flat segmentation**: sections separate by background tint (`#ebebef` vs `#ffffff`) and hairlines, not by heavy elevation.
- **Pill rhythm**: the repeated 50px-radius capsule (CTA, inputs, chips) sets a consistent rounded cadence across the page.

### Border Radius Scale
- Small (4px): inner media wells, small containers
- Medium (12px): cards and content containers — the workhorse
- Large (50px): CTA pills and pill inputs
- Full (9999px): feature-category chips, soft circular badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#ebebef` background shift | Card / section separation without elevation |
| Hairline (Level 2) | `1px solid #dedede` border | White card outlines, dividers |
| Soft (Level 3) | `rgba(0,0,0,0.08) 0px 4px 6px` | Small floating controls (compact add button) |

**Shadow Philosophy**: Cubo Ai is a near-flat system. Live inspection found `box-shadow: none` across the hero, nav, headings, and most cards; the only shadow observed is a soft `rgba(0,0,0,0.08) 0px 4px 6px` on the small add-to-cart control. Depth and grouping are carried almost entirely by flat tinted surfaces (`#ebebef`, `#dddddd`) and thin `#dedede` hairlines. This keeps the storefront calm and modern — the opposite of heavy, alarm-coded security-camera marketing. When emphasis is needed, the system reaches for color (teal `#5be3d3`, coral `#ff8784`, amber `#ffb516`), never elevation.

## 7. Do's and Don'ts

### Do
- Use Museo Sans Rounded for everything — the rounded family is the brand's voice
- Use SemiBold (600) for headlines and Bold (700) only for the primary CTA label
- Reserve teal (`#5be3d3`) for the primary CTA pill — keep it the single "action" color
- Use deep teal (`#24cdb9`) for accent headings and feature-category chips
- Use soft charcoal (`#4b4b4b`) for text instead of pure black
- Separate sections with flat tint (`#ebebef`) and `#dedede` hairlines, not heavy shadows
- Use pill geometry — 50px CTA and inputs, full-round feature chips
- Reach for the warm accent trio (coral `#ff8784`, amber `#ffb516`, sky `#4cc3e5`) for feature highlights

### Don't
- Use a sharp / technical typeface — the rounded family is non-negotiable
- Spread teal across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for body text — reserve soft charcoal `#4b4b4b`
- Use sharp / square corners on interactive elements — CTAs and inputs are pills
- Stack heavy shadows or elevation — Cubo Ai is near-flat
- Use alarm-coded reds or hard security-system styling — the tone is calm and reassuring
- Set headlines in a heavy black weight — SemiBold (600) keeps them friendly
- Introduce a second saturated brand hue to compete with teal

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero H1 compresses, feature pills wrap |
| Tablet | 640-1024px | Moderate padding, 2-up feature / product cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Primary CTA pill at 48px height, full pill for an unmistakable target
- Pill inputs at 52px height with 16px 20px padding — comfortably tappable
- Region rows at 38px height with generous horizontal padding
- Feature chips spaced for touch in the pill row

### Collapsing Strategy
- Hero: 40px Museo Sans Rounded H1 scales down on mobile, weight 600 maintained
- Feature pill row: horizontal wrap on narrow viewports
- Product / feature bands: multi-column → stacked single column
- Tinted / white alternating sections maintain full-width treatment

### Image Behavior
- Product and lifestyle photography sits on white or tinted-grey wells, minimal shadow
- Cards maintain a 12px radius across breakpoints
- Device close-ups keep their soft, rounded framing consistent with the brand geometry

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Cubo Teal (`#5be3d3`)
- Accent heading / chip: Deep Teal (`#24cdb9`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#ebebef`)
- Heading / body text: Soft Charcoal (`#4b4b4b`)
- Secondary text: Ink Soft (`#6d6d6d`)
- Muted text: Muted (`#9a9a9a`)
- Warm accents: Coral (`#ff8784`), Amber (`#ffb516`), Sky (`#4cc3e5`)
- Hairline: `#dedede`

### Example Component Prompts
- "Create a hero on white background. Headline at 40px Museo Sans Rounded weight 600, line-height 1.2, color #4b4b4b. Below it a row of full-round deep-teal feature chips (#24cdb9 bg, white text, 18px weight 600): Safety, Sleep, Health, Memories. One teal CTA pill: #5be3d3 background, #4b4b4b text, 50px radius, 12px 20px padding, 20px weight 700 — 'Go to Shop'."
- "Design a feature card: white background, 1px solid #dedede border, 12px radius, near-flat. Title 24px Museo Sans Rounded weight 600, #4b4b4b. Body 16px weight 400, line-height 1.5, #6d6d6d."
- "Build a tinted section: #ebebef background, full-width. Section title 32px Museo Sans Rounded weight 600, #4b4b4b. Cards inside use white #ffffff with #dedede hairline and 12px radius."
- "Create a newsletter pill input: white #ffffff background, 50px radius, 16px 20px padding, 52px height, 16px Museo Sans Rounded, #4b4b4b text and placeholder, with a #5be3d3 teal submit pill beside it."

### Iteration Guide
1. Museo Sans Rounded for every text element — rounded warmth is the DNA
2. Teal (`#5be3d3`) is the single action color — don't spread it
3. Near-flat — separate with `#ebebef` tint and `#dedede` hairlines, soft shadow only on small controls
4. Pill geometry throughout — 50px CTA / inputs, full-round chips, 12px cards
5. Text color is `#4b4b4b` charcoal, never pure black for body
6. Headlines weight 600, CTA label weight 700, body weight 400
7. Warm accents (coral / amber / sky) for feature iconography, never for the primary CTA

---

## 10. Voice & Tone

Cubo Ai's voice is **calm, reassuring, and parent-first** — it speaks to an exhausted, worried new parent and lowers the temperature rather than raising urgency. The About-page line "Parenthood is an exploration." and "We know parents deserve better" set the register: empathetic, mission-framed, never fear-based. Even though the product is a safety device, the copy avoids alarm language; it frames the monitor as a source of peace of mind, not a catalog of dangers.

| Context | Tone |
|---|---|
| Hero headlines | Warm, declarative. "CuboAi Smart Baby Monitor 3", "Why choose CuboAi?". Confident, never hype. |
| Feature labels | Plain, single-word categories. "Safety", "Sleep", "Health", "Memories". |
| CTAs | Direct, low-pressure. "Go to Shop", "Checkout", "Add". |
| Mission / About copy | Empathetic and human. "Parenthood is an exploration.", "We know parents deserve better". |
| Feature descriptions | Benefit-first, reassurance-led. Explains how the feature reduces parental worry. |

**Voice samples (verbatim from live brand surfaces):**
- "Our parenting-focused features reduce parental [stress/anxiety]" — homepage + product section heading (reassurance-framed). *(verified live 2026-06-17)*
- "Parenthood is an exploration." — About Us hero (empathetic mission line). *(verified live 2026-06-17)*
- "We know parents deserve better" — About Us section heading (advocacy register). *(verified live 2026-06-17)*

**Forbidden register**: fear-based danger framing, alarm-coded urgency, undefined technical jargon, exclamation-heavy hype, anything that increases rather than reduces a new parent's anxiety.

## 11. Brand Narrative

Cubo Ai is the smart-baby-monitor brand built by **Cubo** (parent company Yun Yun AI Baby Camera Co., headquartered in **Taiwan**), an award-winning hardware company whose signature product is a **bird-shaped AI camera paired with a sleep sensor pad**. The founding premise, stated plainly on the About page, is that "parents deserve better" — that the legacy baby-monitor category had left worried new parents with grainy video and constant false alarms instead of genuine peace of mind. Cubo's answer was to put proactive AI (covered-face and rollover detection, danger-zone alerts, true cry detection, sleep analytics) behind a soft, friendly industrial design that doesn't look like surveillance equipment.

The brand frames "Parenthood is an exploration" as its emotional thesis: the product exists to support parents through an uncertain journey, not to police them. The About page surfaces hard outcome numbers — hundreds of millions of hours of sleep monitored and hundreds of thousands of families served across more than a hundred-plus countries — as evidence of trust earned at scale, while the design language stays soft and reassuring rather than boastful.

What Cubo Ai refuses, visible in its design: the cold, alarm-coded aesthetic of security cameras (no hard reds, no surveillance-grid imagery), and the dark-pattern urgency of fear-driven baby-safety marketing. What it embraces: a rounded, bird-shaped hardware form echoed in Museo Sans Rounded typography; a single calming teal; warm nursery accents (coral, amber, sky); and copy that decodes a stressful domain into reassurance.

## 12. Principles

1. **Reduce anxiety, don't manufacture it.** A safety product that scares parents has failed at its job. *UI implication:* lead with reassurance and peace of mind; avoid alarm-coded reds and fear framing; keep the teal calm, not urgent.
2. **Softness is trust.** The rounded device, rounded type, and pill geometry all signal a product that is gentle, not clinical. *UI implication:* favor capsule shapes (50px CTA/input radius), rounded letterforms, and soft charcoal text over hard black.
3. **One action, one color.** Teal (`#5be3d3`) means "do this." *UI implication:* reserve the saturated teal exclusively for the primary CTA so the next step is never ambiguous.
4. **Calm and near-flat.** Clean, uncluttered surfaces beat decorative depth. *UI implication:* separate with tint and hairlines; reserve shadow for the smallest controls only.
5. **Warmth in the accents.** The supporting palette is a nursery, not a gadget rack. *UI implication:* use coral, amber, and sky for feature iconography and highlights to keep the product human.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Cubo Ai user segments (first-time parents, anxious caregivers, dual-income households), not individual people.*

**Emily Carter, 32, Austin.** A first-time mother in the fourth-trimester fog. Distrusts grainy legacy monitors and constant false alarms; wants to glance at her phone and feel calm, not interrogate a feed. Chose Cubo Ai because the storefront felt reassuring rather than alarmist, and the bird-shaped camera "looked like it belonged in a nursery."

**Daniel Lin, 38, Taipei.** A dual-income dad evaluating safety features (covered-face, rollover, danger-zone) before buying. Appreciates that the product explains how each feature reduces worry instead of listing scary scenarios. Trusts a hometown Taiwanese hardware brand that pairs real AI with a soft, parent-friendly design.

**Priya Nair, 29, London.** A returning-to-work mother who relies on sleep analytics and auto-captured photo memories. Wants a calm interface she can scan at 3 a.m. without being jolted by harsh colors. Values the warm, rounded tone and the single clear teal action.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no recorded events)** | White canvas. Single Soft Charcoal (`#4b4b4b`) line at body size in a calm tone explaining nothing has been recorded yet, with one teal CTA. No alarm imagery. |
| **Empty (saved memories, none yet)** | Muted (`#9a9a9a`) single line: nothing saved yet, plus a gentle path forward. Reassuring, never empty-scary. |
| **Loading (feed / results fetch)** | Skeleton blocks on `#ebebef` tinted surface at final card dimensions, 12px radius. Flat pulse consistent with the near-flat system — no harsh shimmer. |
| **Loading (in-place refresh)** | Subtle inline progress in teal; previous content stays visible. Never blank the safety feed during refresh. |
| **Error (connection lost)** | Inline message in Soft Charcoal with a plain-language explanation and a retry. Calm, not alarmist — states what to do next, no scary red banner. |
| **Error (form validation)** | Field-level message below the pill input in a warm tone; describes what's valid, not just "Required". |
| **Success (order placed / setup complete)** | Brief inline confirmation in a calm tone with teal accent; next-step detail linked immediately below. No loud celebration. |
| **Skeleton** | `#ebebef` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Muted (`#9a9a9a`) text on reduced-opacity surface; teal actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 220ms | Card / section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, chips |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is gentle and functional — consistent with the calm, near-flat aesthetic. Pill chips and CTAs respond to press with a subtle scale/opacity shift; feature cards fade-in from below at `motion-standard / ease-enter`. No harsh bounce or jolt — a baby-monitor brand signals steadiness and reassurance, not playful surprise. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle on 3 brand-owned surfaces:
- https://us.getcubo.com/ (homepage)
- https://us.getcubo.com/products/cuboai-smart-baby-monitor (product page "CuboAi Smart Baby Monitor 3")
- https://us.getcubo.com/pages/cuboai-about-us (About Us brand/mission page)

Observed values backing §1-9 tokens:
- Primary CTA "Go to Shop"/"Checkout": bg rgb(91,227,211) #5be3d3 / color rgb(75,75,75) #4b4b4b / radius 50px / padding 12px 20px / 20px weight 700 / museo-sans-rounded
- Compact "Add": bg #5be3d3 / radius 50px / padding 5px 8px / 14px weight 600 / shadow rgba(0,0,0,0.08) 0px 4px 6px
- Feature pills (Safety/Sleep/Health/Memories): deep teal rgb(36,206,185) #24cdb9 / white text / 18px weight 600
- H1 40px / H2 32px / H3 24px all weight 600, color rgb(75,75,75), museo-sans-rounded
- Pill inputs (About page newsletter): white bg / radius 50px / padding 16px 20px / 52px height / 16px
- Surfaces: rgb(235,235,239) #ebebef, rgb(221,221,221) #dddddd; hairline rgb(222,222,222) #dedede
- Warm accents: coral rgb(255,135,132) #ff8784, amber rgb(255,181,22) #ffb516, amber-soft rgb(255,207,104) #ffcf68, sky rgb(76,195,229) #4cc3e5, mint rgb(187,239,233) #bbefe9, mint-faint rgb(233,244,243) #e9f4f3
- box-shadow: none across hero/nav/headings/most cards (near-flat system); soft shadow only on small add control

Voice samples (§10) are verbatim from the live brand surfaces (homepage/product feature heading, About Us hero and headings).

Brand narrative (§11): Cubo Ai is the smart-baby-monitor brand by Cubo (Yun Yun AI Baby Camera Co.),
a Taiwan-based hardware company; signature bird-shaped AI camera + sleep sensor. The "parents deserve better"
and "Parenthood is an exploration" framing and the outcome statistics are stated on the live About Us page;
broader company facts are general public knowledge, not directly quoted beyond the About page.

Personas (§13) are fictional archetypes informed by publicly observable Cubo Ai user segments
(first-time parents, anxious caregivers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "rounded type echoes the bird-shaped device", "reduce anxiety, don't manufacture it"
as a rejection of alarm-coded security marketing) are editorial readings connecting Cubo Ai's observed design
to its parent-first positioning, not directly sourced Cubo statements.
-->
