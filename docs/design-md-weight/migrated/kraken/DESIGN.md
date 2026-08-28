# Kraken Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Kraken is the first-party public crypto exchange at `https://www.kraken.com`. This contract covers the two first-party public surfaces the source inspected for tokens: the homepage at `https://www.kraken.com` and the prices table at `https://www.kraken.com/prices`. The YAML token set is `prose-derived`. Every value stays attached to the surface or evidence class that established it. Catalog identity also records `primary_color: "#5741d9"`; that catalog field is not `tokens.colors.primary-hover` `#5741d8` and is not a YAML colors key. Reading those two inspected pages as this contract's token surfaces, keeping values attached to the surface or evidence class that established them, treating the token set as the source's `prose-derived` class rather than a separately issued token document, and keeping `#5741d9` on the catalog identity field rather than rewriting it as `#5741d8`, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

The source records Kraken's website as a clean, trustworthy crypto exchange that uses purple as its commanding brand color. The design operates on white backgrounds with Kraken Purple (`#7132f5`, `#5741d8`, `#5b1ecf`) creating a distinctive, professional crypto identity. The proprietary Kraken-Brand font handles display headings with bold (700) weight and negative tracking, while Kraken-Product (with IBM Plex Sans fallback) serves as the UI workhorse. The hex values, the dual-font names, the 700 display weight, and the negative-tracking record are the source's own. The characterizations built on them — clean and trustworthy; commanding brand color; distinctive, professional crypto identity; UI workhorse — are a derived editorial implementation inference from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Kraken (legally **Payward, Inc.**) was founded **2011** in San Francisco by **Jesse Powell**, **Thanh Luu**, and **Michael Gronager** — making it one of the **longest-running crypto exchanges still operating**. The source cites [Kraken — Wikipedia](https://en.wikipedia.org/wiki/Kraken_(cryptocurrency_exchange)) and [Contrary Research — Kraken](https://research.contrary.com/company/kraken) for that founding. Powell's path to Kraken: in **2001** he founded an internet gaming company helping players manage in-game currencies; **2010** dove into Bitcoin; **2011 consulted for Mt. Gox** to help recover from a hack — after observing that exchange's security failures, Powell decided to build a security-first alternative. The platform survived the **2014 Mt. Gox collapse** (Powell helped audit the failure), the 2017 ICO crash, 2018 bear market, and the **2022-2023 FTX/Celsius collapses**. This survival history is core to the brand voice — Kraken positions itself as the exchange that's "still here" when newer competitors fail. **Total funding $867M** from **RIT Capital Partners, SBI Group, Jane Street, DRW Venture Capital, HSG, Oppenheimer Alternative Investment Management, Tribe Capital, Citadel Securities** at **~$20B valuation**. The source cites [Tracxn — Kraken](https://tracxn.com/d/companies/kraken/__K8eQ_bnwtoEzrre_iQrRk_2-6sBivxjdpOCeXGVrx1w) for the funding. **U.S. IPO filing November 2025** (Payward, Inc.) — earlier 2022/2023 IPO plans were shelved due to regulatory scrutiny + market conditions. The source cites [Caproasia — Kraken IPO](https://www.caproasia.com/2025/11/21/cryptocurrency-exchange-kraken-files-for-united-states-ipo-after-raising-800-million-funding-at-20-billion-founded-in-2011-by-jesse-powell-thanh-luu-investors-include-jane-street-drw-venture-ca/) and [Forge Global — Kraken upcoming IPO](https://forgeglobal.com/insights/kraken-upcoming-ipo-news/). The **2024 expansion into stocks** ("Crypto, Stocks & more" tagline) reflects Kraken's strategy of broadening into a multi-asset retail brokerage, competing with Robinhood for retail trading flow. The years 2011 / 2001 / 2010 / 2014 / 2017 / 2018 / 2022-2023 / November 2025 / 2022/2023 / 2024, Payward, Inc., the three founders, the longest-running claim, Powell's path through internet gaming and Mt. Gox, the survived-events list, the "still here" positioning, $867M / ~$20B and the named investors, the U.S. IPO filing, the shelved earlier plans, and that closing 2024-stocks / Robinhood sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-survival narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and classifying them as surface-or-control outcomes rather than fictional biographies, is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification. Each names a surface or label the source records. They do not come from the source's persona section.

- Browse the homepage at `https://www.kraken.com`.
- Open the prices table at `https://www.kraken.com/prices`.
- Use the recorded CTAs — "Sign up", "Try Kraken", "Sign in with Apple".
<!-- design-md:claim-end -->

### Audience

No named or demographic personas are invented. The source labels its named figures as fictional archetypes informed by Kraken user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records is the audience it names at a group level: long-term holders, professional traders, institutional clients. Dropping the fictional biographies rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not Kraken-authored or a separately published UI specification.

- Kraken Purple (`#7132f5`) as primary brand with darker variants (`#5741d8`, `#5b1ecf`)
- Kraken-Brand (display) + Kraken-Product (UI) dual font system
- Near-black (`#101114`) text with cool blue-gray neutral scale
- 12px radius buttons (rounded but not pill)
- Subtle shadows (`rgba(0,0,0,0.03) 0px 4px 24px`) — whisper-level
- Green accent (`#149e61`) for positive/success states

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Kraken-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each. Every *UI implication* below is the source's own editorial reading.

1. **Track record is the proof.** *UI implication:* footer / About pages reference 2011 founding + survived-events list.
2. **Security before speed.** Two-factor auth, withdrawal whitelisting, hardware key support — first-class. *UI implication:* security settings have main-nav placement.
3. **Purple is the signal.** `#7132f5` for primary; never multi-color brand chrome. *UI implication:* charts may use semantic colors but UI stays purple-on-white.
4. **Education = product.** Kraken Learn academy treated as core feature. *UI implication:* "Learn" tab adjacent to "Trade" in main nav.
5. **Borderless purple buttons signal interactive.** *UI implication:* primary CTAs always purple `#7132f5` on white, light purple `rgba(133,91,251,0.16)` for ghost variants.

### Application rules

The source states these three as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

- Use Kraken Purple (#7132f5) for CTAs and links
- Apply 12px radius on all buttons
- Use Kraken-Brand for headings, Kraken-Product for body

### Avoid

The source states these two as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

- Don't use pill buttons — 12px is the max radius for buttons
- Don't use other purples outside the defined scale

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping `tokens.colors.primary` and `tokens.colors.brand` as two keys that happen to share `#7132f5`, keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as two keys that happen to share `#ffffff`, keeping catalog `primary_color` `#5741d9` off `tokens.colors.primary-hover` `#5741d8`, keeping Purple Subtle `rgba(133,91,251,0.16)` as a §2 role that is not a YAML `tokens.colors` key, keeping footer Light Secondary `#f5f5f5` as a verification writing that is not a YAML `tokens.colors` key, and attaching every role to the surface the source recorded rather than relabeling an observed public-web value as a house palette for every Kraken surface, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Primary

- **Kraken Purple** (`#7132f5`): Primary CTA, brand accent, links. Token-set path `tokens.colors.primary`.
- **Brand** (`#7132f5`): Token-set path `tokens.colors.brand`. Same hex as `tokens.colors.primary`; it stays a second key.
- **Purple Dark** (`#5741d8`): Button borders, outlined variants. Token-set path `tokens.colors.primary-hover`.
- **Purple Deep** (`#5b1ecf`): Deepest purple. Token-set path `tokens.colors.primary-deep`.
- **Purple Subtle** (`rgba(133,91,251,0.16)`): Purple at 16% — subtle button backgrounds. This writing is the source's §2 role; it is not a YAML `tokens.colors` key.
- **Near Black** (`#101114`): Primary text. Token-set path `tokens.colors.foreground`.

Neutral

- **Cool Gray** (`#686b82`): Primary neutral, borders at 24% opacity. Token-set path `tokens.colors.body`.
- **Silver Blue** (`#9497a9`): Secondary text, muted elements. Token-set path `tokens.colors.muted`.
- **White** (`#ffffff`): Primary surface. Token-set path `tokens.colors.canvas`.
- **Border Gray** (`#dedee5`): Divider borders. Token-set path `tokens.colors.hairline`.
- **On-Primary** (`#ffffff`): Text on the purple primary fill. Token-set path `tokens.colors.on-primary`.

Semantic

- **Green** (`#149e61`): Success/positive at 16% opacity for badges. Token-set path `tokens.colors.success`.
- **Green Dark** (`#026b3f`): Badge text. Token-set path `tokens.colors.success-text`.
- **Error** (`#d54848`): Token-set path `tokens.colors.error`. Source §4 uses this hex for a negative stat-card delta.

`tokens.colors.primary` and `tokens.colors.brand` both write `#7132f5`. They stay two keys. `tokens.colors.canvas` and `tokens.colors.on-primary` both write `#ffffff`. They stay two keys. Catalog `primary_color` `#5741d9` is not `tokens.colors.primary-hover` `#5741d8`.

The source footer also records Light Secondary `#f5f5f5` at 12px on the inspected home + /prices pass. That hex is a footer verification writing. It is not a YAML `tokens.colors` key.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 20` · `xl: 24` · `xxl: 25`.

Source §5 restates a spacing list of 1px, 2px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 13px, 15px, 16px, 20px, 24px, 25px. That list stays beside the YAML keys. Neither writing was chosen as a replacement.

`tokens.spacing.md: 12` is not `tokens.rounded.lg: 12` and is not a button radius. `tokens.spacing.base: 16` is not `tokens.typography.body.size` `16`, is not `tokens.typography.button.size` `16`, and is not the 16px in Primary padding `13px 16px`. `tokens.spacing.lg: 20` is not the 20px in Stat Card padding `20px 24px`. `tokens.spacing.xl: 24` is not Default Card padding `24px` and is not the 24px in Stat Card padding `20px 24px`. `tokens.spacing.xxl: 25` stays that unitless step. Keeping those unitless spacing steps on their own keys rather than rewriting them as a grid, and keeping those writings of `4`, `8`, `12`, `16`, `20`, `24`, and `25` on their own records, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 6` · `md: 8` · `lg: 12` · `full: 9999`.

Source §5 restates a radius list of 3px, 6px, 8px, 10px, 12px, 16px, 9999px, 50%. That list stays beside the YAML keys. The source footer records a live-inspect **3-tier radius scale 12/10/8** = Action / Filter / Selector hierarchy on kraken.com home + /prices.

- Action (`12` / `12px`): token-set key `tokens.rounded.lg`. YAML `button-primary` / `button-outline` / `button-subtle` / `button-secondary` / `card` also record `radius: "12px"`. Source §7 says 12px is the max radius for buttons.
- Filter (`10px`): source-footer Action/Filter/Selector tier. YAML `button-white.radius` is `10px`. Those two writings stay on their own records.
- Selector (`8px`): source-footer deepest sub-tier. Token-set key `tokens.rounded.md: 8`. They stay two records.
- Small (`6` / `6px`): token-set key `tokens.rounded.sm`. YAML `badge-success.radius` is `6px`.
- Full (`9999`): token-set key `tokens.rounded.full: 9999`. Source §5 also writes `9999px` and `50%`. `9999px` and `50%` stay on that §5 list. They are not a replacement for `tokens.rounded.full: 9999`.
- Card featured / stat (`16px`): YAML `card-stat.radius` and `card-featured.radius`. This is a component radius. It is not a YAML `tokens.rounded` key.

`tokens.rounded.sm: 6` is a radius step. It is not a spacing step. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8` and is not only the footer Selector `8px`. `tokens.rounded.lg: 12` is not `tokens.spacing.md: 12`. `tokens.rounded.full: 9999` stays the unitless full step. It is not the §5 `50%`, and it is not a type size. Neither writing was chosen over the others as a replacement. Keeping `6`, `8`, `12`, and `9999` as four keys, and keeping the footer 12/10/8 hierarchy and the §5 `3px` / `10px` / `16px` / `50%` writings on their own records, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Subtle | `rgba(0,0,0,0.03) 0px 4px 24px` | Token-set path `tokens.shadow.subtle`. YAML `button-white` and `card` also record this shadow. Source §1 / §4 call it whisper-level / subtle lift. |
| Micro | `rgba(16,24,40,0.04) 0px 1px 4px` | Token-set path `tokens.shadow.micro`. |
| Featured inner glow | `inset 0 0 60px rgba(255,255,255,0.08)` | YAML `card-featured.shadow`. This is that card's inset writing. It is not a `tokens.shadow` key. |

The two token-set shadows and the featured inset are the source's own. Reading the `0.03` shadow as whisper-level / subtle lift, and keeping the featured inset on the featured card rather than promoting it to a third `tokens.shadow` key, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a prose-derived pass. The motion contract below sits outside a computed-sample attribution: the source names three duration tokens, one continuous signature, a reduced-motion rule, and the phrase "Standard cubic-bezier; no bounce," and assigns no computed-sample source to a cubic-bezier value. The durations, the continuous signature, the reduced-motion rule, the "no bounce" stance, and the omission of an untraceable curve value, are therefore a derived editorial implementation inference from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |
| `motion-pulse` | continuous | Live price update micro-flash |

The source's "Standard cubic-bezier" phrase names no numeric curve. That curve value is omitted here. The source's **no bounce** stance stays.

Signature motion, as the source states it: **Live price flashes** green/red briefly on tick.

Reduced motion, as the source states it: `prefers-reduced-motion: reduce` disables price flash.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate, and refusing a partial confirmation, is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The source names Kraken-Brand for display headings and Kraken-Product for UI / body. It does not publish a separately issued type specimen or a public first-party web-font licence. That "no published type specimen" reading is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification. |
| Live computed surface-use | The source footer attributes the inspected home + /prices pass to live DOM via playwright. The type roles below are the source's YAML / §3 writings, not a new computed extract. |
| Official distributed asset | The supplied capture records no font source URLs. The families may be described by name and observed metrics, but no downloadable asset or reuse licence is asserted. |
| Declared / system fallback | Display fallbacks: `IBM Plex Sans, Helvetica, Arial`. UI / Body fallbacks: `Helvetica Neue, Helvetica, Arial`. YAML `tokens.typography.family.mono` writes `IBM Plex Sans`. None of those fallbacks is promoted as the brand face. |
| Outside these captures | Typography beyond the two inspected public surfaces stays outside this contract. |

Reading the missing source URLs as a licence boundary rather than permission to host the files, reading the type roles below as the source's YAML / §3 writings rather than a new computed extract, reading IBM Plex Sans / Helvetica / Arial as fallback or YAML-mono context rather than the UI face, and reading typography beyond the two inspected public surfaces as outside this contract, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

### Family

- **Display**: `Kraken-Brand`, fallbacks: `IBM Plex Sans, Helvetica, Arial`
- **UI / Body**: `Kraken-Product`, fallbacks: `Helvetica Neue, Helvetica, Arial`. Token-set path `tokens.typography.family.sans`.
- **YAML mono**: `IBM Plex Sans`. Token-set path `tokens.typography.family.mono`.

YAML records `IBM Plex Sans` as `tokens.typography.family.mono`. Source §3 records `IBM Plex Sans` as a Display fallback. Both writings stay. Neither writing was chosen as a replacement.

Do not replace Kraken-Brand or Kraken-Product with a system substitute, and do not present IBM Plex Sans, Helvetica, Helvetica Neue, or Arial as Kraken-Brand or Kraken-Product. That fallback prohibition, and keeping `IBM Plex Sans` as both the YAML `tokens.typography.family.mono` writing and the source §3 Display fallback rather than choosing one as a replacement, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). `1.17` is not rewritten as a fixed px. Token-set `use` strings are kept verbatim; where source §3 is longer, both writings are kept. Keeping YAML line heights as unitless ratios, keeping the YAML singles and the §3 bands on separate readings, and attaching surfaces from the YAML claim anchors, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use | §3 notes |
|---|---|---:|---:|---:|---|---|---|
| Display Hero | Kraken-Brand | 48 | 700 | 1.17 | -1px | Hero headline, Kraken-Brand | Display Hero 48px / 700 / 1.17 / -1px |
| Section Heading | Kraken-Brand | 36 | 700 | 1.22 | -0.5px | Section heading, Kraken-Brand | Section Heading 36px / 700 / 1.22 / -0.5px |
| Sub-heading | Kraken-Brand | 28 | 700 | 1.29 | -0.5px | Sub-heading, Kraken-Brand | Sub-heading 28px / 700 / 1.29 / -0.5px |
| Feature Title | Kraken-Product | 22 | 600 | 1.2 | | Feature title, Kraken-Product | Feature Title 22px / 600 / 1.20 / normal |
| Body | Kraken-Product | 16 | 400 | 1.38 | | Body text | Body 16px / 400 / 1.38 / normal |
| Body Medium | Kraken-Product | 16 | 500 | 1.38 | | not a YAML type-role key | Body Medium 16px / 500 / 1.38 / normal |
| Button | Kraken-Product | 16 | 500 | 1.38 | | Button label | Button 16px / 500–600 / 1.38 / normal |
| Caption | Kraken-Product | 14 | 400 | 1.43 | | Caption | Caption 14px / 400–700 / 1.43–1.71 / normal |
| Small | Kraken-Product | 12 | 400 | 1.33 | | Small text | Small 12px / 400–500 / 1.33 / normal |
| Micro | Kraken-Product | 7 | 500 | 1.00 | uppercase | not a YAML type-role key | Micro 7px / 500 / 1.00 / uppercase |

Token-set `tokens.typography.display-hero.size` is `48`. Token-set `tokens.typography.section-heading.size` is `36`. Token-set `tokens.typography.sub-heading.size` is `28`. Token-set `tokens.typography.feature-title.size` is `22`. Token-set `tokens.typography.body.size` and `tokens.typography.button.size` are both `16`; they stay as two keys. Token-set `tokens.typography.caption.size` is `14`. Token-set `tokens.typography.small.size` is `12`. Body / button `16` is a type size. It is not `tokens.spacing.base: 16`. Feature Title YAML lineHeight is `1.2`; source §3 writes `1.20`. Both writings stay. Button YAML weight is `500`; source §3 writes `500–600`. Caption YAML is `400` / `1.43`; source §3 writes `400–700` / `1.43–1.71`. Small YAML weight is `400`; source §3 writes `400–500`. Body Medium and Micro are source §3 rows; they are not YAML type-role keys.

Source §3 also writes those sizes as 48px / 36px / 28px / 22px / 16px / 16px / 16px / 14px / 12px / 7px. Those px spellings stay beside the unitless YAML sizes. Neither writing was chosen as a replacement.

### Assets

The catalog identity records `logo.type: github` and `logo.slug: krakenfx`. That is an identity pointer, not a Kraken-hosted file and not a reusable brand download. Classifying the github slug as an identity pointer rather than a hosted brand file is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

The source records empty, loading, error, success, skeleton, and disabled treatments at system level (table below). It does not record hover, focus-visible, or pressed visual treatments on the token-set components.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination navigation item, an outlined or ghost variant that commits no operation in place, or a filter / selector that only chooses a destination — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component. A §4-only or footer-only component that is not in the token set is labeled `not in the token set`. Generic `Focus` capture is not treated as a `focus-visible` treatment. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, the refusal to treat a generic `Focus` capture as a `focus-visible` treatment, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary Purple

- Role: primary CTA, links
- Primitive type: `button` · Kind: interactive
- Domain: `https://www.kraken.com` and `https://www.kraken.com/prices`
- Background: `#7132f5`
- Text: `#ffffff`
- Radius: 12px
- Padding: 13px 16px
- Font: 16px / 500
- Use: Primary CTA, links
- Token-set type: `tokens.components.button-primary.type` `button`
- Token-set bg: `tokens.components.button-primary.bg` `#7132f5`
- Token-set fg: `tokens.components.button-primary.fg` `#ffffff`
- Token-set radius: `tokens.components.button-primary.radius` `12px`
- Token-set padding: `tokens.components.button-primary.padding` `13px 16px`
- Token-set font: `tokens.components.button-primary.font` `16px / 500`
- Token-set use: `Primary CTA, links`
- Source footer live-inspect writing for this same Primary, kept beside the YAML record: 12px tiered (header 36 / page 48-52) 8-15×12-16 / 14-16px·500. Those footer figures are the inspected-pass spelling. They are not YAML fields on this record. The 16px in YAML padding `13px 16px` is this control's padding. It is not `tokens.spacing.base: 16`. The 12px radius is this control's radius. It is not only `tokens.rounded.lg: 12`. Reading those figures as this button's geometry rather than as those YAML spacing steps, and keeping the footer 36 / 48-52 / 8-15×12-16 / 14-16px·500 writing on this record rather than replacing the YAML `13px 16px` / `16px / 500`, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract records a disabled treatment for insufficient funds; visual treatment omitted on this token-set record |
| loading | applicable | "Sign up" / "Try Kraken" commit an account action; the surface contract records loading for price data, KYC, and long actions |
| error | applicable | Same commit role; the surface contract records insufficient-balance and 2FA errors |
| success | applicable | Same commit role; the surface contract records trade and deposit receipts |

### Purple Outlined

- Role: outlined purple variant
- Primitive type: `button` · Kind: interactive
- Domain: the two inspected public surfaces
- Background: `#ffffff`
- Text: `#5741d8`
- Border: `1px solid #5741d8`
- Radius: 12px
- Use: Outlined purple variant
- Token-set type: `tokens.components.button-outline.type` `button`
- Token-set bg: `tokens.components.button-outline.bg` `#ffffff`
- Token-set fg: `tokens.components.button-outline.fg` `#5741d8`
- Token-set border: `tokens.components.button-outline.border` `1px solid #5741d8`
- Token-set radius: `tokens.components.button-outline.radius` `12px`
- Token-set use: `Outlined purple variant`
- The 12px radius is this control's radius. It is not only `tokens.rounded.lg: 12`. Reading that figure as this button's geometry rather than as a spacing step is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | An outlined CTA whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is an outlined destination-style variant; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination-style outlined variant; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this button reports as success |

### Purple Subtle

- Role: subtle/ghost purple button
- Primitive type: `button` · Kind: interactive
- Domain: the two inspected public surfaces
- Background: `rgba(133,91,251,0.16)`
- Text: `#7132f5`
- Padding: 8px
- Radius: 12px
- Use: Subtle/ghost purple button
- Token-set type: `tokens.components.button-subtle.type` `button`
- Token-set bg: `tokens.components.button-subtle.bg` `rgba(133,91,251,0.16)`
- Token-set fg: `tokens.components.button-subtle.fg` `#7132f5`
- Token-set padding: `tokens.components.button-subtle.padding` `8px`
- Token-set radius: `tokens.components.button-subtle.radius` `12px`
- Token-set use: `Subtle/ghost purple button`
- The 8px padding is this control's padding. It is not `tokens.spacing.sm: 8`. The 12px radius is this control's radius. It is not only `tokens.rounded.lg: 12`. Reading those figures as this button's geometry rather than as those YAML spacing or radius steps is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A ghost variant whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a ghost / destination-style variant; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Ghost variant; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this button reports as success |

### White Button

- Role: white button
- Primitive type: `button` · Kind: interactive
- Domain: the two inspected public surfaces
- Background: `#ffffff`
- Text: `#101114`
- Radius: 10px
- Shadow: `rgba(0,0,0,0.03) 0px 4px 24px`
- Use: White button
- Token-set type: `tokens.components.button-white.type` `button`
- Token-set bg: `tokens.components.button-white.bg` `#ffffff`
- Token-set fg: `tokens.components.button-white.fg` `#101114`
- Token-set radius: `tokens.components.button-white.radius` `10px`
- Token-set shadow: `tokens.components.button-white.shadow` `rgba(0,0,0,0.03) 0px 4px 24px`
- Token-set use: `White button`
- The 10px radius is this control's radius. It is not only the footer Filter `10px`, and it is not a YAML `tokens.rounded` key. Reading that figure as this button's geometry rather than as the Filter tier or a spacing step is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A white CTA whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a white destination-style variant; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination-style white variant; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this button reports as success |

### Secondary Gray

- Role: secondary gray button
- Primitive type: `button` · Kind: interactive
- Domain: the two inspected public surfaces
- Background: `rgba(148,151,169,0.08)`
- Text: `#101114`
- Radius: 12px
- Use: Secondary gray button
- Token-set type: `tokens.components.button-secondary.type` `button`
- Token-set bg: `tokens.components.button-secondary.bg` `rgba(148,151,169,0.08)`
- Token-set fg: `tokens.components.button-secondary.fg` `#101114`
- Token-set radius: `tokens.components.button-secondary.radius` `12px`
- Token-set use: `Secondary gray button`
- The 12px radius is this control's radius. It is not only `tokens.rounded.lg: 12`. Reading that figure as this button's geometry rather than as a spacing step is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A secondary CTA whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a secondary destination-style variant; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination-style secondary variant; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this button reports as success |

### Success Badge

- Role: success/positive badge
- Primitive type: `badge`
- Kind: non-interactive — a status label, not a commit control
- Background: `rgba(20,158,97,0.16)`
- Text: `#026b3f`
- Radius: 6px
- Use: Success/positive badge
- Token-set type: `tokens.components.badge-success.type` `badge`
- Token-set bg: `tokens.components.badge-success.bg` `rgba(20,158,97,0.16)`
- Token-set fg: `tokens.components.badge-success.fg` `#026b3f`
- Token-set radius: `tokens.components.badge-success.radius` `6px`
- Token-set use: `Success/positive badge`
- Declaring `Kind: non-interactive` because the source records this as a badge, not as a control, is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification.

### Neutral Badge

- Role: neutral badge
- Primitive type: `badge`
- Kind: non-interactive — a status label, not a commit control
- Background: `rgba(104,107,130,0.12)`
- Text: `#484b5e`
- Radius: 8px
- Use: Neutral badge
- Token-set type: `tokens.components.badge-neutral.type` `badge`
- Token-set bg: `tokens.components.badge-neutral.bg` `rgba(104,107,130,0.12)`
- Token-set fg: `tokens.components.badge-neutral.fg` `#484b5e`
- Token-set radius: `tokens.components.badge-neutral.radius` `8px`
- Token-set use: `Neutral badge`
- The 8px radius is this badge's geometry. It is not `tokens.spacing.sm: 8` and is not only `tokens.rounded.md: 8`. Declaring `Kind: non-interactive` because the source records this as a badge, and reading the 8px as this badge's geometry, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

### Default Card

- Role: default card, subtle lift
- Primitive type: `card`
- Domain: the two inspected public surfaces
- Background: `#ffffff`
- Border: `1px solid rgba(148,151,169,0.16)`
- Radius: 12px
- Padding: 24px
- Shadow: `rgba(0,0,0,0.03) 0px 4px 24px`
- Use: Default card, subtle lift
- Token-set type: `tokens.components.card.type` `card`
- Token-set bg: `tokens.components.card.bg` `#ffffff`
- Token-set border: `tokens.components.card.border` `1px solid rgba(148,151,169,0.16)`
- Token-set radius: `tokens.components.card.radius` `12px`
- Token-set padding: `tokens.components.card.padding` `24px`
- Token-set shadow: `tokens.components.card.shadow` `rgba(0,0,0,0.03) 0px 4px 24px`
- Token-set use: `Default card, subtle lift`
- The 24px padding is this card's padding. It is not `tokens.spacing.xl: 24`. The 12px radius is this card's geometry. It is not only `tokens.rounded.lg: 12`. Kind and applicability map omitted — the source supplies no interaction evidence for the card (C4). Withholding kind and a map because the source supplies no interaction evidence, and reading those figures as this card's geometry rather than as those YAML spacing steps, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

### Stat / Metric Card

- Role: stat/metric card
- Primitive type: `card`
- Domain: the two inspected public surfaces
- Background: `#ffffff`
- Radius: 16px
- Padding: 20px 24px
- Title: 12px weight 500 `#686b82` (muted)
- Value: 28px weight 700 `#101114`
- Delta: 12px weight 500 — `#149e61` for positive, `#d54848` for negative
- Use: Stat/metric card, value 28px/700, delta green/red
- Token-set type: `tokens.components.card-stat.type` `card`
- Token-set bg: `tokens.components.card-stat.bg` `#ffffff`
- Token-set radius: `tokens.components.card-stat.radius` `16px`
- Token-set padding: `tokens.components.card-stat.padding` `20px 24px`
- Token-set use: `Stat/metric card, value 28px/700, delta green/red`
- The Title / Value / Delta rows are the source §4 spelling. They are not YAML fields on this record. YAML `use` already names `value 28px/700, delta green/red`; §4 is the longer writing and both stay. The 20px and 24px in the padding are this card's padding. They are not `tokens.spacing.lg: 20` or `tokens.spacing.xl: 24`. The 16px radius is this card's geometry. It is not a YAML `tokens.rounded` key. Kind and applicability map omitted — the source supplies no interaction evidence for the card (C4). Withholding kind and a map because the source supplies no interaction evidence, and reading those figures as this card's geometry and the longer §4 typography as this card's type rows, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

### Featured / Promotional Card

- Role: featured/promotional card, used sparingly
- Primitive type: `card`
- Domain: the two inspected public surfaces
- Background: `linear-gradient(135deg, #7132f5 0%, #5741d8 100%)`
- Text: `#ffffff`
- Radius: 16px
- Padding: 32px
- Shadow: `inset 0 0 60px rgba(255,255,255,0.08)`
- Use: Featured/promotional card, used sparingly
- Token-set type: `tokens.components.card-featured.type` `card`
- Token-set bg: `tokens.components.card-featured.bg` `linear-gradient(135deg, #7132f5 0%, #5741d8 100%)`
- Token-set fg: `tokens.components.card-featured.fg` `#ffffff`
- Token-set radius: `tokens.components.card-featured.radius` `16px`
- Token-set padding: `tokens.components.card-featured.padding` `32px`
- Token-set shadow: `tokens.components.card-featured.shadow` `inset 0 0 60px rgba(255,255,255,0.08)`
- Token-set use: `Featured/promotional card, used sparingly`
- Source §4 also writes: Use sparingly for premium/upgrade prompts. That longer use stays beside the YAML `use`. The 16px radius is this card's geometry. It is not a YAML `tokens.rounded` key. Kind and applicability map omitted — the source supplies no interaction evidence for the card (C4). Withholding kind and a map because the source supplies no interaction evidence, and reading the 16px / 32px as this card's geometry rather than as spacing steps, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

### Light Secondary

- Role: light secondary on the inspected home + /prices pass
- Primitive type: not in the token set · Kind: interactive
- Domain: source-footer live inspect of kraken.com home + /prices
- Background: `#f5f5f5`
- Radius: 12px
- Use: Light Secondary `#f5f5f5` 12px — source footer writing
- The footer records this control as Light Secondary `#f5f5f5` 12px. It is not a YAML component record. The 12px radius is this control's radius. It is not only `tokens.rounded.lg: 12`. Reading those footer figures as this control's geometry, and labeling the row `not in the token set`, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A secondary control whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a footer-recorded light-secondary variant; the source footer does not name a commit this control reports in place |
| error | not-applicable | Same role reason: the source footer does not name a failure this control reports |
| success | not-applicable | Same role reason: the source footer does not name a success this control reports |

### Filter pill

- Role: filter pill on the inspected /prices pass
- Primitive type: not in the token set · Kind: interactive
- Domain: source-footer live inspect of `https://www.kraken.com/prices`
- Radius: 10px
- Use: Filter tier in the source-footer 12/10/8 Action / Filter / Selector hierarchy
- The footer records Filter at 10px. It is not a YAML component record. The 10px radius is this control's radius. It is not YAML `button-white.radius` `10px`. Reading those footer figures as this control's geometry, and labeling the row `not in the token set`, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web filter; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A filter whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control selects a destination filter; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A filter that only selects a destination does not report a failed request on itself |
| success | not-applicable | Same role reason: selecting a destination is not an operation this filter reports as success |

### Currency / utility selector

- Role: currency/utility selector on the inspected /prices pass
- Primitive type: not in the token set · Kind: interactive
- Domain: source-footer live inspect of `https://www.kraken.com/prices`
- Radius: 8px
- Use: Selector tier in the source-footer 12/10/8 Action / Filter / Selector hierarchy
- The footer records Selector at 8px. It is not a YAML component record. The 8px radius is this control's radius. It is not only `tokens.rounded.md: 8` and is not `tokens.spacing.sm: 8`. Reading those footer figures as this control's geometry, and labeling the row `not in the token set`, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web selector; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A selector whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control selects a destination value; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A selector that only chooses a destination does not report a failed request on itself |
| success | not-applicable | Same role reason: selecting a destination is not an operation this selector reports as success |

### Surface state contract

The source records these system-level states. They are preserved here as written (A2). Treating the rows as a surface contract rather than attaching every row as a visual treatment on the destination CTAs is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no holdings)** | "Make your first trade" CTA + asset list with prices |
| **Empty (no transactions)** | "Your transaction history will appear here." Plain |
| **Loading (price data)** | Last cached + stale indicator if older than 5s |
| **Loading (KYC)** | Persistent badge, allows nav while pending |
| **Error (insufficient balance)** | "Insufficient USD. Deposit funds or convert from another asset." |
| **Error (2FA)** | "Two-factor code required. Open your authenticator app." |
| **Success (trade)** | Receipt with asset / amount / fee / network confirmation tracker |
| **Success (deposit)** | Confirmation + when funds available + network tracker |
| **Skeleton (asset list)** | Light gray rows |
| **Disabled (insufficient funds)** | 0.5 opacity + "Deposit" inline link |
| **Loading (long action)** | Multi-step progress: Submitted → Confirming → Confirmed |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and radius lists

Source §5 spacing: 1px, 2px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 13px, 15px, 16px, 20px, 24px, 25px.

Source §5 border radius: 3px, 6px, 8px, 10px, 12px, 16px, 9999px, 50%.

Token-set `tokens.spacing` stays `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 20` · `xl: 24` · `xxl: 25`. Token-set `tokens.rounded` stays `sm: 6` · `md: 8` · `lg: 12` · `full: 9999`. The §5 lists and the YAML keys are both kept.

### Breakpoints

The source records: 375px, 425px, 640px, 768px, 1024px, 1280px, 1536px.

Reading those spacing figures as the source's own scale rather than as `tokens.spacing` replacements, reading the radius list as the source's own scale rather than as `tokens.rounded` replacements, reading the seven breakpoint widths as the source's recorded widths rather than as a cross-viewport specification invented on top of them, and keeping the source-footer Primary heights 36 / 48-52 and paddings 8-15×12-16 on the Primary Purple record rather than rewriting them as Layout tokens, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

The source-footer Primary heights 36 / 48-52 and paddings 8-15×12-16 are the inspected-pass measurements on kraken.com home + /prices. They stay on the Primary Purple record.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Kraken's voice is **earned-trust crypto** — confident without bombast, technical without alienating, regulator-aware without legalese. Marketing copy emphasizes durability ("Own the Power of Your Money") and the company's track record (founded 2011, has weathered every crypto cycle including FTX collapse). The tone is closer to a brokerage than a casino — feature copy reads like a financial product page, not a meme. Reading that register as this contract's public voice, rather than as a separately published Kraken microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| CTA | Verb-first. "Sign up", "Try Kraken", "Sign in with Apple" |
| Marketing | Stability + history-emphasized. References to 2011 founding, regulatory milestones |
| Error (verification/security) | Specific + reassuring. "Two-factor authentication required for withdrawals" |
| Educational content | First-class — Kraken Learn academy is part of the brand |

**Voice samples**

- Tagline: *"Own the Power of Your Money — Crypto, Stocks & more"* <!-- verified: kraken.com homepage 2026-05 -->

That sample is verbatim, not a complete product-microcopy guide. Reading it as a recorded homepage line rather than as a separately published copy manual is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification.

Published names and lines the source records, kept byte-exact: Kraken, Payward, Inc., Own the Power of Your Money, Crypto, Stocks & more, Own the Power of Your Money — Crypto, Stocks & more, Sign up, Try Kraken, Sign in with Apple, Two-factor authentication required for withdrawals, Two-factor code required. Open your authenticator app., Make your first trade, Your transaction history will appear here., Insufficient USD. Deposit funds or convert from another asset., Deposit, Kraken Learn, Learn, Trade, still here, still here since 2011, Kraken-Brand, Kraken-Product, Jesse Powell, Thanh Luu, Michael Gronager. An English gloss may sit beside a non-English line; it never replaces the line. The line "still here since 2011" appears in the source only inside the dropped persona section; it is kept here as a published positioning string, not as a biography or a primary task. Keeping that line as published copy rather than as a persona fact, and treating the forbidden-register list as the source's own Don'ts rather than as a separately published microcopy specification, are derived editorial implementation inferences from the verified surfaces; they are not Kraken-authored or a separately published UI specification.

**Forbidden phrases.** "Get rich quick", "moon", "to the moon". Casino metaphors. Hyperbolic ROI promises.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not Kraken-authored or a separately published UI specification.

- a numeric cubic-bezier value for the source's "Standard cubic-bezier" phrase
- hover, focus-visible, and pressed visual treatments on the token-set components
- font source URLs and a public first-party web-font licence for Kraken-Brand and Kraken-Product
- a downloadable Kraken-hosted wordmark; the catalog field is `logo.type: github` / `logo.slug: krakenfx`
