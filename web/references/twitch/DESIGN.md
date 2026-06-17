---
id: twitch
name: Twitch
country: US
category: consumer-tech
homepage: "https://www.twitch.tv"
primary_color: "#9146ff"
logo:
  type: simpleicons
  slug: twitch
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = official Ultraviolet brand purple (#9146ff); links/active deep violet (#5c16c5), hover (#451093), deep surface (#330c6e). High-density dark-mode-first Core UI; live-inspected light theme on twitch.tv. Log In btn translucent rgba(173,173,184,0.22), viewer pill rgba(0,0,0,0.6), input ring rgba(50,50,57,0.62) — kept in prose only (alpha)."
  colors:
    primary: "#9146ff"
    link: "#5c16c5"
    primary-hover: "#451093"
    primary-deep: "#330c6e"
    ink: "#0e0e10"
    body: "#3b3b44"
    muted: "#747484"
    canvas: "#f7f7f8"
    surface-alt: "#efeff1"
    on-primary: "#ffffff"
    live: "#eb0400"
    info: "#1f69ff"
  typography:
    family: { display: "Roobert", body: "Inter" }
    display-hero: { size: 31, weight: 600, lineHeight: 1.1, use: "Brand hero headline, Roobert TW" }
    section:      { size: 20, weight: 400, lineHeight: 1.2, use: "Brand section links, Roobert TW" }
    heading:      { size: 16, weight: 600, lineHeight: 1.3, use: "Core UI carousel / shelf titles, Roobert" }
    body:         { size: 14, weight: 400, lineHeight: 1.4, use: "Standard reading + UI text, Inter" }
    button:       { size: 14, weight: 600, lineHeight: 1.0, use: "Button labels, Inter SemiBold" }
    caption:      { size: 12, weight: 400, lineHeight: 1.2, use: "LIVE badge, viewer counts, metadata" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 18, xl: 24, xxl: 40 }
  rounded: { sm: 2, md: 4, lg: 8, full: 9000 }
  shadow:
    none: "none"
    input-ring: "rgba(50,50,57,0.62) 0px 0px 0px 1px inset"
  components:
    button-primary: { type: button, bg: "#9146ff", fg: "#ffffff", radius: "9000px", height: "32px", font: "14px / 600 Inter", use: "Sign Up CTA / brand Download — full pill, Ultraviolet" }
    button-secondary: { type: button, fg: "#0e0e10", radius: "9000px", height: "32px", font: "14px / 600 Inter", use: "Log In — translucent rgba(173,173,184,0.22) fill pill" }
    input-search: { type: input, bg: "#ffffff", fg: "#0e0e10", radius: "8px", height: "36px", padding: "0px 12px", font: "14px / 400 Inter", use: "Top search field, inset rgba(50,50,57,0.62) 1px ring" }
    nav-link: { type: tab, fg: "#0e0e10", font: "14px / 400 Inter", active: "text #5c16c5", use: "Top + side nav item, active = deep violet" }
    card-channel: { type: card, bg: "#f7f7f8", radius: "4px", use: "Live channel tile on canvas, thumbnail-led, no shadow" }
    badge-live: { type: badge, bg: "#eb0400", fg: "#ffffff", radius: "4px", padding: "1px 5px", font: "12px / 400 Inter", use: "LIVE status indicator on thumbnails" }
    badge-viewers: { type: badge, fg: "#ffffff", radius: "2px", padding: "0px 4px", font: "14px / 400 Inter", use: "Viewer-count overlay — rgba(0,0,0,0.6) scrim pill" }
    avatar: { type: avatar, radius: "9000px", use: "Channel / user avatar — full circle" }
  components_harvested: true
---

# Design System Inspiration of Twitch

## 1. Visual Theme & Atmosphere

Twitch is the dark-mode-native home of live streaming, and its design language — known internally as **Core UI**, built on the **Ultraviolet** color system from the 2019 "Beyond Purple" rebrand — is engineered for one job: surrounding a glowing live video with dense, scannable chrome that never competes with the stream. Even in its light theme (the default for logged-out homepage, captured live here), the canvas is a soft near-white grey (`#f7f7f8`) with a slightly cooler surface step (`#efeff1`), and text sits in a near-black ink (`#0e0e10`) — not pure black — that keeps high-density shelves of channels legible without harshness. The whole system reads as a high-information utility wearing a single, unmistakable brand color.

That color is the famous **Ultraviolet** purple (`#9146ff`), the most recognizable identity in the creator economy. It is reserved for the moments that matter: the **Sign Up** call-to-action and the brand **Download** button both render in full-pill Ultraviolet, while interactive links and active states drop to a deeper, more legible violet (`#5c16c5`), with hover (`#451093`) and pressed/surface states (`#330c6e`) descending further down the same hue ramp. Twitch's own write-up describes deriving "15 grays and 15 purples" from the brand purple along a controlled lightness curve — a disciplined, accessibility-first palette where every gray and every violet is a calculated step, not an ad-hoc pick.

The typographic voice is **Roobert TW** — a mono-linear geometric sans Twitch customized with Displaay in 2019, with its signature single-story rounded-corner "g" — carrying brand and display surfaces. Inside the product, the dense Core UI runs in **Inter** at a workhorse 14px / weight 400, dropping to 12px for the high-frequency metadata that defines the platform: the scarlet **LIVE** badge (`#eb0400`), viewer counts, and category tags. Geometry is pill-forward — buttons and avatars are full-radius (9000px), while functional chrome (search, badges, tiles) stays tight at 2–8px. There is essentially no elevation: live inspection found `box-shadow: none` across nav, buttons, and channel tiles. Depth comes from the video itself and from translucent scrims (`rgba(0,0,0,0.6)`) over thumbnails, never from drop shadows.

**Key Characteristics:**
- Ultraviolet purple (`#9146ff`) as the single saturated brand action color — Sign Up, Download
- A descending violet ramp for interaction: link `#5c16c5` → hover `#451093` → deep `#330c6e`
- Roobert (Roobert TW) for brand/display; Inter for dense Core UI at 14px / 400
- Near-black ink (`#0e0e10`) over a soft grey canvas (`#f7f7f8`), not pure black on white
- Dark-mode-first Core UI / Ultraviolet design system, accessibility "by design"
- Pill-everything brand chrome (9000px buttons + avatars), tight 2–8px functional radii
- Shadowless: depth from the live video + translucent thumbnail scrims, not elevation
- Scarlet `#eb0400` LIVE indicator as the one non-purple signal color

## 2. Color Palette & Roles

### Primary
- **Ultraviolet** (`#9146ff`): The primary brand color and the system's single saturated action hue. Backs the Sign Up CTA and the brand Download button. RGB (145,70,255) — the official "Beyond Purple" brand purple.
- **Link Violet** (`#5c16c5`): Deep, legible violet for links and active states across nav and channel rows — a darker, higher-contrast step down from Ultraviolet.
- **Purple Hover** (`#451093`): Hover/secondary-emphasis violet, one step deeper than the link color.
- **Purple Deep** (`#330c6e`): The darkest violet surface — pressed states and immersive purple panels.

### Ink & Text
- **Ink** (`#0e0e10`): Primary text, headings, nav labels, strong UI text. A near-black with a faint cool cast — used instead of pure black.
- **Body Slate** (`#3b3b44`): Secondary body copy and descriptions.
- **Muted Grey** (`#747484`): Tertiary text, inactive nav links (brand site), captions, metadata.

### Surface & Neutral
- **Canvas** (`#f7f7f8`): The default page background — a soft, cool near-white.
- **Surface Alt** (`#efeff1`): A slightly cooler grey step for cards, fields, and segmented blocks.
- **White** (`#ffffff`): Search field background, text on Ultraviolet/dark, card surfaces.

### Signal
- **LIVE Red** (`#eb0400`): The scarlet status indicator on live thumbnails — the one non-purple semantic color, used sparingly and exclusively for "live now."
- **Info Blue** (`#1f69ff`): Informational links / system blue used in occasional inline messaging.

### Translucent (prose-only — alpha)
- **Soft Fill** (`rgba(173,173,184,0.22)`): The translucent grey fill on the Log In button and secondary chrome.
- **Thumbnail Scrim** (`rgba(0,0,0,0.6)`): The dark overlay behind viewer-count pills on thumbnails.
- **Input Ring** (`rgba(50,50,57,0.62)`): The 1px inset focus/border ring on the search field.

## 3. Typography Rules

### Font Family
- **Display / Brand**: `Roobert` (`Roobert TW`) — a mono-linear geometric sans-serif customized with Displaay for the 2019 rebrand. Recognizable by its single-story, rounded-corner lowercase "g." Carries brand headlines and brand-site navigation.
- **Body / Core UI**: `Inter` — the dense product workhorse. The logged-in/out homepage stack resolves to `Inter` (with Roobert appearing on specific shelf titles); body default is 14px / weight 400.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Brand Hero | Roobert TW | ~31px (1.94rem) | 600 | 1.1 | Brand-site hero headline |
| Brand Section | Roobert TW | 20px (1.25rem) | 400 | 1.2 | Brand-site footer/section links |
| Shelf Heading | Roobert | 16px (1.00rem) | 600 | 1.3 | Core UI carousel / "Live Channels" titles |
| Body / UI | Inter | 14px (0.88rem) | 400 | 1.4 | Standard reading + dense UI text |
| Button | Inter | 14px (0.88rem) | 600 | 1.0 | Button labels (SemiBold) |
| Caption | Inter | 12px (0.75rem) | 400 | 1.2 | LIVE badge, viewer counts, metadata |

### Principles
- **Two fonts, two jobs**: Roobert is the brand/display voice (geometric, characterful); Inter is the functional reading voice (dense, neutral, hangul-/latin-legible at small sizes). They never swap roles.
- **14px is the workhorse**: The product runs almost entirely at 14px / 400 to maximize information density on shelves of live channels.
- **SemiBold for action, regular for content**: Button labels and shelf headings jump to weight 600; everything informational stays at 400.
- **12px metadata layer**: A distinct caption tier (12px) carries the platform's signature density — LIVE state, viewer counts, category tags.

## 4. Component Stylings

### Buttons

**Sign Up (Primary / Ultraviolet)**
- Background: `#9146ff`
- Text: `#ffffff`
- Radius: 9000px
- Height: 32px
- Font: 14px Inter weight 600
- Use: Primary CTA — Sign Up in the top nav, brand-site Download — the single Ultraviolet action

**Log In (Secondary)**
- Text: `#0e0e10`
- Radius: 9000px
- Height: 32px
- Font: 14px Inter weight 600
- Use: Secondary nav action — translucent `rgba(173,173,184,0.22)` grey fill, full pill

### Inputs & Forms

**Search Field**
- Background: `#ffffff`
- Text: `#0e0e10`
- Radius: 8px
- Padding: 0px 12px
- Height: 36px
- Font: 14px Inter weight 400
- Use: Top search input — 1px inset `rgba(50,50,57,0.62)` ring instead of a solid border (left segment of a split search control)

### Cards & Containers

**Live Channel Tile**
- Background: `#f7f7f8`
- Radius: 4px
- Use: Live channel / category tile on canvas — thumbnail-led, no shadow, hairline-free

### Badges

**LIVE Indicator**
- Background: `#eb0400`
- Text: `#ffffff`
- Radius: 4px
- Padding: 1px 5px
- Font: 12px Inter weight 400
- Use: "LIVE" status badge on live thumbnails — the one non-purple signal

**Viewer Count Pill**
- Text: `#ffffff`
- Radius: 2px
- Padding: 0px 4px
- Font: 14px Inter weight 400
- Use: Viewer-count overlay on thumbnails — sits on a `rgba(0,0,0,0.6)` scrim

### Navigation
- Background: `#ffffff`
- Text: `#0e0e10`
- Font: 14px Inter weight 400
- Active: deep violet `#5c16c5` text on the active item
- Use: Top + side nav ("Browse", "Following", "Live Channels"); brand-site nav muted to `#747484`

### Avatars
- Radius: 9000px (full circle)
- Use: Channel and user avatars throughout Core UI

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.twitch.tv (Core UI live computed style — nav, Sign Up CTA, search, LIVE badge, channel tiles), https://brand.twitch.tv (brand assets surface — Ultraviolet `#9146ff`, Roobert TW, Download CTA), https://blog.twitch.tv/en/2019/12/03/beyond-purple/ (Ultraviolet / Core UI design-system rationale)
**Tier 2 sources:** getdesign.md/twitch — no data (404 / "No designs found"); styles.refero.design/?q=twitch — only AI-synthesized "style" interpretations, no authoritative Twitch UI capture
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 18px, 24px, 40px
- Notable: The dense product chrome packs metadata at 4–8px gaps; shelf and section rhythm opens up to 24–40px

### Grid & Container
- Persistent left side-nav (followed/recommended channels) + top utility bar, with the content area given to scrollable shelves of live channel tiles
- Channel tiles arranged in responsive multi-column carousels ("Live Channels", category rows)
- The live video player, when present, is the dominant element; all chrome is sized to never overpower it
- Brand site uses a centered, editorial single-column layout with large Roobert headlines

### Whitespace Philosophy
- **Density first**: Twitch is an information-dense product — shelves of live channels, viewer counts, categories. Whitespace is measured and functional, never decorative emptiness.
- **The video is the hero**: Layout exists to frame live content. Chrome recedes (soft greys, near-black ink) so the glowing stream reads as the focal point.
- **Flat segmentation**: Surfaces separate by subtle background steps (`#f7f7f8` → `#efeff1`) and structure, not by borders or shadows.

### Border Radius Scale
- Micro (2px): Viewer-count pills, tight overlays
- Small (4px): LIVE badge, channel tiles, category tags — the functional workhorse
- Medium (8px): Search field and larger inputs
- Full (9000px): Buttons and avatars — the brand pill

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, nav, buttons, channel tiles |
| Scrim (Level 1) | `rgba(0,0,0,0.6)` overlay | Viewer-count / metadata pills over thumbnails |
| Ring (Level 2) | `rgba(50,50,57,0.62) 0px 0px 0px 1px inset` | Search field border/focus ring |

**Shadow Philosophy**: Twitch is a near-shadowless system — live inspection found `box-shadow: none` across nav, buttons, headings, and channel tiles. There is no card-stack elevation. The two depth devices are (1) translucent dark scrims (`rgba(0,0,0,0.6)`) that float metadata over video thumbnails, and (2) the inset ring on form fields. This keeps the chrome flat and fast so the actual live video — the brightest, most dynamic thing on screen — owns the depth hierarchy. When emphasis is needed, Twitch reaches for the Ultraviolet purple or the scarlet LIVE red, never for a shadow.

## 7. Do's and Don'ts

### Do
- Reserve Ultraviolet (`#9146ff`) for the primary action — Sign Up, Download — keep it the single brand-action color
- Step down the violet ramp for interaction: link `#5c16c5`, hover `#451093`, deep `#330c6e`
- Use Roobert (Roobert TW) for brand/display and Inter for dense Core UI at 14px / 400
- Use near-black ink (`#0e0e10`) over the soft grey canvas (`#f7f7f8`) instead of pure black on white
- Keep the system flat — no drop shadows; use translucent scrims for thumbnail metadata
- Use full-pill (9000px) geometry for buttons and avatars; tight 2–8px radii for functional chrome
- Reserve scarlet `#eb0400` exclusively for the LIVE indicator
- Let the live video own the visual hierarchy — keep chrome quiet and dense

### Don't
- Spread Ultraviolet across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for body text — reserve near-black ink `#0e0e10`
- Add drop shadows or card-stack elevation — Twitch is flat by design
- Use the scarlet red for anything other than the LIVE state
- Mix in a second saturated brand hue — purple is the identity
- Set the dense product UI in Roobert — Inter owns Core UI; Roobert is brand/display
- Use sharp square corners on buttons or avatars — those are full pills
- Let chrome out-bright the stream — the video is the focal point, not the UI

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Side-nav collapses to an off-canvas drawer; single-column shelves; player goes full-width |
| Tablet | 640-1024px | 2–3 channel tiles per row; condensed side-nav |
| Desktop | 1024-1440px | Full side-nav + top bar + multi-column carousels |
| Large Desktop | >1440px | Wider shelves, more tiles per carousel |

### Touch Targets
- Buttons at 32px height, full-pill, comfortably tappable
- Search field at 36px height
- Channel tiles sized for thumb-friendly tapping on mobile

### Collapsing Strategy
- Side-nav: persistent rail on desktop → off-canvas drawer on mobile
- Channel carousels: multi-column → fewer columns → single column
- Player: contained → full-width on mobile
- Metadata pills (LIVE, viewers) persist at all sizes over thumbnails

### Image Behavior
- Channel thumbnails carry no shadow at any size, consistent with the flat system
- Viewer-count and LIVE pills overlay thumbnails via `rgba(0,0,0,0.6)` scrim across breakpoints
- Tiles maintain 4px radius across viewports

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Ultraviolet (`#9146ff`)
- Link / active: Link Violet (`#5c16c5`)
- Hover: Purple Hover (`#451093`)
- Deep surface: Purple Deep (`#330c6e`)
- Heading / body text: Ink (`#0e0e10`)
- Secondary text: Body Slate (`#3b3b44`)
- Muted / inactive: Muted Grey (`#747484`)
- Canvas: (`#f7f7f8`); Surface Alt: (`#efeff1`)
- LIVE signal: (`#eb0400`); Info: (`#1f69ff`)

### Example Component Prompts
- "Create a top nav on canvas `#f7f7f8`. Ink `#0e0e10` Inter 14px/400 links, active item in deep violet `#5c16c5`. A split search field (white `#ffffff`, 8px radius, inset `rgba(50,50,57,0.62)` 1px ring). Right side: a Log In pill (translucent `rgba(173,173,184,0.22)` fill, `#0e0e10` text, 9000px) and a Sign Up pill (`#9146ff` background, white text, 14px Inter 600, 9000px, 32px tall)."
- "Design a live channel tile: thumbnail-led card on `#f7f7f8`, 4px radius, no shadow. Overlay a LIVE badge (`#eb0400` background, white text, 4px radius, 1px 5px padding, 12px) top-left and a viewer-count pill (white text on `rgba(0,0,0,0.6)` scrim, 2px radius) bottom-left."
- "Build a brand hero: large Roobert TW headline at weight 600, ink `#0e0e10`. One Ultraviolet CTA — `#9146ff` background, white text, full pill (9000px), 14px Inter 600."
- "Create a category row: Roobert shelf heading at 16px/600, then a carousel of channel tiles. Circular (9000px) channel avatars, Inter 14px/400 channel names in `#0e0e10`, muted `#747484` metadata."

### Iteration Guide
1. Ultraviolet (`#9146ff`) is the single action color — don't spread it
2. Interaction steps down the violet ramp: `#5c16c5` link → `#451093` hover → `#330c6e` deep
3. Roobert for brand/display, Inter 14px/400 for Core UI — they never swap
4. No shadows — flat surfaces; scrims (`rgba(0,0,0,0.6)`) float thumbnail metadata
5. Full-pill (9000px) buttons + avatars; 2–8px for badges/tiles/inputs
6. Text is near-black ink `#0e0e10` on soft grey canvas `#f7f7f8`, never pure black on white
7. Scarlet `#eb0400` is LIVE-only — never a general accent
8. Keep chrome quiet — the live video is the hero

---

## 10. Voice & Tone

Twitch's voice is **playful, community-native, and creator-first** — it speaks the language of the people who live on the platform, never down to them. The register is conversational and warm, leaning on in-group culture (emotes, "chat", clips, raids) without being exclusionary, and it consistently centers the creator and the community over the corporation. Where most platforms address "users," Twitch addresses streamers and viewers as participants in a shared, live moment.

| Context | Tone |
|---|---|
| Product CTAs | Direct, low-friction. "Sign Up", "Log In", "Follow", "Browse". |
| Brand / marketing | Energetic, community-celebrating, culturally fluent ("Beyond Purple", "Bringing it all together"). |
| Live / status | Terse and factual. "LIVE", viewer counts, category tags — information at a glance. |
| Empowerment copy | Creator-first framing — "rooted in supporting creator brands." |
| Accessibility / inclusion | Earnest and inclusive — "The future of Twitch is for everyone." |

**Voice samples:**
- "Beyond Purple" — the 2019 rebrand banner, signaling expansion beyond a single color while keeping purple as the anchor. *(verified — blog.twitch.tv/en/2019/12/03/beyond-purple/, 2026-06-17)*
- "The future of Twitch is for everyone." — inclusion-by-design statement. *(verified — Beyond Purple post, 2026-06-17)*
- "Accessibility and inclusion by design is paramount." — design-system value. *(verified — Beyond Purple post, 2026-06-17)*

**Forbidden register**: corporate stiffness that ignores community culture, hype that overshadows creators, walls of jargon, or treating the live moment as anything other than immediate and present.

## 11. Brand Narrative

Twitch began in **2011** as a spin-off of **Justin.tv** — the lifecasting site co-founded by **Justin Kan** and **Emmett Shear** — when the team realized that *gaming* livestreams were the breakout use case. Twitch was carved out as a dedicated home for live game streaming and grew explosively into the defining platform of the creator-economy's live era. **Amazon acquired Twitch in 2014** for roughly $970M, and it remains the dominant live-streaming destination for gaming, "Just Chatting," music, and creative communities.

In **September 2019**, Twitch undertook a full platform rebrand — *"Nice to meet you again, for the first time"* — introducing the customized **Roobert** typeface and, in December's **"Beyond Purple"** follow-up, the **Ultraviolet** color system and the **Core UI** design system. The company described the motivation candidly: *"we had become limited by past decisions, making it difficult to scale products and serve our community in a cohesive way."* The rebrand re-derived the entire palette — *"15 grays and 15 purples"* — from an updated brand purple along a controlled lightness curve, with **light and dark themes supported equally** and **accessibility and inclusion by design** stated as paramount.

What Twitch refuses, visible in its design: corporate sterility that ignores the chaotic, joyful culture of its communities, and decorative chrome that would compete with the live video. What it embraces: a single iconic purple that *"got Twitch to where it is"* now reinforced by a vibrant, game-inspired expanded palette; a dark-mode-native, high-density Core UI built so *"Core UI powers all of Twitch product UI"*; and a brand *"rooted in supporting creator brands"* — including a dedicated creator color token so streamers' identities can live inside the product.

## 12. Principles

1. **The live moment is the product.** Everything is in service of a stream happening *right now*. *UI implication:* keep chrome flat and quiet (no shadows, soft greys) so the glowing live video owns the visual hierarchy; surface "LIVE" and viewer counts instantly.
2. **One purple, deepened — not diluted.** Ultraviolet `#9146ff` is the anchor; interaction steps down a controlled violet ramp. *UI implication:* reserve `#9146ff` for the primary action and use `#5c16c5`/`#451093`/`#330c6e` for links, hover, and deep surfaces — one hue, many calibrated steps.
3. **Accessibility and inclusion by design.** Stated as paramount in the rebrand. *UI implication:* the 15-gray / 15-purple ramps are built on a lightness curve for contrast; light and dark themes are first-class equals.
4. **Density done with discipline.** Twitch shows a lot at once — shelves of channels, counts, tags. *UI implication:* a tight 12–14px Inter type scale and 2–8px functional radii keep information dense yet scannable.
5. **Built for creators, not just users.** The brand is *"rooted in supporting creator brands."* *UI implication:* leave room for creator identity (creator color tokens, channel avatars, custom branding) inside an otherwise systematic UI.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Twitch user segments (variety streamers, esports viewers, mobile-first lurkers, community moderators), not individual people.*

**Devon Reyes, 24, Austin.** A variety streamer building a channel around co-op games and "Just Chatting." Lives in dark mode, cares that his channel's branding (color token, panels, emotes) reads as *his*, not generic Twitch. Values that the platform's chrome stays out of the way of his webcam and gameplay.

**Mina Park, 19, Seoul.** A mobile-first esports viewer who watches tournaments on the train. Scans shelves of live channels by thumbnail, LIVE badge, and viewer count in a glance — density is a feature, not a flaw, to her. Notices immediately when a category row is slow or cluttered.

**Caleb Wright, 31, Manchester.** A community moderator across several mid-size channels. Spends his time in chat and mod tools, not marketing pages. Wants the functional UI fast, legible, and consistent; appreciates that Core UI behaves the same across every tool he touches.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no channels live / following)** | Soft canvas (`#f7f7f8`). A single Ink (`#0e0e10`) line explaining nothing's live right now, with one Ultraviolet CTA ("Browse") to discover channels. No heavy illustration. |
| **Empty (search no results)** | Muted Grey (`#747484`) line stating no results, with the query echoed and a suggestion to broaden. Calm, factual. |
| **Loading (shelf / carousel)** | Skeleton channel tiles at final dimensions on `#f7f7f8`, 4px radius, flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (player buffering)** | Inline spinner over the player area; the surrounding chrome stays interactive. |
| **Error (stream offline)** | The channel page shows an offline state in Ink with a plain message and recommended live channels below — never a dead end. |
| **Error (form validation)** | Field-level message below the input in a clear error tone; describes what's valid, not just "required." |
| **Success (followed / subscribed)** | Brief inline confirmation; the follow control flips state immediately. No celebratory blocker — the action is instant. |
| **Skeleton** | `#efeff1` blocks at final dimensions, 2–4px radius, flat pulse. |
| **Disabled** | Reduced-opacity surface and text; Ultraviolet actions fade rather than turn grey, to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus rings |
| `motion-standard` | 200ms | Shelf reveal, dropdown, side-nav expand/collapse |
| `motion-slow` | 320ms | Page-level transitions, theme switch |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — menus, panels, tiles |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Twitch describes animation as *"a huge part of the rebrand… part of the design language that blends product and brand together"* — but inside the dense product, motion stays functional and quick so it never competes with live video. Hover and press respond at `motion-fast`; shelves and the side-nav expand at `motion-standard / ease-enter`. The expressive, brand-level animation (the glitch-mark, emote energy) lives on brand and marketing surfaces, not on top of a running stream. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle on https://www.twitch.tv
and https://brand.twitch.tv:
- Sign Up CTA — bg rgb(145,71,255) #9146ff / radius 9000px / Inter 14px / weight 600 / white text / 32px
- Brand Download CTA (brand.twitch.tv) — bg rgb(145,70,255) #9146ff / radius 9999px / Roobert TW
- Links / active — color rgb(92,22,197) #5c16c5 (257 fg occurrences)
- Ink text rgb(14,14,16) #0e0e10 (1155 fg occurrences); body slate rgb(59,59,68) #3b3b44
- Canvas bg rgb(247,247,248) #f7f7f8; surface alt rgb(239,239,241) #efeff1
- Purple surfaces rgb(51,12,110) #330c6e, rgb(69,16,147) #451093
- LIVE badge bg rgb(235,4,0) #eb0400 / radius 4px / 1px 5px padding / 12px
- Search input bg #ffffff / radius 8px / inset rgba(50,50,57,0.62) 1px ring / 36px
- Log In btn — translucent rgba(173,173,184,0.22) fill / radius 9000px / 32px
- Viewer-count pill — rgba(0,0,0,0.6) scrim / white text / 2px radius
- box-shadow: none across nav, buttons, headings, channel tiles (shadowless system)
- brand body font: "Roobert TW"; product body font: Inter

