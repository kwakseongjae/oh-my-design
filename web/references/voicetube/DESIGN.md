---
id: voicetube
name: "VoiceTube"
country: TW
category: education
homepage: "https://tw.voicetube.com"
primary_color: "#7E3AAF"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=tw.voicetube.com&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#7e3aaf"
    vibrant: "#a73aaf"
    gradient-start: "#653aaf"
    deep-purple: "#210040"
    canvas: "#18131d"
    surface: "#251633"
    nav-end: "#1d102b"
    tint: "#e0d0ec"
    body: "#e3e3e3"
    secondary: "#b4b4b4"
    placeholder: "#9ca3af"
    error: "#ed4f55"
    success: "#33991d"
    link: "#4283e4"
    on-primary: "#ffffff"
  typography:
    family: { sans: "PingFang TC", mono: "ui-monospace" }
    h2xl:   { size: 24, weight: 700, lineHeight: 1.425, use: "Largest headings" }
    xl:     { size: 20, weight: 600, lineHeight: 1.425, use: "Section heads" }
    lg:     { size: 18, weight: 500, lineHeight: 1.425, use: "Sub-heads" }
    base:   { size: 16, weight: 400, lineHeight: 1.425, use: "Body, button labels" }
    sm:     { size: 14, weight: 400, lineHeight: 1.425, use: "Secondary text, tags" }
    xs:     { size: 12, weight: 400, lineHeight: 1.425, use: "Captions, fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 4, lg: 8, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#653aaf", fg: "#ffffff", radius: 9999, padding: "0 20px", font: "16px/500", use: "Gradient CTA #653AAF→#A73AAF, h40" }
    button-outline: { type: button, bg: "transparent", fg: "#e3e3e3", radius: 9999, padding: "0 20px", font: "16px/500", use: "Ghost/secondary; 1px #e3e3e3 border, h40" }
    nav: { type: tab, bg: "#210040", fg: "#e3e3e3", use: "Top nav gradient #210040→#1D102B, h64" }
    sidebar-item: { type: listItem, bg: "#251633", fg: "#e3e3e3", radius: 0, padding: "12px 8px", font: "14px/400", use: "Sidebar nav item; active rgba purple tint" }
    tag: { type: badge, bg: "#7e3aaf", fg: "#e3e3e3", radius: 4, padding: "2.5px 12px", font: "14px/400", use: "Brand tag chip" }
    input: { type: input, bg: "transparent", fg: "#e3e3e3", radius: 4, use: "Text input; 1px #e3e3e3 border, focus #7e3aaf, error #ed4f55" }
  components_harvested: true
---

# VoiceTube

Asia's largest video-based English learning platform, blending immersive YouTube content with AI-powered study tools under a dramatic dark-purple brand identity.

## 1. Visual Theme & Atmosphere

VoiceTube presents a consistently dark, cinematic atmosphere built around a deep purple-to-near-black canvas. The body background is `#18131D` — a dark aubergine that evokes a premium streaming experience rather than a conventional classroom — while the navigation bar graduates from `#210040` to `#1D102B` as a horizontal gradient, anchoring every page in the brand's deepest signature hues. Primary call-to-action elements arrive as pill-shaped buttons bearing a vivid diagonal gradient from `#653AAF` to `#A73AAF`, injecting a pop of electric violet that reads immediately as the interactive signal layer. Secondary surfaces such as the sidebar and product grid use `#251633`, creating a subtle two-stop dark elevation system. The overall mood is energetic and night-mode-native: think streaming platform meets study app, where video thumbnail cards float on near-black panels, typography in soft white-gray (`#E3E3E3`) maintains clarity without harshness, and playful gradient accents ensure the interface never feels heavy or academic.

## 2. Color Palette & Roles

