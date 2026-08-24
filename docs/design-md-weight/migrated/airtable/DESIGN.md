# Airtable Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

This contract covers Airtable as named on airtable.com (`https://www.airtable.com`): the supplied reconstruction of marketing chrome and the product-UI patterns the source names — bases, tables, views, records, sync, formula fields, AI agent steps, and the cookie banner.

Airtable Trademark Guidelines (`https://www.airtable.com/company/trademark-guidelines`) are named in source as brand-usage guidance (`ds.type: brand`; description: Airtable's trademark usage and brand guidelines). Interface-token evidence from that document is unresolved in this packet.

Source token note: primary = Airtable Blue (`#1b61c9`); brand-amber (`#fcb400`) is catalog `primary_color` from frontmatter, not a CTA fill. The same note says color belongs to user data and chrome stays neutral. The “not a CTA fill” assignment and that color-belongs-to-data sentence are catalog commentary on this reconstruction — a derived editorial implementation inference; they are not Airtable-authored or a separately published UI specification.

Live DOM capture on `https://www.airtable.com` (playwright) listed round 50% icon buttons, ghost 12px controls, and a Sign up CTA. The following evidence-domain sentence is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification. Marketing chrome, named product patterns, trademark guidance, and third-party history remain separate evidence domains.

The next paragraph is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification. The source presents the marketing site as communicating “sophisticated simplicity” through a white canvas with deep navy text (`#181d26`) and Airtable Blue (`#1b61c9`) as the primary interactive accent, and it reads the Haas family plus positive letter-spacing as a Swiss-precision typography system.

Airtable was founded in 2012 in San Francisco by Howie Liu (CEO), Andrew Ofstad, and Emmett Nicholas, three engineers who met through Duke connections. Those founding facts, co-founder prior roles, the spreadsheet-versus-database thesis, stealth/beta/launch dates, pre-seed angels, and later funding figures in the source are third-party-corroborated (Wikipedia, Antler, Taskade, Tracxn, Golden); they are not Airtable-authored interface tokens. Howie Liu had previously co-founded Etacts (YC W2010, age 20), a Gmail relationship-management tool acquired by Salesforce on December 21, 2010; the question that became Airtable formed during his Salesforce PM stint on social CRM. Andrew Ofstad came from Google as PM on Android, leading the redesign of Google Maps. Emmett Nicholas was a Stack Overflow engineer for 3+ years. The source thesis: spreadsheets and databases occupied opposite ends of ease of use versus structural rigor — Airtable proposed a hybrid. Two years in stealth (2012–2014) → invite-only beta 2014 → public launch March 2015. Pre-seed angels included Ashton Kutcher, Michael Birch (Bebo), and Josh Reeves (Gusto). Series F Dec 13, 2021: $735M at $11B valuation; total raised $1.35B. The live homepage (2026-05) states the current line: *"Build enterprise-ready AI workflows, apps & agents"*. The source’s reading of a shift from collaborative database (2015–2020) to platform-with-AI-workflows (2024+) is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification.

The following refusal reading is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification. The source says Airtable refuses competing with Notion on docs and no-code-as-magic framing.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Create a base and add records (empty-state contract: “Create your first base”; inline “+ Add a record”).
- Connect or reconnect a synced source (sync loading chip; “Reconnect source” on sync failure).
- Build enterprise-ready AI workflows, apps, and agents (homepage 2026-05).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 names fictional archetypes informed by operations leaders and internal-tooling builders. Restricting Audience so those fictional archetypes are not Audience and are not primary tasks, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification.

### Distinctive traits

- White canvas `#ffffff` with Deep Navy `#181d26` text and Airtable Blue `#1b61c9` as CTA and link color
- Haas + Haas Groot Disp dual family, with positive letter-spacing on body and small text (`0.08px`–`0.28px`)
- 12px radius buttons, 16px standard cards, 24px–32px featured/section containers; cookie-consent 2px is local
- Blue-tinted multi-layer shadow including `rgba(45,127,249,0.28) 0px 1px 3px`
- Semantic `--theme_*` CSS variable naming (for example `--theme_success-text`, `--theme_text-weak`)

Treating the cookie-consent 2px radius as local to that banner, not a universal radius, is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification.

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Airtable-authored or a separately published UI specification.

1. **Records are the unit.** Bases > tables > views > records. *UI implication:* hierarchies stay flat.
2. **Views are personalized, data is shared.** *UI implication:* view chrome (filters, sort) at view level, never global.
3. **Spotlight surface signals “live work”.** `rgba(249,252,255,0.97)`. *UI implication:* canonical work surface = spotlight white.
4. **Color belongs to user data, not chrome.** *UI implication:* avoid bright accents for chrome; reserve for user categorization.
5. **AI workflows are first-class blocks.** *UI implication:* every AI step has visible config + output preview.

Capture-bound application: these token-role rules are a derived editorial implementation inference from the verified surfaces; they are not the numbered editorial list, and they are not Airtable-authored or a separately published UI specification.

- Use Airtable Blue (`#1b61c9`) only for CTAs and links, on a white (`#ffffff`) canvas with Deep Navy (`#181d26`) text.
- Set Haas / Haas Groot Disp with positive letter-spacing on body and small text (`0.08px`–`0.28px`).
- Apply the radius scale by component size: 12px buttons, 16px standard cards, 24px sections, 32px large containers.
- Lift primary buttons with the signature blue-tinted multi-layer shadow (`rgba(45,127,249,0.28) 0px 1px 3px`).
- Keep chrome neutral; use the spotlight surface (`rgba(249,252,255,0.97)`) plus `#e0e2e6` borders rather than flooding chrome with Airtable Blue or brand-amber `#fcb400`.
- Name theme variables with the semantic `--theme_*` convention (for example `--theme_success-text` for `#006400`).

### Avoid

The “Swiss-precision feel”, “depth comes from spotlight rather than heavy gray”, “color belongs to user data / not the UI frame”, and “deliberately sharp 2px” readings below are derived editorial implementation inferences from the verified surfaces; they are not Airtable-authored or a separately published UI specification.

- Do not skip the positive letter-spacing on body and caption text (`0.08px`–`0.28px`).
- Do not lean on heavy gray backgrounds or dark drop shadows for depth instead of the spotlight surface (`rgba(249,252,255,0.97)`) and the soft ambient `rgba(15,48,106,0.05) 0px 0px 20px` glow.
- Do not spread Airtable Blue (`#1b61c9`) across chrome or large backgrounds — color in this reconstruction is reserved for user data, not the UI frame. Do not substitute catalog `#fcb400` as a CTA or chrome fill.
- Do not use the deliberately sharp 2px radius outside its cookie-consent context, where buttons and cards use 12px and up.
- Do not add bouncy spring motion or exceed the 150–400ms timing tokens; under `prefers-reduced-motion: reduce`, drop the spotlight fade-in.
- Do not use forbidden voice like “revolutionary database”, “no-code magic”, or emoji in product chrome.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

YAML roles unless marked as body-only.

- **Airtable Blue / Primary** (`#1b61c9`): CTA buttons and links. Source token `primary`. Not catalog `primary_color`.
- **Brand-amber** (`#fcb400`): catalog `primary_color` from frontmatter. Not a CTA fill and not merged with Airtable Blue.
- **Deep Navy / Foreground** (`#181d26`): primary text. YAML `foreground`.
- **On-primary** (`#ffffff`): text on Airtable Blue fills. Same hex as canvas; the roles are not merged into one ink for every string.
- **Canvas / White** (`#ffffff`): primary surface and page background.
- **Spotlight** (`rgba(249,252,255,0.97)`): `--theme_button-text-spotlight`. Body-only; not a YAML color token.
- **Success Green** (`#006400`): `--theme_success-text`.
- **Weak Text** (`rgba(4,14,32,0.69)`): `--theme_text-weak`. Not estimated `#6b7280`.
- **Secondary Active** (`rgba(7,12,20,0.82)`): `--theme_button-text-secondary-active`.
- **Dark Gray / Body** (`#333333`): secondary text. YAML `body`. Not Deep Navy.
- **Mid Blue / Accent** (`#254fad`): link/accent blue variant. YAML `accent-blue`. Not Airtable Blue.
- **Border / Hairline** (`#e0e2e6`): card borders. YAML `hairline`.
- **Light Surface** (`#f8fafc`): subtle surface. YAML `surface`. Also the harvested badge background; that badge field is not a general ink for every string.
- **Formula error pill** (`#ef4444`): field-header error in the §14 contract. Not a general danger token and not Success Green.
- **Skeleton value** (`#e5e7eb`): record-detail skeleton rectangles in the §14 contract. Not Light Surface and not Hairline.

Estimated §9 values `#0f4ba0` (CTA hover, “~10% darker”) and `~#6b7280` (muted text) are not promoted.

### Spacing

YAML scale: xs 4, sm 8, md 12, base 16, lg 24, xl 32, xxl 48. Body layout states 1–48px with an 8px base. Both are kept; 1px is not the YAML `xs` 4 value.

### Shape

YAML `rounded`: sm 2, md 12, lg 16, xl 24, xxl 32, full `9999`.

Body layout also names 2px (small), 12px (buttons), 16px (cards), 24px (sections), 32px (large), and 50% (circles). YAML `full` `9999` and body `50%` are not merged.

The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification. 12px button corners, 16px standard-card corners, and 2px cookie-consent corners are local geometry, not a universal radius for every surface.

### Elevation

- **Blue-tinted multi-layer:** `rgba(0,0,0,0.32) 0px 0px 1px, rgba(0,0,0,0.08) 0px 0px 2px, rgba(45,127,249,0.28) 0px 1px 3px, rgba(0,0,0,0.06) 0px 0px 0px 0.5px inset`
- **Soft ambient:** `rgba(15,48,106,0.05) 0px 0px 20px`

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification. The source lifts primary buttons with the blue-tinted layer so elevation is read as tied to the brand blue, and it uses spotlight plus the soft ambient glow rather than heavy gray or dark drop shadows.

### Motion

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Cell commit |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, side panel |
| `motion-slow` | 400ms | Spotlight surface arrival |

Source-stated easing names (uncomputed; cubic-bezier curves omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only) | Named in source; use not separately specified |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Named in source; use not separately specified |

No bouncy springs. `prefers-reduced-motion: reduce` removes spotlight fade-in. Source Don’ts also say not to exceed the 150–400ms timing tokens.

Exact cubic-bezier curves are unattributed and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Trademark Guidelines are named as brand-usage guidance (`ds.type: brand`). Interface-token evidence, including a universal current typography token, is unresolved in this packet. |
| Live computed surface-use | No computed FontFace or source URL is recorded in this packet. |
| Source reconstruction | The source names Haas as the marketing-site UI family and Haas Groot Disp as the display face. That naming is not FontFace corroboration. |
| Official distributed asset | No Airtable-exclusive distributed type family is verified in this packet. |
| Declared-only | Fallbacks `-apple-system, system-ui, Segoe UI, Roboto` (Haas) and `Haas` (for Haas Groot Disp) are declared stacks, not the brand face. |
| Unresolved claim | Haas / Haas Groot Disp FontFace and source-URL corroboration is not in this packet. Do not present the system fallback stack as Haas. |

### Family

- **Primary (YAML `sans` / body):** `Haas`, fallbacks `-apple-system, system-ui, Segoe UI, Roboto`
- **Display (YAML `display`):** `Haas Groot Disp`, fallback `Haas`
- Do not replace Haas with the fallback stack. Do not present the fallback stack as Haas or Haas Groot Disp.

### Type roles

Verified line-height values are the unitless YAML ratios `1.15`, `1.50`, `1.25`, `1.20`, `1.40`, `1.35`, `1.30`, and `1.28`. They scale with font size and are not fixed px. The legacy body table also recorded ranges at some roles. Those ranges are additional observations, not replacements for the YAML ratios. YAML weights `450` (sub-heading, caption) are not averaged with body `400–500`.

| Role | Font | Size | Weight | Line height (YAML) | Body-table observation | Tracking | Use |
|---|---|---:|---:|---:|---|---|---|
| Display Hero | Haas | 48px | 400 | 1.15 | — | normal | Hero headlines |
| Display Bold | Haas Groot Disp | 48px | 900 | 1.50 | — | normal | Bold display, Haas Groot Disp |
| Section Heading | Haas | 40px | 400 | 1.25 | — | normal | Section headings |
| Sub-heading | Haas | 32px | 450 | 1.20 | 400–500 / 1.15–1.25 | normal | Sub-headings |
| Card Title | Haas | 24px | 400 | 1.25 | 1.20–1.30 | YAML 0.12; body 0.12px | Card titles |
| Feature | Haas | 20px | 400 | 1.40 | 1.25–1.50 | YAML 0.1; body 0.1px | Feature text |
| Body | Haas | 18px | 400 | 1.35 | — | YAML 0.18; body 0.18px | Standard reading text |
| Body Medium | Haas | 16px | 500 | 1.30 | tracking 0.08–0.16px | YAML 0.12 | Emphasized body |
| Button | Haas | 16px | 500 | 1.28 | 1.25–1.30 | YAML 0.08; body 0.08px | Button labels |
| Caption | Haas | 14px | 450 | 1.30 | 400–500 / 1.25–1.35 / 0.07–0.28px | YAML 0.18 | Captions, small labels |

§1 also states positive letter-spacing on body text as `0.08px`–`0.28px`. That range is kept beside the per-role tracking values; it is not a replacement for them.

§9 construction prompts used Haas 14px / 500 with `12px 20px` padding on a primary button, and Haas Groot Disp 18px / 600 on a card title. Those prompt figures conflict with the harvested button and card-title rows and are not promoted.

### Assets

Catalog logo metadata is Simple Icons identity (`airtable`), not a captured first-party mark. No first-party mark file is attached here.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| **Empty (no bases)** | "Create your first base" CTA + template picker grid |
| **Empty (no records)** | Inline row "+ Add a record" — no illustration |
| **Loading (base opening)** | Spotlight surface fades in, table grid skeletons |
| **Loading (sync)** | Inline progress chip on view header |
| **Error (sync failed)** | Yellow warning chip on view header + "Reconnect source" link |
| **Error (formula)** | Red `#ef4444` pill on field header + tooltip |
| **Success (saved)** | Implicit — auto-saves, no toast. Cmd+Z works |
| **Success (workflow run)** | Workflow log row appears with green check + duration |
| **Skeleton (record detail)** | Field labels stay, values become `#e5e7eb` rectangles |
| **Disabled** | 0.5 opacity. Read-only fields show lock icon |
| **Loading (AI agent)** | Stepwise indicator + cancellable. Latency expectation set |

Those rows describe named product patterns (bases, records, sync, formula, workflow, record detail, AI agent). The following evidence-domain sentence is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification. They are not visual treatments of the harvested marketing buttons, input, cards, or badge. `#ef4444` stays on the formula field-header pill; `#e5e7eb` stays on record-detail skeleton values; 0.5 opacity stays on the Disabled row.

Live DOM notes (playwright): round 50% icon buttons; ghost 12px; Sign up CTA. No fill, padding, or state matrix is recorded for the ghost or icon-button notes. They remain named live-DOM observations.

Default Input and Default Badge are marked in the source as inferred from the §1–§2 baseline (no explicit DS variant). Each is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification. That complete limiter is restated on those components.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source records no `Focus` capture and no `focus-visible` treatment; `focus-visible` visual treatment remains omitted. A later generic Focus observation would not be `focus-visible` evidence. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact selector/label/request/outcome mapping is unresolved, those three applicability fields are omitted at this boundary rather than closed.

Estimated §9 CTA hover `#0f4ba0` is not a hover treatment. This is not a complete state-coverage claim.

### Primary Blue Button

- Role: primary CTA on the marketing site
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#1b61c9`
- Text: `#ffffff`
- Radius: 12px
- Padding: 16px 24px (YAML `16x24`)
- Font: 16px / 500 / Haas (YAML `Haas 16/500`)
- Shadow: `rgba(0,0,0,0.32) 0px 0px 1px, rgba(0,0,0,0.08) 0px 0px 2px, rgba(45,127,249,0.28) 0px 1px 3px, rgba(0,0,0,0.06) 0px 0px 0px 0.5px inset`
- Use: Primary CTA buttons across the marketing site; blue-tinted lift
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the marketing-site primary CTA |
| hover | applicable | Pointer-web button; visual treatment omitted (estimated `#0f4ba0` is not promoted) |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A marketing CTA can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control only as a primary CTA on the marketing site; exact selector/label/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed as Sign up / Talk to sales destination navigation.

### White Button

- Role: secondary CTA on dark/blue surfaces
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#181d26`
- Border: 1px solid `#ffffff`
- Radius: 12px
- Padding: 16px 24px
- Font: 16px / 500 / Haas
- Use: Secondary CTA on dark/blue surfaces
- Observed: default only
- Field note: the 1px `#ffffff` border is this control’s renderable field, not Hairline `#e0e2e6`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the secondary CTA on dark/blue surfaces |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary CTA can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control only as a secondary CTA on dark/blue surfaces; exact selector/label/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed as page-action destination navigation.

### Cookie Consent Button

- Role: cookie banner accept
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#1b61c9`
- Text: `#ffffff`
- Radius: 2px
- Padding: 16px 24px
- Font: 16px / 500 / Haas
- Use: Cookie banner accept (deliberately sharp 2px radius)
- Observed: default only
- Field note: 2px radius is this control’s local geometry, not the 12px button radius.

The local-geometry field note and the “deliberately sharp” reading of this 2px radius are a derived editorial implementation inference from the verified surfaces; they are not Airtable-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the cookie-banner accept control |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A consent accept control can be unavailable; visual treatment omitted |
| loading | not-applicable | Cookie accept is a one-shot banner action; the control itself does not enter a loading state |
| error | not-applicable | Consent failure is not a validation state of this accept button |
| success | not-applicable | Dismissing the banner is not a success confirmation painted on this button |

### Default Input

- Role: default text input (source: inferred from §1–§2 baseline; no explicit DS variant)
- Kind: interactive
- Type: input
- Evidence class: this Default Input is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification.
- Anatomy: value field
- Background: `#ffffff`
- Text: `#181d26`
- Border: 1px solid `#e0e2e6`
- Radius: 12px
- Padding: 12px 16px (YAML `12x16`)
- Font: 16px / 400 / Haas
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source).
- Observed: default only
- Field note: `#181d26` is this control’s renderable foreground and Deep Navy; it is not Dark Gray `#333333`. Formula error `#ef4444` is not this input’s error treatment.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the default text input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A text field can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source records this input only as an inferred default text field; exact selector/label/request/outcome mapping to form validation, sync loading, or implicit autosave is unresolved, so those three fields stay omitted at this boundary rather than closed. Formula `#ef4444` remains a field-header pill in the §14 contract, not this input’s error treatment.

