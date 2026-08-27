# Dr.Now (닥터나우) Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Dr.Now (닥터나우) is a Korean telemedicine service. This contract covers the first-party web surfaces whose stylesheets the source read: the web app at `doctornow.co.kr` (Tailwind plus styled-components bundle), and the landing and company pages served with the official brand CSS from `file.doctornow.co.kr`, including `company.doctornow.co.kr/company`. Values below stay attached to the surface that established them. The source records the two surfaces as maintained separately — the marketing `.btn-now` gradient CTA belongs to the hero and brand context, while the web app uses a flat `#FD7E14` fill for most buttons.

The source attributes its colors to the official `:root` token block (`--P100`–`--P900`, `--G10`–`--G900`) and its type scale to the CSS typography utility classes, and records its own token extraction as `prose-derived`. Reading that as declared stylesheet values rather than per-element measurements of a rendered page is a derived editorial implementation inference from the verified surfaces; it is not Dr.Now-authored or a separately published UI specification. Under that reading, a value here is a declared stylesheet fact scoped to the surface family that declared it.

The source's own one-line descriptor is "Korea's #1 telemedicine platform — making medical care instantly accessible, any hour of the day." That descriptor and the brand-narrative figures below are catalog prose without an attached source URL in this pass; they are not verified market-position or clinical facts, and nothing in this document establishes a medical, efficacy, or safety claim.

Brand narrative recorded by the source, kept separate from the interface evidence above: Dr.Now was founded in 2019 in Seoul, began as a medication delivery service, and grew into what the source calls Korea's first scaled telemedicine platform. By 2026 the source counts more than 4 million consultations, 5,500+ partner medical institutions, and an 8 million+ download milestone. The stated mission has three pillars — solve healthcare inconveniences people have accepted as normal, shift the medical market from provider-driven to patient-driven through symptom-based hospital selection and transparent pricing, and be available "늦은 밤에도, 주말에도" (late nights and weekends). The tagline is "의료를 더욱 가깝게, 닥터나우" (Healthcare closer with Dr.Now), and the source names "아플 땐 닥터나우" (when you're sick, Dr.Now is there) as the brand's emotional promise. This narrative supplies product context; it does not by itself supply interface tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Reading the source's state contract and stated mission as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Dr.Now-authored or a separately published UI specification. Each task below names the source passage it rests on.

- Find care by searching or by browsing a specialty — the source's empty state is a search that returns nothing, with a suggestion to try a broader keyword or browse by specialty.
- Reach a doctor for a remote consultation — the source's in-consultation loading copy is "의사를 연결 중이에요" and its success state is "진료가 완료되었어요".
- Obtain a prescription and have it delivered or filled — the source's success state surfaces a prescription delivery CTA, and its prescription-unavailable state offers finding an open pharmacy.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section labels itself as illustrative and not derived from published Dr.Now research, so its four named figures, ages, and biographies are dropped rather than promoted or re-hosted. Restating the remaining group-level mentions as the audience — people needing care outside clinic hours, and the partner medical institutions and pharmacies the service connects them to — is a derived editorial implementation inference from the verified surfaces; it is not Dr.Now-authored or a separately published UI specification. Use those groups, not invented individuals.

### Distinctive traits

Selecting these five as the distinctive traits, and reading radius as role-assigned rather than as one universal step, is a derived editorial implementation inference from the verified surfaces; it is not Dr.Now-authored or a separately published UI specification. Each item names the declared values it rests on.

