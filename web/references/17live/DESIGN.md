---
id: 17live
name: 17LIVE
country: TW
category: consumer-tech
homepage: "https://17.live"
primary_color: "#FF4F6E"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=17.live&sz=128"
verified: "2026-05-19"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "primary = 17 Pink #FF4F6E; dark-stage palette and non-primary hexes are grounded approximations pending live re-inspection (see §2 note)"
  colors:
    primary: "#FF4F6E"
    primary-hover: "#E8455F"
    canvas: "#121212"
    surface-1: "#1C1C1E"
    surface-2: "#2C2C2E"
    foreground: "#FFFFFF"
    on-primary: "#FFFFFF"
    rank-gold: "#FFC83D"
    vip-purple: "#8B5CF6"
    success: "#27C76F"
    warning: "#F5A623"
    error: "#FF453A"
  typography:
    family: { default: "-apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif", tc: "\"PingFang TC\", \"Microsoft JhengHei\", sans-serif", jp: "\"Hiragino Kaku Gothic Pro\", \"Meiryo\", sans-serif", sc: "\"PingFang SC\", \"Microsoft YaHei\", sans-serif" }
    micro:    { size: 11, weight: 700, use: "Viewer count, LIVE badge, gamified numbers" }
    caption:  { size: 12, weight: 400, use: "Chat meta, captions, metadata" }
    body:     { size: 14, weight: 400, use: "Chat message, body text" }
    liver-name: { size: 16, weight: 700, use: "LIVER name, list title, key labels" }
    section:  { size: 20, weight: 600, use: "Section heading, tab labels" }
    hero:     { size: 28, weight: 700, use: "Hero / spotlight headline" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24 }
  rounded: { sm: 4, md: 12, lg: 24, full: 9999 }
  shadow:
    sheet: "soft top shadow over rgba(0,0,0,0.5) scrim"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#FF4F6E", fg: "#FFFFFF", radius: "24px", padding: "12px 24px", font: "16px / 700", states: "pressed #E8455F", use: "GO LIVE, primary CTAs, sign-up" }
    button-follow: { type: button, bg: "#FF4F6E", fg: "#FFFFFF", radius: "16px", padding: "6px 16px", font: "14px / 600", states: "following → transparent + 1px rgba(255,255,255,0.3), fg rgba(255,255,255,0.7)", use: "Follow / Following toggle" }
    button-secondary: { type: button, bg: "transparent", fg: "#FFFFFF", border: "1px solid rgba(255,255,255,0.3)", radius: "24px", padding: "12px 24px", font: "16px / 600", use: "Secondary actions, Maybe later" }
    button-gift: { type: button, bg: "#FF4F6E → #FF2D8E gradient", fg: "#FFFFFF", radius: "20px", use: "Send-gift — highest-energy transaction" }
    input: { type: input, bg: "#2C2C2E", fg: "#FFFFFF", radius: "12px", padding: "12px 16px", focus: "1px solid #FF4F6E", use: "Search, login, profile; placeholder rgba(255,255,255,0.45)" }
    chat-input: { type: input, bg: "#2C2C2E", radius: "24px", use: "Live-chat composer overlay, trailing pink #FF4F6E send icon" }
    stream-card: { type: card, radius: "12px", use: "Discover grid — thumbnail + rgba(0,0,0,0.5) bottom gradient, LIVE badge + viewer count + LIVER name" }
    card: { type: card, bg: "#1C1C1E", radius: "12px", padding: "12px", use: "LIVER lists, ranking rows, fan-club cards" }
    badge-live: { type: badge, bg: "#FF4F6E", fg: "#FFFFFF", radius: "4px", padding: "2px 6px", font: "11px / 700", use: "Live-now indicator (or #27C76F dot)" }
    badge-rank: { type: badge, bg: "#FFC83D", fg: "#121212", radius: "50%", use: "Leaderboard / top-fan #1 status" }
    avatar: { type: avatar, radius: "50%", use: "LIVER and viewer avatars, optional pink/gradient ring for live or VIP" }
    tab-bar: { type: tab, use: "Bottom tab bar; center GO LIVE elevated pink", active: "#FF4F6E label", states: "inactive rgba(255,255,255,0.45)" }
