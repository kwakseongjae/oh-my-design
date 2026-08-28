# iCHEF Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

iCHEF is an iPad-based restaurant point-of-sale system. Its catalog homepage is `https://www.ichefpos.com`. This contract covers the first-party marketing surface the source fetched at `https://www.ichefpos.com` and the iPad product UI the source describes. The pages at `https://www.ichefpos.com/about-ichef` and `https://www.ichefpos.com/ichef-story` are named brand sources for mission and founding; they do not supply computed interface tokens. Token extraction is `tokens.source: prose-derived` (`tokens.extracted` 2026-06-09). The source records that live computed-style verification was not completed this pass (WebFetch returned the marketing copy but the inspection browser session redirected unreliably). Values below combine the brief-provided primary, iCHEF's known orange-red operational identity, and conventional POS/SaaS roles. Hexes other than the primary are well-grounded approximations pending live re-inspection. Treating `https://www.ichefpos.com` as the fetched marketing surface, treating the described iPad product UI as a source-named surface rather than a live-computed harvest, treating `/about-ichef` and `/ichef-story` as named sources that do not supply computed tokens, and keeping the prose-derived / not-live-inspected bound on every value that follows, are derived editorial implementation inferences from the verified surfaces; they are not iCHEF-authored or a separately published UI specification.

The atmosphere the source records is **clean operational warmth** — a white, well-lit canvas anchored by a confident orange-red (`#E8552D` / token-set `#e8552d`) that the source reads as both appetite and action. Typography is a clean, modern sans with full Traditional-Chinese support (`PingFang TC`, `Microsoft JhengHei`), because iCHEF's primary market is Taiwan and its users are restaurant owners and serving staff reading on an iPad mid-service. Hierarchy is **functional and legible**. The marketing site leans on real photography of restaurants and operators; the product UI is a high-legibility operational interface: big tap targets, clear states, no decoration that could slow a busy waiter. The orange-red is the action and brand color — CTAs, key buttons, the active state on the POS grid — and the rest stays neutral and calm so the interface never fatigues someone staring at it for a ten-hour shift. The hex, the two family names, the dual marketing/product surfaces, and the award names in Distinctive traits are recorded. Calling the atmosphere clean operational warmth, calling the orange-red appetite and action in one hue, calling the system trustworthy enough to run a restaurant's money and warm enough to feel like a partner to a small-business owner, contrasting enterprise software as cold and blue with iCHEF as warm and human, contrasting a consumer app as playful with iCHEF as grounded and reliable, calling the polish a hardware-heritage bar, and calling the discipline designing for operators not consumers, are derived editorial implementation inferences from the verified surfaces; they are not iCHEF-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. iCHEF was founded in **2012 in Taipei**, and its origin is unusually literal: it was born inside a restaurant. **Sean Hsu** was running his spicy beef-noodle chain **Mazendo** when he hit the wall every restaurateur knows — the existing POS terminals were big, fixed, expensive, and built for the vendor's convenience, not the operator's workflow. Wanting a simpler, mobile, iPad-based system that actually fit how a kitchen and front-of-house move, he teamed with four other specialists to design his own — and iCHEF was the result. That origin is the whole brand. iCHEF's stated belief — that **"technology should help, not handicap, entrepreneurship"** — and its mission to **"turn enterprise-level technologies into something affordable and understandable for small restaurants"** come straight from a founder who lived the problem. The design language is the expression of that empathy: the warm orange-red invites a wary, non-technical owner in; the high-legibility, big-target product UI respects that the user is mid-service with their hands full; the clean, award-winning craft signals that this small-business tool is built to a flagship standard. iCHEF's craft has been recognized at the highest levels — an **iF Gold Award (2016)**, a **German Design Award grand prize (2017)**, and Red Dot recognition — rare for a vertical SaaS tool, and a signal that design is treated as core, not cosmetic. The product now serves **over 10,000 restaurants across Asia** (Taiwan, plus Singapore, Malaysia, Hong Kong), consolidating table management, menu editing, billing, discounts, and reward points into one iPad interface — the simple, mobile system Sean Hsu wished he'd had behind the noodle counter. The year, Taipei, Sean Hsu, Mazendo, the four specialists, the two quoted mission lines, the three award names and years, the 10,000-restaurant figure, the four markets, and the closing noodle-counter sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-award narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Request a free in-store demo through `專人到店免費體驗` / `Free in-store demo` on `https://www.ichefpos.com`.
- Charge / confirm as a key POS action on the described iPad product UI.
- Use the tappable menu-item grid on the order screen.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly described iCHEF user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, occupation, or affiliation is carried into this document or its sidecar. What the source independently records, in its own words, is the audience at a group level: restaurant owners and serving staff reading on an iPad mid-service, TW restaurant operators, and small restaurants across Asia (Taiwan, plus Singapore, Malaysia, Hong Kong). Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not iCHEF-authored or a separately published UI specification.

