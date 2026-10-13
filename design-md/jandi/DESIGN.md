---
name: JANDI
colors:
  primary: '#00c473'
  canvas: '#ffffff'
  on-dark: '#ffffff'
  ink: '#000000'
  ink-muted: '#333333'
  muted: '#a2a2a2'
  action-ink: '#041911'
typography:
  hero:
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.43
    use: Public landing headline
  section:
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1.43
    use: Public landing feature heading
  nav-action:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    use: Public global navigation action
rounded:
  action: 6px
  floating-nav: 10px
  security-card: 16px
spacing:
  nav-action-y: 7
  nav-action-x: 14
  landing-action-y: 12
  landing-action-x: 30
components:
  security-environment-card:
    type: card
    backgroundColor: '#ffffff'
    rounded: 16px
    padding: 40px 32px 54px
    shadow: rgba(0, 18, 47, 0.08) 0px 14px 24px 0px
    use: 'Static security environment card; surface-5::li.Security_securityEnvironmentList__3CRP0; its text sits in children (h3 #333333 24px / 700 / 34px, p #333333 16px / 400 / 24px)'
  ai-environment-card:
    type: card
    backgroundColor: '#ffffff'
    rounded: 16px
    padding: 40px 32px 54px
    shadow: rgba(0, 18, 47, 0.16) 0px 14px 24px 0px
    use: 'Static AI environment card; surface-6::li.JandiAi_aiEnvironmentList__2ng2t; its text sits in children (strong #333333 40px / 700 / 42px, h3 24px / 700 / 34px, p 16px / 400 / 24px)'
  header-primary-action:
    type: button
    backgroundColor: '#00c473'
    textColor: '#ffffff'
    border: '1px #00c473'
    rounded: 6px
    padding: 7px 14px
    height: 36px
    typography: 14px / 500 / 20px Noto Sans
    states: rest on all six capture records (capture 10 on each); the bundle holds no state frame for any JANDI element
    use: Global navigation primary action (a) at home::[data-omd-capture="10"], 69 x 36; the same values repeat on surface-2 through surface-6
  header-outline-action:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    border: '1px #dddddd'
    rounded: 6px
    padding: 7px 14px
    height: 36px
    typography: 14px / 500 / 20px Noto Sans
    states: rest on all six capture records (capture 9 on each); no state frame
    use: Global navigation outline action (a) beside the primary action at home::[data-omd-capture="9"], 82 x 36
  header-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 0px
    padding: 8px 14px
    height: 36px
    typography: 14px / 500 / 20px Noto Sans
    states: rest on eight menu links (capture 1-8) on all six capture records; no link records a different value and no state frame exists
    use: 'Global navigation menu link (a) at home::[data-omd-capture="1"]; the label is the a itself, while its li records the inherited #000000 14px / 400 text and is not read as the label'
  landing-white-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#041911'
    rounded: 6px
    padding: 12px 30px
    height: 44px
    typography: 15px / 500 / 20px Noto Sans
    states: rest on two links on the landing record (capture 19, 20; surface-2 repeats them); no state frame
    use: White landing action (a) at home::[data-omd-capture="19"], 115 x 44
  feature-floating-nav-button:
    type: button
    backgroundColor: transparent
    rounded: 10px
    padding: 12px
    size: 105px x 105px
    states: rest on five buttons on the collaboration page (capture 11-15) and four on the member page (capture 11-14); no state frame
    use: 'Floating feature-navigation item (div, role button) at surface-3::[data-omd-capture="11"], set in a white bar (div.floatingNavButtonContainer: bg #ffffff, padding 0px 120px; inner gap 8px); its #000000 16px / 400 / 16px equals the page body text, so no label style is claimed'
  security-accordion-button:
    type: button
    backgroundColor: transparent
    textColor: '#a2a2a2'
    rounded: 0px
    padding: 16px 0px
    height: 62px
    typography: 20px / 700 / 30px Noto Sans
    states: 'rest on eight buttons in two groups (capture 12-15, 17-20); the first button of each group (capture 11, 16) records fg #00c473, 32px / 700 / 46px and padding 0px 0px 16px and is the only one followed by a captured description paragraph; the bundle records no aria-expanded or aria-selected on these buttons, so that variant is described, not declared as a state; no state frame'
    use: Security-page accordion button (button.Security_accordionButton__2zHEj) at surface-5::[data-omd-capture="12"], 460 x 62
  ai-faq-question-button:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 0px
    padding: 24px 0px
    height: 76px
    typography: 20px / 400 / 28px Noto Sans
    states: rest on five question buttons (capture 11-15); capture 11 carries an extra class but records the same values, so no variant is declared; no state frame
    use: JANDI AI page FAQ question button at surface-6::[data-omd-capture="12"], each in a 1200 x 76 li
  bottom-banner-pill-link:
    type: button
    textColor: '#041911'
    rounded: 50px
    padding: 12px 30px
    height: 44px
    typography: 15px / 500 / 20px Noto Sans
    states: rest on two links on the security page (capture 25, 26) and two on the AI page (capture 16, 17); no state frame
    use: Bottom-banner pill link (a.JndLink_green__3tVcD) at surface-5::[data-omd-capture="25"], 115 x 44; its background-color computes transparent and background-image is not among the captured properties, so no fill is claimed
  footer-sitemap-link:
    type: listItem
    textColor: '#ffffff'
    padding: 8px 0px
    height: 36px
    typography: 13px / 700 / 20px Noto Sans
    states: rest on 21 links (capture 21-41); no state frame
    use: 'Footer sitemap link: the label a at home::[data-omd-capture="22"] sits in a 120 x 36 li with 8px 0px padding; the footer background is not among the captured elements'
  footer-info-toggle:
    type: button
    backgroundColor: transparent
    textColor: '#a2a2a2'
    rounded: 0px
    padding: 5px 0px
    height: 36px
    typography: 14px / 400 / 26px Noto Sans
    states: rest on one button per capture record (home and surface-2 capture 43, surface-3 40, surface-4 39, surface-5 49, surface-6 40); no state frame
    use: 'Footer text button at home::[data-omd-capture="43"], 83 x 36, beside the #a2a2a2 13px / 400 / 20px company-information lines'
  ai-partner-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#333333'
    rounded: 16px
    padding: 8px 16px 24px
    size: 382px x 369px
    typography: 16px / 400 / 30px Noto Sans
    states: three cards captured at rest; no state frame
    use: 'JANDI AI partner card (li.JandiAi_aiPartnerCardItem__15AOx, 16px radius, 382 x 369): a 382 x 210 image block over a content block (div.JandiAi_aiPartnerCardContents__3H6Wk: bg #ffffff, padding 8px 16px 24px) holding a logo and a #333333 16px / 400 / 30px description (p)'
