---
id: spoon
name: Spoon
country: KR
category: audio-social
homepage: "https://www.spooncast.net"
primary_color: "#FF5500"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=spooncast.net&sz=128"
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#FF5500"
    primary-hover: "#E64D00"
    brand: "#FF5500"
    canvas: "#FFFFFF"
    foreground: "#1A1A1A"
    body: "#333333"
    muted: "#767676"
    on-primary: "#FFFFFF"
    surface: "#F2F2F2"
    hairline: "#E5E5E5"
    success: "#22C55E"
    error: "#FF3B30"
    accent-gift: "#FFB300"
    accent-coral: "#F23C5C"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    hero:    { size: 28, weight: 700, lineHeight: 1.30, use: "Marketing hero, section headlines" }
    section: { size: 20, weight: 700, lineHeight: 1.35, use: "라이브/팟캐스트/랭킹 headers" }
    card-title: { size: 16, weight: 600, lineHeight: 1.40, use: "Live-room titles, DJ names" }
    body:    { size: 14, weight: 400, lineHeight: 1.50, use: "Descriptions, room info" }
    chip:    { size: 12, weight: 400, lineHeight: 1.40, use: "Hashtag chips, CTAs" }
    meta:    { size: 12, weight: 400, lineHeight: 1.40, use: "Listener counts, timestamps" }
    caption: { size: 11, weight: 400, lineHeight: 1.40, use: "Fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24 }
  rounded: { sm: 6, md: 12, lg: 16, full: 9999 }
  shadow:
    scrim: "rgba(0,0,0,0.5)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#FF5500", fg: "#FFFFFF", radius: "999px", height: "28px", padding: "4px 12px", font: "12px / 500", hover: "#E64D00", use: "Login/signup primary CTA — compact orange pill" }
    button-golive: { type: button, bg: "#FF5500", fg: "#FFFFFF", radius: "999px", padding: "10px 20px", font: "15px / 600", use: "방송하기 / start-a-live — larger orange pill" }
    button-outline: { type: button, bg: "#FFFFFF", fg: "#FF5500", border: "1px solid #FF5500", radius: "999px", padding: "4px 12px", font: "12px / 500", use: "Follow, secondary action" }
    button-ghost: { type: button, bg: "transparent", fg: "#333333", font: "14px / 500", use: "Tertiary nav, 더보기" }
    input: { type: input, bg: "#F2F2F2", fg: "#1A1A1A", radius: "999px", padding: "8px 14px", font: "14px / 400", focus: "border #FF5500", use: "Room/DJ search, form fields; placeholder #AAAAAA" }
    card: { type: card, bg: "#FFFFFF", border: "1px solid #E5E5E5", radius: "12px", padding: "12px", use: "Live-room card — avatar, title, hashtags, listener count" }
    avatar: { type: avatar, bg: "#D9D9D9", border: "2px solid #FF5500", radius: "50%", use: "DJ/creator avatar; orange ring = live now" }
    chip-hashtag: { type: badge, bg: "#F2F2F2", fg: "#333333", radius: "12px", padding: "0 6px", font: "12px / 400", use: "Discovery hashtag chip" }
    badge-live: { type: badge, bg: "#FF5500", fg: "#FFFFFF", radius: "6px", padding: "2px 6px", font: "11px / 600", use: "LIVE / ON AIR flag" }
    badge-gift: { type: badge, bg: "rgba(255,179,0,0.15)", fg: "#FFB300", radius: "999px", padding: "2px 8px", font: "12px / 600", use: "Spoon-count / gift indicator" }
    tab: { type: tab, fg: "#767676", active: "text #1A1A1A weight 600, #FF5500 on selected", font: "14px / 500", use: "라이브/팟캐스트/랭킹 switcher" }
    toast: { type: toast, bg: "#1A1A1A", fg: "#FFFFFF", radius: "12px", padding: "12px 16px", use: "Transient feedback snackbar" }
    dialog: { type: dialog, bg: "#FFFFFF", fg: "#1A1A1A", radius: "16px", padding: "24px", shadow: "rgba(0,0,0,0.5)", use: "Login, gift selection, bottom sheet" }
