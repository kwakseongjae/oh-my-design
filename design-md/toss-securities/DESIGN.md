---
name: Toss Securities
colors:
  primary: '#3182f6'
  canvas: '#ffffff'
  foreground: '#1a1f29'
  body: '#4e5968'
  on-primary: '#ffffff'
  dialog-canvas: '#fbfcfd'
typography:
  compact:
    fontSize: 13px
    fontWeight: 600
    lineHeight: 20px
    use: Public WTS compact menu-trigger text
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 23.2px
    use: Public WTS body, tab, menu, and dialog copy
  marketing-heading:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 28.8px
    use: Investment-product marketing H1
rounded:
  compact-control: 7px
  primary: 8px
  menu: 12px
  dialog: 16px
  marketing-pill: 100px
spacing:
  xs: 4
  sm: 8
  md: 12
  lg: 14
  xl: 16
components:
  wts-primary-entry:
    type: button
    backgroundColor: '#3182f6'
    textColor: '#ffffff'
    rounded: 8px
    padding: 6px 12px
    height: 32px
    typography: 14px / 600 / 16px
    states: default, focus, and pressed observed; colors and geometry remained the same in the retained samples (the dump records no opacity, outline, or transform; the focus frame followed a mouse press and is not a keyboard focus-visible measurement)
    use: Public WTS compact primary link-action
  investment-primary:
    type: button
    backgroundColor: '#3182f6'
    textColor: '#ffffff'
    rounded: 100px
    padding: 11px 14px
    height: 40px
    typography: 15px / 600 / 18px
    states: 'default observed; the capture holds no hover, pressed, or focus sample for this element (corrected 2026-09-29: those state names belong to the same-class secondary pill)'
    use: Investment-products marketing primary action
  wts-selection-dialog:
    type: dialog
    backgroundColor: '#fbfcfd'
    textColor: '#4e5968'
    rounded: 16px
    size: 640px x 600px
    typography: 16px / 400 / 23.2px
    states: dialog-open observed
    use: Public WTS selection dialog container
  wts-tab:
    type: tab
    backgroundColor: transparent
    textColor: rgba(18, 31, 51, 0.47)
    rounded: 0px
    padding: 0px
    height: 36px
    typography: 16px / 400 / 18.4px
    selected: fg rgba(26, 31, 41, 0.89)
    hover: fg rgba(22, 31, 46, 0.61)
    pressed: fg rgba(22, 31, 46, 0.61)
    states: unselected rest, selected, hover, and pressed sampled; focus not sampled
    use: Public WTS tab
  wts-segmented-radio:
    type: toggle
    backgroundColor: transparent
    textColor: rgba(18, 31, 51, 0.47)
    rounded: 5px
    padding: 0px
    height: 24px
    typography: 16px / 400 / 18.4px
    checked: fg rgba(26, 31, 41, 0.89)
    hover: bg rgba(13, 25, 74, 0.02)
    pressed: bg rgba(7, 25, 76, 0.04)
    states: unchecked rest, checked, hover, and pressed sampled; focus not sampled
    use: Public WTS segmented radio option (role=radio)
  wts-content-card-link:
    type: card
    backgroundColor: transparent
    textColor: '#4e5968'
    rounded: 12px
    padding: 4px
    size: 248px x 176px
    typography: 16px / 400 / 23.2px
    hover: bg rgba(13, 25, 74, 0.02)
    pressed: bg rgba(7, 25, 76, 0.04)
    states: rest, hover, and pressed sampled; focus not sampled
    use: Public WTS content card link
  wts-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: rgba(22, 31, 46, 0.61)
    rounded: 9px
    padding: 8px 12px
    height: 36px
    typography: 14px / 600 / 20px
    states: rest sampled; the hover, pressed, and focus frames caught a colour transition in progress (alpha 0.61 to 0.63-0.67, different per link), so no state value is declared
    use: Public WTS top navigation link
  wts-menu-trigger:
    type: button
    backgroundColor: rgba(7, 25, 76, 0.04)
    textColor: rgba(26, 31, 41, 0.89)
    rounded: 7px
    padding: 4px 8px
    height: 28px
    typography: 13px / 600 / 20px
    shadow: rgba(0, 23, 51, 0.02) 0px 0px 0px 0.5px inset
    states: rest sampled; expanded and menu-open observed through the captured menu interaction; no pointer-state sample
    use: Public WTS compact menu trigger
  wts-expanded-menu:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#4e5968'
    rounded: 12px
    size: 160px x 204px
    typography: 16px / 400 / 23.2px
    shadow: rgb(212, 217, 225) 0px 0px 0px 0.5px inset, 0 16px 24px -2px rgba(0,0,0,0.06), 0 8px 56px rgba(0,0,0,0.1)
    states: expanded and menu-open observed
    use: Public WTS expanded menu container
  wts-dialog-input:
    type: input
    backgroundColor: transparent
    textColor: rgba(0, 12, 30, 0.8)
    rounded: 0px
    padding: 0px
    height: 17px
    typography: 15px / 600 / 17.25px
    states: observed only inside the opened selection dialog; no pointer-state sample
    use: Text field inside the public WTS selection dialog; its visible frame belongs to a wrapper the capture did not sample
  investment-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: rgba(253, 253, 255, 0.75)
    rounded: 0px
    padding: 0px 8px
    height: 14px
    typography: 14px / 600 / 14px
    hover: 'fg #3182f6'
    pressed: 'fg #3182f6'
    states: rest, hover, and pressed sampled on nine header controls; focus not sampled
    use: Investment-products header navigation link
  investment-secondary:
    type: button
    backgroundColor: rgba(2, 32, 71, 0.05)
    textColor: rgba(3, 18, 40, 0.7)
    rounded: 100px
    padding: 11px 14px
    height: 40px
    typography: 15px / 600 / 18px
    states: rest sampled; the hover, pressed, and focus frames differ only by transition-frame deltas (fill alpha 0.05 to 0.055, fractional inset-shadow width), so no state value is declared
    use: Investment-products secondary pill
