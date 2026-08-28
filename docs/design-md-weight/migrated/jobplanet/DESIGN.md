# Jobplanet Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Jobplanet (잡플래닛) is Korea's leading company-review and recruitment platform — the domestic answer to Glassdoor — and this contract covers the two first-party product surfaces the source inspected for tokens on 2026-07-02: the homepage at `https://www.jobplanet.co.kr/welcome/index` and the company-search surface at `https://www.jobplanet.co.kr/companies`. The tech blog at `https://techspace.jobplanet.co.kr/` (the inspected route `https://techspace.jobplanet.co.kr/category/product`) is a third brand-owned surface the source names for its editorial type only: `IBM Plex Sans` at the 48px / 600 / 1.0 hero — a distinct surface that signals "engineering culture," kept deliberately apart from the product chrome. Product-chrome tokens below stay on the two inspected product URLs. Every value stays attached to the surface that established it. Reading those two product URLs as this contract's token surfaces, keeping the tech blog on its own editorial-type record, and treating values as attached to the surface that established them, are derived editorial implementation inferences from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification.

The product interface reads like a bright, data-dense information utility rather than a glossy marketing site. The canvas alternates pure white (`#ffffff`, token-set `tokens.colors.canvas`) cards over a soft cool-grey page background (`#f3f3f4`, token-set `tokens.colors.surface`), so content organizes itself into flat, scannable blocks. Text sits in a near-black `#333333` (token-set `tokens.colors.ink`; never pure black for body), and a single confident spring-green (`#00c362`, token-set `tokens.colors.primary`) is reserved almost entirely for action: the primary CTA, links, pagination, and inline arrows. The hex values and the reserved-for-action list are recorded. The characterizations built on them — a bright, data-dense information utility rather than a glossy marketing site; content organizing itself into flat, scannable blocks; a confident spring-green reserved for action; trustworthy and functional; a product built to help people compare employers, salaries, and interviews at a glance; information architecture over spectacle — are a derived editorial implementation inference from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Jobplanet (잡플래닛) launched in **2014**, built by the team that would become **BrainCommerce** (later operating under the Jobplanet/기업 정보 group), to solve a distinctly Korean information asymmetry: job-seekers had almost no transparent, employee-sourced view of what companies were actually like — culture, salary, management, interview process — before they signed on. Jobplanet's founding premise was to open that black box by aggregating reviews and ratings from 전·현직자 (current and former employees), positioning itself as the country's answer to Glassdoor. Over the following decade the product matured into Korea's leading 기업 정보 (company-information) and recruitment platform, layering salary data, interview reports, company rankings, a jobs marketplace, and community discussion on top of the original review core. It also grew a B2B side — employer-branding and recruitment services for companies (기업 회원 서비스) — turning transparency into a two-sided marketplace where candidates get truth and employers get reach. The homepage's "NO.1 기업 정보 플랫폼" claim states that category leadership plainly. What Jobplanet's design refuses is the glossy, aspirational chrome of consumer marketing sites: there is no oversized hero, no heavy shadow-stacked cards, no single hero image doing the persuading. What it embraces is a flat, dense, data-first interface — a single trustworthy green for action, near-black text for legibility, and tight typography that lets ratings and review counts speak for themselves. The design is, in effect, an argument that the data is the product. The year 2014, BrainCommerce / 기업 정보 group, the information-asymmetry premise, 전·현직자, the Glassdoor positioning, the decade of salary / interview / ranking / marketplace / community layers, 기업 회원 서비스, the homepage "NO.1 기업 정보 플랫폼" claim, the refusal of glossy chrome, and the closing sentence that the design is an argument that the data is the product are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-marketplace narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks, each naming a surface or control the source records, is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification. They do not come from the source's persona section.

- Compare employers, salaries, and interviews on `https://www.jobplanet.co.kr/welcome/index`.
- Search companies, jobs, and content in the global search field — `기업, 공고, 콘텐츠 검색` — on `https://www.jobplanet.co.kr/companies`.
- Open a company entry from a stat chip — `782개의 전∙현직자 리뷰`.
- Follow the top navigation items — `기업 랭킹`, `커뮤니티`, `채용`.
<!-- design-md:claim-end -->

### Audience

