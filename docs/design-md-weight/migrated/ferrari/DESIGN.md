# Ferrari Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Ferrari builds road cars and competes in racing from Maranello; its official history frames that work as cars made to win both on track and road. This contract covers three public Ferrari web surfaces observed on 2026-07-13 in a single `1440×900` desktop capture: the `en-EN` home page, the `en-EN` car-range page, and the `en-EN` Formula 1 page on `https://www.ferrari.com`. Three supplied public Ferrari surfaces were reconciled, and the marketing and racing web components below are retained only at their observed selector/surface boundary. The capture does not establish authenticated product UI, dealer tooling, configurator states, or native-app patterns, and no responsive behavior, semantic status palette, or unobserved interaction variant is inferred from it. It equally does not establish a Ferrari configurator, checkout, dashboard, alert, or component-state system; do not build one from this reference.

Across the three surfaces the observed chrome is black, white, and transparent. `#ffffff` is the canvas, `#181818` is the text and border color on light public chrome, the header control is transparent with white 12px `Body-Font` text at 1px tracking, and public primary and header controls resolve to 0px radius. A Ferrari-red `#da291c` Subscribe action appears on the observed car-range and Formula 1 surfaces as a 57px CTA fill, and cookie consent is a separate 2px OneTrust utility treatment. Those values are observed. Reading the combination as an interface that recedes behind vehicle imagery — image-led brand and racing communication rather than an in-car, owner, or commerce application, and a deliberate low-chrome presentation — is a derived editorial implementation inference from the verified surfaces; it is not Ferrari-authored or a separately published UI specification.

Ferrari’s official corporate account begins in 1947, when the 125 S passed through the Maranello factory gates. Its History surface frames the continuing work as cars intended to win on track and road, while the corporate description connects the Prancing Horse with exclusivity, performance, quality, sporting success, innovation, technology, and driving pleasure. Ferrari established Centro Stile in 2010 and describes its work as a close relationship between design and engineering, form and content; its own design writing describes Centro Stile’s continuing combination of art and engineering. Those are first-party statements about the company and its design organisation, and they assign no interface value on their own. Treating that studio and that description as the marque’s current design evolution, and reading the concise public web shell alongside that wider product story, is a derived editorial implementation inference from the verified surfaces; it is not Ferrari-authored or a separately published UI specification. The three observed surfaces are not proof that every Ferrari surface uses the same tokens or components.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Browse the Ferrari car range on the observed public car-range surface.
- Read Formula 1 racing content on the observed public Formula 1 surface.
- Subscribe through the Ferrari-red Subscribe CTA observed on the car-range and Formula 1 surfaces.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Ferrari’s official corporate material identifies clients as the recipients of its exclusive, authentic, and memorable experiences; that stakeholder group is the only audience carried here. No first-party research in this packet establishes demographics, jobs-to-be-done, purchase behavior, accessibility needs, or task flows for a detailed persona, so no archetype is written.

### Distinctive traits

- **Public-surface scope:** home, car range, and Formula 1 only; no account or checkout behavior is promoted.
- **Image-led contrast:** `#ffffff`, `#181818`, and transparent controls carry the observed chrome.
- **Measured accent:** `#da291c` is an observed 57px Subscribe CTA fill, not a universal semantic color.
- **Sharp geometry:** public primary and header controls resolve to 0px radius; cookie consent is a separate 2px utility treatment.

The four values above are observed. The labels attached to them — image-led contrast, measured accent, sharp geometry — are a derived editorial implementation inference from the verified surfaces; they are not Ferrari-authored or a separately published UI specification.

### Principles

These four items and the applied rules under them are a derived editorial implementation inference from the verified surfaces; they are not Ferrari-authored or a separately published UI specification.

1. **Let the vehicle imagery carry the public-surface emphasis.** *UI implication:* retain the measured low-chrome, transparent header treatment rather than inventing application panels.
2. **Keep action color contextual.** *UI implication:* use the measured red only where the captured Subscribe CTA establishes it; do not infer semantic status colors.
3. **Keep public controls sharp.** *UI implication:* the observed header and Subscribe controls are 0px radius; cookie-consent chrome is a separate 2px utility exception.
4. **Separate related evidence domains.** *UI implication:* a marketing, racing, corporate, font-asset, or consent observation does not authorize an unobserved product component.

