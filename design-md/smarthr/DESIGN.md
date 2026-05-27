---
id: smarthr
name: SmartHR
country: JP
category: saas
homepage: "https://smarthr.jp"
primary_color: "#00C4CC"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=smarthr.jp&sz=128"
verified: "2026-05-19"
omd: "0.1"
ds:
  name: SmartHR Design System
  url: "https://smarthr.design"
  type: system
  description: SmartHR's fully public, governance-driven design system — primitive and semantic tokens, accessibility-first components, and inclusive UI guidelines published openly at smarthr.design.
---

# Design System Inspiration of SmartHR

## 1. Visual Theme & Atmosphere

SmartHR is the cloud HR/labor-administration platform that quietly runs payroll, social-insurance paperwork, and employee records for a large share of Japanese SMEs — and its design language is built around a single, unfashionable virtue: **だれでも・効率よく・迷わずに** ("anyone, efficiently, without getting lost"). This is not a brand that wants to be admired; it wants to be *cleared through*. The screens are the boring, load-bearing infrastructure of someone's employment, and the design system treats that responsibility with the seriousness of a public utility. The result is one of the most rigorous, openly-published, accessibility-first design systems in Japan — the **SmartHR Design System** lives in full public view at `smarthr.design`, primitive tokens, semantic tokens, governance docs and all.

The signature color is **SmartHR Blue** (`#00C4CC`) — a bright cyan-teal that reads as fresh and approachable rather than corporate-blue or fintech-navy. It is paired with a warm near-black for text (`#23221F`, not pure `#000`) and an accent orange (`#FF9900`) used sparingly for emphasis. Crucially, SmartHR does **not** flood its product chrome with the brand cyan; the working surfaces are predominantly white and warm-gray Stone neutrals, with cyan reserved for primary actions and brand moments. The palette is then organized into ten named, four-step color families (Stone, Aqua, Sakura, Momiji, Sunlight, Grass, Sky, Marine, Galaxy, Earth) — a system that lets product teams pick semantically (a green for success, a red for danger) without ever inventing an ad-hoc hex.

Typography is deliberately **typeface-agnostic** — SmartHR ships no brand webfont and instead defers to the operating system's native font stack, because rendering Japanese, alphanumerics, and screen-reader output correctly on every device matters more than a bespoke wordmark. The type scale is a clean rem-based ladder (XXS 10.67px → XXL 32px). The radius scale is tiny and restrained (`s` 4px / `m` 6px / `l` 8px / `full` 9999px). Everything about the system says: this is a tool, the tool should disappear, and no one should ever have to think about the UI while filing their own resignation paperwork or onboarding their first job.

**Key Characteristics:**
- **SmartHR Blue** `#00C4CC` (cyan-teal) as the brand primary — fresh and approachable, never navy-corporate
- Warm near-black text `#23221F` (not pure black) on white + warm-gray Stone neutrals
- Accent **Orange** `#FF9900` used sparingly for emphasis/highlight moments
- Ten named four-step color families (Stone / Aqua / Sakura / Momiji / Sunlight / Grass / Sky / Marine / Galaxy / Earth) — pick semantically, never ad-hoc
- **Typeface-agnostic** — no brand webfont; defers to OS-native font stack for correct JP + alphanumeric + a11y rendering
- rem-based type scale: XXS `0.667rem`/XS `0.75rem`/S `0.857rem`/M `1rem`/L `1.2rem`/XL `1.5rem`/XXL `2rem`
- Small restrained radius scale: `s` 4px / `m` 6px / `l` 8px / `full` 9999px
- Token architecture split into **primitive tokens** (raw values) and **semantic tokens** (role-mapped) — the canonical two-layer model
- Accessibility-first: explicit a11y guidelines, contrast governance, screen-reader-respecting copy
- The whole system is **fully public** at smarthr.design — governance, principles, components, write rules all open

## 2. Color Palette & Roles

SmartHR splits color into **primitive tokens** (the raw palette below) and **semantic tokens** (role aliases that map onto primitives). Author against semantic roles; the primitives exist so the palette stays coherent.