- **Brand Purple 400 (Primary):** `#7E3AAF` — interactive accents, badge fills, focused input borders
- **Brand Purple 300 (Vibrant):** `#A73AAF` — gradient endpoint, hover highlights, accent text on dark
- **Button Gradient Start:** `#653AAF` — primary CTA gradient origin (135.73°)
- **Deep Purple 500:** `#210040` — navigation gradient start, deepest surface overlays
- **Dark Aubergine 800 (Background):** `#18131D` — body canvas, default page background
- **Surface 600:** `#251633` — sidebar background, secondary card surfaces
- **Nav Gradient End:** `#1D102B` — navigation bar right edge
- **Purple Tint 100:** `#E0D0EC` — light tag fill, subtle selected state
- **White:** `#FFFFFF` — primary text on gradient buttons
- **Gray 300 (Body Text):** `#E3E3E3` — body text on dark, outline button text and border
- **Gray 400 (Secondary):** `#B4B4B4` — secondary labels, disabled state text
- **Gray 500 (Muted):** `#9CA3AF` — placeholder text
- **Error:** `#ED4F55` — danger borders, validation messages
- **Success:** `#33991D` — correct answers, achievement indicators
- **Link/Info:** `#4283E4` — hyperlink color, informational icons

## 3. Typography Rules

VoiceTube's global body font is a CJK-first stack: `-apple-system, BlinkMacSystemFont, PingFang TC, PingFang SC, Hiragino Sans, Hiragino Kaku Gothic ProN, Microsoft JhengHei, Microsoft YaHei, Meiryo, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif`. This stack ensures Mandarin and Japanese characters render optimally before falling back to Latin fonts. The base font weight is `400`, body text is set in `#E3E3E3` for comfortable contrast on dark backgrounds, and line-height defaults to `1.425` (the `vc-leading-base` token). The proprietary logomark typeface features 60° slanted stroke extensions that echo the play-button triangle — this angular DNA is brand-exclusive and not replicated in UI text. The type scale in use: `xs = 12px`, `sm = 14px`, `base/md = 16px`, `lg = 18px`, `xl = 20px`, `2xl = 24px`. Weight tokens span from `vc-font-light (300)` through `vc-font-normal (400)`, `vc-font-medium (500)`, `vc-font-semibold (600)`, `vc-font-bold (700)`, to `vc-font-black (900)`. Navigation labels and primary UI text use `500 (medium)`.

## 4. Component Stylings

### Primary CTA Button

**Gradient Filled**
- Background: `linear-gradient(135.73deg, #653AAF, #A73AAF 98.77%)`
- Text: `#FFFFFF`
- Radius: 9999px
- Height: 40px
- Padding: 0 20px
- Font: 16px / 500

### Outline Button

**Ghost / Secondary**
- Background: `transparent`
- Text: `#E3E3E3`
- Border: 1px solid `#E3E3E3`
- Radius: 9999px
- Height: 40px
- Padding: 0 20px
- Font: 16px / 500

### Navigation Bar

**Top Nav**
- Background: `linear-gradient(to right, #210040, #1D102B)`
- Text: `#E3E3E3`
- Height: 64px

### Sidebar Nav Item

**Active / Hover**
- Background: `rgba(126, 58, 175, 0.2)`
- Text: `#E3E3E3`
- Padding: 12px 8px
- Font: 14px / 400
- Radius: 0px

### Tag / Badge Chip

**Brand Tag**
- Background: `#7E3AAF`
- Text: `#E3E3E3`
- Radius: 4px
- Padding: 2.5px 12px
- Font: 14px / 400

### Text Input

**Default State**
- Background: `transparent`
- Text: `#E3E3E3`
- Border: 1px solid `#E3E3E3`
- Radius: 4px

**Focus / Hover**
- Border: 1px solid `#7E3AAF`

**Disabled**
- Text: `#B4B4B4`

