# PayPal Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

PayPal. Catalog homepage identity is `https://www.paypal.com/us/home`. This contract covers the two first-party surfaces the source names for live inspect on 2026-06-22: the US consumer homepage at `https://www.paypal.com/us/home` and the merchant page at `https://www.paypal.com/us/webapps/mpp/merchant`. Token extraction is `tokens.source: live-extract` (`tokens.extracted` 2026-06-22). Source token note, kept as written: primary = live brand midnight blue (`#002991`) used in immersive sections; sky blue (`#60cdff`) is the hero surface accent. PayPal Pro at weight 900 for display; Plain for UI text. All CTAs are full-pill (1000px radius) weight 900. Catalog `primary_color` is `#002991`. Every value stays attached to the surface that established it. Reading those two named pages as this contract's token surfaces, keeping the token note's register split, and keeping values attached to the surface that established them, are derived editorial implementation inferences from the verified surfaces; they are not PayPal-authored or a separately published UI specification.

The source describes the homepage as a study in high-contrast black-and-white modernism punctuated by a signature sky blue hero. The page opens with an immersive pale-blue section (`#60cdff`) carrying a monumental black headline in **PayPal Pro** at nearly 100px weight 900. This "PayPal Open" aesthetic is the 2023 rebrand: out with the legacy gradient blues, in with a graphic, editorial visual language. Beneath the sky-blue hero, the system alternates between pure white canvas sections and deep midnight-blue (`#002991`) immersive sections. These dark sections carry white-text headlines and white-outline pill buttons. The custom `PayPal Pro` typeface with its geometrically rounded `Century Gothic`-lineage letterforms is everywhere display-scale: weight 900 at headlines, while the UI font `Plain` at weight 400 handles navigation and body copy. Every call-to-action on the consumer homepage is a full-pill `1000px` radius button at weight 900. The hex values, family names, 1000px radius, weight 900, the 2023 rebrand label, the Century Gothic heritage clause, and the black/white CTA pairing are recorded. Readings of that layer as projecting authority and consumer-brand boldness in equal measure, as standing closer to Nike or Apple than to a traditional bank, as an opinionated choice that signals confidence, as a dramatic light/dark cadence, and as a clear two-font two-weight system, are a derived editorial implementation inference from the verified surfaces; they are not PayPal-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. PayPal was founded in **1998** by **Peter Thiel, Max Levchin, Luke Nosek, Ken Howery,** and others — originally as **Confinity**, a cryptography-focused startup based in Palo Alto. The company merged with **Elon Musk's X.com** in **2000**, with PayPal emerging as the combined brand. eBay acquired PayPal in **2002 for $1.5 billion** and spun it off as an independent publicly traded company in **2015** (NASDAQ: PYPL). Headquartered in **San Jose, California**, PayPal today operates across **200+ countries**, supports **25+ currencies**, and serves approximately **400 million active accounts globally**. The founding insight — that moving money should be as simple as sending email — defined a category that didn't formally exist: digital wallet + peer-to-peer payments + online checkout, all in one network. PayPal's network effect is its moat: merchants accept PayPal because customers trust it; customers use it because merchants accept it. The 2023 rebrand under CEO Alex Chriss signaled a deliberate pivot: away from legacy financial-services visual language (muted blues, cautious rounded-rectangle buttons, corporate gradients) toward a bold consumer-brand aesthetic anchored by sky blue, maximum-weight headlines, and full-pill CTAs. The "PayPal Open" campaign positioned the platform as infrastructure for independent commerce — not a bank, not just a checkout button, but an open financial network. The word "Open" in PayPal Pro at nearly 100px is the design-system argument made typographically: unambiguous, large, and confident. The years, founders, Confinity, X.com, eBay acquisition, spin-off, NASDAQ: PYPL, San Jose headquarters, 200+ countries, 25+ currencies, 400 million active accounts, the founding-insight sentence, the network-effect sentence, CEO Alex Chriss, the 2023 rebrand pivot, the "PayPal Open" campaign positioning, and that closing typographic-argument sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-rebrand narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Read the homepage hero "Pay, send, and save smarter" on `https://www.paypal.com/us/home`.
- Open a recorded marketing CTA the source names on that homepage: "Sign Up", "Send Money", "Get Paid", or "Browse Offers".
- Read the merchant page line "Take your business further, faster" on `https://www.paypal.com/us/webapps/mpp/merchant`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable PayPal user segments (peer-to-peer senders, online shoppers, small merchants, enterprise checkout integrators), not individual people, so those biographies are dropped rather than promoted, and no name, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is that grouping: peer-to-peer senders, online shoppers, small merchants, enterprise checkout integrators. Reading those source-named groups as this product's audience, and dropping the source's archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not PayPal-authored or a separately published UI specification.

