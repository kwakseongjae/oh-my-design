---
omd: 0.1
brand: LINE
---

# Design System Inspiration of LINE

## 1. Visual Theme & Atmosphere

LINE is the messaging platform that anchors daily life across Japan, Taiwan, Thailand, and Indonesia, and its visual identity reflects exactly that role — confident, friendly, instantly recognizable. The page chrome is bright white with the famous **LINE Green** (`#07b53b`) reserved for the brand mark and the most important interactive moments. Headlines are oversized and bold (`Life on LINE` renders at 70px weight 700, in near-black `#1e1e1e`), creating a high-contrast editorial feel that matches LINE's positioning as a media-style super-app rather than a utility messenger.

The signature interaction primitive is the **fully pill-shaped button** (`border-radius: 50px`) — used for category filters, navigation chips, and CTAs. This is LINE's tactile fingerprint: every clickable surface curves into a complete oval, signaling approachability and a touch-friendly design heritage. Contrast this with Pinkoi's sharp 4px corners or Dcard's modest 8px Material radii — LINE's pill-shape is unmistakably its own.

Typography is **multi-locale system fonts** with the global SF Pro foundation: `SFPro, Arial, "Noto Sans JP", "Noto Sans KR", sans-serif`. The Korean and Japanese fallbacks are first-class — LINE serves localized markets where native font rendering is non-negotiable. There is no custom brand typeface; instead, weight 700 and large display sizes do the visual work. Body text starts at a generous 20px (vs. typical 14-16px), reinforcing the editorial, content-forward atmosphere of LINE's marketing surfaces.

**Key Characteristics:**
- LINE Green (`#07b53b`) reserved for the brand mark and primary "selected" / active states
- Pill-shaped controls: `border-radius: 50px` is the workhorse on buttons, category chips, and navigation
- Weight 700 dominant on headlines (H2 70px, H3 40px), buttons, and category labels
- Editorial-scale hero typography — display headlines 40-70px, body 20px (much larger than commerce sites)
- Locale-aware font stack: `SFPro, Arial, Noto Sans JP, Noto Sans KR` — Japanese and Korean as first-class fallbacks
- Dimmed inactive states via alpha — `rgba(30, 30, 30, 0.7)` for unselected pills (vs. solid `#1e1e1e` active)
- White surface background with bright green accents — never dark mode or muted palettes for the marketing chrome
- Subtle grid: oversized hero images with vertical scroll narrative (services listed below the hero)
- "Life on LINE" voice: aspirational, lifestyle-led, not utility-functional

## 2. Color Palette & Roles

### Brand
- **LINE Green** (`#07b53b`): The signature brand color. Used as button bg for the active/selected state, brand iconography, the LINE logo bubble. RGB: `rgb(7, 181, 59)`.
- **LINE Green Dark** (`#069030`): Inferred hover/pressed state — darker variant for press feedback (estimated, not officially confirmed).
- **Pure White** (`#ffffff`): Default page surface, pill button text on green bg.

### Text & Foreground
- **Near Black** (`#1e1e1e`): Primary headline color, active pill label, body emphasis.
- **Pure Black** (`#000000`): Body text default.
- **Inactive Label** (`rgba(30, 30, 30, 0.7)`): Unselected pill labels, secondary text.
- **Tertiary** (`rgba(30, 30, 30, 0.4)`): Hint text, muted captions (estimated).

### Surface
- **Page White** (`#ffffff`): Default background. LINE marketing rarely uses gray surfaces — content sits on white with rich imagery providing visual interest.
- **Image Overlay**: Hero sections layer text on full-bleed photography; no card chrome required.

### Sectional / Service Brand Accents
LINE products span Communication / Entertainment / Lifestyle / Shopping / Fintech / Business / News categories. Each LINE service (LINE NEWS, LINE MUSIC, LINE Pay, etc.) carries its own accent color in product UIs. Marketing surfaces stay green-anchored; product UIs may use service-specific palettes.

