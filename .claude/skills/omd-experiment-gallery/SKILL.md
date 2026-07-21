---
name: omd:experiment-gallery
description: "N개 brand experiment를 한 화면에서 비교하는 gallery index.html을 생성. 각 카드는 brand name, wow rating, multi-turn refinement deltas, iframe scaled preview, standalone link 포함. '결과물 한 번에 보여줘', '갤러리 만들어', '5개 비교 뷰', 'experiment 결과 정리' 류 트리거. omd:harness가 N개 brand batch 작업 끝낸 직후 자동 호출되거나 사용자가 명시적으로 호출."
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# omd:experiment-gallery — N-brand comparison index

## 왜 이 스킬

여러 brand experiment를 돌리고 나면 결과물 검수가 산만 — 각 폴더 따로 열고 비교하기 번거로움. 이 skill은 **단일 `index.html`** 에 N개 결과를 iframe으로 박아서 한 화면에서 wow ratings + deltas + 실제 렌더를 동시 확인.

## 트리거

- 명시: "결과물 한 번에 보여줘", "갤러리 만들어", "N개 비교 뷰"
- 묵시: 사용자가 omd:harness로 ≥2개 brand experiment를 한 batch에서 끝낸 직후 ("이제 비교해보자" 라는 흐름)
- 다른 skill 안에서 호출: omd:batch-launch가 5개 brand 끝낸 후 Phase 5로 호출

## 입력

다음 둘 중 하나:

1. **명시 디렉토리 list**: 사용자가 `/tmp/omd-gallery/{brand1,brand2,brand3}` 같은 list 제공
2. **부모 디렉토리 + glob**: `/tmp/omd-gallery/*` 또는 `web/experiments/2026-05/*` 등 — skill이 자동 enumerate

각 brand 디렉토리는 다음 파일들 있어야 함 (있으면 사용, 없으면 fallback):
- `landing.html` (필수) — iframe src
- `DESIGN.md` (선택) — brand display name 추출
- `assets/_reference/<id>/structure.json` (선택) — composition 메타
- `assets/_reference/<id>/.live-inspect-proof.json` (선택) — live tag 표시
- `screenshots/after.png` (선택) — fallback preview
- `experiment-meta.json` (선택, 권장) — wow rating + round-2 deltas + 카테고리 — sub-agent가 작성

## experiment-meta.json 스키마 (sub-agent가 작성)

각 experiment sub-agent는 work 종료 직전 다음 파일을 작성:

```json
{
  "brand_id": "toss",
  "brand_korean": "토스",
  "brand_category": "Fintech",
  "brand_color_hex": "#3182f6",
  "wow_rating": 7.5,
  "lines": 603,
  "live_inspect": { "ran": true, "raw_samples": 7, "method": "playwright|harness" },
  "round2_deltas": [
    "Reveal failsafe — 2s forwards animation",
    "Stat-card narrative upgrade",
    "CTA copy 구체화 (시간 약속)",
    "Hero shimmer (accent text gradient)",
    "Dark marquee band rhythm break",
    "Chart stroke-dashoffset draw-in"
  ],
  "ip_compliance": {
    "your_logo_placeholders": 2,
    "your_product_name_placeholders": 4,
    "brand_logo_embed_count": 0,
    "verbatim_brand_copy": 0
  },
  "honest_gaps": [
    "Hero composition은 single character + flat card (3D ornament 부재)",
    "Carousel은 dot만 회전 (slide content 미스왑)"
  ]
}
```

skill이 이 파일을 읽어 gallery 카드의 wow / lines / deltas 영역 채움. 없으면 brand_id만으로 minimal 카드.

## 출력

### 1. `<output-dir>/index.html` (메인 산출물)

다음 구조:

- 헤더: title (사용자가 batch 명령에서 받은 raw — "한국 brand 5선" 등), kicker (date · brand 수), meta (version · skill chain · mode)
- main grid: brand 1개당 card 1개
  - card head: brand mark (CSS-generated initial chip 또는 DiceBear shapes if brand has known color) + 한글명 + id + wow rating
  - frame-wrap: aspect-ratio 16:10 iframe (scale 50%로 200%×200% iframe rendering — 모바일은 100%)
  - card foot: voice note 1줄 + tags chips + round-2 deltas ol
- footer summary: 모든 brand wow/lines/proof/round-2 핵심 1줄 테이블
- system-note: 적용된 skill 버전의 시스템 fix들 한 단락

### 2. CSS 스타일 가이드

