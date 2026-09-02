# Kakao T Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Kakao T (카카오 T) is the all-in-one mobility app from Kakao Mobility — taxi, designated-driver (대리운전), parking, bike, navigation, flights, and quick-delivery, all behind one yellow "T". This contract covers the first-party public surface the source inspected for tokens on 2026-05-27: the corporate Kakao Mobility site at `https://www.kakaomobility.com`. The YAML token set is `prose-derived`. Kakao Mobility does not publish a public UI token layer. Brand yellow `#FEE500` is the well-documented Kakao corporate color; product UI grays and blacks follow the live black-led corporate surface (kakaomobility.com, WebFetch 2026-05-27) and standard Korean app conventions. Treat product hexes as conventional, not from a documented token doc. Every value stays attached to the surface or evidence class that established it. Reading that corporate URL as this contract's inspected token surface, keeping product hexes in the conventional class the source assigned them, keeping every value attached to the surface or evidence class that established it, and refusing to treat the corporate page as a computed-style extract of an unobserved Kakao T trip screen, are derived editorial implementation inferences from the verified surfaces; they are not Kakao T-authored or a separately published UI specification.

On the corporate Kakao Mobility surface the palette is black-and-white-dominant: deep charcoal headings, generous whitespace, restrained sans-serif type, with yellow used as a sparing accent rather than a flood. The source records the atmosphere as "friendly infrastructure" — approachable enough that anyone hails a taxi without thinking, serious enough to be trusted with real-time location and payment. The hex values, the two-register split, and the corporate-page reservation of yellow are recorded. Calling the identity a knife's edge between two registers, calling the mobility product more sober than yellow alone would suggest, calling black-led restraint deliberate, and reading `#FEE500` as a beacon rather than a wallpaper against a map and white sheets, are derived editorial implementation inferences from the verified surfaces; they are not Kakao T-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Kakao T (카카오 T) is the mobility super-app of Kakao Mobility Corp., the transportation arm of the Kakao group. It launched in 2017 — the "T" stands for *transportation* — consolidating what had been separate Kakao services (Kakao Taxi from 2015, Kakao Driver, Kakao Parking) into one app. Today it spans taxi, designated-driver (대리운전), parking, bike, navigation, flights, and quick-delivery: the single yellow icon Koreans tap to get from anywhere to anywhere. The brand inherits Kakao's most powerful asset — the yellow. KakaoTalk made `#FEE500` a national signal of "the friendly app everyone uses," and Kakao T trades on that familiarity to make hailing a taxi feel as ordinary as sending a message. But mobility carries higher stakes than chat — real-time location, payment, a stranger's car — so the product dials the playfulness down: the corporate and product surfaces are black-led and sober, with yellow reserved for the moments that matter (the call button, the matched car). The design thesis is *friendly infrastructure*: approachable enough to use without thinking, serious enough to trust with your route home. What Kakao T refuses: the loud, gamified maximalism of some consumer apps (the map and trip state must stay legible), and the cold, utilitarian gray of legacy transit interfaces. It occupies the warm middle — yellow when it counts, calm everywhere else. The year 2017, the expansion of "T", Kakao Taxi from 2015, Kakao Driver, Kakao Parking, the seven-service span, the KakaoTalk yellow-as-national-signal sentence, the design thesis, the refusal pair, and that closing warm-middle sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-thesis narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and refusing to take them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification. Each names a surface or control the source records.

- Call a ride with `호출하기` on the Kakao T product the source describes.
- Follow live trip state on the map and the persistent bottom sheet.
- Read the Kakao Mobility corporate surface at `https://www.kakaomobility.com`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its three entries as fictional archetypes informed by publicly described Korean mobility-app user segments, not individual people, so those biographies are dropped rather than promoted, and no name, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: anyone who hails a taxi without thinking; riders who read in motion; Koreans who tap the single yellow icon to get from anywhere to anywhere. Reading those source-named groups as this product's audience, and dropping the source's archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not Kakao T-authored or a separately published UI specification.

- Kakao yellow `#FEE500` as the brand color and high-attention CTA accent (not a flood)
- Black / near-black (`#000000` / `#191919`) leading text and "dark" actions — the grown-up half of the palette
- Map-first: chrome recedes so the live map and trip state dominate
- Kakao house typeface for brand surfaces; Pretendard / Korean system stack for product UI
- Friendly-but-trustworthy "mobility infrastructure" tone, not playful-cute
- Rounded, soft component geometry (8–12px radii) keeping the yellow approachable
- Bottom-sheet-driven flows over a persistent map canvas

### Principles

