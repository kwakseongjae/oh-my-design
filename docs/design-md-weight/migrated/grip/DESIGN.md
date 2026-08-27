# Grip Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Grip is Korea's first live commerce platform — a mobile-first video shopping app where sellers and buyers connect in real time through livestreams, chat, and exclusive in-broadcast deals. This contract covers two first-party web surfaces that the source records as Tier 1 on 2026-06-03: the product webapp at `https://www.grip.show` (homepage HTML plus CSS bundles from `webapp-resource.grip.show/202606020502/_next/static/css/`), and the company/brand page at `https://gripcorp.co`. Every value below stays attached to the surface that established it. The boundary that stops a grip.show webapp token from standing in for a gripcorp.co brand-page treatment — and that treats Grip Cloud, the US gripcorp.co expansion, and Japan-in-planning as named narrative products rather than computed interface values — is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification.

The captured product layer is dark-first. The primary canvas is near-black (`#0e1011`). Against that ground the brand's signature rose-red (`#eb2b51`) is the call-to-action signal: checkout buttons, coupon highlights, discount badges, and active selection states. A secondary hot-pink (`#ff3c78`) appears in borders and icon fills for interactive affordances just below the critical-action tier. The live-streaming avatar ring uses a vivid gradient. The product CSS records that ring as `conic-gradient(from -68deg, #ff2b51, #ffae8e)`. The source's theme prose and Do list, and the corp-page slogan treatment, also name `#fe0189→#ff583c`. Those two gradient records stay attached to their sources; they are not merged. A creator/seller avatar ring is `conic-gradient(from -68deg, #1ec7be, #1dc3ff)`. A deep purple (`#6456dc`) is the secondary accent for purchase nudges, urgency countdowns, and seller badges. Typography is set entirely in Pretendard. Component radii cluster at 4–8 px. Reading the canvas as a "deliberate cinema-mode choice that keeps product thumbnails and live video feeds visually dominant", reading the rose-red as "unambiguous buy-now urgency", reading the live ring as "the single most kinetically distinctive element in the UI", reading the purple as a "premium-yet-playful counter-note to the red-dominant palette", and reading the 4–8 px cluster as "tight enough to feel structured, not clinical", is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification.

Grip was founded in July 2018 by Kim Han-na, a former Naver marketer who had worked on video products including Jam Live and Snow. Along with six co-founders also from Naver and Kakao, she set out to build Korea's first mobile live commerce platform with a single animating belief: anyone with a smartphone should be able to sell anything, anytime, to anyone. The company (GripCompany, 주식회사 그립컴퍼니) is headquartered in Pangyo, Seongnam — the heart of Korea's tech ecosystem. In December 2021 Kakao became Grip’s largest shareholder (~50% stake, ₩180B), anchoring its live-commerce expansion. Rather than replicating home shopping television or social media, Grip defined a third category: personal media commerce. Sellers — called Grippers — broadcast from wherever they are, answer questions live via chat, run in-stream auctions and games, and build loyal fan communities around their product expertise. The platform's patent portfolio reflects this: interactive mechanics like rolling dice, quiz games, and flash-sale countdowns are proprietary differentiators, not commodities. By 2024 the app had surpassed 10 million downloads and runs approximately 1,300 live shows daily. Grip has expanded internationally (US via gripcorp.co, Japan in planning), and operates a B2B arm — Grip Cloud — that powers branded live commerce for third-party retailers. The mission remains unchanged: collapse the distance between the person who made or curated a product and the person who wants it. Those sentences are narrative context; they do not by themselves supply interface tokens. This contract does not treat the two captured surfaces as a proxy for Grip Cloud chrome or an uninspected Japan surface. Classing that narrative as not a token source, and that refusal, is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These three name what the captured product surface is for. That naming is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification. They do not come from the source's persona section, which the source itself marks as illustrative.

