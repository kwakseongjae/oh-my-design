# Palantir Blueprint Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Blueprint is Palantir’s open-source React toolkit for complex, data-dense desktop web interfaces. Catalog homepage identity is `https://blueprintjs.com/`. This contract covers two first-party public surfaces the source inspected on 2026-07-13: the public landing at `https://blueprintjs.com/` (`home`, kind `public-product`) and the official documentation at `https://blueprintjs.com/docs/` (`docs` / `surface-2`, kind `official-documentation`). YAML `ds.name` is Blueprint, `ds.url` is `https://blueprintjs.com/docs/`, `ds.type` is `system`. The YAML `ds.description` is kept as written: Palantir's open-source React UI toolkit for complex, data-dense desktop web interfaces. Token note from the source, kept as written: Machine tokens are limited to the supplied Blueprint landing and documentation capture. The operating-system stack is not a named Blueprint UI family; declared icon fonts, Palantir corporate material, and repository context remain separate evidence domains. Treating those two inspected routes as this contract's surfaces, keeping `ds.type: system` as the published Blueprint documentation rather than as a blanket token sheet for every Blueprint application, and keeping machine tokens limited to the supplied landing and documentation capture, are derived editorial implementation inferences from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

Its public face is unusually direct for a design-system site: the landing page presents a dark wireframe field, sparse white type, and restrained actions, while the documentation moves immediately into a light, compact reading environment with navigable component material. That split is purposeful rather than a universal palette: the captured landing establishes a dark product identity, and the captured Docs establish an information-dense working surface. `#111418` is the supplied landing body background; public Docs use white card/canvas samples with `#1c2127` text. The captured Docs card is 122px high with 20px padding, a 4px radius, and a low, double-layer outline/shadow rather than promotional elevation. Blueprint’s own documentation says it is optimized for complex, data-dense desktop applications and is not mobile-first. The hex values, the 122px / 20px / 4px card geometry, the landing-versus-Docs split of surfaces, and that documentation sentence are the source's own. Readings of the public face as unusually direct for a design-system site, of the landing as a dark wireframe field with sparse white type and restrained actions, of the Docs as a light compact reading environment, of the split as purposeful rather than a universal palette, and of the card as measured utility rather than promotional elevation, are a derived editorial implementation inference from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

Brand narrative recorded by the source, kept separate from the interface evidence above. Blueprint originated as a Palantir project and is now maintained as an open-source library; the current documentation presents Blueprint v6.x as available, making versioned migration and maintained component infrastructure part of its present expression. The current Blueprint site presents v6.x as available and directs users through migration guidance. Palantir’s broader engineering culture—ideas judged on merit, ownership of outcomes, and mission focus—gives useful organizational context, but it does not turn corporate-page styling into Blueprint tokens. Palantir states that it was founded in 2003 to address critical data problems while protecting civil liberties, and describes its software work as helping institutions integrate data, decisions, and operations. Blueprint is not evidence for the visual design of those proprietary platforms; it is a public project associated with the same engineering organization. That present-tense evolution supports a maintained-library reading of the reference, while the packet limits visual facts to the supplied landing and documentation captures. The years, v6.x availability, migration guidance, 2003 founding, civil-liberties wording, data/decisions/operations framing, and the sentence that Blueprint is not evidence for the visual design of those proprietary platforms are the source's own recordings of first-party pages. Treating that founding-and-library narrative as brand context that does not by itself supply interface tokens, reading versioned migration as part of the present expression, and keeping the packet's limit of visual facts to the supplied landing and documentation captures, are derived editorial implementation inferences from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=2 lang=en -->
### Primary tasks

Selecting these two as the product's primary tasks, each naming a captured public surface the source records, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

- Read the public landing at `https://blueprintjs.com/`.
- Read the public Docs at `https://blueprintjs.com/docs/` as the denser reference surface with navigable component material.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section is dropped rather than promoted, and no name, affiliation classification, or motivation is carried into this document or its sidecar. The captured surfaces are the public Blueprint landing and the public Docs. Dropping that persona section rather than promoting it, and carrying no affiliation classification or motivation, are derived editorial implementation inferences from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

