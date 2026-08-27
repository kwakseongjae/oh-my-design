# Deliveroo Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The surface-scope, market characterization, evidence-class, and causal statements in this Scope are derived editorial implementation inferences from the recorded sources; they are not Deliveroo-authored or a separately published UI specification.

Deliveroo is the UK's leading food delivery platform. This contract reconstructs the consumer ordering interface — restaurant discovery, address and restaurant search, ordering, and order tracking — from three kinds of record: the public `deliveroo.design` brand and hiring surface, the official Deliveroo Design Medium article on the PDS 2.0 colour system, and the official SimpleIcons logo asset. Live inspection of `deliveroo.co.uk` and `design.deliveroo.net` returned a Cloudflare Error 1009 geo-block from the KR IP used for this record, so every value in this document rests on those recorded sources rather than on a computed reading of a live Deliveroo interface. Treat every component, layout, and state figure below as a source-recorded reconstruction rather than a measured live token.

The design system is known internally as PDS 2.0 (Platform Design System). The official Deliveroo Design article records its 2024 accessibility overhaul: the digital colour palette was revamped around WCAG 2.1 Level AA compliance, the action colour is named "Seaweed" in the token system alongside food-themed names such as Anchovy and Tomato, and text on teal fills is deep teal ink (`#003733`) rather than the earlier white-on-teal pattern. The source records that pairing as the system's most important token decision: the brand hue (`#00CCBC`) stays and now wears dark text. The source body attributes the 2024 overhaul to Laura Soto Miranda and the Deliveroo Design team; its ledger records no separate URL for that attribution.

Deliveroo was founded in 2013 by Will Shu (CEO) and Greg Orlowski (CTO), both former Morgan Stanley analysts in London; Shu personally delivered on a bicycle for the first year. The 2016 rebrand by DesignStudio — the agency behind Airbnb's 2014 identity overhaul — introduced the current visual language: the abstracted "Roo Head" kangaroo icon, the Stratos typeface angled at six degrees to echo the Roo's nose, and the teal colour system, with over 400 assets produced to demonstrate the identity across ten global markets. The source ledger marks these founding and rebrand facts as widely documented public record, and its design-press entry also covers a 2023 identity refresh alongside the Rooute, the teal brand code, and the Roo Head geometry; what that refresh changed is unresolved here and stays absent. The source also states what the brand embraces — the joy of eating, the Roo character as a recognisable global icon, and a design system built around food photography as the primary persuasive surface — and what it refuses, which is carried in Avoid below. Reading the rebrand as a move from logistics utility to premium-yet-friendly food platform, and reading the PDS 2.0 overhaul as the brand "growing up" while staying food-first, are editorial interpretations in the source rather than Deliveroo statements of design intent.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These three task formulations are derived editorial implementation inferences from the source's own component roles and state contract; they are not Deliveroo-authored or a separately published UI specification.

- Enter an address and search restaurants or cuisines to find somewhere that delivers.
- Browse restaurant listings, open a menu, and add items to a basket to place an order.
- Track a placed order and reach support when a delivery issue occurs.
<!-- design-md:claim-end -->

### Audience

Grouping the audience this way, and the decision about the legacy persona section, are derived editorial implementation inferences from the recorded sources; they are not Deliveroo-authored or a separately published UI specification.

Use group-level scope only: people ordering restaurant food for delivery in the UK and the other markets the brand narrative names, plus the riders and restaurant partners the same narrative places at the centre of the identity. The legacy persona section is disclosed in its own source as fictional archetypes with illustrative names; those biographies are dropped, and no name, age, city, or segment profile from them is carried into this document or its provenance.

### Distinctive traits

Selecting and naming the following traits as distinctive is a derived editorial implementation inference from the recorded sources; it is not Deliveroo-authored or a separately published UI specification.

- Deliveroo Teal (`#00CCBC`) — the single saturated accent, used for CTAs, active states, ratings, and the Roo logo fill
- Deep Teal Ink (`#003733`) — the text colour on teal fills that carries the PDS 2.0 AA pairing
- Stratos — angled, bold, geometric display type as the kinetic brand voice in headlines
- Pill geometry (`border-radius: 9999px`) on primary buttons and search inputs
- White canvas (`#ffffff`) with tinted grey surfaces (`#f5f5f5`) for section separation
- Promo Gold (`#FFC100`) for deals and promotional elements only
- Dark mode canvas (`#121212`) for night-time ordering
- Food-first photography with consistent styling across restaurant cards

