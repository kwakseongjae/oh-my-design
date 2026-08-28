# HubSpot Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

HubSpot publishes the HubSpot Customer Platform. This contract covers the two first-party web surfaces the source records as Tier 1 live inspect on 2026-06-22: the homepage at `https://www.hubspot.com/` and the pricing page at `https://www.hubspot.com/pricing`. Canvas at `https://canvas.hubspot.com` is documented separately by HubSpot as the internal design system powering product surfaces — five principles (Clear, Human, Inbound, Integrated, Collaborative). Every value below stays attached to the surface that established it. The homepage, the pricing page, and the Canvas record are separate evidence domains: a homepage measurement is not a Canvas token, and a Canvas principle is not a homepage computed value, except where the source itself records both and keeps them distinct. The machine-token note says primary is live CTA orange (`#ff4800` = `rgb(255,72,0)`), canvas cream (`#fcfcfa`) is page background, ink (`#1f1f1f`) is text, deep teal (`#042729`) is dark sections, and the type system is custom HubSpot Sans + HubSpot Serif. Treating the two captured routes as this contract's domain, and treating the separate Canvas record as not a substitute for those live tokens, is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

The source records a warm marketing-platform homepage: canvas cream (`#fcfcfa`) as the page background, Sprout Orange (`#ff4800`) reserved for CTAs and key functional icons, deep ink (`#1f1f1f`) for headings and body, and dark teal sections (`#042729`) as immersive brand moments. The typographic system is built on two proprietary fonts: HubSpot Sans (weight 300–500) for UI and body copy, and HubSpot Serif (weight 500) for display and section headlines. At hero sizes a third variant — HubSpot Serif Page Header Human — appears at 80px. Elevation is hairline borders (`rgba(0,0,0,0.11)`) and alternating tints — canvas cream versus warm parchment (`#f8f5ee`) — rather than multi-layer shadows. When CTAs appear on dark teal sections, they switch to outlined variants with cream borders. The hex values, family names, weights, and 80px hero size in this paragraph are recorded. The characterizations built on them — warm, modern, approachable and energetic without sacrificing professionalism, organic and friendly rather than clinical, assertive reserved orange, almost-black ink with a touch of warmth, editorial and trustworthy rather than purely technical, unusual serif/sans split for a SaaS brand, part technology company and part inbound-marketing thought leader — are a derived editorial implementation inference from the verified surfaces; they are not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

HubSpot was founded in **2006** by **Brian Halligan** and **Dharmesh Shah** at MIT, emerging from a shared observation: traditional outbound marketing (cold calls, purchased email lists, intrusive ads) was becoming less effective as buyers gained control of their information consumption. Their answer was the **Inbound methodology** — create content people actually want, attract them to you, engage them with useful tools, and delight them after they become customers. The company's flagship product began as a marketing automation and CMS platform, grew into a full CRM suite spanning Marketing Hub, Sales Hub, Service Hub, Content Hub, and Operations Hub, and evolved further into the **HubSpot Customer Platform** — a unified system where customer data, AI tools, and connected workflows sit in a single database rather than a patchwork of integrations. The Canvas design system codifies the visual and interaction language of this unified platform. HubSpot Academy has trained millions; the HubSpot Blog is one of the most-read marketing resources on the internet; the annual INBOUND conference draws tens of thousands of practitioners. The year, founders, MIT, Inbound methodology (attract, engage, delight), the five Hubs, HubSpot Customer Platform, Canvas, HubSpot Academy, HubSpot Blog, and INBOUND conference are the source's own narrative facts; they do not by themselves supply interface tokens. Treating that list as narrative rather than token evidence, and the sentences that call Inbound "not merely a business model; it was a philosophy that HubSpot turned into a product category," that call the brand "a technology company with the soul of a publishing house," and that say the brand "earns trust not by outspending competitors on advertising but by being genuinely useful before asking for anything," are a derived editorial implementation inference from the verified surfaces; they are not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

The source declares no task list of its own. Reading the two captured routes and the named Canvas record as the jobs below is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

