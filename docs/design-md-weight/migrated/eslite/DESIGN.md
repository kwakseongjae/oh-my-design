# 誠品 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

誠品 (Eslite) began as a Taiwan cultural-bookstore project and has developed into an ecosystem spanning books, design goods, food, events, physical stores, and online commerce. The public online surface moves across books, stationery and creative goods, clothing, beauty, food, home, and brand platforms, while the corporate site exposes dedicated pages for ideals, founder story, operating scope, and development history.

誠品's account of its Japanbridge opening says it hoped to serve as a cultural bridge between Taiwan and Japan, with reading, events, Taiwanese makers, and local exchange gathered in one place. Its expo platform describes bringing humanities and art into life through creative perspectives and an environment for cultural-design brands.

The 35th-anniversary "Live your Dream" programme is the present evolution recorded in this reference: encounters and small stories are described as momentum toward a better everyday life. It provides narrative and voice context, but it does not turn campaign expression into an unmeasured online-commerce component or token.

This contract covers the captured public routes only — the Eslite Online homepage, the brand directory, and the expo brand catalog. It is not a claim about member, checkout, native-app, or physical-store systems.

The following reading of that material is a derived editorial implementation inference from the verified surfaces; it is not 誠品-authored or a separately published UI specification: the public commerce evidence gives the cultural proposition a restrained interface expression, in which white fields, dark reading text, narrow gray hairlines, square product-card shells, and a quiet gold `#917e57` search accent keep dense retail choice legible rather than theatrical, so that the interface reads as editorial and calm and leaves room for books, objects, and maker stories to carry the visual interest.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Search the public 誠品 catalog from the search text input observed on all three captured public routes.
- Browse the public brand directory at `https://www.eslite.com/brand`.
- Scan product-card shells on the public expo brand catalog at `https://www.eslite.com/brand/1098`.
<!-- design-md:claim-end -->

### Audience

The reviewed 誠品 material identifies public participant groups and settings but does not provide behavioural-research personas. They are preserved without invented demographics, tasks, or motivations:

- **Readers and visitors.** The official Japan feature addresses readers through reading, cultural, and event experiences.
- **Taiwan cultural-design brands and makers.** The expo platform says it offers a development and exchange setting for cultural-design workers and brands.
- **People seeking cultural and everyday-life encounters.** The anniversary material frames stores and stories as part of a better future everyday life.

No named customer persona, journey, spending pattern, or conversion behavior is asserted.

### Distinctive traits

- A white `#ffffff` public canvas and dark `#212529` product text are the repeated baseline of the captured public surfaces.
- Gold `#917e57` is observed on the public search submit control; it is not established as a universal checkout or status color.
- Public product cards are square, flat `#ffffff` shells rather than rounded elevated tiles.
- The supplied artifact records 3 public surfaces and no captured interaction events; the measured component geometry is retained, and unobserved behaviors remain absent.

### Principles

These 4 items are a derived editorial implementation inference from the verified surfaces; they are not 誠品-authored or a separately published UI specification.

1. **Make culture encounterable.** Official material repeatedly frames value in encounters among reading, art, creative work, and daily life. *UI implication:* present the object, maker, and cultural context clearly before adding commerce prompts.
2. **Let a place hold multiple practices.** The Japan cultural-bridge feature combines books, events, Taiwanese products, food, and exchange rather than reducing the experience to one category. *UI implication:* use clear category structure and preserve the distinct purpose of each section.
3. **Treat daily life as a cultural medium.** The expo platform connects humanities and art to ordinary living through design goods and creative perspectives. *UI implication:* pair editorial description with product information where the source supports that relationship; do not fabricate provenance.
4. **Invite without forcing a conclusion.** The anniversary programme foregrounds dreams, stories, and future-facing encounters. *UI implication:* use an open, calm CTA and avoid false scarcity or an assumed emotional outcome.

### Capture-bound application

These 6 items are a derived editorial implementation inference from the verified surfaces; they are not 誠品-authored or a separately published UI specification.

- Keep the captured public commerce canvas white with `#212529` as the main reading color.
- Reserve the observed `#917e57` treatment for the local search/control context until another selector-backed role is available.
- Keep the sampled product-card shell square, flat, and content-led.
- Let books, goods, makers, and editorial content carry the visual richness; keep supporting commerce chrome restrained.
- Begin an Eslite-inspired public catalog surface with a white field, compact 16px / 400 reading text, narrow gray edges, and content-led square cards.
- Keep the public search geometry exact where it is reused: 40px height; 6px 12px 6px 16px padding; 8px 0px 0px 8px radius. Treat official cultural language as editorial direction, not authorization to create a new checkout, membership, or interaction system.

### Avoid

