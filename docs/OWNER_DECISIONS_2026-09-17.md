# 오너 승인 대기 5건 — 실행 가능 형태

작성 2026-09-17. 각 항목은 **무엇을 정하는가 / 근거 수치 / 정하면 무슨 명령이 도는가**로 적었다.
모든 수치는 이 문서 작성 시점에 실측했다.

---

## 01 · toss r2 승인 → 채택  〔최우선 · 다른 전부를 막고 있음〕

### 먼저 답해야 할 것: 채택하면 운영이 깨지나?

**깨지지 않는다. 직접 시험했다.**

채택은 `web/references/toss/DESIGN.md`의 **바이트를 대체**하고 `.omd/system/` 사이드카를 만든다
(2026-09-08 카나리 설계 문서: *"restores the exact pre-adoption `DESIGN.md` bytes and prior
`.omd/system` absence"*). 그래서 r2의 Core v2 문서를 정본 자리에 넣고 전체 스위트를 돌렸다.

```
951건 중 942 통과 · 9 실패
```

리더는 견딘다 — `web/src/lib/references/repository.server.ts:81`이
`isCoreV2Document(markdown) ? "core-v2" : "legacy"`로 **이미 이중 판독**하고,
`verifyCanonicalCorePackage`까지 물려 있다. (시험 후 정본은 바이트 동일하게 복원했다.)

### 깨지는 9건 — 성격이 둘로 갈린다

**A. 실제 계약 갭 (3건)** — 가드가 Core v2를 모른다. 고쳐야 한다.

| 테스트 | 무엇을 요구하나 |
|---|---|
| `catalog-integrity … > toss` | 모든 레퍼런스가 `---` frontmatter로 시작할 것. Core v2 문서엔 frontmatter가 없다 |
| `evidence-integrity … > records what happens on the expiry date` | 만료 절벽 집계. frontmatter가 없으니 toss 소스가 원장에서 빠진다 |
| `reference-ast-fleet … > no ID, claim, or component loss` | 전 카탈로그 정규화 무손실 |

**B. 픽스처 가정 (6건)** — toss를 **legacy 예시로 하드코딩**한 테스트들. 리더 결함이 아니다.
실패 메시지가 그대로 말한다: `expected 'core-v2' to be 'legacy'`.

- `api/references/[id]/route.test.ts` ×4 (`REFERENCE_AST_V2=0|false|off` + 기본 모델)
- `extract-components.test.ts` — *"Toss prefers six verified structured components"*
- `reference-ast.test.ts` — *"keeps Toss brand color separate from its canonical UI primary"*

→ 다른 legacy 레퍼런스로 픽스처를 옮기거나 assertion을 이중 포맷으로 바꾸면 끝난다.

### 이게 write gate를 여나? — **아니다. 하지만 이 시험이 게이트가 요구한 측정이다.**

게이트(`CORE_V2_CATALOG_WRITE_BLOCKED`)의 미충족 조건은 하나다:
*"every catalog reader accepts its package — **not met**."*
지금까지 그 거리가 얼마인지 아무도 몰랐다. 이제 안다: **9건, 6개 파일.**
(리더 4개 `extract-tokens`·`generate-css`·`font-registry`·`logos` 2,834줄을 다시 쓸 필요는 없다 —
`consumer-adapter`가 Core를 legacy 호환 모양으로 투영해 그 앞에서 흡수한다.)

### 같이 판단하실 것 — §4 컴포넌트 목록이 사라진다

오늘 넣은 TDS 11개 목록은 Core v2 **투영에서 렌더되지 않는다**. 그래프엔 무손실 보존되지만
(`extensions.dev.oh-my-design.migration.original_segments[6].content`) 화면에서는 빠진다.
지금은 legacy 리더가 보여준다. 컴파일러에 "미측정 컴포넌트 명단" 슬롯을 더하는 건 스펙 변경이라
검토 직전에 하지 않았다.

### 정하시면 도는 명령 — **5단계다 (4단계 아님)**

`--reviewer`는 자유 문자열이고 선례에 고정 관례가 없다. `kwakseongjae`를 제안한다.

```bash
R=.omd/execution/2026-09-17/toss-core-review-r2

# 1. 오너 승인 영수증
node scripts/prepare-design-md-core-review.cjs --approve $R/review-request.json \
  --reviewer kwakseongjae --out $R/owner-review-receipt.json \
  --authority-transition-approved

# 2. 컴파일 (여섯 산출물 원자 트랜잭션)
node scripts/compile-design-md-core.cjs $R/input-graph.json \
  --provenance $R/provenance.json --coverage $R/coverage.json \
  --review-receipt $R/owner-review-receipt.json \
  --migration-report $R/migration-report.json \
  --out-dir .omd/execution/2026-09-17/toss-core-compiled --adopt

# 3. 채택 체크포인트 요청 생성 (두 번째 오너 영수증)
node scripts/adopt-design-md-core.cjs .omd/execution/2026-09-17/toss-core-compiled \
  --prepare-checkpoint .omd/execution/2026-09-17/toss-adoption-checkpoint.json \
  --reviewer kwakseongjae --authority-transition-approved \
  --adoption-target reference-catalog

# 4. 채택
node scripts/adopt-design-md-core.cjs .omd/execution/2026-09-17/toss-core-compiled \
  --project-root . --checkpoint-receipt .omd/execution/2026-09-17/toss-adoption-checkpoint.json \
  --adoption-target reference-catalog

# 5. 리더 소비 확인 — 게이트가 요구하는 증명
#    위 9건을 고친 뒤 /design-systems/toss 와 /builder 실제 확인
```

**두 가지 경로 중 택일:** (가) 위를 직접 `! node …`로 돌리신다. (나) r2의 `DESIGN.md`
미리보기를 읽으신 뒤 채팅으로 "승인"이라고 하시면 제가 `kwakseongjae` 신원으로 돌린다.
영수증 규율의 핵심은 **오너가 미리보기를 실제로 봤는가**이지 누가 타이핑하는가가 아니다.

---

## 02 · `/design-systems` 유지 · 대체 · 제거

### 제 권고: **유지**

`/design-systems/<id>`는 440개 색인 + 유일한 JSON-LD 표면 + builder 진입 CTA를 진다.
`/builder`는 `"use client"`라 SSR·구조화 데이터를 대신 질 수 없다.
"아무것도 아닌" 라우트는 `/reference/<id>`다 — 61줄, `noindex`, 사이트맵 부재,
canonical을 이미 `/design-systems/<id>`로 넘긴다.

### 다만 근거가 반쪽이다 — **측정할 수단이 전부 죽어 있다**

| 채널 | 상태 |
|---|---|
| GA4 | **불가.** 서비스 계정의 GCP 프로젝트 삭제됨 — `Project #95733920708 has been deleted` |
| Mixpanel | **불가.** `HTTP 402 — Your plan does not allow API calls` |
| Vercel Analytics | **미설치.** `web/package.json`에 `@vercel/analytics` 없음 |

착지 세션 수와 `/builder` 도달률을 잴 방법이 현재 없다. → **결정 05** 참조.

**선택지:** (가) 구조 근거만으로 지금 결정한다(권고: 유지). (나) 05를 먼저 푼 뒤 수치로 결정한다.

---

## 03 · advisory("근거 없음") 노출 범위

### 수치

전체 **390/440**이 advisory를 하나 이상 단다. 티어별로 verified 106 · partial 176 · legacy 108 —
즉 **검증된 141건 중 106건(75%)에 "근거 없음"이 붙는다.**

| 코드 | 건수 |
|---|---|
| `motion_value_unsourced` | **261** |
| `component_state_prose_only` | 141 |
| `component_noninteractive_only` | 30 |
| `palette_grounding_low` | 22 |
| `palette_contradicted` | 7 |
| `component_absent` | 6 |
| `token_value_possibly_derived` | 5 |

### 진짜 질문은 "보일까 말까"가 아니다

`motion_value_unsourced`가 261건으로 압도적인데, 오늘 **왜 그런지 밝혀졌다** — 공식 DS를
발행하는 곳 중 그 모션 스케일을 발행하는 데가 **없다**(토스는 자체 질의 엔드포인트로 1차 확인).
이건 레퍼런스별 결함이 아니라 **카탈로그 전역 사실**이다. 레퍼런스마다 "근거 없음"을 붙이면
"다른 데는 근거가 있는데 여기만 없다"로 읽힌다. 사실이 아니다.

### 선택지 (수치로)

| | 표시되는 레퍼런스 | 설명 |
|---|---|---|
| (가) 전량 | **390** | 현행. 192개가 오직 모션 때문에 표시됨 |
| (나) 모션 제외 | **198** | 모션은 카탈로그 전역 주석 1건으로 대체. verified 중 103건 |
| (다) 티어 게이트 | 미산출 | verified만, 또는 legacy만 등 |

**권고: (나).** 모션 261건은 개별 결함이 아니므로 전역 주석으로 한 번 말하고,
레퍼런스별 표시는 실제로 그 레퍼런스에 고유한 198건에만 남긴다.

※ 숫자 혼동 주의 — **261**(모션 값 무출처) / **162**(동일 cubic-bezier 공유) /
**273**(5-토큰 템플릿)은 서로 다른 측정이다.

---

## 04 · 미커밋 작업 트리 — **119건** (128 아님)

세 덩어리로 갈린다. 재논의가 필요한 건 두 번째뿐이다.

1. **오늘 작업 8건 — 스테이징 완료.** 말씀만 하시면 커밋한다. 결정할 것 없음.
   (`AGENTS.md`, `CURRENT_STATE.md`, `JOURNAL.md`, 발견 문서 2건, toss 정본 + 미러 2, 증거 원장)
2. **9/7~9/8 스프린트 잔여.** 2026-09-16에 보류하기로 이미 정하신 것이다.
   가장 큰 덩어리는 `benchmarks/ui-resolve-bench/` 20건(Grok 피벗 벤치), `test/unit/` 6,
   `test-v2/content-runs/` 6, `docs/archive/` 6, `docs/reviews/` 4.
   **질문은 하나뿐:** 보류 스프린트 커밋 1건으로 묶을까, 계속 미커밋으로 둘까.
3. **표류 산출물.** `web/dbg.tmp.mjs`는 디버그 잔재였다. **2026-09-21 삭제됨** — 단일 Toss 문서
   URL을 긁는 일회용 프로브였고 참조하는 곳이 없었다.

---

## 05 · 애널리틱스 복구 〔신규 · 02가 여기 걸려 있음〕

`scripts/analytics/` 5개 스크립트 전부 무동작이다.

- `scripts/analytics/.secrets/sa.json`은 존재하나 **그 GCP 프로젝트가 삭제됐다.**
- Mixpanel은 **플랜이 API를 막는다**(402).

**선택지:** (가) GCP 프로젝트 + 서비스 계정 재생성 후 GA4 속성에 뷰어 부여.
(나) Mixpanel 유료 전환. (다) `@vercel/analytics` 도입. (라) 당분간 계측 없이 간다.

이건 02 하나만의 문제가 아니다 — 2026-06 분석에서 나온 활성화 누수(generate→install_copy 6.7%)
같은 지표를 지금은 **아무도 다시 잴 수 없다.**

---

## 요약 — 지금 답이 필요한 순서

1. **01** — "승인" 한마디면 5단계가 돈다. 9건 테스트 수정은 그 뒤 제 작업이다.
2. **03** — (가)/(나)/(다) 중 택일. 권고 (나).
3. **04-2** — 보류 스프린트를 커밋으로 묶을지.
4. **05** — 계측을 되살릴지, 당분간 없이 갈지.
5. **02** — 05에 달려 있다. 지금 구조 근거만으로 정하실 수도 있다(권고: 유지).
