# Money Forward Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Money Forward (マネーフォワード) is the Japanese fintech that started as a personal household-budgeting app (Money Forward ME) and grew into a full business platform — cloud accounting, invoicing, payroll, and expense tools (Money Forward Cloud) plus financial-institution products (Money Forward X). Catalog homepage identity is `https://moneyforward.com`. This contract's interface tokens are transcribed from the open-source **Money Forward Cloud UI** (`cloud-react-ui`) theme (`tokens.source: prose-derived`). The YAML records `ds.name: Money Forward Cloud UI`, `ds.url: https://github.com/moneyforward/cloud-react-ui`, `ds.type: system`. The corporate design-org site `design.moneyforward.com` is a named source for the **"User Focus"** stance; the source notes that its dominant accent is an orange `#ED7100`, a corporate brand layer distinct from the Cloud product blue. The brief-supplied `#316AD6` was not found as a literal token; the closest verified token is royalBlue `#3B7DE9` / `tokens.colors.primary` `#3b7de9`, used as catalog `primary_color` `#3B7DE9`. Treating `cloud-react-ui` as this contract's token source, keeping `design.moneyforward.com` as the User Focus / corporate-orange layer rather than as a Cloud product-token surface, keeping `#316AD6` out of the token set, and keeping every value attached to the evidence class that established it, are a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

The captured Cloud language is a calm white canvas, a confident **blue** primary, warm-gray neutrals, and a danger red held in reserve. The signature primary is a **blue gradient** — `royalBlue #3B7DE9` lightening down to `cobalt #0054AC` — applied to the primary button. Text is a warm dark gray (`nightRider #333333`), not pure black; secondary text drops to `nobel #999999`. The palette is a hand-curated, plainly-named color list (aliceBlue, cobalt, royalBlue, venetianRed, nightRider, linkWater…) rather than a generative ramp. Typography leads with **Noto Sans JP**. The type scale is a fine-grained ladder from 10px to 24px. Components round at **`4px`**. The hex values, the Noto Sans JP lead, the 10–24px ladder, and the `4px` radius are recorded from `cloud-react-ui`. The characterizations built on them — trustworthy enough to hold money and books yet light enough that a non-accountant can use it; SmartHR-adjacent restraint; a Money Forward Cloud fingerprint; a subtly dimensional, polished blue pill, signaling "press me, this is safe."; competence and care; never loud — are a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

Brand narrative recorded by the source, kept as narrative context. Money Forward, Inc. was founded in Japan with a deceptively simple idea: most people and most small businesses have a fragmented, anxious, opaque relationship with their own money. Bank balances, credit cards, e-money, and accounts live in separate silos; bookkeeping is a chore done in spreadsheets or on paper; and the cost of *not knowing where your money is* is paid in stress. Money Forward's founding product, **Money Forward ME**, attacked the consumer side — automatically aggregating accounts into one view so an individual could finally *see* their money (お金の見える化, "making money visible"). From there the company built **Money Forward Cloud** — accounting, invoicing, payroll, expenses for businesses — and **Money Forward X**, embedded-finance products for financial institutions. The source writes that the design language flows from that mission of *visibility and forward motion*. **One**, money must always be shown exactly and clearly — hence the dense, legible type scale, the tabular discipline, the warm-gray-on-white calm that lets figures be the loudest thing on screen. **Two**, the product must feel trustworthy — hence the confident blue primary, the restraint in using danger red, the businesslike `4px` radius, and the absence of anything flashy or gimmicky around the user's finances. **Three**, it must feel *empowering*, not intimidating — hence plain-language copy and a UI that a small-business owner who is *not* an accountant can actually operate. Money Forward's design organization publishes openly: the corporate design site (`design.moneyforward.com`) articulates a **"User Focus"** stance — designing things that "move users' lives and the world forward," with explicit attention to accessibility for people with visual impairments — and the engineering org open-sourced the **Money Forward Cloud UI** component library (`cloud-react-ui`) on GitHub, where the blue-gradient primary, the curated palette, and the typed theme all live in public. The source's closing sentence: the system is, like the company, methodical and trustworthy by design. The founding idea, the silos-and-stress sentence, ME / Cloud / X, お金の見える化, the One / Two / Three sequence through its last clause, User Focus, the "move users' lives and the world forward" line, accessibility for people with visual impairments, and that closing sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-mission narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured product, control, or source-stated Cloud artifact, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

- Automatically aggregating accounts into one view on Money Forward ME (お金の見える化).
- Use Money Forward Cloud accounting, invoicing, payroll, and expense tools.
- Take the single primary action per screen (`保存` / `登録` / Save / Submit).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by Money Forward's publicly-described user base (Japanese individuals and SME owners/finance staff), not real individuals, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, as that publicly-described user base is Japanese individuals and SME owners/finance staff. The voice table names Consumer (ME) and Business (Cloud) as contexts. Reading those source-named groups as this product's audience, and dropping the fictional biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

