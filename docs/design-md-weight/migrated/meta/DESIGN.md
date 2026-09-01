# Meta Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Meta is the rebrand of Facebook, Inc. into a company organized around connection across the social graph, devices, and the immersive web. In **October 2021**, Facebook, Inc. rebranded its parent company to **Meta**, signaling a strategic pivot from a single social network. The name derives from the Greek "beyond". The **infinity mark** — a continuous 3D loop that reads equally well in 2D and in spatial/AR contexts — is the visual anchor: it signals "unlimited" without shouting, and the official rebrand story presents it as embodying "unlimited potential".

This contract covers two related, non-identical evidence domains that the source keeps in parallel: the **Meta marketing brand** (about.meta.com / meta.com — blue gradient, Optimistic type, infinity mark, pill radii) and the **Facebook/Instagram product** lineage (solid `#0064E0`, 8px radii, `#F0F2F5` canvas, documented Facebook system neutrals). They are not one interchangeable template. Meta also operates Facebook, Instagram, WhatsApp, Messenger, Threads, alongside Reality Labs hardware (Quest, Ray-Ban Meta glasses) and large-scale AI; those family names are product-scope context, not a license to invent tokens for unobserved hardware or in-headset UI.

Where the old Facebook interface was a wall of utilitarian `#1877F2` blue, the Meta brand uses motion, depth, and an optimistic gradient that flows from a deep, trustworthy blue (`#0064E0`) into a brighter, almost luminescent cerulean (`#0082FB`). The brand deliberately moved past Facebook's flat, utilitarian `#1877F2` blue. Meta's blue gradient (`#0064E0` deep, trustworthy; `#0082FB` bright, intelligent) carries forward the heritage blue while adding depth and motion. Pages open on generous white (`#FFFFFF`) or a near-black ink (`#1C2B33`) depending on surface, with the blue gradient reserved for hero washes, CTA fills, focus rings, and the logo itself. This is not the flat, single-blue Facebook of 2012. A near-black `#1C2B33` (blue-gray, not pure black) grounds the energetic blue. The custom **Optimistic** type superfamily (Optimistic Display for headlines, Optimistic Text for body) is purpose-built for Meta's surfaces. It carries warm, slightly humanist letterforms that keep a trillion-impression interface from feeling robotic. The custom Optimistic typeface superfamily was built to keep a planet-scale interface feeling human and warm rather than corporate and cold. The system leans on large, friendly display sizing, roomy line-height, and a restrained neutral palette so the blue gradient always wins the eye.

The design system must therefore flex from dense, utilitarian product surfaces (the Facebook feed on its `#F0F2F5` canvas, packed with white cards) to expansive, gradient-washed brand and hardware marketing. The connective tissue is the blue gradient, the infinity mark, the Optimistic type, and a discipline of reserving brand energy for moments that earn it.

What Meta refuses: the cold institutional seriousness of legacy enterprise tech, the flat single-blue of old Facebook, and hype-driven copy that overpromises. It occupies a confident middle — big-tech scale with a human, optimistic surface.

Reading the gradient, shadows, and infinity loop as implying a third dimension that mirrors the immersive-computing thesis — “a literal third dimension that mirrors the immersive-computing thesis” in the source — and reading the atmosphere as **big-tech confident but human**, is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification. The same class covers calling the two evidence domains related but non-identical and “not one interchangeable template” (the source’s own wording is that both are retained as parallel systems), treating family product names as product-scope context and not a license to invent tokens for unobserved hardware or in-headset UI, reading “deliberately moved past” and “carries forward the heritage blue while adding depth and motion” as causal brand intent, the “must therefore flex” / connective-tissue sentence, and the trillion-impression / planet-scale / robotic scale language. The source's own comment records that gradient = third dimension / immersive thesis reading as an editorial reading of the published rebrand, not a verbatim Meta statement. The hex values, type family names, infinity-mark description, October 2021 rebrand, the marketing-versus-product split, and the refusal list are source-stated.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

The source declares no task list of its own. Reading the two evidence domains as the jobs below is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification.

- Act on Meta marketing primary CTAs (`Get started`, `Learn more`, `Build with Meta`) on the brand surface.
- Scan Facebook product-surface feed cards on the `#F0F2F5` canvas.
- Complete product-surface forms and settings (box/filled inputs, boolean toggles).
<!-- design-md:claim-end -->

### Audience

No independently verified persona set is promoted. The source labels its §13 items fictional archetypes informed by publicly described product user segments, not individual people. Those items are not Experience claims, and they are not re-hosted in the sidecar. Observable actors follow the product family at group level only: people using Facebook, Instagram, WhatsApp, Messenger, and Threads product surfaces, and people encountering Meta brand and Reality Labs marketing. Reading those family names as the observable-actor set at group level only, and refusing to promote the source’s fictional archetypes as Experience claims, is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification.

### Distinctive traits

