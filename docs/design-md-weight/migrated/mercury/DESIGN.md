# Mercury Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Mercury is banking built for startups. Catalog homepage identity is `https://mercury.com`.

Treating the two source-named surface registers — dark editorial marketing canvases, and the light product dashboard where money, balances, and tables live — as the coverage of this contract, and treating a marketing-canvas value as not a proxy for the product dashboard and a product-dashboard value as not a proxy for marketing, is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification.

Treating the following three named sources as separate evidence domains, not merging a third-party token export into a Mercury-authored specification, and keeping the HTML-comment class split (verified core stated as the comment states it; component, motion, and state values as source-stated reconstructions, not live-computed promotions), is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. Source §4 names `https://mercury.com` as a live production site, verified via live DOM getComputedStyle. The source HTML comment names a third-party token export at `shadcn.io/design/mercury` (Mercury Design System token export) plus corroborating brand summaries at `brandfetch.com/mercury.com` and `blakecrosley.com/guides/design/mercury`, verified 2026-06-06 via WebSearch + WebFetch. YAML records the machine-readable token block as drawn from the document's own prose (extracted 2026-06-09), not as a separate live capture. Those three accounts are not resolved into one. Values below stay attached to the role name the source gives them.

The HTML comment lists this verified core: primary indigo `#5266eb`, accents periwinkle `#9cb4e8` / mist `#cdddff`, dark canvas `#171721`, off-white ink `#ededf3`, custom Arcadia 480 weight, 1.625 body line-height, 4px base radius, 40px hero pill. It also states that interpretive claims (for example, "indigo chosen as a considered middle between institutional navy and consumer blue") are editorial readings of the design, not documented Mercury statements, and that some token values for components, motion, and states are reasoned extrapolations consistent with the verified core tokens where Mercury does not publish a formal public spec. That class split is kept: the verified core is stated as the comment states it; component, motion, and state values below remain source-stated reconstructions under that limiter, not live-computed promotions.

Brand narrative facts — founded in 2017 by Immad Akhund, Max Tang, and Jason Zhang; launched publicly in 2019; a full financial stack for startups (business checking and savings, treasury, corporate cards, bill pay, invoicing, and venture debt); serving tens of thousands of companies — are widely documented public information in the source HTML comment. Treating those founding and stack facts as narrative context, not interface tokens, is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification.

The following atmosphere and causal readings — quiet confidence of software made by people who care about craft; refusing the cold institutional navy of legacy banks and the candy-bright gradients of consumer neobanks at once; a refined, almost cinematic middle ground; soft off-white ink that reads as luminous rather than glaring; a single disciplined indigo reserved for the one action that matters on each screen; editorial and spacious; marketing surfaces leaning into dark, near-black backgrounds washed with subtle periwinkle-to-mist gradients, giving product mockups a sense of depth and lift without ever shouting; the product dashboard inverting to a clean light surface where money, balances, and tables live in calm, high-legibility neutrals; light/dark duality as the core tension Mercury orchestrates; Arcadia as a contemporary grotesque with a custom 480 weight calibrated to feel authoritative without heaviness; Display sizes carrying a positive 0.42px letter-spacing that makes large headlines feel composed and intentional; the overall effect of restraint and taste; and the §11 reading that the founding thesis shows up in the design, with indigo `#5266eb` deliberately not the institutional navy of legacy banks nor the playful blue of consumer apps, sitting in a considered middle, modern and software-native — are a derived editorial implementation inference from the reviewed material; they are not Mercury-authored or a separately published UI specification. The measured parts inside them are the hex values, the 480 weight, the +0.42px tracking, and the two canvases, each recorded in its own section below.

Source §1, kept in original wording under the limiter above: Mercury is banking built for startups, and its interface carries the quiet confidence of software made by people who care about craft. The brand refuses the two dominant fintech clichés at once: it is neither the cold institutional navy of legacy banks nor the candy-bright gradients of consumer neobanks. Instead, Mercury occupies a refined, almost cinematic middle ground — deep indigo-black canvases (`#171721`), soft off-white ink (`#ededf3`) that reads as luminous rather than glaring, and a single disciplined indigo (`#5266eb`) reserved for the one action that matters on each screen. This light/dark duality — dramatic marketing canvas, serene product canvas — is the core tension Mercury orchestrates. Proprietary **Arcadia** and **Arcadia Display** typefaces are the brand's signature. Tight 4px base radius (the workhorse), with 12px and 40px as secondary radii. Generous 1.625 body line-height. Refined periwinkle→mist gradient washes (`#9cb4e8` → `#cdddff`) behind product imagery.

Source §11, kept in original wording under the same limiter: The founding premise is a rejection: legacy business banking was built for an analog era — branch visits, faxed forms, opaque fees, interfaces that looked like they hadn't changed since the 1990s. Mercury's thesis is that the company building your bank account should have the same taste, speed, and respect for craft as the best software you use every day. That thesis shows up in the design. Where incumbent business banks signal trust through heavy, conservative navy and dense legalese, Mercury signals trust through restraint and refinement — a single disciplined indigo, a proprietary typeface, generous whitespace, and cinematic dark canvases that make the product feel like a premium object. The indigo `#5266eb` is deliberately not the institutional navy of legacy banks nor the playful blue of consumer apps; it sits in a considered middle, modern and software-native. The design's job across all of it is the same: make managing company money feel calm, fast, and well-made. The marketing surface is theatrical and editorial; the product surface is serene and dense. The brand lives in that contrast. What Mercury refuses: the institutional coldness of legacy business banking, the gamified brightness of consumer fintech, and the jargon-heavy condescension that assumes founders need hand-holding. It occupies a narrow, confident lane — refined, intelligent, and built by people who clearly sweat the details.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Treating the following three source-stated product jobs as Primary tasks, and not lifting tasks from source §13 fictional archetypes, is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification.

- Open a business account from the single primary action (`Open Account`, `Apply now`).
- Review balances and tables on the product dashboard.
- Run the startup financial stack the source names: business checking and savings, treasury, corporate cards, bill pay, invoicing, and venture debt.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 names fictional archetypes informed by publicly described startup-customer segments, not individual people. Restricting Audience so those archetypes are not Audience and are not primary tasks, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. Official material discusses founders and operators of startups at a group level, without detailed fictional biographies.

