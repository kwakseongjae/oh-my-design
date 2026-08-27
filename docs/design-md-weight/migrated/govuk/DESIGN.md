# GOV.UK Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

GOV.UK is the UK government's central digital platform. This contract covers two first-party web surfaces the source records as Tier 1 on 2026-06-22: the live homepage at `https://www.gov.uk/`, and the published GOV.UK Design System at `https://design-system.service.gov.uk` together with its colour, button, text-input, tag, notification-banner, select, and inset-text component pages. Every value below stays attached to the surface that established it. The homepage and the Design System are separate evidence domains: a homepage measurement is not a Design System token, and a Design System token is not a homepage value, except where the source itself records both and keeps them distinct. That separation is the source's own — its token note attributes govuk-blue `#1d70b8` to brand and to the gov.uk header, and GDS green `#0f7a52` to primary action colour on the Design System site. Reading the two-surface split as a hard domain boundary is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

The aesthetic the source records is utilitarian and accessibility-first: a pure white (`#ffffff`) canvas with near-black text (`#0b0c0c`), a single authoritative govuk-blue (`#1d70b8`) for brand anchoring, and a signature yellow focus highlight (`#ffdd00`). There is no border-radius anywhere in the system — every element is crisply rectangular. The typographic foundation is `GDS Transport`. Headlines run bold and large (up to 64px on the homepage). The primary action colour is GDS green (`#0f7a52`) for buttons; govuk-blue (`#1d70b8`) is the brand identity colour on the header and logo. A two-pixel bottom shadow in a darker shade gives buttons a pressed dimension. Links are coloured `#1a65a6` (live inspect) / `#1d70b8` (DS specification); visited links are `#54319f` purple. The measurements in this paragraph are recorded values. The characterizations built on them — utilitarian, accessibility-first, institutional authority, functional directness rather than consumer friendliness, anti-decoration, every pixel earning its place through function, the focus ring as the system's most recognizable signature — are a derived editorial implementation inference from the verified surfaces; they are not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

GOV.UK launched in **2012** as the consolidation of 750+ government websites under a single domain, led by the **Government Digital Service (GDS)** — a unit established within the Cabinet Office to transform how digital services are delivered in the United Kingdom. The founding brief was that every UK government service should be "so simple, clear, and fast" that it does not need to be explained. Mike Bracken, the first Executive Director of GDS, described the goal as "the single online shop window for government" — one place where any person in the UK could access any service without knowing which department was responsible. The GOV.UK Design System emerged from this mandate in **2018**, codifying the patterns that GDS had developed across hundreds of services since 2012. The system's central proposition, as the source states it, is that the best service design is invisible — the user should complete their task without ever thinking about the interface. This led to the design system's most distinctive decisions: the custom GDS Transport typeface (legible under any condition), the bright yellow focus ring (absolutely unmissable), and the zero border-radius policy (clear, institutional, universally understood). Nothing in the system is decorative. Nothing is there to signal a brand aesthetic. Everything serves the task. The UK government's commitment to the Web Content Accessibility Guidelines (WCAG) as a legal requirement for public sector bodies (under the Public Sector Bodies Accessibility Regulations 2018) means that accessibility is not an add-on to the GOV.UK Design System — it is the foundational constraint from which every token, component, and pattern is derived. The year, founding, GDS, Mike Bracken quotation, 2018 Design System emergence, and Public Sector Bodies Accessibility Regulations 2018 are the source's own narrative facts; they do not by themselves supply interface tokens. The causal reading that those facts "led to" the typeface, the focus ring, and the zero-radius policy, and the sentences "Nothing in the system is decorative / Nothing is there to signal a brand aesthetic / Everything serves the task", are a derived editorial implementation inference from the verified surfaces; they are not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

The source names NHS, HMRC, and Home Office only as departments that use the same buttons, inputs, and focus rings; it does not attach computed values from those services.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These three name what the two captured surfaces are for. That naming is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation. They do not come from the source's persona section, which the source itself marks as illustrative archetypes.

- Find government services on the GOV.UK homepage (H1: "The best place to find government services").
- Start and complete a government service ("Start now", "Save and continue", "Continue", "Confirm and send"; service headings such as "Check your State Pension", "Apply for Universal Credit").
- Read the published GOV.UK Design System and its canonical component pages for colour, button, text-input, tag, notification-banner, select, and inset-text tokens.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section states in its own header that its entries are illustrative archetypes; those biographies are not carried here and are not re-hosted in the sidecar. Use only what the two captured surfaces establish at a group level: people in the United Kingdom using government services, and service teams reading the Design System. That grouping is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them ("government-commissioned, no substitute", "the only depth in the system", "not pure black, slightly warm") are a derived editorial implementation inference from the verified surfaces — they are not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

