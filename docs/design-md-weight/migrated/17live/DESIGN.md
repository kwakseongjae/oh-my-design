# 17LIVE Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

17LIVE is a live-streaming and interactive-entertainment platform at `https://17.live`. A “LIVER” is 17LIVE’s word for a livestreamer. This contract covers that named first-party product as recorded in the source reconstruction. Catalog homepage identity is `https://17.live`. The following secondary-surface and no-invented-route readings are a derived editorial implementation inference from the source reconstruction; they are not 17LIVE-authored or a separately published UI specification. Web/desktop is named in the source as a secondary surface that frames the same dark-stage system. Native-app routes beyond that mobile-first reconstruction are not given invented URLs here.

Exact values below are limited to the source’s stated reconstruction. Token extraction is `prose-derived`. Live computed-style inspection of 17.live was not completed this pass: the inspection browser session redirected unreliably, and WebFetch surfaced only the bilingual tagline. Catalog `primary_color` `#FF4F6E` is the creation-brief-provided value. Hexes other than that primary, and the dark-surface palette, are recorded in the source as well-grounded approximations pending live re-inspection. The following matching and authority readings are a derived editorial implementation inference from the source reconstruction; they are not 17LIVE-authored or a separately published UI specification. That brief-provided primary is recorded as matching 17LIVE’s known hot-pink identity. This reconstruction is not a 17LIVE-authored UI specification.

The next paragraph is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. The recorded interface defaults to dark surfaces (`#121212` / `#1C1C1E`), with a vivid coral-pink (`#FF4F6E`) on the logo, the “GO LIVE” button, the gift-send action, and the follow state. The emotional register in that reconstruction is playful, social, and immediate. Typography is system-stack and locale-aware — Latin sans leading, with Traditional Chinese (`PingFang TC`, `Microsoft JhengHei`), Japanese, and other CJK fallbacks — because the source names Japan and Taiwan as the two largest markets and operation across 150+ countries. Hierarchy is weight-driven and compact. The reconstruction treats the UI as chrome around video until a moment of interaction lights up pink.

Public facts recorded in the source from Wikipedia via WebFetch 2026-05-19 (metrics not independently audited): founded **June 2015 in Taiwan** by **Jeffrey Huang** (黃立成), a musician-entrepreneur; the name “17” is read “one-seven” and a homophone play in Mandarin, and became shorthand for going live; Joseph Phua (co-founder of Paktor) became CEO following a 2017 merger; Alex Lien became Global CEO in 2023; the company grew into an international entertainment platform headquartered across Japan, Taiwan, and beyond; by April 2022 the source records roughly 60 million registered users across 154 countries, around 46,000 contracted artists, and over 2.3 million monthly active users, ranking among the largest live-broadcasting platforms; publicly listed on the Singapore Exchange (SGX: VT1); revenue via virtual gifting, monthly fan-club subscriptions, pay-per-view ticketed events, and live-commerce (HandsUp / OrderPally). The following not-interface-token reading is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. Those facts are not interface tokens.

The following product-expression reading is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. The source’s narrative reads the design language as the surface expression of an interactive-intimacy thesis: the dark stage so the LIVER’s video stays the hero and late-night handheld viewing feels right; hot pink as the color of going live, following, sending a gift, and joining a fan club; a high motion budget (flying gifts, floating hearts, level-up bursts) as the visible feedback loop. Those metaphors do not derive tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Discover live streams on the explore/discover grid.
- Watch a LIVER broadcast, or start a broadcast with GO LIVE.
- Follow a LIVER or send a virtual gift during a stream.
<!-- design-md:claim-end -->

### Audience

The following audience-application reading is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. No invented demographic personas are promoted. Observable work follows the three primary tasks: people discovering live streams; people watching a LIVER or going live; people following a LIVER or sending virtual gifts. Source §13’s named fictional archetypes are not Audience and are not primary tasks.

### Distinctive traits

The following list restates source-stated reconstruction traits. Ranking those traits as what “distinguishes” 17LIVE from a generic dark-mode app, and the trait characterizations (playful/social/immediate register, chrome-around-video, pink as connection/transaction, friendly geometry, high motion on reactions / low on chrome), are a derived editorial implementation inference from the source reconstruction; they are not 17LIVE-authored or a separately published UI specification.

