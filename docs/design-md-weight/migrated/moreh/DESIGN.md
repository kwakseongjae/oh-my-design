# Moreh Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Moreh (모레) is a Korean AI-infrastructure software company. This contract covers the two first-party web surfaces the source inspected live on 2026-06-26: the homepage at `https://moreh.io` and the blog at `https://moreh.io/blog`. The official GitHub organization at `https://github.com/moreh-dev` and the about page at `https://moreh.io/about` are named brand sources for identity and founding narrative; they do not supply the computed interface tokens below. Treating those two inspected routes as this contract's token surfaces, and keeping GitHub and about as named sources that do not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

Moreh (모레) builds inference software that frees large language models from a single GPU vendor, and its homepage carries that same posture of disciplined, vendor-neutral engineering. The captured interface layer is built on a warm near-black ink (`#050403`) rather than pure black, set on a pure-white canvas (`#ffffff`) and broken up by sunken cream bands (`#f8f7f4`). Against that quiet, almost editorial neutral field, a single saturated safety-orange (`#ff5700`) does all the persuading — it is the only chromatic color in the system, reserved for the primary "Request Demo" CTA and a handful of accent callouts. The effect is industrial and confident: this reads like infrastructure tooling that respects your attention, not a consumer app fighting for it. The typographic voice is **Inter throughout**, run at SemiBold (weight 600) for display and dropping to 400/500 for everything functional — there is no second typeface and no light weight anywhere. What makes the system feel premium is the scale and the tracking: the hero headline "Optimal LLM Inference on Every Accelerator" lands at roughly 94px with a dramatic `-3.74px` negative letter-spacing and a 1.0 line-height, compressing the words into a single dense, engineered block. The cream hero type (`#f8f7f4`) sits on a `hero-dark` band of warm near-black (`#050403`), so the page opens dark and serious before resolving into bright white documentation-style sections below. Section titles (H2) run at 40px / 600 with `-1px` tracking; feature heads (H3) at 18px / 600. Live inspection found `box-shadow: none` across the hero, nav, headings, and cards — separation is done entirely with flat surfaces and thin `1px` hairlines in `#dfdeda` (or a `#d2d1cd` dashed variant for placeholder blocks), plus the alternation of white, cream (`#f8f7f4`), and dark (`#1c1a18`) full-width bands. Geometry is uniformly restrained: a single `6px` corner radius (`rounded-sm`) on every button, card, dropdown, and pill — never a sharp square, never a full pill. The footer drops to a neutral-800 charcoal (`#1c1a18`) with faint `#a09e9a` links and hairline `#2a2926` borders. Secondary text steps down through a warm-grey ladder — `#65635f` for muted body, `#a09e9a` for the faintest labels — and inline links use a darker burnt-orange (`#dd4300`) so they stay AA-legible on light surfaces while the brighter `#ff5700` and its `#ff793e` hover stay on solid CTA chrome. The hex values, family, radii, labels, and class names named beside them are the source's own. The readings in this section — disciplined vendor-neutral engineering, quiet almost-editorial neutral field, orange doing all the persuading, industrial and confident, infrastructure tooling that respects your attention rather than a consumer app fighting for it, premium as scale and tracking, a single dense engineered headline block, dark and serious opening, documentation-style sections, uniformly restrained geometry — are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Moreh (모레) is a Korean AI-infrastructure software company founded in **September 2020** by **Gangwon Jo (조강원, CEO)** and **Jaejin Lee (이재진)** — a lineage rooted in Seoul National University's high-performance and parallel-computing research. The founding premise is a direct response to a structural problem in the AI industry: training and inference are effectively locked to a single GPU vendor's software stack (CUDA), which concentrates cost and supply risk. Moreh's answer is a software layer — branded **MoAI** — that turns *heterogeneous* accelerators (AMD Instinct GPUs, Tenstorrent, and more) into unified, high-performance clusters, so an organization can "run frontier models on the hardware they already have." That thesis is visible across the product line: the **MoAI Inference Framework** (end-to-end inference), **MoAI Performance Gateway** (intelligent workload routing), **MoAI Fabric** (software-defined, cross-vendor interconnect), and drop-in **Moreh vLLM** replacements for AMD and Tenstorrent. The company's positioning — "Infrastructure software for hyperscale AI" / "Optimal LLM Inference on Every Accelerator" — frames Moreh as the vendor-neutral layer beneath the model, solving the hard, unglamorous problems: parallelization, disaggregation, cluster scheduling, and hardware-level optimization. What Moreh refuses, visible in its design: the loud, gradient-heavy aesthetic of consumer AI marketing, and the institutional blandness of legacy enterprise infra. What it embraces: a flat, engineering-grade interface; a single confident orange used sparingly as a signal; dark-to-light editorial bands; and benchmark-first, evidence-led communication. The restraint is the message — this is a company that would rather be trusted by infrastructure engineers than admired by a broad audience. Founding month, founders, SNU lineage, MoAI product names, and the quoted positioning lines are the source's own recordings. The source's own note that specific founding and biographical details beyond the site are widely documented public knowledge, not directly quoted from a verified Moreh statement in that turn, is kept here. Classifying that founding-and-product narrative, the refuses/embraces pairing, and the closing sentence that the restraint is the message as brand context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Moreh-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks, each naming a control, label, or surface the source records, is a derived editorial implementation inference from the verified surfaces; it is not Moreh-authored or a separately published UI specification. They do not come from a persona section.

