---
name: チームラボ
colors:
  ink: '#212121'
  canvas: '#ffffff'
  muted: '#999999'
  catalog-surface: '#f8f9fa'
typography:
  body:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 22.1
    use: Observed public home body and card text metrics
  nav-label:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 20.4
    letterSpacing: 0.6px
    use: Observed public home header-link metrics
rounded:
  crisp: 0px
spacing:
  catalog-gap: 40
  news-inset: 30
components:
  product-catalog-card:
    type: card
    backgroundColor: '#f8f9fa'
    textColor: '#212121'
    rounded: 0px
    height: 400px
    typography: 13px / 400
    use: Public product-catalog link card; surface-2::[data-omd-capture=20]
---

# Design System Inspiration of チームラボ

## Overview

### Visual Theme & Atmosphere

teamLab is an interdisciplinary art collective formed in 2001, bringing artists, programmers, engineers, CG animators, mathematicians, architects, and graphic designers together around work that crosses art, science, technology, and creativity. Its public web expression is correspondingly quiet rather than decorative: a white field, near-black copy, precise light-gray information, squared edges, and imagery that carries the experiential intensity. The supplied public capture shows this restraint across the marketing home, product catalog, and corporate about surfaces. Current work extends the same boundary-crossing idea into physical places: the official teamLab Borderless project reopened at Azabudai Hills in 2024 as a continuous, mapless world. That evolution is brand and spatial context, not evidence for unobserved web tokens.

- **Image-led restraint:** `#ffffff` canvas and `#212121` text leave the art, work, and news imagery to provide visual intensity.
- **Measured information layers:** `#999999` appears in product-catalog metadata, separating secondary information without adding a new accent color.
- **Crisp geometry:** the supplied capture clusters overwhelmingly at `0px` radius; the one observed `2px` footer action is local, not a global rounding rule.

### Primary tasks

- Browse the public product catalog by category
- Open a product page from the catalog listing
- Read how the collective describes itself and its work
- Scan the news cards on the home page

### Brand Narrative

teamLab’s official company account begins with an art collective formed in 2001. Its members span artistic, technical, mathematical, architectural, and editorial practices; the group calls this interdisciplinary practice ultratechnology and frames its work as moving across boundaries between art, science, technology, and creativity.

The current organization makes work across art, solutions, and products, while its careers material explains that diverse specialization and collaboration are central to how those outputs are made. The 2024 reopening of teamLab Borderless at Azabudai Hills presents the same idea in a current public place: artworks move, relate, and intermingle to form one continuous world. No executive quotation was located in the permitted first-party sources, so none is fabricated here.

### Principles

1. **Cross disciplines without collapsing them.** *UI implication:* keep art, product, corporate, and documentation evidence domains explicit rather than blending their values into one invented interface.
2. **Make the experience larger than the chrome.** *UI implication:* public informational surfaces can stay visually quiet so imagery and content carry the experiential register.
3. **Value specialized collaboration.** *UI implication:* organize complex information with clear secondary hierarchy instead of applying decorative emphasis everywhere.
4. **Let exploration remain legible.** *UI implication:* use measured metadata contrast and spacing for scanning, but do not fabricate interaction behavior for exploratory flows.

### Personas

*These are first-party stakeholder groups, not fictional individual personas.*

- **Interdisciplinary makers:** teamLab identifies artists, programmers, engineers, CG animators, mathematicians, architects, and designers as members of its collective.
- **Specialists working across art, solutions, and products:** the careers surface describes three project domains and roles for engineers, creatives, and catalysts.
- **Visitors to borderless art environments:** the current Borderless project explicitly invites people to wander, explore, discover, and create a world with others.

## Colors

### Observed public-surface roles

- **Ink** (`#212121`): repeated text color on all three supplied public surfaces; the reference primary color is therefore a functional ink, not an inferred action color.
- **Canvas** (`#ffffff`): repeated public background and the observed home news-card surface.
- **Muted metadata** (`#999999`): repeated product-catalog category and usage text on the public catalog.
- **Catalog surface** (`#f8f9fa`): observed on the public product-catalog link card at `surface-2::[data-omd-capture="20"]`.

`#ededed` and `#f5f5f5` occur on two distinct static footer cards. They remain selector-level observations rather than a generalized neutral scale. No semantic success, error, or universal primary-action color was measured.

## Typography

### Evidence classes

- **Official product-use:** no first-party announcement in this pass names a web or product UI type family.
- **Live computed public-surface use:** the supplied capture records a system-resolved Helvetica-led stack in 666 visible uses. It supports the measured size, weight, line-height, and tracking values below, but it is not promoted as a teamLab brand-family token.
- **Official distributed brand asset:** none located in the permitted source set.
- **Declared-only:** `ff-din-web` is declared by nine Adobe Typekit source URLs in the supplied packet, with zero visible uses. Adobe’s webfont licence describes licensed web delivery generally; it does not establish teamLab product use or grant reuse of teamLab’s project assets.
- **Unresolved:** the packet does not connect a loaded or visible face to `ff-din-web`, so no specimen or substitute is provided.

### Measured public hierarchy

| Role | Size | Weight | Line height | Tracking | Provenance |
|---|---:|---:|---:|---:|---|
| Public body/card text | 13px | 400 | 22.1px | normal | `home::body` and repeated public cards |
| Public header link | 12px | 400 | 20.4px | 0.6px | `home::[data-omd-capture="0"]` |
| Product category button, default | 13px | 400 | 13px | normal | `surface-2::[data-omd-capture="15"]` |

