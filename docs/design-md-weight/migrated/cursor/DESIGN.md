# Cursor Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Cursor is an AI code editor whose official product material covers autocomplete, inline editing, agent workflows, tools and terminal commands, and enterprise controls. Current public navigation foregrounds Agents, Cloud, CLI, Mobile, Automations, Review, and Tab. This reconstruction covers the current first-party public marketing surface and its localized form. It keeps editor-like demonstrations embedded in that marketing page bounded to demo chrome: neither those examples nor the public homepage establish the authenticated editor, dashboard, or documentation interface. Treating those public marketing pages as the reconstruction boundary and the embedded editor-like examples as demo chrome rather than authenticated-product evidence is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

The official brand guide says to call the product “Cursor,” not “Cursor AI” or “Cursor Code,” and distributes 2D and 2.5D logos, app icons, and avatars. Cursor 1.0 product history describes Bugbot, Background Agent access, Jupyter support, memories, one-click MCP setup, and dashboard changes. Treating that history as product-evolution context rather than current interface-token authority is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

The following visual characterization is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification. The captured public system is compact and repetitive: a warm `#f7f7f4` canvas, `#26251e` ink and filled actions, warm tonal surfaces, 4px feature cards, full-pill compact actions, and an orange text-link accent. Embedded demos introduce local fonts and chrome that do not become general Cursor application tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting the following source-backed workflows as three Primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

- Use autocomplete and inline editing to build or change code.
- Use Cursor’s agent with tools, terminal commands, and code editing for complex engineering work.
- Configure organization-level model, MCP, rule, privacy, and security controls for an engineering team.
<!-- design-md:claim-end -->

### Audience

Grouping the official product, quickstart, agent, enterprise, and security material into the following three stakeholder groups, and treating those groups as evidence-backed audiences rather than named fictional personas, is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification. The groups are individual developers learning Tab, Inline Edit, and Agent; developers using an agent for complex coding tasks; and engineering-organization administrators configuring team controls.

### Distinctive traits

Treating the captured warm-role labels and the bounded orange text-link role below as distinctive traits is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

- Warm public palette: `#f7f7f4` canvas, `#26251e` primary ink, tonal cream surfaces, and bounded `#f54e00` text-link accent.
- `CursorGothic` is the observed loaded family across public headings, body, actions, cards, tabs, menus, and toggles; exact use and source counts remain in provenance.
- Repeated 16px / 400 public body, card, and action type; compact actions use 14px / 400.
- Captured feature cards use 4px corners, while captured compact actions use a computed `3.35544e+07px` full-pill radius.
- No interaction event was captured; static selected, unchecked, and disabled markup is not behavioral proof.

### Official brand guidance

- Use the product name “Cursor.” Do not extend it to “Cursor AI” or “Cursor Code.”
- Treating official logo, app-icon, and avatar use as bounded by the published guidance, and treating the brand page as neither a font licence nor a token specification, is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

### Derived implementation principles

These four items are a derived editorial implementation inference from the verified surfaces and first-party product and brand material; they are not Cursor-authored or a separately published UI specification.

- Make engineering work concrete by naming the coding action, feature, tool, model, or workflow rather than relying on a generic AI claim.
- Start public marketing work from the observed cream, ink, and orange hierarchy before introducing a neutral gray; keep orange in its captured text-link role rather than treating it as every filled action.
- Use full-pill geometry only for action patterns with matching captured geometry; use 4px for the observed public feature cards.
- Keep marketing-page embedded demos separate from authenticated-product claims and from the general public typography system.

### Avoid

The following avoidances are derived editorial implementation inferences from the verified surfaces; they are not Cursor-authored or a separately published UI specification.

- Do not treat the public homepage or its embedded examples as an authenticated Cursor editor or dashboard specification.
- Do not infer hover, pressed, focus, error, loading, responsive, or motion values from class names or static state labels.
- Do not substitute a system font where `CursorGothic` is called for, and do not promote isolated demo fonts to the general UI family.
- Do not promote the embedded-demo gold `#c08532` to the global accent.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Applying the role names and bounded-use judgments below to the captured values is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