fonts:
  roles:
    ui: Noto Sans
---

# JANDI — Design Reference

> **A Korean collaboration platform whose public expression is direct, green-led, and operational.**

## Overview

### Visual Theme & Atmosphere

JANDI (잔디) is Toss Lab’s Korean business-collaboration service, introduced in 2015 and now presented by the company as an enterprise platform that connects work communication, AI-assisted collaboration, and project management. Its public marketing does not imitate an internal dashboard: it uses a white field, black Korean type hierarchy, and a consistent green conversion action to make a broad B2B offer immediately legible. The captured landing, collaboration, member-management, security, and AI pages keep that visual language coherent while giving each subject its own explanatory cards and calls to action.

The product is evolving beyond messaging. Toss Lab’s June 2026 Project 2.0 announcement describes project management integrated with the messenger, including a contributor-centred work view and a manager dashboard. That is first-party product context, not authorization to treat the public-marketing measurements below as an authenticated-product design system. The values in this reference remain scoped to the six supplied marketing capture records, which represent five distinct URLs.

### Primary tasks

- Message a team and run its projects in the same place
- Check the work assigned to you and your load for the week
- Follow project progress and who is working on what
- Compare the collaboration, security and AI pages before adopting the tool

### Iconography

The capture has declared-only `icomoon` and `swiper-icons` font assets but no visible-use match, named icon catalogue, sizing rule, or product-icon evidence. No icon token is promoted.

