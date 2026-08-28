# JKOPay Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

JKOPay (街口支付) is Taiwan's most widely used electronic payment platform, positioning itself as a full-spectrum fintech lifestyle companion — not just a wallet, but the infrastructure for daily life — and this contract covers the first-party web surface the source inspected for tokens on 2026-06-03: the homepage at `https://www.jkopay.com/application`. The homepage HTML and the Next.js CSS bundle at `https://www.jkopay.com/application/_next/static/css/6d42544b8623d735.css` are the token evidence for that page. `https://www.jkos.com/press.html` and `https://www.jkos.com/download_app.html` are named brand-owned sources for press and download context; they do not supply the computed interface tokens below. Every value stays attached to the surface that established it. Reading that inspected homepage as this contract's token surface, keeping values attached to the surface that established them, and treating the press and download pages as named sources that do not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not JKOPay-authored or a separately published UI specification.

The captured interface layer is built around what the source calls approachable confidence: a bold JKO red (`#C9191D` / token-set `#c9191d`) on a clean white-to-light-gray canvas. The interface uses a clear typographic hierarchy with PingFang TC at its core. Card surfaces carry a subtle gradient from pure white to a warm gray (`#F4F4F6` / token-set `#f4f4f6`), with a barely-there shadow (`0 15px 30px -25px rgba(0,0,0,0.12)` / token-set `rgba(0,0,0,0.12) 0px 15px 30px -25px`) that lifts them off the page. Navigation adopts a frosted-glass treatment (`rgba(255,255,255,0.80)`) that anchors the interface. The hex values, family name, shadow spelling, and frosted-glass alpha in this paragraph are recorded. The characterizations built on them — modern and trustworthy without the austerity of traditional banking; a barely-there shadow without theatrical depth; frosted glass that anchors without competing with content; and an overall atmosphere that is warm, civic, and frictionless, built for the street-level simplicity of scanning and paying in seconds — are a derived editorial implementation inference from the verified surfaces; they are not JKOPay-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. JKOPay (街口支付) was born from a simple frustration: in **2015**, cash still dominated Taiwan's street economy despite the country's technological sophistication. **Kevin Hu**, returning from Wall Street where he had worked as a hedge fund analyst, saw what mobile-first payment infrastructure had done in China and believed Taiwan deserved the same. With backing from the JKO Network ecosystem his family had built, he launched JKOPay with a mandate not of profit maximisation but of societal utility — "For me, the value of entrepreneurship lies in whether it makes people's lives more convenient." The name itself — **街口** (jiē kǒu), meaning "street corner" or "intersection" — embeds the brand's core promise into its identity. JKOPay is not a bank app or a tech platform; it is the infrastructure of the everyday corner, the moment where daily life meets commerce. The brand grew by befriending the merchants others ignored: night market vendors, small-town convenience stores, neighbourhood restaurants. By **2023**, JKOPay had become Taiwan's largest e-wallet by both user count and transaction volume, handling everything from QR-code payments and P2P transfers to insurance, investment, and hospital registration. The brand's evolution reflects this ambition. The tagline shifted from the utilitarian **掃碼行動支付** (scan-code mobile payment) to the expansive **不止支付** (more than payment) — acknowledging that the product had outgrown any single category. JKOPay envisions itself as Taiwan's answer to an integrated fintech super-app: accessible enough for a grandmother at the wet market, sophisticated enough for the daily investor checking their Tuofu Bao savings account. The years, founder, Wall Street / hedge-fund path, JKO Network backing, entrepreneurship quote, 街口 / jiē kǒu naming, merchant groups, 2023 e-wallet ranking, QR-code / P2P / insurance / investment / hospital-registration range, tagline shift, and the grandmother / Tuofu Bao close are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-tagline narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Read the homepage hero and its dual CTAs on `https://www.jkopay.com/application`.
- Complete checkout by showing a personal barcode — `結帳只要出示個人條碼，輕鬆完成付款。`
- Read the current tagline `不止支付` and the benefit line `解鎖生活`.
- Open the download page at `https://www.jkos.com/download_app.html`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as illustrative archetypes based on JKOPay's stated market position and public user research, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or occupation classification is carried into this document or its sidecar. What the source independently records is the audience it names at a group level: Chinese-speaking users across age groups; night market vendors, small-town convenience stores, and neighbourhood restaurants; a grandmother at the wet market; the daily investor checking a Tuofu Bao savings account; and both the tech-native university student and the sixty-year-old market vendor. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not JKOPay-authored or a separately published UI specification.

