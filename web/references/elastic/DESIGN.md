---
id: elastic
name: Elastic UI
country: US
category: developer-tools
homepage: "https://eui.elastic.co/"
primary_color: "#0b64dd"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=eui.elastic.co&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-eui-home, url: "https://eui.elastic.co/", inspected: "2026-07-13" }
    - { id: components, kind: public-eui-components-docs, url: "https://eui.elastic.co/docs/components/", inspected: "2026-07-13" }
    - { id: card-docs, kind: public-eui-card-docs, url: "https://eui.elastic.co/docs/components/containers/card/index.html", inspected: "2026-07-13" }
  sources:
    - { id: eui-home-live, kind: product-surface, url: "https://eui.elastic.co/", captured: "2026-07-13" }
    - { id: eui-components-live, kind: official-doc, url: "https://eui.elastic.co/docs/components/", captured: "2026-07-13" }
    - { id: eui-card-live, kind: official-doc, url: "https://eui.elastic.co/docs/components/containers/card/index.html", captured: "2026-07-13" }
    - { id: eui-font-settings, kind: official-doc, url: "https://eui.elastic.co/docs/getting-started/theming/tokens/typography/font-settings/", captured: "2026-07-13" }
    - { id: eui-theme-provider, kind: official-doc, url: "https://eui.elastic.co/docs/getting-started/theming/theme-provider/", captured: "2026-07-13" }
    - { id: elastic-history, kind: brand-asset, url: "https://www.elastic.co/about/press/elasticsearch-changes-name-to-elastic-to-reflect-wide-adoption-beyond-search", captured: "2026-07-13" }
    - { id: elastic-design-hierarchy, kind: brand-asset, url: "https://www.elastic.co/blog/redesigning-product-logos-and-icons-while-building-a-design-hierarchy-at-elastic", captured: "2026-07-13" }
    - { id: eui-elastic-license, kind: license, url: "https://github.com/elastic/eui/blob/main/licenses/ELASTIC-LICENSE-2.0.md", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.foreground": &home { surface_id: home, source_id: eui-home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground-strong": *home
    "tokens.colors.action": *home
    "tokens.colors.action-subtle": &components { surface_id: components, source_id: eui-components-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.hairline": *components
    "tokens.colors.surface-subdued": &cardDocs { surface_id: card-docs, source_id: eui-card-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.family.ui": { surface_id: home, source_id: eui-font-settings, method: computed-style-and-official-token-doc, captured: "2026-07-13" }
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.heading.size": *cardDocs
    "tokens.typography.heading.weight": *cardDocs
    "tokens.typography.heading.lineHeight": *cardDocs
    "tokens.typography.heading.use": *cardDocs
    "tokens.typography.control.size": *components
    "tokens.typography.control.weight": *components
    "tokens.typography.control.lineHeight": *components
    "tokens.typography.control.use": *components
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *components
    "tokens.spacing.xl": *home
    "tokens.spacing.xxl": *cardDocs
    "tokens.rounded.control": *components
    "tokens.components.docs-sidebar-category.type": *components
    "tokens.components.docs-sidebar-category.bg": *components
    "tokens.components.docs-sidebar-category.fg": *components
    "tokens.components.docs-sidebar-category.radius": *components
    "tokens.components.docs-sidebar-category.padding": *components
    "tokens.components.docs-sidebar-category.font": *components
    "tokens.components.docs-sidebar-category.use": *components
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only values observed on the supplied public EUI capture are UI tokens. Elastic corporate history, product-brand writing, EUI documentation, and declared-only fonts remain separate evidence domains."
  components_harvested: true
  colors:
    foreground: "#1d2a3e"
    foreground-strong: "#111c2c"
    action: "#0b64dd"
    action-subtle: "#d9e8ff"
    canvas: "#ffffff"
    hairline: "#cad3e2"
    surface-subdued: "#ecf1f9"
  typography:
    family: { ui: "Inter" }
    body: { size: 14, weight: 400, lineHeight: 16, use: "Repeated public EUI home and component-documentation text" }
    heading: { size: 20.0004, weight: 600, lineHeight: 24.0002, use: "Observed EUI card title on the public card documentation route" }
    control: { size: 14, weight: 450, lineHeight: 20.0004, use: "Observed EUI component-documentation control samples" }
  spacing: { xs: 4, sm: 6, md: 8, lg: 12, xl: 16, xxl: 24 }
  rounded: { control: 4 }
  components:
    docs-sidebar-category: { type: listItem, bg: "transparent", fg: "#1d2a3e", radius: 0, padding: "0px", font: "14px/500/16px Inter", use: "Static public component-docs sidebar category row; selector surface-2::li" }
---

## 1. Visual Theme & Atmosphere

Elastic UI (EUI) is Elastic’s public React component framework: its documentation presents themed components, setup guidance, and implementation patterns for software interfaces. The captured EUI home, components index, and card documentation route feel deliberately operational rather than campaign-led—white surfaces, dense blue-gray type, short 4px control geometry, and a blue action color make the system read like maintainable application chrome. That product character has a useful relationship to Elastic’s wider story: Elasticsearch began as an open-source project in 2010, Elastic was founded in 2012, and the company adopted the Elastic name in 2015 as its products expanded beyond search. Elastic’s own design writing describes an iterative effort to make a growing multi-product hierarchy more coherent, while the current EUI Theme Provider documentation identifies Borealis as the default theme. EUI is a framework-level expression of that practical, scalable direction, not a substitute record of the corporate marketing site or authenticated product UI.

**Key characteristics:**

- Repeated public EUI foreground is `#1d2a3e`; a darker `#111c2c` appears in card documentation.
- `#0b64dd` is the observed solid action fill, while `#d9e8ff` is an observed light action treatment.
- White `#ffffff` is the observed canvas; `#ecf1f9` is a subdued panel surface and `#cad3e2` a visible hairline.
- The supplied sample clusters around 4px control corners and 4/6/8/12/16/24px spacing values.
- Corporate marketing, EUI docs, and the supplied public component surfaces are separate domains; no authenticated Elastic-product UI is represented here.

## 2. Color Palette & Roles

### Selector-backed public EUI colors

- **Foreground** (`#1d2a3e`): repeated body text and component-documentation sidebar foreground.
- **Foreground Strong** (`#111c2c`): observed card-title text on the public card documentation route.
- **Action** (`#0b64dd`): filled primary EUI action on the home and card-documentation samples.
- **Action Subtle** (`#d9e8ff`): observed light-background action treatment in component documentation.
- **Canvas** (`#ffffff`): repeated public EUI page and panel canvas.
- **Hairline** (`#cad3e2`): observed 1px input/control border.
- **Surface Subdued** (`#ecf1f9`): observed subdued card/panel background on the card documentation route.

### Brand boundary

Elastic’s cluster mark and broader product-logo hierarchy are brand assets, not a license to promote logo colors or marketing artwork into EUI UI tokens. Use the selector-backed values above for this captured EUI scope.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | EUI’s font-settings documentation says the `euiTheme.font.family` stack applies to all parts of the UI and begins with Inter. |
| Live computed surface-use | The supplied capture records Inter as loaded, high confidence, in 810 visible uses across body, button, card, input, list-item, badge, and toggle roles. |
| Official distributed brand asset | No Elastic-owned distributed type asset is established by the supplied material. EUI’s setup documentation instead points consumers to obtain Inter from its source when locally embedding it. |
| Declared-only | Roboto Mono has declared `@font-face` sources in the packet but zero visible uses; it is not a UI-family token here. |
| Unresolved / fallback boundary | `system-ui`, Helvetica, and Arial occur as fallbacks in the computed stack. They are not rendered or named as substitutes for Inter. |

### Captured hierarchy

| Role | Family | Size | Weight | Line height | Scope |
|---|---|---:|---:|---:|---|
| Body | Inter | 14px | 400 | 16px | repeated public EUI home and component docs |
| Card heading | Inter | 20.0004px | 600 | 24.0002px | public card-documentation title sample |
| Control | Inter | 14px | 450 | 20.0004px | public component-documentation controls |

EUI’s repository is dual-licensed under Elastic License 2.0 and SSPL v1 according to the EUI documentation; the Elastic License source is listed in the verification record. That repository licensing note does not establish an Inter font license or change the live-use boundary above.

## 4. Component Stylings

### Public documentation navigation

**Sidebar Category Row**
- Background: transparent
- Text: `#1d2a3e`
- Radius: 0px
- Padding: 0px
- Font: 14px / 500 / 16px / Inter
- Use: Static component-documentation sidebar category row; selector `surface-2::li`.

### State boundary

The supplied packet records `interactionCount: 0`. The sidebar row above is retained because its default geometry and typography are directly observed; no hover, focus, pressed, active, disabled, or transition value is published for it. Static checked, unchecked, and disabled toggle samples remain raw evidence only because the packet contains no interaction events and no toggle token is required for this honest component set.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://eui.elastic.co/ ; https://eui.elastic.co/docs/components/ ; https://eui.elastic.co/docs/components/containers/card/index.html ; https://eui.elastic.co/docs/getting-started/theming/tokens/typography/font-settings/
**Tier 2 sources:** https://getdesign.md/elastic (attempted; no usable observation returned); https://styles.refero.design/?q=Elastic (attempted; no usable observation returned)
**Conflicts unresolved:** none

## 5. Layout Principles

The capture supports a compact public documentation rhythm: 4px, 6px, 8px, 12px, 16px, and 24px recur in the measured spacing set. Component-docs text and sidebar rows are 14px, while a card title sample is 20.0004px. No marketing grid, authenticated-product layout, or responsive container rule is inferred from these desktop captures.

## 6. Depth & Elevation

The promoted documentation row is flat. The captured card and control samples use canvas, subdued surfaces, borders, and 4px geometry; no reusable shadow token is published because the packet does not establish a consistent elevation scale.

## 7. Do's and Don'ts

### Do

- Keep EUI documentation-local interfaces compact, using the measured spacing and 4px control-corner evidence.
- Use Inter only where the EUI font-family evidence applies; preserve the fallback stack as fallback.
- Distinguish `#0b64dd` solid action from the observed `#d9e8ff` subtle action treatment.
- Keep a navigational row as a `listItem` when the evidence is a static row rather than a button.

### Don't

- Don't import Elastic marketing-logo colors or artwork as EUI component facts.
- Don't invent hover, focus, pressed, motion, dialog, toast, form-error, or responsive states from this zero-interaction packet.
- Don't substitute `system-ui`, Helvetica, Arial, or declared-only Roboto Mono for the verified Inter UI family.
- Don't treat a raw card or toggle variant as a reusable token unless its exact field set is promoted with matching claim evidence.

## 8. Responsive Behavior

Only 1440×900 public captures were supplied. No breakpoint, mobile navigation behavior, touch-target rule, or responsive state is published.

## 9. Agent Prompt Guide

For a public EUI documentation-local surface, use a `#ffffff` canvas, `#1d2a3e` foreground, Inter at the measured 14px body/control sizes, a `#0b64dd` solid action, `#cad3e2` hairlines, and 4px control corners. Retain the sidebar category as a flat 14px/500 list row. Do not call this Elastic marketing, Kibana product UI, or an authenticated application surface; omit all unmeasured interactive and responsive behavior.

## 10. Voice & Tone

The EUI documentation is implementation-oriented: it names a setup concern, identifies the relevant token or provider, and gives a concrete usage path. Elastic’s design writing also frames its icon work as iterative and scalable for a multi-product environment. This supports a direct, technical, and scope-aware tone for EUI documentation—not a claim about the full Elastic marketing voice.

| Context | Supported direction |
|---|---|
| Setup guidance | Name the provider, token, or component before describing configuration. |
| Theming guidance | State the smallest safe override and its scope. |
| Accessibility guidance | Pair color with explanatory copy or icons rather than color alone. |

Source-grounded examples of the documentation’s framing are “Setup,” “Styling your application,” and “Customizing the style tokens.”

## 11. Brand Narrative

Elasticsearch was launched as an open-source project in 2010, and Elastic was founded in 2012 by people behind Elasticsearch and Apache Lucene. In 2015 the company changed its name from Elasticsearch to Elastic to reflect a product scope that had expanded beyond search. Those are company-history facts, not EUI token evidence.

Elastic’s 2019 design account describes an iterative redesign of product logos and icons to give a growing multi-product organization clearer visual hierarchy. Current EUI Theme Provider documentation identifies `EUI_THEME_BOREALIS` as the default theme, but this reference does not infer an unobserved Borealis token set from that name. EUI sits on the framework/documentation side of the ecosystem: its public documentation exposes components and theme controls, while this reference deliberately limits UI claims to the three supplied EUI surfaces.

## 12. Principles

1. **Work iteratively at system scale.** Elastic describes its product-logo work as an iterative response to a fast-growing, multi-product organization.
   *UI implication:* prefer small, selector-backed component facts over a fictional universal style system.
2. **Make hierarchy legible.** Elastic’s design account distinguishes product logos from functional icons so their roles remain clear.
   *UI implication:* label navigation and controls by function; do not turn a documentation row into a button without semantic evidence.
3. **Change the least necessary theme variables.** EUI’s setup guidance recommends limited token overrides for substantial results.
   *UI implication:* preserve the measured base palette and add local values only with new evidence.
4. **Do not rely on color alone.** EUI’s color guidance asks authors to pair color context with icons or copy.
   *UI implication:* semantic action and state communication must not depend solely on `#0b64dd`, `#d9e8ff`, or any other color token.

## 13. Personas

The following are evidence-bounded stakeholder groups, not synthetic satisfaction claims.

**Application developer using EUI.** Needs setup, theme, and component guidance that identifies the exact public framework surface rather than conflating it with Elastic’s marketing or authenticated products.

**Design-system contributor.** Needs a concise record of live colors, typography, and row geometry, plus the boundary that prevents inferred component states from entering a shared token set.

**Technical writer or reviewer.** Needs public documentation language that names implementation artifacts directly and preserves source/provenance links for future updates.

## 14. States

No reusable state matrix is published. The supplied packet has zero interaction events. Its three static observations—checked, unchecked, and disabled toggle samples—are documented in the verification record but are not generalized into component tokens; empty, loading, error, success, skeleton, focus, hover, pressed, dialog, and toast behavior are absent.

## 15. Motion & Easing

No duration, easing, transition, or reduced-motion value was measured in the supplied evidence. Motion tokens are intentionally absent.
