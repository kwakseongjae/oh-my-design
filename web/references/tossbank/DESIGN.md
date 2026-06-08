---
id: tossbank
name: Toss Bank
country: KR
category: fintech
homepage: "https://www.tossbank.com"
primary_color: "#0064FF"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=tossbank.com&sz=128"
verified: "2026-05-27"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#3182f6"
    primary-hover: "#2272eb"
    primary-light: "#e8f3ff"
    brand: "#0064ff"
    brand-gray: "#202632"
    canvas: "#ffffff"
    surface: "#f2f4f6"
    grey-50: "#f9fafb"
    heading: "#191f28"
    grey-800: "#333d4b"
    grey-700: "#4e5968"
    body: "#6b7684"
    muted: "#8b95a1"
    placeholder: "#b0b8c1"
    border: "#e5e8eb"
    border-strong: "#d1d6db"
    on-primary: "#ffffff"
    error: "#f04452"
    success: "#03b26c"
    warning: "#fe9800"
    caution: "#ffc342"
  typography:
    family: { sans: "Toss Product Sans", mono: "SF Mono" }
    display-hero: { size: 30, weight: 700, lineHeight: 1.33, use: "Onboarding, hero moments" }
    display-lg:   { size: 26, weight: 700, lineHeight: 1.38, use: "Section headers, key metrics" }
    heading-lg:   { size: 22, weight: 700, lineHeight: 1.36, use: "Feature titles, modal headers" }
    heading:      { size: 20, weight: 600, lineHeight: 1.40, use: "Card headings, sub-sections" }
    subtitle:     { size: 16, weight: 600, lineHeight: 1.50, use: "List headers, nav titles" }
    body-lg:      { size: 16, weight: 400, lineHeight: 1.50, use: "Descriptions, explanations" }
    body:         { size: 14, weight: 400, lineHeight: 1.57, use: "Standard reading text" }
    caption:      { size: 12, weight: 400, lineHeight: 1.50, use: "Timestamps, fine print, rate disclaimers" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 8, md: 12, lg: 16, full: 9999 }
  shadow:
    standard: "0px 2px 8px rgba(0,0,0,0.08)"
    elevated: "0px 4px 12px rgba(0,0,0,0.12)"
    sheet: "0px -4px 12px rgba(0,0,0,0.08)"
  components_harvested: true
  components:
    button-fill-primary: { type: button, bg: "#3182f6", fg: "#ffffff", radius: 16, padding: "0 20px", font: "17/600", use: "Primary CTA, 56px tall" }
    button-fill-dark: { type: button, bg: "#4e5968", fg: "#ffffff", radius: 16, padding: "0 20px", font: "17/600", use: "Strong neutral action" }
    button-fill-danger: { type: button, bg: "#f04452", fg: "#ffffff", radius: 16, padding: "0 20px", font: "17/600", use: "Destructive confirmation" }
    input-box: { type: input, fg: "#333d4b", radius: 14, padding: "14px 16px", font: "17/400", use: "Standard form input" }
    input-error: { type: input, fg: "#333d4b", radius: 14, padding: "14px 16px", font: "17/400", use: "hasError state, 1px border #f04452" }
    card-account: { type: card, bg: "#ffffff", radius: 16, padding: "24px", use: "Account/balance hero card" }
    card-standard: { type: card, bg: "#ffffff", radius: 12, padding: "20px", use: "Transaction summary, product cards" }
    card-compact: { type: listItem, bg: "#ffffff", radius: 8, padding: "12px", use: "Transaction list row, 1px border #e5e8eb" }
    badge-blue: { type: badge, bg: "#3182f6", fg: "#ffffff", radius: 12, padding: "3px 7px", font: "13/700", use: "Status emphasis NEW" }
    badge-elephant: { type: badge, fg: "#4e5968", radius: 12, padding: "3px 7px", font: "13/700", use: "Neutral metadata badge" }
    toast: { type: toast, bg: "#191f28", fg: "#ffffff", radius: 8, padding: "12px 16px", font: "14/500", use: "Transient feedback" }
    sheet: { type: dialog, bg: "#ffffff", fg: "#191f28", radius: 16, padding: "24px 20px", use: "Bottom sheet, top corners only" }
    segmented: { type: tab, bg: "#f2f4f6", fg: "#8b95a1", radius: 12, padding: "8px 16px", font: "14/600", use: "Segmented switch", active: "bg #ffffff, text #191f28" }
    toggle: { type: toggle, bg: "#3182f6", radius: 9999, use: "On #3182f6 / off #d1d6db, white 18px thumb" }
