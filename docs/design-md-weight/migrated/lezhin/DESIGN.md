# Lezhin Comics Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Lezhin Comics is Korea's first premium webtoon platform — bold, content-first, and unapologetically direct. This contract covers the first-party web product the source inspected for tokens: the homepage at `https://www.lezhin.com` (homepage HTML and five CSS bundles `035ea059869bfd89.css`, `9161416b11db8c9e.css`, `06e1ad77298be69d.css`, `0427f27bd4442fbd.css`, `895581ecc829564e.css`). The corporate brand/about page at `https://about.lezhin.com/en` is a narrative source in the same packet; it is not a token surface. The source names an Android app launch on June 7, 2013, Lezhin Studio, the Lezhin Shop, and dedicated KR / United States / Japan services as product-range facts. Those names stay as product-range facts. Treating `https://www.lezhin.com` as this contract's token surface, the about page as narrative rather than as a token surface, and the named app launch, Studio, Shop, and regional services as availability rather than as captured UI, and reading the source's opening product characterization as catalog reconstruction rather than as Lezhin-authored copy, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

The source records a dual-mode interface on that homepage: a light default canvas `#ffffff` and an inverted near-black base `#111115`, punctuated by a single vivid crimson `#eb0014`. Grey neutrals run `#e9e9ec` through `#09090b`. Content grids are tight and image-led; typography is set in Pretendard Variable. The hex values, the dual-mode pairing, the grey ladder, and the image-led grid are recorded. Calling the recorded light canvas plus inverted near-black pairing a dual-mode interface, and calling that layer dark, immersive, premium but unadorned, or a UI in which 8,000+ titles speak louder than chrome, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Lezhin Entertainment was founded in April 2012 by Han Hee-sung (the blogger known as "lezhin") and developer Kwon Jung-hyuk, launching its Android app on June 7, 2013. The company was acquired by Seoul-listed KidariStudio in December 2020. The platform was built on a simple conviction: great comics deserve frictionless commerce. By introducing a coin-based micro-payment system at a time when most Korean webtoon platforms relied on ad revenue, Lezhin created South Korea's first premium webtoon marketplace — positioning itself as the platform for creators who wanted to earn and readers who wanted more. The company's governing mission is that "stories can make the world a better place." Lezhin Entertainment operates as a global content company, running the Lezhin Comics platform across Korea, the United States, and Japan. Its catalogue spans over 8,000 titles, and beyond reading, Lezhin Studio adapts webtoon IPs into films, dramas, and games while the Lezhin Shop brings physical merchandise to fans who want to hold their favourite stories in their hands. The brand's tagline — "솔직한 재미 대폭발" (honest fun explosion) — encapsulates the operating philosophy: candid about content, direct about pricing, and unapologetically focused on reader satisfaction. Lezhin's four stated values — duty and self-reliance, mutual respect, customer satisfaction, and innovation — underpin both its creator relationships and its product decisions, from daily episode release schedules to the coin economy. The dates, the founders, the KidariStudio acquisition, the coin marketplace claim, the mission sentence, the 8,000-title catalogue, Studio and Shop, the tagline, and the four values are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-commerce narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or control the source records, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

- Discover titles on the thumbnail-first homepage at `https://www.lezhin.com`.
- Filter titles with the genre/tag chip (`lzChip`).
- Buy or read an episode with the recorded coin price in context (source: coin balances and episode prices are always visible before purchase).
<!-- design-md:claim-end -->

### Audience

No named or demographic personas are invented. The source labels its §13 figures as *Illustrative — for design scenario use only*, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records at a group level is adult readers, creators, and readers on dedicated KR / United States / Japan services. Reading those source-named groups as this product's audience, and dropping the source's archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

### Distinctive traits

Classifying the list as a restatement of recorded values, and grouping the five traits and the readings inside them, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