omd: "0.1"
---

# Design System Inspiration of 17LIVE

## 1. Visual Theme & Atmosphere

17LIVE is one of the world's largest live-streaming and interactive-entertainment platforms — a place where a "LIVER" (17LIVE's word for a livestreamer) broadcasts to fans who react in real time with virtual gifts, fan-club subscriptions, and chat. Its design system is built for the energy and intimacy of live performance, and the atmosphere is **dark-stage with a hot-pink spotlight**. The interface defaults to dark surfaces (`#121212` / `#1C1C1E`), the way a streaming or video app does — because the content is video, video looks best framed in dark, and a dark UI keeps a phone-screen glowing in a bedroom at midnight from blowing out the room. Against that dark stage, a vivid coral-pink (`#FF4F6E`) is the brand's signature: it lights up the logo, the "GO LIVE" button, the gift-send action, the follow state — every moment of connection and transaction.

The emotional register is **playful, social, and immediate**. Where a utility app is calm, 17LIVE is animated: gift animations fly across the stream, hearts float up the screen, level-up effects burst. The pink is warm and youthful, signaling fun and human connection rather than cold tech. Typography is system-stack and locale-aware — Latin sans leading, with Traditional Chinese (`PingFang TC`, `Microsoft JhengHei`), Japanese, and other CJK fallbacks, because 17LIVE's two largest markets are Japan and Taiwan and it operates across 150+ countries. Hierarchy is weight-driven and compact; the UI is chrome around video, so it stays out of the way until a moment of interaction lights up pink.

What distinguishes 17LIVE from a generic dark-mode app is that **its design is event-driven and celebratory**. The system is not a static catalog; it is a live floor where reactions, gifts, and rankings animate constantly. Pink is the color of every social action — go live, send gift, follow, join fan club — and the dark stage exists to make both the video and the pink pop.

**Key Characteristics:**
- **Dark-stage default** (`#121212` / `#1C1C1E`) — video-first UI, content framed in dark
- **Hot coral-pink (`#FF4F6E`)** as the brand + action color — logo, GO LIVE, gift, follow
- System-stack, locale-aware typography (TC / JP / CJK fallbacks) — JP + TW are the largest markets
- Playful, social, immediate register — gift animations, floating hearts, level-up bursts
- Compact, weight-driven hierarchy — UI is chrome around the video stream
- Vertical-video-first layout (mobile-native, portrait stream + overlay chrome)
- Pink reserved for connection/transaction moments; dark neutral everywhere else
- Bright accent secondaries for gamified status (gold for ranking, gradient effects for premium gifts)
- Rounded, friendly geometry — pill follow buttons, soft cards, circular avatars
- High motion budget on reactions, low motion on navigation chrome

## 2. Color Palette & Roles

> **Note:** Live computed-style verification was not completed this pass (the inspection browser session redirected unreliably; WebFetch surfaced only the tagline). Values below combine the brief-provided primary, 17LIVE's known dark-mode + hot-pink streaming identity, and conventional live-streaming-app roles. Hexes other than the primary are well-grounded approximations pending live re-inspection.

### Primary (Brand / Action)
- **17 Pink** (`#FF4F6E`): The signature brand + action color. Logo, "GO LIVE" button, gift-send, follow state, active tab, primary CTAs.
- **Pink Pressed** (`#E8455F`): Darker press/hover state.
- **Pink Tint** (`#FF4F6E1A`): Pink at ~10% — subtle highlight backgrounds, selected-row wash on dark.

### Surface (Dark Stage)
- **Stage Black** (`#121212`): Primary app background — the dark stage.
- **Surface 1** (`#1C1C1E`): Cards, sheets, raised panels.
- **Surface 2** (`#2C2C2E`): Higher-elevation panels, input fields, chips on dark.
- **Overlay Scrim** (`rgba(0,0,0,0.5)`): Gradient scrim over video so overlay chrome stays legible.

