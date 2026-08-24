# Spotify Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Spotify is an audio streaming subscription service whose public company account traces its evolution from music listening to podcasts and audiobooks. Official company information says the service launched in 2008, later expanded into podcasts and then audiobooks in 2022, and now serves listeners across music, podcasts, and audiobooks. Its stated mission is to deliver creativity to the world "one note, one voice, one idea at a time," while connecting people to art and the creatives who shape it.

This contract covers three captured first-party surfaces: Open Spotify Web Player home (`https://open.spotify.com/`), Web Player search (`https://open.spotify.com/search`), and the company-info newsroom (`https://newsroom.spotify.com/company-info/`). It is not an authenticated-player layout audit. Player chrome, newsroom/editorial chrome, and partner-integration guidance remain separate evidence domains.

The following visual-character reading is a derived editorial implementation inference from the verified surfaces; it is not Spotify-authored or a separately published UI specification. The two captured Web Player entry surfaces use a very dark, content-led control layer: the measured search and circular-control surfaces are `#1f1f1f`, text is white or muted `#b3b3b3`, and the geometry repeatedly resolves to pills and circles. The public newsroom uses `#1ed760` as a filled CTA and a 100px pill radius; that is an editorial/newsroom treatment, not evidence of a matching Web Player button.

Spotify's 2026 design-history article describes the bright green as an intentional differentiator, calls out its early dark-mode product history, and names Spotify Mix as a distinctive typeface. It also describes a brand designed to flex with culture, content, creators, and community. Official context identifies Spotify Green and a flexible Spotify Mix typeface as brand expression, while the captured player loads `SpotifyMixUI` and `SpotifyMixUITitle`. The following causal reading of that article is a derived editorial implementation inference from the verified surfaces; it is not Spotify-authored or a separately published UI specification. That account explains the recognizable expression; it does not turn every brand or newsroom treatment into a player token.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Search the Open Spotify Web Player on home and `/search`.
- Use compact outlined actions and circular icon controls on the Web Player home.
- Read company information on the public newsroom company-info surface.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 names stakeholder groups on Spotify's official company surface, not fictional personas. Use those groups only: listeners who discover, manage, and enjoy music, podcasts, and audiobooks; artists and creators whose work the mission connects people to, with separate communities Spotify publishes for them; and partner developers who follow distinct attribution, artwork, linking, and playback requirements. Independently verified user outcomes are the three primary tasks above, mapped to the captured Web Player and newsroom surfaces. The listener/artist/partner bullets stay here as named stakeholder contexts; this capture is not an authenticated-player layout audit.

### Distinctive traits

- Player controls use `#1f1f1f`, `#ffffff`, `#b3b3b3`, `#7c7c7c`, 500px, 9999px, and 50% values on recorded selectors
- Newsroom filled CTA uses `#1ed760` with a 100px pill; that treatment is editorial, not a Web Player button
- Captured player families are `SpotifyMixUI` and `SpotifyMixUITitle`; newsroom computed `Spotify Mix` and `Spotify Mix Narrow`
- Compact player chrome: 48px-tall search, 90px by 32px outlined action, 48px circular icon control
- Catalog identity `#1ed760` is the newsroom/editorial green in this packet, not a captured player-control fill

### Principles

These three numbered stems, the *UI implication* notes, and the capture-bound application list are a derived editorial implementation inference from the verified surfaces; they are not Spotify-authored or a separately published UI specification. Developer-guidance facts cited inside a stem (unaltered artwork, Spotify Green as a resting recognizability color, Encore described as a system-of-systems) remain source-stated facts; the numbered reconstruction that binds them into catalog principles is not a Spotify-authored UI specification.

1. **Keep content attribution and artwork intact in partner integrations.** Spotify's developer guidance requires supplied artwork to remain unaltered and associated Spotify content to be attributed.
   *UI implication:* preserve source artwork and keep required marks/links visible.
