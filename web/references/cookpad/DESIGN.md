---
id: cookpad
name: Cookpad
country: JP
category: consumer-tech
homepage: "https://cookpad.com"
primary_color: "#FF9933"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=cookpad.com&sz=128"
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#FF9933"
    brand: "#FF9933"
    canvas: "#F8F6F2"
    surface: "#FFFFFF"
    cream-tint: "#FEF9EE"
    warm-gray: "#ECEBE9"
    foreground: "#0F0F0F"
    body: "#4A4A4A"
    muted: "#4A4A4A"
    on-primary: "#FFFFFF"
    accent-yellow: "#E9B83F"
    pale-yellow: "#FAF5D7"
  typography:
    family: { sans: "Noto Sans" }
    section:  { size: 22, weight: 700, lineHeight: 1.3, use: "Section headings" }
    title:    { size: 16, weight: 600, lineHeight: 1.4, use: "Recipe card title" }
    button:   { size: 16, weight: 600, lineHeight: 1.4, use: "Primary button label" }
    body:     { size: 16, weight: 400, lineHeight: 1.5, use: "Body / recipe meta / category label" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 8, md: 8, lg: 8, full: 9999 }
  shadow:
    soft: "none — depth via warm cream background separating white cards"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#FF9933", fg: "#FFFFFF", radius: 8, padding: "8px 24px", font: "16/600", use: "Main action — search, post recipe, sign up" }
    button-secondary: { type: button, bg: "#FFFFFF", fg: "#FF9933", radius: 8, use: "Outline, 1px #FF9933 border — lower-emphasis beside primary" }
    button-text: { type: button, fg: "#4A4A4A", use: "Transparent tertiary / navigation action" }
    button-disabled: { type: button, bg: "#ECEBE9", fg: "#4A4A4A", use: "Unavailable action" }
    category-tile: { type: button, fg: "#0F0F0F", radius: 8, padding: "16px", font: "16/400", use: "Ingredient/category navigation — large tappable icon + label" }
    recipe-card: { type: card, bg: "#FFFFFF", fg: "#0F0F0F", radius: 8, use: "Food photo top, title + meta below, floating on cream page" }
    promoted-card: { type: card, bg: "#FEF9EE", radius: 8, use: "Featured / promoted recipe region" }
    search-input: { type: input, bg: "#FFFFFF", fg: "#0F0F0F", radius: 8, padding: "12px 16px", use: "Central recipe search; focus ring in #FF9933" }
    rating-badge: { type: badge, bg: "#FAF5D7", fg: "#4A4A4A", radius: 8, use: "Ratings, つくれぽ counts, promoted labels" }
---

# Design System Inspiration of Cookpad

## 1. Visual Theme & Atmosphere

Cookpad (クックパッド) is Japan's dominant recipe-sharing platform — used by more than half the country's population at least once a month — and its visual identity is built to feel like a **warm, well-lit home kitchen**, not a glossy food magazine. The single most important atmospheric decision is the background: Cookpad does not sit on pure white. The working surface is a **warm off-white** (`#F8F6F2`, a soft cream), which immediately softens the whole interface and makes the food photography (the real star) feel like it's resting on a clean wooden countertop rather than a clinical screen. Recipe cards float on that cream as crisp white tiles, and the brand's **friendly orange** (`#FF9933`) appears on the primary action and brand mark like a pop of carrot or persimmon.

The mood is **homey, appetizing, and unintimidating**. Cookpad's premise is that everyday home cooking — not chef-grade technique — should be fun, so the design avoids anything that reads as elite or fussy. There are no dark moody food-blog aesthetics, no celebrity-chef polish; instead, generous warm neutrals, rounded `8px` corners that feel soft and approachable, and large, mouth-watering recipe photos. Text is a near-black (`#0F0F0F`) for crisp readability against the cream, with a charcoal gray (`#4A4A4A`) for chrome and secondary UI. The primary button is a confident solid orange with white text and semibold (600) weight — friendly but clear.

Typography leads with **Noto Sans** backed by a system-font chain (`system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`), rendering Japanese and alphanumerics cleanly without a bespoke webfont. Body sits at a comfortable 16px. The overall effect is a platform that feels like it's *rooting for you* in the kitchen — approachable, warm, photo-forward, and built so a tired parent on a Tuesday night can find dinner in three taps.

