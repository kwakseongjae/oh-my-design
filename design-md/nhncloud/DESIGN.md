---
name: NHN Cloud
colors:
  primary: '#125de6'
  on-primary: '#ffffff'
  dark: '#111111'
  muted: '#727781'
  border: '#51565f'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    use: Corporate-marketing body sample
  cta:
    fontSize: 15px
    fontWeight: 400
    use: 40px corporate header CTA
  cta-lg:
    fontSize: 17px
    fontWeight: 500
    use: 48px corporate section CTA
rounded:
  cta: 30px
  control: 6px
  menu: 8px
spacing:
  cta-sm-y: 8
  cta-sm-x: 19
  cta-lg-y: 10
  cta-lg-x: 27
  menu-y: 8
  menu-x: 16
components:
  corporate-header-cta:
    type: button
    backgroundColor: '#125de6'
    textColor: '#ffffff'
    border: '1px solid #125de6'
    rounded: 30px
    padding: 8px 19px
    height: 40px
    typography: 15px / 400 Pretendard Variable
    states: 'hover and pressed sampled on this selector; both frames record the fill #1446c8, with text and border colours equal to rest. One element, no sibling; the two frames agree. No focus frame. Corrected 2026-09-29: the July text said no state value was inferred while the value was already declared'
    use: Corporate-marketing header CTA, selector home::[data-omd-capture=13]
    hover: 'bg #1446c8'
    pressed: 'bg #1446c8'
  corporate-section-cta:
    type: button
    backgroundColor: '#125de6'
    textColor: '#ffffff'
    border: '1px solid #125de6'
    rounded: 30px
    padding: 10px 27px
    height: 48px
    typography: 17px / 500 Pretendard Variable
    states: 'default captured; the capture holds no hover, pressed, or focus frame for this element (corrected 2026-09-29: the July text gave it the state names of other rounded-30 buttons, capture 13 and 15-17)'
    use: Corporate-marketing section CTA, selector home::[data-omd-capture=29]
  resource-menu-trigger:
    type: button
    textColor: '#727781'
    border: '1px solid #51565f'
    rounded: 6px
    padding: 10px 16px
    height: 42px
    typography: 16px / 400 Pretendard Variable
    states: expanded and menu-open observed
    use: Corporate-marketing resource/menu trigger, selector home::[data-omd-capture=130]
  corporate-outline-pill:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    border: '1px #ffffff'
    rounded: 30px
    padding: 11px 28px
    height: 50px
    typography: 17px / 500 / 26px
    hover: 'fg #c8ccd4, border #c8ccd4'
    pressed: 'fg #c8ccd4, border #c8ccd4'
    states: rest on four pills (capture 14-17); hover and pressed sampled on three of them (15-17), all recording the same value; no focus frame
    use: Corporate-marketing outline pill at home::[data-omd-capture="15"]; the white label implies a dark section behind it, whose fill was not sampled
  corporate-utility-link:
    type: tab
    backgroundColor: transparent
    textColor: '#ffffff'
    rounded: 0px
    padding: 0px
    height: 26px
    typography: 17px / 500 / 26px
    hover: 'fg #125de6'
    pressed: 'fg #125de6'
    states: rest, hover, and pressed sampled on both header utility controls (capture 9 and 10), which record the same values; no focus frame
    use: Corporate-marketing header utility control at home::[data-omd-capture="9"] (button) and "10" (link), both classed hover:text-blue-700
  corporate-gnb-item:
    type: tab
    backgroundColor: transparent
    textColor: '#ffffff'
    rounded: 0px
    padding: 0px 18px
    height: 72px
    typography: 17px / 500 / 26px
    states: rest sampled on eight items (capture 1-8); the hover and pressed frames record near-black text that differs per item and between the two frames (rgb(17, 17, 17) to rgb(17, 19, 23)), a transition in progress, so no state value is declared
    use: Corporate-marketing top navigation item at home::[data-omd-capture="2"]; the first item drops its left padding and the last its right
  corporate-footer-link:
    type: tab
    backgroundColor: transparent
    textColor: '#727781'
    rounded: 0px
    padding: 0px
    height: 20px
    typography: 14px / 400 / 20px
    states: default captured; no pointer-state sample
    use: Corporate-marketing footer link at home::[data-omd-capture="58"] (74 occurrences of this variant)
  resource-menu:
    type: card
    backgroundColor: '#111111'
    textColor: '#ffffff'
    border: '1px #727781'
    rounded: 8px
    padding: 8px 0px
    size: 180px x 378px
    typography: 16px / 400 / 24px
    shadow: 0px 4px 8px rgba(0, 0, 0, 0.06)
    states: expanded and menu-open observed
    use: Expanded corporate-marketing resource menu (role=menu) at home::[data-omd-interaction-capture="menu-0-0"], opened from the resource-menu trigger
  resource-menu-item:
    type: button
    backgroundColor: transparent
    textColor: '#727781'
    rounded: 0px
    padding: 8px 16px
    size: 178px x 36px
    typography: 17px / 400 / 26px
    states: observed only inside the expanded menu; no pointer-state sample
    use: Item (role=menuitem) inside the expanded resource menu at home::[data-omd-interaction-capture="menu-0-2"]; "menu-0-3" records the same values
  docs-header-cta:
    type: button
    backgroundColor: '#125de6'
    textColor: '#ffffff'
    rounded: 30px
    padding: 9px 20px
    height: 40px
    typography: 15px / 300 / 22px
    states: default captured; no pointer-state sample
    use: Documentation-chrome header CTA (a.link-text) on docs.nhncloud.com at surface-3::[data-omd-capture="3"]; not the corporate CTA token
  docs-category-link:
    type: tab
    backgroundColor: transparent
    textColor: '#222222'
    rounded: 0px
    padding: 0px 0px 0px 60px
    height: 46px
    typography: 14px / 400 / 46px
    selected: 'fg #125de6'
    hover: 'fg #125de6, bg #e9f1ff'
    pressed: 'fg #125de6, bg #e9f1ff'
    states: 'rest, hover, and pressed sampled on nine category links (capture 4 and 16-23), all recording the same values; the current category (capture 5) is #125de6 at rest and takes the same #e9f1ff fill; no focus frame'
    use: Documentation sidebar category link (a.gnb_link.category_menu) on docs.nhncloud.com at surface-3::[data-omd-capture="4"]
  docs-page-link:
    type: tab
    backgroundColor: transparent
    textColor: '#555555'
    rounded: 0px
    padding: 8px 37px 8px 33px
    height: 36px
    typography: 13px / 300 / 16px
    selected: 'fg #125de6'
    hover: 'fg #125de6, bg #e9f1ff'
    pressed: 'fg #125de6, bg #e9f1ff'
    states: 'rest, hover, and pressed sampled on nine page links (capture 7-15), all recording the same values; the current page (capture 6, class current) is #125de6 at rest and takes the same #e9f1ff fill; no focus frame'
    use: Documentation sidebar page link (a.gnb_link.link_txt) on docs.nhncloud.com at surface-3::[data-omd-capture="7"]
