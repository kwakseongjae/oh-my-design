---
name: MiriCanvas
colors:
  primary: '#21afbf'
  primary-deep: '#1c95a2'
  ink: '#16181d'
  ink-soft: '#23242a'
  muted: '#70798f'
  canvas: '#ffffff'
  on-primary: '#ffffff'
typography:
  display-hero:
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.5
    use: Public homepage h1
  page-title:
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
    use: Public pricing h1
  subsection:
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.29
    use: Public-surface heading
  section:
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.33
    use: Public-surface heading
  ui:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    use: Observed navigation and standard buttons
rounded:
  sm: 8px
  md: 10px
  lg: 12px
  xl: 16px
spacing:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  xl: 16
  xxl: 20
  hero: 24
components:
  primary-button:
    type: button
    backgroundColor: '#21afbf'
    textColor: '#ffffff'
    rounded: 8px
    padding: 8px 16px
    height: 40px
    typography: 14px / 500 / 20px Pretendard Variable
    states: default captured on all three routes; the bundle holds no state frame for any element
    use: Header filled action (button.gidKcw) at home::[data-omd-capture="21"], 80 x 40; repeated near the foot of home (capture 58) and as the highlighted pricing-plan button (surface-3::[data-omd-capture="25"], 249 x 40)
    focus: no visible change (measured 2026-10-16) on :focus-visible
  nav-item:
    type: button
    backgroundColor: transparent
    textColor: '#23242a'
    rounded: 8px
    padding: 8px 16px
    height: 40px
    typography: 14px / 500 / 20px Pretendard Variable
    states: default captured, five per route; no state frame
    use: Global navigation item (button.cuArBU) at home::[data-omd-capture="12"], 68 x 40; the fill computes rgba(35, 36, 42, 0)
  nav-switcher-item:
    type: button
    backgroundColor: transparent
    textColor: '#23242a'
    rounded: 8px
    padding: 12px
    height: 44px
    typography: 14px / 500 / 20px Pretendard Variable
    states: default captured, four per route; no state frame and no selected attribute
    use: 'Top service-switcher item (button.cuArBU) at home::[data-omd-capture="1"], 85 x 44; the first switcher link (capture 0) computes a #ffffff fill and the other three are transparent'
  menu-trigger:
    type: button
    backgroundColor: transparent
    textColor: '#23242a'
    rounded: 8px
    padding: 8px 12px 8px 16px
    height: 40px
    typography: 14px / 500 / 20px Pretendard Variable
    states: default captured with aria-haspopup=menu; the open state is the menu-panel component; no pointer-state frame
    use: Global navigation menu trigger at home::[data-omd-capture="9"], 86 x 40 (capture 10 is 102 x 40)
  menu-panel:
    type: card
    backgroundColor: '#ffffff'
    rounded: 16px
    padding: 16px
    size: 1172px x 321px
    shadow: rgba(11, 60, 65, 0.2) 0px 6px 20px 0px
    states: 'captured open only: the three interaction records are menu expansions (expanded, menu-open), one per route'
    use: Navigation menu panel (div role=menu) at home::[data-omd-interaction-capture="menu-0-0"]; the second home menu and the templates and pricing menus are 696 x 321; its links (156 x 40) and feature tiles (288 x 260) carry their labels in children that were not sampled, so no text colour is declared
  hero-primary-cta:
    type: button
    backgroundColor: '#21afbf'
    textColor: '#ffffff'
    rounded: 12px
    padding: 14px 24px
    height: 56px
    typography: 18px / 500 / 26px Pretendard Variable
    states: default captured; no state frame
    use: Home hero filled action (button.hxEAEt) at home::[data-omd-capture="22"], 200 x 56; the same style closes a later home section (capture 49, 197 x 56)
  hero-secondary-cta:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1c95a2'
    rounded: 12px
    padding: 14px 24px
    height: 56px
    typography: 18px / 500 / 26px Pretendard Variable
    states: default captured; no state frame
    use: Home hero white action (a) beside the filled one at home::[data-omd-capture="23"], 200 x 56
  white-large-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: rgba(0, 0, 0, 0.8)
    rounded: 12px
    padding: 14px 24px
    height: 56px
    typography: 18px / 500 / 26px Pretendard Variable
    states: default captured on four copies; no state frame
    use: 'Home white large button (button.dFMoUp): labelled 146 x 56 at home::[data-omd-capture="59"]; three icon-only 56 x 56 copies at captures 34 to 36'
  pricing-plan-text-button:
    type: button
    backgroundColor: transparent
    textColor: '#1c95a2'
    rounded: 8px
    padding: 8px 16px
    size: 249px x 40px
    typography: 14px / 500 / 20px Pretendard Variable
    states: default captured on three plan buttons; no state frame
    use: Pricing plan button (button.dnPzbg) at surface-3::[data-omd-capture="24"]; captures 26 and 27 match, beside the filled plan button (capture 25); border width 0px
  pricing-billing-toggle:
    type: button
    backgroundColor: transparent
    textColor: '#505462'
    rounded: 0px
    padding: 0px 12px
    height: 40px
    typography: 14px / 400 / 19.88px Pretendard Variable
    states: 'two options at rest: capture 22 computes #505462 and capture 23 #23242a; neither carries an aria state, so no selected value is declared; no state frame'
    use: Pricing billing-period toggle option (button.eufCKf) at surface-3::[data-omd-capture="22"], 48 x 40; its partner (capture 23, kiVaiH) has the same geometry
  pricing-white-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: rgba(0, 0, 0, 0.8)
    rounded: 10px
    padding: 12px 20px
    height: 48px
    typography: 16px / 500 / 24px Pretendard Variable
    states: default captured on two copies; no state frame
    use: Pricing white button (button.cWuGVk) at surface-3::[data-omd-capture="29"], 143 x 48; capture 30 is 113 x 48
  template-search-input:
    type: input
    backgroundColor: transparent
    textColor: '#16181d'
    size: 827px x 46px
    typography: 16px / 400 / 24.48px Pretendard Variable
    states: default captured; no state frame
    use: Templates search field (input) at surface-2::[data-omd-capture="22"]; the input's own border width is 0px, so any visible frame belongs to a wrapper that was not sampled and no border is declared
  carousel-arrow:
    type: button
    backgroundColor: '#ffffff'
    border: 1px rgba(88, 98, 118, 0.1)
    rounded: 50%
    size: 40px x 40px
    shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 0px
    states: default captured on two arrows; no state frame
    use: Templates carousel arrow (button.lkcSVE, icon-only) at surface-2::[data-omd-capture="40"]; capture 61 matches; the glyph colour was not sampled
  footer-social-link:
    type: button
    backgroundColor: rgba(88, 98, 118, 0.05)
    rounded: 50%
    padding: 8px
    size: 40px x 40px
    states: default captured, five per footer; no state frame
    use: Footer social link (a.qpvPW, icon-only) at home::[data-omd-capture="61"]; captures 62 to 65 match, and the pricing footer repeats them (surface-3 captures 32 to 36)
