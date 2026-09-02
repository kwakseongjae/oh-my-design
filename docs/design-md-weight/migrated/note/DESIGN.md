# note Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

note (note.com) is Japan's leading creator publishing platform — a place where individuals write essays, sell digital content, and build audiences without the noise of a conventional social feed. Operated by note, Inc. Catalog homepage identity is `https://note.com`. YAML `tokens.source` is `prose-derived`. Catalog `primary_color` `#41C9B4` is the same teal as `tokens.colors.brand` `#41c9b4`; they stay two writings, not a second teal. This contract covers the first-party public surfaces and named brand sources the source inspected on 2026-05-19: the live `note.com` homepage (page title `note ――つくる、つながる、とどける。`), note brand/help resources (`help.note.com` brand guideline, `anoiro.com/themes/note`, `brandcolor.info/note`), and the official designer article at `note.com/note_dsn` titled `コンテンツにより集中できるデザインに。noteのプライマリーカラーが黒色になるまで`. Every value stays attached to the surface or source note that established it. A brand/help color resource and the designer article on the black-primary shift are not a stand-in for inferred §4 control geometry. Reading those inspected URLs as this contract's surfaces, keeping catalog `primary_color` `#41C9B4` beside `tokens.colors.brand` `#41c9b4` rather than as a second teal, keeping every value attached to the surface or source note that established it, and keeping brand/help color resources and the designer article from rewriting inferred §4 control geometry, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

Its design philosophy is summarized in three words on its own homepage: **つくる、つながる、とどける** ("create, connect, deliver"). Everything in the interface bends toward one goal: **getting out of the writer's and reader's way so the words can do the work.** note is, at its core, a reading-and-writing space. The brand color is a distinctive **teal-green** — `#41C9B4` / `#41c9b4` is the logo color, with `#2CB696` / `#2cb696` as the working theme color and `#228D74` / `#228d74` as a darker variant. This blue-leaning green is unusual and memorable in a sea of social-platform blues; note describes it as combining the calm, natural feeling of green with the sincerity of blue. But here's the crucial nuance: note deliberately **does not** flood its product chrome with the teal. Over the platform's evolution, note shifted its *primary action* color toward **black** so that nothing competes with the content — the teal became a brand-identity accent (logo, brand moments) while the working UI runs on near-black, white, and a soft off-white background (`#F7F9F9` / `#f7f9f9`) with near-black text (`#222222`). Typography is content-forward and clean, prioritizing legible Japanese long-form reading over decorative display. Soft rounded corners, generous whitespace, a restrained palette, and the disciplined choice to let black (not teal) carry the working UI all reinforce a single message: the content is the point, and note is the quiet, trustworthy frame around it. The hex values, the three-word thesis, the designer-article black-primary shift, the "calm + sincere" description the source attributes to note, the unusual-and-memorable teal sentence, the product-chrome constraint, the typography-priority sentence, and the content-is-the-point close are the source's own. The characterizations built on them — a quiet, generous, content-first reading-and-writing space; premium paper; warm-white pages and crisp black type; a recognizable teal mark that signals "this is note" without shouting; calm, sincere, and writerly; positioned against dopamine-feed mechanics; a place to *settle in* and read or write something substantial — are a derived editorial implementation inference from the verified surfaces; they are not note-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. note (operated by note, Inc.) was built as a deliberate alternative to the engagement-driven social web: a place where individual creators — writers, illustrators, musicians, photographers — could publish substantial work, build a direct relationship with readers, and even sell their content, *without* the dopamine mechanics, algorithmic noise, and vanity-metric pressure of conventional social media. Its three-word thesis, **つくる、つながる、とどける** (create, connect, deliver), captures the full loop: a creator *makes* something, *connects* with an audience, and *delivers* it directly to the people who want it. The design language is the visible expression of that anti-feed stance. **One**, *content must lead* — which is why note made the unusual, disciplined choice to shift its primary-action color to **black**, so that no UI element (not even its own teal) competes with the writing. **Two**, the surface should feel like *premium paper* — hence the soft off-white `#F7F9F9` background, near-black `#222222` text, generous whitespace, and a centered reading column that gives long-form Japanese room to breathe. **Three**, the brand should be *calm and sincere*, not loud — hence the distinctive teal (`#41C9B4`), a blue-leaning green chosen to feel natural and trustworthy rather than the aggressive blue of conventional social platforms, used as a recognizable mark rather than a wash. What note refuses: the endless-scroll engagement loop, the trending-now FOMO, the vanity-metric arms race, and any design that treats a piece of writing as content to be optimized rather than work to be respected. note chooses the dignity of the page — and builds its entire visual language to protect it. The operator name, the creator list, the three-word thesis and full-loop sentence, the three numbered design-language points including the black-primary shift, the refuse list, and that closing dignity-of-the-page sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that anti-feed narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a YAML `use` string or surface the source records, is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification. They do not come from the source's Personas section.