### Standard Card

- Role: default card surface
- Type: card
- Anatomy: surface
- Background: `#ffffff`
- Border: 1px solid `#e0e2e6`
- Radius: 16px
- Padding: 24px
- Shadow: `rgba(0,0,0,0.32) 0px 0px 1px, rgba(0,0,0,0.08) 0px 0px 2px, rgba(45,127,249,0.28) 0px 1px 3px, rgba(0,0,0,0.06) 0px 0px 0px 0.5px inset`
- Use: Default card surface; blue-tinted multi-layer shadow
- YAML use also names 24–32 radius featured and 1px `#e0e2e6` border

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted.

### Large Section Card

- Role: larger feature/section container
- Type: card
- Anatomy: surface
- Background: `#ffffff`
- Border: 1px solid `#e0e2e6`
- Radius: 24px
- Padding: 32px
- Use: Larger feature/section containers

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted. The standard-card shadow is not copied here.

### Default Badge

- Role: default badge (source: inferred from §1–§2 baseline; no explicit DS variant)
- Type: badge
- Evidence class: this Default Badge is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification.
- Anatomy: label
- Background: `#f8fafc`
- Text: `#181d26`
- Border: 1px solid `#e0e2e6`
- Radius: 12px
- Padding: 4px 8px
- Font: 14px / 500 / Haas (YAML `Haas 14/500`)
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source).
- Field note: `#f8fafc` is this control’s renderable background and Light Surface; it is not a general ink for every string.