### Distinctive traits

These 7 items are a derived editorial implementation inference from the reviewed material; they are not Mercury-authored or a separately published UI specification. The measured parts inside them are recorded again in Foundations, Typography, and Components.

- Indigo `#5266eb` as the sole primary action color — one filled CTA per section, never decorative
- Proprietary Arcadia / Arcadia Display type with a custom 480 weight (between 400 and 500)
- Dark editorial marketing canvas (`#171721`) inverting to a light product canvas (`#fbfcfd`)
- Soft off-white ink (`#ededf3`) instead of pure white — reduces eye strain on dark surfaces
- Tight 4px base radius (the workhorse), with 12px and 40px as secondary radii
- Refined periwinkle→mist gradient washes (`#9cb4e8` → `#cdddff`) behind product imagery
- Generous 1.625 body line-height and deliberate letter-spacing on display type

### Principles

These 8 items are a derived editorial implementation inference from the reviewed material; they are not Mercury-authored or a separately published UI specification.

1. **One action per surface.** Each marketing band and key product view has a single filled indigo CTA. Two primary actions means two surfaces. Secondary actions go ghost or outline.
2. **Indigo is action, never decoration.** `#5266eb` appears only where the user acts — CTAs, links, focus, active states. Decoration is handled by neutral surfaces and periwinkle/mist washes.
3. **Off-white over pure white.** Text on dark is `#ededf3`; this softness is a deliberate craft choice that signals care and reduces strain.
4. **Restraint is the brand.** A tight 4px radius, a narrow cool neutral ramp, a single accent hue, one typeface family. Every removed element makes the product feel more considered.
5. **Theatrical marketing, serene product.** Dramatic dark canvases and floating mockups sell; calm light dashboards serve. The two postures are intentional and never bleed into each other.
6. **Numbers are typography.** Balances and amounts use tabular Arcadia figures with the same care as headlines — columns align, figures never inherit casual body styling.
7. **Respect the founder.** Copy and UI assume an intelligent, busy operator. No hype, no condescension, no cute mascots — just speed and clarity.
8. **Whitespace is a premium signal.** On marketing surfaces, generous negative space communicates confidence and quality more than any ornament could.

### Recorded application rules

These 8 rules copy source §7 Do's. They are a derived editorial implementation inference from the reviewed material; they are not Mercury-authored or a separately published UI specification. The values inside them are recorded values and are stated again in their own sections.

- Use indigo `#5266eb` for the single primary action per section — links, focus rings, the one CTA
- Use the custom 480 weight for headings and key labels
- Use `#ededf3` (off-white), never pure white, for text on dark canvases
- Keep base radius at 4px for buttons, inputs, and badges
- Reserve the 40px pill radius for the hero email-capture / "Open Account" CTA
- Apply +0.42px letter-spacing on large Arcadia Display headlines
- Use cool, indigo-tinted shadows (`rgba(23,23,33,...)`) on light surfaces
- Let marketing breathe — one idea, one visual, one CTA per band

### Avoid

These 7 items copy source §7 Don'ts. They are a derived editorial implementation inference from the reviewed material; they are not Mercury-authored or a separately published UI specification.

- Don't put accent periwinkle/mist on buttons — they belong in gradient washes and imagery only
- Don't use more than one filled CTA per section
- Don't use pure white text on dark canvases — use `#ededf3`
- Don't use warm greys — every neutral carries a faint blue undertone
- Don't over-round — 4px is the brand's tight, software-like default
- Don't use a saturated fire-red for errors — Mercury's error is rose `#d03275`
- Don't crowd marketing surfaces — density is for the dashboard, not the homepage

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Treating YAML color keys and body role names that share a hex as unmerged roles, not as one paint, is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. YAML `surface` `#ededf3` is not merged with body **Ink Default** `#ededf3`. YAML `canvas-elevated` `#1e1e2a` is not merged with body **Ink Emphasized** `#1e1e2a`. YAML `ink-subdued` `#c3c3cc` is not merged with body **Hairline Subdued** `#c3c3cc`. YAML `primary-active` `#3442a6` is not merged with the unresolved success note that mentions a `#3442a6` family. YAML `on-primary` `#ffffff` is not merged with YAML `card.bg` `#ffffff`, YAML `dialog.bg` `#ffffff`, body Product Card `#ffffff`, body Centered Modal `#ffffff`, body toggle thumb `#ffffff`, or body Top Nav link hover `#ffffff`. Component fields such as button-primary `fg` `#ffffff` stay on those controls.

**Primary**

- **Indigo** (`#5266eb`): YAML `primary`. Catalog `primary_color`. Primary brand and action color. CTA fills ("Open Account"), links, active states, focus rings. One filled CTA per band — never used decoratively.
- **Indigo Hover** (`#4354c8`): YAML `primary-hover`. Hover state for primary fills.
- **Indigo Active** (`#3442a6`): YAML `primary-active`. Pressed/active state for primary fills. Not a success token.
- **Periwinkle** (`#9cb4e8`): YAML `periwinkle`. Accent — gradient washes, product-mockup highlights, illustrative tints. Kept off buttons.
- **Mist** (`#cdddff`): YAML `mist`. Lightest accent — gradient terminus, soft surface tints behind imagery.

**Surface**

- **Canvas** (`#171721`): YAML `canvas`. Indigo-black. Default dark marketing canvas — hero sections, footers, immersive bands.
- **Canvas Elevated** (`#1e1e2a`): YAML `canvas-elevated`. Raised dark surface — cards and panels floating on the dark canvas.
- **Canvas Light** (`#fbfcfd`): YAML `canvas-light`. Near-white product canvas — the dashboard background.
- **Surface Default** (`#ededf3`): YAML `surface`. Primary light surface — card fills on light, panel backgrounds.
- **Surface Secondary** (`#f4f5f9`): YAML `surface-secondary`. Secondary light fill — table zebra rows, nested panels.
- **Surface Hover** (`#dddde5`): YAML `surface-hover`. Hover fill for light interactive rows and list items.

