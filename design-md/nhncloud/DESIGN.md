---
id: "nhncloud"
name: "NHN Cloud"
country: KR
category: backend-devops
homepage: "https://www.nhncloud.com"
primary_color: "#125DE6"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=nhncloud.com&sz=128"
verified: "2026-06-01"
omd: "0.1"
ds:
  name: TOAST UI
  url: "https://ui.toast.com"
  type: system
  description: NHN's official open-source component library (TUI Grid/Editor/Calendar/Chart/Image-Editor), MIT-licensed under the nhn GitHub org and documented at ui.toast.com.
---
# Design System Inspiration of NHN Cloud

## 1. Visual Theme & Atmosphere

NHN Cloud presents two distinct but related faces, and the brand's character lives in the gap between them. The corporate marketing site is confident and saturated — a vivid #125DE6 blue carried on large, fully-rounded pill CTAs that feel approachable and modern, anchored by clean near-black text on Pretendard Variable. The TOAST UI open-source widget library is the engineering counterpart: tighter, more functional, and a touch cooler in hue, leaning on a lighter accent blue (#00a9ff) and small 4px corner radii built for dense data interfaces like grids and editors. Where the corporate site sells trust and scale, the component library optimizes for legibility and information density. Together they read as one company speaking two registers — the marketing voice for executives evaluating an enterprise cloud, and the practitioner voice for developers embedding NHN's tools. The consistent thread is a blue-forward, clean, no-nonsense Korean enterprise aesthetic that never feels playful for its own sake.

## 2. Color Palette & Roles
The brand operates across two surfaces, each with its own blue.

**Corporate site (live nhncloud.com)**
- Brand primary blue: #125DE6 (rgb 18,93,230) — every primary CTA
- Dark CTA: #111111 — high-contrast alternate action
- Newsletter input border: #51565F
- Muted text: #727781
- Body text: near-black

**TOAST UI (source-verified CSS)**
- Accent blue: #00a9ff — primary interactive accent
- Hover / active blue: #0088d9
- Light tint: #e5f6ff
- Secondary blue: #009bf2
- Error red: #fa2828
- Neutral background: #f7f9fc

Roles: on the corporate surface, #125DE6 is reserved for the single most important action on a section, with #111111 serving as a dark high-contrast alternate. On TOAST UI, #00a9ff drives interactive accents with #0088d9 as the hover/active darkening and #e5f6ff as a soft selection/tint fill; #fa2828 is the dedicated error signal and #f7f9fc the calm neutral canvas behind widgets.

## 3. Typography Rules
The corporate site uses Pretendard Variable throughout. Body copy is set at 16px; primary CTAs render at 15px / 400; a secondary heading-style CTA steps up to 17px / 500 for slightly more presence. The TOAST UI library defaults to a compact 13px body, appropriate for the data-dense grids and editors it powers. The hierarchy is restrained: weight moves between 400 and 500 rather than relying on heavy display weights, and size differences are modest, keeping the overall feel even and professional. Use Pretendard Variable for any corporate-aligned interface and the smaller 13px scale when matching the embedded TOAST UI surface.

## 4. Component Stylings

### Primary CTA (Corporate)

**Vivid-blue pill**
- Background: #125DE6
- Text: #FFFFFF
- Border: none
- Radius: 30px
- Padding: 8px 19px
- Height: 40px
- Font: 15px / 400
- Use: the primary call-to-action on corporate marketing sections

### Dark CTA (Corporate)

**Near-black pill**
- Background: #111111
- Text: #FFFFFF
- Border: none
- Radius: 30px
- Height: 40px
- Font: 15px / 400
- Use: high-contrast alternate primary action

### Outline CTA on Dark (Corporate)

**Ghost pill**
- Background: transparent
- Text: #FFFFFF
- Border: 1px solid #FFFFFF
- Radius: 30px
- Height: 50px
- Font: 17px / 500
- Use: larger secondary action placed over a dark section