- Act on the primary CTA `Request Demo` on the hero and nav.
- Open `View Benchmarks` on the dark hero band.
- Scan the sections `From Kernels to Clusters` and `Why Moreh`.
- Read the blog's citation-style "Technical Report" writing.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records as publicly observable Moreh user segments, kept in its wording: ML-infrastructure engineers, platform leads at GPU-cost-sensitive orgs, sovereign-AI / non-NVIDIA adopters. Copy on the captured surfaces assumes a sophisticated reader (ML infra engineers, platform leads) and speaks peer-to-peer. Dropping the fictional biographies rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, reading those source-named groups as this product's audience, and keeping the source's sophisticated-reader and peer-to-peer note beside those groups, are derived editorial implementation inferences from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, is a derived editorial implementation inference from the verified surfaces; it is not Moreh-authored or a separately published UI specification.

- Single saturated safety-orange (`#ff5700`) reserved for the primary CTA — the system's only chromatic color
- Warm near-black ink (`#050403`) instead of pure black; cream (`#f8f7f4`) sunken surfaces
- Inter everywhere at weight 600 display / 400-500 functional — one typeface, no light weight
- Dramatic negative tracking on display (`-3.74px` at 94px, `-1px` at 40px) compressing headlines into dense blocks
- Dark-to-light cadence: a near-black `hero-dark` (`#050403`) band opening into bright white + cream sections
- Flat, shadow-free depth — `1px #dfdeda` hairlines (and `#d2d1cd` dashed) do the separating
- Uniform `6px` radius on every interactive surface — no sharp squares, no full pills
- Two oranges by job: bright `#ff5700` / hover `#ff793e` on chrome, AA-safe `#dd4300` for inline links
- Charcoal `#1c1a18` footer with faint `#a09e9a` text and `#2a2926` hairline borders

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification. The source labels claims of this kind — for example "vendor neutrality is the product", "the restraint is the message" — as editorial readings connecting observed design to positioning, not directly sourced Moreh statements.

1. **Vendor neutrality is the product.** Moreh exists to break single-vendor lock-in. *UI implication:* never visually privilege one hardware vendor; present AMD, Tenstorrent, and others as peers on equal cards.
2. **Evidence over claims.** The product is sold on benchmarks, not adjectives. *UI implication:* lead with numbers and charts; the "View Benchmarks" CTA sits beside "Request Demo".
3. **One signal color.** Orange (`#ff5700`) means "act." *UI implication:* reserve the saturated orange for the primary CTA so the next step is never ambiguous; everything else stays neutral.
4. **Flat and engineered.** Precision beats decoration. *UI implication:* no shadows; separate with band contrast and hairlines; one `6px` radius everywhere.
5. **Density where it informs, calm where it persuades.** *UI implication:* research-dense blog rows and benchmark tables; airy, 96px-spaced marketing sections with one headline and one action.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

- Reserve orange (`#ff5700`) for the single primary CTA — keep it the only chromatic color
- Use warm near-black ink (`#050403`) for text and dark bands instead of pure black
- Set all display in Inter SemiBold (600) with tight negative tracking (`-3.74px` at hero)
- Separate sections with flat band contrast (white / cream `#f8f7f4` / dark) and `#dfdeda` hairlines, not shadows
- Keep a uniform `6px` radius on every button, card, dropdown, and pill
- Use the AA-safe burnt-orange (`#dd4300`) for inline text links on light surfaces
- Open the page on the dark `hero-dark` (`#050403`) band with cream (`#f8f7f4`) headline type
- Step secondary text down the warm-grey ladder (`#65635f` → `#a09e9a`)

### Avoid

The source states these eight as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

- Don't spread orange across many elements — it dilutes the single-action signal
- Don't use drop shadows for elevation — Moreh is a flat, hairline-separated system
- Don't use pure black (`#000000`) for body text — reserve warm ink `#050403`
- Don't use sharp squares or full pills on interactive elements — everything is `6px`
- Don't introduce a second typeface or a light weight — Inter 600/500/400 only
- Don't put the bright `#ff5700` on small inline links — use `#dd4300` for legibility
- Don't use positive letter-spacing on display — Moreh tracks tight (positive tracking only on the tiny footer pills)
- Don't add a second accent hue — orange is the only saturated color

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. Taking those role names from the source's own labels, pairing each hex to the token-set path named beside it, keeping cream as both sunken-section surface and on-dark text, keeping ink as both heading text and `hero-dark` / inverse-callout background, keeping canvas off dropdown-menu surface as two jobs of `#ffffff`, and keeping `#ff5700` / `#ff793e` / `#dd4300` as three orange keys rather than one, are derived editorial implementation inferences from the verified surfaces; they are not Moreh-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

