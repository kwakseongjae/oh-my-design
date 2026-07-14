---
id: spotify
name: Spotify
country: US
category: consumer-tech
homepage: "https://www.spotify.com"
primary_color: "#1ed760"
logo:
  type: simpleicons
  slug: spotify
verified: "2026-07-13"
omd: "0.1"
tokens:
  source: reconciled
  extracted: "2026-07-13"
  colors:
    primary: "#1ed760"
    control: "#1f1f1f"
    foreground: "#ffffff"
    muted: "#b3b3b3"
    outline: "#7c7c7c"
  typography:
    family:
      ui: "SpotifyMixUI"
      title: "SpotifyMixUITitle"
    body: { size: 16, weight: 400, use: "Product-player body and input text" }
    action: { size: 14, weight: 700, use: "Compact player action labels" }
  rounded:
    search: 500
    control: 9999
  components_harvested: false
  components:
    player-search:
      type: input
      bg: "#1f1f1f"
      fg: "#ffffff"
      border: "0px solid #ffffff"
      radius: "500px"
      padding: "12px 96px 12px 48px"
      font: "16px / 400 / SpotifyMixUI"
      states: "focus, hover, and pressed snapshots observed"
      use: "Open Spotify player search field; home and /search"
    player-outlined-action:
      type: button
      bg: transparent
      fg: "#ffffff"
      border: "1px solid #7c7c7c"
      radius: "9999px"
      padding: "4px 16px 4px 36px"
      font: "14px / 700 / SpotifyMixUI"
      states: "focus, hover, and pressed snapshots observed"
      use: "Compact outlined player action; home and /search"
    player-icon-control:
      type: button
      bg: "#1f1f1f"
      fg: "#ffffff"
      radius: "50%"
      padding: "12px"
      font: "16px / 400 / SpotifyMixUI"
      states: "hover and pressed snapshots observed"
      use: "48px circular player icon control on the home surface"
    newsroom-cta:
      type: button
      bg: "#1ed760"
      fg: "#000000"
      border: "1px solid #1ed760"
      radius: "100px"
      padding: "16px 33px 15px"
      font: "14px / 800 / Spotify Mix"
      states: "focus and pressed snapshots observed"
      use: "Editorial/newsroom CTA only; not promoted to player chrome"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - id: product-home
      url: "https://open.spotify.com/"
      inspected: "2026-07-13"
    - id: product-search
      url: "https://open.spotify.com/search"
      inspected: "2026-07-13"
    - id: newsroom-company
      url: "https://newsroom.spotify.com/company-info/"
      inspected: "2026-07-13"
  sources:
    - id: capture-product-home
      url: "https://open.spotify.com/"
      kind: product-surface
      captured: "2026-07-13"
    - id: capture-product-search
      url: "https://open.spotify.com/search"
      kind: product-surface
      captured: "2026-07-13"
    - id: capture-newsroom
      url: "https://newsroom.spotify.com/company-info/"
      kind: official-doc
      captured: "2026-07-13"
    - id: official-design-history
      url: "https://newsroom.spotify.com/2026-04-23/spotify-design-history/"
      kind: official-doc
      captured: "2026-07-13"
    - id: official-developer-guidelines
      url: "https://developer.spotify.com/documentation/design"
      kind: official-doc
      captured: "2026-07-13"
  claims:
    tokens.colors.primary: { surface_id: newsroom-company, source_id: capture-newsroom, captured: "2026-07-13" }
    tokens.colors.control: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.colors.foreground: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.colors.muted: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.colors.outline: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.typography.family.ui: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.typography.family.title: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.typography.body.size: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.typography.body.weight: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.typography.body.use: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.typography.action.size: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.typography.action.weight: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.typography.action.use: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.rounded.search: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.rounded.control: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-search.type: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-search.bg: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-search.fg: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-search.border: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-search.radius: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-search.padding: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-search.font: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-search.states: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-search.use: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-outlined-action.type: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-outlined-action.bg: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-outlined-action.fg: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-outlined-action.border: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-outlined-action.radius: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-outlined-action.padding: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-outlined-action.font: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-outlined-action.states: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-outlined-action.use: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-icon-control.type: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-icon-control.bg: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-icon-control.fg: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-icon-control.radius: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-icon-control.padding: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-icon-control.font: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-icon-control.states: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.player-icon-control.use: { surface_id: product-home, source_id: capture-product-home, captured: "2026-07-13" }
    tokens.components.newsroom-cta.type: { surface_id: newsroom-company, source_id: capture-newsroom, captured: "2026-07-13" }
    tokens.components.newsroom-cta.bg: { surface_id: newsroom-company, source_id: capture-newsroom, captured: "2026-07-13" }
    tokens.components.newsroom-cta.fg: { surface_id: newsroom-company, source_id: capture-newsroom, captured: "2026-07-13" }
    tokens.components.newsroom-cta.border: { surface_id: newsroom-company, source_id: capture-newsroom, captured: "2026-07-13" }
    tokens.components.newsroom-cta.radius: { surface_id: newsroom-company, source_id: capture-newsroom, captured: "2026-07-13" }
    tokens.components.newsroom-cta.padding: { surface_id: newsroom-company, source_id: capture-newsroom, captured: "2026-07-13" }
    tokens.components.newsroom-cta.font: { surface_id: newsroom-company, source_id: capture-newsroom, captured: "2026-07-13" }
    tokens.components.newsroom-cta.states: { surface_id: newsroom-company, source_id: capture-newsroom, captured: "2026-07-13" }
    tokens.components.newsroom-cta.use: { surface_id: newsroom-company, source_id: capture-newsroom, captured: "2026-07-13" }
  conflicts: []
