---
id: zepeto
name: ZEPETO
display_name_kr: 제페토
country: KR
category: consumer-tech
homepage: "https://web.zepeto.me/"
primary_color: "#5c46ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=zepeto.me&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = signature ZEPETO violet (#5c46ff) — the brand/CTA hue on studio.zepeto.me (pill buttons) and the link/accent color on web.zepeto.me. Magenta (#f323ff) is a decorative accent swatch. Dark near-black (#292930) drives the web login button + heading text; near-black body text (#000008); grey surfaces (#f5f5f6 / #f8f8fa)."
  colors:
    primary: "#5c46ff"
    accent-magenta: "#f323ff"
    ink: "#292930"
    ink-pure: "#000008"
    black: "#000000"
    body: "#5c5c61"
    muted: "#75757a"
    muted-alt: "#47474d"
    faint: "#c7c7c9"
    canvas: "#ffffff"
    surface: "#f5f5f6"
    surface-alt: "#f8f8fa"
    hairline: "#e0e0e1"
    on-primary: "#ffffff"
  typography:
    family: { sans: "ui-sans-serif", body: "-apple-system" }
    display-hero:  { size: 64, weight: 800, lineHeight: 1.09, use: "Studio hero headline, ExtraBold" }
    display:       { size: 48, weight: 700, lineHeight: 1.25, use: "Web carousel hero / studio section titles" }
    section:       { size: 28, weight: 700, lineHeight: 1.29, use: "Section / banner headings" }
    feature-title: { size: 24, weight: 700, lineHeight: 1.33, use: "Feature card / studio pillar titles" }
    subtitle:      { size: 22, weight: 700, lineHeight: 1.36, use: "Step / FAQ sub-headings" }
    lead:          { size: 20, weight: 500, lineHeight: 1.40, use: "Hero supporting copy, emphasized list title" }
    nav:           { size: 17, weight: 500, lineHeight: 1.40, use: "Studio top-nav item" }
    button:        { size: 15, weight: 500, lineHeight: 1.40, use: "Header login / studio button label" }
    body:          { size: 16, weight: 400, lineHeight: 1.15, use: "Standard reading text" }
  spacing: { xs: 4, sm: 8, md: 10, base: 16, lg: 24, xl: 34, xxl: 48, section: 64 }
  rounded: { sm: 8, md: 24, lg: 34, pill: 9999 }
  shadow:
    soft: "rgba(0,0,0,0.2) 0px 0px 20px 0px"
    none: "none"
  components:
    button-primary: { type: button, bg: "#5c46ff", fg: "#ffffff", radius: "28px", padding: "0 34px", height: "56px", font: "20px / 500", use: "Studio primary CTA — Get Started / Learn more, pill" }
    button-login: { type: button, bg: "#292930", fg: "#ffffff", radius: "8px", padding: "10px 16px", height: "40px", font: "15px / 500", use: "Web header Login button — dark near-black" }
    button-secondary: { type: button, bg: "#f5f5f6", fg: "#292930", radius: "8px", padding: "10px 16px", height: "40px", font: "16px / 400", use: "Web header Buy ZEMs / soft grey utility button" }
    button-invert: { type: button, bg: "#ffffff", fg: "#5c46ff", radius: "34px", padding: "0 34px", height: "68px", font: "22px / 700", shadow: "rgba(0,0,0,0.2) 0px 0px 20px 0px", use: "Studio hero Get Started on violet band — white pill, violet label" }
    nav-link: { type: tab, fg: "#5c5c61", active: "text #292930", use: "Studio top-nav item (Contents / Guides / Support)" }
    card-feature: { type: card, bg: "#f8f8fa", fg: "#292930", radius: "24px", use: "Studio pillar card (Items / World / Live) on lighter grey surface" }
    badge-accent: { type: badge, bg: "#5c46ff", fg: "#ffffff", radius: "9999px", font: "15px / 500", use: "Violet emphasis pill / tag" }
    avatar-circle: { type: avatar, radius: "9999px", use: "Circular carousel control / creator avatar" }
  components_harvested: true
