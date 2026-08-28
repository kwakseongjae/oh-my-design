# Imweb (아임웹) Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Imweb (아임웹) is Korea's leading no-code website builder and commerce platform, and this contract covers the two first-party web surfaces the source inspected for tokens on 2026-06-10: the homepage at `https://imweb.me` and the pricing surface at `https://imweb.me/price`. The official blog at `https://imweb.me/blog` (아임웹 공식 블로그) is a named brand-owned source for voice; it does not supply the computed interface tokens below. Every value stays attached to the surface that established it. Reading Imweb as Korea's leading no-code website builder and commerce platform, reading those two inspected pages as this contract's token surfaces, keeping values attached to the surface that established them, and treating the official blog as a named source that does not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Imweb-authored or a separately published UI specification.

The captured marketing surface reads like the product promise itself: clean, friendly, and deliberately easy. The canvas is pure white (`#ffffff`) with a soft cool-grey utility surface (`#f8f9fb`) for FAQ rows and secondary panels. All text sits in a near-black ink (`#15181e`) — a slightly blue-warmed charcoal rather than pure black — set in **Pretendard**, the de-facto Korean product font, at a comfortable 16px/1.5 base. The most surprising structural choice is the CTA strategy: although the brand identity color is a vivid sky cyan (`#00b9ff`), every primary call-to-action button is rendered in the near-black ink, not the brand color. Cyan is reserved for identity and data moments — growth charts, stat callouts, tinted promo strips — so the page feels monochrome-confident with the brand blue appearing as evidence rather than decoration. Typography is bold and unfussy. Headlines run Pretendard weight 700 at every level — an 80px rotating hero keyword ("매출내기"), 48px pricing headlines, 36px section titles, 28px feature heads — with **normal letter-spacing throughout**: no fashionable negative tracking, just big, legible, declarative hangul. A second, custom UI font called **imweb Sans** takes over inside interactive chrome (buttons, search, plan selectors), giving controls a subtly tighter, product-grade voice distinct from the editorial Pretendard around them. Body copy stays quiet at 16px weight 400. Depth is essentially flat. Live inspection found `box-shadow: none` across nav, hero, CTAs, and cards; separation comes from the `#f8f9fb` surface tint, 1px hairlines (`#dbdee3`), and a disciplined radius system where 8px is the overwhelming workhorse (95 of ~108 rounded elements on the homepage), stretched to 12-16px for media cards and a full pill only for the small icon button. One playful wildcard keeps the system from feeling sterile: a saturated magenta (`#ff50da`) used as an editorial eyebrow accent on pricing section labels — a single splash of commerce-energy against the otherwise cyan-and-ink palette. The hex values, sizes, weights, family names, labels, `box-shadow: none`, the 95-of-~108 radius count, and the surface names in this paragraph are recorded. The characterizations built on them — the marketing surface reading as the product promise itself; clean, friendly, and deliberately easy; slightly blue-warmed charcoal rather than pure black; Pretendard as the de-facto Korean product font; cyan as evidence rather than decoration; monochrome-confident; bold and unfussy; no fashionable negative tracking; product-grade voice distinct from editorial; depth as essentially flat; 8px as the overwhelming workhorse; magenta as a playful wildcard and a single splash of commerce-energy that keeps the system from feeling sterile — are a derived editorial implementation inference from the verified surfaces; they are not Imweb-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Imweb (주식회사 아임웹) was founded in the early 2010s by **이수모 (Lee Su-mo, CEO)** in Seoul, with the stated vision **"We serve the underserved"** — bringing professional-grade web presence and commerce to the small brands, creators, and first-time founders that traditional web agencies and enterprise commerce platforms ignored. The founding bet was that a Korean-native, no-code website builder could collapse the cost of starting an online brand from "hire a developer and a designer" to "choose a template and start selling." The product grew from a website builder into a full brand-commerce operating system — templates, hosting, payments (PG integration), bookings, communities, and marketing tools — positioning itself as a "브랜드 빌더" (brand builder) rather than a mere site builder. The growth chart on its own homepage tells the story the company wants told: cumulative sites created climbing year over year to 800,000+ by 2024, presented in brand cyan as plain evidence. Plans (Starter, Pro, Global) follow the same arc: start free, grow into commerce, expand globally. What Imweb refuses, visible in its design: the intimidating density of enterprise commerce consoles, dark-pattern urgency, and decorative complexity that would contradict "easy." What it embraces: a flat, white, bold-type surface where the customer's own brand — shown in an endless carousel of real customer sites — is the hero, and Imweb's chrome stays deliberately monochrome around it. The early-2010s founding, the 이수모 / Lee Su-mo name, Seoul, the vision statement, the founding bet, the 브랜드 빌더 positioning, the 800,000+ / 2024 figure, the Starter / Pro / Global plan names, and the refuse/embrace pairing including enterprise-console density, dark-pattern urgency, decorative complexity, the customer site as hero, and monochrome chrome are the source's own narrative facts; they do not by themselves supply interface tokens. The source's own comment records founder attribution and the vision statement as documented in public Korean company profiles, records public disagreement on a single founding year (so the body keeps "early 2010s"), and records specific interpretive readings of the design as editorial. Classifying that founding-and-builder narrative as context that does not by itself supply interface tokens, and treating the refuse/embrace pairing as that editorial reading, are derived editorial implementation inferences from the verified surfaces; they are not Imweb-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