- Full-pill CTAs (1000px radius) in weight 900 PayPal Pro — YAML `tokens.rounded.full: 1000`
- Sky blue (`#60cdff`) as the hero surface accent — YAML `tokens.colors.primary-light` and `tokens.colors.accent-sky` share this hex and stay unmerged
- Midnight blue (`#002991`) for immersive brand-dark sections — replacing the legacy `#003087` deep navy; catalog `primary_color` and YAML `tokens.colors.primary`
- PayPal Pro display font (Century Gothic heritage) at weight 900 for all headlines
- Plain UI font at weight 400 for navigation and body — a clean functional pairing
- Black-on-white / white-on-black as the everyday CTA contrast system (not the old PayPal blue)
- Minimal shadow system: large-radius diffuse lift `rgba(0, 0, 0, 0.08) 0px 24px 48px 0px` on `layered-card` elements; everything else is flat color separation

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not PayPal-authored or a separately published UI specification. The source states them in its own Principles section. The mission line, the "See How You're Safe" CTA, and the rebrand positioning are the source's own sentences. Every *UI implication* below is that same derived class.

1. **Financial inclusion by design.** PayPal's mission is "democratizing financial services" — making tools available to those underserved by traditional banking. *UI implication:* the checkout experience prioritizes clarity; zero unnecessary friction between intent and action.
2. **Trust through simplicity.** The brand earns trust by removing complexity, not by performing security theater. *UI implication:* no cluttered dashboards; bold simple type over decorative chrome; "See How You're Safe" is a CTA, not a warning.
3. **Open infrastructure.** The rebrand explicitly positions PayPal as a platform for independent commerce. *UI implication:* the design system supports both consumer-wallet and merchant-tools surfaces with the same token set — the font, the pill, the color cadence are identical.
4. **Bold confidence, not corporate caution.** The shift from rounded-rectangle to full-pill, from 600-weight to 900-weight, from muted-blue to sky-blue is intentional brand repositioning. *UI implication:* every design decision should read as decisive. If a component feels tentative, it is off-brand.
5. **Color as architecture.** The alternating white / sky-blue / midnight-blue section system is not decoration — it is the structural logic of every PayPal marketing page. *UI implication:* color sections replace dividers; background-change is the primary navigation cue between content blocks.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not PayPal-authored or a separately published UI specification.

- Use PayPal Pro weight 900 for all display headlines — the maximum weight is the brand
- Use full-pill radius (1000px) for every CTA button — no rounded rectangles on marketing surfaces
- Use sky blue (`#60cdff`) as the hero entry surface color — it is the new face of PayPal
- Use midnight blue (`#002991`) for immersive brand-dark sections
- Alternate white and brand-color sections to create the PayPal scroll cadence
- Use `Plain` at weight 400 for all navigation and functional UI text
- Pair black-fill buttons on light sections with white-outline buttons as secondary actions
- Keep headline copy short and declarative — the type announces, not explains

### Avoid

The source states these seven as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not PayPal-authored or a separately published UI specification.