### Imagery & Illustration

The public marketing pages use product imagery and explanatory cards, but the supplied DOM/style evidence does not establish an image ratio, crop rule, overlay system, or reusable screenshot frame. Do not derive an illustration system from those visuals.

### Brand Narrative

Toss Lab’s official company history dates the JANDI launch to 2015. The service is presented as a collaboration platform for business communication and, in its current direction, AI-assisted and project-based work.

In June 2026, Toss Lab announced JANDI Project 2.0, a project-management experience integrated with messaging and redesigned around visibility for both individual contributors and team managers. This reference keeps that product evolution separate from the measured public-marketing styles.

### Principles

1. **Use green as the public action signal.** The capture supports `#00c473` on the repeated global public navigation action, not a universal product semantic system.
2. **Let large Korean headlines carry marketing hierarchy.** The measured 56px, 42px, 40px, and 32px treatments belong to the captured public pages only.
3. **Keep explanatory cards scoped to their feature surface.** The observed security and AI environment cards are static marketing cards, not generic product-card variants.
4. **Keep evidence domains separate.** Marketing, documentation chrome, font licensing, corporate context, and the unobserved authenticated application have different evidentiary roles.

### Personas

First-party material describes the service in terms of teams and collaboration work, and the Project 2.0 release specifically distinguishes individual contributors from team managers. Those are the only stakeholder groups retained here:

- **Individual contributors:** view their assigned work and weekly workload in the announced project experience.
- **Team managers:** use the announced dashboard to see project progress and member work status.
- **Teams:** use messaging and project work as connected collaboration contexts.

No named or demographic personas are invented.

## Colors

### Color & Typography

#### Color tokens

- `#00c473` — observed fill and border of the global public navigation action on all six capture records.
- `#ffffff` — observed public canvas, on-green text, white landing action, and the scoped security/AI environment-card surface.
- `#000000` — observed body and heading ink on the public pages.
- `#333333` — observed supporting text on public feature, security, and AI content.
- `#a2a2a2` — observed muted public text and static accordion-button presentation.
- `#041911` — observed text on the white landing and pill-link actions.
- Component-local, recorded in §4 and not promoted to a palette role: `#dddddd`, the 1px border of the global outline action.

These are public-surface roles only. Neither the documentation centre nor the announced authenticated project experience contributes a semantic application palette.

#### Typography evidence classes

- **Live computed public-web use:** visible text across all six supplied records resolves to `"Noto Sans", sans-serif`. The supplied FontFaceSet record classifies `Noto Sans` as loaded/high confidence, with 676 observed uses across headings, body, buttons, cards, list items, and text. Seven JANDI-CDN OTF URLs corroborate that computed family. The machine UI-family token therefore names only `Noto Sans`.
- **Official font and licence context:** Noto’s official documentation describes Noto fonts as licensed under the SIL Open Font License. This explains the font’s licence boundary; it does not independently establish a JANDI product-font claim.
- **Declared-only assets:** `icomoon` and `swiper-icons` have `@font-face` declarations but zero observed visible uses. They remain declared icon-font assets, not JANDI text families or available specimens.
- **Measured public hierarchy:** `home` supplies the 56px/700/80px hero and 42px/700/60px feature samples; the feature routes supply 56px/700/66px page-heading samples. These are observed public treatments, not a full product type scale.
- **Documentation chrome:** the support centre is a separate first-party documentation domain. Its theme article is recorded for domain classification only and supplies no visual token or component claim.

## Layout

### Layout & Grid

