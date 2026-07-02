---
id: stayfolio
name: Stayfolio
display_name_kr: 스테이폴리오
country: KR
category: consumer-tech
homepage: "https://www.stayfolio.com/"
primary_color: "#1a1a1a"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=stayfolio.com&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "Editorial monochrome stay-curation platform. Ink ladder near-black (#181818 body / #171719 headings / #1a1a1a nav-logo / #000000 solid CTA). Single saturated accent = promo blue #017bc6 on marketing banners only. Near-shadowless; sharp 0px photo cards; pill controls."
  colors:
    ink: "#181818"
    ink-heading: "#171719"
    ink-brand: "#1a1a1a"
    black: "#000000"
    stay-title: "#333333"
    muted: "#6b6b6e"
    faint: "#979799"
    disabled: "#999999"
    canvas: "#ffffff"
    surface: "#f2f2f2"
    surface-alt: "#f5f5f5"
    hairline: "#dfe0e2"
    hairline-alt: "#cccccc"
    promo-blue: "#017bc6"
    on-dark: "#ffffff"
  typography:
    family: { sans: "Pretendard JP Variable", fallback: "Pretendard" }
    nav:        { size: 16, weight: 600, tracking: 0, use: "Uppercase Latin top-nav labels (FIND STAY, JOURNAL, PRE-ORDER)" }
    section:    { size: 28, weight: 600, lineHeight: 1.29, tracking: -0.56, use: "Editorial section headline (H2)" }
    stay-title: { size: 20, weight: 600, lineHeight: 1.40, tracking: -0.2, use: "Stay / property name (H3)" }
    body:       { size: 14, weight: 400, lineHeight: 1.50, use: "Body copy, captions, UI text" }
  spacing: { xs: 4, sm: 8, base: 16, lg: 20, xl: 24, xxl: 40, section: 64 }
  rounded: { none: 0, button: 20, pill: 100, full: 9999 }
  shadow:
    none: "none"
    soft: "rgba(0,0,0,0.08) 0px 4px 8px"
  components:
    cta-solid: { type: button, bg: "#000000", fg: "#ffffff", radius: "20px", padding: "8px 16px", height: "40px", font: "16px / 500", use: "Solid primary CTA (지도 / Map toggle on FIND STAY)" }
    nav-tab: { type: tab, fg: "#1a1a1a", font: "16px / 600", active: "text #1a1a1a + 2px bottom border #1a1a1a", use: "Uppercase Latin top-nav item (FIND STAY, JOURNAL)" }
    region-toggle: { type: tab, bg: "#ffffff", fg: "#181818", border: "1px solid #dfe0e2", radius: "100px", height: "44px", shadow: "rgba(0,0,0,0.08) 0px 4px 8px", active: "filled white pill", use: "국내/해외 segmented region toggle" }
    search-pill: { type: input, bg: "#ffffff", fg: "#181818", border: "1px solid #dfe0e2", radius: "100px", height: "44px", font: "14px / 400", use: "Hero search / filter pill (어디로 떠날까요?)" }
    stay-card: { type: card, bg: "#ffffff", fg: "#333333", radius: "0px", use: "Editorial stay card — full-bleed photo, sharp 0px corners, no border/shadow" }
    promo-banner: { type: card, bg: "#017bc6", fg: "#ffffff", radius: "0px", use: "Promotional banner / tag — sole saturated color accent" }
    lang-item: { type: listItem, fg: "#999999", font: "14px / 400", use: "Language switch item (한국어 / English), inactive faint grey" }
  components_harvested: true
---

# Design System Inspiration of Stayfolio

## 1. Visual Theme & Atmosphere

Stayfolio (스테이폴리오) is Korea's curated boutique-stay platform, and its homepage behaves less like a booking engine than like a printed travel monograph rendered on screen. The canvas is pure white (`#ffffff`), the photography is full-bleed and edge-to-edge, and nearly all chrome recedes so the imagery of each stay carries the page. Text sits in a refined near-black ink (`#181818`) — never a hard pure-black for reading — which lends the layout a quiet, editorial gravity. There is no chrome-heavy "app" feeling here; the design trusts the space of each property and the restraint of a magazine art director.

