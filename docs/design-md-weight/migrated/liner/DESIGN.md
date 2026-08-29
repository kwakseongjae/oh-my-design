# Liner Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Liner (라이너) is a Korean AI startup that began as a web highlighter and has evolved into an AI-powered search and research copilot serving 11M+ professionals. This contract covers two current first-party captures inspected on 2026-06-22: the homepage at `https://liner.com` (nav, hero, product tabs) and the pricing page at `https://liner.com/pricing` (plan cards, billing toggle, CTA variants). The official blog at `https://liner.com/blog` is a brand-owned narrative source in the same packet; it is not a token surface. Treating `https://liner.com` and `https://liner.com/pricing` as this contract's token surfaces, and treating `https://liner.com/blog` as narrative rather than as a token surface, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

The captured homepage uses a near-white canvas (`#ffffff`) with Liner Green (`#197b2e`) on CTAs, Flare display headings in Forest Dark (`#14371b`), and Pretendard Variable / Pretendard JP Variable for UI and body. Interactive geometry on those captures is 8px on standard buttons, 200px on the hero pill, and 9999px on product-selector tabs. Live inspection recorded `box-shadow: none` across nav, hero, product tabs, and most cards; pricing plan cards carry `0 1px 4px rgba(0,0,0,0.08)`. Surface tints `#f9f9fa` and `#f6f6f7` are recorded. Readings of that captured layer as quiet authority, as a single brand green reserved for decisive action, as editorial serif versus functional sans, as near-shadowless depth through tints and 1px borders, or as an AI product that respects cognitive space, are a derived editorial implementation inference from the verified surfaces; they are not Liner-authored or a separately published UI specification.

Brand narrative recorded by the source, kept separate from the interface evidence above. Liner began around 2016 as a web-highlighting extension — a digital analog to drawing a yellow line on a physical page. The source states that the brand name comes from "liner" as in highlighter, and that the signature green palette echoes that origin: the color you reach for when something matters. As the highlighting use case deepened, Liner evolved from passive curation (saving highlighted text) into active cognition assistance — surfacing what you saved, connecting research threads, and ultimately generating answers grounded in real sources. By 2026 the source positions Liner as "AI agents for professionals" with over 11 million users. The product named on the captured homepage encompasses Search (AI-powered web search with cited answers), Research (deep-dive academic and multi-source reports), and Write (grounded writing with reference integration). The tagline "Inside the AI Search Engine 11M+ People Trust" is recorded on that narrative. The blog post "스타트업에서 제한된 리소스로 디자인 시스템 개발하기" (Building a design system with limited startup resources) is a Liner-owned engineering article; it is not a separately published component-token specification and does not by itself supply interface tokens. Liner's positioning is squarely anti-hallucination: the word "accurate" appears in both the homepage headline and the brand's core product promise. For a Korean AI startup competing globally against entrenched players, "accuracy" is the chosen moat — not features, not UX bells, but epistemic trustworthiness. Treating that 2016 origin, the digital analog / yellow line / physical page origin image, the highlighter name, the evolution from passive curation into active cognition assistance, the 11M+ figure, the Search / Research / Write product split, the tagline, the blog title, the homepage-headline positioning around the word "accurate", and the anti-hallucination / chosen moat / epistemic trustworthiness positioning as official context facts that do not by themselves supply interface tokens, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured homepage or pricing control, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

- Switch Search / Research / Write on the captured homepage product tabs.
- Start or upgrade with the captured Get started / Get Pro / Get Max controls.
- Compare Free / Pro / Max / Enterprise on `https://liner.com/pricing`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its §13 figures as fictional archetypes informed by publicly observable Liner user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or affiliation classification is carried into this document or its sidecar. What the source independently records at a group level is professionals, academics, and knowledge workers, with Korean and Japanese user bases named in the typography notes. Dropping those fictional archetypes rather than promoting them, carrying no demographic segment list, and reading those group-level contexts as this product's audience, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside it, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

- Flare serif (custom) for all display headlines — elegant and research-grade
- Pretendard Variable / Pretendard JP Variable for all UI and body — global-ready, KR-native
- Single brand green (`#197b2e`) reserved for primary CTAs — one-action-one-color discipline
- Deep forest green (`#14371b`) for headings — organic, nature-referenced
- Near-black `#1e1e1f` for body — warm and legible, not harsh pure-black
- Flat depth: shadow-free on most surfaces; tinted `#f9f9fa` and hairlines for separation
- Geometric mix: 8px radius for buttons, 200px for pills, 9999px for tab selectors
- Light neutral palette (`#f9f9fa`, `#f6f6f7`) with deliberate forest-green accents