---

# Design System Inspiration of Toss Bank (토스뱅크)

## 1. Visual Theme & Atmosphere

Toss Bank is the licensed internet-only bank inside the Toss universe — the moment the calm, blue-accented Toss design language stops being a money-transfer convenience and becomes an actual chartered bank holding your deposits. Where the parent Toss app feels like a friend who happens to handle money, Toss Bank carries a slightly heavier responsibility: this is a *bank*, regulated, FSS-supervised, holding real balances and issuing real cards. The design resolves that tension by doubling down on the same calm-confident minimalism rather than reaching for institutional gravitas. The canvas is clean white (`#ffffff`), headings are a warm near-black charcoal (`#191f28`), and a single confident blue does all the interactive work. The atmosphere is "trustworthy because it's clear, not because it's stern."

The brand color is the official Toss blue `#0064FF` (Pantone 2175 C) — the same cerulean that anchors the entire Viva Republica family. On marketing and brand surfaces it appears as that saturated `#0064FF`; in the running product UI, interactive elements lean on the slightly softer, more legible `#3182f6` (blue500) inherited from the shared Toss design language. This brand-vs-UI blue split is deliberate and load-bearing: `#0064FF` is the logo and the promise, `#3182f6` is the tappable surface. The optimism of the color is the entire thesis — money at a bank can feel light, not bureaucratic.

Typography is **Toss Product Sans**, the custom typeface developed with Sandoll and Leedotype for financial contexts, where numerals and Latin characters are optically balanced against Korean hangul and financial symbols (`%`, comma separators, `±`) are tuned for small-size legibility. Toss Bank leans hard on tabular (fixed-width) numerals — a bank is, at its core, a column of numbers, and those numbers must never jitter.

**Key Characteristics:**
- Toss brand blue `#0064FF` (Pantone 2175 C) for logo/marketing; UI blue `#3182f6` for interactive surfaces
- Clean white canvas (`#ffffff`) with warm charcoal text (`#191f28`) — trust through clarity, not weight
- Toss Product Sans with Korean-Latin optical balancing and tabular numerals for balances and rates
- Minimal, single-layer black shadows — visual noise reads as a credibility tax in banking
- "이자 every day" product story: interest accruing daily is a recurring hero motif
- 375px mobile-first baseline; spacious summary screens, dense detail screens
- Blue is interaction, never decoration — illustrations and ornaments stay neutral

## 2. Color Palette & Roles

Toss Bank reuses the shared Toss design-language palette. Brand-tier `#0064FF` is verified from the official Toss brand resource center (brand.toss.im, Pantone 2175 C); UI-tier blues follow the documented Toss Product/TDS scale.

### Brand (Logo / Marketing)
- **Toss Brand Blue** (`#0064FF`): Pantone 2175 C. Logo lockup, marketing hero blocks, app icon. The promise color.
- **Brand Gray** (`#202632`): Secondary brand color (Pantone 433 C). Corporate, legal, and footer contexts.

### Primary (UI Interactive)
- **Toss Blue** (`#3182f6`): `blue500`. Primary interactive color — CTAs, links, active states, selection. The workhorse of every tappable element in-product.
- **Blue Hover** (`#2272eb`): `blue600`. Hover / pressed state for blue500 elements.
- **Blue Light** (`#e8f3ff`): `blue50`. Informational backgrounds, subtle blue-tinted surfaces, "이자 받기" highlight blocks.

