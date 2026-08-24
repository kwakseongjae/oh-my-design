# Discord Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Discord is the community hang-out product behind `https://discord.com`. This contract covers two named first-party surfaces documented as parallel peers: in-app product UI (dark-mode-first, gg sans, layered slate-navy) and the marketing site on `discord.com` (bright Blurple fields, Wumpus illustration, large rounded headlines). A value from one is not a proxy for the other. Light theme is a secondary product theme, not a substitute for the dark default. Catalog homepage identity is `https://discord.com`.

Exact values below are limited to the source’s stated public-product observations. Token extraction is `prose-derived`. Live `discord.com` is named as a production check of dark-mode-first product chrome, Blurple accent, and marketing voice; in-app radii, paddings, and heights are representative of observed UI conventions, and exact internal design-token names may differ. This is not an official Discord-authored UI specification.

The next paragraph is a derived editorial implementation inference from the verified surfaces; it is not Discord-authored or a separately published UI specification. The product UI is built to feel like a clubhouse rather than an enterprise tool: deep slate-navy surfaces (`#313338` chat, `#2B2D31` channel sidebar, `#1E1F22` server rail) layered like physical panels, with one electric accent doing the talking — **Blurple** (`#5865F2`). Blurple is a portmanteau of “blue” and “purple”; that in-between quality is treated here as the personality of the brand — friendly but not corporate, energetic but not aggressive. Marketing is the playful sibling of the product: bright Blurple fields, hand-drawn-feeling illustrations of Wumpus and friends, big rounded headlines, and a tone that reads like a group chat. Both share generous rounded corners, the Blurple accent, and **gg sans**.

Discord was founded in 2015 by Jason Citron and Stan Vishnevskiy. The original wedge was low-latency voice chat while playing games; it grew into “your place to talk” — community-run **servers** organized into **channels** for text, voice, and video. The mascot **Clyde** (and the rounded logo built from his face) and **Wumpus**, the wide-eyed blob, are named brand characters; **Nelly** is named in the source verification comment. The **2021 rebrand** brightened the original Blurple (`#7289DA`) into the current `#5865F2`, introduced proprietary **gg sans** in place of Whitney/Uni Sans, standardized a five-color palette (Blurple, Green, Yellow, Fuchsia, Red), and broadened the audience from “for gamers” to communities of any kind.

The following refusal reading is a derived editorial implementation inference from the verified surfaces; it is not Discord-authored or a separately published UI specification. What this reconstruction treats Discord as refusing: the sterile minimalism of enterprise chat, and the attention-hungry feed mechanics of social media. The source states there is no algorithmic feed and no like-count dopamine loop. Blurple is friendly, not urgent; the dark surfaces are a place to settle in, not a dashboard to monitor.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Send and read messages in community-run server channels.
- Join a server or open Discord from a marketing CTA (“Download”, “Open Discord in your browser”, “Join Server”).
- Talk with low-latency voice in a server.
<!-- design-md:claim-end -->

### Audience

No invented demographic personas are promoted. Observable work follows the three primary tasks: people sending and reading channel messages; people joining a server or opening Discord from marketing; people talking with low-latency voice. Source §13’s named fictional archetypes are not Audience and are not primary tasks.

### Distinctive traits

- Blurple `#5865F2` as the universal interactive accent; catalog `primary_color` is this value
- Dark-mode-first product UI with layered slate-navy `#1E1F22` → `#2B2D31` → `#313338`
- gg sans proprietary typeface (six weights 300–800); Ginto-family display for big marketing headlines
- Five-color brand palette: Blurple, Green `#57F287`, Yellow `#FEE75C`, Fuchsia `#EB459E`, Red `#ED4245`
- Bright, illustrated marketing surface versus focused dark product surface
- Generous rounded corners (4px–8px–16px scale) and pill marketing CTAs
- Mascot-driven personality (Wumpus, Clyde, Nelly) and conversational copy

### Principles

These eight items and the capture-bound application list are a derived editorial implementation inference from the verified surfaces; they are not Discord-authored or a separately published UI specification.

1. **The conversation is the product.** Chrome recedes (dark layered surfaces) so the message column is always the brightest, most legible thing on screen.
2. **One accent, used sparingly.** Blurple marks the primary action and live state. Overusing it would dilute the one color the brand owns. Status uses its own fixed semantic colors.
3. **Depth by layering, not shadow.** Three surface shades build a sense of physical panels. Reserve shadows for true overlays.
4. **Soft on the eyes.** Long chat sessions demand soft white text and muted contrast steps — never pure-white walls of text.
5. **Playful where you explore, plain where it counts.** Personality (Wumpus, jokes, lowercase warmth) lives on discovery and community surfaces; safety, billing, and destructive flows are direct and calm.
6. **Rounded everywhere.** From gg sans’s terminals to server squircles to pill CTAs, the friendly curve is the through-line. Sharp corners feel off-brand.
7. **Status has fixed meaning.** Green = online/success, Yellow = idle, Red = DND/error, Grey = offline. These never get reassigned for decoration.
8. **Communities, not feeds.** No infinite scroll of strangers, no engagement bait. The design serves the room the user chose to be in.

Capture-bound application:

