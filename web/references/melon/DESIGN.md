---
id: melon
name: "Melon"
country: KR
category: entertainment
homepage: "https://www.melon.com"
primary_color: "#00CD3C"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=melon.com&sz=128"
verified: "2026-06-01"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    signature-green: "#00cd3c"
    green-dark: "#00b523"
    green-login: "#00d344"
    text-primary: "#1a1a1a"
    text-body: "#666666"
    text-muted: "#999999"
    red-accent: "#df2607"
    canvas: "#ffffff"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    heading: { size: 14, weight: 400, use: "Headings/primary text, near-black #1a1a1a" }
    control: { size: 13, weight: 400, use: "Interactive controls and inputs" }
    body:    { size: 12, weight: 400, use: "Dense list rows and metadata, muted gray" }
  spacing: { xs: 2, sm: 4, md: 8, base: 12, lg: 16, xl: 24, xxl: 32, section: 48 }
  rounded: { sm: 0, md: 0, lg: 0, full: 9999 }
  shadow:
    none: "none"
  components:
    login-button: { type: button, bg: "#00d344", fg: "#ffffff", radius: 0, font: "14px/400", use: "Primary login, sharp-cornered green" }
    search-input: { type: input, bg: "#ffffff", fg: "#999999", radius: 0, font: "13px/400", use: "Search field, light-gray text" }
    list-row: { type: listItem, bg: "#ffffff", fg: "#666666", radius: 0, font: "12px/400", use: "Dense chart/list row text" }
  components_harvested: true
---

# Design System Inspiration of Melon

## 1. Visual Theme & Atmosphere

Melon is Korea's dominant music-streaming service, operated by Kakao Entertainment, and its interface wears that scale on its sleeve: a dense, white, content-first surface where charts, lists, and player controls are packed tightly together and the music is always the point. The atmosphere is utilitarian and high-density — small type at 12px for body and 13-14px for controls, near-black #1A1A1A headings, and sharp 0px corners everywhere — so the screen reads like a tightly ruled spreadsheet of songs rather than a soft consumer app. Against that white #FFFFFF ground, the signature Melon green (#00CD3C in the source CSS, rendering as a near-twin #00D344 on the live login button) is rationed carefully, lighting up only active navigation, selected tabs, player buttons, and primary actions. Everything else is a quiet grayscale hierarchy — #666666 for muted text, #999999 for the lightest labels and placeholders — that lets the green do all the signaling. The result is unmistakably brand-green-on-white: grid-like, efficient, and built for browsing thousands of tracks without visual fatigue. It is the look of a tool that expects you to scan, tap, and keep listening.

## 2. Color Palette & Roles

- **Signature green #00CD3C** — the brand-defining Melon green; primary actions, active nav, selected tabs, player buttons (appears ~11x in the live CSS).
- **Darker green #00B523** — a deeper green variant used as a companion to the signature green.
- **Login button green #00D344** — the live-rendered green on the primary login button; a near-twin of #00CD3C.
- **Near-black #1A1A1A** — heading and primary text color against the white ground.
- **Muted gray #666666** — default body text color (live body renders rgb(102,102,102)).
- **Light gray #999999** — the lightest text tier; secondary labels and input placeholder text.
- **Red accent #DF2607** — a sharp red accent used sparingly.
- **Ground #FFFFFF** — the white canvas the entire dense layout sits on.

The green is the only saturated color allowed to carry meaning; the reds appear as rare accents, and the rest of the palette is a disciplined grayscale ladder from #1A1A1A down through #666666 to #999999 on white.

## 3. Typography Rules

- **Typeface:** Pretendard, with 맑은 고딕 (Malgun Gothic) as the fallback.
- **Body text:** 12px — the dense default for list rows and metadata; renders in muted gray #666666.
- **Controls:** 13-14px — interactive controls and inputs sit slightly larger than body for tap targets.
- **Headings / primary text:** near-black #1A1A1A.
- **Weights observed:** 400 (regular) on buttons and inputs.

