# pixiv Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

pixiv (ピクシブ) is Japan's largest illustration and creative-work community — a place where millions of artists upload, tag, browse, and bookmark original and fan art. Catalog homepage identity is `https://www.pixiv.net`. YAML `tokens.source` is `prose-derived`. Catalog `primary_color` `#0096fa` is the same blue as `tokens.colors.primary` `#0096fa`; they stay two writings, not a second blue. This contract covers the first-party public surface the source inspected on 2026-06-06: the live production site at `https://www.pixiv.net`. Source §4 names that URL as a Tier 1 source, "live production site, verified via live DOM getComputedStyle". The source HTML comment records a second writing from the same date: Direct verification via WebFetch (2026-06-06) of `https://www.pixiv.net` confirms pixiv Inc. operation, a 2025 logo refresh (`new_logo_2025` SVG), a social-login surface, and content-first structure. "Live stylesheet values were not exposed in the fetched markup." Token-level hex values below are grounded in the documented pixiv brand color (pixiv blue `#0096fa`) and standard observed pixiv UI conventions. Every value stays attached to the writing or token-set path that established it. Reading that inspected URL as this contract's surface, keeping catalog `primary_color` `#0096fa` beside `tokens.colors.primary` `#0096fa` rather than as a second blue, keeping the §4 live-DOM footer beside the HTML-comment WebFetch writing rather than choosing one as the winner, keeping every value attached to the writing that established it, and refusing to treat the 2025 logo refresh as a substitute for live computed component geometry, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

The interface exists to do one thing extraordinarily well: get vivid, full-bleed artwork in front of the viewer's eyes with as little chrome as possible. The product feels like a gallery wall, not a dashboard. The canvas is a near-white surface (`#ffffff` to `#f5f5f5`) with the artwork itself supplying nearly all the saturation; pixiv's own UI recedes into neutral greys so that nothing competes with a creator's color choices. The brand anchor is **pixiv blue** (`#0096fa`) — a bright, friendly cyan-leaning blue that sits on the "approachable" end of the blue spectrum rather than the corporate-indigo end. It's the color of every link, every primary button, every active tab, and the "i" stylization of the wordmark. Against the neutral chrome it reads as cheerful and energetic, matching a community built on amateur and professional creativity rather than enterprise software. The logo wordmark is a lowercase geometric sans where the dot of the "i" is rendered in pixiv blue — a small but consistent brand signature. What defines pixiv visually is **content-first restraint with bursts of system color**. The grid of thumbnails is the hero; UI is quiet and grey until you reach an interactive element, at which point pixiv blue (for navigation/CTAs) or pixiv red (`#ff4060`, for the signature "like"/bookmark heart) appears. The atmosphere is light, dense, and tag-driven — a high-information, scroll-forever experience optimized for discovery, with Japanese as the primary language and a heavy reliance on system fonts for fast rendering across an enormous, device-diverse user base. The hex values, the gallery-wall sentence, the cyan-leaning / approachable-not-corporate-indigo sentence, the wordmark-dot sentence, the content-first-restraint sentence, and the scroll-forever / Japanese-primary / system-font sentence are the source's own. The characterizations built on them — UI receding so artwork supplies saturation; cheerful and energetic against enterprise software; the thumbnail grid as hero; bursts of system color only at interactive elements — are a derived editorial implementation inference from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. pixiv launched in **September 2007**, created by Takahiro Kataoka, as a social-networking and contest service where illustrators could post work and receive feedback through bookmarks, comments, and rankings. It is operated by **pixiv Inc.** (ピクシブ株式会社), headquartered in Sendagaya, Tokyo. The name "pixiv" blends "pixel" with the idea of a living, interactive (-iv) creative space. From a niche illustrator board it grew into the dominant hub of Japanese online art culture, hosting **tens of millions of registered users** and **hundreds of millions of works** spanning original illustration, manga, novels, and fan art. The design's job is precise: **disappear behind the art**. Unlike Western social platforms that brand every pixel, pixiv keeps its own surfaces neutral grey so the only saturated color on screen is what a creator made. pixiv blue (`#0096fa`) is the friendly thread that ties navigation together; pixiv red (`#ff4060`) is the heartbeat of community appreciation. Together they form a two-note system that never overpowers the gallery. pixiv anchors a broader ecosystem — **pixiv FANBOX** (creator subscriptions), **BOOTH** (creator marketplace), **pixiv Sketch** (live drawing), **pixivision** (editorial), and **pixiv FACTORY** (print-on-demand) — all sharing the same blue accent and content-first restraint. The brand promise across all of them is the same: lower the friction between making something and finding the people who'll love it. What pixiv refuses: the algorithmic opacity and engagement-maximizing dark patterns of large Western social networks, the sterile minimalism of enterprise SaaS, and any visual language that would compete with the artwork. The aesthetic is amateur-friendly, dense, tag-driven, and proudly Japanese — a community gallery, not a feed engine. The year 2007, the founder, the operator and headquarters, the name-blend sentence, the user and work counts, the disappear-behind-the-art job, the two-note system, the five named ecosystem products, the brand-promise sentence, the refusal list, and that closing community-gallery sentence are the source's own narrative facts; they do not by themselves supply interface tokens. The source HTML comment separately records a **2025 logo refresh** (`new_logo_2025` SVG) as WebFetch confirmation of pixiv Inc. operation; that year-and-mark sentence is the same comment's narrative, not a token sheet. Classifying that founding-and-ecosystem narrative, including the closing community-gallery sentence and the 2025 logo-refresh writing, as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not pixiv-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks, each naming a YAML `use` string or a §4 control the source records, is a derived editorial implementation inference from the verified surfaces; it is not pixiv-authored or a separately published UI specification. They do not come from the source's Personas section.

