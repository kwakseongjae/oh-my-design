# iCook Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

iCook (愛料理) is Taiwan's largest recipe and cooking community platform, built by Polydice Inc. since 2011, and this contract covers the two first-party web surfaces the source inspected for tokens on 2026-06-22: the homepage at `https://icook.tw` and the recipe browse listing at `https://icook.tw/recipes/popular`. Every value stays attached to the surface that established it. Reading iCook as Taiwan's largest recipe and cooking community platform, reading those two inspected pages as this contract's token surfaces, and keeping values attached to the surface that established them, are derived editorial implementation inferences from the verified surfaces; they are not iCook-authored or a separately published UI specification.

The captured interface layer radiates the warmth and approachability of home cooking — warm neutrals, a coral-red brand accent, and generous food photography take center stage. The canvas defaults to a clean warm white (`#ffffff`) accented by gentle off-white surfaces (`#fbfaf8`) and light grey cards (`#f0f0f0`). The dominant personality signal is a vivid coral-red (`#f04646`). It appears on the `下載APP` nav CTA and the `在 iCook App 開啟` recipe button. A softer coral-warm tone (`#f06354`) handles interactive secondary actions: section `更多` links and ghost-style circular carousel navigation buttons. A muted amber orange (`#f0993c`) surfaces on seasonal or special-event badges. Typography leans entirely on the system font stack — `system-ui`, `-apple-system`, `PingFang TC`, `Microsoft JhengHei`. There is no custom display typeface; weight and size do the hierarchy work: category nav tabs at 16px/700, recipe card titles at 20px/700, section headers at 24px/600, and body copy at 14px/400. Body text sits in warm ink-brown (`#564e4a`) instead of black. Depth is shadow-free: cards record `shadow: none`, and separation uses background tints and a warm hairline (`#e0d9d5`). Recipe cards use a 16px radius. The hex values, family names, weights, radii, and surface names in this paragraph are recorded. The characterizations built on them — warmth and approachability of home cooking; photography remaining the hero; coral-red warm enough to evoke the heat of the kitchen rather than alarm-signal red; the brand color kept functionally purposeful; amber extending the warm-food palette without becoming a competing primary; a deliberately utilitarian chrome so cooking content, not interface chrome, earns attention; cozy, food-forward ink; and a modern, friendly 16px container — are a derived editorial implementation inference from the verified surfaces; they are not iCook-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. iCook (愛料理) — literally "love cooking" — was founded in **2011** by **Polydice Inc.** in Taipei, Taiwan, as a recipe-sharing community built around the belief that cooking is an act of love and self-expression accessible to anyone. The name "愛料理" (ài liào lǐ) pairs "love" (愛) with "cooking" (料理) to signal that the platform's mission is emotional, not merely functional. Over fifteen years, iCook grew into Taiwan's leading food platform: **300,000+ recipes** shared by home cooks, food professionals, and passionate community members ("每天都有新食譜" — new recipes every day). The ecosystem expanded from recipes into a lifestyle magazine (生活誌), a food marketplace (市集), cooking video content (愛料理 TV), and the iGood product recommendation service. Together they reflect a vision of cooking as a complete lifestyle practice. The brand holds a deliberately non-intimidating visual identity: warm colors, system fonts, flat design — all signaling that cooking is for everyone, not just for experts. Polydice's choice to build the platform as a community (anyone can post a recipe) rather than a curated editorial voice is reflected in the design's openness and warmth. The year, operating company, city, name etymology, 300,000+ recipe count, everyday-new-recipe promise, 生活誌 / 市集 / 愛料理 TV / iGood expansion, and the closing community-over-editorial sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-ecosystem narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Open `人氣食譜` on `https://icook.tw/recipes/popular`.
- Search from the global search bar.
- Use `下載APP` in the header or `在 iCook App 開啟` on a recipe page.
- Browse category tabs `最新食譜`, `低卡瘦身`, `簡單快速`, `飲料冰品`, and `都丟給電鍋`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable iCook user segments (Taiwanese home cooks, food enthusiasts, health-conscious eaters), not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation is carried into this document or its sidecar. What the source independently records is the audience the platform serves at a group level: Taiwanese home cooks, food enthusiasts, health-conscious eaters. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not iCook-authored or a separately published UI specification.

