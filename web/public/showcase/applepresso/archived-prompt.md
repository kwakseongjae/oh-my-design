# Historical prompt — Applepresso

> This is a near-verbatim archived prompt from an OmD 1.4-era controlled experiment; one local filesystem path was redacted as `<repo-root>`.
> It is published for auditability, not as the current quickstart. The old
> prompt mentions an optional MCP path and repository-local Claude paths; the
> current v1.9 installer uses native channel paths and requires no MCP server.
> Use the current [live demo runbook](/docs/en/demo) for a new demonstration.

# Codex CLI Prompt — Applepresso (바나프레소 × Apple HIG redesign)

> **사용법** — 아래 `## PROMPT` 섹션 전체를 복사해 Codex CLI 세션에 붙여넣으세요. Codex는 `oh-my-design` repo 루트에서 실행돼야 합니다. 전체 흐름은 약 20~40분 소요됩니다 (단계별 image generation 시간이 가장 큼).

이 프롬프트는 oh-my-design의 다음을 한 번에 테스트합니다:

- `omd install-skills` TUI 멀티-셀렉트 → Codex 채널 설치
- MCP resource layer (`references/<id>/DESIGN.md` 자동 컨텍스트 주입)
- `omd-orchestrator` 5-stage workflow (write → review → revise → localize → critic → images → handoff)
- `omd-kr-writer` (preset `kakao-warm-product` 또는 `toss-tech-design`)
- `omd-designer-review` + `omd-final-qa` self-audit
- **`omd-codex-image`** ← Codex 채널 핵심: native image generation으로 실제 PNG 자산 생성
- `omd-asset-curator` (fallback path 확인용)

---

## PROMPT

```text
당신은 Codex CLI agent입니다. 이 세션은 oh-my-design (OmD) 1.4.x를 실제 워크플로우로 검증하는 실험입니다.

## 미션

**바나프레소(Banapresso) 브랜드를 "Applepresso"로 리디자인** — 동일한 저가 한국 커피 체인 비즈니스 모델을 Apple Human Interface Guidelines의 시각 언어로 다시 표현한 가상 브랜드입니다.

3개 페이지(landing / menu / detail)를 self-contained HTML로 만들고, 모든 이미지 자산은 당신의 native image generation 기능으로 실제 PNG로 생성해서 채워 넣으세요.

저는 실제 유저 입장에서 결과물을 새 탭에 열어 평가합니다. 즉:

- 텍스트만 있고 이미지가 비어있으면 실패
- Apple 브랜드 자산을 그대로 베끼면 IP 위반 (apple.com 이미지 임베드 금지)
- 바나프레소 노란색을 그대로 쓰면 무의미 (Apple-언어로 재해석한 자체 컬러 시스템이어야 함)
- 평범한 마케팅 카피("최고의 커피") 아무 의미 없음 — Apple voice + 한국 카페 컨텍스트에 맞는 진짜 카피

## 사용 가능한 OmD 스킬 (반드시 활용)

저장소 루트(`<repo-root>/`)에 다음 skill prose가 있습니다. **순서대로 읽고** 각 단계에서 해당 스킬의 절차를 따르세요:

1. `.claude/skills/omd-orchestrator/SKILL.md` — supervisor topology, 5-stage workflow, 2-round revision cap
2. `.claude/skills/omd-kr-writer/SKILL.md` — 12개 preset, 한국어 voice synthesis
3. `.claude/skills/omd-designer-review/SKILL.md` — 6-category visual audit
4. `.claude/skills/omd-final-qa/SKILL.md` — 9-item rubric
5. `.claude/skills/omd-codex-image/SKILL.md` ← **핵심**: 채널-aware image materialization. 당신은 `channel: codex`로 동작합니다.
6. `.claude/skills/omd-asset-curator/SKILL.md` — free-license fallback catalog

MCP resource로 노출된 brand DESIGN.md:
- `references/apple/DESIGN.md` (visual language source)
- `references/baemin/DESIGN.md` (Korean F&B competitor reference)

만약 oh-my-design-mcp가 클라이언트에 연결돼 있으면 MCP tool로 가져오고, 아니면 파일을 직접 Read하세요.

## 작업 디렉토리

모든 산출물은 `experiments/2026-05-19-applepresso/`에 둡니다. 다음 구조:

```
experiments/2026-05-19-applepresso/
├── research/
│   ├── banapresso-ux-research.md     # Banapresso UX 분석 (실 사용자 관점)
│   └── apple-language-extract.md     # Apple DESIGN.md에서 가져올 시각 토큰
├── DESIGN.md                          # Applepresso 합성 brand spec (Apple × 카페 carryover)
├── landing.html                       # 메인 랜딩
├── menu.html                          # 메뉴 리스트
├── detail.html                        # 단일 메뉴 상세
├── assets/                            # 당신이 generate한 실제 PNG들
│   └── *.png
├── metadata.json                      # 사용 스킬 + audit 결과
└── README.md                          # 실험 요약
```

## Phase 1 — UX 리서치 (research/banapresso-ux-research.md)

Banapresso(바나프레소)에 대해 다음 리서치를 수행하고 한국어로 마크다운 작성:

- 비즈니스 모델: 저가 한국 커피 체인, 1,200원~2,500원 가격대, 노란색 강한 브랜딩, 매장 인테리어 톤
- UX 강점 (개인적으로 좋아하는 포인트라고 했으니, 객관적으로 분석):
  - 모바일 주문 플로우의 마찰 (앱 vs 매장 QR vs 키오스크)
  - 메뉴 카탈로그의 시각 위계
  - "빠르고 싸다"라는 약속을 시각적으로 어떻게 표현하는지
- 한국 사용자 행동 패턴: 출근길 takeaway 비중, 멤버십, 스탬프 적립
- 경쟁사 차별점: 스타벅스/이디야/투썸/메가커피와 무엇이 다른지

웹 검색을 사용해도 좋고, 일반 지식만으로 작성해도 좋습니다. 보수적으로: 모르는 사실은 모른다고 표시하고 추측이라고 명시.

## Phase 2 — Apple language 추출 (research/apple-language-extract.md)

`references/apple/DESIGN.md`를 전체 읽고, 다음을 표 형식으로 추출:

- 색 토큰: pure black `#000000`, near-white `#f5f5f7`, dark text `#1d1d1f`, Apple Blue `#0071e3`, plus 1~2 semantic tokens
- Typography: SF Pro Display + SF Pro Text, sizing scale (12 / 17 / 21 / 32 / 48 / 56 / 80px 등), letter-spacing/line-height
- Section pacing: dark↔light alternating, edge-to-edge product photography
- Voice: "Privacy. That's iPhone." 식의 1~3 단어 단언, "Engineered to be..." 식 wonder-building
- Component motifs: monochrome glyph icon, button = pill with #0071e3, fixed 980px max-width grid, 88px nav