- typography: Pretendard from jsdelivr (SIL OFL). 디스플레이는 본문 헤더에만 (`clamp(36px,4.4vw,56px) / weight 800 / letter-spacing -0.04em`)
- 다크 surface (`#0b0d10`) — gallery는 dark mode가 정석 (검토 환경 자체가 광원이 되도록)
- accent: gradient `linear-gradient(135deg, #7c5cfc 0%, #fa2e5f 50%, #04c584 100%)` — Stripe-like
- card: `bg #13161b`, border `#252b35`, hover `border #7c5cfc` + `translateY -2px`
- 반응형: ≥1100px 2-col grid, <1100px 1-col

### 3. iframe scaling

```css
.frame-wrap { aspect-ratio: 16/10; background: #fff; overflow: hidden; position: relative; }
.frame-wrap iframe {
  position: absolute; top: 0; left: 0;
  width: 200%; height: 200%;
  transform: scale(.5); transform-origin: top left;
  border: 0;
}
.open-link {
  position: absolute; top: 12px; right: 12px;
  background: rgba(11,13,16,.7); color: #fff;
  padding: 6px 12px; border-radius: 999px;
  font-size: 11px; backdrop-filter: blur(8px);
}
```

200% × scale(.5)는 모바일 viewport에서도 데스크탑 layout 그대로 렌더하기 위함 (iframe 본인은 1280-1920px 가정).

### 4. 정적 vs 서버 모드

- iframe src는 **상대 경로** (`./toss/landing.html`) — 정적 file:// open 안 됨 (CORS), `python3 -m http.server <port>` 추천
- skill 끝에 사용자에게 "서버 띄우는 명령" 출력:
  ```
  cd <output-dir> && python3 -m http.server 8770
  open http://localhost:8770/index.html
  ```

## 실행 절차

1. **입력 검증**: 디렉토리 list parsed, 각 디렉토리에 `landing.html` 존재 확인. 없으면 그 brand는 skip + 사용자에게 알림.

2. **meta 수집**: 각 brand 디렉토리에서:
   - `experiment-meta.json` 있으면 그대로 사용
   - 없으면 `DESIGN.md` frontmatter에서 `brand` 추출, `landing.html`에서 `<title>` 추출 → minimal card
   - `structure.json`이 있으면 hero.type / cta.dominant_shape 정도를 tag로 추가
   - `.live-inspect-proof.json` 존재 → "live ✓" tag, raw_samples 수 표시

3. **brand mark 생성**: brand_color_hex가 있으면 색칩 div에 첫 글자. 없으면 회색 fallback.

4. **gallery HTML 작성**: 위 CSS + 카드 구조로 출력. `<output-dir>/index.html`에 write.

5. **사용자 요약**:
   ```
   ✓ Gallery 생성: <output-dir>/index.html
     - 카드 N개 · wow 평균 X.X · live-inspect 통과 Y/N
     - 서버 띄우는 법: cd <output-dir> && python3 -m http.server 8770
     - 열기: http://localhost:8770/index.html
   ```

## 멀티턴 self-feedback 옵션 (v1.3.6 신설)

`browser-harness` 또는 `mcp__playwright__*` 가용 시, gallery 생성 후 **gallery 자체에 self-critique 라운드**:

1. gallery index.html을 browser-harness로 열어 screenshot
2. 각 brand 카드의 iframe rendering이 정상인지 (빈 화면 / 깨진 layout / 누락 자산) 시각 grading
3. 발견된 문제 brand에 대해 **issue.md** 작성 (`<output-dir>/issues.md`):
   ```markdown
   # Gallery issues — auto-detected via browser-harness
   - toss: hero section reveals empty (IntersectionObserver fired but skill rule 10 safety net missing) — re-run with v1.3.6
   - karrot: product card photo 3 fails to load (Loremflickr 503) — fallback to Picsum needed
   ```
4. 사용자에게 issues.md 안내 + 자동 fix 진행 여부 묻기

## 안티패턴 (절대 금지)

- ❌ Brand 디렉토리 안의 자산을 gallery에 직접 복사 (iframe으로만 reference)
- ❌ Brand creative work 재구성 (각 brand의 own landing.html이 self-contained — gallery는 그 wrapper일 뿐)
- ❌ wow rating 임의 부여 (sub-agent의 honest assessment가 출처)

## 한 줄 요약

**N개 brand experiment → 1개 index.html. iframe scaled, wow rating, round-2 deltas, system-fix summary. 재사용 무한.**