**Text (Ink)**

- **Ink Default** (`#ededf3`): Soft off-white. Primary text on dark canvases. Deliberately not pure white. Same hex as YAML `surface`; this is the on-dark text role.
- **Ink Emphasized** (`#1e1e2a`): Near-black. Primary heading/text on light product surfaces. Same hex as YAML `canvas-elevated`; this is the on-light text role.
- **Ink Subdued** (`#c3c3cc`): YAML `ink-subdued`. Secondary/caption text, metadata, muted labels.
- **Ink Disabled** (`#70707d`): YAML `ink-disabled`. Disabled labels, placeholder text.
- **On Primary** (`#ffffff`): YAML `on-primary`. Pure white — text/icon on top of indigo fills only.

**Semantic**

- **Error** (`#d03275`): YAML `error`. Magenta-rose. Error states, destructive confirmation, negative validation. The reading that Mercury uses a rose rather than a fire-red — softer, more on-brand — is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. The hex is recorded.
- **Success:** source writes `#3442a6` family / contextual green in product. Treating “positive financial indicators in the dashboard render in calm tones” and “success is communicated through state and copy more than saturated green” as the source’s own reconstruction note, not a Mercury-authored success token, is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. No single success hex is promoted. `#3442a6` remains Indigo Active.

**Borders**

- **Hairline** (`#272735`): YAML `hairline`. Dark-canvas dividers and 1px borders on `#171721`.
- **Hairline Subdued** (`#c3c3cc`): Light-surface dividers, table rules, input borders on light. Same hex as YAML `ink-subdued`; this is the light-divider role.

**Neutral notes.** The following narrow-cool-ramp reading is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. Mercury's neutral ramp is intentionally narrow and slightly cool. The dark end clusters around `#171721` / `#1e1e2a` / `#272735`; the mid greys are `#70707d` / `#c3c3cc`; the light end is `#dddde5` / `#ededf3` / `#f4f5f9` / `#fbfcfd`. There is no warm grey in the system — everything carries a faint blue undertone consistent with the indigo brand.

### Spacing

YAML scale (numbers as recorded, no px suffix added): xs 4, sm 8, md 12, base 16, lg 18, xl 24, xxl 28, section 48.

Body layout names a base unit of 8px and common values 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px. Marketing bands use generous vertical rhythm — 96px+ between sections (source §9: 96px band rhythm). Product/dashboard uses tighter 16-24px panel gaps (source §9: 16-24px gaps).

Treating YAML spacing steps `lg` 18 and `xxl` 28 as unmerged from the body common-value list, and treating body 32px, 64px, and 96px as unmerged from the YAML scale, is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. Both writings are carried.

### Shape

YAML `rounded`: sm 4, md 4, lg 12, full 9999.

Body border-radius scale:

- Tight (4px): The workhorse — buttons, inputs, badges, most surfaces
- Comfortable (12px): Cards, modals, toasts
- Pill (40px): Email-capture / hero CTA pill, the deliberate exception
- Circle (9999px): Toggles, avatars

Treating YAML `email-pill.radius` 9999 as unmerged from the body 40px pill, treating YAML `rounded.full` 9999 as unmerged from that 40px pill, and treating 4px as the named workhorse on buttons, inputs, and badges rather than a universal radius for every unlisted control, is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. Both writings are carried.

### Elevation

YAML `tokens.shadow`:

- card: `0px 1px 2px rgba(23,23,33,0.06)`
- elevated: `0px 8px 32px rgba(0,0,0,0.4)`
- dialog: `0px 16px 48px rgba(23,23,33,0.24)`

Body §6 table (not merged with the YAML three):

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow | Page background, inline elements, list rows |
| Subtle (1) | `0px 1px 2px rgba(23,23,33,0.06)` | Light product cards, slight lift |
| Standard (2) | `0px 4px 16px rgba(23,23,33,0.10)` | Dropdowns, popovers on light |
| Elevated (3) | `0px 8px 32px rgba(0,0,0,0.4)` | Dark-canvas floating product mockups |
| Modal (4) | `0px 16px 48px rgba(23,23,33,0.24)` | Dialogs, modals |

Treating YAML `tokens.shadow` three keys, the body five-level elevation table, and toast-local `0px 8px 24px rgba(0,0,0,0.3)` as unmerged writings is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. Body toast shadow `0px 8px 24px rgba(0,0,0,0.3)` is a toast-local field, not YAML `elevated` and not Standard (2).

The following shadow-philosophy reading is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. On light product surfaces, Mercury keeps shadows whisper-soft and cool-tinted (indigo-black `rgba(23,23,33,...)` rather than pure black). On the dark marketing canvas, depth is dramatic — large, diffuse `rgba(0,0,0,0.4)` shadows make product cards appear to float, reinforcing the cinematic feel. Depth is theatrical in marketing, restrained in product.

**Gradient & light** (source §6). Treating “focuses attention toward centered content” and “used sparingly” as the source’s own reconstruction note is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. Periwinkle→mist gradient washes (`#9cb4e8` → `#cdddff`) sit behind hero product imagery as soft radial or linear glows. Subtle vignetting on the dark canvas focuses attention toward centered content. Glass/blur is used sparingly on sticky nav over imagery.

### Motion

Source-stated duration roles. Treating the duration table, easing names, signature motions, and reduced-motion line as source-stated rather than computed CSS, and treating the source HTML-comment class (reasoned extrapolations consistent with the verified core tokens) as the evidence class for component/motion/state values, is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox changes |
| `motion-fast` | 150ms | Hover, focus rings, button press, small reveals |
| `motion-standard` | 240ms | Default — dropdowns, popovers, tab content, card expand |
| `motion-slow` | 360ms | Emphasized transitions — modals, success confirmations |
| `motion-page` | 320ms | Route/view transitions |