Token-level claims (§1-9) are sourced from this live inspection plus the official
"Beyond Purple" rebrand post (blog.twitch.tv/en/2019/12/03/beyond-purple/), which
documents the Ultraviolet color system, Core UI design system, "15 grays and 15 purples"
derivation, light/dark theme parity, and "accessibility and inclusion by design."

Brand narrative (§11): Twitch spun out of Justin.tv (Justin Kan, Emmett Shear) in 2011;
acquired by Amazon in 2014; 2019 rebrand introduced Roobert + Ultraviolet/Core UI. These
are widely documented public facts plus statements quoted from the verified Beyond Purple
post in this turn.

Voice samples (§10) are verbatim from the verified Beyond Purple post.

Personas (§13) are fictional archetypes informed by publicly observable Twitch user
segments (variety streamers, esports viewers, mobile-first lurkers, moderators). Names are
illustrative; they do not refer to real people.

Tier 2: getdesign.md/twitch returned no data (404 / "No designs found"); styles.refero.design
?q=twitch returned only AI-synthesized "style" interpretations, not an authoritative Twitch
UI capture. Tier 1 (live inspect + official brand post) carries the evidence.

Interpretive claims (e.g., "one purple, deepened — not diluted", "the live moment is the
product") are editorial readings connecting Twitch's observed design and stated rebrand
rationale to its design language, not directly sourced Twitch statements.
-->
