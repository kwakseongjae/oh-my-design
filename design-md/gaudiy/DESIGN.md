---
id: gaudiy
name: Gaudiy
country: JP
category: consumer-tech
homepage: "https://gaudiy.com/"
primary_color: "#050505"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=gaudiy.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "Deliberately monochrome 'glitch'/editorial identity. primary = border/CTA ink black (#050505 on recruit, #000000 on corporate); body text never pure black — settles on #333333. No saturated accent hue anywhere; emphasis comes from black-on-white inversion + sharp 0px corners + heavy 1–2px black borders. Surfaces are white #ffffff and grey #eeeeee."
  colors:
    ink: "#050505"
    ink-pure: "#000000"
    text: "#333333"
    muted: "#555555"
    muted-alt: "#777777"
    faint: "#656565"
    canvas: "#ffffff"
    surface: "#eeeeee"
    on-ink: "#ffffff"
  typography:
    family: { display: "Noto Sans JP", latin: "Noto Sans", fallback: "sans-serif" }
    display-hero: { size: 64, weight: 700, lineHeight: 1.40, tracking: -3.2, use: "Hero headline, Noto Sans JP Bold, tight negative tracking" }
    section:      { size: 28, weight: 700, lineHeight: 1.40, tracking: 1.6, use: "Section / label heads, Noto Sans JP Bold, positive editorial tracking" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text + links, sans-serif" }
    cta:          { size: 16, weight: 400, lineHeight: 1.50, use: "Button / link label, sans-serif" }
  spacing: { xs: 8, sm: 9, md: 10, base: 16, lg: 18, xl: 32, xxl: 64 }
  rounded: { sm: 0, md: 0, lg: 0, full: 9999 }
  shadow:
    none: "none"
  components:
    cta-solid: { type: button, bg: "#000000", fg: "#ffffff", radius: "0px", padding: "9px", font: "16px / 400 sans-serif", use: "Solid black inline CTA ('くわしく見る') — black-on-white inversion, sharp 0px corners" }
    cta-outline: { type: button, bg: "#ffffff", fg: "#333333", border: "2px solid #050505", radius: "0px", padding: "0px 16px", height: "64px", font: "16px / 400 sans-serif", use: "Outline CTA on recruit site ('カジュアル面談に申し込む', 'コーポレートサイトへ') — heavy 2px black border, sharp corners" }
    news-card: { type: card, bg: "#ffffff", fg: "#333333", border: "1px solid #000000", radius: "0px", padding: "12px 16px 10px", use: "Bordered news / press card on corporate hero (investment & partnership headlines)" }
    job-card: { type: card, bg: "#ffffff", fg: "#333333", border: "2px solid #050505", radius: "0px", padding: "8px 16px 18px", use: "Open-role card on recruit special site (プロダクトデザイナー, PdM, etc.)" }
    section-band: { type: card, bg: "#eeeeee", fg: "#333333", radius: "0px", use: "Full-width grey section band segmenting the long-scroll corporate page" }
    nav-link: { type: tab, fg: "#333333", font: "16px / 400 sans-serif", use: "Top nav / footer navigation item (Tech Blog, AI Lab, Member note)", active: "ink #050505 text on active" }
    close-round: { type: button, bg: "#000000", fg: "#ffffff", radius: "9999px", use: "Circular 32px close control (modal/banner) — the one round shape in an otherwise sharp system" }
  components_harvested: true
---

# Design System Inspiration of Gaudiy

## 1. Visual Theme & Atmosphere

Gaudiy (株式会社Gaudiy Group) is a Tokyo Web3 fan-community platform — the maker of Gaudiy Fanlink, backed by Sony Group and Bandai Namco — and its public surfaces wear a deliberately monochrome, almost defiant "glitch" identity. The canvas is pure white (`#ffffff`); text is set not in pure black but in a softened charcoal (`#333333`); and structure is drawn with hard, sharp-cornered black borders (`#050505`, `#000000`) rather than soft cards or shadows. There is no saturated accent hue anywhere on the site — no brand blue, no fintech violet. Emphasis is generated entirely through contrast mechanics: black-on-white inversion, heavy 1–2px black rules, and an obstinate refusal to round a single corner. For an entertainment/IP company this reads as a confident counter-move — the opposite of the glossy gradient aesthetic its peers reach for.

The typographic personality is bold Japanese display over quiet functional sans. Headlines run in **Noto Sans JP Bold (weight 700)** at 64px on the hero ("ファンと共に、時代を進める。" / "With fans, advance the era."), pulled tight with a striking `-3.2px` negative tracking that packs the kana-kanji into a dense, engineered block. Below the hero, section heads drop to 28px / weight 700 but flip to **positive** `+1.6px` tracking — a small but distinctive editorial detail that gives label-like subheads ("ファン国家の創造", "たぶんチャンス。") an airy, spaced-out, almost zine-like cadence. Body and UI text fall back to a plain 16px / weight 400 sans-serif (Noto Sans / Noto Sans JP), kept intentionally undecorated so the display type and the black geometry carry all the personality.

What distinguishes Gaudiy from its fintech and consumer peers is its total absence of elevation and color. Live inspection found `box-shadow: none` across the hero, nav, cards, and CTAs. Separation comes from flat grey section bands (`#eeeeee`) and those unmistakable black borders — 1px on corporate news cards, a heavier 2px (`#050505`) on the recruit special site's job and CTA cards. Even the rare inverted element — a solid-black inline CTA ("くわしく見る") or a 32px round close button — is rendered in the same austere black-and-white vocabulary. The muted greys (`#555555`, `#777777`, `#656565`) form a quiet neutral ladder for secondary text. The result is a flat, sharp, editorial-brutalist aesthetic that feels intentional and a little punk: a fan-culture company that designs like a magazine, not a SaaS dashboard.

**Key Characteristics:**
- Monochrome by commitment — no saturated accent hue; black, white, and grey only
- Noto Sans JP Bold (700) at 64px for the hero, with tight `-3.2px` negative tracking
- Positive `+1.6px` tracking on 28px section heads — an editorial, spaced-out detail
- Charcoal `#333333` for body text instead of pure black — softened, readable
- Sharp 0px corners everywhere — buttons, cards, and bands never round
- Heavy black borders as the primary structural device — 1px (`#000000`) corporate, 2px (`#050505`) recruit
- Flat depth: `box-shadow: none` across the system; grey `#eeeeee` bands segment the page
- Black-on-white inversion (white `#ffffff` text on ink) for emphasis instead of color

## 2. Color Palette & Roles

### Ink & Text
- **Border Ink** (`#050505`): The structural black used for the heavy 2px borders on the recruit special site's cards and CTAs. The system's `primary_color` — the color that draws every box.
- **Pure Black** (`#000000`): Used for 1px corporate news-card borders and solid-black inline CTAs / inversion blocks.
- **Charcoal Text** (`#333333`): The dominant text color (223–285 occurrences live) — headings, body, nav, links. Softened black for warmth and readability.
- **Muted Slate** (`#555555`): Secondary text and captions on the recruit site.
- **Muted Alt** (`#777777`): Tertiary / fine-print grey on the corporate site.
- **Faint Grey** (`#656565`): Lowest-emphasis labels and metadata.

### Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, and the text color on inverted black elements.
- **Section Grey** (`#eeeeee`): Full-width grey bands that segment the long-scroll corporate page — the only non-white surface.

### Inversion
- **On Ink** (`#ffffff`): White text and icons on solid-black CTAs, close buttons, and inverted bands. The system's emphasis mechanic is inversion, not color.

## 3. Typography Rules

### Font Family
- **Display / JP**: `Noto Sans JP` — used for all Japanese headlines and section heads. Bold (700) at display sizes.
- **Latin**: `Noto Sans` — Latin-script text and mixed-script UI.
- **Fallback**: generic `sans-serif` — the document default applied to body copy, links, and most UI labels.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Noto Sans JP | 64px (4.00rem) | 700 | 89.6px (1.40) | -3.2px | Hero headline, tight negative tracking |
| Section Head | Noto Sans JP | 28px (1.75rem) | 700 | 39.2px (1.40) | +1.6px | Section / label heads, positive editorial tracking |
| Body | sans-serif | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text, links |
| CTA / Button | sans-serif | 16px (1.00rem) | 400 | 1.50 | normal | Button and link labels |

### Principles
- **Bold JP display, quiet sans body**: Noto Sans JP Bold (700) carries every headline; a plain 16px sans-serif carries every paragraph and label. Weight and font-switch are the hierarchy signals — there is no color hierarchy.
- **Tracking flips with role**: hero display compresses hard (`-3.2px` at 64px) while section heads expand (`+1.6px` at 28px). The negative-then-positive flip is a deliberate editorial signature.
- **Charcoal, not black**: body text sits at `#333333` rather than `#000000` — the softer ink keeps long Japanese copy comfortable while reserving true black for borders and inversion.
- **Two scripts, two fonts**: Noto Sans JP owns Japanese display; Noto Sans / sans-serif owns Latin and functional UI. They never swap roles.

## 4. Component Stylings

### Buttons

**Solid Black CTA**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 0px
- Padding: 9px
- Font: 16px sans-serif weight 400
- Use: Solid black inline CTA ("くわしく見る") — black-on-white inversion, sharp corners

**Outline CTA**
- Background: `#ffffff`
- Text: `#333333`
- Border: 2px solid `#050505`
- Radius: 0px
- Padding: 0px 16px
- Height: 64px
- Font: 16px sans-serif weight 400
- Use: Recruit-site CTA ("カジュアル面談に申し込む", "コーポレートサイトへ") — heavy 2px black border, sharp corners

**Round Close**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 9999px (50%)
- Use: Circular 32px close control — the single round shape in an otherwise sharp system

### Cards & Containers

**News / Press Card**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#000000`
- Radius: 0px
- Padding: 12px 16px 10px
- Use: Bordered press card on the corporate hero (investment & partnership headlines)

**Job-Role Card**
- Background: `#ffffff`
- Text: `#333333`
- Border: 2px solid `#050505`
- Radius: 0px
- Padding: 8px 16px 18px
- Use: Open-role card on the recruit special site (プロダクトデザイナー, PdM, データサイエンティスト)

**Grey Section Band**
- Background: `#eeeeee`
- Text: `#333333`
- Radius: 0px
- Use: Full-width grey band segmenting the long-scroll corporate page (no shadow)

### Badges

**Inverted Label**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 0px
- Font: 16px sans-serif weight 400
- Use: Black inversion label / tag — emphasis without color

### Navigation
- Background: `#ffffff`
- Text: `#333333`
- Font: 16px sans-serif weight 400
- Active: ink `#050505` text on active item
- Use: Top nav / footer items ("Tech Blog", "Gaudiy AI Lab", "Member note", "CEO'S note")

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://gaudiy.com/ (corporate, live computed style), https://special.gaudiy.com/pre-series-c/recruit (recruit special site, live computed style)
**Tier 2 sources:** getdesign.md/gaudiy — no Gaudiy entry ("No designs found for 'gaudiy'"); styles.refero.design/?q=gaudiy — no Gaudiy results
**Conflicts unresolved:** none. (Two-surface variance noted, not a conflict: corporate uses 1px `#000000` borders / `#777777` muted grey; recruit uses heavier 2px `#050505` borders / `#555555` muted grey. Both retained as separate variants in §4.)

## 5. Layout Principles

### Spacing System
- Base unit: ~8px
- Scale: 8px, 9px, 10px, 16px, 18px, 32px, 64px
- Notable: news cards pad at an asymmetric `12px 16px 10px` and job cards at `8px 16px 18px` — the optically-balanced uneven top/bottom is a measured editorial touch, not a token snapped to a grid

### Grid & Container
- Centered single-column corporate hero anchored by the 64px Noto Sans JP headline
- Long-scroll page (corporate body measured ~4474px tall) segmented by full-width grey (`#eeeeee`) bands alternating with white
- News / press items arranged as 1px-bordered cards in a row beneath the hero
- Recruit special site uses a grid of 2px-bordered job-role cards (デザイナー, エンジニア, PdM, 法務, 労務 …)

### Whitespace Philosophy
- **Editorial generosity**: copious whitespace around the sharp black geometry — the borders do the work, so the space around them stays open
- **Flat segmentation**: sections separate by grey (`#eeeeee`) bands and black rules, never by shadow or elevation
- **Border rhythm**: the repeated sharp-cornered black box (1px corporate, 2px recruit) sets a consistent structural cadence down the page

### Border Radius Scale
- Sharp (0px): buttons, cards, bands, nav — the entire interactive and structural system
- Full (9999px / 50%): reserved solely for the circular close control

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, text, most surfaces |
| Tint (Level 1) | `#eeeeee` grey band | Section separation without elevation |
| Rule (Level 2) | 1px–2px solid black border (`#000000` / `#050505`) | Card / CTA outlines, structural division |
| Inversion (Level 3) | Solid `#000000` fill, `#ffffff` text | Emphasis CTA / label — "elevation" by contrast, not shadow |

**Shadow Philosophy**: Gaudiy is a shadowless system. Live inspection found `box-shadow: none` across the hero, nav, news cards, job cards, and CTAs on both the corporate and recruit surfaces. Depth and grouping are expressed entirely through flat grey (`#eeeeee`) bands and hard black borders, and emphasis is generated by black-on-white **inversion** rather than by lifting an element off the page. This is a deliberate editorial-brutalist choice — it keeps the identity sharp, graphic, and a little defiant, the visual opposite of the soft, gradient-and-shadow card stacks common to consumer tech.

## 7. Do's and Don'ts

### Do
- Keep the palette monochrome — black (`#000000` / `#050505`), white (`#ffffff`), and grey (`#eeeeee`) only
- Set body and headings in charcoal `#333333`, not pure black
- Use Noto Sans JP Bold (700) for Japanese display headlines
- Apply tight negative tracking on the hero (-3.2px at 64px) and positive tracking on section heads (+1.6px at 28px)
- Draw structure with sharp-cornered black borders — 1px on corporate, 2px (`#050505`) on recruit
- Keep 0px radius on every button, card, and band
- Use black-on-white inversion (solid `#000000` fill, white text) for emphasis instead of an accent color
- Separate sections with flat grey (`#eeeeee`) bands, never shadows

### Don't
- Introduce a saturated accent hue — the system is intentionally colorless
- Round corners on buttons, cards, or bands — sharpness is the brand
- Use drop shadows for elevation — Gaudiy is flat and shadow-free
- Use pure black (`#000000`) for body text — reserve it for borders and inversion; text is `#333333`
- Soften the hero with a light weight — display is always Bold (700)
- Drop the positive tracking on section heads — the spaced-out label cadence is deliberate
- Reach for gradients or glossy fills — the identity is graphic and flat
- Mix display fonts — Noto Sans JP owns Japanese headlines; sans-serif owns body

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, card grid stacks |
| Tablet | 640-1024px | Moderate padding, 2-up card grids |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column card grids |

### Touch Targets
- Outline CTAs at 64px height with 2px black borders — large, unmistakable tap targets
- Job-role cards at 160px height — generous tappable blocks
- Nav links at 16px within a comfortable header

### Collapsing Strategy
- Hero: 64px Noto Sans JP headline scales down on mobile, weight 700 maintained
- Card grids (news, job roles): multi-column → stacked single column
- Grey / white alternating bands maintain full-width treatment
- Tight hero tracking relaxes slightly at smaller sizes to keep dense Japanese readable

### Image Behavior
- Imagery and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain 0px sharp corners across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Border / structural ink: `#050505` (recruit), `#000000` (corporate)
- Body / heading text: Charcoal (`#333333`)
- Secondary text: Muted Slate (`#555555`)
- Tertiary text: Muted Alt (`#777777`), Faint Grey (`#656565`)
- Background: Pure White (`#ffffff`)
- Section band: Section Grey (`#eeeeee`)
- Inversion fill / emphasis: Pure Black (`#000000`), white text
- Accent: none — monochrome by design

### Example Component Prompts
- "Create a corporate hero on white background. Headline at 64px Noto Sans JP weight 700, line-height 1.40, letter-spacing -3.2px, color #333333. Section subhead at 28px weight 700, letter-spacing +1.6px. No accent color anywhere."
- "Design a news card: white background, 1px solid #000000 border, 0px radius, 12px 16px 10px padding, no shadow. Title at 16px sans-serif weight 400, color #333333."
- "Build a recruit CTA: white background, 2px solid #050505 border, 0px radius, 64px height, 0px 16px padding. Label at 16px sans-serif weight 400, color #333333. On press, invert to solid #000000 fill with #ffffff text."
- "Create a black inversion CTA: solid #000000 background, #ffffff text, 0px radius, 9px padding, 16px sans-serif. Use sparingly for the single primary action."

### Iteration Guide
1. Monochrome only — black `#050505`/`#000000`, white `#ffffff`, grey `#eeeeee`; never add a hue
2. Text is `#333333` charcoal, not pure black; black is for borders and inversion
3. Noto Sans JP Bold (700) for Japanese display; sans-serif 400 for body
4. Tracking: -3.2px on the 64px hero, +1.6px on the 28px section heads
5. 0px radius everywhere except the circular close control
6. Structure with black borders — 1px corporate, 2px (`#050505`) recruit
7. No shadows — separate with `#eeeeee` grey bands and black rules
8. Emphasize by inversion (black fill + white text), not by color

---

## 10. Voice & Tone

Gaudiy's voice is **mission-driven, intellectual, and a little manifesto-like** — a company that frames a fan-community product in almost civilizational terms. The hero "ファンと共に、時代を進める。" ("With fans, advance the era.") and the recurring phrase "ファン国家の創造" ("creating a nation of fans") set the register: ambitious, conceptual, more like a thesis than a sales pitch. Copy on the corporate and recruit surfaces reads as earnest and idea-first — it recruits believers, not just users — and the austere black-and-white design carries the same anti-hype seriousness.

| Context | Tone |
|---|---|
| Hero headlines | Mission-framed, declarative. "ファンと共に、時代を進める。" Conceptual, never hype. |
| Vision phrases | Manifesto-like. "ファン国家の創造" — frames the product as a movement. |
| News / press | Factual, restrained. Investment and partnership headlines stated plainly with dates. |
| Recruit copy | Earnest and inviting. "カジュアル面談に申し込む" — low-pressure, idea-first invitation. |
| Engineering / culture | Open and reflective. Tech Blog, Member note, CEO'S note share thinking, not marketing. |

**Voice samples (verbatim from live surfaces):**
- "ファンと共に、時代を進める。" — corporate hero headline (mission statement). *(verified live 2026-06-17, gaudiy.com)*
- "ファン国家の創造" — vision subhead (movement framing). *(verified live 2026-06-17, gaudiy.com)*
- "採用特設サイト | 株式会社Gaudiy Group" — recruit site title (earnest recruiting register). *(verified live 2026-06-17, special.gaudiy.com)*

**Forbidden register**: Web3 hype clichés ("revolutionary", "to the moon"), token-shilling urgency, exclamation-heavy marketing, and glossy superlatives. The brand's seriousness is signalled by restraint, in both copy and the colorless design.

## 11. Brand Narrative

Gaudiy (株式会社Gaudiy Group) was founded in **2018** by **石川裕也 (Yuya Ishikawa, CEO)** in Tokyo, building Web3 / blockchain infrastructure for fan communities. Its flagship product, **Gaudiy Fanlink**, is a fan-community platform that lets IP and entertainment brands run digital fan experiences — fan tokens, digital collectibles, community engagement — on top of blockchain rails. The company's stated ambition, repeated across its site as "ファン国家の創造" (the creation of a "nation of fans"), reframes fandom from passive consumption into participatory co-creation between rights-holders and their communities.

Gaudiy's credibility rests on its partners: it has announced a strategic partnership with **Sony Group and Bandai Namco Holdings**, and additional funding from major Japanese entertainment companies including **松竹 (Shochiku), 東映アニメーション (Toei Animation), and 東宝 (Toho)** — names live on the corporate hero's news cards alongside a 2025 Pre-Series C raise. This roster of legacy IP and media giants backing a Web3 startup is the company's core proof point: it positions Gaudiy not as a crypto play but as infrastructure for Japan's entertainment industry.

What Gaudiy refuses, visible in its design: the glossy, gradient-soaked, hype-driven aesthetic of typical Web3 and crypto branding. What it embraces: a stark monochrome editorial identity — charcoal text, sharp black borders, no accent color, no shadow — that signals intellectual seriousness and treats fan culture as a subject worthy of a thesis rather than a pitch deck.

## 12. Principles

1. **Fans as co-creators, not consumers.** The "ファン国家の創造" vision treats fandom as participatory. *UI implication:* surfaces should invite contribution and belonging, not just transaction; community and creation come before commerce.
2. **Seriousness over hype.** Gaudiy rejects Web3's hype register in both copy and design. *UI implication:* state facts plainly (partnership and funding headlines with dates), avoid superlatives and urgency; let restraint signal credibility.
3. **Monochrome as conviction.** The colorless palette is a deliberate stance against glossy crypto branding. *UI implication:* never reach for an accent hue to create emphasis — use black-on-white inversion and weight instead.
4. **Structure you can see.** Hard black borders make the layout legible and graphic. *UI implication:* draw containers and CTAs with visible 1–2px black rules and 0px corners; structure should read like an editorial grid.
5. **Flat, fast, and graphic.** No shadows, no elevation, no decoration. *UI implication:* separate with grey bands and rules; keep the page light, sharp, and quick to scan.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Gaudiy audiences (IP/entertainment rights-holders, Japanese fan communities, and the engineers/designers Gaudiy recruits), not individual people.*

**佐藤 美咲, 34, 東京.** A licensing manager at a Japanese anime studio evaluating fan-engagement platforms. Distrusts crypto branding but is reassured by Gaudiy's Sony / Bandai Namco partnership and its serious, un-hyped presentation. Reads the monochrome site as a signal that this is infrastructure, not a token scheme.

**田中 蓮, 27, 大阪.** A devoted fan of a long-running franchise who joins a Fanlink community for collectibles and direct participation. Values feeling like a co-creator in the "fan nation" rather than just a buyer. Notices and trusts that the brand doesn't shout.

**Daniel Park, 31, Tokyo.** A product designer considering a role at Gaudiy after browsing the recruit special site and Tech Blog. Drawn to the editorial-brutalist identity and the idea-first culture; reads the sharp black-and-white system as a team that takes craft and conviction seriously.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no community content yet)** | White canvas. Single charcoal (`#333333`) line at body size explaining nothing's here yet, with one black-bordered CTA to start. No illustration clutter, no color. |
| **Empty (saved / list, none yet)** | Muted Slate (`#555555`) single line stating the list is empty, plus a path back. Calm and factual. |
| **Loading (content fetch)** | Skeleton blocks on `#eeeeee` grey at final card dimensions, 0px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place)** | Inline progress; previous content stays visible. No spinner overlay. |
| **Error (request failed)** | Inline message in charcoal `#333333` with a plain-language explanation and a retry. No generic "エラーが発生しました" alone — states what to do next. |
| **Error (form validation)** | Field-level message below the input, bordered in black; describes what's valid, not just "必須". |
| **Success (action complete)** | Brief inline confirmation in a calm tone; black-on-white inversion may mark the confirmed state. No celebratory emoji, no color burst. |
| **Skeleton** | `#eeeeee` blocks at final dimensions, 0px radius, flat pulse. |
| **Disabled** | Reduced-opacity surface with Faint Grey (`#656565`) text; black borders soften rather than switch to a grey scheme, preserving the monochrome read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus, inversion toggle |
| `motion-standard` | 200ms | Card / section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, sections |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is sharp and functional, matching the graphic, flat aesthetic. The signature interaction is the **inversion flip** — a CTA or label snapping from white-with-black-border to solid-black-with-white-text on hover/press at `motion-fast`. Cards and sections fade in from below at `motion-standard / ease-enter`. In keeping with the brand's "glitch" concept, brief, intentional glitch/cut transitions may punctuate hero reveals, but everyday UI motion stays restrained. No bounce or spring — the identity signals conviction and steadiness, not playful delight. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and any glitch effect is suppressed; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle:
- https://gaudiy.com/ — corporate site. Hero H2 "ファンと共に、時代を進める。" Noto Sans JP 64px / weight 700 / -3.2px tracking / color rgb(51,51,51) #333333 / lh 89.6px. Section heads 28px / 700 / +1.6px tracking. News cards 1px solid rgb(0,0,0) / 0px radius / padding 12px 16px 10px. Solid black inline CTA "くわしく見る" bg rgb(0,0,0) / white text / 0px radius / 9px padding. Grey section band rgb(238,238,238) #eeeeee. box-shadow none throughout. document.title "株式会社Gaudiy Group｜ファンと共に、時代を進める。"
- https://special.gaudiy.com/pre-series-c/recruit (via recruit.gaudiy.com redirect) — recruit special site. Job-role + CTA cards 2px solid rgb(5,5,5) #050505 / 0px radius. CTAs "カジュアル面談に申し込む" / "コーポレートサイトへ" white bg / 2px black border / 64px height. Muted text rgb(85,85,85) #555555. document.title "採用特設サイト | 株式会社Gaudiy Group".

Token-level claims (§1-9) are sourced from these two live inspections.

Voice samples (§10) are verbatim from the live surfaces (corporate hero, vision subhead, recruit title).

Brand narrative (§11): Gaudiy (株式会社Gaudiy Group) founded 2018 in Tokyo; CEO 石川裕也 (Yuya Ishikawa); product Gaudiy Fanlink; Web3 fan-community platform. Sony Group + Bandai Namco strategic partnership and 松竹/東映アニメーション/東宝 funding are stated on the corporate hero's live news cards (verified live 2026-06-17). Founding year and CEO are widely documented public facts about the company, not directly quoted from a verified Gaudiy statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Gaudiy audiences (IP/entertainment rights-holders, Japanese fan communities, prospective Gaudiy hires). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "monochrome as conviction", "editorial-brutalist as a rejection of glossy crypto branding") are editorial readings connecting Gaudiy's observed design to its positioning, not directly sourced Gaudiy statements.
-->