### Text (on dark)
- **Text Primary** (`#FFFFFF`): Headings, usernames, primary labels.
- **Text Secondary** (`rgba(255,255,255,0.7)`): Secondary labels, captions.
- **Text Tertiary** (`rgba(255,255,255,0.45)`): Metadata, timestamps, viewer counts.
- **Text Disabled** (`rgba(255,255,255,0.3)`): Disabled labels.

### Accent / Gamified Status
- **Rank Gold** (`#FFC83D`): Leaderboard #1, top-fan crowns, premium status — the status color.
- **VIP Purple** (`#8B5CF6`): Premium fan-club / VIP tier accents and gradient effects.
- **Gift Gradient**: Coral→magenta→gold gradients for premium gift animations (`#FF4F6E` → `#FF2D8E` → `#FFC83D`).

### Semantic
- **Success / Live** (`#27C76F`): "LIVE" indicator dot, success states, online presence.
- **Warning** (`#F5A623`): Soft warnings, low-balance prompts.
- **Error / Danger** (`#FF453A`): Errors, destructive actions, report flows.

### Borders & Dividers
- **Divider** (`rgba(255,255,255,0.08)`): Hairline separators on dark surfaces.
- **Border Subtle** (`rgba(255,255,255,0.15)`): Outlined buttons/chips on dark.

## 3. Typography Rules

### Font Stack (locale-aware, inferred)
| Locale | Stack |
|---|---|
| Default | `-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
| Traditional Chinese | `… "PingFang TC", "Microsoft JhengHei", sans-serif` |
| Japanese | `… "Hiragino Kaku Gothic Pro", "Meiryo", sans-serif` |
| Simplified Chinese | `… "PingFang SC", "Microsoft YaHei", sans-serif` |

No custom display typeface — system stacks render natively across JP/TW and keep mobile performant.

### Weights
- **700 (Bold)**: LIVER names, key labels, CTAs, ranking numbers, gift values.
- **600 (Semibold)**: Tab labels, section headers, active states.
- **400 (Regular)**: Body, chat messages, captions, metadata.

### Size Scale (px, inferred — mobile-first)
| Use | Size |
|---|---|
| Micro / viewer count | `11px` |
| Caption / chat meta | `12px` |
| Chat message / body | `14px` |
| LIVER name / list title | `15–16px` |
| Section heading | `18–20px` |
| Hero / spotlight | `22–28px` |

### Conventions
- **Compact, mobile-native sizing** — the UI is overlay chrome on video, so type stays small and legible against the scrim.
- **Weight + the pink accent** drive hierarchy; the brand rarely uses huge display type because the video is the content.
- **Numbers are gamified** — viewer counts, gift totals, ranks render bold, often with gold for top status.
- **Text over video** always sits on a gradient scrim or has a subtle shadow for legibility.

## 4. Component Stylings

### Buttons

**Primary (GO LIVE / Action)**
- Background: `#FF4F6E`
- Text: `#FFFFFF`
- Border: none
- Radius: `24px` (pill)
- Padding: `12px 24px`
- Font: `16px` / `700`
- Pressed: bg `#E8455F`
- Use: "GO LIVE", primary CTAs, sign-up

**Follow**
- Background: `#FF4F6E` (not-following) → transparent + `1px solid rgba(255,255,255,0.3)` (following)
- Text: `#FFFFFF` → `rgba(255,255,255,0.7)`
- Radius: `16px` (pill)
- Padding: `6px 16px`
- Font: `14px` / `600`
- Use: Follow / Following toggle on LIVER profiles and stream overlays

**Secondary (Outlined on dark)**
- Background: transparent
- Text: `#FFFFFF`
- Border: `1px solid rgba(255,255,255,0.3)`
- Radius: `24px`
- Padding: `12px 24px`
- Font: `16px` / `600`
- Use: Secondary actions, "Maybe later"

