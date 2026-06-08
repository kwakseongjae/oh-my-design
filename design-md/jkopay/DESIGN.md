---
id: jkopay
name: "JKOPay"
country: TW
category: fintech
homepage: "https://www.jkopay.com"
primary_color: "#C9191D"
logo:
  type: favicon
  slug: "https://www.jkopay.com/application/favicon.ico"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#c9191d"
    primary-hover: "#d51b1f"
    primary-dark: "#851113"
    body: "#42434a"
    dark-bg: "#171718"
    dark-nav: "#292f40"
    surface: "#f4f4f6"
    border: "#ededf1"
    placeholder: "#b7b8c4"
    blue-accent: "#2e7dd9"
    white: "#ffffff"
  typography:
    family: { sans: "PingFang TC", fallback: "apple-system, source-han-sans-traditional, sans-serif" }
    display: { size: 56, weight: 700, lineHeight: 1.5, use: "Display / hero headline" }
    heading: { size: 36, weight: 600, lineHeight: 1.5, use: "Heading LG-3, section labels" }
    body:    { size: 18, weight: 400, lineHeight: 1.5, use: "Body SM reading text" }
    button:  { size: 17, weight: 500, use: "Button label, medium" }
    caption: { size: 13, weight: 400, use: "Caption / body SM-1" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 9, md: 12, lg: 16, full: 9999 }
  shadow:
    card: "rgba(0,0,0,0.12) 0px 15px 30px -25px"
  components:
    button-primary: { type: button, bg: "#c9191d", fg: "#ffffff", radius: 12, padding: "12px 29px", font: "17px weight 500", use: "Solid red primary CTA, hover #d51b1f" }
    button-ghost: { type: button, bg: "#ffffff", fg: "#c9191d", radius: 9, padding: "12px 24px", font: "17px weight 500", use: "Ghost secondary, 1px red border" }
    nav: { type: tab, bg: "#ffffff", fg: "#42434a", use: "Frosted-glass top nav, white at 0.80 alpha" }
    card: { type: card, bg: "#f4f4f6", radius: 12, use: "Card surface, white-to-warm-gray gradient, subtle shadow" }
    input: { type: input, bg: "#f4f4f6", fg: "#42434a", use: "Input fill, surface gray" }
    link-blue: { type: badge, fg: "#2e7dd9", use: "Informational link / secondary highlight" }
  components_harvested: true
---

# JKOPay

Taiwan's most widely used electronic payment platform, positioning itself as a full-spectrum fintech lifestyle companion — not just a wallet, but the infrastructure for daily life.

## 1. Visual Theme & Atmosphere

JKOPay's visual language is built around approachable confidence: a bold JKO red on a clean white-to-light-gray canvas that reads as modern and trustworthy without the austerity of traditional banking. The interface uses a clear typographic hierarchy with PingFang TC at its core, prioritising readability for Chinese-speaking users across age groups. Card surfaces carry a subtle gradient from pure white to a warm gray (#F4F4F6), with a barely-there shadow (0 15px 30px -25px rgba(0,0,0,0.12)) that lifts them off the page without theatrical depth. Navigation adopts a frosted-glass treatment (rgba(255,255,255,0.80)) that anchors the interface without competing with content. The overall atmosphere is warm, civic, and frictionless — built for the street-level simplicity of scanning and paying in seconds.

## 2. Color Palette & Roles

- **Brand Red (Primary):** `#C9191D` — primary action color; CTAs, brand highlights, active states, icon fills
- **Brand Red Hover:** `#D51B1F` — button hover state on primary CTAs
- **Brand Red Dark:** `#851113` — pressed/active state on primary interactive elements
- **Body Text:** `#42434A` — default text (rgb 66 67 74); high contrast on white surfaces
- **Dark Background:** `#171718` — footer, dark-mode panel backgrounds
- **Gray 900 / Dark Nav:** `#292F40` — section headings, heavy text on dark panels
- **Surface / Card:** `#F4F4F6` — card backgrounds, input fill, tag backgrounds
- **Border / Divider:** `#EDEDF1` — horizontal rules, card edges, list separators
- **Placeholder Text:** `#B7B8C4` — input placeholder, disabled labels
- **Blue Accent:** `#2E7DD9` — informational links, secondary highlights

## 3. Typography Rules

JKOPay uses a CJK-first font stack led by PingFang TC, falling back through Apple system fonts and then the Noto/Source Han family for cross-platform consistency.

**Font stack:** `PingFang TC, apple-system, system-ui, BlinkMacSystemFont, pingfang-tc, aktiv-grotesk, source-han-sans-traditional, Segoe UI, Roboto, Helvetica Neue, 微軟正黑體, sans-serif`