## Phase 3 — Applepresso DESIGN.md 합성

`references/apple/DESIGN.md`의 §1~§13 schema를 그대로 따라 새 DESIGN.md를 만듭니다. 단:

- `id: applepresso`, `name: Applepresso`, `country: KR`, `category: food-beverage`
- `primary_color`는 **Apple 토큰 시스템 안에서** 카페-카운터 톤을 골라야 함 — 가능: warm graphite `#1d1d1f` (자기 자신을 product로 보는 컨셉), 또는 espresso brown `#3d2817` (커피로서의 정체성), 또는 cream `#f5f1e8` (light theme primary). 당신의 판단으로 1개 선택.
- §10 Voice: Apple의 "Magnificent. Magical." 톤을 한국어로 재해석. 예시 카피 5~10줄 작성. 한국 카페 컨텍스트(takeaway, 출근, 빨대 X, 종이컵 vs 텀블러)에 맞게.
- 토큰은 모두 Apple DESIGN.md에서 trace 가능해야 함 (단, Apple Blue → Espresso Crema 같은 의미적 대체 OK)

작성 후 self-audit: omd-designer-review SKILL의 6-category 체크리스트로 본인 DESIGN.md를 점검.

## Phase 4 — 3 페이지 생성

**landing.html**:
- Hero: Apple-style 거대한 헤드라인(56~80px) + 한 줄 서브카피 + 단일 CTA. 풀-블리드 제품 사진(에스프레소 잔)이 배경.
- 3개 가치 제안 섹션 (alternating dark/light): "1초 만에 결제", "동네에서 가장 빠른 아메리카노", "회원 가격 1,500원"
- 메뉴 카테고리 미니 그리드 (4~6 카드)
- 매장 찾기 CTA
- Footer (Apple-style mini-link grid)

**menu.html**:
- 상단 고정 nav (88px height, Apple-style)
- 좌측 카테고리 필터 (Coffee / Tea / Frappuccino / Bakery)
- 메인: 12~18개 메뉴 카드 그리드 (3-col desktop, 2-col tablet, 1-col mobile). 각 카드는 제품 사진 + 한글 메뉴명 + 가격(`₩1,500`) + "담기" CTA
- 가격은 1,200~4,500원 사이로 현실적으로
- 한 화면 안에서 정확히 1개 element만 active state (Apple Blue 또는 당신이 선택한 accent)