### Surfaces
- **Pure White** (`#ffffff`): Page background, card surfaces.
- **Grey 50** (`#f9fafb`): Lightest gray surface, section backgrounds.
- **Grey 100** (`#f2f4f6`): Secondary background, card fills, disabled surfaces, skeleton blocks.

### Text
- **Dark Charcoal** (`#191f28`): `grey900`. Primary headings, balances, strongest text. Warm near-black.
- **Grey 800** (`#333d4b`): Strong labels, navigation text.
- **Grey 700** (`#4e5968`): Emphasized body text, sub-headings.
- **Grey 600** (`#6b7684`): Body text, descriptions, metadata.
- **Grey 500** (`#8b95a1`): Caption text, secondary labels.
- **Grey 400** (`#b0b8c1`): Placeholder text, disabled icon fills.

### Borders
- **Border Default** (`#e5e8eb`): grey200. Standard card borders, dividers, input outlines.
- **Border Strong** (`#d1d6db`): grey300. Emphasized borders, active input outlines.

### Semantic
- **Error Red** (`#f04452`): `red500`. Errors, destructive actions, negative balance/expense indicators.
- **Success Green** (`#03b26c`): `green500`. Positive indicators, interest earned, confirmations.
- **Warning Orange** (`#fe9800`): `orange500`. Pending states, attention-needed.
- **Caution Yellow** (`#ffc342`): `yellow500`. Soft warnings, highlight moments.

## 3. Typography Rules

### Font Family
- **Primary**: `"Toss Product Sans", "Tossface", "SF Pro KR", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Roboto, "Noto Sans KR", sans-serif`
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace`
- **Emoji**: `Tossface` — Toss's custom emoji font, decorative only, never on balance-handling screens

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Toss Product Sans | 30px | 700 | 40px (1.33) | Onboarding, hero moments |
| Display Large | Toss Product Sans | 26px | 700 | 36px (1.38) | Section headers, key metrics |
| Heading Large | Toss Product Sans | 22px | 700 | 30px (1.36) | Feature titles, modal headers |
| Heading | Toss Product Sans | 20px | 600 | 28px (1.40) | Card headings, sub-sections |
| Subtitle | Toss Product Sans | 16px | 600 | 24px (1.50) | List headers, nav titles |
| Body Large | Toss Product Sans | 16px | 400 | 24px (1.50) | Descriptions, explanations |
| Body | Toss Product Sans | 14px | 400 | 22px (1.57) | Standard reading text |
| Caption | Toss Product Sans | 12px | 400 | 18px (1.50) | Timestamps, fine print, rate disclaimers |
| Balance Display | Toss Product Sans | 30px+ | 700 | tight | Account balance — tabular numerals |

### Principles
- **Three weights from eight**: ships 300–950, UI uses 400 (body), 600 (emphasis), 700 (balances + headings).
- **Tabular numerals for money**: balances, interest rates, transaction amounts all use fixed-width digits so columns never shift.
- **Korean-Latin optical balance**: hangul and Latin/numerals independently weighted so mixed text reads harmoniously.
- **Rate legibility**: `%` and decimal points (interest is sold in 0.1% increments) get enhanced small-size clarity.

## 4. Component Stylings

### Buttons

Toss Bank reuses the TDS `<Button>` system — variant × color × size, default `xlarge` (56px). Geometry follows the shared Toss Product Sans / TDS Mobile scale.

**Fill / Primary**
- Background: `#3182f6`
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600 / Toss Product Sans
- Pressed: dim overlay via `--button-pressed-opacity`
- Disabled: bg opacity scaled by `--button-disabled-opacity-color`
- Use: Primary CTA (계좌 만들기, 이자 받기, 송금하기) — 56px tall

**Fill / Dark**
- Background: `#4e5968`
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600 / Toss Product Sans
- Use: Strong neutral action (설정 저장, 본인인증 진행)

**Fill / Danger**
- Background: `#f04452`
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600 / Toss Product Sans
- Use: Destructive confirmation (계좌 해지, 카드 분실신고)