---

# Design System Inspiration of Spoon (스푼)

## 1. Visual Theme & Atmosphere

Spoon (스푼라디오 / Spoon Radio) is Korea's pioneering audio-live-streaming platform — "누구나 쉽게 오디오 라이브를 시작할 수 있는 공간" (a place where anyone can easily start an audio live stream). Born from the idea that voice is the most intimate medium, Spoon built a social product where DJs go live with just their voice and listeners gather, chat, and send gifts in real time. The interface is bright, friendly, and conversation-forward: a clean white canvas (`#FFFFFF`) organized around live-room cards, creator avatars, and hashtag-driven discovery, with a single warm orange carrying the brand and a soft, rounded, chat-app geometry throughout.

The signature is a vivid energetic orange, observed live on the web as `#FF5500`, used on the primary "로그인 / 회원가입" CTA and brand accents. It's the warm, social, "join in" orange — the color of a lit-up live room, of community heat, of the gift-and-cheer economy that drives audio social. The orange CTA is rendered as a **full pill (999px radius)** at a compact 28px height — a small, friendly, tappable button that fits the light chat-app density. Around it, neutral chips (`#F2F2F2` with `#333333` text, 12px radius) carry hashtags like `#연애`, and circular avatars (`50%`) anchor every creator and room. The whole surface feels like a warm, busy social lobby — many small rooms, many voices, an inviting orange "start" everywhere.

Typography is Pretendard-led with a wide cross-market fallback (`Pretendard, "Pretendard JP", "Noto Sans TC", "Noto Sans", ..., system-ui`) — reflecting Spoon's KR/JP/TW multi-region presence — rendered in dark gray on white. Geometry is soft and small: pill CTAs (999px), rounded chips (12px), circular avatars (50%). The atmosphere is "a friendly audio lobby that's always live" — warm, social, lightweight, and built for spontaneous voice.

**Key Characteristics:**
- Warm energetic orange (`#FF5500`) as the brand + primary CTA color — the "join the live" heat
- Pill CTAs (`999px` radius) at compact heights — light, friendly, chat-app tappability
- Clean white canvas (`#FFFFFF`) organized around live-room cards and avatars
- Neutral hashtag chips (`#F2F2F2` / `#333333`, 12px) — discovery by tag
- Circular avatars (`50%`) anchoring every creator/room
- Pretendard-led type stack with JP/TC fallbacks (KR/JP/TW multi-region)
- Conversation-forward, social-lobby density — many small live rooms

## 2. Color Palette & Roles

Colors below are extracted from live computed styles on spooncast.net (2026-05-19, web surface). Spoon does not publish a public token layer; values are observed. Note: the web surface uses orange `#FF5500`; Spoon's earlier app brand used a coral/pink — see footer conflict note.

### Brand / Interactive
- **Spoon Orange** (`#FF5500`): Brand color and primary interactive — login/signup CTA, brand accents, "go live" energy. Observed `rgb(255, 85, 0)` on the header CTA, 999px pill, 28px tall.
- **Spoon Orange Pressed** (`#E64D00`): Hover/pressed darkening of Spoon Orange.
- **Coral (legacy/app)** (`#F23C5C`): Spoon's historical coral-pink brand mark seen in earlier app branding. Reserve for legacy/marketing contexts; the current web brand color is orange `#FF5500`.

### Surfaces
- **Canvas White** (`#FFFFFF`): Page background, card surfaces. Observed body bg.
- **Surface Gray** (`#F2F2F2`): Hashtag chips, section bands, grouping. Observed `rgb(242, 242, 242)`.
- **Avatar Placeholder** (`#D9D9D9`): Empty avatar circle. Observed `rgb(217, 217, 217)`.

