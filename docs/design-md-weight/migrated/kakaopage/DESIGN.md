# KakaoPage Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

카카오페이지 (KakaoPage) is Kakao Entertainment's flagship webtoon and web-novel platform. This contract covers the two first-party public surfaces the source inspected for tokens on 2026-06-22: the homepage at `https://page.kakao.com/` and the content detail page at `https://page.kakao.com/content/57668776`. Every value stays attached to the surface that established it. Reading those two inspected routes as this contract’s token surfaces, and treating values as attached to the surface that established them, are derived editorial implementation inferences from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification.

The source records a constraint-first palette on those two routes: canvas `#ffffff` (token-set `tokens.colors.canvas`), ink `#000000` (token-set `tokens.colors.ink`), brand yellow `#ffd618` (token-set `tokens.colors.primary`) on the primary call-to-action, hot red `#ff3042` (token-set `tokens.colors.error`) on BEST-rank badges, and light grey `#eeeeee` (token-set `tokens.colors.surface`) on content cards. Navigation chrome is monochrome; the active selection state uses a black pill rather than a colored accent; cards are `#eeeeee` placeholders that vanish once the cover image loads. Pretendard Variable is the recorded face for all text. The hex values, the black-pill active state, the `#eeeeee` card rest, and the Pretendard Variable face are recorded. The characterizations built on them — a constraint-first palette; immersive visual content deserving a near-invisible UI frame; cover art as the undisputed heroes of every screen; the system never competing with hosted IP; a look that reads as dark-adjacent without being dark; a high-contrast editorial register; yellow appearing exactly once per content detail page on the primary Start Reading button, making it unmistakable — are a derived editorial implementation inference from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. 카카오페이지 (KakaoPage) launched in **2013** as Kakao's digital content marketplace for Korea's mobile-first era, initially selling novels and comics in small paid installments. It pioneered the **기다리면 무료** (Wait for Free) model — readers who wait a set interval can access episodes without purchase — which became the structural engine that built one of Korea's largest paid-content audiences. The model proved that patience, not piracy, was the viable alternative to payment: it created massive top-of-funnel reader acquisition while monetizing through impatience. Over the decade, KakaoPage evolved from a marketplace into Kakao Entertainment's IP pipeline. Platform-native webtoons and web novels — many originating on Kakao's own creator tools — became the source material for K-drama adaptations, animated series, and global distribution through Tapas (English-language) and Piccoma (Japan). The design system reflects this vertical integration: the platform positions itself not as a mere reader app but as the origin point of Korean popular culture. The **2021** merger between Kakao M and Kakao Page to form Kakao Entertainment consolidated the media-tech stack. Today KakaoPage is the web/desktop face of a content empire that spans webtoon creation, talent management, drama production, and international licensing. The design — clean, content-first, IP-respectful — is engineered to serve hundreds of distinct visual identities without diluting any of them. The year 2013, the paid-installment marketplace start, 기다리면 무료 / Wait for Free, the patience-not-piracy account, the Kakao Entertainment IP pipeline, Tapas and Piccoma, the 2021 Kakao M / Kakao Page merger, the web/desktop-face account, and that closing sentence are the source’s own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-pipeline narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not KakaoPage-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product’s primary tasks, each naming a surface or control the source records, is a derived editorial implementation inference from the verified surfaces; it is not KakaoPage-authored or a separately published UI specification. They do not come from the source’s persona section.

- Discover webtoon and web-novel titles on `https://page.kakao.com/`.
- Scan the recommendation tabs — 지금핫한, 실시간 랭킹 — on `https://page.kakao.com/`.
- Start or continue reading a title via 첫 화 보기 / 이어보기 on `https://page.kakao.com/content/57668776`.
- Search titles and authors — 제목, 작가를 입력하세요. — on the homepage search bar.
<!-- design-md:claim-end -->

### Audience

No named or demographic personas are invented. The source labels its named figures as fictional archetypes informed by publicly observable KakaoPage user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records is the audience it names at a group level: Korean webtoon and web-novel readers. Reading that source-named group as this product’s audience, and dropping the source’s archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not KakaoPage-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification.

