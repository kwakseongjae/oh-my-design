---
name: Books.com.tw (博客來)
colors:
  primary: '#12ae57'
  foreground: '#000000'
  canvas: '#ffffff'
  search-category: '#fafafa'
  search-border: '#27b24f'
  link-hover: '#ef7a31'
  paragraph-accent: '#d0021b'
  muted-link: '#626364'
  neutral-fill: '#f0f0f0'
typography:
  utility:
    fontSize: 13px
    fontWeight: 400
    use: 回首頁 utility link; family unresolved beyond CSS declaration
  category:
    fontSize: 15px
    fontWeight: 700
    lineHeight: 36px
    use: 電子書 horizontal category link
  search:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 38px
    use: input#key.search_key
  product-title:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27px
    use: 覺醒的你 product-title link
rounded:
  none: 0px
components:
  book-title:
    type: card
    textColor: '#000000'
    rounded: 0px
    height: 54px
    width: 280px
    padding: 0px
    typography: 18px / 400
    hover: 'fg #ef7a31'
    pressed: 'fg #ef7a31'
    use: 'Product-title link for 覺醒的你：暢銷百萬，歐普拉的床頭靈修書, sitting on the white canvas. Transparent own background; this is the title anchor within a product card, not the entire tile. Hover and press change the label to #ef7a31; pressed adds no further change from hover.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Books.com.tw (博客來)

## Overview

### Visual Theme & Atmosphere

