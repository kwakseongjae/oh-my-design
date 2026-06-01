---
id: "velog"
name: "velog"
country: KR
category: developer-tools
homepage: "https://velog.io"
primary_color: "#12B886"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=velog.io&sz=128"
verified: "2026-06-01"
omd: "0.1"
ds:
  name: velog (open source)
  url: "https://github.com/velog-io/velog"
  type: system
  description: velog's production frontend is fully open-source (MIT); its design tokens live in src/lib/styles (themes.ts + palette.ts), built on the Open Color palette.
---
# Design System Inspiration of velog

## 1. Visual Theme & Atmosphere

velog is a Korean developer-blogging platform built by velopert (Minjun Kim), and its surface is unmistakably reading-first: calm, minimal, and content-forward, with prose given room to breathe rather than competing with chrome. The palette is literally the Open Color system — a clean teal brand scale running from the near-white teal0 #F3FFFB up to the deep teal9 #087F5B, paired with a full neutral gray scale from gray0 #F8F9FA to gray9 #212529. The atmosphere is editorial and quiet: a soft gray page background (#F8F9FA) holds white content surfaces, dark near-black text (#212529) carries the writing, and the brand teal (#12B886) appears sparingly as the signal color for action. Nothing shouts; the teal is a confident accent reserved for the write button and primary moments rather than a wash across the page. The result feels engineered for long-form technical reading — high legibility, generous neutrality, and a single decisive brand hue that tells you exactly where to click.

## 2. Color Palette & Roles
velog's color system is the Open Color palette, surfaced through velog-client's `palette.ts` (raw scales) and `themes.ts` (semantic `themedPalette` tokens). The teal scale is the brand spine and the gray scale carries structure and text; red appears only for destructive intent.

**Brand / Teal scale**
- teal0: `#F3FFFB`
- teal1: `#C3FAE8`
- teal2: `#96F2D7`
- teal3: `#63E6BE`
- teal4: `#38D9A9`
- teal5: `#20C997` (themedPalette primary2)
- teal6: `#12B886` (BRAND / primary — themedPalette primary1)
- teal7: `#0CA678`
- teal8: `#099268`
- teal9: `#087F5B`

**Neutral / Gray scale**
- gray0: `#F8F9FA` (page background — bg_page1)
- gray1: `#F1F3F5`
- gray2: `#E9ECEF`
- gray3: `#DEE2E6`
- gray4: `#CED4DA`
- gray5: `#ADB5BD`
- gray6: `#868E96`
- gray7: `#495057`
- gray8: `#343A40`
- gray9: `#212529` (primary text — text1)

**Semantic roles (themedPalette)**
- Primary: `#12B886` (primary1)
- Primary alt: `#20C997` (primary2)
- Destructive: `#FF6B6B` (destructive1 / red5)
- Text: `#212529` (text1)
- Page background: `#F8F9FA` (bg_page1)

Role guidance: teal6 #12B886 is the single primary-action color (the write button); the gray scale does all structural and typographic work (page #F8F9FA, text #212529); red5 #FF6B6B is reserved strictly for destructive actions. The teal is an accent, not a fill — use it where action lives, not as background.

## 3. Typography Rules
velog uses a native system font stack rather than a custom typeface, which keeps the reading surface fast and OS-consistent. Body copy renders through the system UI stack (-apple-system / system-ui) at a 16px base. The primary text color is gray9 #212529 — a near-black that delivers strong contrast against the gray0 #F8F9FA page and white content surfaces without the harshness of pure #000.

- Font family: system stack (-apple-system / system-ui)
- Body size: 16px
- Primary text color: #212529 (gray9 / text1)

The intent is editorial neutrality: let the writer's content set the tone while the system font and a single dark text color hold legibility steady across platforms.

## 4. Component Stylings

### Login button (header)

**Default**
- Background: #212529
- Text: #FFFFFF
- Border: none
- Radius: 16px
- Height: 32px
- Font: 16px / 700
- Use: dark pill in the top-right of the header for sign-in / sign-up entry

### Write button (primary action)

**Default**
- Background: #12B886
- Text: #FFFFFF
- Border: none
- Use: the brand teal primary-action button (buttonColorMap) — the single decisive call-to-action for composing a post

### Header bar

**Default**
- Background: #FFFFFF
- Text: #212529
- Font: 16px (system stack)
- Use: top navigation surface sitting on the gray0 page, holding brand and the dark login pill

### Page surface

**Default**
- Background: #F8F9FA
- Text: #212529
- Font: 16px (system stack)
- Use: the soft-gray reading canvas (bg_page1) that frames white content blocks

