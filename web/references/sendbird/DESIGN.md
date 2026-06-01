---
id: "sendbird"
name: "Sendbird"
country: US
category: developer-tools
homepage: "https://sendbird.com"
primary_color: "#742DDD"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=sendbird.com&sz=128"
verified: "2026-06-01"
omd: "0.1"
ds:
  name: Sendbird UIKit
  url: "https://sendbird.com/docs/chat/uikit/v3/react/overview"
  type: system
  description: Sendbird's official chat UIKit — a documented, token-driven conversation-UI system (React, iOS, Android, React Native) with named color sets, message components, and themeable light/dark resources.
---
# Design System Inspiration of Sendbird

## 1. Visual Theme & Atmosphere

Sendbird is a developer-infrastructure company that wears two faces, and the gap between them is the whole story. The **product** — the Sendbird UIKit that powers chat inside thousands of apps — is a disciplined, token-driven system built on a single confident **purple** (`#742DDD`, "Sendbird purple") sitting on an eight-step neutral grayscale, with green, red and blue reserved strictly for semantic meaning. It is functional software color: a 4px corner radius everywhere, flat fills, no gradients, a palette that survives being dropped into a customer's own app without fighting it. The **marketing site** (sendbird.com), by contrast, is a near-monochrome editorial surface — pure white grounds, an oversized **serif display face** running to 72px for headlines, body text set in Helvetica Now Text, and pill-shaped black-and-white CTAs with no brand color at all. One surface is engineered to disappear into a developer's product; the other is engineered to read like a printed enterprise brochure. The through-line is restraint: a brand that earns trust by looking calm, legible, and uncluttered, letting the single purple do its work only where it carries product meaning.

## 2. Color Palette & Roles

Sendbird's UIKit ships a fully named, five-step-per-family color set (the authoritative design-system source). The marketing site layers a separate near-grayscale identity on top.

**Primary — Sendbird purple (brand + primary actions)**
- primary-100: `#DBD1FF`
- primary-200: `#C2A9FA`
- primary-300: `#742DDD` (the main color — default fills, links, focus)
- primary-400: `#6211C8` (hover)
- primary-500: `#491389` (pressed/active)

**Secondary — green (accents, success-adjacent)**
- secondary-100: `#A8E2AB`
- secondary-200: `#69C085`
- secondary-300: `#259C72`
- secondary-400: `#027D69`
- secondary-500: `#066858`

**Error — red (destructive, validation)**
- error-100: `#FDAAAA`
- error-200: `#F66161`
- error-300: `#DE360B` (light-theme error border + danger fill)
- error-400: `#BF0711`
- error-500: `#9D091E`

**Information — `#ADC9FF`** (informational highlights, link previews)

**Background — neutral grayscale (surfaces, light → dark)**
- background-50: `#FFFFFF`
- background-100: `#EEEEEE` (incoming message bubble, subtle fills)
- background-200: `#E0E0E0` (disabled fills)
- background-300: `#BDBDBD`
- background-400: `#393939`
- background-500: `#2C2C2C`
- background-600: `#161616`
- background-700: `#000000`

**Text on light (alpha black)**
- onlight-01: `#000000` @ 87% (primary text)
- onlight-02: `#000000` @ 50% (secondary text)
- onlight-03: `#000000` @ 38% (disabled text)
- onlight-04: `#000000` @ 12% (dividers, default input border)

**Text on dark (alpha white)** mirrors the above at 87 / 50 / 38 / 12% white. **Overlay:** `#000000` @ 55% (modal scrim), `#000000` @ 32% (lighter scrim).

**Marketing surface (sendbird.com, live):** ground `#FFFFFF`, body text `#424242`, near-black display + CTA ink `#0D0D0D`, nav ink `#0E1017`, footer + chip fill `#F2F3F7`, hairline borders `#E3E5EF` and `#D1D1D1`. No purple appears in the marketing chrome — brand color is held back for the product.

## 3. Typography Rules

