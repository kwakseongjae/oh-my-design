# Melon Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Melon is recorded by the source as Korea's dominant music-streaming service, operated by Kakao Entertainment. This contract covers the verified inspection of the desktop web surface of melon.com (`https://www.melon.com`). The source also names `https://tech.kakaoent.com` (Kakao Entertainment tech, Melon's operator) and `https://www.kakaocorp.com/page/service/service/Melon` (Kakao Corp official Melon service page) as brand-owned sources; it supplies operator and service facts, and the source attaches no interface value to either. Every color, type, geometry, elevation, and component value below stays attached to the melon.com desktop web surface that established it. Treating that melon.com desktop web surface as this contract's token surface, and keeping the Kakao Entertainment tech page and the Kakao Corp Melon service page as operator/service facts that do not supply interface tokens, is a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification.

The following characterization of the interface is a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification. Melon is Korea's dominant music-streaming service, operated by Kakao Entertainment, and its interface wears that scale on its sleeve: a dense, white, content-first surface where charts, lists, and player controls are packed tightly together and the music is always the point. The atmosphere is utilitarian and high-density — small type at 12px for body and 13-14px for controls, near-black #1A1A1A headings, and sharp 0px corners everywhere — so the screen reads like a tightly ruled spreadsheet of songs rather than a soft consumer app. Against that white #FFFFFF ground, the signature Melon green (#00CD3C in the source CSS, rendering as a near-twin #00D344 on the live login button) is rationed carefully, lighting up only active navigation, selected tabs, player buttons, and primary actions. Everything else is a quiet grayscale hierarchy — #666666 for muted text, #999999 for the lightest labels and placeholders — that lets the green do all the signaling. The result is unmistakably brand-green-on-white: grid-like, efficient, and built for browsing thousands of tracks without visual fatigue. It is the look of a tool that expects you to scan, tap, and keep listening.

The brand account below is likewise a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification. Melon is Korea's dominant music-streaming service, operated by Kakao Entertainment. Its identity is anchored by the signature Melon green — #00CD3C in the source CSS, rendering as a near-twin #00D344 on the live login button — set against an almost entirely white, high-density interface. The narrative is one of utility at scale: thousands of tracks, packed charts, and player controls organized into a sharp, square, grid-like surface where the brand green is rationed to mark the live and actionable. It is a design that says streaming is a daily utility, and that the brand's job is to be fast, dense, and unmistakably green-on-white. This is narrative context; it does not by itself supply interface tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These three come from the modules and controls the source records on the captured melon.com desktop web surface. They do not come from the source's persona section. Reading those modules and controls as the primary tasks a person comes to this surface to perform is a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification.

- Scan packed charts and lists of tracks on the melon.com desktop web surface.
- Search from the search field.
- Sign in via the primary login / sign-in action.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's three persona entries are not independently verified audience records, so they are dropped here rather than restated; no name, age, city, or motivation from them is carried. At group level the source names a tool that expects you to scan, tap, and keep listening, and a streaming service that assumes you came to listen, not to read. Reading that group as the audience constraint for this surface is a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's recorded layer. Where a bullet characterizes a value rather than stating it — "rationed carefully", "grid-like", "lets the green do all the signaling" — that reading is a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification.

- White `#FFFFFF` / `#ffffff` canvas with signature Melon green `#00CD3C` / `#00cd3c` in the source CSS, rendering as a near-twin `#00D344` / `#00d344` on the live login button
- Near-black `#1A1A1A` / `#1a1a1a` headings, muted `#666666` body (live body renders rgb(102,102,102)), lightest `#999999` labels and placeholders
- Red accent `#DF2607` / `#df2607`, used sparingly
- Pretendard with 맑은 고딕 (Malgun Gothic) as the fallback; 12px body, 13-14px controls, weights observed: 400 (regular) on buttons and inputs
- Sharp 0px corners everywhere on buttons and inputs; YAML also records `full: 9999` as a radius step with no attached use
- No captured hover, pressed, focus, or disabled visual treatment is promoted

### Principles

