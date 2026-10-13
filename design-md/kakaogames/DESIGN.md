---
name: 카카오게임즈
colors:
  ink: '#000000'
  hero-on-dark: '#ffffff'
  footer-muted: '#898989'
typography:
  hero:
    fontSize: 50px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
    use: Homepage desktop hero title only.
  section-title:
    fontSize: 34px
    fontWeight: 600
    letterSpacing: 0px
    use: Homepage section heading only.
  footer:
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: 0px
    use: Homepage footer information only.
rounded:
  none: 0px
  news-item: 4px
spacing:
  card-bottom: 40
components:
  home-game-card:
    type: card
    rounded: 0px
    padding: 0px 0px 40px
    use: home::div.card; static homepage game-card wrapper, observed at 248px × 437px.
  home-hero-arrow:
    type: button
    backgroundColor: rgba(255, 255, 255, 0.05)
    rounded: 0px
    padding: 0px
    height: 60
    states: Default on the prev/next pair (capture 1, 2), 60px × 60px; the bundle holds no state frame for any element, so hover, focus, and pressed values are not recorded.
    use: home::[data-omd-capture="1"] (.btn-arrow.btn-arrow--prev) on the homepage hero; its font size is 0px, so no label style is claimed.
  home-slide-control:
    type: tab
    backgroundColor: transparent
    padding: 0px 10px
    size: 330px x 60px
    states: rest on three hero control-bar buttons (capture 4-6); capture 3 carries class active, but none of its captured properties differs from theirs and the capture holds no opacity, so no selected value is declared; the bundle holds no state frame
    use: Homepage hero slide control (button.swiper-controlbar__btn) at home::[data-omd-capture="4"]; its own font size is 0px, so its label sits in an unsampled child and no label style is claimed
  home-game-filter-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    padding: 0px
    height: 43px
    typography: 34px / 600 / normal SUIT Variable
    states: rest on two filter buttons (capture 13, 14); capture 12 carries class active, but none of its captured properties differs from theirs and the capture holds no opacity, so no selected value is declared; the bundle holds no state frame
    use: Homepage game-category filter button inside li.game-filter__item at home::[data-omd-capture="13"], 60 x 43
  notice-bar-title-link:
    type: button
    textColor: '#000000'
    size: 70px x 25px
    typography: 20px / 400 / normal SUIT Variable
    states: default on the homepage (capture 32) and the error page (surface-2 capture 2); the bundle holds no state frame
    use: 'Notice-bar title link (a) inside h1.notice-bar__title at home::[data-omd-capture="32"]; the ticker items beside it are p elements at #000000, 16px / 300 / 16px'
  notice-bar-slide-button:
    type: button
    backgroundColor: transparent
    size: 26px x 26px
    states: default on the prev/next pair on the homepage (capture 33, 34) and the error page (surface-2 capture 3, 4); the bundle holds no state frame
    use: Notice-bar prev/next button (button.btn-slide) at home::[data-omd-capture="33"]; its font size is 0px, so no label style is claimed
  footer-text-button:
    type: button
    backgroundColor: transparent
    textColor: '#898989'
    padding: 0px
    height: 20px
    typography: 14px / 300 / 19.6px SUIT Variable
    states: default on two footer buttons on the homepage (capture 46, 47) and the error page (surface-2 capture 16, 17); the bundle holds no state frame
    use: Footer information-line text button (button.btn-text) at home::[data-omd-capture="47"]; capture 46 adds class underline, which the capture does not confirm as a text decoration
  error-outline-link:
    type: button
    backgroundColor: transparent
    border: '1px #e0e0e0'
    rounded: 4px
    size: 318px x 78px
    states: default on the error page (surface-2 capture 1; the second error capture repeats it); the bundle holds no state frame
    use: Error-page outline link (a) at surface-2::[data-omd-capture="1"]; its own font size is 0px and its colour is the browser-default link blue, so its label sits in an unsampled child and no label style is claimed
  home-news-card:
    type: card
    textColor: '#000000'
    rounded: 4px
    size: 650px x 230px
    typography: 24.48px / 600 / 35.496px SUIT Variable
    states: default on two news items; the bundle holds no state frame
    use: 'Homepage news item (li.news-box__item): radius and size sit on the li; text colour and type come from its title paragraph (home::p, 540 x 71), which holds all of the item text'
  home-media-card:
    type: card
    textColor: '#000000'
    padding: 18px 0px 18px 28px on the caption
    size: 423px x 291px
    typography: 16px / 400 / 16px SUIT Variable
    states: default on three media items; the bundle holds no state frame
    use: 'Homepage media item (li.media-box__item): size sits on the li; colour, padding and type come from its caption paragraph (home::p, 423 x 52), which holds all of the item text'
