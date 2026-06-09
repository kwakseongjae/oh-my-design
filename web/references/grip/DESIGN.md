---
id: grip
name: "Grip"
country: KR
category: ecommerce
homepage: "https://www.grip.show"
primary_color: "#eb2b51"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=grip.show&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#eb2b51"
    hot-pink: "#ff3c78"
    purple: "#6456dc"
    canvas: "#0e1011"
    surface-1: "#17181a"
    surface-2: "#222327"
    surface-3: "#404149"
    surface-light: "#ffffff"
    surface-subtle: "#f3f3f3"
    text-primary: "#eff0f4"
    text-body: "#323232"
    text-muted: "#999999"
    text-subdued: "#666666"
    border: "#e5e5e5"
    border-subtle: "#d5d5d5"
    error: "#ef4343"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    discount: { size: 27, weight: 700, lineHeight: 1.35, use: "Discount price, coupon amount" }
    confirm:  { size: 18, weight: 500, lineHeight: 1.4, use: "Full-width confirm button" }
    button:   { size: 16, weight: 600, lineHeight: 1.4, use: "Primary button label" }
    body:     { size: 15, weight: 400, lineHeight: 1.4, use: "Body, product name" }
    caption:  { size: 13, weight: 400, lineHeight: 1.4, use: "Caption, meta" }
    badge:    { size: 12, weight: 500, lineHeight: 1.4, use: "Badge, tag" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, section: 56 }
  rounded: { sm: 4, md: 6, lg: 8, full: 9999 }
  components:
    button-primary: { type: button, bg: "#eb2b51", fg: "#ffffff", radius: "8px", font: "16px / 600", use: "Primary CTA / cart checkout, 50px height" }
    button-confirm: { type: button, bg: "#eb2b51", fg: "#ffffff", radius: "8px", font: "18px / 500", use: "Full-width drawer-bottom confirm, 56px height" }
    button-secondary: { type: button, bg: "#323232", fg: "#ffffff", radius: "4px", font: "14px / 500", use: "Dark secondary buy-now inline, 34px height" }
    button-outline: { type: button, bg: "#ffffff", fg: "#323232", radius: "4px", font: "14px / 500", use: "Outline delete / cancel, 1px #e5e5e5 border, 34px height" }
    button-discovery: { type: button, bg: "#17181a", fg: "#ffffff", radius: "6px", font: "15px / 600", use: "Shorts / discovery CTA, 40px height" }
    card-coupon: { type: card, bg: "#fff5f8", fg: "#eb2b51", font: "27px / 700", use: "Active coupon card, rose-red amount" }
    nudge-urgency: { type: toast, bg: "rgba(47,23,253,0.05)", fg: "#6456dc", radius: "4px", font: "14px / 500", use: "Urgency countdown nudge bar, 38px height" }
  components_harvested: true
---

# Grip

Korea's first live commerce platform — a mobile-first video shopping app where sellers and buyers connect in real time through livestreams, chat, and exclusive in-broadcast deals.

## 1. Visual Theme & Atmosphere

