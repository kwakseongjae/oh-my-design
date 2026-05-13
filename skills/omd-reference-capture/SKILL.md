---
name: omd:reference-capture
description: "선택된 reference brand의 라이브 사이트에서 디자인 컨텍스트(토큰·구조·visual reference)를 캡쳐. brand homepage 패칭, 컴퓨티드 스타일 inspect, 로고/스크린샷을 assets/_reference/<id>/ 로 가져와 attribution.md + LICENSE-NOTE.md와 함께 저장. '뱅크샐러드 에셋 가져와줘', 'X 사이트 패칭', 'X reference 캡쳐', 'X 라이브 스타일 추출', '브랜드 자료 받아와' 류 요청에 트리거. omd:init 직후 또는 omd:harness 중간에 호출 가능. DESIGN.md는 이 스킬이 만들지 않음 (omd:init 책임)."
---

# omd:reference-capture — Live Reference Capture

선택된 reference brand의 **라이브 사이트에서 디자인 컨텍스트를 가져온다**. 산출물은 `assets/_reference/<id>/` 디렉토리에 모이고, 사용자의 디자인 작업(omd:apply / omd:harness)에서 컨텍스트로 활용된다.

## 핵심 원칙 (위반 = regression)

이 스킬은 **dev/디자인 reference 캡쳐**용이다. brand IP를 사용자 product에 그대로 ship하는 도구가 **아니다**.

1. **Facts vs. Content 구분**
   - **Facts (캡쳐 OK)**: 컴퓨티드 색상 hex, 폰트 family/weight, spacing, radius, 컴포넌트 구조 — 디자인 시스템 분석은 fair use.
   - **Brand content (저장만, 사용자 product에 verbatim ship 금지)**: 로고, 히어로 사진, 마케팅 카피, 슬로건. 다운로드는 reference 확인용으로만.

2. **저작권 표시 의무**
   - 캡쳐 시작 전 `assets/_reference/<id>/LICENSE-NOTE.md`를 **가장 먼저** 작성.
   - 모든 다운로드 파일은 `attribution.md`에 source URL + 캡쳐 일자 + 추정 권리자 기록.

3. **사용자 product 생성 시 분리**
   - omd:apply/omd:harness가 UI를 만들 때, brand의 **voice/tone(facts)**은 참고하되 **literal copy**는 새로 작성.
   - brand 히어로 사진 / 마케팅 영상은 사용자 product에 직접 embed하지 말고 placeholder + "사용자 자체 자산으로 교체 필요" 주석.

4. **robots.txt / TOS 우선**
   - 다운로드 전 `curl -sI <site>/robots.txt`로 기본 정책 확인.
   - 사이트가 명시적으로 차단하는 경로면 skip하고 사용자에게 알림.

5. **scope 한정**
   - 기본 캡쳐 대상: homepage 1개 + favicon/logo + 컴퓨티드 토큰.
   - PDP / checkout / 인증 뒤 페이지는 **기본 skip** — 사용자가 명시적 요청해야만.
   - 비디오 / 대용량 미디어는 기본 skip (URL만 attribution.md에 기록).

## 트리거

- 명시: "X 에셋 가져와줘", "X 사이트 패칭해줘", "X 라이브 스타일 추출", "X reference 캡쳐"
- 묵시: omd:harness 안에서 reference 선정 후, 또는 사용자가 "X처럼 만들어줘" 요청 시 omd:init 후속 작업으로 자동 제안

## 전체 플로우

```
Phase 1: 입력 검증 — brand id 확정
Phase 2: 라이브 URL 수집 (homepage, logo, docs)
Phase 3: 디렉토리 + LICENSE-NOTE 사전 작성 (CRITICAL — 다운로드보다 먼저)
Phase 4: 토큰 캡쳐 (facts) — playwright computed styles
Phase 5: 시각 reference 캡쳐 (screenshot + 로고)
Phase 6: attribution.md 작성
Phase 7: 사용자 요약 + 다음 단계 안내
```

## Phase 1 — 입력 검증

사용자 요청에서 brand id 추출:
- 명시 brand 이름 (한글/영문) → `.claude/data/reference-fingerprints.json` `items[].id` 매칭
- 없으면 사용자에게 묻기: "어느 reference brand 자료를 가져올까요? (예: banksalad, toss, socar)"

id가 카탈로그에 없으면 종료 + "X는 reference 카탈로그에 없어요. omd:init으로 추가 가능합니다."

## Phase 2 — 라이브 URL 수집

다음을 순서대로 시도:

1. **homepage URL**:
   - `node_modules/oh-my-design-cli/web/references/<id>/_promo.json`의 `logo_url`이 brand site면 거기서 도메인 추출
   - 없으면 `node_modules/oh-my-design-cli/web/references/<id>/_research.md`에서 Tier 1 source URL grep
   - 둘 다 없으면 `.claude/data/reference-fingerprints.json`의 `items[].category_raw` 기반으로 추론 — 마지막 수단