### Swiper Defaults (carousel UI)
- **Swiper Theme** (`#007aff`): iOS system blue used for carousel navigation arrows (`--swiper-theme-color`).
- **Swiper Nav Size**: `44px` (`--swiper-navigation-size`) — touch-friendly circular controls.

## 3. Typography Rules

### Font Stack
```
SFPro, Arial, "Noto Sans JP", "Noto Sans KR", sans-serif
```

LINE leads with `SFPro` (Apple system font) for instant familiarity on iOS/macOS, then falls back to Noto Sans JP and Noto Sans KR for Japanese and Korean content. There is **no custom brand typeface** — system fonts respect each market's native reading habits.

### Weights
- **700 (bold)**: The dominant weight. All headlines, all buttons, all category pills, all emphasis. LINE almost never uses weight 400 or 500 for visible interactive text.
- **400 (regular)**: Reserved for long-form body copy and supporting captions.

### Size Scale (verified live on `line.me`)
| Use | Size | Weight |
|---|---|---|
| Body default | `20px` | 400 |
| Hero subtitle | `20px` | 400-700 |
| H1 (page title) | `20px` | 700 |
| H3 (service names — LINE NEWS, LINE MUSIC) | `40px` | 700 |
| H2 (hero — "Life on LINE") | `70px` | 700 |

The size jumps are aggressive: 20px body → 40px section heads → 70px hero. There is no quiet middle tier (no 24/32 between body and 40). Headlines exist to dominate the viewport, not to fill it.

### Conventions
- **No letter-spacing tweaks** — system defaults trusted.
- **`font-style: italic` not used** in marketing chrome.
- **No tabular numerals** — body type flows naturally.
- **All-caps reserved** for the LINE wordmark itself.

## 4. Component Stylings

### Buttons / Pills (`.productCategory`, generic CTAs)
The signature LINE control. Verified live on `line.me`:

- `border-radius: 50px` — fully pill-shaped (not 4px or 8px — always 50px)
- `padding: 8px 15px` for compact category pills
- `font-weight: 700`, default `font-size: 14-16px`
- **Active state**: bg `#07b53b` (LINE Green), text `#ffffff`
- **Inactive state**: bg `transparent`, text `rgba(30, 30, 30, 0.7)`
- **Hover**: text gains opacity (transitions to `rgba(30, 30, 30, 1)`)
- No shadow, no border on the inactive state

### Hero Sections
- Full-bleed background image (typically lifestyle photography)
- Centered overlay text (white or near-black depending on background contrast)
- Hero CTA below the headline, often using app store badges (Apple, Google Play, Desktop)

### Navigation
- Sticky horizontal header: LINE logo left, page-section nav center, language switcher right
- Active nav link gets a `2px` solid `#1e1e1e` underline accent
- Nav items: `font-weight: 700`, `font-size: 16px`, color `#1e1e1e`
- Background: `#ffffff` with subtle bottom border on scroll

### App Download CTAs
Iconified app store badges (App Store, Google Play, Desktop) instead of textual buttons:
- Square white tiles with thin `1px` border, `~12px` radius
- 56px square (touch-friendly), inline icon for the platform
- Hover: background tints to a very light green or gray

### Scroll Indicators
- Centered "Scroll" label below the hero with a subtle vertical line animation
- Reinforces the magazine-like vertical narrative

### Cards

LINE marketing chrome rarely uses traditional card containers — content sits directly on photographic backgrounds. When cards do appear (LINE STORE, LINE SHOPPING, in-product UI), they follow a minimal pattern:

**Service / Feature Card**
- Background: `#ffffff` on the gray content tier, OR full-bleed image with overlay text
- Radius: `12px` (medium-rounded — softer than the marketing pill buttons would suggest)
- Padding: `20–24px`
- Border: `1px solid rgba(0, 0, 0, 0.06)` — whisper-light
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.04)` for subtle elevation only
- Service icon (top-left, 32–40px) + title (16px weight 700 `#1e1e1e`) + 1-line description (14px weight 400 `rgba(30,30,30,0.7)`)

