# Kia Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Kia (기아) is the Korean automotive brand whose first-party Korea site is at `https://www.kia.com/kr/`. This contract covers the two first-party KR product surfaces the source inspected for tokens on 2026-06-22: the homepage at `https://www.kia.com/kr/` and the EV6 vehicle page at `https://www.kia.com/kr/vehicles/ev6/`. The global brand-identity page at `https://worldwide.kia.com/en/brand/our-brand/brand-identity/who-we-are` and the Korea newsroom at `https://www.kia.com/kr/discover-kia/news/list` are named brand sources for identity and newsroom context; they do not supply the computed interface tokens below. Every value stays attached to the surface that established it. Reading those two inspected pages as this contract's token surfaces, keeping values attached to the surface that established them, and treating the brand-identity and newsroom URLs as named sources that do not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Kia-authored or a separately published UI specification.

The source records Kia's digital presence since the 2021 global rebrand ("Movement that inspires") on a pure white canvas (`#ffffff`, token-set `tokens.colors.canvas`) broken only by a single dominant near-black (`#05141f`, token-set `tokens.colors.primary`) — a deep charcoal-navy that serves simultaneously as primary text, button backgrounds, and the brand's main interactive surface. There is no signature saturated accent color in Kia's web UI. The proprietary typeface system — **Kia Signature** — is recorded as the identity's most distinctive element: **Kia Signature Bold** at display sizes and for all CTAs/headings, and **Kia Signature Regular** for navigation, body, and UI labels, both falling back to `Arial, sans-serif, Hevetica`. All buttons use `border-radius: 0px`; vehicle cards use a restrained `15px` radius; depth comes from flat contrast rather than shadows. The hex values, family names, 2021 rebrand line, 0px / 15px radii, and the no-saturated-accent record are the source's own. The characterizations built on them — a study in automotive restraint; an identity that lets the vehicles breathe rather than compete with the interface chrome; closer to a high-end automotive showroom than a typical Korean consumer site; an athletic, engineered feel with normal tracking; automotive-grade precision; corners that say "engineered," not "consumer app."; the interface stepping back to frame the vehicle photography — are a derived editorial implementation inference from the verified surfaces; they are not Kia-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Kia was founded in **1944** in Korea as a manufacturer of steel tubing and bicycles, evolving through motorcycles into automobile production in the 1960s. The name "기아(起亞)" means "rising from Asia" — a founding ambition that still shapes the brand's confidence. The source HTML comment writes the same etymology as "Rising from Asia". After surviving the 1997 Asian financial crisis through acquisition by Hyundai Motor Group, Kia spent two decades building volume before executing one of Korea's most deliberate automotive brand transformations. The pivotal moment was the appointment of **Peter Schreyer** as Chief Design Officer in 2006 — the "tiger nose" grille, clean silhouettes, and design-led identity that followed gave Kia genuine global design credibility. The transformation accelerated in **January 2021** when Kia unveiled a new logo (the flowing "KIA" signature), the repositioned brand identity, and the "Movement that inspires" tagline — signaling Kia's shift from a value-focused car brand into a sustainable mobility company. The rebrand was one of the most publicly discussed automotive identity launches of the decade (famously confused with "KN" in social media — Kia addressed it by leaning into the modern, connected letterforms). The design philosophy — **"Opposites United"** — guides both product and digital surfaces: the interplay of opposites (bold/calm, wild/restrained, natural/technical) drives a creative tension that refuses to let Kia settle into one lane. For digital, this means the ultra-clean white canvas paired with the weighty charcoal-navy, the sharp 0px buttons coexisting with soft 15px card curves, and global English vehicle names ("The 2026 EV6") on a primarily Korean-language site. The years 1944 / 1960s / 1997 / 2006 / January 2021, the steel-tubing-and-bicycles founding, the motorcycle-to-automobile evolution, the "기아(起亞)" / "rising from Asia" / "Rising from Asia" etymology, the Hyundai Motor Group acquisition, Peter Schreyer and the tiger-nose grille, the flowing "KIA" signature, "Movement that inspires," the "KN" social-media episode, "Opposites United," and that closing digital-surface sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-rebrand narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and classifying them as surface-or-control outcomes rather than fictional biographies, is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification. Each names a surface or label the source records. They do not come from the source's persona section.

- Browse the Best Kia vehicle lineup on `https://www.kia.com/kr/`.
- Open a vehicle page such as `https://www.kia.com/kr/vehicles/ev6/`.
- Use the recorded CTAs — "견적 내기", "바로가기", "자세히 보기", "렌터카 견적 내기".
<!-- design-md:claim-end -->

### Audience

No named or demographic personas are invented. The source labels its named figures as fictional archetypes informed by publicly observable Kia user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records is the audience it names at a group level: Korean car buyers, EV early adopters, family SUV buyers. Dropping the fictional biographies rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not Kia-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not Kia-authored or a separately published UI specification.