### Brand
- **SmartHR Blue** (`#00C4CC`): The primary brand color. RGB `rgb(0, 196, 204)`. Used for primary buttons, brand mark, active/selected emphasis, links in brand context.
- **Black** (`#23221F`): RGB `rgb(35, 34, 31)`. The recommended text color — a warm near-black, never pure `#000000`. Softer on the eye for dense administrative reading.
- **Orange** (`#FF9900`): RGB `rgb(255, 153, 0)`. Accent color for emphasis and highlight; used sparingly, never as a second primary.
- **White** (`#FFFFFF`): Default surface.

### Stone (neutral / grayscale family)
- **Stone01** (`#F8F7F6`): Lightest — page/section background, subtle fills.
- **Stone02** (`#EDEBE6`): Borders, dividers, disabled fills.
- **Stone03** (`#AAA69F`): Mid-gray — placeholder, secondary icon, muted text.
- **Stone04** (`#4E4C49`): Dark neutral — secondary text, strong borders.

### Aqua (cyan family — extends the brand)
- **Aqua01** (`#D4F4F5`): Tint background for cyan-themed surfaces.
- **Aqua02** (`#69D9DE`): Light cyan.
- **Aqua03** (`#12ABB1`): Mid cyan.
- **Aqua04** (`#0F7F85`): Dark cyan — text/icon on light cyan.

### Semantic Color Families
Each family is a four-step ramp (01 lightest tint → 04 darkest); semantic tokens map these to roles.
- **Grass (green / success)**: `#E6F2C8` · `#AEE26B` · `#3DCC65` · `#378445`. Success states, positive confirmation.
- **Momiji (red / danger)**: `#FFE7E5` · `#FF9E9C` · `#EC5A55` · `#A53F3F`. Error, danger, destructive actions.
- **Sunlight (yellow / warning)**: `#FAF2D0` · `#FFEE11` · `#FFD74A` · `#F56121`. Warning, caution.
- **Sky (light blue / info)**: `#DDF2FB` · `#8FE2FC` · `#32B7F0` · `#1376A0`. Informational notices.
- **Sakura (pink)**: `#F9E9F7` · `#F8B2E1` · `#D362AF` · `#82407C`. Decorative / categorical.
- **Marine (navy)**: `#DEE9FF` · `#8AC0FF` · `#0075E3` · `#26519F`. Secondary blue / links.
- **Galaxy (purple)**: `#EEE5FD` · `#9D8EF8` · `#8C5EEE` · `#6E4CA6`. Categorical / decorative.
- **Earth (brown)**: `#FBEDE1` · `#F2D3A4` · `#BA621E` · `#76533E`. Categorical / decorative.

### Text
- **Default text**: `#23221F` (warm near-black).
- **Secondary / muted**: `Stone04 #4E4C49` and `Stone03 #AAA69F`.
- **On-brand (text on SmartHR Blue)**: `#FFFFFF`.

## 3. Typography Rules

### Font Stack
SmartHR is intentionally **typeface-agnostic**. The system explicitly avoids specifying a bespoke typeface and respects the OS font setting, deferring to native system fonts so Japanese, alphanumerics, and assistive-tech output render correctly everywhere. A representative OS-native stack:
```
system-ui, -apple-system, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif
```
There is no brand webfont. This is a deliberate accessibility and performance decision, not an omission.

### Type Scale (semantic font-size tokens)
| Token | rem | px | Typical Use |
|---|---|---|---|
| `XXS` | `0.667rem` | `10.67px` | Fine print, dense table captions |
| `XS` | `0.75rem` | `12px` | Captions, helper text |
| `S` | `0.857rem` | `13.71px` | Secondary labels |
| `M` (standard) | `1rem` | `16px` | Body default |
| `L` | `1.2rem` | `19.2px` | Subheadings |
| `XL` | `1.5rem` | `24px` | Section headings |
| `XXL` | `2rem` | `32px` (mobile `1.8rem`/28.8px) | Page headings |

### Line Heights (leading tokens)
- **TIGHT** (`1.25×`): Headings.
- **NORMAL** (`1.5×`): Body text — generous for dense JP administrative reading.
- **NONE** (`1×`): Labels and single-line UI text.

