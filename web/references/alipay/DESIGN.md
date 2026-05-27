---
id: alipay
name: Alipay
country: CN
category: fintech
homepage: "https://www.alipay.com"
primary_color: "#1677FF"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=alipay.com&sz=128"
verified: "2026-05-19"
omd: "0.1"
ds:
  name: Ant Design
  url: "https://ant.design"
  type: system
  description: The open-source enterprise design system born inside Ant Group (Alipay's parent), now the most influential Chinese design language and one of the most widely adopted React component libraries in the world.
---

# Design System Inspiration of Alipay

## 1. Visual Theme & Atmosphere

Alipay (支付宝) is the payments and lifestyle super-app at the center of Ant Group, and its design legacy is outsized: the team that builds Alipay's enterprise and merchant tooling also created **Ant Design**, the open-source React design system that became the de-facto standard for Chinese B2B software and one of the most-adopted component libraries in the world. To understand Alipay's design language is to understand Ant Design — the consumer app and the design system share a parent, a palette, and a philosophy. The signature is a calm, trustworthy **Daybreak Blue** (`#1677FF`) on clean white surfaces, with a disciplined neutral gray ladder and a set of functional status colors (green/gold/red) that mean exactly one thing each. Where a Western fintech might lean cold-and-minimal or dark-and-premium, Alipay/Ant reads **clear, dense, and dependable** — an interface engineered to carry a billion users' money without ever feeling fragile.

Ant Design codifies its philosophy into four named values — **Certainty (确定性), Meaningfulness (意义感), Growth (生长性), and Naturalness (自然)**. These aren't decorative slogans; they map directly onto the system's decisions. *Certainty* produces the rigorous token scale and the principle that the same component behaves identically everywhere. *Meaningfulness* is why every color carries semantic weight (blue = primary/info, green = success, gold = warning, red = error) and nothing is decorative-only. *Growth* is the system's ability to scale from a single button to a 200-component enterprise console without breaking. *Naturalness* is the gentle, low-drama motion and the comfortable default spacing.

Typography follows the Ant Design font stack — a system-font-first approach (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`) layered over comprehensive Simplified-Chinese fallbacks (`"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑"`). There is no custom brand typeface; the system trusts each platform's native UI font so text renders crisply at the small sizes a dense financial interface demands. The base font size is **14px** — the canonical Ant Design body size — with a generous neutral-gray text hierarchy expressed through opacity (`#000000E0` for headings, `#000000A6` secondary, `#00000040` disabled).

**Key Characteristics:**
- **Daybreak Blue `#1677FF`** as the primary — calm, trustworthy, the Ant Design brand blue (also Alipay's signature)
- Clean white surfaces, disciplined neutral-gray ladder, functional status colors that each mean one thing
- The four Ant Design values made literal: **Certainty / Meaningfulness / Growth / Naturalness**
- A rigorous 10-step color value ladder per hue (e.g. blue: `#E6F4FF` → `#1677FF` → `#001D66`)
- **14px base font size** — the canonical dense-fintech body size; text hierarchy via black-opacity levels
- System-font-first stack + full Simplified-Chinese fallbacks (`PingFang SC`, `Microsoft YaHei`)
- **6px default border-radius** (Ant Design's `borderRadius` token) — softer than enterprise-sharp, calmer than playful-rounded
- High information density — tables, forms, multi-step flows that stay legible at scale
- Semantic, never decorative, color: blue = primary/info, green = success, gold = warning, red = error
- Low-drama motion; the system feels dependable, not delightful — money UI earns trust through calm

## 2. Color Palette & Roles

Alipay's consumer app and Ant Design share the same color logic. The values below are the **Ant Design v5 token palette** (verified from ant.design/docs/spec/colors), which is the authoritative public source for Alipay/Ant's color language.

### Brand / Primary
- **Daybreak Blue** (`#1677FF`): The primary. Primary buttons, links, active states, brand accents, the `colorPrimary` token. Also reads as the `info` semantic color.
- RGB: `rgb(22, 119, 255)`.

### Blue Value Ladder (the canonical 10-step scale)
`#E6F4FF` (1) · `#BAE0FF` (2) · `#91CAFF` (3) · `#69B1FF` (4) · `#4096FF` (5) · **`#1677FF` (6 — primary)** · `#0958D9` (7 — hover/active) · `#003EB3` (8) · `#002C8C` (9) · `#001D66` (10)
Every hue in Ant Design follows the same 1→10 tint-to-shade structure; step 6 is the "primary" anchor.

### Functional / Status
- **Success Green** (`#52C41A`): `colorSuccess`. Polar Green — confirmations, success toasts, "paid" states.
- **Warning Gold** (`#FAAD14`): `colorWarning`. Calendula Gold — cautions, pending states, non-blocking alerts.
- **Error Red** (`#FF4D4F`): `colorError`. Dust Red — failures, destructive confirmations, form errors.
- **Info Blue** (`#1677FF`): `colorInfo`. Matches the primary blue.

### Neutral (Text — opacity-based)
- **Heading / Primary Text** (`#000000E0`): black at ~88%. Titles, primary body, table values.
- **Secondary Text** (`#000000A6`): black at ~65%. Captions, secondary labels, helper text.
- **Disabled Text** (`#00000040`): black at ~25%. Disabled labels, placeholders.
- **Dark-mode inversions**: heading `#FFFFFFD9`, secondary `#FFFFFFA6`, disabled `#FFFFFF40`.

### Neutral (Surface & Border)
- **Page Background** (`#F5F5F5`): `colorBgLayout` — the app/console page ground.
- **Container / Card** (`#FFFFFF`): `colorBgContainer` — cards, panels, modals, table surfaces.
- **Default Border** (`#D9D9D9`): `colorBorder` — input borders, dividers, table rules. Dark-mode `#424242`.
- **Split / Divider** (`#0000000F`): `colorSplit` — subtle row separators.
- **Fill / Hover** (`#0000000A`–`#00000014`): subtle hover-fill on rows and list items.

> Role note: Ant Design's color is **semantic, not decorative**. Blue is primary/info, green is success, gold is warning, red is error — and a designer never reaches for a status color to "make something pop". This discipline is why Alipay can present a dense financial screen without the colors becoming noise.

## 3. Typography Rules

### Font Stack
```
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", sans-serif
```

The Ant Design `fontFamily` token leads with each platform's native UI font (San Francisco on Apple, Segoe UI on Windows, Roboto on Android/Chrome) and layers Simplified-Chinese fallbacks (`PingFang SC` on Apple, `Microsoft YaHei` / `微软雅黑` on Windows, `Hiragino Sans GB`). No custom web font — native fonts render crispest at the small sizes a dense interface needs.

### Size Scale (Ant Design tokens)
| Role | Token | Size | Weight | Line Height |
|---|---|---|---|---|
| Heading 1 | `fontSizeHeading1` | `38px` | 600 | 1.21 |
| Heading 2 | `fontSizeHeading2` | `30px` | 600 | 1.27 |
| Heading 3 | `fontSizeHeading3` | `24px` | 600 | 1.33 |
| Heading 4 | `fontSizeHeading4` | `20px` | 600 | 1.40 |
| Heading 5 | `fontSizeHeading5` | `16px` | 600 | 1.50 |
| Body / base | `fontSize` | `14px` | 400 | 1.5715 |
| Large | `fontSizeLG` | `16px` | 400 | — |
| Small | `fontSizeSM` | `12px` | 400 | — |

### Conventions
- **14px is the base.** This is the canonical Ant Design body size and the density anchor — dense financial tables and forms are designed around it.
- **Headings are weight 600 (semibold), not 700.** Hierarchy is built through size + the 600/400 contrast, not heavy bold.
- **Text hierarchy via black-opacity, not via gray hexes.** Heading `#000000E0`, secondary `#000000A6`, disabled `#00000040` — color-family coherence by construction.
- **Numerals are critical.** Amounts, balances, and transaction figures are first-class; in money contexts they're often set slightly larger and may use tabular figures for alignment.
- **CJK + Latin coexist** — the system fonts are chosen so Simplified Chinese and Latin/numerals sit at comparable optical weight.

## 4. Component Stylings

### Buttons

**Primary**
- Background: `#1677FF`
- Text: `#FFFFFF`
- Border: none
- Radius: 6px
- Padding: 4px 15px (default `controlHeight: 32px`)
- Font: 14px / 400
- Hover: background `#4096FF`
- Active: background `#0958D9`
- Use: Primary action — Pay, Confirm, Submit (确认 / 支付).

**Default (Secondary)**
- Background: `#FFFFFF`
- Text: `#000000E0`
- Border: 1px solid `#D9D9D9`
- Radius: 6px
- Padding: 4px 15px
- Font: 14px / 400
- Hover: text + border transition to `#4096FF`
- Use: Secondary action beside a primary.

**Text / Link**
- Background: transparent
- Text: `#1677FF` (link) / `#000000E0` (text button)
- Border: none
- Radius: 6px
- Hover: link `#4096FF`; text button gets `#0000000A` fill
- Use: Tertiary actions, inline links.

**Danger (Primary danger)**
- Background: `#FF4D4F`
- Text: `#FFFFFF`
- Radius: 6px
- Use: Destructive confirmation (delete, cancel order).

### Inputs

**Default**
- Background: `#FFFFFF`
- Text: `#000000E0`
- Border: 1px solid `#D9D9D9`
- Radius: 6px
- Padding: 4px 11px (height 32px)
- Font: 14px / 400
- Focus: border `#1677FF` + faint blue focus ring (`#1677FF` at low alpha)
- Error: border `#FF4D4F`
- Disabled: background `#F5F5F5`, text `#00000040`
- Use: Form fields, search, amount entry.

### Cards

**Default Card**
- Background: `#FFFFFF`
- Border: 1px solid `#D9D9D9` (or borderless variant with shadow)
- Radius: 8px (`borderRadiusLG`)
- Padding: 24px (body)
- Shadow: none default; `boxShadowTertiary` on hover for clickable cards
- Use: Console panels, dashboard widgets, content grouping.

### Tables

**Row**
- Background: `#FFFFFF`
- Header background: `#FAFAFA`
- Text: `#000000E0`
- Divider: 1px `#0000000F` (`colorSplit`)
- Row hover: `#0000000A` fill
- Cell padding: 16px 16px
- Font: 14px / 400
- Use: The workhorse of Alipay merchant/console UIs — transaction lists, settlement tables. Designed for density at 14px.

### Tags / Badges

**Status Tag**
- Background: status color at low alpha (e.g. success `#52C41A` on `#F6FFED` fill, border `#B7EB8F`)
- Text: status color
- Radius: 4px (`borderRadiusSM`)
- Padding: 0 7px
- Font: 12px / 400
- Use: "已支付 / Paid", "待处理 / Pending", "失败 / Failed" — semantic status pills.

### Navigation

- Top header: white bg, logo left, primary nav, account/notifications right
- Console layout: fixed left sider (dark `#001529` classic Ant theme, or light) + content area
- Active nav item: `#1677FF` text + left/bottom blue indicator
- Breadcrumbs in `#000000A6`, current page `#000000E0`

### Modals

**Default**
- Background: `#FFFFFF`
- Radius: 8px
- Padding: 20px 24px
- Backdrop: `#00000073` (black ~45%)
- Shadow: `boxShadow` (elevated)
- Use: Confirmations, payment dialogs, multi-step flows.

## 5. Layout Principles

### Spacing
Ant Design uses an **8px-based spacing scale** with named size tokens:
| Token | Value |
|---|---|
| `paddingXS` | 8px |
| `padding` | 16px |
| `paddingLG` | 24px |
| `marginSM` | 12px |
| `margin` | 16px |
| `marginLG` | 24px |

### Grid
- 24-column responsive grid (`Row` / `Col`), the Ant Design layout primitive
- Console: fixed sider (200–256px) + fluid content
- Content max-width on marketing pages; consoles fill available width
- Forms: label-left or label-top layouts; dense multi-column on wide screens

### Density
Alipay/Ant is **medium-to-high density**. The 14px base and 8px spacing scale are tuned for information-rich screens — settlement tables, transaction histories, multi-field forms — that must stay legible and scannable. Ant Design offers explicit density variants (`size="small" | "middle" | "large"`) so the same component compresses or relaxes by context.

## 6. Depth & Elevation

Ant Design depth is **restrained and layered**, expressed through three documented shadow tiers plus borders. Most flat surfaces use a 1px border rather than a shadow; shadows are reserved for genuinely floating UI.

| Token | Value (approx) | Use |
|---|---|---|
| `boxShadowTertiary` | `0 1px 2px 0 rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px 0 rgba(0,0,0,0.02)` | Hoverable cards, subtle lift |
| `boxShadowSecondary` | `0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)` | Dropdowns, popovers, selects |
| `boxShadow` | `0 6px 16px 0 rgba(0,0,0,0.08), …` (elevated) | Modals, drawers, notifications |

### Z-Index
- Sticky header / sider above content
- Dropdown / popover / tooltip above page
- Modal + mask above dropdowns
- Message / notification toast at the highest level

### Animation
- Default easing `cubic-bezier(0.645, 0.045, 0.355, 1)` (Ant Design's standard ease-in-out)
- Component transitions ~0.2–0.3s; calm, never bouncy
- Ripple/wave on primary button click (the subtle blue expanding outline)

## 7. Do's and Don'ts

- **DO** use Daybreak Blue `#1677FF` as the primary; derive hover/active from the value ladder (`#4096FF` hover, `#0958D9` active).
- **DON'T** invent ad-hoc blues. The 10-step ladder covers every blue you need.
- **DO** keep color semantic: blue = primary/info, green = success, gold = warning, red = error. Each means one thing.
- **DON'T** use a status color decoratively. A success-green chip must indicate success, not just "look nice".
- **DO** build text hierarchy with black-opacity levels (`#000000E0` / `#000000A6` / `#00000040`), not arbitrary gray hexes.
- **DON'T** drop to weight 700 for headings — Ant headings are weight 600 (semibold).
- **DO** design around the 14px base and 8px spacing scale; use `size` variants for density control.
- **DON'T** bloat dense screens with 16–18px body — that breaks the table/form rhythm the system is tuned for.
- **DO** use 6px radius for controls (buttons/inputs), 8px for cards/modals.
- **DON'T** use pill-shaped or 0px-sharp controls — Ant's calm 6px radius is the brand signature.
- **DO** lead the font stack with system fonts + Simplified-Chinese fallbacks (`PingFang SC`, `Microsoft YaHei`).
- **DON'T** load a heavy custom web font — native fonts render crispest at 14px density.

## 8. Responsive Behavior

### Breakpoints (Ant Design grid)
| Token | Width |
|---|---|
| `xs` | `<576px` |
| `sm` | `≥576px` |
| `md` | `≥768px` |
| `lg` | `≥992px` |
| `xl` | `≥1200px` |
| `xxl` | `≥1600px` |

### Behavior
- 24-column `Row`/`Col` reflow per breakpoint
- Console sider collapses to an icon rail (or hides behind a trigger) below `lg`
- Tables become horizontally scrollable or switch to stacked card lists on mobile
- Forms shift from label-left (wide) to label-top (narrow)
- Modals go near-full-width on `xs`

### Touch & Mobile
- Min 44px tap targets on touch (the consumer Alipay app, built on Ant Design Mobile, enforces this)
- Bottom action bar for primary confirm/pay on mobile flows
- Amount keypads and payment confirmations get dedicated full-screen mobile treatments

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / link / info: `#1677FF` (hover `#4096FF`, active `#0958D9`)
- Success: `#52C41A` · Warning: `#FAAD14` · Error: `#FF4D4F`
- Heading text: `#000000E0` · Secondary: `#000000A6` · Disabled: `#00000040`
- Page bg: `#F5F5F5` · Card/container: `#FFFFFF` · Border: `#D9D9D9` · Split: `#0000000F`

### Example Component Prompts
- "Create an Ant Design / Alipay primary button: bg `#1677FF`, white text, 6px radius, padding `4px 15px`, height 32px, 14px weight 400. Hover bg `#4096FF`, active `#0958D9`. Subtle wave/ripple on click."
- "Build an Alipay transaction table: white rows, `#FAFAFA` header, 14px text `#000000E0`, 1px `#0000000F` row dividers, `#0000000A` hover fill, 16px cell padding. Right-align amount column with tabular numerals; render status as a semantic tag (Paid = green `#52C41A` on `#F6FFED`, Pending = gold, Failed = red)."
- "Design an Ant Design form field: white input, 1px `#D9D9D9` border, 6px radius, 14px text, height 32px. Focus: border `#1677FF` + faint blue focus ring. Error: border `#FF4D4F` + 12px red helper text below."
- "Create an Alipay payment-confirm modal: white, 8px radius, `#00000073` backdrop, amount in large weight-600 `#000000E0`, recipient secondary `#000000A6`, primary 'Confirm Payment' button `#1677FF` full-width, ghost 'Cancel' beside it."

### Iteration Guide
1. **`#1677FF` is the anchor**; derive states from the value ladder, never invent blues.
2. **Color is semantic.** Blue/green/gold/red each carry one meaning. No decorative status colors.
3. **14px base + 8px spacing.** Design for density; use `size` variants to compress or relax.
4. **Headings weight 600, hierarchy via opacity.** Never 700; never arbitrary gray hexes.
5. **6px controls, 8px cards.** Ant's calm radius — not pills, not sharp corners.
6. **System fonts + `PingFang SC` / `Microsoft YaHei` fallbacks.** No heavy custom font.
7. **Shadows for floating UI only.** Flat surfaces use a 1px `#D9D9D9` border; reserve `boxShadowSecondary` for dropdowns and `boxShadow` for modals.
8. **Calm motion.** `cubic-bezier(0.645, 0.045, 0.355, 1)`, ~0.2–0.3s, never bouncy. Money UI is dependable, not delightful.

---

## 10. Voice & Tone

Alipay's voice is **clear, reassuring, and procedurally precise** — the voice of an institution that holds your money and wants you to feel certain at every step. This is *Certainty* (确定性) expressed in language: the copy tells you exactly what is happening, what will happen next, and what (if anything) you need to do. The register in Simplified Chinese is polite-neutral, professional without being stiff, and it uses the formal `您` in transactional and security contexts where trust is paramount. Ant Design's writing guidance pushes toward concise, action-oriented microcopy — verbs over nouns, the next step always visible, no jargon, no hype. In a payments product, ambiguity is a defect; the voice eliminates it.

| Context | Tone |
|---|---|
| Buttons / CTAs | Short imperative verb. `确认` (Confirm), `支付` (Pay), `提交` (Submit), `立即开通`. No exclamation. |
| Amount / balance | Pure figure + currency, prominent. `¥128.00`. No decorative framing around money. |
| Confirmation | State exactly what happened. `支付成功` (Payment successful) + amount + recipient + next-step link. |
| Pending states | Honest and specific. `处理中，请稍候` (Processing, please wait) — never falsely "done". |
| Error messages | Blameless, actionable, single sentence. State the condition + the fix. Formal `您`. |
| Security / verification | Formal, careful, `您` register. Spell out what verification protects and why it's needed. |
| Empty states | One explanatory line + one action. No mascot, no jokey filler. |
| Legal / disclosure | Precise, formal, complete. Financial-compliance register — exact, unembellished. |

**Forbidden phrases.** Hype that undermines trust — `革命性` (revolutionary), `极致体验` as filler, marketing superlatives in transactional flows. Exclamation marks on money CTAs (`立即支付！` is wrong; `立即支付` is right). Casual apology openers (`不好意思`) on system errors — state the condition instead. Emoji in transactional/security surfaces. Ambiguous status copy ("可能成功" / "应该完成了") — payment status is binary and must be stated as such.

**Voice samples.**
- `确认` / `支付` — primary confirm/pay CTAs, imperative and short. <!-- illustrative: standard Alipay/Ant transactional CTA register; not quoted as a specific live string -->
- `支付成功` — payment-success confirmation pattern (factual, complete). <!-- illustrative: reflects Alipay confirmation convention; not verified verbatim -->
- `处理中，请稍候` — honest pending-state copy. <!-- illustrative: standard CN processing-state register -->
- Ant Design's four documented values — `确定性 (Certainty)`, `意义感 (Meaningfulness)`, `生长性 (Growth)`, `自然 (Naturalness)` — the clearest first-person design-philosophy statement Alipay/Ant publishes. <!-- cited: ant.design design-values documentation, WebFetch 2026-05-19 -->

## 11. Brand Narrative

Alipay (支付宝) launched in **2004** as the escrow payment layer for Alibaba's Taobao marketplace — solving the foundational trust problem of Chinese e-commerce: how do a buyer and a stranger-seller transact safely? Alipay's answer was to hold the buyer's money until goods arrived, and that escrow-trust mechanism seeded a payments platform that grew into **Ant Group**, the operator of one of the world's largest payment and lifestyle super-apps, serving roughly a billion users across payments, wealth, insurance, credit, and merchant services. <!-- source: widely documented public history (Alipay 2004 / Taobao escrow origin / Ant Group); not re-verified against a primary source this pass -->

The design legacy is where Alipay's influence outgrows even its scale. The engineers and designers building Alipay's merchant and enterprise console tooling created **Ant Design** — open-sourced in **2015** — to standardize the dozens of internal B2B products inside Ant Group. Ant Design became the most widely adopted design system in the Chinese software industry and one of the most-used React component libraries globally, exporting Alipay's design DNA — the Daybreak Blue, the 14px density, the semantic color discipline, the four values — into countless products that have nothing to do with Alibaba. When Chinese enterprise software *looks like* anything, it looks like Ant Design. ([ant.design](https://ant.design) — WebFetch 2026-05-19 confirms the four values *Certainty / Meaningfulness / Growth / Naturalness* and the `#1677FF` primary.)

What Alipay/Ant refuses: the cold-minimal or dark-premium aesthetics of Western fintech, decorative color that doesn't carry meaning, hype language inside transactional flows, and any ambiguity about the status of money. What it embraces: *Certainty* as a design constraint, semantic color, comfortable density, a rigorous token system, and motion calm enough to feel dependable. The brand's whole proposition is trust at a billion-user scale, and every design decision is downstream of that.

## 12. Principles

These map directly onto Ant Design's four documented values.

1. **Certainty (确定性).** Every component behaves identically everywhere, every token has one job, every status is unambiguous. *UI implication:* Use the documented tokens, not ad-hoc values. Payment status is binary — never "probably done". The same button looks and acts the same on every screen.

2. **Meaningfulness (意义感) — color is semantic.** Blue = primary/info, green = success, gold = warning, red = error. Nothing is colored just to decorate. *UI implication:* A status color must indicate that status. To "make something stand out" without semantic meaning, use weight, size, or spacing — not a borrowed status hue.

3. **Growth (生长性) — the system scales.** From one button to a 200-component console without breaking. *UI implication:* Compose from tokens and primitives; design the dense case (the settlement table) and the simple case (a single confirm dialog) with the same system. Don't fork styles per screen.

4. **Naturalness (自然) — calm by default.** Comfortable density, gentle motion, sensible defaults. *UI implication:* 14px base, 8px spacing, 6px radius, ~0.25s non-bouncy transitions. The interface should feel unremarkable in the best sense — nothing fights for attention in a money screen.

5. **Density is a feature, not a flaw.** Financial interfaces carry a lot of information; the system is tuned to keep it legible. *UI implication:* Embrace tables and multi-field forms at 14px; use `size="small"` for the densest views. Don't pad a transaction list into a marketing layout.

6. **Trust is built in the boring places.** The error message, the pending state, the confirmation — these earn the user's confidence more than any hero. *UI implication:* Invest in clear, blameless, actionable system copy and honest status. The unglamorous states are the brand.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Alipay/Ant user and developer segments (consumers, merchants, enterprise developers), not individual people.*

**林女士 (Ms. Lin), 45, Hangzhou.** Uses Alipay for everything — paying at the market by QR code, splitting utility bills, managing a Yu'ebao savings balance, buying insurance. Trusts the app implicitly because in fifteen years it has never lost her money or left her unsure whether a payment went through. Reads the formal `您` security copy as a sign the app takes her money seriously.

**赵伟 (Zhao Wei), 33, Shenzhen.** Front-end engineer at a B2B SaaS startup. Builds the company's entire admin console on Ant Design React components because it ships the dense tables, forms, and date pickers his finance-adjacent product needs out of the box. Knows the token names by heart; reaches for `colorPrimary` and `borderRadius` reflexively. Thinks in 14px.

**陈老板 (Boss Chen), 51, Yiwu.** Runs a small wholesale shop and uses Alipay's merchant tools to accept payments and check daily settlement. Lives in the transaction table — wants every row to clearly say Paid / Pending / Failed at a glance, and trusts the green/gold/red tags to never lie about where his money is.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no transactions)** | `#FFFFFF` surface, centered `Empty` illustration (Ant's simple line graphic), one line of `#000000A6` text, optional primary CTA. Calm, not jokey. |
| **Empty (no search results)** | Single `#000000A6` line ("No matching results"). No suggestion spam. |
| **Loading (page)** | `Skeleton` component — gray rounded blocks at final dimensions, gentle shimmer. Tables show skeleton rows. |
| **Loading (button/inline)** | `Spin` indicator (rotating `#1677FF` arc) inline; button enters loading state with a spinner replacing/preceding its label, button disabled meanwhile. |
| **Error (form field)** | Border → `#FF4D4F`, 12px red helper message below stating the fix. `validateStatus="error"`. |
| **Error (operation failed)** | `message.error` toast (top center) or inline `Alert` in error red — one blameless sentence + retry where applicable. |
| **Error (payment failed)** | Full result screen (`Result status="error"`) — red icon, clear cause, primary "Try again" + secondary "Back". Money failures never hide in a toast. |
| **Success (payment)** | `Result status="success"` — green check, amount + recipient, order number, next-step buttons. Confident and complete. |
| **Success (action)** | `message.success` toast (top center), green check, 3s auto-dismiss. |
| **Pending / Processing** | Honest in-progress state — `Spin` + "Processing, please wait" (处理中). Never optimistically shows success. |
| **Skeleton** | Gray blocks at exact final dimensions, gentle shimmer; never on a final amount field (shows a placeholder dash). |
| **Disabled** | Reduced opacity + `#F5F5F5` fill + `#00000040` text together. Disabled control keeps its 6px radius. |

## 15. Motion & Easing

Ant Design motion is **calm, brief, and naturalness-led** — money UI earns trust by feeling dependable, so transitions are quick and never bouncy.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motionDurationFast` | 100ms | Hover, small state changes |
| `motionDurationMid` | 200ms | Most component transitions — dropdowns, switches, tabs |
| `motionDurationSlow` | 300ms | Modal/drawer enter-exit, larger reveals |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `motionEaseInOut` | `cubic-bezier(0.645, 0.045, 0.355, 1)` | Default two-way transitions |
| `motionEaseOut` | `cubic-bezier(0.215, 0.61, 0.355, 1)` | Things arriving (dropdowns, popovers) |
| `motionEaseIn` | `cubic-bezier(0.55, 0.055, 0.675, 0.19)` | Dismissals |

**Spring stance.** Spring/overshoot is **avoided** on Alipay/Ant surfaces. Naturalness here means *unremarkable* — a payment confirmation should land cleanly and confidently, not bounce. The one signature kinetic flourish is the **button wave**: on a primary button click, a faint `#1677FF` outline expands outward and fades, acknowledging the press without drama.

**Signature motions.**
1. **Button wave.** Primary button click emits a brief expanding blue outline (`wave-effect`) over ~0.4s ease-out, then fades. Confirms the tap; never distracts.
2. **Dropdown / popover.** Scale + fade in over `motionDurationMid / motionEaseOut` from the trigger edge; out over `motionEaseIn`.
3. **Modal / drawer.** Modal fades + scales `0.9 → 1` over `motionDurationSlow`; drawer slides from its edge. Backdrop fades to `#00000073`.
4. **Message / notification.** Toasts slide-and-fade from top over `motionDurationMid`, auto-dismiss; non-blocking.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse toward instant, the button wave is suppressed, and modals appear without scale. Fully functional, no kinetics.

<!--
OmD v0.1 Sources — Alipay / Ant Design

Tier 1 (DS — authoritative): ant.design (WebFetch 2026-05-19) confirms the
primary #1677FF (Daybreak Blue) and the four documented values Certainty /
Meaningfulness / Growth / Naturalness (确定性/意义感/生长性/自然). ant.design/docs/spec/colors
(WebFetch 2026-05-19) confirms the blue 10-step value ladder
(#E6F4FF → #1677FF(6) → #001D66), the brand blue #1677FF, and the
opacity-based neutral text scale (heading #000000E0 / secondary #000000A6 /
disabled #00000040; dark-mode #FFFFFFD9 etc.) and default border #D9D9D9.

Ant Design v5 token values used in §2/§4/§5/§15 (functional colors #52C41A /
#FAAD14 / #FF4D4F; 14px base font; 6px borderRadius; 8px spacing scale; 24-col
grid + xs..xxl breakpoints; shadow tiers; motion durations 100/200/300ms +
cubic-bezier(0.645,0.045,0.355,1)) are the well-documented public Ant Design v5
defaults — treated as the authoritative Alipay/Ant design language.

Tier 1 (consumer site): alipay.com is largely a corporate/redirect surface;
the consumer Alipay app and Ant's merchant/console tooling share the Ant Design
language, which is the substantive source here.

⚠️ The functional-color and token defaults reflect Ant Design v5 published
defaults. Individual Alipay consumer-app screens may apply a customized theme
(adjusted radius/density) on top of these tokens; the values here are the
canonical system defaults, not a screen-by-screen audit of the live app.

Founding facts (§11): Alipay 2004 / Taobao escrow origin / Ant Group ~1B users /
Ant Design open-sourced 2015 — widely documented public history, not re-verified
against a primary source this pass.

Voice samples (§10) marked illustrative are not quoted live strings except the
four values, which are cited from ant.design. Personas (§13) are fictional.
-->

---

**Verified:** 2026-05-19 (omd:add-reference — CN batch)
**Tier 1 sources:** ant.design (live — primary `#1677FF` Daybreak Blue + four values Certainty/Meaningfulness/Growth/Naturalness); ant.design/docs/spec/colors (live — blue 10-step ladder, brand `#1677FF`, opacity neutral text scale, border `#D9D9D9`). Ant Design v5 published token defaults (14px base, 6px radius, 8px spacing, functional colors `#52C41A`/`#FAAD14`/`#FF4D4F`, 24-col grid, motion tokens).
**Tier 2 sources:** alipay.com (corporate surface — shares the Ant Design language).
**Style ref:** Ant Design (self — Alipay/Ant is the origin of the most influential Chinese DS).
**Conflicts unresolved:** none. Live Alipay consumer-app screens may apply a customized theme over these canonical Ant Design v5 defaults; values here are the system defaults, not a per-screen app audit.