- Dual-mode crimson identity: `#eb0014` on light `#ffffff` and inverted `#111115` / `#09090b`
- Pretendard Variable → Pretendard → `-apple-system` → Noto Sans KR → Malgun Gothic → sans-serif; scale 10 / 12 / 13 / 14 / 15 / 16 / 17 / 18 / 20 / 24 / 28 / 32 / 36 / 40 / 56 / 80px (`--size-3xs` through `--size-10xl`)
- 4px radius on rectangular buttons and cards; pill chips at `999px` / YAML `9999`; circle thumbs at `9999px`
- Thumbnail-first 2/3 portrait cards; fluid 7 / 4 / 3–4 column grids
- Recorded motion: 125ms / 200ms / 250ms, `ease-in-out` on background-color and border, `linear` on switch, skeleton `1.8s ease-in-out infinite`

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Lezhin-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Reader first, always.** Every service decision begins with the question of how readers discover and enjoy content. *UI implication:* Thumbnail art is the dominant visual element; interface chrome is minimal so it never competes with the cover image.
2. **Honest commerce.** Lezhin pioneered transparent paid webtoons. The pricing model is explicit — coins, costs, and episode counts are surfaced without dark patterns. *UI implication:* Coin balances and episode prices are always visible in context before purchase; no hidden upsells.
3. **Candid about content.** The platform serves adult audiences without euphemism. *UI implication:* Genre and content-type badges (including adult tags) are shown directly on thumbnail cards rather than hidden behind additional taps.
4. **Data and intuition in balance.** The founding team values "2% crazy" creative instinct alongside clear analytical thinking. *UI implication:* The platform ships experimental features (AI search, Snack short-drama) as clearly-labelled distinct experiences rather than silently folding them into the main flow.
5. **Global through localisation.** Lezhin operates dedicated services for KR, US, and JP markets with locale-specific content curation rather than a one-size-fits-all approach. *UI implication:* Typography stacks, locale date formats, and content catalogues adapt per region rather than defaulting to a single language baseline.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Lezhin-authored or a separately published UI specification.

- Use `#eb0014` exclusively for the single highest-priority CTA per screen
- Apply Pretendard (or Noto Sans KR fallback) — never substitute decorative display fonts
- Follow the exact button-height ladder: 28px (xs) / 40px (sm) / 48px (md) / 56px (lg)
- Use the pill chip (`border-radius: 999px`) for filterable genre or tag selectors
- Maintain 4px radius on cards and rectanglular buttons for the characteristic sharp-yet-soft look
- Use the skeleton shimmer (`lzSkeleton` — 1.8s ease-in-out infinite) during async content loads
- Reserve the AI gradient (`#4CECBE → #00BFE2 → #007EE0`) only for AI-feature UI accents

### Avoid

The source states these six as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Lezhin-authored or a separately published UI specification.

- Don't use red for destructive warnings — Lezhin's red is a brand/action signal, not a danger signal
- Don't mix primary and secondary CTAs at equal visual weight on the same card or row
- Don't apply `border-radius` larger than 12px on rectangular interactive components (chips and avatars are exempt)
- Don't place light-mode text (`#111115`) directly on the dark surface (`#111115`) — toggle to inverted tokens
- Don't hard-code pixel color values — always reference the semantic CSS variable so dark-mode tokens apply correctly
- Don't add decorative illustration or icon embellishments inside buttons

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys follow the YAML paths. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as two keys that share `#ffffff`, keeping YAML `tokens.colors.ink` `#111115` unmerged from the inverted background role and from light-mode text, keeping YAML `tokens.colors.charcoal` `#222225` unmerged from dark-mode `--border-muted: #222225` and from secondary-button fill, keeping `#c40017` button focus/active unmerged from §9 primary focus `#9e0018`, treating snackbar / skeleton-dark / disabled-tertiary / selected-chip wash / primary-disabled / AI-gradient writings as body records that are not YAML `tokens.colors.*` keys, and keeping recorded control text, snackbar text, and dark-mode inverted text on the two YAML keys that already share that canvas/on-primary hex rather than as a third YAML `tokens.colors.*` key, are derived editorial implementation inferences from the verified surfaces; they are not Lezhin-authored or a separately published UI specification. The hex values and the recorded uses are the source's own.

**Brand red**

- **Brand Red** (`#eb0014` / YAML `#eb0014`): primary CTA buttons, state-switch-selected, state-form-bg-selected, badge. Token-set path `tokens.colors.primary`. Catalog identity `primary_color` is `#eb0014`.
- **Red Hover** (`#ff5254` / YAML `#ff5254`): primary button hover state. Token-set path `tokens.colors.primary-hover`.
- **Red Focus/Dark** (`#c40017` / YAML `#c40017`): badge background, button focus/active state. Token-set path `tokens.colors.primary-dark`. Source §9 also writes primary focus as `#9e0018`. Those two focus writings stay two records.

**Ink and dark surfaces**

- **Ink Black** (`#111115` / YAML `#111115`): inverted background, text-default, icon-default. Token-set path `tokens.colors.ink`.
- **Deep Dark** (`#09090b` / YAML `#09090b`): dark-strong surface. Token-set path `tokens.colors.deep-dark`.
- **Dark Charcoal** (`#222225` / YAML `#222225`): secondary button background, border-default. Token-set path `tokens.colors.charcoal`. Source §6 also writes dark-mode `--border-muted: #222225`. That border writing stays a second record.

**Text ladder**