- Bold JKO red (`#C9191D` / `#c9191d`) as the sole primary action color
- PingFang TC first in the CJK stack, with 17px / 500 button labels
- Warm-gray card surface `#F4F4F6` / `#f4f4f6` rather than pure white cards on white pages
- Frosted-glass top nav at `rgba(255,255,255,0.80)`, 64px tall
- Barely-there card shadow `0 15px 30px -25px rgba(0,0,0,0.12)`
- Primary button radius 12px with padding `12px 29px`; ghost radius 9px
- Blue `#2E7DD9` / `#2e7dd9` reserved for informational links
- Standalone CTA minimum width 194px

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not JKOPay-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Convenience is the product.** The interface must remove friction at every touchpoint — one tap to pay, one scan to complete. *UI implication:* Primary CTA is always above the fold; payment codes load instantly with no intermediate loading state displayed to the user.
2. **Inclusive by design.** Taiwan's market spans every age and digital literacy level. Design must work for both the tech-native university student and the sixty-year-old market vendor. *UI implication:* Minimum touch targets of 48px; large body text (18–21px) for key transactional content; avoid icon-only navigation labels.
3. **Trust is earned through transparency.** The brand grew in a conservative financial culture; clarity and directness are non-negotiable. *UI implication:* All fees, limits, and state changes must be surfaced proactively; no buried fine print. Success and error states are unambiguous.
4. **The street corner, not the boardroom.** JKOPay's voice and visual language stay close to street-level Taiwan, not aspirational finance. *UI implication:* Photography shows real urban Taiwan — convenience stores, wet markets, MRT stations, not abstract lifestyle imagery. Typography favors clarity over elegance.
5. **Ecosystem over transaction.** Every payment is an entry point to a broader financial life. *UI implication:* Post-payment screens offer relevant next actions (savings, cashback, merchant discovery) rather than a dead-end confirmation.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not JKOPay-authored or a separately published UI specification.

- Use `#C9191D` as the sole primary action color; keep all CTAs visually consistent.
- Apply PingFang TC as the first font in the stack for CJK content rendering.
- Maintain 12px border-radius on primary buttons and 20px on cards for brand consistency.
- Use the frosted-glass pattern (`rgba(255,255,255,0.80)`) for sticky navigation.
- Keep button text at 17px / 500 weight regardless of container size.
- Use the #F4F4F6 surface for card backgrounds; never use pure white cards on white pages.
- Maintain a minimum button width of 194px for standalone CTAs.
- Reserve `#2E7DD9` blue strictly for informational/link contexts, not actions.

### Avoid

The source states these six as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not JKOPay-authored or a separately published UI specification.

- Never mix multiple accent colors within a single CTA row — one primary, one ghost maximum.
- Don't use font-weight 700 for body copy; reserve bold for hero headlines only.
- Avoid hard drop shadows deeper than Tier 2; JKOPay uses soft, spread shadows.
- Don't change button radius per breakpoint — 12px on desktop, 9px on mobile only for the ghost variant.
- Never use the brand red (`#C9191D`) for error states — keep error semantically distinct.
- Avoid placing content text below 13px to maintain CJK legibility standards.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — sole primary action, reserved informational blue, warm-gray cards instead of white-on-white — that characterization is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

Primary

- **Brand Red (Primary)** (`#C9191D` / token-set `#c9191d`): primary action color; CTAs, brand highlights, active states, icon fills. Token-set key `tokens.colors.primary`.
- **Brand Red Hover** (`#D51B1F` / token-set `#d51b1f`): button hover state on primary CTAs. Token-set key `tokens.colors.primary-hover`.
- **Brand Red Dark** (`#851113` / token-set `#851113`): pressed/active state on primary interactive elements. Token-set key `tokens.colors.primary-dark`.

Text and dark surfaces