- GDS Transport font family — government-commissioned, no substitute
- Zero border-radius policy — rectangular geometry for all interactive elements
- `#ffdd00` (bright yellow) focus ring — WCAG-mandated, immediately visible
- Govuk-blue `#1d70b8` as brand/identity colour; GDS green `#0f7a52` as primary action
- 2px bottom shadow on buttons (green `#083d29` / grey `#858686` / red `#651b1b`) — the only depth in the system
- Near-black `#0b0c0c` for all primary text — not pure black, slightly warm
- Links coloured `#1a65a6` (live inspect) / `#1d70b8` (DS specification); visited links `#54319f` purple
- Status tags use `#d2e2f1` blue-tint background with `#0f385c` deep blue text

### Principles

These five items restate published GDS / GOV.UK Design System positions the source attributes to GDS: "Start with needs" as GDS's founding design principle; WCAG 2.2 AA under the Public Sector Bodies Accessibility Regulations 2018 as a UK legal requirement; the GDS Content Design Manual requiring services written at reading age 9; progressive enhancement (work without JavaScript, without custom fonts, without modern CSS); and cross-department consistency (NHS, HMRC, and Home Office use the same buttons, inputs, and focus rings). Those attributions are the source's own. The causal sentences inside the numbered items that are not marked *UI implication* — "exists because users need it to complete tasks — not because it looks good", "anchors every token decision", and "all derive from this legal mandate, not from stylistic preference" — and the *UI implication* sentences attached to them are a derived editorial implementation inference from the verified surfaces; they are not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

1. **Start with needs.** User needs, not government needs. Every component in the system exists because users need it to complete tasks — not because it looks good or signals innovation. GDS's founding design principle anchors every token decision.
2. **Accessibility is not optional.** WCAG 2.2 AA compliance is a UK legal requirement (Public Sector Bodies Accessibility Regulations 2018). The `#ffdd00` focus ring, the 2px thick input borders, the sufficient colour contrast of `#0b0c0c` on `#ffffff` — all derive from this legal mandate, not from stylistic preference. *UI implication:* zero tolerance for decorative elements that reduce contrast or obscure focus states.
3. **Plain English everywhere.** The GDS Content Design Manual requires services to be written at reading age 9. *UI implication:* button labels are verbs ("Continue"), headings are tasks ("Check your eligibility"), error messages say exactly what to fix.
4. **Progressive enhancement.** GOV.UK services must work without JavaScript, without custom fonts, without modern CSS. The design system is built mobile-first, server-rendered, and degrades gracefully. *UI implication:* no component relies on JavaScript for its basic function.
5. **Consistency above originality.** Departments do not customise GOV.UK components to express their brand. The NHS, HMRC, and Home Office all use the same buttons, the same inputs, the same focus rings. *UI implication:* brand differentiation happens through service name and content, never through colour or geometry overrides.

### Application rules

The source's eight Do rules, kept as brand rules rather than as universal governance. The justifications inside them — why a colour belongs to one role, why a radius is reserved — are a derived editorial implementation inference from the verified surfaces; they are not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

- Use `#ffdd00` focus ring on every interactive element without exception
- Maintain 0px border-radius on all buttons, inputs, and components
- Use GDS green (`#0f7a52`) for primary action buttons
- Apply the 2px bottom shadow on all buttons in the correct shade
- Use `#1d70b8` govuk-blue for brand anchoring and links
- Set body text in GDS Transport (or Arial fallback) at 19px/400
- Use `#0b0c0c` (not pure black) for all primary text
- Give visited links the `#54319f` purple colour

### Avoid

The eight avoidances are the source's own Don't list. The reasons attached to them — why a colour or a radius must stay in one role — are a derived editorial implementation inference from the verified surfaces; they are not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

- Don't add border-radius to any component — the rectangular geometry is a system constraint, not a style preference
- Don't use the focus yellow (`#ffdd00`) as a decorative colour — it is reserved exclusively for focus states
- Don't omit the button bottom shadow — it is how users perceive pressability with zero border-radius
- Don't use custom fonts — GDS Transport is the only approved typeface; fall back to Arial only
- Don't make buttons pill-shaped or add gradient backgrounds
- Don't use the govuk-blue (`#1d70b8`) as a button background on services — GDS green (`#0f7a52`) is the action colour
- Don't break the colour contract — never use semantic error red for non-error contexts or visited purple for non-visited links
- Don't add decorative illustrations, gradients, or photography to service pages

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — "the brand anchor colour", "the GOV.UK signature focus indicator", "the only elevation in the system" — that characterization is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

### Semantic color

**Brand**