- Pure-black / pure-white palette (`#000000` on `#ffffff`) — content cover art is the only color
- Brand yellow (`#ffd618`) reserved for the primary 첫 화 보기 / 이어보기 CTA and the 충전 badge
- Active selection state uses a black pill with white text, not a colored accent
- Pretendard Variable for all text
- Light grey (`#eeeeee`) card surface and `rgba(153,153,153,0.15)` skeleton placeholders
- High-contrast editorial density: small type (11–14px), generous imagery
- `#ff3042` hot-red for BEST rank badges — the only accent besides yellow

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Content is the design.** The platform's visual identity defers entirely to the IP it hosts. *UI implication:* monochrome chrome (black/white/grey) so that cover art at any color temperature feels at home. Never introduce competing accent colors.
2. **Wait or pay — the system is transparent.** The 기다리면 무료 model means readers always know when free access opens. *UI implication:* "무료" labels are permanent, prominent, and never buried; the time cost is disclosed at the episode row.
3. **One action per surface.** Each content detail page has a single yellow CTA — not a CTA hierarchy, not three equal buttons. *UI implication:* one `#ffd618` button per screen; secondary actions use neutral/ghost styling.
4. **Rank signals create urgency, not noise.** BEST badges appear only where they reflect genuine ranking data. *UI implication:* hot red `#ff3042` appears on the BEST badge alone; it's never reused for promotions or marketing.
5. **Mobile density is a feature.** The target audience reads on smartphones; compressed episode rows and small badge text are intentional. *UI implication:* 11–14px episode metadata; portrait-oriented thumbnails optimized for vertical scroll rather than widescreen browsing.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification.

- Use `#ffd618` yellow exclusively for the primary "Start Reading" CTA — it should appear once per content detail page
- Use the black pill with white text for all active selection states — tabs, active categories
- Keep all UI text in Pretendard; lean on weight (400/700) to create hierarchy
- Use pure black `#000000` for all primary text — no navy, no near-black variants
- Use `#eeeeee` as the neutral card surface — it harmonizes with any cover art color
- Reserve `#ff3042` for rank/status signals only (BEST, etc.)
- Design for portrait-oriented thumbnail grids — content is always taller than wide

### Avoid

The source states these seven as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification.

- Introduce additional accent colors — yellow and red are the complete palette of saturated hues
- Use shadows for elevation — this system is entirely flat
- Place colored overlays on cover art — the artwork owns its space
- Use any sans-serif typeface other than Pretendard; it's the brand's Korean system font
- Use large type sizes for UI labels — chrome text stays at 11–16px; display sizes belong to content titles
- Use the black pill shape for non-interactive decorative elements — it signals "currently selected/active"
- Deviate from `#ffd618` toward any other yellow — this specific value ties back to Kakao's brand identity

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source’s own token-set keys. Taking those role names from the source’s own token-set keys, pairing each hex to the token-set path named beside it, keeping `tokens.colors.canvas` and `tokens.colors.on-error` as two keys that happen to share `#ffffff`, keeping `tokens.colors.ink-dark` and `tokens.colors.on-primary` as two keys that happen to share `#222222`, keeping `tokens.colors.muted` `#666666` off `tokens.colors.tertiary` `#999999`, calling yellow unmistakably derived from Kakao's brand golden-yellow, and treating the skeleton ghost fill as the live observation named on `tokens.components.card-skeleton` rather than as a `tokens.colors.*` key, are derived editorial implementation inferences from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification. The hex values and recorded uses are the source’s own.

Primary action

- **KakaoPage Yellow** (`#ffd618`): The single primary action color. Used for the "첫 화 보기" (Start Reading) and "이어보기" (Continue) CTA buttons and for the coin-recharge label badge. Token-set path `tokens.colors.primary`.
- **Dark Label** (`#222222`): Button label text on yellow CTA. Token-set path `tokens.colors.ink-dark`. Token-set key `tokens.colors.on-primary` writes the same hex as the on-yellow label.

Ink and canvas

- **Ink Black** (`#000000`): Primary text color for all headings, body copy, nav labels, and interactive elements. Also used as the active pill background (reversing to white text). A true zero — no near-black offset. Token-set path `tokens.colors.ink`.
- **Canvas White** (`#ffffff`): Page background and navigation header. The absolute base layer. Token-set path `tokens.colors.canvas`.