**Primary**

- **Moreh Orange** (`#ff5700`): The primary brand color and CTA background (Tailwind token `bg-accent`). A saturated safety-orange — the single "action" color across the whole system, used on the "Request Demo" button and accent callout blocks. Token-set path `tokens.colors.primary`. Catalog `primary_color` is the same hex.
- **Orange Hover** (`#ff793e`): The lighter orange-400 (`bg-o-400`) used for hover states and softer accent callout rows. Token-set path `tokens.colors.primary-hover`.
- **Burnt-Orange Link** (`#dd4300`): The darker, AA-safe orange used for inline text links with arrows ("Learn more →", "AMD GPU →") and active nav items on light surfaces. Token-set path `tokens.colors.link`.

**Ink & Surface**

- **Ink** (`#050403`): Primary text and heading color, and the `hero-dark` / inverse-callout background (`bg-inverse/text-on-inverse`). A warm near-black — never pure black for body copy. Token-set path `tokens.colors.ink`.
- **Cream** (`#f8f7f4`): The sunken-section surface (`section-sunken`) and the on-dark text color in the hero. A warm off-white that softens the alternating bands. Token-set path `tokens.colors.cream`.
- **Pure White** (`#ffffff`): The default page canvas, white cards, and the dropdown-menu surface. Token-set path `tokens.colors.canvas`.

**Text Hierarchy**

- **Ink** (`#050403`): Headings, nav, strong body text.
- **Muted Warm-Grey** (`#65635f`): Secondary body copy, descriptions, the language switcher label. Token-set path `tokens.colors.muted`.
- **Faint Warm-Grey** (`#a09e9a`): Tertiary text, footer links, lowest-emphasis labels. Token-set path `tokens.colors.faint`.

**Lines & Dark Surfaces**

- **Hairline** (`#dfdeda`): The primary `1px` border for cards, dropdowns, and section dividers — the main separation device in a shadow-free system. Token-set path `tokens.colors.hairline`.
- **Dashed Hairline** (`#d2d1cd`): A `1px` dashed border for placeholder / drop-zone style blocks. Token-set path `tokens.colors.hairline-dashed`.
- **Footer Charcoal** (`#1c1a18`): The neutral-800 (`bg-n-800`) dark footer background. Token-set path `tokens.colors.dark`.
- **Dark Border** (`#2a2926`): The hairline border on dark surfaces (footer legal pills). Token-set path `tokens.colors.dark-border`.

### Spacing

Token-set paths: `tokens.spacing.xs: 6`, `tokens.spacing.sm: 8`, `tokens.spacing.md: 12`, `tokens.spacing.base: 16`, `tokens.spacing.lg: 20`, `tokens.spacing.xl: 24`, `tokens.spacing.section: 96`. YAML writes those steps unitless. Source §5 writes Base unit: ~4px (6/8/12/16/20/24 ladder) and the scale as `6px, 8px, 12px, 16px, 18px, 20px, 24px, 96px`. Both writings stay. The unitless YAML steps are not rewritten as a replacement `px`. `18px` is a §5 / component padding writing (button horizontal padding); it is not a YAML spacing key. Notable: section vertical rhythm is generous (`96px` top/bottom padding on sunken bands); button horizontal padding is a tight `18px` for a compact, dense CTA. Reading those named steps as a ~4px base with a 6/8/12/16/20/24 ladder, keeping YAML `6` / `8` / `12` / `16` / `20` / `24` / `96` off prose `6px` / `8px` / `12px` / `16px` / `20px` / `24px` / `96px`, keeping body type `16` off `tokens.spacing.base: 16`, and keeping button padding `18px` off the YAML spacing map, are derived editorial implementation inferences from the verified surfaces; they are not Moreh-authored or a separately published UI specification. The step values themselves are the source's own.

### Shape

Token-set paths: `tokens.rounded.sm: 6`, `tokens.rounded.full: 9999`. YAML writes those steps unitless. Source §5 writes Small (6px): every button, card, dropdown, pill — the single workhorse radius (`rounded-sm`); Full (9999px): reserved only for circular avatars/dots, never for buttons. Both writings stay. YAML `6` and `9999` stay on their own paths; they are not rewritten as a replacement `px`. Geometry is uniformly restrained: a single `6px` corner radius on every button, card, dropdown, and pill — never a sharp square, never a full pill. Keeping YAML `6` off prose `6px`, keeping YAML `9999` off prose `9999px`, reading `6px` as the single workhorse radius rather than as a mid-range option on a larger scale, and reading `9999` as avatar/dot-only rather than as a button pill, are derived editorial implementation inferences from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most cards |
| Band (Level 1) | Background shift — white ↔ cream `#f8f7f4` ↔ dark `#050403`/`#1c1a18` | Section separation without elevation |
| Hairline (Level 2) | `1px solid #dfdeda` (or `#d2d1cd` dashed) border | Card outlines, dropdown edges, dividers |
| Overlay (Level 3) | White dropdown with `1px #dfdeda` + a very faint shadow | Nav mega-dropdown panels only |