- Kia Signature Bold for all display headings and CTAs — proprietary automotive typeface
- Deep charcoal-navy (`#05141f`) as the single primary color (text, buttons, nav surfaces)
- Pure white canvas with `#f8f8f8` subtle surface for card/section separation
- Zero-radius (`0px`) buttons — sharp, engineered, automotive
- 15px card radius — the only soft curve in the system
- No saturated accent color — monochrome identity with steel-grey (`#697278`) secondary
- Full-bleed vehicle photography as the hero — UI frames the car, not vice versa
- Flat shadows: `none` throughout; depth via background contrast only

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Kia-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each. "Opposites United" and "Movement that inspires" are first-party brand lines the source attributes to Kia; every *UI implication* below is the source's own editorial reading.

1. **Design is the product.** Kia's "Opposites United" philosophy treats design as the root of everything — not styling, but the tension between contrasting ideas that produces emotional resonance. *UI implication:* every layout decision should carry intentional contrast (dark/light, sharp/soft, minimal/bold).
2. **Movement as purpose.** "Movement that inspires" is not just about cars moving — it's about inspiring people to move toward a better life. *UI implication:* CTAs frame an invitation to experience, not just a transactional step. "견적 내기" leads somewhere meaningful.
3. **Premium restraint, not premium excess.** Kia's premium signal comes from what is *not* there — no shadows, no accent colors, no decorative flourishes. *UI implication:* resist adding elements; every component should earn its presence.
4. **The vehicle is the content.** Digital surfaces exist to showcase the vehicle, not to be design artifacts themselves. *UI implication:* vehicle photography is always primary; UI chrome is always secondary.
5. **Engineered confidence.** 0px button radius is not a mistake — it's a deliberate statement that Kia's products are built with precision. *UI implication:* sharp geometric forms throughout; no pill shapes.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Kia-authored or a separately published UI specification.

- Use Kia Signature Bold for all CTAs, headings, and vehicle names — it's the brand voice
- Use `#05141f` (charcoal navy) as the primary text and button color — not pure black
- Use sharp 0px radius on all buttons — Kia's UI is engineered and orthogonal
- Reserve the 15px radius for vehicle cards only — the system's single soft curve
- Use full-bleed photography as the hero; the UI frames the vehicle, not the reverse
- Use the two-CTA pattern (dark primary + white secondary) on hero sections
- Keep the palette monochrome — no saturated accent colors in UI chrome

### Avoid

The source states these six as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Kia-authored or a separately published UI specification.

- Add a saturated accent color (red, orange, blue) to UI elements — Kia's identity is monochrome
- Use pill-shaped or large-radius buttons — 0px sharp corners are the automotive design signature
- Use drop shadows for card elevation — flat contrast and hairlines only
- Set display text in Kia Signature Regular — Bold is required at heading sizes
- Use positive or extreme negative letter-spacing — Kia runs at normal tracking across sizes
- Replace the vehicle photography with illustration — the real car is the design element

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as two keys that happen to share `#ffffff`, keeping `tokens.colors.primary-dark` `#010e18` off `tokens.colors.dark-bg` `#01141b`, keeping `tokens.colors.muted` `#697278` off `tokens.colors.muted-alt` `#79838b`, and attaching every role to the surface the source recorded rather than relabeling an observed KR-web value as a house palette for every Kia surface, are derived editorial implementation inferences from the verified surfaces; they are not Kia-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Primary

- **Kia Charcoal Navy** (`#05141f`): The single dominant color — headings, button backgrounds, nav text. A very dark desaturated blue-navy that reads as near-black with depth. Used instead of pure black to maintain warmth and brand character. Token-set path `tokens.colors.primary`.
- **Dark Surface** (`#010e18`): Darkest variant for dark-mode hero sections. Token-set path `tokens.colors.primary-dark`.
- **Dark banner** (`#01141b`): Also seen as `#01141b` in the EV6 vehicle page dark banner. Token-set path `tokens.colors.dark-bg`. Claim surface: EV6 vehicle page.
- **Pure White** (`#ffffff`): Page background, card surfaces, button text on dark backgrounds. The system's dominant surface. Token-set path `tokens.colors.canvas`.

Surface and border

- **Surface Grey** (`#f8f8f8`): Subtle tinted background for alternating sections and light surface elements. Token-set path `tokens.colors.surface`.
- **Border Grey** (`#dadce0`): Card outlines (Best Kia vehicle cards) — thin, clean separation. Token-set path `tokens.colors.border`.

Text hierarchy

- **Primary Text** (`#05141f`): Headings, nav links, strong labels, button text on white. Same hex as `tokens.colors.primary`; the role name is the source's §2 label.
- **Body Slate** (`#37434b`): Secondary body copy and descriptions. Token-set path `tokens.colors.body`.
- **Steel Grey** (`#697278`): Tertiary text, inactive tabs, muted labels. Token-set path `tokens.colors.muted`.
- **Steel Alt** (`#79838b`): Alternate muted text for fine print. Token-set path `tokens.colors.muted-alt`.