**Scale:**
- Display / Hero: 56px (mobile) → desktop responsive
- Heading LG-1: 50px
- Heading LG-2: 42px
- Heading LG-3: 36px
- Body MD: 21.4px (custom class `text-body-md`)
- Body SM: 18px (custom class `text-body-sm`)
- Body SM-2: 14px
- Body SM-1 / Caption: 13px
- Base UI: 16px
- Button: 17px / `font-medium` (weight 500)

**Weights:** 500 (medium) for UI elements and buttons; 600 for section labels; 700 for display headlines.
**Line-height:** `1.5` base; custom leading classes (`leading-body-sm-1`) for dense CJK text.

## 4. Component Stylings

### Primary CTA Button

**Solid Red (Primary)**
- Background: `#C9191D`
- Text: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 12px 29px
- Font: 17px / 500
- Hover Background: `#D51B1F`

**Ghost / Secondary**
- Background: `rgba(255,255,255,0.30)`
- Text: `#C9191D`
- Border: 1px solid `#C9191D`
- Radius: 9px
- Padding: 12px 24px
- Font: 17px / 500
- Hover Background: `rgba(134,134,134,0.063)`

### Navigation Bar

**Top Nav**
- Background: `rgba(255,255,255,0.80)`
- Height: 64px
- Border: 0 solid `rgba(0,0,0,0.10)`
- Font: 16px / 500
- Text: `#42434A`

### Card

**Standard Card**
- Background: `#F4F4F6`
- Border: 1px solid `rgba(244,244,246,0)`
- Radius: 20px
- Shadow: `0 15px 30px -25px rgba(0,0,0,0.12)`
- Padding: 16px

### Tag / Badge

**Brand Tag**
- Background: `#F4F4F6`
- Text: `#C9191D`
- Radius: 40px
- Padding: 2px 12px
- Font: 13px / 500

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://www.jkopay.com/application (homepage HTML + Next.js CSS bundle); https://www.jkopay.com/application/_next/static/css/6d42544b8623d735.css (main CSS bundle, 68 KB); https://img.jkos.com.tw/official_jkos_image/logo-red-square.svg (official brand logo SVG); https://www.jkos.com/press.html (press/brand page); https://www.jkos.com/download_app.html (download page)
**Tier 2 sources:** getdesign.md/jkopay — NOT LISTED ("No designs found for 'jkopay'"). refero — no result for JKOPay (TW brand, not indexed).
**Conflicts unresolved:** none

## 5. Layout Principles

JKOPay's homepage uses a single-column, full-bleed section layout on mobile, expanding to a constrained max-width container (≈1280px) on desktop with generous horizontal padding (4vw on large screens). Content sections alternate between white and light-gray (#F4F4F6) backgrounds, creating a visual rhythm without hard borders. The hero section stacks headline, subtext, and dual CTAs vertically, with a background photo covering the viewport. Feature cards are arranged in a 1-column (mobile) → 2–3-column (tablet/desktop) responsive grid. CTA buttons maintain a minimum width of 194px and are centered on mobile, left-aligned on desktop.

## 6. Depth & Elevation

JKOPay uses a restrained, two-tier shadow system:

- **Tier 0 – Flat:** No shadow; used for inline text links, tags, navigation items.
- **Tier 1 – Card:** `0 5px 40px -20px rgba(0,0,0,0.078)` — subtle lift for brand-wrapper cards and icon containers.
- **Tier 2 – Modal / Floating:** `0 8px 16px 0 rgba(0,0,0,0.20)` — dialogs, dropdown panels, toast notifications.

The frosted-glass nav (`rgba(255,255,255,0.80)`) adds implicit elevation through translucency rather than shadow. Dark overlays use `rgba(0,0,0,0.50)` for modals and `rgba(0,0,0,0.80)` for full-screen drawers.

## 7. Do's and Don'ts

### Do
- Use `#C9191D` as the sole primary action color; keep all CTAs visually consistent.
- Apply PingFang TC as the first font in the stack for CJK content rendering.
- Maintain 12px border-radius on primary buttons and 20px on cards for brand consistency.
- Use the frosted-glass pattern (`rgba(255,255,255,0.80)`) for sticky navigation.
- Keep button text at 17px / 500 weight regardless of container size.
- Use the #F4F4F6 surface for card backgrounds; never use pure white cards on white pages.
- Maintain a minimum button width of 194px for standalone CTAs.
- Reserve `#2E7DD9` blue strictly for informational/link contexts, not actions.

