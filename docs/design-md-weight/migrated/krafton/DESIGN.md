# KRAFTON Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

KRAFTON is a South Korean game publisher and developer whose first-party corporate site is at `https://www.krafton.com`. This contract covers that corporate site as the source inspected it on 2026-06-03: the homepage HTML at `https://www.krafton.com` plus the named theme CSS bundles (`style.css`, `component.css`, `header.css`, `footer.css`, `page.css`). The Brand Resource Center at `https://www.krafton.com/about/brandcenter/` and the English vision page at `https://www.krafton.com/en/about/vision/` are named brand sources for identity and philosophy; they do not supply the computed interface tokens below. Every value stays attached to the surface that established it. Reading those inspected homepage-and-CSS bytes as this contract's token surfaces, keeping values attached to the surface that established them, and treating the brandcenter and vision URLs as named sources that do not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

The source records a dark-mode-first canvas: the page body is assigned the class `Bg-black`, the footer background is `#000000`, and the cookie-consent overlay uses `#0a0a0a`. Token-set `tokens.colors.canvas`, `tokens.colors.primary`, and `tokens.colors.brand` all write `#000000`; they stay three keys. Token-set `tokens.colors.foreground` and `tokens.colors.on-primary` both write `#ffffff`; they stay two keys. Inner article/single pages use a white body background `#ffffff` — a §2 role the source names **Body Background**, not `tokens.colors.canvas`. A proprietary KRAFTON typeface, Zalando Sans Expanded, and Poppins work together at cinematic scale; Noto Sans / Noto Sans KR / Noto Sans SC cover Korean, Chinese, and Japanese body copy. Motion the source records: content tiles ascend `100px` with an opacity fade over `0.8 s` (`ease-out`); hero backgrounds reveal in a `0.4 s` parallax bloom with a `0.2 s` delay; a `5px` diagonal-skewed progress bar crowns the header on scroll; text-link hover extends a `2px` underline from left to right over `0.3 s`. Typography scales between breakpoints — a `140px` custom-font logotype on desktop collapses through responsive `vw` units. The class name, hex values, family names, durations, `140px` logotype, `2px` underline, and `5px` bar are the source's own. Keeping `tokens.colors.canvas`, `tokens.colors.primary`, and `tokens.colors.brand` as three keys, keeping `tokens.colors.foreground` and `tokens.colors.on-primary` as two keys, keeping the inner-page **Body Background** off `tokens.colors.canvas`, and the characterizations built on the recorded values — near-total blackness that is not merely decorative; each game property and studio card as a self-contained illuminated world against the void; the rare white inner-article surface feeling like daylight breaking through; purposeful cinematic motion; largeness maintained even on the same site's narrower breakpoints; underline restraint on a design that could otherwise feel aggressive — are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. KRAFTON was founded in **2007** as Bluehole Studio, a small Korean game development company whose first major title, TERA, established a reputation for ambitious massively multiplayer experiences. Over the following decade the studio portfolio grew into a holding structure; in **2018** the parent company renamed itself KRAFTON — a compound that emphasises the act of crafting — to reflect its role as a creator of original intellectual property rather than a portfolio of acquired products. The global moment arrived in **2017** with PUBG: Battlegrounds, which reached over 75 million copies sold and became a defining cultural touchstone for the battle-royale genre. KRAFTON went public on the Korea Stock Exchange in **2021**, deploying that capital into studios across North America, Europe, and India. The studio network now spans PUBG Studios, Bluehole Studio, Striking Distance Studios, Unknown Worlds, Neon Giant, and more than a dozen additional teams creating games ranging from survival-horror to life-simulation. The brand's governing philosophy is stated simply: "Pioneer the Undiscovered." This is not merely a tagline — it operationalises as five internal values: Aim for Bold Objectives, Depth Builds the Edge, Imagination + Technology, Fan-First Thinking, and Embrace Global Perspectives. Every product launch and communication is measured against whether it advances territory that has not been claimed before. The years 2007 / 2018 / 2017 / 2021, Bluehole Studio, TERA, the KRAFTON rename and crafting compound, PUBG: Battlegrounds and the 75 million copies figure, the Korea Stock Exchange listing, the North America / Europe / India studio deployment, the studio names, the five value names, "Pioneer the Undiscovered," and that closing measurement sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-portfolio narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not KRAFTON-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and classifying them as surface-or-control outcomes rather than fictional biographies, is a derived editorial implementation inference from the verified surfaces; it is not KRAFTON-authored or a separately published UI specification. Each names a surface or control the source records. They do not come from the source's persona section.