### Derived implementation principles

These eleven items are derived editorial implementation inferences from the recorded sources; they are not Deliveroo-authored or a separately published UI specification.

- Food is the hero. Typography, colour, and layout exist to frame photography rather than compete with it.
- One brand colour, maximum recognition. Teal means Deliveroo, is not shared with secondary accents, and stays reserved for action and active states; promo gold is a separate semantic.
- Accessible by system. PDS 2.0 encodes accessibility into the token pairing itself — `color.background.[ROLE]` plus `color.foreground.on.[ROLE]` — so a designer using semantic alias tokens does not assemble a non-AA combination by accident.
- Warmth over efficiency. This is the pleasure of food, not supply chain; copy that humanises ("Yasmine is on the way") over copy that abstracts ("Rider dispatched").
- Motion tells the story of delivery. The Rooute — the teal journey line — is the kinetic signature, so order tracking leads with the animated map path rather than logistics text.
- Use Deliveroo Teal (`#00CCBC`) with deep teal ink (`#003733`) text as the PDS 2.0 AA-compliant combination.
- Apply pill geometry (9999px radius) to primary buttons and search inputs; the source treats it as the system signature.
- Use Stratos italic/bold only for brand headline moments and let food photography carry the visual weight.
- Reserve Promo Gold (`#FFC100`) strictly for deals and promotional elements so it keeps meaning "discount".
- Use `#f5f5f5` surface grey for section segmentation without elevation.
- Use the Roo Head and "The Rooute" journey line motif as the brand graphic device in marketing.

### Avoid

The following avoidances are derived editorial implementation inferences from the source's Don't rules and its stated refusals; they are not Deliveroo-authored or a separately published UI specification.

- Do not use white text on teal (`#00CCBC`) backgrounds — deep teal ink (`#003733`) is the AA-compliant choice.
- Do not apply Promo Gold to non-promotional elements; it dilutes the deal signal.
- Do not use sharp corners on interactive elements; the source describes a pill-native system.
- Do not overload layouts with text — food photography is the primary selling surface.
- Do not use the Stratos headline treatment at body or caption sizes.
- Do not apply drop shadows above Level 2 to restaurant cards.
- Do not use teal for destructive or error states; error red (`#DF1619`) owns that semantic.
- Do not reach for the cold, efficient aesthetic of logistics — no dark enterprise UIs and no heavy grids.
- Do not adopt the aggressive urgency of discount food apps; gold belongs to promos rather than primary actions.
- Do not settle into the genericness of white-label delivery chrome.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Colour evidence classes

Grouping the palette by evidence class below is a derived editorial implementation inference from the source ledger; it is not Deliveroo-authored or a separately published UI specification. The classes are distinct and one does not vouch for another.

| Evidence class | Values |
|---|---|
| Official brand asset | `#00CCBC` — the SimpleIcons official Deliveroo SVG carries this fill; the source ledger corroborates it with brand sources and the official Deliveroo Design article |
| Official design-publication token | `#DF1619` — recorded in the official Deliveroo Design article as the `color.background.critical` token, together with the Seaweed / Anchovy / Tomato token naming and the PDS 2.0 AA approach |
| Corroborated secondary synthesis | `#00A99C` pressed state, `#003733` teal ink, `#121212` dark canvas, `#FFC100` promo gold, pill geometry, and food-first hierarchy — the ledger describes these as widely corroborated across multiple brand colour databases and design articles rather than read from a single official token export |
| Reconciled without individual attribution | `#ffffff`, `#1a1a1a`, `#4a4a4a`, `#767676`, `#f5f5f5`, `#e0e0e0` — the ledger reconciles the token set as a whole and names no separate source for these neutrals |
| Unresolved variant sampling | A teal-variant sampling conflict is recorded and resolved in favour of `#00CCBC`; the competing samples and the resolution reasoning stay in provenance |

### Semantic colour

**Primary**

