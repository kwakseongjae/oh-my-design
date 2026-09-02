# Laftel Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Laftel (라프텔) is Korea's largest anime streaming platform — a dual-mode (light/dark) product built around a vivid purple identity, fan-curated discovery, and legal access to Japan's animation catalog. This contract covers the first-party web product the source inspected for tokens: the homepage at `https://laftel.net` (inline stylesheet custom properties, the styled-components chunk `b3ccd441-eef37a2225571c0d.js`, and the Pretendard CSS bundle). The Korean App Store listing at `https://apps.apple.com/kr/app/라프텔/id1169440095` is a brand-copy source in the same packet; it is not a token surface. The source names web, iOS, Android, smart TV, and Chromecast as product availability, and names the Laftel Store and original productions (including the webtoon adaptation "Super Secret") as brand extensions. Those names stay as product-range facts. Treating `https://laftel.net` as this contract's token surface, the App Store listing as copy rather than as a token surface, and the named clients and Store as availability rather than as captured UI, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.

The source records a dual-mode interface on that homepage: dark surfaces `#121212` / `#000000` with accent `#816BFF`, and light surfaces `#FFFFFF` / `#F7F7F7` with the same purple. Thumbnail-first carousels and grids are the recorded layout. The hex values, the dual-mode pairing, and the thumbnail-first layout are recorded. Calling that layer a dark-first entertainment shell, a premium streaming dashboard tuned for anime fans, otaku-authentic, punchy and youthful, or a UI in which colour frames content rather than competing with it, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Laftel was founded in October 2014 by Kim Beom-jun, a Yonsei University student who saw that Korea's vast appetite for Japanese animation was being served almost entirely by illegal download sites. The name "라프텔(Laftel)" is a play on "마지막 화까지 봤다" — "I watched all the way to the last episode" — enshrining the complete, satisfying anime experience in the brand itself. The service launched streaming in May 2017, building on a personalization-first model: new users rate a set of anime to calibrate their taste, and the platform surfaces recommendations through both AI-driven signals and hand-curated selections by in-house "덕후" (hardcore fans). In 2019 Ridi, Korea's leading digital content platform, acquired Laftel, bringing engineering scale and content licensing resources. In November 2022 an Aniplus-led consortium (Aniplus — Korea’s largest anime broadcaster — with Keistone Partners) acquired a controlling 87.75 % stake, giving Laftel deeper ties to broadcast rights and a clearer path to simulcast programming. Through each ownership transition the product's core mission remained stable: make legal anime viewing so convenient and affordable that piracy becomes the inferior choice. Today Laftel offers SVOD (unlimited streaming), TVOD (pay-per-episode rental/purchase), and AVOD (ad-supported free tier). The Laftel Store extends the brand into anime merchandise, while original productions — including webtoon adaptations like "Super Secret" — signal ambitions beyond licensing. The dates, the founder, the name etymology, the 2017 launch, Ridi, the 2022 87.75 % stake, the three commercial tiers, and that mission sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-ownership narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or control the source records, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.

- Discover titles on the thumbnail-first homepage at `https://laftel.net`.
- Start the preference quiz from the empty-history CTA: "어떤 애니를 좋아하세요? 취향 테스트로 시작해요".
- Stream an episode (the recorded player loading treatment is the purple spinner) and complete a membership or rental (the recorded success treatment is the subscription toast).
<!-- design-md:claim-end -->

### Audience

No named or demographic personas are invented. The source labels its four named figures as *Illustrative* archetypes, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records at a group level is Korean anime viewers and fans ("덕후"), and a mainstream Korean OTT audience. Reading those source-named groups as this product's audience, and dropping the source's archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.

### Distinctive traits

Classifying the list as a restatement of recorded values, and grouping the five traits and the readings inside them, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.

