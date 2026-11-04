---
name: BYD
colors:
  canvas: '#ffffff'
  surface-subtle: '#fbfbfb'
  action-ink: '#1a1d25'
  black: '#000000'
typography:
  navigation:
    fontSize: 13px
    fontWeight: 500
    lineHeight: 20px
    use: Header 直播 link and 预约试驾 button; live-loaded family, desktop CN homepage.
  action:
    fontSize: 16px
    fontWeight: 400
    use: Visible labels of the 48px 查看更多 and 进入王朝首页 action links.
  community-link:
    fontSize: 14px
    fontWeight: 400
    use: Visible div.button-text inside club-more; its outer anchor computes to 16px/400.
rounded:
  none: 0px
  action: 4px
spacing:
  gutter: 64
components:
  test-drive:
    type: button
    textColor: rgba(255, 255, 255, 0.85)
    border: 0.5px solid rgba(255, 255, 255, 0.55)
    rounded: 4px
    height: 33px
    padding: 6px 20px
    typography: 13px / 500
    hover: 'bg #ffffff; fg rgba(0, 0, 0, 0.95); border 0.5px solid #ffffff'
    pressed: 'bg #ffffff; fg rgba(0, 0, 0, 0.95); border 0.5px solid #ffffff'
    use: Header 预约试驾 button nested in a link to /cn/test-driver, on hero imagery. Rest background is transparent and omitted. Keyboard focus produced no change within the measured scope.
  live-more:
    type: button
    textColor: '#1a1d25'
    rounded: 4px
    height: 48px
    padding: 12px 36px
    typography: 16px / 400
    hover: '::before bg #1a1d25 and 1px solid #1a1d25 border; visible label fg #ffffff'
    pressed: '::before bg #1a1d25 and 1px solid #1a1d25 border; visible label fg #ffffff'
    use: '查看更多 link to /cn/live-list on #fbfbfb. Anchor background is transparent in every measured state. Its ::before supplies the rest 1px #000000 border and the hover/pressed fill. Browser auto focus ring is not a brand token.'
  live-nav:
    type: button
    textColor: rgba(255, 255, 255, 0.85)
    rounded: 0px
    height: 18px
    padding: 0px
    typography: 13px / 500
    hover: 'fg #ffffff; 26px by 1px white ::after underline scales from X=0 to X=1'
    pressed: 'fg #ffffff; 26px by 1px white ::after underline scales from X=0 to X=1'
    use: Header 直播 navigation link to /cn/live-list, transparent on hero imagery. Measured box 26px wide with 20px line-height. Browser auto focus ring is not a brand token.
  dynasty-entry:
    type: button
    textColor: '#1a1d25'
    rounded: 4px
    height: 48px
    padding: 12px 36px
    typography: 16px / 400
    hover: '::before bg #1a1d25 and 1px solid #1a1d25 border; visible label fg #ffffff'
    pressed: '::before bg #1a1d25 and 1px solid #1a1d25 border; visible label fg #ffffff'
    use: '进入王朝首页 link to /cn/dynasty-home on #ffffff, 168px wide. Transparent anchor background omitted; rest 1px #000000 border and hover/pressed fill are on ::before. Browser auto focus ring is not a brand token.'
  club-more:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 20px
    padding: 0px
    typography: 14px / 400
    hover: '108px by 1px #000000 ::after underline scales from X=0 to X=1'
    pressed: '108px by 1px #000000 ::after underline scales from X=0 to X=1'
    use: '了解更多信息 link to /cn/car-club on #ffffff, transparent background omitted. Visible label is 14px/400; outer 108px-wide anchor is 16px/400 and includes an arrow. Browser auto focus ring is not a brand token.'
fonts:
  roles:
    sans: PoppinsZN
---

# Design System Inspiration of BYD

## Overview

### Visual Theme & Atmosphere