Source-stated easing names. Template-matching cubic-bezier values are omitted (T1-3: unsourced spec-template curves). Unique source-stated curves are recorded with the extrapolation limiter, not as live-computed tokens:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Things appearing — modals, sheets, toasts (soft, refined deceleration). Source-stated; reasoned extrapolation, not a computed observation |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Things leaving — dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-standard` example) | Two-way transitions — tabs, collapsibles |
| `ease-glide` | `cubic-bezier(0.22, 0.61, 0.36, 1)` | Marketing parallax and gradient-glow drifts. Source-stated; reasoned extrapolation, not a computed observation |

The readings attached to those motions — soft, refined deceleration; cinematic float; leaving feels lighter than arriving; money never bounces or springs, it resolves calmly — are a derived editorial implementation inference from the reviewed material; they are not Mercury-authored or a separately published motion specification. The duration values, the two kept curves, and the signature recipes below are recorded values.

**Signature motions** (source §15):

1. **Floating product mockups.** On scroll into a marketing band, product cards rise ~24px and fade in with `motion-slow / ease-enter`, their drop-shadow deepening to reinforce the cinematic float. The gradient glow behind them drifts slowly with `ease-glide`.
2. **Refined modal entrance.** Modals scale from 0.98 → 1.0 and fade in over `motion-standard / ease-enter`, with the scrim fading `rgba(23,23,33,0)` → `rgba(23,23,33,0.6)`. Exit is faster (`motion-fast / ease-exit`) — leaving feels lighter than arriving.
3. **Money updates.** When a balance changes, figures cross-update without flicker — the new tabular value settles in over `motion-fast`. Money never bounces or springs; it resolves calmly.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`, parallax and gradient drift are disabled, and slides become fades. The product stays fully usable.

Do not promote an easing curve, animation name, transition property, duration, or reduced-motion behavior beyond the source-stated rows above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

Sorting the named faces into the evidence-class rows below is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | Arcadia / Arcadia Display / Arcadia Mono are named as the proprietary commission. The source HTML comment says the family is confirmed across multiple brand-design writeups, not that Mercury distributes a webfont package here. |
| Named token-export / brand-summary corroboration | shadcn.io/design/mercury token export and brand summaries named in the HTML comment. Custom Arcadia 480 weight is in the verified-core list. |
| Live surface-use | Source §4 names mercury.com live DOM getComputedStyle as a Tier 1 source. YAML records the machine token block as drawn from prose (extracted 2026-06-09). Those two accounts are not merged. |
| Official distributed asset | No Mercury-exclusive distributed type file is recorded in this packet. |
| Declared-only fallback | `-apple-system`, `BlinkMacSystemFont`, `"Helvetica Neue"`, Helvetica, Arial, `sans-serif`; mono `ui-monospace`, SFMono-Regular, Menlo, Consolas, `monospace`. |
| License | None is stated. None is invented. |

### Family

- **Primary:** `"Arcadia", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Display:** `"Arcadia Display", "Arcadia", -apple-system, BlinkMacSystemFont, sans-serif`
- **Monospace (figures/code):** `"Arcadia Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`

Arcadia is a proprietary commission. YAML `family.sans` `Arcadia`; YAML `family.mono` `Arcadia Mono`. Treating the source fallback note — when unavailable, a clean neo-grotesque fallback (Helvetica Neue / system sans) preserves the geometry and neutrality — as a fallback instruction, not a brand-face substitution, and refusing to present `Helvetica Neue` or a system fallback as Arcadia, is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification.

**Weights.** Arcadia ships in a tight custom set: **360, 400, 420, 480**. Treating “authoritative without feeling heavy” and “lightness reads as elegant” as the source’s own reconstruction note is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. The hero of the system is **480** — a custom weight between regular (400) and medium (500), authoritative without feeling heavy. 360 is reserved for large display text where lightness reads as elegant; 400 is body; 420 is subtle emphasis; 480 is headings and labels.

### Type roles

Treating verified YAML `lineHeight` unitless ratios as scaling with font size and not as fixed px, treating body companions `1.1` / `1.3` / `1.4` / `1.5` as size-local writings of those YAML ratios rather than replacements, and treating YAML `tracking` `0.42` and body `+0.42px` plus body-only Display Medium `+0.2px` as unmerged writings, is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. Verified YAML `lineHeight` values are the unitless ratios `1.05`, `1.10`, `1.25`, `1.30`, `1.40`, `1.625`, and `1.50`. Body table companions `1.1`, `1.3`, `1.4`, `1.5` are size-local writings of those same YAML ratios, not replacements. YAML `tracking` `0.42` on display-hero / display-lg is the YAML number. Body writes it as +0.42px. Both forms are carried. Body Display Medium tracking +0.2px is body-only.

| Role | Font | Size | Weight | Line height | Letter spacing | Notes |
|---|---|---|---|---|---|---|
| Display Hero | Arcadia Display | YAML 65 / 65px | 360 | 1.05 | YAML 0.42 / +0.42px | YAML use: `Marketing hero, Arcadia Display`. Body: Marketing hero headlines |
| Display Large | Arcadia Display | YAML 48 / 48px | 360 | 1.10 (body 1.1) | YAML 0.42 / +0.42px | YAML use: `Section openers` |
| Display Medium | Arcadia Display | 36px | 400 | 1.15 | +0.2px | Band titles. Body table only; not a YAML key |
| Heading Large | Arcadia | YAML 28 / 28px | 480 | 1.25 | normal | YAML use: `Feature titles, modal headers` |
| Heading | Arcadia | YAML 22 / 22px | 480 | 1.30 (body 1.3) | normal | YAML use: `Card headings, sub-sections` |
| Subtitle | Arcadia | YAML 18 / 18px | 420 | 1.40 (body 1.4) | normal | YAML use: `List headers, nav titles` |
| Body Large | Arcadia | YAML 17 / 17px | 400 | 1.625 | normal | YAML use: `Lead paragraphs`. Body: lead paragraphs, descriptions |
| Body | Arcadia | YAML 15 / 15px | 400 | 1.625 | normal | YAML use: `Standard reading text` |
| Body Small | Arcadia | YAML 13 / 13px | 400 | 1.50 (body 1.5) | normal | YAML use: `Secondary info, dense tables` |
| Caption | Arcadia | YAML 12 / 12px | 420 | 1.40 (body 1.4) | normal | YAML use: `Metadata, timestamps, labels` |
| Numeric / Figures | Arcadia Mono | contextual | 400 | tight | normal | Balances, amounts — tabular figures |

