---
id: figma
name: Figma
country: US
category: design-tools
homepage: "https://www.figma.com"
primary_color: "#000000"
logo:
  type: simpleicons
  slug: figma
verified: "2026-07-12"
omd: "0.1"
ds:
  name: Figma Brand Guidelines
  url: "https://www.figma.com/using-the-figma-brand"
  type: brand
  description: Figma's official trademark, logo, and brand-use guidance; public product pages are measured separately for UI tokens.
verification_v2:
  schema: 2
  checked: "2026-07-12"
  surfaces:
    - { id: home, kind: marketing-product, url: "https://www.figma.com/ko-kr/", inspected: "2026-05-15" }
    - { id: design, kind: marketing-product, url: "https://www.figma.com/ko-kr/design/", inspected: "2026-05-15" }
    - { id: brand, kind: official-brand, url: "https://www.figma.com/using-the-figma-brand", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.figma.com/ko-kr/", captured: "2026-05-15" }
    - { id: design-live, kind: product-surface, url: "https://www.figma.com/ko-kr/design/", captured: "2026-05-15" }
    - { id: brand-official, kind: official-doc, url: "https://www.figma.com/using-the-figma-brand", captured: "2026-07-12" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home_evidence { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-05-15" }
    "tokens.colors.canvas": *home_evidence
    "tokens.colors.border": *home_evidence
    "tokens.colors.indigo-action": *home_evidence
    "tokens.colors.focus": *home_evidence
    "tokens.colors.on-primary": *home_evidence
    "tokens.typography.family.ui": *home_evidence
    "tokens.typography.family.mono": *home_evidence
    "tokens.typography.hero.size": *home_evidence
    "tokens.typography.hero.weight": *home_evidence
    "tokens.typography.hero.lineHeight": *home_evidence
    "tokens.typography.hero.tracking": *home_evidence
    "tokens.typography.hero.use": *home_evidence
    "tokens.typography.section.size": *home_evidence
    "tokens.typography.section.weight": *home_evidence
    "tokens.typography.section.lineHeight": *home_evidence
    "tokens.typography.section.tracking": *home_evidence
    "tokens.typography.section.use": *home_evidence
    "tokens.typography.body.size": &design_evidence { surface_id: design, source_id: design-live, method: live-inspect, captured: "2026-05-15" }
    "tokens.typography.body.weight": *design_evidence
    "tokens.typography.body.lineHeight": *design_evidence
    "tokens.typography.body.tracking": *design_evidence
    "tokens.typography.body.use": *design_evidence
    "tokens.typography.mono-label.size": *home_evidence
    "tokens.typography.mono-label.weight": *home_evidence
    "tokens.typography.mono-label.lineHeight": *home_evidence
    "tokens.typography.mono-label.tracking": *home_evidence
    "tokens.typography.mono-label.use": *home_evidence
    "tokens.spacing.xs": *home_evidence
    "tokens.spacing.sm": *home_evidence
    "tokens.spacing.md": *home_evidence
    "tokens.spacing.lg": *home_evidence
    "tokens.spacing.xl": *home_evidence
    "tokens.rounded.control": *home_evidence
    "tokens.rounded.hero": *design_evidence
    "tokens.rounded.segment": *home_evidence
    "tokens.rounded.full": *home_evidence
    "tokens.shadow.panel": *design_evidence
    "tokens.components.primary-action.type": *home_evidence
    "tokens.components.primary-action.bg": *home_evidence
    "tokens.components.primary-action.fg": *home_evidence
    "tokens.components.primary-action.radius": *home_evidence
    "tokens.components.primary-action.padding": *home_evidence
    "tokens.components.primary-action.height": *home_evidence
    "tokens.components.primary-action.font": *home_evidence
    "tokens.components.primary-action.focus": *home_evidence
    "tokens.components.primary-action.use": *home_evidence
    "tokens.components.indigo-action.type": *home_evidence
    "tokens.components.indigo-action.bg": *home_evidence
    "tokens.components.indigo-action.fg": *home_evidence
    "tokens.components.indigo-action.radius": *home_evidence
    "tokens.components.indigo-action.padding": *home_evidence
    "tokens.components.indigo-action.height": *home_evidence
    "tokens.components.indigo-action.font": *home_evidence
    "tokens.components.indigo-action.states": *home_evidence
    "tokens.components.indigo-action.use": *home_evidence
    "tokens.components.outline-action.type": *design_evidence
    "tokens.components.outline-action.bg": *design_evidence
    "tokens.components.outline-action.fg": *design_evidence
    "tokens.components.outline-action.radius": *design_evidence
    "tokens.components.outline-action.padding": *design_evidence
    "tokens.components.outline-action.height": *design_evidence
    "tokens.components.outline-action.font": *design_evidence
    "tokens.components.outline-action.states": *design_evidence
    "tokens.components.outline-action.use": *design_evidence
    "tokens.components.product-segment.type": *home_evidence
    "tokens.components.product-segment.bg": *home_evidence
    "tokens.components.product-segment.fg": *home_evidence
    "tokens.components.product-segment.radius": *home_evidence
    "tokens.components.product-segment.padding": *home_evidence
    "tokens.components.product-segment.height": *home_evidence
    "tokens.components.product-segment.font": *home_evidence
    "tokens.components.product-segment.states": *home_evidence
    "tokens.components.product-segment.use": *home_evidence
    "tokens.components.round-icon.type": *design_evidence
    "tokens.components.round-icon.bg": *design_evidence
    "tokens.components.round-icon.fg": *design_evidence
    "tokens.components.round-icon.radius": *design_evidence
    "tokens.components.round-icon.size": *design_evidence
    "tokens.components.round-icon.states": *design_evidence
    "tokens.components.round-icon.use": *design_evidence
tokens:
  source: reconciled
  extracted: "2026-07-12"
  note: "Current verified public marketing/product pages. A July automated recapture was blocked before producing evidence, so live computed claims retain the still-fresh May proof and current official brand page was rechecked separately."
  colors:
    primary: "#000000"
    canvas: "#ffffff"
    border: "#ebebeb"
    indigo-action: "#4d49fc"
    focus: "#0d99ff"
    on-primary: "#ffffff"
  typography:
    family: { ui: "figmaSans", mono: "figmaMono" }
    hero: { size: 86, weight: 400, lineHeight: 1, tracking: -1.72, use: "Public product-marketing hero" }
    section: { size: 64, weight: 400, lineHeight: 1.1, tracking: -0.96, use: "Public feature section heading" }
    body: { size: 16, weight: 330, lineHeight: 1.42, tracking: -0.14, use: "Public body, navigation, and action copy" }
    mono-label: { size: 18, weight: 400, lineHeight: 1.3, tracking: 0.54, use: "Uppercase technical signpost" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 24, xl: 32 }
  rounded: { control: 8, hero: 16, segment: 50, full: 9999 }
  shadow:
    panel: "0 24px 70px rgba(0,0,0,0.1)"
  components_harvested: true
  components:
    primary-action: { type: button, bg: "#000000", fg: "#ffffff", radius: "8px", padding: "12px 21px", height: "49px", font: "16px / 330", focus: "2px dashed #0d99ff", use: "Default public get-started action" }
    indigo-action: { type: button, bg: "#4d49fc", fg: "#ffffff", radius: "8px", padding: "12px 20px", height: "49px", font: "18px / 480", states: "default captured; no hover token promoted", use: "Alternate prominent public hero action" }
    outline-action: { type: button, bg: "transparent", fg: "#000000", radius: "8px", padding: "12px 21px", height: "49px", font: "16px / 400", states: "default captured; no hover token promoted", use: "Current sales-contact and secondary action" }
    product-segment: { type: tab, bg: "rgba(0,0,0,0.08)", fg: "#000000", radius: "50px", padding: "8px 18px 10px", height: "43px", font: "18px / 480", states: "active and inactive variants captured", use: "Product-area segmented navigation" }
    round-icon: { type: button, bg: "#000000", fg: "#ffffff", radius: "9999px", size: "40px", states: "default captured; light and dark surface variants remain local", use: "Circular carousel/navigation action on public design pages" }
---

# Design System Inspiration of Figma

## 1. Visual Theme & Atmosphere

Figma is a collaborative design platform whose public product story now spans interface design, prototyping, FigJam, developer handoff, and AI-assisted creation. Its public pages deliberately let colorful creative output carry the spectacle while the surrounding interaction chrome stays highly legible: white canvas, black type and actions, occasional indigo emphasis, precise custom type, and a small geometry vocabulary that separates 8px controls from 50px segmented pills and circular tool-like actions. That restraint makes the page feel like a workspace framing other people's work rather than a brand campaign competing with it.

The custom `figmaSans` variable family provides unusually fine weight control—values such as 330 and 480 appear in live controls—and `figmaMono` marks technical signposts with positive tracking. This reference applies those measurements only to the inspected public Figma pages. It does not claim that authenticated editor chrome, desktop clients, FigJam canvases, or generated product content share every marketing value. The official brand page governs trademark and logo use separately from these UI measurements.

**Key Characteristics:**
- White canvas and black interaction chrome with a verified indigo alternate action
- `figmaSans` for public UI and `figmaMono` for technical labels
- Fine variable-font weights rather than only regular/bold
- 8px standard actions, 16px large hero controls, 50px segmented tabs, circular icon actions
- Dashed blue focus treatment that visually echoes selection tooling

## 2. Color Palette & Roles

- **Primary chrome** (`#000000`): text and default filled public actions.
- **Canvas / inverse** (`#ffffff`): page canvas and text on black actions.
- **Border** (`#ebebeb`): resolved light separation on white.
- **Indigo action** (`#4d49fc`): captured alternate prominent action, not the universal brand primary.
- **Focus** (`#0d99ff`): dashed action focus outline.

Colors inside screenshots, templates, gradients, and user-created artifacts are content evidence, not reusable interface tokens. The earlier purple, pink, lime, cyan, green, lavender, and sage set is therefore omitted from the machine palette.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Current first-party public Figma pages establish `figmaSans` and `figmaMono` roles. |
| Live surface-use | May live proof captured both families and their computed roles; the evidence remains within the 90-day product-surface TTL. |
| Official distributed asset | The webfont files are product assets and are not assumed redistributable. |
| Declared-only | SF Pro, system, and mono fallbacks do not become Figma identity fonts. |
| Unresolved | Authenticated editor, desktop-client, and platform-specific overrides remain unresolved. |

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Hero | figmaSans | 86px | 400 | 1.00 | -1.72px |
| Section | figmaSans | 64px | 400 | 1.10 | -0.96px |
| Body/action | figmaSans | 16px | 330–400 | 1.42 | -0.14px |
| Technical label | figmaMono | 18px | 400 | 1.30 | 0.54px |

## 4. Component Stylings

### Current verified components

#### Primary action
- Black / white, 8px radius, `12px 21px`, 49px height
- figmaSans 16px/330; `2px dashed #0d99ff` focus

#### Indigo action
- `#4d49fc` / white, 8px radius, `12px 20px`, 49px
- figmaSans 18px/480

#### Outline action
- Transparent / black, 8px radius, `12px 21px`, 49px
- Used for current sales-contact and secondary paths

#### Product segment
- 50px radius, `8px 18px 10px`, 43px
- Active `rgba(0,0,0,0.08)` and inactive white variants captured

#### Round icon action
- 40×40 black circle with white icon on the design surface
- Light/dark translucent variants remain surface-local rather than one universal token

Inputs, community cards, editor panels, toast states, and template colors are absent from canonical components because current evidence does not establish them at the same boundary.

## 5. Layout Principles

- Use wide editorial sections as neutral frames for colorful product output.
- Keep navigation and conversion geometry compact; reserve large pills for segmented product switching.
- Let type scale and whitespace establish hierarchy before adding containers.
- Never copy content colors from screenshots into the surrounding UI palette.

## 6. Depth & Elevation

Most public chrome is flat. A measured panel shadow (`0 24px 70px rgba(0,0,0,0.1)`) may separate large showcased content; it is not a default card shadow.

## 7. Do's and Don'ts

### Do
- Use black/white public chrome and preserve the observed control geometry.
- Keep figmaMono for structural signposts rather than paragraphs.
- Treat official brand rules and public UI measurements as separate evidence domains.

### Don't
- Do not make purple or a screenshot color the universal UI primary.
- Do not call every rounded control a 50px pill.
- Do not claim editor inputs, panels, or states from marketing-page resemblance.

## 8. Responsive Behavior

Public page layouts reduce section scale and rearrange product media while retaining the black/white interaction system. Exact authenticated editor breakpoints and desktop-client behavior remain unresolved.

## 9. Agent Prompt Guide

> Build a precise collaborative-design marketing surface using a white canvas, black type and 8px actions, figmaSans with subtle variable weights, figmaMono technical labels, restrained indigo emphasis, and a 50px segmented product switcher. Keep colorful work inside content frames; omit unverified editor chrome.

## 10. Voice & Tone

Figma's public voice is collaborative, action-oriented, and maker-literate. Explain what teams can create together in plain product language. Product guidance should distinguish creating, prototyping, presenting, reviewing, and handing work to development so that each action remains legible. Brand guidance can be protective and precise without sounding legalistic in ordinary UI. Error and permission copy should identify the blocked action and available recovery without blaming collaborators. Prefer concrete verbs such as design, prototype, build, share, and iterate; avoid claiming creative outcomes or speed improvements without evidence.

## 11. Brand Narrative

Figma's visual system positions the product as infrastructure for other people's ideas. Neutral public chrome, technical typography, and tool-like focus/selection cues provide a stable frame, while vivid examples demonstrate the breadth of what can be made. Official brand guidance protects the identity, but the product remains the stage rather than the decoration. This balance reflects Figma's evolution from a collaborative interface-design tool into a broader environment for prototyping, presentation, developer handoff, and adjacent making workflows. The public pages use black-and-white controls to establish product authority, then allow files, templates, illustrations, and user work to introduce color. figmaSans supplies expressive editorial scale; figmaMono connects the story to precise interface work. The result is recognizably Figma without turning a flexible creation platform into a single visual style.

## 12. Principles

1. **Make collaboration visible.** Product stories should show shared work and handoff, not solitary decoration.
2. **Frame creative output neutrally.** Black and white chrome lets user work carry color.
3. **Precision creates hierarchy.** Fine type weights, tracking, and component geometry matter.
4. **Evidence stays surface-local.** Marketing, editor, desktop, and brand assets do not silently overwrite one another; reuse only the role a source actually verifies.

## 13. Personas

Public product material establishes task contexts only:
- A product designer creating and prototyping an interface with collaborators.
- A developer inspecting design intent and preparing implementation.
- A cross-functional teammate reviewing, commenting, or presenting shared work.

Project-specific names, ages, team sizes, subscription tiers, and productivity goals are intentionally unspecified and must come from the product brief.

## 14. States

Action focus and product-segment active/inactive variants are verified. Hover, loading, empty, error, success, editor selection, and AI-generation states remain absent from the canonical machine set.

## 15. Motion & Easing

No reusable current duration or easing token is promoted. Public transitions do not establish editor motion behavior.

---

**Verified:** 2026-07-12 (omd:migrate)
**Tier 1 sources:** https://www.figma.com/ko-kr/ ; https://www.figma.com/ko-kr/design/ ; https://www.figma.com/using-the-figma-brand
**Tier 2 attempts:** getdesign.md/figma supplied only a generic directory snippet; Refero component samples were used only for conflict discovery and never overrode Tier 1
**Conflicts unresolved:** none
