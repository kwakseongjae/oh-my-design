---
id: cgv
name: CGV
country: KR
category: consumer-tech
homepage: "https://www.cgv.co.kr/"
primary_color: "#121212"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=cgv.co.kr&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing-product, url: "https://cgv.co.kr/", inspected: "2026-07-13" }
    - { id: surface-2, kind: public-home-variant, url: "https://cgv.co.kr/", inspected: "2026-07-13" }
    - { id: surface-3, kind: public-home-variant, url: "https://cgv.co.kr/", inspected: "2026-07-13" }
  sources:
    - { id: cgv-home, kind: product-surface, url: "https://cgv.co.kr/", captured: "2026-07-13" }
    - { id: cgv-home-2, kind: product-surface, url: "https://cgv.co.kr/", captured: "2026-07-13" }
    - { id: cgv-home-3, kind: product-surface, url: "https://cgv.co.kr/", captured: "2026-07-13" }
    - { id: cgv-2024-report, kind: official-doc, url: "https://img.cgv.co.kr/company/sustainabilityStrategy/Report/2024/2024_CJCGV_SUSTAINABILITY_REPORT_kor.pdf", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.foreground": &home { surface_id: home, source_id: cgv-home, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.subtle": *home
    "tokens.colors.secondary": *home
    "tokens.colors.line": *home
    "tokens.colors.signal": *home
    "tokens.typography.family.sans": *home
    "tokens.typography.display.size": *home
    "tokens.typography.display.weight": *home
    "tokens.typography.display.lineHeight": *home
    "tokens.typography.display.tracking": *home
    "tokens.typography.display.use": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.tracking": *home
    "tokens.typography.body.use": *home
    "tokens.typography.label.size": *home
    "tokens.typography.label.weight": *home
    "tokens.typography.label.lineHeight": *home
    "tokens.typography.label.tracking": *home
    "tokens.typography.label.use": *home
    "tokens.spacing.dense": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.base": *home
    "tokens.spacing.lg": *home
    "tokens.rounded.badge": *home
    "tokens.rounded.media": *home
    "tokens.rounded.action": *home
    "tokens.rounded.chip": *home
    "tokens.shadow.flat": *home
    "tokens.components.category-chip.type": *home
    "tokens.components.category-chip.bg": *home
    "tokens.components.category-chip.fg": *home
    "tokens.components.category-chip.border": *home
    "tokens.components.category-chip.radius": *home
    "tokens.components.category-chip.padding": *home
    "tokens.components.category-chip.height": *home
    "tokens.components.category-chip.font": *home
    "tokens.components.category-chip.states": *home
    "tokens.components.category-chip.use": *home
    "tokens.components.outline-action.type": *home
    "tokens.components.outline-action.bg": *home
    "tokens.components.outline-action.fg": *home
    "tokens.components.outline-action.border": *home
    "tokens.components.outline-action.radius": *home
    "tokens.components.outline-action.padding": *home
    "tokens.components.outline-action.font": *home
    "tokens.components.outline-action.states": *home
    "tokens.components.outline-action.use": *home
    "tokens.components.screen-format-badge.type": *home
    "tokens.components.screen-format-badge.bg": *home
    "tokens.components.screen-format-badge.fg": *home
    "tokens.components.screen-format-badge.radius": *home
    "tokens.components.screen-format-badge.padding": *home
    "tokens.components.screen-format-badge.height": *home
    "tokens.components.screen-format-badge.font": *home
    "tokens.components.screen-format-badge.use": *home
    "tokens.components.menu-row.type": *home
    "tokens.components.menu-row.bg": *home
    "tokens.components.menu-row.fg": *home
    "tokens.components.menu-row.radius": *home
    "tokens.components.menu-row.height": *home
    "tokens.components.menu-row.font": *home
    "tokens.components.menu-row.use": *home
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Three supplied public CGV captures (coverage 81). Pretendard is loaded/high with 1,217 visible uses; interaction count is zero, so only default component values are promoted."
  colors:
    foreground: "#121212"
    canvas: "#ffffff"
    subtle: "#f4f4f4"
    secondary: "#454545"
    line: "#d9d9d9"
    signal: "#fc5555"
  typography:
    family: { sans: "Pretendard" }
    display: { size: 22, weight: 700, lineHeight: 1.4, tracking: -0.4, use: "Observed prominent body-role heading" }
    body: { size: 14, weight: 400, lineHeight: 1.4, tracking: -0.2, use: "Observed public-page body and input copy" }
    label: { size: 15, weight: 400, lineHeight: 1, tracking: -0.2, use: "Observed category-tab label" }
  spacing: { dense: 10, sm: 8, base: 16, lg: 24 }
  rounded: { badge: 4, media: 16, action: 20, chip: 25 }
  shadow:
    flat: "none"
  components_harvested: true
  components:
    category-chip: { type: button, bg: "#f4f4f4", fg: "#454545", border: "1px solid #f4f4f4", radius: "25px", padding: "0px 16px", height: "40px", font: "15px / 400 / Pretendard", states: "default observed at home::[data-omd-capture=\"36\"]; no hover, focus, pressed, disabled, or error state observed", use: "Public main-category tab" }
    outline-action: { type: button, bg: "#ffffff", fg: "#121212", border: "1px solid #d9d9d9", radius: "20px", padding: "9px 24px", font: "14px / 500 / Pretendard", states: "default observed at home::[data-omd-capture=\"128\"]; no hover, focus, pressed, disabled, or error state observed", use: "Rounded public movie-card action" }
    screen-format-badge: { type: badge, bg: "rgba(0, 0, 0, 0.55)", fg: "#121212", radius: "4px", padding: "0px 5px", height: "20px", font: "11px / 700 / Pretendard", use: "Movie-card screen-format marker" }
    menu-row: { type: listItem, bg: "transparent", fg: "#121212", radius: "0px", height: "40px", font: "10px / 400 / Pretendard", use: "Observed public navigation/menu row" }
---

# Design System Inspiration of CGV

## 1. Visual Theme & Atmosphere

CGV is Korea’s multiplex cinema brand and a consumer-facing service for finding films, choosing a theatre, and moving toward a viewing experience. Its recognizable expression pairs the practical density of a ticketing and programme surface with cinema-oriented moments: black `#121212` text and outlines, an open white `#ffffff` canvas, small screen-format labels, compact movie metadata, and rounded actions around discovery. That restrained public-web palette does not by itself establish a historical CGV logo or corporate colour system; it describes the supplied current surface only. CGV introduced the multiplex format in Korea with Gangbyeon in 1998 and has evolved its stated Cultureplex proposition beyond a conventional screening venue. Its 2024 sustainability report describes a rebranding campaign around “Deep Dive Space,” positioning the business around immersive experience, special formats, CGV-only content, and expanded space use.

The captured interface is crisp and utility-led rather than theatrical by default. Square list rows coexist with 4px format badges, 16px media corners, 20px outline actions, and 25px category chips. This reference keeps those role-specific geometries separate instead of inventing a universal radius or a red primary action from brand familiarity.

**Key Characteristics:**
- White `#ffffff` public canvas with near-black `#121212` information hierarchy
- Loaded Pretendard across the captured public surface
- `#f4f4f4` / `#454545` rounded category treatment and `#d9d9d9` outline actions
- Compact 10px, 14px, 15px, and 22px observed text roles
- Static evidence for buttons, badges, and a navigation row; no interaction state values

## 2. Color Palette & Roles

### Current public-surface colors

- **Foreground** (`#121212`): dominant captured text, border, and dark surface value.
- **Canvas** (`#ffffff`): repeated page and outlined-action surface.
- **Subtle control** (`#f4f4f4`): observed category-chip background and border.
- **Secondary text** (`#454545`): category-chip foreground.
- **Line** (`#d9d9d9`): observed rounded outline-action border.
- **Signal** (`#fc5555`): a low-frequency public text/border observation; it is preserved as a signal value, not promoted to a primary or state palette.

No verified current error, success, warning, hover, pressed, or focus palette was supplied. Those groups are omitted.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | No official CGV product typography specification was supplied or used for token promotion. |
| Live computed surface-use | `pretendard` is loaded/high with 1,217 visible uses across headings, body, buttons, cards, dialogs, inputs, list items, and badges in the supplied capture. |
| Official distributed brand asset | No CGV-exclusive distributed font asset was verified. |
| Declared-only | `Roboto` and `swiper-icons` appear in declarations or sources with zero visible text usage; neither is a UI family token. |
| Unresolved | Native-app, authenticated booking-flow, and special-format campaign typography are not resolved by this capture. |

### Font family

- **Current public UI family:** `Pretendard` followed by the observed system fallbacks.
- The supplied font evidence links nine CGV CDN Pretendard webfont sources and backs the computed family with a loaded FontFace.
- Pretendard’s own distribution is under the SIL Open Font License 1.1; that licence describes the font project, not a CGV-owned font asset.

### Observed hierarchy

| Role | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---:|---|
| Prominent heading | Pretendard | 22px | 700 | 30.8px | -0.4px | Observed prominent body-role heading |
| Public body | Pretendard | 14px | 400 | 19.6px | -0.2px | Body and input copy |
| Category label | Pretendard | 15px | 400 | 15px | -0.2px | Category-tab label |
| Screen marker | Pretendard | 11px | 700 | 19px | -0.2px | Movie-card format badge |

## 4. Component Stylings

### Current verified components

**Category Chip**
- Background: `#f4f4f4`
- Text: `#454545`
- Border: 1px solid `#f4f4f4`
- Radius: 25px
- Padding: 0px 16px
- Height: 40px
- Font: 15px / 400 / Pretendard
- States: Default only at `home::[data-omd-capture="36"]`; no hover, focus, pressed, disabled, or error state observed.
- Use: Public main-category tab

**Outline Action**
- Background: `#ffffff`
- Text: `#121212`
- Border: 1px solid `#d9d9d9`
- Radius: 20px
- Padding: 9px 24px
- Font: 14px / 500 / Pretendard
- States: Default only at `home::[data-omd-capture="128"]`; no hover, focus, pressed, disabled, or error state observed.
- Use: Rounded public movie-card action

**Screen Format Badge**
- Background: `rgba(0, 0, 0, 0.55)`
- Text: `#121212`
- Radius: 4px
- Padding: 0px 5px
- Height: 20px
- Font: 11px / 700 / Pretendard
- Use: Movie-card screen-format marker

**Menu Row**
- Background: transparent
- Text: `#121212`
- Radius: 0px
- Height: 40px
- Font: 10px / 400 / Pretendard
- Use: Observed public navigation/menu row

The capture contains 383 component variants over three supplied public surfaces. Only the selector-backed static variants above are canonical tokens; 0 interaction observations means no interactive states are inferred.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://cgv.co.kr/ · https://img.cgv.co.kr/company/sustainabilityStrategy/Report/2024/2024_CJCGV_SUSTAINABILITY_REPORT_kor.pdf
**Tier 2 sources:** https://getdesign.md/cgv (attempted; unavailable) · https://styles.refero.design/?q=cgv (attempted; unavailable)
**Conflicts unresolved:** none

## 5. Layout Principles

- Use white public surfaces and a near-black information hierarchy where the captured CGV pattern is relevant.
- Keep dense content roles compact: 10px metadata, 8/10/16/24px recurring spacing, and 40px category/menu controls where specifically observed.
- Treat rounded controls as role-specific: 25px category chip, 20px outline action, 16px media, and 4px badge.
- Do not generalize the supplied home capture into authenticated seat selection, payment, or theatre-operation layouts.

## 6. Iconography & Imagery

- Movie artwork and screen-format labels carry much of the public discovery context; the verified badge sits as a compact overlay.
- `swiper-icons` is declared-only and is not promoted as a CGV icon token.
- No CGV brand-icon grid, illustration style, or imagery treatment beyond these supplied public observations is specified here.

## 7. Do's and Don'ts

### Do

- Preserve a clear contrast hierarchy with `#121212` content on `#ffffff` surfaces.
- Use the verified rounded category and outline-action patterns only in their observed public roles.
- Keep screen-format metadata compact and subordinate to movie information.

### Don't

- Treat the low-frequency `#fc5555` observation as a universal CGV primary or error colour.
- Add hover, focus, pressed, disabled, or error component values from assumptions.
- Substitute Roboto, swiper-icons, or a system fallback as though it were the loaded Pretendard UI family.

## 8. Responsive Behavior

- The supplied evidence confirms public components across three capture surfaces but does not establish a responsive breakpoint system.
- Preserve the observed component values only where they remain appropriate; breakpoint, navigation collapse, and seat-map behavior are unresolved.

## 9. Accessibility Notes

- Maintain the observed high-contrast `#121212` / `#ffffff` reading hierarchy when applying these public patterns.
- The supplied capture has no focus or error-state observation; accessible focus treatment and form validation styling require separate verified evidence.
- Do not rely on screen-format badge colour alone to convey movie-format information.

## 10. Voice & Tone

The corporate material frames CGV around immersive, differentiated cultural experience; public UI copy should be direct, experience-oriented, and concise rather than overly cinematic.

| Voice quality | Use | Avoid |
|---|---|---|
| Clear | Name the film, theatre, format, and next action plainly. | Vague promotional instructions. |
| Immersive | Describe a confirmed format or space experience. | Promising an unverified sensory outcome. |
| Considerate | Give timing and booking information in compact language. | Hiding practical constraints behind campaign language. |

- “영화와 상영 시간을 선택하세요.” *(illustrative; no claim of current CGV copy)*
- “특별관 정보를 확인하세요.” *(illustrative; no claim of current CGV copy)*
- “예매 내용을 다시 확인하세요.” *(illustrative; no claim of current CGV copy)*

## 11. Brand Narrative

CGV opened Gangbyeon in 1998 as Korea’s first multiplex and later formed the CJ CGV corporate identity through the CJ Village / CJ Golden Village lineage. The official history describes a shift away from the single-screen cinema model toward a cultural space that connects film viewing with adjacent lifestyle experiences.

The current corporate narrative calls this direction Cultureplex: a comprehensive cultural and lifestyle space built around differentiated viewing environments, services, and content. In 2024 CGV documented a “Deep Dive Space” rebranding campaign, connecting special-format expansion, CGV-only content, and broader use of physical space to a more immersive experience.

This narrative is official brand context, not a substitute for UI evidence. The canonical tokens remain limited to the supplied public-web capture.

## 12. Principles

1. **Evolve beyond a screening transaction.** CGV’s official mission frames the brand as more than a film-viewing environment. *UI implication:* connect practical selection steps to confirmed format and venue context.
2. **Make differentiated experiences legible.** Special formats and content are part of the stated direction. *UI implication:* present verified format information as clear, compact metadata.
3. **Design for cultural use, not only attendance.** The Cultureplex proposition treats the venue as a broader cultural space. *UI implication:* avoid reducing supporting discovery content to decoration when it informs a real visit.
4. **Keep practical decisions clear.** A cinema service still needs reliable choices around title, time, location, and format. *UI implication:* preserve strong text hierarchy and explicit actions.

## 13. Personas

These are stakeholder groups stated or directly implied by first-party CGV materials, not fictional personas or synthetic research.

- **Moviegoers:** people choosing a film, a theatre, and a viewing format; the public experience should keep essential selection information clear.
- **Cultureplex visitors:** audiences using a cinema venue as a broader cultural and leisure destination, consistent with CGV’s stated Cultureplex direction.
- **Special-format audiences and partners:** people engaging with differentiated formats such as 4DX or ScreenX; format claims should remain accurate and specific.

## 14. States

No visual state system was captured. The following content requirements are not token values and must be designed only with separately verified visual evidence.

| Category | Requirement |
|---|---|
| Empty | Explain when no film, theatre, or schedule is available. |
| Loading | Preserve context while programme or booking data is pending. |
| Error — availability | State when a requested session is no longer available. |
| Error — network | State when current information could not be retrieved. |
| Success | Confirm the completed user action with the relevant context. |
| Skeleton | Reserve structure without asserting unmeasured geometry. |
| Disabled | Explain why a booking or selection action cannot proceed. |

## 15. Motion & Easing

No duration, easing, transition, or animated-state value is present in the supplied evidence. No motion token is prescribed for CGV in this reference.
