---
id: kb-kookmin
name: KB국민은행
country: KR
category: fintech
homepage: "https://www.kbstar.com/"
primary_color: "#ffcc00"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kbstar.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-product-web, url: "https://www.kbstar.com/", inspected: "2026-07-13" }
    - { id: online-banking, kind: public-product-web, url: "https://obank.kbstar.com/quics?page=C018702", inspected: "2026-07-13" }
    - { id: home-repeat, kind: duplicate-public-product-web, url: "https://www.kbstar.com/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.kbstar.com/", captured: "2026-07-13" }
    - { id: online-banking-live, kind: product-surface, url: "https://obank.kbstar.com/quics?page=C018702", captured: "2026-07-13" }
    - { id: kb-bank-ci, kind: brand-asset, url: "https://omoney.kbstar.com/quics?page=C017667", captured: "2026-07-14" }
    - { id: kbfg-ci, kind: brand-asset, url: "https://www.kbfg.com/kor/about/corporate/ci.htm", captured: "2026-07-14" }
    - { id: kbfg-font, kind: brand-asset, url: "https://www.kbfg.com/kor/about/corporate/font.htm", captured: "2026-07-14" }
    - { id: kbfg-history, kind: official-doc, url: "https://www.kbfg.com/eng/about/group/history/merge.htm", captured: "2026-07-14" }
    - { id: kbfg-values, kind: official-doc, url: "https://www.kbfg.com/kor/about/group/value.htm", captured: "2026-07-14" }
    - { id: kbfg-annual-report-2024, kind: official-doc, url: "https://www.kbfg.com/common/jsp/fileDownUtil.jsp?filepath=%2Fdata%2Fannual_report%2F2024+KB_ar_full+version.pdf", captured: "2026-07-14" }
  claims:
    "tokens.colors.canvas": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": { surface_id: online-banking, source_id: online-banking-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground-strong": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.colors.muted": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.colors.header-accent": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.colors.link": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.colors.hairline": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.typography.body.size": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.typography.body.weight": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.typography.body.lineHeight": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.typography.body.use": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.typography.section-heading.size": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.typography.section-heading.weight": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.typography.section-heading.lineHeight": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.typography.section-heading.use": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.typography.online-selected-item.size": { surface_id: online-banking, source_id: online-banking-live, method: selector-backed-computed-style-and-aria-selected, captured: "2026-07-13" }
    "tokens.typography.online-selected-item.weight": { surface_id: online-banking, source_id: online-banking-live, method: selector-backed-computed-style-and-aria-selected, captured: "2026-07-13" }
    "tokens.typography.online-selected-item.lineHeight": { surface_id: online-banking, source_id: online-banking-live, method: selector-backed-computed-style-and-aria-selected, captured: "2026-07-13" }
    "tokens.typography.online-selected-item.use": { surface_id: online-banking, source_id: online-banking-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.spacing.inline-link-left": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.spacing.inline-link-right": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.spacing.outline-link-inline": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.spacing.toggle-inline": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.rounded.square": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.shadow.none": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.home-outline-list-item.type": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.components.home-outline-list-item.bg": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.home-outline-list-item.fg": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.home-outline-list-item.border": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.home-outline-list-item.radius": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.home-outline-list-item.padding": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.home-outline-list-item.height": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.home-outline-list-item.font": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.home-outline-list-item.use": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.components.home-inline-list-item.type": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.components.home-inline-list-item.fg": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.home-inline-list-item.radius": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.home-inline-list-item.padding": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.home-inline-list-item.height": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.home-inline-list-item.font": { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.home-inline-list-item.use": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.components.online-selected-list-item.type": { surface_id: online-banking, source_id: online-banking-live, method: selector-provenance-and-aria-selected, captured: "2026-07-13" }
    "tokens.components.online-selected-list-item.fg": { surface_id: online-banking, source_id: online-banking-live, method: selector-backed-computed-style-and-aria-selected, captured: "2026-07-13" }
    "tokens.components.online-selected-list-item.radius": { surface_id: online-banking, source_id: online-banking-live, method: selector-backed-computed-style-and-aria-selected, captured: "2026-07-13" }
    "tokens.components.online-selected-list-item.padding": { surface_id: online-banking, source_id: online-banking-live, method: selector-backed-computed-style-and-aria-selected, captured: "2026-07-13" }
    "tokens.components.online-selected-list-item.height": { surface_id: online-banking, source_id: online-banking-live, method: selector-backed-computed-style-and-aria-selected, captured: "2026-07-13" }
    "tokens.components.online-selected-list-item.font": { surface_id: online-banking, source_id: online-banking-live, method: selector-backed-computed-style-and-aria-selected, captured: "2026-07-13" }
    "tokens.components.online-selected-list-item.states": { surface_id: online-banking, source_id: online-banking-live, method: static-aria-state-only, captured: "2026-07-13" }
    "tokens.components.online-selected-list-item.use": { surface_id: online-banking, source_id: online-banking-live, method: selector-provenance, captured: "2026-07-13" }
  conflicts: []
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only selector-backed public KB국민은행 product-web values are tokens. KB Financial Group CI, font, history, and value materials are retained as separate brand-context evidence; no fallback family or unobserved interaction is promoted."
  colors:
    canvas: "#ffffff"
    foreground: "#333333"
    foreground-strong: "#000000"
    muted: "#5a5a5a"
    header-accent: "#ffcc00"
    link: "#0c4ad1"
    hairline: "#dddddd"
  typography:
    body: { size: 14, weight: 400, lineHeight: "21px", use: "Repeated public-home list and text samples; the computed family begins 맑은 고딕 but has no matching loaded FontFace in the supplied evidence." }
    section-heading: { size: 20, weight: 700, lineHeight: "26px", use: "Observed public-home h2 samples only; no complete display scale is claimed." }
    online-selected-item: { size: 14, weight: 400, lineHeight: "14px", use: "Selected online-banking list item only; computed Roboto stack is system evidence, not a KB family." }
  spacing:
    inline-link-left: 9
    inline-link-right: 8
    outline-link-inline: 10
    toggle-inline: 12
  rounded:
    square: 0
  shadow:
    none: "none"
  components:
    home-outline-list-item: { type: listItem, bg: "#ffffff", fg: "#222222", border: "1px solid #dddddd", radius: "0px", padding: "0px 10px", height: "28px", font: "14px / 400 / unresolved computed stack", use: "Static public-home anchor samples home::[data-omd-capture=14] and 15, mapped to listItem because no button semantics are evidenced; two sibling text-color values were observed." }
    home-inline-list-item: { type: listItem, fg: "#0c4ad1", radius: "0px", padding: "0px 8px 0px 9px", height: "24px", font: "13px / 400 / unresolved computed stack", use: "Static public-home anchor sample home::[data-omd-capture=67], mapped to listItem because no button semantics are evidenced." }
    online-selected-list-item: { type: listItem, fg: "#333333", radius: "0px", padding: "0px", height: "28px", font: "14px / 400 / operating-system stack", states: "selected static ARIA sample only; no selection transition retained", use: "Online-banking route list item surface-2::#slick-slide00, mapped to listItem because its role is presentation rather than button semantics." }
  components_harvested: true
---

# KB국민은행 — Design Reference

## 1. Visual Theme & Atmosphere

KB국민은행 is a Korean retail and business bank whose public web presence carries a long institutional role into everyday digital banking. KB Financial Group’s history traces the bank’s modern formation to the Kookmin Bank and Housing & Commercial Bank merger, while the group now positions KB Kookmin Bank as a customer-centred financial platform. Its recognisable expression is not a single app kit: the group’s Star-b symbol and yellow accent signal a forward-looking KB identity, and the public bank routes pair that accent sparingly with white fields, dark text, square utility controls, and dense Korean information. Recent first-party reporting places digital-first core-banking modernisation and consultation-friendly terminal redesign alongside this continuity. The result is a practical visual language whose cues of trust, legibility, and institutional continuity should be kept distinct from unobserved native-app or authenticated banking flows.

**Key characteristics:**

- White `#ffffff` public canvas with repeated `#333333` and `#5a5a5a` text hierarchy.
- `#ffcc00` is a selector-backed public-home header accent and the catalog identity colour; the packet does not establish it as a universal product fill.
- Product routes retain square (`0px`) chrome in the measured links, utility controls, and selected online-banking item.
- The supplied capture records three product snapshots, one of which repeats the public home URL; it records no interaction transitions.

## 2. Color Palette & Roles

### Selector-backed public product-web colours

- **Canvas** (`#ffffff`): repeated background on the public home and online-banking routes.
- **Foreground** (`#333333`): repeated online-banking text and selected-item colour.
- **Foreground Strong** (`#000000`): observed public utility control text and borders.
- **Muted** (`#5a5a5a`): repeated public-home navigation and list text.
- **Header Accent** (`#ffcc00`): observed on a public-home link; it is local evidence, not a universal button or error colour.
- **Link** (`#0c4ad1`): observed public-home inline link treatment.
- **Hairline** (`#dddddd`): observed border on two 28px public-home outline links.

### Brand-asset boundary

KB국민은행’s CI guide and KB Financial Group’s CI page present the logo/signature system, Star-b, and image-based colour guidance. They confirm the yellow-and-star identity as brand context, but neither supplies a numeric product token for these bank routes. The only numeric yellow promoted here is the supplied computed `#ffcc00` home sample. Corporate CI, bank product web, online banking, and any unauthenticated or native mobile screens remain separate evidence domains.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No official source inspected says that a named family is deployed on the captured KB국민은행 public-web or online-banking routes. |
| Live computed surface-use | The public home repeatedly computes to a stack beginning `맑은 고딕` / `Malgun Gothic`; the online-banking route computes to a stack beginning `Roboto`. The supplied evidence records no matching loaded FontFace source for either. Neither becomes a KB UI-family token. |
| Official brand asset (distribution unresolved) | KB Financial Group documents KB금융체 as its proprietary corporate type system, with distinct heading and body families and stated visual rationale. It is useful group-brand context, but the reviewed page does not provide a redistribution licence and the supplied KB국민은행 capture does not load it. |
| Declared-only | No declared `@font-face` family was included in the supplied evidence bundle. |
| Unresolved | A browser-loadable source, licence terms, and product deployment evidence for KB금융체 on the captured bank routes were not established. |

### Captured hierarchy

| Role | Family boundary | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public home body/list | unresolved computed stack beginning 맑은 고딕 | 14px | 400 | 21px | repeated home text and list samples |
| Public home section heading | unresolved computed stack beginning 맑은 고딕 | 20px | 700 | 26px | observed h2 samples only |
| Online selected list item | operating-system stack beginning Roboto | 14px | 400 | 14px | one static selected online-banking list item |

Do not render a system fallback as KB금융체. The official corporate font remains a separately documented brand asset until product-use and loadability are independently evidenced.

## 4. Component Stylings

### Public-home static list items

**Outline anchor item**
- Background: `#ffffff`
- Text: `#222222` or `#000000`
- Border: 1px solid `#dddddd`
- Radius: 0px
- Padding: 0px 10px
- Height: 28px
- Font: 14px / 400 / unresolved computed stack
- Use: Public-home sibling anchors `home::[data-omd-capture="14"]` and `home::[data-omd-capture="15"]`; the two observed text values are retained rather than normalised. The structured token maps these anchors to `listItem`, because the packet establishes no button semantics or transition.

**Inline anchor item**
- Text: `#0c4ad1`
- Radius: 0px
- Padding: 0px 8px 0px 9px
- Height: 24px
- Font: 13px / 400 / unresolved computed stack
- Use: Public-home anchor `home::[data-omd-capture="67"]`, mapped to `listItem` in the structured token because the packet establishes no button semantics or transition.

### Online-banking item

**Selected Item**
- Text: `#333333`
- Radius: 0px
- Padding: 0px
- Height: 28px
- Font: 14px / 400 / operating-system stack
- State: Selected is a static `aria-selected="true"` observation; no selection transition was captured.
- Use: Online-banking item `surface-2::#slick-slide00`, mapped to `listItem` because its role is `presentation`, not button semantics.

The bundle reports `interactionCount: 0` and `interactionKinds: 0`. Low-confidence carousel/listbox and icon-button detections remain raw verification evidence, not canonical components. No menu, dialog, toast, validation, error, loading, hover, focus, pressed, disabled, responsive, authenticated-product, or native-app component variant is inferred.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.kbstar.com/ ; https://obank.kbstar.com/quics?page=C018702 ; https://omoney.kbstar.com/quics?page=C017667 ; https://www.kbfg.com/kor/about/corporate/ci.htm ; https://www.kbfg.com/kor/about/corporate/font.htm ; https://www.kbfg.com/eng/about/group/history/merge.htm ; https://www.kbfg.com/kor/about/group/value.htm ; https://www.kbfg.com/common/jsp/fileDownUtil.jsp?filepath=%2Fdata%2Fannual_report%2F2024+KB_ar_full+version.pdf
**Tier 2 sources:** https://getdesign.md/kb-kookmin and https://styles.refero.design/?q=KB%20Kookmin%20Bank were both attempted. The available open paths returned internal/safe-open errors and corresponding searches found no KB국민은행-specific catalogue record.
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied routes were captured at `1440×900`. The evidence supports dense public-web information lists, 14px text roles, and small square controls, but it does not establish a grid, breakpoint, responsive rule, authenticated banking layout, or native mobile layout. The third snapshot repeats the public-home URL, so it must not be treated as a second responsive surface.

## 6. Depth & Elevation

The selector-backed canonical samples are flat: `box-shadow: none` and 0px radius on the measured links and online-banking item. This is a local public-web observation, not a universal KB elevation or card system. No shadow-bearing product component is promoted.

## 7. Do's and Don'ts

### Do

- Preserve the evidence boundary: use public-web values only on the specific public-web contexts they describe.
- Keep the documented 14px body/list hierarchy and square link/item chrome when recreating a measured sibling.
- Treat `#ffcc00` as a sparse observed header accent and retain `#0c4ad1` as the separate observed inline-link colour.
- Name KB금융체 as a corporate brand asset only when no loaded product evidence is available.

### Don't

- Don't turn the group CI yellow, Star-b asset, or corporate typography into a universal online-banking token.
- Don't substitute Malgun Gothic, Roboto, or a system stack for KB금융체 while labelling it as KB’s proprietary font.
- Don't invent rounded cards, filled primary buttons, app navigation, or state transitions from this zero-interaction capture.
- Don't blend corporate, marketing, public web, online banking, and authenticated/native surfaces into one generic banking system.

## 8. Accessibility & Content

The capture shows compact 13–14px public text and square utility geometry; it does not provide keyboard, focus, contrast-ratio, error-message, or screen-reader behaviour. Preserve meaningful link text and visible text hierarchy where a captured component is reused, but do not claim WCAG conformance or a KB accessibility contract from the packet. Any new focus, error, or disabled treatment requires source-specific evidence rather than visual extrapolation.

## 9. Reference Scope & Evidence

This reference has three supplied snapshots: the public KB국민은행 home, one public online-banking route, and a duplicate home snapshot. It uses the supplied evidence bundle as the sole source for computed style, font status, components, and interactions. First-party KB Financial Group materials provide separate history, CI, corporate-font, mission, and current-modernisation context. Tier 2 getdesign and Refero attempts did not yield a KB국민은행-specific record. Raw selectors, values, confidence, conflicts, and source ledger are retained in `.verification.md` and `_research.md`.

## 10. Voice & Tone

The applicable first-party group-level language is customer-centred, trustworthy, professional, and innovation-oriented. It is context for KB국민은행 as a group subsidiary, not an extracted bank-product copy deck.

| Do | Don't |
|---|---|
| Put customer benefit and the financial action in the clearest available order. | Use novelty or urgency language that obscures a financial decision. |
| Use precise, calm wording consistent with trust and professionalism. | Claim certainty, a rate, an approval, or protection that has not been verified. |
| Explain innovation as a means to convenience or a better customer outcome. | Treat internal group values as proof of a specific product feature. |

Illustrative, not extracted product copy:

- “확인할 내용을 먼저 보여드립니다.” *(illustrative; customer-centred clarity)*
- “필요한 금융 정보를 차분하게 안내합니다.” *(illustrative; trust/professionalism)*
- “변경 사항과 다음 단계를 함께 확인하세요.” *(illustrative; clear action sequence)*

## 11. Brand Narrative

KB Financial Group’s history identifies the Kookmin Bank and Housing & Commercial Bank merger as the formation of KB Kookmin Bank into a larger Korean bank serving people and businesses. That institutional origin is useful context for the bank’s broad public role; it is not evidence for a particular current interface component or app flow.

The group’s current mission is “finance that changes the world,” framed around customers’ happier futures and a better world. Its stated vision is to become the most trusted lifetime financial partner through talent and bold innovation. Those are first-party group declarations, retained here as narrative context rather than attributed as an individual customer promise on any captured page.

The 2024 annual report describes customer-centred digital consultation work, core-banking modernisation, and a planned redesign of branch-terminal screens. This gives the current evolution a practical frame: continuity of trust alongside digitisation and more consultation-friendly service. It does not establish completed 2025 UI values or authorise a broader product design system.

## 12. Principles

1. **Customer-centred decision-making.** KB Financial Group names customer focus as a core value.
   *UI implication:* present the financial task, its consequence, and the next action without unnecessary promotional detours.
2. **Trust and integrity.** The group names trust and integrity among its core values and ethics materials.
   *UI implication:* distinguish information, confirmation, and commitment; do not use a decorative cue to imply verification.
3. **Professional clarity.** The group identifies professionalism as a core value.
   *UI implication:* favour legible hierarchy and exact labels over informal shorthand in consequential contexts.
4. **Innovation in service of convenience.** The group links innovation to more convenient and better customer outcomes.
   *UI implication:* introduce new digital paths with plain explanation and preserve an understandable fallback path when one is officially specified.
5. **Growing with society.** The group describes shared growth as a core value.
   *UI implication:* avoid narrowing a general public-service message to an unsupported single audience.

## 13. Personas

These are stakeholder categories evidenced by first-party group materials, not synthetic personal profiles or research findings.

### Individual banking customer

The group mission and customer-centred language address customers broadly. The supplied capture does not identify a task, device, accessibility need, or journey for this category.

### Business customer

KB Financial Group’s history describes KB Kookmin Bank as providing services to people and businesses. The packet does not establish business-banking components, so no workflow or control pattern is assigned.

### Branch and consultation service user

The 2024 annual report discusses consultation-friendly branch-terminal redesign using customer and employee feedback. It is evolution context only: no branch-terminal screen, role, or interaction was captured for this reference.

## 14. States

No product state specification is inferred from this packet. The state headings below preserve the boundary for future source-backed additions; they do not prescribe UI values or microcopy.

| Category | Captured evidence boundary |
|---|---|
| Empty | No empty state captured. |
| Loading | No loading state captured. |
| Error — validation | No validation-error state captured. |
| Error — service/system | No service or system-error state captured. |
| Success | No success/confirmation state captured. |
| Skeleton | No skeleton state captured. |
| Disabled | No disabled state captured. |
| Focus | No focus transition captured. |
| Hover | No hover transition captured. |
| Pressed | No pressed transition captured. |

## 15. Motion & Easing

The supplied bundle records zero interaction kinds and zero interaction records. It therefore establishes no duration, easing curve, transition, animation, carousel movement, or reduced-motion rule. Do not derive motion from the static selected item or low-confidence carousel structure; add motion only when a source-specific capture or official specification supports it.