- Act on the homepage CTAs "Get a demo of HubSpot's premium software" and "Get started free with HubSpot's free tools."
- Compare commercial offers on `https://www.hubspot.com/pricing`.
- Read the published Canvas principles (Clear, Human, Inbound, Integrated, Collaborative) at `https://canvas.hubspot.com`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable HubSpot user segments, not individual people, so those biographies are dropped rather than promoted, and no biography is re-hosted in the sidecar. What the source independently records as those observable segments, at group level only: SMB marketers, growth-stage sales teams, customer success managers, operations leads. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

- Sprout Orange (`#ff4800`) as the single CTA and action color — never decorative
- Canvas cream (`#fcfcfa`) page background — warm, organic, not clinical white
- HubSpot Sans + HubSpot Serif proprietary type system — editorial SaaS hybrid
- 8px border-radius on all interactive elements (buttons, inputs, nav items)
- 16px radius on cards and content containers
- Nearly shadow-free: separation via hairline borders and tint alternation
- Deep teal (`#042729`) for dark brand-immersive sections
- Warm parchment (`#f8f5ee`) as alternating section tint

### Principles

The five headlines rest on HubSpot-published Inbound, Canvas, and mission positions the source attributes to the company. Canvas supplies two of the quoted principle sentences: "We design for clarity and focus." and "We foster a sense of joy by humanizing the experience in ways that resonate across cultures." The *UI implication* attached to each item, and the decision to treat these five as this contract's design principles, are a derived editorial implementation inference from the verified surfaces; they are not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

1. **Inbound over outbound.** Build tools that attract; don't push. *UI implication:* CTAs are invitations, not demands. Free tiers and free educational resources are first-class citizens of every pricing surface.
2. **Clear, not clever.** One of the five Canvas principles: "We design for clarity and focus." *UI implication:* a single orange CTA per pairing; no competing action colors; visual hierarchy that leads the eye to the next right step without ambiguity.
3. **Human connection at scale.** Another Canvas principle: "We foster a sense of joy by humanizing the experience in ways that resonate across cultures." *UI implication:* warm type choices (HubSpot Serif, canvas cream), people-centric photography, copy that addresses the user's goal rather than the product's feature.
4. **Integrated, not bolted-on.** The unified Customer Platform is the antithesis of the point-solution stack. *UI implication:* design system tokens are shared across Marketing, Sales, Service, and Content surfaces — the orange, the fonts, the radius scale do not differ by hub.
5. **Grow better, not just bigger.** HubSpot's mission is to help businesses "grow better" — implying that the manner of growth (sustainable, customer-centric, inbound) matters as much as velocity. *UI implication:* trust-building touchpoints (transparent pricing, free tools, educational resources) are designed with the same fidelity as revenue-driving CTAs.

### Application rules

These application rules are the source's own Do list.

- Use Sprout Orange (`#ff4800`) exclusively for CTAs and active-state icons — it is the system's action signal
- Use HubSpot Serif (weight 500) for all section headlines above 32px
- Use HubSpot Sans for all body text, labels, buttons, and navigation
- Apply 8px radius to all buttons and interactive elements
- Apply 16px radius to cards and content containers
- Separate sections with canvas cream / warm parchment alternation — not with shadows
- Pair every primary orange CTA with a secondary outlined variant
- Use `#1f1f1f` ink as the text color instead of pure black

### Avoid

These avoidances are the source's own Don't list.

- Use Sprout Orange for decorative backgrounds or illustration fills — reserve it for action
- Apply large drop shadows to cards — use hairline borders instead
- Mix HubSpot Serif into body or UI copy — it belongs only at display sizes
- Use more than two CTAs side-by-side without clear hierarchy (primary orange + secondary outlined)
- Apply a radius larger than 16px to cards — HubSpot cards are not pill-shaped
- Use pure white (`#ffffff`) as the default page background — canvas cream (`#fcfcfa`) is the correct base
- Use the orange as a section background color — it loses its call-to-action signal value

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels for recorded observations. Treating them as live-homepage and pricing-page observation labels rather than Canvas baseline roles is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