- Warm coral-red (`#f04646`) as the single CTA/brand accent — evokes kitchen warmth, not urgency
- Secondary interactive coral (`#f06354`) for ghost buttons and text-links
- System CJK font stack (PingFang TC / Microsoft JhengHei) — no custom typeface, maximum legibility
- Pure warm-white canvas (`#ffffff`) with soft surface layers (`#fbfaf8`, `#f0f0f0`) for card separation
- Warm ink-brown (`#564e4a`) instead of black for body text — cozy, food-forward
- Zero drop-shadows — flat depth via background shifts and subtle border radius
- Recipe cards use generous 16px radius for a modern, friendly container feel
- Amber accent (`#f0993c`) for seasonal/event badges — keeps warm-food palette cohesive

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not iCook-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Cooking is for everyone.** iCook removes barriers rather than gatekeeping expertise. *UI implication:* category labels use casual language; beginner-friendly categories like "簡單快速" (Quick & Simple) have equal visual weight as advanced ones.
2. **Food photography leads.** The interface exists to surface beautiful food, not to showcase UI sophistication. *UI implication:* flat, warm neutrals keep the visual focus on food imagery; no shadows compete with photography.
3. **Warmth over precision.** The brand accent is coral-red (warm) rather than a pure red or orange precisely because warmth is the priority signal. *UI implication:* every color decision skews warm — ink brown over black, warm hairlines over cold grey.
4. **Community-built authenticity.** Recipes come from real home cooks, not chefs with credentials. *UI implication:* no gatekeeping visual hierarchy — all recipes presented equivalently; community contributors are the content heroes.
5. **Everyday life, not special occasions.** "300,000 道食譜，每天都有新食譜！" — the promise is daily, not seasonal. *UI implication:* the navigation surfaces everyday categories (簡單快速, 低卡瘦身) as prominently as seasonal features.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not iCook-authored or a separately published UI specification.

- Use coral-red (`#f04646`) exclusively for primary CTAs (app download, recipe-open)
- Use warm coral (`#f06354`) for secondary interactive elements and text links
- Keep body text in ink-brown (`#564e4a`) — never pure black, never cold grey
- Rely on the system font stack — no custom fonts needed for CJK legibility
- Use warm background tints (`#fbfaf8`, `#f0f0f0`) to separate sections without shadows
- Apply 16px radius on recipe photo containers for a friendly, food-forward feel
- Show amber orange (`#f0993c`) only for seasonal or special occasion badges

### Avoid

The source states these seven as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not iCook-authored or a separately published UI specification.

- Spread coral-red across non-CTA elements — it must remain the clear action signal
- Use cold greys or blues for neutral surfaces — the palette stays warm throughout
- Add drop shadows — this is a flat system; depth comes from tint and hairlines
- Use a custom web font — PingFang TC/Microsoft JhengHei are the authoritative CJK stack
- Apply square corners to photo cards — the 16px radius is core to the friendly identity
- Use pure black (`#000000`) for body text — always use ink-brown `#564e4a`
- Introduce a second saturated color — amber and coral are the only accents

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — kitchen-evoking coral, secondary warmth, warm-food amber, cozy ink — that characterization is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification.

Primary brand

- **iCook Coral-Red** (`#f04646`): Primary brand color. The `下載APP` header button and `在 iCook App 開啟` recipe CTA button — the system's single decisive action color. Token-set key `tokens.colors.primary`.
- **Coral Light** (`#ff6060`): A brighter variant appearing on hover/active or banner overlays; softer adaptation of primary. Token-set key `tokens.colors.primary-light`.

Interactive accent

- **Warm Coral** (`#f06354`): Secondary interactive color for ghost circular buttons and section `更多` text links. Close enough to primary to feel cohesive, distinct enough to signal "secondary." Token-set key `tokens.colors.accent-warm`.
- **Amber Orange** (`#f0993c`): Seasonal event label and special-category badge. Token-set key `tokens.colors.amber`.