- **Soft Black** (`#36363a` / YAML `#36363a`): text-soft, icon-soft. Token-set path `tokens.colors.text-soft`.
- **Mid Grey** (`#6f6f77` / YAML `#6f6f77`): text-subtle, icon-subtle. Token-set path `tokens.colors.text-subtle`.
- **Muted Grey** (`#a1a1a9` / YAML `#a1a1a9`): text-muted, icon-muted, placeholder. Token-set path `tokens.colors.text-muted`.

**Line, wash, canvas**

- **Border Muted** (`#e9e9ec` / YAML `#e9e9ec`): card borders, dividers. Token-set path `tokens.colors.border-muted`.
- **Surface Muted** (`#f4f4f5` / YAML `#f4f4f5`): background muted, disabled button, skeleton base. Token-set path `tokens.colors.surface-muted`.
- **White / Canvas** (`#ffffff` / YAML `#ffffff`): default background (light). Token-set path `tokens.colors.canvas`.
- **On-primary** (`#ffffff` / YAML `#ffffff`): text-inverted / text on primary red. Token-set path `tokens.colors.on-primary`. This is not `tokens.colors.canvas`.

**Recorded body writings that are not YAML `tokens.colors.*` keys**

- Primary focus from source §9: `#9e0018`
- Tertiary disabled fill `#fafafa` and text `#dadadd`
- Primary disabled fill `rgba(255,82,84,0.2)`
- Selected-chip wash `rgba(255,82,84,0.15)`
- Snackbar `#2f353e` with text `#ffffff` and link `#2992d6`
- Dark-mode skeleton base `#3a3b3d`
- AI gradient `#4CECBE` → `#00BFE2` → `#007EE0`

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the YAML recorded them): `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 12` · `tokens.spacing.base: 16` · `tokens.spacing.lg: 20` · `tokens.spacing.xl: 24` · `tokens.spacing.xxl: 32` · `tokens.spacing.section: 56`.

Source §5 also names 4px or 8px gutters on dense grids and 12–16px gutters on sparser layouts, and source §9 names 4/8/12/16/20/24px spacing increments. Source §9 also names Card gutters are 4px (dense) or 8–12px (standard). `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12`. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4` and not button radius `4px`. `tokens.spacing.base: 16` is not the body size 16. `tokens.spacing.lg: 20` is not outlined padding `0 20px`. `tokens.spacing.xl: 24` is not section-header size 24. `tokens.spacing.section: 56` is not Primary Large height `56px`. `tokens.spacing.xxl: 32` is not a type size. Keeping those unitless steps on their own keys — md unmerged from rounded.lg, sm from rounded.md, xs from rounded.sm and from button radius, base from body size, lg from outlined padding, xl from section-header size, section from Primary Large height, and xxl from a type size — and keeping gutter px spellings off those keys, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 4` · `md: 8` · `lg: 12` · `full: 9999`.

- 4px: rectangular buttons and cards — YAML `tokens.rounded.sm`. Component records write `4px` on those controls. Don't-list maximum on rectangular interactive components is 12px (`tokens.rounded.lg`).
- 8px: YAML `tokens.rounded.md`. Not spacing `8`.
- 12px: YAML `tokens.rounded.lg`. Don't-list ceiling on rectangular interactive components.
- Pill chips: source §4 `999px` and YAML `tokens.components.badge-chip.radius` `9999` and YAML `tokens.rounded.full` `9999`. Circle thumbs: YAML `tokens.components.card-circle.radius` `9999` and source §4 `9999px`. Three writings stay three writings.

Keeping four rounded keys, keeping `4px` unmerged from spacing `4`, keeping `999px` / unitless `9999` / `9999px` as three writings, and keeping the 12px rectangular ceiling on `tokens.rounded.lg`, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

### Elevation

YAML `tokens.shadow` keys, kept on their own path: `tokens.shadow.subtle: "0 0 0 rgba(17,17,21,0.06)"` · `tokens.shadow.soft: "0 2px 12px 0 rgba(17,17,21,0.08)"` · `tokens.shadow.medium: "0 0 0 rgba(17,17,21,0.25)"` · `tokens.shadow.strong: "0 0 0 rgba(17,17,21,0.30)"`.

Source §6 also writes the rgba ladder without those `0 0 0` offsets:

- **Level 1 – Subtle:** `rgba(17,17,21,0.06)` — hero banner ambient, near-flat cards
- **Level 2 – Soft:** `rgba(17,17,21,0.08)` — dropdown menus (lzSelectPaper: `0 2px 12px 0 rgba(17,17,21,.08)`)
- **Level 3 – Medium:** `rgba(17,17,21,0.25)` — drawers, floating elements
- **Level 4 – Strong:** `rgba(17,17,21,0.30)` — modals
- **Level 5 – Bold:** `rgba(17,17,21,0.50)` — overlay scrim base
- **Thumbnail shadow:** `rgba(17,17,21,0.20)` inset on cover art
- **Dark overlay (full scrim):** `rgba(17,17,21,0.85)` — background-overlay-bold