### Distinctive traits

The list restates the source's Key Characteristics. The values in them are recorded; classifying the list as that restatement, and the groupings and the readings inside them, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

- **Blue gradient primary** — `royalBlue #3B7DE9` → `cobalt #0054AC` on the primary button (a Money Forward Cloud signature)
- Warm dark-gray text `nightRider #333333` (never pure black); secondary `nobel #999999`
- Hand-curated, plainly-named palette (aliceBlue / cobalt / royalBlue / venetianRed / linkWater / solitude…) — small and opinionated, not a generative ramp
- Danger held in reserve: `venetianRed #D0021B` for destructive actions only
- **Noto Sans JP-led** font stack with full platform-native JP fallbacks
- Fine-grained type scale 10 / 12 / 13 / 14 / 16 / 18 / 20 / 24px — built for dense accounting tables
- Small businesslike radius — `4px` on buttons, blocks, and inputs
- Open-source design system: **Money Forward Cloud UI** (`cloud-react-ui`) published on GitHub with a typed styled-components theme
- Subtle gradients on buttons (white→solitude on default, royalBlue→cobalt on primary) for gentle dimensionality
- Calm white + warm-gray (`solitude #ECF2FD`, `linkWater #D4D8DD`) surfaces — trustworthy, never flashy

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation. Principle 4's stem restates the published **"User Focus"** stance from `design.moneyforward.com`. Every *UI implication* below is the source's own editorial reading.

1. **Make money visible, exactly.** Figures are the product; the UI exists to display them clearly. *UI implication:* Dense legible type, tabular alignment, warm-gray calm so amounts are the loudest element. Never approximate or decoratively obscure a number.
2. **Trust through restraint.** A fintech that holds your books cannot be flashy. *UI implication:* Confident blue primary, danger red held in reserve, businesslike `4px` radius, gradients-not-gimmicks. Competence is the aesthetic.
3. **Empower the non-expert.** Money Forward serves individuals and SME owners, not accountants. *UI implication:* Plain-language labels and helper copy; explain what a figure means; never hide behind jargon. A first-time user should be able to complete the task.
4. **User Focus — move lives forward.** The stated design stance: design that improves the user's life and "moves the world forward." *UI implication:* Optimize for the user's actual goal (see my money, file this invoice), not for engagement metrics or visual flair. Accessibility (including for visual impairments) is part of this commitment.
5. **One coherent product across many modules.** ME, Cloud, and X span very different surfaces. *UI implication:* The shared token theme + curated palette + `cloud-react-ui` components keep every module recognizably Money Forward. Don't fork the palette per team.

### Application rules

The source states these as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

- Use the blue gradient (`#3B7DE9` → `#0054AC`) for the one primary action per screen. Do not make it a flat solid — the subtle gradient is the MF Cloud signature.
- Keep danger in the *text/icon* (`venetianRed #D0021B`) on a neutral button.
- Use warm dark gray `#333333` for text. Do not use pure `#000000`.
- Lead with Noto Sans JP and carry the native JP fallback chain. Do not hardcode a Latin-only font.
- Use the `4px` radius everywhere. Do not introduce 8px+ rounded corners — MF Cloud is businesslike-square.
- Pick from the curated named palette (royalBlue, cobalt, linkWater, solitude…). Do not invent new hexes — the small palette is deliberate.
- Respect the dense type scale (14px working default). Do not inflate body to 16–18px — accounting tables need the density.
- Use gradients on buttons for gentle dimensionality. Do not add drop shadows to flatten controls — the gradient is the depth.

### Avoid

The source states these as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

- Do not make the primary a flat solid — the subtle gradient is the MF Cloud signature.
- Do not use a solid red fill for delete unless it's a truly catastrophic confirmation — MF holds red in reserve.
- Do not use pure `#000000` for text.
- Do not hardcode a Latin-only font.
- Do not introduce 8px+ rounded corners — MF Cloud is businesslike-square.
- Do not invent new hexes — the small palette is deliberate.
- Do not inflate body to 16–18px — accounting tables need the density.
- Do not add drop shadows to flatten controls — the gradient is the depth.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each YAML key below keeps its own path. `tokens.colors.primary` `#3b7de9` is not merged with `tokens.colors.brand` `#3b7de9`; catalog `primary_color` `#3B7DE9` and named `royalBlue` `#3B7DE9` sit beside those keys. `tokens.colors.canvas` `#ffffff` is not `tokens.colors.on-primary` `#ffffff`. `tokens.colors.surface` `#ecf2fd` is not a general canvas. Named `cloud-react-ui` color.ts entries that are not YAML keys stay named, not promoted into new `tokens.colors.*` paths. Pairing each hex to the token-set path or named swatch the source records, keeping those same-hex keys unmerged, and keeping the named palette as named swatches rather than as invented YAML keys, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

**Token-set keys** (`tokens.colors.*`):