- Use Blurple `#5865F2` for the single primary action and all interactive accents.
- Build the product UI dark-first with the three layered surfaces (`#1E1F22` / `#2B2D31` / `#313338`).
- Use soft white `#DBDEE1` for body text, reserving pure white for headers/usernames.
- Use green (`#23A55A`) for toggles and online status, not Blurple. YAML toggle-on `#57F287` is a different recorded green; do not merge them.
- Keep buttons filled and borderless with 8px radius; pill (9999px, and the marketing CTA’s recorded 28px “fully pill”) for marketing CTAs.
- Round server icons into squircles (16px) and avatars into circles.
- Use the five-color brand palette for status, illustration, and accents.
- Let the marketing surface be loud, illustrated, and Wumpus-friendly.
- Default to dark mode with the three layered surfaces; light mode is a secondary theme.
- gg sans throughout product UI, weights 400/500/600/700 in primary use; uppercase 12px/600 with `0.02em` tracking for section labels.
- Radius: 4px inputs/embeds, 8px buttons/cards/modals, 16px server icons, pill for badges/CTAs/toggles.
- Depth via surface stepping, not shadow — overlays get soft black low-opacity shadows.

### Avoid

The following Don'ts include source-stated prohibitions and retained editorial judgements (depth from surface stepping, serious-flow calmness, clean three-panel shell). Those judgements are a derived editorial implementation inference from the verified surfaces; they are not Discord-authored or a separately published UI specification.

- Don’t use the legacy Blurple (`#7289DA`) — the brand moved to `#5865F2` in 2021.
- Don’t put Blurple on toggles or success states — those are green.
- Don’t use pure white (`#FFFFFF`) for long-form body text on dark surfaces.
- Don’t rely on heavy shadows in-product — depth comes from surface stepping.
- Don’t mix the playful marketing tone into destructive/safety flows — those stay clear and calm.
- Don’t crowd the chat with chrome — keep the three-panel shell clean.
- Don’t recolor status dots arbitrarily — green/yellow/red/grey are fixed semantics.
- Don’t present Noto Sans, Helvetica Neue, Arial, or a fallback stack as gg sans or Ginto.
- Don’t present Whitney or Uni Sans as the current product face.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Primary / identity:

- **Blurple** (`#5865F2`): primary interactive color — CTAs, links, mentions, active channel, selected state, focus rings. Catalog `primary_color` is this value. The following workhorse reading is a derived editorial implementation inference from the verified surfaces; it is not Discord-authored or a separately published UI specification. The workhorse of every actionable element.
- **Blurple Hover** (`#4752C4`): hover/pressed state for Blurple buttons. A darker, deeper Blurple.
- **Blurple Active** (`#3C45A5`): pressed/active state, the deepest Blurple step.
- **White** (`#FFFFFF`): primary text on dark surfaces, button labels on Blurple; also light-theme main chat canvas. Not long-form body text on dark (`#DBDEE1`).
- **Legacy Blurple** (`#7289DA`): 2021 predecessor. Do not use.

Brand palette (Discord Five) — YAML names; not substitutes for the presence/button/badge hexes below:

- **Green** (`#57F287`): YAML success, online status, positive confirmation, Nitro accents.
- **Yellow** (`#FEE75C`): YAML idle status, highlights, playful accent, warnings (soft).
- **Fuchsia** (`#EB459E`): Nitro / premium accent, decorative pop, special moments.
- **Red** (`#ED4245`): YAML errors, destructive actions, Do Not Disturb status, mention badges.

Product surfaces (dark — default):

- **Background Tertiary** (`#1E1F22`): server rail (left-most), deepest surface, also app chrome. YAML `surface-tertiary`. Also YAML `tokens.colors` input/rail.
- **Background Secondary** (`#2B2D31`): channel sidebar, member list — the second layer. YAML `surface-secondary`.
- **Background Primary** (`#313338`): main chat area — the surface you read on. YAML `surface-primary`.
- **Background Floating** (`#111214`): tooltips, popouts, context menus — darker than primary for lift. YAML `surface-floating`.
- **Background Modifier Hover** (`rgba(78,80,88,0.3)`): row hover in lists and channels. Not a YAML hex.
- **Background Modifier Selected** (`rgba(78,80,88,0.6)`): selected channel/row background. Not a YAML hex.
- **Message Box** (`#383A40`): chat composer fill. YAML `message-box`. This is that field’s renderable background, not Background Primary.

Product surfaces (light theme):

- **Light Background Primary** (`#FFFFFF`): main chat area in light mode.
- **Light Background Secondary** (`#F2F3F5`): channel sidebar in light mode. Same hex as Header Primary; different role.
- **Light Background Tertiary** (`#E3E5E8`): server rail / deepest light surface.

Text (dark theme):

- **Text Normal** (`#DBDEE1`): primary body / message text. Soft off-white, not pure white.
- **Header Primary** (`#F2F3F5`): headings, usernames, strong labels.
- **Text Muted** (`#949BA4`): timestamps, secondary metadata, placeholder, channel names (inactive).
- **Interactive Normal** (`#B5BAC1`): default icon/interactive element color.
- **Interactive Hover** (`#DBDEE1`): hovered icon/interactive element. Same hex as Text Normal; different role.
- **Text Link** (`#00A8FC`): inline hyperlinks in messages (a brighter cyan-blue, distinct from Blurple).
- **On Primary** (`#FFFFFF`): YAML on-primary; button labels on Blurple.

Borders, fills, and local control colors — not merged into the brand five:

- **Border Subtle** (`rgba(255,255,255,0.06)`): hairline dividers between sections.
- **Border Strong** (`#1E1F22`): channel/server separators, input outlines on dark. Same hex as Background Tertiary; different role.
- **Input Background** (`#1E1F22`): message box and form input fill on dark in §2; YAML input `bg` is also `#1E1F22`. The chat composer fill remains `#383A40`.
- **Grey Secondary** (`#4E5058`): YAML secondary button fill; also outline border.
- **Marketing CTA on-white text** (`#23272A`): text on white marketing pills. Not Text Normal and not Header Primary.

Status, presence, and control greens/reds/yellows that must not be averaged with the brand five:

- **Presence Online / Toggle On (body)** (`#23A55A`): §4 toggle track on; §14 presence online. Not YAML Green `#57F287`.
- **Success Button** (`#248046`): Accept Invite / Complete fill. Hover `#1A6334`. Not `#57F287` and not `#23A55A`.
- **Idle / reconnect banner** (`#F0B232`): presence idle (crescent); connection-error banner (reconnecting). Not YAML Yellow `#FEE75C`.
- **Mention / DND / offline-banner** (`#F23F43`): §4 mention badge; §14 DND and offline connection banner. YAML mention-badge `bg` is `#ED4245`. Both figures are kept.
- **Destructive Button** (`#DA373C`): Delete, Leave Server, Ban, Kick. Hover `#A12828`. Not `#ED4245`.
- **Offline / Toggle Off** (`#80848E`): presence offline; toggle track off.
- **Streaming** (`#593695`): presence streaming (purple).
- **Input error** (`#FA777C`): error-input border and helper. Not `#ED4245`.
- **Input placeholder (settings)** (`#87898C`): settings/search/login placeholder. Disabled input text greys to this same hex.
- **Message-box placeholder** (`#6D6F78`): “Message #general”. Same hex as Secondary button hover; different role.
- **Settings tab hover** (`#35373C`): inactive settings-sidebar hover fill.
- **Settings tab active** (`#404249`): active settings-sidebar fill.
- **Loading skeleton** (`#3A3C42`): first-paint skeleton blocks matching message-row layout.
- **Spoiler overlay** (`#202225`): spoiler/NSFW cover with heavy blur.

### Spacing

Base unit: 4px. YAML working cluster: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px. Message vertical rhythm: 16px group gap, tight 2px within a grouped message run. Sidebar item spacing: 2px between channels, 8px between channel categories. These are source-stated values, not a claim that every unlisted surface shares them.

### Shape

- Tight (4px): inputs, embeds, channel items, small chips
- Standard (8px): buttons, modals, cards, tooltips
- Squircle (16px): server icons, avatars (hover morphs circle→squircle)
- Marketing CTA pill geometry: 28px (source: “fully pill”) and, separately, Pill (9999px) listed for status dots, mention badges, marketing CTAs, toggles. Both figures are kept; they are not averaged.
- YAML `rounded.full`: 9999px

4px input/embed corners and 8px button/modal corners are local geometry, not a universal radius for every surface.

### Elevation

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not Discord-authored or a separately published UI specification. In dark mode, Discord communicates elevation primarily through surface color stepping rather than shadow — a floating panel is darker (`#111214`) than the surface it sits on (`#313338`), which reads as lifted. Shadows are reserved for true overlays (menus, modals) and are soft, pure-black, low-opacity. Marketing surfaces use slightly more playful drop shadows and a faint Blurple glow on hovered CTAs.

| Level | Treatment | Use |
|---|---|---|
| Base (Level 0) | Surface color only (`#313338`) | Main chat, page background |
| Layer (Level 1) | Adjacent darker surface (`#2B2D31`) | Sidebars, cards — depth via color, not shadow |
| Floating (Level 2) | `0 4px 8px rgba(0,0,0,0.24)` on `#111214` | Tooltips, popouts, context menus |
| Modal (Level 3) | `0 8px 16px rgba(0,0,0,0.24)` on `#313338` | Dialogs, settings overlays |
| High (Level 4) | `0 12px 32px rgba(0,0,0,0.36)` | Full-screen modals, image lightbox |

YAML `tokens.shadow.floating` / `modal` / `high` match the three shadow rows. Modal scrim: `rgba(0,0,0,0.85)` behind dialogs. Streamer-mode / spoiler blur: heavy gaussian blur revealed on click. No frosted-glass chrome in the core product — surfaces are opaque for performance and clarity. No numeric blur value is promoted.

### Motion

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Theme toggles, immediate state flips |
| `motion-fast` | 100ms | Hover reveals, tooltip show, icon color change, message action toolbar |
| `motion-standard` | 200ms | The default — popouts, dropdowns, tab switches, badge pop |
| `motion-emphasis` | 300ms | Modal open, settings page transitions, panel slides |
| `motion-page` | 350ms | Mobile panel swipes, full-screen sheet presentation |

Signature motions (source-stated; not decoration):

The following signature-motion superlatives and smoothness/usability judgements are a derived editorial implementation inference from the verified surfaces; they are not Discord-authored or a separately published UI specification.