On-dark

- **On-Primary** (`#ffffff`): Text and icons on the dark `#05141f` button and nav backgrounds. Token-set path `tokens.colors.on-primary`.

`tokens.colors.canvas` and `tokens.colors.on-primary` both write `#ffffff`. They stay two keys. `tokens.colors.primary-dark` `#010e18` is not `tokens.colors.dark-bg` `#01141b`. `tokens.colors.muted` `#697278` is not `tokens.colors.muted-alt` `#79838b`.

The YAML token note, kept as the facts it names: primary = deep charcoal-navy (`#05141f`) used for text, button bg, nav surfaces. Canvas is pure white. Accent steel (`#697278`) for secondary text. No saturated brand accent color — Kia's identity uses monochrome restraint.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 32` · `xxl: 48` · `section: 64`.

The source restates the same steps as a scale of 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px+, and names 8px as the base unit. CTA button padding is exactly 16px 24px. `tokens.spacing.sm: 8` is not the named 8px base unit as a second key — the base-unit sentence is the source's §5 wording of the same scale. `tokens.spacing.md: 12` is not a radius. `tokens.spacing.base: 16` is not `tokens.typography.nav.size` `16`, is not `tokens.typography.body.size` `16`, and is not the 16px in the CTA padding `16px 24px`. `tokens.spacing.lg: 24` is not the 24px in that same CTA padding. `tokens.spacing.section: 64` is the YAML section step; the source's "64px+" names the vertical rhythm between major content blocks. Keeping those unitless spacing steps on their own keys rather than rewriting them as a grid, and keeping those writings of `4`, `8`, `12`, `16`, `24`, `32`, `48`, and `64` on their own records, are derived editorial implementation inferences from the verified surfaces; they are not Kia-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 0` · `md: 0` · `lg: 15` · `full: 9999`.

The source's named radius uses, kept on their own rows:

- Zero (`0` / `0px`): all interactive buttons — sharp, engineered, automotive. Token-set keys `tokens.rounded.sm` and `tokens.rounded.md`. YAML `button-primary` / `button-secondary` / `button-white-outlined` / `badge-model` also record `radius: "0px"`.
- Card (`15` / `15px`): vehicle lineup cards only — the system's single soft curve. Token-set key `tokens.rounded.lg`. YAML `card-vehicle.radius` is `15px`.
- Full (`9999`): token-set key `tokens.rounded.full: 9999`.
- Circle (`50%`): floating chat button. This is a body-named radius in source §5 / §8, not a token-set key and not `tokens.rounded.full: 9999`.

`tokens.rounded.sm: 0` and `tokens.rounded.md: 0` stay two keys. `tokens.rounded.lg: 15` is a radius step. It is not a spacing step. `tokens.rounded.full: 9999` stays the unitless full step. It is not the chat button's `50%`, and it is not a type size. The chat `50%` stays on that control. Neither was chosen over the others as a replacement. Keeping `0`, `0`, `15`, and `9999` as four keys, and keeping the chat `50%` on its own record, are derived editorial implementation inferences from the verified surfaces; they are not Kia-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, text, buttons |
| Surface (Level 1) | `#f8f8f8` background shift | Section separation without elevation |
| Outline (Level 2) | `1px solid #dadce0` | Vehicle card outlines |
| Dark Contrast (Level 3) | `#05141f` background | CTAs, dark hero sections — depth via color, not shadow |

Token-set path `tokens.shadow.none` with value `none`. Live inspection confirmed `box-shadow: none` across all primary UI elements — nav, hero CTAs, vehicle cards, buttons. Depth is communicated through full-bleed dark (`#05141f`) sections alternating with white, and through the vehicle photography itself. The four-level table, the `none` token, and the inspected `box-shadow: none` list are the source's own. Reading that shadow-free, photography-first treatment as making the digital experience feel like a clean automotive brochure rather than an app is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live-extract pass. The motion contract below sits outside that attribution: the source names four duration tokens, three easing roles, a reduced-motion rule, and a signature motion, and assigns no computed-sample source to the three cubic-bezier values. The durations, easing roles, motion rules, and signature motion below, and the omission of the three untraceable curve values, are therefore a derived editorial implementation inference from the verified surfaces; they are not Kia-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover states, nav link underlines, tab indicator |
| `motion-standard` | 200ms | Mega-menu open/close, card hover, CTA press |
| `motion-slow` | 320ms | Hero image transitions, page-level reveals |
| `motion-cinematic` | 600ms+ | Full-bleed vehicle video/image crossfades |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) match the documented template re-injection path and are not traceable to Kia-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Role | Use |
|---|---|
| `ease-enter` | Arriving — panels, mega-menus, cards |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate, and refusing a partial confirmation, is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

Motion rules, as the source states them:

- Kia's site motion is quiet and functional — befitting an automotive brand that signals reliability.
- Hero carousels and vehicle image transitions use `motion-cinematic` with linear or gentle ease-in-out for a polished brochure feel.
- Navigation mega-menus appear with `motion-standard`.
- No bounce, no spring, no overshoot — automotive reliability translated to motion design.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the photography remains static and fully accessible.

Signature motion, as the source states it: Full-bleed vehicle photography crossfades in the hero carousel. Images transition with a slow, cinematic fade (600ms+) — never a slide or push — so the vehicle appears to emerge rather than move. The source then reads that crossfade as reinforcing the "Movement that inspires" brand idea: the experience should feel like the car arriving, not a UI sliding. That brand-idea reading is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The global brand-identity page records "Opposites United" and brand elements. It does not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification. |
| Live computed surface-use | Both captured KR surfaces compute visible text as Kia Signature Bold and Kia Signature Regular. The source attributes the type roles below to that live-extract pass. |
| Official distributed asset | The supplied capture records no font source URLs, and this review found no public first-party web-font licence for Kia Signature. The families may be described by name and observed metrics, but no downloadable asset or reuse licence is asserted. |
| Declared / system fallback | `Arial, sans-serif, Hevetica` is the recorded fallback stack (source §3 and the sibling computed `font-family`). YAML `tokens.typography.family.fallback` writes `Arial, sans-serif`. Both writings are kept. Neither fallback is promoted as the brand face. |
| Outside these captures | Typography beyond the two inspected KR product surfaces stays outside this contract. |

Reading the brand-identity page as official product-use context rather than a web family assignment, reading the missing source URLs as a licence boundary rather than permission to host the files, reading Arial / Hevetica as fallback context rather than the UI face, and reading typography beyond the two inspected KR product surfaces as outside this contract, are derived editorial implementation inferences from the verified surfaces; they are not Kia-authored or a separately published UI specification.

### Family

- **Display / UI:** `Kia Signature Bold` — Token-set path `tokens.typography.family.display`. Used for all headings, vehicle names, CTA labels, and navigation panel headers.
- **Body / Nav:** `Kia Signature Regular` — Token-set path `tokens.typography.family.body`. Used for global nav links, body copy, and utility labels.
- **Fallback:** `Arial, sans-serif, Hevetica` (source §3). YAML records `Arial, sans-serif`. Both writings stay.

Do not replace Kia Signature Bold or Kia Signature Regular with a system substitute, and do not present Arial or Hevetica as Kia Signature. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). `1.23` is not rewritten as a fixed px. `1.3` is not rewritten as `1.30` as a replacement — the YAML records `1.3` and source §3 writes `1.30`; both writings sit on that record. Token-set `use` strings are kept verbatim; where source §3 notes are longer, both writings are kept. Keeping YAML line heights as unitless ratios, keeping the YAML singles and the §3 px spellings on separate readings, and attaching surfaces from the YAML claim anchors, are derived editorial implementation inferences from the verified surfaces; they are not Kia-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use | §3 notes |
|---|---|---:|---:|---:|---|---|
| Vehicle Hero | Kia Signature Bold | 52 | 400 | 1.23 | Vehicle hero title (e.g. The 2026 EV6), Kia Signature Bold | Full-bleed vehicle page H2 |
| Section Heading | Kia Signature Bold | 42 | 400 | 1.29 | Section headings (Best Kia, News), Kia Signature Bold | Homepage section titles (Best Kia, News) |
| Sub-section | Kia Signature Bold | 28 | 400 | 1.43 | Sub-section / vehicle name heads, Kia Signature Bold | Vehicle name in card/panel context |
| Vehicle Nav Tab | Kia Signature Bold | 20 | 400 | 1.3 | Vehicle page tab navigation, Kia Signature Bold | Sub-nav tabs (특징, 제원, 갤러리) |
| Global Nav | Kia Signature Regular | 16 | 400 | 1.375 | Global navigation items, Kia Signature Regular | Top nav menu items (차량, 구매, 체험) |
| Body | Kia Signature Regular | 16 | 400 | 1.375 | Body copy, Kia Signature Regular | Standard reading text |
| CTA Button | Kia Signature Bold | 14 | 400 | 1.43 | CTA labels (견적 내기, 자세히 보기), Kia Signature Bold | Button labels (견적 내기, 자세히 보기) |

Token-set `tokens.typography.display-hero.size` is `52`. Token-set `tokens.typography.section.size` is `42`. Token-set `tokens.typography.subsection.size` is `28`. Token-set `tokens.typography.vehicle-nav.size` is `20`. Token-set `tokens.typography.nav.size` and `tokens.typography.body.size` are both `16`; they stay as two keys. Token-set `tokens.typography.button.size` is `14`. Nav / body `16` is a type size. It is not `tokens.spacing.base: 16`.

Source §3 also writes those sizes as 52px / 42px / 28px / 20px / 16px / 16px / 14px. Those px spellings stay beside the unitless YAML sizes. Neither writing was chosen as a replacement.

### Type principles

These three items are the source's own typography principles. Reading them as current-surface type rules, including the observation that the face named Bold registers as a confident medium weight at screen, is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