- Orange-red (`#E8552D`) as the brand + action color — appetite and action in one hue
- Clean white operational canvas — well-lit, calm, fatigue-resistant for long shifts
- Traditional-Chinese-first typography (`PingFang TC` / `Microsoft JhengHei`) — TW restaurant operators
- Award-winning craft heritage (iF Gold 2016, German Design Award 2017, Red Dot) — high polish bar
- Dual surface: warm marketing (real-operator photography, social proof) vs. high-legibility product UI
- Big tap targets + clear states — designed for fast, iPad-based, mid-service use
- Functional hierarchy — legibility over expressiveness; nothing slows a busy waiter
- Neutral gray scale so the orange-red never competes for attention
- Trustworthy-but-warm register — partner-to-owner, not vendor-to-customer
- Conservative radius (`8px` workhorse) for a clean, reliable, professional feel

### Principles

These six items are a derived editorial implementation inference from the verified surfaces; they are not iCHEF-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Built by operators, for operators.** iCHEF's empathy comes from a founder who ran a restaurant; the UI respects the realities of service. *UI implication:* Large tap targets, terse operational labels, fast paths to the actions that matter (open table, charge, void). Never make a busy waiter hunt or read paragraphs.
2. **Warm enough to trust, rigorous enough to bank on.** The orange-red invites; the discipline reassures. *UI implication:* Use warm orange-red for brand/action and invitation; keep money and status surfaces precise — exact totals, unambiguous paid/pending/void states.
3. **Calm under load.** A ten-hour shift demands a fatigue-resistant interface. *UI implication:* Neutral operational canvas, orange-red rationed to action; no decorative animation; high contrast and legibility above expressiveness.
4. **Status is sacred.** In a POS, the difference between paid, pending, and void is the difference between getting paid and losing money. *UI implication:* Reserve green/amber/red strictly for settlement states; make them distinguishable from the brand orange-red at a glance; surface payment errors immediately, never silently.
5. **Flagship craft for a small-business tool.** Award-recognized design is a brand promise. *UI implication:* Precision in alignment, spacing, radius (8px), and state design. The bar is iF/Red Dot, not "good enough for SMB."
6. **Traditional Chinese first.** TW restaurant operators are the heart of the user base. *UI implication:* Use the `PingFang TC` / `Microsoft JhengHei` stack; author TW copy natively; never Simplified on TW surfaces.

### Application rules

The source states these as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not iCHEF-authored or a separately published UI specification.

- Reserve orange-red (`#E8552D`) for brand + action — CTAs, key POS buttons, selected states.
- Use status colors rigorously: green = paid/settled, amber = pending, red = void/error.
- Use large text and ≥44px tap targets in the product UI.
- Lead marketing with real-operator photography and concrete ROI (more orders, higher spend, accurate accounting).
- Keep numbers (totals, table numbers, quantities) bold and prominent.
- Use Traditional Chinese on TW surfaces; never Simplified.
- Honor the award-winning craft bar — alignment, spacing, and states must be precise.

### Avoid

The source states these as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not iCHEF-authored or a separately published UI specification.

