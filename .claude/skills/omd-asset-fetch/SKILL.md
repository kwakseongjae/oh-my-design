---
name: omd:asset-fetch
description: "사용자 product UI 생성 시 placeholder 자리를 generic SVG가 아닌 **실제 free-license CDN 자산**으로 채운다. 로고·일러스트·아이콘·사진·폰트·패턴 카탈로그를 verified URL만으로 운영. '에셋 가져와줘', '플레이스홀더 진짜 이미지로', '로고 자리 채워줘', 'unsplash에서 사진 가져와' 류 요청에 트리거. omd:apply / omd:harness 안에서 자동 호출됨."
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# omd:asset-fetch — Free-license Asset Catalog

## 왜 이 스킬

"초안 같음" 결과물의 90%는 **placeholder가 너무 generic**이라서 — `[YOUR LOGO]` 점선 박스, organic blob SVG, "image placeholder" 회색 사각형. 사용자가 "와우" 못 느낌.

이 스킬은 **모든 placeholder 자리에 verified free-license CDN 자산**을 박는 catalog. URL은 전부 200 OK 검증됨 (2026-05-14 기준).

## 핵심 원칙

1. **검증된 URL만**. 이 catalog에 없으면 generator가 임의로 만들지 말 것.
2. **모든 자산은 commercial-use 허용** — 사용자 product에 ship 가능.
3. **출처는 `assets/attribution.md`에 의무 기록** — URL + license + 사용 위치 + fetch 일자.
4. **deterministic seeding 권장** — `seed` 또는 `lock` 파라미터로 결과 재현 가능. 매번 다른 이미지 나오는 random URL은 피할 것.
5. **금지**: handcraft inline SVG로 placeholder를 "그려서" 채우기. catalog 자산 fetch 실패 시 → brand-color CSS gradient placeholder (이전 v1.3.4 fallback 정책과 동일).

## Catalog (verified 2026-05-14)

### 1. LOGO — product name **워드마크만** (v1.3.7부터)

별도 icon / shapes mark / DiceBear logo 합성 **금지**. 헤더 logo = product name 텍스트 + 디스플레이 폰트, 그게 전부.

**왜**: AI가 합성한 icon mark는 "generic"하게 보임 (사용자 frustration source). product 이름을 **꽤 괜찮은 폰트로** 그대로 박는 게 진짜 brand wordmark처럼 보이고 사용자가 1초만에 자기 product name으로 swap 가능.

**패턴**:
```html
<a class="logo" href="/" style="display:inline-flex;align-items:center;text-decoration:none;">
  <span class="logo-wordmark">{{PRODUCT_NAME}}</span>
</a>
<style>
  .logo-wordmark{
    font-family:"Bricolage Grotesque","Space Grotesk","DM Serif Display","Fraunces",-apple-system,sans-serif;
    font-size:22px;font-weight:700;letter-spacing:-0.04em;
    color:var(--color-text-heading);
  }
</style>
```

`<head>`에 디스플레이 폰트 `<link>` 의무 (§6 참고).

**brand vibe별 폰트 매칭**:
- cool / minimal / fintech serious → **Space Grotesk** 700 (geometric)
- warm / playful / community → **Bricolage Grotesque** 700 (friendly variable)
- editorial / luxury → **DM Serif Display** 또는 **Fraunces** (display serif)
- bold / display → **Bricolage Grotesque** 800

**`{{PRODUCT_NAME}}` 결정**:
1. 사용자 prompt에 명시 product name 있으면 그대로 사용
2. 없으면 brand vibe 맞는 generic placeholder 1개 선택 (omd-harness rule 5 §placeholder 표 참고: `Folio`, `Mint`, `Pop`, `Spark`, `Townie`, `Lane`, `Compass`, ...)
3. 선택된 이름은 `<title>`, hero copy, footer brand 자리 전부 **일관 적용** (사용자 grep replace 1번이면 swap 끝)

**금지 패턴 (v1.3.6 회귀 방지)**:
- ❌ DiceBear `shapes` mark + wordmark 페어 — generic "AI 로고" 느낌
- ❌ DiceBear `initials` 이니셜 chip — 이메일 아바타 같이 보임
- ❌ 직접 그린 inline `<svg>` logo icon — 손그림 anatomy 회귀
- ❌ `[YOUR LOGO]` / `[YOUR PRODUCT NAME]` 텍스트가 점선 박스 안에 그대로 — placeholder 티 폭발

### 2. HERO 일러스트레이션 / 캐릭터

**DiceBear avatars** (CC0) — v1.3.4부터 이미 사용 중. 5 스타일:

| style | use case | URL pattern |
|---|---|---|
| `notionists` | financial advisor, business persona | `https://api.dicebear.com/9.x/notionists/svg?seed=<seed>&size=520` |
| `lorelei` | warm, approachable | `https://api.dicebear.com/9.x/lorelei/svg?seed=<seed>&size=520` |
| `personas` | diverse persona | `https://api.dicebear.com/9.x/personas/svg?seed=<seed>&size=520` |
| `adventurer` | active, mobility | `https://api.dicebear.com/9.x/adventurer/svg?seed=<seed>&size=520` |
| `fun-emoji` | warm, casual commerce | `https://api.dicebear.com/9.x/fun-emoji/svg?seed=<seed>&size=520` |

생성기는 brand의 voice register 또는 surface signal에 맞춰 style 선택 — 예: 핀테크 advisor → `notionists`, 커뮤니티 커머스 → `lorelei` 또는 `fun-emoji`.

**금지** (v1.3.4부터 누적, 자주 어겨지므로 재명시):
- handcraft inline SVG 캐릭터 — 손그림 stick figure 합성 절대 금지
- 캐릭터 일러스트를 우리 generator가 직접 inline `<path>`로 그리지 말 것
- CDN fetch 후 다운로드한 파일 첫 부분에 `<!-- dicebear-fetched: <full URL> | <ISO> -->` 코멘트 박을 것 — 후속 audit gate가 검증

### 3. ICONS — feature 카드, nav, product 카테고리

**Lucide** (ISC) — 한 줄 1500+ 아이콘
- URL: `https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/<name>.svg`
- 예시: `credit-card`, `home`, `landmark`, `shield-check`, `trending-up`, `book-open`, `map-pin`, `bell`, `heart`, `search`, `user`, `chevron-right`, `arrow-right`, `external-link`, `play`, `bar-chart-3`

**Heroicons** (MIT)
- URL: `https://cdn.jsdelivr.net/npm/heroicons@2/24/outline/<name>.svg`
- outline + solid family

**Tabler Icons** (MIT)
- URL: `https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/<name>.svg`

색상 적용: SVG inline 후 `currentColor` / `stroke="..."` 변경, 또는 CSS filter

### 4. PHOTOS — product 카드, hero 배경, testimonial 아바타

**Lorem Picsum** (CC0 — Unsplash-derived rehosting)
- random photo: `https://picsum.photos/<w>/<h>` (매 호출 다름)
- **deterministic** (권장): `https://picsum.photos/seed/<seed>/<w>/<h>`
  - seed는 `<brand>-product-01`, `<brand>-hero-01` 식으로 의미 부여
- grayscale: `?grayscale`
- blur: `?blur=2`
- 예: `https://picsum.photos/seed/musinsa-card-1/400/500` → musinsa product 카드 자리에 들어갈 결정적 이미지

**Loremflickr** (Flickr CC) — 키워드 매칭 + deterministic
- URL: `https://loremflickr.com/<w>/<h>/<keyword>/all?lock=<n>`
- 한국 컨텍스트 키워드: `seoul`, `korean,food`, `cafe,interior`, `apartment,korea`
- `?lock=N`로 결정적 출력
- 예: `https://loremflickr.com/600/400/seoul,city/all?lock=42` → 서울 도시 사진 결정적

**사용 가이드**:
- product 카드: Picsum seed로 시리즈 일관성 (`<brand>-product-1`, `-2`, `-3` ...)
- hero 배경 photo (필요 시): Loremflickr 키워드 매칭
- testimonial 아바타: DiceBear `lorelei` 또는 `notionists` (people 사진 placeholder 보다 일관)
- 사진이 brand idiom과 안 맞으면 (예: musinsa editorial은 photo 자리에 색면 placeholder가 더 맞음) → 사용 안 함

**금지**:
- 실제 brand가 운영하는 CDN URL (`cdn.banksalad.com/...` 등)은 product DOM에 hot-link 금지 — TOS·IP 영역
- 특정 인물 사진을 brand mascot처럼 박지 말 것

### 5. PATTERNS / BACKGROUNDS

**Hero Patterns** (CC BY 4.0) — `https://heropatterns.com` — SVG 도큐 보고 inline 복사
- 라이센스에 따라 `assets/attribution.md`에 CC BY 표기 의무