### Conventions
- **M (16px) is the body default** — readable, not cramped, sized for forms full of legal/labor terminology.
- **Mobile reduces only XXL** (32px → 28.8px); body and below stay constant.
- **Bold is contextual** — applied by components (headings, buttons) rather than exposed as a heavy display weight. SmartHR builds hierarchy from size + leading + color, not from a dramatic weight jump.
- **Never hardcode a typeface** — always go through the OS-native stack.

## 4. Component Stylings

### Buttons

**Primary**
- Background: `#00C4CC` (SmartHR Blue)
- Text: `#FFFFFF`
- Radius: `6px` (token `m`)
- Font: `1rem` (16px) / bold
- Use: The single most important action on a screen (Save / Submit / 申請する)

**Secondary / Default**
- Background: `#FFFFFF`
- Text: `#23221F`
- Border: `1px solid` Stone02 `#EDEBE6`
- Radius: `6px` (token `m`)
- Use: Cancel / secondary actions sitting beside a primary

**Danger**
- Background: Momiji `#EC5A55`
- Text: `#FFFFFF`
- Radius: `6px` (token `m`)
- Use: Destructive actions (delete, withdraw application)

**Text / Skeleton button**
- Background: transparent
- Text: Aqua04 `#0F7F85` (cyan-dark, readable on white)
- Use: Low-emphasis inline actions

**Disabled**
- Background: Stone02 `#EDEBE6`
- Text: Stone03 `#AAA69F`
- Use: Unavailable actions — palette swap is the signal, no opacity trick

### Inputs

**Text Field**
- Background: `#FFFFFF`
- Text: `#23221F`
- Border: `1px solid` Stone03 `#AAA69F`
- Radius: `4px` (token `s`)
- Focus: border SmartHR Blue `#00C4CC` + focus ring
- Use: Form fields — the workhorse of an HR product

**Error Field**
- Border: Momiji `#EC5A55`
- Helper text below in Momiji `#A53F3F`, font `XS` (12px)
- Use: Validation failure on a field

### Cards / Surfaces

**Base Surface**
- Background: `#FFFFFF`
- Border: `1px solid` Stone02 `#EDEBE6`
- Radius: `8px` (token `l`)
- Use: Content panels, dashboard cards on a Stone01 `#F8F7F6` page background

### Notifications / Status

**Info Notice**
- Background: Sky01 `#DDF2FB`
- Text: Sky04 `#1376A0`
- Radius: `4px`
- Use: Informational banners

**Success Notice**
- Background: Grass01 `#E6F2C8`
- Text: Grass04 `#378445`
- Use: Confirmation messages

**Warning Notice**
- Background: Sunlight01 `#FAF2D0`
- Text: Earth-dark / Sunlight04 `#F56121`
- Use: Caution messages

**Error Notice**
- Background: Momiji01 `#FFE7E5`
- Text: Momiji04 `#A53F3F`
- Use: Error / failure banners

### Badges / Chips

**Status Chip**
- Background: semantic family 01 tint
- Text: matching family 04 dark
- Radius: `full` (9999px) or `4px`
- Use: Employee status, application state — color-coded by semantic family

## 5. Layout Principles

### Density
SmartHR is **medium-to-high density** by necessity — HR dashboards surface many employees, many fields, many statuses. The system manages density with generous `NORMAL` (1.5×) body leading and Stone-neutral separation rather than cramming. Tables are first-class citizens.

### Spacing
Spacing uses a dedicated **spacing token scale** (`余白`) — a stepped set of semantic gaps so vertical rhythm stays consistent across teams. Page content sits on Stone01 `#F8F7F6`; white cards (radius `l` 8px) float on that warm-gray base for separation without heavy shadows.

### Structure
- App-shell pattern: persistent left navigation + top header + main content area
- Forms are the central artifact — labeled fields, helper text, inline validation
- Z-index is governed by a **layer-order token** (`レイヤー順序`) so modals, dropdowns, and toasts never fight

## 6. Depth & Elevation

