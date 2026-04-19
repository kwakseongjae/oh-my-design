---
omd: 0.1
brand: Toss
---

# Design System Inspiration of Toss (토스)

## 1. Visual Theme & Atmosphere

Toss is Korea's fintech super-app that redefined what a financial interface could feel like -- calm, confident, and deceptively simple. The page opens on a clean white canvas (`#ffffff`) with deep charcoal headings (`#191f28`) and a signature blue (`#3182f6`) that functions as the universal interactive accent. This isn't the cold, institutional blue of legacy banking; it's a bright, optimistic cerulean that says "your money is in good hands, and we'll make it easy."

The custom **Toss Product Sans** typeface is the quiet hero. Developed with Korean type foundries Sandoll and Leedotype, it was purpose-built for financial contexts: numerals and Latin characters are optically weighted to match Korean hangul proportions, and financial symbols (%, commas, ±) are given enhanced legibility. The font ships in 8 weights (300-950) but the UI exercises restraint, primarily using 400, 600, and 700. The system supports both variable-width numerals for display and fixed-width (tabular) numerals for data tables -- context determines mode.

What defines Toss visually is its OKLCH-based color system, rebuilt from scratch for perceptual uniformity. Colors at the same scale level appear equally bright regardless of hue, enabling consistent semantic coloring where blue-500, red-500, and green-500 carry identical visual weight without manual tuning.

**Key Characteristics:**
- Toss Blue (`#3182f6`) as the primary interactive color -- bright, optimistic, trustworthy
- Toss Product Sans with Korean-Latin optical balancing and tabular numeral support
- OKLCH color space for perceptual uniformity across all hue scales
- 10-step grey scale (grey50-grey900) with warm undertones
- Three-tier token architecture: primitive → semantic → component
- Minimal shadow system -- trust comes from clarity, not depth
- Mobile-first at 375px design baseline with accessibility scaling up to 310%

## 2. Color Palette & Roles

### Primary
- **Toss Blue** (`#3182f6`): `blue500`. Primary interactive color -- CTAs, links, active states, selection highlights. The workhorse of every tappable element.
- **Blue Hover** (`#2272eb`): `blue600`. Hover/pressed state for blue500 elements.
- **Blue Light** (`#e8f3ff`): `blue50`. Informational backgrounds, subtle blue-tinted surfaces.
- **Pure White** (`#ffffff`): `background`, `layeredBackground`. Page background, card surfaces.
- **Dark Charcoal** (`#191f28`): `grey900`. Primary heading color, strongest text. Warm near-black with subtle blue undertone.

### Brand (Logo/Marketing Only)
- **Brand Blue** (`#0064FF`): Official Toss brand color (Pantone 2175 C). Logo and marketing materials only -- distinct from UI blue500.
- **Brand Gray** (`#202632`): Official secondary brand color (Pantone 433 C). Corporate contexts.

### Semantic
- **Error Red** (`#f04452`): `red500`. Error states, destructive actions, negative financial indicators.
- **Success Green** (`#03b26c`): `green500`. Positive financial indicators, confirmations.
- **Warning Orange** (`#fe9800`): `orange500`. Pending states, attention-needed indicators.
- **Caution Yellow** (`#ffc342`): `yellow500`. Soft warnings, highlight moments.
- **Info Teal** (`#18a5a5`): `teal500`. Informational accent, alternative categorization.
- **Premium Purple** (`#a234c7`): `purple500`. Premium features, special offers.

### Neutral Scale
- **Grey 50** (`#f9fafb`): Lightest gray, `greyBackground` surface.
- **Grey 100** (`#f2f4f6`): Secondary background, card fills, disabled surfaces.
- **Grey 200** (`#e5e8eb`): Default border color, dividers, input backgrounds.
- **Grey 400** (`#b0b8c1`): Placeholder text, disabled icon fills.
- **Grey 500** (`#8b95a1`): Caption text, secondary labels.
- **Grey 600** (`#6b7684`): Body text, descriptions, metadata.
- **Grey 700** (`#4e5968`): Emphasized body text, sub-headings.
- **Grey 800** (`#333d4b`): Strong labels, navigation text.