- **Landing hierarchy:** `home` records a 56px/700/80px hero and 42px/700/60px feature headings. These are desktop public-marketing samples, not a responsive type contract.
- **Feature-page hierarchy:** the collaboration, member, security, and AI routes record 56px/700/66px page headings; their observed secondary headings vary by page (40px or 32px).
- **Action spacing:** the repeated global green action uses 7px 14px internal padding. The white landing action uses 12px 30px. These are individual component measurements, not a general spacing scale.
- **Boundary:** the supplied evidence establishes neither a page container maximum nor a breakpoint, logged-in application shell, or universal grid.

## Motion & Easing

### Motion

No duration, easing, transition, hover result, or other motion behavior was recorded. Motion is intentionally undocumented.

No motion token, easing curve, duration, or reduced-motion behavior was captured. Preserve this boundary rather than inventing a motion system.

## Components

All entries below retain the supplied surface and selector provenance. They are static computed-style observations, not a reusable authenticated-product library. The bundle holds no `::state-*` frame for any element on any of the six records, so hover, pressed, and focus values are not declared; disabled, error, dialog, menu, and responsive variants were not observed. Corrected 2026-09-30: the July text gave the zero interaction count as the reason; that count covers menu, dialog, and tab expansions only.

### Global navigation action

**Primary default**
- Background: `#00c473`
- Text: `#ffffff`
- Border: `1px solid #00c473`
- Radius: `6px`
- Padding: `7px 14px`
- Font: `14px / 500 / Noto Sans`
- Use: repeated public global navigation action (`header-primary-action`, 69px × 36px); evidence `home::[data-omd-capture="10"]` and the corresponding selector on `surface-2` through `surface-6`.

### Landing action

**White default**
- Background: `#ffffff`
- Text: `#041911`
- Radius: `6px`
- Padding: `12px 30px`
- Font: `15px / 500 / Noto Sans`
- Use: static white landing action on the duplicated landing records (`landing-white-action`, 115px × 44px, line height 20px); evidence `home::[data-omd-capture="19"]`, `"20"` and `surface-2::[data-omd-capture="19"]`.

### Feature floating navigation

**Static default**
- Background: transparent, inside a white bar (`div.floatingNavButtonContainer`: `#ffffff`, padding `0px 120px`; inner gap `8px`)
- Radius: `10px`
- Padding: `12px`
- Size: 105px × 105px
- Label: not claimed. Corrected 2026-09-30: the July entry gave `#000000` text and `16px / 400 / Noto Sans` type; those equal the page body's inherited text (the body records `#000000`, 16px / 400 / 16px), so they describe the item as a container, and its label was not sampled.
- Use: static `role="button"` floating feature-navigation item (`feature-floating-nav-button`); evidence `surface-3::[data-omd-capture="11"]` through `"15"` (`Collaboration_icon1__cFiWm` onward) and `surface-4::[data-omd-capture="11"]` through `"14"` (`Member_icon1__MIU61` onward).

### Security environment card

**Static default**
- Background: `#ffffff`
- Radius: `16px`
- Padding: `40px 32px 54px`
- Shadow: `rgba(0, 18, 47, 0.08) 0px 14px 24px 0px`
- Size: 379px × 334px (three cards)
- Text (children): a `#333333` 24px / 700 / 34px title (`h3`) and a `#333333` 16px / 400 / 24px description (`p`), under an empty 40px icon holder (`strong`).
- Use: static security-environment card; evidence `surface-5::li.Security_securityEnvironmentList__3CRP0`.
- Corrected 2026-09-30: the July entry gave the card `#000000` text and `16px / 400` type, the page body's inherited values on the `li` container (line height 16px); the text sits in the children above. It also left out the card's measured shadow, which the frontmatter now carries on this card only.

### AI environment card

