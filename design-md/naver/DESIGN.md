---
id: naver
name: Naver
country: KR
category: consumer-tech
homepage: "https://www.naver.com"
primary_color: "#03c75a"
logo:
  type: simpleicons
  slug: naver
verified: "2026-07-11"
omd: "0.1"
ds:
  name: NAVER Brand Resource
  url: "https://www.navercorp.com/company/brandGuide"
  type: brand
  description: "Official NAVER logo, color, and usage guidance; it is not a public product design system."
verification_v2:
  schema: 2
  checked: "2026-07-11"
  surfaces:
    - { id: portal-home, kind: product, url: "https://www.naver.com/", inspected: "2026-07-11" }
    - { id: search-results, kind: product, url: "https://search.naver.com/search.naver?query=%EB%94%94%EC%9E%90%EC%9D%B8", inspected: "2026-07-11" }
    - { id: corporate-brand, kind: brand, url: "https://www.navercorp.com/company/brandGuide", inspected: "2026-07-11" }
  sources:
    - { id: portal-live, kind: product-surface, url: "https://www.naver.com/", captured: "2026-07-11" }
    - { id: search-live, kind: product-surface, url: "https://search.naver.com/search.naver?query=%EB%94%94%EC%9E%90%EC%9D%B8", captured: "2026-07-11" }
    - { id: brand-live, kind: product-surface, url: "https://www.navercorp.com/company/brandGuide", captured: "2026-07-11" }
    - { id: brand-guide, kind: official-doc, url: "https://www.navercorp.com/company/brandGuide", captured: "2026-07-11" }
    - { id: company-about, kind: official-doc, url: "https://www.navercorp.com/company/about", captured: "2026-07-11" }
  claims:
    "tokens.colors.brand": &brand_doc { surface_id: corporate-brand, source_id: brand-guide, method: official-doc, captured: "2026-07-11" }
    "tokens.colors.canvas": &portal_style { surface_id: portal-home, source_id: portal-live, method: computed-style, captured: "2026-07-11" }
    "tokens.colors.portal-ink": *portal_style
    "tokens.colors.search-ink": &search_style { surface_id: search-results, source_id: search-live, method: computed-style, captured: "2026-07-11" }
    "tokens.colors.search-link": *search_style
    "tokens.colors.search-muted": *search_style
    "tokens.colors.hairline": *search_style
    "tokens.colors.corporate-ink": &brand_style { surface_id: corporate-brand, source_id: brand-live, method: computed-style, captured: "2026-07-11" }
    "tokens.colors.corporate-muted": *brand_style
    "tokens.typography.family.portal": *portal_style
    "tokens.typography.family.corporate": *brand_style
    "tokens.typography.portal-search.size": *portal_style
    "tokens.typography.portal-search.weight": *portal_style
    "tokens.typography.portal-search.lineHeight": *portal_style
    "tokens.typography.portal-search.tracking": *portal_style
    "tokens.typography.portal-ui.size": *portal_style
    "tokens.typography.portal-ui.weight": *portal_style
    "tokens.typography.portal-ui.lineHeight": *portal_style
    "tokens.typography.portal-ui.tracking": *portal_style
    "tokens.typography.search-tab.size": *search_style
    "tokens.typography.search-tab.weight": *search_style
    "tokens.typography.search-tab.lineHeight": *search_style
    "tokens.typography.search-tab.tracking": *search_style
    "tokens.typography.search-title.size": *search_style
    "tokens.typography.search-title.weight": *search_style
    "tokens.typography.search-title.lineHeight": *search_style
    "tokens.typography.search-title.tracking": *search_style
    "tokens.typography.corporate-tab.size": *brand_style
    "tokens.typography.corporate-tab.weight": *brand_style
    "tokens.typography.corporate-tab.lineHeight": *brand_style
    "tokens.typography.corporate-tab.tracking": *brand_style
    "tokens.spacing.xs": *search_style
    "tokens.spacing.sm": *portal_style
    "tokens.spacing.md": *search_style
    "tokens.spacing.lg": *portal_style
    "tokens.spacing.xl": *search_style
    "tokens.rounded.sm": *portal_style
    "tokens.rounded.md": *search_style
    "tokens.rounded.lg": *search_style
    "tokens.rounded.full": *portal_style
    "tokens.components.search-input.type": &portal_search { surface_id: portal-home, source_id: portal-live, method: computed-style, captured: "2026-07-11" }
    "tokens.components.search-input.bg": *portal_search
    "tokens.components.search-input.fg": *portal_search
    "tokens.components.search-input.radius": *portal_search
    "tokens.components.search-input.height": *portal_search
    "tokens.components.search-input.padding": *portal_search
    "tokens.components.search-input.font": *portal_search
    "tokens.components.search-input.states": *portal_search
    "tokens.components.search-input.use": *portal_search
    "tokens.components.search-submit.type": *portal_search
    "tokens.components.search-submit.bg": *portal_search
    "tokens.components.search-submit.fg": *portal_search
    "tokens.components.search-submit.radius": *portal_search
    "tokens.components.search-submit.height": *portal_search
    "tokens.components.search-submit.padding": *portal_search
    "tokens.components.search-submit.states": *portal_search
    "tokens.components.search-submit.use": *portal_search
    "tokens.components.serp-tab.type": &serp_component { surface_id: search-results, source_id: search-live, method: computed-style, captured: "2026-07-11" }
    "tokens.components.serp-tab.bg": *serp_component
    "tokens.components.serp-tab.fg": *serp_component
    "tokens.components.serp-tab.radius": *serp_component
    "tokens.components.serp-tab.padding": *serp_component
    "tokens.components.serp-tab.font": *serp_component
    "tokens.components.serp-tab.states": *serp_component
    "tokens.components.serp-tab.use": *serp_component
    "tokens.components.filter-chip.type": *serp_component
    "tokens.components.filter-chip.bg": *serp_component
    "tokens.components.filter-chip.fg": *serp_component
    "tokens.components.filter-chip.border": *serp_component
    "tokens.components.filter-chip.radius": *serp_component
    "tokens.components.filter-chip.padding": *serp_component
    "tokens.components.filter-chip.font": *serp_component
    "tokens.components.filter-chip.use": *serp_component
    "tokens.components.result-card.type": *serp_component
    "tokens.components.result-card.bg": *serp_component
    "tokens.components.result-card.fg": *serp_component
    "tokens.components.result-card.radius": *serp_component
    "tokens.components.result-card.use": *serp_component
    "tokens.components.paging-button.type": *portal_search
    "tokens.components.paging-button.bg": *portal_search
    "tokens.components.paging-button.fg": *portal_search
    "tokens.components.paging-button.border": *portal_search
    "tokens.components.paging-button.radius": *portal_search
    "tokens.components.paging-button.height": *portal_search
    "tokens.components.paging-button.shadow": *portal_search
    "tokens.components.paging-button.states": *portal_search
    "tokens.components.paging-button.use": *portal_search
    "tokens.components.corporate-tab.type": &corporate_component { surface_id: corporate-brand, source_id: brand-live, method: computed-style, captured: "2026-07-11" }
    "tokens.components.corporate-tab.bg": *corporate_component
    "tokens.components.corporate-tab.fg": *corporate_component
    "tokens.components.corporate-tab.radius": *corporate_component
    "tokens.components.corporate-tab.padding": *corporate_component
    "tokens.components.corporate-tab.font": *corporate_component
    "tokens.components.corporate-tab.states": *corporate_component
    "tokens.components.corporate-tab.use": *corporate_component
    "tokens.components.portal-menu.type": *portal_search
    "tokens.components.portal-menu.bg": *portal_search
    "tokens.components.portal-menu.fg": *portal_search
    "tokens.components.portal-menu.font": *portal_search
    "tokens.components.portal-menu.states": *portal_search
    "tokens.components.portal-menu.use": *portal_search
  conflicts: []
