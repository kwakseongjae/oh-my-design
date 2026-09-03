# PIXNET Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

PIXNET (痞客邦) is Taiwan's largest home-grown blogging and content platform. This contract covers the first-party public homepage the source inspected for tokens on 2026-06-08 at `https://www.pixnet.net`. The source footer also names `https://www.pixnet.net/about` as a Tier 1 URL in the same packet; that about URL is a named brand source in this reconstruction, not a second harvested component surface. Treating `https://www.pixnet.net` as this contract's token surface, and treating `https://www.pixnet.net/about` as a named brand source rather than as a second harvested component surface, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

The live homepage opens on a clean white canvas (`#ffffff`) with warm near-black text (`#423e3c`). The single loud color in the entire system is PIXNET orange (`#ff7200`), reserved almost exclusively for the login CTA and a handful of brand moments. Everything else is a quiet ladder of warm grays. The defining typeface choice is **Noto Serif TC** — a Traditional Chinese serif — set across the interface at a 16px body with a 24px line-height. Color temperature is consistently warm: even the grays lean brown (`#969492`, `#817f7d`, `#575451`), hairlines are a warm off-white (`#eaeae9`), and the secondary accent is a hot red-orange (`#ff432b`) rather than a cool blue. There is no corporate blue anywhere in the palette. Shadows are minimal and warm-tinted; elevation is communicated mostly through the hairline border system and the `#f4f4f4` muted surface (used for the footer). The hex values, the Noto Serif TC face, the 16px / 24px pair, and the hairline / footer treatments in this paragraph are recorded. Readings of that captured layer as a warm, editorial, reader-first publishing home rather than a slick venture-funded app; of `#423e3c` as ink on paper rather than pure black; of the serif as a 明體/宋體-lineage literary face; and of content as the hero with chrome receding, are a derived editorial implementation inference from the verified surfaces; they are not PIXNET-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. PIXNET (痞客邦) is one of Taiwan's oldest and largest user-generated content and blogging platforms, a cornerstone of the Traditional-Chinese-language web. Originating in the mid-2000s out of Taiwan's blogging boom, it grew into the country's dominant home for personal blogs, lifestyle writing, travel and food reviews, parenting diaries, and creator communities. For a generation of Taiwanese internet users, "PIXNET" is synonymous with "blog" — the place where independent writers built audiences and where readers went to research a restaurant, a trip, or a product through real, long-form personal accounts. That heritage explains the design. The serif typeface, the warm ink text, the editorial density, and the rationed accent color all express a platform built around *reading* and *writing* rather than around a swipe-driven feed. PIXNET's identity is the long-tail of authentic creator content — millions of articles accumulated over nearly two decades — and the interface treats that content as the product. The modern homepage layers in trending hashtags, short video, and creator-economy features ("社群影響力" / social influence, "大試用時代" / a product-trial program), but the underlying posture remains: a Taiwanese life and creative-culture platform where everyday people publish and everyday people read. What PIXNET embraces: warmth, locality, long-form authenticity, and a creator-first community. What it avoids: the cold institutional aesthetics of enterprise software, English-first global-startup polish, and the visual hype that would betray its homey, decades-deep blogging roots. The mid-2000s origin, the blogging-boom sentence, the "synonymous with blog" line, the millions of articles over nearly two decades, "社群影響力", "大試用時代", the embrace/avoid closing pair, and the heritage-explains-the-design sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-heritage narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks, each naming a captured homepage surface or control, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

- Browse the homepage magazine grid of article cards at `https://www.pixnet.net`.
- Open a trending tag (`#日本旅遊`, `#長榮航空`, `#親子旅遊`).
- Log in with the captured `登入` control.
- Search from the header search field.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its §13 figures as fictional archetypes informed by publicly observable PIXNET user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, as those publicly observable segments is lifestyle bloggers, travel/food creators, parenting writers, and Taiwanese readers researching real experiences. Dropping those fictional archetypes rather than promoting them, carrying no demographic segment list, and reading those source-named groups as this product's audience, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside it, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

- Noto Serif TC as the system typeface — a Traditional Chinese serif, rare for a content platform and central to the brand. YAML token note: body type is Noto Serif TC — a serif, unusual for a content platform
- Warm near-black text (`#423e3c`) instead of pure black — ink-on-paper warmth
- PIXNET orange (`#ff7200`) as a tightly rationed brand/CTA color, not a flood
- Secondary warm red accent (`#ff432b`) for highlights and hot/trending markers
- A ladder of warm browns-grays (`#575451` / `#817f7d` / `#969492`) for hierarchy
- Hairline-driven structure: `#eaeae9` borders carry layout, not heavy shadows
- 6px border-radius on buttons and tags — soft but not pill-shaped
- White canvas with a `#f4f4f4` muted surface for footer / secondary zones