- Dark-stage default (`#121212` / `#1C1C1E`) with hot coral-pink `#FF4F6E` as brand + action color
- System-stack, locale-aware typography (Traditional Chinese / Japanese / CJK fallbacks); JP + TW named as the largest markets
- Playful, social, immediate register — gift animations, floating hearts, level-up bursts
- Compact, weight-driven hierarchy; UI recorded as chrome around the video stream
- Vertical-video-first layout (mobile-native, portrait stream + overlay chrome)
- Pink reserved for connection/transaction moments; dark neutral elsewhere
- Bright accent secondaries for gamified status (gold for ranking, gradient effects for premium gifts)
- Rounded, friendly geometry — pill follow buttons, soft cards, circular avatars
- High motion budget on reactions, low motion on navigation chrome

### Principles

These six items and the capture-bound application list are a derived editorial implementation inference from the source reconstruction; they are not 17LIVE-authored or a separately published UI specification.

1. **Dark stage, lit content.** The UI is a darkened theater so the LIVER's video and the pink actions carry the light. *UI implication:* Default surfaces to `#121212`/`#1C1C1E`; keep overlay chrome edge-anchored and minimal; never use a light streaming surface.
2. **Pink is connection.** The signature pink marks every act of social connection and transaction. *UI implication:* Apply `#FF4F6E` to GO LIVE, follow, gift, and primary CTA; keep neutral chrome neutral so pink always reads as "a moment of connection."
3. **Reactions are the product.** Gifts, hearts, and level-ups are the visible loop that makes a fan feel seen. *UI implication:* Spend the motion budget here — top-layer gift animations, floating reactions — while keeping navigation motion quiet. The reaction layer is the highest z-index.
4. **Money moves; be trustworthy.** Coins, top-ups, and gifting involve real money and a creator's livelihood. *UI implication:* Show exact balances and amounts; never use spend-pressure dark patterns; keep transaction flows clear, with safety/report flows calm and serious.
5. **Two-plus languages, all native.** Japanese and Traditional Chinese lead; copy is authored per market. *UI implication:* Use the locale-aware CJK font stack; route microcopy through locale bundles; never Simplified on TW surfaces.
6. **Friendly geometry.** Pills, circular avatars, soft cards signal a social, human platform. *UI implication:* Buttons 16–24px radius; avatars 50%; cards ~12px. Avoid sharp enterprise corners.

Capture-bound application (source Do’s; values are the recorded reconstruction):

- Default to the dark stage (`#121212`).
- Reserve pink (`#FF4F6E`) for connection/transaction — go live, send gift, follow, primary CTA.
- Use pill geometry (16–24px radius) on buttons and circular avatars.
- Keep overlay text legible with gradient scrims or shadows over video.
- Spend the motion budget on reactions (gifts, hearts, level-ups).
- Use gold (`#FFC83D`) for ranking/status and green (`#27C76F`) for LIVE/online.

### Avoid

The following Don’ts copy source prohibitions. Causal and judgement wording in those Don’ts (`it blows out late-night phone viewing and dilutes the video`; `Pink reads as "an action / a moment" only because the stage is dark-neutral`; `they fight the playful register`; `that's the live energy`) is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification.

- Do not use a light background for the streaming surface.
- Do not paint neutral chrome pink.
- Do not use sharp enterprise corners.
- Do not let chrome cover the LIVER's face — anchor it to edges, keep the center clear.
- Do not animate navigation chrome with theatrics; tab/route motion stays quick and quiet.
- Do not conflate the status colors with the pink action color.
- Do not use Simplified Chinese on TW surfaces.

The following catalog-favicon boundary is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. The catalog Google favicon identity-only boundary is a catalog/identity evidence class, not a source Don’t: the Google s2 URL is not a first-party mark file. It is not a 17LIVE-authored Avoid rule.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Values other than brief-provided primary `#FF4F6E` are source-stated reconstructions. The source labels hexes other than the primary, and the dark-surface palette, as well-grounded approximations pending live re-inspection. They are not live computed-style harvests.

Primary / action:

- **17 Pink** (`#FF4F6E`): YAML `primary`. Catalog `primary_color`. Signature brand + action color in the reconstruction — logo, “GO LIVE”, gift-send, follow state, active tab, primary CTAs. The “signature brand + action” role reading is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification.
- **Pink Pressed** (`#E8455F`): YAML `primary-hover`. Darker press/hover state. YAML Primary button `states: pressed #E8455F`. Both the §2 press/hover wording and the YAML pressed state are kept.
- **Pink Tint** (`#FF4F6E1A`): Pink at ~10% — subtle highlight backgrounds, selected-row wash on dark. Not a YAML `tokens.colors` key.
- **On-primary** (`#FFFFFF`): YAML `on-primary`. Text on pink fills.