- Dual-mode purple identity: `#816BFF` (`PURPLE500`) on light `#FFFFFF` and dark `#121212` / `#000000`
- Pretendard loaded via `cdn.jsdelivr.net/gh/orioncactus/pretendard`, 16px base, scale 12/13/14/16/18/20/24/28/32/40, component CSS weight 700
- 4px radius on buttons and toast; 50% / `9999` circular notification badge; 8px scrollbar thumb
- Thumbnail-first horizontal carousels and vertical grids; desktop nav 64px with 50px side padding
- Recorded motion: colour at 0.4s, opacity/transform at 0.2s ease, skeleton shimmer 1.5s linear, spinner 1.4s ease-in-out

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Laftel-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Legal first, fan always.** Every content deal is a legitimate contract; the product's legitimacy is a brand promise, not just a legal formality. *UI implication:* never use dark-pattern flows to upsell; membership upgrade prompts must be clear and skippable.
2. **Personalization over browsing.** The preference-test onboarding and tag-based discovery are not features — they are the product. *UI implication:* recommendation surfaces should occupy prime real estate and update dynamically; generic "Popular" lists are a fallback, not the default.
3. **Complete the series.** The name encodes the ideal outcome: watch every episode. *UI implication:* auto-play next episode is on by default; progress tracking, episode skips (OP/ED), and continue-watching rails are first-class features.
4. **Fan credibility at every touch-point.** Editorial selections are attributed to "덕후" curators, not anonymous algorithms. *UI implication:* show curator handles or "staff pick" labels on themed collections; avoid anonymous "Recommended for you" copy.
5. **Dual-mode comfort.** Fans watch at night; the dark theme must be as polished as the light theme. *UI implication:* all design tokens must resolve correctly in both modes; never hard-code colours in theme-sensitive components.

### Application rules

The source states these six as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Laftel-authored or a separately published UI specification.

- Use `#816BFF` (PURPLE500) for all primary CTAs and interactive accent moments
- Apply the purple-50 wash (`#F0EDFF`) for non-primary ("slight") button backgrounds
- Use Pretendard at 700 weight for all button labels and nav text
- Respect the dual-mode token system — always reference CSS custom properties (`--foreground-1`, `--background-1`) rather than hardcoded colours in themed contexts
- Use 4px border-radius on buttons and toast components for brand consistency
- Ensure scrollbars use the 8px border-radius thumb treatment

### Avoid

The source states these five as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Laftel-authored or a separately published UI specification.

- Mix hardcoded hex literals in themed components — breaks dark mode
- Use border-radius values other than 4px (buttons), 8px (scrollbar/card accent), or 50% (circular badges) without design intent
- Replace Pretendard with a generic sans-serif — the Korean glyph quality matters for this audience
- Use purple accent on disabled states — disabled buttons must use `#EEEEEE` / `#D0D0D0`
- Increase font-weight above 700 — the scale tops out here in the design system

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys follow the YAML paths. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.primary` and `tokens.colors.brand` as two keys that share `#816bff`, keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as two keys that share `#ffffff`, keeping YAML `tokens.colors.foreground` `#121212` unmerged from the body dark canvas `#121212`, keeping YAML `tokens.colors.muted` `#8a8a8a` unmerged from YAML `tokens.components.button-disabled.fg` `#8a8a8a` and from body disabled text `#D0D0D0`, and keeping YAML `tokens.colors.hairline` `#eeeeee` unmerged from disabled-button fill and from Background 3 light, treating Purple 100, Purple Gray 900, and Red 500 as recorded body writings that are not YAML `tokens.colors.*` keys, and keeping Background 2 unmerged from the light-mode toast fill, are derived editorial implementation inferences from the verified surfaces; they are not Laftel-authored or a separately published UI specification. The hex values, the light/dark pairs, and the recorded uses are the source's own.

**Brand purple**