The type system is deliberately small and dense, suiting a content-first streaming UI that must show many rows at once. Color, not size, does most of the hierarchy work — near-black #1A1A1A for what matters, #666666 for supporting text, #999999 for the quietest labels.

## 4. Component Stylings

### Login Button

**Primary (live-rendered green)**
- Background: #00D344
- Text: #FFFFFF
- Border: none
- Radius: 0px
- Height: 42px
- Font: 14px / 400
- Use: primary login / sign-in action; the sharp-cornered green button that anchors account entry

### Search Input

**Default**
- Background: transparent
- Text: #999999
- Radius: 0px
- Height: 40px
- Font: 13px / 400
- Use: search field; placeholder and text both render in light gray #999999

### Body / List Text

**Default row text**
- Background: #FFFFFF
- Text: #666666
- Border: none
- Radius: 0px
- Font: 12px / 400
- Use: dense chart and list rows; the workhorse text style across the streaming grid

Across components the corners are uniformly square (0px radius), reinforcing the dense, grid-like streaming layout rather than a soft, rounded consumer feel.

## 5. Layout Principles

Melon is built around density. The layout is a content-first grid of packed charts and lists where many rows are visible at once, and the square 0px corners on buttons and inputs make the whole surface read like ruled cells rather than floating cards. White #FFFFFF is the dominant ground, giving the small 12px body text and #666666 metadata room to breathe inside an otherwise tightly packed screen. The green is placed structurally — on active nav, selected tabs, and primary actions — so wayfinding rides on color, not on heavy chrome. The overall principle is utilitarian: maximize the number of songs and controls in view, keep the framing minimal, and let the brand green mark the live, actionable elements.

## 6. Depth & Elevation

Melon's surface is flat by design. With 0px radius on its buttons and inputs and a uniform white #FFFFFF ground, the UI avoids rounded cards and soft floating layers in favor of a dense, grid-like plane. There is no measured shadow or elevation token in the verified data, so depth here is communicated through color and contrast — near-black #1A1A1A and the signature green #00CD3C advancing against the white field — rather than through drop shadows or layered surfaces. The aesthetic is sharp, square, and screen-efficient, treating the page as a single tightly organized sheet.

## 7. Do's and Don'ts