Shadow token: `tokens.shadow.none` is `none`. Live inspection found `box-shadow: none` across the hero, nav, section headings, and feature cards; the only elevation is a barely-there shadow on the nav dropdown.

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not Moreh-authored or a separately published UI specification. Moreh is a near-shadowless system. Depth is communicated through flat band contrast (dark `#050403` / white / cream `#f8f7f4` / charcoal `#1c1a18`) and thin `#dfdeda` hairlines. This is a deliberate engineering-grade flatness — it keeps an infrastructure product feeling precise and fast rather than decorative. When emphasis is needed, the system reaches for the orange (`#ff5700`) or an inverse dark block, never a drop shadow. The four-level table, the `none` token, the live `box-shadow: none` observation, and the faint-shadow overlay writing are the source's own; they stay unmerged.

### Motion

Duration roles as this record states them, with no computed transition observation behind them, are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus, nav-dropdown reveal |
| `motion-standard` | 200ms | Card / section reveal, dropdown panel, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing token names and uses as this record states them, with the curves omitted, are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | Omitted — the token name and use are recorded and no curve evidence is attributed | Arriving — dropdowns, cards, sections |
| `ease-exit` | Omitted — the token name and use are recorded and no curve evidence is attributed | Dismissals |
| `ease-standard` | Omitted — the token name and use are recorded and no curve evidence is attributed | Two-way transitions |

The reduced-motion rule and motion character in this paragraph are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification. Motion is functional and quiet — consistent with the flat, engineered aesthetic. Nav mega-dropdowns fade/translate in at `motion-fast / ease-enter`; section content fades up from below at `motion-standard`. There is no bounce or spring — an infrastructure product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

The three exact cubic-bezier curves carry no attribution in this record and stay omitted rather than promoted. `ease-exit`'s omitted value matches the legacy authoring template. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation, and refusing a match against an official framework or vendor document as that gate, are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification. Do not promote an easing curve, an animation name, a CSS transition property, or a duration beyond the table above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, and the resolution in each cell — no Moreh-published type specification, live Inter surface-use, no distributed font file, no declared-but-unused family, no license statement, and no type value from a surface outside the two captures — is a derived editorial implementation inference from the verified surfaces; it is not Moreh-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | This record's evidence is live inspection of two web surfaces; it carries no Moreh-published type specification. |
| Live computed surface-use | All captured text computes as Inter. Display and headings at weight 600; buttons and inline links at 500; body and nav at 400. |
| Official distributed asset | The record establishes the family in use and carries no Moreh-distributed font file. |
| Declared-only | The record lists no declared-but-unused family for these surfaces. Inter is declared with the system sans fallback stack; that stack is not presented as the brand face. |
| License | No license or distribution statement accompanies the family in this record. |
| Outside these captures | Surfaces other than `https://moreh.io` and `https://moreh.io/blog` contributed no type value here. |

### Family

- **All text:** `Inter` (with the system sans fallback stack). There is one typeface — Inter carries display, body, nav, and UI. No serif, no monospace display, no second family. one typeface only. Token-set path `tokens.typography.family.sans`.
- **Weights in use:** 600 (SemiBold) for all display/headings, 500 (Medium) for buttons and inline links, 400 (Regular) for body and nav. No light (300) and no heavy (700+) weights appear.

Do not substitute a system font or another grotesque for Inter and present it as the brand face. Do not replace an unavailable or unobserved brand type with Inter.

Calling Inter the one typeface that carries every job, assigning 600 / 500 / 400 as the only weights in use, and refusing to substitute a system font or another grotesque as the brand face, is a derived editorial implementation inference from the verified surfaces; it is not Moreh-authored or a separately published UI specification. The family name and the weights are live-computed.

### Type roles