### Surface & Borders
- **Border Default**: `#e5e8eb` (grey200). Standard card borders, input borders, dividers.
- **Border Strong**: `#d1d6db` (grey300). Emphasized borders, active input outlines.
- **Background Float**: `#ffffff`. `floatBackground`. Floating elements -- tooltips, dropdowns.
- **Overlay Scrim**: `rgba(2,9,19,0.5)` to `rgba(2,9,19,0.91)`. `greyOpacity` scale. Blue-tinted dark overlays.

## 3. Typography Rules

### Font Family
- **Primary**: `"Toss Product Sans", "Tossface", "SF Pro KR", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Basier Square", "Apple SD Gothic Neo", Roboto, "Noto Sans KR", sans-serif`
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace`
- **Emoji**: `Tossface` -- Toss's custom emoji font (3500+ emojis, open-source on GitHub)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Toss Product Sans | 30px | 700 | 40px (1.33) | normal | Splash screens, hero moments |
| Display Large | Toss Product Sans | 26px | 700 | 36px (1.38) | normal | Section headers, key metrics |
| Heading Large | Toss Product Sans | 22px | 700 | 30px (1.36) | normal | Feature titles, modal headers |
| Heading | Toss Product Sans | 20px | 600 | 28px (1.40) | normal | Card headings, sub-sections |
| Subtitle | Toss Product Sans | 16px | 600 | 24px (1.50) | normal | Navigation titles, list headers |
| Body Large | Toss Product Sans | 16px | 400 | 24px (1.50) | normal | Descriptions, explanations |
| Body | Toss Product Sans | 14px | 400 | 22px (1.57) | normal | Standard reading text |
| Body Small | Toss Product Sans | 13px | 400 | 20px (1.54) | normal | Secondary information |
| Caption | Toss Product Sans | 12px | 400 | 18px (1.50) | normal | Timestamps, fine print |
| Number Display | Toss Product Sans | 30px+ | 700 | tight | normal | Financial amounts -- tabular nums |

### Principles
- **Eight weights, three used**: Ships 300-950, but UI uses 400 (body), 600 (emphasis), 700 (headings). Restraint over variety.
- **Dual numeral modes**: Variable-width for display, fixed-width (tabular) for financial tables and stock tickers. Context determines mode.
- **Korean-Latin optical balance**: Korean characters and Latin/numerals are independently weighted so mixed text looks harmonious without manual kerning.
- **Financial symbol optimization**: %, comma separators, ±, currency symbols, and directional arrows given enhanced legibility at small sizes.

## 4. Component Stylings

### Buttons

**Primary (Fill)**
- Background: `#3182f6` (blue500)
- Text: `#ffffff`
- Radius: `var(--button-border-radius)` (typically 8px-12px)
- Font: 16px weight 600
- Pressed: dimmed overlay (opacity reduction)
- Loading: 3-dot animation replacing text
- Disabled: reduced opacity via `--button-disabled-opacity-color`
- Display modes: `inline` (auto-width), `block` (full-width with line break), `full` (fills parent)
- Sizes: `tiny`, `medium`, `large`, `big` (default)
- Colors: `primary`, `dark`, `danger`, `light`
- Use: Primary CTAs ("송금하기", "확인")

**Secondary (Weak)**
- Background: `#e8f3ff` (blue50) or `#f2f4f6` (grey100)
- Text: `#3182f6` (blue500) or `#191f28` (grey900)
- Use: Less prominent CTAs, secondary actions

**Dark**
- Background: `#191f28` (grey900)
- Text: `#ffffff`
- Use: Actions on light backgrounds where blue would be too playful

**Danger**
- Background: `#f04452` (red500)
- Text: `#ffffff`
- Use: Destructive actions, alert confirmations

### Cards & Containers
- Background: `#ffffff` (layeredBackground)
- Border: 1px solid `#e5e8eb` (grey200) or no border
- Radius: 12px (standard), 16px (featured), 8px (compact)
- Shadow: `0px 2px 8px rgba(0,0,0,0.08)` -- single-layer, minimal
- Financial cards: prominent number display with amount in 700 weight, currency label in 400

### Inputs & Forms
- Background: `#f2f4f6` (grey100) for contained variant
- Border: 1px solid `#e5e8eb`, focus: 2px solid `#3182f6`
- Radius: 8px
- Text: `#191f28`, Placeholder: `#b0b8c1` (grey400)
- Error border: `#f04452` (red500)
- Special: SplitTextField for OTP, SecureKeypad for financial input