- **Sprout Orange / Primary** (`#ff4800`): The single action color. Primary CTA backgrounds, active states, brand icons, functional accents. Reserved — never for decorative backgrounds. Token-set key `tokens.colors.primary`.
- **Peach Tint** (`#fcded2`): Soft warm accent surface. Used for badges, soft highlights, and the subtle hero gradient area. Token-set key `tokens.colors.primary-tint`.
- **Canvas Cream** (`#fcfcfa`): Primary page background and default card surface. Token-set key `tokens.colors.canvas`.
- **Warm Parchment** (`#f8f5ee`): Alternating section background. Token-set key `tokens.colors.warm-parchment`.
- **Pure White** (`#ffffff`): Secondary card surface for outlined cards; button background for outlined CTA variant. Token-set key `tokens.colors.on-primary` names this hex as text on orange primary CTA buttons; the surface use above is the source's On-Surface / canvas pairing, not a second token. Treating that pairing as one hex with two source roles, not a second token, is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.
- **Ink** (`#1f1f1f`): Primary text and heading color. All body copy, headings, and interactive labels on light backgrounds. Token-set key `tokens.colors.ink`.
- **Graphite** (`#60605f`): Muted secondary text. Descriptions, captions, metadata. Token-set key `tokens.colors.graphite`.
- **Mist** (`#cacac8`): Disabled states, inactive markers, input borders. Token-set key `tokens.colors.mist`.
- **Deep Teal** (`#042729`): Dark brand sections. Footer, immersive product features, high-contrast brand moments. Token-set key `tokens.colors.deep-teal`.
- **Cadet Navy** (`#15295a`): Deep blue-navy for occasional dark accents and enterprise-tier section backgrounds. Token-set key `tokens.colors.cadet-navy`.
- **On-Primary** (`#ffffff`): Text on orange primary CTA buttons. Token-set key `tokens.colors.on-primary`.

### Spacing

Token-set keys from the source, kept as separate steps (`md: 12` is not `base: 16`; `base: 16` is not `lg: 24`; `section: 64` is not the Layout notable 64–80px range):

- `tokens.spacing.xs`: 4
- `tokens.spacing.sm`: 8
- `tokens.spacing.md`: 12
- `tokens.spacing.base`: 16
- `tokens.spacing.lg`: 24
- `tokens.spacing.xl`: 32
- `tokens.spacing.xxl`: 48
- `tokens.spacing.section`: 64

The source also lists a spacing-system scale of 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 56px, 64px, 80px, with section gaps at 64–80px, card padding at 24–32px, and element gaps at 16–24px. Those extra 40px / 56px / 80px steps are the source's layout-scale list, not additional YAML keys. Reading the YAML eight-step set as live-surface token keys, and the longer list as the source's layout scale, is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

### Shape

Token-set keys from the source, kept as separate steps (`sm: 4` is not `md: 8`; `md: 8` is not `lg: 16`; `lg: 16` is not spacing `base: 16`):

- `tokens.rounded.sm`: 4 — Micro: badges, input fields
- `tokens.rounded.md`: 8 — Standard: buttons, navigation pills, form elements
- `tokens.rounded.lg`: 16 — Relaxed: cards, content containers, filter tabs
- `tokens.rounded.full`: 9999 (9999px) — Full: avatar circles (if used)

The source's Key Characteristics attach 8px to interactive elements and 16px to cards. YAML `card-product` records `radius: 16px`; the §4 Product Card in the header dropdown records `8px`. Both geometries are kept; they are not merged. Keeping those two card radii as separate records is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, headings, text |
| Tint (Level 1) | `#f8f5ee` warm parchment background | Section alternation |
| Hairline (Level 2) | `rgba(0,0,0,0.11)` border or `1px solid #1f1f1f` | Card outlines, product tabs |
| Dark (Level 3) | `#042729` full-width section | Immersive brand-dark moments |

- **Shadow none (token-set):** `none`. Token-set key `tokens.shadow.none`.
- **Hairline (token-set):** `0 0 0 1px rgba(31,31,31,0.11)`. Token-set key `tokens.shadow.hairline`.
- **Hairline (live §1 / §6 form):** `rgba(0,0,0,0.11)`. Both byte forms are kept; they are not merged.

