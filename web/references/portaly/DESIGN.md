---
id: portaly
name: Portaly
country: TW
category: design-tools
homepage: "https://portaly.cc/"
primary_color: "#862983"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=portaly.cc&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = pricing interactive magenta/plum (#862983) on filled CTAs + toggle thumb; teal (#00a6a3 / #12a3a0) is the brand accent (logo swoosh, checkmarks, gradient endpoint); hero uses a purple gradient (#6e28af → #ac8ffe); navy (#0c2340) for nav. Marketing site renders English globally but the font stack carries Noto Sans TC for Traditional Chinese."
  colors:
    primary: "#862983"
    teal: "#00a6a3"
    teal-alt: "#12a3a0"
    teal-soft: "#38aaaa"
    purple-hero: "#6e28af"
    purple-hero-light: "#ac8ffe"
    swoosh-magenta: "#bb53b9"
    navy: "#0c2340"
    navy-deep: "#1a2a3a"
    ink: "#333333"
    ink-pure: "#000000"
    muted: "#969696"
    canvas: "#f8f8f8"
    surface: "#ffffff"
    surface-alt: "#f2f2f2"
    hairline: "#d9d9d9"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Noto Sans", cjk: "Noto Sans TC" }
    display-hero: { size: 50, weight: 800, lineHeight: 1.38, tracking: 1, use: "Hero headline, Noto Sans ExtraBold" }
    feature-xl:   { size: 50, weight: 700, lineHeight: 1.50, use: "Large feature statement (Turn Traffic into Revenue)" }
    section:      { size: 36, weight: 700, lineHeight: 1.50, use: "Section titles" }
    feature:      { size: 24, weight: 700, lineHeight: 1.50, use: "Feature card heads" }
    lede:         { size: 20, weight: 400, lineHeight: 1.50, use: "Hero subhead / lede" }
    nav:          { size: 18, weight: 600, lineHeight: 1.33, use: "Nav links, Noto Sans SemiBold" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 40, section: 64 }
  rounded: { sm: 6, md: 12, lg: 20, full: 9999 }
  shadow:
    card: "rgba(99,99,99,0.2) 0px 2px 8px 0px"
    block: "rgba(0,0,0,0.05) 0px 1px 2px 0px"
  components:
    button-primary: { type: button, bg: "#862983", fg: "#ffffff", radius: "6px", padding: "4px 16px", height: "32px", font: "16px / 600 Noto Sans", use: "Primary CTA on pricing (Join Now), hover deepens plum" }
    button-primary-lg: { type: button, bg: "#862983", fg: "#ffffff", radius: "20px", padding: "24px 40px", height: "52px", font: "18px / 600 Noto Sans", use: "Large primary CTA (Start Free)" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#862983", border: "1px solid #862983", radius: "6px", padding: "4px 16px", height: "32px", font: "16px / 600 Noto Sans", use: "Secondary CTA (Start for Free), magenta outline" }
    button-hero-ghost: { type: button, fg: "#ffffff", border: "2px solid #ffffff", radius: "9999px", padding: "14px 70px", font: "28px / 600 Noto Sans", use: "White outline pill CTA over the purple hero gradient" }
    nav-link: { type: tab, fg: "#0c2340", font: "18px / 600 Noto Sans", active: "magenta #862983 text on the active item", use: "Top nav item (Features, Pricing, Portaly AI, Blog)" }
    plan-card: { type: card, bg: "#ffffff", radius: "12px", shadow: "rgba(99,99,99,0.2) 0px 2px 8px 0px", use: "Pricing plan card on #f8f8f8 canvas, no border" }
    link-block: { type: card, bg: "#ffffff", radius: "6px", padding: "8px 16px", font: "16px / 600 Noto Sans", use: "Creator-page link block (filled 6px / rounded 16px variants); accent color is creator-chosen" }
    toggle-billing: { type: toggle, bg: "#d9d9d9", radius: "9999px", height: "24px", use: "Annual/Monthly billing switch, magenta #862983 active thumb" }
    feature-check: { type: badge, fg: "#12a3a0", font: "16px / 400 Noto Sans", use: "Teal checkmark in plan feature lists" }
  components_harvested: true
---

# Design System Inspiration of Portaly

## 1. Visual Theme & Atmosphere

Portaly (傳送門) is Taiwan's largest Traditional-Chinese link-in-bio and creator landing-page builder, operated by Real Engine, and its marketing surface reads like a bright, optimistic creator-economy product rather than a utilitarian dev tool. The page background is a soft off-white (`#f8f8f8`) under crisp white (`#ffffff`) content cards, with body copy in a comfortable warm grey-black (`#333333`) and headlines in true black (`#000000`). The single most saturated interactive color is a confident magenta-plum (`#862983`) — it owns every filled "Join Now" / "Start Free" call-to-action and the billing toggle — so the eye is trained to read that one plum as "the action."

The brand's emotional signature, though, is its **teal-and-magenta duality wired into a curved-arrow logo**. The Portaly wordmark sits in navy (`#0c2340`) with a teal-to-magenta swoosh curving through the letters — the curved-arrow visual metaphor that recurs across the system as a left-to-right gradient (`#bb53b9 → #00a6a3`, magenta into teal) on stat strips and decorative accents. Teal (`#00a6a3`, with `#12a3a0` and `#38aaaa` companions) is the accent voice: feature checkmarks, the "200,000 creators" highlight, and icon details. The hero itself is washed in a separate purple gradient (`#6e28af → #ac8ffe`) with white headline and a white outline pill CTA, giving the top of the page a playful, energetic lift before the content settles into clean white.

Geometrically the system is friendly and rounded but not extreme: filled pricing buttons sit at a tidy 6px radius, large CTAs relax to 20px, plan cards round to 12px with a soft grey ambient shadow (`rgba(99,99,99,0.2) 0px 2px 8px`), and the hero/nav pills go fully round (9999px). Depth is gentle — a single soft card shadow and thin `#d9d9d9` hairlines do the separating, never heavy elevation. Typography is set in **Noto Sans with a Noto Sans TC fallback**, so the same chrome renders Traditional Chinese natively on creator pages (e.g. `林啟維`, `Portaly 徵才 全端工程師`). Headlines run heavy — 50px ExtraBold (800) on the hero, 36px Bold (700) on sections — over quiet 16px / weight 400 body, the classic bold-display-over-light-body tension.

**Key Characteristics:**
- Magenta-plum (`#862983`) reserved for the primary interactive action — filled CTAs and the billing toggle thumb
- Teal accent voice (`#00a6a3` / `#12a3a0` / `#38aaaa`) — logo swoosh, feature checkmarks, highlights
- Signature magenta→teal gradient (`#bb53b9 → #00a6a3`) and a playful purple hero gradient (`#6e28af → #ac8ffe`)
- Navy (`#0c2340`, deeper `#1a2a3a`) for nav links and structural ink instead of pure black
- Noto Sans + Noto Sans TC stack — bold display (800/700) over quiet 16px/400 body, Traditional-Chinese native
- Rounded-but-restrained geometry — 6px buttons, 12px cards, 20px large CTAs, 9999px hero/nav pills
- Gentle depth — one soft grey card shadow (`rgba(99,99,99,0.2) 0px 2px 8px`) + `#d9d9d9` hairlines
- Off-white canvas (`#f8f8f8`) under white surfaces; warm-grey body text (`#333333`)

## 2. Color Palette & Roles

### Primary & Brand
- **Portaly Plum** (`#862983`): Primary interactive color. Filled CTA background ("Join Now", "Start Free"), billing toggle active thumb, secondary-button outline/text. The system's single "action" color.
- **Brand Teal** (`#00a6a3`): The dominant accent — logo swoosh endpoint, the magenta→teal gradient, highlight numerals ("200,000"), icon details. Appears 60+ times in the live color scan.
- **Teal Alt** (`#12a3a0`): Slightly deeper teal used for feature checkmarks and secondary accent strokes.
- **Teal Soft** (`#38aaaa`): A muted teal companion for softer accent surfaces and hover tints.

### Gradients
- **Swoosh Magenta** (`#bb53b9`): The magenta start of the signature left-to-right brand gradient `#bb53b9 → #00a6a3` (the curved-arrow swoosh / stat-strip accent).
- **Purple Hero** (`#6e28af`): Top stop of the hero background gradient.
- **Purple Hero Light** (`#ac8ffe`): Bottom stop of the hero gradient `#6e28af → #ac8ffe` — gives the hero its playful violet wash.

### Ink & Structure
- **Ink Navy** (`#0c2340`): Nav links, structural headings, strong labels — a deep blue-black instead of pure black.
- **Navy Deep** (`#1a2a3a`): A darker navy used on deeper structural surfaces and dark creator-page backdrops.
- **Ink** (`#333333`): Default body text — a warm grey-black, the document default.
- **Pure Black** (`#000000`): Maximum-contrast marketing headlines (hero feature statements, section heads).

### Neutral & Surface
- **Canvas** (`#f8f8f8`): Page background — soft off-white under white content.
- **Surface** (`#ffffff`): White content cards, plan cards, button surfaces, text on plum/teal.
- **Surface Alt** (`#f2f2f2`): Secondary grey surface for alternating blocks and chips.
- **Hairline** (`#d9d9d9`): Thin borders, dividers, plan-grid separators, and the billing-toggle track.
- **Muted** (`#969696`): Helper/fine-print text ("Permanently Free to Use", annual-fee notes).
- **On Primary** (`#ffffff`): Text/icon color on plum and teal fills.

## 3. Typography Rules

### Font Family
- **Sans**: `Noto Sans` — the primary Latin face for all display and body text.
- **CJK**: `Noto Sans TC` — Traditional-Chinese fallback in the same stack (`"Noto Sans", "Noto Sans TC", sans-serif`); creator product pages also append `Noto Color Emoji`.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Noto Sans | 50px (3.13rem) | 800 | 1.38 (68.75px) | 1px | Hero headline, ExtraBold |
| Feature XL | Noto Sans | 50px (3.13rem) | 700 | 1.50 (75px) | normal | Large feature statement |
| Section Heading | Noto Sans | 36px (2.25rem) | 700 | 1.50 (54px) | normal | Section titles |
| Feature Head | Noto Sans | 24px (1.50rem) | 700 | 1.50 (36px) | normal | Feature card heads |
| Lede / Subhead | Noto Sans | 20px (1.25rem) | 400-500 | 1.50 (30px) | normal | Hero subhead, intro text |
| Nav Link | Noto Sans | 18px (1.13rem) | 600 | 1.33 (24px) | normal | Top navigation items |
| Body | Noto Sans | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |

### Principles
- **Bold display, quiet body**: headlines run 800 (hero) and 700 (sections/features); body and lede stay at 400. The weight jump is the primary hierarchy signal.
- **Two-language, one stack**: the same `Noto Sans → Noto Sans TC` stack renders Latin marketing copy and Traditional-Chinese creator pages without a font swap — Noto's matched metrics keep hangul-free CJK and Latin visually consistent.
- **Near-flat tracking**: only the hero carries a slight positive `1px` letter-spacing for its ExtraBold display line; everything else sits at normal tracking.
- **Generous line-height**: body and most heads run at a comfortable 1.5 line-height, reinforcing the airy, approachable creator-economy feel.

## 4. Component Stylings

### Buttons

**Primary (Join Now)**
- Background: `#862983`
- Text: `#ffffff`
- Radius: 6px
- Padding: 4px 16px
- Height: 32px
- Font: 16px Noto Sans weight 600
- Use: Primary CTA on pricing/nav — the system's single filled action

**Primary Large (Start Free)**
- Background: `#862983`
- Text: `#ffffff`
- Radius: 20px
- Padding: 24px 40px
- Height: 52px
- Font: 18px Noto Sans weight 600
- Use: Large primary CTA in plan cards / section ends

**Secondary (Start for Free)**
- Background: `#ffffff`
- Text: `#862983`
- Border: 1px solid `#862983`
- Radius: 6px
- Padding: 4px 16px
- Height: 32px
- Font: 16px Noto Sans weight 600
- Use: Lower-emphasis plum-outline action (Free plan)

**Hero Ghost (Start for free)**
- Text: `#ffffff`
- Border: 2px solid `#ffffff`
- Radius: 9999px
- Padding: 14px 70px
- Font: 28px Noto Sans weight 600
- Use: White outline pill CTA over the purple hero gradient

### Cards & Containers

**Pricing Plan Card**
- Background: `#ffffff`
- Radius: 12px
- Shadow: `rgba(99,99,99,0.2) 0px 2px 8px 0px`
- Use: Pricing plan card sitting on the `#f8f8f8` canvas (no border)

**Creator Link Block**
- Background: `#ffffff`
- Radius: 6px
- Padding: 8px 16px
- Font: 16px Noto Sans weight 600
- Shadow: `rgba(0,0,0,0.05) 0px 1px 2px 0px`
- Use: The core product component — a full-width tappable link row on a creator's page (filled 6px and rounded 16px variants; accent color is creator-chosen)

### Badges

**Feature Check**
- Text: `#12a3a0`
- Font: 16px Noto Sans weight 400
- Use: Teal checkmark glyph preceding each plan feature line

### Toggles

**Billing Switch (Annual / Monthly)**
- Background: `#d9d9d9`
- Radius: 9999px
- Height: 24px
- Use: Billing-period switch; the active thumb is plum `#862983`

### Navigation
- Background: `#ffffff`
- Text: `#0c2340`
- Font: 18px Noto Sans weight 600
- Active: magenta `#862983` text on the active item
- Use: Top horizontal nav (Features, Pricing, Portaly AI, Blog) with a plum "Join Now" pill right-aligned

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces)
**Tier 1 sources:** https://portaly.cc/ ; https://portaly.cc/en/pricing ; https://portaly.cc/en/blog ; https://portaly.cc/cwl (founder live creator page — Traditional-Chinese product surface)
**Tier 2 sources:** getdesign.md/portaly — NO DATA ("No designs found for 'portaly'"); styles.refero.design/?q=portaly — Portaly not indexed (only generic default cards returned)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 40px, 64px
- Notable: section CTAs use a generous 24px 40px padding for the large "Start Free" button; plan cards sit ~540px wide in a two-up grid

### Grid & Container
- Centered marketing column: full-width purple hero gradient band, then white content sections on the `#f8f8f8` canvas
- Pricing: a centered two-up plan-card grid (Free / Premium), each card ~538px wide at 12px radius
- Feature sections alternate white feature-card rows with template-thumbnail gradient grids
- Creator pages: a single mobile-first centered column of full-width link blocks under an avatar + handle header

### Whitespace Philosophy
- **Airy and optimistic**: generous vertical rhythm between sections; the creator-economy product avoids dense dashboard packing on its marketing surface.
- **Color band cadence**: the purple hero gradient gives way to clean white content, a bright-to-calm transition that anchors the brand mood up top.
- **Soft segmentation**: sections separate by `#f8f8f8` vs `#ffffff` background shift and thin `#d9d9d9` hairlines, not heavy borders.

### Border Radius Scale
- Small (6px): pricing buttons, filled creator link blocks — the workhorse
- Medium (12px): pricing plan cards, content containers
- Large (16px–20px): rounded creator link blocks, large CTAs
- Full (9999px): hero/nav pills, billing toggle, "Join Now" header pill

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most marketing chrome |
| Block (Level 1) | `rgba(0,0,0,0.05) 0px 1px 2px 0px` | Creator link blocks, subtle lift |
| Card (Level 2) | `rgba(99,99,99,0.2) 0px 2px 8px 0px` | Pricing plan cards, elevated content |
| Hairline | `1px solid #d9d9d9` | Plan-grid dividers, section separators |

**Shadow Philosophy**: Portaly keeps elevation gentle and friendly. The signature card shadow is a soft, neutral grey ambient blur (`rgba(99,99,99,0.2) 0px 2px 8px`) — low spread, no harsh contrast — used on pricing plan cards. Creator link blocks carry an even lighter `rgba(0,0,0,0.05) 0px 1px 2px` lift. Most of the marketing surface is flat; depth is reserved for the few surfaces that genuinely need to read as "tappable cards." The mood is approachable, not engineered — the opposite of a heavy fintech card-stack.

## 7. Do's and Don'ts

### Do
- Reserve magenta-plum (`#862983`) for the primary action — filled CTAs and the billing toggle
- Use teal (`#00a6a3` / `#12a3a0`) as the accent voice — checkmarks, highlights, the logo swoosh
- Reach for the magenta→teal gradient (`#bb53b9 → #00a6a3`) for the signature curved-arrow / stat accents
- Use the purple hero gradient (`#6e28af → #ac8ffe`) with white headline + white outline pill at the top
- Set type in Noto Sans with a Noto Sans TC fallback so Traditional Chinese renders natively
- Run headlines heavy (800 hero / 700 sections) over quiet 16px / weight 400 body
- Keep buttons at 6px, cards at 12px, large CTAs at 20px, hero/nav pills fully round
- Use navy (`#0c2340`) for nav links and structural ink instead of pure black

### Don't
- Spread plum across many elements — it dilutes the single-action signal
- Swap the accent away from teal — the teal-magenta duality is the brand's identity
- Use heavy or dark drop shadows — depth is a soft grey ambient lift only
- Set the whole UI in pure black headings everywhere — reserve `#000000` for marketing display lines
- Use sharp square corners on buttons or cards — everything is gently rounded
- Render Traditional Chinese without the Noto Sans TC fallback — the stack must carry CJK
- Add a third saturated brand hue — plum + teal (+ the playful purple hero) is the whole palette
- Set headlines in a light weight — display is always Bold/ExtraBold

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; hero headline compresses; plan cards stack; creator pages are mobile-first by default |
| Tablet | 640-1024px | Moderate padding; two-up feature/plan grids begin |
| Desktop | 1024-1440px | Full layout; centered hero; two-up plan grid; template-thumbnail rows |

### Touch Targets
- Filled CTAs at 32px+ height with comfortable horizontal padding; large CTA at 52px
- Creator link blocks at 44px+ full-width rows — generous, unmistakable tap targets
- Nav links spaced for touch within the white header

### Collapsing Strategy
- Hero: 50px ExtraBold headline scales down on mobile, weight 800 maintained
- Pricing: two-up plan cards → stacked single column
- Feature sections + template grids: multi-column → stacked
- Purple hero band maintains its gradient full-width across breakpoints

### Image Behavior
- Template thumbnails keep their vibrant gradient fills and rounded corners at all sizes
- Phone-mockup product shots in the hero scale proportionally
- Creator-page avatars and link blocks remain full-width centered on narrow viewports

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Portaly Plum (`#862983`)
- Brand accent: Teal (`#00a6a3`), deeper Teal Alt (`#12a3a0`)
- Hero gradient: Purple (`#6e28af` → `#ac8ffe`)
- Signature gradient: Magenta → Teal (`#bb53b9` → `#00a6a3`)
- Nav / ink: Navy (`#0c2340`)
- Body text: Ink (`#333333`); headings Pure Black (`#000000`)
- Muted text: (`#969696`)
- Canvas: Off-white (`#f8f8f8`); Surface White (`#ffffff`)
- Hairline: (`#d9d9d9`)

### Example Component Prompts
- "Create a hero with a purple gradient background (#6e28af top → #ac8ffe bottom). Headline 50px Noto Sans weight 800, line-height 1.38, letter-spacing 1px, white. Subhead 20px weight 400 white. A white outline pill CTA: transparent bg, 2px solid #ffffff border, 9999px radius, 14px 70px padding, 28px weight 600 — 'Start for free'."
- "Design a pricing plan card: white #ffffff background, 12px radius, shadow rgba(99,99,99,0.2) 0px 2px 8px, no border, on a #f8f8f8 canvas. Primary CTA: #862983 background, white text, 6px radius, 4px 16px padding, 16px Noto Sans weight 600 ('Join Now'). Feature rows lead with a teal #12a3a0 checkmark."
- "Build a secondary button: white background, #862983 text, 1px solid #862983 border, 6px radius, 16px weight 600 ('Start for Free')."
- "Create a creator link-in-bio page: centered mobile column, avatar + handle header, full-width white link blocks at 6px radius, 8px 16px padding, 16px Noto Sans weight 600, soft rgba(0,0,0,0.05) 0px 1px 2px lift. Set the font stack 'Noto Sans, Noto Sans TC, sans-serif' for Traditional Chinese."
- "Create top nav: white header, 18px Noto Sans weight 600 links in navy #0c2340, magenta #862983 on the active item, with a plum #862983 'Join Now' pill (9999px) right-aligned."

### Iteration Guide
1. Plum (`#862983`) is the single filled action color; teal (`#00a6a3`/`#12a3a0`) is the accent
2. Hero = purple gradient (`#6e28af → #ac8ffe`) + white headline + white outline pill
3. Signature accent = magenta→teal gradient (`#bb53b9 → #00a6a3`)
4. Noto Sans + Noto Sans TC stack; bold display (800/700) over 16px/400 body
5. Buttons 6px, cards 12px, large CTAs 20px, hero/nav pills 9999px
6. Card shadow is a soft grey `rgba(99,99,99,0.2) 0px 2px 8px`; nothing dark
7. Navy `#0c2340` for nav/ink, `#000000` only for marketing display headlines
8. Canvas `#f8f8f8` under white surfaces; hairlines `#d9d9d9`

---

## 10. Voice & Tone

Portaly's voice is **encouraging, growth-minded, and creator-first** — it speaks to visual creators and small businesses as ambitious people turning an audience into income, not as users to be onboarded. The hero line "Your All-in-One Platform for Growth and Profit" and the supporting "Join 200,000 creators worldwide to turn passion into profit" set the register: aspirational, plain-spoken, benefit-forward, never jargon-heavy. Pricing copy ("Growth & monetization plans built for creators", "From basic presence to steady monetization — choose the plan that fits you") frames money positively and removes friction rather than pressuring.

| Context | Tone |
|---|---|
| Hero headlines | Aspirational, benefit-first. "Your All-in-One Platform for Growth and Profit." Confident, not hype. |
| Feature heads | Action verbs naming an outcome. "Turn Traffic into Revenue", "Grow Your Fanbase", "Monetize Your Content". |
| CTAs | Direct, low-pressure, free-forward. "Start for free", "Join Now", "Start Free". |
| Pricing copy | Reassuring and transparent. "Permanently Free to Use", "with the first 14 days free", "Save 14% monthly". |
| Creator product (TC) | Personal and warm, in Traditional Chinese — a creator's own links, columns, and recruiting posts. |

**Voice samples (verbatim from live surfaces):**
- "Your All-in-One Platform for Growth and Profit" — hero headline (mission-framed). *(verified live 2026-06-17, portaly.cc/)*
- "Join 200,000 creators worldwide to turn passion into profit" — hero subhead (scale + benefit). *(verified live 2026-06-17, portaly.cc/)*
- "Growth & monetization plans built for creators" — pricing headline. *(verified live 2026-06-17, portaly.cc/en/pricing)*

**Forbidden register**: fear-based or scarcity urgency, undefined growth-hacking jargon, exclamation-heavy hype, dismissive or gatekeeping language toward small creators.

## 11. Brand Narrative

Portaly (傳送門) was launched in **2022** by **CW Lin (林啟維)** under **Real Engine, Inc. (真實引擎)**, a Taiwan startup, to solve a problem visual creators and small Traditional-Chinese-speaking businesses faced: the dominant Western link-in-bio tools were built for a Latin, English-first audience and treated a creator's page as a bare list of links rather than a real, monetizable web presence. Portaly reframed the link-in-bio as a *social landing page* — a place to not only point followers outward but to sell, collect leads, and build a brand, localized first for the Taiwanese creator market.

The product grew into Taiwan's largest Traditional-Chinese link-in-bio / creator landing-page builder, serving a stated 200,000+ creators worldwide, with generative-AI page building added in 2023 — a launch that won **#2 Product of the Day** on Product Hunt (the badge still sits live on the homepage and pricing page). The company has been recognized in Taiwan's **Neo 30 (2023)** startup list and is a **500 Global** alumnus.

What Portaly refuses, visible in its design: the cold, utilitarian aesthetic of a pure-utility link list, and the high-pressure monetization patterns of growth-hacking tools. What it embraces: a bright, optimistic creator-economy mood; a friendly magenta-and-teal identity carried by a curved-arrow swoosh; native Traditional-Chinese typography (Noto Sans TC); and copy that frames growth and profit as encouraging outcomes the creator owns.

## 12. Principles

1. **A page, not a link list.** Portaly treats a creator's page as a real, monetizable landing page. *UI implication:* full-width tappable link blocks, plan-grade cards, and product/lead blocks — structure beyond a bare list.
2. **One action, one plum.** Magenta-plum (`#862983`) means "do this." *UI implication:* reserve the saturated plum exclusively for the primary filled CTA so the next step is never ambiguous.
3. **Teal is the brand's warmth.** The teal-magenta duality and curved-arrow swoosh are the identity. *UI implication:* use teal (`#00a6a3`/`#12a3a0`) for accents, checkmarks, and the signature gradient; don't introduce a competing hue.
4. **Traditional-Chinese first.** The product is built for a Traditional-Chinese creator market. *UI implication:* always carry the Noto Sans TC fallback so CJK renders natively and consistently with Latin.
5. **Optimistic, not pushy.** Growth and profit are framed as encouraging outcomes. *UI implication:* keep CTAs free-forward and low-pressure; lean on bright color and airy layout, never scarcity or dark patterns.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Portaly user segments (Traditional-Chinese visual creators, small businesses, course/product sellers), not individual people.*

**陳郁婷, 27, 台北.** An illustrator selling commissions and digital goods. Switched from a Western link-in-bio because Portaly let her build a real shopfront page in Traditional Chinese, collect leads, and take payment in one place. Values that the page feels like *hers*, not a generic list.

**黃彥儒, 34, 台中.** A fitness coach running paid programs. Uses Portaly's monetization blocks and AI page builder to spin up campaign landing pages fast. Likes that the free tier is genuinely usable and the upgrade ("the first 14 days free") feels low-risk.

**林思妤, 41, 高雄.** A small-shop owner driving social traffic to a single Portaly page. Appreciates the bright, friendly look that matches her brand and the plain pricing copy that tells her exactly what she gets — no jargon, no pressure.

## 14. States

| State | Treatment |
|---|---|
| **Empty (new creator page)** | White canvas, avatar placeholder + handle, a single Ink (`#333333`) prompt to add the first link block, with a plum (`#862983`) "add" CTA. Encouraging, never blank-scary. |
| **Empty (no analytics yet)** | Muted (`#969696`) single line explaining no data has been collected yet, with a path to share the page. Honest and calm. |
| **Loading (page/builder)** | Skeleton blocks at final link-block dimensions on the `#f8f8f8` canvas, 6px radius, soft pulse consistent with the gentle-shadow system. |
| **Loading (AI page generation)** | Inline progress with the plum accent; existing blocks stay visible while AI proposes new ones. |
| **Error (save/publish failed)** | Inline message in Ink (`#333333`) with a plain-language explanation and a retry — states what to do next, no bare error code. |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "required". |
| **Success (published / saved)** | Brief inline confirmation in calm tone; the live page link surfaces immediately below. No celebratory emoji spam. |
| **Skeleton** | `#f2f2f2` / `#f8f8f8` blocks at final dimensions, 6px–12px radius, soft pulse. |
| **Disabled** | Muted (`#969696`) text on reduced-opacity surface; plum actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, toggle flip, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown, link-block reorder |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, blocks, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is friendly but functional — consistent with the bright, approachable creator-economy mood. The billing toggle flips its plum thumb at `motion-fast`; link blocks and cards reveal/reorder at `motion-standard / ease-enter` with a small fade-from-below; the purple hero settles in once on load. A light delight is on-brand here (more than a fintech tool would allow), but never bouncy chaos — a creator's published page must feel stable and trustworthy. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle:
- https://portaly.cc/ (homepage, geo-redirects to /en) — hero, hero gradient, nav, CTAs, template thumbnails, color-frequency scan
- https://portaly.cc/en/pricing — primary/secondary buttons (#862983), plan cards (12px, soft grey shadow), billing toggle, teal checkmarks (#12a3a0)
- https://portaly.cc/en/blog — brand-owned surface, same chrome/font stack
- https://portaly.cc/cwl — founder 林啟維's live creator page (Traditional-Chinese product surface; link-block component; "Noto Sans, Noto Sans TC, Noto Color Emoji" stack confirmed)

All token-level claims (§1–9) are sourced from this live inspection. Full raw samples in
web/references/portaly/.verification.md.

Voice samples (§10) are verbatim from the live homepage and pricing page.

Brand narrative (§11): Portaly (傳送門) launched 2022 by CW Lin (林啟維) under Real Engine, Inc.
(真實引擎), a Taiwan startup; Taiwan's largest Traditional-Chinese link-in-bio / creator
landing-page builder; AI feature won #2 Product of the Day on Product Hunt (2023, badge live
on site); Neo 30 (2023) and 500 Global recognition. Gathered via WebSearch 2026-06-17
(LinkedIn /company/portaly-cc, Cake /me/chi-wei-lin-CW, Yourator Real-Engine, Crunchbase
/organization/portaly) + live marketing copy. These are widely documented public facts, not
directly quoted from a verified internal Portaly statement beyond the live site copy.

Personas (§13) are fictional archetypes informed by publicly observable Portaly user segments
(Traditional-Chinese visual creators, small businesses, course/product sellers). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "a page, not a link list", "one action, one plum", "teal-magenta
duality as the brand's warmth") are editorial readings connecting Portaly's observed design to
its positioning, not directly sourced Portaly statements.
-->