### Navigation
- Bottom tab bar: white background, top border `#e5e8eb`
- Active: `#3182f6` icon + `#191f28` text, Inactive: `#b0b8c1` icon + `#8b95a1` text
- Top app bar: white, sticky, optional backdrop blur
- Segmented control for section switching

### Overlays
- Bottom Sheet: `#ffffff`, 16px top radius, managed via `overlay-kit`
- Dialog: centered modal, AlertDialog and ConfirmDialog variants
- Toast: floating notification, subtle shadow, auto-dismiss
- Tooltip: `#191f28` background, white text, arrow pointer

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
- Horizontal padding: 20px (slightly wider than typical 16px)
- Financial data grids: tighter 4px internal spacing

### Grid & Container
- Design baseline: 375px mobile width
- Content: full-width with 20px horizontal padding
- No explicit multi-column grid -- single-column, mobile-first
- Transaction lists: full-width rows with consistent left-align for amounts

### Whitespace Philosophy
- **Breathing room for money**: Financial numbers get extra surrounding space. A balance at 30px with 32px margins communicates security through spaciousness.
- **Progressive density**: Summary screens are spacious; detail/transaction screens are denser. The deeper you go, the more information-dense.
- **Grouped by function**: Send/receive/invest actions separated by 24px+ gaps; related data within a group uses 8-12px gaps.

### Border Radius Scale
- Compact (4px): Small badges, inline elements
- Standard (8px): Inputs, small buttons, compact cards
- Comfortable (12px): Standard cards, dialog corners
- Large (16px): Featured cards, bottom sheet top corners
- Pill (9999px): Toggle switches, floating chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline elements |
| Subtle (Level 1) | `0px 1px 3px rgba(0,0,0,0.06)` | Slight lift, list item separation |
| Standard (Level 2) | `0px 2px 8px rgba(0,0,0,0.08)` | Cards, content panels |
| Elevated (Level 3) | `0px 4px 12px rgba(0,0,0,0.12)` | Dropdowns, popovers, floating buttons |
| Modal (Level 4) | `0px 8px 24px rgba(0,0,0,0.16)` | Bottom sheets, dialogs, modals |

**Shadow Philosophy**: Toss keeps shadows minimal and neutral. In a financial app, visual noise undermines trust -- elevation is communicated through subtle opacity differences rather than dramatic depth. Pure black with low opacity creates clinical precision matching the fintech context. Where Stripe uses brand-colored shadows, Toss uses restraint as its brand statement.

### Blur Effects
- Menu components use backdrop blur for lightweight floating panels
- Navigation bar applies subtle blur on scroll for the sticky header

## 7. Do's and Don'ts

### Do
- Use Toss Blue (`#3182f6`) for all interactive elements -- links, buttons, toggles, selections
- Apply the full font stack with Korean fallbacks including Tossface emoji
- Use tabular (fixed-width) numerals for financial data and transaction amounts
- Use 700 weight for financial amounts and headings, 400 for body, 600 for emphasis
- Keep border-radius between 8px-16px for most elements
- Show positive changes in green (`#03b26c`), negative in red (`#f04452`)
- Use blue50 (`#e8f3ff`) for subtle informational backgrounds

### Don't
- Don't confuse Brand Blue (`#0064FF`) with UI Blue (`#3182f6`) -- brand is for marketing/logo only
- Don't use heavy shadows -- rely on background color layering, not depth
- Don't use bold (700) for body text -- reserved for headings and financial amounts
- Don't mix variable-width and tabular numerals in the same data context
- Don't use warm accent colors (orange, pink) for primary actions -- blue is the sole interactive hue
- Don't use border-radius > 16px except for pills/toggles
- Don't add decorative elements to financial data displays -- clarity is the aesthetic

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <480px | Full design fidelity, 375px baseline |
| Tablet | 480-768px | Expanded cards, optional side margins |
| Desktop (Web) | >768px | Centered column, max-width ~480px for mobile-web parity |

### Touch Targets
- Buttons: xlarge (~56px), large (~48px), medium (~40px), small (~36px)
- List items: minimum 52px row height for financial actions
- Keypad buttons: large targets (56-64px) for secure input