**Key Characteristics:**
- **Warm off-white background** `#F8F6F2` (cream) — never pure white; the signature "home kitchen" canvas
- **Friendly orange** `#FF9933` (verified live) as the primary action + brand color — appetizing, not corporate
- White recipe tiles floating on the cream base for crisp food-photo presentation
- Near-black text `#0F0F0F` for readability; charcoal `#4A4A4A` for chrome/secondary
- Soft, approachable **`8px` border-radius** on buttons, cards, and category tiles
- Photo-forward: large, mouth-watering recipe images are the primary content
- **Noto Sans-led** system font stack; comfortable 16px body
- Primary button: solid orange, white text, 16px **weight 600** — friendly but clear
- Warm accent neutrals (e.g. `#FEF9EE` cream tint, `#ECEBE9` warm gray) keep the palette cozy
- Homey, unintimidating mood — everyday cooking made fun, never chef-elite

## 2. Color Palette & Roles

Values below are observed live from cookpad.com/jp computed styles (2026-05-19), supplemented by warm-neutral tints visible in the same render.

### Brand
- **Cookpad Orange** (`#FF9933`): RGB `rgb(255, 153, 51)`. The primary brand color — primary buttons, brand mark, key accents. Friendly, appetizing orange.
- **Orange on white**: primary button uses `#FF9933` bg with `#FFFFFF` text.

### Surface
- **Warm Off-White / Cream** (`#F8F6F2`): RGB `rgb(248, 246, 242)`. The signature page background — soft cream, never pure white.
- **Card White** (`#FFFFFF`): Recipe cards and content tiles float on the cream.
- **Cream Tint** (`#FEF9EE`): RGB `rgb(254, 249, 238)`. Subtle warm fill for highlighted/promoted regions.
- **Warm Gray Surface** (`#ECEBE9`): RGB `rgb(236, 235, 233)`. Dividers, subtle fills.

### Text
- **Near-Black Text** (`#0F0F0F`): RGB `rgb(15, 15, 15)`. Primary text — recipe titles, body, on the cream and on white cards.
- **Charcoal** (`#4A4A4A`): RGB `rgb(74, 74, 74)`. Chrome, secondary text, icon default, input text.
- **White** (`#FFFFFF`): Text on the orange primary button.

### Accent / Misc
- **Warm Yellow** (`#E9B83F`): RGB `rgb(233, 184, 63)`. Secondary warm accent (ratings/highlights), observed in the render.
- **Pale Yellow Tint** (`#FAF5D7`): RGB `rgb(250, 245, 215)`. Light highlight fill.
- **Scrim** (`rgba(0,0,0,0.2)`): Image/overlay darkening on photo tiles.

## 3. Typography Rules

### Font Stack
```
noto-sans, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, arial, sans-serif
```
Cookpad leads with Noto Sans for clean Japanese + alphanumeric rendering, then falls back to each platform's system font. No bespoke brand webfont — recipes load fast on every device.

### Size Scale (observed)
| Use | Size | Weight |
|---|---|---|
| Body / recipe meta | `16px` | 400 |
| Recipe title (card) | `16px` | 600–700 |
| Primary button | `16px` | 600 |
| Category label | `16px` | 400 |
| Section heading | `20–24px` | 600–700 |

### Conventions
- **16px is the comfortable body default** — readable for long recipe steps and ingredient lists.
- **Weight 600 (semibold)** carries buttons and titles; **700** for stronger headings. Hierarchy from size + weight + the warm background contrast.
- **Body weight 400** for ingredient lists and step text — easy on the eye while cooking.
- Always carry the Noto Sans + system fallback chain; never hardcode a Latin-only font.

## 4. Component Stylings

### Buttons

**Primary**
- Background: `#FF9933` (Cookpad Orange)
- Text: `#FFFFFF`
- Radius: `8px`
- Padding: `8px 24px`
- Height: ~`48px`
- Font: `16px` / `600`
- Use: The main action — search, post a recipe, sign up

**Secondary / Outline** (inferred from palette)
- Background: `#FFFFFF`
- Text: `#FF9933`
- Border: `1px solid #FF9933`
- Radius: `8px`
- Use: Lower-emphasis action beside a primary

**Text / Quiet**
- Background: transparent
- Text: `#4A4A4A` (charcoal)
- Use: Tertiary/navigation actions