These six items are a derived editorial implementation inference from the verified surfaces; they are not Kakao T-authored or a separately published UI specification. The source states them in its own Principles section. Every *UI implication* below is that same derived class.

1. **The map is the product.** At the moment of use the app is mostly a live map; chrome must recede. *UI implication:* trip state lives in a bottom sheet over a full-bleed map, not in stacked full-screen pages.
2. **Yellow is a beacon, not a wallpaper.** `#FEE500` marks the single most important action and the live state. *UI implication:* one yellow CTA per screen; backgrounds stay white/black; black text on yellow for contrast.
3. **Black is the grown-up half.** The sober black-led palette is what lets a playful yellow be trusted with location and payment. *UI implication:* strong non-yellow actions and all body text use `#191919`.
4. **Glance, don't read.** Riders use the app in motion. *UI implication:* trip-critical info (ETA, fare, status) is the highest-contrast, largest text; everything else recedes.
5. **State over navigation.** Each trip step grows the sheet rather than pushing a new page. *UI implication:* model flows as sheet heights and live status, not screen stacks.
6. **Reassure, don't pressure.** Mobility copy is calm status, never urgency marketing. *UI implication:* present-progressive `해요체` status lines; no exclamation pressure on CTAs.

### Application rules

The source states these five as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Kakao T-authored or a separately published UI specification.

- Use `#FEE500` for the single primary CTA and live active markers — high-attention, sparing
- Put black `#191919` text on yellow buttons for contrast (never white on yellow)
- Let the map dominate; keep chrome to the bottom sheet and minimal top controls
- Use tabular numerals for fares, ETAs, and distances
- Use the dark `#191919` button for strong actions where yellow would be too loud

### Avoid

The source states these five as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Kakao T-authored or a separately published UI specification.

- Don't flood backgrounds with yellow — it's a beacon, not a wallpaper
- Don't use white text on the yellow CTA (fails contrast; black is correct)
- Don't crowd the map with chrome — trip state lives in the sheet
- Don't introduce a second saturated brand hue competing with yellow
- Don't make the tone cute/playful — mobility is friendly infrastructure, trusted with location + payment

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping official `#FEE500` beside token-set `#fee500`, keeping `#EBECED` and `#D1D3D5` on the prose roles that name them rather than inventing YAML keys, and keeping product hexes in the conventional class the source assigned them, are derived editorial implementation inferences from the verified surfaces; they are not Kakao T-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Kakao Yellow** (`#fee500` / `#FEE500`): signature color. Primary CTA (`호출하기`), active vehicle marker, matched-driver highlight, logo lockup. High-attention accent — used sparingly, never as a full background flood. Token-set path `tokens.colors.primary`. `tokens.colors.brand` is the same hex on a second key.
- **Kakao Yellow Pressed** (`#f2d900` / `#F2D900`): slightly deeper yellow for pressed/hover on the primary CTA. Token-set path `tokens.colors.primary-hover`.
- **Kakao Black** (`#000000`): logo "T", strongest brand text, "dark" primary action backgrounds. Token-set path `tokens.colors.black`.
- **Near Black** (`#191919`): primary headings and labels — the warm near-black of the corporate surface. Token-set path `tokens.colors.foreground`. `tokens.colors.on-primary` is the same hex on a second key (text on yellow).
- **Text Strong** (`#26282b` / `#26282B`): strong body labels, list titles. Token-set path `tokens.colors.text-strong`.
- **Text Body** (`#4b4f54` / `#4B4F54`): body text, descriptions, trip metadata. Token-set path `tokens.colors.body`.
- **Text Secondary** (`#76787a` / `#76787A`): secondary labels, captions, timestamps. Token-set path `tokens.colors.muted`.
- **Text Tertiary** (`#a2a4a6` / `#A2A4A6`): placeholder, disabled labels, low-emphasis fine print. Token-set path `tokens.colors.text-tertiary`.
- **Pure White** (`#ffffff` / `#FFFFFF`): bottom sheets, cards, the chrome over the map. Token-set path `tokens.colors.canvas`.
- **Surface Gray** (`#f5f6f7` / `#F5F6F7`): section backgrounds, inactive segmented backgrounds, skeleton blocks. Token-set path `tokens.colors.surface`.
- **Surface Gray Strong** (`#EBECED`): dividers' surface variant, secondary fills. No YAML color key.
- **Divider** (`#e5e6e8` / `#E5E6E8`): hairline row separators, card borders. Token-set path `tokens.colors.hairline`.
- **Border Strong** (`#D1D3D5`): active input outlines, emphasized edges. No YAML color key.
- **Success** (`#0fb882` / `#0FB882`): trip-complete, payment-confirmed, on-the-way green. Token-set path `tokens.colors.success`.
- **Info / In-progress** (`#3478f6` / `#3478F6`): en-route status, ETA accent, map route line. Token-set path `tokens.colors.info`.
- **Warning** (`#ff8a00` / `#FF8A00`): surge / wait advisories, attention states. Token-set path `tokens.colors.warning`.
- **Error** (`#f5444c` / `#F5444C`): cancellation, payment failure, destructive actions. Token-set path `tokens.colors.error`.