Surface (dark stage):

- **Stage Black** (`#121212`): YAML `canvas`. Primary app background.
- **Surface 1** (`#1C1C1E`): YAML `surface-1`. Cards, sheets, raised panels.
- **Surface 2** (`#2C2C2E`): YAML `surface-2`. Higher-elevation panels, input fields, chips on dark.
- **Overlay Scrim** (`rgba(0,0,0,0.5)`): Gradient scrim over video. The source records this so overlay chrome stays legible; that purpose reading is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. Also the YAML sheet-shadow pairing.

Text (on dark):

- **Text Primary** (`#FFFFFF`): YAML `foreground`. Headings, usernames, primary labels.
- **Text Secondary** (`rgba(255,255,255,0.7)`): Secondary labels, captions.
- **Text Tertiary** (`rgba(255,255,255,0.45)`): Metadata, timestamps, viewer counts; also input placeholder.
- **Text Disabled** (`rgba(255,255,255,0.3)`): Disabled labels. Also YAML Follow `following` foreground.

The following unmerged-role readings are a derived editorial implementation inference from the source reconstruction; they are not 17LIVE-authored or a separately published UI specification. Accent / gamified status are not merged into 17 Pink; the two-stop Gift button and the three-stop premium animation are not averaged; Success / Live is not 17 Pink.

Accent / gamified status:

- **Rank Gold** (`#FFC83D`): YAML `rank-gold`. Leaderboard #1, top-fan crowns, premium status.
- **VIP Purple** (`#8B5CF6`): YAML `vip-purple`. Premium fan-club / VIP tier accents and gradient effects.
- **Gift button gradient** (`#FF4F6E` → `#FF2D8E`): YAML Gift button fill. Two stops.
- **Premium gift animation gradient** (`#FF4F6E` → `#FF2D8E` → `#FFC83D`): §2 three-stop coral→magenta→gold for premium gift animations. Not averaged with the two-stop Gift button.

Semantic:

- **Success / Live** (`#27C76F`): YAML `success`. “LIVE” indicator dot, success states, online presence. Not 17 Pink.
- **Warning** (`#F5A623`): YAML `warning`. Soft warnings, low-balance prompts.
- **Error / Danger** (`#FF453A`): YAML `error`. Errors, destructive actions, report flows.

Borders & dividers:

- **Divider** (`rgba(255,255,255,0.08)`): Hairline separators on dark surfaces.
- **Border Subtle** (`rgba(255,255,255,0.15)`): Outlined buttons/chips on dark. Also one recorded default-input border option.

### Spacing

YAML working cluster: 4, 8, 12, 16, 24 (xs / sm / md / base / lg). Source body: 4/8px-based spacing scale, tight on overlay chrome. Safe-area-aware padding for notches and home indicators on the stream overlay. The following unlisted-route boundary is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. These are source-stated reconstruction values, not a claim that every unlisted route shares them.

### Shape

- YAML `rounded.sm`: 4 — LIVE badge
- YAML `rounded.md`: 12 — cards, default input
- YAML `rounded.lg`: 24 — primary/secondary pills, chat input
- YAML `rounded.full`: 9999 (unitless in YAML; not written here as a `px` token). Body circle use is 50%, not that YAML field
- Follow button: 16px
- Gift button: 20px
- Avatars / rank badge option: 50%

The following local-geometry reading is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. 4px LIVE-badge (`rounded.sm`), 12px cards, 16px follow / 20px gift / 16px–24px button pills, and 50% avatars are local geometry in this reconstruction, not a universal radius for every unlisted surface. YAML `rounded.full` 9999 is kept beside the 50% circle use; they are not merged.

### Elevation

The following elevation reading is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. On a dark UI, elevation is communicated by surface lightness steps (`#121212` → `#1C1C1E` → `#2C2C2E`) and by scrims, more than by shadow.