- `#FF8D00` (P500) as the declared brand anchor and `#FD7E14` (P600) as the CTA fill, against a `#FBFCFD` (G10) canvas and a ten-step neutral scale ending at `#1C1D1F` (G900)
- Pretendard Variable as the sole declared UI family, imported by both the main CSS bundle and the official brand CSS
- Radius assigned by role rather than by one universal step: 12px on interactive controls, 32px on cards and content panels, 99px on chips
- Separation by background color and a `1px solid #DFE1E2` border on `#FFFFFF` cards, with shadows reserved for the floating, modal, and dropdown layers
- Blue `#228BE6` declared for informational chips and system links rather than as a brand color

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Dr.Now-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Accessibility at every hour.** The product should work for a parent at 2am with a sick child, not only on a weekday afternoon. *UI implication:* the primary CTA is findable without scrolling; orange carries that emphasis without visual noise.
2. **Patient-centered, not provider-centered.** People search by symptom rather than by medical specialty, so navigation should mirror how people think about illness. *UI implication:* symptom-based entry points, with specialty discovery that hides organizational complexity.
3. **Transparency as trust.** Showing consultation prices before booking is named as a core differentiator. *UI implication:* price surfaces at the consultation card level rather than on a separate screen, labeled in neutral G700 `#3D4551` rather than in warning orange.
4. **Warm urgency without alarm.** Orange is meant to signal "act now" without inducing anxiety. *UI implication:* the deep `#D9480F` → `#F3463B` gradient stays in hero marketing contexts; in-app CTAs use flat `#FD7E14`.
5. **Own the moment of illness.** The product meets people who are unwell and often alone. *UI implication:* loading uses a gentle skeleton shimmer rather than a spinning indicator, and empty states use empathetic copy rather than sterile error codes.

Capture-bound application of the source's Do rules:

- Use `#FF8D00` (P500) or `#FD7E14` (P600) as the primary brand orange for key CTAs and active states.
- Apply 12px radius to primary buttons and 32px radius to cards and content panels.
- Use Pretendard Variable with the full Korean fallback chain for UI text.
- Keep neutral grays for secondary content — body copy defaults to `#71767A` (G500) against `#FBFCFD`.
- Apply `ease-out` transitions at 200–300ms for enter and exit micro-interactions.
- Use the full gray scale (G10–G900) for text and surface hierarchy.
- Maintain 64px of top breathing room for the fixed navigation bar.

### Avoid

- Do not use blue as a primary brand color. The identity is orange; blue is reserved for informational chips.
- Do not apply the deep `#D9480F` → `#F3463B` gradient outside the hero and brand marketing context; the source reads it as urgent and assigns flat `#FD7E14` to web-app CTAs.
- Do not use font weights below 400 or above 700. The scale uses Regular (400), Medium (500), SemiBold (600), and Bold (700) only.
- Do not mix heavy drop shadows into the card system; separation here is border-based.
- Do not place orange text on orange-tinted backgrounds — the source flags P700 `#F76707` on P100 `#FFF4E6` as a contrast risk at small sizes.
- Do not use radius values outside the established scale (4 / 6 / 8 / 12 / 16 / 32 / 99px).
- Do not substitute a system font for Pretendard Variable and present the substitute as the brand face.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Primary orange scale, declared as the official CSS variables `--P100` through `--P900`:

| Role | Value | Declared use |
|---|---|---|
| Primary 500 | `#FF8D00` | Brand anchor orange; timeline markers, accent text, key stats |
| Primary 600 | `#FD7E14` | CTA button fills, active nav link text, featured badge backgrounds |
| Primary 700 | `#F76707` | Hover on orange elements, pressed states, high-emphasis text |
| Primary 800 | `#E8590C` | Deep hover, secondary destructive-adjacent accents |
| Primary 900 | `#D9480F` | CTA gradient start, deepest brand orange |
| Primary 100 | `#FFF4E6` | Tinted surfaces, pill tag backgrounds, info banners |
| Primary 300 | `#FFD8A8` | Divider gradient, warm illustration fill |

Neutral gray scale, declared as `--G10` through `--G900`:

