---
name: Headspace
colors:
  primary: '#0061ef'
  foreground: '#2d2c2b'
  ink-pure: '#000000'
  inherited-ink: '#4b4c4d'
  slate: '#44423f'
  canvas: '#ffffff'
  cream: '#f9f4f2'
  gold: '#ffce00'
  pink: '#ffa1cc'
  purple: '#3b197f'
  border-tan: '#e2ded9'
  border-input: '#d2d5de'
  on-primary: '#ffffff'
  action-focus: '#0040ea'
  primary-pressed: '#0000db'
  dark-hover: '#141313'
  soft-hover: '#e5e7ec'
typography:
  button:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.1
    use: Measured hero Try for $0 link
  button-sm:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.1
    use: Measured header Try for free link
  button-soft:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: '-0.54px'
    use: Measured Chat with Ebb link
  navigation:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.15
    use: Measured For You link at rest
  input:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Measured newsletter email input; no form submission
rounded:
  none: 0px
  sm: 8px
  card: 16px
  tab: 24px
  pill: 32px
components:
  button-primary:
    type: button
    backgroundColor: '#0061ef'
    textColor: '#ffffff'
    rounded: 32px
    padding: 14.3px 24px
    height: 48px
    typography: 14px / 700 Headspace Apercu
    hover: 'bg #0040ea'
    pressed: 'bg #0000db; translateY(2px); shadow becomes transparent; outline 2px solid #0040ea, offset 0px'
    focus: 'bg #0040ea; outline 2px solid #0040ea, offset 1px'
    use: Header Try for free link; white label; rest shadow rgba(65, 61, 69, 0.2) 0px 2px 0px 0px. Persistent ancestor-header shadow change is excluded.
  button-dark:
    type: button
    backgroundColor: '#2d2c2b'
    textColor: '#ffffff'
    rounded: 32px
    padding: 14px 20px
    height: 48px
    typography: 16px / 700 Headspace Apercu
    hover: 'bg #141313'
    pressed: 'bg #2d2c2b; translateY(2px); transparent shadow; outline 2px solid #0040ea, offset 0px'
    focus: 'bg #141313; outline 2px solid #0040ea, offset 1px'
    use: Hero Try for $0 link on the cream panel; white label and no visible rest shadow.
  button-soft:
    type: button
    backgroundColor: '#f9f4f2'
    textColor: '#44423f'
    rounded: 32px
    padding: 12.1px 24px
    height: 48px
    typography: 18px / 700 Headspace Apercu
    hover: 'bg #e5e7ec'
    pressed: 'bg #d2d5de; outline 2px solid #0040ea, offset 0px'
    focus: 'bg #e5e7ec; outline 2px solid #0040ea, offset 1px'
    use: Chat with Ebb link; slate label, no rest shadow and no measured press translation.
  nav-for-you:
    type: button
    textColor: '#2d2c2b'
    rounded: 0px
    padding: 0px
    height: 18.4px
    typography: 16px / 400 Headspace Apercu
    hover: font-weight 700; width 53px to 55px
    pressed: font-weight 700; width 55px, same as hover
    use: For You navigation link, transparent on the white header. Keyboard focus uses the browser auto outline; no focus token is declared.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Headspace Apercu
---

# Design System Inspiration of Headspace

## Overview

### Visual Theme & Atmosphere