SmartHR uses a **shadow token scale** (`影`) for elevation, kept subtle. The product reads mostly flat — separation comes from Stone-neutral backgrounds and 1px borders rather than dramatic shadows.

- Cards: minimal or no shadow; 1px Stone02 border + Stone01 page bg does the separating
- Dropdowns / popovers: light shadow token
- Modals / dialogs: stronger shadow token + Stone01 backdrop scrim
- Elevation always references the shadow token scale, never an ad-hoc `box-shadow`

## 7. Do's and Don'ts

- **DO** reserve SmartHR Blue (`#00C4CC`) for the primary action and brand moments. **DON'T** flood working surfaces with cyan — the product is white + Stone neutrals.
- **DO** use warm near-black `#23221F` for text. **DON'T** use pure `#000000` — SmartHR softens text deliberately.
- **DO** pick colors from the ten semantic families (Grass for success, Momiji for danger, Sunlight for warning, Sky for info). **DON'T** invent ad-hoc hexes — the families exist precisely so you never have to.
- **DO** defer to the OS-native font stack. **DON'T** load a brand webfont or hardcode a single typeface — it breaks JP/a11y rendering.
- **DO** use the radius tokens `s`(4) / `m`(6) / `l`(8) / `full`. **DON'T** use 12px+ rounded corners — SmartHR's radius is small and businesslike.
- **DO** treat accessibility as a gate, not a nicety — contrast, focus rings, screen-reader copy. **DON'T** ship a control that fails the a11y guidelines.
- **DO** build hierarchy from size + leading + color. **DON'T** reach for a heavy display weight; the system has no dramatic bold tier.
- **DO** use Orange (`#FF9900`) sparingly for emphasis. **DON'T** promote it to a second primary — it dilutes the cyan signal.

## 8. Responsive Behavior

SmartHR ships **media-query tokens** (`メディアクエリ`) so breakpoints are shared, not re-invented per team.

| Width | Behavior |
|---|---|
| Desktop | Full app shell: left nav + header + wide content, dense tables shown in full |
| Tablet | Left nav may collapse; tables gain horizontal scroll or column priority |
| Mobile | Single column; left nav becomes a drawer; XXL heading drops 32px → 28.8px; tables reflow to stacked cards |

### Touch & Mobile
- Touch targets respect minimum tap height; inputs grow comfortable on mobile
- Only XXL typography steps down on mobile; body and below stay constant for legibility
- Forms remain the central artifact — mobile keeps full validation and helper text

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action / brand: SmartHR Blue `#00C4CC`
- Text: `#23221F` (warm near-black)
- Accent / emphasis: Orange `#FF9900`
- Page bg: Stone01 `#F8F7F6`; card bg `#FFFFFF`; border Stone02 `#EDEBE6`
- Muted text: Stone04 `#4E4C49` / Stone03 `#AAA69F`
- Success Grass `#3DCC65` / Danger Momiji `#EC5A55` / Warning Sunlight `#FFD74A` / Info Sky `#32B7F0`
- Radius: `s` 4px / `m` 6px / `l` 8px / `full` 9999px

### Example Component Prompts
- "Create a SmartHR primary button: bg `#00C4CC`, white text, `6px` radius, 16px bold, comfortable padding. Beside it a secondary button: white bg, `#23221F` text, 1px `#EDEBE6` border, same radius."
- "Build a SmartHR text input: white bg, 1px `#AAA69F` border, `4px` radius, `#23221F` text. Focus state: border `#00C4CC` + focus ring. Error state: border `#EC5A55` and 12px helper text in `#A53F3F` below."
- "Design a SmartHR dashboard card: white surface, 1px `#EDEBE6` border, `8px` radius, sitting on a Stone01 `#F8F7F6` page background. Heading at XL (24px), body at M (16px) with 1.5× line height, text `#23221F`."
- "Create a SmartHR status notice set: info (bg `#DDF2FB`, text `#1376A0`), success (bg `#E6F2C8`, text `#378445`), warning (bg `#FAF2D0`), error (bg `#FFE7E5`, text `#A53F3F`). 4px radius, M-size text."