| Role | Value | Declared use |
|---|---|---|
| Surface 10 | `#FBFCFD` | Page background variant (G10) |
| Surface 20 | `#F7F9FA` | Secondary page background, tag fills (G20) |
| Surface 40 | `#F1F3F6` | Review section background, card dividers (G40) |
| Gray 100 | `#DFE1E2` | Default border, card outline, separator lines (G100) |
| Gray 300 | `#A9AEB1` | Placeholder text, disabled borders (G300) |
| Gray 400 | `#8D9297` | Secondary labels, metadata text (G400) |
| Gray 500 | `#71767A` | Body text default (G500) |
| Gray 600 | `#565C65` | Body color root default (G600) |
| Gray 700 | `#3D4551` | Secondary headings, strong body (G700) |
| Gray 900 | `#1C1D1F` | Primary headings, dark emphasis (G900) |

Accent and system:

- **Canvas / on-action** (`#FFFFFF`): card surface, modal background, CTA text.
- **Info** (`#228BE6`): informational chips, system links, secondary action text. Informational only — it is not a brand color here.
- **Highlight** (`#FCC419`): star rating, highlight badge.
- **Error** (`#FA5252`): destructive action, form error state.

Surface-scoped orange: the hero banner gradient uses `#FF7501`, slightly warmer than the token `#FF8D00`. The source records both as genuine observed values and treats `#FF8D00` as the canonical `--P500`. Keep `#FF7501` on the hero banner rather than generalizing it into the token scale.

### Spacing

8px base unit. Declared values: 4, 8, 12, 16, 24, 32, 40, 48, 64, 96px. The token set names them `xs: 4`, `sm: 8`, `md: 12`, `base: 16`, `lg: 24`, `xl: 32`, `xxl: 48`, `section: 96`.

### Shape

- Small: 8px — nav items
- Medium: 12px — primary buttons and interactive controls
- Large: 32px — cards and content panels
- Full: 9999 (rendered as 99px) — badge and chip pills
- Skeleton doctor card: 16px

The source states the established radius scale as 4 / 6 / 8 / 12 / 16 / 32 / 99px and rules out values outside it.

### Elevation

Separation is primarily by background color; shadows are reserved for layers that float.

- **Level 0 — Page surface:** `#FBFCFD` or `#F7F9FA`, no shadow
- **Level 1 — Default card:** `#FFFFFF` with `1px solid #DFE1E2` — flat border elevation
- **Level 2 — Floating card:** `box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08)`
- **Level 3 — Modal / bottom sheet:** `box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08)`
- **Level 4 — Tooltip / dropdown:** `box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16)`
- **Level 5 — Overlay scrim:** `background-color: rgba(0, 0, 0, 0.06)` to `rgba(0, 0, 0, 0.12)`
- **Inset surface accent:** `inset 0px 0px 32px rgba(0, 0, 0, 0.04)`, used on section review blocks

### Motion

The source records a motion vocabulary of enter/exit, slide, and shimmer, and names three animations directly: `screen-slide-in`, `skeleton-shimmer`, and the `.animate-skeleton-shimmer` utility. Beyond those, it states each duration and easing at system level without binding it to a particular component or selector. Reading the rest of this section as system-level declarations rather than per-component measured values is a derived editorial implementation inference from the verified surfaces; it is not Dr.Now-authored or a separately published UI specification. Under that reading, a per-component motion treatment should be promoted only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior are observed.

Duration scale:

- `100ms` — micro-interactions (focus ring, checkbox check)
- `200ms` — button hover and press state transitions
- `300ms` — panel enter/exit, toast appear, slide-up sheets (primary UI motion)
- `500ms` — page-level fade transitions
- `1500ms` — skeleton shimmer loop
- `15000ms` — marquee and scroll animations (brand testimonial carousels)

Easing:

- `ease-out` (`cubic-bezier(0, 0, 0.2, 1)`) — default for enter transitions; elements decelerate into rest
- `ease-in` — exit transitions; elements accelerate out
- `cubic-bezier(0.4, 0, 0.2, 1)` — screen-level transitions, recorded on the named `screen-slide-in` animation
- `linear` — spinner rotation, marquee scroll
- `ease-in-out` — skeleton shimmer, shake animations (periodic or looping)