YAML writes numeric sizes, line heights, and tracking without a `px` suffix. Source §3 writes the same roles with `px`. The trailing live-inspect comment writes the hero as Inter `93.6px` / weight 600 / `-3.744px` / line-height `93.6px`. All three writings stay. YAML lineHeight values stay as those numbers and are never converted to a replacement px. Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping the longer §3 notes beside them, keeping YAML `94` / `1.00` / `-3.74` off prose `94px` / `-3.74px` and off live `93.6px` / `-3.744px`, keeping YAML `72` / `-2.52` off `72px` / `-2.52px`, keeping YAML `40` / `-1.0` off `40px` / `-1px`, keeping YAML `18` / `-0.18` off `18px` / `-0.18px`, keeping body `16` off `tokens.spacing.base: 16`, keeping YAML micro with no lineHeight beside §3 micro `1.50`, and keeping live hero `93.6px` as the inspect writing rather than as a replacement for YAML `94`, are derived editorial implementation inferences from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Letter spacing | Token-set use | Notes |
|---|---|---|---:|---|---|---|---|
| Display Hero | Inter | YAML `94` / §3 `94px (fluid)` / live `93.6px` | 600 | YAML `1.00` / live `93.6px` | YAML `-3.74` / §3 `-3.74px` / live `-3.744px` | Hero headline, Inter SemiBold, fluid clamp | Hero headline, cream on dark |
| Display | Inter | YAML `72` / §3 `72px` | 600 | YAML `1.05` / §3 `1.05` | YAML `-2.52` / §3 `-2.52px` | Page title (Blog), Inter SemiBold | Page title (Blog) |
| Section Heading | Inter | YAML `40` / §3 `40px` | 600 | YAML `1.12` / §3 `1.12` | YAML `-1.0` / §3 `-1px` | Section titles (H2), Inter SemiBold | Section titles (H2) |
| Sub-section | Inter | YAML `18` / §3 `18px` | 600 | YAML `1.30` / §3 `1.30` | YAML `-0.18` / §3 `-0.18px` | Card / feature heads (H3) | Card / feature heads (H3) |
| Body | Inter | YAML `16` / §3 `16px` | 400 | YAML `1.50` / §3 `1.50` | normal | Standard reading text, Inter | Standard reading text |
| Nav Link | Inter | YAML `14` / §3 `14px` | 400 | YAML `1.50` / §3 `1.50` | normal | Top nav links | Top nav items |
| Button | Inter | YAML `14` / §3 `14px` | 500 | YAML `1.50` / §3 `1.50` | normal | CTA button label, Inter Medium | CTA button labels |
| Small / Link | Inter | YAML `13` / §3 `13px` | 500 | YAML `1.55` / §3 `1.55` | normal | Inline accent links, dropdown items | Inline accent links, dropdown items |
| Micro | Inter | YAML `11` / §3 `11px` | 400 | YAML none / §3 `1.50` | YAML `1.32` / §3 `1.32px` | Footer legal pill, wide-tracked | Footer legal pill, wide-tracked |

Token-set paths: `tokens.typography.display-hero` · `tokens.typography.display` · `tokens.typography.section` · `tokens.typography.subsection` · `tokens.typography.body` · `tokens.typography.nav` · `tokens.typography.button` · `tokens.typography.small` · `tokens.typography.micro`.

The following type-hierarchy readings are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

- **One typeface, weight does the work**: Inter at 600 for everything that headlines, 400/500 for everything that informs. Hierarchy comes from size and weight, never from a font swap.
- **Tracking tightens with size**: display compresses hard (`-3.74px` at 94px, `-2.52px` at 72px, `-1px` at 40px); body stays at normal tracking. The only positive tracking is the wide-set `1.32px` on the tiny footer legal pills.
- **No light weight**: unlike the whisper-weight headline trend, Moreh keeps display at a solid SemiBold 600 — engineered and legible, not ethereal.
- **Dense, technical body**: body sits at 16px / 1.5 in warm ink for long-form technical reading (the blog is research-report dense).

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=moreh.io&sz=128`. Frontmatter records `logo.type: favicon`. That URL is a third-party favicon-proxy pointer, not a Moreh-hosted brand file.
- Benchmark charts and diagrams sit on cream (`#f8f7f4`) or white cards with hairline borders, no shadow at any size.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a Moreh-hosted brand file, and reading the charts as first-party page content rather than as a published illustration specification, are derived editorial implementation inferences from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The live inspection recorded default computed styles. YAML `tokens.components.button-primary.states` records hover `#ff793e` on the primary CTA. Hover, button press, and focus are also named in this record's motion rules (`motion-fast` 120ms) without an accompanying computed value on the other controls, so those visual treatments are omitted where this packet holds no value for that same canonical state.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

The Accent Callout, Inverse Callout, and Feature Card have recorded geometry and no interactive-kind evidence, so kind and a state-applicability map are omitted for them rather than assumed. A `Primitive type` line is attached only when the source YAML records that type on that component. YAML records `type: button` on `tokens.components.button-primary`, `tokens.components.button-ghost`, and `tokens.components.text-link`; `type: tab` on `tokens.components.nav-item`; `type: card` on `tokens.components.callout-accent` and `tokens.components.callout-inverse`; `type: dialog` on `tokens.components.dropdown-menu`; `type: badge` on `tokens.components.footer-pill`. Search / Text Field, Dashed Placeholder Card, and Feature Card are labelled `not in the token set`.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, the omit-kind decision for the three card records, the refusal to attach a YAML primitive type that the token set does not record, labelling every non-YAML component `not in the token set`, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