- Discover artwork on the thumbnail grid (YAML `thumbnail-card` use: `Artwork thumbnail — atomic discovery unit`).
- Search tags and keywords from the global search pill (YAML `search` use: `Global search pill, focus white + #0096fa border`).
- Follow, Post, or Login from the primary CTA (YAML `button-primary` use: `Primary CTA — Follow, Post, Login (~40px)`).
- Bookmark a work (source §4 Bookmark Heart use: `The core engagement action — appears on every thumbnail hover and the artwork detail page`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its entries fictional archetypes informed by publicly described pixiv user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: millions of artists; illustrators; creators and fans as peers in a shared hobby. Dropping the fictional biographies rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

- pixiv Blue (`#0096fa`) as the universal interactive/navigation accent — bright, friendly, cyan-leaning
- pixiv Red/Pink (`#ff4060`) reserved for the bookmark "heart" and engagement signals
- Content-first: artwork supplies saturation, UI stays neutral grey
- System-font stack (Hiragino, Yu Gothic, Meiryo, Noto Sans JP) for fast multi-device rendering
- Dense thumbnail grids — discovery and tagging are the core interaction
- Soft 4–8px corner radii, minimal shadows, flat-but-warm surfaces
- Light theme default with a true dark theme (`#1f1f1f` surfaces) for long browsing sessions

### Principles

These eight items are a derived editorial implementation inference from the verified surfaces; they are not pixiv-authored or a separately published UI specification. The source states them in its own Principles section.

1. **The art is the only thing allowed to be loud.** Every UI decision asks: does this add color/contrast that competes with the thumbnail grid? If yes, mute it. Chrome stays grey.
2. **Two-note color system.** Blue (`#0096fa`) is navigation and action; Red (`#ff4060`) is bookmark and appreciation. No third brand hue. Semantic colors exist but stay quiet.
3. **Discovery is infinite.** Feeds have no bottom. Design for endless scroll, lazy-load aggressively, and make every thumbnail a doorway.
4. **Tags are navigation, not decoration.** A tag is a tappable, blue, first-class way to move through the site. Treat tag pills as primary UI.
5. **Metadata whispers.** View counts, likes, and timestamps are 12px grey. Stats inform; they never dominate or shame.
6. **System fonts for speed.** No custom display face. The grid must paint instantly on any device, in any of dozens of locales.
7. **Borders over shadows.** Define surfaces with 1px `#dddddd` borders. Reserve elevation for hover affordances and true overlays.
8. **Respect the creator and the viewer equally.** Content gates are neutral and clear; engagement is celebrated quietly; nothing gatekeeps skill or shames participation.

### Application rules

The source states these as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

- Use pixiv Blue (`#0096fa`) for all navigation, links, and primary CTAs
- Reserve pixiv Red (`#ff4060`) for the bookmark heart and engagement signals
- Keep UI chrome neutral grey so artwork supplies the color
- Use the system-font stack with JP faces (Hiragino, Yu Gothic, Noto Sans JP)
- Make thumbnails edge-to-edge with 12–16px gutters
- Show metadata (views, likes) small and grey — never let stats outshine art
- Treat tags as primary navigation, colored pixiv blue
- Provide a true dark theme (`#1f1f1f`) for long browsing sessions

### Avoid

The source states these as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

- Don't saturate the chrome — the artwork is the only thing allowed to be loud
- Don't use pixiv Red for non-engagement UI (it means "like/bookmark")
- Don't add heavy or colored shadows — prefer 1px borders
- Don't use bold weight for long body text — 700 is for titles only
- Don't enlarge view/like counts; they are quiet metadata
- Don't crop or letterbox the lightbox image with blur — use a clean dark scrim
- Don't introduce a custom display font; the system stack is intentional for speed
- Don't use radius > 8px except for the search pill, avatars, and toggles

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. YAML writes lowercase hex; source §2 spells several of the same roles with the same hex. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping catalog `primary_color` `#0096fa` beside `tokens.colors.primary`, keeping `tokens.colors.canvas` `#ffffff` off `tokens.colors.on-primary` `#ffffff` as two keys that share a hex, keeping `tokens.colors.heading` `#1a1a1a` off the Grey 900 writing of the same hex, keeping `tokens.colors.body` `#666666` off the Grey 700 writing, keeping `tokens.colors.label` `#333333` off the Grey 800 writing, keeping `tokens.colors.grey-400` `#cccccc` off the Heart Outline writing of the same hex, keeping `tokens.colors.engagement-red` `#ff4060` off `tokens.colors.error` `#e3413f`, keeping YAML grey-50…grey-600 as six keys rather than a single grey, keeping `#aaaaaa` Text Secondary Dark as a §2-only writing with no YAML key, keeping Overlay Scrim `rgba(0,0,0,0.6)` as a §2-only writing, treating documented pixiv blue as the HTML-comment documented brand color while treating engagement red, neutral greys, and dark-theme surfaces as the HTML-comment interpretive reconstructions of observed UI conventions, and refusing to resolve the §4 live-DOM footer against that interpretive class, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

**Primary**

- **pixiv Blue** (`#0096fa`): Primary interactive color — links, primary CTAs, active tabs, focus rings, the wordmark dot. The single most recognizable brand token. Token-set path `tokens.colors.primary`. Catalog `primary_color` `#0096fa` is the same blue on a second writing. Source HTML comment: documented pixiv brand color.
- **pixiv Blue Dark** (`#0086e0`): Hover/pressed state for blue elements. Token-set path `tokens.colors.primary-hover`.
- **pixiv Blue Light** (`#e3f3ff`): Tinted informational backgrounds, selected chips, subtle blue surfaces. Token-set path `tokens.colors.primary-tint`.
- **Pure White** (`#ffffff`): Page background, card/thumbnail surface in light theme. Token-set path `tokens.colors.canvas`. Same hex as `tokens.colors.on-primary`; it stays a second key.
- **On-primary** (`#ffffff`): Text on pixiv Blue fills. Token-set path `tokens.colors.on-primary`. Same hex as `tokens.colors.canvas`; it stays a second key.
- **Near-Black Text** (`#1a1a1a`): Primary heading and body text on light surfaces. Token-set path `tokens.colors.heading`. Source §2 also writes this hex as Grey 900. Both writings stay.

**Engagement (Brand Signature)**

- **pixiv Red** (`#ff4060`): The bookmark/like heart, engagement counts, "新着" (new) accents. pixiv's second iconic color — energetic coral-red used sparingly but recognizably. Token-set path `tokens.colors.engagement-red`. Source HTML comment: interpretive reconstruction.
- **Heart Outline** (`#cccccc`): Un-bookmarked heart resting state. Same hex as `tokens.colors.grey-400`; this is the §2 engagement writing, not a YAML color key of its own.

**Semantic**

- **Success Green** (`#4caf50`): Upload success, confirmations, positive system messages. Token-set path `tokens.colors.success`.
- **Error Red** (`#e3413f`): Form errors, destructive actions, validation failures. Distinct from the warmer engagement red. Token-set path `tokens.colors.error`. This is not `tokens.colors.engagement-red`.
- **Warning Amber** (`#ff9800`): Pending states, R-18 content gates, attention banners. Token-set path `tokens.colors.warning`.
- **Premium Gold** (`#ffb300`): pixiv Premium membership accents, badges, upsell surfaces. Token-set path `tokens.colors.premium-gold`.

**Neutral Scale (Light Theme)**

- **Grey 50** (`#fafafa`): Lightest surface, page wash behind cards. Token-set path `tokens.colors.grey-50`.
- **Grey 100** (`#f5f5f5`): Secondary background, hover fills, input backgrounds. Token-set path `tokens.colors.grey-100`.
- **Grey 200** (`#eeeeee`): Card fills, disabled surfaces. Token-set path `tokens.colors.grey-200`. This is not `tokens.colors.canvas`.
- **Grey 300** (`#dddddd`): Default borders, dividers. Token-set path `tokens.colors.grey-300`. Source §2 Surface & Borders also writes **Border Default**: `#dddddd`.
- **Grey 400** (`#cccccc`): Strong borders, icon outlines, inactive hearts. Token-set path `tokens.colors.grey-400`. Source §2 also writes **Border Strong**: `#cccccc` and **Heart Outline**.
- **Grey 500** (`#999999`): Placeholder text, disabled labels. Token-set path `tokens.colors.grey-500`.
- **Grey 600** (`#858585`): Caption text, secondary metadata, tag counts. Token-set path `tokens.colors.grey-600`.
- **Grey 700** (`#666666`): Body text on light surfaces, secondary labels. Token-set path `tokens.colors.body`. Source §2 names this Grey 700; YAML has no `grey-700` key.
- **Grey 800** (`#333333`): Strong labels, navigation text, sub-headings. Token-set path `tokens.colors.label`. Source §2 names this Grey 800; YAML has no `grey-800` key.
- **Grey 900** (`#1a1a1a`): Primary text, headings. Same hex as `tokens.colors.heading`; YAML has no `grey-900` key.

**Dark Theme**

- **Surface Base** (`#1f1f1f`): Dark-theme page background. Token-set path `tokens.colors.dark-surface`. Source HTML comment: interpretive reconstruction.
- **Surface Raised** (`#2b2b2b`): Cards, headers, raised panels in dark mode. Token-set path `tokens.colors.dark-raised`.
- **Surface Border** (`#3a3a3a`): Dividers and borders in dark mode. Token-set path `tokens.colors.dark-border`.
- **Text Primary Dark** (`#f0f0f0`): Primary text on dark surfaces. Token-set path `tokens.colors.dark-text`.
- **Text Secondary Dark** (`#aaaaaa`): Secondary text on dark surfaces. No YAML color key; this is a §2-only writing.
- **pixiv Blue stays `#0096fa`** in dark mode — the accent does not shift.

**Surface & Borders (source §2, kept as written)**

- **Border Default**: `#dddddd`. Card edges, input borders, list dividers.
- **Border Strong**: `#cccccc`. Active inputs, emphasized separators.
- **Overlay Scrim**: `rgba(0,0,0,0.6)`. Modal/lightbox backdrops — darker than typical to let illustrations pop in the viewer. No YAML color key.
- **Tag Chip**: `#f5f5f5` bg / `#0096fa` text. The ubiquitous tag pill. Same hexes as `tokens.colors.grey-100` and `tokens.colors.primary`; this is the §2 chip writing.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 24 | `tokens.spacing.lg` |
| xl | 32 | `tokens.spacing.xl` |
| xxl | 48 | `tokens.spacing.xxl` |
| section | 64 | `tokens.spacing.section` |

Source §5 also writes a base unit of `4px`, common values 4px, 8px, 12px, 16px, 24px, 32px, 48px, grid gutters 12px–16px between thumbnails, and section spacing 32px between discovery blocks. `tokens.spacing.section: 64` is a YAML step; it is not the §5 `32px` between discovery blocks, and it is not `tokens.spacing.xl: 32`. `tokens.spacing.md: 12` is not `tokens.rounded.sm: 4` and is not the 12px Caption role. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 8` and is not the 16px Subtitle role. `tokens.spacing.xxl: 48` is not the button `large` 48px height. Keeping each number on its own key path, and keeping YAML `section: 64` beside the §5 `32px` discovery-block writing rather than collapsing them, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| sm | 4 | `tokens.rounded.sm` |
| md | 6 | `tokens.rounded.md` |
| lg | 8 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

Source §5 Border Radius Scale: Sharp (`4px`) Inputs, tag pills, small badges; Standard (`6px`) Buttons; Comfortable (`8px`) Cards, thumbnails, modals; Pill (`20px`) Search bar; Round (`9999px`) Avatars, toggle tracks. YAML `tokens.components.search.radius` is `9999`; source §4 Search Bar writes Radius `20px` (pill). Both writings stay. `tokens.rounded.full: 9999` is a YAML step; it is not the search-bar `20px` pill, and it is not `tokens.rounded.lg: 8`. Source Avoid: Don't use radius > 8px except for the search pill, avatars, and toggles. Keeping `sm` / `md` / `lg` / `full` on their own paths, keeping the §4 `20px` search pill beside YAML search `9999`, and keeping avatars/toggle tracks on the Round `9999px` writing, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

Source HTML comment: component geometry (radii, paddings) are interpretive reconstructions of pixiv's observed UI conventions. Treating that class as the source's own evidence writing rather than as live computed geometry is a derived editorial implementation inference from the verified surfaces; it is not pixiv-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, 1px `#eeeeee` border | Page background, bordered panels |
| Subtle (Level 1) | `0 1px 3px rgba(0,0,0,0.08)` | Sticky header, raised list rows. No YAML shadow key. |
| Standard (Level 2) | `0 2px 8px rgba(0,0,0,0.12)` | Thumbnail hover-lift, dropdowns. YAML `tokens.shadow.ambient` writes the same lift as `rgba(0,0,0,0.12) 0px 2px 8px`. Both writings stay. |
| Elevated (Level 3) | `0 4px 12px rgba(0,0,0,0.2)` | Toasts, popovers, tooltips. YAML `tokens.shadow.standard` writes `rgba(0,0,0,0.2) 0px 4px 12px`. Both writings stay. |
| Modal (Level 4) | `0 8px 28px rgba(0,0,0,0.25)` | Dialogs, modals. YAML `tokens.shadow.elevated` writes `rgba(0,0,0,0.25) 0px 8px 28px`. Both writings stay. |

**Shadow Philosophy** (source §6, kept as written): pixiv uses shadows sparingly and prefers 1px borders to define surfaces. Because the content is already visually rich, heavy elevation would add noise and compete with artwork. Shadows appear mainly on hover (to signal interactivity) and on true overlays (toasts, modals). Pure neutral black at low opacity — no colored shadows.

Toggle thumb shadow is a component field: `0 1px 2px rgba(0,0,0,0.2)`. It is not `tokens.shadow.standard`. Input named Focus ring is `0 0 0 2px rgba(0,150,250,0.15)`. It is not a YAML shadow key.

**Blur Effects** (source §6, kept as written): The sticky header may apply a light backdrop blur over scrolling content. The lightbox viewer uses no blur — just a near-opaque dark scrim so the illustration is the only thing in focus. No numeric blur token is recorded; none is invented.

Keeping YAML shadow strings beside the §6 table writings, keeping Subtle `0 1px 3px rgba(0,0,0,0.08)` off the YAML map, keeping the toggle thumb shadow and the input Focus ring off the YAML shadow keys, and keeping the qualitative header-blur writing without inventing a blur radius, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

### Motion

Source-stated durations, kept as duration tokens. They are not easing curves. Source HTML comment: motion tokens are interpretive reconstructions of pixiv's observed UI conventions. Treating the duration table and easing names as source-stated rather than computed CSS, and treating that interpretive-reconstruction class as the source HTML-comment class, is a derived editorial implementation inference from the verified surfaces; it is not pixiv-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State flips that need no transition (follow toggle text) |
| `motion-fast` | 150ms | Hover, focus, fade-ins of hover affordances (bookmark heart) |
| `motion-standard` | 250ms | The default — dropdowns, tab content, card transitions |
| `motion-pop` | 200ms | Bookmark heart scale-pop |
| `motion-slow` | 350ms | Modal/lightbox open, page-level transitions |

`motion-pop` `200ms` is not `motion-fast` `150ms` and is not `motion-standard` `250ms`. `motion-slow` `350ms` is the source's duration. Keeping `motion-pop` `200ms` off `motion-fast` `150ms` and off `motion-standard` `250ms`, and keeping `motion-slow` `350ms` as the source's duration rather than merging duration rows, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

Source-stated easing names (uncomputed cubic-bezier omitted; names and uses kept):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-enter` example) | Things appearing — modals, toasts, dropdowns |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Things leaving — dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-standard` example) | Two-way — tabs, hover lifts |
| `ease-pop` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-spring` example; **Reserved for the bookmark-heart overshoot — the one place a spring is licensed**) | Reserved for the bookmark-heart overshoot — the one place a spring is licensed |

**Signature motions** (source-stated):

1. **Heart pop.** On bookmark, the heart fills `#ff4060` and scales `1.0 → 1.25 → 1.0` over `motion-pop` with `ease-pop`. The overshoot is the brand's single moment of playfulness — it celebrates appreciation. Used nowhere else.
2. **Thumbnail hover lift.** On hover, a card raises with `0 2px 8px rgba(0,0,0,0.12)` over `motion-fast / ease-standard` and the bookmark heart fades in top-right. Signals "this is interactive" without disturbing the grid.
3. **Lightbox open.** The viewer fades the dark scrim in over `motion-slow / ease-enter` while the image scales from 0.96 → 1.0. Dismissal reverses faster with `ease-exit` — exiting feels lighter than entering.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant` and the heart pop becomes a simple color fill. The site stays fully usable, just static.

Treating those signature-motion characterizations — the brand's single moment of playfulness, Used nowhere else, Signals "this is interactive" without disturbing the grid, exiting feels lighter than entering, The site stays fully usable, just static — as a derived editorial implementation inference from the verified surfaces; they are not pixiv-authored or a separately published UI specification. The scale values, durations, and the `prefers-reduced-motion: reduce` line are the source's own.

Exact cubic-bezier curves are unattributed and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists. Naming those five evidence kinds as the promotion gate for a further curve, refusing a partial confirmation, keeping the five duration rows and four easing names, and treating motion tokens as the source HTML-comment interpretive-reconstruction class, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The source records that pixiv ships **no custom brand typeface**; brand personality lives in color and layout, not a proprietary font. The 2025 logo refresh (`new_logo_2025` SVG) is a mark refresh, not a type family. |
| Live computed surface-use | YAML `tokens.typography.family.sans` is `system-ui`. Source §4 footer: live DOM getComputedStyle on `https://www.pixiv.net`. "Live stylesheet values were not exposed in the fetched markup." Both writings stay. |
| Recorded JP stack | `-apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic Medium", "Meiryo", "Noto Sans JP", "Helvetica Neue", Arial, sans-serif` |
| Latin/Numerals | Falls through to `-apple-system`/`Helvetica Neue`/`Arial` ahead of the JP faces so Latin glyphs render cleanly. |
| YAML mono | `tokens.typography.family.mono`: `SF Mono`. Source §3 Monospace: `"SF Mono", Consolas, "Courier New", monospace` — used only in dev/embed contexts. |
| Official distributed asset | No pixiv-exclusive distributed type family was verified. |
| License | This record does not establish a pixiv font-license notice. The stack members are platform/system faces, not a pixiv brand asset. |

