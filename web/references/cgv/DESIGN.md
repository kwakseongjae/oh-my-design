---
name: CGV
colors:
  foreground: '#121212'
  canvas: '#ffffff'
  subtle: '#f4f4f4'
  secondary: '#454545'
  line: '#d9d9d9'
  signal: '#fc5555'
typography:
  display:
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: '-0.4px'
    use: Observed prominent body-role heading
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: '-0.2px'
    use: Observed public-page body and input copy
  label:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: '-0.2px'
    use: Observed category-tab label
rounded:
  badge: 4px
  media: 16px
  action: 20px
  chip: 25px
spacing:
  dense: 10
  sm: 8
  base: 16
  lg: 24
components:
  category-chip:
    type: button
    backgroundColor: '#f4f4f4'
    textColor: '#454545'
    border: '1px solid #f4f4f4'
    rounded: 25px
    padding: 0px 16px
    height: 40px
    typography: 15px / 400 / Pretendard
    selected: 'bg #121212, border 1px #121212, fg #ffffff, 15px / 700'
    states: rest on four main-category tabs (home capture 36-39); the tab with class maintab_tabTitleActive (capture 35) differs from them and is recorded as selected; the bundle holds no state frame for any CGV element
    use: Public main-category tab
  outline-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#121212'
    border: '1px solid #d9d9d9'
    rounded: 20px
    padding: 9px 24px
    typography: 14px / 500 / Pretendard
    states: rest on 33 movie-card actions per capture; rects vary with the carousel slide they sit on (e.g. 104px x 31px, 90px x 31px); no state frame
    use: Rounded public movie-card action (button.btn.btn-round32.line-gray.bg-white) at home::[data-omd-capture="49"]
  screen-format-badge:
    type: badge
    backgroundColor: rgba(0, 0, 0, 0.55)
    rounded: 4px
    padding: 0px 5px
    height: 20px
    use: Movie-card screen-format marker (span.badge.screenType.img); all 15 sampled badges record no text (textLength 0), so no label colour or type is claimed
  menu-row:
    type: listItem
    backgroundColor: transparent
    rounded: 0px
    height: 40px
    use: 'Observed public navigation/menu row (li.mets01390_linkItem, 200px x 40px, five per capture); its #121212 and 10px / 400 equal the page body''s inherited values, so no label style is claimed'
  line-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#121212'
    padding: 2px 0px 8px
    height: 25px
    typography: 15px / 500 / 15px Pretendard, tracking -0.225px
    selected: 'weight 700, tracking -0.3px; fg #121212 as at rest'
    states: rest on five tabs (home capture 42-46); the tab with class linetabMini_tabTitleActive (capture 41) differs from them and is recorded as selected; the bundle holds no state frame for any CGV element
    use: Movie-chart line tab (button.linetabMini_tabTitle) at home::[data-omd-capture="42"], 74px x 25px; the capture records no border on the tab element
  like-button:
    type: button
    backgroundColor: rgba(18, 18, 18, 0.2)
    rounded: 50%
    size: 36px x 36px
    states: rest on 22-23 buttons per capture; copies on the smaller carousel slides render 27-33px; no state frame
    use: 'Circular like button (button.btn-like.dark) on the largest movie-chart poster at home::[data-omd-capture="51"]; its own #121212 and 10px / 400 equal the page body''s inherited values, so no label style is claimed'
  poster-card:
    type: card
    rounded: 12px
    size: 254px x 362px
    shadow: rgba(18, 18, 18, 0.24) 0px 20px 25px 0px on the largest card
    states: rest; 33 poster areas per capture; the largest records the shadow, the other 32 a zero-alpha shadow and smaller rects; no state frame
    use: Movie-chart poster area (div.mainMovieChartCard_imgArea) holding the poster image (img.mainMovieChartCard_poster, same rect); its text values are inherited, so no label style is claimed
  search-input:
    type: input
    backgroundColor: transparent
    textColor: '#000000'
    border: '1px #121212'
    rounded: 8px
    padding: 0px 52px 0px 16px
    size: 530px x 46px
    typography: 14px / 400 / 19.6px Pretendard, tracking -0.2px
    states: rest, empty (textLength 0); no state frame
    use: Main search field (input.mainSearch_mainSearchInput) at home::[data-omd-capture="141"]; its 52px right padding matches the 52px x 46px search button beside it (capture 143, radius 0px 8px 8px 0px)
  search-shortcut-pill:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#121212'
    border: '1px #e9e9e9'
    rounded: 30px
    padding: 0px 12px
    height: 46px
    typography: 13px / 500 / 13px Pretendard, tracking -0.2px
    states: rest on three pills (home capture 144-146); no state frame
    use: Search shortcut pill (button.mainSearch_searchBtn) at home::[data-omd-capture="145"], 78px x 46px, below the search field; the two with class mainSearch_withImg (capture 144, 146) use 0px 12px 0px 6px padding
  reserve-button:
    type: button
    backgroundColor: transparent
    textColor: '#fc5555'
    border: '1px #fc5555'
    rounded: 4px
    padding: 8px
    size: 60px x 29px
    typography: 11px / 500 / 11px Pretendard, tracking -0.165px
    states: rest; one per capture (surface-2 and surface-3 capture 151); no state frame
    use: 'Outline button with class btn_reserve at home::[data-omd-capture="152"], inside the video article, below its player; the #fc5555 signal value is this button''s text and border'
  text-link-button:
    type: button
    backgroundColor: transparent
    textColor: '#707070'
    size: 77px x 20px
    typography: 14px / 400 / 19.6px Pretendard, tracking -0.21px
    states: rest; no state frame
    use: Movie-chart text button (button.mainMovieChart_linkBtn) at home::[data-omd-capture="47"], at the end of the line-tab row; column gap 2px
  footer-link:
    type: button
    backgroundColor: transparent
    textColor: '#707070'
    padding: 0px 9px 0px 0px
    height: 17px
    typography: 12px / 400 / 16.8px Pretendard, tracking -0.2px
    states: rest on eight footer links (home capture 21-28); no state frame
    use: Footer link (button.cgv-footer-link) at home::[data-omd-capture="21"]; the last link of each row (capture 23, 25, 28) has 0px padding
  common-select:
    type: input
    backgroundColor: transparent
    textColor: '#121212'
    border: '1px #d9d9d9'
    rounded: 10px
    padding: 0px 16px
    size: 200px x 48px
    typography: 14px / 400 / 19.6px Pretendard, tracking -0.2px
    states: rest; no state frame
    use: Native select (select.select_commonSelect) below the footer links at home::[data-omd-capture="29"]
  bottom-sheet:
    type: dialog
    backgroundColor: '#ffffff'
    rounded: 24px 24px 0px 0px
    padding: 20px 0px 32px
    size: 600px x 391px
    states: open in all three captures (div.cgv-modal.cgv-bot-modal.active, role dialog); no state frame
    use: 'Promotional bottom sheet (div.main-modal-container), 600px wide and flush with the bottom of the 900px viewport (top 509px); its own #121212 10px / 400 is inherited page text, so no label style is claimed'
  sheet-close-button:
    type: button
    backgroundColor: '#f5f5f5'
    textColor: '#707070'
    rounded: 6px
    padding: 8px 10px
    size: 40px x 28px
    typography: 12px / 400 / 12px Pretendard, tracking -0.2px
    states: rest; no state frame
    use: 'Close button (button.mmns00008_close) in the bottom sheet at home::[data-omd-capture="8"]; beside it a fill-less #707070 14px / 400 / 19.6px text button (button.mmns00008_today, capture 7)'
  round-outline-pill:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    border: '1px #ffffff'
    rounded: 100px
    padding: 0px 12px
    size: 90px x 34px
    typography: 12px / 500 / 16.8px Pretendard, tracking -0.2px
    states: rest; no state frame
    use: White outline pill (button.mets01390_roundBtn) at home::[data-omd-capture="30"], under white 22px / 700 and 14px / 700 text (p.mets01390_title, p.mets01390_txt); the fill behind the three is not in the capture
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of CGV

