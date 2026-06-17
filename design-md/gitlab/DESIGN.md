---
id: gitlab
name: GitLab
country: US
category: developer-tools
homepage: "https://about.gitlab.com"
primary_color: "#1f75cb"
logo:
  type: simpleicons
  slug: gitlab
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = Pajamas confirm/action blue (#1f75cb); brand orange Tanuki (#fc6d26) is the accent/logo color; GitLab Duo AI purple (#7759c2) marks AI surfaces. Marketing chrome (about.gitlab.com) is ink-based (#171321) with GitLab Sans; the open Pajamas DS (design.gitlab.com) supplies the canonical component tokens."
  colors:
    primary: "#1f75cb"
    primary-border: "#2f68b4"
    brand-orange: "#fc6d26"
    duo-purple: "#7759c2"
    ink: "#171321"
    ink-strong: "#18171d"
    text-default: "#28272d"
    text-primary: "#3a383f"
    muted: "#74717a"
    muted-alt: "#626168"
    faint: "#4c4b51"
    canvas: "#ffffff"
    surface: "#f4f4f4"
    surface-tint: "#f2f1f5"
    purple-tint: "#f6f3fe"
    dark-surface: "#1f1c2e"
    dark-deep: "#060a0f"
    hairline: "#bfbfc3"
    hairline-soft: "#dcdcde"
    on-primary: "#ffffff"
    danger: "#dd2b0e"
    danger-border: "#c02f12"
    danger-text: "#a32c12"
    danger-tint: "#fdd4cd"
    success-tint: "#c3e6cd"
    success-text: "#306440"
    warning-tint: "#f5d9a8"
    warning-text: "#894b16"
    info-tint: "#cbe2f9"
    info-text: "#2f5ca0"
    tier-tint: "#e1d8f9"
    tier-text: "#5c47a6"
  typography:
    family: { sans: "GitLab Sans" }
    display-hero: { size: 96, weight: 660, lineHeight: 1.04, tracking: -2.88, use: "Hero headline, GitLab Sans semibold" }
    section:      { size: 32, weight: 660, lineHeight: 1.12, tracking: -0.64, use: "Section titles" }
    subsection:   { size: 18, weight: 660, lineHeight: 1.33, use: "Card / nav-card heads, CTA labels" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    ui:           { size: 14, weight: 400, lineHeight: 1.43, use: "Component / docs UI text, Pajamas default" }
    badge:        { size: 12, weight: 400, lineHeight: 1.33, use: "Pill badge label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    inset-border: "rgb(137,136,141) 0px 0px 0px 1px inset"
    elevated: "rgba(5,5,6,0.08) 0px 2px 8px"
  components:
    button-confirm: { type: button, bg: "#1f75cb", fg: "#ffffff", border: "1px solid #2f68b4", radius: "8px", height: "32px", padding: "0 12px", font: "14px / 400 GitLab Sans", use: "Primary confirm action (Pajamas), hover darkens" }
    button-danger: { type: button, bg: "#dd2b0e", fg: "#ffffff", border: "1px solid #c02f12", radius: "8px", height: "32px", padding: "0 12px", font: "14px / 400 GitLab Sans", use: "Destructive action" }
    button-default: { type: button, bg: "#ffffff", fg: "#3a383f", border: "1px solid #bfbfc3", radius: "8px", height: "32px", padding: "0 12px", font: "14px / 400 GitLab Sans", use: "Secondary/default action", states: "selected #ececef · disabled bg #fbfafd fg #74717a" }
    button-marketing: { type: button, bg: "#171321", fg: "#ffffff", radius: "4px", height: "47px", padding: "11px 16px", font: "18px / 660 GitLab Sans", use: "Marketing ink CTA on about.gitlab.com — Get free trial / Try for free" }
    input-text: { type: input, bg: "#ffffff", fg: "#3a383f", radius: "8px", padding: "8px 12px", height: "32px", font: "14px GitLab Sans", shadow: "0 0 0 1px inset #89888d", use: "Pajamas form input, focus blue #1f75cb ring" }
    nav-card: { type: card, bg: "#ffffff", fg: "#171321", radius: "16px", padding: "24px", use: "Homepage product nav / feature card on dark band" }
    dark-stat-card: { type: card, bg: "#1f1c2e", fg: "#ffffff", radius: "16px", padding: "32px", use: "Dark proof-stat card (4 hours saved, 82% decrease)" }
    badge-info: { type: badge, bg: "#cbe2f9", fg: "#2f5ca0", radius: "160px", padding: "2px 6px", font: "12px / 400 GitLab Sans", use: "Info pill (Pajamas badge)" }
    badge-success: { type: badge, bg: "#c3e6cd", fg: "#306440", radius: "160px", padding: "2px 6px", font: "12px / 400 GitLab Sans", use: "Success pill" }
    badge-danger: { type: badge, bg: "#fdd4cd", fg: "#a32c12", radius: "160px", padding: "2px 6px", font: "12px / 400 GitLab Sans", use: "Danger pill" }
    badge-tier: { type: badge, bg: "#e1d8f9", fg: "#5c47a6", radius: "160px", padding: "2px 6px", font: "12px / 400 GitLab Sans", use: "Tier / plan pill (purple)" }
  components_harvested: true
---

# Design System Inspiration of GitLab

## 1. Visual Theme & Atmosphere

GitLab's design splits cleanly across two surfaces that share one identity. The marketing site (`about.gitlab.com`) is an ink-forward, editorial DevSecOps canvas — pure white (`#ffffff`) under a near-black plum ink (`#171321`) set in the custom **GitLab Sans** typeface, with enormous semibold headlines ("Ship faster. With trust." runs at 96px / weight 660 / -2.88px tracking). The product/Pajamas surface (`design.gitlab.com`) is the open, "radically transparent" design system whose canonical action color is a confident Pajamas blue (`#1f75cb`). The famous Tanuki orange (`#fc6d26`) is the brand mark and accent — it appears in the logo, icon flourishes, and emphasis labels — but it is deliberately *not* the primary button color; that role belongs to the blue.

What gives GitLab its specific flavor is the controlled multi-accent system layered over a quiet neutral base. The ink/plum (`#171321`) and a slightly lifted dark surface (`#1f1c2e`) anchor marketing chrome and proof-stat cards; the action blue (`#1f75cb`) carries confirm and interactive state in product UI; a GitLab Duo **purple** (`#7759c2`) marks AI-assisted surfaces; and the orange Tanuki sits on top as the recognizable brand spark. Geometry is restrained — marketing CTAs use a sharp 4px corner, the Pajamas component library standardizes on an 8px radius for buttons/inputs and a 16px radius for cards, and badges run as full pills (160px radius). There is essentially no decorative shadow on marketing; depth is built from flat ink panels and a single soft inset border on form fields.

The overall impression is "engineering tool that learned typography." It is dense and functional where it counts (the Pajamas component tokens are tight, 14px, 8px-rounded, 32px-tall), but the marketing layer breathes with oversized GitLab Sans headlines and generous dark/light banding. The whole thing reads as transparent and rigorous — fitting for a company whose entire handbook and design system are public.

**Key Characteristics:**
- Custom **GitLab Sans** across both marketing and product — semibold (660) display, 400 body/UI
- Two-tier color logic: **ink `#171321`** for marketing chrome, **action blue `#1f75cb`** for product/Pajamas confirm
- **Tanuki orange `#fc6d26`** as brand accent/logo color — never the primary button fill
- **GitLab Duo purple `#7759c2`** reserved for AI-assisted surfaces
- Dark ink panels (`#1f1c2e`, `#060a0f`) for proof-stat cards and immersive bands — no shadow needed
- Restrained radius: 4px marketing CTA / 8px Pajamas button + input / 16px card / 160px pill badge
- Near-shadowless; form depth via a single 1px inset hairline (`#89888d`)
- Cool neutral text ladder: `#171321` → `#3a383f` → `#74717a` → `#626168`

## 2. Color Palette & Roles

### Primary & Brand
- **Action Blue** (`#1f75cb`): Primary interactive color. Pajamas confirm-button background, links, focus rings, selected state. The product system's "do this" color.
- **Action Blue Border** (`#2f68b4`): 1px border on the confirm button and active blue elements.
- **Tanuki Orange** (`#fc6d26`): The GitLab brand/logo color. Used for the Tanuki mark, icon flourishes, and emphasis labels on the homepage hero. Accent only — never a primary button fill.
- **Duo Purple** (`#7759c2`): GitLab Duo (AI) accent. Marks AI-assisted surfaces and Duo branding on the marketing site.

### Ink & Dark Surfaces
- **Ink Plum** (`#171321`): Primary marketing text/heading color and the ink CTA background. A near-black warm plum, used instead of pure black.
- **Ink Strong** (`#18171d`): Strong/headline text token in the Pajamas docs surface.
- **Dark Surface** (`#1f1c2e`): Lifted dark panel for proof-stat cards ("4 hours saved", "82% decrease").
- **Dark Deep** (`#060a0f`): The deepest near-black panel for immersive sections.

### Text Hierarchy
- **Text Default** (`#28272d`): Default body/UI text in the Pajamas system.
- **Text Primary** (`#3a383f`): Primary docs body and default-button label color.
- **Muted** (`#74717a`): Secondary/marketing muted text and inactive nav labels.
- **Muted Alt** (`#626168`): Pajamas muted/secondary text token.
- **Faint** (`#4c4b51`): Low-emphasis labels, neutral badge text.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, cards, button-on-dark text.
- **Surface** (`#f4f4f4`): Light grey section background.
- **Surface Tint** (`#f2f1f5`): Cool-grey chip/secondary surface (language switcher, soft buttons).
- **Purple Tint** (`#f6f3fe`): Soft lavender surface for Duo/AI-themed cards.
- **Hairline** (`#bfbfc3`): Default-button border and standard dividers.
- **Hairline Soft** (`#dcdcde`): Disabled-button border, faint dividers.

### Semantic (Pajamas)
- **Danger** (`#dd2b0e`): Destructive button background; **Danger Border** (`#c02f12`); **Danger Text** (`#a32c12`) for tertiary danger and danger-badge text; **Danger Tint** (`#fdd4cd`) badge background.
- **Success Tint** (`#c3e6cd`) with **Success Text** (`#306440`): Success badge.
- **Warning Tint** (`#f5d9a8`) with **Warning Text** (`#894b16`): Warning badge.
- **Info Tint** (`#cbe2f9`) with **Info Text** (`#2f5ca0`): Info badge.
- **Tier Tint** (`#e1d8f9`) with **Tier Text** (`#5c47a6`): Tier/plan pill — the purple semantic.

## 3. Typography Rules

### Font Family
- **Primary**: `GitLab Sans` (with system fallbacks: `-apple-system, system-ui, Segoe UI, Roboto, Noto Sans`). Used for everything — marketing display, product UI, docs.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | GitLab Sans | 96px (6.00rem) | 660 | 1.04 (100px) | -2.88px | Homepage hero, very tight tracking |
| Section Heading | GitLab Sans | 32px (2.00rem) | 660 | 1.12 | -0.64px | Marketing section titles |
| Sub-section / Card | GitLab Sans | 18px (1.13rem) | 660 | 1.33 | normal | Nav-card heads, marketing CTA labels |
| Body | GitLab Sans | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Marketing body text |
| UI / Docs | GitLab Sans | 14px (0.88rem) | 400-425 | 1.43 | normal | Pajamas component + docs UI text |
| Badge / Caption | GitLab Sans | 12px (0.75rem) | 400 | 1.33 | normal | Pill badge labels, fine print |

### Principles
- **One typeface, two registers**: GitLab Sans does both the 96px marketing display and the 14px product UI. The weight (660 semibold vs 400 regular) carries the hierarchy, not a font swap.
- **Semibold 660 as the display weight**: Headlines run at a specific 660 weight — heavier than regular, lighter than full bold — giving GitLab Sans a confident-but-not-shouty display voice.
- **Aggressive negative tracking at display sizes**: -2.88px at 96px, easing to -0.64px at 32px, normal at body. Large headlines compress into tight, engineered blocks.
- **14px is the product baseline**: The Pajamas component library standardizes UI text at 14px / weight 400 (with 425 for some nav items) — dense, scannable, tool-grade.

## 4. Component Stylings

### Buttons

**Confirm (Primary)**
- Background: `#1f75cb`
- Text: `#ffffff`
- Border: 1px solid `#2f68b4`
- Radius: 8px
- Padding: 0px 12px
- Height: 32px
- Font: 14px / 400 / GitLab Sans
- Use: Primary confirm action in the Pajamas product system ("Create", "Save")

**Danger**
- Background: `#dd2b0e`
- Text: `#ffffff`
- Border: 1px solid `#c02f12`
- Radius: 8px
- Padding: 0px 12px
- Height: 32px
- Font: 14px / 400 / GitLab Sans
- Use: Destructive action (delete, remove)

**Default (Secondary)**
- Background: `#ffffff`
- Text: `#3a383f`
- Border: 1px solid `#bfbfc3`
- Radius: 8px
- Padding: 0px 12px
- Height: 32px
- Font: 14px / 400 / GitLab Sans
- Selected: background `#ececef`, inset 1px `#a4a3a8`
- Disabled: background `#fbfafd`, text `#74717a`, border `#dcdcde`
- Use: Secondary/default action

**Tertiary Confirm**
- Background: transparent
- Text: `#1f75cb`
- Border: 1px solid transparent
- Radius: 8px
- Padding: 0px 12px
- Height: 32px
- Use: Low-emphasis blue action

**Marketing Ink CTA**
- Background: `#171321`
- Text: `#ffffff`
- Radius: 4px
- Padding: 11px 16px
- Height: 47px
- Font: 18px / 660 / GitLab Sans
- Use: Homepage primary CTA — "Get free trial", "Try for free", "Why GitLab?"

**Marketing White CTA**
- Background: `#ffffff`
- Text: `#171321`
- Radius: 4px
- Padding: 11px 16px
- Height: 45px
- Font: 18px / 660 / GitLab Sans
- Use: Homepage secondary CTA — "Request a demo"

### Inputs & Forms

**Text Input (Pajamas)**
- Background: `#ffffff`
- Text: `#3a383f`
- Radius: 8px
- Padding: 8px 12px
- Height: 32px
- Font: 14px / GitLab Sans
- Shadow: `0 0 0 1px inset #89888d` (border rendered as inset shadow)
- Focus: blue `#1f75cb` ring
- Use: Pajamas form field

### Cards & Containers

**Nav / Feature Card**
- Background: `#ffffff`
- Text: `#171321`
- Radius: 16px
- Padding: 24px
- Use: Homepage product-nav cards and feature cards

**Dark Proof-Stat Card**
- Background: `#1f1c2e`
- Text: `#ffffff`
- Radius: 16px
- Padding: 32px
- Use: Dark stat cards on the homepage ("4 hours saved per engineer per week", "82% decrease in cycle time")

### Badges

**Info**
- Background: `#cbe2f9`
- Text: `#2f5ca0`
- Radius: 160px (pill)
- Padding: 2px 6px
- Height: 20px
- Font: 12px / 400 / GitLab Sans
- Use: Informational status pill

**Success**
- Background: `#c3e6cd`
- Text: `#306440`
- Radius: 160px
- Padding: 2px 6px
- Font: 12px / 400 / GitLab Sans
- Use: Success / passed status

**Warning**
- Background: `#f5d9a8`
- Text: `#894b16`
- Radius: 160px
- Padding: 2px 6px
- Font: 12px / 400 / GitLab Sans
- Use: Warning status

**Danger**
- Background: `#fdd4cd`
- Text: `#a32c12`
- Radius: 160px
- Padding: 2px 6px
- Font: 12px / 400 / GitLab Sans
- Use: Failed / error status

**Neutral**
- Background: `#dcdcde`
- Text: `#4c4b51`
- Radius: 160px
- Padding: 2px 6px
- Font: 12px / 400 / GitLab Sans
- Use: Neutral / default status

**Tier (Plan)**
- Background: `#e1d8f9`
- Text: `#5c47a6`
- Radius: 160px
- Padding: 2px 6px
- Font: 12px / 400 / GitLab Sans
- Use: Plan/tier pill (Premium/Ultimate) — the purple semantic

### Navigation
- Background: `#ffffff`
- Inactive label: `#74717a`
- Active/link label: `#171321`
- Font: 16px / 400 / GitLab Sans (marketing top nav)
- Radius: 4px on nav hit-area, 8px on Pajamas docs nav items
- Use: Top horizontal marketing nav ("Platform", "Product", "Why GitLab")

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://about.gitlab.com (marketing chrome, live DOM), https://design.gitlab.com/ (Pajamas open design system, live DOM), https://design.gitlab.com/components/button/ (canonical button tokens), https://design.gitlab.com/components/badge/ (badge tokens), https://design.gitlab.com/components/text-input/ (input tokens)
**Tier 2 sources:** getdesign.md/gitlab — not listed ("0 DESIGN.md files"); styles.refero.design/?q=gitlab — not listed (no GitLab results)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px / 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: Pajamas component padding is tight (0px 12px on buttons, 8px 12px on inputs) for tool density, while marketing cards open up to 24px–32px padding

### Grid & Container
- Marketing hero: centered single column anchored by the 96px GitLab Sans headline
- Product-nav cards arranged in a multi-card grid inside dropdown panels (14px radius)
- Proof-stat carousel: dark `#1f1c2e` cards at 16px radius in a horizontal row
- Feature bands alternate white (`#ffffff`) and dark ink (`#171321` / `#1f1c2e`) full-width sections
- Pajamas docs: persistent left nav rail + content column, all on white

### Whitespace Philosophy
- **Generous marketing, dense product**: the about.gitlab.com layer breathes with large headlines and big card padding; the Pajamas component layer is compact and information-dense (32px-tall controls).
- **Flat banding for rhythm**: sections separate by background color (white → ink → dark) rather than by shadow or heavy borders.
- **Pill cadence in status**: badges use a consistent 160px-radius pill, creating a uniform horizontal rhythm in status displays.

### Border Radius Scale
- Sharp (4px): marketing CTA buttons, nav hit-areas
- Standard (8px): Pajamas buttons and inputs — the product workhorse
- Card (14–16px): nav cards, feature cards, proof-stat cards
- Pill (160px / full): badges, status chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Marketing page background, most surfaces |
| Tint / Ink (Level 1) | `#f4f4f4` light or `#171321`/`#1f1c2e` dark panel | Section + card separation without elevation |
| Inset border (Level 2) | `0 0 0 1px inset #89888d` | Pajamas form-input boundary |
| Selected (Level 2) | `0 0 0 1px inset #a4a3a8` | Selected default button |
| Elevated (Level 3) | `rgba(5,5,6,0.08) 0px 2px 8px` | Pajamas dropdowns / popovers |

**Shadow Philosophy**: GitLab is a near-flat system. The marketing site runs `box-shadow: none` across hero, nav, CTAs, and cards — depth is communicated entirely through ink/dark color panels (`#171321`, `#1f1c2e`, `#060a0f`) and light surface tints (`#f4f4f4`). The Pajamas product system reaches for shadow only where structure demands it: a single 1px inset hairline (`#89888d`) defines form-field boundaries, an inset `#a4a3a8` marks the selected button, and a soft `rgba(5,5,6,0.08)` lift floats dropdowns. Emphasis comes from color (action blue, Tanuki orange, Duo purple) and dark panels, not from stacked elevation.

## 7. Do's and Don'ts

### Do
- Use GitLab Sans for everything — let weight (660 vs 400) carry the hierarchy
- Use action blue (`#1f75cb`) for primary confirm buttons and interactive state in product UI
- Keep Tanuki orange (`#fc6d26`) as a brand accent — logo, icon flourish, emphasis label only
- Reserve Duo purple (`#7759c2`) for AI-assisted (GitLab Duo) surfaces
- Use ink plum (`#171321`) for marketing text and ink CTAs instead of pure black
- Standardize Pajamas controls at 8px radius, 32px height, 14px text
- Use full-pill (160px) badges with the matched tint+text semantic pairs
- Build depth from ink/dark panels and a single inset hairline, not stacked shadows

### Don't
- Use the Tanuki orange as a primary button fill — the primary action color is blue `#1f75cb`
- Mix marketing 4px CTA radius with Pajamas 8px control radius on the same surface
- Use pure black for body text — use ink `#171321` or text `#3a383f`
- Spread Duo purple onto non-AI surfaces — it signals "AI" specifically
- Use a light weight for display headlines — GitLab Sans display is semibold 660
- Add drop shadows to marketing cards — the marketing layer is shadow-free
- Pair a badge tint with a mismatched text color — each semantic has a fixed tint+text pair
- Set positive letter-spacing at display sizes — GitLab tracks tight (-2.88px at 96px)

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses from 96px, cards stack |
| Tablet | 640-1024px | 2-column feature grids, dropdown nav collapses to hamburger |
| Desktop | 1024-1280px | Full layout, multi-card nav panels, horizontal stat carousel |
| Large Desktop | >1280px | Centered content with generous margins |

### Touch Targets
- Pajamas controls at 32px height with comfortable horizontal padding
- Marketing CTAs at 45–47px height for prominent tap targets
- Badge pills at 20px height with 6px horizontal padding minimum
- Nav items spaced for touch within the marketing header

### Collapsing Strategy
- Hero: 96px GitLab Sans headline scales down on mobile, weight 660 maintained
- Product-nav dropdown panels: multi-card grid → stacked list on mobile
- Proof-stat carousel: horizontal scroll → stacked dark cards
- Feature bands: alternating white/ink full-width treatment preserved, internal padding reduced

### Image Behavior
- Product screenshots sit inside 16px-radius cards with no shadow
- Tanuki/brand iconography keeps the orange `#fc6d26` at all sizes
- Dark stat cards maintain `#1f1c2e` background and 16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action (product): Action Blue (`#1f75cb`)
- Brand accent / logo: Tanuki Orange (`#fc6d26`)
- AI surfaces: Duo Purple (`#7759c2`)
- Marketing text / ink CTA: Ink Plum (`#171321`)
- Dark stat panel: `#1f1c2e`
- Body text: Text Primary (`#3a383f`)
- Muted text: Muted (`#74717a`)
- Background: Pure White (`#ffffff`)
- Light surface: `#f4f4f4`
- Danger: `#dd2b0e`
- Badge semantics (tint / text): info `#cbe2f9`/`#2f5ca0`, success `#c3e6cd`/`#306440`, warning `#f5d9a8`/`#894b16`, danger `#fdd4cd`/`#a32c12`, tier `#e1d8f9`/`#5c47a6`

### Example Component Prompts
- "Create a Pajamas confirm button: #1f75cb background, white text, 1px solid #2f68b4 border, 8px radius, 0 12px padding, 32px tall, 14px GitLab Sans. Add a default button beside it: white background, #3a383f text, 1px solid #bfbfc3 border, same geometry."
- "Build a marketing hero on white: headline 'Ship faster.' at 96px GitLab Sans weight 660, line-height 1.04, letter-spacing -2.88px, color #171321. Ink CTA 'Get free trial' (#171321 bg, white text, 4px radius, 11px 16px padding, 18px/660) and white CTA 'Request a demo' (#ffffff bg, #171321 text, 4px radius)."
- "Design a dark proof-stat card: #1f1c2e background, white text, 16px radius, 32px padding. Large stat in GitLab Sans 660, caption in 16px/400."
- "Create a Pajamas status badge row: pill (160px radius), 2px 6px padding, 12px GitLab Sans. info #cbe2f9/#2f5ca0, success #c3e6cd/#306440, danger #fdd4cd/#a32c12, tier #e1d8f9/#5c47a6."
- "Style a text input: white background, #3a383f text, 8px radius, 8px 12px padding, 32px tall, 0 0 0 1px inset #89888d border, focus ring #1f75cb."

### Iteration Guide
1. GitLab Sans for all text; weight 660 for display, 400 for body/UI
2. Action blue (`#1f75cb`) is the product primary — orange `#fc6d26` is accent/logo only
3. Pajamas controls: 8px radius, 32px height, 14px text, 0 12px padding
4. Marketing CTAs: 4px radius, ink `#171321` fill, 18px/660 label
5. Cards at 16px radius; badges as 160px pills with matched tint+text pairs
6. Near-flat — ink/dark panels for depth, single inset hairline `#89888d` for inputs
7. Duo purple (`#7759c2`) only on AI/GitLab Duo surfaces; tight negative tracking on headlines

---

## 10. Voice & Tone

GitLab's voice is **transparent, direct, and quietly confident** — the register of an engineering organization that publishes its entire handbook and design system in the open. Copy is plain and outcome-oriented ("Ship faster. With trust."), favoring concrete capability over hype. Button labels are austere imperatives ("Get free trial", "Request a demo", "Why GitLab?"), and proof points are stated as numbers ("4 hours saved per engineer per week", "82% decrease in cycle time") rather than adjectives.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, short, outcome-framed. "Ship faster. With trust." Never superlative. |
| Product/feature descriptions | Capability + concrete outcome. "AI for the entire software lifecycle." |
| CTAs | Austere imperatives. "Get free trial", "Request a demo", "Try for free". |
| Proof / metrics | Numbers stated plainly with a unit, no embellishment. |
| Docs / Pajamas | Precise, peer-to-peer, example-led; respects the reader as a practitioner. |
| Handbook / about | Radically transparent, plain, self-documenting. |

**Voice samples (verbatim from live surfaces):**
- "Ship faster. With trust." — homepage hero H1. *(verified live 2026-06-17)*
- "Finally, AI for the entire software lifecycle." — homepage `<title>`. *(verified live 2026-06-17)*
- "4 hours saved per engineer per week" — proof-stat card. *(verified live 2026-06-17)*

**Forbidden register**: hype superlatives ("revolutionary", "game-changer"), vague benefit-speak without a number, exclamation-heavy marketing, and anything that contradicts the "radically transparent" posture (gated or evasive copy).

## 11. Brand Narrative

GitLab began in **2011** when **Dmitriy Zaporozhets**, a Ukrainian developer, started building an open-source Git repository manager because the collaboration tools available to him were inadequate; **Sytse "Sid" Sijbrandij** founded the company around the project in **2014** and became CEO. The product grew from a self-hosted Git tool into a single-application **DevSecOps platform** spanning the entire software lifecycle — plan, build, secure, and deploy — and the company went public on the Nasdaq in **2021**.

GitLab's defining cultural trait is **radical transparency**: the company's handbook, processes, and the **Pajamas** design system are all public by default, and the company has operated as an all-remote organization at scale. That openness is not a marketing veneer — it is the operating model, and it shapes the design system directly: Pajamas is a genuinely open, documented component library (tokens, usage, Vue implementation) that anyone can read and build against.

What GitLab refuses, visible in its design: the closed, screenshot-only "trust us" posture of legacy enterprise software, and hype-driven marketing that substitutes adjectives for outcomes. What it embraces: a single open platform, a published design system, plain outcome-framed copy backed by numbers, and a restrained multi-accent palette (action blue, Tanuki orange, Duo purple) that stays disciplined about which color means what.

## 12. Principles

1. **Transparency by default.** GitLab publishes its handbook and design system in the open. *UI implication:* document tokens and usage so any builder can reproduce the system; never rely on hidden/undocumented values.
2. **One color, one job.** Blue acts, orange brands, purple means AI. *UI implication:* reserve `#1f75cb` for the primary action, `#fc6d26` for brand/logo, `#7759c2` for Duo/AI — never blur the roles.
3. **Outcomes over adjectives.** Claims are numbers ("82% decrease in cycle time"), not superlatives. *UI implication:* lead with a measured stat and a unit; let proof-stat cards carry the persuasion.
4. **Dense where it works, generous where it persuades.** *UI implication:* Pajamas controls stay tight (32px, 14px); marketing headlines and cards open up (96px, 32px padding).
5. **Flat and structural.** Depth comes from ink panels and a single hairline, not stacked shadows. *UI implication:* separate with color and 1px borders; reserve soft shadow for true overlays only.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable GitLab user segments (platform engineers, DevSecOps leads, security engineers, open-source contributors), not individual people.*

**Priya Nair, 34, Bangalore.** Platform engineer standing up CI/CD for a 200-engineer org. Chose GitLab because the entire pipeline — SCM, CI, security scanning, deploy — lives in one application instead of a stitched-together toolchain. Reads the public handbook before filing a question.

**Marcus Feldt, 41, Berlin.** DevSecOps lead at a regulated fintech. Cares that security scanning (SAST/DAST) is built into the pipeline, not bolted on. Trusts GitLab partly because the design system and processes are open — he can audit how things work rather than take a vendor's word.

**Ana Sousa, 28, Lisbon.** Open-source contributor and frontend engineer who builds internal tools against Pajamas. Values that the component tokens and Vue implementation are documented and public, so her tooling matches GitLab's own UI exactly.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no projects / no results)** | White canvas, ink (`#171321`) headline at body size explaining the empty condition, one action-blue (`#1f75cb`) confirm CTA to create. No decorative illustration clutter. |
| **Empty (filtered list, zero rows)** | Muted (`#74717a`) single line stating nothing matches, with the active filter visible above to adjust scope. |
| **Loading (page first paint)** | Skeleton blocks at final dimensions in soft hairline (`#dcdcde`); flat pulse, consistent with the near-shadowless system. |
| **Loading (button in-progress)** | Default button enters loading: background `#fbfafd`, text `#74717a`, border `#dcdcde`, inline spinner — label stays readable. |
| **Error (action failed)** | Inline danger banner with `#a32c12` text on `#fdd4cd` tint, a plain-language explanation, and a retry. No bare "Something went wrong". |
| **Error (form validation)** | Field-level message below the input in danger tone; describes what is valid, not just "Required". Input border shifts to danger `#dd2b0e`. |
| **Success (saved / passed)** | Success badge: `#306440` text on `#c3e6cd` tint, 160px pill. Inline confirmation, no celebratory emoji. |
| **Skeleton** | `#dcdcde` blocks at final dimensions, flat pulse, matched radii (8px controls / 16px cards). |
| **Disabled** | Default button: `#fbfafd` background, `#74717a` text, `#dcdcde` border. Blue actions fade rather than turn grey to preserve the action read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Hover, focus, button press |
| `motion-standard` | 200ms | Dropdown, popover, card/section reveal |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, popovers, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and restrained — fitting a developer platform that signals reliability, not delight. Dropdown nav panels and popovers fade/translate in at `motion-standard / ease-enter`; buttons respond to press with a quick state change at `motion-fast`. No bounce, spring, or overshoot — infrastructure tooling stays steady. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle:
- https://about.gitlab.com — hero H1 "Ship faster. With trust." GitLab Sans 96px / weight 660 /
  line-height 100px / -2.88px / color rgb(23,19,33) #171321; ink CTA "Get free trial" bg
  rgb(23,19,33) / white / 4px radius / 18px 660; dark stat cards rgb(31,28,46) #1f1c2e 16px
  radius 32px padding; Tanuki orange rgb(252,109,38) #fc6d26 (icons/emphasis); Duo purple
  rgb(119,89,194) #7759c2 (58 uses); document.title "Finally, AI for the entire software lifecycle."
- https://design.gitlab.com (Pajamas) + /components/button/ + /components/badge/ + /components/text-input/ —
  confirm button bg rgb(31,117,203) #1f75cb / border rgb(47,104,180) #2f68b4 / 8px / 32px / 14px;
  danger rgb(221,43,14) #dd2b0e / border rgb(192,47,18) #c02f12; default white / rgb(58,56,63) #3a383f /
  border rgb(191,191,195) #bfbfc3; input inset 1px rgb(137,136,141) #89888d / 8px; badges (160px pill)
  info rgb(203,226,249)#cbe2f9/rgb(47,92,160)#2f5ca0, success rgb(195,230,205)#c3e6cd/rgb(48,100,64)#306440,
  warning rgb(245,217,168)#f5d9a8/rgb(137,75,22)#894b16, danger rgb(253,212,205)#fdd4cd/rgb(163,44,18)#a32c12,
  tier rgb(225,216,249)#e1d8f9/rgb(92,71,166)#5c47a6, neutral rgb(220,220,222)#dcdcde/rgb(76,75,81)#4c4b51.

Token-level claims (§1-9) are sourced from this live inspection and the open Pajamas design system.

Voice samples (§10) are verbatim from live surfaces (hero H1, page title, proof-stat card).

Brand narrative (§11): GitLab started 2011 (Dmitriy Zaporozhets, open-source Git tool), company
founded 2014 by Sytse "Sid" Sijbrandij (CEO), IPO on Nasdaq 2021, all-remote / radically transparent
handbook + Pajamas open design system. These are widely documented public facts; not quoted from a
single verified GitLab statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable GitLab user segments
(platform engineers, DevSecOps leads, security engineers, OSS contributors). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "one color, one job", "flat and structural") are editorial readings
connecting GitLab's observed design to its stated transparency posture, not directly sourced statements.
-->