- **primary** (`#3b7de9`): YAML `tokens.colors.primary`. Start of the primary-button gradient. Catalog identity `primary_color` is `#3B7DE9`. Named `royalBlue` (`#3B7DE9`).
- **primary-hover** (`#0054ac`): YAML `tokens.colors.primary-hover`. End of the primary-button gradient, hover/pressed depth. Named `cobalt` (`#0054AC`).
- **brand** (`#3b7de9`): YAML `tokens.colors.brand`. Same hex as `primary`; kept as its own key.
- **canvas** (`#ffffff`): YAML `tokens.colors.canvas`. Page surface. Named `white` (`#FFFFFF`) also covers text on the blue primary (`tokens.colors.on-primary`).
- **surface** (`#ecf2fd`): YAML `tokens.colors.surface`. Default-button gradient bottom, subtle blue tint surface. Named `solitude` (`#ECF2FD`).
- **foreground** (`#333333`): YAML `tokens.colors.foreground`. Default text — warm dark gray, never pure black. Named `nightRider` (`#333333`).
- **muted** (`#999999`): YAML `tokens.colors.muted`. Notes / secondary / disabled text. Named `nobel` (`#999999`).
- **on-primary** (`#ffffff`): YAML `tokens.colors.on-primary`. Text on the blue primary.
- **hairline** (`#d4d8dd`): YAML `tokens.colors.hairline`. Standard component border (buttons, blocks). Named `linkWater` (`#D4D8DD`).
- **error** (`#d0021b`): YAML `tokens.colors.error`. Danger / destructive / error text and accents. Named `venetianRed` (`#D0021B`). Held in reserve.
- **success** (`#65ab51`): YAML `tokens.colors.success`. Green for success/positive. Named `apple` (`#65AB51`).
- **warning-bg** (`#fcf8e3`): YAML `tokens.colors.warning-bg`. Warning notice background. Named `cornSilk` (`#FCF8E3`).
- **warning-text** (`#8a6d3b`): YAML `tokens.colors.warning-text`. Warning notice text. Named `mcKenzie` (`#8A6D3B`).
- **error-bg** (`#ffeeeb`): YAML `tokens.colors.error-bg`. Error/danger tint background. Named `mistyRose` (`#FFEEEB`).

**Named `cloud-react-ui` swatches** (source §2; not additional YAML keys):

| Name | Hex | Source use |
|---|---|---|
| royalBlue | `#3B7DE9` | Primary brand blue — start of the primary-button gradient, the canonical "Money Forward blue." |
| cobalt | `#0054AC` | Deep blue — end of the primary-button gradient, hover/pressed depth. |
| sanMarino | `#5176AE` | Supporting blue family for accents, links, secondary emphasis. |
| steelBlue | `#4772B3` | Supporting blue family for accents, links, secondary emphasis. |
| cornflowerBlue | `#6594DA` | Supporting blue family for accents, links, secondary emphasis. |
| solitude | `#ECF2FD` | Very light blue — default-button gradient bottom, subtle blue tint surface. |
| aliceBlue | `#F5FAFF` | Lightest blue tints for hover/selected rows. |
| darkenAliceBlue | `#EDF5FE` | Lightest blue tints for hover/selected rows. |
| nightRider | `#333333` | Default text color — warm dark gray, never pure black. |
| nobel | `#999999` | Notes / secondary / disabled text. |
| dimGray | `#666666` | Mid-gray supporting text. |
| white | `#FFFFFF` | Text on the blue primary, page surface. |
| venetianRed | `#D0021B` | Danger / destructive / error text and accents. Held in reserve. |
| sunsetOrange | `#EC4949` | Lighter error/alert tints. |
| salmon | `#F57575` | Lighter error/alert tints. |
| apple | `#65AB51` | Green for success/positive. |
| cornSilk | `#FCF8E3` | Warning notice bg (warm yellow family). |
| mcKenzie | `#8A6D3B` | Warning notice text (warm yellow family). |
| mistyRose | `#FFEEEB` | Error/danger tint background. |
| redSnow | `#FFF4F4` | Error/danger tint background. |
| amour | `#FAEFF0` | Error/danger tint background. |
| linkWater | `#D4D8DD` | Standard component border (buttons, blocks). |
| hawkesBlue | `#D5DBE3` | Border / divider variants. |
| darkenSolitude | `#E1E5EB` | Border / divider variants. |
| cloudGrey | `#EFF1F4` | Light gray surfaces, section backgrounds. |
| whiteSmoke | `#F7F7F7` | Light gray surfaces, section backgrounds. |
| whisper | `#EEEEEE` | Light gray surfaces, section backgrounds. |
| gainsboro | `#D8D8D8` | Disabled / icon grays. |
| silver | `#BEBEBE` | Disabled / icon grays. Default-button icon color. |
| darkGray | `#AAAAAA` | Disabled / icon grays. |
| veryRightGray | `#CCCCCC` | Disabled / icon grays. |
| rhino | `#424954` | Dark neutral text/chrome. |
| vulcan | `#32373F` | Dark neutral text/chrome. |
| stormGrey | `#787E8D` | Dark neutral text/chrome. |
| lightSlateGrey | `#7C8291` | Dark neutral text/chrome. |