- **Deliveroo Teal** (`#00CCBC`): primary brand colour — CTA button backgrounds, active tab indicators, rating stars, Roo logo fill, order tracking journey line. The single saturated action colour.
- **Teal Hover** (`#00A99C`): pressed/hover state for primary teal elements, slightly darker for depth.
- **Teal Ink** (`#003733`): deep teal for text on teal backgrounds; the PDS 2.0 AA-compliant text/icon colour on Seaweed fills.

**Brand**

- **Brand Teal** (`#00CCBC`): equivalent to primary — the "Seaweed" core token in the PDS token system.
- **Promo Gold** (`#FFC100`): reserved exclusively for promotional deals, voucher highlights, and offer CTAs; never a general accent.

**Canvas and surface**

- **Pure White** (`#ffffff`): default page and card background.
- **Surface Grey** (`#f5f5f5`): tinted surface for section backgrounds, input fields, ghost containers.
- **Dark Canvas** (`#121212`): night/dark mode background — the warm near-black used when system dark mode is active.

**Text**

- **Heading** (`#1a1a1a`): primary headings and strong labels; near-black, not pure black.
- **Body** (`#4a4a4a`): standard body copy, descriptions, secondary labels.
- **Muted** (`#767676`): captions, metadata, placeholder text; the source records it as passing AA on white.
- **Teal Ink on Teal** (`#003733`): labels and icons on teal fill.

**Status**

- **Error / Critical** (`#DF1619`): system error state, `color.background.critical` token.
- **Hairline** (`#e0e0e0`): borders, dividers, card outlines.

### Spacing

Base unit 8px. Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px. The source names these steps `xs` 4, `sm` 8, `md` 12, `base` 16, `lg` 24, `xl` 32, `xxl` 48, and `section` 64.

### Shape

| Step | Value | Use |
|---|---|---|
| None | 0px | Dividers, horizontal rule elements |
| Small | 4px | Fine-grained UI labels |
| Standard | 8px | Cards, image containers, dropdowns — the workhorse |
| Large | 16px | Bottom sheet containers, modal cards |
| Full | 9999px | All buttons, search inputs, status pills, toggles |

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Surface sections, inline text, tinted containers |
| Subtle (Level 1) | `0px 2px 8px rgba(0,0,0,0.10)` | Restaurant cards, standard product cards |
| Elevated (Level 2) | `0px 4px 16px rgba(0,0,0,0.14)` | Floating panels, sticky headers, bottom sheets |
| Sheet (Level 3) | Large shadow plus scrim overlay | Full-screen order confirmation sheets, checkout modals |

Level 3 is described qualitatively in the source; its exact shadow values are unresolved and stay absent. The following shadow reading is a derived editorial implementation inference from the recorded sources; it is not Deliveroo-authored or a separately published UI specification: neutral `rgba(0,0,0)` shadows rather than brand-coloured ones keep focus on food photography rather than UI chrome, and the single-layer approach reads as a warmer consumer posture than a technical or fintech brand; cards lift just enough to feel tappable without competing with the food imagery above them.

### Motion

The whole motion contract below is a derived editorial implementation inference from the recorded sources; it is not Deliveroo-authored or a separately published UI specification. The source ledger attributes colour, type, and narrative facts to named sources and attributes nothing to motion.

**Durations**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle state commits, selection ticks |
| `motion-fast` | 100ms | Button press feedback, tap highlights |
| `motion-standard` | 200ms | Card transitions, sheet appearances, tab switches |
| `motion-deliberate` | 300ms | Full-screen state changes, order confirmation reveal |
| `motion-slow` | 500ms | Rooute journey line animation, map path drawing |

**Easing roles**

Four named roles exist. Their exact curve values are unresolved here and stay absent. The source ledger attributes no curve to Deliveroo, and two of the four values the legacy document carries — for `ease-exit` and `ease-spring` — are byte-identical to the example curves in the legacy authoring template, which that template now labels non-brand implementation defaults. Reading them as re-injected template examples rather than measured Deliveroo tokens is a derived editorial implementation inference; it is not Deliveroo-authored or a separately published UI specification. The four exact strings are kept in provenance.

