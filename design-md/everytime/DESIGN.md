---
name: Everytime
colors:
  primary: '#f91f15'
  background: '#ffffff'
  foreground: '#444444'
  dark: '#292929'
  secondary: '#737373'
  muted: '#a6a6a6'
  border: '#ededed'
  subtle: '#f9f9f9'
  field: '#f2f2f2'
typography:
  button:
    fontSize: 14px
    fontWeight: 700
  input:
    fontSize: 14px
    fontWeight: 400
  navigation:
    fontSize: 14px
    fontWeight: 400
  feature-heading:
    fontSize: 22px
    fontWeight: 700
rounded:
  none: 0px
  control: 12px
components:
  campus-link:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#444444'
    rounded: 0px
    height: 44px
    padding: 12px 24px
    typography: 14px / 400
    hover: '#f9f9f9'
    pressed: '#f9f9f9'
    use: Campus navigation link, measured on 경희대. The foreground and font describe the visible title span; the anchor itself reports 0px text. The count is a separate muted span. Keyboard focus uses the browser auto outline.
  app-store:
    type: button
    backgroundColor: '#292929'
    rounded: 12px
    height: 58px
    padding: 0px
    hover: '#444444'
    pressed: '#444444'
    use: Hero App Store link, 158px wide. Its icon and label are SVG background assets in two empty spans; a text foreground and font are unresolved. Keyboard focus uses the browser auto outline.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Everytime

## Overview

### Visual Theme & Atmosphere

Everytime is Vinu Labs' campus community and planning service. Its official product page brings together school communities, group chat, timetables and campus information. The company's December 2023 rebrand announcement dates the service's opening to 2009 and explains the new symbol through two ideas: time and a smile. It introduced the slogan “함께하는 대학생활” alongside group chat. The identity gives a practical scheduling product a social expression. [Official product page](https://www.vinuteam.com/everytime), [rebrand announcement](https://www.vinuteam.com/newsroom/19).

On the live homepage, a large smiling symbol and dark Korean wordmark sit within a predominantly white and pale-grey composition. Red is concentrated in the signup action and brand artwork. A fixed campus directory gives the page a useful navigation surface alongside its long sequence of feature illustrations. App-store actions use dark rounded rectangles; campus entries use flat, square rows. These are observations of the public website, captured 2026-11-06.