**Error**
- Border: 1px solid `#ED4F55`
- Text: `#ED4F55`

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://tw.voicetube.com (homepage HTML + CSS `/_next/static/css/8c750a42d09ad582.css`); https://tw.voicetube.com/branding (brand page — structure + JS chunk `page-7cb732e6cbfefad2.js`); https://tw.voicetube.com/about (brand narrative)
**Tier 2 sources:** getdesign.md/voicetube — NOT LISTED ("No designs found for 'voicetube'"). refero — no result found for VoiceTube.
**Conflicts unresolved:** none

## 5. Layout Principles

VoiceTube uses a responsive two-column shell on desktop: a fixed 110px-wide sidebar navigation column paired with a fluid content area (`vc-grid-cols-[110px_1fr]`), which collapses to single-column on mobile (`lg:vc-grid-cols-1`). Content grids for video cards typically use 3–4 columns on large screens, scaling down through 2-column tablet to single-column mobile layouts. Horizontal container padding follows the Tailwind spacing scale (`p-4` = 16px, `p-5` = 20px, `p-6` = 24px). The overall max content width is not capped artificially narrow — VoiceTube leans into wide viewports for its video-first grid. Sticky positioning is used for the top navigation bar at `z-[800]`, ensuring it floats above all content as users scroll through dense video libraries.

## 6. Depth & Elevation

VoiceTube's elevation model is purely dark-stack-based — layers are distinguished by background darkness rather than box-shadows. The four tiers in practice: **L0** `#18131D` (body canvas), **L1** `#1D102B–#210040` (navigation, modal backdrops), **L2** `#251633` (sidebar panels, card surfaces), **L3** `#2B2B2B` (dark-500 floating elements, tooltips). Genuine `box-shadow` usage is sparse; focus states use a thin `0 0.1px 0 0 #7E3AAF` outline-shadow rather than a spread shadow, keeping the UI graphically flat. Modal/overlay z-indices follow a defined stack: content at 100, sticky nav at 800, modals at 1200–1299, toasts/notifications at 1500–1600.

## 7. Do's and Don'ts

### Do
- Use the `linear-gradient(135.73deg, #653AAF, #A73AAF)` gradient as the primary CTA fill to maintain brand energy
- Apply `#7E3AAF` for interactive focus rings, active link states, and selected filters
- Use pill-shaped buttons (`border-radius: 9999px`) for all standalone CTA actions
- Keep body backgrounds in the `#18131D` to `#251633` range for dark-mode consistency
- Use `#E3E3E3` (gray-300) as the default text color on dark surfaces
- Prefer the CJK-inclusive font stack for any Mandarin or Japanese content
- Apply `ease-out` timing for all UI transitions at 150ms or 300ms

### Don't
- Don't use high-saturation colors from outside the purple / teal / orange product palette without clear context
- Don't apply gradient buttons to destructive actions (delete, remove) — use plain `#ED4F55` borders instead
- Don't use light backgrounds (`#FFFFFF`, `#F3F3F3`) as page canvas — VoiceTube is dark-mode-native
- Don't mix border-radius: square corners would clash with the brand's pill-and-round language
- Don't stack multiple box-shadows — elevation is communicated through dark tone layering, not shadow spreads
- Don't reduce font weight below 400 for UI text at `14px` or smaller on dark surfaces

## 8. Responsive Behavior

VoiceTube's breakpoint system uses Tailwind's `md` (768px) and `lg` (1024px) prefixes extensively. The pattern `md:vc-h-9 md:vc-text-sm` on buttons demonstrates size reduction at tablet widths: button height drops from 40px to 36px and font from 16px to 14px. The sidebar collapses at `lg:vc-hidden`. Video grids shift from a multi-column layout to a vertically stacked, horizontally scrollable carousel on mobile. Hero section typography is set in viewport-relative units (`4.167vw` headline on desktop, `6.4vw` on mobile), ensuring the brand message fills the screen at every size. Padding contracts gracefully: `p-6` on desktop drops to `p-4` on mobile throughout content areas.

## 9. Agent Prompt Guide