**Typography principles** (source §3). These 5 items are a derived editorial implementation inference from the reviewed material; they are not Mercury-authored or a separately published UI specification. The values inside them are recorded.

- **480 is the brand voice.** The custom 480 weight carries headings and key labels. It is the single most identifying typographic choice — neither thin nor bold, just quietly confident.
- **Display gets letter-spacing.** Large Arcadia Display headlines use +0.42px tracking; body text uses none. The wider the type, the more deliberate the spacing.
- **Generous line-height.** Body runs at 1.625 — unusually airy — because long-form marketing copy on dark surfaces needs breathing room to stay legible.
- **Off-white, not white.** Text on dark canvases is `#ededf3`, never `#ffffff`, to soften contrast and reduce strain.
- **Tabular figures for money.** Financial amounts in the dashboard use monospaced/tabular Arcadia figures so columns align.

### Assets

Catalog logo: type `favicon`, slug `https://www.google.com/s2/favicons?domain=mercury.com&sz=128`. Treating that Google s2 URL as a catalog identity-boundary record rather than a captured first-party Mercury mark is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification.

Product mockups maintain aspect ratio inside gradient-washed frames. Hero imagery scales fluidly; gradient glows resize with the viewport. Icons render at consistent 20-24px within their contexts.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted; treating component/state values as the source HTML-comment class (reasoned extrapolations consistent with the verified core tokens); treating generic `Focus` as not `focus-visible` evidence; treating applicability as following control meaning rather than capture completeness; treating YAML component keys and body §4 dark-pairs or extra fields as unmerged writings; omitting kind and a state-applicability map where interactive-kind is unconfirmed; and not claiming complete state coverage, is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. Characterizations in the following table such as “No illustration clutter”, “never as skeleton bars”, “No blocking overlay”, “One actionable sentence”, “Calm, never celebratory confetti”, “Factual, not festive”, and “Always visible for accessibility” are that same class. The hex values, durations, and copy strings inside the rows are recorded.

| State | Treatment |
|---|---|
| **Empty (first use)** | One line of `#70707d` body text explaining why the view is empty, plus a single suggested action as a ghost or secondary button. No illustration clutter. |
| **Empty (filtered)** | One line of `#70707d` caption ("No transactions match these filters"). No button — the user adjusts filters. |
| **Loading (first paint)** | Skeleton blocks at `#f4f5f9` (light) / `#1e1e2a` (dark) matching final layout. Financial amounts render as `—` until resolved, never as skeleton bars. |
| **Loading (refresh)** | Subtle inline indigo spinner; content stays visible with previous values. No blocking overlay. |
| **Error (inline field)** | `#d03275` 1px border on the input, help text below in `#d03275` 12px weight 420. One actionable sentence. |
| **Error (toast)** | `#1e1e2a` bg, `#ededf3` text, 12px radius, one specific sentence, auto-dismiss. |
| **Error (blocking)** | Reserved for outage. Centered single line in emphasized ink, indigo retry button below. No illustration. |
| **Success (inline)** | Brief faint indigo wash behind the updated element, ~300ms fade. Calm, never celebratory confetti. |
| **Success (transfer sent)** | Confirmation panel/screen — checkmark, exact amount in tabular figures, recipient, timestamp, single primary action. Factual, not festive. |
| **Disabled** | Button bg `#70707d`, text `#c3c3cc`. Inputs keep their `#c3c3cc` border so geometry is stable if re-enabled. |
| **Focus** | 1px `#5266eb` border plus a 2px `rgba(82,102,235,0.2)` ring on all interactive elements. Always visible for accessibility. |
| **Hover (row)** | Light `#dddde5` / dark `#272735` fill on interactive rows and list items. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source records a generic `Focus` treatment (1px `#5266eb` border plus a 2px `rgba(82,102,235,0.2)` ring). Generic `Focus` is not `focus-visible` evidence; that observation stays as an additional observed state, and the `focus-visible` visual treatment remains unresolved. No `focus-visible` table row below carries a hex. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless the source names that same canonical state on that control. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. This is not a complete state-coverage claim.

Neutral Badge, Accent Badge, Error Badge, Product Card, Elevated Card, and Toast have no interactive-kind confirmation for a §4.4 map, so kind and a state-applicability map are omitted.

Mercury's button system is disciplined: typically one filled (primary) CTA per section, paired with ghost or secondary actions. Base radius is **4px** — tight and software-like, not pill-soft (the marketing email-capture pill is the exception at a larger radius). That characterization is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification. The values are recorded.

### Primary (Fill)

- Role: The single primary action — "Open Account", "Apply now"
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#5266eb`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: `10px 18px`
- Font: `15px/480` / 15px / 480 / Arcadia
- Height: ~40px
- Hover: `#4354c8`
- Active: `#3442a6`
- Disabled: `#70707d` bg, `#c3c3cc` text
- Use: YAML `Single primary action Open Account`
- YAML `tokens.components.button-primary`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated primary fill |
| hover | applicable | Pointer-web primary action; source-stated hover fill `#4354c8` |
| focus-visible | applicable | Interactive control; visual treatment omitted. Generic Focus ring is a separate observed state |
| disabled | applicable | A primary action can be unavailable; source-stated disabled fill `#70707d` / text `#c3c3cc` |
| loading | applicable | Opening an account can wait on a request; visual treatment omitted |
| error | applicable | Opening an account can fail; visual treatment omitted |
| success | applicable | Opening an account can confirm; visual treatment omitted |

Additional observed state: generic `Focus` (1px `#5266eb` border plus a 2px `rgba(82,102,235,0.2)` ring). Generic `Focus` is not `focus-visible` evidence.

### Secondary (Subtle)