### Distinctive traits

The list restates measured values from the source. Classifying the list as that restatement, and the groupings inside it, is a derived editorial implementation inference from the verified surfaces; it is not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

- Desktop workbench, not a lifestyle landing: Blueprint’s own documentation says it is optimized for complex, data-dense desktop applications and is not mobile-first
- Dark entry, light reference: dark landing canvas `#111418` (`tokens.colors.dark-canvas`) against Docs canvas `#ffffff` (`tokens.colors.canvas`)
- Filled landing action `#2d72d2` (`tokens.colors.primary`) with on-primary `#ffffff` (`tokens.colors.on-primary`)
- Docs foreground `#1c2127`, muted `#5f6b7c`, and link/card accent `#215db0`
- Operating-system-first computed stack beginning `-apple-system` (112 recorded uses); not a named Blueprint family
- Observed spacing steps 4/8/12/16/20px (`tokens.spacing.xs`/`sm`/`md`/`lg`/`xl`); corners 0/4px with 30px rounding reserved for the observed menu trigger (`tokens.rounded.sharp`/`control`/`round`)
- Measured utility: Docs welcome card 122px high, 20px padding, 4px radius, `oklch(1 0 257.113)`, low double-layer outline/shadow

### Principles

These 4 items are a derived editorial implementation inference from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation. The numbered stems rest on official documentation and culture sentences the source attributes to first-party pages. Every *UI implication* below is the source's own editorial reading, not taken from the published Blueprint documentation as a token sheet for every Blueprint application.

1. **Design for dense work, not decorative emptiness.**
   *UI implication:* favor a readable 16px Docs body role and compact, measured containment over oversized marketing modules.
2. **Make structure explicit.**
   *UI implication:* distinguish card, list item, menu row, and action semantics instead of styling every link as a button.
3. **Treat the best idea as testable.**
   *UI implication:* expose clear labels, predictable hierarchy, and selector-backed component geometry rather than visual guesswork.
4. **Own the evidence boundary.**
   *UI implication:* retain measured default card values, but omit unobserved state, motion, responsive, and proprietary-font rules.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

- Keep dense desktop information legible through compact geometry and clear text hierarchy.
- Use the measured blue only where the captured scope establishes an action or Docs-content accent.
- Keep static card containment precise: 4px corners, 20px card padding, and the captured low outline/shadow.
- Separate a dark product introduction from the light documentation workspace when both are present in the source scope.

The source's Agent Prompt Guide also records this unique constraint, kept as written: Use a dark `#111418` landing/introduction only when the page needs a sparse entry moment; use a light Docs-like work surface with `#1c2127` foreground, `#5f6b7c` secondary text, and `#215db0` content accent for information-heavy reference views. Work with measured 4/8/12/16/20px spacing and 0/4px corners; reserve 30px rounding for the specific observed menu trigger rather than a global rule. A static documentation card may use the exact captured white-equivalent `oklch(1 0 257.113)`, 20px padding, 4px radius, and low double shadow. Keeping that Agent Prompt Guide constraint on this page rather than as a tool prompt is a derived editorial implementation inference from the verified surfaces; it is not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

- Substitute the operating-system stack with a named font and call it Blueprint typography.
- Turn declared-but-unused icon fonts into a text-family token.
- Treat the one expanded version menu as evidence for hover, focus, pressed, disabled, toast, dialog, or error styles.
- Import Palantir corporate pages, brand colors, or product UI into this Blueprint component system without direct evidence.

The same Agent Prompt Guide records this unique prohibition, kept as written: Do not claim a proprietary UI font, broad button-state system, mobile pattern, modal, toast, error, or motion rule without new evidence. Keeping that prohibition here rather than as a tool prompt is a derived editorial implementation inference from the verified surfaces; it is not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

**Selector-backed captured values.** Pairing each hex to the token-set path named beside it, keeping the landing and Docs as separate captured product domains, keeping `tokens.colors.on-primary` `#ffffff` unmerged from `tokens.colors.canvas` `#ffffff`, keeping the card's raw `oklch(1 0 257.113)` unmerged from Docs canvas `#ffffff`, and keeping the per-swatch scope clauses (canonical primary only for this captured Blueprint scope; dark canvas not evidence for every Blueprint application), is a derived editorial implementation inference from the verified surfaces; it is not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation. Palantir corporate colors, unmeasured package variables, and colors inferred from Blueprint examples are not tokens here.