tokens:
  source: reconciled
  extracted: "2026-07-11"
  note: "Portal/search and NAVER Corp brand surfaces are separate domains. System is the live portal/search family; InterVariable is loaded on the corporate brand page. Declared-only Naver fonts are not promoted."
  colors:
    brand: "#03c75a"
    canvas: "#ffffff"
    portal-ink: "#2e2e2e"
    search-ink: "#1c1c1c"
    search-link: "#0c43b7"
    search-muted: "#8c8c8c"
    hairline: "#e5e5e5"
    corporate-ink: "#1a1d24"
    corporate-muted: "#717680"
  typography:
    family:
      portal: "System"
      corporate: "InterVariable"
    portal-search: { size: 21, weight: 700, lineHeight: "24px", tracking: "-0.4px" }
    portal-ui: { size: 14.7, weight: 500, lineHeight: "17.85px", tracking: "-0.4px" }
    search-tab: { size: 16, weight: 600, lineHeight: "21px", tracking: "-0.3px" }
    search-title: { size: 18, weight: 600, lineHeight: "24px", tracking: "-0.16px" }
    corporate-tab: { size: 20, weight: 600, lineHeight: "28px", tracking: "-0.6px" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  components_harvested: true
  components:
    search-input: { type: input, bg: "transparent", fg: "#000000", radius: "0px", height: "58px", padding: "17px 0", font: "21px / 700 / System", states: "focus and autocomplete listbox expansion observed", use: "Portal-home search query input inside the branded search assembly" }
    search-submit: { type: button, bg: "transparent", fg: "#2e2e2e", radius: "0px", height: "58px", padding: "9px 9px 9px 10px", states: "default observed; hover and pressed not retained", use: "Portal AI/search submit control" }
    serp-tab: { type: tab, bg: "transparent", fg: "#8c8c8c", radius: "0px", padding: "6px 12px 14px", font: "16px / 600 / System", states: "default #8c8c8c; hover and pressed #595959", use: "Search-result vertical navigation" }
    filter-chip: { type: badge, bg: "#ffffff", fg: "#0c43b7", border: "1px solid #e5e5e5", radius: "18px", padding: "4px 12px 4px 4px", font: "13px / 400 / System", use: "Search-result image/filter chip" }
    result-card: { type: card, bg: "#ffffff", fg: "#1c1c1c", radius: "12px", use: "Search-result grouped content card" }
    paging-button: { type: button, bg: "#ffffff", fg: "#2e2e2e", border: "1px solid rgba(0,0,0,0.15)", radius: "9999px", height: "36px", shadow: "0 1px 2px rgba(0,0,0,0.06)", states: "default observed; hover and pressed not retained", use: "Portal carousel previous/next control" }
    corporate-tab: { type: tab, bg: "transparent", fg: "#1a1d24", radius: "0px", padding: "17px 0 18px", font: "20px / 600 / InterVariable", states: "selected observed", use: "NAVER Corp brand-resource section switcher" }
    portal-menu: { type: listItem, bg: "transparent", fg: "#2e2e2e", font: "14.7px / 500 / System", states: "expanded listbox and option observed", use: "Portal content-header overflow menu option" }
---

# Design System Inspiration of Naver (네이버)

## 1. Visual Theme & Atmosphere

NAVER is a Korean search and discovery platform whose public identity spans the portal home, search results, and a much broader family of local services. Its familiar green is the stable connective tissue, while each product surface optimizes independently for dense information retrieval, quick navigation, and local task completion. NAVER does not expose one public product design system that governs every service, so this reference deliberately separates three inspected domains: the portal home, search results, and the NAVER Corp brand-resource page. That separation preserves the recognizable company identity without turning a corporate font, a search-only pattern, or a portal measurement into a universal product rule.

The official identity constant is NAVER Green (`#03C75A`). Product chrome is otherwise neutral and information-dense. The portal/search surfaces use a System-first Korean stack, while the corporate brand page loads and visibly uses `InterVariable`. Values from one surface must not be silently generalized to the others.

**Key characteristics:**
- Official brand green `#03C75A`, backed by the NAVER brand guide
- Dense portal/search composition on white with dark gray text
- System-first portal/search typography
- `InterVariable` on the corporate brand page
- Search, filters, tabs, cards, menus, and paging controls grounded in live computed evidence

## 2. Color Palette & Roles

### Official identity
- **NAVER Green** (`#03C75A`): official logo and identity color. The guide specifies RGB 3/199/90, CMYK 72/0/88/0, and Pantone 2270C.

### Portal and search
- **Canvas** (`#FFFFFF`): portal and result surfaces.
- **Portal Ink** (`#2E2E2E`): common portal control and chrome text.
- **Search Ink** (`#1C1C1C`): primary search-result text.
- **Search Link** (`#0C43B7`): current search-result link/chip blue.
- **Search Muted** (`#8C8C8C`): inactive tabs and secondary labels.
- **Hairline** (`#E5E5E5`): filter-chip and light container border.

### Corporate brand page
- **Corporate Ink** (`#1A1D24`): brand-page navigation and section labels.
- **Corporate Muted** (`#717680`): secondary corporate copy.

Do not promote older `#0068C3`, `#6633B9`, or estimated semantic colors as current universal NAVER tokens without surface-specific live evidence.

## 3. Typography Rules

### Font resolution

| Evidence class | Resolution |
|---|---|
| Official product-use | No single official family is published for every NAVER product surface. |
| Live surface-use | Portal/search use a System-first stack; the corporate brand page visibly uses loaded `InterVariable`. |
| Official distributed asset | NAVER distributes Nanum and D2Coding, but distribution alone is not UI usage. |
| Declared-only | NanumSquare, NanumSquareNeo, NanumHuman, and Pretendard were declared without visible use. |
| Unresolved | A minority `나눔고딕` usage had no matching loaded FontFace. |

Specimen availability is evaluated per surface and never substitutes one NAVER-published font for another.
- **Portal and search:** `System`. Computed stacks begin with `-apple-system` and continue through Korean platform fallbacks.
- **Corporate brand page:** `InterVariable`, loaded from `https://www.navercorp.com/font/InterVariable.woff2` and visibly used.
- **Declared only in this capture:** NanumSquare, NanumSquareNeo, NanumHuman, and Pretendard. Declaration is not visible use.
- **Unresolved minority:** `나눔고딕` appeared on four search elements without a matching loaded FontFace.
- **No canonical UI monospace:** D2Coding is a NAVER-published font, not evidence that current portal/search UI uses it.

| Role | Surface | Font | Size | Weight | Line height | Tracking |
|---|---|---|---:|---:|---:|---:|
| Portal Search | Portal | System | 21px | 700 | 24px | -0.4px |
| Portal UI | Portal | System | 14.7px | 500 | 17.85px | -0.4px |
| Search Tab | Search | System | 16px | 600 | 21px | -0.3px |
| Search Title | Search | System | 18px | 600 | 24px | -0.16px |
| Corporate Tab | Brand resource | InterVariable | 20px | 600 | 28px | -0.6px |

## 4. Component Stylings

### Portal Search

**Search Input**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Padding: 17px 0
- Height: 58px
- Font: 21px / 700 / System
- States: focus and autocomplete listbox expansion observed
- Use: Query field inside the portal's branded search assembly

**Search Submit**
- Background: transparent
- Text: `#2E2E2E`
- Radius: 0px
- Padding: 9px 9px 9px 10px
- Height: 58px
- States: default observed; hover and pressed not retained
- Use: AI/search submission control adjacent to the query field

### Search Results

**Vertical Tab**
- Background: transparent
- Text: `#8C8C8C`
- Radius: 0px
- Padding: 6px 12px 14px
- Font: 16px / 600 / System
- Hover: `#595959`
- Pressed: `#595959`
- Use: Search vertical/category navigation

**Filter Chip**
- Background: `#FFFFFF`
- Text: `#0C43B7`
- Border: 1px solid `#E5E5E5`
- Radius: 18px
- Padding: 4px 12px 4px 4px
- Font: 13px / 400 / System
- Use: Image and result refinement filter

**Result Card**
- Background: `#FFFFFF`
- Text: `#1C1C1C`
- Radius: 12px
- Use: Grouped search-result content surface

### Portal Utilities

**Paging Button**
- Background: `#FFFFFF`
- Text: `#2E2E2E`
- Border: 1px solid rgba(0,0,0,0.15)
- Radius: 9999px
- Height: 36px
- Shadow: 0 1px 2px rgba(0,0,0,0.06)
- States: default observed; hover and pressed not retained
- Use: Carousel previous/next action

**Overflow Menu**
- Background: transparent
- Text: `#2E2E2E`
- Font: 14.7px / 500 / System
- States: expanded listbox and option observed
- Use: Content-header overflow navigation

### Corporate Brand Resource

**Section Tab**
- Background: transparent
- Text: `#1A1D24`
- Radius: 0px
- Padding: 17px 0 18px
- Font: 20px / 600 / InterVariable
- States: selected observed
- Use: Brand guide versus official-photo section switching

## 5. Layout Principles

- Use the observed 4/8/12/16/20px spacing clusters for compact UI composition.
- Portal and SERP density are surface properties, not permission to remove hierarchy.
- Search remains the primary spatial anchor on the portal.
- Cards may use 12px rounding on search surfaces; utility controls range from square to fully circular.
- Corporate pages use more generous rhythm and must not inherit portal density automatically.

## 6. Depth & Elevation

- Most sampled portal/search controls use no shadow.
- The portal paging button uses a restrained `0 1px 2px rgba(0,0,0,0.06)` shadow.
- Prefer border, spacing, and type hierarchy before introducing elevation.
- No universal NAVER shadow scale is claimed.

## 7. Do's and Don'ts

### Do
- Use official NAVER Green exactly as `#03C75A` for identity applications.
- Keep portal/search System typography separate from corporate InterVariable typography.
- Preserve compact Korean text rhythm and explicit interactive states.
- Treat live product evidence and the official brand guide as different authorities.

### Don't
- Do not infer native-app typography from these web surfaces.
- Do not promote declared-only Nanum/Pretendard faces as current UI fonts.
- Do not invent a public NAVER product design system from brand-resource guidance.
- Do not alter the official logo's proportions, color, or style.

## 8. Responsive Behavior

- The inspected evidence is desktop at 1440×900; mobile-native claims are intentionally absent.
- Preserve 44px-or-larger touch targets when adapting dense portal utilities to narrow layouts.
- Allow search-result cards to stack before shrinking readable Korean type.
- Keep the search control visually dominant and avoid horizontal overflow in tab/filter rows.

## 9. Agent Prompt Guide

> Build a NAVER-inspired information surface using a white canvas, System-first Korean typography, compact 4/8/12/16/20px spacing, dark neutral text, and `#03C75A` only where identity or a verified action requires it. Separate portal/search components from NAVER Corp brand-page components. Use 12px result cards, 18px filter chips, and explicit hover/pressed/selected states. Do not claim Nanum, Pretendard, or InterVariable outside the surfaces where they were actually observed.

## 10. Voice & Tone

The inspected public copy is direct, functional, and navigation-led. Labels such as “검색하기”, “삭제”, “전체 서비스”, and “브랜드 리소스” describe the action or destination without promotional filler.

| Do | Don't |
|---|---|
| Use short Korean action labels | Add decorative slogans to utility controls |
| Explain the next recoverable action | Blame the user |
| Name destinations consistently | Rename familiar portal concepts for novelty |

Verified live samples:
- “검색하기” — corporate-site integrated search. <!-- verified: https://www.navercorp.com/company/brandGuide -->
- “브랜드 리소스” — official brand-resource section. <!-- verified: https://www.navercorp.com/company/brandGuide -->
- “기술과 서비스로 세상의 모든 가능성을 연결합니다” — corporate navigation statement. <!-- verified: https://www.navercorp.com/company/about -->

## 11. Brand Narrative

NAVER's official company page describes its beginning in 1999 and frames the organization as “Navigators” connecting possibilities through technology and services. The same official timeline presents integrated search in 2000, HyperCLOVA in 2021, and the 1784 robot-friendly headquarters in 2022.

The official brand guide describes NAVER Green as carrying trust, challenge, exploration, familiarity, and an eco-friendly image. This reference uses those statements only as sourced brand context; it does not infer unpublished product principles.

In product terms, this produces a useful tension: NAVER must remain instantly recognizable while supporting services with very different densities and jobs. Search favors fast scanning and compact labels; the portal coordinates many destinations; the corporate brand surface explains the shared identity. Green, logo rules, and company statements stay at brand level, while typography, spacing, and components remain attached to the surface where they were observed.

## 12. Principles

1. **Keep identity consistent.** The official logo and `#03C75A` must not be arbitrarily recolored, distorted, outlined, or given effects.
   - *UI implication:* isolate brand identity tokens from transient service colors.
2. **Connect people to destinations quickly.** Public navigation and search copy is literal and compact.
   - *UI implication:* prioritize recognizable labels and scanning speed.
3. **Separate service surfaces.** NAVER operates many products with different local systems.
   - *UI implication:* never treat one service's typography or component geometry as a universal NAVER token.

## 13. Personas

NAVER has not published validated product personas for the inspected portal, search, and brand-resource surfaces. The evidence supports usage contexts instead: people entering a query and comparing results; portal visitors scanning news, shopping, maps, mail, and other destinations; and designers or partners retrieving official identity assets. These are task contexts, not demographic profiles. Implementations should validate the specific NAVER service, language, device, and task before turning them into research personas.

## 14. States

- **Hover / pressed:** captured on search tabs and utility actions.
- **Selected:** captured on portal/search/corporate tabs.
- **Expanded:** captured for the portal listbox/menu.
- **Checked / unchecked:** captured for portal display controls and a search switch.
- **Empty, loading, error, success, disabled:** [FILL IN — no safe representative live evidence captured in this run.]

Do not fill absent states with generic NAVER-looking values.

## 15. Motion & Easing

The collector captured state changes but did not establish a canonical duration or easing scale. Use motion only to clarify menu expansion, tab selection, and focus transitions; respect reduced-motion preferences.

[FILL IN — official product motion tokens were not found in the inspected public sources.]

---

**Verified:** 2026-07-11 (omd:migrate)
**Tier 1 sources:** https://www.naver.com/ · https://search.naver.com/search.naver?query=%EB%94%94%EC%9E%90%EC%9D%B8 · https://www.navercorp.com/company/brandGuide · https://www.navercorp.com/company/about
**Tier 2 sources:** https://getdesign.md/naver (no importable record in available path) · https://styles.refero.design/?q=naver (no importable result in available path)
**Tier 2 status:** unavailable; no Tier 2 value promoted
**Conflicts unresolved:** none
**Migration depth:** Apple-tier evidence graph; visual smoke pending