### Principles

These 5 items — numbered stems resting on official homepage and blog material recorded by the source, plus every *UI implication* below as the source's own editorial reading — are a derived editorial implementation inference from the verified surfaces; they are not Liner-authored or a separately published UI specification.

1. **Accuracy before impression.** Liner's core promise is truthful, cited AI output. *UI implication:* source attribution is a first-class UI citizen; never hide provenance of AI-generated content.
2. **Professional context, not consumer entertainment.** Liner serves researchers, academics, and knowledge workers. *UI implication:* dense information layouts are acceptable; playful micro-interactions are not the register.
3. **One color, one action.** Liner Green (`#197b2e`) is the single call-to-action color. *UI implication:* every green element should be actionable; decorative green is a design error.
4. **Serif for aspiration, sans for function.** Flare carries the brand promise; Pretendard carries the work. *UI implication:* never render operational UI in Flare; never render the brand headline in Pretendard.
5. **Restraint as credibility.** A tool trusted with professional research earns that trust through visual discipline. *UI implication:* remove shadows, reduce palette, add whitespace before adding decoration.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Liner-authored or a separately published UI specification.

- Use Flare serif for all display headlines at weight 400 — let letterform do the work
- Use Pretendard Variable for all button labels and captions at 15px/500
- Reserve Liner Green (`#197b2e`) exclusively for primary action buttons
- Use Forest Dark (`#14371b`) for heading text — not pure black
- Apply 200px radius for hero pills and billing toggles; 8px for action buttons
- Separate page sections with `#f9f9fa` tint shifts and rgba borders — no shadow
- Use muted grey at 80% opacity for secondary and placeholder text
- Write button labels in sentence case at 15px/500 Pretendard

### Avoid

The source states these seven as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Liner-authored or a separately published UI specification.

- Apply Flare to body copy or small UI text — it belongs exclusively to headlines
- Spread green (`#197b2e`) to decorative elements — it signals "action" only
- Use pure black (`#000000`) for heading text — the brand palette uses Forest Dark `#14371b`
- Stack heavy shadows or gradient overlays — Liner is a flat, clean AI system
- Use weight 700+ on display text — Flare at 400 is canonical; boldness is a design mistake here
- Mix border radius scales arbitrarily — 8px for buttons, 12px for cards, 200px for pills
- Create new saturated accent colors — the palette is intentionally near-monochromatic with single green

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys follow the YAML paths. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.canvas` `#ffffff` unmerged from `tokens.colors.on-primary` `#ffffff`, keeping Outline CTA background `#ffffff` and billing-toggle background `#ffffff` unmerged from canvas and from on-primary, keeping promo-badge text `#ffffff` as `tokens.components.badge-warning` foreground rather than as canvas or on-primary, keeping `tokens.colors.ink` `#1e1e1f` unmerged from recorded `#000000` labels, keeping `tokens.colors.surface` `#f9f9fa` unmerged from `tokens.colors.surface-alt` `#f6f6f7`, keeping `tokens.colors.primary` `#197b2e` unmerged from `tokens.colors.primary-dark` `#14371b` and from `tokens.colors.primary-tint` `#edf3ed`, and keeping `tokens.colors.warning` `#fe8f16` as the Annual "Save 20%" badge rather than as a general error color, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

**Primary brand**

- **Liner Green** (`#197b2e`): `tokens.colors.primary`. Catalog identity `primary_color` is `#197b2e`. Nav "Get started" CTA, "Get Pro" and "Get Max" plan buttons. The source also records an 80% derivation (`rgb(25,123,46)`) covering link text and ghost button borders. The source writes that this color comes from Liner's highlighter-green origin — the color you reach for to mark what matters.
- **Forest Dark** (`#14371b`): `tokens.colors.primary-dark`. Heading and display color for H1–H3.
- **Primary Tint** (`#edf3ed`): `tokens.colors.primary-tint`. Active state background for product-selector tabs.

**Neutral and surface**