### Principles

These 7 items are a derived editorial implementation inference from the verified surfaces; they are not PIXNET-authored or a separately published UI specification. The source states them in its own Principles section.

1. **Content is the product.** The interface recedes so that articles, photos, and creator voices are the focus. Chrome is thin; hairlines do the structuring.
2. **Read like paper.** The Noto Serif TC body, warm ink, and comfortable line-height make the platform feel like reading, not scrolling — honoring its blogging heritage.
3. **Warmth over sterility.** Every neutral leans warm; the accent is a friendly orange. Nothing is cold, corporate, or clinical.
4. **Local first.** PIXNET is built for Taiwanese readers and creators in Traditional Chinese. Typography, tracking, and tone all respect that context.
5. **One loud color, used sparingly.** Orange (`#ff7200`) marks action and energy precisely because it is rare. Restraint makes it legible as "the brand."
6. **Support the creator.** The system exists to help bloggers publish, grow, and be discovered — the design is in service of that community.
7. **Density with dignity.** A content-rich homepage stays calm through hairline structure and consistent type, never feeling cluttered.

### Application rules

The source states these as its Do lists in §7 and §16, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not PIXNET-authored or a separately published UI specification.

- Use Noto Serif TC for all UI and reading text — the serif IS the brand
- Use `#423e3c` warm ink for text instead of pure black; reserve `#000000` for rare contrast needs
- Reserve PIXNET orange (`#ff7200`) for the primary CTA and brand/hot moments only
- Let hairlines (`#eaeae9`) carry layout structure before reaching for shadow; lean on `#f4f4f4` muted surfaces for structure
- Apply small positive letter-spacing (0.5–1.2px) to Traditional Chinese text
- Keep button/tag radius at 6px — soft but not pill — and sharp corners on imagery
- Use weight (400 vs 700) as the main hierarchy lever, not large size jumps
- Keep the mood warm, local, and creator-supportive in copy and color
- Let content density stay calm via consistent type and hairline dividers

### Avoid

The source states these as its Don't lists in §7 and §16. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not PIXNET-authored or a separately published UI specification.

- Don't substitute a sans-serif for the body face — it erases PIXNET's identity
- Don't flood layouts with orange — it is a rationed accent, not a fill
- Don't use pure black (`#000000`) for reading text — warm ink `#423e3c` is the voice
- Don't introduce corporate blue — the palette is deliberately warm
- Don't use heavy neutral-black shadows — keep elevation subtle and warm-tinted
- Don't pill-shape buttons or tags — 6px is the considered radius
- Don't apply negative tracking to Chinese text — it harms readability
- Don't adopt English-first, hype-startup tone — PIXNET is homey and Taiwanese
- Don't bury content under heavy chrome — the reader and creator come first

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys follow the YAML paths. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.heading` `#423e3c` unmerged from `tokens.colors.body` `#423e3c`, keeping `tokens.colors.canvas` `#ffffff` unmerged from `tokens.colors.on-primary` `#ffffff`, keeping `tokens.colors.primary` `#ff7200` unmerged from `tokens.colors.primary-deep` `#e85f00`, keeping `tokens.colors.ink` `#000000` unmerged from heading/body, and keeping `tokens.colors.muted` `#817f7d` unmerged from `tokens.colors.muted-2` `#969492`, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

Primary

- **PIXNET Orange** (`#ff7200`): `tokens.colors.primary`. The brand anchor. Used for the primary CTA (the `登入` / login button fill), brand accents, and active/hot markers. A saturated, energetic orange that is the single loud note in an otherwise warm-neutral system. Verified live as the login button background and the most-used non-neutral color (68 DOM occurrences). YAML token note: login CTA + 68 DOM uses. Catalog `primary_color` is `#ff7200`.
- **Orange Deep** (`#e85f00`): `tokens.colors.primary-deep`. Darker orange for hover/pressed states on the primary CTA. The source calls this a reasoned step down in lightness from `#ff7200`; that step-down characterization is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.
- **Pure White / canvas** (`#ffffff`): `tokens.colors.canvas`. Page background and card surfaces.
- **On-primary** (`#ffffff`): `tokens.colors.on-primary`. The text color on the orange CTA. Same hex as canvas; a different YAML key.

Accent

- **Warm Red** (`#ff432b`): `tokens.colors.accent-red`. Secondary accent for trending/hot indicators, badges, and emphasis. A hot red-orange that pairs with the primary without competing — measured live at 48 DOM occurrences.
- **Accent Tint** (`#fcdfda`): `tokens.colors.accent-tint`. A soft peach tint used as a subtle highlight surface and hover wash for accent-themed elements.