When building VoiceTube-style UI:
- Dark canvas: body background `#18131D`, sidebar `#251633`, nav `linear-gradient(to right, #210040, #1D102B)`
- Primary button: `border-radius: 9999px`, `height: 40px`, `padding: 0 20px`, `background: linear-gradient(135.73deg, #653AAF, #A73AAF)`, `color: #FFFFFF`, `font-weight: 500`, `font-size: 16px`
- Outline button: same shape, `background: transparent`, `border: 1px solid #E3E3E3`, `color: #E3E3E3`
- Focus ring: `box-shadow: 0 0 0 1px #7E3AAF`
- Error state: `border-color: #ED4F55`, `color: #ED4F55`
- Disabled: `color: #B4B4B4`, `cursor: not-allowed`
- Transitions: `transition-duration: 150ms`, `transition-timing-function: ease-out`
- Font stack: `-apple-system, BlinkMacSystemFont, "PingFang TC", "PingFang SC", "Microsoft JhengHei", sans-serif`

## 10. Voice & Tone

VoiceTube's copy voice is **energetic, inclusive, encouraging** — a friendly study partner who celebrates small wins without condescension.

| Dimension | Do | Don't |
|---|---|---|
| Register | Warm, conversational, direct | Academic, formal, passive |
| Pacing | Short punchy sentences | Long subordinate clause chains |
| CTA framing | "開始學習" / "免費加入" | "Please register to access content" |
| Achievement framing | "你做到了！" / "再接再厲" | "Your score was insufficient" |
| Error framing | "再試一次" (try again) | "An error has occurred" |

Voice samples (illustrative):
- *Illustrative — homepage headline register:* "連結世界、享受學習樂趣！" — Connect to the world, enjoy learning. No jargon, no friction, pure invitation.
- *Illustrative — product description:* "每天20分鐘跟著練習，即可獲得30天免費訂閱制" — Specific promise, specific time, specific reward. Numbers over adjectives.
- *Illustrative — branding tagline:* "Connect. Have fun!" — Two words each. The brand thinks in micro-copy that works across any language boundary.

## 11. Brand Narrative

VoiceTube launched in 2013 when three co-founders — Zenn, Lai, and Tsai — were teaching themselves English after work using YouTube videos. What started as a personal workaround became a community: a place where millions of Mandarin speakers could learn the world's lingua franca through the authentic, conversational content they actually wanted to watch. The insight was simple but powerful — context-rich video beats rote drilling, and the best classroom is one you choose to enter.

From that origin story, VoiceTube built "Asia's largest online education platform," expanding from a curated video library into a full learning ecosystem: the core VoiceTube app for daily video-driven practice, Hero for AI-adaptive test preparation, Vclass for live celebrity-instructor courses, and Dictionary for deep vocabulary acquisition with dual-accent audio. The brand's name fuses "voice" (spoken language output, the hardest skill to acquire) with "tube" (YouTube's video-native learning environment), and the logo literalises this: a play triangle, the letter V, and a checkmark merged into a single mark whose 60°-angle typography echoes the geometry of the play button across every letterform.

Today, with over 5 million users and recognition including Facebook App of the Year 2016, VoiceTube positions itself not as a language-learning tool but as a social platform for human connection through English — summarised in its rallying cry: **"Connect. Have fun!"**

## 12. Principles

1. **Video-first learning.** Real language lives in authentic video, not curated sentences. Every feature exists to make video consumption study-worthy. *UI implication:* Video thumbnails are the primary content atom; card grids prioritize visual poster art with minimal text overlay.

2. **Connection over completion.** Learning English is a means to connect with people and ideas worldwide, not a checkmark. *UI implication:* Social indicators (learner counts, challenge rankings) are surfaced prominently to reinforce the community dimension.

3. **Guided, not gatekept.** The platform meets learners where they are and provides direction without testing walls. *UI implication:* Free content is broadly accessible; premium features are surfaced contextually via gentle gradient CTAs rather than locked-content banners.