Reading those evidence-class rows as the source's resolution table rather than as a published pixiv type specimen, keeping YAML `system-ui` beside the recorded JP stack, keeping the §4 live-DOM footer beside the HTML-comment not-exposed writing, recording that no pixiv-exclusive distributed type family was verified, and recording that this packet does not establish a pixiv font-license notice, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

### Family

- **YAML sans path:** `system-ui` — Token-set path `tokens.typography.family.sans`.
- **Primary (JP) stack:** `-apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic Medium", "Meiryo", "Noto Sans JP", "Helvetica Neue", Arial, sans-serif`
- **YAML mono path:** `SF Mono` — Token-set path `tokens.typography.family.mono`.
- **Monospace stack:** `"SF Mono", Consolas, "Courier New", monospace` — used only in dev/embed contexts.

**System-stack first** (source §3 Principles, kept as written): Speed over custom type. The font must already be on the device so a thumbnail grid paints instantly. Do not present `-apple-system`, `BlinkMacSystemFont`, `Hiragino Sans`, `Yu Gothic Medium`, `Meiryo`, `Noto Sans JP`, `Helvetica Neue`, or `Arial` as a replacement for the YAML `system-ui` key, and do not present `system-ui` as a proprietary pixiv face. pixiv ships **no custom brand typeface**. Keeping the YAML `system-ui` key beside the JP stack, keeping mono `SF Mono` beside the longer monospace stack, and refusing a custom display-font substitute, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