Corporate brand layer, kept off the Cloud product token set: `design.moneyforward.com` orange `#ED7100`. Brief-supplied `#316AD6` is not a literal token. Keeping that orange on the corporate brand layer rather than as a Cloud product token, and keeping `#316AD6` out of the token set, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

### Spacing

YAML `tokens.spacing: [12, 16, 52]`. Source §4 button sizes write those figures as padding: small `0 16px`, medium `0 12px`, large `0 52px`. The array steps are spacing keys; the paddings are those controls' padding. `12` is not `tokens.rounded.*: 4` and not the body size `14`. `16` is not `tokens.typography.xlarge` `16` and not small-button height. `52` is not a type size. Keeping the three array steps on `tokens.spacing` and the three paddings on the button sizes, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

### Shape

- YAML `tokens.rounded.sm: 4`
- YAML `tokens.rounded.md: 4`
- YAML `tokens.rounded.lg: 4`
- YAML `tokens.rounded.full: 9999`

Source §4 writes `4px` on buttons, blocks, and inputs. Source §7 writes `4px` everywhere and forbids 8px+ rounded corners. YAML still records `full: 9999` as its own key. The three `4` steps are three keys, not one. Component records write `4px` on those controls; those are control radii. Keeping `sm` / `md` / `lg` / `full` as four keys, keeping control `4px` on the controls, and leaving `full: 9999` beside the "4px everywhere" rule rather than choosing between them, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

### Elevation

YAML `tokens.shadow.active: "0 0 2px rgba(212,216,221,0.3)"`. Source §6 writes the same pressed treatment as `box-shadow: 0 0 2px rgba(212, 216, 221, 0.3)` (spaces in the rgb list). Buttons: gradient fill + 1px border; that active shadow is the pressed state. Blocks/cards: flat — 1px `linkWater` border + light gray page bg separates them. Modals/dropdowns: light shadow + scrim. Z-index governed by the theme's `zIndex` scale (e.g. backdrop `200`). The measurements, the active-shadow string in both spellings, and backdrop `200` are recorded. Reading elevation as **subtle and gradient-led** rather than shadow-heavy, and reading the button gradient as the distinctive depth cue, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

### Motion

Money Forward's motion is **restrained and confidence-building**. A product that touches taxes and ledgers earns trust through predictability; motion clarifies state, it does not entertain. The source's HTML comment classes duration values as illustrative: they follow the theme's zIndex/gradient discipline, they are not a live computed observation from `cloud-react-ui`. Exact easing *curves* in the source match the legacy template and are omitted here; named easing *roles* and their uses stay. Spring / overshoot easing is **forbidden** on Money Forward product surfaces. Bouncy motion undermines the calm-competence register a fintech needs. Confidence about money is the goal, not delight. Under `prefers-reduced-motion: reduce`, all `motion-*` collapse to `motion-instant`; gradient flips become immediate; modals appear without translate. Accessibility outranks polish. Reading that motion register, the spring/overshoot prohibition, the causal clause that bouncy motion undermines a calm-competence register, and accessibility outranking polish, as an implementation stance is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. The illustrative duration table below is the source's own record, not that gate.

Treating those durations as illustrative rather than as computed `cloud-react-ui` tokens, omitting the unsourced curves, keeping named easing roles and signature pairings, and requiring the five-kind per-component computed observation before any further promotion, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

**Durations** (source table; illustrative):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle/checkbox commits, selection |
| `motion-fast` | 150ms | Button hover gradient flip, focus ring, small reveals |
| `motion-standard` | 250ms | Dropdown open, accordion, tab switch |
| `motion-modal` | 300ms | Modal/dialog enter-exit |

**Easings** (roles and uses; curve values omitted):

| Token | Use |
|---|---|
| `ease-standard` | The default |
| `ease-enter` | Things arriving (dropdowns, modals) |
| `ease-exit` | Dismissals |

**Signature motions** (source list):

1. **Primary button hover.** The blue gradient *flips* (`#3B7DE9`→`#0054AC` becomes `#0054AC`→`#3B7DE9`) over `motion-fast / ease-standard` — a subtle, dimensional press affordance, no scale or bounce.
2. **Default button hover.** Same gradient-flip treatment on the white→solitude default button.
3. **Modal enter.** Backdrop scrim fades in (`zIndex 200`) over `motion-modal / ease-enter`; dialog appears with opacity + slight translate. Controlled.
4. **Row/expand reveal.** Table rows and accordions expand over `motion-standard / ease-enter`; data lands without layout jump.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating Noto Sans JP as the explicit lead of the `cloud-react-ui` stack rather than as a custom brand webfont, treating the platform-native chain as fallbacks rather than as a substitute branded family, and refusing to hardcode a Latin-only font, are a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | `cloud-react-ui` `src/theme/values.ts` publishes the Noto Sans JP-led stack and the 10/12/13/14/16/18/20/24 text-size scale. There is no custom brand webfont; the priority is crisp Japanese + alphanumeric rendering for financial data. |
| Live computed surface-use | YAML `tokens.source: prose-derived`. |
| Official distributed asset | Money Forward Cloud UI is published on GitHub. The published theme carries this font stack. |
| System fallback | `-apple-system`, `BlinkMacSystemFont`, `Helvetica`, `"Hiragino Sans"`, `"ヒラギノ角ゴ ProN W3"`, `"Hiragino Kaku Gothic ProN"`, `Arial`, `Meiryo`, `sans-serif` are the source's fallback chain, not a branded family. |