**Gift (special)**
- Background: gift gradient (`#FF4F6E` → `#FF2D8E`)
- Text: `#FFFFFF`
- Radius: `20px`
- Use: Send-gift action — the highest-energy transaction button

### Inputs

**Default (on dark)**
- Background: `#2C2C2E`
- Text: `#FFFFFF`
- Border: none (or `1px solid rgba(255,255,255,0.15)`)
- Radius: `12px`
- Padding: `12px 16px`
- Placeholder: `rgba(255,255,255,0.45)`
- Focus: `1px solid #FF4F6E`
- Use: Search, login, profile editing

**Chat input**
- Background: `#2C2C2E` or translucent over video
- Radius: `24px` (pill)
- Trailing: pink send icon (`#FF4F6E`)
- Use: Live-chat composer overlay on stream

### Cards

**Stream Card (discover grid)**
- Background: image/video thumbnail with `rgba(0,0,0,0.5)` bottom gradient
- Radius: `12px`
- Overlay: LIVE badge top-left, viewer count, LIVER name + avatar bottom
- Use: Discover/explore grid of live streams

**Profile / List Card**
- Background: `#1C1C1E`
- Radius: `12px`
- Padding: `12px`
- Use: LIVER lists, ranking rows, fan-club cards

### Badges & Chips

**LIVE Badge**
- Background: `#FF4F6E` or `#27C76F` dot + "LIVE"
- Text: `#FFFFFF`
- Radius: `4px`
- Padding: `2px 6px`
- Font: `11px` / `700`
- Use: Live-now indicator on thumbnails

**Rank Badge**
- Background: `#FFC83D` (gold) for #1
- Text: `#121212`
- Radius: `50%` or `4px`
- Use: Leaderboard / top-fan status

**Avatar**
- Radius: `50%`
- Optional pink/gradient ring for live or VIP status
- Use: LIVER and viewer avatars

### Navigation
- Bottom tab bar (mobile-native): Home / Discover / GO LIVE (center, pink) / Messages / Profile
- Active tab: `#FF4F6E`; inactive: `rgba(255,255,255,0.45)`
- Center GO LIVE is an elevated pink action

## 5. Layout Principles

### Structure
- **Mobile / vertical-video first** — the canonical surface is a portrait phone screen with a full-bleed stream and overlay chrome
- Discover = grid/feed of stream thumbnails; Stream view = full-bleed video + floating chat + gift rail + bottom action bar
- Web/desktop is a secondary surface that frames the same dark-stage system

### Spacing
- 4/8px-based spacing scale, tight on overlay chrome
- Safe-area-aware padding for notches and home indicators on the stream overlay

### Density
17LIVE is **medium density with high motion**. Overlay chrome is minimal and edge-anchored so the video breathes; lists and discover grids pack efficiently; the "noise" comes from animated reactions, not from static density.

## 6. Depth & Elevation

On a dark UI, elevation is communicated by **surface lightness steps** (`#121212` → `#1C1C1E` → `#2C2C2E`) and by scrims, more than by shadow.

- **Bottom sheet / modal**: `#1C1C1E` surface rising over a `rgba(0,0,0,0.5)` scrim; soft top shadow
- **Stream overlay chrome**: anchored to a bottom/top gradient scrim so it floats legibly over video
- **Gift animations**: render in a top layer above all chrome
- **Glow accents**: pink/gradient glows on live-avatar rings and premium gifts — the system's "lighting"

### Z-Index (stream view)
1. Video (base)
2. Gradient scrims
3. Chat + overlay chrome
4. Gift/reaction animation layer (highest)

## 7. Do's and Don'ts