2. **logo URL** (`_promo.json` 우선):
   - `_promo.json.logo_url` → 그대로 사용
   - 없으면 homepage HTML에서 `apple-touch-icon` / `og:image` / favicon-256 추출

3. **공식 DS docs URL** (있으면):
   - `node_modules/oh-my-design-cli/web/references/<id>/DESIGN.md`의 footer 또는 §4 verified 섹션에서 grep

수집한 URL 후보를 사용자에게 보여주고 확인:

```
다음 자료를 가져오려고 합니다:
  - homepage: https://www.banksalad.com
  - logo: https://blog.banksalad.com/static/img/logo-banksalad.svg
  - 공식 DS: (없음)

저작권 안내: 이 자료는 디자인 reference 용도로만 사용됩니다. 사용자 product에 그대로 ship하지 마세요.

진행하시겠어요? (yes/no/edit-urls)
```

## Phase 3 — 디렉토리 + LICENSE-NOTE 사전 작성 (CRITICAL)

다운로드 시작 **전에** 다음을 먼저 작성:

```bash
mkdir -p "assets/_reference/<id>/screenshots"
```

`assets/_reference/<id>/LICENSE-NOTE.md`:

```markdown
# License Note — <id> Reference Capture

This directory contains design-reference materials captured from
**<id>**'s public website on **<ISO-date>** for the purpose of
informing UI design work in this project.

## What's here is for REFERENCE, not REDISTRIBUTION

- **Design tokens** (colors, fonts, spacing) — `tokens.json`. These
  are facts about the brand's design system and may be used to inform
  your own design.
- **Logo file** — captured for visual recognition during development.
  This is <brand>'s trademark. Do not use in your own product, your
  own marketing, or any redistribution. Replace with your own brand
  mark before shipping.
- **Screenshots** — captured for visual reference during development.
  Do not embed in your product, your blog, or social posts beyond
  fair-use commentary.

## What you should NOT do

- Embed `logo.*` or `screenshots/*.png` in your own product UI as if
  they belong to you.
- Copy `tokens.json`'s exact hex values into your own brand without
  shifting them via `delta_set` (see omd:init).
- Copy any marketing text from screenshots into your own product
  verbatim — voice/tone is fact, but specific phrasing is creative work.

## What you SHOULD do

- Use the **design language** (token relationships, component
  patterns, voice register) to inform your project's DESIGN.md.
- Reference the screenshots during design reviews to align with the
  visual target.
- Replace all brand-identifying assets with your own before any
  external sharing.

## Attribution

See `attribution.md` in this directory for source URLs and capture
timestamps.

---

This note is generated by `omd:reference-capture`. Do not edit by hand
— rerun the skill to refresh.
```

## Phase 4 — 토큰 캡쳐 (facts)

playwright MCP를 사용해 homepage에 navigate한 뒤 computed styles를 추출. 결과는 `assets/_reference/<id>/tokens.json`:

```json
{
  "captured_at": "<ISO-8601>",
  "source_url": "https://www.banksalad.com",
  "tokens": {
    "colors": {
      "background": "#ffffff",
      "text_primary": "#2b2b2b",
      "text_body": "#434444",
      "interaction_primary": "#04c584",
      "interaction_hover": "#10df99"
    },
    "typography": {
      "body_font_family": "Pretendard, ...",
      "body_font_weight": "400",
      "heading_font_weight": "700",
      "base_size_px": 16
    },
    "shape": {
      "default_radius_px": 2,
      "card_radius_px": 2,
      "pill_radius_px": 16
    },
    "shadow": {
      "default": "0 2px 5px rgba(0,0,0,0.12)"
    }
  },
  "samples": [
    { "element": "primary button (hero CTA)", "raw_computed_style": { /* getComputedStyle slice */ } },
    { "element": "card", "raw_computed_style": { /* ... */ } }
  ]
}
```

inspect 패턴은 `.claude/skills/omd-add-reference/SKILL.md`의 "apple.com 류 라이브 inspect 패턴"과 동일. 5-10 elements 샘플링.

## Phase 5 — 시각 reference 캡쳐

### 5.1 로고 다운로드

`curl -sSL -o "assets/_reference/<id>/logo.<ext>" "<logo_url>"`

- 실패 시 sourceURL 명시하고 사용자에게 수동 다운로드 안내
- 확장자는 Content-Type 기준 (svg/png/ico) — 잘못된 확장자로 저장하지 말 것

### 5.2 Hero screenshot

playwright `mcp__playwright__browser_take_screenshot`로 homepage 위 fold만 캡쳐:

- viewport: 1280×800 (데스크탑 기본)
- fullPage: **false** — 위 fold만
- 저장 경로: `assets/_reference/<id>/screenshots/hero-desktop.png`

모바일 viewport (375×812)도 1장: `screenshots/hero-mobile.png`.

대용량 페이지 전체 screenshot은 default skip. 사용자가 명시적으로 요청 시만.

### 5.3 다운로드 금지 대상

- 비디오 (`.mp4`, `.webm`)
- 마케팅 PDF
- 인증 뒤 페이지의 자산
- robots.txt가 차단하는 경로

이런 자원은 attribution.md에 URL만 기록.

## Phase 6 — attribution.md

`assets/_reference/<id>/attribution.md`:

```markdown
# Attribution — <id> Reference Capture