| Role | Value | Recorded use |
|---|---|---|
| Govuk Blue / primary / brand / notification-banner | `#1d70b8` | The brand anchor colour. Used in the GOV.UK crown/header, notification banners, and as the foundational brand token (`govuk-functional-colour("brand")`). Primary link colour and interactive highlights on the main gov.uk site. Token-set keys: `primary`, `brand`, `notification-banner`. |
| Govuk Blue Dark / primary-hover / tag-default-fg | `#0f385c` | Hover state for blue links and shade-50 of the blue palette. Used as tag foreground text. Token-set keys: `primary-hover`, `tag-default-fg`. |
| Blue Tint / tag-default-bg | `#d2e2f1` | tint-80 of govuk blue; used as tag background and surface backgrounds. Token-set key: `tag-default-bg`. |
| Surface Background / surface | `#f4f8fb` | tint-95 of govuk blue; the `template-background` — used behind cards and panels. Token-set key: `surface`. |
| Link (live inspect) | `#1a65a6` | Links coloured `#1a65a6` (live inspect) / `#1d70b8` (DS specification). |

**Action (Green)**

| Role | Value | Recorded use |
|---|---|---|
| GDS Green / action / success | `#0f7a52` | Primary button background. Cookie consent buttons, the main action colour across all GOV.UK services. Mirrors as success notification banners. Token-set keys: `action`, `success`. |
| Green Shadow / action-shadow | `#083d29` | Button shadow colour — the bottom 2px shadow that defines button depth. Token-set key: `action-shadow`. |
| Action secondary | `#f3f3f3` | Secondary button background. Token-set key: `action-secondary`. Also Surface Alt. |
| Action secondary shadow | `#858686` | Secondary button 2px bottom shadow. Token-set key: `action-secondary-shadow`. |
| Action warning / error | `#ca3535` | Warning buttons and error messages. `govuk-functional-colour("error")`. Token-set keys: `action-warning`, `error`. |
| Action warning shadow | `#651b1b` | Warning-button 2px bottom shadow. Token-set key: `action-warning-shadow`. |

**Text**

| Role | Value | Recorded use |
|---|---|---|
| Primary Text / foreground / input-border / focus-text | `#0b0c0c` | Near-black. All body text, headings, labels. The `govuk-functional-colour("text")` token. Also the 2px solid form-input border and the focus-ring underline. Token-set keys: `foreground`, `input-border`, `focus-text`. |
| Secondary Text | `#484949` | Subdued text, captions, secondary information. tint-25 of black. Token-set key: `secondary-text`. |
| Pure Black | `#000000` | Input text (raw DOM inspection). Not the primary-text token. |
| On-primary | `#ffffff` | Text on primary/action fills. Token-set key: `on-primary`. |

**Semantic**

| Role | Value | Recorded use |
|---|---|---|
| Focus Yellow / focus | `#ffdd00` | The GOV.UK signature focus indicator. Applied as an outline on every focused element. Token-set key: `focus`. This is a generic focus observation, not a `focus-visible` treatment. |
| Visited Purple / visited | `#54319f` | Visited link state — explicitly tracked in the design system to help users navigate without revisiting pages. Token-set key: `visited`. |

**Surface & Borders**

| Role | Value | Recorded use |
|---|---|---|
| White / canvas | `#ffffff` | Page background, card surfaces, form inputs. Token-set key: `canvas`. |
| Surface Alt | `#f3f3f3` | Secondary button background; tint-95 of black. Same hex as `action-secondary`. Token-set key: `surface-alt`. |
| Hairline | `#cecece` | Border default, tint-80 of black. Inset text panels, dividers. Token-set key: `hairline`. |

Disabled input text `#737373` belongs to the Disabled state record, not to this palette.

### Spacing

Token-set steps, unitless: `xs 5 · sm 10 · md 15 · base 20 · lg 30 · xl 40 · xxl 60 · section 80`. The visible section writes the same scale in px: 5px, 10px, 15px, 20px, 30px, 40px, 60px, 80px (section). Base unit: 5px (fine) / 10px (medium). The system defines spacing in multiples of 5 rather than the more common 4 or 8. GOV.UK Frontend provides a spacing scale via `govuk-spacing($spacing)` Sass function (0–9, mapping 0px to 80px). Vertical rhythm: headings follow a 25px / 20px / 15px bottom-margin hierarchy. Gutters: 15px on mobile, 30px on desktop.

Reading that 5px cadence as a document-density choice rather than a consumer 4/8 grid is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

### Shape

| Step | Value | Token-set key | Use |
|---|---|---|---|
| Sharp | 0px | `sm`, `md`, `lg` | Buttons, inputs, banners, inset text — the system constraint |
| Tag | 1px | `full` | Status tags only. Token-set `rounded.full: 1` is this 1px step, not a pill. |

Calling 0px the system constraint, and reserving `full: 1` for tags only, is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, body text, labels |
| Button (Level 1) | `0 2px 0 <shade-colour>` | All buttons — the only elevation in the system |
| Focus (Accessibility) | `#ffdd00` 3px outline + `#0b0c0c` box shadow | Keyboard focus ring on every interactive element. Token-set `shadow.focus`: `0 -2px #ffdd00, 0 4px #0b0c0c`. This is a generic focus observation, not a `focus-visible` treatment. |