fonts:
  roles:
    sans: Toss Product Sans
---

# Design System Inspiration of Toss Securities (토스증권)

## Overview

### Visual Theme & Atmosphere

Toss Securities positions itself as an investment platform for both beginners and experienced investors: the company says its mission is to empower everyone with investing, combining access to global markets, investment information, social participation, and expanding channels such as WTS. Its public web language turns that broad promise into a familiar Toss hierarchy—white canvas, dense dark-neutral reading text, a precise blue action color, and a single Korean-first product face—rather than turning the marketing site into a simulation of a trading terminal. The result is an inviting, information-led public entry point for a regulated investment product.

The supplied 2026-07-13 capture establishes three separate public domains. `www.tossinvest.com` is a public WTS surface with controls, tabs, a menu, and a dialog; `home.tossinvest.com/en/corporate-info` is corporate context; and `home.tossinvest.com/en/investment-products` is a marketing explanation of stocks, ETFs, options, and bonds. They share `#3182f6`, `#ffffff`, `#1a1f29`, `#4e5968`, and Toss Product Sans, but their component geometry is not automatically interchangeable. The compact 32px WTS action and the 40px marketing pill are recorded separately.

No authenticated account, native app, order-entry flow, or documentation UI was captured in this packet. The former dark-canvas, red/blue market-semantic, token-tree, and two-radius claims are therefore removed rather than carried forward from a legacy snapshot.

**Key Characteristics:**

- Light public-web canvas: `#ffffff`, `#1a1f29`, and `#4e5968`
- Shared Toss blue `#3182f6` for observed primary actions and links
- Loaded Toss Product Sans on the public WTS and investment-marketing surfaces
- Compact WTS controls at 7–8px corners; expanded menu and dialog containers at 12px and 16px
- A 100px-radius marketing pill is a marketing-specific component, not a universal product radius
- Public WTS menu and dialog were interaction-expanded; focus, hover, and pressed states are preserved only where observed
- Measured pointer states are quiet: WTS tabs deepen their text alpha on hover, segmented radios and content cards take a 2% then 4% navy wash, and the investment-products header links turn Toss blue `#3182f6`

### Primary tasks

- Choose among domestic and overseas stocks, ETFs, options, and bonds
- Trade through the public web trading surface in a browser
- Read investment information and take part in the community

### Iconography & Imagery

The public WTS capture shows compact control and text-led UI; the expanded menu and dialog establish interaction containers but not a reusable icon family. The investment-products page uses product imagery and explanatory marketing content. No proprietary chart, illustration, or native-app icon system is promoted from this evidence.

### Brand Narrative

Toss Securities is a Korean securities company building an investment platform around the mission “To Empower Everyone with Investing.” Its official company page describes an aim to offer better investing experiences and access to opportunities in global capital markets.

The current public company narrative expands that scope from stock trading toward an inclusive platform for beginners and experts, with investment content, a social community, broader investment products, and WTS access. Its investment-products page makes the portfolio breadth concrete through domestic and overseas stocks, ETFs, U.S. stock options, and overseas bonds.

