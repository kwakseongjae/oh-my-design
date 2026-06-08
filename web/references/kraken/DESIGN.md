---
id: kraken
name: Kraken
country: US
category: fintech
homepage: "https://www.kraken.com"
primary_color: "#5741d9"
logo:
  type: github
  slug: krakenfx
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#7132f5"
    primary-hover: "#5741d8"
    primary-deep: "#5b1ecf"
    brand: "#7132f5"
    canvas: "#ffffff"
    foreground: "#101114"
    muted: "#9497a9"
    on-primary: "#ffffff"
    hairline: "#dedee5"
    body: "#686b82"
    success: "#149e61"
    success-text: "#026b3f"
    error: "#d54848"
  typography:
    family: { sans: "Kraken-Product", mono: "IBM Plex Sans" }
    display-hero:    { size: 48, weight: 700, lineHeight: 1.17, tracking: "-1px", use: "Hero headline, Kraken-Brand" }
    section-heading: { size: 36, weight: 700, lineHeight: 1.22, tracking: "-0.5px", use: "Section heading, Kraken-Brand" }
    sub-heading:     { size: 28, weight: 700, lineHeight: 1.29, tracking: "-0.5px", use: "Sub-heading, Kraken-Brand" }
    feature-title:   { size: 22, weight: 600, lineHeight: 1.2, use: "Feature title, Kraken-Product" }
    body:            { size: 16, weight: 400, lineHeight: 1.38, use: "Body text" }
    button:          { size: 16, weight: 500, lineHeight: 1.38, use: "Button label" }
    caption:         { size: 14, weight: 400, lineHeight: 1.43, use: "Caption" }
    small:           { size: 12, weight: 400, lineHeight: 1.33, use: "Small text" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 25 }
  rounded: { sm: 6, md: 8, lg: 12, full: 9999 }
  shadow:
    micro: "rgba(16,24,40,0.04) 0px 1px 4px"
    subtle: "rgba(0,0,0,0.03) 0px 4px 24px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#7132f5", fg: "#ffffff", padding: "13px 16px", radius: "12px", font: "16px / 500", use: "Primary CTA, links" }
    button-outline: { type: button, bg: "#ffffff", fg: "#5741d8", border: "1px solid #5741d8", radius: "12px", use: "Outlined purple variant" }
    button-subtle: { type: button, bg: "rgba(133,91,251,0.16)", fg: "#7132f5", padding: "8px", radius: "12px", use: "Subtle/ghost purple button" }
    button-white: { type: button, bg: "#ffffff", fg: "#101114", radius: "10px", shadow: "rgba(0,0,0,0.03) 0px 4px 24px", use: "White button" }
    button-secondary: { type: button, bg: "rgba(148,151,169,0.08)", fg: "#101114", radius: "12px", use: "Secondary gray button" }
    badge-success: { type: badge, bg: "rgba(20,158,97,0.16)", fg: "#026b3f", radius: "6px", use: "Success/positive badge" }
    badge-neutral: { type: badge, bg: "rgba(104,107,130,0.12)", fg: "#484b5e", radius: "8px", use: "Neutral badge" }
    card: { type: card, bg: "#ffffff", border: "1px solid rgba(148,151,169,0.16)", radius: "12px", padding: "24px", shadow: "rgba(0,0,0,0.03) 0px 4px 24px", use: "Default card, subtle lift" }
    card-stat: { type: card, bg: "#ffffff", radius: "16px", padding: "20px 24px", use: "Stat/metric card, value 28px/700, delta green/red" }
    card-featured: { type: card, bg: "linear-gradient(135deg, #7132f5 0%, #5741d8 100%)", fg: "#ffffff", radius: "16px", padding: "32px", shadow: "inset 0 0 60px rgba(255,255,255,0.08)", use: "Featured/promotional card, used sparingly" }
---

# Design System Inspiration of Kraken

## 1. Visual Theme & Atmosphere

Kraken's website is a clean, trustworthy crypto exchange that uses purple as its commanding brand color. The design operates on white backgrounds with Kraken Purple (`#7132f5`, `#5741d8`, `#5b1ecf`) creating a distinctive, professional crypto identity. The proprietary Kraken-Brand font handles display headings with bold (700) weight and negative tracking, while Kraken-Product (with IBM Plex Sans fallback) serves as the UI workhorse.