### Family

- **YAML `tokens.typography.family.sans`:** `Noto Sans JP`
- **YAML `tokens.typography.family.mono`:** `Noto Sans JP`
- **Published stack** (`cloud-react-ui` values.ts / source §3): `"Noto Sans JP", -apple-system, BlinkMacSystemFont, Helvetica, "Hiragino Sans", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", Arial, Meiryo, sans-serif`
- Do not substitute a system font and call it Noto Sans JP. Do not hardcode a single Latin font — always carry the Noto Sans JP + native chain. Reading YAML `mono` as `Noto Sans JP` rather than as an invented monospace face, and reading the native chain as fallbacks rather than as the brand face, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

### Type roles

YAML `use` strings are kept verbatim. The longer §3 Typical Use spellings sit beside them; neither replaces the other. YAML records `weight: 400` on `large` and `weight: 700` on `xxlarge` / `xxxLarge` / `xxxxLarge`; other steps have no YAML weight. Source §3 states **normal** and **bold** only — a two-weight system. No line-height token is in the YAML; none is invented. Keeping YAML `use` beside the §3 table, keeping weights only where YAML or the two-weight rule records them, and refusing to flatten a missing line-height into a px, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

| Role | Token | Size | Weight | YAML use | §3 typical use |
|---|---|---:|---:|---|---|
| Fine print | `xSmall` | 10px | | Fine print, dense table footnotes | Fine print, dense table footnotes |
| Captions | `small` | 12px | | Captions, helper text | Captions, helper text |
| Secondary labels | `middle` | 13px | | Secondary labels, table cells | Secondary labels, table cells |
| Body / button default | `large` | 14px | 400 | Body / button default | Body / button default. **`large` (14px) is the working default** for body and buttons — sized for dense accounting UIs, not editorial reading. |
| Emphasized body | `xlarge` | 16px | | Emphasized body | Emphasized body |
| Subheadings | `xxlarge` | 18px | 700 | Subheadings | Subheadings |
| Section headings | `xxxLarge` | 20px | 700 | Section headings | Section headings |
| Page headings | `xxxxLarge` | 24px | 700 | Page headings | Page headings |

**Conventions** (source §3):

- **Tabular financial data** stays legible at 12–14px; the fine `xSmall`/`small` tiers handle footnotes.
- **Bold is for emphasis and headings**, not decoration.
- Never hardcode a single Latin font — always carry the Noto Sans JP + native chain.

### Assets

Catalog identity points at `logo.type: favicon`, slug `https://www.google.com/s2/favicons?domain=moneyforward.com&sz=128`. That pointer is a Google favicon-service URL, not a first-party Money Forward mark file. Treating it as identity metadata rather than as a Money Forward-hosted logo asset is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source's state contract, preserved with its values and copy. YAML `components_harvested: true`. Source HTML comment: button variants, 4px radius, button sizes 28/32/42, and block 4px + linkWater border are transcribed from `cloud-react-ui` `src/theme/theme.ts`; the curated palette from `src/theme/color.ts`; the font stack and text-size scale from `src/theme/values.ts`. Input/notice variants in §4 are reasonable mappings of verified tokens (inferred). Motion durations are illustrative. Personas in the source are fictional and are not used here.