Text / ink scale

- **Warm Ink / heading** (`#423e3c`): `tokens.colors.heading`. Workhorse heading color. YAML keeps this key beside body even though the hex matches.
- **Warm Ink / body** (`#423e3c`): `tokens.colors.body`. Workhorse body color. The dominant foreground (902 DOM occurrences) across headings, body, nav links, and labels as the source's Warm Ink writing.
- **Label** (`#575451`): `tokens.colors.label`. Slightly lighter warm gray for secondary headings and nav hover states.
- **Muted** (`#817f7d`): `tokens.colors.muted`. Tertiary text — captions, meta lines, timestamps.
- **Muted 2** (`#969492`): `tokens.colors.muted-2`. The lightest readable gray for fine print, counts, and de-emphasized metadata.
- **Pure Ink** (`#000000`): `tokens.colors.ink`. Reserved for rare maximum-contrast moments (icons, dividers); body text deliberately avoids it in favor of `#423e3c`.

Surface and borders

- **Surface Muted** (`#f4f4f4`): `tokens.colors.surface-muted`. The footer background and secondary zone surface — a near-white warm gray.
- **Hairline** (`#eaeae9`): `tokens.colors.hairline`. The structural border color. Carries card edges, dividers, input outlines, and ghost-button borders. The most-used color overall (1083 DOM occurrences) — structure lives in the hairline, not in shadow.
- **Border Soft** (`#c0bfbe`): `tokens.colors.border-soft`. A slightly stronger warm border for hover/active container states.

Color usage rules, as the source states them. Keeping the source's Color Usage Rules, plus the source §1 no-corporate-blue sentence, as portable color rules rather than as a PIXNET-authored palette manual, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

- Orange (`#ff7200`) is a CTA and brand color — it is not used for body text, large fills, or decorative flooding.
- All foreground text is `#423e3c` or a lighter warm gray; pure `#000000` is avoided for reading text.
- The hairline `#eaeae9` does the structural heavy lifting; shadows stay subtle and warm.
- Red (`#ff432b`) signals hot/trending/emphasis — never a primary action.
- There is no corporate blue anywhere in the palette.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them, beside the source §5 px list. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

| Step | YAML value | Token-set path | §5 px spelling |
|---|---:|---|---|
| xs | 4 | `tokens.spacing.xs` | 4px |
| sm | 8 | `tokens.spacing.sm` | 8px |
| md | 12 | `tokens.spacing.md` | 12px |
| base | 16 | `tokens.spacing.base` | 16px |
| lg | 24 | `tokens.spacing.lg` | 24px |
| xl | 32 | `tokens.spacing.xl` | 32px |
| xxl | 48 | `tokens.spacing.xxl` | 48px |
| section | 64 | `tokens.spacing.section` | 64px |

The source also names a Base unit: 8px (with a 4px sub-step). Component padding is compact (8px 12px on buttons/tags). `tokens.spacing.base: 16` is not the 16px body size and not `tokens.typography.heading` size 16. `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12`. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.lg: 24` is not the 24px live body line-height. `tokens.spacing.section: 64` is not a type size.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them. Reading 4 / 6 / 12 / 9999 as harvested geometry for the observed controls, not a universal radius for every unlisted PIXNET surface, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

| Step | Value | Token-set path | Source §5 use |
|---|---:|---|---|
| sm | 4 | `tokens.rounded.sm` | Subtle rounding on minor chips |
| md | 6 | `tokens.rounded.md` | Buttons, tags, inputs, interactive cards — the workhorse |
| lg | 12 | `tokens.rounded.lg` | Featured modules and larger containers |
| full | 9999 (`9999px`) | `tokens.rounded.full` | Avatar circles and round icon buttons only |

Sharp (0px): content thumbnails / imagery, so pictures read edge-to-edge. That 0px is a source §5 writing, not a YAML `tokens.rounded` key. `tokens.rounded.md: 6` is the button/tag/input/card step and is not `tokens.spacing.sm: 8`. `tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.lg: 12` is not `tokens.spacing.md: 12`. `tokens.rounded.full: 9999` is a YAML step; source §5 spells the same step `9999px`. It is a step for avatars and round icon buttons.

### Elevation

The source records four lift levels plus a keyboard Focus ring. Reading that stack as hairline-first depth — structure in `#eaeae9` and surface contrast (white cards on white/`#f4f4f4`) rather than dramatic float, with warm-tinted shadows built on brand ink `rgba(66,62,60,...)` when shadow is used — is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