**Image-Led Card (LINE STICKERS, LINE WEBTOON tiles)**
- Image fills 70-80% of the card
- Title strip at bottom with `rgba(0, 0, 0, 0.6)` overlay + white text
- `12px` radius on the outer container, image inside `border-radius: 12px 12px 0 0`

**App Download Tile**
- Square tile, 56px touch target
- White bg, `1px` border, `~12px` radius
- Platform icon (Apple / Google Play / Desktop) centered

**Anti-pattern**
- Don't apply the pill `50px` button radius to cards — that's reserved for interactive controls only.

## 5. Layout Principles

### Spacing
LINE marketing pages use **vertical sections of generous height** — each service block (LINE NEWS, LINE MUSIC, etc.) takes a full viewport scroll. Section paddings are large (typically 80-120px vertical).

| Use | Padding |
|---|---|
| Pill button | `8px 15px` |
| Section vertical | `80–120px` |
| Hero vertical | `100vh` (full viewport) |

### Grid
- Single-column hero with overlay text
- Service blocks use full-width imagery + centered or left-aligned text overlay
- Footer uses 3-4 column grid for links

### Density
LINE is **low-density, high-impact**. Each viewport scroll reveals one service or one message. Don't pack multiple features into a single fold — let imagery dominate, let typography shout.

## 6. Depth & Elevation

LINE marketing chrome is **almost entirely flat**. Buttons have no shadow. Cards (when used) have no shadow. The visual depth comes from full-bleed photography behind the chrome.

### Where shadow does appear
- **Sticky header on scroll**: very subtle `0 1px 0 rgba(0, 0, 0, 0.1)` bottom border (or inset shadow)
- **Modal / popup**: `0 4px 24px rgba(0, 0, 0, 0.15)` (estimated — LINE rarely uses modals on marketing surfaces)
- **App download icon hover**: subtle lift via `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)`

### Z-Index Hierarchy
- Sticky header above scroll content
- Modal/popup above all chrome
- Toast/snackbar at the highest level

### Animation
- Scroll-triggered fade-in for hero text and service blocks
- Pill hover transition: `0.2s ease` color/bg transition
- Image parallax: subtle vertical translate on scroll within hero

## 7. Do's and Don'ts

- **DO** use weight 700 for everything visible — headlines, buttons, pills, nav, captions. LINE doesn't whisper.
- **DON'T** use weight 300 or 400 for interactive text. Buttons that look quiet read as broken in LINE's voice.
- **DO** use pill-shaped buttons (`border-radius: 50px`). This is LINE's tactile signature.
- **DON'T** use 4px, 8px, or any "rectangular" radius for primary CTAs — that breaks the brand language entirely.
- **DO** reserve LINE Green (`#07b53b`) for the brand mark, the active selected state, and the primary "Download LINE" CTA. It's a finite signal.
- **DON'T** use LINE Green for warnings, links, or general accents — it dilutes the brand association.
- **DO** lead with the locale-aware font stack: `SFPro, Arial, Noto Sans JP, Noto Sans KR` — Japanese and Korean as first-class.
- **DON'T** load a custom web font. LINE's audience reads on phones across many markets; system fonts are fastest and most native.
- **DO** use oversized display headlines (40-70px) with high vertical spacing. LINE's marketing is editorial, not utilitarian.
- **DON'T** pack a viewport with multiple competing CTAs. One scroll = one service block = one message.
- **DO** dim inactive UI with alpha (`rgba(30, 30, 30, 0.7)`) instead of swapping to a different gray hex.
- **DON'T** introduce shadow to flatten interactive controls. LINE chrome is overwhelmingly flat — depth comes from photography.

## 8. Responsive Behavior

### Breakpoints (inferred from line.me layout shifts)
| Width | Behavior |
|---|---|
| Desktop `>1024px` | Full nav visible, hero at 70px, services full-width with overlay text |
| Tablet `768–1024px` | Nav condenses, hero shrinks to ~50px, service blocks stack |
| Mobile `<768px` | Hamburger nav, hero scales to ~40px, service blocks become full-mobile views |

