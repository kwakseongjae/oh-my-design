---
name: KRAFTON
colors:
  primary: '#000000'
  brand: '#000000'
  canvas: '#000000'
  foreground: '#ffffff'
  on-primary: '#ffffff'
  muted: '#777777'
  language: '#a2a2a2'
  news-date: '#999999'
  panel: '#ffffff'
  pubg-hover: '#f2a900'
typography:
  nav:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.3
    use: Header About link; live Zalando Sans Expanded, 23.4px line-height
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.7
    use: Noto Sans card-anchor wrapper, 23.8px line-height; visible labels have their own sizes
  selector:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    use: EN language link; live Poppins, 19.5px line-height
  games-heading:
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.2
    use: KRAFTON GAMES link; live Zalando Sans Expanded, 72px line-height
  recruit-label:
    fontSize: 24px
    fontWeight: 600
    use: Visible KRAFTON RECRUIT label; label family was not separately captured
  news-label:
    fontSize: 20px
    fontWeight: 500
    use: Visible first news-card label; label family was not separately captured
  footer-link:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.2
    use: Noto Sans footer contact/location links; not the copyright
rounded:
  none: 0px
components:
  language-en:
    type: button
    textColor: '#a2a2a2'
    rounded: 0px
    height: 19.5px
    padding: 0px
    typography: 13px / 400
    hover: 'fg #ffffff; white 2px ::after underline scaleX 0 to 1'
    pressed: same as hover; no further measured change
    use: 'EN language link on #000000; transparent background omitted. Poppins. Keyboard focus showed no change within the probe scope.'
  recruit-card:
    type: card
    textColor: '#ffffff'
    rounded: 0px
    height: 342.3px
    padding: 0px
    typography: 24px / 600
    hover: thumbnail wrapper scale 1 to 1.1; arrow translateX 5px; label background underline 0% to 100% by 2px
    pressed: same visible label and hover effects; wrapper browser-link colour change excluded
    use: 'KRAFTON RECRUIT link on #000000; 580px wide, transparent background omitted. Font is the visible label; anchor wrapper is 14px/400.'
  news-card:
    type: card
    textColor: '#ffffff'
    rounded: 0px
    height: 364.1px
    padding: 0px
    typography: 20px / 500
    hover: thumbnail wrapper scale 1 to 1.1; label background underline 0% to 100% by 2px
    pressed: same visible label and hover effects; wrapper browser-link colour change excluded
    use: 'First DefaultPost news link on #000000; 381.3px wide, transparent background omitted. Font is the visible label; anchor wrapper is 14px/400.'
  studio-card:
    type: card
    textColor: '#000000'
    rounded: 0px
    height: 355px
    padding: 49px 30px 34px
    typography: 24px / 600
    hover: 'bg #f2a900; visible title/copy #ffffff; inner top rule black to white; arrow appears and translates from -20px to 0; logo layers swap opacity'
    pressed: same visible hover treatment; wrapper browser-link colour change excluded
    use: 'PUBG STUDIOS link, 300px wide. Parked pointer baseline is transparent over #ffffff; initial capture had a white self background. Background omitted. Font is the visible title; wrapper is 14px/400.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Noto Sans
    display: Zalando Sans Expanded
    latin: Poppins
    cjk-loaded: Noto Sans SC
---

# Design System Inspiration of KRAFTON

## Overview

### Visual Theme & Atmosphere