| Role | Value | Verified use |
|---|---|---|
| Primary ink | `#26251e` | Public text, borders, and filled public actions |
| Canvas / on-primary | `#f7f7f4` | Homepage body, captured selected demo tab, and inverse action text |
| Card surface | `#f2f1ed` | Public feature cards and menu surface |
| Muted surface | `#e6e5e0` | Compact secondary action and avatar/pill container surface |
| Emphasis surface | `#ebeae5` | Embedded-demo surface |
| Selected surface | `#e1e0db` | Disabled compact-control background in an embedded demo |
| Accent link | `#f54e00` | Tertiary text-link text and border |
| Embedded-demo gold | `#c08532` | Small demo pill only; not the global accent |

Treating the embedded-demo gold as bounded to that local pill rather than as a global accent is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

No generic error or success color is established by the current capture.

### Borders

- Public filled action: 1px `#26251e`.
- Compact ghost action: 1px `oklab(0.263084 -0.00230259 0.0124794 / 0.2)`.
- Compact secondary action: 1px `oklab(0.263084 -0.00230259 0.0124794 / 0.025)`.
- Static selected demo tab: right edge `oklab(0.263084 -0.00230259 0.0124794 / 0.1)`.

### Spacing

The source token scale preserves the numeric values exactly: `xxs: 2`, `xs: 3`, `sm: 4`, `md: 6`, `lg: 8`, `xl: 12`, `xxl: 16`. Treating explicit component measurements as pixel-local records that remain separate from this source scale, including not merging fractional component padding into it, is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

### Shape

- Source scale: `sm: 4`, `md: 8`, `full: 9999`.
- Captured public feature-card radius: `4px`.
- Captured full-pill action/control radius: `3.35544e+07px`.

Treating the source radius scale and the computed full-pill measurement as separate records, with neither normalized into the other, is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

### Elevation

Treating `#f2f1ed`, `#e6e5e0`, `#ebeae5`, `#e1e0db`, and the captured low-alpha borders as tonal separation, while not promoting a reusable shadow scale, modal elevation rule, or generic focus shadow token, is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

### Motion

The collector reports an empty interaction array. Treating static class strings that name transitions or pseudo-classes as insufficient computed behavior, and therefore not promoting reusable hover, focus, pressed, animation, duration, or easing tokens, is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

A motion value may be promoted only after component-specific computed before/after observation establishes all five evidence kinds: transition properties, animation name, duration, easing, and reduced-motion behavior. Until then, the unresolved motion fields remain absent.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

Applying the evidence classes below—including general-public, embedded-demo-only, isolated, system, declared-only, unresolved, and licence-boundary dispositions—is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live computed public family | `CursorGothic`: visible across headings, body, actions, cards, tabs, menus, and toggles, with loaded Cursor-hosted WOFF2 sources. It is the sole promoted general public family. |
| Live computed, embedded-demo only | `Lato` and `EB Garamond`: visible uses with loaded-source corroboration, bounded to embedded marketing examples. |
| Live computed, isolated | `berkeleyMono`: an isolated visible embedded technical-input use with loaded-source corroboration; not a general family token. |
| System values | `system-ui` and `-apple-system`: visible operating-system stacks, not Cursor-owned assets or substitutes for `CursorGothic`. |
| Declared-only | `CursorGothic Fallback`, `CursorIcons16`, captured KaTeX families, and `Lato Fallback` have declarations but zero visible computed use. |
| Unresolved legacy claim | `jjannon` has no current computed-use or FontFaceSet support and is omitted. |
| Licence boundary | Cursor’s brand page distributes visual assets, not a font package or public font licence. Runtime delivery does not grant redistribution permission. |

### Type roles

Grouping the captured typography into the role and boundary rows below, including leaving the isolated `berkeleyMono` size, weight, line height, and tracking not generalized, is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

| Role | Family | Size | Weight | Line height | Tracking | Boundary |
|---|---|---:|---:|---:|---:|---|
| Public body / card / primary action | CursorGothic | 16px | 400 | `1.5` unitless (24px at the captured size) | not established | Current public marketing use |
| Compact public action | CursorGothic | 14px | 400 | `1` unitless (14px at the captured size) | `0.14` as recorded | Compact header and full-pill actions |
| Embedded product-demo label | system-ui | 13px | 400 | 17.3333px | not established | Local demo chrome only |
| Embedded technical input | berkeleyMono | not generalized | not generalized | not generalized | not generalized | Isolated visible use only |