The values in this list are recorded observations, except the third-dimension / immersive-computing bullet, which is an editorial reading rather than a recorded observation. Grouping them as the distinctive layer, including the claim that marketing brand and product lineage are not one interchangeable template, and keeping that third-dimension bullet in the same editorial class as Scope, is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification.

- Meta Blue gradient (`#0064E0` → `#0082FB`) as signature brand energy; always blue-to-blue
- Optimistic Display / Optimistic Text custom superfamily, warm humanist sans
- Near-black ink `#1C2B33` (not pure black) for text and dark surfaces
- Generous whitespace, large friendly display type, single-column hero rhythm on marketing; dense white-on-`#F0F2F5` feed layering on product
- Pill and large-radius buttons (28px+) on marketing; 8px on product; soft elevation; minimal hard borders
- Accessibility-first contrast; blue reserved for interaction and brand moments
- Gradient and motion imply a third dimension — a nod to immersive computing (same editorial class as Scope)

### Principles

These 8 items are a derived editorial implementation inference from the verified surfaces; they are not Meta-authored or a separately published UI specification.

1. **The gradient is brand energy — spend it carefully.** `#0064E0→#0082FB` appears at hero and primary-CTA moments, not as wallpaper. Used everywhere, it means nothing; used once per view, it sings.
2. **Depth implies the third dimension.** Shadows, the gradient, and the infinity loop all hint at spatial computing. Elevation is intentional, not decorative. That third-dimension reading is the same editorial class named in Scope.
3. **Lift white off gray.** The core product pattern is white cards on a `#F0F2F5` canvas. Hierarchy comes from layering, not borders.
4. **Ink, not black.** `#1C2B33` everywhere a designer would reach for `#000000`. The warmth keeps a trillion impressions human.
5. **Display for headlines, Text for reading.** Optimistic Display ≥24px with tight tracking; Optimistic Text below, looser, larger x-height.
6. **Human optimism over hype.** Copy is confident and plainspoken. No fear-urgency, no empty superlatives.
7. **One blue, two roles.** Solid `#0064E0` is interaction (product); the gradient is brand (marketing). Don't confuse the two on a single surface.
8. **Scale demands restraint.** With billions of users, every ornamental choice multiplies. Default to the minimal, accessible option.

### Application rules

These application rules are the source's own Do list.

- Use the Meta Blue gradient (`#0064E0` → `#0082FB`) for brand hero moments and primary marketing CTAs
- Use solid `#0064E0` for product-surface interactive elements (links, buttons, focus)
- Use Optimistic Display for headlines ≥24px, Optimistic Text for body
- Lift white cards off the `#F0F2F5` canvas with subtle ink-tinted shadows
- Use `#1C2B33` for text, never pure `#000000`
- Reserve the blue gradient for brand energy — it should feel special
- Use pill radii (28px+) on marketing CTAs, 8px on product surfaces

### Avoid

These avoidances are the source's own Don't list and forbidden patterns.

- Don't blend the gradient with off-brand hues — it is always blue-to-blue
- Don't use the legacy flat Facebook `#1877F2` as the Meta brand color
- Don't apply colored shadows anywhere except the gradient hero
- Don't use pure black text or pure black backgrounds — use `#1C2B33`
- Don't mix Optimistic Display tracking onto small body text
- Don't overuse the gradient — once per view at most; it loses meaning if everywhere
- Don't set body weight above 400 except for emphasis (600) and headlines (700)
- Over-hyped superlatives ("revolutionary", "game-changing"), fear-based urgency, and hype-driven copy that overpromises

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels.

- **Meta Blue** (`#0064E0`): Primary brand blue. The trustworthy anchor of the gradient — CTA fills, links, focus, active states. The workhorse interactive color.
- **Meta Light Blue** (`#0082FB`): The bright terminus of the brand gradient. Used as the top/right stop in gradient fills, hover lift, and luminous accents.
- **Meta Blue Bright** (`#0080FB`): Near-twin bright blue used in lighter UI accents and link hover on dark surfaces.
- **Pure White** (`#FFFFFF`): Page background, card surfaces, button text on blue.
- **Meta Ink** (`#1C2B33`): Primary heading and body ink. A blue-gray near-black, not `#000000` — softer, warmer, on-brand.
- **Success Green** (`#42B72A`): Positive confirmations, online presence, completed states. (Legacy Facebook green, retained for system semantics.)
- **Success text** (`#2E8B1E`): Success-pill label.
- **Error Red** (`#FA383E`): Errors, destructive actions, validation failures.
- **Warning Amber** (`#F5A623`): Caution, pending, attention-needed.
- **Info Blue** (`#0064E0`): Informational accents reuse the primary blue.

### Brand gradient

- **Brand Gradient**: `linear-gradient(120deg, #0064E0 0%, #0082FB 100%)`. The infinity-mark gradient. Hero washes, primary CTA fills, brand splash, focus glows. Always blue-to-blue, never blended with off-brand hues.
- **Gradient Deep Stop** (`#0064E0`): bottom-left anchor.
- **Gradient Light Stop** (`#0082FB`): top-right luminance.

### Neutral scale