No named or demographic personas are invented. The source labels its named figures as fictional archetypes informed by publicly observable Jobplanet user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or occupation classification is carried into this document or its sidecar. What the source independently records is the audience it names at a group level: Korean job-seekers researching employers, career-movers comparing salaries, HR/employer-branding teams. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not Jobplanet-authored or a separately published UI specification.

- Pretendard Variable across the entire product; 700 for headlines, 400 for body — weight is the hierarchy signal
- Single spring-green (`#00c362`) reserved for action — CTA, links, pagination, arrows
- Near-black `#333333` text (and `#323438` on some headings) instead of pure black
- Neon accent green (`#00ff91`) as a highlight marker, plus a `#00c274` line variant and deep `#003a1c` label green
- Flat depth: `box-shadow: none`; separation via `#f3f3f4` surface tint and `#e5e6e9` hairlines
- Gentle radius ladder — 5px CTA, 8px chips, 12px cards, full-round (`9999px`) icon buttons
- Dense, tight type sizing (13px body, 24px section head) tuned for information-heavy company data
- A separate tech-blog surface in IBM Plex Sans (48px / 600 hero) — editorial voice kept apart from product

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Transparency is the product.** Jobplanet exists to surface employee-sourced truth about companies. *UI implication:* foreground counts and sources ("782개의 전∙현직자 리뷰"); make data visible and scannable before any CTA.
2. **Data density over spectacle.** A career decision needs many data points at once. *UI implication:* keep type tight (13px body), use weight for hierarchy, and pack ratings/salaries/reviews without resorting to giant display type.
3. **One action, one color.** Green (`#00c362`) means "do this." *UI implication:* reserve the saturated green exclusively for the primary CTA, links, and pagination so the next step is never ambiguous.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* no shadows; separate with the `#f3f3f4` tint and `#e5e6e9` hairlines; keep the page quick to scan.
5. **Plain, insider voice.** Speak like a candid colleague, not a marketer. *UI implication:* descriptive headings and factual chips; embrace real job-market language rather than sanitized copy.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification.

- Use Pretendard Variable across the entire product; reserve IBM Plex Sans for the tech blog only
- Carry hierarchy with weight (700 vs 400) rather than large display sizes
- Reserve green (`#00c362`) for action — CTA, links, pagination — keep it the single "action" color
- Use near-black `#333333` for body text instead of pure black
- Separate sections with the `#f3f3f4` surface tint and `#e5e6e9` hairlines, not shadows
- Keep body dense (13px / 1.5) so ratings, salaries, and review counts pack in cleanly
- Use the gentle radius ladder — 5px CTA, 8px chips, 12px cards, full-round icon buttons
- Use the neon `#00ff91` sparingly as a highlight marker, not as a fill color

### Avoid

The source states these eight as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification.

- Add drop shadows for elevation — Jobplanet is a flat, shadow-free system
- Spread green across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for body text — reserve near-black `#333333`
- Set giant display headlines on the product — the largest common head is 24px
- Use IBM Plex Sans on product surfaces — that voice belongs to the tech blog
- Use sharp square corners on cards or chips — everything is gently rounded
- Introduce a second saturated accent color — the green family is the only saturated hue
- Rely on size alone for hierarchy — weight and the green accent do that work

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own token-set keys. Taking those role names from the source's own token-set keys, pairing each hex to the token-set path named beside it, keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as two keys that happen to share `#ffffff`, keeping `tokens.colors.ink` `#333333` off `tokens.colors.ink-strong` `#323438`, keeping `tokens.colors.primary` `#00c362` off `tokens.colors.primary-bright` `#00ff91` / `tokens.colors.green-line` `#00c274` / `tokens.colors.green-deep` `#003a1c`, and keeping the reserved-for-action / near-black-not-pure-black / neon-as-marker characterizations on their own sentences, are derived editorial implementation inferences from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Primary

- **Jobplanet Green** (`#00c362`): The primary brand and action color. Background of the primary CTA ("바로가기"), and the text color of links, pagination numbers, footer links, and inline arrows — the system's single "action" hue. Token-set path `tokens.colors.primary`.
- **Neon Highlight** (`#00ff91`): A vivid spring-green used as a small highlight marker / emphasis background. Brighter and more electric than the primary. Token-set path `tokens.colors.primary-bright`.
- **Green Line** (`#00c274`): A slightly teal-shifted green used for thin border/underline accents next to green elements. Token-set path `tokens.colors.green-line`.
- **Deep Forest** (`#003a1c`): A very dark green used for dark-on-light label text — a low-key branded alternative to grey for small green-family labels. Token-set path `tokens.colors.green-deep`.
- **On-Primary White** (`#ffffff`): Text and icons on top of the green CTA. Token-set path `tokens.colors.on-primary`.