### Type roles

YAML records size, weight, unitless `lineHeight`, and `use`. Source §3 Hierarchy table writes px size, weight, px line-height with the unitless ratio in parentheses, letter-spacing `normal`, and a Notes column. Both writings stay; the longer Notes string is the table. Pairing each role to the token-set path named beside it, keeping YAML unitless `lineHeight` beside the table's px (ratio) pair rather than converting one into the other, keeping letter-spacing `normal` from the table, and keeping the longer table Notes where they extend the YAML `use`, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| Role | Size | Weight | Line height | Letter spacing | Token-set path | Use (longer writing) |
|---|---:|---:|---|---|---|---|
| Display | 28 / 28px | 700 | YAML `1.36` · table 38px (1.36) | normal | `tokens.typography.display` | Landing hero, section campaign headers (YAML: `Landing hero, campaign headers`) |
| Heading Large | 22 / 22px | 700 | YAML `1.36` · table 30px (1.36) | normal | `tokens.typography.heading-lg` | Page titles, artwork title on detail page (YAML: `Page titles, artwork title`) |
| Heading | 18 / 18px | 700 | YAML `1.44` · table 26px (1.44) | normal | `tokens.typography.heading` | Card section titles, ranking headers |
| Subtitle | 16 / 16px | 600 | YAML `1.50` · table 24px (1.50) | normal | `tokens.typography.subtitle` | List section labels, modal headers |
| Body Large | 15 / 15px | 400 | YAML `1.60` · table 24px (1.60) | normal | `tokens.typography.body-lg` | Artwork descriptions, captions |
| Body | 14 / 14px | 400 | YAML `1.57` · table 22px (1.57) | normal | `tokens.typography.body` | Standard reading text, comments |
| Body Small | 13 / 13px | 400 | YAML `1.54` · table 20px (1.54) | normal | `tokens.typography.body-sm` | Metadata, secondary info |
| Caption | 12 / 12px | 400 | YAML `1.50` · table 18px (1.50) | normal | `tokens.typography.caption` | Tag counts, timestamps, view counts |
| Micro | 11 / 11px | 400 | YAML `1.45` · table 16px (1.45) | normal | `tokens.typography.micro` | Badge text, overlay counters on thumbnails (YAML: `Badge text, thumbnail overlay counters`) |

**Three weights** (source §3): 400 (body), 600 (emphasis), 700 (headings/titles). Bold is for titles, never long body. **JP line-height runs generous**: Japanese text uses 1.5–1.6 line-height for legibility of dense kanji at small sizes. **Numbers are metadata, not heroes**: View/like counts render small (12px) and grey — the art is the hero, not the stats. **Tags are typographic UI**: Tag pills use 13px text and are themselves a primary navigation surface, colored pixiv blue.

`tokens.typography.caption` size 12 is not `tokens.spacing.md: 12`. `tokens.typography.micro` size 11 is not a spacing step. `tokens.typography.subtitle` size 16 is not `tokens.spacing.base: 16`. Keeping `tokens.typography.caption` size 12 off `tokens.spacing.md: 12`, keeping `tokens.typography.micro` size 11 off the spacing scale, and keeping `tokens.typography.subtitle` size 16 off `tokens.spacing.base: 16`, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

### Assets

- Catalog logo mapping is Simple Icons (`type: simpleicons`, `slug: pixiv`). Classing the catalog entry as a third-party icon-set rendering rather than a pixiv-distributed file, and keeping the 2025 logo refresh (`new_logo_2025` SVG) as a WebFetch-confirmed mark refresh rather than as that Simple Icons mapping, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.
- The wordmark is a lowercase geometric sans where the dot of the "i" is rendered in pixiv blue.
- Artwork thumbnails, illustrations, manga pages, and novels on the grid are creator-uploaded content; do not replace them with invented brand-color decoration. Refusing to replace that artwork with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not pixiv-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not pixiv-authored or a separately published UI specification. The source state contract, preserved here in full:

| State | Treatment |
|---|---|
| **Empty (no posts yet)** | Friendly one-line nudge in `#666666` ("まだ作品がありません — 投稿してみよう") plus a blue primary CTA to post. Often backfilled with recommended works rather than left bare. |
| **Empty (search no results)** | `#858585` caption ("条件に合う作品が見つかりませんでした") with suggested popular tags as blue pills below. |
| **Loading (grid)** | Skeleton thumbnail blocks at `#f5f5f5`, exact card dimensions, 8px radius, 1.2s shimmer. Lazy-load fills in as the user scrolls. |
| **Loading (lightbox)** | Low-res blurred placeholder swaps to full-res; spinner in white centered on the dark scrim. |
| **Error (inline field)** | 1px `#e3413f` border on the input, 12px `#e3413f` help text below, one actionable sentence. |
| **Error (toast)** | `#333333` bg, white 14px text, bottom-center, ~2.5s dismiss. |
| **Error (page)** | Centered illustration-light message in `#666666`, retry button in `#0096fa`. Reserved for outages. |
| **Bookmarked (success)** | Heart fills `#ff4060` with 200ms scale-pop, count increments, toast "ブックマークしました". |
| **Following (success)** | Button flips to "フォロー中" white/grey state instantly; no toast needed — the state change is the feedback. |
| **Content gate (R-18)** | Blurred thumbnail with `#ff4060` "R-18" badge; tap reveals a neutral confirm dialog respecting the user's age setting. |
| **Disabled** | Button drops to `#cccccc` bg / white text; inputs keep `#dddddd` border so geometry is stable. |
| **Dark theme** | All surfaces swap to `#1f1f1f`/`#2b2b2b`, text to `#f0f0f0`/`#aaaaaa`; accent `#0096fa` and engagement `#ff4060` are unchanged. |

Treating that table as the source state contract rather than a new treatment sheet is a derived editorial implementation inference from the verified surfaces; it is not pixiv-authored or a separately published UI specification.