BYD makes new-energy vehicles, with the Chinese passenger-car offering organised into the Dynasty (王朝) and Ocean (海洋) series and both hybrid and battery-electric technology routes. Its current corporate history dates its beginnings as a rechargeable-battery producer in Shenzhen to 18 November 1994 and its entry into the automotive industry to 2003. The automotive brand timeline records Dragon Face family design in 2017 and a new identity for the domestic passenger-car market in 2021. [Corporate history](https://www.bydglobal.com/cn/about.html), [automotive brand timeline](https://www.byd.com/cn/brand-center/industries-and-businesses).

Its official automotive design writing connects its vehicles to Eastern aesthetics and balancing materials with craft. The measured website expresses the product through large vehicle photography, a white BYD wordmark, compact navigation over the image, and spacious light sections for model families and owner communities. These web observations describe this captured surface; the vehicle-design writing supplies the brand context. [Design aesthetics](https://www.byd.com/cn/brand-center/leading-in-technology-security-branding-markets).

The brand's evolution remains centred on its technology: the current timeline moves from ending combustion-only vehicle production in 2022 to the Super e-Platform in 2025 and second-generation Blade Battery and flash-charging technology in 2026. This gives a reference builder a concrete subject for the visual emphasis: show vehicles and their technology clearly, then give visitors direct routes to explore and arrange a test drive. [Current timeline](https://www.byd.com/cn/brand-center/industries-and-businesses).

The measured homepage is the mainland Chinese edition (`byd.com/cn`), returned without a regional redirect and with HTML `lang="zh-CN"`.

### Brand Narrative

The official corporate page states a mission of meeting aspirations for a better life through technological innovation, a vision of cooling the Earth by one degree, and the proposition “科技、绿色、明天”. The automotive brand page adds Eastern aesthetics to that technology story. Keep those statements tied to their sources; the measured neutral web controls provide practical support for the vehicle imagery. [Corporate mission and proposition](https://www.bydglobal.com/cn/about.html), [automotive design writing](https://www.byd.com/cn/brand-center/leading-in-technology-security-branding-markets).

### Principles

- **Documented brand foundation:** technology and innovation are named in BYD's corporate development philosophy. [Corporate page](https://www.bydglobal.com/cn/about.html).
- **Guidance from the captured interface:** use vehicle imagery for the large visual statements, precise labels for actions, and borders or underlines for measured interaction feedback.

### Personas

No user-research or persona documentation was verified.

## Colors

The captured interface uses restrained neutrals around colourful vehicle imagery. These are live surface values, not an official corporate colour specification.

| Role | Measured value | Evidence |
|---|---|---|
| Canvas | `#ffffff` | Background behind the Dynasty entry and community link |
| Subtle surface | `#fbfbfb` | Background behind the live-review action |
| Action ink and active fill | `#1a1d25` | Rest label and hover/pressed `::before` of the two 48px action links |
| Black detail | `#000000` | Rest pseudo-element borders and community-link text/underline |

The reference's primary colour is the observed action fill `#1a1d25`; it does not establish BYD's corporate logo colour.

Keep alpha values intact. Header text is `rgba(255, 255, 255, 0.85)` and the test-drive border is `rgba(255, 255, 255, 0.55)`. Hover makes that button's background and border `#ffffff` and its text `rgba(0, 0, 0, 0.95)`. Footer links in the survey use `rgba(255, 255, 255, 0.55)`.

The most frequent paragraph foreground is `rgba(0, 0, 0, 0.55)` (three paragraphs); one further paragraph uses `#9ba1af`. The paragraph foreground remains in prose because its dominant value has alpha. No opaque replacement is chosen.

The census contains Element Plus's default blue `--el-color-primary: #409eff` and Swiper's `--swiper-theme-color: #007aff`. Both are excluded from this palette. Their presence does not document a BYD brand accent.

## Typography

**Official product use:** no first-party typography guideline naming the website's product face was verified.

**Live-loaded:** `PoppinsZN` normal 400 and 500 appear in the survey's loaded-face census. The body and sampled button declare `PoppinsZN` first. Navigation and the header test-drive label are 13px/500 with 20px line-height. The two 48px action links have 16px/400 visible labels. The community link has a 14px/400 visible child label inside a 16px/400 anchor; use the child metric for its text.

**Official distributed assets:** the website's `@font-face` declarations point to same-origin OTF files under `/static_material/byd/cn/fonts/`: `PoppinsZN-Regular.otf`, `PoppinsZN-Medium.otf`, `PoppinsZN-SemiBold.otf`, and `PoppinsZN-Bold.otf`. This is evidence of first-party webfont serving. No redistribution licence was verified, and the drafting worker did not retrieve font binaries separately.

**Declared-only:** `PoppinsZN` 600 and 700 are declared but absent from the loaded-face list, so no specimen is assigned to either weight. The declared `swiper-icons` and `VideoJS` faces belong to UI libraries and are also absent from that loaded list. The raw fallback stack is preserved in the verification notes without promoting its entries to brand faces.

**Unresolved:** glyph coverage, the provenance of the `PoppinsZN` name, and any relationship to another font family were not established. The survey has no sampled `h1` face. Substitute: none chosen.

## Layout

At the measured 1440×1000 viewport, the header places the logo centrally, navigation to the left, and search/region/account/test-drive utilities to the right over the hero image. The page then presents model-family entries, live-event content, owner-community stories and an app area before the footer. The full-page capture is 1440×5837px.

The root computes `--header-height: 56px` and `--gutter: 64px`. The Dynasty and Ocean image links each measure 602.5px wide in the survey. Community sections pair a text column with large imagery. Use these observed structures and the measured control padding; no global spacing scale or mobile breakpoint is established here.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; mobile layout and breakpoints are unverified.

## Elevation & Depth

The six measured controls all have `box-shadow: none` at rest. The action links rely on a border and a changing pseudo-element fill, and the two text links reveal a thin underline. No elevation scale was verified.

## Motion & Easing

The header test-drive button and both 48px action links compute `transition: all 0.3s ease 0s`. The navigation link, community link and image-card anchors compute `all 0s ease 0s` on the element itself; their pseudo-elements and descendants are separate measurement subjects. The raw transition strings and the observed underline transforms are preserved in the verification notes. No authored cubic-bezier curve or carousel timing is promoted to a brand token.

## Components

All six controls were inspected on the desktop homepage. Five show an authored hover/pressed change and are included in the structured components.

| Control | Identity at rest | Visible treatment |
|---|---|---|
| Header “预约试驾” | 93×33px, 4px radius, 6px 20px padding, 13px/500 | Transparent button inside the `/cn/test-driver` link; 0.5px border in 55% white, text in 85% white, over hero imagery |
| “查看更多” | 136×48px, 4px radius, 12px 36px padding, 16px/400 | Transparent link to `/cn/live-list` on `#fbfbfb`; `::before` draws a 1px `#000000` border; label `#1a1d25` |
| Header “直播” | 26×18px, 0 radius/padding, 13px/500, 20px line-height | Transparent navigation link to `/cn/live-list`; 85% white text over imagery |
| “进入王朝首页” | 168×48px, 4px radius, 12px 36px padding, 16px/400 | Transparent link to `/cn/dynasty-home` on `#ffffff`; same pseudo-element border treatment as “查看更多” |
| Community “了解更多信息” | 108×20px, 0 radius/padding; visible label 14px/400, anchor 16px/400 | Transparent link to `/cn/car-club` on `#ffffff`, black text and an arrow |

The image-only Dynasty card is a separate `/cn/dynasty-home` link: 602.5×521.9px, zero radius/padding, transparent on white, no border or shadow. Its computed 16px/400 and `#000000` foreground are inherited values rather than a visible label. It remains a prose observation because hover and pressed had no measured change and focus supplied only a browser ring. The hover crop shows a circular arrow cursor whose DOM source was not identified, so the computed result does not establish absence of all visual feedback.

No visible search input was present in the survey's interactive list.

### States

Hover was confirmed by `:hover=true` for all six targets, and pressed by `:active=true`. Every pressed comparison matched its hover result without an additional settled change.

- **Test drive:** transparent → `#ffffff` background; 85% white → 95% black text; 0.5px 55% white → solid white border. Real keyboard focus at Tab 5 had no computed change within self, pseudo-elements and three ancestor levels.
- **Live more / Dynasty entry:** the anchor stays transparent. Its `::before` changes from transparent with a 1px black border to `#1a1d25` fill and border. The visible child label changes from `#1a1d25` to `#ffffff`.
- **Live navigation:** text becomes fully white and a white 26×1px `::after` underline scales horizontally from zero to full width.
- **Community link:** text remains `#000000`; a black 108×1px `::after` underline scales horizontally from zero to full width.
- **Dynasty image card:** no hover/pressed change across self, pseudo-elements, eight descendants including two images, and three ancestor levels. This statement is limited to computed styles and recorded DOM attributes; it does not cover siblings, canvas, video pixels or external sprite contents.

The five anchors acquire `outline-style: auto` under keyboard focus; this is the browser's own indication. No brand focus token is created. No disabled variant was measured.

## Do's and Don'ts

- Give vehicle imagery substantial space and use compact navigation over the hero.
- Use the measured 4px radius and padding for the 33px header button and 48px content actions.
- Preserve the alpha of white header labels and borders over imagery.
- Reproduce the action links' `::before` layer and their visible child-label colour changes.
- Keep framework palette defaults out of the brand palette, and browser `auto` outlines out of brand focus tokens.
- Use only the verified loaded weights for a live font specimen. Substitute: none chosen.

## Voice & Tone

The homepage uses direct action labels: “预约试驾” (book a test drive), “查看更多” (view more), and “了解更多信息” (learn more). Its community copy invites visitors to join shared journeys. These are observed copy patterns from this page, not a verified editorial style guide.

## Agent Prompt Guide

“Build a mainland-Chinese BYD-style automotive landing page around a large vehicle hero and a centred white wordmark. Use the measured 56px header and 64px gutter variables, a white canvas, and `#fbfbfb` for the live-review surface. Use verified `PoppinsZN` 400/500 only where available; leave an unavailable face unresolved. Make the content action a transparent 48px-high link with 4px radius, 12px 36px padding and `#1a1d25` text. Put its 1px black border on `::before`; on hover and press, fill that layer `#1a1d25` and make the visible label `#ffffff`.”