- Write in the distraction-free long-form editor (YAML `editor-canvas` use: `Distraction-free long-form editor`).
- Publish, follow, or post from the primary action (YAML `button-primary` use: `Primary action (Publish / フォロー / 投稿)`).
- Scan article previews on the off-white canvas (YAML `article-card` use: `Article preview on off-white canvas`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its entries fictional archetypes informed by note's publicly-described user base (Japanese creators and readers — writers, illustrators, makers), not real individuals, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: individual creators — writers, illustrators, musicians, photographers; Japanese creators and readers — writers, illustrators, makers. Dropping the fictional biographies rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not note-authored or a separately published UI specification.

- Teal-green brand color — logo `#41C9B4` / `#41c9b4`, theme `#2CB696` / `#2cb696`, dark `#228D74` / `#228d74` (calm green + sincere blue)
- Black as the product primary (`#000000`) — note shifted its primary-action color to black so nothing competes with content (teal = brand accent, not the working UI fill)
- Soft off-white background `#F7F9F9` / `#f7f9f9` with near-black text `#222222` — premium-paper reading feel
- Content-first, writerly, calm — positioned *against* dopamine-feed social mechanics
- Generous whitespace and clean long-form Japanese typography — built to *settle in and read*
- Soft rounded corners (`tokens.rounded` `sm` / `md` / `lg` each `8`, plus `full: 9999`) and a restrained palette — quiet, trustworthy frame around the content
- The teal mark signals "this is note" without dominating the interface
- Reading-and-writing space: discovery is editorial/curated, not endless-scroll engagement-bait
- Homepage thesis **つくる、つながる、とどける**

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not note-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Content leads; the UI recedes.** A reading-and-writing platform succeeds when the words dominate. *UI implication:* Primary actions are black, not brand-teal; chrome is minimal; whitespace frames the content. Nothing competes with the writing.
2. **The page feels like premium paper.** Reading long-form Japanese should be comfortable and dignified. *UI implication:* Off-white `#F7F9F9` background, near-black `#222222` text, generous line-height, a width-capped reading column. Never stark, never cramped.
3. **The teal is identity, not decoration.** note's blue-green is a recognizable brand mark. *UI implication:* Use `#41C9B4` / `#2CB696` for the logo, links, and brand moments — sparingly. Don't scatter it across the working UI; that would re-introduce the noise the brand rejects.
4. **Anti-feed by design.** note is positioned against dopamine-driven social mechanics. *UI implication:* No FOMO, no vanity-metric arms race, no engagement-bait patterns. Discovery is editorial/curated; "スキ" is gentle appreciation, not a competition.
5. **Respect the creator.** Everyone on note is a maker. *UI implication:* The editor is distraction-free and encouraging; publishing is dignified; copy treats writing as work to respect, not content to optimize.

### Application rules

The source states these as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not note-authored or a separately published UI specification.

- Let content lead — use **black** for the primary action so nothing competes with the writing
- Use the off-white `#F7F9F9` reading background
- Reserve the teal (`#41C9B4` logo / `#2CB696` theme) for the brand mark, links, and brand moments
- Prioritize generous whitespace and a comfortable reading column
- Use near-black `#222222` text for comfortable long-form reading
- Keep chrome minimal in the editor and reading views
- Use soft rounded corners

Source §9 also records this reading-view constraint, kept as written: Use the teal `#2CB696` only for inline links in the reading view. Keeping that §9 sentence beside the Do list, rather than folding it into the Do list as if §7 had written it, is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.

### Avoid

The source states these as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not note-authored or a separately published UI specification.

- Don't flood the UI with teal; the teal is a brand accent, not the working fill
- Don't use stark pure white for long-form pages — the soft off-white is the premium-paper feel
- Don't scatter teal across every control
- Don't pack the page like an engagement feed — note is a place to settle in
- Don't use low-contrast body text
- Don't add feed-style dopamine mechanics — note is positioned against that
- Don't use sharp utilitarian corners — note feels warm and writerly

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. YAML writes lowercase hex; source §2 spells several of the same roles in mixed case; both forms stay on the row. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping catalog `primary_color` `#41C9B4` beside `tokens.colors.brand` `#41c9b4`, keeping `tokens.colors.primary` `#000000` off `tokens.colors.brand`, keeping `tokens.colors.canvas` `#f7f9f9` / `#F7F9F9` off `tokens.colors.surface` `#ffffff` / `#FFFFFF` and off `tokens.colors.on-primary` `#ffffff`, keeping `tokens.colors.text` `#222222` off product-primary black `#000000`, attaching every role to the surface the source recorded, and keeping note pro's per-publication theme as a default-identity note rather than a hard-locked single accent, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification. The hex values and recorded uses are the source's own. The source records that note's color system is published in its brand/help resources.

- **note Teal (Logo)** (`#41c9b4` / `#41C9B4`): The logo color and primary brand identity. A blue-leaning green — calm + sincere. Used for the brand mark and brand moments. Token-set path `tokens.colors.brand`. Catalog `primary_color` `#41C9B4` is the same teal on a second writing.
- **note Theme** (`#2cb696` / `#2CB696`): The working theme/accent teal — slightly deeper, used for accents, links, selected/brand states. Token-set path `tokens.colors.theme`.
- **note Theme Dark** (`#228d74` / `#228D74`): Darker teal for hover/pressed/emphasis on the theme color. Token-set path `tokens.colors.theme-dark`. This writing stays on the theme-color role. It is not copied onto a component `hover` row as `focus-visible` or hover treatment. Keeping this writing on the theme-color role rather than copying it onto a component `hover` row as `focus-visible` or hover treatment is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.
- **Black / Product primary** (`#000000`): The product's primary-action color. note deliberately uses black (not teal) for primary buttons and key UI so content stays dominant. Teal is reserved as brand accent. Token-set path `tokens.colors.primary`.
- **Off-White Background** (`#f7f9f9` / `#F7F9F9`): The page background — a soft, slightly cool off-white; premium-paper reading surface, never pure stark white. Token-set path `tokens.colors.canvas`.
- **White** (`#ffffff` / `#FFFFFF`): Card / content surfaces, editor canvas. Token-set path `tokens.colors.surface`. Same hex as `tokens.colors.on-primary`; it stays a second key.
- **On-primary** (`#ffffff` / `#FFFFFF`): Text on the black primary action. Token-set path `tokens.colors.on-primary`. Same hex as `tokens.colors.surface`; it stays a second key.
- **Near-Black Text** (`#222222`): Primary text — article body, titles, UI labels. Warm-black for comfortable long-form reading. Token-set path `tokens.colors.text`. This is not product-primary black `#000000`.

**Secondary / Muted:** mid-grays for metadata, timestamps, captions (kept low-contrast so body text leads). No hex is recorded; none is invented.

The teal family doubles as the **per-publication theme color** — note pro lets organizations set their own theme color, so teal is the default brand identity rather than a hard-locked single accent.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them: `tokens.spacing.sm: 8` · `tokens.spacing.base: 16`.

The source also writes generous whitespace, a centered reading column with generous margins, and "generous line-height" for long-form Japanese. `tokens.spacing` `8` is not `tokens.rounded` `sm` / `md` / `lg` `8` as a replacement, and is not a converted `8px` gutter. `tokens.spacing` `base` `16` is not a converted reading-column width. Keeping those unitless steps on their own path rather than rewriting them as a grid, and keeping them unmerged from matching radius keys, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `tokens.rounded.sm: 8` · `tokens.rounded.md: 8` · `tokens.rounded.lg: 8` · `tokens.rounded.full: 9999`.

- Small (`8`): YAML step `tokens.rounded.sm`. Same numeral as `md` and `lg`; it stays its own key.
- Medium (`8`): YAML step `tokens.rounded.md`. Same numeral as `sm` and `lg`; it stays its own key.
- Large (`8`): YAML step `tokens.rounded.lg`. Same numeral as `sm` and `md`; it stays its own key.
- Full (`9999`): YAML step `tokens.rounded.full: 9999`. It is not a replacement for `8`.

Source §4 writes Primary radius as soft rounded (pill or `8px`+). YAML component radius `8` on `button-primary` / `button-secondary` / `button-theme` / `article-card` / `text-field` is a separate writing. YAML `editor-canvas` records no radius. Neither the pill wording nor `full: 9999` was chosen over the other as a replacement. Keeping `sm` / `md` / `lg` as three keys that share `8`, keeping `full: 9999` off those keys, keeping body `8px`+ / pill off the YAML map as a second writing, and keeping `editor-canvas` off a radius step, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

### Elevation

YAML `tokens.shadow.none`: `none`. note reads **flat and paper-like**. Depth comes from the off-white-vs-white surface contrast and soft rounded corners, not from heavy shadows. The aesthetic is print/editorial, not material-elevated.

- Cards: minimal/no shadow; `#F7F9F9` page vs `#FFFFFF` card separates them
- Dropdowns / modals: light shadow + scrim
- The reading surface stays calm — no dramatic elevation that would pull focus from text

Reading that stack as paper-like depth rather than a numeric lift scale, keeping YAML `none` as the recorded shadow token, and refusing to invent a numeric shadow for dropdowns/modals, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification. No numeric shadow token is promoted.

### Motion

note's motion is **gentle, unhurried, and reading-respecting** — it supports a calm experience and never feels like attention-grabbing feed animation. Treating the duration table and easing names as source-stated rather than computed CSS, and treating duration-values-illustrative as the source HTML-comment class, is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle commits, selection |
| `motion-fast` | 150ms | Button hover/press, スキ tap |
| `motion-standard` | 250ms | Card reveal, dropdown, image fade-in |
| `motion-modal` | 300ms | Modal/dialog enter-exit |

Source-stated easing names (uncomputed cubic-bezier omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-standard` example) | The default |
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-enter` example) | Things arriving (cards, modals) |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Dismissals |
| `ease-soft` | omitted (unattributed cubic-bezier; source-stated name only; **Reserved** — a small soft overshoot for the スキ (like) reaction only) | **Reserved** — a small soft overshoot for the スキ (like) reaction only |

**Spring stance.** A single, restrained soft overshoot is permitted on the スキ reaction (the warm, human moment of appreciating someone's work). Everywhere else motion stays calm and standard — no kinetic flourish that would distract from reading. note is unhurried by design. Treating that spring-stance paragraph as source-stated register rather than a separately published note motion specification is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.

**Signature motions** (source-stated):

1. **Article image fade-in.** Images in the reading column fade in `opacity 0→1` over `motion-standard / ease-standard` as they load — calm, no slide.
2. **スキ (like) tap.** The teal heart/like scales `1.0 → 1.12 → 1.0` over `motion-standard / ease-soft` — the one warm overshoot, fitting an appreciation gesture.
3. **Card/feed reveal.** Discovery cards fade in over `motion-standard / ease-standard`; no aggressive slide-in that would read as a refreshing feed.
4. **Modal enter.** Scrim fades in; dialog appears with opacity + slight translate over `motion-modal / ease-enter`. Calm and dignified.

Treating those signature-motion characterizations — calm-no-slide, the-one-warm-overshoot-fitting-an-appreciation-gesture, no-aggressive-slide-in, and Calm-and-dignified — as a derived editorial implementation inference from the verified surfaces; they are not note-authored or a separately published UI specification.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` collapse to `motion-instant`; the スキ overshoot flattens to a simple fill; image and card fade-ins become immediate. The reading experience never depends on motion. Treating that reduced-motion line as source-stated register rather than a computed reduced-motion implementation is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.

Exact cubic-bezier curves are unattributed and remain omitted rather than promoted. The source HTML comment records motion tokens in §15 as duration values illustrative. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists. Naming those five evidence kinds as the promotion gate for a further curve, refusing a partial confirmation, keeping the four duration rows and four easing names, and treating duration-values-illustrative as the source HTML-comment class, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The designer article at `note.com/note_dsn` confirms the black-primary shift so content leads; it does not publish a universal current typography token. Brand/help resources publish color, not a type specimen. |
| Live computed surface-use | The source records a representative JP-first chain, not a live FontFace count. |
| YAML family keys | `tokens.typography.family.sans`: `Hiragino Kaku Gothic ProN`. `tokens.typography.family.mono`: `Hiragino Kaku Gothic ProN`. The mono key is Hiragino Kaku Gothic ProN on a second YAML path; it is not a monospace specimen. |
| Recorded stack | `-apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", Meiryo, sans-serif` |
| Official distributed asset | No note-exclusive distributed type family was verified. |
| Declared-only / representative | Font stack is a representative JP-first chain (source HTML comment). |
| License | This record does not establish a note font-license notice. The stack members are platform/system faces, not a note brand asset. |

Reading those evidence-class rows as the source's resolution table rather than as a published note type specimen, keeping sans and mono as two YAML keys that share Hiragino Kaku Gothic ProN, recording that no note-exclusive distributed type family was verified, reading the stack as a representative JP-first chain rather than a loaded webfont proof, and recording that this packet does not establish a note font-license notice, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

### Family

- **YAML sans path:** `Hiragino Kaku Gothic ProN` — Token-set path `tokens.typography.family.sans`.
- **YAML mono path:** `Hiragino Kaku Gothic ProN` — Token-set path `tokens.typography.family.mono`.
- **Recorded stack:** `-apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", Meiryo, sans-serif`

Source §3 Font Stack: note prioritizes clean, legible Japanese long-form rendering using a system/web font chain (Hiragino / Noto-class Japanese fonts with platform fallbacks). The editorial priority is reading comfort for substantial text, not decorative display type. Do not present `-apple-system`, `BlinkMacSystemFont`, `Hiragino Sans`, `Noto Sans JP`, or `Meiryo` as a replacement for the YAML family. Always carry the Japanese-native font chain; the platform is Japanese-first long-form text. Keeping the §3 Font Stack classification on Family rather than replacing it with the HTML-comment short form recorded in Font evidence, and that fallback-and-chain reading, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

### Type roles

YAML records weight and `use` only. No YAML size or line-height ratio is present; none is invented. Source §3 writes a content-forward scale: comfortable article body size with generous line-height for long-form Japanese reading; restrained, clear heading tiers. Hierarchy from size + weight + whitespace — not from loud color. Body weight regular; titles/headings bolder. Reading comfort beats display drama. Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim, keeping unitless YAML weights as recorded, and omitting size and line-height at this boundary rather than converting "generous line-height" into a px or unitless ratio, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

| Role | Family | Size | Weight | Line height | Token-set use |
|---|---|---|---:|---|---|
| Body | Hiragino Kaku Gothic ProN | omitted (source: comfortable article body size; no YAML size) | 400 | omitted (source: generous line-height; no YAML ratio) | Long-form Japanese article body |
| Heading | Hiragino Kaku Gothic ProN | omitted (source: restrained, clear heading tiers; no YAML size) | 700 | omitted (no YAML ratio) | Titles and headings |

Token-set paths: `tokens.typography.body` · `tokens.typography.heading`.

### Assets

- Catalog logo: type `favicon`. Treating that Google favicon lookup as a catalog identity-boundary record rather than a captured first-party note mark, and not promoting it as a portable mark file, is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.
- The teal mark signals "this is note" without dominating the interface.
- Article photography and thumbnails are first-party content on article cards; do not replace them with invented brand-color decoration. Refusing to replace that photography with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification. The source state contract, preserved here in full:

| State | Treatment |
|---|---|
| **Empty (no articles yet)** | Off-white canvas, one warm line (`#222222`) inviting the user to write their first note, plus a black primary to open the editor. Encouraging, never blaming. |
| **Empty (search/discovery no results)** | Calm single line + curated suggestions; editorial framing, not "nothing found, sorry." |
| **Loading (feed/article)** | Skeleton blocks at final dimensions on `#F7F9F9`; gentle shimmer; reading column reserves its width so text doesn't jump. |
| **Loading (inline/publish)** | In-button spinner; black button keeps its shape; label swaps to a loading state. |
| **Error (field)** | Gentle border swap + one calm helper line; cause + fix, sincere tone. |
| **Error (page/network)** | Soft notice on off-white; one sentence + retry. No alarm, no apology-flood. |
| **Success (published)** | Dignified confirmation — the work has been shared and delivered (とどける). Sincere, not celebratory-loud. |
| **Disabled** | Light-gray fill, muted text. Palette swap is the signal. |
| **Skeleton** | Neutral blocks at exact final size; reading column width preserved; respects reduced-motion. |
| **Like (スキ)** | Gentle reaction animation in the teal — warm appreciation, never a vanity-metric spectacle. |

Characterizations such as Encouraging-never-blaming, not-"nothing found, sorry", No-alarm-no-apology-flood, Sincere-not-celebratory-loud, Palette-swap-is-the-signal, and warm-appreciation-never-a-vanity-metric-spectacle are the source's own §14 wording. Treating them as the source state contract rather than a new treatment sheet is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.

The source HTML comment records: VERIFIED: teal palette (`#41C9B4` / `#2CB696` / `#228D74`), bg `#F7F9F9`, text `#222222`, the つくる・つながる・とどける thesis, and the black-primary-for-content-focus shift. INFERRED: component-level button/card/input variants in §4 (note publishes brand colors and the black-primary principle, but exact per-component token values are mapped from those). Font stack is a representative JP-first chain. Motion tokens (§15) duration values are illustrative. Voice samples marked illustrative are not verbatim live strings except the homepage thesis. Personas (§13) are fictional archetypes of note's described creator/reader user base. Treating that verified-versus-inferred split as the source's own evidence class rather than a second token sheet is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, labelling YAML components with the primitive type the token set records, labelling no extra §4-only control as a YAML primitive, refusing to treat this as a complete state-coverage claim, treating named Focus on the text field as not `focus-visible` evidence, and refusing to copy theme-dark hover/pressed onto a black-primary `hover` row, are a derived editorial implementation inference from the verified surfaces; they are not note-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. A generic `Focus` observation is not `focus-visible` treatment. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component. The YAML token set records `button-primary`, `button-secondary`, `button-theme`, `article-card`, `editor-canvas`, and `text-field`. §4 Disabled is a treatment recipe, not a YAML component, and has no primitive type. スキ is a §14 / §15 named state and signature motion, not a YAML component.

### Primary Button

- Role: The primary action (Publish / フォロー / 投稿) — black so it doesn't compete with content
- Kind: interactive
- Primitive type: `button`
- Anatomy: label
- Background: `#000000`
- Text: `#ffffff` / `#FFFFFF`
- Radius: YAML `8` / body soft rounded (pill or `8px`+)
- Use: YAML `Primary action (Publish / フォロー / 投稿)`
- YAML `tokens.components.button-primary`
- Observed: default recipe from YAML / §4; source HTML comment: INFERRED per-component token values

YAML `8` is this control's radius field; it is not `tokens.spacing` `sm` `8`, and it is not `tokens.rounded.full` `9999`. `#000000` is this control's fill and `tokens.colors.primary`; it is not `tokens.colors.brand`. `#ffffff` is this control's on-fill label and `tokens.colors.on-primary`; it is not the page canvas. Keeping those fields unmerged, keeping theme-dark `#228D74` off this table's `hover` row, and treating this control's exact per-component values as the source HTML-comment INFERRED class, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/§4 primary action |
| hover | applicable | Pointer-web button; visual treatment omitted. Theme-dark `#228D74` is not this row. |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; §4 Disabled / §14 Disabled (light-gray fill, muted text; no hex) |
| loading | applicable | Publish / 投稿 is a commit; §14 Loading (inline/publish): in-button spinner; black button keeps its shape; label swaps to a loading state |
| error | applicable | A publish commit can fail; §14 Error (page/network) is a product notice, not a paint on this button; visual treatment omitted |
| success | applicable | A publish commit can complete; §14 Success (published) is a product confirmation, not a paint on this button; visual treatment omitted |

### Secondary / Outline Button

- Role: Lower-emphasis actions beside a primary
- Kind: interactive
- Primitive type: `button`
- Anatomy: label
- Background: `#ffffff` / `#FFFFFF`
- Text: `#222222`
- Border: `1px solid` mid-gray
- Radius: YAML `8` / body soft rounded
- Use: YAML `Lower-emphasis action`
- YAML `tokens.components.button-secondary`
- Observed: default recipe from YAML / §4; source HTML comment: INFERRED per-component token values

`#ffffff` is this control's fill; it is not the page canvas `#f7f9f9`. `#222222` is this control's label; it is not product-primary black. Mid-gray has no recorded hex; none is invented. Treating this control as the source HTML-comment INFERRED class, keeping its fill off canvas, and keeping mid-gray unnamed, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML lower-emphasis action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A lower-emphasis action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a lower-emphasis action beside a primary; exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows. Omitting those three fields because mapping is unresolved, rather than closing them from the §14 rows, is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.

### Brand / Theme Button

- Role: Brand-context actions, links, selected states — the teal moment
- Kind: interactive
- Primitive type: `button`
- Anatomy: label
- Background or text: note Theme `#2cb696` / `#2CB696`
- Text when fill: `#ffffff` / `#FFFFFF`
- Radius: YAML `8`
- Use: YAML `Brand-context action, the teal moment`
- YAML `tokens.components.button-theme`
- Observed: default recipe from YAML / §4; source HTML comment: INFERRED per-component token values

YAML `button-primary` use also names `フォロー`; this theme control is the teal moment, including a `#2CB696` `フォロー` or link accent. Both writings stay. `#2cb696` is this control's brand-context field and `tokens.colors.theme`; it is not `tokens.colors.brand` `#41c9b4` and not product-primary black. Theme-dark `#228d74` is the darker teal for hover/pressed/emphasis on the theme color; it is not copied onto this table's `hover` cell as a captured treatment. Keeping primary-use `フォロー` beside this teal moment, keeping theme off logo-teal and off black, and treating theme-dark as a color-role writing rather than a `hover` treatment on this row, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML brand-context action |
| hover | applicable | Pointer-web button; visual treatment omitted. Theme-dark stays on the color role. |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A brand-context action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as brand-context actions, links, selected states; exact request/outcome mapping is unresolved (link versus in-place follow), so those three fields stay omitted at this boundary rather than closed from the §14 rows. Omitting those three fields because mapping is unresolved, rather than closing them from the §14 rows, is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.

### Article / Note Card

- Role: Article preview — thumbnail + title (bold) + author + metadata, floating on `#F7F9F9`; content-led, minimal chrome. Source §9: Minimal chrome — the title and image lead.
- Primitive type: `card`
- Anatomy: thumbnail + title + author + metadata
- Background: `#ffffff` / `#FFFFFF`
- Text: `#222222`
- Radius: YAML `8` / body soft rounded corners
- Use: YAML `Article preview on off-white canvas`
- YAML `tokens.components.article-card`
- Observed: default recipe from YAML / §4; source HTML comment: INFERRED per-component token values

`#ffffff` is this card's fill; it is not canvas `#f7f9f9`. Title (bold) is the longer §9 writing beside YAML/§4 title. The §9 title-and-image-lead constraint stays beside the §4 content-led chrome writing. Kind and a state-applicability map are omitted (YAML `type: card`; no interactive-kind confirmation). Treating this card as INFERRED, keeping its fill off canvas, keeping the bold-title writing, keeping the §9 title-and-image-lead constraint beside the §4 card-chrome writing, and omitting kind and map (C4), are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

### Writing Canvas

- Role: The distraction-free long-form editor — the heart of "つくる"; chrome recedes, the page is mostly text
- Primitive type: `card`
- Background: `#FFFFFF` (or `#F7F9F9` ambient)
- Text: `#222222`
- Use: YAML `Distraction-free long-form editor`
- YAML `tokens.components.editor-canvas`
- Radius: not in the token set for this record (YAML `editor-canvas` has no radius)

Both `#FFFFFF` and `#F7F9F9` ambient stay. This record is not given `tokens.rounded` `8`. Kind and a state-applicability map are omitted (YAML `type: card`; no interactive-kind confirmation). Keeping both canvas writings, keeping this record off a radius step, and omitting kind and map (C4), are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

### Text Field

- Role: Forms, search, profile fields
- Kind: interactive
- Primitive type: `input`
- Anatomy: value field
- Background: `#ffffff` / `#FFFFFF`
- Text: `#222222`
- Border: `1px solid` mid-gray
- Radius: YAML `8` / body soft rounded
- Focus: accent in note Theme `#2CB696` (or black)
- Use: YAML `Forms, search, profile fields`
- YAML `tokens.components.text-field`
- Observed: default recipe from YAML / §4; source HTML comment: INFERRED per-component token values

Named Focus `accent in note Theme `#2CB696` (or black)` is an additional INFERRED named-source-state, not `focus-visible` evidence, and is not copied onto a `focus-visible` row as a colour. Which of theme or black is used is unresolved; both writings stay. `#ffffff` is this field's fill, not canvas. Mid-gray has no hex. Treating this control as INFERRED, treating named Focus as not `focus-visible` evidence, and keeping theme-or-black as two writings rather than choosing one, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML forms, search, profile fields |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted. Named Focus is not this row. |
| disabled | applicable | An input can be unavailable; visual treatment omitted |
| error | applicable | Form field; §14 Error (field) is a field treatment; visual treatment omitted beyond that row |
| loading | not-applicable | The field itself does not load; §14 Loading (feed/article) is a page/skeleton treatment |
| success | not-applicable | Publish confirmation sits on the product success state, not as a paint on this field |

Additional INFERRED named-source-state: Focus accent in note Theme `#2CB696` (or black). That Focus is not a Core `focus-visible` row and is not copied onto that row as a colour. Treating that Focus as an additional named-source-state rather than a Core `focus-visible` row is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.

§4 Disabled (Background: light gray; Text: muted gray; Use: Unavailable actions) is the disabled treatment recipe for button controls, not a seventh YAML component with its own map. No primitive type is attached. Treating that §4 Disabled recipe as a button-control treatment rather than a seventh YAML component with its own map, and attaching no primitive type, is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

note is **low density, high whitespace** — a reading platform should breathe. Article pages center a single column of text with generous margins; the home/discovery surfaces use a calm card grid, not a packed feed. Treating those layout behaviors as the source wrote them rather than as a measured cross-viewport specification, keeping YAML spacing `8` / `16` unmerged from this layout prose, and keeping Desktop / Tablet / Mobile as source §8 writings rather than invented breakpoint tokens, are derived editorial implementation inferences from the verified surfaces; they are not note-authored or a separately published UI specification.

- Reading view: centered single-column body, generous line-length and margins (premium-paper feel)
- Discovery: editorial/curated card grid on `#F7F9F9`
- Editor: distraction-free canvas, chrome minimized
- Whitespace is a primary design tool — the empty space frames the words

| Width | Behavior |
|---|---|
| Desktop | Centered reading column with wide margins; discovery card grid; sidebar where relevant |
| Tablet | Reading column stays centered; card grid reflows to fewer columns |
| Mobile | Single-column reading and feed; chrome minimizes; editor goes full-bleed text; mobile is a core reading context |

### Touch & Mobile

- Reading column width caps for comfortable line-length on large screens; goes full-width on mobile
- Touch targets comfortable; the writing/reading experience is the priority at every size
- Images in articles scale responsively within the reading column

YAML spacing is `tokens.spacing.sm: 8` · `tokens.spacing.base: 16`, recorded without a px suffix.

<!-- design-md:section content-locales -->
## 6. Content & Locales

note's voice is **calm, sincere, and creator-respecting** — the platform's stance (つくる、つながる、とどける: create, connect, deliver) frames everyone as a maker with something worth sharing. The copy never adopts the hype, urgency, or vanity-metric pressure of engagement-driven social platforms. It writes in warm, plain polite Japanese (です・ます調), treating the writer as a respected creator and the reader as someone who came to *read*, not to be hooked. The whole emotional register is the opposite of a feed: unhurried, dignified, and quietly encouraging of the act of making. Treating those voice adjectives and the register reading as a derived editorial implementation inference from the verified surfaces; they are not note-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Buttons | Short sincere JP verb — `投稿する`, `フォロー`, `スキ`. Inviting, never urgent. |
| Editor / writing | Encouraging and unobtrusive — get out of the writer's way; gentle prompts, never pressure. |
| Discovery | Editorial and curated — "今日のおすすめ" framing, not "trending / don't miss out." |
| Empty states | Warm invitation to create or read; never implies failure. |
| Errors | Calm, blameless, one sentence + fix. |
| Success (published) | Sincere, dignified confirmation — a piece of work has been shared, treated with respect. |
| Community (スキ / comments) | Warm and supportive; "スキ" (like) is gentle appreciation, not a vanity-metric arms race. |

**Forbidden patterns.** Engagement-bait and FOMO ("今すぐ", "見逃すな"), vanity-metric pressure, hype superlatives (`バズる`, `話題沸騰`), urgency on creative actions, exclamation-mark shouting, and anything that treats writing as content-to-optimize rather than work-to-respect. note is sincere by design. Treating that forbidden-pattern list as source-stated §10 rather than a separately published microcopy specification is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.

**Voice samples.**

- `つくる、つながる、とどける` — note's stated platform thesis (create / connect / deliver). Source marker: verified: note.com homepage tagline, live inspect 2026-05-19 (page title "note ――つくる、つながる、とどける。")
- `投稿する` — the publish action; sincere, unhurried. Source marker: illustrative: standard note-register JP action label; not quoted verbatim from a specific live screen
- `スキ` — note's gentle appreciation reaction (its "like"), framed as warmth not a vanity metric. Source marker: illustrative / widely-known note convention

Japanese です・ます調 register and the recorded samples stay as source §10 evidence. Treating illustrative samples as not-verbatim-live-strings except the homepage thesis is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification. Illustrative samples are not promoted as verbatim live strings except the homepage thesis.

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

These decisions are unnamed values, not permissions to invent. Treating this list as a catalog of source-named unresolved writings, not coverage of domains the source never named, is a derived editorial implementation inference from the verified surfaces; it is not note-authored or a separately published UI specification.

- Secondary / Muted mid-gray hex
- Disabled light-gray / muted-gray hex
- Secondary and text-field `1px solid` mid-gray hex
- numeric shadow for dropdowns / modals (source: light shadow + scrim)
- exact cubic-bezier values for `ease-standard` / `ease-enter` / `ease-exit` / `ease-soft` (unattributed; names kept)
- YAML typography size and line-height (source: comfortable article body size with generous line-height; no YAML size or ratio)
- which Focus accent on the text field (`#2CB696` or black)
- `focus-visible` visual treatments (named Focus accent is not that evidence)
- hover visual treatments on Primary / Secondary / Theme / Text Field
- Secondary / Theme loading·error·success applicability (exact request/outcome unresolved)
- interactive kind and state-applicability map for Article / Note Card and Writing Canvas
- motion promotion beyond the duration table, easing names, signature motions, and reduced-motion line — promote only after per-component computed capture of all five kinds: transition properties, animation name, duration, easing, and reduced-motion behavior; official documentation of a single curve or duration is not that gate