| State | Treatment |
|---|---|
| **Empty (no transactions/data)** | White Block on light-gray page, one plain line (`#333333`) explaining what will appear, one blue-gradient primary to add the first record. No clutter. |
| **Empty (filter no results)** | Calm single line in `dimGray #666666` (`該当するデータがありません` pattern); offer to clear the filter. |
| **Loading (table/page)** | Skeleton rows in `whiteSmoke #F7F7F7` / `cloudGrey #EFF1F4` at final dimensions; no layout shift on data arrival. |
| **Loading (inline action)** | In-button spinner; button keeps width and `4px` radius; label swaps to loading. |
| **Error (field)** | Border swaps to `venetianRed #D0021B`; 12px helper text in `#D0021B`: cause + fix, one sentence. |
| **Error (page/system)** | Error notice: bg `mistyRose #FFEEEB`, text `#D0021B`. States the condition plainly, offers retry. No apology-flood. |
| **Success** | Quiet — success notice (text `apple #65AB51`) or inline `保存しました`. The correct ledger is the reward. |
| **Disabled** | bg `linkWater #D4D8DD`, text `nobel #999999`, 1px `rgba(0,0,0,0.1)` border. Palette swap is the signal. |
| **Skeleton** | Gray blocks at exact final size; never on already-known financial figures; respects reduced-motion. |
| **Destructive confirm** | Modal with explicit consequence stated; the confirm action carries `venetianRed #D0021B`. Money actions are gated, never one-tap-destructive. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic Focus writing is not `focus-visible` treatment evidence; the text field's `focus: border #3b7de9` / Focus: border `royalBlue #3B7DE9` is recorded as that observed Focus, and it is not a color assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a secondary/cancel action, a settings affordance, an unavailable-action treatment, or a form field that does not commit in place — and the reason given is always that semantic one. `Primitive type` is attached only when the source YAML records that type. §4-only rows are marked `not in the token set`. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, attaching `Primitive type` only when YAML records it, and the refusal to treat this as a complete state-coverage claim, are a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation. This is not a complete state-coverage claim.

### Button sizes (shared)

Source §4 **Sizes** (not YAML keys; they share numerals with `tokens.spacing`):

- small: height `28px`, padding `0 16px`, font `14px`
- medium: height `32px`, padding `0 12px`, font `14px`
- large: height `42px`, padding `0 52px`, font `14px`

YAML `tokens.components.button-primary` records height `32px`, padding `0 12px` — the medium size. Button sizes (28/32/42px) keep medium+ comfortably tappable; large (42px) clears touch minimums. Recording the three sizes as source §4 writings rather than as YAML keys, pairing the YAML primary height and padding with the medium size, and leaving those shared numerals unmerged from `tokens.spacing`, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

### Primary

- Role: The single primary action per screen (Save / Submit)
- Primitive type: `button` · Kind: interactive
- Background: YAML `linear-gradient(to bottom,#3b7de9,#0054ac)` · §4 `linear-gradient(to bottom, royalBlue #3B7DE9, cobalt #0054AC 100%)`
- Text: `#ffffff` / `#FFFFFF`
- Border: YAML `1px solid rgba(0,0,0,0.15)` · §4 `1px solid rgba(0, 0, 0, 0.15)`
- Radius: `4px`
- Height: `32px` (medium)
- Padding: `0 12px` (medium)
- Font: `14px / 400`
- Icon color: `#FFFFFF`
- States: YAML `hover gradient flips, active 0 0 2px rgba(212,216,221,0.3)`
- Hover: YAML `hover gradient flips` · §4 `linear-gradient(to bottom, cobalt #0054AC, royalBlue #3B7DE9)` (gradient flips)
- Active: YAML `active 0 0 2px rgba(212,216,221,0.3)` · §4 `box-shadow: 0 0 2px rgba(212, 216, 221, 0.3)`
- Token-set path: `tokens.components.button-primary`
- Token-set use: `Single primary action per screen`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web commit control; gradient-flip treatment recorded |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | Unavailable treatment is the Disabled button record |
| loading | applicable | Save / Submit is an in-place commit; §14 in-button spinner |
| error | applicable | A failed save or submit can be reported on this control; visual treatment omitted |
| success | applicable | A completed save can be reported on this control (`保存しました`); visual treatment omitted |

### Default (Secondary)

- Role: Secondary / cancel actions
- Primitive type: `button` · Kind: interactive
- Background: YAML `linear-gradient(to bottom,#ffffff,#ecf2fd)` · §4 `linear-gradient(to bottom, white #FFFFFF, solitude #ECF2FD)`
- Text: `#333333` / `nightRider #333333`
- Border: YAML `1px solid #d4d8dd` · §4 `1px solid linkWater #D4D8DD`
- Radius: `4px`
- Font: `14px / 400`
- Icon color: `silver #BEBEBE`
- Hover: YAML `hover gradient flips` · §4 `linear-gradient(to bottom, solitude #ECF2FD, white #FFFFFF)` (gradient flips)
- Token-set path: `tokens.components.button-default`
- Token-set use: `Secondary / cancel actions`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; gradient-flip treatment recorded |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A secondary action can be gated; visual treatment omitted |
| loading | not-applicable | Secondary / cancel actions; it commits no operation in place |
| error | not-applicable | Secondary / cancel actions; it commits no operation in place |
| success | not-applicable | Secondary / cancel actions; it commits no operation in place |

### Danger

