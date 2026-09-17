---
id: stores
name: STORES
country: JP
category: saas
homepage: "https://stores.jp"
primary_color: "#0066ff"
logo:
  type: github
  slug: heyinc
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-10"
  note: "stores.jp redirects to stores.fun (canonical marketing surface). primary = CTA blue (#0066ff); warm off-white surface ladder (#fafaf8 / #f2f2f0 / #ebebe9); near-black ink #0a0a0a; warm olive-grey muted #737368; campaign yellow #ffe145."
  colors:
    primary: "#0066ff"
    on-primary: "#ffffff"
    ink: "#0a0a0a"
    ink-pure: "#000000"
    muted: "#737368"
    canvas: "#ffffff"
    surface: "#fafaf8"
    surface-alt: "#f2f2f0"
    surface-deep: "#ebebe9"
    hairline: "#d0d0cc"
    accent-yellow: "#ffe145"
  typography:
    family: { sans: "ShoraiSansStdN", fallback: "Hiragino Sans / Noto Sans CJK JP / Yu Gothic / Meiryo" }
    display-hero: { size: 64, weight: 600, lineHeight: 1.10, tracking: -1.92, use: "Hero headline (STORESで売れるお店をつくる)" }
    section:      { size: 48, weight: 600, lineHeight: 1.15, tracking: -1.44, use: "Section headlines" }
    card-title:   { size: 24, weight: 600, lineHeight: 1.40, tracking: -0.48, use: "Pricing plan / large card titles" }
    feature-title: { size: 16, weight: 600, lineHeight: 1.75, tracking: 0.32, use: "Service card titles (positive tracking)" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    nav:          { size: 14, weight: 600, lineHeight: 1.75, tracking: 0.28, use: "Nav menu items, footer headings" }
    button:       { size: 14, weight: 600, use: "Header CTA / chip labels" }
    button-lg:    { size: 16, weight: 600, use: "Hero / section CTA labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 80 }
  rounded: { sm: 8, md: 16, lg: 30, xl: 40, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#0066ff", fg: "#ffffff", radius: "9999px", height: "56px", padding: "0 24px", font: "16px / 600 Shorai Sans", use: "Hero/section CTA (無料ではじめる) — header compact version is 38px / 0 16px / 14px" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#0a0a0a", border: "1px solid #d0d0cc", radius: "9999px", height: "38px", padding: "0 16px", font: "14px / 600 Shorai Sans", use: "Outline consult CTA (相談する)" }
    button-chip: { type: button, bg: "#f2f2f0", fg: "#0a0a0a", radius: "9999px", height: "38px", padding: "0 16px", font: "14px / 600 Shorai Sans", use: "Tertiary tinted chip (ログイン)" }
    card-surface: { type: card, bg: "#fafaf8", fg: "#0a0a0a", radius: "16px", use: "Warm off-white service/feature card on white canvas" }
    nav-item: { type: tab, fg: "#0a0a0a", font: "14px / 600 Shorai Sans", use: "Header nav menu item (transparent bg, 12px 16px padding)" }
    banner-campaign: { type: badge, bg: "#ffe145", fg: "#0a0a0a", font: "14px / 600 Shorai Sans", use: "Top campaign strip" }
  components_harvested: true
---

# Design System Inspiration of STORES

## 1. Visual Theme & Atmosphere

STORES (ストアーズ) is Japan's "store operations platform" — net shop, cashless payments, reservations, POS register, and mobile order in one subscription — and its marketing surface reads like a calm, warm, precision-built Japanese SaaS. The canvas is pure white (`#ffffff`) layered with a distinctive warm off-white ladder (`#fafaf8`, `#f2f2f0`, `#ebebe9`) that hints at paper and physical shop interiors rather than the cold blue-greys of typical B2B software. Text sits in a near-black ink (`#0a0a0a`) with pure black (`#000000`) reserved for the largest display headlines, and a warm olive-grey (`#737368`) carries all secondary copy — a muted tone with a brown undertone that keeps the page feeling human and shopkeeper-friendly.

The single action color is a saturated pure blue (`#0066ff`), used almost exclusively on pill-shaped CTAs ("無料ではじめる" — start for free). Geometry is decisively pill-first: every button is a full 9999px capsule, cards round at 16px, and large media containers reach 30–40px. The typographic voice is set in **Shorai Sans** (ShoraiSansStdN, Monotype's contemporary Japanese sans), a deliberate, licensed display choice over system fonts — headlines run at 64px / weight 600 with tight `-1.92px` (−3%) tracking, while small UI text opens up with *positive* tracking (+0.32px at 16px, +0.28px at 14px), the classic Japanese typesetting move that keeps dense kanji legible at small sizes.

Depth is almost entirely flat: live inspection found box-shadow none across the hero, nav, cards, and CTAs, with only faint overlay shadows on floating menus. Separation comes from the warm surface tints and thin `#d0d0cc` hairline borders. A single campaign yellow (`#ffe145`) tops the page as a promotional strip — the one moment of loudness in an otherwise composed, low-contrast warm system. The overall impression is of a Muji-adjacent commerce toolkit: friendly, organized, and quietly confident that running a shop should feel fun.

**Key Characteristics:**
- Shorai Sans (weight 600) for all headlines and UI labels — a licensed Japanese display sans, not a system default
- Warm off-white surface ladder (`#fafaf8` → `#f2f2f0` → `#ebebe9`) instead of cool greys
- Single saturated action blue (`#0066ff`) reserved for primary pill CTAs
- Pill-everything: 9999px buttons, 16px cards, 30–40px media containers
- Negative tracking on display (−1.92px at 64px), positive tracking on small text (+0.32px at 16px)
- Near-shadowless; separation via tint and `#d0d0cc` hairlines
- Warm olive-grey muted text (`#737368`) — brown-toned, not blue-toned
- Campaign yellow (`#ffe145`) as the lone high-saturation secondary accent

## 2. Color Palette & Roles

### Primary
- **STORES Blue** (`#0066ff`): The single action color. Primary CTA backgrounds ("無料ではじめる", "まずは無料でアカウント作成") and link-styled CTA labels on outline buttons. A pure, saturated blue at full intensity.
- **On Primary** (`#ffffff`): Text on blue CTAs; also the page canvas.
- **Ink** (`#0a0a0a`): Default text color for nav, buttons, card titles, and body UI. A near-black that softens contrast a hair below pure black.
- **Ink Pure** (`#000000`): The largest display headlines (H1/H2) step up to pure black for maximum presence.

### Surfaces
- **Canvas** (`#ffffff`): Page background and white cards/outline buttons.
- **Surface** (`#fafaf8`): Warm off-white for service cards and section bands — the system's signature warm paper tone.
- **Surface Alt** (`#f2f2f0`): Slightly deeper warm grey for tinted chips (ログイン), panels, and alternating blocks.
- **Surface Deep** (`#ebebe9`): The deepest of the warm neutrals, used for pressed/tertiary surfaces and dividers-as-areas.
- **Hairline** (`#d0d0cc`): Warm grey border for outline buttons, card outlines, and dividers — the primary separation device in a shadow-free system.

### Text Hierarchy
- **Ink** (`#0a0a0a`): Primary text and labels.
- **Muted Olive-Grey** (`#737368`): Secondary copy, descriptions, captions — a warm grey with an olive-brown undertone, unusual among SaaS palettes and key to the brand's warmth.

### Accent
- **Campaign Yellow** (`#ffe145`): The top campaign banner strip and promotional highlights. High-energy, used sparingly — one element per page.
- **Dark Section** (`#0a0a0a`): The ink color doubles as a background for dark footer/section moments with white text.

## 3. Typography Rules

### Font Family
- **Primary**: `ShoraiSansStdN` (Shorai Sans), with fallbacks `Hiragino Sans`, `Noto Sans CJK JP`, `Yu Gothic`, `Meiryo`. One family carries the entire surface — display, body, and UI.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Shorai Sans | 64px (4.00rem) | 600 | 1.10 (70.4px) | -1.92px (−3%) | Hero H1, closing H2 |
| Section Heading | Shorai Sans | 48px (3.00rem) | 600 | 1.15 (55.2px) | -1.44px (−3%) | Section H2s |
| Card Title Large | Shorai Sans | 24px (1.50rem) | 600 | 1.40 (33.6px) | -0.48px (−2%) | Pricing plan names |
| Feature Title | Shorai Sans | 16px (1.00rem) | 600 | 1.75 (28px) | +0.32px (+2%) | Service card H3s |
| Doc Title | Shorai Sans | 16px (1.00rem) | 500 | 1.40 (22.4px) | +0.32px | Resource/catalog titles |
| Body | Shorai Sans | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |
| Nav / Footer Heading | Shorai Sans | 14px (0.88rem) | 600 | 1.75 (24.5px) | +0.28px (+2%) | Nav menu, footer column heads |
| Button | Shorai Sans | 14px (0.88rem) | 600 | — | normal | Header CTAs, chips |
| Button Large | Shorai Sans | 16px (1.00rem) | 600 | — | normal | Hero/section CTAs |

### Principles
- **One family, two tracking regimes**: Display sizes compress (−3% tracking at 48–64px); small UI text expands (+2% at 14–16px). The crossover sits around 24px. This is textbook Japanese typesetting — tight, confident display over airy, legible kanji at small sizes.
- **Weight 600 is the voice**: Semibold carries headlines, nav, buttons, and card titles alike. Weight 400 is reserved for reading paragraphs; nothing heavier than 600 appears.
- **Licensed type as brand**: Shorai Sans replaces the default system stack everywhere — the font itself is a brand asset, the way the company signals craft to shop owners who care about their own craft.
- **Tall line-heights on small text**: 1.75 line-height at 14–16px keeps mixed kanji/kana comfortable; display tightens to 1.10.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#0066ff`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 0px 24px
- Height: 56px
- Font: 16px / 600 / Shorai Sans
- Use: Hero and section CTAs ("無料ではじめる", "まずは無料でアカウント作成", "今すぐ無料で始める")

The header carries a compact version of the same primary pill: 38px height, 0px 16px padding, 14px / 600 label.

**Secondary Outline**
- Background: `#ffffff`
- Text: `#0a0a0a`
- Border: 1px solid `#d0d0cc`
- Radius: 9999px
- Padding: 0px 16px
- Height: 38px
- Font: 14px / 600 / Shorai Sans
- Use: Consult CTA ("相談する", "問い合わせる") next to the primary

**Secondary Outline (Blue Label)**
- Background: `#ffffff`
- Text: `#0066ff`
- Border: 1px solid `#d0d0cc`
- Radius: 9999px
- Padding: 0px 24px
- Height: 56px
- Font: 16px / 600 / Shorai Sans
- Use: Product-page secondary CTA with blue label ("資料ダウンロード（無料）", "導入事例を見る")

**Tertiary Chip**
- Background: `#f2f2f0`
- Text: `#0a0a0a`
- Radius: 9999px
- Padding: 0px 16px
- Height: 38px
- Font: 14px / 600 / Shorai Sans
- Use: Login chip in the header ("ログイン")

### Cards & Containers

**Service Card**
- Background: `#fafaf8`
- Text: `#0a0a0a`
- Radius: 16px
- Use: Service/feature cards on the white canvas (ネットショップ, キャッシュレス決済, 予約システム, POSレジ…); titles 16px / 600 with +0.32px tracking

**Tinted Panel**
- Background: `#f2f2f0`
- Radius: 16px
- Use: Alternating tinted blocks and resource/catalog panels

**Media Container**
- Radius: 30px
- Use: Large screenshot/photo containers; bottom-rounded hero media reaches 40px

### Badges

**Campaign Banner**
- Background: `#ffe145`
- Text: `#0a0a0a`
- Font: 14px / 600 / Shorai Sans
- Padding: 10px 16px
- Use: Top-of-page campaign strip (Amazonギフトカードキャンペーン)

### Navigation
- Background: `#ffffff`
- Items: transparent bg, `#0a0a0a` text, 14px / 600, 12px 16px padding
- Mega-menu links: 24px / 600 service names on white
- Right cluster: login chip (`#f2f2f0`), outline consult pill, blue primary pill — three tiers of action side by side
- Use: Sticky white header with dropdown menus ("サービス", "業種・事例", "料金", "お役立ち情報")

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://stores.jp (redirects to https://stores.fun — live inspect), https://stores.fun/ec (live inspect, second surface), https://st.inc (company/mission), https://product.st.inc (STORES Product Blog — design engineering & STAND design system posts)
**Tier 2 sources:** none available (getdesign.md/stores → 404 "No designs found"; styles.refero.design/?q=stores → no listing for the Japanese STORES)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 80px (section rhythm)
- Buttons set their rhythm by height (38px header / 48px mid / 56px hero) with horizontal padding at 16px or 24px

### Grid & Container
- Centered single-column hero anchored by the 64px Shorai Sans headline
- Service grid: cards on `#fafaf8` arranged in multi-column rows, each pairing an icon, a 16px title, and muted copy
- Pricing: three plan cards (フリー / スタンダード / 個別相談) with 24px titles
- Full-width alternating bands — white canvas, warm `#fafaf8` tint, occasional `#0a0a0a` dark moment
- Top campaign strip (`#ffe145`) spans the full width above the header

### Whitespace Philosophy
- **Warm, not stark**: generous vertical rhythm, but the off-white tints keep emptiness from feeling clinical — the page breathes like a well-organized shop shelf.
- **Flat segmentation**: sections separate by background tint and `#d0d0cc` hairlines, never by shadow stacks.
- **Pill cadence**: repeated 9999px capsules (chips, CTAs) set a consistent horizontal rhythm across the page.

### Border Radius Scale
- Small (8px): small containers, inner elements
- Medium (16px): cards, panels — the workhorse
- Large (30px): large media containers
- XL (40px): hero media, bottom-rounded section caps (`0 0 40px 40px`)
- Full (9999px): every button and chip

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page, cards, CTAs, nav — the default everywhere |
| Tint (Level 1) | `#fafaf8` / `#f2f2f0` background shift | Card/section separation without elevation |
| Hairline (Level 2) | 1px solid `#d0d0cc` | Outline buttons, card edges, dividers |
| Float (Level 3) | Faint overlay shadow, rgba ink at 0.14–0.2 alpha | Dropdown menus, floating popovers only |

**Shadow Philosophy**: STORES is functionally shadow-free. Live inspection found `box-shadow: none` on the hero, nav, headings, cards, and all CTAs; the only shadows in the DOM are faint low-alpha overlays (rgba ink at 0.14–0.2) on floating menus. Depth is communicated through the warm surface ladder and hairlines, which keeps the page feeling printed and tactile — closer to good retail signage than to layered app chrome. Emphasis is achieved with color (the blue pill, the yellow strip), never with elevation.

## 7. Do's and Don'ts

### Do
- Use Shorai Sans (weight 600) for every headline, nav item, and button label
- Reserve blue (`#0066ff`) for primary CTAs — one action color, used on pills only
- Use the warm off-white ladder (`#fafaf8`, `#f2f2f0`, `#ebebe9`) for surfaces instead of cool greys
- Make every button a full 9999px pill; round cards at 16px
- Track display type tight (−1.92px at 64px) and small text open (+0.32px at 16px)
- Use `#737368` warm olive-grey for secondary copy
- Separate sections with tint and `#d0d0cc` hairlines, not shadows
- Step headline color up to pure `#000000` only at display sizes

### Don't
- Use drop shadows on cards, buttons, or nav — the system is flat
- Introduce a second saturated accent beyond the blue (the yellow strip is a campaign device, not a UI accent)
- Use cool blue-greys for surfaces — STORES neutrals are warm, paper-toned
- Use square or lightly-rounded buttons — interactive elements are always capsules
- Set body text in pure black — `#0a0a0a` ink and `#737368` muted carry text
- Exceed weight 600 anywhere — there is no bold/heavy register
- Apply positive tracking to display headlines or negative tracking to small Japanese text
- Stack multiple CTAs in the same blue — pair primary blue with the outline or chip tier

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero scales down, nav collapses to drawer |
| Tablet | 640-1024px | 2-up service cards, moderate padding |
| Desktop | 1024-1440px | Full layout, multi-column service grid, mega-menu nav |

### Touch Targets
- Hero CTAs at 56px height — generous, unmistakable targets
- Header pills at 38px with 16px horizontal padding
- Nav menu items padded to ~49px hit areas (12px 16px padding)

### Collapsing Strategy
- Hero: 64px headline compresses on mobile, weight 600 and tight tracking maintained
- Three-pill header cluster (login / consult / start) persists as the conversion anchor
- Service grid: multi-column → stacked cards, 16px radius retained
- Pricing cards stack vertically; plan titles stay 24px
- Campaign strip remains full-width at every breakpoint

### Image Behavior
- Screenshots and shop photography sit in 30–40px radius containers with no shadow at any size
- Cards keep 16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: STORES Blue (`#0066ff`)
- CTA text / canvas: White (`#ffffff`)
- Text: Ink (`#0a0a0a`); display headlines Pure Black (`#000000`)
- Secondary text: Warm Olive-Grey (`#737368`)
- Card surface: Warm Off-White (`#fafaf8`)
- Tinted chip / panel: (`#f2f2f0`); deep neutral (`#ebebe9`)
- Border: Warm Hairline (`#d0d0cc`)
- Campaign accent: Yellow (`#ffe145`)

### Example Component Prompts
- "Create a hero on white. Headline 64px Shorai Sans weight 600, line-height 1.10, letter-spacing -1.92px, color #000000. Sub copy 16px weight 400, #737368. Two pills: primary #0066ff bg, white text, 9999px radius, 56px height, 0 24px padding, 16px/600 label; secondary white bg, 1px solid #d0d0cc border, #0a0a0a text, same geometry."
- "Design a service card: #fafaf8 background, 16px radius, no shadow, no border. Title 16px Shorai Sans weight 600 letter-spacing +0.32px color #0a0a0a; description 14-16px #737368."
- "Build a sticky white header: nav items 14px/600 #0a0a0a with 12px 16px padding; right cluster of three pills — #f2f2f0 chip 'ログイン', white outline pill with #d0d0cc border '相談する', #0066ff primary pill white text '無料ではじめる', all 38px height 9999px radius."
- "Add a full-width campaign strip above the header: #ffe145 background, #0a0a0a text at 14px/600, 10px 16px padding."
- "Create a pricing band on white: section title 48px/600 letter-spacing -1.44px #000000; three cards with plan names at 24px/600 letter-spacing -0.48px; each card carries one #0066ff pill CTA."

### Iteration Guide
1. Shorai Sans 600 everywhere; 400 only for paragraphs — nothing heavier
2. One blue (`#0066ff`), always on a pill; secondary tier is white + `#d0d0cc` outline; tertiary is `#f2f2f0` chip
3. Surfaces are warm: `#fafaf8` first, `#f2f2f0` second — never cool grey
4. No shadows; if separation is needed, tint or hairline
5. Track display tight (−3%), small text open (+2%); crossover ≈ 24px
6. Radius vocabulary: 9999px buttons, 16px cards, 30–40px media
7. Yellow `#ffe145` is a single campaign strip, not a recurring accent

---

## 10. Voice & Tone

STORES speaks like a supportive partner standing beside the shop owner — **warm, plainspoken, and encouraging** — in polite but unstuffy Japanese. The register is "です・ます" throughout, sentences are short and declarative, and the copy consistently centers the owner's お店 (shop), not the software. Headlines read like quiet promises rather than feature announcements: the platform recedes, the shop comes forward. Marketing pressure is notably absent; even conversion CTAs frame the next step as easy and free rather than urgent.

| Context | Tone |
|---|---|
| Hero headlines | Owner-centered promise. "STORESで売れるお店をつくる" — the subject is your shop. |
| Section heads | Calm, rhythmic declarations ending in "。" — "店舗運営のすべてを、ひとつの月額で。" |
| CTAs | Low-pressure invitations. "無料ではじめる", "相談する" — free, consultative, never urgent. |
| Service names | Plain category nouns: ネットショップ, キャッシュレス決済, 予約システム, POSレジ. No invented jargon. |
| Closing sections | Gentle encouragement: "お店作りを、はじめましょう。" — let's begin, together. |
| Support copy | Reassuring availability: "ご質問・ご相談、いつでも。" |

**Voice samples (verbatim from live homepage, 2026-06-10):**
- "STORESで売れるお店をつくる" — hero H1 (the shop is the subject; STORES is the instrument). *(verified live 2026-06-10)*
- "お店に合わせて、サービスを選んで組み合わせる。" — section H2 (composability stated as shop-first choice). *(verified live 2026-06-10)*
- "店舗運営のすべてを、ひとつの月額で。" — pricing H2 (the whole offer in one rhythmic line). *(verified live 2026-06-10)*
- "お店作りを、はじめましょう。" — closing H2 (invitation, not command). *(verified live 2026-06-10)*

**Forbidden register**: aggressive urgency ("今だけ！" scarcity framing as default), tech jargon aimed at developers rather than shop owners, hype superlatives, and any copy that makes the software the hero instead of the shop.

## 11. Brand Narrative

STORES 株式会社 traces to **2012**, when two companies started on opposite sides of the same problem: Coiney (founded March 2012) built cashless payments for small merchants, and STORES.jp let anyone open an online shop in minutes. In **2018** the two merged under the holding company **hey 株式会社 (hey, Inc.)** led by CEO **佐藤裕介 (Yusuke Sato)** — a former Google ads engineer and Freakout co-founder — with reservation service Coubic (クービック) joining in 2020. On **October 1, 2022**, hey unified everything under the single brand **STORES**, betting the company name itself on the people it serves: お店, the stores.

The mission is stated in one borrowed-English phrase: **"Just for Fun."** The company page expands it — "こだわりや情熱、たのしみによって駆動される経済の発展に寄与することを目指しています" (we aim to contribute to the development of an economy driven by dedication, passion, and enjoyment). The thesis: an economy made of individuals and small teams doing business out of genuine love — not just scale-chasing — is what moves society forward, and STORES exists to hand those people the same digital tooling that big retail takes for granted: net shop, payments, reservations, POS register, mobile order, loyalty, all on one subscription.

The design organization carries this through an internal design system called **STAND** — named for "standing by" the merchant, for the small coffee stands that embody the customer base, and for the ambition to become the standard tooling of digital commerce. Built on shared tokens across Web, iOS, and the POS register, STAND is the structural reason a payments terminal and a marketing page can both feel like the same warm, pill-shaped, paper-toned brand. What STORES refuses is equally visible: cold enterprise chrome, dark-pattern urgency, and the patronizing tone big tech often takes with small merchants. What it embraces: licensed typography, warm neutrals, flat tactile surfaces, and copy where the shop owner is always the protagonist.

## 12. Principles

1. **The shop is the hero.** Every headline puts お店 in the subject position; STORES is the instrument. *UI implication:* lead layouts with merchant outcomes and shop imagery; never let product chrome upstage the owner's brand.
2. **Just for Fun — warmth is strategy.** The mission claims an economy driven by passion and enjoyment. *UI implication:* warm off-white surfaces (`#fafaf8`), olive-grey text, pill geometry — friendliness encoded in tokens, not just copy.
3. **One subscription, one action color.** The offer is "everything, one monthly fee"; the interface mirrors it with a single blue. *UI implication:* `#0066ff` appears only on the primary path; second and third actions step down to outline and tinted chips.
4. **Stand by, like STAND.** The design system is named for standing beside the merchant. *UI implication:* consultative entry points ("相談する") sit beside every conversion CTA; support availability is itself a designed element.
5. **Flat, tactile, printed.** Small shops trust what feels physical. *UI implication:* no shadow stacks; tint and hairline separation; large rounded media containers that present shops like photographs in a catalog.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable STORES customer segments (Japanese small-business owners across retail, food, beauty, and fitness), not individual people.*

**中村葵, 34, 東京・蔵前.** Runs a small leather-goods atelier with a STORES ネットショップ and a weekend pop-up using STORES 決済. Chose the platform because the storefront templates didn't fight her brand. Reads the pricing page twice before any commitment; the "ひとつの月額" framing is what converted her.

**田中健太, 41, 大阪.** Owns two specialty coffee stands and adopted STORES レジ and キャッシュレス決済 when cash-only stopped being viable. Not a tech person — he trusts the warm, plain interface because it looks like it was made for shops like his, not for IT departments.

**佐々木美咲, 28, 福岡.** Runs a private nail salon on STORES 予約. Lives in the reservation dashboard on her phone between clients. Values that the booking flow her customers see feels polished — her brand reputation rides on it.

**山口大輔, 38, 名古屋.** Operations manager for a six-location fitness studio evaluating the platform's enterprise tier. Needs POS, reservations, and loyalty unified for reporting. The consultative "相談する" path — not a hard-sell demo gate — is what got him to reach out.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no products in shop)** | White canvas, single Ink (`#0a0a0a`) line stating the shop has no items yet, one blue (`#0066ff`) pill to add the first product. Warm, not clinical — the moment is framed as a beginning. |
| **Empty (no reservations today)** | Muted olive-grey (`#737368`) single line on `#fafaf8` card: nothing booked yet, with a path to share the booking page. |
| **Loading (dashboard first paint)** | Flat skeleton blocks in `#f2f2f0` at final dimensions, 16px radius, gentle pulse — no shimmer gradients, consistent with the shadow-free system. |
| **Loading (in-place refresh)** | Previous values stay visible; subtle inline progress. Never block the register or reservation list during refresh. |
| **Error (payment failed at register)** | High-priority inline state in plain Japanese: what failed and what to do next (retry, alternative payment). Concrete and calm — a queue is waiting. |
| **Error (form validation)** | Field-level message below the input describing what would be valid, polite です・ます form, never a bare "必須です". |
| **Error (network offline, POS)** | Persistent banner stating offline mode and what is still possible; register keeps functioning where it can. |
| **Success (order received)** | Quiet inline confirmation in Ink with the order summary immediately visible. No confetti — the order itself is the reward. |
| **Success (settings saved)** | Brief auto-dismiss toast, past tense, polite: "保存しました". |
| **Skeleton** | `#f2f2f0` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Reduced-opacity pill retaining its shape; blue actions fade rather than turn grey, preserving the single-action-color logic. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus rings |
| `motion-standard` | 200ms | Dropdown mega-menu, card reveal, accordion |
| `motion-slow` | 320ms | Page-level transitions, hero media reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — menus, sheets, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and modest, matching the flat printed aesthetic. Pills respond to hover with subtle background deepening (no lift — there are no shadows to grow); the mega-menu opens with a quick fade-slide at `motion-standard / ease-enter`; section content fades in from a few pixels below on scroll. No spring, bounce, or parallax — a platform that runs shop registers signals steadiness above delight. Under `prefers-reduced-motion: reduce`, transitions collapse to instant and scroll reveals render immediately; nothing functional depends on animation.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-10) via playwright getComputedStyle on https://stores.jp
(301 → https://stores.fun) and https://stores.fun/ec:
- Hero H1 "STORESで売れるお店をつくる" — ShoraiSansStdN 64px / 600 / -1.92px / rgb(0,0,0)
- Primary CTA "無料ではじめる" — bg rgb(0,102,255) #0066ff / 9999px / white / 14-16px 600
- Surfaces rgb(250,250,248) #fafaf8, rgb(242,242,240) #f2f2f0, rgb(235,235,233) #ebebe9
- Muted text rgb(115,115,104) #737368; hairline rgb(208,208,204) #d0d0cc
- Campaign strip rgb(255,225,69) #ffe145
- box-shadow: none across hero/nav/cards/CTAs

Direct verification via WebFetch (2026-06-10):
- https://st.inc/company — mission verbatim: 「Just for Fun」をミッションに、こだわりや情熱、
  たのしみによって駆動される経済の発展に寄与することを目指しています。 Founding 2012-03-23,
  CEO 佐藤裕介, Coiney + STORES.jp merger → hey 株式会社 (2018), Coubic/Cloobie joined 2020,
  renamed STORES 株式会社 on 2022-10-01.
- https://st.inc — product lineup (ネットショップ / 決済 / 予約 / レジ / ブランドアプリ /
  ロイヤリティ / モバイルオーダー / データ分析 / ビジネスあと払い / マキトリ).
- https://product.st.inc/about — STORES Product Blog self-description: "こだわりを持ったお商売を
  支える「STORES」のテクノロジー部門のメンバーによるブログです".

Design system STAND: existence and scope (shared tokens across Web/iOS/Regi, Tailwind-based
implementation, name origin "stand by" / coffee stands / standard) per STORES Product Blog posts
(product.st.inc/entry/2020/07/31/110856 「社内UIライブラリの変遷」,
product.st.inc/entry/2025/08/12/121644 design engineering) and the careerhack interview with
STORES designers/engineers (careerhack.en-japan.com/report/detail/1553), surfaced via WebSearch
2026-06-10. design.hey.jp (design org blog) was unreachable (ECONNREFUSED) this turn; STAND
details are attributed to the Product Blog and interview coverage, not design.hey.jp directly.

Voice samples (§10) are verbatim from the live homepage (hero H1, section H2s, CTAs).

Not independently verified this turn — widely documented public facts used:
- Coiney founded 2012 by 佐俣奈緒子 (Naoko Samata); 佐藤裕介's Google/Freakout background
  (cross-referenced in WebSearch results: FastGrow, ITmedia coverage).

Personas (§13) are fictional archetypes informed by STORES' publicly stated customer
segments (small retail, food & drink, beauty salons, fitness — per stores.fun/solutions/* and
cases pages). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "the shop is the hero", "flat tactile printed surfaces as trust
device", motion/state specifications) are editorial readings connecting STORES' observed design
and stated mission to UI guidance, not directly sourced STORES statements.
-->