- Do not turn browser-default blue links into an Eslite action palette.
- Do not represent Noto Sans TC, NotoSerifCJKtc, PingFang, or Microsoft JhengHei as a licensed Eslite brand font.
- Do not spread the 8px left-only search radius to product cards.
- Do not add hover, focus, pressed, disabled, error, loading, dialog, toast, or checkout behavior that the supplied interaction record does not establish.
- Do not use anniversary, store, or corporate-culture imagery as product tokens without public commerce-surface evidence.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Search Accent** (`#917e57`): observed on the public search submit control on all supplied routes; also the catalog identity color.
- **Canvas** (`#ffffff`): repeated public search-field and product-card background.
- **Foreground** (`#212529`): repeated public list and product-card text.
- **Muted Input Text** (`#999999`): default empty search-field text sample; do not apply it as a general metadata token.
- **Hairline** (`#cccccc`): observed search-input edge and list divider sample.

### Evidence-domain boundary

The homepage, brand directory, and expo catalog are public commerce surfaces. Corporate ideals, founder/history pages, anniversary editorials, and the cultural narrative around physical stores are official brand context but do not extend this selector-backed palette. The supplied packet also contains browser-default-looking blue link observations; they are not promoted as an Eslite brand or action token. Only supplied selector-backed public commerce values are tokens here.

### Spacing

Observed on the public search field: 6px vertical, 12px trailing, and 16px leading. Those are local measurements, not a universal grid specification.

### Shape

- Square: 0px — repeated public product-card geometry.
- Search field: 8px 0px 0px 8px — left-only rounding on the public search text input.

The 8px rounding belongs to the search field; the sampled product-card geometry is square.

### Elevation

The promoted public components are flat: the search field and product card both report `box-shadow: none`. The product-card sample uses a zero-width `rgba(0, 0, 0, 0.176)` border color, so it is not evidence for a visible card stroke. No popover, modal, menu, or elevated-shadow treatment is published from this packet.

### Motion

No first-party motion duration, easing curve, reduced-motion policy, or event transition was present in the supplied packet. No motion token is published for 誠品 in this reference.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No reviewed first-party source establishes a named type family for the captured public commerce routes. |
| Live computed surface-use | The visible stack begins `Noto Sans TC`, followed by PingFang TC, 蘋方體, Microsoft JhengHei, and system fallbacks. The packet labels `Noto Sans TC` unresolved because it has no matching loaded FontFace or source URL. It is not promoted as an Eslite UI-family token. |
| Official distributed brand asset | No first-party distributed Eslite type asset or license was located in this pass. |
| Declared-only | `swiper-icons` has an `@font-face` declaration but no visible use. It is icon infrastructure, not body typography. |
| Unresolved claim | `NotoSerifCJKtc` has one unresolved text use. Its single observation and missing source corroboration do not establish a display family. |

### Family

- **Visible computed stack:** `Noto Sans TC`, then PingFang TC, 蘋方體, Microsoft JhengHei, and system fallbacks — an unresolved Traditional-Chinese system stack.
- Do not render a system fallback as though it were an Eslite-owned typeface. The documented hierarchy is an observed public-stack boundary, not a font-license or browser-specimen claim.

### Type roles

| Role | Family boundary | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public body/product text | unresolved Traditional-Chinese system stack | 16px | 400 | 24px | repeated public commerce text, lists, and cards |
| Compact public control | unresolved Traditional-Chinese system stack | 14px | 500 | 20px | compact public header-control sample only |
| Empty search field | unresolved Traditional-Chinese system stack | 16px | 400 | 24px | public search input sample only |

The compact control row comes from one observed compact public header control; no complete control type scale is claimed.

### Assets

- Catalog logo metadata resolves to a favicon-service URL on a third-party host, keyed to the `eslite.com` domain. It is identity metadata rather than a captured first-party 誠品 mark, and no first-party logo file is established here.
- Anniversary, store, and corporate-culture imagery are official brand context; the supplied evidence does not attach them to the public commerce surfaces as product assets.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

No empty, loading, error, success, skeleton, disabled, validation, or transition state is published from the supplied product evidence. The artifact reports `interactionKinds: 0` and `interactionCount: 0`; only the measured default component geometry and the explicitly retained static input samples are documented. No hover, focus transition, pressed transition, disabled, dialog, toast, tab, validation, or authenticated component state is inferred.

The input and card below are the selector/surface-backed components promoted from the supplied artifact. Other detected anchors and rows are retained as raw evidence only, because their semantics or variants are not sufficiently established.

Static focus and pressed samples of the search input are retained as observations of those samples. With `interactionCount: 0` they do not establish a state transition contract, and they are not promoted as `focus-visible` treatments.

A declared interactive component still closes Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A missing observation omits the visual treatment only; it is not a `not-applicable` reason. State coverage is not complete here.

### Public Search Text Input