## Layout

### Observed spacing

The tokenized spacing values are kept to directly selector-backed measurements: the product-catalog card has a `40px` bottom margin, while the home news card uses `30px 30px 30px 60px` padding. Smaller values occur in the bundle but are not normalized into a complete scale.

### Observed shape

- **Crisp public card/category geometry:** `0px` radius.
- **Local footer action exception:** `2px` radius, retained only in its recorded footer context.

### Responsive Behavior

The permitted evidence contains only `1440x900` captures for the home, product catalog, and corporate about surfaces. It establishes no mobile breakpoint, layout transition, responsive asset rule, or responsive component variant.

## Elevation & Depth

No shadow token is established. The supplied component variants record `box-shadow: none` for the retained catalog card, category control, footer action, and the measured card variants.

## Motion & Easing

The supplied packet records no duration, easing, animation, or transition value. teamLab’s spatial work provides narrative context for movement, but it is not evidence for public-web motion tokens.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://www.team-lab.com/ | https://www.team-lab.com/product/?category=all | https://www.team-lab.com/about/ | https://www.team-lab.com/en/about/ | https://www.team-lab.com/en/recruit/tsunen/ | https://architects.team-lab.com/projects/teamLab_borderless/ | https://helpx.adobe.com/fonts/using/webfont-licensing.html
**Tier 2 sources:** https://getdesign.md/teamlab (attempted; internal error) | https://getdesign.md/design-md/teamlab (attempted; internal error) | https://styles.refero.design/?q=teamLab (attempted; internal error)
**Conflicts unresolved:** none

## Components

Only default geometry is retained from the supplied desktop public capture. The packet records zero interactions and zero observed states; hover, focus, pressed, disabled, selected, error, and transition treatments are absent. The static product card below is the sole structured component token because it is selector- and surface-backed without requiring an unobserved interactive state.

### Product catalog card

**Catalog link card**
- Background: `#f8f9fa`
- Text: `#212121`
- Radius: `0px`
- Height: `400px`
- Font: `13px / 400 / observed system-resolved stack, not a brand-family claim`
- Use: public product-catalog link card; `surface-2::[data-omd-capture="20"]`, 20 observed instances

### Public category control

**Category button — default only**
- Background: transparent
- Text: `#999999`
- Border: `0px solid #000000`
- Radius: `0px`
- Padding: `18px 20px`
- Height: `49px`
- Use: public product-catalog category control; `surface-2::[data-omd-capture="15"]`, five observed instances
- States: default geometry only; interaction count is 0, so no selected, hover, focus, pressed, or disabled treatment is asserted

### Static footer action

**Footer action — default only**
- Background: `#ffffff`
- Text: `#212121`
- Radius: `2px`
- Height: `44px`
- Use: static footer link action; `surface-2::[data-omd-capture="42"]`, repeated on the corporate-about surface
- States: default geometry only; interaction count is 0, so no hover, focus, pressed, or disabled treatment is asserted

### States

The supplied packet records zero interactions and no observed state snapshots. No teamLab empty, loading, error, success, skeleton, disabled, hover, focus, pressed, or selected visual treatment is documented in this reference.

## Do's and Don'ts

### Do

- Keep public informational layouts white, near-black, and image-led when working from the captured marketing or catalog surfaces.
- Use the measured `#999999` only for secondary product-catalog information unless a separate surface verifies another role.
- Preserve square public-card geometry and the measured `40px` catalog separation where that catalog pattern is actually being reproduced.
- Treat the measured typography as metrics only; select a family only when the target product surface supplies its own evidence.

### Don't

- Don’t convert the system-resolved Helvetica stack into a teamLab brand font or use it as a fallback masquerading as one.
- Don’t promote declared-only `ff-din-web` to a live UI family, a specimen, or a redistribution permission.
- Don’t turn the local `2px` footer corner into a general control radius.
- Don’t invent color semantics, hover, focus, pressed, disabled, error, loading, success, motion, or responsive behavior from this desktop, zero-interaction capture.

## Voice & Tone

First-party language is interdisciplinary, exploratory, and collective. It describes the group as ultratechnologists who cross art, science, technology, and creativity, and its current spatial work invites people to wander, explore, and discover in a continuous world.

| Context | Supported voice evidence |
|---|---|
| Origin | “Art collective formed in 2001.” — teamLab About |
| Collective work | Collaboration among diverse specialists makes work that cannot be made alone. — teamLab Careers |
| Experience | “Wander, Explore, and Discover” in a continuous borderless world. — teamLab Borderless |

No invented transactional, error, or accessibility copy is asserted.

## Agent Prompt Guide

### Evidence-safe prompts

- “Create a public product-catalog link card using `#f8f9fa`, `#212121`, 0px radius, 400px height, and 13px/400 text, scoped to a catalog presentation.”
- “Build a sparse public information layout on white with near-black primary copy and `#999999` metadata; let artwork or photography supply the visual intensity.”
- “Use the observed 40px catalog gap or 30px news-card inset only in the recorded public patterns; do not expand them into a complete spacing scale.”
- “Keep default category-control geometry at transparent background, `#999999` text, 18px 20px padding, and 49px height, but specify no interaction states.”