| Level | Treatment | Use | Token-set path |
|---|---|---|---|
| Flat (Level 0) | No shadow, hairline border only | Page background, inline content, most cards | — |
| Ambient (Level 1) | `rgba(66,62,60,0.08) 0px 2px 8px` | Subtle hover lift on cards | `tokens.shadow.ambient` |
| Standard (Level 2) | `rgba(66,62,60,0.12) 0px 4px 16px` | Hovered content cards, dropdowns | `tokens.shadow.standard` |
| Elevated (Level 3) | `rgba(66,62,60,0.16) 0px 8px 28px` | Modals, menus, floating panels | `tokens.shadow.elevated` |
| Focus Ring | `2px solid #ff7200` outline | Keyboard focus on interactive elements | not a YAML `tokens.shadow` key |

The generic observed-state name Focus (`2px solid #ff7200` outline) is a captured Focus treatment, not a `focus-visible` treatment.

Decorative depth the source records:

- `#f4f4f4` muted surface separates the footer and secondary zones from the white content area without a border
- `#fcdfda` peach washes mark featured/sponsored modules
- `#423e3c` dark feature panels create contrast-based depth for editorial highlights

### Motion

The source records durations, named easing roles, signature pairings, and reduced-motion behavior. The three cubic-bezier values attached to those named roles are omitted at the curve-value boundary: `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` (legacy template match), and `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`. No live computed evidence for those curves is in the source comment or sibling. Named roles and their Use writings stay. Durations stay. Omitting those three unsourced curves, keeping durations, named easing roles, signature pairings, and reduced-motion writings, requiring the five-kind per-component computed gate before any promotion, and treating a match against the legacy template or official documentation of a single curve or duration as not that gate, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, selection, focus rings |
| `motion-fast` | 150ms | Hover lifts, button press, tag hover |
| `motion-standard` | 220ms | Dropdowns, menus, card expand |
| `motion-slow` | 320ms | Page-level transitions, modal reveal |

Named easing roles (curve values omitted):

| Token | Use |
|---|---|
| `ease-enter` | Arriving — menus, dropdowns, cards |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

Signature motions, as the source states them:

1. **Card hover lift.** Content cards lift gently on hover using `motion-fast / ease-standard` — a small shadow grow (`rgba(66,62,60,0.12)`) and border deepen to `#c0bfbe`. Calm, never bouncy, in keeping with a reading-focused home.
2. **Tag / nav hover.** Trending tags and nav links transition color toward `#575451` and/or reveal an orange underline over `motion-fast`.
3. **Menu reveal.** Dropdowns and account menus arrive with `motion-standard / ease-enter`, a short fade-and-rise.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; hovers become immediate color changes. Reading is never gated on animation.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating Noto Serif TC as the captured UI family rather than as a PIXNET-owned exclusive face, treating `system-ui` as a YAML utility family rather than as the brand face, and refusing to substitute a sans-serif while calling it Noto Serif TC, are derived editorial implementation inferences from the verified surfaces; they are not PIXNET-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | The homepage and about URL state the product and the Traditional Chinese name 痞客邦. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification. |
| Live computed surface-use | Verified live: `font-family: "Noto Serif TC", "Noto Serif TC Fallback"` on `body`, base size 16px, line-height 24px. A Traditional Chinese serif used across the entire interface — body, headings, nav, and most UI text. |
| Official distributed asset | No PIXNET-exclusive distributed type family was verified. That "no exclusive distributed family" reading is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification. |
| Declared-only / utility | YAML `tokens.typography.family.sans` is `system-ui`. The source says `system-ui` / sans-serif appears only in narrow utility contexts; the brand identity is the serif. Classing that sans entry as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification. |
| License | This record does not establish a PIXNET font-license notice for Noto Serif TC. Noto Serif TC is an upstream face, not a PIXNET-owned brand asset; that classification is a derived editorial implementation inference from the verified surfaces, and it is not PIXNET-authored or a separately published UI specification. |

### Family

- **Primary / current visible UI family:** `"Noto Serif TC"` — Token-set path `tokens.typography.family.serif`. Fallback `"Noto Serif TC Fallback"`, then system serif.
- **Secondary / utility:** `system-ui` — Token-set path `tokens.typography.family.sans`. Narrow utility contexts only.

A fallback member of a stack is never presented as the brand face. Do not substitute a sans-serif for the body face. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

### Type roles