### Assets

- Official brand guidance distributes Cursor 2D and 2.5D logos, app icons, and avatars.
- Exact asset identity and source URLs remain in provenance.
- Treating the brand asset page as an asset source but not as an interface-token specification or a font licence is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Evidence boundary

All component values below come from public homepage capture records. There is no authenticated product or documentation-chrome capture. The interaction array is empty, so static `selected`, `unchecked`, and `disabled` markup does not prove a trigger, transition, or complete state contract. Applicability is declared only where the source establishes an interactive primitive; a missing visual treatment remains omitted and state coverage is not claimed complete.

Treating that state-coverage boundary, the primitive-type and interaction-kind omissions, and the applicability judgments and reason statements throughout this section as implementation classifications is a derived editorial implementation inference from the verified surfaces and their component records; it is not Cursor-authored or a separately published UI specification. Those classifications do not promote an unmeasured visual treatment.

### Public filled primary action

- Primitive type / interaction kind: omitted. Treating the captured action treatment as insufficient to choose button-versus-link semantics is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.
- Background: `#26251e`
- Text: `#f7f7f4`
- Border: `1px solid #26251e`
- Radius: `3.35544e+07px`
- Padding: `12.48px 21.6px 12.8px`
- Font: `16px / 400 / CursorGothic`
- Use: public homepage primary action

### Compact filled action

- Primitive type / interaction kind: omitted. Treating the captured action treatment as insufficient to choose button-versus-link semantics is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.
- Background: `#26251e`
- Text: `#f7f7f4`
- Border: `1px solid #26251e`
- Radius: `3.35544e+07px`
- Padding: `5.6px 10.5px 5.88px`
- Font: `14px / 400 / CursorGothic`
- Use: public compact/header action

### Compact secondary action

- Primitive type / interaction kind: omitted. Treating the captured action treatment as insufficient to choose button-versus-link semantics is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.
- Background: `#e6e5e0`
- Text: `#26251e`
- Border: `1px solid oklab(0.263084 -0.00230259 0.0124794 / 0.025)`
- Radius: `3.35544e+07px`
- Padding: `5.6px 10.5px 5.88px`
- Font: `14px / 400 / CursorGothic`
- Use: public compact secondary action

### Compact ghost action

- Primitive type / interaction kind: omitted. Treating the captured action treatment as insufficient to choose button-versus-link semantics is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.
- Background: transparent
- Text: `#26251e`
- Border: `1px solid oklab(0.263084 -0.00230259 0.0124794 / 0.2)`
- Radius: `3.35544e+07px`
- Padding: `5.6px 10.5px 5.88px`
- Font: `14px / 400 / CursorGothic`
- Use: public compact ghost action

### Tertiary text action

- Primitive type: link
- Kind: interactive
- Anatomy: text label
- Background: transparent
- Text: `#f54e00`
- Radius: `0px`
- Font: `16px / 400 / CursorGothic`
- Use: public marketing text link

Treating the seven state-applicability assignments below as role-based judgments for this text-link action is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured text-link treatment |
| hover | applicable | Pointer-web text link; visual treatment omitted |
| focus-visible | applicable | Interactive link; visual treatment omitted |
| disabled | not-applicable | Text-link role does not expose a disabled variant |
| loading | not-applicable | Navigation activation does not itself carry a loading presentation |
| error | not-applicable | Navigation activation does not itself present validation failure |
| success | not-applicable | Navigation activation does not itself present completion feedback |

### Public feature card

- Primitive type: card
- Interaction kind / applicability map: omitted. Treating interactivity as unresolved and therefore omitting the applicability map is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.
- Background: `#f2f1ed`
- Radius: `4px`
- Padding: `15.9px 17.5px 20px`
- Font: `16px / 400 / CursorGothic`
- Use: public marketing feature card

### Large public feature card

- Primitive type: card
- Interaction kind / applicability map: omitted. Treating interactivity as unresolved and therefore omitting the applicability map is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.
- Background: `#f2f1ed`
- Radius: `4px`
- Padding: `17.5px`
- Font: `16px / 400 / CursorGothic`
- Use: public large feature-card wrapper