### Touch & Mobile
- Pill buttons stay touch-friendly at all sizes (min `44px` tappable height per Apple HIG)
- App download badges remain prominent on mobile (top of fold)
- Image-heavy hero sections gracefully crop on portrait orientation

### Image Behavior
- Hero photography: full-bleed, lazy-loaded, art-directed for desktop vs. mobile crops
- Service icons: vector SVG (LINE NEWS, LINE MUSIC, LINE Pay icons all single-color or 2-tone)
- Carousel (`swiper`-based): horizontal scroll with `44px` circular nav arrows in `#007aff`

## 9. Agent Prompt Guide

### Quick Color Reference
- LINE Green (brand / active CTA): `#07b53b` (`rgb(7, 181, 59)`)
- Headline / active text: `#1e1e1e`
- Inactive text: `rgba(30, 30, 30, 0.7)`
- Body text: `#000000` (or `#1e1e1e`)
- Page bg: `#ffffff`
- Carousel theme: `#007aff` (iOS system blue)

### Example Component Prompts
- "Create a LINE-style category pill: `border-radius: 50px`, `padding: 8px 15px`, `font-weight: 700`, `font-size: 14px`. Active state: bg `#07b53b`, white text. Inactive: transparent bg, `rgba(30, 30, 30, 0.7)` text. No shadow, no border. Smooth `0.2s ease` transition on color/bg."
- "Build a LINE hero: full-viewport white bg with full-bleed lifestyle photography behind. Centered headline 'Life on LINE' at 70px weight 700 color `#1e1e1e` (or white if photo is dark). Subhead at 20px weight 400 below. Three app download icon tiles (Apple, Google, Desktop) — 56px squares, `12px` radius, thin border, no fill."
- "Design a LINE service card: full-bleed product screenshot on left, oversized `40px` weight 700 service name (e.g., 'LINE NEWS') on right with brand accent color, supporting copy at 20px weight 400 below. No card chrome — section uses background color contrast for separation."
- "Create a LINE sticky nav: white bg, 56-64px height, LINE logo wordmark left, horizontal pill nav center (active item gets `#1e1e1e` 2px underline), language switcher (globe icon + locale code) right. On scroll, add a subtle `0 1px 0 rgba(0, 0, 0, 0.1)` bottom shadow."
- "Build a LINE 'Download Now' primary CTA: `border-radius: 50px`, bg `#07b53b`, white text, `font-weight: 700`, `padding: 16px 32px`, `font-size: 18px`. Hover: bg darkens to `#069030`. Active: scale `0.98`. Add LINE icon (the speech bubble) to the left of the text label."

### Iteration Guide
1. **Always default to weight 700** for visible interactive text. LINE never whispers.
2. **Pill radius (50px) is non-negotiable** for buttons and chips — it's the brand signature.
3. **LINE Green (`#07b53b`) is rare** — use it for the brand mark, the single primary CTA, and the active "selected" state. Nothing else.
4. **Use the locale-aware font stack with Noto Sans JP and Noto Sans KR** in the fallback chain — never hardcode a single Latin-only font family.
5. **Body type is 20px** (not 14-16px). Editorial scale, not utility scale.
6. **Hero typography 40-70px** at weight 700. No middle tier between 20px and 40px — LINE's hierarchy jumps.
7. **No shadow on the modern button system** — depth comes from photography behind the chrome, not from elevation primitives.
8. **Use alpha (`rgba(30, 30, 30, 0.7)`) for inactive states**, not a different gray hex. Maintains color-family coherence.
9. **One viewport = one message** — let each service block breathe with full-screen vertical sections.
10. **Service-specific color accents** (LINE NEWS green, LINE MUSIC pink, etc.) belong inside product UIs — marketing chrome stays green-anchored.

---

## 10. Voice & Tone

