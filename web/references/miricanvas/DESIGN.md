---
id: miricanvas
name: MiriCanvas
display_name_kr: 미리캔버스
country: KR
category: design-tools
homepage: "https://www.miricanvas.com"
primary_color: "#21afbf"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=miricanvas.com&sz=128"
verified: "2026-07-13"
added: "2026-06-10"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-product, url: "https://www.miricanvas.com/ko", inspected: "2026-07-13" }
    - { id: templates, kind: public-product, url: "https://www.miricanvas.com/ko/templates", inspected: "2026-07-13" }
    - { id: pricing, kind: public-product, url: "https://www.miricanvas.com/ko/pricing", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.miricanvas.com/ko", captured: "2026-07-13" }
    - { id: templates-live, kind: product-surface, url: "https://www.miricanvas.com/ko/templates", captured: "2026-07-13" }
    - { id: pricing-live, kind: product-surface, url: "https://www.miricanvas.com/ko/pricing", captured: "2026-07-13" }
    - { id: company-context, kind: official-doc, url: "https://www.miridih.com/ko/home", captured: "2026-07-13" }
    - { id: editor-doc, kind: official-doc, url: "https://help.miricanvas.com/hc/ko/articles/4413862566937", captured: "2026-07-13" }
    - { id: license-doc, kind: official-doc, url: "https://help.miricanvas.com/hc/ko/articles/56483608870681", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.primary-deep": *home
    "tokens.colors.ink": *home
    "tokens.colors.ink-soft": *home
    "tokens.colors.muted": *home
    "tokens.colors.canvas": *home
    "tokens.colors.on-primary": *home
    "tokens.typography.family.sans": *home
    "tokens.typography.display-hero.size": *home
    "tokens.typography.display-hero.weight": *home
    "tokens.typography.display-hero.lineHeight": *home
    "tokens.typography.display-hero.use": *home
    "tokens.typography.page-title.size": &pricing { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.page-title.weight": *pricing
    "tokens.typography.page-title.lineHeight": *pricing
    "tokens.typography.page-title.use": *pricing
    "tokens.typography.subsection.size": *home
    "tokens.typography.subsection.weight": *home
    "tokens.typography.subsection.lineHeight": *home
    "tokens.typography.subsection.use": *home
    "tokens.typography.section.size": *home
    "tokens.typography.section.weight": *home
    "tokens.typography.section.lineHeight": *home
    "tokens.typography.section.use": *home
    "tokens.typography.ui.size": *home
    "tokens.typography.ui.weight": *home
    "tokens.typography.ui.lineHeight": *home
    "tokens.typography.ui.use": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.xl": *home
    "tokens.spacing.xxl": *home
    "tokens.spacing.hero": *home
    "tokens.rounded.sm": *home
    "tokens.rounded.md": *home
    "tokens.rounded.lg": *home
    "tokens.rounded.xl": *home
    "tokens.shadow.menu-open": *home
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Public MiriCanvas surfaces only. Tokens are limited to computed observations corroborated by the supplied FontFaceSet evidence; no authenticated editor or help-center chrome is promoted."
  colors:
    primary: "#21afbf"
    primary-deep: "#1c95a2"
    ink: "#16181d"
    ink-soft: "#23242a"
    muted: "#70798f"
    canvas: "#ffffff"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard Variable" }
    display-hero: { size: 64, weight: 700, lineHeight: 1.50, use: "Public homepage h1" }
    page-title: { size: 40, weight: 700, lineHeight: 1.20, use: "Public pricing h1" }
    subsection: { size: 28, weight: 600, lineHeight: 1.29, use: "Public-surface heading" }
    section: { size: 24, weight: 600, lineHeight: 1.33, use: "Public-surface heading" }
    ui: { size: 14, weight: 500, lineHeight: 1.43, use: "Observed navigation and standard buttons" }
  spacing: { xs: 4, sm: 6, md: 8, lg: 12, xl: 16, xxl: 20, hero: 24 }
  rounded: { sm: 8, md: 10, lg: 12, xl: 16 }
  shadow:
    menu-open: "rgba(11, 60, 65, 0.2) 0px 6px 20px 0px"
  components: {}
  components_harvested: false
---

# Design System Inspiration of MiriCanvas

## 1. Visual Theme & Atmosphere

MiriCanvas (미리캔버스) is MIRIDIH's browser-based design service: its public template and pricing surfaces position design creation as something users can begin from ready-made material instead of specialist software. The visible system is deliberately spare: a white canvas (`#ffffff`), dark ink (`#16181d`), and an aqua-teal action color (`#21afbf`) recur across the home, template, and pricing routes. This gives the public experience a clear action hierarchy without turning every surface into brand decoration. MIRIDIH frames its broader purpose as reducing inconvenient moments in design and enabling easier communication through design; its corporate site also describes a move from domestic success toward global markets. Those company statements provide context for the inclusive product positioning, but they are not UI-token evidence.

The collector confirms a loaded, site-hosted `Pretendard Variable` face throughout styled public UI. A 64px/700 homepage heading with 96px line-height sits above smaller 28px, 24px, and 14px steps; the contrast is soft geometry rather than an assertion about a private editor system. The evidence packet covers public surfaces only. It does not establish authenticated-editor styling, marketing-only feature-page styling, help-center chrome, or a complete responsive system.

**Key characteristics:**

- Aqua teal (`#21afbf`) on an observed 40px public CTA
- White (`#ffffff`), Ink (`#16181d`), and Ink Soft (`#23242a`) as recurring public-surface neutrals
- `Pretendard Variable` is loaded and used by visible styled UI; fallback family names are not promoted
- 8px, 10px, 12px, and 16px are observed radii, with 8px the strongest public-button cluster
- An expanded navigation menu is the only captured interaction state; it is white, 16px-rounded, and softly elevated

## 2. Color Palette & Roles

### Action and canvas

- **Primary teal** (`#21afbf`): observed background of a high-confidence public CTA on home, templates, and pricing.
- **Teal text** (`#1c95a2`): observed on a public text-action button; keep it distinct from the filled primary action.
- **Canvas / on-primary** (`#ffffff`): observed page and menu surface, and white CTA text.

### Text

- **Ink** (`#16181d`): observed primary text on the three public routes.
- **Ink Soft** (`#23242a`): observed on high-confidence public navigation buttons.
- **Muted** (`#70798f`): repeated lower-emphasis public text observation.

No semantic error, success, disabled, hover, focus, or editor color token is asserted from this packet.

## 3. Typography Rules

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

## 4. Component Stylings

Only the following public-surface variants have sufficient selector and computed-style provenance. No hover, pressed, focused, disabled, error, dialog, tab, toast, or authenticated-editor variant is inferred.

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
- Text: `#000000`
- Radius: 16px
- Padding: 16px
- Shadow: `rgba(11, 60, 65, 0.2) 0px 6px 20px 0px`
- Height: 321px
- Use: Observed only in `expanded` / `menu-open` state on all three surfaces; representative selector `home::[data-omd-interaction-capture="menu-0-0"]`.

Medium- and low-confidence captures (including a 56px white button, a 48px white button, and a 46px input) remain raw observations in `.verification.md`; they are not promoted as canonical component variants because their visible purpose and/or confidence is insufficient.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.miricanvas.com/ko (public product marketing surface, supplied computed-style/FontFaceSet evidence), https://www.miricanvas.com/ko/templates (public template surface, supplied computed-style evidence), https://www.miricanvas.com/ko/pricing (public pricing surface, supplied computed-style evidence), https://www.miridih.com/ko/home (operator context and values), https://help.miricanvas.com/hc/ko/articles/4413862566937 (documentation domain: editor controls, not UI tokens), https://help.miricanvas.com/hc/ko/articles/56483608870681 (documentation domain: content license boundary, not UI tokens)
**Tier 2 sources:** https://getdesign.md/miricanvas (attempted; fetch unavailable), https://styles.refero.design/?q=miricanvas (query attempted; fetch unavailable)
**Conflicts unresolved:** none

Tier 2 token/component data could not be retrieved, so no Tier 2 comparison is asserted.

## 5. Layout Principles

The public packet establishes component-level spacing, not a full grid. Observed spacing values are 4px, 6px, 8px, 12px, 14px, 16px, 20px, 24px, and 56px; the strongest component pairs are 8px 16px, 12px, and 14px 24px. The page-level grid, card-rail behavior, and authenticated-editor layout are unresolved.

Observed public geometry is a small radius ladder: 8px is common on navigation and the filled CTA; 10px, 12px, and 16px occur less often. Do not turn the capture frequency into a claim about an exhaustive design scale.

## 6. Depth & Elevation

The high-confidence filled CTA and navigation records have `box-shadow: none`. One expanded navigation menu state has `rgba(11, 60, 65, 0.2) 0px 6px 20px 0px`. No card, modal, editor, hover-lift, or general elevation policy is established from the new packet.

## 7. Do's and Don'ts

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

## 8. Responsive Behavior

No viewport comparison or responsive-state capture was supplied. Breakpoints, navigation collapse behavior, touch-target policy, and mobile editor behavior are absent from this reference rather than inferred from desktop public routes.

## 9. Agent Prompt Guide

For a public MiriCanvas-inspired CTA, use a white canvas, `#21afbf` filled action, `#ffffff` text, 8px radius, 8px 16px padding, 40px height, and `Pretendard Variable` 14px/500. For public navigation, use transparent background, `#23242a` text, 8px radius, and the same 40px / 14px 500 baseline. Use the white 16px-rounded menu with the recorded shadow only after a menu is explicitly expanded.

## 10. Voice & Tone

The public product copy is direct, inclusive, and task-oriented. The template route promises that complex design can be completed with a template in three minutes; the business route frames the service as an all-in-one answer for creation, management, and made-to-order printing. This is source context for voice, not evidence of an editor microcopy system.

| Context | Observed or official expression |
|---------|--------------------------------|
| Homepage | “세상의 모든 디자인은 미리캔버스로 완성” (supplied public-surface capture) |
| Templates | “복잡한 디자인, 템플릿으로 3분이면 끝!” (official template page) |
| Business | “기업의 디자인 고민, 미리캔버스로 한 번에 해결합니다” (official business page) |
| Corporate | MIRIDIH describes making communication through design easier (official corporate page) |

Avoid inventing editor error messages, onboarding wording, or persona-specific voice rules: these were not available in public evidence.

## 11. Brand Narrative

MiriCanvas is operated by MIRIDIH. The operator's official corporate page says it aims to change inconvenient moments in design and enable people to communicate more easily through design; it lists integrity, customer focus, data-driven work, and high standards as operating values. The same page describes current growth beyond the domestic market, providing a bounded account of the brand's present direction.

The public MiriCanvas ecosystem shows two verified contexts rather than one undifferentiated surface. Template and pricing routes serve public discovery and plan comparison, while the business and Help Center materials describe organization-level governance, approval, and content use. The company’s terms state that rights in service-provided content remain with the original author/content provider or company as applicable and that use follows the license agreement. That is a license boundary, not a claim that every template, font, or customer output has the same rights.

## 12. Principles

1. **Ease communication through design.** MIRIDIH's stated mission supports clear, approachable public entry points. *UI implication:* retain the public routes' plain action hierarchy, without asserting unobserved editor flows.
2. **Customer focus and high standards.** These are MIRIDIH's stated values. *UI implication:* treat a visual token as canonical only when its source domain and computed evidence agree.
3. **Governable team creation.** Official help documentation allows owners and managers to constrain colors, fonts, templates, and elements for members. *UI implication:* brand-governance controls are product capabilities, not a license to promote documentation chrome into the public token system.
4. **Licensed content has boundaries.** The service terms describe content rights and license-based use. *UI implication:* do not characterize templates or font assets as universally “copyright safe” without a specific applicable license.

## 13. Personas

*These are evidence-backed stakeholder groups, not fictional individuals or demographic personas.*

**Workspace owners and managers.** The editor-control documentation identifies these roles as configuring permitted editor functions and brand-managed colors, fonts, templates, and elements.

**Workspace members.** The same documentation identifies members as the people to whom those configured controls apply.

**Review collaborators.** The design-approval guide describes people requesting approval and exchanging feedback in a workspace.

**Organization and franchise operators.** The official business material addresses organizations that need consistent design, production, and distribution across headquarters and locations.

## 14. States

No public runtime empty, loading, error, success, validation, disabled, skeleton, or reduced-motion state was captured. This reference deliberately does not prescribe them.

## 15. Motion & Easing

No duration, easing curve, transition, or reduced-motion rule was captured in the supplied evidence. No motion token is asserted.
