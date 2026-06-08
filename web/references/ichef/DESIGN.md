---
id: ichef
name: iCHEF
country: TW
category: saas
homepage: "https://www.ichefpos.com"
primary_color: "#E8552D"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ichefpos.com&sz=128"
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#e8552d"
    primary-hover: "#d14a26"
    accent-tint: "#fdede7"
    canvas: "#ffffff"
    surface: "#f7f7f7"
    surface-hover: "#efefef"
    foreground: "#1f1f1f"
    body: "#555555"
    muted: "#888888"
    disabled: "#bcbcbc"
    hairline: "#e6e6e6"
    border: "#d4d4d4"
    success: "#1fa463"
    warning: "#f5a623"
    error: "#e0353b"
    info: "#2b82e0"
  typography:
    family: { sans: "PingFang TC", mono: "SFMono-Regular" }
    hero:      { size: 34, weight: 700, lineHeight: 1.15, use: "Marketing hero headline" }
    heading:   { size: 22, weight: 700, lineHeight: 1.25, use: "Card / section headings" }
    total:     { size: 24, weight: 700, lineHeight: 1.20, use: "Totals, table numbers (scannable)" }
    pos-tile:  { size: 17, weight: 600, lineHeight: 1.30, use: "POS button / menu item, large tap text" }
    body:      { size: 15, weight: 400, lineHeight: 1.50, use: "Body, descriptions" }
    button:    { size: 16, weight: 600, lineHeight: 1.20, use: "Button labels" }
    caption:   { size: 12, weight: 400, lineHeight: 1.40, use: "Caption, metadata" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 48, xxl: 80 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    card: "rgba(0,0,0,0.06) 0px 2px 8px"
    header: "rgba(0,0,0,0.06) 0px 1px 4px"
    modal: "rgba(0,0,0,0.18) 0px 8px 32px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#e8552d", fg: "#ffffff", radius: "8px", padding: "12px 24px", font: "16px / 600", hover: "bg #d14a26", use: "Primary CTA / key POS action" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#1f1f1f", border: "1px solid #d4d4d4", radius: "8px", padding: "12px 24px", font: "16px / 600", hover: "bg #f7f7f7", use: "Secondary actions" }
    pos-tile: { type: card, bg: "#ffffff", fg: "#1f1f1f", radius: "8px", padding: "12px", font: "16px / 600", active: "bg #fdede7, 1px solid #e8552d", use: "Tappable menu-item grid in order screen" }
    input: { type: input, bg: "#ffffff", fg: "#1f1f1f", border: "1px solid #d4d4d4", radius: "8px", padding: "12px 14px", font: "16px / 400", focus: "border #e8552d", states: "error border #e0353b", use: "Forms, menu editing, settings" }
    card-feature: { type: card, bg: "#ffffff", border: "1px solid #e6e6e6", radius: "8px", padding: "24px", use: "Feature explainers, plan cards" }
    card-order: { type: card, bg: "#ffffff", radius: "8px", padding: "12px", use: "Open-table / order tickets with status-tinted left border" }
    badge-status: { type: badge, bg: "#1fa463", fg: "#ffffff", radius: "4px", padding: "2px 8px", font: "12px / 600", states: "pending #f5a623, void #e0353b", use: "Order/payment status" }
---

# Design System Inspiration of iCHEF

## 1. Visual Theme & Atmosphere

iCHEF is an award-winning iPad-based restaurant point-of-sale system born in a Taipei beef-noodle shop, and its design system reflects a rare dual identity: it must look **trustworthy enough to run a restaurant's money** and **warm enough to feel like a partner to a small-business owner**. The atmosphere is **clean operational warmth** — a white, well-lit canvas anchored by a confident orange-red (`#E8552D`) that reads as both appetite (the color of cooked food, of a busy kitchen) and action (the POS button you tap a thousand times a service). Where enterprise software is cold and blue, iCHEF is warm and human; where a consumer app is playful, iCHEF is grounded and reliable. The design has the polish of its hardware heritage — iCHEF won an iF Gold Award (2016), a German Design Award grand prize (2017), and Red Dot recognition — so the bar for craft is high.

Typography is a clean, modern sans with full Traditional-Chinese support (`PingFang TC`, `Microsoft JhengHei`), because iCHEF's primary market is Taiwan and its users are restaurant owners and serving staff reading on an iPad mid-service. Hierarchy is **functional and legible** — clear sizing, generous contrast, scannable in a fast kitchen environment. The marketing site leans on real photography of restaurants and operators (social proof from actual owners), while the product UI is a high-legibility operational interface: big tap targets, clear states, no decoration that could slow a busy waiter.

What distinguishes iCHEF is the discipline of designing for **operators, not consumers**. The orange-red is the action and brand color — CTAs, key buttons, the active state on the POS grid — and the rest stays neutral and calm so the interface never fatigues someone staring at it for a ten-hour shift. It is a SaaS system with a hospitality heart: warm enough to invite a wary restaurateur in, rigorous enough to be trusted with the till.

**Key Characteristics:**
- **Orange-red (`#E8552D`)** as the brand + action color — appetite and action in one hue
- Clean white operational canvas — well-lit, calm, fatigue-resistant for long shifts
- Traditional-Chinese-first typography (`PingFang TC` / `Microsoft JhengHei`) — TW restaurant operators
- Award-winning craft heritage (iF Gold 2016, German Design Award 2017, Red Dot) — high polish bar
- Dual surface: warm marketing (real-operator photography, social proof) vs. high-legibility product UI
- Big tap targets + clear states — designed for fast, iPad-based, mid-service use
- Functional hierarchy — legibility over expressiveness; nothing slows a busy waiter
- Neutral gray scale so the orange-red never competes for attention
- Trustworthy-but-warm register — partner-to-owner, not vendor-to-customer
- Conservative radius (`8px` workhorse) for a clean, reliable, professional feel

## 2. Color Palette & Roles

> **Note:** Live computed-style verification was not completed this pass (WebFetch returned the marketing copy but the inspection browser session redirected unreliably). Values below combine the brief-provided primary, iCHEF's known orange-red operational identity, and conventional POS/SaaS roles. Hexes other than the primary are well-grounded approximations pending live re-inspection.

### Primary (Brand / Action)
- **iCHEF Orange-Red** (`#E8552D`): The brand + primary action color. Primary CTAs ("Free in-store demo"), key POS buttons, active/selected states, brand accents.
- **Orange-Red Hover** (`#D14A26`): Darker press/hover state.
- **Orange-Red Tint** (`#FDEDE7`): Very light wash for selected rows, highlight surfaces, soft emphasis.

### Surface & Background
- **Pure White** (`#FFFFFF`): Primary content + card surface; the operational canvas.
- **Surface Soft** (`#F7F7F7`): Grouped sections, page tint, POS background panels.
- **Surface Hover** (`#EFEFEF`): Hover/pressed neutral surface, table cells.

### Neutral / Text
- **Text Primary** (`#1F1F1F`): Headings, primary labels, key figures.
- **Text Secondary** (`#555555`): Body copy, descriptions.
- **Text Muted** (`#888888`): Metadata, captions, helper text.
- **Text Disabled** (`#BCBCBC`): Disabled labels, placeholders.

### Borders & Dividers
- **Border Light** (`#E6E6E6`): Row dividers, soft separators.
- **Border Mid** (`#D4D4D4`): Component borders (inputs, outlined buttons, cards).

### Semantic (operational — critical for POS)
- **Success / Paid** (`#1FA463`): Completed payment, success states, "open table cleared". Green = money settled.
- **Warning / Pending** (`#F5A623`): Pending order, kitchen-in-progress, attention states.
- **Error / Void** (`#E0353B`): Errors, voids, failed payment, destructive actions.
- **Info** (`#2B82E0`): Informational notices, neutral system messages.

### Accent (functional categorization)
- Muted category colors for menu/table grouping — kept desaturated so the orange-red action color always wins attention.

## 3. Typography Rules

### Font Stack (locale-aware, inferred)
| Locale | Stack |
|---|---|
| Default | `-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
| Traditional Chinese | `… "PingFang TC", "Microsoft JhengHei", sans-serif` |
| Simplified Chinese (regional) | `… "PingFang SC", "Microsoft YaHei", sans-serif` |
| English (intl markets) | `-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |

System stacks render natively on iPad (the primary product device) and across TW/SG/MY markets.

### Weights
- **700 (Bold)**: Headlines, key figures (totals, table numbers), primary CTAs.
- **600 (Semibold)**: Subheads, button labels, active tabs, menu-item names.
- **400 (Regular)**: Body, descriptions, metadata.

### Size Scale (px, inferred)
| Use | Surface | Size |
|---|---|---|
| Caption / meta | both | `12–13px` |
| Body | both | `14–16px` |
| POS button / menu item | product | `16–18px` (large tap text) |
| Total / table number | product | `20–28px` (bold, scannable) |
| Card / section heading | marketing | `20–24px` |
| Hero headline | marketing | `28–40px` |

### Conventions
- **Product UI uses larger text** than typical SaaS — it must be readable at arm's length on a counter iPad mid-service.
- **Numbers are prominent and bold** — totals, table numbers, quantities are the operational truth.
- **Weight + color drive hierarchy**; orange-red reserved for action, neutrals for everything else.
- **Traditional Chinese first** on TW surfaces; never Simplified.

## 4. Component Stylings

### Buttons

**Primary (CTA / POS action)**
- Background: `#E8552D`
- Text: `#FFFFFF`
- Border: none
- Radius: `8px`
- Padding: `12px 24px`
- Font: `16px` / `600`
- Hover: bg `#D14A26`
- Use: "Free in-store demo", primary site CTAs, key POS actions (charge / confirm)

**Secondary (Outlined)**
- Background: `#FFFFFF`
- Text: `#1F1F1F`
- Border: `1px solid #D4D4D4`
- Radius: `8px`
- Padding: `12px 24px`
- Font: `16px` / `600`
- Hover: bg `#F7F7F7`
- Use: "Learn more", secondary actions

**POS Tile (menu item)**
- Background: `#FFFFFF` (or muted category tint), selected = `#FDEDE7` + `1px solid #E8552D`
- Text: `#1F1F1F`
- Radius: `8px`
- Padding: `12px`
- Font: `16px` / `600`
- Use: Tappable menu-item grid in the order screen — big target, clear selected state

### Inputs

**Default**
- Background: `#FFFFFF`
- Text: `#1F1F1F`
- Border: `1px solid #D4D4D4`
- Radius: `8px`
- Padding: `12px 14px`
- Font: `16px` / `400`
- Focus: border `#E8552D`
- Error: border `#E0353B`
- Use: Forms, menu editing, settings

**Numeric / quantity stepper**
- Background: `#FFFFFF`
- Border: `1px solid #D4D4D4`
- Radius: `8px`
- Buttons: large +/- tap targets
- Use: Quantity entry in the order flow — finger-friendly

### Cards

**Feature / Content Card (marketing)**
- Background: `#FFFFFF`
- Border: `1px solid #E6E6E6` or shadow-separated
- Radius: `8–12px`
- Padding: `24px`
- Use: Feature explainers, plan cards, case-study tiles with operator photography

**Order / Table Card (product)**
- Background: `#FFFFFF`, status-tinted left border
- Radius: `8px`
- Padding: `12px`
- Use: Open-table list, order tickets — status color (green/amber) signals state at a glance

### Badges & Chips

**Status Badge**
- Paid: `#1FA463` bg / white
- Pending: `#F5A623` bg / `#1F1F1F`
- Void: `#E0353B` bg / white
- Radius: `4px`
- Padding: `2px 8px`
- Font: `12px` / `600`
- Use: Order/payment status — operational truth at a glance

### Tables
- Restaurant reporting / sales data uses clean tables: `#E6E6E6` row dividers, bold totals row, right-aligned currency
- Zebra striping optional via `#F7F7F7`

### Navigation
- Marketing: white sticky header, logo left, product/pricing/story nav, orange-red "Demo" CTA right
- Product: iPad-optimized side/bottom nav with large icons (Order / Tables / Menu / Reports / Settings)

## 5. Layout Principles

### Structure
- **Marketing**: centered max-width (~1200px), alternating white / `#F7F7F7` sections, real-operator photography, social-proof grids
- **Product (iPad)**: fixed operational layout — persistent nav + order area + item grid + running total; built for one-handed, fast use during service

### Spacing
- 8px-based spacing scale
- Product UI uses generous touch spacing (≥44px targets); marketing uses comfortable section rhythm (48–80px)

### Density
- **Marketing: medium density** — comfortable, photography-led, reassuring
- **Product: purposeful density** — packed enough to show a full menu grid + order, but with large tap targets so nothing is mis-tapped mid-rush

## 6. Depth & Elevation

iCHEF leans **flat-and-clean with soft functional shadows** — appropriate for a tool that must feel reliable, not flashy.

- **Card shadow**: `0 2px 8px rgba(0,0,0,0.06)` — subtle lift
- **Sticky header**: `0 1px 4px rgba(0,0,0,0.06)` on scroll
- **Modal / dialog**: `0 8px 32px rgba(0,0,0,0.18)`
- **POS active tile**: no shadow — selection shown by tint + orange-red border
- Buttons are flat; orange-red color is the weight.

### Z-Index
- Sticky nav above content; modals above chrome; toasts/alerts highest (a void or payment-error alert must always surface).

## 7. Do's and Don'ts

- **DO** reserve orange-red (`#E8552D`) for brand + action — CTAs, key POS buttons, selected states.
- **DON'T** flood the operational UI with orange-red; a long-shift interface must stay calm and fatigue-resistant.
- **DO** use status colors rigorously: green = paid/settled, amber = pending, red = void/error.
- **DON'T** confuse the brand orange-red with the error red — they must be distinguishable at a glance during a rush.
- **DO** use large text and ≥44px tap targets in the product UI.
- **DON'T** shrink POS controls to consumer-app sizes — a mis-tap mid-service costs money.
- **DO** lead marketing with real-operator photography and concrete ROI (more orders, higher spend, accurate accounting).
- **DON'T** use abstract enterprise stock imagery — iCHEF's credibility is real restaurants.
- **DO** keep numbers (totals, table numbers, quantities) bold and prominent.
- **DON'T** decorate the product UI; nothing should slow or distract a busy waiter.
- **DO** use Traditional Chinese on TW surfaces; never Simplified.
- **DO** honor the award-winning craft bar — alignment, spacing, and states must be precise.

## 8. Responsive Behavior

### Breakpoints
| Width | Behavior |
|---|---|
| Desktop `>1200px` | Marketing: full nav, multi-column feature/plan grids, centered container |
| Laptop `1024–1200px` | 2–3 column grids, condensed nav |
| Tablet / iPad `768–1024px` | Product's native zone — fixed POS layout; marketing collapses to 1–2 columns |
| Mobile `<768px` | Marketing: single column, hamburger nav, full-width orange-red CTA; product is iPad-first (phone is companion/owner-dashboard) |

### Touch & Mobile
- Product UI is iPad-optimized: large tiles, persistent running total, thumb-reachable charge action
- Marketing mobile uses full-width CTAs and stacked social-proof cards
- Owner dashboard (reports) is mobile-friendly for off-site monitoring

### Media
- Operator/restaurant photography `object-fit: cover`, consistent aspect ratios
- Product screenshots shown in device frames (iPad) to reinforce the hardware heritage

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / action: iCHEF Orange-Red (`#E8552D`); hover `#D14A26`; tint `#FDEDE7`
- Text primary: `#1F1F1F`; muted: `#888888`
- Surface: white `#FFFFFF`; soft `#F7F7F7`
- Border: `#D4D4D4`
- Status: Paid `#1FA463` · Pending `#F5A623` · Void/Error `#E0353B` · Info `#2B82E0`

### Example Component Prompts
- "Create an iCHEF primary CTA: `#E8552D` bg, white text, 8px radius, 16px/600, padding 12px 24px, no shadow. Hover bg `#D14A26`. Label '專人到店免費體驗' / 'Free in-store demo'."
- "Build an iCHEF POS menu-item tile: white bg, 8px radius, 12px padding, item name 16px/600 #1F1F1F, price 14px/400 #888888, ≥44px tall. Selected state: `#FDEDE7` bg + 1px solid #E8552D. Large tap target."
- "Design an open-table card: white bg, 8px radius, status-tinted left border (green #1FA463 paid / amber #F5A623 pending), table number 20px/700, item count + total bold, status badge top-right."
- "Create a feature card: white bg, 1px solid #E6E6E6, 12px radius, 24px padding, real-restaurant photo top, headline 20px/700 #1F1F1F, body 14px/400 #555555, concrete ROI stat in #E8552D."

### Iteration Guide
1. **Orange-red is action; keep operational UI calm.** Long shifts demand a fatigue-resistant neutral base.
2. **Status colors are rigorous:** green = paid, amber = pending, red = void/error — distinct from brand orange-red.
3. **Large text + ≥44px targets in product UI.** A mis-tap costs money.
4. **Numbers bold and prominent** — totals/tables/quantities are the operational truth.
5. **Marketing = real operators + concrete ROI**, never abstract stock.
6. **8px radius workhorse; flat surfaces; subtle shadows.** Reliable, not flashy.
7. **Traditional Chinese first on TW; never Simplified.**

---

## 10. Voice & Tone

iCHEF speaks like a co-founder who used to run a restaurant — practical, encouraging, and on the operator's side, never condescending or jargon-heavy. The register is **partner-to-owner**: it talks about the realities of running a restaurant (orders, margins, accounting, staff workflow) in plain language, and frames technology as a means to a better business, not an end in itself. The brand's own line, "We build the best restaurant POS in the world, and keep making it better," and its mission framing — "technology should help, not handicap, entrepreneurship" — capture the tone: confident, humble about the craft, and squarely focused on the owner's success. Traditional Chinese is the first-class TW voice; English serves international markets (SG/MY). The marketing voice is warm and concrete (real owners, real numbers); the product voice is terse and operational (clarity above all when someone is mid-service).

| Context | Tone |
|---|---|
| Hero / marketing | Confident + owner-focused. `科技用得更好，餐廳業績更好` (better tech use, better restaurant performance). Benefit-led. |
| CTAs | Concrete + inviting. `專人到店免費體驗` (free in-store demo), `Learn more`. Low-pressure. |
| Product UI labels | Terse, operational. `結帳` (checkout), `開桌` (open table), `作廢` (void). Action verbs, no fluff. |
| ROI / value copy | Specific and evidenced — more orders, higher per-customer spend, accurate accounting. Numbers over adjectives. |
| Empty states | Practical next step (add your first menu item / open your first table). Encouraging. |
| Errors (operational) | Clear and immediate — what happened, what to do. No blame on the operator mid-rush. |
| Success (payment / settle) | Quiet confirmation; the green status is the signal. No celebration mid-service. |
| Support / onboarding | Patient, hand-holding — many users are not tech-natives. |

**Forbidden phrases.** Tech jargon that talks down to operators (`leverage our synergistic platform`), `Oops!` on a money-handling error, vague hype (`revolutionary POS`) without a concrete operator benefit, abstract enterprise-speak, Simplified-Chinese characters on TW surfaces, anything that blames the user during a live-service error, exclamation-heavy marketing on the product UI.

**Voice samples.**
- `科技用得更好，餐廳業績更好` — homepage value proposition (better technology use → better restaurant performance) <!-- verified: ichefpos.com tagline via WebFetch 2026-05-19 -->
- `We build the best restaurant POS in the world, and keep making it better.` — brand line <!-- verified: ichefpos.com/about-ichef via WebFetch 2026-05-19 -->
- `專人到店免費體驗` — primary demo CTA (free in-store demonstration) <!-- verified: ichefpos.com CTA via WebFetch 2026-05-19 -->
- `開桌` / `結帳` / `作廢` — illustrative product-UI action labels (open table / checkout / void) <!-- illustrative: conventional POS verbs; not live-DOM-verified this pass -->
- `先新增一個菜單品項，就能開始接單。` — illustrative empty-state copy (add a menu item to start taking orders) <!-- illustrative: not verified as live iCHEF copy -->

## 11. Brand Narrative

iCHEF was founded in **2012 in Taipei**, and its origin is unusually literal: it was born inside a restaurant. **Sean Hsu** was running his spicy beef-noodle chain **Mazendo** when he hit the wall every restaurateur knows — the existing POS terminals were big, fixed, expensive, and built for the vendor's convenience, not the operator's workflow. Wanting a simpler, mobile, iPad-based system that actually fit how a kitchen and front-of-house move, he teamed with four other specialists to design his own — and iCHEF was the result. ([ichefpos.com/ichef-story](https://www.ichefpos.com/ichef-story); founding story corroborated via Meet Global / Vulcan Post) <!-- source: WebSearch + WebFetch 2026-05-19; not independently audited -->

That origin is the whole brand. iCHEF's stated belief — that **"technology should help, not handicap, entrepreneurship"** — and its mission to **"turn enterprise-level technologies into something affordable and understandable for small restaurants"** come straight from a founder who lived the problem. The design language is the expression of that empathy: the warm orange-red invites a wary, non-technical owner in; the high-legibility, big-target product UI respects that the user is mid-service with their hands full; the clean, award-winning craft signals that this small-business tool is built to a flagship standard.

iCHEF's craft has been recognized at the highest levels — an **iF Gold Award (2016)**, a **German Design Award grand prize (2017)**, and Red Dot recognition — rare for a vertical SaaS tool, and a signal that design is treated as core, not cosmetic. The product now serves **over 10,000 restaurants across Asia** (Taiwan, plus Singapore, Malaysia, Hong Kong), consolidating table management, menu editing, billing, discounts, and reward points into one iPad interface — the simple, mobile system Sean Hsu wished he'd had behind the noodle counter. ([ichefpos.com/about-ichef](https://www.ichefpos.com/about-ichef)) <!-- source: WebFetch 2026-05-19; metrics surfaced by iCHEF, not independently audited -->

## 12. Principles

1. **Built by operators, for operators.** iCHEF's empathy comes from a founder who ran a restaurant; the UI respects the realities of service. *UI implication:* Large tap targets, terse operational labels, fast paths to the actions that matter (open table, charge, void). Never make a busy waiter hunt or read paragraphs.

2. **Warm enough to trust, rigorous enough to bank on.** The orange-red invites; the discipline reassures. *UI implication:* Use warm orange-red for brand/action and invitation; keep money and status surfaces precise — exact totals, unambiguous paid/pending/void states.

3. **Calm under load.** A ten-hour shift demands a fatigue-resistant interface. *UI implication:* Neutral operational canvas, orange-red rationed to action; no decorative animation; high contrast and legibility above expressiveness.

4. **Status is sacred.** In a POS, the difference between paid, pending, and void is the difference between getting paid and losing money. *UI implication:* Reserve green/amber/red strictly for settlement states; make them distinguishable from the brand orange-red at a glance; surface payment errors immediately, never silently.

5. **Flagship craft for a small-business tool.** Award-recognized design is a brand promise. *UI implication:* Precision in alignment, spacing, radius (8px), and state design. The bar is iF/Red Dot, not "good enough for SMB."

6. **Traditional Chinese first.** TW restaurant operators are the heart of the user base. *UI implication:* Use the `PingFang TC` / `Microsoft JhengHei` stack; author TW copy natively; never Simplified on TW surfaces.

## 13. Personas

*Personas are fictional archetypes informed by publicly described iCHEF user segments (TW/SG/MY independent restaurant owners and staff), not individual people.*

**陳老闆 (Boss Chen), 48, Taipei.** Owns a 30-seat noodle shop and is not a tech person. Chose iCHEF after a free in-store demo because it was simpler than the old register and he could see his daily sales on his phone at home. Cares about accurate end-of-day accounting and that staff can learn it fast. The orange "charge" button and a clear daily total are 90% of his use.

**Mei, 24, front-of-house.** A part-time server who learned iCHEF in one shift. Lives in the order screen during service — open table, tap items, send to kitchen, split bill, charge. Values big tappable tiles and instant feedback; a laggy or tiny control mid-rush is her nightmare.

**Aaron, 35, multi-outlet operator (Singapore).** Runs three café outlets and uses iCHEF's reporting to compare locations and manage menus centrally. Cares about cross-outlet data, reliability, and integrations; evaluates iCHEF on whether it scales from one shop to several without breaking the simplicity that sold him.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no menu items)** | One `#888888` line + primary CTA (`#E8552D`) to add the first menu item. Encouraging, practical. |
| **Empty (no open tables)** | Calm `#888888` prompt + "Open table" action. The default resting state of a quiet floor. |
| **Loading (reports / sync)** | Skeleton blocks at `#F7F7F7`, 8px radius; numeric cells as gray bars. No spinner takeover; existing data stays visible during refresh. |
| **Loading (inline — charge)** | Charge button holds width, in-button spinner; prevents double-charge. Critical: never allow a second tap to double-bill. |
| **Error (form field)** | Border `1px solid #E0353B`, helper text below in `#E0353B` 12px, field-specific and blameless. |
| **Error (payment failed)** | Immediate prominent alert (not a quiet toast) — `#E0353B` accent, plain sentence on what failed + retry. A failed payment must always surface. |
| **Error (offline / sync)** | Persistent banner: iCHEF keeps working locally; banner reassures that orders are saved and will sync. Never block service on connectivity. |
| **Success (payment settled)** | Status flips to green (`#1FA463`) Paid; quiet confirmation. The green status badge IS the signal — no celebratory animation mid-service. |
| **Success (form save)** | Brief confirmation line + return to flow. |
| **Skeleton** | `#F7F7F7` blocks at exact dimensions; currency placeholders render as `—`, never `$0`. |
| **Disabled (button)** | Faded fill, `#BCBCBC` text, geometry preserved so re-enabled controls don't shift. |

## 15. Motion & Easing

iCHEF motion is **minimal and operational** — feedback must be instant and unambiguous; nothing should delay or distract during service.

**Durations:**
| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | POS tile selection, toggle flips, reduce-motion fallback |
| `motion-fast` | 120ms | Hover/press, tab switch, small reveals |
| `motion-standard` | 200ms | Dropdowns, panel slides, tooltip fades |
| `motion-slow` | 300ms | Modal open, settings drawers |

**Easings:**
| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Things appearing — modals, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Dismissals |

**Spring stance.** Spring/overshoot is **forbidden** in the product UI. A POS is a money-handling tool used at speed; bouncy motion delays feedback and undermines the trust the system must project. POS tile selection is **instant** (0ms) — the tap registers immediately, because any perceived lag during a rush is a usability failure. Marketing surfaces may use gentle scroll reveals, but never elastic motion.

**Signature motions.**
1. **POS tile tap.** Instant state change — tile gets the `#FDEDE7` tint + orange-red border with 0ms latency. The finger is the feedback; no animation may sit between tap and registration.
2. **Add-to-order.** New line slides into the order panel over `motion-fast / ease-enter`; the running total updates immediately (no count-up animation — the number must be true the instant it changes).
3. **Status transition.** A table/order transitioning to Paid cross-fades to green over `motion-standard` — quick and clear, never celebratory.
4. **Modal / settings drawer.** Slides in over `motion-slow / ease-enter`; dismisses with `ease-exit`. Standard, calm.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`; modal/drawer slides become instant opacity toggles. Operational feedback is unaffected (it was already instant). No exceptions.

<!--
OmD v0.1 Sources — ichef
Created: 2026-05-19

Tier 1 (partial): ichefpos.com + /about-ichef WebFetched successfully (2026-05-19) — confirmed
taglines "科技用得更好，餐廳業績更好" and "We build the best restaurant POS in the world, and keep
making it better.", demo CTA "專人到店免費體驗", warm orange/red brand identity, TW Traditional-
Chinese + English bilingual, real-restaurant photography, award positioning (iF / German Design /
Red Dot). Live computed-style DOM inspection NOT completed (Playwright MCP session redirected to
injected interstitials). primary_color #E8552D is the creation-brief-provided value and matches
iCHEF's known orange-red identity; the secondary palette in §2 is a well-grounded approximation
(POS/SaaS conventions) pending live re-inspection. Flagged for a future omd:add-reference UPDATE.

Tier 2 (philosophy/founders):
- ichefpos.com/about-ichef + /ichef-story (WebFetch 2026-05-19) — mission "technology should help,
  not handicap, entrepreneurship"; "turn enterprise-level technologies into affordable/understandable
  for small restaurants"; 10,000+ restaurants across Asia; awards iF Gold 2016 / German Design Award
  2017 / Red Dot.
- meet-global.bnext.com.tw + vulcanpost.com (WebSearch 2026-05-19) — founding: 2012, born from Sean
  Hsu's Mazendo beef-noodle chain; he designed his own POS with four specialists after finding
  existing terminals too big/fixed. CMO Ken Chen on learning from restaurant owners.
  Metrics surfaced by iCHEF, not independently audited.

Illustrative (not verified as live copy): product-UI action labels, empty-state copy, type scale,
secondary/status hexes, font stack (inferred from POS/SaaS + TW conventions). Marked inline.
Personas fictional (§13).
-->

---

**Verified:** 2026-05-19
**Tier 1 sources:** ichefpos.com + /about-ichef (WebFetch — taglines "科技用得更好，餐廳業績更好" / "We build the best restaurant POS in the world…", demo CTA "專人到店免費體驗", warm orange-red identity, TW+EN bilingual, award positioning). Live DOM inspect NOT completed (browser redirect); primary `#E8552D` is brief-provided and matches iCHEF's orange-red identity; other hexes are grounded approximations pending live re-inspection.
**Tier 2 sources:** Meet Global (bnext) + Vulcan Post (founding story / Sean Hsu / Mazendo).
**Tier 2 (Philosophy/founders):** ichefpos.com/about-ichef + /ichef-story (mission, 10k+ restaurants, iF Gold 2016 / German Design Award 2017 / Red Dot).
**Style ref:** `pinkoi` (TW tone, adapted operational). **Conflicts unresolved:** production hexes beyond primary not live-verified this pass (browser unreliable) — flagged for UPDATE.