- **White Canvas** (`#ffffff`): `tokens.colors.canvas`. Page background, pricing cards, feature cards.
- **On-Primary White** (`#ffffff`): `tokens.colors.on-primary`. Text on all green backgrounds. This is not `tokens.colors.canvas`.
- **Surface Light** (`#f9f9fa`): `tokens.colors.surface`. Alternate card and section background.
- **Surface Alt** (`#f6f6f7`): `tokens.colors.surface-alt`. Secondary tinted block surfaces.
- **Near-Black Ink** (`#1e1e1f`): `tokens.colors.ink`. Primary body text, plan names, specs.
- **Muted Grey** (`#6d6d70`): `tokens.colors.muted`. Muted text at 80% opacity for subtitles, toggle labels, secondary copy. Rendered as `rgba(109, 109, 112, 0.8)` in live DOM.

**Recorded body writings that are not YAML `tokens.colors.*` keys**

- **Pure Black** (`#000000`): highest-contrast element labels and select heading contexts; also hero pill text, product-tab text, and `#000000` nav links. Not `tokens.colors.ink`.
- **Warning Orange** (`#fe8f16`): `tokens.colors.warning`. "Save 20%" promo badge on Annual billing toggle. Only semantic color on the pricing surface.

### Spacing

YAML `tokens.spacing` steps, recorded without a px suffix: `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 20` · `xl: 24` · `xxl: 40`. Source §5 writes the same scale with a unit: 4px, 8px, 12px, 16px, 20px, 24px, 40px, and names a 4px base unit. `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8` and not button radius 8px. `tokens.spacing.md: 12` is not `tokens.rounded.md: 12` and not card radius 12px. `tokens.spacing.base: 16` is not body size 16px. `tokens.spacing.lg: 20` is not tab padding `0px 20px`. `tokens.spacing.xl: 24` is not the recorded 24px hero subtitle. `tokens.spacing.xxl: 40` is not button height 40px. Keeping those YAML steps unitless beside the source's own px list, not treating a spacing step as a type size, radius, padding, or control height, and treating nav 36px, standard-button 40px, hero-pill 48px, product-tab 48px, and billing-toggle 44px as local captured geometry that is not a spacing-scale step, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

Local captured geometry: nav interactive height 36px; standard button height 40px; hero pill height 48px; product tab height 48px; billing toggle height 44px.

### Shape

YAML `tokens.rounded` (unitless steps, kept on their own path): `sm: 8` · `md: 12` · `lg: 200` · `full: 9999`.

- 8px: standard buttons, inputs, nav dropdown items — YAML `tokens.rounded.sm`
- 12px: content cards, pricing plan cards — YAML `tokens.rounded.md`
- 200px: hero pill CTA, billing toggle container — YAML `tokens.rounded.lg`
- 9999px: product selector pills, promo badges — YAML `tokens.rounded.full`

Reading 8 / 12 / 200 / 9999 as local harvested geometry for those observed controls, not a universal radius for every unlisted Liner surface, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

### Elevation

YAML `tokens.shadow.none: "none"` · `tokens.shadow.subtle: "0 1px 4px rgba(0,0,0,0.08)"`.

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow | Nav, hero, most content sections |
| Surface (1) | `#f9f9fa` background shift | Feature card groups, alternate page sections |
| Card (2) | `0 1px 4px rgba(0,0,0,0.08)` | Pricing plan cards |

Live inspection confirmed `box-shadow: none` across nav, hero, product tabs, and most cards. Only pricing plan cards carry the light 1px-blur shadow. The source's shadow philosophy, kept as recorded: the system signals "AI research tool" through clarity and restraint — visual noise is treated as a barrier to focus. Reading those samples as a near-shadowless treatment for the observed elements, with depth through `#f9f9fa` / `#f6f6f7` tint shifts and thin rgba-borders rather than as a global shadow scale, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

### Motion

Durations the source records, kept as duration tokens. They are not easing curves.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Hover state transitions, tab indicator movement |
| `motion-standard` | 200ms | Card reveals, dropdown open/close, billing toggle |
| `motion-slow` | 300ms | Page section entrance, research result streaming onset |

Unsourced easing curve values (`ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`) are omitted at the curve-value boundary. `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` matches the legacy template example and is not live-computed. Named easing roles the source records stay as role names without those curve values, with the Use column the source records:

| Token | Use |
|---|---|
| `ease-enter` | Arriving elements — cards, dropdowns, research reports |
| `ease-exit` | Dismissals |
| `ease-standard` | Toggles, tab switches, two-way transitions |

Signature motions the source names stay, with their duration tokens and recorded easing-role pairs; the omitted curve values are not restored as promoted tokens. The source's motion rules, kept as recorded: motion is minimal and purposeful — this is a professional research tool, not an entertainment experience. Product tabs switch at `motion-fast / ease-standard`; research results stream into view at `motion-slow / ease-enter` to signal that valuable content is arriving. No bounce, no spring, no celebration animations. Under `prefers-reduced-motion: reduce`, all transitions are instant. The product remains fully functional without animation — motion is an enhancement, not a dependency.