Selecting these five as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Start from the homepage primary CTA `지금 무료로 시작하기` on `https://imweb.me`.
- Scan the feature trio `디자인이 쉬워요` / `운영이 쉬워요` / `마케팅이 쉬워요`.
- Choose a plan and start the trial `14일 무료 체험 시작하기` on `https://imweb.me/price`.
- Open a destination from the top nav — `주요기능`, `템플릿`, `요금`, `전문가 찾기`, `스토리`, `고객지원`.
- Read a pricing FAQ accordion row.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable Imweb user segments (Korean small-brand founders, creators, and SMB operators), not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation classification is carried into this document or its sidecar. What the source independently records is the audience at a group level: Korean small-brand founders, creators, and SMB operators. Reading those source-named groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not Imweb-authored or a separately published UI specification.

- Pretendard weight 700 for all display sizes, normal letter-spacing — bold, plain-spoken Korean headlines
- Custom `imweb Sans` font for interactive chrome (buttons, search) — UI voice split from editorial voice
- Near-black ink (`#15181e`) primary CTAs; brand cyan (`#00b9ff`) reserved for charts, stats, and identity moments
- Magenta (`#ff50da`) as a single editorial eyebrow accent on pricing
- Flat depth: no shadows; `#f8f9fb` surface tint + `#dbdee3` hairlines do the separating
- 8px radius as the system workhorse; 12-16px for media cards; pill only on icon buttons
- Cyan tint ladder (`#2dc5ff` → `#81dcff` → `#ade8ff` → `#dff6ff`) for chart highlights and dark-section text
- Grey text ladder (`#4b515b` → `#717680` → `#9fa3ab` → `#bcc0c6`) for secondary/muted/faint hierarchy

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Imweb-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Easy is the brand.** Every surface must reduce perceived difficulty. *UI implication:* one idea per band, plain-language labels, trial/free always visible on CTAs.
2. **The customer's brand is the hero.** Imweb shows real customer sites as its primary imagery. *UI implication:* keep chrome monochrome (ink on white) so showcased designs carry the color; never let Imweb's accent compete with customer content.
3. **Proof over promise.** Growth claims come with charts and counts. *UI implication:* use the cyan data-viz block for evidence moments; numbers get full saturated-brand treatment, adjectives don't.
4. **One action color, and it isn't the logo color.** Ink (`#15181e`) means "act"; cyan (`#00b9ff`) means "this is us." *UI implication:* never put brand cyan on a button — the separation keeps both signals clean.
5. **Flat and friendly.** No shadows, 8px corners, generous padding. *UI implication:* separate with tint and hairline; reach for a solid color band, not elevation, when a section needs weight.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Imweb-authored or a separately published UI specification.

- Use Pretendard weight 700 for every headline; scale size, not weight
- Keep letter-spacing normal at all sizes — no negative tracking
- Render primary CTAs in near-black ink (`#15181e`), not brand cyan
- Reserve cyan (`#00b9ff`) for data viz, stats, and identity moments
- Use `imweb Sans` for button and control labels at weight 600
- Separate sections with `#f8f9fb` tint and `#dbdee3` hairlines — never shadows
- Hold the 8px radius as the default; 12px+ only for media cards
- Use the magenta (`#ff50da`) sparingly — a single editorial eyebrow per view

### Avoid

The source states these eight as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Imweb-authored or a separately published UI specification.