The company page also records current international expansion milestones, including a U.S. broker-dealer license in 2025. This is company context, not a claim about any uninspected product interface.

### Principles

1. **Opportunity should be broadly reachable.** The stated mission is to empower everyone with investing.
   *UI implication:* explain product choices and next actions without presuming expert knowledge.
2. **Global-market access should feel connected.** The company describes global products and WTS as access channels.
   *UI implication:* make market, product, and account context explicit rather than relying on implicit navigation.
3. **Technology should make investing easier.** The official narrative connects technology and AI with better decisions.
   *UI implication:* present information as decision support, not as a promise of outcomes.

### Personas

*These are official audience-scope archetypes, not user-research findings or synthetic satisfaction scores.*

- **Beginning investor:** the company explicitly names beginners among the people its inclusive platform should serve. Use plain explanations and visible product context.
- **Experienced investor:** the same platform is intended to include experts. Keep high-information paths available without representing unobserved native or authenticated UI as canonical.
- **Cross-market investor:** the official product range includes domestic and overseas investments. Make product and market boundaries explicit.

## Colors

- **Primary action** (`#3182f6`): observed on the public WTS compact primary action and the investment-products marketing CTA.
- **Canvas** (`#ffffff`): observed public WTS and marketing page canvas.
- **Foreground** (`#1a1f29`): observed compact WTS foreground.
- **Supporting text** (`#4e5968`): observed WTS menu, dialog, and cross-surface supporting text.
- **On primary** (`#ffffff`): observed text on `#3182f6` actions.
- **Dialog canvas** (`#fbfcfd`): observed public WTS dialog container.

The packet does not establish a public positive/negative market-color system, dark trading canvas, error color, or success color. Those values are intentionally absent rather than inferred from the Toss parent brand or a previous snapshot. Hover and pressed treatments were measured as translucent navy washes and text-alpha steps (§4, §14), not as new opaque palette colors; the one opaque state color is `#3182f6` on the investment-products header links.

## Typography

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Toss’s first-party design conference describes Toss Product Sans as a typeface developed for financial numbers and symbols across mobile, desktop, and offline contexts. |
| Live computed surface-use | `Toss Product Sans` is the computed first family on the supplied public WTS and investment-marketing capture: loaded/high, 419 visible uses, backed by matching FontFaceSet records and dated `static.toss.im/tps/20260223/` sources. It is the canonical public-web UI family. |
| Official distributed brand asset | Tossface is a separate Toss-designed emoji font distributed through the official `toss/tossface` repository in TTF, OTF, WOFF, and WOFF2 formats. |
| Declared-only | Tossface has `@font-face` sources in this capture but zero visible first-family uses. It remains contextual asset information, not `tokens.typography.family.sans`. |
| System / unresolved | The computed fallback stack includes platform and Korean system faces. No fallback is promoted as a Toss Securities type token, and native-app typography was not inspected. |

### Observed hierarchy

| Role | Size | Weight | Line height | Surface |
|---|---:|---:|---:|---|
| Compact menu trigger | 13px | 600 | 20px | Public WTS |
| Body, tab, menu, dialog | 16px | 400 | 23.2px | Public WTS |
| Investment-products H1 | 18px | 700 | 28.8px | Marketing |
| Marketing primary action | 15px | 600 | 18px | Marketing |

## Layout

### Layout & Spacing

The observed public WTS uses compact 4px, 8px, 12px, and 16px spacing clusters; the investment-marketing CTA contributes a 14px horizontal inset. Treat this as a small observed set, not as a complete spacing scale. WTS has square-edged tabs, 7–8px compact controls, a 12px menu, and a 16px dialog; the marketing pill’s 100px radius belongs only to that action.

## Elevation & Depth

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.menu`: `0 16px 24px -2px rgba(0,0,0,0.06), 0 8px 56px rgba(0,0,0,0.1)`
- `shadow.dialog`: `0 12px 28px -4px rgba(0,0,0,0.12), 0 8px 56px -4px rgba(0,0,0,0.1)`

## Motion & Easing

No duration, easing, or transition token was measured in the supplied evidence. The captured hover, focus, pressed, menu, and dialog snapshots establish state presence only; they do not authorize a motion scale. Several state frames were caught mid-transition (fractional inset-shadow widths, text alpha that differs link to link), which shows that transitions exist but not their duration or easing. Keep any future motion specification separate until first-party computed transition evidence is available.

## Components

### Public WTS compact primary entry

**Default / focus / pressed**
- Background: `#3182f6`
- Text: `#ffffff`
- Radius: `8px`
- Padding: `6px 12px`
- Height: `32px`
- Font: `14px / 600 / 16px Toss Product Sans`
- Focus: observed; retained color and geometry remained unchanged. The frame followed a mouse press, so it is not a keyboard `:focus-visible` measurement.
- Pressed: observed; retained color and geometry remained unchanged (only an alpha-0 inset-shadow width moved, 1px to 0.98px; the style dump records no opacity, outline, or transform)
- Use: public WTS compact link-action at `home::[data-omd-capture="6"]`

