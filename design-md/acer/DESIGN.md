---
name: 宏碁
colors:
  primary: '#80c343'
  brand-green: '#40810c'
  canvas: '#ffffff'
  foreground: '#222222'
  muted: '#474747'
  subtle: '#f8f8f8'
typography:
  display:
    fontSize: 42.768px
    fontWeight: 600
    use: Observed h2 treatment on the captured public home surface
  body:
    fontSize: 16px
    fontWeight: 400
    use: Observed default body treatment on the captured public home surface
  action:
    fontSize: 18.912px
    fontWeight: 600
    lineHeight: 28.368px
    use: Observed primary and tertiary CTA treatment on the captured public home surface
rounded:
  control: 24px
  pill: 800px
spacing:
  xs: 6
  sm: 8
  md: 16
  lg: 24
  xl: 32
components:
  primary-cta:
    type: button
    backgroundColor: '#80c343'
    textColor: '#222222'
    rounded: 800px
    padding: 6px 24px
    size: 113px x 40px
    typography: 18.912px / 600 / Noto Sans
    states: Default static baseline observed; no interactive state was captured.
    use: Homepage .agw-btn.agw-btn-primary CTA
    height: 40px
    focus: 'outline #0071e3 solid 2px on :focus-visible'
  tertiary-cta:
    type: button
    backgroundColor: transparent
    textColor: '#40810c'
    rounded: 800px
    padding: 6px 0px
    size: 120px x 40px
    typography: 18.912px / 600 / Noto Sans
    states: Default static baseline observed; no interactive state was captured.
    use: Homepage .agw-btn.agw-btn-tertiary CTA
  feature-card:
    type: card
    textColor: '#474747'
    border: 4px 0px 0px
    rounded: 0px
    size: 330px x 430px
    typography: 16px / 400 / Noto Sans
    use: Laptop catalog .card-feature link card
  locale-select:
    type: input
    backgroundColor: '#474747'
    textColor: '#f8f8f8'
    border: 0px
    rounded: 24px
    padding: 8px 40px 8px 16px
    size: 312px x 38px
    typography: 16px / 400 / Noto Sans
    states: Default static baseline observed; no interactive state was captured.
    use: Public laptop and corporate-surface locale select
fonts:
  roles:
    ui: Noto Sans
---

# Design System Inspiration of 宏碁

## Overview

### Visual Theme & Atmosphere

宏碁 (Acer) is a Taiwan-founded technology company whose public portfolio spans computers, displays, and newer businesses, while its corporate mission is to break barriers between people and technology. The captured public web language is practical rather than ornamental: a white canvas, near-black reading text, green action emphasis, sans-serif hierarchy, and deliberately simple geometry. The bright `#80c343` fill and darker `#40810c` text green make calls to action easy to identify against otherwise quiet surfaces; large headings create product-story scale without adding decorative effects. Acer’s current corporate evolution also ties technology to sustainable innovation, including its Conscious Technology direction and Vero product line. That strategic context explains the green emphasis, but it is not evidence that every product UI uses one shared component system.

**Key Characteristics:**
- A measured public-web action pair of `#80c343` fill and `#222222` text.
- A darker `#40810c` for a transparent tertiary CTA on the home surface.
- Loaded, visibly used `Noto Sans` across all three supplied Acer surfaces.
- Flat, zero-radius feature cards and pill-shaped CTA/control geometry kept as distinct surface patterns.

### Primary tasks

- Compare public product information for a computer, then move to a next step
- Browse the laptop catalog card by card to shortlist a model
- Find a service, support, or partner route instead of a purchase
- Understand the company's technology scope, services, and long-term direction

### Brand Narrative

Acer began in 1976 as Multitech, focused on the commercialization of microprocessor technology, and created the Acer name in 1987. Its official milestones describe later shifts from manufacturing into marketing and sales, then into gaming, lifestyle, cloud, and sustainable innovation. That history makes the brand’s broad device and solution portfolio more legible than a laptop-only description would. Source: https://www.acer.com/corporate/en/overview/milestones