Neutral and surface

- **Canvas White** (`#ffffff`): Page background, card interiors, search bar, header. Token-set key `tokens.colors.canvas`.
- **Warm Surface** (`#fbfaf8`): Alternate warm-white section backgrounds; subtle differentiation from canvas. Token-set key `tokens.colors.surface`.
- **Surface Warm** (`#efeee8`): Deeper warm surface, used for alternating content zones. Token-set key `tokens.colors.surface-warm`.
- **Surface Mid** (`#f0f0f0`): Homepage story card backgrounds — light neutral grey for recipe photo containers. Token-set key `tokens.colors.surface-mid`.
- **Hairline** (`#e0d9d5`): Dividers, fine borders — warm-tinted to avoid cold grey. Token-set key `tokens.colors.hairline`.
- **On-Primary** (`#ffffff`): Foreground on the coral-red action. Token-set key `tokens.colors.on-primary`. Same hex as Canvas White; the keys stay unmerged. Keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as separate keys that share a hex is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification.

Text hierarchy

- **Ink Brown** (`#564e4a`): Primary text and heading color — a warm dark brown used instead of pure black. Token-set key `tokens.colors.ink`.
- **Muted Brown** (`#89817d`): Secondary copy, metadata, captions, placeholders. Token-set key `tokens.colors.muted`.
- **Muted Light** (`#706860`): Tertiary labels. Token-set key `tokens.colors.muted-light`.
- **Faint** (`#a39b97`): Disabled states, least-emphasis copy. Token-set key `tokens.colors.faint`.

### Spacing

Unitless token-set steps from `tokens.spacing`: `xs 4` · `sm 8` · `md 16` · `base 15` · `lg 24` · `xl 32` · `section 48`. Written as paths: `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 16` · `tokens.spacing.base: 15` · `tokens.spacing.lg: 24` · `tokens.spacing.xl: 32` · `tokens.spacing.section: 48`. The source restates the same scale in px as 4px, 8px, 15px, 16px, 24px, 32px, 48px, with a 4px base unit. Search bar uses 15px horizontal padding (measured live) — that is `tokens.spacing.base: 15`, not `tokens.spacing.md: 16`. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.md: 16` is not `tokens.rounded.lg: 16`. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification.

### Shape

Unitless token-set steps from `tokens.rounded`: `none 0` · `sm 4` · `md 8` · `lg 16` · `full 9999`. Written as paths: `tokens.rounded.none: 0` · `tokens.rounded.sm: 4` · `tokens.rounded.md: 8` · `tokens.rounded.lg: 16` · `tokens.rounded.full: 9999`.

The source's named radius uses, kept on their own rows:

- None (0px): search input, certain nav elements — `tokens.rounded.none`
- Small (4px): buttons, badges, event cards — workhorse interactive radius — `tokens.rounded.sm`
- Medium (8px): inline containers, info boxes — `tokens.rounded.md`
- Large (16px): story cards, photo containers — `tokens.rounded.lg`
- Full (`tokens.rounded.full: 9999`): the unitless full step. The visible scale also writes this step as `9999px`.
- Circle (50% / 9999px): circular icon ghost buttons — the source's named Full use. The ghost-button component record uses `50%`.

`tokens.rounded.full: 9999` stays the unitless full step. The visible scale's `9999px` and the ghost-button `50%` stay on their writings; none replaces another. `tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 16` is not `tokens.spacing.md: 16`. Keeping those paths and writings unmerged is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow | Default — page, cards, inputs |
| Tint (1) | `#f0f0f0` or `#fbfaf8` background shift | Card container differentiation |
| Hairline (2) | `1px solid #e0d9d5` (warm) | Dividers, subtle borders |