### Investment-products marketing primary

**Default**
- Background: `#3182f6`
- Text: `#ffffff`
- Radius: `100px`
- Padding: `11px 14px`
- Height: `40px`
- Font: `15px / 600 / 18px Toss Product Sans`
- States: default only. The capture holds no hover, pressed, or focus sample for `surface-3::[data-omd-capture="11"]`; the state samples on this page belong to the same-class (`css-f411df`) secondary pill described below. Corrected 2026-09-29; the July text had attributed them to this action.
- Use: investment-products marketing action at `surface-3::[data-omd-capture="11"]`

### Public WTS expanded menu

**Menu-open**
- Background: `#ffffff`
- Text: `#4e5968`
- Radius: `12px`
- Size: `160px x 204px`
- Shadow: `0 16px 24px -2px rgba(0,0,0,0.06), 0 8px 56px rgba(0,0,0,0.1)`
- Hairline: the computed box-shadow also opens with `rgb(212, 217, 225) 0px 0px 0px 0.5px inset`, which the shadow token leaves out
- Font: `16px / 400 / 23.2px Toss Product Sans`
- States: expanded and menu-open observed
- Use: public WTS menu container at `home::[data-omd-interaction-capture="menu-0-0"]`

### Public WTS selection dialog

**Dialog-open**
- Background: `#fbfcfd`
- Text: `#4e5968`
- Radius: `16px`
- Size: `640px x 600px`
- Shadow: `0 12px 28px -4px rgba(0,0,0,0.12), 0 8px 56px -4px rgba(0,0,0,0.1)`
- Font: `16px / 400 / 23.2px Toss Product Sans`
- States: dialog-open observed
- Use: public WTS dialog container at `home::[data-omd-interaction-capture="dialog-1-0"]`

### Public WTS tab

**Unselected / selected / hover / pressed**
- Background: transparent
- Text: `rgba(18, 31, 51, 0.47)` unselected; `rgba(26, 31, 41, 0.89)` selected
- Radius: `0px`
- Padding: `0px`
- Height: `36px`
- Font: `16px / 400 / 18.4px Toss Product Sans`
- Hover: text `rgba(22, 31, 46, 0.61)`
- Pressed: text `rgba(22, 31, 46, 0.61)`
- Use: public WTS tabs (`role=tab`) at `home::[data-omd-capture="13"]` and `home::[data-omd-capture="14"]`; selected sample `home::[data-omd-capture="12"]`

### Public WTS segmented radio

**Unchecked / checked / hover / pressed**
- Background: transparent
- Text: `rgba(18, 31, 51, 0.47)` unchecked; `rgba(26, 31, 41, 0.89)` checked
- Radius: `5px`
- Padding: `0px`
- Height: `24px`
- Font: `16px / 400 / 18.4px Toss Product Sans`
- Hover: fill `rgba(13, 25, 74, 0.02)`
- Pressed: fill `rgba(7, 25, 76, 0.04)`
- Use: `role=radio` options at `home::[data-omd-capture="18"]`, `"19"`, `"22"`, and `"23"`, which all record the same values; checked sample `home::[data-omd-capture="17"]`

### Public WTS content card link

**Rest / hover / pressed**
- Background: transparent
- Text: `#4e5968`
- Radius: `12px`
- Padding: `4px`
- Size: `248px x 176px`
- Font: `16px / 400 / 23.2px Toss Product Sans`
- Hover: fill `rgba(13, 25, 74, 0.02)`
- Pressed: fill `rgba(7, 25, 76, 0.04)`, the same wash the compact menu trigger carries at rest
- Use: content card link at `home::[data-omd-capture="11"]`

### Public WTS top navigation link