- **Bottom sheet / modal**: `#1C1C1E` surface rising over a `rgba(0,0,0,0.5)` scrim; YAML `tokens.shadow.sheet` is “soft top shadow over rgba(0,0,0,0.5) scrim”. No numeric shadow token is promoted.
- **Stream overlay chrome**: anchored to a bottom/top gradient scrim so it floats legibly over video
- **Gift animations**: render in a top layer above all chrome
- **Glow accents**: pink/gradient glows on live-avatar rings and premium gifts. No separate glow hex is recorded.

Z-index (stream view), source-stated order:

1. Video (base)
2. Gradient scrims
3. Chat + overlay chrome
4. Gift/reaction animation layer (highest)

### Motion

The following bifurcated-motion and spring-stance readings are a derived editorial implementation inference from the source reconstruction; they are not 17LIVE-authored or a separately published UI specification. 17LIVE is recorded with a bifurcated motion philosophy: lavish and celebratory on reactions, quick and quiet on navigation. Overshoot is welcome only in the reaction layer. A sent gift should pop, scale-bounce, and celebrate; a tab switch should not. Navigation, sheets, and form chrome use the standard non-bouncy easings. Spring lives where the social/emotional payoff lives (gifts, hearts, follows, level-ups); everything structural stays calm.

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, reduce-motion fallback |
| `motion-fast` | 150ms | Hover/press, tab switch, chrome transitions |
| `motion-standard` | 250ms | Sheets, modals, panel slides |
| `motion-slow` | 400ms | Stream-switch transitions |
| `motion-reaction` | 600–1500ms | Gift animations, floating hearts, level-up bursts |

Signature motions (source-stated). Characterizations such as “not decoration,” “continuous, ambient live energy,” and “a small celebratory beat,” and reading `ease-spring` as the source-stated token name and use rather than a computed curve, are a derived editorial implementation inference from the source reconstruction; they are not 17LIVE-authored or a separately published UI specification.

1. **Gift send.** On send, a gift graphic enters with `ease-spring` over `motion-reaction`, scales up, drifts, and fades — playing in the top z-index layer above all chrome. Premium gifts trigger full-screen gradient effects. `ease-spring` here is the source-stated token name and use, not a computed curve.
2. **Floating hearts.** Tapping the like control spawns hearts that float up and fade over `motion-reaction` with slight random drift — continuous, ambient live energy.
3. **Follow toggle.** Flips to "Following" with a brief pink pulse over `motion-fast` — a small celebratory beat, not a full spring.
4. **Stream switch (swipe).** On mobile, swiping between streams transitions over `motion-slow / ease-standard` — smooth, not bouncy, to keep orientation. The smoothness/orientation judgement is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification.

Source-stated easing token names and uses (uncomputed; cubic-bezier curves omitted). Characterizations such as “quiet and platform-native” and “Reaction layer ONLY” in this table are a derived editorial implementation inference from the source reconstruction; they are not 17LIVE-authored or a separately published UI specification.

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | omitted (unattributed cubic-bezier; matches the legacy spec template) | Navigation, sheets, chrome — quiet and platform-native |
| `ease-enter` | omitted (unattributed cubic-bezier; matches the legacy spec template) | Things appearing |
| `ease-spring` | omitted (unattributed cubic-bezier; matches the legacy spec template) | Reaction layer ONLY — gift pops, heart bursts, level-up |

**Reduce motion.** Under `prefers-reduced-motion: reduce`, gift/heart/level-up animations collapse to a static confirmation (the gift still registers in chat, but without the bounce); navigation motion goes instant. The following reduced-motion application reading is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. The reaction *event* is never lost — only its theatrics.

Exact cubic-bezier curves are unattributed — all three match the legacy spec template — and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the source reconstruction; they are not 17LIVE-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | Live computed-style inspection of 17.live was not completed this pass. Token extraction is `prose-derived`. WebFetch (2026-05-19) surfaced only the tagline. |
| Inferred locale stacks | Source labels the stacks “inferred” from JP/TW live-streaming conventions. They are not a sourced internal 17LIVE specification. |
| Declared-only | Default / Traditional Chinese / Japanese / Simplified Chinese system stacks below. |

### Family