- Role: public search text input on the captured home, brand-directory, and expo brand-catalog routes
- Kind: interactive
- Type: input
- Background: `#ffffff`
- Text: `#999999`
- Border: 1px 0px 1px 1px `#cccccc`
- Radius: 8px 0px 0px 8px
- Height: 40px
- Padding: 6px 12px 6px 16px
- Font: 16px / 400 / 24px / unresolved computed stack
- Observed: default geometry on all three supplied public routes; static focus and pressed samples retained; `interactionCount: 0`
- Use: Public search text input; selector `home::[data-omd-capture="11"]`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Default geometry captured on all three supplied public routes |
| hover | applicable | Pointer-web text input; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable text input; visual treatment omitted |
| disabled | applicable | Form control that can be disabled; visual treatment omitted |
| loading | applicable | Search field whose submission can be pending; visual treatment omitted |
| error | applicable | Form field that can carry validation feedback; visual treatment omitted |
| success | applicable | Form field that can carry validation feedback; visual treatment omitted |

### Expo Product Card Shell

- Role: public expo-brand product-card shell
- Type: card
- Kind: omitted. The source classifies this as a detector-classified card shell despite its anchor implementation, and records `interactionKinds: 0` / `interactionCount: 0`, so no interactive-kind confirmation and no Core §4.4 state-applicability map are declared. It is not recast as a generic button.
- Background: `#ffffff`
- Text: `#212529`
- Border: 0px `rgba(0, 0, 0, 0.176)`
- Radius: 0px
- Height: 270px
- Padding: 0px
- Font: 16px / 400 / 24px / unresolved computed stack
- Use: `deep-base-product-card ec-card e-banner-product card-block` on the public expo brand catalog; selector `surface-3::[data-omd-capture="91"]`

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied routes support a public commerce layout with a compact search strip, information-dense lists, and repeatable product-card shells. The search field measures 40px high with 6px vertical, 12px trailing, and 16px leading padding. The evidence also repeats zero-radius card geometry and a 270px card height in the expo catalog. Those are local measurements, not a universal grid, breakpoint, mobile, or checkout-layout specification.

This packet contains three supplied desktop public-surface records and no interaction capture. The 40px search input and 270px product-card sample are measured components, not accessibility-target or breakpoint rules. Static focus and pressed input samples exist, but without an interaction event they do not establish a transition contract. Responsive layouts, menu expansion, cart behavior, checkout, and member states are absent.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Brand-published lines

- "Live your Dream" — official 35th-anniversary campaign line.
- "每個精彩可期的相遇，每間店可愛有趣的小故事" — official 35th-anniversary framing for the encounters and small stories the material describes. (English gloss: every anticipated encounter, and the endearing little story of each store.)
- "讓人文、藝術與創意融入於你我的生活" — official Eslite life/platform expression. (English gloss: letting the humanities, art, and creativity blend into your life and mine.)

The parenthesised English renderings are reading aids added here. The published strings are the Traditional Chinese above; do not substitute a translation for them.

### Voice reading

The characterisation below and the 4 Do/Don't rows that follow it are a derived editorial implementation inference from the verified surfaces; they are not 誠品-authored or a separately published UI specification.

The first-party anniversary and cultural-platform language reads as reflective, welcoming, and specific about encounters, culture, and everyday life. It can invite exploration without manufacturing urgency, and it works best when it names a cultural object, maker, place, or experience and then leaves space for the reader's own interpretation.

| Do | Don't |
|---|---|
| Use calm invitations to discover books, objects, stories, and cultural exchange. | Use scarcity pressure or hard-sell retail hyperbole as the default tone. |
| Connect a product or activity to lived context when the source provides it. | Claim a universal personal transformation from a purchase. |
| Keep language inclusive and open-ended. | Speak as though all audiences share the same taste, schedule, or cultural background. |
| Let detail support curiosity. | Overload a quiet editorial surface with promotional exclamation. |

### Locale

The captured public routes and the first-party lines above are Traditional Chinese, and the visible type stack is a Traditional-Chinese system stack whose first family is unresolved. Preserve readable Traditional-Chinese fallback coverage while labelling the stack honestly as unresolved rather than proprietary. That preservation rule is a derived editorial implementation inference from the verified surfaces; it is not 誠品-authored or a separately published UI specification.

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

- member, checkout, native-app, and physical-store systems
- hover, focus transition, pressed transition, disabled, dialog, toast, tab, validation, and authenticated component states
- empty, loading, error, success, and skeleton state treatments
- responsive layouts, menu expansion, cart behavior, and a universal grid, breakpoint, mobile, or checkout-layout specification
- a named type family for the captured public commerce routes, and a first-party distributed Eslite type asset or license
- popover, modal, menu, and elevated-shadow treatments
- motion duration, easing curve, reduced-motion policy, and event transition