- **Body Text** (`#42434A` / token-set `#42434a`): default text (rgb 66 67 74); high contrast on white surfaces. Token-set key `tokens.colors.body`.
- **Dark Background** (`#171718` / token-set `#171718`): footer, dark-mode panel backgrounds. Token-set key `tokens.colors.dark-bg`.
- **Gray 900 / Dark Nav** (`#292F40` / token-set `#292f40`): section headings, heavy text on dark panels. Token-set key `tokens.colors.dark-nav`.

Canvas and surface

- **White** (`#ffffff`): token-set key `tokens.colors.white`. The §2 palette does not give this key its own role row; the YAML key is kept unmerged from Body Text and from on-button white `#FFFFFF`.
- **Surface / Card** (`#F4F4F6` / token-set `#f4f4f6`): card backgrounds, input fill, tag backgrounds. Token-set key `tokens.colors.surface`.
- **Border / Divider** (`#EDEDF1` / token-set `#ededf1`): horizontal rules, card edges, list separators. Token-set key `tokens.colors.border`.
- **Placeholder Text** (`#B7B8C4` / token-set `#b7b8c4`): input placeholder, disabled labels. Token-set key `tokens.colors.placeholder`.
- **Blue Accent** (`#2E7DD9` / token-set `#2e7dd9`): informational links, secondary highlights. Token-set key `tokens.colors.blue-accent`.

Keeping `tokens.colors.white` as its own key beside the `#FFFFFF` button-text spelling, and keeping uppercase §2 hexes beside lowercase YAML hexes as two records of the same role, is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

### Spacing

Unitless token-set steps from `tokens.spacing`: `xs 4` · `sm 8` · `md 12` · `base 16` · `lg 24` · `xl 32` · `xxl 48` · `section 64`. The source restates related px values in layout and components (16px card padding, 12px / 24px / 29px button padding, 4vw large-screen padding). `tokens.spacing.md: 12` is not `tokens.rounded.md: 12`. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16` and is not a type size. `tokens.spacing.lg: 24` is not ghost padding `12px 24px` as a spacing-step synonym. `tokens.spacing.xs: 4` is not a radius step. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

### Shape

Unitless token-set steps from `tokens.rounded`: `sm 9` · `md 12` · `lg 16` · `full 9999`.

The source's named radius uses, kept on their own rows:

- Ghost / Secondary: 9px — `tokens.rounded.sm` and the YAML ghost `radius: 9`
- Primary CTA: 12px — `tokens.rounded.md` and the YAML primary `radius: 12`
- Card token-set: 12 — YAML `tokens.components.card.radius: 12`, not the §4 body card radius
- Card body: 20px — §4 Standard Card; also the Do-list card radius
- Brand Tag: 40px — a §4-only use, not `tokens.rounded.full: 9999`
- Card radius at `sm`: 30px — a §8 responsive record, not `tokens.rounded.md`

`tokens.rounded.full: 9999` stays the unitless full step. It is not the 40px tag and it is not a type size. `tokens.rounded.md: 12` is not `tokens.spacing.md: 12`. `tokens.rounded.lg: 16` is not `tokens.spacing.base: 16`. `tokens.rounded.sm: 9` is not a spacing step. Keeping those paths unmerged, keeping the YAML card `12` beside the §4 card `20px`, and keeping the §8 `30px` card-at-sm record on its own row, is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Tier 0 – Flat | No shadow | inline text links, tags, navigation items |
| Tier 1 – Card | `0 5px 40px -20px rgba(0,0,0,0.078)` | subtle lift for brand-wrapper cards and icon containers |
| Tier 2 – Modal / Floating | `0 8px 16px 0 rgba(0,0,0,0.20)` | dialogs, dropdown panels, toast notifications |

Token-set path `tokens.shadow.card`: `rgba(0,0,0,0.12) 0px 15px 30px -25px`. The §4 Standard Card writes the same lift as `0 15px 30px -25px rgba(0,0,0,0.12)`. Those two spellings and the Tier 1 `0 5px 40px -20px rgba(0,0,0,0.078)` stay three records; they are not merged into one string. The frosted-glass nav (`rgba(255,255,255,0.80)`) adds implicit elevation through translucency rather than shadow. Dark overlays use `rgba(0,0,0,0.50)` for modals and `rgba(0,0,0,0.80)` for full-screen drawers. Keeping the three shadow spellings unmerged, and reading frosted glass as elevation through translucency rather than shadow, is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a prose-derived reconstruction of the homepage HTML and CSS bundle. The motion contract below sits outside that attribution: the source names Tailwind's default easing and a Material-standard curve, and assigns no computed-sample source to those curve values. The durations, easing roles, and motion rules below, and the omission of the two untraceable curve values, are therefore a derived editorial implementation inference from the verified surfaces; they are not JKOPay-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| Micro | 150ms | hover, focus ring |
| Standard | 250ms | page transitions, modals |
| Expressive | 800ms | QR scan animation, hero entrance |

The source also records interactive state changes (hover, focus, active) at 150–200ms, and a QR-code scan pulse as `transition: transform 0.8s` on concentric circles.

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0.0, 0, 0.2, 1)`) match the documented template / Tailwind-default / Material-standard re-injection path and are not traceable to JKOPay-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Role | Use |
|---|---|
| Default interactive | interactive transitions (source names this as Tailwind `ease-in-out` / Material standard) |
| Entry | elements appearing (source names this as `ease-in`) |
| Exit | elements disappearing (source names this as `ease-out` 150ms) |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- All interactive state changes (hover, focus, active) use the 150–200ms micro duration.
- Modal overlays fade in at 250ms `ease-in`; fade out at 250ms with visibility transition at 100ms `ease-in` offset.
- Page-level transforms (scroll-triggered reveals) use 800ms with AOS (animate-on-scroll) library.
- Never animate layout shifts — only opacity and transform changes.
- QR code scan pulse uses `transition: transform 0.8s` on concentric circles.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The inspected homepage stack leads with PingFang TC. The source does not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification. |
| Live computed surface-use | The source records the homepage CSS bundle as declaring `font-family:PingFang TC` with a 16px base. Token-set source is `prose-derived`. |
| Official distributed asset | No JKOPay-exclusive downloadable font package was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification. |
| Declared-only | The source records the fallback members `apple-system, system-ui, BlinkMacSystemFont, pingfang-tc, aktiv-grotesk, source-han-sans-traditional, Segoe UI, Roboto, Helvetica Neue, 微軟正黑體, sans-serif` after PingFang TC. They are fallbacks, not a second brand face. Classing those fallback members as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification. |
| License | The source records PingFang TC as the CJK-first face. This record does not establish a JKOPay-issued font-license notice. That face-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces the source did not inspect for tokens stays outside this homepage capture. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification. |