- **Purple 500 / Brand Primary** (`#816BFF` / YAML `#816bff`): primary CTA buttons, active nav links, badges, icons, brand foreground. Token-set paths `tokens.colors.primary` and `tokens.colors.brand`. Catalog identity `primary_color` is `#816BFF`.
- **Purple 50 / Highlight** (`#F0EDFF` / YAML `#f0edff`): slight button background (light), hover highlight wash. Token-set path `tokens.colors.accent-wash`.
- **Purple 100 / Slight 2** (`#D9D3FF`): hover state for slight buttons. Not a YAML `tokens.colors.*` key; it is the hover named on `tokens.components.button-slight`.
- **Primary hover** (`#6E58FF` / YAML `#6e58ff`): primary-button hover. Token-set path `tokens.colors.primary-hover`.

**Surfaces (dual-mode)**

- **Purple Gray 800 / Dark Surface** (`#242537` / YAML `#242537`): dark toast background, dark button-purple-gray surface. Token-set path `tokens.colors.surface`.
- **Purple Gray 900 / Deep Nav** (`#191B2A`): light-mode button-purple-gray accent, deep overlay. Not a YAML `tokens.colors.*` key.
- **Background 1 (Light)** (`#FFFFFF` / YAML `#ffffff`): primary surface in light mode. Token-set path `tokens.colors.canvas`.
- **Background 1 (Dark)** (`#121212`): primary surface in dark mode. This hex is also YAML `tokens.colors.foreground`; the two roles stay two records.
- **Background 2 (Dark base)** (`#000000`): deepest dark background; also the light-mode toast fill.
- **Background 3** (`#EEEEEE` / `#323232`): skeleton, subtle dividers (light/dark). Light `#EEEEEE` is also YAML `tokens.colors.hairline` and the disabled-button fill; those stay separate records.

**Foreground (dual-mode)**

- **Foreground 1 (Light)** (`#121212` / YAML `#121212`): primary text on light. Token-set path `tokens.colors.foreground`.
- **Foreground 1 (Dark)** (`#F7F7F7`): primary text on dark.
- **Foreground 2** (`#505050` / `#E2E2E2`): secondary text (light/dark).
- **Foreground 3** (`#8A8A8A` / `#ABABAB`): tertiary / metadata text. Light `#8A8A8A` is YAML `tokens.colors.muted`.
- **On-primary** (`#FFFFFF` / YAML `#ffffff`): text on primary purple. Token-set path `tokens.colors.on-primary`. This is not `tokens.colors.canvas`.

**Line and status**

- **Border 1** (`#EEEEEE` / `#323232`): default hairline separator. Light value shares hex with YAML `tokens.colors.hairline`.
- **Red 300** (`#F16361` / YAML `#f16361`): error / destructive state. Token-set path `tokens.colors.error`.
- **Red 500** (`#FF1010`): critical alert. Not a YAML `tokens.colors.*` key.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the YAML recorded them): `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 12` · `tokens.spacing.base: 16` · `tokens.spacing.lg: 24` · `tokens.spacing.xl: 32` · `tokens.spacing.xxl: 48`.

Source §5 also names a base unit of 0.5rem (8px) and typical component margins 1rem (16px), 1.5rem (24px), 2.5rem (40px). `tokens.spacing.md: 12` is not a rem step in that list. `tokens.spacing.sm: 8` is not `tokens.rounded.lg: 8`. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4` and not `tokens.rounded.md: 4`. `tokens.spacing.base: 16` is not the body size 16. `tokens.spacing.lg: 24` is not a type size. The 2.5rem (40px) margin is that layout note; it is not a YAML spacing key. Keeping those unitless steps on their own keys, and keeping 40px off the YAML scale, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 4` · `md: 4` · `lg: 8` · `full: 9999`.

- 4px: buttons and toast — YAML `tokens.rounded.sm` and `tokens.rounded.md` both write `4`. They stay two keys. Component records write `4px` on those controls.
- 8px: scrollbar thumb (`border-radius: 8px`) and the Don't-list "scrollbar/card accent" — YAML `tokens.rounded.lg`.
- 50%: notification badge in the body (`border-radius: 50%`). YAML `tokens.components.badge-notification.radius` writes `9999px`; YAML `tokens.rounded.full` writes `9999`. The `50%` spelling, the `9999px` spelling, and the unitless `9999` step stay three writings.

`tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.lg: 8` is not `tokens.spacing.sm: 8`. Keeping `4`, `4`, `8`, and `9999` as four keys, and keeping `50%` / `9999px` / `4px` on the controls that write them, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.

### Elevation

YAML `tokens.shadow.none` is `"none"`. That YAML key is not a statement that the captured UI has no shadow. Source §6 records, as its own depth contract:

- **Hairline separator:** `box-shadow: 0 1px 0 0 var(--border-1)` on sticky nav
- **Basic shadow:** `rgba(0,0,0,0.25)` light / `rgba(0,0,0,0.5)` dark
- **Dropdown shadow:** `rgba(0,0,0,0.16)` light / `rgba(0,0,0,0.6)` dark
- **Scroll thumb:** 4px transparent border, `background-clip: content-box`, `border-radius: 8px`
- **Dim overlays:** `rgba(0,0,0,0.5)` (dim-1 light) · `rgba(0,0,0,0.7)` (dim-1/2 dark)
- **Skeleton:** gradient shimmer `linear-gradient(to right, --background-3 0%, --background-1 25%, --background-3 50%)`, animated at 1.5s infinite linear

Keeping YAML `"none"` on its own key rather than flattening it over those §6 treatments, and keeping the skeleton shimmer on both this elevation record and the Motion / States records, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.

### Motion

The toast, colour, skeleton, and spinner values below are recorded in the source from live CSS. Reduced-motion behavior is not recorded and is omitted. The durations, the named easings, the motion rules, the omission of reduced-motion, the five-kind promotion gate below, and the reading of the cubic-bezier written beside CSS `ease` as that keyword's expansion rather than as a separate brand token, are a derived editorial implementation inference from the verified surfaces; they are not Laftel-authored or a separately published UI specification.

**Duration scale** (source §15):

| Token | Value | Use |
|---|---|---|
| Micro | 200ms | state toggle, colour |
| Short | 400ms | slide-in, fade |
| Medium | 1400ms–1500ms (loop) | skeleton shimmer |

**Recorded CSS** (source §4 Toast, §6 Skeleton, §14 spinner, §15 Rules):

- Colour and background-colour: `transition:color 0.4s`, `transition:background-color 0.4s,box-shadow 0.4s` for interactive elements
- Opacity and positional transforms: 0.2s ease for overlays and toasts — Toast `transition: opacity 0.2s ease, transform 0.2s ease`
- Spinner stroke: `ease-in-out` at 1.4s infinite (32×32px, `#816BFF`)
- Skeleton shimmer: `linear` at 1.5s infinite; `background-size: 200% 100%` sweep; clip-path masks define thumbnail shapes

**Easing** (source §15):

- Default transitions: `ease` (`cubic-bezier(0.25, 0.1, 0.25, 1)`) — the source names the CSS `ease` keyword and writes that bezier as its expansion, not as a separate brand token
- Spinner: `ease-in-out` at 1.4s infinite
- Skeleton: `linear` at 1.5s infinite
- Toast slide: `ease` on both `opacity` and `transform`

**Rules** (source §15):

- Colour and background-colour transitions run at 0.4s for interactive elements
- Opacity and positional transforms run at 0.2s ease for overlays and toasts
- Never animate layout-affecting properties (width, height) on the main content grid — use opacity/transform only
- Skeleton shimmer uses `background-size: 200% 100%` sweep; clip-path masks define thumbnail shapes

