---
id: note
name: note
country: JP
category: consumer-tech
homepage: "https://note.com"
primary_color: "#41C9B4"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=note.com&sz=128"
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    brand: "#41c9b4"
    theme: "#2cb696"
    theme-dark: "#228d74"
    primary: "#000000"
    canvas: "#f7f9f9"
    surface: "#ffffff"
    text: "#222222"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Hiragino Kaku Gothic ProN", mono: "Hiragino Kaku Gothic ProN" }
    body:    { weight: 400, use: "Long-form Japanese article body" }
    heading: { weight: 700, use: "Titles and headings" }
  spacing: { sm: 8, base: 16 }
  rounded: { sm: 8, md: 8, lg: 8, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#000000", fg: "#ffffff", radius: 8, use: "Primary action (Publish / フォロー / 投稿)" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#222222", radius: 8, use: "Lower-emphasis action" }
    button-theme: { type: button, bg: "#2cb696", fg: "#ffffff", radius: 8, use: "Brand-context action, the teal moment" }
    article-card: { type: card, bg: "#ffffff", fg: "#222222", radius: 8, use: "Article preview on off-white canvas" }
    editor-canvas: { type: card, bg: "#ffffff", fg: "#222222", use: "Distraction-free long-form editor" }
    text-field: { type: input, bg: "#ffffff", fg: "#222222", radius: 8, use: "Forms, search, profile fields" }
  components_harvested: true
---

# Design System Inspiration of note

## 1. Visual Theme & Atmosphere

note (note.com) is Japan's leading creator publishing platform — a place where individuals write essays, sell digital content, and build audiences without the noise of a conventional social feed. Its design philosophy is summarized in three words on its own homepage: **つくる、つながる、とどける** ("create, connect, deliver"). Everything in the interface bends toward one goal: **getting out of the writer's and reader's way so the words can do the work.** note is, at its core, a reading-and-writing space, and its design is correspondingly quiet, generous, and content-first.

The brand color is a distinctive **teal-green** — `#41C9B4` is the logo color, with `#2CB696` as the working theme color and `#228D74` as a darker variant. This blue-leaning green is unusual and memorable in a sea of social-platform blues; note describes it as combining the calm, natural feeling of green with the sincerity of blue. But here's the crucial nuance: note deliberately **does not** flood its product chrome with the teal. Over the platform's evolution, note shifted its *primary action* color toward **black** so that nothing competes with the content — the teal became a brand-identity accent (logo, brand moments) while the working UI runs on near-black, white, and a soft off-white background (`#F7F9F9`) with near-black text (`#222222`). The result is an interface that feels like premium paper: warm-white pages, crisp black type, and a recognizable teal mark that signals "this is note" without shouting.

Typography is content-forward and clean, prioritizing legible Japanese long-form reading over decorative display. The mood is **calm, sincere, and writerly** — note is positioned against the dopamine-feed mechanics of conventional social media; it's a place to *settle in* and read or write something substantial. Soft rounded corners, generous whitespace, a restrained palette, and the disciplined choice to let black (not teal) carry the working UI all reinforce a single message: the content is the point, and note is the quiet, trustworthy frame around it.

**Key Characteristics:**
- **Teal-green brand color** — logo `#41C9B4`, theme `#2CB696`, dark `#228D74` (calm green + sincere blue)
- **Black as the product primary** — note shifted its primary-action color to black so nothing competes with content (teal = brand accent, not the working UI fill)
- Soft off-white background `#F7F9F9` with near-black text `#222222` — premium-paper reading feel
- Content-first, writerly, calm — positioned *against* dopamine-feed social mechanics
- Generous whitespace and clean long-form Japanese typography — built to *settle in and read*
- Soft rounded corners and a restrained palette — quiet, trustworthy frame around the content
- The teal mark signals "this is note" without dominating the interface
- Reading-and-writing space: discovery is editorial/curated, not endless-scroll engagement-bait

## 2. Color Palette & Roles

note's color system is published in its brand/help resources. The teal is the brand identity; the working UI runs on black/white/off-white so content leads.

### Brand
- **note Teal (Logo)** (`#41C9B4`): The logo color and primary brand identity. A blue-leaning green — calm + sincere. Used for the brand mark and brand moments.
- **note Theme** (`#2CB696`): The working theme/accent teal — slightly deeper, used for accents, links, selected/brand states.
- **note Theme Dark** (`#228D74`): Darker teal for hover/pressed/emphasis on the theme color.

### Product Primary
- **Black** (`#000000` / near-black): The product's primary-action color. note deliberately uses black (not teal) for primary buttons and key UI so content stays dominant. Teal is reserved as brand accent.

### Surface
- **Off-White Background** (`#F7F9F9`): The page background — a soft, slightly cool off-white; premium-paper reading surface, never pure stark white.
- **White** (`#FFFFFF`): Card / content surfaces, editor canvas.

### Text
- **Near-Black Text** (`#222222`): Primary text — article body, titles, UI labels. Warm-black for comfortable long-form reading.
- **Secondary / Muted**: mid-grays for metadata, timestamps, captions (kept low-contrast so body text leads).

### Notes
- The teal family doubles as the **per-publication theme color** — note pro lets organizations set their own theme color, so teal is the default brand identity rather than a hard-locked single accent.

## 3. Typography Rules

### Font Stack
note prioritizes clean, legible Japanese long-form rendering using a system/web font chain (Hiragino / Noto-class Japanese fonts with platform fallbacks). The editorial priority is reading comfort for substantial text, not decorative display type.
```
-apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", Meiryo, sans-serif
```

### Conventions
- **Content-forward scale**: comfortable article body size with generous line-height for long-form Japanese reading; restrained, clear heading tiers.
- **Hierarchy from size + weight + whitespace** — not from loud color (the palette is deliberately quiet).
- **Body weight regular**; titles/headings bolder. Reading comfort beats display drama.
- Always carry the Japanese-native font chain; the platform is Japanese-first long-form text.

## 4. Component Stylings

### Buttons

**Primary**
- Background: Black (`#000000` / near-black)
- Text: `#FFFFFF`
- Radius: soft rounded (pill or `8px`+)
- Use: The primary action (Publish / フォロー / 投稿) — black so it doesn't compete with content

**Secondary / Outline**
- Background: `#FFFFFF`
- Text: `#222222`
- Border: `1px solid` mid-gray
- Radius: soft rounded
- Use: Lower-emphasis actions beside a primary

**Brand / Theme accent**
- Background or text: note Theme `#2CB696`
- Use: Brand-context actions, links, selected states — the teal moment

**Disabled**
- Background: light gray
- Text: muted gray
- Use: Unavailable actions

### Cards

**Article / Note Card**
- Background: `#FFFFFF`
- Text: `#222222`
- Radius: soft rounded corners
- Use: Article preview — thumbnail + title + author + metadata, floating on `#F7F9F9`; content-led, minimal chrome

### Editor

**Writing Canvas**
- Background: `#FFFFFF` (or `#F7F9F9` ambient)
- Text: `#222222`
- Use: The distraction-free long-form editor — the heart of "つくる"; chrome recedes, the page is mostly text

### Inputs

**Text Field**
- Background: `#FFFFFF`
- Text: `#222222`
- Border: `1px solid` mid-gray
- Radius: soft rounded
- Focus: accent in note Theme `#2CB696` (or black)
- Use: Forms, search, profile fields

## 5. Layout Principles

### Density
note is **low density, high whitespace** — a reading platform should breathe. Article pages center a single column of text with generous margins; the home/discovery surfaces use a calm card grid, not a packed feed.

### Structure
- Reading view: centered single-column body, generous line-length and margins (premium-paper feel)
- Discovery: editorial/curated card grid on `#F7F9F9`
- Editor: distraction-free canvas, chrome minimized
- Whitespace is a primary design tool — the empty space frames the words

## 6. Depth & Elevation

note reads **flat and paper-like**. Depth comes from the off-white-vs-white surface contrast and soft rounded corners, not from heavy shadows. The aesthetic is print/editorial, not material-elevated.

- Cards: minimal/no shadow; `#F7F9F9` page vs `#FFFFFF` card separates them
- Dropdowns / modals: light shadow + scrim
- The reading surface stays calm — no dramatic elevation that would pull focus from text

## 7. Do's and Don'ts

- **DO** let content lead — use **black** for the primary action so nothing competes with the writing. **DON'T** flood the UI with teal; the teal is a brand accent, not the working fill.
- **DO** use the off-white `#F7F9F9` reading background. **DON'T** use stark pure white for long-form pages — the soft off-white is the premium-paper feel.
- **DO** reserve the teal (`#41C9B4` logo / `#2CB696` theme) for the brand mark, links, and brand moments. **DON'T** scatter it across every control.
- **DO** prioritize generous whitespace and a comfortable reading column. **DON'T** pack the page like an engagement feed — note is a place to settle in.
- **DO** use near-black `#222222` text for comfortable long-form reading. **DON'T** use low-contrast body text.
- **DO** keep chrome minimal in the editor and reading views. **DON'T** add feed-style dopamine mechanics — note is positioned against that.
- **DO** use soft rounded corners. **DON'T** use sharp utilitarian corners — note feels warm and writerly.

## 8. Responsive Behavior

| Width | Behavior |
|---|---|
| Desktop | Centered reading column with wide margins; discovery card grid; sidebar where relevant |
| Tablet | Reading column stays centered; card grid reflows to fewer columns |
| Mobile | Single-column reading and feed; chrome minimizes; editor goes full-bleed text; mobile is a core reading context |

### Touch & Mobile
- Reading column width caps for comfortable line-length on large screens; goes full-width on mobile
- Touch targets comfortable; the writing/reading experience is the priority at every size
- Images in articles scale responsively within the reading column

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand teal: logo `#41C9B4`, theme `#2CB696`, dark `#228D74`
- Product primary action: **Black** `#000000` (content-first; teal is accent only)
- Page bg: off-white `#F7F9F9`; card/editor bg `#FFFFFF`
- Text: `#222222`
- Radius: soft rounded (pill / `8px`+)

### Example Component Prompts
- "Create a note primary button: **black** bg, white text, soft rounded corners. Note: note uses black (not its teal brand color) for the primary action so content stays dominant. Place it on an off-white `#F7F9F9` page."
- "Build a note article card: white bg, soft rounded corners, thumbnail + title (bold) + author + metadata, text `#222222`, floating on `#F7F9F9`. Minimal chrome — the title and image lead."
- "Design a note reading view: centered single text column with generous margins on `#F7F9F9`, body text `#222222` at comfortable size and line-height for long-form Japanese. Use the teal `#2CB696` only for inline links."
- "Create a note brand accent moment: the teal `#41C9B4` logo mark + a `#2CB696` 'フォロー' or link accent. Keep it sparing — teal signals 'this is note,' it doesn't fill the UI."

### Iteration Guide
1. **Black is the product primary** — note moved primary actions to black so content leads. Teal is brand accent only.
2. **Off-white `#F7F9F9` reading background**, not stark white — premium-paper feel.
3. **Teal (`#41C9B4` / `#2CB696`) is sparing** — logo, links, brand moments.
4. **Generous whitespace + centered reading column** — note is a place to settle in, not a feed.
5. **Text `#222222`** for comfortable long-form reading.
6. **Soft rounded corners**, warm and writerly.
7. **Minimal chrome** in editor and reading views — no dopamine-feed mechanics.

---

## 10. Voice & Tone

note's voice is **calm, sincere, and creator-respecting** — the platform's stance (つくる、つながる、とどける: create, connect, deliver) frames everyone as a maker with something worth sharing. The copy never adopts the hype, urgency, or vanity-metric pressure of engagement-driven social platforms. It writes in warm, plain polite Japanese (です・ます調), treating the writer as a respected creator and the reader as someone who came to *read*, not to be hooked. The whole emotional register is the opposite of a feed: unhurried, dignified, and quietly encouraging of the act of making.

| Context | Tone |
|---|---|
| Buttons | Short sincere JP verb — `投稿する`, `フォロー`, `スキ`. Inviting, never urgent. |
| Editor / writing | Encouraging and unobtrusive — get out of the writer's way; gentle prompts, never pressure. |
| Discovery | Editorial and curated — "今日のおすすめ" framing, not "trending / don't miss out." |
| Empty states | Warm invitation to create or read; never implies failure. |
| Errors | Calm, blameless, one sentence + fix. |
| Success (published) | Sincere, dignified confirmation — a piece of work has been shared, treated with respect. |
| Community (スキ / comments) | Warm and supportive; "スキ" (like) is gentle appreciation, not a vanity-metric arms race. |

**Forbidden patterns.** Engagement-bait and FOMO ("今すぐ", "見逃すな"), vanity-metric pressure, hype superlatives (`バズる`, `話題沸騰`), urgency on creative actions, exclamation-mark shouting, and anything that treats writing as content-to-optimize rather than work-to-respect. note is sincere by design.

**Voice samples.**
- `つくる、つながる、とどける` — note's stated platform thesis (create / connect / deliver). <!-- verified: note.com homepage tagline, live inspect 2026-05-19 (page title "note ――つくる、つながる、とどける。") -->
- `投稿する` — the publish action; sincere, unhurried. <!-- illustrative: standard note-register JP action label; not quoted verbatim from a specific live screen -->
- `スキ` — note's gentle appreciation reaction (its "like"), framed as warmth not a vanity metric. <!-- illustrative / widely-known note convention -->

## 11. Brand Narrative

note (operated by note, Inc.) was built as a deliberate alternative to the engagement-driven social web: a place where individual creators — writers, illustrators, musicians, photographers — could publish substantial work, build a direct relationship with readers, and even sell their content, *without* the dopamine mechanics, algorithmic noise, and vanity-metric pressure of conventional social media. Its three-word thesis, **つくる、つながる、とどける** (create, connect, deliver), captures the full loop: a creator *makes* something, *connects* with an audience, and *delivers* it directly to the people who want it. <!-- source: note.com homepage tagline + platform positioning, live inspect 2026-05-19 -->

The design language is the visible expression of that anti-feed stance. **One**, *content must lead* — which is why note made the unusual, disciplined choice to shift its primary-action color to **black**, so that no UI element (not even its own teal) competes with the writing. **Two**, the surface should feel like *premium paper* — hence the soft off-white `#F7F9F9` background, near-black `#222222` text, generous whitespace, and a centered reading column that gives long-form Japanese room to breathe. **Three**, the brand should be *calm and sincere*, not loud — hence the distinctive teal (`#41C9B4`), a blue-leaning green chosen to feel natural and trustworthy rather than the aggressive blue of conventional social platforms, used as a recognizable mark rather than a wash.

What note refuses: the endless-scroll engagement loop, the trending-now FOMO, the vanity-metric arms race, and any design that treats a piece of writing as content to be optimized rather than work to be respected. note chooses the dignity of the page — and builds its entire visual language to protect it.

## 12. Principles

1. **Content leads; the UI recedes.** A reading-and-writing platform succeeds when the words dominate. *UI implication:* Primary actions are black, not brand-teal; chrome is minimal; whitespace frames the content. Nothing competes with the writing.

2. **The page feels like premium paper.** Reading long-form Japanese should be comfortable and dignified. *UI implication:* Off-white `#F7F9F9` background, near-black `#222222` text, generous line-height, a width-capped reading column. Never stark, never cramped.

3. **The teal is identity, not decoration.** note's blue-green is a recognizable brand mark. *UI implication:* Use `#41C9B4` / `#2CB696` for the logo, links, and brand moments — sparingly. Don't scatter it across the working UI; that would re-introduce the noise the brand rejects.

4. **Anti-feed by design.** note is positioned against dopamine-driven social mechanics. *UI implication:* No FOMO, no vanity-metric arms race, no engagement-bait patterns. Discovery is editorial/curated; "スキ" is gentle appreciation, not a competition.

5. **Respect the creator.** Everyone on note is a maker. *UI implication:* The editor is distraction-free and encouraging; publishing is dignified; copy treats writing as work to respect, not content to optimize.

## 13. Personas

*Personas are fictional archetypes informed by note's publicly-described user base (Japanese creators and readers — writers, illustrators, makers), not real individuals.*

**森田 あや (Aya Morita), 31, Tokyo.** Freelance writer who publishes essays and a paid membership on note. Chose note over social platforms because it respects long-form work and lets her sell directly to readers. Loves the distraction-free editor and the calm, paper-like reading view. Hates anything that feels like an engagement-bait feed.

**佐々木 涼 (Ryo Sasaki), 24, Sapporo.** Reader who comes to note to read substantial essays on his commute — not to scroll. Follows a handful of writers, leaves "スキ" when something moves him. Values that note feels unhurried and sincere, unlike the platforms he uses for quick social updates.

**note pro 担当 / 企業 (Org account manager), 40, Osaka.** Runs a company's owned-media on note pro, where they set a custom theme color. Appreciates that note's default identity is the teal but the platform lets the brand express its own color — content and brand both get respect, neither shouts.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no articles yet)** | Off-white canvas, one warm line (`#222222`) inviting the user to write their first note, plus a black primary to open the editor. Encouraging, never blaming. |
| **Empty (search/discovery no results)** | Calm single line + curated suggestions; editorial framing, not "nothing found, sorry." |
| **Loading (feed/article)** | Skeleton blocks at final dimensions on `#F7F9F9`; gentle shimmer; reading column reserves its width so text doesn't jump. |
| **Loading (inline/publish)** | In-button spinner; black button keeps its shape; label swaps to a loading state. |
| **Error (field)** | Gentle border swap + one calm helper line; cause + fix, sincere tone. |
| **Error (page/network)** | Soft notice on off-white; one sentence + retry. No alarm, no apology-flood. |
| **Success (published)** | Dignified confirmation — the work has been shared and delivered (とどける). Sincere, not celebratory-loud. |
| **Disabled** | Light-gray fill, muted text. Palette swap is the signal. |
| **Skeleton** | Neutral blocks at exact final size; reading column width preserved; respects reduced-motion. |
| **Like (スキ)** | Gentle reaction animation in the teal — warm appreciation, never a vanity-metric spectacle. |

