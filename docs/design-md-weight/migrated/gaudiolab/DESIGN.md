# Gaudio Lab Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Gaudio Lab (가우디오랩) is a Seoul-based Korean AI-audio technology company. This contract covers the three first-party web surfaces the source inspected live: the English homepage at `https://www.gaudiolab.com/`, the English brand/company page at `https://www.gaudiolab.com/company/brand`, and its Korean counterpart at `https://www.gaudiolab.com/ko/company/brand`. Values stay attached to the surface that established them.

The inspected interface layer is almost entirely pure white (`#ffffff`), sectioned by wide bands of full-bleed video and near-black immersive blocks (`#1e1e1f`) where the sound-wave imagery lives. A single saturated sky-blue (`#00b7ff`) is the accent the source records as the only chromatic one in the system, appearing on the "Contact us" / "문의하기" call-to-action and on the border and text of the "All products" button. Everything else is calibrated grayscale. The typographic layer is a hybrid stack: the English marketing layer runs in Poppins, climbing to weight 900 for section titles such as "The Science of Sound"; the functional chrome — nav, milestone stats, blog cards — is Roboto on Material UI, carrying the MUI default ink `rgba(0,0,0,0.87)` and 0.15px tracking on its `<h1>` stats; Korean copy resolves through the system stack, where the brand hero "우리는 좋은 소리를 만들고 좋은 소리는 우리를 만듭니다" ("We make good sound, and good sound makes us") is set at 80px / weight 700. On the newer marketing sections the heading ink shifts to a crisper near-black `#111214`. Live inspection returned `box-shadow: none` across the hero, nav, CTAs, headings, and cards. Separation comes instead from flat sky-tinted panels (`#f0f9ff`), thin `#d6d6d6` hairlines around 12px-radius news cards, and hard cuts into dark sections (`#1e1e1f`, and a deeper navy `#12354e`). Geometry mixes full pills (`9999px`) for product-list rows and the circular app-launcher with a tight small-radius scale (4px / 6px CTAs, 12px / 16px cards). Text steps down through a cool neutral ladder — `#d3d5da` faint labels on dark, `#9ca3af` muted captions, `#fafafa` near-white on the blue CTA.

Reading the site as a research lab that learned restraint from consumer product design, reading the rationed blue as a trained signal where "blue means act", reading the calibrated grayscale as making the interface feel engineered and trustworthy rather than decorated, reading the hybrid type stack as the tell of an engineering-led site rather than an agency showpiece, reading the absent shadow as a refusal of elevation, and reading the whole as a flat, fast, science-forward aesthetic that lets the audio content rather than the chrome do the talking, are derived editorial implementation inferences from the verified surfaces; they are not Gaudio Lab-authored or a separately published UI specification. The source itself marks readings of this kind — "one color, one action", flat-and-fast as a rejection of ornamented consumer audio chrome, and "sound is science first" — as its own editorial readings rather than quoted Gaudio Lab statements.

Brand narrative recorded by the source, kept separate from the interface evidence above, and separated by evidence class the way the source separates it. The source records the company as spun out of academic sound research. Quoted from the company's own live brand/company page: the mission line "We provide an excellent sound experience through innovative technologies.", the tagline "Where sound is, Gaudio Lab is there.", the positioning line "Sound is science, from smartphone to movie theaters", and the staffing claim "over 40 audio experts including 9 Ph.D" dedicated to R&D. Also published on those pages and recorded as milestone figures: **50M worldwide daily users**, **16.9 billion KRW (~$13M) in Series B** funding, **119 items of intellectual property**, and **35 partners and investors** including Genie Music, Melon, KT Alpha Shopping, and META48, plus **CES Innovation Awards 2026 for a fourth consecutive year**. The product line, taken from the homepage app-launcher and milestone timeline, spans **GSA** (Spatial Audio), **Gaudio Sing** (AI Karaoke), **GTS / Gaudio Text Sync**, **LM1** (Loudness Normalizer), **Gaudio Studio Pro** (AI Content Localization), and **Gaudio Developers**, an API platform for audio AI. Two items in this paragraph carry a weaker class and the source says so: the founding year is an inference — the homepage timeline marks a **10th anniversary in 2025**, from which the source reads a founding circa 2015 — and the Seoul, KR headquarters is described by the source as widely documented public knowledge rather than a statement quoted from these pages. This narrative supplies product context; it does not by itself supply interface tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Gaudio Lab-authored or a separately published UI specification. Each names the source passage it rests on.

