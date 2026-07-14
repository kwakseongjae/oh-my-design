---
id: taishinbank
name: 台新銀行
country: TW
category: fintech
homepage: "https://www.taishinbank.com.tw/"
primary_color: "#0056b3"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=taishinbank.com.tw&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-personal-banking, url: "https://www.taishinbank.com.tw/TSB/personal/", inspected: "2026-07-13" }
    - { id: investment, kind: public-investment-product, url: "https://www.taishinbank.com.tw/invst/product/", inspected: "2026-07-13" }
    - { id: association-page, kind: external-association-page, url: "https://www.lia-roc.org.tw/list_article?article_content=163&menu_title=%E5%B8%B8%E7%94%A8%E5%8A%9F%E8%83%BD", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.taishinbank.com.tw/TSB/personal/", captured: "2026-07-13" }
    - { id: investment-live, kind: product-surface, url: "https://www.taishinbank.com.tw/invst/product/", captured: "2026-07-13" }
    - { id: bank-history, kind: official-doc, url: "https://www.taishinbank.com.tw/TSB/about-taishin/brief-introduction-to-the-bank/taishin-story/index.html", captured: "2026-07-14" }
    - { id: bank-services, kind: official-doc, url: "https://www.taishinbank.com.tw/TSB/about-taishin/brief-introduction-to-the-bank/TSBankGridPage-000091-00002/", captured: "2026-07-14" }
    - { id: richart-upgrade, kind: official-doc, url: "https://www.taishinbank.com.tw/TSB/personal/common/news/TSBankNews-007654/", captured: "2026-07-14" }
    - { id: bank-integration, kind: official-doc, url: "https://web.taishinbank.com.tw/TSB/personal/common/news/TSBankNews-008090/", captured: "2026-07-14" }
    - { id: fair-treatment, kind: official-doc, url: "https://www.taishinbank.com.tw/TSB/fair-treatment/about/TSBankGridPage-000226/", captured: "2026-07-14" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.link": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.rounded.square": *home
    "tokens.shadow.flat": { surface_id: investment, source_id: investment-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.investment-fund-card.type": &fundcard { surface_id: investment, source_id: investment-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.investment-fund-card.bg": *fundcard
    "tokens.components.investment-fund-card.fg": *fundcard
    "tokens.components.investment-fund-card.border": *fundcard
    "tokens.components.investment-fund-card.radius": *fundcard
    "tokens.components.investment-fund-card.padding": *fundcard
    "tokens.components.investment-fund-card.font": *fundcard
    "tokens.components.investment-fund-card.height": *fundcard
    "tokens.components.investment-fund-card.use": *fundcard
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Packet-backed public Taishin personal-banking and investment-product observations at 1440×900. The third supplied snapshot is an external association page and is retained only as raw evidence, never as a Taishin token source. No loaded Taishin webfont, authenticated banking surface, native app, or official design system was established."
  colors:
    canvas: "#f9f9f9"
    foreground: "#212529"
    link: "#0056b3"
  typography:
    body: { size: 16, weight: 400, lineHeight: 16, use: "Computed public Taishin page body on the personal and investment routes; family intentionally omitted" }
  rounded:
    square: 0
  shadow:
    flat: "none"
  components_harvested: true
  components:
    investment-fund-card: { type: card, bg: "transparent", fg: "#212529", border: "1px solid #e3e3e3", radius: "0px", padding: "0px", font: "16px / 400 / unresolved computed family", height: "206px", use: "Static public investment card, selector surface-2::div.ts-comp-iFund-card; nine observed instances" }
---

# Design System Inspiration of 台新銀行

## 1. Visual Theme & Atmosphere

台新銀行 is a Taiwanese commercial bank serving personal, corporate, wealth-management, and digital-finance customers. Founded in 1992, it has expanded a conventional banking offer through digital banking, payments, data-enabled service, and the Richart consumer brand. Its current public evolution is explicit rather than implied: in 2026 the bank announced an upgrade to 「台新銀行 | Richart」, carrying Richart’s digital operating and marketing capabilities into the wider bank while a separate integration plan keeps customer rights and service continuity central. On the supplied desktop public pages, that broad financial role appears as a dense, flat, square-cornered information environment: a pale `#f9f9f9` canvas, dark `#212529` reading color, and restrained `#0056b3` link treatment. This is evidence for those captured public routes, not a claim about its authenticated bank, mobile app, campaign, or group-wide design system.

**Key Characteristics:**

- `#f9f9f9` page canvas with `#212529` foreground on the supplied Taishin routes
- `#0056b3` observed as a public-route link/text accent, not asserted as a universal brand fill
- Flat, square local geometry: 0px corners and no shadow on the promoted investment card
- Compact 16px / 400 computed body metrics with no verified Taishin UI-family token
- Information-dense personal and investment pages; grid, breakpoint, and authenticated-product rules are not established

## 2. Color Palette & Roles

### Observed public-route colors

- **Pale canvas** (`#f9f9f9`): computed body background on both Taishin-owned supplied routes.
- **Foreground** (`#212529`): frequently observed text and border value on the personal and investment routes.
- **Link accent** (`#0056b3`): repeated public-route text and border observation; use only in the measured link/action context.
- **Fund-card border** (`#e3e3e3`): a local 1px border on the observed `ts-comp-iFund-card`, not a global hairline token.

### Boundary

The packet also contains high-frequency black, white, and blue values on an external association page. They are not used as Taishin palette claims. No first-party brand guide in this research supplied a numeric color scale, so no unmeasured corporate, marketing, Richart, or authenticated-product palette is substituted here.

## 3. Typography Rules

### Evidence classes

- **Official product-use:** No first-party Taishin statement found in this research names a product UI type family or confirms its deployment on the captured routes.
- **Live computed surface-use:** `微軟正黑體` and the `-apple-system` stack appear in packet samples on Taishin-owned routes, but the bundle supplies no matching loaded FontFace source. Metrics may be retained; neither name becomes a Taishin family token.
- **Official distributed brand asset:** No official Taishin distributed type asset was established by the searched first-party sources.
- **Declared-only:** `slick` and `swiper-icons` declarations belong to the packet’s external association-page capture and have no observed visible use. They are not Taishin typography.
- **Unresolved:** `Noto Sans TC` occurs in the mixed bundle without a matching loaded FontFace source or clean Taishin-route provenance. It is omitted rather than used as a fallback or inferred bank font.

### Captured hierarchy

| Role | Family boundary | Size | Weight | Line height | Captured context |
|---|---|---:|---:|---:|---|
| Public body | family omitted; computed system stack is not a brand-font claim | 16px | 400 | 16px | `home::body` and `surface-2::body` |
| Investment fund card | unresolved computed family | 16px | 400 | 16px | `surface-2::div.ts-comp-iFund-card` |

Do not label a system fallback, 微軟正黑體, or Noto Sans TC as a Taishin font. A browser-loadable source, licence, and first-party product-use statement were not established.

## 4. Component Stylings

### Public investment card

**Investment fund card**

- Background: transparent
- Text: `#212529`
- Border: 1px solid `#e3e3e3`
- Radius: 0px
- Padding: 0px
- Font: 16px / 400 / unresolved computed family
- Height: 206px
- Use: Static public investment card; selector `surface-2::div.ts-comp-iFund-card`, with nine observed instances.

The selector-backed card is a measured default component, not evidence of hover, focus, pressed, disabled, loading, error, success, or authenticated-product states. The packet records menu and tab interactions on the personal route, but no corresponding card state is captured; those interactions do not add a state to this card.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.taishinbank.com.tw/TSB/personal/ ; https://www.taishinbank.com.tw/invst/product/ ; https://www.taishinbank.com.tw/TSB/about-taishin/brief-introduction-to-the-bank/taishin-story/index.html ; https://www.taishinbank.com.tw/TSB/about-taishin/brief-introduction-to-the-bank/TSBankGridPage-000091-00002/ ; https://www.taishinbank.com.tw/TSB/personal/common/news/TSBankNews-007654/ ; https://web.taishinbank.com.tw/TSB/personal/common/news/TSBankNews-008090/ ; https://www.taishinbank.com.tw/TSB/fair-treatment/about/TSBankGridPage-000226/
**Tier 2 sources:** https://getdesign.md/taishinbank and https://styles.refero.design/?q=Taishin%20Bank were both attempted with built-in web open; each returned an internal error, and search did not yield a Taishin-specific catalogue record. No Tier 2 value was used.
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied Taishin-owned pages were captured at `1440×900`. They support an information-dense public-web presentation with a pale page field, compact 16px body metrics, and square local card geometry. The data does not establish a universal grid, breakpoint, responsive behavior, authenticated banking layout, or Richart app layout. The external association-page snapshot is not a third Taishin surface and must not be used to extend this layout claim.

## 6. Depth & Elevation

The promoted investment card is flat: `box-shadow: none`, a transparent background, a 1px `#e3e3e3` border, and 0px radius. This describes that selector-backed component only. No elevation scale, modal depth, floating panel, or shadow-bearing product card is asserted.

## 7. Do's and Don'ts

### Do

- Reuse the pale `#f9f9f9` / dark `#212529` public-route contrast only for closely comparable public banking information contexts.
- Keep the measured investment card square, flat, and 1px bordered when reproducing that specific static component.
- Keep `#0056b3` scoped to observed link/action treatment unless another Taishin surface establishes a broader role.
- Preserve the separate evidence domains for public banking, Richart communications, corporate integration, and the external association capture.

### Don't

- Do not turn an observed link blue into a universal Taishin primary button, Richart, or corporate identity color.
- Do not substitute a system font, 微軟正黑體, or Noto Sans TC while presenting it as a Taishin proprietary font.
- Do not infer card hover, focus, pressed, disabled, error, loading, or authenticated-product states from the menu/tab interactions elsewhere in the packet.
- Do not use the third supplied association-page snapshot as evidence for Taishin components, type, color, or layout.

## 8. Accessibility & Content

The packet establishes compact 16px public text and a square, flat investment-card default. It does not establish contrast ratios, keyboard order, focus appearance, target size requirements, error copy, loading behavior, screen-reader semantics, or language-switch behavior. The bank’s official fair-treatment material describes a commitment to accessible and equitable financial service, but it is organisational context—not proof that a particular captured UI satisfies an accessibility standard. Any new focus, error, disabled, or assistive-technology treatment needs direct, source-specific evidence.

## 9. Reference Scope & Evidence

This reference uses `artifacts/reference-evidence/taishinbank.json` as its only raw computed-style, font, component, and interaction evidence. The usable brand-owned visual surfaces are the public personal-banking and investment-product pages. The packet’s third capture is a Lia-Roc association page; it remains documented in `.verification.md` for auditability but is excluded from all Taishin tokens and claim paths. First-party bank materials add separate history, service, brand-evolution, integration, and fair-treatment context. getdesign and Refero were both attempted but supplied no usable competing record. The raw proof, field reconciliation, and source ledger live in `.verification.md` and `_research.md`.

## 10. Voice & Tone

Use a voice that is clear, dependable, and practical. First-party materials repeatedly frame the bank around customer benefit, continuity of service, digital convenience, and fair treatment; that supports plain promises with a calm, service-forward tone rather than promotional urgency.

| Do | Don't |
|---|---|
| State the service outcome and the next step clearly. | Hide important conditions behind celebratory marketing language. |
| Explain digital assistance as a convenience with safeguards. | Promise a financial outcome or imply risk-free action. |
| Acknowledge continuity and customer rights during change. | Treat organisational integration as a reason for customer confusion. |

- “查看您的帳務與下一步操作。” *(Illustrative; grounded in the bank’s digital-service and customer-benefit framing.)*
- “服務持續提供，若有系統異動將主動通知。” *(Illustrative; grounded in the integration notice’s continuity principle.)*
- “需要協助時，請選擇最適合您的服務方式。” *(Illustrative; grounded in the fair-treatment and accessibility context.)*

## 11. Brand Narrative

Taishin International Bank was established in 1992 and developed from a commercial-bank base into a broader financial-services organisation with personal, corporate, wealth-management, and digital-finance work. Its official business introduction describes a customer mix spanning individuals, families, business owners, and micro-enterprises, alongside a push to make finance more convenient through digital channels and partnerships.

The bank’s current story joins that institutional role to everyday digital finance. Its official account of the Richart Life initiative describes payments, points, offers, and financial services brought into a one-stop lifestyle application; the 2026 「台新銀行 | Richart」 announcement says the bank is extending Richart’s digital capability across its service offer.

Why this matters now is operational as well as expressive: bank integration materials name customer rights and uninterrupted service as the governing principle while the bank continues digital transformation. That makes clarity, continuity, and appropriate disclosure more relevant to product communication than a generic “modern bank” aesthetic.

## 12. Principles

1. **Customer benefit before internal complexity.** The official integration plan prioritises customer rights and uninterrupted service.
   *UI implication:* explain service changes, eligibility, and next steps at the point of action.

2. **Digital convenience must remain understandable.** The bank describes digital banking, payments, API work, and data-enabled service as part of its offering.
   *UI implication:* break complex financial tasks into named steps and preserve clear confirmation language.

3. **Innovation should solve a daily financial task.** Richart-related materials frame finance as extending into payments, points, offers, and living scenarios.
   *UI implication:* connect a feature to the customer’s immediate task instead of leading with technical novelty.

4. **Fair treatment is a service practice.** The bank’s fair-treatment organisation describes equitable and accessible financial services across customer groups.
   *UI implication:* make essential information, assistance paths, and important constraints easy to locate and understand.

## 13. Personas

The following are service archetypes inferred only from first-party audience descriptions; they are not research-validated individual personas.

### Personal and family finance customer

Uses deposits, payments, borrowing, or wealth-planning services across life stages. Needs plain explanations of the product, eligibility, cost, and next action.

### Digital-first Richart customer

Uses banking, payment, points, and lifestyle services through digital channels. Needs an efficient route to a task without assuming that every customer already knows the product ecosystem.

### Business owner or micro-enterprise operator

Uses business finance, collections, payment, or cash-management services. Needs terminology and support paths that distinguish business tasks from personal consumer flows.

### Customer needing financial accessibility support

May rely on a different language, assisted channel, or accessible service route. Needs equal access to the essential service and a clear way to obtain help.

## 14. States

These are content requirements derived from banking-service and fair-treatment context, not observed Taishin visual state tokens. No color, icon, motion, or component treatment is prescribed without source evidence.

| State | Required content | Visual boundary |
|---|---|---|
| Empty | Explain what is absent and the available next action. | No empty-state component was captured. |
| Loading | Identify what is being checked or retrieved. | No loading indicator was captured. |
| Validation error | Name the field or condition that needs attention. | No error styling was captured. |
| Transaction/service error | Explain whether the action completed and where help is available. | No error styling or recovery flow was captured. |
| Service interruption | State the affected service and the expected next update. | Continuity language is contextual; no outage UI was captured. |
| Success | Confirm the completed action and give the relevant reference or next step. | No success UI was captured. |
| Skeleton | Preserve the information hierarchy while content is unavailable. | No skeleton geometry was captured. |
| Disabled | Explain why an action is unavailable and what can make it available. | No disabled control style was captured. |
| Pending review | State that a review is underway without promising an outcome. | No pending-review UI was captured. |
| Assistance | Offer an appropriate support route for customers needing help. | No support component style was captured. |

## 15. Motion & Easing

No Taishin motion duration, easing curve, transition, loading animation, or reduced-motion behavior was measured in the supplied evidence. Preserve user control and do not use motion to obscure financial status, cost, or confirmation. Any implementation needs a separately observed source before introducing a Taishin-specific timing token.