- Don't use the legacy PayPal blue (`#003087` or `#0070ba`) for the primary brand color — the 2023 rebrand moved to midnight blue (`#002991`) and sky blue (`#60cdff`)
- Don't use rounded-rectangle buttons (16px or 24px radius) — PayPal CTAs are full-pill
- Don't apply the PayPal brand blue as an interactive element color — `#0070e0` is for hyperlinks only
- Don't use weight 700 or lower for PayPal Pro headlines — 900 is the only weight at display scale
- Don't use drop shadows for section separation — use full-bleed background color changes
- Don't use Plain for headlines — PayPal Pro owns every display-scale text element
- Don't mix warm and cool neutrals in the same section — the system separates them intentionally

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, keeping same-hex roles unmerged, and attaching characterizations (signature hero accent, brand dark, everyday CTA contrast) to those recorded uses, are derived editorial implementation inferences from the verified surfaces; they are not PayPal-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **PayPal Midnight Blue / Primary** (`#002991`): YAML `tokens.colors.primary`. Catalog `primary_color`. Deep brand blue for immersive sections, the PayPal logo field, and dark-surface backgrounds. Replaces the legacy `#003087` dark navy as the primary immersive color.
- **PayPal Sky Blue / Primary light** (`#60cdff`): YAML `tokens.colors.primary-light`. The signature hero accent — a vibrant, modern light blue (`blue-400-plate` in PayPal's internal palette) used for the hero section background and card accents. Live inspect: hero section bg `rgb(96, 205, 255)` = `#60cdff`.
- **Accent sky** (`#60cdff`): YAML `tokens.colors.accent-sky`. Same hex as primary-light; this is the accent-sky key, not a second paint of primary-light.
- **Pale Sky** (`#b8e9ff`): YAML `tokens.colors.accent-pale-sky`. Tinted sky-blue surface for lighter section accents and gradient transitions.
- **Pure White / Canvas** (`#ffffff`): YAML `tokens.colors.canvas`. Primary page background and content card surface. The dominant canvas.
- **On-primary** (`#ffffff`): YAML `tokens.colors.on-primary`. Same hex as canvas; this is the on-primary key, not a second white paint.
- **Ink Black** (`#000000`): YAML `tokens.colors.ink`. Primary heading, CTA button fill on light sections, and body text on marketing surfaces.
- **Link Blue** (`#0070e0`): YAML `tokens.colors.link`. Standard hyperlink and inline-action text color (standard blue accessibility value). Not the active-tab `rgb(0, 0, 238)` recorded on nav tabs.
- **Muted Grey** (`#686a6d`): YAML `tokens.colors.muted`. Secondary text, captions, metadata, muted labels.
- **Warm Ivory** (`#f1efea`): YAML `tokens.colors.surface-warm`. Warm off-white used for select feature sections, adding warmth to break the cold white grid.
- **Surface Grey** (`#edf0f2`): YAML `tokens.colors.surface-grey`. Cool neutral light grey for close-button backgrounds and subtle chrome.
- **Surface Light Blue** (`#f0f2f9`): YAML `tokens.colors.surface-light-blue`. A barely-there blue-tinted surface for badge/tag backgrounds.
- **Border Default** (`#e6e7e8`): YAML `tokens.colors.border-default`. Standard border for form inputs and card outlines.
- **Success Green** (`#007a56`): YAML `tokens.colors.success`. Success state indicators — payment confirmed, action completed.
- **Error Red** (`#c0212b`): YAML `tokens.colors.error`. Error state indicators — payment declined, form validation failures.

`tokens.colors.primary-light: #60cdff` is not `tokens.colors.accent-sky: #60cdff`. `tokens.colors.canvas: #ffffff` is not `tokens.colors.on-primary: #ffffff`. `#0070e0` is the link role; it is not `rgb(0, 0, 238)` on the active nav tab. Legacy `#003087` and `#0070ba` are Don't-list prohibitions, not current color roles.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 16 | `tokens.spacing.md` |
| base | 24 | `tokens.spacing.base` |
| lg | 32 | `tokens.spacing.lg` |
| xl | 48 | `tokens.spacing.xl` |
| xxl | 64 | `tokens.spacing.xxl` |
| section | 96 | `tokens.spacing.section` |

The source restates the scale in px as 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, and names a base unit of 8px. Section rhythm: alternating white and sky-blue/midnight-blue full-width bands. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.md: 16` is not the content-card `16px` radius and is not body `16px`. `tokens.spacing.lg: 32` is not a type size. `tokens.spacing.xl: 48` is not cookie-consent height `48px`. `tokens.spacing.xxl: 64` is not a breakpoint. `tokens.spacing.section: 96` is the YAML section step; body layout also writes 96px+ section-to-section spacing and `96px → 48px` on mobile. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| sm | 4 | `tokens.rounded.sm` |
| md | 8 | `tokens.rounded.md` |
| lg | 25 | `tokens.rounded.lg` |
| full | 1000 | `tokens.rounded.full` |

Body radius scale, longer form: Micro (4px): badge/tag pills; Small (8px): form inputs, small containers; Medium (16px): content cards and feature panels; Large (25px): nav item container chrome; Full (1000px): all CTA buttons — the signature pill shape. YAML has no `16` rounded step; the Medium (16px) card radius lives on `card-surface` (`radius: 16px`) and on the CookieBanner container (radius 16px), not on `tokens.rounded`. Nav tab items record `104px` per tab; that `104px` is not `tokens.rounded.lg: 25`. Cookie consent YAML `cookie-dialog` records `1000px`; that is `tokens.rounded.full` geometry on that control, not a second full step. Keeping those local radii on their components, and keeping each YAML step on its own key path, is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow — full-bleed color sections | Hero, product highlight sections |
| Elevated Card (Level 1) | `rgba(0, 0, 0, 0.08) 0px 24px 48px 0px` | `layered-card` elements — feature cards on white canvas (live-measured). YAML `tokens.shadow.card` |
| Standard (Level 2) | `rgba(0, 0, 0, 0.15) 0px 8px 24px` | Elevated cards, sticky nav. YAML `tokens.shadow.elevated` |
| Overlay (Level 3) | `rgba(0, 0, 0, 0.3)` scrim | Modals and video overlays |

There is also an ambient `rgba(0, 0, 0, 0.01) 0px 0px 17px` (`rgba(0,0,0,0.01) 0px 0px 17px`) on the CookieBanner container (radius 16px), effectively invisible. Body §6 also writes Level 2 as `rgba(0,0,0,0.15) 0px 8px 24px` and Overlay as `rgba(0,0,0,0.3)`. Live inspect records brand dark section bg `rgb(0, 41, 145)` = `#002991`. **Shadow Philosophy** as the source states it: PayPal's rebrand moved away from the heavy blue-tinted shadows of the legacy system toward flat color-section architecture. Depth is communicated through background-color contrast (white → sky blue → midnight blue) rather than elevation. When shadows appear (on standalone `layered-card` elements), they use a large-radius, low-opacity diffuse lift — `rgba(0, 0, 0, 0.08) 0px 24px 48px 0px` — not brand-colored and not a tight drop shadow. The focus is on surface, not lift. `tokens.shadow.card` is not `tokens.shadow.elevated`. The Overlay scrim and the CookieBanner ambient shadow are body §6 recordings; they are not YAML shadow keys. Reading that stack as color-section architecture rather than a lift ladder, and keeping the CookieBanner ambient shadow on that container, is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

### Motion

Source-stated duration roles. The source HTML comment attaches live inspect to token-level claims in §1–9; §15 sits in the philosophy layer (sections 10–15) and is not in the live-inspect list. Treating §15 as philosophy-layer rather than live-inspect, treating the duration table, easing names, signature motions, and reduced-motion line as source-stated rather than computed CSS, and treating the omitted `ease-exit` curve as matching the legacy spec-template example, is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection ticks, checkbox, radio |
| `motion-fast` | 120ms | Hover states, button press, focus ring |
| `motion-standard` | 200ms | Dropdown, sheet, tooltip, form validation |
| `motion-slow` | 300ms | Section transitions, modal entrance, page-level reveals |

Source-stated easing names (uncomputed cubic-bezier omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only) | Arriving — modals, sheets, menus |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Dismissals and exits |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only) | Two-way transitions |