Surface and skeleton

- **Surface Grey** (`#eeeeee`): Content card background; the resting state of a thumbnail card before the image loads. Also used as section-tab bar background, episode list row backgrounds. Token-set path `tokens.colors.surface`.
- **Skeleton Ghost** (`rgba(153,153,153,0.15)`): Lazy-load skeleton placeholder at exactly the cover thumbnail's aspect ratio. Flat, no shimmer. This fill is the live observation named on `tokens.components.card-skeleton`; it is not a `tokens.colors.*` key.

Text hierarchy

- **Muted Grey** (`#666666`): Secondary text — author names, date metadata at 11px, secondary captions. Token-set path `tokens.colors.muted`.
- **Tertiary Grey** (`#999999`): Lowest-emphasis labels, placeholder behavior. Token-set path `tokens.colors.tertiary`.

Status

- **Hot Red** (`#ff3042`): "BEST" rank badge on top-performing episodes. High-contrast, attention-forcing — the only warm saturated accent alongside yellow. Token-set path `tokens.colors.error`.
- **On-error White** (`#ffffff`): Text on the red badge. Token-set path `tokens.colors.on-error`.

`tokens.colors.canvas` and `tokens.colors.on-error` both write `#ffffff`. They stay two keys. `tokens.colors.ink-dark` and `tokens.colors.on-primary` both write `#222222`. They stay two keys.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xs: 3` · `sm: 7` · `md: 14` · `base: 16` · `lg: 20` · `xl: 32` · `section: 48`.

The source restates the same steps as a scale of 3px, 7px, 14px, 16px, 20px, 32px, 48px, and names a base unit of ~4px. `tokens.spacing.md: 14` is not the section-tab padding `7px 14px` and is not the main-nav padding `0px 14px`. `tokens.spacing.base: 16` is not `tokens.rounded.pill: 16`, is not `tokens.typography.body.size` `16`, and is not `tokens.typography.tab-active.size` `16`. `tokens.spacing.lg: 20` is not the Back/Error CTA padding `0px 20px`. `tokens.spacing.xl: 32` is not a type size. `tokens.spacing.section: 48` is not a type size. Keeping those unitless spacing steps on their own keys rather than rewriting them as a grid, and keeping those writings of `3`, `7`, `14`, `16`, `20`, `32`, and `48` on their own records, are derived editorial implementation inferences from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `xs: 2` · `sm: 5` · `md: 8` · `lg: 12` · `pill: 16` · `full: 100`.

The source’s named radius uses, kept on their own rows:

- Tiny (2px): coin/free badges — near-square for a label feel — `tokens.rounded.xs`
- Small (5px): BEST rank badges — `tokens.rounded.sm`
- Medium (8px): primary CTA button, skeleton placeholders — `tokens.rounded.md`
- Large (12px): content cards, recommendation carousels — `tokens.rounded.lg`
- Pill (16px): section sub-tab pills — `tokens.rounded.pill`
- Full (100): main navigation active tab pills, error CTA — `tokens.rounded.full: 100`

`tokens.rounded.full: 100` stays the unitless full step. The Back/Error CTA and the main-nav pill write `100px` on their own component records; that px spelling is not this scale key rewritten. `tokens.rounded.xs: 2` is not a spacing step. `tokens.rounded.sm: 5` is not a spacing step. `tokens.rounded.md: 8` is not a spacing step and is not `tokens.components.card-skeleton.radius` `8px` written as a second scale. `tokens.rounded.lg: 12` is not a spacing step and is not `tokens.components.card-content.radius` `12px` written as a second scale. `tokens.rounded.pill: 16` is not `tokens.spacing.base: 16`. Keeping `2`, `5`, `8`, `12`, `16`, and `100` as six keys, and keeping the component `100px` / `8px` / `12px` writings on their own records, are derived editorial implementation inferences from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow | Page background, all card surfaces |
| Ghost (1) | `rgba(0,0,0,0.05)` background | Comment count chips, interaction counters |
| Dimmed (2) | `rgba(0,0,0,0.4)` overlay | Content carousel pager indicator |

Token-set path `tokens.shadow.none`: `none`. KakaoPage uses no box shadows anywhere in the inspected surfaces. Separation is achieved by the content artwork itself, by the `#eeeeee` surface color on cards, and by structural containment (tabs, headers). The three-level table, the `none` token, and the no-box-shadow record are the source’s own. Reading that rigorously flat treatment as both a performance-conscious (mobile-heavy audience) and content-first design philosophy — shadows compete with the content's own visual complexity — is a derived editorial implementation inference from the verified surfaces; it is not KakaoPage-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live-extract pass. The motion contract below sits outside that attribution: the source names four duration tokens and three easing roles, and assigns no computed-sample source to the three cubic-bezier values. The durations, easing roles, and motion rules below, the omission of the three untraceable curve values, and the five-kind promotion gate below, are therefore a derived editorial implementation inference from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Skeleton → content swap (abrupt is intentional — no fade-in on cover art) |
| `motion-fast` | 100ms | Tab active-pill slide, badge appear |
| `motion-standard` | 200ms | Navigation scroll offset adjust |
| `motion-page` | 250ms | Route transition (slide or fade) |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.0, 0.0, 0.2, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.4, 0.0, 0.2, 1)`) match the documented template re-injection path and are not traceable to KakaoPage-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Role | Use |
|---|---|
| `ease-enter` | Content entering viewport (decelerate into place) |
| `ease-exit` | Overlays / drawers leaving |
| `ease-standard` | Default UI state changes |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- The platform's primary motion vocabulary is **minimal and structural** — transitions mark navigation changes, not content moments.
- Cover art never animates into view (the skeleton-to-image swap is instant, not faded); adding a fade would create visual noise across dozens of simultaneously loading thumbnails.
- The active tab pill snaps or slides, not bounces — a reading-focused audience expects the UI to get out of the way.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the reading flow is unaffected.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | The source describes KakaoPage’s product chrome. It does not publish a universal current typography token or a separately issued type specimen. |
| Live computed surface-use | Visible text resolves to `Pretendard Variable` with fallback to `Pretendard` on `https://page.kakao.com/` and `https://page.kakao.com/content/57668776`. Token-set paths `tokens.typography.family.display` (`Pretendard Variable`) and `tokens.typography.family.body` (`Pretendard`). |
| Official distributed asset | No KakaoPage-exclusive downloadable font package was verified in the source. |
| License | Pretendard’s upstream project publishes it under SIL Open Font License 1.1; this describes the font asset, not a KakaoPage brand asset. |
| Fallback context | `-apple-system`, `system-ui`, `Segoe UI`, `Noto Sans KR`, `Malgun Gothic` occur after Pretendard in the captured declaration. They are fallbacks, never substitutes for Pretendard. |