Motion rules:

- Bottom sheet: slide up `0.3s ease-out` from `translateY(100%)` to `translateY(0)`
- Page enter: fade and slide — `opacity 500ms ease-out, transform 500ms ease-out` from `translateY(20px)`
- Screen navigation: `screen-slide-in 0.32s cubic-bezier(0.4,0,0.2,1)` from opacity 0
- Skeleton: `skeleton-shimmer 1.5s ease-in-out infinite` — translateX -100% to +100%
- Accordion: `0.2s ease-out` open and close, height from 0 to content height
- Never animate layout-affecting properties; prefer `transform` and `opacity`

The source records no reduced-motion rule for any of the above. Motion exists in this system, so reduced-motion behavior is an unresolved slot rather than an absent concern — name it and omit the value rather than choosing a default.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official distributed asset | The official brand CSS `file.doctornow.co.kr/official/css/default.css` carries the Pretendard font import and reset. |
| Declared product-use | The main web-app CSS bundle on `userweb-static.doctornow.co.kr` declares the same family. Pretendard Variable is the only family the source promotes. |
| Family string | Declared as `Pretendard Variable, Pretendard` followed by a Korean system fallback chain. |
| Fallback chain | Named in the source as Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic. Declared as fallbacks; a fallback stack is never presented as the brand face. |
| Type scale | Read from the CSS typography utility classes, expressed as class suffixes rather than per-element measurements. |
| Live surface-use | The source's extraction is recorded as `prose-derived`; it does not report a per-element computed-style count for the family. |

Do not present a system or fallback face as Pretendard Variable. The token set records the mono role as Pretendard Variable as well — the source promotes no separate monospace family.

### Type scale (CSS typography utility classes)

| Class suffix | Size | Line-height | Weights available |
|---|---|---|---|
| `-32b/sb` | 32px | 42px | 700 / 600 |
| `-28b` | 28px | 38px | 700 |
| `-24b/sb` | 24px | 32px | 700 / 600 |
| `-22b/sb` | 22px | 30px | 700 / 600 |
| `-20b/sb` | 20px | 28px | 700 / 600 |
| `-18b/sb/m` | 18px | 26px | 700 / 600 / 500 |
| `-17b/sb/m/r` | 17px | 24px | 700 / 600 / 500 / 400 |
| `-16b/sb/m/r` | 16px | 24px | 700 / 600 / 500 / 400 |
| `-15b/sb/m/r` | 15px | 22px | 700 / 600 / 500 / 400 |
| `-14b/sb/m/r` | 14px | 20px | 700 / 600 / 500 / 400 |
| `-12sb` | 12px | 18px | 600 |

### Type roles

The token set records the same scale as roles with unitless line-height ratios. Both forms are preserved: the px line-heights above are the utility-class values, the ratios below are the token-set values.

| Role | Family | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| h-32 | Pretendard Variable | 32 | 700 | 1.31 | Large display heading |
| h-28 | Pretendard Variable | 28 | 700 | 1.36 | Heading |
| h-24 | Pretendard Variable | 24 | 700 | 1.33 | Section heading |
| h-22 | Pretendard Variable | 22 | 700 | 1.36 | Section heading |
| h-20 | Pretendard Variable | 20 | 600 | 1.4 | Subheading |
| body-17 | Pretendard Variable | 17 | 400 | 1.41 | Body / button label at 600 |
| body-16 | Pretendard Variable | 16 | 400 | 1.5 | Body default |
| body-15 | Pretendard Variable | 15 | 400 | 1.47 | Body small |
| caption | Pretendard Variable | 12 | 600 | 1.5 | Meta / timestamps |

### Typography rules