- **Primary blue** (`#2d72d2` / YAML `tokens.colors.primary`): observed as the filled landing action background; it is retained as the canonical primary color only for this captured Blueprint scope. Catalog `primary_color` is `#2d72d2`.
- **Dark landing canvas** (`#111418` / YAML `tokens.colors.dark-canvas`): observed on the public landing body; it is not evidence that every Blueprint application uses a dark canvas.
- **On-primary / landing white** (`#ffffff` / YAML `tokens.colors.on-primary`): observed on the filled landing action and landing headline.
- **Docs foreground** (`#1c2127` / YAML `tokens.colors.foreground`): repeated captured Docs text and menu-item foreground.
- **Docs muted** (`#5f6b7c` / YAML `tokens.colors.muted`): repeated secondary Docs text/border sample.
- **Docs link/card accent** (`#215db0` / YAML `tokens.colors.link`): observed on the public Docs welcome-card content. Token-set path `tokens.components.docs-welcome-card.fg` records the same hex on that card; the two paths stay unmerged.
- **Docs canvas** (`#ffffff` / YAML `tokens.colors.canvas`): observed in the expanded Docs version menu; the card’s raw computed value is recorded separately as `oklch(1 0 257.113)`.

### Spacing

YAML `tokens.spacing` keys, kept as separate steps (`xs: 4` is not `sm: 8`; `md: 12` is not `lg: 16`; `lg: 16` is not `xl: 20`):

- `tokens.spacing.xs`: 4
- `tokens.spacing.sm`: 8
- `tokens.spacing.md`: 12
- `tokens.spacing.lg`: 16
- `tokens.spacing.xl`: 20

`lg: 16` is a spacing step. It is not `tokens.typography.docs-body.size` `16`, and it is not the landing minimal-action padding `4px 16px`. `xl: 20` is a spacing step. It is not the card padding `20px`. Keeping the five keys unmerged, and keeping those writings of `16` and `20` on their own records rather than choosing one as a replacement, is a derived editorial implementation inference from the verified surfaces; it is not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

### Shape

YAML `tokens.rounded` keys, kept as separate steps (`sharp: 0` is not `control: 4`; `control: 4` is not `round: 30`):

- `tokens.rounded.sharp`: 0
- `tokens.rounded.control`: 4
- `tokens.rounded.round`: 30

`round: 30` is 30px rounding for the specific observed menu trigger, not a global rule. It is not the landing 30px blue-action height and not the Docs 30px minimal-button height. `control: 4` is a radius step. It is not `tokens.spacing.xs` `4`. Reading those three keys as that split, and reserving 30px rounding for the observed menu trigger rather than as a universal radius scale, is a derived editorial implementation inference from the verified surfaces; it is not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

### Elevation

The only tokenized depth value is the Docs welcome-card shadow, token-set path `tokens.shadow.docs-card`: `rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 0px 5px 0px`. Token-set path `tokens.components.docs-welcome-card.shadow` records the same string on that card; the two paths stay unmerged. It reads as a crisp containment edge with a very small ambient lift. The landing action has its own inset/low shadow sample, but it is not elevated to a general elevation scale. No modal, toast, overlay, blur, or focus-ring effect is claimed. Reading that string as a crisp containment edge with a very small ambient lift, and keeping the landing-action inset/low sample off a general elevation scale, is a derived editorial implementation inference from the verified surfaces; it is not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

### Motion