### Newsletter Input (Corporate)

**Transparent field**
- Background: transparent
- Text: #727781
- Border: 1px solid #51565F
- Radius: 6px
- Height: 42px
- Font: 14px / 400
- Use: email capture field in the newsletter/footer area

### TOAST UI Widget Element (Source)

**Compact surface**
- Background: #f7f9fc
- Text: near-black
- Border: derived from accent #00a9ff on interactive states
- Radius: 4px
- Font: 13px / 400
- Use: base styling for TOAST UI grid/editor widgets

**Interactive (accent)**
- Background: #e5f6ff
- Border: #00a9ff
- Use: selected / accented state within the widget

**Hover / active**
- Border: #0088d9
- Use: hover and active darkening of the accent

## 5. Layout Principles
The corporate site favors generous, breathing layouts where a single saturated CTA anchors each section against ample whitespace, letting the vivid blue do the work of directing attention. Fully-rounded 30px pills are placed as clear focal points rather than crowded clusters. The TOAST UI surface inverts this priority: it is built for density, with the calm #f7f9fc neutral background framing tight, legible grids and editors at the 13px scale and small 4px radii that keep many adjacent cells visually quiet. Match the corporate layout when designing marketing or top-of-funnel pages, and the TOAST UI layout when designing functional, data-heavy application screens.

## 6. Depth & Elevation
NHN Cloud reads as a fundamentally flat, modern system on both surfaces — depth is expressed through color contrast and crisp 1px borders rather than heavy shadow. On the corporate site, separation comes from the saturated #125DE6 (or #111111) fill standing out against light backgrounds, and from thin 1px outlines such as the #51565F input border and the #FFFFFF ghost-button stroke. On TOAST UI, the #f7f9fc neutral canvas and small 4px-radius elements establish quiet layering, with the #00a9ff accent and #e5f6ff tint lifting interactive elements forward through hue rather than elevation. Keep elevation subtle: prefer contrast and hairline borders over drop shadows.

## 7. Do's and Don'ts

### Do
- Reserve #125DE6 for the single primary action on a corporate section.
- Use Pretendard Variable for corporate-aligned interfaces.
- Use fully-rounded 30px pills for corporate CTAs and the compact 4px radius for TOAST UI elements.
- Keep the two surfaces visually distinct: vivid #125DE6 for corporate, lighter #00a9ff for TOAST UI.

### Don't
- Blur the two blues — #125DE6 (corporate) and #00a9ff (TOAST UI) are not interchangeable.
- Introduce heavy drop shadows; rely on color contrast and 1px borders.
- Crowd multiple saturated pills together; let one CTA lead.
- Use the dense 13px scale on marketing pages or the large pills inside data grids.

## 8. Responsive Behavior
Component sizing in the blob points to comfortable, finger-friendly targets: corporate CTAs stand at 40px high (50px for the larger ghost button) and the newsletter input at 42px, with rounded 30px pills that stay legible at small widths. The Pretendard Variable type scale — 16px body, 15px and 17px CTAs — remains readable across breakpoints without restyling. The TOAST UI surface, designed for embedding, holds its compact 13px scale and 4px radii so that grids and editors retain density on whatever container they sit in. Preserve these heights and radii across viewports; scale layout and spacing rather than re-theming the components.

## 9. Agent Prompt Guide
When generating UI in the NHN Cloud style, first decide which surface you are matching. For corporate/marketing work, use Pretendard Variable, set body at 16px, and render the primary CTA as a fully-rounded 30px pill with background #125DE6, white text, 15px / 400, 40px tall, padding 8px 19px; offer #111111 as a dark alternate and a transparent ghost button with a 1px #FFFFFF border (50px, 17px / 500) over dark sections; style inputs as transparent fields with a 1px #51565F border, 6px radius, 42px height, #727781 text at 14px / 400. For TOAST UI / application work, use the 13px scale, 4px radii, an #f7f9fc neutral background, the #00a9ff accent with #0088d9 hover and #e5f6ff tint, #009bf2 as a secondary blue, and #fa2828 for errors. Never mix the two blues, and never invent shadows the system doesn't use.

