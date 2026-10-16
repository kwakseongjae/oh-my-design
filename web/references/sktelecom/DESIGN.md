---
name: SK텔레콤
colors:
  brand-link: '#3a46cd'
  foreground: '#1a2232'
  strong: '#3a404e'
  muted: '#595e6b'
  hairline: '#d0d1d3'
  action-fill: '#727887'
  on-action: '#ffffff'
typography:
  body:
    fontSize: 15px
    fontWeight: 600
    lineHeight: 27
    use: Repeated public page body text
  navigation:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 20
    use: Brand-page navigation links
  display:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 38.4
    use: Observed SKT Sans Display body-heading treatment; not a complete type scale
rounded:
  square: 0px
  media-tile: 16px
spacing:
  xs: 6
  sm: 12
  md: 16
  lg: 24
  xl: 40
components:
  brand-current-link:
    type: listItem
    textColor: '#3a46cd'
    padding: 0px
    typography: 16px / 600 / SKT Sans Text
    use: 'Static current-page link in the brand-page local navigation (a.depth2-link depth2-brand is-active at surface-2::[data-omd-capture="11"], 168 x 20 px); it is the selected state of lnb-link. Corrected 2026-09-30: padding is 0px; the July value 0px 12px belongs to the section links (brand-section-link)'
  resource-download:
    type: listItem
    backgroundColor: transparent
    textColor: '#1a2232'
    border: '1px solid #727887'
    rounded: 0px
    padding: 11px 24px
    typography: 13px / 600 / SKT Sans Text
    states: default captured on both download links (surface-2 captures 13 and 14). Their hover and pressed frames record bg rgba(74, 80, 143, 0.027) and their focus frames rgba(74, 80, 143, 0.16), two points on one line from transparent, with text colours that differ by one unit between the two links, so they are transition frames and no state value is declared
    use: Public brand-page download link
  outline-title-link:
    type: listItem
    backgroundColor: transparent
    textColor: '#595e6b'
    border: '1px solid #d0d1d3'
    rounded: 0px
    padding: 6px 12px 6px 16px
    height: 34
    typography: 12px / 600 / SKT Sans Text
    use: Public footer/title link
  top-action:
    type: button
    backgroundColor: '#727887'
    textColor: '#ffffff'
    rounded: 0px
    padding: 1px 6px
    height: 58
    typography: 10px / 700 / SKT Sans Text
    states: 'default observed; the capture holds no state frame for this control, so no hover, focus, pressed, disabled, or error state is retained. Corrected 2026-09-30: the July text derived this from interaction count 0, which counts dialog, tab and menu expansions, not pointer-state frames'
    use: Public desktop/tablet top action
    pressed: no visible change (measured 2026-10-16) (:hover + :active)
  brand-section-link:
    type: tab
    backgroundColor: transparent
    textColor: '#595e6b'
    rounded: 0px
    padding: 0px 12px
    height: 74px
    typography: 16px / 600 / SKT Sans Text
    selected: 'fg #3a46cd, 16px / 700'
    hover: 'fg #3a46cd, 16px / 700'
    pressed: 'fg #3a46cd, 16px / 700'
    states: 'rest sampled on five section links (captures 2-6). The link with class is-active (capture 1, the current section on this route) computes #3a46cd and 700; no aria-selected is recorded, so that pairing rests on the class name. Capture 2''s hover and pressed frames record exactly those values (rgb(58, 70, 205), 700). Captures 3-6 record 700 in every frame, but their colours lie on the line from the rest #595e6b toward #3a46cd, so they are transition frames: the weight change is settled on all five links, the colour on the one that finished. Focus is not declared from the bundle'
    use: Brand-page header section link (a.sub-depth1-link) at surface-2::[data-omd-capture="2"]; 59-90 px wide, line height 20px
  lnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#727887'
    rounded: 0px
    padding: 0px
    height: 20px
    typography: 16px / 600 / SKT Sans Text
    selected: 'fg #3a46cd'
    hover: 'fg #3a46cd'
    pressed: 'fg #3a46cd'
    states: rest sampled on four local-navigation links (captures 8, 9, 10, 12). Every hover and pressed frame of all four records rgb(58, 70, 205) with weight 600 in every frame, exactly the rest colour of the is-active link (capture 11), so the value is settled. Their focus frames record the same colour; focus is not declared from the bundle
    use: Brand-page local navigation (LNB) link (a.depth2-link) at surface-2::[data-omd-capture="8"]; 168 px wide, line height 20px
  intro-tile:
    type: card
    rounded: 16px
    size: 260px wide, 114-228px tall
    typography: 20px / 700 / SKT Sans Text
    states: 13 tiles captured at rest. Each records a pressed frame in which the anchor's own colour moves from rgb(0, 0, 238) to rgb(255, 0, 0), Chromium's default link and active-link colours; the tile text is set by child p elements, so that colour never renders and no pressed value is declared
    use: 'Home service tile (a.item intro-imgNN-target) at home::[data-omd-capture="0"]. The font is the child p.title (20px / 700 / 26px; one tile 18px / 700 / 27px); p.desc is 13px / 600 / 20.8px, tracking -0.13px. The labels compute #ffffff on most tiles, #1a2232 on two (item-safety, item-investor) and #3a46cd on one (item-adot), so no single text colour is declared'
  newsroom-card:
    type: card
    textColor: '#1a2232'
    rounded: 0px
    size: 311px x 271px
    typography: 14px / 500 / SKT Sans Text
    states: 'eight cards captured at rest (captures 13-20: four a.newsroom-link, four a.news-link, 248-271 px tall). Their pressed frames move only the anchor''s default link colour (rgb(0, 0, 238) to rgb(255, 0, 0)), which the child text does not use, so no pressed value is declared'
    use: Home newsroom card (a.newsroom-link) at home::[data-omd-capture="13"]; text colour and font are the child p.text (295 px wide, line height 22.4px)
  footer-menu-link:
    type: button
    backgroundColor: transparent
    textColor: '#3a404e'
    rounded: 0px
    padding: 0px
    height: 20px
    typography: 14px / 500 / SKT Sans Text
    states: 'rest captured on home (captures 21-23) and on the brand page (captures 52-54). The home links'' hover and pressed frames all record rgb(23, 26, 32), which lies on the line from the rest #3a404e to #000000 (58, 64, 78 x 0.404 = 23.43, 25.86, 31.51, rounding to 23, 26, 32), so it is treated as a transition frame and no hover or pressed value is declared'
    use: Footer menu link (first footer row) at home::[data-omd-capture="21"]; 51-89 px wide, line height 20px, tracking -0.56px
  footer-link:
    type: button
    backgroundColor: transparent
    textColor: '#727887'
    rounded: 0px
    padding: 0px
    height: 20px
    typography: 12px / 600 / SKT Sans Text
    states: 'default captured on both surfaces; no state frame. The first link (a.link strong, capture 31) computes #3a404e at the same size and weight'
    use: Footer policy-row link (a.link) at home::[data-omd-capture="32"] (also captures 33-38 and brand-page captures 62-69); tracking -0.48px
  content-row:
    type: button
    backgroundColor: transparent
    textColor: '#3a404e'
    border: '1px #ecedef'
    rounded: 0px
    padding: 24px 24px 0px 0px
    size: 850px wide
    typography: 15px / 600 / SKT Sans Text
    states: 37 rows captured at rest on the brand page; 15 carry the top border and 24px top padding, 22 have neither (0px 24px 0px 0px). No state frame
    use: Brand-page content row (button.content) at surface-2::[data-omd-capture="18"]. The root computes the inherited body text (#000000, 10px / 400 / 11.5px); text colour and font are the child title p.tit (599 px wide, line height 27px), matched by top offset
fonts:
  roles:
    ui: SKT Sans Text
    display: SKT Sans Display
---

# Design System Inspiration of SK텔레콤

## Overview

### Visual Theme & Atmosphere

SK텔레콤 is a Korean connectivity and consumer-technology company whose public ecosystem joins telecommunications with AI services and infrastructure. Its current corporate expression is less about a single consumer-app shell than a clear transition from the legacy meaning of “Telecom” toward Technology, Tomorrow, and Together: the company’s 2022 T-brand renewal describes the T form as an open door to the future, while its AI Company vision frames technology and services around benefiting customers. On the two supplied public surfaces, that forward-looking story resolves into an orderly, typographic corporate interface: loaded SKT Sans families, white or transparent fields, square controls, cool charcoal neutrals, and a saturated blue current-link treatment. The current company facts describe a continuing move toward an AI-infrastructure and full-stack AI-provider role; that strategic evolution is brand context, not a license to turn AI campaign visuals into web tokens.

**Key characteristics:**

- Public brand navigation uses `#3A46CD` for the current-page treatment, with `#727887` as the observed filled top action.
- SKT Sans Text and SKT Sans Display are both loaded first-family faces on the supplied public pages.
- Captured actions are square (`0px` radius); 16px rounding is confined to observed media-tile links.
- The retained values describe the public home and brand-information page only, not T world, A., native apps, advertising, or a general SK텔레콤 product design system.

### Primary tasks

- Read where the company is heading beyond telecom
- Look up what the renewed T brand stands for
- Download a published brand resource from the brand page

### Brand Narrative

SK텔레콤’s current story begins with connectivity but is explicitly moving beyond a telecommunications-only frame. In its 2022 vision announcement, the company described its direction as becoming an AI Company that benefits customers through technology and services. The associated T/B brand renewal gives that turn a visible motif: “OPEN,” represented by an open-door form and a redefinition of T through Technology, Tomorrow, and Together.

That shift remains active rather than historical. A 2026 official fact sheet describes SK텔레콤 as advancing toward an AI-infrastructure architect and full-stack AI provider, joining technology, infrastructure, and services while redesigning products around customers. The two captured public pages should be read as corporate and brand-information surfaces within that broader evolution; they do not document the UI systems of each consumer service.

### Principles

1. **Make technology useful to customers.** SK텔레콤’s AI Company vision explicitly links technology and services with customer benefit.
   *UI implication:* explain the user outcome beside a technical feature; do not let a technical label do all the work.

2. **Keep the future open and legible.** The 2022 renewal uses “OPEN” and an open door as its design motif.
   *UI implication:* use clear pathways and named actions, while treating this as narrative guidance rather than a measured layout rule.

3. **Connect infrastructure, services, and society without conflating their surfaces.** The current fact sheet spans customer AI, national AI infrastructure, and continued internal transformation.
   *UI implication:* preserve source-domain labels; a corporate infrastructure claim does not supply a consumer-product token.

4. **Pair innovation with responsibility.** The current fact sheet places “DO THE GOOD AI” in SK텔레콤’s ESG context.
   *UI implication:* when communicating AI, state the applicable benefit, boundary, or responsibility instead of using generic assurance language.

### Personas

The following are stakeholder archetypes derived from official strategy descriptions, not research-backed individual personas or claims about a specific app’s users.

#### Connected customer

Someone choosing or using SK텔레콤 services and looking for a clear benefit from connectivity or AI-enabled support. Use direct explanations and avoid making infrastructure terminology the only way to understand a task.

#### Enterprise or industry collaborator

An organization evaluating AI infrastructure, transformation, or service capabilities. Keep product/service claims, architecture information, and partnership context distinct from consumer-interface guidance.

#### Korean AI ecosystem stakeholder

A public, institutional, or industry participant concerned with the wider AI-infrastructure and sovereign-AI agenda described by SK텔레콤. Communicate scope and responsibility precisely; this is not evidence for a consumer-screen persona.

## Colors

| Role | Value | Usage and evidence boundary |
| --- | --- | --- |
| Brand current-link | `#3A46CD` | Current-page brand-navigation links (the `is-active` section link and LNB link) and the settled hover and pressed colour of the LNB and section links (§4). Corrected 2026-09-30: the July text also said "focused", which came from the bundle's focus frames; focus is not declared from a bundle. |
| Foreground | `#1A2232` | Public brand-page resource-download text only. |
| Strong link text | `#3A404E` | Repeated stronger public link text on the supplied pages. |
| Muted link text | `#595E6B` | Public footer/title link text. |
| Hairline | `#D0D1D3` | 1px outline on the footer/title link. |
| Action fill | `#727887` | Observed desktop/tablet top-action fill. |
| On action | `#FFFFFF` | Text on that `#727887` top action. |

T Blue and T Red are named in SK텔레콤’s 2022 renewal story as brand colors, but the supplied computed-style evidence does not establish their official palette values or product roles. This reference therefore does not manufacture a T Blue hex or use a corporate color story to overwrite the measured public-link values above.

## Typography

### Evidence classes

| Evidence class | Family and boundary |
| --- | --- |
| Official product-use | No separate first-party announcement in the consulted material states that a named family applies to all SK텔레콤 apps or services. |
| Live computed surface-use | `SKT Sans Text` is loaded with high confidence and is the visible first family in 291 supplied observations across text, buttons, badges, and list items. `SKT Sans Display` is loaded with high confidence and appears in seven supplied visible observations, including heading/body-heading roles. |
| Official distributed brand asset | The supplied artifact records SK텔레콤-hosted WOFF/WOFF2 delivery URLs for SKT Sans Text weights and SKT Sans Display weights. This establishes delivery on the captured public pages, not a redistribution grant. |
| Declared-only | `swiper-icons` has an `@font-face` declaration but no visible use in the supplied capture. It is not a brand typography token. |
| Unresolved | No first-party public font licence or general re-use permission was found in the consulted sources. Do not treat the hosted files as permission to distribute the faces. |

### Captured public hierarchy

| Role | Family | Size | Weight | Line height | Evidence boundary |
| --- | --- | ---: | ---: | ---: | --- |
| Public body | SKT Sans Text | 15px | 600 | 27px | Repeated public-page body samples; not a complete body scale. |
| Brand navigation | SKT Sans Text | 16px | 600 | 20px | Public brand-page navigation links. |
| Display treatment | SKT Sans Display | 24px | 700 | 38.4px | Six visible public body-heading observations only. |
| Larger display sample | SKT Sans Display | 48px | 700 | 48px | One `h3` observation only; not promoted to a global token. |

## Layout

The supplied desktop captures (1440×900) use spacing clusters of 6, 12, 16, 24, and 40px. On the brand page, 24px and 40px recur around content controls and information groups; they are measured spacing values, not proof of a complete modular grid. The current-page navigation uses compact 16px text with 12px inline padding, while resource links expand horizontally through 11px × 24px padding. Preserve this contrast between dense navigation and spacious resource actions rather than inventing a mobile grid or a universal card layout.

### Responsive Behavior

The only supplied viewport is 1440×900. It establishes the listed desktop public-page values and does not establish a mobile type scale, breakpoints, stacking, touch target, or responsive component contract. Re-measure the actual target surface before assigning those values.

## Elevation & Depth

All retained component representatives report `box-shadow: none`. That supports a flat treatment for these public brand-page links and top action. It does not establish that SK텔레콤 product, marketing, retail, native-app, or campaign interfaces never use shadow, gradients, imagery, or elevation.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Motion & Easing

No duration, easing, transition, or animation token is retained. The supplied public-page capture has no interaction records, so motion behavior is unresolved at the smallest group boundary rather than approximated with a generic corporate motion scale.

## Components

### Brand navigation link

**Current page**
- Background: transparent
- Text: `#3A46CD`
- Border: none
- Radius: 0px
- Padding: 0px (168px × 20px)
- Font: 16px / 600 / SKT Sans Text
- Use: `surface-2::[data-omd-capture="11"]` (`a.depth2-link depth2-brand is-active`), the static current-page link in the brand-page local navigation; it is the selected state of the LNB link below.
- Corrected 2026-09-30: the July text gave this link 0px 12px padding. Capture 11 computes 0px; the 12px inline padding belongs to the section links in the brand-page header (see below).

### Resource download link

**Default**
- Background: transparent
- Text: `#1A2232`
- Border: 1px solid `#727887`
- Radius: 0px
- Padding: 11px 24px
- Font: 13px / 600 / SKT Sans Text
- Use: `surface-2::[data-omd-capture="13"]` and `"14"`, public brand-page download links

### Outline title link

**Default**
- Background: transparent
- Text: `#595E6B`
- Border: 1px solid `#D0D1D3`
- Radius: 0px
- Padding: 6px 12px 6px 16px
- Height: 34px
- Font: 12px / 600 / SKT Sans Text
- Use: `home::[data-omd-capture="39"]` and `surface-2::[data-omd-capture="70"]`, public footer/title links

### Top action

**Desktop/tablet default**
- Background: `#727887`
- Text: `#FFFFFF`
- Radius: 0px
- Padding: 1px 6px
- Height: 58px
- Font: 10px / 700 / SKT Sans Text
- Use: `home::[data-omd-capture="29"]` and `surface-2::[data-omd-capture="60"]`, public desktop/tablet top action

Corrected 2026-09-30: the July text here said the state-suffixed snapshots could not be promoted because the `interactions` array is empty and `interactionCount` is zero. That count covers dialog, tab and menu expansions, not pointer states. The bundle holds 62 state frames on 37 elements; the settled ones are declared below, and the rest are listed with the reason in `.verification.md` (2026-09-30 appendix).

The components below were transcribed on 2026-09-30 from the same 2026-07-13 bundle; nothing was re-measured.

### Brand section link

- Background: transparent
- Text: `#595E6B`
- Font: 16px / 600 / SKT Sans Text, line height 20px
- Radius: 0px; padding 0px 12px; height 74px (59px to 90px wide)
- Selected: the link carrying class `is-active` (capture 1, the current section on this route) computes `#3A46CD` and weight 700. No `aria-selected` is recorded, so the pairing rests on the class name.
- Hover: text `#3A46CD`, weight 700
- Pressed: text `#3A46CD`, weight 700
- States: capture 2's hover and pressed frames record `rgb(58, 70, 205)` and weight 700, exactly the rest values of the `is-active` link. Captures 3 to 6 record weight 700 in every frame, but their colours (`rgb(87, 93, 112)` and similar in hover and pressed, `rgb(79, 86, 138)` in focus) lie on the line from the rest `#595E6B` toward `#3A46CD`, so they are transition frames. The weight change is settled on all five links and the colour on the one that finished. Focus is not declared from the bundle.
- Use: `a.sub-depth1-link` in the brand-page header; evidence `surface-2::[data-omd-capture="2"]`.

### Brand LNB link

- Background: transparent
- Text: `#727887`
- Font: 16px / 600 / SKT Sans Text, line height 20px
- Radius: 0px; padding 0px; height 20px (168px wide)
- Selected: `#3A46CD` at the same weight (the brand current link above, capture 11).
- Hover: text `#3A46CD`
- Pressed: text `#3A46CD`
- States: all four unselected links (captures 8, 9, 10 and 12) record `rgb(58, 70, 205)` in every hover and pressed frame, with weight 600 in every frame. That is exactly the rest colour of the current link, so the value is settled. Their focus frames record the same colour; focus is not declared from the bundle.
- Use: `a.depth2-link` in the brand-page local navigation; evidence `surface-2::[data-omd-capture="8"]`.

The LNB title above these links (`p.lnb-title`) computes `#3A46CD`, 26px / 700 / 36.4px, with a 4px `#3A46CD` bottom border and 3px bottom padding (99px × 43px). It is a heading, so it is recorded here rather than as a component.

### Home service tile

- Radius: 16px
- Size: 260px wide, 114px to 228px tall
- Labels: child elements. `p.title` computes 20px / 700 / 26px (one tile: 18px / 700 / 27px) and `p.desc` 13px / 600 / 20.8px, tracking -0.13px. They compute `#FFFFFF` on most tiles, `#1A2232` on two (`item-safety`, `item-investor`) and `#3A46CD` on one (`item-adot`), so no single text colour is declared.
- States: all 13 tiles record a pressed frame in which the anchor's own colour moves from `rgb(0, 0, 238)` to `rgb(255, 0, 0)`, Chromium's default link and active-link colours. The anchor's text is set by its child `p` elements, so that colour never renders, and no pressed value is declared.
- Use: `a.item intro-imgNN-target` on home; evidence `home::[data-omd-capture="0"]` to `"12"`.

### Newsroom card

- Radius: 0px
- Size: 311px × 271px (news cards 248px to 271px tall)
- Text: `#1A2232`, 14px / 500 / 22.4px (the child `p.text`, 295px wide)
- States: the eight cards (captures 13 to 20: four `a.newsroom-link`, four `a.news-link`) record pressed frames that move only the anchor's default link colour (`rgb(0, 0, 238)` to `rgb(255, 0, 0)`), which the child text does not use; no pressed value is declared.
- Use: home newsroom and news lists; evidence `home::[data-omd-capture="13"]`.

### Footer menu link

- Background: transparent
- Text: `#3A404E`
- Font: 14px / 500 / SKT Sans Text, line height 20px, tracking -0.56px
- Radius: 0px; padding 0px; height 20px (51px to 89px wide)
- States: rest captured on home (captures 21 to 23) and on the brand page (captures 52 to 54). The three home links' hover and pressed frames all record `rgb(23, 26, 32)`. That point lies on the line from the rest `#3A404E` to `#000000`: 58, 64, 78 × 0.404 gives 23.43, 25.86, 31.51, which rounds to 23, 26, 32. It is therefore treated as a transition frame, and no hover or pressed value is declared.
- Use: first footer row; evidence `home::[data-omd-capture="21"]`.

### Footer link

- Background: transparent
- Text: `#727887`
- Font: 12px / 600 / SKT Sans Text, line height 20px, tracking -0.48px
- Radius: 0px; padding 0px; height 20px
- Strong variant: the first link (`a.link strong`, capture 31) computes `#3A404E` at the same size and weight.
- States: default only; no state frame.
- Use: `a.link` in the footer policy row; evidence `home::[data-omd-capture="32"]` (also captures 33 to 38, and brand-page captures 62 to 69). The copyright line (`p.copy`) computes `#727887`, 12px / 600 / 21.6px.

### Brand content row

- Background: transparent
- Border: 15 rows carry a 1px `#ECEDEF` top border with 24px top padding (`24px 24px 0px 0px`); 22 rows have neither (`0px 24px 0px 0px`)
- Size: 850px wide
- Title: `#3A404E`, 15px / 600 / 27px (the child `p.tit`, 599px wide, matched by top offset)
- States: default only; no state frame.
- Use: `button.content` rows on the brand page; evidence `surface-2::[data-omd-capture="18"]` (bordered) and `"15"` (unbordered). The root computes the inherited body text (`#000000`, 10px / 400 / 11.5px), so no label style is taken from it.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.sktelecom.com/ | https://www.sktelecom.com/view/introduce/brand.do
**Tier 2 sources:** https://getdesign.md/sktelecom (attempted; no usable response) | https://styles.refero.design/?q=SK%20Telecom (attempted; no usable response)
**Conflicts unresolved:** none

### States

Pointer states are declared only where the 2026-07-13 bundle holds a settled frame. The brand LNB links and brand section links turn `#3A46CD` on hover and pressed (the section links also move to weight 700), and the current-page link of each list is its selected state (§4). Every other state frame is listed in `.verification.md` with the reason it is not declared: transition frames (section-link colours on four links, the footer menu links, the download links), Chromium's default link colours on container anchors, and focus frames, which are never declared from a bundle. The bundle records no dialog, tab, menu, toast or form interaction, and no selector-backed loading, empty, error, success, disabled or validation state. Corrected 2026-09-30: the July text said no component-state matrix could be retained because the bundle has zero interaction expansions; that count does not cover pointer-state frames, of which the bundle holds 62.

Live state probe, 2026-10-16 (`https://www.sktelecom.com/`), `top-action`: pressed — no visible change (measured 2026-10-16).

## Do's and Don'ts

### Do

- Use SKT Sans Text or SKT Sans Display only when the supplied, SK텔레콤-hosted face is actually available and its deployment is permitted.
- Keep the measured current-page blue `#3A46CD` in the brand-navigation context from which it was captured.
- Retain the square, transparent outline treatment for the observed resource and footer/title links.
- Treat the 16px media-tile rounding as local to the observed tile links, not as a global control radius.

### Don't

- Substitute a system font and label it SKT Sans.
- Convert T Blue, T Red, AI campaign art, or brand-story language into a measured UI token without direct evidence.
- Generalize the 58px desktop/tablet top action into a mobile primary button.
- Invent responsive breakpoints, input states, dialogs, toast behavior, timing, easing, or component variants from static captures.

## Voice & Tone

Official material frames SK텔레콤’s current direction around technology and services that benefit customers, an “OPEN” motif, and a transition toward AI infrastructure and services. The usable voice is forward-looking, useful, and direct; it should explain a concrete benefit or next step rather than rely on empty futurism.

| Do | Don't |
| --- | --- |
| Connect technology to a concrete customer or societal use. | Use “AI” as a standalone promise without explaining what changes. |
| Use clear, open language for navigation and resource actions. | Turn an unmeasured visual pattern into a brand command. |
| Keep corporate, service, and brand surfaces named when their evidence differs. | Collapse telecom, AI infrastructure, and every consumer service into one UI claim. |

Illustrative tone samples (characterization, not source copy):

- “Choose the service that helps you stay connected today.”
- “Explore the technology and information behind the next step.”
- “See how this service can make a customer task clearer.”

## Agent Prompt Guide

For a public SK텔레콤 corporate-information composition, use the verified language narrowly: a typographic, flat, square-cornered frame; SKT Sans Text for available compact body/navigation copy; SKT Sans Display for the observed display treatment; dark charcoal links; and a saturated `#3A46CD` current-page navigation cue. Use transparent resource links with 1px neutral outlines and a `#727887`/white top action only in their measured desktop/tablet contexts. Keep the T-brand “open door” and AI Company material as narrative direction rather than color-token instructions. Do not present fallback fonts, unmeasured T Blue/T Red values, or unobserved app controls as SK텔레콤 facts.

## Governance

### Known Gaps

- **Contrast, `resource-download`.** Text `#1a2232` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `outline-title-link`.** Text `#595e6b` on `#00000000` measures 3.24:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `top-action`.** Text `#ffffff` on `#727887` measures 4.42:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `brand-section-link`.** Text `#595e6b` on `#00000000` measures 3.24:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-menu-link`.** Text `#3a404e` on `#00000000` measures 2.02:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `content-row`.** Text `#3a404e` on `#00000000` measures 2.02:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