### State treatments

The nine state treatments below are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification. They compose values established elsewhere in this contract, and no computed per-component observation accompanies them. The rows themselves are the source's §14 table, kept as written.

| State | Treatment |
|---|---|
| **Empty (no benchmark results)** | White canvas. Single Ink (`#050403`) line explaining no results yet, with one orange (`#ff5700`) CTA to run/request a benchmark. Dashed `#d2d1cd` placeholder card, no clutter. |
| **Empty (blog filter, none)** | Muted Warm-Grey (`#65635f`) single line: nothing matches this filter, with a path back. Calm and honest. |
| **Loading (results fetch)** | Skeleton rows on `#f8f7f4` cream surface at final dimensions, 6px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place table refresh)** | Subtle orange (`#ff5700`) progress affordance; previous values stay visible. |
| **Error (request failed)** | Inline message in Ink (`#050403`) with a plain explanation and a retry. No generic "Something went wrong" alone — states the next step. |
| **Error (form validation)** | Field-level message below the input; describes what is valid, not just "Required". |
| **Success (demo requested)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f8f7f4` blocks at final dimensions, 6px radius, flat pulse. |
| **Disabled** | Faint Warm-Grey (`#a09e9a`) text on reduced-opacity surface; orange actions fade rather than turn grey to preserve the brand read. |

### Request Demo (Primary)

- Role: the single primary CTA — hero and nav "Request Demo"
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Label: `Request Demo`
- Background: `#ff5700`
- Text: `#ffffff`
- Radius: 6px
- Padding: 0px 18px
- Height: 40px
- Font: 14px / 500 Inter
- Hover: `#ff793e` background
- YAML `states: "hover #ff793e"`
- Token-set use: Hero / nav primary CTA — Request Demo
- Observed: default; hover `#ff793e`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the hero and nav |
| hover | applicable | Pointer-web button; YAML records hover `#ff793e` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; source states orange actions fade rather than turn grey; visual treatment omitted as a computed value |
| loading | applicable | The control commits a demo request, which pends; visual treatment omitted |
| error | applicable | The committed request can fail and report on this control; visual treatment omitted |
| success | applicable | Source states Success (demo requested); visual treatment omitted as a computed value |

### View Benchmarks (Ghost on Dark)

- Role: Secondary CTA on the dark hero band
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Label: `View Benchmarks`
- Background: transparent
- Text: `#f8f7f4`
- Radius: 6px
- Padding: 0px 18px
- Height: 40px
- Border: 1px solid rgba(255,255,255,0.25)
- Font: 14px / 500 Inter
- Token-set use: Secondary CTA on the dark hero — View Benchmarks
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the dark hero |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | `View Benchmarks` is a destination control; it commits no operation in place |
| error | not-applicable | Reaching the benchmarks is navigation, not a request this control reports |
| success | not-applicable | Arrival at the benchmarks is not an operation this control reports as success |

### Inline Accent Link

- Role: arrow text links on light surfaces
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Labels: `Learn more →`, `AMD GPU →`, `View all →`
- Text: `#dd4300`
- Font: 13px / 500 Inter
- Token-set use: Inline accent link with arrow — Learn more, AMD GPU
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as inline accent links |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A text link can be gated; visual treatment omitted |
| loading | not-applicable | A destination link commits no operation in place |
| error | not-applicable | The link reports no request or validation failure of its own |
| success | not-applicable | Reaching the destination is navigation, not an action-outcome confirmation on the link |

### Search / Text Field

- Role: Docs/blog search and contact fields (hairline outline, no shadow)
- Primitive type: not in the token set · Kind: interactive
- Anatomy: value field
- Background: `#ffffff`
- Border: 1px solid `#dfdeda`
- Radius: 6px
- Text: `#050403`
- Placeholder: `#a09e9a`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as docs/blog search and contact fields |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | The field belongs to search and contact forms that fetch or submit; visual treatment omitted |
| error | applicable | Form field; source states a field-level message below the input; visual treatment omitted as a computed value |
| success | applicable | Form field; visual treatment omitted |

### Accent Callout

- Role: Orange highlight callout block in comparison/benchmark rows
- Primitive type: `card`
- Background: `#ff5700`
- Text: `#ffffff`
- Radius: 6px
- Padding: 20px 24px
- Token-set use: Orange highlight callout block in comparison rows
- Kind and a state-applicability map are omitted: the YAML record names a card, not an interactive control, and it does not record hover or another interactive kind.

### Inverse Callout

- Role: Dark inverse callout block
- Primitive type: `card`
- Background: `#050403`
- Text: `#f8f7f4`
- Radius: 6px
- Padding: 20px 24px
- Token-set use: Dark inverse callout block
- Kind and a state-applicability map are omitted: the YAML record names a card, not an interactive control, and it does not record hover or another interactive kind.