No interactive-kind evidence is given. Kind and a state-applicability map are omitted.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

YAML spacing is xs 4, sm 8, md 12, base 16, lg 24, xl 32, xxl 48. Body layout states spacing 1–48px (8px base) and radius 2px (small), 12px (buttons), 16px (cards), 24px (sections), 32px (large), 50% (circles). Those figures are kept as recorded.

The “not a page gutter”, “not a list of 23 named values / not a cross-viewport specification”, and “not a universal content grid” readings in this section are derived editorial implementation inferences from the verified surfaces; they are not Airtable-authored or a separately published UI specification. 12px button corners are not a page gutter.

Responsive record: breakpoints 425–1664px (23 breakpoints). That range is the source’s recorded span, not a list of 23 named values and not a cross-viewport specification of collapsing navigation or touch targets.

The 16px 24px button padding, 12px 16px input padding, 24px standard-card padding, 32px large-section padding, and 12px / 16px / 24px / 2px radii are component measurements in this reconstruction, not a universal content grid.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Observed (airtable.com homepage 2026-05)

- Hero: *"Build enterprise-ready AI workflows, apps & agents"*
- Marketing CTA: *"Sign up"* / *"Talk to sales"*

Treating the §14 empty-state strings as part of the state contract, not extra voice samples, is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification. Recorded strings: "Create your first base"; "+ Add a record".