### Iteration Guide
1. **SmartHR Blue (`#00C4CC`) is the single primary** — one per screen, brand moments only.
2. **Text is `#23221F`, not `#000`** — warm near-black always.
3. **Pick from the ten semantic families** — never invent a hex; Grass/Momiji/Sunlight/Sky cover success/danger/warning/info.
4. **OS-native fonts only** — no webfont, no hardcoded typeface.
5. **Radius is small** — `s`/`m`/`l` (4/6/8px). Avoid 12px+.
6. **Hierarchy from size + leading + color** — no heavy display weight exists.
7. **Accessibility is a gate** — contrast, focus rings, screen-reader copy are non-negotiable.
8. **Flat by default** — Stone neutrals + 1px borders separate; shadows are subtle and tokenized.

---

## 10. Voice & Tone

SmartHR's voice is **plain, polite, and de-stressing**. The product sits at one of the most anxiety-inducing intersections in adult life — employment paperwork, payroll, social insurance, resignations — and the copy's entire job is to lower the user's blood pressure. It writes in standard polite Japanese (です・ます調 / 丁寧語), short declarative sentences, and avoids both bureaucratic stiffness (硬い役所言葉) and over-familiar startup chumminess. The guiding internal phrase is **だれでも・効率よく・迷わずに** — anyone, efficiently, without getting lost — and every microcopy decision is measured against "did this help the user not get lost?" English exists for international employees but Japanese is the first-class voice.

| Context | Tone |
|---|---|
| Buttons | Short JP verb phrase — `保存`, `申請する`, `次へ`. Imperative-polite, no exclamation marks. |
| Form labels & helper text | Concrete and reassuring — explain *what this field is for* and *what happens next*, in plain terms. |
| Empty states | Blameless one-liner + the single next action. Never implies the user did something wrong. |
| Error messages | State the cause, give the fix, in one calm sentence. No `申し訳ございません`-flood; one polite acknowledgment max. |
| Success | Quiet confirmation (`保存しました`) — the work is done, no celebration needed. |
| Notices | Color-coded by semantic family + plain-language summary. The color carries urgency; the words stay calm. |
| Accessibility copy | Written to be read by a screen reader — meaningful labels, no decorative noise. |

**Forbidden patterns.** Bureaucratic stiffness (`〜していただきますようお願い申し上げます` walls of keigo), apology-flooding on non-destructive states, exclamation-mark emphasis on buttons (`保存する！`), marketing superlatives (`最高の`, `革新的な`), emoji in product chrome, and any copy that makes the user feel they're at fault for a system condition. Decorative cleverness that costs clarity is a bug.

**Voice samples.**
- `保存` — primary action verb on forms. <!-- illustrative: standard SmartHR-register JP form verb; not quoted verbatim from a specific live screen -->
- `申請する` — submit-an-application primary action. <!-- illustrative -->
- `だれでも・効率よく・迷わずに` — the system's stated design intent, surfaced on smarthr.design. <!-- verified: smarthr.design homepage copy, WebFetch 2026-05-19 -->

## 11. Brand Narrative

SmartHR was founded in Japan to attack a specific, unglamorous problem: the **mountain of労務 (labor administration) paperwork** that every Japanese company must file — social insurance, employment insurance, year-end tax adjustment (年末調整), onboarding and offboarding documents — almost all of it historically done on paper, by hand, by overworked back-office staff. SmartHR's premise was that this work is (a) universal, (b) miserable, and (c) almost entirely automatable. By digitizing the forms and the workflows, SmartHR turned a paper avalanche into a few clicks — and grew into one of Japan's most widely-used HR/labor SaaS platforms for small and medium businesses. <!-- source: SmartHR product positioning + smarthr.jp, general public knowledge; not a quoted founder interview -->

The design system reflects three commitments inherited from that origin. **One**, the product must work for *everyone in a company* — not just designers or power users, but the new hire filing their first form and the 60-year-old administrator who has done this on paper for thirty years. Hence `だれでも` (anyone) as the first word of the design intent, and hence the relentless accessibility focus. **Two**, it must be *efficient* — these are repetitive, high-volume, deadline-driven tasks, so the UI optimizes for throughput, not delight: dense tables, clear forms, minimal ceremony. **Three**, no one should *get lost* — labor paperwork is confusing enough without a confusing UI on top of it, so the system invests heavily in plain-language copy, predictable layouts, and a shared token vocabulary that keeps every team's screens feeling like one product.