Omitting the three unsourced curves, keeping the three duration rows as duration tokens rather than easing curves, keeping the three easing-role Use writings, keeping the recorded signature pairings and reduced-motion rule, holding that `ease-exit` matching the legacy template example is not live-computed evidence, holding the five-kind per-component promotion gate rather than treating a single named curve as sufficient, and holding that official documentation of a single curve or duration is not that gate, are derived editorial implementation inferences from the verified surfaces; they are not Liner-authored or a separately published UI specification.

Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior as a new component token until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating Flare as the captured display face without a loadable source URL, treating Pretendard JP Variable as the captured body stack, refusing to substitute a system font while calling it Flare or Pretendard, reading the absence of a Liner font-licence URL or public type specimen as unresolved official product-use rather than as a distributed-asset proof, reading FontFaceSet absence as a missing specimen URL rather than as family deletion, and reading `sans-serif` as a fallback not a substitute branded family, are derived editorial implementation inferences from the verified surfaces; they are not Liner-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | No Liner-authored font licence or public type specimen establishing Flare as a distributed brand asset was found in the requested source search. Flare is named as a custom humanist serif used exclusively for H1, H2, H3 at headline sizes. |
| Live computed surface-use | Homepage H2 "Accurate AI agents built for smarter work" computes `Flare` / 54px / 400 / `#14371b`. Body computes `"Pretendard JP Variable", "Pretendard JP", "Pretendard Variable", sans-serif` at 16px / 400. Nav "Get started" computes `"Pretendard Variable"` 15px / 500. |
| FontFaceSet and source corroboration | The supplied capture records computed family names. It does not record matching FontFaceSet source URLs for Flare or Pretendard. |
| Official distributed asset | No Liner-hosted font-file URL is recorded. |
| Declared-only | None named beyond the computed Flare / Pretendard Variable / Pretendard JP Variable stack. |
| License | No Liner font-licence URL is recorded. Do not invent one. |
| System fallback | `sans-serif` on the body stack is a fallback, not a substitute branded family. |

### Family

- **Display:** `Flare` — YAML `tokens.typography.family.display`. Custom humanist serif for H1, H2, H3 at headline sizes. Weight 400 across all display sizes (the source writes that the letterforms carry authority via shape, not weight).
- **UI/Body:** `Pretendard Variable` — YAML `tokens.typography.family.body`. Loaded as `"Pretendard Variable"` for button/body contexts.
- **Multilingual UI:** `"Pretendard JP Variable", "Pretendard JP", "Pretendard Variable"` — YAML `tokens.typography.family.ui`. Nav items and interactive controls supporting CJK glyph coverage.
- Do not substitute a system font and call it Flare or Pretendard. Reading computed visible use without a matching FontFaceSet source URL as family metadata rather than as a loadable specimen URL, and keeping YAML `tokens.typography.family.body` `Pretendard Variable` unmerged from YAML `tokens.typography.family.ui` Pretendard JP stack, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

### Type roles

Line heights stay in the form the source verified them: YAML unitless `1.1` / `1.19` / `1.21` / `1.35` / `1.25` / `1.5` / `1.33` / `1.29`. Keeping those YAML unitless ratios beside the source's own hierarchy-table notes, keeping the live 24px hero subtitle as a body-and-sibling row that is not a YAML typography key, keeping Plan name 17px Pretendard JP Variable 400 as a source §9 writing that is not Feature H3 and not a YAML typography key, keeping `#000000` nav links as a source §9 color assignment on the Nav link role and on Pure Black, and keeping each YAML `use` string beside the hierarchy-table note without replacing either, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Notes |
|---|---|---:|---:|---:|---|
| Hero display | Flare | 54px | 400 | 1.1 | Homepage main H2 — color `#14371b`. YAML use: Hero display headline — Flare serif |
| Section heading | Flare | 42px | 400 | 1.19 | Product-feature H2. YAML use: Section heading — Flare serif |
| Page title | Flare | 34px | 400 | 1.21 | Pricing page H1. YAML use: Page title (pricing H1) — Flare serif |
| Feature H3 | Pretendard JP Variable | 17px | 400 | 1.35 | Feature card heading. YAML use: Feature card heading — Pretendard JP Variable |
| Nav link | Pretendard JP Variable | 16px | 400 | 1.25 | Top nav items, height 36px. Source §9: `#000000` nav links. YAML use: Nav links — Pretendard JP Variable |
| Body | Pretendard JP Variable | 16px | 400 | 1.5 | Body copy. YAML use: Body copy — Pretendard JP Variable |
| Button label | Pretendard Variable | 15px | 500 | 1.33 | All CTA buttons. YAML use: Button labels — Pretendard Variable |
| Caption | Pretendard Variable | 14px | 400 | 1.29 | Dropdown items, footnotes. YAML use: Caption and dropdown text — Pretendard Variable |
| Hero subtitle | Pretendard JP Variable | 24px | 400 | | Homepage H1 subtitle; color `rgba(109, 109, 112, 0.8)`. Not a YAML `tokens.typography` key. Live inspect 2026-06-22. |