- Role: Secondary action beside the primary CTA
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ededf3` (light) / `#1e1e2a` (dark)
- Text: `#1e1e2a` (light) / `#ededf3` (dark)
- Border: none
- Radius: 4px
- Padding: `10px 18px`
- Font: `15px/480` / 15px / 480 / Arcadia
- Hover: `#dddde5` (light) / `#272735` (dark)
- Use: YAML `Secondary action`
- YAML `tokens.components.button-secondary`. YAML records light-pair `bg` `#ededf3` / `fg` `#1e1e2a` only; dark pair is body-only.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated secondary action |
| hover | applicable | Pointer-web button; source-stated hover `#dddde5` (light) / `#272735` (dark) |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary action can be unavailable; visual treatment omitted |
| loading | applicable | A secondary action can wait on a request; visual treatment omitted |
| error | applicable | A secondary action can fail; visual treatment omitted |
| success | applicable | A secondary action can confirm; visual treatment omitted |

### Ghost / Tertiary

- Role: Inline / low-emphasis actions, "Learn more"
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#5266eb` (light) / `#ededf3` (dark)
- Border: none
- Radius: 4px
- Padding: `10px 14px`
- Font: `15px/420` / 15px / 420 / Arcadia
- Hover: faint `rgba(82,102,235,0.08)` wash
- Use: YAML `Inline low-emphasis Learn more`
- YAML `tokens.components.button-ghost`. YAML records `fg` `#5266eb`; dark `fg` `#ededf3` is body-only.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated ghost action |
| hover | applicable | Pointer-web control; source-stated hover wash `rgba(82,102,235,0.08)` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A low-emphasis action can be unavailable; visual treatment omitted |
| loading | not-applicable | "Learn more" is an inline destination / low-emphasis control; the control itself does not enter a loading state |
| error | not-applicable | A destination / low-emphasis control does not carry validation or request-failure on the control |
| success | not-applicable | Navigation away is not a success confirmation on the ghost control |

### Outline

- Role: Secondary CTA on hero bands where a fill would over-compete
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#ededf3` (on dark) / `#1e1e2a` (on light)
- Border: 1px solid `#272735` (dark) / `#c3c3cc` (light)
- Radius: 4px
- Padding: `10px 18px`
- Font: 15px / 480 / Arcadia
- Use: Secondary CTA on hero bands where a fill would over-compete
- YAML `tokens.components` has no outline row; values are body §4 only.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated outline CTA |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A band CTA can be unavailable; visual treatment omitted |
| loading | applicable | A hero-band CTA can wait on destination or session start; visual treatment omitted |
| error | applicable | A hero-band conversion can fail to start; visual treatment omitted |
| success | applicable | A hero-band conversion can confirm that start; visual treatment omitted |

### Email-Capture Pill (Marketing)

- Role: The signature hero email-capture / "Open Account" pill — the one place the large 40px radius appears
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#5266eb`
- Text: `#ffffff`
- Border: none
- Radius: body 40px (pill); YAML `email-pill.radius` 9999. Both writings are carried and not merged
- Padding: `0 20px`, ~32px tall
- Font: `15px/480` / 15px / 480 / Arcadia
- Use: YAML `Signature hero email-capture pill`
- YAML `tokens.components.email-pill`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated hero pill |
| hover | applicable | Pointer-web submit control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An email-capture action can be unavailable; visual treatment omitted |
| loading | applicable | Submitting capture can wait on a request; visual treatment omitted |
| error | applicable | Capture can fail validation or request; visual treatment omitted |
| success | applicable | Capture can confirm; visual treatment omitted |

### Text Field (Light / Product)

- Role: Standard dashboard form field
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#fbfcfd`
- Text: `#1e1e2a`
- Border: 1px solid `#c3c3cc`
- Radius: 4px
- Padding: `10px 12px`
- Font: `15px/400` / 15px / 400 / Arcadia
- Placeholder: `#70707d`
- Focus: 1px border `#5266eb` + 2px `rgba(82,102,235,0.2)` ring
- Error: Border 1px solid `#d03275`; help text `#d03275`, 12px / 420
- Use: YAML `Standard dashboard field`
- YAML `tokens.components.input`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated dashboard field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted. Named Focus treatment stays an additional observed state |
| disabled | applicable | An input can be unavailable; source-stated disabled keeps `#c3c3cc` border |
| loading | applicable | A dashboard field can wait on a value; visual treatment omitted |
| error | applicable | Form field; source-stated error border `#d03275` and 12px / 420 help text |
| success | applicable | A form field can confirm valid input; visual treatment omitted |

Additional observed state: generic `Focus` as recorded in the capture record.

### Text Field (Dark / Marketing)

- Role: Forms on dark canvas
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#1e1e2a`
- Text: `#ededf3`
- Border: 1px solid `#272735`
- Radius: 4px
- Padding: `10px 12px`
- Font: 15px / 400 / Arcadia
- Placeholder: `#70707d`
- Focus: border `#5266eb`
- YAML `tokens.components` has no dark-input row; values are body §4 only.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated dark-canvas field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | An input can be unavailable; visual treatment omitted |
| loading | applicable | A field can wait on a value; visual treatment omitted |
| error | applicable | Form field; visual treatment omitted |
| success | applicable | A form field can confirm valid input; visual treatment omitted |

### Product Card (Light)

- Role: Dashboard panels, account/balance cards
- Type: card
- Anatomy: surface
- Background: `#ffffff` / `#ededf3`. YAML `card.bg` `#ffffff` only. Both writings are carried
- Border: 1px solid `#c3c3cc` (hairline subdued) or none
- Radius: 12px
- Padding: `24px`
- Shadow: `0px 1px 2px rgba(23,23,33,0.06)`
- Use: YAML `Dashboard panels, balance cards`
- YAML `tokens.components.card`

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

Local recipe from source §9 (unique values not in YAML): dashboard balance card — white bg, 12px radius, 24px padding, 1px `#c3c3cc` border, shadow `0px 1px 2px rgba(23,23,33,0.06)`. Label 12px weight 480 `#70707d`. Amount in tabular Arcadia figures, 28px weight 480 `#1e1e2a`.

### Elevated Card (Dark)

- Role: Floating panels and product mockups on the dark marketing canvas
- Type: card
- Anatomy: surface
- Background: `#1e1e2a`
- Border: 1px solid `#272735`
- Radius: 12px
- Padding: 24px
- Shadow: `0px 8px 32px rgba(0,0,0,0.4)`
- YAML `tokens.components` has no elevated-card row; values are body §4. YAML `shadow.elevated` matches this shadow.

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### Compact List Row