---

# Design System Inspiration of Spotify

## 1. Visual Theme & Atmosphere

Spotify is an audio streaming subscription service whose public company account traces its evolution from music listening to podcasts and audiobooks. The two captured Web Player entry surfaces use a very dark, content-led control layer: the measured search and circular-control surfaces are `#1f1f1f`, text is white or muted `#b3b3b3`, and the geometry repeatedly resolves to pills and circles. Spotify's 2026 design-history article describes the bright green as an intentional differentiator, calls out its early dark-mode product history, and names Spotify Mix as a distinctive typeface. That account explains the recognizable expression; it does not turn every brand or newsroom treatment into a player token. The player and newsroom therefore remain separate below.

**Observed characteristics**

- Player controls use `#1f1f1f`, `#ffffff`, `#b3b3b3`, `#7c7c7c`, 500px, 9999px, and 50% values on recorded selectors.
- The public newsroom uses `#1ed760` as a filled CTA and a 100px pill radius; this is an editorial/newsroom treatment, not evidence of a matching Web Player button.
- Official context identifies Spotify Green and a flexible Spotify Mix typeface as brand expression, while the captured player loads `SpotifyMixUI` and `SpotifyMixUITitle`.

## 2. Color Palette & Roles

### Player surface (captured product UI)

- **Control dark** (`#1f1f1f`): search background and a 48px circular icon control on `https://open.spotify.com/`.
- **Foreground** (`#ffffff`): search text, outlined action text, and circular-control foreground on the captured player surfaces.
- **Muted** (`#b3b3b3`): player tertiary and icon-control text on the captured player surfaces.
- **Outline** (`#7c7c7c`): one-pixel border on the compact outlined player action.

### Newsroom / editorial surface

- **Spotify Green** (`#1ed760`): filled button background and border on `https://newsroom.spotify.com/company-info/`. Spotify's developer branding guidance also describes Spotify Green as its resting recognizability color.

No opaque product-canvas, semantic-error, warning, or shadow token is declared here: the supplied collector evidence did not record a representative value for those fields.

## 3. Typography Rules

### Evidence classes

| Class | Family / evidence | Boundary |
|---|---|---|
| Live computed product use | `SpotifyMixUI` was computed and FontFaceSet-backed 665 times across the two player surfaces; source files are served from `encore.scdn.co`. | Canonical UI family for these captured player controls. |
| Live computed product use | `SpotifyMixUITitle` was computed and FontFaceSet-backed seven times on the player surfaces. | Captured title family; not substituted with a system face. |
| Live computed newsroom use | `Spotify Mix` (106 uses) and `Spotify Mix Narrow` (21 uses) were computed and FontFaceSet-backed on the public newsroom. | Editorial/newsroom families, kept separate from player UI tokens. |
| Official product/brand context | Spotify's 2026 design-history article calls Spotify Mix a unique, responsive typeface. | Context confirms brand significance; it is not a public license grant. |
| Declared-only assets | `CircularSp-Arab`, `CircularSp-Hebr`, `CircularSp-Cyrl`, `CircularSp-Grek`, `CircularSp-Deva`, Spotify Circular, Spotify Mix Wide, and `SpotifyMixUITitleVariable` appeared in `@font-face` declarations with no visible captured use. | Not promoted to UI tokens or specimens. |
| License / external integrations | Spotify's developer guidelines recommend platform-default sans-serif, Helvetica Neue, Helvetica, then Arial for partner integrations. | This is partner guidance, not permission to redistribute or substitute Spotify's product fonts. No standalone public license for the captured Spotify font files was established in this update. |

