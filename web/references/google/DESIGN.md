---
name: Google
colors:
  primary: '#1a73e8'
  canvas: '#ffffff'
  canvas-dark: '#22242a'
  foreground: '#3c4043'
  foreground-inverse: '#e8e8e8'
  muted: '#5f6368'
  outline: '#dadce0'
typography:
  display:
    fontSize: 48px
    fontWeight: 400
    lineHeight: 56px
    letterSpacing: '-0.5px'
    use: Business Profile section heading only.
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    use: Business Profile cards, lists, and body copy.
  action:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0.5px
    use: Business Profile CTA and action labels.
  search-field:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22px
    use: Advanced Search text input; Arial system face.
rounded:
  nav: 4px
  search-key: 8px
  card: 24px
  full: 1000px
spacing:
  xs: 4
  sm: 8
  md: 16
  lg: 24
  xl: 32
components:
  business-primary:
    type: button
    backgroundColor: '#1a73e8'
    textColor: '#ffffff'
    rounded: 1000px
    padding: 8px 16px
    height: 42px
    typography: 16px / 500 / Google Sans
    states: default, hover, pressed, and focus observed on Business Profile high-emphasis action
    use: Business Profile high-emphasis action only.
    hover: '#1a72e7'
    pressed: '#185abc'
    focus: '#185abc'
  business-secondary:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1a73e8'
    border: '1px solid #dadce0'
    rounded: 1000px
    padding: 8px 16px
    height: 42px
    typography: 16px / 500 / Google Sans
    states: default, hover, pressed, and focus observed on Business Profile medium-emphasis action
    use: Business Profile medium-emphasis action only.
    hover: '#1a72e6'
    pressed: '#e8f1fd'
    focus: '#e4eefc'
  business-nav:
    type: button
    textColor: '#202124'
    rounded: 4px
    padding: 0px 10px
    height: 48px
    typography: 14px / 500 / Google Sans
    states: default, hover, pressed, and focus observed on Business Profile menu item
    use: Business Profile global navigation menu item.
  business-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#3c4043'
    rounded: 24px
    padding: 18px 18px 32px
    typography: 16px / 400 / Google Sans Text
    states: disabled observed on the captured inactive image card
    use: Business Profile scrolling image card only.
  search-key:
    type: button
    backgroundColor: '#303134'
    textColor: '#e8eaed'
    border: '1px solid #303134'
    rounded: 8px
    padding: 0px 16px
    height: 36px
    typography: 14px / 500 / Arial
    states: default, hover, pressed, and focus observed on dark Search submit controls
    use: Captured dark Search homepage submit key only.
    hover: '#5f6368'
    pressed: '#5f6368'
    focus: '#5f6368'
fonts:
  roles:
    ui: Google Sans
    text: Google Sans Text
    display: Google Sans Display
    search-system: Arial
---

# Design System Inspiration of Google

## Overview

### Visual Theme & Atmosphere

Google began as a search engine and now describes a product family used by billions; its stated mission is to organize the world's information and make it universally accessible and useful. That scope is expressed through an unusually disciplined split between task surfaces and brand-bearing product pages. The supplied July capture shows a dark public Search homepage that uses Arial and tight utility controls, alongside light Advanced Search and Business Profile surfaces that use Google Sans families, generous 24px cards, and rounded blue actions. The identity stays recognizable through a restrained blue action color, soft charcoal text, rounded controls, and the familiar multicolor mark rather than through one universal page theme. Google Design describes the same evolution in type: Product Sans served product lockups, Google Sans became the broader display/UI face, and Google Sans Text was developed for smaller, more legible reading sizes.

**Key Characteristics:**