- Role: Transaction rows, account lists
- Kind: interactive
- Anatomy: row
- Background: transparent
- Border-bottom: 1px solid `#c3c3cc` (light) / `#272735` (dark)
- Radius: 0
- Padding: `12px 16px`
- Hover: `#dddde5` (light) / `#272735` (dark)
- YAML `tokens.components` has no list-row row; values are body §4 only.

Local recipe from source §9: transaction row — transparent bg, 1px bottom border `#c3c3cc`, `12px 16px` padding, ≥44px tall. Merchant name 15px weight 480 `#1e1e2a`, category 13px `#70707d`, amount right-aligned in tabular Arcadia figures.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated transaction/account row |
| hover | applicable | Pointer-web row; source-stated hover `#dddde5` (light) / `#272735` (dark) |
| focus-visible | applicable | Interactive row; visual treatment omitted |
| disabled | applicable | A row can be unavailable; visual treatment omitted |
| loading | not-applicable | A list row selects or opens a record; the row itself does not enter a loading state |
| error | not-applicable | Row hover/selection is not a validation or request-failure state on the row |
| success | not-applicable | Opening a record is not a success confirmation on the row |

### Neutral Badge

- Role: Category/status metadata
- Type: badge
- Anatomy: label
- Background: `#f4f5f9` (light) / `#272735` (dark)
- Text: `#70707d` (light) / `#c3c3cc` (dark)
- Radius: 4px
- Padding: `2px 8px`
- Font: `12px/480` / 12px / 480 / Arcadia
- Use: YAML `Category/status metadata`
- YAML `tokens.components.badge-neutral`. YAML records light-pair `bg` `#f4f5f9` / `fg` `#70707d`; dark pair is body-only.

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### Accent Badge

- Role: Highlighted status ("New", "Active")
- Type: badge
- Anatomy: label
- Background: `rgba(82,102,235,0.12)`
- Text: `#5266eb`
- Radius: 4px
- Padding: `2px 8px`
- Font: `12px/480` / 12px / 480 / Arcadia
- Use: YAML `Highlighted status New/Active`. YAML records `fg` `#5266eb` and no bg; body bg is `rgba(82,102,235,0.12)`
- YAML `tokens.components.badge-accent`

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### Error Badge

- Role: Negative / blocking status ("Failed", "Declined")
- Type: badge
- Anatomy: label
- Background: `rgba(208,50,117,0.12)`
- Text: `#d03275`
- Radius: 4px
- Padding: `2px 8px`
- Font: 12px / 480 / Arcadia
- YAML `tokens.components` has no error-badge row; values are body §4 only.

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### Underline Tabs

- Role: Dashboard section switching
- Kind: interactive
- Type: tab
- Anatomy: tab list + active indicator
- Background: transparent
- Text (inactive): `#70707d`
- Text (active): `#1e1e2a` (light) / `#ededf3` (dark)
- Active indicator: `2px bottom border #5266eb`
- Font: `15px/480` / 15px / 480 / Arcadia
- Use: YAML `Dashboard section switching`
- YAML `tokens.components.tab`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated underline tabs |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab selects a section; the tab itself does not enter a loading state |
| error | not-applicable | Selected versus unselected is the tab meaning, not a request or validation failure |
| success | not-applicable | Active-indicator selection is not action-outcome confirmation on the tab |

### Top Nav (Marketing, Dark)

- Role: Inverted marketing navigation
- Kind: interactive
- Anatomy: links + CTA
- Background: `#171721` (transparent → solid on scroll)
- Link text: `#ededf3`, 15px / 420
- Link hover: `#ffffff`
- CTA: indigo pill `#5266eb`
- Use: Inverted marketing navigation
- YAML `tokens.components` has no top-nav row; values are body §4 only.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated marketing nav |
| hover | applicable | Pointer-web nav; source-stated link hover `#ffffff` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav link can be unavailable; visual treatment omitted |
| loading | not-applicable | A marketing nav link opens a destination; the link itself does not enter a loading state |
| error | not-applicable | Opening a destination is not a validation or request-failure state on the link |
| success | not-applicable | Arrival is not a success confirmation on the nav link |

### Toast

- Role: Transient confirmation
- Type: toast
- Anatomy: message
- Background: `#1e1e2a`
- Text: `#ededf3`
- Border: 1px solid `#272735`
- Radius: 12px
- Padding: `12px 16px`
- Shadow: `0px 8px 24px rgba(0,0,0,0.3)`
- Font: 14px / 400 / Arcadia
- Use: YAML `Transient confirmation`
- YAML `tokens.components.toast`. YAML records `bg` `#1e1e2a`, `fg` `#ededf3`, radius 12, padding `12px 16px`; border, shadow, and 14px font are body-only.

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### Centered Modal

- Role: Confirmation and form modals
- Kind: interactive
- Type: dialog
- Anatomy: surface + scrim
- Background: `#ffffff` (light) / `#1e1e2a` (dark)
- Text: `#1e1e2a` / `#ededf3`
- Border: none
- Radius: 12px
- Padding: `28px`
- Shadow: `0px 16px 48px rgba(23,23,33,0.24)`
- Scrim: `rgba(23,23,33,0.6)`
- Use: YAML `Confirmation/form modal`
- YAML `tokens.components.dialog`. YAML records `bg` `#ffffff`, radius 12, padding `28px`; dark pair, scrim, and shadow are body (shadow also YAML `shadow.dialog`).

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated confirmation/form modal |
| hover | applicable | Pointer-web dialog; visual treatment omitted |
| focus-visible | applicable | Interactive dialog; visual treatment omitted |
| disabled | applicable | A modal action can be unavailable; visual treatment omitted |
| loading | applicable | A confirmation or form modal can wait on a request; visual treatment omitted |
| error | applicable | A form modal can fail validation or request; visual treatment omitted |
| success | applicable | A confirmation modal can complete; visual treatment omitted |

### Toggle