The typographic personality is Korean-premium and understated. The system runs on **Pretendard JP Variable** across the entire interface, and the hierarchy is carried almost entirely by weight and size rather than color: editorial section headlines (H2) sit at 28px / weight 600 with tight `-0.56px` tracking (`#171719`), individual stay names (H3) drop to 20px / 600 with `-0.2px` tracking in a softer graphite (`#333333`), and body/UI text settles at a calm 14px / weight 400. Latin navigation labels — `FIND STAY`, `PROMOTION`, `JOURNAL`, `PRE-ORDER` — are set in uppercase at 16px / 600 in the brand ink (`#1a1a1a`), reading like the section dividers of a print catalogue.

What defines Stayfolio is its monochrome discipline. The palette is an *ink ladder* of near-blacks (`#181818` body, `#171719` headings, `#1a1a1a` nav/logotype, pure `#000000` for the one solid CTA — the "지도" map toggle at 20px radius) layered over a cool paper-grey surface system (`#f2f2f2`, `#f5f5f5`) and hairline dividers (`#dfe0e2`, `#cccccc`). Depth is almost entirely flat: `box-shadow: none` across headings, nav, and stay cards, with a single soft lift (`rgba(0,0,0,0.08) 0px 4px 8px`) reserved for the floating region-toggle pill. The one saturated color in the entire system is a promotional blue (`#017bc6`) that appears only on marketing banners and tags — everywhere else the brand is black, white, and photograph. Stay cards themselves use sharp `0px` corners so the image reads as a framed plate, while interactive controls (region toggle, search field) are full `100px` pills.

**Key Characteristics:**
- Full-bleed editorial photography over a pure white (`#ffffff`) canvas — imagery is the interface
- Monochrome *ink ladder*: `#181818` body, `#171719` headings, `#1a1a1a` nav, `#000000` solid CTA
- Single typeface (Pretendard JP Variable) doing all work via weight/size, not color
- Uppercase Latin nav labels at 16px / 600 (`FIND STAY`, `JOURNAL`) — print-catalogue rhythm
- Near-shadowless: `box-shadow: none` everywhere except the floating region pill
- Sharp `0px` photo cards vs. full `100px` pill controls — a deliberate geometric contrast
- One saturated accent only — promo blue (`#017bc6`) confined to marketing banners/tags
- Cool paper-grey surfaces (`#f2f2f2`, `#f5f5f5`) + hairlines (`#dfe0e2`, `#cccccc`) for separation
- Graphite muted ladder (`#6b6b6e` → `#979799` → `#999999`) for secondary/tertiary text

## 2. Color Palette & Roles

### Ink (Near-Black Ladder)
- **Body Ink** (`#181818`): The dominant text color across the entire site — captions, body copy, UI labels. A refined near-black, never pure black, giving reading text an editorial softness.
- **Heading Ink** (`#171719`): Section headlines (H2). A fractionally cooler near-black for the largest editorial titles.
- **Brand Ink** (`#1a1a1a`): The logotype and uppercase Latin nav labels. This is the brand's signature black — the primary_color.
- **Pure Black** (`#000000`): Reserved for the single solid CTA — the "지도" (Map) toggle — and maximum-contrast marks.
- **Stay Title Graphite** (`#333333`): Individual stay/property names (H3). A softer graphite that sits below headings in the hierarchy.

### Muted & Tertiary
- **Muted Slate** (`#6b6b6e`): Secondary text, metadata, supporting captions.
- **Faint Grey** (`#979799`): Tertiary labels and low-emphasis text.
- **Disabled Grey** (`#999999`): Inactive controls such as the unselected language switch (한국어 / English).