Neutral and surface

- **Pure White** (`#ffffff`): Card and content surfaces, search field background, text on green/dark. Token-set path `tokens.colors.canvas`.
- **Surface Grey** (`#f3f3f4`): The cool-grey page background and stat-chip fill — the primary flat separation device. Token-set path `tokens.colors.surface`.
- **Hairline** (`#e5e6e9`): Thin 1px borders on circular buttons, dividers, and card outlines given the shadow-free system. Token-set path `tokens.colors.hairline`.

Text hierarchy

- **Ink** (`#333333`): Primary body text, most headings, strong labels — a near-black used instead of pure black. Token-set path `tokens.colors.ink`.
- **Ink Strong** (`#323438`): A slightly cooler dark used on some section headings. Token-set path `tokens.colors.ink-strong`.
- **Nav Slate** (`#4b4c50`): Top-navigation link text. Token-set path `tokens.colors.nav`.
- **Muted Slate** (`#686a6d`): Login/sign-up links and tertiary UI text. Token-set path `tokens.colors.muted`.
- **Faint Slate** (`#a4a6ad`): Secondary/meta text, captions — the highest-frequency muted tone. Token-set path `tokens.colors.faint`.
- **Disabled Grey** (`#c5c7cc`): Disabled text, placeholders, lowest-emphasis labels. Token-set path `tokens.colors.disabled`.

`tokens.colors.canvas` and `tokens.colors.on-primary` both write `#ffffff`. They stay two keys. `tokens.colors.ink` `#333333` is not `tokens.colors.ink-strong` `#323438`. The four greens stay four keys.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xs: 4` · `sm: 6` · `base: 8` · `md: 12` · `lg: 16` · `xl: 24`.

The source restates the same steps as a scale of 4px, 6px, 8px, 12px, 16px, 24px, with a dense small end (4px, 6px) for chip and icon padding, and names 8px as the base unit. Interactive padding lands at `0px 16px` horizontally on both the 40px CTA and 48px stat chips. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 6` is not the circular icon-button padding `6px`. `tokens.spacing.base: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12`. `tokens.spacing.lg: 16` is not `tokens.typography.card-title.size` `16`, is not `tokens.typography.input.size` `16`, and is not the CTA / chip horizontal `16px`. `tokens.spacing.xl: 24` is not `tokens.typography.section.size` `24`. Keeping those unitless spacing steps on their own keys rather than rewriting them as a grid, and keeping those writings of `4`, `6`, `8`, `12`, `16`, and `24` on their own records, are derived editorial implementation inferences from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 4` · `md: 8` · `lg: 12` · `full: 9999`.

The source's named radius uses, kept on their own rows:

- Small (4px): highlight badges, inner elements — `tokens.rounded.sm`
- CTA (5px): the primary green button — YAML `tokens.components.button-primary.radius` `5px`. This 5px is not a `tokens.rounded` key.
- Medium (8px): stat chips, mid-size containers — `tokens.rounded.md`
- Large (12px): content and story cards — the workhorse card radius — `tokens.rounded.lg`
- Full (9999px): circular icon/carousel buttons — `tokens.rounded.full: 9999` and the YAML icon-button `radius: 9999px`

`tokens.rounded.full: 9999` stays the unitless full step. It is not a type size. `tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.md: 8` is not `tokens.spacing.base: 8`. `tokens.rounded.lg: 12` is not `tokens.spacing.md: 12`. The primary CTA `5px` stays on the button-primary record. Keeping `4`, `8`, `12`, and `9999` as four keys, and keeping the CTA `5px` off the rounded map, are derived editorial implementation inferences from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f3f3f4` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e5e6e9` border | Circular button outlines, dividers |

Token-set path `tokens.shadow.none`: `none`. Live inspection returned `box-shadow: none` across the hero, nav, story cards, and stat chips. Depth and grouping are communicated entirely through flat tinted surfaces (`#f3f3f4`) and thin `#e5e6e9` hairlines. When emphasis is needed the system reaches for the green (`#00c362`) or the neon highlight (`#00ff91`), never elevation. The three-level table, the `none` token, and the inspected `box-shadow: none` list are the source's own. Reading that near-shadowless treatment as a deliberate modern-flat choice that keeps a data-heavy company-review product feeling fast, light, and mobile-native — avoiding the heavy card-stack look — is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live-extract pass. The motion contract below sits outside that attribution: the source names three duration tokens and three easing roles, and assigns no computed-sample source to the three cubic-bezier values. The durations, easing roles, and motion rules below, and the omission of the three untraceable curve values, are therefore a derived editorial implementation inference from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip/button press, focus |
| `motion-standard` | 200ms | Card/section reveal, carousel slide, dropdown |
| `motion-slow` | 320ms | Page-level transitions, rare hero reveals |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) match the documented template re-injection path and are not traceable to Jobplanet-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Role | Use |
|---|---|
| `ease-enter` | Arriving — cards, dropdowns, sheets |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions, carousel |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and quiet — consistent with the flat, fast, data-first aesthetic.
- Cards and results fade in from below at `motion-standard / ease-enter`; carousels slide horizontally with `ease-standard`; buttons and chips respond to press with a subtle opacity/scale shift.
- No bounce or spring — a company-information product signals steadiness and credibility, not playfulness.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and carousels advance without animation; the product remains fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The source describes Jobplanet's product and the tech-blog editorial voice. It does not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification. |
| Live computed product-web use | Visible product text resolves to `Pretendard Variable` (with `Roboto`, `Noto Sans KR` fallbacks) across headings, nav, buttons, and body on `/welcome/index` and `/companies`. Token-set source is `live-extract`. Token-set path `tokens.typography.family.body`. |
| Live computed tech-blog use | The techspace surface resolves to `IBM Plex Sans` (with `Pretendard Variable` fallback) for its editorial hero and headings. Token-set path `tokens.typography.family.blog`. That family stays on the blog surface. |
| Official distributed asset | No Jobplanet-exclusive downloadable font package was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification. |
| Declared-only | The source records `Roboto` and `Noto Sans KR` after Pretendard Variable on the product, and `Pretendard Variable` after IBM Plex Sans on the blog. They are fallbacks, not a second brand face. Classing those fallback members as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification. |
| License | The source records Pretendard Variable as the product face and IBM Plex Sans as the blog face. This record does not establish a Jobplanet-issued font-license notice. That face-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces the source did not inspect for tokens stays outside these three captures. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification. |