The source records `box-shadow: none` across the hero, nav, buttons, and most cards. Separation is background tinting and thin hairline borders. Calling that a deliberate modern-flat approach, and saying shadows would add visual noise inconsistent with a clean editorial aesthetic, is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation. When depth emphasis is needed, the source reaches for the ink border (`#1f1f1f`) or the orange brand color — never a shadow stack.

### Motion

**Durations**, as the source states them:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Focus rings, selection ticks, toggle commits |
| `motion-fast` | 120ms | Hover, focus, button press overlay |
| `motion-standard` | 200ms | Dropdown open, card expand, sheet slide |
| `motion-slow` | 320ms | Page transitions, hero reveal, modal enter |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to HubSpot evidence, so the curves are omitted here and only the roles and their uses are kept. Classing those curves as untraceable to HubSpot evidence, and omitting them on that ground, is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

| Token | Use |
|---|---|
| `ease-enter` | Arriving elements — dropdowns, modals, sheets |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

A future motion pass may promote an omitted curve only after recording, per component, the computed transition properties, the animation name, the duration, the easing, and the reduced-motion behavior on the live surface; confirming a single curve, or citing an official source for one, does not satisfy that condition. That condition is set by this document, not by HubSpot.

Motion rules, as the source states them:

- Motion is purposeful and unobtrusive — consistent with HubSpot's "clear and human" design principles.
- The mega-navigation dropdown opens at `motion-standard / ease-enter`; filter tabs switch at `motion-fast`; CRM row expansions use `motion-standard`.
- No spring or bounce — HubSpot is professional SaaS, not a consumer entertainment app.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional and all state changes remain perceptible through color and content rather than motion.

Signature motions, as the source states them (curve values omitted):

- Pipeline card drag-and-drop uses `motion-fast` positional updates with a subtle card lift (hairline border intensification rather than shadow — consistent with the flat system).
- The hero section on hubspot.com fades in at `motion-slow / ease-enter` on first paint.
- Email campaign send animation plays a brief single-loop success illustration then settles into the Closed Won toast.

Reading the no-spring stance as a professional-SaaS signal, and reading motion as consistent with "clear and human," is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | HubSpot Sans and HubSpot Serif are the source's proprietary type system. Canvas is named as the internal design system; it does not, in this packet, publish a universal current typography token table that replaces the live computed roles below. |
| Live computed surface-use | Homepage and pricing compute visible UI and body as HubSpot Sans; display and section headlines compute HubSpot Serif. HubSpot Serif Page Header Human appears at 80px hero size. |
| Official distributed asset | No HubSpot-exclusive publicly distributable font file was verified in this packet. |
| Declared-only fallback | Token-set fallbacks are `Inter` for HubSpot Sans and `Source Serif 4` for HubSpot Serif. They are fallbacks, not the brand face. |
| License | This record does not establish a reusable webfont-distribution or substitution right. Do not treat the fallbacks as HubSpot Sans or HubSpot Serif. |

Treating Canvas as not replacing the live computed roles, classing Inter and Source Serif 4 as fallbacks rather than brand faces, and reading the packet as not establishing a distributable font file, is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

### Family

- **Current visible UI / body family:** `HubSpot Sans`. Token-set key `tokens.typography.family.sans`. Weights 300 / 400 / 500. Range 12–24px.
- **Current visible display family:** `HubSpot Serif`. Token-set key `tokens.typography.family.serif`. Weight 500 only. Range 40–80px.
- **Fallback sans:** `Inter`. Token-set key `tokens.typography.family.fallback-sans`.
- **Fallback serif:** `Source Serif 4`. Token-set key `tokens.typography.family.fallback-serif`.
- Do not replace HubSpot Sans or HubSpot Serif with a system or fallback face while labelling the substitute the brand family. HubSpot Serif owns every headline above 32px. HubSpot Sans owns every interactive, label, and body element. Calling that split a signal of trustworthy authority (serif) and functional clarity (sans) is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

### Type roles