- Reach the company — the source records "Contact us" / "문의하기" as the persistent primary action, present both as the header CTA and as the in-page hero CTA.
- Open a product — the source records the circular "Open app launcher" control and the full-pill product rows inside its menu (GSA, Gaudio Sing, GTS, LM1, Gaudio Studio Pro), with "All products" as the secondary action beside the hero CTA.
- Read the company's evidence story on the brand page — the source records the section titles "The Science of Sound" and "Wherever Sound Goes", the milestone stat headlines "50 million users" and "Award-winning", and the white "Watch the Film" button over the brand hero video.
- Scan Blog & News — the source records a "Blog & News" nav destination and a grid of 12px-radius blog and news thumbnail cards with 18px / 500 headings.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its three named figures as fictional archetypes rather than real people, so their names, ages, cities, and biographies are dropped rather than promoted, and no demographic segment list is carried into this document or its sidecar. What the source independently records is the audience grouping those archetypes were said to be informed by: audio and ML engineers, media and broadcast partners, and consumer product teams. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Gaudio Lab-authored or a separately published UI specification.

### Distinctive traits

These eight traits, and the readings carried inside them — the blue read as rationed to one action, the two blacks read as a deliberate duality, the flat system read as a positive choice, and the near-white CTA label read as a subtle MUI softness — are a derived editorial implementation inference from the verified surfaces; they are not Gaudio Lab-authored or a separately published UI specification. Each names the values it rests on.

- Single saturated sky-blue (`#00b7ff`) as the only accent — recorded on the primary CTA and the outline button
- Hybrid type stack: Poppins (EN display, up to weight 900), Roboto/MUI (body + chrome), Noto Sans KR (Korean)
- Near-black marketing ink (`#111214`) alongside the MUI default `rgba(0,0,0,0.87)` on chrome
- Shadowless system — no `box-shadow` in the inspection; separation via tint, hairline, and dark bands
- Dual geometry — full pills (`9999px`) for product rows and launcher, tight 4-16px radii for CTAs and cards
- Dark immersive bands (`#1e1e1f`, `#12354e`) hosting sound-wave and film imagery
- Cool neutral ladder (`#d3d5da` → `#9ca3af`) for text hierarchy against white and dark
- Near-white label (`#fafafa`) on the blue CTA instead of pure white — a subtle MUI softness

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Gaudio Lab-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each, and its own closing note names "one color, one action" and "sound is science first" among the readings that connect its observed design to the company's stated positioning rather than quoting the company.

1. **Sound is science first.** The brand leads with rigor ("The Science of Sound", "9 Ph.D"), not spectacle. *UI implication:* present capabilities with concrete numbers and evidence; keep chrome plain so the content reads as credible.
2. **One color, one action.** Sky-blue (`#00b7ff`) is the sole saturated hue. *UI implication:* reserve `#00b7ff` exclusively for the primary CTA and its outline sibling so the next step is never ambiguous.
3. **Flat and fast.** The system is shadowless by choice. *UI implication:* separate with tint (`#f0f9ff`), hairlines (`#d6d6d6`), and dark bands — never elevation — to keep the interface quick and technical.
4. **Let the sound imagery lead.** Full-bleed video and waveform visuals carry the emotion. *UI implication:* frame media generously in white and dark bands; the UI recedes so the audio content dominates.
5. **Evidence over adjectives.** Milestones, awards, and user counts replace hype. *UI implication:* promote key numbers to large stat headlines; avoid superlatives in copy.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them — Material conservatism accepted on the chrome layer, and the near-white label described as softer by intent — are a derived editorial implementation inference from the verified surfaces; they are not Gaudio Lab-authored or a separately published UI specification.

- Reserve sky-blue (`#00b7ff`) for the single primary action — CTA fill and the outline button, nothing else
- Use Poppins for English display headlines, up to weight 900 for section titles
- Use Roboto (MUI) for nav, stats, cards, and body — keep the chrome consistent
- Set Korean copy in Noto Sans KR, and let the brand hero run large (80px / 700)
- Keep the system shadowless — separate with `#f0f9ff` tint, `#d6d6d6` hairlines, and dark bands
- Use near-black `#111214` for marketing headings; accept `rgba(0,0,0,0.87)` on MUI chrome
- Use full pills (`9999px`) for product rows and the app-launcher, tight 4-6px radii for CTAs
- Promote key numbers (50M, 119, 35) to large Roboto stat headlines

