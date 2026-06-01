---
id: hahow
name: "Hahow"
country: TW
category: education
homepage: "https://hahow.in"
primary_color: "#00CCB4"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=hahow.in&sz=128"
verified: "2026-06-01"
omd: "0.1"
ds:
  name: "hahow-design"
  url: "https://github.com/hahow/hahow-design"
  type: system
  description: "Hahow's open-source design-system theme — Primary/Secondary token scales (Primary 500 #00ccb4)."
---

# Design System Inspiration of Hahow

## 1. Visual Theme & Atmosphere

Hahow (好學校) is Taiwan's leading EdTech course marketplace, and its interface carries the warmth of a place that wants you to keep learning rather than the polish of a place that wants to close a sale. The atmosphere is friendly, approachable, and unmistakably human: a soft gray-blue page canvas of #F5F7F9 lets bright content breathe, while a vivid brand teal of #00CCB4 — drawn directly from Hahow's own open-source design tokens — signals interactivity and energy without ever shouting. Cards and buttons settle on a gentle 8px radius that rounds every hard edge into something inviting, and text sits in calm near-black #262626 for comfortable, sustained reading. Warm promotional accents in orange #FA8C16 and coral #F65F55 punctuate the surface where excitement is earned — a sale, a featured course, a moment worth noticing. Set throughout in PingFang TC, the typography feels native and legible to a Traditional-Chinese audience. The overall effect is encouraging and personable, the opposite of corporate sterility — a learning surface that feels like a good teacher: clear, warm, and on your side.

## 2. Color Palette & Roles

Hahow's color system is anchored by a teal Primary scale published in its open-source `hahow-design` theme, layered over a quiet neutral canvas and lifted by warm promotional accents.

- **Brand / Primary 500** — #00CCB4. The signature teal; interactive emphasis, brand identity, primary action text.
- **Primary 100** — #A3FFE8. Lightest teal tint for subtle fills and soft backgrounds.
- **Primary 400** — #23D9BD. A slightly deeper teal step for hover and gradient transitions.
- **Primary 800** — #006166. Deep teal for high-contrast text or pressed states on teal surfaces.
- **Primary 900** — #00444D. Darkest teal anchor for the scale.
- **Secondary 500** — #FFB940. Warm amber accent; complementary highlight to the teal.
- **Page background** — #F5F7F9. Soft gray-blue canvas behind all content.
- **Body text** — #262626 (near-black), with secondary text at rgba(0,0,0,0.65).
- **Promotional orange** — #FA8C16. Energetic accent for sales and featured callouts.
- **Coral** — #F65F55. Warm secondary promotional accent.
- **Chip fill** — rgba(0,0,0,0.04). Faint neutral wash for tags and metadata chips.

## 3. Typography Rules

- **Typeface:** PingFang TC across the interface — native, legible Traditional-Chinese rendering.
- **Body:** 16px, primary text color #262626.
- **Heading:** 24px at weight 600.
- **Secondary text:** rgba(0,0,0,0.65) for de-emphasized labels and metadata.
- **Hierarchy principle:** lean on size and the near-black body color for contrast; reserve teal #00CCB4 for interactive text rather than headings, keeping reading surfaces calm.

## 4. Component Stylings

### Button

**Teal Outline (primary action)**
- Background: transparent
- Text: #00CCB4
- Border: 2px solid #DCF9F3
- Radius: 8px
- Padding: not separately verified
- Height: 42px
- Font: 16px / 600
- Use: primary call-to-action on the live hahow.in surface

**White Card Button**
- Background: #FFFFFF
- Text: #595959
- Border: not separately verified
- Radius: 8px
- Padding: not separately verified
- Height: not separately verified
- Font: not separately verified
- Use: neutral card-level action sitting on the gray-blue canvas

### Tag Chip

**Default**
- Background: rgba(0,0,0,0.04)
- Text: rgba(0,0,0,0.65)
- Border: none
- Radius: 20px
- Padding: not separately verified
- Height: 33px
- Font: 14px / 400
- Use: metadata, category, and filter tags

## 5. Layout Principles

- Content sits on a soft gray-blue #F5F7F9 canvas, letting white cards and bright accents read as the foreground.
- Rounded geometry is consistent: 8px on cards and buttons, 20px (fully rounded) on tag chips.
- Generous, calm spacing keeps the marketplace browsable rather than dense — the surface invites scanning across many courses.
- Teal is used sparingly as an interactive signal, never as a flood, preserving the quiet neutral base.

## 6. Depth & Elevation

Hahow's elevation language is restrained and soft rather than dramatic. White cards (#FFFFFF) lift off the gray-blue #F5F7F9 canvas largely through tonal contrast and rounded 8px corners rather than heavy shadow. The teal outline button uses a 2px solid #DCF9F3 border — a pale teal ring — to define its edge instead of a drop shadow, reinforcing a flat, friendly aesthetic. Depth here is implied by layering light surfaces over the muted background, keeping the interface airy and approachable. (Exact shadow values were not captured in the blob and are intentionally not specified.)

## 7. Do's and Don'ts

### Do
- Anchor interactive emphasis in the brand teal #00CCB4 from the official tokens.
- Keep body text in near-black #262626 and secondary text in rgba(0,0,0,0.65) for calm, readable hierarchy.
- Use the soft #F5F7F9 canvas to let white cards and bright accents stand out.
- Reserve warm orange #FA8C16 and coral #F65F55 for genuinely promotional moments.