- Put brand cyan on CTA buttons — the action color is ink
- Add drop shadows for elevation — the system is flat
- Mix multiple display weights — 700 is the only headline weight
- Apply negative letter-spacing to hangul headlines
- Use the magenta accent on more than one element per view
- Use pure black (`#000000`) where ink (`#15181e`) is established for text
- Round buttons into pills — only the small icon button is fully round
- Crowd the comparison table outside its tabbed container

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — cyan reserved for identity and data, not CTA buttons; magenta as the single warm accent; hairlines as the primary separation device in a shadow-free system — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Brand

- **Imweb Cyan** (`#00b9ff`): The brand identity color. Used on growth-chart bars, stat blocks, and tinted promo surfaces (`rgba(0,185,255,0.1)`) — deliberately NOT on CTA buttons. Token-set key `tokens.colors.primary`.
- **Cyan Bright** (`#2dc5ff`): Lighter cyan for emphasized text on dark or tinted sections. Token-set key `tokens.colors.primary-bright`.
- **Cyan Soft** (`#81dcff`): Stat captions on cyan blocks ("2025 누적 사이트 개설 수"). Token-set key `tokens.colors.primary-soft`.
- **Cyan Mist** (`#ade8ff`): Pale cyan supporting text on saturated cyan surfaces. Body-named in §2; not a YAML `tokens.colors` key.
- **Cyan Pale** (`#dff6ff`): The faintest cyan, fine text on brand-cyan backgrounds. Token-set key `tokens.colors.primary-pale`.
- **Link Blue** (`#0090d4`): Functional link/info color — discount percentages, promo strip text, inline links. Token-set key `tokens.colors.link`.
- **Editorial Magenta** (`#ff50da`): Pricing eyebrow headlines ("브랜드 운영에 꼭 맞는") and FAQ category heads. The single warm accent in the system. Token-set key `tokens.colors.accent-magenta`.

Ink and text hierarchy

- **Ink** (`#15181e`): Primary text, headings, nav, and primary CTA background. The system's near-black. Token-set key `tokens.colors.ink`.
- **Pure Black** (`#000000`): Occasional maximum-contrast text and overlay scrims. Token-set key `tokens.colors.ink-pure`.
- **Body Secondary** (`#4b515b`): Secondary button labels, sub-emphasis copy. Token-set key `tokens.colors.body-secondary`.
- **Muted Grey** (`#717680`): Inactive tabs, tertiary text, de-emphasized labels. Token-set key `tokens.colors.muted`.
- **Faint Grey** (`#9fa3ab`): Strikethrough prices, lowest-emphasis metadata on pricing tables. Token-set key `tokens.colors.faint`.
- **Faint Alt** (`#bcc0c6`): Icon-button glyphs, placeholder-level chrome. Token-set key `tokens.colors.faint-alt`.

Surface and borders

- **Pure White** (`#ffffff`): Page canvas, plan cards, text on ink/cyan. Token-set key `tokens.colors.canvas`.
- **Surface Grey** (`#f8f9fb`): FAQ accordion rows, utility panels, alternating bands. Token-set key `tokens.colors.surface`.
- **Hairline** (`#dbdee3`): 1px outline on secondary buttons and card borders — the primary separation device in a shadow-free system. Token-set key `tokens.colors.hairline`.

`tokens.colors.canvas: #ffffff` is the page-and-card-and-on-ink role the source names as Pure White. Keeping that role on its own path, and keeping Cyan Mist `#ade8ff` off the YAML key set, is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

The YAML token note, kept as the facts it names: brand identity cyan (`#00b9ff`) is reserved for data viz / identity moments; interactive CTAs are near-black ink (`#15181e`); magenta (`#ff50da`) is an editorial eyebrow accent on pricing; UI chrome uses the custom `imweb Sans` font; content uses Pretendard.

### Spacing

Unitless token-set steps from `tokens.spacing`: `tokens.spacing.xs: 6` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 12` · `tokens.spacing.base: 16` · `tokens.spacing.lg: 28` · `tokens.spacing.xl: 32` · `tokens.spacing.section: 64`. The source restates the same scale in px as 6px, 8px, 12px, 16px, 28px, 32px, 64px, and names a ~8px base unit with a 4px sub-grid. FAQ rows carry 28px 32px padding. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12`. `tokens.spacing.base: 16` is a spacing step only — it is not the 16px type size and not `tokens.rounded.xl: 16`. `tokens.spacing.lg: 28` is a spacing step only. `tokens.spacing.xs: 6` is a spacing step only. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

### Shape

Unitless token-set steps from `tokens.rounded`: `sm 4` · `md 8` · `lg 12` · `xl 16` · `full 9999`.

The source's named radius uses, kept on their own rows:

- Small (4px): chart bar caps (top corners) — `tokens.rounded.sm`
- Medium (8px): buttons, FAQ rows, plan cards — the workhorse — `tokens.rounded.md`
- Large (12px): template/media showcase cards — `tokens.rounded.lg`
- XL (16px): occasional feature containers — `tokens.rounded.xl`
- Full (`tokens.rounded.full: 9999`): icon-button pill only. The visible §4 record for that pill also writes `999999px`

`tokens.rounded.full: 9999` stays the unitless full step. The §4 icon-button form `999999px` sits beside it and is not a replacement. `tokens.rounded.sm: 4` is not a spacing step. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 12` is not `tokens.spacing.md: 12`. `tokens.rounded.xl: 16` is not `tokens.spacing.base: 16`. Keeping those paths unmerged, and reading Medium 8px as the workhorse among the named radius uses, is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, text, nav, CTAs |
| Tint (Level 1) | `#f8f9fb` background shift | FAQ rows, utility panels, alternating bands |
| Hairline (Level 2) | 1px `#dbdee3` outline | Secondary buttons, card edges |
| Brand block (Level 3) | Solid `#00b9ff` band | Data-viz / stats section — color as elevation |

Token-set path: `tokens.shadow.none` `none`. Live inspection found `box-shadow: none` on the nav, hero CTAs, plan cards, and FAQ rows. Hierarchy is communicated through surface tint, hairlines, and — uniquely — saturated brand-color blocks: when Imweb wants a section to feel important, it floods the background with cyan (`#00b9ff`) and switches text to the pale cyan ladder, rather than lifting a card with elevation. Reading that as a shadow-free system that uses saturated cyan as elevation when a section should feel important, and that leaves visual drama to the customer sites shown in the template carousel, is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, radius, and shadow on the two imweb.me surfaces. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to the easing curves. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not Imweb-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, tab switch, accordion icon |
| `motion-standard` | 200ms | FAQ expand, card reveal, dropdown |
| `motion-slow` | 400ms | Hero keyword rotation, carousel glide |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are not traceable to Imweb-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, panels, expanded rows |
| `ease-exit` | Dismissals, collapse |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is continuous but never showy. The two signature movements are ambient: the hero keyword rotation (one ambition word swapping at a relaxed cadence) and the template carousel's steady horizontal drift — both communicate "things are being built on Imweb right now."
- Interactive motion stays functional: FAQ rows expand at `motion-standard / ease-enter`, tabs switch instantly with a color change.
- No bounce or spring — approachable should not mean childish.
- Under `prefers-reduced-motion: reduce`, the keyword rotation and carousel pause and all transitions collapse to instant.

The "things are being built on Imweb right now" and "approachable should not mean childish" readings are the source's own motion rules; treating them as current-surface instruction is already covered by the motion-section qualifier above.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The two inspected surfaces describe the builder and use Pretendard plus a custom `imweb Sans`. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification. |
| Live computed surface-use | Both inspected surfaces compute editorial and body text as Pretendard and interactive chrome as `imweb Sans`. |
| Official distributed asset | No Imweb-exclusive downloadable font package for Pretendard or `imweb Sans` was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification. |
| Declared-only | The source records Pretendard (with system fallbacks) for editorial/body and `imweb Sans` (custom) for UI chrome. They are the live pair, not a second unused brand face. Classing those two families as two jobs rather than interchangeable faces is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification. |
| License | The source records Pretendard as the editorial face and `imweb Sans` as custom UI chrome. This record does not establish an Imweb-issued font-license notice. That live-use-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces the source did not inspect stays outside these two captures. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification. |

### Family

- **Editorial / body family:** `Pretendard` (with system fallbacks) — all headlines, body copy, and content text. Token-set path `tokens.typography.family.body` is `Pretendard`.
- **UI chrome family:** `imweb Sans` (custom) — buttons, search, plan selectors, interactive labels. Token-set path `tokens.typography.family.ui` is `imweb Sans`.
- Do not swap the two roles, and do not replace either family with a different claimed face. That two-jobs / fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Display Hero | Pretendard | 80px (5.00rem) | 700 | 1.00 (80px) | normal | Hero rotating keyword (매출내기), Pretendard Bold |
| Display Large | Pretendard | 48px (3.00rem) | 700 | 1.25 (60px) | normal | Pricing page headline |
| Section Heading | Pretendard | 36px (2.25rem) | 700 | 1.48 (YAML); 1.36-1.48 in the §3 table | normal | Section titles |
| Sub-section | Pretendard | 28px (1.75rem) | 700 | 1.48 (41px) | normal | Feature card heads (디자인이 쉬워요) |
| Card Title | Pretendard | 24px (1.50rem) | 700 | 1.33 (32px) | normal | Pricing group heads, story card titles |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text, Pretendard |
| Button | imweb Sans | 16px (1.00rem) | 600 | 1.50 | normal | Primary CTA label, imweb Sans |
| Button Small | imweb Sans | 14px (0.88rem) | 600 | 1.50 | normal | Compact CTA / plan buttons, imweb Sans |
| Caption | Pretendard | 12px (0.75rem) | 600 | 1.50 | normal | Discount tags, fine labels |