Books.com.tw, known as 博客來, began in 1995 and has expanded from books into a broader online retail platform. Its company page connects reading and everyday life through the brand expression **“Book Your Life”** and a positioning that joins digital technology with physical services. [Company and history](https://www.books.com.tw/isi/aboutbooks.htm?loc=footer_01_001).

The desktop storefront expresses that breadth through dense category lists, a white canvas, green search and navigation, red merchandising ink, illustrated campaigns and a character beside the logo. The green shell remains visually distinct from the multicolour promotional artwork. These are observations of the captured homepage, rather than a published brand manual. The measured homepage is the Traditional Chinese edition at `www.books.com.tw/`, with HTML `lang="zh-TW"`; the capture did not redirect to another regional path.

Its recent expansion extends reading across formats and locations. A 2025 announcement attributed to 博客來 on the group's official uniopen site describes the BooksPad reader, its first 24-hour physical bookstore at DREAM PLAZA, electronic and audio reading, and online orders collected in store. [Official anniversary announcement, 2025-08-08](https://www.uniopen.com/news/content/6895a39af8cb7039e870fa1a).

#### Primary tasks

- Search the catalogue with a category selector and search field.
- Browse books, digital reading, household goods and other merchandise through category links.
- Follow product-title links and discover promotions or membership benefits.

### Brand Narrative

An online bookstore founded in 1995 now connects a broad retail catalogue with digital reading hardware and a physical bookstore. Reading remains explicit in the company's positioning and in its BooksPad and store expansion. [Company history](https://www.books.com.tw/isi/aboutbooks.htm?loc=footer_01_001), [official expansion announcement](https://www.uniopen.com/news/content/6895a39af8cb7039e870fa1a).

### Principles

The company states a mission centred on simple, reassuring and innovative service. The measured reference expresses its visible hierarchy through green wayfinding, compact catalogue text and a distinct orange product-link state. The visual interpretation is based on this capture; it is not presented as an official design-principles document. [Company mission](https://www.books.com.tw/isi/aboutbooks.htm?loc=footer_01_001).

### Personas

No personas or user-research findings were verified.

## Colors

These role names describe measured literals; they are not names recovered from a Books.com.tw token API. The survey exposed no root or declared custom properties and could not inspect two cross-origin stylesheets. There is no verified first-party custom-property namespace to reproduce.

| Role | Measured value | Evidence |
|---|---|---|
| Primary | `#12ae57` | Search-submit background and category-navigation ancestor background: `rgb(18, 174, 87)` |
| Foreground | `#000000` | Product-title, search-input and utility-link ink; also 19 paragraph entries |
| Canvas | `#ffffff` | 28 background census entries; search-input background and utility-link backdrop |
| Search category | `#fafafa` | The “全部” category button's background |
| Search border | `#27b24f` | Search wrapper: `1px solid rgb(39, 178, 79)`; individual search controls have no border |
| Product-link interaction | `#ef7a31` | The measured product title's hover and pressed foreground |
| Paragraph accent | `#d0021b` | `rgb(208, 2, 27)`: 442 paragraph-ink entries and 442 text census entries |
| Muted link | `#626364` | “看會員分級辦法” link in the survey, `rgb(98, 99, 100)` |
| Neutral fill | `#f0f0f0` | `rgb(240, 240, 240)`: 37 background census entries |

The paragraph census contains 442 red, 19 black and three `rgb(130, 130, 130)` entries. It does not justify treating the most frequent paragraph colour as the ink for every text role. The foreground above is tied to the specific black labels and black paragraphs measured.

## Typography

- **Official product use:** no product text typeface was documented by the first-party narrative pages opened for this reference.
- **Live-loaded:** the census reports only `icon_01 normal normal`. This is an icon face; it is not a verified prose or UI text family.
- **Official distributed assets:** the site-linked [icon stylesheet](https://jci.book.com.tw/css/iconfont/icon_01.css) declares `icon_01` and relative `icon_01.woff`, `icon_01.ttf` and `icon_01.eot` sources. The stylesheet was read; font binaries and their licence were not opened.
- **Declared-only text faces:** body and button CSS name `Helvetica, Arial, "Microsoft JhengHei", 微軟正黑體, sans-serif`. Survey controls also include a Verdana declaration on the shopping-cart link. None of these text faces appears in the census's loaded-face list. There was no sampled H1 family (`null`).
- **Unresolved:** actual rendered text faces and per-script glyph selection. No text-family token or font specimen is supplied. **Substitute: none chosen.**

The verified dimensions remain usable independently of family identification:

| Role | Size / weight | Line height |
|---|---|---|
| Utility “回首頁” | 13px / 400 | `normal` |
| Category “電子書” | 15px / 700 | 36px |
| Category selector “全部” | 15px / 400 | 15px |
| Search input | 16px / 400 | 38px |
| Search-submit button | 15px / 400 computed; SVG icon | 15px |
| Sampled product title | 18px / 400 | 27px |

Letter spacing is `normal` on all six measured controls. The product title wraps to two lines in a 280×54px anchor.

## Layout

At the measured 1440×1000 viewport, the content spans 1180px from x=123 to x=1303. The initial utility header is 40px high. Search sits above the main merchandising area; the search selector, input and submit button are each 38px high inside their shared wrapper.

The hero combines a tall left category list with a wide campaign carousel to the right. Promotional and membership tiles continue below it. This is a dense browsing surface: retain the category hierarchy, compact link rows and separate campaign artwork when using this reference. These layout observations describe the captured desktop, not a breakpoint specification.

### Responsive Behavior

Mobile layouts, breakpoints and touch states were not measured; this reference covers desktop 1440×1000 only.

## Elevation & Depth

The six measured control surfaces and their three compared ancestor levels have no box shadow. The viewport also shows raised category-panel and floating support surfaces, but their shadow values were not extracted. No elevation scale is defined.

## Motion & Easing

All six control identities report the raw computed transition **`all 0s ease 0s`**. No non-zero duration or custom easing curve was measured on these controls. The campaign carousel's motion timing was not measured.

---

First-party evidence was opened before browser probing. Product values come from the homepage survey and states captures dated 2026-11-06; company narrative comes from the linked company, membership and official group-news pages. The legal footer on an [opened catalogue page](https://www.books.com.tw/web/sys_sbbrand/0/AX000000001_0000002883?loc=P_0003_028) names 博客來數位科技股份有限公司 and gives its address in Taiwan. Full provenance, raw values and collection limitations are in `verification.md` and `report.md`.

## Components

The reproducible state-bearing component is the **product-title link** “覺醒的你：暢銷百萬，歐普拉的床頭靈修書”: a 280×54px anchor with 0px radius, 0px padding, no border or shadow, and 18px/400 text at 27px line height. Its own background is transparent, visually on the white page canvas. Rest ink is `#000000`; hover and pressed ink is `#ef7a31`. Pressed adds no change beyond hover. Keyboard focus did not change the compared visual properties. This anchor is the title inside the card, not a measurement of the whole card container.

Other controls provide geometry references but no authored state variant was observed, so they are described here without machine component declarations:

| Control | Geometry | Rest appearance |
|---|---|---|
| Search submit, title “搜尋” | 48×38px; radius `0px 9px 9px 0px`; padding 0px; 15px/400 | `#12ae57` background, white foreground; SVG magnifier |
| Search category “全部” | 100×38px; radius `11px 0px 0px 11px`; padding `0px 30px 0px 10px`; 15px/400 | `#fafafa` background, black visible `span#search_name` label |
| Category link “電子書” | 80×36px; 0px radius and padding; 15px/700 | Transparent anchor over `#12ae57`, white label |
| Search input `input#key.search_key` | 330×38px; 0px radius; padding `0px 8px`; 16px/400 | White background, black input foreground; captured placeholder “購書滿額送20點” |
| Utility link “回首頁” | 98×40px; 0px radius; padding `8px 15px`; 13px/400 | Transparent anchor on white, black label and home icon |

All six controls had `border: none` and `shadow: none` at rest. The shared search wrapper supplies the green border. The selector's left corners and submit button's right corners have different measured radii; preserve their corner-specific geometry.

### States

| Key | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| `book-title` | Foreground `#000000` → `#ef7a31` | Same orange; no additional change from hover | No compared visual change, Tab #128 |
| `search-submit` | No compared visual change | No compared visual change | No compared visual change, Tab #24 |
| `search-category` | No compared visual change | No compared visual change | No compared visual change, Tab #22 |
| `nav-ebook` | No compared visual change | No compared visual change | No compared visual change, Tab #34 |
| `search-input` | No compared visual change | No compared visual change | No compared visual change, Tab #23 |
| `utility-home` | No compared visual change in the second call | No compared visual change in the second call | No compared visual change, Tab #2 |

“No compared visual change” is limited to self and its pseudo-elements, descendants and their pseudo-elements, and three ancestor levels and their pseudo-elements. Descendant counts are 3 for search submit (one SVG, one circle and one rect), 2 for the category selector (one empty), 1 for the utility link (empty icon layer), and 0 for the other three controls. The probe checks computed paint, border, outline, shadow, opacity, transform, filter, visibility, size, decoration, background and mask properties, image sources and SVG internals where present. Siblings and rendered pixels are outside this comparison.

Each measured hover has `:hover` true and each measured press has `:active` true. Focus was reached by real Tab and had `:focus-visible` true. Outlines were `none`, with no measured visual focus change or persistent visual change after blur. No focus or disabled token is defined. The first utility-link pointer pass was UNMEASURED because of the fixed header; the second call measured it successfully without hiding overlays.

## Do's and Don'ts

- Keep green search/navigation, black catalogue labels and orange product-link interaction as separate observed roles.
- Use the measured corner-specific search geometry and compact typography metrics.
- Keep campaign artwork visually rich while preserving clear category and product labels.
- Do not turn a CSS font declaration into a loaded product font or specimen.
- Do not extend the product title's orange interaction to unmeasured controls.

## Voice & Tone

The company expression “Book Your Life” links reading with daily living. The storefront uses direct shopping labels such as “全部” and “看會員分級辦法”. The official 2026 membership page also uses “Book Your Life” alongside practical benefits and rewards. [Membership page](https://www.books.com.tw/activity/vip/index.html).

## Agent Prompt Guide

Build a white, densely organised Traditional Chinese retail surface with green `#12ae57` search and category navigation. Use a 100×38px category selector, 330×38px input and 48×38px submit button, preserving their individual padding and asymmetric corners. Give the sampled product-title link 18px/400 text at 27px line height, 0px padding and radius, and a black-to-`#ef7a31` foreground change on hover and press. Text-family selection is unresolved; no substitute is chosen.