2. **Use green as a recognizability signal in the domain where it is observed.** Spotify calls Green its resting recognizability color, and the captured newsroom CTA uses `#1ed760`.
   *UI implication:* do not assume the newsroom CTA is a player-primary variant without product-surface evidence.
3. **Respect a family of systems rather than forcing one component reading.** Spotify's public design writing describes Encore as a system-of-systems.
   *UI implication:* keep player, editorial/newsroom, and external-integration guidance provenance separate.

Capture-bound application:

- Keep the captured player search and compact actions in their recorded surface domain; use `#1f1f1f`, white/muted text, and their measured pill or circle geometry.
- For a Spotify partner integration, keep supplied artwork intact and legible, attribute Spotify content with the appropriate Spotify mark, and link content back to Spotify as required by the official developer guidelines.
- Use the full logo for external attribution unless space or an established-brand context qualifies the icon-only exception.
- Name the surface before reusing a value: Web Player chrome, newsroom/editorial chrome, or partner-integration guidance.

### Avoid

The following Don'ts include source-stated prohibitions and retained capture-bound judgements (no inferred sidebar/grid/player-bar/breakpoint/card elevation; no motion token derived from static snapshots). Those judgements are a derived editorial implementation inference from the verified surfaces; they are not Spotify-authored or a separately published UI specification.

- Don't apply the newsroom green CTA as a verified player control; this packet records it on a separate editorial surface.
- Don't crop, distort, blur, or cover Spotify-provided artwork in a partner integration.
- Don't silently replace `SpotifyMixUI`, `SpotifyMixUITitle`, or Spotify Mix with a system font and call it equivalent.
- Don't infer a universal sidebar, grid, player bar, breakpoint scale, or card elevation from these entry surfaces.
- Don't derive a motion duration, easing, or motion token from static hover/focus/pressed snapshots.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Player surface (captured product UI):

- **Control dark** (`#1f1f1f`): search background and a 48px circular icon control on `https://open.spotify.com/`.
- **Foreground** (`#ffffff`): search text, outlined action text, and circular-control foreground on the captured player surfaces.
- **Muted** (`#b3b3b3`): player tertiary and icon-control text on the captured player surfaces.
- **Outline** (`#7c7c7c`): one-pixel border on the compact outlined player action. This is that control's renderable border field, not a general ink for every player chrome.

Newsroom / editorial surface:

- **Spotify Green** (`#1ed760`): filled button background and border on `https://newsroom.spotify.com/company-info/`. Spotify's developer branding guidance also describes Spotify Green as its resting recognizability color. Catalog `primary_color` is this value; it is not a captured Web Player control fill.

No opaque product-canvas, semantic-error, warning, or shadow token is declared here: the supplied collector evidence did not record a representative value for those fields.

### Spacing

The following local-scale reading is a derived editorial implementation inference from the verified surfaces; it is not Spotify-authored or a separately published UI specification. No reusable spacing scale is published from this packet. The captured product evidence supports a compact top-bar search field and 32px/48px controls. Component paddings stay on the named controls.

### Shape

- Search: 500px
- Outlined player action: 9999px
- Circular icon control: 50%
- Newsroom CTA: 100px

The following local-scale reading is a derived editorial implementation inference from the verified surfaces; it is not Spotify-authored or a separately published UI specification. These radii are local to the named controls, not a universal Spotify scale.

### Elevation

The representative player and newsroom components recorded `box-shadow: none`. No reusable elevation token is published from this packet. The following elevation judgement is a derived editorial implementation inference from the verified surfaces; it is not Spotify-authored or a separately published UI specification. Any shadow treatment requires a separately observed surface.

### Motion

