---
id: money-forward
name: Money Forward
country: JP
category: fintech
homepage: "https://moneyforward.com"
primary_color: "#3B7DE9"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=moneyforward.com&sz=128"
verified: "2026-05-19"
omd: "0.1"
ds:
  name: Money Forward Cloud UI
  url: "https://github.com/moneyforward/cloud-react-ui"
  type: system
  description: Money Forward's open-source React component library and theme tokens for the Money Forward Cloud business suite — buttons, forms, and a typed styled-components theme published on GitHub.
---

# Design System Inspiration of Money Forward

## 1. Visual Theme & Atmosphere

Money Forward (マネーフォワード) is the Japanese fintech that started as a personal household-budgeting app (Money Forward ME) and grew into a full business platform — cloud accounting, invoicing, payroll, and expense tools (Money Forward Cloud) plus financial-institution products (Money Forward X). Its design language carries the central tension of all serious fintech: it must feel **trustworthy enough to hold your money and your books, yet light enough that a non-accountant can use it**. The answer SmartHR-adjacent peers reach for is restraint, and Money Forward Cloud reaches for it too — a calm white canvas, a confident **blue** primary, warm-gray neutrals, and a danger red held in reserve for the moments that actually matter (deleting a ledger entry, voiding an invoice).

The signature primary is a **blue gradient** — `royalBlue #3B7DE9` lightening down to `cobalt #0054AC` — applied to the primary button, the one action the user should take on any given screen. This gradient-on-button treatment is a deliberate Money Forward Cloud fingerprint: where flatter design systems use a solid fill, MF Cloud's primary button reads as a subtly dimensional, polished blue pill (well, a `4px`-radius rectangle), signaling "press me, this is safe." Text is a warm dark gray (`nightRider #333333`), not pure black; secondary text drops to `nobel #999999`. The whole palette is built from a hand-curated, plainly-named color list (aliceBlue, cobalt, royalBlue, venetianRed, nightRider, linkWater…) rather than a generative ramp — a small, opinionated set that keeps the product coherent across dozens of Cloud modules.

Typography leads with **Noto Sans JP** — the explicit first choice in the theme's font stack — backed by the platform-native chain (`-apple-system`, `Hiragino Sans`, `ヒラギノ角ゴ ProN W3`, `Meiryo`). The type scale is a fine-grained ladder from 10px to 24px, reflecting the data-dense reality of accounting tables. The radius is small and businesslike: components round at **`4px`**. Everything signals competence and care: this is software that touches your tax filing, and it dresses accordingly — clean, blue, legible, and never loud.

**Key Characteristics:**
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

## 2. Color Palette & Roles

Money Forward Cloud UI ships a hand-curated color object (plain English names) and maps it to component roles in a typed theme. Values below are transcribed from the open-source `cloud-react-ui` theme.

### Brand / Primary (blue)
- **royalBlue** (`#3B7DE9`): The primary brand blue — start of the primary-button gradient, the canonical "Money Forward blue." This is the reference `primary_color`.
- **cobalt** (`#0054AC`): Deep blue — end of the primary-button gradient, hover/pressed depth.
- **sanMarino** (`#5176AE`) / **steelBlue** (`#4772B3`) / **cornflowerBlue** (`#6594DA`): Supporting blue family for accents, links, secondary emphasis.
- **solitude** (`#ECF2FD`): Very light blue — default-button gradient bottom, subtle blue tint surface.
- **aliceBlue** (`#F5FAFF`) / **darkenAliceBlue** (`#EDF5FE`): Lightest blue tints for hover/selected rows.

### Text
- **nightRider** (`#333333`): Default text color — warm dark gray, never pure black.
- **nobel** (`#999999`): Notes / secondary / disabled text.
- **dimGray** (`#666666`): Mid-gray supporting text.
- **white** (`#FFFFFF`): Text on the blue primary, page surface.

### Status
- **venetianRed** (`#D0021B`): Danger / destructive / error text and accents. Held in reserve.
- **sunsetOrange** (`#EC4949`) / **salmon** (`#F57575`): Lighter error/alert tints.
- **apple** (`#65AB51`): Green for success/positive.
- **cornSilk** (`#FCF8E3`) / **mcKenzie** (`#8A6D3B`): Warning notice bg + text (warm yellow family).
- **mistyRose** (`#FFEEEB`) / **redSnow** (`#FFF4F4`) / **amour** (`#FAEFF0`): Error/danger tint backgrounds.

