---
id: megabox
name: MEGABOX
display_name_kr: 메가박스
country: KR
category: consumer-tech
homepage: "https://www.megabox.co.kr/"
primary_color: "#503396"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=megabox.co.kr&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-product-web, url: "https://www.megabox.co.kr/", inspected: "2026-07-13" }
    - { id: surface-2, kind: public-product-web, url: "https://www.megabox.co.kr/movie", inspected: "2026-07-13" }
    - { id: surface-3, kind: public-product-web, url: "https://www.megabox.co.kr/booking", inspected: "2026-07-13" }
  sources:
    - { id: product-home, kind: product-surface, url: "https://www.megabox.co.kr/", captured: "2026-07-13" }
    - { id: product-movie, kind: product-surface, url: "https://www.megabox.co.kr/movie", captured: "2026-07-13" }
    - { id: product-booking, kind: product-surface, url: "https://www.megabox.co.kr/booking", captured: "2026-07-13" }
    - { id: company-introduction, kind: official-doc, url: "https://www.megabox.co.kr/megaboxinfo/", captured: "2026-07-13" }
    - { id: recruiting, kind: official-doc, url: "https://www.megabox.co.kr/recruit", captured: "2026-07-13" }
    - { id: nanum-webfont-asset, kind: brand-asset, url: "https://img.megabox.co.kr/static/pc/font/nanum/NanumBarunGothicSubset.woff", captured: "2026-07-13" }
    - { id: naver-nanum-catalog, kind: brand-asset, url: "https://hangeul.naver.com/fonts/search?f=nanum", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.muted": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.on-primary": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.family.ui": { surface_id: home, source_id: product-home, method: computed-style-and-FontFaceSet, captured: "2026-07-13" }
    "tokens.typography.body.size": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.weight": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.lineHeight": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.use": { surface_id: home, source_id: product-home, method: selector-provenance, captured: "2026-07-13" }
    "tokens.typography.section-title.size": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.section-title.weight": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.section-title.lineHeight": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.section-title.tracking": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.section-title.use": { surface_id: surface-2, source_id: product-movie, method: selector-provenance, captured: "2026-07-13" }
    "tokens.spacing.like-button-inline": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.search-input-inline": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.rounded.compact-control": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.rounded.theater-lookup": { surface_id: home, source_id: product-home, method: computed-style, captured: "2026-07-13" }
    "tokens.shadow.none": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.components.movie-like-button.type": { surface_id: surface-2, source_id: product-movie, method: selector-provenance, captured: "2026-07-13" }
    "tokens.components.movie-like-button.bg": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.components.movie-like-button.text": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.components.movie-like-button.border": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.components.movie-like-button.radius": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.components.movie-like-button.padding": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.components.movie-like-button.height": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.components.movie-like-button.font": { surface_id: surface-2, source_id: product-movie, method: computed-style, captured: "2026-07-13" }
    "tokens.components.movie-like-button.states": { surface_id: surface-2, source_id: product-movie, method: static-selector-and-interaction-summary, captured: "2026-07-13" }
    "tokens.components.movie-like-button.use": { surface_id: surface-2, source_id: product-movie, method: selector-provenance, captured: "2026-07-13" }
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Machine tokens are limited to selector-backed public-web values in the supplied three-surface capture. Company, font-asset, and licence sources provide narrative or asset context only unless a claim explicitly cites a product surface."
  colors:
    primary: "#503396"
    canvas: "#ffffff"
    foreground: "#444444"
    muted: "#666666"
    on-primary: "#ffffff"
  typography:
    family: { ui: "NanumBarunGothic" }
    body: { size: 15, weight: 400, lineHeight: "22.5px", use: "Observed on the supplied public home, movie, and booking routes; no native or authenticated-app scope is claimed." }
    section-title: { size: 27.999, weight: 400, lineHeight: "30.7989px", tracking: "-1px", use: "Observed only on the supplied public movie-route h2." }
  spacing:
    like-button-inline: 5
    search-input-inline: 10
  rounded:
    compact-control: 4
    theater-lookup: 30
  shadow:
    none: "none"
  components_harvested: true
  components:
    movie-like-button: { type: button, bg: "#ffffff", text: "#503396", border: "1px solid #ebebeb", radius: "4px", padding: "0px 5px", height: "36px", font: "13.0005px / 400 / NanumBarunGothic", states: "Default enabled button observed; the supplied bundle records no hover, focus, pressed, error, or interaction-expanded state for this control.", use: "Movie route list action at surface-2::[data-omd-capture=\"29\"]." }
---

# 메가박스 — Design Reference

## 1. Visual Theme & Atmosphere

메가박스는 영화 상영을 중심에 두면서도 사람들이 이야기를 만나고, 함께 놀고, 경험을 공유하는 공간을 표방하는 한국의 멀티플렉스 브랜드다. 회사의 공식 연혁은 2000년 코엑스점을 출발점으로 삼고, 2011년 씨너스와의 합병을 거쳐 더 좋은 영화관을 향한 확장을 설명한다. 현재의 브랜드 표현은 2017년에 공개한 Life Theater BI에서 분명해진다. 일곱 개의 황금비율 박스와 보라 계열 인디고는 공간과 창의적 콘텐츠를 연결하는 공식 설명이다. 반면 공급된 공개 웹 캡처는 그 이야기를 좁은 범위에서만 구현한다. `#444444`의 실무적 본문, 흰 바탕, 영화 목록의 보라 액션과 얇은 회색 경계가 공존하며, 이것은 세 개의 데스크톱 공개 웹 경로에 대한 관찰이지 극장 현장, 모바일 앱, 로그인 후 예매 경험의 일반 규칙은 아니다.

**Key characteristics:**

- 공식 BI의 보라 계열 인디고 맥락과, 영화 목록에서 관찰된 `#503396` 액션
- `#444444` 본문 잉크와 `#666666` 보조 텍스트의 조용한 정보 밀도
- 네모난 4px 목록 제어와 30px 극장 찾기 칩이 함께 쓰이는 서로 다른 밀도의 형태
- 반복 로드된 NanumBarunGothic 기반의 공개 웹 타이포그래피

## 2. Layout & Grid

- 공급된 캡처는 home, `/movie`, `/booking`의 `1440×900` 데스크톱 뷰포트 세 개다.
- 영화 목록에는 `230px × 450px`의 목록 항목이 관찰되지만, 열 수·거터·반응형 전환 규칙은 확인되지 않았다.
- home의 영화 정보 링크는 `245px × 352px`로 기록되었으며, 카드 그리드나 이미지 비율 토큰으로 승격하지 않았다.
- 로그인, 좌석 선택, 결제, 모바일 및 접근성 보조 흐름은 이 범위에 포함되지 않는다.

## 3. Color & Typography

### Color tokens

- `#503396` — `/movie`의 보라 예약 링크와 영화 목록 좋아요 버튼 텍스트에서 관찰된 색. 공식 회사 소개가 설명하는 보라 계열 인디고와 같은 맥락이지만, 공개 웹 전체의 단일 CTA 규칙으로 일반화하지 않는다.
- `#FFFFFF` — 영화 목록 항목과 좋아요 버튼의 관찰된 흰 배경, 보라 예약 링크의 텍스트.
- `#444444` — 세 공개 경로에 걸쳐 반복 관찰된 본문 잉크.
- `#666666` — 극장 찾기 제어 및 일부 보조 텍스트에 관찰된 보조 잉크.

### Typography evidence classes

- **Live computed surface-use:** NanumBarunGothic은 세 공개 웹 경로에서 439회 관찰되었고, 8개의 Megabox-hosted WOFF/EOT/TTF 소스와 함께 `loaded`/high confidence로 기록됐다. 따라서 유일한 `tokens.typography.family.ui`로 남긴다.
- **Official distributed asset:** 공급된 번들은 Megabox 정적 폰트 경로에서 NanumBarunGothic subset을 로드한다. 네이버의 공식 글꼴 목록도 나눔바른고딕과 Ultra Light·Light·Regular·Bold 굵기를 별도로 안내한다. 이 배포 맥락은 폰트 자산의 정체를 보강할 뿐, Megabox UI 사용의 증거는 아니며 그 사용은 위의 computed/FontFaceSet 기록으로만 확정한다.
- **System:** Roboto는 25회 관찰됐지만 collector가 operating-system stack으로 분류했다. Megabox 브랜드 글꼴이나 NanumBarunGothic의 대체재로 다루지 않는다.
- **Declared-only:** text-security-disc는 `@font-face`가 선언됐으나 가시 사용은 0회다. 토큰이나 표본 폰트로 승격하지 않는다.

| Role | Size | Weight | Line height | Boundary |
|---|---:|---:|---:|---|
| Public-web body | 15px | 400 | 22.5px | Supplied home/movie/booking routes; NanumBarunGothic loaded |
| Movie section title | 27.999px | 400 | 30.7989px | `/movie` h2 only; -1px tracking |

## 4. Components

### Movie list action

**Default**
- Background: `#FFFFFF`
- Text: `#503396`
- Border: `1px solid #EBEBEB`
- Radius: `4px`
- Padding: `0px 5px`
- Height: `36px`
- Font: `13.0005px / 400 / NanumBarunGothic`
- States: Default enabled control observed. The supplied bundle has zero interaction records, so no hover, focus, pressed, or error styling is claimed.
- Use: Actual `button` element at `surface-2::[data-omd-capture="29"]` on the public movie route.

The public movie route also contains a 36px-high purple reservation **link** (`a.button.purple.bokdBtn`) and the home includes a disabled carousel-arrow button. The former is not promoted as a button token because the supplied selector does not evidence button semantics; the latter documents only a static disabled element, not a transition or reusable disabled style. Their measured defaults remain in the proof record rather than being erased.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.megabox.co.kr/` (public product home), `https://www.megabox.co.kr/movie` (public movie product surface), `https://www.megabox.co.kr/booking` (public booking product surface), `https://www.megabox.co.kr/megaboxinfo/` (official company, BI, history, mission, and values), `https://www.megabox.co.kr/recruit` (official culture and stakeholder context), `https://img.megabox.co.kr/static/pc/font/nanum/NanumBarunGothicSubset.woff` (first-party-hosted font asset), `https://hangeul.naver.com/fonts/search?f=nanum` (official Nanum font catalogue)
**Tier 2 sources:** `https://getdesign.md/megabox` (attempted; built-in web open returned Internal Error), `https://styles.refero.design/?q=megabox` (attempted; built-in web open returned Internal Error); built-in search returned no Megabox-specific record on either catalog
**Conflicts unresolved:** none

## 5. Elevation

The selector-backed movie-list action has `box-shadow: none`. The supplied three-route capture does not establish a repeatable shadow scale, so only the explicit `none` value is tokenized.

## 6. Spacing & Shape

The most useful measured inline values are `5px` on the movie-list action and `10px` on a movie-route search input. They are retained as route-local spacing observations, not a global scale. Compact movie controls use 4px corners, while the home theater lookup link has a 30px radius; zero-radius text and navigation elements are also common. The capture does not justify a single universal corner rule.

## 7. Iconography & Imagery

The supplied routes use film imagery, poster-led movie listings, header utility controls, and carousel affordances. No named icon library, stroke width, asset aspect-ratio rule, or reusable media-card contract is established by the evidence.

### Do

- Keep the official purple/indigo brand story separate from the narrower selector-backed public-web color claims.
- Preserve the distinction between an observed HTML button and visually button-like links whose semantics were not captured.
- Use the loaded NanumBarunGothic family where the public-web scope is relevant; label unsupported contexts instead of substituting another font as Megabox typography.

### Don't

- Convert poster links, booking links, or rows into generic buttons without evidence of button semantics.
- Infer hover, focus, pressed, dialog, seat-selection, payment, or responsive states from default geometry.
- Treat Roboto or text-security-disc as a Megabox brand-family replacement.

## 8. Accessibility

- The promoted movie-list action uses `#503396` text on `#FFFFFF` with a 1px `#EBEBEB` border. This record does not certify contrast or focus compliance.
- A disabled carousel arrow is present in the supplied home snapshot, but its icon-like zero-size text treatment is not a reusable disabled-control pattern.
- No keyboard, focus-visible, error, modal, or assistive-technology behavior was captured. Implementations need explicit accessible states rather than extrapolating them from the observed defaults.

## 9. Content & Voice

Megabox’s official language is social and experiential: it frames the brand as a place to meet, play, and share, and as a provider of meaningful cultural experiences. Its company statement joins that hospitality with content and space, while its core values name empathy, creation, and fun. Public product copy can take this as an editorial direction—clear, welcoming, and activity-oriented—without claiming a measured UI copy system or reproducing slogans as generic labels.

## 10. Voice & Tone

- **Welcoming:** acknowledge the shared occasion around a film or venue.
- **Culturally curious:** leave room for discovery and new content.
- **Plainly helpful:** make operational choice and next steps easy to understand.

| Do | Don't |
|---|---|
| Use concise, hospitable guidance for a public cinema visit. | Turn every operational label into a brand slogan. |
| Connect content with a shared place or occasion when context warrants it. | Claim a particular seat, payment, or membership behavior was verified. |
| Keep selection language direct on dense movie lists. | Invent an observed conversational style for logged-in flows. |

Illustrative, not captured UI copy: “상영 시간 확인하기”, “함께 볼 영화 찾아보기”, “가까운 극장 보기”. These samples are editorial illustrations, not quotes or evidence of production microcopy.

## 11. Brand Narrative

Megabox’s official company history places its public origin at the 2000 opening of its COEX site, followed by the 2011 Megabox–Cinus merger. The company describes that history as an effort to keep building a better cinema while carrying forward novelty and diversity in a shared entertainment space.

In 2017, the official introduction says the brand introduced a new BI and the Life Theater slogan. Its seven golden-ratio boxes, English Megabox type treatment, and purple-indigo expression are presented as a more flexible, extensible identity for spaces filled with creative content. That is the documented evolution used here; no later rebrand or unverified visual-system claim is added.

The stated mission is to create shareable spatial experiences and to deliver happy everyday life through valuable content and varied space-based experiences. This is company narrative, not proof of any product CSS value or booking-flow behavior.

## 12. Principles

1. **Empathy / 공감** — understand and consider people.
   *UI implication:* Make public information legible before adding promotional density; no focus or error treatment is implied by this principle.
2. **Creation / 창조** — approach everyday life with challenge and passion.
   *UI implication:* Use content discovery as a reason for visual variety, while keeping unsupported component variants absent.
3. **Fun / 재미** — let the experience itself feel enjoyable.
   *UI implication:* Keep cinema discovery inviting without converting the company value into a measured animation or color rule.

## 13. Personas

These are stakeholder groups stated or directly implied by Megabox’s official service and mission material, not synthetic research personas.

- **Cinema visitor:** a person using the public service to discover films, theaters, showtimes, and related benefits. The supplied capture supports only public-web browsing context, not their booked or logged-in journey.
- **Member:** a service participant for whom Megabox describes membership, points, tickets, and benefits. No member dashboard or benefit-control styling was captured here.
- **Employee or candidate:** a stakeholder addressed through the official recruiting material’s customer orientation, challenge, and communication values. This is culture context, not product-interface evidence.

## 14. States

The supplied evidence records `interactionCount: 0` and no interaction kinds. It includes one static disabled carousel-arrow element, but no observable empty, loading, error, success, skeleton, focus, pressed, or transition treatment. No state tokens or fabricated state specifications are supplied.

## 15. Motion & Easing

No duration, easing, animation, carousel transition, or reduced-motion value is recorded in the supplied evidence. Motion rules are intentionally omitted rather than inferred from the presence of a carousel control.
