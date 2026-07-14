---
id: cursor
name: Cursor
country: US
category: developer-tools
homepage: "https://www.cursor.com"
primary_color: "#26251e"
logo:
  type: simpleicons
  slug: cursor
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Cursor Brand
  url: "https://cursor.com/en-US/brand"
  type: brand
  description: Official brand guidance for Cursor names and distributed logo, icon, and avatar assets.
  og_image: "https://cursor.com/public/opengraph-image.png"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-marketing, url: "https://cursor.com/", inspected: "2026-07-13" }
    - { id: surface-2, kind: duplicate-public-marketing-snapshot, url: "https://cursor.com/", inspected: "2026-07-13" }
    - { id: surface-3, kind: localized-public-marketing, url: "https://cursor.com/en-US", inspected: "2026-07-13" }
  sources:
    - { id: public-capture, kind: product-surface, url: "https://cursor.com/", captured: "2026-07-13" }
    - { id: brand-context, kind: official-doc, url: "https://cursor.com/en-US/brand", captured: "2026-07-13" }
    - { id: docs-context, kind: official-doc, url: "https://cursor.com/docs", captured: "2026-07-13" }
    - { id: changelog-context, kind: official-doc, url: "https://cursor.com/en-US/changelog/1-0", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: public-capture, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.surface": *home
    "tokens.colors.surface-muted": *home
    "tokens.colors.surface-emphasis": *home
    "tokens.colors.surface-selected": *home
    "tokens.colors.accent": *home
    "tokens.colors.on-primary": *home
    "tokens.colors.gold": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.action-sm.size": *home
    "tokens.typography.action-sm.weight": *home
    "tokens.typography.action-sm.lineHeight": *home
    "tokens.typography.action-sm.tracking": *home
    "tokens.typography.action-sm.use": *home
    "tokens.spacing.xxs": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.xl": *home
    "tokens.spacing.xxl": *home
    "tokens.rounded.sm": *home
    "tokens.rounded.md": *home
    "tokens.rounded.full": *home
    "tokens.components.marketing-card.type": *home
    "tokens.components.marketing-card.bg": *home
    "tokens.components.marketing-card.radius": *home
    "tokens.components.marketing-card.padding": *home
    "tokens.components.marketing-card.font": *home
    "tokens.components.marketing-card.use": *home
tokens:
  source: live-extract
  extracted: "2026-07-13"
  colors:
    primary: "#26251e"
    canvas: "#f7f7f4"
    surface: "#f2f1ed"
    surface-muted: "#e6e5e0"
    surface-emphasis: "#ebeae5"
    surface-selected: "#e1e0db"
    accent: "#f54e00"
    on-primary: "#f7f7f4"
    gold: "#c08532"
  typography:
    family: { ui: "CursorGothic" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Current public marketing body, cards, and primary actions" }
    action-sm: { size: 14, weight: 400, lineHeight: 1, tracking: 0.14, use: "Compact public actions" }
  spacing: { xxs: 2, xs: 3, sm: 4, md: 6, lg: 8, xl: 12, xxl: 16 }
  rounded: { sm: 4, md: 8, full: 9999 }
  components:
    marketing-card: { type: card, bg: "#f2f1ed", radius: "4px", padding: "15.9px 17.5px 20px", font: "16px / 400 / CursorGothic", use: "Public marketing feature card" }
  components_harvested: true
---

# Design System Inspiration of Cursor

## 1. Visual Theme & Atmosphere

Cursor is an AI code editor whose public product story spans autocomplete, editing, agent workflows, and enterprise controls. Its current public home presents that technical scope through a restrained warm palette: paper-like light surfaces, an ink-brown primary, and an orange link accent rather than the high-contrast blue often associated with developer tools. The official brand guide treats the name as simply “Cursor” and distributes a family of 2D/2.5D logos, app icons, and avatars, while the public product navigation now foregrounds Agents, Cloud, CLI, Mobile, Automations, Review, and Tab. This reference records the present public marketing surface—not the authenticated editor or dashboard—and keeps its embedded editor-like demonstrations separate from product-app claims.

The observed system is compact and deliberately repetitive: `#f7f7f4` canvas, `#26251e` text and primary actions, 4px feature cards, and very large pill radii for compact actions. `CursorGothic` is the dominant rendered public family. Public embedded demos introduce their own local chrome, so they are not evidence that every observed control is a general Cursor application token.

### Do

- Use the observed warm canvas `#f7f7f4`, primary ink `#26251e`, and warm card surfaces before introducing a neutral gray.
- Use a full pill only for action patterns with matching captured geometry; use 4px for the observed public feature cards.
- Keep the orange `#f54e00` as the observed text-link accent, not a substitute for every filled action.

### Don't

- Do not treat the public homepage or its embedded examples as an authenticated Cursor editor specification.
- Do not add hover, pressed, focus, error, loading, or motion values from class names alone; this capture contains no interaction event records.
- Do not substitute a system font where `CursorGothic` is called for, or promote isolated demo fonts to the general UI family.

## 2. Color Palette & Roles

### Current public marketing colors

- **Primary ink** (`#26251e`): observed text, borders, and filled public action background.
- **Canvas** (`#f7f7f4`): observed homepage body and inverse action text.
- **Card surface** (`#f2f1ed`): observed public feature card and menu surface.
- **Muted surface** (`#e6e5e0`): observed compact secondary action and avatar/pill container surface.
- **Emphasis surface** (`#ebeae5`): observed embedded-demo surface.
- **Selected surface** (`#e1e0db`): observed disabled compact-control background in the public embedded demo.
- **Accent link** (`#f54e00`): observed tertiary-link text and border.
- **Gold** (`#c08532`): observed in a small embedded-demo pill; keep this bounded rather than treating it as the global accent.

### Observed border treatment

- **Primary action border** (`#26251e`, 1px): observed on the public filled action.
- **Ghost action border** (`oklab(0.263084 -0.00230259 0.0124794 / 0.2)`, 1px): observed on the compact public ghost action.
- **Embedded selected-tab edge** (`oklab(0.263084 -0.00230259 0.0124794 / 0.1)`, right edge): observed in a static embedded demo.

No generic error or success token is retained: the supplied current capture does not establish one.

## 3. Typography Rules

### Evidence classes

- **Live computed public family — `CursorGothic`:** 643 visible computed uses across the captured public homepage records, including headings, body, actions, cards, tabs, menus, and toggles. The supplied `FontFaceSet` evidence reports it loaded with four Cursor-hosted WOFF2 sources. This is the only promoted general public UI/content family.
- **Live computed but bounded embedded-demo families — `Lato` and `EB Garamond`:** respectively 24 and 19 visible uses, each with loaded FontFace/source corroboration. Their observed contexts are embedded examples within the public marketing page, not evidence of Cursor’s general UI family.
- **Live computed but isolated — `berkeleyMono`:** one visible input use and two loaded source URLs. It is retained as a narrow observed technical/demo occurrence, not a general family token.
- **System values — `system-ui` and `-apple-system`:** visible operating-system stacks, not Cursor-owned type assets and not substitutes for a named family.
- **Declared-only assets:** `CursorGothic Fallback`, `CursorIcons16`, and the captured KaTeX families have declarations but no visible computed use in this bundle. They are not promoted to typography tokens.
- **Official distributed brand assets:** the official brand page distributes logos, icons, and avatars, not a public font package or font licence. No public licence for the Cursor-hosted font files was located; the embedded page files are evidence of live delivery, not permission to redistribute them.
- **Unresolved legacy claim:** the prior `jjannon` body-family claim has no supporting current computed-use/FontFaceSet evidence in the supplied collector and is omitted.

### Current public hierarchy samples

| Role | Family | Size | Weight | Line height | Boundary |
|---|---|---:|---:|---:|---|
| Public body/card/action | CursorGothic | 16px | 400 | 24px | Repeated current public marketing use |
| Compact public action | CursorGothic | 14px | 400 | 14px | Full-pill action and compact header patterns |
| Embedded product-demo label | system-ui | 13px | 400 | 17.3333px | Local demo chrome, not a named-brand font claim |
| Embedded technical input | berkeleyMono | not generalized | not generalized | not generalized | One observed visible use only |

## 4. Component Stylings

All claims below preserve the supplied collector’s selector and surface provenance. `home`, `surface-2`, and `surface-3` are public homepage capture records (`https://cursor.com/` and `https://cursor.com/en-US`); no authenticated product application or documentation chrome was captured. The top-level interaction array is empty, so static `selected`, `unchecked`, and `disabled` markup is not a behavioral state specification.

### Public marketing actions

**Filled primary action — `home::[data-omd-capture="64"]`**
- Background: `#26251e`
- Text: `#f7f7f4`
- Border: `1px solid #26251e`
- Radius: `3.35544e+07px` (full pill)
- Padding: `12.48px 21.6px 12.8px`
- Font: `16px / 400 / CursorGothic`
- Use: Public homepage primary action

**Compact filled action — `home::[data-omd-capture="8"]`**
- Background: `#26251e`
- Text: `#f7f7f4`
- Border: `1px solid #26251e`
- Radius: `3.35544e+07px` (full pill)
- Padding: `5.6px 10.5px 5.88px`
- Font: `14px / 400 / CursorGothic`
- Use: Public compact/header action

**Compact secondary action — `home::[data-omd-capture="101"]`**
- Background: `#e6e5e0`
- Text: `#26251e`
- Border: `1px solid oklab(0.263084 -0.00230259 0.0124794 / 0.025)`
- Radius: `3.35544e+07px` (full pill)
- Padding: `5.6px 10.5px 5.88px`
- Font: `14px / 400 / CursorGothic`
- Use: Public compact secondary action

**Compact ghost action — `home::[data-omd-capture="7"]`**
- Background: transparent
- Text: `#26251e`
- Border: `1px solid oklab(0.263084 -0.00230259 0.0124794 / 0.2)`
- Radius: `3.35544e+07px` (full pill)
- Padding: `5.6px 10.5px 5.88px`
- Font: `14px / 400 / CursorGothic`
- Use: Public compact ghost action

**Tertiary text action — `home::[data-omd-capture="18"]`**
- Background: transparent
- Text: `#f54e00`
- Radius: `0px`
- Font: `16px / 400 / CursorGothic`
- Use: Public marketing text link

### Public marketing cards

**Feature card — `home::[data-omd-capture="53"]`**
- Background: `#f2f1ed`
- Radius: `4px`
- Padding: `15.9px 17.5px 20px`
- Font: `16px / 400 / CursorGothic`
- Use: Public marketing feature card

**Large feature card — `home::[data-omd-capture="9"]`**
- Background: `#f2f1ed`
- Radius: `4px`
- Padding: `17.5px`
- Font: `16px / 400 / CursorGothic`
- Use: Public large feature-card wrapper

### Embedded public-demo chrome

**Selected tab — `home::[data-omd-capture="11"]`**
- Background: `#f7f7f4`
- Text: `#26251e`
- Border: `0px 1px 0px 0px solid oklab(0.263084 -0.00230259 0.0124794 / 0.1)`
- Padding: `0px 8px 1px 12px`
- Font: `14px / 400 / CursorGothic`
- Selected: static selected markup in the public embedded demo
- Use: Embedded marketing product-demo tab

**Prompt input — `home::[data-omd-capture="14"]`**
- Background: transparent
- Text: `#26251e`
- Padding: `8px 8px 6px`
- Font: `13px / 400 / system-ui`
- Use: Embedded marketing product-demo input

**Disabled compact control — `home::[data-omd-capture="17"]`**
- Background: `#e1e0db`
- Text: `oklab(0.263084 -0.00230259 0.0124794 / 0.6)`
- Radius: `3.35544e+07px` (full pill)
- Disabled: static disabled markup in the public embedded demo
- Use: Embedded marketing product-demo compact control

No hover, pressed, focus, error, menu-opening, or toast variant is recorded as observed interaction evidence.

## 5. Layout Principles

- The captured public homepage body is a `#f7f7f4` canvas with 52px top padding at the 1440×900 collector viewport.
- Public feature-card variants repeatedly use 4px corners with card-local padding around 15–20px.
- Public compact actions repeat a full-pill radius with either 14px/14px or 16px/16px CursorGothic type, depending on the captured action scale.
- The evidence has one desktop viewport and duplicate locale records. It does not establish a responsive breakpoint system, page-wide grid contract, or authenticated-product layout.

## 6. Depth & Elevation

Current evidence establishes tonal separation through the warm canvas and `#f2f1ed`, `#e6e5e0`, `#ebeae5`, and `#e1e0db` surfaces. It also establishes the explicitly captured oklab borders on compact public actions and the embedded selected tab. The supplied samples do not justify a reusable shadow scale, modal elevation rule, or generic focus shadow token.

## 7. Interaction & Motion

The collector reports `interactionCount: 0` and an empty `interactions` array. Some captured class strings contain transition or pseudo-class names, but no computed before/after observation ties them to a trigger or a visual result. Therefore this reference preserves only static markup markers in §4 and defines no reusable hover, focus, pressed, animation, duration, or easing token.

## 8. Responsive Behavior

The supplied evidence is limited to a 1440×900 capture viewport and repeated public homepage records. No mobile, breakpoint, drawer, or navigation-collapse behavior is established. Keep responsive behavior unresolved rather than deriving it from framework class names.

## 9. Agent Prompt Guide

- Use `#f7f7f4` canvas, `#26251e` primary ink, and `#f2f1ed` public feature-card surfaces.
- For a public primary action, use `#26251e` / `#f7f7f4`, a 1px `#26251e` border, full-pill radius, `12.48px 21.6px 12.8px` padding, and `16px / 400 / CursorGothic`.
- For a compact secondary action, use `#e6e5e0`, `#26251e`, the observed 1px low-alpha oklab border, full-pill radius, and `5.6px 10.5px 5.88px` padding.
- Use `#f54e00` for observed tertiary text-link treatment; do not claim it is a universal action or error color.
- Do not invent interaction behavior, responsive values, dashboard controls, or typography beyond the evidence classes in §3.

## 10. Voice & Tone

Current first-party product language is direct and task-oriented: Cursor’s official documentation describes an AI-powered code editor that understands a codebase and lets a user describe what to build or change; the product’s 1.0 release names concrete additions such as Bugbot, Background Agent, Jupyter support, memories, and one-click MCP setup. Keep public copy specific to an engineering action, feature, or control.

| Context | Observed direction |
|---|---|
| Product explanation | Name the coding task or workflow before the AI capability. |
| CTA | Use a concise imperative such as the official public “Download” or “Get Cursor.” |
| Release communication | Lead with a named release and concrete features, as in the Cursor 1.0 changelog. |

## 11. Brand Narrative

Cursor is presented by its own documentation as an AI-powered code editor that understands a user’s codebase and helps with natural-language coding tasks. The current public product ecosystem extends that editor-centered proposition across Agents, Cloud, CLI, Mobile, Automations, Review, and Tab. Cursor’s official 1.0 release framed its evolution around code review, Background Agent access, Jupyter editing, memories, MCP setup, and a dashboard rather than around a change to a public visual-token specification.

The public brand guide is intentionally practical: it supplies ways to represent Cursor consistently, asks third parties to call the product “Cursor” rather than “Cursor AI” or “Cursor Code,” and distributes logo, icon, and avatar variants. It does not publish a public font licence or an official design-token system, so the typography and component facts in this document remain bounded to the supplied live collector evidence.

## 12. Principles

1. **Name the product Cursor.** *UI implication:* use the official product name; do not extend it to “Cursor AI” or “Cursor Code.”
2. **Make engineering work concrete.** *UI implication:* describe a coding action, tool, model, or workflow rather than relying on generic AI claims.
3. **Keep public marketing warm and restrained.** *UI implication:* start from the observed cream/ink/orange hierarchy and reserve accents for their recorded roles.
4. **Separate product claims from promotional demos.** *UI implication:* do not turn the homepage’s embedded editor-like controls into a full authenticated-app component system.

## 13. Personas

The official public materials support stakeholder groups rather than named fictional users: individual developers getting started with Tab, Inline Edit, and Agent; developers using an agent with tools and terminal commands; and enterprise teams managing model access, MCP controls, and system-level rules. These are evidence-backed groups, not synthetic personas.

- **Individual developer:** learns core editor workflows such as autocomplete, inline edits, and agent chat through official quickstart material.
- **Agent workflow user:** uses Cursor’s assistant for complex coding tasks, terminal commands, and code editing.
- **Engineering organization administrator:** configures controls and privacy/security settings for teams at scale.

## 14. States

Only three static markers appear in the supplied public marketing capture: a selected embedded-demo tab, an unchecked embedded-demo toggle, and disabled compact controls. They do not establish product state behavior. Empty, loading, error, success, skeleton, and recovery treatments are unresolved for the authenticated editor and dashboard.

## 15. Motion & Easing

No duration, easing curve, or reduced-motion behavior is promoted. The capture includes no interaction events; CSS class names that mention transitions are not sufficient evidence of a reusable motion rule.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://cursor.com/`; `https://cursor.com/en-US`; `https://cursor.com/en-US/brand`; `https://cursor.com/docs`; `https://cursor.com/en-US/changelog/1-0`; supplied `artifacts/reference-evidence/cursor.json`.
**Tier 2 sources:** `https://getdesign.md/cursor` (directory record only); `https://styles.refero.design/?q=Cursor` (attempted; no usable result returned).
**Conflicts unresolved:** none

Tier 2’s “sleek dark interface, gradient accents” catalog summary conflicts with the supplied current public warm-surface evidence and is not used.
