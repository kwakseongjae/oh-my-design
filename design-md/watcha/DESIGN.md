---
id: watcha
name: Watcha
country: KR
category: entertainment
homepage: "https://watcha.com"
primary_color: "#F82F62"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=watcha.com&sz=128"
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#f82f62"
    primary-deep: "#de2a60"
    brand-pink: "#ff0558"
    canvas: "#000000"
    surface-raised-1: "#1a1a1a"
    surface-raised-2: "#28292a"
    surface-hover: "#2c2c2c"
    text-primary: "#ffffff"
    text-secondary: "#999ca1"
    text-tertiary: "#6b6e73"
    success: "#2bc149"
    error: "#f25c5c"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    hero:    { size: 32, weight: 700, lineHeight: 1.3, use: "Title-detail hero, billboard" }
    section: { size: 22, weight: 700, lineHeight: 1.35, use: "Row headers" }
    card:    { size: 16, weight: 600, lineHeight: 1.4, use: "Poster captions, list titles" }
    body:    { size: 14, weight: 400, lineHeight: 1.5, use: "Synopsis, descriptions" }
    label:   { size: 13, weight: 500, lineHeight: 1.4, use: "Buttons, chips" }
    caption: { size: 12, weight: 400, lineHeight: 1.4, use: "Metadata, fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#f82f62", fg: "#ffffff", radius: 4, padding: "8px 16px", font: "13px/500 Pretendard", use: "Login / subscribe CTA, hover #de2a60" }
    button-ghost: { type: button, fg: "#ffffff", radius: 4, padding: "8px 16px", font: "13px/500 Pretendard", use: "Secondary, 1px rgba border" }
    icon-button: { type: button, bg: "#28292a", fg: "#999ca1", radius: 9999, use: "Close / dismiss circle ~30px" }
    input-text: { type: input, fg: "#ffffff", radius: 4, padding: "12px 14px", font: "15px/400 Pretendard", use: "Login/search, focus border white, error #f25c5c" }
    poster-card: { type: card, radius: 4, use: "Poster image card, no border, hover scale 1.04" }
    surface-card: { type: card, bg: "#1a1a1a", radius: 8, padding: "20px", use: "Settings/account panel" }
    chip: { type: badge, fg: "#ffffff", radius: 9999, padding: "4px 12px", font: "12px/500 Pretendard", use: "Genre/tag chip" }
    snackbar: { type: toast, bg: "#28292a", fg: "#ffffff", radius: 8, padding: "12px 16px", use: "Transient feedback, 3s" }
    modal: { type: dialog, bg: "#1a1a1a", fg: "#ffffff", radius: 12, padding: "24px", use: "Login, plan, rating" }
    nav-item: { type: tab, fg: "#999ca1", font: "14px/500 Pretendard", use: "Top nav switcher", active: "#ffffff weight+color shift" }
  components_harvested: true
---

# Design System Inspiration of Watcha (왓챠)

## 1. Visual Theme & Atmosphere

Watcha is Korea's taste-driven streaming service — the one that started as a movie-rating site (왓챠피디아) and turned a decade of star ratings into a recommendation engine, then a full OTT. Its interface is built for one job: get a dark room out of the way so the poster art can glow. The browse experience opens on a near-pure black canvas (`#000000`) where rows of film and series thumbnails are the only source of color and light. Chrome is suppressed to the edge of invisibility — thin gray labels, no borders, no decorative surfaces — so the catalog itself becomes the design. This is the Netflix-era cinema-lobby aesthetic, but Watcha's register is quieter and more editorial than Netflix's louder red; where Netflix shouts, Watcha curates.