**Disabled** (inferred)
- Background: `#ECEBE9` (warm gray)
- Text: `#4A4A4A` at reduced emphasis
- Use: Unavailable actions

### Category Tiles

**Category Button**
- Background: transparent
- Text: `#0F0F0F`
- Radius: `8px`
- Padding: `16px`
- Height: ~`64px`
- Font: `16px` / `400`
- Use: Ingredient/category navigation (野菜 / お肉 / 魚介 / たまご …) — large, tappable, icon + label

### Cards

**Recipe Card**
- Background: `#FFFFFF`
- Text: `#0F0F0F`
- Radius: `8px`
- Padding: `0` (image-led; title strip below)
- Use: Recipe tile — large food photo on top, title (16px 600) + meta below, floating on the `#F8F6F2` cream page

**Promoted / Highlight Card** (inferred from cream tints)
- Background: `#FEF9EE` (cream tint)
- Radius: `8px`
- Use: Featured/promoted recipe regions

### Inputs

**Search Field** (inferred from chrome)
- Background: `#FFFFFF`
- Text: `#4A4A4A` (placeholder), `#0F0F0F` (typed)
- Radius: `8px`
- Padding: `~12px 16px`
- Focus: border/ring in `#FF9933`
- Use: The central recipe search — the front door of the product

### Badges

**Rating / Highlight Badge** (inferred)
- Background: `#FAF5D7` (pale yellow) or `#E9B83F`
- Text: `#4A4A4A` / `#0F0F0F`
- Radius: `8px` or `full`
- Use: Ratings, "つくれぽ" counts, promoted labels

## 5. Layout Principles

### Density
Cookpad is **medium density, photo-forward**. The grid of recipe cards packs efficiently, but each card gives its food photo room to look appetizing. The warm `#F8F6F2` background provides separation between white cards without heavy borders or shadows.

### Spacing & Structure
- Top search bar is the hero — recipe discovery is the core loop
- Category tiles (large `64px`, `8px` radius, `16px` padding) form a tappable navigation grid
- Recipe cards in a responsive grid float on the cream base
- Generous padding inside category tiles makes them comfortable tap targets

## 6. Depth & Elevation

Cookpad reads **soft and mostly flat**. Depth comes from the warm cream background separating white cards, plus the food photography itself. Shadows, where present, are gentle.

- Recipe cards: minimal shadow; cream-vs-white contrast + `8px` radius separates them
- Photo tiles: a subtle `rgba(0,0,0,0.2)` scrim over images supports white overlay text
- Dropdowns / modals: light shadow + scrim
- The brand never goes heavy/glossy — the kitchen should feel calm, not dramatic

## 7. Do's and Don'ts

- **DO** put the interface on the warm cream `#F8F6F2`, not pure white. **DON'T** use a clinical pure-white canvas — the warmth is the brand.
- **DO** reserve Cookpad Orange (`#FF9933`) for the primary action and brand mark. **DON'T** flood the UI with orange — it's a pop, not a wash.
- **DO** let food photography dominate the recipe cards. **DON'T** clutter cards with chrome that competes with the photo.
- **DO** use the soft `8px` radius everywhere. **DON'T** use sharp corners or huge pill radii — `8px` is the approachable signature.
- **DO** use near-black `#0F0F0F` text for readability on cream. **DON'T** use low-contrast gray for primary recipe text.
- **DO** keep copy warm, plain, and encouraging. **DON'T** adopt a chef-elite or fussy tone — everyday cooking is the point.
- **DO** make category tiles large and tappable (64px). **DON'T** shrink navigation into tiny dense rows — cooks browse with thumbs.
- **DO** lead with Noto Sans + system fallback. **DON'T** load a heavy brand webfont — recipes must load fast on every phone.

## 8. Responsive Behavior

| Width | Behavior |
|---|---|
| Desktop | Wide recipe grid (multi-column) on the cream base; top search + category grid prominent |
| Tablet | Recipe grid reflows to fewer columns; category tiles wrap |
| Mobile | Single/two-column recipe feed; search bar pinned; category tiles in a scrollable grid; mobile-first cooking context |