Token-set paths: `tokens.shadow.none` `none`; `tokens.shadow.card` `0 1px 4px rgba(0,0,0,0.08)`. The visible card records and this elevation table use `shadow: none` / Flat (0). The YAML `tokens.shadow.card` key is kept on its own path and is not attached as the story-card or event-card treatment. iCook is a shadow-free design system in the source's elevation table — all depth is communicated through background tint changes and thin warm hairlines. Reading that as consistent with a fast, image-first consumer app, and keeping `tokens.shadow.card` unmerged from the cards' recorded `none`, is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, radius, and shadow on the two icook.tw surfaces. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to the easing curves. The durations, easing roles, the omission of the listed curves as not traceable to iCook-computed samples, and the motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not iCook-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Hover state change on buttons/links |
| `motion-standard` | 200ms | Card reveal, tab switch, carousel slide |
| `motion-slow` | 300ms | Section/page transition, modal open |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are not traceable to iCook-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving content (cards, sheets) |
| `ease-exit` | Dismissals |
| `ease-standard` | Bidirectional transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is quiet and functional — this is a content-heavy food platform where the UI should get out of the way.
- Carousel slides transition at `motion-standard / ease-enter`; tab switches are nearly instant (`motion-fast`).
- No bounce or spring effects — food browsing should feel calm and comfortable.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the experience remains fully functional without any animation.

The "calm and comfortable" / "get out of the way" readings are the source's own motion rules; treating them as a current-surface instruction is already covered by the motion-section qualifier above.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The two inspected surfaces describe the product. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification. |
| Live computed surface-use | Both inspected surfaces compute visible text on the system stack: `system-ui`, `-apple-system`, `PingFang TC`, `Microsoft JhengHei`. |
| Official distributed asset | No iCook-exclusive downloadable font package was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification. |
| Declared-only | The source records `system-ui`, `-apple-system`, emoji sets, and `sans-serif` as fallbacks around PingFang TC and Microsoft JhengHei. They are fallbacks and platform faces, not a custom brand face. Classing those stack members as not a custom brand face is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification. |
| License | The source records a pure system font stack. This record does not establish an iCook-issued font-license notice. That upstream-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces the source did not inspect stays outside these two captures. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification. |

### Family

- **Current visible UI family (display and body):** `system-ui, -apple-system, PingFang TC, Microsoft JhengHei`. Token-set paths `tokens.typography.family.display` and `tokens.typography.family.body` share that stack and stay unmerged keys. On macOS/iOS the source names `PingFang TC`. On Windows the source names `Microsoft JhengHei`.
- Do not replace this stack with a hosted or custom web font. A fallback member is never presented as a custom iCook face. Keeping `tokens.typography.family.display` and `tokens.typography.family.body` as unmerged keys that share the stack, and that fallback prohibition, are a derived editorial implementation inference from the verified surfaces; they are not iCook-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set use |
|---|---|---:|---:|---:|---|
| Page H1 | system stack | 28px | 700 | 1.4 | Page title (H1), e.g. 人氣食譜 · `tokens.typography.hero` |
| Section H3 | system stack | 24px | 600 | 1.4 | Section headers (H3) on homepage · `tokens.typography.section` |
| Recipe Card H2 | system stack | 20px | 700 | 1.4 | Recipe card title (H2) in browse lists · `tokens.typography.card-heading` |
| Feature Title H4 | system stack | 18px | 600 | 1.4 | Feature card title / event card heading · `tokens.typography.feature-title` |
| Category Nav | system stack | 16px | 700 | 1.0 | Primary category nav tabs · `tokens.typography.nav` |
| Body Default | system stack | 14px | 400 | 1.15 | Default reading text, nav links, metadata · `tokens.typography.body` |
| Button CTA | system stack | 14px | 500 | 1.0 | Download CTA label · `tokens.typography.button` |
| Caption | system stack | 12px | 400 | 1.5 | Badge labels, small metadata · `tokens.typography.caption` |

Unitless line heights stay ratios: `1.4` on Page H1, Section H3, Recipe Card H2, and Feature Title H4; `1.0` on Category Nav and Button CTA; `1.15` on Body Default; `1.5` on Caption. They are never converted to a replacement px. Keeping the ratios on their token-set paths, rather than replacing them with a computed px, is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification.