### Don't
- Never mix multiple accent colors within a single CTA row — one primary, one ghost maximum.
- Don't use font-weight 700 for body copy; reserve bold for hero headlines only.
- Avoid hard drop shadows deeper than Tier 2; JKOPay uses soft, spread shadows.
- Don't change button radius per breakpoint — 12px on desktop, 9px on mobile only for the ghost variant.
- Never use the brand red (`#C9191D`) for error states — keep error semantically distinct.
- Avoid placing content text below 13px to maintain CJK legibility standards.

## 8. Responsive Behavior

JKOPay is built with Tailwind CSS and uses the breakpoints `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px). Key responsive rules:

- **Hero headline:** 36px mobile → 42px sm → 50px lg
- **Primary button padding:** `py-[12px] px-[24px]` mobile → `py-[15px] px-[86px]` sm+
- **Card radius:** 20px mobile → 30px sm → consistent 20–24px on cards
- **Section padding:** 16px mobile → 25px md → 40–60px sm+
- **Grid columns:** 1-col mobile → 2-col md → 3-col lg for feature grids
- **Nav height:** fixed `4rem` (64px) with `calc(4rem + 2px)` on sm+ for hairline border

## 9. Agent Prompt Guide

When building JKOPay-style UI:
- Start with a white or `#F4F4F6` background; use `#C9191D` for all primary interactive elements.
- Font stack must lead with `PingFang TC` for correct CJK rendering.
- Buttons: solid red (`#C9191D`) primary + ghost (`border: #C9191D, bg: transparent`) secondary; radius 12px desktop / 9px mobile ghost.
- Cards: `#F4F4F6` background, `20px` radius, subtle shadow `0 15px 30px -25px rgba(0,0,0,0.12)`.
- Navigation: sticky, `rgba(255,255,255,0.80)` backdrop, 64px tall, brand-red active links.
- Typography: 16px base, 17px buttons (medium 500), 21.4px body section text, 42–56px hero.
- Avoid deep shadows, loud gradients, or competing accent colors — the interface stays warm and uncluttered.
- Use `transition-timing-function: cubic-bezier(0.4,0,0.2,1)` (Tailwind's default easing) for interactive transitions.

## 10. Voice & Tone

**Adjectives:** Approachable, empowering, matter-of-fact.

| Do | Don't |
|---|---|
| Use everyday Mandarin; keep sentences short and action-oriented | Use banking jargon or formal register |
| Lead with user benefit ("解鎖生活" — unlock life) | Lead with product features or technical specs |
| Use "你" (you) to address users directly | Use passive constructions or impersonal phrasing |
| Be warm but efficient — one idea per sentence | Over-explain or add hedging language |

**Voice samples (illustrative):**
- *Illustrative:* "不止支付，用手機聰明解鎖生活每一刻。" (More than payment — smartly unlock every moment of life with your phone.)
- *Illustrative:* "結帳只要出示個人條碼，輕鬆完成付款。" (Just show your barcode to complete payment — done in seconds.)
- *Illustrative:* "從早餐到晚餐，從捷運到便利商店，街口陪你走過每一個生活場景。" (From breakfast to dinner, from the MRT to the convenience store — JKO is with you at every moment of life.)

## 11. Brand Narrative

JKOPay (街口支付) was born from a simple frustration: in 2015, cash still dominated Taiwan's street economy despite the country's technological sophistication. Kevin Hu, returning from Wall Street where he had worked as a hedge fund analyst, saw what mobile-first payment infrastructure had done in China and believed Taiwan deserved the same. With backing from the JKO Network ecosystem his family had built, he launched JKOPay with a mandate not of profit maximisation but of societal utility — "For me, the value of entrepreneurship lies in whether it makes people's lives more convenient."

The name itself — 街口 (jiē kǒu), meaning "street corner" or "intersection" — embeds the brand's core promise into its identity. JKOPay is not a bank app or a tech platform; it is the infrastructure of the everyday corner, the moment where daily life meets commerce. The brand grew by befriending the merchants others ignored: night market vendors, small-town convenience stores, neighbourhood restaurants. By 2023, JKOPay had become Taiwan's largest e-wallet by both user count and transaction volume, handling everything from QR-code payments and P2P transfers to insurance, investment, and hospital registration.

The brand's evolution reflects this ambition. The tagline shifted from the utilitarian "掃碼行動支付" (scan-code mobile payment) to the expansive "不止支付" (more than payment) — acknowledging that the product had outgrown any single category. JKOPay envisions itself as Taiwan's answer to an integrated fintech super-app: accessible enough for a grandmother at the wet market, sophisticated enough for the daily investor checking their Tuofu Bao savings account.

## 12. Principles

1. **Convenience is the product.** The interface must remove friction at every touchpoint — one tap to pay, one scan to complete. *UI implication:* Primary CTA is always above the fold; payment codes load instantly with no intermediate loading state displayed to the user.

2. **Inclusive by design.** Taiwan's market spans every age and digital literacy level. Design must work for both the tech-native university student and the sixty-year-old market vendor. *UI implication:* Minimum touch targets of 48px; large body text (18–21px) for key transactional content; avoid icon-only navigation labels.

3. **Trust is earned through transparency.** The brand grew in a conservative financial culture; clarity and directness are non-negotiable. *UI implication:* All fees, limits, and state changes must be surfaced proactively; no buried fine print. Success and error states are unambiguous.

4. **The street corner, not the boardroom.** JKOPay's voice and visual language stay close to street-level Taiwan, not aspirational finance. *UI implication:* Photography shows real urban Taiwan — convenience stores, wet markets, MRT stations, not abstract lifestyle imagery. Typography favors clarity over elegance.

5. **Ecosystem over transaction.** Every payment is an entry point to a broader financial life. *UI implication:* Post-payment screens offer relevant next actions (savings, cashback, merchant discovery) rather than a dead-end confirmation.

## 13. Personas

*Illustrative — representative archetypes based on JKOPay's stated market position and public user research.*

**Illustrative Persona 1 — The Urban Commuter (小美, 28)**
A Taipei office worker who uses JKOPay for her morning coffee, MRT top-up, lunch delivery, and monthly utility bills. She values speed above all — she wants to pay and move on. She checks her cashback balance weekly and responds to in-app promotions for brands she already uses.

**Illustrative Persona 2 — The Night Market Merchant (阿伯, 55)**
A second-generation stall owner who adopted JKOPay when his regular customers started asking. He only needs the merchant QR code scan flow and weekly withdrawal. His design requirement: no clutter, large text, and a reliable receipt confirmation he can show customers.

**Illustrative Persona 3 — The Student Saver (志豪, 22)**
A university student who uses JKOPay for peer transfers ("找錢"), splitting meals with friends, and exploring JKOPay's Tuofu Bao micro-savings. He discovered the app because it offered the best cashback at FamilyMart. He is price-sensitive and motivated by gamified rewards.

**Illustrative Persona 4 — The SME Owner (雅雯, 42)**
A small business owner who integrated JKOPay for her e-commerce checkout and physical pop-up stalls. She needs the merchant dashboard for reconciliation and values JKOPay's broad customer reach (6 million+ users) as a marketing channel.

## 14. States

- **Empty:** Illustration of a QR code scanner with the prompt "尚無交易記錄" (No transactions yet) and a single primary CTA to make the first payment.
- **Loading — Scan:** Animated concentric red rings pulse from the QR code centre; no spinner, motion stays within the barcode boundary.
- **Loading — Page:** Full-page skeleton with `#F4F4F6` shimmer bars replacing content blocks; nav and footer remain visible.
- **Error — Payment Failed:** Red-bordered inline alert banner (`#C9191D` left border, `#FFEEEB` background) with clear message and a retry CTA.
- **Error — Network:** Toast notification with `rgba(0,0,0,0.80)` dark background, white text, auto-dismisses after 4 seconds.
- **Success — Payment:** Full-screen confirmation with a bold checkmark icon in `#C9191D`, transaction amount, merchant name, and a "返回首頁" (Back to home) secondary link.
- **Skeleton:** Card skeletons use `#F4F4F6` base with a linear-gradient shimmer; maintains same height and radius as real cards.
- **Disabled:** Buttons drop to `rgba(201,25,29,0.40)` (60% opacity red) and `cursor: not-allowed`; text remains white for legibility.

## 15. Motion & Easing

**Duration scale:**
- Micro (hover, focus ring): 150ms
- Standard (page transitions, modals): 250ms
- Expressive (QR scan animation, hero entrance): 800ms

**Easing:**
- Default interactive: `cubic-bezier(0.4, 0, 0.2, 1)` (Tailwind `ease-in-out` / Material standard)
- Entry (elements appearing): `ease-in` — `cubic-bezier(0.0, 0, 0.2, 1)`
- Exit (elements disappearing): `ease-out` 150ms

**Rules:**
- All interactive state changes (hover, focus, active) use the 150–200ms micro duration.
- Modal overlays fade in at 250ms `ease-in`; fade out at 250ms with visibility transition at 100ms `ease-in` offset.
- Page-level transforms (scroll-triggered reveals) use 800ms with AOS (animate-on-scroll) library.
- Never animate layout shifts — only opacity and transform changes.
- QR code scan pulse uses `transition: transform 0.8s` on concentric circles.