**Signature motions** (source-stated names and uses; `ease-*` here are those token names, not computed curves):

1. **Pill button hover**: subtle scale-up (`scale(1.02)`) on hover at `motion-fast / ease-standard` — the pill inflates slightly to signal responsiveness without losing its contained geometry.
2. **Section scroll reveal**: content blocks within blue sections fade in from below at `motion-slow / ease-enter` as the user scrolls. The section background color is already visible before content appears.
3. **Checkout loading**: the PayPal two-letter monogram logo animates to signal processing. This is a brand-owned animation used at the moment of highest trust (payment processing).
4. **Reduce motion**: under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`. The PayPal checkout loader falls back to a static state indicator. No motion at the cost of accessibility.

Generic `focus` in the `motion-fast` use list (Hover states, button press, focus ring) is not `focus-visible` treatment. Exact cubic-bezier curves are unattributed and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | PayPal Pro is named as internally named, Century Gothic heritage, geometric rounded modern — all headlines and CTAs. Plain is named as PayPal's proprietary UI sans-serif. The marketing surfaces ship those faces; they do not publish a separately issued type specimen in this packet. |
| Live computed surface-use | Homepage and merchant inspect (source HTML comment): H2 "Pay, send, and save smarter" PayPal Pro 99.4px / weight 900 / color `rgb(0,0,0)` on `#60cdff` bg; H2 "Take your business further, faster" PayPal Pro 67.1px / weight 900; H1 "PayPal Open" PayPal Pro 99.4px / weight 900 / color `rgb(0,0,0)`; body `font-family` Plain / color `rgb(0,0,0)` / font-size 16px / line-height 18.4px. |
| Official distributed asset | No PayPal-exclusive publicly distributed type family was verified in this packet. |
| Declared/system fallback | `"Helvetica Neue", Arial, sans-serif` is the recorded fallback after Plain. |
| License | This record does not establish a PayPal font-license notice for PayPal Pro or Plain. |

Reading PayPal Pro as the display/CTA face and Plain as the UI face, classing Helvetica Neue / Arial as fallback context rather than substitutions, leaving no extra family promoted, reading Official product-use as those faces shipping on the marketing surfaces without a separately issued type specimen in this packet, and leaving Official distributed asset and License unnamed in this packet, are derived editorial implementation inferences from the verified surfaces; they are not PayPal-authored or a separately published UI specification.

### Family

- **Display:** `PayPal Pro` — Token-set path `tokens.typography.family.display`
- **UI / Body:** `Plain` — Token-set path `tokens.typography.family.ui`
- **Fallback:** `Helvetica Neue, Arial, sans-serif` — Token-set path `tokens.typography.family.fallback`

A fallback member of a stack is never presented as the brand face. Do not replace PayPal Pro or Plain with a system substitute, and do not present Helvetica Neue or Arial as PayPal Pro or Plain. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). The parenthetical px figures and the `~` / fluid / 17.86px spellings are the source §3 table, not a replacement of the YAML size. Live 99.4px / 67.1px / 18.4px are the source HTML comment's inspect figures, not a replacement of YAML `99` / `67` / `1.40`. Token-set `use` strings are kept verbatim. Keeping YAML line heights as unitless ratios, keeping the YAML singles and the §3 / live / §9 `~96px` spellings on separate readings, and keeping Muted text as a §3-only row rather than a YAML path, are derived editorial implementation inferences from the verified surfaces; they are not PayPal-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---|---:|---|---|---|
| Display Hero | PayPal Pro | YAML `99`; §3 `~99px (fluid)`; live `99.4px`; §9 construction prompt `~96px` | 900 | 1.10 | YAML `-1.5`; §3 `-1.5px` | Homepage hero headline — PayPal Pro ExtraBold |
| Section Heading | PayPal Pro | YAML `67`; §3 `~67px (fluid)`; live `67.1px` | 900 | 1.15 | YAML `-1.0`; §3 `-1.0px` | Section headings — PayPal Pro ExtraBold |
| Sub-section | PayPal Pro | YAML `45`; §3 `~45px (fluid)` | 900 | 1.20 | YAML `-0.6`; §3 `-0.6px` | Sub-section titles — PayPal Pro |
| CTA Button | PayPal Pro | YAML `18`; §3 `17.86px (≈18px)` | 900 | 1.00 | normal | CTA button labels — PayPal Pro |
| Navigation | Plain | 16px | 400 | 1.00 | normal | Navigation links — Plain |
| Body / UI | Plain | 16px | 400 | YAML `1.40`; live body line-height `18.4px` | normal | Standard UI and body text — Plain |
| Caption / Label | Plain | 14px | 400 | 1.50 | normal | Small labels and metadata — Plain |
| Muted text | Plain | 14px | 500 | 1.40 | normal | Helper links, footnotes — §3 table only; not a YAML type-role key |