### Text
- **Text Primary** (`#1A1A1A`): Headings, primary labels, room titles. Observed `rgb(26, 26, 26)` on avatar text.
- **Text Body** (`#333333`): Body copy, chip text. Observed `rgb(51, 51, 51)`.
- **Text Secondary** (`#767676`): Metadata, listener counts, captions.
- **Text Tertiary** (`#AAAAAA`): Placeholder, disabled, fine print.

### Borders & Dividers
- **Border Default** (`#E5E5E5`): Card borders, dividers, input outlines.
- **Border Strong** (`#D1D1D1`): Active/emphasized borders.

### Semantic
- **Live / On-Air** (`#FF5500`): The orange doubles as the "live now" indicator — a pulsing dot on active rooms.
- **Success** (`#22C55E`): Sent, followed, confirmed.
- **Error** (`#FF3B30`): Errors, destructive.
- **Gift / Spoon currency** (`#FFB300`): Gold accent for spoons (the virtual gift/coin economy).

## 3. Typography Rules

### Font Stack
```
Pretendard, "Pretendard JP", "Noto Sans TC", "Noto Sans", "Noto Sans Math", system-ui, -apple-system, ".SFNSText-Regular", sans-serif
```

Pretendard leads with JP and Traditional-Chinese (Noto Sans TC) fallbacks — Spoon operates across Korea, Japan, and Taiwan, so the stack is built for multi-region CJK rendering. All rendering is dark-gray on white.

### Type Scale (observed home + discovery surfaces)

| Role | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| Hero | 28–32px | 700 | 1.3 | Marketing hero, section headlines |
| Section Heading | 20–22px | 700 | 1.35 | "라이브", "팟캐스트", "랭킹" headers |
| Room / Card Title | 15–16px | 600 | 1.4 | Live-room titles, DJ names |
| Body | 14px | 400 | 1.5 | Descriptions, room info |
| Chip / Label | 12px | 400 | 1.4 | Hashtag chips (observed 12px), CTAs (login 12px) |
| Meta | 12px | 400 | 1.4 | Listener counts, timestamps |
| Caption | 11px | 400 | 1.4 | Fine print |

### Conventions
- **700 for headlines, 600 for room/DJ titles, 400 for body and chips** — compact, social-feed weights.
- **Dark-gray hierarchy** — `#1A1A1A` → `#333333` → `#767676` → `#AAAAAA`.
- **Small, dense type** — this is a busy social lobby; labels are compact (12px chips/CTAs observed).
- **Multi-region CJK** — Korean primary, but the stack and layout assume JP/TW glyphs render cleanly.

## 4. Component Stylings

### Buttons

**Primary CTA (로그인 / 회원가입)**
- Background: `#FF5500`
- Text: `#FFFFFF`
- Border: none
- Radius: 999px (pill)
- Padding: 4px 12px
- Font: 12px / 400–500 / Pretendard
- Hover: background `#E64D00`
- Use: Login/signup, primary action — observed 28px tall, compact orange pill

**Go-Live CTA**
- Background: `#FF5500`
- Text: `#FFFFFF`
- Border: none
- Radius: 999px (pill)
- Padding: 10px 20px
- Font: 15px / 600 / Pretendard
- Use: "방송하기" / start-a-live primary action — larger orange pill

**Secondary / Outline**
- Background: `#FFFFFF`
- Text: `#FF5500`
- Border: 1px solid `#FF5500`
- Radius: 999px (pill)
- Padding: 4px 12px
- Font: 12px / 500 / Pretendard
- Use: Follow, secondary action

**Ghost / Text**
- Background: transparent
- Text: `#333333`
- Border: none
- Font: 14px / 500 / Pretendard
- Use: Tertiary nav, "더보기"

### Inputs

**Search / Text Field**
- Background: `#F2F2F2`
- Text: `#1A1A1A`
- Border: none (filled)
- Radius: 999px (search) / 12px (form)
- Padding: 8px 14px
- Font: 14px / 400 / Pretendard
- Placeholder: `#AAAAAA`
- Focus: border `#FF5500`
- Use: Room/DJ search, form fields

