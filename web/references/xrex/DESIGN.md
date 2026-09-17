---
id: xrex
name: XREX
country: TW
category: fintech
homepage: "https://xrex.io/"
primary_color: "#275cfd"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=xrex.io&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live Contact-sales electric blue (#275cfd); link/inline blue shifts to #2250f7 and lighter #4d88ff on dark. Ink near-black (#0d0e0f); off-white page canvas (#dbdbdc); dark circular icon chips (#2d2f2f); tinted blue surface (#ebf2ff); deep institutional navy (#081b68). Display = Sora, body/UI = Manrope. Glass cards on dark use translucent rgba(255,255,255,0.2)+blur (prose only)."
  colors:
    primary: "#275cfd"
    primary-hover: "#153fda"
    link: "#2250f7"
    link-light: "#4d88ff"
    link-mid: "#336aff"
    link-muted: "#4677d4"
    ink: "#0d0e0f"
    ink-pure: "#000000"
    canvas: "#ffffff"
    page: "#dbdbdc"
    surface: "#f8f8f8"
    surface-blue: "#ebf2ff"
    dark-chip: "#2d2f2f"
    navy: "#081b68"
    hairline: "#eeeeee"
    muted: "#696a6a"
    faint: "#b2b3b3"
    success: "#22c55e"
    on-primary: "#ffffff"
  typography:
    family: { display: "Sora", body: "Manrope", merchant: "merchant" }
    display-hero:  { size: 63, weight: 550, lineHeight: 1.30, use: "Hero/section headlines, Sora" }
    display-bold:  { size: 63, weight: 700, lineHeight: 1.30, use: "Closing CTA headline, Sora 700" }
    feature-xl:    { size: 45, weight: 700, lineHeight: 1.20, tracking: -0.45, use: "Animated word stack (Traceable/Safe/Intuitive), Sora" }
    section-sub:   { size: 39, weight: 700, lineHeight: 1.40, use: "Sub-section heads, Sora" }
    section-light: { size: 39, weight: 300, lineHeight: 1.20, tracking: -0.39, use: "Light editorial sub-head, Sora 300" }
    card-title:    { size: 28.5, weight: 600, lineHeight: 1.40, use: "Feature card titles, Sora SemiBold" }
    hero-lead:     { size: 24, weight: 300, lineHeight: 1.60, use: "Hero lead paragraph, Manrope Light" }
    body:          { size: 15, weight: 400, lineHeight: 1.50, use: "Standard reading / UI text, Manrope" }
    cta:           { size: 15.75, weight: 400, use: "Header CTA + nav link label, Manrope" }
    pill:          { size: 19.5, weight: 500, use: "Pill Contact-sales button label, Manrope Medium" }
  spacing: { xs: 4, sm: 8, md: 11, base: 15, lg: 25, xl: 34, xxl: 56, section: 81 }
  rounded: { sm: 13, md: 15, lg: 999, full: 9999 }
  shadow:
    glass: "rgba(0,0,0,0.1) 0px 0px 50px 0px"
    none: "none"
  components:
    button-primary: { type: button, bg: "#275cfd", fg: "#ffffff", radius: "15px", padding: "11.25px 15px", height: "49px", font: "15.75px / 400 Manrope", use: "Header Contact-sales CTA, hover #153fda" }
    button-pill: { type: button, bg: "#275cfd", fg: "#ffffff", radius: "999px", padding: "7.5px 33.75px", height: "41px", font: "19.5px / 500 Manrope", use: "In-page Contact-sales pill CTA" }
    button-glass: { type: button, fg: "#0d0e0f", radius: "15px", padding: "11.25px 15px", height: "49px", font: "15.75px / 400 Manrope", use: "Log in — translucent rgba(255,255,255,0.35) glass on hero" }
    icon-circle: { type: button, bg: "#2d2f2f", fg: "#ffffff", radius: "9999px", height: "38px", use: "Round social/scroll icon chip, dark" }
    nav-pill: { type: badge, bg: "#2d2f2f", fg: "#ffffff", radius: "9999px", font: "15.75px / 400 Sora", use: "Mega-menu category pill (Pay / RegTech / Resources)" }
    card-glass: { type: card, fg: "#ffffff", radius: "12.75px", padding: "25.5px", shadow: "rgba(0,0,0,0.1) 0px 0px 50px 0px", use: "Glass feature card on dark — translucent rgba(255,255,255,0.2) + blur" }
    card-feature: { type: card, bg: "#ffffff", fg: "#0d0e0f", radius: "15px", use: "White feature card on #dbdbdc page" }
    surface-tint: { type: card, bg: "#ebf2ff", fg: "#0d0e0f", radius: "15px", use: "Tinted blue info surface / highlight block" }
    nav-link: { type: tab, fg: "#0d0e0f", font: "15.75px / 400 Manrope", active: "blue #2250f7 text", use: "Mega-menu sub-item link, chevron-right affordance" }
    badge-success: { type: badge, fg: "#22c55e", radius: "9999px", font: "15px / 400 Manrope", use: "Positive status / save-percentage indicator" }
  components_harvested: true
---

# Design System Inspiration of XREX

## 1. Visual Theme & Atmosphere

XREX (台灣 XREX) is a Taiwan-born, regulated blockchain-driven financial institution, and its site carries itself with the calm authority of an institution that wants to be trusted with money. The atmosphere is engineered and trust-forward rather than crypto-flashy: an off-white page canvas (`#dbdbdc`) holds large, confident Sora headlines in near-black ink (`#0d0e0f`), and a single saturated electric blue (`#275cfd`) is reserved almost exclusively for the "Contact sales" call-to-action — training the eye to read that one blue as "the action." This is deliberately the opposite of the neon-and-gradient maximalism that dominates exchange marketing; XREX reads as a compliance-minded bank that happens to run on blockchain.

The typographic system is a clean two-font split. **Sora** owns display — every hero and section headline runs at 63px / weight 550 (a custom mid-weight between regular and bold) with a tight 1.30 line height, projecting steady, geometric confidence ("Redefine banking together", "Grow your business"). **Manrope** owns body and UI — a humanist sans at a quiet 15px / weight 400 that keeps dense fintech copy legible, with a light 24px / weight 300 lead paragraph giving the hero an airy, premium calm. The animated feature stack on the Pay product page (Traceable / Safe / Intuitive at 45px / 700 with -0.45px tracking) is the one place the type turns assertive.

Depth is handled two ways depending on the section's value. On dark immersive bands, XREX leans into a **glass aesthetic** — translucent `rgba(255,255,255,0.2)` cards with a soft `rgba(0,0,0,0.1) 0px 0px 50px` ambient bloom and backdrop blur — that feels modern and high-trust. On light sections, separation is flat: white (`#ffffff`) feature cards and tinted blue (`#ebf2ff`) info surfaces sit on the off-white page with almost no shadow. Geometry is split too: header action buttons use a soft 15px radius, while in-page CTAs and category pills go fully round (999px), and small dark icon chips (`#2d2f2f`) are perfect circles. The net impression is a data-dense, regulation-forward exchange UI that stays approachable — "the best crypto UX from Taiwan."

**Key Characteristics:**
- Sora for all display headlines at weight 550 (a distinctive custom mid-weight), 700 for closing CTAs
- Manrope for body/UI at 15px weight 400, with a Light (300) 24px hero lead
- Single saturated electric blue (`#275cfd`) reserved for the primary "Contact sales" CTA
- Near-black ink (`#0d0e0f`) for text instead of pure black on most surfaces
- Off-white page canvas (`#dbdbdc`) rather than stark white — softer, institutional
- Glass cards on dark bands: translucent `rgba(255,255,255,0.2)` + `0 0 50px` ambient bloom + blur
- Tinted blue surfaces (`#ebf2ff`) and deep navy (`#081b68`) for brand/compliance moments
- Mixed geometry — 15px soft radius on header buttons, full 999px pills in-page, circular dark icon chips

## 2. Color Palette & Roles

### Primary
- **XREX Blue** (`#275cfd`): Primary brand color and CTA background. The saturated electric blue on the "Contact sales" buttons — the system's single "action" color.
- **Blue Hover/Deep** (`#153fda`): Darker blue for the pressed/hover state of the primary CTA and deeper interactive blue accents.
- **Ink** (`#0d0e0f`): Primary text and heading color on light surfaces — a near-black that reads warmer and more premium than pure black.

### Interactive Blues
- **Link Blue** (`#2250f7`): Inline link and active-nav text color, a touch more violet than the CTA blue.
- **Link Light** (`#4d88ff`): Lighter blue for links and emphasis on dark backgrounds.
- **Link Mid** (`#336aff`): Mid blue used on dark imagery for secondary links.
- **Link Muted** (`#4677d4`): Desaturated blue for lower-emphasis links and hovered states on dark.

### Neutral & Surface
- **Pure White** (`#ffffff`): White feature cards, text on blue/dark surfaces.
- **Page Canvas** (`#dbdbdc`): The off-white body background — softer than stark white, the institutional base tone.
- **Surface** (`#f8f8f8`): Light secondary surface for alternating blocks.
- **Surface Blue** (`#ebf2ff`): Tinted blue info/highlight surface for callouts and stat blocks.
- **Dark Chip** (`#2d2f2f`): Near-black background for circular social/scroll icon chips and dark category pills.
- **Hairline** (`#eeeeee`): Thin dividers and faint surface fills.
- **Pure Black** (`#000000`): Maximum-contrast text on some hero/dark surfaces.

### Brand & Status
- **Deep Navy** (`#081b68`): Institutional deep blue for brand/compliance moments and dark immersive bands.
- **Muted Slate** (`#696a6a`): Secondary text, captions, metadata.
- **Faint Gray** (`#b2b3b3`): Tertiary/disabled text, lowest-emphasis labels.
- **Success Green** (`#22c55e`): Positive status, save-percentage and confirmation indicators.

## 3. Typography Rules

### Font Family
- **Display**: `Sora` (with `Sora Fallback`) — all headlines, section heads, and category pills. Mid-weight 550 is the signature display weight; 700 for closing CTAs; 300 for light editorial sub-heads.
- **Body**: `Manrope` (with `Manrope Fallback`) — the document default, used for body copy, hero lead, nav links, and CTA labels.
- **Merchant**: `merchant` — a display face used sparingly for specific brand wordmarks (e.g. the "Fiat" badge at 39px / 600 on the Pay page).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Sora | 63px (3.94rem) | 550 | 1.30 (81.9px) | normal | Hero/section headlines, custom mid-weight |
| Display Bold | Sora | 63px (3.94rem) | 700 | 1.30 (81.9px) | normal | Closing CTA headline |
| Feature XL | Sora | 45px (2.81rem) | 700 | 1.20 | -0.45px | Animated word stack (Traceable/Safe/Intuitive) |
| Sub-section | Sora | 39px (2.44rem) | 700 | 1.40 (54.6px) | normal | Sub-section heads |
| Sub-section Light | Sora | 39px (2.44rem) | 300 | 1.20 | -0.39px | Light editorial sub-head |
| Card Title | Sora | 28.5px (1.78rem) | 600 | 1.40 (39.9px) | normal | Feature card titles |
| Hero Lead | Manrope | 24px (1.50rem) | 300 | 1.60 (38.4px) | normal | Hero lead paragraph |
| CTA / Nav | Manrope | 15.75px (0.98rem) | 400 | normal | normal | Header CTA + nav link labels |
| Pill CTA | Manrope | 19.5px (1.22rem) | 500 | normal | normal | In-page Contact-sales pill |
| Body | Manrope | 15px (0.94rem) | 400 | 1.50 | normal | Standard reading / UI text |

### Principles
- **Sora persuades, Manrope informs**: Sora carries every headline and the mid-weight 550 is the brand's distinctive typographic fingerprint; Manrope carries every paragraph and UI label. They never swap roles.
- **Mid-weight as signature**: Weight 550 (not 500 or 600) at display sizes is XREX's most distinctive choice — a deliberately calibrated middle that reads confident without shouting.
- **Light lead for calm**: The 24px / weight 300 hero lead paragraph keeps the entry to each section airy and premium, countering the data density below.
- **Tight tracking only at large display**: Negative tracking appears at the big animated stack (-0.45px at 45px) and the light sub-head (-0.39px at 39px); body and standard headings track normal.

## 4. Component Stylings

### Buttons

**Contact Sales (Primary)**
- Background: `#275cfd`
- Text: `#ffffff`
- Radius: 15px
- Padding: 11.25px 15px
- Font: 15.75px Manrope weight 400
- Height: 49px
- Hover: `#153fda`
- Use: Header primary CTA — the system's single primary action

**Contact Sales (Pill)**
- Background: `#275cfd`
- Text: `#ffffff`
- Radius: 999px
- Padding: 7.5px 33.75px
- Font: 19.5px Manrope weight 500
- Height: 41px
- Use: In-page Contact-sales pill CTA (repeated through product sections)

**Log in (Glass)**
- Text: `#0d0e0f`
- Radius: 15px
- Padding: 11.25px 15px
- Font: 15.75px Manrope weight 400
- Height: 49px
- Use: Secondary header action — translucent `rgba(255,255,255,0.35)` glass fill on the hero

**Discover Link**
- Text: `#0d0e0f`
- Radius: 15px
- Padding: 11.25px 15px 11.25px 11.25px
- Font: 15.75px Manrope weight 400
- Height: 56px
- Use: Mega-menu product links ("Discover XREX Pay", "XRAY OnChain Analysis") with chevron-right affordance

**Icon Circle**
- Background: `#2d2f2f`
- Text: `#ffffff`
- Radius: 9999px (perfect circle)
- Height: 38px
- Use: Round social/scroll icon chips on dark sections

### Inputs & Forms
- Background: `#ffffff`
- Text: `#0d0e0f`
- Radius: 15px
- Placeholder: `#696a6a`
- Focus: `#275cfd` accent
- Use: Form fields follow the 15px header-button radius and ink-on-white text convention (contact/login surfaces)

### Cards & Containers

**Glass Card (dark band)**
- Text: `#ffffff`
- Radius: 12.75px
- Padding: 25.5px
- Shadow: `rgba(0,0,0,0.1) 0px 0px 50px 0px`
- Use: Glass feature card on dark sections — translucent `rgba(255,255,255,0.2)` fill + backdrop blur

**White Feature Card**
- Background: `#ffffff`
- Text: `#0d0e0f`
- Radius: 15px
- Use: White feature card on the `#dbdbdc` page canvas

**Tinted Blue Surface**
- Background: `#ebf2ff`
- Text: `#0d0e0f`
- Radius: 15px
- Use: Tinted blue info/highlight surface for callouts and stat blocks

### Badges & Pills

**Category Pill**
- Background: `#2d2f2f`
- Text: `#ffffff`
- Radius: 9999px (full)
- Font: 15.75px Sora weight 400
- Use: Mega-menu category pill (Pay / RegTech / Resources / Company)

**Success Indicator**
- Text: `#22c55e`
- Radius: 9999px
- Font: 15px Manrope weight 400
- Use: Positive status / save-percentage indicator

### Navigation
- Background: `#ffffff`
- Text: `#0d0e0f`
- Font: 15.75px Manrope weight 400
- Active: blue `#2250f7` text
- Use: Top horizontal nav with mega-menu (Pay / RegTech / Resources / Company); links carry a chevron-right affordance

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://xrex.io/ (homepage — nav, hero, CTAs, glass cards, color frequency scan); https://xrex.io/xrex-pay (XREX Pay product page — feature cards, animated stack, pill CTAs); https://xrex.io/about (brand narrative — founding, leadership, mission/vision, licenses)
**Tier 2 sources:** getdesign.md/xrex — NOT FOUND ("No designs found for 'xrex'"); styles.refero.design/?q=xrex — no XREX entry (search returns unrelated brands, e.g. Recess)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px, with sub-pixel values from a rem×0.75 root scale (the measured 11.25px / 15.75px / 25.5px / 33.75px cluster)
- Scale: 4px, 8px, 11px, 15px, 25px, 34px, 56px, 81px
- Notable: Section headlines run on an 81.9px line-height rhythm; the in-page pill CTA uses a generous 33.75px horizontal padding for an unmistakable target

### Grid & Container
- Centered single-column hero with the 63px Sora headline as the anchor, light 24px Manrope lead beneath
- Product feature sections alternate between the off-white page (`#dbdbdc`), white cards (`#ffffff`), and immersive dark bands carrying glass cards
- Glass cards group related product capabilities at ~315px width on the Pay page
- Tinted blue (`#ebf2ff`) blocks carry stat callouts (Founded 2018 / 7y / 100+ team)

### Whitespace Philosophy
- **Calm density**: a data-heavy fintech that keeps the marketing surface airy — generous vertical rhythm between sections with the light hero lead carrying the breathing room.
- **Light-flat / dark-glass duality**: light sections separate by background tint and hairlines with almost no shadow; dark sections use translucent glass and ambient bloom for depth.
- **One blue, one action**: the saturated `#275cfd` appears only on the CTA, so the next step is never ambiguous across long product pages.

### Border Radius Scale
- Small (12.75px): glass cards
- Standard (15px): header buttons, white feature cards, tinted surfaces — the workhorse
- Full (999px): in-page pill CTAs and category pills
- Circle (9999px / 50%): dark icon chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, white feature cards, tinted blue surfaces |
| Hairline (Level 1) | `1px` / `#eeeeee` divider | Section and list separation on light surfaces |
| Glass (Level 2) | translucent `rgba(255,255,255,0.2)` + backdrop blur + `rgba(0,0,0,0.1) 0px 0px 50px 0px` bloom | Feature cards on dark immersive bands |

**Shadow Philosophy**: XREX uses elevation selectively and contextually. On light sections it is essentially flat — white feature cards and tinted blue (`#ebf2ff`) surfaces sit on the off-white page (`#dbdbdc`) separated by color and `#eeeeee` hairlines, not drop shadows. The one expressive depth treatment is the glass card on dark bands: a translucent white fill over imagery with a soft, wide `rgba(0,0,0,0.1) 0px 0px 50px` ambient bloom and backdrop blur. This dual approach keeps compliance-and-data sections clean and scannable while letting the brand/product moments feel modern and premium — depth as a reward, not a default.

## 7. Do's and Don'ts

### Do
- Use Sora at weight 550 for display headlines — the custom mid-weight is the brand's typographic signature
- Use Manrope weight 400 at 15px for body and UI text, and weight 300 at 24px for the hero lead
- Reserve electric blue (`#275cfd`) for the primary "Contact sales" CTA — keep it the single action color
- Use near-black ink (`#0d0e0f`) for text on light surfaces instead of pure black
- Sit content on the off-white page canvas (`#dbdbdc`), not stark white — it reads more institutional
- Use glass cards (translucent `rgba(255,255,255,0.2)` + blur) only on dark immersive bands
- Mix geometry purposefully — 15px radius on header buttons, full 999px pills in-page, circular `#2d2f2f` icon chips
- Use tinted blue (`#ebf2ff`) surfaces for stat callouts and highlight blocks

### Don't
- Spread the blue across many elements — it dilutes the single-action signal
- Use neon gradients or crypto-flashy color — XREX is regulation-forward and calm
- Use drop shadows on light feature cards — light sections are flat
- Set headlines in Manrope — Sora owns display
- Use pure black (`#000000`) as the default text color on light surfaces — reserve near-black ink `#0d0e0f`
- Use weight 400 or 600 for hero headlines — the signature is the calibrated 550 mid-weight
- Put glass/blur treatments on light sections — glass is reserved for dark bands
- Make the primary CTA a soft-radius and a pill on the same surface — pick the geometry per context

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, glass cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column product bands |

### Touch Targets
- Header CTA at 49px height; in-page pill CTA at 41px with 33.75px horizontal padding — comfortably tappable
- Mega-menu product links at 56px height with chevron affordance
- Circular icon chips at 38px

### Collapsing Strategy
- Hero: 63px Sora headline scales down on mobile, weight 550 maintained
- Mega-menu: category pills + chevron links collapse into an accordion/drawer
- Glass card rows: multi-column → stacked single column, blur and bloom retained
- Light/dark alternating bands maintain full-width treatment

### Image Behavior
- Glass cards over product imagery retain translucency and blur at all sizes
- White feature cards keep the 15px radius across breakpoints
- Animated word stack (Traceable/Safe/Intuitive) reduces to a static stack on reduced-motion

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: XREX Blue (`#275cfd`)
- CTA hover: Deep Blue (`#153fda`)
- Inline link: Link Blue (`#2250f7`), light variant `#4d88ff`
- Page background: Off-white (`#dbdbdc`)
- Card background: Pure White (`#ffffff`)
- Tinted surface: Surface Blue (`#ebf2ff`)
- Heading / body text: Ink (`#0d0e0f`)
- Muted text: Muted Slate (`#696a6a`)
- Faint / disabled: Faint Gray (`#b2b3b3`)
- Dark icon chip: `#2d2f2f`
- Brand navy: `#081b68`
- Success: Green (`#22c55e`)

### Example Component Prompts
- "Create a hero on an off-white #dbdbdc canvas. Headline 63px Sora weight 550, line-height 1.30, color #0d0e0f — 'Redefine banking together'. Lead paragraph 24px Manrope weight 300, line-height 1.60. Primary CTA: #275cfd background, white text, 15px radius, 11.25px 15px padding, 15.75px Manrope — 'Contact sales'. Secondary 'Log in' as translucent rgba(255,255,255,0.35) glass, #0d0e0f text, 15px radius."
- "Design a glass feature card on a dark band: translucent rgba(255,255,255,0.2) fill with backdrop blur, 12.75px radius, 25.5px padding, ambient shadow rgba(0,0,0,0.1) 0px 0px 50px. Title 28.5px Sora weight 600, white text."
- "Build a white feature card on #dbdbdc: #ffffff background, 15px radius, no shadow. Title 28.5px Sora weight 600, #0d0e0f. Body 15px Manrope weight 400, #696a6a."
- "Create top nav: white header, Manrope 15.75px weight 400 links, #0d0e0f text, blue #2250f7 on active. Mega-menu category pills use #2d2f2f background, white text, full 9999px radius. Blue 'Contact sales' CTA right-aligned, 15px radius."

### Iteration Guide
1. Sora weight 550 for every headline; Manrope 400 for body, 300 for the hero lead
2. Blue (`#275cfd`) is the single action color — don't spread it
3. Light sections are flat; reserve glass + blur for dark bands only
4. Off-white `#dbdbdc` page, white `#ffffff` cards, tinted blue `#ebf2ff` callouts
5. Text is near-black ink `#0d0e0f`, never pure black on light surfaces
6. Header buttons 15px radius, in-page CTAs full 999px pills, icon chips circular `#2d2f2f`
7. Deep navy `#081b68` for brand/compliance immersive moments

---

## 10. Voice & Tone

XREX's voice is **trustworthy, plain, and mission-driven** — a regulated institution speaking about money without hype. The recurring lines "Redefine banking together" and "Inclusive Finance. For all and for good" set the register: ambitious in scope, civic in framing, zero crypto-bro slang. Copy foregrounds compliance and security as features ("Compliance and security are at the heart of XREX"), names its licenses plainly (US FinCEN, Singapore MAS, Taiwan FSC), and treats the reader as a serious counterparty — a bank, a government, a cross-border merchant — not a retail gambler.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, mission-framed. "Redefine banking together." Confident, not hype. |
| Product descriptions | Benefit-first, concrete. "Pay easier, faster, safer." "Access global USD liquidity." |
| CTAs | Direct and institutional. "Contact sales", "Log in", "Discover XREX Pay". |
| Compliance / trust copy | Plain and specific. Names regulators and license types verbatim. |
| Careers | Warm but disciplined. "Be hungry, be humble." |

**Voice samples (verbatim from live site):**
- "Redefining Banking Together Through Blockchain" — site/page title (mission-framed). *(verified live 2026-06-17, xrex.io/about title)*
- "Inclusive Finance. For all and for good" — section headline (civic mission). *(verified live 2026-06-17, homepage)*
- "Compliance and security are embedded at the core of XREX's DNA." — about page (trust-forward positioning). *(verified live 2026-06-17, xrex.io/about)*

**Forbidden register**: get-rich crypto hype, "to the moon" / "wagmi" slang, fear-based urgency, undefined jargon left unexplained, exclamation-heavy marketing. XREX speaks like a licensed financial institution, because it is one.

## 11. Brand Narrative

XREX Group was **founded in 2018** and describes itself as a **"Blockchain-Powered Financial Institution"** — "a team of world-leading professionals spanning cybersecurity, blockchain, banking, cross-border trade, and payments" ([xrex.io/about](https://xrex.io/about), verified live 2026-06-17). It was co-founded by **Dr. Wayne Huang (Co-founder & CEO)**, a US-born, internationally recognized cybersecurity expert, and **Winston Hsiao (Co-founder & CRO)**, an economist and serial entrepreneur who founded **Taiwan's first Bitcoin exchange, BTCEx-TW, in 2013** ([xrex.io/about](https://xrex.io/about)). The company's stated origin problem is concrete: helping cross-border merchants in emerging markets overcome **USD liquidity shortages** using blockchain-based solutions.

XREX's stated **vision** is "Fostering financial inclusivity and building trust through blockchain technology. Redefine Banking Together," and its **mission** is to "Develop innovative blockchain-based solutions that bridge the financial gap for individuals and businesses alike" ([xrex.io/about](https://xrex.io/about)). The positioning is explicitly regulation-first: the about page foregrounds the group's **licenses and registrations — US FinCEN Money Service Business, Singapore MAS Major Payment Institution Licence, and Taiwan FSC VASP AML Registration** — and states that it is "Backed by Governments, Banks, Public Companies, Global Venture Capital Firms."

What XREX refuses, visible in its design: the neon-gradient, hype-driven aesthetic of speculative crypto, and the opacity of unregulated exchanges. What it embraces: a calm institutional palette anchored by a single trustworthy blue, compliance surfaced as a headline feature, world-class typography (Sora display over Manrope body), and the self-description "the best crypto UX from Taiwan" — a claim that the product, not the marketing, should carry the trust.

## 12. Principles

1. **Compliance is a feature, not a footnote.** XREX states compliance and security are "embedded at the core of XREX's DNA" and leads with its license stack. *UI implication:* surface regulatory trust signals (licenses, registrations) as first-class content, not fine print.
2. **One blue, one action.** The saturated `#275cfd` means "do this." *UI implication:* reserve the electric blue exclusively for the primary CTA so the next step is unambiguous across long product pages.
3. **Calm over flashy.** A regulated institution should not look like a casino. *UI implication:* off-white canvas, near-black ink, no neon gradients; let typography and spacing carry confidence.
4. **Inclusion, plainly stated.** "For all and for good" is a civic claim. *UI implication:* keep copy jargon-light and benefit-first; decode finance for cross-border merchants, not just crypto natives.
5. **Depth as a reward.** *UI implication:* keep informational sections flat and scannable; reserve glass + blur for brand and product moments on dark bands.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable XREX user segments (cross-border merchants in emerging markets, compliance teams, crypto-fiat traders, institutional partners), not individual people.*

**Arif Rahman, 38, Jakarta.** Runs a cross-border electronics import business and constantly fights USD liquidity shortages. Chose XREX because it lets him switch between fiat and stablecoins under a regulated wrapper, and because the license list (MAS, FinCEN) made his bank comfortable. Distrusts unregulated exchanges after a prior freeze.

**Mei-Ling Chen, 44, Taipei.** Compliance officer at a regional bank evaluating blockchain payment rails. Reads the about page for the FSC VASP registration number before anything else. Values that XREX frames itself as an institution, not a startup, and that anti-fraud (RegTech / XRAY) is a named product, not an afterthought.

**Daniel Okoro, 31, Lagos.** Fintech founder building an embedded-payments product. Uses XREX Pay for traceable, fast settlement and reads the engineering/blog content for integration detail. Reads "Inclusive Finance. For all and for good" as earnest rather than slogan — it matches the emerging-markets focus he experiences daily.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no transactions / no results)** | Off-white `#dbdbdc` canvas. Single Ink (`#0d0e0f`) line at body size explaining no activity yet, with one blue `#275cfd` CTA. No crypto-mascot illustration — calm and honest. |
| **Empty (saved/list, none yet)** | Muted Slate (`#696a6a`) single line stating nothing saved yet, plus a path back to the action. |
| **Loading (data fetch)** | Skeleton blocks at final dimensions on white cards / `#ebf2ff` surfaces, 15px radius. Flat pulse on light sections; glass cards keep their blur while loading. |
| **Loading (in-place refresh)** | Subtle blue `#275cfd` progress affordance; previous values stay visible. |
| **Error (request failed)** | Inline message in Ink with a plain-language explanation and a retry — names what went wrong and what to do next. No generic "Something went wrong" alone. |
| **Error (form validation)** | Field-level message below the input; describes what is valid, not just "Required". 15px radius field with blue focus retained. |
| **Success (action complete)** | Brief inline confirmation; Success Green (`#22c55e`) indicator with next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | Neutral blocks at final dimensions, 15px radius, flat pulse on light; glass shimmer on dark bands. |
| **Disabled** | Faint Gray (`#b2b3b3`) text on reduced-opacity surface; blue actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Card/section reveal, mega-menu open, glass card entrance |
| `motion-slow` | 360ms | Page-level transitions, hero reveal, animated word stack |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, mega-menu, glass panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is composed and institutional — consistent with the calm, regulation-forward brand. The signature motion is the animated word stack on the Pay page (Traceable / Safe / Intuitive), which cross-fades emphasis between words at `motion-slow / ease-standard`; the de-emphasized words drop to `rgba(255,255,255,0.6)`. Glass cards enter with a soft blur-in at `motion-standard / ease-enter`. No bounce or spring — a regulated financial institution signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, the animated stack becomes a static list and all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle on three brand-owned surfaces:
- https://xrex.io/ — homepage: Sora 63px/550 hero headlines, Manrope 15px body, primary CTA
  bg rgb(39,92,253) #275cfd radius 15px, link blues rgb(34,80,247)/rgb(77,136,255), ink
  rgb(13,14,15) #0d0e0f, off-white body bg rgb(219,219,220) #dbdbdc, tinted rgb(235,242,255)
  #ebf2ff, dark chip rgb(45,47,47) #2d2f2f, deep navy rgb(8,27,104) #081b68, success
  rgb(34,197,94) #22c55e.
- https://xrex.io/xrex-pay — XREX Pay product page: glass cards rgba(255,255,255,0.2) +
  rgba(0,0,0,0.1) 0px 0px 50px shadow, 12.75px radius; animated stack Traceable/Safe/Intuitive
  Sora 45px/700 -0.45px; pill CTA #275cfd 999px 7.5px 33.75px padding.
- https://xrex.io/about — brand narrative: "Founded in 2018", "Blockchain-Powered Financial
  Institution", Co-founder & CEO Dr. Wayne Huang, Co-founder & CRO Winston Hsiao (founded
  Taiwan's first Bitcoin exchange BTCEx-TW in 2013), Vision/Mission verbatim, licenses
  US FinCEN MSB / Singapore MAS Major Payment Institution / Taiwan FSC VASP AML.

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live site (page title, homepage section headline,
about page positioning sentence).

Brand narrative (§11): founding year (2018), co-founder names/roles (Dr. Wayne Huang CEO,
Winston Hsiao CRO), vision/mission text, and license stack are quoted from the live
xrex.io/about page (verified this turn). BTCEx-TW (2013) detail is stated on that page.

Personas (§13) are fictional archetypes informed by publicly observable XREX user segments
(cross-border merchants in emerging markets, compliance teams, crypto-fiat traders). Names
are illustrative; they do not refer to real people.

Interpretive claims (e.g., "compliance is a feature, not a footnote", "calm over flashy as a
rejection of speculative-crypto aesthetics") are editorial readings connecting XREX's observed
design and stated positioning, not directly sourced XREX statements.
-->