### Family

- **Current visible UI family:** `PingFang TC`. Token-set path `tokens.typography.family.sans`. Token-set fallback: `apple-system, source-han-sans-traditional, sans-serif` (`tokens.typography.family.fallback`).
- **Body stack the source writes in §3:** `PingFang TC, apple-system, system-ui, BlinkMacSystemFont, pingfang-tc, aktiv-grotesk, source-han-sans-traditional, Segoe UI, Roboto, Helvetica Neue, 微軟正黑體, sans-serif`
- Do not replace PingFang TC with a system substitute. A fallback member of the stack is never presented as the brand face. That first-face restatement and that fallback prohibition are a derived editorial implementation inference from the verified surfaces; they are not JKOPay-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set path | Token-set use |
|---|---|---:|---:|---:|---|---|
| Display / Hero | PingFang TC | 56 | 700 | 1.5 | `tokens.typography.display` | Display / hero headline |
| Heading LG-3 | PingFang TC | 36 | 600 | 1.5 | `tokens.typography.heading` | Heading LG-3, section labels |
| Body SM | PingFang TC | 18 | 400 | 1.5 | `tokens.typography.body` | Body SM reading text |
| Button | PingFang TC | 17 | 500 | | `tokens.typography.button` | Button label, medium |
| Caption / Body SM-1 | PingFang TC | 13 | 400 | | `tokens.typography.caption` | Caption / body SM-1 |