### Family

- **Current visible UI family:** `Pretendard Variable` with fallback to `Pretendard`. Token-set keys `tokens.typography.family.display` and `tokens.typography.family.body`.
- The source’s type principle is a single typeface across all weights and roles. Those two YAML keys stay two keys; they are not a display/body split into two faces.
- Do not replace unavailable or unobserved brand type with a system fallback. Do not present `-apple-system`, `system-ui`, `Segoe UI`, `Noto Sans KR`, or `Malgun Gothic` as Pretendard. That fallback-never-substitute reading, and keeping the two family keys rather than merging them into one face name, are derived editorial implementation inferences from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification.

### Type roles

YAML line heights stay unitless ratios (`1.24`, `1.40`, `1.38`, `1.43`, `1.38`, `1.33`, `1.33`, `1.45`, `1.45`) and are never rewritten as a replacement px (A1a). The observed hierarchy table records the matching computed spellings beside them. Token-set `use` strings are restored verbatim. Keeping each role on the YAML key and `use` string the source names rather than merging the nine roles into one type ramp, and keeping the YAML line heights as unitless ratios rather than rewriting them as a replacement px, are derived editorial implementation inferences from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification.

| Role | Family | Size | Weight | Line height | Color | Token-set use | Token-set path |
|---|---|---:|---:|---|---|---|---|
| Content Title | Pretendard Variable | 21 | 700 | 1.24 (26px) | `#000000` | Content item title (e.g. webtoon/novel title) | `tokens.typography.content-title` |
| Body / Tab | Pretendard | 16 | 400 | 1.40 (22.4px) | `#000000` | Default body text, tab labels | `tokens.typography.body` |
| Tab Active | Pretendard | 16 | 700 | 1.38 (22px) | `#000000` | Active category tab text | `tokens.typography.tab-active` |
| List Row | Pretendard | 14 | 400 | 1.43 (20px) | `#000000` | Episode list rows, secondary info | `tokens.typography.list-item` |
| Section Tab | Pretendard | 13 | 400 | 1.38 (18px) | `#000000` | Tab sub-labels, inactive section tabs | `tokens.typography.sub-label` |
| Caption | Pretendard | 12 | 400 | 1.33 (16px) | `#000000` | Genre tags, author names, metadata | `tokens.typography.caption` |
| CTA Label | Pretendard | 12 | 700 | 1.33 (16px) | `#222222` | Primary CTA button label | `tokens.typography.cta-label` |
| Date / Meta | Pretendard | 11 | 400 | 1.45 (16px) | `#666666` | Episode date metadata | `tokens.typography.date` |
| BEST Badge | Pretendard | 11 | 700 | 1.45 (16px) | `#ffffff` | BEST badge, rank overlay | `tokens.typography.badge` |

