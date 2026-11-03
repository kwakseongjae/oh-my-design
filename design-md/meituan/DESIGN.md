---
name: Meituan
colors:
  brand: '#ffd100'
  page-ground: '#f7f8f9'
  card: '#ffffff'
  heading-ink: '#111925'
  secondary: '#656a72'
  metadata: '#b8babe'
  footer-ground: '#f3f3f4'
  action-hover: '#f5f5f5'
  action-pressed: '#ebebeb'
typography:
  navigation:
    fontSize: 16px
    fontWeight: 400
    use: Measured corporate header navigation label; family unresolved beyond the CSS declaration
  action:
    fontSize: 14px
    fontWeight: 400
    use: Visible child label of the 查看全部 news link
  news-title:
    fontSize: 20px
    fontWeight: 500
    use: Visible h6 title inside both measured news card links
  footer:
    fontSize: 14px
    fontWeight: 400
    use: Measured 媒体资源 footer link
rounded:
  none: 0px
  news-action: 6px
spacing:
  card-wrapper-horizontal-padding: 10
components:
  news-all:
    type: button
    textColor: '#111925'
    border: 1px solid rgba(17, 25, 37, 0.2)
    rounded: 6px
    height: 32px
    padding: 0px
    typography: 14px/400
    hover: '#f5f5f5'
    pressed: '#ebebeb'
    use: '查看全部 is a link to /news, transparent at rest on #f7f8f9. Outer box 96px wide; visible child label 14px/400; outer inherited font 16px/400. Keyboard focus showed only the browser auto outline.'
  technology-nav:
    type: button
    textColor: '#111925'
    rounded: 0px
    height: 60px
    padding: 0px
    typography: 16px/400
    hover: 'Descendant span.l9::after grows from 0px to 24px wide, 5px high, background #ffd100'
    pressed: 'Descendant span.l9::after remains 24px wide, 5px high, background #ffd100; no additional change versus hover within probe scope'
    use: 我们的科技 is a transparent header navigation link to /technology, 80px wide on the light header. Its 18px top and bottom borders are transparent. Keyboard focus showed only the browser auto outline.
  lead-story:
    type: card
    textColor: '#111925'
    rounded: 0px
    height: 496.2px
    padding: 0px 10px
    typography: 20px/500
    hover: Inner panel shadow rgba(0, 0, 0, 0.1) 0px 4px 12px 0px; visible image matrix(1.1, 0, 0, 1.1, 0, 0); black image ::after opacity 0.15
    pressed: Inner panel shadow rgba(0, 0, 0, 0.1) 0px 4px 12px 0px; visible image matrix(1.1, 0, 0, 1.1, 0, 0); black image ::after opacity 0.15; no additional change versus hover within probe scope
    use: 'Link to /news/NN261102280001343. Measured transparent outer wrapper is 866.7px wide on #f7f8f9, with a white inner panel. Radius 0 belongs to the wrapper; font 20px/500 belongs to its visible title, while the wrapper inherits 16px/400.'
  news-story:
    type: card
    textColor: '#111925'
    rounded: 0px
    height: 496.2px
    padding: 0px 10px
    typography: 20px/500
    hover: Inner panel shadow rgba(0, 0, 0, 0.1) 0px 4px 12px 0px; image matrix(1.1, 0, 0, 1.1, 0, 0); black image ::after opacity 0.15
    pressed: Inner panel shadow rgba(0, 0, 0, 0.1) 0px 4px 12px 0px; image matrix(1.1, 0, 0, 1.1, 0, 0); black image ::after opacity 0.15; no additional change versus hover within probe scope
    use: 'Link to /news/NN261023179008537. Transparent outer wrapper is 433.3px wide on #f7f8f9, with a white inner panel. Radius 0 belongs to the wrapper; font 20px/500 belongs to its visible title, while the wrapper inherits 16px/400.'
  footer-media:
    type: button
    textColor: '#656a72'
    rounded: 0px
    height: 21px
    padding: 0px
    typography: 14px/400
    hover: 'fg #111925; underline solid rgb(17, 25, 37)'
    pressed: 'fg #111925; underline solid rgb(17, 25, 37); no additional change versus hover within probe scope'
    use: '媒体资源 is a transparent footer link to /media, 56px wide on #f3f3f4. Its child label changes with the anchor. Keyboard focus showed only the browser auto outline.'
fonts:
  roles:
    display: MTTiJ
---

# Design System Inspiration of Meituan

## Overview

### Visual Theme & Atmosphere