These 6 items are a derived editorial implementation inference from the verified surface; they are not Melon-authored or a separately published UI specification.

- **Density over decoration** — pack charts and lists; show many rows; keep framing minimal.
- **Green is precious** — reserve the signature green (#00CD3C / #00D344) for active states and primary actions.
- **Sharp corners** — square 0px radius across components; no soft, rounded consumer look.
- **Color-driven hierarchy** — #1A1A1A / #666666 / #999999 do the structural work; type stays small.
- **White ground always** — #FFFFFF is the canvas that makes the green and the dense lists legible.
- **Content first** — the music and its metadata are the interface; chrome stays out of the way.

### Application rules

The source states these five as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surface; they are not Melon-authored or a separately published UI specification.

- Keep the ground white (#FFFFFF) and let dense lists and charts fill the screen.
- Ration the signature green (#00CD3C / live #00D344) for active states and primary actions only.
- Use square 0px corners on buttons and inputs to preserve the grid-like, streaming-tool feel.
- Build the text hierarchy from color — #1A1A1A for primary, #666666 for body, #999999 for the quietest labels.
- Use Pretendard (with 맑은 고딕 fallback) and keep type small: 12px body, 13-14px controls.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surface; they are not Melon-authored or a separately published UI specification.

- Invent rounded corners or soft cards — the corners are sharp (0px) throughout.
- Spread the green across large surfaces; it loses its signaling power if it stops being rare.
- Inflate type sizes; the density depends on small 12-14px text.
- Introduce the red accent (#DF2607) broadly — keep it as a sparing accent.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. YAML keys keep the lowercase hex the token set writes; source prose keeps the uppercase hex it writes. Both writings stay. Where a line also characterizes a value — "the brand-defining Melon green", "the only saturated color allowed to carry meaning", "a disciplined grayscale ladder" — that characterization is a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification.

- **Signature green** (`#00CD3C` / YAML `tokens.colors.signature-green` `#00cd3c`): the brand-defining Melon green; primary actions, active nav, selected tabs, player buttons (appears ~11x in the live CSS).
- **Darker green** (`#00B523` / YAML `tokens.colors.green-dark` `#00b523`): a deeper green variant used as a companion to the signature green.
- **Login button green** (`#00D344` / YAML `tokens.colors.green-login` `#00d344`): the live-rendered green on the primary login button; a near-twin of #00CD3C.
- **Near-black** (`#1A1A1A` / YAML `tokens.colors.text-primary` `#1a1a1a`): heading and primary text color against the white ground.
- **Muted gray** (`#666666` / YAML `tokens.colors.text-body`): default body text color (live body renders rgb(102,102,102)).
- **Light gray** (`#999999` / YAML `tokens.colors.text-muted`): the lightest text tier; secondary labels and input placeholder text.
- **Red accent** (`#DF2607` / YAML `tokens.colors.red-accent` `#df2607`): a sharp red accent used sparingly.
- **Ground** (`#FFFFFF` / YAML `tokens.colors.canvas` `#ffffff`): the white canvas the entire dense layout sits on.

The green is the only saturated color allowed to carry meaning; the reds appear as rare accents, and the rest of the palette is a disciplined grayscale ladder from #1A1A1A down through #666666 to #999999 on white.

Two further values are recorded only against a specific component and are kept there rather than promoted to a general role: the login-button background `#00d344` / `#00D344` and the search-input YAML background `#ffffff` beside the §4 search background `transparent`. Keeping those two values on their components rather than promoting them to a general role is a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification.

### Spacing

Token-set steps, unitless: `xs: 2 · sm: 4 · md: 8 · base: 12 · lg: 16 · xl: 24 · xxl: 32 · section: 48`. The unitless YAML steps stay unitless; they are not rewritten as a replacement `px`. Reading the compression at the low end as suiting a content-first streaming UI that must show many rows at once is a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification.

### Shape

Token-set steps, unitless: `sm: 0 · md: 0 · lg: 0 · full: 9999`. Captured buttons and inputs are 0px. The token set records `full: 9999`; no use is attached to `full` here. YAML `0` stays off prose `0px`. Reading 0px corners as uniformly square, reinforcing the dense, grid-like streaming layout rather than a soft, rounded consumer feel, and reading `full: 9999` as a recorded step rather than as a universal radius scale, are derived editorial implementation inferences from the verified surface; they are not Melon-authored or a separately published UI specification.

### Elevation

YAML `tokens.shadow.none` is `"none"`. There is no measured shadow or elevation token in the verified data, so depth here is communicated through color and contrast — near-black #1A1A1A and the signature green #00CD3C advancing against the white field — rather than through drop shadows or layered surfaces. Melon's surface is flat by design. With 0px radius on its buttons and inputs and a uniform white #FFFFFF ground, the UI avoids rounded cards and soft floating layers in favor of a dense, grid-like plane. The aesthetic is sharp, square, and screen-efficient, treating the page as a single tightly organized sheet. Reading that flatness, that color-and-contrast depth, and that single tightly organized sheet as the elevation contract for this surface is a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification.

### Motion

No motion, transition, or easing values were captured in the verified inspection of melon.com, so none are specified here. No motion token is promoted.

Qualitatively, the design's character is static and efficiency-driven — a dense, square, grid-like streaming surface — which implies restrained, functional motion (if any) rather than expressive animation. Any motion added in this style should stay subtle and quick, in keeping with the utilitarian, content-first feel, but no specific durations or curves are claimed because none were measured. That qualitative character, the implication of restrained, functional motion, and the "stay subtle and quick" instruction are a derived editorial implementation inference from the verified surface; they are not Melon-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation, and refusing a match against an official framework or vendor document as that gate, are derived editorial implementation inferences from the verified surface; they are not Melon-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, the official-product-use row as a negative lookup rather than a Melon type specification, the live Pretendard surface-use row, the License row as unresolved rather than a Melon brand asset, and the 맑은 고딕 fallback as a recorded fallback rather than as the brand face, are derived editorial implementation inferences from the verified surface; they are not Melon-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | The source records no published Melon typography specification. |
| Live computed surface-use | The captured melon.com desktop web surface renders visible text in Pretendard. Body text is recorded at 12px. |
| Official distributed asset | The source states no Melon-exclusive or Melon-distributed type family. None is claimed here. |
| Declared-only | The source records no declared-but-unused face. |
| License | The source records no font license. None is supplied here. |
| Fallback | 맑은 고딕 (Malgun Gothic) is the recorded fallback. It is not the brand face. |
| Outside this capture | Type for `https://tech.kakaoent.com` and `https://www.kakaocorp.com/page/service/service/Melon` is outside this capture. |

### Family

- **Sans:** `Pretendard`. Token-set path `tokens.typography.family.sans`.
- **Mono:** `Pretendard`. Token-set path `tokens.typography.family.mono`. The token record assigns the same family to both roles, and that is preserved rather than resolved into a separate monospace face.
- **Fallback:** 맑은 고딕 (Malgun Gothic).
- Do not substitute a different face for Pretendard and present it as the Melon face. Do not present 맑은 고딕 as the brand face. Reading Pretendard as deliberately small and dense, suiting a content-first streaming UI that must show many rows at once, and preserving the token record's assignment of the same family to sans and mono rather than resolving it into a separate monospace face, are derived editorial implementation inferences from the verified surface; they are not Melon-authored or a separately published UI specification.

### Type roles

YAML writes numeric sizes without a `px` suffix. Source §3 writes body as `12px` and controls as `13-14px`. Both writings stay. YAML line-height is not recorded; none is supplied here. Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim, keeping YAML `14` / `13` / `12` off prose `14px` / `13px` / `12px`, and keeping heading `14` off control `13` and off login-button `14px`, are derived editorial implementation inferences from the verified surface; they are not Melon-authored or a separately published UI specification.

| Role | Font | Size | Weight | Token-set use | Notes |
|---|---|---|---:|---|---|
| Headings / primary text | Pretendard | YAML `14` | 400 | Headings/primary text, near-black #1a1a1a | Source §3 names the role by color (near-black #1A1A1A) and does not give it a px size |
| Controls | Pretendard | YAML `13` / §3 `13-14px` | 400 | Interactive controls and inputs | interactive controls and inputs sit slightly larger than body for tap targets. Weights observed: 400 (regular) on buttons and inputs. Login button font is §4 `14px / 400` beside YAML `14px/400` |
| Body | Pretendard | YAML `12` / §3 `12px` | 400 | Dense list rows and metadata, muted gray | The dense default for list rows and metadata; renders in muted gray #666666 |

Color, not size, does most of the hierarchy work — near-black #1A1A1A for what matters, #666666 for supporting text, #999999 for the quietest labels. Reading that color-not-size hierarchy, and the type system as deliberately small and dense, is a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=melon.com&sz=128`. Frontmatter records `logo.type: favicon`. That URL is a third-party favicon-proxy pointer, not a Melon-hosted brand file.
- The reviewed material establishes no other first-party Melon image, icon, or illustration asset, and none is substituted here.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a Melon-hosted brand file is a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source's state contract, preserved in full:

- **Default text:** #666666 body at 12px on white #FFFFFF.
- **Primary text / headings:** near-black #1A1A1A.
- **Placeholder / quiet label:** #999999 (search input text and placeholder).
- **Active / selected (nav, tabs, player):** signature green #00CD3C.
- **Primary action (login button):** background #00D344, white #FFFFFF text, 42px height.
- **Accent:** red #DF2607, used sparingly.

Hover, pressed, focus, and disabled state values were not captured in the verified data and are intentionally left undocumented rather than invented.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

A recorded `focus` appearance is a different evidence kind from `focus-visible`. No `focus-visible` row carries a treatment.

The applicability note above, the `focus` / `focus-visible` evidence-kind distinction, every interactive-kind verdict, every applicability verdict, the reason given for either, attaching a YAML primitive type only when the token set records it, omitting kind and map on the list-row, keeping YAML values beside §4 values where they differ, keeping the Active / selected (nav, tabs, player) row as a surface-level named appearance, introducing no nav, tab, or player component, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surface; they are not Melon-authored or a separately published UI specification.

A `Primitive type` line is attached only when the source YAML records that type on that component. The Active / selected (nav, tabs, player) row is kept as a surface-level named appearance. The source harvests no nav, tab, or player component, and none is introduced.

### Login Button

- Role: primary login / sign-in action; the sharp-cornered green button that anchors account entry
- Primitive type: `button` · YAML `type: button` · Kind: interactive
- Anatomy: label
- Background: `#00D344` / YAML `tokens.components.login-button.bg` `#00d344`
- Text: `#FFFFFF` / YAML `fg` `#ffffff`
- Border: none
- Radius: YAML `0` · §4 `0px`
- Height: 42px
- Font: YAML `14px/400` · §4 `14px / 400`
- Token-set use: Primary login, sharp-cornered green
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured: background, text, border, radius, height, and font |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; the recorded focus evidence is a different kind, so no treatment is promoted into this row |
| disabled | applicable | A login control can be unavailable; visual treatment omitted |
| loading | applicable | Sign-in is an operation that runs to completion; it can be pending on the control that starts it. Visual treatment omitted |
| error | applicable | The same operation can fail. Visual treatment omitted |
| success | applicable | A control that commits sign-in can confirm its outcome. Visual treatment omitted |

### Search Input

- Role: search field; placeholder and text both render in light gray #999999
- Primitive type: `input` · YAML `type: input` · Kind: interactive
- Anatomy: value field
- Background: YAML `tokens.components.search-input.bg` `#ffffff` · §4 Background: transparent. Both writings stay; neither is selected.
- Text: `#999999` / YAML `tokens.components.search-input.fg`
- Radius: YAML `0` · §4 `0px`
- Height: 40px
- Font: YAML `13px/400` · §4 `13px / 400`
- Token-set use: Search field, light-gray text
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured: background writings, text, radius, height, and font |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; the recorded focus evidence is a different kind, so no treatment is promoted into this row |
| disabled | applicable | An input can be unavailable; visual treatment omitted |
| loading | applicable | A search started here runs and can be pending on the field. Visual treatment omitted |
| error | applicable | A search can fail. Visual treatment omitted |
| success | applicable | A search can resolve. Visual treatment omitted |

### Body / List Text

- Role: dense chart and list rows; the workhorse text style across the streaming grid
- Primitive type: `listItem` · YAML `type: listItem`
- Kind: omitted. The source records this as default row text and gives it no control role or interactive-kind evidence, so it declares no Core §4.4 state-applicability map and it is not recast as a control.
- Background: `#FFFFFF` / YAML `tokens.components.list-row.bg` `#ffffff`
- Text: `#666666` / YAML `tokens.components.list-row.fg`
- Border: none
- Radius: YAML `0` · §4 `0px`
- Font: YAML `12px/400` · §4 `12px / 400`
- Token-set use: Dense chart/list row text

Across components the corners are uniformly square (0px radius), reinforcing the dense, grid-like streaming layout rather than a soft, rounded consumer feel. Reading those corners as uniformly square and as reinforcing that layout rather than a soft, rounded consumer feel is a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Melon is built around density. The layout is a content-first grid of packed charts and lists where many rows are visible at once, and the square 0px corners on buttons and inputs make the whole surface read like ruled cells rather than floating cards. White #FFFFFF is the dominant ground, giving the small 12px body text and #666666 metadata room to breathe inside an otherwise tightly packed screen. The green is placed structurally — on active nav, selected tabs, and primary actions — so wayfinding rides on color, not on heavy chrome. The overall principle is utilitarian: maximize the number of songs and controls in view, keep the framing minimal, and let the brand green mark the live, actionable elements.

The verified inspection covers the desktop web surface of melon.com, where the design is a dense, multi-column grid of charts and lists with small 12px body text and 40-42px control heights. No mobile breakpoint measurements are present in the verified data, so responsive specifics are described qualitatively: the density-first philosophy — many rows visible, square corners, color-driven wayfinding — is the constant, and any narrower layout would be expected to preserve the small type scale and the rationed green rather than redesign around them. Control heights in the 40-42px range (search input 40px, login button 42px) suggest comfortable tap targets even within the dense frame. The 40px search input and 42px login button are desktop-capture measurements, not cross-viewport specifications.

Reading that density as the point rather than a compromise, reading wayfinding as riding on color rather than on heavy chrome, reading the surface as ruled cells rather than floating cards, reading the density-first philosophy as the constant across a narrower layout, reading 40-42px control heights as suggesting comfortable tap targets, and reading the 40px search input and 42px login button as desktop-capture measurements rather than as cross-viewport specifications, are derived editorial implementation inferences from the verified surface; they are not Melon-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Melon's voice is utilitarian and unfussy, matching a tool that exists to get you to the music fast. It is content-first: the product trusts the charts, lists, and track metadata to carry the experience, so the surrounding language stays brief, functional, and direct. Where the brand asserts itself, it does so through the green, not through chatty copy — the tone is efficient and confident, the voice of Korea's dominant streaming service that assumes you came to listen, not to read.

The adjectives, the register, and the "through the green, not through chatty copy" reading are the reviewed material's own voice guidance and are a derived editorial implementation inference from the verified surface; they are not Melon-authored or a separately published UI specification.

The captured surface is the desktop web of melon.com. One family, Pretendard, carries the recorded type system, with 맑은 고딕 (Malgun Gothic) as the fallback. The source establishes no further locale behavior, and none is supplied here.

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

These decisions are unnamed values, not permissions to invent. The list names only fields the source itself left unnamed or that this migration omitted at the smallest value boundary. Reading the list as a catalog of those unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification.

- hover, pressed, focus, and disabled visual treatments
- motion, transition, or easing values; no specific durations or curves are claimed because none were measured
- mobile breakpoint measurements
- a use for YAML `full: 9999`
- the search-input background, where YAML writes `#ffffff` and §4 writes `transparent`