1. **Squircle morph.** Hovering or selecting a server icon morphs its border-radius from a full circle to a 16px squircle over `motion-standard / ease-bounce`. A white pill simultaneously grows on the left rail edge (4px idle → 40px active). The source calls this the single most recognizable Discord micro-interaction. `ease-bounce` here is the source-stated token name and use, not a computed curve.
2. **Mention badge pop.** A new unread mention scales the red badge from 0 → 1.0 with a slight overshoot (`ease-bounce`, `motion-standard`). Reactions and emoji additions use the same bounce. `ease-bounce` is the source-stated token name and use, not a computed curve.
3. **Message action toolbar.** On row hover, the react/reply/more toolbar fades and slides 4px into place over `motion-fast / ease-enter` — fast enough to feel instant, smooth enough to feel intentional. `ease-enter` is the source-stated token name and use, not a computed curve.
4. **Popout & modal.** Context menus and popouts scale from `0.95 → 1.0` with opacity `0 → 1` over `motion-standard / ease-enter`; modals additionally fade in a `rgba(0,0,0,0.85)` scrim. Dismissals use `motion-fast / ease-exit`. `ease-enter` / `ease-exit` are source-stated token names and uses, not computed curves.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, bounce easings collapse to `ease-standard`, slides become fades, and the squircle morph becomes an instant radius change. The app stays fully usable.

Source-stated easing token names and uses (uncomputed; cubic-bezier curves omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name and use only) | Things appearing — popouts, tooltips, modals |
| `ease-exit` | omitted (unattributed cubic-bezier; matches the legacy spec template) | Things leaving — dismissals, closing menus |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name and use only) | Two-way transitions — accordions, tab content |
| `ease-bounce` | omitted (unattributed cubic-bezier; source-stated name and use only) | Playful overshoot — server-icon squircle morph, mention-badge pop, emoji reactions |

Exact cubic-bezier curves are unattributed — `ease-exit` matches the legacy spec template — and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live surface-use | discord.com live production check: dark-mode-first product chrome, Blurple accent, playful/community marketing voice. Token extraction is `prose-derived`. |
| Publicly known proprietary families | gg sans, gg mono, and the Ginto display family are Discord’s publicly-known proprietary type choices introduced/used post-2021 rebrand, replacing Whitney/Uni Sans. Values below remain widely documented public observations, not a sourced internal Discord specification. |
| Official brand surface | `https://discord.com/branding` is named in the source WebSearch comment for Blurple `#5865F2` and the five-color palette. This is a first-party brand surface, not in-app product-use. |
| Third-party-corroborated brand color | color-name.com, mobbin.com, and colorxs.com are named in the same WebSearch comment for Blurple `#5865F2` and the five-color palette. This is third-party corroboration, not official product-use and not in-app product-use. |
| Declared-only | `"Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif` as gg sans fallbacks; Consolas / Andale Mono WT / Andale Mono / Lucida Console / Menlo / Monaco as gg mono fallbacks. |
| Official distributed asset / license | No Discord-exclusive public redistribution right for gg sans, gg mono, or Ginto is established here. |
| Outside this capture | A loadable gg sans / Ginto webfont for third-party reproduction; in-app type metrics beyond the named product-UI conventions. |

### Family

- **Primary:** `"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Display (marketing):** `"ginto", "gg sans", sans-serif` — Discord uses a Ginto-family display face for big marketing headlines.
- **Monospace (code blocks):** `"gg mono", Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", Menlo, Monaco, monospace`
- **Emoji:** native platform emoji plus Discord’s custom emoji rendering
- Do not present Noto Sans, Helvetica Neue, Arial, or a fallback stack as gg sans or Ginto. An officially known but unavailable face keeps its metadata and loses only a live specimen. Do not present Whitney or Uni Sans as the current product face.

gg sans ships in six weights: 300 (Light), 400 (Normal), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold). The product UI primarily uses 400, 500, 600, and 700.

The following type-character reading is a derived editorial implementation inference from the verified surfaces; it is not Discord-authored or a separately published UI specification. Soft white, not pure white: body text is `#DBDEE1`, never `#FFFFFF`, on dark surfaces — reduces glare during long chat sessions. Uppercase micro-labels: section labels (CHANNELS, ONLINE — 14, etc.) use 12px/600 uppercase with `0.02em` tracking for scannable structure. Weight, not size, for emphasis: usernames and headers lean on 600/700 weight rather than dramatically larger sizes — the chat stays dense and readable. Rounded warmth: gg sans’s rounded terminals carry the brand’s friendliness into every line of text without extra ornament.

### Type roles

Verified line-height values are the unitless YAML ratios. Px figures in the legacy body table are size-local observations at those captured sizes, not replacements for the ratios.

| Role | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---:|---|
| Marketing Hero | ginto / gg sans | 56px | 800 | 1.1 | -0.02em | Landing page headline |
| Display Large | gg sans | 32px | 700 | 1.25 | -0.01em | Modal titles, big moments; size-local 40px |
| Heading 1 | gg sans | 24px | 700 | 1.25 | normal | Section headers; size-local 30px |
| Heading 2 | gg sans | 20px | 600 | 1.30 | normal | Sub-sections, settings groups; size-local 26px |
| Channel Name | gg sans | 16px | 600 | 1.25 | normal | Channel/server headers; size-local 20px |
| Body Large | gg sans | 16px | 400 | 1.375 | normal | Message text, descriptions; size-local 22px |
| Body | gg sans | 14px | 400 | 1.29 | normal | Standard UI text, list items; size-local 18px |
| Label | gg sans | 12px | 600 | 1.33 | 0.02em | Section labels (UPPERCASE); size-local 16px |
| Caption | gg sans | 12px | 400 | 1.33 | normal | Timestamps, helper text; size-local 16px |
| Code | gg mono | 14px | 400 | 1.29 | normal | Inline code, code blocks; size-local 18px |