### Dashed Placeholder Card

- Role: Placeholder / empty comparison cell
- Primitive type: not in the token set
- Kind: non-interactive — an empty comparison cell, not a control
- Background: `#ffffff`
- Border: 1px dashed `#d2d1cd`
- Radius: 6px
- Padding: 20px 16px

### Feature Card

- Role: feature card under "From Kernels to Clusters" and "Why Moreh"
- Primitive type: not in the token set
- Kind and a state-applicability map are omitted: the record establishes geometry and no interactive-kind evidence.
- Background: `#ffffff`
- Border: 1px solid `#dfdeda`
- Radius: 6px
- Shadow: none
- Title: 18px Inter weight 600, letter-spacing -0.18px, `#050403`
- Body: 16px weight 400, `#65635f`
- Inline link: `#dd4300`, 13px/500, with a → arrow

### Footer Legal Pill

- Role: Legal links on the dark footer
- Primitive type: `badge` · Kind: interactive
- Anatomy: label
- Labels: `Privacy Policy`, `Terms of Use`
- Background: transparent
- Text: `#a09e9a`
- Border: 1px solid `#2a2926`
- Radius: 6px
- Padding: 6px 12px
- Font: 11px / 400 Inter, wide 1.32px tracking
- Token-set use: Legal pill on dark footer — Privacy Policy, Terms
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the dark footer |
| hover | applicable | Pointer-web legal link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A legal link can be gated; visual treatment omitted |
| loading | not-applicable | A destination legal link commits no operation in place |
| error | not-applicable | Opening a policy page is not a request this pill reports |
| success | not-applicable | Arrival at the policy page is not an operation this pill reports as success |

### Nav Mega-Dropdown

- Role: Products / Solutions / Resources / Company nav panels (near-flat, faint shadow only)
- Primitive type: `dialog` · Kind: interactive
- Anatomy: panel
- Background: `#ffffff`
- Border: 1px solid `#dfdeda`
- Radius: 6px
- Padding: 12px 0px
- Token-set use: Nav mega-dropdown panel (Products / Solutions)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as nav mega-dropdown panels |
| hover | applicable | Pointer-web overlay; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable overlay; visual treatment omitted |
| disabled | applicable | A menu panel can be held closed; visual treatment omitted |
| loading | not-applicable | Opening a nav panel commits no operation that pends |
| error | not-applicable | A menu panel reports no request or validation failure of its own |
| success | not-applicable | Revealing the panel is not an action-outcome confirmation |

### Nav Item

- Role: Top-nav dropdown trigger / current item
- Primitive type: `tab` · Kind: interactive
- Anatomy: label
- Background: `#ffffff`
- Text: `#050403`
- Font: 14px / 400 Inter
- Active: burnt-orange `#dd4300` text on a `#f8f7f4` tinted item (YAML `active: "text #dd4300 + bg #f8f7f4"`)
- Items: Products, Solutions, Performance, Resources, Careers, Company
- Use: Top horizontal nav (Products, Solutions, Performance, Resources, Careers, Company)
- Token-set use: Top-nav dropdown trigger / current item
- Observed: default; active text `#dd4300` + bg `#f8f7f4`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the top horizontal nav |
| hover | applicable | Pointer-web navigation item; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A navigation entry can be unavailable; visual treatment omitted |
| loading | not-applicable | The item moves the reader to another area or opens a panel; the item itself commits no operation that pends |
| error | not-applicable | Active versus inactive is the item's recorded meaning; it reports no request or validation failure |
| success | not-applicable | Reaching a destination area is navigation, not an action-outcome confirmation on the item |

Additional observed state: active — text `#dd4300` + bg `#f8f7f4`.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and container

Centered max-width content column with a dark `hero-dark` band (`#050403`) anchoring the top. Feature grids: 2-3 column cards under "From Kernels to Clusters" and "Why Moreh". Full-width band alternation: dark hero → white → cream (`#f8f7f4`) sunken sections → charcoal footer. Blog/news lists are single-column, hairline-divided rows (research-report density). Sunken section: `#f8f7f4` background, 96px vertical padding, 1px top border `#dfdeda`. Section title 40px Inter weight 600, letter-spacing -1px, `#050403`.

The following whitespace reading — "Editorial calm over density", "Band cadence", "Hairline economy", and reading the named steps as a ~4px base — is a derived editorial implementation inference from the verified surfaces; it is not Moreh-authored or a separately published UI specification.

- **Editorial calm over density**: despite being deeply technical, the marketing surface breathes — generous 96px section rhythm.
- **Band cadence**: meaning is signaled by background band (dark / white / cream) rather than by boxes and shadows.
- **Hairline economy**: a single `1px #dfdeda` line replaces what other systems do with elevation.