YAML token-set metrics keep their unitless line-height ratios. Button LG 18px / 500 / 1.00 is the §3 hierarchy row; YAML `tokens.typography.button` is 16 / 500 / 1.00. Those two button sizes are not converted into each other.

| Role | Font | Size | Weight | Line height | Token-set use / captured use |
|---|---|---:|---:|---|---|
| Display Hero | HubSpot Serif | 80px | 500 | 1.19 | Hero display — HubSpot Serif Page Header Human |
| Heading XL | HubSpot Serif | 48px | 500 | 1.10 | Large section headlines — HubSpot Serif |
| Heading LG | HubSpot Serif | 40px | 500 | 1.15 | Section headings — HubSpot Serif |
| Heading | HubSpot Sans | 24px | 500 | 1.42 | Card headings — HubSpot Sans |
| Heading SM | HubSpot Sans | 22px | 500 | 1.45 | Sub-section heads — HubSpot Sans |
| Subheading | HubSpot Sans | 18px | 400 | 1.67 | Feature descriptions |
| Body | HubSpot Sans | 16px | 400 | 1.56 | Standard reading text |
| Body SM | HubSpot Sans | 14px | 400 | 1.57 | Secondary UI text, labels |
| Caption | HubSpot Sans | 12px | 500 | 1.60 | Small labels, eyebrows |
| Button LG | HubSpot Sans | 18px | 500 | 1.00 | Large CTA button labels (§3 hierarchy) |
| Button | HubSpot Sans | 16px | 500 | 1.00 | Primary button label |
| Button SM | HubSpot Sans | 14px | 500 | 1.00 | Small button label |

Weight 500 is the source's signature for heading, button, and caption. Weight 400 is the source's reading weight for body, subheading, and nav. Line-height relaxes to 1.56–1.67 at body scale and tightens to 1.10–1.19 at display sizes. Those three principles are the source's own typography rules.

### Assets

- Canvas (`https://canvas.hubspot.com`) is documented separately by HubSpot as the internal design system. Keeping that separate record from standing in for the homepage and pricing machine tokens is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.
- Logo record in the source frontmatter: `type: simpleicons`, `slug: hubspot`. Keeping that identity pointer in the provenance ledger rather than as a renderable mark here is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless the source recorded them. Absence of a capture is not a `not-applicable` reason. This is not a complete state-coverage claim. Closing each map by control role — and omitting `kind` plus a map where the source supplies no interactive-kind evidence — is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

The source's §14 table records treatments for CRM empty, dashboard loading, report generating, connection / form / API error, form-submitted and deal-closed success, skeleton, and disabled. Those treatments are kept below as recorded product-surface states. Not opening loading, error, or success on a destination marketing CTA — because those §14 treatments name other surfaces the source named — is the same role-closing inference as the sentence above.

### Recorded product-surface states

As the source states them. These name CRM contacts, pipeline deals, dashboard, report, form, integration, and deal-closed surfaces the source itself named.

| State | Treatment |
|---|---|
| Empty (no contacts in CRM) | Canvas cream background. HubSpot Sans 18px weight 400 in ink: "You haven't added any contacts yet." Orange CTA: "Import contacts" or "Create a contact." No heavy illustration — warm and direct. |
| Empty (no deals in pipeline) | Graphite (`#60605f`) at 14px: "No deals in this pipeline." Pipeline tabs remain visible so user can switch stages or add manually. Clear action path. |
| Loading (dashboard) | Skeleton rows on canvas cream at final card dimensions. 16px radius on card skeletons. Subtle shimmer consistent with the flat, warm-toned system. No animated orange — reserve the primary for action. |
| Loading (report generating) | Inline progress indicator below the report title. Previous data stays visible. HubSpot Sans 14px weight 400 "Generating your report..." |
| Error (connection failed) | Inline banner in peach tint (`#fcded2`) with orange left-border accent. Ink text at 14px: specific failure reason + retry link. Never a generic "Something went wrong." |
| Error (form validation) | Field-level. Orange-tint border on the input. HubSpot Sans 12px weight 500 error text below: describes what's missing and how to fix it. |
| Error (API / integration) | Contextual inline message with the integration name and the failed action explicitly stated. Link to troubleshooting documentation. |
| Success (form submitted) | Brief inline confirmation on canvas cream. Ink heading at 24px/500: "You're all set!" Body 16px/400: confirms next step (email on the way, meeting link follows). No toast on form pages — the confirmation replaces the form. |
| Success (deal closed) | Toast at top-right. 3-second auto-dismiss. HubSpot Sans 14px/500: "Deal marked as Closed Won." Optional confetti on first-close milestone. |
| Skeleton | Canvas cream blocks at final element dimensions, 16px radius for cards, 4px for badges, 8px for buttons. Warm-toned shimmer pulse. |
| Disabled | Mist (`#cacac8`) border and 40% opacity on surface. Orange actions fade to peach tint (`#fcded2`) text — preserves brand read while clearly indicating inactivity. |

