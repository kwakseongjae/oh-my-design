---
name: TVING
colors:
  canvas: '#000000'
  surface-raised: '#2e2e2e'
  foreground: '#ffffff'
  foreground-secondary: '#a3a3a3'
  foreground-muted: '#6e6e6e'
  hairline: '#4f4f4f'
typography:
  compact:
    fontSize: 13.2px
    fontWeight: 400
    lineHeight: 1.5
    use: Observed opened-menu text on home and movie surfaces.
  body:
    fontSize: 16.5px
    fontWeight: 400
    lineHeight: 1.15
    use: Observed product-surface body and utility text.
  heading:
    fontSize: 22.0044px
    fontWeight: 700
    lineHeight: 1.5
    use: Observed product-surface heading text.
  live-tab:
    fontSize: 14.2956px
    fontWeight: 400
    lineHeight: 1.15
    use: Observed unselected live-route tab text.
rounded:
  menu: 4.95px
  live-pill: 109.996px
components:
  content-menu-trigger:
    type: button
    backgroundColor: '#000000'
    textColor: '#a3a3a3'
    rounded: 4.95px
    padding: 0px 16.5px
    typography: 13.2/400 Pretendard
    states: expanded, menu-open
    use: 'Combobox trigger (aria-haspopup=menu) at home::[data-omd-capture="19"] and "20" on home and movie; it sits in the footer row (top 647px, beside the footer links at 646px). Corrected 2026-09-29: its border width computes 0px, so the July border value is removed.'
  live-selected-tab:
    type: tab
    backgroundColor: rgba(255, 255, 255, 0.2)
    textColor: '#ffffff'
    rounded: 109.996px
    padding: 8.8044px 13.2px
    typography: 14.2956/700 Pretendard
    states: selected
    use: 'Observed selected tab on the supplied live route only (surface-3::[data-omd-capture="61"]); live-channel-tab records the same row with its unselected rest. Corrected 2026-09-29: its border width computes 0px, so the July border value is removed.'
  content-menu-listbox:
    type: card
    backgroundColor: '#212121'
    textColor: '#a3a3a3'
    border: '1px #4f4f4f'
    rounded: 4.95px
    padding: 0px
    size: 144px x 305px
    typography: 13.2px / 400 / 15.18px Pretendard
    shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px
    states: captured open after the collector opened its trigger (menu interaction recording expanded and menu-open); two listboxes on home and two on movie; no pointer-state frame
    use: Opened listbox of the combobox trigger at home::[data-omd-interaction-capture="menu-0-0"]; the computed shadow lists two alpha-0 layers before these two
  content-menu-option:
    type: listItem
    backgroundColor: transparent
    textColor: '#a3a3a3'
    rounded: 0px
    padding: 4.95px 6.6px
    height: 30px
    typography: 13.2px / 400 / 19.8px Pretendard
    states: 'rest captured inside the opened listbox; the first option of every captured listbox (menu-0-3 and menu-1-3 on home and movie) computes bg #2e2e2e with aria-selected false, and the dump does not say which state paints it, so it is not declared'
    use: Listbox option (role=option) at home::[data-omd-interaction-capture="menu-0-4"]
  header-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: rgba(255, 255, 255, 0.6)
    rounded: 0px
    padding: 0px
    height: 16px
    typography: 16px / 400 / 16px Pretendard
    selected: 'fg #ffffff, 16px / 700'
    states: 'rest and current-page link (class on) captured on the movie route; home computes rgba(255, 255, 255, 0.9) on all eight links with no current item, and the live route #ffffff / 400 on all eight; no pointer-state frame'
    use: Header navigation link (a.other) at surface-2::[data-omd-capture="1"]; the current-page link is "3" (a.other.on)
  header-subscribe-pill:
    type: button
    textColor: '#ffffff'
    rounded: 42px
    padding: 0px 12px
    size: 61px x 33px
    typography: 14px / 700 / 16.1px Pretendard
    states: default captured on all three routes; no pointer-state frame
    use: Header pill link at home::[data-omd-capture="9"]; its computed background-color is transparent on all three routes, the live copy names a gradient utility in its class list, and background-image is not in the dump, so no fill is claimed
  landing-cta:
    type: button
    backgroundColor: '#dedede'
    textColor: '#000000'
    rounded: 3px
    padding: 17.5956px 200.204px 19.8px
    height: 57px
    typography: 19.8px / 700 / 19.8px Pretendard
    states: default captured on home and movie (529 x 57 at top 459px on both); no pointer-state frame
    use: Large light-grey button at home::[data-omd-capture="11"]
  live-white-pill-cta:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 3.35544e+07px
    padding: 13.2px 26.4px
    height: 46px
    typography: 16.5px / 700 / 18.975px Pretendard
    states: default captured; no pointer-state frame
    use: Live-route white pill button at surface-3::[data-omd-capture="11"]; the computed radius is the rounded-full utility value and renders as a full pill
  live-round-icon-button:
    type: button
    backgroundColor: '#27272e'
    rounded: 3.35544e+07px
    padding: 0px
    size: 44px x 44px
    states: default captured; it declares aria-haspopup=dialog, but the collector opened no dialog and recorded no pointer-state frame for it
    use: Live-route round icon button at surface-3::[data-omd-capture="15"]; it has no text node, so no label colour is claimed
  live-channel-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#ffffff'
    rounded: 0px
    padding: 8.8044px 13.2px
    height: 34px
    typography: 14.2956px / 400 / 16.4399px Pretendard
    selected: bg rgba(255, 255, 255, 0.2), 14.2956px / 700, radius 109.996px
    states: unselected rest (capture 62, aria-selected=false) and the selected tab (capture 61, aria-selected=true, also recorded on its own as live-selected-tab); thirteen tabs in the row; no pointer-state frame
    use: Live-route tab (li role=tab) at surface-3::[data-omd-capture="62"]
  footer-link:
    type: tab
    backgroundColor: transparent
    textColor: '#a3a3a3'
    rounded: 0px
    padding: 0px
    height: 20px
    typography: 16.5px / 400 / 18.975px Pretendard
    states: default captured on seven links per route (home and movie 12-18, live 74-80); the third link in each row is 700 weight; no pointer-state frame
    use: 'Footer policy link row at home::[data-omd-capture="12"]; a smaller underlined link below it (capture 21) computes #6e6e6e at 14.2956px / 400'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: Pretendard