**Weak / Primary**
- Background: `rgba(100, 168, 255, 0.15)`
- Text: `#2272eb`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600 / Toss Product Sans
- Use: Secondary action paired with Fill / Primary on the same screen

**Weak / Dark**
- Background: `rgba(2, 32, 71, 0.05)`
- Text: `#4e5968`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600 / Toss Product Sans
- Use: Cancel / neutral secondary (취소, 닫기, 나중에 하기)

Size scale (height · font · radius): `small` 32px · 13px/600 · 8px; `medium` 38px · 15px/600 · 10px; `large` 48px · 17px/600 · 14px; `xlarge` (default) 56px · 17px/600 · 16px. Display modes: `inline`, `block`, `full`.

### Inputs

Toss Bank reuses TDS `<TextField>` (`box` default, plus `line` / `big` / `hero`). `SecureKeypad` (randomised-position PIN) and `SplitTextField` (OTP / 인증번호) are first-class for the banking flows.

**Box (default)**
- Background: `rgba(0, 23, 51, 0.02)`
- Text: `#333d4b`
- Border: 1px solid `rgba(2, 32, 71, 0.05)`
- Radius: 14px
- Padding: 14px 16px
- Font: 17px / 400 / Toss Product Sans
- Placeholder: `#b0b8c1`
- Focus: border `#3182f6`
- Use: Standard form input — account name, memo

**Hero (amount entry)**
- Background: transparent
- Text: `#333d4b`
- Border: 1px solid `#e5e8eb` (bottom only)
- Radius: 0px
- Padding: 0px 0px 4px
- Font: 30px / 600 / Toss Product Sans
- Use: Large transfer/deposit amount entry — tabular numerals

**Error**
- Background: `rgba(0, 23, 51, 0.02)`
- Text: `#333d4b`
- Border: 1px solid `#f04452`
- Radius: 14px
- Padding: 14px 16px
- Font: 17px / 400 / Toss Product Sans
- Use: `hasError` state — paired with inline help in `#f04452`

### Cards

**Account / Balance Card**
- Background: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 24px
- Shadow: `0px 2px 8px rgba(0,0,0,0.08)`
- Use: The hero surface — account name, balance (30px/700, tabular), "이자 매일 받기" affordance

**Standard Card**
- Background: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 20px
- Shadow: `0px 2px 8px rgba(0,0,0,0.08)`
- Use: Transaction summary, product cards

**Compact (list row)**
- Background: `#ffffff`
- Border: 1px solid `#e5e8eb`
- Radius: 8px
- Padding: 12px
- Shadow: none
- Use: Transaction list rows where a soft 1px edge replaces shadow

### Badges

**Fill / Blue**
- Background: `#3182f6`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700 / Toss Product Sans
- Use: Status emphasis ("NEW", "한도 상향")

**Weak / Green**
- Background: `rgba(34, 197, 94, 0.15)`
- Text: `#16a34a`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700 / Toss Product Sans
- Use: Interest-earned / completed state (입금 완료)

**Weak / Elephant**
- Background: `rgba(2, 32, 71, 0.05)`
- Text: `#4e5968`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700 / Toss Product Sans
- Use: Neutral metadata badge (적금, 입출금)

### Tabs

**Bottom Tab (Active)**
- Background: `#ffffff`
- Text: `#191f28`
- Border: 1px solid `#e5e8eb` (top border only)
- Active: `#3182f6` icon + label
- Font: 11px / 500 / Toss Product Sans
- Use: Bottom navigation — fixed white, no shadow

**Segmented**
- Background: `#f2f4f6`
- Text: `#8b95a1`
- Border: none
- Radius: 12px
- Padding: 8px 16px
- Active: `#ffffff` bg + `#191f28` text + `0px 2px 4px rgba(0,0,0,0.06)` shadow
- Font: 14px / 600 / Toss Product Sans
- Use: 입금/출금 내역 switching, 월/주 전환

### Toasts