- Flood the operational UI with orange-red; a long-shift interface must stay calm and fatigue-resistant.
- Confuse the brand orange-red with the error red — they must be distinguishable at a glance during a rush.
- Shrink POS controls to consumer-app sizes — a mis-tap mid-service costs money.
- Use abstract enterprise stock imagery — iCHEF's credibility is real restaurants.
- Decorate the product UI; nothing should slow or distract a busy waiter.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. The source §2 note, kept here: live computed-style verification was not completed this pass; values combine the brief-provided primary, iCHEF's known orange-red operational identity, and conventional POS/SaaS roles; hexes other than the primary are well-grounded approximations pending live re-inspection. `#E8552D` / `#e8552d` is the brief-provided primary. Every other hex in this section carries that approximation class. Pairing each hex to the token-set path named beside it, keeping the approximation class on every non-primary hex, and not promoting a muted category-color scale the source names without hexes, are derived editorial implementation inferences from the verified surfaces; they are not iCHEF-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **iCHEF Orange-Red** (`#E8552D` / token-set `#e8552d`): The brand + primary action color. Primary CTAs ("Free in-store demo"), key POS buttons, active/selected states, brand accents. Token-set path `tokens.colors.primary`.
- **Orange-Red Hover** (`#D14A26` / token-set `#d14a26`): Darker press/hover state. Token-set path `tokens.colors.primary-hover`. Approximation pending live re-inspection.
- **Orange-Red Tint** (`#FDEDE7` / token-set `#fdede7`): Very light wash for selected rows, highlight surfaces, soft emphasis. Token-set path `tokens.colors.accent-tint`. Approximation pending live re-inspection.
- **Pure White** (`#FFFFFF` / token-set `#ffffff`): Primary content + card surface; the operational canvas. Token-set path `tokens.colors.canvas`. Approximation pending live re-inspection.
- **Surface Soft** (`#F7F7F7` / token-set `#f7f7f7`): Grouped sections, page tint, POS background panels. Token-set path `tokens.colors.surface`. Approximation pending live re-inspection.
- **Surface Hover** (`#EFEFEF` / token-set `#efefef`): Hover/pressed neutral surface, table cells. Token-set path `tokens.colors.surface-hover`. Approximation pending live re-inspection.
- **Text Primary** (`#1F1F1F` / token-set `#1f1f1f`): Headings, primary labels, key figures. Token-set path `tokens.colors.foreground`. Approximation pending live re-inspection.
- **Text Secondary** (`#555555`): Body copy, descriptions. Token-set path `tokens.colors.body`. Approximation pending live re-inspection.
- **Text Muted** (`#888888`): Metadata, captions, helper text. Token-set path `tokens.colors.muted`. Approximation pending live re-inspection.
- **Text Disabled** (`#BCBCBC` / token-set `#bcbcbc`): Disabled labels, placeholders. Token-set path `tokens.colors.disabled`. Approximation pending live re-inspection.
- **Border Light** (`#E6E6E6` / token-set `#e6e6e6`): Row dividers, soft separators. Token-set path `tokens.colors.hairline`. Approximation pending live re-inspection.
- **Border Mid** (`#D4D4D4` / token-set `#d4d4d4`): Component borders (inputs, outlined buttons, cards). Token-set path `tokens.colors.border`. Approximation pending live re-inspection.
- **Success / Paid** (`#1FA463` / token-set `#1fa463`): Completed payment, success states, "open table cleared". Green = money settled. Token-set path `tokens.colors.success`. Approximation pending live re-inspection.
- **Warning / Pending** (`#F5A623` / token-set `#f5a623`): Pending order, kitchen-in-progress, attention states. Token-set path `tokens.colors.warning`. Approximation pending live re-inspection.
- **Error / Void** (`#E0353B` / token-set `#e0353b`): Errors, voids, failed payment, destructive actions. Token-set path `tokens.colors.error`. Approximation pending live re-inspection.
- **Info** (`#2B82E0` / token-set `#2b82e0`): Informational notices, neutral system messages. Token-set path `tokens.colors.info`. Approximation pending live re-inspection.

Accent (functional categorization), as the source states it: muted category colors for menu/table grouping — kept desaturated so the orange-red action color always wins attention. No hex is recorded for that grouping, so none is promoted.

### Spacing

