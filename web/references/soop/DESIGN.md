---
id: soop
name: "숲"
display_name_kr: "숲"
country: KR
category: consumer-tech
homepage: "https://www.sooplive.co.kr/"
primary_color: "#0182ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=sooplive.co.kr&sz=256"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-14"
  surfaces:
    - { id: home, kind: public-product-home, url: "https://www.sooplive.com/", inspected: "2026-07-13" }
    - { id: home-repeat, kind: duplicate-public-product-home, url: "https://www.sooplive.com/", inspected: "2026-07-13" }
    - { id: esports, kind: public-product-esports, url: "https://esports.sooplive.com/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.sooplive.com/", captured: "2026-07-13" }
    - { id: esports-live, kind: product-surface, url: "https://esports.sooplive.com/", captured: "2026-07-13" }
    - { id: brand-guide, kind: official-doc, url: "https://res.sooplive.com/policy/contents/brand_guide.html", captured: "2026-07-14" }
    - { id: creative-guide, kind: brand-asset, url: "https://static.file.sooplive.co.kr/da_guide_file/2024/10/24/SOOP_CreativeGuide.pdf", captured: "2026-07-14" }
    - { id: esg-overview, kind: official-doc, url: "https://corp.sooplive.com/esg/2024/index.php?page=overview", captured: "2026-07-14" }
    - { id: esg-user-feedback, kind: official-doc, url: "https://corp.sooplive.com/esg/2023/index.php?page=winwin", captured: "2026-07-14" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-14" }
  claims:
    "tokens.colors.primary": &homeComputed { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.colors.surface-subtle": *homeComputed
    "tokens.colors.foreground": *homeComputed
    "tokens.colors.muted": *homeComputed
    "tokens.colors.chip-surface": *homeComputed
    "tokens.typography.family.ui": { surface_id: home, source_id: home-live, method: computed-family-backed-by-loaded-font-face, captured: "2026-07-13" }
    "tokens.typography.body.size": *homeComputed
    "tokens.typography.body.weight": *homeComputed
    "tokens.typography.body.lineHeight": *homeComputed
    "tokens.typography.body.use": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.typography.list-title.size": *homeComputed
    "tokens.typography.list-title.weight": *homeComputed
    "tokens.typography.list-title.lineHeight": *homeComputed
    "tokens.typography.list-title.use": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.spacing.search-input-inline-start": *homeComputed
    "tokens.spacing.search-input-inline-end": *homeComputed
    "tokens.spacing.chip-inline": *homeComputed
    "tokens.rounded.search-input": *homeComputed
    "tokens.rounded.chip": *homeComputed
    "tokens.shadow.none": *homeComputed
    "tokens.components.home-search-input.type": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.components.home-search-input.bg": *homeComputed
    "tokens.components.home-search-input.fg": *homeComputed
    "tokens.components.home-search-input.radius": *homeComputed
    "tokens.components.home-search-input.padding": *homeComputed
    "tokens.components.home-search-input.height": *homeComputed
    "tokens.components.home-search-input.font": *homeComputed
    "tokens.components.home-search-input.states": { surface_id: home, source_id: home-live, method: no-interaction-recorded, captured: "2026-07-13" }
    "tokens.components.home-search-input.use": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
  conflicts: []
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only selector-backed public SOOP product-surface values are tokens. Corporate, brand-guide, advertising, esports, declared-only-font, and license evidence remain separate domains; no fallback or unobserved interaction value is promoted."
  colors:
    primary: "#0182ff"
    surface-subtle: "#f6f6f9"
    foreground: "#17191c"
    muted: "#757b8a"
    chip-surface: "#e8ebed"
  typography:
    family:
      ui: "Pretendard"
    body: { size: 14, weight: 400, lineHeight: "16.8px", use: "Repeated public-home text and the measured search input; the loaded product family is Pretendard." }
    list-title: { size: 15, weight: 400, lineHeight: "18px", use: "Observed public-home title and metadata samples only; no complete display scale is claimed." }
  spacing:
    search-input-inline-start: 16
    search-input-inline-end: 70
    chip-inline: 8
  rounded:
    search-input: 45
    chip: 30
  shadow:
    none: "none"
  components:
    home-search-input: { type: input, bg: "#f6f6f6", fg: "#525661", radius: "45px", padding: "0px 70px 0px 16px", height: "45px", font: "14px / 400 / 16.8px / Pretendard", states: "default only; interactionCount 0 and no hover, focus, pressed, disabled, or error value was retained", use: "Repeated public-home input, selectors home::[data-omd-capture=\"2\"] and surface-2::[data-omd-capture=\"2\"]." }
  components_harvested: true
---

# 숲 — Design Reference

## 1. Visual Theme & Atmosphere

SOOP is a Korean live-streaming and creator platform whose public ecosystem brings live channels, community discovery, esports, and developer-linked services under one service name. The company changed its name from AfreecaTV to SOOP in 2024, and its official ESG material describes the current direction as an AI- and data-connected global platform, including a global-service launch and overseas operating hubs. On the captured public routes, that platform breadth resolves into a compact, feed-oriented interface: charcoal and blue sit beside pale gray discovery surfaces, with small rounded topic chips, a prominent pill search field, and dense creator/content rows. The visual impression is operational rather than editorial—an environment for finding a broadcast, a category, or an esports context quickly. This reference keeps that public product expression distinct from corporate identity material, advertising specifications, and any authenticated broadcaster or viewer flow.

**Key characteristics:**

- `#0182ff` is a selector-backed public blue accent; it is visible as a local link/underline/action treatment, not a universal filled CTA.
- `#f6f6f9` and `#e8ebed` form repeated pale discovery and chip surfaces, with `#17191c` and `#757b8a` supplying the public text hierarchy.
- The measured home search control is 45px high with a 45px radius; nearby topic chips use a 30px radius.
- The supplied bundle includes three snapshots, but the first two are the same SOOP home URL. It records no interaction transitions.

## 2. Color Palette & Roles

### Selector-backed public product colours

- **Public Blue** (`#0182ff`): observed on public-home anchor `home::[data-omd-capture="4"]` and on esports link/underline samples. It is a local public accent, not a general primary-button fill.
- **Subtle Discovery Surface** (`#f6f6f9`): repeated on public-home content-link/card samples such as `home::[data-omd-capture="30"]`.
- **Foreground** (`#17191c`): repeated public-home title and metadata text, including `home::p` samples.
- **Muted** (`#757b8a`): repeated small chip/metadata text, including the public-home chip samples.
- **Chip Surface** (`#e8ebed`): observed behind public-home 20px topic-chip samples such as `home::[data-omd-capture="57"]`.

### Brand and marketing boundary

SOOP’s official brand guide treats the name, marks, BI, and CI as protected company assets, and its advertising creative guide specifies creative-copy treatments. Those documents establish brand-use and advertising context, not computed product UI tokens. The catalog `primary_color` and the public-blue token therefore retain only the captured `#0182ff` evidence; no brand-guide image colour, advertising colour, or esports-only variation is substituted into the home product system.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No inspected first-party statement establishes a proprietary SOOP product type family. The official advertising creative guide uses Pretendard for specified ad-copy examples, which is advertising guidance rather than a declaration of every product route. |
| Live computed surface-use | Pretendard is loaded with high confidence, has 1,401 visible uses across body, button, heading, input, list-item, and text roles, and is backed by SOOP-hosted FontFace URLs. It is the only promoted UI-family token. |
| Official distributed brand asset | No official distributed SOOP brand font asset was established in the reviewed sources. |
| Declared-only | FOUREYES, Gmarket, Noto Sans, NotoSansThai, SSFlowerRoadRegular, and swiper-icons have declared font faces but no visible captured usage. They are not UI-family tokens. |
| License | Pretendard’s upstream repository publishes the SIL Open Font License 1.1. That licence confirms the upstream font asset, not an additional SOOP-specific licence grant. |

### Captured hierarchy

| Role | Family | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public body and search | Pretendard | 14px | 400 | 16.8px | repeated public-home text and measured home search input |
| Public list title / metadata | Pretendard | 15px | 400 | 18px | observed public-home title and metadata samples only |

Do not label any declared-only face as a loaded SOOP UI family. Conversely, do not replace the loaded Pretendard token with a system fallback while presenting it as product typography.

## 4. Component Stylings

### Public-home search

**Search Input**
- Background: `#f6f6f6`
- Text: `#525661`
- Radius: 45px
- Padding: 0px 70px 0px 16px
- Height: 45px
- Font: 14px / 400 / 16.8px / Pretendard
- States: Default only. The supplied bundle records `interactionCount: 0`; no hover, focus, pressed, disabled, or error value is retained.
- Use: Repeated public-home input `home::[data-omd-capture="2"]` and `surface-2::[data-omd-capture="2"]`.

The detector records 54 component variants across the supplied snapshots, but only this repeated, selector-backed input is promoted. It preserves measured default geometry without recasting link rows as buttons or creating a generic card, badge, menu, dialog, toast, toggle, tab, or authentication component. `interactionKinds: 0` and `interactionCount: 0` remove only unobserved interactive states; they do not remove this default input measurement.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.sooplive.com/ ; https://esports.sooplive.com/ ; https://res.sooplive.com/policy/contents/brand_guide.html ; https://static.file.sooplive.co.kr/da_guide_file/2024/10/24/SOOP_CreativeGuide.pdf ; https://corp.sooplive.com/esg/2024/index.php?page=overview ; https://corp.sooplive.com/esg/2023/index.php?page=winwin
**Tier 2 sources:** https://getdesign.md/soop and https://styles.refero.design/?q=soop were both attempted on 2026-07-14. Built-in retrieval returned internal errors for both paths, so neither supplied a competing token or component claim.
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied public snapshots are `1440×900`. Their evidence supports a compact horizontal search area, dense content-list discovery, pale content panels, and 20px-high pill-like topic chips. It does not establish a page grid, breakpoint system, mobile layout, authenticated viewer layout, broadcaster studio, or a reusable card inventory. The duplicate home snapshot corroborates values but is not a separate route or responsive state.

## 6. Depth & Elevation

The promoted search input has `box-shadow: none`, and the static product samples do not establish a reusable elevation scale. Pale fill, text hierarchy, and radius—not shadow—are the only measured separation cues retained here. Esports controls with darker fills remain a separate surface and are not converted into a global SOOP depth rule.

## 7. Do's and Don'ts

### Do

- Preserve the loaded Pretendard family and the measured 14px/400 public-input hierarchy when recreating the documented sibling.
- Use `#0182ff` only as the documented local public accent, with pale `#f6f6f9` / `#e8ebed` discovery surfaces and clear charcoal text hierarchy.
- Keep the search input’s 45px pill geometry separate from the 30px topic-chip geometry.
- Treat creator, community, esports, corporate, advertising, and developer surfaces as distinct evidence domains.

### Don't

- Don't turn a blue text/underline sample into a universal blue filled CTA, error, success, or selected-state colour.
- Don't substitute FOUREYES, Gmarket, Noto Sans, NotoSansThai, SSFlowerRoadRegular, or a system fallback for loaded Pretendard.
- Don't convert the detected links and list rows into a button taxonomy without button semantics in the supplied evidence.
- Don't invent hover, focus, pressed, disabled, validation, modal, toast, or motion values from this zero-interaction capture.

## 8. Accessibility & Content

The evidence supports compact 12–15px public text roles and a 45px search-control height, but it does not provide keyboard traversal, focus styling, contrast-ratio results, live-region behaviour, validation messaging, or screen-reader labels. Reuse meaningful visible labels and retain the measured text hierarchy where the documented input is recreated; do not claim a SOOP accessibility standard or WCAG conformance from static computed styles alone.

## 9. Reference Scope & Evidence

This reference uses `artifacts/reference-evidence/soop.json` as the only raw computed-style, font, component, and interaction evidence. It contains public SOOP home, a duplicate SOOP home snapshot, and public SOOP esports. First-party brand, advertising, company/ESG, and upstream font-license sources supply narrative context only. getdesign and Refero were both attempted but returned internal retrieval errors, so no Tier 2 number, component, or historical interpretation is promoted. Raw proof, the conflict matrix, source boundaries, and confidence ledger are retained in `.verification.md` and `_research.md`.

## 10. Voice & Tone

First-party SOOP materials frame the service around user-led media, feedback-informed improvement, creator participation, and global expansion. The advertising creative guide uses concise hierarchy for its example copy; the following are application guidance, not extracted product strings.

| Do | Don't |
|---|---|
| Lead with the live content, community, or action a person can take now. | Bury the next useful action under abstract platform language. |
| Keep labels compact enough for dense discovery contexts. | Treat a promotional slogan as a substitute for a stream, category, or creator label. |
| Describe change or policy clearly when it affects creators or viewers. | Imply platform endorsement, partnership, or an official viewpoint without evidence. |

Illustrative, not extracted product copy:

- “지금 보고 싶은 방송을 찾아보세요.” *(illustrative; discovery-first)*
- “관심 있는 카테고리의 라이브를 확인하세요.” *(illustrative; compact action)*
- “변경된 안내와 다음 단계를 함께 확인하세요.” *(illustrative; clear service communication)*

## 11. Brand Narrative

SOOP’s corporate name changed from AfreecaTV Co., Ltd. to SOOP Co., Ltd. in March 2024, according to the company’s statutory name-change disclosure. The current official brand guide identifies SOOP as both the company’s representative service name and a company trademark. That continuity matters: the new name is not treated here as a detached campaign asset, but as the shared public identity around a long-running live-streaming service and its creator ecosystem.

The company’s 2024 ESG overview describes a transition toward an AI- and data-connected global platform. It records the launch of SOOP’s global service and operating bases across the United States, Thailand, Hong Kong, and Vietnam as part of a global-brand direction. The product capture reflects only the public Korean SOOP home and esports routes; it does not establish parity across regions or authenticated experience.

SOOP’s public ESG material also describes a platform in which streamers produce live and VOD content, build fan communities, and receive direct support through platform mechanisms. Its user-satisfaction material says service improvement combines company-level change with feedback incorporated from planning. These statements give useful ecosystem and evolution context, but they do not create a token, component, or user-flow claim beyond the supplied surfaces.

## 12. Principles

1. **Users participate in the media.** SOOP’s ESG material describes a user-led media vision and a creator/viewer ecosystem.
   *UI implication:* make the content, community, and current action legible before secondary promotion.
2. **Feedback is an input to improvement.** The company says it combines top-down service improvement with feedback reflected from the planning stage.
   *UI implication:* distinguish an explanation, a choice, and a confirmation so feedback-sensitive changes are understandable.
3. **Creator ecosystems are part of the product context.** SOOP describes streamers creating live/VOD content and operating fan communities.
   *UI implication:* do not flatten creator identity, content status, and community metadata into one indistinguishable label.
4. **Global expansion is operational, not merely cosmetic.** The 2024 overview links global service and overseas bases to platform development.
   *UI implication:* do not use a local public-web sample as evidence for all regions, languages, or roles.

## 13. Personas

These are stakeholder categories supported by first-party SOOP materials, not synthetic personas, satisfaction scores, or behavioural research findings.

### Viewer and community participant

The public product and ESG materials describe people discovering and participating around live and VOD content. The packet does not establish a viewer’s signed-in task flow, device preference, or accessibility needs.

### Streamer / content creator

SOOP’s ESG material describes streamers producing content, operating fan communities, and receiving direct support through platform mechanisms. No broadcaster studio, earning, or moderation control is captured here.

### Developer or integration partner

The official developer service provides platform and service APIs plus an extension-program market. This confirms a platform stakeholder group, not a design system or an extension UI pattern for the captured consumer routes.

## 14. States

No product-state specification is inferred. The table records the smallest useful boundary for future source-backed additions without creating values or copy.

| Category | Captured evidence boundary |
|---|---|
| Empty | No empty state captured. |
| Loading | No loading state captured. |
| Error — validation | No validation-error state captured. |
| Error — service/system | No service or system-error state captured. |
| Success | No success or confirmation state captured. |
| Skeleton | No skeleton state captured. |
| Disabled | No disabled state captured. |
| Focus | No focus state or transition captured. |
| Hover | No hover state or transition captured. |
| Pressed | No pressed state or transition captured. |

## 15. Motion & Easing

The supplied bundle records `interactionKinds: 0` and `interactionCount: 0`. It establishes no duration, easing curve, transition, animation, carousel movement, or reduced-motion contract. Motion tokens are therefore absent; add them only from a source-specific observed interaction or official specification.