- Role: Boolean settings
- Kind: interactive
- Type: toggle
- Anatomy: track + thumb
- Track: `#5266eb` (on) / `#c3c3cc` (off, light) · `#272735` (off, dark)
- Thumb: `#ffffff` 18px circle, `0px 1px 2px rgba(0,0,0,0.2)`
- Radius: 9999px
- Use: YAML `Boolean settings, on=indigo off=#c3c3cc`
- YAML `tokens.components.toggle`. YAML records `bg` `#5266eb` and radius 9999; off-dark `#272735` and thumb recipe are body-only.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated boolean setting |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A setting can be unavailable; visual treatment omitted |
| loading | not-applicable | A boolean toggle flips on/off; the toggle itself does not enter a loading state |
| error | not-applicable | On versus off is the toggle meaning, not a request or validation failure |
| success | not-applicable | The on state is not a success confirmation on the toggle |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Treating the following whitespace philosophy as reconstruction rather than a separately published layout specification — editorial spaciousness; one idea per band; dense where it counts — is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification.

- **Editorial spaciousness.** Marketing surfaces are deliberately airy — large headlines, single CTAs, lots of negative space around product imagery.
- **One idea per band.** Each marketing section makes one point with one visual and at most one filled CTA.
- **Dense where it counts.** The dashboard packs financial data efficiently; spaciousness is a marketing posture, density is a product necessity.

**Grid & container.** Marketing max-width: ~1200px centered. 12-column grid under the hood; content typically spans 8-10 columns centered. Generous side gutters on wide screens reinforce the editorial feel. Dashboard uses a left sidebar + fluid content region.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, stacked bands, hamburger nav, full-width CTAs |
| Tablet | 640-1024px | 2-column product grids, condensed sidebar |
| Desktop | 1024-1280px | Full marketing grid, persistent dashboard sidebar |
| Wide | >1280px | Centered ~1200px container, generous gutters |

### Touch targets

- Buttons: ~40px tall minimum; pill CTA ~32-44px
- List/transaction rows: ≥44px
- Dashboard controls: comfortable 40px tap zones

### Collapsing strategy

- Dashboard sidebar collapses to an icon rail, then to a drawer on mobile
- Multi-column marketing bands stack to single column
- Hero headlines scale down (65px → ~36px) while preserving Display weight and tracking
- Tables become horizontally scrollable or reflow to stacked rows on mobile

### Image behavior

- Product mockups maintain aspect ratio inside gradient-washed frames
- Hero imagery scales fluidly; gradient glows resize with the viewport
- Icons render at consistent 20-24px within their contexts

Treating the ~40px buttons, ~32px pill, ≥44px rows, 65px hero, and 36px Display Medium as source writings rather than a complete cross-viewport specification for every unlisted control is a derived editorial implementation inference from the reviewed material; it is not Mercury-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following voice reading, context table, and forbidden-register list are a derived editorial implementation inference from the reviewed material; they are not Mercury-authored or a separately published voice specification. Source-stated example strings inside them are kept byte-exact.

Mercury writes like a sharp, candid operator who has run a startup and respects that you have too. The voice is precise, dry, occasionally witty, never cute. No exclamation marks, no emoji on product surfaces, no startup-bro hype. Claims are concrete and specific. Sentences are short and confident. It assumes the reader is smart and busy.

| Context | Tone |
|---|---|
| CTAs | Direct imperative — "Open Account", "Apply now", "Get started" |
| Headlines | Declarative, confident, often a single bold claim ("Banking for startups") |
| Body copy | Specific and concrete — names features, numbers, outcomes; avoids fluff |
| Success | Calm and factual — "Transfer sent", "Account approved" |
| Errors | Blameless, specific, actionable — names what went wrong and the fix |
| Empty states | One line explaining the state plus one suggested action |
| Legal / compliance | Plain-English where possible; formal only where regulation requires |

**Forbidden moves.** No "Oops", no exclamation hype, no emoji in financial/product contexts, no vague "Something went wrong", no condescending hand-holding. Mercury never talks down to founders.

Empty (filtered) caption, kept byte-exact: "No transactions match these filters". Highlighted status labels: "New", "Active". Negative status labels: "Failed", "Declined". Ghost example: "Learn more".

No locale-specific product behavior beyond this English reconstruction is established. None is invented.

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

- a single success hex (`#3442a6` family / contextual green in product remains unresolved as a success token; `#3442a6` stays Indigo Active)
- `ease-exit` and `ease-standard` cubic-bezier curves (unattributed; names kept; values match the legacy spec-template examples and are omitted rather than promoted)
- motion animation names, transition properties, and any duration or curve beyond the source-stated tables — promote only after per-component computed capture of all five kinds; a single named duration or curve is not that gate
- `focus-visible` visual treatments; generic `Focus` is a different observation
- interactive kind and state-applicability map for Neutral Badge, Accent Badge, Error Badge, Product Card, Elevated Card, and Toast
- Type on Outline, Dark Text Field, Compact List Row, Error Badge, and Top Nav as YAML `tokens.components` rows (those controls are body §4 only)

### Recorded conflicts

Neither side is chosen:

- YAML `email-pill.radius` 9999 vs body Email-Capture Pill 40px vs YAML `rounded.full` 9999 vs body Circle 9999px
- YAML spacing xs 4 / sm 8 / md 12 / base 16 / lg 18 / xl 24 / xxl 28 / section 48 vs body common values 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- YAML `shadow` three keys vs body elevation five levels (Standard (2) `0px 4px 16px rgba(23,23,33,0.10)` is body-only) vs toast-local `0px 8px 24px rgba(0,0,0,0.3)`
- YAML type roles vs body Display Medium 36px / 400 / 1.15 / +0.2px
- YAML `lineHeight` 1.10 / 1.30 / 1.40 / 1.50 vs body table 1.1 / 1.3 / 1.4 / 1.5
- YAML `card.bg` `#ffffff` vs body Product Card `#ffffff` / `#ededf3`
- YAML `tokens.source` drawn from prose (extracted 2026-06-09) vs source §4 live DOM getComputedStyle vs HTML-comment shadcn.io/design/mercury token export (verified 2026-06-06 via WebSearch + WebFetch)