Dark mode uses the same numeric scale but on the dark surface (`#111115`), so card depth reads via subtle border differences (`--border-muted: #222225`) rather than box-shadow contrast.

Keeping YAML `"0 0 0 …"` strings on their own keys rather than flattening them over the §6 rgba ladder, and keeping Level 5 / thumbnail inset / full scrim off the YAML keys, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

### Motion

The button, tab, drawer, snackbar, skeleton, switch, and AI-gradient values below are recorded in the source from live CSS. Reduced-motion behavior is not recorded and is omitted. The durations, the named easings, the motion rules, the omission of reduced-motion, the five-kind promotion gate below, and the reading of `ease-in-out` / `linear` as CSS named keywords recorded on the inspected bundles rather than as the catalog template cubic-bezier values, are a derived editorial implementation inference from the verified surfaces; they are not Lezhin-authored or a separately published UI specification.

**Duration scale** (source §15):

| Token | Value | Use |
|---|---|---|
| Fast (micro-interactions) | 125ms | sort-arrow expand/collapse |
| Standard | 200ms | button background/border transitions, tab color, opacity fades (snackbar) |
| Deliberate | 250ms | slide-in/slide-out transforms (drawer, sheet transitions), switch track background, skeleton reveal height |

Source §9 also writes `0.2s ease-in-out` for background-color and borders and `0.25s linear` for transforms. Those second-unit writings stay beside the millisecond scale rather than being converted into it. Keeping both writings, rather than converting one into the other, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

**Easing** (source §15):

- `ease-in-out` — background-color and border transitions on buttons and tabs
- `linear` — switch thumb position and track color
- `ease-in-out` — skeleton shimmer sweep (1.8s)

**Rules** (source §15):

- Button hover/focus: 200ms ease-in-out on `background-color` and `border`
- Drawer / bottom-sheet: `transform 250ms ease-in-out, opacity 250ms ease-in-out` — enters from below or from the left
- Snackbar: `opacity 200ms` fade-in / fade-out; no transform movement
- Skeleton: `translateX(-100% → 100%)` over 1.8s ease-in-out infinite; never use shorter durations as it feels cheap against dense content grids
- Switch: `250ms linear` for track background, `250ms linear` for circle position — simultaneous, never staggered
- AI gradient divider (search bar): `translateX` at 3s ease-in-out infinite — slower to feel ambient, not urgent

An exact additional motion value may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Reduced-motion behavior is unnamed in this packet and is omitted rather than invented.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings — the about page is not a universal type token, Pretendard Variable is the live computed UI family, the homepage CSS stack corroborates the load, no Lezhin-exclusive distributed family was verified, the named fallbacks remain fallbacks, and Studio / Shop / United States / Japan typography stay outside the homepage CSS capture — are a derived editorial implementation inference from the verified surfaces; they are not Lezhin-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | `https://about.lezhin.com/en` supplies brand narrative; it does not publish a universal current typography token. |
| Live computed surface-use | Homepage CSS sets the UI family to Pretendard Variable on `https://www.lezhin.com`. |
| FontFaceSet and source corroboration | The source records the stack Pretendard Variable → Pretendard → `-apple-system` → Noto Sans KR → Malgun Gothic → sans-serif. |
| Official distributed asset | No Lezhin-exclusive distributed type family was verified. Pretendard is a third-party face used on the captured web product. |
| Declared-only | Fallbacks after Pretendard Variable / Pretendard: `-apple-system`, Noto Sans KR, Malgun Gothic, `sans-serif`. They remain fallbacks. |
| Outside these captures | Studio, Shop, United States, and Japan product typography remain outside the homepage CSS capture. |

### Family

- **Current visible UI family:** `Pretendard Variable`, then `Pretendard`, then `-apple-system`, `Noto Sans KR`, `Malgun Gothic`, `sans-serif`
- YAML `tokens.typography.family.sans`: `Pretendard Variable`
- YAML `tokens.typography.family.mono`: `Pretendard Variable` — a second key that writes the same family; the two keys stay two keys. Keeping those two family keys rather than merging them, and refusing to present a fallback as the brand face, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

### Type roles

Token-set `use` strings are kept verbatim. YAML `lineHeight` stays the unitless `1.35` / `1.4` / `1.5` the YAML recorded. Source §3 also writes `1.5` for body, `1.35–1.4` for compact UI labels, and `line-height: 100%` for buttons. YAML sizes are unitless (`24`, `18`, `16`, `14`, `13`, `12`); source §3 spells a 16-step px scale `10 / 12 / 13 / 14 / 15 / 16 / 17 / 18 / 20 / 24 / 28 / 32 / 36 / 40 / 56 / 80px` mapped via `--size-3xs` through `--size-10xl`. YAML `section-header` tracking is `-0.36`; source §3 also writes `−0.28px to −0.36px` for tighter display text in Korean. Weights recorded: 400 (regular), 500 (medium), 600 (semibold), 700 (bold). Keeping the YAML `use` strings verbatim, keeping unitless sizes and px spellings as two writings, keeping unitless line-heights unconverted to a replacement px, and keeping YAML tracking `-0.36` beside `−0.28px to −0.36px`, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

