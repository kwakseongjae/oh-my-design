---
name: Frip
colors:
  primary: '#7a29fa'
  accent: '#f4373d'
  sale: '#ff3f33'
  magenta: '#e21d47'
  pink-tint: '#fff4f7'
  ink: '#000000'
  charcoal: '#333333'
  foreground: '#333333'
  near-black: '#111111'
  secondary: '#777777'
  muted: '#999999'
  faint: '#aaaaaa'
  canvas: '#ffffff'
  surface: '#fafafa'
  surface-alt: '#f4f4f4'
  divider: '#eeeeee'
  separator-fill: '#e6e6e6'
  border: '#dddddd'
  event-outline: '#e5e5e5'
typography:
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    use: Computed UI anchor metrics on the product-card and category-link wrappers; family starts with SUIT, but SUIT 400 is not in the loaded-face census
  cta:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Computed booking button and label on /products/121737; loaded-face limitations in section 3
  app-cta:
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-0.3px'
    use: Footer app-download link and visible label; SUIT 700 is live-loaded
  navigation-label:
    fontSize: 10px
    fontWeight: 400
    use: Visible category-label span, distinct from its 14px anchor wrapper
  numbered-pill:
    fontSize: 14px
    fontWeight: 400
    use: Numbered button 2 in the product survey; 22px computed line height; function not established as quantity selection
rounded:
  none: 0px
  xs: 3px
  sm: 5px
  md: 10px
  carousel: 16px
  pill: 20px
  event: 14px
spacing:
  sm: 6
  md: 10
  base: 16
  lg: 20
components:
  badge-exclusive:
    type: badge
    backgroundColor: '#f4373d'
    textColor: '#ffffff'
    use: Static 프립단독 badge below the price in the measured homepage product-card; rest colors only, geometry not remeasured
  badge-superhost:
    type: badge
    backgroundColor: '#7a29fa'
    textColor: '#ffffff'
    use: Static 슈퍼호스트 badge beside the exclusive badge below the measured product-card price; rest colors only
fonts:
  roles:
    display: SUIT
    body: SUIT
    fallback: UI Frip, Noto Sans KR
---

# Design System Inspiration of Frip

## Overview

### Visual Theme & Atmosphere