- Role: Destructive actions (delete entry, void invoice) — danger lives in the text/icon, not a red fill
- Primitive type: `button` · Kind: interactive
- Background: YAML `linear-gradient(to bottom,#ffffff,#ecf2fd)` · §4 `linear-gradient(to bottom, white #FFFFFF, solitude #ECF2FD)`
- Text: `#d0021b` / `venetianRed #D0021B`
- Border: YAML `1px solid #d4d8dd` · §4 `1px solid linkWater #D4D8DD`
- Radius: `4px`
- Icon color: `venetianRed #D0021B`
- Token-set path: `tokens.components.button-danger`
- Token-set use: `Destructive actions, danger in text not fill`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destructive control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable destructive control; visual treatment omitted |
| disabled | applicable | A destructive action can be gated; visual treatment omitted |
| loading | applicable | Delete entry / void invoice is an in-place commit; visual treatment omitted |
| error | applicable | A failed destructive commit can be reported on this control; visual treatment omitted |
| success | applicable | A completed destructive commit can be reported on this control; visual treatment omitted |

### Settings

- Role: Configuration / settings affordances
- Kind: interactive
- not in the token set
- Background: `linear-gradient(to bottom, white #FFFFFF, solitude #ECF2FD)`
- Text: `royalBlue #3B7DE9`
- Border: `1px solid linkWater #D4D8DD`
- Radius: `4px`
- Icon color: `royalBlue #3B7DE9`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web settings control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable settings control; visual treatment omitted |
| disabled | applicable | A settings affordance can be gated; visual treatment omitted |
| loading | not-applicable | Configuration / settings affordance; it commits no operation in place |
| error | not-applicable | Configuration / settings affordance; it commits no operation in place |
| success | not-applicable | Configuration / settings affordance; it commits no operation in place |

### Disabled

- Role: Unavailable actions
- Primitive type: `button` · Kind: interactive
- Background: `#d4d8dd` / `linkWater #D4D8DD`
- Text: `#999999` / `nobel #999999`
- Border: YAML `1px solid rgba(0,0,0,0.1)` · §4 `1px solid rgba(0, 0, 0, 0.1)`
- Radius: `4px`
- Token-set path: `tokens.components.button-disabled`
- Token-set use: `Unavailable actions`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | This record *is* the disabled treatment |
| hover | not-applicable | Unavailable action; hover is not a meaningful state for a control the source records as unavailable |
| focus-visible | applicable | Keyboard-reachable unavailable control; visual treatment omitted |
| disabled | applicable | This record *is* the disabled treatment |
| loading | not-applicable | Unavailable-action treatment; it does not run an in-place operation |
| error | not-applicable | Unavailable-action treatment; it does not run an in-place operation |
| success | not-applicable | Unavailable-action treatment; it does not run an in-place operation |

### Block

- Role: Content panel / card container; padding and width are composed per use
- Primitive type: `card` · Kind: non-interactive
- Reason: content panel / card container; it is not a control
- Background: `#ffffff` / `white #FFFFFF`
- Border: YAML `1px solid #d4d8dd` · §4 `1px solid linkWater #D4D8DD`
- Radius: `4px`
- Token-set path: `tokens.components.block`
- Token-set use: `Content panel / card container`

### Text Field

- Role: Form fields
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff` / `#FFFFFF`
- Text: `#333333` / `nightRider #333333`
- Border: YAML `1px solid #d4d8dd` · §4 `1px solid linkWater #D4D8DD`
- Radius: `4px`
- Observed Focus (generic, not `focus-visible`): YAML `focus: "border #3b7de9"` · §4 Focus: border `royalBlue #3B7DE9`
- Token-set path: `tokens.components.input`
- Token-set use: `Form fields`
- Source HTML comment: inferred from theme border/primary tokens — the workhorse of a cloud-accounting UI
- Helper text 12px `#999999` (source §9 form example).

**Error Field** (source §4, not in the token set; inferred from status tokens):

- Border: `venetianRed #D0021B`
- Helper text: `venetianRed #D0021B`, `small` (12px)
- Use: Validation failure

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web form field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable form field; visual treatment omitted. Generic Focus is a different evidence class |
| disabled | applicable | A form field can be gated; visual treatment omitted |
| loading | not-applicable | Form field; it does not commit an operation in place |
| error | applicable | Error Field treatment recorded above |
| success | not-applicable | Success is reported via Success Notice / `保存しました`, not on the field |

### Error Notice

- Role: Error / danger banners
- Primitive type: `card` · Kind: non-interactive
- Reason: status banner; it is not a control
- Background: `#ffeeeb` / `mistyRose #FFEEEB` / `redSnow #FFF4F4`
- Text: `#d0021b` / `venetianRed #D0021B`
- Radius: `4px`
- Token-set path: `tokens.components.notice-error`
- Token-set use: `Error / danger banner`
- Source HTML comment: inferred from verified tokens

### Warning Notice

- Role: Caution banners
- Primitive type: `card` · Kind: non-interactive
- Reason: status banner; it is not a control
- Background: `#fcf8e3` / `cornSilk #FCF8E3`
- Text: `#8a6d3b` / `mcKenzie #8A6D3B`
- Token-set path: `tokens.components.notice-warning`
- Token-set use: `Caution banner`
- Source HTML comment: inferred from verified tokens

### Success Notice