Calling Official product-use a product-and-blog account rather than a published type token, calling Live computed product-web the machine UI-family reading for product chrome, calling Live computed tech-blog a blog-only family, and calling the declared faces declared-only rather than current UI tokens, are derived editorial implementation inferences from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification.

### Family

- **Current visible product UI family:** `Pretendard Variable` — token-set path `tokens.typography.family.body`
- **Product stack the source writes in §3:** `Pretendard Variable` (with `Roboto`, `Noto Sans KR` fallbacks)
- **Current visible tech-blog family:** `IBM Plex Sans` — token-set path `tokens.typography.family.blog`
- **Blog stack the source writes in §3:** `IBM Plex Sans` (with `Pretendard Variable` fallback)
- Do not replace Pretendard Variable with a system substitute on the product. A fallback member of the stack is never presented as the brand face. Do not present IBM Plex Sans as a product-chrome family. That first-face restatement, that fallback prohibition, and that blog-quarantine rule are a derived editorial implementation inference from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set path | Token-set use |
|---|---|---:|---:|---:|---|---|
| Section Heading | Pretendard Variable | 24 | 700 | 1.5 | `tokens.typography.section` | Section titles (오늘의 추천, 커뮤니티 인기글) |
| Card / List Title | Pretendard Variable | 16 | 700 | 1.5 | `tokens.typography.card-title` | Card / list-entry headline (stat chips) |
| Nav Link | Pretendard Variable | 15 | 400 | 1.4 | `tokens.typography.nav` | Top navigation links |
| Button | Pretendard Variable | 14 | 700 | | `tokens.typography.button` | Primary CTA label |
| Search Input | Pretendard Variable | 16 | 400 | | `tokens.typography.input` | Global search field text |
| Body | Pretendard Variable | 13 | 400 | 1.5 | `tokens.typography.body` | Body copy, metadata, captions |
| Tech-Blog Hero | IBM Plex Sans | 48 | 600 | 1.0 | `tokens.typography.blog-hero` | Tech-blog hero headline (IBM Plex Sans) |