## 15. Motion & Easing

note's motion is **gentle, unhurried, and reading-respecting** — it supports a calm experience and never feels like attention-grabbing feed animation.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle commits, selection |
| `motion-fast` | 150ms | Button hover/press, スキ tap |
| `motion-standard` | 250ms | Card reveal, dropdown, image fade-in |
| `motion-modal` | 300ms | Modal/dialog enter-exit |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | The default |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Things arriving (cards, modals) |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Dismissals |
| `ease-soft` | `cubic-bezier(0.34, 1.15, 0.64, 1)` | **Reserved** — a small soft overshoot for the スキ (like) reaction only |

**Spring stance.** A single, restrained soft overshoot is permitted on the スキ reaction (the warm, human moment of appreciating someone's work). Everywhere else motion stays calm and standard — no kinetic flourish that would distract from reading. note is unhurried by design.

**Signature motions.**
1. **Article image fade-in.** Images in the reading column fade in `opacity 0→1` over `motion-standard / ease-standard` as they load — calm, no slide.
2. **スキ (like) tap.** The teal heart/like scales `1.0 → 1.12 → 1.0` over `motion-standard / ease-soft` — the one warm overshoot, fitting an appreciation gesture.
3. **Card/feed reveal.** Discovery cards fade in over `motion-standard / ease-standard`; no aggressive slide-in that would read as a refreshing feed.
4. **Modal enter.** Scrim fades in; dialog appears with opacity + slight translate over `motion-modal / ease-enter`. Calm and dignified.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` collapse to `motion-instant`; the スキ overshoot flattens to a simple fill; image and card fade-ins become immediate. The reading experience never depends on motion.

<!--
OmD v0.1 Sources — note

Tier 1 (live + brand resources, 2026-05-19):
- note.com (live inspect) — page title "note ――つくる、つながる、とどける。" confirms the
  three-word thesis; off-white reading surface + near-black text observed.
- note brand/help resources (WebSearch 2026-05-19, anoiro.com/themes/note + help.note.com
  brand guideline + brandcolor.info/note): logo color #41C9B4, theme color #2CB696,
  dark theme #228D74, background #F7F9F9, text #222222.
- note designer official article (note.com/note_dsn "コンテンツにより集中できるデザインに。
  noteのプライマリーカラーが黒色になるまで") — confirms note shifted its PRIMARY color to
  BLACK so content leads; teal became brand accent. This is the key §1/§7/§12 nuance.

Verified vs assumed:
- VERIFIED: teal palette (#41C9B4 / #2CB696 / #228D74), bg #F7F9F9, text #222222, the
  つくる・つながる・とどける thesis, and the black-primary-for-content-focus shift.
- INFERRED: component-level button/card/input variants in §4 (note publishes brand colors and
  the black-primary principle, but exact per-component token values are mapped from those).
  Font stack is a representative JP-first chain. Motion tokens (§15) duration values are
  illustrative. Voice samples marked illustrative are not verbatim live strings except the
  homepage thesis.
- Personas (§13) are fictional archetypes of note's described creator/reader user base.
-->

---

**Verified:** 2026-05-19 (omd:add-reference — JP batch)
**Tier 1 sources:** note.com (live — "つくる、つながる、とどける" thesis, off-white reading surface); note brand/help resources + note_dsn designer article (logo teal #41C9B4 / theme #2CB696 / dark #228D74 / bg #F7F9F9 / text #222222; PRIMARY action color shifted to BLACK for content-focus).
**Tier 2 sources:** anoiro.com / brandcolor.info (teal color confirmation); getdesign.md / refero not separately fetched.
**Conflicts unresolved:** none. Brief-supplied #41C9B4 confirmed as the logo color; documented the important nuance that note's *product primary action* color is black (teal = brand accent).