### Collapsing Strategy
- Desktop web mirrors mobile layout in a centered column
- Bottom sheet → modal dialog on larger screens
- Sticky bottom CTA bar with safe area insets on all devices
- Horizontal scrolling card carousels for product discovery

### Image Behavior
- Bank/service logos: 24-40px with consistent sizing within context
- Tossface emojis: inline at text size, display size for decorative use
- Charts/graphs: full-width, responsive, maintain aspect ratio

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Toss Blue (`#3182f6`)
- CTA Hover: Blue 600 (`#2272eb`)
- Background: Pure White (`#ffffff`)
- Background Surface: Light Gray (`#f2f4f6`)
- Heading text: Dark Charcoal (`#191f28`)
- Body text: Medium Gray (`#6b7684`)
- Caption text: Gray (`#8b95a1`)
- Placeholder: Soft Gray (`#b0b8c1`)
- Border: Gray 200 (`#e5e8eb`)
- Success/Positive: Green (`#03b26c`)
- Error/Negative: Red (`#f04452`)
- Warning: Orange (`#fe9800`)

### Example Component Prompts
- "Create a balance card: white bg, 12px radius, 20px padding. Balance label 14px weight 400, #8b95a1. Amount 30px weight 700, #191f28, tabular numerals. Currency '원' 20px weight 400. Shadow 0px 2px 8px rgba(0,0,0,0.08)."
- "Build a send-money button: #3182f6 bg, white text, 16px weight 600, min-height 56px, 12px radius, full-width. Pressed: overlay dim. Loading: 3-dot white animation."
- "Design a transaction row: full-width, 16px h-padding, 52px min-height. Left: 32px circle icon + name (14px weight 600, #191f28) + category (13px weight 400, #8b95a1). Right: amount (14px weight 600, #f04452 expense / #03b26c income)."
- "Create an OTP input: 6 boxes, each 48px wide, 56px tall, 8px radius, 1px border #e5e8eb. Active: 2px border #3182f6. Digit: 24px weight 700, centered, #191f28."
- "Design a bottom tab bar: white bg, top border 1px #e5e8eb. 4 tabs evenly spaced. Active: #3182f6 icon + #191f28 label 11px weight 500. Inactive: #b0b8c1 icon + #8b95a1 label. Tab height 56px with safe area."

### Iteration Guide
1. Always use the full Toss Product Sans font stack with Korean fallbacks
2. Primary interactive color is `#3182f6` (blue500) -- never `#0064FF` (brand blue)
3. Financial numbers: 700 weight, tabular numerals, right-aligned in lists
4. Grey scale has warm undertones: grey900 `#191f28`, grey50 `#f9fafb`
5. Border-radius: 8px inputs, 12px cards, 16px sheets, pill for toggles
6. Shadows are single-layer, pure black opacity, no colored tints
7. Mobile-first: design at 375px, 20px horizontal padding

---

## 10. Voice & Tone

Toss speaks like a friend who happens to be a fiduciary: calm, unhurried, zero jargon, positive statements without hedging. Balance is stated, not "approximately" anything. Korean is the primary voice — English UI strings are secondary translations, not parity. Sentences end in periods; buttons do not. No emoji in financial contexts. Tossface exists as brand decoration but is disallowed on money-handling screens.

| Context | Tone |
|---|---|
| CTAs | Imperative, short Korean verb form (`송금하기`, `확인`, `가입하기`) |
| Success toasts | Past-tense single sentence (`송금이 완료되었어요`). No emoji. |
| Error messages | Specific + blameless + actionable. Never `문제가 발생했습니다`. |
| Onboarding screens | Second-person, one idea per screen, no bullet lists. |
| Financial amounts | Bare numerals with comma separators, then currency unit. `1,240,000원`, never `₩1.24M`. |
| Empty states | Explain the *why* in one line, offer one action. Never `데이터가 없습니다`. |
| Legal / disclosure | Korean financial-regulation tone — formal `합니다` endings. Single exception to the casual voice. |

**Forbidden phrases.** `불편을 드려 죄송합니다`, `Oops`, `죄송하지만`, `약 ~원` (approximation on money), any sentence starting with `I'm sorry` in English strings. Rounded currency amounts (`약 120만원`) are forbidden on primary surfaces; exact numerals only.

## 11. Brand Narrative