**Static default**
- Background: `#ffffff`
- Radius: `16px`
- Padding: `40px 32px 54px`
- Shadow: `rgba(0, 18, 47, 0.16) 0px 14px 24px 0px`, twice the security card's shadow alpha
- Size: 276px × 358px (four cards)
- Text (children): a `#333333` 40px / 700 / 42px label (`strong`), a 24px / 700 / 34px title (`h3`) and a 16px / 400 / 24px description (`p`), all `#333333`.
- Use: static AI-environment card; evidence `surface-6::li.JandiAi_aiEnvironmentList__2ng2t`.
- Corrected 2026-09-30: as with the security card, the July `#000000` / `16px / 400` values were the container's inherited text, and the measured shadow was left out.

### Global navigation outline action

**Default** (`header-outline-action`)
- Background: transparent
- Text: `#000000`
- Border: 1px `#dddddd`
- Radius: `6px`
- Padding: `7px 14px`
- Size: 82px × 36px
- Font: `14px / 500 / 20px Noto Sans`
- Use: the outline action beside the green primary action; `home::[data-omd-capture="9"]`, with the same values on all six records.

### Global navigation menu link

**Default** (`header-nav-link`)
- Text: `#333333`
- Padding: `8px 14px`
- Height: 36px
- Font: `14px / 500 / 20px Noto Sans`
- Use: eight menu links, `home::[data-omd-capture="1"]` through `"8"`, identical on all six records. The label is the link itself; its `li` records the inherited `#000000` 14px / 400 text and is not read as the label.

### Security accordion button

**Default** (`security-accordion-button`)
- Background: transparent
- Text: `#a2a2a2`
- Padding: `16px 0px`
- Size: 460px × 62px
- Font: `20px / 700 / 30px Noto Sans`
- Variant: the first button of each of the two groups (`surface-5::[data-omd-capture="11"]`, `"16"`) records `#00c473`, 32px / 700 / 46px and padding `0px 0px 16px`, and it is the only button followed by a captured description paragraph (`#333333` 16px / 400 / 30px). The bundle records no `aria-expanded` or `aria-selected` on these buttons, so the variant is described here, not declared as a state.
- Use: `surface-5::[data-omd-capture="12"]` through `"15"` and `"17"` through `"20"` (`button.Security_accordionButton__2zHEj`).

### JANDI AI FAQ question

**Default** (`ai-faq-question-button`)
- Background: transparent
- Text: `#333333`
- Padding: `24px 0px`
- Height: 76px, each inside a 1200px × 76px `li`
- Font: `20px / 400 / 28px Noto Sans`
- Use: five question buttons, `surface-6::[data-omd-capture="11"]` through `"15"`. The first carries an extra class (`JandiAi_faqActive__vQl-v`) but records the same values, so no variant is declared.

### JANDI AI partner card

**Static default** (`ai-partner-card`)
- Card: a 382px × 369px `li` with a 16px radius; a 382px × 210px image block sits above the content block.
- Content block: background `#ffffff`, padding `8px 16px 24px`, holding a logo and a `#333333` 16px / 400 / 30px description (`p`).
- Use: three cards, `surface-6::li.JandiAi_aiPartnerCardItem__15AOx`.

### Bottom-banner pill link

**Default** (`bottom-banner-pill-link`)
- Text: `#041911`
- Radius: `50px`
- Padding: `12px 30px`
- Size: 115px × 44px (132px wide for a longer label)
- Font: `15px / 500 / 20px Noto Sans`
- Fill: not claimed. The background colour computes transparent, and background-image is not among the captured properties; class names are not read as colours.
- Use: `surface-5::[data-omd-capture="25"]`, `"26"` and `surface-6::[data-omd-capture="16"]`, `"17"`. On the collaboration page, `a.JndLink_linkBtn__2MwSk` (`surface-3` `"16"`, `"17"`) has the same text, padding and size with a 0px radius.

### Footer

**Sitemap link** (`footer-sitemap-link`): a `#ffffff` 13px / 700 / 20px label in a 120px × 36px `li` with `8px 0px` padding; 21 links, `home::[data-omd-capture="21"]` through `"41"`. The footer background is not among the captured elements.