**Default**
- Background: `#191f28`
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0px 4px 12px rgba(0,0,0,0.12)`
- Font: 14px / 500 / Toss Product Sans
- Use: Transient feedback ("복사되었어요"). Money-moved success is a dedicated screen, never a toast.

### Dialogs

**Bottom Sheet**
- Background: `#ffffff`
- Text: `#191f28`
- Border: none
- Radius: 16px (top corners only)
- Padding: 24px 20px
- Shadow: `0px -4px 12px rgba(0,0,0,0.08)`
- Use: Selection, picker, secondary form (account picker, 송금 확인)

### Toggles

**Default**
- Background: `#3182f6` (on) / `#d1d6db` (off)
- Border: none
- Radius: 9999px
- Thumb: `#ffffff` 18px circle, `0px 1px 2px rgba(0,0,0,0.1)` shadow
- Use: 매일 이자 받기 자동화, 알림 설정

---

**Verified:** 2026-05-27
**Tier 1 sources:** tossbank.com (live WebFetch — confirmed clean white canvas, minimal text-link CTAs `자세히 보기`, benefit-driven Korean copy `이자 2배 쌓여요`, "Forbes 국내 은행 1위" positioning); brand.toss.im (Toss brand resource center — `#0064FF` Pantone 2175 C confirmed). Component geometry inherited from the documented TDS Mobile / Toss Product Sans design language (shared across the Viva Republica family).
**Tier 2 sources:** getdesign.md/tossbank — not checked. styles.refero.design — not checked.
**Conflicts unresolved:** Brand blue `#0064FF` (logo/marketing, verified) vs. UI blue `#3182f6` (in-product interactive, inherited from shared Toss design language) — treated as distinct surfaces per Toss brand-vs-UI-blue precedent.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4, 8, 12, 16, 20, 24, 32, 40, 48
- Horizontal padding: 20px (slightly wider than typical 16px)
- Financial data grids: tighter 4px internal spacing

### Grid & Container
- Design baseline: 375px mobile width
- Content: full-width with 20px horizontal padding
- Single-column, mobile-first — no explicit multi-column grid
- Transaction lists: full-width rows, amounts right-aligned

### Whitespace Philosophy
- **Breathing room for money.** A balance at 30px with 32px margins communicates security through spaciousness.
- **Progressive density.** Summary screens are spacious; detail / transaction screens are dense.
- **Grouped by function.** Deposit / transfer / card actions separated by 24px+; related data within a group uses 8–12px gaps.

### Border Radius Scale
- Compact (8px): inputs, small buttons, compact cards
- Comfortable (12px): standard cards, dialog corners
- Large (16px): account cards, buttons, bottom-sheet top corners
- Pill (9999px): toggles, chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page background, inline elements |
| Subtle (1) | `0px 1px 3px rgba(0,0,0,0.06)` | List item separation |
| Standard (2) | `0px 2px 8px rgba(0,0,0,0.08)` | Cards, account/balance panels |
| Elevated (3) | `0px 4px 12px rgba(0,0,0,0.12)` | Dropdowns, floating buttons |
| Modal (4) | `0px 8px 24px rgba(0,0,0,0.16)` | Bottom sheets, dialogs |

**Shadow philosophy.** Single-layer, pure black, low opacity. No colored shadows. In a chartered bank's UI, visual noise undermines trust — elevation is communicated through subtle opacity, not drama. Restraint *is* the brand statement.

## 7. Do's and Don'ts

### Do
- Use UI blue `#3182f6` for every interactive element; reserve `#0064FF` for logo/marketing
- Use tabular numerals for all balances, rates, and transaction amounts
- Use 700 weight for balances and headings, 400 for body, 600 for emphasis
- Show interest earned / income in green (`#03b26c`), expenses in red (`#f04452`)
- Use blue50 (`#e8f3ff`) for "이자 받기" and informational highlight blocks
- Keep money-moved confirmation as a dedicated screen, never a toast