- `ease-enter` — cards arriving, bottom sheets sliding up
- `ease-exit` — dismissals, overlay closing
- `ease-spring` — order confirmation pop animation, celebratory moments only
- `ease-standard` — standard two-way transitions

**Signature motions**

1. **The Rooute journey line.** Order tracking draws the teal path from restaurant to delivery address using `motion-slow` with `ease-enter`, giving the rider's route a visual narrative. The source calls this the signature animated brand moment.
2. **Order confirmation burst.** The full-screen success state uses `ease-spring` on the Roo illustration at `motion-deliberate` — the one place a celebratory overshoot applies.
3. **Restaurant card entry.** Cards entering a grid use `motion-standard` with `ease-enter` and a 4px fade-from-below, staggered by 40ms per card for a cascade.

**Reduced motion**

Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`. The Rooute does not animate — the path appears immediately. The order confirmation celebration becomes a static illustration.

**Promotion rule.** The following gate is a derived editorial implementation inference from the evidence boundary; it is not Deliveroo-authored or a separately published UI specification. A motion value may be promoted to a Deliveroo token only after component-specific computed observation establishes all five evidence kinds — transition properties, animation name, duration, easing, and reduced-motion behavior — for that component. A single confirmed curve does not satisfy this gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

Grouping the type record by evidence class below, and the boundary each class draws, are derived editorial implementation inferences from the recorded sources; they are not Deliveroo-authored or a separately published UI specification. The classes are distinct and one does not vouch for another.

| Evidence class | Resolution |
|---|---|
| Official product-use | The source ledger includes no published Deliveroo typography specification; the type facts below come from a type-attribution record and design press. |
| Custom / commissioned face | Stratos by Production Type, customised for Deliveroo, introduced in the 2016 DesignStudio rebrand and angled at 6° to echo the Roo Head geometry. |
| Type-attribution record | The Fonts In Use entry for Deliveroo confirms Stratos (Production Type) and also confirms Adelle. The legacy body assigns Adelle no role, so none is assigned here. |
| Live computed surface-use | None. The geo-block above prevented any live computed reading of either brand or product surface. |
| Fallback stack | Body and UI text uses `system-ui, -apple-system, sans-serif`. This is a platform fallback stack, not a Deliveroo brand face, and it must not be presented as one. |
| License | The ledger records no licence grant for Stratos or Adelle. A Production Type licence question is unresolved and stays absent. |

### Family

- **Display:** Stratos by Production Type (customised for Deliveroo). Bold, italic, angled at 6°. Used for hero headlines and brand moments.
- **Body / UI:** system sans-serif stack `system-ui, -apple-system, sans-serif`. The source's stated reason is that it stays fast and legible across platforms without custom font loading.
- Do not substitute another family for Stratos when Stratos is unavailable; omit the display treatment instead. This restriction is a derived editorial implementation inference applying the unknown-absence rule in Governance; it is not Deliveroo-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Notes |
|---|---|---:|---:|---:|---:|---|
| Display Hero | Stratos | 48px | 700 | 1.10 | -0.5 | Hero headlines, Stratos Bold, 6° angled |
| Display Large | Stratos | 36px | 700 | 1.15 | -0.3 | Section headlines |
| Sub-section | Stratos / System | 24px | 600 | 1.20 | — | Sub-section heads, card titles, feature heads |
| Body Large | System | 18px | 400 | 1.50 | — | Feature descriptions |
| Body | System | 16px | 400 | 1.50 | — | Standard reading text |
| Button | System | 16px | 600 | 1.00 | — | CTA button label |
| Caption | System | 14px | 400 | normal | — | Metadata, captions, secondary labels |
| Tag / Badge | System | 12px | 400–600 | normal | — | Tags, badges, fine print, status pills |

The legacy hierarchy table writes the Display Hero tracking as `-0.5px` alongside the 6° italic angle; the token record carries the same values unitless.

### Typography rules

These readings are derived editorial implementation inferences from the recorded sources; they are not Deliveroo-authored or a separately published UI specification.

- **Stratos for brand voice.** The custom typeface appears only at headline and brand scales; its angled geometry and bold weight carry the energetic personality.
- **System font for function.** UI text, form labels, body copy, and navigation use the system sans.
- **Pill geometry and type pairing.** The pill CTA's full-radius curves soften the angular Stratos headlines, creating a push-pull between energy in headlines and approachability in buttons.
- **Food-forward hierarchy.** Typography defers to food photography; headlines introduce context, photography sells the experience.

### Assets

The asset-authority boundaries below are derived editorial implementation inferences from the recorded sources; they are not Deliveroo-authored or a separately published UI specification.

- **Logo.** The abstracted Roo Head kangaroo icon. The catalog record points at the SimpleIcons slug `deliveroo`, whose official SVG fill is `#00CCBC`. No distributed Deliveroo brand-asset package or licence grant is recorded, so none is claimed.
- **Brand graphic device.** The Rooute — the journey line tracing the rider's path from restaurant to door — is used as a marketing graphic device.
- **Photography.** Food photography and restaurant imagery are first-party catalog content and the primary persuasive surface; do not replace them with invented brand-colour decoration.