### Assets

Catalog logo metadata is Simple Icons identity (`discord`), not a captured first-party mark, and is not a portable asset here. Clyde (rounded logo built from his face) and Wumpus are described mascots; no redistributable file is attached. Do not replace verified Wumpus/Clyde illustration with invented decoration.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted. Characterizations in that table such as friendly/warm copy and “No jokes” are a derived editorial implementation inference from the verified surfaces; they are not Discord-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| Empty (no messages) | Wumpus illustration centered, friendly one-liner in `#949BA4` ("This is the start of the #channel channel."), no hard CTA — the message box invites the first message. |
| Empty (no friends/DMs) | Larger Wumpus illustration, headline in `#F2F3F5`, single Blurple "Add Friend" button. Warm, inviting copy. |
| Loading (first paint) | Skeleton blocks in `#3A3C42` matching message-row layout (avatar circle + text bars). Subtle shimmer. Server rail and sidebars paint first. |
| Loading (sending message) | Message appears immediately in a dimmed `opacity: 0.6` state; resolves to full opacity on server ack. Fails to a red retry affordance. |
| Error (inline field) | `#FA777C` 1px border on input, helper text below in `#FA777C` 12px. One clear sentence. |
| Error (connection) | Top banner in `#F0B232` (reconnecting) or `#F23F43` (offline) with white text, spans the chat width, auto-clears on reconnect. |
| Error (action failed) | Toast on `#111214`, `#DBDEE1` text, red left accent, plain copy ("Couldn't send. Try again."). No jokes. |
| Success (friend added / settings saved) | Brief toast or inline green flash; a "Saved" pill in `#23A55A`. Settings pages show a sticky "Careful — you have unsaved changes!" bar in `#1E1F22` until saved. |
| Presence states | Online `#23A55A`, Idle `#F0B232` (crescent), DND `#F23F43` (minus bar), Offline `#80848E`, Streaming `#593695` (purple). Dot has a `#2B2D31` ring against the surface. |
| Disabled | Buttons drop to `opacity: 0.5`, no hover, `cursor: not-allowed`. Inputs keep border geometry, text greys to `#87898C`. |
| Hover (message row) | Row bg shifts to `rgba(78,80,88,0.3)`, action toolbar (react, reply, more) fades in top-right over `motion-fast`. |
| Spoiler / NSFW | Content covered by heavy blur + `#202225` overlay, revealed on click. Streamer mode auto-blurs sensitive UI. |

In-app radii, paddings, and heights are representative of Discord’s observed UI conventions; exact internal design-token names may differ. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` capture is not `focus-visible` treatment evidence; named focus colors stay as additional observed states, and the `focus-visible` visual treatment remains omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

Embed, Settings Card, Tooltip, and Modal have no interactive-kind evidence, so kind and a state-applicability map are omitted. Mention Badge, Nitro Badge, Status Pill, and Toast are descriptive rather than interactive. Disabled on documented buttons: opacity `0.5`, no hover, `cursor: not-allowed`. Discord buttons are filled, borderless, and pill-to-rounded. Default height is 38px (medium); a 32px small and a 44px large also exist. Radius is 8px for standard buttons. The following post-rebrand / marketing-pill reading is a derived editorial implementation inference from the verified surfaces; it is not Discord-authored or a separately published UI specification. Discord moved toward more rounded buttons post-rebrand; many primary CTAs are fully pill-shaped on marketing.

### Primary (Brand)

- Role: primary action — Send, Confirm, Join Server, Continue
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#5865F2`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 2px 16px (min-height 38px)
- Font: 14px / 500 / gg sans
- Hover: background `#4752C4`
- Active: background `#3C45A5`
- Disabled: opacity 0.5, no pointer
- Use: Primary action — Send, Confirm, Join Server, Continue

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named primary action |
| hover | applicable | Pointer-web button; `#4752C4` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented: opacity 0.5, no pointer |
| loading | not-applicable | Sending is the dimmed message (`opacity: 0.6`); Join Server is the destination. This button itself does not enter a loading state |
| error | not-applicable | Failure is the red retry on the message or an action-failed toast, not an error paint on this button |
| success | not-applicable | Ack is the message resolving to full opacity, or a toast / Saved pill, not a success paint on this button |

Additional observed named state: Active `#3C45A5`.

### Secondary (Grey)

- Role: neutral secondary action paired with Primary (Cancel-adjacent, Back)
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#4E5058`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 2px 16px
- Font: 14px / 500 / gg sans
- Hover: background `#6D6F78`
- Use: Neutral secondary action paired with Primary (Cancel-adjacent, Back)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named secondary action |
| hover | applicable | Pointer-web button; `#6D6F78` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-button disabled: opacity 0.5, no pointer |
| loading | not-applicable | Cancel-adjacent / Back navigates or closes; the control itself does not enter a loading state |
| error | not-applicable | Neutral meaning is the paired action, not a request or validation failure on the button |
| success | not-applicable | Dismissing is not an action-outcome confirmation on the button |

### Success (Green)

