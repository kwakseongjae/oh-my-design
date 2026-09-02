# PayPay Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

PayPay (ペイペイ) is Japan's dominant QR-code mobile wallet — the app that, almost single-handedly, dragged a famously cash-loving country into cashless payments. Catalog homepage identity is `https://paypay.ne.jp`. Catalog `primary_color` is `#FF0033`. This contract covers the two surfaces the source names for its reconstructed token set: the live PayPay app and the marketing site at `https://paypay.ne.jp`. The source records that PayPay publishes no public design-system documentation, that the values are reconstructed from those two surfaces and expressed as a coherent, agent-usable token set in PayPay's idiom, and that geometry is representative rather than spec-exact. YAML `tokens.source` is `prose-derived`. Every value stays attached to the surface that established it. Reading those two named surfaces as this contract's token surfaces, keeping values attached to the surface that established them, and treating the reconstruction as representative geometry rather than a published specification, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

The source's visual layer is loud where Japanese fintech is traditionally quiet: a single, screaming **PayPay Red (`#FF0033` / token-set `#ff0033`)** sits at the center of everything, and the entire interface orbits it. Where a legacy Japanese bank app whispers in navy and gray, PayPay shouts in pure, saturated red. That red is the brand; remove it and nothing is left. Surfaces are white (`#ffffff`) and very-light-gray (`#f5f5f5`); text is near-black (`#222222`); and the red functions as both the brand mark and the universal "tap here / this is money" signal. Typography is unapologetically **system-native Japanese**: Hiragino Kaku Gothic on iOS, Noto Sans / Yu Gothic on Android and web, with rounded, friendly weights for headlines. There is no proprietary typeface — PayPay's identity lives in color and the wordmark, not in custom type. Numerals get heavy weight because balances and point totals are the emotional payload of the app. What defines PayPay visually is the **balance/point hero**: a large red or white number, the cheerful payment-complete screen, and the omnipresence of the red round "PayPay" wordmark badge. The brand is mobile-first to the bone — designed for one-handed use at a checkout counter in under two seconds. The hex values, the type-stack names, the wordmark, the 375px baseline named in Key Characteristics, and the published Japanese lines in later sections are recorded. The characterizations built on them — loud where Japanese fintech is traditionally quiet; that red is the brand and removing it leaves nothing; bright, confident, and aggressively friendly; closer to a consumer retail app — think convenience-store energy, point campaigns, lottery-style 「あたり」 (you won!) moments — than to the austere, trust-through-restraint posture of a private bank; payments should feel *fun*, *rewarding*, and *instant*; the design celebrates every transaction with motion, sound, and color — are a derived editorial implementation inference from the verified surfaces; they are not PayPay-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. PayPay launched in **October 2018** as a joint venture of **SoftBank** and **Yahoo! Japan** (with early technology ties to India's Paytm), into a country where cash still dominated — Japan's cashless ratio lagged far behind its neighbors. PayPay's founding bet was blunt: subsidize adoption aggressively and make paying *fun*. The now-legendary **"100億円あげちゃうキャンペーン" (the ¥10-billion giveaway)** of late 2018 — refunding a portion of every payment, with lottery-style full refunds — detonated awareness overnight and made the red PayPay badge ubiquitous at convenience stores, restaurants, and tiny neighborhood shops. That campaign DNA defines the design. PayPay is not trying to feel like a private bank; it is trying to feel like the most rewarding way to pay. The screaming **`#FF0033`** red, the celebratory payment-complete screen, the falling-coin point animations, the cheerful clerk-like voice — all of it descends from "make paying feel like winning." Where Toss (Korea) earns trust through restraint and Stripe through precision, PayPay earns loyalty through **reward and delight**. Today PayPay is the dominant QR wallet in Japan with the largest user base among code-payment apps, now under **LY Corporation** (the merged LINE × Yahoo Japan entity within the SoftBank group). Its ecosystem spans payments, PayPayポイント, PayPay銀行 (bank), PayPayカード (card), and PayPay証券 (securities) — a super-app, but one whose center of gravity remains the in-store QR tap. What PayPay refuses: the austere navy seriousness of legacy Japanese banking, the muted minimalism of Western fintech, and any design that makes paying feel like a chore. PayPay occupies the loud, bright, reward-forward end of fintech — closer to retail than to banking, by deliberate design. The years, joint-venture names, Paytm tie, campaign name, merchant-location list, LY Corporation parentage, ecosystem product names, in-store QR-tap center of gravity, and that last-sentence refuses / closer-to-retail pairing are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-campaign narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Pay with 支払う — the primary money action and the center raised red QR / 支払う button.
- Charge with チャージ.
- Send with 送る.
- Read the wallet-balance hero labelled PayPay残高.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly described Japanese mobile-payment user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: publicly described Japanese mobile-payment user segments. Reading that source-named group as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

- PayPay Red (`#FF0033` / `#ff0033`) as the singular brand and primary interactive color — bold, saturated, impossible to miss
- System-native Japanese type stack (Hiragino / Noto Sans JP / Yu Gothic), no proprietary font
- White and light-gray surfaces; near-black text — red carries all the energy
- Rounded, friendly geometry — generous radii (8–24px), pill CTAs, soft cards
- Reward-driven, celebratory UX — payment-complete and point-grant moments are dedicated, animated screens
- Mobile-first at 375px baseline, one-handed checkout-counter ergonomics
- High-contrast, retail-bright aesthetic over fintech austerity

### Principles

These 8 items are a derived editorial implementation inference from the verified surfaces; they are not PayPay-authored or a separately published UI specification. The source states them in its own Principles section.

1. **One red rules.** `#FF0033` is the brand, the CTA, and the energy. Never split primary emphasis across multiple accent colors — the single saturated red is the identity.
2. **Paying should feel like winning.** Every completed payment is celebrated, not merely confirmed. The full-screen red moment and point animations are core, not decoration. The source HTML comment cites the same interpretive claim as "paying should feel like winning".
3. **Numbers are the hero.** Balances, amounts, and points get the largest, heaviest treatment on screen. Money is the emotional payload.
4. **System-native for reliability.** At a checkout counter, the font must render instantly on any phone. Use the OS Japanese stack; never gate a payment on a webfont.
5. **Friendly geometry.** Rounded corners, pill CTAs, soft cards. The shape language says approachable, not institutional.
6. **Funnel removes friction.** When money moves, strip the screen to one amount and one button. Energy lives on home; focus lives in the flow.
7. **Reward leads.** If there's a point or おトク benefit, surface it prominently — gold accent, enthusiastic copy. The deal is the draw.
8. **Cheerful, never cold.** The voice is an upbeat shop clerk. Bank-formal tone is reserved only for legal disclosure.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not PayPay-authored or a separately published UI specification.

- Use PayPay Red (`#FF0033`) for the primary money action on every screen — it is the brand and the CTA
- Keep surfaces white / gray-50 and let red carry all the energy
- Use the system Japanese font stack (Hiragino / Noto Sans JP / Yu Gothic) — no webfont required
- Make balances and amounts large and 700 weight — numbers are the emotional payload
- Celebrate payment completion with a dedicated full-screen red moment, not a toast
- Use pill / 24px-radius full-width CTAs for primary actions
- Reserve gold (`#FFB200`) for points and green (`#00B900`) for success

### Avoid

The source states these seven as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not PayPay-authored or a separately published UI specification.

- Don't dilute the red — one saturated brand red, never a palette of competing accents for primary actions
- Don't use brand red (`#FF0033`) to mean "error"; errors use deeper `#E0002E` plus an alert icon
- Don't render payment success as a quiet toast or inline checkmark — it is a full screen
- Don't introduce a proprietary or decorative display font; stay system-native for checkout reliability
- Don't crowd the payment/charge flow — at the moment money moves, one amount and one button only
- Don't use pure black (`#000`) for text; use `#222222`
- Don't make CTAs square-cornered — PayPay's geometry is rounded and friendly (≥12px, pill for primary)

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys keep the YAML lowercase hex. Source §2 spells several of the same roles in mixed case; both forms are kept on the row. Pairing each hex to the token-set path named beside it, keeping `#e0002e` as both `tokens.colors.primary-pressed` and `tokens.colors.error` rather than merging the two roles, keeping `#222222` as both `tokens.colors.ink` and Gray 900 rather than collapsing those labels, keeping catalog identity `primary_color` `#FF0033` beside token-set `tokens.colors.primary` `#ff0033` as two spellings of the same role, and reading Success Green as echoing the LINE-green of the parent LY group ecosystem, are derived editorial implementation inferences from the verified surfaces; they are not PayPay-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Primary

- **PayPay Red** (`#FF0033` / token-set `#ff0033`): The brand. Primary CTAs, the wordmark badge, active states, key balances, selection highlights. Every tappable money-action is this red. Token-set key `tokens.colors.primary`. Catalog identity `primary_color` `#FF0033`.
- **Red Pressed** (`#E0002E` / token-set `#e0002e`): Darker red for hover/pressed state on red CTAs. Token-set key `tokens.colors.primary-pressed`.
- **Red Deep** (`#CC0029` / token-set `#cc0029`): Strongest red — used sparingly for emphasis on red-on-red layering and gradients. Token-set key `tokens.colors.primary-deep`.
- **Red Tint** (`#FFEBEF` / token-set `#ffebef`): Very light red wash — informational backgrounds, selected-row tint, subtle brand-tinted surfaces. Token-set key `tokens.colors.primary-tint`.
- **Primary disabled** (`#ffb3c1`): YAML-only role. Red CTA disabled fill. Token-set key `tokens.colors.primary-disabled`.

Canvas, ink, brand mark

- **Pure White** (`#ffffff`): Page background, card surfaces, text on red. Token-set key `tokens.colors.canvas`.
- **Near Black** (`#222222`): Primary heading and body text. Warm-neutral near-black, never pure `#000`. Token-set key `tokens.colors.ink`.
- **White Wordmark**: The "PayPay" logotype reverses to white on red backgrounds; red on white otherwise. No third logo color exists.

Semantic

- **Success Green** (`#00B900` / token-set `#00b900`): Payment success, positive confirmations, "完了" states. (Echoes the LINE-green of the parent LY group ecosystem.) Token-set key `tokens.colors.success`.
- **Error Red** (`#E0002E` / token-set `#e0002e`): Errors, destructive actions. Distinguished from brand red by being slightly deeper and paired with an alert icon (brand red alone never means "error"). Token-set key `tokens.colors.error`. This is the same hex as `tokens.colors.primary-pressed`; the two roles stay unmerged.
- **Warning Orange** (`#FF8800` / token-set `#ff8800`): Pending states, expiring-points warnings, attention banners. Token-set key `tokens.colors.warning`.
- **Info Blue** (`#0088FF` / token-set `#0088ff`): Informational links, neutral system notices, KYC/verification flows. Token-set key `tokens.colors.info`.
- **Point Gold** (`#FFB200` / token-set `#ffb200`): PayPayポイント (points) accent — coins, point totals in campaign contexts, "もらえる" moments. Token-set key `tokens.colors.point-gold`.

Neutral scale

- **Gray 50** (`#f5f5f5`): Lightest gray — page section background, grouped-list backdrop. Token-set key `tokens.colors.gray-50`.
- **Gray 100** (`#eeeeee`): Card fills on white, disabled surfaces. Token-set key `tokens.colors.gray-100`.
- **Gray 200** (`#e0e0e0`): Default border, dividers, input outlines. Token-set key `tokens.colors.gray-200`.
- **Gray 300** (`#cccccc`): Strong border, disabled icon fills. Token-set key `tokens.colors.gray-300`.
- **Gray 400** (`#999999`): Placeholder text, inactive icons. Token-set key `tokens.colors.gray-400`.
- **Gray 500** (`#767676`): Caption text, secondary labels, metadata. Token-set key `tokens.colors.gray-500`.
- **Gray 700** (`#555555`): Body text, descriptions. Token-set key `tokens.colors.gray-700`.
- **Gray 900** (`#222222`): Headings, strong labels, primary text. Source §2 label; not a YAML `tokens.colors.gray-900` key. Same hex as `tokens.colors.ink`; the two labels stay unmerged.

Surface and borders

- **Border Default**: `#e0e0e0` (gray200). Card borders, input borders, dividers.
- **Border Strong**: `#cccccc` (gray300). Emphasized borders, active input outline base.
- **Background Float**: `#ffffff`. Tooltips, dropdowns, floating panels.
- **Overlay Scrim**: `rgba(0,0,0,0.5)`. Modal and bottom-sheet backdrop — neutral black, not red-tinted.

### Spacing

Unitless token-set steps from `tokens.spacing`: `sm 8` · `base 16` · `lg 24`. Source §5 also names a base unit of 8px (4px allowed for tight internal gaps) and common values 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px. Horizontal screen margin: 16px (standard mobile). Grouped lists: full-bleed rows with 16px internal padding, gray-50 section backdrop. `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8`. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16` and is not a type size. `tokens.spacing.lg: 24` is not `tokens.rounded.xl: 24` and is not button padding `0 24px`. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

### Shape

Unitless token-set steps from `tokens.rounded`: `sm 8` · `md 12` · `lg 16` · `xl 24` · `full 9999`.

The source's named radius uses, kept on their own rows:

- Tight (8px): Inputs, badges, small chips — `tokens.rounded.sm`
- Standard (12px): Cards, inline buttons — `tokens.rounded.md`
- Comfortable (16px): Hero cards, dialogs, campaign cards — `tokens.rounded.lg`
- Large (20–24px): Bottom-sheet top, pill CTAs — `20–24px` is a §5 named band; YAML `tokens.rounded.xl` is `24` only
- Pill (9999px): Toggles, filter chips, round QR/pay center button — `tokens.rounded.full`

`tokens.rounded.full: 9999` stays the unitless full step. It is not a type size and it is not the 10px badge radius. `tokens.rounded.md: 12` is not `tokens.spacing` 12px as a spacing-step synonym. `tokens.rounded.lg: 16` is not `tokens.spacing.base: 16`. Keeping those paths unmerged, and keeping the §5 `20–24px` band beside YAML `xl: 24`, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline elements, list rows |
| Subtle (Level 1) | `0px 1px 4px rgba(0,0,0,0.08)` | Cards, content panels. Token-set path `tokens.shadow.card` |
| Standard (Level 2) | `0px 2px 8px rgba(0,0,0,0.12)` | Raised cards, sticky headers. §6-only; not a YAML `tokens.shadow.*` key |
| Brand Lift (Level 2r) | `0px 2px 8px rgba(255,0,51,0.20)` | Red balance card / red CTAs — red-tinted glow. §6-only |
| Elevated (Level 3) | `0px 4px 12px rgba(0,0,0,0.15)` | Dropdowns, popovers, floating buttons. Token-set path `tokens.shadow.toast` |
| Modal (Level 4) | `0px 8px 24px rgba(0,0,0,0.18)` | Bottom sheets, dialogs. Token-set path `tokens.shadow.dialog` |

Further elevation records, kept on their own rows: bottom-sheet `0px -4px 16px rgba(0,0,0,0.10)`; toggle thumb `0px 1px 3px rgba(0,0,0,0.20)`; segmented active thumb `0px 1px 3px rgba(0,0,0,0.10)`.

**Shadow Philosophy**, as the source states it: PayPay's shadows are soft and neutral, with one signature exception — the **red-tinted lift** under the balance hero and primary red CTAs, which makes the brand red appear to glow. Elevation is gentle; the energy in PayPay comes from *color and motion*, not deep dramatic depth. The raised circular center "pay" button in the bottom nav uses a stronger neutral shadow to read as physically floating above the bar.

**Blur Effects**, as the source states them: Sticky headers apply a light backdrop blur on scroll. Modal scrims are flat black `rgba(0,0,0,0.5)`, no blur, keeping the celebratory surfaces crisp.

Reading that stack as a six-level elevation record plus three extra local shadows, reading energy as coming from color and motion rather than dramatic depth, and keeping YAML `tokens.shadow.card` / `toast` / `dialog` unmerged from the §6-only Level 2 / 2r / bottom-sheet / thumb shadows, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a prose-derived reconstruction. The duration names, millisecond values, easing *roles*, signature motions, and reduced-motion rule below are kept as the source wrote them. The four cubic-bezier values match the documented template re-injection path in `spec/omd-v0.1.md` (`ease-enter`, `ease-exit`, `ease-standard`, `ease-spring`) and are not traceable to PayPay-computed samples, so the curves are omitted here and only the roles and their uses are kept. That omission, and treating the durations, roles, signature motions, and reduced-motion rule as this record rather than a published PayPay motion specification, are a derived editorial implementation inference from the verified surfaces; they are not PayPay-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox changes |
| `motion-fast` | 150ms | Hover, focus, button-press, small reveals |
| `motion-standard` | 250ms | Default — sheet open, card expand, tab switch |
| `motion-slow` | 400ms | Emphasized — onboarding advance, balance update |
| `motion-celebrate` | 700ms | Payment-complete checkmark + point animation |
| `motion-page` | 300ms | Full-screen route transitions |

Easing roles — four roles with declared uses. Curves omitted:

| Token | Use |
|---|---|
| `ease-enter` | Things appearing — sheets, toasts, screen pushes |
| `ease-exit` | Things leaving — dismissals |
| `ease-standard` | Two-way transitions — collapsible cards, tabs |
| `ease-bounce` | The celebration — payment checkmark, point-coin drop. The source writes that PayPay licenses overshoot freely here because delight is the brand. The curve matches template `ease-spring` and is omitted |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

**Signature motions**, as the source states them.

1. **Payment celebration.** On a completed payment, the screen fills red, a white checkmark draws and pops with `ease-bounce` over `motion-celebrate`, the amount scales up, and — if points were earned — gold coins fall and a "+◯◯ポイント" badge bounces in. This is PayPay's defining animation: paying feels like winning.
2. **Balance update.** When the balance changes, the old number fades and the new number counts up / slides in over `motion-slow` with `ease-standard`. Money is never cross-faded mid-value (looks like a bug).
3. **Bottom-sheet presentation.** Sheets rise from `y+40px` with `motion-standard / ease-enter`, backdrop fades to `rgba(0,0,0,0.5)`. Dismissal uses `motion-fast / ease-exit` — lighter leaving than entering.
4. **Center pay button.** Tapping the raised red QR/pay button gives a quick `motion-fast` press-scale (0.94) before opening the scanner full-screen — a tactile, confident launch.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant` and the celebration becomes a static red success screen (checkmark + amount, no coins). The app stays joyful in color; just not kinetic.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The source records that PayPay ships no proprietary font and publishes no public design system. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification. |
| Live computed surface-use | The source records a system-native Japanese stack and YAML `tokens.typography.family.sans: Noto Sans JP`. Token-set source is `prose-derived`. Placing that YAML sans family on this live-computed row, without promoting it as a computed-style harvest of every app screen, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification. |
| Official distributed asset | No PayPay-exclusive downloadable font package was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification. |
| Declared-only | The source records the fallback members `"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", "Meiryo", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif` after Noto Sans JP, and `"SF Mono", Menlo, Consolas, monospace` for rare developer/merchant-dashboard use. They are fallbacks or a rare mono face, not a second brand UI face. Classing those members as not the brand UI face is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification. |
| License | The source records Noto Sans JP / Hiragino / Yu Gothic as the OS Japanese stack. This record does not establish a PayPay-issued font-license notice. That face-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces the source did not name for the reconstructed token set stays outside this reconstruction. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification. |

### Family

- **Current visible UI family (YAML):** `Noto Sans JP`. Token-set path `tokens.typography.family.sans`.
- **Mono (YAML):** `SF Mono`. Token-set path `tokens.typography.family.mono` — rare, used only in developer/merchant dashboards.
- **Primary stack the source writes in §3:** `"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", "Yu Gothic", "YuGothic", "Meiryo", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`
- **Monospace stack the source writes in §3:** `"SF Mono", Menlo, Consolas, monospace`
- **Numerals / Display:** Same stack, heavy weights (700) — PayPay leans on `Noto Sans JP` Bold and system bold for balances and point totals. No proprietary typeface.
- Do not replace Noto Sans JP / Hiragino / Yu Gothic with a webfont or a decorative display face. A fallback member of the stack is never presented as a proprietary PayPay typeface. That first-face restatement and that fallback prohibition are a derived editorial implementation inference from the verified surfaces; they are not PayPay-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). The parenthetical px figures are the source §3 spelling, not a replacement of the YAML ratio. Token-set `use` strings are kept verbatim. Amount Hero has no YAML `lineHeight`; that field stays empty rather than inheriting a ratio, and the §3 writing `tight` stays beside it. Keeping YAML line heights as unitless ratios, keeping the YAML sizes and the §3 px spellings on separate readings, leaving Amount Hero without an invented line-height, and keeping §3-only size notes off invented keys, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Letter spacing | Token-set path | Token-set use |
|---|---|---:|---:|---|---|---|---|
| Display Hero | Noto Sans JP | 32 | 700 | 1.38 (44px) | normal | `tokens.typography.display-hero` | Splash, campaign hero, big point moments |
| Balance Display | Noto Sans JP | 28 | 700 | 1.29 (36px) | normal | `tokens.typography.balance` | Wallet balance, the emotional center |
| Display Large | Noto Sans JP | 24 | 700 | 1.42 (34px) | normal | `tokens.typography.display-lg` | Section headers, key metrics |
| Heading Large | Noto Sans JP | 20 | 700 | 1.4 (28px / 1.40) | normal | `tokens.typography.heading-lg` | Feature titles, modal headers |
| Heading | Noto Sans JP | 18 | 700 | 1.44 (26px) | normal | `tokens.typography.heading` | Card headings, sub-sections |
| Subtitle | Noto Sans JP | 16 | 700 | 1.5 (24px / 1.50) | normal | `tokens.typography.subtitle` | List headers, nav titles |
| Body Large | Noto Sans JP | 16 | 400 | 1.63 (26px) | normal | `tokens.typography.body-lg` | Descriptions, explanations |
| Body | Noto Sans JP | 14 | 400 | 1.57 (22px) | normal | `tokens.typography.body` | Standard reading text |
| Body Small | Noto Sans JP | 13 | 400 | 1.54 (20px) | normal | `tokens.typography.body-sm` | Secondary information |
| Caption | Noto Sans JP | 12 | 400 | 1.5 (18px / 1.50) | normal | `tokens.typography.caption` | Timestamps, fine print, legal |
| Amount Hero | Noto Sans JP | 36 | 700 | (YAML none; §3 tight) | normal | `tokens.typography.amount-hero` | Payment amount on checkout/complete |