### Neutrals / Borders / Surfaces
- **linkWater** (`#D4D8DD`): Standard component border (buttons, blocks).
- **hawkesBlue** (`#D5DBE3`) / **darkenSolitude** (`#E1E5EB`): Border / divider variants.
- **cloudGrey** (`#EFF1F4`) / **whiteSmoke** (`#F7F7F7`) / **whisper** (`#EEEEEE`): Light gray surfaces, section backgrounds.
- **gainsboro** (`#D8D8D8`) / **silver** (`#BEBEBE`) / **darkGray** (`#AAAAAA`) / **veryRightGray** (`#CCCCCC`): Disabled / icon grays.
- **rhino** (`#424954`) / **vulcan** (`#32373F`) / **stormGrey** (`#787E8D`) / **lightSlateGrey** (`#7C8291`): Dark neutral text/chrome.

## 3. Typography Rules

### Font Stack
```
"Noto Sans JP", -apple-system, BlinkMacSystemFont, Helvetica, "Hiragino Sans", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", Arial, Meiryo, sans-serif
```
Noto Sans JP is the explicit lead, backed by the full platform-native Japanese chain. There is no custom brand webfont; the priority is crisp Japanese + alphanumeric rendering for financial data.

### Type Scale (text-size tokens)
| Token | Size | Typical Use |
|---|---|---|
| `xSmall` | `10px` | Fine print, dense table footnotes |
| `small` | `12px` | Captions, helper text |
| `middle` | `13px` | Secondary labels, table cells |
| `large` | `14px` | Body / button default |
| `xlarge` | `16px` | Emphasized body |
| `xxlarge` | `18px` | Subheadings |
| `xxxLarge` | `20px` | Section headings |
| `xxxxLarge` | `24px` | Page headings |

### Weights
- **normal** and **bold** only — a two-weight system. Hierarchy comes from size + color, not many intermediate weights.

### Conventions
- **`large` (14px) is the working default** for body and buttons — sized for dense accounting UIs, not editorial reading.
- **Tabular financial data** stays legible at 12–14px; the fine `xSmall`/`small` tiers handle footnotes.
- **Bold is for emphasis and headings**, not decoration.
- Never hardcode a single Latin font — always carry the Noto Sans JP + native chain.

## 4. Component Stylings

### Buttons

**Primary**
- Background: `linear-gradient(to bottom, royalBlue #3B7DE9, cobalt #0054AC 100%)`
- Text: `#FFFFFF`
- Border: `1px solid rgba(0, 0, 0, 0.15)`
- Radius: `4px`
- Icon color: `#FFFFFF`
- Hover: `linear-gradient(to bottom, cobalt #0054AC, royalBlue #3B7DE9)` (gradient flips)
- Active: `box-shadow: 0 0 2px rgba(212, 216, 221, 0.3)`
- Use: The single primary action per screen (Save / Submit)

**Default (Secondary)**
- Background: `linear-gradient(to bottom, white #FFFFFF, solitude #ECF2FD)`
- Text: `nightRider #333333`
- Border: `1px solid linkWater #D4D8DD`
- Radius: `4px`
- Icon color: `silver #BEBEBE`
- Hover: `linear-gradient(to bottom, solitude #ECF2FD, white #FFFFFF)` (gradient flips)
- Use: Secondary / cancel actions

**Danger**
- Background: `linear-gradient(to bottom, white #FFFFFF, solitude #ECF2FD)`
- Text: `venetianRed #D0021B`
- Border: `1px solid linkWater #D4D8DD`
- Radius: `4px`
- Icon color: `venetianRed #D0021B`
- Use: Destructive actions (delete entry, void invoice) — danger lives in the text/icon, not a red fill

**Settings**
- Background: `linear-gradient(to bottom, white #FFFFFF, solitude #ECF2FD)`
- Text: `royalBlue #3B7DE9`
- Border: `1px solid linkWater #D4D8DD`
- Radius: `4px`
- Icon color: `royalBlue #3B7DE9`
- Use: Configuration / settings affordances