- **Product (UIKit):** the system font stack via `--sendbird-font-family-default` — platform-native sans (SF Pro / Roboto / system-ui) so embedded chat matches the host app. Message text and labels sit at 14px with a clear weight ladder (400 body, 500–600 labels).
- **Marketing display:** a **serif** display face for headlines, observed at **72px / weight 500** on the hero (`#0D0D0D`). The serif is the single most distinctive type choice — it signals editorial confidence and separates Sendbird from the geometric-sans default of developer-tool marketing.
- **Marketing body + nav:** **Helvetica Now Text** — body at 18px / 400 (`#424242`), nav links at 16px / 500 (`#0E1017`), small print near 13px / 600 on pill CTAs.
- **Hierarchy:** large serif headline → Helvetica Now subhead/body → medium-weight nav and buttons. Tight, legible, generous line spacing; never more than two type families on one surface.

## 4. Component Stylings

> Two systems documented below: the **UIKit** (product, token-driven, purple) verified from the official component source, and the **marketing chrome** (sendbird.com) verified from live computed style. Each is the source of truth for its own surface.

### UIKit Button

**Primary — Big (default)**
- Background: `#742DDD` (primary-300)
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 10px 16px
- Height: 40px
- Font: 14px / 600 / system default
- Hover: background `#6211C8` (primary-400)
- Pressed: background `#491389` (primary-500)
- Use: the single most prominent action in a UIKit surface (send, confirm, create channel)

**Primary — Small**
- Background: `#742DDD`
- Text: `#FFFFFF`
- Radius: 4px
- Padding: 6px 16px
- Height: 32px
- Use: inline and toolbar actions

**Secondary (ghost)**
- Background: transparent
- Text: `#742DDD`
- Border: 1px solid `#742DDD`
- Radius: 4px
- Pressed: background `#000000` @ 4% (onlight wash)
- Use: lower-emphasis alternative beside a primary button

**Danger**
- Background: `#DE360B` (error-300)
- Text: `#FFFFFF`
- Radius: 4px
- Hover: background `#BF0711` (error-400)
- Pressed: background `#9D091E` (error-500)
- Use: destructive actions (leave channel, delete message)

**Disabled**
- Background: `#E0E0E0` (background-200)
- Text: `#000000` @ 38% (onlight-03)
- Radius: 4px
- Use: any blocked action; non-interactive

### UIKit Input / TextField

**Default**
- Background: `#FFFFFF`
- Text: `#000000` @ 87% (onlight-01)
- Border: 1px solid `#000000` @ 12% (onlight-04)
- Radius: 4px
- Padding: 7px 12px
- Font: 14px / 400

**Focus**
- Border: 1px solid `#742DDD` (primary-300)
- Shadow: 0 0 0 1px `#742DDD`

**Error**
- Border: 1px solid `#DE360B` (error-300)

### UIKit Message Bubble

**Outgoing (mine)**
- Background: `#742DDD` (primary-300)
- Text: `#FFFFFF`
- Max-width: 400px
- Use: messages sent by the current user, right-aligned

**Incoming (other)**
- Background: `#EEEEEE` (background-100)
- Text: `#000000` @ 87% (onlight-01)
- Max-width: 400px
- Avatar: 40px (min-width, left of bubble)
- Use: messages from other participants, left-aligned

### Marketing CTA — Dark pill (primary)

**Default**
- Background: `#0D0D0D`
- Text: `#FFFFFF`
- Border: 1px solid `#0D0D0D`
- Radius: 24px
- Padding: 12px 10px
- Height: 42px
- Font: 13px / 600 / Helvetica Now Text
- Use: highest-emphasis marketing action

### Marketing CTA — Outline pill (secondary)

**Default**
- Background: `#FFFFFF`
- Text: `#0D0D0D`
- Border: 1px solid `#0D0D0D`
- Radius: 24px
- Padding: 12px 10px
- Height: 42px
- Font: 13px / 600
- Use: secondary marketing action paired with the dark pill

### Marketing Utility chip

**Default**
- Background: `#F2F3F7`
- Text: `#0D0D0D`
- Border: 1px solid `#E3E5EF`
- Radius: 8px
- Padding: 8px 12px
- Height: 50px
- Font: 18px / 400 / Helvetica Now Text
- Use: neutral selector / utility control on marketing surfaces

