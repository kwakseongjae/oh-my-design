---
id: smartnews
name: SmartNews
country: JP
category: consumer-tech
homepage: "https://www.smartnews.com"
primary_color: "#EB0B22"
logo:
  type: github
  slug: smartnews
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#EB0B22"
    brand: "#EB0B22"
    canvas: "#FFFFFF"
    foreground: "#000000"
    muted: "#666666"
    on-primary: "#FFFFFF"
    surface: "#F5F5F5"
  typography:
    family: { sans: "system-ui", mono: "system-ui" }
    headline: { size: 18, weight: 700, lineHeight: 1.30, use: "Bold scannable article headlines" }
    body:     { size: 16, weight: 400, lineHeight: 1.50, use: "Article preview / body text" }
    meta:     { size: 13, weight: 400, lineHeight: 1.40, use: "Source name, timestamp, channel labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    card: "minimal / 1px separation on light-neutral feed"
  components_harvested: true
  components:
    tab-channel: { type: tab, bg: "#FFFFFF", fg: "#666666", active: "text #000000 bold, #EB0B22 underline bar", use: "Swipeable channel bar — core navigation" }
    button-primary: { type: button, bg: "#EB0B22", fg: "#FFFFFF", radius: "8px", use: "Key conversion action (Get the app, Subscribe)" }
    button-secondary: { type: button, bg: "#FFFFFF", fg: "#000000", border: "1px solid neutral", radius: "8px", use: "Lower-emphasis action" }
    button-download: { type: button, bg: "#000000", fg: "#FFFFFF", radius: "12px", font: "/ 700", use: "App Store / Google Play download tile" }
    card-article: { type: card, bg: "#FFFFFF", fg: "#000000", radius: "8px", use: "Headline + source + timestamp + thumbnail feed unit" }
    card-image: { type: card, fg: "#FFFFFF", use: "Featured story — photo fill, white headline over dark scrim" }
    badge-breaking: { type: badge, bg: "#EB0B22", fg: "#FFFFFF", radius: "4px", font: "/ 700", use: "Breaking / live emphasis, uppercase" }
---

# Design System Inspiration of SmartNews

## 1. Visual Theme & Atmosphere

SmartNews (スマートニュース) is the machine-learning news-discovery app born in Japan and now read across 150+ countries — and its visual identity is built around a single, unmissable asset: a **bright, urgent red** (`#EB0B22`). News is time-critical and attention-competitive, and SmartNews's brand red functions like a newsstand flag or a breaking-news banner: it cuts through, it says *now*, it says *important*. The red is paired with crisp black-and-white for maximum legibility, because the entire premise of the product is **delivering the world's quality information to the people who need it**, fast, even on a poor connection (the app's "SmartView" technology renders articles instantly under bad signal). The aesthetic is therefore high-contrast, clean, and confident — closer to a well-designed newspaper masthead than a soft consumer app.

The atmosphere is **fast, trustworthy, and information-dense-but-scannable**. SmartNews is a *discovery* engine, not a search box: its tab-and-channel layout lets a reader swipe across topics (Top, World, Politics, Tech, Sports…) and scan headlines at speed. The design supports that scanning with clear typographic hierarchy, generous tap targets, and the red used as the orienting brand signal (active tab, brand mark, breaking emphasis) against an otherwise neutral black-on-white canvas. There is no decorative excess; every element earns its place because a news reader's attention is the scarcest resource.

Typography defers to **clean system fonts** for instant, native rendering of Japanese, English, and dozens of other languages across the app's global footprint — legibility and speed beat any bespoke typeface for a product whose job is to get words in front of eyes immediately. The wordmark itself ships in black or white depending on background brightness, with the red reserved for the brandmark and key accents. The overall message: this is serious, quality information, delivered fast and fairly — and the design is the confident, high-contrast, red-flagged frame that gets you to it.

**Key Characteristics:**
- **SmartNews Red** `#EB0B22` — a bright, urgent red as the singular brand signal (newsstand-flag energy)
- High-contrast black-and-white canvas — maximum legibility for fast headline scanning
- Wordmark in **black or white** depending on background brightness; red reserved for the brandmark + key accents
- **Discovery, not search** — tab/channel layout (Top / World / Politics / Tech …) built for swipe-and-scan
- Clean **system fonts** for instant native rendering across 150+ countries and many languages
- Speed-first: "SmartView" instant article rendering even under poor connectivity informs the lightweight aesthetic
- No decorative excess — every element earns its place; the reader's attention is scarce
- Information-dense but scannable: clear hierarchy, generous tap targets, neutral canvas + red orientation cues
- Trustworthy-news register: confident, clean, fair — combating clutter, slowness, and filter-bubble bias

## 2. Color Palette & Roles

SmartNews's brand is anchored on a single strong red against black-and-white. Values below come from SmartNews's documented brand red plus the high-contrast neutral system the app uses.

### Brand
- **SmartNews Red** (`#EB0B22`): The primary brand color — brandmark, active/selected tab indicator, breaking-news emphasis, key accents. Bright and urgent; the singular brand signal.
- **Black** (`#000000` / near-black): Primary text, wordmark on light backgrounds, dense headline type.
- **White** (`#FFFFFF`): Page surface, wordmark on dark/photo backgrounds, card base.

### Surface
- **White** (`#FFFFFF`): Default content surface — headlines and previews on white for legibility.
- **Light Neutral** (`#F5F5F5`–`#FAFAFA`): Subtle section/background separation between channels and cards.
- **Image Tiles**: Article thumbnails carry their own photography; a dark scrim supports white overlay text where needed.

### Text
- **Primary Text** (`#000000` / near-black): Headlines, body, primary labels — maximum contrast for scanning.
- **Secondary / Meta** (mid-gray, e.g. `#666666`): Source name, timestamp, channel labels.
- **On-Red Text** (`#FFFFFF`): White text/labels on the red brand surfaces.

### Accent / Status
- The red doubles as the **emphasis/alert** color (breaking, live). Secondary status colors stay restrained so the brand red keeps its urgency.

## 3. Typography Rules

### Font Stack
SmartNews defers to clean platform system fonts for instant, native, multi-language rendering — Japanese, English, and many others must render perfectly at speed across the global app.
```
-apple-system, system-ui, "Segoe UI", Helvetica, Arial, "Hiragino Kaku Gothic ProN", "Noto Sans", sans-serif
```
No bespoke brand webfont: in a news app, legibility and load-speed beat a custom typeface every time.

### Conventions
- **Bold, scannable headlines** — headline weight is heavier so a reader can scan a channel of stories at a glance.
- **High contrast always** — near-black text on white; the design never sacrifices legibility for style.
- **Clear hierarchy**: headline → source/timestamp → preview. Metadata stays small and gray so headlines lead.
- **Multi-language discipline**: the type system must hold up in Japanese, English, and dozens of locales — system fonts ensure it does.
- Tabular/compact where needed (channel labels, timestamps) but headlines get room to breathe.

## 4. Component Stylings

### Tabs / Channels

**Channel Tab (the signature component)**
- Active text: near-black `#000000`, bold
- Active indicator: SmartNews Red `#EB0B22` underline/bar
- Inactive text: mid-gray `#666666`
- Background: `#FFFFFF`
- Use: The horizontal swipeable channel bar (Top / World / Politics / Tech …) — the core navigation primitive

### Buttons

**Primary**
- Background: SmartNews Red `#EB0B22`
- Text: `#FFFFFF`
- Radius: soft rounded (`8px`–pill, used sparingly)
- Use: The key conversion action (Open / Get the app / Subscribe to SmartNews+)

**Secondary / Outline**
- Background: `#FFFFFF`
- Text: `#000000`
- Border: `1px solid` neutral
- Radius: soft rounded
- Use: Lower-emphasis actions

**App-store / Download Tile**
- Background: dark (`rgba(0,0,0,0.3)`+) or black
- Text: `#FFFFFF`, weight 700
- Radius: `12px`
- Use: App Store / Google Play download badges on marketing surfaces

### Cards

**Article Card (headline-led)**
- Background: `#FFFFFF`
- Text: near-black `#000000` headline + mid-gray meta
- Radius: soft rounded / minimal
- Use: Headline + source + timestamp + thumbnail; the scannable unit of a channel feed

**Image-led Card**
- Background: photo fills the tile
- Text: white headline over a dark scrim
- Use: Featured/top stories with strong imagery

### Badges

**Breaking / Live Badge**
- Background: SmartNews Red `#EB0B22`
- Text: `#FFFFFF`, bold, often uppercase
- Radius: small / pill
- Use: Breaking-news and live emphasis — the red's most literal job

## 5. Layout Principles

### Density
SmartNews is **information-dense but scannable**. A channel surfaces many headlines, but clear hierarchy (bold headline, small gray meta) and generous tap targets keep it readable at swipe speed. The reader should be able to triage a channel in seconds.

### Structure
- Top-level: swipeable horizontal **channel/tab bar** (the signature navigation)
- Within a channel: a vertical feed of headline-led article cards
- Imagery used purposefully (top stories, featured) but headlines lead the scan
- Neutral black-on-white canvas with red as the orientation/emphasis signal

## 6. Depth & Elevation

SmartNews reads **clean and largely flat** — news content needs legibility, not decoration. Depth comes from card separation on a light neutral background and from purposeful imagery, not heavy shadows.

- Cards: minimal shadow / 1px separation on a light-neutral feed background
- Image tiles: dark scrim over photos for white overlay headline legibility
- Dropdowns / modals / app-store badges: light shadow where it aids affordance
- The red is the loudest thing on screen; everything else stays restrained

## 7. Do's and Don'ts

- **DO** make SmartNews Red (`#EB0B22`) the singular brand signal — active tab, brandmark, breaking emphasis. **DON'T** scatter multiple bright colors; the red's urgency depends on its scarcity.
- **DO** keep the canvas high-contrast black-on-white for fast scanning. **DON'T** use low-contrast or muted text for headlines — legibility is the product.
- **DO** lead with bold, scannable headlines and small gray metadata. **DON'T** bury the headline under chrome.
- **DO** use the swipeable channel/tab bar with a red active indicator. **DON'T** hide navigation — discovery across channels is the core loop.
- **DO** use clean system fonts for instant multi-language rendering. **DON'T** load a heavy bespoke webfont — speed and legibility win in news.
- **DO** keep the design lightweight and fast (SmartView ethos). **DON'T** add decorative weight that slows the read.
- **DO** put the wordmark in black or white per background brightness. **DON'T** force the red wordmark onto a clashing background.
- **DO** reserve red for emphasis/breaking. **DON'T** dilute it into a general accent everywhere.

## 8. Responsive Behavior

| Width | Behavior |
|---|---|
| Mobile (primary) | The native app context: swipeable channel bar + vertical headline feed; generous tap targets; SmartView instant rendering |
| Tablet | Wider feed, possibly multi-column story grid; channel bar persists |
| Desktop / web | Marketing + web reader: hero with app-download badges, channel/story grid; high-contrast headline-led layout |

### Touch & Mobile
- SmartNews is **mobile-first** — the channel swipe and headline scan are designed for thumbs
- App-store download tiles (`12px` radius, weight-700 white text on dark) are prominent on marketing surfaces
- Lightweight rendering for poor-connectivity contexts is a first-class concern, not an edge case

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / emphasis: SmartNews Red `#EB0B22`
- Text: near-black `#000000`; meta mid-gray `#666666`
- Surface: `#FFFFFF`; subtle separation `#F5F5F5`
- On-red text: `#FFFFFF`
- Radius: soft rounded; app-store tiles `12px`

### Example Component Prompts
- "Create a SmartNews channel tab bar: horizontal swipeable tabs (Top / World / Tech …) on white, active tab bold near-black with a `#EB0B22` red underline indicator, inactive tabs mid-gray `#666666`. This is the signature navigation."
- "Build a SmartNews article card: white bg, bold near-black headline, small gray source + timestamp row, right-aligned thumbnail, minimal chrome. Scannable in under a second."
- "Design a SmartNews breaking badge: solid `#EB0B22` red bg, white bold uppercase text, small radius. Use only for breaking/live — the red is a scarce signal."
- "Create a SmartNews app-download section: dark app-store + Google-Play tiles (`12px` radius, white weight-700 text), on a high-contrast headline-led hero. Optional red primary CTA `#EB0B22`."

### Iteration Guide
1. **Red (`#EB0B22`) is the singular brand signal** — active tab, brandmark, breaking. Keep it scarce.
2. **High-contrast black-on-white** — legibility is the product; never mute the headlines.
3. **Bold scannable headlines + small gray meta** — the reader triages a channel in seconds.
4. **Swipeable channel/tab bar with red active indicator** — the core navigation.
5. **Clean system fonts** — instant multi-language rendering; no heavy webfont.
6. **Lightweight and fast** — SmartView ethos; don't slow the read with decoration.
7. **Wordmark black or white per background**; red for the brandmark/emphasis only.

---

## 10. Voice & Tone

SmartNews's voice is **clear, neutral, and trustworthy** — fitting a product whose mission is *delivering the world's quality information to the people who need it* and whose explicit purpose is to help readers escape the filter bubble and find trustworthy news. The copy is journalistic in register: factual, unsensational, and fair. It does not editorialize, does not clickbait, and does not adopt the breathless urgency of low-quality news aggregators — its credibility depends on restraint. Where the *visual* brand is loud (the red flag), the *verbal* brand is disciplined and calm, because trust in news comes from sounding even-handed. In Japanese the register is polite-neutral (です・ます調 / 報道調); in English it's plain journalistic standard; across locales it stays even-handed and unhyped.

| Context | Tone |
|---|---|
| Headlines (chrome around UGC) | SmartNews frames publisher headlines; its own chrome copy stays neutral and factual. |
| Channel/tab labels | Single clear nouns — Top, World, Politics, Tech, Sports. No editorializing. |
| CTAs | Plain imperative — `Get the app`, `アプリで開く`, `Subscribe`. No hype. |
| Notifications | Context-aware and restrained — breaking pushes are factual, not breathless. |
| Empty / error states | Calm, blameless, one sentence + fix. |
| Subscription (SmartNews+) | Value-clear, not pushy; respects the reader's choice. |
| Mission/about copy | Earnest about quality information and combating the filter bubble — the one place the brand states its values directly. |

**Forbidden patterns.** Clickbait and sensationalism, editorializing in product chrome, breathless urgency that fakes importance, hype superlatives, FOMO pushes, and anything that undermines the even-handed, trustworthy register news credibility depends on. The red carries urgency visually so the words don't have to.

**Voice samples.**
- "Delivering the world's quality information to the people who need it." — SmartNews's stated mission. <!-- verified: about.smartnews.com/en/, WebFetch 2026-05-19 -->
- SmartNews frames its purpose around helping users find trustworthy news beyond the filter bubble. <!-- verified: about.smartnews.com mission framing + brandfetch summary, 2026-05-19 -->
- `Top` / `World` / `Tech` — neutral single-noun channel labels. <!-- illustrative: representative of SmartNews's channel taxonomy; exact live labels vary by locale -->

## 11. Brand Narrative

SmartNews was incorporated in Tokyo on **June 15, 2012** (originally as Gocro, Inc.) by **Ken Suzuki (鈴木健)** — a University of Tokyo Ph.D. in complex systems — and engineer **Kaisei Hamamoto (浜本階生)**. The founding insight was that news in the early-2010s mobile era was broken by **clutter, slowness, and bias**, and that the fix was not better *search* but a mathematically-driven **discovery engine**: machine-learning models that evaluate millions of articles and social signals to surface the most important stories, rather than relying on human editors or an engagement-maximizing algorithm. The first app shipped free and ad-supported, using proprietary **SmartView** technology to render articles instantly even under poor connectivity — and it hit a million monthly active users in Japan within a year. <!-- source: SmartNews company history via WebSearch 2026-05-19 (businessmodelcanvas, restofworld, about.smartnews.com leadership) -->

SmartNews's design language is the visible form of that mission. **One**, *quality information must cut through* — hence the loud, urgent brand red that flags importance like a newsstand banner, against a clean high-contrast canvas. **Two**, *the reader's attention is scarce and the connection may be poor* — hence the lightweight, scannable, system-font, SmartView-fast aesthetic; nothing decorative is allowed to slow the read. **Three**, *trust is the whole product* — SmartNews positions itself explicitly against the filter bubble and against clickbait, so the verbal brand stays even-handed and journalistic even as the visual brand stays bold. The 2014 expansion to a San Francisco office (backed by a $36M Series B) carried that same combination — bold red, restrained words, fast and fair — into a global market, growing SmartNews into a unicorn read across 150+ countries.

What SmartNews refuses: the engagement-maximizing dark patterns of low-quality aggregators, clickbait headlines in its own chrome, decorative weight that slows the read, and any design that trades the reader's trust for a metric. It chooses speed, contrast, fairness, and a single confident red.

## 12. Principles

1. **Quality information, delivered fast.** The mission is the product. *UI implication:* Lightweight, scannable, system-font, SmartView-fast. No decoration is allowed to slow the read; headlines lead, metadata recedes.

2. **The red is the one signal.** A single urgent red flags what matters. *UI implication:* `#EB0B22` for the active tab, brandmark, and breaking/live emphasis only. Keep it scarce; its urgency is its scarcity. Everything else stays black-on-white.

3. **Discovery, not search.** SmartNews surfaces what you should read, across channels. *UI implication:* The swipeable channel/tab bar is the core primitive; design for swipe-and-scan triage, not query-and-result.

4. **Trust through restraint.** Credibility depends on sounding fair. *UI implication:* The verbal brand is even-handed and journalistic; no clickbait or editorializing in product chrome. The red carries urgency so the words don't have to.

5. **Legibility is non-negotiable.** A news app that's hard to read has failed. *UI implication:* High-contrast near-black on white, bold scannable headlines, clear hierarchy, multi-language-robust system fonts. Never sacrifice legibility for style.

## 13. Personas

*Personas are fictional archetypes informed by SmartNews's publicly-described readership (50M+ readers across 150+ countries seeking trustworthy news), not real individuals.*

**伊東 雅人 (Masato Ito), 45, Tokyo.** Commuter who opens SmartNews on the train every morning to triage the day's news across channels (Top, Politics, Business) in a few swipes. Values speed and breadth, distrusts sensationalism. Relies on SmartView when the train tunnel kills his signal.

**Dana Whitfield, 33, Chicago.** US reader who installed SmartNews to get news *outside* her social-media filter bubble. Likes that it surfaces a range of sources and stays neutral in its chrome. Reads on her phone in short bursts; the bold-headline scan fits her attention budget.

**佐藤 恵 (Megumi Sato), 28, Fukuoka.** Casual reader who uses SmartNews for the daily coupons and a quick headline scan. Not a news junkie, but trusts the app to flag genuinely important stories with its breaking emphasis. Wants it fast, light, and not annoying.

## 14. States

| State | Treatment |
|---|---|
| **Empty (channel no stories)** | Clean white canvas, one neutral line explaining the channel is updating, no alarm. Pull-to-refresh affordance. |
| **Empty (search no results)** | Calm single line + suggested channels; factual, not "nothing found, sorry." |
| **Loading (feed)** | Skeleton headline+thumbnail blocks at final dimensions; quick shimmer; SmartView-fast perceived speed is the goal. |
| **Loading (article open)** | Instant SmartView render where possible; progress kept minimal and fast. |
| **Error (field)** | Neutral border swap + one calm helper line; cause + fix. |
| **Error (network/offline)** | Honest banner: "Not connected" / offline; SmartNews's promise is delivery, so it's plain about when delivery is interrupted, and recovers quietly. |
| **Success (subscribed / saved)** | Restrained confirmation; value-clear, no celebration spectacle. |
| **Disabled** | Muted fill/text. Palette swap is the signal. |
| **Skeleton** | Neutral blocks at exact final size (headline + thumbnail shapes); respects reduced-motion. |
| **Breaking / Live** | Red `#EB0B22` badge + factual headline; the visual urgency is the red, the words stay even-handed. |

## 15. Motion & Easing

SmartNews's motion is **fast, snappy, and purposeful** — it supports quick scanning and swiping, never decorative delight. A news reader's time is the constraint, so motion is brief.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Tab selection commit, toggle |
| `motion-fast` | 150ms | Tab/channel switch, button press, save tap |
| `motion-standard` | 220ms | Card reveal, dropdown, image fade-in |
| `motion-modal` | 280ms | Modal/sheet enter-exit |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | The default |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Things arriving (sheets, modals) |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Dismissals |

**Spring stance.** Spring / overshoot easing is **forbidden** on SmartNews surfaces. News is serious and time-critical; bouncy motion would undercut the trustworthy register and slow the scan. Motion clarifies the swipe and the load; it never performs.

**Signature motions.**
1. **Channel swipe.** Horizontal swipe between channels tracks the finger 1:1 and settles over `motion-fast / ease-standard`; the red active indicator slides to the new tab. Direct and immediate.
2. **Article open (SmartView).** Tapping a headline opens the article as fast as the connection allows; the transition is brief (`motion-standard`) so the read starts instantly.
3. **Feed image fade-in.** Thumbnails fade in `opacity 0→1` over `motion-standard / ease-standard` as they load; no slide, no jump.
4. **Modal/sheet enter.** Scrim fades in; sheet rises over `motion-modal / ease-enter`. Quick, no bounce.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` collapse to `motion-instant`; channel switches and image loads become immediate; sheets appear without translate. Speed and accessibility align — both favor less motion.

<!--
OmD v0.1 Sources — SmartNews

Tier 1 (official, WebFetch/WebSearch 2026-05-19):
- about.smartnews.com/en/ — mission "Delivering the world's quality information to the people
  who need it"; 3,000+ media partners, 400,000+ articles daily; filter-bubble framing;
  wordmark ships black or white per background brightness; SmartNews+ subscription.
- SmartNews brand manual referenced at about.smartnews.com/assets/.../smartnews_brandmanual_en.pdf
  (PDF binary not text-extractable in this pass — see note).

Tier 2 / narrative (WebSearch 2026-05-19):
- Company history (businessmodelcanvas, restofworld "Behind SmartNews the $2bn unicorn",
  about.smartnews.com leadership): incorporated Tokyo 2012-06-15 as Gocro Inc. by Ken Suzuki
  (鈴木健, UTokyo Ph.D. complex systems) + Kaisei Hamamoto (浜本階生); ML discovery engine vs
  search; SmartView instant rendering; 1M MAU in year one; 2014 SF office + $36M Series B;
  grew to unicorn, 50M+ readers, 150+ countries.

Verified vs assumed:
- VERIFIED: mission statement, founding date/founders, ML-discovery + SmartView premise,
  global footprint, wordmark black/white-per-background rule. The brand red #EB0B22 is the
  brief-supplied value and SmartNews's widely-documented brand red; the brand-manual PDF that
  would confirm the exact hex was not text-extractable this pass, so #EB0B22 is treated as the
  documented-but-not-pixel-reverified brand red.
- ASSUMED/INFERRED: the high-contrast black-on-white neutral system, channel-tab/card/badge
  component specs in §4, and the light-neutral surface values are inferred from SmartNews's
  known news-app UI pattern (channel bar + headline feed + red active indicator), not from a
  live computed-style inspect (the live www.smartnews.com/en fetch redirected to an unrelated
  page in this session). Motion tokens (§15) duration values are illustrative. Voice samples
  marked illustrative are not verbatim live strings except the verified mission.
- Personas (§13) are fictional archetypes of SmartNews's described global readership.
-->

---

**Verified:** 2026-05-19 (omd:add-reference — JP batch)
**Tier 1 sources:** about.smartnews.com/en (mission "Delivering the world's quality information to the people who need it"; 3,000+ partners / 400k+ daily articles; filter-bubble positioning; wordmark black/white per background). SmartNews brand red #EB0B22 (documented brand red — brand-manual PDF not text-extractable this pass).
**Tier 2 sources:** SmartNews company history (restofworld / businessmodelcanvas / about.smartnews.com leadership — Gocro Inc. 2012-06-15, Ken Suzuki + Kaisei Hamamoto, ML discovery engine, SmartView, 50M+ readers / 150+ countries); getdesign.md / refero not separately fetched.
**Conflicts unresolved:** Brand red #EB0B22 documented but not pixel-reverified (brand-manual PDF unparseable; live homepage fetch redirected to an unrelated page this session). §4 component values inferred from SmartNews's known channel-bar + headline-feed UI pattern, not a live computed-style inspect.