### Embedded selected tab

- Primitive type: tab
- Kind: interactive
- Anatomy: label and selected edge
- Background: `#f7f7f4`
- Text: `#26251e`
- Border: `0px 1px 0px 0px solid oklab(0.263084 -0.00230259 0.0124794 / 0.1)`
- Padding: `0px 8px 1px 12px`
- Font: `14px / 400 / CursorGothic`
- Observed: static selected markup only
- Use: embedded marketing product-demo tab

Treating the seven state-applicability assignments below as role-based judgments for this embedded tab is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Tab role; unselected visual treatment omitted |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive tab; visual treatment omitted |
| disabled | applicable | Tab controls can be unavailable; visual treatment omitted |
| loading | not-applicable | Tab selection does not itself carry a loading presentation |
| error | not-applicable | Tab selection does not itself present validation failure |
| success | not-applicable | Tab selection does not itself present completion feedback |

### Embedded prompt input

- Primitive type: input
- Kind: interactive
- Anatomy: value field
- Background: transparent
- Text: `#26251e`
- Padding: `8px 8px 6px`
- Font: `13px / 400 / system-ui`
- Use: embedded marketing product-demo input only

Treating the seven state-applicability assignments below as role-based judgments for this embedded input is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured input treatment |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive input; visual treatment omitted |
| disabled | applicable | Form input can be unavailable; visual treatment omitted |
| loading | not-applicable | The field itself does not carry the demo workflow’s loading presentation |
| error | applicable | Input validation can fail; visual treatment omitted |
| success | applicable | Input validation can succeed; visual treatment omitted |

### Embedded disabled compact control

- Primitive type / interaction kind: omitted. Treating the captured compact-control record as insufficient to choose button, toggle, or other primitive semantics is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.
- Background: `#e1e0db`
- Text: `oklab(0.263084 -0.00230259 0.0124794 / 0.6)`
- Radius: `3.35544e+07px`
- Observed: static disabled markup only
- Use: embedded marketing product-demo compact control

No hover, pressed, focus, error, menu-opening, or toast visual variant was observed for these components.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Treating the observations below as captured-desktop-local layout guidance, rather than as a responsive or authenticated-product layout contract, is a derived editorial implementation inference from the verified surfaces; it is not Cursor-authored or a separately published UI specification.

- The captured public homepage body uses a `#f7f7f4` canvas with 52px top padding at the 1440×900 collector viewport.
- Public feature cards repeat 4px corners and card-local padding around 15–20px, with exact component values preserved in §4.
- Public compact actions repeat full-pill geometry with either 14px / 400 or 16px / 400 CursorGothic, depending on the captured action scale.
- Evidence covers one desktop viewport and duplicate localized public-home records. It does not establish a responsive breakpoint system, page-wide grid contract, mobile drawer, navigation-collapse behavior, or authenticated-product layout.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The voice characterization, directions, and coverage boundary below are a derived editorial implementation inference from verified first-party language; they are not Cursor-authored or a separately published UI specification.

Current first-party product language is direct and task-oriented. Official documentation introduces the coding task or workflow before the AI capability, while release communication names a release and concrete features. Public actions include the concise imperatives “Download” and “Get Cursor.”

| Context | Source-backed direction |
|---|---|
| Product explanation | Name the coding task or workflow before the AI capability. |
| Public CTA | Use a concise imperative such as “Download” or “Get Cursor.” |
| Release communication | Lead with a named release and concrete features, as in the Cursor 1.0 changelog. |
| Product naming | Use “Cursor,” not “Cursor AI” or “Cursor Code.” |

No broader locale behavior, error/recovery language, or authenticated-product microcopy contract is established by the source.

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

### Named gaps

- authenticated editor, dashboard, documentation-chrome, mobile, breakpoint, drawer, and navigation-collapse visual contracts
- reusable shadow, modal elevation, and focus-shadow tokens
- empty, loading, error, success, skeleton, recovery, hover, pressed, focus, menu-opening, toast, duration, easing, and reduced-motion visual treatments
- a public redistribution licence for Cursor-hosted font files
- general product use of `Lato`, `EB Garamond`, `berkeleyMono`, system families, or declared-only font assets