The source HTML comment records: documented pixiv brand color `#0096fa`; no proprietary brand typeface; engagement red (`#ff4060`), neutral greys, dark-theme surfaces (`#1f1f1f` / `#2b2b2b`), component geometry (radii, paddings), and motion tokens are interpretive reconstructions of pixiv's observed UI conventions, consistent with the brand's content-first, two-note (blue + red) color philosophy. Source §4 footer writes the same URL as verified via live DOM getComputedStyle. Both writings stay. Treating that verified-versus-interpretive split as the source's own evidence class rather than a second token sheet, and refusing to pick the footer or the comment as the winner, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, attaching a YAML `Primitive type` only when the token set records that type on that component, labelling Bookmark Heart / Page Count / Lightbox `not in the token set`, refusing to treat this as a complete state-coverage claim, treating named Focus on the text field and search bar as not `focus-visible` evidence, and treating per-component values as the source HTML-comment interpretive-reconstruction class, are a derived editorial implementation inference from the verified surfaces; they are not pixiv-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. A generic `Focus` observation is not `focus-visible` treatment. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component. The YAML token set records `button-primary`, `button-secondary`, `button-neutral`, `button-follow`, `button-premium`, `input`, `search`, `thumbnail-card`, `content-card`, `tag-pill`, `badge-r18`, `badge-premium`, `tab`, `toast`, `dialog`, and `toggle`. Bookmark Heart, Page Count, and Lightbox are §4-only; each is `not in the token set`.

Button size scale (source §4, height · font · radius): `small` 32px · 13px / 600 · 4px; `medium` (default) 40px · 14px / 700 · 6px; `large` 48px · 15px / 700 · 8px. The `medium` 40px height is the YAML primary `~40px` writing. The `large` 48px height is not `tokens.spacing.xxl: 48`. The `small` 4px radius is `tokens.rounded.sm`; the `medium` 6px radius is `tokens.rounded.md`; the `large` 8px radius is `tokens.rounded.lg`. Keeping that scale as a button-size writing rather than as extra YAML components is a derived editorial implementation inference from the verified surfaces; it is not pixiv-authored or a separately published UI specification.

### Primary (Fill) Button

- Role: Primary CTA — フォロー (Follow), 投稿 (Post), ログイン (Login). ~40px tall.
- Kind: interactive
- Primitive type: `button`
- Anatomy: label
- Background: `#0096fa`
- Text: `#ffffff`
- Border: none
- Radius: 6px (YAML `6` / `tokens.rounded.md`)
- Padding: `10px 20px`
- Font: `14px / 700`
- Hover: `#0086e0`
- Disabled: `#cccccc` bg, `#ffffff` text
- Use: YAML `Primary CTA — Follow, Post, Login (~40px)`
- YAML `tokens.components.button-primary`
- Observed: default recipe from YAML / §4; source HTML comment: interpretive reconstruction of component geometry

YAML `6` is this control's radius field; it is not `tokens.spacing.xs: 4` and not `tokens.rounded.full: 9999`. `#0096fa` is this control's fill and `tokens.colors.primary`; it is not engagement red. Hover `#0086e0` is `tokens.colors.primary-hover` on this control; it is not copied onto a `focus-visible` row. Keeping those fields unmerged, and treating this control's exact per-component values as the source HTML-comment interpretive class, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/§4 primary CTA |
| hover | applicable | Pointer-web button; §4 Hover `#0086e0` |
| focus-visible | applicable | Interactive control; visual treatment omitted. Named Focus on fields is not this row. |
| disabled | applicable | Button control; §4 / §14 Disabled `#cccccc` bg / white text |
| loading | applicable | 投稿 / ログイン is a commit; visual treatment omitted |
| error | applicable | A post or login commit can fail; §14 Error (page) is a product notice, not a paint on this button; visual treatment omitted |
| success | applicable | A post or login commit can complete; visual treatment omitted |

### Secondary (Outline) Button

- Role: Secondary action paired with a primary (キャンセル alt, フォロー中 toggled state)
- Kind: interactive
- Primitive type: `button`
- Anatomy: label
- Background: `#ffffff`
- Text: `#0096fa`
- Border: 1px solid `#0096fa`
- Radius: 6px
- Padding: `10px 20px`
- Font: `14px / 700`
- Hover: `#e3f3ff` bg
- Use: YAML `Secondary action, 1px #0096fa border`
- YAML `tokens.components.button-secondary`
- Observed: default recipe from YAML / §4; source HTML comment: interpretive reconstruction of component geometry

`#ffffff` is this control's fill; it is not a dark-theme surface. `#e3f3ff` is this control's hover fill and `tokens.colors.primary-tint`; it is not copied onto a `focus-visible` row. フォロー中 as a toggled state is also the Follow control's following recipe; both writings stay. Treating this control as interpretive reconstruction, keeping its hover tint off `focus-visible`, and keeping キャンセル / フォロー中 as the source's paired-action writing, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML secondary action |
| hover | applicable | Pointer-web button; §4 Hover `#e3f3ff` bg |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a secondary action paired with a primary (キャンセル alt, フォロー中 toggled state); exact request/outcome mapping is unresolved (cancel versus a follow-state paint that also lives on Follow), so those three fields stay omitted at this boundary rather than closed from the §14 rows. Omitting those three fields because mapping is unresolved, rather than closing them from the §14 rows, is a derived editorial implementation inference from the verified surfaces; it is not pixiv-authored or a separately published UI specification.

### Neutral (Grey) Button

- Role: Low-emphasis actions (もっと見る / "show more", filters, cancel)
- Kind: interactive
- Primitive type: `button`
- Anatomy: label
- Background: `#f5f5f5`
- Text: `#666666`
- Border: 1px solid `#dddddd`
- Radius: 6px
- Padding: `10px 20px`
- Font: `14px / 600`
- Hover: `#eeeeee`
- Use: YAML `Low-emphasis action, 1px #dddddd border`
- YAML `tokens.components.button-neutral`
- Observed: default recipe from YAML / §4; source HTML comment: interpretive reconstruction of component geometry

`#f5f5f5` is this control's fill and `tokens.colors.grey-100`; it is not canvas. `#666666` is this control's label and `tokens.colors.body`; it is not heading. Hover `#eeeeee` is `tokens.colors.grey-200` on this control. Treating this control as interpretive reconstruction, and keeping もっと見る beside the English gloss "show more" rather than replacing the Japanese, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML low-emphasis action |
| hover | applicable | Pointer-web button; §4 Hover `#eeeeee` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A low-emphasis action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as low-emphasis actions (もっと見る, filters, cancel); exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows. Omitting those three fields because mapping is unresolved, rather than closing them from the §14 rows, is a derived editorial implementation inference from the verified surfaces; it is not pixiv-authored or a separately published UI specification.

### Follow (Toggle)

- Role: The signature follow toggle — the most-pressed button on the site.
- Kind: interactive
- Primitive type: `toggle`
- Anatomy: label
- Unfollowed: `#0096fa` fill, white text (YAML `fg` `#ffffff`), "+ フォロー"
- Following: `#ffffff` bg, `#999999` text, 1px `#dddddd` border, "フォロー中"
- Radius: 6px
- Use: YAML `Follow toggle`
- YAML `tokens.components.button-follow` (YAML `type: toggle`; YAML `active`: `#ffffff` bg, `#999999` text, 1px `#dddddd` border (following))
- Observed: default and following recipes from YAML / §4; source HTML comment: interpretive reconstruction of component geometry

YAML primitive type is `toggle`, not `button`. Unfollowed fill is `tokens.colors.primary`; unfollowed text is YAML `fg` `#ffffff` beside the source's white-text writing; following label `#999999` is `tokens.colors.grey-500`. §14 Following (success): Button flips to "フォロー中" white/grey state instantly; no toast needed — the state change is the feedback. `motion-instant` 0ms is the follow toggle text flip. Treating this control as a follow commit rather than as a settings switch, keeping YAML `type: toggle`, keeping YAML `fg` `#ffffff` as unfollowed text beside the source's white-text writing rather than only as the following background, and treating "the most-pressed button on the site" as the source's own §4 wording, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML unfollowed Follow toggle |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A follow control can be unavailable; visual treatment omitted |
| loading | applicable | Follow/unfollow is a commit; visual treatment omitted |
| error | applicable | A follow commit can fail; visual treatment omitted |
| success | applicable | §14 Following (success): flips to "フォロー中" instantly; no toast |

