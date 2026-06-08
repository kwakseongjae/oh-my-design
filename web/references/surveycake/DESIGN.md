---
id: surveycake
name: SurveyCake
country: TW
category: productivity
homepage: "https://www.surveycake.com"
primary_color: "#3dba90"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=www.surveycake.com&sz=128"
verified: "2026-06-08"
added: "2026-06-08"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-08"
  note: "primary = live CTA + brand mint green #3dba90 (rgb(61,186,144)); ink heading #3e3e3e is the dominant text color, not pure black"
  colors:
    primary: "#3dba90"
    primary-hover: "#34a07d"
    primary-deep: "#2b8568"
    on-primary: "#ffffff"
    canvas: "#ffffff"
    surface-mute: "#f7f7f7"
    surface-gray: "#f2f2f2"
    ink: "#3e3e3e"
    ink-strong: "#000000"
    muted: "#9b9b9b"
    hairline: "#dddddd"
    accent-violet: "#5f54e0"
    accent-amber: "#f5b849"
    accent-coral: "#f26659"
    accent-blue: "#0073b7"
  typography:
    family: { sans: "Noto Sans TC", fallback: "Helvetica Neue, Microsoft JhengHei, sans-serif" }
    display-hero: { size: 42, weight: 900, lineHeight: 1.50, tracking: 1, use: "Hero headline, heavy black weight authority" }
    section:      { size: 36, weight: 700, lineHeight: 1.50, tracking: 1, use: "Feature section titles" }
    subheading:   { size: 24, weight: 700, lineHeight: 1.50, tracking: 1, use: "Card / sub-section heads" }
    body-lg:      { size: 18, weight: 400, lineHeight: 1.75, use: "Feature descriptions, intro" }
    body:         { size: 16, weight: 400, lineHeight: 1.75, use: "Standard reading text" }
    link:         { size: 16, weight: 700, lineHeight: 1.50, use: "Inline 了解更多 green text links" }
    button:       { size: 14, weight: 500, lineHeight: 1.00, use: "Primary CTA label" }
    nav:          { size: 14, weight: 500, lineHeight: 1.00, use: "Top navigation links" }
    caption:      { size: 14, weight: 400, use: "Plan labels, metadata, fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 80 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    ambient: "rgba(0,0,0,0.06) 0px 2px 8px"
    standard: "rgba(0,0,0,0.08) 0px 8px 24px"
    elevated: "rgba(0,0,0,0.12) 0px 16px 40px"
  components:
    button-primary: { type: button, bg: "#3dba90", fg: "#ffffff", radius: 4, padding: "60px tall hero", font: "14px/500 Noto Sans TC", use: "Hero/section primary action, hover #34a07d" }
    button-outline: { type: button, bg: "#ffffff", fg: "#3dba90", radius: 4, font: "14px/700 Noto Sans TC", use: "Sign-up 註冊, 1px #3dba90 border" }
    link-green: { type: badge, fg: "#3dba90", font: "16px/700 Noto Sans TC", use: "Inline 了解更多 learn-more link, no underline" }
    input-text: { type: input, fg: "#000000", radius: 4, use: "Form input, 1px #dddddd border, focus #3dba90, placeholder #9b9b9b" }
    card: { type: card, bg: "#ffffff", radius: 8, use: "Feature card, soft neutral shadow on #f7f7f7 sections" }
    tab-pricing: { type: tab, fg: "#3e3e3e", font: "14px/400 Noto Sans TC", active: "Highlighted tier #3dba90 top band", use: "Pricing tier card label" }
  components_harvested: true
---

# Design System Inspiration of SurveyCake

## 1. Visual Theme & Atmosphere

SurveyCake's marketing site is a study in calm, trustworthy SaaS clarity built for the Taiwanese enterprise market. The page opens on a pure white canvas (`#ffffff`) with dark-charcoal headings (`#3e3e3e`) and a single, decisive mint-green brand color (`#3dba90`) that does almost all of the emotional and functional work. This is not a flashy, gradient-heavy startup look; it is a polished, restrained productivity tool that wants to read as dependable. The green is fresh and friendly — closer to matcha than to a corporate emerald — and it appears everywhere a user is meant to act: the hero CTA, the outlined "註冊" (Sign up) button, and the recurring "了解更多" (Learn more) text links scattered down the page. Everything else is grayscale.

The typographic spine is `Noto Sans TC`, the open-source Traditional Chinese workhorse, with a Western fallback stack (`Helvetica Neue`, `Microsoft JhengHei`). Because the site serves CJK readers, the type system leans on weight rather than letterform tricks for hierarchy: the hero headline runs at 42px weight **900** (heavy/black) with a generous 1.5 line-height (63px) and a hair of positive tracking (1px) — the opposite of a Latin-display foundry approach. Heavy weight on a CJK headline reads as confident and authoritative in a way that thin weights cannot, because hanzi need stroke mass to stay legible at scale. Section heads step down to 36px/700, sub-heads to 24px/700, and body settles into a comfortable 16px/400 with a roomy 1.75 line-height that gives dense Chinese text breathing room.

The atmosphere is generous whitespace, neutral light-gray section dividers (`#f7f7f7` / `#f2f2f2`), thin hairline borders (`#dddddd`), and soft, neutral (un-tinted) drop shadows. Color is rationed deliberately: green = action, charcoal = content, gray = structure. A small reserve of secondary accents (violet `#5f54e0`, amber `#f5b849`, coral `#f26659`, blue `#0073b7`) appears only in illustrations, data-viz, and feature icons — never on interactive chrome. The result feels engineered for trust: a survey platform that handles enterprise data needs to look orderly, and SurveyCake's restraint is the message.

**Key Characteristics:**
- One dominant brand color — mint green `#3dba90` — owning every CTA, outlined button, and inline link
- `Noto Sans TC` with CJK-first hierarchy that uses **weight** (400 → 700 → 900) instead of letter-spacing for emphasis
- Heavy 900-weight hero headline (42px) — stroke mass as authority, the CJK convention
- Roomy 1.5–1.75 line-heights to give Traditional Chinese text vertical breathing room
- Charcoal `#3e3e3e` headings instead of pure black — softer, warmer ink
- Conservative 4px button radius — orderly, never pill-shaped, never playful
- Neutral un-tinted shadows (`rgba(0,0,0,0.08)`) — calm, structural depth
- A reserved secondary accent palette (violet, amber, coral, blue) confined to illustration and data-viz

## 2. Color Palette & Roles

### Primary
- **SurveyCake Green** (`#3dba90`): The brand. CTA fills, outlined-button text/border, inline "了解更多" links, active highlights. A fresh mint-green (`rgb(61, 186, 144)`) that anchors the entire identity and is the single most recognizable element.
- **Green Hover** (`#34a07d`): Darker mint for hover/press states on green CTAs.
- **Green Deep** (`#2b8568`): Deepest green for active/pressed states and icon emphasis.

### Ink & Neutrals
- **Ink** (`#3e3e3e`): `rgb(62, 62, 62)`. The dominant text color — headings, nav links, sub-heads. A warm charcoal, not pure black.
- **Ink Strong** (`#000000`): Reserved for maximum-contrast body copy and fine detail.
- **Muted** (`#9b9b9b`): `rgb(155, 155, 155)`. Secondary text, captions, disabled labels, placeholder copy.
- **Pure White** (`#ffffff`): Page background, card surfaces, text on green buttons.

### Surfaces & Borders
- **Surface Mute** (`#f7f7f7`): Light-gray alternating section background for visual rhythm.
- **Surface Gray** (`#f2f2f2`): Slightly deeper gray for inset panels and feature blocks.
- **Hairline** (`#dddddd`): Standard 1px border for cards, dividers, and input outlines.

### Secondary Accents (illustration & data-viz only)
- **Violet** (`#5f54e0`): `rgb(95, 84, 224)`. Decorative accent in feature illustrations and charts.
- **Amber** (`#f5b849`): `rgb(245, 184, 73)`. Warm highlight for icons and data segments.
- **Coral** (`#f26659`): `rgb(242, 102, 89)`. Alert/attention accent in illustrations.
- **Blue** (`#0073b7`): `rgb(0, 115, 183)`. Informational accent and integration logos.

### Role Summary
- **Action / brand**: `#3dba90` (every interactive element)
- **Content text**: `#3e3e3e` (headings) and `#000000` (strong body)
- **Secondary text**: `#9b9b9b`
- **Structure**: `#f7f7f7`, `#f2f2f2` surfaces; `#dddddd` borders
- **Decoration**: violet `#5f54e0`, amber `#f5b849`, coral `#f26659`, blue `#0073b7` — never on buttons or links

## 3. Typography Rules

### Font Family
- **Primary**: `Noto Sans TC`
- **Fallback stack**: `Helvetica Neue`, `Helvetica`, `Roboto`, `Arial`, `Apple LiGothic`, 微軟正黑體, `Microsoft JhengHei`, `sans-serif`
- **System rationale**: A Traditional-Chinese-first stack. `Noto Sans TC` carries the full hanzi range cleanly; the Latin fallbacks (`Helvetica Neue`) handle Western product names and numerals. There is no custom display face — hierarchy is built from weight and size, the correct strategy for CJK typography.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Noto Sans TC | 42px (2.63rem) | 900 | 1.50 (63px) | 1px | Heavy black weight — stroke mass as authority |
| Section Heading | Noto Sans TC | 36px (2.25rem) | 700 | 1.50 (54px) | 1px | Feature section titles |
| Sub-heading | Noto Sans TC | 24px (1.50rem) | 700 | 1.50 | 1px | Card heads, sub-sections |
| Body Large | Noto Sans TC | 18px (1.13rem) | 400 | 1.75 | normal | Feature descriptions, intro |
| Body | Noto Sans TC | 16px (1.00rem) | 400 | 1.75 | normal | Standard reading text |
| Link (inline) | Noto Sans TC | 16px (1.00rem) | 700 | 1.50 | normal | Green "了解更多" learn-more links |
| Button | Noto Sans TC | 14px (0.88rem) | 500 | 1.00 | normal | Primary CTA label |
| Nav Link | Noto Sans TC | 14px (0.88rem) | 500 | 1.00 | normal | Top navigation |
| Sign-up Button | Noto Sans TC | 14px (0.88rem) | 700 | 1.00 | normal | Outlined "註冊" — heavier than primary CTA |
| Caption | Noto Sans TC | 14px (0.88rem) | 400 | normal | normal | Plan labels, metadata, fine print |

### Principles
- **Weight is the hierarchy.** Because CJK glyphs cannot rely on the geometric tricks of Latin display type, SurveyCake moves through 400 → 500 → 700 → 900. The hero's 900 weight is the loudest signal on the page.
- **Heavy headlines, light body.** A 900-weight 42px hero sits above 400-weight 16px body — a dramatic weight contrast that organizes the page instantly.
- **Roomy line-height for hanzi.** 1.5 on headings and 1.75 on body gives Traditional Chinese characters the vertical air they need to stay scannable. Tight leading would feel cramped in CJK.
- **Slight positive tracking on heads.** Headings carry a 1px letter-spacing — the opposite of Latin display tightening — which gently opens dense character runs.
- **Two CTA weights.** The filled primary CTA is weight 500; the outlined "註冊" sign-up is weight 700. Heavier weight compensates for the lower-contrast outlined treatment.

## 4. Component Stylings

### Buttons

**Primary CTA (filled green)**
- Background: `#3dba90`
- Text: `#ffffff`
- Radius: 4px
- Height: 60px (hero) / 40px (compact)
- Font: 14px Noto Sans TC weight 500
- Hover: `#34a07d` background
- Use: Hero and section primary action — "免費建立問卷" (Create a free survey)

**Outlined Sign-up (註冊)**
- Background: `#ffffff`
- Text: `#3dba90`
- Border: `1px solid #3dba90`
- Radius: 4px
- Height: 40px
- Font: 14px Noto Sans TC weight **700** (heavier than the filled CTA)
- Use: Secondary header action — "註冊" (Sign up)

**Login link (登入)**
- Background: transparent
- Text: `#3dba90`
- Font: 14px weight 700
- Use: Tertiary header action — "登入" (Log in)

**Inline Learn-more link (了解更多)**
- Background: transparent
- Text: `#3dba90`
- Font: 16px weight 700, no underline
- Use: Recurring inline section link — "了解更多" (Learn more)

### Cards & Containers
- Background: `#ffffff` (or `#f7f7f7` inset on alternating sections)
- Border: optional `1px solid #dddddd`
- Radius: 8px (standard), 4px (tight)
- Shadow (standard): `rgba(0,0,0,0.08) 0px 8px 24px`
- Shadow (ambient): `rgba(0,0,0,0.06) 0px 2px 8px`
- Hover: shadow deepens to the elevated level

### Plan / Pricing Tiers
- Tier labels (`SurveyCake BASIC`, `PRO`, `TEAM`, `ENTERPRISE`) at 14px weight 400 in ink `#3e3e3e`
- Highlighted tier uses green `#3dba90` accent border or header band
- White card surfaces on `#f7f7f7` section background

### Inputs & Forms
- Border: `1px solid #dddddd`
- Radius: 4px
- Focus: `1px solid #3dba90` (green ring)
- Label: `#3e3e3e`, 14px
- Placeholder: `#9b9b9b`
- Text: `#000000`

### Navigation
- White/transparent sticky header
- Brand logotype left-aligned
- Links: Noto Sans TC 14px weight 500, `#3e3e3e` ink
- Right cluster: green "登入" link, outlined green "註冊" button
- Radius: 4px on the sign-up button
- Mobile: hamburger toggle

### Section Rhythm
- Alternating white (`#ffffff`) and light-gray (`#f7f7f7` / `#f2f2f2`) full-width bands
- Generous ~80px vertical section padding
- Centered single-column hero, multi-column feature grids below

---

**Verified:** 2026-06-08 (omd-add-reference — live Tier 1 inspect)
**Tier 1 sources:** https://www.surveycake.com, https://blog.surveycake.com (live DOM, playwright getComputedStyle — body, h1, h2, nav, CTA buttons, color frequency scan)
**Method:** Headless Chromium getComputedStyle on the live homepage; rgb()→hex conversion; >= 6 concrete value samples captured (primary `#3dba90`, ink `#3e3e3e`, hero 42px/900, CTA 60px/4px, outlined 註冊 weight 700, muted `#9b9b9b`).
**`.verification.md`:** `web/references/surveycake/.verification.md`

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 80px (section)
- Section padding is generous (~80px) to create calm, scannable rhythm between feature blocks

### Grid & Container
- Centered content, comfortable max-width (~1140–1200px)
- Hero: centered single column with a prominent 60px green CTA
- Feature sections: 2–3 column grids of cards with icon + heading + body + green "了解更多" link
- Full-width alternating gray bands (`#f7f7f7`) separate major sections

### Whitespace Philosophy
- **Calm density.** SurveyCake uses generous whitespace to signal trustworthiness — an enterprise data tool that looks orderly. Nothing is crammed.
- **Alternating bands.** White and light-gray full-width sections create rhythm without introducing color, keeping the green CTA the only chromatic focal point.
- **Roomy CJK leading.** The 1.75 body line-height extends into layout: paragraphs get vertical air so Traditional Chinese stays scannable.

### Border Radius Scale
- Tight (4px): Buttons, inputs, badges — the workhorse
- Standard (8px): Cards, feature panels, image containers
- Large (16px): Featured hero imagery or rounded illustration frames
- Never pill-shaped — the orderly square-ish corner is the brand read

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, flat sections |
| Ambient (Level 1) | `rgba(0,0,0,0.06) 0px 2px 8px` | Subtle card lift, hover hints |
| Standard (Level 2) | `rgba(0,0,0,0.08) 0px 8px 24px` | Feature cards, content panels |
| Elevated (Level 3) | `rgba(0,0,0,0.12) 0px 16px 40px` | Floating panels, modals, dropdowns, hover peak |
| Ring (Accessibility) | `2px solid #3dba90` outline | Keyboard focus ring |

**Shadow Philosophy**: SurveyCake's elevation is deliberately neutral and soft. Unlike chromatically-tinted shadow systems, SurveyCake uses plain `rgba(0,0,0,...)` shadows at low alpha — the goal is calm structural depth, not atmosphere. Shadows separate cards from the white/gray canvas just enough to imply tappability, and deepen on hover. Because the palette is otherwise so restrained, neutral shadows keep the single green accent as the only chromatic event on the page.

## 7. Do's and Don'ts

### Do
- Use SurveyCake Green (`#3dba90`) for every interactive element — CTA, outlined button, inline link
- Build hierarchy with weight: 900 hero → 700 section → 400 body
- Use heavy (900) weight on the hero headline — stroke mass reads as authority in CJK
- Keep body line-height generous (1.75) so Traditional Chinese stays scannable
- Use charcoal `#3e3e3e` for headings, not pure black
- Keep button radius at 4px and card radius at 8px — orderly, never pill
- Use neutral `rgba(0,0,0,...)` shadows at low alpha for calm depth
- Alternate white and light-gray (`#f7f7f7`) section bands for rhythm

### Don't
- Don't introduce a second interactive color — green is the only action color
- Don't put the violet/amber/coral/blue accents on buttons or links — they're illustration-only
- Don't use thin (300) weights on CJK headlines — they lose legibility
- Don't tighten line-height below 1.5 on Chinese text — it cramps the glyphs
- Don't use pill-shaped or heavily-rounded buttons — 4px is the brand
- Don't tint shadows — SurveyCake shadows are neutral black at low alpha
- Don't use pure black (`#000000`) for headings — charcoal `#3e3e3e` is warmer
- Don't crowd sections — generous whitespace is part of the trust signal

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hamburger nav, full-width CTA |
| Tablet | 640–1024px | 2-column feature grids, moderate padding |
| Desktop | 1024–1280px | Full layout, 3-column feature grids |
| Large Desktop | >1280px | Centered content with generous side margins |

### Touch Targets
- Hero CTA is a tall 60px target — generous on mobile
- Compact buttons (登入 / 註冊) at 40px height
- Nav links at 14px with comfortable spacing

### Collapsing Strategy
- Hero: 42px headline scales down on mobile, weight 900 maintained
- Navigation: horizontal links + green CTA → hamburger toggle
- Feature cards: 3-column → 2-column → single column stacked
- Full-width gray bands maintained; internal padding reduces
- Green CTA spans full width on mobile for thumb reach
- Section padding: ~80px → ~48px on mobile

### Image Behavior
- Feature illustrations maintain 8px radius at all sizes
- Hero imagery scales fluidly, may stack below headline on mobile
- Card images keep consistent rounding and neutral shadow

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: SurveyCake Green (`#3dba90`)
- CTA Hover: Green Hover (`#34a07d`)
- Background: Pure White (`#ffffff`)
- Section band: Light Gray (`#f7f7f7`)
- Heading text: Charcoal (`#3e3e3e`)
- Body text strong: Black (`#000000`)
- Secondary text: Muted Gray (`#9b9b9b`)
- Border: Hairline (`#dddddd`)
- Link: SurveyCake Green (`#3dba90`)
- Decorative accents: Violet (`#5f54e0`), Amber (`#f5b849`), Coral (`#f26659`), Blue (`#0073b7`)

### Example Component Prompts
- "Create a hero on white background. Headline at 42px Noto Sans TC weight 900, line-height 1.5, letter-spacing 1px, color #3e3e3e. Subtitle at 18px weight 400, line-height 1.75, color #9b9b9b. A tall 60px green CTA button (#3dba90 fill, white text, 4px radius, weight 500) labeled 'Create a free survey'."
- "Design a feature card: white background, 8px radius, shadow rgba(0,0,0,0.08) 0px 8px 24px. Icon, then heading at 24px Noto Sans TC weight 700 color #3e3e3e, body at 16px weight 400 line-height 1.75 color #000000, and a green inline link 'Learn more' at 16px weight 700 color #3dba90."
- "Build a header nav: white sticky bar. Links at 14px Noto Sans TC weight 500 color #3e3e3e. Right cluster: green text link 'Log in' (#3dba90 weight 700) and an outlined 'Sign up' button (white fill, 1px solid #3dba90 border, #3dba90 text, 4px radius, weight 700)."
- "Create an alternating gray section: #f7f7f7 full-width band, ~80px vertical padding. Centered heading 36px weight 700 color #3e3e3e letter-spacing 1px. 3-column feature grid of white 8px-radius cards."
- "Design a pricing tier card: white surface on #f7f7f7, 8px radius. Tier label 'PRO' at 14px weight 400 color #3e3e3e. Highlighted tier gets a #3dba90 top band. Green CTA button 4px radius."

### Iteration Guide
1. Green `#3dba90` is the only interactive color — apply it to every CTA, outlined button, and inline link
2. Hierarchy comes from weight: 900 hero, 700 section/sub-head, 500 buttons/nav, 400 body
3. Headings use charcoal `#3e3e3e`; strong body uses `#000000`; secondary text uses `#9b9b9b`
4. Keep CJK line-height roomy — 1.5 on heads, 1.75 on body
5. Button radius 4px, card radius 8px — never pill-shaped
6. Shadows are neutral black at low alpha (0.06–0.12) — never tinted
7. Alternate white and `#f7f7f7` section bands for rhythm
8. Reserve violet/amber/coral/blue strictly for illustrations and data-viz

---

## 10. Voice & Tone

SurveyCake's voice is professional, reassuring, and benefit-forward — the register of a Taiwanese B2B SaaS speaking to HR teams, marketers, and enterprise administrators who need to trust the product with real data. The hero line "企業級的雲端問卷服務" (Enterprise-grade cloud survey service) sets the tone: it leads with the credibility claim ("enterprise-grade") before describing the function. CTAs are direct and action-first — "免費建立問卷" (Create a free survey), "註冊" (Sign up), "了解更多" (Learn more). The copy is encouraging without being hyped; it sells reliability and capability ("強大的專業功能與題型" — powerful professional features and question types) rather than disruption.

| Context | Tone |
|---|---|
| Hero headline | Credibility-first. "Enterprise-grade cloud survey service." States the class, then the category. |
| Feature descriptions | Capability-forward. Names the concrete feature and the value it unlocks. |
| CTAs | Direct imperatives. "Create a free survey", "Sign up", "Learn more". |
| Pricing | Transparent tier names (BASIC / PRO / TEAM / ENTERPRISE), plain capability framing. |
| Trust / security | Emphasizes data security and enterprise compliance, a key TW B2B concern. |
| Support | Helpful, accessible — "支援中心" (Support center) framed as readily available. |

**Register notes.** Traditional Chinese (zh-TW) throughout. Formal-but-warm — uses enterprise vocabulary (企業級, 專業) while keeping CTAs friendly and low-friction (免費 — free). Avoids hype superlatives; trust is built through specificity (security, question types, team collaboration) rather than adjectives.

## 11. Brand Narrative

SurveyCake is a cloud survey platform developed by **NEXT Generation (智泉國際/相關開發團隊)** and is one of the most widely used survey-building tools in Taiwan, particularly for enterprises, universities, and government bodies. Its positioning is explicitly **"企業級" (enterprise-grade)**: where many survey tools chase casual consumer use, SurveyCake leads with data security, Traditional-Chinese-native UX, and compliance suited to the Taiwanese and broader Greater China market. The product spans a free **BASIC** tier ("終身免費" — lifetime free), a **PRO** tier of advanced features, a **TEAM** collaboration tier, and an **ENTERPRISE** tier.

The brand's design choices reflect this market position. The single calm green accent and orderly grayscale system signal a tool that takes data seriously — not a playful consumer toy. The heavy-weight CJK typography reads as authoritative in a way Latin-display thinness never could in Traditional Chinese. The restraint is strategic: an enterprise buyer evaluating a survey platform for sensitive HR or research data wants to see order, not flair.

What SurveyCake embraces: Traditional-Chinese-first design, generous whitespace, a single trustworthy brand color, transparent tiered pricing, and an enterprise security story. What it avoids: gimmicky gradients, multi-color interactive chrome, and hype-driven marketing language that would undercut a credibility-led pitch.

## 12. Principles

1. **One color, used with discipline.** Green `#3dba90` is the only interactive color. This restraint is the brand's clearest signal of order and trust.
2. **Weight builds hierarchy in CJK.** Traditional Chinese cannot lean on Latin display tricks; SurveyCake moves through 400 → 700 → 900 to organize the page. Stroke mass is authority.
3. **Roomy leading respects the reader.** 1.5–1.75 line-heights give hanzi the vertical air to stay scannable — a CJK-literate design decision, not a Western default.
4. **Calm over flair.** Neutral shadows, alternating gray bands, and generous whitespace project the orderliness an enterprise data tool must convey.
5. **Conservative geometry.** 4px buttons, 8px cards — orderly corners that read as engineering, never as a consumer app.
6. **Credibility before cleverness.** The voice leads with "enterprise-grade" and concrete capability; design follows the same logic — trustworthy first, expressive second.
7. **Accents stay in their lane.** The violet/amber/coral/blue reserve lives only in illustration and data-viz, never on buttons — protecting the green's singular meaning.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable SurveyCake user segments (HR teams, marketers, university researchers, enterprise admins in Taiwan), not individual people.*

**Lin Yi-Chen (林宜蓁), 34, Taipei.** HR manager at a mid-size Taiwanese tech company running quarterly employee-engagement surveys. Chose SurveyCake because it is enterprise-grade and keeps response data securely in a familiar Traditional-Chinese interface. Values that the tool looks orderly and professional when she shares results with leadership.

**Chang Wei (張偉), 41, Hsinchu.** IT administrator evaluating survey platforms for a manufacturing firm. Cares about data security, access controls, and the TEAM/ENTERPRISE tiers. The calm, restrained visual design reassures him that the vendor is serious about handling sensitive internal data.

**Wu Mei-Ling (吳美玲), 29, Taichung.** University research assistant collecting academic survey data. Uses the free BASIC tier extensively and appreciates the rich professional question types ("專業功能與題型"). The clear hierarchy and roomy Chinese typography make long questionnaires easy to build.

**Chen Jia-Hao (陳家豪), 37, Kaohsiung.** Marketing lead at a regional e-commerce brand running customer-satisfaction and NPS surveys. Relies on the green "了解更多" learn-more flow to discover advanced features, and on the transparent BASIC→PRO→TEAM→ENTERPRISE pricing to plan budget.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no surveys yet)** | White canvas. A single charcoal (`#3e3e3e`) line at 18px Noto Sans TC: "尚未建立任何問卷" (No surveys yet). One green CTA: "免費建立問卷". No illustration clutter. |
| **Empty (no responses)** | Muted-gray (`#9b9b9b`) single line: "尚無回覆資料" (No response data yet). Filter/scope summary visible above. |
| **Loading** | Neutral skeleton blocks in `#f2f2f2` at final dimensions. Soft shimmer. No spinner where a skeleton communicates better. |
| **Error (validation)** | Field-level. Coral-adjacent (`#f26659`) border + 14px message below the field describing what is invalid. |
| **Error (action failed)** | Inline banner, neutral surface with `#f26659` accent, plain-language explanation + retry action. No generic "出錯了". |
| **Success (saved)** | Brief green confirmation — `#3dba90` accent, charcoal text: "已儲存" (Saved). Auto-dismiss, no exclamation. |
| **Disabled** | Reduced opacity on surface and text together. Green actions fade to a muted green rather than switching to gray, preserving brand read. |
| **Focus** | `2px solid #3dba90` ring on inputs and interactive elements. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover, focus, button color shift |
| `motion-standard` | 250ms | Card hover lift, dropdown, accordion expand |
| `motion-slow` | 400ms | Section reveals on scroll, hero entrance |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving elements — dropdowns, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Signature motions.**