Source §9 also names Plan name 17px Pretendard JP Variable 400 `#1e1e1f` on the pricing plan card. That writing is not Feature H3 and is not a YAML `tokens.typography` key.

Source typography principles, kept as type rules: serif for persuasion, sans for function — Flare and Pretendard never swap roles; weight-light at display — Flare displays at weight 400; CJK readiness built in via Pretendard JP Variable; consistent 15px/500 buttons across primary, outline, ghost, and toggle. Treating those four as type-role rules from the source's typography section rather than as a separately published type specification is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

### Assets

Catalog identity points at `logo.type: favicon`, slug `https://www.google.com/s2/favicons?domain=liner.com&sz=128`. That pointer is a Google favicon-service URL, not a first-party file on `liner.com`. Treating it as identity metadata for the captured homepage rather than as a Liner-hosted mark, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

All component observations below are scoped to the supplied `https://liner.com` and `https://liner.com/pricing` desktop captures. The source records these product-level state treatments. They stay as recorded treatments for the states they name; they are not a complete state-coverage claim for every control.

| State | Treatment |
|---|---|
| Empty (no search results) | White canvas. Near-black `#1e1e1f` single-line message. One green CTA to refine query. No decorative illustration. |
| Empty (no saved highlights) | Muted grey `rgba(109,109,112,0.8)` copy explaining the state, with a green link to start searching. |
| Loading (search in progress) | Skeleton rows on `#f9f9fa` tinted surface at expected result heights, 8px radius. Flat shimmer — no heavy animation. |
| Loading (research generation) | Step-by-step progress indicator with source count updating; maintains context visible. |
| Error (network / API failure) | Inline message in near-black `#1e1e1f` with plain-language explanation; green retry CTA. |
| Error (content not found) | "No results" state with suggestion to broaden search terms; calm, non-accusatory tone. |
| Success (research complete) | Research report renders inline with source citations. No celebratory animation — the content is the reward. |
| Skeleton | `#f9f9fa` blocks at final content dimensions, 8px radius, flat opacity pulse. |
| Disabled | Muted grey `rgba(109,109,112,0.8)` label; green buttons fade to reduced opacity, not grey — preserves brand read. |
| Focus | 2px `#197b2e` outline on interactive elements — green focus ring consistent with the action color. |

The generic observed-state name Focus (2px `#197b2e` outline) is a captured Focus treatment, not a `focus-visible` treatment. The source records no `focus-visible` capture; no `focus-visible` row carries a treatment. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover applies wherever a pointer control exists. Loading, error, and success follow the control’s product role, not its primitive kind. Where a state applies by role and no treatment was observed, the state stays applicable and only its visual treatment is omitted. Absence of a capture is not a `not-applicable` reason. Every interactive-kind verdict, every applicability verdict, and the reason given for either — including keeping each YAML `use` string as a Token-set use row, keeping YAML font / padding / radius / border / height / states / `active` byte forms beside the §4 writings, treating the Capture-record empty / loading / error / success / skeleton / disabled / Focus rows as product-level recorded treatments rather than as per-control computed state tokens, treating Get Pro / Get Max as upgrade commits, treating Start for free / Contact us / the hero Get started pill as destinations, treating Search / Research / Write as tabs, and treating Monthly / Annual as a billing toggle — is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary CTA