<!-- design-md:section components-states -->
## 4. Components & States

### Evidence boundary

The applicability, interaction-kind, and evidence-class judgments in this section — including which recorded treatment is held back from a state row and which component is given no interaction kind at all — are derived editorial implementation inferences from each control's product role and from the capture boundary; they are not Deliveroo-authored or a separately published UI specification.

Every component record below is source-recorded rather than measured on a live surface. Applicability follows control meaning, not record completeness: `default` and `focus-visible` apply to every interactive control, a state that is meaningful for the control stays applicable with its visual treatment absent when the source assigns none, and `not-applicable` is used only where the role itself carries no such state. State coverage is not claimed complete. Where the source records a state treatment, it is named on the component. Values labelled *legacy prompt-block guidance* appeared only in the source's example-prompt block; they are retained as source guidance, not as separately measured proof.

### Primary CTA — teal pill

- Primitive type: button; Kind: interactive
- Background `#00CCBC`; text `#003733`; radius 9999px; padding 14px 24px; font 16px system-ui weight 600
- Source-recorded hover: background `#00A99C`
- Minimum height 52px (14px vertical padding plus 24px text)
- Use: "Order now", "Add to basket", "Sign up" — the primary user-flow action
- Legacy prompt-block guidance: full-width on mobile

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source default treatment |
| hover | applicable | Pointer-web button; source records the `#00A99C` background |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | An order action can be unavailable; visual treatment omitted |
| loading | applicable | Placing an order is an asynchronous submission; visual treatment omitted |
| error | applicable | The source contract includes an order-failed recovery with a "Try again" teal CTA |
| success | applicable | The source contract includes an order-placed confirmation |

### Secondary — white outlined pill

- Primitive type: button; Kind: interactive
- Background `#ffffff`; text `#1a1a1a`; border 1.5px solid `#e0e0e0`; radius 9999px; padding 14px 24px; font 16px weight 600
- Use: "View menu", "See all restaurants" — secondary or ghost action

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source default treatment |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | A secondary destination can be unavailable; visual treatment omitted |
| loading | not-applicable | A navigation action hands off to the destination surface rather than presenting in-button progress |
| error | not-applicable | The control submits nothing that can fail validation |
| success | not-applicable | Navigation presents no completion feedback in this contract |

### Promo — gold pill

- Primitive type: button; Kind: interactive
- Background `#FFC100`; text `#1a1a1a`; radius 9999px; padding 14px 24px; font 16px weight 600
- Use: deal and voucher CTAs only — "Get 20% off", "Claim deal"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source default treatment |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | A voucher can be expired or unavailable; visual treatment omitted |
| loading | applicable | Claiming a deal is an asynchronous submission; visual treatment omitted |
| error | applicable | A claim can be rejected; visual treatment omitted |
| success | applicable | A claim can complete; visual treatment omitted |

### Search input — address and restaurant search