### Marketing Input (newsletter)

**Default**
- Background: `#FFFFFF`
- Text: `#424242`
- Border: 1px solid `#D1D1D1`
- Radius: 50px
- Padding: 6px 35px
- Font: 12.8px / 400
- Use: pill-shaped email capture in footer/forms

## 5. Layout Principles

- **UIKit:** a vertical conversation column with a fixed channel header, a scrolling message list, and a docked composer. Message rows are avatar + bubble, bubbles capped at 400px so long text wraps rather than spanning wide screens. 4px is the universal corner unit; spacing is an 8px rhythm.
- **Marketing:** generous single-column-of-attention sections on white, oversized serif headlines anchoring each block, wide margins, and image columns doing the visual work. No dense grids — the page breathes.
- **Density:** product is information-dense but calm (chat needs scannability); marketing is deliberately sparse.

## 6. Depth & Elevation

Sendbird is overwhelmingly **flat**. The UIKit uses fills and 1px hairlines, not shadows, to separate surfaces — incoming bubble vs. ground is a fill contrast (`#EEEEEE` on `#FFFFFF`), not a drop shadow. Elevation appears only where it carries meaning: modals/menus float above a `#000000` @ 55% overlay scrim, and the input focus ring is a 1px purple halo rather than a glow. Marketing is similarly shadowless — depth comes from whitespace and scale, not z-axis tricks.

## 7. Do's and Don'ts

### Do
- Use purple `#742DDD` for exactly one primary action per surface; let neutrals carry everything else.
- Keep the 4px radius on product controls and the pill (24px / 50px) radius on marketing chrome — don't mix the two languages.
- Reserve green, red, and blue for semantic roles (success-adjacent, destructive/error, informational).
- Pair the serif display headline with Helvetica Now body on marketing; never set body copy in the serif.

### Don't
- Introduce gradients, drop shadows, or a second brand hue — the system's calm depends on restraint.
- Put brand purple into marketing chrome, or near-black pills into the product UI; the surfaces are intentionally distinct.
- Combine multiple fields on one spec line; each token gets its own value.
- Let message bubbles exceed the 400px cap or drop the 40px avatar gutter.

## 8. Responsive Behavior

- **UIKit:** the conversation column is fluid; bubble max-width collapses from 400px to `calc(100vw - 140px)` on narrow viewports, preserving the avatar gutter and right/left alignment. Channel list and conversation become a single stacked view on mobile.
- **Marketing:** the serif hero scales down from 72px on large screens; multi-column sections reflow to a single column; pill CTAs stay full-radius and stack vertically.
- Touch targets respect the 40px (Big) / 32px (Small) button heights as comfortable minimums.

## 9. Agent Prompt Guide

When generating a Sendbird-style interface, specify which surface you mean:
- **"Sendbird UIKit style"** → token-driven chat UI: purple `#742DDD` primary, neutral grayscale, 4px radius, flat fills, 14px system-font text, message bubbles (outgoing purple / incoming `#EEEEEE`) capped at 400px with 40px avatars, semantic green/red/blue only.
- **"Sendbird marketing style"** → near-monochrome editorial: white ground, 72px serif display headline, Helvetica Now Text body, black `#0D0D0D` and white pill CTAs (24px radius), `#F2F3F7` neutral chips, no brand color in chrome.
- Default corner radius: **4px** (product) — state "pill" explicitly for marketing CTAs.
- Keep it flat: 1px hairlines and fills, not shadows. One primary action per surface.

## 10. Voice & Tone

Sendbird speaks like **infrastructure that respects your time**: precise, technical without jargon-for-its-own-sake, confident but never loud. Product copy (UIKit labels, empty states) is plain and instructive — "No messages yet," "Send," "Leave channel." Marketing copy is declarative and enterprise-assured — "The AI customer experience platform" — short clauses, present tense, outcomes over features. The serif display face gives the words a measured, editorial gravity; the tone is a senior engineer who has already solved your problem and is calmly telling you how.

## 11. Brand Narrative