- Role: Primary upgrade CTAs in nav and pricing cards
- Token-set use: Primary CTA — Get started / Get Pro / Get Max
- Primitive type: `button` · Kind: interactive
- Anatomy: labelled filled button
- Background: `#197b2e`
- Text: `#ffffff`
- Radius: 8px. YAML radius: `8px`
- Height: 40px. YAML height: `40px`
- Font: 15px / 500 / Pretendard Variable. YAML font: `15px / 500 Pretendard Variable`
- Observed: default on nav "Get started" and pricing "Get Pro" / "Get Max"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as nav Get started and pricing Get Pro / Get Max |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted. The captured generic-focus outline is not this row. |
| disabled | applicable | Button control; recorded treatment: green buttons fade to reduced opacity, not grey |
| loading | applicable | Get Pro / Get Max is an in-place upgrade commit; visual treatment omitted |
| error | applicable | A failed upgrade can be reported on this control; visual treatment omitted |
| success | applicable | A completed upgrade can be reported on this control; visual treatment omitted |

### Outline CTA

- Role: Free-tier CTA on pricing page — low-emphasis alternative
- Token-set use: Secondary free-tier CTA — Start for free
- Primitive type: `button` · Kind: interactive
- Anatomy: outlined button
- Background: `#ffffff`
- Text: `#1e1e1f`
- Border: `1px solid rgba(109, 109, 112, 0.24)`. YAML border: `1px solid rgba(109,109,112,0.24)`
- Radius: 8px. YAML radius: `8px`
- Height: 40px. YAML height: `40px`
- Font: 15px / 500 / Pretendard Variable. YAML font: `15px / 500 Pretendard Variable`
- Observed: default on pricing "Start for free"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the pricing Start for free control |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination button can be unavailable; visual treatment omitted |
| loading | not-applicable | This Start for free control presents a free-tier destination; it does not commit an operation whose pending result this button would report. |
| error | not-applicable | Same role reason: choosing that destination is not an operation with an error result this button would report. |
| success | not-applicable | Same role reason: choosing that destination is not an operation with a success result. |

### Ghost green CTA

- Role: Enterprise inquiry CTA — same green family, lower visual weight
- Token-set use: Enterprise / contact CTA — Contact us
- Primitive type: `button` · Kind: interactive
- Anatomy: transparent bordered button
- Background: transparent
- Text: `#197b2e`
- Border: `1px solid #197b2e`. YAML border: `1px solid #197b2e`
- Radius: 8px. YAML radius: `8px`
- Height: 40px. YAML height: `40px`
- Font: 15px / 500 / Pretendard Variable. YAML font: `15px / 500 Pretendard Variable`
- Observed: default on pricing "Contact us" / "Contact Liner"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the Contact us ghost control |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination button can be unavailable; visual treatment omitted |
| loading | not-applicable | This Contact us control presents an inquiry destination; it does not commit an operation whose pending result this button would report. |
| error | not-applicable | Same role reason: choosing that destination is not an operation with an error result this button would report. |
| success | not-applicable | Same role reason: choosing that destination is not an operation with a success result. |

### Hero Get-Started pill

- Role: Hero section product-feature "Get started" — larger pill form for product emphasis
- Token-set use: Hero section expanded get-started pill
- Primitive type: `button` · Kind: interactive
- Anatomy: transparent green-bordered pill
- Background: transparent
- Text: `#000000`
- Border: `1px solid #197b2e`. YAML border: `1px solid #197b2e`
- Radius: 200px. YAML radius: `200px`
- Height: 48px. YAML height: `48px`
- Font: 16px / 400 / Pretendard JP Variable. YAML font: `16px / 400 Pretendard JP Variable`
- Observed: default on the homepage hero

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the hero Get started pill |
| hover | applicable | Pointer-web pill; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination pill can be unavailable; visual treatment omitted |
| loading | not-applicable | This hero Get started pill presents a product destination; it does not commit an operation whose pending result this pill would report. |
| error | not-applicable | Same role reason: choosing that destination is not an operation with an error result this pill would report. |
| success | not-applicable | Same role reason: choosing that destination is not an operation with a success result. |

### Product selector tab (active)

- Role: Active state of Search / Research / Write product tabs
- Token-set use: Product selector tab — active state (Search / Research / Write)
- Token-set active: text `#000000` bg `#edf3ed`
- Primitive type: `tab` · Kind: interactive
- Anatomy: full-pill tab
- Background: `#edf3ed`
- Text: `#000000`
- Radius: 9999px. YAML radius: `9999px`
- Padding: 0px 20px. YAML padding: `0px 20px`
- Height: 48px
- Font: 16px / 400 / Pretendard JP Variable
- Observed: default active on product tab "Search"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the active Search / Research / Write tab |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be unavailable; visual treatment omitted |
| loading | not-applicable | This product tab selects Search / Research / Write; it does not commit an operation whose pending result this tab would report. |
| error | not-applicable | Same role reason: switching a product tab is not an operation with an error result this tab would report. |
| success | not-applicable | Same role reason: switching a product tab is not an operation with a success result. |

