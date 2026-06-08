---
id: "91app"
name: "91APP"
country: TW
category: ecommerce
homepage: "https://www.91app.com"
primary_color: "#061C3D"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=91app.com&sz=128"
verified: "2026-06-01"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "navy #061C3D is the structural primary (text + headings + primary button); coral #E85040 is the lone action accent, kept rare"
  colors:
    primary: "#061C3D"
    brand: "#061C3D"
    foreground: "#061C3D"
    body: "#061C3D"
    heading: "#061C3D"
    accent: "#E85040"
    error: "#CB200E"
    muted: "#F7F6FB"
    canvas: "#FFFFFF"
    on-primary: "#FFFFFF"
  typography:
    family: { sans: "Noto Sans TC", fallback: "Helvetica" }
    hero:   { size: 44, weight: 700, use: "Top-of-page hero heading in structural navy, carries brand authority" }
    body:   { size: 16, weight: 400, use: "Standard reading text, calm and scannable" }
    button: { size: 16, weight: 600, use: "Primary / neutral button label" }
    button-accent: { size: 16, weight: 500, use: "Coral CTA label" }
  spacing: { sm: 8, base: 16, lg: 24, xl: 32 }
  rounded: { sm: 3, lg: 16 }
  shadow:
    flat: "none — separation via color/fill contrast, no literal shadow stacking"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#061C3D", fg: "#FFFFFF", radius: 16, padding: "48px height", font: "16px/600", use: "dominant action" }
    button-coral: { type: button, bg: "#E85040", fg: "#FFFFFF", radius: 16, padding: "40px height", font: "16px/500", use: "lone decisive accent, kept rare" }
    button-neutral: { type: button, bg: "#F7F6FB", fg: "#061C3D", radius: 3, padding: "48px height", font: "16px/600", use: "secondary action" }
    hero-heading: { type: card, fg: "#061C3D", font: "44px/700 Noto Sans TC", use: "top-of-page authority heading" }
omd: "0.1"
---
# Design System Inspiration of 91APP

## 1. Visual Theme & Atmosphere

91APP carries the composure of retail infrastructure built to be trusted at scale — the brand of Taiwan's leading omnichannel OMO (online-merge-offline) commerce SaaS. Its identity rests on a deep structural navy (#061C3D) that anchors text, headings, and the primary call-to-action, giving every screen the gravity of a B2B platform that merchants stake their storefronts on. Against a clean white ground (#FFFFFF), that navy reads as steady and engineered rather than playful. A coral-red accent (#E85040) provides the single point of energy — the action color reserved for moments that should feel decisive. Traditional-Chinese Noto Sans TC sets the type with neutral, legible clarity suited to a Taiwanese merchant audience. The overall atmosphere is one of confident retail infrastructure: orderly, generously rounded at the touch points, and quietly serious.

## 2. Color Palette & Roles

The palette is disciplined and role-driven, with navy as the dominant structural color and coral as the lone action accent.

| Token | Value | Role |
|-------|-------|------|
| Structural navy | #061C3D | Body text, headings, primary button background |
| Action coral | #E85040 | Coral CTA background — the action accent |
| Red emphasis | #CB200E | Emphasis text, highlight callouts |
| Neutral fill | #F7F6FB | Neutral / secondary button fill |
| Ground | #FFFFFF | Page background, text on filled buttons |