### Avoid

The source states these seven as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them — dilution of the single-action signal, deliberate flatness, and each locale keeping its own stack — are a derived editorial implementation inference from the verified surfaces; they are not Gaudio Lab-authored or a separately published UI specification.

- Spread the blue across many elements — it dilutes the single-action signal
- Add drop shadows for elevation — the system is deliberately flat
- Mix a second saturated accent color alongside `#00b7ff`
- Set English display type in Roboto — Poppins owns the marketing headline voice
- Use pure black for the near-white CTA label — it is `#fafafa`, softer by intent
- Apply pill radii to structural cards — cards stay at 12-16px, pills are for rows/launcher
- Let Korean and English headings share a font — each locale keeps its own stack

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Brand and action:

| Role | Value | Recorded use |
|---|---|---|
| Gaudio Sky (primary) | `#00b7ff` | The signature bright sky-blue and the system's single action color: the "Contact us" / "문의하기" CTA background, the "All products" outline button's border and text, and a background fill recorded roughly nine times across the homepage (`rgb(0, 183, 255)`). The source states nothing else competes with it. |
| On-Primary | `#fafafa` | The near-white label color on the blue header CTA (`rgb(250, 250, 250)`) — softer than pure white, which the source attributes to an MUI convention. |

Ink and text:

| Role | Value | Recorded use |
|---|---|---|
| Ink | `#111214` | Near-black for headings and body on the newer marketing sections (`rgb(17, 18, 20)`, 130+ observed instances). |
| MUI chrome ink | `rgba(0,0,0,0.87)` | The Material UI chrome layer's default body/heading ink. The two blacks coexist by layer; keep that split rather than collapsing them. |
| Muted | `#9ca3af` | Muted cool grey for secondary and caption text. |
| Faint | `#d3d5da` | Faint light-grey for low-emphasis labels on dark sections (`rgb(211, 213, 218)`). |

Surface and border:

| Role | Value | Recorded use |
|---|---|---|
| Canvas | `#ffffff` | The dominant page background — pure white, and the fill of the "Watch the Film" button and the news cards. |
| Surface | `#f0f9ff` | A faint sky-tinted panel background for light feature blocks, which the source calls the palest echo of the brand blue. |
| Hairline | `#d6d6d6` | The thin border/divider color around the 12px-radius news cards in the shadowless card system (`rgb(214, 214, 214)`). |

Dark sections:

| Role | Value | Recorded use |
|---|---|---|
| Night | `#1e1e1f` | Near-black background for the immersive dark bands hosting sound-wave and video imagery (`rgb(30, 30, 31)`). |
| Ocean | `#12354e` | A deep navy-teal used as an accent dark-section background (`rgb(18, 53, 78)`). |

The white CTA label is not uniform across the two blue CTAs and the source keeps both: the header CTA label is `#fafafa`, and the hero CTA label is `#ffffff`.

Calling `#00b7ff` the single action color, calling `#fafafa` softer than pure white by an MUI convention, and calling `#f0f9ff` the palest echo of the brand blue, are derived editorial implementation inferences from the verified surfaces; they are not Gaudio Lab-authored or a separately published UI specification.

### Spacing

Base unit: 8px, which the source attributes to MUI, with 4px micro-steps. The recorded scale is 4px, 8px, 12px, 16px, 24px, 40px, and 64px. The source names two paddings as characteristic: the header CTA at 8px 16px and the large film button at a generous 16px 40px.

### Shape

- Small: 4px — hero CTA, outline button, film button
- Medium: 6px — header CTA, nav menu items
- Large: 12px — news/blog cards
- XL: 16px — larger feature containers
- Full: 9999px — product-list rows, app-launcher icon button

Two geometries coexist: full pills for product rows and the launcher, and a tight small-radius scale for everything structural. Reading that pairing as a deliberate mix rather than an accident of the framework is a derived editorial implementation inference from the verified surfaces; it is not Gaudio Lab-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Every surface — page, nav, CTAs, cards |
| Tint (Level 1) | `#f0f9ff` background shift | Light feature-block separation |
| Hairline (Level 2) | `1px solid #d6d6d6` border | News card outlines, dividers |
| Dark band (Level 3) | `#1e1e1f` / `#12354e` background | Immersive full-width sections |