- CTA button labels: 17px / 600 (SemiBold)
- Body default: 15px–16px / 400–500
- Section headings: 22px–32px / 700
- Meta and timestamps: 12px–14px / 400
- `-webkit-font-smoothing: antialiased` applied globally
- No italic in UI text; `font-style: normal` enforced in the typography utility classes

### Assets

The source carries two asset records. Treating the catalog logo record as a third-party favicon-service identity pointer rather than a Dr.Now-owned brand asset, and keeping it in the source ledger instead of promoting it here, is a derived editorial implementation inference from the verified surfaces; it is not Dr.Now-authored or a separately published UI specification. The second record is P300 `#FFD8A8`, declared as a warm illustration fill and divider gradient color.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares components with a primitive type (`button`, `badge`, `card`, `tab`) and a value set. Those types are preserved per component. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state remains applicable. Each interactive-kind verdict, each applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; it is not Dr.Now-authored or a separately published UI specification. This is not a claim that state coverage is finished.

### Brand Gradient CTA (`.btn-now`)

- Role: hero and brand marketing call to action
- Primitive type: `button` · Kind: interactive
- Background: `linear-gradient(90deg, #D9480F 0%, #F3463B 100%)`
- Text: `#FFFFFF`
- Radius: 12px
- Padding: 16px 54px
- Font: 17px / 600

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; the system's orange hover value is P700 `#F76707`, with P800 `#E8590C` as deep hover |
| focus-visible | applicable | Interactive control; treatment omitted, the source records only a 100ms focus-ring duration |
| disabled | applicable | The system declares a dedicated disabled button treatment (see Ghost / Disabled Button) |
| loading | applicable | Starts a consultation flow that the system reports as loading |
| error | applicable | The flow reports failure; the system surfaces it as a toast with a retry CTA, so no in-button treatment is promoted |
| success | applicable | The flow reports completion; the system surfaces it as a bottom sheet, so no in-button treatment is promoted |

### Primary Solid Button (`.bg-primary-600`)

- Role: primary in-app call to action
- Primitive type: `button` · Kind: interactive
- Background: `#FD7E14`
- Text: `#FFFFFF`
- Radius: 12px
- Font: 17px / 600

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; system orange hover P700 `#F76707` |
| focus-visible | applicable | Interactive control; treatment omitted |
| disabled | applicable | Dedicated disabled treatment exists in this system |
| loading | applicable | Submits or starts an async flow |
| error | applicable | Failure is surfaced by the toast state rather than in-button |
| success | applicable | Completion is surfaced by the bottom-sheet state rather than in-button |

### Primary Outline Button

- Role: secondary emphasis call to action
- Primitive type: `button` · Kind: interactive
- Background: `#FFFFFF`
- Text: `#FD7E14`
- Border: `1px solid #FD7E14`
- Radius: 12px
- Padding: 16px 24px
- Font: 16px / 600

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; system orange hover P700 `#F76707` |
| focus-visible | applicable | Interactive control; treatment omitted |
| disabled | applicable | Dedicated disabled treatment exists in this system |
| loading | applicable | Submits or starts an async flow |
| error | applicable | Failure is surfaced by the toast state rather than in-button |
| success | applicable | Completion is surfaced by the bottom-sheet state rather than in-button |

### Ghost / Disabled Button

- Role: ghost button, and the system's disabled button treatment
- Primitive type: `button` · Kind: interactive
- Background: `#DFE1E2`
- Text: `#A9AEB1`
- Radius: 12px
- Padding: 16px 24px
- Font: 16px / 500

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above, used as the ghost resting appearance |
| hover | applicable | Pointer-web button; treatment omitted |
| focus-visible | applicable | Interactive control; treatment omitted |
| disabled | applicable | This is the declared disabled treatment |
| loading | applicable | Ghost buttons in this system carry actions that can be in flight |
| error | applicable | Failure is surfaced by the toast state rather than in-button |
| success | applicable | Completion is surfaced by the bottom-sheet state rather than in-button |

### Primary Tag Chip

