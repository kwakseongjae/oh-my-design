---
name: Classum
colors:
  primary: '#ff4438'
  canvas: '#f6f6f9'
  surface: '#ffffff'
  ink: '#232334'
  body: '#333333'
  muted: '#666b80'
  on-primary: '#ffffff'
typography:
  marketing-body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    use: Repeated public-marketing text/card sample
  marketing-heading:
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.4
    use: Public-marketing H1/H2 sample
  action:
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.5
    use: Repeated public-marketing navigation action
rounded:
  control: 8px
  card-item: 12px
  card: 30px
spacing:
  xs: 6
  sm: 8
  md: 16
  card: 30
components:
  nav-primary-action:
    type: button
    backgroundColor: '#ff4438'
    textColor: '#ffffff'
    rounded: 8px
    padding: 6px 16px
    typography: 15px / 600 Pretendard Variable
    states: default only; no interaction state captured
    use: Public marketing navigation CTA; home::[data-omd-capture=4]
    height: 35px
    pressed: background-image linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) (:hover + :active)
  nav-outline-light:
    type: button
    textColor: '#ff4438'
    border: '1px solid #ff4438'
    rounded: 8px
    padding: 6px 16px
    typography: 15px / 600 Pretendard Variable
    states: default only; no interaction state captured
    use: Public marketing light-background navigation outline; home::[data-omd-capture=3]
  nav-outline-dark:
    type: button
    textColor: '#ffffff'
    border: '1px solid #ffffff'
    rounded: 8px
    padding: 6px 16px
    typography: 15px / 600 Pretendard Variable
    states: default only; no interaction state captured
    use: Public marketing dark-background navigation outline; home::[data-omd-capture=8]
  large-primary-action:
    type: button
    backgroundColor: '#ff4438'
    textColor: '#ffffff'
    rounded: 8px
    padding: 12px 34px
    typography: 18px / 600 Pretendard Variable
    states: default only; no interaction state captured
    use: Public marketing large CTA on home and learning routes; home::[data-omd-capture=17]
  university-grid-card:
    type: card
    backgroundColor: '#f6f6f9'
    textColor: '#333333'
    rounded: 30px
    padding: 30px
    typography: 14px / 400 Pretendard Variable
    states: default only; no interaction state captured
    use: University-LMS public-marketing grid card; university-lms::div.grid-card
  nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#232334'
    rounded: 0px
    padding: 0px 18px
    height: 64px
    typography: 15px / 600 Pretendard Variable
    states: 'rest captured on all three routes: six light-header copies (class on-white) and six dark-header copies; no state frame in the bundle'
    use: 'Header navigation link (a.nav-link.on-white), home::[data-omd-capture="1"]; line height 22.5px, tracking -0.6px. The dark-header copy (a.nav-link, home captures 6 and 7) computes fg #ffffff with the same geometry and type'
  medium-primary-action:
    type: button
    backgroundColor: '#ff4438'
    textColor: '#ffffff'
    rounded: 8px
    padding: 8px 24px
    height: 49px
    typography: 16px / 600 Pretendard Variable
    states: one captured at rest in the home hero; no state frame in the bundle
    use: Home hero primary action (a.primary-button.medium), home::[data-omd-capture="11"]; line height 24px
  white-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#232334'
    rounded: 8px
    padding: 12px 34px
    height: 51px
    typography: 18px / 600 Pretendard Variable
    states: 'captured at rest in three sizes: large (home capture 16), medium (home capture 10: 8px 24px, 49px, 16px / 600) and small (learning capture 10: 8px 16px, 43px, 18px / 600); no state frame in the bundle'
    use: White action on dark sections (a.primary-button.white-button), home::[data-omd-capture="16"]; line height 27px
  black-action:
    type: button
    backgroundColor: '#232334'
    textColor: '#ffffff'
    rounded: 8px
    padding: 12px 34px
    height: 51px
    typography: 18px / 600 Pretendard Variable
    states: one captured at rest on learning; no state frame in the bundle
    use: Dark action (a.primary-button.large.black-button) on the learning route, surface-2::[data-omd-capture="12"]; line height 27px
  gray-action:
    type: button
    backgroundColor: '#dadeea'
    textColor: '#272730'
    rounded: 8px
    padding: 0px 36px
    height: 49px
    typography: 18px / 600 Pretendard Variable
    states: one captured at rest on university-lms; no state frame in the bundle
    use: 'Grey action (a.primary-button.gray-button) in the university-LMS hero, surface-3::[data-omd-capture="10"]; it sits beside a #ff4438 action with the same padding and height (capture 11)'
  sitemap-link:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    rounded: 0px
    padding: 0px
    height: 29px
    typography: 18px / 600 Pretendard Variable
    states: ten per route captured at rest on all three routes (30 in all); no state frame in the bundle
    use: Footer sitemap link (a.sitemap-link) on the dark footer, home::[data-omd-capture="19"]; line height 28.8px
  copyright-link:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    rounded: 0px
    padding: 0px
    height: 18px
    typography: 12px / 300 Pretendard Variable
    states: two per route captured at rest on all three routes; no state frame in the bundle
    use: Footer legal link (class copryright-link, as spelled in the markup), home::[data-omd-capture="29"]; line height 18px
  feature-card:
    type: card
    backgroundColor: '#dadeec'
    rounded: 12px
    padding: 0px
    size: 563px x 456px
    states: 'four captured at rest on home (captures 12-15). The bundle holds 10 frames on them (hover and pressed on all four, focus on 14 and 15); none records a settled change: hover moves box-shadow from none to an alpha-0 colour, pressed to an alpha-0.004 colour, and focus is not declared from bundles'
    use: 'Home feature card (a.feat-item), home::[data-omd-capture="12"]. The anchor computes Chromium default link colour #0000ee and the 14px / 400 body type, which is container text, so no label style is declared'
  comparison-table-row:
    type: card
    backgroundColor: transparent
    textColor: '#666b80'
    border: '0px 0px 2px #333333'
    padding: 15px 0px
    height: 67px
    typography: 22px / 400 Pretendard Variable
    states: 18 rows captured at rest on university-lms; no state frame in the bundle
    use: 'Comparison table row (div.table-line) on university-lms, surface-3::div; the 2px #333333 border is on the bottom edge only; text colour and font are the row heading child (div.table-row-heading, line height 35.2px)'