## Overview

### Visual Theme & Atmosphere

CGV is Korea’s multiplex cinema brand and a consumer-facing service for finding films, choosing a theatre, and moving toward a viewing experience. Its recognizable expression pairs the practical density of a ticketing and programme surface with cinema-oriented moments: black `#121212` text and outlines, an open white `#ffffff` canvas, small screen-format labels, compact movie metadata, and rounded actions around discovery. That restrained public-web palette does not by itself establish a historical CGV logo or corporate colour system; it describes the supplied current surface only. CGV introduced the multiplex format in Korea with Gangbyeon in 1998 and has evolved its stated Cultureplex proposition beyond a conventional screening venue. Its 2024 sustainability report describes a rebranding campaign around “Deep Dive Space,” positioning the business around immersive experience, special formats, CGV-only content, and expanded space use.

The captured interface is crisp and utility-led rather than theatrical by default. Square list rows coexist with 4px format badges, 16px media corners, 20px outline actions, and 25px category chips. This reference keeps those role-specific geometries separate instead of inventing a universal radius or a red primary action from brand familiarity.

**Key Characteristics:**
- White `#ffffff` public canvas with near-black `#121212` information hierarchy
- Loaded Pretendard across the captured public surface
- `#f4f4f4` / `#454545` rounded category treatment and `#d9d9d9` outline actions
- Compact 12px, 13px, 14px, 15px, and 22px observed text roles; the 10px on the page body and its wrappers is the inherited root size, not a rendered label (corrected 2026-09-30)
- Rest values for tabs, buttons, fields, a select, a bottom sheet, poster cards, badges, and a navigation row, plus two class-marked selected tabs; the bundle holds no hover, pressed, or focus frame