Live inspection returned `box-shadow: none` on the hero, nav, CTAs, headings, and cards. Depth is communicated through flat means only: sky-tinted panels, thin hairlines, and hard cuts into near-black bands. Reading that as a deliberate refusal of elevation, reading the interface as fast, clean, and technical because of it, and reading that as appropriate for an audio-engineering company whose product lives in the sound rather than the screen, are derived editorial implementation inferences from the verified surfaces; they are not Gaudio Lab-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, spacing, radius, border, and shadow on the three surfaces. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this motion section. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not Gaudio Lab-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 240ms | Card/section reveal, menu open, carousel slide |
| `motion-slow` | 400ms | Full-bleed band transitions, hero/film reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Gaudio Lab evidence, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, menus, carousel |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and composed, matching the flat, science-forward aesthetic.
- The product carousel (Swiper) slides at `motion-standard` / `ease-enter`.
- The app-launcher pill rows and CTAs respond to hover/press with a subtle opacity/scale shift.
- Full-bleed video bands crossfade at `motion-slow`.
- No bounce or spring — the source reads an audio-engineering company as signalling precision, not playfulness.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and autoplaying carousels pause; the site remains fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | The inspected surfaces compute Roboto on `body` with the `Helvetica, Arial` fallback, and the source records the "Watch the Film" button computing Poppins. |
| Loaded FontFace record | Poppins at weights 400 / 500 / 700 and Roboto at weights 300-700 are recorded as loaded; Noto Sans KR is recorded as present. |
| Declared-only | `swiper-icons` is recorded among the loaded faces without a visible-text role. |
| Attribution, not a recorded family | The Korean brand hero computes the `-apple-system, system-ui` stack, and the source itself says Noto Sans KR is the face it resolves *through* that stack — an attribution rather than a family string read off that element. The source also records Poppins as loaded at 400 / 500 / 700 while describing the 900 section titles as Poppins “pushed to 900”; reading that gap as a synthesized weight rather than a loaded face is a derived editorial implementation inference from the verified surfaces, and is not Gaudio Lab-authored or a separately published UI specification. |
| Official distributed asset | The source records no Gaudio Lab-owned or Gaudio Lab-hosted type family. |
| Outside these captures | Typography on any surface beyond the three inspected pages sits outside this contract. |

### Family

- **Display (EN):** `Poppins` — geometric sans for English marketing headlines and the "Watch the Film" button. Loaded at weights 400 / 500 / 700, and pushed to 900 for the largest section titles.
- **Body / UI:** `Roboto` (Material UI base, with `Helvetica, Arial` fallback) — nav, milestone stats, blog/news cards, and body copy. Weights 300-700 loaded.
- **Korean:** `Noto Sans KR`, resolved through the `-apple-system, system-ui` stack — Korean headlines and copy, including the 80px brand hero.

A fallback member of a stack is never presented as the brand face, and no unavailable family is replaced with one of these three.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Notes |
|---|---|---:|---:|---:|---:|---|
| Display Hero (KO) | Noto Sans KR | 80px (5.00rem) | 700 | 1.00 | normal | Brand-page hero, white on dark |
| Section Title | Poppins | 48px (3.00rem) | 900 | 1.46 | normal | "The Science of Sound", black weight |
| Milestone Stat | Roboto | 36px (2.25rem) | 700 | 1.11 (40px) | 0.15px | "50 million users", "Award-winning" |
| Card Title | Roboto | 18px (1.13rem) | 500 | 1.56 (28px) | normal | Blog & news card headings |
| Button Large | Poppins | 18px (1.13rem) | 500 | 1.00 | normal | "Watch the Film" overlay button |
| Body | Roboto | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text, MUI base |
| Nav | Roboto | 14px (0.88rem) | 500 | 1.00 | normal | Top nav menu buttons |

Line heights are kept in the form the source verified them: unitless ratios, with the px equivalents the source itself spelled out shown beside them.

### Typography rules

The source states these four as its typography principles. Reading the measured metrics as those principles — one job per font, weight rather than size carrying hierarchy, the two blacks as design rather than inconsistency, and numbers promoted to display type — is a derived editorial implementation inference from the verified surfaces; it is not Gaudio Lab-authored or a separately published UI specification.

