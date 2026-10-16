---
name: 원스토어
colors:
  brand-surface: '#2a1f60'
  canvas: '#ffffff'
  foreground: '#000000'
  secondary-foreground: '#454545'
typography:
  body:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.46
    use: Storefront body sample; computed system stack is not a brand font
rounded:
  square: 0px
components:
  game-primary-button:
    type: button
    backgroundColor: '#28245b'
    textColor: '#ffffff'
    border: '1px #28245b'
    rounded: 23px
    padding: 11px 28px
    height: 45px
    typography: 16px / 400 / 21px
    states: default on one button; the bundle holds no state frame
    use: Game-catalog filled pill button (a.btn.btn-primary) at surface-2::[data-omd-capture="1"], 140 x 45, paired with game-light-button in one button group; the computed family is the system stack, so no family is claimed
    pressed: no visible change (measured 2026-10-16) (:hover + :active)
    focus: no visible change (measured 2026-10-16) on :focus-visible
  game-light-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#3e3877'
    border: '1px #acaac4'
    rounded: 23px
    padding: 11px 28px
    height: 45px
    typography: 16px / 400 / 21px
    states: default on one button; the bundle holds no state frame
    use: Game-catalog outline pill button (a.btn.btn-light) at surface-2::[data-omd-capture="0"], 140 x 45, first in the same button group; system-stack family, not claimed
  app-detail-link-button:
    type: button
    backgroundColor: transparent
    textColor: '#3d3a73'
    padding: 13.5px 16px
    height: 48px
    typography: 15px / 400 / 21px
    states: default on two links (capture 1, 2); the bundle holds no state frame
    use: App-detail section text button (a.btn.btn-link.sm) at surface-4::[data-omd-capture="1"], 71 x 48, beside the description and update-history headings
  app-detail-info-link:
    type: button
    backgroundColor: transparent
    textColor: '#4b469c'
    padding: 14.5px 0px
    height: 48px
    typography: 13px / 400 / 19px
    states: default on one link; the bundle holds no state frame
    use: App-detail additional-information link (a) at surface-4::[data-omd-capture="3"], 60 x 48
  home-notice-link:
    type: button
    backgroundColor: '#f7f7f8'
    rounded: 16px
    padding: 21.5px 0px
    size: 1100px x 64px
    states: default on one link; the bundle holds no state frame
    use: Storefront home notice bar (a.notice-link) at home::[data-omd-capture="5"]; its own text colour and type equal the page body (#000000, 15px / 400 / 21.9px), so no label style is claimed
  home-filled-link:
    type: button
    backgroundColor: rgba(42, 31, 96, 0.96)
    padding: 19px 0px
    size: 250px x 60px
    states: default on two links (capture 3, 4); the bundle holds no state frame
    use: Storefront home filled link (a) at home::[data-omd-capture="3"] and "4"; it has no text content, so no label style is claimed
  home-footer-link:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    padding: 1.5px 0px
    height: 20px
    typography: 15px / 400 / 21px
    states: default on six footer links (capture 6-9, 18, 20); the bundle holds no state frame
    use: Storefront footer link (a) at home::[data-omd-capture="6"]; the link with class point (capture 19) records 15px / 700 / 21px
  home-footer-icon-link:
    type: button
    backgroundColor: transparent
    padding: 4px
    size: 48px x 48px
    states: default on two links (capture 12, 13); the bundle holds no state frame
    use: Storefront footer icon link (a) at home::[data-omd-capture="12"]; its own type equals the page body, so no label style is claimed
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of 원스토어

## Overview

### Visual Theme & Atmosphere

원스토어 is a Korean mobile-content marketplace spanning games, apps, and story content. It was launched in 2016 by combining the three mobile-carrier app markets with Naver App Store, after the T Store business moved from SK Planet to One store Co., Ltd. Its official company narrative calls for a platform that is closer, more open, and more fun, and its current public messaging centres on “쏠쏠하게 앱하다” and enjoyable game life. The supplied capture shows a deliberately split public ecosystem rather than one universal UI: the consumer storefront is a mostly white, black-text surface with a sparse dark-purple background occurrence, while the separately captured developer portal uses conventional square system controls. The official corporate brand gallery, free mobile-font program, developer-support material, and storefront are related but distinct domains; this reference keeps their evidence boundaries intact. [Company history](https://www.onestorecorp.com/about/corp/) · [Customer commitment](https://onestorecorp.com/sv/ccm/)

### Primary tasks

- Find a game, app, or story title in one marketplace
- Open an app's detail page to read about it
- Sign in to the One Store developer portal

### Brand Narrative

One Store traces its operating history to the 2016 transfer of T Store from SK Planet, its company establishment, and the launch that combined the three mobile-carrier app markets with Naver App Store. That origin explains the platform’s explicit concern with both consumers and content partners rather than a single retail category. The company’s current description centres games, apps, and story content, seeking a more open and enjoyable platform experience. [Company history](https://www.onestorecorp.com/about/corp/)

The current story also has an ecosystem dimension. The company records a 2024 investment/cooperation arrangement with Digital Turbine for overseas expansion, while its developer-support program describes long-running support for mobile-game developers and creator pathways. These are corporate and partner-program facts, not evidence that the public storefront or developer portal shares a single component system. [Company history](https://www.onestorecorp.com/about/corp/) · [Developer support](https://onestorecorp.com/sv/fordev/)

In 2021, the company made three mobile fonts publicly available and described them as suitable for commercial use. That release expands its brand-asset footprint, but no supplied loaded-font evidence connects the fonts to the captured consumer storefront. [Font release](https://onestorecorp.com/news/presskit/2021/2021-05-17.html)

### Principles

1. **Offer compelling choices for creators and consumers.** The official mission joins both stakeholder groups in one digital-content platform. *UI implication:* make a verified choice or benefit legible without inventing a checkout, ranking, or recommendation rule.
2. **Keep mobile content enjoyable.** The company describes a goal of more enjoyable mobile and game life. *UI implication:* use a clear, light hierarchy where actual content or benefit evidence exists; do not add decorative game tropes as a default.
3. **Support the ecosystem.** Official developer-support material describes developer, game-industry, and creator programs. *UI implication:* distinguish developer-facing controls from consumer-storefront patterns instead of collapsing them into one UI kit.
4. **Put customers first.** The company’s customer commitment calls for understanding what customers want and acting on feedback. *UI implication:* communicate confirmed outcomes and boundaries plainly; do not hide missing state evidence behind generic reassurance.

### Personas

*The company names creators, consumers, and developers in first-party material, but no first-party persona research or demographic segmentation was collected. The archetypes below are stakeholder boundaries, not fictional user profiles.*

- **Consumer of mobile content:** a service stakeholder named in the mission. Specific browsing, payment, and retention behaviour is not asserted.
- **Creator or developer:** a stakeholder named in the mission and developer-support material. Specific tool needs and workflow stages are not asserted.

## Colors

### Selector-backed surface values

- **Brand-surface candidate** (`#2A1F60`): observed twice as a background on the captured storefront home route. It is retained as a narrow surface observation and catalog identity color, not as a universal action color. Noted 2026-09-30: both backgrounds are the filled links `home::[data-omd-capture="3"]` and `"4"` (§4), whose computed value is `rgba(42, 31, 96, 0.96)`; the bundle's colour census drops the alpha to `#2a1f60`, which is the value this token carries.
- **Canvas** (`#FFFFFF`): observed across all five captured surfaces.
- **Foreground** (`#000000`): the dominant observed text and border value across all five captured surfaces.
- **Storefront secondary text** (`#454545`): repeated on home-route list items.
- **Developer portal** (`dev.onestore.net`): its July capture shows `#EFEFEF` and `#767676`, the browser's default button face and text-field border, on a page whose body is Times 16px. The portal's stylesheet evidently did not apply, so neither value is promoted (withdrawn 2026-09-30, §4).
- **Component-local colours** recorded in §4, not promoted to palette roles: `#28245b` (game-catalog filled button fill and border), `#3e3877` with a 1px `#acaac4` border (game-catalog outline button), `#3d3a73` and `#4b469c` (app-detail text links), and `#f7f7f8` (home notice bar).

No semantic success, error, selected, hover, or pressed color is specified, and the storefront button fills in §4 stay component-local. `#0000EE` appears on the developer portal, but the supplied evidence does not establish it as a One Store brand value, so it is not promoted.

## Typography

### Evidence classes

- **Live computed storefront use:** the main storefront’s visible samples resolve to `helvetica, "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", Arial, sans-serif`. The collector classifies this as a high-confidence operating-system stack; no loaded FontFace/source supports a One Store-owned UI family. The measured 15px / 400 / 21.9px body metrics remain useful, but the stack is not emitted as a brand font token.
- **Live computed developer-product use:** the developer portal samples use `Arial` at 13.3333px / 400, the browser's default form-control font on a page that rendered unstyled (§4); it is not a product font. The portal’s `geistSans`, `geistMono`, and `notoSansKr` faces are declared-only in the supplied evidence; none had visible usage and none is promoted.
- **Official distributed brand assets:** One Store publicly distributes Mobile Gothic Body, Mobile Gothic Title, and Mobile Gothic POP. The company describes the Body face as mobile-optimised and modern/comfortable, the Title face as stable and firm, and POP as a lively handwritten face. These are useful font assets, not evidence that the captured storefront loads them. [Official font page](https://www.onestorecorp.com/sv/fordev_font/)
- **Official licence/use boundary:** the company’s launch announcement says the three fonts are free and commercially usable. That establishes distribution/use terms, not consumer-storefront deployment. [Font announcement](https://onestorecorp.com/news/presskit/2021/2021-05-17.html)
- **Unresolved:** `Times` appears in sparse developer-portal samples without a matching loaded FontFace or official product-use evidence; it is omitted.

### Measured hierarchy

| Role | Size | Weight | Line height | Evidence boundary |
|------|------|--------|-------------|-------------------|
| Storefront body | 15px | 400 | 21.9px | Home-route computed system stack |
| Storefront secondary list text | 14px | 400 | 20px | Home-route list items |

## Layout

The supplied bundle covers five 1440×900 routes but does not establish a single cross-domain layout system. On the developer portal, the observed button is 180×50px and the input is 153×21px; these are individual control measurements, not a consumer-marketplace grid. The storefront’s retained measurements are its system-stack body text, list-item geometry, and the buttons and links in §4 (a 140px × 45px pill pair on the game catalog, 48px-high text links on the app detail page, a 1100px × 64px notice bar on the home route). No product-card grid, breakpoint, sticky header, or responsive rule is claimed.

### Responsive Behavior

All supplied surfaces were captured at 1440×900. No mobile viewport, breakpoint, touch-target rule, responsive grid, or alternate navigation state is evidenced. The mobile hostname in the storefront URL is not itself evidence for a responsive implementation rule.

## Elevation & Depth

The retained button and input samples have `box-shadow: none`. No elevated card, panel, menu, toast, dialog, or overlay value was backed by the supplied selector/state evidence, so no elevation token is included.

## Motion & Easing

No transition duration, easing curve, animation, expanded state, or interaction sequence was captured. Do not assign motion tokens or infer a motion style from static illustrations, corporate videos, or generic platform behaviour.

## Components

### Developer portal (withdrawn 2026-09-30)

The July reference listed a general button and a login input from `dev.onestore.net` as components. Both are withdrawn: the capture rendered that page without its stylesheet, so their values are the browser's defaults rather than One Store's (see the paragraph below). They are kept here only as the July observation.

The bundle holds no hover, pressed, or focus frame for any One Store element, so no state value is recorded. Corrected 2026-09-30: the July text gave the zero interaction count as the reason; that count covers expansions, not pointer states.

The developer-portal capture renders much of the page in browser defaults: the body is Times 16px with an 8px margin, its links are the browser's `#0000ee`, and its `h3` headings are 18.72px / 700. The login input's values (2px `#767676` border, `1px 2px` padding, 153px × 21px, 13.3333px Arial) are the browser's default text field, and the general button's `#EFEFEF` fill and 13.3333px Arial are the browser's default button face and font; only its 2px black border, `0px 20px` padding and 180px × 50px size differ from those defaults. Whether the portal's own stylesheet set any of these values is unresolved. The two controls, and the `developer-surface`, `developer-border`, `developer-control` and developer spacing tokens drawn from them, were withdrawn from the machine tokens on 2026-09-30 for this reason.

### Storefront buttons and links

**Game-catalog pill pair**: the filled button (`game-primary-button`, `a.btn.btn-primary`, `surface-2::[data-omd-capture="1"]`) records background `#28245b`, text `#ffffff` and border 1px `#28245b`; the outline button beside it (`game-light-button`, `a.btn.btn-light`, `"0"`) records background `#ffffff`, text `#3e3877` and border 1px `#acaac4`. Both have a `23px` radius, `11px 28px` padding, 140px × 45px and `16px / 400 / 21px` type on the system stack, in one button group.

**App-detail text buttons**: the section link (`app-detail-link-button`, `a.btn.btn-link.sm`, `surface-4::[data-omd-capture="1"]` and `"2"`) records text `#3d3a73`, `13.5px 16px` padding, 71px × 48px and `15px / 400 / 21px`; the additional-information link (`app-detail-info-link`, `"3"`) records text `#4b469c`, `14.5px 0px` padding, 60px × 48px and `13px / 400 / 19px`.

**Home notice bar** (`home-notice-link`): background `#f7f7f8`, `16px` radius, `21.5px 0px` padding, 1100px × 64px; `home::[data-omd-capture="5"]` (`a.notice-link`). Its own text equals the page body (`#000000`, 15px / 400 / 21.9px), so no label style is claimed.

**Home filled link** (`home-filled-link`): background `rgba(42, 31, 96, 0.96)`, `19px 0px` padding, 250px × 60px; `home::[data-omd-capture="3"]` and `"4"`. It holds no text, so no label style is claimed.

**Footer links**: the text links (`home-footer-link`, `home::[data-omd-capture="6"]` to `"9"`, `"18"`, `"20"`) record `#000000`, `1.5px 0px` padding, 20px height and `15px / 400 / 21px`; the link with class `point` (`"19"`) records `15px / 700 / 21px`. The icon links (`home-footer-icon-link`, `"12"`, `"13"`) are 48px × 48px with `4px` padding; their own type equals the page body, so no label style is claimed.

No storefront component above has a state value. Storefront links keep their element names (`a`) in each use field; the renderer's `button` type is only their category.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://m.onestore.co.kr/; https://m.onestore.co.kr/v2/ko-kr/game; https://m.onestore.co.kr/v2/ko-kr/about/oneplay; https://m.onestore.co.kr/v2/ko-kr/app/0000117501/about; https://dev.onestore.net/dev; https://www.onestorecorp.com/about/corp/; https://onestorecorp.com/sv/ccm/; https://www.onestorecorp.com/sv/fordev_font/
**Tier 2 sources:** https://getdesign.md/onestore (attempted; endpoint returned an internal error/no usable record); https://styles.refero.design/?q=onestore (attempted; endpoint returned an internal error/no usable record)
**Conflicts unresolved:** none

### States

No state-specific UI was observed: the bundle holds no state frame (`::state-*`) and no interaction record (`observedStates: 0`, `interactionCount: 0`). The following state categories are intentionally unspecified until a relevant product-surface selector/value pair is captured.

| Category | Evidence status |
|----------|-----------------|
| Empty | No observed state |
| Loading | No observed state |
| Error | No observed state |
| Success | No observed state |
| Skeleton | No observed state |
| Disabled | No observed state |

Live state probe, 2026-10-16 (`https://m.onestore.co.kr/v2/ko-kr/game`), `game-primary-button`: pressed — no visible change (measured 2026-10-16); focus — no visible change (measured 2026-10-16).

## Do's and Don'ts

### Do

- Keep consumer storefront, developer portal, corporate brand assets, and font distribution as separately evidenced domains.
- Treat the developer button and input as observations of a largely browser-default render (§4), not as a One Store control style.
- Treat One Store Mobile Gothic as an official distributable brand asset, not a verified storefront webfont.
- Preserve the measured storefront body metrics without silently substituting a claimed brand typeface.

### Don't

- Do not turn the narrow `#2A1F60` background observation into a universal CTA or product palette.
- Do not use `geistSans`, `geistMono`, `notoSansKr`, Times, Arial, Helvetica, or a system fallback as though it were an observed One Store brand UI font.
- Do not infer components from generic marketplace conventions; §4 records only measured storefront links and buttons, each with its element named.
- Do not add hover, focus, pressed, disabled, error, selected, responsive, or motion values from this capture.

## Voice & Tone

The official corporate voice is open, benefit-aware, and playfully mobile-native. Its public language frames the service around more enjoyable game life and a platform that is closer, more open, and more fun, while the customer-commitment page keeps the decision frame on compelling choices for creators and consumers. This is corporate and service-principle context, not evidence for unobserved store labels or flows. [Company introduction](https://www.onestorecorp.com/about/corp/) · [Customer commitment](https://onestorecorp.com/sv/ccm/)

| Do | Don't |
|----|-------|
| Describe a concrete benefit or choice in plain language. | Attribute unobserved purchase, error, or account copy to the storefront. |
| Keep creator and consumer value in the same frame where the source does. | Treat corporate slogan language as a UI token. |
| Use playful energy only when it supports a real mobile-content context. | Invent a youth audience, demographic, or game-specific tone rule. |

**Voice samples.**

- “더 쏠쏠하게 앱하다” — current corporate/service slogan. <!-- verified: onestorecorp.com/about/corp 2026-07-13 -->
- “슬기로운 게임생활을 만듭니다” — official company framing. <!-- verified: onestorecorp.com/about/corp 2026-07-13 -->
- “To provide compelling choices to make creators and consumers happier on our digital content platform” — official mission statement. <!-- verified: onestorecorp.com/sv/ccm 2026-07-13 -->

## Agent Prompt Guide

“Treat One Store as a Korean mobile-content marketplace with separate storefront, developer, corporate-brand, and font-asset evidence. For storefront actions, use the measured game-catalog pill pair: #28245b fill with white text, or white with #3e3877 text and a 1px #acaac4 border, both 23px radius, 11px 28px padding and 45px high. Do not reuse the developer-portal controls as a One Store style; that capture is largely browser-default. Preserve the storefront’s white/black baseline and narrow #2A1F60 background observation. Do not synthesize a consumer card, brand webfont, interaction state, responsive pattern, or elevation system.”

## Governance

### Known Gaps

- **Contrast, `app-detail-link-button`.** Text `#3d3a73` on `#00000000` measures 2.05:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `app-detail-info-link`.** Text `#4b469c` on `#00000000` measures 2.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `home-footer-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