### Touch & Mobile
- Category tiles (~64px) and primary buttons (~48px) clear touch minimums comfortably
- Recipe photos crop responsively; titles stay readable at 16px
- Cookpad's core usage is mobile (cooking with a phone propped in the kitchen) — touch targets are generous by design

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / brand: Cookpad Orange `#FF9933`
- Page bg: warm cream `#F8F6F2`; card bg `#FFFFFF`
- Text: `#0F0F0F`; chrome/secondary `#4A4A4A`
- Warm accents: `#E9B83F` (yellow), `#FEF9EE` (cream tint), `#FAF5D7` (pale yellow)
- Radius: `8px` everywhere

### Example Component Prompts
- "Create a Cookpad primary button: solid `#FF9933` bg, white text, `8px` radius, `8px 24px` padding, height ~48px, 16px weight 600. Place it on a warm `#F8F6F2` page background."
- "Build a Cookpad recipe card: white bg, `8px` radius, large food photo filling the top, recipe title below at 16px weight 600 `#0F0F0F`, meta row in `#4A4A4A`. Float it on the `#F8F6F2` cream page with minimal shadow."
- "Design a Cookpad category grid: large tappable tiles (~64px, `8px` radius, 16px padding), transparent bg, icon + label at 16px `#0F0F0F` (野菜 / お肉 / 魚介 / サラダ …)."
- "Create a Cookpad search bar: white field, `8px` radius, `#4A4A4A` placeholder, focus ring in `#FF9933`, pinned at top of a `#F8F6F2` page. It's the front door of the product."

### Iteration Guide
1. **Warm cream `#F8F6F2` background**, never pure white — this is the brand's home-kitchen feel.
2. **Orange (`#FF9933`) is a pop**, not a wash — primary action + brand mark only.
3. **Photos are the content** — recipe cards exist to showcase appetizing food images.
4. **`8px` radius everywhere** — soft and approachable.
5. **Text `#0F0F0F`** on cream/white for crisp readability; chrome `#4A4A4A`.
6. **16px body, weight 600 for buttons/titles** — friendly but clear.
7. **Large tappable navigation** (64px category tiles) — cooks browse with thumbs.
8. **Noto Sans + system fallback**; never a heavy webfont.

---

## 10. Voice & Tone

Cookpad's voice is **warm, encouraging, and refreshingly unpretentious** — the brand's mission is literally to *make everyday cooking fun*, and the copy embodies that. It speaks to the home cook who is tired, busy, and not a professional chef, and it never makes them feel inadequate. The register is friendly polite Japanese (です・ます調) with a homey, peer-to-peer warmth — closer to a helpful friend sharing a recipe than an authoritative cookbook. Community is central: Cookpad is built on user-submitted recipes and "つくれぽ" (made-it reports), so the voice celebrates the contributors and the act of cooking-for-others.

| Context | Tone |
|---|---|
| Buttons | Short friendly JP verb — `検索`, `レシピを投稿`, `保存`. Inviting, no pressure. |
| Recipe meta | Plain and helpful — ingredients, steps, time. Practical, never fussy. |
| Empty states | Encouraging — invite the user to search or post; never imply failure. |
| Community (つくれぽ) | Warm and celebratory — thank and highlight the people who cooked and shared. |
| Errors | Gentle and blameless; one calm sentence + the fix. |
| Success | Friendly confirmation (`保存しました`) with a touch of warmth. |
| Onboarding | Welcoming, low-pressure — cooking is supposed to be fun. |

**Forbidden patterns.** Chef-elite condescension, fussy/technical jargon that intimidates home cooks, hype superlatives (`究極の`, `プロ級`), pressure/FOMO copy, exclamation-mark-button shouting, and anything that makes a tired parent feel they're cooking wrong. Cookpad roots for the cook.

**Voice samples.**
- `レシピを投稿` — post-a-recipe action; community-celebrating. <!-- illustrative: standard Cookpad-register JP action label; not quoted verbatim from a specific live screen -->
- `検索` — the central recipe-search action. <!-- illustrative -->
- "Make everyday cooking fun" — Cookpad's stated mission. <!-- verified: widely-published Cookpad mission statement, WebSearch 2026-05-19 (medium.com/cookpadteam) -->

## 11. Brand Narrative

Cookpad was founded in Japan in **1997** by **Akimitsu Sano (佐野陽光)**, an engineer trained in neural computing at Keio University who had been selling produce for local farmers on the side. Sano saw a decline in home cooking eroding people's connection to food, and believed technology could make everyday cooking *fun* again. The service launched in **1998** as "Kitchen@coin," was renamed **Cookpad** in 1999, and — after Sano dropped a paid-subscription model and made it free — grew into a vast community of user-submitted recipes long before social networks existed. By 2003 it had a million users in Japan; today more than half the Japanese population uses it monthly. <!-- source: medium.com/cookpadteam founding story + Crunchbase (Akimitsu Sano), WebSearch 2026-05-19 -->