- **Split by layer, not by whim:** Poppins persuades (English marketing display), Roboto informs (chrome + body), Noto Sans KR speaks Korean. Each font owns one job and never trespasses.
- **Weight carries hierarchy:** the system leans on weight jumps — Poppins 900 for section titles, Roboto 700 for stats, 500 for card titles and nav, 400 for body — more than on size alone.
- **Two blacks by design:** marketing sections use the crisp `#111214`; the MUI chrome keeps its native `rgba(0,0,0,0.87)`. The source calls this a real, observable duality rather than an inconsistency to paper over.
- **Numbers as headlines:** milestone figures ("50M", "119", "35") are set as large Roboto `<h1>` stats with 0.15px tracking — data is promoted to display type.

### Assets

- Full-bleed video, sound-wave, and film imagery is first-party content and the source treats it as the emotional carrier of the page; do not replace it with invented brand-color decoration. Treating that imagery as the emotional carrier, and the instruction not to replace it with invented brand-color decoration, are a derived editorial implementation inference from the verified surfaces; they are not Gaudio Lab-authored or a separately published UI specification.
- The catalog's logo entry for this reference is a Google favicon-service URL rather than a Gaudio Lab-hosted file. The source's own sibling excludes that service from brand-owned sources, so the URL is recorded in the provenance ledger and is not presented here as a Gaudio Lab brand asset.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each component with a primitive type (`button`, `tab`, `card`, `listItem`) and a value set. Those types are preserved per component. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. The source's live inspection recorded computed default styling, and the state treatments in the State record below are stated at system level rather than measured per control. Every kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; it is not Gaudio Lab-authored or a separately published UI specification. This is not a claim that state coverage is finished.

### Header CTA (Primary)

- Role: the persistent primary action in the header — "Contact us" / "문의하기"
- Primitive type: `button` · Kind: interactive
- Background: `#00b7ff`
- Text: `#fafafa`
- Radius: 6px
- Padding: 8px 16px
- Height: 32px
- Font: 14px / 500 / Roboto

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | The system declares CTAs responding to hover/press with a subtle opacity/scale shift; no opacity or scale value is given |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The system declares a disabled treatment in which the blue action fades rather than turning grey, preserving the brand read; no opacity value is given |
| loading | not-applicable | This control takes the reader to the contact surface; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control takes the reader to the contact surface; it does not commit an operation whose outcome it could report. The system's form-validation failure language belongs to the field on that surface. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result; the system's submitted-confirmation belongs to the form that commits it. |

### Hero CTA (Primary)

- Role: in-page hero "Contact us" call-to-action
- Primitive type: `button` · Kind: interactive
- Background: `#00b7ff`
- Text: `#ffffff`
- Radius: 4px
- Height: 44px
- Font: 16px / 500 / Roboto

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | The system declares CTAs responding to hover/press with a subtle opacity/scale shift; no opacity or scale value is given |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The system's blue-action fade applies; no opacity value is given |
| loading | not-applicable | Same role as the header CTA: it opens the contact surface rather than committing an operation whose in-progress state it could report. |
| error | not-applicable | Same role as the header CTA: it opens the contact surface rather than committing an operation it could report on. |
| success | not-applicable | Same role reason: opening a destination is not an operation with a success result. |

### Outline (Secondary)

- Role: "All products" — the secondary action beside the hero CTA
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#00b7ff`
- Border: `1px solid #00b7ff`
- Radius: 4px
- Height: 44px
- Font: 16px / 500 / Roboto

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | The system declares CTAs responding to hover/press with a subtle opacity/scale shift; no opacity or scale value is given |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; the system's faint/muted disabled text treatment applies and no control-specific value is promoted |
| loading | not-applicable | This control sends the reader to the product listing; reaching a listing is not a commit whose in-progress state the button reports. |
| error | not-applicable | This control sends the reader to the product listing; the listing, not the button, reports whether that request failed. |
| success | not-applicable | Same role reason: navigating to a listing is not an operation that commits and reports success. |

### Watch the Film (Overlay)

