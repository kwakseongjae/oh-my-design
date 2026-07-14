---
id: tving
name: TVING
display_name_kr: TVING (티빙)
country: KR
category: consumer-tech
homepage: "https://www.tving.com"
primary_color: "#ff153c"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=tving.com&sz=256"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: streaming-home, url: "https://www.tving.com/", inspected: "2026-07-13" }
    - { id: movie, kind: streaming-catalog, url: "https://www.tving.com/movie", inspected: "2026-07-13" }
    - { id: live, kind: streaming-live, url: "https://www.tving.com/live/C00551", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.tving.com/", captured: "2026-07-13" }
    - { id: movie-live, kind: product-surface, url: "https://www.tving.com/movie", captured: "2026-07-13" }
    - { id: live-live, kind: product-surface, url: "https://www.tving.com/live/C00551", captured: "2026-07-13" }
    - { id: tving-policy, kind: official-doc, url: "https://www.tving.com/policy/terms?viewType=webview", captured: "2026-07-13" }
    - { id: cj-lineup-2025, kind: official-doc, url: "https://newsroom.cj.net/?p=5803", captured: "2026-07-13" }
    - { id: cj-tving-history, kind: official-doc, url: "https://newsroom.cj.net/cj-enms-tving-and-kts-seezn-announce-merger-to-become-south-koreas-largest-ott-platform/", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.surface-raised": *home
    "tokens.colors.foreground": *home
    "tokens.colors.foreground-secondary": *home
    "tokens.colors.foreground-muted": *home
    "tokens.colors.hairline": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.compact.size": *home
    "tokens.typography.compact.weight": *home
    "tokens.typography.compact.lineHeight": *home
    "tokens.typography.compact.use": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.heading.size": *home
    "tokens.typography.heading.weight": *home
    "tokens.typography.heading.lineHeight": *home
    "tokens.typography.heading.use": *home
    "tokens.typography.live-tab.size": &live { surface_id: live, source_id: live-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.live-tab.weight": *live
    "tokens.typography.live-tab.lineHeight": *live
    "tokens.typography.live-tab.use": *live
    "tokens.rounded.menu": *home
    "tokens.rounded.live-pill": *live
    "tokens.components.content-menu-trigger.type": *home
    "tokens.components.content-menu-trigger.bg": *home
    "tokens.components.content-menu-trigger.fg": *home
    "tokens.components.content-menu-trigger.border": *home
    "tokens.components.content-menu-trigger.radius": *home
    "tokens.components.content-menu-trigger.padding": *home
    "tokens.components.content-menu-trigger.font": *home
    "tokens.components.content-menu-trigger.states": *home
    "tokens.components.content-menu-trigger.use": *home
    "tokens.components.live-selected-tab.type": *live
    "tokens.components.live-selected-tab.bg": *live
    "tokens.components.live-selected-tab.fg": *live
    "tokens.components.live-selected-tab.border": *live
    "tokens.components.live-selected-tab.radius": *live
    "tokens.components.live-selected-tab.padding": *live
    "tokens.components.live-selected-tab.font": *live
    "tokens.components.live-selected-tab.states": *live
    "tokens.components.live-selected-tab.use": *live
tokens:
  source: live-extract
  extracted: "2026-07-13"
  colors:
    canvas: "#000000"
    surface-raised: "#2e2e2e"
    foreground: "#ffffff"
    foreground-secondary: "#a3a3a3"
    foreground-muted: "#6e6e6e"
    hairline: "#4f4f4f"
  typography:
    family: { ui: "Pretendard" }
    compact: { size: 13.2, weight: 400, lineHeight: 1.5, use: "Observed opened-menu text on home and movie surfaces." }
    body: { size: 16.5, weight: 400, lineHeight: 1.15, use: "Observed product-surface body and utility text." }
    heading: { size: 22.0044, weight: 700, lineHeight: 1.5, use: "Observed product-surface heading text." }
    live-tab: { size: 14.2956, weight: 400, lineHeight: 1.15, use: "Observed unselected live-route tab text." }
  rounded: { menu: 4.95, live-pill: 109.996 }
  components_harvested: true
  components:
    content-menu-trigger: { type: button, bg: "#000000", fg: "#a3a3a3", border: "#a3a3a3", radius: 4.95, padding: "0px 16.5px", font: "13.2/400 Pretendard", states: "expanded, menu-open", use: "Observed home and movie content-menu trigger only." }
    live-selected-tab: { type: tab, bg: "rgba(255, 255, 255, 0.2)", fg: "#ffffff", border: "#ffffff", radius: 109.996, padding: "8.8044px 13.2px", font: "14.2956/700 Pretendard", states: "selected", use: "Observed selected tab on the supplied live route only." }
---

# Design System Inspiration of TVING (티빙)

## 1. Visual Theme & Atmosphere

TVING is CJ ENM's Korean streaming platform, serving series, movies, live channels, and sports. The three supplied public product routes use a cinema-dark field: black canvas, white and cool-gray text, a restrained raised surface, and a light hairline rather than a marketing-page palette. The product evidence is deliberately narrower than TVING's wider public narrative. CJ's 2025 lineup describes a program spanning varied original genres, signature franchises, and year-round live sports, while its earlier company reporting places TVING's independent expansion after its 2020 separation from CJ ENM and subsequent partnerships. Those are first-party context sources, not UI-token sources. [CJ ENM: TVING and Seezn](https://newsroom.cj.net/cj-enms-tving-and-kts-seezn-announce-merger-to-become-south-koreas-largest-ott-platform/) · [TVING 2025 lineup](https://newsroom.cj.net/?p=5803)

The captured home and movie routes share an opened content-menu treatment; the supplied live route adds a selected white-tint pill tab. This makes the reliable visual signature a high-contrast viewing shell with route-local navigation states, not the prior reference's inferred universal poster, CTA, category-color, or motion system.

**Key Characteristics:**

- Black `#000000` canvas with white primary text and gray secondary hierarchy.
- `#2e2e2e` is a repeated raised-surface value on the home and movie capture.
- `#4f4f4f` is the repeated high-confidence hairline/border value on home and movie.
- Product chrome uses a loaded, TVING-hosted Pretendard webfont; declared legacy faces are not promoted.
- The only reusable state claims are an expanded/menu-open content selector and a selected live tab, each with route and selector provenance.

## 2. Color Palette & Roles

### Observed live product surface

- **Canvas** (`#000000`) — repeated background on home, movie, and live captures.
- **Raised surface** (`#2e2e2e`) — repeated home/movie background value, including an opened-menu option.
- **Foreground** (`#ffffff`) — repeated primary text on all three captured routes.
- **Secondary foreground** (`#a3a3a3`) — repeated menu and supporting text color across all routes.
- **Muted foreground** (`#6e6e6e`) — repeated subdued text color across all routes.
- **Hairline** (`#4f4f4f`) — repeated border value on home and movie routes.

### Boundary

The catalog-level `primary_color` remains `#ff153c`, but the supplied 2026 product capture does not provide computed selector evidence for a red CTA, a universal red accent, or the earlier six-color category taxonomy. They are not retained as live UI tokens. Corporate/editorial imagery and TVING's legal or subscription pages are separate source domains and do not fill that gap.

## 3. Typography Rules

### Evidence classes

| Class | Evidence | Resolution |
|---|---|---|
| Live computed product use | `Pretendard` is computed on 335 visible elements across body, button, heading, menu, tab, and text roles. The collector classifies it `loaded` with high confidence and records 27 TVING-hosted WOFF/WOFF2 source URLs. | Verified live UI family and the sole `tokens.typography.family.ui` family. |
| Official distributed asset and licence | Pretendard's upstream project distributes the font under SIL Open Font License 1.1. [Upstream licence](https://github.com/orioncactus/pretendard/blob/main/LICENSE) | Licence context only; it does not by itself prove TVING deployment. |
| Declared-only assets | Campton, Campton Black/Extra/Book, Noto Sans KR, OmniGothic/OmniGothics, Pretendard Fallback, and swiper-icons have declarations and, where listed, source URLs, but zero visible uses in this capture. | Declared-only; not a UI-family token and not a substitute. |
| System fallback | `-apple-system`, `system-ui`, Roboto, Segoe UI, and other fallbacks appear after Pretendard in computed stacks. | Fallback-only, not a TVING font claim. |

### Observed hierarchy

| Role | Size | Weight | Line height | Surface boundary |
|---|---:|---:|---:|---|
| Compact opened-menu text | 13.2px | 400 | 19.8px | Home and movie opened-menu evidence |
| Product body/utility text | 16.5px | 400 | 18.975px | Public product routes |
| Product heading text | 22.0044px | 700 | 33.0066px | Public product routes |
| Unselected live tab | 14.2956px | 400 | 16.4399px | Supplied live route |

## 4. Component Stylings

### Content selector

**Opened trigger — expanded/menu-open**
- Background: #000000
- Text: #a3a3a3
- Border: #a3a3a3
- Radius: 4.95px
- Padding: 0px 16.5px
- Font: 13.2px / 400 / Pretendard
- States: expanded, menu-open
- Use: `home::[data-omd-capture="19"]` and the corresponding movie selector; observed 20px rendered height only while the menu is open.

### Live navigation

**Selected tab — selected**
- Background: rgba(255, 255, 255, 0.2)
- Text: #ffffff
- Border: #ffffff
- Radius: 109.996px
- Padding: 8.8044px 13.2px
- Font: 14.2956px / 700 / Pretendard
- States: selected
- Use: `surface-3::[data-omd-capture="61"]` on `https://www.tving.com/live/C00551`; observed 34px rendered height only.

No default CTA, poster card, dialog, hover, focus, pressed, error, disabled, or responsive variant is specified: the supplied evidence does not provide the required selector and state provenance.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.tving.com/; https://www.tving.com/movie; https://www.tving.com/live/C00551; https://www.tving.com/policy/terms?viewType=webview; https://newsroom.cj.net/cj-enms-tving-and-kts-seezn-announce-merger-to-become-south-koreas-largest-ott-platform/; https://newsroom.cj.net/?p=5803; https://github.com/orioncactus/pretendard/blob/main/LICENSE
**Tier 2 sources:** https://getdesign.md/tving (no usable indexed record returned); https://styles.refero.design/?q=tving (no usable style record returned)
**Conflicts unresolved:** none

The supplied capture corroborates only the values and states above. Legacy red CTA, category-color, poster-card, avatar, sports-geometry, motion, and inferred-product claims are intentionally omitted rather than reconstructed from CSS declarations, corporate material, or an adjacent route.

## 5. Layout Principles

The three supplied product routes establish route scope, not a full layout system. Home and movie share compact menu controls; the live route supplies a 34px tab treatment. No mobile viewport, grid, card aspect ratio, sticky header, player geometry, or breakpoint is retained because the collector evidence does not provide reliable cross-viewport provenance.

## 6. Depth & Elevation

The opened content menu is the only measured elevated layer: it uses `#212121`, a 1px `#4f4f4f` border, 4.95px radius, and two low-opacity black shadow layers. This route-local opened state does not authorize a global shadow scale. The normal controls retained in §4 report no shadow.

## 7. Do's and Don'ts

### Do

- Keep the verified product shell black with white/gray text when recreating these captured routes.
- Use Pretendard only with its recorded TVING-hosted loaded-font evidence and preserve the system stack as fallback.
- Preserve the expanded/menu-open and selected states with their route and selector boundaries.
- Treat CJ's editorial and policy material as narrative or legal context, not as product CSS authority.

### Don't

- Do not introduce a red CTA, red brand accent, six-category palette, poster-card geometry, or sports-player layout from the previous snapshot.
- Do not promote Campton, Noto Sans KR, OmniGothic, or another declared-only face into TVING UI typography.
- Do not add hover, focus, pressed, disabled, error, dialog, or responsive variants without a new observed state and selector.
- Do not use marketing, subscription, legal, or newsroom chrome as though it were the captured streaming product surface.

## 8. Responsive Behavior

No mobile or alternate viewport was supplied. Touch targets, breakpoint changes, menu placement, shelf grids, and player behavior remain unverified.

## 9. Agent Prompt Guide

### Verified prompt boundary

“Create only the captured TVING product chrome: a black streaming shell with white, `#a3a3a3`, and `#6e6e6e` text; an expanded black content selector with a 4.95px corner; and the selected live tab with a 20% white fill and 109.996px pill radius. Use loaded Pretendard. Do not add red CTAs, poster cards, category colors, player geometry, or unobserved interaction states.”

## 10. Voice & Tone

Official TVING product policy pages use compact legal-navigation labels such as `TVING 이용약관`, `유료이용약관`, `법적고지`, and `개인정보처리방침`. CJ's 2025 editorial framing names an “infinite spectrum,” “signature content,” and “immersive sports.” These are source-specific language samples: neither source establishes a general in-product microcopy system. [TVING policies](https://www.tving.com/policy/terms?viewType=webview) · [TVING 2025 lineup](https://newsroom.cj.net/?p=5803)

| Do | Don't |
|---|---|
| Keep policy language exact and clearly legal in context. | Turn policy labels into invented playback, error, or account microcopy. |
| Preserve editorial themes as editorial context. | Treat marketing/editorial phrasing as a product UI token. |
| State the source domain beside a voice claim. | Attribute an unobserved CTA or empty-state sentence to TVING. |

**Source samples.**

- `TVING 이용약관` — official policy navigation. <!-- verified: tving.com/policy/terms 2026-07-13 -->
- `signature content` — official CJ 2025 lineup theme. <!-- verified: newsroom.cj.net/?p=5803 2026-07-13 -->
- `immersive sports` — official CJ 2025 lineup theme. <!-- verified: newsroom.cj.net/?p=5803 2026-07-13 -->

## 11. Brand Narrative

CJ ENM's official account says TVING separated from CJ ENM in October 2020, then strengthened its platform position through a JTBC partnership and investment from Naver before its merger with KT's Seezn. That history establishes TVING as a Korean streaming platform built through content and platform partnerships; it does not establish a timeless UI system. [CJ ENM merger announcement](https://newsroom.cj.net/cj-enms-tving-and-kts-seezn-announce-merger-to-become-south-koreas-largest-ott-platform/)

The current public editorial record emphasizes a varied original-content slate and live sports coverage. CJ's 2025 announcement describes genre breadth, signature franchises, and year-round sports programming; a later CJ announcement frames international distribution as part of TVING's expansion. These facts explain the service's content scope and current direction, while the tokens in this reference remain tied only to the three captured Korean web routes. [TVING 2025 lineup](https://newsroom.cj.net/?p=5803) · [TVING global expansion](https://newsroom.cj.net/tving-partners-with-disney-japan-to-accelerate-global-expansion/)

## 12. Principles

1. **Keep content domains distinct.** TVING's official lineup differentiates original genres, signature programs, and sports. *UI implication:* do not collapse different route contexts into an invented universal component system.
2. **Use contrast for viewing-first chrome.** The captured routes use black, white, and measured gray values. *UI implication:* preserve text hierarchy before adding decorative color.
3. **Require state provenance.** The capture supplies menu-open and selected examples only. *UI implication:* make a state reusable only when its route, selector, and computed values are recorded.

## 13. Personas

*No first-party TVING persona research or demographic segmentation was collected for this reference. Do not fabricate customer archetypes, motivations, or survey findings.*

- [FILL IN: user-provided primary viewer segment and viewing context]
- [FILL IN: user-provided live or on-demand task]
- [FILL IN: user-provided accessibility or device requirement]

## 14. States

Only an opened content menu and a selected live tab were captured. The following product states require direct product-surface observation before specification:

| Category | Evidence status |
|---|---|
| Empty | [FILL IN: no observed state] |
| Loading | [FILL IN: no observed state] |
| Error | [FILL IN: no observed state] |
| Success | [FILL IN: no observed state] |
| Skeleton | [FILL IN: no observed state] |
| Disabled | [FILL IN: no observed state] |

## 15. Motion & Easing

No timing, easing, transition, or playback-control animation was captured. The opened-menu and selected-tab observations establish static states only. [FILL IN: product-specific motion evidence]