The signature is a single hot magenta-pink, observed live as `#F82F62`, that does all the interactive work. It marks the primary login and subscribe CTAs, the active "내가 평가한" rating stars, and selection states — a saturated, almost neon pink that reads as warm and personal against the cold black field. This is not a corporate blue or an authoritative red; it's the pink of a heart icon, of "this one's for you," which is exactly Watcha's brand thesis — *the service that knows your taste*. Typography is Pretendard-led (`Pretendard, "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif`), the de-facto Korean product sans, rendered in white and a graded gray scale on black.

What defines Watcha visually is **restraint in service of the catalog**. Radii are tight (`4px` on buttons, `50%` on icon-circles), shadows are essentially absent on the dark surface (depth comes from the black-to-dark-gray layering, not drop shadows), and the only ornament permitted is the poster grid itself. The atmosphere is "dim cinema, your seat reserved" — a personal, taste-first dark room rather than a maximalist content firehose.

**Key Characteristics:**
- Hot magenta-pink (`#F82F62`) as the sole interactive accent — CTAs, active rating stars, selection
- Near-pure black canvas (`#000000`) so poster art is the only light source
- Pretendard-led type stack (`Pretendard, "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic"`) in a white-to-gray scale
- Tight `4px` button radius; `50%` circular icon buttons; no decorative borders
- Depth via black→dark-gray surface layering, not drop shadows
- Editorial, taste-curated tone — quieter than Netflix red, warmer than institutional blue
- Catalog-first: chrome recedes, poster grid is the design

## 2. Color Palette & Roles

Colors below are extracted from live computed styles on watcha.com/browse (dark theme, 2026-05-19). Watcha does not publish a public token layer; values are observed, not from a documented system.

### Brand / Interactive
- **Watcha Pink** (`#F82F62`): Primary interactive color — login/subscribe CTA background, active rating stars, selection highlight. The single workhorse accent. Observed `rgb(248, 47, 98)`.
- **Watcha Pink Deep** (`#DE2A60`): Pressed / hover variant of the pink. Observed `rgb(222, 42, 96)`.
- **Brand Pink (marketing)** (`#FF0558`): The brighter magenta seen in logo/marketing lockups and historical brand material. Distinct from the UI `#F82F62` — reserve for logo and promo, not UI fills. *(Brief-provided brand value; UI fill verified separately as `#F82F62`.)*

### Surfaces (Dark Theme)
- **Canvas Black** (`#000000`): Page background. The cinema-lobby base behind every poster row.
- **Surface Raised** (`#1A1A1A` – `#28292A`): Cards, dropdowns, modal sheets, and the close-button circle (`rgb(40, 41, 42)`). One step above the black canvas.
- **Surface Hover** (`#2C2C2C`): Hovered list rows and menu items.

### Text (on Dark)
- **Text Primary** (`#FFFFFF`): Titles, primary labels, active nav.
- **Text Secondary** (`#999CA1`): Metadata, inactive labels, dismiss-icon glyph (`rgb(153, 156, 161)`), timestamps.
- **Text Tertiary** (`#6B6E73`): Disabled labels, fine print, low-emphasis captions.

### Borders & Dividers
- **Divider** (`rgba(255,255,255,0.08)`): Hairline row separators on dark surfaces.
- **Input Border** (`rgba(255,255,255,0.16)`): Default input outline; brightens to white on focus.

### Semantic
- **Rating / Favorite** (`#F82F62`): The pink doubles as the "rated / liked" semantic — heart and active star.
- **Success** (`#2BC149`): Subscription-confirmed, download-complete (green, used sparingly).
- **Warning / Error** (`#F25C5C`): Playback errors, payment failures — a softer red kept distinct from the brand pink.

## 3. Typography Rules

### Font Stack
```
Pretendard, "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif
```

Pretendard leads — the open-source Korean sans that has become the default for modern Korean product UI — with Apple SD Gothic Neo and legacy Nanum/Malgun fallbacks for older environments. All rendering assumes white-or-gray on black.

### Type Scale (observed, dark-theme browse + detail surfaces)

| Role | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| Hero Title | 32–36px | 700 | 1.3 | Title-detail hero, billboard rows |
| Section Heading | 22–24px | 700 | 1.35 | Row headers ("왓챠 추천작", "지금 뜨는") |
| Card Title | 16px | 600 | 1.4 | Poster captions, list item titles |
| Body | 14–15px | 400 | 1.5 | Synopsis, descriptions |
| Label / CTA | 13px | 500 | 1.4 | Buttons (login CTA observed 13px/500), chips |
| Caption | 12px | 400 | 1.4 | Metadata (year · genre · rating), fine print |