The supplied evidence contains no duration, easing curve, transition, animation, or reduced-motion observation. No motion token or animation recommendation is created. The single Docs menu expansion establishes only an expanded snapshot, not timing or a transition specification. Promote a motion token for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A match against the published Blueprint documentation is not that gate. That five-kind gate, and the decision not to promote a motion token from this capture or from Blueprint documentation, are a derived editorial implementation inference from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Blueprint’s documentation identifies the project as a React UI toolkit for data-dense desktop applications, but the reviewed official material does not name a proprietary text family for the public surfaces. |
| Live computed surface-use | The supplied landing and Docs records both use an operating-system-first computed stack beginning `-apple-system`; it has high-confidence visible use (112 recorded uses). Because it is a system stack, it is not promoted into `tokens.typography.family` and is never rendered as a Blueprint font specimen. |
| Official distributed brand asset | No official Blueprint text typeface asset was established in the reviewed sources. |
| Declared-only | `blueprint-icons-16`, `blueprint-icons-20`, and `codicon` have declared `@font-face` sources in the supplied capture but zero visible uses. Blueprint’s install guidance says its icon CSS must be loaded for icon-font support; that is icon implementation context, not a text-family token. |
| License | The official `palantir/blueprint` repository at `https://github.com/palantir/blueprint` says the project is available under Apache 2.0. This is a project-code licence statement, not a claim that every browser-served asset is separately redistributable. |

Reading those five rows as evidence-class sorting rather than as a named Blueprint UI family, keeping the operating-system stack off `tokens.typography.family`, and keeping the three declared-only icon fonts off a text-family token, are derived editorial implementation inferences from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

### Family

- **Current visible UI family:** the computed operating-system-first stack beginning `-apple-system` is not a named Blueprint UI family, so no `tokens.typography.family` entry is written.
- Do not substitute the operating-system stack with a named font and call it Blueprint typography. Do not replace unavailable or unobserved brand type with a system font specimen.

The no-substitution rule above, and the reading that the operating-system stack is canonical here only as a computed surface-use fact and not as `tokens.typography.family`, are a derived editorial implementation inference from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

### Type roles

Token-set roles keep the source's recorded numbers. The measured public-hierarchy table keeps the source's px spellings. `33.6` is not rewritten as a ratio. `24` is not rewritten as `1.5`. Those writings sit on those records. Neither was chosen as a replacement. YAML `use` is kept verbatim. Keeping the token-set numbers on their own rows, the px hierarchy on its own table, `tokens.typography.docs-body.size` `16` as a type key rather than a spacing step, and the card font `14px / 400 / 18.0013px operating-system stack` on `tokens.components.docs-welcome-card.font` rather than as a type-role row, is a derived editorial implementation inference from the verified surfaces; it is not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

| Role | Size | Weight | Line height | Token-set use | Provenance |
|---|---:|---:|---:|---|---|
| Landing title | 28 | 400 | 33.6 | Observed landing h1; computed operating-system stack, not a named Blueprint family | `home::h1` |
| Docs title | 36 | 600 | 40 | Observed public Docs h1; computed operating-system stack, not a named Blueprint family | `surface-2::h1` |
| Docs body | 16 | 400 | 24 | Observed public Docs body paragraphs; computed operating-system stack, not a named Blueprint family | `surface-2::p` |

| Role | Size | Weight | Line height | Provenance |
|---|---:|---:|---:|---|
| Landing title | 28px | 400 | 33.6px | `home::h1` |
| Docs title | 36px | 600 | 40px | `surface-2::h1` |
| Docs body | 16px | 400 | 24px | `surface-2::p` |

Token-set `tokens.typography.landing-title.size` is `28`. Token-set `tokens.typography.landing-title.weight` is `400`. Token-set `tokens.typography.landing-title.lineHeight` is `33.6`. Token-set `tokens.typography.landing-title.use` is the verbatim landing-title use string in the table. Token-set `tokens.typography.docs-title.size` is `36`. Token-set `tokens.typography.docs-title.weight` is `600`. Token-set `tokens.typography.docs-title.lineHeight` is `40`. Token-set `tokens.typography.docs-title.use` is the verbatim docs-title use string in the table. Token-set `tokens.typography.docs-body.size` is `16`. Token-set `tokens.typography.docs-body.weight` is `400`. Token-set `tokens.typography.docs-body.lineHeight` is `24`. Token-set `tokens.typography.docs-body.use` is the verbatim docs-body use string in the table. Body `16` is a type size. It is not a spacing step — `tokens.spacing.lg` is the spacing key for `16`. The card font `14px / 400 / 18.0013px operating-system stack` stays on `tokens.components.docs-welcome-card.font`; it is not a type-role row.