---

# Design System Inspiration of ZEPETO

## 1. Visual Theme & Atmosphere

ZEPETO (제페토) is the 3D-avatar metaverse social platform built by Naver Z — a place where hundreds of millions of users style avatars, build virtual worlds, watch live shows, and trade creator-made items. Its surfaces split into two registers that share one DNA: a clean, almost utilitarian web product (`web.zepeto.me`) wrapped around a vivid, youthful brand world, and a polished marketing-grade creator studio (`studio.zepeto.me`) that leans all the way into the brand color. The connective tissue is a single saturated electric violet (`#5c46ff`) that functions as the brand anchor — the primary CTA fill on Studio and the link/accent hue on the web app — paired with a playful magenta accent (`#f323ff`) reserved for decorative swatches and gradients.

The web product surface is intentionally quiet: a near-white canvas (`#ffffff`) with soft cool-grey surfaces (`#f5f5f6`, `#f8f8fa`), body text in a near-black (`#000008`) and muted grey (`#75757a`), and a dark near-black (`#292930`) login button. This is the "tool" mode — readable, dense, content-forward, letting the avatars, worlds, and item thumbnails carry the color. The Studio surface is the "brand" mode: full-bleed violet (`#5c46ff`) hero bands with 64px ExtraBold white headlines, large pill buttons, and a confident editorial cadence ("All you've imagined, At ZEPETO Studio.", "ZEPETO is for the Creators.").

Geometry tells the two-register story precisely. The web product uses tight 8px-radius utility buttons (Login, Buy ZEMs) — efficient, app-like. The Studio reaches for the pill: 24px, 28px, and 34px radius CTAs ("Get Started", "Learn more") and fully circular controls. Depth is mostly flat — `box-shadow: none` dominates both surfaces — with one signature exception: the white "Get Started" pill on the violet hero band lifts on a soft glow shadow (`rgba(0,0,0,0.2) 0px 0px 20px 0px`). The type stack is a system UI sans (`ui-sans-serif` / `-apple-system`) run heavy: 700–800 weight for every headline, 400–500 for body and UI.

**Key Characteristics:**
- Signature electric violet (`#5c46ff`) — brand anchor: Studio CTA fill, web link/accent
- Playful magenta (`#f323ff`) accent for decorative swatches and gradients
- Two registers: quiet grey web product vs. full-violet marketing studio, one shared palette
- Heavy headline weight — 800 ExtraBold at 64px, 700 Bold at 48px — youthful, declarative
- System UI sans (`ui-sans-serif` / `-apple-system`) for everything; no custom display font
- Dark near-black (`#292930`) for the web login button and heading text — not pure black
- Two-radius story: 8px tight utility buttons on web, 24–34px pills on Studio
- Mostly flat (`box-shadow: none`); one soft glow (`rgba(0,0,0,0.2) 0px 0px 20px`) on the hero pill
- Cool-grey neutral ladder (`#5c5c61` → `#75757a` → `#c7c7c9`) for text/UI hierarchy

## 2. Color Palette & Roles

### Primary
- **ZEPETO Violet** (`#5c46ff`): The signature brand color. Primary CTA fill on Studio ("Get Started", "Learn more"), the link/accent color on the web product ("More", "Privacy Policy"), and emphasis pills. The system's single "action/brand" hue.
- **Accent Magenta** (`#f323ff`): A vivid pink-magenta used as a decorative swatch and in gradient accents — the playful counterpart to the violet, never used for plain text.

