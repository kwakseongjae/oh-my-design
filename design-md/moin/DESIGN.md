---
name: Moin
colors:
  primary: '#0082ff'
  primary-hover: '#0068d0'
  primary-alt: '#007bff'
  nav-hover: '#0056b3'
  control-hover: '#e6f2ff'
  ink: '#1a1b22'
  foreground: '#6b6c74'
  charcoal: '#333333'
  dark: '#242424'
  muted-slate: '#818daa'
  grey: '#555555'
  faint: '#a9abb4'
  canvas: '#ffffff'
  surface: '#f7f7f8'
  surface-cool: '#f3f5f8'
  hairline: '#efefef'
  border: '#e0e0e0'
  border-cool: '#e9ecef'
  on-primary: '#ffffff'
  navy-100: '#003264'
  mint-100: '#00dba7'
  purple-100: '#8566ff'
  red-100: '#ff066f'
  warm-grey-1: '#cacaca'
  warm-grey-2: '#dfdfdf'
  warm-grey-4: '#fbfbfb'
  grey-scale-2: '#6684a2'
  grey-scale-3: '#b2c1d0'
  grey-scale-4: '#f2f5f7'
  cool-grey-2: '#c0d2de'
  cool-grey-3: '#d5e1e9'
  cool-grey-4: '#eaf0f4'
  black: '#000000'
typography:
  amount:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.13
    use: Measured sending amount; 36.16px line height, dark at rest and focus
  button:
    fontSize: 16px
    fontWeight: 700
    use: Measured header and dark review actions; 16px line height
  exchange-action:
    fontSize: 16px
    fontWeight: 400
    use: Measured exchange CTA; 16px line height
  nav:
    fontSize: 16px
    fontWeight: 400
    use: Measured student-discount link; 16px line height
  amount-label:
    fontSize: 14px
    fontWeight: 400
    use: Survey sending/receiving labels; 18px line height
rounded:
  none: 0px
  sm: 6px
  md: 8px
spacing:
  xxs: 5
  xs: 10
  s: 15
  m: 20
  l: 25
  xl: 30
  xxl: 50
  xxl-2: 100
  xxl-3: 200
components:
  button-primary:
    type: button
    backgroundColor: '#0082ff'
    textColor: '#ffffff'
    border: 1px solid rgba(0, 50, 100, 0.1)
    rounded: 6px
    height: 50px
    padding: 0px
    typography: 16px / 400 Spoqa Han Sans
    hover: 'bg #0068d0; border 1px solid rgba(0, 50, 100, 0.3); shadow rgba(0, 130, 255, 0.1) 0px 2px 4px 0px'
    pressed: 'bg #0068d0; border 1px solid rgba(0, 50, 100, 0.3); shadow rgba(0, 130, 255, 0.1) 0px 2px 4px 0px'
    use: Exchange widget button 송금 시작하기; 360px wide at 1440px viewport. Raw pointer observations with overlays hidden.
  button-nav:
    type: button
    backgroundColor: '#007bff'
    textColor: '#ffffff'
    border: '1px solid #007bff'
    rounded: 6px
    height: 40px
    padding: 8px 16px
    typography: 16px / 700 Spoqa Han Sans
    hover: 'bg #0056b3; border #0056b3'
    pressed: 'bg #0056b3; border #0056b3'
    use: Header button 송금 시작하기; 126px wide. Raw pointer observations with overlays hidden.
  button-dark:
    type: button
    backgroundColor: '#333333'
    textColor: '#ffffff'
    rounded: 6px
    height: 52px
    padding: 14px 48px
    typography: 16px / 700 Spoqa Han Sans
    hover: opacity 0.9
    pressed: opacity 0.9
    use: Button 더 많은 후기 보러가기; opens the review destination in the product source. Raw pointer observations with overlays hidden.
  button-carousel:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#555555'
    border: '1px solid #e0e0e0'
    rounded: 8px
    height: 48px
    padding: 0px
    typography: 19.2px / 400 Spoqa Han Sans
    hover: 'bg #e6f2ff; fg #007bff; border #e6f2ff'
    pressed: 'bg #e6f2ff; fg #007bff; border #e6f2ff'
    use: Next-review button, aria-label 다음 후기; 48px square. The arrow is a PNG; computed text color changes do not prove recoloring its pixels.
  nav-student:
    type: button
    textColor: '#818daa'
    rounded: 0px
    height: 16px
    padding: 0px
    typography: 16px / 400 Spoqa Han Sans
    hover: 'opacity 0.5; underline solid #818daa'
    pressed: opacity 0.5; underline removed relative to hover
    use: Header link 유학생 할인 to /event/univ, transparent over white. Its browser auto outline is not a brand token.