- **DO** default to the dark stage (`#121212`) — video looks best framed in dark and the UI stays out of the way.
- **DON'T** use a light background for the streaming surface — it blows out late-night phone viewing and dilutes the video.
- **DO** reserve pink (`#FF4F6E`) for connection/transaction — go live, send gift, follow, primary CTA.
- **DON'T** paint neutral chrome pink. Pink reads as "an action / a moment" only because the stage is dark-neutral.
- **DO** use pill geometry (16–24px radius) on buttons and circular avatars — friendly, social.
- **DON'T** use sharp enterprise corners — they fight the playful register.
- **DO** keep overlay text legible with gradient scrims or shadows over video.
- **DON'T** let chrome cover the LIVER's face — anchor it to edges, keep the center clear.
- **DO** spend the motion budget on reactions (gifts, hearts, level-ups) — that's the live energy.
- **DON'T** animate navigation chrome with theatrics; tab/route motion stays quick and quiet.
- **DO** use gold (`#FFC83D`) for ranking/status and green (`#27C76F`) for LIVE/online.
- **DON'T** conflate the status colors with the pink action color.
- **DO** use Traditional Chinese on TW surfaces and native CJK per market; never Simplified on TW.

## 8. Responsive Behavior

### Breakpoints
| Width | Behavior |
|---|---|
| Mobile `<768px` | Canonical surface — full-bleed vertical video, bottom tab bar, overlay chat/gift chrome |
| Tablet `768–1024px` | Stream centers with side panels (chat / ranking) appearing |
| Desktop `>1024px` | Stream center stage with persistent chat rail + gift panel + recommendations sidebar (Twitch-like three-zone layout) |

### Touch & Mobile
- Large tap targets (44px+); center GO LIVE elevated for thumb reach
- Gift rail and chat composer are bottom-anchored within thumb zone
- Swipe gestures to switch streams (feed-like) on mobile
- Safe-area insets respected on overlay chrome

### Media
- Video full-bleed `object-fit: cover` on mobile, contained on desktop center stage
- Thumbnails lazy-load; LIVE thumbnails may show a short motion preview on hover (desktop)

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / action: 17 Pink (`#FF4F6E`); pressed `#E8455F`
- Stage: `#121212`; surfaces `#1C1C1E` / `#2C2C2E`
- Text on dark: white / `rgba(255,255,255,0.7)` / `rgba(255,255,255,0.45)`
- Rank gold: `#FFC83D`; VIP purple: `#8B5CF6`
- LIVE/success: `#27C76F`; error: `#FF453A`

### Example Component Prompts
- "Create a 17LIVE stream card: full-bleed thumbnail, 12px radius, bottom gradient scrim `rgba(0,0,0,0.5)`, LIVE badge top-left (`#FF4F6E`, white, 11px/700, 4px radius), viewer-count chip with eye icon, LIVER avatar (28px circle, pink ring) + name (15px/700 white) bottom-left."
- "Build a 17LIVE Follow toggle: not-following = `#FF4F6E` bg, white text, 16px pill radius, 14px/600, padding 6px 16px; following = transparent + 1px solid rgba(255,255,255,0.3), text rgba(255,255,255,0.7)."
- "Design a GO LIVE button: pink (`#FF4F6E`) pill, 24px radius, white 16px/700, padding 12px 24px. As the center bottom-tab action, elevate it slightly above the bar."
- "Create a gift-send button: gradient `#FF4F6E → #FF2D8E`, 20px radius, white text + gift icon, the highest-energy transaction control. On send, trigger a top-layer gift animation."
- "Build the stream overlay chat composer: pill input (`#2C2C2E`, 24px radius) over the video bottom scrim, placeholder rgba(255,255,255,0.45), trailing pink (`#FF4F6E`) send icon."

### Iteration Guide
1. **Dark stage default; pink is the action.** Never light-mode the streaming surface.
2. **Pill geometry + circular avatars** — friendly and social.
3. **Locale-aware system fonts** (JP + TW first-class). Never Simplified on TW.
4. **Spend motion on reactions, not chrome.** Gifts/hearts/level-ups are the energy.
5. **Keep overlay chrome edge-anchored** over scrims; never cover the LIVER's face.
6. **Status colors are distinct:** gold = rank, green = LIVE, pink = action.
7. **Numbers are gamified** — bold counts, gold for top status.