## 5. Layout Principles
velog is structured as a reading surface first. A soft gray page background (gray0 #F8F9FA) acts as the canvas, white surfaces (the header #FFFFFF and content blocks) sit on top, and near-black text (#212529) carries the writing. The layout logic is qualitative and editorial: maximize legibility and whitespace, keep chrome minimal, and let long-form technical content lead. Action is concentrated rather than scattered — the dark login pill anchors the header's top-right, and the teal write button is the single bright signal in an otherwise neutral field.

## 6. Depth & Elevation
velog's depth language is restrained and flat — elevation comes from value contrast, not heavy shadow. The gray0 #F8F9FA page sits one step back from the white (#FFFFFF) header and content surfaces, so the layering reads through tone alone. The dark login pill (#212529, radius 16px) is the heaviest visual object in the header, gaining presence from its near-black fill and rounded form rather than from a drop shadow. The overall effect is calm and tactile-but-quiet: surfaces are distinguished by the gray-to-white step, and the teal accent provides the only chromatic lift.

## 7. Do's and Don'ts

### Do
- Reserve teal #12B886 for the primary action (the write button) — it is a signal, not a background wash.
- Use the gray scale for all structure and text: page #F8F9FA, surfaces #FFFFFF, text #212529.
- Keep the dark login pill at radius 16px and height 32px as documented.
- Default to the system font stack (-apple-system / system-ui) at 16px for body.

### Don't
- Use red — #FF6B6B (destructive1) is reserved strictly for destructive actions.
- Introduce pure black for text; the system's near-black is #212529.
- Spread teal across large fills; it loses its role as the single action color.
- Add heavy shadows — depth here is carried by the gray-to-white value step.

## 8. Responsive Behavior
The blob does not carry measured breakpoint, grid, or container values for velog, so responsive behavior is described qualitatively rather than with invented numbers. The surface is content-forward and reading-first, which favors a single legible column of prose that stays comfortable across viewport widths. The header holds the brand and the dark login pill (height 32px, radius 16px); the teal write button remains the primary action target at any size. Maintain the gray0 #F8F9FA page background and #FFFFFF surfaces across breakpoints so the editorial value contrast is preserved on both desktop and mobile.

## 9. Agent Prompt Guide
When generating UI in velog's style, instruct the agent: "Build a calm, reading-first developer-blog surface. Use a soft gray page background #F8F9FA (gray0) with white #FFFFFF surfaces and near-black text #212529 (gray9). Use the system font stack (-apple-system / system-ui) at 16px for body. Make teal #12B886 the single primary-action color — apply it only to the write/primary button, never as a large fill. Render the sign-in control as a dark pill: background #212529, white text, border-radius 16px, height 32px, font 16px/700. Reserve #FF6B6B strictly for destructive actions. Keep depth flat: layer surfaces by the gray-to-white value step rather than shadows. Lean on the Open Color teal scale (teal0 #F3FFFB through teal9 #087F5B) and gray scale (gray0 #F8F9FA through gray9 #212529) for any tints or states."

## 10. Voice & Tone
velog's voice is that of a quiet, capable tool that gets out of the writer's way. It is editorial and engineer-minded: plain, precise, and unhurried, trusting the developer's content to lead. There is no marketing flourish in the surface — the tone matches the visual restraint, favoring clarity over persuasion. The single teal accent is the closest thing to an exclamation point, and even that is reserved for the one moment that matters: writing.

## 11. Brand Narrative
velog was created by velopert (Minjun Kim) as a developer-blogging platform for the Korean developer community, and its character flows directly from that origin. The production frontend is fully open-source (MIT), and the design tokens live transparently in `src/lib/styles` — `themes.ts` and `palette.ts` — built on the Open Color palette. That openness is the narrative: velog is a tool by and for developers, where the teal brand and the gray reading surface aren't decoration but the legible, honest scaffolding around technical writing. The brand reads as calm, minimal, and content-forward — a place where the words come first and the interface is just the quiet teal-and-gray frame around them.

## 12. Principles
- Reading-first: legibility and whitespace before chrome; long-form content leads.
- One signal color: teal #12B886 marks action and nothing else.
- Neutral structure: the gray scale (#F8F9FA → #212529) carries page, surface, and text.
- Restraint in red: #FF6B6B is destructive-only.
- Open and honest: tokens are open-source, built on the Open Color palette.
- Flat depth: layer by value contrast, not shadow.

## 13. Personas
- The developer-writer: drafting long-form technical posts and wanting an editorial, distraction-free canvas. The system answers with a #F8F9FA reading surface, #212529 text, and a single teal write button as the clear next step.
- The developer-reader: scanning technical content for signal. The high-contrast near-black text on soft gray, the system font at 16px, and the minimal chrome keep attention on the writing.

## 14. States
- Default / primary action: teal #12B886 (primary1) — the write button.
- Primary alt / hover-tier tint: #20C997 (primary2 / teal5) is the documented secondary teal step for primary action.
- Destructive: #FF6B6B (destructive1 / red5), reserved for destructive actions only.
- Text (resting): #212529 (text1).
- Page (resting): #F8F9FA (bg_page1).

The blob does not carry measured per-state hover/pressed/focus values for individual components, so those interaction states are described by the available token roles rather than invented numbers; lean on the teal and gray scales (e.g., adjacent teal steps such as teal5 #20C997 and teal7 #0CA678) for tint progressions when a state shift is needed.

## 15. Motion & Easing
The blob does not carry measured duration, easing-curve, or transition values for velog, so motion is described qualitatively rather than with invented numbers. In keeping with the calm, reading-first character and flat depth, motion should be minimal and unobtrusive — gentle, quick transitions that never pull focus from the content. The teal accent is the one element worth a subtle emphasis on interaction; everything else should settle quietly so the reading surface stays still.

---
**Verified:** 2026-06-01
**Tier 1 sources:** https://velog.io (live DOM: page background #F8F9FA, header #FFFFFF, login pill #212529 / white / radius 16px / height 32px / 16px-700, system font 16px, brand teal #12B886 write button), https://github.com/velog-io/velog (open-source DS — tokens in src/lib/styles built on Open Color), https://github.com/velopert/velog-client (source files palette.ts + themes.ts giving the teal/gray/red scales and themedPalette semantic tokens)
**Tier 2 sources:** getdesign.md/velog — NOT LISTED. refero — not listed (dev-blog SaaS absent).
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof block)