Unitless token-set steps from `tokens.spacing`: `xs 4` · `sm 8` · `md 12` · `base 16` · `lg 24` · `xl 48` · `xxl 80`. The source restates an 8px-based spacing scale. Product UI uses generous touch spacing (≥44px targets); marketing uses comfortable section rhythm (48–80px). `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12`. `tokens.spacing.base: 16` is not the 16px button size. `tokens.spacing.lg: 24` is not button padding `12px 24px` as a spacing-step synonym. `tokens.spacing.xl: 48` and `tokens.spacing.xxl: 80` stay on this path. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 4` · `md: 8` · `lg: 12` · `full: 9999`.

- Status-badge radius (`4` / `4px`): Token-set key `tokens.rounded.sm`.
- Workhorse (`8` / `8px`): buttons, POS tile, inputs, order card. Token-set key `tokens.rounded.md`. The source calls `8px` the conservative workhorse.
- Feature-card upper step (`12` / `12px`): Token-set key `tokens.rounded.lg`. Source §4 writes Feature / Content Card radius as `8–12px`.
- Full (`9999`): Token-set key `tokens.rounded.full`.

`tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 12` is not `tokens.spacing.md: 12`. `tokens.rounded.full: 9999` stays the unitless full step. Keeping those paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification.

### Elevation

Token-set path `tokens.shadow`:

- **Card shadow** (`tokens.shadow.card`): `rgba(0,0,0,0.06) 0px 2px 8px` — the YAML writing. Source §6 also writes `0 2px 8px rgba(0,0,0,0.06)`. Both writings stay. Neither was chosen as a replacement.
- **Sticky header** (`tokens.shadow.header`): `rgba(0,0,0,0.06) 0px 1px 4px` — YAML. Source §6 also writes `0 1px 4px rgba(0,0,0,0.06)` on scroll.
- **Modal / dialog** (`tokens.shadow.modal`): `rgba(0,0,0,0.18) 0px 8px 32px` — YAML. Source §6 also writes `0 8px 32px rgba(0,0,0,0.18)`.

POS active tile: no shadow — selection shown by tint + orange-red border. Buttons are flat; orange-red color is the weight. Z-index, as the source states it: sticky nav above content; modals above chrome; toasts/alerts highest (a void or payment-error alert must always surface). The source reads iCHEF as leaning **flat-and-clean with soft functional shadows** — appropriate for a tool that must feel reliable, not flashy. That flat-and-clean / reliable-not-flashy reading, and keeping the YAML and §6 shadow writings on their own records rather than merging them, are derived editorial implementation inferences from the verified surfaces; they are not iCHEF-authored or a separately published UI specification.

### Motion

The source token-set is `prose-derived`. The source HTML comment assigns illustrative markers to product-UI labels, empty-state copy, type scale, secondary/status hexes, and the font stack, and assigns none of those markers to a live-computed motion harvest. The durations, easing roles, the omission of the three listed curves because they match the `spec/omd-v0.1.md` example table and are not traceable to iCHEF-computed samples, signature motions, spring stance, and reduced-motion rule below are therefore a derived editorial implementation inference from the verified surfaces; they are not iCHEF-authored or a separately published UI specification.

iCHEF motion is **minimal and operational** — feedback must be instant and unambiguous; nothing should delay or distract during service.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | POS tile selection, toggle flips, reduce-motion fallback |
| `motion-fast` | 120ms | Hover/press, tab switch, small reveals |
| `motion-standard` | 200ms | Dropdowns, panel slides, tooltip fades |
| `motion-slow` | 300ms | Modal open, settings drawers |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0, 0, 0.2, 1)`, `cubic-bezier(0.4, 0, 1, 1)`) match the `spec/omd-v0.1.md` example table and are not traceable to iCHEF-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-standard` | Default two-way transitions |
| `ease-enter` | Things appearing — modals, sheets |
| `ease-exit` | Dismissals |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

**Spring stance.** Spring/overshoot is **forbidden** in the product UI. A POS is a money-handling tool used at speed; bouncy motion delays feedback and undermines the trust the system must project. POS tile selection is **instant** (0ms) — the tap registers immediately, because any perceived lag during a rush is a usability failure. Marketing surfaces may use gentle scroll reveals, but never elastic motion.

**Signature motions.**

1. **POS tile tap.** Instant state change — tile gets the `#FDEDE7` tint + orange-red border with 0ms latency. The finger is the feedback; no animation may sit between tap and registration.
2. **Add-to-order.** New line slides into the order panel over `motion-fast / ease-enter`; the running total updates immediately (no count-up animation — the number must be true the instant it changes).
3. **Status transition.** A table/order transitioning to Paid cross-fades to green over `motion-standard` — quick and clear, never celebratory.
4. **Modal / settings drawer.** Slides in over `motion-slow / ease-enter`; dismisses with `ease-exit`. Standard, calm.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`; modal/drawer slides become instant opacity toggles. Operational feedback is unaffected (it was already instant). No exceptions.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The fetched ichefpos.com pages and `/about-ichef` describe the product and the company. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification. |
| Live computed surface-use | Live computed-style verification was not completed this pass. Token extraction is `prose-derived`. No per-element computed font-family harvest is recorded. |
| Official distributed asset | No iCHEF-exclusive downloadable font package was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification. |
| Declared-only / inferred | Source §3 titles the stack "locale-aware, inferred". Default / English: `-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. Traditional Chinese: `… "PingFang TC", "Microsoft JhengHei", sans-serif`. Simplified Chinese (regional): `… "PingFang SC", "Microsoft YaHei", sans-serif`. YAML `tokens.typography.family.sans` is `PingFang TC`; `tokens.typography.family.mono` is `SFMono-Regular`. Those inferred stack members are not a second brand face. Classing the inferred fallbacks as not a published iCHEF face is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification. |
| License | The source records no iCHEF-issued font-license notice for PingFang TC or Microsoft JhengHei. That upstream-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces the source did not fetch stays outside this reconstruction. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification. |

### Family

- **Token-set sans:** `PingFang TC`. Token-set path `tokens.typography.family.sans`.
- **Token-set mono:** `SFMono-Regular`. Token-set path `tokens.typography.family.mono`.
- **Source §3 Traditional Chinese stack:** `PingFang TC`, `Microsoft JhengHei`.
- Do not replace `PingFang TC` with a system substitute while labelling the substitute the brand face. A fallback member of the inferred stack is never presented as a published iCHEF face. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification.

The source says system stacks render natively on iPad (the primary product device) and across TW/SG/MY markets. That device-and-market sentence is the source's own.

### Type roles

Token-set roles keep the source's unitless line-height ratios. The inferred size-scale table keeps the source's ranges. `1.15` is not rewritten as a fixed px. `1.20` is not rewritten as a fixed px. Those two writings sit on those records. YAML `tokens.typography.pos-tile.size` `17` is not the inferred product range `16–18px`. YAML `tokens.typography.body.size` `15` is not the inferred body range `14–16px`. YAML `tokens.typography.hero.size` `34` is not the inferred hero range `28–40px`. Keeping the token-set rows on their own table and the inferred ranges on theirs, rather than choosing one as a replacement, is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| hero | PingFang TC | 34 | 700 | 1.15 | — | Marketing hero headline |
| heading | PingFang TC | 22 | 700 | 1.25 | — | Card / section headings |
| total | PingFang TC | 24 | 700 | 1.20 | — | Totals, table numbers (scannable) |
| pos-tile | PingFang TC | 17 | 600 | 1.30 | — | POS button / menu item, large tap text |
| body | PingFang TC | 15 | 400 | 1.50 | — | Body, descriptions |
| button | PingFang TC | 16 | 600 | 1.20 | — | Button labels |
| caption | PingFang TC | 12 | 400 | 1.40 | — | Caption, metadata |