- Scan game and studio cards on the dark corporate homepage at `https://www.krafton.com`.
- Read article/single body copy on the inner white pages the source names.
- Use the recorded controls — Download button, Search input, ThirdDepthTab, language selector.
<!-- design-md:claim-end -->

### Audience

No named or demographic personas are invented. The source labels its named figures as illustrative, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records is the audience it names at a group level: fans — Fan-First Thinking, and the voice line "Fans are at the center." Dropping the illustrative biographies rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading that source-named group as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

- Dark-mode-first canvas: `Bg-black` body, footer `#000000`, cookie-consent `#0a0a0a`
- Three token-set keys that share `#000000` (`primary` / `brand` / `canvas`) and two that share `#ffffff` (`foreground` / `on-primary`)
- Four-family type: proprietary KRAFTON display, Zalando Sans Expanded headings, Poppins Latin UI, Noto Sans / KR / SC body
- `140px` hero logotype collapsing through `vw`; `70 px` PageHeader on light pages
- Sharp `0px` corners on interactive white-surface frames (`2px solid #000000`)
- Depth without `box-shadow`: dark-background bleed and self-lit imagery
- Recorded motion: `0.8 s` slide-up, `1.6 s` fade-in, `0.1 s` button invert, `0.2–0.3 s` underline, `0.4 s` / `0.2 s` parallax

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each. "Pioneer the Undiscovered" and the five value names are first-party brand lines the source attributes to KRAFTON; every *UI implication* below is the source's own editorial reading.

1. **Pioneer the Undiscovered** — seek problems no competitor has solved and genres no studio has fully defined. *UI implication:* Do not follow platform conventions blindly; introduce distinctive interaction patterns where the genre expects them least.
2. **Depth Builds the Edge** — deep research and meticulous groundwork underpin every creative decision. *UI implication:* Design systems must account for every state, edge case, and locale before shipping; shallow prototypes are not shippable artefacts.
3. **Imagination + Technology** — fuse creative vision with engineering capability. *UI implication:* Motion and micro-interaction must be intentional and technically precise, never decorative noise; every animated element should have a measurable purpose.
4. **Fan-First Thinking** — fans drive every decision from discovery to long-term retention. *UI implication:* Reduce friction on discovery surfaces (game listings, studio pages) so players can reach content within one or two interactions; information hierarchy privileges experience over brand-speak.
5. **Embrace Global Perspectives** — the brand operates across KR, EN, ZH, and JA locales simultaneously. *UI implication:* All typographic and layout decisions must degrade gracefully across character sets; reserve pixel-perfect vw scaling for Latin text and test all display scenarios in Korean first.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

- Use the KRAFTON custom font for hero-scale logotype moments at 140 px or above
- Set all major page backgrounds to `#000000`; reserve `#ffffff` for body-copy pages only
- Apply Poppins for all Latin navigation, buttons, and footer links
- Use Noto Sans KR/SC/JP for any East Asian body copy to honour the multi-locale character set
- Animate content entrance with a combined translateY(100px) → translateY(0) + opacity 0 → 1 over 0.8 s ease-out
- Use a 2px solid `#000000` border as the default frame for interactive white-surface components (search, download buttons)
- Scale typography proportionally using vw units between breakpoints to preserve the cinematic headline feeling

### Avoid

The source states these six as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

- Do not introduce drop-shadow on cards or containers — the brand achieves depth without shadows
- Do not use coloured CTAs; brand buttons are strictly black-on-white or white-on-black
- Do not mix the KRAFTON display font with body-weight copy — it is reserved for large-scale display only
- Do not break the max-width 1280px container with full-bleed section content without a dedicated full-bleed block pattern
- Do not use font-weight below 300 in navigation or body contexts
- Do not add border-radius to buttons or interactive controls — the brand uses sharp 0 px corners throughout

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping `tokens.colors.primary`, `tokens.colors.brand`, and `tokens.colors.canvas` as three keys that happen to share `#000000`, keeping `tokens.colors.foreground` and `tokens.colors.on-primary` as two keys that happen to share `#ffffff`, keeping the inner-page **Body Background** `#ffffff` off `tokens.colors.canvas`, keeping YAML lowercase hex beside the §2 uppercase spellings rather than choosing one as a replacement, treating the Alert Red alternate spelling as a §2 / §14 writing rather than a second YAML colors key, and attaching every role to the surface the source recorded rather than relabeling an observed corporate-site value as a house palette for every KRAFTON surface, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Black surfaces

