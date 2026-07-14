---
id: palantir
name: Palantir Blueprint
country: US
category: developer-tools
homepage: "https://blueprintjs.com/"
primary_color: "#2d72d2"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=blueprintjs.com&sz=128"
verified: "2026-07-14"
omd: "0.1"
ds:
  name: Blueprint
  url: "https://blueprintjs.com/docs/"
  type: system
  description: "Palantir's open-source React UI toolkit for complex, data-dense desktop web interfaces."
verification_v2:
  schema: 2
  checked: "2026-07-14"
  surfaces:
    - { id: home, kind: public-product, url: "https://blueprintjs.com/", inspected: "2026-07-13" }
    - { id: docs, kind: official-documentation, url: "https://blueprintjs.com/docs/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://blueprintjs.com/", captured: "2026-07-13" }
    - { id: docs-live, kind: official-doc, url: "https://blueprintjs.com/docs/", captured: "2026-07-13" }
    - { id: blueprint-repository, kind: official-doc, url: "https://github.com/palantir/blueprint", captured: "2026-07-14" }
    - { id: blueprint-license, kind: license, url: "https://github.com/palantir/blueprint/blob/develop/LICENSE", captured: "2026-07-14" }
    - { id: palantir-values, kind: official-doc, url: "https://www.palantir.com/careers/infrastructure", captured: "2026-07-14" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.dark-canvas": *home
    "tokens.colors.on-primary": *home
    "tokens.typography.landing-title.size": *home
    "tokens.typography.landing-title.weight": *home
    "tokens.typography.landing-title.lineHeight": *home
    "tokens.typography.landing-title.use": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *home
    "tokens.rounded.control": *home
    "tokens.colors.foreground": &docs { surface_id: docs, source_id: docs-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.muted": *docs
    "tokens.colors.link": *docs
    "tokens.colors.canvas": *docs
    "tokens.typography.docs-title.size": *docs
    "tokens.typography.docs-title.weight": *docs
    "tokens.typography.docs-title.lineHeight": *docs
    "tokens.typography.docs-title.use": *docs
    "tokens.typography.docs-body.size": *docs
    "tokens.typography.docs-body.weight": *docs
    "tokens.typography.docs-body.lineHeight": *docs
    "tokens.typography.docs-body.use": *docs
    "tokens.spacing.xl": *docs
    "tokens.rounded.sharp": *docs
    "tokens.rounded.round": *docs
    "tokens.shadow.docs-card": *docs
    "tokens.components.docs-welcome-card.type": *docs
    "tokens.components.docs-welcome-card.bg": *docs
    "tokens.components.docs-welcome-card.fg": *docs
    "tokens.components.docs-welcome-card.radius": *docs
    "tokens.components.docs-welcome-card.padding": *docs
    "tokens.components.docs-welcome-card.height": *docs
    "tokens.components.docs-welcome-card.shadow": *docs
    "tokens.components.docs-welcome-card.font": *docs
    "tokens.components.docs-welcome-card.use": *docs
tokens:
  source: reconciled
  extracted: "2026-07-14"
  note: "Machine tokens are limited to the supplied Blueprint landing and documentation capture. The operating-system stack is not a named Blueprint UI family; declared icon fonts, Palantir corporate material, and repository context remain separate evidence domains."
  colors:
    primary: "#2d72d2"
    dark-canvas: "#111418"
    on-primary: "#ffffff"
    foreground: "#1c2127"
    muted: "#5f6b7c"
    link: "#215db0"
    canvas: "#ffffff"
  typography:
    landing-title: { size: 28, weight: 400, lineHeight: 33.6, use: "Observed landing h1; computed operating-system stack, not a named Blueprint family" }
    docs-title: { size: 36, weight: 600, lineHeight: 40, use: "Observed public Docs h1; computed operating-system stack, not a named Blueprint family" }
    docs-body: { size: 16, weight: 400, lineHeight: 24, use: "Observed public Docs body paragraphs; computed operating-system stack, not a named Blueprint family" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 }
  rounded: { sharp: 0, control: 4, round: 30 }
  shadow:
    docs-card: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 0px 5px 0px"
  components:
    docs-welcome-card: { type: card, bg: "oklch(1 0 257.113)", fg: "#215db0", radius: 4, padding: "20px", height: 122, shadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 0px 5px 0px", font: "14px / 400 / 18.0013px operating-system stack", use: "Static public Docs welcome card; selector surface-2::div.bp6-card.bp6-elevation-0.bp6-interactive" }
  components_harvested: true
---

# Design System Inspiration of Palantir Blueprint

## 1. Visual Theme & Atmosphere

Blueprint is Palantir’s open-source React toolkit for complex, data-dense desktop web interfaces. Its public face is unusually direct for a design-system site: the landing page presents a dark wireframe field, sparse white type, and restrained actions, while the documentation moves immediately into a light, compact reading environment with navigable component material. That split is purposeful rather than a universal palette: the captured landing establishes a dark product identity, and the captured Docs establish an information-dense working surface. Blueprint originated as a Palantir project and is now maintained as an open-source library; the current documentation presents Blueprint v6.x as available, making versioned migration and maintained component infrastructure part of its present expression. Palantir’s broader engineering culture—ideas judged on merit, ownership of outcomes, and mission focus—gives useful organizational context, but it does not turn corporate-page styling into Blueprint tokens.

- **Desktop workbench, not a lifestyle landing:** Blueprint’s own documentation says it is optimized for complex, data-dense desktop applications and is not mobile-first.
- **Dark entry, light reference:** `#111418` is the supplied landing body background; public Docs use white card/canvas samples with `#1c2127` text.
- **Measured utility:** the captured Docs card is 122px high with 20px padding, a 4px radius, and a low, double-layer outline/shadow rather than promotional elevation.

## 2. Color Palette & Roles

### Selector-backed captured values

- **Primary blue** (`#2d72d2`): observed as the filled landing action background; it is retained as the canonical primary color only for this captured Blueprint scope.
- **Dark landing canvas** (`#111418`): observed on the public landing body; it is not evidence that every Blueprint application uses a dark canvas.
- **On-primary / landing white** (`#ffffff`): observed on the filled landing action and landing headline.
- **Docs foreground** (`#1c2127`): repeated captured Docs text and menu-item foreground.
- **Docs muted** (`#5f6b7c`): repeated secondary Docs text/border sample.
- **Docs link/card accent** (`#215db0`): observed on the public Docs welcome-card content.
- **Docs canvas** (`#ffffff`): observed in the expanded Docs version menu; the card’s raw computed value is recorded separately as `oklch(1 0 257.113)`.

The landing and Docs are separate captured product domains. Palantir corporate colors, unmeasured package variables, and colors inferred from Blueprint examples are not tokens here.

## 3. Typography Rules

### Evidence classes

- **Official product-use:** Blueprint’s documentation identifies the project as a React UI toolkit for data-dense desktop applications, but the reviewed official material does not name a proprietary text family for the public surfaces.
- **Live computed surface-use:** the supplied landing and Docs records both use an operating-system-first computed stack beginning `-apple-system`; it has high-confidence visible use (112 recorded uses). Because it is a system stack, it is not promoted into `tokens.typography.family` and is never rendered as a Blueprint font specimen.
- **Official distributed brand asset:** no official Blueprint text typeface asset was established in the reviewed sources.
- **Declared-only:** `blueprint-icons-16`, `blueprint-icons-20`, and `codicon` have declared `@font-face` sources in the supplied capture but zero visible uses. Blueprint’s install guidance says its icon CSS must be loaded for icon-font support; that is icon implementation context, not a text-family token.
- **License:** the official `palantir/blueprint` repository says the project is available under Apache 2.0. This is a project-code licence statement, not a claim that every browser-served asset is separately redistributable.

### Measured public hierarchy

| Role | Size | Weight | Line height | Provenance |
|---|---:|---:|---:|---|
| Landing title | 28px | 400 | 33.6px | `home::h1` |
| Docs title | 36px | 600 | 40px | `surface-2::h1` |
| Docs body | 16px | 400 | 24px | `surface-2::p` |

## 4. Component Stylings

The supplied capture contains twelve detected variants, including links, buttons, list rows, a menu, and cards. The machine component token is deliberately limited to the selector-backed static Docs card below: its default geometry is measured, while no card hover, focus, pressed, disabled, loading, error, or responsive value was captured. The observed menu interaction is retained in the verification record and does not authorize a general menu component token.

### Documentation card

**Welcome card / default**
- Background: `oklch(1 0 257.113)`
- Text: `#215db0`
- Radius: `4px`
- Padding: `20px`
- Height: `122px`
- Shadow: `rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 0px 5px 0px`
- Font: `14px / 400 / 18.0013px operating-system stack`
- Use: static public Docs welcome card at `surface-2::div.bp6-card.bp6-elevation-0.bp6-interactive`

### Measured but non-tokenized controls

The landing includes a 40px minimal action (`4px 16px` padding, 4px radius) and a 30px blue action (`4px 8px` padding, 4px radius). The Docs include a 30px minimal button and a version-selector trigger that opened the one recorded menu. These values remain raw evidence rather than general button tokens: the supplied interaction data contains only the version-menu expansion, not a complete, selector-specific state summary for those button variants.

## 5. Layout Principles

- Use the dark landing treatment for an intentionally sparse introduction, not as a claim about Blueprint application canvases.
- Treat the public Docs as the denser reference surface: 16px body copy, narrow 4px control/card corners, and compact 4/8/12/16/20px observed spacing steps.
- Preserve the distinction between a navigation/list row and a button. The captured menu row is a `menuitem`/list-item observation, not a general-purpose button.
- No grid, breakpoint, or authenticated-application layout was measured; those groups are absent rather than filled from an adjacent Palantir product.

## 6. Depth, Elevation & Effects

The only tokenized depth value is the Docs welcome-card shadow: `rgba(0, 0, 0, 0.15) 0px 0px 0px 1px` plus `rgba(0, 0, 0, 0.02) 0px 0px 5px 0px`. It reads as a crisp containment edge with a very small ambient lift. The landing action has its own inset/low shadow sample, but it is not elevated to a general elevation scale. No modal, toast, overlay, blur, or focus-ring effect is claimed.

## 7. Do's and Don'ts

### Do

- Keep dense desktop information legible through compact geometry and clear text hierarchy.
- Use the measured blue only where the captured scope establishes an action or Docs-content accent.
- Keep static card containment precise: 4px corners, 20px card padding, and the captured low outline/shadow.
- Separate a dark product introduction from the light documentation workspace when both are present in the source scope.

### Don't

- Substitute the operating-system stack with a named font and call it Blueprint typography.
- Turn declared-but-unused icon fonts into a text-family token.
- Treat the one expanded version menu as evidence for hover, focus, pressed, disabled, toast, dialog, or error styles.
- Import Palantir corporate pages, brand colors, or product UI into this Blueprint component system without direct evidence.

## 8. Responsive Behavior

The supplied packet records two 1440×900 public surfaces only. It establishes no mobile layout, breakpoint, touch target, adaptive navigation, or responsive state. Blueprint’s official repository describes the toolkit as not mobile-first; that product-positioning statement is not a measured responsive specification.

## 9. Agent Prompt

Design a data-dense desktop web interface inspired by the captured Palantir Blueprint public surfaces. Use a dark `#111418` landing/introduction only when the page needs a sparse entry moment; use a light Docs-like work surface with `#1c2127` foreground, `#5f6b7c` secondary text, and `#215db0` content accent for information-heavy reference views. Work with measured 4/8/12/16/20px spacing and 0/4px corners; reserve 30px rounding for the specific observed menu trigger rather than a global rule. A static documentation card may use the exact captured white-equivalent `oklch(1 0 257.113)`, 20px padding, 4px radius, and low double shadow. Do not claim a proprietary UI font, broad button-state system, mobile pattern, modal, toast, error, or motion rule without new evidence.

## 10. Voice & Tone

Blueprint’s product voice is technical, concise, and task-first. Palantir’s published culture materials add an engineering register centered on ideas, responsibility, and outcomes; use that as context for prose, not as a component-copy source.

| Do | Don't |
|---|---|
| Name the component, purpose, and implementation step plainly. | Add lifestyle language or vague transformation claims to reference UI. |
| Prefer compact imperative guidance. | Inflate a small configuration choice into a brand promise. |
| State an evidence boundary when a behavior was not observed. | Fill missing states with plausible platform conventions. |

Source-grounded voice samples:

- “A React-based UI toolkit for the web.” — Blueprint landing.
- “Optimized for building complex data-dense interfaces.” — Blueprint documentation.
- “The Best Idea Wins.” — Palantir careers/values material.

## 11. Brand Narrative

Blueprint is an open-source project developed at Palantir, positioned for the practical problem of building complex desktop web interfaces where information density is a core requirement. Its visible product expression is therefore less about a single marketing palette than about an implementable set of components, icons, and documentation for React applications.

Palantir states that it was founded in 2003 to address critical data problems while protecting civil liberties, and describes its software work as helping institutions integrate data, decisions, and operations. Blueprint is not evidence for the visual design of those proprietary platforms; it is a public project associated with the same engineering organization.

The current Blueprint site presents v6.x as available and directs users through migration guidance. That present-tense evolution supports a maintained-library reading of the reference, while the packet limits visual facts to the supplied landing and documentation captures.

## 12. Principles

1. **Design for dense work, not decorative emptiness.**
   *UI implication:* favor a readable 16px Docs body role and compact, measured containment over oversized marketing modules.
2. **Make structure explicit.**
   *UI implication:* distinguish card, list item, menu row, and action semantics instead of styling every link as a button.
3. **Treat the best idea as testable.**
   *UI implication:* expose clear labels, predictable hierarchy, and selector-backed component geometry rather than visual guesswork.
4. **Own the evidence boundary.**
   *UI implication:* retain measured default card values, but omit unobserved state, motion, responsive, and proprietary-font rules.

## 13. Personas

The following are documented usage archetypes, not fictional customer personas.

- **Desktop React application developer:** Blueprint explicitly targets React-based, complex, data-dense desktop web interfaces. Their need is a documented component surface with implementation guidance.
- **Team maintaining an information-heavy internal or public application:** the toolkit’s stated optimization for desktop density supports this role. The supplied Docs surface is evidence for reference-reading needs, not for their specific workflow or authorization model.

No additional industry, title, demographic, or task-flow persona is asserted from the supplied evidence.

## 14. States

| State category | Evidence and retained boundary |
|---|---|
| Empty | No empty-state presentation observed. |
| Loading | No loading or skeleton presentation observed. |
| Error | No form, network, validation, or error presentation observed. |
| Success | No success presentation observed. |
| Disabled | No disabled component sample observed. |
| Expanded menu | Observed once on public Docs: the version-selector trigger produced a menu with `expanded` and `menu-open` states. This does not establish a reusable menu-state contract. |

Hover, focus, pressed, selected, required, and responsive changes are absent for the retained static card and tokenized values.

## 15. Motion & Easing

The supplied evidence contains no duration, easing curve, transition, animation, or reduced-motion observation. No motion token or animation recommendation is created. The single Docs menu expansion establishes only an expanded snapshot, not timing or a transition specification.

---
**Verified:** 2026-07-14
**Tier 1 sources:** https://blueprintjs.com/ · https://blueprintjs.com/docs/ · https://github.com/palantir/blueprint
**Tier 2 sources:** https://getdesign.md/palantir (attempted; internal retrieval error) · https://styles.refero.design/?q=Palantir%20Blueprint (attempted; internal retrieval error)
**Conflicts unresolved:** none