### Surface & Neutral
- **Pure White** (`#ffffff`): Page background, card surfaces, text on dark/photo overlays.
- **Paper Grey** (`#f2f2f2`): The primary tinted surface for segmented sections and placeholder blocks.
- **Paper Grey Alt** (`#f5f5f5`): A secondary near-white surface for alternating bands.
- **Hairline** (`#dfe0e2`): Thin borders on the region toggle and search pills — the main separation device in a shadowless system.
- **Hairline Alt** (`#cccccc`): Lighter divider grey for secondary rules.

### Accent
- **Promo Blue** (`#017bc6`): The only saturated color in the system, confined to promotional banners and tags. It is intentionally *not* the brand color — the brand is monochrome; the blue is a marketing signal.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard JP Variable` (with `Pretendard` and system fallbacks) — a single variable family carries the entire interface, Korean and Latin alike.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Nav Label | Pretendard JP | 16px (1.00rem) | 600 | — | normal | Uppercase Latin (FIND STAY, JOURNAL, PRE-ORDER) |
| Section Heading (H2) | Pretendard JP | 28px (1.75rem) | 600 | 1.29 (36px) | -0.56px | Editorial section titles |
| Stay Title (H3) | Pretendard JP | 20px (1.25rem) | 600 | 1.40 (28px) | -0.2px | Stay / property names |
| Body | Pretendard JP | 14px (0.88rem) | 400 | 1.50 | normal | Body copy, captions, UI text |

### Principles
- **One family, weight-led hierarchy**: Pretendard JP Variable does every job. Hierarchy comes from size + weight (600 for titles/nav, 400 for body), never from switching typefaces.
- **Tight tracking scales with size**: -0.56px at 28px headings, -0.2px at 20px stay titles, normal at body. Larger editorial type compresses; reading text stays open.
- **Uppercase Latin as structure**: The uppercase 16px / 600 Latin nav labels function like the running heads of a print magazine, anchoring the editorial tone.
- **Hangul-first reading**: Body sits at a deliberate 14px / 1.5 line-height, generous for dense hangul legibility inside long editorial stay descriptions.

## 4. Component Stylings

### Buttons

**Solid CTA (지도 / Map)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 20px
- Padding: 8px 16px
- Height: 40px
- Font: 16px weight 500 Pretendard JP
- Use: The system's single solid primary action (map toggle on FIND STAY)

**Text CTA (FIND STAY)**
- Text: `#1a1a1a`
- Font: 16px weight 600 Pretendard JP
- Use: Uppercase Latin text actions in the nav; no fill, no border — type only

### Inputs & Forms

**Search / Filter Pill**
- Background: `#ffffff`
- Text: `#181818`
- Border: 1px solid `#dfe0e2`
- Radius: 100px
- Height: 44px
- Font: 14px weight 400 Pretendard JP
- Use: Hero search field ("어디로 떠날까요?") and date/guest filter pills

### Tabs & Toggles

**Region Toggle (국내 / 해외)**
- Background: `#ffffff`
- Text: `#181818`
- Border: 1px solid `#dfe0e2`
- Radius: 100px
- Height: 44px
- Shadow: `rgba(0,0,0,0.08) 0px 4px 8px`
- Active: filled white pill segment
- Use: Domestic / overseas segmented region toggle — the only element carrying a soft shadow

**Nav Tabs**
- Text: `#1a1a1a`
- Font: 16px weight 600 Pretendard JP
- Active: text `#1a1a1a` with a 2px bottom border `#1a1a1a`
- Use: Top navigation (FIND STAY, PROMOTION, JOURNAL, PRE-ORDER)

### Cards & Containers

**Editorial Stay Card**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 0px
- Use: The workhorse — a full-bleed photograph with the stay name (`#333333`, 20px) beneath, no border, no shadow, sharp corners so the image reads as a framed plate

**Promotional Banner**
- Background: `#017bc6`
- Text: `#ffffff`
- Radius: 0px
- Use: Marketing banners and promo tags — the sole saturated-color surface in the system