### Premium (Gold) Button

- Role: pixiv Premium upsell CTAs
- Kind: interactive
- Primitive type: `button`
- Anatomy: label
- Background: `#ffb300`
- Text: `#ffffff`
- Border: none
- Radius: 6px
- Padding: `10px 20px`
- Font: `14px / 700`
- Use: YAML `Premium upsell CTA`
- YAML `tokens.components.button-premium`
- Observed: default recipe from YAML / §4; source HTML comment: interpretive reconstruction of component geometry

`#ffb300` is this control's fill and `tokens.colors.premium-gold`; it is not warning `#ff9800` and not engagement red. Treating this control as interpretive reconstruction, and keeping premium gold off warning amber, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML Premium upsell CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An upsell CTA can be unavailable; visual treatment omitted |
| loading | applicable | Premium upsell is a commit; visual treatment omitted |
| error | applicable | An upsell commit can fail; visual treatment omitted |
| success | applicable | An upsell commit can complete; visual treatment omitted |

### Bookmark Heart

- Role: The core engagement action — appears on every thumbnail hover and the artwork detail page
- Kind: interactive
- Primitive type: not in the token set
- Default (un-bookmarked): outline heart, stroke `#cccccc`, 24px
- Active (bookmarked): filled heart `#ff4060`, 24px
- Count label: 12px / 400 / `#858585` to the right
- Animation: 200ms scale-pop (`1.0 → 1.25 → 1.0`) on toggle
- Observed: default, active, and success recipes from §4 / §14 / §15

No YAML component key. Stroke `#cccccc` is the Heart Outline / `tokens.colors.grey-400` writing. Fill `#ff4060` is `tokens.colors.engagement-red`. Count 12px grey is Caption / Grey 600. §14 Bookmarked (success): Heart fills `#ff4060` with 200ms scale-pop, count increments, toast "ブックマークしました". Attaching no YAML primitive type, and keeping this control off the button-primary record, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | §4 un-bookmarked outline heart |
| hover | applicable | Pointer-web control; §4 thumbnail hover fades the heart in top-right |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A bookmark control can be unavailable; visual treatment omitted |
| loading | applicable | Bookmark is a commit; visual treatment omitted |
| error | applicable | A bookmark commit can fail; visual treatment omitted |
| success | applicable | §14 Bookmarked (success) + toast "ブックマークしました" |

### Text Field

- Role: Search bar, form fields, comment box (source §4 Text Field use)
- Kind: interactive
- Primitive type: `input`
- Anatomy: value field
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#dddddd`
- Radius: 4px (YAML `4` / `tokens.rounded.sm`)
- Padding: `10px 12px`
- Font: `14px / 400`
- Placeholder: `#999999`
- Focus: border `#0096fa`, subtle `0 0 0 2px rgba(0,150,250,0.15)` ring
- Error: Border 1px solid `#e3413f`; Help text: `#e3413f` 12px below the field
- Use: YAML `Text field, 1px #dddddd border, focus #0096fa`
- YAML `tokens.components.input`
- Observed: default, named Focus, and error recipes from YAML / §4; source HTML comment: interpretive reconstruction of component geometry

Named Focus `border `#0096fa`, subtle `0 0 0 2px rgba(0,150,250,0.15)` ring` is an additional named-source-state, not `focus-visible` evidence, and is not copied onto a `focus-visible` row as a colour. `#333333` is this field's text and `tokens.colors.label`. Placeholder `#999999` is `tokens.colors.grey-500`. Treating this control as interpretive reconstruction, and treating named Focus as not `focus-visible` evidence, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML text field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted. Named Focus is not this row. |
| disabled | applicable | An input can be unavailable; §14 Disabled: inputs keep `#dddddd` border so geometry is stable |
| error | applicable | Form field; §4 Error / §14 Error (inline field) |
| loading | not-applicable | The field itself does not load; §14 Loading (grid) is a page/skeleton treatment |
| success | not-applicable | Bookmark/follow confirmation sits on those controls, not as a paint on this field |

Additional named-source-state: Focus border `#0096fa` with `0 0 0 2px rgba(0,150,250,0.15)` ring. That Focus is not a Core `focus-visible` row. Treating that Focus as an additional named-source-state rather than a Core `focus-visible` row is a derived editorial implementation inference from the verified surfaces; it is not pixiv-authored or a separately published UI specification.

### Search Bar

- Role: Global tag/keyword search — the primary discovery entry point. Pill-shaped.
- Kind: interactive
- Primitive type: `input`
- Anatomy: value field + leading search icon
- Background: `#f5f5f5`
- Text: `#333333`
- Border: 1px solid transparent
- Radius: YAML `9999` / §4 `20px` (pill). Both writings stay.
- Padding: YAML `8px 16px` / §4 `8px 16px 8px 36px` (leading search icon). The longer padding is the table.
- Focus: white bg, `#0096fa` border
- Use: YAML `Global search pill, focus white + #0096fa border`
- YAML `tokens.components.search`
- Observed: default and named Focus recipes from YAML / §4; source HTML comment: interpretive reconstruction of component geometry

Source §9 also records 14px text `#333333` and placeholder `#999999` on this control; those two fields are kept here because they are not restated on the YAML search record (A3). Named Focus (white bg, `#0096fa` border) is not `focus-visible` evidence. YAML radius `9999` is this control's token-set field; §4 / §5 `20px` is the pill writing. Neither replaces the other. `#f5f5f5` is this control's fill and `tokens.colors.grey-100`; it is not canvas. Keeping YAML `9999` beside `20px`, keeping the longer padding, keeping the §9 14px / placeholder writing, and treating named Focus as not `focus-visible`, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML global search pill |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted. Named Focus is not this row. |
| disabled | applicable | A search field can be unavailable; visual treatment omitted |
| loading | not-applicable | Search is a discovery entry; §14 Loading (grid) is the result-grid treatment, not a paint on this field |
| error | not-applicable | Empty (search no results) is a page caption, not a field-error paint |
| success | not-applicable | Discovery search does not commit an outcome on this field |

### Thumbnail Card

- Role: The atomic unit of the entire site — the discovery grid
- Kind: interactive
- Primitive type: `card`
- Anatomy: image + overlay badges + title + author
- Background: `#ffffff`
- Border: none
- Radius: 8px (image corners clipped to match)
- Image: square or aspect-preserved, object-fit cover
- Overlay badges: top-right page-count pill (`rgba(0,0,0,0.6)` bg, white 11px text), top-left R-18/manga tag
- Title: 13px / 700 / `#1a1a1a`, single-line ellipsis below image
- Author: 12px / 400 / `#666666` with 20px avatar
- Hover: bookmark heart fades in top-right; slight `0 2px 8px rgba(0,0,0,0.12)` lift
- Use: YAML `Artwork thumbnail — atomic discovery unit`
- YAML `tokens.components.thumbnail-card`
- Observed: default and hover recipes from YAML / §4; source HTML comment: interpretive reconstruction of component geometry

Source §8: Thumbnail tap: entire card is the tap target. Title 13px / 700 is Body Small size with heading weight; it is not `tokens.typography.body-sm` weight 400. Author 12px is Caption size; it is not Micro. Hover lift is §6 Standard / YAML `tokens.shadow.ambient`. Kind is interactive because the source names the whole card as the tap target and records a hover lift. Treating this card as interpretive reconstruction, keeping title 13px / 700 off the Body Small 400 role, and reading the entire-card tap target as interactive-kind evidence, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML artwork thumbnail |
| hover | applicable | Pointer-web card; §4 hover heart fade-in + lift |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A thumbnail link can be unavailable; visual treatment omitted |
| loading | applicable | §14 Loading (grid) skeleton at exact card dimensions, 8px radius, 1.2s shimmer |
| error | not-applicable | The card is a discovery doorway, not a request that fails on the card |
| success | not-applicable | Bookmark success sits on the heart, not as a paint on this card |