LINE's marketing voice is warm, aspirational, and lifestyle-forward — *"Life on LINE"* is the whole stance. The product is framed not as utility but as **infrastructure for everyday moments**: keeping in touch with family, paying a friend back, reading news on the commute, sending a sticker to soften a pricing question. The voice is confident but never boastful, friendly but never childish, and locale-aware enough to speak differently to Tokyo, Taipei, Bangkok, and Jakarta audiences while keeping brand character consistent.

| Context | Tone |
|---|---|
| Headlines | Short, declarative, aspirational. "Life on LINE." "Always at your side." No hedge words, no superlatives. |
| CTAs | Imperative verb + noun ("Download LINE", "Start chatting"). Plain, not clever. |
| Service descriptions | Lifestyle-framed ("Discover what's happening around you") — never feature-listed ("40 million news articles"). |
| Error / system messages | Direct and blameless in each locale's polite register (Japanese keigo 丁寧語; Korean 존댓말). |
| Onboarding | Friendly first-person plural ("Let's get started"), never technical jargon. |
| Sticker store copy | Playful but disciplined — LINE stickers ARE the emoji, so external emoji flooding is unnecessary. |
| Push notifications | Context-aware; news pushes, friend-message pushes, and payment pushes all differ in register. |
| Business / LINE for Business surfaces | Slightly more formal, reads closer to a B2B tone — a deliberate shift the consumer voice does not make. |

**Forbidden phrases.** "Revolutionary", "unparalleled", "next-generation", "world-class". In Japanese user-facing copy: avoid カタカナ-heavy jargon like イノベーティブ, ディスラプティブ. In Korean: avoid 혁신적인, 완벽한 as self-descriptors. Generic tech-bro emoji (🚀 ✨ 💡) on product surfaces — LINE has its own sticker/sticon ecosystem; external emoji dilute it.

## 11. Brand Narrative

LINE was born in 2011 in Japan in response to the Tōhoku earthquake, when disrupted phone networks left people unable to reach family and friends. The original product was a way to stay connected when infrastructure failed — and that founding moment still shapes the brand. Being "always at your side" is not a marketing phrase; it is a literal design goal inherited from how the app was conceived.

Over the following decade LINE grew from a crisis-era messenger into a **super-app that anchors daily life** across Japan, Taiwan, Thailand, and Indonesia: payments, news, music, manga, mobile commerce, business tools — all held together by a single chat metaphor. In October 2023, LINE Corporation and Yahoo Japan merged into **LY Corporation**, reflecting LINE's scale as Japan's de facto communication and lifestyle infrastructure.

What LINE refuses: the utility-minimalism of Western messengers (WhatsApp, iMessage), the engagement-bait aesthetics of most content super-apps, and the cold enterprise blue of Japanese incumbents. What it embraces: full-bleed lifestyle photography, oversized editorial typography, finite use of LINE Green, and a **sticker-first emotional vocabulary** that respects local cultural register in every market it serves.

## 12. Principles

1. **"Always at your side" is a design constraint.** The app must work when connectivity is poor. Offline-first patterns, light payloads, minimal shell — interfaces that load in 1s on a train in rural Hokkaido or a subway in Bangkok.
2. **LINE Green is a finite signal.** `#07b53b` appears only for the brand mark, the primary "Download LINE" CTA, and the active-selected state. Used decoratively, it stops meaning anything.
3. **Weight 700 or weight 400. No middle.** Hierarchy jumps are aggressive by design — body 20px → service head 40px → hero 70px. Quiet in-between weights undermine the editorial voice.
4. **Pill radius (50px) is the tactile signature.** Buttons, chips, category filters — always pills on marketing surfaces. A 4px or 8px corner breaks the brand language entirely.
5. **Photography carries depth; chrome stays flat.** Shadows are absent from interactive controls. Hero imagery is the elevation system.
6. **Locale fidelity is first-class, not a fallback.** Japanese, Korean, Thai, Indonesian, Traditional Chinese rendering — every market's native font stack and cultural register matter equally to English.
7. **One viewport = one message.** Scrolling a LINE marketing page is chapters, not feature bullets. Each service gets its own 100vh block with imagery + one CTA.
8. **The sticker ecosystem is the emoji vocabulary.** External emoji (🚀 ✨ 💡) are banned on product surfaces; LINE has its own emotional primitives (Brown, Cony, Moon + the creator sticker economy).

