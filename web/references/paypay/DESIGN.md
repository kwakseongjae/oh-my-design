---
id: paypay
name: PayPay
country: JP
category: fintech
homepage: "https://paypay.ne.jp"
primary_color: "#FF0033"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=paypay.ne.jp&sz=128"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#ff0033"
    primary-pressed: "#e0002e"
    primary-deep: "#cc0029"
    primary-tint: "#ffebef"
    primary-disabled: "#ffb3c1"
    canvas: "#ffffff"
    ink: "#222222"
    success: "#00b900"
    error: "#e0002e"
    warning: "#ff8800"
    info: "#0088ff"
    point-gold: "#ffb200"
    gray-50: "#f5f5f5"
    gray-100: "#eeeeee"
    gray-200: "#e0e0e0"
    gray-300: "#cccccc"
    gray-400: "#999999"
    gray-500: "#767676"
    gray-700: "#555555"
  typography:
    family: { sans: "Noto Sans JP", mono: "SF Mono" }
    display-hero: { size: 32, weight: 700, lineHeight: 1.38, use: "Splash, campaign hero, big point moments" }
    balance: { size: 28, weight: 700, lineHeight: 1.29, use: "Wallet balance, the emotional center" }
    display-lg: { size: 24, weight: 700, lineHeight: 1.42, use: "Section headers, key metrics" }
    heading-lg: { size: 20, weight: 700, lineHeight: 1.4, use: "Feature titles, modal headers" }
    heading: { size: 18, weight: 700, lineHeight: 1.44, use: "Card headings, sub-sections" }
    subtitle: { size: 16, weight: 700, lineHeight: 1.5, use: "List headers, nav titles" }
    body-lg: { size: 16, weight: 400, lineHeight: 1.63, use: "Descriptions, explanations" }
    body: { size: 14, weight: 400, lineHeight: 1.57, use: "Standard reading text" }
    body-sm: { size: 13, weight: 400, lineHeight: 1.54, use: "Secondary information" }
    caption: { size: 12, weight: 400, lineHeight: 1.5, use: "Timestamps, fine print, legal" }
    amount-hero: { size: 36, weight: 700, use: "Payment amount on checkout/complete" }
  spacing: { sm: 8, base: 16, lg: 24 }
  rounded: { sm: 8, md: 12, lg: 16, xl: 24, full: 9999 }
  shadow:
    card: "0px 1px 4px rgba(0,0,0,0.08)"
    toast: "0px 4px 12px rgba(0,0,0,0.15)"
    dialog: "0px 8px 24px rgba(0,0,0,0.18)"
  components:
    button-primary: { type: button, bg: "#ff0033", fg: "#ffffff", radius: 24, padding: "0 24px", font: "16px/700", use: "Primary money action (支払う, チャージ, 送る)" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#ff0033", radius: 24, padding: "0 24px", font: "16px/700", use: "Secondary action paired with red primary" }
    button-neutral: { type: button, bg: "#f5f5f5", fg: "#555555", radius: 24, padding: "0 24px", font: "16px/700", use: "Low-emphasis dismiss (閉じる, 戻る)" }
    button-text: { type: button, bg: "transparent", fg: "#ff0033", padding: "8px 12px", font: "15px/700", use: "Inline tertiary action (もっと見る)" }
    input-box: { type: input, bg: "#ffffff", fg: "#222222", radius: 8, padding: "14px 16px", font: "16px/400", use: "Standard form input" }
    input-filled: { type: input, bg: "#f5f5f5", fg: "#222222", radius: 8, padding: "14px 16px", font: "16px/400", use: "Dense forms, search bars" }
    card: { type: card, bg: "#ffffff", radius: 12, padding: "16px", use: "Transaction, feature, content cards" }
    balance-card: { type: card, bg: "#ff0033", fg: "#ffffff", radius: 16, padding: "20px", use: "Wallet balance hero, signature surface" }
    promo-card: { type: card, bg: "#ffebef", radius: 16, padding: "20px", use: "Point campaigns, あげる/もらえる offers" }
    list-item: { type: listItem, bg: "#ffffff", radius: 0, padding: "14px 16px", use: "Transaction history, settings rows" }
    badge-red: { type: badge, bg: "#ff0033", fg: "#ffffff", radius: 10, padding: "2px 8px", font: "12px/700", use: "NEW, 限定, primary emphasis" }
    badge-gold: { type: badge, bg: "#ffb200", fg: "#ffffff", radius: 10, padding: "2px 8px", font: "12px/700", use: "Point amounts, reward emphasis" }
    badge-green: { type: badge, bg: "#00b900", fg: "#ffffff", radius: 10, padding: "2px 8px", font: "12px/700", use: "完了 / success state" }
    badge-weak: { type: badge, bg: "#ffebef", fg: "#ff0033", radius: 10, padding: "2px 8px", font: "12px/700", use: "Subtle brand-tinted label" }
    bottom-tab: { type: tab, bg: "#ffffff", fg: "#767676", font: "10px/500", use: "5-tab bottom nav", active: "#ff0033 icon + label" }
    segmented: { type: tab, bg: "#f5f5f5", fg: "#767676", radius: 10, padding: "8px 16px", font: "14px/700", use: "In-screen section switching", active: "#ffffff thumb, #ff0033 text" }
    toast: { type: toast, bg: "#222222", fg: "#ffffff", radius: 8, padding: "12px 16px", font: "14px/500", use: "Transient confirmation (コピーしました)" }
    dialog: { type: dialog, bg: "#ffffff", fg: "#222222", radius: 16, padding: "24px", use: "Confirmation prompts, alerts" }
    bottom-sheet: { type: dialog, bg: "#ffffff", fg: "#222222", radius: 20, padding: "24px 16px", use: "Selection, picker, payment-method switch" }
    toggle: { type: toggle, bg: "#ff0033", radius: 9999, use: "Boolean settings, on=red off=#cccccc" }
  components_harvested: true
---

# Design System Inspiration of PayPay (ペイペイ)

## 1. Visual Theme & Atmosphere

PayPay is Japan's dominant QR-code mobile wallet — the app that, almost single-handedly, dragged a famously cash-loving country into cashless payments. Its visual language is loud where Japanese fintech is traditionally quiet: a single, screaming **PayPay Red (`#FF0033`)** sits at the center of everything, and the entire interface orbits it. Where a legacy Japanese bank app whispers in navy and gray, PayPay shouts in pure, saturated red. That red is the brand; remove it and nothing is left.

The atmosphere is **bright, confident, and aggressively friendly**. Surfaces are white (`#ffffff`) and very-light-gray (`#f5f5f5`); text is near-black (`#222222`); and the red functions as both the brand mark and the universal "tap here / this is money" signal. The aesthetic is closer to a consumer retail app — think convenience-store energy, point campaigns, lottery-style "あたり" (you won!) moments — than to the austere, trust-through-restraint posture of a private bank. PayPay's thesis is the opposite of restraint: payments should feel *fun*, *rewarding*, and *instant*, and the design celebrates every transaction with motion, sound, and color.

Typography is unapologetically **system-native Japanese**: Hiragino Kaku Gothic on iOS, Noto Sans / Yu Gothic on Android and web, with rounded, friendly weights for headlines. There is no proprietary typeface — PayPay's identity lives in color and the wordmark, not in custom type. Numerals get heavy weight because balances and point totals are the emotional payload of the app.

What defines PayPay visually is the **balance/point hero**: a large red or white number, the cheerful payment-complete screen, and the omnipresence of the red round "PayPay" wordmark badge. The brand is mobile-first to the bone — designed for one-handed use at a checkout counter in under two seconds.

**Key Characteristics:**
- PayPay Red (`#FF0033`) as the singular brand and primary interactive color — bold, saturated, impossible to miss
- System-native Japanese type stack (Hiragino / Noto Sans JP / Yu Gothic), no proprietary font
- White and light-gray surfaces; near-black text — red carries all the energy
- Rounded, friendly geometry — generous radii (8–24px), pill CTAs, soft cards
- Reward-driven, celebratory UX — payment-complete and point-grant moments are dedicated, animated screens
- Mobile-first at 375px baseline, one-handed checkout-counter ergonomics
- High-contrast, retail-bright aesthetic over fintech austerity

## 2. Color Palette & Roles

### Primary
- **PayPay Red** (`#FF0033`): The brand. Primary CTAs, the wordmark badge, active states, key balances, selection highlights. Every tappable money-action is this red.
- **Red Pressed** (`#E0002E`): Darker red for hover/pressed state on red CTAs.
- **Red Deep** (`#CC0029`): Strongest red — used sparingly for emphasis on red-on-red layering and gradients.
- **Red Tint** (`#FFEBEF`): Very light red wash — informational backgrounds, selected-row tint, subtle brand-tinted surfaces.
- **Pure White** (`#ffffff`): Page background, card surfaces, text on red.
- **Near Black** (`#222222`): Primary heading and body text. Warm-neutral near-black, never pure `#000`.

### Brand (Logo / Marketing)
- **PayPay Red** (`#FF0033`): Official brand red — the wordmark, app icon background, and all marketing key art. The single non-negotiable brand asset.
- **White Wordmark**: The "PayPay" logotype reverses to white on red backgrounds; red on white otherwise. No third logo color exists.

### Semantic
- **Success Green** (`#00B900`): Payment success, positive confirmations, "完了" states. (Echoes the LINE-green of the parent LY group ecosystem.)
- **Error Red** (`#E0002E`): Errors, destructive actions. Distinguished from brand red by being slightly deeper and paired with an alert icon (brand red alone never means "error").
- **Warning Orange** (`#FF8800`): Pending states, expiring-points warnings, attention banners.
- **Info Blue** (`#0088FF`): Informational links, neutral system notices, KYC/verification flows.
- **Point Gold** (`#FFB200`): PayPayポイント (points) accent — coins, point totals in campaign contexts, "もらえる" moments.

### Neutral Scale
- **Gray 50** (`#f5f5f5`): Lightest gray — page section background, grouped-list backdrop.
- **Gray 100** (`#eeeeee`): Card fills on white, disabled surfaces.
- **Gray 200** (`#e0e0e0`): Default border, dividers, input outlines.
- **Gray 300** (`#cccccc`): Strong border, disabled icon fills.
- **Gray 400** (`#999999`): Placeholder text, inactive icons.
- **Gray 500** (`#767676`): Caption text, secondary labels, metadata.
- **Gray 700** (`#555555`): Body text, descriptions.
- **Gray 900** (`#222222`): Headings, strong labels, primary text.

### Surface & Borders
- **Border Default**: `#e0e0e0` (gray200). Card borders, input borders, dividers.
- **Border Strong**: `#cccccc` (gray300). Emphasized borders, active input outline base.
- **Background Float**: `#ffffff`. Tooltips, dropdowns, floating panels.
- **Overlay Scrim**: `rgba(0,0,0,0.5)`. Modal and bottom-sheet backdrop — neutral black, not red-tinted.

## 3. Typography Rules

### Font Family
- **Primary**: `"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", "Yu Gothic", "YuGothic", "Meiryo", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`
- **Numerals / Display**: Same stack, heavy weights (700) — PayPay leans on `Noto Sans JP` Bold and system bold for balances and point totals. No proprietary typeface.
- **Monospace**: `"SF Mono", Menlo, Consolas, monospace` — rare, used only in developer/merchant dashboards.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Noto Sans JP | 32px | 700 | 44px (1.38) | normal | Splash, campaign hero, big point moments |
| Balance Display | Noto Sans JP | 28px | 700 | 36px (1.29) | normal | Wallet balance — the emotional center |
| Display Large | Noto Sans JP | 24px | 700 | 34px (1.42) | normal | Section headers, key metrics |
| Heading Large | Noto Sans JP | 20px | 700 | 28px (1.40) | normal | Feature titles, modal headers |
| Heading | Noto Sans JP | 18px | 700 | 26px (1.44) | normal | Card headings, sub-sections |
| Subtitle | Noto Sans JP | 16px | 700 | 24px (1.50) | normal | List headers, nav titles |
| Body Large | Noto Sans JP | 16px | 400 | 26px (1.63) | normal | Descriptions, explanations |
| Body | Noto Sans JP | 14px | 400 | 22px (1.57) | normal | Standard reading text |
| Body Small | Noto Sans JP | 13px | 400 | 20px (1.54) | normal | Secondary information |
| Caption | Noto Sans JP | 12px | 400 | 18px (1.50) | normal | Timestamps, fine print, legal |
| Amount Hero | Noto Sans JP | 36px+ | 700 | tight | normal | Payment amount on checkout/complete |

### Principles
- **System-native by design.** PayPay deliberately uses the OS Japanese font so text renders crisply on every device without webfont latency at a checkout counter. Hiragino on iOS, Noto Sans JP / Yu Gothic on Android & web.
- **Weight is the hierarchy.** With one type family, PayPay separates levels almost entirely through weight (400 body, 700 headings/amounts) and size — not through multiple families or styles.
- **Numbers shout.** Balances, payment amounts, and point totals are the loudest elements on any screen: 700 weight, large size, often in red or near-black with a `¥` / `P` (ポイント) unit at a smaller weight.
- **Japanese-first, Latin-secondary.** Latin numerals and the "PayPay" wordmark coexist inside Japanese text; line-height runs generous (1.5–1.65) to give kanji/kana room to breathe.
- **No italics, minimal letter-spacing.** Japanese type avoids italics; emphasis comes from weight and color, never slant.

## 4. Component Stylings

> Note: PayPay publishes no public design-system documentation. The values below are reconstructed from the live PayPay app and paypay.ne.jp marketing surfaces, expressed as a coherent, agent-usable token set in PayPay's idiom. Treat geometry as representative rather than spec-exact.

### Buttons

PayPay buttons are **pill or large-radius rectangles**, full-width on mobile, with the brand red as the default primary. Friendly, tappable, thumb-sized.

**Primary (Fill / Red)**
- Background: `#FF0033`
- Text: `#ffffff`
- Border: none
- Radius: 24px (pill) on CTAs; 12px on inline actions
- Padding: 0 24px
- Font: 16px / 700 / Noto Sans JP
- Height: 52px (full-width mobile CTA)
- Pressed: background `#E0002E`
- Disabled: background `#FFB3C1` (red at reduced saturation), text `#ffffff`
- Loading: white spinner replaces label, width preserved
- Use: Primary money action — 支払う (Pay), チャージ (Charge), 送る (Send)

**Secondary (Outline / Red)**
- Background: `#ffffff`
- Text: `#FF0033`
- Border: 1.5px solid `#FF0033`
- Radius: 24px
- Padding: 0 24px
- Font: 16px / 700 / Noto Sans JP
- Height: 52px
- Pressed: background `#FFEBEF`
- Use: Secondary action paired with a red primary (キャンセル alternatives, 後で)

**Neutral (Fill / Gray)**
- Background: `#f5f5f5`
- Text: `#555555`
- Border: none
- Radius: 24px
- Padding: 0 24px
- Font: 16px / 700 / Noto Sans JP
- Height: 52px
- Use: Low-emphasis / dismiss action (閉じる, 戻る)

**Text Button**
- Background: transparent
- Text: `#FF0033`
- Border: none
- Padding: 8px 12px
- Font: 15px / 700 / Noto Sans JP
- Use: Inline tertiary action, "もっと見る", "詳細"

Size scale (height · font · radius): `small` 36px · 14px / 700 · 18px; `medium` 44px · 15px / 700 · 22px; `large` (default CTA) 52px · 16px / 700 · 24px. CTAs are full-width with 16px horizontal screen margin; inline buttons auto-width.

### Inputs

PayPay text fields are clean boxed inputs with a red focus state. Amount entry uses an oversized variant.

**Box (default)**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#e0e0e0`
- Radius: 8px
- Padding: 14px 16px
- Font: 16px / 400 / Noto Sans JP
- Placeholder: `#999999`
- Focus: border 2px `#FF0033`
- Use: Standard form input

**Filled**
- Background: `#f5f5f5`
- Text: `#222222`
- Border: none
- Radius: 8px
- Padding: 14px 16px
- Font: 16px / 400 / Noto Sans JP
- Focus: background `#ffffff` + 2px `#FF0033` border
- Use: Dense forms, search bars

**Amount (Hero)**
- Background: transparent
- Text: `#222222`
- Border: 1px solid `#e0e0e0` (bottom only)
- Radius: 0px
- Padding: 0 0 8px
- Font: 36px / 700 / Noto Sans JP, with `¥` prefix at 24px / 700
- Use: Send/charge amount entry — the big-number moment, paired with on-screen number pad

**Error**
- Background: `#ffffff`
- Text: `#222222`
- Border: 2px solid `#E0002E`
- Radius: 8px
- Padding: 14px 16px
- Helper: error text below in `#E0002E`, 12px, with alert icon
- Use: Validation failure

PIN entry uses a 4-digit dot field with a randomized on-screen keypad for security; OTP uses 6 separate boxes (48px wide, 56px tall, 8px radius, red active border).

### Cards

**Standard**
- Background: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 16px
- Shadow: `0px 1px 4px rgba(0,0,0,0.08)`
- Use: Transaction, feature, and content cards

**Balance Card (Hero)**
- Background: `#FF0033` (or red gradient `linear-gradient(135deg,#FF0033,#E0002E)`)
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 20px
- Shadow: `0px 2px 8px rgba(255,0,51,0.20)` (red-tinted lift)
- Use: Wallet balance hero on home — the signature PayPay surface

**Campaign / Promo**
- Background: `#FFEBEF` or full-bleed promotional image
- Border: none
- Radius: 16px
- Padding: 20px
- Use: Point campaigns, あげる/もらえる offers — bright, image-forward

**Compact (List Item)**
- Background: `#ffffff`
- Border: 1px solid `#eeeeee` (bottom divider only)
- Radius: 0px
- Padding: 14px 16px
- Use: Transaction history rows, settings list rows

### Badges

**Fill / Red**
- Background: `#FF0033`
- Text: `#ffffff`
- Radius: 10px
- Padding: 2px 8px
- Font: 12px / 700 / Noto Sans JP
- Use: "NEW", "限定", primary emphasis

**Fill / Gold (Point)**
- Background: `#FFB200`
- Text: `#ffffff`
- Radius: 10px
- Padding: 2px 8px
- Font: 12px / 700 / Noto Sans JP
- Use: Point amounts, "+100ポイント", reward emphasis

**Fill / Green**
- Background: `#00B900`
- Text: `#ffffff`
- Radius: 10px
- Padding: 2px 8px
- Font: 12px / 700
- Use: 完了 / success state

**Weak / Red**
- Background: `#FFEBEF`
- Text: `#FF0033`
- Radius: 10px
- Padding: 2px 8px
- Font: 12px / 700
- Use: Subtle brand-tinted label

**Weak / Gray**
- Background: `#f5f5f5`
- Text: `#767676`
- Radius: 10px
- Padding: 2px 8px
- Font: 12px / 700
- Use: Neutral metadata badge (category, date)

### Tabs

**Bottom Tab (Active)**
- Background: `#ffffff`
- Border: 1px solid `#eeeeee` (top only)
- Active: `#FF0033` icon + label
- Inactive: `#999999` icon + `#767676` label
- Font: 10px / 500 / Noto Sans JP
- Center action: large red circular "支払う" / QR button, raised above the bar
- Use: 5-tab bottom nav — home, points, QR-pay (center), promotions, account

**Segmented**
- Background: `#f5f5f5`
- Inactive text: `#767676`
- Radius: 10px (track), 8px (thumb)
- Padding: 8px 16px
- Active: `#ffffff` thumb + `#FF0033` text + `0px 1px 3px rgba(0,0,0,0.10)` shadow
- Font: 14px / 700 / Noto Sans JP
- Use: In-screen section switching

### Toasts

**Default**
- Background: `#222222`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0px 4px 12px rgba(0,0,0,0.15)`
- Font: 14px / 500 / Noto Sans JP
- Use: Transient confirmation ("コピーしました"). Payment success is a full dedicated screen, never a toast.

### Dialogs

**Centered Modal**
- Background: `#ffffff`
- Text: `#222222`
- Radius: 16px
- Padding: 24px
- Shadow: `0px 8px 24px rgba(0,0,0,0.18)`
- Buttons: stacked full-width — red primary on top, gray/text secondary below
- Use: Confirmation prompts, alerts

**Bottom Sheet**
- Background: `#ffffff`
- Text: `#222222`
- Radius: 20px (top corners only)
- Padding: 24px 16px
- Drag handle: 36px × 4px `#e0e0e0` pill, centered top
- Shadow: `0px -4px 16px rgba(0,0,0,0.10)`
- Use: Selection, picker, payment-method switch — the dominant overlay pattern

### Toggles

**Default**
- Background: `#FF0033` (on) / `#cccccc` (off)
- Radius: 9999px
- Thumb: `#ffffff` 22px circle, `0px 1px 3px rgba(0,0,0,0.20)` shadow
- Use: Boolean settings (通知, 自動チャージ)

### Payment-Complete Screen (Signature)
- Full-screen `#FF0033` (or red gradient) background
- Centered white checkmark animation, then amount in 36px / 700 white
- Merchant name + timestamp below in white 14px
- Single white button (`#ffffff` bg, `#FF0033` text, 24px radius): "閉じる"
- Optional point-grant animation: gold coins falling + "+◯◯ポイント" badge
- This is PayPay's most recognizable moment — the celebration, not a quiet receipt


**Tier 1 sources:** https://paypay.ne.jp (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 8px (4px allowed for tight internal gaps)
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px
- Horizontal screen margin: 16px (standard mobile)
- Grouped lists: full-bleed rows with 16px internal padding, gray-50 section backdrop

### Grid & Container
- Design baseline: 375px mobile width
- Single-column, mobile-first — no multi-column grid in the app
- Marketing web (paypay.ne.jp): centered content, max-width ~960px, with large hero imagery
- Action grids (home shortcuts): 4-per-row icon grid with labels

### Whitespace Philosophy
- **Money gets a stage.** The balance and payment amounts sit alone with generous margins — they are the hero, never crowded.
- **Energetic density.** Unlike austere bank apps, PayPay packs the home screen with campaign banners, point promos, and shortcuts — it reads as a lively retail surface, not a sparse vault. Density rises on home/promotions, falls on transactional flows.
- **Funnel focus.** Payment and charge flows strip everything away — one amount, one big red button. Distraction is removed at the moment money moves.

### Border Radius Scale
- Tight (8px): Inputs, badges, small chips
- Standard (12px): Cards, inline buttons
- Comfortable (16px): Hero cards, dialogs, campaign cards
- Large (20–24px): Bottom-sheet top, pill CTAs
- Pill (9999px): Toggles, filter chips, round QR/pay center button

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline elements, list rows |
| Subtle (Level 1) | `0px 1px 4px rgba(0,0,0,0.08)` | Cards, content panels |
| Standard (Level 2) | `0px 2px 8px rgba(0,0,0,0.12)` | Raised cards, sticky headers |
| Brand Lift (Level 2r) | `0px 2px 8px rgba(255,0,51,0.20)` | Red balance card / red CTAs — red-tinted glow |
| Elevated (Level 3) | `0px 4px 12px rgba(0,0,0,0.15)` | Dropdowns, popovers, floating buttons |
| Modal (Level 4) | `0px 8px 24px rgba(0,0,0,0.18)` | Bottom sheets, dialogs |

**Shadow Philosophy**: PayPay's shadows are soft and neutral, with one signature exception — the **red-tinted lift** under the balance hero and primary red CTAs, which makes the brand red appear to glow. Elevation is gentle; the energy in PayPay comes from *color and motion*, not deep dramatic depth. The raised circular center "pay" button in the bottom nav uses a stronger neutral shadow to read as physically floating above the bar.

### Blur Effects
- Sticky headers apply a light backdrop blur on scroll
- Modal scrims are flat black `rgba(0,0,0,0.5)`, no blur, keeping the celebratory surfaces crisp

## 7. Do's and Don'ts

### Do
- Use PayPay Red (`#FF0033`) for the primary money action on every screen — it is the brand and the CTA
- Keep surfaces white / gray-50 and let red carry all the energy
- Use the system Japanese font stack (Hiragino / Noto Sans JP / Yu Gothic) — no webfont required
- Make balances and amounts large and 700 weight — numbers are the emotional payload
- Celebrate payment completion with a dedicated full-screen red moment, not a toast
- Use pill / 24px-radius full-width CTAs for primary actions
- Reserve gold (`#FFB200`) for points and green (`#00B900`) for success

### Don't
- Don't dilute the red — one saturated brand red, never a palette of competing accents for primary actions
- Don't use brand red (`#FF0033`) to mean "error"; errors use deeper `#E0002E` plus an alert icon
- Don't render payment success as a quiet toast or inline checkmark — it is a full screen
- Don't introduce a proprietary or decorative display font; stay system-native for checkout reliability
- Don't crowd the payment/charge flow — at the moment money moves, one amount and one button only
- Don't use pure black (`#000`) for text; use `#222222`
- Don't make CTAs square-cornered — PayPay's geometry is rounded and friendly (≥12px, pill for primary)

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <600px | Full app fidelity, 375px baseline, single column |
| Tablet | 600–960px | Marketing web expands hero, optional two-column feature rows |
| Desktop (Web) | >960px | Marketing site centered, max-width ~960px; app mirrored as centered mobile column |

### Touch Targets
- CTAs: 52px tall, full-width with 16px margin
- Bottom nav center pay button: 60–64px circle, raised
- List rows: minimum 48px height
- Number-pad keys: 56–64px for one-handed checkout entry

### Collapsing Strategy
- App is mobile-only; the marketing web is responsive and points users to app-store downloads
- Bottom sheet → centered modal on wider screens
- Sticky bottom CTA bar with safe-area insets
- Horizontal-scroll carousels for campaign banners and point offers

### Image Behavior
- Merchant / bank logos: 32–40px, consistent sizing in lists
- Campaign key art: full-bleed, responsive, maintains aspect ratio
- QR code: large centered square, high-contrast, with brand-red frame accent

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / Brand: PayPay Red (`#FF0033`)
- CTA Pressed: Red Pressed (`#E0002E`)
- Background: White (`#ffffff`)
- Background Surface: Light Gray (`#f5f5f5`)
- Heading text: Near Black (`#222222`)
- Body text: Gray (`#555555`)
- Caption text: Gray (`#767676`)
- Placeholder: Gray (`#999999`)
- Border: Gray 200 (`#e0e0e0`)
- Success: Green (`#00B900`)
- Error: Deep Red (`#E0002E`)
- Points accent: Gold (`#FFB200`)

### Example Component Prompts
- "Create a PayPay balance card: red gradient bg (#FF0033 → #E0002E), 16px radius, 20px padding, red-tinted shadow 0px 2px 8px rgba(255,0,51,0.20). Label 'PayPay残高' 13px weight 400 white 80% opacity. Amount '¥12,400' 28px weight 700 white. Noto Sans JP."
- "Build a pay button: #FF0033 bg, white text, 16px weight 700, height 52px, 24px radius (pill), full-width with 16px margin. Pressed #E0002E. Label '支払う'."
- "Design a transaction row: white bg, bottom divider 1px #eeeeee, 14px h-padding, 48px min-height. Left: 36px circle merchant icon + name 14px weight 700 #222222 + date 12px #767676. Right: '-¥1,200' 14px weight 700 #222222."
- "Create the payment-complete screen: full-screen #FF0033 bg, centered white checkmark, amount '¥1,200' 36px weight 700 white, merchant + timestamp 14px white below, white pill button (#ffffff bg, #FF0033 text, 24px radius) '閉じる'."
- "Design a bottom nav: white bg, top border 1px #eeeeee, 5 items. Active #FF0033 icon+label 10px weight 500, inactive #999999. Center raised red circle pay button 60px with neutral shadow."

### Iteration Guide
1. Use the system Japanese font stack (Hiragino / Noto Sans JP / Yu Gothic) — never a webfont
2. Primary interactive + brand color is `#FF0033`; deeper `#E0002E` for errors/pressed
3. Amounts and points: 700 weight, large size — they are the hero
4. Geometry is rounded: 8px inputs, 12px cards, 16px dialogs, 24px/pill CTAs
5. Surfaces are white / `#f5f5f5`; text `#222222` / `#555555`, never pure black
6. Payment success is a full red screen, not a toast
7. Gold (`#FFB200`) = points, green (`#00B900`) = success, orange (`#FF8800`) = warning

---

## 10. Voice & Tone

PayPay speaks like an enthusiastic, helpful shop clerk: cheerful, casual-polite Japanese (です・ます with friendly energy), short, and benefit-led. It emphasizes speed ("最短1分"), ease ("かんたん"), and reward ("もらえる", "おトク"). Exclamation is welcome — this is a brand that celebrates. Japanese is the only first-class voice; English is incidental.

| Context | Tone |
|---|---|
| CTAs | Short imperative verbs (`支払う`, `チャージする`, `送る`, `今すぐダウンロード`) |
| Success | Bright, complete (`お支払いが完了しました`), often with an exclamation in campaign contexts |
| Errors | Polite, specific, actionable (`残高が不足しています。チャージしてください`). Apology is brief and not groveling. |
| Onboarding | Friendly second-person, one benefit per screen (`スマホひとつで かんたんお支払い`) |
| Amounts | `¥` prefix + comma separators, exact numerals (`¥1,240`), never rounded |
| Points | Celebratory (`100ポイントもらえる！`, `おトク`) — gold accent, enthusiastic |
| Empty states | Encouraging one-liner + one action (`まだ取引履歴がありません`) |
| Legal / disclosure | Formal `ます/です` financial-regulation tone — the one place the cheer drops |

**Forbidden moves.** Don't be cold or bank-formal on consumer surfaces. Don't over-apologize. Don't round monetary amounts on primary surfaces. Don't bury the reward — if there's a point benefit, it leads.

## 11. Brand Narrative

PayPay launched in **October 2018** as a joint venture of **SoftBank** and **Yahoo! Japan** (with early technology ties to India's Paytm), into a country where cash still dominated — Japan's cashless ratio lagged far behind its neighbors. PayPay's founding bet was blunt: subsidize adoption aggressively and make paying *fun*. The now-legendary **"100億円あげちゃうキャンペーン" (the ¥10-billion giveaway)** of late 2018 — refunding a portion of every payment, with lottery-style full refunds — detonated awareness overnight and made the red PayPay badge ubiquitous at convenience stores, restaurants, and tiny neighborhood shops.

That campaign DNA defines the design. PayPay is not trying to feel like a private bank; it is trying to feel like the most rewarding way to pay. The screaming **`#FF0033`** red, the celebratory payment-complete screen, the falling-coin point animations, the cheerful clerk-like voice — all of it descends from "make paying feel like winning." Where Toss (Korea) earns trust through restraint and Stripe through precision, PayPay earns loyalty through **reward and delight**.

Today PayPay is the dominant QR wallet in Japan with the largest user base among code-payment apps, now under **LY Corporation** (the merged LINE × Yahoo Japan entity within the SoftBank group). Its ecosystem spans payments, PayPayポイント, PayPay銀行 (bank), PayPayカード (card), and PayPay証券 (securities) — a super-app, but one whose center of gravity remains the in-store QR tap.

What PayPay refuses: the austere navy seriousness of legacy Japanese banking, the muted minimalism of Western fintech, and any design that makes paying feel like a chore. PayPay occupies the loud, bright, reward-forward end of fintech — closer to retail than to banking, by deliberate design.

## 12. Principles

1. **One red rules.** `#FF0033` is the brand, the CTA, and the energy. Never split primary emphasis across multiple accent colors — the single saturated red is the identity.
2. **Paying should feel like winning.** Every completed payment is celebrated, not merely confirmed. The full-screen red moment and point animations are core, not decoration.
3. **Numbers are the hero.** Balances, amounts, and points get the largest, heaviest treatment on screen. Money is the emotional payload.
4. **System-native for reliability.** At a checkout counter, the font must render instantly on any phone. Use the OS Japanese stack; never gate a payment on a webfont.
5. **Friendly geometry.** Rounded corners, pill CTAs, soft cards. The shape language says approachable, not institutional.
6. **Funnel removes friction.** When money moves, strip the screen to one amount and one button. Energy lives on home; focus lives in the flow.
7. **Reward leads.** If there's a point or おトク benefit, surface it prominently — gold accent, enthusiastic copy. The deal is the draw.
8. **Cheerful, never cold.** The voice is an upbeat shop clerk. Bank-formal tone is reserved only for legal disclosure.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Japanese mobile-payment user segments, not individual people.*

**ゆうき (Yuki), 26, Tokyo.** Office worker in Shibuya. Pays for everything with PayPay — convenience store lunch, izakaya splits, the vending machine. Opens the app a dozen times a day and lives for the point campaigns; checks "おトク" offers before deciding where to eat. Expects the QR/pay screen to be one tap from anywhere and the payment-complete animation to confirm in under a second. If a shop doesn't take PayPay, she's mildly annoyed.

**田中さん (Mr. Tanaka), 58, Osaka.** Runs a small ramen shop. Adopted PayPay during the ¥10-billion campaign because customers asked for it and the merchant QR sticker was free to set up. Uses the merchant side daily to confirm incoming payments; values the clear, loud confirmation sound and the big amount on screen — he needs to verify a payment landed without squinting. Reads Japanese only; trusts the red badge as shorthand for "this works."

**あや (Aya), 34, Fukuoka.** Working parent. Uses PayPay for groceries, kids' supplies, and 送る (sending money) to family. Relies on auto-charge (自動チャージ) so she never hits an empty balance at the register. Tracks points carefully — they offset real household spending. Wants the transaction history clean and searchable, and the balance always visible the instant she opens the app.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | Friendly one-liner in `#555555` body (`まだ取引履歴がありません`) + one suggested action as a red outline button. Light, encouraging, never an error tone. |
| **Empty (filter cleared)** | Single `#767676` caption line (`条件に合う結果がありません`). User resets the filter. |
| **Loading (first paint)** | Skeleton blocks at `#eeeeee` matching final layout. Balance shows `¥--` until resolved, never a fake number. |
| **Loading (refresh)** | Pull-down spinner in `#FF0033`. Content stays visible with prior values; no blocking overlay. |
| **Error (inline field)** | 2px `#E0002E` border + error text below in `#E0002E` 12px with alert icon. One actionable sentence (`残高が不足しています`). |
| **Error (toast)** | `#222222` bg, white 14px text, ~3s auto-dismiss, bottom inset 16px. One sentence, no celebration. |
| **Error (screen-blocking)** | Server outage only: white screen, centered `#222222` 16px weight 700 message, red retry button below. No illustration of failure as fun. |
| **Success (routine)** | Brief `#FFEBEF` flash behind the updated element, 300ms fade. For toggles/settings. |
| **Success (payment)** | Dedicated full-screen `#FF0033` moment — white checkmark animation, amount 36px weight 700, merchant + timestamp, single `閉じる` button. Optional gold point-grant animation. Never a toast. |
| **Skeleton** | `#eeeeee` blocks at final dimensions, 1.2s shimmer with white highlight, component-matched radius. Amounts show `¥--`, never skeleton bars. |
| **Disabled** | Red CTA drops to `#FFB3C1`; neutral buttons to `#f5f5f5` + `#cccccc` text. Geometry stable. |
| **Loading inside button** | White spinner replaces label, button width fixed, press committed — no double-submit. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox changes |
| `motion-fast` | 150ms | Hover, focus, button-press, small reveals |
| `motion-standard` | 250ms | Default — sheet open, card expand, tab switch |
| `motion-slow` | 400ms | Emphasized — onboarding advance, balance update |
| `motion-celebrate` | 700ms | Payment-complete checkmark + point animation |
| `motion-page` | 300ms | Full-screen route transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — sheets, toasts, screen pushes |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — collapsible cards, tabs |
| `ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | The celebration — payment checkmark, point-coin drop. PayPay licenses overshoot freely here because delight is the brand. |

**Signature motions.**

1. **Payment celebration.** On a completed payment, the screen fills red, a white checkmark draws and pops with `ease-bounce` over `motion-celebrate`, the amount scales up, and — if points were earned — gold coins fall and a "+◯◯ポイント" badge bounces in. This is PayPay's defining animation: paying feels like winning.
2. **Balance update.** When the balance changes, the old number fades and the new number counts up / slides in over `motion-slow` with `ease-standard`. Money is never cross-faded mid-value (looks like a bug).
3. **Bottom-sheet presentation.** Sheets rise from `y+40px` with `motion-standard / ease-enter`, backdrop fades to `rgba(0,0,0,0.5)`. Dismissal uses `motion-fast / ease-exit` — lighter leaving than entering.
4. **Center pay button.** Tapping the raised red QR/pay button gives a quick `motion-fast` press-scale (0.94) before opening the scanner full-screen — a tactile, confident launch.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant` and the celebration becomes a static red success screen (checkmark + amount, no coins). The app stays joyful in color; just not kinetic.

<!--
OmD v0.1 Sources — PayPay (ペイペイ)

Direct verification via WebFetch (2026-06-06):
- https://paypay.ne.jp — confirms mobile-payment positioning, white surfaces with
  red CTAs, app-download focus, and casual-friendly Japanese voice
  ("スマホひとつで かんたんに お支払いはPayPayで", "登録は無料！最短1分",
  "いますぐPayPayアプリをダウンロード"). Exact CSS hex not exposed in source.

Brand color #FF0033 is PayPay's widely-documented official red (the saturated
red of the wordmark and app icon). Used as primary_color and primary CTA hue.

Typeface: PayPay ships no proprietary font and publishes no public design system.
The system-native Japanese stack (Hiragino Kaku Gothic / Noto Sans JP / Yu Gothic)
is the standard, documented approach for Japanese consumer apps and matches the
app's rendering. Component tokens in §4 are reconstructed from the live app and
marketing surfaces, expressed in PayPay's idiom — representative, not spec-exact.

Brand history (§11): PayPay launched October 2018 as a SoftBank × Yahoo! Japan
joint venture; the "100億円あげちゃうキャンペーン" (¥10bn giveaway) drove mass
adoption; PayPay now sits under LY Corporation (LINE × Yahoo Japan, SoftBank group).
These are widely documented public facts (see Wikipedia: PayPay).

Personas (§13) are fictional archetypes informed by publicly described Japanese
mobile-payment user segments. Any resemblance to specific individuals is unintended.

Interpretive claims (e.g., "paying should feel like winning") are editorial
readings of PayPay's campaign-driven design, not documented PayPay statements.
-->