- **Brand Black** (`#000000`): primary background (homepage, footer, header bar, mega-menu backdrop). Token-set path `tokens.colors.primary`. Also token-set `tokens.colors.brand` and `tokens.colors.canvas` — three keys, one hex.
- **Site Black** (`#0a0a0a`): cookie-consent bar background; near-black alternate. Token-set path `tokens.colors.surface`.
- **Dark Surface** (`#393939`): footer divider lines, dark-mode border, footer header background. Token-set path `tokens.colors.hairline`.

Light pages

- **Body Background** (`#ffffff`): inner page (article/single) background. A §2 role. It is not `tokens.colors.canvas`.
- **Body Text** (`#555555`): default body copy color. Token-set path `tokens.colors.body`.
- **Content Text** (`#222222`): rich-text body, table data. Token-set path `tokens.colors.content`.
- **White Text** (`#ffffff`): all text on black/dark surfaces including nav, footer copy. Token-set path `tokens.colors.foreground`. Also token-set `tokens.colors.on-primary` — two keys, one hex.

Mid and muted

- **Mid Gray** (`#777777`): secondary labels, nav hover (Bg-black context). Token-set path `tokens.colors.muted`. YAML writes `#777777`.
- **Muted Gray** (`#ADADAD`): input placeholder text. Token-set path `tokens.colors.placeholder`. YAML writes `#adadad`. Both writings stay.
- **Disabled Gray** (`#DDDDDD`): scrollbar track, disabled borders. Token-set path `tokens.colors.disabled`. YAML writes `#dddddd`. Both writings stay.

Accent

- **Alert Red** (`#ED2929`): required-field markers and error states (`#E84847` alternate). Token-set path `tokens.colors.error`. YAML writes `#ed2929`. Both writings stay. The `#E84847` alternate is a §2 / §14 spelling, not a second YAML colors key.
- **Link Blue** (`#3D7FD9`): inline hyperlink color in article content. Token-set path `tokens.colors.link`. YAML writes `#3d7fd9`. Both writings stay. Source §14 also uses this hex as `.text-blue` affirmation colour in forms and news status labels.

`tokens.colors.primary`, `tokens.colors.brand`, and `tokens.colors.canvas` all write `#000000`. They stay three keys. `tokens.colors.foreground` and `tokens.colors.on-primary` both write `#ffffff`. They stay two keys. The inner-page Body Background `#ffffff` stays off `tokens.colors.canvas`.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xs: 15` · `sm: 20` · `md: 40` · `base: 60` · `lg: 80` · `xl: 100` · `xxl: 140`.

The source restates the same range as bottom-margin utility classes that step in increments of 5–10 px from 15 px to 140 px. Desktop `.site-container` horizontal padding is `40px`. `tokens.spacing.md: 40` is a spacing step. It is not that container padding as a second key, and it is not the Download-button padding `8px 43px 8px 15px`. `tokens.spacing.xs: 15` is not the `15px` in that same button padding. `tokens.spacing.sm: 20` is not the Search padding `12px 20px`. `tokens.spacing.xxl: 140` is not the hero logotype `140`. Keeping those unitless spacing steps on their own keys rather than rewriting them as a grid, and keeping those writings of `15`, `20`, `40`, `60`, `80`, `100`, and `140` on their own records, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 0` · `md: 0` · `lg: 0` · `full: 9999`.

The source's named radius uses, kept on their own rows:

- Zero (`0` / `0px`): buttons and interactive controls — sharp corners throughout. Token-set keys `tokens.rounded.sm`, `tokens.rounded.md`, and `tokens.rounded.lg`. YAML `button-primary` / `input-search` also record `radius: "0px"`.
- Full (`9999`): token-set key `tokens.rounded.full: 9999`.

`tokens.rounded.sm: 0`, `tokens.rounded.md: 0`, and `tokens.rounded.lg: 0` stay three keys. `tokens.rounded.full: 9999` stays the unitless full step. It is not a type size, and it is not rewritten as a component radius the source did not attach. Keeping `0`, `0`, `0`, and `9999` as four keys is a derived editorial implementation inference from the verified surfaces; it is not KRAFTON-authored or a separately published UI specification.