Navy (#061C3D, rgb 6,28,61) does the heavy lifting: it is the text color, the heading color, and the fill of the primary button — chosen as the brand's primary color precisely because it carries so much of the interface. Coral (#E85040, rgb 232,80,64) is the deliberate counterpoint, an action accent that should stay rare to keep its decisiveness. Red emphasis (#CB200E) is a hotter red reserved for emphasis text. The neutral fill (#F7F6FB) gives secondary surfaces a soft, near-white lift off the pure-white ground.

## 3. Typography Rules

Type is set in Noto Sans TC (Traditional Chinese), with Helvetica as the fallback — a neutral, highly legible pairing appropriate for a Taiwanese merchant audience. Body copy runs at 16px. Hero headings step up to 44px at weight 700 in structural navy (#061C3D), giving the top of the page clear authority without ornament. The hierarchy is straightforward: large bold navy headings over calm 16px body, letting the content of a commerce platform stay scannable.

- Body: 16px, Noto Sans TC / Helvetica
- Hero heading: 44px / 700, #061C3D, Noto Sans TC

## 4. Component Stylings

### Primary Button

**Default (navy)**
- Background: #061C3D
- Text: #FFFFFF
- Border: none
- Radius: 16px
- Height: 48px
- Font: 16px / 600
- Use: Primary call-to-action — the dominant navy action on white ground

### Coral CTA Button

**Default (coral accent)**
- Background: #E85040
- Text: #FFFFFF
- Border: none
- Radius: 16px
- Height: 40px
- Font: 16px / 500
- Use: The single energetic action accent — reserve for decisive, attention-drawing moments

### Neutral Button

**Default (secondary)**
- Background: #F7F6FB
- Text: #061C3D
- Border: none
- Radius: 3px
- Height: 48px
- Font: 16px / 600
- Use: Secondary / neutral action on a soft near-white fill

### Hero Heading

**Default**
- Background: transparent
- Text: #061C3D
- Border: none
- Font: 44px / 700
- Use: Top-of-page heading in Noto Sans TC carrying brand authority

## 5. Layout Principles

The layout reads as clean retail infrastructure: a white ground (#FFFFFF) gives content room to breathe, navy structure organizes the hierarchy, and the coral accent is placed sparingly so the eye knows exactly where the action is. Generously rounded primary buttons (16px radius) sit as confident, tappable anchors. Secondary surfaces use the neutral fill (#F7F6FB) to separate without hard borders, keeping the page calm and uncluttered. The composition favors order and legibility over decoration — the look of a platform whose job is to make merchants feel secure.

## 6. Depth & Elevation

Depth is handled with restraint. Rather than heavy shadows, separation comes from color and fill: the neutral #F7F6FB surfaces lift gently off the pure-white ground, and the saturated navy and coral buttons stand forward through contrast alone. The generous 16px corner radius on primary actions softens the interface and signals approachability, while the tighter 3px radius on the neutral button reads as a more utilitarian, grounded surface. The overall sense of elevation is flat and modern, leaning on contrast and rounding instead of literal shadow stacking.

## 7. Do's and Don'ts

### Do
- Use navy #061C3D as the structural backbone — text, headings, and the primary button.
- Keep coral #E85040 rare, reserved for the single most important action.
- Set type in Noto Sans TC with Helvetica fallback; body at 16px.
- Give primary actions the generous 16px radius for an approachable, tappable feel.
- Lift secondary surfaces with the soft #F7F6FB neutral fill instead of hard borders.

### Don't
- Spread coral #E85040 across many elements — it loses its decisive force.
- Put navy text on navy fill or otherwise compromise the navy/white contrast.
- Mix the red emphasis #CB200E into general body copy; keep it for emphasis.
- Invent ornament or heavy shadows — the brand reads engineered and calm.

## 8. Responsive Behavior

The brand's button system is sized for touch and scale: a 48px-tall primary button and 48px neutral button give comfortable tap targets, while the 40px coral CTA reads as a slightly more compact accent. With a 16px body size and large 44px hero headings, the hierarchy holds up from desktop down to mobile merchant views. The white ground and soft neutral fills keep content legible across viewport sizes without relying on layout-specific decoration. (Specific breakpoint values are not provided in the source; size and contrast carry the responsive behavior.)

## 9. Agent Prompt Guide

When generating UI in the 91APP style, instruct the agent: build on a white ground (#FFFFFF) with deep navy (#061C3D) as the structural color for body text, headings, and the primary button. Make the primary button navy with white text, 16px radius, 48px height, 16px/600 type. Reserve a single coral (#E85040) action accent — white text, 16px radius, 40px height, 16px/500 — for the most decisive call-to-action only. For secondary actions, use the neutral fill #F7F6FB with navy text, 3px radius, 48px height, 16px/600. Set hero headings at 44px/700 in navy. Use Noto Sans TC (Helvetica fallback), 16px body. Keep the feel calm, engineered, and trustworthy — retail infrastructure, not decoration. Use red emphasis #CB200E only for emphasized text.

## 10. Voice & Tone

The voice is that of trustworthy retail infrastructure — confident, clear, and B2B-grade. It speaks to merchants who are betting their storefronts on the platform, so it favors steadiness and competence over hype. Like the navy-dominant palette, the tone is structural and dependable, with energy reserved for the moments that matter. It is professional Traditional-Chinese-first, addressing a Taiwanese commerce audience directly and practically.

## 11. Brand Narrative

91APP is Taiwan's leading omnichannel retail-commerce SaaS, built around OMO — online-merge-offline. Its visual identity tells that story: a deep-navy structural brand conveys the reliability of infrastructure merchants depend on, while a coral-red action accent on a clean white ground signals the decisive moments of commerce. The Traditional-Chinese Noto Sans typography and generously rounded primary buttons round out a brand that reads as confident, approachable retail infrastructure — serious where it counts, welcoming at the point of action.

## 12. Principles

- Structure first: navy carries text, headings, and the primary action — the brand's backbone.
- One point of energy: coral is the lone action accent, kept rare to stay decisive.
- Clarity over ornament: white ground, legible 16px Noto Sans TC, no unnecessary decoration.
- Approachable touch points: generous 16px rounding on primary actions invites interaction.
- Trust through restraint: soft neutral fills and flat depth keep the platform calm and credible.

## 13. Personas

- **The Taiwanese merchant** — runs an omnichannel store and needs a platform that feels dependable; reassured by the navy structural brand and clear, legible interface.
- **The operations lead** — manages day-to-day commerce flows and values the unambiguous hierarchy where coral marks exactly where to act.
- **The decision-maker evaluating SaaS** — reads the engineered, confident aesthetic as a signal of trustworthy retail infrastructure worth staking a business on.

## 14. States

State styling is expressed through the documented button variants. The primary navy button (#061C3D background, white text, 16px radius, 48px height, 16px/600) is the default decisive action. The coral CTA (#E85040 background, white text, 16px radius, 40px height, 16px/500) marks the single high-energy action state. The neutral button (#F7F6FB fill, navy text, 3px radius, 48px height, 16px/600) covers the calm secondary state. Red emphasis (#CB200E) signals an emphasized or highlighted text state. (Hover, pressed, focus, and disabled values are not provided in the source; derive them by darkening or lightening these base colors while preserving the navy/coral roles.)

## 15. Motion & Easing

Specific motion and easing values are not provided in the source. In keeping with the brand's engineered, trustworthy character, any motion should be restrained and purposeful — calm transitions that reinforce stability rather than draw attention to themselves, with the coral action accent reserved for the moments worth animating.

---
**Verified:** 2026-06-01
**Tier 1 sources:** https://www.91app.com (live DOM — body text, primary/coral/neutral buttons, hero heading, all hex/px values), https://91app.tech (brand-owned regional engineering/tech source), https://github.com/91APP (brand-owned regional org)
**Tier 2 sources:** getdesign.md/91app — NOT LISTED. refero — not listed. Note: navy #061C3D is structural/dominant; coral #E85040 is the action accent (brand-color choice: navy chosen as primary as it carries text+headings+primary button).
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof block)