Weights the source records: **700 (Bold)** — headlines, key figures (totals, table numbers), primary CTAs. **600 (Semibold)** — subheads, button labels, active tabs, menu-item names. **400 (Regular)** — body, descriptions, metadata.

Size scale (px, inferred), as the source titles it — a separate record from the token-set table:

| Use | Surface | Size |
|---|---|---|
| Caption / meta | both | `12–13px` |
| Body | both | `14–16px` |
| POS button / menu item | product | `16–18px` (large tap text) |
| Total / table number | product | `20–28px` (bold, scannable) |
| Card / section heading | marketing | `20–24px` |
| Hero headline | marketing | `28–40px` |

Conventions the source states:

- **Product UI uses larger text** than typical SaaS — it must be readable at arm's length on a counter iPad mid-service.
- **Numbers are prominent and bold** — totals, table numbers, quantities are the operational truth.
- **Weight + color drive hierarchy**; orange-red reserved for action, neutrals for everything else.
- **Traditional Chinese first** on TW surfaces; never Simplified.

The four convention titles, and the "larger than typical SaaS" / "operational truth" readings, are a derived editorial implementation inference from the verified surfaces; they are not iCHEF-authored or a separately published UI specification. The sizes, weights, and ratios are recorded.

### Assets

- Logo treatment the source frontmatter records: `logo.type: favicon` and `logo.slug` `https://www.google.com/s2/favicons?domain=ichefpos.com&sz=128`. That slug is an identity pointer through a third-party favicon service, not an iCHEF-hosted brand file URL.
- Marketing photography is real-operator / restaurant photography; do not replace it with invented brand-color decoration or abstract enterprise stock.
- Product screenshots are shown in device frames (iPad) to reinforce the hardware heritage, as the source states it.
- Operator/restaurant photography uses `object-fit: cover`, consistent aspect ratios.

Reading the favicon-service URL as an identity pointer rather than a hosted brand file, and reading operator photography as first-party content that must not be replaced with invented decoration, is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `card`, `input`, `badge`) and a value set; those types are preserved per component and are attached only to the YAML row that carries them. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, a tile that only selects, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided.

The source records a generic `Focus` border on the form field (`border #E8552D`). Generic focus is not treated as a `focus-visible` treatment. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not iCHEF-authored or a separately published UI specification. This is not a complete state-coverage claim.

The source token-set is `prose-derived`. Hexes other than `#E8552D` remain approximations pending live re-inspection. That bound travels with every component value below. Carrying the approximation class onto every component value below is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification.

### Primary CTA / POS action

- Role: primary marketing CTA and key POS action (charge / confirm)
- Primitive type: `button` · Kind: interactive
- Background: `#E8552D`
- Text: `#FFFFFF`
- Border: none
- Radius: `8px`
- Padding: `12px 24px`
- Font: `16px` / `600`
- Hover: bg `#D14A26`
- Token-set font record: `16px / 600`
- Token-set use: `Primary CTA / key POS action`
- Token-set path: `tokens.components.button-primary` (`type: button`, `bg: #e8552d`, `fg: #ffffff`, `radius: 8px`, `padding: 12px 24px`, `font: 16px / 600`, `hover: bg #d14a26`)
- Published labels: `專人到店免費體驗` / `Free in-store demo`
- Use: "Free in-store demo", primary site CTAs, key POS actions (charge / confirm)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; source records hover bg `#D14A26` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Source §14 fades fill and sets `#BCBCBC` text, geometry preserved |
| loading | applicable | The source names charge / confirm as a key POS action; the surface state contract records an in-button spinner that holds width and prevents double-charge |
| error | applicable | The control can commit a charge; the surface state contract records a payment-failed alert at system level. Visual treatment at this control is omitted |
| success | applicable | The control can commit a charge; the surface state contract records payment-settled confirmation at system level. Visual treatment at this control is omitted |

### Secondary (Outlined)

- Role: destination control for secondary actions
- Primitive type: `button` · Kind: interactive
- Background: `#FFFFFF`
- Text: `#1F1F1F`
- Border: `1px solid #D4D4D4`
- Radius: `8px`
- Padding: `12px 24px`
- Font: `16px` / `600`
- Hover: bg `#F7F7F7`
- Token-set font record: `16px / 600`
- Token-set use: `Secondary actions`
- Token-set path: `tokens.components.button-secondary` (`type: button`, `bg: #ffffff`, `fg: #1f1f1f`, `border: 1px solid #d4d4d4`, `radius: 8px`, `padding: 12px 24px`, `font: 16px / 600`, `hover: bg #f7f7f7`)
- Published label: `Learn more`
- Use: "Learn more", secondary actions

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; source records hover bg `#F7F7F7` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens `Learn more`; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching a secondary destination is not an operation this button reports as success |