### Ink & Text
- **Ink** (`#292930`): Dark near-black for the web header Login button fill and for Studio headings/labels. Carries weight without the harshness of pure black.
- **Ink Pure** (`#000008`): The near-black used for primary body and label text on the web product — a whisper away from black with a faint blue cast.
- **Pure Black** (`#000000`): Occasional maximum-contrast text on the web canvas.
- **Body Grey** (`#5c5c61`): Secondary text and inactive nav labels on Studio.
- **Muted Grey** (`#75757a`): Tertiary text, captions, metadata on the web product.
- **Muted Alt** (`#47474d`): Disabled/low-emphasis button label (the grey "Enter" button text) and fine print.
- **Faint Grey** (`#c7c7c9`): Lowest-emphasis labels, disabled glyphs, circular control tint.

### Neutral & Surface
- **Canvas** (`#ffffff`): Page background, white cards, text on violet/dark.
- **Surface** (`#f5f5f6`): Soft cool-grey fill for utility buttons (Buy ZEMs, Enter) and segmented surfaces.
- **Surface Alt** (`#f8f8fa`): A slightly lighter grey for feature cards and alternating bands.
- **Hairline** (`#e0e0e1`): Thin 1px borders and dividers (language switcher, inputs).

### On-color
- **On Primary** (`#ffffff`): White text/icons on violet and dark surfaces.

## 3. Typography Rules

### Font Family
- **Web product**: `ui-sans-serif, system-ui, -apple-system` — the platform UI sans stack; no custom webfont is loaded on `web.zepeto.me`.
- **Studio**: `-apple-system, system-ui, AppleSDGothicNeo` — system sans with a Korean fallback for hangul.
- The system relies on weight (400 → 800) rather than a distinctive typeface for personality.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Display Hero | 64px (4.00rem) | 800 | 1.09 (70px) | Studio hero "All you've imagined, At ZEPETO Studio." |
| Display | 48px (3.00rem) | 700 | 1.25 (60px) | Web carousel hero, Studio section titles |
| Section | 28px (1.75rem) | 700 | 1.29 (36px) | Banner / section headings ("Now download the ZEPETO mobile app!") |
| Feature Title | 24px (1.50rem) | 700 | 1.33 (32px) | Studio pillar titles (Items / World / Live) |
| Subtitle | 22px (1.38rem) | 700 | 1.36 (30px) | Step / FAQ sub-headings |
| Lead | 20px (1.25rem) | 500 | 1.40 (28px) | Hero supporting copy, emphasized list title |
| Nav | 17px (1.06rem) | 500 | 1.40 (25px) | Studio top-nav item |
| Button | 15px (0.94rem) | 500 | 1.40 (21px) | Header Login / Studio button label |
| Body | 16px (1.00rem) | 400 | 1.15 (18.4px) | Standard reading text |

### Principles
- **Weight is the hierarchy**: 800 ExtraBold for the top hero, 700 Bold for every other headline, 500 medium for nav/buttons, 400 for body. There is no custom display face — emphasis comes entirely from weight and scale.
- **Big, declarative headlines**: 48–64px hero type with tight line-height (1.09–1.25) reads as confident and youthful, suited to a Gen-Z avatar platform.
- **System sans throughout**: A `ui-sans-serif` / `-apple-system` stack keeps rendering fast and native across web and the embedded mobile webviews; the brand personality lives in color and avatars, not letterforms.
- **Quiet body, loud headers**: Body sits at 16px / 400 in muted grey; headers jump to 700–800 — the contrast is the system's primary rhythm.

## 4. Component Stylings

### Buttons

**Studio Primary CTA**
- Background: `#5c46ff`
- Text: `#ffffff`
- Radius: 28px
- Padding: 0px 34px
- Height: 56px
- Font: 20px weight 500
- Use: Studio primary call-to-action ("Get Started", "Learn more") — full pill on white

**Studio Invert CTA (on violet band)**
- Background: `#ffffff`
- Text: `#5c46ff`
- Radius: 34px
- Padding: 0px 34px
- Height: 68px
- Font: 22px weight 700
- Shadow: `rgba(0,0,0,0.2) 0px 0px 20px 0px`
- Use: Hero "Get Started" on the full-violet band — white pill, violet label, soft glow lift