### Cards

**Live-Room Card**
- Background: `#FFFFFF`
- Border: 1px solid `#E5E5E5` (or shadowless on bands)
- Radius: 12px
- Padding: 12px
- Use: The atom of discovery — DJ avatar (circle), room title, hashtags, listener count + live dot

**Avatar (circle)**
- Background: `#D9D9D9` (placeholder)
- Border: 2px solid `#FF5500` (when live/on-air)
- Radius: 50%
- Size: 40–64px
- Use: DJ/creator avatar; the orange ring signals "live now"

### Badges / Chips

**Hashtag Chip**
- Background: `#F2F2F2`
- Text: `#333333`
- Border: none
- Radius: 12px
- Padding: 0 6px
- Font: 12px / 400 / Pretendard
- Use: Discovery hashtags (`#연애`, `#사연`, `#수다`) — observed `rgb(242,242,242)` bg, `rgb(51,51,51)` text, 12px radius, 24px tall

**Live Badge**
- Background: `#FF5500`
- Text: `#FFFFFF`
- Border: none
- Radius: 6px
- Padding: 2px 6px
- Font: 11px / 600 / Pretendard
- Use: "LIVE" / "ON AIR" flag on active rooms

**Spoon (gift) Badge**
- Background: `rgba(255,179,0,0.15)`
- Text: `#FFB300`
- Border: none
- Radius: 999px
- Padding: 2px 8px
- Font: 12px / 600 / Pretendard
- Use: Spoon-count / gift indicator (the gold virtual-currency accent)

### Tabs / Nav

**Top Nav Item**
- Active text: `#1A1A1A` (weight 600) / `#FF5500` on selected feature
- Inactive text: `#767676`
- Font: 14px / 500 / Pretendard
- Use: 라이브 / 팟캐스트 / 랭킹 / PodNovel switcher

### Toasts

**Snackbar**
- Background: `#1A1A1A`
- Text: `#FFFFFF`
- Radius: 12px
- Padding: 12px 16px
- Use: "팔로우했어요" transient feedback

### Dialogs

**Modal / Bottom Sheet**
- Background: `#FFFFFF`
- Text: `#1A1A1A`
- Radius: 16px (top corners on sheet)
- Padding: 24px
- Backdrop: `rgba(0,0,0,0.5)`
- Use: Login, gift selection, room settings

---

**Verified:** 2026-05-19
**Tier 1 sources:** spooncast.net (live computed styles via Playwright — primary CTA `#FF5500` (rgb 255,85,0) / 999px pill / 12px / 28px tall / padding 4px 12px; hashtag chip `#F2F2F2` (rgb 242,242,242) bg + `#333333` (rgb 51,51,51) text / 12px radius / 24px tall; avatar placeholder `#D9D9D9` (rgb 217,217,217) / 50%; primary text `#1A1A1A` (rgb 26,26,26); white bg; font `Pretendard, "Pretendard JP", "Noto Sans TC", "Noto Sans", ..., system-ui`).
**Tier 2 sources:** getdesign.md/spoon — not checked; styles.refero.design — not checked. WebSearch (namu.wiki / Wikipedia) confirms Spoon Radio identity + old/new logo history but no token doc.
**Conflicts unresolved:** Brief-provided primary `#F23C5C` (coral-pink) vs live web brand orange `#FF5500`. The current spooncast.net web surface uses orange `#FF5500` on the primary CTA and brand accents; `#F23C5C` corresponds to Spoon's earlier coral/pink app branding. Resolved: `primary_color` set to the verified live orange `#FF5500`; coral retained in §2 as legacy/app brand. (Spoon rebranded; brief value was an unverified "(verify)" guess.)

## 5. Layout Principles

### Page Structure
- Top nav (~64px) over a centered max-width content column.
- Home is a grid/rows of live-room cards by category and hashtag, with creator avatars prominent.

