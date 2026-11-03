---
name: Laftel
colors:
  primary: '#816bff'
  primary-hover: '#6e58ff'
  brand: '#816bff'
  canvas: '#ffffff'
  foreground: '#121212'
  muted: '#8a8a8a'
  surface: '#242537'
  hairline: '#eeeeee'
  accent-wash: '#f0edff'
  red-300: '#f16361'
  on-primary: '#ffffff'
typography:
  title-xxl:
    fontSize: 40px
    use: Declared web title-xxl size
  title-xl:
    fontSize: 32px
    use: Declared web title-xl size
  title-l:
    fontSize: 28px
    use: Declared web title-l size
  title-m:
    fontSize: 24px
    use: Declared web title-m size
  title-s:
    fontSize: 20px
    use: Declared web title-s size
  text-l:
    fontSize: 18px
    use: Declared web text-l size; shared md button recipe uses 18px/700
  text-m:
    fontSize: 16px
    use: Declared web text-m size
  text-s:
    fontSize: 14px
    fontWeight: 700
    use: Declared web text-s size; measured desktop navigation
  text-xs:
    fontSize: 13px
    use: Declared web text-xs size
  text-xxs:
    fontSize: 12px
    use: Declared web text-xxs size
  base:
    fontSize: 16px
    lineHeight: 1.5
    use: HTML/body font-size and global reset line-height declarations
  header-action:
    fontSize: 14px
    fontWeight: 800
    lineHeight: 1.5
    use: Measured login/signup link
rounded:
  sm: 4px
  md: 4px
  lg: 8px
  login: 18px
components:
  nav-membership:
    type: button
    textColor: '#121212'
    rounded: 0px
    height: 21px
    padding: 0px
    typography: 14px / 700
    hover: 'fg #816bff'
    pressed: 'fg #816bff; no additional change from hover'
    use: 멤버십 is a link to /membership. Transparent on the white scrolled header; initial hero-header ink is white. No changed keyboard-focus style was measured.
  login-link:
    type: button
    textColor: '#121212'
    rounded: 18px
    height: 36px
    padding: 0px 14px
    typography: 14px / 800
    hover: 'fg #816bff; background rgba(0, 0, 0, 0.02); opacity 0.8 to 1'
    pressed: 'fg #816bff; background rgba(0, 0, 0, 0.02); opacity 1; same as hover'
    use: 로그인/가입 is a link. Transparent at rest on the white scrolled header, with element opacity 0.8; initial hero-header ink is white. No changed keyboard-focus style was measured.
  anime-card:
    type: card
    textColor: '#121212'
    rounded: 0px
    height: 167.6px
    padding: 0px
    typography: 11.901px / 400
    hover: 'Preview mounts: compared descendants increase from 15 to 48; link paint and geometry remain unchanged'
    pressed: Same preview as hover; no additional change
    use: Link to /?modal=47332, 전생 고블린인데 질문 있어?, first daily-rail instance. Transparent on the white page; 221.7px wide. Radius and font describe the anchor, not the thumbnail or preview. No changed keyboard-focus style was measured.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Laftel

## Overview

### Visual Theme & Atmosphere