What sets SmartHR apart in the Japanese SaaS landscape is that it published its design system **fully in the open** at `smarthr.design` — primitive and semantic tokens, accessibility guidelines, writing rules, governance — at a level of completeness rare even among global tech companies. The system is itself an expression of the brand: methodical, generous, unflashy, and built so that anyone can use it without getting lost.

## 12. Principles

1. **Anyone, efficiently, without getting lost (だれでも・効率よく・迷わずに).** The stated design intent and the lens for every decision. *UI implication:* If a screen helps a power user but loses a first-timer, it fails. Plain copy, predictable layout, and accessibility are requirements, not enhancements.

2. **Accessibility is a gate, not a feature.** Color contrast, focus visibility, and screen-reader-meaningful labels are checked before ship. *UI implication:* Text is `#23221F` on white for contrast; every interactive control has a visible focus ring; semantic family colors are chosen so the *meaning* survives even without the hue.

3. **Two-layer tokens: primitive then semantic.** The palette exists as primitives; teams author against semantic roles. *UI implication:* Don't reference `#EC5A55` directly — reference the danger role that maps to Momiji. This keeps the whole product re-themeable and coherent.

4. **The tool should disappear.** SmartHR is infrastructure for someone's employment; the UI's success is measured by how little the user has to think about it. *UI implication:* No decorative flourish, no brand color where it isn't needed, restrained motion, small radii. White + Stone neutrals + cyan for the one action that matters.

5. **Typeface-agnostic by principle.** Deferring to OS fonts is a correctness decision — JP glyphs, alphanumerics, and assistive tech all render best natively. *UI implication:* Never hardcode a typeface or load a webfont. Build hierarchy from the size/leading/color tokens instead.

## 13. Personas

*Personas are fictional archetypes informed by SmartHR's publicly-described user base (back-office staff and employees at Japanese SMEs), not real individuals.*

**佐藤 美咲 (Misaki Sato), 38, Osaka.** HR/labor admin at a 60-person manufacturing company. Owns year-end tax adjustment season and onboarding. Used to drown in paper every January; now runs it through SmartHR. Cares only that it's fast, correct, and that employees can self-serve so they stop emailing her. Will forgive a plain UI; will never forgive a confusing one.

**田中 健太 (Kenta Tanaka), 24, Tokyo.** First job out of university. His only contact with SmartHR is onboarding: entering his bank details, address, and emergency contact on his phone in the first week. Wants it to feel obvious and trustworthy — this is his salary and personal data. Notices immediately if a field is unexplained.

**山田 老 (Hajime Yamada), 61, Nagoya.** Veteran administrator who did labor paperwork on paper for three decades. Distrusts software that hides what it's doing. SmartHR earns his trust through predictability, plain Japanese, and never burying the "what happens next." If a screen surprises him, he stops and calls support.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no records yet)** | White card on Stone01 bg, one plain-language line (M, `#23221F`) explaining what will appear here, one primary `#00C4CC` button for the first action. No illustration clutter. |
| **Empty (search/filter no results)** | Single calm line in Stone04 `#4E4C49` (`該当する従業員が見つかりませんでした` pattern). Offer to clear the filter; no spammy suggestions. |
| **Loading (table/page)** | Skeleton blocks in Stone01/Stone02 at final dimensions. Subtle shimmer. Layout doesn't shift when data lands. |
| **Loading (inline action)** | In-button spinner; button keeps its width and `6px` radius; label swaps to a loading state. |
| **Error (field validation)** | Border swaps to Momiji `#EC5A55`; helper text below in `#A53F3F` (XS/12px), one sentence: cause + fix. |
| **Error (page/system)** | Error notice banner: bg Momiji01 `#FFE7E5`, text `#A53F3F`. States the condition plainly, offers retry. One polite acknowledgment, no apology-flood. |
| **Success** | Quiet — success notice (bg Grass01 `#E6F2C8`, text `#378445`) or inline `保存しました`. No confetti; the task being done is the reward. |
| **Disabled** | bg Stone02 `#EDEBE6`, text Stone03 `#AAA69F`. The palette swap is the signal; no opacity hack. |
| **Skeleton** | Stone-neutral blocks at exact final size, never on already-known values; respects reduced-motion. |
| **Warning / caution** | Sunlight notice (bg `#FAF2D0`) before a consequential action (e.g., a filing deadline). Color carries urgency; words stay calm. |