### Captured player hierarchy

| Role | Family | Size | Weight | Evidence boundary |
|---|---:|---:|---:|---|
| Body and search | SpotifyMixUI | 16px | 400 | Player home/search computed values |
| Compact action | SpotifyMixUI | 14px | 700 | Player home/search compact actions |
| Captured title | SpotifyMixUITitle | 24px | 700 | Player heading samples |

## 4. Component Stylings

### Player controls — product surfaces

**Search field**
- Background: `#1f1f1f`
- Text: `#ffffff`
- Border: 0px solid `#ffffff`
- Radius: 500px
- Padding: 12px 96px 12px 48px
- Font: 16px / 400 / SpotifyMixUI
- Hover: observed on the same selector; no unrecorded value is inferred
- Focus: observed on the same selector; no unrecorded value is inferred
- Pressed: observed on the same selector; no unrecorded value is inferred
- Use: Player search field on home and `/search`
- Provenance: `home::[data-omd-capture="3"]`, `https://open.spotify.com/`; 48px tall in the raw bundle

**Outlined compact action**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#7c7c7c`
- Radius: 9999px
- Padding: 4px 16px 4px 36px
- Font: 14px / 700 / SpotifyMixUI
- Hover: observed on the same selector; no unrecorded value is inferred
- Focus: observed on the same selector; no unrecorded value is inferred
- Pressed: observed on the same selector; no unrecorded value is inferred
- Use: Compact outlined player action on home and `/search`
- Provenance: `home::[data-omd-capture="14"]`, `https://open.spotify.com/`; 90px by 32px in the raw bundle

**Circular icon control**
- Background: `#1f1f1f`
- Text: `#ffffff`
- Radius: 50%
- Padding: 12px
- Font: 16px / 400 / SpotifyMixUI
- Hover: observed on the same selector; no unrecorded value is inferred
- Pressed: observed on the same selector; no unrecorded value is inferred
- Use: 48px circular player icon control on home
- Provenance: `home::[data-omd-capture="1"]`, `https://open.spotify.com/`; 48px by 48px in the raw bundle

### Newsroom / editorial chrome — separate surface

**Filled newsroom CTA**
- Background: `#1ed760`
- Text: `#000000`
- Border: 1px solid `#1ed760`
- Radius: 100px
- Padding: 16px 33px 15px
- Font: 14px / 800 / Spotify Mix
- Focus: `#25d564` background with `#1ed760` border in the captured focus snapshot
- Pressed: `#26d966` background with `#1dcf5c` border in the captured pressed snapshot
- Use: Editorial CTA on Spotify's company-info newsroom page; not a Web Player component claim
- Provenance: `surface-3::[data-omd-capture="9"]`, `https://newsroom.spotify.com/company-info/`; 182px by 50px in the raw bundle

**Hollow newsroom CTA**
- Background: transparent
- Text: `#1ed760`
- Border: 1px solid `#1ed760`
- Radius: 100px
- Padding: 16px 33px 15px
- Font: 14px / 800 / Spotify Mix
- Focus: `#1dd35e` text with `#1dd35e` border in the captured focus snapshot
- Use: Editorial/newsroom CTA only
- Provenance: `surface-3::[data-omd-capture="10"]`, `https://newsroom.spotify.com/company-info/`; 246px by 50px in the raw bundle

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://open.spotify.com/ · https://open.spotify.com/search · https://newsroom.spotify.com/company-info/ · https://newsroom.spotify.com/2026-04-23/spotify-design-history/ · https://developer.spotify.com/documentation/design
**Tier 2 sources:** https://getdesign.md/spotify/design-md (independent high-level cross-check); https://styles.refero.design/?q=spotify (query attempted; no usable response returned)
**Conflicts unresolved:** none

## 5. Layout Principles

The captured product evidence supports a compact top-bar search field and 32px/48px controls, but it is not an authenticated-player layout audit. Do not infer a universal sidebar, grid, player bar, breakpoint scale, or card elevation from these entry surfaces. The developer documentation's artwork rules apply to partner integrations: preserve supplied artwork, do not crop or overlay it, and use 4px corners on small/medium devices or 8px on large devices.

## 6. Depth & Elevation

The representative player and newsroom components recorded `box-shadow: none`. No reusable elevation token is published from this packet. Any shadow treatment requires a separately observed surface.