YAML unitless line-heights stay ratios. Token-set `use` stays the YAML string. Source §3 Notes keep the longer table spelling, including `"gogo+香港"` and `"大試用時代"` on Heading Large. Keeping the YAML singles and the §3 notes on separate readings, keeping unitless `1.33` / `1.50` / `1.43` / `1.00` rather than rewriting them as px, and keeping the live 16px / 24px pair beside body `1.50` rather than replacing it, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use | §3 Notes |
|---|---|---:|---:|---|---|---|---|
| Heading Large | Noto Serif TC | 18px | 700 | 1.33 | 0.5 (`0.5px`) | Section / channel headings, nav emphasis | Channel / section heads, nav emphasis ("gogo+香港", "大試用時代") |
| Heading | Noto Serif TC | 16px | 700 | 1.50 | 1.2 (`1.2px`) | Card titles, tag labels, h1/h2 inline | Card titles, tag labels, inline h1/h2 |
| Body | Noto Serif TC | 16px | 400 | 1.50 (live 24px) | 1.2 (`1.2px`) | Standard reading text, article copy | Standard reading text, article copy |
| Body Small | Noto Serif TC | 14px | 400 | 1.43 | YAML omits; §3 `normal` | Meta, captions, secondary lines | Meta, captions, secondary lines |
| Button | Noto Serif TC | 14px | 500 | 1.00 | YAML omits; §3 `normal` | Primary CTA label (login) | Primary CTA label (login) |
| Nav Link | Noto Serif TC | 16px | 400 | 1.50 | YAML omits; §3 `normal` | Header nav links, footer links | Header nav links, footer links |
| Caption | Noto Serif TC | 13px | 400 | YAML omits; §3 `normal` | YAML omits; §3 `normal` | Timestamps, counts, fine print | Timestamps, counts, fine print |

Source typography principles, kept as type rules:

- **Serif is the brand.** Noto Serif TC is the single most distinctive typographic decision. It signals long-form, literary, reader-first heritage. Do not substitute a sans-serif — that erases the PIXNET identity.
- **Weight is the hierarchy tool, not size.** The homepage runs most text at 16px and distinguishes headings from body almost entirely through weight (700 vs 400). Size steps are small (18 / 16 / 14 / 13).
- **Positive tracking on Chinese text.** A small positive letter-spacing (0.5–1.2px) is applied to Traditional Chinese text for breathing room and readability — the opposite of the negative tracking used by Latin-display systems.
- **Two weights, mostly.** 400 (regular) for reading, 700 (bold) for emphasis, with 500 reserved for the CTA label. There is no light/thin display weight — the serif already carries the personality.

Treating those four as type-role rules from the source's typography section rather than as a separately published type specification is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

### Assets

Catalog identity points at `logo.type: favicon`, slug `https://www.google.com/s2/favicons?domain=www.pixnet.net&sz=128`. That pointer is a Google favicon-service URL, not a first-party file on `www.pixnet.net`. Treating it as identity metadata for the captured homepage rather than as a PIXNET-hosted mark, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

All component observations below are scoped to the supplied `https://www.pixnet.net` desktop capture. The source records these product-level state treatments. They stay as recorded treatments for the states they name; they are not a complete state-coverage claim for every control.

| State | Treatment |
|---|---|
| Empty (no posts yet) | White canvas, single warm-ink (`#423e3c`) line in Noto Serif TC 16px: an encouraging prompt to write the first article. One orange CTA (`#ff7200`). No cold "No data" wording. |
| Empty (search no results) | Muted-gray (`#817f7d`) single line in Traditional Chinese suggesting alternate keywords; search field stays visible. |
| Loading (feed first paint) | Skeleton blocks at card dimensions in hairline `#eaeae9`, gentle warm shimmer. Thumbnails skeleton sharp-cornered to match. |
| Loading (in-place refresh) | Subtle orange (`#ff7200`) progress hint; previous content stays visible. |
| Error (load failed) | Inline warm-toned banner, `#ff432b`-adjacent accent, plain Traditional-Chinese explanation plus a retry link. No generic "Something went wrong." |
| Error (form validation) | Field-level, warm-red border with a short serif message describing what is invalid. |
| Success (post published) | Brief confirmation toast in warm ink, friendly past-tense Chinese phrasing. No exclamation overload. |
| Disabled | Reduced opacity on surface and text together; orange CTA becomes a faded warm orange, not switched to gray. |
| Hot / trending | Orange (`#ff7200`) or red (`#ff432b`) marker / numeral flags the trending item. |
| Focus | `2px solid #ff7200` outline on interactive elements. |

The generic observed-state name Focus (`2px solid #ff7200` outline) is a captured Focus treatment, not a `focus-visible` treatment. The source records no `focus-visible` capture; no `focus-visible` row carries a treatment. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover applies wherever a pointer control exists. Loading, error, and success follow the control's product role, not its primitive kind. Where a state applies by role and no treatment was observed, the state stays applicable and only its visual treatment is omitted. Absence of a capture is not a `not-applicable` reason. YAML `type` is preserved only on components that have that key. §4-only components are labelled `not in the token set`. Every interactive-kind verdict, every applicability verdict, and the reason given for either — including treating Capture-record empty / loading / error / success / disabled / Hot / Focus rows as product-level recorded treatments rather than as per-control computed state tokens, treating `登入` as an in-place login commit, treating Quiet/Nav as destination links, treating the trending tag as a destination pill, treating the article card as a destination container, and treating the search/form input as a query field — is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary (Login / CTA)