**Disabled**
- Background: `linkWater #D4D8DD`
- Text: `nobel #999999`
- Border: `1px solid rgba(0, 0, 0, 0.1)`
- Radius: `4px`
- Use: Unavailable actions

**Sizes**
- small: height `28px`, padding `0 16px`, font `14px`
- medium: height `32px`, padding `0 12px`, font `14px`
- large: height `42px`, padding `0 52px`, font `14px`

### Blocks / Cards

**Block**
- Background: `white #FFFFFF`
- Border: `1px solid linkWater #D4D8DD`
- Radius: `4px`
- Use: Content panel / card container; padding and width are composed per use

### Inputs

**Text Field**
- Background: `#FFFFFF`
- Text: `nightRider #333333`
- Border: `1px solid linkWater #D4D8DD`
- Radius: `4px`
- Focus: border `royalBlue #3B7DE9`
- Use: Form fields (inferred from theme border/primary tokens — the workhorse of a cloud-accounting UI)

**Error Field**
- Border: `venetianRed #D0021B`
- Helper text: `venetianRed #D0021B`, `small` (12px)
- Use: Validation failure (inferred from status tokens)

### Notices

**Error Notice**
- Background: `mistyRose #FFEEEB` / `redSnow #FFF4F4`
- Text: `venetianRed #D0021B`
- Radius: `4px`
- Use: Error / danger banners

**Warning Notice**
- Background: `cornSilk #FCF8E3`
- Text: `mcKenzie #8A6D3B`
- Use: Caution banners

**Success Notice**
- Background: light green tint
- Text: `apple #65AB51`
- Use: Positive confirmation (inferred from status tokens)

## 5. Layout Principles

### Density
Money Forward Cloud is **high-density** — accounting and invoicing screens are tables, ledgers, and forms. The fine type scale (10–14px workhorse range) and tight `4px` radius reflect that: every pixel of vertical space matters when a screen lists 200 transactions. White Blocks with 1px `linkWater` borders carve the dense canvas into legible regions.

### Spacing & Structure
- App-shell: left navigation across Cloud modules + top header + dense main content
- Blocks (`4px` radius, 1px border) group related fields/data
- Light gray surfaces (`cloudGrey #EFF1F4`, `whiteSmoke #F7F7F7`) separate sections without heavy shadow
- Forms and tables are the central artifacts

## 6. Depth & Elevation

Elevation is **subtle and gradient-led** rather than shadow-heavy. The most distinctive depth cue is the **button gradient** (white→solitude default, royalBlue→cobalt primary), which gives controls gentle dimensionality without a drop shadow.

- Buttons: gradient fill + 1px border; pressed state uses a faint `box-shadow: 0 0 2px rgba(212, 216, 221, 0.3)`
- Blocks/cards: flat — 1px `linkWater` border + light gray page bg separates them
- Modals/dropdowns: light shadow + scrim
- Z-index governed by the theme's `zIndex` scale (e.g. backdrop `200`)

## 7. Do's and Don'ts

- **DO** use the blue gradient (`#3B7DE9` → `#0054AC`) for the one primary action per screen. **DON'T** make it a flat solid — the subtle gradient is the MF Cloud signature.
- **DO** keep danger in the *text/icon* (`venetianRed #D0021B`) on a neutral button. **DON'T** use a solid red fill for delete unless it's a truly catastrophic confirmation — MF holds red in reserve.
- **DO** use warm dark gray `#333333` for text. **DON'T** use pure `#000000`.
- **DO** lead with Noto Sans JP and carry the native JP fallback chain. **DON'T** hardcode a Latin-only font.
- **DO** use the `4px` radius everywhere. **DON'T** introduce 8px+ rounded corners — MF Cloud is businesslike-square.
- **DO** pick from the curated named palette (royalBlue, cobalt, linkWater, solitude…). **DON'T** invent new hexes — the small palette is deliberate.
- **DO** respect the dense type scale (14px working default). **DON'T** inflate body to 16–18px — accounting tables need the density.
- **DO** use gradients on buttons for gentle dimensionality. **DON'T** add drop shadows to flatten controls — the gradient is the depth.

## 8. Responsive Behavior