The source records an unresolved conflict: brand yellow `#FEE500` (high-attention accent) vs. black-led product/corporate surface — resolved in the source as a documented two-register palette (yellow = beacon CTA, black = body + dark actions), consistent with the live corporate page where yellow is sparing. Keeping both registers, and refusing to collapse them into one fill, is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 20 | `tokens.spacing.lg` |
| xl | 24 | `tokens.spacing.xl` |
| xxl | 32 | `tokens.spacing.xxl` |

The source also writes a base unit of `8px`, common values 4, 8, 12, 16, 20, 24, 32, sheet padding `20px`, and map chrome insets `16px`. `tokens.spacing.sm: 8` is not the `8px` compact radius. `tokens.spacing.md: 12` is not `tokens.rounded.md: 12`. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16`, not the 16px type roles, and not the `16px` map-chrome inset written as a second key. `tokens.spacing.lg: 20` is not the sheet `20px` padding and not `tokens.components.dialog-sheet.radius: 20px`. `tokens.spacing.xl: 24` is not fare-display `24`. `tokens.spacing.xxl: 32` is not the Display Hero `28–32px` band. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| sm | 8 | `tokens.rounded.sm` |
| md | 12 | `tokens.rounded.md` |
| lg | 16 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

The source's prose radius scale is Compact (`8px`) for chips' inner and small controls, Comfortable (`12px`) for buttons, inputs, and vehicle cards, Large (`16px`) for trip/receipt cards, Sheet (`20px`) for bottom-sheet top corners, and Pill (`999px`) for status chips and the handle. `tokens.rounded.sm: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.md: 12` is not `tokens.spacing.md: 12`. `tokens.rounded.lg: 16` is not `tokens.spacing.base: 16`. `tokens.rounded.full: 9999` is a YAML step; it is not the component `999px` pill radius. The sheet `20px` radius lives on `tokens.components.dialog-sheet.radius`; it is not a YAML rounded step. Keeping those local radii on their components, and keeping `full: 9999` on its own key path beside `999px`, is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow, border-defined | Cards on white, list rows |
| Sheet (1) | `0px -4px 16px rgba(0,0,0,0.10)` | Bottom sheet over the map. Token-set path `tokens.shadow.sheet`. |
| Card (2) | `0px 2px 12px rgba(0,0,0,0.08)` | Trip / receipt cards. Token-set path `tokens.shadow.card`. |
| Floating (3) | `0px 4px 16px rgba(0,0,0,0.16)` | Toasts, floating map buttons (`현재 위치`). Token-set path `tokens.shadow.floating`. |

`tokens.components.toast-snackbar.shadow` is `0px 4px 12px rgba(0,0,0,0.16)`. That 12px blur is the toast record. It is not `tokens.shadow.floating`'s 16px blur. The source keeps both writings; they are not collapsed. Elevation matters most where chrome floats over the map — the bottom sheet and floating map controls cast soft, neutral, single-layer shadows so they read as "above the map." On flat white surfaces, depth is border-defined to keep the look calm. No colored shadows. Reading that stack as map-over-chrome elevation rather than a universal card lift, and keeping the toast 12px blur beside the floating 16px blur, are derived editorial implementation inferences from the verified surfaces; they are not Kakao T-authored or a separately published UI specification.

### Motion

Durations the source records, kept as duration tokens. They are not easing curves.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, chip select |
| `motion-fast` | 150ms | Hover, press, small reveals |
| `motion-standard` | 250ms | Sheet snap, card expand, tab switch |
| `motion-slow` | 400ms | Map fly-to, matched-driver reveal |
| `motion-sheet` | 300ms | Bottom-sheet height transitions between trip steps |

Unsourced easing curves from the catalog template (`ease-standard`, `ease-enter`, `ease-exit`, `ease-emphasized`) are omitted at the curve-value boundary. The source's use line that default motion is 90% of motion is kept as that use claim; it does not restore a curve. Signature motions the source names stay: sheet step transition (`motion-sheet` height change, content cross-fade; the sheet grows, it never navigates); driver-matching radar (yellow `#FEE500` radar/ring pulses outward from the pickup pin — the one place the brand yellow becomes kinetic); map fly-to (`motion-slow` pan-and-zoom to frame the route). Under `prefers-reduced-motion: reduce`, the radar becomes a static indicator, sheet transitions become instant opacity changes, and map fly-to snaps. No exceptions.