No duration, easing, or motion token was measured in the supplied evidence. Do not derive one from static hover/focus/pressed snapshots. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Class | Family / evidence | Boundary |
|---|---|---|
| Live computed product use | `SpotifyMixUI` was computed and FontFaceSet-backed 665 times across the two player surfaces; source files are served from `encore.scdn.co`. | Canonical UI family for these captured player controls. |
| Live computed product use | `SpotifyMixUITitle` was computed and FontFaceSet-backed seven times on the player surfaces. | Captured title family; not substituted with a system face. |
| Live computed newsroom use | `Spotify Mix` (106 uses) and `Spotify Mix Narrow` (21 uses) were computed and FontFaceSet-backed on the public newsroom. | Editorial/newsroom families, kept separate from player UI tokens. |
| Official product/brand context | Spotify's 2026 design-history article calls Spotify Mix a unique, responsive typeface. | Context confirms brand significance; it is not a public license grant. |
| Declared-only assets | `CircularSp-Arab`, `CircularSp-Hebr`, `CircularSp-Cyrl`, `CircularSp-Grek`, `CircularSp-Deva`, Spotify Circular, Spotify Mix Wide, and `SpotifyMixUITitleVariable` appeared in `@font-face` declarations with no visible captured use. | Not promoted to UI tokens or specimens. |
| License / external integrations | Spotify's developer guidelines recommend platform-default sans-serif, Helvetica Neue, Helvetica, then Arial for partner integrations. | This is partner guidance, not permission to redistribute or substitute Spotify's product fonts. No standalone public license for the captured Spotify font files was established in this update. |

### Family

- **Current visible player UI family:** `SpotifyMixUI`
- **Captured player title family:** `SpotifyMixUITitle`
- **Newsroom editorial families:** `Spotify Mix`, `Spotify Mix Narrow`
- **Loaded source boundary:** player faces from `encore.scdn.co` on the two captured player surfaces
- Do not silently replace `SpotifyMixUI`, `SpotifyMixUITitle`, or Spotify Mix with a system font and call it equivalent. Partner integrations follow the documented platform-default stack; that stack is not the product family.

### Type roles

| Role | Family | Size | Weight | Evidence boundary |
|---|---|---:|---:|---|
| Body and search | SpotifyMixUI | 16px | 400 | Player home/search computed values |
| Compact action | SpotifyMixUI | 14px | 700 | Player home/search compact actions |
| Captured title | SpotifyMixUITitle | 24px | 700 | Player heading samples |

YAML `tokens.typography.body` is 16 / 400, use "Product-player body and input text". YAML `tokens.typography.action` is 14 / 700, use "Compact player action labels". No unitless line-height is recorded; none is invented. Newsroom CTA type 14px / 800 / Spotify Mix stays on that editorial control.

### Assets

No first-party mark file is attached here. Partner attribution uses the official developer-guideline mark rules in Experience.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

The supplied collector recorded hover, focus, and pressed snapshots for the listed player controls, and focus/pressed snapshots for the newsroom CTA. It recorded disabled/unchecked icon-control instances but did not establish a general disabled visual rule. For partner integrations, the official guidance requires restricted playback controls either to be disabled or not shown; it also documents a like action changing state with messages such as "Added to Liked Songs" and "Removed from Liked Songs." No additional loading, error, toast, or motion state is promoted from this packet.

YAML `components_harvested` is false. The four YAML components plus the hollow newsroom CTA below are the named controls in this packet; they are not a complete player or newsroom inventory.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` capture is not `focus-visible` treatment evidence; named focus observations stay as additional observed states, and the `focus-visible` visual treatment remains omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow an identified product role, not primitive kind or a generic chrome name. Where exact selector label/behavior is unresolved, those three applicability fields are omitted at this boundary rather than closed. This is not a complete state-coverage claim.

### Player Search Field

- Role: Open Spotify player search field; home and `/search`
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#1f1f1f`
- Text: `#ffffff`
- Border: 0px solid `#ffffff`
- Radius: 500px
- Padding: 12px 96px 12px 48px
- Font: 16px / 400 / SpotifyMixUI
- Height: 48px tall in the raw bundle
- Use: Player search field on home and `/search`
- Observed: focus, hover, and pressed snapshots on the same selector; no unrecorded value is inferred

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on player home and `/search` |
| hover | applicable | Pointer-web input; snapshot observed; no unrecorded value is inferred |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A player search field can be unavailable; visual treatment omitted |
| loading | not-applicable | This field's role is player search entry; in-progress search is not a state of the field |
| error | not-applicable | This field's role is player search entry, not a validating form that reports error on itself |
| success | not-applicable | Submitting a search is not a success confirmation on the field |

