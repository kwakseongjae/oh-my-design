# Ollama Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Ollama is a developer platform for getting open models running locally, through an app, CLI, API, and integrations. Catalog homepage identity is `https://ollama.com`. This contract covers three first-party public surfaces inspected on 2026-07-13: the product-marketing homepage at `https://ollama.com/`, the product-marketing pricing page at `https://ollama.com/pricing`, and the documentation chrome at `https://docs.ollama.com/`. Documentation chrome is recorded separately and is not promoted into product tokens. Treating those three inspected routes as this contract's surfaces, keeping product-marketing values off documentation chrome and documentation-chrome values off product-marketing tokens, is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification.

Its public product marketing surface makes that technical proposition feel deliberately direct: a white canvas, black and charcoal calls to action, spare text links, terminal-shaped instructions, and full-pill controls. The current homepage pairs the local-first promise with an optional cloud offer—"Start local. Scale with cloud."—rather than replacing the local workflow. That evolution is echoed in the pricing surface, which introduces Free, Pro, and Max tiers while keeping download and local use visible. Visually, the recognizable expression is restrained neutral contrast and rounded product controls, not an independently named color system or decorative campaign treatment. The live values below describe those public marketing product surfaces at the captured desktop viewport.

The July 2026 company post describes the product as a way to make open models easy to run, build with, own, and keep private; its homepage and pricing page now present cloud capacity as an extension for larger or parallel workloads. Ollama presents open models as something developers should be able to run on their own machine and integrate through a simple API. Its official repository and documentation make that practical: download the software, run a model, connect an integration, or use the API. In the company’s July 2026 post, Jeff and Michael connect Ollama to their earlier work on Kitematic and Docker Desktop, then describe a return to making complex developer infrastructure easier to run. The same post frames the present product around ownership, affordability, and privacy, with cloud capacity offered when local hardware is not enough. That story makes the quiet, command-led public surface coherent: it lets a local workflow remain the primary mental model while acknowledging a growing cloud product. The July 2026 post, the names Jeff and Michael, Kitematic and Docker Desktop, and the ownership / affordability / privacy framing are first-party narrative in the source. Readings of the marketing surface as deliberately direct, of the local-first promise as paired with optional cloud rather than replacing the local workflow, of that evolution as echoed in the pricing surface, of the expression as restrained neutral contrast rather than an independently named color system or decorative campaign treatment, of terminal and command language as product content rather than ornament, and the closing causal sentence that the story makes the quiet, command-led public surface coherent, are a derived editorial implementation inference from the verified surfaces; they are not Ollama-authored or a separately published UI specification. Those narrative facts do not by themselves supply interface tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured surface, control, or label the source records, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification.

- Get open models running locally from the homepage install command and `Download` (app, CLI, API, and integrations).
- Review `Free`, `Pro`, `Max`, and an announced `Team` tier on `https://ollama.com/pricing`, keeping download and local use visible.
- Read `https://docs.ollama.com/` as a separate documentation surface with navigation, search, cards, and API/integration paths.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section is dropped rather than promoted, and no name, affiliation classification, or motivation is carried into this document or its sidecar. Official material presents open models as something developers should be able to run on their own machine. Use that source wording only. Dropping that persona section rather than promoting it, carrying no affiliation classification or motivation, and using only that source wording, are a derived editorial implementation inference from the verified surfaces; they are not Ollama-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key characteristics. The values are recorded; classifying the list as that restatement, and the groupings inside it, is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification.

- White canvas, black text, and charcoal (`#262626`) primary CTAs
- Full-pill (`9999px`) controls for the observed product inputs and calls to action
- No observed drop shadow on the product controls in the supplied capture
- System-stack body text plus a separately unresolved rounded display-family observation
- Terminal and command language used as product content, not ornament

### Principles

These 4 items are a derived editorial implementation inference from the verified surfaces; they are not Ollama-authored or a separately published UI specification. The numbered stems and every *UI implication* are the source's own editorial reading, not a published Ollama UI specification.

1. **Open models should be practical to run.**
   *UI implication:* make installation, model selection, and API entry points easy to scan.