4. **Innovation in every layer.** From AI vocabulary recommendations to gamified pronunciation challenges, technology should make learning feel effortless. *UI implication:* AI-powered elements are woven into the core flow — word lookup inline, difficulty auto-adjustment, personalised ranking — rather than siloed as premium add-ons.

5. **Diverse and compound identity.** The brand serves Mandarin, Japanese, and Vietnamese speakers, and the design must flex accordingly. *UI implication:* CJK-optimized font stacks, locale-aware copy, and multi-lingual navigation are non-negotiable baseline requirements.

## 13. Personas

*Illustrative archetype — The Ambitious Professional:* A 28-year-old Taipei product manager who needs business English to advance her career. She has 20–30 minutes on her commute. She uses VoiceTube for daily video practice and Hero for TOEIC prep. She values progress indicators and streak mechanics that prove the time investment is working.

*Illustrative archetype — The Pop-Culture Learner:* A 19-year-old university student in Taichung who watches English-language YouTube unsubbed but misses nuance. He found VoiceTube through a gaming channel and now uses the dictionary for slang. He values content discovery and social sharing over structured curricula.

*Illustrative archetype — The Late-Stage Returner:* A 45-year-old parent in Kaohsiung who studied English in school, let it lapse, and now wants to rebuild for their child's international schooling applications. She learns through Vclass with established instructors. She values warmth, patience, and celebrity-instructor credibility over gamification.

*Illustrative archetype — The Japanese Exchange Student:* A 22-year-old from Osaka studying at NTU who uses VoiceTube's Japanese-locale version to practice English while picking up Mandarin via Taiwanese content. He values the multi-locale product suite and dual-accent dictionary features.

## 14. States

- **Empty — no search results:** Dark panel with centered illustration and copy "找不到相關影片，試試其他關鍵字" — purple-tinted icon at low opacity against `#18131D`, no hard borders.
- **Loading — video grid:** Skeleton cards in `#251633` with subtle shimmer animation sweeping left-to-right in `#1D102B`, matching the existing dark elevation tier so the layout shift is imperceptible.
- **Error — form validation:** Input border shifts to `1px solid #ED4F55`, placeholder text and error label render in `#ED4F55`, the field label color also shifts to match.
- **Error — page/server:** Full-page dark overlay at `#18131D` with a centered 404/500 message in `#E3E3E3`, no gradient backgrounds — keeps the dark canvas consistent.
- **Success — quiz answer correct:** `#33991D` confirmation background at 10% opacity (`rgba(51, 153, 29, 0.1)`) with a full-opacity `#33991D` border and checkmark icon.
- **Skeleton — video card:** `#251633` block sized to thumbnail aspect-ratio with a `#1D102B` shimmer pulse at 0.8s ease-in-out; title line represented by two `#251633` rounded bars.
- **Disabled — button:** `opacity: 0.6`, `cursor: not-allowed`, text shifts to `#B4B4B4`, gradient or border color desaturates; no hover effect fires.

## 15. Motion & Easing

VoiceTube uses a compact three-step duration scale anchored in Tailwind custom tokens:

| Token | Value | Use |
|---|---|---|
| `vc-duration-sm` | 86ms | Micro-interactions: hover color shifts, focus ring appearance |
| `vc-duration-md` | 150ms | Standard transitions: button state changes, border-color, background-color |
| `vc-duration-xl` | 300ms | Page-level: slide-in panels, carousel advances, modal entrance |

The default easing is `ease-out` (`vc-ease-base`) — elements decelerate into their resting position, conveying arrival and completion. `cubic-bezier(0.4, 0, 0.2, 1)` (`vc-ease-in-out`) appears on keyboard-focus indicators and bi-directional carousels where enter and exit need to be symmetrical. Carousel progress dots use a width-transition at `vc-duration-md / ease-out` (active dot expands from 10px to 30px). No spring/bounce physics — the brand is energetic through color and gradient, not through over-engineered motion.