Type principles the source states, kept as written: content-first sizing — all chrome text runs at 11–16px; large type belongs to the content artwork, not the interface. Weight as the only signal — active states use bold (700) on the same text — no color change, no underline. Line-height discipline — tight at display (1.24 for titles), standard at body (1.40–1.43), compact for badge/caption (1.33).

### Assets

The catalog-boundary reading of the Google s2 favicon slug, classifying Pretendard’s OFL as a font-asset license rather than a KakaoPage brand asset, and treating cover art, character spreads, and title imagery as first-party catalog content that must not be replaced with invented brand-color decoration, are derived editorial implementation inferences from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification. The slug itself is source-stated.

- Catalog `logo` is recorded as a favicon slug: `https://www.google.com/s2/favicons?domain=page.kakao.com&sz=128`. That is a third-party favicon proxy URL held as catalog identity metadata; it is not a first-party distributed KakaoPage brand asset, and it is not promoted to one here.
- Cover art, character spreads, and title imagery are first-party catalog content; do not replace them with invented brand-color decoration.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here in full:

| State | Treatment |
|---|---|
| **Empty (library, nothing saved)** | White canvas, black body text explaining the empty state, single yellow CTA to the recommendation feed. No illustration. |
| **Empty (no search results)** | Muted grey `#999999` message: no titles matched. Suggestion to try shorter keywords. |
| **Loading (catalog)** | Grid of `rgba(153,153,153,0.15)` skeleton cards at thumbnail dimensions, 8px radius. Flat — no pulse. Episode rows under headings hold their grey background while content loads. |
| **Loading (content detail)** | Header area: `#eeeeee` block at cover art dimensions. Episode list rows: same grey, no skeleton text. |
| **Error (content not found)** | White canvas, brief black message in 16px Pretendard 400, one black full-pill button "홈으로 가기" (bg `#000000`, text `#ffffff`, radius 100px, height 54px). |
| **Error (network failure)** | Inline message below the failed section; retry link in plain black text. No modal. |
| **Success (episode unlocked)** | The episode begins immediately. No celebration screen — immersion over acknowledgment. |
| **Skeleton (card)** | `rgba(153,153,153,0.15)` at exact cover art aspect ratio (portrait). Remains until image fully loaded. |
| **Disabled (locked episode, not free yet)** | Row remains visible, date and title shown normally. No greying-out — the wait time is the only signal that it's not yet accessible. |
| **Free-unlocked (episode)** | "무료" badge in black/white over the rank counter overlay. Quiet — not a celebratory state, just a status flag. |

The following applicability note, the state maps on the destination and form controls, the kind-omission on the static content card, and the Kind:non-interactive readings on the skeleton, BEST, free-episode, and comment-chip records are a derived editorial implementation inference from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control’s product role rather than its primitive kind. This is not a complete state-coverage claim.

The content card is a static wrapper for cover art. The source supplies no interactive-kind evidence for that container, so its `Kind` and state-applicability map are omitted rather than decided.