2. **Ownership and privacy remain legible.**
   *UI implication:* explain the local path plainly and avoid making cloud the only visible route.
3. **Scale is an extension, not a replacement.**
   *UI implication:* distinguish local capability from optional cloud capacity in layout and copy.
4. **Developer actions come before persuasion.**
   *UI implication:* use commands, integrations, and links as primary content.

### Application rules

The source states these five as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Ollama-authored or a separately published UI specification.

- Use `#262626` with white text for the observed dark product CTA treatment.
- Use full-pill geometry only for controls whose observed product provenance supports it.
- Keep body and navigation type on the system stack unless a loadable font is independently verified.
- Keep local use prominent when describing the current local-plus-cloud product story.
- Treat docs chrome as its own surface when borrowing patterns.

### Avoid

The source states these five as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Ollama-authored or a separately published UI specification.

- Do not substitute a local or system font and label it `SF Pro Rounded`.
- Do not promote declared docs fonts to the product UI family.
- Do not generalize docs cards or their 12px/16px radii to marketing-product components.
- Do not specify hover, focus, pressed, disabled, or error visuals from this capture; interaction coverage is zero.
- Do not invent a published spacing, shadow, or color scale where only clustered computed values were collected.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

### Product marketing surfaces

Pairing each hex to the token-set path named beside it, keeping `#ffffff` as both page canvas and inverted pricing CTA surface rather than merging those jobs, keeping `#000000` as both primary text and the text of white pricing actions, keeping catalog `primary_color` `#000000` unmerged from Ink, keeping `#262626` as the header-download and hero-CTA background rather than a general ink, keeping `#d4d4d4` as the observed border on a white product CTA rather than a general hairline, keeping pill-input border `0px solid #6b7280` on that control rather than as a palette token, and not promoting documentation-chrome colors as product-marketing tokens, is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Ink** (`#000000` / YAML `tokens.colors.ink`): observed primary text and the text of white pricing actions.
- **Action charcoal** (`#262626` / YAML `tokens.colors.action`): observed header download and hero CTA background. Catalog `primary_color` is `#000000`.
- **Canvas** (`#ffffff` / YAML `tokens.colors.canvas`): observed page and inverted pricing CTA surface.
- **Muted** (`#737373` / YAML `tokens.colors.muted`): observed secondary product text.
- **Hairline** (`#e5e7eb` / YAML `tokens.colors.hairline`): observed product border color.
- **Outline** (`#d4d4d4` / YAML `tokens.colors.outline`): observed border on a white product CTA.

Pill-input border `0px solid #6b7280` stays on that control. It is not a palette token.

### Documentation chrome — separate domain

The captured docs homepage uses additional light-gray, charcoal, and semantic color values. Those belong to `docs.ollama.com` chrome and are not product-marketing tokens. Docs search text `#6f6f6f` and the docs link-card border `1px solid oklab(0.144787 0.00000661612 0.00000289828 / 0.1)` stay on those docs-only controls. No gradient token is asserted from the supplied evidence. Keeping those docs-chrome colors and the docs-search `#6f6f6f` / docs-card oklab border on those docs-only controls, and not asserting a gradient token from this evidence, is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification. The captured values and the source's no-gradient constraint are the source's own.

### Spacing

YAML `tokens.spacing`: `xxs` 4, `xs` 6, `sm` 8, `md` 12, `lg` 16, `xl` 24, `2xl` 32.

The captured bundle clusters spacing at 4, 6, 8, 12, 16, 24, and 32px. These are observed values, not a published Ollama spacing scale. Header actions use 6px 16px padding, the hero CTA uses 12px 32px, and the product input uses 10px 12px.

Keeping the YAML named steps unmerged from coincidental same numbers on type or padding, keeping `10px 12px` as the product-input padding rather than as a named spacing step, and treating the 4–32px cluster as observed values rather than as a published Ollama spacing scale, is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification. The step values and the padding strings are the source's own.

### Shape

YAML `tokens.rounded.full`: 9999.

`9999px` is directly observed on the product controls recorded in Components. The 12px and 16px radii in this update are confined to documentation chrome; they are not generalized to the product marketing surface.