Spring/overshoot is avoided on trip surfaces — a gentle settle, not a bounce. That spring stance is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

Omitting the four unsourced curves, keeping the five duration rows as duration tokens rather than easing curves, keeping the 90% default-motion use claim as a use claim that does not restore a curve, keeping the four signature motions, and holding the five-kind per-component promotion gate rather than treating a single official curve as sufficient, are derived editorial implementation inferences from the verified surfaces; they are not Kakao T-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not Kakao T-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | Kakao house typeface (`Kakao`, `Kakao OTF`, Kakao Sandoll) is referenced from a SandollCloud listing for branded / marketing surfaces. It is not a verified product-UI token. |
| Live corporate surface-use | The 2026-05-27 WebFetch of kakaomobility.com records a black-dominant corporate surface and restrained sans-serif type. It does not publish a universal current typography token. |
| Practical product-UI fallback | `Pretendard` with the Korean system stack is the source's conventional product-UI family, not a verified token. |
| Official distributed asset | No Kakao T-exclusive distributed type family was verified. Pretendard's upstream project is a font asset, not a Kakao T brand asset. |
| Declared-only | Kakao house faces remain declared for brand surfaces until a product-UI load is observed. |
| Monospace | `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace` for fare/ETA tabular contexts. Token-set path `tokens.typography.family.mono`. |

### Family

- **Brand:** `"Kakao", "Kakao OTF", ...` — the Kakao house typeface for branded / marketing surfaces.
- **Product UI:** `Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", -apple-system, BlinkMacSystemFont, "Noto Sans KR", sans-serif`. Token-set path `tokens.typography.family.sans`.
- **Monospace:** `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace` (fare/ETA tabular contexts).

Do not replace an unavailable Kakao house face with Pretendard and call the result Kakao. Do not present the system stack as Pretendard. That fallback-never-substitute reading is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). The parenthetical px figures are the source §3 spelling, not a replacement of the YAML ratio. Token-set `use` strings are kept verbatim. Display Hero YAML size is `30`; the §3 band is `28–32px`. Both writings stay. Fare Display YAML has size `24` and weight `700` and no lineHeight; the §3 spelling is `24px+` / `700` / `tight`. Keeping YAML line heights as unitless ratios, keeping the YAML singles and the §3 px spellings on separate readings, and refusing to rewrite `tight` as a ratio, are derived editorial implementation inferences from the verified surfaces; they are not Kakao T-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use |
|---|---|---:|---:|---|---|
| Display Hero | Pretendard | 30 (`28–32px`) | 700 | 1.3 | Marketing hero, onboarding |
| Heading Large | Pretendard | 22 (`22px`) | 700 | 1.35 | Sheet headers |
| Heading | Pretendard | 18 (`18px`) | 600 | 1.4 | Card titles, vehicle-class headers |
| Subtitle | Pretendard | 16 (`16px`) | 600 | 1.5 | List headers, fare summary label |
| Body Large | Pretendard | 16 (`16px`) | 400 | 1.5 | Descriptions, address detail |
| Body | Pretendard | 14 (`14px`) | 400 | 1.5 | Standard reading text, trip metadata |
| Label / CTA | Pretendard | 16 (`16px`) | 600 | 1.4 | Button labels |
| Caption | Pretendard | 12 (`12px`) | 400 | 1.4 | Timestamps, fine print, ETA sublabels |
| Fare Display | Pretendard | 24 (`24px+`) | 700 | tight | Estimated/final fare, tabular numerals |

Conventions the source records: three weights — 700 for headings + fares, 600 for CTAs/emphasis, 400 for body; tabular numerals for money + time so fares, ETAs, and distances do not jitter as they update live; sentence-case, no all-caps — Korean and Latin both stay sentence-case; glanceable hierarchy — trip state (ETA, fare, status) is always the highest-contrast text on screen. The Heading Large use also names the sheet question `어디로 갈까요?`.