| Width | Behavior |
|---|---|
| Desktop | Full Cloud app shell: left module nav + header + wide dense tables shown in full |
| Tablet | Left nav collapses; tables gain horizontal scroll or column priority |
| Mobile | Single column; nav becomes a drawer; tables reflow toward stacked rows; ME (consumer) app is mobile-first |

### Touch & Mobile
- Button sizes (28/32/42px) keep medium+ comfortably tappable; large (42px) clears touch minimums
- Money Forward ME (the consumer budgeting app) is mobile-first; Cloud is desktop-first but responsive
- Financial figures keep tabular alignment across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary (gradient): `royalBlue #3B7DE9` → `cobalt #0054AC`
- Text: `nightRider #333333`; secondary `nobel #999999` / `dimGray #666666`
- Danger: `venetianRed #D0021B`
- Border: `linkWater #D4D8DD`; light surface `solitude #ECF2FD` / `cloudGrey #EFF1F4`
- Success `apple #65AB51` / Warning `cornSilk #FCF8E3` bg + `mcKenzie #8A6D3B`
- Radius: `4px` everywhere

### Example Component Prompts
- "Create a Money Forward Cloud primary button: `linear-gradient(to bottom, #3B7DE9, #0054AC)` bg, white text, 1px `rgba(0,0,0,0.15)` border, `4px` radius, 14px text, height 32px, padding `0 12px`. Hover: flip the gradient. Active: `0 0 2px rgba(212,216,221,0.3)` shadow."
- "Build a MF Cloud default button: `linear-gradient(to bottom, #FFFFFF, #ECF2FD)`, `#333333` text, 1px `#D4D8DD` border, `4px` radius. Danger variant: same shape but `#D0021B` text + icon."
- "Design a MF Cloud Block: white bg, 1px `#D4D8DD` border, `4px` radius, holding a form. Labels at 13px, inputs with `#D4D8DD` border focusing to `#3B7DE9`, helper text 12px `#999999`."
- "Create a MF Cloud transaction table: dense rows at 13–14px, `#333333` text, alternating `#F7F7F7` row tint, 1px `#D4D8DD` separators, financial figures right-aligned tabular."

### Iteration Guide
1. **Blue gradient primary (`#3B7DE9`→`#0054AC`)** — one per screen, and keep the gradient.
2. **Text is `#333333`**, not black. Secondary `#999999`.
3. **Danger lives in text/icon** (`#D0021B`) on a neutral button — red fill is reserved.
4. **Noto Sans JP first**, full native fallback chain.
5. **`4px` radius everywhere** — businesslike, never 8px+.
6. **Dense type scale** — 14px working default; don't inflate.
7. **Curated palette only** — royalBlue/cobalt/linkWater/solitude; no ad-hoc hexes.
8. **Gradients carry depth**, not drop shadows.

---

## 10. Voice & Tone

Money Forward's voice is **clear, reassuring, and quietly empowering** — the brand's stated design stance is "User Focus," delivering work that moves users' lives and the world *forward* (the name is the thesis). In a category where users are anxious about money, taxes, and bookkeeping, the copy's job is to make the user feel *capable*, not *audited*. It writes in standard polite Japanese (丁寧語), plain and concrete, avoiding both intimidating accounting jargon and false cheerfulness. Numbers are sacred — figures, dates, and amounts are always exact and never softened. The consumer ME app voice is a touch warmer and more personal ("your money, your future"); the Cloud/business voice is a touch more professional. Both stay calm.

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
- `保存` / `登録` — primary action verbs. <!-- illustrative: standard MF-register JP form verbs; not quoted from a specific live screen -->
- "User Focus" — MF Design's stated stance: deliver designs that move users' lives and the world forward. <!-- verified: design.moneyforward.com positioning, WebFetch/live inspect 2026-05-19 -->
- The corporate mission frames MF around making money / money-management approachable and moving users "forward." <!-- editorial paraphrase of corp.moneyforward.com positioning; not a verbatim quote -->

## 11. Brand Narrative