### Spacing
- Base unit 8px; common values 4 / 8 / 12 / 16 / 24.
- Card gutter ~12px; tighter social-lobby density.
- Page horizontal padding ~20px desktop, 16px mobile.

### Density
**Social-lobby dense.** Many small live-room cards pack the grid, each with avatar + title + hashtags + listener count. The feel is "a busy room full of rooms." Room/creator detail pages loosen up for the live experience (player, chat, gift UI).

### Border Radius Scale
- Small (6px): live badge
- Standard (12px): cards, chips, form inputs
- Large (16px): modals, sheets
- Pill (999px): CTAs, search, follow buttons, gift badges
- Circle (50%): avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | no shadow | Page bg, inline, cards at rest on bands |
| Subtle | `0 1px 3px rgba(0,0,0,0.05)` | Resting room cards |
| Hover | `0 2px 8px rgba(0,0,0,0.08)` | Card hover lift |
| Floating | `0 4px 16px rgba(0,0,0,0.12)` | Dropdowns, gift panel, sticky CTA |
| Modal | `0 8px 24px rgba(0,0,0,0.16)` | Dialogs, bottom sheets |

Shadows are light. The most distinctive depth cue is the **orange avatar ring** on live rooms — a 2px `#FF5500` border that makes active DJs pop out of the white grid without any elevation. Separation otherwise comes from the `#F2F2F2` chip/band contrast against white.

## 7. Do's and Don'ts

### Do
- Use orange `#FF5500` for the brand, the primary CTA, and the "live now" signal.
- Use pill geometry (999px) on CTAs/follow/search — the light chat-app feel.
- Use circular avatars (50%) with an orange ring to signal live.
- Use neutral `#F2F2F2` chips for hashtag discovery.
- Keep gold (`#FFB300`) reserved for the spoon/gift economy.

### Don't
- Don't use the legacy coral `#F23C5C` as the current web brand — orange `#FF5500` is current.
- Don't use sharp/large radii on CTAs — pill is the signature.
- Don't dilute the orange with a second saturated accent (gold is gifts-only).
- Don't over-elevate cards; the orange live-ring and chip contrast do the work.
- Don't lose the CJK fallbacks — Spoon renders KR/JP/TW.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile (primary) | <768px | App-native: room grid + bottom nav; full-width "방송하기" CTA |
| Tablet | 768–1024px | 2–3 room cards per row, condensed nav |
| Desktop (web) | >1024px | 3–4+ room cards per row, full nav, region switcher (KR/JP/TW) |

### Touch & Media
- Room cards and avatars are primary tap targets; min 44px.
- Gift/cheer UI is thumb-reachable in the live player.
- Sticky bottom "방송하기" CTA with safe-area inset.

### Image Behavior
- Avatars circular, `object-fit: cover`, with live ring overlay.
- Room thumbnails 1:1 or 16:9, rounded 12px.

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / primary / live: Orange `#FF5500` (pressed `#E64D00`)
- Canvas: White `#FFFFFF`; chip/band `#F2F2F2`
- Text: `#1A1A1A` → `#333333` → `#767676` → `#AAAAAA`
- Avatar placeholder `#D9D9D9`; border `#E5E5E5`; focus `#FF5500`
- Gift gold `#FFB300`; success `#22C55E`; error `#FF3B30`
- Legacy coral (marketing only): `#F23C5C`

### Example Component Prompts
- "Build a Spoon primary CTA: bg `#FF5500`, white text 12px, 999px pill radius, 28px tall, padding 4px 12px. Hover bg `#E64D00`."
- "Create a Spoon live-room card: white bg, 1px border `#E5E5E5`, 12px radius, 12px padding. DJ avatar (48px circle, 2px `#FF5500` ring if live), room title (15px weight 600 `#1A1A1A`), hashtag chips (bg `#F2F2F2`, `#333333`, 12px text, 12px radius), listener count + orange live dot (12px `#767676`)."
- "Design a Spoon hashtag chip: bg `#F2F2F2`, text `#333333` 12px, 12px radius, padding 0 6px, 24px tall."
- "Create a spoon-gift badge: bg `rgba(255,179,0,0.15)`, text `#FFB300` 12px weight 600, 999px radius — for the gift/coin economy only."