---

## 10. Voice & Tone

17LIVE speaks like an upbeat host hyping the room — warm, encouraging, and celebratory, the voice of a platform whose whole premise is connection between a LIVER and their fans. The register is **playful and intimate**, leaning on second-person address and the platform's own vocabulary ("LIVER" for streamer, "GO LIVE", fan-club language). It is genuinely multilingual — Japanese and Traditional Chinese are the largest first-class voices, authored per market across 150+ countries, never machine-translated from one master. Copy celebrates moments (a new follower, a gift received, a fan-club join) without being saccharine, and keeps transactional flows (top-ups, gifting) clear and trustworthy because real money moves through them. The bilingual tagline "Live Streaming 直播互動娛樂平台" captures the positioning — interactive entertainment, live and social.

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

**Forbidden phrases.** Manipulative spend-pressure on gifting/top-up (`Hurry, gift now!`), shaming a user for not spending, `Oops! Something went wrong` without a reason, cold corporate jargon in social moments, emoji in safety/report flows (keep those serious), Simplified-Chinese characters on TW-Traditional surfaces, fake hype in error messages.

**Voice samples.**
- `Live Streaming 直播互動娛樂平台` — bilingual platform positioning <!-- verified: 17.live tagline via WebFetch 2026-05-19 -->
- `GO LIVE` — primary creator CTA <!-- illustrative/conventional: 17LIVE's core action verb; not live-DOM-verified this pass -->
- `Follow` / `Following` — LIVER follow toggle <!-- illustrative/conventional -->
- `You're now following this LIVER!` — illustrative follow-success micro-copy <!-- illustrative: not verified as live 17LIVE copy -->
- `No one's live here right now — check out Trending.` — illustrative empty state <!-- illustrative: not verified as live 17LIVE copy -->

## 11. Brand Narrative