- Primitive type: input; Kind: interactive
- Background `#f5f5f5`; border 1.5px solid `#e0e0e0`; radius 9999px; padding 12px 16px; font 16px weight 400; placeholder `#767676`
- Source-recorded focus treatment: 1.5px solid `#00CCBC`. The source records this as a generic focus observation; it is a different evidence class from `focus-visible` and is not promoted into the row below.
- Legacy prompt-block guidance: magnifier icon in `#4a4a4a`, left-aligned
- Use: the primary discovery surface — address entry and restaurant or cuisine search

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source default field treatment |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive input; the generic focus observation above is a different evidence class, so no treatment is promoted here |
| disabled | applicable | The discovery field can be unavailable; visual treatment omitted |
| loading | applicable | Address and restaurant lookup is asynchronous; the source contract includes a restaurant-list loading state |
| error | not-applicable | The field answers with results or the empty-address screen state rather than in-field validation failure |
| success | not-applicable | Query entry presents no field-level completion state in this contract |

### Restaurant card

- Primitive type: card; Kind: interactive — the source treats the card as a full-bleed tappable surface, not just its text area
- Background `#ffffff`; radius 8px; shadow `0px 2px 8px rgba(0,0,0,0.10)`; 16px internal padding
- Anatomy: hero food image, restaurant name, rating stars, delivery ETA, category tags
- Legacy prompt-block guidance: restaurant name 18px system-ui weight 600 in `#1a1a1a`; rating stars in `#00CCBC`; an ETA pill on `#00CCBC` with `#003733` text at 12px / 600; a category pill on `#f5f5f5` with `#1a1a1a` text at 12px / 400
- Source-recorded disabled treatment (out of delivery zone): reduced-opacity overlay `rgba(255,255,255,0.6)`, "Not in your area" label in `#767676`, teal elements muted to `#b3e8e5`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source default listing treatment |
| hover | applicable | Pointer-web tappable surface; visual treatment omitted |
| focus-visible | applicable | Interactive surface; visual treatment omitted |
| disabled | applicable | The source records the out-of-delivery-zone treatment above |
| loading | applicable | The source records a skeleton card at exact final dimensions |
| error | not-applicable | A listing entry presents no failure of its own; order and delivery failures are screen-level states |
| success | not-applicable | Opening a listing presents no completion feedback |

### Promo card

- Primitive type: card
- Background `#FFC100`; text `#1a1a1a`; radius 8px
- Use: promotional deal highlights; the gold background distinguishes it from a regular restaurant card
- Legacy prompt-block guidance for the deal card: headline 18px weight 700, subtext 14px weight 400, and a child CTA pill on `#1a1a1a` with `#ffffff` text at 9999px radius
- Interaction kind and applicability map omitted. The source establishes no control role for the container itself, and a child CTA does not make the container a proven control.

### Category card

- Primitive type: card; Kind: interactive — the source role is a cuisine category selector
- Background `#f5f5f5`; radius 8px; presented with an icon
- Use: cuisine category selection (Pizza, Sushi, Burgers) in horizontally scrolling chip rows

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source default selector treatment |
| hover | applicable | Pointer-web selector; visual treatment omitted |
| focus-visible | applicable | Interactive selector; visual treatment omitted |
| disabled | applicable | A cuisine category can be unavailable for an address; visual treatment omitted |
| loading | not-applicable | Selecting a category hands off to a listing surface that carries the loading state |
| error | not-applicable | Selection submits nothing that can fail |
| success | not-applicable | Selection presents no completion feedback |

### Status pill — ETA and order status

- Primitive type: badge; Kind: non-interactive; reason: it labels delivery ETA and order status and carries no action
- Background `#00CCBC`; text `#003733`; radius 9999px; padding 4px 10px; font 12px weight 600
- Use: delivery ETA on restaurant cards ("25–35 min") and order status in the tracking view

### Category tag

- Primitive type: badge; Kind: non-interactive; reason: it labels a restaurant category and carries no action
- Background `#f5f5f5`; text `#1a1a1a`; radius 9999px; padding 4px 10px; font 12px weight 400
- Use: restaurant category labels ("Asian", "Fast food", "Healthy")

### Bottom navigation tab