- Role: primary status or category tag
- Primitive type: `badge` · Kind: non-interactive — the source declares it as a badge used as a tag chip and attaches no action, target, or interactive treatment to it. No state-applicability map is declared.
- Background: `#FFF4E6`
- Text: `#F76707`
- Radius: 99px
- Padding: 4px 10px
- Font: 12px / 600

### Gray Tag Chip

- Role: neutral status or category tag
- Primitive type: `badge` · Kind: non-interactive — same reason as the primary tag chip.
- Background: `#F1F3F6`
- Text: `#71767A`
- Radius: 99px
- Padding: 4px 10px
- Font: 12px / 500

### Content Card

- Role: content container
- Primitive type: `card` · Kind: non-interactive — a surface that holds content; the source attaches no action or interactive treatment to the card itself.
- Background: `#FFFFFF`
- Border: `1px solid #DFE1E2`
- Radius: 32px
- Padding: 24px

### Section Background Card

- Role: section background surface
- Primitive type: `card` · Kind: non-interactive — a background surface, same reason as above.
- Background: `#F1F3F6`
- Radius: 32px

### Navigation Item

- Role: top-bar navigation item
- Primitive type: `tab` · Kind: interactive
- Background: transparent
- Default text: `#DFE1E2` · Active text: `#FD7E14`
- Radius: 8px
- Height: 40px
- Padding: 0px 12px
- Font: default 16px / 400 · active 16px / 700

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared default nav link treatment |
| hover | applicable | Pointer-web navigation control; treatment omitted |
| focus-visible | applicable | Keyboard-reachable navigation control; treatment omitted |
| disabled | applicable | Interactive navigation control whose destination can be temporarily unavailable; treatment omitted |
| loading | applicable | Navigation triggers a screen transition the system animates as `screen-slide-in` |
| error | not-applicable | A navigation item selects a destination; it does not report the outcome of an operation. Failure is reported by the destination surface. |
| success | not-applicable | Same role reason: selection is not an operation with a success result. |

Selected/active is declared for this control as a variant (active text `#FD7E14` at weight 700) rather than as one of the seven canonical states.

### State record

The source's states section, preserved with its values and copy:

- **Empty — no results:** search returns nothing; show a sympathetic icon and "검색 결과가 없어요" (no search results) with a suggestion to try a broader keyword or browse by specialty, rather than a blank white screen.
- **Loading — initial fetch:** full-page skeleton using `.animate-skeleton-shimmer` (1.5s ease-in-out infinite); gray placeholder rectangles match the expected content geometry.
- **Loading — in consultation:** pulsing "의사를 연결 중이에요" (connecting you to a doctor) copy with a circular spinner at 0.8s linear infinite, conveying activity without panic.
- **Error — network failure:** toast notification with a `#FA5252` border-left accent, copy "연결이 끊겼어요. 다시 시도해 주세요" (the connection dropped — please try again), retry CTA in `#FD7E14`.
- **Error — prescription unavailable:** inline card state with a `#FFF4E6` background and `#F76707` icon; explains the limitation and surfaces an alternative action (find an open pharmacy).
- **Success — consultation complete:** bottom sheet slides up (300ms ease-out) with a green checkmark and "진료가 완료되었어요" (your consultation is complete); the prescription delivery CTA follows immediately.
- **Skeleton — doctor card:** rectangular placeholder with shimmer animation matching the doctor card's height (approximately 96px) and radius (16px).
- **Disabled — unavailable specialty:** chip or button with a `#DFE1E2` background and `#A9AEB1` text; the specialty label stays visible so the option is still legible while unavailable.