Laftel is an anime streaming and discovery service built around its audience's enthusiasm for animation. Its company page describes a place to enjoy works, communicate and express that enthusiasm; it also describes recommendations, original productions and merchandise. Its developer-authored app description calls it Korea's largest specialist anime service and says its catalogue is supplied through legal contracts with official anime importers. The company describes data-based recommendations; its wit article also documents collections assembled by the operations team. [Collection-design account](https://blog.laftel.net/post/46). [Company](https://laftel.oopy.io/), [publisher's app description](https://apps.apple.com/kr/app/%EB%9D%BC%ED%94%84%ED%85%94/id1169440095).

The live homepage combines large illustrated hero artwork with white discovery rails, dark text and vivid purple accents. White navigation overlays the hero; the captured scrolled header uses dark text on white. Thumbnail rows, weekday circles and small status badges carry most of the discovery interface. The measured homepage is the Korean-language surface at `laftel.net/` (`lang="ko"`), with no regional redirect.

The brand's design evolution is unusually well documented. Its dark-mode account describes separating stable Basic colours from paired Theme colours and replacing inconsistent bitmap icons with reusable vectors. Later writing develops restrained, accessible humour around its mascot Pooming while preserving essential information. This gives the interface a recognisable fan voice without making functional instructions depend on knowing a particular anime. [Dark-mode account](https://blog.laftel.net/post/11), [wit guide](https://blog.laftel.net/post/46).

#### Primary tasks

- Discover titles through tag search, weekday releases and themed collections.
- Explore membership, events, the merchandise store and the LOOP menu visible in navigation.
- Watch across supported devices; the app description documents opening/ending skips, next-episode autoplay and offline downloads. These features were documented, not activated during capture.

### Brand Narrative

Laftel's company history records the start of comics/anime recommendations in **2014**, the start of anime OTT in **2017**, and a **2024** launch across six Southeast Asian countries. Its current company page connects viewing with original animation, merchandise, crowdfunding and collaboration events. These milestones explain a product that combines discovery and playback with a wider fan ecosystem. [Company history](https://laftel.oopy.io/).

Its dark-mode project is a concrete account of design-system development: the team inventoried existing colours, removed unused entries, standardised icons and separated fixed Basic colours from switchable Theme colours. The article describes the app rollout and says web dark mode was still being prepared at the time of writing; current product CSS now contains explicit web light/dark declarations. [Project account](https://blog.laftel.net/post/11).

### Principles

Laftel publishes four product-design principles. The following English descriptions paraphrase those named principles rather than inventing a replacement set. [Design principles](https://blog.laftel.net/post/17).

1. **Make anime fans happy:** understand the audience's interests and context and provide an environment for enjoying them.
2. **Be logical and clear:** design with a hypothesis, a purpose and attention to users' circumstances as well as business and content-provider constraints.
3. **Add witty details:** use humour and the Pooming character to build affinity through small interactions.
4. **Be familiar, innovate where needed:** keep typography, icons and components consistent while allowing a useful exception when rigid consistency would harm usability.

### Personas

The UX-writing workshop identifies its target audience as anime-loving fans in their teens and twenties. This is a documented writing target, not a validated set of demographic or purchasing personas; individual ages, occupations and purchasing behaviours were not established. [Workshop](https://blog.laftel.net/post/10).

## Colors

The survey found 47 computed root custom properties: 46 colour/theme properties and RGB companions, plus the viewport utility `--safe-vh`. The stylesheet walk found those 46 theme declarations and two local ranking properties. These are Laftel's own semantic namespaces, not a framework colour scale.

### Basic palette

The current first-party production bundle declares this purple ramp:

| Name | Value |
|---|---|
| PURPLE50 | `#f0edff` |
| PURPLE100 | `#d9d3ff` |
| PURPLE200 | `#c0b5ff` |
| PURPLE300 | `#a797ff` |
| PURPLE400 | `#9481ff` |
| PURPLE500 | `#816bff` |
| PURPLE600 | `#7963ff` |
| PURPLE700 | `#6e58ff` |
| PURPLE800 | `#644eff` |
| PURPLE900 | `#513cff` |

`#816bff` is the primary/brand accent. `#6e58ff` is the **declared shared primary-button hover**; the homepage hero button is a separate white treatment. RED300 is `#f16361` and RED500 is `#ff1010` in the Basic palette. The captured card's UP badge uses RED500.

### Theme pairs

The light column was computed in the survey. Both columns are declared in the current homepage's CSS; the dark column was not rendered in a separate capture.

| Semantic property | Light | Dark |
|---|---|---|
| `--background-1` | `#ffffff` | `#121212` |
| `--background-2` | `#f7f7f7` | `#000000` |
| `--background-3` | `#eeeeee` | `#323232` |
| `--background-4` | `#e2e2e2` | `#505050` |
| `--background-toast` | `#000000` | `#242537` |
| `--border-1` | `#eeeeee` | `#323232` |
| `--border-2` | `#e2e2e2` | `#505050` |
| `--foreground-1` | `#121212` | `#f7f7f7` |
| `--foreground-2` | `#505050` | `#e2e2e2` |
| `--foreground-3` | `#8a8a8a` | `#ababab` |
| `--foreground-4`, `--foreground-disable` | `#d0d0d0` | `#636363` |
| `--foreground-slight` | `#816bff` | `#ffffff` |
| `--button-slight-1` | `#f0edff` | `#323232` |
| `--button-slight-2` | `#d9d3ff` | `#505050` |
| `--button-disable` | `#eeeeee` | `#323232` |
| `--button-purple-gray` | `#191b2a` | `#242537` |

The highlight is `#f0edff` in light mode and `rgba(129, 107, 255, 0.1)` in dark mode. Dim 1 is `rgba(0, 0, 0, 0.5)` / `rgba(0, 0, 0, 0.7)`; Dim 2 is `rgba(0, 0, 0, 0.3)` / `rgba(0, 0, 0, 0.7)`. The `surface` token here refers specifically to the dark toast/purple-grey value `#242537`; the captured page canvas is white. Primary labels use `#ffffff`.

Body-text foreground is supported by the paragraph census: `rgb(18, 18, 18)` occurred on all 76 counted paragraphs. Purple led the nontransparent background counts (37), while dark text led text counts (115). This separates the accent's frequency from the body-ink role.

## Typography

### Evidence classes

- **Official product-use statement:** no company-authored prose naming a product font was located. The family below is established by the live product capture.
- **Live-loaded:** `document.fonts` recorded **Pretendard 400, 500, 600, 700 and 800**, normal style. The body and first button declare Pretendard first; no H1 was present in the census. The login/signup link actually computes to 14px/800.
- **Official distributed assets:** no Laftel-authored font package was found. Its current product stylesheet imports Pretendard v1.3.6 from jsDelivr's `orioncactus/pretendard` distribution. That CSS defines local faces plus WOFF2/WOFF URLs and identifies the SIL Open Font License 1.1. The capture does not distinguish a local face from a downloaded font file.
- **Declared-only:** that distribution also defines weights 100, 200, 300 and 900, none listed as loaded in this capture. The product CSS lists platform and language fallbacks after Pretendard; their names are declarations, not evidence of use. The separate `slick` face is a carousel-library asset and is not a Laftel UI family. These unobserved faces receive no specimen.
- **Unresolved:** a separate monospaced product face and any custom Laftel typeface were not established. **Substitute: none chosen.**

### Scale and typesetting

The current shared source retains the named web size scale from the prior reference:

| Token | Declared size |
|---|---:|
| title-xxl | 40px |
| title-xl | 32px |
| title-l | 28px |
| title-m | 24px |
| title-s | 20px |
| text-l | 18px |
| text-m | 16px |
| text-s | 14px |
| text-xs | 13px |
| text-xxs | 12px |

This size map does not assign a weight or line height to every role. Its neighbouring named weight map contains regular 400, medium 500 and bold 700; the live interface also uses 800. Keep role-specific weights instead of imposing a 700 ceiling.

The global CSS declares 16px on `html, body`, line-height 1.5 and normal letter spacing in its reset, with `-webkit-font-smoothing: antialiased` on body. The captured desktop nav is 14px/700 with a 21px line height; login/signup is 14px/800 with the same line height. Homepage content scales through an em-based container, so its actual control sizes can be fractional: the weekday's visible label is 17.8515px/700, despite the button element inheriting 11.901px/400.

## Layout

Use the illustrated hero and horizontal title rails as the main composition. The survey viewport shows a weekday selector above landscape thumbnails; later rows contain themed collections, rankings, events and originals. The card is a link containing artwork, status badges and a title, with richer information revealed by its hover preview.

The desktop header is declared 4rem/64px high with 3.125rem/50px horizontal padding; the logo's measured left edge is 50px. Navigation links have a declared 24px gap and a 40px leading separation from the logo area. The header fixes to the top and changes its treatment between hero and scrolled content.

Homepage content uses its own fluid em scale: the first rail's card starts at x=37px and measures 221.7px wide in the capture. Its scaling expression uses a 1920px reference width; that is not evidence of a 1920px maximum page width. Verified spacing examples include 12px/16px toast padding and the header's 24px/40px/50px dimensions. A named universal spacing scale was not established.

### Responsive Behavior

The current source defines max-width queries at 1280px, 1024px, 768px and 480px, plus landscape max-height **575.98px**. The desktop header is hidden at max-width 1024px, where the mobile header's CSS uses flex layout. These are declaration checks; only desktop was rendered for this re-verification.

The carousel declares a 51.375em height, switching to 30em at max-width 480px. Its font-size expression is `calc(16vw / (1920 + var(--scroll-bar-width)) * 100)`, switching to `calc(16vw / (360 + var(--scroll-bar-width)) * 100)` for mobile. The source also switches from landscape to portrait hero artwork at the mobile breakpoint. The hero button is hidden at that mobile breakpoint.

The viewport meta declares `maximum-scale=1`; that is a source observation. The served Slick stylesheet supplies `touch-action: pan-y` and transparent tap highlights to its slider. Those are library rules, not Laftel colour or spacing tokens. No touch-device interaction was measured.

## Elevation & Depth

The scrolled-header ancestor computes to `rgb(238, 238, 238) 0px 1px 0px 0px`, matching the declared `0 1px 0 0 var(--border-1)` hairline shadow. The measured control elements themselves have `box-shadow: none` at rest.

Theme declarations retain Basic shadow `rgba(0, 0, 0, 0.25)` light / `rgba(0, 0, 0, 0.5)` dark and dropdown shadow `rgba(0, 0, 0, 0.16)` / `rgba(0, 0, 0, 0.6)`. These are colour parameters, not complete shadow geometries. Dim values are listed in §2.

Laftel's own body-scrollbar CSS specifies an 8px thumb radius, 4px transparent border and `background-clip: content-box`. Ranking-selector survey controls use 9999px pill radii; the weekday circles use 50%. The skeleton's declared gradient runs through Background 3 → Background 1 → Background 3, retaining Background 3 at the final stop; its background size is 200% 100%.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

Every measured control's own computed transition string is `all 0s ease 0s`. No independent press-only effect was observed on the three changing controls. The capture's settling scan detected a longer transition around the nav, whose surrounding header CSS declares `transition:color 0.4s` and `transition:background-color 0.4s,box-shadow 0.4s`; this is not a measured 0.4s transition on the nav link itself.

Other verified source declarations are `transition:opacity 0.2s ease,transform 0.2s ease` for the toast, `animation:feNQrH 1.4s linear infinite` for spinner rotation, `animation:afdXk 1.4s ease-in-out infinite` for its circle, and `animation:kRqsxJ 1.5s infinite linear` for skeletons. The skeleton uses `background-size:200% 100%`. These source declarations do not establish visible toast timing or a universal duration scale.

---

**Evidence:** measured homepage survey and state capture, 2026-11-03; [live homepage](https://laftel.net/); [company/history](https://laftel.oopy.io/); [design principles](https://blog.laftel.net/post/17); [dark-mode account](https://blog.laftel.net/post/11); [UX writing](https://blog.laftel.net/post/10); [wit and state examples](https://blog.laftel.net/post/46). Exact raw paths, production-source URLs and prior-content dispositions are in `verification.md` and `report.md`.

## Components

### Measured product controls

Measurements are from the 1440×1000 desktop capture. Transparent control backgrounds are described here and omitted from machine `bg` fields.

| Control | Rest identity | Hover and held press | Keyboard focus |
|---|---|---|---|
| **멤버십** nav link | 36.3×21px, radius 0, padding 0, 14px/700; white over the hero, `#121212` on the white scrolled header | On the scrolled header, ink becomes `#816bff`; press adds no further change | Tab #4: no computed change |
| **로그인/가입** link | 93.9×36px, radius 18px, padding 0 14px, 14px/800; transparent, opacity 0.8; white over hero, `#121212` on white scrolled header | `#816bff` ink, `rgba(0, 0, 0, 0.02)` background, opacity 1; press is identical | Tab #9: no computed change |
| **전생 고블린인데 질문 있어?** card link | 221.7×167.6px, anchor radius 0, padding 0, inherited 11.901px/400, transparent on white, title ink `#121212` | An expanded preview mounts: compared descendants 15 → 48, including additional images and SVG controls; anchor paint and size stay unchanged; press is identical | Tab #34: no computed change |
| **업로드 공지** | 80×29.8px, radius 2.97526px, padding 0 11.901px, white background, 1px `#e2e2e2` border; visible label `#505050`, 11.901px/700 | No computed change | Tab #26: no computed change |
| **월** weekday selector | 44.6×44.6px, radius 50%, padding 0, `#d0d0d0`; visible label white, 17.8515px/700 | No computed change; this is not the selected-day state | Tab #27: no computed change |
| **보러가기** hero CTA | 113.8×44.6px, radius 2.97521px, padding 8.92562px 13.3884px 8.92562px 17.8512px; white with `#121212` label at 17.8512px/700 | **UNMEASURED**: its carousel slide became `pointer-events:none` | Tab #10 reached it; no computed change |

The first three controls have measured state changes and are registered as components. The unchanged upload/day controls and pointer-unmeasured hero remain reference prose. No search input appeared in the homepage survey; a search icon was visible. No authored or browser-auto focus ring was reported for these six controls.

### Declared shared button recipes

The current shared production source still declares these recipes. They are useful construction references, but no instance of these shared variants was state-measured here.

- **Primary md:** `#816bff` background, `#ffffff` text, no border, 4px radius, 56px height, 0 18px padding, 18px/700. Its CSS hover is `#6e58ff`.
- **Primary sm:** same colours, border and radius; 48px height, 0 20px padding, 16px/700.
- **Slight md:** same md geometry; light background `#f0edff`, ink `#816bff`, declared hover `#d9d3ff`. Theme properties supply the dark counterpart.
- **Disabled primary/slight:** declared light background `#eeeeee`, ink `#d0d0d0`, cursor default; the dark pair is `#323232` / `#636363`. No disabled state was captured.
- **Hero recipe:** separate from shared primary buttons, with a declared white-to-70%-white hover. Its em-based dimensions resolve to the fractional values above. The declaration is not a measured pointer state.

### Badge and toast declarations

The header's **N/new marker**, visible beside LOOP, is purple with white 10px/700 type, 17px height/minimum width, 150% line height and 50% radius.

The dormant toast CSS declares 4px radius, 16px 12px padding, minimum height 48px, 14px text and white ink on `--background-toast` (`#000000` light / `#242537` dark). The survey's fixed list includes an empty toast; no visible toast or dismissal timing was exercised.

### States

For measured interactions, use the exact outcomes in §4: purple navigation ink; the login link's ink/background/opacity change; the card preview mounted on hover and retained during held press. All six keyboard landings produced no compared style change; no focus token is inferred.

For published product-state guidance, the wit article describes Pooming in empty-state illustrations, with grey Pooming for empty components and coloured Pooming for general guidance. It explains an isekai-themed full-screen error and a 404 that routes users back into mystery-tag discovery. These are documented examples, not states triggered during this capture. [State-design examples](https://blog.laftel.net/post/46).

The current CSS also declares a 32×32px purple spinner, skeleton shimmer, themed disabled button colours and a hidden toast. These are source declarations; no loading, disabled or toast-success flow was exercised.

## Do's and Don'ts

These are application guidance derived from the captured interface and Laftel's published design writing.

- Use purple for the shared primary action and selected accents; preserve the separate white hero CTA treatment.
- Distinguish immutable Basic colours from paired Theme colours. The team's dark-mode account specifically avoids simple inversion of artwork and already-dark areas.
- Use Pretendard with the weight appropriate to the role: 700 nav labels and 800 login/signup are both present.
- Match the actual component radius. Shared buttons/toast use 4px, while the header action uses 18px and weekday controls are circular.
- Keep the information legible before adding a joke; do not make essential instructions depend on a niche reference.
- Do not treat carousel-library fonts, generic fallback declarations or an arbitrary 700 weight limit as brand rules.

## Voice & Tone

Laftel's UX-writing guide defines a friendly, witty companion who understands anime fans. Its stated goals are clarity, brevity, usefulness and consistency. Use accessible language, avoid packing multiple actions into one sentence, and give the user a clear next step. Financial interactions can use a more trust-oriented tone. [UX-writing guide](https://blog.laftel.net/post/10).

The later wit guide makes the boundary more explicit: lead with information, keep jokes short and understandable to casual fans, and avoid ridicule. Payment terms, legal notices and credential errors prioritise factual instructions. [Wit guide](https://blog.laftel.net/post/46).

The publisher's current App Store subtitle retains **“세상 모든 애니를 라프텔에서 :D”**. Treat that as a documented tagline, not a rule that all interface text should include emoticons.

## Agent Prompt Guide

Build a Laftel-style anime discovery page with an illustrated hero, thumbnail rails, weekday circles and purple status accents. Use the light canvas `#ffffff`, foreground `#121212`, purple `#816bff` and the paired Theme colours for mode-sensitive surfaces. Set the desktop header to 64px with 50px side padding and 14px/700 navigation.

For the captured header action, use a transparent 36px-high link with 18px radius, 0 14px padding and 14px/800 Pretendard. On its white scrolled-header context, change `#121212` ink to `#816bff`, opacity 0.8 to 1 and background to `rgba(0, 0, 0, 0.02)` for hover and held press. A thumbnail-card hover should reveal richer preview content. Keep essential messages clear; add brief, broadly understandable fan humour where the information still stands on its own.