### Primary CTA (첫 화 보기 / 이어보기)

- Role: primary content-detail CTA on `https://page.kakao.com/content/57668776`
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#ffd618`
- Text: `#222222`
- Radius: 8px
- Height: 56px
- Font: 12px / 700 Pretendard
- Token-set use: Primary CTA — '첫 화 보기' / '이어보기'
- Token-set path: `tokens.components.button-primary` (`type`, `bg`, `fg`, `radius`, `height`, `font`, `use`)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the content detail page |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | The primary CTA starts or continues reading; it commits no operation in place |
| error | not-applicable | The primary CTA commits no operation in place |
| success | not-applicable | The primary CTA commits no operation in place |

### Back / Error CTA (홈으로 가기)

- Role: error/empty-state destination control
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#000000`
- Text: `#ffffff`
- Radius: 100px
- Height: 54px
- Padding: 0px 20px
- Font: 16px / 700 Pretendard
- Token-set use: Error/empty-state 'Go Home' full pill
- Token-set path: `tokens.components.button-back` (`type`, `bg`, `fg`, `radius`, `height`, `padding`, `font`, `use`)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the error/empty surface |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | 홈으로 가기 is a destination link to home; it commits no operation in place |
| error | not-applicable | The back CTA commits no operation in place |
| success | not-applicable | The back CTA commits no operation in place |

### Active Section Tab (홈 / 정보 / 소식)

- Role: active content-category tab on the content detail page
- Primitive type: `tab`
- Kind: interactive
- Anatomy: label
- Background: `#000000`
- Text: `#ffffff`
- Radius: 16px
- Height: 32px
- Padding: 7px 14px
- Font: 13px / 700 Pretendard
- Token-set active: black pill #000000 / white text #ffffff
- Token-set use: Active content-category tab (홈/정보/소식)
- Token-set path: `tokens.components.tab-active-pill` (`type`, `bg`, `fg`, `radius`, `height`, `padding`, `font`, `active`, `use`)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the content detail page |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Tab control; visual treatment omitted |
| loading | not-applicable | A category tab selects a pane; it commits no operation in place |
| error | not-applicable | A category tab commits no operation in place |
| success | not-applicable | A category tab commits no operation in place |

### Active Main Nav Tab (지금핫한 / 실시간 랭킹)

- Role: active main recommendation tab on `https://page.kakao.com/`
- Primitive type: `tab`
- Kind: interactive
- Anatomy: label
- Background: `#000000`
- Text: `#ffffff`
- Radius: 100px
- Height: 36px
- Padding: 0px 14px
- Font: 16px / 400 Pretendard
- Token-set active: black pill #000000 / white text #ffffff
- Token-set use: Active main section tab (지금핫한/실시간 랭킹)
- Token-set path: `tokens.components.tab-nav-pill` (`type`, `bg`, `fg`, `radius`, `height`, `padding`, `font`, `active`, `use`)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the homepage |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Tab control; visual treatment omitted |
| loading | not-applicable | A recommendation tab selects a pane; it commits no operation in place |
| error | not-applicable | A recommendation tab commits no operation in place |
| success | not-applicable | A recommendation tab commits no operation in place |

### Content Card

- Role: content discovery card (thumbnail + metadata overlay)
- Primitive type: `card`
- Anatomy: wrapper
- Background: `#eeeeee`
- Radius: 12px
- Token-set use: Content discovery card (thumbnail + metadata overlay)
- Token-set path: `tokens.components.card-content` (`type`, `bg`, `radius`, `use`)
- Observed: default only

### Skeleton Card