The design language flows directly from the mission **"make everyday cooking fun."** **One**, it must feel *homey and unintimidating* — hence the warm cream background, the friendly orange, the soft `8px` corners, and the deliberate refusal of chef-elite polish. Cooking dinner on a Tuesday is the use case, not plating for Instagram. **Two**, *food must look appetizing* — hence the photo-forward recipe cards and the warm neutral canvas that makes images pop like food on a clean countertop. **Three**, it is fundamentally a *community* product — recipes come from millions of home cooks, and the "つくれぽ" made-it-report culture means the design celebrates ordinary people cooking for the people they love.

What Cookpad refuses: the moody dark aesthetics of premium food blogs, the celebrity-chef gloss of TV cooking brands, and the cold utility of a pure-white app. It chooses warmth, approachability, and community every time — software that feels like a friend cheering you on in the kitchen.

## 12. Principles

1. **Make everyday cooking fun.** The founding mission and the lens for every decision. *UI implication:* Warmth over polish, encouragement over instruction, approachable over elite. The cream background, friendly orange, and soft radius all serve this.

2. **Food is the hero.** Recipes exist to be cooked, and appetizing photos drive that. *UI implication:* Recipe cards are photo-forward; chrome stays out of the way; the warm canvas makes images pop. Don't clutter a card.

3. **Never make the cook feel inadequate.** Cookpad's user is a home cook, not a chef. *UI implication:* Plain helpful copy, no jargon, blameless errors, low-pressure CTAs. The voice roots for the user.

4. **Community first.** The platform is built on user recipes and made-it reports (つくれぽ). *UI implication:* Surface and celebrate contributors; make posting and reporting easy and warm; treat the community as the product, not an add-on.

5. **Warm, not clinical.** The whole interface should feel like a home kitchen. *UI implication:* Warm off-white `#F8F6F2` instead of pure white; warm-neutral accents; soft corners; gentle (never dramatic) depth.

## 13. Personas

*Personas are fictional archetypes informed by Cookpad's publicly-described user base (Japanese home cooks, majority of the population uses it monthly), not real individuals.*

**高橋 由美 (Yumi Takahashi), 36, Saitama.** Working parent of two. Opens Cookpad on her phone in the supermarket and again at the stove. Searches by the ingredient she already has ("鶏むね肉"), wants a 3-tap path to a doable weeknight recipe. Posts an occasional つくれぽ when something works. Has zero patience for fussy or chef-grade instructions.

**中村 健 (Ken Nakamura), 27, Tokyo.** Lives alone, learning to cook to save money and eat better. Browses category tiles (麺 / ごはんもの) for ideas. Appreciates that Cookpad doesn't make him feel like a beginner — the warm, encouraging tone keeps him cooking instead of ordering delivery.

**小林 さち (Sachi Kobayashi), 58, Hiroshima.** Experienced home cook who *contributes* recipes and reads つくれぽ on her dishes. Cookpad is her community and her recipe box. Values the warmth and the recognition of fellow home cooks far more than any slick feature.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | Warm cream canvas, one encouraging line (`#0F0F0F`) suggesting a broader search or a popular category, plus the search field. Never "no results, sorry." |
| **Empty (no saved recipes)** | Friendly one-liner inviting the user to save a recipe; an orange primary to browse. Warm, not blaming. |
| **Loading (recipe grid)** | Skeleton cards in warm-gray `#ECEBE9` at final card dimensions; gentle shimmer; no layout shift when photos load. |
| **Loading (inline)** | In-button spinner; button keeps `8px` radius and orange fill; label swaps to loading. |
| **Error (field)** | Gentle border swap + one calm helper line; cause + fix, friendly tone. |
| **Error (page/network)** | Soft notice on cream; one sentence + retry. No alarm, no apology-flood. |
| **Success (recipe saved/posted)** | Warm confirmation (`保存しました` / つくれぽ thanks); a touch of celebration for community actions. |
| **Disabled** | Warm-gray `#ECEBE9` fill, muted text. Palette swap is the signal. |
| **Skeleton** | Warm-gray blocks at exact final size, especially for the photo region; respects reduced-motion. |
| **Empty (new contributor)** | Encouraging invitation to post a first recipe; celebrate the act of sharing, never gate it behind intimidation. |