§3 writes Amount Hero size as `36px+`. That longer spelling stays beside YAML `size: 36`; it is not a conversion of it.

Type principles, as the source states them. Treating them as current-surface type rules is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

- **System-native by design.** PayPay deliberately uses the OS Japanese font so text renders crisply on every device without webfont latency at a checkout counter. Hiragino on iOS, Noto Sans JP / Yu Gothic on Android & web.
- **Weight is the hierarchy.** With one type family, PayPay separates levels almost entirely through weight (400 body, 700 headings/amounts) and size — not through multiple families or styles.
- **Numbers shout.** Balances, payment amounts, and point totals are the loudest elements on any screen: 700 weight, large size, often in red or near-black with a `¥` / `P` (ポイント) unit at a smaller weight.
- **Japanese-first, Latin-secondary.** Latin numerals and the "PayPay" wordmark coexist inside Japanese text; line-height runs generous (1.5–1.65) to give kanji/kana room to breathe.
- **No italics, minimal letter-spacing.** Japanese type avoids italics; emphasis comes from weight and color, never slant.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=paypay.ne.jp&sz=128`.
- White Wordmark / red wordmark badge as the source records them: the "PayPay" logotype reverses to white on red backgrounds; red on white otherwise. No third logo color exists.
- Merchant / bank logos: 32–40px, consistent sizing in lists.
- Campaign key art: full-bleed, responsive, maintains aspect ratio.
- QR code: large centered square, high-contrast, with brand-red frame accent.

Reading the favicon URL as an identity pointer rather than a PayPay-hosted brand file, and reading the wordmark reverse as the named logo treatment rather than a third color, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `input`, `card`, `listItem`, `badge`, `tab`, `toast`, `dialog`, `toggle`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination or dismiss control that commits no operation in place, a tab that only selects a destination, a toggle that only flips a boolean, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component. A §4-only component that is not in the token set is labeled `not in the token set`.

The source records Focus as a 2px `#FF0033` border on inputs. Generic focus is not invented as `focus-visible` treatment evidence. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The source's reconstruction note is kept here: PayPay publishes no public design-system documentation; values are reconstructed from the live PayPay app and paypay.ne.jp marketing surfaces, expressed as a coherent, agent-usable token set in PayPay's idiom; treat geometry as representative rather than spec-exact.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not PayPay-authored or a separately published UI specification. This is not a complete state-coverage claim.