- **Ink 900** (`#1C2B33`): Primary text, dark surfaces. The brand near-black.
- **Ink 800** (`#2D3A42`): Strong labels, dark-surface elevation.
- **Gray 700** (`#465A69`): Emphasized body, sub-headings.
- **Gray 600** (`#65676B`): Body text, descriptions (Facebook system secondary text).
- **Gray 500** (`#8A8D91`): Caption text, secondary labels, metadata.
- **Gray 400** (`#BCC0C4`): Placeholder text, disabled icon fills, dividers.
- **Gray 200** (`#E4E6EB`): Default border, divider, input fill on light.
- **Gray 100** (`#F0F2F5`): Secondary background, card fills, the classic Facebook canvas gray.
- **Gray 50** (`#F7F8FA`): Lightest surface tint.

### Surface & borders

- **Border Default**: `#E4E6EB`. Standard card borders, dividers, input outlines.
- **Border Strong**: `#CED0D4`. Emphasized borders, active input outline base.
- **Surface Raised**: `#FFFFFF` on a `#F0F2F5` canvas — the core Facebook layering pattern.
- **Overlay Scrim**: `rgba(28,43,51,0.6)`. Modal backdrops, ink-tinted dimming.

### Spacing

- Base unit: 4px
- YAML scale: `xs: 4`, `sm: 8`, `md: 12`, `base: 16`, `lg: 24`, `xl: 28`, `xxl: 32`, `section: 48`
- Common values also named in layout: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px, 96px
- Horizontal page gutter: 16px mobile, 24px tablet, growing to centered max-width on desktop
- Card internal padding: 16px (standard), 24px (featured)

Keeping the YAML spacing keys beside the §5 common-value list — including 20px, 64px, and 96px, which are not YAML keys — rather than merging the two lists, is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification.

### Shape

YAML scale: `sm: 6`, `md: 8`, `lg: 16`, `full: 9999`. Compact / Standard / Comfortable / Large / Pill are the source §5 labels; Comfortable 12px, Large 16–20px, and Pill 28px are §5 steps that are not YAML keys. Keeping the YAML keys beside those labels rather than merging them is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification.

- Compact (6px): ghost buttons, small chips
- Standard (8px): inputs, product buttons, compact cards
- Comfortable (12px): standard cards, dialogs
- Large (16–20px): featured cards, gradient heroes
- Pill (28px / 9999px): marketing CTAs, badges, toggles

### Elevation

YAML keys: `standard: "0 1px 2px rgba(28,43,51,0.10)"`, `featured: "0 4px 16px rgba(28,43,51,0.12)"`, `gradient: "0 8px 32px rgba(0,100,224,0.30)"`, `dialog: "0 12px 28px rgba(28,43,51,0.20)"`. Those keys are not the Level labels in the table: `standard` is Level 1 Subtle; `featured` is Level 2 (the table’s “Standard”); `gradient` is Brand Glow; `dialog` is Level 4 Modal.

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page canvas, inline elements |
| Subtle (Level 1) | `0 1px 2px rgba(28,43,51,0.10)` | Feed cards, list separation |
| Standard (Level 2) | `0 4px 16px rgba(28,43,51,0.12)` | Featured cards, raised panels |
| Elevated (Level 3) | `0 8px 24px rgba(28,43,51,0.16)` | Dropdowns, popovers, menus |
| Modal (Level 4) | `0 12px 28px rgba(28,43,51,0.20)` | Dialogs, composer modals |
| Brand Glow | `0 8px 32px rgba(0,100,224,0.30)` | Gradient hero only — licensed colored shadow |

Toast-local shadow `0 4px 12px rgba(28,43,51,0.24)` is a toast field, not a YAML elevation token and not Level 2.

**Shadow philosophy.** Meta uses ink-tinted (`#1C2B33`-based) neutral shadows for the product layering that defines Facebook's white-on-gray feel — elevation is communicated by lifting white cards off the `#F0F2F5` canvas. The *only* place a colored shadow appears is the brand gradient hero, where a blue glow reinforces the gradient's energy. Reading that depth as implying the company's third-dimension (immersive) ambition without literal skeuomorphism, keeping the YAML shadow keys unmerged from the Level labels, and classifying the toast shadow as a toast field rather than a YAML elevation token or Level 2, is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification.

### Blur

- Sticky headers apply subtle backdrop blur on scroll
- Overlay menus and the gradient hero may use a soft `backdrop-filter: blur(8px)` over imagery

### Motion

Source-stated duration roles. Treating the duration table, easing names, signature motions, and reduced-motion line as source-stated rather than computed CSS is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification. The duration values and signature recipes below are recorded values.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State flips when reduced-motion is set |
| `motion-fast` | 150ms | Hover, focus, button press, small reveals |
| `motion-standard` | 250ms | Default — menus, card expand, tab switch |
| `motion-slow` | 400ms | Emphasized — modal entrance, success confirmation |
| `motion-page` | 350ms | Route transitions, full-screen pushes |
| `motion-brand` | 600ms | Gradient hero reveal, infinity-mark animation |