fonts:
  roles:
    sans: Pretendard Variable
---

# Design System Inspiration of MiriCanvas

## Overview

### Visual Theme & Atmosphere

MiriCanvas (미리캔버스) is MIRIDIH's browser-based design service: its public template and pricing surfaces position design creation as something users can begin from ready-made material instead of specialist software. The visible system is deliberately spare: a white canvas (`#ffffff`), dark ink (`#16181d`), and an aqua-teal action color (`#21afbf`) recur across the home, template, and pricing routes. This gives the public experience a clear action hierarchy without turning every surface into brand decoration. MIRIDIH frames its broader purpose as reducing inconvenient moments in design and enabling easier communication through design; its corporate site also describes a move from domestic success toward global markets. Those company statements provide context for the inclusive product positioning, but they are not UI-token evidence.

The collector confirms a loaded, site-hosted `Pretendard Variable` face throughout styled public UI. A 64px/700 homepage heading with 96px line-height sits above smaller 28px, 24px, and 14px steps; the contrast is soft geometry rather than an assertion about a private editor system. The evidence packet covers public surfaces only. It does not establish authenticated-editor styling, marketing-only feature-page styling, help-center chrome, or a complete responsive system.

**Key characteristics:**

- Aqua teal (`#21afbf`) on an observed 40px public CTA
- White (`#ffffff`), Ink (`#16181d`), and Ink Soft (`#23242a`) as recurring public-surface neutrals
- `Pretendard Variable` is loaded and used by visible styled UI; fallback family names are not promoted
- 8px, 10px, 12px, and 16px are observed radii, with 8px the strongest public-button cluster
- An expanded navigation menu is the only captured interaction state; it is white, 16px-rounded, and softly elevated