**Key Characteristics:**
- Kraken Purple (`#7132f5`) as primary brand with darker variants (`#5741d8`, `#5b1ecf`)
- Kraken-Brand (display) + Kraken-Product (UI) dual font system
- Near-black (`#101114`) text with cool blue-gray neutral scale
- 12px radius buttons (rounded but not pill)
- Subtle shadows (`rgba(0,0,0,0.03) 0px 4px 24px`) — whisper-level
- Green accent (`#149e61`) for positive/success states

## 2. Color Palette & Roles

### Primary
- **Kraken Purple** (`#7132f5`): Primary CTA, brand accent, links
- **Purple Dark** (`#5741d8`): Button borders, outlined variants
- **Purple Deep** (`#5b1ecf`): Deepest purple
- **Purple Subtle** (`rgba(133,91,251,0.16)`): Purple at 16% — subtle button backgrounds
- **Near Black** (`#101114`): Primary text

### Neutral
- **Cool Gray** (`#686b82`): Primary neutral, borders at 24% opacity
- **Silver Blue** (`#9497a9`): Secondary text, muted elements
- **White** (`#ffffff`): Primary surface
- **Border Gray** (`#dedee5`): Divider borders

### Semantic
- **Green** (`#149e61`): Success/positive at 16% opacity for badges
- **Green Dark** (`#026b3f`): Badge text

## 3. Typography Rules

### Font Families
- **Display**: `Kraken-Brand`, fallbacks: `IBM Plex Sans, Helvetica, Arial`
- **UI / Body**: `Kraken-Product`, fallbacks: `Helvetica Neue, Helvetica, Arial`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Display Hero | Kraken-Brand | 48px | 700 | 1.17 | -1px |
| Section Heading | Kraken-Brand | 36px | 700 | 1.22 | -0.5px |
| Sub-heading | Kraken-Brand | 28px | 700 | 1.29 | -0.5px |
| Feature Title | Kraken-Product | 22px | 600 | 1.20 | normal |
| Body | Kraken-Product | 16px | 400 | 1.38 | normal |
| Body Medium | Kraken-Product | 16px | 500 | 1.38 | normal |
| Button | Kraken-Product | 16px | 500–600 | 1.38 | normal |
| Caption | Kraken-Product | 14px | 400–700 | 1.43–1.71 | normal |
| Small | Kraken-Product | 12px | 400–500 | 1.33 | normal |
| Micro | Kraken-Product | 7px | 500 | 1.00 | uppercase |

## 4. Component Stylings

### Buttons

**Primary Purple**
- Background: `#7132f5`
- Text: `#ffffff`
- Padding: 13px 16px
- Radius: 12px

**Purple Outlined**
- Background: `#ffffff`
- Text: `#5741d8`
- Border: `1px solid #5741d8`
- Radius: 12px

**Purple Subtle**
- Background: `rgba(133,91,251,0.16)`
- Text: `#7132f5`
- Padding: 8px
- Radius: 12px

**White Button**
- Background: `#ffffff`
- Text: `#101114`
- Radius: 10px
- Shadow: `rgba(0,0,0,0.03) 0px 4px 24px`

**Secondary Gray**
- Background: `rgba(148,151,169,0.08)`
- Text: `#101114`
- Radius: 12px

### Badges
- Success: `rgba(20,158,97,0.16)` bg, `#026b3f` text, 6px radius
- Neutral: `rgba(104,107,130,0.12)` bg, `#484b5e` text, 8px radius

### Cards

**Default Card**
- Background: `#ffffff`
- Border: `1px solid rgba(148,151,169,0.16)`
- Radius: `12px`
- Padding: `24px`
- Shadow: `rgba(0,0,0,0.03) 0px 4px 24px` (subtle lift)

**Stat / Metric Card**
- Background: `#ffffff`, radius `16px`, padding `20px 24px`
- Title: 12px weight 500 `#686b82` (muted)
- Value: 28px weight 700 `#101114`
- Delta: 12px weight 500 — `#149e61` for positive, `#d54848` for negative

