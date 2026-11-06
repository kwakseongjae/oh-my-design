---
name: SmartNews
colors:
  primary: '#0099eb'
  canvas: '#ffffff'
  on-primary: '#ffffff'
  black: '#000000'
  surface: '#f9f9f9'
  red: '#fd4749'
  blue: '#329fe7'
  green: '#00cc8b'
  orange: '#fb9200'
  yellow: '#ffd700'
  blue-100: '#f3f7fb'
  gray-200: '#ececec'
  gray-300: '#e0e0e0'
  gray-500: '#bebebe'
  gray-600: '#606060'
  gray-700: '#4c4c4c'
  gray-800: '#2b2b2b'
  gray-900: '#1c1c1c'
  grey36: '#363636'
  greyf8: '#f8f8f8'
  yellow-500: '#e19d00'
typography:
  action:
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.5
    use: Visible labels of the Japanese homepage header action links; computed declaration only, rendered face unresolved.
  search:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.55
    use: Header search input; computed declaration only, rendered face unresolved.
  edition-label:
    fontSize: 12px
    fontWeight: 300
    use: Visible US版 child label; wrapper is 10px/400.
  app-action-label:
    fontSize: 14px
    fontWeight: 600
    use: Visible アプリの詳細 child label; wrapper is 10px/400.
  feature-label:
    fontSize: 14px
    fontWeight: 300
    use: Visible スマニューAI eyebrow on the lead story; headline metrics unresolved.
rounded:
  none: 0px
  sm: 4px
  action: 5px
spacing:
  action-y: 11
  primary-x: 25
  secondary-x: 10
  app-action-x: 14
components:
  search-input:
    type: input
    rounded: 0px
    height: 18.6px
    padding: 0px
    typography: 12px / 400
    pressed: width 96px to 60px while the input is focused; height stays 18.6px
    focus: width 96px to 60px; returns to 96px after blur; outline remains none
    use: Header text input with placeholder キーワードで検索, transparent over the photographic hero. Rest foreground is black at 87% opacity. Keyboard focus and the focused mouse-pressed sample narrow the input; no form was submitted.
---

# Design System Inspiration of SmartNews

## Overview

### Visual Theme & Atmosphere

SmartNews (スマートニュース) is a Japanese news-discovery company established in 2012. Its mission is “Delivering the world's quality information to the people who need it.” The product brings together news from a broad publisher network; its business page describes more than 3,000 media partners and its corporate homepage reports more than 400,000 articles delivered daily. Its company mission connects content-discovery algorithms with an interface made for smart devices. [Company overview](https://about.smartnews.com/en/about/company.html), [mission](https://about.smartnews.com/en/mission/), [business](https://about.smartnews.com/en/business/), [corporate homepage](https://about.smartnews.com/en/).