### Elevation

KRAFTON does not use drop shadows for component elevation. Token-set path `tokens.shadow.none` with value `No box-shadow in brand CSS; depth via dark background bleed and self-lit imagery`. Depth is expressed through two mechanisms the source names: (1) dark background bleed — game and studio cards appear as self-lit images floating on the black void, creating apparent foreground/background separation without shadows; (2) the `SiteHeaderBar`, a 5px diagonal-skewed element at the top of the header viewport that changes from `#000` to `#fff` (on Bg-black pages) when the user scrolls (`is-View` state), creating a subtle kinetic highlight. The cookie-consent overlay uses `background-color: rgba(0,0,0,0.64)` to produce a scrim; popups use `rgba(0,0,0,0.5)`. No box-shadow declarations appear in the brand's own CSS files. The two mechanisms, the `none` token prose, the `5px` bar, the `is-View` colour change, and the two scrim values are the source's own. Reading that shadow-free bleed as apparent foreground/background separation, and reading the header bar as a kinetic highlight, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

### Motion

The source attributes its motion values to the same CSS bundles that supplied the tokens (`style.css` `.a-Opacity` / `.a-OpacityTop`, plus component and header transitions). The durations, named easings, and rules below are therefore recorded source values, not template cubic-bezier re-injections. Classifying that CSS-bundle attribution, keeping the named `ease-out` / `ease` keywords rather than substituting a curve, and holding the five-kind per-component promotion gate for any later exact-curve promotion, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

Durations, as the source table states them:

| Token | Value |
|---|---|
| Fade-in duration | 1.6 s |
| Slide-up duration | 0.8 s |
| Hover (button BG) | 0.1 s |
| Hover (underline / download link) | 0.2–0.3 s |
| Parallax appear | 0.4 s (delay 0.2 s) |
| Default easing | `ease-out` |
| Parallax easing | `ease` |

YAML `listItem-link.hover` writes `underline expands 0 to 100% 2px over 0.3s`. Source §4 writes Download-link `Transition: background-size 0.2s ease-out` and hover underline expanding to `100% 2px`. Source §1 writes text-link hover over `0.3 s`. All three writings stay. Neither was chosen as a replacement.

Source §4 also records Download-button `Transition: background-color 0.1s` on both default and hover. That `0.1 s` is this button's background transition. It is not a spacing step. Keeping the YAML `0.3s`, the §4 `0.2s ease-out`, and the §15 `0.2–0.3 s` writings on their own records rather than choosing one as a replacement, and reading that `0.1 s` as this button's background transition rather than as a spacing step, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

Rules, as the source states them:

- All on-scroll entrance animations use `ease-out` to communicate confident arrival
- Hover micro-interactions target 0.1–0.3 s to feel immediate without being abrupt
- No entrance animation should use `ease-in` (elements never struggle to appear)
- The progress bar in the header uses a skew transform with `transition-property:background-color; transition-duration:0.2s` — keep this as the only element using colour transition on header scroll
- Parallax video backgrounds use `animation-fill-mode:forwards` to hold the final opacity:1 state without a reversal

Signature motion the source names: `.a-Opacity` applies `opacity:0; transition:opacity 1.6s ease-out` until `.is-Opacity` is added; `.a-OpacityTop` applies `opacity:0; transform:translateY(100px); transition:transform, opacity 0.8s ease-out` with JS adding `.is-OpacityTop` to reveal on scroll. Hero backgrounds reveal in a `0.4 s` parallax bloom with a `0.2 s` delay.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate, and refusing a partial confirmation, is a derived editorial implementation inference from the verified surfaces; it is not KRAFTON-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The vision page records "Pioneer the Undiscovered" and the five values. It does not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not KRAFTON-authored or a separately published UI specification. |
| Live computed surface-use | The inspected homepage and CSS bundles declare four families: proprietary `KRAFTON` for the 140 px hero logotype, Zalando Sans Expanded for editorial headings, Poppins for Latin UI, and Noto Sans / Noto Sans KR / Noto Sans SC for East Asian body. |
| Official distributed asset | Source §3 records Zalando Sans Expanded as hosted via Google Fonts and self-hosted woff2 (weights 200–900). The proprietary KRAFTON face is used exclusively for the hero logotype (single weight, normal style). No reuse licence for the KRAFTON face is asserted here. |
| Declared / YAML family | YAML `tokens.typography.family.sans` writes `Poppins`. YAML `tokens.typography.family.mono` writes `SF Mono`. Both keys stay. `SF Mono` is a YAML family key; it is not rewritten as a type-role family. |
| Outside these captures | Typography beyond the inspected corporate-site homepage and CSS bundles stays outside this contract. |