fonts:
  roles:
    ui: Pretendard Variable
---

# Design System Inspiration of Classum (클라썸)

## Overview

### Visual Theme & Atmosphere

Classum’s current public business site presents an AI-focused education offer for universities and corporate HR: the official home frames it as LMS, consultation, and skill solutions, while the university route focuses on an AI LMS for instructors and students. The three supplied routes are public marketing surfaces, not a captured signed-in learning application. Their visual system is therefore recorded as marketing expression only.

The captured pages pair a lavender-white field (`#F6F6F9` and `#FFFFFF`) with a signal-red action color (`#FF4438`). Large rounded content blocks and compact 8px actions keep the information-heavy pages calm without making their public CTAs look generic. The system is flat in the retained samples: `box-shadow: none` on the documented actions and ordinary grid cards.

### Primary tasks

- Find out what the AI LMS does for instructors and students
- Check which teaching tasks the AI is said to support
- Tell the university offer apart from the corporate HR one
- Request material or send an inquiry from the site

### Brand Narrative

Classum’s official historical material says the company was founded in 2018 by Chaerin Lee and Youjin Choi to address challenges they experienced as learners. Its current public home describes an AI-centered set of LMS, consultation, and skill solutions for university and corporate-HR audiences; the university LMS page concentrates on reducing preparation and evaluation work so instructors can focus on students. The narrative here is confined to those first-party statements and does not claim unobserved product-design intent.

### Principles

1. **Name the education context.** Current public pages separate university and corporate-HR offers. *UI implication:* keep public navigation and feature groups audience-specific.
2. **Connect AI to a concrete task.** The university LMS page describes preparation, quizzes, grading, feedback, and learner support. *UI implication:* pair an AI claim with the supported learning task.
3. **Keep public calls to action legible.** The repeated public navigation action is red on white with an 8px radius. *UI implication:* retain the verified action hierarchy on comparable public marketing routes only.

### Personas

The following are source-bound audience roles, not synthetic user research.

