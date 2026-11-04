---
name: Wavve
colors:
  canvas: '#1b1b1b'
  poster-fallback: '#252525'
  feature-surface: '#0b0b13'
  heading: '#ffffff'
  nav-rest: '#a5a5a5'
  footer-ink: '#717171'
  footer-border: '#2f2f2f'
typography:
  navigation:
    fontSize: 18px
    fontWeight: 400
    use: Header genre links; measured line-height 74px
  weekday:
    fontSize: 20px
    fontWeight: 400
    use: Weekday filter labels; measured line-height 28px
  feature-link:
    fontSize: 14px
    fontWeight: 400
    use: 자세히 보기 link; measured line-height 20px
  more-link:
    fontSize: 16px
    fontWeight: 400
    use: 더보기 section link; measured line-height 24px
rounded:
  navigation: 0px
  feature-link: 8px
  weekday: 12px
spacing:
  nav-inline: 10
  weekday-block: 12
  weekday-inline: 14
  feature-block: 8
  feature-inline: 16
  poster-gap: 10
components:
  nav-item:
    type: button
    textColor: '#a5a5a5'
    rounded: 0px
    height: 74px
    padding: 0px 10px
    typography: 18px / 400 Pretendard
    hover: 'fg #ffffff'
    pressed: 'fg #ffffff; no additional change from hover'
    use: '드라마 is a navigation link on #1b1b1b; transparent background omitted. Keyboard focus also whitens its text; the auto outline is browser-owned and has no token.'
  weekday-mon:
    type: button
    backgroundColor: rgba(255, 255, 255, 0.05)
    textColor: rgba(255, 255, 255, 0.4)
    rounded: 12px
    height: 52px
    padding: 12px 14px
    typography: 20px / 400 Pretendard
    hover: bg rgba(255, 255, 255, 0.1)
    pressed: bg rgba(255, 255, 255, 0.1); no additional change from hover
    use: Unselected 월 weekday filter button, width 52px, on the charcoal browse surface; focus only adds the browser auto outline.
  poster-card:
    type: card
    height: 360px
    padding: 0px
    hover: Inner image transform scale3d(1.04, 1.04, 1.04)
    use: '라이어 poster link, 240px wide on #1b1b1b; transparent background omitted. Link radius is 0px; image clipping radius was not measured. The image supplies the visible content, so inherited browser link ink is omitted.'
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Wavve (웨이브)

## Overview

### Visual Theme & Atmosphere

