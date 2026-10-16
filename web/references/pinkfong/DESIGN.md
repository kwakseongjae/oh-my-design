---
name: The Pinkfong Company
colors:
  primary: '#ff66af'
  canvas: '#ffffff'
  foreground: '#000000'
  muted: '#5a5a5a'
typography:
  corporate-body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5715
    use: Observed corporate body text on the supplied public routes.
  corporate-heading:
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.5715
    use: Observed corporate-company h1 scale; its computed family is the system stack, not a Pinkfong font token.
  brand-display:
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1
    use: One corporate-business h1 uses loaded BabyShark; official release calls the distributed family Pinkfong Baby Shark Font.
rounded:
  none: 0px
  compact: 8px
  pill: 32px
  emphasis: 40px
spacing:
  xs: 8
  control: 20
  action: 32
components:
  corporate-primary-action:
    type: button
    backgroundColor: '#ff66af'
    textColor: '#ffffff'
    rounded: 32px
    padding: 32px 15px
    typography: 24px / 400 / system stack
    states: Default captured; this element has no pointer-state frame.
    use: corporate-home `home::[data-omd-capture="26"]`; one public corporate CTA, 64px rendered height.
    height: 64px
    pressed: no visible change (measured 2026-10-16) (:hover + :active)
    focus: 'outline #ffe0ec solid 3px on :focus-visible'
  family-site-pill:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#8c8c8c'
    rounded: 32px
    padding: 4px 20px
    typography: 14px / 400 / system stack
    states: Default captured; this element has no pointer-state frame.
    use: '`home::[data-omd-capture="31"]`, repeated across the three corporate routes; 35px rendered height.'
  business-outline-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#08c7ff'
    rounded: 32px
    padding: 30px 15px
    typography: 18px / 400 / system stack
    states: 'Default captured. The hover, pressed and focus frames on `surface-2::[data-omd-capture="23"]` move bg #ffffff to #fffffe or #fffffc and fg #08c7ff to #09c7ff, #0bc8ff or #0ec8ff, a transition caught in progress, so no state value is declared; focus is never declared from this collector.'
    use: corporate-company `surface-2::[data-omd-capture="23"]`; one public company-page action, 60px rendered height.
  mobile-menu-dialog:
    type: dialog
    backgroundColor: '#ffffff'
    textColor: '#000000'
    padding: 30px
    typography: 14px / 400 / system stack
    use: '`home::div.DefaultMenu_mobile-menu-modal__SEaJA`; hidden mobile-menu dialog structure captured on all three corporate routes.'
  header-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: rgba(0, 0, 0, 0.88)
    rounded: 0px
    padding: 0px 16px
    height: 64px
    typography: 14px / 400 / 64px system stack
    selected: 'fg #ff66af'
    states: 'rest on every header menu link; the current-page item (li.ant-menu-item-selected) computes #ff66af on the company and business pages; no pointer-state frame'
    use: 'Header menu link: the anchor at home::[data-omd-capture="5"] inside the antd menu item li at "4"; padding and height belong to that li'
  header-submenu-trigger:
    type: button
    backgroundColor: transparent
    textColor: rgba(0, 0, 0, 0.88)
    rounded: 8px
    padding: 0px
    size: 48px x 64px
    typography: 14px / 400 / 64px system stack
    states: default captured on all three pages (capture 14); it declares aria-haspopup, but the collector opened no submenu and recorded no pointer-state frame for it
    use: Header submenu title (div.ant-menu-submenu-title) at home::[data-omd-capture="14"]
  locale-toggle:
    type: button
    backgroundColor: transparent
    textColor: '#dddddd'
    rounded: 0px
    padding: 0px
    size: 44px x 15px
    typography: 13.3333px / 400 / Arial
    selected: 'fg #2e2e2e'
    states: inactive and active-locale (class LocaleSelector_active) buttons captured as pairs on all three pages (capture 1/2 and 21/22); no pointer-state frame
    use: 'Header locale switch at home::[data-omd-capture="2"]; the active locale at "1" computes #2e2e2e. The 13.3333px Arial is the browser default button font as computed, not a brand face'
  section-more-link:
    type: button
    backgroundColor: transparent
    textColor: '#a0a0a0'
    rounded: 0px
    padding: 0px
    size: 121px x 25px
    typography: 16px / 400 / 25.144px system stack
    states: 'default captured on three carousel copies (capture 23-25); the hover and pressed frames of "23" record #c08ca5 and its focus frame #be8ba6, a colour caught mid-transition that matches no rest colour, so no hover or pressed value is declared'
    use: Home business-section more link with a right-arrow icon (a.BusinessSection_more) at home::[data-omd-capture="23"]
  footer-link:
    type: tab
    backgroundColor: transparent
    textColor: '#5a5a5a'
    rounded: 0px
    padding: 0px
    height: 17px
    typography: 14px / 400 / 22.001px system stack
    states: default captured on five footer links on each of the three pages (home 32-36, company 34-38); no pointer-state frame
    use: Footer link row at home::[data-omd-capture="32"]
  history-collapse-header:
    type: button
    backgroundColor: transparent
    textColor: rgba(0, 0, 0, 0.88)
    rounded: 8px 8px 0px 0px
    padding: 12px 16px
    height: 55px
    typography: 14px / 400 / 22px system stack
    states: default captured on six collapsed headers (capture 24-29); the collector expanded none and recorded no pointer-state frame
    use: Company-page history accordion header (div.ant-collapse-header, role=button) at surface-2::[data-omd-capture="24"]; the first header rounds 8px 8px 0px 0px, the middle four 0px, the last 0px 0px 8px 8px
  business-primary-action:
    type: button
    backgroundColor: '#ff66af'
    textColor: '#ffffff'
    rounded: 40px
    padding: 40px 15px
    height: 82px
    typography: 19px / 400 / system stack
    shadow: rgba(255, 5, 88, 0.06) 0px 2px 0px 0px
    states: default captured on two buttons (capture 23 and 40, 344 and 327 wide); the business page has no state frame
    use: Business-page pink action (antd round primary button) at surface-3::[data-omd-capture="23"]; its label is the inner link at "24" (#ffffff, 19px / 400, 0px 50px padding); its 1px border computes rgba(0, 0, 0, 0)
  business-overlay-chip:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.5)
    textColor: rgba(255, 255, 255, 0.4)
    rounded: 24px
    padding: 0px 7px
    height: 24px
    typography: 14px / 400 / system stack
    shadow: rgba(255, 5, 88, 0.06) 0px 2px 0px 0px
    states: default captured on fifteen chips (capture 25-39; "25" is 26px high); no pointer-state frame
    use: Business-page translucent round chip (restyled antd round primary button) at surface-3::[data-omd-capture="26"]; what the chips switch or label is not in the dump