- Role: lazy-load skeleton placeholder for content thumbnails
- Primitive type: `card`
- Kind: non-interactive
- Anatomy: placeholder
- Background (YAML token): `#eeeeee`
- Live observed fill: `rgba(153,153,153,0.15)`
- Radius: 8px
- Token-set use: Lazy-load skeleton placeholder for content thumbnails (live: translucent rgba(153,153,153,0.15) over white ≈ #eeeeee)
- Token-set path: `tokens.components.card-skeleton` (`type`, `bg`, `radius`, `use`)
- Observed: default only. Kind is non-interactive because the source records a lazy-load placeholder, not a control; there is no state-applicability map.

### BEST Rank Badge

- Role: top-ranking badge on episode rows
- Primitive type: `badge`
- Kind: non-interactive
- Anatomy: label
- Background: `#ff3042`
- Text: `#ffffff`
- Radius: 5px
- Padding: 0px 3px
- Font: 11px / 700 Pretendard
- Token-set use: Top-ranking badge on episode rows
- Token-set path: `tokens.components.badge-best` (`type`, `bg`, `fg`, `radius`, `padding`, `font`, `use`)
- Observed: default only. Kind is non-interactive because the source records a rank overlay, not a control; there is no state-applicability map.

### Coin Recharge Badge (충전)

- Role: coin-recharge shortcut label in the nav header
- Primitive type: `badge`
- Kind: interactive
- Anatomy: label
- Background: `#ffd618`
- Text: `#000000`
- Radius: 2px
- Padding: 3px 8px
- Font: 16px / 400 Pretendard
- Token-set use: '충전' (coin recharge) label badge
- Token-set path: `tokens.components.badge-coin` (`type`, `bg`, `fg`, `radius`, `padding`, `font`, `use`)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the homepage nav header |
| hover | applicable | Pointer-web shortcut; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Shortcut control; visual treatment omitted |
| loading | not-applicable | 충전 is a nav shortcut; it commits no operation in place |
| error | not-applicable | The coin badge commits no operation in place |
| success | not-applicable | The coin badge commits no operation in place |

### Free Episode Badge (무료)

- Role: free-episode overlay on the rank counter
- Primitive type: `badge`
- Kind: non-interactive
- Anatomy: label
- Background: `#000000`
- Text: `#ffffff`
- Radius: 2px
- Padding: 0px 4px
- Font: 10px / 700 Pretendard
- Token-set use: '무료' (free episode) overlay on rank counter
- Token-set path: `tokens.components.badge-free` (`type`, `bg`, `fg`, `radius`, `padding`, `font`, `use`)
- Observed: default only. Kind is non-interactive because the source records a status overlay, not a control; there is no state-applicability map.

### Comment Chip

- Role: comment count / interaction chip on episode rows
- Primitive type: `badge`
- Kind: non-interactive
- Anatomy: counter
- Background: `rgba(0,0,0,0.05)`
- Text: `#000000`
- Radius: 8px
- Height: 28px
- Font: 16px / 400 Pretendard
- Token-set use: Comment count / interaction chip on episode rows
- Token-set path: `tokens.components.comment-chip` (`type`, `bg`, `fg`, `radius`, `height`, `font`, `use`)
- Observed: default only. Kind is non-interactive because the source records a count chip and an elevation fill, not a commit control; there is no state-applicability map.

### Search Bar

- Role: title / author search on the homepage nav header
- Primitive type: `input`
- Kind: interactive
- Anatomy: value field
- Background: transparent
- Text: `#000000`
- Border: none (borderless, integrated into nav header)
- Font: 13px Pretendard
- Placeholder: "제목, 작가를 입력하세요." (`#999999`)
- Height: 18px (inline; nav-embedded)
- Token-set use: Search bar — placeholder '제목, 작가를 입력하세요.'
- Token-set path: `tokens.components.search-input` (`type`, `fg`, `font`, `use`)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the homepage nav header |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | not-applicable | The field does not run an in-place operation; catalog loading is a page-level skeleton |
| error | applicable | Form field; the empty-results treatment is the page-level `#999999` message in the capture record |
| success | not-applicable | The search field does not confirm a completed operation |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing system and measured chrome

- Base unit: ~4px
- Scale: 3px, 7px, 14px, 16px, 20px, 32px, 48px — the same `tokens.spacing` steps named in Foundations
- Navigation header: 96px total height (top-nav 40px + sub-category tabs 56px)
- Content card thumbnail: 152×274px aspect ratio (confirmed from skeleton dimensions, portrait orientation)
- Max content width: 1200px centered
- Content catalog: fluid card grid — multiple columns, portrait-orientation thumbnails
- Category sub-tabs: horizontal scroll strip at 56px height, full-width
- Episode list: full-width stacked rows at 84px height with title/date/badge

The 96px header, 152×274px thumbnail, 1200px max width, 56px sub-tab strip, and 84px episode row stay on the surfaces that established them. The homepage carries the recommendation grid and the 지금핫한 / 실시간 랭킹 strip. The content detail page carries the 홈 / 정보 / 소식 strip and the 84px episode rows. Keeping those writings on their own surfaces rather than treating any one measurement as a cross-surface spec, reading the whitespace philosophy below as the source’s own layout rules rather than a new density system, and reading the breakpoint table, touch-target characterizations, and collapsing strategy as the source’s own layout rules rather than a new responsive specification, are derived editorial implementation inferences from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification.

### Whitespace

- **Content fills, chrome recedes**: minimal padding around content cards; cover art occupies as much visual real estate as possible.
- **List density over breathing room**: episode rows run at 84px with compressed typography; this is a catalog-browsing surface that values information density.
- **Zero decoration**: no gradients, no textures, no shadows between elements — only solid fills and transparent backgrounds.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Single-column content grid, condensed nav |
| Tablet | 768-1024px | 2-3 column grid, sub-tabs scroll horizontally |
| Desktop | 1024-1200px | Full multi-column grid, all tabs visible |

### Touch targets

- Primary CTA: 56px height — generous tap target
- Section tabs: 32px pill — adequate for touch
- Nav pills: 36px — comfortable
- Episode rows: 84px — easy to tap the correct row

### Collapsing strategy

- Content grid compresses from multi-column to 2-column to single-column on mobile
- Category sub-tabs scroll horizontally (scrollable overflow) on narrow viewports
- Navigation header condenses but maintains the yellow coin badge and search icon

<!-- design-md:section content-locales -->
## 6. Content & Locales

KakaoPage's voice is **immersive, fan-fluent, and quietly epic** — a platform that takes its IP catalog as seriously as the readers who love it. The interface copy is sparse to the point of near-invisibility: navigation labels are single-word nouns (추천, 웹툰, 웹소설, 책), CTAs are concrete action verbs (첫 화 보기, 이어보기), and status labels are abbreviations (무료, BEST). The brand never editorializes about the content — it steps aside and lets "지금핫한" (Hot Right Now) speak for itself. Calling that register immersive, fan-fluent, and quietly epic, and reading the chrome as sparse to the point of near-invisibility, are derived editorial implementation inferences from the verified surfaces; they are not KakaoPage-authored or a separately published UI specification. The Korean labels and the verified samples below are the source’s own.

| Context | Tone |
|---|---|
| Main navigation tabs | Minimal noun labels — 추천, 웹툰, 웹소설, 책, 요일연재 |
| Sub-category tabs | Populist discovery framing — 지금핫한, 실시간 랭킹, 완결추천 |
| Primary CTA | Direct action — 첫 화 보기, 이어보기 |
| Rank signals | Prestige shorthand — BEST |
| Free access | Clear benefit statement — 무료, 기다리면 무료 |
| Error/empty states | Calm redirect — 홈으로 가기 |

**Voice samples (verified live 2026-06-22):**

- "기다리면 무료 웹툰" — section header (access model explained in four words).
- "지금핫한" — primary recommendation tab (portmanteau energy, platform-native shorthand).
- "오리지널 독점 웹툰, 웹소설 부터 책 까지 한 곳에서 즐기세요. 인기 콘텐츠가 기다리면 무료!" — meta description (complete brand promise in two sentences).

Classifying the parenthetical glosses on those three samples as editorial readings of verified live copy, rather than as additional official UI copy, is a derived editorial implementation inference from the verified surfaces; it is not KakaoPage-authored or a separately published UI specification.

**Forbidden register**: genre-describing spoilers in UI chrome, overly promotional adjectives on titles, urgency dark patterns ("마지막 기회!" for paid content), English loanwords where Korean serves better.

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

These decisions are unnamed values, not permissions to invent. Reading the list as a catalog of unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not KakaoPage-authored or a separately published UI specification.

- hover and focus-visible visual treatments
- exact cubic-bezier values for `ease-enter`, `ease-exit`, and `ease-standard`
- getdesign.md / styles.refero.design records (the source names both lookups as not found)