- Primitive type: tab; Kind: interactive
- Inactive text `#4a4a4a`; active text `#00CCBC`; active indicator 2px bottom border `#00CCBC`; radius 0px; font 16px weight 400
- Use: app bottom navigation — Home, Orders, Account, Offers. Items occupy the full thumb-zone height with icon and label.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source active and inactive treatments |
| hover | applicable | Pointer-web tab on the desktop navigation form; visual treatment omitted |
| focus-visible | applicable | Interactive tab; visual treatment omitted |
| disabled | applicable | A destination can be unavailable; visual treatment omitted |
| loading | not-applicable | The destination surface carries the list loading state; the tab itself presents no progress |
| error | not-applicable | Switching destinations submits nothing that can fail |
| success | not-applicable | Switching destinations presents no completion feedback |

### Filter toggle

- Primitive type: toggle; Kind: interactive
- On state background `#00CCBC`; radius 9999px
- Use: dietary and preference filters (Vegetarian, Halal, Gluten-free). Minimum touch target 44×24px.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source records the on-state treatment |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A dietary filter can be unavailable for a listing set; visual treatment omitted |
| loading | not-applicable | The source assigns `motion-instant` to toggle state commits, so the control resolves without a pending phase |
| error | not-applicable | A preference flip submits nothing that can fail validation |
| success | not-applicable | The committed on-state is the feedback; no separate success state exists |

### Source state contract

The rows below are the source's own state treatments, retained as recorded. They are design recipes written in the source rather than measured live treatments, and reading them as a complete interaction suite would overstate them. Treating them as source guidance rather than proof is a derived editorial implementation inference from the capture boundary; it is not Deliveroo-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| Empty (no restaurants near address) | White canvas. Friendly Roo illustration. Single sentence in `#1a1a1a` at 18px: "We're not in your area yet." Teal CTA: "Try a different address". |
| Empty (basket, nothing added) | Muted `#767676` copy at 16px: "Your basket is empty." Teal link: "Browse restaurants". |
| Loading (restaurant list) | Skeleton cards at exact final dimensions — image placeholder plus two text line skeletons plus badge skeleton. `#f5f5f5` shimmer at 1.4s. |
| Loading (map / order tracking) | Animated Roo Head or teal journey-line pulse on the map canvas. Previous estimated time displayed while the new ETA loads. |
| Error (order failed) | Red-tinted banner at top (`#DF1619` border). Empathetic message plus "Try again" teal CTA. Never generic — states what went wrong (payment declined / restaurant unavailable). |
| Error (delivery issue) | In-app chat surface with a proactive message from Deliveroo. Teal CTA: "Contact rider" or "Report issue". |
| Success (order placed) | Full-screen confirmation with animated Roo. "Order confirmed! 🎉" in Stratos bold. ETA pill badge in teal. |
| Success (review submitted) | Brief inline confirmation. 3s auto-dismiss toast: "Review submitted. Thanks!" |
| Skeleton (restaurant card) | `#f5f5f5` image block at full card width plus two skeleton text lines. 8px radius maintained. |
| Disabled (out of delivery zone) | Restaurant card with reduced opacity overlay (`rgba(255,255,255,0.6)`) and "Not in your area" label in `#767676`. Teal elements are muted to `#b3e8e5`. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Grid and container

- Mobile-first: single-column scroll with horizontal-scrolling category and restaurant rows.
- Desktop: maximum content width about 1140px with a 3–4 column restaurant grid.
- Hero: full-width address entry bar with the pill search input as the central CTA.
- Category carousels: horizontally scrolling chip rows for cuisine selection.
- Restaurant cards use 16px internal padding; section headers take 24–32px margins.

### Breakpoints

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single-column layout, horizontal-scroll rows, bottom nav |
| Tablet | 640–1024px | 2-column restaurant grid, larger hero |
| Desktop | 1024–1280px | 3–4 column restaurant grid, sidebar filters |
| Large Desktop | >1280px | Centred content, max-width 1140px, expanded filters |

### Touch targets

- Primary buttons: 52px minimum height (14px vertical padding plus 24px text).
- Bottom nav items: full thumb-zone height, icon plus label.
- Restaurant cards: full-bleed tappable surface, not just the text area.
- Filter toggles: 44×24px minimum touch target.

### Collapsing strategy

- Hero address bar: full-width pill input maintained at all sizes.
- Restaurant grid: 1 → 2 → 3 → 4 columns across breakpoints.
- Category carousel: horizontal scroll maintained on mobile, wrapping to a 2-column grid on desktop.
- Stratos headlines: scale down proportionally, weight stays bold.
- Bottom navigation: transforms to sidebar or top nav on desktop.