An exact additional motion value may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Reduced-motion behavior is unnamed in this packet and is omitted rather than invented.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings — App Store copy is not a universal type token, Pretendard is the live computed UI family, the jsDelivr URL corroborates the load, no Laftel-exclusive distributed family was verified, the named fallbacks remain fallbacks, and iOS / Android / smart TV / Chromecast / Store typography stay outside the homepage CSS capture — are a derived editorial implementation inference from the verified surfaces; they are not Laftel-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | The App Store listing supplies brand copy; it does not publish a universal current typography token. |
| Live computed surface-use | Homepage CSS sets `html, body` to 16px and declares Pretendard as the UI family. |
| FontFaceSet and source corroboration | Pretendard is loaded via `cdn.jsdelivr.net/gh/orioncactus/pretendard`. |
| Official distributed asset | No Laftel-exclusive distributed type family was verified. Pretendard is a third-party face used on the captured web product. |
| Declared-only | Fallbacks after Pretendard: `-apple-system`, `BlinkMacSystemFont`, `system-ui`, `Roboto`, `"Noto Sans KR"`. They remain fallbacks. |
| Outside these captures | iOS, Android, smart TV, Chromecast, and Laftel Store typography remain outside the homepage CSS capture. |

### Family

- **Current visible UI family:** Pretendard, falling back to `-apple-system, BlinkMacSystemFont, system-ui, Roboto, "Noto Sans KR"`
- YAML `tokens.typography.family.sans`: `Pretendard`
- YAML `tokens.typography.family.mono`: `Pretendard` — a second key that writes the same family; the two keys stay two keys. Keeping those two family keys rather than merging them, and refusing to present a fallback as the brand face, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.
- **Loaded source boundary:** `cdn.jsdelivr.net/gh/orioncactus/pretendard`

### Type roles

Token-set `use` strings are kept verbatim. YAML `lineHeight` stays the unitless `1.5` the YAML recorded; source §3 also writes `1.5` globally via `:root` and badge label `line-height: 150%`. YAML weights include `400` on `text-m` / `text-xs` / `text-xxs`; source §3 says 700 is the only declared weight in component CSS and body inherits Pretendard's default. Both writings are kept. YAML sizes are unitless (`40`, `32`, `28`, `24`, `20`, `18`, `16`, `14`, `13`, `12`); source §3 spells them `40px` · `32px` · `28px` · `24px` · `20px` · `18px` · `16px` · `14px` · `13px` · `12px`. Keeping the YAML `use` strings verbatim, keeping unitless sizes and px spellings as two writings, keeping unitless `1.5` unconverted to a replacement px, and keeping YAML `400` beside the 700-only component-CSS note, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.

| Role | YAML `use` | Size | Weight | Line height | Token-set path |
|---|---|---:|---:|---:|---|
| title-xxl | Largest display title | 40 | 700 | 1.5 | `tokens.typography.title-xxl` |
| title-xl | Section title | 32 | 700 | 1.5 | `tokens.typography.title-xl` |
| title-l | Sub-section title | 28 | 700 | 1.5 | `tokens.typography.title-l` |
| title-m | Card / block title | 24 | 700 | 1.5 | `tokens.typography.title-m` |
| title-s | Small title | 20 | 700 | 1.5 | `tokens.typography.title-s` |
| text-l | Large body / button label | 18 | 700 | 1.5 | `tokens.typography.text-l` |
| text-m | Default body | 16 | 400 | 1.5 | `tokens.typography.text-m` |
| text-s | Nav link, toast, small label | 14 | 700 | 1.5 | `tokens.typography.text-s` |
| text-xs | Metadata | 13 | 400 | 1.5 | `tokens.typography.text-xs` |
| text-xxs | Fine print | 12 | 400 | 1.5 | `tokens.typography.text-xxs` |

Additional source §3 rules, kept as recorded: letter-spacing `normal` reset on all elements; `-webkit-font-smoothing: antialiased`.

### Assets

- Catalog favicon field: Google s2 proxy `https://www.google.com/s2/favicons?domain=laftel.net&sz=256`. That is an identity pointer, not a Laftel-hosted brand file.
- Product thumbnails are first-party catalog content; do not replace them with invented purple decoration.

Reading the Google s2 slug as an identity pointer rather than as a first-party mark file, and reading thumbnails as first-party catalog content that must not be replaced with invented decoration, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here in full:

- **Empty (no history):** Show the preference quiz CTA prominently — "어떤 애니를 좋아하세요? 취향 테스트로 시작해요" with a primary purple button; no blank grid.
- **Loading / Streaming buffer:** Purple spinner (32×32px, `#816BFF`, stroke-dasharray animated at 1.4s ease-in-out infinite) centered in the player.
- **Skeleton:** Shimmer gradient tiles (`linear-gradient(to right, --background-3 0%, --background-1 25%, --background-3 50%)`) at 1.5s linear infinite in place of thumbnails and text rows.
- **Error — Network:** Inline message "잠시 후 다시 시도해 주세요" with a secondary retry button (slight variant); red 300 (`#F16361`) icon accent.
- **Error — Unlicensed Content:** Overlay with dim-1 backdrop (`rgba(0,0,0,0.5)`) and a locked-icon illustration; "이 작품은 현재 지역 서비스 불가" copy; no CTA escalation.
- **Success — Subscription:** Toast notification slides up from bottom center: dark background (`#000000` light / `#242537` dark), white text, 4px radius, 0.2s ease slide + fade; auto-dismisses after ~3s.
- **Disabled:** Buttons use `#EEEEEE` background, `#D0D0D0` text; cursor: default; no hover effect.
- **Offline / Download available:** Download badge in purple; offline indicator swaps to muted foreground-3 (`#8A8A8A`).

Every interactive-kind verdict, every applicability verdict, and the reason given for either — including Kind:non-interactive on the notification badge and the toast, the loading/error/success closures on the desktop nav, keeping each YAML `use` string as a Token-set use row beside Role, and keeping YAML button-disabled foreground unmerged from body disabled text — is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

### Primary CTA (md)

- Role: primary CTA (md)
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#816BFF`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Height: 56px
- Padding: 0 18px
- Font: 18px / 700
- Hover background: `#6E58FF`
- Token-set use: Primary CTA (md)
- Token-set path: `tokens.components.button-primary` (`type`, `bg`, `fg`, `radius`, `height`, `padding`, `font`, `states`, `use`)
- Observed: default and hover (`#6E58FF` / YAML `hover #6e58ff`)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured primary md |
| hover | applicable | Pointer-web button; treatment captured `#6E58FF` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; captured on the Disabled action record |
| loading | applicable | Primary CTA can start the preference quiz or a membership action; visual treatment omitted |
| error | applicable | A committing CTA can fail in place; the network-error copy sits on the page, not on this control |
| success | applicable | A committing CTA can complete; the recorded success vehicle is the subscription toast |

### Primary CTA (sm)

- Role: primary CTA (sm)
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#816BFF`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Height: 48px
- Padding: 0 20px
- Font: 16px / 700
- Token-set use: Primary CTA (sm)
- Token-set path: `tokens.components.button-primary-sm` (`type`, `bg`, `fg`, `radius`, `height`, `padding`, `font`, `use`)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured primary sm |
| hover | applicable | Pointer-web button; visual treatment omitted on this size |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; captured on the Disabled action record |
| loading | applicable | Smaller primary CTA can start the same class of commit; visual treatment omitted |
| error | applicable | A committing CTA can fail in place; visual treatment omitted |
| success | applicable | A committing CTA can complete; visual treatment omitted |

### Slight (secondary)

- Role: secondary action
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#F0EDFF`
- Text: `#816BFF`
- Border: none
- Radius: 4px
- Height: 56px
- Font: 18px / 700 (YAML `font: "18px / 700"`)
- Hover background: `#D9D3FF` (YAML `hover #d9d3ff`)
- Token-set use: Secondary action
- Token-set path: `tokens.components.button-slight` (`type`, `bg`, `fg`, `radius`, `height`, `font`, `states`, `use`)
- Observed: default and hover (`#D9D3FF`). The network-error retry uses this slight variant.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured slight button |
| hover | applicable | Pointer-web button; treatment captured `#D9D3FF` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; captured on the Disabled action record |
| loading | applicable | Retry and other secondary commits can wait; visual treatment omitted |
| error | applicable | A retry control can fail again; visual treatment omitted |
| success | applicable | A secondary commit can complete; visual treatment omitted |