Applied rules:

- Scope the sharp red Subscribe CTA to the observed public car-range/racing pattern.
- Keep the measured header item transparent, white, and widely tracked when it sits on dark imagery.
- Treat the 2px consent button as third-party utility chrome, not a Ferrari product-control default.
- Preserve FerrariSans and Body-Font metadata without silent font substitution.

### Avoid

- Generalize `#da291c` into success, danger, alert, or every primary-action role.
- Turn the OneTrust cookie action into a product button pattern.
- Add hover, pressed, menu, carousel, or responsive rules that the supplied evidence does not contain.
- Use declared-only LF Maranello, Noe Display, or Open Sans faces as current Ferrari UI tokens.
- Substitute a system font as FerrariSans or Body-Font.
- Present the three observed public surfaces as proof of authenticated product UI, dealer tooling, configurator states, or native-app behavior.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Ferrari-red action** (`#da291c`): observed background for the car-range and Formula 1 Subscribe CTA.
- **Canvas / on-primary** (`#ffffff`): observed white surface and red-CTA foreground; it also appears as the header-control foreground on dark imagery.
- **Foreground** (`#181818`): observed text and border color on light public chrome.
- **Consent-utility ink** (`#000000`): the observed text and 1px border color of the OneTrust cookie-control action. It is that control’s own field, not a general Ferrari ink role.

The bundle also contains black text and border values, but it does not establish error, success, warning, link-hover, yellow heritage, or a general dark-surface role. Those are omitted rather than reconstructed from older snapshots or photography.

### Spacing

Three control insets were observed, one per measured control: 5px vertical on the header item (`5px 0px`), 12px vertical on the consent action (`12px 10px`), and a 21px inset on the Subscribe CTA. They are three control measurements, not a general spacing scale.

### Shape

- **Sharp** (`0px`): the observed public header and Subscribe controls.
- **Consent** (`2px`): the OneTrust cookie-control action only.

Both measured public controls resolve to 0px. The 2px corner belongs to the third-party consent utility and is not a Ferrari radius step. Reading those two measurements as a sharp public geometry is a derived editorial implementation inference from the verified surfaces; it is not Ferrari-authored or a separately published UI specification.

### Elevation

The listed components report `boxShadow: none`, and the observed depth of the public chrome comes from transparency, image contrast, and white or red fills rather than from a reusable shadow token. No overlay, modal elevation, or dark-card token is promoted from the collector. The `none` value is observed; attributing the depth to transparency, contrast, and fills is a derived editorial implementation inference from the verified surfaces; it is not Ferrari-authored or a separately published UI specification.

### Motion

No duration, easing, autoplay, or reduced-motion rule was measured in the supplied capture, so no motion value is carried here. Do not infer a Ferrari motion system from editorial photography or the existence of racing content. Promoting any motion value into this contract requires a per-component computed observation on a live Ferrari surface of all five: transition properties, animation name, duration, easing, and reduced-motion behavior. A single curve confirmed on another surface or in a general design system does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Ferrari’s official SF-24 article identifies Ferrari Sans as the marque’s official font for the race numbers. That establishes brand context, not a blanket UI role. |
| Live computed surface-use | `Body-Font` is loaded/high with 746 visible uses across all three supplied pages; it covers public navigation, CTA, card, badge, list, and text roles. `FerrariSans` is loaded/high with 32 visible home-surface uses. |
| Official distributed asset | First-party `Ferrari-SansRegular` and `Ferrari-SansMedium` WOFF/WOFF2 files corroborate the loaded FerrariSans family. |
| Declared-only | `Body-Font-Medium`, LF Maranello Body/Caption/Title, Noe Display, and Open Sans families were declared with zero visible captured use. They are not UI-family tokens. |
| Unresolved / license boundary | `Title-Font` was loaded for four Formula 1 headings but is an alias whose delivered sources include Ferrari Sans files; it is not promoted as a separate family. Ferrari’s Legal page does not grant a downstream web-font licence. Preserve metadata and omit a specimen when the font is unavailable; never substitute a system font as FerrariSans or Body-Font. |