| Role | YAML `use` | Size | Weight | Line height | Tracking | Token-set path |
|---|---|---:|---:|---:|---:|---|
| section-header | Section headers | 24 | 700 | 1.35 | -0.36 | `tokens.typography.section-header` |
| title | Smaller section headers | 18 | 700 | 1.4 | | `tokens.typography.title` |
| body | Body default | 16 | 400 | 1.5 | | `tokens.typography.body` |
| label | Label / UI text, button labels | 14 | 600 | 1.4 | | `tokens.typography.label` |
| label-medium | Medium UI text | 14 | 500 | 1.4 | | `tokens.typography.label-medium` |
| caption | Caption / metadata | 13 | 400 | 1.4 | | `tokens.typography.caption` |
| caption-small | Smallest metadata | 12 | 400 | 1.4 | | `tokens.typography.caption-small` |

Additional source §3 rules, kept as recorded: Label / UI text: 14px / weight 500 (medium) or 600 (semibold); Button labels 14px (small/medium) or 16px (large) / weight 600; Section headers 18–24px / weight 700; Caption / metadata 12–13px / weight 400; `line-height: 100%` for buttons.

### Assets

- Catalog favicon field: Google s2 proxy `https://www.google.com/s2/favicons?domain=lezhin.com&sz=256`. That is an identity pointer, not a Lezhin-hosted brand file.
- Empty-state illustration recorded in source §14: `ccdn.lezhin.com/files/assets/img/empty-book-lt.png` (96×140px).
- Cover art and episode thumbnails are first-party catalog content; do not replace them with invented crimson decoration.

Reading the Google s2 slug as an identity pointer rather than as a first-party mark file, and reading thumbnails as first-party catalog content that must not be replaced with invented decoration, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here in full:

- **Empty (no content):** Shows the `lzEmpty` component with an illustrated book image (96×140px from `ccdn.lezhin.com/files/assets/img/empty-book-lt.png`); title in `#36363a` at 18px / weight 500; subtitle in `#6f6f77` at default size / weight 400
- **Loading (skeleton):** `lzSkeleton` — background `#f4f4f5`; shimmer overlay `hsla(0,0%,100%,0.6)` animated via `linear-gradient(120deg, transparent 35%, shimmer 50%, transparent 65%)` at 1.8s ease-in-out infinite; dark-mode variant uses `#3a3b3d` base and `hsla(0,0%,100%,0.08)` shimmer
- **Error (network/500):** `lzError` component centered at max-width 640px; title `#111115` at 34px / weight 500 (desktop) or 24px (mobile); error illustration displayed at `width: auto; height: 180px`; home button uses primary red CTA
- **Error (expired/access denied):** Same `lzError` structure; uses specific expired-state illustration (132px wide); body text in `#6f6f77` at 14px; action CTA in red primary button
- **Success:** State-form-bg-selected `#eb0014` applied to radio/checkbox fill; switch tracks when selected use `#eb0014`; snackbar uses dark `#2f353e` background with `#ffffff` text and blue-tinted link `#2992d6`
- **Skeleton (card-specific):** Comic card background holds `#f4f4f5` while image lazy-loads; once loaded, image covers the background fully with `object-fit: cover`
- **Disabled:** Primary button background `rgba(255,82,84,0.2)` with `#ffffff` text; tertiary button background `#fafafa` with `#dadadd` text; pointer-events none applied via attribute `[disabled]`

Every interactive-kind verdict, every applicability verdict, and the reason given for either — including omitting Kind and the applicability map on the two card records, the loading/error/success closures on chips, tabs, and the dropdown paper, keeping each YAML `use` string as a Token-set use row beside Role, keeping YAML compact `font` spellings such as `14px/600` beside body `14px / 600`, keeping 28px (xs) as a Do-list ladder note rather than a YAML component, and keeping the two recorded focus/active writings off `focus-visible` rows — is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. Source §2 `#c40017` and source §9 `#9e0018` are recorded focus/active values; they are not written onto `focus-visible` rows. This is not a complete state-coverage claim.

### Primary (lzButtonPrimary / lzBtn--filled_red)