### Disabled action

- Role: disabled action
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#EEEEEE`
- YAML `tokens.components.button-disabled.fg`: `#8a8a8a`
- Body text: `#D0D0D0`
- Radius: 4px
- Height: 56px
- Token-set use: Disabled action
- Token-set path: `tokens.components.button-disabled` (`type`, `bg`, `fg`, `radius`, `height`, `use`)
- Observed: disabled presentation. Source: cursor: default; no hover effect. YAML fg `#8a8a8a` and body `#D0D0D0` stay two writings.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured disabled presentation |
| hover | not-applicable | Source disabled rule: no hover effect |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | This record is the captured disabled treatment |
| loading | not-applicable | A disabled presentation does not run an in-place operation |
| error | not-applicable | A disabled presentation does not commit, so it has no in-place failure |
| success | not-applicable | A disabled presentation does not confirm a completed operation |

### Desktop Nav

- Role: desktop nav — active/hover link purple
- Primitive type: `tab`
- Kind: interactive
- Anatomy: bar + links
- Background: `#FFFFFF` / `#121212` (themed via CSS var). YAML `tokens.components.nav-bar.bg`: `#ffffff`
- YAML `tokens.components.nav-bar.fg`: `#121212`
- Default link color: `var(--foreground-1)`
- Height: 4rem (64px)
- Padding: 0 3.125rem (50px)
- Active link color: `#816BFF` (YAML `active: "link color #816bff"`)
- Hover link color: `#816BFF`
- Font: 0.875rem (14px) / 700
- Bottom border: 1px solid `var(--border-1)` (YAML `1px solid #eeeeee`)
- Token-set use: Desktop nav — active/hover link purple
- Token-set path: `tokens.components.nav-bar` (`type`, `bg`, `fg`, `height`, `padding`, `border`, `font`, `active`, `use`)
- Observed: default, active, hover. Nav hidden below 1024px (`.ksUJkh` display:none at tablet).

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured desktop nav |
| hover | applicable | Pointer-web nav link; treatment captured `#816BFF` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav link can be unavailable; visual treatment omitted |
| loading | not-applicable | Desktop nav selects a destination; the bar itself does not run an in-place operation |
| error | not-applicable | Destination selection does not produce an in-place error on the bar |
| success | not-applicable | Destination selection does not confirm a completed operation on the bar |

### Notification Badge

- Role: notification count badge
- Primitive type: `badge`
- Kind: non-interactive
- Anatomy: count
- Background: `#816BFF`
- Text: `#FFFFFF`
- Body radius: 50%
- YAML `tokens.components.badge-notification.radius`: `9999px`
- Height: 1.0625rem (17px)
- Font: 0.625rem (10px) / 700 (YAML `font: "10px / 700"`)
- Token-set use: Notification count badge
- Token-set path: `tokens.components.badge-notification` (`type`, `bg`, `fg`, `radius`, `height`, `font`, `use`)
- Observed: default only. Kind is non-interactive because the source records a count badge, not a control; there is no state-applicability map.

### Default Toast