Type rules the source states:

- **System-first**: No Google Fonts or custom web fonts — the full hierarchy is expressed through size and weight alone.
- **Weight as voice**: Headlines use 600–700 to convey warmth and directness; body stays at 400 for comfortable readability of Chinese text.
- **Ink brown over black**: Body color is `#564e4a` — a warm dark brown that softens the interface and matches the food-forward personality.

The three rule titles and the warmth / directness / food-forward readings are a derived editorial implementation inference from the verified surfaces; they are not iCook-authored or a separately published UI specification. The sizes, weights, and ratios are recorded.

### Assets

- Logo treatment the source frontmatter records: `logo.type: favicon` and `logo.slug` `https://www.google.com/s2/favicons?domain=icook.tw&sz=128`. That slug is an identity pointer through a third-party favicon service, not an iCook-hosted brand file URL.
- Food photography on story cards and event cards is first-party catalog content; do not replace it with invented brand-color decoration.

Reading the favicon-service URL as an identity pointer rather than a hosted brand file, and reading food photography as first-party catalog content that must not be replaced with invented decoration, is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `input`, `card`, `badge`, `tab`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, a carousel arrow, a tab that only selects, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not iCook-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary Download CTA

- Role: destination control that carries coral-red into the header app-download action
- Primitive type: `button` · Kind: interactive
- Domain: `https://icook.tw`
- Background: `#f04646`
- Text: `#ffffff`
- Radius: 4px
- Padding: 1px 6px
- Font: 14px weight 500
- Height: 32px
- Token-set font record: `14px / 500`
- Token-set use: `App download CTA in nav`
- Published label: `下載APP`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades CTAs rather than switching them to cold grey |
| loading | not-applicable | This control launches the app-download destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed |
| success | not-applicable | Same role reason: reaching the download destination is not an operation with a success result on this button |

### App Open CTA

- Role: destination control that opens the recipe in the iCook App
- Primitive type: `button` · Kind: interactive
- Domain: recipe page
- Background: `#f04646`
- Text: `#ffffff`
- Radius: 4px
- Padding: 8px 16px
- Font: 14px weight 500
- Token-set font record: `14px / 500`
- Token-set use: `Open in iCook App CTA on recipe page`
- Published label: `在 iCook App 開啟`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades CTAs rather than switching them to cold grey |
| loading | not-applicable | This control opens the recipe in the iCook App; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the app-open destination is not an operation this button reports as success |

### More-link Text Button

- Role: section destination text-link for browsing more recipes or events
- Primitive type: `button` · Kind: interactive
- Text: `#f06354`
- Radius: 0px
- Padding: 1px 6px
- Font: 16px weight 400
- Token-set font record: `16px / 400`
- Token-set use: `Section more-link text button`
- Published label: `更多`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web text button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens more recipes or events; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this text button, reports failure |
| success | not-applicable | Same role reason: reaching the more-list destination is not an operation this control reports as success |

### Ghost Circle Icon Button

- Role: carousel prev/next circular icon button
- Primitive type: `button` · Kind: interactive
- Text: `#f06354`
- Border: 1px solid `#f06354`
- Token-set border record: `1px solid #f06354`
- Radius: 50%
- Padding: 8px
- Height: 32px
- Token-set use: `Carousel prev/next circular icon button`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A carousel arrow whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control advances a carousel; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A carousel arrow reports no failed request of its own |
| success | not-applicable | Same role reason: moving the carousel is not an operation with a success result on this button |

### Global Search Bar

- Role: recipe keyword and ingredient search field in nav
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#564e4a`
- Placeholder: `#89817d`
- Border: none
- Radius: 0px
- Padding: 0px 15px
- Height: 44px
- Font: 14px weight 400
- Token-set font record: `14px / 400`
- Token-set use: `Global search bar (recipe keyword input)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A search field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field accepts a query; it does not commit a fetch whose in-progress state it reports on itself |
| error | applicable | The surface contract records an inline search-failed message |
| success | not-applicable | The field does not complete a bookmark or save on itself |

### Homepage Story Card

- Role: featured recipe card on the homepage with food photography
- Primitive type: `card`
- Background: `#f0f0f0`
- Text: `#564e4a`
- Radius: 16px
- Shadow: none
- Token-set use: `Homepage story cards with photo`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Event / Activity Card