**Web Login (Primary, dark)**
- Background: `#292930`
- Text: `#ffffff`
- Radius: 8px
- Padding: 10px 16px
- Height: 40px
- Font: 15px weight 500
- Use: Web header Login button — tight near-black utility CTA

**Web Secondary (soft grey)**
- Background: `#f5f5f6`
- Text: `#292930`
- Radius: 8px
- Padding: 10px 16px
- Height: 40px
- Font: 16px weight 400
- Use: Web header "Buy ZEMs" / low-emphasis utility action

**Enter (grey, disabled-look)**
- Background: `#f5f5f6`
- Text: `#47474d`
- Radius: 8px
- Padding: 14px 34px
- Height: 56px
- Font: 17px weight 500
- Use: "Enter" world/room buttons in the web product list

### Cards & Containers

**Studio Pillar Card**
- Background: `#f8f8fa`
- Text: `#292930`
- Radius: 24px
- Use: Studio creation pillar card (Items / World / Live) on the lighter grey surface

**White Feature Card**
- Background: `#ffffff`
- Text: `#292930`
- Radius: 24px
- Use: White feature/content card; flat, no shadow (separation by tint)

### Badges

**Violet Emphasis Pill**
- Background: `#5c46ff`
- Text: `#ffffff`
- Radius: 9999px (full)
- Font: 15px weight 500
- Use: Emphasis tag / status pill in the brand violet

### Navigation
- Background: transparent over violet hero band
- Text: `#5c5c61` (inactive) on light, `rgba(255,255,255,0.6)` on dark hero
- Active: `#292930` text on light surfaces
- Padding: 15px 16px per item
- Height: 50px nav items
- Font: 17px weight 500
- Use: Studio top nav ("Contents", "Creator Program", "Business", "Guides", "Support")

### Avatars & Controls
- Shape: circular (9999px / 50%) for carousel prev/next controls and creator avatars
- Control background: `rgba(199, 199, 201, 0.5)` (translucent faint grey, `#c7c7c9` base)
- Use: Hero carousel left/right controls; round creator thumbnails

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://web.zepeto.me/ (product, live computed-style), https://studio.zepeto.me/ (creator studio, live computed-style), https://docs.zepeto.me/studio-guide/facecode-guidelines (creator design guidelines, live)
**Tier 2 sources:** getdesign.md/zepeto — NOT FOUND (no entry); styles.refero.design/?q=zepeto — no ZEPETO match (only fuzzy alphabetical neighbors: Zed/Zelt/Mezmo/Zapier). KR Tier-2 gap as expected; Tier 1 carries the proof.
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px
- Scale: 4px, 8px, 10px, 16px, 24px, 34px, 48px, 64px
- Notable: Studio CTAs use a generous 34px horizontal pad; web utility buttons use a tighter 10px/16px pad — the spacing itself reinforces the product/brand register split.

### Grid & Container
- Web product: a centered content column with a full-bleed hero carousel; thumbnail grids for worlds/items
- Studio: full-width alternating bands — violet hero band, then white/grey feature sections
- Feature pillars (Items / World / Live) arranged as a 3-up card row on Studio
- Cards group related creator tools and content

### Whitespace Philosophy
- **Let the avatars carry color**: the web product stays neutral grey/white so 3D avatar and item imagery provides the visual energy.
- **Brand bands for emphasis**: Studio punctuates white sections with full-violet (`#5c46ff`) bands to mark conversion moments.
- **Flat segmentation**: sections separate by background tint (`#f5f5f6` / `#f8f8fa` vs `#ffffff`), not shadow stacks.