## 10. Voice & Tone
NHN Cloud speaks in two registers tied to its two surfaces. The corporate voice is confident, trust-building, and enterprise-minded — selling scale, reliability, and partnership to decision-makers, with bold blue CTAs that invite a clear next step. The TOAST UI voice is the practitioner's: precise, functional, and documentation-driven, addressing developers who want their widgets to work predictably. Keep corporate copy assured and outcome-focused; keep TOAST UI copy exact and utilitarian.

## 11. Brand Narrative
NHN Cloud is the enterprise cloud arm of NHN Corp, headquartered in Pangyo, Korea. Its identity is built on two complementary pillars: a polished corporate presence that markets cloud infrastructure to enterprises, and TOAST UI — NHN's open-source component library (TUI Grid, Editor, Calendar, Chart, Image-Editor) released MIT-licensed under the nhn GitHub organization and documented at ui.toast.com. This pairing mirrors how strong product companies maintain a marketing surface and a developer surface side by side: the corporate site earns trust at the buying level, while TOAST UI earns credibility at the building level. The brand's story is one of a Korean enterprise that both sells the cloud and contributes the tools developers use on top of it.

## 12. Principles
- Two surfaces, one brand: corporate marketing and TOAST UI are parallel systems, each internally consistent.
- Blue-forward clarity: a single saturated blue leads attention on each surface.
- Flat and clean: contrast and hairline borders over shadow.
- Density where it counts: marketing breathes; application widgets pack tight at 13px / 4px.
- Restraint in type: weights stay between 400 and 500.

## 13. Personas
- Enterprise buyer: evaluating NHN Cloud for infrastructure; meets the confident corporate site, vivid #125DE6 CTAs, and Pretendard Variable copy.
- Developer / integrator: embedding TOAST UI widgets; works in the compact 13px, 4px-radius surface with the #00a9ff accent system.
- Korean enterprise team: expecting a clean, professional, blue-forward Korean cloud aesthetic across both touchpoints.

## 14. States
- Default (corporate CTA): #125DE6 background, white text, 30px pill.
- Default (TOAST UI accent): #00a9ff accent on #f7f9fc neutral background.
- Hover / active (TOAST UI): accent darkens to #0088d9.
- Selected / tinted (TOAST UI): #e5f6ff light tint fill with #00a9ff edge.
- Error (TOAST UI): #fa2828 red.
- Input resting (corporate): transparent field, 1px #51565F border, #727781 text.

## 15. Motion & Easing
No motion or easing values were captured in live inspection, so specifics are not asserted here. In keeping with the system's flat, clean, contrast-driven character, treat motion as restrained and functional: brief, confident transitions on the corporate CTAs and the lightest possible state feedback on TOAST UI's dense widgets, where the #00a9ff → #0088d9 darkening communicates interaction without distracting from data. Favor subtle, purposeful movement over decorative animation.

---
**Verified:** 2026-06-01
**Tier 1 sources:** https://www.nhncloud.com (live corporate DOM — #125DE6 primary CTAs, #111111 dark CTA, #51565F input border, #727781 muted text, Pretendard Variable 16/15/17px), https://ui.toast.com (TOAST UI system entry point — open-source widget library), https://github.com/nhn (nhn org source CSS — tui.grid grid.css #00a9ff/#0088d9/#e5f6ff 13px, tui.editor editor.css #00a9ff/#009bf2/#fa2828/#f7f9fc radius 4px)
**Tier 2 sources:** getdesign.md/nhncloud — NOT LISTED. refero — not listed. Note: corporate brand blue #125DE6 differs from TOAST UI accent #00a9ff (two surfaces).
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof block)