Token-set paths: `tokens.typography.display-hero` · `tokens.typography.display-lg` · `tokens.typography.section` · `tokens.typography.body` · `tokens.typography.nav` · `tokens.typography.button` · `tokens.typography.caption`. YAML `nav` 16px / 400 / 1.00 is not merged with YAML `body` 16px / 400 / 1.40. YAML `button` 18 is not merged with §3 `17.86px`. YAML `caption` 14px / 400 / 1.50 is not merged with §3 Muted text 14px / 500 / 1.40. §9 construction prompt `~96px` is that prompt's rounding of the hero size; it is not a second Display Hero token beside YAML `99` / live `99.4px`. Fluid headline scale as the source states it: display sizes are fluid/viewport-relative (using CSS `clamp` or viewport units), so the hero headline ranges from ~56px on mobile to ~99px on large desktop. The underlying weight never changes.

### Type rules

The source states these four as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

- **Weight 900 as brand signature**: PayPal uses maximum weight (900 / ExtraBold / Black) exclusively for all display text. There is no headline at 600 or 700. This creates an unambiguous typographic identity — decisive and bold.
- **Two fonts, two registers**: PayPal Pro owns brand/marketing/CTA; Plain owns every functional UI element. Neither font crosses into the other's domain.
- **Fluid headline scale**: Display sizes are fluid/viewport-relative. Weight 900 is maintained throughout.
- **Short copy discipline**: Headlines are brief declarative statements ("Pay, send, and save smarter"). Description copy is minimal. The type does not explain; it announces.

### Assets

Logo treatment the source frontmatter records: `logo.type: simpleicons` and `logo.slug` `paypal`. That slug is an identity pointer through Simple Icons, not a PayPal-hosted brand file URL. Treating that Simple Icons slug as a catalog identity pointer rather than as a captured first-party mark is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification. YAML `tokens.components` names nine controls; each keeps the primitive `type` recorded on that key. Cookie Consent (Tertiary) and Log In are body/§9 recordings and are labelled `not in the token set`. Primitive type is not copied onto those two from another control. Sky-blue and midnight-blue sections are color-section uses, not extra component records.

Source §14, kept as the state contract:

| State | Treatment |
|---|---|
| **Empty (no transactions, personal wallet)** | White canvas. Single line in muted grey (`#686a6d`) describing zero activity. One black-fill pill CTA to a first action ("Send your first payment"). Minimal — no illustrations. |
| **Empty (merchant dashboard, no sales)** | Clean statement in `#000000` at body scale; a single CTA in the primary pill style. |
| **Loading (checkout page)** | PayPal spinner — the wordmark animates into a ring. Background stays white. Content shifts in when ready. |
| **Loading (dashboard data)** | Skeleton rectangles at the dimensions of the final content. Neutral grey `#e6e7e8` blocks, no shimmer color tint. |
| **Error (payment declined)** | Inline alert with error red-adjacent tone. Specific code + clear plain-English explanation + retry path. PayPal's error system names the decline reason (e.g., "Insufficient funds") rather than hiding behind a generic message. |
| **Error (form validation)** | Field-level inline message below the input. Red border on the field. The message says what went wrong and how to fix it. |
| **Success (payment sent)** | Brief inline confirmation. No toast — the transaction row updates inline. "Sent. [amount] to [name]." Then transaction history reflects immediately. |
| **Success (checkout complete)** | Dedicated confirmation screen. PayPal wordmark + "You're all set." + order summary. Calm, uncluttered. No celebration animation. |
| **Skeleton** | Grey `#e6e7e8` blocks at final dimensions. Simple opacity or shimmer. No brand-colored animation. |
| **Disabled** | Reduced opacity on button surface and text. Black fill fades to grey; pill shape preserved. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply on interactive controls. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless the source recorded one for that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. Source §4 input **Focus** (border/ring shifts to `#0070e0`) is an observed Focus treatment; it is not `focus-visible` evidence and is not copied onto a `focus-visible` row as a colour. Generic `focus` in the `motion-fast` use list is not that keyboard treatment either. `scale(1.02)` stays a signature-motion name in Foundations; it is not copied here as a computed hover paint. `card-surface` and `badge-status` have a YAML `type` but no interactive-kind evidence, so kind and the applicability map are omitted rather than decided. This is not a complete state-coverage claim. Treating those applicability verdicts, the Focus ≠ `focus-visible` split, the §4-only `not in the token set` labels, and the C4 omissions as implementation inferences, is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

### Button Primary (Black Fill)