### Border Radius Scale
- Small (8px): web utility buttons, language switcher, inputs
- Medium (24px): feature/pillar cards, mid-size pill buttons
- Large (28–34px): Studio primary CTAs, hero pills
- Full (9999px / 50%): badges, circular avatars and carousel controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Most surfaces — page background, cards, nav, headings |
| Tint (Level 1) | `#f5f5f6` / `#f8f8fa` background shift | Card/section separation without elevation |
| Soft Glow (Level 2) | `rgba(0,0,0,0.2) 0px 0px 20px 0px` | The white "Get Started" pill on the violet hero band |

**Shadow Philosophy**: ZEPETO is a near-flat system. Live inspection found `box-shadow: none` across nearly every button, card, nav, and heading on both `web.zepeto.me` and `studio.zepeto.me`. Depth and grouping come from flat tinted surfaces (`#f5f5f6`, `#f8f8fa`) and the strong violet brand bands rather than elevation. The single deliberate exception is a soft, even glow (`rgba(0,0,0,0.2) 0px 0px 20px 0px`) on the white hero CTA pill — a subtle lift that makes the conversion button float just above the violet field. When emphasis is needed elsewhere, the system reaches for color (`#5c46ff`) or the dark ink (`#292930`), never a heavier shadow.

## 7. Do's and Don'ts

### Do
- Use ZEPETO Violet (`#5c46ff`) as the single brand/action color — Studio CTA fill and web link accent
- Run headlines heavy — 800 ExtraBold at 64px, 700 Bold at 48px — declarative and youthful
- Use the dark ink (`#292930`) for the primary utility button and headings, not pure black
- Keep the web product surface quiet (grey/white) so avatars and items carry the color
- Use full-violet bands on marketing surfaces to mark conversion moments
- Reach for the pill (24–34px) on brand/marketing CTAs and full-round on avatars
- Keep utility buttons tight (8px radius) in the web product
- Stay flat — separate with tint (`#f5f5f6` / `#f8f8fa`), reserve the soft glow for the hero pill

### Don't
- Spread the violet across many UI chrome elements — keep it the single action/brand hue
- Use the magenta (`#f323ff`) for text or plain buttons — it's a decorative/gradient accent only
- Use pure black for body text — reserve near-black `#000008` / ink `#292930`
- Stack heavy drop shadows — the system is near-flat; only the hero pill lifts
- Set headlines in a light weight — display is always 700–800
- Mix square sharp corners into brand CTAs — those are pills
- Add a second saturated accent hue beyond violet + the magenta decorative swatch
- Let the web product surface compete with avatar/item imagery for color attention

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; hero carousel full-width; pillar cards stack; embedded app webview |
| Tablet | 640-1024px | 2-up feature cards, moderate padding |
| Desktop | 1024-1440px | Full layout, 3-up pillar row, full-violet hero band |

### Touch Targets
- Studio CTAs at 56–68px height with 34px horizontal padding — large, unmistakable
- Web utility buttons at 40px height — comfortably tappable in dense chrome
- Circular carousel controls at 36px diameter
- Nav items at 50px height for touch

### Collapsing Strategy
- Hero: 64px ExtraBold headline scales down on mobile, weight 800 maintained
- Pillar cards: 3-up → stacked single column
- Violet brand bands maintain full-width treatment, reduce internal padding
- Web product is mobile-first (the platform is primarily a mobile app); the web surface mirrors app layouts

### Image Behavior
- 3D avatar, world, and item thumbnails carry the visual color load at all sizes
- Cards maintain 24px radius across breakpoints
- Circular avatars stay fully round on every viewport

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / brand CTA: ZEPETO Violet (`#5c46ff`)
- Decorative accent: Magenta (`#f323ff`)
- Dark utility button / heading: Ink (`#292930`)
- Body text: Near-black (`#000008`), muted (`#75757a`)
- Secondary nav text: Body Grey (`#5c5c61`)
- Background: Pure White (`#ffffff`)
- Surface: Cool Grey (`#f5f5f6`), Lighter Grey (`#f8f8fa`)
- Hairline: `#e0e0e1`
- On violet/dark: White (`#ffffff`)