Line-height values stay unitless, as the token-set wrote them (`1.5`, `1.4`, `1.0`). They are never converted to a replacement px (A1a). Button and Search Input have no YAML `lineHeight`; those cells stay empty rather than inheriting `1.5`. The source scale writes the same token-set sizes with a px suffix in §3; those spellings stay beside the unitless YAML sizes and are not a conversion of them: Section Heading 24px (1.50rem) / 1.5 (36px); Card / List Title 16px (1.00rem) / 1.5 (24px); Nav Link 15px (0.94rem); Button 14px (0.88rem); Search Input 16px (1.00rem); Body 13px (0.81rem) / 1.5 (19.5px); Tech-Blog Hero 48px (3.00rem). `tokens.typography.card-title.size` `16` is not `tokens.typography.input.size` `16` and is not `tokens.spacing.lg: 16`. `tokens.typography.blog-hero` stays on the tech-blog surface. Keeping the seven token-set roles on their paths, leaving Button and Search Input without an invented line-height, keeping the §3 px spellings beside the YAML sizes, and keeping the blog hero off the product roles, are derived editorial implementation inferences from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification.

Type principles the source states:

- **Weight over size**: The product barely scales type — 24px is the largest common head. Hierarchy comes from 700 vs 400 weight and from the green accent, not from display sizes.
- **Dense body sizing**: Body sits at a tight 13px / 1.5, tuned for information-rich company data (ratings, salaries, review counts) rather than airy marketing copy.
- **One product font**: Pretendard Variable owns every product surface; IBM Plex Sans is quarantined to the tech blog so the editorial voice never bleeds into the product.
- **Normal tracking**: Letter-spacing stays `normal` throughout — there is no tight display tracking because there is no display type in the product.

Treating those four type principles as current-surface type rules is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=jobplanet.co.kr&sz=128`. Frontmatter records `logo.type: favicon`.
- Card thumbnails and company logos carry no shadow at any size, consistent with the flat system. Story cards keep their 12px radius; imagery is contained within the white card.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a Jobplanet-hosted brand file, and reading the no-shadow thumbnail rule as the source's own image behavior rather than a photography system, are derived editorial implementation inferences from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `card`, `input`, `tab`, `badge`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, a tab that only selects a destination, a carousel control that only advances a strip, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component. A §4-only component that is not in the token set is labeled `not in the token set`.

Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim are derived editorial implementation inferences from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary CTA (Green)

- Role: destination control for the solid green primary CTA on the product homepage
- Primitive type: `button` · Kind: interactive
- Domain: homepage on `https://www.jobplanet.co.kr/welcome/index`
- Background: `#00c362`
- Text: `#ffffff`
- Radius: 5px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 700 / Pretendard Variable
- Use: Primary action ("바로가기") — the system's single green CTA
- Token-set type: `tokens.components.button-primary.type` `button`
- Token-set bg: `tokens.components.button-primary.bg` `#00c362`
- Token-set fg: `tokens.components.button-primary.fg` `#ffffff`
- Token-set radius: `tokens.components.button-primary.radius` `5px` — not a `tokens.rounded` key
- Token-set height: `tokens.components.button-primary.height` `40px`
- Token-set padding: `tokens.components.button-primary.padding` `0 16px`
- Token-set font: `tokens.components.button-primary.font` `14px / 700`
- Token-set use: `Primary CTA (바로가기) — the single interactive green`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades green actions rather than turning them grey; visual treatment omitted on this token-set record |
| loading | not-applicable | This control opens a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation with a success result on this button |

### Stat Chip