- Role: positive confirm (Accept Invite, Complete)
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#248046`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Font: 14px / 500 / gg sans
- Hover: background `#1A6334`
- Use: Positive confirm (Accept Invite, Complete)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named positive confirm |
| hover | applicable | Pointer-web button; `#1A6334` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-button disabled: opacity 0.5, no pointer |
| loading | not-applicable | Accept Invite / Complete fires the confirm; waiting is not a loading state of this button |
| error | not-applicable | The green fill is the variant, not an error state of the control |
| success | not-applicable | Completing the invite is navigation or a toast, not a success paint on this button |

### Destructive (Red)

- Role: destructive confirm (Delete, Leave Server, Ban, Kick)
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#DA373C`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Font: 14px / 500 / gg sans
- Hover: background `#A12828`
- Use: Delete, Leave Server, Ban, Kick

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named destructive confirm |
| hover | applicable | Pointer-web button; `#A12828` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-button disabled: opacity 0.5, no pointer |
| loading | not-applicable | Delete / Leave / Ban / Kick fires the destructive action; waiting is not a loading state of this button |
| error | not-applicable | The danger fill is the variant, not an error state of the control |
| success | not-applicable | Leaving or deleting is confirmed by navigation or a toast, not a success paint on this button |

### Link / Ghost

- Role: tertiary action, “No thanks”, subtle cancel inside modals
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#FFFFFF` (underline on hover)
- Border: none
- Padding: 2px 4px
- Font: 14px / 500 / gg sans
- Use: Tertiary action, “No thanks”, subtle cancel inside modals

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named tertiary / cancel action |
| hover | applicable | Pointer-web button; underline on hover captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-button disabled: opacity 0.5, no pointer |
| loading | not-applicable | Subtle cancel navigates or closes; the control itself does not enter a loading state |
| error | not-applicable | Tertiary meaning is the paired action, not a request or validation failure on the button |
| success | not-applicable | Cancel is not an action-outcome confirmation on the button |

### Outline

- Role: secondary marketing CTA, low-emphasis action on dark
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#FFFFFF`
- Border: 1px solid `#4E5058`
- Radius: 8px
- Use: Secondary marketing CTA, low-emphasis action on dark

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named secondary marketing / low-emphasis action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-button disabled: opacity 0.5, no pointer |
| loading | not-applicable | Marketing / low-emphasis action is the destination; the control itself does not enter a loading state |
| error | not-applicable | Secondary meaning is the paired action, not a request or validation failure on the button |
| success | not-applicable | Following the CTA is not an action-outcome confirmation on the button |

### Marketing CTA (Pill)

- Role: landing CTAs — “Download” / “Open Discord in your browser”
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#FFFFFF` (on Blurple section) or `#5865F2` (on white section)
- Text: `#23272A` on white / `#FFFFFF` on Blurple
- Radius: 28px (fully pill)
- Padding: 16px 32px
- Font: 20px / 500 / gg sans
- Hover: subtle shadow lift + 1.02 scale
- Use: “Download” / “Open Discord in your browser” landing CTAs

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named landing CTA |
| hover | applicable | Pointer-web button; shadow lift + 1.02 scale captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-button disabled: opacity 0.5, no pointer |
| loading | not-applicable | Download / Open Discord is the destination action; the control itself does not enter a loading state |
| error | not-applicable | Marketing CTA meaning is the destination, not a request or validation failure on the button |
| success | not-applicable | Opening Discord is not an action-outcome confirmation on this button |

### Text Input (dark)

- Role: settings forms, search, login fields
- Kind: interactive
- Type: input
- Anatomy: value field with helper text
- Background: `#1E1F22`
- Text: `#DBDEE1`
- Border: 1px solid `#1E1F22` (default), `#5865F2` on focus
- Radius: 4px
- Padding: 10px 12px
- Font: 16px / 400 / gg sans
- Placeholder: `#87898C`
- Use: Settings forms, search, login fields
- Error: border 1px solid `#FA777C`; helper `#FA777C` 12px below

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named settings/search/login field |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | Documented: inputs keep border geometry, text greys to `#87898C` |
| loading | not-applicable | The field’s role is text entry with helper text; the field itself does not enter a loading state |
| error | applicable | Captured validation-failure treatment |
| success | not-applicable | Confirmation is the toast or Saved pill, not a success state of the field |

Additional observed named state: generic `Focus` — border `#5865F2`. This is not `focus-visible` evidence.

### Message Box

- Role: the chat composer. The following superlative reading is a derived editorial implementation inference from the verified surfaces; it is not Discord-authored or a separately published UI specification: the most-used input in the app.
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#383A40`
- Text: `#DBDEE1`
- Border: none
- Radius: 8px
- Padding: 11px 16px
- Font: 16px / 400 / gg sans
- Placeholder: `#6D6F78` ("Message #general")
- Use: The chat composer

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named chat composer |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | Message entry can be unavailable; visual treatment omitted |
| loading | not-applicable | Sending is the dimmed message (`opacity: 0.6`), not a loading state of the composer |
| error | not-applicable | Failed send is the red retry on the message, not a composer-field error |
| success | not-applicable | Delivered is the message resolving to full opacity, not a success confirmation on the composer |

### Embed (link/bot card)

- Role: rich link previews, bot responses, announcements
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#2B2D31`
- Border-left: 4px solid `#5865F2` (color customizable per embed)
- Radius: 4px
- Padding: 16px
- Use: Rich link previews, bot responses, announcements