**Rest**
- Background: transparent
- Text: `rgba(22, 31, 46, 0.61)`
- Radius: `9px`
- Padding: `8px 12px`
- Height: `36px`
- Font: `14px / 600 / 20px Toss Product Sans`
- States: hover, pressed, and focus frames were sampled but caught the colour transition in progress (text alpha between 0.627 and 0.667, different per link), so no state value is declared
- Use: top navigation links at `home::[data-omd-capture="2"]`, `"3"`, and `"4"`

### Public WTS compact menu trigger

**Rest / expanded**
- Background: `rgba(7, 25, 76, 0.04)`
- Text: `rgba(26, 31, 41, 0.89)`
- Radius: `7px`
- Padding: `4px 8px`
- Height: `28px`
- Font: `13px / 600 / 20px Toss Product Sans`
- Shadow: `rgba(0, 23, 51, 0.02) 0px 0px 0px 0.5px inset`
- States: the captured menu interaction expanded it (expanded, menu-open); no pointer-state frame was sampled for it
- Use: menu trigger at `home::[data-omd-capture="27"]`, which opened the expanded menu above

### Public WTS dialog text field

**Dialog-open**
- Background: transparent
- Text: `rgba(0, 12, 30, 0.8)`
- Radius: `0px`
- Padding: `0px`
- Height: `17px`
- Font: `15px / 600 / 17.25px Toss Product Sans`
- States: observed only inside the opened selection dialog; no pointer-state frame
- Use: text field at `home::[data-omd-interaction-capture="dialog-1-2"]`. The input element itself is borderless; its visible frame belongs to a wrapper the capture did not sample, so no field border or fill is claimed.

### Investment-products header navigation link

**Rest / hover / pressed**
- Background: transparent
- Text: `rgba(253, 253, 255, 0.75)`
- Radius: `0px`
- Padding: `0px 8px`
- Height: `14px`
- Font: `14px / 600 / 14px Toss Product Sans`
- Hover: text `#3182f6`
- Pressed: text `#3182f6`
- Use: eight header links, `surface-3::[data-omd-capture="1"]` through `"8"`, and the header button `"9"` record the same rest and state values. The light text implies a dark backdrop, but the backdrop's own fill was not part of the sampled elements and is not claimed.

### Investment-products secondary pill

**Rest**
- Background: `rgba(2, 32, 71, 0.05)`
- Text: `rgba(3, 18, 40, 0.7)`
- Radius: `100px`
- Padding: `11px 14px`
- Height: `40px`
- Font: `15px / 600 / 18px Toss Product Sans`
- States: hover, pressed, and focus frames were sampled but differ only by transition-frame deltas (fill alpha 0.05 to 0.055, inset-shadow width 1px to 0.90–0.98px), so no state value is declared
- Use: secondary pill at `surface-3::[data-omd-capture="13"]`, sharing the `css-f411df` class and 40px geometry with the blue primary

Only selectors, surfaces, and states present in the supplied raw collector evidence are described here. The capture did not establish native-order, toast, error, disabled, or checkout variants; the content card link is the only card-like control sampled. Focus frames exist for some controls, but the collector pressed the mouse before calling `.focus()`, so no focus value in this reference is a keyboard `:focus-visible` measurement.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.tossinvest.com/?focusedProductCode=A000660 · https://home.tossinvest.com/en/corporate-info · https://home.tossinvest.com/en/investment-products · https://toss.im/simplicity-21/sessions/3-3 · https://github.com/toss/tossface
**Tier 2 sources:** https://getdesign.md/toss-securities (direct detail attempt; no importable record returned) · https://styles.refero.design/?q=Toss%20Securities (query attempt; no importable record returned)
**Conflicts unresolved:** none

### States

| State | Evidence boundary |
|---|---|
| Focus | A public WTS compact primary focus frame was captured; its retained colors and geometry match the rest values. The marketing primary has no focus frame (corrected 2026-09-29). Every focus frame in this capture followed a mouse press (the collector presses before calling `.focus()`), so none is a keyboard `:focus-visible` measurement and no focus value is declared. |
| Hover | Measured: WTS tab text `rgba(18, 31, 51, 0.47)` → `rgba(22, 31, 46, 0.61)`; segmented radio and content card fill transparent → `rgba(13, 25, 74, 0.02)`; investment header links `rgba(253, 253, 255, 0.75)` → `#3182f6`. WTS top-navigation links and the investment secondary pill were sampled mid-transition, so no hover value is declared for them. The marketing primary has no hover frame (corrected 2026-09-29). |
| Pressed | Measured: WTS tab text → `rgba(22, 31, 46, 0.61)`; segmented radio and content card fill → `rgba(7, 25, 76, 0.04)`, the wash the compact menu trigger carries at rest; investment header links → `#3182f6`. The WTS compact primary's pressed frame keeps its colors and geometry; the style dump records no opacity, outline, or transform. The marketing primary has no pressed frame (corrected 2026-09-29). |
| Expanded / menu-open | One public WTS menu interaction was expanded and recorded. |
| Dialog-open | One public WTS dialog interaction was opened and recorded. |
| Selected / unchecked | Public WTS tab and radio-like controls exposed selected and unchecked states: selected tab and checked radio text `rgba(26, 31, 41, 0.89)`, unselected and unchecked `rgba(18, 31, 51, 0.47)`. |
| Disabled | Not observed; no disabled token or variant is claimed. |
| Error | Not observed; no error token or variant is claimed. |
| Loading / skeleton | Not observed; no loading or skeleton token is claimed. |
| Empty / success | Not observed; no empty or success treatment is claimed. |