## 15. Motion & Easing

Cookpad's motion is **gentle and warm** — it supports a calm, fun cooking experience and never feels mechanical or aggressive. Motion clarifies and delights lightly; it doesn't dominate.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle commits, selection |
| `motion-fast` | 150ms | Button hover/press, save-heart tap |
| `motion-standard` | 250ms | Card reveal, dropdown, image fade-in |
| `motion-modal` | 300ms | Modal/dialog enter-exit |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | The default |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Things arriving (cards, modals) |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Dismissals |
| `ease-warm` | `cubic-bezier(0.34, 1.2, 0.64, 1)` | **Reserved** — a soft overshoot for the save/つくれぽ "heart" tap only |

**Spring stance.** A single soft overshoot is permitted on the save / made-it-report interaction (the emotional, community moment), matching the warm brand register. Everywhere else, motion stays calm and standard — no bouncy chrome, no kinetic flourish on navigation.

**Signature motions.**
1. **Recipe card image fade-in.** Food photos fade in `opacity 0→1` over `motion-standard / ease-standard` as they load — appetizing reveal, no slide.
2. **Save-recipe heart.** On tap, the heart icon scales `1.0 → 1.15 → 1.0` over `motion-standard / ease-warm` and fills orange — the one warm overshoot, fitting an emotional community moment.
3. **Category tile press.** Subtle background tint + `motion-fast / ease-standard` on press; tappable and immediate.
4. **Modal enter.** Scrim fades in; dialog appears with opacity + slight translate over `motion-modal / ease-enter`. Calm.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` collapse to `motion-instant`; the heart overshoot flattens to a simple fill; image fade-ins become immediate. Warmth never costs accessibility.

<!--
OmD v0.1 Sources — Cookpad

Tier 1 (live inspect, Playwright computed styles, 2026-05-19):
- cookpad.com/jp — primary orange rgb(255,153,51) = #FF9933 (primary button bg, white text,
  8px radius, 8px 24px padding, 16px/600); page bg rgb(248,246,242) = #F8F6F2 (warm cream);
  text rgb(15,15,15) = #0F0F0F; chrome rgb(74,74,74) = #4A4A4A; category tiles 8px radius,
  16px padding, ~64px; warm tints #FEF9EE, #ECEBE9, #FAF5D7, accent #E9B83F observed;
  font stack "noto-sans, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, arial".

Tier 2 / narrative (WebSearch 2026-05-19):
- medium.com/cookpadteam founding story + Crunchbase — Akimitsu Sano (佐野陽光) founded 1997,
  launched 1998 as "Kitchen@coin", renamed Cookpad 1999; mission "make everyday cooking fun";
  >50% of Japan uses it monthly; community/つくれぽ culture.

Verified vs assumed:
- VERIFIED: #FF9933 primary, #F8F6F2 cream bg, #0F0F0F text, #4A4A4A chrome, 8px radius,
  primary button spec, category tile spec, font stack — all live computed styles.
- NOTE: brief supplied #FF7F33; the LIVE primary is #FF9933 (rgb 255,153,51). Using the
  verified live value #FF9933.
- INFERRED: secondary/outline button, search input, badge variants in §4; warm-tint usage in
  notices/highlights; motion tokens in §15 (duration values illustrative). Voice samples marked
  illustrative are not verbatim live strings except the published mission.
- Personas (§13) are fictional archetypes of Cookpad's described home-cook user base.
-->

---

**Verified:** 2026-05-19 (omd:add-reference — JP batch)
**Tier 1 sources:** cookpad.com/jp (live computed styles — primary orange #FF9933 [rgb 255,153,51], cream page bg #F8F6F2, text #0F0F0F, chrome #4A4A4A, 8px radius, primary button 16px/600 8px·24px, ~64px category tiles, Noto Sans system stack).
**Tier 2 sources:** medium.com/cookpadteam + Crunchbase (founding 1997 / Akimitsu Sano / mission "make everyday cooking fun"); getdesign.md / refero not separately fetched.
**Conflicts unresolved:** Brief-supplied #FF7F33 corrected to live-verified #FF9933.