- Role: white film-launch button over the brand hero video
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#111214`
- Radius: 4px
- Padding: 16px 40px
- Height: 62px
- Font: 18px / 500 / Poppins

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | The system declares CTAs responding to hover/press with a subtle opacity/scale shift; no opacity or scale value is given |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A launch point whose availability can lapse; the system's faint/muted disabled text treatment applies |
| loading | applicable | The system assigns the hero/film reveal and full-bleed band crossfade to `motion-slow` |
| error | not-applicable | This control opens the film; playback failure is reported by the surface that plays it, not by the trigger. |
| success | not-applicable | Same role reason: opening media is not an operation with a success result. |

### App Launcher (Icon)

- Role: circular "Open app launcher" icon button in the header
- Primitive type: `button` · Kind: interactive
- Radius: 9999px
- Height: 40px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | The system declares the app-launcher rows and CTAs responding to hover/press with a subtle opacity/scale shift; no opacity or scale value is given |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A menu entry point whose availability can lapse; the system's faint/muted disabled text treatment applies |
| loading | not-applicable | This control opens the launcher menu; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control opens the launcher menu; it does not commit an operation whose outcome it could report. |
| success | not-applicable | Same role reason: opening a menu is not an operation with a success result. |

### Nav Menu Item

- Role: top nav items — "Products", "Technology", "Blog & News", "Careers", "About us" / "제품", "기술"
- Primitive type: `tab` · Kind: interactive
- Text: `#111214`
- Radius: 6px
- Padding: 8px 16px
- Height: 36px
- Font: 14px / 500 / Roboto
- Active variant: text `#00b7ff`
- Recorded on the light surface; the source labels this component's values as the light-surface case

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination can be unavailable while its item stays legible; the system's faint/muted disabled text treatment applies |
| loading | not-applicable | A nav item changes which page the reader is on; choosing a destination is not a commit whose in-progress state the item reports. |
| error | not-applicable | A nav item changes which page the reader is on; the destination page, not the item, reports whether that request failed. |
| success | not-applicable | Same role reason: choosing a destination is not an operation that commits and reports success. |

The active state is declared for this control as a variant (text `#00b7ff`) rather than as one of the seven canonical states.

### News Card

- Role: blog and news thumbnail card — hairline separation, no elevation
- Primitive type: `card`
- Kind: not declared. The source records this card's surface values and its place in the blog and news grid, but attaches no action, target, or interaction treatment to the card itself. Neither an interactive nor a non-interactive kind is established here, so no kind and no state-applicability map are declared.
- Background: `#ffffff`
- Border: `1px solid #d6d6d6`
- Radius: 12px
- Shadow: none

### Product Row

- Role: product rows in the app-launcher menu (GSA, Gaudio Sing, GTS, LM1, Gaudio Studio Pro)
- Primitive type: `listItem`
- Kind: not declared. The source records this row's surface values and its place inside the app-launcher menu, but attaches no action, target, or state treatment to the row itself. Neither kind is established here, so no kind and no state-applicability map are declared. The system's hover/press opacity/scale shift is stated for the app-launcher pill rows as a group and is recorded in the Motion rules rather than promoted to a state treatment for this row.
- Text: `#111214`
- Radius: 9999px
- Height: 64px
- Font: 16px / 400 / Roboto

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Gaudio Lab-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no results)** | White canvas, single Ink (`#111214`) line explaining nothing matched, with one sky-blue (`#00b7ff`) CTA to adjust. No decorative clutter. |
| **Empty (no saved items)** | Muted (`#9ca3af`) single line stating nothing is saved yet, plus a path back. Calm and plain. |
| **Loading (content fetch)** | Flat skeleton blocks at final dimensions on `#ffffff` / `#f0f9ff`, 12px radius, no shadow shimmer — consistent with the shadowless system. |
| **Loading (in-place)** | Thin sky-blue (`#00b7ff`) progress indicator; previous content stays visible. |
| **Error (request failed)** | Inline message in Ink (`#111214`) with a plain-language explanation and a retry — never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level note below the input describing what is valid, not just "필수". |
| **Success (submitted)** | Brief inline confirmation in a calm tone; next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#f0f9ff` / `#ffffff` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Faint (`#d3d5da`) / Muted (`#9ca3af`) text on reduced-opacity surface; the blue action fades rather than turning grey, to preserve the brand read. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Full-bleed hero video and imagery bands alternate with centered content columns; the hero row itself sits on white.
- Product entries are listed as full-pill (`9999px`) rows inside the app-launcher menu.
- Blog and news are arranged as a grid of 12px-radius cards.
- Milestone and stat sections present large Roboto numbers in a horizontal row.
- Sections separate by background swap — white `#ffffff`, sky-tinted `#f0f9ff`, or near-black `#1e1e1f` — rather than by borders or shadows.
- Full-width `#1e1e1f` / `#12354e` blocks create rhythm and host the sound-wave visuals.