YAML line heights stay unitless ratios: `1.5` on Display, Heading, and Body. They are never converted to a replacement px (A1a). Button and Caption have no YAML `lineHeight`; that field stays empty rather than inheriting `1.5`. The source scale writes the same token-set sizes with a px suffix in §3; those spellings stay beside the unitless YAML sizes and are not a conversion of them: Display / Hero 56px (mobile); Heading LG-3 36px; Body SM 18px (custom class `text-body-sm`); Caption / Body SM-1 13px; Button 17px. The source scale also writes sizes that are not `tokens.typography.*` keys and are kept beside the table, not as invented keys: Heading LG-1 50px; Heading LG-2 42px; Body MD 21.4px (custom class `text-body-md`); Body SM-2 14px; Base UI 16px. Keeping the five token-set roles on their paths, leaving Button and Caption without an invented line-height, keeping the §3 px spellings beside the YAML sizes, and keeping the §3-only sizes off the token-set keys, is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

Weights the source states: 500 (medium) for UI elements and buttons; 600 for section labels; 700 for display headlines. Line-height: `1.5` base; custom leading classes (`leading-body-sm-1`) for dense CJK text. Those weight reservations and the dense-CJK leading class are recorded; treating them as current-surface type rules is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

### Assets

- Logo treatment the source frontmatter records: `logo.type: favicon` and `logo.slug` `https://www.jkopay.com/application/favicon.ico`.
- Official brand logo SVG the source footer names: `https://img.jkos.com.tw/official_jkos_image/logo-red-square.svg`.
- Photography the source's street-corner principle names: real urban Taiwan — convenience stores, wet markets, MRT stations.

Reading the favicon URL as an identity pointer and the square SVG as the named official logo file, and reading the photography subjects as the source's own principle rather than a stock-library brief, is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `tab`, `card`, `input`, `badge`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, a tab that only selects a destination, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component. A §4-only component that is not in the token set is labeled `not in the token set`.

The source records a primary hover (`#D51B1F`) and a ghost hover (`rgba(134,134,134,0.063)`). Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not JKOPay-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary CTA Button

- Role: destination control for the solid red primary CTA on the inspected homepage
- Primitive type: `button` · Kind: interactive
- Domain: homepage on `https://www.jkopay.com/application`
- Background: `#C9191D` / token-set `#c9191d`
- Text: `#FFFFFF` / token-set `#ffffff`
- Border: none
- Radius: 12px
- Padding: 12px 29px
- Font: 17px / 500
- Hover Background: `#D51B1F` / token-set `#d51b1f`
- Minimum width the source records for standalone CTAs: 194px
- Token-set font record: `17px weight 500`
- Token-set use: `Solid red primary CTA, hover #d51b1f`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; treatment `#D51B1F` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades the red action to `rgba(201,25,29,0.40)` with `cursor: not-allowed`; text remains white |
| loading | not-applicable | This control opens a destination on the homepage; it does not commit a payment whose in-progress state it could report |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed |
| success | not-applicable | Same role reason: reaching the destination is not an operation with a success result on this button |

### Ghost / Secondary

- Role: destination control for the ghost secondary CTA
- Primitive type: `button` · Kind: interactive
- Domain: homepage on `https://www.jkopay.com/application`
- Background (YAML): `#ffffff`
- Background (§4): `rgba(255,255,255,0.30)`
- Text: `#C9191D` / token-set `#c9191d`
- Border: 1px solid `#C9191D`
- Radius: 9px
- Padding: 12px 24px
- Font: 17px / 500
- Hover Background: `rgba(134,134,134,0.063)`
- Token-set font record: `17px weight 500`
- Token-set use: `Ghost secondary, 1px red border`

The YAML background `#ffffff` and the §4 background `rgba(255,255,255,0.30)` stay two records; they are not merged. Keeping those two ghost backgrounds unmerged is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; treatment `rgba(134,134,134,0.063)` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this button reports as success |

### Top Nav

- Role: frosted-glass top navigation
- Primitive type: `tab` · Kind: interactive
- Domain: homepage on `https://www.jkopay.com/application`
- Background (YAML): `#ffffff`
- Background (§4): `rgba(255,255,255,0.80)`
- Height: 64px / `4rem`; `calc(4rem + 2px)` on sm+ for hairline border
- Border: 0 solid `rgba(0,0,0,0.10)`
- Font: 16px / 500
- Text: `#42434A` / token-set `#42434a`
- Token-set use: `Frosted-glass top nav, white at 0.80 alpha`