Today, Acer frames its mission as “Breaking barriers between people and technology.” Its corporate home says the group operates across computers, displays, and new businesses while pursuing sustainable growth. The current narrative is therefore not just access to hardware, but technology that connects people, work, and wider social or environmental responsibilities. Source: https://www.acer.com/corporate/en/

The 2023 Conscious Technology announcement makes the present-tense direction explicit: technology should be designed and made with consideration for the future. Acer corporate president Victor Chien states, “We focus on achieving measurable change.” This is a verified corporate narrative, not a claim that the measured website tokens themselves encode sustainability. Sources: https://news.acer.com/acer-unveils-conscious-technology-vision-to-help-tackle-climate-change and https://www.acer.com/sustainability/uploads/files/shares/sustainability-report/2024_Acer_Sustainability_Report.pdf

### Principles

The following are application principles derived from Acer’s official mission, core values, and current sustainability narrative; they are not a published Acer UI component specification.

1. **Make technology approachable.** Lead with understandable human outcomes before technical detail.
   *UI implication:* Use plain labels, readable hierarchy, and one clear primary action.
2. **Progress with purpose.** Pair innovation claims with a specific use case, material choice, or accountable target.
   *UI implication:* Keep environmental supporting copy close to the product fact it qualifies.
3. **Stay curious and concrete.** Invite exploration without overpromising.
   *UI implication:* Use catalog cards and secondary actions to reveal information progressively, rather than inventing status badges.
4. **Work across people and partners.** Acer’s mission and Earthion work frame progress as collaborative.
   *UI implication:* Make partner, service, and support pathways easy to distinguish from purchase CTAs.

### Personas

*These are evidence-bounded stakeholder archetypes drawn from Acer’s public company, product, and sustainability material; they are not synthetic research personas or performance scores.*

#### Individual technology user

People choosing computers, displays, or related products need a clear way to compare public product information and move to a next step. The supplied capture supports catalog and CTA patterns, not assumptions about checkout or account behavior.

#### Organizational customer or partner

Corporate and business visitors need to understand Acer’s technology scope, services, and long-term direction. Keep corporate content distinct from consumer-catalog components unless the target surface supplies direct evidence.

#### Sustainability-minded stakeholder

Employees, suppliers, communities, and customers are named in Acer’s sustainability narrative as participants in environmental and social progress. Communicate targets and material claims precisely, with source context rather than generic green language.

## Colors

- **Primary** (`#80c343`): filled CTA background observed on home, laptop, and corporate public surfaces.
- **Brand Green** (`#40810c`): text and border color observed on the home tertiary CTA and navigation-related links.
- **Canvas** (`#ffffff`): white page background observed on all supplied surfaces.
- **Foreground** (`#222222`): dominant text and border cluster across all supplied surfaces.
- **Muted** (`#474747`): feature-card copy color on the laptop catalog surface.
- **Subtle** (`#f8f8f8`): locale-select foreground/border pair on the laptop and corporate surfaces.

These roles describe only the measured public web surfaces. They do not establish product-app semantic success, warning, error, hover, or theme tokens.

## Typography

### Visible public-web family

`Noto Sans` is the canonical visible UI family for this reference: the evidence packet records 391 visible first-family uses backed by loaded FontFace resources, including Acer-hosted Noto files and Google-hosted resources. It is a live surface-use claim, not evidence of a proprietary Acer typeface.

| Role | Size | Weight | Line Height | Evidence boundary |
|---|---:|---:|---|---|
| Display heading | 42.768px | 600 | normal | observed `h2` treatment on the public home surface |
| Body | 16px | 400 | normal | observed default body treatment on the public home surface |
| CTA | 18.912px | 600 | 28.368px | observed primary and tertiary home CTA treatment |