The measured homepage is the Japanese edition (`smartnews.com/`), rendered with HTML `lang="ja"`. Its expression combines a multicolour app icon, black wordmark, a wide photographic app-promotion hero, a white news surface and blue actions. Below the hero, a large image-led lead story sits beside two stacked stories. Strong headline hierarchy, small source labels and repeated article links make the page dense but scannable. These are observations of this web edition, rather than specifications of the native app. [Live homepage](https://www.smartnews.com/).

The current product story includes AI-assisted reading. The July 2025 launch of SmartNews AI Matome introduced grouped summaries with attribution and original-article links, alongside the Mercury-san navigator character. A July 2026 release added on-demand Spanish and Chinese translation for U.S. iOS readers, with machine-generated disclosures and a way to return to English. These are documented product developments; the measured Japanese homepage visibly labels its featured summaries スマニューAI. [AI Matome announcement](https://about.smartnews.com/en/upload/Press_Release__SmartNews_AI_Matome.pdf), [translation announcement](https://about.smartnews.com/en/news/2579.html).

#### Primary tasks

- Scan the featured stories and article feed, then follow an article link.
- Look up a keyword through the header search input.
- Follow links to SmartNews＋ information, the app details or the U.S. edition.
- In the broader app offering, use coupons and discover news across publishers; these features are described by the company, not exercised in this capture. [Company site](https://about.smartnews.com/en/).

### Brand Narrative

The company overview dates establishment to June 15, 2012. The official history identifies the original name as Gocro, Inc. and names co-founders Kaisei Hamamoto and Ken Suzuki. It traces the news app's expansion into advertising, coupons, investigative-journalism support and the SmartNews＋ subscription service. [Company overview](https://about.smartnews.com/en/about/company.html), [history](https://about.smartnews.com/en/about/history.html).

A March 2015 release records the U.S. edition's October 2014 launch, the August 2014 $36 million Series B and the February 2015 international-edition launch in more than 150 countries. These are historical milestones, not a present-day readership or market count. That release describes machine-learning discovery at scale. A May 2015 release documents offline reading; the current publisher page names SmartView as its native reading experience. [International expansion](https://about.smartnews.com/en/news/2322.html), [offline-reading history](https://about.smartnews.com/en/news/2326.html), [publisher information](https://about.smartnews.com/en/press/publishers.html).

Today the opened company sources connect that discovery mission to publisher partnerships, subscriptions and AI-assisted access. The 2025 summary announcement specifies original-source links and multiple perspectives; the 2026 translation announcement describes reader-triggered language changes. The measured web composition presents that evolution through featured AI stories alongside publisher articles. [Business](https://about.smartnews.com/en/business/), [AI Matome](https://about.smartnews.com/en/upload/Press_Release__SmartNews_AI_Matome.pdf), [translation](https://about.smartnews.com/en/news/2579.html).

### Principles

The following design takeaways connect the opened company writing with the measured web page; they are not an official UI principles document.

- **Quality information:** carry forward the company's stated mission through a clear article hierarchy.
- **Multiple perspectives:** retain source attribution and routes to original reporting, as documented for AI Matome.
- **Clear action hierarchy:** distinguish the filled blue header action from the outlined subscription link and the white app-details link.
- **Readable image features:** use the observed dark scrim and light text over photography.
- **Reader control:** the translation announcement documents on-demand activation and return to English; apply that fact only to that feature.

### Personas

No first-party persona research was verified.

## Colors

The Japanese homepage registers a multicolour palette. Its filled header action uses **`#0099eb`**, also registered as `--color-blue-400` and `--color-jp-aplp-blue`. The page surface is **`#ffffff`** and the primary action label is **`#ffffff`**. **`#000000`** appears as a rendered background and as the base of translucent foreground colours.

| Role or registered name | Measured value | Evidence |
|---|---|---|
| Primary web action | `#0099eb` | Filled header link; root blue aliases |
| Canvas / on-primary | `#ffffff` | Rendered census; app-details surface / primary label |
| Secondary surface | `#f9f9f9` | `--background-color-secondary`, `--color-gray-100` |
| Red | `#fd4749` | `--color-red`; also rendered as a background |
| Blue | `#329fe7` | `--color-blue`, `--color-blue-200`; also rendered |
| Green | `#00cc8b` | `--color-green`, `--text-color-success`; also rendered |
| Orange | `#fb9200` | `--color-orange`; also rendered |
| Yellow | `#ffd700` | Root `--color-yellow: gold`; census `rgb(255, 215, 0)` |
| Pale blue | `#f3f7fb` | `--color-blue-100`; also rendered |
| Grey register | `#ececec`, `#e0e0e0`, `#bebebe`, `#606060`, `#4c4c4c`, `#2b2b2b`, `#1c1c1c` | `--color-gray-200`, `-300`, `-500`, `-600`, `-700`, `-800`, `-900` |
| Other grey aliases | `#363636`, `#f8f8f8` | `--color-grey36`, `--color-greyf8` |
| Yellow 500 | `#e19d00` | `--color-yellow-500` |

The grey and yellow registers establish available CSS values, not a measured assignment to every UI role. The two first-party CDN stylesheets were unreadable to the census's CSSOM walk; root computed properties remained readable. Framework defaults are separated in the verification notes.

**Foreground:** the search input and app-details label use `rgba(0, 0, 0, 0.87)`; the edition link uses `rgba(0, 0, 0, 0.6)`. The subscription label uses `oklab(0 0 0 / 0.87)` and its 1px border uses `oklab(0 0 0 / 0.4)`. The lead story's visible label and headline use `rgba(255, 255, 255, 0.87)`. Preserve these alpha values in context rather than replacing them with opaque grey tokens.

The paragraph census is dominated by `oklab(0 0 0 / 0.4)` (45 paragraphs), followed by white at 87% (6) and black at 87% (3). This mixes source metadata with featured-story text; it does not establish one universal paragraph colour. All values above come from the [live homepage](https://www.smartnews.com/).

## Typography

| Evidence class | Verified finding |
|---|---|
| Official product use | No opened first-party source identifies a product font family. |
| Live-loaded | The census reports `document.fonts` loaded faces as `[]`; no live font specimen is supported. |
| Official distributed assets | The press page distributes logo assets and a brand manual; no font asset was verified. A wordmark asset does not identify the UI typeface. |
| Declared-only | Body: `system-ui, roboto, sans-serif`; first button: `Roboto, sans-serif`; sampled controls: `Roboto`. The census found no `h1`. |
| Unresolved | The rendered face, per-script fallback resolution, font delivery and native-app typography remain unresolved. |

The root `--font-smartview` declaration is `system-ui, -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`. This is a declared stack, not proof that those faces loaded or that the measured homepage applies that stack to its articles. Substitute: none chosen.

| Sampled text | Size / weight | Additional metric |
|---|---|---|
| Header action labels | 12px / 700 | 18px line height, ratio 1.5 |
| Search input | 12px / 400 | 18.6px line height, ratio 1.55 |
| Visible US版 child label | 12px / 300 | Wrapper declares 10px / 400 |
| Visible アプリの詳細 child label | 14px / 600 | Wrapper declares 10px / 400 |
| Visible スマニューAI lead-story eyebrow | 14px / 300 | Wrapper declares 10px / 400 |

The sampled headline is an `h2` with white-at-87% foreground, but its exact computed font size and weight were not recorded. Root semantic sizes such as `--text-headline1: 2.4rem`, `--text-body2: 1.6rem` and `--text-title1: 4rem` remain declarations, without an inferred pixel scale. [Live homepage](https://www.smartnews.com/), [official press assets](https://about.smartnews.com/ja/press/media.html).

## Layout

At 1440×1000, the header places the logo on the left and edition, search, subscription and login actions on the right. A wide photo hero contains the app proposition and download badges; the first story row begins at y=480px. The lead link is 635px wide, while the two stacked links to its right are approximately 598.8px wide. Below this area the survey records repeated article links, topic-search pills, a SmartNews＋ section and footer links. [Live homepage](https://www.smartnews.com/).

Preserve the observed distinction between large feature photography and the denser article list. Use headline hierarchy and small source metadata to organise the scan. The root registers `--max-width-desktop: min(1280px, 100vw - 4rem)` and a custom rem spacing family; those declarations do not establish a measured mobile breakpoint or a universal pixel grid.

Measured action padding is 11px vertically, with 25px horizontally on the filled header link and 10px on the outlined link. The app-details link uses 14px horizontal padding. These are local measurements, not a reconstructed spacing scale.

### Responsive Behavior

Only the desktop 1440×1000 edition was measured; mobile, tablet and native-app responsive behaviour remain unverified.

## Elevation & Depth

All six sampled wrappers have `box-shadow: none`. The lead story places a darkening layer over its image: `linear-gradient(rgba(0, 0, 0, 0) 0%, oklab(0 0 0 / 0.8) 100%)`. Its visible label and headline are white at 87% opacity. This directly supports the prior reference's image-and-scrim treatment. [Live homepage](https://www.smartnews.com/).

## Motion & Easing

All six sampled controls compute `transition: all 0s ease 0s`. The search input's reversible width change was observed without a computed transition duration. No app-wide timing, spring, channel-swipe or reduced-motion policy was verified. [Live homepage](https://www.smartnews.com/).

## Components

These six observations identify the exact desktop controls. “Transparent” describes their own computed fill; their visible backgrounds include the photographic hero or article imagery. Values are from the [live homepage](https://www.smartnews.com/).

| Control | Geometry: width × height / radius / padding | Rest appearance and visible label |
|---|---|---|
| `primary-cta`: ログイン / 登録, link to `/news/signin` | 135.5×40px / 5px / 11px 25px | `#0099eb` fill, `#ffffff` label, 12px/700; border and shadow none |
| `secondary-cta`: スマニュー＋を購読, link to `/news/product` | 130×42px / 5px / 11px 10px | Transparent; foreground `oklab(0 0 0 / 0.87)`; 1px solid `oklab(0 0 0 / 0.4)` border; 12px/700; shadow none |
| `us-nav`: US版, edition link | 53.3×16px / 0 / 0 | Transparent; black-at-60% label, 12px/300; wrapper 10px/400; border and shadow none |
| `search-input`: キーワードで検索 | 96×18.6px / 0 / 0 | Transparent; black-at-87% foreground, 12px/400; border, shadow and outline none |
| `hero-story`: first large image-led article link | 635×423.3px / 0 / 0 | Wrapper transparent, 10px/400 and black-at-87%; visible eyebrow 14px/300 and white-at-87%; headline also white-at-87%; border and shadow none |
| `app-details`: アプリの詳細, link to `/ja` | 112×40px / 4px / 0px 14px | `#ffffff` fill; black-at-87% visible label, 14px/600; wrapper 10px/400; border and shadow none |

The story wrapper's 0px radius does not describe every image clipping layer: the screenshot shows softened image corners. Smaller featured links elsewhere in the survey have 5px wrapper radii. Keep wrapper and child measurements distinct.

The search input has a reversible focus state: width becomes 60px, height stays 18.6px, and blur restores 96px. The mouse-pressed sample also has focus and the same narrower width. It has no drawn outline in either sample. This is the single interactive component encoded in the frontmatter. The five links retain their measured rest specifications here because their only focus change is Chromium's `auto` ring; their hover and pressed samples are unchanged within the recorded comparison scope.

### States

| Control | Hover | Mouse pressed | Keyboard focus |
|---|---|---|---|
| Filled header action | No compared change | No compared change | Browser `auto` outline only |
| Outlined subscription action | No compared change | No compared change | Browser `auto` outline only |
| US edition link | No compared change | No compared change | Browser `auto` outline only |
| Search input | No compared change | Width 96→60px while focused | Width 96→60px; blur restores 96px; outline none |
| Lead story link | No compared change | No compared change | Browser `auto` outline only |
| App-details link | No compared change | No compared change | Browser `auto` outline only |

Every hover sample matched `:hover`, every pressed sample matched `:active`, and keyboard focus came from a real Tab walk. Comparison covered self, descendants and three ancestor levels, including their pseudo-elements, computed paint/geometry, image references and SVG internals. Descendant counts were 2 / 2 / 3 / 0 / 7 / 2 respectively; the lead story included two images and the edition link included one SVG and path. Siblings, cross-origin frame contents, closed shadow roots and pixel-only effects remain outside the probe's scope. No loading, empty, error, success, disabled or native channel-selection state was measured. [Live homepage](https://www.smartnews.com/).

## Do's and Don'ts

- Use the measured blue for the filled web action and keep the multicolour palette available.
- Keep action wrappers and their visible child labels distinct when applying typography.
- Preserve the white news surface, photographic features, dark scrim and small source labels observed on this edition.
- For service-logo assets, follow the official manual's black/white wordmark variants according to background brightness. Its horizontal service logo specifies one-quarter-icon clear space and a minimum digital height of 50px. These are logo-asset instructions, not UI sizing tokens. [Brand manual, pp. 21–23](https://about.smartnews.com/assets/images/press/smartnews_brandmanual_en.pdf).
- Keep unresolved font families out of specimens; Substitute: none chosen.

## Voice & Tone

The homepage uses short functional labels: US版, キーワードで検索, スマニュー＋を購読, ログイン / 登録 and アプリの詳細. The AI feature label identifies the reading format. Its app-promotion copy introduces publisher breadth and practical benefits including coupons and weather. [Live homepage](https://www.smartnews.com/).

Company writing emphasises trustworthy information and encounters with perspectives beyond one's own. The CEO message explicitly joins technology with human judgment. For a design derived from these sources, explain what a feature does and retain attribution to publishers. No universal notification, error-copy or anti-clickbait style policy was verified. [Mission](https://about.smartnews.com/en/mission/), [CEO message](https://about.smartnews.com/en/about/message.html).

## Agent Prompt Guide

- “Build the measured Japanese SmartNews header action as a 40px-high link with 5px corners, 11px 25px padding, `#0099eb` fill and a `#ffffff` 12px/700 label. No authored hover or pressed change was observed.”
- “Build the outlined subscription link at 130×42px, 5px corners, 11px 10px padding, 12px/700 label, black-at-87% foreground and a 1px black-at-40% border over its surrounding hero.”
- “Build the header keyword input at 96×18.6px, zero padding and radius, 12px/400 and black-at-87% foreground. Focus narrows it to 60px; blur restores 96px. No font family is specified.”
- “Build the lead story around photography and the measured transparent-to-black-at-80% gradient, with white-at-87% text and a small AI label. Use the measured wrapper dimensions for this desktop composition.”

These prompts translate the measured components in §4; they do not specify native channel tabs, loading states or a new font family.