### Assets

The catalog identity records `logo.type: favicon` and `logo.slug: https://www.google.com/s2/favicons?domain=blueprintjs.com&sz=128`. That is a catalog identity pointer (a third-party favicon-proxy URL), not a Blueprint-hosted brand file. `blueprint-icons-16`, `blueprint-icons-20`, and `codicon` remain declared-only icon fonts. Classifying the Google s2 favicon as a catalog identity pointer rather than a hosted brand file, and keeping the three icon fonts off the UI-family token, are derived editorial implementation inferences from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The supplied capture contains twelve detected variants, including links, buttons, list rows, a menu, and cards. The machine component token is deliberately limited to the selector-backed static Docs card below: its default geometry is measured, while no card hover, focus, pressed, disabled, loading, error, or responsive value was captured. The observed menu interaction is retained in the verification record and does not authorize a general menu component token.

| State category | Evidence and retained boundary |
|---|---|
| Empty | No empty-state presentation observed. |
| Loading | No loading or skeleton presentation observed. |
| Error | No form, network, validation, or error presentation observed. |
| Success | No success presentation observed. |
| Disabled | No disabled component sample observed. |
| Expanded menu | Observed once on public Docs: the version-selector trigger produced a menu with `expanded` and `menu-open` states. This does not establish a reusable menu-state contract. |

Hover, focus, pressed, selected, required, and responsive changes are absent for the retained static card and tokenized values.

The source token-set declares one component: `docs-welcome-card` with `type: card`. That primitive type is attached only to Documentation card. The measured landing and Docs actions below are not in the token set. Declared components still follow Core §4.4 by control meaning, not by capture completeness. Absence of a capture is not a `not-applicable` reason. This is not a complete state-coverage claim. Limiting the machine token to that static Docs card, labelling the measured actions `not in the token set`, declaring Kind: non-interactive on the card with the source's static-card reason and omitting a state-applicability map, not taking the observed menu interaction as authorization for a general menu component token, and not treating this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

### Documentation card

- Role: static public Docs welcome card
- Primitive type: `card` · Token-set path `tokens.components.docs-welcome-card.type`
- Kind: non-interactive — the source records it as a static public Docs welcome card; no card hover, focus, pressed, disabled, loading, error, or responsive value was captured. No state-applicability map (C4).
- Domain: public Docs
- Background: `oklch(1 0 257.113)` · Token-set path `tokens.components.docs-welcome-card.bg`
- Text: `#215db0` · Token-set path `tokens.components.docs-welcome-card.fg`
- Radius: `4px` · Token-set path `tokens.components.docs-welcome-card.radius` `4`
- Padding: `20px` · Token-set path `tokens.components.docs-welcome-card.padding`
- Height: `122px` · Token-set path `tokens.components.docs-welcome-card.height` `122`
- Shadow: `rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 0px 5px 0px` · Token-set path `tokens.components.docs-welcome-card.shadow`
- Font: `14px / 400 / 18.0013px operating-system stack` · Token-set path `tokens.components.docs-welcome-card.font`
- Token-set use (`tokens.components.docs-welcome-card.use`): `Static public Docs welcome card; selector surface-2::div.bp6-card.bp6-elevation-0.bp6-interactive`
- Use: static public Docs welcome card at `surface-2::div.bp6-card.bp6-elevation-0.bp6-interactive`
- Observed: default only. The `bp6-interactive` class is in the captured selector string.

### Measured but non-tokenized controls

Primitive type: not in the token set. No `kind` and no state-applicability map (C4). These values remain raw evidence rather than general button tokens: the supplied interaction data contains only the version-menu expansion, not a complete, selector-specific state summary for those button variants.

- Landing 40px minimal action (`4px 16px` padding, 4px radius).
- Landing 30px blue action (`4px 8px` padding, 4px radius).
- Docs 30px minimal button.
- Docs version-selector trigger that opened the one recorded menu.