### Content Card (panel)

- Role: Ranking blocks, recommendation sections, profile panels
- Primitive type: `card`
- Background: `#ffffff`
- Border: 1px solid `#eeeeee`
- Radius: 8px
- Padding: 16px
- Shadow: none (border-defined)
- Use: YAML `Ranking / recommendation panel, 1px #eeeeee border`
- YAML `tokens.components.content-card`
- Observed: default recipe from YAML / §4; source HTML comment: interpretive reconstruction of component geometry

`#eeeeee` is this panel's border and `tokens.colors.grey-200`; it is not canvas. Padding 16px is this record's field; it is not `tokens.spacing.base: 16` as a replacement. Kind and a state-applicability map are omitted (YAML `type: card`; no interactive-kind confirmation on the panel). Treating this panel as interpretive reconstruction, keeping its border off canvas, and omitting kind and map (C4), are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

### Tag Pill

- Role: Ubiquitous — tags are primary navigation. Every artwork has 5–20.
- Kind: interactive
- Primitive type: `badge`
- Anatomy: `#` prefix + label
- Background: `#f5f5f5`
- Text: `#0096fa`
- Border: none
- Radius: 4px
- Padding: `4px 8px`
- Font: `13px / 400`
- Prefix: "#" rendered in `#999999`
- Hover: `#e3f3ff` bg
- Use: YAML `Tag pill — primary navigation surface`
- YAML `tokens.components.tag-pill`
- Observed: default and hover recipes from YAML / §4; source HTML comment: interpretive reconstruction of component geometry

Kind is interactive because the source names tags as a tappable, first-class way to move through the site. Prefix "#" in `#999999` is a §4 field; YAML does not record the prefix. Touch: Tag pills minimum 32px height for touch (source §8). Treating this pill as interpretive reconstruction, keeping the `#` prefix, and reading tappable-primary-navigation as interactive-kind evidence, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML tag pill |
| hover | applicable | Pointer-web navigation; §4 Hover `#e3f3ff` bg |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tag link can be unavailable; visual treatment omitted |
| loading | not-applicable | A tag is a destination link, not a commit |
| error | not-applicable | A tag is a destination link, not a commit |
| success | not-applicable | A tag is a destination link, not a commit |

### Page Count (on thumbnail)

- Role: Multi-page artwork indicator (e.g. "12P")
- Kind: non-interactive — overlay counter on a thumbnail, not a control
- Primitive type: not in the token set
- Background: `rgba(0,0,0,0.6)`
- Text: `#ffffff`
- Radius: 10px
- Padding: `2px 6px`
- Font: `11px / 700`

No YAML component key. Radius 10px is this badge's field; it is not `tokens.rounded.sm: 4` and not `tokens.rounded.lg: 8`. Background `rgba(0,0,0,0.6)` is the same hex-alpha as Overlay Scrim; this is the page-count writing. Declaring `kind: non-interactive` with that reason, attaching no YAML primitive type, and keeping radius 10px off the rounded scale, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

### R-18 / Content Gate Badge

- Role: Age-restricted content marker
- Kind: non-interactive — marker on a thumbnail; the §14 Content gate (R-18) dialog is a separate product state
- Primitive type: `badge`
- Background: `#ff4060`
- Text: `#ffffff`
- Radius: 4px
- Font: `11px / 700`
- Use: YAML `Age-restricted content marker`
- YAML `tokens.components.badge-r18`

`#ff4060` is this marker's fill and `tokens.colors.engagement-red`. §14 Content gate (R-18): Blurred thumbnail with `#ff4060` "R-18" badge; tap reveals a neutral confirm dialog respecting the user's age setting. That gate is a product state, not a seventh YAML component. Declaring the badge `kind: non-interactive` as a marker, keeping the gate dialog on the capture record rather than as this badge's map, and keeping "R-18" byte-exact, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

### Premium Badge

- Role: Premium member / premium feature marker
- Kind: non-interactive — marker, not a control
- Primitive type: `badge`
- Background: `#ffb300`
- Text: `#ffffff`
- Radius: 4px
- Use: YAML `Premium member / feature marker`
- YAML `tokens.components.badge-premium`

`#ffb300` is this marker's fill and `tokens.colors.premium-gold`; it is not the Premium Button, which is a separate YAML `button` record. Declaring `kind: non-interactive` as a marker, and keeping this badge off the Premium Button map, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

### Underline Tab

- Role: Section switching (イラスト / 漫画 / 小説, ranking periods)
- Kind: interactive
- Primitive type: `tab`
- Anatomy: label + active indicator
- Background: transparent
- Inactive text: `#858585`
- Active text: `#0096fa`
- Active indicator: 2px `#0096fa` bottom border
- Font: `14px / 700`
- Padding: `12px 16px`
- Use: YAML `Section switching`
- YAML `tokens.components.tab` (YAML `active`: `#0096fa` text, 2px bottom border `#0096fa`)
- Observed: default and active recipes from YAML / §4; source HTML comment: interpretive reconstruction of component geometry

Inactive `#858585` is `tokens.colors.grey-600`. イラスト / 漫画 / 小説 stay byte-exact. Treating this control as section switching rather than as a commit, and keeping the three Japanese section names, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML inactive tab |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab switches sections; it does not commit a request |
| error | not-applicable | A tab switches sections; it does not commit a request |
| success | not-applicable | A tab switches sections; it does not commit a request |

### Toast

- Role: "ブックマークしました" (Bookmarked), auto-dismiss ~2.5s, bottom-center
- Kind: non-interactive — auto-dismiss confirmation, not a control
- Primitive type: `toast`
- Background: `#333333`
- Text: `#ffffff`
- Radius: 4px
- Padding: `12px 16px`
- Shadow: `0 4px 12px rgba(0,0,0,0.2)`
- Font: `14px / 400`
- Use: YAML `Bookmark confirmation, ~2.5s dismiss`
- YAML `tokens.components.toast`

`#333333` is this toast's fill and `tokens.colors.label`; it is not heading. Shadow is §6 Elevated / YAML `tokens.shadow.standard` (`rgba(0,0,0,0.2) 0px 4px 12px`); both writings stay. §14 Error (toast) uses the same chrome. Declaring `kind: non-interactive` because the source names auto-dismiss ~2.5s rather than a tap target, and keeping "ブックマークしました" byte-exact, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

### Centered Modal

- Role: Login prompts, settings, confirmation dialogs
- Kind: interactive
- Primitive type: `dialog`
- Background: `#ffffff`
- Radius: 8px
- Padding: 24px
- Shadow: `0 8px 28px rgba(0,0,0,0.25)`
- Backdrop: `rgba(0,0,0,0.6)`
- Use: YAML `Login prompts, settings, confirmations`
- YAML `tokens.components.dialog`
- Observed: default recipe from YAML / §4; source HTML comment: interpretive reconstruction of component geometry

Shadow is §6 Modal / YAML `tokens.shadow.elevated`. Backdrop is Overlay Scrim. Padding 24px is this record's field; it is not `tokens.spacing.lg: 24` as a replacement. Login is a commit that can live in this dialog. Treating this dialog as interactive because the source names login prompts and confirmations, keeping backdrop off the lightbox `rgba(0,0,0,0.9)` writing, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML login prompts, settings, confirmations |
| hover | applicable | Pointer-web dialog; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Dialog actions can be unavailable; visual treatment omitted |
| loading | applicable | Login / confirm is a commit that can wait; visual treatment omitted |
| error | applicable | Login / confirm can fail; visual treatment omitted |
| success | applicable | Login / confirm can complete; visual treatment omitted |

### Lightbox (Artwork Viewer)

- Role: Full-screen artwork viewing — the signature consumption mode
- Kind: interactive
- Primitive type: not in the token set
- Background: `rgba(0,0,0,0.9)` — near-black to maximize illustration contrast
- Image: centered, max viewport, zoom/pan enabled
- Controls: white icons, page counter top-center
- Observed: default and loading recipes from §4 / §14 / §15