The success checkmark is described as green. The source declares no green value in its color scale, so the checkmark color is unresolved and is omitted rather than filled from an adjacent value.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- **Content container:** `width: 92%; max-width: 1050px`, centered, for landing and company pages. The web app uses a Tailwind responsive grid with a 1064px max-width at some breakpoints.
- **Section rhythm:** 96px–128px vertical section padding on desktop, reducing to 48–64px on mobile.
- **Spacing system:** 8px base unit; common values 4, 8, 12, 16, 24, 32, 40, 48, 64, 96px.
- **Navigation:** fixed 64px top bar, with content offset by `padding-top: 64px`.
- **Card grid:** 2–3 columns on desktop, collapsing to a single column.

Responsive behavior:

- **Breakpoints:** 768px for mobile; 1064px as the large-desktop cap for the web app.
- **Navigation:** the desktop horizontal nav collapses to a hamburger button at ≤768px.
- **Grid:** 2–3 column layouts collapse to a single column at 768px.
- **Typography:** large display sizes (32–56px) reduce by 1–2 steps on mobile.
- **Cards:** full-width card pattern on mobile with reduced padding — an 8px gap instead of 12px.
- **Max widths:** content capped at 1050px for company pages; the web app grid is flexible to 1064px.

These are the two surface families the source read: a fixed-width centered company/landing layout with generous whitespace, and a Tailwind-based responsive web app. Keep their measurements attached to the surface that declared them.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The product language is Korean; the declared type stack pairs Pretendard Variable with a Korean system fallback chain. The source's three-word voice fingerprint is Warm, Accessible, Trustworthy.

Reading the source's voice guidance: it describes a voice that speaks to patients at vulnerable moments with directness and warmth, and that prefers plain Korean over medical jargon so it can be understood by someone who is unwell at any hour. That characterization, and the Do/Don't dimensions below, are a derived editorial implementation inference from the verified surfaces; they are not Dr.Now-authored or a separately published UI specification.

| Dimension | Do | Don't |
|---|---|---|
| Sentence length | Short, declarative — "아플 땐 닥터나우" | Long subordinate clauses |
| Vocabulary | Plain Korean, patient-centric ("당신이 아픈 순간") | Medical jargon, formal hospital language |
| Tone | Warm, reassuring, slightly energetic | Clinically cold, alarmist |
| Perspective | "We're here for you" — first person plural | Institutional third person |
| Urgency | Gentle accessibility ("언제든지") | Pushy scarcity tactics |

Illustrative samples. The source labels these as illustrative and modeled on brand copy rather than as published Dr.Now strings; that label travels with them. They are kept in Korean because the Korean text is the string:

- "늦은 밤에도, 주말에도 — 당신 곁에 있습니다." (Late at night, on weekends — we're by your side.) — Illustrative, modeled on brand positioning.
- "약 처방부터 배송까지, 집에서 끝내세요." (From prescription to delivery, finish it all at home.) — Illustrative, modeled on feature communication style.
- "병원까지의 거리가 걱정되지 않게." (So the distance to the hospital is no longer a worry.) — Illustrative, reflecting brand manifesto language.

The product strings the source records as UI copy are in the State record above; keep them in Korean and byte-exact when reproducing those states.

Scope boundary for this section: the voice contract covers register and tone. Medical, efficacy, dosage, and safety language is outside what this source establishes, and none of the guidance above may be used to derive clinical copy.

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

### Recorded conflicts and unresolved decisions

These are named values, not permissions to invent:

- **Two oranges, two surfaces.** The hero banner gradient uses `#FF7501` while the official `:root` token treats `#FF8D00` as the canonical P500. The source records both as genuine observed values and resolves the conflict by surface rather than by picking one.
- **Two CTA treatments, two surfaces.** The `.btn-now` deep `#D9480F` → `#F3463B` gradient and the web app's flat `#FD7E14` are maintained separately by the source. Do not merge them into one button token.
- **Reduced-motion behavior.** Motion durations, easings, and rules are established; the source records no reduced-motion rule for them. It stays unresolved rather than defaulted.
- **Success checkmark color.** The source describes the consultation-complete checkmark as green but declares no green value. The color stays unresolved.