YAML `use` strings and the longer §4 Use lines stay two records where they differ in length; the longer form is the one expanded below. Keeping those two writings unmerged, keeping YAML lowercase hex beside §4 mixed-case hex, and keeping YAML radii beside §4 size-scale radii, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

### Primary (Fill / Red)

- Role: primary money action
- Primitive type: `button` · Kind: interactive
- Background: `#FF0033` / token-set `#ff0033`
- Text: `#ffffff`
- Border: none
- Radius: YAML `24`; §4 `24px` (pill) on CTAs; `12px` on inline actions
- Padding: `0 24px`
- Font: 16px / 700 / Noto Sans JP
- Height: 52px (full-width mobile CTA)
- Pressed: background `#E0002E`
- Disabled: background `#FFB3C1` (red at reduced saturation), text `#ffffff`
- Loading: white spinner replaces label, width preserved
- Token-set font record: `16px/700`
- Token-set use: `Primary money action (支払う, チャージ, 送る)`
- Use: Primary money action — 支払う (Pay), チャージ (Charge), 送る (Send)

Size scale the source records for buttons (height · font · radius): `small` 36px · 14px / 700 · 18px; `medium` 44px · 15px / 700 · 22px; `large` (default CTA) 52px · 16px / 700 · 24px. CTAs are full-width with 16px horizontal screen margin; inline buttons auto-width.