- **Default:** `-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Traditional Chinese:** `"PingFang TC", "Microsoft JhengHei", sans-serif`
- **Japanese:** `"Hiragino Kaku Gothic Pro", "Meiryo", sans-serif`
- **Simplified Chinese:** `"PingFang SC", "Microsoft YaHei", sans-serif`

No custom display typeface is recorded. The following fallback-display boundary is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. Do not present PingFang, Hiragino, Segoe UI, Roboto, or a system fallback as a 17LIVE-exclusive brand face. An inferred stack keeps its metadata; it is not live-verified product-use.

The following type-character reading is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. Compact, mobile-native sizing — the UI is overlay chrome on video, so type stays small and legible against the scrim. Weight + the pink accent drive hierarchy; the reconstruction rarely uses huge display type because the video is the content. Numbers are gamified — viewer counts, gift totals, ranks render bold, often with gold for top status. Text over video always sits on a gradient scrim or has a subtle shadow for legibility.

### Type roles

YAML records exact sizes. The body table records inferred mobile-first ranges. Both writings are kept. They are not averaged. No YAML `lineHeight` is recorded; none is invented.

| Role | Font | Size | Weight | Line height | Use |
|---|---|---|---:|---|---|
| Micro / viewer count | locale system stack | YAML 11px; body `11px` | 700 | omitted (unrecorded) | Viewer count, LIVE badge, gamified numbers |
| Caption / chat meta | locale system stack | YAML 12px; body `12px` | 400 | omitted (unrecorded) | Chat meta, captions, metadata |
| Chat message / body | locale system stack | YAML 14px; body `14px` | 400 | omitted (unrecorded) | Chat message, body text |
| LIVER name / list title | locale system stack | YAML 16px; body `15–16px`; §9 prompt `15px` / 700 white | 700 | omitted (unrecorded) | LIVER name, list title, key labels. 16px, the 15–16px range, and 15px are kept as separate recorded figures |
| Section heading / tab labels | locale system stack | YAML 20px / 600; body `18–20px` | 600 | omitted (unrecorded) | Section heading, tab labels |
| Hero / spotlight | locale system stack | YAML 28px / 700; body `22–28px` | 700 | omitted (unrecorded) | Hero / spotlight headline |

Weights recorded: **700** LIVER names, key labels, CTAs, ranking numbers, gift values; **600** tab labels, section headers, active states; **400** body, chat messages, captions, metadata.

### Assets

The following identity-not-captured and imagery-replacement readings are a derived editorial implementation inference from the source reconstruction; they are not 17LIVE-authored or a separately published UI specification. Catalog logo metadata is a Google s2 identity record in the source ledger; it is not a portable first-party mark here. Product photography and live thumbnails are first-party stream content; do not replace them with invented brand-color decoration.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted. Characterizations in that table such as encouraging empty copy, blameless errors, and “the animation IS the confirmation” are a derived editorial implementation inference from the source reconstruction; they are not 17LIVE-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| Empty (no live streams in category) | One `rgba(255,255,255,0.7)` line + a CTA to explore Trending. No illustration required; keep it encouraging. |
| Empty (no messages / followers) | Friendly one-liner + suggested action (discover LIVERs). |
| Loading (discover grid) | Dark skeleton tiles (`#1C1C1E`) at 12px radius matching final thumbnails; subtle shimmer. No spinner takeover. |
| Loading (stream connecting) | Centered spinner over a dark scrim with `Connecting…`; preserves the dark stage. |
| Loading (inline — send gift) | Gift button holds width; brief in-button spinner; on success, trigger the gift animation. |
| Error (stream failed to load) | Blameless one-liner over dark scrim + retry in `#FF4F6E`. Never a raw error code alone. |
| Error (insufficient coins) | Clear, non-shaming prompt with exact balance + a top-up action; never pressure language. |
| Success (follow) | Toggle flips to "Following", brief pink confirmation; optional toast `You're now following <LIVER>!`. |
| Success (gift sent) | Top-layer gift animation plays over the stream; chat shows the gift event. The animation IS the confirmation. |
| Skeleton | `#1C1C1E` blocks at exact card dimensions; numeric placeholders render as `—`, never `0`. |
| Disabled (button) | Faded fill + `rgba(255,255,255,0.3)` text; geometry preserved. |