## Voice & Tone

### Voice

The official corporate language is direct, inclusive, and opportunity-oriented: it frames the service around better investment experiences, access to global markets, and technology that makes investing easier. The samples below are original tone guidance, not verbatim Toss Securities copy.

- “See the choice clearly, then decide.”
- “투자를 더 쉽게, 다음 기회를 더 가깝게.”
- “One account, more ways to invest.”

| Attribute | Do | Don't |
|---|---|---|
| Inclusive | Explain options for a broad investor range. | Assume expertise or exclude beginners. |
| Direct | Name the product, market, and next action plainly. | Make a regulated choice sound effortless or guaranteed. |
| Useful | Pair a feature with the decision it supports. | Use market drama as decoration. |

The examples in §9 are illustrative paraphrases only; no tagline or customer promise is reproduced as official copy.

## Governance

### Usage Guidelines

#### Do

- Keep public WTS compact actions distinct from the 40px marketing pill.
- Use `#3182f6` with `#ffffff` for the observed primary action pairing.
- Preserve the recorded WTS container progression: 12px menu, 16px dialog.
- Use Toss Product Sans where the verified public web family is available; label unavailable specimens rather than substituting a system face as if it were Toss Product Sans.
- Limit interaction claims to the sampled states: WTS tab and segmented-radio hover and pressed, content-card hover and pressed, investment header-link hover and pressed, the compact primary's pressed frame, expanded/menu-open, and dialog-open. Focus frames were not keyboard-measured.

#### Don't

- Reintroduce an unverified dark trading canvas or red/blue market semantics from the legacy snapshot.
- Treat the corporate or investment-marketing page as proof of authenticated or native trading UI.
- Generalize the 100px marketing pill to WTS controls.
- Promote Tossface to the UI family merely because it is declared in the stack.
- Invent disabled, error, loading, toast, or checkout variants, or card treatments beyond the sampled content card link.

### Accessibility & Density

The public WTS samples use `#1a1f29` and `#4e5968` on light surfaces, while primary actions use `#ffffff` on `#3182f6`. The packet establishes visible selected and unselected tab/radio controls plus menu and dialog expansion, but it does not provide a full keyboard, screen-reader, contrast, disabled, error, or responsive audit. Retain the observed state distinction and perform a product-specific accessibility audit before extending it to account or order entry.

### Reference URLs

- Public WTS surface: https://www.tossinvest.com/?focusedProductCode=A000660
- Corporate context: https://home.tossinvest.com/en/corporate-info
- Investment-products marketing: https://home.tossinvest.com/en/investment-products
- Toss Product Sans context: https://toss.im/simplicity-21/sessions/3-3
- Tossface official repository: https://github.com/toss/tossface

### Known Gaps

- **Contrast, `wts-primary-entry`.** Text `#ffffff` on `#3182f6` measures 3.71:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `investment-primary`.** Text `#ffffff` on `#3182f6` measures 3.71:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `wts-tab`.** Text `#121f3378` on `#00000000` measures 1.27:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `wts-segmented-radio`.** Text `#121f3378` on `#00000000` measures 1.27:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `wts-content-card-link`.** Text `#4e5968` on `#00000000` measures 2.95:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `wts-nav-link`.** Text `#161f2e9c` on `#00000000` measures 1.27:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `wts-menu-trigger`.** Text `#1a1f29e3` on `#07194c0a` measures 1.02:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `wts-dialog-input`.** Text `#000c1ecc` on `#00000000` measures 1.07:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `investment-secondary`.** Text `#031228b3` on `#0220470d` measures 1.16:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
