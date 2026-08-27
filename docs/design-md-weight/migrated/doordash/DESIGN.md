# DoorDash Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The surface-scope boundary, the evidence-class split, and the causal readings in this Scope are derived editorial implementation inferences from the recorded sources; they are not DoorDash-authored or a separately published UI specification.

DoorDash is a US local-commerce delivery platform. This contract reconstructs two first-party surfaces that were read live on 2026-06-22 with `getComputedStyle`: the consumer marketing homepage `www.doordash.com` — its hero, navigation, CTAs and feature sections — and the about/products site `about.doordash.com/en-us`. Those two readings are the only measured evidence in this document. The layout, responsive, state and motion contracts below are design rules written in the source rather than measured on a surface, and each carries that boundary where it appears.

The captured interface layer is narrow: a `#ffffff` canvas, near-black `#191919` text used across nav, headings, body copy and secondary buttons, and one saturated red (`#eb1700`, `rgb(235, 23, 0)`) that the source records on every primary CTA it observed — "Find restaurants", "Get DashPass", "Sign In", "Shop Groceries", "Become a Dasher". Geometry is pill-dominant: every observed button is `9999px`, while the address search field sits at `0px`. Type runs two tiers — `TTNormsProCond-Blk` at weight 900 for the hero banner, and `DD Norms` (DoorDash's custom cut of TT Norms Pro, aliased `DD-TTNorms` / `TT-Norms`) for everything functional. Reading the red as "the only color with real weight", the condensed display face as "engineered speed", and the sharp input corners as an intentional contrast against the oval CTAs are the source's own editorial readings of those observations rather than DoorDash statements of design intent.

DoorDash was founded in 2013 by Tony Xu (CEO), Stanley Tang, Andy Fang and Evan Moore — four Stanford students who started by delivering from Palo Alto restaurants that didn't have delivery. The source records the founding insight as local commerce rather than food, and quotes the stated mission as *"to grow and empower local economies"*. It records the growth into the largest food delivery platform in the United States, DashPass as the subscription layer that converts transactional delivery into a recurring relationship, and expansion from restaurants into grocery, convenience, retail, beauty and alcohol. The "Door to More" positioning is live on the about site, whose H1 reads "Your Door to More". The source ledger marks the founding and narrative facts as widely documented public record — the DoorDash S-1, Wikipedia and public press interviews — and marks the platform-ambition reading of "Door to More" as its own interpretation. What the source says the brand refuses in its design is carried in Avoid below.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These three task formulations are derived editorial implementation inferences from the CTA labels and the input role observed on the two captured surfaces; they are not DoorDash-authored or a separately published UI specification.

- Give the homepage a delivery address — typed into the address field behind the placeholder "Enter delivery address", or supplied through "Use current location" or "Sign in for saved address".
- Enter restaurant or grocery discovery from the homepage through "Find restaurants" or "Shop Groceries".
- Take up one of the platform's two standing offers from the same homepage: "Get DashPass" for the subscription, "Become a Dasher" to deliver.

<!-- design-md:claim-end -->

### Audience

Grouping the audience this way, and the decision about the legacy persona section, are derived editorial implementation inferences from the recorded sources; they are not DoorDash-authored or a separately published UI specification.

Use group-level scope only: people ordering restaurant food and groceries for delivery, the Dashers the homepage recruits through "Become a Dasher", and the merchants the source's own voice table places on partnership surfaces. The legacy persona section is disclosed in its own source as fictional archetypes informed by publicly observable segments; those biographies are dropped, and no name, age, city or segment profile from them is carried into this document or its provenance.

### Distinctive traits

Selecting and naming the following traits as distinctive is a derived editorial implementation inference from the recorded sources; it is not DoorDash-authored or a separately published UI specification.

- `TTNormsProCond-Blk` (condensed black weight 900) for hero banner headlines — speed, urgency, bold identity
- `DD Norms` (DoorDash's custom TT Norms) for all section/body/UI text at weights 400–800
- Single saturated red (`#eb1700`) as the only interactive color — every CTA, one color
- Near-black `#191919` for all text instead of pure black — slightly warm, consumer-grade
- Pill geometry (`9999px` radius) on all primary and secondary buttons
- White-dominant surface; red provides all contrast for action
- Minimal shadow: soft `rgba(25,25,25,0.2)` ring on ghost buttons; no elevation on red buttons

### Derived implementation principles

These twelve items are derived editorial implementation inferences from the verified surfaces and the source's own rule lists; they are not DoorDash-authored or a separately published UI specification.

- **One color, one action.** `#eb1700` red appears on every interactive element and nowhere decorative. *UI implication:* if a user sees red, it's clickable. If it's not red, it informs rather than invites.
- **Speed of understanding.** The system is designed for a shopper who arrived with hunger, not curiosity. *UI implication:* every section leads with a benefit claim, ends with a single CTA, and eliminates competing decisions.
- **Pill = trust.** The full-oval button is DoorDash's most recognizable design signature. *UI implication:* never use a non-pill button shape anywhere the brand CTA appears — the shape is a recognition signal.
- **Display as urgency.** The condensed black display font reads fast because it's engineered for compression. *UI implication:* hero banner headlines should feel like a sign you read at speed, not text you settle in to parse.
- **Local scale, national presence.** The brand must feel equally at home in a Midwestern suburb and a Manhattan high-rise. *UI implication:* warm near-black text (`#191919`), white-dominant surfaces, and consumer-grade type sizes — no elitist minimalism, no intimidating enterprise density.
- Use `#eb1700` red for every primary CTA — one color means no ambiguity.
- Apply `9999px` radius to all buttons — the pill shape IS the DoorDash interactive language.
- Use `DD Norms` (TT-Norms) for all UI, nav, and body text.
- Reserve `TTNormsProCond-Blk` (weight 900) for hero banner moments only.
- Use `#191919` near-black for all text instead of pure `#000000`.
- Segment sections with flat `#f6f6f6` backgrounds, not shadows or borders.
- Keep each section to a single pill CTA — no stacked or competing buttons.

### Avoid

The following avoidances are derived editorial implementation inferences from the source's Don't rules and its stated refusals; they are not DoorDash-authored or a separately published UI specification.

- Don't use red on non-interactive elements — it must remain the sole action signal.
- Don't use non-pill button shapes (squares, rounded-md) — DoorDash is full-pill only.
- Don't use pure black (`#000000`) for body text — always `#191919`.
- Don't add drop shadows to red buttons — color does the work, shadow is unnecessary.
- Don't introduce secondary accent colors — the system is deliberately monochromatic except for red.
- Don't mix `TTNormsProCond-Blk` into body or nav text — condensed black belongs only in hero banners.
- Don't use small font sizes — minimum is 16px; DoorDash is mass-market, not data-dense.
- Do not reach for the intimidating chrome of logistics enterprise software, the playful density of Uber Eats' pop-art aesthetic, or the muted minimalism of premium grocery brands. The source states these three refusals as its reading of the brand's design posture.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Evidence class of the color record

Every color value below comes from one class: the live computed reading of the homepage and the about site on 2026-06-22. The source's two secondary-source lookups returned no DoorDash record, so that class stands alone; the lookup record stays with the source record. Naming the class boundary this way is a derived editorial implementation inference; it is not DoorDash-authored or a separately published UI specification.

### Semantic color

The hex values and token names below come from the live computed reading and the source's own token record. The character readings attached to them — the red as "the defining brand color", an "orange-leaning red" that "reads energetic and accessible at large sizes", and the near-black read as warmer and more consumer-grade than pure black — are derived editorial implementation inferences from the recorded sources; they are not DoorDash-authored or a separately published UI specification.

**Primary**

- **DoorDash Red** (`#eb1700`, token `primary`): the defining brand color. Applied to every primary CTA button, anchor link acting as CTA, and promotional accents. `rgb(235, 23, 0)` live-measured from the DOM — an orange-leaning red that reads energetic and accessible at large sizes.
- **Pure White** (`#ffffff`, tokens `canvas` and `on-primary`): page canvas, card surfaces, secondary button background, text on red.
- **Ink Near-Black** (`#191919`, token `ink`): `rgb(25, 25, 25)` — primary body text, secondary button text, nav links. Slightly warmer than `#000000`, used pervasively on the consumer surface.

**Neutral and surface**

- **Pure Black** (`#000000`, token `ink-pure`): occasional maximum-contrast context, hero label text.
- **Muted Grey** (`#767676`, token `muted`): placeholder, disabled, secondary metadata text.
- **Surface Light** (`#f6f6f6`, token `surface`): subtle tinted sections.
- **Hairline** (`#cccccc`, token `hairline`): carousel dot indicators, dividers.

**Interactive and state**

- **DoorDash Red** (`#eb1700`): primary interactive color — no secondary accent hue.
- **On-Primary** (`#ffffff`): text and icons on red backgrounds.
- **Error** (`#eb1700`, token `error`): the source's token record maps the error role onto the same brand red rather than a separate status hue. The state contract in Components & States describes a red accent on the error state border without naming a value.

### Spacing

Base unit 8px. Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px. The source names these steps `xs` 4, `sm` 8, `md` 12, `base` 16, `lg` 24, `xl` 32, `xxl` 48 and `section` 64. It also records that the hero area gives generous vertical breathing room and that section dividers use alternating white / light-grey (`#f6f6f6`) backgrounds rather than explicit spacing tokens.

### Shape

The radius values and their component assignments below come from the source's radius token record and its own scale note. The causal reading carried in the Use column — the sharp 0px input corners read as the search box anchoring the UI — is the source's own reading and is a derived editorial implementation inference; it is not DoorDash-authored or a separately published UI specification.

| Step | Value | Use |
|---|---|---|
| Sharp | 0px | Input fields — the search box anchors the UI; tinted surface sections |
| Small | 4px | `rounded.sm` step |
| Standard | 8px | Content cards |
| Large | 16px | `rounded.lg` step |
| Full | 9999px | All CTA buttons, nav CTAs, badge pills, ghost buttons |
| Circle | 50% | Carousel dot indicator |

The `sm` 4px and `lg` 16px steps exist in the source's radius token record; the body assigns them no component, so none is assigned here.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, red buttons, most cards |
| Soft Lift (Level 1) | `rgba(25,25,25,0.2) 0px 2px 8px 0px` | Ghost pill buttons floating on white |
| Ring (Accessibility) | `rgba(25,25,25,0) 0px 0px 0px 1px inset` | Implicit inset ring on all buttons |

The following shadow reading is a derived editorial implementation inference from the recorded sources; it is not DoorDash-authored or a separately published UI specification. DoorDash relies almost entirely on color contrast (`#eb1700` red) for visual hierarchy rather than elevation. The primary buttons cast no shadow — the red is loud enough. Ghost buttons on white surfaces get a soft 2px ambient shadow to distinguish them from the flat background without competing with the red CTA. This is a consumer-facing system that prioritizes clarity over sophistication.

The `ring` token's alpha is zero (`rgba(25,25,25,0)`), and the source calls it an implicit inset ring on all buttons. Reading it as a resting-state shadow slot rather than as a focus treatment is a derived editorial implementation inference; it is not DoorDash-authored or a separately published UI specification. It is a different evidence class from a `focus-visible` treatment and is not promoted into one.

### Motion

The whole motion contract below is a derived editorial implementation inference from the recorded sources; it is not DoorDash-authored or a separately published UI specification. The source ledger attributes its color, type and component values to the two live readings and attributes nothing at all to motion.

**Durations**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection ticks, focus ring state commit |
| `motion-fast` | 120ms | Button hover, CTA press feedback |
| `motion-standard` | 200ms | Sheet, dropdown, address autocomplete list |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easing roles**

Three named roles exist. Their exact curve values are unresolved here and stay absent: the source attributes no curve to DoorDash, and one of the three — the `ease-exit` value — is identical to a generic authoring-template default rather than to anything read on a DoorDash surface. Reading it as a carried-over default rather than a measured DoorDash token is a derived editorial implementation inference; it is not DoorDash-authored or a separately published UI specification. The three exact strings are kept with the source record.

- `ease-enter` — arriving: sheets, suggestion lists, nav dropdowns
- `ease-exit` — dismissals
- `ease-standard` — two-way transitions

**Motion rules**

Motion is functional and unobtrusive — matching the app's "get in, order fast, get out" promise. The red button responds to hover with a subtle background shift (`ease-standard`, `motion-fast`); the address autocomplete drops in at `motion-standard / ease-enter`. No spring, no overshoot — a delivery app signals reliability, not playfulness. Carousel slide transitions use `motion-standard` with a horizontal slide; dot indicators update instantly.

**Reduced motion**

Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; the product remains fully functional without animation.

**Promotion rule.** The following gate is a derived editorial implementation inference from the evidence boundary; it is not DoorDash-authored or a separately published UI specification. A motion value may be promoted to a DoorDash token only after component-specific computed observation establishes all five evidence kinds for that component — transition properties, animation name, duration, easing, and reduced-motion behavior. A single confirmed curve does not satisfy this gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

Grouping the type record by evidence class below, and the boundary each class draws, are derived editorial implementation inferences from the recorded sources; they are not DoorDash-authored or a separately published UI specification. The classes are distinct and one does not vouch for another.

| Evidence class | Resolution |
|---|---|
| Official product-use | The source ledger holds no published DoorDash typography specification. Every family and metric below comes from the live computed reading of the two surfaces. |
| Live computed surface-use | The homepage computes its body font as the `DD-TTNorms` / `TT-Norms` / `DD Norms` family; the about site computes `TT-Norms, DD-TTNorms` with color `rgb(25, 25, 25)` on `rgb(255, 255, 255)`. The homepage hero H1 "$0 DELIVERY FEE ON FIRST ORDER" computes as `TTNormsProCond-Blk` 40px / weight 900 / `#ffffff`; the about-site H1 "Your Door to More" computes as 40px / weight 700 / `rgb(25, 25, 25)`. |
| Custom cut | `DD Norms` is recorded as DoorDash's custom cut of TT Norms Pro, aliased `DD-TTNorms` and `TT-Norms`. |
| Display face | `TTNormsProCond-Blk` — the condensed black variant, observed only on the hero banner headline. |
| Fallback stack | `-apple-system`, `"system-ui"`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`, sans-serif. This is a platform fallback stack, not the DoorDash brand face, and it must not be presented as one. |
| Official distributed asset and license | No distributed DoorDash type package and no license grant for `DD Norms`, `TT Norms Pro` or `TTNormsProCond-Blk` is recorded, so none is claimed. |

### Family

The character reading attached to the display family below ("On-demand boldness") is a derived editorial implementation inference from the recorded sources; it is not DoorDash-authored or a separately published UI specification.

- **Display:** `TTNormsProCond-Blk` — condensed black variant, used for hero banner headlines at weight 900. On-demand boldness.
- **Body / UI:** `DD Norms` (aliased as `DD-TTNorms` / `TT-Norms`) — DoorDash's custom cut of TT Norms Pro. Used for all sections, nav, buttons, inputs, and body copy.
- Do not substitute the fallback stack, or any other family, for `DD Norms` or `TTNormsProCond-Blk` when they are unavailable; omit the treatment instead. This restriction applies the unknown-absence rule in Governance and is a derived editorial implementation inference; it is not DoorDash-authored or a separately published UI specification.

### Type roles

The metrics below are element-level live computed readings. The effect reading carried in the Notes column — the condensed black read as maximum impact — is the source's own reading and is a derived editorial implementation inference; it is not DoorDash-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Notes |
|---|---|---:|---:|---:|---:|---|
| Hero Banner | TTNormsProCond-Blk | 40px | 900 | 1.0 | -0.5 | Condensed black for maximum impact; observed in `#ffffff` |
| Section H2 | DD Norms | 40px | 800 | 1.0 | — | "Everything you crave, delivered." |
| Subsection H2 | DD Norms | 32px | 800 | 1.2 | — | "Become a Dasher", "DashPass is delivery for less" |
| Feature Body | DD Norms | 18px | 500 | 1.4 | — | Feature sub-headlines, DD Norms Medium |
| Nav / Button | DD Norms / TT-Norms | 16–18px | 400–500 | 1.15 | — | Navigation links, CTA labels; the 18px / 500 nav step is the about-site nav |
| Body | DD Norms | 16px | 400 | 1.15 | — | Standard reading text |
| Input | DD Norms | 16px | 500 | 1.15 | — | Address search input |

The Hero Banner row's `#ffffff` is an element-level reading of the headline itself; its background sits in a different evidence class. The background appears in the source's example-prompt block, which places the headline on "a red background image" (*legacy prompt-block guidance*), and in the source's promo-state row, which describes the pattern as white "on red or image background" — the two are recorded separately here rather than merged into the reading, and the prompt block's single option is not treated as resolving the state row's two.

The about-site H1 computes at 40px / weight 700, a weight the role table does not otherwise carry; it is recorded here rather than folded into the 800 section role.

### Typography rules

These four readings are derived editorial implementation inferences from the recorded sources; they are not DoorDash-authored or a separately published UI specification.

- **Two-tier type family:** Condensed Black for display moments (`TTNormsProCond-Blk`), custom-cut `DD Norms` for everything functional. Never swapped.
- **Weight as hierarchy:** 900 (hero) → 800 (sections) → 500 (feature callouts) → 400 (body/nav). Predictable, structured.
- **No positive letter-spacing:** display sizes use neutral or slightly negative tracking to maintain the compressed, energetic feel.
- **Consumer-friendly sizing:** body text sits at 16px with no miniaturized captions — this is a mass-market delivery app, not a productivity tool.

### Assets

The asset-authority boundaries below are derived editorial implementation inferences from the recorded sources; they are not DoorDash-authored or a separately published UI specification.

- **Logo.** The source's own logo record points at the SimpleIcons slug `doordash`. No distributed DoorDash brand-asset package and no license grant is recorded, so none is claimed.
- **Photography.** The source describes a white-dominant surface that lets the food photography and the red buttons do the work. Food and category imagery is first-party catalog content; do not replace it with invented brand-color decoration.

<!-- design-md:section components-states -->
## 4. Components & States

### Evidence boundary

The applicability judgments, the interaction-kind judgments, and the decision to hold a recorded treatment out of a state row in this section are derived editorial implementation inferences from each control's product role and from the capture boundary; they are not DoorDash-authored or a separately published UI specification.

The component geometry, color and type values below were read live on the homepage and the about site. Applicability follows control meaning, not record completeness: `default` and `focus-visible` apply to every interactive control, a state that is meaningful for the control stays applicable with its visual treatment absent when the source records none, and `not-applicable` is used only where the control's own role carries no such state. State coverage is not claimed complete. Values marked *legacy prompt-block guidance* appeared only inside the source's example-prompt block; they are retained as source guidance rather than as separately measured readings. The character and intent readings carried in the `Use:` lines below — for example the sharp input corners read as an intentional contrast with the pill buttons, and the white pill read as carrying equal visual weight at a glance — are the source's own readings and are derived editorial implementation inferences; they are not DoorDash-authored or a separately published UI specification.

### Primary Red CTA (Full Pill)

- Primitive type: button; Kind: interactive
- Background `#eb1700`; text `#ffffff`; radius 9999px; height 40px; font 16px / 400 DD Norms
- Shadow: `rgba(25, 25, 25, 0) 0px 0px 0px 1px inset`
- Source-recorded hover: "hover darker red" — a direction without a value; the exact hover color is unresolved and stays absent
- Use: all primary CTAs — "Find restaurants", "Get DashPass", "Sign In", "Shop Groceries", "Become a Dasher"
- Legacy prompt-block guidance: one red pill CTA per feature section, right-aligned
- The source's collapsing strategy keeps this CTA full-width on mobile; see Layout & Platforms

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live-read on the homepage |
| hover | applicable | Pointer-web button; the source records the direction only, so no value is promoted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | The source's state contract records the disabled red at `rgba(235,23,0,0.4)` |
| loading | applicable | This record covers "Get DashPass" and "Sign In", which submit and wait; visual treatment omitted |
| error | applicable | The source's state contract includes a payment-failed recovery for the same submissions |
| success | applicable | The source's state contract includes order-placed and DashPass-subscribed confirmations |

### Secondary White Pill

- Primitive type: button; Kind: interactive
- Background `#ffffff`; text `#191919`; radius 9999px; height 40px; font 16px / 400 DD Norms
- Shadow: `rgba(25, 25, 25, 0) 0px 0px 0px 1px inset`
- Use: "Sign Up" — equal visual weight at a glance, distinguished from primary by white fill

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live-read on the homepage |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | The account-creation entry can be unavailable; visual treatment omitted |
| loading | not-applicable | This control opens the sign-up surface; the destination carries the submission progress |
| error | not-applicable | The control itself submits nothing that can fail validation |
| success | not-applicable | Opening the sign-up surface presents no completion feedback |

### Ghost Soft Pill (Small)

- Primitive type: button; Kind: interactive
- Background `#ffffff`; text `#191919`; radius 9999px; height 32px; font 16px / 400 DD Norms
- Shadow: `rgba(25, 25, 25, 0) 0px 0px 0px 1px inset, rgba(25, 25, 25, 0.2) 0px 2px 8px 0px`
- Use: contextual inline actions — "Sign in for saved address", "Use current location" — floating over white

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live-read on the homepage |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | A saved address or a current-location result can be unavailable; visual treatment omitted |
| loading | applicable | "Use current location" resolves a location before the address field can fill; visual treatment omitted |
| error | applicable | The same resolution can come back without a usable address; visual treatment omitted |
| success | not-applicable | The resolved address appearing in the address field is the outcome; the control shows no separate confirmation |

### Address Search Input

- Primitive type: input; Kind: interactive
- Background `#ffffff`; text `#191919`; radius 0px; font 16px / 500 DD Norms
- Placeholder: "Enter delivery address" (muted text)
- Use: primary address / delivery location search field — sharp corners contrast intentionally with pill buttons

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live-read on the homepage |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive input; the resting inset `ring` shadow is a different evidence class, so no treatment is promoted here |
| disabled | applicable | The address field can be unavailable; visual treatment omitted |
| loading | applicable | The source assigns `motion-standard` to the address autocomplete list, so the field has a pending phase |
| error | applicable | The source's state contract records the inline unrecognized-address error and its red border |
| success | not-applicable | The field answers with results or with the no-results screen state rather than a field-level completion state |

### Content Card

- Primitive type: card
- Background `#ffffff`; text `#191919`; radius 8px
- Use: feature content cards, product category tiles
- Interaction kind and applicability map omitted. The source establishes no control role for the card itself, and the pill CTA that ends each feature section is its own record.

### Tinted Surface Section

- Background `#f6f6f6`; radius 0px
- Kind: non-interactive; reason: it is a full-width background band that segments page content and carries no action of its own
- Use: alternating section backgrounds to segment page content

### Promo Red Pill Badge

- Primitive type: badge; Kind: non-interactive; reason: it labels an offer and carries no action
- Background `#eb1700`; text `#ffffff`; radius 9999px; font 12px / 400 DD Norms
- Use: promotional labels, offer badges

### About-site Top Nav Item

- Primitive type: tab; Kind: interactive
- Background `#ffffff`; text `#191919`; font 18px / 500 TT-Norms; padding 8px 0px; height ~38px
- Source-recorded active treatment: `#191919` underline accent
- Use: horizontal about-site navigation on `about.doordash.com` — "Products", "Company", "Impact", "News", "Blog"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live-read on the about site |
| hover | applicable | Pointer-web nav item; visual treatment omitted |
| focus-visible | applicable | Interactive nav item; visual treatment omitted |
| disabled | applicable | A navigation destination can be unavailable; visual treatment omitted |
| loading | not-applicable | The destination section carries its own loading; the nav item shows no progress |
| error | not-applicable | Switching sections submits nothing that can fail |
| success | not-applicable | Arriving at the destination is the outcome; the item shows no completion state |

### About-site Top Nav CTA

- Kind: interactive. The source declares no primitive type for this record; it describes it as the about-site nav CTA and gives it the same pill geometry as the primary button.
- Background `#eb1700`; text `#ffffff`; radius 9999px; padding 0px 6px; height 40px; font 16px / 400 TT-Norms
- Use: "Get Started" nav CTA on `about.doordash.com`
- Legacy prompt-block guidance: right-aligned in a white 48px header

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live-read on the about site |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | The entry point can be unavailable; visual treatment omitted |
| loading | not-applicable | This control opens the get-started surface; the destination carries the submission progress |
| error | not-applicable | The control itself submits nothing that can fail validation |
| success | not-applicable | Opening the destination surface presents no completion feedback |

### Carousel Dot Indicator

- Primitive type: toggle; Kind: interactive
- Background `#cccccc`; radius 50%; height 32px
- Use: carousel prev/next slide control dot on the about site

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live-read on the about site |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A prev/next dot can be unavailable at the ends of the carousel; visual treatment omitted |
| loading | not-applicable | The source records that dot indicators update instantly, so the control resolves without a pending phase |
| error | not-applicable | Moving between slides submits nothing that can fail |
| success | not-applicable | The committed slide is the feedback; no separate success state exists |

### Source state contract

The rows below are the source's own state treatments, retained as recorded. They are design recipes written in the source rather than treatments measured on the two read surfaces — the ordering, tracking, payment and DashPass screens they describe sit outside those two readings. Treating them as source guidance rather than as measured proof is a derived editorial implementation inference from the capture boundary; it is not DoorDash-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no results for address)** | White canvas. Ink Near-Black (`#191919`) single explanatory line. One red pill CTA to try a different address or browse featured restaurants. No illustration — the message is functional. |
| **Empty (DashPass, no saved restaurants)** | Brief prompt to order from a restaurant to build a history. Tone is warm encouragement, not system error. One red CTA: "Find restaurants". |
| **Loading (restaurant feed)** | Skeleton cards at exact final card dimensions with `#f6f6f6` tinted blocks. No shimmer animation by default on marketing surface. Feed appears in place. |
| **Loading (order tracking)** | Live map view with progress indicator. Red accent on the delivery progress bar / Dasher icon. Previous state data stays visible during refresh. |
| **Error (delivery address unrecognized)** | Inline below the address input field. Plain English explanation: "We couldn't find that address. Check the spelling or try a nearby address." Red accent on the error state border. |
| **Error (payment failed)** | Modal / inline error. States the decline reason if available and offers a direct path to update payment method. Not a generic "something went wrong." |
| **Success (order placed)** | Confirmation screen: red checkmark, order summary, estimated delivery time prominently displayed. Tone is celebratory but brief — the transaction is done, now the countdown begins. |
| **Success (DashPass subscribed)** | Brief confirmation with immediate value restatement: "$0 delivery fees on your next order." Transitions directly to the restaurant feed. |
| **Skeleton** | `#f6f6f6` blocks at final dimensions matching the restaurant/product card grid. Clean and quiet — no pulsing animation that suggests technical problems. |
| **Disabled** | Red buttons fade to a lower-opacity red (`rgba(235,23,0,0.4)`) rather than switching to grey — preserves the brand read. Ink text drops to `#767676` muted for disabled labels. |
| **Promo / Offer state** | Uppercase, number-forward: "$0 DELIVERY FEE" — reads like a sign, not a tooltip. Applied via the hero banner pattern; TTNormsProCond-Blk weight 900 in white on red or image background. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Grid and container

- Centered single-column hero with the address search widget below the headline.
- Full-width alternating content bands: white → tinted (`#f6f6f6`) → white.
- Feature sections: 2-column side-by-side (image + headline/CTA pairs) at desktop widths.
- Maximum content width approximately 1200px; hero text left-aligned with image right.
- Legacy prompt-block guidance: the about-site nav sits in a white 48px header with the red CTA right-aligned, and a feature section places its single red pill CTA right-aligned.

The grid, band and container figures above are design rules recorded in the source rather than measurements taken on the two read surfaces; the record holds no layout-level measurement behind them. Reading them as intended structure rather than as verified proof is a derived editorial implementation inference from the capture boundary; it is not DoorDash-authored or a separately published UI specification.

### Breakpoints

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column, hero stacks, address input full-width, navigation collapses |
| Tablet | 640-1024px | 2-up content cards, moderate padding |
| Desktop | 1024-1280px | Full layout, 2-column feature sections, hero image visible |
| Large Desktop | >1280px | Centered content, generous horizontal margin |

### Touch targets

- All primary pill buttons at 40px height — comfortable thumb tap.
- Ghost small buttons at 32px — adequate for touch with `8px` soft lift.
- Nav links spaced for tap on mobile.

### Collapsing strategy

- Hero: headline + address input → stacked, full-width on mobile.
- Feature sections: 2-column image+text → single-column stacked.
- Nav: horizontal links → hamburger or icon menu on mobile.
- Background bands: maintain full-width at all breakpoints.
- Red CTA: always full-width on mobile — too important to be inline.

### Whitespace

These three readings are derived editorial implementation inferences from the recorded sources; they are not DoorDash-authored or a separately published UI specification.

- **Red as the only separator:** because the red CTAs are so saturated, no other design element needs to anchor the eye. Whitespace is generous, allowing the red buttons to float.
- **Section rhythm through background-color:** unlike systems using shadow cards, DoorDash uses flat background shifts (`#f6f6f6` tint) to segment content blocks.
- **Pill CTA isolation:** each section ends with one pill CTA — never stacked buttons, never competing actions.

The breakpoint, touch-target and collapsing figures above are source-recorded design rules. The record holds a desktop computed reading of two surfaces and no viewport-level measurement, so reading these figures as intended behaviour rather than as verified responsive proof is a derived editorial implementation inference from the capture boundary; it is not DoorDash-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The voice characterization below is a derived editorial implementation inference from the recorded sources; it is not DoorDash-authored or a separately published UI specification.

DoorDash's voice is **energetic, inclusive, and low-friction** — a consumer brand that wants to feel like your neighborhood made faster. Copy is direct and benefit-first: "Everything you crave, delivered" doesn't explain the mechanics, it names the outcome. "DashPass is delivery for less" is a claim, not a description. CTAs are action-word imperatives: "Find restaurants", "Get DashPass", "Become a Dasher", "Shop Groceries" — concrete, present-tense, one-click obvious.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, outcome-framed. "Everything you crave, delivered." Never instructional. |
| Section headings | Concise claim + audience ("Become a Dasher" — tells you exactly who it's for). |
| CTAs | Single-verb imperatives. "Find", "Get", "Shop", "Become". No "Let's", no "Start your journey". |
| Feature callouts | Benefit-first, jargon-free. "Make money and work on your schedule." |
| Merchant / driver surfaces | Partnership tone — growth-framed ("Attract new customers", "0% commission"). |
| Promotions / offers | Specific and punchy: "$0 DELIVERY FEE ON FIRST ORDER" — uppercase, number-forward. |
| App / product | Casual, fast. Matches the pace of food delivery itself. |

### Copy evidence classes

Keeping these two classes apart follows the source's own labelling; the class boundary as drawn here is a derived editorial implementation inference and is not DoorDash-authored or a separately published UI specification.

| Sample | Class |
|---|---|
| "$0 DELIVERY FEE ON FIRST ORDER" — hero banner headline (uppercase, promotion-forward) | Verbatim from the live homepage, verified live 2026-06-22 |
| "Everything you crave, delivered." — section heading (outcome-first, no brand jargon) | Verbatim from the live homepage, verified live 2026-06-22 |
| "DashPass is delivery for less" — section heading (product name, direct claim) | Verbatim from the live homepage, verified live 2026-06-22 |
| "As a delivery driver, make money and work on your schedule." — feature callout (benefit-first, inclusive) | Verbatim from the live homepage, verified live 2026-06-22 |
| "Your Door to More" — about site hero (wordplay, expansive brand claim) | Verbatim from the live about site, verified live 2026-06-22 |
| Every other string in this section, including the tone-table examples and the state-contract copy | Illustrative register rather than verified product microcopy |

**Forbidden register:** corporate mission-statement bloat ("We are transforming the way…"), technical jargon left unexplained, passive voice, slow preambles ("We're excited to share…"), and anything that delays the obvious next action.

**Locale.** Both readings are US English surfaces: the about site was read at its `/en-us` path, and the promotional copy uses US dollar amounts. That is the whole locale record, and no locale profile is claimed beyond that US English surface.

<!-- design-md:section governance -->
## 7. Governance

The governance judgments in this section are derived editorial implementation inferences of this reconstruction; they are not DoorDash-authored or a separately published UI specification.

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

- the exact hover treatment for the primary red CTA — the source records the direction "hover darker red" and no value
- exact curve values for `ease-enter`, `ease-exit` and `ease-standard`, and the component-level transition-property, animation-name, duration, easing and reduced-motion evidence that the promotion rule in Foundations requires
- visual treatments for the canonical states this document declares applicable and the source leaves without a value — `focus-visible` on every control, and hover, disabled, loading, error and success beyond the treatments named on each component
- a measured reading of the ordering, order-tracking, payment and DashPass screens the state contract describes, or of the merchant and driver surfaces the voice table names; the computed record covers the homepage and the about site
- viewport-level measurement behind the breakpoint, touch-target and collapsing figures
- the component assignment for the `sm` 4px and `lg` 16px radius steps, which exist in the token record without one
- second-source corroboration for the token set — both secondary-source lookups the source carried out came back without a DoorDash record