### Conventions
- **700 for titles, 500 for CTAs, 400 for body** — a restrained three-weight rhythm.
- **White is primary, gray is hierarchy** — emphasis steps down through `#FFFFFF` → `#999CA1` → `#6B6E73` rather than through weight alone.
- **Numerals matter** — star ratings (e.g. `4.2`) and "평가 n개" counts are first-class; rendered tabular-friendly at body size.
- **No all-caps** — Korean and Latin both stay sentence-case; the catalog speaks like a friend, not a marquee.

## 4. Component Stylings

### Buttons

**Primary CTA (로그인 / 구독)**
- Background: `#F82F62`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 8px 16px
- Font: 13px / 500 / Pretendard
- Hover: background `#DE2A60`
- Use: Login, subscribe, "지금 시청" primary action — observed 32px tall in header

**Secondary / Ghost**
- Background: transparent
- Text: `#FFFFFF`
- Border: 1px solid `rgba(255,255,255,0.4)`
- Radius: 4px
- Padding: 8px 16px
- Font: 13px / 500 / Pretendard
- Use: "더보기", secondary actions on poster-detail overlays

**Icon Button (close / dismiss)**
- Background: `#28292A`
- Text: `#999CA1`
- Border: none
- Radius: 50%
- Size: ~30px circle
- Use: Modal close, carousel chevrons — observed `rgb(40, 41, 42)` bg, `rgb(153, 156, 161)` glyph

**Play (overlay)**
- Background: `rgba(255,255,255,0.92)`
- Text: `#000000`
- Border: none
- Radius: 50%
- Use: Center-of-poster play affordance on hover

### Inputs

**Text Field (dark)**
- Background: `rgba(255,255,255,0.06)`
- Text: `#FFFFFF`
- Border: 1px solid `rgba(255,255,255,0.16)`
- Radius: 4px
- Padding: 12px 14px
- Font: 15px / 400 / Pretendard
- Placeholder: `#999CA1`
- Focus: border `#FFFFFF`; error border `#F25C5C`
- Use: Login email/password, search field

### Cards

**Poster Card**
- Background: transparent (image fills)
- Border: none
- Radius: 4px
- Aspect: 2:3 poster
- Hover: scale ~1.04 + title/metadata overlay fade-in
- Use: The atomic unit of every browse row — no chrome, the art is the card

**Surface Card (settings / account)**
- Background: `#1A1A1A`
- Border: none
- Radius: 8px
- Padding: 20px
- Use: Account, billing, settings panels on black canvas

### Badges / Chips

**Genre / Tag Chip**
- Background: `rgba(255,255,255,0.08)`
- Text: `#FFFFFF`
- Border: none
- Radius: 999px
- Padding: 4px 12px
- Font: 12px / 500 / Pretendard
- Use: Genre filters, mood tags

**Rating Badge**
- Background: transparent
- Text: `#F82F62`
- Font: 12px / 700 / Pretendard
- Use: Average rating number beside the star

### Tabs / Nav

**Top Nav Item**
- Active text: `#FFFFFF`
- Inactive text: `#999CA1`
- Indicator: none / weight + color shift
- Font: 14px / 500 / Pretendard
- Use: 영화 / 시리즈 / 왓챠피디아 switcher

### Toasts

**Snackbar**
- Background: `#28292A`
- Text: `#FFFFFF`
- Radius: 8px
- Padding: 12px 16px
- Use: "평가가 저장되었어요" type transient feedback, 3s auto-dismiss

### Dialogs

**Modal**
- Background: `#1A1A1A`
- Text: `#FFFFFF`
- Radius: 12px
- Padding: 24px
- Backdrop: `rgba(0,0,0,0.7)`
- Use: Login, plan selection, "이 작품 평가하기"

---