- Role: activity/event card in featured sections
- Primitive type: `card`
- Background: `#ffffff`
- Text: `#564e4a`
- Radius: 4px
- Shadow: none
- Token-set use: `Activity/event card with image`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Seasonal / Special Badge

- Role: seasonal ingredient highlight or special event label
- Primitive type: `badge`
- Kind: non-interactive — a seasonal label, not a commit control
- Background: `#f0993c`
- Text: `#ffffff`
- Radius: 4px
- Token-set use: `Seasonal / special label badge`

### Category Chip

- Role: browse category with image overlay
- Primitive type: `badge`
- Kind: non-interactive — a category label, not a commit control
- Text: `#f06354`
- Border: 1px solid `#f06354`
- Token-set border record: `1px solid #f06354`
- Radius: 4px
- Token-set use: `Browse category category with image overlay`
- Published labels: `醬料運用`, `排骨湯`

### Category Navigation Tabs

- Role: main recipe browse tab
- Primitive type: `tab` · Kind: interactive
- Domain: below the search bar
- Text (inactive): `#564e4a`
- Font: 16px / 700
- Padding: 0px 16px
- Height: 40px
- Active: text `#f04646` + 2px bottom border `#f04646`
- Token-set font record: `16px / 700`
- Token-set active: `border-bottom #f04646 2px + text #f04646`
- Token-set use: `Category tabs: 最新食譜 / 人氣食譜 / 低卡瘦身`
- Published labels: `最新食譜`, `人氣食譜`, `低卡瘦身`, `簡單快速`, `飲料冰品`, `都丟給電鍋`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching `最新食譜` or `人氣食譜` is not an operation with a success result |

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not iCook-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no search results)** | Warm white canvas. Ink-brown (`#564e4a`) single line explaining no matches. Warm coral (`#f06354`) suggestion to try different keywords. |
| **Empty (no saved recipes)** | Muted brown (`#89817d`) single line encouraging the user to browse. Path back to homepage or popular recipes. |
| **Loading (recipe list)** | Skeleton blocks on `#f0f0f0` surface at card dimensions (16px radius), warm-tinted. No elevation. |
| **Loading (search results)** | Spinner or skeleton rows inline with the search surface. |
| **Error (search failed)** | Inline warm-toned message in ink-brown; retryable. Plain language explanation, no jargon. |
| **Error (recipe load failed)** | Card-level inline error in warm tone; link to try again or browse similar. |
| **Success (recipe bookmarked)** | Brief toast confirmation in warm coral (`#f06354`) — `已加入收藏`. No celebration animation, functional confirm. |
| **Skeleton** | `#f0f0f0` blocks at final card dimensions, 16px radius, flat pulse (no shadow shimmer). |
| **Disabled** | Muted brown (`#89817d`) with reduced opacity. CTAs fade rather than switching to cold grey. |
| **VIP gated** | Coral-red (`#f04646`) `升級 VIP` label to indicate premium content with an action link. |

These rows describe search, saved-recipe, recipe-list, bookmark, and VIP treatments the source wrote at system level. They are not attached as visual treatments to the destination controls above. That non-attachment reading is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Full-width header with centered search bar. The source's §9 example records that header as a white `56px` bar with the download CTA right-aligned.
- Homepage features large story card blocks at 16px radius in a grid layout
- Recipe browse uses a 2-column list with thumbnail + metadata on desktop
- Category nav tabs run horizontally below the search bar at 40px height
- Spacing restated from `tokens.spacing`: 4 / 8 / 15 / 16 / 24 / 32 / 48
- Shape restated from `tokens.rounded`: none 0 · small 4 · medium 8 · large 16 · `full: 9999` / `9999px`; body-named circle `50% / 9999px` stays on the ghost-button use