### Don't
- Flood surfaces with teal — it is a signal, not a background.
- Sharpen the corners; the 8px (and 20px chip) radii are core to the friendly feel.
- Introduce a heavy, corporate shadow language that contradicts the flat, warm aesthetic.
- Substitute a non-native typeface for PingFang TC in Traditional-Chinese contexts.

## 8. Responsive Behavior

The live hahow.in marketplace is a course-browsing surface built to scale from desktop grids to mobile stacks. Cards keep their 8px radius and white #FFFFFF fill across breakpoints, and tag chips stay fully rounded at 20px so metadata remains legible when reflowed. Touch targets hold comfortable heights — the teal outline button at 42px and tag chips at 33px — that translate naturally to mobile tapping. (Specific breakpoint widths were not captured in the blob and are not specified here; the verified pattern is consistent rounding, consistent color roles, and generous tap-friendly sizing across viewports.)

## 9. Agent Prompt Guide

When generating UI in Hahow's style, instruct the agent: "Use a soft gray-blue page background (#F5F7F9) with white (#FFFFFF) content cards at 8px radius. Make the primary action a teal outline button — transparent background, #00CCB4 text, 2px solid #DCF9F3 border, 8px radius, 42px height, 16px/600 PingFang TC. Render tags as fully-rounded chips (20px radius, 33px height) with a rgba(0,0,0,0.04) fill and rgba(0,0,0,0.65) text at 14px/400. Keep body text near-black (#262626) at 16px and headings at 24px/600. Use teal #00CCB4 only for interactive emphasis. Reserve orange #FA8C16 and coral #F65F55 strictly for promotional callouts. Aim for a warm, encouraging, human EdTech tone — friendly, never corporate."

## 10. Voice & Tone

Hahow's voice is encouraging and human — the tone of a supportive teacher and a welcoming community of learners (好學校 literally means "good school"). It is warm and approachable rather than corporate or transactional, celebrating curiosity and the act of learning itself. Microcopy should feel like gentle encouragement: inviting people to start, to keep going, to share what they know. Even promotional moments, signaled by the warm orange and coral accents, carry friendliness over hard-sell urgency.

## 11. Brand Narrative

Hahow built Taiwan's leading EdTech course marketplace on a simple, human premise: everyone has something to learn and something to teach. As 好學校 — "the good school" — it positions itself as an open, encouraging place where knowledge moves between people rather than being handed down from an institution. The visual identity reinforces that story: a bright, friendly teal pulled from its own open-source design system, a soft and unintimidating canvas, rounded approachable shapes, and native Traditional-Chinese typography. Every choice tells the same narrative — learning here is warm, accessible, and on your side.

## 12. Principles

- **Warmth over polish** — feel like a good teacher, not a sales funnel.
- **Calm canvas, bright signals** — let the soft #F5F7F9 base carry quiet content while teal and warm accents earn attention.
- **Rounded and approachable** — consistent 8px / 20px radii keep every surface inviting.
- **Native and legible** — PingFang TC and near-black #262626 text serve a Traditional-Chinese audience comfortably.
- **Restraint with the brand color** — teal #00CCB4 marks interaction; it is never wallpaper.

## 13. Personas

- **The Curious Learner** — browsing the marketplace for a new skill; needs a calm, scannable surface where featured courses (orange/coral accents) stand out and primary actions (teal outline button) are obvious and inviting.
- **The Knowledge-Sharing Instructor** — creating and publishing courses; needs the platform to feel encouraging and credible, with friendly rounded components and warm tone that lower the barrier to teaching.
- **The Returning Member** — coming back to continue learning; relies on consistent color roles and tap-friendly components across devices to pick up quickly.

## 14. States

- **Default action:** teal outline button — transparent background, #00CCB4 text, 2px solid #DCF9F3 border, 8px radius, 42px height.
- **Neutral / card action:** white card button — #FFFFFF background, #595959 text, 8px radius.
- **Metadata / tag:** chip — rgba(0,0,0,0.04) fill, rgba(0,0,0,0.65) text, 20px radius, 33px height, 14px/400.
- **Promotional emphasis:** warm orange #FA8C16 and coral #F65F55 accents for sales and featured callouts.
- (Hover, pressed, focus, and disabled state values were not captured in the blob and are intentionally not specified; the teal token scale — Primary 400 #23D9BD, Primary 800 #006166 — provides the natural darker steps for any hover/pressed treatment.)

## 15. Motion & Easing

Hahow's motion language was not captured with specific values in the blob, so no durations or easing curves are specified here. In keeping with the brand's warm, approachable, flat aesthetic, transitions should read as gentle and encouraging rather than abrupt — soft enough to match the rounded geometry and calm canvas, with the teal token scale (Primary 400 #23D9BD into Primary 500 #00CCB4) available for smooth interactive color transitions.

---
**Verified:** 2026-06-01
**Tier 1 sources:** https://hahow.in (live homepage live-DOM inspect), https://business.hahow.in (brand-owned regional business surface), https://github.com/hahow (brand-owned org hosting the open-source design tokens)
**Tier 2 sources:** getdesign.md/hahow — NOT LISTED. refero — not listed.
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof block)