## 13. Personas

*Personas below are fictional archetypes informed by publicly described LINE user segments across its four primary markets (JP / TW / TH / ID), not individual people.*

**Haruka Takeda, 34, Tokyo.** Product manager at a consumer electronics company. Uses LINE for everything — family group chat with her parents in Osaka, splitting dinner bills with colleagues via LINE Pay, checking LINE NEWS on the Yamanote Line commute, sending Brown stickers to her 6-year-old daughter. Expects the app to Just Work in tunnels where signal drops. Does not use other messengers except for overseas work contacts on Slack.

**Chih-Wei Chen, 27, Taipei.** Designer at a startup. Uses LINE primarily for Taiwanese friends and family; follows international accounts on Instagram for design inspiration. Watches LINE WEBTOON daily at lunch. Pays via LINE Pay at 7-Eleven and sees the QR flow as unremarkable — it's simply how paying works now. Appreciates that LINE respects Traditional Chinese font rendering in a way that apps designed primarily in San Francisco don't.

**Somchai Boonmee, 41, Bangkok.** Small business owner (restaurant). Uses LINE Official Account to message his regulars about daily specials. Would be lost running his business without LINE OA as a CRM substitute. Uses LINE stickers to soften direct pricing questions — Thai business communication norms reward warmth, and a Cony sticker alongside an invoice changes the emotional register entirely.

**Ibu Dwi Lestari, 23, Jakarta.** University student. Opens LINE primarily for friend group chats and LINE TODAY (news feed). Uses LINE stickers more than typed emoji. Treats the app as her close-friends social layer while Instagram handles the broader social feed. Notices immediately when a brand uses English-only copy in Indonesia — it reads as lazy localization and she mentally downgrades the company.

## 14. States

| State | Treatment |
|---|---|
| **Empty (friend list, no contacts)** | White canvas. One near-black line of body copy (20px weight 400) in the local register explaining what "adding friends" does in LINE. One pill CTA "Add friends" at the bottom of the viewport. No illustration. |
| **Empty (chat, no messages)** | White canvas with centered 14px `rgba(30,30,30,0.7)` hint in the local register ("Say hi with a sticker"). Sticker picker button is more visible than the text input. |
| **Loading (chat messages)** | Message bubbles render as `#f5f5f5` blocks at their final width and height. 1.2s shimmer. Sender avatar as circular gray placeholder. Timestamp skeletons are narrower than final width — never wider. |
| **Loading (sticker store)** | Sticker tiles render as 1:1 grayscale squares matching the final grid. Shimmer pass over the whole grid, not per tile — faster visual scan. |
| **Error (message send failed)** | Red exclamation circle (`#e50019` variant) next to the pending bubble. Tap to retry inline. Never a modal — the failure stays attached to the message that failed, where it happened. |
| **Error (service unavailable)** | Top banner in warm gray (`#f5f5f5`) with near-black text. One sentence + retry pill. Banner never blocks content. |
| **Error (network)** | Inline banner at top of the chat view: "Not connected". LINE's core brand promise is connectivity; the banner is honest about when the promise is unmet and disappears without fanfare when it returns. |
| **Success (payment sent via LINE Pay)** | Full-screen LINE Green (`#07b53b`) confirmation with white checkmark. Amount + recipient in 40px weight 700. Single "Done" pill CTA. This is the one place the brand green floods the screen — confidence about money, not delight about it. |
| **Success (sticker purchased)** | Brief inline toast: "Stickers added". 3s auto-dismiss. No celebratory illustration — the sticker itself, appearing in the sticker picker immediately, is the reward. |
| **Skeleton** | `#f5f5f5` blocks at exact final dimensions. 1.2s shimmer. Never on price/amount fields — those show the proper locale-formatted placeholder (`¥ -`, `NT$ -`, `฿ -`, `Rp -`). |
| **Disabled** | Opacity on text and fill together. Disabled pill keeps its 50px radius — never flattens to a rectangle. |
| **Read receipt (既読 / 읽음 / อ่านแล้ว)** | Tiny 11px `rgba(30,30,30,0.5)` label below the message bubble on the sender's side. Culturally significant in JP / KR / TW markets; never hide this. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle commits, selection state |
| `motion-fast` | 150ms | Pill hover/press feedback, sticker tap scale |
| `motion-standard` | 250ms | Sheet rise, modal appear, chat bubble send |
| `motion-slow` | 400ms | Full-screen success (payment confirmation) |
| `motion-page` | 350ms | Navigation push/pop in app shell |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Things arriving — sheets, toasts, pushed views |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 0.9, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |
| `ease-sticker` | `cubic-bezier(0.34, 1.3, 0.64, 1)` | **Reserved.** Sticker send animation only — soft overshoot, never on other elements. |