Token-set shadows, verbatim: `button` `0 2px 0 #083d29`; `button-secondary` `0 2px 0 #858686`; `button-warning` `0 2px 0 #651b1b`; `focus` `0 -2px #ffdd00, 0 4px #0b0c0c`.

The source's shadow philosophy — GOV.UK uses exactly one shadow token: a 2px bottom drop shadow on interactive controls (buttons) that conveys pressability. The shadow colour is always a shade of the button background — green `#083d29` for primary, grey `#858686` for secondary, dark red `#651b1b` for warning. There is no ambient shadow, no floating elevation, no backdrop filter. The system is definitively flat except for this single functional shadow pattern. That philosophy paragraph is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation. The measurements themselves are recorded values.

### Motion

The source attributes its token-level claims to a live inspection of computed colour, type, geometry, border, and shadow on the two surfaces. The motion contract below sits outside that attribution: the sibling verification file records no transition, animation, duration, or easing observation on either surface. The durations, easing token names and roles, motion rules, signature motions, and reduced-motion behavior below are therefore a derived editorial implementation inference from the verified surfaces; they are not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

Durations:

| Token | Value | Use |
|---|---|---|
| `govuk-motion-instant` | 0ms | Focus ring transitions (must be instant for accessibility) |
| `govuk-motion-fast` | 100ms | Button press, checkbox tick, input focus border change |
| `govuk-motion-standard` | 200ms | Accordion open/close, tab panel change |
| `govuk-motion-slow` | 300ms | Summary list expand, cookie banner dismiss |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to GOV.UK evidence, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-standard` | Standard transitions |
| `ease-enter` | Expanding elements (accordions) |
| `ease-exit` | Dismissing elements (cookie banners) |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or specification document — does not satisfy that condition.

Motion rules, as the source states them:

- GOV.UK motion is conservative by mandate. The `prefers-reduced-motion` media query collapses all transitions to `motion-instant`. The system's users include people with vestibular disorders, epilepsy, and cognitive disabilities for whom unexpected motion is a barrier.
- No animation exists for aesthetic pleasure — each motion serves a signposting function (accordion opening = more content is visible, cookie banner disappearing = preference saved).

Signature motions, as the source states them (curve values omitted):

1. **Focus ring transition**: Instantaneous — 0ms. The focus indicator must appear without delay for keyboard users to track their position.
2. **Accordion expand**: 200ms `ease-enter`, height from 0 to auto. A chevron icon rotates 180° in sync.
3. **Cookie banner dismiss**: 300ms `ease-exit` fade-out, then `display: none`. The browser scrolls to the main content automatically to ensure no content is hidden behind a newly collapsed header.
4. **Error summary appearance**: Instant — error summaries appear server-side on form re-render, not via animation. No scroll animation; the page focus moves to the error summary heading via JavaScript.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | GDS Transport is a custom-commissioned typeface used exclusively by the UK government. The published GOV.UK Design System names it as the product face. |
| Live computed surface-use | Both captured surfaces compute visible text as `"GDS Transport", arial, sans-serif`. |
| Official distributed asset | GDS Transport is not publicly available for third-party use. This capture reached no distributable font file. |
| Declared-only fallback | In prototypes, `Arial` serves as the approved fallback. The token-set fallback is `arial, sans-serif`. It is a fallback, not the brand face. |
| License | The source records no public license for GDS Transport. Treating the face as government-exclusive, not a third-party webfont, is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation. |
| Outside these captures | Typography on department services other than the two captured surfaces remains outside this contract. Reading department-service typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation. |

### Family

- **Primary:** `"GDS Transport"`, `arial`, `sans-serif`
- Token-set family: `sans: "GDS Transport"`, `fallback: "arial, sans-serif"`
- Do not substitute a system face for GDS Transport and present it as the GOV.UK face. The fallback is Arial only — not Helvetica, not system-ui. Reading GDS Transport as carrying institutional weight while remaining legible at all sizes is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---|---|
| Display Hero | GDS Transport | 64px | 700 | 1.1 | default | GOV.UK homepage H1 — 'The best place to find government services' |
| Heading XL | GDS Transport | 48px | 700 | 1.15 | default | DS H1 major headings |
| Heading L | GDS Transport | 36px | 700 | 1.11 | default | H2 section headings |
| Heading M | GDS Transport | 24px | 700 | 1.25 | default | H3 sub-section headings |
| Heading S | GDS Transport | 19px | 700 | 1.31 | default | H4 small headings |
| Body L | GDS Transport | 19px | 400 | 1.31 | default | Lead paragraph and button labels |
| Body M | GDS Transport | 16px | 400 | 1.25 | default | Standard body text |
| Caption | GDS Transport | 14px | 400 | 1.43 | default | Captions, metadata |

Line heights are unitless ratios in the source token set (`1.1`, `1.15`, `1.11`, `1.25`, `1.31`, `1.43`) and stay ratios here. The source's visible hierarchy table does not print line-height; the token-set values are the ones carried as tokens. Heading L is 36px on the Design System site and 40px on gov.uk; both measurements are kept. Heading XL reduces 48px → 32px on mobile.

Token-set `use` strings, verbatim: Display Hero `GOV.UK homepage H1 — 'The best place to find government services'`; Heading XL `DS H1 major headings`; Heading L `H2 section headings`; Heading M `H3 sub-section headings`; Heading S `H4 small headings`; Body L `Lead paragraph and button labels`; Body M `Standard body text`; Caption `Captions, metadata`.

### Type rules

Observable in the scale: two weights only — Regular (400) and Bold (700); 19px is the UI default for button labels, navigation, form labels, and lead paragraphs; headings use tighter line-heights (1.1–1.25), body text is set at 1.25–1.31; no tracking manipulation — GDS Transport is designed to be set at default tracking; uppercase is rare — exceptions include navigation labels at smaller breakpoints.

Reading those facts as rules — two weights only, 19px as the UI default, line-height by function, no tracking manipulation, uppercase rare — is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation. The two-weights and 19px-default sentences are also the source's own typography principles.

### Assets

- Logo pointer recorded by the source: `https://www.google.com/s2/favicons?domain=gov.uk&sz=128`. This is a favicon-service URL keyed to the domain, not a GOV.UK-hosted brand file; the source supplies no first-party logo asset in the portable identity. Classing that entry as a third-party favicon service is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.
- The GOV.UK wordmark is the white "GOV.UK" lockup on the `#1d70b8` header band.
- Do not add decorative illustrations, gradients, or photography to service pages.