### Primary tasks

- Start a design from a ready-made template
- Compare plans on the pricing page before subscribing
- Request approval on a design and exchange feedback with reviewers
- Restrict which colors, fonts, and templates teammates can use
- Order printed material made from a finished design

### Brand Narrative

MiriCanvas is operated by MIRIDIH. The operator's official corporate page says it aims to change inconvenient moments in design and enable people to communicate more easily through design; it lists integrity, customer focus, data-driven work, and high standards as operating values. The same page describes current growth beyond the domestic market, providing a bounded account of the brand's present direction.

The public MiriCanvas ecosystem shows two verified contexts rather than one undifferentiated surface. Template and pricing routes serve public discovery and plan comparison, while the business and Help Center materials describe organization-level governance, approval, and content use. The company’s terms state that rights in service-provided content remain with the original author/content provider or company as applicable and that use follows the license agreement. That is a license boundary, not a claim that every template, font, or customer output has the same rights.

### Principles

1. **Ease communication through design.** MIRIDIH's stated mission supports clear, approachable public entry points. *UI implication:* retain the public routes' plain action hierarchy, without asserting unobserved editor flows.
2. **Customer focus and high standards.** These are MIRIDIH's stated values. *UI implication:* treat a visual token as canonical only when its source domain and computed evidence agree.
3. **Governable team creation.** Official help documentation allows owners and managers to constrain colors, fonts, templates, and elements for members. *UI implication:* brand-governance controls are product capabilities, not a license to promote documentation chrome into the public token system.
4. **Licensed content has boundaries.** The service terms describe content rights and license-based use. *UI implication:* do not characterize templates or font assets as universally “copyright safe” without a specific applicable license.

### Personas

*These are evidence-backed stakeholder groups, not fictional individuals or demographic personas.*

**Workspace owners and managers.** The editor-control documentation identifies these roles as configuring permitted editor functions and brand-managed colors, fonts, templates, and elements.

**Workspace members.** The same documentation identifies members as the people to whom those configured controls apply.

**Review collaborators.** The design-approval guide describes people requesting approval and exchanging feedback in a workspace.

**Organization and franchise operators.** The official business material addresses organizations that need consistent design, production, and distribution across headquarters and locations.

## Colors

### Action and canvas

- **Primary teal** (`#21afbf`): observed background of a high-confidence public CTA on home, templates, and pricing.
- **Teal text** (`#1c95a2`): observed on a public text-action button; keep it distinct from the filled primary action.
- **Canvas / on-primary** (`#ffffff`): observed page and menu surface, and white CTA text.

### Text

- **Ink** (`#16181d`): observed primary text on the three public routes.
- **Ink Soft** (`#23242a`): observed on high-confidence public navigation buttons.
- **Muted** (`#70798f`): repeated lower-emphasis public text observation.

No semantic error, success, disabled, hover, focus, or editor color token is asserted from this packet.

## Typography

### Evidence classes

- **Live computed surface-use + loaded source corroboration:** `Pretendard Variable` is the computed family for styled public UI and is backed by a matching loaded `FontFace` record (215 observed uses; 92 MiriCanvas-hosted subset source URLs). It is the only family promoted to `tokens.typography.family`.
- **Declared-only fallbacks:** `Figtree`, `IBM Plex Sans JP`, `Pretendard JP Variable`, and `Pretendard Std Variable` occur later in the computed stack of styled elements, but the supplied `FontFaceSet` evidence does not match them as loaded faces. They remain declared-only and are not UI-family tokens.
- **Unresolved capture artifact:** `Times` appears in some captured unstyled DOM fragments and in the expanded menu record without a matching loaded face or source URL. It is not treated as a MiriCanvas type choice.
- **Official distributed font asset:** Pretendard's upstream project documents the variable family and its SIL Open Font License 1.1. This establishes the upstream font's distribution/license boundary; it does not establish a MiriCanvas-owned font asset.
- **Official product-use announcement:** none located in the first-party sources reviewed for this update.