- **One typeface, two weights**: Kia Signature Bold vs Regular carries the entire hierarchy. No third-party Korean/Latin fonts on the main site.
- **Automotive precision at display sizes**: normal (not negative) tracking even at 52px — confident, not compressed. The type doesn't need tight-tracking to feel premium; the proportion and weight do the work.
- **Bold for action, Regular for context**: every clickable/navigable element in Bold; every paragraph in Regular — a clean semantic split.

### Assets

The catalog identity records `logo.type: simpleicons` and `logo.slug: kia`. That is an identity pointer, not a Kia-hosted file and not a reusable brand download. SimpleIcons Kia logo confirmed 200 at `https://cdn.simpleicons.org/kia`. Product photography on the two KR surfaces is first-party vehicle imagery; it is not replaced with invented brand-color decoration. Classifying the simpleicons slug as an identity pointer rather than a hosted brand file, and not replacing first-party vehicle photography with invented brand-color decoration, are derived editorial implementation inferences from the verified surfaces; they are not Kia-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

The source records empty, loading, error, success, skeleton, and disabled treatments at system level (table below). It does not record hover, focus-visible, or pressed visual treatments on the token-set components.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination navigation item, a tab that only selects a destination, or an outlined CTA that commits no operation in place — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component. A §4-only component that is not in the token set is labeled `not in the token set`. Generic `Focus` capture is not treated as a `focus-visible` treatment. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not Kia-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary Dark

- Role: primary CTA on white/light backgrounds that includes the quote action "견적 내기"
- Primitive type: `button` · Kind: interactive
- Domain: homepage and EV6 vehicle page
- Background: `#05141f`
- Text: `#ffffff`
- Radius: 0px
- Padding: 16px 24px
- Height: 48px
- Font: 14px / 400 Kia Signature Bold
- Border: 1px solid `#05141f`
- Use: Primary CTA on white/light backgrounds (견적 내기, 바로가기)
- Token-set type: `tokens.components.button-primary.type` `button`
- Token-set bg: `tokens.components.button-primary.bg` `#05141f`
- Token-set fg: `tokens.components.button-primary.fg` `#ffffff`
- Token-set radius: `tokens.components.button-primary.radius` `0px`
- Token-set padding: `tokens.components.button-primary.padding` `16px 24px`
- Token-set font: `tokens.components.button-primary.font` `14px / 400 Kia Signature Bold`
- Token-set border: `tokens.components.button-primary.border` `1px solid #05141f`
- Token-set use: `Primary CTA (견적 내기, 바로가기)`
- The 48px height is the source §4 spelling. It is not a YAML field on this record. The 16px and 24px in the padding are this control's padding. They are not `tokens.spacing.base: 16` or `tokens.spacing.lg: 24`. The 14px / 400 Kia Signature Bold font is this control's font; it is not only the CTA Button type-role row. Reading those figures as this button's geometry rather than as those YAML spacing steps or a shared type-role row is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades dark CTAs to `rgba(5,20,31,0.3)`; visual treatment omitted on this token-set record |
| loading | applicable | "견적 내기" commits a quote configuration; the surface contract records an inline loading state within the option panel |
| error | applicable | "견적 내기" is a form-commit CTA; the surface contract records a field-level 견적 validation message |
| success | applicable | The surface contract records a brief inline confirmation when a 견적 is saved |

### Secondary White (Ghost)

- Role: secondary CTA placed on dark hero/vehicle images that includes the quote action "렌터카 견적 내기"
- Primitive type: `button` · Kind: interactive
- Domain: dark hero / vehicle images on the homepage and EV6 vehicle page
- Background: `#ffffff`
- Text: `#05141f`
- Radius: 0px
- Padding: 16px 24px
- Height: 48px
- Font: 14px / 400 Kia Signature Bold
- Border: 1px solid `#ffffff`
- Use: Secondary CTA placed on dark hero/vehicle images (자세히 보기, 렌터카 견적 내기)
- Token-set type: `tokens.components.button-secondary.type` `button`
- Token-set bg: `tokens.components.button-secondary.bg` `#ffffff`
- Token-set fg: `tokens.components.button-secondary.fg` `#05141f`
- Token-set radius: `tokens.components.button-secondary.radius` `0px`
- Token-set padding: `tokens.components.button-secondary.padding` `16px 24px`
- Token-set font: `tokens.components.button-secondary.font` `14px / 400 Kia Signature Bold`
- Token-set border: `tokens.components.button-secondary.border` `1px solid #ffffff`
- Token-set use: `Secondary CTA on dark hero backgrounds (자세히 보기, 렌터카 견적 내기)`
- The 48px height is the source §4 spelling. The 16px and 24px in the padding are this control's padding. They are not `tokens.spacing.base: 16` or `tokens.spacing.lg: 24`. Reading those figures as this button's geometry rather than as those YAML spacing steps is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A quote CTA whose availability can lapse; visual treatment omitted |
| loading | applicable | "렌터카 견적 내기" commits a quote; the surface contract records an inline loading state within the option panel |
| error | applicable | Same quote-commit role; the surface contract records a field-level 견적 validation message |
| success | applicable | Same quote-commit role; the surface contract records a brief inline confirmation when a 견적 is saved |