- Role: The primary call to action — `登入` (login), sign-up, and brand actions. Verified live.
- Token-set path: `tokens.components.button-primary`
- Token-set use: Primary CTA (login)
- Primitive type: `button` · Kind: interactive
- Anatomy: labelled filled button
- Background: `#ff7200`
- Text: `#ffffff`
- Padding: 8px 12px
- Radius: 6px. YAML radius: `6`
- Height: 36px
- Font: 14px Noto Serif TC weight 500. YAML font: `weight 500, 36px tall`
- Hover: background shifts to `#e85f00`
- Observed: default and hover on the login CTA

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the `登入` fill |
| hover | applicable | Pointer-web button; recorded treatment: background `#e85f00` |
| focus-visible | applicable | Interactive control; visual treatment omitted. The captured generic-focus outline is not this row. |
| disabled | applicable | Button control; recorded product-level treatment: orange CTA becomes a faded warm orange, not switched to gray |
| loading | applicable | `登入` is an in-place login commit; visual treatment omitted |
| error | applicable | A failed login can be reported on this control; visual treatment omitted |
| success | applicable | A completed login can be reported on this control; visual treatment omitted |

### Ghost / secondary

- Role: Secondary action with a hairline border
- Token-set path: `tokens.components.button-ghost`
- Token-set use: Secondary action, 1px #eaeae9 hairline border
- Primitive type: `button` · Kind: interactive
- Anatomy: white filled button with hairline
- Background: `#ffffff`
- Text: `#423e3c`
- Radius: 6px. YAML radius: `6`
- Border: `1px solid #eaeae9`
- Observed: default. YAML `tokens.components.button-ghost`. This is not the trending-tag pill below. Keeping YAML `tokens.components.button-ghost` unmerged from `tokens.components.tag-pill`, even though source §4 writes them under one Ghost / Tag heading, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared as the YAML ghost button |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary action can be gated; visual treatment omitted |
| loading | not-applicable | This ghost control is a secondary action; it commits no operation in place whose pending result this button would report. |
| error | not-applicable | Same role reason: the ghost control commits no operation in place. |
| success | not-applicable | Same role reason: the ghost control commits no operation in place. |

### Tag / trending pill

- Role: Hashtag / trending tag pills on the homepage (`#長榮航空`, `#親子旅遊`, `#日本旅遊`). Bold serif label, hairline border, white fill. Verified live.
- Token-set path: `tokens.components.tag-pill`
- Token-set use: Tag / channel label, hairline border
- Primitive type: `badge` · Kind: interactive
- Anatomy: hairline pill with 700-weight serif label
- Background: `#ffffff` (or transparent)
- Text: `#423e3c`
- Padding: 8px 12px
- Radius: 6px. YAML radius: `6`
- Height: 36px
- Border: `1px solid #eaeae9`
- Font: 16px Noto Serif TC weight 700. YAML font: `weight 700`
- Observed: default on homepage trending tags

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as homepage trending tags |
| hover | applicable | Pointer-web pill; recorded signature: color toward `#575451` and/or an orange underline over `motion-fast` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tag destination can be unavailable; visual treatment omitted |
| loading | not-applicable | This trending tag presents a hashtag destination; it does not commit an operation whose pending result this pill would report. |
| error | not-applicable | Same role reason: choosing that destination is not an operation with an error result this pill would report. |
| success | not-applicable | Same role reason: choosing that destination is not an operation with a success result. |

### Article / content card

- Role: Article/content card on the homepage magazine grid
- Token-set path: `tokens.components.card`
- Token-set use: Article/content card, hairline #eaeae9 border, low warm shadow
- Primitive type: `card` · Kind: interactive
- Anatomy: white card, hairline edge, sharp-cornered cover image edge-to-edge on top
- Background: `#ffffff`
- Border: `1px solid #eaeae9`
- Radius: 6px on interactive cards. YAML radius: `6`. Content thumbnails are often sharp (0px) so imagery reads edge-to-edge
- Shadow (standard): `rgba(66,62,60,0.12) 0px 4px 16px` — warm-tinted, subtle
- Hover: border deepens to `#c0bfbe`, optional lift to elevated shadow
- Title: Noto Serif TC 16px weight 700 color `#423e3c`
- Meta line: 14px weight 400 color `#817f7d` (source §9 writing on this card; not a YAML `tokens.typography` key of its own)
- Dark feature card variant: `#423e3c` fill with white/light text for emphasis blocks
- Observed: default and hover

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared as the homepage article card |
| hover | applicable | Pointer-web card; recorded treatment: border `#c0bfbe`, optional elevated shadow |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A card destination can be unavailable; visual treatment omitted |
| loading | not-applicable | This article card presents a reading destination; it does not commit an operation whose pending result this card would report. Feed-first-paint skeleton is a product-level loading treatment in the capture record, not this card. |
| error | not-applicable | Same role reason: opening an article is not an operation with an error result this card would report. |
| success | not-applicable | Same role reason: opening an article is not an operation with a success result. |