Reading the page as food photography first — whitespace and neutral surfaces intentionally minimal so food imagery fills attention — reading surfaces as flat but warm via tints (`#fbfaf8`, `#f0f0f0`) rather than shadows, and reading the 16px story-card radius as a soft, modern container, are derived editorial implementation inferences from the verified surfaces; they are not iCook-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, and the source's reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not iCook-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Single column cards, category tabs scroll horizontally, nav collapses |
| Tablet | 768–1024px | 2-column recipe grid, search prominent |
| Desktop | 1024px+ | Full horizontal nav, multi-column story cards, sidebar metadata |

Touch targets the source records: search bar 44px height; primary CTA button 32px height, padded for thumb reach; category nav tabs 40px height with 16px horizontal padding; ghost icon buttons 32px (8px padding all sides on icon).

Collapsing strategy, as the source states it:

- Category nav tabs: horizontal scroll on mobile; no wrapping
- Story cards: grid collapses to single column
- Header: burger menu or icon-only nav on small breakpoints

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes iCook's voice as **warm, inclusive, and encouraging** — the tone of a knowledgeable friend who loves food and wants everyone to cook with confidence. The homepage title `開啟美好生活，愛料理` ("Begin a beautiful life with iCook") frames cooking not as a chore but as a lifestyle practice. Content tone is conversational and inviting — category labels like `都丟給電鍋` ("Just throw it all in the rice cooker") use casual, humorous Chinese that lowers the barrier for beginners. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not iCook-authored or a separately published UI specification. The Chinese lines themselves are live surface copy.

| Context | Tone |
|---|---|
| Tagline / hero | Warm aspiration. `開啟美好生活，愛料理` — lifestyle invitation, not a feature list. |
| Category labels | Casual, descriptive. `低卡瘦身`, `簡單快速`, `飲料冰品` — plain food language. |
| Humorous entries | Light-hearted. `都丟給電鍋` — approachable, self-deprecating kitchen humor. |
| CTAs | Direct, friendly. `下載APP`, `在 iCook App 開啟`, `更多` — short and actionable. |
| Recipe titles | Descriptive and appetizing. `鑄鐵鍋燜油飯-一鍋到底` — craft cues, ingredient cues. |

**Voice samples (verbatim from live surface):**

- `開啟美好生活，愛料理` — site tagline/logo caption.
- `都丟給電鍋` — category tab label (casual humor).
- `300,000 道食譜，每天都有新食譜！` — page title meta (scale + freshness promise).

Further published strings the source records on the inspected surfaces, kept byte-exact:

- 愛料理
- 開啟美好生活，愛料理
- 都丟給電鍋
- 300,000 道食譜，每天都有新食譜！
- 每天都有新食譜
- 人氣食譜
- 最新食譜
- 低卡瘦身
- 簡單快速
- 飲料冰品
- 精彩活動
- 當季食材
- 下載APP
- 在 iCook App 開啟
- 更多
- 醬料運用
- 排骨湯
- 鑄鐵鍋燜油飯-一鍋到底
- 已加入收藏
- 升級 VIP
- 生活誌
- 市集
- 愛料理 TV
- iGood

**Forbidden register**: cold technical language, urgent/fear-based CTAs, overly formal Chinese (書面語). That forbidden-register list is the source's own; treating it as a current-surface instruction is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification.

Reproduce the Chinese strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Chinese line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification.

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

### Recorded unresolved decisions

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Treating the list as named unresolved values rather than a license to invent is a derived editorial implementation inference from the verified surfaces; it is not iCook-authored or a separately published UI specification.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to iCook-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **YAML card shadow key.** `tokens.shadow.card` is `0 1px 4px rgba(0,0,0,0.08)`. Visible card records and the elevation table use `none`. The paths stay unmerged.
- **Full radius writings.** `tokens.rounded.full: 9999` is the unitless step. The visible scale also writes `9999px` and pairs `50% / 9999px` for circular ghost buttons. The ghost-button component record uses `50%`.
- **Hover and focus-visible treatments.** Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