### Primary tasks

- Find a film and choose a theatre to watch it in
- Pick a screening by title, time, location, and format
- Choose a special-format screening such as 4DX or ScreenX

### Iconography & Imagery

- Movie artwork and screen-format labels carry much of the public discovery context; the verified badge sits as a compact overlay.
- `swiper-icons` is declared-only and is not promoted as a CGV icon token.
- No CGV brand-icon grid, illustration style, or imagery treatment beyond these supplied public observations is specified here.

### Brand Narrative

CGV opened Gangbyeon in 1998 as Korea’s first multiplex and later formed the CJ CGV corporate identity through the CJ Village / CJ Golden Village lineage. The official history describes a shift away from the single-screen cinema model toward a cultural space that connects film viewing with adjacent lifestyle experiences.

The current corporate narrative calls this direction Cultureplex: a comprehensive cultural and lifestyle space built around differentiated viewing environments, services, and content. In 2024 CGV documented a “Deep Dive Space” rebranding campaign, connecting special-format expansion, CGV-only content, and broader use of physical space to a more immersive experience.

This narrative is official brand context, not a substitute for UI evidence. The canonical tokens remain limited to the supplied public-web capture.

### Principles

1. **Evolve beyond a screening transaction.** CGV’s official mission frames the brand as more than a film-viewing environment. *UI implication:* connect practical selection steps to confirmed format and venue context.
2. **Make differentiated experiences legible.** Special formats and content are part of the stated direction. *UI implication:* present verified format information as clear, compact metadata.
3. **Design for cultural use, not only attendance.** The Cultureplex proposition treats the venue as a broader cultural space. *UI implication:* avoid reducing supporting discovery content to decoration when it informs a real visit.
4. **Keep practical decisions clear.** A cinema service still needs reliable choices around title, time, location, and format. *UI implication:* preserve strong text hierarchy and explicit actions.

### Personas

These are stakeholder groups stated or directly implied by first-party CGV materials, not fictional personas or synthetic research.

- **Moviegoers:** people choosing a film, a theatre, and a viewing format; the public experience should keep essential selection information clear.
- **Cultureplex visitors:** audiences using a cinema venue as a broader cultural and leisure destination, consistent with CGV’s stated Cultureplex direction.
- **Special-format audiences and partners:** people engaging with differentiated formats such as 4DX or ScreenX; format claims should remain accurate and specific.

## Colors

### Current public-surface colors

- **Foreground** (`#121212`): dominant captured text, border, and dark surface value.
- **Canvas** (`#ffffff`): repeated page and outlined-action surface.
- **Subtle control** (`#f4f4f4`): observed category-chip background and border.
- **Secondary text** (`#454545`): category-chip foreground.
- **Line** (`#d9d9d9`): observed rounded outline-action border.
- **Signal** (`#fc5555`): a low-frequency public text/border observation; it is preserved as a signal value, not promoted to a primary or state palette. The bundle records it on one element per capture, the `btn_reserve` outline button (§4).
- **Component-local colours** recorded in §4, not promoted to palette roles: `#707070` (footer links, the chart text button, and the bottom-sheet close label on a `#f5f5f5` fill), `#e9e9e9` (search shortcut pill border), `#000000` (search field text), and the translucent fills `rgba(18, 18, 18, 0.2)` (poster like button) and `rgba(0, 0, 0, 0.55)` (screen-format badge).

No verified current error, success, warning, hover, pressed, or focus palette was supplied. Those groups are omitted.

