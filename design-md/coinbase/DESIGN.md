# Design System Inspiration of Coinbase

## 1. Visual Theme & Atmosphere

Coinbase's website is a clean, trustworthy crypto platform that communicates financial reliability through a blue-and-white binary palette. The design uses Coinbase Blue (`#0052ff`) — a deep, saturated blue — as the singular brand accent against white and near-black surfaces. The proprietary font family includes CoinbaseDisplay for hero headlines, CoinbaseSans for UI text, CoinbaseText for body reading, and CoinbaseIcons for iconography — a comprehensive four-font system.

The button system uses a distinctive 56px radius for pill-shaped CTAs with hover transitions to a lighter blue (`#578bfa`). The design alternates between white content sections and dark (`#0a0b0d`, `#282b31`) feature sections, creating a professional, financial-grade interface.

**Key Characteristics:**
- Coinbase Blue (`#0052ff`) as singular brand accent
- Four-font proprietary family: Display, Sans, Text, Icons
- 56px radius pill buttons with blue hover transition
- Near-black (`#0a0b0d`) dark sections + white light sections
- 1.00 line-height on display headings — ultra-tight
- Cool gray secondary surface (`#eef0f3`) with blue tint
- `text-transform: lowercase` on some button labels — unusual

## 2. Color Palette & Roles

### Primary
- **Coinbase Blue** (`#0052ff`): Primary brand, links, CTA borders
- **Pure White** (`#ffffff`): Primary light surface
- **Near Black** (`#0a0b0d`): Text, dark section backgrounds
- **Cool Gray Surface** (`#eef0f3`): Secondary button background

### Interactive
- **Hover Blue** (`#578bfa`): Button hover background
- **Link Blue** (`#0667d0`): Secondary link color
- **Muted Blue** (`#5b616e`): Border color at 20% opacity

### Surface
- **Dark Card** (`#282b31`): Dark button/card backgrounds
- **Light Surface** (`rgba(247,247,247,0.88)`): Subtle surface

## 3. Typography Rules

### Font Families
- **Display**: `CoinbaseDisplay` — hero headlines
- **UI / Sans**: `CoinbaseSans` — buttons, headings, nav
- **Body**: `CoinbaseText` — reading text
- **Icons**: `CoinbaseIcons` — icon font

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | CoinbaseDisplay | 80px | 400 | 1.00 (tight) | Maximum impact |
| Display Secondary | CoinbaseDisplay | 64px | 400 | 1.00 | Sub-hero |
| Display Third | CoinbaseDisplay | 52px | 400 | 1.00 | Third tier |
| Section Heading | CoinbaseSans | 36px | 400 | 1.11 (tight) | Feature sections |
| Card Title | CoinbaseSans | 32px | 400 | 1.13 | Card headings |
| Feature Title | CoinbaseSans | 18px | 600 | 1.33 | Feature emphasis |
| Body Bold | CoinbaseSans | 16px | 700 | 1.50 | Strong body |
| Body Semibold | CoinbaseSans | 16px | 600 | 1.25 | Buttons, nav |
| Body | CoinbaseText | 18px | 400 | 1.56 | Standard reading |
| Body Small | CoinbaseText | 16px | 400 | 1.50 | Secondary reading |
| Button | CoinbaseSans | 16px | 600 | 1.20 | +0.16px tracking |
| Caption | CoinbaseSans | 14px | 600–700 | 1.50 | Metadata |
| Small | CoinbaseSans | 13px | 600 | 1.23 | Tags |

## 4. Component Stylings

### Buttons

**Primary Pill (56px radius)**
- Background: `#eef0f3` or `#282b31`
- Radius: 56px
- Border: `1px solid` matching background
- Hover: `#578bfa` (light blue)
- Focus: `2px solid black` outline

**Full Pill (100000px radius)**
- Used for maximum pill shape

**Blue Bordered**
- Border: `1px solid #0052ff`
- Background: transparent

### Cards & Containers
- Radius: 8px–40px range
- Borders: `1px solid rgba(91,97,110,0.2)`

## 5. Layout Principles

### Spacing System
- Base: 8px
- Scale: 1px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 15px, 16px, 20px, 24px, 25px, 32px, 48px

### Border Radius Scale
- Small (4px–8px): Article links, small cards
- Standard (12px–16px): Cards, menus
- Large (24px–32px): Feature containers
- XL (40px): Large buttons/containers
- Pill (56px): Primary CTAs
- Full (100000px): Maximum pill

## 6. Depth & Elevation

Minimal shadow system — depth from color contrast between dark/light sections.

## 7. Do's and Don'ts