### Observed hierarchy

| Role | Family | Size | Weight | Line height | Public-surface provenance |
|------|--------|------|--------|-------------|---------------------------|
| Homepage display | Pretendard Variable | 64px | 700 | 96px | `home`, one h1 observation |
| Pricing display | Pretendard Variable | 40px | 700 | 48px | `surface-3`, h1 observation |
| Heading | Pretendard Variable | 28px | 600 | 36px | public heading observations |
| Heading | Pretendard Variable | 24px | 600 | 32px | public heading observations |
| Navigation / standard button | Pretendard Variable | 14px | 500 | 20px | high-confidence button records |

## Layout

The public packet establishes component-level spacing, not a full grid. Observed spacing values are 4px, 6px, 8px, 12px, 14px, 16px, 20px, 24px, and 56px; the strongest component pairs are 8px 16px, 12px, and 14px 24px. The page-level grid, card-rail behavior, and authenticated-editor layout are unresolved.

Observed public geometry is a small radius ladder: 8px is common on navigation and the filled CTA; 10px, 12px, and 16px occur less often. Do not turn the capture frequency into a claim about an exhaustive design scale.

### Responsive Behavior

No viewport comparison or responsive-state capture was supplied. Breakpoints, navigation collapse behavior, touch-target policy, and mobile editor behavior are absent from this reference rather than inferred from desktop public routes.

## Elevation & Depth

The high-confidence filled CTA and navigation records have `box-shadow: none`. One expanded navigation menu state has `rgba(11, 60, 65, 0.2) 0px 6px 20px 0px`. The icon-only templates carousel arrow has `rgba(0, 0, 0, 0.1) 0px 2px 8px 0px` (added 2026-09-29, §4). No card, modal, editor, hover-lift, or general elevation policy is established from the new packet.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.menu-open`: `rgba(11, 60, 65, 0.2) 0px 6px 20px 0px`

## Motion & Easing

No duration, easing curve, transition, or reduced-motion rule was captured in the supplied evidence. No motion token is asserted.

## Components

Only the following public-surface variants have sufficient selector and computed-style provenance. No hover, pressed, focused, disabled, error, dialog, tab, toast, or authenticated-editor variant is inferred: the bundle holds no `::state-*` frame for any element on the three routes, and its only interaction records are the three menu expansions.

### Public buttons

**Filled primary**
- Background: `#21afbf`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Font: 14px / 500 / Pretendard Variable
- Height: 40px
- Use: High-confidence CTA record on `home`, `surface-2`, and `surface-3`; representative selector `home::[data-omd-capture="21"]`.

**Navigation item**
- Background: transparent
- Text: `#23242a`
- Radius: 8px
- Padding: 8px 16px
- Font: 14px / 500 / Pretendard Variable
- Height: 40px
- Use: High-confidence public navigation record on all three surfaces; representative selector `home::[data-omd-capture="12"]`.

**Navigation switcher item**
- Background: transparent
- Text: `#23242a`
- Radius: 8px
- Padding: 12px
- Font: 14px / 500 / Pretendard Variable
- Height: 44px
- Use: High-confidence public navigation record on all three surfaces; representative selector `home::[data-omd-capture="1"]`.
- Note (2026-09-29): the first of the four switcher links (`home::[data-omd-capture="0"]`) computes a `#ffffff` fill while the other three are transparent. No selected attribute is recorded, so no selected style is declared.

**Menu trigger**
- Background: transparent
- Text: `#23242a`
- Radius: 8px
- Padding: 8px 12px 8px 16px
- Font: 14px / 500 / Pretendard Variable
- Height: 40px
- Use: High-confidence trigger with `aria-haspopup="menu"`; representative selector `home::[data-omd-capture="9"]`.

### Expanded navigation