Wavve is a Korean streaming service for originals, overseas series, quick VOD and live channels. Its company history records POOQ opening in 2012 and Wavve launching in September 2019. The current product description brings light viewing and deeper immersion together under “JUST DIVE! Wavve.” The wave metaphor also appears in its officially distributed 웨이브 파도체: the company describes wave-inspired strokes and curves. [Company history](https://www.contentwavve.com/com/com-3.html), [developer-authored app description](https://play.google.com/store/apps/details?hl=ko&id=kr.co.captv.pooqV2), [official font introduction](https://event.wavve.com/2024-seasons-greetings/index.html).

The measured desktop browse surface places a white wordmark and quiet gray genre navigation above a large photographic billboard, shortcut tiles and horizontal poster rows. The surrounding canvas is charcoal `#1b1b1b`; artwork supplies the varied color. White text, neutral grays and small translucent controls keep the catalog legible without adding much chrome. A poster responds by enlarging its image inside the same link bounds. These are observations of the captured homepage, rather than a published statement of design principles.

The service continues to expand: its official history records a Wavve–TVING combined product in June 2025, CJ group affiliation in September 2025, an advertising-supported product in October 2025, and KLPGA/KPGA live golf in March 2026. The measured homepage is the Korean surface at `www.wavve.com/`, with HTML `lang="ko"`; it did not redirect to a regional path. [Company history](https://www.contentwavve.com/com/com-3.html).

#### Primary tasks

- Browse editorial and genre rows through poster links and section “더보기” links.
- Reach live channels through “라이브” in the header.
- Open search through the “검색” icon button.
- Filter the weekday-content row with the seven weekday buttons.

### Brand Narrative

The company's history starts with 콘텐츠 연합 플랫폼 in May 2012 and the POOQ service in July 2012; it records Wavve's September 2019 launch together with SKT equity participation and the company-name change. A 2021 SK Telecom interview also describes POOQ as Wavve's predecessor and terrestrial broadcasting and VOD as part of the service. These establish a broadcast-and-on-demand lineage without claiming that its present catalog, ownership or visual system is unchanged. [Company history](https://www.contentwavve.com/com/com-3.html), [historical SK Telecom interview](https://news.sktelecom.com/172337).

The same company history names MBC and SBS at the platform's formation in 2012 and KBS equity participation in 2014, documenting the broadcaster lineage alongside the later SKT milestone.

The current official product copy spans casual and immersive viewing, while the official font project extends the wave motif into letterforms and stationery. Recent service milestones include the combined TVING product, an advertising-supported offering and golf broadcasting. Together these give a builder concrete context for the visible genre navigation and catalog-first layout; they do not substantiate the prior claim that Wavve deliberately rejects competitors' black or red identities.

### Principles

The following are implementation observations from the homepage, not a company-published principles list:

1. Let large artwork lead the browse hierarchy; keep navigation and supporting controls compact.
2. Use the measured gray-to-white change for genre-link emphasis.
3. Give poster hover feedback through the inner image while preserving the row's link geometry.
4. Preserve the measured translucent control fills and the regular-weight Korean labels.

### Personas

No company-published personas or user research were verified; no demographic archetypes are asserted.

## Colors

The capture found no computed custom properties on `:root`. Its stylesheet walk found two site-specific declarations: `--nav-height: 74px` on `.body`, and `--wavveon-height: 34px` on `.body:has(.wavveon-menu-container)`. The other 52 declarations have the `--un-*` utility namespace and are excluded from Wavve's token set. The palette below comes from measured styles and the explicitly identified stylesheet declaration, not from an official published palette.

| Role | Value | Evidence and scope |
|---|---|---|
| Primary button declaration | `#1351f9` | Loaded product CSS: `.standard-content .button-area>.button.button-primary[data-v-6b926d79]{background:#1351f9}`. A matching primary CTA was not exercised in this capture. |
| Browse canvas | `#1b1b1b` | Computed background behind the header link, search button, poster link and section link. |
| Poster fallback | `#252525` | `div.thumb-image` inside the measured poster; also the most frequent solid background in the census. |
| Feature band | `#0b0b13` | Computed ancestor background of the first “자세히 보기” feature link; the band also carries artwork. |
| Headings and emphasized labels | `#ffffff` | Heading rows, feature-link text and hovered navigation text. |
| Resting navigation / search icon | `#a5a5a5` | Header link text and the search SVG's path strokes. |
| Footer ink | `#717171` | Footer company/help links in the survey. |
| Footer border | `#2f2f2f` | Borders on the footer notice-arrow buttons in the survey. |

The paragraph **foreground** sample is `rgba(255, 255, 255, 0.8)` on two `<p>` elements. Its alpha is retained in prose; it is not converted to an opaque white body-text token. “더보기” uses `rgba(255, 255, 255, 0.7)`. The unselected weekday button uses a 5% white background and 40% white text; hover and press raise the background to 10% white. The feature link rests on a 10% white fill. No semantic success, error or live-indicator palette was measured.

## Typography

### Evidence classes

- **Official product-use declaration:** the opened company pages do not name Pretendard as a prescribed product typeface. Its product use here is established by live loading and computed styles.
- **Live-loaded:** `Pretendard 400 normal`, `Pretendard 700 normal`, and `WavvePADO 400 normal` appear in the survey's loaded-face list. Body, first `h1`, and first button declare `Pretendard, sans-serif`. Only Pretendard is assigned the UI-family token, because the measured controls name it directly. The precise homepage element using WavvePADO was not identified.
- **Official distributed assets:** Wavve's Season's Greetings page offers 웨이브 파도체 and stationery through a linked distribution folder. It describes wave-inspired strokes and curves, permits commercial use, and excludes font sales and BI/CI use. The distribution link was not followed and no font file was downloaded. This is evidence of an official distribution, not a claim that every UI label uses that face. [Font introduction and usage conditions](https://event.wavve.com/2024-seasons-greetings/index.html).
- **Declared-only weights:** Pretendard 100, 200, 300, 500, 600, 800 and 900 are declared by `@font-face` but absent from this capture's loaded-face list. They receive no live specimen or measured-use claim.
- **Unresolved:** the prior named Apple SD Gothic Neo / Malgun Gothic / Noto Sans KR stack, a monospace role, and tabular-numeral behavior were not verified. Substitute: none chosen.

The loaded regular and bold Pretendard faces are served as same-origin WOFF2 subsets at `/static/Pretendard-Regular.subset-01dd7315.woff2` and `/static/Pretendard-Bold.subset-78eb71c3.woff2`. WavvePADO is declared at `/static/wavve-pado-regular-8216a05b.woff2`. These paths were recorded by the census; the files were not downloaded separately.

### Measured control typography

| Control | Size | Weight | Line height |
|---|---|---|---|
| Header “드라마” link | 18px | 400 | 74px |
| “월” weekday filter | 20px | 400 | 28px |
| Feature “자세히 보기” link | 14px | 400 | 20px |
| Section “더보기” link | 16px | 400 | 24px |

All four controls compute to Pretendard. The poster anchor inherits 16px/400, but its art is the visible content; its white 20px fallback label occupies a hidden, zero-size fallback region. Do not treat that fallback as a visible caption specimen. A complete heading, synopsis and metadata scale was not established.

## Layout

At the captured 1440×1000 viewport, the sticky header is 74px high. The wordmark and the first editorial row start at x=100px; the main billboard spans approximately x=100px to x=1340px in the viewport image. Large artwork leads, followed by image-based shortcut tiles and vertically stacked poster carousels.

The first editorial row has 240px-wide posters at x=100, 350, 600, 850 and 1100px: a measured 10px gap between adjacent link boxes. The next card begins at x=1350px and peeks beyond the row. That row's heading box begins at y=942px and its poster links at y=998px. This establishes the captured desktop arrangement, not a universal grid or spacing scale.

Use spacing by its measured role: 10px navigation inline padding; 12px/14px weekday-button padding; 8px/16px feature-link padding. The observed radii are 0px for navigation and section-link boxes, 8px for the feature link, and 12px for weekday buttons. They do not establish radii for dialogs, inputs or poster-image clipping.

### Responsive Behavior

Desktop 1440×1000 only: the loaded CSS declares `.body{min-width:1440px;width:100%;z-index:1;position:relative;min-height:100%}`, and the captured page shows horizontal overflow; mobile, tablet, TV and reduced-motion behavior were not measured. [Loaded product stylesheet](https://www.wavve.com/static/index-03d68dbb.css).

For historical context, SK Telecom's September 2020 anniversary article says the mobile main menu moved to the bottom to improve accessibility. This documents a past design decision; it does not establish today's mobile layout or any breakpoint. [Historical service-redesign account](https://news.sktelecom.com/126142).

## Elevation & Depth

The measured controls have no box shadow. The homepage separates its charcoal `#1b1b1b` field, `#252525` poster fallback and artwork-bearing `#0b0b13` feature band with color and imagery. Small controls add translucent white fills. The measured poster's hover enlarges the image within a fixed link box; it does not add a measured shadow, border or metadata overlay.

## Motion & Easing

All six control elements serialize the computed transition `all 0s ease 0s`. The poster comparison detected a longest transition of 150ms within its scope; its descendant's full computed transition string was not serialized, so no timing curve is assigned to the image zoom. No duration scale, billboard transition rule, spring policy or reduced-motion behavior was verified.

---

Measured 2026-11-03 with the worker capture tool, logged out. The survey's promotional popup was closed through `.popup-back a` before the state pass; no promotional CTA, sign-in or purchase action was activated. Full measurement provenance, limitations, prior-claim dispositions and narrative extracts are in `verification.md` and `report.md`.

## Components

### Genre navigation link

“드라마” is an anchor with a 66.7×74px box, 0px radius, `0px 10px` padding, no border or shadow, and a transparent background over `#1b1b1b`. Its 18px/400 text changes from `#a5a5a5` to `#ffffff` on hover, mouse-down and keyboard focus. Mouse-down adds nothing beyond hover. Keyboard focus also adds a browser `auto` outline; no brand focus-ring token is defined.

### Weekday filter button

The unselected “월” button is 52×52px with 12px radius, `12px 14px` padding, 20px/400 text and 28px line height. It has no border or shadow. Rest: `rgba(255, 255, 255, 0.05)` background and `rgba(255, 255, 255, 0.4)` text. Hover and mouse-down use `rgba(255, 255, 255, 0.1)` background; the text does not change. Keyboard focus adds only the browser outline. Selection was not activated.

### Poster link

The “라이어” anchor is 240×360px, a measured 2:3 proportion, with 0px anchor radius, 0px padding, no border and no shadow. A `#252525` thumbnail layer lies inside it. The image's clipping radius was not measured. Hover changes the inner `img.w-img.thumb-img` from `matrix(1, 0, 0, 1, 0, 0)` to `matrix3d(1.04, 0, 0, 0, 0, 1.04, 0, 0, 0, 0, 1.04, 0, 0, 0, 0, 1)`: an exact 1.04 scale, while the anchor stays 240×360px. Mouse-down retains that image transform. The anchor's inherited browser link color changes to browser active-link red during mouse-down; that is not a Wavve interaction color. Focus adds only the browser outline.

### Additional measured controls

These controls remain reference observations because their only changed state is the browser focus outline:

- **Search icon:** `button.search-button`, 22×25px box, 0px radius and padding, no border or shadow. The 22×22px SVG has two 2px strokes in `#a5a5a5`. The hidden “검색” text and button inherit black, which is not the visible icon ink. Hover and press show no computed change in the inspected scope.
- **Section link:** the first “더보기”, 61.5×34px, 0px radius, `5px 20px 5px 0px` padding, transparent fill, 16px/400 text in `rgba(255, 255, 255, 0.7)`, no border or shadow. Hover and press show no computed change in the inspected scope.
- **Feature link:** the first “자세히 보기”, 96×36px, 8px radius, `8px 16px` padding, 14px/400 white text, `rgba(255, 255, 255, 0.1)` background, no border or shadow. Hover and press show no computed change in the inspected scope.

A primary play/subscribe CTA and a search input were not present among the surveyed homepage controls. No login, player, watchlist, toast or account-panel component is inferred from the homepage.

### States

| Control | Hover | Mouse-down | Keyboard focus |
|---|---|---|---|
| “드라마” | Text `#a5a5a5` → `#ffffff` | Same white text; no additional change | White text, reverting after blur; browser `auto` outline |
| “월” | White background alpha 0.05 → 0.1 | Same 0.1 background; no additional change | Browser `auto` outline only |
| “라이어” poster | Inner image scale 1 → 1.04 | Same image scale; inherited browser active-link ink also changes | Browser `auto` outline only |
| “검색” | No computed change within inspected scope | No computed change within inspected scope | Browser `auto` outline only |
| First “더보기” | No computed change within inspected scope | No computed change within inspected scope | Browser `auto` outline only |
| First “자세히 보기” | No computed change within inspected scope | No computed change within inspected scope | Browser `auto` outline only |

Hover and active selectors matched at sampling. Comparisons include the control, its pseudo-elements, descendants and three ancestor levels. Search includes its SVG and two paths; poster comparison includes 15 descendants, five empty nodes and two image/source nodes. The tool does not compare pixels, video, sibling elements, closed shadow roots or cross-origin frame contents. Hover/pressed crops reported state loss during image capture; computed observations are retained, and those crops do not certify the state visually.

No disabled control, empty-result flow, playback error, success toast or skeleton was exercised.

## Do's and Don'ts

- Use the measured charcoal canvas and neutral navigation hierarchy when recreating this desktop browse surface.
- Keep the poster anchor's bounds stable while scaling its inner image to 1.04 on hover.
- Retain alpha values for weekday and feature-link fills instead of replacing them with guessed solid grays.
- Distinguish `#1351f9` in the primary-button stylesheet rule from an observed homepage CTA state.
- Do not turn the browser's `auto` outline, inherited link blue or active-link red into brand tokens.
- Do not extrapolate player, TV-focus, mobile, disabled or error treatments from these controls.

## Voice & Tone

The opened product description uses an energetic invitation: “언제든 풍덩~! 빠져들어봐!” alongside “JUST DIVE! Wavve.” The homepage's task labels are compact Korean strings such as “검색”, “라이브”, “더보기” and “자세히 보기”. These examples support concise navigation and a playful immersion metaphor; they do not establish a universal speech-level rule or a list of forbidden error phrases. [Developer-authored app description](https://play.google.com/store/apps/details?hl=ko&id=kr.co.captv.pooqV2).

The service terms use formal explanatory Korean. This is a documented legal register, without evidence that legal and billing copy are the only formal exceptions throughout the product. [Service terms](https://member.wavve.com/signup/terms?category=service).

## Agent Prompt Guide

“Build a Wavve-style desktop browse row on `#1b1b1b`. Use Pretendard for the UI. Align the first row at x=100px in a 1440px viewport, with 240×360px poster links and 10px gaps. Keep link bounds stable; enlarge the inner poster image to 1.04 on hover. Use 18px/400 genre links, resting `#a5a5a5` and white on hover. Add an unselected 52px weekday button with 12px radius, 20px/400 text, 5% white fill and 40% white ink; hover increases its fill to 10% white.”

This prompt reproduces the measured browse controls. Use the declared `#1351f9` primary rule only with its CSS evidence; no play/subscribe hover, pressed or disabled palette was established.

## Governance

### Known Gaps

- **Contrast, `weekday-mon`.** Text `#ffffff66` on `#ffffff0d` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