### Iteration Guide
1. Orange `#FF5500` is brand + action + live signal; gold `#FFB300` is gifts only.
2. Pill geometry (999px) on CTAs/follow/search.
3. Circular avatars with orange ring = live.
4. Neutral `#F2F2F2` chips for hashtag discovery.
5. Pretendard stack with JP/TC fallbacks (KR/JP/TW).
6. Light shadows; orange ring + chip contrast separate.
7. Compact social-lobby density — small type, many rooms.

---

## 10. Voice & Tone

Spoon speaks like a warm, casual community host inviting you into the room — friendly, light, second-person, a little playful. The register is casual-polite Korean with `~요`/`~어요` endings (`팔로우했어요`, `지금 라이브 중이에요`), the social-app voice, never stiff `~습니다` except in policy. The brand premise — *anyone can start an audio live* — and the gift-and-cheer economy mean the copy is encouraging and community-warm: it invites you to *listen in*, *go live*, *cheer your DJ*. Korean is primary, but Spoon runs in JP and TW too, so system copy is written to localize cleanly.

| Context | Tone |
|---|---|
| CTAs | Casual Korean verb form (`로그인`, `방송하기`, `팔로우`, `들어가기`). |
| Discovery | Inviting, present-tense (`지금 라이브 중이에요`, `이런 방송은 어때요?`). |
| Success toasts | Past-tense soft ending (`팔로우했어요`). No emoji on chrome (emoji belongs to live chat). |
| Error messages | Blameless, specific, one action (`방송에 연결할 수 없어요. 잠시 후 다시 시도해 주세요`). Never `오류가 발생했습니다`. |
| Empty states | Warm + one action (`아직 팔로우한 DJ가 없어요. 마음에 드는 방송을 찾아볼까요?`). |
| Gift / cheer | Celebratory, light (`스푼을 보냈어요!`). |
| Legal / policy | Formal `~합니다` register — the exception. |

**Forbidden phrases.** `오류가 발생했습니다` (generic error), `죄송하지만` on non-destructive failures, pressure CTAs on lapsed listeners, superlatives on UI chrome, English-first strings on Korean surfaces, emoji on system toasts (emoji and stickers belong to live chat and gifts).

**Voice samples.**
- `로그인 / 회원가입` — header primary CTA, observed live on the `#FF5500` pill. <!-- verified: spooncast.net via Playwright 2026-05-19 -->
- `#연애` — hashtag-chip discovery label, observed live (`#F2F2F2` chip). <!-- verified: spooncast.net via Playwright 2026-05-19 -->
- `누구나 쉽게 오디오 라이브를 시작할 수 있는 공간` — platform self-description (observed in page intro). <!-- verified: spooncast.net intro text via WebFetch 2026-05-19 -->
- `지금 라이브 중이에요` — illustrative live-now label, soft `~요`. <!-- illustrative: not verified verbatim -->

## 11. Brand Narrative