**Verified:** 2026-05-19
**Tier 1 sources:** watcha.com/browse/all (live computed styles via Playwright — login CTA `#F82F62` / 4px / 13px·500 / 32px; close icon `#28292A` circle 50% / glyph `#999CA1`; body bg `#000000`; font `Pretendard, "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic"`; hover pink `#DE2A60`).
**Tier 2 sources:** getdesign.md/watcha — not checked; styles.refero.design — not checked. Marketing brand pink `#FF0558` is brief-provided, not re-verified against a token doc.
**Conflicts unresolved:** Marketing brand pink (`#FF0558`) vs. UI fill pink (`#F82F62`) — treated as distinct surfaces (logo/promo vs. UI), per Toss brand-vs-UI-blue precedent.

## 5. Layout Principles

### Page Structure
- Full-bleed dark canvas with a max content width (~1280px) for browse rows; rows scroll horizontally beyond the fold.
- Top nav bar (~64px) translucent-to-solid on scroll; poster rows stack vertically with horizontal carousels inside each.

### Spacing
- Base unit 8px; common values 4 / 8 / 12 / 16 / 24 / 32.
- Row gutter ~12px between posters; ~32px vertical gap between content rows.
- Page horizontal padding ~40px desktop, 16px mobile.

### Density
Watcha is **media-dense, chrome-sparse**. Posters pack tightly (a single row may show 6–8 at desktop) while text chrome stays minimal. The deeper you go (title detail), the more breathing room appears around synopsis, cast, and rating UI.

### Border Radius Scale
- Tight (4px): buttons, inputs, poster cards
- Soft (8px): surface cards, snackbars
- Comfortable (12px): modals
- Pill (999px): chips, toggles
- Circle (50%): icon buttons, avatars

## 6. Depth & Elevation

On a black canvas, Watcha communicates depth through **surface lightness, not shadow**.

| Level | Treatment | Use |
|---|---|---|
| Base | `#000000` | Page canvas |
| Raised 1 | `#1A1A1A` | Cards, panels |
| Raised 2 | `#28292A` | Dropdowns, icon-button surfaces, snackbars |
| Modal | `#1A1A1A` + `rgba(0,0,0,0.7)` backdrop | Dialogs, plan sheets |

Drop shadows are essentially absent — on pure black they'd be invisible anyway. The poster-hover scale (~1.04) plus a subtle title-overlay gradient is the only "lift" the catalog needs. Hover gradients (`linear-gradient(transparent, rgba(0,0,0,0.85))`) ride the bottom of posters to keep captions legible over bright art.

## 7. Do's and Don'ts

### Do
- Use `#F82F62` for the one primary interactive element per surface — login, subscribe, the active star.
- Keep the canvas `#000000` and let poster art supply all the color.
- Step hierarchy through the gray scale (`#FFFFFF` → `#999CA1` → `#6B6E73`), not just weight.
- Use 4px radius on buttons and posters; 50% on icon circles.
- Render rating numbers and counts as first-class typography.

### Don't
- Don't introduce a second saturated accent — the pink is the only hue that competes with posters.
- Don't put borders or drop shadows on poster cards; the black gutter separates them.
- Don't use the brighter marketing pink (`#FF0558`) as a UI fill — that's the logo/promo pink.
- Don't brighten the canvas toward gray; the cinema-black is the brand.
- Don't crowd the title-detail page — synopsis and rating UI need breathing room.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Single column-ish; rows show ~2.5 posters, peeking the next; bottom tab nav |
| Tablet | 768–1024px | ~4 posters per row, condensed top nav |
| Desktop | >1024px | 6–8 posters per row, full top nav, max ~1280px content |

### Touch & Media
- Poster cards are the primary touch target; min ~44px tap height on controls.
- Horizontal carousels are swipeable on touch, chevron-driven on desktop hover.
- Hero billboards use full-bleed autoplay trailers that mute/poster-fallback on mobile.