- Role: Positive confirmation
- Kind: non-interactive
- Reason: status banner; it is not a control
- not in the token set
- Background: light green tint (no hex in the source; omitted)
- Text: `apple #65AB51`
- Use: Positive confirmation (inferred from status tokens)

### Transaction table

- Role: dense Cloud transaction table
- Kind: non-interactive
- Reason: data table; it is not a control
- not in the token set
- Source §9 example (A3 unique writing): dense rows at 13–14px, `#333333` text, alternating `#F7F7F7` row tint, 1px `#D4D8DD` separators, financial figures right-aligned tabular.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Density

Money Forward Cloud is **high-density** — accounting and invoicing screens are tables, ledgers, and forms. The fine type scale (10–14px workhorse range) and tight `4px` radius reflect that: every pixel of vertical space matters when a screen lists 200 transactions. White Blocks with 1px `linkWater` borders carve the dense canvas into legible regions. The 10–14px range, the `4px` radius, the 1px `linkWater` border, and the 200-transactions clause are recorded. Reading Cloud as high-density, and reading those values as reflecting that density, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

### Spacing & Structure

- App-shell: left navigation across Cloud modules + top header + dense main content
- Blocks (`4px` radius, 1px border) group related fields/data
- Light gray surfaces (`cloudGrey #EFF1F4`, `whiteSmoke #F7F7F7`) separate sections without heavy shadow
- Forms and tables are the central artifacts

### Responsive behavior

Source §8 table, kept as the source's own writing rather than as a live cross-viewport capture. Reading that table, and the Touch & Mobile bullets that follow, as source-stated intended behavior rather than as a captured cross-viewport pass is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation.

| Width | Behavior |
|---|---|
| Desktop | Full Cloud app shell: left module nav + header + wide dense tables shown in full |
| Tablet | Left nav collapses; tables gain horizontal scroll or column priority |
| Mobile | Single column; nav becomes a drawer; tables reflow toward stacked rows; ME (consumer) app is mobile-first |

### Touch & Mobile

- Button sizes (28/32/42px) keep medium+ comfortably tappable; large (42px) clears touch minimums
- Money Forward ME (the consumer budgeting app) is mobile-first; Cloud is desktop-first but responsive
- Financial figures keep tabular alignment across breakpoints

<!-- design-md:section content-locales -->
## 6. Content & Locales

Money Forward's voice is **clear, reassuring, and quietly empowering** — the brand's stated design stance is "User Focus," delivering work that moves users' lives and the world *forward* (the name is the thesis). In a category where users are anxious about money, taxes, and bookkeeping, the copy's job is to make the user feel *capable*, not *audited*. It writes in standard polite Japanese (丁寧語), plain and concrete, avoiding both intimidating accounting jargon and false cheerfulness. Numbers are sacred — figures, dates, and amounts are always exact and never softened. The consumer ME app voice is a touch warmer and more personal ("your money, your future"); the Cloud/business voice is a touch more professional. Both stay calm.

Characterizing that voice as clear, reassuring, and quietly empowering, reading the name as the thesis, and treating English beside a Japanese label as a reading aid rather than a replacement, is a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation. Quoted strings stay byte-exact.

| Context | Tone |
|---|---|
| Buttons | Short JP verb — `保存`, `登録`, `次へ`. Imperative-polite, no exclamation. |
| Form/field copy | Plain and concrete; explain what a figure means and what happens after submit. |
| Money & dates | Always exact, always formatted (`¥`, comma-grouped, era/Gregorian dates). Never approximate. |
| Empty states | Blameless; one line + one action. Never implies the user mismanaged anything. |
| Errors | State cause + fix in one calm sentence; one polite acknowledgment max, no apology-flood. |
| Success | Quiet confirmation (`保存しました`). The ledger being correct is the reward. |
| Consumer (ME) | Slightly warmer, future-facing ("お金の見える化") — empowerment, not anxiety. |
| Business (Cloud) | Slightly more formal/professional, efficiency-framed. |

**Forbidden patterns.** Hype superlatives (`業界No.1`, `革新的`), false cheer around money loss, exclamation-mark buttons, approximating any financial figure, emoji in product chrome, condescending "don't worry" copy that hides what's actually happening, and jargon walls that make a non-accountant feel excluded.

**Voice samples.**

- `保存` / `登録` — primary action verbs. Illustrative: standard MF-register JP form verbs; not quoted from a specific live screen.
- "User Focus" — MF Design's stated stance: deliver designs that move users' lives and the world forward. Verified: design.moneyforward.com positioning, WebFetch/live inspect 2026-05-19.
- The corporate mission frames MF around making money / money-management approachable and moving users "forward." Editorial paraphrase of corp.moneyforward.com positioning; not a verbatim quote.

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

- exact easing curve values for `ease-standard` / `ease-enter` / `ease-exit` (omitted as unsourced)
- Success Notice background hex (source writes "light green tint" without a hex)
- brief-supplied `#316AD6` as a literal token