### White Outlined

- Role: outlined white CTA on mixed backgrounds
- Primitive type: `button` · Kind: interactive
- Domain: mixed backgrounds on the two inspected KR surfaces
- Background: `#ffffff`
- Text: `#05141f`
- Radius: 0px
- Padding: 16px 24px
- Height: 48px
- Font: 14px / 400 Kia Signature Bold
- Border: 1px solid `#05141f`
- Use: Outlined white CTA on mixed backgrounds
- Token-set type: `tokens.components.button-white-outlined.type` `button`
- Token-set bg: `tokens.components.button-white-outlined.bg` `#ffffff`
- Token-set fg: `tokens.components.button-white-outlined.fg` `#05141f`
- Token-set radius: `tokens.components.button-white-outlined.radius` `0px`
- Token-set padding: `tokens.components.button-white-outlined.padding` `16px 24px`
- Token-set font: `tokens.components.button-white-outlined.font` `14px / 400 Kia Signature Bold`
- Token-set border: `tokens.components.button-white-outlined.border` `1px solid #05141f`
- Token-set use: `White-bg outlined CTA button`
- The 48px height is the source §4 spelling. The 16px and 24px in the padding are this control's padding. They are not `tokens.spacing.base: 16` or `tokens.spacing.lg: 24`. Reading those figures as this button's geometry rather than as those YAML spacing steps is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | An outlined CTA whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is an outlined destination-style CTA; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination-style outlined CTA; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this button reports as success |

### Vehicle Card

- Role: Best Kia vehicle lineup card
- Primitive type: `card`
- Domain: Best Kia section on `https://www.kia.com/kr/`
- Background: `#ffffff`
- Text: `#05141f`
- Border: 1px solid `#dadce0`
- Radius: 15px
- Use: Best Kia vehicle lineup cards (the only rounded element in the system)
- Token-set type: `tokens.components.card-vehicle.type` `card`
- Token-set bg: `tokens.components.card-vehicle.bg` `#ffffff`
- Token-set fg: `tokens.components.card-vehicle.fg` `#05141f`
- Token-set radius: `tokens.components.card-vehicle.radius` `15px`
- Token-set border: `tokens.components.card-vehicle.border` `1px solid #dadce0`
- Token-set use: `Vehicle lineup card (Best Kia section)`
- Token-set shape: `tokens.rounded.lg: 15`
- The 15px radius is this card's geometry. It is not only `tokens.rounded.lg: 15`. Reading that figure as this card's geometry rather than as a spacing step is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the card (C4). Withholding kind and a map because the source supplies no interaction evidence is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

### Vehicle Page Tab (Active)

- Role: in-page vehicle sub-nav tab, active state
- Primitive type: `tab` · Kind: interactive
- Domain: EV6 vehicle page at `https://www.kia.com/kr/vehicles/ev6/`
- Text: `#05141f`
- Font: 20px / 400 Kia Signature Bold
- Height: 52px
- Active: text `#05141f` + bottom border indicator on active tab
- Use: In-page navigation (특징, 제원, 갤러리, 모델 비교, EV TCO 계산기, 가격)
- Token-set type: `tokens.components.nav-tab-active.type` `tab`
- Token-set fg: `tokens.components.nav-tab-active.fg` `#05141f`
- Token-set font: `tokens.components.nav-tab-active.font` `20px / 400 Kia Signature Bold`
- Token-set active: `tokens.components.nav-tab-active.active` `text #05141f + bottom border`
- Token-set use: `Vehicle page sub-nav tab, active state`
- The 52px height is the source §8 touch-target spelling. It is not a YAML field on this record. Source §9 also records no background color on the tab bar itself. Reading the 52px height as that touch-target measurement, and keeping the tab-bar-has-no-background sentence on this record rather than inventing a color, is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above; active is the recorded variant |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination tab whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control selects a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A tab that only selects a destination does not report a failed request on itself |
| success | not-applicable | Same role reason: selecting a destination is not an operation this tab reports as success |

### Vehicle Page Tab (Inactive)

- Role: in-page vehicle sub-nav tab, inactive state
- Primitive type: `tab` · Kind: interactive
- Domain: EV6 vehicle page at `https://www.kia.com/kr/vehicles/ev6/`
- Text: `#697278`
- Font: 20px / 400 Kia Signature Bold
- Height: 52px
- Use: Non-selected vehicle page sub-nav items
- Token-set type: `tokens.components.nav-tab-inactive.type` `tab`
- Token-set fg: `tokens.components.nav-tab-inactive.fg` `#697278`
- Token-set font: `tokens.components.nav-tab-inactive.font` `20px / 400 Kia Signature Bold`
- Token-set use: `Vehicle page sub-nav tab, inactive state`
- The 52px height is the source §8 touch-target spelling. Reading that height as the touch-target measurement rather than as a type size is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above; inactive is the recorded variant |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination tab whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control selects a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A tab that only selects a destination does not report a failed request on itself |
| success | not-applicable | Same role reason: selecting a destination is not an operation this tab reports as success |