Treating `9999` / `9999px` as the observed product-control geometry rather than as a universal radius scale, and keeping the 12px docs-search and 16px docs-card radii off the product marketing surface, is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification. The three radius values and that confinement sentence are the source's own.

### Elevation

YAML `tokens.shadow.none`: `none`.

The captured homepage and pricing controls in Components have `box-shadow: none`. Separate product elements can only be described when directly measured; this reference does not turn the absence of shadow on the sampled controls into a universal product rule. Docs cards carry transparent ring values in the raw capture, not an elevated product-card token.

Reading that sampled `box-shadow: none` as insufficient grounds for a universal product shadow rule, and keeping the docs-card transparent ring off any product-card elevation token, is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification. The `none` token and the sampled `box-shadow: none` are the source's own.

### Motion

Some captured class strings declare color-transition utilities, but no interaction snapshot measured their resulting motion or state. No duration, easing, or motion token is asserted from this evidence.

Do not promote a motion duration, easing curve, animation name, transition property, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Stating that five-kind, per-component promotion gate is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification. The source's own constraint that no duration, easing, or motion token is asserted remains.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. That sorting, the reading of those classes as domains that may not fill one another, each item's promotion decision (`ui-sans-serif` as the product sans stack, `ui-monospace` as the product mono stack, `system-ui` as a bundle observation rather than a brand font, `SF Pro Rounded` unresolved, declared docs faces omitted), the docs surface as therefore not evidence for the homepage/pricing typography system, and Apple SF material as not a license for an Ollama-hosted face, are a derived editorial implementation inference from the verified surfaces; they are not Ollama-authored or a separately published UI specification. The observations inside the rows are the source's own.

| Evidence class | Resolution |
|---|---|
| Official product-use | Ollama’s official homepage, pricing page, documentation, and public repository all frame the product around local and open-model workflows. They do not provide a first-party typography specification or a downloadable Ollama-branded typeface in the sources reviewed for this update. |
| Live computed product-surface use | `ui-sans-serif` is the high-confidence visible system stack across the captured homepage and pricing page; `system-ui` is also observed in the bundle. These are system-stack facts, not a claim to a proprietary Ollama font. |
| Unresolved computed | `SF Pro Rounded` appears in computed headings on the homepage and pricing page (including 36px/500/40px and 48px/600/48px), but the supplied FontFaceSet/source reconciliation contains no matching loaded face or source URL. It remains **unresolved** and is deliberately excluded from `tokens.typography.family`. Apple describes SF Pro and its rounded variant as Apple platform fonts; that does not establish an Ollama-distributed webfont or a portable product token. |
| Live computed command UI | `ui-monospace` is observed in product command-related UI and is retained as a system-stack token. The capture does not establish a custom downloadable monospace family for the product. |
| Declared-only documentation assets | On `docs.ollama.com`, the raw bundle declares `Inter`, `paperMono`, `CMU Typewriter Text`, and `Latin Modern` sources. It records zero visible usage for each. They remain declared-only documentation assets, not product typography tokens or live specimens. The docs surface is therefore not evidence for the homepage/pricing typography system. |
| Official distributed asset | No Ollama-distributed type family was verified. |
| License | Apple’s SF Pro material describes an Apple platform font. It is not a license for an Ollama-hosted face. |

### Family

- **Current visible UI family:** system `ui-sans-serif` (YAML `tokens.typography.family.sans`). `system-ui` is also observed in the bundle.
- **Command UI family:** system `ui-monospace` (YAML `tokens.typography.family.mono`).
- **Unresolved, not a family token:** `SF Pro Rounded`. Do not substitute a local or system font and label it `SF Pro Rounded`.
- Do not promote declared docs fonts (`Inter`, `paperMono`, `CMU Typewriter Text`, `Latin Modern`) to the product UI family.

Calling `ui-sans-serif` the product UI family because it is the high-confidence visible system stack, retaining `ui-monospace` only for product command-related UI, and refusing to promote `SF Pro Rounded` or the declared docs faces, is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification. The family names and the unresolved/declared-only statuses are the source's own.

### Type roles