### Product selector tab (inactive)

- Role: Inactive product tab states
- Token-set use: Product selector tab — inactive
- Primitive type: `tab` · Kind: interactive
- Anatomy: full-pill tab
- Background: transparent
- Text: `#000000`
- Radius: 9999px. YAML radius: `9999px`
- Padding: 0px 20px. YAML padding: `0px 20px`
- Height: 48px
- Observed: default inactive (live sample: product tab "Research")

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the inactive product tab |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be unavailable; visual treatment omitted |
| loading | not-applicable | This inactive product tab is a selector, not a commit control whose pending result it would report. |
| error | not-applicable | Same role reason: an inactive tab does not report an operation error. |
| success | not-applicable | Same role reason: an inactive tab does not report an operation success. |

### Billing toggle

- Role: Monthly / Annual billing period selector on pricing page
- Token-set use: Billing toggle (Monthly / Annual)
- Primitive type: `toggle` · Kind: interactive
- Anatomy: pill toggle
- Background: `#ffffff`
- Text active: `#1e1e1f`
- Text inactive: `rgba(109, 109, 112, 0.8)`
- Radius: 200px. YAML radius: `200px`
- Height: 44px. YAML height: `44px`
- Observed: default; live samples "Annual" (active) and "Monthly" (inactive)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the Monthly / Annual billing toggle |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A toggle can be unavailable; visual treatment omitted |
| loading | not-applicable | This billing toggle selects Monthly / Annual; it does not commit an operation whose pending result this toggle would report. |
| error | not-applicable | Same role reason: switching a billing period is not an operation with an error result this toggle would report. |
| success | not-applicable | Same role reason: switching a billing period is not an operation with a success result. |

### Pricing plan card

- Role: Plan tier cards (Free / Pro / Max / Enterprise) on pricing page
- Token-set use: Pricing plan card with shadow
- Primitive type: `card`
- Kind: non-interactive — this is a plan-card container; the CTAs inside are the Primary / Outline / Ghost controls above
- Background: `#ffffff`
- Text: `#1e1e1f`
- Radius: 12px. YAML radius: `12px`
- Shadow: `0 1px 4px rgba(0,0,0,0.08)`
- Source §9: Plan name 17px Pretendard JP Variable 400 `#1e1e1f`. Not Feature H3 and not a YAML `tokens.typography` key.
- No state-applicability map: the card itself is not an interactive control.

### Feature card (surface)

- Role: Feature highlight cards on light tinted sections
- Token-set use: Feature card on light surface
- Primitive type: `card`
- Kind: non-interactive — feature highlight container, not a commit control
- Background: `#f9f9fa`
- Text: `#1e1e1f`
- Radius: 12px. YAML radius: `12px`
- No state-applicability map: the card itself is not an interactive control.

### Promo badge

- Role: "Save 20%" badge on Annual billing selector
- Token-set use: Save % promo badge on Annual tab
- Primitive type: `badge`
- Kind: non-interactive — promotional label, not a commit control
- Background: `#fe8f16`
- Text: `#ffffff`
- Radius: 9999px. YAML radius: `9999px`
- Font: 12px / 500 / Pretendard Variable. YAML font: `12px / 500`
- No state-applicability map: the badge itself is not an interactive control.

### Default search / form input

- Role: Search and form inputs on live product surface
- Kind: interactive — observed as a value field. No YAML `tokens.components` primitive type is assigned.
- Anatomy: value field
- Background: `#f9f9fa`
- Border: `1px solid rgba(109, 109, 112, 0.12)`
- Radius: 8px
- Text: `#1e1e1f`
- Placeholder: `#6d6d70` at 80% opacity
- Font: 16px / 400 / Pretendard JP Variable
- Observed: default only. Not a YAML `tokens.components` key.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the default search / form input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted. The captured generic-focus outline is not this row. |
| disabled | applicable | An input can be unavailable; visual treatment omitted |
| loading | not-applicable | This search / form input presents a query field; it does not commit an operation whose pending result this input would report. Search-in-progress skeleton is a product-level loading treatment in the capture record, not this field. |
| error | applicable | Form field; no validation treatment observed on this input |
| success | not-applicable | Completing a query is not a success result this input would report. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied home and pricing surfaces record a 4px base unit and the spacing scale 4px, 8px, 12px, 16px, 20px, 24px, 40px. Centered single-column hero with 54px Flare headline as the anchor. Product tab selector sits beneath the hero, full-pill row of three options. Pricing page uses a 4-column card layout (Free / Pro / Max / Enterprise) at desktop. Feature sections in alternating white/light-surface bands following a top-to-bottom scroll narrative. Nav height: 36px interactive elements in a floating nav bar. Button height: 40px (standard), 48px (hero pill). Section padding: generous whitespace between content bands — minimalist information hierarchy. Reading those measurements as local captured geometry rather than as a complete grid declaration, and refusing to average the 40px button and 48px pill heights, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