### Model Badge

- Role: model category label / metadata tag
- Primitive type: `badge`
- Kind: non-interactive — a category label, not a commit control
- Background: `#f8f8f8`
- Text: `#05141f`
- Radius: 0px
- Font: 14px / 400 Kia Signature Regular
- Use: Model category labels, metadata tags
- Token-set type: `tokens.components.badge-model.type` `badge`
- Token-set bg: `tokens.components.badge-model.bg` `#f8f8f8`
- Token-set fg: `tokens.components.badge-model.fg` `#05141f`
- Token-set radius: `tokens.components.badge-model.radius` `0px`
- Token-set font: `tokens.components.badge-model.font` `14px / 400 Kia Signature Regular`
- Token-set use: `Model category label / metadata`
- Declaring `Kind: non-interactive` because the source records this as a label / metadata tag, not as a control, is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

### Surface Section

- Role: alternating section background for content grouping
- Primitive type: not in the token set
- Background: `#f8f8f8`
- Radius: 0px
- Use: Alternating section backgrounds for content grouping
- Kind and applicability map omitted — the source supplies no interaction evidence for the section (C4). Withholding kind and a map because the source supplies no interaction evidence is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

### Global Navigation Header

- Role: top horizontal nav
- Primitive type: not in the token set · Kind: interactive
- Background: transparent / overlays hero image
- Text: `#ffffff` on dark hero; `#05141f` on scrolled white header
- Font: 16px Kia Signature Regular weight 400
- Height: 60px
- Use: Top horizontal nav (차량, 구매, 체험, 이벤트, 고객 지원, Discover Kia, PBV)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination nav whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control selects a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination nav; the destination, not this header, reports failure |
| success | not-applicable | Same role reason: reaching a destination is not an operation this header reports as success |

### Vehicle Sub-navigation Panel

- Role: mega-menu panel heading for 차량, 구매, 체험 nav items
- Primitive type: not in the token set
- Text (panel heading): `#ffffff` on dark panel, 18px Kia Signature Bold
- Use: Mega-menu panels for 차량, 구매, 체험 nav items
- Kind and applicability map omitted — the source supplies no interaction evidence for the panel heading (C4). Withholding kind and a map because the source supplies no interaction evidence is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

### Surface state contract

The source records these system-level states. They are preserved here as written (A2). Treating the rows as a surface contract rather than attaching every row as a visual treatment on the destination CTAs is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (견적 configurator, no selection)** | White canvas. Primary heading in `#05141f`, directing the user to select a vehicle model. Single dark CTA to begin configuration. |
| **Empty (search results, zero matches)** | Steel grey (`#697278`) placeholder text at body size. Honest, minimal. No illustration. |
| **Loading (page initial paint)** | Surface grey (`#f8f8f8`) skeleton blocks at final dimensions. Vehicle photo skeletons as grey rectangles. No animation shimmer — consistent with the flat, shadow-free aesthetic. |
| **Loading (configurator options)** | Inline loading state within the option panel; previous selection remains visible. |
| **Error (form validation — 견적)** | Field-level message below the input. `#05141f` text in a direct, plain-Korean explanation of what's required. |
| **Error (network failure)** | Minimal inline notice with a retry CTA. Automotive reliability = errors are uncommon, should not panic the user. |
| **Success (시승 신청 submitted)** | Calm confirmation: "신청이 완료되었습니다." with next steps (expected contact date). No confetti, no heavy celebration. |
| **Success (견적 saved)** | Brief inline confirmation near the button. 3s auto-clear. |
| **Skeleton** | Surface grey (`#f8f8f8`) blocks at final card/image dimensions, 15px radius matching vehicle cards. Flat fade-pulse consistent with no-shadow system. |
| **Disabled** | `#697278` steel grey label with reduced opacity on the surface. Dark CTAs fade to `rgba(5,20,31,0.3)` — preserving the charcoal brand tone rather than going flat grey. |

The source's "Automotive reliability = errors are uncommon, should not panic the user" clause on the network-failure row is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification. The treatments themselves are the source's own.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and grid

- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px+
- Notable: CTA button padding is exactly 16px 24px
- Full-bleed hero sections with vehicle photography spanning the full viewport width
- Centered content columns inside sections with generous horizontal padding
- Horizontal card rows for vehicle lineup (Best Kia) — typically 3–4 cars per row
- Dark (`#05141f`) and white sections alternate to create visual rhythm without using color
- Vehicle page sticky sub-nav bar with horizontal tab list

### Whitespace

