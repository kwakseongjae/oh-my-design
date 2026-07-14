---
id: ibm
name: IBM
country: US
category: consumer-tech
homepage: "https://www.ibm.com"
primary_color: "#0f62fe"
logo:
  type: github
  slug: IBM
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Carbon
  url: "https://carbondesignsystem.com"
  type: system
  description: IBM's official open-source design system; Carbon documentation is distinct from the captured IBM.com product surfaces.
  og_image: "https://carbondesignsystem.com/ogimage.png"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.ibm.com/kr-ko", inspected: "2026-07-13" }
    - { id: cloud-support, kind: public-product, url: "https://www.ibm.com/kr-ko/products/cloud/support?lnk=flathl", inspected: "2026-07-13" }
    - { id: confluent, kind: public-product, url: "https://www.ibm.com/kr-ko/products/confluent?lnk=hpfp4kr", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.ibm.com/kr-ko", captured: "2026-07-13" }
    - { id: cloud-support-live, kind: product-surface, url: "https://www.ibm.com/kr-ko/products/cloud/support?lnk=flathl", captured: "2026-07-13" }
    - { id: confluent-live, kind: product-surface, url: "https://www.ibm.com/kr-ko/products/confluent?lnk=hpfp4kr", captured: "2026-07-13" }
    - { id: carbon-docs, kind: official-doc, url: "https://carbondesignsystem.com/components/button/usage/", captured: "2026-07-13" }
    - { id: plex-typeface, kind: license, url: "https://www.ibm.com/design/language/typography/typeface/", captured: "2026-07-13" }
    - { id: ibm-history, kind: official-doc, url: "https://www.ibm.com/history/ctr-and-ibm", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &product { surface_id: cloud-support, source_id: cloud-support-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.canvas": &marketing { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.foreground": *product
    "tokens.colors.muted": *product
    "tokens.colors.layer": *marketing
    "tokens.colors.border": *product
    "tokens.colors.link": &confluent { surface_id: confluent, source_id: confluent-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.family.sans": *product
    "tokens.typography.display.size": *marketing
    "tokens.typography.display.weight": *marketing
    "tokens.typography.display.lineHeight": *marketing
    "tokens.typography.display.use": *marketing
    "tokens.typography.body.size": *product
    "tokens.typography.body.weight": *product
    "tokens.typography.body.lineHeight": *product
    "tokens.typography.body.use": *product
    "tokens.typography.action.size": *product
    "tokens.typography.action.weight": *product
    "tokens.typography.action.lineHeight": *product
    "tokens.typography.action.tracking": *product
    "tokens.typography.action.use": *product
    "tokens.typography.label.size": *marketing
    "tokens.typography.label.weight": *marketing
    "tokens.typography.label.lineHeight": *marketing
    "tokens.typography.label.tracking": *marketing
    "tokens.typography.label.use": *marketing
    "tokens.spacing.xs": *product
    "tokens.spacing.sm": *product
    "tokens.spacing.md": *product
    "tokens.spacing.lg": *product
    "tokens.spacing.xl": *product
    "tokens.spacing.section": *marketing
    "tokens.rounded.sharp": *product
    "tokens.rounded.control": *product
    "tokens.shadow.flat": *product
    "tokens.components.primary-action.type": *product
    "tokens.components.primary-action.bg": *product
    "tokens.components.primary-action.fg": *product
    "tokens.components.primary-action.radius": *product
    "tokens.components.primary-action.padding": *product
    "tokens.components.primary-action.height": *product
    "tokens.components.primary-action.font": *product
    "tokens.components.primary-action.states": *product
    "tokens.components.primary-action.use": *product
    "tokens.components.product-tabs.type": *confluent
    "tokens.components.product-tabs.bg": *confluent
    "tokens.components.product-tabs.fg": *confluent
    "tokens.components.product-tabs.border": *confluent
    "tokens.components.product-tabs.radius": *confluent
    "tokens.components.product-tabs.padding": *confluent
    "tokens.components.product-tabs.height": *confluent
    "tokens.components.product-tabs.font": *confluent
    "tokens.components.product-tabs.states": *confluent
    "tokens.components.product-tabs.use": *confluent
tokens:
  source: live-extract
  extracted: "2026-07-13"
  colors:
    primary: "#0f62fe"
    canvas: "#ffffff"
    foreground: "#161616"
    muted: "#525252"
    layer: "#f4f4f4"
    border: "#c6c6c6"
    link: "#0062fe"
  typography:
    family: { sans: "IBM Plex Sans KR" }
    display: { size: 53.6469, weight: 300, lineHeight: 62.7669, use: "Marketing leadspace at the captured 1440px viewport" }
    body: { size: 16, weight: 400, lineHeight: 24, use: "Observed public-product body text" }
    action: { size: 14, weight: 400, lineHeight: 18.0001, tracking: 0.16, use: "Observed primary action" }
    label: { size: 12, weight: 400, lineHeight: 16, tracking: 0.32, use: "Observed marketing badge" }
  spacing: { xs: 8, sm: 12, md: 16, lg: 24, xl: 32, section: 64 }
  rounded: { sharp: 0, control: 4 }
  shadow:
    flat: "none"
  components:
    primary-action: { type: button, bg: "#0f62fe", fg: "#ffffff", radius: 4, padding: "14px 63px 14px 15px", height: 48, font: "14px/400 IBM Plex Sans KR", states: "hover/pressed/focus captured on cloud-support and confluent", use: "Public product CTA" }
    product-tabs: { type: tab, bg: "#f4f4f4", fg: "#161616", border: "1px solid #c6c6c6", radius: 4, padding: "0px 16px", height: 48, font: "16px/400 IBM Plex Sans KR", states: "hover/pressed/selected captured", use: "Confluent public-product tablist" }
  components_harvested: true
---

# Design System Inspiration of IBM

## 1. Visual Theme & Atmosphere

IBM is a long-running enterprise technology company whose public web experience connects cloud, AI, data, automation, and support information to a highly recognizable system language. Its current Korean public surfaces balance dense, practical product information with a restrained visual grammar: a white and light-gray field, near-black text, precise blue actions, and modestly rounded controls. The brand’s expressive layer comes principally from IBM Plex, a corporate typeface that IBM positions alongside its name and logo, while Carbon supplies the reusable component and accessibility guidance behind many of those public patterns. IBM’s own history traces the company from the 1911 Computing-Tabulating-Recording merger through its 1924 IBM name; its current About material frames the company around AI, cloud, quantum, and sustainability. [IBM history](https://www.ibm.com/history/ctr-and-ibm) · [IBM About](https://www.ibm.com/about?lnk=intro)

The July 2026 capture establishes a narrower, current implementation boundary. It covers one Korean marketing route and two public product routes; it does not represent an authenticated IBM application or every Carbon theme. The product routes repeatedly use IBM Plex Sans KR, full-height 48px primary actions, 4px control corners, flat surfaces, and tab/accordion structures. Carbon documentation is authoritative design-system context, but its catalog of variants is not automatically a claim about every observed IBM.com surface.

**Key characteristics:**
- White and Gray 10 (`#f4f4f4`) layers with Gray 100 (`#161616`) text
- IBM Blue (`#0f62fe`) for the captured primary action; `#0062fe` also appears as a public link/color treatment
- IBM Plex Sans KR is the loaded, visible family on the captured Korean marketing and public-product surfaces
- Small, explicit action typography: 14px / 400 / 18.0001px with 0.16px tracking
- A mixed corner treatment: content structures are often sharp, while captured primary actions and tabs use 4px

## 2. Color Palette & Roles

### Observed public marketing and product palette
- **Primary action** (`#0f62fe`): default background on the captured Cloud Support CTA; white text.
- **Link / product accent** (`#0062fe`): observed as text and border color on the marketing and Confluent routes. It is retained as a separate observed role, not silently collapsed into the CTA value.
- **Canvas** (`#ffffff`): observed public page background and light control surface.
- **Foreground** (`#161616`): repeated text and border color across all three captured routes.
- **Muted text** (`#525252`): repeated secondary text color across all three captured routes.
- **Layer** (`#f4f4f4`): repeated product tab/input/card-adjacent surface.
- **Border** (`#c6c6c6`): observed tab and card boundary color.

The capture also found route-local state colors such as `#e8e8e8` on a tab hover and several darker blue CTA states. They are documented with selector and surface provenance in §4 rather than promoted as universal palette tokens.

## 3. Typography Rules

### Evidence classes

**Official product-use.** IBM’s Design Language calls IBM Plex its corporate typeface and lists Sans, Mono, Serif, and Condensed subfamilies. IBM Developer separately states that Plex Mono Light is its expressive primary face and Plex Sans supports informative text. These are official brand-system facts, not proof that every current IBM.com page loads every family. [IBM Design Language](https://www.ibm.com/design/language/typography/typeface/) · [IBM Developer typography](https://www.ibm.com/brand/experience-guides/developer/brand/typography/)

**Live computed surface-use.** The supplied 2026-07-13 capture records `IBM Plex Sans KR` as loaded/high for 485 visible elements across marketing, Cloud Support, and Confluent. `IBM Plex Sans` is also loaded/high for 25 elements. Representative measured styles include a 53.6469px/300/62.7669px marketing leadspace, 16px/400/24px product body, 14px/400/18.0001px action text with 0.16px tracking, and a 12px/400/16px marketing badge with 0.32px tracking.

**Official distributed asset and license.** IBM describes Plex as open source and directs users to its GitHub release; its Design Language says the downloadable files contain the Open Font License. This supports the typeface’s distribution and license boundary, not a browser substitution. [Typeface and license note](https://www.ibm.com/design/language/typography/typeface/)

**Declared-only in this capture.** `IBM Plex Mono`, `IBM Plex Serif`, `IBM Plex Sans Arabic`, `IBM Plex Sans Hebrew`, and `IBM Plex Sans JP` had `@font-face` sources but no visible computed use in the three captured routes. Mono and Serif remain useful official family context, but are not machine UI-family tokens here.

**System/unresolved.** A marketing newsletter input computed to `Helvetica, Arial, sans-serif`; it is kept separate as marketing-form chrome and is not represented as IBM Plex. `ibm_icons` was loaded for two icon elements; it is not typography content.

## 4. Component Stylings

### Public product primary action

**Default — Cloud Support and Confluent**
- Background: `#0f62fe`
- Text: `#ffffff`
- Border: 1px solid transparent
- Radius: 4px
- Padding: 14px 63px 14px 15px
- Height: 48px
- Font: 14px / 400 / IBM Plex Sans KR
- Use: Public product CTA; selectors `surface-2::[data-omd-capture="4"]` and `surface-3::[data-omd-capture="16"]`.
- Hover: `#095bf4` on Cloud Support and `#0b5df8` on Confluent.
- Pressed: `#0c56e7` on Cloud Support and `#0953e5` on Confluent.
- Focus: 4px radius with dark-blue background and inset focus treatment; raw values are retained in `.verification.md` because the two routes differ.

### Public product tabs

**Contained tab — Confluent route**
- Background: `#f4f4f4`
- Text: `#161616`
- Border: 1px solid `#c6c6c6`
- Radius: 4px
- Padding: 0px 16px
- Height: 48px
- Font: 16px / 400 / IBM Plex Sans KR
- Use: `surface-3::[data-omd-capture="10"]`, a public Confluent tablist.
- Hover: `#e8e8e8` background.
- Selected: transparent background with `#ffffff` text; the selected target panels were captured through the tab interaction.
- Pressed: observed by the collector; no universal pressed color is promoted because the evidence records route-local values only.

### Public product accordion

**Flush support accordion header — Cloud Support route**
- Text: `#161616`
- Border: 1px solid `#e0e0e0` on the item’s top edge
- Radius: 0px
- Padding: 0px 16px 0px 0px
- Height: 40px
- Font: 16px / 400 / IBM Plex Sans KR
- Use: `surface-2::[data-omd-capture="5"]`, class `cds--accordion__heading cmp-accordion__button`.
- Focus: captured on the header.
- Pressed: captured on the header.

The bundle did not record an accordion-panel expansion interaction, so no expanded-panel spacing, icon rotation, disabled state, or generic modal/toast/form-error variant is asserted. Carbon’s [accordion guidance](https://carbondesignsystem.com/components/accordion/usage/) describes the broader component separately.

### Marketing-form boundary

**Newsletter field — marketing only**
- Background: `#f4f4f4`
- Text: `#161616`
- Border: 1px bottom edge `#8d8d8d`
- Radius: 0px
- Padding: 0px 16px
- Height: 48px
- Font: 14px / 400 / Helvetica, Arial, sans-serif
- Use: `home::[data-omd-capture="23"]`; a Marketo-classed field on the public marketing route.

This form field is not promoted into the IBM Plex product token set.

---
**Verified:** 2026-07-13
**Tier 1 sources:** [IBM KR marketing](https://www.ibm.com/kr-ko), [Cloud Support](https://www.ibm.com/kr-ko/products/cloud/support?lnk=flathl), [Confluent](https://www.ibm.com/kr-ko/products/confluent?lnk=hpfp4kr), [Carbon Button](https://carbondesignsystem.com/components/button/usage/), [Carbon Tabs](https://carbondesignsystem.com/components/tabs/usage/), [Carbon Accordion](https://carbondesignsystem.com/components/accordion/usage/)
**Tier 2 sources:** [getdesign IBM directory](https://getdesign.md/ibm); Refero query attempted, but the built-in web tool refused the direct URL and no indexed Refero IBM result was used.
**Resolution note:** The earlier universal 0px primary-button claim was rolled back: the supplied fresh public-product evidence measures 4px on the captured primary CTAs.
**Conflicts unresolved:** none

## 5. Layout Principles

The captured 1440px routes repeatedly expose 8, 12, 16, 24, 32, 48, and 64px spacing values. Treat these as observed rhythm candidates, not a complete responsive grid specification. Carbon’s 2x Grid is official system guidance, but the supplied artifact did not measure breakpoint-specific grid columns or a second viewport; those values remain outside this reference’s live-token scope.

For the observed public routes, use light-gray layering and clean rule boundaries before introducing shadow. Keep action controls at the measured 48px height where the public-product primary CTA pattern is appropriate. Do not infer an authenticated-product layout from the marketing or product-detail pages.

## 6. Depth & Elevation

The representative public components in the supplied bundle report `box-shadow: none`. The visible hierarchy comes from white and `#f4f4f4` surfaces, text contrast, borders, and the accent action. Floating menus, dialogs, tooltips, and overlays were not captured; their elevation values are intentionally absent.

## 7. Do's and Don'ts

### Do
- Use the measured IBM Plex Sans KR public-web family when implementing the captured Korean product patterns.
- Keep the captured primary CTA at 48px high with 4px radius and the observed asymmetric padding.
- Distinguish `#0f62fe` CTA backgrounds from the separately observed `#0062fe` link treatment.
- Keep tabs and accordion behavior tied to their documented public-product routes and selector provenance.
- Use Carbon documentation for system-level guidance while preserving the actual IBM.com surface boundary.

### Don't
- Do not reintroduce a universal 0px-radius primary-button rule for the captured public-product routes.
- Do not render Helvetica marketing-form chrome as IBM Plex or promote it to the product type token.
- Do not turn declared-only Mono, Serif, or locale faces into visible-webfont claims.
- Do not invent expanded accordion, error, modal, toast, or dashboard states from the current capture.
- Do not apply the Korean public-web measurements as a substitute for an authenticated IBM product surface.

## 8. Responsive Behavior

No breakpoint comparison was collected in this packet. The public primary CTA, tabs, accordion header, and marketing field were measured only at the captured 1440×900 viewport. Preserve normal responsive accessibility requirements in an implementation, but do not claim IBM-specific mobile geometry, navigation collapse, or grid changes without a separate observation.

## 9. Agent Prompt Guide

### Quick reference
- Product CTA: `#0f62fe` / `#ffffff`, 4px radius, 48px high, 14px / 400 IBM Plex Sans KR.
- Product body: IBM Plex Sans KR, 16px / 400 / 24px, `#161616`.
- Product tabs: `#f4f4f4` surface, `#161616` text, 1px `#c6c6c6` border, 4px radius.
- Support accordion: sharp 40px header, top rule `#e0e0e0`, 16px / 400 IBM Plex Sans KR.

### Boundary-aware prompt
- "Create a public-product CTA using the captured IBM pattern: `#0f62fe` background, white text, 4px radius, 48px height, 14px 63px 14px 15px padding, and IBM Plex Sans KR at 14px/400. Keep hover, pressed, and focus route-specific rather than inventing one global state value."

## 10. Voice & Tone

IBM’s public design guidance favors clear, action-led labels and systematic information architecture over decorative copy. Carbon’s button guidance asks labels to communicate the action and recommends sentence case; the IBM Developer typography guidance uses code-adjacent glyphs and disciplined type to make technical communication recognizable. For IBM-style public product copy, name the task or resource, use direct verbs, and let supporting text explain the technical context. Avoid invented security certifications, performance outcomes, or informal claims of transformation. [Carbon Button guidance](https://carbondesignsystem.com/components/button/usage/) · [IBM Developer typography](https://www.ibm.com/brand/experience-guides/developer/brand/typography/)

| Context | Treatment |
|---|---|
| Primary action | Sentence-case action label that states the outcome. |
| Product detail | Direct technical noun plus a concise explanatory sentence. |
| Support disclosure | Short heading that describes the content revealed by the accordion. |

## 11. Brand Narrative

IBM’s own history places its origin in the 1911 creation of Computing-Tabulating-Recording Company from data-processing businesses; the company later became IBM. That long data-and-computing lineage helps explain a brand system that presents technical information as structured, durable, and internationally usable rather than fashion-led. [The origins of IBM](https://www.ibm.com/history/ctr-and-ibm)

The contemporary expression is held together by IBM Plex and Carbon. IBM calls Plex a corporate typeface and makes its source and OFL boundary available; Carbon provides the public component guidance that contextualizes buttons, tabs, and accordions. Current IBM About material presents the company’s work around AI, cloud, quantum computing, and sustainability. This reference keeps those first-party narrative facts separate from the limited set of computed values collected on Korean public routes. [IBM Plex](https://www.ibm.com/design/language/typography/typeface/) · [IBM About](https://www.ibm.com/about?lnk=intro)

## 12. Principles

1. **Make the action legible.** Carbon treats a button label as the statement of the action. *UI implication:* use direct sentence-case action labels rather than vague promotional nouns.
2. **Use typography as identity and information structure.** IBM positions Plex as a core brand asset and uses Mono/Sans differently in its Developer guidance. *UI implication:* use the loaded KR Sans evidence for this public-web reference; reserve other official Plex families for surfaces where their use is actually established.
3. **Keep component context intact.** Carbon’s tab and accordion guidance makes their purpose and behavior explicit. *UI implication:* use tabs for related views and accordions for progressive disclosure; do not invent unobserved state variants.
4. **Separate system guidance from surface fact.** Carbon is IBM’s official system, but this packet observes a bounded public web slice. *UI implication:* never overwrite product/marketing evidence with a generic component catalog.

## 13. Personas

No first-party audience research suitable for named personas was collected in this packet. Do not invent demographic personas.

- **[FILL IN: validated public-product audience]** — add only with an IBM first-party research or product source.
- **[FILL IN: validated support-information audience]** — add only with an IBM first-party research or product source.

## 14. States

| State | Evidence boundary |
|---|---|
| Primary action — default | Captured on Cloud Support and Confluent: `#0f62fe`, white text, 4px radius, 48px height. |
| Primary action — hover | Captured route-local values: `#095bf4` (Cloud Support) and `#0b5df8` (Confluent). |
| Primary action — pressed | Captured route-local values: `#0c56e7` (Cloud Support) and `#0953e5` (Confluent). |
| Primary action — focus | Captured on both routes with dark-blue/inset focus treatment; raw values are in verification notes. |
| Tab — default | Confluent: `#f4f4f4`, `#161616`, 1px `#c6c6c6`, 4px radius. |
| Tab — hover | Confluent: `#e8e8e8` background. |
| Tab — selected | Confluent interaction capture: white text, transparent background. |
| Accordion — focus/pressed | Cloud Support header interaction states captured; no expanded panel was captured. |
| Loading, error, empty, disabled, success, skeleton | Not captured on these public routes; intentionally unspecified. |

## 15. Motion & Easing

The supplied evidence records hover, pressed, focus, and tab-selected results but does not measure durations, curves, or reduced-motion behavior. Do not infer a motion scale from Carbon documentation or from static state values. **[FILL IN: motion tokens only after direct IBM-surface or official-token evidence.]**