The following forbidden-phrase list is a derived editorial implementation inference from the verified surfaces; it is not Airtable-authored or a separately published UI specification. It is not one of the Observed homepage strings above.

**Forbidden phrases** (source): “Revolutionary database”, “no-code magic”, emoji in product chrome.

### Derived editorial copy direction

The following voice reading and copy-pattern table are a derived editorial implementation inference from the verified surfaces; they are not Airtable-authored or a separately published UI specification. They are not the Observed homepage strings above.

The source describes Airtable’s voice as **product-pragmatic and confidence-quiet** — speaks like an internal tools team explaining what just shipped. Hero messaging is read as verb-first, capability-list, no hyperbole.

| Context | Tone |
|---|---|
| CTA | Verb + noun. "Create base", "Add field", "Sync now" |
| Empty state | Direct invitation. "Create your first base to get started" |
| Error | Specific. "Couldn't connect to source. Check API key in Sync settings." |
| Marketing | Capability-list, lower-case headings allowed |
| Onboarding | One concept per screen, screenshots dominate |

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

- estimated CTA hover `#0f4ba0` (~10% darker) and estimated muted `~#6b7280`
- `ease-enter` / `ease-exit` cubic-bezier curves
- Haas / Haas Groot Disp FontFace and source-URL corroboration
- hover, focus, pressed, and `focus-visible` visual treatments
- loading, error, and success visual treatments on the harvested marketing buttons, and the omitted loading/error/success applicability fields on Primary Blue, White, and Default Input
- a first-party mark file
- a complete product-microcopy guide beyond the Observed homepage strings and the derived table
- motion animation names, transition properties, and any duration beyond the four source tokens — promote only after per-component computed capture of all five kinds; a single named duration is not that gate