The 16px Label / CTA size is not `tokens.spacing.base: 16`. The 14px Body size is not a spacing step. The 12px Caption size is not `tokens.spacing.md: 12`. The 24 Fare Display size is not `tokens.spacing.xl: 24`. The 22 Heading Large size is not a spacing step. Reading those sizes as the roles named beside them, rather than as shared numerals across spacing, is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=kakaomobility.com&sz=128`. That slug is an identity pointer, not a Kakao T-hosted brand file. Reading it as an identity pointer rather than hosted brand artwork is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Kakao Mobility publishes no public component spec; geometry below reflects the live corporate surface and standard Kakao/Korean app conventions. Treat as conventional.

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| Empty (no ride history) | Single `#76787A` line (`최근 이용 내역이 없어요`) + one yellow CTA (`택시 호출하기`). No clutter. |
| Empty (no nearby vehicles) | `#76787A` line (`주변에 차량이 없어요`) + retry; map stays visible. |
| Loading (matching driver) | Pulsing radar/ring animation over the map in `#FEE500`; sheet shows `기사님을 찾고 있어요` with a subtle progress shimmer. |
| Loading (sheet first paint) | Skeleton blocks at `#F5F6F7` matching the sheet layout. Fares render as `--` until resolved. |
| Error (call failed) | Snackbar `#26282B` white text (`호출에 실패했어요. 다시 시도해 주세요`), 3s. Map unaffected. |
| Error (inline field) | Input border `#F5444C`, caption below in `#F5444C` 12px, one actionable sentence. |
| Success (matched) | Sheet transitions to matched-driver card — name, vehicle, plate, ETA 24px/700, live status pill `운행 중` in `#3478F6`. Matched-driver name 18px/600; fare 24px/700 tabular. |
| Success (payment) | Receipt card with `#0FB882` checkmark, final fare 24px/700 tabular, single `확인`. |
| Skeleton | `#F5F6F7` blocks at exact dimensions, ~1.2s shimmer, component-radius rounding. Never on live fares (show `--`). |
| Disabled (CTA) | Yellow button → bg `#F5F6F7`, text `#A2A4A6`. Geometry unchanged. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic Focus capture is not `focus-visible` treatment evidence; the search field's observed `1px` border `#191919` is recorded as that observed Focus, and it is not a color assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination tab, a selection row, or a sheet surface that commits no operation in place — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not Kakao T-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary (호출 / Yellow)

- Role: The primary call-to-action — `호출하기`, `결제하기`. Black text on yellow for contrast. ~52px tall.
- Primitive type: `button` · Kind: interactive
- Background: `#fee500` / `#FEE500`
- Text: `#191919`
- Border: none
- Radius: `12px`
- Padding: `14px 20px`
- Height: `52px`
- Font: `16px / 600`
- Token-set use: `Primary CTA 호출하기 / 결제하기`
- Observed: pressed/hover background `#f2d900` / `#F2D900`; disabled background `#f5f6f7` / `#F5F6F7`, text `#a2a4a6` / `#A2A4A6`
- The 52px height is this CTA's geometry. The `14px 20px` padding is this control's padding. The 16px font size is not `tokens.spacing.base: 16`. The `12px` radius is `tokens.components.button-primary.radius`; it is not `tokens.spacing.md: 12` written as a radius. Reading those figures as this control's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web commit control; pressed/hover `#F2D900` is the source's shared writing |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | Disabled treatment captured above |
| loading | applicable | `호출하기` / `결제하기` is an in-place commit; visual treatment omitted |
| error | applicable | A failed call or payment can be reported on this control; visual treatment omitted |
| success | applicable | A completed call or payment can be reported on this control; visual treatment omitted |

### Dark (Secondary primary)

- Role: Strong action where yellow would be too loud (`로그인`, `다음`). The grown-up half of the palette.
- Primitive type: `button` · Kind: interactive
- Background: `#191919`
- Text: `#ffffff` / `#FFFFFF`
- Border: none
- Radius: `12px`
- Padding: `14px 20px`
- Font: `16px / 600`
- Token-set use: `Strong action where yellow too loud 로그인 / 다음`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | A strong action can be gated; visual treatment omitted |
| loading | applicable | `로그인` / `다음` is an in-place commit; visual treatment omitted |
| error | applicable | A failed commit can be reported on this control; visual treatment omitted |
| success | applicable | A completed commit can be reported on this control; visual treatment omitted |

### Outline / Ghost

- Role: Secondary action paired with a primary (`취소`, `다른 차량 보기`)
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff` / `#FFFFFF`
- Text: `#26282b` / `#26282B`
- Border: `1px solid #d1d3d5` / `#D1D3D5`
- Radius: `12px`
- Padding: `14px 20px`
- Font: `16px / 600`
- Token-set use: `Secondary action 취소`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A secondary action can be gated; visual treatment omitted |
| loading | not-applicable | Secondary pairing (`취소`, `다른 차량 보기`); it commits no operation in place |
| error | not-applicable | Secondary pairing; it commits no operation in place |
| success | not-applicable | Secondary pairing; it commits no operation in place |

