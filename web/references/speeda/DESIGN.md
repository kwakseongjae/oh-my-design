---
id: speeda
name: SPEEDA (Uzabase)
country: JP
category: saas
homepage: "https://jp.ub-speeda.com/"
primary_color: "#e60f3d"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=jp.ub-speeda.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live primary-CTA crimson (#e60f3d); deep variant (#d30030) is the soft-tint trial CTA text; bright accent crimson (#f72a48) carries inline text emphasis (240 occurrences live). Ink is a soft near-black (#191919), never pure black for body. Near-shadowless, hairline-separated, fully-pill CTAs."
  colors:
    primary: "#e60f3d"
    primary-deep: "#d30030"
    accent: "#f72a48"
    tint: "#ffe8e8"
    ink: "#191919"
    ink-strong: "#000000"
    body: "#282828"
    muted: "#6f6f6f"
    faint: "#a5a5a5"
    canvas: "#ffffff"
    surface: "#f5f5f5"
    surface-alt: "#ededed"
    hairline: "#cbcbcb"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Shorai Sans StdN Demi" }
    display-hero: { size: 32, weight: 400, lineHeight: 1.40, tracking: 0.96, use: "Hero H1, Shorai Sans demi" }
    section:      { size: 24, weight: 400, lineHeight: 1.40, use: "H3 feature heads, Shorai Sans" }
    body:         { size: 13, weight: 400, lineHeight: 1.50, use: "Standard reading text, Shorai Sans" }
    nav:          { size: 14, weight: 400, lineHeight: 1.40, use: "Top nav items, Shorai Sans" }
    button:       { size: 16, weight: 400, lineHeight: 1.00, use: "CTA pill label, Shorai Sans" }
  spacing: { xs: 4, sm: 8, md: 10, base: 18, lg: 20, xl: 40, xxl: 72, section: 92 }
  rounded: { sm: 10, md: 12, lg: 17, full: 9999 }
  shadow:
    none: "none"
  components:
    cta-primary: { type: button, bg: "#e60f3d", fg: "#ffffff", radius: "9999px", padding: "10px 18px", height: "44px", font: "16px / 400 Shorai Sans", use: "Primary download CTA (資料ダウンロード), full pill" }
    cta-trial: { type: button, bg: "#ffe8e8", fg: "#d30030", radius: "9999px", padding: "10px 18px", height: "44px", font: "16px / 400 Shorai Sans", use: "Soft-tint trial CTA (無料トライアル)" }
    nav-link: { type: tab, fg: "#191919", font: "14px / 400 Shorai Sans", active: "accent #f72a48 text on active", use: "Top nav item (ソリューション, 導入事例)" }
    card: { type: card, bg: "#ffffff", radius: "10px", padding: "37px 40px", use: "White feature card, hairline-separated, no shadow" }
    card-feature: { type: card, bg: "#ffffff", radius: "12px", padding: "40px 72px 72px", use: "Large feature panel" }
    input-text: { type: input, bg: "#ffffff", border: "1px solid #cbcbcb", radius: "10px", fg: "#191919", use: "Form input, hairline border, placeholder #a5a5a5" }
    badge-accent: { type: badge, bg: "#ffe8e8", fg: "#d30030", radius: "9999px", font: "13px / 400 Shorai Sans", use: "Status / emphasis pill" }
  components_harvested: true
---

# Design System Inspiration of SPEEDA (Uzabase)

## 1. Visual Theme & Atmosphere

SPEEDA (スピーダ) is Uzabase's economic-information platform — a B2B research and analysis SaaS that puts the world's company, market, and industry data behind one workbench for corporate planning, M&A, R&D, and enterprise sales teams. Its marketing surface reads like a serious, editorial business tool rather than a flashy consumer app: a pure-white canvas (`#ffffff`) banded with a soft cool-grey surface (`#f5f5f5`) and a slightly deeper `#ededed`, with text set in a soft near-black ink (`#191919`) — never pure black for running copy. The single saturated brand hue is a confident crimson (`#e60f3d`), held in reserve almost entirely for the primary call-to-action, so the eye is trained to read that one red as "the next step." This is the disciplined, low-chrome restraint that the Uzabase SaaS Design Division ("DESIGN BASE", whose foundational design language is internally known as FALCON) is known for — one of the most thoroughly documented enterprise B2B design organizations in Japan.

The typographic personality is unmistakably Japanese-premium: every element is set in **Shorai Sans StdN Demi** (将来 / Shorai Sans, a Fontworks family), a humanist CJK sans whose demi weight gives both headings and body a calm, even, slightly editorial texture. The hero H1 runs at 32px with a relaxed 1.40 line-height and a gentle positive tracking of `0.96px` — unusual restraint where most SaaS sites shout their headline. Feature subheads (H3) land at 24px, and dense running copy drops to 13px at a comfortable 1.50 line-height tuned for hangul-adjacent CJK legibility. The result is information-dense but never cramped: the type does the persuading through clarity, not volume.

What distinguishes SPEEDA from its fintech-adjacent peers is its near-total absence of elevation. Live inspection found `box-shadow: none` across the hero, nav, cards, and CTAs; separation is achieved entirely through flat tinted surfaces (`#f5f5f5`, `#ededed`) and thin `#cbcbcb` hairlines. Interactive chrome leans fully into the pill — the crimson primary CTA and the soft-tint trial CTA both run at a full 9999px radius — while content cards stay conservative at a 10–12px corner. The crimson appears in three registers: the saturated `#e60f3d` fill on the primary CTA, a deeper `#d30030` as the soft-tint trial CTA's text, and a brighter `#f72a48` accent that carries inline text emphasis throughout the page (the single most frequent accent color in the live scan). The overall impression is a precise, trustworthy, data-grade business instrument.

**Key Characteristics:**
- Single Shorai Sans StdN Demi family across all headings and body — calm, humanist Japanese-premium texture
- Single saturated crimson (`#e60f3d`) reserved for the primary download CTA — the system's "action" color
- Soft near-black ink (`#191919`) for text instead of pure black — warm, trustworthy, business-grade
- Flat depth: no shadows; tinted `#f5f5f5` / `#ededed` surfaces + `#cbcbcb` hairlines do the separating
- Three-register crimson: fill `#e60f3d`, soft-tint text `#d30030`, inline accent `#f72a48`
- Full-pill CTAs (9999px) over conservative 10–12px content cards
- Soft-tint pill (`#ffe8e8` bg) for the secondary/trial action — low-pressure, on-brand
- Cool-grey neutral ladder (`#282828` → `#6f6f6f` → `#a5a5a5`) for text hierarchy

## 2. Color Palette & Roles

### Primary
- **SPEEDA Crimson** (`#e60f3d`): Primary brand color and CTA background. The saturated red on the document-download button — the system's single "action" color.
- **Crimson Deep** (`#d30030`): Deeper crimson used as the soft-tint trial CTA's text color and for strong red emphasis on light backgrounds.
- **Accent Crimson** (`#f72a48`): A brighter red that carries inline text emphasis and highlighted figures throughout the page — the most frequent accent in the live scan.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white card surfaces, text on crimson/dark.
- **Surface Grey** (`#f5f5f5`): The default cool-grey body surface for segmented sections.
- **Surface Alt** (`#ededed`): A slightly deeper grey for alternating bands and inset blocks.
- **Crimson Tint** (`#ffe8e8`): The very soft red wash behind the trial CTA pill.
- **Hairline** (`#cbcbcb`): Thin borders, dividers, footer surface, and card outlines — the primary separation device in a shadow-free system.

### Text Hierarchy
- **Ink** (`#191919`): Primary text, headings, nav, strong labels — a soft near-black.
- **Ink Strong** (`#000000`): Occasional maximum-contrast emphasis on select headings.
- **Body** (`#282828`): Secondary running copy and descriptions.
- **Muted** (`#6f6f6f`): Tertiary text, captions, metadata.
- **Faint** (`#a5a5a5`): Disabled text, placeholders, lowest-emphasis labels.

### On-color
- **On Primary** (`#ffffff`): White text/icons over the crimson CTA fill.

## 3. Typography Rules

### Font Family
- **Sans (all text)**: `Shorai Sans StdN Demi` (将来 / Shorai Sans, Fontworks), with `sans-serif` fallback — used for every headline, nav item, button label, and paragraph. The "Demi" weight is the document default.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Shorai Sans | 32px (2.00rem) | 400 (demi) | 1.40 (44.8px) | 0.96px | Hero H1 |
| Feature Head | Shorai Sans | 24px (1.50rem) | 400 (demi) | 1.40 | normal | H3 feature subheads |
| Nav Link | Shorai Sans | 14px (0.88rem) | 400 | 1.40 | normal | Top navigation items |
| Button | Shorai Sans | 16px (1.00rem) | 400 | 1.00 | normal | CTA pill labels |
| Body | Shorai Sans | 13px (0.81rem) | 400 | 1.50 (19.5px) | normal | Standard reading text |

### Principles
- **One family, even texture**: Shorai Sans StdN Demi carries the entire system — heads and body share the same humanist demi weight, so hierarchy comes from size and color, not from font swaps.
- **Relaxed line-height**: 1.40 on heads and 1.50 on body keep dense CJK copy legible and unhurried.
- **Gentle positive tracking on the hero**: the hero H1 tracks +0.96px — calm and editorial, the opposite of tight punchy SaaS headlines.
- **Soft ink over pure black**: running text is `#191919`, reserving `#000000` for rare maximum-contrast emphasis.

## 4. Component Stylings

### Buttons

**Primary Download CTA**
- Background: `#e60f3d`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 10px 18px
- Font: 16px Shorai Sans weight 400
- Height: 44px
- Use: Primary "資料ダウンロード" / "資料をダウンロード" call-to-action — the system's single primary action

**Trial CTA (Soft Tint)**
- Background: `#ffe8e8`
- Text: `#d30030`
- Radius: 9999px
- Padding: 10px 18px
- Font: 16px Shorai Sans weight 400
- Height: 44px
- Use: Low-pressure "無料トライアル" secondary action

### Inputs & Forms

**Default**
- Background: `#ffffff`
- Border: 1px solid `#cbcbcb`
- Radius: 10px
- Text: `#191919`
- Placeholder: `#a5a5a5`
- Use: Document-request / contact form text input

### Cards & Containers

**Feature Card**
- Background: `#ffffff`
- Radius: 10px
- Padding: 37px 40px
- Use: White feature card, hairline-separated, no shadow

**Large Feature Panel**
- Background: `#ffffff`
- Radius: 12px
- Padding: 40px 72px 72px
- Use: Spacious feature/explainer panel

### Badges

**Accent Pill**
- Background: `#ffe8e8`
- Text: `#d30030`
- Radius: 9999px
- Font: 13px Shorai Sans weight 400
- Use: Status / emphasis pill on light surfaces

### Navigation
- Background: `#ffffff`
- Text: `#191919`
- Font: 14px Shorai Sans weight 400
- Active: accent crimson `#f72a48` text on the active item
- Use: Top horizontal nav ("課題から探す", "ソリューション", "導入事例", "セミナー・イベント", "資料／ニュース", "ログイン")

### Footer
- Background: `#cbcbcb`
- Text: `#191919`
- Font: Shorai Sans weight 400
- Use: Footer surface and navigation

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://jp.ub-speeda.com/ (homepage, live computed style), https://jp.ub-speeda.com/solutions/market-research/ (solution surface, live computed style)
**Tier 2 sources:** getdesign.md/speeda — 0 DESIGN.md files (not covered); styles.refero.design/?q=speeda — no SPEEDA-specific style listed (generic results only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px, with CTA padding at 10px 18px and card padding at 37px 40px (measured)
- Scale: 4px, 8px, 10px, 18px, 20px, 40px, 72px, 92px
- Notable: large feature panels use a generous 40px 72px 72px padding, giving the content cards an airy, editorial breathing room

### Grid & Container
- Centered single-column hero with the 32px Shorai Sans headline as the anchor
- Feature sections alternate between white (`#ffffff`) and tinted grey (`#f5f5f5` / `#ededed`) full-width bands
- Cards use 10–12px radius and group related features/solutions
- Crimson primary CTA repeated as the consistent conversion anchor across sections

### Whitespace Philosophy
- **Breathing room over density**: despite being a data-heavy research product, the marketing surface is airy, with generous vertical rhythm between sections.
- **Flat segmentation**: sections separate by background tint (`#f5f5f5` / `#ededed` vs `#ffffff`) and `#cbcbcb` hairlines, not by shadow.
- **Pill cadence**: the repeated full-pill CTA creates a consistent conversion rhythm down the page.

### Border Radius Scale
- Small (10px): feature cards, inputs — the workhorse
- Medium (12px): larger feature panels
- Large (~17px): occasional rounded media containers
- Full (9999px): CTAs, badges, pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f5f5f5` / `#ededed` background shift | Card / section separation without elevation |
| Hairline (Level 2) | `1px solid #cbcbcb` border | White card outlines, dividers, footer surface |

**Shadow Philosophy**: SPEEDA is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, cards, and CTAs. Depth and grouping are communicated entirely through flat tinted surfaces (`#f5f5f5`, `#ededed`) and thin `#cbcbcb` hairlines. This is a deliberate modern-flat choice that keeps a dense business-intelligence UI feeling clean, fast, and trustworthy, avoiding the heavy "card stack" look of legacy enterprise dashboards. When emphasis is needed, the system reaches for crimson (`#e60f3d` fill, `#f72a48` accent text), never elevation.

## 7. Do's and Don'ts

### Do
- Set everything in Shorai Sans StdN Demi — the single humanist demi family is the brand's texture
- Reserve crimson (`#e60f3d`) for the primary document-download CTA — keep it the single "action" color
- Use the soft-tint pill (`#ffe8e8` bg, `#d30030` text) for the secondary/trial action
- Use soft near-black ink (`#191919`) for text instead of pure black
- Separate sections with flat tinted surfaces (`#f5f5f5` / `#ededed`) and `#cbcbcb` hairlines, not shadows
- Use full-pill (9999px) geometry on CTAs and badges, 10–12px on content cards
- Keep the hero headline calm with a gentle positive tracking (+0.96px)
- Use the brighter accent crimson (`#f72a48`) for inline text emphasis and highlighted figures

### Don't
- Use drop shadows for elevation — SPEEDA is a flat, shadow-free system
- Spread crimson across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for body text — reserve soft near-black `#191919`
- Swap fonts for headings — one Shorai Sans family carries the whole system
- Set the hero in a heavy bold or tight tracking — the demi weight and relaxed tracking are the voice
- Mix in a second saturated accent hue — crimson is the only saturated color
- Use sharp square corners on CTAs — actions are always full pills
- Crowd dense CJK copy — keep the 1.50 body line-height for legibility

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, CTAs full-width pills |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Primary and trial CTAs at 44px height, full pill for unmistakable targets
- Nav links sized for touch within the top header
- Card padding (37px 40px) keeps tap regions generous

### Collapsing Strategy
- Hero: 32px Shorai Sans headline scales down on mobile, demi weight maintained
- Feature bands: multi-column → stacked single column
- Tinted/white alternating sections maintain full-width treatment
- CTAs expand toward full-width pills on narrow viewports

### Image Behavior
- Product screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain 10–12px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: SPEEDA Crimson (`#e60f3d`)
- CTA text-on-tint / strong red: Crimson Deep (`#d30030`)
- Inline accent emphasis: Accent Crimson (`#f72a48`)
- Soft-tint CTA bg: Crimson Tint (`#ffe8e8`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f5f5f5`), Surface Alt (`#ededed`)
- Heading / body text: Ink (`#191919`)
- Secondary text: Body (`#282828`)
- Muted text: Muted (`#6f6f6f`)
- Faint / disabled: Faint (`#a5a5a5`)
- Hairline / footer: `#cbcbcb`

### Example Component Prompts
- "Create a hero on white background. Headline at 32px Shorai Sans demi (weight 400), line-height 1.40, letter-spacing 0.96px, color #191919. One crimson CTA: #e60f3d background, white text, 9999px radius, 10px 18px padding, 16px Shorai Sans — '資料ダウンロード'. Beside it a soft-tint trial pill: #ffe8e8 background, #d30030 text, 9999px radius."
- "Design a feature card: white background, 10px radius, no shadow, 37px 40px padding. Title 24px Shorai Sans weight 400, #191919. Body 13px Shorai Sans, line-height 1.50, #282828. Separate from neighbours with a 1px solid #cbcbcb hairline."
- "Build a tinted section: #f5f5f5 background, full-width. Heads in #191919 Shorai Sans. Cards inside use white #ffffff with #cbcbcb hairline and 10px radius. Inline emphasis figures in accent crimson #f72a48."
- "Create top nav: white header. Shorai Sans 14px weight 400 links, #191919 text, accent crimson #f72a48 on active. Crimson #e60f3d download CTA right-aligned as a full pill."

### Iteration Guide
1. One Shorai Sans StdN Demi family for everything; hierarchy via size and color
2. Crimson (`#e60f3d`) is the single primary-action color — don't spread it
3. No shadows — separate with `#f5f5f5` / `#ededed` tint and `#cbcbcb` hairlines
4. Full-pill CTAs (9999px), 10–12px cards
5. Text color is `#191919` soft near-black, not pure black for body
6. Gentle positive tracking on the hero; relaxed 1.50 line-height on body
7. Accent crimson `#f72a48` for inline emphasis; soft tint `#ffe8e8`/`#d30030` for the trial pill

---

## 10. Voice & Tone

SPEEDA's voice is **authoritative, calm, and efficiency-focused** — a serious business-intelligence partner that promises to compress slow, expensive research into fast, confident decisions. The product copy is benefit-first and time-anchored ("市場リサーチに時間をかけたくない方へ" / "for those who don't want to spend time on market research"), treating the reader as a busy professional whose time is the scarcest resource. The register is professional Japanese business prose: precise, declarative, and free of hype — it earns trust by being concrete about sources and outcomes, not by being loud.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, capability-framed. "Speeda AI Agentであらゆる経済情報にアクセス". Confident, not superlative. |
| Solution headlines | Pain-anchored and benefit-first. "市場リサーチに時間をかけたくない方へ". |
| Feature subheads | Outcome-first, plain. "業界の市場規模をスピーディに算出できる", "確かな出典の、信頼できるデータを資料に利用できる". |
| CTAs | Direct, low-pressure. "資料ダウンロード", "無料トライアル", "今すぐ資料をダウンロード". |
| Trust / data copy | Concrete about provenance. Emphasizes "確かな出典" (reliable sources) and credibility. |

**Voice samples (verbatim from live surfaces):**
- "Speeda AI Agentであらゆる経済情報にアクセス" — hero headline (capability-framed). *(verified live 2026-06-17, jp.ub-speeda.com)*
- "市場リサーチに時間をかけたくない方へ" — solution page title (pain-anchored). *(verified live 2026-06-17, /solutions/market-research/)*
- "確かな出典の、信頼できるデータを資料に利用できる" — feature H3 (provenance/trust). *(verified live 2026-06-17)*

**Forbidden register**: hype-heavy superlatives, exclamation-stacked urgency, undefined buzzwords without concrete outcomes, consumer-app playfulness that undercuts the data-grade trust posture.

## 11. Brand Narrative

SPEEDA (スピーダ) is the flagship economic-information platform of **Uzabase, Inc. (株式会社ユーザベース)**, the Japanese business-information company founded in **2008** by **新野良介 (Ryosuke Niino)** and **梅田優祐 (Yusuke Umeda)**. Uzabase set out to solve a structural problem in business research: the world's company, market, and industry data was fragmented, expensive, and slow to assemble, so analysts spent days stitching together what should take minutes. SPEEDA, the company's first product, reframed that work as a single workbench — "世界中の経済情報にワンストップでアクセスできる情報プラットフォーム" (a platform for one-stop access to economic information from around the world), as the live meta description states.

The product has since expanded across corporate planning, business development, R&D, enterprise sales (with the FORCAS / FORCAS Sales lineup also in the Speeda family), M&A, and consulting workflows, and now layers a research-grade AI agent ("Speeda AI Agent") on top of its proprietary economic-data foundation — the live hero positions it as delivering the "正しさ" (correctness) and "深さ" (depth) that a general-purpose LLM alone cannot. Design across the Speeda family is owned by Uzabase's SaaS Design Division, **DESIGN BASE**, whose internal design language is known as **FALCON** — one of the most thoroughly worked-through enterprise B2B design systems in Japan, with color, voice & tone, components, and templates documented through a long-running design-org practice.

What SPEEDA refuses, visible in its design: the heavy, intimidating chrome of legacy enterprise dashboards (no shadow-stacked cards), and hype-driven marketing that would undercut a data-trust product. What it embraces: a flat, fast, source-credible interface; a single trustworthy crimson; one calm humanist typeface; and copy that is concrete about provenance and the time it saves.

## 12. Principles

1. **Speed is the product.** The name itself promises velocity — research that took days should take minutes. *UI implication:* every surface front-loads the fastest path to an answer; CTAs are unmistakable full pills and the layout stays scannable.
2. **Credibility through provenance.** Trust is earned by being concrete about sources ("確かな出典"). *UI implication:* surface data provenance plainly; never decorate over it. Calm typography and flat surfaces signal a reference-grade tool.
3. **One action, one color.** Crimson (`#e60f3d`) means "do this next." *UI implication:* reserve the saturated crimson for the primary CTA so the next step is never ambiguous; accent emphasis uses the brighter `#f72a48`, not the CTA fill.
4. **Flat and trustworthy.** Business-grade clarity beats decorative depth. *UI implication:* no shadows; separate with tint and `#cbcbcb` hairlines; keep the page light, fast, and serious.
5. **Calm where it informs.** A research tool should not shout. *UI implication:* one humanist Shorai Sans family, relaxed line-height, gentle positive tracking on the hero — authority without volume.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable SPEEDA user segments (corporate planning, business development, enterprise sales, M&A and consulting professionals in Japan), not individual people.*

**田中 健一 (Kenichi Tanaka), 38, 東京.** Corporate planning manager at a mid-cap manufacturer. Builds market-sizing decks under tight deadlines and values that SPEEDA computes an industry's market size in minutes with cited sources. Distrusts data he can't trace, so the "確かな出典" framing is exactly why he renewed.

**佐藤 美咲 (Misaki Sato), 31, 大阪.** Business-development associate exploring new-business opportunities. Uses SPEEDA to scan adjacent industries quickly before a strategy offsite. Appreciates the calm, uncluttered interface that lets her go deep without feeling like she's wrestling a legacy dashboard.

**山本 大輔 (Daisuke Yamamoto), 45, 名古屋.** M&A advisor at a consulting firm. Lives in company and industry research; cares that the AI agent adds "深さ" rather than generic summaries. Trusts the brand because the product is concrete about where its numbers come from.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Single Ink (`#191919`) line explaining no matching companies/industries, with one crimson CTA to broaden criteria. No illustration clutter. |
| **Empty (saved list, none yet)** | Muted (`#6f6f6f`) single line: nothing saved yet, plus a path back to search. Calm and honest. |
| **Loading (data fetch)** | Skeleton rows on `#f5f5f5` tinted surface at final card dimensions, 10px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (AI agent compute)** | Inline progress indicator; previous content stays visible while the agent works. |
| **Error (query failed)** | Inline message in Ink (`#191919`) with a plain-language explanation and a retry. States the next step, not just "エラーが発生しました". |
| **Error (form validation)** | Field-level message below the input; describes what's valid, not just "必須". |
| **Success (document requested)** | Brief inline confirmation in a calm tone; next-step / download detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f5f5f5` blocks at final dimensions, 10px radius, flat pulse. |
| **Disabled** | Faint (`#a5a5a5`) text on a reduced-opacity surface; crimson actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, CTA press, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast, business-grade aesthetic. CTA pills respond to press with a subtle scale/opacity shift; content sections fade-in from below at `motion-standard / ease-enter`. No bounce or spring — a research and decision tool signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle on two surfaces:
- https://jp.ub-speeda.com/ (homepage)
- https://jp.ub-speeda.com/solutions/market-research/ (solution surface)

Token-level claims (§1-9) are sourced from this live inspection:
- Primary CTA "資料ダウンロード": bg rgb(230,15,61) #e60f3d / color #ffffff / radius 9999px / padding 10px 18px / 16px Shorai Sans / height 44px
- Trial CTA "無料トライアル": bg rgb(255,232,232) #ffe8e8 / color rgb(211,0,48) #d30030 / radius 9999px
- Accent crimson rgb(247,42,72) #f72a48 — most frequent inline text accent (240 occurrences)
- Hero H1: Shorai Sans StdN Demi / 32px / weight 400 / line-height 44.8px (1.40) / letter-spacing 0.96px / color rgb(25,25,25) #191919
- Feature H3: 24px / 400 (e.g. "業界の市場規模をスピーディに算出できる")
- Body p: 13px / line-height 19.5px (1.50) / color #191919
- Cards: white #ffffff / radius 10px (also 12px, 17px) / padding 37px 40px / box-shadow none
- Footer: bg rgb(203,203,203) #cbcbcb / text #191919
- Surfaces: #f5f5f5, #ededed; hairline #cbcbcb; muted #6f6f6f, #a5a5a5; body #282828
- box-shadow: none across hero/nav/headings/cards/CTAs (shadowless system confirmed)
- document.title: "経済情報プラットフォーム スピーダ(Speeda)"
- meta description: "Speedaは、世界中の経済情報にワンストップでアクセスできる情報プラットフォームです。..."

Voice samples (§10) are verbatim from the live surfaces (hero, solution page title, feature H3).

Brand narrative (§11): SPEEDA is the flagship product of Uzabase, Inc. (株式会社ユーザベース),
founded 2008 by Ryosuke Niino (新野良介) and Yusuke Umeda (梅田優祐). The DESIGN BASE / FALCON
design-org context is from the tier1_hints brief. These are widely documented public facts
about Uzabase / SPEEDA; specific details beyond the live surface are general public knowledge,
not directly quoted from a verified Uzabase statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable SPEEDA user segments
(corporate planning, business development, enterprise sales, M&A/consulting professionals in
Japan). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "speed is the product", "credibility through provenance", "flat and
trustworthy as a rejection of legacy enterprise dashboards") are editorial readings connecting
SPEEDA's observed design to its positioning, not directly sourced Uzabase statements.
-->