### Do
- Use Coinbase Blue (#0052ff) for primary interactive elements
- Apply 56px radius for all CTA buttons
- Use CoinbaseDisplay for hero headings only
- Alternate dark (#0a0b0d) and white sections

### Don't
- Don't use the blue decoratively — it's functional only
- Don't use sharp corners on CTAs — 56px minimum

## 8. Responsive Behavior

Breakpoints: 400px, 576px, 640px, 768px, 896px, 1280px, 1440px, 1600px

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand: Coinbase Blue (`#0052ff`)
- Background: White (`#ffffff`)
- Dark surface: `#0a0b0d`
- Secondary surface: `#eef0f3`
- Hover: `#578bfa`
- Text: `#0a0b0d`

### Example Component Prompts
- "Create hero: white background. CoinbaseDisplay 80px, line-height 1.00. Pill CTA (#eef0f3, 56px radius). Hover: #578bfa."
- "Build dark section: #0a0b0d background. CoinbaseDisplay 64px white text. Blue accent link (#0052ff)."

## 10. Voice & Tone

Coinbase's voice is **compliance-aware-but-friendly** — a fintech that's been through SEC scrutiny and writes microcopy with both legal precision and consumer warmth. Marketing copy avoids hyped crypto-bro language ("moon", "lambo") and stays plainspoken: *"Buy and Sell Bitcoin, Ethereum, and more with trust"* (homepage 2026-05). Product UI emphasizes regulatory clarity (KYC required, rates explicit, fees disclosed) over speculative excitement.

| Context | Tone |
|---|---|
| CTA | Verb-first. "Sign up", "Buy", "Sell". Never "Trade now!!" |
| Marketing | Trust-emphasized. Plain language about regulation/security |
| Error (verification) | Specific. "Verification incomplete. Upload a government-issued ID to continue." |
| Success (transaction) | Receipt-detail. Asset, amount, fee, USD equivalent, network confirmation status |
| Risk warnings | Required and prominent — never minimized in fine print |

**Voice samples**
- Tagline: *"Buy and Sell Bitcoin, Ethereum, and more with trust"* <!-- verified: coinbase.com homepage 2026-05 -->

**Forbidden phrases.** "To the moon", "diamond hands". Hyperbolic ROI claims. Hidden fees. "Risk-free" framing on volatile assets.

## 11. Brand Narrative

Coinbase was founded **June 2012** in San Francisco by **Brian Armstrong** (CEO) and **Fred Ehrsam** (former Goldman Sachs FX trader) ([Brian Armstrong — Wikipedia](https://en.wikipedia.org/wiki/Brian_Armstrong_(businessman)), [Frederick.ai — Brian Armstrong](https://www.frederick.ai/blog/brian-armstrong-coinbase)). Origin story: **Armstrong posted on Hacker News looking for a co-founder for Y Combinator**; Ehrsam responded after seeing the post on Reddit — the HN post itself went viral. They entered **Y Combinator S12** with $150K. Mission: ***"to increase economic freedom in the world."*** **NASDAQ direct listing April 14, 2021** under ticker **COIN** — landmark moment for the crypto industry, briefly approached **$100B market cap** at IPO peak ([99bitcoins](https://99bitcoins.com/people/who-is-brian-armstrong/)). Coinbase **survived the 2022 crypto winter and the FTX collapse (Nov 2022)** as the most-regulated US crypto exchange — turning regulatory caution into positioning advantage. Product family extended: **Coinbase Wallet** (non-custodial), **Coinbase Prime** (institutional), **Base** (L2 blockchain, launched 2023).

What Coinbase refuses: token shilling, unregistered securities listings (regulatory caution), aggressive trader-bait UI, casino-style gambling framing.

## 12. Principles

1. **Compliance is a feature, not a tax.** *UI implication:* KYC/security flows have first-class UX investment, not last-mile.
2. **Show the receipt, always.** *UI implication:* every transaction includes asset / amount / fee / USD value / network status.
3. **Education sits next to action.** *UI implication:* Earn pages, Learn pages have nav prominence equal to Trade.
4. **Round buttons, not aggressive corners.** *UI implication:* fully-pill (`56px` radius) on primary actions reads "approachable, retail-grade".
5. **Coinbase Blue `#0052ff` is the only accent.** *UI implication:* never multi-color brand chrome; let market data charts carry color.

## 13. Personas

*Personas are fictional archetypes informed by Coinbase user segments (retail crypto holders, institutional traders, recurring-buy long-holders), not individual people.*

**Marcus Reilly, 41, Boston.** First-time crypto buyer, $200/month recurring buy of BTC and ETH. Trusts Coinbase as the most regulated US option.

**Yuki Sato, 29, Tokyo.** Tech worker exploring DeFi via Coinbase Wallet (separate from Coinbase exchange). Cares about gas fees and L2 support.

**Aisha Patel, 53, NYC.** RIA managing client crypto exposure via Coinbase Prime (institutional). Compliance reporting is the entire reason for choosing Coinbase.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no portfolio)** | "Make your first purchase" CTA + recurring-buy promotion |
| **Empty (no transactions)** | "Your transaction history will appear here." Plain, no upsell |
| **Loading (price feed)** | Per-cell shimmer; chart shows last cached + stale-indicator |
| **Loading (KYC verification)** | Persistent badge, allows navigation while pending |
| **Error (verification)** | Specific reason + remediation path, never blocking-without-recourse |
| **Error (transaction)** | Receipt-style failure + retry + customer support link |
| **Success (purchase)** | Full receipt: amount, fee, USD value, network confirmation tracker |
| **Success (deposit)** | Confirmation + when funds available, network reliance disclosed |
| **Skeleton (asset list)** | Light gray rows at exact dimensions |
| **Disabled (insufficient funds)** | 0.5 opacity + "Add funds" inline link |
| **Loading (long action: send/withdraw)** | Multi-step progress (Submitted → Confirming → Confirmed) with explicit timing |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |
| `motion-pulse` | continuous | Live price-update micro-flash on cells |

Easings: standard cubic-bezier; no bounce. **Live price updates** flash green/red cell background briefly on tick. `prefers-reduced-motion: reduce` disables price flash.

---

**Verified:** 2026-05-08 (B2 loop)
**Tier 1 sources:** coinbase.com (live DOM via playwright — round 56px icon buttons; Sign up `#0052ff` 56px / 16px·600 / 47-60px height)
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 1 (Philosophy):** coinbase.com homepage; Brian Armstrong public talks; SEC public filings.
**Style ref:** `stripe`. **Conflicts unresolved:** none.