## 7. Do's and Don'ts

### Do

- Keep the captured player search and compact actions in their recorded surface domain; use `#1f1f1f`, white/muted text, and their measured pill or circle geometry.
- For a Spotify partner integration, keep supplied artwork intact and legible, attribute Spotify content with the appropriate Spotify mark, and link content back to Spotify as required by the official developer guidelines.
- Use the full logo for external attribution unless space or an established-brand context qualifies the icon-only exception.

### Don't

- Don't apply the newsroom green CTA as a verified player control; this packet records it on a separate editorial surface.
- Don't crop, distort, blur, or cover Spotify-provided artwork in a partner integration.
- Don't silently replace `SpotifyMixUI`, `SpotifyMixUITitle`, or Spotify Mix with a system font and call it equivalent.

## 8. Responsive Behavior

No viewport or responsive interaction capture is part of the supplied evidence. The only responsive guidance retained here is Spotify's external-integration artwork rule: 4px rounded corners on small/medium devices and 8px on large devices. That guidance is not a measured Web Player component token.

## 9. Agent Prompt Guide

- "Create a product-player search field with `#1f1f1f` background, white 16px/400 SpotifyMixUI text, 500px radius, and 12px 96px 12px 48px padding."
- "Create a compact outlined player action with white 14px/700 SpotifyMixUI text, `#7c7c7c` 1px border, 9999px radius, and 4px 16px 4px 36px padding."
- "For an editorial/newsroom CTA only, use `#1ed760` with black 14px/800 Spotify Mix text, a 100px radius, and 16px 33px 15px padding."

## 10. Voice & Tone

Official company language centers creativity and connection to artists and other creatives. The public developer guidance uses direct partner-facing action labels such as "GET SPOTIFY FREE", "OPEN SPOTIFY", "PLAY ON SPOTIFY", and "LISTEN ON SPOTIFY". These are documented integration strings, not a complete product-microcopy system.

| Context | Grounded guidance |
|---|---|
| Partner link | Use Spotify's documented destination labels when the integration conditions apply. |
| Attribution | Make Spotify content attribution clear with the required logo treatment. |
| Product copy | No live-player text corpus was captured; do not invent a Spotify voice rule beyond the official mission and documented partner strings. |

## 11. Brand Narrative

Spotify's official company information says the service launched in 2008, later expanded into podcasts and then audiobooks in 2022, and now serves listeners across music, podcasts, and audiobooks. Its stated mission is to deliver creativity to the world "one note, one voice, one idea at a time," while connecting people to art and the creatives who shape it.

The 2026 design-history account connects the current identity to a deliberately bright green, an early dark-mode product history, a distinctive Spotify Mix typeface, and a brand designed to flex with culture, content, creators, and community. Those first-party statements provide useful context for the captured dark player and green newsroom surfaces without flattening them into one universal component system.

## 12. Principles

1. **Keep content attribution and artwork intact in partner integrations.** Spotify's developer guidance requires supplied artwork to remain unaltered and associated Spotify content to be attributed. *UI implication:* preserve source artwork and keep required marks/links visible.
2. **Use green as a recognizability signal in the domain where it is observed.** Spotify calls Green its resting recognizability color, and the captured newsroom CTA uses `#1ed760`. *UI implication:* do not assume the newsroom CTA is a player-primary variant without product-surface evidence.
3. **Respect a family of systems rather than forcing one component reading.** Spotify's public design writing describes Encore as a system-of-systems. *UI implication:* keep player, editorial/newsroom, and external-integration guidance provenance separate.

## 13. Personas

The following are stakeholder groups named on Spotify's official company surface, not fictional personas:

- **Listeners:** discover, manage, and enjoy music, podcasts, and audiobooks on the service.
- **Artists and creators:** the mission explicitly connects the world to their work; Spotify also publishes separate communities for artists and creators.
- **Partner developers:** follow distinct attribution, artwork, linking, and playback requirements in the developer documentation.

## 14. States

The supplied collector recorded hover, focus, and pressed snapshots for the listed player controls, and focus/pressed snapshots for the newsroom CTA. It recorded disabled/unchecked icon-control instances but did not establish a general disabled visual rule. For partner integrations, the official guidance requires restricted playback controls either to be disabled or not shown; it also documents a like action changing state with messages such as "Added to Liked Songs" and "Removed from Liked Songs." No additional loading, error, toast, or motion state is promoted from this packet.

## 15. Motion & Easing

No duration, easing, or motion token was measured in the supplied evidence. Do not derive one from static hover/focus/pressed snapshots.