Source whitespace writings, kept as the source's layout notes rather than as a separately published layout specification: breathe first, fill second; flat separation via white vs `#f9f9fa`; green as punctuation — `#197b2e` appears only on action nodes. Treating those three as the source's own layout notes is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

### Responsive behavior

The source records this breakpoint table. It is the source's responsive writing, not a live computed breakpoint capture. Reading it as a recorded source table rather than as a cross-viewport specification proven by a mobile capture, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Nav collapses, hero headline font-size reduces, product tabs scroll horizontally |
| Tablet | 640-1024px | 2-column pricing card grid, moderate padding |
| Desktop | 1024px+ | Full 4-column pricing, centered hero, multi-column feature rows |

Touch targets the source records: standard buttons 40px height; hero pill CTA 48px height; product tabs 48px height, full-pill; nav items 36px. Collapsing strategy the source records: hero 54px Flare headline scales down proportionally on mobile; product selector tabs compress to horizontal scroll row; pricing cards stack to single column below tablet; billing toggle remains full-width pill on all breakpoints.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Liner's voice is precise, professional, and quietly confident — an AI research partner that speaks to knowledge workers, academics, and professionals who demand accuracy over hype. The homepage opener "Meet AI agents purpose-built for professionals to search smarter, research deeper, and write better" is declarative and benefit-led without exclamation or urgency. Characterizing that voice as precise, professional, and quietly confident implementation context rather than as a separately published copy manual, requiring the quoted strings below byte-exact, and treating English beside a Korean title as a reading aid rather than a replacement, is a derived editorial implementation inference from the verified surfaces; it is not Liner-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Hero headline | Confident, outcome-led. "Accurate AI agents built for smarter work." No exclamation, no jargon. |
| Feature descriptions | Benefit-first, precise. "Get accurate answers. Skip forward to relevant results." |
| Pricing CTAs | Direct, low-pressure. "Start for free." "Get Pro." "Contact us." Sentence case. |
| Blog engineering | Honest and technical. Shares startup constraints openly ("제한된 리소스로 디자인 시스템 개발하기"). |
| Product tab labels | Single-word clarity. "Search." "Research." "Write." |

Voice samples (verbatim from live surface):

- "Accurate AI agents built for smarter work" — homepage H2 (mission-framed, Flare serif). *(verified live 2026-06-22)*
- "Meet AI agents purpose-built for professionals to search smarter, research deeper, and write better" — homepage H1 subtitle. *(verified live 2026-06-22)*
- "Why pro is built for serious research" — pricing page H2 (audience-respecting, no hype). *(verified live 2026-06-22)*

Further recorded strings, kept byte-exact: "Liner pricing plan"; "Inside the AI Search Engine 11M+ People Trust"; "AI agents for professionals | Search, academic research, write with Liner"; "스타트업에서 제한된 리소스로 디자인 시스템 개발하기"; "Get started"; "Get Pro"; "Get Max"; "Start for free"; "Contact us"; "Contact Liner"; "Save 20%"; "No results".

**Forbidden register**: AI superlatives without grounding, urgency patterns ("Act now!"), casualness that undermines the professional research context, undefined technical jargon.

Reproduce those quoted strings byte-exact rather than translating or re-casing them.

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

These decisions are unnamed values, not permissions to invent:

- hover visual treatments on the captured controls
- `focus-visible` visual treatment (generic Focus 2px `#197b2e` outline is a different evidence class)
- pressed visual treatments
- FontFaceSet / source URL for Flare and Pretendard
- a first-party hosted favicon file on `liner.com`
- unsourced easing curve values for `ease-enter`, `ease-exit`, and `ease-standard` — promote a motion value for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed
- live computed confirmation of the source's <640px / 640-1024px / 1024px+ breakpoint table
