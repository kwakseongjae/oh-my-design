---
id: mistral.ai
name: Mistral AI
country: FR
category: ai
homepage: "https://mistral.ai"
primary_color: "#000000"
logo:
  type: simpleicons
  slug: mistralai
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Mistral Brand
  url: "https://mistral.ai/brand/"
  type: brand
  description: Official logo, model illustration, and brand-asset guidance.
  og_image: "https://mistral.ai/-/brand/opengraph-image-1robrb.png"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://mistral.ai/", inspected: "2026-07-13" }
    - { id: pricing, kind: product-pricing, url: "https://mistral.ai/pricing/", inspected: "2026-07-13" }
    - { id: pricing-duplicate, kind: product-pricing, url: "https://mistral.ai/pricing/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://mistral.ai/", captured: "2026-07-13" }
    - { id: pricing-live, kind: product-surface, url: "https://mistral.ai/pricing/", captured: "2026-07-13" }
    - { id: inter-asset, kind: brand-asset, url: "https://mistral.ai/fonts/inter/Inter-VariableFont.ttf", captured: "2026-07-13" }
    - { id: alt-mistral-asset, kind: brand-asset, url: "https://mistral.ai/fonts/alt-mistral/ALTMistral-Regular.woff2", captured: "2026-07-13" }
    - { id: space-mono-asset, kind: brand-asset, url: "https://mistral.ai/fonts/space-mono/SpaceMono-Regular.ttf", captured: "2026-07-13" }
    - { id: brand-guidance, kind: official-doc, url: "https://mistral.ai/brand/", captured: "2026-07-13" }
    - { id: about, kind: official-doc, url: "https://mistral.ai/about/", captured: "2026-07-13" }
    - { id: careers, kind: official-doc, url: "https://mistral.ai/careers/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.foreground": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.border": *home
    "tokens.colors.surface-brand-secondary": *home
    "tokens.colors.surface-brand-primary": *home
    "tokens.typography.family.ui": &inter { surface_id: home, source_id: inter-asset, method: computed-style-plus-fontfaceset-source, captured: "2026-07-13" }
    "tokens.typography.family.display": &alt { surface_id: home, source_id: alt-mistral-asset, method: computed-style-plus-fontfaceset-source, captured: "2026-07-13" }
    "tokens.typography.family.mono": &mono { surface_id: home, source_id: space-mono-asset, method: computed-style-plus-fontfaceset-source, captured: "2026-07-13" }
    "tokens.typography.body.size": *inter
    "tokens.typography.body.weight": *inter
    "tokens.typography.body.lineHeight": *inter
    "tokens.typography.body.use": *inter
    "tokens.typography.control.size": *alt
    "tokens.typography.control.weight": *alt
    "tokens.typography.control.lineHeight": *alt
    "tokens.typography.control.tracking": *alt
    "tokens.typography.control.use": *alt
    "tokens.typography.display.size": *alt
    "tokens.typography.display.weight": *alt
    "tokens.typography.display.lineHeight": *alt
    "tokens.typography.display.tracking": *alt
    "tokens.typography.display.use": *alt
    "tokens.typography.eyebrow.size": *mono
    "tokens.typography.eyebrow.weight": *mono
    "tokens.typography.eyebrow.lineHeight": *mono
    "tokens.typography.eyebrow.use": *mono
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.xl": *home
    "tokens.rounded.sharp": *home
    "tokens.rounded.sm": *home
    "tokens.rounded.md": *home
    "tokens.rounded.lg": *home
    "tokens.components.pricing-plan.type": &pricing { surface_id: pricing, source_id: pricing-live, method: computed-style, captured: "2026-07-13" }
    "tokens.components.pricing-plan.bg": *pricing
    "tokens.components.pricing-plan.fg": *pricing
    "tokens.components.pricing-plan.border": *pricing
    "tokens.components.pricing-plan.radius": *pricing
    "tokens.components.pricing-plan.font": *inter
    "tokens.components.pricing-plan.use": *pricing
    "tokens.components.disabled-compact-control.type": *pricing
    "tokens.components.disabled-compact-control.bg": *pricing
    "tokens.components.disabled-compact-control.fg": *pricing
    "tokens.components.disabled-compact-control.radius": *pricing
    "tokens.components.disabled-compact-control.padding": *pricing
    "tokens.components.disabled-compact-control.font": *inter
    "tokens.components.disabled-compact-control.states": *pricing
    "tokens.components.disabled-compact-control.use": *pricing
tokens:
  source: reconciled
  extracted: "2026-07-13"
  colors:
    foreground: "#000000"
    border: "#e4e3de"
    surface-brand-secondary: "#f5f4ef"
    surface-brand-primary: "#fbfbf8"
  typography:
    family: { ui: "Inter", display: "ALTMistral", mono: "Space Mono" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Public-site body, list, card, and product-pricing copy" }
    control: { size: 16, weight: 500, lineHeight: 1.5, tracking: 0.16, use: "Header controls and compact links" }
    display: { size: 56, weight: 500, lineHeight: 1.07, tracking: -0.56, use: "Observed large public-marketing headings" }
    eyebrow: { size: 11, weight: 400, lineHeight: 1.45, use: "Small uppercase label on the public marketing surface" }
  spacing: { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }
  rounded: { sharp: 0, sm: 4, md: 6, lg: 8 }
  components_harvested: true
  components:
    pricing-plan: { type: card, bg: "#fbfbf8", fg: "#000000", border: "1px solid #e4e3de", radius: "0px", font: "16px / 400 / Inter", use: "Pricing-plan shell" }
    disabled-compact-control: { type: button, bg: "rgba(7, 7, 11, 0.1)", fg: "oklch(0.552 0.016 285.938)", radius: "6px", padding: "4px", font: "16px / 400 / Inter", states: "disabled DOM state observed", use: "Disabled compact pricing control" }
---

# Mistral AI — Design Reference

## 1. Visual Theme & Atmosphere

Mistral AI builds frontier models, developer tools, applications, and compute for people and organizations that need control over how they use AI. Its official about page frames the company as a European, open and responsible alternative born in 2023, while its public site currently expresses that position with restrained, almost editorial web chrome: black text, pale near-white or warm-gray surfaces, fine `#e4e3de` rules, and a mix of proprietary-feeling display lettering with Inter for practical reading. The captured home and pricing pages are not a product-app audit: they are separate public marketing and commercial-pricing surfaces. Official brand guidance supplies a distinct asset layer—the pixel-cat emblem, a preferred gradient logo, monochrome variants, and colorful model illustrations—but its artwork is not promoted into the live UI palette without a computed source.

- **Structured neutrality:** current captured chrome is led by black, soft off-whites, and fine neutral dividers.
- **Type as contrast:** `ALTMistral` supplies high-visibility headings and controls; Inter carries repeated reading and transactional copy.
- **Asset/UI boundary:** the official gradient logo and model artwork establish identity, but their colors are not claimed as current generic UI tokens.

## 2. Color Palette & Roles

### Current public-web observations

- **Foreground** (`#000000`): repeated text and border color on the captured home and pricing records.
- **Divider** (`#e4e3de`): repeated one-pixel navigation, list-row, pricing-plan, and segmented-control border.
- **Brand-secondary surface** (`#f5f4ef`): observed on pricing plan and segmented-shell treatments.
- **Brand-primary surface** (`#fbfbf8`): observed on a pricing-plan shell and an expanded header-control treatment.

The official brand page documents gradient, black, and white logo variants plus colorful model illustrations, but it does not publish the numeric artwork colors in the inspected text. Those brand assets remain an identity source, not an inferred semantic or interaction palette. No success, warning, error, dark-mode, focus, or hover color token is established by this capture.

## 3. Typography Rules

### Evidence classes

- **Live computed public-web use:** `Inter` is loaded with high confidence, has 632 visible uses, and has a matching Mistral-hosted variable-font source. It is observed in body, list, card, input, tab, and button roles.
- **Live computed public-web use:** `ALTMistral` is loaded with high confidence, has 560 visible uses and matching Mistral-hosted Regular, Medium, Semibold, and italic WOFF/WOFF2 sources. It appears in public-marketing display, badges, body, and header-control roles.
- **Live computed public-web use:** `Space Mono` is loaded with high confidence, has 38 visible uses, and has a matching Mistral-hosted source. The capture confines it to small body/card-label contexts.
- **Declared-only:** `Source Sans 3` has seven `@font-face` source URLs through the consent-provider domain but zero visible captured uses. It is not a typography token.
- **Documentation chrome:** `https://docs.mistral.ai/` was consulted only as an official documentation domain. No supplied computed-style or FontFaceSet record supports promoting its chrome or a docs family into this reference.
- **Licence boundary:** Mistral’s brand guidance says its name, trademarks, logos, icons, and identifying assets are its property; it does not publish a downstream reuse licence for the captured font files. Keep font metadata, but do not substitute another font and do not treat these URLs as reusable project assets.

### Measured public-web hierarchy

| Role | Family | Size | Weight | Line height | Tracking | Provenance |
|---|---|---:|---:|---:|---:|---|
| Large marketing heading | ALTMistral | 56px | 500 | 60px | -0.56px | captured home body elements |
| Marketing heading | ALTMistral | 44px | 500 | 52px | -0.44px | captured home body elements |
| Control label | ALTMistral | 16px | 500 | 24px | 0.16px | `home::[data-omd-capture="55"]` |
| Compact link/label | ALTMistral | 14px | 500 | 20px | 0.28px | `home::[data-omd-capture="126"]` |
| Body, list, and card copy | Inter | 16px | 400 | 24px | normal | captured home and pricing elements |
| Small label | Space Mono | 11px | 400 | 16px | normal | `home::p.text-eyebrow-small` |

## 4. Components

All components below preserve their public-surface and selector provenance. The collector records `interactionCount: 0` and an empty `interactions[]`; class names mentioning hover do not establish a hover value. The one disabled row is a captured disabled DOM state, not a complete state or behavior specification.

### Header controls

**Public header control**
- Background: transparent
- Text: `#000000`
- Border: `1px solid #e4e3de` on the right edge
- Radius: `0px`
- Padding: `0px 16px`
- Font: `16px / 500 / ALTMistral`
- Use: `home::[data-omd-capture="55"]`; 48px-high public header control on home and pricing

### List rows

**Expandable/list row**
- Background: transparent
- Text: `#000000`
- Border: `1px solid #e4e3de` on the bottom edge
- Radius: `0px`
- Padding: `16px`
- Font: `16px / 400 / Inter`
- Use: `home::[data-omd-capture="1"]`; full-width row observed across the captured public surfaces

### Pricing plans

**Primary-surface plan shell**
- Background: `#fbfbf8`
- Text: `oklch(0.21 0.006 285.885)`
- Border: `1px solid #e4e3de`
- Radius: `0px`
- Font: `16px / 400 / Inter`
- Use: `pricing::mistral-block-card-plan`; public pricing-plan shell

**Secondary-surface plan shell**
- Background: `#f5f4ef`
- Text: `oklch(0.21 0.006 285.885)`
- Border: `1px solid #e4e3de`
- Radius: `0px`
- Font: `16px / 400 / Inter`
- Use: `pricing::mistral-block-card-plan`; alternate captured public pricing-plan shell

### Segmented navigation shell

**Pricing navigation container**
- Background: `#f5f4ef`
- Text: `#000000`
- Border: `1px solid #e4e3de`
- Radius: `6px`
- Padding: `6px`
- Font: `16px / 400 / Inter`
- Use: `pricing::mistral-atom-navigation-tabs`; a container observation, not a child-tab active/inactive claim

### Quantity input

**Pricing number input**
- Background: transparent
- Text: `oklch(0.21 0.006 285.885)`
- Border: `1px solid oklch(0.21 0.006 285.885)` on the bottom edge
- Radius: `0px`
- Font: `16px / 400 / Inter`
- Use: `pricing::[data-omd-capture="74"]`; number input in the public pricing surface

### Compact control

**Disabled compact control**
- Background: `rgba(7, 7, 11, 0.1)`
- Text: `oklch(0.552 0.016 285.938)`
- Radius: `6px`
- Padding: `4px`
- Font: `16px / 400 / Inter`
- Use: `pricing::[data-omd-capture="75"]`; disabled DOM control on the public pricing surface
- Disabled: present in the captured DOM; no interaction transition was recorded

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://mistral.ai/ · https://mistral.ai/pricing/ · https://mistral.ai/brand/ · https://mistral.ai/fonts/inter/Inter-VariableFont.ttf · https://mistral.ai/fonts/alt-mistral/ALTMistral-Regular.woff2 · https://mistral.ai/fonts/space-mono/SpaceMono-Regular.ttf
**Tier 2 sources:** https://getdesign.md/mistral.ai/design-md (independent analysis; its purple, DM Serif, JetBrains Mono, 8px-button, and 12px-card claims are not promoted) · https://styles.refero.design/?q=Mistral (attempted; built-in open returned an internal error and no Refero record was used)
**Conflicts unresolved:** none

Legacy claims were rolled back where absent from current Tier 1 evidence.

## 5. Layout Principles

The supplied evidence recurs at 2px, 4px, 8px, 16px, and 24px. The highest-frequency values are 16px for rows and card/control spacing, 8px for gaps, and 4px for compact labels. This is an observed public-web rhythm, not a released spacing scale or responsive specification. The capture does not establish a sitewide max width, grid, or authenticated-product layout.

## 6. Depth & Elevation

The representative pricing plans, rows, tabs, and inputs in this bundle report `box-shadow: none`. No global shadow scale, modal elevation, overlay treatment, or animation layer is claimed.

## 7. Do's and Don'ts

### Do

- Use the captured public-web neutrals and one-pixel `#e4e3de` dividers only in the documented public-web scope.
- Pair ALTMistral, Inter, and Space Mono only when the target has a legitimate right to load those exact families.
- Preserve selector and surface boundaries when borrowing a row, pricing-plan, tab-shell, or quantity-input treatment.
- Treat the official gradient logo and colorful model art as brand assets rather than unmeasured UI color tokens.

### Don't

- Do not restore the earlier orange/golden palette, Arial, all-0px rule, or warm-shadow system without fresh Tier 1 evidence.
- Do not treat Source Sans 3, documentation chrome, or a system fallback as a Mistral UI family.
- Do not invent active tabs, hover colors, focus rings, menus, dialogs, errors, breakpoints, or additional price-plan variants.
- Do not use the captured font URLs as a downstream redistribution licence.

## 8. Responsive Behavior

Only the supplied desktop public-surface evidence is in scope. It exposes a horizontally scrollable pricing navigation shell and responsive utility classes in markup, but it does not establish breakpoints, mobile navigation behavior, touch-target policy, reflow rules, or an authenticated-product responsive contract.

## 9. Agent Prompt Guide

For a Mistral-like public commercial page, begin with a quiet `#fbfbf8` or `#f5f4ef` surface, black content, thin `#e4e3de` dividers, Inter for repeated reading, and ALTMistral only where it can be legally loaded. Use square list and pricing-plan shells plus the observed 6px segmented container; do not recreate Mistral’s product, documentation, or brand artwork from this limited public-web reference.

## 10. Voice & Tone

Official language is direct, technically ambitious, and oriented toward access and control: Mistral says it exists to put frontier AI in everyone’s hands, while its careers page asks for structured, direct communication that values content over tone. This supports product-led, specific public language; it is not evidence for a comprehensive error-copy or conversational-assistant style guide.

| Context | First-party direction |
|---|---|
| Mission | Frame AI as open, controllable, and capable of solving hard problems. |
| Enterprise and public-sector work | Describe the concrete stakes: control, ownership, reliability, and tailored systems. |
| Internal culture | Prefer rigor, directness, ownership, speed, and low-ego collaboration. |

**Voice samples**
- “Putting frontier AI in everyone's hands.” <!-- official about page, 2026-07-13 -->
- “Mission-critical AI for enterprises and governments.” <!-- official about page, 2026-07-13 -->
- “Build the future of frontier AI.” <!-- official careers page, 2026-07-13 -->

## 11. Brand Narrative

Mistral’s official account traces the company to April 2023, when its co-founders set out to build a European AI company around openness, transparency, cost efficiency, responsibility, and user control. Its present offer extends beyond models to developer tools, applications, and compute, with enterprise and government work positioned around ownership and production reliability. The public brand system is correspondingly more than a logo: the official guidance describes a pixel-cat emblem, controlled gradient and monochrome logo variants, and colorful small-scale model illustrations. Those assets explain the brand’s visual identity, while the token layer above remains limited to the current captured public pages.

## 12. Principles

1. **Put control with the user.** *UI implication:* explain ownership, deployment, and capability boundaries concretely rather than hiding them in generic AI claims.
2. **Be rigorous and direct.** *UI implication:* favor structured labels, specific actions, and readable information hierarchy over ornamental copy.
3. **Make complex systems usable.** *UI implication:* keep commercial choices and quantities legible with clear rows, dividers, and restrained controls.
4. **Keep brand art distinct from interface evidence.** *UI implication:* use supplied gradient logos or illustrations only under official guidance; do not synthesize an orange semantic UI system from artwork.

## 13. Personas

The official material identifies stakeholder groups rather than named user personas; the following are evidence-based groups, not fictional profiles.

- **Enterprise and government teams:** organizations in high-stakes industries that need tailored systems, control, ownership, and production reliability.
- **Developers and product builders:** people using Mistral models, developer tools, applications, and compute to build or customize AI systems.
- **Research, product, and engineering collaborators:** internal teams and candidates working under the stated expectations of audacity, rigor, customer centricity, speed, and low-ego ownership.

## 14. States

The supplied capture records one disabled compact control at `pricing::[data-omd-capture="75"]`, with `rgba(7, 7, 11, 0.1)` background, `oklch(0.552 0.016 285.938)` text, 6px radius, and 4px padding. It does not supply empty, loading, success, error, validation, toast, dialog, or skeleton states. Those state groups are intentionally omitted rather than inferred.

## 15. Motion & Easing

No computed transition duration, easing token, motion rule, or reduced-motion behavior is promoted from this evidence. Class names that include transition utilities are not a measured motion specification.