**detail.html**:
- 풀-블리드 제품 사진 (1200x600 정도 영역)
- 우측: 제품명(48px) + 한 줄 서브카피 + 가격 + 옵션 셀렉터(샷 +1 / 우유 변경 / 시럽) + "장바구니" CTA (Apple-style 큰 pill button)
- 아래: "왜 Applepresso인가" 3-up 섹션
- 영양 정보 표 (칼로리 / 카페인 / 당류)
- 관련 제품 4개 카드 row

모든 페이지 공통:
- Self-contained HTML (각 파일이 단독으로 브라우저에서 열림)
- Tailwind CDN OK
- font-family로 SF Pro 시스템 스택 `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Apple SD Gothic Neo", system-ui` 사용 (라이선스 안전, 맥에서 진짜 SF Pro 로드)
- 모바일 375px ~ 데스크탑 1280px 범위 반응형
- 5 states (default/hover/active/focus-visible/disabled) on interactive elements
- 한국어 카피, 한 줄도 직역투 X — kakao-warm-product 또는 toss-tech-design preset 적용

## Phase 5 — 이미지 자산 실제 생성 ★ 핵심 단계

각 페이지 안에 `<!-- omd:gen-image ... -->` spec 블록을 모든 이미지 자리에 둡니다. 형식은 `omd-codex-image/SKILL.md` §0 참조.

그 다음 **각 spec에 대해 당신의 native image generation을 직접 호출해서 실제 PNG를 `assets/`에 저장**하세요. spec format에 충실히:

```
<!-- omd:gen-image
  filename: assets/hero-espresso-cup.png
  prompt: "에스프레소 한 잔을 위에서 45도 각도로 본 스튜디오 컷. 따뜻한 베이지(#f5f1e8) 배경에 흰 도자기 잔. 크레마의 디테일이 보이는 4K 사진 퀄리티. Apple 제품 사진 같은 cinematic lighting, 그림자는 부드럽고 길게. 텍스트 없음, 로고 없음, 사람 손 없음."
  aspect: "16:9"
  style: "studio product photography, cinematic"
  references:
    - "https://www.apple.com/iphone-17-pro/" (촬영 스타일만 참고, 카피 금지)
  notes: "단순 무지 배경, 1개 product, 1개 light source."
-->
<img src="assets/hero-espresso-cup.png" alt="에스프레소 한 잔" />
```

규칙:

- **로고는 절대 generate 금지** — Applepresso 워드마크는 단순 SF Pro 텍스트로 처리 (`<h1 style="font-family:...;letter-spacing:-0.04em">Applepresso</h1>`)
- 사람 얼굴 generation 금지. 손이 들어가야 하는 컷은 손가락만 부분적으로 (Apple lifestyle 컷 스타일)
- 모든 이미지: 워터마크 없음, 텍스트 없음, 가짜 브랜드 로고 없음
- 모든 색은 Applepresso DESIGN.md에서 trace 가능해야 함 (gen prompt에 hex 명시)
- 메뉴 카드 12~18개 — 모든 메뉴에 같은 angle/style의 컷이 필요. **batch generation**: 같은 prompt skeleton에 메뉴명만 바꿔서 일관성 유지
- 최소 자산 카운트:
  - landing: hero 1 + 가치 제안 섹션 visual 3 + 메뉴 카테고리 4~6 = 약 8~10장
  - menu: 메뉴 카드 12~18 + 카테고리 헤더 1 = 약 13~19장
  - detail: 메인 제품 사진 1 + 옵션 시각화 2~3 + 관련 제품 4 = 약 7~8장
  - **총합 30장 내외** 권장
- generation 끝나면 spec 블록 바로 아래에 `<!-- omd:gen-image:done at=<ISO> by=codex prompt_tokens=<n> -->` 1줄 추가

## Phase 6 — Self-audit & final QA

3 페이지 + DESIGN.md 모두 작성 후:

1. `omd-designer-review` SKILL §1.1~§1.6 6-category 자기 점검 (typo / color budget / radius / state / mobile / 컴포넌트 일관성). BLOCK 0개가 되도록 fix.
2. `omd-final-qa` SKILL의 9-item rubric을 한 번 더 통과. 2-round revision cap 안에서 작업.
3. 모든 이미지가 실제로 `assets/`에 존재하는지 `ls assets/`로 확인. 누락 있으면 다시 generate.

## Phase 7 — Emit metadata.json + README.md

`experiments/2026-05-19-applepresso/metadata.json`:

```json
{
  "brand": "applepresso",
  "base_reference": "apple",
  "locale": "ko",
  "preset": "kakao-warm-product" or "toss-tech-design",
  "skills_used": ["omd-orchestrator", "omd-kr-writer", "omd-designer-review", "omd-final-qa", "omd-codex-image"],
  "pages": ["landing.html", "menu.html", "detail.html"],
  "image_specs": <N>,
  "images_materialized": <N>,
  "fonts": { "primary": "SF Pro Display + SF Pro Text", "loaded_via": "system" },
  "tokens_referenced": ["#1d1d1f", "#f5f1e8", "..."],
  "self_audit": { "block": 0, "warn": <n>, "fyi": <n> },
  "generation_notes": "...",
  "generation_time_minutes": <approx>
}
```

`experiments/2026-05-19-applepresso/README.md`: 한 페이지짜리 실험 요약 — 어떤 스킬 체인을 거쳤는지, 어떤 결정이 흥미로웠는지, 어떤 부분이 약했는지 (예: 메뉴 사진의 일관성, 카피의 Apple-voice 정합).

## Acceptance criteria

- [ ] 3개 HTML 파일 각각 단독으로 브라우저에서 열림 (file:// 또는 `python3 -m http.server`)
- [ ] `assets/`에 30장 내외 실제 PNG. 모든 이미지가 spec 블록과 매칭. 빈 이미지/에러 이미지 없음
- [ ] DESIGN.md가 Apple DESIGN.md schema 따름
- [ ] 모든 색이 Applepresso DESIGN.md에서 trace 가능
- [ ] 한국어 카피, 직역투 0건, 마케팅 클리셰("최고의 ~") 0건
- [ ] BLOCK 0
- [ ] metadata.json valid, README.md 작성됨
- [ ] Apple 브랜드 자산 verbatim 사용 0건, 바나프레소 로고 0건

## 출력 형식

작업 끝에 다음을 한국어로 보고하세요 (≤300 단어):

1. Phase별 소요 시간 (가능한 범위)
2. 사용한 skill 호출 횟수
3. Image generation 통계 (시도 / 성공 / 재시도 / 거절)
4. Self-audit 결과 (BLOCK/WARN/FYI count)
5. 가장 만족스러운 결정 1줄, 가장 약한 부분 1줄
6. 사용자가 봐야 할 첫 파일 경로 (보통 `experiments/2026-05-19-applepresso/landing.html`)

## 시작

지금 시작하세요. 막히는 부분이 있으면 멈추지 말고 보수적 판단으로 진행하고, 끝에 보고서에 그 결정과 이유를 적으세요. 중간 단계마다 사용자에게 묻지 마세요 — 한 번에 끝까지 갑니다.
```

---

## 사용자 측 사후 검증 체크리스트

Codex가 끝났다고 보고하면 다음을 확인합니다:

```bash
# 1. 파일 존재 + 크기
ls -la experiments/2026-05-19-applepresso/
ls experiments/2026-05-19-applepresso/assets/ | wc -l   # ≥ 25 기대

# 2. 빈 이미지 없음
find experiments/2026-05-19-applepresso/assets -size 0

# 3. spec/done 매칭
grep -c "omd:gen-image" experiments/2026-05-19-applepresso/*.html
grep -c "omd:gen-image:done" experiments/2026-05-19-applepresso/*.html

# 4. 브라우저에서 열기
python3 -m http.server 8920 -d experiments/2026-05-19-applepresso/
# 다른 터미널: open http://localhost:8920/landing.html
```

기존 4-brand 갤러리(`experiments/2026-05-19/index.html`)에도 5번째 행으로 Applepresso를 추가하려면 갤러리 스크립트의 `BRANDS` 배열에 한 항목 추가하면 자동으로 fetch + 렌더됩니다.

---

## 이 프롬프트의 설계 포인트

| 결정 | 이유 |
|---|---|
| 7-Phase 명시적 분리 | Codex가 stage-skip 하지 않도록. 각 phase에 acceptance가 박혀 있음 |
| spec 블록 + native gen을 분리하지 않음 | Codex가 "spec만 적고 generate 잊어버림" 실패 모드를 막기 위해 phase 5 안에서 한 번에 처리 |
| 로고/사람얼굴/바나프레소 노랑 명시 금지 | IP + 실험의 의의 보호 |
| `kakao-warm-product` OR `toss-tech-design` 양자택일 | preset routing이 실제로 동작하는지 (kr-writer)를 보는 테스트 포인트 |
| metadata.json에 `images_materialized` 별도 카운트 | spec 수 ≠ 실제 PNG 수 갭이 곧 결함이라는 신호 |
| `references/apple` + 옵션 `references/baemin` 동시 노출 | MCP 다중 reference resolution 테스트 |
| 사용자 컨펌 없이 7단계 끝까지 | autonomy 테스트 — orchestrator의 2-round cap이 실전에서 작동하는지 |