Money Forward, Inc. was founded in Japan with a deceptively simple idea: most people and most small businesses have a fragmented, anxious, opaque relationship with their own money. Bank balances, credit cards, e-money, and accounts live in separate silos; bookkeeping is a chore done in spreadsheets or on paper; and the cost of *not knowing where your money is* is paid in stress. Money Forward's founding product, **Money Forward ME**, attacked the consumer side — automatically aggregating accounts into one view so an individual could finally *see* their money (お金の見える化, "making money visible"). From there the company built **Money Forward Cloud** — accounting, invoicing, payroll, expenses for businesses — and **Money Forward X**, embedded-finance products for financial institutions. <!-- source: corp.moneyforward.com + moneyforward.com product structure, general public knowledge -->

The design language flows from that mission of *visibility and forward motion*. **One**, money must always be shown exactly and clearly — hence the dense, legible type scale, the tabular discipline, the warm-gray-on-white calm that lets figures be the loudest thing on screen. **Two**, the product must feel trustworthy — hence the confident blue primary, the restraint in using danger red, the businesslike `4px` radius, and the absence of anything flashy or gimmicky around the user's finances. **Three**, it must feel *empowering*, not intimidating — hence plain-language copy and a UI that a small-business owner who is *not* an accountant can actually operate.

Money Forward's design organization publishes openly: the corporate design site (`design.moneyforward.com`) articulates a **"User Focus"** stance — designing things that "move users' lives and the world forward," with explicit attention to accessibility for people with visual impairments — and the engineering org open-sourced the **Money Forward Cloud UI** component library (`cloud-react-ui`) on GitHub, where the blue-gradient primary, the curated palette, and the typed theme all live in public. The system is, like the company, methodical and trustworthy by design.

## 12. Principles

1. **Make money visible, exactly.** Figures are the product; the UI exists to display them clearly. *UI implication:* Dense legible type, tabular alignment, warm-gray calm so amounts are the loudest element. Never approximate or decoratively obscure a number.

2. **Trust through restraint.** A fintech that holds your books cannot be flashy. *UI implication:* Confident blue primary, danger red held in reserve, businesslike `4px` radius, gradients-not-gimmicks. Competence is the aesthetic.

3. **Empower the non-expert.** Money Forward serves individuals and SME owners, not accountants. *UI implication:* Plain-language labels and helper copy; explain what a figure means; never hide behind jargon. A first-time user should be able to complete the task.

4. **User Focus — move lives forward.** The stated design stance: design that improves the user's life and "moves the world forward." *UI implication:* Optimize for the user's actual goal (see my money, file this invoice), not for engagement metrics or visual flair. Accessibility (including for visual impairments) is part of this commitment.

5. **One coherent product across many modules.** ME, Cloud, and X span very different surfaces. *UI implication:* The shared token theme + curated palette + `cloud-react-ui` components keep every module recognizably Money Forward. Don't fork the palette per team.

## 13. Personas

*Personas are fictional archetypes informed by Money Forward's publicly-described user base (Japanese individuals and SME owners/finance staff), not real individuals.*

**鈴木 大輔 (Daisuke Suzuki), 41, Tokyo.** Owner of a 12-person design studio. Uses Money Forward Cloud for accounting and invoicing because he is *not* an accountant and needs the software to be obvious. Lives in the invoice and expense screens at month-end. Trusts MF because the figures always reconcile and the danger actions are clearly gated.

**伊藤 さやか (Sayaka Ito), 29, Fukuoka.** Salaried worker who uses Money Forward ME on her phone to aggregate her bank, credit card, and e-money into one view. Checks it on her commute. Wants her money *visible* and her future plannable; gets anxious when a finance app is cluttered or hides fees.

**渡辺 経理 (Kei Watanabe), 35, Osaka.** Finance/accounting staffer at a mid-size company. Power user of Money Forward Cloud's payroll and expense modules. Cares about throughput, exact figures, and audit-trail clarity. Will tolerate a dense UI; will not tolerate an ambiguous one near money.

## 14. States

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

## 15. Motion & Easing

Money Forward's motion is **restrained and confidence-building**. A product that touches taxes and ledgers earns trust through predictability; motion clarifies state, it does not entertain.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle/checkbox commits, selection |
| `motion-fast` | 150ms | Button hover gradient flip, focus ring, small reveals |
| `motion-standard` | 250ms | Dropdown open, accordion, tab switch |
| `motion-modal` | 300ms | Modal/dialog enter-exit |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | The default |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Things arriving (dropdowns, modals) |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Dismissals |