The product continues to develop around coordination: an October 2026 PM article describes a meeting-time poll and its relationship to timetables and chat. It documents a two-stage creation flow and six brightness levels for availability results. Those are documented app design decisions; their colours are not inferred from this website. [Product planning article](https://www.vinuteam.com/blog/68).

The measured surface is the Korean-language public homepage (`everytime.kr/`, HTML `lang="ko"`), with no redirect recorded.

### Brand Narrative

The 2023 announcement connects the time-based identity to a smile and to communication between students. The homepage makes that relationship visible through its large symbol, while the persistent campus list keeps access to a specific school close at hand. The narrative comes from the company; the layout reading comes from the capture. [Rebrand announcement](https://www.vinuteam.com/newsroom/19).

### Principles

Use campus context to organise access, keep functional controls compact, and reserve large artwork for the feature story: these are implementation lessons from the measured page. For the app's meeting poll, the PM explicitly describes splitting creation into date/time selection and detail entry to reduce decisions on one screen. That documented decision is useful context without supplying unmeasured web tokens. [PM article](https://www.vinuteam.com/blog/68).

### Personas

The product page addresses university students; no separate persona study was conducted.

## Colors

These role names index measured colours; the readable CSS exposed no custom-property names. The paragraph census establishes the body-text role `foreground`.

| Role | Value | Measured use |
|---|---|---|
| Primary accent | `#f91f15` | Signup link background; this is a live interface value, not a transcribed logo-guide specification. |
| Background | `#ffffff` | Fixed sidebar and resting campus row. |
| Foreground | `#444444` | Most common paragraph ink: 15 paragraphs; also the campus title span. |
| Dark | `#292929` | Resting App Store link background and search input text. |
| Secondary | `#737373` | Sign-in label and account-recovery link. |
| Muted | `#a6a6a6` | Campus count and the measured timetable feature label. |
| Border | `#ededed` | Sign-in link's 1px border. |
| Subtle | `#f9f9f9` | Campus row hover/pressed background; also signup label colour. |
| Field | `#f2f2f2` | Campus search background. |

White was counted on 381 element backgrounds. The census also found paragraph ink `#292929` on five paragraphs and `#a6a6a6` on two. Counts describe this DOM capture, not palette importance.

## Typography

The evidence classes are separate:

- **Official product use:** no product typeface statement was verified in the opened company product page, rebrand announcement or logo-guide text.
- **Live-loaded:** the census returned `loaded: []` and no readable `@font-face` records. No family qualifies for a live specimen from this capture.
- **Official distributed assets:** the company product page links a logo guide and logo resources. No distributed font asset was opened or verified.
- **Declared-only:** body, h1 and button declare `"Apple SD Gothic Neo", "맑은 고딕", 돋움, sans-serif`. Individual measured controls report `Apple SD Gothic Neo` as their computed family. Neither identifies the actual locally rendered face through this census.
- **Unresolved:** the rendered font files, licensing and script-specific face assignment. One icon stylesheet was unreadable to the census. The machine typography block therefore carries metrics without a family.

Substitute: none chosen.

Account labels measure 14px/700 with normal line height. The search input measures 14px/400 with 20px line height. The visible campus title is 14px/400; its containing anchor reports 0px and should not supply a text-size specimen. The timetable feature's h4 label measures 22px/700, while its button container reports 13.3333px/400. The first five measured controls report letter spacing of -0.5px; the timetable button reports normal.

## Layout

At 1440×1000, the fixed left aside is 301px wide including its border. The account actions begin 24px from its left edge; campus rows are 300px wide. Search has a 12px left inset. The hero puts its headline, description and pair of store links beside the large symbol. The first store link starts at x=412px; the next starts at x=578px, leaving an 8px gap between their 158px boxes.

Below the hero, the full-page capture shows a statistics strip followed by community, chat, timetable, course-information and campus-life sections. Pale-grey sections alternate with white space, and phone illustrations explain the features. Treat those illustrations as product imagery, not measured app component specifications.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; mobile breakpoints and touch behaviour are unverified.

## Elevation & Depth

All six measured controls report `box-shadow: none`. The page uses background changes and borders for these interactions. Shadows visible around phone illustrations were not extracted as reusable shadow values.

## Motion & Easing

All six control identities report the raw computed transition `all 0s ease 0s`. No positive-duration easing token is established. The timetable subtree's settling diagnostic does not identify a reusable authored transition string.

---

Evidence: live homepage survey and six-control states capture, 2026-11-06; official company/product, legal-footer, rebrand, product-planning and logo-guide sources linked above and indexed in `sources.json`. Per-control raw samples, census, control-path results and source quotations are in `verification.md`; collection limits are in `report.md`.

## Components

**Campus navigation link.** The measured `경희대` row is 300×44px, radius 0, padding 12px 24px, without a border or shadow. Its title uses `#444444`, with a separate `#a6a6a6` count. Hover and pointer-down both change the background from `#ffffff` to `#f9f9f9`; the label colours stay fixed. This is a navigation link represented as a button-type reference component.

**App Store action.** The first App Store link in the hero is 158×58px, radius 12px, padding 0, without a border or shadow. Hover and pointer-down change `#292929` to `#444444`. Its icon and wordmark are SVG background images in empty spans. The anchor's computed `color` is not the colour of that artwork, so no text foreground or font is assigned to this component.

**Account actions.** Signup and sign-in links are both 252×40px, radius 12px, padding 0, with 14px/700 labels. Signup is `#f91f15` with `#f9f9f9` text; sign-in is transparent over white with `#737373` text and a 1px `#ededed` border. Neither produced an authored hover or pressed change in the measured comparison. They remain reference prose rather than stateful component entries.

**Campus search.** The input is 276×44px, radius 12px, padding 0 48px 0 12px, `#f2f2f2` background and `#292929` computed text. The search icon is a 24×24px background image positioned 12px from the right. Hover, pointer-down and keyboard focus produced no style change within the probe's comparison scope. Placeholder ink was not separately measured.

**Timetable feature selector.** The measured button is 174.5×82px, square, padding 0 and transparent over `#f9f9f9`. Its visible 22px/700 heading is `#a6a6a6`; the button container's black computed foreground does not describe the visible label. It produced no authored state change in this run and is omitted from component tokens.

### States

Campus rows move from white to `#f9f9f9`; the hero App Store action moves from `#292929` to `#444444`. In each case pointer-down has the same background as hover, with no additional measured delta. Signup, sign-in, campus search and the timetable selector have no detected authored interaction delta within the measured scope.

Tab focus produces the browser's `auto` outline on the five non-input controls. The search input has no detected focus style change. No authored focus token is claimed. The comparison covers each control, its pseudo-elements, descendants and three ancestor levels; canvas, video, siblings and external SVG internals are outside that scope. All six controls were enabled; disabled, error and loading states were not measured.

## Do's and Don'ts

- Use the measured red for the signup accent, dark backgrounds for store actions, and a restrained neutral field for campus browsing.
- Preserve the distinction between 12px account/store corners and square campus rows.
- Use the visible child label when recording campus typography and colour.
- Follow the official logo guide's signature, clear-space and colour-use rules. It prioritises the combined symbol and wordmark and recommends white or light backgrounds. [Logo guide](https://cf-ownedmedia.vinuteam.com/attachment/%E1%84%8B%E1%85%A6%E1%84%87%E1%85%B3%E1%84%85%E1%85%B5%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B7_%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3.pdf).
- Do not turn browser `auto` focus outlines into branded colour tokens or assign a substitute font to an unresolved family.

## Voice & Tone

The official service page invites students to share information and talk with their own campus community. The measured search placeholder, “찾으시는 캠퍼스를 검색하세요.”, gives a direct task instruction; the hero's invitation ends with “만들어보세요.”. These examples support an inviting, practical reading of the copy, not a claimed formal voice standard. [Service description](https://www.vinuteam.com/everytime).

## Agent Prompt Guide

“Build a campus-directory link as a 300×44px white row, square corners, 12px 24px padding, a 14px/400 title in `#444444` and a muted count in `#a6a6a6`. Hover and pointer-down use `#f9f9f9`. Font family remains unresolved.”

“Build a 158×58px App Store action with 12px corners and a `#292929` background that changes to `#444444` on hover and pointer-down. Use the existing artwork for the icon and label; its typographic family and artwork colour were not extracted.”