- Role: Primary CTA — black fill on light backgrounds
- Primitive type: `button` · Kind: interactive
- Background: `#000000`
- Text: `#ffffff`
- Radius: 1000px
- Padding: YAML `14px 33px`; live inspect `13.93px 32.86px`
- Height: 52px
- Font: YAML `18px / 900 PayPal Pro`; §4 `17.86px PayPal Pro weight 900`
- Token-set use: `Primary CTA — black fill on light backgrounds`
- Body use: Primary CTAs on light backgrounds ("Sign Up", "Enterprise Solutions", "Read Case Study")
- YAML `tokens.components.button-primary`
- Observed: default; signature-motion hover `scale(1.02)` is named in Motion, not a computed paint here

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted as a computed paint. Source-stated signature motion `scale(1.02)` lives in Motion |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Source §14 Disabled: reduced opacity; black fill fades to grey; pill shape preserved. That row is not copied here as a computed paint |
| loading | not-applicable | Recorded uses ("Sign Up", "Enterprise Solutions", "Read Case Study") open a destination; this control does not commit an in-place operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports whether that request failed |
| success | not-applicable | Reaching the destination is not an operation this button reports as success |

### Button Outline Dark

- Role: Secondary CTA on light sections
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#000000`
- Border: `1px solid #000000`
- Radius: 1000px
- Padding: YAML `14px 33px`; live inspect `13.93px 32.86px`
- Height: 52px
- Font: YAML `18px / 900 PayPal Pro`; §4 `17.86px PayPal Pro weight 900`
- Token-set use: `Secondary CTA on light sections`
- Body use: Secondary CTAs on white sections ("Browse Offers", "Contact Sales", "Learn More")
- YAML `tokens.components.button-outline-dark`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A secondary action can be unavailable; visual treatment omitted |
| loading | not-applicable | Recorded uses ("Browse Offers", "Contact Sales", "Learn More") are destination/contact links; the control does not commit an in-place operation |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this button reports as success |

### Button Outline Light (Dark Section)

- Role: Secondary CTA on dark blue sections
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Radius: 1000px
- Padding: YAML `14px 33px`; live inspect `13.93px 32.86px`
- Height: 52px
- Font: YAML `18px / 900 PayPal Pro`; §4 `17.86px PayPal Pro weight 900`
- Token-set use: `Secondary CTA on dark blue sections`
- Body use: Secondary CTAs on midnight blue sections ("Learn About Pay in 4", "Send Money", "Get Paid")
- YAML `tokens.components.button-outline-light`
- Live inspect: Outline light CTA "Learn About Pay in 4": transparent bg / `#ffffff` text / `1px solid #ffffff`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A secondary action can be unavailable; visual treatment omitted |
| loading | not-applicable | Recorded uses on the captured marketing sections open a destination (including "Send Money", "Get Paid", "Learn About Pay in 4"); this control does not commit an in-place money movement whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this button reports as success |

### Button White (Dark Section)

- Role: Play/video CTA on dark surfaces
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #ffffff`
- Radius: 1000px
- Padding: YAML `14px 33px`; live inspect `13.93px 32.86px`
- Height: 52px
- Font: YAML `18px / 900 PayPal Pro`; §4 `17.86px PayPal Pro weight 900`
- Token-set use: `Play/video CTA on dark surfaces`
- Body use: Video/media play triggers on dark sections ("Play video")
- YAML `tokens.components.button-white`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A play trigger can be unavailable; visual treatment omitted |
| loading | not-applicable | This control starts playback; it does not report an in-place request outcome on the button |
| error | not-applicable | Media failure, if any, is not a result state this button reports |
| success | not-applicable | Playing is not a completion confirmation on this button |

### Nav Tab (Personal / Business)

- Role: Top nav section tabs (Personal / Business)
- Primitive type: `tab` · Kind: interactive
- Text: YAML `fg: #000000`
- Font: YAML `16px / 400 Plain`; §4 `16px Plain weight 400`
- Radius: `104px`
- Padding: `0 20px`
- Height: `40px`
- Active: YAML `black bg with link-blue text`; §4 `black background with rgb(0, 0, 238) link text`
- Token-set use: `Top nav section tabs (Personal / Business)`
- YAML `tokens.components.nav-tab`
- Header chrome recorded beside this control, not as a second YAML type: Top Nav background `#000000` (sticky/transparent at scroll top); text `#000000` (inverted when on light sections)

`rgb(0, 0, 238)` is this active-tab recording; it is not YAML `tokens.colors.link` `#0070e0`. Tab radius `104px` is this control; it is not `tokens.rounded.lg: 25`. Header bg `#000000` is not tab fg `#000000` as a second paint.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A section tab selects Personal / Business; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the item |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: active tab as recorded above. Treating that appearance as a captured variant, not `focus-visible` evidence, is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

### Input Form