The YAML radius `24` and the §4 pair `24px` (pill CTAs) / `12px` (inline actions) stay two records. Keeping those two radius writings unmerged is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; pressed treatment `#E0002E` is recorded; hover visual is omitted where not separately painted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Treatment `#FFB3C1` fill, `#ffffff` text |
| loading | applicable | White spinner replaces label, width preserved, press committed — no double-submit |
| error | not-applicable | Failed payment is reported by Error (inline field) / Error (toast) / Error (screen-blocking), not as error chrome on this button |
| success | not-applicable | Successful payment is reported by the Payment-Complete Screen, not as success chrome on this button |

### Secondary (Outline / Red)

- Role: secondary action paired with a red primary
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#FF0033` / token-set `#ff0033`
- Border: 1.5px solid `#FF0033`
- Radius: 24px
- Padding: `0 24px`
- Font: 16px / 700 / Noto Sans JP
- Height: 52px
- Pressed: background `#FFEBEF`
- Token-set font record: `16px/700`
- Token-set use: `Secondary action paired with red primary`
- Use: Secondary action paired with a red primary (キャンセル alternatives, 後で)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; pressed treatment `#FFEBEF` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A paired action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a キャンセル / 後で alternative; it does not commit a payment whose in-progress state it could report |
| error | not-applicable | Dismiss / defer is not an operation this button reports as failure |
| success | not-applicable | Same role reason: reaching the alternative is not an operation with a success result on this button |