1. **CTA hover.** The green primary button shifts from `#3dba90` to `#34a07d` over `motion-fast` — a calm, immediate color confirmation, no scale bounce.
2. **Card hover lift.** Feature cards raise their neutral shadow from ambient to elevated over `motion-standard`, a subtle depth cue that the card is interactive.
3. **Scroll reveals.** Feature sections fade and rise a few pixels on entering the viewport over `motion-slow / ease-enter` — orderly, never springy.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, reveals become instant and hover lifts collapse to a simple color change. The site stays fully functional without motion.

**Forbidden.** No spring, no overshoot, no bounce — motion should read as calm and professional, consistent with the enterprise-grade positioning. Decorative wiggle would undercut the trust signal.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Token-level claims (sections 1–9) are sourced from the live Tier 1 playwright
getComputedStyle inspect of https://www.surveycake.com (2026-06-08):
  primary green #3dba90 (rgb(61,186,144)), ink #3e3e3e (rgb(62,62,62)),
  muted #9b9b9b (rgb(155,155,155)), accents #5f54e0/#f5b849/#f26659/#0073b7,
  Noto Sans TC family, hero 42px/900, section 36px/700, CTA 60px/4px,
  outlined 註冊 weight 700, neutral shadows.

Positioning claims (enterprise-grade, BASIC/PRO/TEAM/ENTERPRISE tiers,
Traditional-Chinese-first market, data security emphasis) are read from the
live homepage copy ("企業級的雲端問卷服務", "SurveyCake BASIC 終身免費",
"強大的專業功能與題型", tier labels in nav).

Personas (§13) are fictional archetypes informed by publicly observable
SurveyCake user segments (TW HR teams, marketers, university researchers,
enterprise admins). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "stroke mass as authority", "single green color as
trust signal", "calm over flair") are editorial readings connecting SurveyCake's
enterprise positioning to its observed design system, not direct brand statements.
-->