The following reconstruction-pixel reading is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. Radii, paddings, and heights are representative reconstruction pixels; exact internal design-token names may differ. Live computed-style inspection was not completed.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` capture is not `focus-visible` treatment evidence; named focus colors stay as additional observed states, and the `focus-visible` visual treatment remains omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. Where exact selector/label/request/outcome is unresolved, those three applicability fields are omitted at this boundary rather than closed. This is not a complete state-coverage claim.

Stream Card and Profile / List Card record default geometry and no state or interactive-kind evidence, so kind and a state-applicability map are omitted. LIVE Badge, Rank Badge, and Avatar likewise record type, use, and geometry only; kind and a state-applicability map are omitted.

### Primary (GO LIVE / Action)

- Role: "GO LIVE", primary CTAs, sign-up
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#FF4F6E`
- Text: `#FFFFFF`
- Border: none
- Radius: 24px (pill)
- Padding: 12px 24px
- Font: 16px / 700
- Pressed: background `#E8455F`
- Use: "GO LIVE", primary CTAs, sign-up. As the center bottom-tab action, elevate it slightly above the bar.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named primary action |
| hover | applicable | Pointer-web button; §2 also records `#E8455F` as press/hover |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-button disabled: faded fill + `rgba(255,255,255,0.3)` text |

Loading, error, and success applicability are omitted. Source names this control for GO LIVE, primary CTAs, and sign-up together; exact selector/label/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed as a destination or a submitting action.

Additional observed named state: Pressed `#E8455F`.

### Follow

- Role: Follow / Following toggle on LIVER profiles and stream overlays
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#FF4F6E` (not-following) → transparent + `1px solid rgba(255,255,255,0.3)` (following)
- Text: `#FFFFFF` → `rgba(255,255,255,0.7)`
- Radius: 16px (pill)
- Padding: 6px 16px
- Font: 14px / 600
- Use: Follow / Following toggle

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named not-following action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-button disabled: faded fill + `rgba(255,255,255,0.3)` text |
| success | applicable | Source §14 Success (follow): toggle flips to "Following", brief pink confirmation; optional toast `You're now following <LIVER>!` |

Loading and error applicability are omitted. Source does not record an exact follow-request waiting or follow-failure outcome for this control, so those two fields stay omitted at this boundary rather than closed.

Additional observed named state: following (transparent + 1px `rgba(255,255,255,0.3)`, text `rgba(255,255,255,0.7)`), with a brief pink pulse over `motion-fast`.

### Secondary (Outlined on dark)

- Role: Secondary actions, "Maybe later"
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#FFFFFF`
- Border: `1px solid rgba(255,255,255,0.3)`
- Radius: 24px
- Padding: 12px 24px
- Font: 16px / 600
- Use: Secondary actions, "Maybe later"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named secondary / dismissive action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-button disabled: faded fill + `rgba(255,255,255,0.3)` text |

Loading, error, and success applicability are omitted. Source names this control for Secondary actions and "Maybe later" together; exact selector/label/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed as a dismiss-only control.

### Gift (special)

- Role: Send-gift action
- Kind: interactive
- Type: button
- Anatomy: label plus gift icon in the §9 prompt
- Background: gift gradient (`#FF4F6E` → `#FF2D8E`)
- Text: `#FFFFFF`
- Radius: 20px
- Use: Send-gift action — recorded as the highest-energy transaction button. The “highest-energy” ranking is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. On send, trigger a top-layer gift animation.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named send-gift action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-button disabled: faded fill + `rgba(255,255,255,0.3)` text |
| loading | applicable | Documented: gift button holds width; brief in-button spinner |
| error | applicable | Source §14 Error (insufficient coins): clear, non-shaming prompt with exact balance + a top-up action |
| success | applicable | Source §14 Success (gift sent): top-layer gift animation plays over the stream; chat shows the gift event |

### Default Input (on dark)

- Role: Search, login, profile editing
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#2C2C2E`
- Text: `#FFFFFF`
- Border: none (or `1px solid rgba(255,255,255,0.15)`). Both recordings are kept.
- Radius: 12px
- Padding: 12px 16px
- Placeholder: `rgba(255,255,255,0.45)`
- Focus: `1px solid #FF4F6E`
- Use: Search, login, profile editing

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named search/login/profile field |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A field can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control for search, login, and profile editing together; exact selector/label/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed as query-only or as a validating form field.

Additional observed named state: generic `Focus` — border `1px solid #FF4F6E`. This is not `focus-visible` evidence.

### Chat Input