### Neutral (Fill / Gray)

- Role: low-emphasis dismiss
- Primitive type: `button` · Kind: interactive
- Background: `#f5f5f5`
- Text: `#555555`
- Border: none
- Radius: 24px
- Padding: `0 24px`
- Font: 16px / 700 / Noto Sans JP
- Height: 52px
- Token-set font record: `16px/700`
- Token-set use: `Low-emphasis dismiss (閉じる, 戻る)`
- Use: Low-emphasis / dismiss action (閉じる, 戻る)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A dismiss control whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control dismisses or goes back; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Dismiss / back is not an operation this button reports as failure |
| success | not-applicable | Same role reason: leaving the screen is not an operation with a success result on this button |

### Text Button

- Role: inline tertiary action
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#FF0033` / token-set `#ff0033`
- Border: none
- Padding: `8px 12px`
- Font: 15px / 700 / Noto Sans JP
- Token-set font record: `15px/700`
- Token-set use: `Inline tertiary action (もっと見る)`
- Use: Inline tertiary action, "もっと見る", "詳細"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | An inline action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens more content or a detail destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination / expand action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching more content is not an operation this button reports as success |

### Box (default)

- Role: standard form input
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#e0e0e0`
- Radius: 8px
- Padding: `14px 16px`
- Font: 16px / 400 / Noto Sans JP
- Placeholder: `#999999`
- Focus: border 2px `#FF0033` (generic focus; not promoted as `focus-visible` treatment)
- Token-set font record: `16px/400`
- Token-set use: `Standard form input`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field accepts a value; page skeletons report in-progress content, and the input stays a fill |
| error | applicable | A form field can fail validation; Error input treatment is recorded on the §4 Error row |
| success | not-applicable | The field does not complete a payment on itself |