---

# Design System Inspiration of TVING (티빙)

## Overview

### Visual Theme & Atmosphere

TVING is CJ ENM's Korean streaming platform, serving series, movies, live channels, and sports. The three supplied public product routes use a cinema-dark field: black canvas, white and cool-gray text, a restrained raised surface, and a light hairline rather than a marketing-page palette. The product evidence is deliberately narrower than TVING's wider public narrative. CJ's 2025 lineup describes a program spanning varied original genres, signature franchises, and year-round live sports, while its earlier company reporting places TVING's independent expansion after its 2020 separation from CJ ENM and subsequent partnerships. Those are first-party context sources, not UI-token sources. [CJ ENM: TVING and Seezn](https://newsroom.cj.net/cj-enms-tving-and-kts-seezn-announce-merger-to-become-south-koreas-largest-ott-platform/) · [TVING 2025 lineup](https://newsroom.cj.net/?p=5803)

The captured home and movie routes share an opened content-menu treatment; the supplied live route adds a selected white-tint pill tab. This makes the reliable visual signature a high-contrast viewing shell with route-local navigation states, not the prior reference's inferred universal poster, CTA, category-color, or motion system.

**Key Characteristics:**

- Black `#000000` canvas with white primary text and gray secondary hierarchy.
- `#2e2e2e` is measured only as the background of the first option in each opened content listbox (home and movie); the listbox itself is `#212121`.
- `#4f4f4f` is the repeated high-confidence hairline/border value on home and movie.
- Product chrome uses a loaded, TVING-hosted Pretendard webfont; declared legacy faces are not promoted.
- State claims are limited to an expanded/menu-open content selector, a selected live tab, and the movie route's current-page header link, each with route and selector provenance. The capture holds no hover, pressed or focus frame on any element.

### Primary tasks

- Browse series and movies to find something to watch
- Watch a live channel or live sports as it airs

### Brand Narrative

CJ ENM's official account says TVING separated from CJ ENM in October 2020, then strengthened its platform position through a JTBC partnership and investment from Naver before its merger with KT's Seezn. That history establishes TVING as a Korean streaming platform built through content and platform partnerships; it does not establish a timeless UI system. [CJ ENM merger announcement](https://newsroom.cj.net/cj-enms-tving-and-kts-seezn-announce-merger-to-become-south-koreas-largest-ott-platform/)

The current public editorial record emphasizes a varied original-content slate and live sports coverage. CJ's 2025 announcement describes genre breadth, signature franchises, and year-round sports programming; a later CJ announcement frames international distribution as part of TVING's expansion. These facts explain the service's content scope and current direction, while the tokens in this reference remain tied only to the three captured Korean web routes. [TVING 2025 lineup](https://newsroom.cj.net/?p=5803) · [TVING global expansion](https://newsroom.cj.net/tving-partners-with-disney-japan-to-accelerate-global-expansion/)

### Principles

1. **Keep content domains distinct.** TVING's official lineup differentiates original genres, signature programs, and sports. *UI implication:* do not collapse different route contexts into an invented universal component system.
2. **Use contrast for viewing-first chrome.** The captured routes use black, white, and measured gray values. *UI implication:* preserve text hierarchy before adding decorative color.
3. **Require state provenance.** The capture supplies menu-open and selected examples only. *UI implication:* make a state reusable only when its route, selector, and computed values are recorded.

### Personas

*No first-party TVING persona research or demographic segmentation was collected for this reference. Do not fabricate customer archetypes, motivations, or survey findings.*

## Colors

### Observed live product surface

- **Canvas** (`#000000`) — repeated background on home, movie, and live captures.
- **Raised surface** (`#2e2e2e`) — the background of the first option in each opened content listbox (four occurrences, home and movie, all with `aria-selected` false). It has no other use in the capture. Corrected 2026-09-29: the July line implied wider use.
- **Foreground** (`#ffffff`) — repeated primary text on all three captured routes.
- **Secondary foreground** (`#a3a3a3`) — repeated menu and supporting text color across all routes.
- **Muted foreground** (`#6e6e6e`) — repeated subdued text color across all routes.
- **Hairline** (`#4f4f4f`) — repeated border value on home and movie routes.

### Boundary

The catalog-level `primary_color` remains `#ff153c`, but the supplied 2026 product capture does not provide computed selector evidence for a red CTA, a universal red accent, or the earlier six-color category taxonomy. They are not retained as live UI tokens. Corporate/editorial imagery and TVING's legal or subscription pages are separate source domains and do not fill that gap.

Component-level values stay in their component records rather than the palette: the landing CTA's `#dedede` fill and the live round icon button's `#27272e` (§4).

## Typography

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

## Layout

The three supplied product routes establish route scope, not a full layout system. Home and movie share compact menu controls; the live route supplies a 34px tab treatment. No mobile viewport, grid, card aspect ratio, sticky header, player geometry, or breakpoint is retained because the collector evidence does not provide reliable cross-viewport provenance.

### Responsive Behavior

No mobile or alternate viewport was supplied. Touch targets, breakpoint changes, menu placement, shelf grids, and player behavior remain unverified.

## Elevation & Depth

The opened content menu is the only measured elevated layer: it uses `#212121`, a 1px `#4f4f4f` border, 4.95px radius, and two low-opacity black shadow layers. This route-local opened state does not authorize a global shadow scale. The normal controls retained in §4 report no shadow.

## Motion & Easing

No timing, easing, transition, or playback-control animation was captured. The opened-menu and selected-tab observations establish static states only.

## Components

### Content selector

**Trigger — expanded/menu-open**
- Background: #000000
- Text: #a3a3a3
- Radius: 4.95px
- Padding: 0px 16.5px
- Font: 13.2px / 400 / Pretendard
- States: expanded, menu-open. The collector's menu interaction on this selector recorded both and captured the opened listbox below; the values above are the trigger element's own capture.
- Use: combobox triggers with aria-haspopup=menu at `home::[data-omd-capture="19"]` (20px high) and `"20"` (23px high), and the same pair on movie. They sit in the footer row, at rect top 647px beside the footer links at 646px. Corrected 2026-09-29: the July line listed a #a3a3a3 border; the border width computes 0px, so no border is specified.

**Opened listbox**
- Background: #212121
- Text: #a3a3a3
- Border: 1px #4f4f4f
- Radius: 4.95px
- Size: 144px × 305px (the second listbox is 170px × 317px)
- Font: 13.2px / 400 / 15.18px Pretendard
- Shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px (after two alpha-0 layers)
- Use: `home::[data-omd-interaction-capture="menu-0-0"]`, captured open on home and movie.

**Listbox option**
- Background: transparent
- Text: #a3a3a3
- Padding: 4.95px 6.6px
- Height: 30px
- Font: 13.2px / 400 / 19.8px Pretendard
- Use: role=option rows from `home::[data-omd-interaction-capture="menu-0-4"]` on. The first option of every captured listbox (`menu-0-3`, `menu-1-3`) computes background #2e2e2e while `aria-selected` is false on every option; the dump does not say which state paints it, so no state is declared.

### Live navigation

**Selected tab — selected**
- Background: rgba(255, 255, 255, 0.2)
- Text: #ffffff
- Radius: 109.996px
- Padding: 8.8044px 13.2px
- Font: 14.2956px / 700 / Pretendard
- States: selected
- Use: `surface-3::[data-omd-capture="61"]` on `https://www.tving.com/live/C00551`, `aria-selected="true"`; observed 34px rendered height only. Corrected 2026-09-29: the July line listed a #ffffff border; the border width computes 0px.

**Live channel tab — rest / selected**
- Background: transparent; selected rgba(255, 255, 255, 0.2) with a 109.996px radius
- Text: #ffffff; selected at 700
- Radius: 0px
- Padding: 8.8044px 13.2px
- Height: 34px
- Font: 14.2956px / 400 / 16.4399px Pretendard
- Use: the thirteen tabs of the live row; rest at `surface-3::[data-omd-capture="62"]` (`aria-selected="false"`), selected at `"61"`.

### Header

**Header navigation link — rest / selected**
- Background: transparent
- Text: rgba(255, 255, 255, 0.6) at rest on movie; the current-page link (class `on`) #ffffff at 700
- Height: 16px
- Font: 16px / 400 / 16px Pretendard
- Use: `surface-2::[data-omd-capture="1"]`, current page `"3"`. Home computes rgba(255, 255, 255, 0.9) on all eight links with no current item; the live route computes #ffffff / 400 on all eight.

**Header pill link — observed default**
- Text: #ffffff
- Radius: 42px (the live copy computes the rounded-full value)
- Padding: 0px 12px
- Size: 61px × 33px
- Font: 14px / 700 / 16.1px Pretendard
- Use: `home::[data-omd-capture="9"]` on all three routes. Its computed background-color is transparent; the live copy names a gradient utility in its class list, and background-image is not in the dump, so no fill is specified.

### Calls to action

**Landing CTA — observed default**
- Background: #dedede
- Text: #000000
- Radius: 3px
- Padding: 17.5956px 200.204px 19.8px
- Height: 57px
- Font: 19.8px / 700 / 19.8px Pretendard
- Use: `home::[data-omd-capture="11"]`, 529px × 57px at top 459px on both home and movie.

**Live white pill — observed default**
- Background: #ffffff
- Text: #000000
- Radius: full (computed 3.35544e+07px, the rounded-full utility value)
- Padding: 13.2px 26.4px
- Height: 46px
- Font: 16.5px / 700 / 18.975px Pretendard
- Use: `surface-3::[data-omd-capture="11"]` on the live route.

**Live round icon button — observed default**
- Background: #27272e
- Radius: full (computed 3.35544e+07px)
- Size: 44px × 44px
- Use: `surface-3::[data-omd-capture="15"]`; no text node, so no label colour. It declares `aria-haspopup="dialog"`, but the collector opened no dialog.

### Footer

**Footer link — observed default**
- Background: transparent
- Text: #a3a3a3
- Height: 20px
- Font: 16.5px / 400 / 18.975px Pretendard; the third link in each row is 700
- Use: seven links per route, `home::[data-omd-capture="12"]` through `"18"` (live `"74"` through `"80"`). A smaller underlined link below them computes #6e6e6e at 14.2956px / 400 (`home::[data-omd-capture="21"]`).

Every component above is specified at rest; the header navigation link and the live channel tab carry measured selected variants. The bundle holds no hover, pressed or focus frame on any of its 335 elements, so no pointer state is specified. No poster card, dialog, error, disabled, or responsive variant is specified: the supplied evidence does not provide the required selector and state provenance.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.tving.com/; https://www.tving.com/movie; https://www.tving.com/live/C00551; https://www.tving.com/policy/terms?viewType=webview; https://newsroom.cj.net/cj-enms-tving-and-kts-seezn-announce-merger-to-become-south-koreas-largest-ott-platform/; https://newsroom.cj.net/?p=5803; https://github.com/orioncactus/pretendard/blob/main/LICENSE
**Tier 2 sources:** https://getdesign.md/tving (no usable indexed record returned); https://styles.refero.design/?q=tving (no usable style record returned)
**Conflicts unresolved:** none

The supplied capture corroborates only the values and states above. Legacy red CTA, category-color, poster-card, avatar, sports-geometry, motion, and inferred-product claims are intentionally omitted rather than reconstructed from CSS declarations, corporate material, or an adjacent route.

### States

Only an opened content menu, a selected live tab, and the movie route's current-page header link were captured; the bundle holds no hover, pressed or focus frame. The following product states require direct product-surface observation before specification:

| Category | Evidence status |
|---|---|
| Empty | Not observed in the captured routes |
| Loading | Not observed in the captured routes |
| Error | Not observed in the captured routes |
| Success | Not observed in the captured routes |
| Skeleton | Not observed in the captured routes |
| Disabled | Not observed in the captured routes |

## Do's and Don'ts

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

## Voice & Tone

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

## Agent Prompt Guide

### Verified prompt boundary

“Create only the captured TVING product chrome: a black streaming shell with white, `#a3a3a3`, and `#6e6e6e` text; an expanded black content selector with a 4.95px corner; and the selected live tab with a 20% white fill and 109.996px pill radius. Use loaded Pretendard. Do not add red CTAs, poster cards, category colors, player geometry, or unobserved interaction states.”

## Governance

### Known Gaps

- **Contrast, `live-selected-tab`.** Text `#ffffff` on `#ffffff33` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