Unitless line heights stay ratios: `1.00` on Display Hero; `1.25` on Display Large; `1.48` on Section Heading and Sub-section; `1.33` on Card Title; `1.50` on Body, Button, Button Small, and Caption. They are never converted to a replacement px (A1a). The §3 table's `1.36-1.48` range for Section Heading sits beside the YAML `1.48` and is not a replacement. YAML `tokens.typography.caption` records size 12 / weight 600 / use and does not record a lineHeight; the 1.50 on that row is the §3 table's value. Token-set paths: `tokens.typography.display-hero` · `tokens.typography.display-lg` · `tokens.typography.section` · `tokens.typography.subsection` · `tokens.typography.card-title` · `tokens.typography.body` · `tokens.typography.button` · `tokens.typography.button-sm` · `tokens.typography.caption`. Keeping the ratios as ratios, keeping the §3 range beside YAML `1.48`, and keeping each YAML `use` string on its own row, is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

Type rules the source states:

- **One weight for display**: every headline is weight 700. Hierarchy comes from size (80 → 48 → 36 → 28 → 24), never from weight changes.
- **No tracking games**: letter-spacing is `normal` at every size — the system trusts Pretendard's native hangul fit.
- **Two fonts, two jobs**: Pretendard speaks (content); imweb Sans operates (controls). They never swap roles.
- **Semibold for action**: all button labels are weight 600 — distinctly heavier than 400 body text, lighter than 700 headlines.

The four rule titles and the size-not-weight / native-hangul-fit / two-jobs / semibold-for-action readings are a derived editorial implementation inference from the verified surfaces; they are not Imweb-authored or a separately published UI specification. The sizes, weights, and ratios are recorded.

### Assets

- Logo treatment the source frontmatter records: `logo.type: favicon` and `logo.slug` `https://vendor-cdn.imweb.me/images/main/imweb-2309-favicon-120x120.png?v1`. That slug is a first-party vendor-CDN favicon URL.
- Customer-site screenshots in the template carousel are first-party catalog content; do not replace them with invented brand-color decoration. The chrome around them stays monochrome so the showcased designs carry the color.

Reading the vendor-CDN URL as a first-party favicon pointer, and reading customer-site screenshots as first-party catalog content that must not be replaced with invented decoration, is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `card`, `tab`, `badge`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, a search trigger that only opens search, a tab that only selects a feature group, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not Imweb-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary CTA

- Role: destination control that opens the homepage start action
- Primitive type: `button` · Kind: interactive
- Domain: `https://imweb.me`
- Background: `#15181e`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 16px
- Height: 48px
- Font: 16px / 600 / imweb Sans
- Token-set font record: `16px / 600 imweb Sans`
- Token-set use: `Primary CTA (지금 무료로 시작하기) — near-black ink, not brand cyan`
- Published label: `지금 무료로 시작하기`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades ink CTAs rather than turning a different hue |
| loading | not-applicable | This control opens `지금 무료로 시작하기`; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed |
| success | not-applicable | Same role reason: reaching the start destination is not an operation with a success result on this button |

### Plan Card Primary (Compact)

- Role: destination trial control on a highlighted plan card
- Kind: interactive
- Domain: `https://imweb.me/price`
- Background: `#15181e`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 12px
- Height: 40px
- Font: 14px / 600 / imweb Sans
- Use: Highlighted plan's trial CTA on pricing cards
- This §4 record is not in the token set.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A trial action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens a highlighted-plan trial; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination trial action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the trial destination is not an operation this button reports as success |

### Plan Card Secondary (Outline)