### Don't
- Don't confuse brand blue `#0064FF` with UI blue `#3182f6`
- Don't use heavy or colored shadows — depth comes from layering, not drama
- Don't use bold (700) for body text — reserved for headings and amounts
- Don't approximate money (`약 120만원`) on primary surfaces — exact numerals only
- Don't decorate financial data displays — clarity is the aesthetic
- Don't introduce a second saturated accent hue; blue is the sole interactive color

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <480px | Full fidelity, 375px baseline |
| Tablet | 480–768px | Expanded cards, optional side margins |
| Desktop (Web) | >768px | Centered column, max-width ~480px for mobile-web parity |

### Touch Targets
- Buttons: xlarge ~56px, large ~48px, medium ~38px
- List rows: minimum 52px height for financial actions
- SecureKeypad: large 56–64px targets

### Collapsing Strategy
- Desktop web mirrors mobile in a centered column
- Bottom sheet → centered modal on larger screens
- Sticky bottom CTA bar with safe-area insets

### Image Behavior
- Card art / product imagery: consistent sizing within context
- Charts (interest history): full-width, responsive, aspect-ratio preserved

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: UI Blue `#3182f6` (hover `#2272eb`)
- Brand / logo only: `#0064FF`
- Background: White `#ffffff`; surface `#f2f4f6`
- Heading: Charcoal `#191f28`; body `#6b7684`; caption `#8b95a1`
- Placeholder: `#b0b8c1`; border `#e5e8eb`
- Success/interest: Green `#03b26c`; error/expense: Red `#f04452`

### Example Component Prompts
- "Create a Toss Bank account card: white bg, 16px radius, 24px padding, shadow 0px 2px 8px rgba(0,0,0,0.08). Account name 14px/400 #8b95a1, balance 30px/700 #191f28 tabular numerals + '원' 20px/400. A blue50 (#e8f3ff) pill below reading '이자 받기' in #2272eb."
- "Build a send-money button: #3182f6 bg, white 17px/600 text, 56px tall, 16px radius, full-width. Pressed: dim overlay. Disabled: opacity drop."
- "Design a transaction row: full-width, 16px h-padding, 52px min-height. Left: 32px circle icon + counterparty (14px/600 #191f28) + category (12px/400 #8b95a1). Right: amount 14px/600, #f04452 expense / #03b26c income, tabular."
- "Create a SecureKeypad-style PIN entry: randomised digit grid, 6 dots above, each key 56px, 14px digit #191f28."

### Iteration Guide
1. Full Toss Product Sans stack with Korean fallbacks
2. Interactive = `#3182f6`; brand `#0064FF` is logo/marketing only
3. Money = 700 weight, tabular numerals, right-aligned in lists
4. Radius: 8px inputs, 12px cards, 16px account cards/sheets, pill toggles
5. Single-layer pure-black shadows, no tints
6. Mobile-first 375px, 20px h-padding

---

## 10. Voice & Tone

Toss Bank speaks like Toss — calm, unhurried, zero jargon — but with one extra ounce of fiduciary care, because it actually holds your deposits. The default register is soft-polite `해요체` (`이자가 매일 쌓여요`, `계좌가 만들어졌어요`), the friendly-but-respectful Korean ending, never the cold `~습니다` corporate voice except in regulated disclosure. Korean is the unquestioned primary voice; English appears only in product names. Sentences end in periods; buttons do not. No emoji on money-handling screens.

| Context | Tone |
|---|---|
| CTAs | Imperative short Korean verb (`계좌 만들기`, `이자 받기`, `송금하기`, `확인`). |
| Success toasts | Past-tense single sentence, soft ending (`송금이 완료되었어요`). No emoji. |
| Interest moments | Warm, concrete (`오늘 이자 23원이 쌓였어요`). Exact numerals, never rounded. |
| Error messages | Specific + blameless + actionable. Never `문제가 발생했습니다`. |
| Onboarding | Second-person, one idea per screen, no bullet lists. |
| Balances | Bare numerals with comma separators + 원. `1,240,000원`, never `₩1.24M`. |
| Legal / disclosure | Formal `합니다` register — the single exception. FSS-required rate and risk copy. |