### Settings Card

- Role: grouped settings rows, account panels
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#2B2D31`
- Border: none
- Radius: 8px
- Padding: 16px 20px
- Use: Grouped settings rows, account panels

### Modal

- Role: confirmation dialogs, server settings, invite flows
- Type: dialog
- Kind: omitted. The source records default geometry and no interactive-kind evidence for the dialog surface, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#313338`
- Border: none
- Radius: 8px
- Padding: 16px (header) / 0 16px (body) / 16px (footer `#2B2D31`)
- Shadow: `0 8px 16px rgba(0,0,0,0.24)`
- Use: Confirmation dialogs, server settings, invite flows

### Mention Badge (unread count)

- Role: unread mention/DM counter on server icons and channels
- Type: badge
- Kind: non-interactive. The source treats the unread count as a status label rather than an action, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#F23F43` (red). YAML `mention-badge.bg` is `#ED4245`. Both figures are kept.
- Text: `#FFFFFF`
- Radius: 9999px (pill)
- Padding: 0 4px (min 16px)
- Font: 12px / 700 / gg sans
- Use: Unread mention/DM counter on server icons and channels

### Nitro / Premium Badge

- Role: Nitro tags, boosted badges
- Type: badge
- Kind: non-interactive. The source treats Nitro/boosted tags as labels rather than actions, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#5865F2` or gradient toward `#EB459E`
- Text: `#FFFFFF`
- Radius: 4px
- Font: 12px / 600 / gg sans
- Use: Nitro tags, boosted badges

### Status Pill

- Role: presence indicator on avatars
- Kind: non-interactive. The source treats presence as an avatar indicator, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Online `#23A55A`, Idle `#F0B232`, DND `#F23F43`, Offline `#80848E`
- Radius: 9999px (dot, 10px diameter with `#2B2D31` ring)
- Use: Presence indicator on avatars

### Settings Sidebar Item

- Role: settings sidebar item
- Kind: interactive
- Type: tab
- Anatomy: label
- Background: transparent (inactive) / `#404249` (active)
- Inactive text: `#B5BAC1`
- Active text: `#FFFFFF`
- Hover (inactive): bg `#35373C` + text `#DBDEE1`
- Radius: 4px
- Padding: 6px 10px
- Font: 16px / 500 / gg sans
- Use: Settings sidebar item

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive settings row is the resting list item |
| hover | applicable | Pointer-web tab; `#35373C` / `#DBDEE1` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A settings row can be unavailable; visual treatment omitted |
| loading | not-applicable | A settings tab selects a pane; the row itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected vs inactive, not a request or validation failure on the row |
| success | not-applicable | Opening a settings pane is selection, not an action-outcome confirmation on the row |

Additional observed named states: active and inactive.

### Channel Item

- Role: channel list item
- Kind: interactive
- Type: tab
- Anatomy: label, often with a left server-rail indicator when the server is active
- Background: `rgba(78,80,88,0.6)` (active)
- Text/Icon: `#FFFFFF` (active)
- Left indicator: 8px white pill on the server rail for active server
- Radius: 4px
- Inactive: text `#949BA4`; hover `rgba(78,80,88,0.3)` + `#DBDEE1`
- Use: Channel list item

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive channel row is the resting list item |
| hover | applicable | Pointer-web tab; `rgba(78,80,88,0.3)` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A channel row can be unavailable; visual treatment omitted |
| loading | not-applicable | A channel tab selects a conversation; the row itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected vs inactive, not a request or validation failure on the row |
| success | not-applicable | Opening a channel is selection, not an action-outcome confirmation on the row |

Additional observed named states: active and inactive.

### Tooltip

- Role: hover hints on icons, server names on the rail
- Type: card
- Kind: omitted. The source records popover geometry and no interactive-kind evidence for the surface, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#111214`
- Text: `#F2F3F5`
- Radius: 8px
- Padding: 8px 12px
- Font: 14px / 600 / gg sans
- Shadow: `0 4px 8px rgba(0,0,0,0.24)`
- Arrow: 6px triangle matching background
- Use: Hover hints on icons, server names on the rail

### Toast

- Role: transient confirmations, connection status
- Type: toast
- Kind: non-interactive. The source Use is transient confirmations and connection status rather than an action, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#111214`
- Text: `#DBDEE1`
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0 8px 16px rgba(0,0,0,0.24)`
- Accent: 4px left border in status color (Blurple/Green/Red)
- Use: Transient confirmations, connection status; also Error (action failed) “Couldn't send. Try again.”

### Toggle

- Role: boolean settings (notifications, privacy switches)
- Kind: interactive
- Type: toggle
- Anatomy: pill track plus white thumb
- Track On: `#23A55A` (green) — Discord toggles go green when active, not Blurple. YAML `toggle.bg` is `#57F287`. Both figures are kept.
- Track Off: `#80848E`
- Thumb: `#FFFFFF` circle with subtle inner shadow; on-state shows a check glyph
- Radius: 9999px (pill track, ~40px wide × 24px tall)
- Use: Boolean settings (notifications, privacy switches)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Off/on boolean setting is the control |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A settings boolean can be locked; visual treatment omitted |
| loading | not-applicable | A boolean setting records on versus off; the toggle itself does not enter a loading state |
| error | not-applicable | On/off is the toggle meaning; a save failure would be a toast, not an error state of the thumb |
| success | not-applicable | On is the on state, not a success confirmation on the toggle |