**Signature motions.**

1. **Sticker send.** When a sticker is sent, it scales from `0.8` → `1.05` → `1.0` over `motion-standard` with `ease-sticker`. The tiny overshoot is the only spring in the product, and it matches the emotional register of sending a Brown or Cony to a friend.
2. **Pill state transition.** Category pills and buttons use `motion-fast` on `background-color` and `color` simultaneously. Never transition one without the other — creates a weird half-state where text and surface disagree.
3. **Hero scroll parallax.** On marketing pages, hero photography translates vertically at `0.5×` the scroll rate. Text stays fixed. This creates the "infrastructure of your life" feeling of content flowing past you rather than being navigated.
4. **Payment success.** The full-screen green confirmation (§14) fades in at `motion-slow` with `ease-enter`. The checkmark draws as a path over 500ms. No spring — payment is about confidence, not delight.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`, and the sticker overshoot flattens to a simple scale-to-1.0 appearance. The app stays fully functional; there is no delightful motion at the cost of accessibility.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch (2026-04-19):
- https://line.me/en/ — confirms marketing taglines "LINE—always at your side"
  and "More than just a messenger app. LINE is new level of communication, and
  the very infrastructure of your life". Also confirms the multi-locale footprint
  through published language options (EN / JP / KR / TW / TH / ID).
- https://engineering.linecorp.com/en — confirms LINE Corporation rebranded to
  LY Corporation on 2023-10-01 (footer: "© LY Corporation"), and publishes
  engineering culture values: "Take Ownership", "Be Open", "Trust & Respect".
- https://designsystem.line.me/ — public entry point for LINE Design System
  confirmed to exist. Detailed sub-pages (e.g., LDSM at designsystem.line.me/LDSM/)
  are access-restricted (returned HTTP 403), so no further specific token values
  could be verified directly.

Base DESIGN.md (sections 1–9) is the source for all token-level claims including
LINE Green #07b53b, pill radius 50px, weight-700 dominance on interactive text,
the SFPro / Arial / Noto Sans JP / Noto Sans KR font stack, and the 20 / 40 / 70
size scale.

Not independently verified via WebFetch — widely documented public facts used:
- LINE launched in 2011 in Japan (originally by NHN Japan Corporation), built
  in response to the 2011 Tōhoku earthquake when phone networks were disrupted.
- The LINE Stickers ecosystem (Brown, Cony, Moon plus a creator sticker economy)
  is a culturally significant brand primitive across LINE's primary markets.
- LINE's primary-market footprint (Japan, Taiwan, Thailand, Indonesia) is
  reported consistently in tech press and in LY Corporation's own communications.

Personas (§13) are fictional archetypes informed by publicly described LINE
user segments across the four primary markets. Names are illustrative and do
not refer to real people.

Interpretive claims (e.g., "the 2011 earthquake origin shaped the 'always at
your side' brand positioning", or the framing of LINE Green as a "finite
signal") are editorial readings that connect public facts; they are not
directly sourced LINE statements.
-->