fonts:
  roles:
    ui: SUIT Variable
---

# Design System Inspiration of 카카오게임즈

## Overview

### Visual Theme & Atmosphere

카카오게임즈 is a Korean publisher and developer that operates mobile, PC online, and console games across casual, subculture, and hardcore MMORPG genres. Founded in Korea in 2016, the company’s current official account describes a global studio-and-partnership model rather than a single-platform game label. Its public homepage expresses that broad catalogue through a high-contrast editorial shell: oversized black type, image-led game promotion, stark white hero copy, and restrained utility text instead of a persistent product-dashboard language. The current evolution documented by the company is expansion of its global development and publishing reach through studios and multiple platforms; the sources reviewed do not document a separate visual-identity rebrand. [Official company profile](https://kakaogames.com/en-us/about/)

**Key Characteristics:**

- A global games portfolio, not a single authenticated gameplay interface
- Black-led public typography with white hero copy and quiet gray footer information
- Image-led homepage promotion paired with large category labels
- Measured public marketing and error-surface values kept distinct from unobserved in-game interfaces

### Primary tasks

- Browse the publisher's game titles and company information
- See which games the publisher is currently promoting
- Read the company's account of its founding and global reach

### Brand Narrative

Kakao Games says it was founded in Korea in 2016 and has grown into a global comprehensive gaming company with offices in Europe, Japan, and other regions. Its stated operating scope combines publishing, development studios, and partnerships across mobile, PC online, and console games. [Official company profile](https://kakaogames.com/en-us/about/)

Its published mission, “Uniting the World Through Games,” positions games as cultural content that connects people across regions and environments. The company’s public account of its current direction emphasizes high-quality content for global users, varied genres, and expansion beyond a single platform. This narrative is company context, not proof of any unobserved visual token.

### Principles

1. **Challenge through new experiences.** The company describes innovation, technology, and new opportunities as ways to deliver distinctive gaming experiences. *UI implication:* do not translate this into an unverified novelty visual treatment.
2. **Connection across players and regions.** The official values describe global player community and listening to players. *UI implication:* keep locale, community, and accessibility decisions evidence-led per product surface.
3. **Expansion across genres and platforms.** The company presents a portfolio that reaches beyond one platform or genre. *UI implication:* do not force every title into one generic game UI pattern.
4. **Joyful creation.** The corporate-culture statement links team creativity and joy to player enjoyment. *UI implication:* use this as narrative context, not an invented component or motion rule.

### Personas

These are stakeholder archetypes derived from the company’s published audience and operating scope, not synthetic research personas.

- **Global player:** seeks games across different genres and platforms; product-specific needs remain unverified here.
- **Studio or publishing partner:** participates in Kakao Games’ development-and-partnership model; no partner portal UI is captured.
- **Portfolio visitor:** browses public information about titles and the company; this is the surface the supplied evidence covers.

## Colors

- **Ink** (`#000000`): dominant observed public text and border color on all three supplied captures.
- **Hero on dark** (`#ffffff`): observed homepage hero title and subtitle text.
- **Footer muted** (`#898989`): observed footer information text.

The capture also exposes browser-default blue links (`#0000ee`) and transparent surfaces. Neither is promoted as a Kakao Games brand color: the first is not selector-backed brand treatment, and the second is not an opaque color token.

## Typography

### Evidence classes

- **Live computed surface-use:** **SUIT Variable** is the only loaded, high-confidence family in the supplied artifact. It has 224 observed uses across body, button, card, heading, list-item, and text roles, with a matching jsDelivr source URL. It is a public homepage/error-surface fact, not evidence for game-client UI.
- **Official distributed asset and license:** SUIT’s official repository licenses the font under SIL Open Font License 1.1. This establishes the font asset’s license boundary; it does not make SUIT a Kakao Games-owned typeface. [SUIT license](https://github.com/sun-typeface/SUIT/blob/main/LICENSE)
- **Declared-only:** `swiper-icons` is declared in the artifact but has zero visible usage. It is not a token.
- **Fallback context:** Apple system faces, AppleSDGothicNeo-Regular, Malgun Gothic, 맑은 고딕, dotum, and 돋움 occur after SUIT Variable in the captured declaration. They are fallbacks, never substitutes for SUIT.
- **Unresolved:** no official Kakao Games custom-font asset or in-game product-font declaration was found in the reviewed sources; none is inferred.

### Observed hierarchy

| Role | Family | Size | Weight | Line height | Boundary |
|------|--------|------|--------|-------------|----------|
| Homepage hero | SUIT Variable | 50px | 700 | 60px | `.title-main.only-pc` only |
| Homepage section title | SUIT Variable | 34px | 600 | normal | `.section__title` only |
| Homepage footer info | SUIT Variable | 14px | 300 | 19.6px | `.footer-info__item` only |

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.section-title.lineHeight`: `normal`

## Layout

The public homepage uses a promotional hero followed by content modules rather than an application shell. The captured game-card wrapper measures 248px × 437px in one homepage variant and carries 40px bottom padding. No authenticated game-client grid, inventory layout, player profile arrangement, or responsive breakpoint is asserted.

### Responsive Behavior

The supplied evidence contains 1440px-wide captures only. It does not establish mobile typography, breakpoints, touch-target rules, carousel behavior, or game-client responsiveness.

## Elevation & Depth

The representative homepage cards and controls have `box-shadow: none` in the supplied artifact. No elevation scale, modal treatment, floating panel, or in-game overlay shadow is established.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

No duration, easing curve, transition property, or animation-state value is preserved in the supplied evidence. The homepage includes carousel-related controls, but the artifact contains zero interaction snapshots, so its motion behavior is omitted.

## Components

### Homepage game card

**Observed default**
- Radius: 0px
- Padding: 0px 0px 40px
- Use: `home::div.card`; static game-card wrapper observed at 248px × 437px on the homepage.

### Homepage hero arrow

**Observed default**
- Background: `rgba(255, 255, 255, 0.05)`
- Radius: 0px
- Padding: 0px
- Height: 60px
- State: default on the prev/next pair (`home::[data-omd-capture="1"]` and `"2"`), 60px × 60px.
- Use: `home::[data-omd-capture="1"]` (`.btn-arrow.btn-arrow--prev`) on the homepage hero.
- Corrected 2026-09-30: the July record gave the arrow a text colour of `#000000` and cited `interactionCount` 0 as the reason no state was recorded. The arrow's font size is 0px and `#000000` is the page body's inherited colour, so that value described no visible label and is withdrawn; the interaction count covers expansions, not pointer states. The translucent fill was in the capture but unrecorded; it is added.

### Homepage hero slide control

**Default** (`home-slide-control`): transparent, `0px 10px` padding, 330px × 60px; `home::[data-omd-capture="4"]` to `"6"` (`button.swiper-controlbar__btn`) in the hero control bar. The button's own font size is 0px, so its label sits in a child the capture did not sample and no label style is claimed. The button with class `active` (`"3"`) records the same captured values as its siblings, and the capture holds no opacity, so no selected value is declared.

### Homepage game filter

**Default** (`home-game-filter-tab`): text `#000000`, `34px / 600 / normal SUIT Variable`, no padding, 60px × 43px; `home::[data-omd-capture="13"]` and `"14"` inside `li.game-filter__item`. The button with class `active` (`"12"`) records the same captured values, so no selected value is declared.

### Notice bar

**Title link** (`notice-bar-title-link`): text `#000000`, `20px / 400 / normal SUIT Variable`, 70px × 25px; `home::[data-omd-capture="32"]` inside `h1.notice-bar__title`, repeated on the error page (`surface-2::[data-omd-capture="2"]`). The ticker items beside it are `p` elements at `#000000`, `16px / 300 / 16px`.

**Prev/next buttons** (`notice-bar-slide-button`): transparent, 26px × 26px; `home::[data-omd-capture="33"]` and `"34"` (`button.btn-slide`), repeated on the error page. Their font size is 0px, so no label style is claimed.

### Footer text button

**Default** (`footer-text-button`): transparent, text `#898989`, `14px / 300 / 19.6px SUIT Variable`, 20px high; `home::[data-omd-capture="46"]` and `"47"` (`button.btn-text`) in the footer information lines, repeated on the error page. `"46"` also carries class `underline`; the capture records no text decoration, so none is claimed.

### Error-page outline link

**Default** (`error-outline-link`): transparent, border 1px `#e0e0e0`, `4px` radius, 318px × 78px; `surface-2::[data-omd-capture="1"]`, which the second error capture repeats. The link's own font size is 0px and its colour is the browser-default `#0000ee`, so its label sits in an unsampled child and no label style is claimed.

### Homepage news and media items

**News item** (`home-news-card`): `li.news-box__item` with a `4px` radius at 650px × 230px (two items). Its title paragraph holds all of the item text at `#000000`, `24.48px / 600 / 35.496px SUIT Variable`.

**Media item** (`home-media-card`): `li.media-box__item` at 423px × 291px (three items). Its caption paragraph (423px × 52px) holds all of the item text at `#000000`, `16px / 400 / 16px`, with `18px 0px 18px 28px` padding.

The bundle holds no hover, pressed, or focus frame for any Kakao Games element (zero `::state-*` samples on all three captures) and no interaction record, so no pointer or focus state is declared anywhere in this reference. Two `active` classes (hero control bar, game filter) carry no measured difference, so no selected treatment is declared either. Anchors whose own colour is the browser-default `#0000ee` (game-card, footer-menu, social, and certificate links) keep their visible labels in unsampled children and are not promoted.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://kakaogames.com/; https://kakaogames.com/error/; https://kakaogames.com/en-us/about/; https://github.com/sun-typeface/SUIT/blob/main/LICENSE
**Tier 2 sources:** https://getdesign.md/kakaogames (attempted; no usable Kakao Games record returned); https://styles.refero.design/?q=kakaogames (attempted; no usable Kakao Games style record returned)
**Conflicts unresolved:** none

### States

No visual empty, loading, error, success, skeleton, disabled, or selected treatment is established by the supplied capture; the two `active` classes in §4 carry no measured difference. The `/error/` route is a public utility surface, but it does not provide selector-backed error-component styling in this evidence bundle. Absence of a measured state is not a license to fill it with a generic pattern.

## Do's and Don'ts

### Do

- Keep public catalogue surfaces typographically direct and image-led.
- Use SUIT Variable only where the public-surface provenance is appropriate.
- Preserve the documented 40px card-bottom spacing and square corners for the captured game-card wrapper.
- Treat the 60px arrow as a default-only public control.

### Don't

- Do not recast browser-default blue links as a brand token.
- Do not substitute a system fallback and call it SUIT Variable.
- Do not use public homepage components as evidence for a game client, account system, store, or gameplay HUD.
- Do not invent hover, focus, pressed, disabled, error, or success styles from this capture.

## Voice & Tone

The official company profile frames games as cultural content that can connect people across regions and describes its mission as “Uniting the World Through Games.” Its values center on challenge, connection, and expansion. That supports a global, energetic, and inviting corporate register; it is not a verified in-game localization or microcopy system. [Official company profile](https://kakaogames.com/en-us/about/)

| Do | Don't |
|----|-------|
| Lead with the game, platform, or community value. | Claim a player-facing phrase is official when it is not in a reviewed source. |
| Make global reach concrete through genres, platforms, or collaboration. | Reduce diverse titles to one genre or audience. |
| Keep corporate language clear and outward-looking. | Invent an in-game tone guide from the corporate mission. |

Illustrative, not official UI copy: “Discover a new world to play together.” · “Find your next adventure across platforms.” · “Share the game with players everywhere.”

## Agent Prompt Guide

Use this reference for the observed Kakao Games public web shell, not for a game UI. Start with black `#000000` text, white `#ffffff` hero text when it sits on an existing dark/image field, SUIT Variable, square card geometry, and no shadow. Preserve the source boundary: do not generate in-game navigation, combat HUDs, account flows, store states, or interaction variants as though they were captured facts.

## Governance

### Known Gaps

- **Contrast, `home-game-filter-tab`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