- Role: primary CTA
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#eb0014`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Height: 48px
- Padding: 0 12px
- Font: 14px / 600 (YAML `font`: `14px/600`)
- Hover background: `#ff5254`
- Focus/active: `#c40017` (source §2). Source §9 also writes `#9e0018` for primary focus. Both writings stay.
- Disabled: `rgba(255,82,84,0.2)` background, `#ffffff` text
- Token-set use: Primary CTA, 48px height
- Token-set path: `tokens.components.button-primary` (`type`, `bg`, `fg`, `radius`, `padding`, `font`, `use`)
- Observed: default, hover (`#ff5254`), focus/active (`#c40017` / `#9e0018`), disabled (`rgba(255,82,84,0.2)`)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured primary CTA |
| hover | applicable | Pointer-web button; treatment captured `#ff5254` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; captured `rgba(255,82,84,0.2)` / `#ffffff` |
| loading | applicable | Primary CTA can start a purchase or home recovery; visual treatment omitted |
| error | applicable | A committing CTA can fail in place; the `lzError` home button uses this primary red CTA |
| success | applicable | A committing CTA can complete; recorded success vehicles are form-selected fill and the snackbar |

### Primary Large

- Role: large primary CTA
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#eb0014`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Height: 56px
- Padding: 0 16px
- Font: 16px / 600 (YAML `font`: `16px/600`)
- Token-set use: Large primary CTA, 56px height
- Token-set path: `tokens.components.button-primary-large` (`type`, `bg`, `fg`, `radius`, `padding`, `font`, `use`)
- Observed: default only on this size. Hover / focus / disabled treatments are recorded on the 48px primary record.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured large primary CTA |
| hover | applicable | Pointer-web button; visual treatment omitted on this size |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; captured on the 48px primary record |
| loading | applicable | Large primary CTA can start the same class of commit; visual treatment omitted |
| error | applicable | A committing CTA can fail in place; visual treatment omitted |
| success | applicable | A committing CTA can complete; visual treatment omitted |

### Secondary (lzButtonSecondary / lzBtn--filled_bw)

- Role: secondary
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#222225`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Height: 48px
- Padding: 0 12px
- Font: 14px / 600 (YAML `font`: `14px/600`)
- Token-set use: Secondary, 48px height
- Token-set path: `tokens.components.button-secondary` (`type`, `bg`, `fg`, `radius`, `padding`, `font`, `use`)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured secondary button |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Source Don't-list names secondary as a CTA of unequal visual weight with primary; visual treatment omitted |
| error | applicable | Source Don't-list names secondary as a CTA; a CTA can fail in place; visual treatment omitted |
| success | applicable | Source Don't-list names secondary as a CTA; a CTA can complete; visual treatment omitted |

### Tertiary (lzButtonTertiary / lzBtn--filled_grey)

- Role: tertiary
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#f4f4f5`
- Text: `#36363a`
- Border: none
- Radius: 4px
- Height: 48px
- Padding: 0 12px
- Font: 14px / 600 (YAML `font`: `14px/600`)
- Disabled: `#fafafa` background, `#dadadd` text
- Token-set use: Tertiary, 48px height
- Token-set path: `tokens.components.button-tertiary` (`type`, `bg`, `fg`, `radius`, `padding`, `font`, `use`)
- Observed: default and disabled (`#fafafa` / `#dadadd`)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured tertiary button |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; captured `#fafafa` / `#dadadd` |
| loading | applicable | Recorded 48px md action in the button-height ladder, with a captured disabled treatment; visual treatment omitted |
| error | applicable | Recorded 48px md action in the button-height ladder; visual treatment omitted |
| success | applicable | Recorded 48px md action in the button-height ladder; visual treatment omitted |

### Outlined (lzBtn--outlined)

- Role: outlined
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: transparent
- Text: `#36363a`
- Border: 1px solid `#a1a1a9`
- Radius: 4px
- Height: 40px
- Padding: 0 20px
- Font: 14px / 600 (YAML `font`: `14px/600`)
- Token-set use: Outlined, 1px #a1a1a9 border, 40px height
- Token-set path: `tokens.components.button-outlined` (`type`, `bg`, `fg`, `radius`, `padding`, `font`, `use`)
- Observed: default only. Height 40px is the sm step on the Do-list ladder 28px / 40px / 48px / 56px; 28px (xs) is that ladder note, not a YAML component.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured outlined button |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Recorded 40px sm action in the button-height ladder; visual treatment omitted |
| error | applicable | Recorded 40px sm action in the button-height ladder; visual treatment omitted |
| success | applicable | Recorded 40px sm action in the button-height ladder; visual treatment omitted |

### Comic Thumbnail Card (lzCard)