### Responsive behavior

The breakpoint table, the collapsing rules below, and the desktop-viewport setting of the inspections that produced the values in this contract, are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification. The inspections that produced the values in this contract were taken at a desktop viewport.

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses sharply, nav collapses to a menu |
| Tablet | 640-1024px | 2-up feature cards, moderate padding |
| Desktop | 1024-1440px | Full layout, centered content, 3-column feature grids |

- Hero: the ~94px fluid headline scales down on mobile, weight 600 maintained
- Feature grids: 3-column → 2-column → stacked single column
- Band alternation (dark / white / cream) maintained full-width across breakpoints
- Nav mega-dropdowns collapse into an accordion menu

### Touch targets

- Primary CTA at 40px height with 18px horizontal padding — compact but tappable
- Nav items at 36-37px with comfortable hit areas; dropdown rows at 75px
- Footer legal pills at ~31px height with 12px padding

Calling those heights compact but tappable, or comfortable, is a derived editorial implementation inference from the verified surfaces; it is not Moreh-authored or a separately published UI specification. The heights themselves are recorded component measurements.

### Image behavior

- Benchmark charts and diagrams sit on cream (`#f8f7f4`) or white cards with hairline borders, no shadow at any size
- Cards maintain the `6px` radius across breakpoints

Reading the no-shadow imagery rule as consistent with the flat system, and keeping 6px radius across breakpoints, is a derived editorial implementation inference from the verified surfaces; it is not Moreh-authored or a separately published UI specification. The geometry values themselves are recorded component measurements.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice samples

These strings are verbatim live copy from the captured surfaces. The parenthetical labels — hero headline, page title meta, section heading, CTA labels — are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

- "Optimal LLM Inference on Every Accelerator" — hero headline. *(verified live 2026-06-26)*
- "Inference Software for Every Chip" — page title meta. *(verified live 2026-06-26)*
- "From Kernels to Clusters" — section heading. *(verified live 2026-06-26)*
- "Request Demo" / "View Benchmarks" — hero CTA labels. *(verified live 2026-06-26)*

Document title as the source records it: "Moreh — Inference Software for Every Chip".

### Voice and tone

The voice reading below, including the tone table, is a derived editorial implementation inference from the verified surfaces; it is not Moreh-authored or a separately published UI specification. Moreh's voice is **precise, technical, and quietly ambitious** — the register of systems engineers who would rather show a benchmark than make a claim. The hero line "Optimal LLM Inference on Every Accelerator" sets the tone: a concrete capability promise, no hype, no exclamation. Copy assumes a sophisticated reader (ML infra engineers, platform leads) and speaks peer-to-peer — section titles like "From Kernels to Clusters" telegraph the full stack in five words, and the blog is dense, citation-style "Technical Report" writing, not marketing fluff.

| Context | Tone |
|---|---|
| Hero headlines | Declarative capability statements. "Optimal LLM Inference on Every Accelerator." No superlatives. |
| Section titles | Compressed, technical. "From Kernels to Clusters", "Why Moreh", "Ecosystem & Open Source". |
| CTAs | Direct, low-pressure imperatives. "Request Demo", "View Benchmarks", "Learn more". |
| Product names | Systematic, prefixed. "MoAI Inference Framework", "MoAI Performance Gateway", "MoAI Fabric". |
| Blog / technical reports | Dense, evidence-first, engineer-to-engineer. Performance numbers precede prose. |

### Forbidden register

The exclusions below are a derived editorial implementation inference from the verified surfaces; they are not Moreh-authored or a separately published UI specification. **Forbidden register**: hype superlatives ("revolutionary", "game-changing"), exclamation-heavy marketing, vague AI buzzwords without a concrete mechanism, claims unbacked by a benchmark.

### Locale

Moreh is a Korean company. Its name is written `모레` in Korean, and the captured homepage is English. A language switcher label is recorded as muted `#65635f`. The Korean name `모레` sits beside `Moreh` and does not replace it. Founder names are kept in both writings: Gangwon Jo (조강원), Jaejin Lee (이재진). Keeping `모레` beside `Moreh` rather than as a replacement, and keeping the two founder-name writings unmerged, are derived editorial implementation inferences from the verified surfaces; they are not Moreh-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. Treating the list as unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Moreh-authored or a separately published UI specification.

- the exact `ease-enter`, `ease-exit`, and `ease-standard` curves; the token names and uses are recorded, the curves carry no attribution
- hover, button-press, and focus visual treatments on controls other than Request Demo, which YAML records as hover `#ff793e`; the motion rules name `motion-fast` 120ms without an accompanying computed value
- the interactive kind of the Accent Callout, Inverse Callout, and Feature Card
- computed per-component values behind the empty, loading, error, success, skeleton, and disabled treatments described above
- `focus-visible` visual treatment; the source names generic focus as a motion-fast use and does not record a `focus-visible` color