Frip (프립) is a Korean marketplace for hobbies, activities, classes and social outings, operated by Frientrip. Its own title calls it “대한민국 1등 취미여가 탐색 플랫폼”; that is the company's positioning, not an independently verified ranking. Frientrip's timeline records incorporation in November 2013, the Frip website launch in November 2014 and the app launch in March 2016. Its present team page describes experiences that connect people and become part of everyday life. [Company history and services](https://team.frientrip.com/)

The product expresses that idea through a bright, image-led commerce feed: a white `#ffffff` canvas, a photographic carousel, illustrated category shortcuts, shelves of experiences, ratings, prices and short badges. “주간 인기 BEST 🏆”, “신규 프립” and “기획전” make the feed easy to scan. Violet `#7a29fa` fills the booking button and the Superhost badge; red `#f4373d` distinguishes the exclusive badge. The ordinary product link has a square, borderless wrapper around a visibly rounded thumbnail. The tags in the measured card sit below its price.

The current homepage also gives SQNC an event shelf. Frientrip now describes SQNC as a separate global community wellness platform; on Frip's page its larger image card has a 14px radius and an inset outline. This is a visible extension of the homepage's content vocabulary, not evidence that Frip has been renamed or has adopted SQNC's entire design system. [Current service portfolio](https://team.frientrip.com/)

The measured homepage is the Korean surface at `www.frip.co.kr/`, with HTML `lang="ko"`; no regional redirect occurred. The product detail measured was `/products/121737`.

Primary tasks visible in these surfaces are browsing categories and curated shelves, searching for a hobby, opening an experience and its host profile, and reaching the “참여하기” booking action. Reservation completion and payment were not exercised.

### Brand Narrative

The first-party chronology distinguishes the Frientrip company from the Frip product: company formation precedes the website and app launches. The current portfolio places Frip's everyday hobbies, activities and gatherings alongside SQNC's global wellness communities. The live homepage's SQNC event shelf makes that broader portfolio visible within Frip's browsing experience. The evidence supports continuity around shared experiences; it does not establish a Frip rename or a dated visual rebrand. [Frientrip](https://team.frientrip.com/)

Frip also publishes writing about how its designers work. In “디자이너가 잘 실패하는 방법” (25 April 2022), product designer 유재웅 argues for realistic prototypes, feedback from others and testing assumptions before implementation consumes a sprint. This is useful process context for reproducing a connected browsing journey; it is not a specification for colors or motion. [Design article](https://medium.com/frientrip/디자이너가-잘-실패하는-방법-fbf9b6e2e8a0)

### Principles

The following applications distinguish first-party design writing from deductions about the captured surface.

1. **Connect experiences across the journey.** Frip's design article says users carry feelings and experiences between pages, and argues for prototypes close to the real service. Apply that by reviewing the category-to-card-to-detail flow together. [Design article](https://medium.com/frientrip/디자이너가-잘-실패하는-방법-fbf9b6e2e8a0)
2. **Make the next action legible.** The measured product detail gives one large violet booking button a fixed strip. Preserve that hierarchy in a reproduction; it is an observed layout choice, not proof of a brand-wide one-color rule.
3. **Let content establish the browse rhythm.** The homepage repeats image, title, rating and price in four-card shelves. Preserve this ordering and compact geometry when building a comparable desktop shelf.
4. **Use evidence at the element level.** The ordinary card wrapper is square and borderless, while the SQNC card has rounder corners and an inset outline. A single corner or elevation treatment would erase a real distinction.

### Personas

No first-party persona study was verified; no fictional names, ages, locations or behavioral profiles are included.

## Colors

These are computed colors from the live product, not an official published palette. No custom properties were computed on the document root. The 28 properties declared under `.socialting-v2-root` are a separate scoped set and are not used as global homepage tokens here.

| Role | Value | Observed evidence |
|---|---|---|
| Booking violet / primary | `#7a29fa` | Product booking button; static Superhost badge in the homepage card |
| Exclusive red / accent | `#f4373d` | Static 프립단독 badge, with white text |
| Sale red | `#ff3f33` | Homepage text census, 15 occurrences; discount percentages visible in the survey screenshot |
| Magenta | `#e21d47` | Homepage text census, 4 occurrences; a precise reward-label mapping was not re-established |
| Foreground / charcoal | `#333333` | Homepage paragraph ink, 20 paragraphs; app-download background and search text |
| Ink | `#000000` | Ordinary product-card title; product-page paragraph census is predominantly black |
| Secondary | `#777777` | Region label in the measured product card |
| Muted | `#999999` | Homepage paragraph ink, 3 paragraphs; other low-emphasis text |
| Faint | `#aaaaaa` | Visible category-navigation label |
| Near-black | `#111111` | Homepage background census, 4 occurrences; no universal overlay role inferred |
| Canvas | `#ffffff` | Page ground, event-card background and light text on the booking button/badges |
| Light surface | `#fafafa` | Homepage background census, 20 occurrences |
| Alternate surface | `#f4f4f4` | Search form's initial background |
| Pink tint | `#fff4f7` | Homepage background census, 4 occurrences; no universal promo-band rule inferred |
| Divider | `#eeeeee` | The product card's internal 1px rule; homepage border census, 45 occurrences |
| Separator fill | `#e6e6e6` | Homepage background census, 40 occurrences; this does not establish an outer card border |
| Border | `#dddddd` | 1px border of the product page's numbered pills |
| Event outline | `#e5e5e5` | SQNC card's inset 1px box shadow |

The homepage's most frequent sampled paragraph ink is charcoal, not black. The product page's paragraph census differs: black appears in 206 paragraphs, including the long listing content. Keep those surfaces distinct. Neither census proves an exclusive brand rule about where a color may appear.

## Typography

**Official product-use statement:** no opened Frip brand or design document names a product typeface. The following evidence is from the live site.

**Live-loaded:** the homepage loaded **SUIT 500, 600 and 700**, **UI Frip normal and bold**, and **Noto Sans KR 400 and 700**. The product detail loaded the same families, with SUIT 500 and 700 in its census. The homepage also loaded `slick normal normal`, a carousel utility face; it is excluded from the product typography family tokens.

The declared body/button stack starts with `SUIT`, followed by `UI Frip` and `Noto Sans KR`. The product H1 declares the same stack; no H1 was present in the homepage census. SUIT's three readable face rules point to same-origin OTF assets: `/d268ef2e6022a28433d0f44a46c95ae1.otf` (500), `/705cc83c374237b4e191ae92f3bbaef5.otf` (600) and `/9ac209e78c1c9b484163de8dbf40565d.otf` (700). UI Frip normal and bold likewise have same-origin OTF sources. Noto Sans KR is requested through the Google Fonts stylesheet linked in the homepage HTML; the stylesheet was unreadable to the CSS rule walk, although those faces were loaded.

**Official distributed assets:** no public Frip font-download package or font-license statement was verified. Runtime OTF declarations establish source paths, not permission to redistribute them.

**Declared-only:** Pretendard 100–900, UI Frip 500, Cafe24 Ohsquare 700 and Cafe24 Ohsquareair are present in readable face declarations but absent from the loaded-face census. Other system-family names in the CSS stack have no loaded-face proof here. They receive no specimen and are not added as substitutes.

**Unresolved:** the controls request weight 400 with a stack starting in SUIT, but no SUIT 400 face appears in either loaded census or the readable face declarations. This capture does not resolve the exact face chosen for every glyph at that request. It does not justify naming a SUIT Regular asset. No specimen is supplied for an unloaded face. **Substitute: none chosen.**

| Measured element | Size / requested weight | Line height | Tracking |
|---|---|---|---|
| Ordinary card and category anchor wrappers | 14px / 400 | 21px | normal |
| Visible category label | 10px / 400 | Not separately captured | Not separately captured |
| Search input | 14px / 400 | 22px | normal |
| Booking button and its label | 16px / 400 | 24px | normal |
| App-download link and label | 12px / 700 | 18px | -0.3px |
| Numbered pill button “2” | 14px / 400 | 22px | Not captured |
| SQNC card's “추천” label | 12px / 600 | Not separately captured | Not separately captured |

These are element metrics. No new measurement establishes the prior section-heading, product-title, discount or badge type scales, so those metrics are absent.

## Layout

At the measured 1440×1000 viewport, the homepage's carousel and main content span 768px from x=336 to x=1104. Ordinary shelf cards are 180.8px wide with left positions 336, 532, 728 and 923px: a four-card row with approximately 15px gaps after coordinate rounding. Thumbnails precede region, title, rating, price and badge information. A separate SQNC shelf uses a 374px-wide event card, and magazine links are 249.3px wide in the survey.

The product page pairs its lead image and title/host information across the main column. Its fixed white booking strip is 92px high and spans the viewport; the centered content includes the 716×56px violet action plus a favorite control.

Measured padding values include 16px on the booking button, 6px 10px on the carousel counter, 7px 15px on numbered pills, and 20px 20px 12px on the product inquiry link. The retained spacing numbers 6, 10, 16 and 20 are samples from these elements, not proof of a global base-unit scale.

Measured radii include 0px on wrappers and the app-download link, 3px on footer contact links, 5px on favorite-button wrappers, 10px on the booking action, 14px on the SQNC event card, 16px on the carousel counter and 20px on numbered pills. No frequency claim or global full-circle token is inferred.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; breakpoints, mobile rearrangement and touch behavior remain unverified.

## Elevation & Depth

The ordinary product-card wrapper, category link, search input, app-download link and booking button report `box-shadow: none`. White space, imagery and small separators carry much of the composition. There are nevertheless measured exceptions:

| Element | Raw computed treatment |
|---|---|
| Booking strip, second ancestor of the button | `rgba(0, 0, 0, 0.08) 0px -10px 30px -10px` |
| SQNC event card | `rgb(229, 229, 229) 0px 0px 0px 1px inset` — `#e5e5e5` |
| Ordinary card's favorite image | `filter: drop-shadow(rgba(0, 0, 0, 0.4) 1px 1px 3px)` |
| Homepage carousel counter | `background-color: rgba(0, 0, 0, 0.4)`; 16px radius, 6px 10px padding |

The result is restrained elevation, with a shadow separating the fixed booking strip and an inset line outlining the larger event card. A universal ban on shadows would misrepresent the product.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`
- `shadow.booking-bar`: `rgba(0, 0, 0, 0.08) 0px -10px 30px -10px`
- `shadow.event-card`: `rgb(229, 229, 229) 0px 0px 0px 1px inset`

## Motion & Easing

The original six controls and all six follow-up controls have the raw computed control-level transition `all 0s ease 0s`. The follow-up category shortcut's focus-settle record reports a longest transition of 200ms somewhere in the inspected scope; its property and full computed transition string were not captured, so it supplies no motion token. No authored cubic-bezier curve, carousel timing or reduced-motion behavior was established.

---

**Sources:** [Live homepage](https://www.frip.co.kr/), [measured product detail](https://www.frip.co.kr/products/121737), [company history, services and legal footer](https://team.frientrip.com/), [terms naming the operator](https://www.frip.co.kr/static-info/agreement), [Frip publication](https://medium.com/frientrip), [onboarding and culture](https://medium.com/frientrip/프립-탐험가들이-온보딩하는-방법-b2ff1d067adb), [design process](https://medium.com/frientrip/디자이너가-잘-실패하는-방법-fbf9b6e2e8a0). Captured 2026-11-03 KST; detailed raw evidence and the prior-content dispositions are in the accompanying verification and report.

## Components

**Booking action — “참여하기”.** On `/products/121737`, the fixed booking button is 716×56px, with a 10px radius, 16px padding, `#7a29fa` background, white `#ffffff` text, no border and no shadow on the button itself. Its label requests 16px/400. Keyboard focus produced no computed style change. Hover and pressed were unmeasured because an open search layer intercepted the pointer. Its rest geometry is useful reference material; an authored interactive state token is absent.

**App-download action — a link.** The footer's “앱 다운로드” link is 768×45px, square, with zero padding, `#333333` background and white text. Its 12px/700 label has 18px line height and -0.3px tracking. It has no border or box shadow. Hover, pressed and keyboard focus showed no computed change within the probe's comparison scope.

**Search.** The actual input is 322×24px at initial rest, with zero radius, 1px 2px padding, transparent background, no border, and `#333333` text. It sits inside a rounded light-gray search form. The form, rather than the input, provides the visible chrome. Its parent background starts at `#f4f4f4`. The persistent expanded-search observation is described in §14.

**Navigation — links, not tabs.** The category anchor is 48×51px, square, transparent over white, unpadded and borderless. Its own computed color is black and font is 14px/400; the visible label span is **10px/400 in `#aaaaaa`**. The header also exposes 피드, 메시지, 찜 and 마이 links. No selected-category state was exercised.

**Homepage category shortcut and shelf link.** The separate illustrated “클래스” category link is 60×83px, with zero radius and padding, a transparent wrapper over white, and no border or shadow. Its wrapper requests 14px/400 with 21px line height; the visible label is 12px/500 in `#aaaaaa`. The weekly shelf's “전체보기” link is 48.9×17.5px, also square, unpadded, transparent over white and borderless, with black 14px/400 text and 18px line height. Keyboard focus showed no computed change on either. Their hover and pressed states remain unmeasured because the search scrim covered them, including with the probe's overlay-hiding option enabled.

**Ordinary experience card — a link.** The measured `/products/121737` homepage anchor is 180.8×348.8px, zero radius and padding, transparent over white, with no outer border or box shadow. Its title is black; its region label is `#777777` at 10px/400 and its price is `#333333`. A 1px `#eeeeee` rule separates the price area. The thumbnail above the title is visibly rounded, but its exact radius was not captured. The link disappeared before hover/pressed reads and was not reached by the Tab walk.

**Static badges.** In that card, 프립단독 is `#f4373d` with white text and 슈퍼호스트 is `#7a29fa` with white text. They sit beside each other below the price. Their rest colors are retained in the component registry; their prior font, padding and radius were not remeasured.

**SQNC event card — a link on the Frip homepage.** The running-event anchor is 374×467.5px with a 14px radius, zero padding, a white base and no CSS border. Its computed black wrapper color is not the visible title color: the title descendant is white over the image/gradient. The card has an inset outline described in §6. Hover, pressed and keyboard focus showed no computed change.

**Numbered pills.** Product survey buttons labelled “2”, “3” and other numbers have white backgrounds, `#333333` text, a 1px `#dddddd` border, 20px radius, 7px 15px padding and 36px height. Button “2” is 60.3px wide. These are buttons; this observation does not identify them as booking-quantity inputs. Their interaction states were not measured.

The homepage carousel counter “1 / 8” is a 28px-high button with a 16px radius, 6px 10px padding, `rgba(0, 0, 0, 0.4)` background and `#cccccc` text at 12px/700 with 16px line height.

**Collections carousel pagination.** The separate dot button labelled “2” is 13×13px, with zero wrapper radius, 5px padding, transparent background and text, no border or shadow, and a computed 0px/400 font with 0px line height. Its visible `::before` dot is 5×5px. The samples show `rgb(51, 151, 255)` when its parent is `li.slick-active` and `rgb(238, 238, 238)` when the parent is `li`. The color change during the pressed sample coincided with that class change and also occurred in the earlier keyboard after-blur sample; it is not established as an authored press style.

### States

“No change” below means no settled computed-style or DOM-attribute change in the probe's scope: the control, its descendants and pseudo-elements, plus three ancestor levels. It is not a pixel-level proof of every possible response.

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| App-download link | No change | No change | No change, Tab 117 |
| Category link | No change | No change | No change, Tab 6 |
| Search input | No change against the pointer pass baseline | No change against the pointer pass baseline | Input width 322→320px; parent gray→white and gains a blue border, all persisting after blur |
| Ordinary product link | Unmeasured: vanished | Unmeasured: vanished | Unmeasured: not reached |
| SQNC event link | No change | No change | No change, Tab 58 |
| Booking button | Unmeasured: search layer covered target | Unmeasured: search layer covered target | No change, Tab 98 |

The search parent changed from `#f4f4f4` to `#ffffff`, with border `none` → `1px solid rgb(0, 117, 239)`. The same values remained after focus moved elsewhere, and the screenshot shows an expanded popular-search panel and page scrim. Record this as a persistent expanded-search observation, not a brand focus token. The later booking pointer pass was intercepted by `div.sc-pItiW.jWobOj`; its rest and keyboard reads remain separate evidence.

No authored focus ring was established. No empty-result, loading, skeleton, validation-error, booking-error, booking-success or disabled-booking treatment was verified. The two static badge colors are retained; interactive component state tokens are absent.

The homepage follow-up used one new states capture. Valid `:hover` and `:active` snapshots confirmed no computed changes on app download and search against their pointer baselines. The “클래스” and weekly “전체보기” links had unchanged keyboard focus; their pointer passes stayed covered. The separately targeted `/products/193078` card measured 180.8×336.8px at rest, with zero radius and padding, a transparent wrapper over white and black 14px/400 wrapper text, then vanished from the probe's tracked DOM and was not reached in 125 Tab presses. The carousel-dot pressed delta is retained as a raw observation with changing selection, not a press token. Search again retained all three changes after blur. This follow-up established no additional authored interaction state for the component registry.

## Do's and Don'ts

These are implementation recommendations derived from the measured examples, not published Frip brand rules.

- Reproduce the booking action's violet, white label, 56px height and 10px corners.
- Keep the ordinary shelf card's wrapper borderless; put its small badges below the price as captured.
- Separate the nav wrapper's inherited black color from its visible gray 10px label.
- Use the observed gray levels for text hierarchy: charcoal paragraph ink, lighter metadata and faint navigation captions.
- Keep the ordinary shelf geometry distinct from the larger 14px-radius SQNC event card.
- Preserve the measured booking-strip shadow and the event card's inset outline when reproducing those surfaces.
- Do not create a hover, pressed or focus style from an unmeasured state or from a change that persists after blur.
- Do not supply a new font or claim that a SUIT 400 file loaded.

## Voice & Tone

The observed copy is invitational and organized around experiences. The title claims a leading hobby/leisure discovery position; “참여하기” invites participation. The homepage pairs a trophy emoji with popular experiences, speaks of crew reviews and offers curated experiences. New-listing links include “신규프립 에너지x2”. This is an editorial reading of the actual copy, not an official tone guide. [Live product](https://www.frip.co.kr/)

The English mission on Frip's publication is “WE INSPIRE PEOPLE TO EXPERIENCE THE WORLD”. Its 2022 onboarding article extends the exploration metaphor into staff culture through quests and guides. That corporate metaphor supports an experience-centered reading of the voice, but it does not prescribe checkout or error copy. [Publication](https://medium.com/frientrip), [Onboarding article](https://medium.com/frientrip/프립-탐험가들이-온보딩하는-방법-b2ff1d067adb)

No verified source establishes a forbidden register or a promise never to use urgency. Seller-authored listing titles are not treated as the company's complete editorial policy.

## Agent Prompt Guide

Use `#7a29fa` for the measured booking action, `#f4373d` for the exclusive badge, `#ff3f33` for observed discount text, `#333333` for homepage paragraph ink and the dark app-download bar, and `#ffffff` for the page ground. Use the role-specific observations in §2 rather than imposing a universal color policy.

- “Build the captured booking action: 56px height, 10px radius, 16px padding, violet background and white 16px/400 requested label. Put it in a fixed white strip with the measured upward shadow. Leave unmeasured pointer states unspecified.”
- “Create a four-card desktop experience shelf in a 768px content column. Use 180.8px borderless link wrappers, a thumbnail above the title, rating and price, a 1px light divider, and the red exclusive/purple Superhost badges below the price.”
- “Create the footer app-download link: square 45px-high charcoal bar, white 12px/700 label with -0.3px tracking; no measured style change on hover, press or keyboard focus.”
- “Build the category-navigation link as a 48×51px unpadded anchor whose visible caption is 10px/400 in faint gray. Keep wrapper metrics distinct from label metrics.”

Typography must follow the loaded-face boundaries in §3. No unverified responsive scale, animation curve or submission state is implied by these prompts.

## Governance

### Known Gaps

- **Contrast, `badge-exclusive`.** Text `#ffffff` on `#f4373d` measures 3.85:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