### POS Tile (menu item)

- Role: tappable menu-item grid cell on the order screen
- Primitive type: `card` · Kind: interactive
- Background: `#FFFFFF` (or muted category tint), selected = `#FDEDE7` + `1px solid #E8552D`
- Text: `#1F1F1F`
- Radius: `8px`
- Padding: `12px`
- Font: `16px` / `600`
- Token-set font record: `16px / 600`
- Token-set use: `Tappable menu-item grid in order screen`
- Token-set path: `tokens.components.pos-tile` (`type: card`, `bg: #ffffff`, `fg: #1f1f1f`, `radius: 8px`, `padding: 12px`, `font: 16px / 600`, `active: bg #fdede7, 1px solid #e8552d`)
- Source §9 unique values kept on this record: item name `16px` / `600` `#1F1F1F`; price `14px` / `400` `#888888`; ≥44px tall
- Use: Tappable menu-item grid in the order screen — big target, clear selected state

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tile; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tile; visual treatment omitted |
| disabled | applicable | A menu item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This tile selects a menu item instantly (0ms); it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Selection tile; it does not report a failed commit |
| success | not-applicable | Same role reason: the selected tint is the selection signal, not a success result on this tile |

### Form field

- Role: form, menu-editing, and settings field
- Primitive type: `input` · Kind: interactive
- Background: `#FFFFFF`
- Text: `#1F1F1F`
- Border: `1px solid #D4D4D4`
- Radius: `8px`
- Padding: `12px 14px`
- Font: `16px` / `400`
- Focus: border `#E8552D` — generic focus, not a `focus-visible` treatment
- Error: border `#E0353B`
- Token-set font record: `16px / 400`
- Token-set use: `Forms, menu editing, settings`
- Token-set path: `tokens.components.input` (`type: input`, `bg: #ffffff`, `fg: #1f1f1f`, `border: 1px solid #d4d4d4`, `radius: 8px`, `padding: 12px 14px`, `font: 16px / 400`, `focus: border #e8552d`, `states: error border #e0353b`)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field accepts a value; it does not commit a fetch whose in-progress state it reports on itself |
| error | applicable | Source records error border `#E0353B`; the surface state contract records helper text below in `#E0353B` 12px |
| success | not-applicable | Form-save confirmation is a system-level line, not a success result on this field |

### Feature / Content Card

- Role: feature explainer, plan card, case-study tile
- Primitive type: `card`
- Background: `#FFFFFF`
- Border: `1px solid #E6E6E6` or shadow-separated
- Radius: `8–12px`
- Padding: `24px`
- Token-set use: `Feature explainers, plan cards`
- Token-set path: `tokens.components.card-feature` (`type: card`, `bg: #ffffff`, `border: 1px solid #e6e6e6`, `radius: 8px`, `padding: 24px`)
- Source §9 unique values kept on this record: real-restaurant photo top; headline `20px` / `700` `#1F1F1F`; body `14px` / `400` `#555555`; concrete ROI stat in `#E8552D`; example prompt radius `12px`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Order / Table Card

- Role: open-table list and order tickets
- Primitive type: `card`
- Background: `#FFFFFF`, status-tinted left border
- Radius: `8px`
- Padding: `12px`
- Token-set use: `Open-table / order tickets with status-tinted left border`
- Token-set path: `tokens.components.card-order` (`type: card`, `bg: #ffffff`, `radius: 8px`, `padding: 12px`)
- Source §9 unique values kept on this record: status-tinted left border (green `#1FA463` paid / amber `#F5A623` pending); table number `20px` / `700`; item count + total bold; status badge top-right

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Status Badge

- Role: order/payment status label
- Primitive type: `badge`
- Kind: non-interactive — a status label, not a commit control
- Paid: `#1FA463` bg / white
- Pending: `#F5A623` bg / `#1F1F1F`
- Void: `#E0353B` bg / white
- Radius: `4px`
- Padding: `2px 8px`
- Font: `12px` / `600`
- Token-set font record: `12px / 600`
- Token-set use: `Order/payment status`
- Token-set path: `tokens.components.badge-status` (`type: badge`, `bg: #1fa463`, `fg: #ffffff`, `radius: 4px`, `padding: 2px 8px`, `font: 12px / 600`, `states: pending #f5a623, void #e0353b`)

### Numeric / quantity stepper

- Role: quantity entry in the order flow
- Primitive type: not in the token set · Kind: interactive
- Background: `#FFFFFF`
- Border: `1px solid #D4D4D4`
- Radius: `8px`
- Buttons: large +/- tap targets
- Use: Quantity entry in the order flow — finger-friendly

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web stepper; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A stepper whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control adjusts a quantity; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Quantity stepper; it does not report a failed commit |
| success | not-applicable | Same role reason: changing a quantity is not a success result on this control |