## Typography

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | No official CGV product typography specification was supplied or used for token promotion. |
| Live computed surface-use | `pretendard` is loaded/high with 1,217 visible uses across headings, body, buttons, cards, dialogs, inputs, list items, and badges in the supplied capture. |
| Official distributed brand asset | No CGV-exclusive distributed font asset was verified. |
| Declared-only | `Roboto` and `swiper-icons` appear in declarations or sources with zero visible text usage; neither is a UI family token. |
| Unresolved | Native-app, authenticated booking-flow, and special-format campaign typography are not resolved by this capture. |

### Font family

- **Current public UI family:** `Pretendard` followed by the observed system fallbacks.
- The supplied font evidence links nine CGV CDN Pretendard webfont sources and backs the computed family with a loaded FontFace.
- Pretendard’s own distribution is under the SIL Open Font License 1.1; that licence describes the font project, not a CGV-owned font asset.

### Observed hierarchy

| Role | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---:|---|
| Prominent heading | Pretendard | 22px | 700 | 30.8px | -0.4px | Observed prominent body-role heading |
| Public body | Pretendard | 14px | 400 | 19.6px | -0.2px | Body and input copy |
| Category label | Pretendard | 15px | 400 | 15px | -0.2px | Category-tab label; the selected tab sets 700 |
| Line tab | Pretendard | 15px | 500 | 15px | -0.225px | Movie-chart line tab; the selected tab sets 700 and -0.3px |
| Footer link | Pretendard | 12px | 400 | 16.8px | -0.2px | Footer links |

Corrected 2026-09-30: a "Screen marker" row (11px / 700 / 19px) described the screen-format badge, but all 15 sampled badges record no text (textLength 0), so it was not a rendered text style and is withdrawn. The 10px / 400 / 10px on the page body, wrappers, the menu row, and icon buttons is the root size those elements inherit, not a label.

## Layout

- Use white public surfaces and a near-black information hierarchy where the captured CGV pattern is relevant.
- Keep dense content roles compact: 12-14px metadata, 8/10/16/24px recurring spacing, and 40px category/menu controls where specifically observed (10px is the inherited root size, not a metadata style; corrected 2026-09-30).
- Treat rounded controls as role-specific: 25px category chip, 20px outline action, 16px media, and 4px badge.
- Do not generalize the supplied home capture into authenticated seat selection, payment, or theatre-operation layouts.

### Responsive Behavior

- The supplied evidence confirms public components across three capture surfaces but does not establish a responsive breakpoint system.
- Preserve the observed component values only where they remain appropriate; breakpoint, navigation collapse, and seat-map behavior are unresolved.

## Elevation & Depth

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Motion & Easing

No duration, easing, transition, or animated-state value is present in the supplied evidence. No motion token is prescribed for CGV in this reference.

## Components

### Current verified components

**Category Chip**
- Background: `#f4f4f4`
- Text: `#454545`
- Border: 1px solid `#f4f4f4`
- Radius: 25px
- Padding: 0px 16px
- Height: 40px
- Font: 15px / 400 / Pretendard
- Selected: background `#121212`, border 1px `#121212`, text `#ffffff`, 15px / 700 — the tab with class `maintab_tabTitleActive` (`home::[data-omd-capture="35"]`, 86px × 40px)
- States: rest on four tabs (`home::[data-omd-capture="36"]` to `"39"`) plus the class-marked selected tab; the bundle holds no hover, pressed, or focus frame.
- Use: Public main-category tab

**Outline Action**
- Background: `#ffffff`
- Text: `#121212`
- Border: 1px solid `#d9d9d9`
- Radius: 20px
- Padding: 9px 24px
- Font: 14px / 500 / Pretendard
- States: rest on 33 movie-card actions per capture; the bundle holds no hover, pressed, or focus frame.
- Use: Rounded public movie-card action, `home::[data-omd-capture="49"]` (104px × 31px). Corrected 2026-09-30: the July record cited capture `"128"`, a copy that renders 30px × 10px on a scaled carousel slide; its computed values are the same.

**Screen Format Badge**
- Background: `rgba(0, 0, 0, 0.55)`
- Radius: 4px
- Padding: 0px 5px
- Height: 20px
- Use: Movie-card screen-format marker (`span.badge.screenType.img`). Corrected 2026-09-30: the July record gave it text `#121212` and 11px / 700 type, but all 15 sampled badges record no text (textLength 0); the colour is inherited and no label style is claimed.

**Menu Row**
- Background: transparent
- Radius: 0px
- Height: 40px
- Use: Observed public navigation/menu row (`li.mets01390_linkItem`, 200px × 40px, five per capture). Corrected 2026-09-30: the July record gave it text `#121212` and 10px / 400 type; those equal the page body's inherited values on a container, so no label style is claimed.