KRAFTON discovers and publishes games through a global network of creative studios. Its own company page dates its establishment to 2007 and identifies Korea as its headquarters. PUBG: BATTLEGROUNDS, inZOI, Subnautica and TERA are among the properties it lists. [Company source](https://press.krafton.com/About-KRAFTON).

The corporate homepage gives that portfolio a large, dark stage: black ground, white navigation, wide display lettering and a red hero carrying the Pioneer the Undiscovered slogan. The red is visible in the captured hero artwork; no numeric red token was extracted from that artwork. Imagery and studio identity supply further colour. In particular, the PUBG STUDIOS card changes to gold on hover. This is a dark interface with coloured brand and game expression, rather than an entirely monochrome identity. [Measured surface](https://www.krafton.com/).

KRAFTON's August 2026 publishing statement describes a push across original worlds, distinct creative studios and established franchises. It connects that direction to challenging genre conventions and developing existing franchises in new ways. The homepage's separate news, recruitment, games and studio areas give this broad portfolio distinct entry points. The statement supports the current business direction; the layout description comes from the live capture. [Current evolution](https://press.krafton.com/en-GB/KRAFTON-SHARES-ITS-VISION-FOR-BUILDING-GLOBAL-FRANCHISES-AT-GAMESCOM-2).

The measured homepage is the Korean edition at `krafton.com/` (path `/`, HTML `lang="ko-KR"`); it did not redirect to another regional path.

#### Primary tasks visible on the homepage

- Follow a news card or the News heading.
- Open the recruitment and People & Life cards.
- Browse game and studio links.
- Enter IR or change language through the header links.

These are observed destinations. Filtering jobs, reading a studio subpage and using the IR content were not exercised.

### Brand Narrative

The company dates its establishment to 2007. Its current company information names PUBG STUDIOS, Bluehole Studio, Striking Distance Studios, Unknown Worlds and Neon Giant within a broader global studio network. [Company information](https://press.krafton.com/About-KRAFTON).

The August 2026 statement presents five forthcoming titles across different genres as examples of its publishing direction. For a design reference, the useful connection is the coexistence of a consistent corporate frame with distinct studio and game expression. That connection is an interpretation of the statement and measured homepage, rather than a quoted corporate design principle. [Publishing statement](https://press.krafton.com/en-GB/KRAFTON-SHARES-ITS-VISION-FOR-BUILDING-GLOBAL-FRANCHISES-AT-GAMESCOM-2).

### Principles

The following principles are inferred for reconstruction, rather than claimed as KRAFTON's published internal values.

1. **A consistent frame for distinct properties:** retain the common navigation, type hierarchy and card geometry while preserving the measured PUBG-specific accent.
2. **Interaction inside the card:** scale the thumbnail wrapper, extend the label underline and move the arrow without changing the outer card dimensions in the measured states.
3. **Surface-aware contrast:** the initial black frame and later white context require different visible text colours.
4. **Language as a compact utility:** KO/EN/CN/JP links are visible; preserve the measured Poppins treatment without assuming the other editions' typography.

### Personas

No user research was opened; the four prior illustrative personas and their behavioral claims remain unconfirmed.

## Colors

The initial homepage and its card areas use **`#000000`** with a dominant paragraph **foreground of `#ffffff`**: five sampled paragraphs were white and one black. Across capture phases, the games heading's pointer-pass baseline was black on a white surrounding surface, whereas the initial survey recorded white on black. Keep the surface and its text colour together.

| Colour | Verified use or boundary |
|---|---|
| `#000000` | Initial page ground; backdrop behind header, news and recruitment links; visible studio title at rest. |
| `#ffffff` | Initial navigation and paragraph foreground; visible news/recruitment labels; white studio-panel backdrop in the pointer pass. |
| `#a2a2a2` | Inactive EN/CN/JP language links; EN changes to white on hover and press. |
| `#777777` | Footer email and business-information links. |
| `#999999` | First news card's date. |
| `#393939` | One border sample in the colour census; its exact element was not identified, so it is not a universal divider specification. |
| `#f2a900` | PUBG STUDIOS card's measured hover/pressed background; a studio-specific accent, not a site-wide primary colour. |

The census also reports `rgb(102, 102, 102)`, `rgb(85, 85, 85)`, white at 10% opacity and white at 40% opacity. Those samples do not establish additional semantic roles. In particular, `#555555` occurs in the survey's carousel-arrow rows; it is not the dominant paragraph ink on this homepage.

The census includes one `#0a0a0a` background. The prior associated it with the consent banner, but this census does not identify that sample's selector, so the numeric presence is retained without reasserting the banner role. The banner's controls are excluded from the component set.

There are 54 computed and 54 declared custom properties. Of these, 53 are WordPress `--wp--preset--*` properties, excluded from the brand palette, typography, radius and shadow scales. The only remaining property is `--vh`: computed `10px`, declared `100%`. It is a viewport helper, not a reusable spacing scale. The colour roles above come from actual rendered styles, not from the WordPress preset names.

## Typography

### Evidence classes

**Official product use:** no opened KRAFTON design or typography document established a product-wide font policy. The following families describe the corporate homepage, without asserting that its games or applications use them.

**Live-loaded:** the census's `document.fonts` inventory reports these faces as loaded.

| Family | Loaded weights/styles | Serving evidence |
|---|---|---|
| Noto Sans | 300, 400, 500, 700; normal | Captured `@font-face` source lists point to `../fonts/NotoSansKR-{Light,Regular,Medium,Bold}` in WOFF2, WOFF and OTF. The CSS family name is **Noto Sans**, despite the KR filenames. |
| Noto Sans SC | 400; normal | Declared `NotoSansSC-Regular.woff2` with an OTF alternative in the captured declaration. Loading alone does not establish which script or control used it. |
| Poppins | 400, 500, 700; normal | Declared Regular, Medium and SemiBold paths, with WOFF2/WOFF/OTF alternatives. The SemiBold filename is assigned CSS weight 700; retain the captured CSS weight. |
| Zalando Sans Expanded | variable 200–900; normal | A Google Fonts CSS2 URL is present for normal/italic weights 200–900; the loaded inventory reports normal only. The cross-origin stylesheet was unreadable to the census. |

These are declared source lists: the capture does not expose resolved font request URLs or identify which format was fetched. Relative paths are retained as recorded.

The body and h1 declare a stack beginning with Noto Sans, followed by Noto Sans SC and Noto Sans KR. The generic button declaration begins with Noto Sans. These stacks are declarations; they do not prove that every named face loaded.

**Official distributed assets:** no public font-distribution or font-license page was opened successfully. The site stylesheet does declare `KRAFTON`, weight 400, normal, at `../fonts/KRAFTON_FONT.woff`. This establishes a declared resource path; it does not confirm that the file was fetched, that a distribution license exists or that an exclusive logotype rule applies.

**Declared-only:** KRAFTON is absent from the loaded inventory and has no specimen here. Noto Sans SC 300/500/700, Noto Sans JP 400/500/700 and Lato 300 also have declarations without loaded entries. Noto Sans KR is named in stacks, but is not a separately loaded family in this capture. The census lists local Zalando-named WOFF2 assets with empty family fields; those declarations cannot establish that the loaded Zalando face was self-hosted. Italic Zalando use was not loaded.

**Unresolved:** the prior 140px KRAFTON hero assignment, exclusive display use, proprietary status, 70px page-header title, inner-article type scale and SF Mono claim have no new confirming evidence. Substitute: none chosen.

### Measured scale

| Element | Family/assignment evidence | Size / weight | Line-height |
|---|---|---|---|
| Header About link | Zalando Sans Expanded, directly computed | 18px / 500 | 23.4px |
| KRAFTON GAMES link | Zalando Sans Expanded, directly computed | 60px / 700 | 72px |
| EN language link | Poppins, directly computed | 13px / 400 | 19.5px |
| Current KO language link | Poppins, survey | 13px / 700 | 19.5px |
| News-card anchor wrapper | Noto Sans, directly computed | 14px / 400 | 23.8px |
| Visible first news label | Child label computed; family not separately captured | 20px / 500 | Not separately captured |
| Visible recruitment and studio titles | Child labels computed; family not separately captured | 24px / 600 | Not separately captured |
| Footer location/contact links | Noto Sans, survey | 13px / 400 | 15.6px |

The wrapper's 14px size is not the visible news or recruitment label size. No family is inferred for a child from a wrapper that may be overridden.

## Layout

At a 1440×1000 viewport with a 1425px document area, the survey places the content at x≈113. The games heading spans 1200px. Recruitment cards are 580px wide at x=113 and x=733, leaving a 40px gap between them. The studio row comprises 300px-wide links at x=113, 413, 713 and 1013. These are measured desktop placements, not a recovered responsive container specification.

The fixed header is approximately 83px high. Its logo begins at x=59, outside the content's narrower alignment. Header navigation has 15px horizontal padding and 31px/29px top/bottom padding. Studio links use 30px horizontal padding, 49px top and 34px bottom padding. These local values are sufficient to reproduce the measured examples; no global spacing ramp was recovered.

### Responsive Behavior

Only desktop 1440×1000 was measured; no mobile breakpoint, accordion transformation, responsive type rule or mobile overlay value was re-verified.

## Elevation & Depth

All six measured link boxes have `box-shadow: none`, border-radius 0 and opacity 1 at rest. The news and recruitment cards obtain a visible interaction through image scaling and underline expansion. The studio card uses a solid colour change, logo layers and an entering arrow. Flat controls and image-led depth are appropriate reconstruction choices for these examples. A claim that no brand stylesheet contains shadows was not re-established.

## Motion & Easing

The following are raw computed transitions on the link itself, copied verbatim into the verification proof:

| Element | Computed transition | What the capture establishes |
|---|---|---|
| EN language link | `color 0.2s ease 0s` | Colour transition accompanying the grey-to-white change. |
| PUBG STUDIOS link | `background-color 0.2s ease 0s` | Background transition accompanying the gold hover/press treatment. |
| KRAFTON GAMES link | `color 0.3s ease 0s` | Declared colour transition; hover and press produced no change in that phase's comparison. |
| About, recruitment and news anchors | `all 0s ease 0s` | No duration on the anchor itself; descendant effects do not inherit this zero-duration conclusion. |

The card zoom, underline and arrow endpoint changes are measured. Their individual computed transition strings were not captured, so no child-motion duration or easing token is assigned. No reduced-motion behavior was measured.

## Components

Six links were measured with real hover, held pointer press and keyboard Tab focus. No search input or product primary/secondary button appeared in the homepage survey; the visible filled buttons belonged to consent and are excluded. The banner remained open. `hideOverlays: true` was supplied for the pointer pass, so the following are raw observations under that collector condition.

| Key / identity | Geometry and typography | Rest appearance |
|---|---|---|
| `nav-about`: header About | 93.5×83.4px; radius 0; padding 31px 15px 29px; Zalando Sans Expanded 18px/500 | Transparent over black; white label; no border or shadow. |
| `language-en`: header EN | 15.6×19.5px; radius 0; padding 0; Poppins 13px/400 | Transparent over black; `#a2a2a2`; no border or shadow. |
| `recruit-card`: KRAFTON RECRUIT | 580×342.3px; radius 0; padding 0; wrapper Noto Sans 14px/400, visible label 24px/600 | Transparent over black; visible label white; no outer border or shadow. |
| `studio-card`: PUBG STUDIOS | 300×355px; radius 0; padding 49px 30px 34px; wrapper Noto Sans 14px/400, visible title 24px/600 | Parked pointer baseline transparent over white, black title/copy; initial self background was white. Inner content has a 1px black top rule. |
| `games-link`: KRAFTON GAMES | 1200×72px; radius 0; padding 0; Zalando Sans Expanded 60px/700 | Initial white on black; pointer baseline black on white, transparent self background; no border or shadow. |
| `news-card`: first DefaultPost | 381.3×364.1px; radius 0; padding 0; wrapper Noto Sans 14px/400, visible label 20px/500 | Transparent over black; visible label white; no outer border or shadow. |

- **Language:** hover and press make the label white. The white 2px `::after` underline changes from a zero horizontal scale to full scale. Press adds nothing beyond hover.
- **Recruitment:** hover scales the thumbnail wrapper from 1 to 1.1, moves its arrow 5px right and extends the label's 2px background underline from 0% to 100%. Press retains those visible effects.
- **News:** hover scales the thumbnail wrapper from 1 to 1.1 and extends the label's 2px background underline from 0% to 100%. Press retains them. The captured underline is a black gradient, although the visible label is white.
- **PUBG studio:** hover and press set the background to `#f2a900`, title/copy and the inner top rule to white, swap the logo layers' opacity, and reveal an arrow whose horizontal translation changes from −20px to 0.
- **About and games heading:** no hover or press change within the compared scope. They remain prose examples and are omitted from machine components.

The recruitment, news and studio anchors have their own browser-default blue colour at rest and red while pressed. Their visible labels override it. These wrapper readings are not brand foreground or pressed-colour tokens.

### States

Hover and held press were measured on all six controls with `:hover` true; press also had `:active` true. Language, recruitment, news and PUBG studio links have the changes described in §4. About and the games heading had no change within the probe's self, pseudo-element and three-ancestor scope; their zero descendants were also recorded.

Keyboard focus was reached by Tab for every control. About, EN and the games heading showed no compared change. The recruitment/news image translations and the studio background/arrow changes persisted after blur; they are scroll, lazy-load or otherwise persistent effects, not focus-only styling. All six controls had `focusOnlyCount: 0`, no authored outline and no browser-default ring in the capture. No focus token is published.

Disabled, form error, success, active tab and empty-content states were not measured. Blank areas in the initial full-page screenshot are not treated as empty states: later control captures contain the relevant content.

## Do's and Don'ts

These are reconstruction guidelines derived from the measurements.

- Keep the initial dark surface and white text together; use black text when reproducing the white studio-panel context.
- Use Zalando Sans Expanded for the measured 18px header and 60px games heading, Poppins for the language links, and the site-loaded Noto Sans family for measured wrappers.
- Preserve square corners and the card geometry. Use the visible child label's colour and size.
- Give the PUBG studio link its measured gold hover treatment; do not generalize that colour to every action.
- Preserve the image zoom, underline expansion and recruitment-arrow movement on their respective card patterns.
- Keep declared-only KRAFTON metadata separate from live font specimens. Do not assign browser-default anchor blue/red to the brand palette.

## Voice & Tone

The homepage's slogan is a short imperative. Its supporting hero copy speaks in the first-person plural about players' dreams, imagination, technology, fans and worlds. This supports a direct, ambitious tone for a reconstruction. The prior first illustrative sample closely matches that visible copy; the other invented samples have no confirming source. No company-wide editorial rule is inferred from sentence length or tense. [Homepage](https://www.krafton.com/).

## Agent Prompt Guide

Build a corporate game-portfolio page with a black initial ground and white foreground. Use the loaded Zalando Sans Expanded face at 18px/500 for the main header links and 60px/700 with 72px line-height for the games heading. Set language links in loaded Poppins at 13px/400, grey `#a2a2a2`, turning white with a 2px underline on hover and held press. Preserve the separate red hero artwork without inventing its numeric colour or replacing it with a fabricated token.

For a recruitment link, use a square 580×342.3px card on black, a white 24px/600 visible label, a thumbnail wrapper that scales to 1.1, a 2px expanding label underline and an arrow that moves 5px right. For the PUBG studio link, use a 300×355px box with 49px 30px 34px padding over a white panel; hover changes the box to `#f2a900` and its title, copy and inner rule to white. Font families of those child labels require separate measurement before assigning one. Add no focus, disabled, error or success token from this capture.