Reading the vision page as official product-use context rather than a web family assignment, reading the missing KRAFTON-face licence as a licence boundary rather than permission to host the files, reading `SF Mono` as a YAML family key rather than a type-role face, and reading typography beyond the inspected corporate-site homepage and CSS bundles as outside this contract, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

### Family

- **Display logotype:** `KRAFTON` — proprietary display face, hero logotype only.
- **Editorial headings:** `Zalando Sans Expanded` — weights 200–900; vision tagline "PIONEER THE UNDISCOVERED" and core values use this face in a large, expanded treatment. Source §9 also writes `font-family:"Zalando Sans Expanded", sans-serif` at 600–800 weight for display headings. Both writings stay.
- **Latin UI:** `Poppins` — Token-set path `tokens.typography.family.sans`. Weights 400/500/700. Navigation, download buttons, footer links, and language selectors. Source §9 writes Poppins at 500 for nav links and buttons; YAML `tokens.typography.nav` writes weight 600. Both writings stay.
- **East Asian body:** `Noto Sans` / `Noto Sans KR` / `Noto Sans SC` — weights 300/400/500/700. Source §7 also names Noto Sans JP. Both writings stay.
- **YAML mono:** `SF Mono` — Token-set path `tokens.typography.family.mono`.

Do not replace the KRAFTON display face, Zalando Sans Expanded, Poppins, or the Noto families with a system substitute, and do not present `SF Mono` as those faces. That fallback prohibition, and keeping the §9 Zalando 600–800 / Poppins 500 writings beside the YAML nav weight 600 and the §7 Noto Sans JP writing beside the Noto KR/SC row, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). `1.9` is not rewritten as a fixed px. `1.7` is not rewritten as a fixed px. Token-set `use` strings are kept verbatim; where source §3 notes are longer, both writings are kept. Keeping YAML line heights as unitless ratios, keeping the YAML singles and the §3 px / colour / em spellings on separate readings, attaching surfaces from the YAML claim anchors, keeping hero `140` off `tokens.spacing.xxl: 140`, and keeping article `16` as a type size rather than a spacing step, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use | §3 notes |
|---|---|---:|---:|---:|---|---|
| Hero logotype | KRAFTON | 140 | 400 | | Hero logotype, KRAFTON custom font, display only | 140 px, font-family "KRAFTON" |
| PageHeader title | | 70 | 700 | | PageHeader title on light pages | 70 px bold, color `#000` (light pages) |
| Article/single body | | 16 | 400 | 1.9 | Article/single body copy | 16 px / 1.9, H1 1.30em, H2 1.24em, H3 1.18em |
| Navigation | Poppins | 18 | 600 | | Navigation, Poppins | default 18 px on hamburger button, weight 600 |
| Base body | | 14 | 400 | 1.7 | Base body text | 14 px / 1.7 line-height, `#555555`, weight 400, word-break: keep-all |
| Language selector | Poppins | 13 | 400 | | Language selector links | Poppins 13 px, color `#A2A2A2` |
| Footer copyright | Poppins | 12 | 400 | | Footer copyright, Poppins | Poppins 12 px, `rgba(255,255,255,0.4)` |

Token-set `tokens.typography.hero-logotype.size` is `140`. Token-set `tokens.typography.page-header.size` is `70`. Token-set `tokens.typography.article-body.size` is `16`. Token-set `tokens.typography.nav.size` is `18`. Token-set `tokens.typography.body.size` is `14`. Token-set `tokens.typography.selector.size` is `13`. Token-set `tokens.typography.footer.size` is `12`. Hero `140` is a type size. It is not `tokens.spacing.xxl: 140`. Article `16` is a type size. It is not a spacing step.

Source §3 also writes those sizes as 140 px / 70 px / 16 px / 18 px / 14 px / 13 px / 12 px. Those px spellings stay beside the unitless YAML sizes. Neither writing was chosen as a replacement.

Source §8 records the heading-size column of the breakpoint table as 70 px / 5.38 vw / 5.08 vw / 10.38 vw, and writes that the 140 px hero becomes `~16.77 vw` on mobile (`≈108 px` on a `375 px` screen). Those figures stay on Layout. They are not rewritten as replacements for the type-role sizes.

