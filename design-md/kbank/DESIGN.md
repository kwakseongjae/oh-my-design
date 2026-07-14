---
id: kbank
name: K bank
country: KR
category: fintech
homepage: "https://www.kbanknow.com"
primary_color: "#0114a7"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kbanknow.com&sz=256"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-product-web, url: "https://www.kbanknow.com/web/web-home/home/main", inspected: "2026-07-13" }
    - { id: product-index, kind: public-product-web, url: "https://www.kbanknow.com/web/product/info/list?tab=deposit", inspected: "2026-07-13" }
    - { id: product-curious, kind: public-product-web, url: "https://www.kbanknow.com/web/product/deposit/curious-saving", inspected: "2026-07-13" }
    - { id: product-rolling, kind: public-product-web, url: "https://www.kbanknow.com/web/product/deposit/rolling-farm", inspected: "2026-07-13" }
    - { id: product-one-card, kind: public-product-web, url: "https://www.kbanknow.com/web/product/card/one-card", inspected: "2026-07-13" }
  sources:
    - { id: product-home, kind: product-surface, url: "https://www.kbanknow.com/web/web-home/home/main", captured: "2026-07-13" }
    - { id: product-index-source, kind: product-surface, url: "https://www.kbanknow.com/web/product/info/list?tab=deposit", captured: "2026-07-13" }
    - { id: product-curious-source, kind: product-surface, url: "https://www.kbanknow.com/web/product/deposit/curious-saving", captured: "2026-07-13" }
    - { id: product-rolling-source, kind: product-surface, url: "https://www.kbanknow.com/web/product/deposit/rolling-farm", captured: "2026-07-13" }
    - { id: product-one-card-source, kind: product-surface, url: "https://www.kbanknow.com/web/product/card/one-card", captured: "2026-07-13" }
    - { id: brand-resource, kind: brand-asset, url: "https://brand.kbanknow.com/resource.html", captured: "2026-07-13" }
    - { id: brand-story, kind: official-doc, url: "https://brand.kbanknow.com/", captured: "2026-07-13" }
    - { id: culture-story, kind: official-doc, url: "https://blog.kbanknow.com/%EC%BC%80%EB%AF%B8%EC%BD%94%EB%93%9C-1%ED%8E%B8-%EC%BC%80%EB%AF%B8%EC%BD%94%EB%93%9C-%ED%83%84%EC%83%9D-%EA%B8%B0%EB%A1%9D-%EC%9D%91%EC%95%A0%F0%9F%90%A3/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": { surface_id: home, source_id: product-home, method: computed-style-and-official-brand-guide, captured: "2026-07-13" }
    "tokens.colors.secondary": { surface_id: home, source_id: product-home, method: computed-style-and-official-brand-guide, captured: "2026-07-13" }
    "tokens.colors.canvas": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.family.ui": { surface_id: home, source_id: product-home, method: computed-style-and-FontFaceSet, captured: "2026-07-13" }
    "tokens.typography.body.size": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.weight": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.lineHeight": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.use": { surface_id: home, source_id: product-home, method: selector-provenance, captured: "2026-07-13" }
    "tokens.typography.product-display.size": { surface_id: product-curious, source_id: product-curious-source, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.product-display.weight": { surface_id: product-curious, source_id: product-curious-source, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.product-display.lineHeight": { surface_id: product-curious, source_id: product-curious-source, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.product-display.tracking": { surface_id: product-curious, source_id: product-curious-source, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.product-display.use": { surface_id: product-curious, source_id: product-curious-source, method: selector-provenance, captured: "2026-07-13" }
    "tokens.spacing.compact-action-inline": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.wide-action-inline": { surface_id: product-curious, source_id: product-curious-source, method: computed-style, captured: "2026-07-13" }
    "tokens.rounded.compact-action": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.rounded.primary-action": { surface_id: product-curious, source_id: product-curious-source, method: computed-style, captured: "2026-07-13" }
    "tokens.rounded.selected-tab": { surface_id: product-index, source_id: product-index-source, method: computed-style-and-aria-selected, captured: "2026-07-13" }
    "tokens.shadow.none": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.components.public-home-shell.type": { surface_id: home, source_id: product-home, method: selector-provenance, captured: "2026-07-13" }
    "tokens.components.public-home-shell.bg": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.components.public-home-shell.radius": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.components.public-home-shell.shadow": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.components.public-home-shell.use": { surface_id: home, source_id: product-home, method: selector-provenance, captured: "2026-07-13" }
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Product tokens are selector-backed values from the supplied six-route public-web capture. The official resource center corroborates the two blue brand colors and Pretendard K Edition as a brand font, but does not create extra product components or states."
  colors:
    primary: "#0114a7"
    secondary: "#4262ff"
    canvas: "#ffffff"
    foreground: "#000000"
  typography:
    family: { ui: "Pretendard K Edition" }
    body: { size: 16, weight: 400, lineHeight: "normal", use: "Observed public-web home body and compact action control; do not generalize to native or authenticated banking." }
    product-display: { size: 44, weight: 700, lineHeight: "59.4px", tracking: "-0.22px", use: "Observed on the supplied public deposit-product pages only." }
  spacing:
    compact-action-inline: 14
    wide-action-inline: 28
  rounded:
    compact-action: 8
    primary-action: 10
    selected-tab: 0
  shadow:
    none: "none"
  components_harvested: true
  components:
    public-home-shell: { type: card, bg: "transparent", radius: "0px", shadow: "none", use: "Observed static home shell at home::div.mainCardWrapper.css-x2jyed; not a general card family." }
---

# K bank — Design Reference

## 1. Visual Theme & Atmosphere

K bank is South Korea’s first internet-only bank. Its official brand story describes a “pleasant financial life” built from the basics of banking—rates and fees—then carries that promise into everyday rewards, investment, safety, and connected services. The public-web product capture has a more restrained job than that broad marketing story: it uses a white canvas and black chrome with two blue actions, while product information pages mix the loaded K bank webfont with system-stack controls. K bank’s own resource center makes the blue pair and Pretendard K Edition part of its brand expression; its culture writing adds a participatory way of working. These sources explain the brand’s current public expression, but only the supplied selector-backed product capture establishes the tokens and components below.

The evidence covers five distinct public product URLs plus a duplicate home snapshot. It does not cover the authenticated app, transfer journeys, account management, documentation chrome, or native UI. Brand marketing, the resource center, and culture writing are therefore retained as context and asset evidence—not silently converted into generic banking components or product states.

**Key characteristics:**

- White public-web canvas and black structural text
- Official dark-blue `#0114A7` and secondary blue `#4262FF`, both observed on separate public actions
- Pretendard K Edition is the loaded public-web family; selected product controls also expose an operating-system stack
- Flat, selector-local controls: 8px and 10px action corners coexist with 0px tabs and utility controls

## 2. Layout & Grid

- The supplied collector uses a `1440×900` viewport on the home, product index, two deposit pages, and the ONE card page. The second home record is a duplicate URL, not a breakpoint or a distinct surface.
- The home’s `mainCardWrapper` is a measured static shell (`1365px × 840px`, no padding, 0px radius), not a reusable product-card or grid contract.
- Public product-page measurements include 44px tabs and 40px/48px action controls. No mobile breakpoint, authenticated layout, or responsive rule was captured.

## 3. Color & Typography

### Color tokens

- `#0114A7` — official primary color in K bank’s resource center; also the computed fill of the 48px public primary action.
- `#4262FF` — official secondary color in the same resource center; also the computed fill of the 40px compact action.
- `#FFFFFF` — observed page canvas and action-label color.
- `#000000` — observed public-web structural text and transparent-control border color.

The resource center additionally lists `#E0E6F1`, `#EDF1F7`, and `#F7F9FD` as brand grayscale and `#2848DF` for the icon’s dark-mode treatment. They are official brand/asset guidance, not tokens promoted from the supplied product capture.

### Typography evidence classes

- **Official product/brand-use:** K bank’s resource center designates Pretendard K Edition for its consistent brand image and permits Pretendard as an alternate. This is official brand guidance, not a license grant or proof of every app surface.
- **Live computed surface-use:** Pretendard K Edition is `loaded` with high confidence, 58 observed uses, and four first-party WOFF2 sources on the supplied public-web routes. It is the sole UI-family token because both computed use and FontFaceSet/source evidence are present.
- **Live system use:** `-apple-system` is a high-confidence operating-system stack on 181 observed public-page elements, including product-detail controls. It remains system evidence rather than a K bank family or a substitute for Pretendard K Edition.
- **Declared-only:** `swiper-icons` has a data-URL `@font-face` declaration and zero visible uses. It is not a text-family token.
- **Official distributed asset / license:** no separately downloadable K bank font asset or font-license terms were located in the official material reviewed. The resource-center font statement remains useful brand evidence but does not authorize rehosting or substitution.

| Role | Size | Weight | Line height | Boundary |
|---|---:|---:|---:|---|
| Public-web body / compact action | 16px | 400 | normal | Home route; Pretendard K Edition loaded |
| Public deposit display | 44px | 700 | 59.4px | Supplied public deposit-product pages; -0.22px tracking |
| Selected product tab | 18px | 700 | 24.3px | Deposit index only; Pretendard K Edition |

## 4. Components

### Public compact action

**Default**
- Background: `#4262FF`
- Text: `#FFFFFF`
- Radius: `8px`
- Padding: `0px 14px`
- Height: `40px`
- Font: `16px / 400 / Pretendard K Edition`
- States: Default only; no hover, pressed, focus, or disabled state captured.
- Use: `home::[data-omd-capture="3"]`; the same fingerprint occurs across the supplied public routes.

### Public primary action

**Default**
- Background: `#0114A7`
- Text: `#FFFFFF`
- Radius: `10px`
- Padding: `0px 28px`
- Height: `48px`
- Font: `16px / 400 / system stack` on `product-curious::[data-omd-capture="19"]`; the duplicate home snapshot uses a 14px Pretendard K Edition instance.
- States: Default only; no hover, pressed, focus, or disabled state captured.
- Use: Supplied public deposit and card-product pages; this does not establish an authenticated-flow CTA.

### Product index tab

**Selected**
- Text: `oklch(0.47 0.024 264.308)`
- Radius: `0px`
- Padding: `10px 4px 12px`
- Height: `44px`
- Font: `18px / 700 / Pretendard K Edition`
- States: Selected is observed through `aria-selected="true"`; no transition or alternate tab state was captured.
- Use: `product-index::[data-omd-capture="14"]` on the public deposit index.

### Product-index bordered choice

**Default**
- Background: `oklch(1 0 0)`
- Text: `oklch(0.301 0.016 264.308)`
- Border: `1px solid oklch(0.87 0.02 267.27)`
- Radius: `6px`
- Padding: `0px 12px`
- Height: `32px`
- Font: `16px / 400 / system stack`
- States: Default only; no interaction state captured.
- Use: `product-index::[data-omd-capture="21"]`; medium-confidence collector fingerprint, retained with its exact source boundary.

### Product-detail full-width text button

**Default**
- Text: `#000000`
- Radius: `0px`
- Padding: `16px 20px`
- Height: `60px`
- Font: `18.72px / 700 / system stack`
- States: Default only; no expansion or pressed state captured.
- Use: `product-curious::[data-omd-capture="14"]`, repeated on the supplied deposit and card product pages.

The collector reports `interactionCount: 0` and no interaction records. The selected tab is an element-state observation, not an observed tab-change interaction. No menu, dialog, validation, toast, responsive, hover, focus, pressed, disabled, or authenticated-product variant is claimed.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.kbanknow.com/web/web-home/home/main`, `https://www.kbanknow.com/web/product/info/list?tab=deposit`, `https://www.kbanknow.com/web/product/deposit/curious-saving`, `https://www.kbanknow.com/web/product/deposit/rolling-farm`, `https://www.kbanknow.com/web/product/card/one-card`, `https://brand.kbanknow.com/resource.html`, `https://brand.kbanknow.com/`, and `https://blog.kbanknow.com/%EC%BC%80%EB%AF%B8%EC%BD%94%EB%93%9C-1%ED%8E%B8-%EC%BC%80%EB%AF%B8%EC%BD%94%EB%93%9C-%ED%83%84%EC%83%9D-%EA%B8%B0%EB%A1%9D-%EC%9D%91%EC%95%A0%F0%9F%90%A3/`
**Tier 2 sources:** `https://getdesign.md/kbank` and `https://styles.refero.design/?q=kbank` were both attempted with built-in web open and returned internal errors; corresponding built-in web searches returned no K bank-specific record.
**Conflicts unresolved:** none

## 5. Elevation

The selector-backed public-home shell and all promoted action/tab samples have `box-shadow: none`. This is a route-level flatness observation, not a shadow scale for native banking, brand marketing, or unobserved panels.

## 6. Spacing & Shape

- The measured compact and primary actions use `0px 14px` / 8px and `0px 28px` / 10px respectively.
- The selected product tab is square (`0px`) with `10px 4px 12px` padding; the product-index bordered choice is 6px with `0px 12px` padding.
- The bundle also contains 2px, 3px, 4px, 6px, 8px, 10px, 12px, 16px, 20px, 24px, 28px, 32px, and 100px spacing observations. Their semantics are not promoted into a global scale.

## 7. Iconography & Imagery

K bank’s official resource center publishes logo, K-bank identification icon, logo spacing, light/dark icon colors, and media-kit material. The icon guide says the K position is visually adjusted and should not be moved; it is brand-asset guidance for identifying K bank, including transfer screens, rather than a general application icon library. The supplied product collector does not identify a named SVG set, illustration ratio, or icon-component geometry. `swiper-icons` is declared but unused and must not be substituted for a K bank text or icon token.

### Do

- Keep the two blue action treatments tied to their public-web selector and surface provenance.
- Use Pretendard K Edition only where loaded public-web evidence or official brand guidance applies.
- Use the official resource center for logo and K icon treatment, keeping those assets separate from product-control tokens.

### Don't

- Generalize captured public actions to transfer, account, login, or native-app flows.
- Invent interaction states, a responsive grid, a general card family, or a documentation system from these static routes.
- Render a system fallback or `swiper-icons` as a verified K bank-branded typeface.

## 8. Accessibility

- The compact and primary actions pair white text with `#4262FF` and `#0114A7`; this reference does not substitute for a contrast or accessibility audit.
- No focus, keyboard, disabled, error, validation, or interaction snapshot was captured. A future implementation needs accessible focus and state treatments designed and verified on the relevant flow.
- The official brand resource asks that logo visibility be considered against its background. That asset rule is not evidence for control contrast, accessible names, landmarks, or mobile behavior.

## 9. Content & Voice

The official brand story writes about rates, fees, everyday rewards, investment, and safety in short, conversational Korean: financial life should feel closer, easier, and more pleasant. It pairs that accessible public register with precise product explanations and terms on the public product pages. K bank-inspired public marketing can explain a concrete everyday benefit plainly, but this does not establish copy rules for regulated disclosures, transaction confirmations, eligibility decisions, or errors.

## 10. Voice & Tone

- **Everyday and benefit-led:** the brand story grounds financial features in shopping, meals, rewards, and daily situations.
- **Reassuring but specific:** public pages pair cheerful benefit language with product conditions and legal information.
- **Participatory internally:** the official culture story describes employees gathering perspectives to define a shared way of working.

### Do

- Explain a public benefit through a concrete financial situation.
- Keep conditions and eligibility explicit when a product page needs them.
- Separate public marketing language from regulated or operational copy.

### Don't

- Treat playful campaign language as the verified voice of every banking flow.
- Fabricate executive quotations, customer promises, or error-state language.

## 11. Brand Narrative

K bank’s official culture story identifies the company as South Korea’s first internet-only bank. Its current brand story frames the evolution not as finance for finance’s sake, but as a pleasant daily financial life: better basics, rewards woven into ordinary moments, access to investment, and reassurance around customers’ assets.

That public expression is supported by a resource center that gives the brand a consistent visual vocabulary—deep and secondary blue, a K identification icon, and Pretendard K Edition—while distinguishing logo/asset guidance from the public-web UI. The public product routes in this reference show only a bounded web slice of that system; they do not prove the design of protected banking work or the native app.

## 12. Principles

1. **Make the financial basics feel worthwhile.** The brand story foregrounds rates, fees, and practical benefits.
   *UI implication:* lead public product pages with the customer value, then keep conditions readable.
2. **Connect finance to daily life.** The brand explicitly places banking around shopping, meals, rewards, and ordinary routines.
   *UI implication:* use concrete scenarios in public education without trivializing regulated detail.
3. **Protect confidence while broadening access.** The brand combines approachable benefits with asset reassurance, IT, and AI-security messaging.
   *UI implication:* do not reuse campaign exuberance as a substitute for clear security and transaction states.
4. **Build shared language through participation.** The culture story documents collective input into K bank’s way of working.
   *UI implication:* retain provenance and evidence boundaries so product, brand, and design teams can review decisions together.

## 13. Personas

These are source-grounded service audiences, not fictional user profiles.

- **Everyday banking customer:** the brand story addresses spending, rewards, and routine money management; protected-flow requirements were not captured.
- **Customer exploring savings, cards, or investment:** public product pages and the brand story cover these offerings, without establishing a unified dashboard UI.
- **Customer seeking reassurance:** the brand story speaks to security and asset confidence; specific support or fraud-response flows remain unobserved.
- **Internal contributor:** the culture story documents employees participating in defining shared working practices, an organizational stakeholder rather than an end user.

## 14. States

| Category | Evidence boundary |
|---|---|
| Empty | [FILL IN — no public product empty state captured] |
| Loading | [FILL IN — no loading state captured] |
| Error: validation | [FILL IN — no validation state captured] |
| Error: transaction or service interruption | [FILL IN — no operational-error state captured] |
| Success | [FILL IN — no public product success state captured] |
| Skeleton | [FILL IN — no skeleton state captured] |
| Disabled | [FILL IN — no disabled control captured] |
| Focus | [FILL IN — no focus-visible state captured] |
| Pressed | [FILL IN — no pressed state captured] |
| Hover | [FILL IN — no hover state captured] |
| Selected tab | Public deposit-index `aria-selected="true"` only; no selection-change interaction captured. |

## 15. Motion & Easing

No motion, transition, easing, or interaction expansion appears in the supplied raw evidence. Motion tokens and behavioral rules remain `[FILL IN]`; the observed selected tab is not proof of a tab transition or easing curve.