### Line tab

**Rest** (`line-tab`): text `#121212`, 15px / 500 / 15px Pretendard, tracking -0.225px, padding 2px 0px 8px, 25px high; `home::[data-omd-capture="42"]` (`button.linetabMini_tabTitle`, 74px × 25px) and four siblings (`"43"` to `"46"`). The capture records no border on the tab element.

**Selected**: the tab with class `linetabMini_tabTitleActive` (`"41"`) sets 700 and tracking -0.3px; its text stays `#121212`.

### Search field and shortcut pills

**Search field** (`search-input`): transparent fill, text `#000000`, border 1px `#121212`, 8px radius, padding 0px 52px 0px 16px, 530px × 46px, 14px / 400 / 19.6px; `home::[data-omd-capture="141"]` (`input.mainSearch_mainSearchInput`), empty in the capture. The 52px right padding matches the 52px × 46px search button beside it (`"143"`, radius 0px 8px 8px 0px).

**Shortcut pill** (`search-shortcut-pill`): background `#ffffff`, text `#121212`, border 1px `#e9e9e9`, 30px radius, padding 0px 12px, 46px high, 13px / 500 / 13px; `home::[data-omd-capture="145"]` (`button.mainSearch_searchBtn`, 78px × 46px). The two with class `mainSearch_withImg` (`"144"`, `"146"`) use 0px 12px 0px 6px padding.

### Poster like button and poster card

**Like button** (`like-button`): fill `rgba(18, 18, 18, 0.2)`, 50% radius, 36px × 36px on the largest poster; `home::[data-omd-capture="51"]` (`button.btn-like.dark`), 22-23 per capture. Copies on the smaller carousel slides render 27-33px, so only the largest size is recorded. Its own `#121212` and 10px / 400 are the page body's inherited values, so no label style is claimed.

**Poster card** (`poster-card`): 12px radius, 254px × 362px (`div.mainMovieChartCard_imgArea` holding `img.mainMovieChartCard_poster`). Of the 33 poster areas per capture, the largest records the shadow `rgba(18, 18, 18, 0.24) 0px 20px 25px 0px`; the other 32 record a zero-alpha shadow and smaller rects.

### Reserve button

**Rest** (`reserve-button`): transparent fill, text and 1px border `#fc5555`, 4px radius, 8px padding, 60px × 29px, 11px / 500 / 11px, tracking -0.165px; `home::[data-omd-capture="152"]` (`button.btn_reserve`; `"151"` on the other two captures), one per capture, inside the video article below its player. The article's player controls (`button.btn_play`, `.btn_muted`, `.btn_fullscreen`) belong to an embedded player and are not promoted.

### Text buttons

**Chart text button** (`text-link-button`): text `#707070`, 14px / 400 / 19.6px, tracking -0.21px, 77px × 20px, column gap 2px; `home::[data-omd-capture="47"]` (`button.mainMovieChart_linkBtn`) at the end of the line-tab row.

**Footer link** (`footer-link`): text `#707070`, 12px / 400 / 16.8px, padding 0px 9px 0px 0px, 17px high; `home::[data-omd-capture="21"]` to `"28"` (`button.cgv-footer-link`). The last link of each row (`"23"`, `"25"`, `"28"`) has 0px padding.

### Select

**Rest** (`common-select`): transparent fill, text `#121212`, border 1px `#d9d9d9`, 10px radius, padding 0px 16px, 200px × 48px, 14px / 400 / 19.6px; `home::[data-omd-capture="29"]` (`select.select_commonSelect`), below the footer links.

### Bottom sheet

**Open** (`bottom-sheet`): background `#ffffff`, radius 24px 24px 0px 0px, padding 20px 0px 32px, 600px × 391px, flush with the bottom of the 900px viewport (top 509px); `div.main-modal-container` inside `div.cgv-modal.cgv-bot-modal.active` (role dialog), open in all three captures.

**Close button** (`sheet-close-button`): background `#f5f5f5`, text `#707070`, 6px radius, padding 8px 10px, 40px × 28px, 12px / 400 / 12px; `home::[data-omd-capture="8"]` (`button.mmns00008_close`). Beside it, `button.mmns00008_today` (`"7"`) is a fill-less `#707070` 14px / 400 / 19.6px text button.

### Round outline pill