- **Photography-first layout**: the UI chrome (nav, CTAs, labels) is minimal so vehicle imagery is the primary content
- **Generous section spacing**: vertical rhythm between sections is ample — 64px+ between major content blocks
- **Two-button CTA pattern**: each vehicle/section typically shows a pair of CTAs (light + dark) side by side

Reading those spacing figures as the source's own scale and the 16px 24px CTA padding as that control's padding rather than as `tokens.spacing.base: 16` or `tokens.spacing.lg: 24`, and reading the photography-first / generous-section / two-button sentences as the source's own layout rules, are derived editorial implementation inferences from the verified surfaces; they are not Kia-authored or a separately published UI specification.

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero typography scales down, nav collapses to hamburger |
| Tablet | 640-1024px | 2-column vehicle cards, moderate padding |
| Desktop | 1024-1440px | Full layout, 3-4 column vehicle lineup |
| Large Desktop | >1440px | Centered with max-width container |

### Touch targets

- CTA buttons at 48px height with 24px horizontal padding — comfortably tappable
- Nav items at 60px header height
- Vehicle page tabs at 52px height
- Floating chat button at 56px diameter (50% radius)

### Collapsing strategy

- Hero: vehicle page H2 at 52px scales down proportionally on mobile
- Navigation: horizontal mega-menu collapses to hamburger toggle
- Vehicle lineup: 3-4 column cards → 2-column → 1-column stacked
- Button pair: dark + white CTAs stack vertically on mobile

The 52px hero, 48px CTA, 60px nav, 52px tabs, and 56px chat are the source's own measurements. Desktop `1024-1440px` and Large Desktop `>1440px` are the source's own breakpoint rows. Reading those heights and paddings as the source's recorded measurements rather than as a cross-viewport specification invented on top of them is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Kia's brand voice since the 2021 global rebrand centers on the phrase **"Movement that inspires"** — a manifesto that positions Kia not as a car manufacturer but as a creator of sustainable mobility experiences that move people emotionally as well as physically. The tone is aspirational but grounded: confident without being aggressive, premium without condescension, international while addressing Korean consumers directly. Reading that register as this contract's public voice, rather than as a separately published Kia microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Hero / campaign | Inspirational, declarative. "Movement that inspires." Short, bold. |
| Vehicle naming | Direct product English ("The 2026 EV6", "EV9") — product code + year, clean |
| CTAs | Functional and clear. "견적 내기" (Get a quote), "자세히 보기" (Learn more), "시승 신청" (Book a test drive). |
| Feature descriptions | Precise, benefit-led. Highlights the tech and mobility story without hyperbole. |
| Brand narrative | Global scope + Korean heritage. References sustainability, innovation, movement. |
| Customer support | Respectful and service-first. "고객 지원" (Customer Support) phrasing. |

**Voice samples (verbatim from live site, 2026-06-22):**

- "기아 - Movement that inspires" — site title and meta (brand manifesto). *(verified live 2026-06-22)*
- "Best Kia" — homepage section title (concise, bilingual-friendly). *(verified live 2026-06-22)*
- "The 2026 EV6" — EV6 vehicle page hero H2 (year + model, English on Korean site). *(verified live 2026-06-22)*

Those three samples are verbatim, not a complete product-microcopy guide. Reading them as recorded live-site lines rather than as a separately published copy manual is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

Published names and lines the source records, kept byte-exact: Kia, 기아, 기아(起亞), Movement that inspires, 기아 - Movement that inspires, Opposites United, Best Kia, News, The 2026 EV6, EV9, 견적 내기, 자세히 보기, 바로가기, 렌터카 견적 내기, 시승 신청, 고객 지원, 차량, 구매, 체험, 이벤트, Discover Kia, PBV, 특징, 제원, 갤러리, 모델 비교, EV TCO 계산기, 가격, 이 달의 구매 혜택, 신청이 완료되었습니다., Kia Signature Bold, Kia Signature Regular, rising from Asia, Rising from Asia. An English gloss may sit beside a non-English line; it never replaces the line. The label "이 달의 구매 혜택" appears in the source only inside the dropped persona section; it is kept here as a published string, not as a biography or a primary task. Keeping that label as published copy rather than as a persona fact, and treating the forbidden-register list as the source's own Don'ts rather than as a separately published microcopy specification, are derived editorial implementation inferences from the verified surfaces; they are not Kia-authored or a separately published UI specification.

**Forbidden register**: legacy automotive bravado ("Power. Performance. Passion."), feature lists that don't tie to mobility narrative, patronising "simplicity" copy, excessive Korean honorifics that feel corporate over human.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not Kia-authored or a separately published UI specification.

- exact cubic-bezier values for `ease-enter`, `ease-exit`, and `ease-standard`
- hover, focus-visible, and pressed visual treatments on the token-set components
- font source URLs and a public first-party web-font licence for Kia Signature
- a downloadable Kia-hosted wordmark; the catalog field is `logo.type: simpleicons` / `logo.slug: kia`