**Spring stance.** Spring / overshoot easing is **forbidden** on Money Forward product surfaces. Bouncy motion undermines the calm-competence register a fintech needs. Confidence about money is the goal, not delight.

**Signature motions.**
1. **Primary button hover.** The blue gradient *flips* (`#3B7DE9`→`#0054AC` becomes `#0054AC`→`#3B7DE9`) over `motion-fast / ease-standard` — a subtle, dimensional press affordance, no scale or bounce.
2. **Default button hover.** Same gradient-flip treatment on the white→solitude default button.
3. **Modal enter.** Backdrop scrim fades in (`zIndex 200`) over `motion-modal / ease-enter`; dialog appears with opacity + slight translate. Controlled.
4. **Row/expand reveal.** Table rows and accordions expand over `motion-standard / ease-enter`; data lands without layout jump.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` collapse to `motion-instant`; gradient flips become immediate; modals appear without translate. Accessibility outranks polish.

<!--
OmD v0.1 Sources — Money Forward

Tier 1 (official open-source DS + live, 2026-05-19):
- github.com/moneyforward/cloud-react-ui src/theme/color.ts — the full curated palette
  (royalBlue #3B7DE9, cobalt #0054AC, venetianRed #D0021B, nightRider #333333, nobel #999999,
  linkWater #D4D8DD, solitude #ECF2FD, apple #65AB51, cornSilk #FCF8E3, etc.) transcribed
  verbatim via gh api.
- cloud-react-ui src/theme/theme.ts — button variants (primary gradient royalBlue→cobalt,
  default white→solitude, danger venetianRed text, settings royalBlue, disabled linkWater),
  4px radius, button sizes 28/32/42, block 4px radius + linkWater border. Verbatim.
- cloud-react-ui src/theme/values.ts — font stack (Noto Sans JP-led + native JP chain),
  text-size scale 10/12/13/14/16/18/20/24, text colors nightRider/nobel. Verbatim.
- design.moneyforward.com (live inspect) — corporate design org; "User Focus" stance,
  dominant accent observed on the corporate/design-org site is an orange #ED7100 (see note).

Verified vs assumed:
- VERIFIED: entire color palette, button variants, radius, type scale, font stack — all from
  the open-source cloud-react-ui theme (authoritative Tier-1 DS for the Cloud product).
- NOTE / CONFLICT: the brief supplied #316AD6 (blue). The closest VERIFIED token is royalBlue
  #3B7DE9 (the primary-button gradient start), which is used as primary_color here. #316AD6 was
  not found as a literal token. Separately, the MF *corporate/brand* design-org site
  (design.moneyforward.com) leads with an ORANGE accent (#ED7100), reflecting a corporate brand
  layer distinct from the Cloud *product* blue. This file documents the Cloud product DS (blue),
  which is the surface most relevant to UI generation; the corporate-orange layer is noted here
  for completeness.
- INFERRED: input/notice component variants in §4 are reasonable mappings of verified tokens.
  Motion tokens (§15) follow the theme's zIndex/gradient discipline but duration values are
  illustrative. Voice samples marked illustrative are not verbatim live strings.
- Personas (§13) are fictional archetypes of MF's described individual + SME user base.
-->

---

**Verified:** 2026-05-19 (omd:add-reference — JP batch)
**Tier 1 sources:** github.com/moneyforward/cloud-react-ui (open-source theme — royalBlue #3B7DE9 → cobalt #0054AC primary gradient, venetianRed #D0021B danger, nightRider #333333 text, linkWater #D4D8DD border, 4px radius, button sizes 28/32/42, Noto Sans JP font stack, 10–24px type scale); design.moneyforward.com (live — "User Focus" stance, corporate-orange #ED7100 brand layer).
**Tier 2 sources:** getdesign.md / refero — not separately fetched (official open-source DS supersedes).
**Conflicts unresolved:** Brief-supplied #316AD6 not found as a literal token; using verified Cloud-product primary royalBlue #3B7DE9. Corporate brand layer (design.moneyforward.com) uses orange #ED7100 — documented in source note, product-blue treated as canonical for UI generation.