The YAML background `#ffffff` and the §4 frosted `rgba(255,255,255,0.80)` stay two records; they are not merged. Keeping those two nav backgrounds unmerged is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A nav destination whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control selects a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A tab that only selects a destination does not report a failed request on itself |
| success | not-applicable | Same role reason: selecting a destination is not an operation this tab reports as success |

### Standard Card

- Role: card surface, content container
- Primitive type: `card`
- Background: `#F4F4F6` / token-set `#f4f4f6`
- Border: 1px solid `rgba(244,244,246,0)`
- Radius (YAML): 12
- Radius (§4): 20px
- Shadow: `0 15px 30px -25px rgba(0,0,0,0.12)`
- Padding: 16px
- Token-set use: `Card surface, white-to-warm-gray gradient, subtle shadow`

The YAML radius `12` and the §4 radius `20px` stay two records; they are not merged. The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld. Keeping those two card radii unmerged, and withholding kind and a map because the source supplies no interaction evidence, is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

### Input

- Role: input fill
- Primitive type: `input` · Kind: interactive
- Background: `#f4f4f6`
- Text: `#42434a`
- Token-set use: `Input fill, surface gray`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | The surface contract records placeholder / disabled labels at `#B7B8C4` / `#b7b8c4` |
| loading | not-applicable | The field accepts a value; page skeletons report in-progress content, and the input stays a fill |
| error | applicable | A form field can fail validation; visual treatment omitted on this token-set record |
| success | not-applicable | The field does not complete a payment on itself |

### Brand Tag

- Role: brand tag / badge
- not in the token set
- Background: `#F4F4F6`
- Text: `#C9191D`
- Radius: 40px
- Padding: 2px 12px
- Font: 13px / 500

The source supplies this tag as a §4 body record only. It has no YAML `type` key, so no `Primitive type` line is attached. Kind: non-interactive — a label, not a commit control.

### Informational Link

- Role: informational link / secondary highlight
- Primitive type: `badge`
- Kind: non-interactive — a highlight color, not a commit control
- Text: `#2e7dd9`
- Token-set use: `Informational link / secondary highlight`

### Surface state contract

The source records these system-level states. They are preserved here as written (A2). Treating the rows as a surface contract rather than attaching every row as a visual treatment on the homepage destination CTAs is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

- **Empty:** Illustration of a QR code scanner with the prompt "尚無交易記錄" (No transactions yet) and a single primary CTA to make the first payment.
- **Loading — Scan:** Animated concentric red rings pulse from the QR code centre; no spinner, motion stays within the barcode boundary.
- **Loading — Page:** Full-page skeleton with `#F4F4F6` shimmer bars replacing content blocks; nav and footer remain visible.
- **Error — Payment Failed:** Red-bordered inline alert banner (`#C9191D` left border, `#FFEEEB` background) with clear message and a retry CTA.
- **Error — Network:** Toast notification with `rgba(0,0,0,0.80)` dark background, white text, auto-dismisses after 4 seconds.
- **Success — Payment:** Full-screen confirmation with a bold checkmark icon in `#C9191D`, transaction amount, merchant name, and a "返回首頁" (Back to home) secondary link.
- **Skeleton:** Card skeletons use `#F4F4F6` base with a linear-gradient shimmer; maintains same height and radius as real cards.
- **Disabled:** Buttons drop to `rgba(201,25,29,0.40)` (60% opacity red) and `cursor: not-allowed`; text remains white for legibility.

The Avoid rule that says never use `#C9191D` for error states and the Payment Failed row that uses `#C9191D` as a left border stay two source records; they are not resolved here. Leaving that pair unresolved is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

JKOPay's homepage uses a single-column, full-bleed section layout on mobile, expanding to a constrained max-width container (≈1280px) on desktop with generous horizontal padding (4vw on large screens). Content sections alternate between white and light-gray (`#F4F4F6`) backgrounds. The hero section stacks headline, subtext, and dual CTAs vertically, with a background photo covering the viewport. Feature cards are arranged in a 1-column (mobile) → 2–3-column (tablet/desktop) responsive grid. CTA buttons maintain a minimum width of 194px and are centered on mobile, left-aligned on desktop. Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64. Shape restated from `tokens.rounded`: `sm 9` · `md 12` · `lg 16` · `full: 9999`.