### Example Component Prompts
- "Create a Studio hero on a full `#5c46ff` violet band. Headline 64px system-sans weight 800, line-height 1.09, white. A white pill CTA: `#ffffff` background, `#5c46ff` text, 34px radius, 0 34px padding, 68px height, 22px weight 700, soft glow shadow `rgba(0,0,0,0.2) 0px 0px 20px 0px` — 'Get Started'."
- "Build a web product header on white. Dark Login button: `#292930` background, white text, 8px radius, 10px 16px padding, 40px height, 15px weight 500. Soft grey 'Buy ZEMs' button: `#f5f5f6` background, `#292930` text, 8px radius."
- "Design a Studio pillar card: `#f8f8fa` background, 24px radius, no shadow. Title 24px weight 700, `#292930`. Three across (Items / World / Live)."
- "Create a violet emphasis badge: `#5c46ff` background, white text, full-round (9999px), 15px weight 500."

### Iteration Guide
1. Violet (`#5c46ff`) is the single brand/action color — Studio CTA fill, web link accent; don't spread it
2. Headlines are heavy (700–800); body is 400 in muted grey — weight is the hierarchy
3. Two radius registers: 8px tight utility buttons on web, 24–34px pills on Studio/brand
4. Stay flat — separate with `#f5f5f6` / `#f8f8fa` tint; only the hero pill carries the soft glow
5. Dark ink `#292930` for the utility button and headings, near-black `#000008` for body — never pure black
6. Magenta `#f323ff` is decorative/gradient only — never text or plain buttons
7. Keep the web product quiet so avatars and items provide the color energy

---

## 10. Voice & Tone

ZEPETO's voice is **playful, inviting, and creator-empowering** — a youthful, global-first tone that treats the user as both a player and a maker. The web product speaks in short, direct app labels ("Login", "Buy ZEMs", "Enter", "More"), while the Studio shifts to an aspirational, encouraging register aimed at creators ("All you've imagined, At ZEPETO Studio.", "ZEPETO is for the Creators.", "Limitless possibilities in the palm of my hand."). The platform invites participation — "Would you like to join?" — rather than hard-selling.

| Context | Tone |
|---|---|
| Web product CTAs | Short, direct app labels. "Login", "Buy ZEMs", "Enter", "More". |
| World / show banners | Inviting, fun, slightly cinematic. "Become a contestant on the popular show...", "3, 2, 1, JUMP!". |
| Studio hero / creator copy | Aspirational, empowering. "All you've imagined, At ZEPETO Studio.", "ZEPETO is for the Creators." |
| Onboarding prompts | Friendly invitations. "Would you like to join?" |
| Commerce / currency | Plain and functional. "Buy ZEMs", "Easily top up with ZEM Auto Recharge". |

**Voice samples (verbatim from live surfaces):**
- "Would you like to join?" — web hero invitation. *(verified live web.zepeto.me 2026-06-17)*
- "All you've imagined, At ZEPETO Studio." — Studio hero headline. *(verified live studio.zepeto.me 2026-06-17)*
- "ZEPETO is for the Creators." — Studio section headline. *(verified live studio.zepeto.me 2026-06-17)*

**Forbidden register**: corporate stiffness, fear/scarcity sales urgency, jargon-heavy enterprise copy, anything that frames creation as difficult rather than playful.

## 11. Brand Narrative

ZEPETO (제페토) launched in **2018** and is operated by **Naver Z Corporation**, a subsidiary of Korea's Naver, built on the premise that anyone should be able to express themselves as a 3D avatar and build, share, and monetize virtual experiences. The platform pairs an avatar-creation engine with social worlds, live shows, and a creator economy denominated in its in-app currency, **ZEM**. It grew into one of the world's largest metaverse platforms, especially popular with Gen-Z users across Asia and globally.