### Primary CTA (Large)

- Role: primary page-level CTA
- Primitive type: `button` · Kind: interactive
- Background: `#ff4800`
- Text: `#ffffff`
- Radius: 8px
- Padding: 16px 40px
- Font: 18px HubSpot Sans weight 500
- Border: 2px solid transparent (`2px solid rgba(0,0,0,0)`)
- Token-set key: `tokens.components.button-primary`
- Use: Primary CTA — Get a demo / Get started
- Source use: Primary page-level CTA ("Get a demo", "Get a demo of HubSpot's premium software")
- Observed states string: hover darken. Exact darken hex omitted.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded on the homepage primary CTA |
| hover | applicable | Pointer-web button; source names hover darken; exact treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | Source records a disabled treatment (Mist border, 40% opacity, peach-tint text) |
| loading | not-applicable | A marketing CTA leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Primary CTA (Medium)

- Role: section-level primary CTA
- Primitive type: `button` · Kind: interactive
- Background: `#ff4800`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 24px
- Font: 16px HubSpot Sans weight 500
- Use: Section-level primary CTA

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the medium primary CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A CTA can be gated; source disabled treatment recorded above |
| loading | not-applicable | A marketing CTA leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Primary CTA (Small)

- Role: inline small CTA
- Primitive type: `button` · Kind: interactive
- Background: `#ff4800`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Font: 14px HubSpot Sans weight 500
- Token-set key: `tokens.components.button-sm`
- Use: Compact primary button
- Source use: Inline small CTA

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the small primary CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A CTA can be gated; source disabled treatment recorded above |
| loading | not-applicable | A marketing CTA leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Secondary Outlined (Large)

- Role: secondary CTA paired with primary
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#ff4800`
- Radius: 8px
- Padding: 16px 40px
- Font: 18px HubSpot Sans weight 500
- Border: 2px solid `#ff4800`
- Token-set key: `tokens.components.button-outlined`
- Use: Secondary CTA — Get started free
- Source use: Secondary CTA paired with primary ("Get started free")

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the large outlined CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A CTA can be gated; source disabled treatment recorded above |
| loading | not-applicable | A marketing CTA leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Secondary Outlined (Medium)

- Role: section-level secondary action
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#ff4800`
- Radius: 8px
- Padding: 12px 24px
- Font: 16px HubSpot Sans weight 500
- Border: 2px solid `#ff4800`
- Use: Section-level secondary action

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the medium outlined CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A CTA can be gated; source disabled treatment recorded above |
| loading | not-applicable | A marketing CTA leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Dark Surface CTA

- Role: CTA on light canvas
- Primitive type: `button` · Kind: interactive
- Background: `#1f1f1f`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Font: 14px HubSpot Sans weight 500
- Token-set key: `tokens.components.button-dark`
- Use: Dark surface CTA — Learn more
- Source use: CTA on light canvas — "Learn more about Revenue Hub"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the dark-surface CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A CTA can be gated; source disabled treatment recorded above |
| loading | not-applicable | A marketing CTA leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Dark Section Outlined

- Role: secondary CTA on deep teal dark section
- Primitive type: `button` · Kind: interactive
- Background: rgba(0,0,0,0.11)
- Text: `#f8f5ee`
- Radius: 8px
- Padding: 12px 24px
- Font: 16px HubSpot Sans weight 500
- Border: 2px solid `#f8f5ee`
- Use: Secondary CTA when page is on deep teal dark section

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the dark-section outlined CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A CTA can be gated; source disabled treatment recorded above |
| loading | not-applicable | A marketing CTA leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Default Input