- Role: destination trial control on a non-highlighted plan card
- Primitive type: `button` · Kind: interactive
- Domain: `https://imweb.me/price`
- Background: `#ffffff`
- Text: `#4b515b`
- Border: 1px solid `#dbdee3` (rendered as outline)
- Radius: 8px
- Padding: 8px 12px
- Height: 40px
- Font: 14px / 600 / imweb Sans
- Token-set font record: `14px / 600 imweb Sans`
- Token-set use: `Plan-card trial CTA (14일 무료 체험 시작하기), hairline outline`
- Published label: `14일 무료 체험 시작하기`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A trial action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens `14일 무료 체험 시작하기`; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination trial action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the trial destination is not an operation this button reports as success |

### Icon Button (Search)

- Role: header search trigger
- Primitive type: `button` · Kind: interactive
- Domain: homepage header
- Background: `rgba(113,118,128,0.05)`
- Text: `#bcc0c6`
- Radius: 999999px (full pill). Token-set radius: `9999px` (`tokens.rounded.full: 9999`)
- Padding: 8px
- Height: 32px
- Font: 14px / 400 / imweb Sans
- Token-set font record: `14px / 400 imweb Sans`
- Token-set use: `Header search icon pill, translucent grey bg rgba(113,118,128,0.05)`
- Use: Header search trigger

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A search trigger whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens search; it does not commit a fetch whose in-progress state it reports on itself |
| error | not-applicable | Opening search is not a form submit this button reports as failure |
| success | not-applicable | Same role reason: opening search is not an operation with a success result on this button |

### FAQ Accordion Row

- Role: expandable FAQ row on the pricing page
- Primitive type: `card` · Kind: interactive
- Domain: `https://imweb.me/price`
- Background: `#f8f9fb`
- Text: `#15181e`
- Radius: 8px
- Padding: 28px 32px
- Font: 16px / 400 Pretendard
- Token-set font record: `16px / 400 Pretendard`
- Token-set use: `FAQ accordion row on pricing page`
- Use: Expandable FAQ rows on the pricing page (no shadow, no border)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web row; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable disclosure; visual treatment omitted |
| disabled | applicable | A disclosure whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This row expands or collapses; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Expand and collapse do not report a failed submit on this row |
| success | not-applicable | Same role reason: opening a FAQ row is not an operation with a success result |

### Template Showcase Card

- Role: template / customer-site gallery card in the hero carousel
- Background: `#ffffff`
- Text: `#15181e`
- Radius: 12px
- Font: 16px / 400 Pretendard
- Use: Template/customer-site gallery cards (~318px tall) in the hero carousel
- This §4 record is not in the token set.

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Plan Promo Strip

- Role: top strip on a highlighted plan card
- Primitive type: `badge`
- Kind: non-interactive — a promo label, not a commit control
- Background: `rgba(0,185,255,0.1)`
- Text: `#0090d4`
- Radius: 8px 8px 0px 0px
- Padding: 8px 0px
- Font: 14px / 600 Pretendard
- Token-set font record: `14px / 600 Pretendard`
- Token-set use: `Plan-card promo strip (PG 가입비 면제), cyan tint bg rgba(0,185,255,0.1)`
- Published sample: `PG 가입비 면제 마감 임박`

### Discount Tag

- Role: yearly-billing discount percentage next to plan prices
- Kind: non-interactive — a price label, not a commit control
- Text: `#0090d4`
- Font: 12px / 600 Pretendard
- Use: Yearly-billing discount percentage ("20%") next to plan prices
- Published sample: `20%`
- This §4 record is not in the token set.

### Pricing Feature Tabs

- Role: feature-group switcher on the pricing comparison
- Primitive type: `tab` · Kind: interactive
- Domain: `https://imweb.me/price`
- Text: `#15181e` (active)
- Disabled: `#717680` (inactive label)
- Background: transparent
- Font: 16px / 400 Pretendard
- Token-set font record: `16px / 400 Pretendard`
- Token-set active: `text #15181e`
- Token-set use: `Pricing feature-group tabs (기본/사용자/쇼핑/예약)`
- Published labels: `쇼핑몰 창업 지원`, `기본`, `사용자`, `쇼핑`, `예약`, `통계·분석·마케팅`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | The source names the inactive label `#717680`; that is a selected/unselected treatment, not a `not-applicable` reason |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching a feature-group tab is not an operation with a success result |

### Top Navigation

- Role: top horizontal destination links
- Kind: interactive
- Domain: homepage header
- Background: `#ffffff`
- Text: `#15181e`
- Font: 16px / 400 Pretendard
- Use: Top horizontal nav with a dark primary CTA right-aligned
- Published labels: `주요기능`, `템플릿`, `요금`, `전문가 찾기`, `스토리`, `고객지원`
- This §4 record is not in the token set.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable link; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens `주요기능`, `템플릿`, `요금`, `전문가 찾기`, `스토리`, or `고객지원`; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this link, reports failure |
| success | not-applicable | Same role reason: reaching those destinations is not an operation this link reports as success |