- **University instructor:** explicitly addressed on the public LMS page in the context of lesson preparation, assessment, feedback, and student-focused teaching.
- **University student:** explicitly addressed on the same page as a participant in AI-supported, self-directed learning.
- **Corporate HR audience:** explicitly named on the official home as the audience for Classum’s corporate/skill-solution offer.

No behavioral, demographic, or satisfaction claims are inferred beyond those public audience descriptions.

## Colors

- **Signal red** (`#FF4438`) — observed public-marketing action background and outline/action text. It is not asserted as an in-app destructive or status color.
- **Lavender canvas** (`#F6F6F9`) — observed public-marketing page/card background.
- **White surface** (`#FFFFFF`) — observed action and surface background.
- **Dark ink** (`#232334`) — observed dark action/background and text role on public marketing.
- **Body charcoal** (`#333333`) — repeated public-marketing text and card foreground.
- **Muted gray-violet** (`#666B80`) — university-LMS public-marketing supporting text sample.

No semantic success, warning, error, product-app, or documentation palette is claimed from these captures.

## Typography

### Verified public-marketing family

`Pretendard Variable` is the sole promoted UI family. It appears as the visible computed family across button, card, heading, and text roles (279 observed uses), is backed by a loaded `FontFace`, and has both jsDelivr and Classum-hosted WOFF2 sources in the supplied evidence. The upstream project documents the exact `"Pretendard Variable"` webfont family and distributes it under SIL Open Font License 1.1.

- **Marketing heading** — `52px / 700 / 72.8px`; observed public H1/H2 sample.
- **Marketing body** — `14px / 400 / 20px`; repeated public text/card sample.
- **Navigation action** — `15px / 600 / 22.5px`; repeated public navigation action.

`webflow-icons` is declared in the capture but has zero visible uses. It remains a declared-only icon asset, not a text family. No authenticated product or documentation font family was captured, so none is substituted or inferred.

## Layout

- The retained public routes use recurring 6px, 8px, 16px, and 30px spacing measurements; 30px is attached to the documented university-LMS cards, not promoted as a global application gutter.
- The public marketing page moves between compact navigation controls and large rounded content blocks. No responsive breakpoint, signed-in application layout, or documentation layout was captured.
- Use surface-local component geometry above; do not reuse a marketing CTA as an LMS workflow control without separate product evidence.

### Responsive Behavior

The supplied evidence is desktop `1440×900` only. It establishes no mobile breakpoint, mobile navigation state, or responsive component transformation. Preserve this uncertainty rather than extrapolating desktop marketing geometry into mobile or authenticated LMS behavior.

## Elevation & Depth

The retained navigation actions and standard university-LMS grid card report `box-shadow: none`. One decorative university grid-card variant has a multicolor shadow in the raw evidence, but it is a separate `gradient-11` marketing decoration and is not generalized into the canonical elevation token. Treat the verified public marketing system as flat.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Motion & Easing

No motion timing, easing token, or interaction transition is promoted. The supplied capture reports zero interaction kinds and zero interaction events. A future source-specific inspection is required before defining public marketing, authenticated product, or documentation motion behavior.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://business.classum.com/ · https://business.classum.com/learning · https://business.classum.com/university/lms · https://careers.classum.com/culture · https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md · https://github.com/orioncactus/pretendard/blob/main/LICENSE
**Tier 2 sources:** https://getdesign.md/classum (retrieval attempted; no importable record returned) · https://styles.refero.design/?q=classum (retrieval attempted; no importable record returned)
**Conflicts unresolved:** none

## Components

### Public marketing navigation primary action

**Default**
- Background: `#FF4438`
- Text: `#FFFFFF`
- Border: `0px solid #FFFFFF`
- Radius: `8px`
- Padding: `6px 16px`
- Font: `15px / 600 Pretendard Variable`
- Use: Home public-marketing navigation CTA; selector `home::[data-omd-capture="4"]`, six occurrences across the three captured routes.

### Public marketing navigation outline on light

**Default**
- Background: transparent
- Text: `#FF4438`
- Border: `1px solid #FF4438`
- Radius: `8px`
- Padding: `6px 16px`
- Font: `15px / 600 Pretendard Variable`
- Use: Home public-marketing light-background navigation action; selector `home::[data-omd-capture="3"]`, three occurrences across the captured routes.

### Public marketing navigation outline on dark