Reading the generous white space as "content over chrome" — framing the audio and video content so the imagery rather than the UI holds attention — reading the background swaps as flat segmentation, and reading the dark bands as immersive rhythm, are derived editorial implementation inferences from the verified surfaces; they are not Gaudio Lab-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run with a desktop Chrome user agent, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, image behavior, and the source's "comfortably tappable" reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Gaudio Lab-authored or a separately published UI specification.

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column, hero video crops, product rows stack |
| Tablet | 640-1024px | 2-up news cards, condensed nav |
| Desktop | 1024-1440px | Full layout, wide hero bands, multi-column stats |

- **Touch targets:** the header CTA at 32px height, the hero CTA and outline button at 44px, nav menu buttons at 36px with 8px 16px padding, and the app-launcher icon at 40px as a full-circle target. The source describes these as comfortably tappable.
- **Collapsing:** Korean 80px and English 48px headlines scale down with weight maintained; full-pill product rows stack vertically in the app-launcher on narrow viewports; the news grid goes multi-column → 2-up → single column; dark immersive bands keep full-width treatment while internal padding reduces.
- **Imagery:** hero and section video/imagery run full-bleed and crop rather than shrink; news cards keep their 12px radius and `#d6d6d6` hairline, with no shadow, at all sizes.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The product publishes in English and Korean, and the source records the same brand page in both. It characterizes the voice as precise, wonder-tinged, and quietly authoritative — an audio research lab that treats sound as both science and emotion and says so plainly — and reads the Korean copy as carrying a warmer, almost poetic note beside the English register. It reads the company as framing itself through evidence — "Over 40 audio experts including 9 Ph.D" — rather than through adjectives, and as letting awards (CES Innovation Awards) and numbers (50M daily users) do the boasting. That characterization, that register reading, that evidence reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Gaudio Lab-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Brand hero (KO) | Poetic, reciprocal. "좋은 소리는 우리를 만듭니다." Warm, mission-framed. |
| Section titles (EN) | Declarative, scientific. "The Science of Sound", "Wherever Sound Goes". |
| Mission line | Plain-spoken capability. "We provide an excellent sound experience through innovative technologies." |
| Stats / milestones | Concrete and unadorned. "50M daily users", "119 IP", "35 partners". |
| CTAs | Minimal and direct. "Contact us", "All products", "Watch the Film". |

Voice samples, verbatim from the live surfaces. The Korean text is the string; the English beside it is a reading aid, not the label:

- "Where sound is, Gaudio Lab is there." — brand-page hero subtitle, mission-framed.
- "Sound is the most fundamental means of connecting with people or touching their emotions." — the "The Science of Sound" section.
- "우리는 좋은 소리를 만들고 좋은 소리는 우리를 만듭니다" — Korean brand hero ("We make good sound, and good sound makes us").

**Forbidden register:** hype superlatives, exclamation-heavy marketing, undefined buzzwords, and any framing that hides the engineering behind vague "magic". The source states that sound is presented as science first and feeling second, never as a gimmick — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Gaudio Lab-authored or a separately published UI specification.

Reproduce the Korean strings above, the English UI labels recorded in the component roles, and the two Korean strings in the State record byte-exact rather than translating or re-casing them. Korean and English headings keep their own stacks; a bilingual surface does not merge them.

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

### Recorded unresolved decisions

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Gaudio Lab evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **The hover and press opacity/scale values.** The system states that the app-launcher pill rows and CTAs respond to hover and press with a subtle opacity/scale shift, without naming the opacity or the scale.
- **The disabled opacity value.** The system states a reduced-opacity surface and a blue action that fades rather than turning grey, without naming the opacity.
- **The skeleton pulse.** The system declares flat blocks at final dimensions with a 12px radius and a flat pulse, without naming the pulse's duration or opacity range.
- **The in-place progress indicator's dimensions.** The system declares a thin sky-blue progress indicator, without naming its thickness.
- **The XL 16px container.** The 16px radius is recorded for larger feature containers; no such container is declared as a component with its own values.