### Quiet / Nav

- Role: Header navigation and footer links
- Primitive type: not in the token set · Kind: interactive
- Anatomy: transparent text link
- Background: transparent
- Text: `#423e3c` (hover `#575451`)
- Padding: 8px 12px
- Radius: 6px
- Font: 16px Noto Serif TC weight 400
- Emphasized channel links: 18px weight 700
- Observed: default and hover. Not a YAML `tokens.components` key.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as header nav and footer links |
| hover | applicable | Pointer-web link; recorded treatment: text `#575451` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav destination can be unavailable; visual treatment omitted |
| loading | not-applicable | This nav link presents a destination; it does not commit an operation whose pending result this link would report. |
| error | not-applicable | Same role reason: choosing that destination is not an operation with an error result this link would report. |
| success | not-applicable | Same role reason: choosing that destination is not an operation with a success result. |

### Search / form input

- Role: Search field and form inputs
- Primitive type: not in the token set · Kind: interactive
- Anatomy: value field
- Border: `1px solid #eaeae9`
- Radius: 6px
- Text: `#423e3c`
- Placeholder: `#969492`
- Label: `#575451`, 14px Noto Serif TC
- Focus: border shifts to `#ff7200` (orange) or `#c0bfbe`
- Observed: default and generic Focus. Not a YAML `tokens.components` key. The captured generic-focus border is not a `focus-visible` treatment.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the search / form input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted. The captured generic-focus border is not this row. |
| disabled | applicable | An input can be unavailable; visual treatment omitted |
| loading | not-applicable | This search / form input presents a query field; it does not commit an operation whose pending result this input would report. |
| error | applicable | Form field; recorded product-level treatment: field-level warm-red border with a short serif message |
| success | not-applicable | Completing a query is not a success result this input would report. |

### Hot / new badge

- Role: "hot" / "new" markers, including `熱門` / trending flags
- Primitive type: not in the token set
- Kind: non-interactive — a marker, not a commit control
- Fill: `#ff432b` or `#ff7200` with white text
- Radius: 6px
- Font on the source §9 hot-badge writing: Noto Serif TC 13px weight 700, for '熱門' / trending markers
- No state-applicability map: the badge itself is not an interactive control.

### Tint badge

- Role: soft category labels
- Primitive type: not in the token set
- Kind: non-interactive — a label, not a commit control
- Background: `#fcdfda` peach
- Text: `#423e3c`
- No state-applicability map: the badge itself is not an interactive control.

### Navigation chrome

- Role: White sticky header and muted footer
- Primitive type: not in the token set
- Kind omitted: the bar is recorded chrome, not a commit control, so no applicability map is declared
- Header: white (`#ffffff`) sticky header, ~73px tall (verified live)
- PIXNET wordmark / logo left-aligned
- Links: Noto Serif TC 16px weight 400, `#423e3c` text; emphasized channel links at 18px weight 700
- Search field with hairline border and 6px radius
- Orange `登入` (login) CTA right-aligned (`#ff7200` fill, white text, 6px radius)
- Footer on `#f4f4f4` muted surface with `#423e3c` links; no top border — surface contrast separates it

### Decorative elements

Accent washes: `#fcdfda` peach tints behind featured/sponsored content blocks. Hot markers: `#ff432b` and `#ff7200` for trending/ranking numerals and "熱門" (hot) flags. Dark feature panels: `#423e3c` background with light text for editorial highlight modules.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied homepage records a wide multi-column magazine grid — channel rows, trending tags, and content cards. Content thumbnails dominate; chrome is thin so the grid reads as a magazine of articles. Header bar at ~73px, full-width white, sticky. Footer on `#f4f4f4` muted surface, full-width. Component padding is compact (8px 12px on buttons/tags), reflecting a dense, content-rich homepage. Reading those measurements as local captured geometry rather than as a complete grid declaration, and keeping `~73px` as the header's recorded height rather than as a spacing-scale step, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

Source whitespace writings, kept as the source's layout notes:

- **Editorial density.** PIXNET is a publishing home, so the homepage packs many content entries per screen, separated by hairlines rather than large gaps. Whitespace is purposeful and moderate, not luxurious.
- **Hairlines over gaps.** Structure is communicated by `#eaeae9` dividers and borders, letting more content fit without feeling cramped.
- **Reading column comfort.** Inside articles, the serif body at 16px / 24px line-height with positive tracking gives a comfortable, paper-like reading measure.

Treating those three as the source's own layout notes rather than as a separately published layout specification is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

### Responsive behavior

The source records this breakpoint table. It is the source's responsive writing, not a live computed breakpoint capture. Reading it as a recorded source table rather than as a cross-viewport specification proven by a mobile capture, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single/two-column content stack, collapsed nav, larger touch targets |
| Tablet | 640–1024px | 2–3 column content grid, condensed header |
| Desktop | 1024–1280px | Full multi-column magazine grid |
| Large Desktop | >1280px | Centered max-width content with wider gutters |

Touch targets the source records: buttons / tags at 36px height with 8px 12px padding — comfortable for tap; nav links spaced for thumb reach on mobile; round icon buttons use full radius for clear tap affordance.

Collapsing strategy the source records:

- Header: full horizontal nav → hamburger / condensed search on mobile
- Content grid: multi-column magazine → 2-column → single column stack
- Trending tag row: wraps or becomes horizontally scrollable on narrow screens
- Footer (`#f4f4f4`): link columns stack vertically on mobile
- Typography: 18px channel heads → 16px on mobile; body stays 16px for readability

Image behavior the source records: content thumbnails stay sharp-cornered (0px) and fill their cells edge-to-edge; cover images crop responsively while preserving the serif caption beneath; avatars remain circular (full radius) at all sizes.

<!-- design-md:section content-locales -->
## 6. Content & Locales

PIXNET's voice is that of a warm, encouraging community host for Taiwanese creators and readers — friendly, everyday, and culturally local, without corporate stiffness. The homepage title reads 「痞客邦PIXNET-掌握最新熱門話題貼文、短影音，讓生活充滿靈感！」("PIXNET — catch the latest trending posts and short videos, fill life with inspiration!"), which captures the register: upbeat, life-centered, inclusive. The platform positions itself as 「台灣人的生活文創平台」("a life and creative-culture platform for Taiwanese people"). Copy is in Traditional Chinese, conversational, and oriented around lifestyle verticals — 旅遊 (travel), 美食 (food), 影視 (film/TV), 親子 (parenting), 寵物 (pets). Characterizing that voice as lifestyle-warm, locally Taiwanese, creator-supportive, and inclusive implementation context rather than as a separately published copy manual, requiring the quoted strings below byte-exact, and treating English beside a Traditional Chinese string as a reading aid rather than a replacement, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Homepage / hero | Warm, life-inspiring. "Fill life with inspiration." Inclusive of all readers and creators. |
| Channel labels | Plain, category-clear: 旅遊 / 美食 / 影視 / 親子. Everyday vocabulary. |
| Creator-facing | Encouraging and supportive — PIXNET is a home for bloggers to publish and grow. |
| CTAs | Direct and friendly: 登入 (login), 註冊 (sign up), 寫文章 (write). |
| Trending / hot | Energetic, of-the-moment: 熱門 (hot), trending hashtags. |
| Community / help | Patient, neighborly, respectful of long-time bloggers. |

Recorded strings, kept byte-exact: 「痞客邦PIXNET-掌握最新熱門話題貼文、短影音，讓生活充滿靈感！」; 「台灣人的生活文創平台」; `登入`; `註冊`; `寫文章`; `熱門`; 旅遊; 美食; 影視; 親子; 寵物; 社群影響力; 大試用時代; `gogo+香港`; `#長榮航空`; `#親子旅遊`; `#日本旅遊`; 痞客邦.

**Tone anchors.** Lifestyle-warm, locally Taiwanese, creator-supportive, inclusive. Avoid cold corporate jargon, English-first phrasing, and hype-startup superlatives — PIXNET's strength is its homey, long-running community feel.

Reproduce those quoted strings byte-exact rather than translating or re-casing them.

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

These decisions are unnamed values, not permissions to invent:

- hover visual treatments on controls that record default only
- `focus-visible` visual treatment (generic Focus `2px solid #ff7200` outline is a different evidence class)
- a first-party hosted favicon file on `www.pixnet.net`
- unsourced easing curve values for `ease-enter`, `ease-exit`, and `ease-standard` — promote a motion value for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed
- live computed confirmation of the source's <640px / 640–1024px / 1024–1280px / >1280px breakpoint table