**Forbidden phrases.** `불편을 드려 죄송합니다`, `Oops`, `죄송하지만`, `약 ~원` (approximation on money), rounded currency (`약 120만원`) on primary surfaces, English-first strings on Korean surfaces.

**Voice samples.**
- `이자 2배 쌓여요` — benefit-led product copy. <!-- verified: tossbank.com via WebFetch 2026-05-27 -->
- `포브스 선정 국내 은행 1위` — trust/credential positioning. <!-- verified: tossbank.com via WebFetch 2026-05-27 -->
- `오늘 이자 23원이 쌓였어요` — illustrative daily-interest moment. <!-- illustrative: follows Toss Bank's documented daily-interest product; not verified verbatim -->
- `계좌가 만들어졌어요` — illustrative account-created confirmation. <!-- illustrative: not verified as live copy -->

## 11. Brand Narrative

Toss Bank (토스뱅크) is the internet-only bank of **Viva Republica** (비바리퍼블리카), the company behind Toss, founded by **Lee Seung-gun (이승건)**. It received its banking license and launched in **October 2021** as Korea's third internet-only bank, after Kakao Bank and K Bank. Where the Toss app had spent years making money *move* easily, Toss Bank set out to make a chartered bank *feel* easy — challenging the legacy KB / Shinhan / Woori / Hana incumbents not on rates alone but on the entire experience of holding an account.

The signature product story is **daily interest** — `이자 매일 받기` — where interest accrues and can be claimed each day rather than at term's end. It is a financial-product feature, but it's also a design thesis: it turns a passive, invisible bank balance into something you check, tap, and feel good about every morning. The blue `#0064FF` optimism carries straight through: a bank does not have to feel like filing taxes.

What Toss Bank refuses: the institutional-indigo seriousness of legacy banking (Active-X plug-ins, 12-digit account numbers, forms that look like government paperwork), and equally the cartoonish playfulness of some consumer fintech. It occupies the same narrow middle as Toss — calm but optimistic, regulated but light. Every ornamental move costs clarity, and clarity is the trust.

## 12. Principles

1. **Clarity is the trust signal.** A bank earns confidence by being legible, not stern. *UI implication:* white canvas, single-layer shadows, one interactive hue. If a screen looks "serious" through visual weight, simplify it instead.
2. **Numbers are typography.** Balances, rates, and amounts use 700 weight and tabular numerals with display-heading care. *UI implication:* never let a balance jitter between values or inherit body weight; right-align amounts in lists.
3. **Blue is interaction, not decoration.** UI `#3182f6` appears only where the user can tap. *UI implication:* illustrations, borders, and headers stay neutral; brand `#0064FF` is logo/marketing only.
4. **Exactness over approximation.** Money is never `약` (about). *UI implication:* show exact won amounts with comma separators; rounding is forbidden on primary surfaces.
5. **One action per screen.** Two primary buttons means two screens. *UI implication:* secondary actions are fine; two primaries are never.
6. **Daily delight, regulated honesty.** The daily-interest warmth lives beside FSS-required disclosure in formal `합니다`. *UI implication:* keep the two registers visually separate — warm `해요체` for product, formal for legal.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Korean internet-bank user segments, not individual people.*

**현우 (Hyun-woo), 31, Seoul.** Product designer at a startup. Moved his salary account to Toss Bank for the daily interest and checks the `이자 받기` tap each morning like a tiny game. Expects the balance to paint in under 1s and the app to never make him feel like he's at a bank counter.

**김여사 (Mrs. Kim), 58, Daejeon.** Runs a small flower shop. Her son set up Toss Bank for her. Uses it to receive customer transfers and pay suppliers. Trusts it because the numbers are big, clear, and exact — and because it never shows her anything that looks like a confusing form.