**Menu open**
- Background: `#ffffff`
- Text: `#000000` is the panel container's own computed colour; the menu labels sit in children that were not sampled (noted 2026-09-29)
- Radius: 16px
- Padding: 16px
- Shadow: `rgba(11, 60, 65, 0.2) 0px 6px 20px 0px`
- Height: 321px
- Use: Observed only in `expanded` / `menu-open` state on all three surfaces; representative selector `home::[data-omd-interaction-capture="menu-0-0"]`.

Updated 2026-09-29: the medium- and low-confidence captures July held back (the 56px white button, the 48px white button, the 46px input) are promoted below with their measured rest values, together with other variants transcribed from the same 2026-07-13 bundle; nothing was re-measured. The collector's confidence counts occurrences, so a single element such as the hero action reads low without its values being uncertain; each entry names its selector and count. The three navigation variants above compute a fill of `rgba(35, 36, 42, 0)`, which is transparent.

### Hero actions (home)

**Filled**
- Background: `#21afbf`
- Text: `#ffffff`
- Radius: 12px
- Padding: 14px 24px
- Font: 18px / 500 / 26px Pretendard Variable
- Height: 56px (200 × 56)
- Use: home hero primary action, `home::[data-omd-capture="22"]`; the same style closes a later home section (`home::[data-omd-capture="49"]`, 197 × 56).

**White**
- Background: `#ffffff`
- Text: `#1c95a2`
- Radius, padding, font, and height: as the filled action (200 × 56)
- Use: the link beside the hero primary action, `home::[data-omd-capture="23"]`.

**White large button**
- Background: `#ffffff`
- Text: `rgba(0, 0, 0, 0.8)`
- Radius: 12px
- Padding: 14px 24px
- Font: 18px / 500 / 26px Pretendard Variable
- Height: 56px
- Use: one labelled 146 × 56 copy near the foot of home (`home::[data-omd-capture="59"]`) and three icon-only 56 × 56 copies (`"34"` to `"36"`).

### Pricing controls

**Plan text button**
- Background: transparent
- Text: `#1c95a2`
- Radius: 8px
- Padding: 8px 16px
- Font: 14px / 500 / 20px Pretendard Variable
- Size: 249 × 40
- Use: three plan buttons in one row (`surface-3::[data-omd-capture="24"]`, `"26"`, `"27"`) beside a filled plan button in the filled-primary style (`surface-3::[data-omd-capture="25"]`, 249 × 40). Border width 0px.

**Billing toggle options**
- Background: transparent
- Text: `#505462` (`surface-3::[data-omd-capture="22"]`) and `#23242a` (`"23"`)
- Radius: 0px
- Padding: 0px 12px
- Font: 14px / 400 / 19.88px Pretendard Variable
- Size: 48 × 40 each
- States: two options at rest in different text colours. Neither carries an aria state, so which one is selected is not recorded and no selected value is declared.

**White plan button**
- Background: `#ffffff`
- Text: `rgba(0, 0, 0, 0.8)`
- Radius: 10px
- Padding: 12px 20px
- Font: 16px / 500 / 24px Pretendard Variable
- Height: 48px (143 × 48; `surface-3::[data-omd-capture="30"]` is 113 × 48)
- Use: `surface-3::[data-omd-capture="29"]`.

### Templates controls

**Search field**
- Background: transparent
- Text: `#16181d`
- Font: 16px / 400 / 24.48px Pretendard Variable
- Size: 827 × 46
- Use: `surface-2::[data-omd-capture="22"]`. The input's own border width is 0px; any visible frame belongs to a wrapper that was not sampled, so no border is declared.

**Carousel arrow**
- Background: `#ffffff`
- Border: 1px `rgba(88, 98, 118, 0.1)`
- Radius: 50%
- Size: 40 × 40
- Shadow: `rgba(0, 0, 0, 0.1) 0px 2px 8px 0px`
- Use: icon-only template carousel arrows, `surface-2::[data-omd-capture="40"]` and `"61"`; the glyph colour was not sampled.

### Footer social link

- Background: `rgba(88, 98, 118, 0.05)`
- Radius: 50%
- Padding: 8px
- Size: 40 × 40
- Use: five icon-only links per footer, `home::[data-omd-capture="61"]` to `"65"` (pricing: `surface-3::[data-omd-capture="32"]` to `"36"`).