### Image Behavior
- Posters: 2:3, `object-fit: cover`, lazy-loaded.
- Billboards: 16:9 with bottom black gradient for title legibility.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / active: Watcha Pink `#F82F62` (hover `#DE2A60`)
- Canvas: Black `#000000`
- Raised surface: `#1A1A1A` / `#28292A`
- Text primary: `#FFFFFF`; secondary `#999CA1`; tertiary `#6B6E73`
- Input border: `rgba(255,255,255,0.16)`; focus `#FFFFFF`
- Error: `#F25C5C`; success `#2BC149`

### Example Component Prompts
- "Build a Watcha login button: bg `#F82F62`, white text 13px weight 500, 4px radius, padding 8px 16px, 32px tall. Hover bg `#DE2A60`. No shadow."
- "Create a Watcha poster row: black `#000000` bg, horizontal carousel of 2:3 poster cards (4px radius, no border, ~12px gutter). On hover scale 1.04 and fade in a bottom gradient `linear-gradient(transparent, rgba(0,0,0,0.85))` with title (16px weight 600 white) + rating (`#F82F62` 12px weight 700)."
- "Design a Watcha dark text field: bg `rgba(255,255,255,0.06)`, 1px border `rgba(255,255,255,0.16)`, 4px radius, white 15px text, placeholder `#999CA1`. Focus: border white. Error: border `#F25C5C`."
- "Create a genre chip: bg `rgba(255,255,255,0.08)`, white 12px weight 500, 999px radius, padding 4px 12px."

### Iteration Guide
1. One pink, one job — `#F82F62` only where the user taps or rates.
2. Canvas stays black; posters carry the color.
3. Pretendard stack first, always with the Korean fallbacks.
4. Hierarchy through gray scale before weight.
5. 4px button/poster radius, 50% icon circles, 999px chips.
6. No shadows on black — layer surface lightness instead.
7. Numbers (ratings/counts) are typography, not afterthoughts.

---

## 10. Voice & Tone

Watcha speaks like a friend with great taste recommending something just for you — warm, conversational, second-person, and never pushy. The default register is soft-polite Korean using the `~요`/`~어요` ending (`평가가 저장되었어요`, `이 작품, 어떠셨어요?`), the friendly-but-respectful register, never the stiff `~습니다` corporate voice except in legal copy. Korean is the unquestioned primary voice; English appears only in titles and the wordmark. The brand's whole premise — *the service that knows your taste* — means the copy is personal: it talks about *your* ratings, *your* picks, *what you'll like*, not about the catalog's size.

| Context | Tone |
|---|---|
| CTAs | Short Korean verb form (`로그인`, `구독하기`, `지금 시청`, `평가하기`). |
| Recommendations | Taste-personal, second person (`회원님이 좋아할 작품`, `이런 작품 어때요?`). |
| Success toasts | Past-tense single sentence, soft ending (`평가가 저장되었어요`). No emoji on system surfaces. |
| Error messages | Blameless, specific, one action (`재생할 수 없어요. 잠시 후 다시 시도해 주세요`). Never `오류가 발생했습니다`. |
| Empty states | Explain warmly + offer one action (`아직 평가한 작품이 없어요. 별점을 남기면 추천이 정확해져요`). |
| Ratings prompt | Inviting, never demanding (`이 작품, 어떠셨어요?`). |
| Legal / billing | Formal `~합니다` register — the single exception to the warm default. |

**Forbidden phrases.** `오류가 발생했습니다` (generic error), `죄송합니다만` openers on non-destructive failures, exclamation-as-pressure on CTAs (`지금 구독하세요!` → use `구독하기`), marketing superlatives (`최고의`, `역대급`) on UI chrome, English-first strings on Korean surfaces, emoji on system-generated toasts (emoji belongs to user-authored reviews/comments, not UI chrome).

**Voice samples.**
- `로그인` — header primary CTA, observed live on the `#F82F62` button. <!-- verified: watcha.com/browse via Playwright 2026-05-19 -->
- `회원님이 좋아할 작품` — taste-personal recommendation row pattern. <!-- illustrative: follows Watcha's documented taste-recommendation premise; not verified verbatim -->
- `평가가 저장되었어요` — illustrative rating-saved toast, soft `~요` ending. <!-- illustrative: not verified as live copy -->
- `이 작품, 어떠셨어요?` — illustrative post-watch rating prompt. <!-- illustrative: not verified as live copy -->