### Filled

- Role: dense forms, search bars
- Primitive type: `input` · Kind: interactive
- Background: `#f5f5f5`
- Text: `#222222`
- Border: none
- Radius: 8px
- Padding: `14px 16px`
- Font: 16px / 400 / Noto Sans JP
- Focus: background `#ffffff` + 2px `#FF0033` border (generic focus; not promoted as `focus-visible` treatment)
- Token-set font record: `16px/400`
- Token-set use: `Dense forms, search bars`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field accepts a value; skeletons report in-progress content |
| error | applicable | A form field can fail validation; visual treatment omitted on this token-set record |
| success | not-applicable | The field does not complete a payment on itself |

### Amount (Hero)

- Role: send/charge amount entry — the big-number moment, paired with on-screen number pad
- not in the token set
- Background: transparent
- Text: `#222222`
- Border: 1px solid `#e0e0e0` (bottom only)
- Radius: 0px
- Padding: `0 0 8px`
- Font: 36px / 700 / Noto Sans JP, with `¥` prefix at 24px / 700

The source supplies this field as a §4 body record only. It has no YAML `type` key, so no `Primitive type` line is attached. Kind: interactive — a value field.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field accepts an amount; it does not report in-progress payment on itself |
| error | applicable | An amount field can fail validation; visual treatment omitted on this row |
| success | not-applicable | The field does not complete a payment on itself |

### Error (input)

- Role: validation failure
- not in the token set
- Background: `#ffffff`
- Text: `#222222`
- Border: 2px solid `#E0002E`
- Radius: 8px
- Padding: `14px 16px`
- Helper: error text below in `#E0002E`, 12px, with alert icon

The source supplies this as a §4 body record only. No `Primitive type` line. Kind: interactive — a form field in its error paint.

PIN entry uses a 4-digit dot field with a randomized on-screen keypad for security; OTP uses 6 separate boxes (48px wide, 56px tall, 8px radius, red active border). Those PIN / OTP writings are §4-only; they are not in the token set.

### Standard Card

- Role: transaction, feature, and content cards
- Primitive type: `card`
- Background: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 16px
- Shadow: `0px 1px 4px rgba(0,0,0,0.08)`
- Token-set use: `Transaction, feature, content cards`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Balance Card (Hero)

- Role: wallet balance hero on home — the signature PayPay surface
- Primitive type: `card`
- Background: YAML `#ff0033`; §4 `#FF0033` (or red gradient `linear-gradient(135deg,#FF0033,#E0002E)`)
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 20px
- Shadow: §4 `0px 2px 8px rgba(255,0,51,0.20)` (red-tinted lift)
- Label the §9 example records: 'PayPay残高' 13px weight 400 white 80% opacity
- Amount the §9 example records: '¥12,400' 28px weight 700 white
- Token-set use: `Wallet balance hero, signature surface`

The YAML fill `#ff0033` and the §4 gradient `linear-gradient(135deg,#FF0033,#E0002E)` stay two records. The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld. Keeping those two fills unmerged, and withholding kind and a map because the source supplies no interaction evidence, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

### Campaign / Promo

- Role: point campaigns, あげる/もらえる offers — bright, image-forward
- Primitive type: `card`
- Background: YAML `#ffebef`; §4 `#FFEBEF` or full-bleed promotional image
- Border: none
- Radius: 16px
- Padding: 20px
- Token-set use: `Point campaigns, あげる/もらえる offers`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Compact (List Item)

- Role: transaction history rows, settings list rows
- Primitive type: `listItem`
- Background: `#ffffff`
- Border: 1px solid `#eeeeee` (bottom divider only)
- Radius: 0px
- Padding: `14px 16px`
- Token-set use: `Transaction history, settings rows`
- Anatomy the §9 example records: 48px min-height; left 36px circle merchant icon + name 14px weight 700 `#222222` + date 12px `#767676`; right `'-¥1,200'` 14px weight 700 `#222222`

The source supplies no interaction evidence that would decide this row as a commit control, so kind and a state-applicability map are both withheld.

### Fill / Red badge

- Role: NEW, 限定, primary emphasis
- Primitive type: `badge`
- Kind: non-interactive — a status or category label, not a commit control
- Background: `#FF0033` / token-set `#ff0033`
- Text: `#ffffff`
- Radius: 10px
- Padding: `2px 8px`
- Font: 12px / 700 / Noto Sans JP
- Token-set font record: `12px/700`
- Token-set use: `NEW, 限定, primary emphasis`

### Fill / Gold (Point)

- Role: point amounts, reward emphasis
- Primitive type: `badge`
- Kind: non-interactive — a status or category label, not a commit control
- Background: `#FFB200` / token-set `#ffb200`
- Text: `#ffffff`
- Radius: 10px
- Padding: `2px 8px`
- Font: 12px / 700 / Noto Sans JP
- Token-set font record: `12px/700`
- Token-set use: `Point amounts, reward emphasis`
- Use: Point amounts, "+100ポイント", reward emphasis

### Fill / Green badge

- Role: 完了 / success state
- Primitive type: `badge`
- Kind: non-interactive — a status label, not a commit control
- Background: `#00B900` / token-set `#00b900`
- Text: `#ffffff`
- Radius: 10px
- Padding: `2px 8px`
- Font: 12px / 700
- Token-set font record: `12px/700`
- Token-set use: `完了 / success state`