- Role: Login and form inputs
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Border: `1px solid #e6e7e8`
- Radius: `8px`
- Font: `16px / 400 Plain`
- Token-set use: `Login and form inputs, focus ring #0070e0`
- Body use: Login email/phone, form fields
- Body Focus: border/ring shifts to `#0070e0`
- YAML `tokens.components.input-form`
- Radius `8px` is this control and YAML `tokens.rounded.md: 8`; it is not CTA `1000px`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted. Observed Focus is recorded on the control, not copied onto this row as `focus-visible` paint |
| disabled | applicable | An input can be unavailable; visual treatment omitted |
| error | applicable | Form field. Source §14 Error (form validation): field-level inline message below the input; red border on the field. That row is not copied here as a computed paint |
| loading | not-applicable | This field collects a value; checkout-page and dashboard loading in §14 are page-level treatments, not a loading state this input reports |
| success | not-applicable | Checkout-complete and payment-sent success in §14 are page or row treatments, not a success state this input reports |

### Card Surface (`layered-card`)

- Role: Elevated content card — layered-card class; large-radius diffuse lift shadow
- Primitive type: `card`
- Background: `#ffffff`
- Radius: `16px`
- Shadow: `rgba(0, 0, 0, 0.08) 0px 24px 48px 0px` (YAML also writes `rgba(0,0,0,0.08) 0px 24px 48px 0px`)
- Token-set use: `Elevated content card — layered-card class; large-radius diffuse lift shadow`
- Body use: Feature cards, product showcases on white sections — large-radius diffuse lift (live-measured on `.layered-card` class, 5 instances)
- YAML `tokens.components.card-surface`
- Source §9 local composition on this card, kept here rather than as a tool prompt: title 45px PayPal Pro weight 900 color `#000000`; body 16px Plain weight 400 color `#686a6d`. Those sizes are the Sub-section and Body type roles on this card, not extra YAML type keys.
- Radius `16px` is this control and the body Medium (16px) card step; it is not a YAML `tokens.rounded` key. Kind and a state-applicability map are omitted (no interactive-kind evidence in the token set).

### Badge Status

- Role: Status and category tag
- Primitive type: `badge`
- Background: `#f0f2f9`
- Text: `#002991`
- Radius: `4px`
- Padding: `2px 8px`
- Font: `12px / 400 Plain`
- Token-set use: `Status and category tag`
- Body use: Category labels, status indicators
- YAML `tokens.components.badge-status`
- Radius `4px` is this control and YAML `tokens.rounded.sm: 4`. Kind and a state-applicability map are omitted (no interactive-kind evidence in the token set).

### Cookie Dialog

- Role: Cookie consent bottom bar action buttons
- Primitive type: `dialog` · Kind: interactive
- Background: YAML `bg: #ffffff`
- Radius: `1000px`
- Border: `2px solid #cfd3d8`
- Token-set use: `Cookie consent bottom bar action buttons`
- YAML `tokens.components.cookie-dialog`
- YAML fill `#ffffff` is this record; it is not the §4 tertiary fill `rgba(255, 255, 255, 0.7)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web consent control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A consent action can be unavailable; visual treatment omitted |
| loading | not-applicable | Accept/decline writes a preference; the control does not enter a loading state |
| error | not-applicable | Preference write is not a request-failure state this bar reports |
| success | not-applicable | Preference write is not an action-outcome confirmation this bar reports |

### Cookie Consent (Tertiary)

`not in the token set`. Values are body §4 only. Primitive type is not invented from the Buttons heading and is not copied from YAML `cookie-dialog`. Labelling this control `not in the token set` and not inventing a primitive type from the Buttons heading or from YAML `cookie-dialog` is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

- Role: Cookie accept/decline actions in the consent bar
- Kind: interactive
- Background: `rgba(255, 255, 255, 0.7)`
- Text: `#000000`
- Border: `2px solid #cfd3d8`
- Radius: 1000px
- Padding: `10px 30px`
- Height: 48px
- Font: `14px Plain weight 500`
- Body use: Cookie accept/decline actions in the consent bar
- Live inspect: Cookie consent buttons `rgba(255,255,255,0.7)` bg / 1000px radius / `2px solid #cfd3d8`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A consent action can be unavailable; visual treatment omitted |
| loading | not-applicable | Accept/decline writes a preference; the control does not enter a loading state |
| error | not-applicable | Preference write is not a request-failure state this button reports |
| success | not-applicable | Preference write is not an action-outcome confirmation this button reports |

### Log In (header)

`not in the token set`. Unique to source §9: Log In = white fill + 3px black border; Sign Up = black fill, white text. Sign Up on this pair is the Button Primary record; this slot holds only the Log In recipe. Primitive type is not invented. Holding only the Log In recipe here, and not inventing a primitive type, is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

- Role: header Log In on the captured marketing surfaces
- Kind: interactive
- Background: white fill
- Border: `3px` black border
- Body use: Log In = white fill + 3px black border (source §9). Sign Up beside it = black fill, white text (Button Primary)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A header action can be unavailable; visual treatment omitted |
| loading | not-applicable | This control opens log-in; it does not commit an in-place operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Reaching log-in is not an operation this control reports as success |

### Sky Blue Section / Midnight Blue Section

These are source §4 color-section uses, not YAML component keys and not extra primitives. Reading them as color-section uses rather than extra component records is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

- **Sky Blue Section** — Background: `#60cdff`. Use: Hero entry section background — the new PayPal signature opener. YAML color paths `tokens.colors.primary-light` / `tokens.colors.accent-sky`.
- **Midnight Blue Section** — Background: `#002991`. Use: Immersive brand-dark content sections — "Pay in 4", product highlight panels. YAML color path `tokens.colors.primary`.

