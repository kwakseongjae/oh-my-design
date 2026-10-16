---
name: Shinhan Card
colors:
  primary: '#005df9'
  canvas: '#ffffff'
  surface: '#f8f9fc'
  tonal: '#f0f4fa'
  surface-accent: '#ebf0ff'
  ink: '#101828'
  body: '#475467'
  slate: '#344054'
  muted: '#667085'
  border: '#e4e7ec'
  danger: '#f44f4f'
  danger-bg: '#fff6f5'
typography:
  display:
    fontSize: 32px
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: '-0.64px'
    use: Promotional card title observed on the public home surface
  title:
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-0.56px'
    use: Detail-page heading observed on credit-card product surface
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.71
    letterSpacing: '-0.28px'
    use: Product-page reading text and controls
  compact:
    fontSize: 12px
    fontWeight: 300
    lineHeight: 1.67
    letterSpacing: '-0.24px'
    use: Compact product and menu metadata
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
spacing:
  tight: 4
  compact: 8
  regular: 12
  surface: 20
components:
  badge-danger:
    type: badge
    backgroundColor: '#fff6f5'
    textColor: '#f44f4f'
    rounded: 12px
    padding: 2px 8px
    typography: 11px / 500
    use: Tinted text badge on the public home surface (shc-badge--text type-tint theme-red)
  badge-blue:
    type: badge
    backgroundColor: '#ebf0ff'
    textColor: '#005df9'
    rounded: 12px
    padding: 2px 8px
    typography: 11px / 500
    use: Tinted text badge on the public home surface (shc-badge--text type-tint theme-blue)
  primary-action:
    type: button
    backgroundColor: '#005df9'
    rounded: 16px
    padding: 2px 12px
    height: 56px
    states: default captured on all three surfaces (home anchor 312 px wide; detail-page buttons 580 px wide); the capture holds no state frame for this action
    use: shc-btn theme-primary size-xl at home::[data-omd-capture="27"] (also surface-2 capture 32, surface-3 capture 29). The root computes the inherited body text (#101828, 14px / 400 / 24px) and its label element was not sampled, so no label colour or type is declared
    typography: 14px / 400
    pressed: transform matrix(0.96, 0, 0, 0.96, 0, 0) (+1 nested-layer changes) (:hover + :active)
  toned-capsule-action:
    type: button
    backgroundColor: '#f0f4fa'
    rounded: 20px
    padding: 8px 12px
    height: 40px
    states: default captured on four buttons across both detail pages; no state frame
    use: 'shc-capsule-btn theme-tonal size-md at surface-2::[data-omd-capture="29"], 104 and 150 px wide. The button computes #101828 / 14px / 400, the inherited body text, and its label was not sampled separately, so no label style is declared'
  product-detail-tile:
    type: card
    backgroundColor: '#f8f9fc'
    rounded: 16px
    padding: 20px
    size: 580px x 181px
    states: default captured on both detail pages; no state frame
    use: 'Benefit tile: a <button> wrapping one benefit-list item at surface-2::[data-omd-capture="20"]; a second tile (capture 22) measures 580 x 149 with the same fill, radius and padding. Its #101828 / 14px / 400 are container values, so no text style is declared'
  badge-indigo:
    type: badge
    backgroundColor: rgba(173, 173, 255, 0.2)
    textColor: '#6268ff'
    rounded: 12px
    padding: 2px 8px
    typography: 11px / 500
    use: Tinted text badge on the public home surface (shc-badge--text type-tint theme-indigo), one occurrence, 134 px wide; its fill is translucent
  gnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#101828'
    rounded: 0px
    padding: 0px
    height: 72px
    typography: 16px / 500 / Digital One Shinhan
    hover: 'fg #005df9, 16px / 700'
    pressed: 'fg #005df9, 16px / 700'
    states: 'rest, hover, and pressed sampled on the six header links of each of the three surfaces (captures 1-6, 18 elements); every hover and pressed frame records fg rgb(0, 93, 249) and weight 700, the primary blue. The border-colour delta in those frames sits on a 0px border and is not a border. Focus is not declared from the bundle: the collector presses before it focuses'
    use: Global header menu link (a.role_link, line height 72px, tracking -0.32px) at home::[data-omd-capture="1"]
  login-button:
    type: button
    backgroundColor: transparent
    rounded: 8px
    padding: 2px 4px
    height: 24px
    shadow: rgb(228, 231, 236) 0px 0px 0px 1px
    states: default captured on all three surfaces; each surface also records a pressed frame whose dumped properties equal the rest frame. Opacity, outline, and transform are outside the dump, so no pressed value is declared
    use: 'Header login action (a.shc-btn theme-quaternary size-xs btn-login) at home::[data-omd-capture="12"]; its outline is a 1px box-shadow spread in #e4e7ec, not a border. The root computes the inherited body text (#101828, 14px / 400), so no label style is declared'
  text-button:
    type: button
    backgroundColor: transparent
    rounded: 8px
    padding: 0px
    height: 24px
    states: default captured on home (three anchors) and on both detail pages (buttons); the detail-page buttons (surface-2 capture 16, surface-3 captures 16 and 23) record pressed frames whose dumped properties equal the rest frame, so no pressed value is declared
    use: Text button (shc-txt-btn theme-secondary size-xs) at home::[data-omd-capture="28"]; theme-tertiary buttons share the geometry. The root computes the inherited body text, so no label style is declared
  dropdown-button:
    type: button
    backgroundColor: transparent
    rounded: 8px
    padding: 5px 12px
    height: 32px
    shadow: rgb(208, 213, 221) 0px 0px 0px 1px inset
    states: default captured; activating it opens the dropdown-menu (menu interaction with expanded and menu-open recorded on all three surfaces); no pointer-state frame
    use: 'Dropdown trigger (button.shc-dropdown__btn, two per surface) at home::[data-omd-capture="102"]; its outline is a 1px inset box-shadow in #d0d5dd, not a border. The root computes the inherited body text, so no label style is declared'
  dropdown-menu:
    type: card
    backgroundColor: '#ffffff'
    border: '1px #e4e7ec'
    rounded: 12px
    padding: 0px
    size: 116px x 125px
    shadow: rgba(12,17,29,0.1) 0px 4px 16px 0px
    states: open list captured after the menu interaction (expanded, menu-open) on all three surfaces
    use: 'Open dropdown list (ul.shc-dropdown__option, role=menu) at home::[data-omd-interaction-capture="menu-0-0"]; its own #101828 / 14px / 400 are container values, and the option labels are the dropdown-option component'
  dropdown-option:
    type: listItem
    backgroundColor: transparent
    textColor: '#344054'
    border: '1px #f0f4fa'
    padding: 5px 12px
    height: 30px
    typography: 12px / 500 / Digital One Shinhan
    states: rendered only in the open menu; no pointer-state frame
    use: 'Menu option (li.shc-dropdown__option-item holding an a role=menuitem) at home::[data-omd-interaction-capture="menu-0-1"]; from the second option on, each item carries a 1px #f0f4fa top border only (31 px tall). The label colour and type are the menuitem anchor values (menu-0-2, 12px / 500 / 20px, tracking -0.26px)'
  filter-chip:
    type: button
    backgroundColor: '#f8f9fc'
    textColor: '#344054'
    border: '1px #e4e7ec'
    rounded: 18px
    padding: 0px 16px 0px 12px
    height: 36px
    typography: 14px / 300 / Digital One Shinhan
    states: 'five chips captured at rest on home; the chip whose button carries class is-active (capture 37) computes a #344054 label fill, #ffffff text, a 1px #344054 border, and 14px / 500. No aria-selected is recorded, so that pairing rests on the class name; no pointer-state frame'
    use: Home chip row (button.shc-chip, captures 37-41); the visible style sits on its span.shc-chip__label (home::span), while the button root computes the inherited body text
  detail-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#667085'
    padding: 0px 4px
    height: 51px
    typography: 16px / 500 / Digital One Shinhan
    states: 'two tabs captured at rest on each detail page; the label inside the tab carrying class is-active computes fg #101828, 16px / 700. No aria-selected is recorded, so that pairing rests on the class name; no pointer-state frame'
    use: 'Card-detail tab bar (div.shc-tab type-btn card-detail-tab, #ffffff, 580 x 51) with two a.shc-tab__btn tabs 290 px wide; the label style sits on span.shc-tab__btn-text (surface-2::span, line height 27px), while the anchor root computes the inherited body text'
  important-note-trigger:
    type: button
    backgroundColor: transparent
    textColor: '#344054'
    rounded: 0px
    padding: 20px 0px
    height: 66px
    typography: 16px / 500 / Digital One Shinhan
    states: captured expanded on both detail pages (class is-active), with its region (#section1) open at 580 x 496 and padding 8px 0px 24px; no pointer-state frame
    use: Important-notes accordion trigger (button.shc-accordion__trigger shc-important-note__title) at surface-2::[data-omd-capture="31"]; line height 26px
fonts:
  roles:
    sans: Digital One Shinhan
---

# Shinhan Card — Design Reference

## Overview

### Visual Theme & Atmosphere

Shinhan Card is a Korean specialist finance company whose stated business spans credit-card sales, cash advances, instalment finance, card loans, auto lease, and a broader platform-and-data business. The current public web experience connects that institutional remit to the group’s Shinhan SOL Pay digital brand: the company describes SOL Pay as a platform linking financial life and daily life, rather than only a card-management destination. On the captured public product surfaces, that transition is expressed through a bright `#005df9` action blue, quiet white and blue-grey fields, and `Digital One Shinhan` set tightly across product content. The result is a practical product language for card discovery and account-related tasks rather than a generalized marketing style.

The public system is more varied than the prior snapshot suggested. Product-detail pages carry `#f8f9fc` selection tiles and `#f0f4fa` toned actions; the home surface also exposes red and blue tint badges. Rounded values occur at 8, 12, 16, and 20px, while an opened navigation menu uses a light border and a small, explicit shadow. This reference therefore distinguishes the captured product web surfaces from the company’s corporate narrative and from any unobserved signed-in app, checkout, or documentation UI.

### Primary tasks

- Browse cards and open one card's detail page
- Borrow through a card loan or pay in instalments
- Pay for daily purchases through the SOL Pay platform

### Brand Narrative

Shinhan Card describes itself as a specialist finance company handling credit cards and instalment finance, with card loans and auto lease among its stated businesses. Its official business page places those services alongside a platform-and-data business that uses the digital Shinhan SOL Pay platform to connect customers’ financial lives and daily lives. It also situates the company’s current identity after the 2007 integration with LG Card.

The recent public evolution relevant to this reference is the SOL Pay naming transition. In its November 2023 announcement, Shinhan Card said the former life-finance platform Shinhan pLay had been renamed under the group’s Shinhan SOL digital brand while strengthening the card company’s payment identity. The captured web system belongs to public card and product-detail surfaces in that larger context; it is not evidence about the complete logged-in SOL Pay experience.

### Principles

1. **Connect card services to daily finance.** Shinhan Card explicitly frames SOL Pay as linking financial life and daily life. *UI implication:* keep public product paths understandable as card, payment, and finance tasks rather than generic platform navigation.
2. **Make the group digital brand easier to understand.** The SOL Pay announcement identifies intuitive understanding and easier use as the goal of the brand transition. *UI implication:* prefer direct labels and avoid using visual novelty as a replacement for task clarity.
3. **Preserve evidence domains.** Public web product pages, corporate/company material, and a potentially signed-in app answer different questions. *UI implication:* reuse a captured public component only with its URL and state boundary; do not infer hidden product patterns.

### Personas

#### Evidence-backed service audiences (not fictional personas)

- **Individual, corporate, and public-organization card users.** The official business page describes credit-card payment services for these groups. No individual behaviour, name, or demographic is asserted.
- **Customers considering card-finance products.** The official page describes short-term and long-term card loans and instalment finance. This supports a service audience only, not a persona journey.
- **SOL Pay users.** Shinhan Card describes SOL Pay as its digital platform for connecting finance and daily life. The supplied web capture does not expose a signed-in user flow or user-research segment.

Specific personas, motivations, and quotes are not established here, and remain so until supported by first-party research or user-provided material.

## Colors

- **Primary blue** (`#005df9`): observed as the background of `shc-btn theme-primary size-xl` across the home, credit-detail, and premium-detail product surfaces.
- **Canvas** (`#ffffff`): observed page and expanded-menu surface.
- **Surface** (`#f8f9fc`): observed on home and product-detail selection tiles.
- **Tonal surface** (`#f0f4fa`): observed on the `shc-capsule-btn theme-tonal size-md` action on both captured detail pages.
- **Accent tint** (`#ebf0ff`): observed behind the blue text badge on the home surface.
- **Ink** (`#101828`), **body** (`#475467`), **slate** (`#344054`), and **muted** (`#667085`): observed text families across the three product surfaces.
- **Border** (`#e4e7ec`): observed on the open navigation menu and home chip.
- **Danger tint** (`#fff6f5`) and **danger text** (`#f44f4f`): observed on `shc-badge--text type-tint theme-red` on home.
- **Indigo tint** (`rgba(173, 173, 255, 0.2)` fill, `#6268ff` text): observed on one `shc-badge--text type-tint theme-indigo` badge on home (§4). It is a badge colour, not the retired indigo CTA.
- **Control rings** (`#e4e7ec`, `#d0d5dd`): the header login action draws a 1px ring in `#e4e7ec` (`rgb(228, 231, 236)`) and the dropdown trigger a 1px inset ring in `#d0d5dd` (`rgb(208, 213, 221)`), both with `box-shadow`, not borders (§4).

## Typography

### Font evidence classes

- **Live computed surface-use — `Digital One Shinhan`.** The supplied capture records 691 visible uses across the home, credit-detail, and premium-detail product surfaces. Computed declarations resolve to `"Digital One Shinhan", -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`.
- **FontFaceSet/source corroboration — `Digital One Shinhan`.** The same bundle reports the family as `loaded` with high confidence and eight first-party source URLs: Light, Medium, Bold, and ExtraBold `.woff`/`.woff2` files under `https://www.shinhancard.com/pconts/static/webfonts/`.
- **Official distributed product asset.** Those files are served from Shinhan Card’s own webfont path and corroborate the live web family. A publicly indexed Shinhan Card font licence or separate brand-font catalogue was not found in this update, so no reuse licence is asserted.
- **Declared-only asset — `swiper-icons`.** A data-URL `@font-face` was declared, but the capture records zero visible uses. It is an icon asset, not a UI-family token.
- **System fallbacks.** The Apple/system/Segoe/Roboto/Arial chain remains a declaration fallback; it is not presented as a Shinhan Card brand font.

### Observed hierarchy

| Role | Size | Weight | Line height | Tracking | Captured context |
|---|---:|---:|---:|---:|---|
| Promotional title | 32px | 800 | 48px | -0.64px | Home card text |
| Detail heading | 28px | 700 | 42px | -0.56px | Credit-card product page |
| Product body/control | 14px | 400 | 24px | -0.28px | Product pages and controls |
| Compact metadata | 12px | 300 | 20px | -0.24px | Product and menu metadata |

## Layout

### Observed spacing and shape

The capture’s most frequent spacing values are 4, 8, 12, 20, and 24px. Component-level evidence gives the useful boundary: the toned action uses 8px 12px padding, while the product-detail tile uses 20px padding. Rounded values are not a single global scale: the captured actions and menus use 8, 12, 16, or 20px according to component.

### Surface-domain boundary

The three inspected URLs are public product-web surfaces. They are not a signed-in statement, checkout, or mobile-app capture, so this reference does not prescribe a transactional information architecture, responsive breakpoint map, or a universal grid.

### Responsive Behavior

No viewport comparison is present in the supplied evidence bundle. The reference therefore preserves no breakpoint, mobile-navigation, touch-target, or image-behaviour rule. A responsive claim requires a later capture that records the relevant viewport and component provenance.

## Elevation & Depth

The expanded `shc-dropdown__option` menu is the only directly measured elevated layer: `rgba(12,17,29,0.1) 0px 4px 16px 0px` with a 1px `#e4e7ec` border and 12px radius. The product tiles measured in this bundle use no blur shadow. This is evidence for those two observed contexts, not a general “no-shadow” rule for the whole product.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.menu`: `rgba(12,17,29,0.1) 0px 4px 16px 0px`

## Motion & Easing

No motion duration, easing curve, or reduced-motion treatment was captured. The menu’s open state proves that a menu can expand; it does not prove a transition recipe. Motion tokens and animation guidance are therefore not established here, pending a capture that records timing and behaviour.

## Components

### Primary action

**Default**
- Background: `#005df9`
- Radius: `16px`
- Padding: `2px 12px`
- Height: 56px (312px wide on home; 580px on the detail pages, `surface-2::[data-omd-capture="32"]` and `surface-3::[data-omd-capture="29"]`)
- Label: not sampled. The root computes `#101828`, 14px / 400 / 24px, -0.28px, which is the inherited body text on the same page; the `shc-*` components set their visible label style on a child element (see the filter chip and card-detail tab below), so no label colour or type is declared. Corrected 2026-09-29: the July text listed `#101828` and 14px / 400 as this action's text style.
- Use: `shc-btn theme-primary size-xl` on home, credit-detail, and premium-detail public product surfaces; evidence `home::[data-omd-capture="27"]`.
- States: default only; the capture holds no state frame for this action.

### Toned capsule action

**Default**
- Background: `#f0f4fa`
- Radius: `20px`
- Padding: `8px 12px`
- Height: 40px (104px and 150px wide)
- Label: not sampled separately. The button computes `#101828` / 14px / 400, the inherited body text, so no label style is declared. Corrected 2026-09-29: the July text listed those container values as the text style.
- Use: `shc-capsule-btn theme-tonal size-md` on both captured product-detail surfaces; evidence `surface-2::[data-omd-capture="29"]` and `"30"`, `surface-3::[data-omd-capture="26"]` and `"27"`.
- States: default only; no state frame.

### Product-detail tile

**Default**
- Background: `#f8f9fc`
- Radius: `16px`
- Padding: `20px`
- Size: 580px × 181px; a second tile (`surface-2::[data-omd-capture="22"]`) measures 580px × 149px with the same fill, radius, and padding
- Text: not declared. The tile is a `<button>` wrapping a benefit-list item, so its computed `#101828` / 14px / 400 are container values. Corrected 2026-09-29: the July text listed them as the tile's text style.
- Use: captured product-detail tile on both credit and premium pages; evidence `surface-2::[data-omd-capture="20"]`.
- States: default only; no state frame.

### Tinted text badge

**Danger**
- Background: `#fff6f5`
- Text: `#f44f4f`
- Radius: `12px`
- Padding: `2px 8px`
- Font: `11px / 500 / Digital One Shinhan`
- Use: `shc-badge--text type-tint theme-red` on the public home surface; evidence `home::span`.

**Blue**
- Background: `#ebf0ff`
- Text: `#005df9`
- Radius: `12px`
- Padding: `2px 8px`
- Font: `11px / 500 / Digital One Shinhan`
- Use: `shc-badge--text type-tint theme-blue` on the public home surface; evidence `home::span`.

**Indigo**
- Background: `rgba(173, 173, 255, 0.2)` (translucent)
- Text: `#6268ff`
- Radius: `12px`
- Padding: `2px 8px`
- Font: `11px / 500 / Digital One Shinhan` (line height 18px, tracking -0.22px, shared by all three badges)
- Use: `shc-badge--text type-tint theme-indigo`, one occurrence on home, 134px wide; evidence `home::span`.

### Navigation menu

**Trigger**
- Background: transparent
- Ring: a 1px inset `box-shadow` in `#d0d5dd` (`rgb(208, 213, 221) 0px 0px 0px 1px inset`), not a border
- Radius: `8px`
- Padding: `5px 12px`
- Height: 32px (116px wide)
- Use: `button.shc-dropdown__btn`, two per surface; evidence `home::[data-omd-capture="102"]`. The root computes the inherited body text, so no label style is declared.

**Observed open menu**
- Background: `#ffffff`
- Border: `1px solid #e4e7ec`
- Radius: `12px`
- Shadow: `rgba(12,17,29,0.1) 0px 4px 16px 0px`
- Size: 116px × 125px, no padding
- State: `expanded`, `menu-open`
- Use: `shc-dropdown__option` (role=menu) after the captured menu interaction on all three product surfaces; evidence `home::[data-omd-interaction-capture="menu-0-0"]`.

**Menu option**
- Text: `#344054`
- Font: `12px / 500 / Digital One Shinhan` (line height 20px, tracking -0.26px)
- Padding: `5px 12px`; 30px tall, 31px from the second option on
- Divider: from the second option on, a 1px `#f0f4fa` top border; the other three sides are 0px
- Use: `li.shc-dropdown__option-item` holding an `a` (role=menuitem); evidence `home::[data-omd-interaction-capture="menu-0-1"]` (item), `"menu-0-2"` (label), `"menu-0-3"` (divider).

Corrected 2026-09-29: the July text gave the open menu `#101828` text and 14px / 400. Those are the list container's own values; the visible option labels compute `#344054` and 12px / 500.

The components below were transcribed on 2026-09-29 from the same 2026-07-13 bundle; nothing was re-measured.

### Header menu link

- Background: transparent
- Text: `#101828`
- Font: `16px / 500 / Digital One Shinhan`, line height 72px, tracking -0.32px
- Radius: `0px`; padding `0px`; height 72px
- Hover: text `#005df9`, weight 700
- Pressed: text `#005df9`, weight 700
- States: sampled on the six header links (`a.role_link`) of each captured surface, 18 elements in all (`home::[data-omd-capture="1"]` to `"6"`, and the same captures on `surface-2` and `surface-3`). Every hover frame and every pressed frame records `rgb(0, 93, 249)` text and weight 700; that is the primary blue `#005df9`, and all 18 links agree, so the value is settled. The frames also move the border colour to the same blue, but the border is 0px wide and is not a border. Focus is not declared: the collector presses before it focuses, so a focus frame cannot be separated from the pressed one.
- Use: global header menu link; evidence `home::[data-omd-capture="1"]`.

### Header login action

- Background: transparent
- Ring: 1px `box-shadow` spread in `#e4e7ec` (`rgb(228, 231, 236) 0px 0px 0px 1px`), not a border
- Radius: `8px`; padding `2px 4px`; height 24px (45px wide)
- Label: not declared; the root computes the inherited body text.
- States: default captured on all three surfaces. Each surface also records a pressed frame whose dumped properties equal the rest frame; opacity, outline, and transform are outside the dump, so no pressed value is declared.
- Use: `a.shc-btn theme-quaternary size-xs btn-login`; evidence `home::[data-omd-capture="12"]`.

### Text button

- Background: transparent
- Radius: `8px`; padding `0px`; height 24px
- Label: not declared; the root computes the inherited body text.
- States: default captured on home (anchors, captures 28 to 30) and on both detail pages (buttons). The detail-page buttons (`surface-2::[data-omd-capture="16"]`, `surface-3::[data-omd-capture="16"]` and `"23"`) record pressed frames whose dumped properties equal the rest frame, so no pressed value is declared.
- Use: `shc-txt-btn theme-secondary size-xs` (and `theme-tertiary`, same geometry); evidence `home::[data-omd-capture="28"]`.

### Filter chip

- Background: `#f8f9fc`
- Text: `#344054`
- Border: 1px `#e4e7ec`
- Radius: `18px`; padding `0px 16px 0px 12px`; height 36px
- Font: `14px / 300 / Digital One Shinhan`
- Active variant: the chip whose button carries class `is-active` (`home::[data-omd-capture="37"]`) computes a `#344054` fill, `#ffffff` text, a 1px `#344054` border, and 14px / 500. The capture records no `aria-selected`, so this pairing rests on the class name.
- Use: home chip row, `button.shc-chip` (captures 37 to 41). The visible style sits on the child `span.shc-chip__label` (`home::span`); the button root computes the inherited body text.
- States: rest variants only; no pointer-state frame.

### Card-detail tab

- Label: `#667085`, `16px / 500 / Digital One Shinhan`, line height 27px, tracking -0.32px, padding `0px 4px`
- Active variant: the label inside the tab carrying class `is-active` computes `#101828`, 16px / 700. No `aria-selected` is recorded, so this pairing rests on the class name.
- Tab: `a.shc-tab__btn`, 290px × 51px, two per bar; the bar (`div.shc-tab type-btn card-detail-tab`) is `#ffffff`, 580px × 51px.
- Use: both detail pages; label evidence `surface-2::span` (`span.shc-tab__btn-text`), tabs `surface-2::[data-omd-capture="18"]` and `"19"`. The anchor roots compute the inherited body text, so the label style is taken from the child span.
- States: rest variants only; no pointer-state frame.

### Important-notes accordion trigger

- Background: transparent
- Text: `#344054`
- Font: `16px / 500 / Digital One Shinhan`, line height 26px, tracking -0.32px
- Radius: `0px`; padding `20px 0px`; height 66px (580px wide)
- States: captured expanded on both detail pages (class `is-active`); its region (`#section1`, role=region) is open at 580px × 496px with `8px 0px 24px` padding. No pointer-state frame.
- Use: `button.shc-accordion__trigger shc-important-note__title`; evidence `surface-2::[data-omd-capture="31"]`, `surface-3::[data-omd-capture="28"]`.

The header menu link is the only component with a declared pointer state, and focus is never declared from this bundle. Corrected 2026-09-29: the July text said the evidence recorded menu expansion only and did not establish hover or pressed variants; the bundle holds hover, pressed, and focus frames for the 18 header links and pressed frames for the login action and the detail-page text buttons.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.shinhancard.com/pconts/html/main.html` (public product surface), `https://www.shinhancard.com/pconts/html/card/apply/credit/1232390_2207.html` (credit-card detail product surface), `https://www.shinhancard.com/pconts/html/card/apply/premium/1236160_2205.html` (premium-card detail product surface), `https://www.shinhancard.com/pconts/company/html/intro/business/business.html` (official company/business context), `https://www.shinhancard.com/pconts/company/html/promotion/press/1225309_3999.html` (official SOL Pay brand-transition context)
**Tier 2 sources:** `https://getdesign.md/shinhancard` (attempted; built-in web open safe-open failure and no Shinhan Card record returned by search), `https://styles.refero.design/?q=Shinhan%20Card` (attempted; built-in web open safe-open failure and no matching indexed result returned by search)
**Conflicts unresolved:** none

Legacy primary text, tertiary/indigo button, input, tab, list-row, toggle, universal-card, broad responsive, and all unobserved interactive-state claims were removed because the supplied 2026 three-surface bundle does not support them.

### States

| Observed state | Evidence boundary |
|---|---|
| Expanded navigation menu | Captured after a menu interaction on all three product surfaces; white surface, 1px `#e4e7ec` border, 12px radius, and `rgba(12,17,29,0.1) 0px 4px 16px 0px` shadow. |
| Header menu link hover and pressed | `#101828` 16px / 500 at rest; `#005df9` / 700 in every hover and pressed frame of the 18 sampled links (§4). |
| Chip and card-detail tab active variants | Rest variants paired by the `is-active` class, not by an ARIA state (§4). |
| Pressed frames on the login action and detail-page text buttons | Recorded, but their dumped properties equal the rest frame; no pressed value is declared. |
| Focus, disabled, error, loading, empty, success, toast, dialog, and form validation | Not established by the supplied bundle; intentionally omitted rather than synthesized. Focus frames exist for the header links but are never declared from a bundle (the collector presses before it focuses). Corrected 2026-09-29: this row previously listed hover as not established. |

Live state probe, 2026-10-16 (`https://www.shinhancard.com/pconts/html/main.html`), `primary-action`: pressed — transform matrix(0.96, 0, 0, 0.96, 0, 0) (+1 nested-layer changes).

## Do's and Don'ts

### Do

- Use `#005df9` for a primary action only when applying the observed `shc-btn theme-primary size-xl` pattern.
- Keep the observed `Digital One Shinhan` webfont metadata when the first-party files can be loaded; otherwise label it unavailable rather than substituting a system font as the brand face.
- Preserve component provenance: product-detail tile values belong to the two card-detail URLs, while tint badges were observed on home.
- Treat the 12px-radius elevated menu as an observed open-menu treatment, not a general card token.

### Don't

- Don't promote the declared `swiper-icons` face or the system fallback chain to Shinhan Card’s UI family.
- Don't infer a white primary-button label, focus ring, disabled state, or input spec from the unobserved component states. The only measured hover is the header menu link's (§4); do not extend it to other controls.
- Don't extend public product-web measurements into signed-in app, checkout, or documentation UI.
- Don't represent the prior indigo button, full-pill toggle, or universal 24px card as current canonical components without new evidence. The indigo tint badge in §4 is a badge, not that button.

## Voice & Tone

Shinhan Card’s official business description uses a practical service register: card, instalment-finance, loan, lease, platform, and data services are named plainly, and SOL Pay is described as connecting financial life and everyday life. The public product surfaces therefore support a clear, task-oriented tone rather than speculative lifestyle copy. The 2023 SOL Pay announcement says the rebrand was intended to make the group’s digital brands easier for customers to understand and use; that supports clarity and familiarity as editorial goals, not a complete public copywriting standard.

### Do

- Name the card or financial task directly.
- Use short, respectful Korean labels that help a customer move through a known task.
- Keep SOL Pay references tied to their stated payment and daily-finance role.

### Don't

- Don't invent a brand slogan, executive quote, or promotional tone rule from component styling.
- Don't turn regulatory, eligibility, or lending copy into casual lifestyle claims.

## Agent Prompt Guide

Use this reference as a constrained public-product-web sample, not a complete Shinhan Card application kit. A faithful observed action is a `#005df9` background, 16px radius, 2px 12px padding, and 56px height; its label style was not sampled (the root's `#101828` / 14px / 400 are inherited container values; corrected 2026-09-29). A toned detail-page action is `#f0f4fa`, 20px radius, 8px 12px padding, and 40px high. Header menu links are `#101828` at 16px / 500 and turn `#005df9` / 700 on hover and press. For product-detail tiles, use `#f8f9fc`, 16px radius, and 20px padding only in that detail-page context. Do not invent a primary-button contrast color or interaction state.

## Governance

### Known Gaps

- **Contrast, `badge-danger`.** Text `#f44f4f` on `#fff6f5` measures 3.25:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `badge-indigo`.** Text `#6268ff` on `#adadff33` measures 2.06:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `gnb-link`.** Text `#101828` on `#00000000` measures 1.18:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `dropdown-option`.** Text `#344054` on `#00000000` measures 2.01:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `detail-tab`.** Text `#667085` on `#00000000` measures 4.22:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `important-note-trigger`.** Text `#344054` on `#00000000` measures 2.01:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