fonts:
  roles:
    sans: Spoqa Han Sans
    fallback: Spoqa Han Sans JP
---

# Design System Inspiration of Moin

## Overview

### Visual Theme & Atmosphere

Moin (모인) is a Korean cross-border remittance fintech. Its engineering About page dates the company to March 2016 and describes fast, convenient transfers at reasonable prices, with the safety of customers' money as its first priority. The current company page addresses both individuals and businesses, presents Moin BizPlus, and describes expansion through Japanese and European offices and partnerships with Wise and CurrencyCloud. The company introduction documents this wider offer; the captured homepage concentrates on previewing and starting a personal transfer. [Company About](https://themoin.github.io/about/), [current company page](https://www.themoin.com/company).

The public homepage combines a white canvas (#ffffff), near-black headings (#1a1b22), grey paragraph ink (#6b6c74), and bright azure actions (#0082ff). The header uses a distinct blue (#007bff). Large currency amounts, floating coin illustrations and pale surfaces give the page a financial identity without dense banking chrome. The hero has a pale vertical gradient; the exchange panel is translucent white with a small backdrop blur. These are observations and readings of the captured homepage, not company-authored design principles.

The measured homepage is the Korean edition requested at **themoin.com/ko**, which resolved in the probe to **themoin.com/** with HTML **lang="ko"**. Its hero reads “어렵고 복잡한 해외송금, 이제 모인하세요!” Two amount rows, an exchange-rate summary and the send action occupy the right side of the desktop hero. Spoqa Han Sans supplies a weight-led hierarchy, with 32px/700 amounts and 16px interface labels.

The visual restraint is specific rather than universal: buttons rest without shadows, but the primary CTA gains a blue shadow on hover. Review cards have a soft shadow in the homepage source, and the promotional popup is a separate, more graphic layer. A builder should preserve these distinctions instead of treating every element as flat.

#### Primary tasks

- Preview the sending and receiving amounts and exchange rate.
- Start a transfer and inspect its progress, as described by the homepage copy.
- Explore student discounts and customer reviews.
- Read the company introduction, which also describes business remittance.

### Brand Narrative

The engineering About page frames Moin as customer-centred and puts safely sending customer money first. It dates incorporation to March 2016 and says the company aims to solve inefficiency and create value for people. That supports a product story about making cross-border transfers more convenient and legible. [Company About](https://themoin.github.io/about/).

The current company page extends the story to individual and corporate users, Moin BizPlus, overseas offices and global payment partnerships. Its introduction and timeline disagree on the BizPlus launch year, so a year is not assigned here. The visual continuity is the amount-led, blue-action interface; expansion of the offer does not establish a documented visual rebrand. No opened first-party source supplied a rebrand history or an official named design system.

### Principles

The official About page supports **customer-centred service**, **safe handling of customer money**, and **fast, convenient transfers at reasonable prices**. The following design implications are editorial recommendations grounded in the homepage:

1. Give the sending and receiving amounts clear space and a stronger size than their labels.
2. Distinguish the main transfer action through its measured azure fill and darkened pointer state.
3. State the benefit and action plainly, while keeping application time distinct from transfer-arrival time.
4. Use surface, border, translucency and the specific observed shadows to separate content.
5. Preserve visible state differences control by control; blue receiving text is not evidence of a blue focus state.

### Personas

First-party sources identify individual and business members and a student-discount audience; no researched personas, demographic profiles or user motivations were verified.

## Colors

The survey found **55 computed root custom properties**. The following roles combine those raw properties with the rendered colour census and the six measured controls. Token names below are reference roles; raw first-party names are identified separately.

| Role | Value | Evidence and use |
|---|---|---|
| Primary | #0082ff | --primary-100 and --typography-6; exchange CTA and feature accents |
| Primary hover | #0068d0 | Exchange CTA hover and pressed fill |
| Header action | #007bff | Header CTA rest fill and border |
| Header hover | #0056b3 | Header CTA hover and pressed fill and border |
| Control hover surface | #e6f2ff | Next-review button hover/pressed fill and border |
| Heading ink | #1a1b22 | Rendered text census; homepage headline/feature source styles |
| Foreground | #6b6c74 | Most frequent paragraph ink, 11 paragraphs in the census |
| Charcoal | #333333 | Dark review action; also the review section's source textPrimary value |
| Amount dark | #242424 | --typography-1 and sending amount at rest, hover, press and focus |
| Muted slate | #818daa | Student-discount link and other navigation/legal links |
| Grey | #555555 | Carousel button's computed color and seven paragraphs |
| Faint | #a9abb4 | Five paragraphs; review-support copy in the homepage source |
| Canvas / on-primary | #ffffff | Page surfaces and white text on filled actions |
| Tinted surface | #f7f7f8 | Background census; footer source background |
| Cool surface | #f3f5f8 | Background census; exchange-summary source |
| Hairline | #efefef | 34 border-colour census entries; --warm-grey-3 |
| Control border | #e0e0e0 | Carousel border; review-card source border |
| Cool neutral | #e9ecef | Background census and footer source palette border value |

The root palette is wider than the blue seen on the main actions. Its opaque source values also include **navy #003264**, **mint #00dba7**, **purple #8566ff** and **red #ff066f**. These are measured custom properties; no success/error or other semantic meaning is assigned to them here.

The neutral root values are warm grey **#cacaca**, **#dfdfdf**, **#efefef**, **#fbfbfb**; grey scale **#003264**, **#6684a2**, **#b2c1d0**, **#f2f5f7**; cool grey **#c0d2de**, **#d5e1e9**, **#eaf0f4**; white **#ffffff** and black **#000000**. The amount-row divider uses #eaf0f4 in both its captured ancestor style and homepage source. The presence of a black root property does not make black the homepage's paragraph colour.

Each of primary, navy, red, mint and purple has raw 100/60/30/10/05 variants; the non-opaque values retain their alpha in the evidence report. For example, --primary-10 is #0082ff1a and --primary-05 is #0082ff0d. The machine-readable colour map contains only opaque six-digit values.

## Typography

### Evidence classes

| Class | Finding |
|---|---|
| Official product-use statement | No opened Moin design or brand document names a product typeface. The font evidence comes from the live surface and its distributed stylesheet. |
| Live-loaded | document.fonts reports Spoqa Han Sans 400 normal, Spoqa Han Sans 700 normal, and Spoqa Han Sans JP 400 normal. Body, h1 and button declarations begin with the two Spoqa families. |
| Official distributed assets | Moin's linked SpoqaHanSans.css declares both families at 100, 300, 400 and 700. Each rule starts with a local() name and then Moin-hosted WOFF2, WOFF and TTF URLs. These formats were read as CSS declarations; no font binaries were downloaded. |
| Declared-only | The 100 and 300 cuts of both families and JP 700 did not appear in the loaded set. Helvetica and Arial are named later in the fallback stack, without loaded-face evidence. Spoqa Han Sans Neo is named in separate account-verification/app-route styles in the bundled source; it was not loaded in this homepage census. None receives a specimen or a family token as a measured homepage face. |
| Unresolved | The capture does not identify whether local() or a URL supplied each loaded face, nor the precise glyph runs rendered by JP 400. |

**Substitute: none chosen.**

The original Spoqa Han Sans and its JP family are open source under the font publisher's **SIL Open Font License 1.1**. The publisher describes the original family as a 2015 release prepared for Korean and Japanese web/app use, including customised numeral forms. This is font history, not evidence that Moin uses the newer Neo face. [Font publisher](https://spoqa.github.io/spoqa-han-sans/), [font license](https://raw.githubusercontent.com/spoqa/spoqa-han-sans/master/LICENSE).

### Measured interface hierarchy

| Role | Size / weight | Line height | Treatment |
|---|---|---|---|
| Sending amount | 32px / 700 | 36.16px | #242424, right-aligned in source; unchanged through measured states |
| Amount labels | 14px / 400 | 18px | #242424 |
| Exchange CTA | 16px / 400 | 16px | White on primary; letter spacing -0.13px |
| Header send / review action | 16px / 700 | 16px | White on blue or charcoal |
| Student nav link | 16px / 400 | 16px | #818daa; letter spacing -0.1px |
| Carousel control | 19.2px / 400 | 19.2px | Computed button font; the visible arrow is an image |

The homepage's **source CSS**, not a separate computed heading sample, retains a 40px/700 hero h1, 32px/700 review-section h2 with line-height 1.4, 24px/700 feature h2, and 16px/700 feature eyebrows. Feature description containers declare 18px, line-height 1.6 and #6b6c74 at desktop width. The hero's blue supporting paragraph is 20px/700 at line-height 1.5. This is a compact, weight-led hierarchy, with the amounts larger than ordinary interface text. A universal 16px paragraph scale and an approximate hero line height are not established by this capture.

## Layout

The desktop page places a text-led hero to the left of the exchange panel, then reviews, alternating image/text features, a student offer, a closing transfer CTA, partner logos and a footer. The surveyed header is 70px high; its send action is a smaller target than the main 50px-high action. The exchange control's 360px width makes it a prominent, easily located target.

The actual root spacing properties are **5, 10, 15, 20, 25, 30, 50, 100 and 200px**, named --spacing-xxs through --spacing-xxl-3. These are the declared token scale, not proof that every layout dimension follows it. Measured local padding includes 8px 16px on the header button, 14px 48px on the dark action, and zero on the exchange CTA.

The homepage source sets a 1200px maximum container, reduced to 1040px at max-width 1599px, and introduces 48px then 24px side padding on narrower layouts. Feature image/text pairs use a two-column grid with a 56px gap in source. These dimensions describe the homepage's declared layout, not an independently measured mobile grid.

Use **6px** for the measured filled buttons, **8px** for carousel controls and **0px** for the bare amount input. The **16px** review-card and **20px** exchange-shell corners are source declarations. No numeric 9999px pill token was verified.

### Responsive Behavior

Only **1440×1000 desktop** was rendered for this measurement. The homepage source declares breakpoints at **1599px, 1135px and 799px**: the hero switches to a column at 1135px; its h1 declares 40 → 32 → 24px, and feature image/text pairs stack at 799px. Source review cards narrow to 280px at 799px. These are source declarations; touch behavior, narrower rendered layouts and cross-device stability were not tested.

## Elevation & Depth

Measured resting controls have **box-shadow: none**. On the exchange CTA, hover and press introduce **rgba(0, 130, 255, 0.1) 0px 2px 4px 0px**. The exchange shell's captured ancestor uses 80% white and blur(4px), allowing the hero imagery to show through.

The homepage source assigns review cards a soft **0 4px 15px rgba(0, 0, 0, 0.05)** shadow. A reusable modal declaration elsewhere in the same bundle contains **0 10px 20px 0 rgba(36, 36, 36, 0.3)**; that is source-only modal metadata, not a measured floating or hover state of a product card. Tint, thin borders and these specific shadows form a more accurate recipe than a universal “one shadow only” rule.

## Motion & Easing

The exchange CTA's raw computed transition is **all 0.185s ease-in-out 0s**: **185ms**, ease-in-out. The header action reports **background-color, color, border-color, opacity 0.2s, 0.2s, 0.2s, 0.2s ease, ease, ease, ease 0s, 0s, 0s, 0s**: **200ms** for each listed property. The carousel button reports **background-color, color, border-color 0.2s, 0.2s, 0.2s ease, ease, ease 0s, 0s, 0s**, also **200ms**.

The dark review action, student link and sending input each report **all 0s ease 0s**. These strings were copied from control identities in states.json. No carousel-slide duration, hero-reveal duration, custom cubic-bezier curve, spring behavior or reduced-motion result was measured.

## Components

Pointer observations below were collected with **hideOverlays: true** because a promotional popup covered the homepage. All hover snapshots matched :hover, and all pressed snapshots matched :active. Numerical samples precede the crop phase; the tool reports that those pseudo-classes stopped matching during several crops. Keyboard focus was reached by real Tab presses. Focus changes are browser auto outlines, so no brand focus token is published.

| Control | Identity at rest | Authored pointer treatment |
|---|---|---|
| Exchange CTA, “송금 시작하기” | Button; 360×50px; 6px radius; padding 0; 16px/400; #0082ff / #ffffff; 1px solid rgba(0, 50, 100, 0.1); no shadow | Hover and press: #0068d0; border alpha becomes 0.3; shadow rgba(0, 130, 255, 0.1) 0px 2px 4px 0px |
| Header send, “송금 시작하기” | Button; 126×40px; 6px; padding 8px 16px; 16px/700; #007bff / #ffffff; matching 1px blue border; no shadow | Hover and press: fill and border #0056b3 |
| More reviews, “더 많은 후기 보러가기” | Button; 239.4×52px; 6px; padding 14px 48px; 16px/700; #333333 / #ffffff; no border or shadow | Hover and press: opacity 1 → 0.9 |
| Student discount, “유학생 할인” | Link to /event/univ; 76.6×16px; 0px; padding 0; 16px/400; transparent over white; #818daa; no border/shadow | Hover: opacity 0.5 and underline. Press: opacity 0.5, underline removed, browser auto outline appears |
| Next review, aria-label “다음 후기” | Button; 48×48px; 8px; padding 0; 19.2px/400; #ffffff / #555555; 1px solid #e0e0e0; no shadow | Hover and press: fill/border #e6f2ff, computed color #007bff |

The next-review arrow is a 32×32px PNG. Its computed inherited color changes, but the captured source URL stays the same; this does not establish a change in the raster arrow's pixel colour.

**Amount field:** the sending input is 251.1×47px, radius **0px**, padding 0, 32px/700, white background, #242424 text, and no border, shadow or drawn outline. Hover, press and keyboard focus produced no compared visual changes. It remains useful geometry for reproduction, but is omitted from interactive component tokens. The receiving amount was already #0082ff at rest in the survey; blue therefore cannot be described as a focus-induced change.

**Containers and labels, source CSS:** review cards are white, 16px rounded, bordered #e0e0e0 and declare 0 4px 15px rgba(0, 0, 0, 0.05), with 30px padding and 442px height. The 20px-rounded exchange shell declares rgba(255, 255, 255, 0.8) with backdrop blur(4px); its translucent background and blur also appear in the CTA's captured ancestor style. The identified #f3f5f8 exchange-summary block declares 12px radius. A generic cool feature card was not verified. Blue feature eyebrows declare 16px/700. No interactive state was measured for these static containers or labels.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Exchange CTA | #0068d0 fill; border alpha 0.3; blue shadow | Same as hover; no extra delta | Browser auto outline only |
| Header send | Fill/border #0056b3 | Same as hover; no extra delta | Browser auto outline only |
| More reviews | Opacity 0.9 | Same as hover; no extra delta | Browser auto outline only |
| Student link | Opacity 0.5; underline | Opacity 0.5; underline removed; browser auto outline | Browser auto outline only |
| Sending input | No compared change | No compared change | No compared change |
| Next review | Fill/border #e6f2ff; computed color #007bff | Same as hover; no extra delta | Browser auto outline only |

“No compared change” covers the element, its pseudo-elements, descendants and three ancestor levels with their pseudo-elements, using the probe's style/attribute property list. The sending input has no descendants. It does not prove absence of changes in siblings, external raster pixels or other uninspected rendering. No empty, loading, error, success, skeleton or disabled product state was measured.

## Do's and Don'ts

These are implementation recommendations drawn from the measured surface, not an official Moin design manifesto.

- Use the live-loaded Spoqa families and the observed 400/700 contrast; keep the 32px amount distinct from 16px interface text.
- Preserve the two blue action fills and their different hover blues.
- Use #1a1b22 headings and the measured #6b6c74 paragraph foreground; keep #333333 for contexts actually using it.
- Preserve the primary CTA's zero padding and the header action's 8px 16px padding.
- Keep the bare amount input square and dark when focused; use the already-blue receiving amount as a separate role.
- Use the measured opacity response for the dark action and navigation link.
- Keep review cards white with a light border and soft shadow; use tinted backgrounds in the sections that have them.
- Do not infer error, loading, disabled, mobile or brand focus treatments from these six controls.

## Voice & Tone

The homepage opens by naming remittance complexity and answering it with the brand name. Feature copy uses short benefit labels, including “빠른 속도”, “간편 송금 신청” and “저렴한 수수료”. A heading says “5분이면 끝! 앱으로 간편하게 송금 신청”. These exact Korean strings occur in the opened homepage bundle; the hero is also visible in the survey screenshot. [Homepage source](https://www.themoin.com/build/moin.700a455520ec93ed2fd7.js).

As an editorial reading, the voice is plain and benefit-led: time, cost and the next action are named directly. The “five minutes” phrase describes applying for a transfer, not guaranteed arrival of money. Numerical speed or saving comparisons are Moin's marketing claims, not independent findings in this design reference. No official prohibited-writing register was found.

## Agent Prompt Guide

“Build a Korean remittance homepage on #ffffff. Use the loaded Spoqa Han Sans 400/700 families. Place two large 32px/700 amount rows beside the hero copy. Keep the sending input #242424 with 0px corners and no state-induced colour change. Use a 360×50px exchange action with #0082ff fill, white 16px/400 text, 6px corners and zero padding. Hover and press use #0068d0, a 30% navy border and the measured blue shadow.”

“Build the header action separately: 126×40px, #007bff fill/border, white 16px/700 text, 6px corners and 8px 16px padding; hover and press use #0056b3. The student-discount link sits transparently over white in #818daa, dims to opacity 0.5 and gains an underline on hover.”

“Use a charcoal review action at #333333, 52px high, 6px corners, 14px 48px padding and white 16px/700 text. Hover and press use opacity 0.9. Pair it with 48px white carousel squares: #e0e0e0 border, 8px radius, #e6f2ff hover/press fill and border. Preserve the supplied raster arrow.”

The source-backed supporting hierarchy is 40px hero, 32px review heading, 24px feature heading and 16px eyebrow; refer to §3 for its declaration-only measurement boundary.

## Governance

### Known Gaps

- **Contrast, `button-primary`.** Text `#ffffff` on `#0082ff` measures 3.73:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `button-nav`.** Text `#ffffff` on `#007bff` measures 3.98:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