### Do
- Keep the ground white (#FFFFFF) and let dense lists and charts fill the screen.
- Ration the signature green (#00CD3C / live #00D344) for active states and primary actions only.
- Use square 0px corners on buttons and inputs to preserve the grid-like, streaming-tool feel.
- Build the text hierarchy from color — #1A1A1A for primary, #666666 for body, #999999 for the quietest labels.
- Use Pretendard (with 맑은 고딕 fallback) and keep type small: 12px body, 13-14px controls.

### Don't
- Invent rounded corners or soft cards — the corners are sharp (0px) throughout.
- Spread the green across large surfaces; it loses its signaling power if it stops being rare.
- Inflate type sizes; the density depends on small 12-14px text.
- Introduce the red accent (#DF2607) broadly — keep it as a sparing accent.

## 8. Responsive Behavior

The verified inspection covers the desktop web surface of melon.com, where the design is a dense, multi-column grid of charts and lists with small 12px body text and 40-42px control heights. No mobile breakpoint measurements are present in the verified data, so responsive specifics are described qualitatively: the density-first philosophy — many rows visible, square corners, color-driven wayfinding — is the constant, and any narrower layout would be expected to preserve the small type scale and the rationed green rather than redesign around them. Control heights in the 40-42px range (search input 40px, login button 42px) suggest comfortable tap targets even within the dense frame.

## 9. Agent Prompt Guide

When generating UI in the Melon style, instruct the agent: build on a white #FFFFFF ground with a dense, content-first grid of lists and charts. Use Pretendard (fallback 맑은 고딕) at small sizes — 12px body, 13-14px controls. Set text color by tier: #1A1A1A for headings and primary text, #666666 for body, #999999 for placeholders and the quietest labels. Make all buttons and inputs square (border-radius 0px). Use the signature Melon green only for primary actions and active states — primary button background #00D344 (or source green #00CD3C), white #FFFFFF text, 42px height, 14px/400 font. Search inputs: transparent background, #999999 text and placeholder, 40px height, 13px/400. Keep the red #DF2607 as a rare accent. Avoid rounded cards, drop shadows, and large type — the whole point is a sharp, high-density, green-on-white streaming tool.

## 10. Voice & Tone

Melon's voice is utilitarian and unfussy, matching a tool that exists to get you to the music fast. It is content-first: the product trusts the charts, lists, and track metadata to carry the experience, so the surrounding language stays brief, functional, and direct. Where the brand asserts itself, it does so through the green, not through chatty copy — the tone is efficient and confident, the voice of Korea's dominant streaming service that assumes you came to listen, not to read.

## 11. Brand Narrative

Melon is Korea's dominant music-streaming service, operated by Kakao Entertainment. Its identity is anchored by the signature Melon green — #00CD3C in the source CSS, rendering as a near-twin #00D344 on the live login button — set against an almost entirely white, high-density interface. The narrative is one of utility at scale: thousands of tracks, packed charts, and player controls organized into a sharp, square, grid-like surface where the brand green is rationed to mark the live and actionable. It is a design that says streaming is a daily utility, and that the brand's job is to be fast, dense, and unmistakably green-on-white.

## 12. Principles

- **Density over decoration** — pack charts and lists; show many rows; keep framing minimal.
- **Green is precious** — reserve the signature green (#00CD3C / #00D344) for active states and primary actions.
- **Sharp corners** — square 0px radius across components; no soft, rounded consumer look.
- **Color-driven hierarchy** — #1A1A1A / #666666 / #999999 do the structural work; type stays small.
- **White ground always** — #FFFFFF is the canvas that makes the green and the dense lists legible.
- **Content first** — the music and its metadata are the interface; chrome stays out of the way.

## 13. Personas

- **The daily listener** — opens Melon to scan charts and queue tracks; rewarded by density, fast browsing, and clear green active states that show where they are.
- **The chart watcher** — comes for the rankings and lists; the small 12px rows and #666666 metadata let many entries sit on screen at once.
- **The quick searcher** — taps the search input (40px, #999999 placeholder) to jump straight to a song; the utilitarian, square UI gets out of the way.

## 14. States

- **Default text:** #666666 body at 12px on white #FFFFFF.
- **Primary text / headings:** near-black #1A1A1A.
- **Placeholder / quiet label:** #999999 (search input text and placeholder).
- **Active / selected (nav, tabs, player):** signature green #00CD3C.
- **Primary action (login button):** background #00D344, white #FFFFFF text, 42px height.
- **Accent:** red #DF2607, used sparingly.

Hover, pressed, focus, and disabled state values were not captured in the verified data and are intentionally left undocumented rather than invented.

## 15. Motion & Easing

No motion, transition, or easing values were captured in the verified inspection of melon.com, so none are specified here. Qualitatively, the design's character is static and efficiency-driven — a dense, square, grid-like streaming surface — which implies restrained, functional motion (if any) rather than expressive animation. Any motion added in this style should stay subtle and quick, in keeping with the utilitarian, content-first feel, but no specific durations or curves are claimed because none were measured.

---
**Verified:** 2026-06-01
**Tier 1 sources:** https://www.melon.com (official Melon service homepage, live CSS source), https://tech.kakaoent.com (Kakao Entertainment tech, Melon's operator), https://www.kakaocorp.com/page/service/service/Melon (Kakao Corp official Melon service page)
**Tier 2 sources:** getdesign.md/melon — NOT LISTED. refero — not listed. Note: live login button renders #00D344, a near-twin of the CSS signature green #00CD3C.
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof block)
