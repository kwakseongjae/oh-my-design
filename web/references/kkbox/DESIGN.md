---
id: kkbox
name: "KKBOX"
country: TW
category: entertainment
homepage: "https://www.kkbox.com"
primary_color: "#00B6E1"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kkbox.com&sz=128"
verified: "2026-06-01"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#00b6e1"
    brand: "#00b6e1"
    canvas: "#111111"
    foreground: "#ffffff"
    on-primary: "#00b6e1"
    surface: "#f2f2f2"
  typography:
    family: { sans: "Work Sans", mono: "SF Mono" }
    display-hero: { size: 120, weight: 600, use: "Hero headings, white on dark ground" }
    body:         { size: 14, weight: 400, use: "Body copy, Helvetica Neue, quiet" }
    button:       { size: 18, weight: 500, use: "Download CTA label" }
  spacing: { sm: 16, base: 48 }
  rounded: { sm: 30, md: 30, lg: 30, full: 9999 }
  shadow:
    none: "Depth via tonal contrast — bright pill on near-black ground, not drop shadow"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#f2f2f2", fg: "#00b6e1", radius: "30px", padding: "16px 48px", height: "57px", font: "18px / 500", use: "Primary download CTA, light pill floating on #111111 ground" }
---

# Design System Inspiration of KKBOX

## 1. Visual Theme & Atmosphere

KKBOX wraps its interface in a near-black, cinematic canvas where the music itself feels like the source of light. The ground is a deep #111111 that recedes into the background, letting album art, hero photography, and oversized white display type carry the visual weight. A single signature accent — the KKBOX cyan-blue #00B6E1 — punches through the darkness, reserved for the moments that matter most, like the download call to action. The mood is premium and audio-forward, the kind of room you'd want to sit in with headphones on. Typography does the heavy lifting here: Work Sans at hero scale (up to 120px) gives the page an editorial, almost poster-like confidence. Softly rounded pill buttons and generous spacing keep the experience calm rather than busy, so the brand feels less like a utility and more like a stage.

## 2. Color Palette & Roles

The palette is intentionally narrow and high-contrast, built for a dark environment where one accent has to do all the work.

- **Ground / Canvas** — `#111111` (near-black) — the dominant surface behind nearly everything; sets the cinematic, music-forward mood.
- **Brand Accent** — `#00B6E1` (KKBOX cyan-blue) — the single signature color; used sparingly for the download CTA text and brand moments so it never loses impact.
- **Light Button Surface** — `#F2F2F2` — a pale neutral pill surface that floats on the dark ground and carries the cyan accent.
- **Display Text** — `#FFFFFF` (white) — headings and hero copy set in white for maximum legibility against the near-black canvas.

Role discipline matters more than palette size: the cyan is an event, not a texture. Let the near-black ground and white type establish the room, and bring #00B6E1 in only at the decision point.

## 3. Typography Rules

Two families split the labor. **Work Sans** is the display voice — confident, oversized, and editorial — running all the way up to 120px at weight 600 for hero headings, always in white on the dark ground. **Helvetica Neue** handles body copy at a quiet 14px, stepping back so the display type and album art can lead. The contrast between a 120px hero and 14px body is dramatic by design: it creates a poster-like hierarchy where there's never any doubt about where to look first. Keep headings white; keep body restrained; let scale, not color, signal importance.

## 4. Component Stylings

### Download Button

**Default (light pill)**
- Background: #F2F2F2
- Text: #00B6E1
- Border: none
- Radius: 30px
- Padding: 16px 48px
- Height: 57px
- Font: 18px / 500
- Use: Primary download call to action; a light pill that floats on the #111111 ground and carries the brand cyan as its label.

## 5. Layout Principles

KKBOX leans on the dark canvas as negative space rather than filling it. Hero sections give oversized Work Sans display type room to breathe, with generous padding around the pill CTA (16px 48px) so the interactive target never feels crowded. The composition is vertical and editorial — large headline, supporting imagery, a single clear action — reading more like a music poster than a dense product page. Because the ground is near-black, content blocks are defined by spacing and contrast instead of heavy dividers or boxed containers, keeping the page cinematic and uncluttered.

## 6. Depth & Elevation

Depth here is achieved through contrast, not heavy shadow. The light #F2F2F2 pill reads as elevated simply because it's a bright surface lifting off the #111111 ground — the tonal jump does the work a drop shadow normally would. The fully rounded 30px radius on the button softens its edge and reinforces the sense of a discrete, tappable object resting on the dark plane. Keep elevation cues subtle and tonal: let brightness and rounding signal interactivity rather than stacking visible shadow layers.