### Whitespace

These three readings are derived editorial implementation inferences from the recorded sources; they are not Deliveroo-authored or a separately published UI specification.

- **Food-first breathing room.** Generous vertical spacing between sections lets food photography dominate without competition.
- **Surface segmentation.** `#f5f5f5` grey bands separate content sections without elevation — flat and clean.
- **Pill rhythm.** The repeated 9999px pill on buttons and inputs creates a curvilinear cadence against the more angular Stratos headlines.

The breakpoint, touch-target, and collapse figures above are source-recorded design rules. No live viewport measurement backs them; reading them as intended behaviour rather than as verified responsive proof is a derived editorial implementation inference from the capture boundary, and it is not Deliveroo-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The voice characterization below is a derived editorial implementation inference from the recorded sources; it is not Deliveroo-authored or a separately published UI specification.

The voice reads as warm, direct, and food-obsessed — a cheerful guide to the pleasure of eating rather than a clinical logistics system. Copy is short, action-oriented, and hungry: the language of craving ("You deserve tonight off", "Find the good stuff") rather than the language of efficiency ("Delivery in under 30 minutes"). The kangaroo mascot sets the register — spirited, approachable, with a subtle British wit. Menus and restaurant cards use food-first language; operational copy for tracking and payment stays brief and reassuring.

| Context | Tone |
|---|---|
| Hero / marketing | Warm, celebratory. "Restaurants you love, delivered to your door." |
| CTA buttons | Direct, imperative. "Order now", "Start your order", "Add to basket". |
| Empty states | Encouraging, not apologetic. "No restaurants near you yet — try a different address." |
| Order tracking | Calm, reassuring. "Yasmine is on her way with your order." |
| Error / issue | Empathetic, action-forward. "Something went wrong. Let's try that again." |
| Push notifications | Conversational, urgent. "Your food is 5 minutes away! 🛵" (emoji permitted) |
| Promo / deals | Excited, punchy. "20% off your next order. Don't wait." |

### Copy evidence classes

Keeping these three classes apart is a derived editorial implementation inference from the source's own labelling; it is not Deliveroo-authored or a separately published UI specification.

| Sample | Class |
|---|---|
| "How do you show customers when their order's arriving?" | Verified hero header on `deliveroo.design`, checked 2026-06-22 |
| "Restaurants you love, delivered to your door" | Brand tagline, widely documented public fact |
| "Your order is on its way" | Illustrative tracking copy — an editorial interpretation, not verified live wording |

Every other string in this section, including the tone-table examples, sits in the third class: it illustrates register rather than quoting verified product microcopy.

**Forbidden register:** corporate logistics language ("fulfilment", "last-mile"), aggressive urgency ("Order NOW before it's gone!"), impersonal transactional tone, and technical jargon in customer-facing copy.

**Locale.** Reading the register below as British English is a derived editorial implementation inference from the source's UK framing and its "subtle British wit" note; it is not Deliveroo-authored or a separately published UI specification. The record covers the UK market and that register; the brand narrative names ten global markets, but no per-market copy, currency, address, or expansion behaviour is recorded, so no locale profile is claimed beyond the UK surface.

<!-- design-md:section governance -->
## 7. Governance

The governance judgments in this section are derived editorial implementation inferences of this reconstruction; they are not Deliveroo-authored or a separately published UI specification.

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

- any live computed product-surface reading — `deliveroo.co.uk` and `design.deliveroo.net` remain geo-blocked from the recording IP
- exact easing curve values for `ease-enter`, `ease-exit`, `ease-spring`, and `ease-standard`, plus per-component transition-property, animation-name, and reduced-motion evidence
- the Level 3 sheet shadow values and the scrim overlay colour
- component-specific hover, focus-visible, disabled, loading, error, and success treatments beyond the ones named above
- the role, if any, of Adelle in the current type system
- licence grants for Stratos, Adelle, and any distributed Deliveroo brand asset
- dark-mode role values beyond the `#121212` canvas
- per-market locale behaviour across the ten markets the narrative names
- the individual attribution behind the reconciled neutral palette values