**Rest** (`round-outline-pill`): transparent fill, text and 1px border `#ffffff`, 100px radius, padding 0px 12px, 90px × 34px, 12px / 500 / 16.8px; `home::[data-omd-capture="30"]` (`button.mets01390_roundBtn`), under white 22px / 700 and 14px / 700 text (`p.mets01390_title`, `p.mets01390_txt`). The fill behind the three is not in the capture.

The capture contains 383 component variants over three captures of the same URL (`https://cgv.co.kr/`); `surface-2` and `surface-3` repeat the home's elements and computed styles with small rect differences, so every citation above uses `home`. Only the selector-backed variants above are canonical tokens. Not promoted: the carousel-library arrows (`button.swiper-button-prev` / `-next`, colour `#007aff`, no text), the embedded video controls, and two class markers with no unmarked sibling to compare against (`button.cgv-footer-content-title.active`, the search banner's `mainSearch_active`). No showtime, seat, or booking-flow control is in the bundle. Corrected 2026-09-30: the July text read `interactionCount: 0` as the reason no states exist; that counter covers opened dialogs, tabs, and menus. States are absent because the bundle holds no `::state-*` sample for any of its 1,220 elements, so no hover, pressed, or focus value is declared.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://cgv.co.kr/ · https://img.cgv.co.kr/company/sustainabilityStrategy/Report/2024/2024_CJCGV_SUSTAINABILITY_REPORT_kor.pdf
**Tier 2 sources:** https://getdesign.md/cgv (attempted; unavailable) · https://styles.refero.design/?q=cgv (attempted; unavailable)
**Conflicts unresolved:** none

### States

Observed: two class-marked selected tabs — the main-category tab (`maintab_tabTitleActive`: `#121212` fill and border, `#ffffff` label at 700) and the movie-chart line tab (`linetabMini_tabTitleActive`: 700, tracking -0.3px) — and the bottom sheet, open in all three captures. The bundle holds no hover, pressed, or focus frame for any element, so none is declared. Two class markers have no unmarked sibling to compare against (`button.cgv-footer-content-title.active`, the search banner's `mainSearch_active`), so neither is recorded as a state. The following content requirements are not token values and must be designed only with separately verified visual evidence.

| Category | Requirement |
|---|---|
| Empty | Explain when no film, theatre, or schedule is available. |
| Loading | Preserve context while programme or booking data is pending. |
| Error — availability | State when a requested session is no longer available. |
| Error — network | State when current information could not be retrieved. |
| Success | Confirm the completed user action with the relevant context. |
| Skeleton | Reserve structure without asserting unmeasured geometry. |
| Disabled | Explain why a booking or selection action cannot proceed. |

## Do's and Don'ts

### Do

- Preserve a clear contrast hierarchy with `#121212` content on `#ffffff` surfaces.
- Use the verified rounded category and outline-action patterns only in their observed public roles.
- Keep screen-format metadata compact and subordinate to movie information.

### Don't

- Treat the low-frequency `#fc5555` observation as a universal CGV primary or error colour.
- Add hover, focus, pressed, disabled, or error component values from assumptions.
- Substitute Roboto, swiper-icons, or a system fallback as though it were the loaded Pretendard UI family.

## Voice & Tone

The corporate material frames CGV around immersive, differentiated cultural experience; public UI copy should be direct, experience-oriented, and concise rather than overly cinematic.

| Voice quality | Use | Avoid |
|---|---|---|
| Clear | Name the film, theatre, format, and next action plainly. | Vague promotional instructions. |
| Immersive | Describe a confirmed format or space experience. | Promising an unverified sensory outcome. |
| Considerate | Give timing and booking information in compact language. | Hiding practical constraints behind campaign language. |

- “영화와 상영 시간을 선택하세요.” *(illustrative; no claim of current CGV copy)*
- “특별관 정보를 확인하세요.” *(illustrative; no claim of current CGV copy)*
- “예매 내용을 다시 확인하세요.” *(illustrative; no claim of current CGV copy)*

## Governance

### Accessibility Notes

- Maintain the observed high-contrast `#121212` / `#ffffff` reading hierarchy when applying these public patterns.
- The supplied capture has no focus or error-state observation; accessible focus treatment and form validation styling require separate verified evidence.
- Do not rely on screen-format badge colour alone to convey movie-format information.

### Known Gaps

- **Contrast, `line-tab`.** Text `#121212` on `#00000000` measures 1.12:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-input`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `text-link-button`.** Text `#707070` on `#00000000` measures 4.24:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-link`.** Text `#707070` on `#00000000` measures 4.24:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `common-select`.** Text `#121212` on `#00000000` measures 1.12:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