### Assets

The catalog identity records `logo.type: favicon` and `logo.slug: https://www.google.com/s2/favicons?domain=krafton.com&sz=256`. That is a third-party favicon proxy URL held as catalog identity metadata; it is not a first-party distributed KRAFTON brand asset, and it is not promoted to one here. Game and studio imagery on the corporate homepage is first-party content; it is not replaced with invented brand-color decoration. Source §9 records that if generating game cards, place imagery on `#000` with no visible frame — let the image be the only light source. Classifying the Google s2 slug as an identity pointer rather than a hosted brand file, and not replacing first-party game imagery with invented brand-color decoration, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

- **Empty:** Cards render as black-background placeholders with no content message; absence of game image signals "coming soon" implicitly through a darkened aspect-ratio box
- **Loading (image):** `img[data-src]` elements carry `opacity:0` until the browser resolves `src`, at which point `opacity:1` transitions via CSS
- **Error (form):** Required fields highlighted with `color:#ED2929` on label; no border-color change observed in source CSS
- **Error (link/status):** Alert-red `#E84847` / `#ED2929` applied as `.text-red` utility to error messaging in body copy contexts
- **Success:** Positive states use `color:#3D7FD9` (`.text-blue`) as affirmation colour in forms and news status labels
- **Skeleton / Appear:** `.a-Opacity` applies `opacity:0; transition:opacity 1.6s ease-out` until `.is-Opacity` is added; `.a-OpacityTop` applies `opacity:0; transform:translateY(100px); transition:transform, opacity 0.8s ease-out` with JS adding `.is-OpacityTop` to reveal on scroll
- **Disabled:** `.is-Disable` applies `opacity:0.3` with `cursor:default` on anchor children and removes TextHoverLine underline animations
- **Active Tab:** `background-color:#000000; color:#ffffff; font-weight:bold` on `.ThirdDepthTab-item.is-Current .ThirdDepthTab-link`

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination navigation item, a tab that only selects a destination, or a destination link that commits no operation in place — and the reason given is always that semantic one. A `Primitive type` line is attached only when the source YAML records that type on that component. Generic `Focus` capture is not treated as a `focus-visible` treatment. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Download Button

- Role: Download button on white surface
- Primitive type: `button` · Kind: interactive
- Domain: white-surface pages on the inspected corporate site
- Background: `#ffffff`
- Text: `#000000`
- Border: 2px solid `#000000`
- Padding: 8px 43px 8px 15px
- Font: 14px / 700
- Radius: 0px
- Hover (Inverted): Background `#000000`; Text `#ffffff`; Border 2px solid `#000000`; Transition: background-color 0.1s
- Default Transition: background-color 0.1s
- Token-set type: `tokens.components.button-primary.type` `button`
- Token-set bg: `tokens.components.button-primary.bg` `#ffffff`
- Token-set fg: `tokens.components.button-primary.fg` `#000000`
- Token-set border: `tokens.components.button-primary.border` `2px solid #000000`
- Token-set padding: `tokens.components.button-primary.padding` `8px 43px 8px 15px`
- Token-set font: `tokens.components.button-primary.font` `14px / 700`
- Token-set radius: `tokens.components.button-primary.radius` `0px`
- Token-set hover: `tokens.components.button-primary.hover` `bg #000000 fg #ffffff (inverted)`
- Token-set use: `Download button on white surface`
- The `8px` / `43px` / `15px` in the padding are this button's padding. They are not `tokens.spacing.xs: 15`. The `14px / 700` font is this control's font; it is not only the Base body type-role row. The `0.1s` background transition is this button's hover duration. Reading those figures as this button's geometry rather than as those YAML spacing steps or a shared type-role row is a derived editorial implementation inference from the verified surfaces; it is not KRAFTON-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Captured inverted treatment above |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; the surface contract records `.is-Disable`; visual treatment omitted on this token-set record |
| loading | applicable | A Download button commits a download; the surface contract records image-loading opacity, not this control's in-progress treatment |
| error | applicable | A Download button that commits a file request; the surface contract records form and link-status error colour, not this control's error treatment |
| success | applicable | Same commit role; the surface contract records `.text-blue` affirmation, not this control's success treatment |

### Search Input