### Weak / Red badge

- Role: subtle brand-tinted label
- Primitive type: `badge`
- Kind: non-interactive — a label, not a commit control
- Background: `#FFEBEF` / token-set `#ffebef`
- Text: `#FF0033` / token-set `#ff0033`
- Radius: 10px
- Padding: `2px 8px`
- Font: 12px / 700
- Token-set font record: `12px/700`
- Token-set use: `Subtle brand-tinted label`

### Weak / Gray badge

- Role: neutral metadata badge (category, date)
- not in the token set
- Background: `#f5f5f5`
- Text: `#767676`
- Radius: 10px
- Padding: `2px 8px`
- Font: 12px / 700
- Kind: non-interactive — a label, not a commit control

The source supplies this badge as a §4 body record only. It has no YAML `type` key, so no `Primitive type` line is attached.

### Bottom Tab

- Role: 5-tab bottom nav
- Primitive type: `tab` · Kind: interactive
- Background: `#ffffff`
- Border: 1px solid `#eeeeee` (top only)
- Active: `#FF0033` icon + label
- Inactive: `#999999` icon + `#767676` label
- Font: 10px / 500 / Noto Sans JP
- Center action: large red circular "支払う" / QR button, raised above the bar. Height the §8 record writes as 60–64px; the §9 example writes the same control as 60px with a neutral shadow. Those two writings stay two records.
- Token-set font record: `10px/500`
- Token-set use: `5-tab bottom nav`
- Token-set active: `#ff0033 icon + label`
- Use: 5-tab bottom nav — home, points, QR-pay (center), promotions, account

YAML `fg: #767676` and the §4 inactive pair `#999999` icon + `#767676` label stay two records. The §8 height `60–64px` and the §9 example `60px` for the raised center pay button stay two records. Keeping those inactive writings unmerged, and keeping those two center-button heights unmerged, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching a nav destination is not an operation with a success result |

### Segmented

- Role: in-screen section switching
- Primitive type: `tab` · Kind: interactive
- Background: `#f5f5f5`
- Inactive text: `#767676`
- Radius: YAML `10`; §4 `10px` (track), `8px` (thumb)
- Padding: `8px 16px`
- Active: `#ffffff` thumb + `#FF0033` text + `0px 1px 3px rgba(0,0,0,0.10)` shadow
- Font: 14px / 700 / Noto Sans JP
- Token-set font record: `14px/700`
- Token-set use: `In-screen section switching`
- Token-set active: `#ffffff thumb, #ff0033 text`

The YAML radius `10` and the §4 pair track `10px` / thumb `8px` stay two records. Keeping those two radius writings unmerged is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A section switch whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control only selects an in-screen section; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A tab that only selects a section does not report a failed request on itself |
| success | not-applicable | Same role reason: selecting a section is not an operation this tab reports as success |

### Toast

- Role: transient confirmation
- Primitive type: `toast`
- Kind: non-interactive — a transient message, not a commit control
- Background: `#222222`
- Text: `#ffffff`
- Radius: 8px
- Padding: `12px 16px`
- Shadow: `0px 4px 12px rgba(0,0,0,0.15)`
- Font: 14px / 500 / Noto Sans JP
- Token-set font record: `14px/500`
- Token-set use: `Transient confirmation (コピーしました)`
- Use: Transient confirmation ("コピーしました"). Payment success is a full dedicated screen, never a toast.

### Centered Modal

- Role: confirmation prompts, alerts
- Primitive type: `dialog`
- Background: `#ffffff`
- Text: `#222222`
- Radius: 16px
- Padding: 24px
- Shadow: `0px 8px 24px rgba(0,0,0,0.18)`
- Buttons: stacked full-width — red primary on top, gray/text secondary below
- Token-set use: `Confirmation prompts, alerts`

The source supplies no interaction evidence for this dialog container (the inner buttons are declared separately), so kind and a state-applicability map are both withheld.

### Bottom Sheet

- Role: selection, picker, payment-method switch — the dominant overlay pattern
- Primitive type: `dialog`
- Background: `#ffffff`
- Text: `#222222`
- Radius: 20px (top corners only)
- Padding: `24px 16px`
- Drag handle: 36px × 4px `#e0e0e0` pill, centered top
- Shadow: `0px -4px 16px rgba(0,0,0,0.10)`
- Token-set use: `Selection, picker, payment-method switch`

YAML radius `20` and the §4 writing `20px (top corners only)` stay two records. The source supplies no interaction evidence for this sheet container, so kind and a state-applicability map are both withheld. Keeping those two radius writings unmerged, and withholding kind and a map, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

### Toggle

- Role: boolean settings
- Primitive type: `toggle` · Kind: interactive
- Background: `#FF0033` (on) / `#cccccc` (off)
- Radius: 9999px
- Thumb: `#ffffff` 22px circle, `0px 1px 3px rgba(0,0,0,0.20)` shadow
- Token-set use: `Boolean settings, on=red off=#cccccc`
- Use: Boolean settings (通知, 自動チャージ)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A setting whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control flips a boolean; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Flipping 通知 / 自動チャージ is not an operation this toggle reports as failure |
| success | not-applicable | Same role reason: a boolean flip is not an operation with a success result on this toggle |

### Payment-Complete Screen (Signature)

- Role: PayPay's most recognizable moment — the celebration, not a quiet receipt
- not in the token set
- Full-screen `#FF0033` (or red gradient) background
- Centered white checkmark animation, then amount in 36px / 700 white
- Merchant name + timestamp below in white 14px
- Single white button (`#ffffff` bg, `#FF0033` text, 24px radius): "閉じる"
- Optional point-grant animation: gold coins falling + "+◯◯ポイント" badge

The source supplies this screen as a §4 body record only. It has no YAML `type` key, so no `Primitive type` line is attached. Kind and a state-applicability map are withheld — it is a screen, not a control. Reading "the celebration, not a quiet receipt" as the source's own register for this screen is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