### Family

- **UI family:** `Body-Font` — the family computed on the observed public navigation, CTA, card, badge, list, and text roles.
- **Chrome family:** `FerrariSans` — the family computed on the observed home-surface chrome, including the consent action.

`Title-Font` remains an alias rather than a third family. Both names above are carried as metadata even where a specimen cannot be rendered; do not render a system or fallback face as though it were FerrariSans or Body-Font.

### Type roles

| Role | Family | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---:|---|
| Header item | Body-Font | 12px | 400 | 15.24px (1.27) | 1 | Observed public header item |
| Red Subscribe CTA | Body-Font | 16px | 400 | 18.4px (1.15) | — | Observed Ferrari-red Subscribe CTA |
| Cookie Manage action | FerrariSans | 13.008px | 600 | 15.6096px (1.2) | 0.13008 | Observed OneTrust cookie-control action |

Each line height is stated as the computed pixel value with its unitless ratio in parentheses. The header item carries 1px tracking.

### Assets

`Ferrari-SansRegular` and `Ferrari-SansMedium` WOFF/WOFF2 files are first-party font sources that corroborate the loaded FerrariSans family. Ferrari’s Legal page does not grant a downstream web-font licence, so those files are not a redistribution grant: preserve the family metadata and omit a specimen when the font is unavailable.

This contract carries no image, icon, or logo file.

<!-- design-md:section components-states -->
## 4. Components & States

### State record

All values below come from the supplied public-surface collector. It records `interactionCount: 0`; a focus snapshot is not evidence of a transition, menu, dialog flow, or unlisted variant. Default public-control baselines and one header focus snapshot were captured, but empty, loading, success, failure, disabled, form validation, and skeleton states were not observed. No state treatment is invented here.

No generic card, input, carousel, menu, notification, tab, hover, pressed, disabled, or error variant is published here: the relevant component or state was not observed as a measured canonical field.

Declared interactive components still declare applicability by control meaning, not by the completeness of the record. `default` and `focus-visible` apply. Pointer-web hover applies wherever a pointer control exists. `loading`, `error`, and `success` are judged against what each control is for: a control that commits an operation can be pending, can fail, and can confirm, while a control whose role is to select a destination or open another surface reports none of those itself. Where a state applies by role and no treatment was observed, the state stays applicable and only its visual treatment is omitted. Absence of an observation is never a `not-applicable` reason. This is not a complete state-coverage claim.

### Subscribe CTA

- Role: the Ferrari-red public Subscribe CTA on the car-range and Formula 1 surfaces
- Declared use: `Observed Ferrari-red Subscribe CTA`
- Kind: interactive
- Anatomy: label on a filled surface
- Background: `#da291c` · Text: `#ffffff`
- Border: `0px solid #ffffff` · Radius: `0px` · Padding: `21px` · Height: `57px`
- Font: `16px / 400 / Body-Font`, line height 18.4px (1.15)
- Observed: default only, on the car-range surface and its Formula 1 sibling, which share one CTA class

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on the car-range surface and its Formula 1 sibling |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Interactive control; visual treatment omitted |
| loading | applicable | Subscribing commits an operation the reader waits on, so a pending state has meaning for this control; visual treatment omitted |
| error | applicable | The same committing role — a subscription attempt can fail; visual treatment omitted |
| success | applicable | The same committing role — a subscription attempt can complete; visual treatment omitted |

### Header navigation item

- Role: the public header navigation item, a light-on-image control
- Declared use: `Observed public header item`
- Kind: interactive
- Background: transparent · Text: `#ffffff`
- Border: `0px solid #ffffff` · Radius: `0px` · Padding: `5px 0px` · Height: `25px`
- Font: `12px / 400 / Body-Font`, line height 15.24px (1.27), 1px tracking
- Observed: default only on the home surface; the collector retained a focus snapshot but no changed focus value is promoted

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on the home surface |
| hover | applicable | Pointer-web header control on dark imagery; visual treatment omitted |
| focus-visible | applicable | Interactive control; the retained focus snapshot supplies no changed value, so the treatment is omitted |
| disabled | applicable | Interactive control; visual treatment omitted |
| loading | not-applicable | The item’s role is header navigation — it selects a destination and runs no operation of its own that could be pending |
| error | not-applicable | The same destination role; a destination that fails to open reports that on the destination, not on the header item that selected it |
| success | not-applicable | The same destination role; arriving at the destination is the outcome itself, so the item confirms no separate completion |