- Role: Search input, placeholder `#adadad`
- Primitive type: `input` · Kind: interactive
- Domain: inspected corporate site
- Background: `#ffffff`
- Text: `#222222`
- Border: 2px solid `#000000`
- Height: 46px
- Padding: 12px 20px
- Font: 15px / 500
- Radius: 0px
- Placeholder: Text `#ADADAD`; Font 15px / 500
- Token-set type: `tokens.components.input-search.type` `input`
- Token-set bg: `tokens.components.input-search.bg` `#ffffff`
- Token-set fg: `tokens.components.input-search.fg` `#222222`
- Token-set border: `tokens.components.input-search.border` `2px solid #000000`
- Token-set height: `tokens.components.input-search.height` `46px`
- Token-set padding: `tokens.components.input-search.padding` `12px 20px`
- Token-set font: `tokens.components.input-search.font` `15px / 500`
- Token-set radius: `tokens.components.input-search.radius` `0px`
- Token-set use: `Search input, placeholder #adadad`
- The `20px` in the padding is this input's padding. It is not `tokens.spacing.sm: 20`. The `15px / 500` font is this control's font. YAML placeholder hex is `#adadad`; §4 Placeholder writes `#ADADAD`. Both writings stay. Reading those figures as this input's geometry rather than as those YAML spacing steps is a derived editorial implementation inference from the verified surfaces; it is not KRAFTON-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | not-applicable | This control is a value field; it does not commit an operation whose in-progress state it could report |
| error | applicable | Form field; the surface contract highlights required-field labels with `#ED2929`; visual treatment on this token-set record omitted beyond that system colour |
| success | not-applicable | A search value field does not report a completed operation on itself |

### Tab Navigation (ThirdDepthTab)

- Role: ThirdDepthTab navigation
- Primitive type: `tab` · Kind: interactive
- Domain: inspected corporate site
- Default Background: `#f7f7f7`
- Default Text: `#000000`
- Default Font: 19px / 500
- Height: 2.4em
- Active: Background `#000000`; Text `#ffffff`; Font 19px / 700
- Token-set type: `tokens.components.tab-third.type` `tab`
- Token-set bg: `tokens.components.tab-third.bg` `#f7f7f7`
- Token-set fg: `tokens.components.tab-third.fg` `#000000`
- Token-set font: `tokens.components.tab-third.font` `19px / 500`
- Token-set height: `tokens.components.tab-third.height` `2.4em`
- Token-set active: `tokens.components.tab-third.active` `bg #000000 fg #ffffff 19px/700`
- Token-set use: `ThirdDepthTab navigation`
- `#f7f7f7` is this tab's default background. It is not a YAML colors key. Source §8 records that ThirdDepthTab collapses into an accordion on the same site's `≤ 767 px` range. Reading the `2.4em` height and the `#f7f7f7` fill as this tab's geometry rather than as a spacing step or a colors key, and keeping the accordion collapse on Layout, is a derived editorial implementation inference from the verified surfaces; it is not KRAFTON-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above; active is the recorded variant |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination tab whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control selects a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A tab that only selects a destination does not report a failed request on itself |
| success | not-applicable | Same role reason: selecting a destination is not an operation this tab reports as success |

### Download Link

- Role: Download link, text + animated underline
- Primitive type: `listItem` · Kind: interactive
- Domain: inspected corporate site
- Text: `#222222`
- Font: 15px / 500
- Underline default: linear-gradient(`#000000`,`#000000`) 0 2px, width 0
- Transition: background-size 0.2s ease-out
- Hover: Underline expands to 100% 2px
- Token-set type: `tokens.components.listItem-link.type` `listItem`
- Token-set fg: `tokens.components.listItem-link.fg` `#222222`
- Token-set font: `tokens.components.listItem-link.font` `15px / 500`
- Token-set hover: `tokens.components.listItem-link.hover` `underline expands 0 to 100% 2px over 0.3s`
- Token-set use: `Download link, text + animated underline`
- YAML hover duration is `0.3s`. §4 transition is `0.2s ease-out`. §15 writes `0.2–0.3 s`. All three writings stay. Reading the `15px / 500` font and the `2px` underline as this link's geometry rather than as a type-role row or a spacing step, and keeping the YAML `0.3s`, the §4 `0.2s ease-out`, and the §15 `0.2–0.3 s` writings on their own records rather than choosing one as a replacement, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Captured underline expansion above |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract records `.is-Disable` on anchors and removes TextHoverLine; visual treatment omitted on this token-set record |
| loading | not-applicable | This control is a destination link; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A destination link does not report a failed request on itself |
| success | not-applicable | Same role reason: reaching the destination is not an operation this link reports as success |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The site uses a max-width 1280px centered container with 40px horizontal padding on desktop (`.site-container`). The header container uses proportional `4.11458vw` gutters to stay edge-aligned. At breakpoints 1300–1025 px the container shifts to `98.461vw` max-width, at 1024–768 px it becomes full-width with `2.607vw` padding, and below 767 px padding expands to `4.25vw–6.25vw`. Source §8 writes the same four ranges as a table with heading-size and slightly rounded vw spellings. Both writings stay.