Spoon (스푼라디오 / Spoon Radio) is operated by **Spoon Labs (스푼랩스)**, founded by **Choi Hyug-jae (최혁재)** and co-founders, and launched in **March 2016** in South Korea as a real-time **audio live-streaming** platform. The founding insight was that voice is the most intimate, lowest-barrier medium for connection: anyone — without a camera, without production — can open their phone, go live with just their voice, and find an audience that listens, chats, and sends virtual gifts (the "spoon" currency). Spoon grew into a global audio-social platform with strong presences in **Korea, Japan, and Taiwan**, and later expanded into podcasts and serialized audio fiction (PodNovel). ([en.wikipedia.org/wiki/Spoon_Radio](https://en.wikipedia.org/wiki/Spoon_Radio); [ko.wikipedia.org/wiki/스푼_라디오](https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%91%BC_%EB%9D%BC%EB%94%94%EC%98%A4))

The design is the form of "warm, low-barrier, always-live." The energetic orange is the heat of a live room and the friendly "start" everywhere; the circular avatars with orange rings make the human voice — the DJ — the center of every surface; the pill CTAs and small chips keep the experience light and spontaneous, like opening a chat, not producing a broadcast. The gift economy gets its own gold accent (`#FFB300`) because cheering your DJ with spoons is a first-class emotional action, not an afterthought.

What Spoon refuses: the high-production, camera-first aesthetic of video streaming (Spoon is voice, intimate and unpolished by design), the cold neutrality of utility apps (Spoon is warm and social), and any UI that makes going live feel like work. Spoon is a friendly audio lobby that's always live — warm orange, human voices, and an open invitation to join in.

## 12. Principles

1. **Voice is the product; the DJ is the center.** Every surface foregrounds the creator avatar and their live room. *UI implication:* Circular avatars with an orange live-ring anchor every card. Don't bury the human behind metadata.

2. **Warm and low-barrier.** Going live should feel like opening a chat, not producing a show. *UI implication:* Pill CTAs, small chips, light density. The "방송하기" action is always one warm orange tap away.

3. **One orange, three jobs.** `#FF5500` is brand, primary action, and the "live now" signal — a single warm color that means "here's the heat." *UI implication:* No second saturated accent except gift-gold. The orange ties brand, action, and live status together.

4. **Gifts are emotional, so they get their own gold.** The spoon-gift economy is first-class. *UI implication:* Gold `#FFB300` is reserved for the gift/coin economy — never a generic highlight. Cheering is a celebrated action.

5. **Built to localize.** Spoon is KR/JP/TW. *UI implication:* The font stack and layouts assume CJK glyphs render cleanly across regions; copy is written to adapt, not just translate.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Spoon user segments (Korean/JP/TW audio-social listeners and creators), not individual people.*

**지우 (Ji-woo), 23, Seoul.** DJ. Goes live most nights with just her voice — chatting, taking 사연 (listener stories), playing music. Spoon's low barrier (no camera) is why she creates here. Lives for the cheer of spoons and the orange live-ring that says she's on air.

**현수 (Hyun-soo), 29, Incheon.** Night-owl listener. Drops into live rooms after work to unwind, chats in real time, sends spoons to DJs he likes. Discovers rooms by hashtag (`#수다`, `#사연`). Treats Spoon like a warm late-night radio that talks back.

**さくら (Sakura), 26, Osaka.** Japanese listener-creator. Uses Spoon JP for audio fiction (PodNovel) and live chat. Why Spoon matters: it works the same warm way across regions, and her favorite KR DJs are a tap away. Mobile-only, evening usage.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no followed DJs)** | Warm line `#767676` (`아직 팔로우한 DJ가 없어요`) + orange pill CTA (`방송 둘러보기`). |
| **Empty (search no results)** | `#767676` caption (`검색 결과가 없어요. 다른 키워드로 찾아보세요`) + suggested hashtags. |
| **Loading (room grid first paint)** | Card-shaped skeletons at `#F2F2F2` with circular avatar placeholders, subtle shimmer. |
| **Loading (joining a live)** | Centered ring spinner in `#FF5500` over the room cover; chat connects after. |
| **Error (connection)** | Centered line `#1A1A1A` (`방송에 연결할 수 없어요. 잠시 후 다시 시도해 주세요`) + retry pill `#FF5500`. |
| **Error (inline field)** | Input border `#FF3B30`, caption below in red, one actionable sentence. |
| **Success (follow)** | Snackbar `#1A1A1A` + white text (`팔로우했어요`), 3s dismiss; follow button flips to outline. |
| **Success (gift sent)** | Inline celebration — gold `#FFB300` spoon animation + `스푼을 보냈어요!` in the live chat overlay. |
| **Live indicator** | Active rooms show a pulsing `#FF5500` dot + 2px orange avatar ring; listener count in `#767676`. |
| **Skeleton** | `#F2F2F2` blocks at exact card/avatar dimensions, 12px / 50% radius, ~1.2s shimmer. |
| **Disabled (button)** | Orange pill drops to `rgba(255,85,0,0.4)`, white text; geometry stable. |

## 15. Motion & Easing

Spoon's motion is warm and lively — gentle reveals, a pulsing live indicator, and a celebratory gift animation. Energetic and social, but light, not frantic.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle/checkbox, follow flip |
| `motion-fast` | 150ms | Hover, press, chip select |
| `motion-standard` | 250ms | Card hover, sheet open, tab switch |
| `motion-slow` | 400ms | Gift animation, page-to-room transition |
| `motion-pulse` | 1200ms loop | Live-indicator dot pulse |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default — most motion |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, modals, toasts appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Gift/cheer pop, follow confirmation |

**Spring stance.** Spring is licensed for the social-delight moments — sending a spoon-gift and confirming a follow. The live-indicator uses a soft sine pulse (not spring). Navigation and sheets stay standard. The platform should feel celebratory when you cheer and calm when you browse.

**Signature motions.**
1. **Live pulse.** Active rooms pulse a `#FF5500` dot and a faint orange ring glow on the avatar over `motion-pulse` (1.2s sine loop). The heartbeat of a busy lobby.
2. **Gift send.** On sending a spoon, a gold `#FFB300` spoon icon rises and scales with `motion-slow / ease-spring` across the live overlay, fading at the top. The celebratory peak moment.
3. **Follow flip.** The follow button pops to ~1.1 and flips fill→outline over `motion-fast / ease-spring` with a snackbar confirm.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, the live pulse becomes a static orange dot, gift animations become a single fade, pops collapse to instant; skeletons go static `#F2F2F2`. No exceptions.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 (UI tokens, §1–9): spooncast.net live computed styles via Playwright
MCP, 2026-05-19. Confirmed: primary CTA `#FF5500` (rgb 255,85,0) 999px pill
12px 28px tall padding 4px 12px; hashtag chip `#F2F2F2` (rgb 242,242,242) +
`#333333` (rgb 51,51,51) 12px radius 24px tall (e.g. `#연애`); avatar
placeholder `#D9D9D9` (rgb 217,217,217) 50%; primary text `#1A1A1A`
(rgb 26,26,26); white bg; font `Pretendard, "Pretendard JP", "Noto Sans TC",
"Noto Sans", ..., system-ui`.

CONFLICT: brief primary `#F23C5C` (coral-pink, an unverified "(verify)" guess)
vs live web brand orange `#FF5500`. Live spooncast.net uses orange on the
primary CTA and brand accents; `#F23C5C` matches Spoon's earlier coral/pink
app branding. Resolved: frontmatter primary_color = verified live `#FF5500`;
coral retained as legacy/app brand in §2.

Tier 2 (narrative): en.wikipedia.org/wiki/Spoon_Radio + ko.wikipedia.org for
Spoon Labs (스푼랩스), founder Choi Hyug-jae (최혁재), March 2016 launch,
audio-live origin, KR/JP/TW presence, PodNovel/podcast expansion. WebSearch
2026-05-19 confirmed identity and old/new-logo history. Not all re-verified
against primary Spoon press; founder/date are widely documented.

Voice samples: `로그인 / 회원가입`, `#연애`, and
`누구나 쉽게 오디오 라이브를 시작할 수 있는 공간` verified live (CTA / chip /
intro text). `지금 라이브 중이에요`, `팔로우했어요`, `스푼을 보냈어요!`,
empty/error copy are ILLUSTRATIVE patterns following Spoon's casual `~요`
social register; not verbatim.

Personas (§13) are fictional archetypes. Any resemblance to specific users is
unintended.
-->