**Featured / Promotional Card**
- Background: `linear-gradient(135deg, #7132f5 0%, #5741d8 100%)` (purple gradient)
- Text: `#ffffff`, radius `16px`, padding `32px`
- Subtle inner glow via `box-shadow: inset 0 0 60px rgba(255,255,255,0.08)`
- Use sparingly for premium/upgrade prompts

## 5. Layout Principles

### Spacing: 1px, 2px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 13px, 15px, 16px, 20px, 24px, 25px
### Border Radius: 3px, 6px, 8px, 10px, 12px, 16px, 9999px, 50%

## 6. Depth & Elevation
- Subtle: `rgba(0,0,0,0.03) 0px 4px 24px`
- Micro: `rgba(16,24,40,0.04) 0px 1px 4px`

## 7. Do's and Don'ts

### Do
- Use Kraken Purple (#7132f5) for CTAs and links
- Apply 12px radius on all buttons
- Use Kraken-Brand for headings, Kraken-Product for body

### Don't
- Don't use pill buttons — 12px is the max radius for buttons
- Don't use other purples outside the defined scale

## 8. Responsive Behavior
Breakpoints: 375px, 425px, 640px, 768px, 1024px, 1280px, 1536px

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand: Kraken Purple (`#7132f5`)
- Dark variant: `#5741d8`
- Text: Near Black (`#101114`)
- Secondary text: `#9497a9`
- Background: White (`#ffffff`)

### Example Component Prompts
- "Create hero: white background. Kraken-Brand 48px weight 700, letter-spacing -1px. Purple CTA (#7132f5, 12px radius, 13px 16px padding)."

## 10. Voice & Tone

Kraken's voice is **earned-trust crypto** — confident without bombast, technical without alienating, regulator-aware without legalese. Marketing copy emphasizes durability ("Own the Power of Your Money") and the company's track record (founded 2011, has weathered every crypto cycle including FTX collapse). The tone is closer to a brokerage than a casino — feature copy reads like a financial product page, not a meme.

| Context | Tone |
|---|---|
| CTA | Verb-first. "Sign up", "Try Kraken", "Sign in with Apple" |
| Marketing | Stability + history-emphasized. References to 2011 founding, regulatory milestones |
| Error (verification/security) | Specific + reassuring. "Two-factor authentication required for withdrawals" |
| Educational content | First-class — Kraken Learn academy is part of the brand |

**Voice samples**
- Tagline: *"Own the Power of Your Money — Crypto, Stocks & more"* <!-- verified: kraken.com homepage 2026-05 -->

**Forbidden phrases.** "Get rich quick", "moon", "to the moon". Casino metaphors. Hyperbolic ROI promises.

## 11. Brand Narrative

Kraken (legally **Payward, Inc.**) was founded **2011** in San Francisco by **Jesse Powell**, **Thanh Luu**, and **Michael Gronager** — making it one of the **longest-running crypto exchanges still operating** ([Kraken — Wikipedia](https://en.wikipedia.org/wiki/Kraken_(cryptocurrency_exchange)), [Contrary Research — Kraken](https://research.contrary.com/company/kraken)). Powell's path to Kraken: in **2001** he founded an internet gaming company helping players manage in-game currencies; **2010** dove into Bitcoin; **2011 consulted for Mt. Gox** to help recover from a hack — after observing that exchange's security failures, Powell decided to build a security-first alternative. The platform survived the **2014 Mt. Gox collapse** (Powell helped audit the failure), the 2017 ICO crash, 2018 bear market, and the **2022-2023 FTX/Celsius collapses**. This survival history is core to the brand voice — Kraken positions itself as the exchange that's "still here" when newer competitors fail. **Total funding $867M** from **RIT Capital Partners, SBI Group, Jane Street, DRW Venture Capital, HSG, Oppenheimer Alternative Investment Management, Tribe Capital, Citadel Securities** at **~$20B valuation** ([Tracxn — Kraken](https://tracxn.com/d/companies/kraken/__K8eQ_bnwtoEzrre_iQrRk_2-6sBivxjdpOCeXGVrx1w)). **U.S. IPO filing November 2025** (Payward, Inc.) — earlier 2022/2023 IPO plans were shelved due to regulatory scrutiny + market conditions ([Caproasia — Kraken IPO](https://www.caproasia.com/2025/11/21/cryptocurrency-exchange-kraken-files-for-united-states-ipo-after-raising-800-million-funding-at-20-billion-founded-in-2011-by-jesse-powell-thanh-luu-investors-include-jane-street-drw-venture-ca/), [Forge Global — Kraken upcoming IPO](https://forgeglobal.com/insights/kraken-upcoming-ipo-news/)). The **2024 expansion into stocks** ("Crypto, Stocks & more" tagline) reflects Kraken's strategy of broadening into a multi-asset retail brokerage, competing with Robinhood for retail trading flow.

## 12. Principles

1. **Track record is the proof.** *UI implication:* footer / About pages reference 2011 founding + survived-events list.
2. **Security before speed.** Two-factor auth, withdrawal whitelisting, hardware key support — first-class. *UI implication:* security settings have main-nav placement.
3. **Purple is the signal.** `#7132f5` for primary; never multi-color brand chrome. *UI implication:* charts may use semantic colors but UI stays purple-on-white.
4. **Education = product.** Kraken Learn academy treated as core feature. *UI implication:* "Learn" tab adjacent to "Trade" in main nav.
5. **Borderless purple buttons signal interactive.** *UI implication:* primary CTAs always purple `#7132f5` on white, light purple `rgba(133,91,251,0.16)` for ghost variants.

## 13. Personas

*Personas are fictional archetypes informed by Kraken user segments (long-term holders, professional traders, institutional clients), not individual people.*

**Daniel Schmidt, 47, Berlin.** Long-term BTC holder since 2014. Uses Kraken Pro for low-fee trading + cold storage withdrawal. Trusts Kraken's regulatory track record above newer EU exchanges.

**Aisha Khan, 32, Dubai.** Professional crypto trader. Kraken Pro full-time on derivatives. Cares about API uptime + order book depth.

**Marcus Davies, 58, London.** Recently retired professional. Cautious crypto exposure (5% portfolio). Kraken's "still here since 2011" positioning is the entire reason he chose them.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no holdings)** | "Make your first trade" CTA + asset list with prices |
| **Empty (no transactions)** | "Your transaction history will appear here." Plain |
| **Loading (price data)** | Last cached + stale indicator if older than 5s |
| **Loading (KYC)** | Persistent badge, allows nav while pending |
| **Error (insufficient balance)** | "Insufficient USD. Deposit funds or convert from another asset." |
| **Error (2FA)** | "Two-factor code required. Open your authenticator app." |
| **Success (trade)** | Receipt with asset / amount / fee / network confirmation tracker |
| **Success (deposit)** | Confirmation + when funds available + network tracker |
| **Skeleton (asset list)** | Light gray rows |
| **Disabled (insufficient funds)** | 0.5 opacity + "Deposit" inline link |
| **Loading (long action)** | Multi-step progress: Submitted → Confirming → Confirmed |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |
| `motion-pulse` | continuous | Live price update micro-flash |

Standard cubic-bezier; no bounce. **Live price flashes** green/red briefly on tick. `prefers-reduced-motion: reduce` disables price flash.

---

**Verified:** 2026-05-08 (omd:migrate run 31 — Apple-tier)
**Tier 1 sources:** kraken.com home + /prices (live DOM via playwright — Primary `#7132f5` Kraken Purple 12px tiered (header 36 / page 48-52) 8-15×12-16 / 14-16px·500; Light Purple ghost `rgba(133,91,251,0.16)` 12px; Light Secondary `#f5f5f5` 12px; **3-tier radius scale 12/10/8** = Action/Filter/Selector hierarchy).
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 2 (Philosophy/founders/IPO):** Wikipedia (Kraken), Contrary Research (3-founder origin), Tracxn ($867M @ $20B), Caproasia (Nov 2025 IPO filing), Forge Global, Kraken press (leadership succession), Fortune.
**Style ref:** `stripe`. **Conflicts unresolved:** none.