YAML unitless line-height ratios and the §3 pixel line-heights are both writings of the same roles; they are not converted into each other. YAML `use` strings sit beside the §3 surface-boundary writing.

| Role | Family status | Size | Weight | Line height | YAML `use` / §3 boundary |
|---|---|---:|---:|---|---|
| Product body-sm | system `ui-sans-serif` | 14px | 400 | 1.43 / 20px | YAML: Observed product text and input. §3: homepage and pricing |
| Product body | system `ui-sans-serif` | 16px | 400 | 1.5 / 24px | YAML: Observed product list and body text. §3: homepage and pricing |
| Product navigation | system `ui-sans-serif` | 18px | 400 | 1.56 / 28px | YAML: Product navigation and header controls. §3: homepage |
| Pricing section title | system `ui-sans-serif` | 30px | 500 | 1.2 / 36px | YAML: Observed pricing heading. §3: pricing |
| Rounded display headings | unresolved `SF Pro Rounded` | 36px; 48px | 500; 600 | 40px; 48px | homepage and pricing; no loaded/source match. Not in `tokens.typography.family` |
| Product command UI | system `ui-monospace` | 14px | 400 | 22.75px | homepage. Not a YAML type-role key |
| Docs fonts | declared-only | | | | no visible usage recorded; docs only |

Keeping YAML `body-sm` / `body` / `nav` / `section` unmerged from each other, keeping YAML unitless line-height ratios and the §3 pixel line-heights as both writings of the same roles rather than converting them into each other, keeping the unresolved `SF Pro Rounded` metrics off the system-stack family, keeping product-command `14px / 400 / 22.75px` unmerged from body-sm `14px / 400 / 20px`, and keeping docs fonts off the homepage/pricing system, is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification.

The observed product text scale includes 14px/400/20px, 16px/400/24px, 18px/400/28px, and a 30px/500/36px pricing heading.

### Assets

- Catalog logo record is `type: simpleicons`, `slug: ollama`. That is an identity pointer, not an Ollama-distributed brand file, and is not presented as a brand asset here.
- Terminal and command language is used as product content, not ornament.
- Official repository: `https://github.com/ollama/ollama`. Official open-model narrative: `https://ollama.com/blog/all-aboard-open-models`.

Reading the simpleicons slug as an identity pointer rather than as an Ollama-distributed brand file, and reading terminal and command language as product content rather than ornament, is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The variants below preserve the captured selector, surface, and default-state provenance. The collector recorded zero interaction snapshots, so no hover, focus, pressed, disabled, error, dialog, or menu state is specified. No product interaction-state variants are included in this update. The supplied collector recorded `interactionCount: 0` and no observed hover, focus, pressed, disabled, error, dialog, toast, or tab state. A future capture can add only states with selector, surface, raw computed value, and interaction provenance.

YAML `tokens.components` is `{}`. No component in this file is in the token set, so no `Primitive type` field is attached.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

The applicability note above, every interactive-kind verdict, every applicability verdict, and the reason given for either, and attaching no `Primitive type` field because YAML `tokens.components` is `{}`, are a derived editorial implementation inference from the verified surfaces; they are not Ollama-authored or a separately published UI specification. The measured field values and the captured default-only observation are the source's own.

### Sign-in ghost

- Role: Homepage header link
- Kind: interactive
- Anatomy: label
- Background: `rgba(0, 0, 0, 0.05)`
- Text: `#000000`
- Radius: `9999px`
- Padding: `6px 16px`
- Font: `18px / 400 / ui-sans-serif`
- Use: Homepage header link at `home::[data-omd-capture="5"]`.
- Observed: default only
- not in the token set

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the homepage header |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A header link can be unavailable; visual treatment omitted |
| loading | not-applicable | Homepage header link; the control itself commits no operation that pends |
| error | not-applicable | Destination link; it reports no request or validation failure |
| success | not-applicable | Reaching sign-in is navigation, not an action-outcome confirmation on this control |

### Download charcoal CTA