### Marketing header nav

- Role: marketing sticky-header destinations
- Primitive type: not in the token set · Kind: interactive
- Anatomy the source records: white sticky header, logo left, product/pricing/story nav, orange-red "Demo" CTA right
- Published label on the right-hand CTA: `Demo` (the filled treatment is Primary CTA / POS action)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item sends the reader to product, pricing, or story; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination item; the destination, not this item, reports failure |
| success | not-applicable | Same role reason: reaching product, pricing, or story is not an operation this item reports as success |

### Product nav (Order / Tables / Menu / Reports / Settings)

- Role: iPad-optimized side/bottom destinations on the described product UI
- Primitive type: not in the token set · Kind: interactive
- Anatomy the source records: large icons labeled Order / Tables / Menu / Reports / Settings

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item opens Order, Tables, Menu, Reports, or Settings; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination item; the destination, not this item, reports failure |
| success | not-applicable | Same role reason: reaching Order, Tables, Menu, Reports, or Settings is not an operation with a success result |

### Tables

Restaurant reporting / sales data uses clean tables: `#E6E6E6` row dividers, bold totals row, right-aligned currency. Zebra striping optional via `#F7F7F7`. This §4 record is not in the token set. The source supplies no interaction evidence for the table as a control, so kind and a state-applicability map are both withheld.

### State record

The source's state contract, preserved with its values and copy. The source token-set is `prose-derived`, and the source HTML comment assigns no live-computed harvest to this section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not iCHEF-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no menu items)** | One `#888888` line + primary CTA (`#E8552D`) to add the first menu item. Encouraging, practical. |
| **Empty (no open tables)** | Calm `#888888` prompt + "Open table" action. The default resting state of a quiet floor. |
| **Loading (reports / sync)** | Skeleton blocks at `#F7F7F7`, 8px radius; numeric cells as gray bars. No spinner takeover; existing data stays visible during refresh. |
| **Loading (inline — charge)** | Charge button holds width, in-button spinner; prevents double-charge. Critical: never allow a second tap to double-bill. |
| **Error (form field)** | Border `1px solid #E0353B`, helper text below in `#E0353B` 12px, field-specific and blameless. |
| **Error (payment failed)** | Immediate prominent alert (not a quiet toast) — `#E0353B` accent, plain sentence on what failed + retry. A failed payment must always surface. |
| **Error (offline / sync)** | Persistent banner: iCHEF keeps working locally; banner reassures that orders are saved and will sync. Never block service on connectivity. |
| **Success (payment settled)** | Status flips to green (`#1FA463`) Paid; quiet confirmation. The green status badge IS the signal — no celebratory animation mid-service. |
| **Success (form save)** | Brief confirmation line + return to flow. |
| **Skeleton** | `#F7F7F7` blocks at exact dimensions; currency placeholders render as `—`, never `$0`. |
| **Disabled (button)** | Faded fill, `#BCBCBC` text, geometry preserved so re-enabled controls don't shift. |

These rows describe POS and marketing treatments the source wrote at system level. They are not attached as visual treatments to the destination controls above. That non-attachment reading is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Structure

- **Marketing**: centered max-width (~1200px), alternating white / `#F7F7F7` sections, real-operator photography, social-proof grids
- **Product (iPad)**: fixed operational layout — persistent nav + order area + item grid + running total; built for one-handed, fast use during service

### Density

- **Marketing: medium density** — comfortable, photography-led, reassuring
- **Product: purposeful density** — packed enough to show a full menu grid + order, but with large tap targets so nothing is mis-tapped mid-rush

Reading the marketing surface as photography-led and the product surface as a fixed operational layout, and reading density as medium versus purposeful rather than as a single house density, are derived editorial implementation inferences from the verified surfaces; they are not iCHEF-authored or a separately published UI specification.

Responsive behavior. The source token-set is `prose-derived`; the breakpoints, collapsing strategy, touch targets, and image behavior are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not iCHEF-authored or a separately published UI specification.

| Width | Behavior |
|---|---|
| Desktop `>1200px` | Marketing: full nav, multi-column feature/plan grids, centered container |
| Laptop `1024–1200px` | 2–3 column grids, condensed nav |
| Tablet / iPad `768–1024px` | Product's native zone — fixed POS layout; marketing collapses to 1–2 columns |
| Mobile `<768px` | Marketing: single column, hamburger nav, full-width orange-red CTA; product is iPad-first (phone is companion/owner-dashboard) |

Touch & mobile, as the source states it:

- Product UI is iPad-optimized: large tiles, persistent running total, thumb-reachable charge action
- Marketing mobile uses full-width CTAs and stacked social-proof cards
- Owner dashboard (reports) is mobile-friendly for off-site monitoring