| Range | Container max-width | H. padding | Heading size |
|---|---|---|---|
| ≥ 1301 px | 1280 px | 40 px | 70 px |
| 1025–1300 px | 98.46 vw | 3.48 vw | 5.38 vw |
| 768–1024 px | 100% | 2.61 vw | 5.08 vw |
| ≤ 767 px | 100% | 4.25–6.25 vw | 10.38 vw |

The homepage body (`Bg-black`) has `overflow:hidden` to contain parallax video backgrounds. Inner pages receive `padding-top: 220px` to clear the sticky header. Mega-menu columns use a `table`/`table-cell` layout pattern consistent with a pre-flex-era codebase. Bottom-margin utility classes step in increments of 5–10 px from 15 px to 140 px, providing the spacing rhythm.

The hamburger menu (`SiteHeaderMapButton`) is hidden at ≥1025 px with `opacity:0; visibility:hidden`. The mega-menu transforms from horizontal columns to full-screen mobile panels. Typography vw scaling means the 140 px hero becomes ~16.77 vw on mobile (≈108 px on 375 px screen). Video hero panels (`KeyVisualVideoBox`) use an `opacity:0.6` black overlay (`#000`) that persists across all breakpoints. ThirdDepthTab collapses into an accordion on mobile.

`tokens.spacing.md: 40` is not the desktop container `40 px` as a second key. `70 px` in the heading-size column is the PageHeader type-role size restated at this breakpoint, not a new type token. Reading the four ranges, the `vw` gutters, the `220px` inner-page offset, the hamburger hide, the accordion collapse, and the `16.77 vw` / `108 px` / `375 px` hero restatement as recorded measurements of this corporate site rather than as a specification invented on top of them, is a derived editorial implementation inference from the verified surfaces; it is not KRAFTON-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source records voice adjectives: pioneering, cinematic, direct. The vision line is "Pioneer the Undiscovered." Values use present tense: "Fans are at the center." The brand operates across KR, EN, ZH, and JA locales simultaneously; Noto Sans KR/SC/JP cover East Asian body copy, and `word-break: keep-all` is recorded on base body. Calling that register pioneering / cinematic / direct, and refusing to treat the vision line as a complete product-microcopy guide, are derived editorial implementation inferences from the verified surfaces; they are not KRAFTON-authored or a separately published UI specification.

| Do | Don't |
|---|---|
| Speak in ambitious imperatives: "Pioneer the Undiscovered." | Soften with hedges: "We try to push boundaries." |
| Lead with the vision, then back with craft detail. | Over-explain the technology before the emotional promise. |
| Use present tense for values: "Fans are at the center." | Use passive constructions: "Fans are being considered." |
| Short sentences that land hard. | Long compound sentences that dilute impact. |

Voice samples (illustrative):

- *Illustrative:* "We pioneer the path to players' dreams. With bold imagination and breakthrough technology, we create unforgettable worlds for fans across the globe."
- *Illustrative:* "PIONEER THE UNDISCOVERED — our vision is not a destination. It is the act of moving into uncharted territory and making it a world worth living in."
- *Illustrative:* "Deep thinking and meticulous groundwork fuel our success. We don't rush into the undiscovered; we prepare to own it."

Published page name, kept as a string rather than as a biography: "Our Challenges".

Classifying those three lines as illustrative samples rather than official UI copy, and keeping "Our Challenges" as a published page name rather than as a biography or a primary task, is a derived editorial implementation inference from the verified surfaces; it is not KRAFTON-authored or a separately published UI specification. The source already marks the three lines as illustrative.

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

These decisions are unnamed values, not permissions to invent. Reading the list as a catalog of unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not KRAFTON-authored or a separately published UI specification.

- getdesign.md / refero records for KRAFTON