## 7. Do's and Don'ts

### Do
- Keep the canvas near-black (#111111) so album art and white type carry the light.
- Reserve the cyan #00B6E1 for the single most important action.
- Go big with Work Sans display type for an editorial, poster-like hero.
- Use the pale #F2F2F2 pill to lift the CTA off the dark ground.

### Don't
- Scatter the cyan accent across many elements — it loses its punch.
- Crowd the hero; the dark negative space is part of the brand.
- Set headings in a color other than white on the dark canvas.
- Square off the buttons — the soft 30px pill is part of the character.

## 8. Responsive Behavior

The blob captures KKBOX at desktop scale, where the hero headline reaches up to 120px in Work Sans. The system's logic — a near-black ground, a single light pill CTA, and a dramatic gap between display and body type — adapts naturally to smaller viewports by scaling the oversized headline down while preserving the same hierarchy and the same generous 16px 48px tap padding on the pill. The download button's 57px height already sits comfortably above a thumb-friendly minimum, so the primary action stays easy to hit on a phone. (Exact mobile breakpoints and resized values were not captured in this inspection; describe responsive intent qualitatively rather than asserting specific small-screen numbers.)

## 9. Agent Prompt Guide

When generating KKBOX-flavored UI, lead with the atmosphere: a near-black #111111 canvas, white Work Sans display type at large scale, and exactly one accent — cyan #00B6E1 — held in reserve for the primary action. Build the primary CTA as a light #F2F2F2 pill with #00B6E1 label text, a 30px radius, 57px height, and 16px 48px padding at 18px/500. Set body copy in Helvetica Neue at 14px and keep it quiet. Phrase prompts around restraint: "single cyan accent on a near-black ground," "oversized editorial headline," "soft pill CTA." Avoid asking for additional colors, shadows, or squared corners — the brand's identity lives in the discipline of one accent, one ground, and one bold typeface.

## 10. Voice & Tone

KKBOX speaks like a confident host of a premium listening room — calm, music-forward, and unhurried. The tone is more cinematic than promotional: it trusts the work (the music, the art) to do the persuading, so copy stays clean and direct rather than shouty. Calls to action are simple and singular, matching the interface's one-accent discipline. The voice carries the assurance of a pioneer who's been doing this longer than most, without needing to say so loudly.

## 11. Brand Narrative

KKBOX is Taiwan's pioneering music-streaming service, the audio flagship of the KKCompany group. Its story is one of being first and staying premium — a service that helped define what streaming felt like in its region and has carried a refined, design-led sensibility ever since. The near-black canvas, the singular cyan accent, and the editorial display type all tell the same story: this is a brand that treats music as the main event and the interface as a quiet, cinematic frame around it.

## 12. Principles

- **One accent, used with intent** — the cyan #00B6E1 appears where decisions happen, never as decoration.
- **Darkness as a stage** — the #111111 ground exists to make music, art, and white type glow.
- **Editorial scale** — oversized Work Sans display type gives every page a poster's confidence.
- **Calm over clutter** — generous spacing and soft pills keep the experience premium and unhurried.

## 13. Personas

- **The Headphone Listener** — wants an immersive, distraction-free space to discover and play music; rewarded by the cinematic dark canvas and uncluttered hero.
- **The Returning Subscriber** — values a premium, dependable service from a regional pioneer; the singular clear CTA makes the next action obvious.
- **The Design-Conscious Browser** — appreciates editorial typography and restraint; drawn in by the oversized Work Sans display type and the disciplined single accent.

## 14. States

The captured inspection documents the download button's default (resting) state: an #F2F2F2 pill with #00B6E1 label text, 30px radius, 57px height, and 18px/500 type on the #111111 ground. Hover, pressed, focus, and disabled states were not captured in this live inspection, so they are intentionally left undocumented rather than invented. For consistency, any future interactive states should stay within the same palette — adjusting the pill's brightness or the cyan's intensity rather than introducing new hues — to preserve the one-accent discipline.

## 15. Motion & Easing

No motion timings, durations, or easing curves were captured in this inspection, so none are asserted here. In keeping with the brand's calm, cinematic character, any motion should feel unhurried and smooth — gentle transitions that match the premium, music-forward atmosphere rather than snappy or playful animation. Treat motion as the brand treats color: sparingly and with intent.

---
**Verified:** 2026-06-01
**Tier 1 sources:** https://www.kkbox.com (live homepage — colors, typography, download button), https://www.kkcompany.com (KKCompany group brand site), https://github.com/KKBOX (brand-owned engineering org)
**Tier 2 sources:** getdesign.md/kkbox — NOT LISTED. refero — not listed.
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof block)