<!-- design-md:section components-states -->
## 4. Components & States

### Surface state contract

The twelve rows below are the source's state contract. They describe surface- and module-level treatments, not per-control treatments, and they name published copy that this contract carries verbatim. Reading them as the state contract for the captured surfaces is a derived editorial implementation inference from the verified surfaces; they are not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

| State | Treatment |
|---|---|
| **Empty (task list, no items started)** | Each task row shows status tag "Cannot start yet" in grey. Row heading in `#0b0c0c` 19px/400. No illustration, no empty-state artwork. Instruction text above explains the sequence. |
| **Empty (search results, zero rows)** | Sentence: "There are no results matching your search" at 19px/400. Suggestion to broaden criteria in helper text. No illustration. |
| **Loading (form submission)** | Spinner indicator with "Loading…" text. Buttons enter a disabled state with reduced opacity (0.5). The page does not navigate until the server responds. |
| **Loading (page navigation)** | No custom loading state — GOV.UK relies on browser native page transitions. Services are server-rendered; loading is fast enough that a custom skeleton is not warranted. |
| **Error (form validation)** | Error summary panel at top of page with jump links to each error field. Each error: field label + specific message. Field itself: 4px solid red `#ca3535` left border. Error message below field in red `#ca3535` 19px/400. Pattern: "There is a problem — [N] errors." |
| **Error (specific field — required)** | Message: "Enter your [field name]" — never "This field is required". Red `#ca3535` left border on input + error message `19px/400 #ca3535` below label. |
| **Error (specific field — format)** | Message: "Enter [field name] in the correct format, for example [example]". Same red treatment. |
| **Error (service unavailable)** | Dedicated error page. H1 "Sorry, the service is unavailable". Explanation. Alternative contact. No design embellishment. |
| **Success (form submitted)** | Confirmation page pattern: green `#0f7a52` panel with white checkmark icon, "Application submitted", reference number. No toast — the page IS the success state. |
| **Success (action within a flow)** | Notification banner: `#0f7a52` background, "Success" heading, description of what happened. Dismissible. |
| **Skeleton** | Not widely used — server-rendered pages use inline content from first paint. Some modern services show lightweight skeleton bars for dynamically loaded content. |
| **Disabled** | Buttons: `opacity: 0.5`, `pointer-events: none`, `cursor: not-allowed`, `aria-disabled="true"`. Inputs: `background: #f3f3f3`, `color: #737373`, `cursor: not-allowed`. |

### How applicability is decided here