Additional observed named states: generic `Focus`, hover, and pressed on the same selector, with no unrecorded value inferred. Generic `Focus` is not `focus-visible` evidence.

### Outlined Compact Action

- Role: compact outlined player action; home and `/search`
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#7c7c7c`
- Radius: 9999px
- Padding: 4px 16px 4px 36px
- Font: 14px / 700 / SpotifyMixUI
- Size: 90px by 32px in the raw bundle
- Use: Compact outlined player action on home and `/search`
- Observed: focus, hover, and pressed snapshots on the same selector; no unrecorded value is inferred
- Field note: `#7c7c7c` is this control's renderable border and the Outline role; it is not general Foreground `#ffffff`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on player home and `/search` |
| hover | applicable | Pointer-web button; snapshot observed; no unrecorded value is inferred |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A compact player action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control only as a compact outlined player action; exact selector label/behavior is unresolved, so those three fields stay omitted at this boundary rather than closed from the chrome name.

Additional observed named states: generic `Focus`, hover, and pressed on the same selector, with no unrecorded value inferred. Generic `Focus` is not `focus-visible` evidence.

### Circular Icon Control

- Role: 48px circular player icon control on the home surface. Exact action identity (selector label/behavior) is unresolved.
- Kind: interactive
- Type: button
- Anatomy: control
- Background: `#1f1f1f`
- Text: `#ffffff`
- Radius: 50%
- Padding: 12px
- Font: 16px / 400 / SpotifyMixUI
- Size: 48px by 48px in the raw bundle
- Use: 48px circular player icon control on home
- Observed: hover and pressed snapshots on the same selector; no unrecorded value is inferred. Disabled/unchecked icon-control instances were recorded; no general disabled visual rule is established.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on player home |
| hover | applicable | Pointer-web button; snapshot observed; no unrecorded value is inferred |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Disabled icon-control instances were recorded; no general disabled visual rule is established, so the treatment is omitted |

Loading, error, and success applicability are omitted. Source names this control only as a 48px circular player icon control; exact selector label/behavior is unresolved, so those three fields stay omitted at this boundary rather than closed from the chrome name or from partner like-state copy.

Additional observed named states: hover and pressed on the same selector, with no unrecorded value inferred; disabled/unchecked instances without a general visual rule. No generic `Focus` snapshot is recorded for this control. Unchecked is not a canonical Core state. Partner like-state messages such as "Added to Liked Songs" and "Removed from Liked Songs" remain documented copy; they are not bound to this harvested icon.

### Filled Newsroom CTA

- Role: editorial/newsroom CTA only; not promoted to player chrome
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#1ed760`
- Text: `#000000`
- Border: 1px solid `#1ed760`
- Radius: 100px
- Padding: 16px 33px 15px
- Font: 14px / 800 / Spotify Mix
- Size: 182px by 50px in the raw bundle
- Use: Editorial CTA on Spotify's company-info newsroom page; not a Web Player component claim
- Observed: focus and pressed snapshots

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the company-info newsroom |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An editorial CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | This editorial CTA is a destination action; the control itself does not enter a loading state |
| error | not-applicable | Newsroom CTA meaning is the destination, not a request or validation failure on the button |
| success | not-applicable | Following the CTA is not an action-outcome confirmation on this button |

Additional observed named states: generic `Focus` — `#25d564` background with `#1ed760` border; pressed — `#26d966` background with `#1dcf5c` border. Generic `Focus` is not `focus-visible` evidence.

### Hollow Newsroom CTA