Every component in this section is a rest capture. The bundle holds no state frame for any MiriCanvas element, and the open menu above is its only interaction capture.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.miricanvas.com/ko (public product marketing surface, supplied computed-style/FontFaceSet evidence), https://www.miricanvas.com/ko/templates (public template surface, supplied computed-style evidence), https://www.miricanvas.com/ko/pricing (public pricing surface, supplied computed-style evidence), https://www.miridih.com/ko/home (operator context and values), https://help.miricanvas.com/hc/ko/articles/4413862566937 (documentation domain: editor controls, not UI tokens), https://help.miricanvas.com/hc/ko/articles/56483608870681 (documentation domain: content license boundary, not UI tokens)
**Tier 2 sources:** https://getdesign.md/miricanvas (attempted; fetch unavailable), https://styles.refero.design/?q=miricanvas (query attempted; fetch unavailable)
**Conflicts unresolved:** none

Tier 2 token/component data could not be retrieved, so no Tier 2 comparison is asserted.

### States

No public runtime empty, loading, error, success, validation, disabled, skeleton, or reduced-motion state was captured. This reference deliberately does not prescribe them. The bundle also holds no hover, pressed, or focus frame for any element, so no pointer state is declared; the open navigation menu (§4) is the only captured interaction state.

Live state probe, 2026-10-16 (`https://www.miricanvas.com/ko`), `primary-button`: focus — no visible change (measured 2026-10-16).

## Do's and Don'ts

### Do

- Use `#21afbf` with white text for the observed public filled-action pattern.
- Use the loaded `Pretendard Variable` family for a reconstruction of these public surfaces.
- Retain the observed 8px / 14px 500 / 40px geometry where the standard public CTA or navigation item is intended.
- Treat the 16px rounded, shadowed menu only as an expanded navigation state.

### Don't

- Substitute an unresolved or declared-only fallback family as if it were loaded MiriCanvas UI typography.
- Add hover, disabled, focus, error, modal, toast, or editor-state specifications from this public packet.
- Generalize the menu's shadow to all cards or buttons.
- Treat Help Center styling or a feature/marketing page as evidence for the authenticated product editor.

## Voice & Tone

The public product copy is direct, inclusive, and task-oriented. The template route promises that complex design can be completed with a template in three minutes; the business route frames the service as an all-in-one answer for creation, management, and made-to-order printing. This is source context for voice, not evidence of an editor microcopy system.

| Context | Observed or official expression |
|---------|--------------------------------|
| Homepage | “세상의 모든 디자인은 미리캔버스로 완성” (supplied public-surface capture) |
| Templates | “복잡한 디자인, 템플릿으로 3분이면 끝!” (official template page) |
| Business | “기업의 디자인 고민, 미리캔버스로 한 번에 해결합니다” (official business page) |
| Corporate | MIRIDIH describes making communication through design easier (official corporate page) |

Avoid inventing editor error messages, onboarding wording, or persona-specific voice rules: these were not available in public evidence.

## Agent Prompt Guide

For a public MiriCanvas-inspired CTA, use a white canvas, `#21afbf` filled action, `#ffffff` text, 8px radius, 8px 16px padding, 40px height, and `Pretendard Variable` 14px/500. For public navigation, use transparent background, `#23242a` text, 8px radius, and the same 40px / 14px 500 baseline. Use the white 16px-rounded menu with the recorded shadow only after a menu is explicitly expanded.

## Governance

### Known Gaps

- **Contrast, `primary-button`.** Text `#ffffff` on `#21afbf` measures 2.64:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `nav-item`.** Text `#23242a` on `#00000000` measures 1.36:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `nav-switcher-item`.** Text `#23242a` on `#00000000` measures 1.36:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `menu-trigger`.** Text `#23242a` on `#00000000` measures 1.36:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `hero-primary-cta`.** Text `#ffffff` on `#21afbf` measures 2.64:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `hero-secondary-cta`.** Text `#1c95a2` on `#ffffff` measures 3.58:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `pricing-billing-toggle`.** Text `#505462` on `#00000000` measures 2.79:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `template-search-input`.** Text `#16181d` on `#00000000` measures 1.18:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