- Role: email/text field in nav search and landing forms
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Border: 1px solid `#cacac8`
- Radius: 4px
- Text: `#1f1f1f`
- Font: 16px HubSpot Sans weight 300 (token-set `font: "16px HubSpot Sans"`)
- Padding: 3.2px 8px
- Token-set key: `tokens.components.input-default`
- Use: Standard text/email input
- Source use: Email/text fields in nav search and landing forms

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the default input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable form field; visual treatment omitted |
| disabled | applicable | A form field can be gated; source disabled treatment recorded above |
| loading | not-applicable | The field accepts a value; the operation is committed by the form's submit action, not by the field |
| error | applicable | Form field; source records orange-tint border and 12px / 500 error text; exact live hex omitted |
| success | not-applicable | Completion is not confirmed on the field; the field accepts a value |

### Product hub overview card

- Role: Product hub overview card
- Primitive type: `card`
- Background: `#fcfcfa`
- Text: `#1f1f1f`
- Radius: 16px
- Border: 2px solid rgba(0,0,0,0.11)
- Padding: 24px
- Token-set key: `tokens.components.card-product`
- Use: Product hub overview card
- The source assigns `type: card` and records no card interaction state. Omitting `kind` and a state-applicability map — because that pair is not interactive-kind evidence — is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

### Product suite dropdown tab card

- Role: Product suite overview tabs in header dropdown
- Primitive type: `card`
- Background: `#fcfcfa`
- Text: `#1f1f1f`
- Radius: 8px
- Border: 2px solid rgba(0,0,0,0.11)
- Padding: 12px 24px
- Use: Product suite overview tabs in header dropdown
- YAML `card-product` radius 16px / padding 24px is the overview-card record above; this §4 dropdown-tab card is the 8px / 12px 24px record. They are not merged.
- The source assigns this block as a card and records no card interaction state. Omitting `kind` and a state-applicability map — because that pair is not interactive-kind evidence — is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

### Feature Card

- Role: Feature content card with hairline border
- Primitive type: `card`
- Background: `#ffffff`
- Text: `#1f1f1f`
- Radius: 16px
- Border: 1px solid `#1f1f1f`
- Padding: 24px 32px
- Token-set key: `tokens.components.card-feature`
- Use: Feature content card with hairline border
- The source assigns `type: card` and records no card interaction state. Omitting `kind` and a state-applicability map — because that pair is not interactive-kind evidence — is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

### Peach Tag

- Role: Warm peach accent labels, category tags
- Primitive type: `badge`
- Kind: non-interactive — a tag/pill, not a control that commits an operation. Classing the badge as non-interactive is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.
- Background: `#fcded2`
- Text: `#ff4800`
- Radius: 4px
- Padding: 4px 8px
- Font: 12px HubSpot Sans weight 500
- Token-set key: `tokens.components.badge-default`
- Use: Warm peach accent pill / tag
- Source use: Warm peach accent labels, category tags

### Filter Tab

- Role: filter tab (By Use Case / By Team Size)
- Primitive type: `tab` · Kind: interactive
- Active: Background `#f8f5ee`, Text `#1f1f1f`, Radius 16px, Padding 8px, Font 14px HubSpot Sans weight 500
- Inactive: Background `#ffffff`, Text `#1f1f1f`, Radius 16px, Padding 8px, Font 14px HubSpot Sans weight 400
- Token-set key: `tokens.components.tab-filter`
- Use: Filter tab (By Use Case / By Team Size)
- Source use: Active filter tab ("By Use Case", "By Team Size", "Why HubSpot?")

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Active and inactive treatments recorded above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | A tab selects a panel; it commits no in-place operation |
| error | not-applicable | A tab has no in-place operation whose failure can be reported on the tab |
| success | not-applicable | Active/inactive are the tab's own recorded states, not a success treatment |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing system (source layout scale)