- Role: destination control for a company stat entry-point
- Primitive type: `button` · Kind: interactive
- Domain: homepage on `https://www.jobplanet.co.kr/welcome/index`
- Background: `#f3f3f4`
- Text: `#333333`
- Radius: 8px
- Padding: 0px 16px
- Height: 48px
- Font: 16px / 700 / Pretendard Variable
- Use: Company stat entry-point ("782개의 전∙현직자 리뷰", "15개의 채용정보")
- Token-set type: `tokens.components.button-stat-chip.type` `button`
- Token-set bg: `tokens.components.button-stat-chip.bg` `#f3f3f4`
- Token-set fg: `tokens.components.button-stat-chip.fg` `#333333`
- Token-set radius: `tokens.components.button-stat-chip.radius` `8px`
- Token-set height: `tokens.components.button-stat-chip.height` `48px`
- Token-set padding: `tokens.components.button-stat-chip.padding` `0 16px`
- Token-set font: `tokens.components.button-stat-chip.font` `16px / 700`
- Token-set use: `Company stat entry (782개의 전∙현직자 리뷰)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination entry whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens a company entry; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this chip, reports failure |
| success | not-applicable | Same role reason: reaching the company entry is not an operation this chip reports as success |

### Circular Icon Button

- Role: carousel prev/next and small utility icon button
- Primitive type: `button` · Kind: interactive
- Domain: homepage on `https://www.jobplanet.co.kr/welcome/index`
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#e5e6e9`
- Radius: 9999px (full round)
- Padding: 6px
- Height: 32px
- Use: Carousel prev/next and small utility icon buttons
- Token-set type: `tokens.components.icon-button-round.type` `button`
- Token-set bg: `tokens.components.icon-button-round.bg` `#ffffff`
- Token-set fg: `tokens.components.icon-button-round.fg` `#333333`
- Token-set border: `tokens.components.icon-button-round.border` `1px solid #e5e6e9`
- Token-set radius: `tokens.components.icon-button-round.radius` `9999px`
- Token-set padding: `tokens.components.icon-button-round.padding` `6px`
- Token-set height: `tokens.components.icon-button-round.height` `32px`
- Token-set use: `Circular carousel / utility icon button`
- Token-set shape: `tokens.rounded.full: 9999`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A carousel control whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control advances a carousel; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A carousel control does not report a failed request on itself |
| success | not-applicable | Same role reason: advancing a strip is not an operation this button reports as success |

### Content / Story Card

- Role: story, interview, and recommendation card on the grey canvas
- Primitive type: `card`
- Domain: homepage on `https://www.jobplanet.co.kr/welcome/index`
- Background: `#ffffff`
- Text: `#333333`
- Radius: 12px
- Shadow: none
- Use: Story, interview, and recommendation cards on the grey canvas
- Token-set type: `tokens.components.card-content.type` `card`
- Token-set bg: `tokens.components.card-content.bg` `#ffffff`
- Token-set fg: `tokens.components.card-content.fg` `#333333`
- Token-set radius: `tokens.components.card-content.radius` `12px`
- Token-set use: `Story / content card on grey canvas, no shadow`
- Token-set shape: `tokens.rounded.lg: 12`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld. Withholding kind and a map because the source supplies no interaction evidence is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification.

### Global Search

- Role: site-wide search field
- Primitive type: `input` · Kind: interactive
- Domain: company-search on `https://www.jobplanet.co.kr/companies`
- Background: `#ffffff`
- Text: `#333333`
- Font: 16px / 400 / Pretendard Variable
- Height: 48px
- Placeholder: `#c5c7cc`
- Use: Site-wide search field ("기업, 공고, 콘텐츠 검색") — borderless, sits on white
- Token-set type: `tokens.components.search-input.type` `input`
- Token-set bg: `tokens.components.search-input.bg` `#ffffff`
- Token-set fg: `tokens.components.search-input.fg` `#333333`
- Token-set font: `tokens.components.search-input.font` `16px / 400`
- Token-set height: `tokens.components.search-input.height` `48px`
- Token-set use: `Global search field (기업, 공고, 콘텐츠 검색), borderless`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | The surface contract records disabled / placeholder labels at `#c5c7cc` |
| loading | not-applicable | The field accepts a query; result skeletons report in-progress content, and the input stays a field |
| error | applicable | A form field can fail validation; the surface contract records a field-level message below the input |
| success | not-applicable | The field does not complete a search on itself |

### Top Navigation