### Danger

- Role: Destructive (`호출 취소`)
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff` / `#FFFFFF`
- Text: `#f5444c` / `#F5444C`
- Border: `1px solid #f5444c` / `#F5444C`
- Radius: `12px`
- Padding: `14px 20px`
- Font: `16px / 600`
- Token-set use: `Destructive 호출 취소`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable destructive control; visual treatment omitted |
| disabled | applicable | A destructive action can be gated; visual treatment omitted |
| loading | applicable | `호출 취소` is an in-place destructive commit; visual treatment omitted |
| error | applicable | A failed cancel can be reported on this control; visual treatment omitted |
| success | applicable | A completed cancel can be reported on this control; visual treatment omitted |

### Search / Address Field

- Role: `어디로 갈까요?` destination search — the entry point of every trip
- Primitive type: `input` · Kind: interactive
- Background: `#f5f6f7` / `#F5F6F7`
- Text: `#26282b` / `#26282B`
- Border: none (filled)
- Radius: `12px`
- Padding: `14px 16px`
- Font: `16px / 400`
- Placeholder: `#A2A4A6`
- Token-set use: `어디로 갈까요? destination search`
- Observed: Focus `1px` border `#191919`. That observed Focus is not a `focus-visible` treatment.
- The `14px 16px` padding is this field's padding. The 16px in that padding is not `tokens.spacing.base: 16`. Reading that padding as this field's geometry rather than `tokens.spacing.base: 16`, and recording the observed Focus as that observed Focus rather than as `focus-visible` treatment, are derived editorial implementation inferences from the verified surfaces; they are not Kakao T-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A destination field can be gated; visual treatment omitted |
| loading | not-applicable | Destination search field; it commits no operation in place |
| error | applicable | Form field; inline error is a separate token-set record |
| success | not-applicable | Destination search field; it commits no operation in place |

### Error input

- Role: Invalid input, paired with `#F5444C` caption
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff` / `#FFFFFF`
- Text: `#26282b` / `#26282B`
- Border: `1px solid #f5444c` / `#F5444C`
- Radius: `12px`
- Padding: `14px 16px`
- Font: `16px / 400`
- Token-set use: `Invalid input`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | This record is the invalid-input treatment |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | An invalid field can be gated; visual treatment omitted |
| loading | not-applicable | Invalid-input variant; it commits no operation in place |
| error | applicable | This record is the error treatment |
| success | not-applicable | Invalid-input variant; it commits no operation in place |

### Vehicle-Class Card

- Role: `일반` / `블루` / `모범` / `벤티` selection rows in the call sheet
- Primitive type: `card` · Kind: interactive
- Background: `#ffffff` / `#FFFFFF`
- Border: `1px solid #e5e6e8` / `#E5E6E8`
- Radius: `12px`
- Padding: `16px`
- Shadow: none (border-defined)
- Selected: `2px` border `#191919` + subtle `#FEE500` accent on the class icon
- Token-set use: `Vehicle-class selection rows`
- Class name 16px/600 `#26282B`; est. fare 14px/400 `#76787A` tabular. That pairing sat only in the source Agent Prompt Guide and is landed here (A3).
- The `16px` padding is this card's padding. It is not `tokens.spacing.base: 16`. The `12px` radius is this card's radius; it is not `tokens.spacing.md: 12`. Reading those figures as this card's geometry rather than a spacing step, and landing the source Agent Prompt Guide's class-name / est-fare pairing on this card rather than dropping it, are derived editorial implementation inferences from the verified surfaces; they are not Kakao T-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web selection row; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable selection row; visual treatment omitted |
| disabled | applicable | A vehicle-class row can be gated; visual treatment omitted |
| loading | not-applicable | Vehicle-class selection row; it commits no operation in place |
| error | not-applicable | Vehicle-class selection row; it commits no operation in place |
| success | not-applicable | Vehicle-class selection row; it commits no operation in place |

### Trip / Receipt Card

- Role: Active-trip summary, ride receipt — fare 24px/700 tabular
- Primitive type: `card`
- Background: `#ffffff` / `#FFFFFF`
- Border: none
- Radius: `16px`
- Padding: `20px`
- Shadow: `0px 2px 12px rgba(0,0,0,0.08)`
- Token-set use: `Active-trip summary, ride receipt`
- The `16px` radius is `tokens.components.card-trip.radius`. It is not `tokens.spacing.base: 16` and not `tokens.rounded.lg: 16` written as this card. The `20px` padding is this card's padding; it is not `tokens.spacing.lg: 20` and not the sheet `20px` radius. Reading those figures as this card's geometry rather than a spacing or rounded step is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Status Chip