- Watch a live show or browse shorts on `https://www.grip.show`.
- Complete a cart checkout or a coupon-drawer confirm on the rose-red (`#eb2b51`) purchase controls.
- Act on a live-moment urgency nudge or claim a coupon (`지금 라이브 중! 방송에서만 만나는 특가를 놓치지 마세요.`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section is labeled illustrative; those biographies are not carried here and are not re-hosted in the sidecar. Use only what the captured surfaces and the source's published terms establish at a group level: Grippers (sellers), and shoppers watching live commerce. That grouping is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification.

### Distinctive traits

The values are recorded; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not Grip-authored or a separately published UI specification.

- Near-black canvas (`#0e1011`) with rose-red (`#eb2b51`) as the only checkout signal
- Hot-pink (`#ff3c78`) for interactive affordance one tier below checkout
- Purple (`#6456dc`) reserved for urgency / countdown / seller-badge accents
- Two live-ring records kept separate: product `conic-gradient(from -68deg, #ff2b51, #ffae8e)` and theme/corp `#fe0189→#ff583c`
- Creator/seller ring `conic-gradient(from -68deg, #1ec7be, #1dc3ff)`
- Pretendard (woff2, variable weight 45–920) for every captured size
- Radii clustered at 4–8 px; `full: 9999` is the token-set pill step
- Mobile-only framed column: 420px max-width on desktop, fluid at ≤460px
- Elevation from background contrast, not drop shadows

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Grip-authored or a separately published UI specification.

1. **Anyone can sell.** The platform is designed so that a single creator with a smartphone has the same surface area as a large retailer. *UI implication:* seller onboarding, stream tooling, and product listing all default to zero-equipment, zero-staff flows.
2. **The live moment is the product.** Urgency is honest, not manufactured — it comes from the real-time nature of the broadcast. *UI implication:* live badges, countdown timers, and flash prices must always reflect actual live status; never show live signals on recorded or inactive streams.
3. **Community over catalogue.** Grip's retention mechanism is the seller-fan relationship, not a product recommendation algorithm. *UI implication:* seller avatars, follow states, and chat surfaces are given equal or greater prominence than product grids.
4. **Mobile-first, always.** The app was born on smartphone screens; desktop is a secondary, framed experience. *UI implication:* the 420px max-width is a design constraint, not a limitation — all interaction models (swipe, scroll, tap) are thumb-native.
5. **Trust through transparency.** Buyers can ask questions live and see the product in real context. *UI implication:* product info, seller credentials, and review surfaces should never be buried; the chat overlay must remain accessible throughout a broadcast.

### Application rules

The source's six Do rules, kept as brand rules rather than as universal governance. The justifications inside them — why a color belongs to one role, why a ring is reserved for live — are a derived editorial implementation inference from the verified surfaces; they are not Grip-authored or a separately published UI specification.

- Use `#eb2b51` for every primary purchase action — checkout, confirm, coupon claim
- Present live status with the `#fe0189→#ff583c` animated ring gradient, not a static badge
- Set prices in 700 weight with tabular-nums to prevent width jitter during countdowns
- Keep body copy at 15px / 400 on light surfaces for readability at arm's length
- Use `#6456dc` exclusively for urgency/countdown nudges; don't repurpose it as a general brand color
- Maintain the 420px max-width constraint in desktop contexts to preserve mobile layout fidelity

### Avoid

The first five avoidances are the source's own Don't list. The sixth restates this contract's scope boundary as a prohibition. The reasons attached to them — why a color or a radius must stay in one role — are a derived editorial implementation inference from the verified surfaces; they are not Grip-authored or a separately published UI specification.

- Don't use `#ff3c78` as the primary CTA color — it is the lighter interactive affordance, not the checkout signal
- Don't add shadows to buttons; elevation is communicated through background contrast alone
- Don't place live-ring gradients on non-live seller avatars — the animation signals active broadcast
- Don't exceed 8px border-radius on purchase buttons; 24–31px is reserved for pill tags and avatar-adjacent elements
- Don't use font weight below 500 for interactive UI text; 400 is reserved for body copy and meta descriptions
- Don't present a grip.show or gripcorp.co value as evidence for Grip Cloud chrome or an uninspected Japan surface this capture did not reach

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — cinema-mode canvas, checkout signal, lighter affordance, premium-yet-playful counter-note — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification.

Primary and interactive

- **Primary Rose-Red** (`#eb2b51`): primary CTA buttons, checkout actions, coupon card accents, checkbox fill, discount rate text. Token-set key `tokens.colors.primary`.
- **Primary Hot-Pink** (`#ff3c78`): lighter interactive affordance, border accents, icon fills, secondary interactive states. Token-set key `tokens.colors.hot-pink`.
- **Secondary Purple** (`#6456dc`): purchase nudge bar background, timer text, seller badge accent. Token-set key `tokens.colors.purple`.

Dark surfaces

- **App Background** (`#0e1011`): root app canvas (dark mode default). Token-set key `tokens.colors.canvas`.
- **Surface Dark-1** (`#17181a`): bottom navigation bar background. Token-set key `tokens.colors.surface-1`.
- **Surface Dark-2** (`#222327`): elevated card surfaces in dark context. Token-set key `tokens.colors.surface-2`.
- **Surface Dark-3** (`#404149`): tertiary panel fills. Token-set key `tokens.colors.surface-3`.

Light surfaces

- **Surface Light** (`#ffffff`): light-mode cart, coupon, and checkout pages. Token-set key `tokens.colors.surface-light`.
- **Surface Subtle** (`#f3f3f3`): empty state icon containers, light dividers. Token-set key `tokens.colors.surface-subtle`.

Text

- **Text Primary (dark)** (`#eff0f4`): body copy on dark backgrounds. Token-set key `tokens.colors.text-primary`.
- **Text Body (light)** (`#323232`): product name, price, UI text on white. Token-set key `tokens.colors.text-body`.
- **Text Muted** (`#999999`): secondary labels, conditions, disabled states. Token-set key `tokens.colors.text-muted`.
- **Text Subdued** (`#666666`): meta info, timestamps. Token-set key `tokens.colors.text-subdued`.

Line and status

- **Border Default** (`#e5e5e5`): card outlines, dividers. Token-set key `tokens.colors.border`.
- **Border Subtle** (`#d5d5d5`): light separators, outline button strokes. Token-set key `tokens.colors.border-subtle`.
- **Error / Danger** (`#ef4343`): toast error, out-of-stock labels. Token-set key `tokens.colors.error`.

Rings, kept as separate records

- **Live avatar ring (product CSS):** `conic-gradient(from -68deg, #ff2b51, #ffae8e)` — broadcaster live ring
- **Live-status / corp slogan gradient:** `#fe0189→#ff583c` — the source's theme and Do list, and the gripcorp.co slogan-section treatment
- **Creator avatar ring:** `conic-gradient(from -68deg, #1ec7be, #1dc3ff)` — creator/seller avatar ring

Component-local colors that are not palette keys: Active Coupon interior `#fff5f8`; empty-cart icon `#c2c2c2`; live-video loading canvas `#111`; video-stream error fallback `linear-gradient(180deg, #111 49.95%, #29235e)`; cart sold-out label `#e83c3b`; coupon-success panel `#f8f8f8`; overlay scrim `rgba(0,0,0,0.1)`; thumbnail outline `rgba(0,0,0,0.05)`.

### Spacing

Token-set steps, unitless: `xs 4 · sm 8 · md 12 · base 16 · lg 24 · xl 32 · section 56`. Visible sections also write 4px, 8px, 12px, 16px, and 56px where those strings already appear. Token-set keys `lg: 24` and `xl: 32` stay unitless — the source never suffixes those two steps. Token-set key `tokens.spacing.section: 56` is a spacing step. The page-header height `56px` is a layout constant, not that spacing key. The 4 / 8 / 16 / 24 figures that also appear as radii or type sizes stay on their own paths. Keeping those keys on separate paths is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification.

### Shape

Token-set steps, unitless: `sm 4 · md 6 · lg 8 · full 9999`. Named uses the source records:

- Small (4px): dark secondary buy-now, outline delete/cancel, urgency nudge
- Medium (6px): Shorts / discovery CTA
- Large (8px): primary cart-checkout CTA, drawer confirm, product-thumbnail wrapper
- Full (9999): the token-set pill step. The source's Don't list reserves 24–31px for pill tags and avatar-adjacent elements and forbids exceeding 8px on purchase buttons.

`tokens.rounded.lg: 8` is a radius step. It is not `tokens.spacing.sm: 8`. `tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.full: 9999` has no spacing counterpart.

Calling the 4–8 px cluster structured rather than clinical, reading 24–31px as reserved for pills, and keeping `tokens.rounded` steps off the spacing keys that share a number, is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification.

### Elevation

The UI relies on background-color contrast rather than drop shadows for layering. Bottom nav (`#17181a`) sits above the dark app canvas (`#0e1011`). Drawers and modals emerge from below (vaul-drawer, bottom-sheet pattern) using the Radix animation system. An `rgba(0,0,0,0.1)` scrim is applied to floating overlays. The live avatar ring uses `z-index:-1` on the after-pseudo for the gradient ring to sit behind the avatar circle, giving a halo effect without a shadow. Product thumbnail borders use `outline: 1px solid rgba(0,0,0,0.05)` with `outline-offset:-1px` to avoid layout shift at 8px radius.

Reading that stack as a flat, contrast-only elevation system is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification. The measurements themselves are recorded values.

### Motion

Durations the source attributes to named CSS:

| Token | Value | Use |
|---|---|---|
| Micro (state feedback) | 80ms | bottom nav slide (`transition: all 0.08s linear`) |
| Short (UI transitions) | 150ms | Tailwind default duration; Vaul/Radix `data-[state=open]` animate-in |
| Medium (drawer open/close) | 200–300ms | Radix accordion/drawer (`ease-out`); `data-[state=closed]` at 300ms |
| Long (avatar live animation) | 810ms | pulse-border, ripple-border (`cubic-bezier(0.167, 0.166, 1, 1)`); §9 also writes this as `0.81s` |

Easing the source attributes to Grip CSS, kept:

- Live avatar pulse entry: `cubic-bezier(0.167, 0.166, 1, 1)` — avatar scale pulse (4 iterations then infinite on live)
- Live avatar ripple ring: `cubic-bezier(0.167, 0.167, 0.833, 0.833)`
- Decelerate (drawer enter): `ease-out`
- Bottom nav: `linear` at 80ms

The source's Standard easing `cubic-bezier(0.4, 0, 0.2, 1)` is labeled Material-derived / Tailwind default. That curve value is omitted. The 150ms duration stays.

Motion rules the source states:

- The live-ring animation (ripple-sm: scale 1.02→1.2, opacity 1→0) runs 4× then loops only when `repeat-live-animation` class is applied — indicating an active live session
- Bottom nav slides out (`translateY(100%)`) with 80ms linear
- Drawer content uses Vaul/Radix `data-[state=open]` animate-in at 150ms; `data-[state=closed]` at 300ms (asymmetric: opens fast, closes deliberately)
- No spring physics; all motion is CSS cubic-bezier

The source records no reduced-motion behavior. That field is omitted.

A future motion pass may promote an omitted curve only after recording, per component, the computed transition properties, the animation name, the duration, the easing, and the reduced-motion behavior on the live surface; confirming a single curve, or citing an official source for one, does not satisfy that condition. That condition is set by this document, not by Grip.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The source records Pretendard on the live product CSS and does not publish a separate typography specification. Classing that live CSS as not a separately issued typography specification is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification. |
| Live computed surface-use | Product CSS `@font-face{font-family:Pretendard;…font-weight:45 920}` (woff2, variable). Visible text is Pretendard at the roles below. |
| FontFaceSet and source corroboration | Pretendard woff2, variable weight 45–920, with Pretendard Fallback (Arial-based) for system fallback. |
| Official distributed asset | The source records no Grip-exclusive distributed type family. Pretendard is the observed face. |
| Declared-only | Token-set `tokens.typography.family.mono` is also `Pretendard`. No unused declared face is recorded. |
| License | The source records no font license. Treating Pretendard as an upstream face used by Grip, not a Grip-owned brand asset, is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification. |
| Outside these captures | Type for Grip Cloud and an uninspected Japan surface remains outside these two captures. |

### Family

- **Current visible UI family:** Pretendard (woff2, variable weight 45–920)
- **Fallback:** Pretendard Fallback (Arial-based)
- Token-set: `tokens.typography.family.sans: "Pretendard"` · `tokens.typography.family.mono: "Pretendard"`
- Do not substitute a system face for Pretendard and present it as the Grip face. The fallback is a fallback. That substitution ban is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set use |
|---|---|---:|---:|---:|---|
| Discount | Pretendard | 27 | 700 | 1.35 | Discount price, coupon amount |
| Confirm | Pretendard | 18 | 500 | 1.4 | Full-width confirm button |
| Button | Pretendard | 16 | 600 | 1.4 | Primary button label |
| Body | Pretendard | 15 | 400 | 1.4 | Body, product name |
| Caption | Pretendard | 13 | 400 | 1.4 | Caption, meta |
| Badge | Pretendard | 12 | 500 | 1.4 | Badge, tag |

Line heights are unitless ratios in the source token set (`1.35` on discount only; `1.4` on confirm, button, body, caption, badge) and stay ratios here. They are not converted to px.

Visible §3 also records ranges that are not extra token-set keys: Body / Product name 15px / weight 400–500; Price / Emphasis 15px / weight 700; Caption / Meta 13px / weight 400–500; Badge / Tag 11–12px / weight 500. The 11–12px range is a visible-section range, not `tokens.typography.badge.size: 12`.

Letter spacing: −0.2 px to −0.5 px on headings and price figures; Korean text benefits from tight negative tracking. Line height in the visible section: 135–145% for readable body, tabular-nums variant for prices and timers. Page header height: 56px (CSS export constant) — a layout constant, not `tokens.spacing.section: 56`.

Token-set `use` strings, verbatim: Discount `Discount price, coupon amount`; Confirm `Full-width confirm button`; Button `Primary button label`; Body `Body, product name`; Caption `Caption, meta`; Badge `Badge, tag`.

### Type rules

Observable in the scale: one family covers UI and body; discount is 27 / 700 / 1.35; confirm is 18 / 500 / 1.4; primary button label is 16 / 600 / 1.4; body is 15 / 400 / 1.4; caption is 13 / 400 / 1.4; badge is 12 / 500 / 1.4; prices use 700 and tabular-nums.

Reading those facts as rules — 400 reserved for body and meta, interactive UI text at 500 and above, 700 locked to price and discount, negative tracking on headings and figures — and keeping the visible 11–12px range and the 56px page-header constant off the token-set badge-size and spacing.section keys, is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification.

### Assets

- Logo pointer recorded by the source: `https://www.google.com/s2/favicons?domain=grip.show&sz=256`. This is a favicon-service URL keyed to the domain, not a Grip-hosted brand file; the source supplies no first-party logo asset. Classing that entry as a third-party favicon service is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification.
- Live video, product thumbnails (109px fixed-width scroll containers; `aspect-ratio:1/1` on skeleton wrappers), and seller avatars are first-party catalog and broadcast content.

<!-- design-md:section components-states -->
## 4. Components & States

### Surface state contract

The eight rows below are the source's state contract. They describe surface- and module-level treatments, not per-control treatments, and they name published copy that this contract carries verbatim. Reading them as the state contract for the captured product surface is a derived editorial implementation inference from the verified surfaces; they are not Grip-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (Cart)** | `#f3f3f3` circle container (64px) with a cart icon in `#c2c2c2`; text "담긴 상품이 없어요" in `#999` 15px/400; CTA to browse shorts in `#17181a` background |
| **Loading (Live video)** | full-viewport dark canvas `#111` with centered spinner; video cover div with `background-size:contain` for thumbnail placeholder |
| **Error (Video stream)** | gradient fallback `linear-gradient(180deg, #111 49.95%, #29235e)`; error text surfaced in white on the gradient |
| **Error (Cart item — sold out / ended)** | text label "품절" in `#e83c3b` 15px/700; product thumbnail at 50% opacity via `.disabled` |
| **Success (Coupon claimed)** | action panel switches to `#f8f8f8`; icon color moves from `#eb2b51` to `#999`; label reads "사용 완료" |
| **Skeleton (Product thumbnail)** | `border-radius:8px; outline:1px solid rgba(0,0,0,0.05)` on the wrapper; image `aspect-ratio:1/1` prevents layout shift |
| **Disabled (Coupon card)** | `opacity:0.5` applied to all child elements inside `.coupon > *` |
| **Timer / Urgency** | `font-variant-numeric:tabular-nums; font-feature-settings:"tnum"` on all countdown displays; color `#6456dc` |

`#e83c3b` (sold-out label) is not `tokens.colors.error` `#ef4343`. `#111` (video loading / error) is not `tokens.colors.canvas` `#0e1011`. `#999` in the empty-cart and coupon-success rows is the source's shorthand for `#999999`.

### How applicability is decided here

The source declares each component with a primitive type (`button`, `card`, `toast`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not Grip-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary CTA (cart checkout)

- Role: primary purchase action — cart checkout
- Primitive type: `button` · Kind: interactive
- Domain: Product webapp (cart)
- Background: `#eb2b51`
- Text: `#ffffff`
- Radius: 8px
- Height: 50px
- Font: 16px / 600
- Token-set font record: `16px / 600`
- Token-set use: `Primary CTA / cart checkout, 50px height`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; visual treatment omitted |
| disabled | applicable | A checkout action can be gated; treatment omitted |
| loading | applicable | The control commits checkout, which can be pending |
| error | applicable | The control commits an operation that can fail |
| success | applicable | The control commits an operation that can complete |

### Full-Width Confirm (drawer bottom)

- Role: full-width drawer-bottom confirm
- Primitive type: `button` · Kind: interactive
- Domain: Product webapp (coupon drawer)
- Background: `#eb2b51`
- Text: `#ffffff`
- Radius: 8px
- Height: 56px
- Font: 18px / 500
- Token-set font record: `18px / 500`
- Token-set use: `Full-width drawer-bottom confirm, 56px height`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; visual treatment omitted |
| disabled | applicable | A confirm action can be gated; treatment omitted |
| loading | applicable | The control commits confirm, which can be pending |
| error | applicable | The control commits an operation that can fail |
| success | applicable | The control commits an operation that can complete |

### Dark Secondary (buy now inline)

- Role: dark secondary buy-now inline
- Primitive type: `button` · Kind: interactive
- Domain: Product webapp
- Background: `#323232`
- Text: `#ffffff`
- Radius: 4px
- Height: 34px
- Font: 14px / 500
- Token-set font record: `14px / 500`
- Token-set use: `Dark secondary buy-now inline, 34px height`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; visual treatment omitted |
| disabled | applicable | A buy-now action can be gated; treatment omitted |
| loading | applicable | The control commits purchase, which can be pending |
| error | applicable | The control commits an operation that can fail |
| success | applicable | The control commits an operation that can complete |

### Outline Delete / Cancel

- Role: outline delete / cancel
- Primitive type: `button` · Kind: interactive
- Domain: Product webapp
- Background: `#ffffff`
- Text: `#323232`
- Border: 1px solid `#e5e5e5`
- Radius: 4px
- Height: 34px
- Font: 14px / 500
- Token-set font record: `14px / 500`
- Token-set use: `Outline delete / cancel, 1px #e5e5e5 border, 34px height`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; visual treatment omitted |
| disabled | applicable | A delete / cancel action can be gated; treatment omitted |
| loading | applicable | The control commits delete or cancel, which can be pending |
| error | applicable | The control commits an operation that can fail |
| success | applicable | The control commits an operation that can complete |

### Shorts / Discovery CTA

- Role: destination control that opens shorts / discovery
- Primitive type: `button` · Kind: interactive
- Domain: Product webapp
- Background: `#17181a`
- Text: `#ffffff`
- Radius: 6px
- Height: 40px
- Font: 15px / 600
- Token-set font record: `15px / 600`
- Token-set use: `Shorts / discovery CTA, 40px height`
- The empty-cart row reuses this dark fill as the CTA to browse shorts.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | not-applicable | A destination control that opens shorts / discovery has no precondition to gate — the meaning of a disabled state is absent from the role, not merely unrecorded |
| loading | not-applicable | The CTA sends the reader to shorts / discovery; it commits no operation in place, so there is no in-progress state on the control itself |
| error | not-applicable | The CTA commits no operation in place, so a failure of that operation cannot be reported on it |
| success | not-applicable | The CTA commits no operation in place, so completion cannot be confirmed on it |

### Active Coupon Card

- Role: active coupon card, rose-red amount
- Primitive type: `card`
- Domain: Product webapp (coupon drawer)
- Background: `#ffffff`
- Background (tint): `#fff5f8`
- Text (price): `#eb2b51`
- Font: 27px / 700
- Token-set font record: `27px / 700`
- Token-set use: `Active coupon card, rose-red amount`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Claimed / Used Coupon Card

- Role: claimed / used coupon card
- Primitive type: `card`
- Domain: Product webapp (coupon drawer)
- Background: `#ffffff`
- Border: 5px solid `#f3f3f3`
- Text: `#999999`
- Font: 13px / 500
- The surface contract's Success (Coupon claimed) and Disabled (Coupon card) rows name further treatments on this module.
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Urgency Countdown Nudge

- Role: urgency countdown nudge bar
- Primitive type: `toast` · Kind: non-interactive
- Domain: Product webapp
- Background: `rgba(47, 23, 253, 0.05)`
- Token-set background record: `rgba(47,23,253,0.05)`
- Text: `#6456dc`
- Radius: 4px
- Height: 38px
- Font: 14px / 500–600
- Token-set font record: `14px / 500`
- Token-set use: `Urgency countdown nudge bar, 38px height`
- Kind is non-interactive because the source types it `toast` and records it as a display bar, not as a control that commits. No applicability map.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Grip is a single-column, mobile-only app (max-width 420px on desktop, 100% on mobile). The root `.main` container is fixed to 420px wide on desktop and stacks vertically: page header (56px fixed top), scrollable content, bottom nav (52px + safe-area bottom). The live video view occupies full viewport height (100dvh) with content layered via absolute positioning. Card grids use gap-based flex rows; product thumbnail grids use 109px fixed-width scroll containers. Horizontal scroll (Indiana Scroll) is used for curation rows, avoiding pagination friction.

Grip is deliberately non-responsive in the traditional sense — it is a mobile web app. The root `.main` container is fixed at 420px wide and centered on desktop, with `max-width:100%` applied only on actual mobile viewports. At ≤460px the container becomes fluid. The bottom nav respects `env(safe-area-inset-bottom)` for notched devices. The video view layout enforces `min-width:360px` and `min-height:568px` to support older small-screen devices. Desktop visitors receive the 420px centered column; there is no tablet breakpoint.

Token-set spacing `section: 56` is a spacing step. The 56px page header is the CSS export constant from §3 / §5, not that spacing key.

Reading the 420px column as a fidelity constraint rather than a limitation, reading Indiana Scroll as a way to avoid pagination friction, and keeping token-set `section: 56` off the 56px page-header constant, is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Published strings the source records, verbatim:

- Official slogan from og:title: "1,000만이 선택한 영상 쇼핑, 그립."
- Live broadcast nudge: "지금 라이브 중! 방송에서만 만나는 특가를 놓치지 마세요."
- Seller trust prompt: "그리퍼가 직접 쓰고 추천하는 아이템, 지금 채팅으로 물어보세요."
- Empty cart: "담긴 상품이 없어요"
- Sold out: "품절"
- Coupon claimed: "사용 완료"
- Voice-table phrases: "지금 바로", "한정 특가", "지금 방송 중"
- Seller term: Gripper / 그리퍼. Do not replace with "vendor" or "merchant".

**Tone adjectives:** energetic, direct, community-warm

| Do | Don't |
|----|-------|
| Use short imperative phrases ("지금 바로", "한정 특가") | Write formal or legalistic copy |
| Address the viewer as a participant in a live event | Address them as a faceless online shopper |
| Create urgency around the live moment ("지금 방송 중") | Use generic marketing hyperbole unrelated to real-time |
| Celebrate the seller-buyer relationship by name (Gripper) | Depersonalize the seller as "vendor" or "merchant" |

The source marks the two long voice samples as illustrative. They remain published-form strings the source recorded; they are not a complete product-microcopy guide. Reading the voice as energetic, direct, and community-warm, and reading the table as a register contract for live-commerce copy, is a derived editorial implementation inference from the verified surfaces; it is not Grip-authored or a separately published UI specification.

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

These decisions are unnamed values the source already opened, not permissions to invent, and not a list of domains the source never established:

- hover, pressed, and focus-visible visual treatments on the declared purchase controls
- reduced-motion behavior
- the omitted Standard / Material-derived curve `cubic-bezier(0.4, 0, 0.2, 1)`
- Grip Cloud chrome, named in the source narrative and not token-inspected