Toss launched in 2015 as a single-feature money-transfer app in a Korean banking market dominated by legacy institutions — KB, Shinhan, Woori, Hana — each with institutional-indigo websites, 12-digit account numbers, Active-X plug-ins, and the presumption that handling money had to feel like filing taxes. The founding rejection was of that entire aesthetic vocabulary. The specific cerulean `#3182f6` was chosen because it was **not** the indigo of any incumbent bank. The optimism of the color was the whole thesis: money could feel light.

Toss is not a neo-bank. It's a super-app: one interface holds transfers, investments, credit scoring, insurance, brokerage, and lending. The design's job is to flatten that complexity into **one gesture per screen**. That requires extreme restraint — shadows are single-layer black, palette is blue-and-neutral, type is one family in three weights. Every ornamental move costs clarity, and clarity is the entire brand promise.

What Toss refuses: the institutional seriousness of legacy finance, the playfulness of consumer apps (no bright pink, no illustrations of cartoon piggy banks), the data-viz density of Bloomberg-style terminals. Toss occupies a narrow middle — calm but optimistic, dense with functionality but spacious in presentation.

## 12. Principles

1. **Breathing room for money.** Financial amounts get ≥1.5× the surrounding spacing of normal text. A balance at 30px with 32px margins is correct; the same balance at 16px margins looks cheap and therefore untrustworthy.
2. **Progressive density.** Summary screens are spacious; detail and transaction screens are dense. The deeper the user navigates, the more information per pixel — they've committed to the context and want facts.
3. **One action per screen.** If a screen has two primary buttons, it is two screens. Secondary actions are acceptable; two primaries are never acceptable.
4. **Blue is interaction, not decoration.** `#3182f6` appears only where the user can tap. It never decorates. Illustrations, ornaments, borders, and headers never use blue500 unless they are interactive surfaces.
5. **Restraint communicates trust.** Shadows are single-layer, pure black, low opacity. No colored shadows, no multi-layer elevation stacks. In finance, visual noise is credibility tax.
6. **Korean and Latin are co-equal.** Never assume one is primary. Typography stacks, optical weights, and tabular numerals all assume both scripts render simultaneously in the same line.
7. **Numbers are typography.** Financial amounts use 700 weight and tabular numerals with the same care as display headings. Amounts never inherit body-text weight.
8. **Negative space is a brand asset.** If reducing padding would fit more on screen, the answer is another screen, not tighter packing.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Korean fintech user segments, not individual people.*

**정민 (Jeongmin), 28, Seoul.** Software engineer at a mid-size startup. Opens Toss 2–3 times a day — morning subway, post-lunch balance check, evening transfer to a flatmate. Expects the app to open directly to the account screen and paint in under 1s. If she has to tap twice to see her money, she's already irritated. Uses both Korean and English on-device; reads financial English natively but prefers Korean UI for speed.

**이선생님 (Mr. Lee), 54, Busan.** Runs a three-person machining shop. His daughter set up Toss for him two years ago. Primary use: transferring to suppliers and receiving invoice payments. Needs one-tap repeat transfer — he has about 12 regular counterparties. Distrusts anything that looks like an advertisement. Would uninstall the app before tapping a promoted banner. Reads Korean only; English strings on product surfaces are invisible to him. Values receipts and transaction history — never deletes them.