- Role: Filter chips, vehicle tags (`예약`, `추천`)
- Primitive type: `badge` · Kind: interactive
- Background: `#f5f6f7` / `#F5F6F7`
- Text: `#4b4f54` / `#4B4F54`
- Border: none
- Radius: `999px`
- Padding: `4px 12px`
- Font: `12px / 600`
- Token-set use: `Filter chips, vehicle tags`
- The `999px` radius is this chip's pill. It is not `tokens.rounded.full: 9999`. Reading that `999px` as this chip's radius rather than the YAML `full` step is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable chip; visual treatment omitted |
| disabled | applicable | A filter chip can be gated; visual treatment omitted |
| loading | not-applicable | Filter chip / vehicle tag; it commits no operation in place |
| error | not-applicable | Filter chip / vehicle tag; it commits no operation in place |
| success | not-applicable | Filter chip / vehicle tag; it commits no operation in place |

### Live Status Badge

- Role: `도착` / `운행 중` status pill on the trip card
- Primitive type: `badge`
- Background: `rgba(15,184,130,0.12)` (success) / `rgba(52,120,246,0.12)` (en-route)
- Text: `#0fb882` / `#0FB882` / `#3478F6`
- Border: none
- Radius: `999px`
- Padding: `4px 10px`
- Font: `12px / 700`
- Token-set use: `도착 / 운행 중 status pill`
- YAML `tokens.components.badge-live` records the success green pair. The en-route blue pair is the source §4 writing on the same pill role; it is not moved onto a different component. Keeping both pairs on this pill role rather than splitting them across components is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Trip Sheet

- Role: The persistent sheet riding over the map — destination, vehicle pick, matched-driver, en-route ETA. The core mobility interaction surface.
- Primitive type: `dialog` · Kind: interactive
- Background: `#ffffff` / `#FFFFFF`
- Text: `#191919`
- Border: none
- Radius: `20px` (top corners only)
- Padding: `20px`
- Shadow: `0px -4px 16px rgba(0,0,0,0.10)`
- Handle: `36px × 4px` `#E5E6E8` pill, centered top
- Token-set use: `Persistent bottom sheet over the map, 36x4px handle`
- The `20px` radius is `tokens.components.dialog-sheet.radius`. It is not a YAML rounded step and not `tokens.spacing.lg: 20`. The `20px` padding is this sheet's padding. Reading those figures as this sheet's geometry rather than a spacing or rounded step is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web sheet; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable sheet; visual treatment omitted |
| disabled | applicable | A sheet can be gated; visual treatment omitted |
| loading | not-applicable | Persistent sheet surface; it commits no operation in place |
| error | not-applicable | Persistent sheet surface; it commits no operation in place |
| success | not-applicable | Persistent sheet surface; it commits no operation in place |

### Bottom Tab

- Role: `홈` / `이용내역` / `결제` / `전체` navigation
- Primitive type: `tab` · Kind: interactive
- Background: `#ffffff` / `#FFFFFF`
- Active text/icon: `#191919`
- Inactive: `#A2A4A6`
- Border: `1px solid #e5e6e8` / `#E5E6E8` (top only)
- Font: `11px / 500`
- Token-set use: `홈 / 이용내역 / 결제 / 전체 nav`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | Bottom navigation tab; it commits no operation in place |
| error | not-applicable | Bottom navigation tab; it commits no operation in place |
| success | not-applicable | Bottom navigation tab; it commits no operation in place |

### Snackbar

- Role: `호출이 취소되었어요` transient feedback, 3s auto-dismiss
- Primitive type: `toast`
- Background: `#26282b` / `#26282B`
- Text: `#ffffff` / `#FFFFFF`
- Border: none
- Radius: `12px`
- Padding: `12px 16px`
- Shadow: `0px 4px 12px rgba(0,0,0,0.16)`
- Font: `14px / 500`
- Token-set use: `Transient feedback, 3s auto-dismiss`
- The 12px blur is this toast record. It is not `tokens.shadow.floating`'s `0px 4px 16px rgba(0,0,0,0.16)`. Reading that 12px blur as this toast's shadow rather than the floating token is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Map-canvas-first: a near-full-screen map with a draggable bottom sheet over it. Sheet content is single-column, full-width with `20px` h-padding. Marketing/web is a centered column, max ~1200px. The map is the page. Chrome recedes; the live map and trip state get the screen. Sheet states stack: each trip step (destination → vehicle → matching → en-route) is its own sheet height; the sheet grows/shrinks rather than navigating pages. Glance density: trip-critical info (ETA, fare, status) is large and high-contrast; everything else recedes. These layout rules are the source's own list. Reading them as the layout contract for the described Kakao T product and the inspected corporate surface, rather than as a measurement transferred from one surface onto the other, is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile (Primary) | <768px | Full-screen map + draggable bottom sheet; the canonical experience |
| Tablet | 768–1024px | Map + side panel for trip flow |
| Desktop (Web) | >1024px | Marketing/corporate layout, centered ~1200px column |