## 15. Motion & Easing

SmartHR's motion is **restrained and functional** — motion exists to clarify state change and continuity, never to entertain. An HR tool used under deadline pressure has no room for kinetic flourish.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle/checkbox commits, selection |
| `motion-fast` | 150ms | Hover, press, small reveals, focus ring |
| `motion-standard` | 250ms | Dropdown open, accordion, tab switch |
| `motion-modal` | 300ms | Modal/dialog enter-exit |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | The default — 95% of motion |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Things arriving (dropdowns, modals, toasts) |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Dismissals |

**Spring stance.** Spring / overshoot easing is **forbidden** on SmartHR product surfaces. The brand intent is "without getting lost"; bouncy motion adds noise to a tool whose job is to be invisible. Confidence in a business tool comes from predictability, not delight.

**Signature motions.**
1. **Modal enter.** Backdrop scrim fades in over `motion-modal / ease-enter`; the dialog appears with a small opacity + slight upward translate. Controlled, never bouncy.
2. **Dropdown / select open.** Opens over `motion-standard / ease-enter` with a short height/opacity reveal; closes over `ease-exit`.
3. **Focus ring.** Appears instantly-to-`motion-fast` on focus — accessibility takes priority, so the ring never lags behind keyboard navigation.
4. **Inline save feedback.** Success notice fades in over `motion-fast` and lingers briefly; no celebratory animation.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; skeleton shimmer becomes a static Stone block; modals appear without translate. Accessibility outranks polish, always.

<!--
OmD v0.1 Sources — SmartHR

Tier 1 (live / official DS, WebFetch 2026-05-19):
- smarthr.design (design system homepage) — confirms intent "だれでも・効率よく・迷わずに",
  primitive vs semantic token split, public governance model.
- smarthr.design/basics/colors/ — SmartHR Blue #00C4CC, Black #23221F, Orange #FF9900,
  Stone/Aqua/Sakura/Momiji/Sunlight/Grass/Sky/Marine/Galaxy/Earth four-step families
  (all hex values transcribed from this page).
- smarthr.design/products/design-tokens/typography — rem-based size scale XXS→XXL,
  typeface-agnostic / OS-font policy, leading tokens (TIGHT/NORMAL/NONE).
- smarthr.design/products/design-tokens/radius — s 4px / m 6px / l 8px / full 9999px.

Verified vs assumed:
- VERIFIED: #00C4CC primary, all family hex values, type/radius tokens, OS-font policy,
  design intent phrase. These come straight from the public DS.
- ASSUMED/INFERRED: component-level button/input/notice variants in §4 are reasonable
  mappings of the verified tokens onto standard SmartHR-style components (the DS documents
  these component categories; exact per-variant values are inferred from the token set).
  Motion tokens (§15) follow the documented shadow/z-index token discipline but specific
  duration values are illustrative. Voice samples marked illustrative are not verbatim
  live strings except the design-intent phrase.
- Personas (§13) are fictional archetypes of SmartHR's described SME back-office + employee
  user base, not real people.
-->

---

**Verified:** 2026-05-19 (omd:add-reference — JP batch)
**Tier 1 sources:** smarthr.design (public SmartHR Design System — colors #00C4CC / #23221F / #FF9900 + 10 four-step families; typography rem scale + OS-font policy; radius s/m/l/full); smarthr.jp (homepage).
**Tier 2 sources:** getdesign.md / refero — not separately fetched (official public DS supersedes).
**Conflicts unresolved:** none. Brief-supplied #00C4CC confirmed exactly against smarthr.design/basics/colors/.