- Role: top horizontal nav item
- Primitive type: `tab` · Kind: interactive
- Domain: product chrome on `https://www.jobplanet.co.kr/welcome/index`
- Background: `#ffffff`
- Text: `#4b4c50`
- Font: 15px / 400 / Pretendard Variable
- Height: 50px items
- Active: green `#00c362` text on the active item
- Secondary links ("로그인", "회원가입"): `#686a6d`
- Use: Top horizontal nav ("기업 랭킹", "커뮤니티", "채용", "콘텐츠", "연봉")
- Token-set type: `tokens.components.nav-link.type` `tab`
- Token-set fg: `tokens.components.nav-link.fg` `#4b4c50`
- Token-set font: `tokens.components.nav-link.font` `15px / 400`
- Token-set active: `tokens.components.nav-link.active` `green #00c362 text on active`
- Token-set use: `Top nav item (기업 랭킹, 커뮤니티, 채용)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A nav destination whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control selects a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A tab that only selects a destination does not report a failed request on itself |
| success | not-applicable | Same role reason: selecting a destination is not an operation this tab reports as success |

### Neon Highlight

- Role: small highlight marker / emphasis tag
- Primitive type: `badge`
- Kind: non-interactive — a highlight marker, not a commit control
- Background: `#00ff91`
- Text: `#333333`
- Radius: 4px
- Font: 13px / 400 / Pretendard Variable
- Use: Small highlight marker / emphasis tag
- Token-set type: `tokens.components.badge-highlight.type` `badge`
- Token-set bg: `tokens.components.badge-highlight.bg` `#00ff91`
- Token-set fg: `tokens.components.badge-highlight.fg` `#333333`
- Token-set radius: `tokens.components.badge-highlight.radius` `4px`
- Token-set font: `tokens.components.badge-highlight.font` `13px / 400`
- Token-set use: `Neon-green highlight marker / emphasis tag`

### Surface state contract

The source records these system-level states. They are preserved here as written (A2). Treating the rows as a surface contract rather than attaching every row as a visual treatment on the destination CTAs is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no reviews yet)** | White card on `#f3f3f4` canvas. Single Ink (`#333333`) line explaining no reviews exist yet, with one green (`#00c362`) CTA to write the first review. No illustration clutter. |
| **Empty (no search results)** | Faint Slate (`#a4a6ad`) single line stating nothing matched, with the search field kept visible above so the query can be adjusted. |
| **Loading (results fetch)** | Skeleton cards at final 12px-radius dimensions on the `#f3f3f4` surface. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Previous content stays visible; a subtle green (`#00c362`) progress indicator signals the update. Never blank the list. |
| **Error (data load failed)** | Inline message in Ink (`#333333`) with a plain-language explanation and a retry, not a bare "오류가 발생했습니다". States what to do next. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". |
| **Success (review submitted)** | Brief inline confirmation in a calm tone; the new review surfaces immediately. No celebratory emoji. |
| **Skeleton** | `#f3f3f4` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Disabled Grey (`#c5c7cc`) text on reduced-opacity surface; green actions fade rather than turn grey, to preserve brand read. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

White content cards float over a full-width `#f3f3f4` grey canvas. Section headings (24px / 700) anchor each block; recommendation and story cards arrange in horizontal carousels and responsive grids. The global search input is a prominent, borderless 48px field at the top of company-search surfaces. Stat chips ("N개의 전∙현직자 리뷰") group review + recruitment counts as flat grey entry points. Spacing restated from `tokens.spacing`: `xs: 4` · `sm: 6` · `base: 8` · `md: 12` · `lg: 16` · `xl: 24`. Shape restated from `tokens.rounded`: `sm: 4` · `md: 8` · `lg: 12` · `full: 9999`.

Whitespace the source names: sections separate by background (white cards vs `#f3f3f4` canvas) and `#e5e6e9` hairlines, not by shadow; body type is tight (13px) so data packs in, but generous card radius (12px) and 16px interior padding keep it from feeling cramped; the green `#00c362` is spatially rare — one CTA per block. Reading that arrangement as flat segmentation, dense-but-breathable packing, and one-action-in-one-color rarity is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification.

Responsive behavior. The source records these breakpoints at system level. Treating them as current-surface layout instructions is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, carousels become horizontal scroll, nav collapses |
| Tablet | 640-1024px | 2-up card grids, moderate padding |
| Desktop | 1024-1440px | Full layout, multi-column card grids, centered content |

Further layout records, as the source states them:

- Primary CTA at 40px height with 0px 16px padding
- Stat chips at 48px height
- Nav items at 50px height with 16px horizontal padding
- Search field at 48px height, full-width on narrow viewports
- Section heads (24px / 700) hold their size; card grids reflow multi-column → stacked
- Recommendation/story carousels switch to horizontal scroll on mobile
- White cards maintain 12px radius across breakpoints; grey canvas stays full-width
- Global search remains a prominent field near the top on all sizes
- Card thumbnails and company logos carry no shadow at any size
- Story cards keep their 12px radius; imagery is contained within the white card

The 40px CTA, 48px chips, 50px nav items, 48px search field, 24px section heads, 5px CTA corners, 8px chips, 12px cards, and 9999px icon buttons are the measurements the source records on those product surfaces.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Jobplanet's voice is **candid, insider, and pragmatic** — the tone of a trusted colleague who tells you what a company is really like to work at. Copy is plain Korean, information-first, and comfortable with real employee slang ("네카라쿠배", "이직러") because the product's whole premise is unvarnished, from-the-inside truth about employers. It never oversells: headlines state what you'll find ("전∙현직자가 직접 평가한 '사내문화가 좋은 기업'") rather than hyping an outcome. The register treats the user as a job-seeker or career-mover who deserves transparent data — reviews, salaries, interview reports — not a marketing funnel. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification. The published lines themselves are source-recorded copy.

| Context | Tone |
|---|---|
| Section headings | Descriptive, benefit-clear. "전∙현직자가 직접 평가한 '사내문화가 좋은 기업'". |
| Stat / entry chips | Plain and factual. "782개의 전∙현직자 리뷰", "15개의 채용정보". |
| CTAs | Direct, low-pressure. "바로가기", "더 보기". |
| Content / community titles | Conversational, insider, sometimes playful. "이직러가 꼽은 '네카라쿠배' 중 1위는?". |
| Trust / data framing | Concrete and sourced. Emphasizes that reviews come from 전∙현직자 (current/former employees). |

**Voice samples (verbatim from live surfaces)** — the source marks these verified live 2026-07-02; they are not promoted as a complete product-microcopy guide. That "verbatim samples, not a complete product-microcopy guide" reading is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification.

- "NO.1 기업 정보 플랫폼 | 잡플래닛" — page title (category-leadership claim).
- "전∙현직자가 직접 평가한 '사내문화가 좋은 기업'" — section head (transparency framing).
- "782개의 전∙현직자 리뷰" — stat chip (data-density, sourced count).

Further published strings the source records, kept byte-exact:

- 잡플래닛
- 바로가기
- 더 보기
- 오늘의 추천
- 커뮤니티 인기글
- 782개의 전∙현직자 리뷰
- 15개의 채용정보
- 기업, 공고, 콘텐츠 검색
- 기업 랭킹
- 커뮤니티
- 채용
- 콘텐츠
- 연봉
- 로그인
- 회원가입
- 전∙현직자가 직접 평가한 '사내문화가 좋은 기업'
- 이직러가 꼽은 '네카라쿠배' 중 1위는?
- NO.1 기업 정보 플랫폼 | 잡플래닛
- 네카라쿠배
- 이직러
- 기업 정보
- 기업 회원 서비스
- 전·현직자
- 전∙현직자
- BrainCommerce
- Pretendard Variable
- IBM Plex Sans

**Forbidden register**: hype superlatives detached from data, fear-based career pressure, undefined jargon, exclamation-heavy marketing. Jobplanet's authority comes from being specific and sourced, not loud. That premise-to-register causal is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification.

Reproduce the published strings above byte-exact rather than translating or re-casing them. A gloss may sit beside a line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not Jobplanet-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Treating the list as named unresolved values rather than a license to invent, and naming the list from the source's own unresolved fields rather than adding surfaces the source did not name, are derived editorial implementation inferences from the verified surfaces; they are not Jobplanet-authored or a separately published UI specification.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they match the documented template re-injection path and are not traceable to Jobplanet-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **CTA radius keep-both.** YAML `tokens.components.button-primary.radius` `5px` is not a `tokens.rounded` key. `tokens.rounded` is `sm: 4` · `md: 8` · `lg: 12` · `full: 9999`.
- **Canvas / on-primary keep-both.** `tokens.colors.canvas` and `tokens.colors.on-primary` both write `#ffffff`. They stay two keys.
- **focus-visible treatments.** Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
- **Hover, pressed, and per-component loading visual treatments.** The collector's component records are default observations. They are not `not-applicable`; applicability follows control meaning.