The product is deliberately two-sided. On the consumer side (`web.zepeto.me`), users style avatars, enter worlds and rooms, buy ZEMs, and join live shows — a quiet, content-forward surface that lets the avatars and worlds supply the color. On the creator side (`studio.zepeto.me`, with design guidelines at `docs.zepeto.me`), ZEPETO Studio invites anyone to make items, build worlds, and create facecodes — "ZEPETO is for the Creators." — and sell them to the global player base.

What the design refuses, visible in its surfaces: the cold, corporate chrome of enterprise software and the heavy shadow-stacked look of legacy apps. What it embraces: a single confident brand violet (`#5c46ff`), big heavy youthful headlines, a near-flat aesthetic, and a clear split between a neutral product surface that showcases user-generated avatars and a vivid, encouraging studio that markets creation itself.

## 12. Principles

1. **Avatars carry the color.** The product surface stays neutral so user-generated avatars, worlds, and items provide the visual energy. *UI implication:* keep web chrome grey/white; reserve saturated hue for brand bands and CTAs.
2. **One brand hue, two registers.** Violet (`#5c46ff`) means "ZEPETO" and "do this" across both a quiet product and a vivid studio. *UI implication:* fill brand CTAs and link accents with `#5c46ff`; never dilute it across chrome.
3. **Creation should feel limitless, not difficult.** The Studio voice is aspirational and encouraging. *UI implication:* large pills, inviting copy, generous padding — making the "Get Started" path feel effortless.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* near-zero shadows; separate by tint; reserve the one soft glow for the hero conversion pill.
5. **Weight, not typeface, signals importance.** A system sans run at 400–800 carries the whole hierarchy. *UI implication:* express emphasis through weight and scale, not a custom display font.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable ZEPETO user segments (Gen-Z avatar/social users, virtual-world players, UGC creators selling items), not individual people.*

**민서, 17, 서울.** A high-schooler who styles her avatar daily, hangs out in worlds with friends, and watches live shows. Buys ZEMs occasionally for new outfits. Chose ZEPETO because it feels expressive and social, not like a corporate app.

**Diego, 22, São Paulo.** A hobbyist 3D creator who designs and sells avatar items through ZEPETO Studio. Reads the Studio guides and facecode guidelines closely. Values that the studio makes "Get Started" feel approachable and that there's a real global audience to sell to.

**지훈, 28, 경기.** A small-team world builder who uses ZEPETO Studio to publish interactive worlds. Cares about clear creator documentation and a fast, flat UI that doesn't get in the way of building.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no worlds / items yet)** | White canvas. Single Ink (`#292930`) line explaining nothing is here yet, with one violet (`#5c46ff`) CTA to create or explore. Avatar/illustration may anchor it. |
| **Empty (creator dashboard, no content)** | Muted (`#75757a`) line inviting the first creation, plus a violet "Get Started" path. Encouraging, never scolding. |
| **Loading (world / feed fetch)** | Flat grey skeleton blocks on `#f5f5f6` / `#f8f8fa` at final card dimensions, 24px radius. No shadow shimmer — consistent with the flat system. |
| **Loading (ZEM purchase)** | Inline progress within the button; previous state stays visible until the transaction confirms. |
| **Error (load failed)** | Inline message in Ink (`#292930`) with a plain-language explanation and a retry. No generic dead-end. |
| **Error (form / purchase validation)** | Field-level message below the input in a clear tone; describes what's valid, not just "Required". |
| **Success (purchase / publish)** | Brief inline confirmation in a friendly tone; next step linked immediately below. |
| **Skeleton** | `#f5f5f6` / `#f8f8fa` blocks at final dimensions, 24px radius, flat pulse. |
| **Disabled** | Faint Grey (`#c7c7c9`) text on a reduced-opacity surface; grey utility buttons (`#f5f5f6` with `#47474d` label) read as low-emphasis rather than broken. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Card/section reveal, carousel slide, sheet |
| `motion-slow` | 360ms | Page-level transitions, hero band reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, carousel slides |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is lively but controlled — fitting a youthful avatar platform without feeling chaotic. Hero carousels slide horizontally at `motion-standard / ease-enter`; the white "Get Started" pill responds to hover with a subtle scale and its soft glow intensifying. Pillar cards fade-in-from-below on scroll. The brand leans playful (avatar animations carry the delight) while keeping UI chrome transitions quick and steady. Under `prefers-reduced-motion: reduce`, all UI transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle:
- https://web.zepeto.me/ (product surface):
  - Login button — bg rgb(41,41,48) #292930 / color rgb(255,255,255) / radius 8px / padding 10px 16px / 40px / 15px / weight 500
  - "Buy ZEMs" button — bg rgb(245,245,246) #f5f5f6 / color rgb(0,0,0) / radius 8px / 40px
  - "Enter" buttons — bg rgb(245,245,246) #f5f5f6 / color rgb(71,71,77) #47474d / radius 8px / padding 14px 34px / 56px
  - Hero headlines — 48px weight 700 white "Would you like to join?", "3, 2, 1, JUMP!"; section 28px/700 "Now download the ZEPETO mobile app!"
  - Link/accent color rgb(92,70,255) #5c46ff on "More" / "Privacy Policy" links
  - Decorative swatch bg rgb(243,35,255) #f323ff
  - Body text rgb(0,0,8) #000008 (4084 hits), muted rgb(117,117,122) #75757a (2104 hits)
  - Surfaces rgb(248,248,250) #f8f8fa, rgb(245,245,246) #f5f5f6; font stack ui-sans-serif/system-ui/-apple-system