No YAML component key. Background `rgba(0,0,0,0.9)` is not Overlay Scrim `rgba(0,0,0,0.6)` and not dark-surface `#1f1f1f`. Source Avoid: Don't crop or letterbox the lightbox image with blur — use a clean dark scrim. §6: The lightbox viewer uses no blur. §14 Loading (lightbox): Low-res blurred placeholder swaps to full-res; spinner in white centered on the dark scrim. §8: Full artwork: responsive max-width in the lightbox, pinch-zoom on mobile. Attaching no YAML primitive type, keeping `rgba(0,0,0,0.9)` off the overlay scrim, and keeping the no-blur scrim constraint, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | §4 lightbox viewer |
| hover | applicable | Pointer-web viewer controls; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Viewer controls can be unavailable; visual treatment omitted |
| loading | applicable | §14 Loading (lightbox) |
| error | not-applicable | The viewer is a consumption mode, not a request that fails on the viewer; §14 Error (page) is the outage notice |
| success | not-applicable | The viewer does not commit an outcome |

### Switch

- Role: Settings (R-18 display, notifications, dark mode)
- Kind: interactive
- Primitive type: `toggle`
- On: `#0096fa` track, white thumb
- Off: `#cccccc` track, white thumb
- Radius: 9999px
- Thumb shadow: `0 1px 2px rgba(0,0,0,0.2)`
- Use: YAML `Settings switch, white thumb, off #cccccc`
- YAML `tokens.components.toggle`
- Observed: on/off recipes from YAML / §4; source HTML comment: interpretive reconstruction of component geometry

YAML primitive type is `toggle`, same string as `button-follow`, on a second record. Radius 9999px is `tokens.rounded.full` / §5 Round. Thumb shadow is this control's field; it is not `tokens.shadow.standard`. This settings switch is not the Follow toggle. Treating this control as a settings switch with no committing request, keeping it off Follow, and keeping YAML `type: toggle` on this second record, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML settings switch |
| hover | applicable | Pointer-web switch; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A settings switch can be unavailable; visual treatment omitted |
| loading | not-applicable | A settings switch has no committing request in the source |
| error | not-applicable | A settings switch has no committing request in the source |
| success | not-applicable | A settings switch has no committing request in the source |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

**Let the art breathe, pack the chrome**: Generous gutters around thumbnails so each illustration reads as its own object, but UI chrome (header, tags, metadata) is dense and efficient. **Edge-to-edge imagery**: Thumbnails and the viewer push to container edges; padding is for text, not images. **Scroll is infinite**: Discovery feeds are designed for endless vertical scroll — there is no "bottom" to optimize toward. Treating those layout behaviors as the source wrote them rather than as a measured cross-viewport specification, keeping YAML spacing unmerged from this layout prose, and keeping Mobile / Tablet / Desktop / Wide as source §8 writings rather than invented breakpoint tokens, are derived editorial implementation inferences from the verified surfaces; they are not pixiv-authored or a separately published UI specification.

### Grid & Container

- Max content width: ~1224px centered on desktop
- Thumbnail grid: responsive auto-fill, ~184px–200px min column width, flowing to 6 columns at full desktop width
- Sidebar (where present): ~240px fixed, content fluid
- Mobile: 2-column thumbnail grid, full-bleed
- Grid gutters: 12px–16px between thumbnails
- Section spacing: 32px between discovery blocks (`tokens.spacing.section: 64` stays on its YAML path; it is not this 32px writing)

### Breakpoints (source §8, kept as written)

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | 2-column thumbnail grid, hamburger nav, full-bleed images |
| Tablet | 768–1024px | 3–4 column grid, condensed sidebar |
| Desktop | 1024–1280px | 5–6 column grid, fixed ~240px sidebar |
| Wide | >1280px | Centered 1224px container, 6 columns, generous gutters |

### Touch Targets

- Buttons: medium ~40px, large ~48px
- Bookmark heart: 44px tap area (24px glyph + padding)
- Thumbnail tap: entire card is the tap target
- Tag pills: minimum 32px height for touch

### Collapsing Strategy

- Sidebar collapses to a hamburger/drawer on mobile
- Multi-column grid reflows to 2 columns on phones
- Inline metadata rows stack vertically on narrow screens
- Sticky bottom action bar (bookmark/follow) on mobile artwork detail
- Search bar collapses to an icon that expands on tap

### Image Behavior

- Thumbnails: object-fit cover, lazy-loaded, square or aspect-preserved
- Avatars: 20–48px, circular
- Full artwork: responsive max-width in the lightbox, pinch-zoom on mobile
- Multi-page works: horizontal swipe carousel on mobile, vertical stack on desktop

YAML spacing is `tokens.spacing.xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 32` · `xxl: 48` · `section: 64`, recorded without a px suffix in the token set.

<!-- design-md:section content-locales -->
## 6. Content & Locales

pixiv speaks to creators and fans as peers in a shared hobby — warm, encouraging, and casual, never corporate. Japanese is the primary voice; English and other localizations are translations layered on top. The tone celebrates making and sharing: prompts nudge ("作品を投稿してみよう" / "try posting a work") rather than command. It avoids the gamified hype of growth-startup copy and the dryness of enterprise tools — it sounds like a generous community manager. Treating those voice adjectives and the register reading as a derived editorial implementation inference from the verified surfaces; they are not pixiv-authored or a separately published UI specification. The Japanese strings and the English glosses beside them are the source's own; the gloss does not replace the Japanese (A5).

| Context | Tone |
|---|---|
| CTAs | Short, inviting verb forms (`投稿`, `フォロー`, `ブックマーク`) |
| Success toasts | Past-tense, friendly (`ブックマークしました`) |
| Error messages | Plain, blameless, actionable — never scold the user |
| Onboarding | Encouraging, low-pressure ("好きな作品を見つけよう" / find works you love) |
| Engagement | Celebratory but quiet — counts shown, never shouted |
| Empty states | Suggestive — "おすすめのタグ" or featured works fill the gap, never a bare "no data" |
| Content gates (R-18) | Neutral, factual, age-respecting — no judgment, just a clear toggle |

**Forbidden moves.** No artificial urgency ("Hurry!"), no shaming low-engagement creators, no condescension toward amateurs. The platform's whole premise is that anyone can post; copy never gatekeeps skill level. Stats are presented, never weaponized. Treating that forbidden-pattern list as source-stated §10 rather than a separately published microcopy specification is a derived editorial implementation inference from the verified surfaces; it is not pixiv-authored or a separately published UI specification.

Recorded strings, kept byte-exact: `フォロー`, `投稿`, `ログイン`, `キャンセル`, `フォロー中`, `+ フォロー`, `もっと見る`, `新着`, `ブックマークしました`, `イラスト`, `漫画`, `小説`, `まだ作品がありません — 投稿してみよう`, `条件に合う作品が見つかりませんでした`, `作品を投稿してみよう`, `好きな作品を見つけよう`, `おすすめのタグ`, `R-18`, `12P`, `ピクシブ`, `ピクシブ株式会社`.

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

These decisions are unnamed values, not permissions to invent. Treating this list as a catalog of source-named unresolved writings, not coverage of domains the source never named, is a derived editorial implementation inference from the verified surfaces; it is not pixiv-authored or a separately published UI specification.

- live stylesheet values in the fetched markup (source HTML comment: not exposed)
- exact cubic-bezier values for `ease-enter` / `ease-exit` / `ease-standard` / `ease-pop` (unattributed; names kept)
- numeric backdrop-blur radius (source: the sticky header may apply a light backdrop blur; no radius)
- `focus-visible` visual treatments (named Focus on the text field and search bar is not that evidence)
- Secondary / Neutral loading·error·success applicability (exact request/outcome unresolved)
- interactive kind and state-applicability map for Content Card (panel)
- pixiv font-license notice
- motion promotion beyond the duration table, easing names, signature motions, and reduced-motion line — promote only after per-component computed capture of all five kinds: transition properties, animation name, duration, easing, and reduced-motion behavior; official documentation of a single curve or duration is not that gate