Meituan (美团) describes itself as a technology retail company, following a “Retail + Technology” strategy and the mission “We help people eat better, live better.” Established in March 2010, it connects services and goods retail; its privacy policy documents nearby discovery, food and other service orders, payment, movie tickets, travel and accommodation. [Company](https://www.meituan.com/en-US/about-us) · [Product scope](https://rules-center.meituan.com/m/detail/guize/2)

The measured Simplified Chinese corporate homepage (`meituan.com/`, HTML `lang="zh-CN"`) expresses that breadth through a luminous yellow hero, a large custom-font headline, a fixed header and an editorial news grid. **Yellow `#ffd100`, dark ink `#111925`, white panels and a cool `#f7f8f9` ground** provide the visual structure. A double-width lead story sits beside a standard-width card. The restrained outlined news action and small yellow navigation marker give interaction feedback without filling the page with yellow buttons. [Live homepage](https://www.meituan.com/)

Meituan's 2020 design writing associates the brand with yellow, the kangaroo, dish-card lists and delivery riders, while distinguishing business-specific design systems. These associations provide context; the numeric recipes here come from the current corporate homepage. The homepage now leads with a 2 November 2026 LongCat-2.5 story, discussing merchant AI tools; that company-hosted report credits 经济观察报 as its source. [Design writing](https://tech.meituan.com/2020/11/26/Consistency-in-UI-Design.html) · [Company-hosted news](https://www.meituan.com/news/NN261102280001343)

#### Primary tasks

- Read company and technology news.
- Find partnership, investor and recruitment information through the header.
- Find Meituan's apps and social channels through “下载和关注”.
- The wider product supports ordering and payment, and booking movie tickets or hotel/travel services; their transaction screens were not measured. [Privacy policy](https://rules-center.meituan.com/m/detail/guize/2)

### Brand Narrative

An interview reproduced by Meituan's technical team identifies **Wang Xing (王兴)** as its founder in **2010**. Its first-party history records the website's launch on **4 March 2010**, during the group-buying boom, and describes its subsequent expansion into delivery. The company page records the Hong Kong listing on **20 September 2018**. [Founder history](https://tech.meituan.com/2014/01/13/meituan-cloud-interview-by-segmentfault.html) · [History](https://tech.meituan.com/2020/03/05/meituan-10-years.html) · [Company](https://www.meituan.com/en-US/about-us)

Its 2020 design account describes an effort begun in May 2019 to make delivery interfaces consistent across Android, iOS and MRN. It connects reusable components with a controlled palette, typography roles and shared illustration resources, using the 积木 toolchain and 袋鼠UI project. This documents a design practice, not a current public token specification for every business. [Design account](https://tech.meituan.com/2020/11/26/Consistency-in-UI-Design.html)

Today the corporate homepage combines that yellow brand recognition with its technology retail positioning. Its leading story concerns LongCat-2.5 and an AI workbench for local-service merchants, in a company-hosted report credited to 经济观察报. The editorial emphasis is an observation of the homepage's current content. [Company-hosted report](https://www.meituan.com/news/NN261102280001343)

The official media page lists Meituan and business marks, news images and mascot assets. It limits library images to personal or editorial use; the listed packages were not downloaded. [Media resources](https://www.meituan.com/media)

### Principles

- **Customers first:** the company's stated orientation on its company page. [Company](https://www.meituan.com/en-US/about-us)
- **Consistency grounded in each business:** the design article explains why delivery, hotel/travel and group-buying have different systems; preserve context when reusing a measured pattern. [Design account](https://tech.meituan.com/2020/11/26/Consistency-in-UI-Design.html)
- **A clear lead story:** the observed two-to-one card hierarchy distinguishes the main news item without changing the title colour or inventing a badge system.

### Personas

No sourced demographic personas were established; the homepage visibly routes partners, investors and job seekers through their respective navigation links.

## Colors

These are observed corporate-site values, rather than a complete app palette. The census contains 75 computed root custom properties; most belong to Tailwind or Ant Design Mobile. The site's logo SVG and the navigation marker independently establish the yellow value.

| Role | Value | Direct evidence |
|---|---|---|
| Brand | `#ffd100` | Logo SVG fill; measured navigation-marker pseudo-element; themed `--adm-color-primary` |
| Page ground | `#f7f8f9` | Census background; behind both news-card links and “查看全部” |
| Card surface | `#ffffff` | Measured inner news-card panel backgrounds |
| Heading and control ink | `#111925` | Navigation, news titles and the news-action label |
| Secondary | `#656a72` | Footer link at rest |
| Metadata | `#b8babe` | News-card date; census text colour |
| Footer ground | `#f3f3f4` | Solid background reported behind the footer link |
| News-action hover | `#f5f5f5` | “查看全部” hover background |
| News-action pressed | `#ebebeb` | “查看全部” pressed background |

Paragraph **foreground** is alpha-bearing: `rgba(15, 25, 37, 0.65)` on seven `<p>` elements and `rgba(17, 25, 37, 0.35)` on three. These are retained in prose, without inventing an opaque body-colour token. The news action has a `1px solid rgba(17, 25, 37, 0.2)` border. No semantic success, error, coupon, rating or price colour was established for the product.

## Typography

**Official product-use statement:** no opened company document specifies a single typeface for all Meituan products. Its design article describes Headline, Subtitle, Body, Button and Caption roles, and explicitly allows different business systems; it does not supply a current, universal font-family specification. [Design writing](https://tech.meituan.com/2020/11/26/Consistency-in-UI-Design.html)

**Live-loaded:** the census reports exactly `MTTiJ 400 normal`. The homepage `h1` declares `MTTiJ` first. This supports a **display** family token for this surface. It does not establish MTTiJ as the navigation or body face.

**Official asset references:** the homepage stylesheet declares MTTiJ with `font-display: swap`, normal style and weight 400, referencing `meituan-type-daily-words.woff2` and `daily-words-mt-type.ttf` on `s3plus.meituan.net`. It also declares MTTiF 400 normal with WOFF2 and TTF URLs. These font files were not downloaded, and their licensing was not inspected. [Current stylesheet](https://s3plus.meituan.net/static-prod01/com.sankuai.fspfecap.officeweb-files/_next/static/css/64da42ef41906699.css)

**Declared-only:** body CSS lists `"PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", "Source Han Sans CN", sans-serif, "Helvetica Neue", Helvetica, Arial`. The measured links resolve their computed `font-family` property to `PingFang SC`, but that is a declaration, not a loaded-face observation. MTTiF is declared but absent from the loaded list. None of these faces receives a specimen or a family token here.

**Unresolved:** actual platform glyph selection for the body, product-wide typography and font redistribution rights. **Substitute: none chosen.**

| Measured text | Size / weight | Evidence scope |
|---|---|---|
| Header navigation | 16px / 400; 24px line height | “我们的科技” link and its visible label |
| News action | 14px / 400 | Visible “查看全部” child; outer anchor inherits 16px / 400 |
| News-card title | 20px / 500 | Visible `h6` in both measured cards |
| Footer | 14px / 400; 21px line height | “媒体资源” link |

## Layout

At 1440 × 1000, an 80px fixed header tops a centred company introduction and a news section. The survey's full capture is 2613px high. The lead card wrapper is twice the standard card width; both are 496.2px high. Their 10px left and right padding separates the visible panels. Use this hierarchy to distinguish the leading story from the supporting news.

The page combines a yellow glow around the introduction with a cool ground around the white news panels. Card titles precede short descriptions and pale dates. The footer collects company, recruitment and contact routes into columns. These are observed arrangements, rather than a newly invented spacing scale.

### Responsive Behavior

Rendered responsiveness was not measured; the capture is desktop 1440 × 1000 only.

## Elevation & Depth

Both measured news-card inner panels start with `box-shadow: none`. On hover and while pressed they acquire the exact computed shadow `rgba(0, 0, 0, 0.1) 0px 4px 12px 0px`. The outer link wrappers remain shadowless. A black image `::after` changes opacity from 0 to 0.15, so the image darkens while its content enlarges.

The fixed header appears above the scrolling content; the survey records `z-index: 10000`. No product modal, checkout-bar, picker or toast elevation was measured.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`
- `shadow.news-card-hover`: `rgba(0, 0, 0, 0.1) 0px 4px 12px 0px`

## Motion & Easing

The measured movement is local: a navigation marker grows, news images scale to 1.1 beneath a black overlay, and the app-menu arrow rotates. Every selected anchor's raw computed transition string is `all 0s ease 0s`. The capture does not retain raw computed transition strings for the animated descendants, so no descendant duration or easing token is assigned.

No fly-to-cart, order-status animation, carousel transition, spring behaviour or reduced-motion response was verified.

## Components

All controls below are links on the corporate homepage. Real pointer hover, held press and a Tab walk were measured after clicking the cookie banner's “拒绝 Cookies” control. Consent controls are excluded from the component set.

- **News action — 查看全部:** 96 × 32px; 6px radius; zero outer padding; transparent at rest over `#f7f8f9`; `#111925` label; the alpha border described above. The visible label is 14px / 400. Hover fills `#f5f5f5`; press fills `#ebebeb`.
- **Navigation — 我们的科技:** 80 × 60px; 0px radius and padding; transparent; `#111925`, 16px / 400. Transparent 18px top and bottom borders contribute to its hit area. Hover reveals a yellow 24 × 5px `::after` marker inside the label; held press retains it.
- **Lead news card:** the link wrapper is 866.7 × 496.2px, transparent, 0px radius and `0px 10px` padding. Its white inner panel contains a 20px / 500 title, description and date. Hover adds the shadow in §6, scales the visible image to 1.1 and raises a black image overlay to opacity 0.15; held press matches hover within the probe's compared scope.
- **Standard news card:** 433.3 × 496.2px link wrapper, otherwise the same measured wrapper styling and feedback. The current example links to the 2026 food-delivery industry conference story.
- **Footer — 媒体资源:** 56 × 21px; 0px radius and padding; transparent over `#f3f3f4`; 14px / 400. Hover and press change both anchor and label from `#656a72` to `#111925` and add an underline.

The card wrappers' square geometry must not be confused with their rounded inner panels. The opened stylesheet declares the inner `.r,.s` panels at `1rem` radius in its desktop rule; the probe did not record those descendants' computed radii. [Card stylesheet](https://s3plus.meituan.net/static-prod01/com.sankuai.fspfecap.officeweb-files/_next/static/css/ef46b2087645942d.css)

The “下载和关注” menu link is 100 × 24px, transparent, 0px radius/padding and 16px / 400 `#111925`. Hover and press rotate its arrow to `matrix(-1, 0, 0, -1, 0, 0)`. Keyboard focus was UNMEASURED. Its dropdown is visible in the screenshot but lies outside the control's descendant comparison; this menu remains a prose observation.

No search input, ordering CTA, coupon chip or merchant card appears in the surveyed interactive list.

The visible hero label “下载美团App” was not included in that interactive list and was not measured for states.

### States

| Control | Hover | Held press | Keyboard focus |
|---|---|---|---|
| `news-all` | Background `#f5f5f5` | Background `#ebebeb` | Browser `auto` outline only |
| `technology-nav` | Yellow `::after` width 0 → 24px, height 5px | Same measured marker | Browser `auto` outline only |
| `lead-story` | Inner shadow; image scale 1.1; black overlay opacity 0.15 | Same measured changes | Browser `auto` outline only |
| `news-story` | Same card changes | Same measured changes | Browser `auto` outline only |
| `footer-media` | Ink `#111925` and underline | Same measured changes | Browser `auto` outline only |
| `app-menu` | Arrow `matrix(-1, 0, 0, -1, 0, 0)` | Same measured transform | UNMEASURED: not reached in the 35-press Tab walk |

The first five focus snapshots show `rgb(0, 95, 204) auto 1px off 1px`; after blur, the outline disappears. That is browser feedback and supplies no brand focus token. Pointer snapshots confirm `:hover`; held-press snapshots confirm `:active`. The compared scope includes self, descendants, their pseudo-elements and three ancestor levels; sibling dropdown content and pixel-only effects are outside that scope.

Empty, loading, disabled, payment-failure and order-tracking treatments were not measured.

## Do's and Don'ts

- Use `#ffd100` for the observed logo and short navigation marker, with dark `#111925` labels elsewhere.
- Build white editorial panels on `#f7f8f9`, retaining title, description and date hierarchy.
- Give “查看全部” distinct hover and pressed fills, while preserving its outline and compact dimensions.
- Keep the link wrapper's geometry separate from the inner panel and image styling.
- Limit MTTiJ to its verified display role; leave body-family choice unresolved.
- Preserve actual state changes on children and pseudo-elements. Changing only the anchor's colour would miss the navigation and card feedback.

These are implementation directions derived from the observed homepage, not published company rules.

## Voice & Tone

The homepage pairs a public mission with short routing labels: “我们的科技”, “和美团合作”, “查看全部” and “下载和关注”. The English company page supplies the mission translation used in §1. The Chinese mission includes “帮大家” before “吃得更好，生活更好”. [Homepage](https://www.meituan.com/) · [English company page](https://www.meituan.com/en-US/about-us)

The visible corporate copy describes the business and directs visitors to information. No product-wide rule about using `你` rather than `您`, prohibited phrases, delivery estimates, errors or empty-state wording was verified.

## Agent Prompt Guide

“Build a Meituan corporate news surface with a cool `#f7f8f9` ground, white panels, dark `#111925` titles and `#b8babe` dates. Give the lead story a double-width link wrapper. Use a 96 × 32px outlined ‘查看全部’ link with a 6px radius, 14px / 400 visible label, hover `#f5f5f5` and pressed `#ebebeb`. On a navigation label, reveal a `#ffd100` 24 × 5px marker. Use the measured card shadow and 1.1 image scale on hover. Body typeface remains unresolved; Substitute: none chosen.”