## 11. Brand Narrative

Watcha is operated by **Watcha, Inc. (왓챠)**, founded by **Park Tae-hoon (박태훈)**, and began not as a streaming service but as **왓챠 (later WATCHA PEDIA)** in 2011 — a movie database where Korean users rated films on a 0.5–5 star scale. The thesis was singular: if enough people rate enough films, you can predict what any one person will love. Years of accumulated star ratings — hundreds of millions of them — became a collaborative-filtering recommendation engine, and in 2016 Watcha launched **Watcha Play** (later just **Watcha**), an OTT streaming service that used that taste graph to curate, rather than merely host, a catalog. ([ko.wikipedia.org/wiki/왓챠](https://ko.wikipedia.org/wiki/%EC%99%93%EC%B0%A8) — founding history)

That origin is the entire brand. Where global OTTs compete on catalog size and original-content spend, Watcha competes on **fit** — the claim that it surfaces the one film you didn't know you wanted. The design follows directly: a black room so the recommendation can shine, a single warm pink that means "this is for you," and a UI organized around *your* ratings and *your* taste profile rather than trending charts. The pink isn't an arbitrary accent; it's the emotional color of personal preference — the heart, the favorite, the star you left.

What Watcha refuses: the loud red-and-billboard maximalism of the biggest OTT incumbents (Watcha is quieter, more editorial), the cold institutional palettes of legacy media, and the "more is more" feed logic of social video. Watcha is a curator's dark room, and the curator knows you.

## 12. Principles

1. **The catalog is the design.** Chrome recedes so poster art carries all color and light. *UI implication:* On browse, no decorative surfaces, no borders on poster cards, gray-on-black chrome. If a UI element competes with the posters for attention, it's wrong.

2. **One pink, one meaning.** `#F82F62` means "interactive / for-you / rated." It is never decoration. *UI implication:* Use the pink only on CTAs, active stars, and selection. A second saturated hue is forbidden on the catalog surface.

3. **Taste is personal, so copy is personal.** Every recommendation surface talks in the second person about the user's own taste. *UI implication:* `회원님이 좋아할 작품`, not `인기 작품`. Center the user, not the catalog's scale.

4. **Black is the cinema, not a theme toggle.** The `#000000` canvas is identity, not a dark-mode option. *UI implication:* Don't brighten toward gray; depth comes from surface lightness layering (`#1A1A1A` → `#28292A`), not shadows.

5. **Quiet over loud.** Watcha is the editorial, low-volume alternative to billboard OTTs. *UI implication:* No exclamation-mark pressure, no superlatives, restrained motion. Confidence is shown through calm, not volume.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Watcha user segments (taste-driven Korean film/series viewers), not individual people.*

**지현 (Ji-hyun), 29, Seoul.** Marketing manager and avid film-rater. Has logged 600+ ratings on Watcha Pedia over years and trusts the recommendation engine more than any critic. Opens Watcha at night looking for "something I'll actually like," not a blockbuster. Will rate a film the moment the credits roll. The taste graph is why she stays.

**민준 (Min-jun), 34, Busan.** Watches series with his partner. Uses Watcha for its arthouse and niche-international catalog that the bigger OTTs underweight. Picks by mood-tag and the "왓챠 추천작" row. Distrusts trending charts — wants curation, not popularity.

**수아 (Su-a), 22, Daejeon.** University student, casual viewer. Came for one exclusive title, stayed because the pink "내가 평가한" experience made rating feel like a game. Browses on mobile, peeking the next poster in each row. Rarely reads synopses — judges by poster and rating number.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no ratings yet)** | Single warm line in `#999CA1` (`아직 평가한 작품이 없어요`) + one pink CTA (`작품 평가하러 가기`). No illustration clutter on black. |
| **Empty (search no results)** | Single `#999CA1` caption (`검색 결과가 없어요`). No spammy suggestions. |
| **Loading (browse first paint)** | Poster-shaped skeleton blocks at `#1A1A1A` with a subtle shimmer toward `#28292A`. Layout-matched to final rows. |
| **Loading (playback buffer)** | Centered ring spinner in `#F82F62` over the dimmed player. Existing chrome stays. |
| **Error (playback)** | Centered single line in `#FFFFFF` (`재생할 수 없어요. 잠시 후 다시 시도해 주세요`) + retry button (ghost). Soft error red `#F25C5C` reserved for the icon. |
| **Error (inline field)** | Input border switches to `#F25C5C`, caption below in `#F25C5C` 13px. One actionable sentence. |
| **Success (rating saved)** | Snackbar `#28292A`, white text (`평가가 저장되었어요`), 3s auto-dismiss. Active star fills `#F82F62`. |
| **Success (subscribed)** | Dedicated confirmation surface (not a toast) — pink checkmark, plan name, next-billing date, single `확인` CTA. |
| **Skeleton** | `#1A1A1A` blocks at exact poster dimensions, 4px radius, ~1.2s shimmer to `#28292A`. |
| **Disabled (button)** | Background drops to `rgba(248,47,98,0.4)` for pink CTAs; text stays white. Geometry unchanged. |

## 15. Motion & Easing

Watcha's motion is restrained and cinematic — slow fades and gentle scales, never bounce. The catalog should feel like dimming house lights, not like a toy.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle/checkbox flips, star fill |
| `motion-fast` | 150ms | Hover lift, button press, chip select |
| `motion-standard` | 250ms | Poster hover scale, row reveal, modal open |
| `motion-slow` | 400ms | Billboard crossfade, page-to-detail transition |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | The default — 95% of motion |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Modals, sheets, toasts appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Spring stance.** Spring/overshoot is forbidden on Watcha surfaces. The brand is a quiet, editorial cinema; kinetic bounce would undercut the curated calm.

**Signature motions.**
1. **Poster hover.** Card scales `1.0 → 1.04` over `motion-standard / ease-standard` while a bottom gradient + title/rating overlay fades in. No shadow pulse — the scale and gradient are the lift.
2. **Star rating.** On tap, the star fills `#F82F62` instantly (`motion-instant`) with a brief 1.15 scale-pop settling back over `motion-fast`. The one place a tiny pop is licensed — it makes rating feel rewarding.
3. **Billboard crossfade.** Hero trailers and posters crossfade over `motion-slow / ease-standard`, never slide — a slide would read as "new content," a crossfade reads as "cinema dissolve."
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, scales and slides collapse to instant opacity changes; shimmer skeletons become static `#1A1A1A` blocks. No exceptions.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 (UI tokens, §1–9): watcha.com/browse/all live computed styles via
Playwright MCP, 2026-05-19. Confirmed: login CTA `#F82F62` (rgb 248,47,98)
4px radius 13px·500 32px tall; hover pink `#DE2A60` (rgb 222,42,96); close
icon `#28292A` circle 50% with `#999CA1` glyph; body bg `#000000`; font
`Pretendard, "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic"`.

Tier 2 (founding/narrative): ko.wikipedia.org/wiki/왓챠 — Watcha began as a
movie-rating database (왓챠피디아 lineage) and launched OTT (Watcha Play) in
2016; founder Park Tae-hoon (박태훈). Not re-verified against primary Watcha
press. The "taste graph → curation" thesis is an editorial reading consistent
with the product's recommendation-first positioning.

Marketing brand pink `#FF0558` is brief-provided; treated as the logo/promo
pink distinct from the verified UI fill `#F82F62`, analogous to Toss
brand-blue vs UI-blue. Not confirmed against a Watcha token doc.

Voice samples: `로그인` verified live. `회원님이 좋아할 작품`,
`평가가 저장되었어요`, `이 작품, 어떠셨어요?`, `검색 결과가 없어요`,
`재생할 수 없어요...` are ILLUSTRATIVE patterns following Watcha's
soft `~요` register and taste-personal positioning; not confirmed verbatim.

Personas (§13) are fictional archetypes. Any resemblance to specific Watcha
users is unintended.
-->