Reading the alternating white / `#F4F4F6` bands as visual rhythm without hard borders is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

Responsive behavior. The source records Tailwind CSS breakpoints `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px). Those breakpoints and the collapsing rules below are stated by the source at system level; treating them as current-surface layout instructions is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| sm | 640px | Hero headline 42px; primary button padding `py-[15px] px-[86px]`; card radius 30px |
| md | 768px | Section padding 25px; feature grids 2-col |
| lg | 1024px | Hero headline 50px; feature grids 3-col |
| xl | 1280px | Constrained max-width container (≈1280px) |

Further responsive records, as the source states them:

- **Hero headline:** 36px mobile → 42px sm → 50px lg
- **Primary button padding:** `py-[12px] px-[24px]` mobile → `py-[15px] px-[86px]` sm+
- **Card radius:** 20px mobile → 30px sm → consistent 20–24px on cards
- **Section padding:** 16px mobile → 25px md → 40–60px sm+
- **Grid columns:** 1-col mobile → 2-col md → 3-col lg for feature grids
- **Nav height:** fixed `4rem` (64px) with `calc(4rem + 2px)` on sm+ for hairline border

Touch targets the source records in Principles: minimum 48px. Standalone CTA minimum width: 194px. Button text stays 17px / 500 regardless of container size.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes JKOPay's voice with the adjectives **Approachable, empowering, matter-of-fact**. Copy uses everyday Mandarin, keeps sentences short and action-oriented, leads with user benefit (`解鎖生活` — unlock life), addresses users with **你**, and stays warm but efficient — one idea per sentence. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not JKOPay-authored or a separately published UI specification. The published lines themselves are source-recorded copy.

| Do | Don't |
|---|---|
| Use everyday Mandarin; keep sentences short and action-oriented | Use banking jargon or formal register |
| Lead with user benefit ("解鎖生活" — unlock life) | Lead with product features or technical specs |
| Use "你" (you) to address users directly | Use passive constructions or impersonal phrasing |
| Be warm but efficient — one idea per sentence | Over-explain or add hedging language |

**Voice samples (illustrative)** — the source marks these illustrative; they are not promoted as a complete product-microcopy guide. That "illustrative, not a complete product-microcopy guide" reading is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

- *Illustrative:* "不止支付，用手機聰明解鎖生活每一刻。" (More than payment — smartly unlock every moment of life with your phone.)
- *Illustrative:* "結帳只要出示個人條碼，輕鬆完成付款。" (Just show your barcode to complete payment — done in seconds.)
- *Illustrative:* "從早餐到晚餐，從捷運到便利商店，街口陪你走過每一個生活場景。" (From breakfast to dinner, from the MRT to the convenience store — JKO is with you at every moment of life.)

Further published strings the source records, kept byte-exact:

- 街口支付
- 街口
- jiē kǒu
- 掃碼行動支付
- 不止支付
- 解鎖生活
- 不止支付，用手機聰明解鎖生活每一刻。
- 結帳只要出示個人條碼，輕鬆完成付款。
- 從早餐到晚餐，從捷運到便利商店，街口陪你走過每一個生活場景。
- 尚無交易記錄
- 返回首頁
- 你
- For me, the value of entrepreneurship lies in whether it makes people's lives more convenient.
- Tuofu Bao
- 微軟正黑體
- PingFang TC

**Forbidden register:** banking jargon, formal register, feature-led openers, passive or impersonal phrasing, over-explanation, hedging language. That premise-to-register causal is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

Reproduce the published strings above byte-exact rather than translating or re-casing them. A gloss may sit beside a line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Treating the list as named unresolved values rather than a license to invent is a derived editorial implementation inference from the verified surfaces; it is not JKOPay-authored or a separately published UI specification.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they match the documented template / Tailwind-default re-injection path and are not traceable to JKOPay-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Full radius step.** `tokens.rounded.full: 9999` is the unitless full step. It is not the 40px Brand Tag.
- **Card radius keep-both.** YAML `tokens.components.card.radius: 12` and the §4 Standard Card `20px` stay two records.
- **Ghost and nav backgrounds keep-both.** YAML `#ffffff` and the §4 frosted / translucent spellings stay two records.
- **focus-visible treatments.** Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