- https://studio.zepeto.me/ (creator studio surface):
  - Primary CTA — bg rgb(92,70,255) #5c46ff / white text / radius 24–28px / padding 0 34px / 48–56px / 17–20px / 500 ("Get Started", "Learn more")
  - Hero invert CTA — bg #ffffff / color rgb(92,70,255) #5c46ff / radius 34px / 68px / 22px / 700 / shadow rgba(0,0,0,0.2) 0px 0px 20px 0px
  - Hero H2 — 64px weight 800 white "All you've imagined, At ZEPETO Studio."
  - Section H2 — 48px weight 700 rgb(41,41,48) #292930 "ZEPETO is for the Creators."
  - Pillar H3 (Items/World/Live) — 24px weight 700 #292930
  - Nav items — color rgba(255,255,255,0.6) on dark / rgb(92,92,97) #5c5c61 inactive / padding 15px 16px / 50px / 17px / 500
  - body color rgb(41,41,48) #292930; surfaces #f8f8fa, rgb(240,240,240); box-shadow none dominant
- https://docs.zepeto.me/studio-guide/facecode-guidelines (creator design guidelines, fetched live):
  - Confirms ZEPETO Studio creator design-guideline content (facecodes, items, worlds);
    "a new customization category composed of blend shapes and color values of an avatar's face"

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live web/studio surfaces (hero headlines, section
headlines, web invitation).

Brand narrative (§11): ZEPETO (제페토) launched 2018, operated by Naver Z Corporation (Naver
subsidiary); 3D avatar metaverse social platform with in-app currency ZEM and a creator studio.
These are widely documented public facts; specific details beyond the live surfaces are general
public knowledge, not directly quoted from a verified ZEPETO statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable ZEPETO user segments
(Gen-Z avatar/social users, UGC creators). Names are illustrative; they do not refer to real people.

Tier 2 (getdesign.md/zepeto, styles.refero.design/?q=zepeto) returned no genuine ZEPETO coverage
— the expected KR Tier-2 gap. Tier 1 (2 brand-owned surfaces) carries the proof.

Interpretive claims (e.g., "avatars carry the color", "one brand hue, two registers", "flat and
fast as a rejection of legacy app chrome") are editorial readings connecting ZEPETO's observed
design to its positioning, not directly sourced ZEPETO statements.
-->