Base unit: 4px. Scale as the source lists it: 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 56px, 64px, 80px. Notable: section gaps land at 64–80px; card padding at 24–32px; element gaps at 16–24px. The YAML eight-step keys stay in Foundations Spacing; this longer list is the source's layout scale. Reading that split as capture-versus-token-set, not a published Canvas grid specification, is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

### Grid and container

- Max content width: 1200px
- Hero: dual-column on desktop — left text block with serif headline + CTA pair, right product screenshot
- Feature sections: alternating 2-column and 3-column grid layouts
- Full-width dark sections (`#042729`) with cream/white text for brand immersion
- Product hub cards in a multi-tab dropdown grid (3–4 columns)

### Whitespace

- Tint alternation over shadow: canvas cream (`#fcfcfa`) and warm parchment (`#f8f5ee`) alternating sections
- Hairline restraint: card borders are 1–2px at low opacity (`rgba(0,0,0,0.11)`) rather than solid lines
- Breathing sections: 64–80px vertical rhythm between sections

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero stacks, nav collapses to hamburger |
| Tablet | 640–1024px | 2-column feature grids, reduced padding |
| Desktop | 1024–1280px | Full 2–3 column layout, serif hero headline at full scale |
| Large Desktop | >1280px | Centered content with generous margins, 1200px max-width |

### Touch targets

- Primary CTA at 42px height (small) to 68px (large hero)
- Navigation tabs at 38px height with 16px radius
- Input fields at 34px minimum height
- Filter tabs: 38px height with 16px radius

### Collapsing strategy

- Hero: serif 80px display → 48px on tablet → 32px on mobile; CTA buttons stack vertically
- Navigation: horizontal product mega-menu → collapsed hamburger with slide-out panel
- Feature cards: 3-column → 2-column → single column
- Dark brand sections: maintain full-width treatment; reduce internal padding on mobile

These breakpoint names, widths, and collapsing rules are the source's own. They describe the recorded marketing homepage and pricing layout. Reading them as describing those two captured marketing surfaces, not a published Canvas layout specification, is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

<!-- design-md:section content-locales -->
## 6. Content & Locales

HubSpot's voice, as the source states it, is **warm, helpful, and confident** — the inbound-marketing pioneer who genuinely believes that if you help people first, business follows. Headlines favor concrete capability over abstract superlative ("Grow better" not "Revolutionize your pipeline"). CTAs are action-forward without pressure: "Get a demo" and "Get started free" rather than "Unlock unlimited power." The Inbound methodology — attract, engage, delight — echoes through every surface. Reading that voice as warm/helpful/confident, and reading Inbound as echoing through every surface, is a derived editorial implementation inference from the verified surfaces; it is not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.

| Context | Tone |
|---|---|
| Hero headlines | Declarative and warm. "The HubSpot Customer Platform." Confident without superlatives. |
| Product descriptions | Benefit-first, concrete. "Manage your pipeline" not "Transform your revenue potential." |
| CTAs | Direct, generous. "Get started free." "Get a demo." No manufactured urgency. |
| Marketing blog / Academy | Educational, accessible, peer-to-peer. Shares frameworks, not just features. |
| Error messages | Helpful and specific. States what's wrong and what to do next. |
| Onboarding | Encouraging, step-oriented. Celebrates small wins on the path to platform mastery. |
| Pricing | Transparent, tier-explicit. Free tier prominently available. |

**Voice samples (verbatim from live homepage):**

- "The HubSpot Customer Platform" — hero heading (declarative, brand-anchored).
- "Get a demo of HubSpot's premium software" — primary CTA label (action + context).
- "Get started free with HubSpot's free tools" — secondary CTA label (generous, no-pressure).

**Forbidden register**: aggressive scarcity tactics, jargon-stacked feature lists presented without benefit context, exclamation-heavy hype, "revolutionary" or "game-changing" superlatives, heavy enterprise procurement tone ("request a quote", "contact a specialist" as the first option).

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

- exact hover-darken color on the primary CTA
- motion easing curve values
- hover, focus, and pressed visual treatments beyond the recorded "hover darken" string