The source declares each component with a primitive type (`button`, `input`, `badge`, `toast`, `card`, `dialog`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination link that commits no operation in place, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided.

One evidence boundary matters here. The source records a `#ffdd00` 3px outline (and the token-set `0 -2px #ffdd00, 0 4px #0b0c0c` shadow) as a Focus observation on buttons and inputs. That is a generic focus observation, which is a different evidence type from a `focus-visible` treatment; the observation is kept on each control's own record and no `focus-visible` row in this section carries a treatment value.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation. This is not a complete state-coverage claim.

### Primary Button

- Role: primary CTA — Save and continue
- Primitive type: `button` · Kind: interactive
- Background: `#0f7a52`
- Text: `#ffffff`
- Radius: 0px
- Padding: 8px 10px 7px
- Height: 38px
- Font: 19px / 400 / GDS Transport
- Token-set font record: `19px / 400 GDS Transport`
- Shadow: `0 2px 0 #083d29`
- Hover: background `#003a2e` (darker green)
- Focus: `#ffdd00` 3px outline + `#0b0c0c` underline — a generic focus observation, kept here and not promoted onto any `focus-visible` row
- Token-set use: `Primary CTA — Save and continue, Start now`
- Use: Primary CTA — "Save and continue", "Continue", "Confirm and send"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; declared hover `#003a2e` |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried, see the evidence boundary above |
| disabled | applicable | The surface contract sets `opacity: 0.5`, `pointer-events: none`, `cursor: not-allowed`, `aria-disabled="true"` |
| loading | applicable | The control commits an action (Save and continue, Continue, Confirm and send), and the state contract puts a spinner and "Loading…" on form submission with the button at opacity 0.5 |
| error | applicable | The control commits an action, and the state contract declares a form-validation error summary after a failed submit |
| success | applicable | The control commits an action, and the state contract declares a confirmation page or a success notification banner |

### Secondary Button

- Role: secondary action — Find address
- Primitive type: `button` · Kind: interactive
- Background: `#f3f3f3`
- Text: `#0b0c0c`
- Radius: 0px
- Padding: 8px 10px 7px
- Height: 38px
- Font: 19px / 400 / GDS Transport
- Token-set font record: `19px / 400 GDS Transport`
- Shadow: `0 2px 0 #858686`
- Token-set use: `Secondary action — Find address`
- Use: Secondary actions — "Find address", "Add another"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | A secondary action can be gated; the surface contract uses opacity 0.5 |
| loading | applicable | Find address / Add another is a commit that can be pending; the state contract puts a spinner and "Loading…" on form submission |
| error | applicable | A committed secondary action can fail; the state contract declares a form-validation error summary |
| success | applicable | A committed secondary action can complete; the state contract declares a confirmation or success banner |

### Warning Button

- Role: destructive action — Delete account
- Primitive type: `button` · Kind: interactive
- Background: `#ca3535`
- Text: `#ffffff`
- Radius: 0px
- Padding: 8px 10px 7px
- Height: 38px
- Font: 19px / 400 GDS Transport
- Token-set font record: `19px / 400 GDS Transport`
- Shadow: `0 2px 0 #651b1b`
- Token-set use: `Destructive — Delete account`
- Use: Destructive actions — "Delete account" (use sparingly, must include confirmation step)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | A destructive action can be gated; the surface contract uses opacity 0.5 |
| loading | applicable | The control commits a destructive action, and the state contract puts a spinner and "Loading…" on form submission |
| error | applicable | The control commits an action, and the state contract declares a form-validation error summary |
| success | applicable | The control commits an action, and the state contract declares a confirmation or success banner |

### Start Now (Link button)

- Role: service start page only — "Start now" (implemented as a styled link, not a button)
- Primitive type: the token block does not declare a separate type for this variant; the source lists it among the buttons as a styled link · Kind: interactive
- Background: `#0f7a52`
- Text: `#ffffff`
- Radius: 0px
- Font: 24px / 700 / GDS Transport
- Use: Service start page only — "Start now"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; no treatment carried |
| disabled | not-applicable | A start-page destination link has no precondition to gate — the meaning of a disabled state is absent from the role, not merely unrecorded |
| loading | not-applicable | The control sends the reader to a service destination; it commits no operation in place, so there is no in-progress state on the control itself |
| error | not-applicable | The control commits no operation in place, so a failure of that operation cannot be reported on it; failures belong to the destination service |
| success | not-applicable | The control commits no operation in place, so completion cannot be confirmed on it |

### Text Input

- Role: single-line text entry
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#0b0c0c`
- Border: 2px solid `#0b0c0c`
- Token-set border record: `2px solid #0b0c0c`
- Radius: 0px
- Padding: 5px
- Height: 40px
- Font: 19px / 400 / GDS Transport
- Token-set font record: `19px / 400 GDS Transport`
- Focus: 3px `#ffdd00` outline ring — a generic focus observation, kept here and not promoted onto any `focus-visible` row
- Token-set focus record: `#ffdd00 3px outline`
- Token-set use: `Standard text input field`
- Disabled: `background: #f3f3f3`, `color: #737373`, `cursor: not-allowed`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; the recorded generic focus observation is a different evidence class, so no value is carried on this row |
| disabled | applicable | Declared treatment: `#f3f3f3` background, `#737373` text, `cursor: not-allowed` |
| loading | applicable | The field participates in a submit that can be pending; treatment unresolved at the field itself |
| error | applicable | Form field; the state contract places a 4px solid `#ca3535` left border and "Enter your [field name]" / format message below the field |
| success | applicable | Form field whose submission can complete; the state contract declares a confirmation page or success banner at page level |

### Select

- Role: option list selection (native `<select>` element)
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#0b0c0c`
- Border: 2px solid `#0b0c0c`
- Token-set border record: `2px solid #0b0c0c`
- Radius: 0px
- Padding: 5px
- Height: 40px
- Font: 19px / 400 / GDS Transport
- Token-set font record: `19px / 400 GDS Transport`
- Token-set use: `Native select control`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; no treatment carried |
| disabled | applicable | A select can be made unavailable; treatment omitted at this control (the surface contract's input disabled treatment is recorded on Text Input) |
| loading | applicable | The field participates in a submit that can be pending; treatment unresolved |
| error | applicable | Form field; the state contract places a 4px solid `#ca3535` left border and a specific message |
| success | applicable | Form field whose submission can complete; the state contract declares a confirmation page or success banner |

### Tag

- Role: task-list status label
- Primitive type: `badge` · Kind: non-interactive — it renders a status label and the source gives it no control affordance, so a state-applicability map does not apply to it
- Background: `#d2e2f1`
- Text: `#0f385c`
- Radius: 1px
- Padding: 2px 8px 3px
- Font: 19px / 400 / GDS Transport
- Token-set font record: `19px / 400 GDS Transport`
- Token-set use: `Status tag — Completed, In progress, Not started`
- Use: Task list status labels — "Completed", "In progress", "Cannot start yet"
- The system includes 12 semantic tag colour variants including grey, blue, green, turquoise, purple, pink, red, orange, yellow, brown, red-strong. All share the same geometry (1px radius, 2px 8px 3px padding, 19px/400). Hex values for those twelve variants are not in the source and are omitted.

### Notification Banner

- Role: top-of-page announcement (informational / success)
- Primitive type: `toast` · Kind: interactive — the success variant is dismissible
- Informational: Background `#1d70b8`, Text `#ffffff`, Border `5px solid #1d70b8` (all sides), Radius 0px
- Success: Background `#0f7a52`, Text `#ffffff`, Border `5px solid #0f7a52`, Radius 0px
- Token-set use: `Top-of-page notification banner (informational / success)`
- Use (informational): Announcements, important notifications at top of page. Header "Important".
- Use (success): Confirmation messages — "Your details have been saved"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared informational and success treatments above |
| hover | applicable | Pointer-web dismissible banner; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable dismiss control; no treatment carried |
| disabled | not-applicable | A published announcement is not gated — the meaning of a disabled state is absent from the role, not merely unrecorded |
| loading | not-applicable | The banner reports a page-level outcome; it commits no operation of its own, so there is no in-progress state on the banner |
| error | not-applicable | Same role: a failure would belong to the action that produced the announcement, not to the banner |
| success | not-applicable | Success is a colour variant of the banner, not a completion state of the banner as a control |

### Inset Text

- Role: supplementary important content — callouts, warnings, supplementary guidance
- Primitive type: `card`
- Text: `#0b0c0c`
- Background: `transparent`
- Border: 10px solid `#cecece` (left border only)
- Token-set border record: `10px solid #cecece`
- Radius: 0px
- Padding: 15px
- Token-set use: `Inset text panel for important supplementary information`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Cookie Banner

- Role: cookie consent action buttons (green)
- Primitive type: `dialog` · Kind: interactive
- Background: `#0f7a52`
- Text: `#ffffff`
- Radius: 0px
- Padding: 8px 10px 7px
- Token-set use: `Cookie consent action buttons (green)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | A consent action can be gated; treatment omitted |
| loading | applicable | Accepting or rejecting cookies is a commit that can be pending; the signature-motion record puts a 300ms dismiss on the banner after the preference is saved |
| error | applicable | A committed consent action can fail; treatment omitted |
| success | applicable | A committed consent action can complete; the signature-motion record then dismisses the banner |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Spacing on these surfaces uses the scale above: 5px, 10px, 15px, 20px, 30px, 40px, 60px, 80px. Max content width: 960px (`govuk-width-container`). Two-thirds/one-third split for content with side navigation. Mobile-first with breakpoints at 40em (640px) mobile-medium, 48em (768px) tablet, 64em (1024px) desktop. Gutters: 15px on mobile, 30px on desktop.

Whitespace as the source states it: function over decoration — white space is sized to aid reading comprehension, not to suggest premium positioning; consistent vertical rhythm — headings follow a predictable 25px / 20px / 15px bottom-margin hierarchy; no hero padding games — the GOV.UK homepage header uses the blue header band with generous vertical padding as the only visual weight, and below that content is flush and document-like; document density — unlike consumer products, GOV.UK services aim for moderate text density — users are reading to complete tasks, not browsing aesthetically. Reading that whitespace policy as document density rather than premium positioning is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation. The measurements themselves are recorded values.

The breakpoint table below is the source's stated contract.

| Name | Min-width | Key Changes |
|---|---|---|
| Mobile | < 40em / 640px | Base layout, stacked columns, full-width components |
| Tablet | 48em / 768px | Two-column layouts, sidebar navigation appears |
| Desktop | 64em / 1024px | Full max-width container (960px), horizontal navigation |

The source records a Tier 1 live inspect of the two surfaces and no measurement at any of these widths, so the table is declared behavior rather than an observation of it. Reading that table as declared behavior rather than a live-width observation is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

Touch targets as the source states them: buttons minimum 44px height (38px rendered + generous padding); form inputs 40px height minimum; clickable area for links — generous padding added to ensure WCAG 2.5.5 Target Size; touch targets for checkboxes and radio buttons — full label is clickable.

Collapsing strategy as the source states it: navigation — horizontal desktop nav collapses to hamburger/accordion on mobile; two-thirds/one-third layouts collapse to single column; typography scale reduces at mobile (e.g. heading-xl: 48px → 32px on mobile); the GOV.UK header band maintains consistent presence at all widths.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Locale: English (en-GB) for UK government services. The GDS content design principle, as the source quotes it, is "writing for the web as people actually read it" — users scan, not read, and government services carry high-stakes consequences (tax filings, benefits claims, immigration status). Every word must justify its presence. The system bans jargon, Latin phrases, and anything that might obscure meaning for a person with low literacy, limited English, or a cognitive disability. The voice characterization — institutional clarity: plain English, active voice, short sentences, and directness without warmth — and the glosses "users scan, not read" and "Every word must justify its presence" are a derived editorial implementation inference from the verified surfaces; they are not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation. The quoted GDS principle and the banned categories are the source's own.

Published strings the source records, carried verbatim:

- Homepage H1: "The best place to find government services"
- Wordmark: "GOV.UK"
- Service headings: "Check your State Pension", "Apply for Universal Credit", "Check your eligibility"
- Button labels: "Start now", "Continue", "Save and continue", "Confirm and send", "Find address", "Add another", "Delete account"
- Status tags: "Completed", "In progress", "Not started", "Cannot start yet"
- Helper text: "For example, 27 3 2007"
- Notification: "Your details have been saved", "Your appeal has been submitted", "Success", "Important"
- Empty search: "There are no results matching your search"
- Loading: "Loading…"
- Error summary: "There is a problem — [N] errors."
- Field required: "Enter your [field name]" — never "This field is required"
- Field format: "Enter [field name] in the correct format, for example [example]"
- Service unavailable H1: "Sorry, the service is unavailable"
- Confirmation: "Application submitted"
- Error example the source contrasts: "Enter your date of birth" not "Invalid date"
- Founding brief: "so simple, clear, and fast"
- Mike Bracken: "the single online shop window for government"

| Context | Tone |
|---|---|
| Service headings | Declarative, task-focused: "Check your State Pension", "Apply for Universal Credit" |
| Button labels | Active verb + optional object: "Start now", "Continue", "Save and continue", "Confirm and send" |
| Error messages | Specific and actionable: "Enter your date of birth" not "Invalid date" |
| Helper text | Prescriptive format guidance: "For example, 27 3 2007" |
| Notification banners | Factual, present tense: "Your appeal has been submitted" |
| Status tags | Past participle or noun: "Completed", "In progress", "Cannot start yet" |
| Guidance pages | Plain English, active voice, no Latin, no jargon, short sentences |

**Forbidden patterns:** "Please" (condescending in a service context), "Click here" (non-descriptive), "Submit" (command form; "Send" or "Confirm" preferred), jargon and acronyms without expansion, passive voice ("is required" → "you must"), stacked nouns ("government digital transformation programme dashboard").

Reading the register table and the forbidden-pattern rule as the voice contract for the captured surfaces is a derived editorial implementation inference from the verified surfaces; it is not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

The published GOV.UK Design System at `https://design-system.service.gov.uk` is a first-party issued specification; this file reconstructs only the values the source recorded from that specification and from the live homepage.

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

- exact curve values for `ease-enter`, `ease-exit`, and `ease-standard`
- computed transition, animation, duration, and easing samples for any declared motion token
- per-control keyboard-focus treatment; the source's button and input records state a `#ffdd00` 3px outline as a generic focus observation only
- hover treatment for secondary, warning, start-now, select, notification-banner, and cookie-banner controls
- hex values for the twelve named tag colour variants (grey, blue, green, turquoise, purple, pink, red, orange, yellow, brown, red-strong)
- cookie-banner chrome beyond the recorded green action-button tokens
- skeleton-bar geometry for dynamically loaded content
- control-level disabled, loading, error, and success treatment wherever those states are applicable above and the surface contract does not already supply a value
- the interaction behaviour, if any, of the inset-text container