- Role: Live-chat composer overlay on stream
- Kind: interactive
- Type: input
- Anatomy: value field with trailing send icon
- Background: `#2C2C2E` or translucent over video. Both recordings are kept.
- Radius: 24px (pill)
- Trailing: pink send icon (`#FF4F6E`)
- Placeholder: `rgba(255,255,255,0.45)` (from the §9 composer prompt)
- Use: Live-chat composer overlay on stream, over the video bottom scrim

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named live-chat composer |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | Chat entry can be unavailable; visual treatment omitted |
| loading | not-applicable | Sending is the trailing send icon / chat event, not a loading state of the composer |
| success | not-applicable | A sent message appearing in chat is not a success confirmation on the composer |

Error applicability is omitted. Source does not record an exact composer-field failure outcome, so that field stays omitted at this boundary rather than closed.

### Stream Card (discover grid)

- Role: Discover/explore grid of live streams
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: image/video thumbnail with `rgba(0,0,0,0.5)` bottom gradient
- Radius: 12px
- Overlay: LIVE badge top-left, viewer-count chip with eye icon, LIVER avatar (28px circle, pink ring) + name (15px/700 white) bottom-left
- Use: Discover/explore grid of live streams

### Profile / List Card

- Role: LIVER lists, ranking rows, fan-club cards
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#1C1C1E`
- Radius: 12px
- Padding: 12px
- Use: LIVER lists, ranking rows, fan-club cards

### LIVE Badge

- Role: Live-now indicator on thumbnails
- Type: badge
- Kind: omitted. The source records type, use, and geometry only and no interactive-kind evidence, so no `Kind` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FF4F6E` or `#27C76F` dot + "LIVE". Both recordings are kept.
- Text: `#FFFFFF`
- Radius: 4px
- Padding: 2px 6px
- Font: 11px / 700
- Use: Live-now indicator on thumbnails

### Rank Badge

- Role: Leaderboard / top-fan status
- Type: badge
- Kind: omitted. The source records type, use, and geometry only and no interactive-kind evidence, so no `Kind` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FFC83D` (gold) for #1
- Text: `#121212`
- Radius: `50%` or `4px`. Both recordings are kept.
- Use: Leaderboard / top-fan status

### Avatar

- Role: LIVER and viewer avatars
- Type: avatar
- Kind: omitted. The source records type, use, and geometry only and no interactive-kind evidence, so no `Kind` confirmation and no §4.4 state-applicability map are declared.
- Radius: `50%`
- Optional pink/gradient ring for live or VIP status
- Use: LIVER and viewer avatars. Stream-card overlay also records a 28px circle with pink ring.

### Tab Bar

- Role: Bottom tab bar (mobile-native): Home / Discover / GO LIVE (center, pink) / Messages / Profile
- Kind: interactive
- Type: tab
- Anatomy: tab labels; center GO LIVE is the Primary button elevated in the bar, not a tab fill
- Active tab: `#FF4F6E`; inactive: `rgba(255,255,255,0.45)`
- Use: Bottom tab bar; center GO LIVE elevated pink

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive tab is the resting item |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab selects Home / Discover / Messages / Profile; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected vs inactive, not a request or validation failure on the tab |
| success | not-applicable | Opening a tab is selection, not an action-outcome confirmation on the tab |

Additional observed named states: active `#FF4F6E` and inactive `rgba(255,255,255,0.45)`.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following density reading is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. 17LIVE is medium density with high motion. Overlay chrome is minimal and edge-anchored so the video breathes; lists and discover grids pack efficiently; the "noise" comes from animated reactions, not from static density.

The following structure, secondary-surface, analogical-layout, and thumb-zone readings are a derived editorial implementation inference from the source reconstruction; they are not 17LIVE-authored or a separately published UI specification. Structure: mobile / vertical-video first — the canonical surface is a portrait phone screen with a full-bleed stream and overlay chrome. Discover = grid/feed of stream thumbnails; Stream view = full-bleed video + floating chat + gift rail + bottom action bar. Web/desktop is a secondary surface that frames the same dark-stage system.

Spacing: 4/8px-based scale, tight on overlay chrome. Safe-area-aware padding for notches and home indicators on the stream overlay.

| Width | Behavior |
|---|---|
| Mobile `<768px` | Canonical surface — full-bleed vertical video, bottom tab bar, overlay chat/gift chrome |
| Tablet `768–1024px` | Stream centers with side panels (chat / ranking) appearing |
| Desktop `>1024px` | Stream center stage with persistent chat rail + gift panel + recommendations sidebar (Twitch-like three-zone layout) |