Headspace brings meditation, mindfulness, sleep resources, AI guidance, coaching and therapy into an everyday mental-health companion. Its own history traces the company to Andy Puddicombe and Richard Pierson in 2010 and its merger with Ginger in 2021. The company connected its broader care offering to a unified Headspace brand in its October 2023 announcement; its current About page says it is now part of Sword. [Company](https://www.headspace.com/about-us) · [History](https://organizations.headspace.com/ginger-is-now-part-of-headspace) · [Brand expansion](https://organizations.headspace.com/blog/headspace-unveils-refreshed-brand-and-expands-offerings-for-lifelong-mental-health-support)

The visual expression combines an orange brand mark, illustrated faces, photographs of people and bold custom typography. Design partner ITAL/C describes a collaboration with Headspace's internal team that broadened the identity through photography, texture, depth, simplified illustration and a custom typeface developed by Colophon Foundry. This is a useful basis for building in the style: human imagery and illustration share the page, while the actions remain compact and legible. [Design partner's case study](https://italic-studio.com/projects/headspace-rebrand/)

The measured English homepage (`headspace.com/`, HTML `lang="en"`) opens on white, with two warm-cream hero panels and charcoal actions. A blue header CTA, a yellow announcement strip, rounded controls and the orange mark give it a varied color rhythm. Cream remains the most frequent explicit background in the census, but frequency does not describe the entire page canvas. The opening hero offers separate app and insurance-coverage routes; farther down, the interface presents needs, product modes and a content library.

#### Primary tasks

- Start an app trial or follow the online-therapy coverage link.
- Explore meditation, sleep and other mental-health content.
- Follow the Ebb companion route or compare plans.
- Find the business offering through the navigation.

### Brand Narrative

Headspace began in 2010 with former Buddhist monk Andy Puddicombe and advertising executive Richard Pierson. Its UK collection page locates the beginnings in London; that origin is distinct from the US operating address in today's terms. Its 2021 merger with Ginger brought meditation together with virtual mental-health care. The opened company history page describes Headspace serving 4,000+ organizations. [History](https://organizations.headspace.com/ginger-is-now-part-of-headspace) · [UK collection](https://www.headspace.com/collections/uk-collection) · [Current terms](https://www.headspace.com/terms-and-conditions)

The October 2023 announcement explicitly connected the Headspace brand expansion to the Ginger app becoming Headspace Care and a broader care offering. ITAL/C's case study describes evolving the existing identity with Headspace's internal designers. Two opened trade articles document the visual refresh in April and May 2024; they are secondary chronology. [Company announcement](https://organizations.headspace.com/blog/headspace-unveils-refreshed-brand-and-expands-offerings-for-lifelong-mental-health-support) · [Design partner](https://italic-studio.com/projects/headspace-rebrand/) · [It's Nice That](https://www.itsnicethat.com/articles/italic-studio-headspace-graphic-design-project-250424) · [PRINT](https://www.printmag.com/branding-identity-design/headspaces-refreshed-identity-offerings-signal-new-era-of-empowered-well-being/)

### Principles

These are implementation readings from the documented offering and observed public interface:

1. **Make routes clear.** The opening page gives the app trial and therapy coverage separate panels and actions.
2. **Let illustration and people coexist.** The design partner's identity work and the current hero both combine them.
3. **Keep geometry specific.** Reuse the measured pill, card, tile and field shapes in their respective roles.
4. **Make action states visible.** Preserve the measured fill changes, authored action rings and press movement where each exists.

### Personas

The opened company pages establish individual members, employers and health plans as audiences; named demographic personas and their motivations were not verified.

## Colors

These are normalized reference roles derived from the live public site. Both computed and stylesheet-declared custom-property inventories were empty.

| Role | Value | Evidence and application |
|---|---|---|
| Primary | `#0061ef` | Header “Try for free” fill; also the visible “Trending” label on the Ebb card. Blue has uses beyond a single CTA. |
| Foreground | `#2d2c2b` | Most frequent paragraph ink: 44 sampled paragraphs. Also the hero action fill and navigation text. |
| Canvas / white surface | `#ffffff` | Opening page and header; email field; white action and card labels. |
| Cream | `#f9f4f2` | Most frequent explicit background, 26 occurrences; hero panels and the “Chat with Ebb” link. |
| Inherited ink | `#4b4c4d` | Need-selector control’s own computed color and the site's global CSS declaration; it is not the dominant sampled paragraph ink. |
| Slate | `#44423f` | Cream action label and many footer links. |
| Pure ink | `#000000` | Newsletter input's computed text color. |
| Gold | `#ffce00` | Four explicit homepage backgrounds in the census. |
| Pink / purple | `#ffa1cc` / `#3b197f` | One explicit homepage background each; no content-specific semantic role was established. |
| Tan border | `#e2ded9` | The six need-selector tiles, 2px solid. |
| Input border / soft press | `#d2d5de` | Email border at rest, 1px solid; cream action's pressed fill. |
| Authored action focus / blue hover | `#0040ea` | Solid 2px outline on the three measured action links; primary CTA hover fill. |
| Primary pressed | `#0000db` | Header CTA pressed fill. |
| Dark hover | `#141313` | Hero CTA hover and keyboard-focus fill. |
| Soft hover | `#e5e7ec` | Cream CTA hover and keyboard-focus fill. |

The subscription page's returned stylesheet additionally declares **orange `#ff7300`** for the active content-mode chip and **amber `#ffa500`** for its base fill. Its final chip selector declares **`#141313`** text for rest, focus, hover and active styling. These are CSS declarations from `/subscriptions`, without computed subscription-page measurements; the orange fill follows selection. [Subscription surface](https://www.headspace.com/subscriptions)

## Typography

### Evidence classes

- **Official product use (company statement):** an explicit font specification for the native app was not established. The design partner documents a custom Colophon typeface for the identity; that is evidence of a brand commission. The measurements here describe the public marketing site.
- **Live-loaded:** `document.fonts` reports **Headspace Apercu 400 normal, 600 normal and 700 normal**. The body and sampled button declarations name that family; the census found no H1. Only this loaded family is included in the machine typography tokens.
- **Official distributed assets:** the site's `@font-face` rules point to `static.headspace.com/fonts/apercu-v1.002/`, with `HeadspaceApercu-Regular`, `HeadspaceApercu-Medium` and `HeadspaceApercu-Bold` WOFF2 sources for those loaded weights. The rules offer other file formats as well. Font files were not separately downloaded and no redistribution license was verified.
- **Declared-only:** Headspace Apercu 200 normal and italic faces at 200/400/600/700, plus Apercu Pro Mono normal at 200/400/600/700, appear in `@font-face` rules but not in the loaded-face list. No specimen is supplied for these faces.
- **Unresolved:** native-app typography, usage permissions and additional scripts. **Substitute: none chosen.**

### Measured control typography

| Control | Size / weight | Line height | Tracking |
|---|---|---|---|
| Header CTA | 14px / 700 | 15.4px | normal |
| Hero CTA | 16px / 700 | 17.6px | normal |
| Cream CTA | 18px / 700 | 21.6px | -0.54px |
| Header navigation | 16px / 400 | 18.4px | normal |
| Email field | 16px / 400 | 24px | normal |

### Heading declarations retained from the live HTML

The returned homepage stylesheet sets the root size to 16px. At its `min-width: 90rem` rules, the opening title uses 3.25rem (52px), 110% leading and -0.03em tracking (-1.56px); the large members statement uses 4rem (64px), line-height 1 and -0.03em (-1.92px). The needs heading uses 2rem (32px), 1.2em leading and -0.03em (-0.96px). Footer H4s use 1.5rem (24px), 2rem (32px) leading and -0.025em (-0.6px). These rules are bold. The values are declarations tied to named elements, not a second computed heading survey.

FAQ paragraph CSS retains the prior large-body metrics: 1.125rem (18px), weight 500, 1.625rem (26px) leading and -0.01em tracking. These are declarations, with no added specimen for a separately loaded 500 face.

The subscription CSS also sets “Check out our student and family plans, too.” at weight 600 and its “Meet Move Mode” H2 at weight 500. A universal weight-700 headline rule would lose this distinction. For a build, use the loaded family for the observed public-site roles, bold action labels and the documented tight display tracking. Some survey rows request weight 500, while the loaded-face inventory contains 400, 600 and 700.

## Layout

At 1440×1000, the opening page has a full-width announcement strip, a horizontal header, centered introductory copy and two unequal-width cream panels for the app and therapy routes. The survey places the left content edge at 48px. The need selectors form two rows of three. Product-mode buttons precede a horizontal feature track; farther down are library filters and a row of linked content cards. These are observed desktop arrangements.

The site's rich-text CSS exposes margin utilities of 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3 and 3.5rem: 4, 8, 12, 16, 24, 32, 40, 48 and 56px at its declared 16px root. Other section declarations include 4rem (64px) margins. These are available CSS values; a universal 8px base rule was not established.

Use the measured geometry by component: 32px action radii, 24px product-mode radii, 16px featured-card radii, 8px need-tile and field radii, and percentage circles for the audio controls. The hero-panel stylesheet declares a 1.5rem radius and adjusts padding at 48rem, 64rem and 90rem.

### Responsive Behavior

Only the 1440×1000 desktop surface was rendered. The current homepage CSS uses `min-width: 48rem`, `64rem` and `90rem` rules for the inspected headings and panels. The featured-card link declares 12×16.875rem by default, increasing to 19.875×27.125rem at 64rem, with a 1rem radius in both rules. Mobile layouts, touch behavior and motion preferences were not rendered or tested.

## Elevation & Depth

Cream panels, saturated backgrounds, illustration and photographs provide grouping. The measured dark action, cream action and featured card are shadowless at rest. The blue header CTA uses a shallow lower shadow: `rgba(65, 61, 69, 0.2) 0px 2px 0px 0px`. Press translates that action down 2px and makes the shadow transparent.

A header ancestor also carried `rgba(0, 0, 0, 0.07) 0px 5px 10px 0px` in the state data. Its change persisted after blur, so it is recorded as a header observation rather than focus styling. The system should not be described as universally shadowless.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`
- `shadow.button-primary`: `rgba(65, 61, 69, 0.2) 0px 2px 0px 0px`

## Motion & Easing

The three measured action links declare color, background-color, border-color, box-shadow and transform transitions of **0.15s (150ms)** with **`cubic-bezier(0.32, 0.94, 0.6, 1)`** and zero delay. The probe waited 900ms before each sampled state and recorded a 150ms longest transition. The blue and dark actions translate down 2px while pressed; the cream action did not translate in this pass.

The navigation link, featured card and email input report `all 0s ease 0s` on the measured element. This does not establish animation timing for their siblings or the wider page. Page reveals, breathing animations and reduced-motion behavior were not verified.

## Components

### Action links with measured states

All three are links, with a 2px transparent border at rest and white or slate labels as shown. Their background, outline and press behavior were measured independently.

| Control | Rest identity | Hover | Pressed | Keyboard focus |
|---|---|---|---|---|
| Header “Try for free” | 122.4×48px; radius 32px; padding 14.3px 24px; 14px/700; `#0061ef` / `#ffffff` | Fill `#0040ea` | Fill `#0000db`; moves down 2px; lower shadow becomes transparent; 2px solid `#0040ea` outline, offset 0px | Fill `#0040ea`; 2px solid `#0040ea` outline, offset 1px |
| Hero “Try for $0” | 113.6×48px; radius 32px; padding 14px 20px; 16px/700; `#2d2c2b` / `#ffffff` | Fill `#141313` | Fill returns to `#2d2c2b`; moves down 2px; transparent lower-shadow value; same solid outline at offset 0px | Fill `#141313`; same solid outline at offset 1px |
| “Chat with Ebb” | 159.9×48px; radius 32px; padding 12.1px 24px; 18px/700; `#f9f4f2` / `#44423f` | Fill `#e5e7ec` | Fill `#d2d5de`; solid outline at offset 0px; no measured translation | Fill `#e5e7ec`; solid outline at offset 1px |

Other surveyed cream links include “Learn more” and “Get started,” also 48px high with 12.1px 24px padding; only “Chat with Ebb” received a state pass. The page also has a 750.1×188px blue “Get your headspace” link: radius 112px, padding 56px 64px and 72px/700 type with 72px leading. That larger action is a rest observation.

The blue header action has the rest shadow `rgba(65, 61, 69, 0.2) 0px 2px 0px 0px`. The dark and cream links have `box-shadow: none` at rest.

### Navigation

The white header places the orange mark and wordmark at the left, navigation across the middle and the blue trial link at the right. The measured “For You” link is transparent, 53×18.4px, radius 0, padding 0 and `#2d2c2b` at 16px/400. Hover and press change weight to 700 and width to 55px; keyboard focus retains the regular weight and adds the browser's `auto` outline. That browser ring is not a brand focus token. The state capture also shows the expanded navigation panel.

### Cards, selectors and fields

- **Need-selector tile:** “Stress less” is a `div` with button role, 429.7×78px, white fill, own computed color `#4b4c4d`, 2px `#e2ded9` border, radius 8px and padding 8px 16px 8px 24px. This is a rest observation; its states were not probed.
- **Product-mode selector:** the survey's active “AI guidance” button has `#2d2c2b` / `#ffffff`, 48px height, radius 24px, padding 0 24px and 18px/700 type. Inactive “Guided meditations” uses `#f9f4f2` / `#2d2c2b`. These are surveyed rest variants, without an interaction-state measurement.
- **Featured Ebb card link:** 318×434px, radius 16px and padding 0, with white visible heading and paragraph text and a blue “Trending” label. Its anchor's own default blue does not describe the visible title. No hover change was measured within the probe's scope. Press changed inherited browser link color on wrappers while the visible labels stayed the same; focus added a browser ring and image-source changes that remained after blur. This card stays out of the component tokens.
- **Newsletter email field:** 283.3×58px, radius 8px, padding 24px 16px 8px, 16px/400, white fill, black text and 1px `#d2d5de` border at rest. Keyboard focus uses a browser ring. After empty-field blur, the evidence shows a red `#e01919` border and “Required”; this is persistent validation. No form was submitted. The field stays out of the component tokens.
- **Circular audio control:** surveyed at 48×48px, radius 50%, padding 10px and `#2d2c2b` / `#ffffff`. Playback and its states were not tested.

The fetched subscription HTML uses buttons for its Sleep and Meditate content chips. Their CSS declares 14px/500 type with 18px leading, radius 8px and padding 8px 12px at 48rem and above; their interactive states were not measured.

The subscription HTML declares a 0.75rem (12px) radius and `#ffce00` fill for a loading panel in the plans container. It does not establish the final selected-plan card. Its trial-link CSS sets height to auto, a blue fill, white text, a 2rem radius, default padding of 1.125rem, and padding of 1.25rem 2.5rem at 48rem and above. No trial-link height was measured on that page. These remain stylesheet facts, without an interactive component token.

### States

The measured action and navigation states are specified in §4. The Ebb card's unchanged hover is limited to its own styles and pseudo-elements, 11 descendants with their pseudo-elements, and three ancestor levels; it does not prove that every possible visual effect is absent. The email hover reading used the post-blur validation baseline; “Required” and its red border are not hover feedback. Default browser outlines are kept out of brand tokens.

Empty libraries, no-results screens, audio buffering, playback failures, subscription success and disabled treatments were not observed.

## Do's and Don'ts

- Build the public-site pattern with white ground, cream panels, charcoal text and the measured blue, charcoal and cream action variants.
- Match the component's actual radius: pills, 16px featured cards and 8px fields coexist.
- Preserve bold CTA labels and the measured authored action outlines.
- Treat the card's visible child text as the color reference; inherited browser link colors are not its palette.
- Keep native-app behavior, unseen responsive layouts and untested audio behavior outside this reference's instructions.

## Voice & Tone

The public interface uses short, task-led labels: “Try for free,” “Check your coverage,” “Stress less,” and “Chat with Ebb.” The subscription response retains “Be kind to your mind.” The fetched homepage meta description still reads: “Live a healthier, happier, more well-rested life in just a few minutes a day. Get the science-backed mental health app for every moment. Try for free.” Headspace's own About page describes support across everyday life and different levels of care. A practical reading of this copy is to name the need or next action directly; this is an editorial writing guide. [About](https://www.headspace.com/about-us) · [Subscriptions](https://www.headspace.com/subscriptions)

## Agent Prompt Guide

“Build a Headspace-style public marketing page with white ground and cream `#f9f4f2` panels. Use loaded Headspace Apercu, charcoal `#2d2c2b` paragraph text and the measured component geometry. The header trial link is 48px high with a 32px radius, `#0061ef` fill, white 14px/700 text and a 2px lower shadow. Hover fills `#0040ea`; press fills `#0000db`, moves down 2px and makes the shadow transparent. Keyboard focus draws a solid 2px `#0040ea` outline at 1px offset.”

For a secondary action, use the measured cream link with `#44423f` text, 18px/700 type and radius 32px. Its hover fill is `#e5e7ec` and pressed fill is `#d2d5de`. **Substitute: none chosen.**