**예은 (Yeeun), 21, Daegu.** University student, third year, Economics. Toss is her primary banking app — she opened her first account through it, and has never touched a legacy bank's web interface except under duress. Expects Toss Blue to be "banking blue." If another financial app uses cerulean, she assumes it's imitating Toss. Sends ₩5,000–₩30,000 amounts constantly (splitting bills, paying back friends). Treats the app like a messaging app with money attached.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | Single paragraph of `grey700` body text explaining *why* the screen is empty (`아직 거래내역이 없어요`), plus one suggested action as a secondary button (blue50 bg, blue500 text). Never an illustration. Never `데이터가 없습니다`. |
| **Empty (filter cleared)** | Single line of `grey500` caption (`조건에 맞는 결과가 없어요`). No button — user resets the filter themselves. |
| **Loading (first paint)** | Skeleton blocks matching the final layout's structure at `#f2f4f6` (grey100). Financial amounts render as `--` until resolved; they never appear as skeleton blocks (would look like they have a placeholder value). |
| **Loading (refresh)** | Top bar pull-down spinner in blue500. No overlay, no blocking. Content stays visible with its previous values. |
| **Error (inline field)** | `#f04452` (red500) 2px border on the input, error text below in red500 13px. One actionable sentence (`계좌번호를 다시 확인해주세요`). |
| **Error (toast)** | `#191f28` background, white 14px 400 text, 3s auto-dismiss. One sentence. No icons. Bottom of screen with 20px inset. |
| **Error (screen-blocking)** | Reserved for server outage. White screen, centered single-line message in `grey900` 16px weight 600, retry button in blue500 below. No illustration. |
| **Success (inline flash)** | Brief flash of `#e8f3ff` (blue50) background behind the updated element, 300ms fade to default. For routine actions like toggling a setting. |
| **Success (money moved)** | Dedicated confirmation screen — not a toast. `#03b26c` (green500) checkmark top-center, exact amount in 30px weight 700 below, recipient name, timestamp. Single button: `확인`. This weight is intentional; money moving is never a toast. |
| **Skeleton** | `#f2f4f6` blocks at exact final dimensions. 1.2s shimmer as `linear-gradient` with 8% white highlight. Rounded at component radius (8px/12px/16px per component). Never used on financial amounts — those show `--`. |
| **Disabled** | Button opacity drops per `--button-disabled-opacity-color`. No grey-out of input borders — disabled inputs keep `grey200` border, so the geometry is stable if re-enabled. |
| **Loading inside pressed button** | Text is replaced by the 3-dot white animation. Width of the button does not change. Press is visually committed; user cannot double-submit. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state changes |
| `motion-fast` | 150ms | Hover, focus, small reveals, button press overlay |
| `motion-standard` | 250ms | The default — sheet opens, card expands, tab switches |
| `motion-slow` | 400ms | Emphasized transitions — success checkmarks, onboarding step advances |
| `motion-page` | 350ms | Full-screen transitions between top-level routes |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — sheets, toasts, screen pushes |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals, pops |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — collapsible cards, tab content |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reserved. Only for money-moved success checkmark. Nowhere else — overshoot on routine UI would feel unserious. |

**Signature motions.**

1. **Money-moves.** When a balance updates, the old number slides up 20px and fades out (`motion-fast / ease-exit`), the new number slides in from below 20px (`motion-standard / ease-enter`). Never cross-fade money — a financial amount flickering between values looks like a bug.
2. **Bottom-sheet presentation.** Sheets rise from `y+40px` with `motion-standard / ease-enter` and a synchronized backdrop fade from `rgba(2,9,19,0)` to `rgba(2,9,19,0.5)`. Dismissal uses `motion-fast / ease-exit` — leaving feels lighter than entering.
3. **Success checkmark.** On money-moved confirmation, the checkmark draws over `motion-slow` with `ease-spring`. This is the one place spring easing is licensed. Everywhere else, standard easing.
4. **Reduce motion.** If `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. No exceptions. Crossfades replace slides. The app stays usable; just less kinetic.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch (2026-04-19):
- https://toss.im/ — confirms Viva Republica (비바리퍼블리카) as operating company,
  unified-finance super-app positioning ("내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요"),
  and mission framing "모두의 금융에 자유를" (financial freedom for everyone).
- https://slash.page/ — confirms Toss maintains a public open-source engineering
  presence ("Copyright © 2024 Viva Republica - Toss Frontend Chapter"), with
  packages including overlay-kit, suspensive, use-funnel — demonstrating the
  design/engineering self-documentation culture referenced in §12 Principles.

Base DESIGN.md (sections 1–9) is the source for token-level claims including
Toss Blue #3182f6, Toss Product Sans, the OKLCH-based palette, and shadow tokens.

Not independently verified via WebFetch — widely documented public facts used:
- Toss (Viva Republica) was founded in 2013; the money-transfer app launched in 2015.
- Korean legacy-bank institutional palette context (KB, Shinhan, Woori, Hana) is
  general industry knowledge, not a sourced Toss statement.

Personas (§13) are fictional archetypes informed by publicly described Korean
fintech user segments. Any resemblance to specific individuals is unintended.

Interpretive claims (e.g., "the specific cerulean was chosen because it was
not the indigo of any incumbent bank") are editorial readings of the design,
not documented Toss statements.
-->