| Evidence class | Acer status |
|---|---|
| **Official product-use** | No first-party statement was found in this pass that names a typeface for Acer’s native products; none is promoted. |
| **Live computed surface-use** | `Noto Sans` is loaded and visibly used on the supplied Korean home, US laptop, and corporate surfaces. |
| **Official distributed brand asset** | `acer-icons` is a loaded Acer-hosted icon font in the packet; it is an icon asset, not a text-family token. |
| **Declared-only** | `Noto Sans JP`, `Noto Sans TC`, and `Material Icons` are declared but have zero visible first-family uses in the packet. |
| **License** | The Noto project’s published license is SIL Open Font License 1.1; this documents Noto’s license boundary, not an Acer brand-font claim. |
| **Unresolved** | Native-product typography, local-market substitutions beyond the captured surfaces, and any Acer-owned text typeface are absent. |

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.display.lineHeight`: `normal`
- `typography.body.lineHeight`: `normal`

## Layout

### Spacing System

The supplied surfaces repeatedly expose 6px, 8px, 16px, 24px, and 32px values. They are retained as a measured working scale, not as proof of a private product design-token system.

### Grid & Container

The home surface uses large editorial sections and broad full-width content. The laptop catalog pairs feature cards with a more bounded catalog rhythm. Preserve that surface distinction instead of applying the home page’s spacious composition to every product card.

### Shape

Two observed shape families coexist: 24px controls and 800px CTA pills, alongside square feature cards. The data does not support an additional general radius scale.

## Elevation & Depth

No canonical shadow token is promoted. The representative CTA, select, and feature-card samples in the supplied packet each report `box-shadow: none`; visual separation is instead carried by color, spacing, typography, and the feature card’s top border.

## Motion & Easing

No duration scale, easing curve, transition, or interactive motion state was captured in the supplied evidence. Accordingly, no Acer motion token is published here. Future work should respect reduced-motion preferences and keep motion subordinate to the task, but must measure any timing or easing value before treating it as Acer-specific.

## Components

### Primary CTA

**Default static baseline**
- Background: `#80c343`
- Text: `#222222`
- Radius: 800px
- Padding: 6px 24px
- Size: 113px x 40px
- Font: 18.912px / 600 / Noto Sans
- States: Default static baseline observed; no interactive state was captured.
- Use: Homepage `.agw-btn.agw-btn-primary` CTA

### Tertiary CTA

**Default static baseline**
- Background: transparent
- Text: `#40810c`
- Radius: 800px
- Padding: 6px 0px
- Size: 120px x 40px
- Font: 18.912px / 600 / Noto Sans
- States: Default static baseline observed; no interactive state was captured.
- Use: Homepage `.agw-btn.agw-btn-tertiary` CTA

### Feature Card

**Default static baseline**
- Text: `#474747`
- Border: 4px 0px 0px
- Radius: 0px
- Size: 330px x 430px
- Font: 16px / 400 / Noto Sans
- Use: Laptop catalog `.card-feature` link card

### Locale Select

**Default static baseline**
- Background: `#474747`
- Text: `#f8f8f8`
- Border: 0px
- Radius: 24px
- Padding: 8px 40px 8px 16px
- Size: 312px x 38px
- Font: 16px / 400 / Noto Sans
- States: Default static baseline observed; no interactive state was captured.
- Use: Public laptop and corporate-surface locale select

---
**Verified:** 2026-07-13 (verification v2, supplied computed-style capture plus source-bound font-license review)
**Tier 1 sources:** https://www.acer.com/kr-ko/ https://www.acer.com/us-en/laptops https://www.acer.com/corporate/en
**Tier 2 sources:** https://getdesign.md/acer direct detail attempt returned no usable record; https://styles.refero.design/?q=Acer direct search attempt returned no usable record.
**Surface split:** Home CTA geometry, laptop feature-card geometry, and locale-select geometry are retained by observed surface rather than merged into a hypothetical universal Acer component.
**Conflicts unresolved:** none

### States

