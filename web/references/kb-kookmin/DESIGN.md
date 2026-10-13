---
name: KB국민은행
colors:
  canvas: '#ffffff'
  foreground: '#333333'
  foreground-strong: '#000000'
  muted: '#5a5a5a'
  header-accent: '#ffcc00'
  link: '#0c4ad1'
  hairline: '#dddddd'
typography:
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
    use: Repeated public-home list and text samples; the computed family begins 맑은 고딕 but has no matching loaded FontFace in the supplied evidence.
  section-heading:
    fontSize: 20px
    fontWeight: 700
    lineHeight: 26px
    use: Observed public-home h2 samples only; no complete display scale is claimed.
  online-selected-item:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 14px
    use: Inherited page text on the online-banking carousel pagination dot container (li#slick-slide00, aria-selected true; its unselected sibling records the same values); not a measured label style. The computed Roboto stack is system evidence, not a KB family.
rounded:
  square: 0px
spacing:
  inline-link-left: 9
  inline-link-right: 8
  outline-link-inline: 10
  toggle-inline: 12
components:
  home-outline-list-item:
    type: listItem
    backgroundColor: '#ffffff'
    textColor: '#222222'
    border: '1px solid #dddddd'
    rounded: 0px
    padding: 0px 10px
    height: 28px
    typography: 14px / 400 / unresolved computed stack
    use: Static public-home anchor samples home::[data-omd-capture=14] and 15, mapped to listItem because no button semantics are evidenced; two sibling text-color values were observed.
  home-inline-list-item:
    type: listItem
    textColor: '#0c4ad1'
    rounded: 0px
    padding: 0px 8px 0px 9px
    height: 24px
    typography: 13px / 400 / unresolved computed stack
    use: 'Static public-home footer anchor home::[data-omd-capture=67] (a.fot_p_txt), the emphasised exception among fourteen footer links; the other thirteen record #333333 (footer-link). Mapped to listItem because no button semantics are evidenced.'
  online-selected-list-item:
    type: listItem
    rounded: 0px
    padding: 0px
    height: 28px
    states: 'aria-selected true on #slick-slide00; its sibling #slick-slide01 (aria-selected false) records the same captured values, so the selected look is not among the captured properties; no state frame'
    use: 'Carousel pagination dot (li, role presentation) in ul.slick-dots (role tablist) on the online-banking route, surface-2::#slick-slide00, 18 x 28; its #333333 14px / 400 / 14px is page text inherited by a container, and its child button (surface-2::[data-omd-capture="12"]) records browser-default 13.3333px type behind an 18px left padding, so no label style is claimed'
  header-menu-link:
    type: tab
    backgroundColor: transparent
    textColor: '#434343'
    rounded: 0px
    padding: 0px 8px
    height: 30px
    typography: 14px / 400 / 30px / unresolved computed stack
    states: 'rest on ten header links (capture 4-13): capture 7-13 record #434343 and the first three (capture 4-6) record #000000 with the same type; neither group carries aria-selected; the bundle holds no state frame for any KB국민은행 element'
    use: Public-home header menu link (a) at home::[data-omd-capture="7"], tracking -1px; capture 11 and 12 add 24px right padding, and capture 13 is a 30 x 30 link whose label is pushed out by 30px left padding
  home-quick-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0px 19px
    height: 42px
    typography: 17px / 400 / 42px / unresolved computed stack
    states: 'rest on three links (capture 23-25); the five links after them in the same row (capture 26-30) record #434343, 16px / 400 / 42px, tracking -2px and 0px 24px padding; no state frame'
    use: Public-home quick menu link (a.q1) at home::[data-omd-capture="23"], tracking -1px
  cert-shortcut-card:
    type: card
    backgroundColor: rgba(255, 255, 255, 0.6)
    border: '3px #ffffff'
    rounded: 0px
    padding: 9px 17px
    size: 134px x 110px
    shadow: rgba(0, 0, 0, 0.05) 0px 0px 5px 0px
    states: one link captured at rest; no state frame
    use: 'Public-home certificate shortcut link (a.go_cert) at home::[data-omd-capture="22"], over the hero banner; its #5a5a5a 14px / 400 / 21px equals the page body text, so no label style is claimed'
  service-card:
    type: card
    backgroundColor: '#ffffff'
    border: '1px #dddddd'
    rounded: 0px
    padding: 24px 28px
    size: 310px x 180px
    states: three cards captured at rest (links capture 39-41); no state frame
    use: 'Public-home service card: a bordered li holding a full-card link (a at home::[data-omd-capture="39"], padding 24px 28px); the link records the page body text (#5a5a5a 14px / 400 / 21px), so no label style is claimed'
  section-more-link:
    type: button
    backgroundColor: transparent
    textColor: '#929292'
    rounded: 0px
    padding: 0px 14px 0px 0px
    height: 18px
    typography: 12px / 400 / 18px / unresolved computed stack
    states: rest on three links (capture 34, 38, 53); no state frame
    use: Section more link (a.sub) beside public-home section headings at home::[data-omd-capture="34"]
  quick-service-link:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 0px
    padding: 0px
    size: 78px x 74px
    typography: 16px / 400 / 24px / unresolved computed stack
    states: rest on eight links (capture 45-52); no state frame
    use: Public-home icon service link (a.ico1 to a.ico8) at home::[data-omd-capture="45"]; the icon is not among the captured properties
  app-service-link:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 0px
    padding: 0px
    size: 118px x 92px
    typography: 13px / 700 / 19.5px / unresolved computed stack
    states: rest on four links (capture 60-63); no state frame
    use: Public-home icon link group under a 20px / 700 heading at home::[data-omd-capture="60"]; the icon is not among the captured properties
  ui-toggle-button:
    type: toggle
    backgroundColor: '#ffffff'
    border: '1px #929292'
    rounded: 0px
    padding: 0px 0px 0px 12px
    size: 14px x 14px
    states: one toggle captured at rest; no aria-checked is recorded; no state frame
    use: Public-home 14px square toggle (button.ui-toggle) at home::[data-omd-capture="59"]; its four-character label is pushed outside the 14px box by 12px left padding, so no label style is claimed
  footer-select-link:
    type: button
    backgroundColor: transparent
    textColor: '#5a5a5a'
    border: '1px #bbbbbb'
    rounded: 0px
    padding: 8px 60px 7px 10px
    height: 37px
    typography: 13px / 400 / 17px / unresolved computed stack
    states: 'rest on three footer select links (capture 78, 79, 81); capture 78 records border 1px #666666 and capture 79 padding 8px 30px 7px 10px; no state frame'
    use: Footer select link (a.tit) at home::[data-omd-capture="81"], 172 x 37
  top-banner-link:
    type: button
    backgroundColor: transparent
    textColor: '#ffcc00'
    rounded: 0px
    padding: 0px
    typography: 14px / 400 / 21px / unresolved computed stack
    states: one link captured at rest; no state frame
    use: 'Public-home top notice link at home::[data-omd-capture="0"], 165 x 21, tracking -0.5px; the notice also holds a checkbox (capture 1) and a #ffffff 12px close link (capture 2); the notice background is not among the captured elements'
  online-section-tab:
    type: tab
    backgroundColor: '#f1efe9'
    textColor: '#777777'
    border: '1px #c9c9c2 on the top and bottom edges'
    rounded: 0px
    padding: 0px 10px
    height: 55px
    typography: 14px / 400 / 17.5px / operating-system stack
    selected: 'bg #ffffff, fg #000000, 14px / 700, border 2px #ffa736 on the top edge and 1px #c9c9c2 on the right edge'
    states: 'rest on two tabs (capture 16, 17; capture 16 also has a 1px #c9c9c2 right edge); the tab whose li has class on (capture 15) differs from them and is recorded as selected; no aria-selected is recorded; no state frame'
    use: Online-banking section tab link (a.tabLink) at surface-2::[data-omd-capture="16"], 467 x 55, tracking -1px
  online-product-row:
    type: listItem
    border: '1px #e5e5e5 on the top edge of the following li'
    padding: 19px 5px 16px
    height: 124px
    states: two rows captured at rest; no state frame
    use: 'Online-banking product list row: a full-width link (a at surface-2::[data-omd-capture="18"], padding 19px 5px 16px) in li.pro3; the next li records a 1px #e5e5e5 top border; the link records the page text colour #333333 with the 22.4px line height of its li, so no label style is claimed'
  footer-link:
    type: listItem
    textColor: '#333333'
    rounded: 0px
    padding: 0px 8px 0px 9px
    height: 24px
    typography: 13px / 400 / 24px / unresolved computed stack
    states: 'rest on thirteen of the fourteen footer links (capture 64-77 except 67); capture 67 records #0c4ad1 and is recorded as home-inline-list-item; no state frame'
    use: Public-home footer link at home::[data-omd-capture="64"], tracking -1px
---

# KB국민은행 — Design Reference

## Overview

### Visual Theme & Atmosphere

KB국민은행 is a Korean retail and business bank whose public web presence carries a long institutional role into everyday digital banking. KB Financial Group’s history traces the bank’s modern formation to the Kookmin Bank and Housing & Commercial Bank merger, while the group now positions KB Kookmin Bank as a customer-centred financial platform. Its recognisable expression is not a single app kit: the group’s Star-b symbol and yellow accent signal a forward-looking KB identity, and the public bank routes pair that accent sparingly with white fields, dark text, square utility controls, and dense Korean information. Recent first-party reporting places digital-first core-banking modernisation and consultation-friendly terminal redesign alongside this continuity. The result is a practical visual language whose cues of trust, legibility, and institutional continuity should be kept distinct from unobserved native-app or authenticated banking flows.

**Key characteristics:**

- White `#ffffff` public canvas with repeated `#333333` and `#5a5a5a` text hierarchy.
- `#ffcc00` is a selector-backed public-home header accent and the catalog identity colour; the packet does not establish it as a universal product fill.
- Product routes retain square (`0px`) chrome in the measured links, utility controls, cards, and online-banking tabs.
- The supplied capture records three product snapshots, one of which repeats the public home URL; it records no interaction transitions.

### Primary tasks

- Read through dense lists of banking information on the public site
- Handle everyday digital banking with a long-established Korean bank
- Open a public online-banking page on the bank's own site

### Brand Narrative

KB Financial Group’s history identifies the Kookmin Bank and Housing & Commercial Bank merger as the formation of KB Kookmin Bank into a larger Korean bank serving people and businesses. That institutional origin is useful context for the bank’s broad public role; it is not evidence for a particular current interface component or app flow.

The group’s current mission is “finance that changes the world,” framed around customers’ happier futures and a better world. Its stated vision is to become the most trusted lifetime financial partner through talent and bold innovation. Those are first-party group declarations, retained here as narrative context rather than attributed as an individual customer promise on any captured page.

The 2024 annual report describes customer-centred digital consultation work, core-banking modernisation, and a planned redesign of branch-terminal screens. This gives the current evolution a practical frame: continuity of trust alongside digitisation and more consultation-friendly service. It does not establish completed 2025 UI values or authorise a broader product design system.

### Principles

1. **Customer-centred decision-making.** KB Financial Group names customer focus as a core value.
   *UI implication:* present the financial task, its consequence, and the next action without unnecessary promotional detours.
2. **Trust and integrity.** The group names trust and integrity among its core values and ethics materials.
   *UI implication:* distinguish information, confirmation, and commitment; do not use a decorative cue to imply verification.
3. **Professional clarity.** The group identifies professionalism as a core value.
   *UI implication:* favour legible hierarchy and exact labels over informal shorthand in consequential contexts.
4. **Innovation in service of convenience.** The group links innovation to more convenient and better customer outcomes.
   *UI implication:* introduce new digital paths with plain explanation and preserve an understandable fallback path when one is officially specified.
5. **Growing with society.** The group describes shared growth as a core value.
   *UI implication:* avoid narrowing a general public-service message to an unsupported single audience.

### Personas

These are stakeholder categories evidenced by first-party group materials, not synthetic personal profiles or research findings.

#### Individual banking customer

The group mission and customer-centred language address customers broadly. The supplied capture does not identify a task, device, accessibility need, or journey for this category.

#### Business customer

KB Financial Group’s history describes KB Kookmin Bank as providing services to people and businesses. The packet does not establish business-banking components, so no workflow or control pattern is assigned.

#### Branch and consultation service user

The 2024 annual report discusses consultation-friendly branch-terminal redesign using customer and employee feedback. It is evolution context only: no branch-terminal screen, role, or interaction was captured for this reference.

## Colors

### Selector-backed public product-web colours

- **Canvas** (`#ffffff`): repeated background on the public home and online-banking routes.
- **Foreground** (`#333333`): repeated online-banking text and selected-item colour.
- **Foreground Strong** (`#000000`): observed public utility control text and borders.
- **Muted** (`#5a5a5a`): repeated public-home navigation and list text.
- **Header Accent** (`#ffcc00`): observed on a public-home link; it is local evidence, not a universal button or error colour.
- **Link** (`#0c4ad1`): observed public-home inline link treatment.
- **Hairline** (`#dddddd`): observed border on two 28px public-home outline links and on the public-home service cards.
- **Component-local colours** recorded in §4, not promoted to palette roles: `#434343` (header and quick-menu links), `#929292` (section more links and the 1px border of the square toggle), `#bbbbbb` and `#666666` (footer select-link borders), `#333333` footer links; on online banking, `#f1efe9` with `#777777` text and `#c9c9c2` edges (unselected section tab), a 2px `#ffa736` top edge (selected section tab), and a `#e5e5e5` product-row divider.

### Brand-asset boundary

KB국민은행’s CI guide and KB Financial Group’s CI page present the logo/signature system, Star-b, and image-based colour guidance. They confirm the yellow-and-star identity as brand context, but neither supplies a numeric product token for these bank routes. The only numeric yellow promoted here is the supplied computed `#ffcc00` home sample. Corporate CI, bank product web, online banking, and any unauthenticated or native mobile screens remain separate evidence domains.

## Typography

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No official source inspected says that a named family is deployed on the captured KB국민은행 public-web or online-banking routes. |
| Live computed surface-use | The public home repeatedly computes to a stack beginning `맑은 고딕` / `Malgun Gothic`; the online-banking route computes to a stack beginning `Roboto`. The supplied evidence records no matching loaded FontFace source for either. Neither becomes a KB UI-family token. |
| Official brand asset (distribution unresolved) | KB Financial Group documents KB금융체 as its proprietary corporate type system, with distinct heading and body families and stated visual rationale. It is useful group-brand context, but the reviewed page does not provide a redistribution licence and the supplied KB국민은행 capture does not load it. |
| Declared-only | No declared `@font-face` family was included in the supplied evidence bundle. |
| Unresolved | A browser-loadable source, licence terms, and product deployment evidence for KB금융체 on the captured bank routes were not established. |

### Captured hierarchy

| Role | Family boundary | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public home body/list | unresolved computed stack beginning 맑은 고딕 | 14px | 400 | 21px | repeated home text and list samples |
| Public home section heading | unresolved computed stack beginning 맑은 고딕 | 20px | 700 | 26px | observed h2 samples only |
| Online carousel dot container | operating-system stack beginning Roboto | 14px | 400 | 14px | inherited text on the `li` of a carousel pagination dot; corrected 2026-09-30, not a label style |

Do not render a system fallback as KB금융체. The official corporate font remains a separately documented brand asset until product-use and loadability are independently evidenced.

## Layout

The supplied routes were captured at `1440×900`. The evidence supports dense public-web information lists, 14px text roles, and small square controls, but it does not establish a grid, breakpoint, responsive rule, authenticated banking layout, or native mobile layout. The third snapshot repeats the public-home URL, so it must not be treated as a second responsive surface.

## Elevation & Depth

The selector-backed canonical samples are flat: `box-shadow: none` and 0px radius on the measured links and online-banking item. This is a local public-web observation, not a universal KB elevation or card system. No shadow-bearing product component was promoted in July. Corrected 2026-09-30: the certificate shortcut link records `rgba(0, 0, 0, 0.05) 0px 0px 5px 0px` and carries it as a component value (§4); it stays local to that link.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

The captured properties include no duration, easing, transition, or animation value, so the bundle establishes no motion, carousel-movement, or reduced-motion rule. Do not derive motion from the carousel structure; add motion only when a source-specific capture or official specification supports it. Corrected 2026-09-30: the July text derived this from the zero interaction kinds and records, which count menu, dialog, and tab expansions only.

## Components

### Public-home static list items

**Outline anchor item**
- Background: `#ffffff`
- Text: `#222222` or `#000000`
- Border: 1px solid `#dddddd`
- Radius: 0px
- Padding: 0px 10px
- Height: 28px
- Font: 14px / 400 / unresolved computed stack
- Use: Public-home sibling anchors `home::[data-omd-capture="14"]` and `home::[data-omd-capture="15"]`; the two observed text values are retained rather than normalised. The structured token maps these anchors to `listItem`, because the packet establishes no button semantics or transition.

**Inline anchor item**
- Text: `#0c4ad1`
- Radius: 0px
- Padding: 0px 8px 0px 9px
- Height: 24px
- Font: 13px / 400 / unresolved computed stack
- Use: Public-home anchor `home::[data-omd-capture="67"]`, mapped to `listItem` in the structured token because the packet establishes no button semantics or transition.

### Online-banking carousel dot

**Recorded item** (`online-selected-list-item`)
- Radius: 0px
- Padding: 0px
- Size: 18px × 28px
- State: `aria-selected="true"` on `surface-2::#slick-slide00`; its sibling `#slick-slide01` (`aria-selected="false"`) records the same captured values, so the selected look is not among the captured properties.
- Use: a carousel pagination dot (`li`, role `presentation`) in `ul.slick-dots` (role `tablist`), mapped to `listItem`.
- Corrected 2026-09-30: July recorded `#333333` text and 14px / 400 / 14px type as a selected list item. Those are the page text inherited by the dot's container; its child button (`surface-2::[data-omd-capture="12"]`) records browser-default 13.3333px type behind an 18px left padding on an 18px-wide box, so no label style is claimed.

### Public-home header and quick menu

**Header menu link** (`header-menu-link`)
- Text: `#434343`; the first three links (`home::[data-omd-capture="4"]` to `"6"`) record `#000000` with the same type
- Padding: 0px 8px (24px right padding on `"11"`, `"12"`)
- Height: 30px
- Font: 14px / 400 / 30px, tracking -1px, unresolved computed stack
- Use: `home::[data-omd-capture="7"]` to `"13"`; `"13"` is a 30px × 30px link whose label is pushed out by 30px left padding

**Quick menu link** (`home-quick-link`)
- Text: `#000000`
- Padding: 0px 19px
- Height: 42px
- Font: 17px / 400 / 42px, tracking -1px
- Row variant: the five links after them (`"26"` to `"30"`) record `#434343`, 16px / 400 / 42px, tracking -2px, and 0px 24px padding.
- Use: `home::[data-omd-capture="23"]` to `"25"` (`a.q1`, `a.q2`)

**Top notice link** (`top-banner-link`): `#ffcc00` 14px / 400 / 21px, tracking -0.5px, 165px × 21px, `home::[data-omd-capture="0"]`. The notice also holds a checkbox (`"1"`) and a `#ffffff` 12px / 400 / 18px close link (`"2"`, `a.nClose`); the notice background is not among the captured elements.

### Public-home cards and shortcuts

**Certificate shortcut** (`cert-shortcut-card`)
- Background: `rgba(255, 255, 255, 0.6)`
- Border: 3px `#ffffff`
- Padding: 9px 17px
- Size: 134px × 110px
- Shadow: `rgba(0, 0, 0, 0.05) 0px 0px 5px 0px`
- Label: not claimed; its `#5a5a5a` 14px / 400 / 21px equals the page body text.
- Use: `home::[data-omd-capture="22"]` (`a.go_cert`), over the hero banner

**Service card** (`service-card`)
- Background: `#ffffff`
- Border: 1px `#dddddd`
- Radius: 0px
- Size: 310px × 180px
- Padding: 24px 28px on the full-card link inside
- Label: not claimed; the link records the page body text.
- Use: three cards, links `home::[data-omd-capture="39"]` to `"41"`

**Section more link** (`section-more-link`): `#929292` 12px / 400 / 18px, padding `0px 14px 0px 0px`, 56px × 18px, beside section headings; `home::[data-omd-capture="34"]`, `"38"`, `"53"` (`a.sub`).

**Icon service links** (`quick-service-link`, `app-service-link`): `#333333` labels on 78px × 74px links at 16px / 400 / 24px (`"45"` to `"52"`), and on 118px × 92px links at 13px / 700 / 19.5px under a 20px / 700 heading (`"60"` to `"63"`). The icons are not among the captured properties.

**Square toggle** (`ui-toggle-button`): background `#ffffff`, 1px `#929292` border, 0px radius, 14px × 14px; its four-character label is pushed outside the box by 12px left padding, and no `aria-checked` is recorded. `home::[data-omd-capture="59"]` (`button.ui-toggle`).

### Public-home footer

**Footer link** (`footer-link`): `#333333` 13px / 400 / 24px, tracking -1px, padding `0px 8px 0px 9px`; thirteen of the fourteen links `home::[data-omd-capture="64"]` to `"77"`. The fourteenth (`"67"`, `a.fot_p_txt`) is the `#0c4ad1` inline item above.

**Footer select link** (`footer-select-link`): transparent, `#5a5a5a` 13px / 400 / 17px, border 1px `#bbbbbb`, padding `8px 60px 7px 10px`, 172px × 37px (`"81"`); `"79"` has `8px 30px 7px 10px` padding and `"78"` a 1px `#666666` border.

### Online-banking section tab and product row

**Section tab** (`online-section-tab`)
- Background: `#f1efe9`
- Text: `#777777`
- Border: 1px `#c9c9c2` on the top and bottom edges (`"16"` also has the right edge)
- Padding: 0px 10px
- Size: 467px × 55px
- Font: 14px / 400 / 17.5px, tracking -1px, operating-system stack
- Selected: the tab whose `li` has class `on` (`surface-2::[data-omd-capture="15"]`) records background `#ffffff`, `#000000` 14px / 700 text, a 2px `#ffa736` top border, and a 1px `#c9c9c2` right border. No `aria-selected` is recorded.
- Use: `surface-2::[data-omd-capture="16"]`, `"17"` (`a.tabLink`)

**Product row** (`online-product-row`): a full-width link with `19px 5px 16px` padding, 124px high, in `li.pro3`; the following row records a 1px `#e5e5e5` top border. The link records the page text colour `#333333` with its `li`'s 22.4px line height, so no label style is claimed. `surface-2::[data-omd-capture="18"]`.

### How states were read

The bundle holds no `::state-*` frame for any KB국민은행 element, so hover, pressed, and focus values are not declared, and no disabled, menu, dialog, toast, validation, error, loading, responsive, authenticated-product, or native-app variant was observed. The one selected variant is the online-banking section tab. Corrected 2026-09-30: the July text gave `interactionCount: 0` and `interactionKinds: 0` as the reason; those count menu, dialog, and tab expansions only.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.kbstar.com/ ; https://obank.kbstar.com/quics?page=C018702 ; https://omoney.kbstar.com/quics?page=C017667 ; https://www.kbfg.com/kor/about/corporate/ci.htm ; https://www.kbfg.com/kor/about/corporate/font.htm ; https://www.kbfg.com/eng/about/group/history/merge.htm ; https://www.kbfg.com/kor/about/group/value.htm ; https://www.kbfg.com/common/jsp/fileDownUtil.jsp?filepath=%2Fdata%2Fannual_report%2F2024+KB_ar_full+version.pdf
**Tier 2 sources:** https://getdesign.md/kb-kookmin and https://styles.refero.design/?q=KB%20Kookmin%20Bank were both attempted. The available open paths returned internal/safe-open errors and corresponding searches found no KB국민은행-specific catalogue record.
**Conflicts unresolved:** none

### States

No product state specification is inferred from this packet, and the bundle holds no `::state-*` frame for any element; the only recorded selection is the online-banking section tab in §4. The state headings below preserve the boundary for future source-backed additions; they do not prescribe UI values or microcopy.

| Category | Captured evidence boundary |
|---|---|
| Empty | No empty state captured. |
| Loading | No loading state captured. |
| Error — validation | No validation-error state captured. |
| Error — service/system | No service or system-error state captured. |
| Success | No success/confirmation state captured. |
| Skeleton | No skeleton state captured. |
| Disabled | No disabled state captured. |
| Focus | No focus transition captured. |
| Hover | No hover transition captured. |
| Pressed | No pressed transition captured. |

## Do's and Don'ts

### Do

- Preserve the evidence boundary: use public-web values only on the specific public-web contexts they describe.
- Keep the documented 14px body/list hierarchy and square link/item chrome when recreating a measured sibling.
- Treat `#ffcc00` as a sparse observed header accent and retain `#0c4ad1` as the separate observed inline-link colour.
- Name KB금융체 as a corporate brand asset only when no loaded product evidence is available.

### Don't

- Don't turn the group CI yellow, Star-b asset, or corporate typography into a universal online-banking token.
- Don't substitute Malgun Gothic, Roboto, or a system stack for KB금융체 while labelling it as KB’s proprietary font.
- Don't invent rounded cards, filled primary buttons, app navigation, or state transitions; the capture holds no state frame for any element.
- Don't blend corporate, marketing, public web, online banking, and authenticated/native surfaces into one generic banking system.

## Voice & Tone

The applicable first-party group-level language is customer-centred, trustworthy, professional, and innovation-oriented. It is context for KB국민은행 as a group subsidiary, not an extracted bank-product copy deck.

| Do | Don't |
|---|---|
| Put customer benefit and the financial action in the clearest available order. | Use novelty or urgency language that obscures a financial decision. |
| Use precise, calm wording consistent with trust and professionalism. | Claim certainty, a rate, an approval, or protection that has not been verified. |
| Explain innovation as a means to convenience or a better customer outcome. | Treat internal group values as proof of a specific product feature. |

Illustrative, not extracted product copy:

- “확인할 내용을 먼저 보여드립니다.” *(illustrative; customer-centred clarity)*
- “필요한 금융 정보를 차분하게 안내합니다.” *(illustrative; trust/professionalism)*
- “변경 사항과 다음 단계를 함께 확인하세요.” *(illustrative; clear action sequence)*

## Governance

### Accessibility & Content

The capture shows compact 13–14px public text and square utility geometry; it does not provide keyboard, focus, contrast-ratio, error-message, or screen-reader behaviour. Preserve meaningful link text and visible text hierarchy where a captured component is reused, but do not claim WCAG conformance or a KB accessibility contract from the packet. Any new focus, error, or disabled treatment requires source-specific evidence rather than visual extrapolation.

### Reference Scope & Evidence

This reference has three supplied snapshots: the public KB국민은행 home, one public online-banking route, and a duplicate home snapshot. It uses the supplied evidence bundle as the sole source for computed style, font status, components, and interactions. First-party KB Financial Group materials provide separate history, CI, corporate-font, mission, and current-modernisation context. Tier 2 getdesign and Refero attempts did not yield a KB국민은행-specific record. Raw selectors, values, confidence, conflicts, and source ledger are retained in `.verification.md` and `_research.md`.

### Known Gaps

- **Contrast, `header-menu-link`.** Text `#434343` on `#00000000` measures 2.12:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `home-quick-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `quick-service-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `app-service-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-select-link`.** Text `#5a5a5a` on `#00000000` measures 3.04:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `online-section-tab`.** Text `#777777` on `#f1efe9` measures 3.89:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