The captured menu row is a `menuitem`/list-item observation, not a general-purpose button. Preserve the distinction between a navigation/list row and a button. Keeping those measured actions as raw evidence rather than general button tokens, and keeping the captured menu row off a general-purpose button, is a derived editorial implementation inference from the verified surfaces; it is not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Use the dark landing treatment for an intentionally sparse introduction, not as a claim about Blueprint application canvases. Treat the public Docs as the denser reference surface: 16px body copy, narrow 4px control/card corners, and compact 4/8/12/16/20px observed spacing steps. Preserve the distinction between a navigation/list row and a button. The captured menu row is a `menuitem`/list-item observation, not a general-purpose button. No grid, breakpoint, or authenticated-application layout was measured; those groups are absent rather than filled from an adjacent Palantir product. Those layout readings — sparse introduction versus application canvases, Docs as the denser reference, list-row versus button, unmeasured groups left absent — are derived editorial implementation inferences from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

The supplied packet records two 1440×900 public surfaces only. It establishes no mobile layout, breakpoint, touch target, adaptive navigation, or responsive state. Blueprint’s official repository describes the toolkit as not mobile-first; that product-positioning statement is not a measured responsive specification. The 28px landing title, 36px Docs title, 16px Docs body, 40px landing minimal action, 30px landing blue action, 30px Docs minimal button, and 122px Docs card are desktop-capture measurements, not cross-viewport specifications. Reading the two routes as 1440×900 captures rather than a responsive system, and reading “not mobile-first” as product-positioning rather than as a measured responsive specification, are derived editorial implementation inferences from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Blueprint’s product voice is technical, concise, and task-first. Palantir’s published culture materials add an engineering register centered on ideas, responsibility, and outcomes; use that as context for prose, not as a component-copy source. The three voice adjectives, the instruction to use Palantir culture materials as context for prose rather than as a component-copy source, and the byte-exact rule for the three source-grounded samples, are a derived editorial implementation inference from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

| Do | Don't |
|---|---|
| Name the component, purpose, and implementation step plainly. | Add lifestyle language or vague transformation claims to reference UI. |
| Prefer compact imperative guidance. | Inflate a small configuration choice into a brand promise. |
| State an evidence boundary when a behavior was not observed. | Fill missing states with plausible platform conventions. |

Source-grounded voice samples, kept byte-exact:

- “A React-based UI toolkit for the web.” — Blueprint landing.
- “Optimized for building complex data-dense interfaces.” — Blueprint documentation.
- “The Best Idea Wins.” — Palantir careers/values material.

Reproduce those strings byte-exact rather than translating or re-casing them.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Recorded unresolved decisions

These are named values, not permissions to invent. Naming the list from the source's own unresolved fields, rather than adding surfaces the source did not name, is a derived editorial implementation inference from the verified surfaces; it is not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.

- **Named Blueprint text-family token and live font specimen.** The operating-system stack is not promoted into `tokens.typography.family`.
- **Hover, focus, pressed, disabled, loading, error, success, empty, skeleton, selected, required, and responsive visual treatments** on the retained static card and tokenized values. They are not `not-applicable`; applicability follows control meaning where a control is declared interactive. The static Docs card has no applicability map.
- **General button tokens and a complete, selector-specific state summary** for the landing 40px / 30px actions and the Docs 30px button.
- **Reusable menu-state contract.** The one Docs version-menu expansion records `expanded` and `menu-open` only.
- **Grid, breakpoint, and authenticated-application layout.** Not measured; those groups are absent rather than filled from an adjacent Palantir product.
- **Mobile layout, touch target, adaptive navigation, and responsive state.** The packet records two 1440×900 public surfaces only. “Not mobile-first” is product-positioning, not a measured responsive specification.
- **Modal, toast, overlay, blur, and focus-ring effect.** No such effect is claimed.
- **Motion duration, easing curve, transition, animation, and reduced-motion.** No motion token is promoted. Promote a curve only after a component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Palantir corporate colors, unmeasured package variables, and colors inferred from Blueprint examples.** Not tokens here.
- **Visual design of Palantir proprietary platforms.** Blueprint is not evidence for those platforms.
