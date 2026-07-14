---
id: remember
name: Remember
country: KR
category: productivity
homepage: "https://www.rememberapp.co.kr"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://cdn.rememberapp.co.kr/logos/remember/rmbr_og_image.png"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Remember UI
  url: "https://dramancompany.github.io/remember-ui/"
  type: system
  description: Public Remember UI Storybook deployment.
  og_image: "https://cdn.rememberapp.co.kr/logos/remember/rmbr_og_image.png"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: career-postings, kind: product, url: "https://career.rememberapp.co.kr/job/postings", inspected: "2026-07-13" }
    - { id: career-postings-repeat, kind: product, url: "https://career.rememberapp.co.kr/job/postings", inspected: "2026-07-13" }
    - { id: corporate-home, kind: marketing, url: "https://corp.remember.co.kr/", inspected: "2026-07-13" }
  sources:
    - { id: career-postings-live, kind: product-surface, url: "https://career.rememberapp.co.kr/job/postings", captured: "2026-07-13" }
    - { id: corporate-home-live, kind: product-surface, url: "https://corp.remember.co.kr/", captured: "2026-07-13" }
    - { id: company-context, kind: official-doc, url: "https://corp.remember.co.kr/company", captured: "2026-07-13" }
    - { id: brand-guideline, kind: brand-asset, url: "https://static.rememberapp.co.kr/brand/brand_guideline_logo.pdf", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.action-black": &career { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.surface": *career
    "tokens.colors.foreground": *career
    "tokens.colors.input-surface": *career
    "tokens.colors.muted": *career
    "tokens.colors.hairline": *career
    "tokens.colors.corporate-orange": &corporate { surface_id: corporate-home, source_id: corporate-home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.family.ui": *career
    "tokens.typography.body.size": *career
    "tokens.typography.body.weight": *career
    "tokens.typography.body.lineHeight": *career
    "tokens.typography.body.use": *career
    "tokens.typography.heading.size": *career
    "tokens.typography.heading.weight": *career
    "tokens.typography.heading.lineHeight": *career
    "tokens.typography.heading.use": *career
    "tokens.typography.card-title.size": *career
    "tokens.typography.card-title.weight": *career
    "tokens.typography.card-title.lineHeight": *career
    "tokens.typography.card-title.use": *career
    "tokens.spacing.xs": *career
    "tokens.spacing.sm": *career
    "tokens.spacing.md": *career
    "tokens.spacing.lg": *career
    "tokens.spacing.xl": *career
    "tokens.rounded.sm": *career
    "tokens.rounded.md": *career
    "tokens.rounded.lg": *career
    "tokens.components.career-outline-dialog-button.type": *career
    "tokens.components.career-outline-dialog-button.bg": *career
    "tokens.components.career-outline-dialog-button.fg": *career
    "tokens.components.career-outline-dialog-button.border": *career
    "tokens.components.career-outline-dialog-button.radius": *career
    "tokens.components.career-outline-dialog-button.padding": *career
    "tokens.components.career-outline-dialog-button.font": *career
    "tokens.components.career-outline-dialog-button.states": *career
    "tokens.components.career-outline-dialog-button.use": *career
    "tokens.components.career-job-list-item.type": *career
    "tokens.components.career-job-list-item.fg": *career
    "tokens.components.career-job-list-item.radius": *career
    "tokens.components.career-job-list-item.font": *career
    "tokens.components.career-job-list-item.use": *career
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Selector-backed career-product and corporate-marketing observations remain separate. No authenticated product, documentation chrome, or source-uncorroborated corporate display face is made a shared token."
  colors:
    action-black: "#000000"
    surface: "#ffffff"
    foreground: "#222222"
    input-surface: "#f2f2f2"
    muted: "#808080"
    hairline: "#d4d4d4"
    corporate-orange: "#fc5d11"
  typography:
    family: { ui: "Pretendard" }
    body: { size: 16, weight: 400, lineHeight: 1.45, use: "Repeated career posting text and controls" }
    heading: { size: 20, weight: 600, lineHeight: 1.30, use: "Career posting section heading" }
    card-title: { size: 16, weight: 400, lineHeight: 1.45, use: "Career posting card title" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 }
  rounded: { sm: 4, md: 6, lg: 8 }
  components:
    career-outline-dialog-button: { type: button, bg: "transparent", fg: "#ffffff", border: "1px solid #ffffff", radius: "6px", padding: "0px 12px", font: "14px/400 Pretendard", states: "dialog-open observed from this trigger only", use: "Career postings header control at career-postings::[data-omd-capture=10]" }
    career-job-list-item: { type: listItem, fg: "#222222", radius: "0px", font: "16px/400 Pretendard", use: "Chromeless job-list item at career-postings::li; 162px-wide representative capture" }
  components_harvested: true
---

# Design System Inspiration of Remember (리멤버)

## 1. Visual Theme & Atmosphere

Remember began with digitising business cards and has since expanded into a professional network that connects career opportunities, recruiting, community, and business relationships. The company describes its mission as connecting working people with opportunities for success; its company history records the 2014 app launch, 2019 recruiting launch, and 2024 company-name change to Remember & Company. On the supplied career-postings surface, that professional focus appears as dense, low-chrome information design: a white field, `#222222` reading text, `#000000` action elements, and narrow 4–6px corners. The separately captured corporate marketing site is deliberately more expressive, with `#fc5d11` display accents; it is not evidence that orange is the career product’s default action color. The official identity guideline likewise reserves black and off-white for the logotype rather than defining a universal application palette.

**Key characteristics:**

- Dense, chromeless career listings rather than elevated cards.
- Career-product action black (`#000000`) and reading foreground (`#222222`).
- Border-led 4px filter controls on a white (`#ffffff`) surface.
- Loaded Pretendard on the career route, backed by Remember-hosted font files.
- A corporate-only orange (`#fc5d11`) display treatment, not a general CTA token.

## 2. Color Palette & Roles

### Career product surface

- **Action Black** (`#000000`): observed on the career header’s filled auth control and search submit. This is a career-route observation, not a whole-company rule.
- **White Surface** (`#ffffff`): observed filled header control and dialog surface.
- **Reading Foreground** (`#222222`): repeated career body, list, and filter-control text.
- **Input Surface** (`#f2f2f2`): observed career search field fill.
- **Muted Text** (`#808080`): observed career search input text/placeholder value.
- **Hairline** (`#d4d4d4`): observed 1px border on career filter controls.

### Corporate marketing surface

- **Corporate Orange** (`#fc5d11`): observed corporate-home display-heading color. It remains local to that marketing surface.

### Boundary

The raw packet does not establish product error, success, selected-filter, hover, focus, disabled, or authenticated-app colors. Those fields are omitted rather than inferred from older captures or adjacent Korean products.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No first-party typography guide assigns a general Remember product type role in this pass. |
| Live computed surface-use | **Pretendard** is computed on the career route and is FontFaceSet-backed with six Remember CDN source URLs; it has 1,053 recorded uses across body, controls, cards, headings, input, list items, and dialog content. |
| Official distributed brand asset | The official brand guideline is a logo/identity guide, not a distributed type asset. |
| Declared-only | Inter and several placeholder family declarations occur with zero visible use; they are excluded from `tokens.typography.family`. |
| System / unresolved | Generic `sans-serif` is a system fallback. Founders Grotesk Condensed appears in computed corporate-marketing text but its packet record has no source URL; it remains outside shared machine tokens until its source provenance is corroborated. |

### Captured hierarchy

| Role | Family | Size | Weight | Line Height | Surface boundary |
|---|---|---:|---:|---:|---|
| Career section heading | Pretendard | 20px | 600 | 26px | `career-postings::h2` |
| Career card title | Pretendard | 16px | 400 | 23.2px | `career-postings::h3` |
| Repeated career body/control | Pretendard | 16px | 400 | 23.2px | career list, input, and controls |
| Corporate display heading | Founders Grotesk Condensed Medium | 100px | 400 | 92px | corporate marketing only; source provenance unresolved |

Do not substitute a system font for Pretendard or a named Founders face. The corporate display sample is useful observational context, but not a reusable UI-family token.

## 4. Component Stylings

### Career header controls

**Filled Auth Control**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px
- Font: 14px / 400 / Pretendard
- Use: `career-postings::[data-omd-capture="8"]`; baseline-only header auth control.

**White Header Control**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 6px
- Padding: 0px 12px
- Font: 14px / 400 / Pretendard
- Use: `career-postings::[data-omd-capture="9"]`; baseline-only header control.

**Outline Dialog Trigger**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 6px
- Padding: 0px 12px
- Font: 14px / 400 / Pretendard
- States: dialog-open observed after this trigger at `career-postings::[data-omd-capture="10"]`.
- Use: Career-postings header control; no generic hover, focus, pressed, or disabled style was captured.

### Career search and filters

**Search Input**
- Background: `#f2f2f2`
- Text: `#808080`
- Radius: 4px
- Padding: 0px 0px 0px 56px
- Font: 16px / 400 / Pretendard
- Use: `career-postings::[data-omd-capture="20"]`; baseline only.

**Filter Control**
- Background: transparent
- Text: `#222222`
- Border: 1px solid `#d4d4d4`
- Radius: 4px
- Padding: 10px 16px
- Font: 16px / 400 / Pretendard
- Use: `career-postings::[data-omd-capture="129"]` through `[data-omd-capture="134"]`; six baseline controls only.

### Career list

**Job List Item**
- Text: `#222222`
- Radius: 0px
- Padding: 0px
- Font: 16px / 400 / Pretendard
- Use: `career-postings::li`, representative 162px-wide, 250px-high chromeless job item; no card border, fill, or shadow was captured.

---
**Verified:** 2026-07-13

**Tier 1 sources:** https://career.rememberapp.co.kr/job/postings · https://corp.remember.co.kr/ · https://corp.remember.co.kr/company · https://static.rememberapp.co.kr/brand/brand_guideline_logo.pdf

**Tier 2 sources:** https://getdesign.md/remember (attempted; no raw entry retrieved) · https://styles.refero.design/?q=remember (attempted; no raw result retrieved)

**Conflicts unresolved:** none

## 5. Layout Principles

### Career route

- Repeated list and control text is 16px; captured spacing clusters include 4px, 8px, 12px, 16px, and 24px.
- The representative job item is 162px wide and chromeless. Preserve the content-led list rhythm rather than turning it into a generic elevated card grid.
- The search input reserves 56px on its leading edge; do not generalise that offset to unrelated inputs.

### Corporate route

Corporate marketing typography and large display compositions are a separate surface. Its display treatment is not a layout specification for career search or signed-in product screens.

## 6. Depth & Elevation

The captured career list items and header/search controls record no box shadow. Use border and background contrast only where a selector-backed component above calls for it. No general modal elevation token is promoted from the captured dialog.

## 7. Do's and Don'ts

### Do

- Keep career lists dense, text-forward, and visually quiet.
- Use `#000000` only for the observed career action contexts; retain `#222222` for repeated reading text.
- Keep observed filter controls border-led with 4px corners.
- Keep corporate orange (`#fc5d11`) scoped to the observed corporate marketing expression.

### Don't

- Treat the corporate site’s Founders display face as a source-proven shared app font.
- Invent selected-filter, error, disabled, or hover colors from an unobserved state.
- Add shadows or card fills to chromeless career list items.
- Use a system substitute while labelling it as Pretendard.

## 8. Iconography & Imagery

The official identity guide defines a renewed R symbol containing the Remember Square and permits black and off-white logotype colours. It specifies usage, clear-space, and minimum-size rules for the logo, symbol, and app icon. Those brand-asset rules are not component tokens for the captured career web route.

## 9. Overall Personality

On the career surface, Remember is compact, professional, and scan-oriented: white space is functional rather than decorative, corners are restrained, and primary actions are high-contrast. The corporate site adds more expressive editorial scale and orange display accents, but the two surface purposes should not be blended into a single generic system.

## 10. Voice & Tone

The official identity guideline frames the persona as an experienced, friendly career expert and lists confident, positive, agile, polished, and friendly qualities. Use direct, capable language that clarifies an opportunity and its next step; avoid slang, empty urgency, or unsupported promises.

| Do | Don't |
|---|---|
| Describe the opportunity and the user’s next action plainly. | Inflate a listing with vague superlatives. |
| Sound professional and approachable. | Sound bureaucratic or overly casual. |
| Be positive without hiding relevant constraints. | Use pressure language to manufacture urgency. |

## 11. Brand Narrative

Remember’s official company account starts with the business card: not merely paper, but a professional identity exchanged at moments of connection. The company says the service launched in 2014, then expanded from a “national business-card app” into career opportunities, community, and a professional-network direction.

Its stated mission is to connect working people with opportunities and lead them to success. The official timeline records a 2019 recruiting-service launch, a 2024 premium-job-posting launch, and the October 2024 name change to Remember & Company. These are company/history facts, not proof that every corporate page shares the career route’s CSS tokens.

## 12. Principles

1. **Connect people and opportunities.** *UI implication:* make the opportunity, qualification, and next action easy to scan.
2. **Select high-quality, relevant opportunities.** *UI implication:* use dense but legible comparison information instead of decorative marketing cards.
3. **Help professionals be productive.** *UI implication:* keep repeated controls and reading text quiet, consistent, and easy to parse.
4. **Integrate related services.** *UI implication:* preserve surface boundaries; shared branding does not authorise a token from one product purpose to overwrite another.

## 13. Personas

The official guideline’s archetype is an experienced, friendly career expert. The company’s public narrative also names professionals building career records, companies seeking talent, and people creating business connections. These are stakeholder groups from official positioning, not synthetic named user personas or behavioural metrics.

## 14. States

| State | Evidence boundary |
|---|---|
| Default header auth | Filled and white baseline controls observed on the career route. |
| Default search | Baseline `#f2f2f2` input observed on the career route. |
| Default filter | Six baseline border controls observed on the career route. |
| Dialog open | One dialog-open interaction observed from the outline header trigger. |
| Hover | No general hover state captured. |
| Focus | No focus state captured. |
| Pressed | No general pressed state captured. |
| Disabled | No disabled state captured. |
| Error | No error state captured. |
| Success | No success state captured. |
| Loading | No loading state captured. |
| Empty | No empty state captured. |

## 15. Motion & Easing

No transition duration, easing curve, or loading motion was captured in this packet. Do not infer a motion scale from the dialog-open interaction or from unrelated product surfaces.