Named easing roles. Template-matching cubic-bezier values are omitted (T1-3: unsourced spec-template curves). The unique source-stated `ease-brand` curve is recorded with an extrapolation limiter, not as a live-computed token:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-enter` example) | Things appearing — menus, sheets, toasts |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Things leaving — dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-standard` example) | Two-way — collapsibles, tab content |
| `ease-brand` | `cubic-bezier(0.22, 1, 0.36, 1)` | Gradient reveals, infinity loop — smooth, premium overshoot-free glide. Source-stated; reasoned extrapolation, not a computed observation |

**Signature motions.**

The token names, durations, freeze-to-static-frame / crossfade reduced-motion rule, and the recipes below are source-stated. The “living, three-dimensional shimmer” and “imply unlimited” clauses are the same editorial class named in Scope: a derived editorial implementation inference from the verified surfaces; they are not Meta-authored or a separately published UI specification.

1. **Gradient reveal.** Hero gradients animate their angle/position subtly over `motion-brand` with `ease-brand`, giving the brand surface a living, three-dimensional shimmer without distracting from content.
2. **Infinity-mark loop.** The brand mark traces its continuous 3D loop on `ease-brand` — fluid, seamless, never snapping. It loops slowly to imply "unlimited" rather than spin frantically.
3. **Card lift.** On hover, feed/marketing cards lift via shadow deepening (`Level 1 → Level 2`) over `motion-fast` with `ease-standard`. A subtle 1–2px translateY reinforces the rise off the gray canvas.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; gradient/infinity animations freeze to a static frame; slides become crossfades. The product stays fully usable.

Do not promote an easing curve, animation name, transition property, duration, or reduced-motion behavior beyond the source-stated rows above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

Sorting these stacks into official product-use, live brand surface, product-lineage fallback, declared monospace, and fallback-not-brand-face classes, including the instruction not to present a system or fallback stack as Optimistic, is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification. The family names and stack strings themselves are source-stated.

| Evidence class | Resolution |
|---|---|
| Official product-use | The official rebrand story names Optimistic Display and Optimistic Text as the custom superfamily for the company brand. |
| Live brand surface | about.meta.com / meta.com is recorded as using Optimistic type with the blue gradient and infinity mark. |
| Facebook product-surface fallback | Facebook product surfaces declare `system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. That stack is a product-lineage fallback, not the brand face. |
| Declared monospace | `"SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace` is the source monospace stack. It is not presented as a Meta-authored brand mono. |
| Fallback stack (not the brand face) | Optimistic stacks list `"Helvetica Neue", Helvetica, Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` after the custom family. Do not present that fallback as Optimistic. |

### Family

- **Display:** `"Optimistic Display", "Helvetica Neue", Helvetica, Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Text:** `"Optimistic Text", "Helvetica Neue", Helvetica, Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **System fallback** (Facebook product surfaces): `system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Monospace:** `"SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace`

Optimistic Display is tuned for large headline sizes; Optimistic Text is tuned for legibility at reading sizes. Use Display ≥ 24px, Text < 24px. Do not present a system or fallback stack as the Optimistic family.

### Type roles

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Optimistic Display | 56px | 700 | 60px (1.07) | -0.02em | Marketing hero headlines. YAML use: Marketing hero, Optimistic Display |
| Display Large | Optimistic Display | 40px | 700 | 48px (1.20) | -0.01em | Section headers |
| Display | Optimistic Display | 32px | 600 | 40px (1.25) | -0.01em | Feature titles |
| Heading | Optimistic Display | 24px | 600 | 32px (1.33) | normal | Card headings, modal titles |
| Subtitle | Optimistic Text | 20px | 600 | 28px (1.40) | normal | Sub-section, list headers |
| Body Large | Optimistic Text | 17px | 400 | 26px (1.53) | normal | Lead paragraphs |
| Body | Optimistic Text | 15px | 400 | 22px (1.47) | normal | Standard reading text (FB body size) |
| Body Small | Optimistic Text | 13px | 400 | 18px (1.38) | normal | Secondary info |
| Caption | Optimistic Text | 12px | 400 | 16px (1.33) | normal | Timestamps, fine print |
| Button Label | Optimistic Text | 15px | 600 | 20px (1.33) | normal | CTA labels |

Unitless line-height ratios in parentheses are preserved as ratios; they are not converted into a different px contract. Keeping YAML `use` strings beside the source table Notes rather than replacing either column is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification.

### Type principles

- **Display vs Text split**: Optimistic Display for ≥24px headlines (tight tracking, optical display weighting), Optimistic Text for body (looser tracking, larger x-height).
- **Three core weights**: 400 (body), 600 (emphasis/buttons), 700 (display headlines). Restraint over variety.
- **Negative tracking at scale**: Large display sizes tighten to `-0.01em`/`-0.02em`; body stays at normal tracking.
- **Roomy line-height for reading**: Body at ~1.47 keeps the dense social feed scannable.

### Assets