fonts:
  roles:
    ui: Pretendard Variable
---

# Design System Inspiration of NHN Cloud

## Overview

### Visual Theme & Atmosphere

NHN Cloud is a cloud and IT-service company whose public platform describes a broad set of infrastructure and platform services for business operations and service development. Its corporate history traces the cloud service to a 2014 OpenStack launch and records NHN Cloud Corp.'s 2022 establishment, while the current company site frames the role as enabling customers' next technical challenge. On the captured corporate marketing route, that promise is expressed with a narrow, high-contrast action system: a bright `#125DE6` blue on fully rounded CTAs, white labels, dark resource menus, and the loaded `Pretendard Variable` face. The company’s official symbol describes three dots as both cloud and connection; the visual interface does not literalize that story with a broad decorative palette. It instead uses blue as a deliberate conversion signal. [NHN Cloud Company](https://company.nhncloud.com/about?lang=en) and the public [cloud platform](https://www.nhncloud.com/kr) are distinct from the developer-facing TOAST UI catalog and from the documentation chrome captured below.

### Primary tasks

- Review the cloud services on offer, then take the next step
- Pick a JavaScript UI component such as a grid or editor
- Look up reference material for a service in the documentation

### Brand Narrative

NHN Cloud's official history records an OpenStack public-cloud launch in 2014, a cloud-center build in Pangyo in 2015, and the launch of NHN Cloud in April 2022. The company now describes itself as a cloud and IT-service business, with current growth efforts spanning data/AI services, private and global markets, and regional data centers. Its official logo explanation centres connection and boundless possibility; the three-dot symbol is described as a cloud and as a prompt for easy, flexible collaboration.

The developer-facing counterpart is TOAST UI: its own site calls it a JavaScript UI library and free open-source project constantly managed by NHN Cloud, listing applications such as Grid, Editor, Calendar, Chart, and Image Editor alongside smaller components and front-end guides. The catalog is informative evidence of the developer ecosystem, not proof that its catalog-page typography or any unobserved component value is the NHN Cloud corporate design system.

### Principles

1. **Enable a customer’s technical journey.**
   *UI implication:* Prefer a clear capability and an unambiguous next action over decorative language.

2. **Connection is a brand idea, not a license to invent a token system.**
   *UI implication:* Keep the action lane focused; do not turn the corporate logo story into unsupported visual rules.

3. **Corporate marketing and developer catalog are distinct public domains.**
   *UI implication:* Attribute each token and component to its captured route before reuse.

4. **Open-source developer tools need precise boundaries.**
   *UI implication:* Describe TOAST UI's documented applications and components without claiming unseen states or styles.

### Personas

- **Enterprise technical evaluator:** visits the public cloud marketing route to understand services and a next step; the verified CTA values belong to this route.
- **Developer evaluating a UI utility:** visits TOAST UI’s catalog for applications, components, and guides; this is a developer/documentation journey, not the NHN Cloud console.
- **Cloud documentation reader:** uses `docs.nhncloud.com` for reference material; its loaded Noto Sans KR documentation chrome remains surface-local.

## Colors

**Corporate marketing route — selector-backed machine tokens**

- Primary action: `#125DE6` — observed as the filled CTA background and border.
- On primary: `#FFFFFF` — observed CTA label color.
- Dark menu surface: `#111111` — observed expanded menu background.
- Muted control text: `#727781` — observed resource-menu trigger text and menu border.
- Control border: `#51565F` — observed resource-menu trigger border.

Measured corporate pointer states (§4, §14): the header CTA fill deepens to `#1446C8` on hover and press; the white outline pills dim to `#C8CCD4`; the white header utility links turn primary `#125DE6`. They are state values on those components, not palette roles.

The capture also records `#E9F1FF` in documentation chrome. It is not promoted as a corporate marketing or TOAST UI token: the page is a separate documentation shell. It is the hover and pressed fill of the documentation sidebar links and is recorded on those `docs-` components only.

## Typography

- **Live corporate computed use:** `Pretendard Variable` is the only general corporate UI family promoted here. It has 480 visible uses across the corporate marketing capture and a loaded FontFace/source match at `https://www.nhncloud.com/fonts/PretendardVariable.woff2`.
- **Live documentation-chrome use:** `Noto Sans KR` is loaded/high confidence with 203 visible uses on `docs.nhncloud.com`, from Google Fonts sources. It is documentation chrome evidence, not a replacement for the corporate token family.
- **Unresolved catalog use:** the TOAST UI catalog computes `Noto Sans CJK KR` on 122 visible samples, but the collector found no matching loaded FontFace or source. It remains unresolved.
- **Declared-only assets:** `common`, `Noto Sans`, `Noto Sans JP`, `swiper-icons`, and `tui-calendar-font-icon` have declaration/source evidence but zero visible observed use. They are not promoted or substituted.
- **Font licence boundary:** Pretendard’s upstream project distributes the family under SIL Open Font License 1.1. The licence describes the family; the corporate FontFaceSet/source evidence above is what establishes current NHN Cloud web use.

## Layout

The corporate marketing capture pairs a 40px header action with 48px section actions, keeping the bright blue lane intentionally limited. The 30px CTA radius belongs to this marketing surface; the observed 6px trigger and 8px menu panel are a separate resource-control cluster. The source artifact does not establish a universal grid, app-shell spacing scale, or layout rule for the cloud console, TOAST UI applications, or documentation pages.

### Responsive Behavior

The supplied capture is 1440×900 only. It establishes 40px and 48px CTA examples and a 42px resource trigger at that viewport, but it does not establish a mobile breakpoint, responsive menu geometry, or touch-target policy. Preserve the observed values only where the same surface is being recreated; validate any responsive implementation separately.

## Elevation & Depth

The captured corporate CTA samples have no shadow. The expanded resource menu alone records an overlay shadow of `0px 4px 8px rgba(0, 0, 0, 0.06)` behind a `#111111` panel and `#727781` hairline. Do not turn that one menu observation into a general card-elevation system.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.menu-overlay`: `0px 4px 8px rgba(0, 0, 0, 0.06)`

## Motion & Easing

No computed duration, easing curve, or motion sequence was supplied as a reliable token. The menu-open capture establishes the resulting expanded panel only. Treat motion values as unresolved until a relevant public surface is captured with explicit computed transition evidence.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.nhncloud.com/kr (corporate marketing computed styles and loaded Pretendard Variable), https://ui.toast.com/ (official TOAST UI catalog), https://docs.nhncloud.com/ko/nhncloud/ko/overview/ (separate documentation chrome), https://company.nhncloud.com/about?lang=en (official company history and brand context)
**Tier 2 sources:** https://getdesign.md/nhncloud — attempted; built-in web open returned a non-retryable error and search returned no record. https://styles.refero.design/?q=nhncloud — attempted; built-in web open returned a non-retryable error and search returned no record.
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof — Tier 1 live inspect)

## Components

### Corporate Header CTA

**40px primary action**
- Background: #125DE6
- Text: #FFFFFF
- Border: 1px solid #125DE6
- Radius: 30px
- Padding: 8px 19px
- Height: 40px
- Font: 15px / 400 / Pretendard Variable
- Hover: fill `#1446C8` (rgb(20, 70, 200)); text and border colours equal the rest frame
- Pressed: fill `#1446C8`
- States: one element with no sibling to cross-check; its hover and pressed frames, taken at different moments, record the identical fill, so the value is read as settled rather than mid-transition. No focus frame.
- Use: Corporate-marketing header CTA; `home::[data-omd-capture="13"]`.

### Corporate Section CTA

**48px primary action**
- Background: #125DE6
- Text: #FFFFFF
- Border: 1px solid #125DE6
- Radius: 30px
- Padding: 10px 27px
- Height: 48px
- Font: 17px / 500 / Pretendard Variable
- States: default only. The capture holds no hover, pressed, or focus frame for `home::[data-omd-capture="29"]`; the July text had given it the state markers of other `rounded-30` buttons (corrected 2026-09-29).
- Use: Corporate-marketing section CTA; `home::[data-omd-capture="29"]`.

### Resource Menu Trigger

**Expanded trigger**
- Text: #727781
- Border: 1px solid #51565F
- Radius: 6px
- Padding: 10px 16px
- Height: 42px
- Font: 16px / 400 / Pretendard Variable
- Use: Corporate-marketing resource/menu trigger; `home::[data-omd-capture="130"]`; expanded/menu-open was observed.

### Resource Menu

**Expanded panel**
- Background: #111111
- Text: #FFFFFF
- Border: 1px solid #727781
- Radius: 8px
- Padding: 8px 0px
- Shadow: 0px 4px 8px rgba(0, 0, 0, 0.06)
- Font: 16px / 400 / Pretendard Variable
- Use: Expanded corporate-marketing menu panel; `home::[data-omd-interaction-capture="menu-0-0"]`.

### Corporate Outline Pill

**Rest / hover / pressed**
- Background: transparent
- Text: #FFFFFF
- Border: 1px #FFFFFF
- Radius: 30px
- Padding: 11px 28px
- Height: 50px
- Font: 17px / 500 / 26px Pretendard Variable
- Hover: text and border #C8CCD4
- Pressed: text and border #C8CCD4
- Use: four outline pills at `home::[data-omd-capture="14"]` through `"17"`; hover and pressed frames exist for `"15"` through `"17"` and record the same change. The white label implies a dark section behind it; that backdrop's fill was not sampled and is not claimed.

### Corporate Header Utility Link

**Rest / hover / pressed**
- Background: transparent
- Text: #FFFFFF
- Radius: 0px
- Padding: 0px
- Height: 26px
- Font: 17px / 500 / 26px Pretendard Variable
- Hover: text #125DE6
- Pressed: text #125DE6
- Use: header utility controls at `home::[data-omd-capture="9"]` (button) and `"10"` (link), both classed `hover:text-blue-700`; the header CTA's `bg-blue-700` computes to the same #125DE6.

### Corporate Top Navigation Item

**Rest**
- Background: transparent
- Text: #FFFFFF
- Radius: 0px
- Padding: 0px 18px (the first item drops its left padding, the last its right)
- Height: 72px
- Font: 17px / 500 / 26px Pretendard Variable
- States: the hover frames (four items) and pressed frames (all eight) record near-black text that differs per item and between the two frames of one item (`rgb(17, 17, 17)` to `rgb(17, 19, 23)`). These are transition frames, so no hover or pressed value is declared.
- Use: top navigation at `home::[data-omd-capture="1"]` through `"8"`.

### Corporate Footer Link

**Observed default**
- Background: transparent
- Text: #727781
- Padding: 0px
- Height: 20px
- Font: 14px / 400 / 20px Pretendard Variable
- Use: footer link at `home::[data-omd-capture="58"]`; the variant occurs 74 times. No pointer-state frame.

### Resource Menu Item

**Inside the expanded panel**
- Background: transparent
- Text: #727781
- Padding: 8px 16px
- Size: 178px × 36px
- Font: 17px / 400 / 26px Pretendard Variable
- Use: `role="menuitem"` rows at `home::[data-omd-interaction-capture="menu-0-2"]` and `"menu-0-3"`, inside the panel above; no pointer-state frame.

### Documentation Header CTA (docs chrome)

**Observed default**
- Background: #125DE6
- Text: #FFFFFF
- Radius: 30px
- Padding: 9px 20px
- Height: 40px
- Font: 15px / 300 / 22px Noto Sans KR
- Use: `surface-3::[data-omd-capture="3"]` on docs.nhncloud.com. Documentation chrome, not the corporate CTA token; no pointer-state frame.

### Documentation Sidebar Category Link (docs chrome)

**Rest / current / hover / pressed**
- Background: transparent
- Text: #222222; current category #125DE6
- Radius: 0px
- Padding: 0px 0px 0px 60px
- Height: 46px
- Font: 14px / 400 / 46px Noto Sans KR
- Hover: text #125DE6 on a #E9F1FF fill
- Pressed: text #125DE6 on a #E9F1FF fill
- Use: `surface-3::[data-omd-capture="4"]` and `"16"` through `"23"`, nine links recording the same values; the current category `"5"` takes the same #E9F1FF fill.

### Documentation Sidebar Page Link (docs chrome)

**Rest / current / hover / pressed**
- Background: transparent
- Text: #555555; current page #125DE6
- Radius: 0px
- Padding: 8px 37px 8px 33px
- Height: 36px
- Font: 13px / 300 / 16px Noto Sans KR
- Hover: text #125DE6 on a #E9F1FF fill
- Pressed: text #125DE6 on a #E9F1FF fill
- Use: `surface-3::[data-omd-capture="7"]` through `"15"`, nine links recording the same values; the current page `"6"` (class `current`) takes the same #E9F1FF fill.

Hover and pressed values are declared only where the frames record a settled change. No focus value is declared: the collector presses the mouse before it calls `.focus()`, so its focus frames are not keyboard focus-visible measurements. No TOAST widget, input, grid, editor, error treatment, or responsive variant is specified here without a captured selector/value pair on an actual relevant surface.

### Published component roster (14 published, none measured here)

TOAST UI publishes **14 components**, read from its own index at `https://ui.toast.com/` on
2026-09-19. Every host in this group serves a shell to a plain fetch, so the names come from the
rendered page in a browser. No value, state or geometry below is asserted by this reference.

App Loader, Auto Complete, Calendar, Chart, Color Picker, Context Menu, Date Picker, Editor, Grid, Image-editor, Pagination, Rolling, Time Picker, Tree

Fourteen is the real number, not a short read. TOAST UI is published as a set of standalone
libraries — Grid, Chart, Editor and Calendar are each their own release — rather than as one
component set covering a whole interface.

### States

- Corporate header CTA (`home::[data-omd-capture="13"]`): hover and pressed frames both record the fill `rgb(20, 70, 200)` (`#1446C8`); text and border colours equal the rest frame. One element, no sibling; the two frames agree. The section CTA (`"29"`) has no state frame of its own. Corrected 2026-09-29: the July text said no state value was promoted, while the frontmatter already declared `#1446C8`, and it gave the section CTA the state markers of other `rounded-30` buttons.
- Corporate outline pills: hover and pressed text and border `#C8CCD4` (three of the four pills sampled; all agree). Corporate header utility links: hover and pressed text `#125DE6` (both sampled; they agree). Corporate top navigation: the hover and pressed frames caught the text colour mid-transition, so no value is declared.
- Documentation sidebar links (docs chrome): hover and pressed `#125DE6` text on a `#E9F1FF` fill, eighteen links in agreement; the current category and current page are `#125DE6` at rest.
- The corporate resource trigger was observed expanded/menu-open with the 42px, 6px-radius trigger values above.
- The expanded corporate menu panel was observed at `#111111`, with a 1px `#727781` border, 8px radius, and the recorded overlay shadow.
- A documentation-chrome CTA was observed separately at `surface-3::[data-omd-capture="3"]`: `#125DE6`, white text, 30px radius, `9px 20px` padding, and Noto Sans KR 15px/300. It is not promoted as the corporate CTA token.
- No focus value is declared: the collector presses the mouse before it calls `.focus()`, so its focus frames are not keyboard focus-visible measurements. No disabled, error, success, loading, empty, toast, dialog, or form-validation state is asserted.

## Do's and Don'ts

### Do

- Use `#125DE6` and a 30px radius only for the captured corporate marketing CTA pattern.
- Use loaded `Pretendard Variable` for corporate-marketing reproductions.
- Keep the 6px trigger and 8px expanded-menu geometry tied to their observed resource control.
- Treat TOAST UI and NHN Cloud docs as separately evidenced developer/documentation surfaces.
- Use the measured hover values only on their components: header CTA fill `#1446C8`, outline pill `#C8CCD4`, header utility link `#125DE6`, and, in documentation chrome only, the `#E9F1FF` sidebar-link fill.

### Don't

- Do not merge TOAST UI catalog chrome or documentation-chrome colors into the corporate marketing token set.
- Do not substitute `Noto Sans KR`, `Noto Sans CJK KR`, or a system font for the verified corporate `Pretendard Variable` role.
- Do not invent grid, editor, calendar, error, hover, disabled, or responsive variants from TOAST UI’s product list.
- Do not generalize the menu overlay shadow into a broad elevation ladder.

## Voice & Tone

The official company statement is business-enabling and practical: it positions NHN Cloud as technology support for customers' new journeys. Keep corporate copy direct, capability-led, and concrete about the operational outcome. The TOAST UI catalog has a different, developer-oriented voice: it presents applications, components, tools, and front-end guidance. That public catalog voice is useful context for developers, but it does not turn documentation labels into corporate-marketing microcopy. [Company statement](https://company.nhncloud.com/about?lang=en) · [TOAST UI](https://ui.toast.com/)

## Agent Prompt Guide

For a corporate NHN Cloud marketing treatment, use `Pretendard Variable`, a white-on-`#125DE6` 30px pill CTA, and choose either the 40px / `8px 19px` / 15px-400 header sample or the 48px / `10px 27px` / 17px-500 section sample. For the captured resource menu, use a transparent `#727781` / `#51565F` 6px trigger and an expanded `#111111` panel with an 8px radius and the observed light overlay shadow. On hover and press the header CTA fill deepens to `#1446C8`, and the white outline pills dim to `#C8CCD4`. For the separate documentation shell, sidebar links take `#125DE6` text on a `#E9F1FF` fill on hover and press; keep that docs-local. Do not use this small marketing sample to synthesize a cloud-console UI or TOAST UI widget library.

## Governance

### Known Gaps

- **Contrast, `docs-category-link`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `docs-page-link`.** Text `#555555` on `#00000000` measures 2.82:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