- Role: comic thumbnail card
- Primitive type: `card`
- Anatomy: image
- Background: `#f4f4f5`
- Border: 1px solid `rgba(17,17,21,0.1)`
- Radius: 4px
- Aspect ratio: 2/3 (portrait)
- Token-set use: Comic thumbnail card, 2/3 portrait aspect
- Token-set path: `tokens.components.card-thumbnail` (`type`, `bg`, `radius`, `use`)
- Observed: default geometry. The source records a thumbnail display surface, not a control; Kind and the state-applicability map are omitted (C4).

### Circle Thumb Card (lzCardCircleThumb)

- Role: circle thumb card
- Primitive type: `card`
- Anatomy: image
- Radius: 9999px
- Border: tracked ring at 3px stroke
- Token-set use: Circle thumb card, tracked ring
- Token-set path: `tokens.components.card-circle` (`type`, `radius`, `use`)
- Observed: default geometry. The source records a thumbnail display surface, not a control; Kind and the state-applicability map are omitted (C4).

### Default Chip (lzChip)

- Role: default genre/tag chip
- Primitive type: `badge`
- Kind: interactive
- Anatomy: label
- Background: transparent
- Text: `#6f6f77`
- Border: 1px solid `#e9e9ec`
- Radius: 999px (YAML `tokens.components.badge-chip.radius`: `9999`; YAML `tokens.rounded.full`: `9999`)
- Padding: 0 12px
- Height: 32px
- Token-set use: Default genre/tag chip, 1px #e9e9ec border, 32px height
- Token-set path: `tokens.components.badge-chip` (`type`, `bg`, `fg`, `radius`, `padding`, `use`)
- Observed: default. Source Do-list: pill chip for filterable genre or tag selectors.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default chip |
| hover | applicable | Pointer-web filter chip; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A filter chip can be unavailable; visual treatment omitted |
| loading | not-applicable | A genre/tag chip selects a filter; the chip itself does not run an in-place operation |
| error | not-applicable | Filter selection does not produce an in-place error on the chip |
| success | not-applicable | Filter selection does not confirm a completed operation on the chip |

### Selected Chip

- Role: selected chip
- Primitive type: `badge`
- Kind: interactive
- Anatomy: label
- Background: `rgba(255,82,84,0.15)`
- Text: `#c40017`
- Border: 1px solid transparent
- Radius: 999px (YAML `tokens.components.badge-chip-selected.radius`: `9999`)
- Token-set use: Selected chip
- Token-set path: `tokens.components.badge-chip-selected` (`type`, `fg`, `radius`, `use`)
- Observed: selected presentation

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured selected-chip presentation |
| hover | applicable | Pointer-web filter chip; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A filter chip can be unavailable; visual treatment omitted |
| loading | not-applicable | Selected-chip is a filter presentation; it does not run an in-place operation |
| error | not-applicable | Filter selection does not produce an in-place error on the chip |
| success | not-applicable | Filter selection does not confirm a completed operation on the chip |

### Default Tab (lzTab)

- Role: default tab
- Primitive type: `tab`
- Kind: interactive
- Anatomy: label
- Background: `rgba(17,17,21,0.04)`
- Text: `#111115`
- Border: 1px solid `rgba(17,17,21,0.04)`
- Radius: 4px
- Padding: 0 12px
- Height: 36px
- Token-set use: Default tab, 36px height
- Token-set path: `tokens.components.tab-default` (`type`, `fg`, `radius`, `padding`, `use`)
- Observed: default

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default tab |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab selects a destination; the tab itself does not run an in-place operation |
| error | not-applicable | Destination selection does not produce an in-place error on the tab |
| success | not-applicable | Destination selection does not confirm a completed operation on the tab |

### Selected Tab

- Role: selected tab
- Primitive type: `tab`
- Kind: interactive
- Anatomy: label
- Background: `rgba(17,17,21,0.95)`
- Text: `#ffffff`
- Radius: 4px
- Token-set use: Selected tab
- Token-set path: `tokens.components.tab-selected` (`type`, `fg`, `radius`, `use`)
- Observed: selected presentation

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured selected-tab presentation |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be unavailable; visual treatment omitted |
| loading | not-applicable | Selected-tab is destination presentation; it does not run an in-place operation |
| error | not-applicable | Destination selection does not produce an in-place error on the tab |
| success | not-applicable | Destination selection does not confirm a completed operation on the tab |

### Dropdown / Select (lzSelectPaper)

- Role: dropdown/select container
- Primitive type: `dialog`
- Kind: interactive
- Anatomy: paper
- Background: `#ffffff`
- Border: 1px solid `#f4f4f5`
- Radius: 4px
- Padding: 12px 0
- Elevation: `0 2px 12px 0 rgba(17,17,21,.08)` (YAML `tokens.shadow.soft`)
- Token-set use: Dropdown/select container, 1px #f4f4f5 border
- Token-set path: `tokens.components.dialog-dropdown` (`type`, `bg`, `radius`, `padding`, `use`)
- Observed: default paper

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured dropdown paper |
| hover | applicable | Pointer-web select paper; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A select can be unavailable; visual treatment omitted |
| loading | not-applicable | The paper presents options; it does not run an in-place operation |
| error | not-applicable | The paper presents options; it is not a committing field |
| success | not-applicable | The paper presents options; it does not confirm a completed operation |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Layout principles