### Cookie-consent action

- Role: the `Manage Cookies` utility action inside the home-surface OneTrust consent dialog; this is not a public product CTA
- Declared use: `Observed OneTrust cookie-control action`
- Kind: interactive
- Background: `#ffffff` · Text: `#000000` · Border: `1px solid #000000`
- Radius: `2px` · Padding: `12px 10px` · Height: `42px`
- Font: `13.008px / 600 / FerrariSans`, line height 15.6096px (1.2), tracking 0.13008
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed in the home-surface consent dialog |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Interactive control; visual treatment omitted |
| loading | not-applicable | `Manage Cookies` opens the cookie-management surface; it commits no consent operation of its own that could be pending |
| error | not-applicable | The same opening role; a preference that fails to save is reported by the management surface, not by the control that opened it |
| success | not-applicable | The same opening role; the management surface opening is the outcome itself, so this control confirms nothing separately |

### Formula 1 media card

- Role: the media-card wrapper on the observed Formula 1 surface
- Declared use: `Static Formula 1 media-card wrapper`
- Primitive: `card`
- Background: `transparent` · Text: `#ffffff` · Radius: `0px` · Shadow: `none`
- Kind: non-interactive — the recorded use describes a static wrapper and declares no control role, so no state-applicability map is asserted for it.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied desktop capture is `1440×900`. Its evidence supports full-width public surfaces and light-on-image header controls. It does not establish a global grid, maximum width, breakpoint, carousel behavior, or a reusable card layout. Keep those fields absent until a captured surface measures them.

Only a `1440×900` desktop capture was supplied. Mobile breakpoints, navigation collapse, touch-target policy, image crops, and reduced-motion behavior were not measured and are therefore not specified. The 57px Subscribe CTA, the 25px header item, and the 42px consent action are desktop-capture measurements rather than specifications that hold across viewports.

The `1440×900` measurement and the full-width, light-on-image observations are recorded. Reading the visual emphasis as coming from photography rather than from a framed application shell is a derived editorial implementation inference from the verified surfaces; it is not Ferrari-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Ferrari’s first-party corporate language connects passion, craftsmanship, innovation, exclusivity, performance, quality, and memorable client experiences.

**First-party wording:** “The power of passion becomes the beauty of achievement.” — Ferrari Corporate, About us.

The public navigation and short action controls in the capture are much terser than that corporate narrative. That comparison, and the conclusion that concise discovery language belongs on public editorial surfaces, is a derived editorial implementation inference from the verified surfaces; it is not Ferrari-authored or a separately published UI specification. Do not fabricate customer-service, error, or transactional voice rules.

Two control names appear in the observed evidence: `Subscribe` on the car-range and Formula 1 surfaces, and `Manage Cookies` in the home-surface consent dialog. Carry both exactly as written, including their capitalisation. `Manage Cookies` is third-party OneTrust chrome rather than Ferrari product copy, so it does not establish a Ferrari label convention.

The observed surfaces are the `en-EN` English editions. No other locale was measured.

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

These are unnamed values, not permissions to invent:

- error, success, warning, link-hover, yellow heritage, and general dark-surface color roles
- empty, loading, success, failure, disabled, form validation, and skeleton state treatments
- hover, pressed, menu, and carousel treatments on the observed public controls
- a global grid, maximum width, breakpoint, carousel behavior, and reusable card layout
- mobile breakpoints, navigation collapse, touch-target policy, image crops, and reduced-motion behavior
- motion duration, easing, and autoplay values
- overlay, modal elevation, and dark-card tokens
- `Title-Font` as a separate family, and a downstream web-font licence for FerrariSans or Body-Font
- validated stakeholder research: demographics, jobs-to-be-done, purchase behavior, accessibility needs, and task flows
- customer-service, error, and transactional voice rules