Touch & mobile: large tap targets (44px+); center GO LIVE elevated for thumb reach; gift rail and chat composer bottom-anchored within thumb zone; swipe gestures to switch streams (feed-like) on mobile; safe-area insets respected on overlay chrome.

Media: video full-bleed `object-fit: cover` on mobile, contained on desktop center stage. Thumbnails lazy-load; LIVE thumbnails may show a short motion preview on hover (desktop).

The following unlisted-surface boundary is a derived editorial implementation inference from the source reconstruction; it is not 17LIVE-authored or a separately published UI specification. The 24px / 16px / 20px button radii, 28px stream-card avatar, 44px+ tap targets, and 768px / 1024px breakpoints are source measurements, not a claim that every unlisted surface shares them.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Observed (17.live tagline via WebFetch 2026-05-19; dual-destination with provenance):

- `Live Streaming 直播互動娛樂平台`

The remaining voice examples, the copy-pattern table, the voice characterization, the forbidden-phrase list, and the TW-native copy rule are a derived editorial implementation inference from the source reconstruction; they are not 17LIVE-authored or a separately published UI specification, and they are not the same evidence class as that WebFetch string. 17LIVE speaks like an upbeat host hyping the room — warm, encouraging, and celebratory, the voice of a platform whose whole premise is connection between a LIVER and their fans. The register is playful and intimate, leaning on second-person address and the platform's own vocabulary ("LIVER" for streamer, "GO LIVE", fan-club language). It is genuinely multilingual — Japanese and Traditional Chinese are the largest first-class voices, authored per market across 150+ countries, never machine-translated from one master. Copy celebrates moments without being saccharine, and keeps transactional flows (top-ups, gifting) clear and trustworthy because real money moves through them.

| Context | Tone |
|---|---|
| Onboarding / hero | Inviting, energetic. `GO LIVE`, `Join the party`. Second-person, action-forward. |
| CTAs | Imperative + warm. `Go Live`, `Send Gift`, `Follow`, `Join Fan Club`. |
| Social events (follow / gift) | Celebratory micro-copy. `You're now following <LIVER>!`, `Gift sent — they felt that!`. Genuine, not corporate. |
| Live chat / reactions | Casual, emoji-friendly (user territory), real-time. |
| Transactions (coins / top-up) | Clear and trustworthy — exact amounts, no dark patterns, balance always visible. |
| Empty states | Encouraging next step. `No one's live in this category right now — explore Trending.` |
| Errors | Blameless, friendly, actionable. Never blame the fan or the LIVER. |
| Safety / report | Calm, serious, supportive — the one place the playful tone yields to clarity. |
| Legal / policy | Formal and plain. |

Illustrative/conventional (source markers; not live-DOM-verified this pass): `GO LIVE`; `Follow` / `Following`.

Illustrative, not verified as live 17LIVE copy: `You're now following this LIVER!`; `No one's live here right now — check out Trending.`

The §14 empty treatment uses one `rgba(255,255,255,0.7)` line + a CTA to explore Trending. The §14 optional follow toast uses `You're now following <LIVER>!`. The §10 empty sample uses `No one's live here right now — check out Trending.` Those strings are kept; they are not averaged.

Forbidden phrases (source list; the list itself sits under the Content B2a above): manipulative spend-pressure on gifting/top-up (`Hurry, gift now!`), shaming a user for not spending, `Oops! Something went wrong` without a reason, cold corporate jargon in social moments, emoji in safety/report flows (keep those serious), Simplified-Chinese characters on TW-Traditional surfaces, fake hype in error messages.

Use Traditional Chinese on TW surfaces and native CJK per market; never Simplified on TW.

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

- live computed-style production hexes beyond brief-provided primary `#FF4F6E` (dark-surface palette and other hexes remain source-stated approximations pending live re-inspection)
- exact cubic-bezier easing curves (omitted as unattributed; all three match the legacy spec template)
- animation names and CSS transition properties until per-component computed capture of all five motion evidence kinds exists; a single named duration is not that gate
- `focus-visible` visual treatments (generic `Focus` on the default input is a different observation)
- live computed family (live computed-style inspection of 17.live was not completed this pass)
- YAML `lineHeight` (unrecorded; not invented)
- numeric sheet-shadow values (YAML records only “soft top shadow over rgba(0,0,0,0.5) scrim”)