- **Grid:** fluid column-grid whose gutter and column count adapt per viewport: 7 columns on desktop (≥ 961px), 4 columns on tablet (640–960px), 3–4 columns on mobile (≤ 639px)
- **Card width:** `calc((100% - (col-1) × gap) / col)` with 4px or 8px gutters on dense grids and 12–16px gutters on sparser layouts
- **Card gutters (source §9):** 4px (dense) or 8–12px (standard)
- **Page max-widths:** 1036px at 961–1280px breakpoint and 1212px at 1281px+
- **Mobile carousel:** Horizontal scroll snap for compact-carousel sections (snap-scroll list) on mobile
- **Touch:** All interactive regions maintain at minimum 36px touch targets

### Responsive behavior

Lezhin uses three primary breakpoints:

- **Mobile** `max-width: 960px` — single-column flow, horizontal-scroll carousels, paddings collapse to 8–16px, card grids shift to 3–4 columns
- **Tablet** `min-width: 640px and max-width: 960px` — 4–6 column grids, moderate gutters (12–16px), nav bar adjusts to compact mode
- **Desktop** `min-width: 961px` — 7-column grids, 24–32px gutters, full GNB nav, fixed sidebar elements appear

Additional breakpoints handle edge cases: `max-width: 639px` (small mobile, 3-col grids), `max-width: 320px` (reduced padding to 8px), `min-width: 1281px` (max-width: 1212px container). Components observe `prefers-color-scheme: dark` via 53 scoped media queries, switching semantic tokens to their dark-palette counterparts without changing the component markup.

Source §5 writes tablet as 4 columns (640–960px) and mobile as 3–4 columns (≤ 639px); source §8 writes Mobile as `max-width: 960px` with 3–4 columns and Tablet as 4–6 columns. Both writings stay. Dark-mode swap recorded in source §9: `--bg-default` to `#111115`, `--text-default` to `#ffffff`. The 48px / 56px / 40px / 36px / 32px control heights are control measurements, not a cross-viewport specification. Treating the breakpoint lists, the `calc` card widths, the 1036px / 1212px max-widths, the 36px touch floor, the 53 dark-scheme queries, and the `--bg-default` / `--text-default` swap as the source's own layout contract rather than as a captured cross-viewport pass, keeping the §5 4-column tablet writing beside the §8 4–6-column tablet writing, and keeping recorded control heights as control measurements rather than as a cross-viewport specification, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

**Brand voice:** Direct, confident, candid

The Lezhin voice is **솔직한** (honest/frank) — it does not hedge or oversell. Copy leans toward short declarative punches rather than elaborate prose. It speaks to adult readers who know what they want and appreciate the platform getting out of the way.

Calling that register direct, confident, and candid, reading the table below as reconstruction direction rather than as a published voice guide, and reading the recorded UI copy in this packet as Korean with dedicated KR / US / JP catalogues rather than as a single language baseline, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification. The Korean samples and the tagline are the source's own.

| Do | Don't |
|----|-------|
| Use short, punchy sentences | Use vague or corporate euphemisms |
| Be direct about content types | Sanitize mature topics with excessive euphemism |
| Address readers as adults who make their own choices | Be paternalistic or add unsolicited warnings |
| Use Korean naturally (informal register is fine) | Over-translate Korean idioms into stiff English equivalents |
| Let the content title and art do the heavy lifting | Over-describe what readers can see for themselves |

**Voice samples (illustrative):**

- *Illustrative:* "솔직한 재미 대폭발 — 당신이 찾던 진짜 웹툰." (Honest fun explosion — the real webtoon you've been looking for.)
- *Illustrative:* "매일 업데이트. 오늘 뭐 읽을까?" (Updated every day. What are you reading today?)
- *Illustrative:* "재미있는 만화를, 쉽게 결제해서, 편하게 보게 하자." (Let's make great comics easy to buy and comfortable to read.)

Classifying the parenthetical glosses on those three samples as editorial readings, rather than as additional official UI copy, is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

Recorded brand tagline from source §11, kept byte-for-byte: "솔직한 재미 대폭발" (honest fun explosion).

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

These decisions are unnamed values, not permissions to invent. Reading the list as a catalog of unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Lezhin-authored or a separately published UI specification.

- focus-visible visual treatments
- getdesign.md / refero — not checked (the source names both lookups as not found / not checked)
