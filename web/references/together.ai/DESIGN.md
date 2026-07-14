---
id: together.ai
name: Together AI
country: US
category: ai
homepage: "https://www.together.ai"
primary_color: "#000000"
logo:
  type: github
  slug: togethercomputer
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Together AI Brand
  url: "https://www.together.ai/brand"
  type: brand
  description: Official logo, colour-family, and typography guidance; it is distinct from public web and docs-chrome observations.
  og_image: "https://cdn.prod.website-files.com/69654e88dce9154b5f1206dd/69a49f8243e74bf4b805d130_og-brand.jpg"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.together.ai/", inspected: "2026-07-13" }
    - { id: about, kind: corporate-marketing, url: "https://www.together.ai/about-us", inspected: "2026-07-13" }
    - { id: brand, kind: official-brand-guidelines, url: "https://www.together.ai/brand", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.together.ai/", captured: "2026-07-13" }
    - { id: about-live, kind: product-surface, url: "https://www.together.ai/about-us", captured: "2026-07-13" }
    - { id: brand-live, kind: brand-asset, url: "https://www.together.ai/brand", captured: "2026-07-13" }
    - { id: docs-context, kind: official-doc, url: "https://docs.together.ai/intro", captured: "2026-07-13" }
    - { id: about-context, kind: official-doc, url: "https://www.together.ai/about-us", captured: "2026-07-13" }
    - { id: careers-context, kind: official-doc, url: "https://www.together.ai/careers", captured: "2026-07-13" }
    - { id: brand-context, kind: brand-asset, url: "https://www.together.ai/brand", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: computed-style-and-fontfaceset, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.tab-cyan": *home
    "tokens.colors.tab-lavender": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.family.label": *home
    "tokens.typography.display.size": *home
    "tokens.typography.display.weight": *home
    "tokens.typography.display.lineHeight": *home
    "tokens.typography.display.tracking": *home
    "tokens.typography.display.use": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.action.size": *home
    "tokens.typography.action.weight": *home
    "tokens.typography.action.lineHeight": *home
    "tokens.typography.action.tracking": *home
    "tokens.typography.action.use": *home
    "tokens.typography.label.size": *home
    "tokens.typography.label.weight": *home
    "tokens.typography.label.lineHeight": *home
    "tokens.typography.label.tracking": *home
    "tokens.typography.label.use": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.xl": *home
    "tokens.spacing.xxl": *home
    "tokens.rounded.none": *home
    "tokens.rounded.control": *home
    "tokens.rounded.container": *home
    "tokens.shadow.none": *home
    "tokens.components.primary-action.type": *home
    "tokens.components.primary-action.bg": *home
    "tokens.components.primary-action.fg": *home
    "tokens.components.primary-action.radius": *home
    "tokens.components.primary-action.padding": *home
    "tokens.components.primary-action.height": *home
    "tokens.components.primary-action.font": *home
    "tokens.components.primary-action.states": *home
    "tokens.components.primary-action.use": *home
    "tokens.components.secondary-action.type": *home
    "tokens.components.secondary-action.bg": *home
    "tokens.components.secondary-action.fg": *home
    "tokens.components.secondary-action.radius": *home
    "tokens.components.secondary-action.padding": *home
    "tokens.components.secondary-action.font": *home
    "tokens.components.secondary-action.states": *home
    "tokens.components.secondary-action.use": *home
    "tokens.components.selected-tab-cyan.type": *home
    "tokens.components.selected-tab-cyan.bg": *home
    "tokens.components.selected-tab-cyan.fg": *home
    "tokens.components.selected-tab-cyan.radius": *home
    "tokens.components.selected-tab-cyan.padding": *home
    "tokens.components.selected-tab-cyan.height": *home
    "tokens.components.selected-tab-cyan.font": *home
    "tokens.components.selected-tab-cyan.states": *home
    "tokens.components.selected-tab-cyan.use": *home
    "tokens.components.tab-panel.type": *home
    "tokens.components.tab-panel.bg": *home
    "tokens.components.tab-panel.fg": *home
    "tokens.components.tab-panel.radius": *home
    "tokens.components.tab-panel.padding": *home
    "tokens.components.tab-panel.use": *home
    "tokens.components.research-card.type": *home
    "tokens.components.research-card.bg": *home
    "tokens.components.research-card.fg": *home
    "tokens.components.research-card.radius": *home
    "tokens.components.research-card.padding": *home
    "tokens.components.research-card.use": *home
    "tokens.components.disabled-slider-arrow.type": *home
    "tokens.components.disabled-slider-arrow.bg": *home
    "tokens.components.disabled-slider-arrow.fg": *home
    "tokens.components.disabled-slider-arrow.radius": *home
    "tokens.components.disabled-slider-arrow.size": *home
    "tokens.components.disabled-slider-arrow.states": *home
    "tokens.components.disabled-slider-arrow.use": *home
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only supplied public marketing, corporate-marketing, and official-brand capture is tokenized. No authenticated console or documentation chrome was captured; the documented product surface and brand assets remain separate evidence domains."
  colors:
    primary: "#000000"
    canvas: "#ffffff"
    tab-cyan: "#c8f6f9"
    tab-lavender: "#e2e1fe"
  typography:
    family: { ui: "The Future", label: "PP Neue Montreal Mono" }
    display: { size: 64, weight: 500, lineHeight: 1.10, tracking: -1.92, use: "Observed marketing h1" }
    body: { size: 16, weight: 400, lineHeight: 1.25, use: "Observed public marketing, about, and brand body/list text" }
    action: { size: 16, weight: 500, lineHeight: 1.00, tracking: 0.08, use: "Observed compact public action" }
    label: { size: 11, weight: 500, lineHeight: 1.40, tracking: 0.055, use: "Observed public mono label" }
  spacing: { xs: 4, sm: 6, md: 8, lg: 16, xl: 20, xxl: 40 }
  rounded: { none: 0, control: 4, container: 8 }
  shadow:
    none: "none"
  components_harvested: true
  components:
    primary-action: { type: button, bg: "#000000", fg: "#ffffff", radius: "4px", padding: "8px 16px", height: "40px", font: "16px / 500 PP Neue Montreal Mono", states: "hover, focus, and pressed captured for selector; no common state value promoted", use: "Public compact action at home::[data-omd-capture=20]" }
    secondary-action: { type: button, bg: "rgba(0, 0, 0, 0.08)", fg: "#000000", radius: "4px", padding: "16px", font: "16px / 500 PP Neue Montreal Mono", states: "hover, focus, and pressed captured for selector", use: "Public light-surface action at home::[data-omd-capture=22]" }
    selected-tab-cyan: { type: tab, bg: "#c8f6f9", fg: "#000000", radius: "4px", padding: "4px 0px", height: "72px", font: "16px / 400 The Future", states: "selected and tab-selected observed", use: "Home tab at home::[data-omd-capture=29]" }
    tab-panel: { type: card, bg: "#ffffff", fg: "#000000", radius: "8px", padding: "16px 16px 16px 40px", use: "Home tab panel at home::#tabs-0-panel-0 (role tabpanel)" }
    research-card: { type: card, bg: "rgba(255, 255, 255, 0.08)", fg: "#ffffff", radius: "4px", padding: "20px 40px", use: "Home research card at home::div.research-card" }
    disabled-slider-arrow: { type: button, bg: "rgba(255, 255, 255, 0.12)", fg: "#ffffff", radius: "4px", size: "40px", states: "disabled observed", use: "Disabled home carousel arrow at home::[data-omd-capture=38]" }
---

# Design System Inspiration of Together AI

## 1. Visual Theme & Atmosphere

Together AI describes itself as the AI Native Cloud: a full-stack platform for production AI built on systems research. Its official material ties that work to open and responsible development, helping teams ship faster, scale reliably, and improve unit economics. The public web language recorded on 13 July 2026 turns that infrastructure message into a stark, editorial surface: black actions and type on white, a large geometric display face, and small monospace control language. The official brand guide says The Future is the headline-and-body typeface and identifies the logo plus three colour families as its visual foundation. [About](https://www.together.ai/about-us) · [Brand](https://www.together.ai/brand)

The supplied runtime evidence covers only the public home, About, and Brand pages. It shows the recurring black/white structure, The Future in visible reading and display roles, and PP Neue Montreal Mono in compact public actions and labels. Cyan and lavender were observed only on particular selected home tabs; they are retained with their selectors rather than generalized into a complete semantic palette. An authenticated console, API UI, and the separately hosted documentation chrome were not captured, so this reference does not claim their tokens or component rules.

**Key Characteristics:**
- Officially positioned as a full-stack, research-led production AI platform
- Black `#000000` public action treatment and white `#ffffff` canvas in the supplied capture
- The Future for visible display/body use; PP Neue Montreal Mono for observed action/label use
- Compact 4px controls, 8px tab panels, and no observed box shadows on the retained components
- Selector-specific cyan and lavender selected-tab surfaces, not an inferred universal palette

## 2. Color Palette & Roles

### Observed public web colours

- **Primary action / ink** (`#000000`): computed on the retained compact black action and repeated public text/border observations.
- **Canvas / on-dark text** (`#ffffff`): observed page and tab-panel canvas plus inverse action/card text.
- **Selected tab cyan** (`#c8f6f9`): observed only on `home::[data-omd-capture="29"]` while selected.
- **Selected tab lavender** (`#e2e1fe`): observed only after a recorded home-tab interaction at `home::[data-omd-interaction-capture="tab-1-0"]`.
- **Light secondary fill** (`rgba(0, 0, 0, 0.08)`): observed on the selector-specific public secondary action.
- **Dark secondary fill** (`rgba(255, 255, 255, 0.12)`): observed on the public research-card action and disabled carousel arrow.

### Brand and domain boundary

Together AI’s official Brand page calls its three foundational colour families general-purpose brand colours, but the public text extraction did not expose stable numeric values for that artwork. They are therefore not added as machine tokens. The separate documentation overview establishes product capability context—running, training, and serving open-source models—but its Mintlify chrome is not a source for the marketing tokens above. [Brand](https://www.together.ai/brand) · [Docs overview](https://docs.together.ai/intro)

## 3. Typography Rules

### Evidence classes

- **Official brand / product-use — The Future:** Together AI explicitly calls The Future its primary headline and body typeface and describes it as a homage to Futura. [Brand](https://www.together.ai/brand)
- **Live computed surface-use + FontFaceSet/source corroboration — The Future:** 957 visible uses across the three supplied public surfaces, with four Together-hosted `.woff2` source URLs for light, regular, medium, and bold files.
- **Live computed surface-use + FontFaceSet/source corroboration — PP Neue Montreal Mono:** 134 visible uses, including public buttons and headings, with six Together-hosted `.woff2` source URLs. Pangram Pangram’s official Neue Montreal site identifies the family; that does not create a redistribution grant for Together’s served files. [Neue Montreal](https://neuemontreal.com/)
- **Declared-only — The Future Mono:** four Together-hosted `@font-face` source files were declared, but no visible computed use was recorded. It is not a UI token.
- **Declared-only — swiper-icons and webflow-icons:** asset faces with no visible computed use; not UI tokens.
- **License boundary:** Together’s brand page and Terms do not publish a font licence or redistribution permission for these webfont files. Treat them as site-delivery assets; do not extract or redistribute them.

### Observed hierarchy

| Role | Family | Size | Weight | Line Height | Tracking | Evidence boundary |
|------|--------|------|--------|-------------|----------|-------------------|
| Marketing display | The Future | 64px | 500 | 70.4px | -1.92px | Captured public `h1` |
| Public body/list | The Future | 16px | 400 | 20px | normal | Repeated public text/list roles |
| Compact action | PP Neue Montreal Mono | 16px | 500 | 16px | 0.08px | Selector-specific public actions |
| Mono label | PP Neue Montreal Mono | 11px | 500 | 15.4px | 0.055px | Public label role |

## 4. Component Stylings

### Public actions

**Compact black action**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 4px
- Padding: 8px 16px
- Height: 40px
- Font: 16px / 500 / PP Neue Montreal Mono
- Use: `home::[data-omd-capture="20"]`; hover, focus, and pressed were captured for this selector, but no shared state value is promoted.

**Light secondary action**
- Background: `rgba(0, 0, 0, 0.08)`
- Text: `#000000`
- Radius: 4px
- Padding: 16px
- Font: 16px / 500 / PP Neue Montreal Mono
- Use: `home::[data-omd-capture="22"]`; hover, focus, and pressed were captured for this selector.

**Research-card action**
- Background: `rgba(255, 255, 255, 0.12)`
- Text: `#ffffff`
- Radius: 4px
- Padding: 16px
- Font: 16px / 500 / PP Neue Montreal Mono
- Use: `home::[data-omd-capture="40"]`, class `btn … is-secondary-dark`.

### Home tab treatment

**Selected cyan tab**
- Background: `#c8f6f9`
- Text: `#000000`
- Radius: 4px
- Padding: 4px 0px
- Height: 72px
- Font: 16px / 400 / The Future
- Use: selected home tab `home::[data-omd-capture="29"]`; selected/tab-selected state recorded.

**Selected lavender tab**
- Background: `#e2e1fe`
- Text: `#000000`
- Radius: 4px
- Padding: 4px 0px
- Height: 72px
- Font: 16px / 400 / The Future
- Use: interaction-captured selected home tab `home::[data-omd-interaction-capture="tab-1-0"]`; selector-specific, not a general tab variant.

**Tab panel**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 8px
- Padding: 16px 16px 16px 40px
- Use: selected home panel `home::#tabs-0-panel-0`.

### Research and disabled control

**Research card**
- Background: `rgba(255, 255, 255, 0.08)`
- Text: `#ffffff`
- Radius: 4px
- Padding: 20px 40px
- Font: 16px / 400 / The Future
- Use: home `div.research-card`; no shadow was computed.

**Disabled carousel arrow**
- Background: `rgba(255, 255, 255, 0.12)`
- Text: `#ffffff`
- Radius: 4px
- Size: 40px
- Font: 16px / 400 / The Future
- Use: disabled home slider arrow `home::[data-omd-capture="38"]`, class containing `swiper-button-disabled`.

## 5. Layout Principles

The recorded home evidence establishes a compact public control rhythm rather than a complete application grid: 4px control corners, 8px tab-panel corners, 4px/6px/8px/16px/20px/40px spacing values, and a 40px compact action height. The selected tab panel uses asymmetric `16px 16px 16px 40px` padding; research cards use `20px 40px`. These are component observations, not a mandate for separate product or documentation layouts.

## 6. Depth & Elevation

The retained components report `box-shadow: none`. Separation is provided by black/white contrast, translucent white or black fills, and the 4px/8px geometry. No general elevation scale is claimed.

## 7. Do's and Don'ts

### Do

- Use The Future only when it is available through a valid licence; keep its observed public display/body roles distinct from the mono label face.
- Keep the recorded public action treatment compact: 4px corners, black/white contrast, and mono action text.
- Treat cyan and lavender as the documented home-tab observations, with their selector/surface boundaries intact.
- Use flat containment where the retained components show `box-shadow: none`.

### Don't

- Do not substitute a system font and label it The Future or PP Neue Montreal Mono.
- Do not infer console, authenticated API, or Mintlify documentation components from the public marketing capture.
- Do not turn the selector-specific cyan/lavender tab fills into a general semantic colour system.
- Do not reintroduce the uncorroborated legacy blue primary, universal navy token, or subpixel pricing-tab values.

## 8. Responsive Behavior

No responsive breakpoint or mobile layout claim is retained: the supplied evidence records desktop-style computed components and two tab interactions, not a responsive audit. Preserve the observed 40px compact action and 72px tab measurements only in their captured public contexts.

## 9. Agent Prompt Guide

Design a public Together AI-inspired marketing section with a white canvas, black compact mono actions, The Future only when licensed, 4px control geometry, and flat surfaces. Use the documented cyan or lavender only for selector-specific selected tabs, not as a generic product palette. Do not invent authenticated-console, documentation, form-error, or motion patterns from this reference.

## 10. Voice & Tone

Together AI’s official language is direct, research-led, and open-community oriented: “Building the AI Native Cloud” and a full-stack platform for production AI. Its About page pairs delivery language—helping teams ship faster and scale reliably—with values including open and responsible development, empowerment of innovation, and model stewardship. [About](https://www.together.ai/about-us)

**Voice samples**
- *“Build what’s next on the AI Native Cloud”* — public home proposition. <!-- verified: together.ai home, 2026-07-13 -->
- *“Run, train, and serve open-source AI models on Together AI.”* — official documentation overview. <!-- verified: docs.together.ai/intro, 2026-07-13 -->
- *“We design a full-stack AI platform powered by cutting edge system research.”* — official mission statement. <!-- verified: together.ai/about-us, 2026-07-13 -->

## 11. Brand Narrative

Together AI’s first-party material frames the company around open and decentralized alternatives for AI infrastructure. In its 2023 seed announcement, co-founder and CEO Vipul Ved Prakash wrote that the founders saw the costs of GPU clusters concentrating foundation models within a small number of companies and wanted an open ecosystem to remain viable. [Seed announcement](https://www.together.ai/blog/seed-funding)

The current About page expresses that direction as the AI Native Cloud: a full-stack production-AI platform powered by systems research. It identifies Vipul Ved Prakash, Ce Zhang, Chris Ré, Tri Dao, and Percy Liang among its founders and lists open development, efficiency, curiosity, and model stewardship among its values. [About](https://www.together.ai/about-us)

## 12. Principles

1. **Open and responsible development.** *UI implication:* describe model and platform choices plainly; do not imply a closed-only ecosystem. [About](https://www.together.ai/about-us)
2. **Empower innovation.** *UI implication:* make the next developer/researcher action direct and legible rather than decorative. [About](https://www.together.ai/about-us)
3. **Do more with less.** *UI implication:* retain the captured flat, compact public chrome instead of adding unsupported ornament. [About](https://www.together.ai/about-us)
4. **Model stewardship.** *UI implication:* do not make unsupported safety, performance, or product-state claims. [About](https://www.together.ai/about-us)

## 13. Personas

Together AI’s official pages name developers, researchers, and teams as audiences for its platform. No first-party persona research, named user archetypes, or role-specific workflow evidence was supplied, so fictional personas are intentionally not created here. [Careers](https://www.together.ai/careers) · [Docs overview](https://docs.together.ai/intro)

## 14. States

Only one state is retained from the supplied computed evidence: a disabled public carousel arrow with `rgba(255, 255, 255, 0.12)` background, white text, 4px radius, and 40px size at `home::[data-omd-capture="38"]`. The home capture also records selected/tab-selected tab transitions. Empty, loading, error, success, quota, and authenticated product states were not observed and are not invented.

## 15. Motion & Easing

The supplied evidence records interaction kinds and selected/disabled outcomes, but no duration, easing, transition, or reduced-motion values. No motion tokens are claimed.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://www.together.ai/ (marketing computed styles + FontFaceSet), https://www.together.ai/about-us (corporate-marketing computed styles + official context), https://www.together.ai/brand (official brand guidance + computed styles), https://docs.together.ai/intro (documentation context only), https://www.together.ai/careers, https://www.together.ai/blog/seed-funding
**Tier 2 sources:** https://getdesign.md/together.ai/design-md (independent, explicitly not affiliated); https://styles.refero.design/style/461da0f0-fde6-46bc-8137-7eca006260a8 (independent style reference)
**Conflicts unresolved:** none

Tier 2 agrees on the black/white, pastel-tab, sharp-corner direction but does not override the supplied selector-level Tier 1 measurements.