**CSS 자체 생성** — abstract gradient ornament는 generator가 직접:
```css
.hero-ornament {
  position: absolute; inset: -100px -200px auto auto;
  width: 480px; height: 280px;
  background: radial-gradient(circle, var(--brand) 0%, transparent 70%);
  filter: blur(120px); opacity: 0.4;
  pointer-events: none; z-index: 0;
}
```
이건 brand-specific creative work 아님 — 우리가 직접 그려도 무방.

### 6. FONTS

기존 `omd:reference-capture` Phase 3.5의 fonts.json catalog와 동일. SIL OFL / open-source만:
- Pretendard, Wanted Sans, Noto Sans KR, Inter — jsdelivr / Google Fonts CDN

**디스플레이/액센트 폰트** (logo / hero 헤드라인용, SIL OFL):
- **DM Serif Display** (Google Fonts) — 우아한 serif display
  - `https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap`
- **Space Grotesk** (SIL OFL) — modern geometric sans
  - `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap`
- **Fraunces** (SIL OFL) — display serif
  - `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..900&display=swap`
- **Bricolage Grotesque** (SIL OFL) — modern display
  - `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;700&display=swap`

`[YOUR PRODUCT NAME]` 자리를 폼나게 만들 때 위 display 폰트 + `letter-spacing: -0.03em` + `font-weight: 600` 정도가 polish 시작점.

## Attribution 의무

모든 자산 사용 시 `assets/attribution.md`에 다음 형식으로 기록:

```markdown
# Asset Attribution

Generated by `omd:asset-fetch` on <ISO-date>.

## Used Assets

| Asset | Source URL | License | Used at |
|---|---|---|---|
| Hero character | `https://api.dicebear.com/9.x/notionists/svg?seed=X&size=520` | CC0 | landing.html#L148 |
| Logo wordmark | `Folio` rendered in Bricolage Grotesque 700 (SIL OFL via Google Fonts) | SIL OFL | landing.html header `.logo-wordmark` |
| Product card 1 photo | `https://picsum.photos/seed/musinsa-card-1/400/500` | CC0 (Picsum) | landing.html#L412 |
| ... | ... | ... | ... |

## License Summary

- CC0 자산: 무제한 commercial 사용
- CC BY 4.0 자산 (Hero Patterns 등): 사용 시 attribution 의무 — 이 파일이 attribution 역할
- SIL OFL 폰트: 폰트 자체 redistribution은 라이센스에 따름; 웹페이지 임베드는 자유
```

## 호출 패턴

이 스킬은 **omd:apply / omd:harness가 내부적으로 호출**하는 룩업 catalog. 사용자가 명시적으로 부를 일은 드묾.

| 호출 컨텍스트 | 액션 |
|---|---|
| omd:harness가 hero 일러스트 자리 채울 때 | §2 DiceBear avatar URL fetch |
| omd:apply가 product 카드 N개 그릴 때 | §4 Picsum seeded URL 사용 |
| omd:harness가 헤더 logo 자리 만들 때 | §1 워드마크-only 패턴 (디스플레이 폰트 + product name, icon mark X) |
| omd:harness가 feature 카드 아이콘 정할 때 | §3 Lucide URL |
| 사용자가 직접 "사진 자료 가져와줘" 요청 | 사용자 의도 확인 후 §4 Picsum / Loremflickr |

## 검증 gate

생성된 HTML 작성 직후 self-audit:

1. `grep -E '<svg[^>]*>(\s*<path d="M[0-9.,\sCQ-]+"\s*/?>)' landing.html` — handcrafted inline svg path 개수 확인. 차트(.hero-chart) 외에 0이어야 함.
2. `grep -E '\[YOUR LOGO\]|\[YOUR PRODUCT NAME\]' landing.html` — placeholder 텍스트 남아있나? 있으면 §1 패턴으로 교체.
3. `grep -E 'assets/attribution\.md' landing.html` 또는 attribution.md 파일 존재 확인.
4. `grep -E 'placeholder|TBD|TODO|FIXME' landing.html` — sub-agent가 lazy fallback 남겼나? 0이어야 함.

## 안티패턴 (절대 금지)

- ❌ generator가 inline SVG로 캐릭터·로고·아이콘·일러스트 "그리기"
- ❌ catalog에 없는 임의 CDN URL 추측 (e.g. "https://example.com/cool-illustration.svg" 같은 거짓 URL)
- ❌ brand가 운영하는 CDN URL hot-link (cdn.banksalad.com 등)
- ❌ 사용자 product에 [YOUR LOGO] 점선 박스 그대로 ship — §1 패턴으로 교체 의무
- ❌ attribution.md 생략

## 한 줄 요약

**모든 placeholder = catalog fetch + attribution. handcraft inline graphics 0.**