Additional observed named states: on and off.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following whitespace reading is a derived editorial implementation inference from the verified surfaces; it is not Discord-authored or a separately published UI specification. Density where it counts: chat is information-dense (you want to see history); settings and onboarding are spacious and calm. Panels as physical layers: the three surface shades create depth without shadows — the eye reads `#1E1F22` < `#2B2D31` < `#313338` as receding-to-near. Marketing breathes loud: big type, big illustrations, big Blurple fields — the opposite of the focused product.

Spacing system: 4px base; common values 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px. Message vertical rhythm: 16px group gap, tight 2px within a grouped message run. Sidebar item spacing: 2px between channels, 8px between channel categories.

Grid and container (product): three-panel shell — Server rail (72px fixed) → Channel sidebar (240px) → Main content (flex) → optional Member list (240px). Server rail icons: 48px rounded-squircle, 8px gap. Content max readability width is not capped — chat fills available space, messages left-aligned full-bleed.

Grid and container (marketing): centered content, max-width ~1260px. Generous vertical section padding (80–120px). Alternating Blurple / white / off-white full-bleed bands.

Message anatomy from the source prompt guide (unique there; kept here because Layout/Components can receive it): 40px circular avatar; username in `#F2F3F5` 16px weight 600 next to timestamp `#949BA4` 12px; message body `#DBDEE1` 16px weight 400. Hover: row bg `rgba(78,80,88,0.3)` with action icons appearing top-right. §8 records avatars at 32px (message), 40px (member list), 80px+ (profile) — always circular. Both the 40px message-row figure from §9 and the 32px message figure from §8 are kept; they are not averaged.

| Name | Width | Key changes |
|---|---|---|
| Mobile | <768px | Single panel at a time; swipe between server rail, channels, chat, members |
| Tablet | 768–1024px | Two panels visible; member list collapses to a toggle |
| Desktop | >1024px | Full three/four-panel shell |

Touch targets: mobile rows and buttons minimum 44px tall; server icons 48px tap target with 8px spacing; message action buttons appear on long-press (mobile) / hover (desktop).

Collapsing: member list (240px) is the first to collapse on narrowing. Channel sidebar becomes a swipe-in drawer on mobile. Marketing layout reflows multi-column feature grids to single column under 768px. Modals become full-screen sheets on mobile.

Images: avatars 32px (message), 40px (member list), 80px+ (profile) — always circular. Server icons: 48px squircle, fall back to initials on `#5865F2` if no image. Inline media: max-width constrained, click to expand to lightbox. Illustrations (marketing): SVG, scale fluidly, Wumpus and friends anchor each section.

The 38px / 32px / 44px button heights, 72px server rail, 240px sidebars, 48px server icons, and ~1260px marketing container are source measurements, not a claim that every unlisted surface shares them.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Observed marketing strings (live discord.com via WebFetch 2026-06-06; dual-destination with provenance):

- "group chat that's all fun & games"
- "find your friends on discord"

The remaining voice examples and the copy-pattern table are a derived editorial reconstruction from the legacy body, not the same evidence class as those two WebFetch strings. The following voice characterization, the context/tone labels in the table, the reconstructed examples (“imagine a place...”, “hop in when you're free, no need to call”, empty/success/error glosses), and the serious-flow prohibition are a derived editorial implementation inference from the verified surfaces; they are not Discord-authored or a separately published UI specification. Discord writes like the friend who runs the group chat — casual, warm, lowercase-comfortable, in on the joke, but never confusing when it matters. The brand voice leans playful and leans on its mascots (Wumpus, Clyde, Nelly) for personality. The voice is situational: it gets out of the way in safety, billing, and destructive flows, where copy turns plain and direct.

| Context | Tone |
|---|---|
| Marketing headlines | Playful, lowercase-leaning, community-first ("imagine a place...") |
| CTAs | Short, inviting verbs ("Open Discord", "Join", "Add Friend", "Send") |
| Empty states | Friendly + Wumpus illustration + one suggested action ("It's quiet here... for now.") |
| Success messages | Light, brief, occasionally cheeky ("Friend request sent!") |
| Error messages | Plain and specific — playful tone drops ("Something went wrong. Try again.") |
| Safety / Trust & Safety | Direct, serious, no jokes — clarity over personality |
| Billing / Nitro | Clear value framing, gentle excitement, never pressure |
| Notifications | Concise, scannable, who-did-what-where |

Empty (no messages) in the source §14 table uses “This is the start of the #channel channel.” Action-failed toast uses “Couldn't send. Try again.” Those two lines are source §14 body, not additional WebFetch observations.

Forbidden in serious flows. No memes, no Wumpus, no exclamation-stacking in safety, account-security, payment-failure, or moderation copy. The playful voice is a feature of discovery and community surfaces, not of consequence surfaces.

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

- exact cubic-bezier easing curves (omitted as unattributed; `ease-exit` matches the legacy spec template)
- animation names and CSS transition properties until per-component computed capture of all five motion evidence kinds exists; a single named duration is not that gate
- `focus-visible` visual treatments (generic `Focus` on the text input is a different observation)
- a loadable gg sans, gg mono, or Ginto webfont for third-party reproduction
- in-app type metrics beyond the named product-UI conventions
- exact internal design-token names (source says they may differ from these representative pixels)