- Catalog logo mapping is Simple Icons (`type: simpleicons`, `slug: meta`).
- The infinity mark is the brand mark: a continuous 3D loop, blue gradient, for 2D and spatial/AR contexts.
- Product photography and hardware imagery are first-party content; do not replace them with invented brand-color decoration.

Treating product photography and hardware imagery as first-party content that must not be replaced with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification. The infinity-mark description and the Simple Icons catalog mapping are source-stated.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

| State | Treatment |
|---|---|
| **Empty (first use)** | Friendly single-line explainer in `#65676B` body text + one primary action (`#0064E0` button). Light illustration acceptable on marketing, omitted on dense product. |
| **Empty (no results)** | Single `#8A8D91` caption line (`No results found`). Optional "Clear filters" ghost button. |
| **Loading (first paint)** | Skeleton blocks at `#E4E6EB` matching final layout, 1.2s shimmer with white highlight. Rounded at component radius. |
| **Loading (refresh)** | Top pull-down spinner in `#0064E0`. Content stays visible with previous values; no blocking overlay. |
| **Error (inline field)** | `#FA383E` 1px border + `0 0 0 3px rgba(250,56,62,0.18)` ring, red helper text 13px below. One actionable sentence. |
| **Error (toast)** | `#1C2B33` bg, white 14px text, 3s auto-dismiss, bottom-anchored. One sentence. |
| **Error (screen-blocking)** | Reserved for outage. Centered `#1C2B33` 17px weight 600 message, `#0064E0` retry button below. |
| **Success (toast)** | `#1C2B33` bg, white text, optional `#42B72A` check icon. `Saved`, `Posted`. 3s dismiss. |
| **Success (inline)** | Brief `rgba(66,183,42,0.14)` flash behind the updated element, 300ms fade. |
| **Disabled** | Opacity 0.4 on the element. Inputs keep their `#CED0D4` border so geometry is stable when re-enabled. |
| **Focus** | `#0064E0` border + `0 0 0 3px rgba(0,100,224,0.18)` ring on all interactive elements. Always visible for accessibility. A generic Focus capture is a different evidence class from a `focus-visible` treatment: observed Focus values stay on the component record and no `focus-visible` row carries a treatment. |
| **Hover (button)** | Solid blue darkens to `#0058C4`; gradient brightens its light stop. 150ms ease. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Absence of a capture is not a `not-applicable` reason. Every interactive-kind verdict, every applicability verdict, the reason given for either, and the distinction that a generic Focus capture is a different evidence class from a `focus-visible` treatment, is a derived editorial implementation inference from the verified surfaces; none of them is Meta-authored or a separately published UI specification. This is not a complete state-coverage claim.

Meta/Facebook buttons favor large radii (often full pill on marketing surfaces, ~8px on product) and the blue gradient or solid Meta Blue for primary.

### Primary (Gradient)

- Role: Primary CTA on light surfaces (`Get started`, `Learn more`) — ~48px tall. Marketing brand.
- Primitive type: `button` · Kind: interactive
- Background: `linear-gradient(120deg, #0064E0 0%, #0082FB 100%)`
- Text: `#FFFFFF`
- Border: none
- Radius: 28px (pill on marketing) / 8px (product)
- Padding: 14px 28px
- Font: 15px / 600 / Optimistic Text
- Hover: brightness lift, light stop pushed to `#0A8CFF`
- Pressed: `#0058C4` solid overlay
- Disabled: opacity 0.4
- Focus (observed, not a `focus-visible` treatment): `#0064E0` border + `0 0 0 3px rgba(0,100,224,0.18)` ring as in the capture record

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web button; brightness lift and `#0A8CFF` light stop observed |
| focus-visible | applicable | Keyboard-reachable action control; no `focus-visible` treatment is carried — the observed Focus value stays on the record above |
| disabled | applicable | Opacity 0.4 documented |
| loading | applicable | Named a primary CTA; the source does not establish whether it commits in place or only leads to a destination, so loading is not closed |
| error | applicable | Same unresolved commit/destination boundary; visual treatment omitted |
| success | applicable | Same unresolved commit/destination boundary; visual treatment omitted |

### Primary (Solid)

- Role: Product-surface primary action (Facebook/Instagram web parity)
- Primitive type: `button` · Kind: interactive
- Background: `#0064E0`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 12px 20px
- Font: 15px / 600 / Optimistic Text
- Hover: `#0058C4`
- Disabled: opacity 0.4

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web button; `#0058C4` observed |
| focus-visible | applicable | Keyboard-reachable action control; no `focus-visible` treatment is carried |
| disabled | applicable | Opacity 0.4 documented |
| loading | applicable | Product-surface primary action can pend |
| error | applicable | A product primary action can fail; visual treatment omitted |
| success | applicable | A product primary action can complete; visual treatment omitted |

### Secondary