- Search, Advanced Search, and Business Profile are separate observed product domains, not one interchangeable template.
- The captured Search homepage is dark (#22242a), while the two other captured surfaces are light.
- Google Sans, Google Sans Text, and Google Sans Display are live loaded faces on the Business Profile surface; Arial is live system typography on Search and Advanced Search.
- Business Profile actions use Google Blue (#1a73e8), full pills, and 42px or 50px heights.
- The captured inactive Business Profile card is white, 24px-rounded, and shadowless.

### Primary tasks

- Type a query into Search and submit it
- Fill in the advanced search form's text inputs
- Read the public Business Profile product page

### Brand Narrative

Google's official company history traces the company from Larry Page and Sergey Brin's Stanford work through the 1998 founding of Google, whose name reflected the mission to organize the world's information and make it universally accessible and useful. The same history identifies Search, YouTube, Android, Gmail, and other products as a broad global product ecosystem.

Google Design's account of Google Sans explains the visual bridge between that scale and a coherent interface language: Product Sans addressed product lockups after the 2015 identity update, Google Sans expanded the display/UI role, and Google Sans Text addressed smaller, longer reading. The supplied live evidence confirms that these roles remain separated rather than collapsed into a generic system-font fallback on the Business Profile surface.

### Principles

1. **Focus on the user.** Google states this directly. *UI implication:* lead with the task and use compact, comprehensible actions.
2. **Do one thing well.** Google states this directly. *UI implication:* do not add decorative controls where a Search or form task needs only input and a submit action.
3. **Fast is better than slow.** Google states this directly. *UI implication:* preserve the observed system-font treatment on Search-domain surfaces instead of forcing a visual substitution.
4. **Keep type role-specific.** Google Design documents distinct display and small-text design problems behind Google Sans and Google Sans Text. *UI implication:* use the captured family only in its observed role and surface.

### Personas

No first-party user-research or stakeholder-segment source was supplied for this packet. Do not infer named personas from Search, Advanced Search, or Business Profile traffic.

## Colors

### Observed product colors

- **Primary action blue** (#1a73e8): Business Profile high-emphasis actions and focus-ring source color.
- **Light canvas** (#ffffff): Advanced Search and Business Profile white surfaces.
- **Dark Search canvas** (#22242a): Captured Google Search homepage body background.
- **Business foreground** (#3c4043): Repeated Business Profile body and card text.
- **Search inverse foreground** (#e8e8e8): Repeated dark Search text and menu foreground.
- **Muted** (#5f6368): Search utility treatment and Business Profile secondary text.
- **Outline** (#dadce0): Observed Business Profile medium-emphasis action border.

### Source-domain boundary

Material Design 3 publishes its own typography guidance, but no Material documentation chrome or baseline palette is promoted here as a Google Search or Business Profile product token. Google logo and brand-resource guidance are identity context, not evidence for application component values.

## Typography

### Evidence classes

- **Official product-use context:** Google Design says Google Sans was built for product and marketing display use and Google Sans Text was developed for smaller, longer reading contexts.
- **Live computed surface-use:** The supplied capture records Google Sans (107 uses), Google Sans Text (145 uses), and Google Sans Display (4 uses) with matching loaded FontFaceSet entries and fonts.gstatic.com sources. Google Sans and Google Sans Text are therefore usable live UI families for the captured Business Profile surface; Google Sans Display is retained only for the captured 48px heading role.
- **Live system use:** Arial is the observed system family for the captured dark Search homepage and Advanced Search. It is not replaced with a branded fallback.
- **Declared-only or non-text assets:** Product Sans, Google Symbols, and Material Icons have declared faces but zero visible usage in this capture. Material Symbols Outlined was loaded once as an icon font, not promoted to a text family.
- **Official distributed asset and license boundary:** Google Sans Code is an official Google Fonts repository asset under the SIL Open Font License 1.1 and is described there as a code face for contexts including Gemini and Android Studio. It was not observed on the three supplied surfaces, so it is not a UI token. The supplied evidence does not establish a license URL for the loaded Google Sans, Google Sans Text, or Google Sans Display webfont files.

### Observed hierarchy

| Role | Family | Size | Weight | Line Height | Surface |
|---|---|---:|---:|---:|---|
| Business heading | Google Sans Display | 48px | 400 | 56px | Business Profile |
| Business action | Google Sans | 16px | 500 | 24px | Business Profile |
| Business body | Google Sans Text | 16px | 400 | 24px | Business Profile |
| Business navigation | Google Sans | 14px | 500 | 20px | Business Profile |
| Search field | Arial | 16px | 400 | 22px | Advanced Search |
| Search compact control | Arial | 14px | 500 | normal | dark Search homepage |

## Layout

- **Search homepage:** Captured as a dark, centered utility surface with compact 36px submit keys and a 50px text area.
- **Advanced Search:** Captured as a light form surface with 48px text inputs and 12px vertical / 16px horizontal field padding.
- **Business Profile:** Captured as a light public business-product page with 42px and 50px pill actions, 48px navigation rows, and 24px image cards.
- **Observed spacing values:** 4, 8, 12, 16, 24, 32, and 48px recur in the capture. These are observations, not a universal Google grid declaration.

### Responsive Behavior

The supplied collector evidence is desktop-only (1440x900). It confirms 48px Business Profile navigation rows, 42px and 50px Business Profile actions, 36px dark Search keys, and 48px Advanced Search inputs at that viewport. No mobile breakpoint, layout-collapse rule, or touch-target baseline is asserted from this packet.

## Elevation & Depth

| Treatment | Observed use |
|---|---|
| Flat | Business Profile high-emphasis and medium-emphasis actions, navigation, and inactive card default styles are shadowless. |
| State shadow | Dark Search submit-key hover uses rgba(23,23,23,0.24) 0px 1px 3px 0px. |
| Focus ring | Business Profile medium-emphasis and low-emphasis focus examples use a 2px blue outer ring. |

The capture does not support a claim that all Google product surfaces are shadowless or that Material documentation elevation is a Google product token.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`
- `shadow.search-key-hover`: `rgba(23,23,23,0.24) 0px 1px 3px 0px`

## Motion & Easing

The supplied capture records interaction states but no duration or easing measurement. Material Design 3 typography guidance is official design-system context, not evidence for a motion token on the captured Search or Business Profile pages.

## Components

### Business Profile high-emphasis action

**Default**

- Background: #1a73e8
- Text: #ffffff
- Border: 1px solid transparent
- Radius: 1000px
- Padding: 8px 16px
- Height: 42px
- Font: 16px / 500 / Google Sans
- Hover: #1a72e7 background observed
- Pressed: #185abc background observed
- Focus: #185abc background with 2px same-color outer ring observed
- Use: Business Profile high-emphasis action at surface-3 selector [data-omd-capture="11"]; hover, pressed, and focus were captured.

### Business Profile medium-emphasis action

**Default**

- Background: #ffffff
- Text: #1a73e8
- Border: 1px solid #dadce0
- Radius: 1000px
- Padding: 8px 16px
- Height: 42px
- Font: 16px / 500 / Google Sans
- Hover: #ffffff background and #1a73e8 border observed
- Pressed: #e8f1fd background observed
- Focus: #e4eefc background with 2px #1a73e8 outer ring observed
- Use: Business Profile medium-emphasis action at surface-3 selector [data-omd-capture="10"]; hover, pressed, and focus were captured.

### Business Profile navigation menu item

**Default**

- Text: #202124
- Radius: 4px
- Padding: 0px 10px
- Height: 48px
- Font: 14px / 500 / Google Sans
- Use: Business Profile global navigation menu item at surface-3 selector [data-omd-capture="2"]; hover, pressed, and focus were captured without a retained changed token value.

### Business Profile inactive image card

**Disabled**

- Background: #ffffff
- Text: #3c4043
- Radius: 24px
- Padding: 18px 18px 32px
- Font: 16px / 400 / Google Sans Text
- Use: Inactive Business Profile scrolling image card at surface-3 div. The disabled state was observed; no enabled-card substitution is asserted.

### Dark Search submit key

**Default**

- Background: #303134
- Text: #e8eaed
- Border: 1px solid #303134
- Radius: 8px
- Padding: 0px 16px
- Height: 36px
- Font: 14px / 500 / Arial
- Hover: 1px #5f6368 border and rgba(23,23,23,0.24) 0px 1px 3px 0px shadow observed
- Use: Dark Search submit control at home selector [data-omd-capture="12"]; focus, hover, and pressed were captured.

### Advanced Search text field

**Default**

- Text: #474747
- Padding: 12px 16px
- Height: 48px
- Font: 16px / 400 / Arial
- Use: Advanced Search input at surface-2 selector [data-omd-capture="2"]. The visible input itself was transparent; no container background or radius is asserted.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.google.com/ (captured dark Search product), https://www.google.com/advanced_search?hl=ko (captured Advanced Search product), https://business.google.com/kr/business-profile/ (captured Business Profile product), https://about.google/company-info/our-story/, https://about.google/company-info/philosophy/, https://design.google/library/google-sans-flex-font, https://about.google/brand-resource-center/guidance/, https://m3.material.io/styles/typography/overview, https://github.com/googlefonts/googlesans-code
**Tier 2 sources:** https://getdesign.md/google (direct fetch unavailable; no value adopted), https://styles.refero.design/?q=google (query fetch unavailable; no value adopted)
**Conflicts unresolved:** none

### Published component roster (36 published, none measured here)

Material 3 publishes **36 components**, read from its own component index at
`https://m3.material.io/components` on 2026-09-19. The index is client-rendered, so the names
come from the rendered page. No value, state or geometry below is asserted by this reference.

App bars, Badges, Bottom sheets, Button groups, Buttons, Cards, Carousel, Checkbox, Chips, Date pickers, Dialogs, Divider, Extended FABs, FAB menu, Floating action buttons (FABs), Icon buttons, Lists, Loading indicator, Menus, Navigation bar, Navigation drawer, Navigation rail, Progress indicators, Radio button, Search, Segmented buttons, Side sheets, Sliders, Snackbar, Split buttons, Switch, Tabs, Text fields, Time pickers, Toolbars, Tooltips

### What this reference measured

The five stylings in §4 were captured on Google product surfaces — the first one's `use:` string
says "Business Profile high-emphasis action only" — not on m3.material.io. Google's products are
built with Material, but a Business Profile control is a product observation and not a reading of
Material's published Buttons page. This file contains no Material class prefix on any capture.

None of the 36 above carries a measured value here.

### States

| State | Evidence boundary |
|---|---|
| Default action | Business Profile high- and medium-emphasis actions were captured. |
| Hover | Captured for Business Profile actions and dark Search submit keys; component-specific values are in §4 and .verification.md. |
| Pressed | Captured for Business Profile actions and dark Search submit keys; do not extrapolate to unobserved components. |
| Focus | Captured for Business Profile actions and dark Search submit keys; blue focus rings are recorded only where observed. |
| Disabled | Captured only for the Business Profile inactive image card. |
| Expanded menu | Captured on the dark Search homepage language/menu interaction. |
| Empty | No empty-state surface was observed |
| Loading | No loading-state surface was observed |
| Error | No error-state surface was observed |
| Success | No success-state surface was observed |

## Do's and Don'ts

### Do

- Keep the product surface boundary explicit: dark Search, light Advanced Search, and Business Profile use different observed treatments.
- Use Google Blue #1a73e8 only where the captured Business Profile action context supports it.
- Preserve Google Sans family roles where loaded usage and a matching FontFaceSet entry were captured.
- Keep Advanced Search in its observed Arial system typography.
- Reuse the measured full-pill, 4px navigation, 8px search-key, and 24px card geometry only in their observed contexts.

### Don't

- Replace Arial on Search or Advanced Search with a brand face.
- Treat Product Sans, Google Symbols, Material Icons, or Google Sans Code as a live UI family for the captured surfaces.
- Promote Material documentation chrome or baseline palette values to Search or Business Profile tokens.
- Reuse the captured disabled Business Profile card as an enabled-card specification.
- Generalize the dark Search submit-key shadow to all Google actions.

## Voice & Tone

Google's official philosophy leads with usefulness, focus, and speed. The current source language is concise and user-directed: Google says to focus on the user, to do one thing well, and that fast is better than slow. The product implication is a short, plain register that names the task and next action without inventing urgency or decorative brand voice.

| Context | Tone |
|---|---|
| Search and forms | Brief, functional, task-first |
| Product marketing | Helpful and direct |
| Help or error content | Plain-language cause and next step |

**Source-grounded voice samples:**

- "Focus on the user and all else will follow." — Google, Ten things we know to be true.
- "It is best to do one thing really, really well." — Google, Ten things we know to be true.
- "Fast is better than slow." — Google, Ten things we know to be true.

## Agent Prompt Guide

### Quick reference

- For a Business Profile action: #1a73e8 on white, 42px full pill, 8px 16px padding, Google Sans 16px/500.
- For a Business Profile secondary action: white, #1a73e8 text, #dadce0 border, 42px full pill.
- For dark Search submit keys: #303134, #e8eaed, 8px radius, 36px height, Arial 14px/500.
- For Advanced Search fields: transparent input, #474747 text, 12px 16px padding, 48px height, Arial 16px/400.
- For Business Profile body/cards: Google Sans Text 16px/400/24px; use the observed 24px card only where an inactive image card is intended.