Touch targets the source records: primary CTA ~52px tall; vehicle-class rows minimum 56px; floating map controls 44–48px circular targets; sheet handle a large drag affordance. The bottom sheet is the responsive unit — it expands to fill on small screens, becomes a fixed side panel on large. Map stays full-bleed behind the sheet at all sizes. Map tiles full-bleed; vehicle markers scale with zoom. Vehicle-class icons: consistent 40–48px, yellow accent on selected.

The 52px CTA, 56px vehicle-class rows, 44–48px floating map controls, 40–48px vehicle-class icons, 36px × 4px handle, and ~1200px marketing column are the source's own writings on the roles named beside them. Reading those figures as those roles rather than as a single cross-viewport specification is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Kakao T speaks like a calm, capable dispatcher who's already on it — friendly, brief, and reassuring, never chatty. The default register is soft-polite `해요체` (`잠시만 기다려 주세요`, `기사님을 찾고 있어요`), warm but trustworthy. Korean is the unquestioned primary voice. Copy is action-and-status-oriented because the user is mid-task and often in motion: tell them what's happening and what's next in as few words as possible. No exclamation-mark pressure, no marketing superlatives on trip surfaces. Reading that register as this contract's voice, rather than as a separately published Kakao T microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| CTAs | Short Korean verb (`호출하기`, `결제하기`, `호출 취소`). |
| Status updates | Present-progressive, reassuring (`기사님을 찾고 있어요`, `차량이 도착했어요`). |
| Success toasts | Past-tense single sentence (`결제가 완료되었어요`). No emoji on system surfaces. |
| Error messages | Blameless, specific, one action (`주변에 차량이 없어요. 잠시 후 다시 시도해 주세요`). Never `오류가 발생했습니다`. |
| Empty states | Warm + one action (`최근 이용 내역이 없어요`). |
| Safety / legal | Formal `합니다` register — the single exception (location, payment, 안심 disclosures). |

**Forbidden phrases.** `오류가 발생했습니다` (generic error), exclamation-as-pressure on CTAs, marketing superlatives (`최고의`, `역대급`) on trip chrome, English-first strings on Korean surfaces, emoji on system-generated trip toasts.

**Voice samples.**

- `우리의 기술로 생활을 움직입니다` — corporate mission line. Verified: kakaomobility.com via WebFetch 2026-05-27.
- `자세히 보기` — corporate CTA pattern. Verified: kakaomobility.com via WebFetch 2026-05-27.
- `기사님을 찾고 있어요` — illustrative matching-status copy. Follows Kakao T's matching flow; not verified verbatim.
- `차량이 도착했어요` — illustrative arrival notification. Not verified as live copy.

Classifying the last two lines as illustrative samples rather than verified live copy, and keeping the corporate mission and `자세히 보기` attached to kakaomobility.com rather than to a trip chrome label, is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

Published names and labels the source records, kept byte-exact: Kakao T, 카카오 T, 호출하기, 결제하기, 로그인, 다음, 취소, 호출 취소, 어디로 갈까요?, 홈, 이용내역, 결제, 전체, 도착, 운행 중, 일반, 블루, 모범, 벤티, 예약, 추천, 호출이 취소되었어요, 자세히 보기, 우리의 기술로 생활을 움직입니다, 해요체, 합니다, 잠시만 기다려 주세요, 기사님을 찾고 있어요, 차량이 도착했어요, 결제가 완료되었어요, 주변에 차량이 없어요. 잠시 후 다시 시도해 주세요, 최근 이용 내역이 없어요, 오류가 발생했습니다, 최고의, 역대급, 안심, 대리운전, 택시 호출하기, 호출에 실패했어요. 다시 시도해 주세요, 확인, 다른 차량 보기, 현재 위치.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not Kakao T-authored or a separately published UI specification.

- a published Kakao Mobility UI token layer
- getdesign.md/kakaot and styles.refero.design records (source: not checked)
- Kakao house typeface as a verified product-UI token
- product hexes as documented tokens (source: conventional)
- verbatim confirmation of the illustrative matching and arrival lines
- unsourced easing curve values
- reusable hover or pressed values on Dark, Outline, and Danger
- `focus-visible` visual treatments