- Role: Homepage header CTA
- Kind: interactive
- Anatomy: label
- Background: `#262626`
- Text: `#ffffff`
- Radius: `9999px`
- Padding: `6px 16px`
- Font: `18px / 400 / ui-sans-serif`
- Use: Homepage header CTA at `home::[data-omd-capture="6"]`.
- Observed: default only
- not in the token set

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the homepage header |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A download control can be unavailable; visual treatment omitted |
| loading | applicable | Header Download CTA; a download can pend; visual treatment omitted |
| error | applicable | A download can fail and report on this control; visual treatment omitted |
| success | applicable | A download can complete; visual treatment omitted |

### Hero charcoal CTA

- Role: Homepage hero action
- Kind: interactive
- Anatomy: label
- Background: `#262626`
- Text: `#ffffff`
- Radius: `9999px`
- Padding: `12px 32px`
- Font: `18px / 500 / ui-sans-serif`
- Use: Homepage hero action at `home::[data-omd-capture="10"]`.
- Observed: default only
- not in the token set

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the homepage hero |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A hero action can be unavailable; visual treatment omitted |
| loading | applicable | Homepage hero action; the CTA commits a start step that can pend; visual treatment omitted |
| error | applicable | The committed start step can fail and report on this control; visual treatment omitted |
| success | applicable | The committed start step can confirm on this control; visual treatment omitted |

### Pricing outlined CTA

- Role: Homepage pricing action
- Kind: interactive
- Anatomy: label
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #d4d4d4`
- Radius: `9999px`
- Padding: `8px 24px`
- Font: `14px / 500 / ui-sans-serif`
- Use: Homepage pricing action at `home::[data-omd-capture="12"]`.
- Observed: default only
- not in the token set

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the homepage |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A pricing action can be unavailable; visual treatment omitted |
| loading | not-applicable | Homepage pricing action that takes the reader to a pricing path; the control itself commits no operation that pends |
| error | not-applicable | Destination pricing action; it reports no request or validation failure |
| success | not-applicable | Reaching a pricing path is navigation, not an action-outcome confirmation on this control |

### Pricing white CTA

- Role: Homepage pricing action
- Kind: interactive
- Anatomy: label
- Background: `#ffffff`
- Text: `#000000`
- Radius: `9999px`
- Padding: `8px 24px`
- Font: `14px / 500 / ui-sans-serif`
- Use: Homepage pricing action at `home::[data-omd-capture="13"]`.
- Observed: default only
- not in the token set

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the homepage |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A pricing action can be unavailable; visual treatment omitted |
| loading | not-applicable | Homepage pricing action that takes the reader to a pricing path; the control itself commits no operation that pends |
| error | not-applicable | Destination pricing action; it reports no request or validation failure |
| success | not-applicable | Reaching a pricing path is navigation, not an action-outcome confirmation on this control |

### Pill input

- Role: Homepage input
- Kind: interactive
- Anatomy: value field
- Text: `#000000`
- Border: `0px solid #6b7280`
- Radius: `9999px`
- Padding: `10px 12px`
- Font: `14px / 400 / ui-sans-serif`
- Use: Homepage input at `home::[data-omd-capture="4"]`; also observed on pricing.
- Observed: default only
- not in the token set

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the homepage; also observed on pricing |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | Product input; a submitted value can pend; visual treatment omitted |
| error | applicable | Form field; visual treatment omitted |
| success | applicable | Form field; visual treatment omitted |

### Docs search control

- Role: Docs-only search button
- Kind: interactive
- Anatomy: control
- Background: `#ffffff`
- Text: `#6f6f6f`
- Radius: `12px`
- Padding: `0px 12px 0px 14px`
- Font: `14px / 400 / ui-sans-serif`
- Use: Docs-only search button at `surface-3::[data-omd-capture="5"]`.
- Observed: default only
- not in the token set
- Documentation chrome — separate domain

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on `docs.ollama.com` |
| hover | applicable | Pointer-web search control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A search control can be unavailable; visual treatment omitted |
| loading | applicable | Search control; a search can pend; visual treatment omitted |
| error | applicable | A search can fail; visual treatment omitted |
| success | not-applicable | Completing a search presents results elsewhere; the control does not confirm an operation outcome |

### Docs link card