The supplied interaction count is zero. The following are implementation guidance categories for a future Acer-adjacent surface, not observed Acer state styling; do not add their values to tokens without new evidence.

| Category | Guidance |
|---|---|
| Empty | Explain why no catalog or search results are shown and offer a safe next route. |
| Loading | Preserve card or control geometry with a non-deceptive loading placeholder. |
| Loading | Keep primary-action labels stable while work is in progress. |
| Error | Explain a network or service failure in plain language and provide a retry path. |
| Error | Separate invalid selection feedback from product availability messaging. |
| Error | Never represent a static green CTA as evidence of a successful completed action. |
| Success | Confirm the completed outcome with specific next steps. |
| Skeleton | Match the observed feature-card information hierarchy without claiming an observed skeleton style. |
| Skeleton | Reserve space for the locale control instead of changing layout abruptly. |
| Disabled | Do not infer disabled color, opacity, or cursor values from this packet. |

Live state probe, 2026-10-16 (`https://www.acer.com/kr-ko/`), `primary-cta`: focus — outline #0071e3 solid 2px.

## Do's and Don'ts

### Do

- Use the measured green action colors against the quiet white and near-black public-web palette.
- Keep home CTAs pill-shaped while retaining the observed square feature-card treatment in catalog contexts.
- Use Noto Sans only where the target surface can load it; disclose unavailable fonts rather than substituting a system face as if it were Noto.

### Don't

- Treat `#80c343` as an unverified semantic success, confirmation, or hover token.
- Invent interactive state colors, elevation, error treatments, or native-product geometry from these static web samples.
- Collapse marketing, catalog, and corporate evidence into a single undocumented component library.

## Voice & Tone

Use a **human, progressive, and curious** voice: these are Acer’s stated brand values in its corporate-responsibility material. Make technology feel capable and approachable; keep sustainability claims specific and attributable.

| Do | Don't |
|---|---|
| Lead with the practical human benefit of the technology. | Present hardware capability as an end in itself. |
| Use clear, active language for progress and collaboration. | Make unmeasured environmental superlatives. |
| Name a material, target, or program when making a sustainability claim. | Turn a color or UI token into a sustainability claim. |

- “Technology that helps you make more room for what matters.” *(Illustrative voice sample, not official Acer copy; grounded in the mission’s barrier-breaking intent.)*
- “Designed for today’s work, with consideration for tomorrow.” *(Illustrative voice sample, not official Acer copy; aligned to Conscious Technology.)*
- “Choose the product details that fit the way you create, learn, or play.” *(Illustrative voice sample, not official Acer copy; avoids unsupported performance claims.)*

## Agent Prompt Guide

### AI Design Prompts

- “Create a flat Acer-inspired public laptop landing section: white canvas, `#222222` copy, a single `#80c343` pill CTA, and a 42.768px Noto Sans heading. Do not invent hover or pressed values.”
- “Design a laptop catalog feature card using a square 330px-wide outline treatment with a 4px top border and restrained 16px Noto Sans copy; keep it distinct from a pill CTA.”
- “Make a compact locale selector with `#474747` background, `#f8f8f8` text, 24px radius, and 8px 40px 8px 16px padding; provide accessible native-select behavior without claiming captured focus styles.”

## Governance

### Reference Assets & Evidence Boundaries

- **Catalog logo:** favicon image at `https://www.google.com/s2/favicons?domain=acer.com&sz=128`.
- **Public web capture:** Korean home, US laptop catalog, and Acer corporate surfaces from the supplied 2026-07-13 packet.
- **Typography resources:** `Noto Sans` is visibly loaded; `acer-icons` is a separate icon font; declared-only faces remain excluded from tokens.
- **Not included:** native application screens, downloaded brand guidelines, product interaction recordings, and a public official Acer design-system specification.

### Known Gaps

- **Contrast, `tertiary-cta`.** Text `#40810c` on `#00000000` measures 4.36:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