**Default**
- Background: transparent
- Text: `#FFFFFF`
- Border: `1px solid #FFFFFF`
- Radius: `8px`
- Padding: `6px 16px`
- Font: `15px / 600 Pretendard Variable`
- Use: Home public-marketing dark-background navigation action; selector `home::[data-omd-capture="8"]`, three occurrences across the captured routes.

### Public marketing large primary action

**Default**
- Background: `#FF4438`
- Text: `#FFFFFF`
- Border: `0px solid #FFFFFF`
- Radius: `8px`
- Padding: `12px 34px`
- Font: `18px / 600 Pretendard Variable`
- Use: Home and learning public-marketing large CTA; selector `home::[data-omd-capture="17"]`, two occurrences across those routes.

### University-LMS public-marketing grid card

**Default**
- Background: `#F6F6F9`
- Text: `#333333`
- Border: `0px solid #333333`
- Radius: `30px`
- Padding: `30px`
- Font: `14px / 400 Pretendard Variable`
- Use: University-LMS public-marketing grid card; selector `university-lms::div.grid-card`, two occurrences on that route.

The sections below were added on 2026-09-30 from the same 2026-07-13 bundle (bundle-only; no new capture).

### Header navigation link

**Default**
- Background: transparent
- Text: `#232334` on the light header (class `on-white`); `#FFFFFF` on the dark-header copy
- Radius: `0px`
- Padding: `0px 18px`
- Height: `64px`
- Font: `15px / 600 Pretendard Variable`, line height 22.5px, tracking -0.6px
- Use: header navigation; `home::[data-omd-capture="1"]`, six light-header and six dark-header copies across the three routes.

### Public marketing medium primary action

**Default**
- Background: `#FF4438`
- Text: `#FFFFFF`
- Radius: `8px`
- Padding: `8px 24px`
- Height: `49px`
- Font: `16px / 600 Pretendard Variable`, line height 24px
- Use: home hero primary action (`a.primary-button.medium`); `home::[data-omd-capture="11"]`.

### White action

**Default**
- Background: `#FFFFFF`
- Text: `#232334`
- Radius: `8px`
- Padding: `12px 34px` (large); `8px 24px` at 49px with 16px / 600 (medium, home capture 10); `8px 16px` at 43px with 18px / 600 (small, learning capture 10)
- Height: `51px` (large)
- Font: `18px / 600 Pretendard Variable`, line height 27px
- Use: white action on dark sections (`a.primary-button.white-button`); `home::[data-omd-capture="16"]`.

### Black action

**Default**
- Background: `#232334`
- Text: `#FFFFFF`
- Radius: `8px`
- Padding: `12px 34px`
- Height: `51px`
- Font: `18px / 600 Pretendard Variable`, line height 27px
- Use: dark action on the learning route (`a.primary-button.large.black-button`); `surface-2::[data-omd-capture="12"]`.

### Grey action

**Default**
- Background: `#DADEEA`
- Text: `#272730`
- Radius: `8px`
- Padding: `0px 36px`
- Height: `49px`
- Font: `18px / 600 Pretendard Variable`, line height 27px
- Use: grey action in the university-LMS hero (`a.primary-button.gray-button`); `surface-3::[data-omd-capture="10"]`. It sits beside a `#FF4438` action with the same padding and height (capture 11).

### Footer sitemap link

**Default**
- Background: transparent
- Text: `#FFFFFF`
- Height: `29px`
- Font: `18px / 600 Pretendard Variable`, line height 28.8px
- Use: footer sitemap links (`a.sitemap-link`) on the dark footer, ten per route on all three routes; `home::[data-omd-capture="19"]`.

### Footer legal link

**Default**
- Background: transparent
- Text: `#FFFFFF`
- Height: `18px`
- Font: `12px / 300 Pretendard Variable`, line height 18px
- Use: footer legal links (class `copryright-link`, as spelled in the markup), two per route; `home::[data-omd-capture="29"]`.

### Home feature card