Kind, Primitive type, and a state-applicability map are omitted.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following layout readings — generous-macro-tight-micro, type-as-spacer, color-as-divider, 1200px as approximate max-width rather than a breakpoint, and the named breakpoint rows as source-stated collapsing rather than a newly measured grid — are a derived editorial implementation inference from the verified surfaces; they are not PayPal-authored or a separately published UI specification. The values and collapsing rules are the source's own.

### Spacing system (body)

- Base unit: 8px
- Scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px
- Section rhythm: alternating white and sky-blue/midnight-blue full-width bands create a dramatic horizontal cadence without explicit grid gutters

### Grid & container

- Full-width immersive sections at 100vw for the brand moments (sky blue hero, midnight blue product sections)
- Centered content container approximately 1200px max-width
- Hero text is left-aligned at large scale, centered on mobile
- Feature section cards in 2-column or 3-column grids on desktop

### Whitespace

- **Generous macro, tight micro**: section-to-section spacing is very generous (96px+), but the in-section content is dense with large type doing the heavy lifting. This is a marketing site optimized for scroll, not information density.
- **Type as spacer**: enormous PayPal Pro headlines at 99px don't need margin to create separation — they inherently dominate vertical space, creating white space by their own scale.
- **Color as divider**: full-bleed section background changes replace border/line dividers. The palette handles all section separation.

Source §9 section cadence, kept here rather than as a tool prompt: white → sky blue (`#60cdff`) → white → midnight blue (`#002991`) → repeat.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses (fluid type), CTAs full-width |
| Tablet | 640-1024px | 2-column feature cards, moderate padding |
| Desktop | 1024-1280px | Full 3-column grid, max-width container |
| Large Desktop | >1280px | Centered content, fluid type at maximum scale |

### Touch targets

- All CTA buttons at 52px height — comfortably above the 44px minimum
- Cookie consent buttons at 48px height
- Navigation tabs at 40px height with generous horizontal padding

### Collapsing strategy

- Hero headline: ~99px at desktop → scales to ~56px on mobile (fluid/viewport units), weight 900 maintained throughout
- Navigation: horizontal tab strip → hamburger collapse on mobile
- Feature cards: 3-column → 2-column → stacked single column
- Full-bleed section colors maintained at all widths — the alternating bands are mobile-native
- Section spacing: 96px → 48px on mobile

<!-- design-md:section content-locales -->
## 6. Content & Locales

PayPal's voice is **direct, bold, and empowering** — a global payments brand that speaks to everyday users and enterprise merchants in the same confident register. Post-2023 rebrand, the tone shifted from financial-services caution to consumer-brand boldness. Hero copy reads like a product manifesto: "Pay, send, and save smarter." "PayPal Open." Section headings declare rather than explain: "Pay now or pay over time. It's your choice." There are no hedges, no fine print in the headlines, and no exclamation marks performing excitement — the scale of the type does that work. Calling that register direct, bold, and empowering, and reading the type-scale as doing the excitement work, is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification. The quoted lines are the source's own.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, bold. Noun-first or verb-first. "Pay, send, and save smarter." Never conditional. |
| Product feature heads | Benefit-led, crisp. "Take your business further, faster." |
| CTAs | Direct imperative. "Sign Up", "Send Money", "Get Paid", "Browse Offers". |
| Dark section copy | Slightly more expansive — builds momentum. "The tools your business runs on. In one place." |
| Legal / security copy | Plain, reassuring. "See How You're Safe." |
| Developer surfaces | Functional and precise — aligns with global developer expectations. |
| Merchant surfaces | Results-focused. "Real stories. Real wins." |

**Voice samples (verified live 2026-06-22):**

- "Pay, send, and save smarter" — homepage hero H2 (PayPal Pro 99px/900)
- "Take your business further, faster" — merchant page H2
- "PayPal Open" — business page hero H1
- "Real stories. Real wins." — merchant page H2

**Forbidden register**: passive constructions, jargon-heavy explanations in above-fold copy, legacy banking formality, exclamation-heavy excitement.

Published labels also recorded on the captured controls: "Enterprise Solutions", "Read Case Study", "Contact Sales", "Learn More", "Learn About Pay in 4", "Play video", "Personal", "Business", "Log In", "Send your first payment", "You're all set.", "Insufficient funds", "Sent. [amount] to [name].", "Pay in 4".

Not promoting synthetic voice samples beyond the quoted live lines is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. Treating the list as unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification.

- exact cubic-bezier values for `ease-enter` / `ease-exit` / `ease-standard` (unattributed; names and uses kept)
- `focus-visible` visual treatment (source records input Focus as border/ring `#0070e0`, which is not that keyboard treatment)
- computed hover paint on the pill CTAs (source-stated `scale(1.02)` remains a signature-motion name)
- interactive kind and state-applicability map for `card-surface` and `badge-status`
- motion animation names, transition properties, and any duration beyond the four source tokens — promote only after per-component computed capture of all five kinds; a single named duration is not that gate