### List Items

**Language Switch Item**
- Text: `#999999`
- Font: 14px weight 400 Pretendard JP
- Use: Language switch (한국어 / English); inactive items sit in faint grey, the active locale in ink

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.stayfolio.com/, https://www.stayfolio.com/findstay, https://brunch.co.kr/@stayfolio
**Tier 2 sources:** getdesign.md/stayfolio (0 DESIGN.md files — not covered); styles.refero.design/?q=stayfolio (no Stayfolio-specific style; returns default gallery)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px
- Scale: 4px, 8px, 16px, 20px, 24px, 40px, 64px
- Notable: Solid CTA padding lands at 8px 16px; the airy vertical rhythm between full-bleed photo sections is the dominant spacing signal

### Grid & Container
- Full-bleed photography sections stacked vertically, each a "plate" in an editorial layout
- Stay cards arranged in responsive multi-column grids beneath section headlines
- Floating region toggle + search pills sit over the hero as the only persistent interactive chrome
- Content alternates white (`#ffffff`) and paper-grey (`#f2f2f2`) bands for gentle segmentation

### Whitespace Philosophy
- **Imagery over density**: The layout gives each stay generous room; whitespace frames photography like a gallery wall.
- **Flat segmentation**: Sections separate by background tint (`#f2f2f2` vs `#ffffff`) and hairlines (`#dfe0e2`), never by heavy borders or shadow stacks.
- **Editorial rhythm**: Uppercase Latin section labels + tight-tracked H2 headlines create a magazine-like cadence down the page.

### Border Radius Scale
- None (0px): Stay cards, photo plates, promo banners — sharp editorial framing
- Button (20px): The solid map CTA
- Pill (100px): Region toggle, search/filter fields
- Full (9999px): Circular icon buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, stay cards, headings, most surfaces |
| Tint (Level 1) | `#f2f2f2` background shift | Section / card separation without elevation |
| Hairline (Level 2) | `1px solid #dfe0e2` border | Pill controls, dividers |
| Soft lift (Level 3) | `rgba(0,0,0,0.08) 0px 4px 8px` | The floating region toggle pill only |

**Shadow Philosophy**: Stayfolio is a near-shadowless, flat editorial system. Live inspection returned `box-shadow: none` across headings, nav, and stay cards; the only measured elevation is a single soft `rgba(0,0,0,0.08) 0px 4px 8px` on the floating region-toggle pill so it reads as hovering over the hero photograph. Depth otherwise comes from the photography itself and from flat paper-grey (`#f2f2f2`) surfaces divided by thin `#dfe0e2` hairlines. This restraint keeps the focus on imagery and gives the product the calm of a printed catalogue rather than a card-stacked app.

## 7. Do's and Don'ts

### Do
- Let full-bleed photography carry the page — chrome should recede
- Use Pretendard JP Variable for everything; drive hierarchy with weight (600) and size, not color
- Keep text in the near-black ink ladder (`#181818` body, `#171719` headings, `#1a1a1a` nav)
- Reserve pure black (`#000000`) for the single solid CTA
- Use sharp `0px` corners on photo/stay cards so images read as framed plates
- Use full `100px` pills for interactive controls (region toggle, search fields)
- Separate sections with paper-grey tint (`#f2f2f2`) and `#dfe0e2` hairlines, not shadows
- Set uppercase Latin nav labels at 16px / 600 for the print-catalogue rhythm

### Don't
- Spread the promo blue (`#017bc6`) beyond marketing banners — the brand is monochrome
- Use drop shadows for elevation — the system is flat except the one floating pill
- Round the photo/stay cards — sharp `0px` framing is the editorial signature
- Introduce a second typeface — Pretendard JP does every job
- Use pure black (`#000000`) for body text — reserve the softer `#181818`
- Add a second saturated accent color — black, white, and photograph is the whole palette
- Set headlines in a light weight — editorial titles are weight 600
- Use positive letter-spacing on headlines — Stayfolio tracks tight (-0.56px at 28px)

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stay cards stack, floating pills collapse |
| Tablet | 640-1024px | 2-column stay grids, moderate padding |
| Desktop | 1024-1440px | Full multi-column editorial grids, full-bleed hero |