**Tier 1 sources:** https://paypay.ne.jp (live production site, verified via live DOM getComputedStyle).

### Surface state contract

The source's state contract, preserved here while the catalog graph is not adopted (A2):

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

These rows describe empty, loading, error, success, skeleton, and disabled treatments the source wrote at system level. They are not attached as visual treatments to destination or dismiss controls above. Treating the rows as a surface contract rather than attaching every row as a visual treatment on every control is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

PayPay's app is single-column, mobile-first — no multi-column grid in the app. Design baseline: 375px mobile width. Action grids (home shortcuts): 4-per-row icon grid with labels. Marketing web (paypay.ne.jp): centered content, max-width ~960px, with large hero imagery. Spacing restated from `tokens.spacing`: `sm 8` · `base 16` · `lg 24`. Shape restated from `tokens.rounded`: `sm 8` · `md 12` · `lg 16` · `xl 24` · `full: 9999`.

Whitespace philosophy, as the source states it:

- **Money gets a stage.** The balance and payment amounts sit alone with generous margins — they are the hero, never crowded.
- **Energetic density.** Unlike austere bank apps, PayPay packs the home screen with campaign banners, point promos, and shortcuts — it reads as a lively retail surface, not a sparse vault. Density rises on home/promotions, falls on transactional flows.
- **Funnel focus.** Payment and charge flows strip everything away — one amount, one big red button. Distraction is removed at the moment money moves.

Reading money as given a stage, reading home density as a lively retail surface rather than a sparse vault, and reading the payment/charge funnel as one amount and one button, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile (Primary) | <600px | Full app fidelity, 375px baseline, single column |
| Tablet | 600–960px | Marketing web expands hero, optional two-column feature rows |
| Desktop (Web) | >960px | Marketing site centered, max-width ~960px; app mirrored as centered mobile column |

Those breakpoints and the collapsing rules below are stated by the source at system level; treating them as current-surface layout instructions, and keeping the §8 `60–64px` center-pay height unmerged from the §9 example `60px`, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

Touch targets the source records:

- CTAs: 52px tall, full-width with 16px margin
- Bottom nav center pay button: 60–64px circle, raised. The §9 example writes this control as 60px with a neutral shadow; the two writings stay unmerged.
- List rows: minimum 48px height
- Number-pad keys: 56–64px for one-handed checkout entry

Collapsing strategy, as the source states it:

- App is mobile-only; the marketing web is responsive and points users to app-store downloads
- Bottom sheet → centered modal on wider screens
- Sticky bottom CTA bar with safe-area insets
- Horizontal-scroll carousels for campaign banners and point offers

Image behavior, as the source states it: Merchant / bank logos 32–40px, consistent sizing in lists; campaign key art full-bleed, responsive, maintains aspect ratio; QR code large centered square, high-contrast, with brand-red frame accent.

<!-- design-md:section content-locales -->
## 6. Content & Locales

PayPay speaks like an enthusiastic, helpful shop clerk: cheerful, casual-polite Japanese (です・ます with friendly energy), short, and benefit-led. It emphasizes speed ("最短1分"), ease ("かんたん"), and reward ("もらえる", "おトク"). Exclamation is welcome — this is a brand that celebrates. Japanese is the only first-class voice; English is incidental. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not PayPay-authored or a separately published UI specification. The published lines themselves are source-recorded copy.

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

**Forbidden moves.** Don't be cold or bank-formal on consumer surfaces. Don't over-apologize. Don't round monetary amounts on primary surfaces. Don't bury the reward — if there's a point benefit, it leads. That premise-to-register causal is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

Further published strings the source records, kept byte-exact:

- ペイペイ
- 支払う
- チャージ
- チャージする
- 送る
- 閉じる
- 戻る
- もっと見る
- 詳細
- キャンセル
- 後で
- NEW
- 限定
- 完了
- コピーしました
- あたり
- あげる
- もらえる
- お支払いが完了しました
- 残高が不足しています。チャージしてください
- 残高が不足しています
- スマホひとつで かんたんお支払い
- スマホひとつで かんたんに お支払いはPayPayで
- 登録は無料！最短1分
- いますぐPayPayアプリをダウンロード
- 今すぐダウンロード
- 100ポイントもらえる！
- おトク
- まだ取引履歴がありません
- 条件に合う結果がありません
- 100億円あげちゃうキャンペーン
- PayPayポイント
- PayPay銀行
- PayPayカード
- PayPay証券
- PayPay残高
- 最短1分
- かんたん
- です・ます
- ます/です
- 通知
- 自動チャージ
- +◯◯ポイント
- +100ポイント
- ¥12,400
- ¥1,240
- ¥1,200
- ¥--
- ポイント

Reproduce the published strings above byte-exact rather than translating or re-casing them. A gloss may sit beside a line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records that geometry is representative rather than spec-exact, and that PayPay publishes no public design-system documentation. Treating the list as named unresolved values rather than a license to invent is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification.

- **Exact easing curves.** Four easing roles and their uses are established; the curve values are omitted because they match the documented template re-injection path (`ease-enter` / `ease-exit` / `ease-standard` / `ease-spring`) and are not traceable to PayPay-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Full radius step.** `tokens.rounded.full: 9999` is the unitless full step. It is not the 10px badge radius and it is not a type size.
- **Pressed and error keep-both.** `tokens.colors.primary-pressed` and `tokens.colors.error` share `#e0002e` / `#E0002E`; the two roles stay unmerged.
- **Ink and Gray 900 keep-both.** `tokens.colors.ink` and Gray 900 share `#222222`; Gray 900 is not a YAML key.
- **Amount Hero line-height.** YAML records no `lineHeight`; §3 writes `tight`. No px is invented.
- **focus-visible treatments.** Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. Observed input Focus (2px `#FF0033`) stays recorded as generic focus, not as `focus-visible` treatment.