- Role: default toast
- Primitive type: `toast`
- Kind: non-interactive
- Anatomy: message
- Background: `#000000` (light) / `#242537` (dark). YAML `tokens.components.toast.bg`: `#242537`
- Text: `#FFFFFF`
- Radius: 0.25rem (4px)
- Padding: 1rem 0.75rem (YAML `16px 12px`)
- Min-height: 3rem (48px). YAML `height: "48px"`
- Font: 0.875rem (14px). YAML `font: "14px / 400"`
- Transition: opacity 0.2s ease, transform 0.2s ease
- Token-set use: Default toast (#000000 light / #242537 dark)
- Token-set path: `tokens.components.toast` (`type`, `bg`, `fg`, `radius`, `padding`, `height`, `font`, `use`)
- Observed: default (success-subscription uses this toast). Kind is non-interactive because the source records a transient message that auto-dismisses after ~3s, not a commit control; there is no state-applicability map.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Layout principles

- **Grid:** Thumbnail-first horizontal carousels and vertical grid layouts; desktop max-width ~1920px reference in font-size calc
- **Breakpoints:** desktop ≤1280px · tablet ≤1024px · tabletVertical ≤768px · mobile ≤480px · mobileLandscape (orientation: landscape, max-height 576px)
- **Nav hidden below:** 1024px (`.ksUJkh` display:none at tablet)
- **Content padding:** 3.125rem (50px) horizontal on desktop nav; responsive fluid via vw-based font-size calc
- **Spacing rhythm:** base unit 0.5rem (8px); typical component margin 1rem (16px), 1.5rem (24px), 2.5rem (40px)

### Responsive behavior

- Desktop (>1280px): Full horizontal nav with 50px side padding; wide carousels; large hero at 51.375em height; font-size calculated from 1920px reference width
- Tablet (768px–1024px): Nav collapses to mobile; layout adapts fluid grids; hero resizes
- Mobile (≤480px): Font-size recalculated from 360px reference width via `calc(16vw / 360 * 100)`; mobile-specific image proportions; thumbnail grids shift to 2-column
- Touch devices: `-webkit-tap-highlight-color: transparent`; `touch-action: pan-y` on sliders; `maximum-scale=1` in viewport to prevent iOS zoom

Source §5 writes desktop as ≤1280px; source §8 writes Desktop as >1280px. Both writings stay. The 56px / 48px button heights, 64px nav, 17px badge, and 48px toast min-height are control measurements, not a cross-viewport specification. Treating the breakpoint lists, the 1920px / 360px font-size calcs, the 51.375em hero, the 2-column mobile grid, and the touch rules as the source's own layout contract rather than as a captured cross-viewport pass, and keeping the ≤1280px and >1280px desktop writings as two records, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

**Three adjectives:** Fan-fluent, warm-direct, quietly authoritative

Calling that register fan-fluent, warm-direct, and quietly authoritative, and reading the table below as reconstruction direction rather than as a published voice guide, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification. The Korean samples and the App Store tagline are the source's own.

| Dimension | Do | Don't |
|---|---|---|
| Register | Speak as a knowledgeable fellow fan ("덕후") | Sound like a corporate broadcast |
| Sentence length | Short, punchy; one idea per sentence | Long nested clauses |
| Vocabulary | K-anime vernacular where natural; plain Korean elsewhere | Jargon-heavy or overly formal keigo-style |
| Punctuation | Light use of `:D` emoticons in taglines only | Exclamation marks on every line |

**Voice samples (illustrative):**

- *Illustrative:* "세상 모든 애니를 라프텔에서 :D" — the brand's own App Store tagline; warm, inclusive, fan-to-fan energy.
- *Illustrative:* "추억의 애니부터 분기별 신작까지, 무제한 스트리밍 가능한 곳은 오직 라프텔." — confident authority without boasting; the "only Laftel" claim lands as fact, not hype.
- *Illustrative:* "뭘 볼지 모를 땐, 덕후가 직접 엄선한 애니 명작들을 시청!" — peer credibility; the recommendation comes from fans, not algorithms.

Classifying the parenthetical glosses on those three samples as editorial readings, rather than as additional official UI copy, is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.

Recorded product copy from source §14, kept byte-for-byte:

- Empty: "어떤 애니를 좋아하세요? 취향 테스트로 시작해요"
- Error — Network: "잠시 후 다시 시도해 주세요"
- Error — Unlicensed Content: "이 작품은 현재 지역 서비스 불가"

Recorded UI copy in this packet is Korean.

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

These decisions are unnamed values, not permissions to invent. Reading the list as a catalog of unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Laftel-authored or a separately published UI specification.

- focus-visible visual treatments
- getdesign.md / styles.refero.design records (the source names both lookups as not found)