Grip presents a dark-first, energy-charged visual world tuned for live video commerce. The primary canvas is near-black (#0e1011) — a deliberate cinema-mode choice that keeps product thumbnails and live video feeds visually dominant. Against this dark ground, the brand's signature rose-red (#eb2b51) fires as a call-to-action signal: checkout buttons, coupon highlights, discount badges, and active selection states all pulse in the same hue, creating an unambiguous buy-now urgency. A secondary hot-pink (#ff3c78) appears in borders and icon fills for interactive affordances just below the critical-action tier. The live-streaming avatar ring introduces a vivid gradient (hot-pink to coral #fe0189→#ff583c) that animates with a pulse or ripple when a seller is live — the single most kinetically distinctive element in the UI. A deep purple (#6456dc) serves as a secondary accent for purchase nudges, urgency countdowns, and seller badges, adding a premium-yet-playful counter-note to the red-dominant palette. Typography is set entirely in Pretendard, a Korean variable typeface that reads cleanly at 13–18 px in both dark and light contexts. Component radii cluster at 4–8 px — tight enough to feel structured, not clinical.

## 2. Color Palette & Roles

- **Primary Rose-Red:** `#eb2b51` — primary CTA buttons, checkout actions, coupon card accents, checkbox fill, discount rate text
- **Primary Hot-Pink:** `#ff3c78` — lighter interactive affordance, border accents, icon fills, secondary interactive states
- **Secondary Purple:** `#6456dc` — purchase nudge bar background, timer text, seller badge accent
- **App Background:** `#0e1011` — root app canvas (dark mode default)
- **Surface Dark-1:** `#17181a` — bottom navigation bar background
- **Surface Dark-2:** `#222327` — elevated card surfaces in dark context
- **Surface Dark-3:** `#404149` — tertiary panel fills
- **Surface Light:** `#ffffff` — light-mode cart, coupon, and checkout pages
- **Surface Subtle:** `#f3f3f3` — empty state icon containers, light dividers
- **Text Primary (dark):** `#eff0f4` — body copy on dark backgrounds
- **Text Body (light):** `#323232` — product name, price, UI text on white
- **Text Muted:** `#999999` — secondary labels, conditions, disabled states
- **Text Subdued:** `#666666` — meta info, timestamps
- **Border Default:** `#e5e5e5` — card outlines, dividers
- **Border Subtle:** `#d5d5d5` — light separators, outline button strokes
- **Error / Danger:** `#ef4343` — toast error, out-of-stock labels
- **Live avatar ring:** `conic-gradient(from -68deg, #ff2b51, #ffae8e)` — broadcaster live ring
- **Creator avatar ring:** `conic-gradient(from -68deg, #1ec7be, #1dc3ff)` — creator/seller avatar ring

## 3. Typography Rules

- **Typeface:** Pretendard (woff2, variable weight 45–920), with Pretendard Fallback (Arial-based) for system fallback
- **Body / Product name:** 15px / weight 400–500
- **Price / Emphasis:** 15px / weight 700; discount price 27px / weight 700
- **Button primary:** 16px / weight 600
- **Button confirm full-width:** 18px / weight 500
- **Caption / Meta:** 13px / weight 400–500
- **Badge / Tag:** 11–12px / weight 500
- **Page header height:** 56px (CSS export constant)
- **Letter spacing:** −0.2 px to −0.5 px on headings and price figures; Korean text benefits from tight negative tracking
- **Line height:** 135–145% for readable body, tabular-nums variant for prices and timers

## 4. Component Stylings

### Purchase Buttons

**Primary CTA (cart checkout)**
- Background: `#eb2b51`
- Text: `#ffffff`
- Radius: 8px
- Height: 50px
- Font: 16px / 600

**Full-Width Confirm (drawer bottom)**
- Background: `#eb2b51`
- Text: `#ffffff`
- Height: 56px
- Font: 18px / 500

**Dark Secondary (buy now inline)**
- Background: `#323232`
- Text: `#ffffff`
- Radius: 4px
- Height: 34px
- Font: 14px / 500

**Outline Delete / Cancel**
- Background: `#ffffff`
- Text: `#323232`
- Border: 1px solid `#e5e5e5`
- Radius: 4px
- Height: 34px
- Font: 14px / 500

**Shorts / Discovery CTA**
- Background: `#17181a`
- Text: `#ffffff`
- Radius: 6px
- Height: 40px
- Font: 15px / 600

---

### Coupon Card

**Active Coupon**
- Background: `#ffffff`
- Background: `#fff5f8`
- Text (price): `#eb2b51`
- Font: 27px / 700

**Claimed / Used Coupon**
- Background: `#ffffff`
- Border: 5px solid `#f3f3f3`
- Text: `#999999`
- Font: 13px / 500

---

### Purchase Nudge Bar

**Urgency Countdown**
- Background: `rgba(47, 23, 253, 0.05)`
- Text: `#6456dc`
- Radius: 4px
- Height: 38px
- Font: 14px / 500–600

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://www.grip.show (homepage HTML + CSS bundles via webapp-resource.grip.show/202606020502/_next/static/css/), https://webapp-resource.grip.show/202606020502/_next/static/css/2caceb3098ae7b02.css (main Tailwind utility CSS, 86 KB), https://webapp-resource.grip.show/202606020502/_next/static/css/1f9e9658ee2b291a.css (cart page CSS with button tokens), https://webapp-resource.grip.show/202606020502/_next/static/css/c2bfe78c6e53a384.css (coupon drawer CSS with full-width confirm button), https://gripcorp.co (brand/corp homepage with gradient slogan and propose-button), https://webapp-resource.grip.show/202606020502/_next/static/css/4299887bf9e53336.css (avatar + live ring CSS)
**Tier 2 sources:** getdesign.md/grip — 0 DESIGN.md files (NOT LISTED). refero — no result found for Grip KR.
**Conflicts unresolved:** none

## 5. Layout Principles

Grip is a single-column, mobile-only app (max-width 420px on desktop, 100% on mobile). The root `.main` container is fixed to 420px wide on desktop and stacks vertically: page header (56px fixed top), scrollable content, bottom nav (52px + safe-area bottom). The live video view occupies full viewport height (100dvh) with content layered via absolute positioning. Card grids use gap-based flex rows; product thumbnail grids use 109px fixed-width scroll containers. Horizontal scroll (Indiana Scroll) is used for curation rows, avoiding pagination friction.

## 6. Depth & Elevation

The UI relies on background-color contrast rather than drop shadows for layering. Bottom nav (`#17181a`) sits above the dark app canvas (`#0e1011`). Drawers and modals emerge from below (vaul-drawer, bottom-sheet pattern) using the Radix animation system. An `rgba(0,0,0,0.1)` scrim is applied to floating overlays. The live avatar ring uses `z-index:-1` on the after-pseudo for the gradient ring to sit behind the avatar circle, giving a halo effect without a shadow. Product thumbnail borders use `outline: 1px solid rgba(0,0,0,0.05)` with `outline-offset:-1px` to avoid layout shift at 8px radius.

## 7. Do's and Don'ts

### Do
- Use `#eb2b51` for every primary purchase action — checkout, confirm, coupon claim
- Present live status with the `#fe0189→#ff583c` animated ring gradient, not a static badge
- Set prices in 700 weight with tabular-nums to prevent width jitter during countdowns
- Keep body copy at 15px / 400 on light surfaces for readability at arm's length
- Use `#6456dc` exclusively for urgency/countdown nudges; don't repurpose it as a general brand color
- Maintain the 420px max-width constraint in desktop contexts to preserve mobile layout fidelity

### Don't
- Don't use `#ff3c78` as the primary CTA color — it is the lighter interactive affordance, not the checkout signal
- Don't add shadows to buttons; elevation is communicated through background contrast alone
- Don't place live-ring gradients on non-live seller avatars — the animation signals active broadcast
- Don't exceed 8px border-radius on purchase buttons; 24–31px is reserved for pill tags and avatar-adjacent elements
- Don't use font weight below 500 for interactive UI text; 400 is reserved for body copy and meta descriptions

## 8. Responsive Behavior

Grip is deliberately non-responsive in the traditional sense — it is a mobile web app. The root `.main` container is fixed at 420px wide and centered on desktop, with `max-width:100%` applied only on actual mobile viewports. At ≤460px the container becomes fluid. The bottom nav respects `env(safe-area-inset-bottom)` for notched devices. The video view layout enforces `min-width:360px` and `min-height:568px` to support older small-screen devices. Desktop visitors receive the 420px centered column; there is no tablet breakpoint.

## 9. Agent Prompt Guide

To produce Grip-consistent UI:
- Dark canvas: `background #0e1011`, body text `#eff0f4`, Pretendard 15px/400
- Primary CTA: `background #eb2b51`, white text, 8px radius, 50px height, 16px/600
- Secondary action: `background #323232`, white text, 4px radius, 34px height, 14px/500
- Live indicator: animated gradient ring `#fe0189→#ff583c` on circular avatars, 0.81s cubic-bezier(0.167, 0.166, 1, 1)
- Price display: 700 weight, tabular-nums, discount rate in `#eb2b51`
- Urgency nudge bar: `rgba(47,23,253,0.05)` background, `#6456dc` text, 4px radius, 38px height
- Coupon card: `#fff5f8` tint interior, primary amount in `#eb2b51` 27px/700
- Section dividers: 1px solid `#f3f3f3` (light) or background-color switch on dark
- No box-shadow on action elements; rely on background contrast for layering

## 10. Voice & Tone

**Tone adjectives:** energetic, direct, community-warm

| Do | Don't |
|----|-------|
| Use short imperative phrases ("지금 바로", "한정 특가") | Write formal or legalistic copy |
| Address the viewer as a participant in a live event | Address them as a faceless online shopper |
| Create urgency around the live moment ("지금 방송 중") | Use generic marketing hyperbole unrelated to real-time |
| Celebrate the seller-buyer relationship by name (Gripper) | Depersonalize the seller as "vendor" or "merchant" |

**Voice samples (illustrative):**
- *"지금 라이브 중! 방송에서만 만나는 특가를 놓치지 마세요."* — live broadcast nudge copy
- *"그리퍼가 직접 쓰고 추천하는 아이템, 지금 채팅으로 물어보세요."* — seller trust prompt
- *"1,000만이 선택한 영상 쇼핑, 그립."* — official slogan from og:title meta tag

## 11. Brand Narrative

Grip was founded in July 2018 by Kim Han-na, a former Naver marketer who had worked on video products including Jam Live and Snow. Along with six co-founders also from Naver and Kakao, she set out to build Korea's first mobile live commerce platform with a single animating belief: anyone with a smartphone should be able to sell anything, anytime, to anyone. The company (GripCompany, 주식회사 그립컴퍼니) is headquartered in Pangyo, Seongnam — the heart of Korea's tech ecosystem. In December 2021 Kakao became Grip’s largest shareholder (~50% stake, ₩180B), anchoring its live-commerce expansion.

Rather than replicating home shopping television or social media, Grip defined a third category: personal media commerce. Sellers — called Grippers — broadcast from wherever they are, answer questions live via chat, run in-stream auctions and games, and build loyal fan communities around their product expertise. The platform's patent portfolio reflects this: interactive mechanics like rolling dice, quiz games, and flash-sale countdowns are proprietary differentiators, not commodities.

By 2024 the app had surpassed 10 million downloads and runs approximately 1,300 live shows daily. Grip has expanded internationally (US via gripcorp.co, Japan in planning), and operates a B2B arm — Grip Cloud — that powers branded live commerce for third-party retailers. The mission remains unchanged: collapse the distance between the person who made or curated a product and the person who wants it.

## 12. Principles

1. **Anyone can sell.** The platform is designed so that a single creator with a smartphone has the same surface area as a large retailer. UI implication: seller onboarding, stream tooling, and product listing all default to zero-equipment, zero-staff flows.

2. **The live moment is the product.** Urgency is honest, not manufactured — it comes from the real-time nature of the broadcast. UI implication: live badges, countdown timers, and flash prices must always reflect actual live status; never show live signals on recorded or inactive streams.

3. **Community over catalogue.** Grip's retention mechanism is the seller-fan relationship, not a product recommendation algorithm. UI implication: seller avatars, follow states, and chat surfaces are given equal or greater prominence than product grids.

4. **Mobile-first, always.** The app was born on smartphone screens; desktop is a secondary, framed experience. UI implication: the 420px max-width is a design constraint, not a limitation — all interaction models (swipe, scroll, tap) are thumb-native.

5. **Trust through transparency.** Buyers can ask questions live and see the product in real context. UI implication: product info, seller credentials, and review surfaces should never be buried; the chat overlay must remain accessible throughout a broadcast.

## 13. Personas

*Illustrative Gripper (Seller) — "Minjung, 34, Busan"*
Runs a small handmade cosmetics business. She goes live three times a week from her kitchen studio, always engaging with regulars by name. She values the chat widget above everything else — it is her storefront window and her customer service desk simultaneously.

*Illustrative Buyer / Fan — "Soyeon, 28, Seoul"*
Follows 12 Grippers in beauty and fashion. She watches live shows on her commute and keeps the app's push notifications on for her favourite sellers. Price is secondary to trust — she buys because she knows the person selling.

*Illustrative Discovery Shopper — "Junho, 41, Daejeon"*
Opens Grip from a search ad for a specific product category. He swipes the home feed without following anyone, attracted by the HOT ranking and the real-time viewer count as a social-proof signal. He rarely revisits without a compelling deal.

*Illustrative B2B Brand Manager — "Hyeji, 30, Seoul"*
Uses Grip Cloud to run branded live events for an apparel label. She cares about the OBS integration, analytics dashboard, and the coupon issuance system — the consumer-facing design language is largely transparent to her.

## 14. States

- **Empty (Cart):** `#f3f3f3` circle container (64px) with a cart icon in `#c2c2c2`; text "담긴 상품이 없어요" in `#999` 15px/400; CTA to browse shorts in `#17181a` background
- **Loading (Live video):** full-viewport dark canvas `#111` with centered spinner; video cover div with `background-size:contain` for thumbnail placeholder
- **Error (Video stream):** gradient fallback `linear-gradient(180deg, #111 49.95%, #29235e)`; error text surfaced in white on the gradient
- **Error (Cart item — sold out / ended):** text label "품절" in `#e83c3b` 15px/700; product thumbnail at 50% opacity via `.disabled`
- **Success (Coupon claimed):** action panel switches to `#f8f8f8`; icon color moves from `#eb2b51` to `#999`; label reads "사용 완료"
- **Skeleton (Product thumbnail):** `border-radius:8px; outline:1px solid rgba(0,0,0,0.05)` on the wrapper; image `aspect-ratio:1/1` prevents layout shift
- **Disabled (Coupon card):** `opacity:0.5` applied to all child elements inside `.coupon > *`
- **Timer / Urgency:** `font-variant-numeric:tabular-nums; font-feature-settings:"tnum"` on all countdown displays; color `#6456dc`

## 15. Motion & Easing

**Duration scale:**
- Micro (state feedback): 80ms — bottom nav slide (`transition: all 0.08s linear`)
- Short (UI transitions): 150ms — Tailwind default (`cubic-bezier(0.4, 0, 0.2, 1)`)
- Medium (drawer open/close): 200–300ms — Radix accordion/drawer (`ease-out`)
- Long (avatar live animation): 810ms — pulse-border, ripple-border (`cubic-bezier(0.167, 0.166, 1, 1)`)

**Easing tokens:**
- Standard: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out, Material-derived)
- Decelerate (drawer enter): `ease-out`
- Live avatar: `cubic-bezier(0.167, 0.167, 0.833, 0.833)` for ripple ring
- Pulse entry: `cubic-bezier(0.167, 0.166, 1, 1)` for avatar scale pulse (4 iterations then infinite on live)

**Rules:**
- The live-ring animation (ripple-sm: scale 1.02→1.2, opacity 1→0) runs 4× then loops only when `repeat-live-animation` class is applied — indicating an active live session
- Bottom nav slides out (`translateY(100%)`) with 80ms linear — fast enough to feel native, not abrupt
- Drawer content uses Vaul/Radix `data-[state=open]` animate-in at 150ms; `data-[state=closed]` at 300ms (asymmetric: opens fast, closes deliberately)
- No spring physics; all motion is CSS cubic-bezier