**Text button** (`footer-info-toggle`): transparent, `#a2a2a2`, padding `5px 0px`, 83px × 36px, 14px / 400 / 26px; one per record (`home::[data-omd-capture="43"]`), beside `#a2a2a2` 13px / 400 / 20px company-information lines.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.jandi.com/landing/kr`, `https://www.jandi.com/landing/kr/features/collaboration`, `https://www.jandi.com/landing/kr/features/member`, `https://www.jandi.com/landing/kr/security`, and `https://www.jandi.com/landing/kr/jandi-ai` (public marketing); `https://finalpick.jandi.com/landing/en/company` and `https://blog.jandi.com/ko/2026/06/08/pr-project-2-0/` (first-party context); `https://support.jandi.com/en/articles/Changing-themes-bf4edc58` (documentation-domain classification only); `https://notofonts.github.io/noto-docs/website/use/` (Noto licence boundary only)
**Tier 2 sources:** `https://getdesign.md/jandi` (attempted; built-in-web open returned an internal error/no usable JANDI record), `https://styles.refero.design/?q=jandi` (attempted; built-in-web open returned an internal error/no usable JANDI record), built-in web search for both catalogs (no usable JANDI design record returned)
**Conflicts unresolved:** none

The previous legacy material asserted a `/ko/pricing` surface, pricing-card variants, interaction states, generic inputs, and a universal card-shadow system. None occurs in the supplied 2026-07-13 evidence, so those claims are removed rather than substituted. Corrected 2026-09-30: no universal shadow system occurs, but each environment card records its own shadow, which is now carried on those two cards only.

### States

No empty, loading, error, success, disabled, focus, or validation states were captured, and the bundle holds no `::state-*` frame for any element. The component appearances in §4 are static public-page observations, not behavioral state specifications.

## Do's and Don'ts

### Do

- Use the loaded `Noto Sans` family only for the captured public-surface type reference.
- Scope `#00c473` to the observed repeated public action.
- Keep each documented card tied to its security or AI marketing surface and selector.
- Preserve selector and surface provenance when using the components in §4.

### Don't

- Present declared-only `icomoon` or `swiper-icons` as a JANDI UI text family.
- Generalize public-marketing measurements into an authenticated product-app system.
- Invent hover, pressed, focus, disabled, error, menu, dialog, or responsive variants.
- Reintroduce the legacy inferred pricing cards, input rules, or universal shadow system.

---

**Verified:** 2026-07-13
**Pipeline:** omd:add-reference UPDATE (supplied-evidence 3-tier reconcile)
**Catalog position:** KR · productivity · collaboration platform

## Voice & Tone

### Content & Voice

JANDI’s first-party company and product material frames the service as practical collaboration infrastructure: messages, projects, work visibility, and AI-assisted work support. The public voice is correspondingly concise, explanatory, and operational. That observation does not authorize invented authenticated-product microcopy.

**Voice adjectives:** practical · clear · collaboration-oriented

| Do | Don't |
|---|---|
| State the work problem before describing a capability. | Promise transformation without explaining the collaboration task. |
| Connect messaging, project work, and visibility in plain language. | Treat public marketing tone as a specification for every authenticated UI state. |
| Keep feature and inquiry language direct. | Infer urgency, error, or success copy that was not observed. |

## Governance

### Accessibility

- The repeated primary public action pairs `#ffffff` text with `#00c473`; the white landing action pairs `#041911` with `#ffffff`.
- The collector did not record focus-visible, keyboard, disabled, form-error, or screen-reader behavior. An implementation should add an accessible focus indicator rather than infer one from static borders or radii.
- `Noto Sans` is backed by computed family, FontFaceSet, and JANDI-CDN source evidence. Declared-only icon fonts must not be substituted for it.

### Known Gaps

- **Contrast, `header-primary-action`.** Text `#ffffff` on `#00c473` measures 2.30:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-outline-action`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-nav-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `ai-faq-question-button`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