**Default**
- Background: `#DADEEC`
- Radius: `12px`
- Padding: `0px`
- Size: `563px x 456px`
- Use: four home feature cards (`a.feat-item`, captures 12-15); `home::[data-omd-capture="12"]`.
- Label: not declared. The anchor computes Chromium's default link colour `#0000EE` and the 14px / 400 body type, which is container text.
- Frames: the bundle holds 10 state frames on these cards (hover and pressed on all four, focus on 14 and 15). Hover moves box-shadow from `none` to `rgba(0, 0, 0, 0) 0px 0px 0px 0px` (alpha 0); pressed moves it to `rgba(73, 73, 90, 0.004) 0px 0.62335px 0.649323px -0.259729px`, a frame caught early in a transition; focus is not declared from bundles. None of them is a settled change, so no state value is declared.

### Comparison table row

**Default**
- Background: transparent
- Border: 2px `#333333` on the bottom edge only (`border-width: 0px 0px 2px`)
- Padding: `15px 0px`
- Height: `67px`
- Label: the row heading child (`div.table-row-heading`): `#666B80`, `22px / 400 Pretendard Variable`, line height 35.2px
- Use: 18 comparison-table rows (`div.table-line`) on university-lms; `surface-3::div`.

Pointer states: the bundle holds 10 state frames, all on the four home feature cards, and none records a settled change, so hover and pressed values are not declared; focus is never declared from these bundles. Selected, disabled, dialog, menu, tab, toast and form-error variants were not captured. Corrected 2026-09-30: the July text read the collector's zero interaction count (which covers expansions such as dialogs and menus) as zero state samples.

### States

| State | Evidence boundary |
|---|---|
| Empty | Not captured on the three public marketing routes. |
| Loading | Not captured. |
| Inline error | Not captured. |
| Form error | Not captured. |
| Success | Not captured. |
| Disabled | Not captured. |
| Skeleton | Not captured. |
| Hover | Not declared. Hover frames exist on the four home feature cards; their only change is a box-shadow moving from `none` to an alpha-0 colour. Corrected 2026-09-30: the interaction count covers expansions only. |
| Focus | Not declared. Bundle focus frames are not a reliable focus-visible sample (corrected 2026-09-30). |
| Pressed | Not declared. The pressed frames on the feature cards record a box-shadow of alpha 0.004, a transition frame (corrected 2026-09-30). |

Live state probe, 2026-10-16 (`https://business.classum.com/`), `nav-primary-action`: pressed — background-image linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)).

## Do's and Don'ts

### Do
- Use `#FF4438` only where the captured public-marketing surface shows an action or outline action.
- Keep verified public marketing type in `Pretendard Variable` and preserve the observed 14px body and 15px compact-action scales.
- Use 8px for documented actions and 30px only for the documented university-LMS public grid-card treatment.
- Keep marketing cards flat unless a separately evidenced decorative variant is intentionally being reproduced.

### Don't
- Do not turn the public marketing red into an unverified product-state or destructive-action palette.
- Do not substitute system fonts for the loaded `Pretendard Variable` family.
- Do not fabricate app controls, documentation chrome, form states, or interaction states from the public landing pages.
- Do not treat the decorative multicolor-shadow card as a default card elevation.

## Voice & Tone

The current public copy is direct, formal Korean B2B/education copy: it names the audience (university, instructor, student, or HR) and pairs AI capability with an operational or learning outcome. Preserve that observed posture rather than inventing a casual consumer voice.

| Context | Observed guidance |
|---|---|
| Public headline | Lead with the educational or operational result, then name the audience. |
| CTA | Use short functional actions such as requesting material or making an inquiry. |
| Product explanation | Describe the specific learning or administrative task before the AI capability. |

## Agent Prompt Guide

For a Classum public-marketing surface, use the verified lavender canvas, white surfaces, `Pretendard Variable`, and red action treatment only in the source domain where each was observed. Prefer a flat composition with compact 8px navigation actions and route-local 30px university feature cards. If a task concerns an authenticated learner, instructor, administrator, documentation, form validation, or interactive state, request or collect that source-domain evidence before choosing components or tokens.

## Governance

### Known Gaps

- **Contrast, `nav-primary-action`.** Text `#ffffff` on `#ff4438` measures 3.42:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `large-primary-action`.** Text `#ffffff` on `#ff4438` measures 3.42:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `nav-link`.** Text `#232334` on `#00000000` measures 1.36:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `medium-primary-action`.** Text `#ffffff` on `#ff4438` measures 3.42:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `comparison-table-row`.** Text `#666b80` on `#00000000` measures 3.98:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