Captured: **<ISO-8601>** via `omd:reference-capture`

## Sources

| File | Source URL | Captured | Notes |
|---|---|---|---|
| `tokens.json` | `<homepage_url>` | <date> | Computed styles via playwright, factual analysis |
| `logo.<ext>` | `<logo_url>` | <date> | Brand trademark — do not redistribute |
| `screenshots/hero-desktop.png` | `<homepage_url>` (1280×800) | <date> | Reference for design alignment |
| `screenshots/hero-mobile.png` | `<homepage_url>` (375×812) | <date> | Reference for design alignment |

## Skipped (URL recorded for manual review)

- (none) OR <list of URLs skipped due to robots.txt / size / type>

## Rights

These materials are owned by <id> and its respective rights holders.
Captured under fair-use principles for the purpose of design analysis
and development reference. See `LICENSE-NOTE.md` for usage boundaries.

## Refresh

Rerun `omd:reference-capture <id>` to recapture (overwrites this
directory). Captured tokens reflect the live site at capture time and
may drift as the brand evolves.
```

## Phase 7 — 사용자 요약

prose로:

```
✓ <id> reference captured into assets/_reference/<id>/
  - tokens.json — <N> design tokens extracted
  - logo.<ext> — <size>
  - screenshots/ — <N> images

⚠ 저작권 안내: 이 자료는 디자인 reference 용도. 사용자 product에 brand 로고/스크린샷을 직접 embed하지 마세요. 자세한 사용 경계는 LICENSE-NOTE.md 참고.

다음 단계:
  - omd:apply로 컴포넌트 작업 시작 (tokens.json 자동 활용)
  - omd:harness로 전체 surface 디자인 (이 자료를 reference로)
  - 토큰 시각 확인: open assets/_reference/<id>/screenshots/hero-desktop.png
```

## omd:harness / omd:apply 와의 인터페이스

이 스킬이 만든 `assets/_reference/<id>/tokens.json`은 후속 skill이 자동 활용:

- **omd:apply**가 컴포넌트 작업 시 `tokens.json`이 있으면 hex 값 동기화 우선
- **omd:harness**의 Component phase에서 시각 reference로 screenshots 활용

UI 생성 시 logo 사용 규칙 (omd:apply / omd:harness 둘 다 적용):
- 사용자 product의 **헤더/footer logo는 reference logo를 placeholder로 쓰지 말 것** — `[YOUR LOGO]` 자리만 잡고 사용자에게 자체 로고 요청
- favicon / og:image 등도 동일 — placeholder 위치만 표시

## 안티패턴 (절대 금지)

- ❌ 다운로드 시작 전에 LICENSE-NOTE.md 작성 skip
- ❌ Phase 4의 token 캡쳐 결과를 그대로 사용자 DESIGN.md에 hex값 verbatim 복사 (omd:init의 delta_set 시스템을 우회)
- ❌ 브랜드 마케팅 카피를 사용자 product에 그대로 인용
- ❌ 사용자 product의 로고 자리에 reference brand 로고 임시로라도 박기 (사용자가 잊고 ship 가능성)
- ❌ robots.txt 차단 경로 강행
- ❌ 인증 뒤 페이지 자동 탐색
- ❌ 비디오 / 대용량 자산 default 다운로드

## 산출 위치 (요약)

```
assets/_reference/<id>/
├── LICENSE-NOTE.md       (사전 작성)
├── attribution.md        (마지막 작성)
├── tokens.json           (facts)
├── logo.<svg|png|ico>    (brand mark — reference only)
└── screenshots/
    ├── hero-desktop.png  (1280×800, above fold)
    └── hero-mobile.png   (375×812, above fold)
```

## .gitignore 권장

`assets/_reference/` 디렉토리는 사용자 자체 자산이 아닌 reference 자료이므로, 사용자 git repo의 정책에 따라 .gitignore 권장:

```
# Reference capture (regeneratable via omd:reference-capture)
assets/_reference/
```

이 스킬은 .gitignore를 자동 수정하지 않음 — 사용자에게 알림만.