### Data Visualization

- Role: cumulative-sites growth chart
- Bars: `#00b9ff` solid fill
- Radius: 4px 4px 0px 0px (top-rounded bar caps)
- Captions on cyan: `#81dcff` at 24px
- Headline on cyan: white 36px Pretendard 700
- Use: Cumulative-sites growth chart (2021 → 2024 "80만 개"); captions on cyan in `#81dcff`
- Published samples: `80만 개`, `2025 누적 사이트 개설 수`
- This §4 record is not in the token set.

Kind and a state-applicability map are omitted — the chart is a display block, and the source supplies no interactive-kind evidence for it.

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Imweb-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (new site, no content)** | White canvas with a template-first prompt — the empty state IS the template picker. One ink CTA to start; no guilt copy. |
| **Empty (no search results)** | Single Muted Grey (`#717680`) line stating no matches, with category tabs left visible for re-scoping. |
| **Loading (site list / templates)** | Flat `#f8f9fb` skeleton blocks at final card dimensions, 8-12px radius. No shadow shimmer — flat pulse consistent with the shadowless system. |
| **Loading (in-place refresh)** | Previous content stays visible; subtle inline progress. Never block the page. |
| **Error (form validation)** | Field-level plain-Korean message below the input; states what would be valid, not just "필수 입력". |
| **Error (payment / PG)** | Inline banner with the specific failure and the concrete next step (card re-registration, contact path) — pricing FAQ already models this plain, answer-first tone. |
| **Success (site published)** | Calm confirmation with the live URL immediately visible and a share path. The achievement is the user's site, not a celebration animation. |
| **Success (settings saved)** | Brief auto-dismiss toast, past tense, no exclamation. |
| **Skeleton** | `#f8f9fb` blocks, final dimensions, 8px radius, flat pulse. |
| **Disabled** | Labels drop to Faint Alt (`#bcc0c6`) on unchanged surface; ink CTAs fade rather than turning a different hue. |

These rows describe new-site, search, site-list, in-place refresh, form, payment/PG, publish, and settings treatments the source wrote at system level. They are not attached as visual treatments to the destination CTAs, search trigger, tabs, or nav links above. That non-attachment reading is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Centered hero with the 80px rotating keyword as the anchor and a horizontally scrolling template-card carousel beneath
- Feature trio ("디자인이 쉬워요 / 운영이 쉬워요 / 마케팅이 쉬워요") in a 3-up card row
- Pricing: plan cards in a row with the recommended plan carrying the cyan-tinted promo strip; full feature-comparison table below behind tabs
- Full-width alternating bands of white and `#f8f9fb`
- Spacing restated from `tokens.spacing`: `tokens.spacing.xs: 6` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 12` · `tokens.spacing.base: 16` · `tokens.spacing.lg: 28` · `tokens.spacing.xl: 32` · `tokens.spacing.section: 64`
- Shape restated from `tokens.rounded`: small 4 · medium 8 · large 12 · XL 16 · `full: 9999`; the icon-button visible form `999999px` stays on that use

**Easy to scan, easy to start**: the layout mirrors the product pitch — generous vertical rhythm, one idea per band, nothing dense except the opt-in comparison table. **Flat segmentation**: bands separate by background tint, not by shadow or border weight. **Evidence blocks**: the cyan data-viz section is the one saturated moment; whitespace around it makes the growth numbers read as proof. Reading those three source titles as current-surface layout instruction is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, and the source's reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Imweb-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero keyword scales down, carousel becomes swipe |
| Tablet | 640-1024px | 2-up feature cards, plan cards stack or scroll |
| Desktop | 1024-1440px | Full layout, 3-up features, plan row with comparison table |

Touch targets the source records: Primary CTA at 48px height with 12px 16px padding; plan-card CTAs at 40px height; FAQ rows are full-width 88px+ touch targets with 28px 32px padding; icon button at 32px pill with 8px padding.

Collapsing strategy the source records:

- Hero: 80px rotating keyword compresses on mobile; weight 700 maintained
- Template carousel: horizontal swipe at all sizes
- Feature trio: 3-up → stacked single column
- Pricing comparison table: tabbed groups collapse to accordion-style disclosure
- Alternating white/`#f8f9fb` bands maintain full-width treatment

Image behavior the source records:

- Template showcase cards keep 12px radius and no shadow at all sizes
- Customer-site screenshots are the visual texture of the page — the chrome around them stays monochrome so the showcased designs carry the color. Reading that monochrome-chrome-around-screenshots rule as consistent with the flat system is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Imweb's voice as **encouraging, plain-spoken, and ease-obsessed**. The entire homepage is built around one repeated promise — 쉬워요 ("it's easy") — applied to every stage of running a brand: design, operations, marketing. The hero pairs a giant rotating ambition word ("매출내기" — making revenue) with reassurance that the path there requires no developer and no designer. Copy speaks to first-time founders in warm, low-jargon Korean, framing Imweb as the partner that removes excuses ("시작이 쉬워서 성장이 쉬운" — easy to start, so easy to grow). That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Imweb-authored or a separately published UI specification. The Korean lines themselves are live surface copy.

| Context | Tone |
|---|---|
| Hero | Ambition word + reassurance. "매출내기" at 80px, then how easy it is. |
| Feature heads | Three-beat ease refrain: "디자인이 쉬워요", "운영이 쉬워요", "마케팅이 쉬워요". |
| CTAs | Friction-removing imperatives: "지금 무료로 시작하기", "14일 무료 체험 시작하기". Free/trial always stated. |
| Social proof | Numbers as evidence: "지금 가장 빠르게 성장하는 브랜드 빌더, 아임웹" over the cumulative-sites chart. |
| Pricing | Fit-framing, not upsell: "브랜드 운영에 꼭 맞는 요금제를 선택해 보세요". |
| Blog / guides | Conversational and practical, occasionally playful ("쉬웠는데, 더 쉬워졌어요"). |

**Voice samples (verbatim from live surfaces):**

- "시작부터 성장까지 쉬워집니다" — homepage section head. *(verified live 2026-06-10)*
- "디자인이 쉬워요 / 운영이 쉬워요 / 마케팅이 쉬워요" — feature trio heads. *(verified live 2026-06-10)*
- "시작이 쉬워서 성장이 쉬운 아임웹과 함께하세요" — closing section head. *(verified live 2026-06-10)*
- "지금 가장 빠르게 성장하는 브랜드 빌더, 아임웹" — stats section head. *(verified live 2026-06-10)*
- "브랜드 운영에 꼭 맞는 요금제를 선택해 보세요" — pricing headline. *(verified live 2026-06-10)*

The parenthetical glosses on the samples — making revenue; it's easy; easy to start, so easy to grow — sit in the voice paragraph above. Those glosses are a derived editorial implementation inference from the verified surfaces; they are not Imweb-authored or a separately published UI specification.

Further published strings the source records on the inspected surfaces, kept byte-exact:

- 아임웹
- 주식회사 아임웹
- 이수모
- 매출내기
- 쉬워요
- 디자인이 쉬워요
- 운영이 쉬워요
- 마케팅이 쉬워요
- 지금 무료로 시작하기
- 14일 무료 체험 시작하기
- 시작부터 성장까지 쉬워집니다
- 시작이 쉬워서 성장이 쉬운
- 시작이 쉬워서 성장이 쉬운 아임웹과 함께하세요
- 지금 가장 빠르게 성장하는 브랜드 빌더, 아임웹
- 브랜드 운영에 꼭 맞는
- 브랜드 운영에 꼭 맞는 요금제를 선택해 보세요
- 쉬웠는데, 더 쉬워졌어요
- PG 가입비 면제
- PG 가입비 면제 마감 임박
- 20%
- 쇼핑몰 창업 지원
- 기본
- 사용자
- 쇼핑
- 예약
- 통계·분석·마케팅
- 주요기능
- 템플릿
- 요금
- 전문가 찾기
- 스토리
- 고객지원
- 브랜드 빌더
- 80만 개
- 2025 누적 사이트 개설 수
- 필수 입력
- We serve the underserved

**Forbidden register**: technical jargon left unexplained, enterprise-procurement formality, pressure tactics that contradict the "easy and free to try" promise, hype superlatives without a number behind them. That premise-to-register causal is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

Reproduce the Korean strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Korean line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Treating the list as named unresolved values rather than a license to invent is a derived editorial implementation inference from the verified surfaces; it is not Imweb-authored or a separately published UI specification.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Imweb-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Hover and focus-visible treatments.** Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
- **Caption lineHeight in the token set.** YAML `tokens.typography.caption` records size, weight, and use, and does not record a lineHeight. The §3 table's `1.50` for Caption is kept as a body value, not promoted into that YAML key.