- Role: editorial/newsroom CTA only
- Kind: interactive. CTA role plus a captured Focus snapshot support interactive kind; they do not decide a button versus link primitive. Source §4 body records background, text, border, radius, padding, font, focus, and use, and does not record a primitive type. No `Type` is invented from the filled sibling.
- Anatomy: label
- Background: transparent
- Text: `#1ed760`
- Border: 1px solid `#1ed760`
- Radius: 100px
- Padding: 16px 33px 15px
- Font: 14px / 800 / Spotify Mix
- Size: 246px by 50px in the raw bundle
- Use: Editorial/newsroom CTA only
- Observed: focus snapshot

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the company-info newsroom |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An editorial CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | This editorial CTA is a destination action; the control itself does not enter a loading state |
| error | not-applicable | Newsroom CTA meaning is the destination, not a request or validation failure on the button |
| success | not-applicable | Following the CTA is not an action-outcome confirmation on this button |

Additional observed named states: generic `Focus` — `#1dd35e` text with `#1dd35e` border. Generic `Focus` is not `focus-visible` evidence. This control is in the source body and is not a YAML `tokens.components` record.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following layout and cross-viewport judgements are a derived editorial implementation inference from the verified surfaces; they are not Spotify-authored or a separately published UI specification. The captured product evidence supports a compact top-bar search field and 32px/48px controls, but it is not an authenticated-player layout audit. Do not infer a universal sidebar, grid, player bar, breakpoint scale, or card elevation from these entry surfaces.

No viewport or responsive interaction capture is part of the supplied evidence. The 48px-tall search field, 90px by 32px outlined action, 48px circular icon, and 182px by 50px / 246px by 50px newsroom CTAs are desktop-capture measurements, not cross-viewport specifications.

The only responsive guidance retained here is Spotify's external-integration artwork rule: 4px rounded corners on small/medium devices and 8px on large devices. That guidance is not a measured Web Player component token. For partner integrations, preserve supplied artwork, do not crop or overlay it, and use those device-class corners.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Official company language centers creativity and connection to artists and other creatives. The public developer guidance uses direct partner-facing action labels such as "GET SPOTIFY FREE", "OPEN SPOTIFY", "PLAY ON SPOTIFY", and "LISTEN ON SPOTIFY". The following product-copy boundary is a derived editorial implementation inference from the verified surfaces; it is not Spotify-authored or a separately published UI specification. These are documented integration strings, not a complete product-microcopy system.

| Context | Grounded guidance |
|---|---|
| Partner link | Use Spotify's documented destination labels when the integration conditions apply. |
| Attribution | Make Spotify content attribution clear with the required logo treatment. |
| Product copy | No live-player text corpus was captured; do not invent a Spotify voice rule beyond the official mission and documented partner strings. |

Partner like-state copy documented in the source includes "Added to Liked Songs" and "Removed from Liked Songs." That copy is dual-destination with the §14 capture record; it is not bound to the harvested circular icon.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Named gaps

These decisions are unnamed values, not permissions to invent:

- opaque product-canvas, semantic-error, warning, and shadow tokens
- a reusable spacing scale or elevation token
- hover/focus/pressed computed color values for the three player controls (snapshots observed; no unrecorded value inferred)
- a general disabled visual rule (disabled/unchecked icon-control instances exist)
- `focus-visible` visual treatments (generic `Focus` is a different observation)
- loading, error, toast, and success visual treatments
- loading, error, and success applicability for the outlined compact action and the circular icon control (exact selector label/behavior unresolved)
- authenticated-player layout, sidebar, grid, player bar, breakpoint scale, and card elevation
- a public license grant for the captured Spotify font files
- declared-only faces (`CircularSp-Arab` / `CircularSp-Hebr` / `CircularSp-Cyrl` / `CircularSp-Grek` / `CircularSp-Deva`, Spotify Circular, Spotify Mix Wide, `SpotifyMixUITitleVariable`) as UI families
- newsroom `#1ed760` as a Web Player control fill
- live-player text corpus and a complete product-microcopy system
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five; a single named duration is not that gate