### Touch Targets
- Region toggle and search pills at 44px height — comfortably tappable
- Solid map CTA at 40px height with 8px 16px padding
- Nav labels spaced for touch within the header

### Collapsing Strategy
- Hero: full-bleed photograph maintained; overlaid pills stack/collapse on mobile
- Stay grids: multi-column → 2-up → single stacked column
- Section headlines: 28px H2 compresses on mobile, weight 600 maintained
- White / paper-grey alternating bands keep full-width treatment

### Image Behavior
- Stay photography stays full-bleed and sharp-cornered (`0px`) at every breakpoint
- Cards carry no shadow at any size, consistent with the flat system
- Aspect ratios are preserved so each plate keeps its editorial framing

## 9. Agent Prompt Guide

### Quick Color Reference
- Body text: Body Ink (`#181818`)
- Headings: Heading Ink (`#171719`)
- Nav / logotype: Brand Ink (`#1a1a1a`)
- Solid CTA: Pure Black (`#000000`)
- Stay titles: Graphite (`#333333`)
- Secondary text: Muted Slate (`#6b6b6e`)
- Tertiary / disabled: Faint Grey (`#979799`), Disabled Grey (`#999999`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Paper Grey (`#f2f2f2`), Alt (`#f5f5f5`)
- Hairline: `#dfe0e2`, Alt `#cccccc`
- Promo accent: Promo Blue (`#017bc6`) — banners only

### Example Component Prompts
- "Create a full-bleed hero: edge-to-edge photograph, no chrome. Overlay a region toggle pill — white `#ffffff` background, 1px solid `#dfe0e2` border, 100px radius, 44px height, soft `rgba(0,0,0,0.08) 0px 4px 8px` shadow. Uppercase Latin nav labels at 16px weight 600, `#1a1a1a`."
- "Design an editorial stay card: white `#ffffff` background, full-bleed photo, sharp `0px` corners, no border, no shadow. Stay name below in Pretendard JP 20px weight 600, `#333333`, -0.2px tracking."
- "Build a solid CTA: pure black `#000000` background, white text, 20px radius, 8px 16px padding, 16px weight 500."
- "Create a section band: paper-grey `#f2f2f2` background. Section headline in Pretendard JP 28px weight 600, `#171719`, -0.56px tracking. Cards inside are white `#ffffff` with sharp `0px` corners."

### Iteration Guide
1. Photography leads — keep chrome minimal and let images fill the frame
2. One typeface (Pretendard JP Variable); hierarchy via weight 600 vs 400 and size
3. Stay in the ink ladder: `#181818` body, `#171719` headings, `#1a1a1a` nav, `#000000` solid CTA
4. No shadows except the one floating region pill; separate with `#f2f2f2` tint + `#dfe0e2` hairlines
5. Sharp `0px` corners on cards/photos; full `100px` pills on controls
6. Promo blue (`#017bc6`) only on marketing banners — never structural
7. Tight negative tracking on headlines, normal on body

---

## 10. Voice & Tone

Stayfolio's voice is **quiet, sensory, and curatorial** — the register of a well-read travel editor rather than a booking site. Copy leans into mood and place, inviting rather than selling: the homepage headline "비가 오면 짙어지는 산내음, 숲속 스테이로 떠나요" ("When it rains the scent of the mountains deepens — set out for a forest stay") is descriptive and atmospheric, treating the reader as someone seeking meaning in a stay, not a transaction. Section labels stay in restrained uppercase Latin (`FIND STAY`, `JOURNAL`, `PRE-ORDER`), signalling an editorial, almost printed sensibility.

| Context | Tone |
|---|---|
| Hero / editorial headlines | Sensory, evocative. "비가 오면 짙어지는 산내음, 숲속 스테이로 떠나요." Mood before mechanics. |
| Stay names | Left as the property's own name (엠버퓨어힐, 빌라 마르디, 취호가) — the curator steps back. |
| Nav labels | Minimal uppercase Latin: FIND STAY, PROMOTION, JOURNAL, PRE-ORDER. |
| Journal / magazine | Long-form editorial voice — essays about places and staying, not listings. |
| CTAs | Calm and low-pressure ("지도", "해외 스테이 지금 보러 가기"). |

**Voice samples (verbatim from live homepage):**
- "비가 오면 짙어지는 산내음, 숲속 스테이로 떠나요" — hero editorial headline (sensory, place-led). *(verified live 2026-07-02)*
- "해외 스테이 지금 보러 가기" — invitation-style CTA (calm, no urgency). *(verified live 2026-07-02)*
- "어디로 떠날까요?" — search field prompt (conversational, warm). *(verified live 2026-07-02)*

**Forbidden register**: hard-sell urgency, discount-shouting, exclamation-heavy hype, generic OTA phrasing ("best price guaranteed"). Stayfolio's authority comes from restraint and taste.

## 11. Brand Narrative

Stayfolio (스테이폴리오) is a Korean curation platform for design-forward, independent stays — architecturally and aesthetically distinctive places to sleep that fall outside the standard hotel and OTA channels. Rather than aggregating every available room, Stayfolio's premise is editorial selection: a curated *folio* of stays worth traveling for, presented with the care of a magazine. The name itself — *stay* + *folio* — frames the product as a bound collection of considered places.

The site's information architecture makes this ethos explicit. Alongside `FIND STAY` (the curated inventory of domestic and overseas properties), the navigation carries `JOURNAL` (a long-form magazine about places and the culture of staying) and `PRE-ORDER` (physical publications), positioning the brand as a media property as much as a booking service. The homepage leads with atmosphere — full-bleed photography and sensory headlines — not price or availability.

What Stayfolio refuses, visible in its design, is the dense, promotion-cluttered chrome of mainstream travel platforms: no stacked discount badges, no urgency banners, no card-shadow-heavy "app" surface. What it embraces is a monochrome, photography-first, editorial interface — black, white, and image — where the single saturated blue appears only when a promotion genuinely needs to be flagged. The design *is* the curation: restraint signals taste, and taste is the product.

## 12. Principles

1. **Curation over aggregation.** Stayfolio shows a selected folio, not everything. *UI implication:* present each stay as a considered editorial plate with generous space; never bury it in a dense results grid with promotional noise.
2. **Photography is the interface.** The image carries the decision. *UI implication:* full-bleed, sharp-cornered (`0px`) photography; keep chrome minimal so nothing competes with the picture.
3. **Monochrome discipline.** The brand is black, white, and photograph. *UI implication:* stay in the ink ladder (`#181818`/`#171719`/`#1a1a1a`); reserve the promo blue (`#017bc6`) strictly for marketing flags.
4. **Mood before mechanics.** Copy and layout lead with atmosphere, then function. *UI implication:* sensory headlines and imagery first; search, filters, and price recede into calm pill controls.
5. **Flat and quiet.** Editorial calm beats app-like elevation. *UI implication:* no shadows except the one floating region pill; separate with paper-grey tint and hairlines.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Stayfolio user segments (design-conscious Korean travelers, staycationers seeking distinctive independent stays), not individual people.*

**정다은, 32, 서울.** A design-industry professional planning a quiet weekend away. Distrusts generic OTA listings and chooses Stayfolio because the curation feels like a trusted editor's shortlist rather than an ad-ranked feed. Books on the strength of the photography and the writing.

**김도현, 38, 경기.** A couple's-trip planner who reads the JOURNAL before deciding. Values that each stay is presented with mood and context, not just amenities and price. Appreciates the calm, uncluttered interface.

**이서연, 29, 부산.** A frequent staycationer collecting distinctive stays the way others collect restaurants. Uses the domestic/overseas toggle to browse, saves places for later, and trusts the brand's monochrome, magazine-like taste.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no stays match filters)** | White `#ffffff` canvas. A single Body Ink (`#181818`) line explaining no matches, with a calm text CTA to widen the search. No cluttered illustration. |
| **Empty (saved list, none yet)** | Muted Slate (`#6b6b6e`) single line inviting the user to explore FIND STAY. Quiet and editorial. |
| **Loading (stay grid fetch)** | Paper-grey (`#f2f2f2`) placeholder plates at final card dimensions, sharp `0px` corners. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (image not yet decoded)** | `#f2f2f2` block holds the photograph's aspect ratio; image fades in when ready. |
| **Error (search / network failed)** | Inline message in Body Ink (`#181818`) with a plain-language explanation and a retry. No generic "오류가 발생했습니다" alone. |
| **Error (form validation)** | Field-level note below the pill input describing what's valid, not just "필수". |
| **Success (reservation / inquiry sent)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f2f2f2` blocks at final dimensions, `0px` corners, flat pulse. |
| **Disabled** | Faint / Disabled Grey (`#979799` / `#999999`) text on reduced-opacity surface; the active locale/control stays in ink to preserve the monochrome read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 240ms | Card / image fade-in, sheet, dropdown |
| `motion-slow` | 400ms | Full-bleed hero / gallery transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, images, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is soft and photographic — consistent with the editorial, gallery-like aesthetic. Stay images fade in gently from `#f2f2f2` placeholders at `motion-standard / ease-enter` rather than sliding; pill controls respond to press with a subtle opacity/scale shift. There is no bounce or spring — a curation product signals calm and taste, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and images appear without fade; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on
https://www.stayfolio.com/ and https://www.stayfolio.com/findstay:
- body: Pretendard JP Variable / color rgb(24,24,24) #181818 / 14px / bg #ffffff
- Nav labels FIND STAY / PROMOTION / JOURNAL / PRE-ORDER — rgb(26,26,26) #1a1a1a / 16px / 600
- H2 "비가 오면 짙어지는 산내음, 숲속 스테이로 떠나요" — rgb(23,23,25) #171719 / 28px / 600 / lh 36px / -0.56px
- H3 stay names (엠버퓨어힐, 빌라 마르디, 취호가) — rgb(51,51,51) #333333 / 20px / 600 / 28px / -0.2px
- Solid CTA "지도" (FIND STAY) — bg rgb(0,0,0) #000000 / white / radius 20px / 8px 16px / 16px 500
- Region toggle "국내/해외" — border 1px solid rgb(223,224,226) #dfe0e2 / radius 100px / 44px / shadow rgba(0,0,0,0.08) 0px 4px 8px
- Language switch 한국어/English — rgb(153,153,153) #999999 / 14px
- box-shadow: none across headings/nav/cards (near-shadowless system)
- document.title homepage "스테이폴리오"; /findstay "FIND STAY | 스테이폴리오"

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage (hero H2, CTA label, search prompt).

Brand narrative (§11) is grounded in observable site behavior: Stayfolio (스테이폴리오)
is a Korean curated boutique-stay platform; the nav architecture (FIND STAY / JOURNAL /
PRE-ORDER), the editorial photography-first homepage, and the name (stay + folio) are all
directly observed. Broader company facts beyond the live site are treated as general public
knowledge, not directly quoted from a verified Stayfolio statement this turn.

Personas (§13) are fictional archetypes informed by publicly observable Stayfolio user
segments (design-conscious Korean travelers). Names are illustrative; they do not refer to
real people.

Interpretive claims (e.g., "the design is the curation", "monochrome discipline as a
rejection of OTA clutter") are editorial readings connecting Stayfolio's observed design to
its positioning, not directly sourced Stayfolio statements.
-->