17LIVE was founded in **June 2015 in Taiwan** by **Jeffrey Huang** (黃立成), a musician-entrepreneur, as a live-streaming app built around the idea that broadcasting should be **interactive and intimate** — not a one-way feed but a real-time room where fans shape the show through chat and virtual gifts ([en.wikipedia.org/wiki/17LIVE](https://en.wikipedia.org/wiki/17LIVE)). The name "17" (read "one-seven", and a homophone play in Mandarin) became shorthand for going live. After early leadership transitions — Joseph Phua (co-founder of Paktor) became CEO following a 2017 merger, and Alex Lien became Global CEO in 2023 — the company grew into an international entertainment platform headquartered across Japan, Taiwan, and beyond.

The design language is the product-surface expression of that interactive-intimacy thesis. The dark stage exists so the LIVER's video is the hero and the late-night, in-your-hand viewing feels right; the hot pink is the color of every act of connection — going live, following, sending a gift, joining a fan club — because the platform's entire economy and emotion run on those moments. The high motion budget (flying gifts, floating hearts, level-up bursts) is not decoration; it is the visible feedback loop that makes a fan feel *seen* by a LIVER, which is the product.

By April 2022, 17LIVE reported roughly **60 million registered users across 154 countries**, around **46,000 contracted artists**, and over **2.3 million monthly active users**, ranking among the largest live-broadcasting platforms in the world; it is publicly listed on the Singapore Exchange (SGX: VT1). Revenue flows through virtual gifting, monthly fan-club subscriptions, pay-per-view ticketed events, and live-commerce (HandsUp / OrderPally). ([en.wikipedia.org/wiki/17LIVE](https://en.wikipedia.org/wiki/17LIVE)) <!-- source: Wikipedia via WebFetch 2026-05-19; metrics not independently audited -->

## 12. Principles

1. **Dark stage, lit content.** The UI is a darkened theater so the LIVER's video and the pink actions carry the light. *UI implication:* Default surfaces to `#121212`/`#1C1C1E`; keep overlay chrome edge-anchored and minimal; never use a light streaming surface.

2. **Pink is connection.** The signature pink marks every act of social connection and transaction. *UI implication:* Apply `#FF4F6E` to GO LIVE, follow, gift, and primary CTA; keep neutral chrome neutral so pink always reads as "a moment of connection."

3. **Reactions are the product.** Gifts, hearts, and level-ups are the visible loop that makes a fan feel seen. *UI implication:* Spend the motion budget here — top-layer gift animations, floating reactions — while keeping navigation motion quiet. The reaction layer is the highest z-index.

4. **Money moves; be trustworthy.** Coins, top-ups, and gifting involve real money and a creator's livelihood. *UI implication:* Show exact balances and amounts; never use spend-pressure dark patterns; keep transaction flows clear, with safety/report flows calm and serious.

5. **Two-plus languages, all native.** Japanese and Traditional Chinese lead; copy is authored per market. *UI implication:* Use the locale-aware CJK font stack; route microcopy through locale bundles; never Simplified on TW surfaces.

6. **Friendly geometry.** Pills, circular avatars, soft cards signal a social, human platform. *UI implication:* Buttons 16–24px radius; avatars 50%; cards ~12px. Avoid sharp enterprise corners.

## 13. Personas

*Personas are fictional archetypes informed by publicly described 17LIVE user segments (JP/TW livestream fans and LIVERs), not individual people.*

**さくら (Sakura), 23, Tokyo.** A devoted fan who follows three LIVERs and tunes in nightly after work. Belongs to a paid fan club, sends mid-tier gifts during special streams, and treats the chat community as a real social circle. Cares that her gift visibly registers — the animation and the LIVER's reaction are the payoff.

**阿哲 (A-Zhe), 27, Taipei.** A part-time LIVER who streams gaming and talk content several evenings a week, building toward full-time. Watches his ranking and fan-club growth closely, optimizes his GO LIVE schedule, and values clear earnings/analytics. The pink GO LIVE button is the most important pixel in his day.

**Kevin, 19, Kaohsiung.** A casual viewer who discovers streams through the explore feed, drops in for a few minutes, occasionally sends a free heart, and rarely spends. Browses on mobile in short sessions; the discover grid and quick swipe-between-streams are his whole experience.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no live streams in category)** | One `rgba(255,255,255,0.7)` line + a CTA to explore Trending. No illustration required; keep it encouraging. |
| **Empty (no messages / followers)** | Friendly one-liner + suggested action (discover LIVERs). |
| **Loading (discover grid)** | Dark skeleton tiles (`#1C1C1E`) at 12px radius matching final thumbnails; subtle shimmer. No spinner takeover. |
| **Loading (stream connecting)** | Centered spinner over a dark scrim with `Connecting…`; preserves the dark stage. |
| **Loading (inline — send gift)** | Gift button holds width; brief in-button spinner; on success, trigger the gift animation. |
| **Error (stream failed to load)** | Blameless one-liner over dark scrim + retry in `#FF4F6E`. Never a raw error code alone. |
| **Error (insufficient coins)** | Clear, non-shaming prompt with exact balance + a top-up action; never pressure language. |
| **Success (follow)** | Toggle flips to "Following", brief pink confirmation; optional toast `You're now following <LIVER>!`. |
| **Success (gift sent)** | Top-layer gift animation plays over the stream; chat shows the gift event. The animation IS the confirmation. |
| **Skeleton** | `#1C1C1E` blocks at exact card dimensions; numeric placeholders render as `—`, never `0`. |
| **Disabled (button)** | Faded fill + `rgba(255,255,255,0.3)` text; geometry preserved. |

## 15. Motion & Easing

17LIVE has a **bifurcated motion philosophy**: lavish and celebratory on reactions, quick and quiet on navigation. This is the rare brand where overshoot is welcome — but only in the reaction layer.

**Durations:**
| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, reduce-motion fallback |
| `motion-fast` | 150ms | Hover/press, tab switch, chrome transitions |
| `motion-standard` | 250ms | Sheets, modals, panel slides |
| `motion-slow` | 400ms | Stream-switch transitions |
| `motion-reaction` | 600–1500ms | Gift animations, floating hearts, level-up bursts |

**Easings:**
| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Navigation, sheets, chrome — quiet and platform-native |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Things appearing |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reaction layer ONLY — gift pops, heart bursts, level-up |

**Spring stance.** Unlike utility brands, 17LIVE **embraces overshoot — but quarantines it to the reaction layer.** A sent gift should pop, scale-bounce, and celebrate; a tab switch should not. Navigation, sheets, and form chrome use the standard non-bouncy easings. The rule: spring lives where the social/emotional payoff lives (gifts, hearts, follows, level-ups); everything structural stays calm.

**Signature motions.**
1. **Gift send.** On send, a gift graphic enters with `ease-spring` over `motion-reaction`, scales up, drifts, and fades — playing in the top z-index layer above all chrome. Premium gifts trigger full-screen gradient effects.
2. **Floating hearts.** Tapping the like control spawns hearts that float up and fade over `motion-reaction` with slight random drift — continuous, ambient live energy.
3. **Follow toggle.** Flips to "Following" with a brief pink pulse over `motion-fast` — a small celebratory beat, not a full spring.
4. **Stream switch (swipe).** On mobile, swiping between streams transitions over `motion-slow / ease-standard` — smooth, not bouncy, to keep orientation.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, gift/heart/level-up animations collapse to a static confirmation (the gift still registers in chat, but without the bounce); navigation motion goes instant. The reaction *event* is never lost — only its theatrics.

<!--
OmD v0.1 Sources — 17live
Created: 2026-05-19

Tier 1 (attempted): live computed-style inspection of 17.live was NOT completed — WebFetch surfaced
only the tagline "Live Streaming 直播互動娛樂平台" and the Playwright MCP session redirected to
injected ad interstitials, blocking a clean DOM read this pass. primary_color #FF4F6E is the
creation-brief-provided value and matches 17LIVE's known hot-pink brand identity, but exact
production hexes and the dark-surface palette in §2 are NOT live-verified — they are well-grounded
approximations from live-streaming-app conventions + the brand's known dark+pink identity. Flagged
for a future omd:add-reference UPDATE pass with a working browser.

Tier 2 (philosophy/founders):
- en.wikipedia.org/wiki/17LIVE (WebFetch 2026-05-19) — founded June 2015 Taiwan by Jeffrey Huang;
  Joseph Phua CEO post-2017 merger; Alex Lien Global CEO 2023; ~60M registered users / 154 countries
  (Apr 2022); ~46k contracted artists; 2.3M+ MAU; SGX-listed (VT1); revenue via virtual gifting,
  fan-club subs, ticketed events, live-commerce (HandsUp/OrderPally); "LIVER" = streamer.
  Metrics not independently audited.

Illustrative (not verified as live copy): all CTA/social/empty/error strings beyond the tagline,
type scale, semantic + accent hexes, font stack (inferred from JP/TW live-streaming conventions).
Marked inline. Personas fictional (§13).
-->

---

**Verified:** 2026-05-19
**Tier 1 sources:** 17.live — live inspect NOT completed (browser redirect); tagline "Live Streaming 直播互動娛樂平台" (WebFetch). primary `#FF4F6E` is brief-provided and matches 17LIVE's hot-pink identity; dark-surface palette and other hexes are grounded approximations pending live re-inspection.
**Tier 2 sources:** styles.refero.design / getdesign.md — not checked this pass (browser session unreliable).
**Tier 2 (Philosophy/founders):** Wikipedia (17LIVE — Jeffrey Huang / June 2015 Taiwan / SGX VT1 / 60M users 154 countries / LIVER terminology / virtual-gift economy).
**Style ref:** `pinkoi` (TW consumer tone, adapted dark). **Conflicts unresolved:** production hexes beyond primary not live-verified this pass (browser unreliable) — flagged for UPDATE.