- Role: Docs-only link card
- Kind: interactive
- Anatomy: card
- Background: `#ffffff`
- Border: `1px solid oklab(0.144787 0.00000661612 0.00000289828 / 0.1)`
- Radius: `16px`
- Font: `16px / 400 / ui-sans-serif`
- Use: Docs-only link cards at `surface-3::[data-omd-capture="34"]` and related selectors.
- Observed: default only
- not in the token set
- Documentation chrome — separate domain

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on `docs.ollama.com` |
| hover | applicable | Pointer-web link card; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A docs link can be unavailable; visual treatment omitted |
| loading | not-applicable | Docs link card; the card itself commits no operation that pends |
| error | not-applicable | Destination link; it reports no request failure |
| success | not-applicable | Reaching a docs page is navigation, not confirmation on the card |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing system

The captured bundle clusters spacing at 4, 6, 8, 12, 16, 24, and 32px. These are observed values, not a published Ollama spacing scale. Header actions use 6px 16px padding, the hero CTA uses 12px 32px, and the product input uses 10px 12px.

### Product composition

- The homepage leads with an install command and a narrow set of entry points: Models, Docs, Pricing, Sign in, and Download.
- The cloud proposition follows the local starting point instead of displacing it.
- Pricing is presented as Free, Pro, Max, and an announced Team tier on the captured official pricing page.
- Documentation is a separate content surface with navigation, search, cards, and API/integration paths; its chrome should not dictate the public product-marketing layout.

### Radius boundary

`9999px` is directly observed on the product controls recorded in Components. The 12px and 16px radii in this update are confined to documentation chrome; they are not generalized to the product marketing surface.

### Responsive behavior

The supplied evidence is a 1440×900 desktop capture for each surface. It confirms the desktop component values in Components but does not establish mobile breakpoints, collapsed navigation, touch targets, or responsive asset behavior. Those fields are intentionally absent rather than extrapolated.

Reading the homepage's install-command lead and the five named entry points as a narrow captured marketing composition, treating the 4–32px cluster as observed values rather than as a published Ollama spacing scale, reading the cloud proposition as following the local starting point instead of displacing it, keeping 12px and 16px radii confined to documentation chrome, keeping documentation chrome from dictating product-marketing layout, and reading 1440×900 as the supplied capture size rather than as a breakpoint system, is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification. The entry-point labels, the Free / Pro / Max / announced Team presentation, the padding strings, and the 1440×900 capture size are the source's own.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice samples

These three strings are the source's verified voice samples, kept byte-exact. Grouping them as voice samples of the captured marketing surfaces is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification.

- `The easiest way to build with open models`
- `Start local. Scale with cloud.`
- `Your model. Your machine. Your data.`

The official homepage and repository also use installation commands, `Get started`, and `Download`.

### Voice and tone

The official homepage and repository use concise, action-first language: installation commands, “Get started,” “Download,” and “Start local. Scale with cloud.” The July 2026 company post explains the larger idea in direct developer language—open models should be easy to build, run, and own.

| Do | Don't |
|----|-------|
| Lead with the concrete task or command. | Lead with abstract AI hype. |
| Explain local control and optional scale plainly. | Imply cloud use is required. |
| Name the developer workflow or integration. | Hide the next technical step behind marketing language. |

Calling that register concise and action-first, calling the July 2026 post's language direct developer language, and keeping the Do / Don't table as the source's own voice contract, is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification. The quoted strings and the table rows are the source's own.

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

These decisions are unnamed values, not permissions to invent. Listing them as unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification.

- `SF Pro Rounded` as a family token or live specimen (computed headings; no matching loaded face or source URL)
- hover, focus, pressed, disabled, error, dialog, toast, tab, and menu visual treatments (`interactionCount: 0`)
- duration, easing, animation name, transition property, and reduced-motion behavior
- mobile breakpoints, collapsed navigation, touch targets, and responsive asset behavior
- a published spacing, shadow, or color scale
- a gradient token
- a first-party typography specification or a downloadable Ollama-branded typeface
- declared docs fonts (`Inter`, `paperMono`, `CMU Typewriter Text`, `Latin Modern`) as product UI family or live specimens