Founded in Korea (originally as a community for parents) and now powering in-app conversations for some of the world's largest apps, Sendbird's story is **invisible reliability at scale**. The brand's job is to be the messaging layer you never think about — which is why the product design system is built to disappear into the host app, and why the brand color is held back from marketing chrome. The single purple is a signature you only meet where it matters: the action that sends, the link that connects. Everything else — grayscale surfaces, flat fills, serif calm — communicates "we are the dependable substrate, not the spectacle."

## 12. Principles

1. **Color carries meaning, not decoration.** One purple for primary action; semantic green/red/blue; everything else neutral.
2. **Flat by default.** Fills and hairlines over shadows; elevation only for true overlays.
3. **The product disappears.** UIKit is themeable and system-font-based so it adopts the host app's identity.
4. **Two surfaces, two languages.** Product = 4px functional; marketing = pill editorial. Never blur them.
5. **Restraint reads as trust.** Whitespace, legibility, and a single accent over visual noise.

## 13. Personas

- **The app developer** embedding chat — wants tokens, theming, and components that drop in without fighting their design. Lives in the UIKit docs.
- **The enterprise buyer** evaluating a CX/messaging platform — meets the serif marketing site, reads "reliable, secure, at scale," needs trust signals (certifications, G2).
- **The end user** inside a customer's app — never sees "Sendbird," only a calm, legible conversation that feels native to the app they're using.

## 14. States

- **Default / Hover / Pressed:** buttons step purple-300 → purple-400 → purple-500 (danger steps error-300 → 400 → 500).
- **Focus:** 1px purple `#742DDD` border + 1px purple box-shadow halo on inputs.
- **Error:** input border switches to error-300 `#DE360B`; validation text in error color.
- **Disabled:** background-200 `#E0E0E0` fill with onlight-03 (38% black) text; no interaction.
- **Empty:** plain instructive copy ("No messages yet") centered in the conversation column, neutral text, no illustration noise.
- **Loading:** lightweight skeleton/spinner in neutral grays; the composer stays docked.

## 15. Motion & Easing

Motion is **minimal and purposeful**. New messages slide/fade into the list at the bottom; the composer and channel transitions are quick (~150–200ms) ease-out movements that never block input. State changes (hover, focus, pressed) are near-instant color transitions, not animated flourishes. Overlays fade their scrim in over ~200ms. The marketing site favors restraint too — subtle reveal-on-scroll rather than parallax theatrics. The guiding rule mirrors the visual system: motion clarifies, it does not perform.

---
**Verified:** 2026-06-01 (CREATE pilot — first ref through the proof-gated pipeline)
**Tier 1 sources:** https://sendbird.com (live DOM via playwright getComputedStyle — marketing chrome: nav `#0E1017` 16px/500, serif h1 72px/500 `#0D0D0D`, dark pill `#0D0D0D` 24px radius, neutral chip `#F2F3F7`/`#E3E5EF` 8px, pill input 50px radius), https://sendbird.com/docs/chat/uikit/v3/android-view/customizations/resource-customization/color-resources (official UIKit color tokens — primary/secondary/error/background/onlight/ondark/overlay full palette), https://github.com/sendbird/sendbird-uikit-react (official UIKit source — Button index.scss 4px radius / Big 40px / Small 32px / variant fills, Input index.scss 7px·12px / focus + error borders, MessageContent index.scss 400px max-width / 40px avatar)
**Tier 2 sources:** getdesign.md/sendbird — NOT LISTED ("No designs found"). styles.refero.design — NOT LISTED (curated taste-set; ?q= does not server-filter; B2B SDK absent). Tier 1 (official UIKit docs + source + live inspect) treated as authoritative per pipeline.
**Conflicts unresolved:** none. Note: an earlier web search reported a green primary (#259c72) — that is the UIKit **secondary** palette; the Android `colors.xml` source confirms **primary = purple #742DDD**. Resolved in favor of the official source file.
**Proof:** see `.verification.md` (`## Proof` block, ≥5 raw computed-style samples).
**Surface split:** §4 documents two parallel systems — the UIKit product DS (purple, 4px, token-driven) and the sendbird.com marketing chrome (monochrome serif editorial, pill radius). Both retained as authoritative for their surface.