**서연 (Seo-yeon), 24, Gwangju.** First job, first real savings. Opened her account entirely on her phone in minutes. Treats the daily-interest screen as a habit and tells friends "it actually feels good to check your bank app," which she'd never say about a legacy bank.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no transactions)** | Single `grey700` line explaining why (`아직 거래내역이 없어요`) + one secondary action (blue50 bg, blue500 text). Never an illustration, never `데이터가 없습니다`. |
| **Empty (filter cleared)** | Single `grey500` caption (`조건에 맞는 내역이 없어요`). No button. |
| **Loading (first paint)** | Skeleton blocks at `#f2f4f6` matching final layout. Balances render as `--`, never as skeleton blocks. |
| **Loading (refresh)** | Top pull-down spinner in blue500. No overlay; previous values stay visible. |
| **Error (inline field)** | `#f04452` 2px border + red500 13px error text below. One actionable sentence (`계좌번호를 다시 확인해주세요`). |
| **Error (toast)** | `#191f28` bg, white 14px/400, 3s auto-dismiss, one sentence, bottom 20px inset. |
| **Error (screen-blocking)** | Server outage only. White screen, centered `grey900` 16px/600 line + retry in blue500. No illustration. |
| **Success (money moved)** | Dedicated screen, not a toast. `#03b26c` checkmark top-center, exact amount 30px/700, recipient + timestamp, single `확인`. |
| **Success (interest claimed)** | Brief blue50 flash behind the balance + `오늘 이자 N원이 쌓였어요` toast. |
| **Skeleton** | `#f2f4f6` blocks at exact final dimensions, ~1.2s shimmer with 8% white highlight, component-radius rounding. Never on balances (show `--`). |
| **Disabled** | Button opacity drops per `--button-disabled-opacity-color`; input borders stay `grey200` so geometry is stable. |

## 15. Motion & Easing

Toss Bank's motion is calm and precise — money should never appear to flicker or bounce.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox states |
| `motion-fast` | 150ms | Hover, focus, button press overlay |
| `motion-standard` | 250ms | Default — sheet open, card expand, tab switch |
| `motion-slow` | 400ms | Emphasized — success checkmark, onboarding advance |
| `motion-page` | 350ms | Full-screen route transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, toasts, screen pushes appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, pops |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reserved — money-moved / interest-claimed checkmark only |

**Signature motions.**
1. **Balance update.** The old number slides up 20px and fades (`motion-fast / ease-exit`); the new number slides in from below (`motion-standard / ease-enter`). Never cross-fade money — flicker reads as a bug.
2. **Daily-interest claim.** Tapping `이자 받기` triggers a brief blue50 flash behind the balance and a small spring-eased number tick-up — the one routine place a touch of delight is licensed.
3. **Success checkmark.** Money-moved confirmation draws the checkmark over `motion-slow` with `ease-spring`. The only standard spring outside interest.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to instant; cross-fades replace slides. No exceptions.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 (UI tokens, §1–9): tossbank.com live WebFetch 2026-05-27 (clean white
canvas, minimal text-link CTAs, benefit Korean copy `이자 2배 쌓여요`, Forbes
top-bank positioning). Brand blue `#0064FF` Pantone 2175 C confirmed via
brand.toss.im. Component geometry inherited from the shared documented TDS
Mobile / Toss Product Sans design language used across the Viva Republica
family; not independently re-inspected on tossbank.com surfaces.

Tier 2 (founding/narrative): Toss Bank launched Oct 2021 as Korea's third
internet-only bank under Viva Republica (이승건). Daily-interest (`이자 매일
받기`) is its signature documented product. Legacy-bank context (KB/Shinhan/
Woori/Hana) is general industry knowledge.

Voice samples: `이자 2배 쌓여요`, `포브스 선정 국내 은행 1위` verified live.
`오늘 이자 23원이 쌓였어요`, `계좌가 만들어졌어요`, `송금이 완료되었어요`
are ILLUSTRATIVE patterns following Toss Bank's `해요체` register and daily-
interest product; not confirmed verbatim.

Personas (§13) are fictional archetypes. Any resemblance to specific users is
unintended.
-->