- Role: Neutral secondary action paired with a primary
- Primitive type: `button` · Kind: interactive
- Background: `#E4E6EB` (Gray 200)
- Text: `#1C2B33`
- Border: none
- Radius: 8px
- Padding: 12px 20px
- Font: 15px / 600 / Optimistic Text
- Hover: `#D8DADF`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web button; `#D8DADF` observed |
| focus-visible | applicable | Keyboard-reachable action control; no `focus-visible` treatment is carried |
| disabled | applicable | A paired secondary action can be gated; opacity 0.4 documented generally |
| loading | applicable | Named an action paired with a primary; commit-versus-destination is unresolved, so loading is not closed |
| error | applicable | Same unresolved commit/destination boundary; visual treatment omitted |
| success | applicable | Same unresolved commit/destination boundary; visual treatment omitted |

### Outline

- Role: Tertiary CTA, `Sign up` alongside a gradient primary. YAML use: Tertiary CTA Sign up
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#0064E0`
- Border: 1.5px solid `#0064E0`
- Radius: 28px / 8px
- Padding: 12px 24px
- Font: 15px / 600 / Optimistic Text
- Hover: `rgba(0,100,224,0.06)` fill

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web button; `rgba(0,100,224,0.06)` fill observed |
| focus-visible | applicable | Keyboard-reachable action control; no `focus-visible` treatment is carried |
| disabled | applicable | A tertiary CTA can be gated; visual treatment omitted |
| loading | applicable | Named a CTA (`Sign up`); commit-versus-destination is unresolved, so loading is not closed |
| error | applicable | Same unresolved commit/destination boundary; visual treatment omitted |
| success | applicable | Same unresolved commit/destination boundary; visual treatment omitted |

### Ghost / Text

- Role: Inline links-as-buttons, low-emphasis actions
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#0064E0`
- Border: none
- Radius: 6px
- Padding: 8px 12px
- Font: 15px / 600 / Optimistic Text
- Hover: `rgba(0,100,224,0.06)` fill

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web control; `rgba(0,100,224,0.06)` fill observed |
| focus-visible | applicable | Keyboard-reachable control; no `focus-visible` treatment is carried |
| disabled | applicable | A low-emphasis action can be gated; visual treatment omitted |
| loading | not-applicable | Inline links-as-buttons lead to a destination or invoke a low-emphasis action; the control itself does not enter a loading state |
| error | not-applicable | The same destination / low-emphasis role has no in-place operation whose failure is reported on the control |
| success | not-applicable | The same role has no in-place operation whose completion is confirmed on the control |

### Default (Box) input

- Role: Standard form input
- Primitive type: `input` · Kind: interactive
- Background: `#FFFFFF`
- Text: `#1C2B33`
- Border: 1px solid `#CED0D4`
- Radius: 8px
- Padding: 12px 14px
- Font: 15px / 400 / Optimistic Text
- Placeholder: `#8A8D91`
- Focus (observed, not a `focus-visible` treatment): border `#0064E0` + `0 0 0 3px rgba(0,100,224,0.18)` ring
- Error (observed): Background `#FFFFFF`; Text `#1C2B33`; Border 1px solid `#FA383E`; Focus `0 0 0 3px rgba(250,56,62,0.18)` ring; paired with red helper text below. Validation failure.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable form field; no `focus-visible` treatment is carried — observed Focus stays on the record above |
| disabled | applicable | Inputs keep their `#CED0D4` border so geometry is stable when re-enabled; opacity 0.4 documented |
| loading | not-applicable | The field accepts a value; first-paint uses skeleton blocks and refresh uses a top pull-down spinner, not a loading state on the field |
| error | applicable | Documented Error variant |
| success | not-applicable | Completion is confirmed by toast or the documented inline flash on the updated element, not as an input success state |

### Filled input

- Role: Search bars, dense forms (classic FB search-field look)
- Primitive type: `input` · Kind: interactive
- Background: `#F0F2F5`
- Text: `#1C2B33`
- Border: 1px solid transparent
- Radius: 8px
- Padding: 12px 14px
- Font: 15px / 400 / Optimistic Text
- Focus (observed, not a `focus-visible` treatment): bg `#FFFFFF`, border `#0064E0`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable form field; no `focus-visible` treatment is carried |
| disabled | applicable | A search/dense field can be gated; `#CED0D4` border retained when disabled |
| loading | not-applicable | The field accepts a value; search results and refresh loading are not a state of the field |
| error | applicable | Form field; visual treatment omitted beyond the Default input Error variant |
| success | not-applicable | Completion is not confirmed on the field |

### Standard card