fonts:
  roles:
    corporate-ui: Spoqa Han Sans Neo
    brand-display: Pinkfong Baby Shark Font
---

# Design System Inspiration of The Pinkfong Company

## Overview

### Visual Theme & Atmosphere

The Pinkfong Company is a global family-entertainment company whose official corporate pages describe a portfolio led by Pinkfong, Baby Shark, and Bebefinn. Its public materials pair memorable music, stories, technology, character worlds, and experiences for children and families; the company page explicitly frames the work as content that connects people through joy. The current reference is intentionally narrower than that portfolio: its supplied collector evidence covers only the public corporate home, company, and business pages. Those pages use a mostly white, black, and gray corporate shell with Pinkfong pink (`#ff66af`) for a prominent action, rather than proving a universal consumer-product interface. [Company](https://www.thepinkfongcompany.com/en/company) · [Business](https://www.thepinkfongcompany.com/en/business)

The company’s identity page supplies CI and BI downloads for The Pinkfong Company, Pinkfong, Baby Shark, and Bebefinn. It also links to an official Pinkfong Baby Shark Font release. That official asset expresses the character side of the brand, while the captured corporate shell uses a loaded Spoqa Han Sans Neo body family plus system-stack controls. The distinction is important: identity assets and one loaded display heading are not a general app type scale or a license to substitute a system font for the named family.

**Key Characteristics:**

- Public corporate pages use white `#ffffff`, black `#000000`, muted gray `#5a5a5a`, and a measured Pinkfong-pink `#ff66af` action.
- `#ff66af` is a selector-backed corporate-action value and the current-page header link colour, not a blanket claim for consumer, app, or franchise controls.
- Spoqa Han Sans Neo is loaded on the corporate capture; the generic system stack is separately observed on many public controls.
- Pinkfong Baby Shark Font is an official distributed brand asset and one loaded corporate-business display use; it is not promoted to the corporate UI family.
- Only corporate-page defaults, two measured selected variants (the current-page header link and the active locale), and their exact selector/surface provenance are documented. The capture holds no settled hover or pressed value. Product flows, consumer-site UI, and generic family-site components are omitted.

### Primary tasks

- Find out what the company makes across music, apps, and events
- Download the identity assets for the company or a franchise
- Download the official Baby Shark font for a document

### Brand Narrative

The Pinkfong Company describes itself as a global family-entertainment company working across music, stories, technology, video and audio content, live events, mobile apps, partnerships, and merchandise. Its official identity page groups the company CI with Pinkfong, Baby Shark, and Bebefinn BI assets, showing a portfolio structure rather than a single product surface. [Company](https://www.thepinkfongcompany.com/en/company) · [Business](https://www.thepinkfongcompany.com/en/business)

In 2025, the company released Pinkfong Baby Shark Font for Baby Shark’s tenth anniversary. The release describes a 9-language family with 13,200 characters, fin-inspired triangular details, and a rhythmic visual idea based on the song; it offers the font through the identity page for everyday documents, fan art, and card news. That is an official asset and brand-expression evolution, not evidence that every corporate or consumer control uses the font. [Official font release](https://www.thepinkfongcompany.com/news/pr/207)

### Principles

1. **Connect through joyful content.** The official mission explicitly centers joyful content and entertaining experiences. *UI implication:* corporate public copy should state the content or experience clearly before adding promotional flourish.
2. **Keep portfolio identities distinct.** The company page distributes separate CI/BI assets for the company, Pinkfong, Baby Shark, and Bebefinn. *UI implication:* do not collapse corporate identity assets into a single universal franchise UI palette.
3. **Treat type as an asset with a boundary.** The official font release gives purpose and permitted creative examples, while the corporate capture separately proves a loaded body family. *UI implication:* use a named font only with the evidence class and load/distribution condition that supports it.

### Personas

Official public materials identify **kids and families worldwide** as the audience for joyful content, and enumerate business contexts including content, partnerships, merchandise, live events, and mobile apps. These are public audience and stakeholder cues, not validated individual personas. No fictional personas are added. [Company](https://www.thepinkfongcompany.com/en/company) · [Business](https://www.thepinkfongcompany.com/en/business)

## Colors

### Observed corporate surfaces

- **Pink action** (`#ff66af`): observed on the public corporate-home primary CTA and on the business-page primary action, and as the text colour of the current-page header menu link on the company and business pages (§4).
- **Canvas** (`#ffffff`): observed on the family-site pill, the company-page outlined action, and the mobile-menu dialog.
- **Corporate foreground** (`#000000`): recurrent public corporate text value and the mobile-menu dialog foreground.
- **Muted corporate text** (`#5a5a5a`): recurrent public corporate text value; the footer link row uses it (§4).

### Boundary

The capture does not include Pinkfong consumer pages, an authenticated product, or an official color-specification document that maps these values to semantic states. `#08c7ff` occurs only as the selector-backed corporate-company outline-action foreground; it is retained inside that component record, not elevated to a global color token. The identity-page BI downloads establish asset availability, not a UI palette. Other component-level colours stay in their component records the same way: the inactive and active locale buttons (`#dddddd`, `#2e2e2e`) and the section more link (`#a0a0a0`).

## Typography

### Evidence classes

- **Live computed surface-use:** the supplied artifact records **Spoqa Han Sans Neo** as `loaded` with high confidence on three corporate-route text elements and corroborates it with 15 Spoqa CDN source URLs. It is the verified corporate-public text family only.
- **Live computed display use:** one corporate-business h1 computes to `BabyShark`, 48px/700/48px, with a loaded `pbs-light.otf` source on the company domain. The official release calls the distributed family **Pinkfong Baby Shark Font**; the naming difference is retained as a source boundary rather than silently normalized.
- **Official distributed asset:** the company announced Pinkfong Baby Shark Font in 2025, describes its fin-inspired triangular form and rhythmic character, and says it is freely downloadable from the company identity page for documents, fan art, and card-news-style work. This is a font-asset and stated-use fact, not a source for uncaptured UI metrics or components. [Official release](https://www.thepinkfongcompany.com/news/pr/207)
- **License boundary:** the current official release describes free download and the listed creative uses but does not establish a broader webfont license in this reference. Separately, the loaded corporate Spoqa Han Sans Neo is distributed by Spoqa under the SIL Open Font License. [Spoqa source and license](https://github.com/spoqa/spoqa-han-sans)
- **Declared/system families:** `-apple-system`, `system-ui`, Segoe UI, Roboto, Helvetica Neue, Noto Sans, emoji families, and Arial appear in computed stacks. They remain system context; do not label a substituted system font as Spoqa Han Sans Neo or Pinkfong Baby Shark Font.

### Observed hierarchy

| Role | Size | Weight | Line height | Source boundary |
|------|------|--------|-------------|-----------------|
| Corporate body | 16px | 400 | 25.144px | Loaded Spoqa Han Sans Neo text on supplied corporate routes |
| Corporate heading | 38px | 700 | 59.717px | Corporate-company h1; computed system stack, not a brand-font token |
| Brand display | 48px | 700 | 48px | One corporate-business h1 computes to loaded `BabyShark`; official distribution is Pinkfong Baby Shark Font |

## Layout

The supplied evidence is a single desktop corporate capture. It records spacing clusters at 8px, 20px, and 32px, but does not establish a reusable product grid, consumer-content layout, or mobile breakpoint system. The measured controls above preserve their own padding; no generic card or page-spacing rule is inferred.

### Responsive Behavior

Only a 1440×900 collector viewport was supplied. The artifact includes a hidden mobile-menu dialog structure, but no open-dialog or mobile viewport observation. Breakpoints, touch-target rules, safe-area behavior, and responsive layout changes are intentionally absent.

## Elevation & Depth

Most representative corporate controls and the dialog have `box-shadow: none`. The antd buttons carry small shadows: every captured primary button (the home CTA, the company-page outline action, the business-page actions and the overlay chips) uses `rgba(255, 5, 88, 0.06) 0px 2px 0px 0px`, while the default-style family-site pill uses `rgba(0, 0, 0, 0.02) 0px 2px 0px 0px`. These are component-local observations, not an elevation scale. Corrected 2026-09-29: the July text named only the home CTA and the family-site pill.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`
- `shadow.pink-lift`: `rgba(255, 5, 88, 0.06) 0px 2px 0px 0px`

## Motion & Easing

No duration, easing curve, reduced-motion rule, or captured animated state is available in the supplied artifact. Motion tokens are intentionally absent.

## Components

### Public corporate home

**Corporate primary action — observed default**
- Background: #ff66af
- Text: #ffffff
- Radius: 32px
- Padding: 32px 15px
- Font: 24px / 400 / system stack
- Shadow: rgba(255, 5, 88, 0.06) 0px 2px 0px 0px
- States: default captured; this element has no pointer-state frame.
- Use: `corporate-home` / `home::[data-omd-capture="26"]`; one public corporate CTA with 64px rendered height.

**Family-site pill — observed default**
- Background: #ffffff
- Text: #8c8c8c
- Radius: 32px
- Padding: 4px 20px
- Font: 14px / 400 / system stack
- Shadow: rgba(0, 0, 0, 0.02) 0px 2px 0px 0px
- States: default captured; this element has no pointer-state frame.
- Use: `home::[data-omd-capture="31"]`, repeated on corporate-home, corporate-company, and corporate-business; 35px rendered height.

### Public corporate-company page

**Business outline action — observed default**
- Background: #ffffff
- Text: #08c7ff
- Radius: 32px
- Padding: 30px 15px
- Font: 18px / 400 / system stack
- Shadow: rgba(255, 5, 88, 0.06) 0px 2px 0px 0px
- States: default only. The element's hover, pressed and focus frames (`surface-2::[data-omd-capture="23"]::state-*`) move the fill from #ffffff to #fffffe or #fffffc and the text from #08c7ff to #09c7ff, #0bc8ff or #0ec8ff: one to six channel units, a transition caught in progress, so no state value is declared. Corrected 2026-09-29: the July frontmatter declared those frames as hover #fffffe, pressed #fffffc and focus #fffffc while this line said no state value was specified; the declarations are removed.
- Use: One public corporate-company action with 60px rendered height.

### Shared corporate mobile structure

**Mobile menu dialog — captured structure**
- Background: #ffffff
- Text: #000000
- Padding: 30px
- Font: 14px / 400 / system stack
- Use: `home::div.DefaultMenu_mobile-menu-modal__SEaJA`, a hidden dialog structure captured on all three corporate routes; no opened dialog interaction was captured.

### Header and footer (all three pages)

**Header menu link — rest / selected**
- Background: transparent
- Text: rgba(0, 0, 0, 0.88)
- Selected: text #ff66af on the current-page item (li.ant-menu-item-selected): the company link on the company page (`surface-2::[data-omd-capture="5"]`) and the business link on the business page (`surface-3::[data-omd-capture="7"]`)
- Padding: 0px 16px, on the menu item li (`home::[data-omd-capture="4"]`)
- Height: 64px
- Font: 14px / 400 / 64px system stack
- Use: the anchor inside each antd menu item, `home::[data-omd-capture="5"]`; no pointer-state frame.

**Header submenu trigger — observed default**
- Background: transparent
- Text: rgba(0, 0, 0, 0.88)
- Radius: 8px
- Size: 48px × 64px
- Font: 14px / 400 / 64px system stack
- Use: div.ant-menu-submenu-title with aria-haspopup at `home::[data-omd-capture="14"]`, on all three pages. The collector opened no submenu and recorded no pointer-state frame.

**Locale toggle — inactive / active**
- Background: transparent
- Text: #dddddd inactive; #2e2e2e on the active locale (class LocaleSelector_active)
- Size: 44px × 15px inactive, 35px × 16px active
- Font: 13.3333px / 400 Arial, the browser default button font as computed; it is not a Pinkfong or Spoqa face
- Use: `home::[data-omd-capture="2"]` (inactive) and `"1"` (active), repeated as a pair at `"21"`/`"22"` and on all three pages; no pointer-state frame.

**Footer link — observed default**
- Background: transparent
- Text: #5a5a5a
- Height: 17px
- Font: 14px / 400 / 22.001px system stack
- Use: five footer links on each page, `home::[data-omd-capture="32"]` through `"36"`; no pointer-state frame.

### Home business section

**Section more link — observed default**
- Background: transparent
- Text: #a0a0a0, with a right-arrow icon in the same colour
- Size: 121px × 25px
- Font: 16px / 400 / 25.144px system stack
- Use: a.BusinessSection_more at `home::[data-omd-capture="23"]` (three carousel copies, `"23"` to `"25"`).
- States: default only. The hover and pressed frames of `"23"` both record #c08ca5 and its focus frame #be8ba6. That value matches no rest colour in the capture, the focus frame disagrees, and no carousel copy has frames, so it reads as a colour caught mid-transition; no hover or pressed value is declared.

### Company-page history

**History accordion header — observed default**
- Background: transparent
- Text: rgba(0, 0, 0, 0.88); the expand arrow computes #a4a4a4
- Radius: 8px 8px 0px 0px on the first header, 0px on the middle four, 0px 0px 8px 8px on the last
- Padding: 12px 16px
- Height: 55px
- Font: 14px / 400 / 22px system stack
- Use: six div.ant-collapse-header (role=button) at `surface-2::[data-omd-capture="24"]` through `"29"`, all collapsed; the collector expanded none and recorded no pointer-state frame.

### Business page

**Business primary action — observed default**
- Background: #ff66af
- Text: #ffffff (the inner link at `surface-3::[data-omd-capture="24"]` carries the label, 19px / 400 with 0px 50px padding)
- Radius: 40px
- Padding: 40px 15px
- Height: 82px
- Font: 19px / 400 / system stack
- Shadow: rgba(255, 5, 88, 0.06) 0px 2px 0px 0px
- Use: two antd round primary buttons at `surface-3::[data-omd-capture="23"]` and `"40"` (344px and 327px wide). The 1px border computes rgba(0, 0, 0, 0). The business page has no state frame.

**Business overlay chip — observed default**
- Background: rgba(0, 0, 0, 0.5)
- Text: rgba(255, 255, 255, 0.4)
- Radius: 24px
- Padding: 0px 7px
- Height: 24px (`"25"` is 26px)
- Font: 14px / 400 / system stack
- Shadow: rgba(255, 5, 88, 0.06) 0px 2px 0px 0px
- Use: fifteen restyled antd round primary buttons at `surface-3::[data-omd-capture="25"]` through `"39"`. What they switch or label is not in the dump.

Every component above is specified at rest, and two carry a measured selected variant: the header menu link and the locale toggle. The capture holds twelve pointer-state frames on four elements: the logo link on the home and company pages, the section more link, and the company-page outline action. Each records colour drift or a colour caught mid-transition, so none becomes a hover or pressed value. This collector presses the mouse before it calls `.focus()`, so its focus frames are not keyboard focus-visible measurements, and no focus value is declared. No public consumer-product button, form, card, badge, toast, authenticated flow, or general component variant had the required selector plus surface provenance.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.thepinkfongcompany.com/; https://www.thepinkfongcompany.com/company; https://www.thepinkfongcompany.com/business; https://www.thepinkfongcompany.com/en/company; https://www.thepinkfongcompany.com/en/business; https://www.thepinkfongcompany.com/news/pr/207; https://github.com/spoqa/spoqa-han-sans
**Tier 2 sources:** https://getdesign.md/pinkfong (attempted through built-in web search; no usable Pinkfong record returned); https://styles.refero.design/?q=pinkfong (attempted through built-in web search; no usable Pinkfong style record returned)
**Conflicts unresolved:** none

The prior reference mixed a historical consumer capture into this corporate-only artifact. This update preserves official brand and font context but retains machine tokens and components only where the 2026-07-13 supplied evidence provides a current selector and surface. On 2026-09-29 eight components were added from the same bundle, and three transition-frame state values were removed from the outline action (see `.verification.md`).

### States

The supplied artifact contains default corporate controls, two measured selected variants (the current-page header menu link in #ff66af and the active locale in #2e2e2e), a hidden mobile-menu dialog structure, and one disabled menu-overflow sample. It also holds twelve hover, pressed and focus frames on four elements; each records colour drift or a colour caught mid-transition, so no hover, pressed or focus value is specified (§4). Corrected 2026-09-29: the July text tied the missing state values to `interactionCount: 0`, which counts only dialog, menu and tab expansions, not pointer frames. It does not provide opened-dialog, empty, loading, error, success, toast, form-validation, or product-state evidence. Those specifications are intentionally absent.

Live state probe, 2026-10-16 (`https://www.thepinkfongcompany.com/`), `corporate-primary-action`: pressed — no visible change (measured 2026-10-16); focus — outline #ffe0ec solid 3px.

## Do's and Don'ts

### Do

- Preserve the corporate/public source boundary when using the documented controls.
- Use `#ff66af` only where a Pinkfong corporate-action treatment is intended and evidenced.
- Load Spoqa Han Sans Neo before naming a corporate public-text treatment after it.
- Treat Pinkfong Baby Shark Font as a distinct display asset with its own official release and stated-use boundary.
- Keep the recorded selector and route with every component reuse claim.

### Don't

- Do not turn the public corporate CTA into a general consumer-product, checkout, or authenticated-app button.
- Do not turn the collector's pointer-state frames into hover or pressed styling: on this capture they record colour drift or a colour caught mid-transition, not a settled state.
- Do not call a system-stack heading a Pinkfong font.
- Do not promote the company’s BI downloads or font release into a public component library.
- Do not invent mobile, error, success, loading, or responsive variants from this desktop artifact.

## Voice & Tone

The official company description ties vivid characters, memorable music, and easy-to-follow movement to family-entertainment content IP. Its English company page says the mission is to connect people through joyful content and entertaining experiences, while the business page presents content, partnership, merchandise, live events, and mobile apps as separate offerings. This supports an optimistic, clear corporate voice that speaks about family enjoyment and content capability without treating all corporate copy as child-facing UI guidance. [Company](https://www.thepinkfongcompany.com/en/company) · [Business](https://www.thepinkfongcompany.com/en/business)

## Agent Prompt Guide

For a public corporate Pinkfong concept, start from the evidence boundary: white `#ffffff`, black `#000000`, muted `#5a5a5a`, and a selector-backed Pinkfong-pink `#ff66af` action. Use the specific corporate CTA, family-site pill, or business outline action only with its recorded route and default-state limitation. Load Spoqa Han Sans Neo only when the verified source can be loaded; use Pinkfong Baby Shark Font as an official display asset only within its stated distribution boundary. Do not generate a Pinkfong consumer site, child-facing app, purchase flow, status system, or generic character-card library from this reference.

## Governance

### Known Gaps

- **Contrast, `corporate-primary-action`.** Text `#ffffff` on `#ff66af` measures 2.70:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `family-site-pill`.** Text `#8c8c8c` on `#ffffff` measures 3.36:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `business-outline-action`.** Text `#08c7ff` on `#ffffff` measures 1.98:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-nav-link`.** Text `#000000e0` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-submenu-trigger`.** Text `#000000e0` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-link`.** Text `#5a5a5a` on `#00000000` measures 3.04:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `history-collapse-header`.** Text `#000000e0` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `business-primary-action`.** Text `#ffffff` on `#ff66af` measures 2.70:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