Image behavior, as the source states it: operator/restaurant photography `object-fit: cover`, consistent aspect ratios; product screenshots shown in device frames (iPad) to reinforce the hardware heritage.

Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 24 / 48 / 80. Shape restated from `tokens.rounded`: sm 4 · md 8 · lg 12 · `full: 9999`.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes iCHEF as speaking like a co-founder who used to run a restaurant — practical, encouraging, and on the operator's side, never condescending or jargon-heavy. The register is **partner-to-owner**: it talks about the realities of running a restaurant (orders, margins, accounting, staff workflow) in plain language, and frames technology as a means to a better business, not an end in itself. The brand's own line, "We build the best restaurant POS in the world, and keep making it better," and its mission framing — "technology should help, not handicap, entrepreneurship" — capture the tone: confident, humble about the craft, and squarely focused on the owner's success. Traditional Chinese is the first-class TW voice; English serves international markets (SG/MY). The marketing voice is warm and concrete (real owners, real numbers); the product voice is terse and operational (clarity above all when someone is mid-service). That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not iCHEF-authored or a separately published UI specification. The verified lines themselves are fetched marketing copy.

| Context | Tone |
|---|---|
| Hero / marketing | Confident + owner-focused. `科技用得更好，餐廳業績更好` (better tech use, better restaurant performance). Benefit-led. |
| CTAs | Concrete + inviting. `專人到店免費體驗` (free in-store demo), `Learn more`. Low-pressure. |
| Product UI labels | Terse, operational. `結帳` (checkout), `開桌` (open table), `作廢` (void). Action verbs, no fluff. |
| ROI / value copy | Specific and evidenced — more orders, higher per-customer spend, accurate accounting. Numbers over adjectives. |
| Empty states | Practical next step (add your first menu item / open your first table). Encouraging. |
| Errors (operational) | Clear and immediate — what happened, what to do. No blame on the operator mid-rush. |
| Success (payment / settle) | Quiet confirmation; the green status is the signal. No celebration mid-service. |
| Support / onboarding | Patient, hand-holding — many users are not tech-natives. |

**Voice samples.**

- `科技用得更好，餐廳業績更好` — homepage value proposition (better technology use → better restaurant performance) — source-verified: ichefpos.com tagline via WebFetch 2026-05-19
- `We build the best restaurant POS in the world, and keep making it better.` — brand line — source-verified: ichefpos.com/about-ichef via WebFetch 2026-05-19
- `專人到店免費體驗` — primary demo CTA (free in-store demonstration) — source-verified: ichefpos.com CTA via WebFetch 2026-05-19
- `開桌` / `結帳` / `作廢` — source-marked illustrative product-UI action labels (open table / checkout / void); conventional POS verbs; not live-DOM-verified this pass
- `先新增一個菜單品項，就能開始接單。` — source-marked illustrative empty-state copy (add a menu item to start taking orders); not verified as live iCHEF copy

**Forbidden phrases.** Tech jargon that talks down to operators (`leverage our synergistic platform`), `Oops!` on a money-handling error, vague hype (`revolutionary POS`) without a concrete operator benefit, abstract enterprise-speak, Simplified-Chinese characters on TW surfaces, anything that blames the user during a live-service error, exclamation-heavy marketing on the product UI.

Published strings the source records, kept byte-exact:

- 科技用得更好，餐廳業績更好
- We build the best restaurant POS in the world, and keep making it better.
- 專人到店免費體驗
- Free in-store demo
- Learn more
- technology should help, not handicap, entrepreneurship
- turn enterprise-level technologies into something affordable and understandable for small restaurants
- iF Gold Award
- German Design Award
- Red Dot
- Mazendo
- Sean Hsu
- iCHEF

Reproduce those strings byte-exact rather than translating or re-casing them. An English gloss may sit beside a non-English line; it never replaces the line. That byte-exact / gloss-beside rule, and reading the verified lines as fetched marketing copy rather than a complete product-microcopy guide, are derived editorial implementation inferences from the verified surfaces; they are not iCHEF-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records production hexes beyond primary as not live-verified this pass (browser unreliable) — flagged for UPDATE. Naming the list from the source's own unresolved fields, rather than adding surfaces the source did not name, is a derived editorial implementation inference from the verified surfaces; it is not iCHEF-authored or a separately published UI specification.

- **Production hexes other than `#E8552D`.** Brief-provided primary is kept. Other hexes remain well-grounded approximations pending live re-inspection.
- **Live computed-style harvest.** WebFetch returned marketing copy; the inspection browser session redirected unreliably.
- **Inferred font stack and inferred size-scale ranges.** Token-set exact sizes and the inferred ranges are both kept. Neither was chosen as a replacement.
- **Illustrative product-UI labels and empty-state copy.** `開桌` / `結帳` / `作廢` and `先新增一個菜單品項，就能開始接單。` stay marked illustrative. They are not promoted as live-DOM-verified copy.
- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they match the `spec/omd-v0.1.md` example table and are not traceable to iCHEF-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Hover and focus-visible treatments** beyond the recorded primary/secondary hover fills and the generic input focus border. Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