- Role: Feed cards, content panels — the workhorse surface on `#F0F2F5` canvas
- Primitive type: `card` · Kind: interactive
- Background: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 16px
- Shadow: `0 1px 2px rgba(28,43,51,0.10)`
- Header anatomy (from the source's feed-card construction note): avatar 40px circle + name 15px weight 600 `#1C2B33` + timestamp 12px `#8A8D91`
- Hover: card lift via shadow deepening (`Level 1 → Level 2`) over `motion-fast` with `ease-standard`; subtle 1–2px translateY

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web feed/marketing card; lift documented |
| focus-visible | applicable | Keyboard-reachable content card; no `focus-visible` treatment is carried |
| disabled | applicable | A feed card can be gated; visual treatment omitted |
| loading | not-applicable | A feed card is a content destination; first-paint skeleton is a page-level treatment, not a loading state of the card control |
| error | not-applicable | The card leads to content; it commits no in-place operation whose failure is reported on the card |
| success | not-applicable | The same destination role has no in-place completion on the card |

### Featured card

- Role: Marketing promo cards, hero modules
- Primitive type: `card` · Kind: interactive
- Background: `#FFFFFF`
- Border: none
- Radius: 16px
- Padding: 24px
- Shadow: `0 4px 16px rgba(28,43,51,0.12)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web marketing card; lift documented for feed/marketing cards |
| focus-visible | applicable | Keyboard-reachable promo card; no `focus-visible` treatment is carried |
| disabled | applicable | A promo card can be gated; visual treatment omitted |
| loading | not-applicable | Destination / promo module; the card itself does not enter a loading state |
| error | not-applicable | The card commits no in-place operation |
| success | not-applicable | The card commits no in-place operation |

### Gradient Hero card

- Role: Brand hero blocks — the one place a colored shadow is licensed
- Primitive type: `card`
- Kind: non-interactive
- Reason: brand hero surface; action states belong to child CTAs, not the block
- Background: `linear-gradient(120deg, #0064E0 0%, #0082FB 100%)`
- Text: `#FFFFFF`
- Border: none
- Radius: 20px
- Padding: 32px
- Shadow: `0 8px 32px rgba(0,100,224,0.30)`

### Compact (Bordered) card

- Role: Inline list items where a 1px edge replaces shadow
- Primitive type: `card`
- The source assigns `type: card` and a compact bordered recipe. Omitting `kind` and a state-applicability map — because that pair is not interactive-kind evidence for a control — is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification.
- Background: `#FFFFFF`
- Border: 1px solid `#E4E6EB`
- Radius: 8px
- Padding: 12px
- Shadow: none

### Notification (count) badge

- Role: Unread counts on nav icons (the iconic FB red dot), anchored top-right of a nav icon. YAML use: Unread count red dot.
- Primitive type: `badge`
- Kind: non-interactive
- Reason: count label, not a control
- Background: `#FA383E`
- Text: `#FFFFFF`
- Border: 2px solid `#FFFFFF`
- Radius: 9999px
- Padding: 2px 6px
- Font: 12px / 700 / Optimistic Text

### Status / Pill badge

- Role: `New`, category tags, Soft informational label New
- Primitive type: `badge`
- Kind: non-interactive
- Reason: informational label, not a control
- Background: `rgba(0,100,224,0.12)`
- Text: `#0064E0`
- Border: none
- Radius: 9999px
- Padding: 4px 10px
- Font: 12px / 600 / Optimistic Text

### Success Pill badge

- Role: Active / online / completed status
- Primitive type: `badge`
- Kind: non-interactive
- Reason: status label, not a control
- Background: `rgba(66,183,42,0.14)`
- Text: `#2E8B1E`
- Border: none
- Radius: 9999px
- Padding: 4px 10px
- Font: 12px / 600 / Optimistic Text

### Top Tab

- Role: In-page section navigation (FB profile tabs pattern)
- Primitive type: `tab` · Kind: interactive
- Background: transparent
- Text (active): `#0064E0`
- Indicator: 3px bottom border `#0064E0`
- Inactive text: `#65676B`
- Font: 15px / 600 / Optimistic Text

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; no `focus-visible` treatment is carried |
| disabled | applicable | A section tab can be gated; visual treatment omitted |
| loading | not-applicable | A tab selects a panel; the tab itself does not enter a loading state |
| error | not-applicable | The tab commits no in-place operation whose failure is reported on the tab |
| success | not-applicable | The tab commits no in-place operation whose completion is confirmed on the tab |

### Segmented

- Role: Mode switching within a panel
- Primitive type: `tab` · Kind: interactive
- Background: `#F0F2F5`
- Text: `#65676B`
- Border: none
- Radius: 8px
- Padding: 8px 16px
- Active: `#FFFFFF` bg + `#1C2B33` text + `0 1px 2px rgba(28,43,51,0.10)` shadow
- Font: 14px / 600 / Optimistic Text

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web mode control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable mode control; no `focus-visible` treatment is carried |
| disabled | applicable | A mode option can be gated; visual treatment omitted |
| loading | not-applicable | Segmented control switches mode inside a panel; it does not commit an operation that loads on the segment |
| error | not-applicable | Mode switching has no in-place failure reported on the segment |
| success | not-applicable | Mode switching has no in-place completion confirmed on the segment |

### Toast

- Role: Transient confirmation (`Link copied`), bottom-anchored, 3s auto-dismiss. YAML use: Transient confirmation Link copied
- Primitive type: `toast`
- Kind: non-interactive
- Reason: transient confirmation; no interactive contract documented beyond auto-dismiss
- Background: `#1C2B33`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0 4px 12px rgba(28,43,51,0.24)`
- Font: 14px / 500 / Optimistic Text

### Centered Modal

- Role: Confirmations, composer dialogs, settings prompts
- Primitive type: `dialog`
- Kind: non-interactive
- Reason: centered modal surface; action states belong to child controls
- Background: `#FFFFFF`
- Text: `#1C2B33`
- Border: none
- Radius: 12px
- Padding: 24px
- Shadow: `0 12px 28px rgba(28,43,51,0.20)`
- Backdrop: `rgba(28,43,51,0.6)`

### Toggle

- Role: Boolean settings, notification preferences; YAML use: Boolean settings, on=blue off=#bcc0c4
- Primitive type: `toggle` · Kind: interactive
- Background: `#0064E0` (on) / `#BCC0C4` (off)
- Border: none
- Radius: 9999px
- Thumb: `#FFFFFF` 20px circle with `0 1px 3px rgba(28,43,51,0.20)` shadow

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on/off treatment above |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable boolean control; no `focus-visible` treatment is carried |
| disabled | applicable | A settings toggle can be gated; visual treatment omitted |
| loading | not-applicable | A boolean toggle flips in place; it does not enter a loading state |
| error | not-applicable | The toggle commits no multi-step operation whose failure is reported on the control |
| success | not-applicable | On/off is the value; completion is not a separate success state on the toggle |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The whitespace philosophy labels (**Room to breathe at brand moments**, **Dense but layered in product**, **Grouped by relationship**) are the source's own. Reading them as layout rules for the two evidence domains is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification.

### Spacing and whitespace

- Base unit: 4px. Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px, 96px.
- **Room to breathe at brand moments**: hero sections use 96px+ vertical rhythm so the gradient and headline dominate.
- **Dense but layered in product**: the feed packs cards tightly on a `#F0F2F5` canvas, each card lifted on white — density without clutter.
- **Grouped by relationship**: related actions cluster at 8–12px gaps; distinct sections separate by 32–48px.

### Grid & container

- Marketing: 12-column grid, max content width ~1200px, centered
- Product (Facebook web): three-column shell — left rail, center feed (~600px), right rail
- Center feed column is the canonical content measure: ~500–600px for readability
- Mobile-first collapse to a single column under 768px

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, 16px gutter, bottom nav, stacked hero |
| Tablet | 768–1024px | Two columns, 24px gutter, side margins appear |
| Desktop | 1024–1440px | Three-column product shell / 12-col marketing grid |
| Wide | >1440px | Centered max-width ~1200px, larger hero type |

### Touch targets

- Buttons: minimum 44px height (48px for primary CTA)
- Icon buttons: 40px tap target minimum
- List rows: 48px+ minimum height

### Collapsing strategy

- Three-column product shell collapses: right rail drops first, then left rail becomes a drawer
- Marketing hero stacks media below headline on mobile
- Sticky top nav becomes a bottom tab bar on mobile product surfaces
- Horizontal card carousels for discovery sections

### Image behavior

- Hero imagery: full-bleed, gradient overlay for text legibility
- Avatars: circular, 40px standard, 24px compact, 56px+ profile
- Media in cards: full-width, rounded to card radius, aspect-ratio preserved

<!-- design-md:section content-locales -->
## 6. Content & Locales

Meta speaks with the optimism of a company betting on connection and the next computing platform — confident, forward-looking, plainspoken, and warm. It avoids hype-jargon where it can, favoring clear human sentences over technobabble. Copy is inclusive and second-person ("Build the future with us", "Connect with the people and things you love"). The tone is aspirational at the brand layer and utilitarian-friendly at the product layer. That voice paragraph, and treating the brand/product register split as the voice contract for these two evidence domains, is a derived editorial implementation inference from the verified surfaces; it is not Meta-authored or a separately published UI specification. The quoted lines and the context table below are the source's own recorded samples and labels.

| Context | Tone |
|---|---|
| CTAs | Imperative, short, optimistic (`Get started`, `Learn more`, `Build with Meta`) |
| Success toasts | Plain past-tense single line (`Link copied`, `Changes saved`). No exclamation spam. |
| Error messages | Specific, blameless, actionable. `Something went wrong. Try again.` only as last resort. |
| Onboarding | Second-person, one idea per step, warm and encouraging |
| Brand / mission | Aspirational, future-tense, connection-centered (`Bringing the metaverse to life`) |
| Empty states | Explain why it's empty + one action. Friendly, never cold. |
| Legal / privacy | Clear, direct, no dark patterns in copy — plainspoken consent language |

**Forbidden patterns.** Over-hyped superlatives ("revolutionary", "game-changing"), fear-based urgency, pure-black `#000000` text, the legacy flat `#1877F2` as a brand mark, gradient blends with non-blue hues.

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

- exact cubic-bezier values for `ease-enter`, `ease-exit`, and `ease-standard` (omitted as unsourced spec-template matches)
- `focus-visible` visual treatment (observed Focus is a different evidence class)
- a first-party audience segment
