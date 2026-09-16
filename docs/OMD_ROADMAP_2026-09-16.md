# OMD 실행 로드맵 — 2026-09-16

이 문서는 2026-09-08 스프린트 이후 8일간의 공백을 닫고, 오너가 지정한 새 우선순위
(440 리뉴얼 우선 · 랜딩 와우 보류 · 아프로디테 연계 강화 · CJK 1000 확충 · 스킬 간 테스트 후순위)
를 실행 가능한 트랙으로 재편한다.

근거 보고서 6종은 `docs/research/2026-09-16-briefing/`에 있다. 이 문서의 모든 수치는
그 보고서에서 **실측**된 것이며, 산술 추정은 그렇게 표시한다.

- `core440-report.md` — 440 Core v2 변환 실측 + 배치 설계
- `aphrodite-integration.md` — aphrodite-mela ↔ Core v2 필드 매핑 실측
- `blog-strategy.md` — 콘텐츠 엔진 · CJK 유통 · LLM 가시성
- `cjk-jp-report.md` — JP pool · 후보 79 · `jp:` 레지스트리 67 · 게이트 시뮬레이션
- `cjk-cn-tw-report.md` — CN/TW pool · 만리장성 비대칭 · 도달성 측정 계획
- `cjk-kr-depth-report.md` — KR pool 47 · 만료 발견 · 신규/심화 예산 배분
- `cjk-salvaged-facts.md` — 중단된 첫 실행에서 살린 경쟁 분석 실측

**읽는 순서 주의**: §0(만료)과 §C.7b(방법론 경고)가 나머지의 해석을 바꾼다.

이전 로드맵(`OMD_NEXT_ROADMAP_2026-09-08.md`)의 5트랙은 폐기가 아니라 **재우선순위**다.
ODDLY/랜딩(A·F4)과 벤치(B)는 보류, Core(D)와 콘텐츠(E)가 앞으로 나온다.

---

## 0. 긴급 — verified 티어가 24일 뒤 전량 만료된다

이 항목이 440 리뉴얼보다 앞선다. 세 사실 모두 독립 재검증했다.

**(1) 2026-10-12에 카탈로그는 "0 verified"로 읽힌다.**
140개 `verified_v2`가 전부 2026-07-11~14 **한 배치**로 검증됐고, 근거가 `product-surface`
소스(TTL 90일, `web/scripts/lib/reference-quality.mjs:27-32`)다.
`nextReverifyAt` 실측: **2026-10-09 (10개) · 10-10 (18개) · 10-11 (112개)**.
그날 `source_expired`가 발화하면 140 / 160 / 140 → **0 verified / 300 partial / 140 legacy**.

**(2) 그 티어는 카탈로그에서 가장 쓸모없는 티어다.**
7월 승격은 증거를 더해서가 아니라 **컴포넌트를 지워서** 통과했다.

| 티어 | n | 평균 컴포넌트 | 렌더 가능 타입(10중) | 상호작용 상태 보유 | 평균 claim |
|---|---:|---:|---:|---:|---:|
| verified_v2 | 140 | **3.1** | **2.0** | 9 / 140 | 53.9 |
| partial | 160 | 8.3 | 4.7 | 25 / 160 | 114.5 |
| legacy_snapshot | 140 | 9.6 | 4.9 | 38 / 140 | 122.8 |

기전은 `componentStateGaps`(`reference-quality.mjs:119-129` → `interactive_state_missing` `:216`):
hover/pressed/focus/disabled/error 키가 없는 button·input·tab·toggle이 승격을 막는다.
7월 배치는 상호작용을 수집하지 않는 collector를 썼으므로 **가장 싼 통과법이 컴포넌트를 빼는 것**이었다.
verified 140개 중 **36%가 button을 정의하지 않고**, input은 25%, avatar는 0%다.
`web/references/musinsa/.verification.md`가 직접 인정한다 — *"Interaction coverage is zero."*

**(3) 그런데 고칠 증거는 이미 디스크에 있다 — 그리고 추적되지 않는다.**
`artifacts/reference-evidence/`에 **177개 캡쳐 번들(145MB)**이 있고 140개 verified 전부가 번들을 갖는다.
번들 평균 **49.2개 컴포넌트** vs 출하 파일 **2.9개** — 집필 시 약 **94%를 버렸다**.
`samsung`은 87개 컴포넌트·커버리지 100% 캡쳐에서 **1개**만 실었다.

| ref | 번들 컴포넌트 | 출하 컴포넌트 |
|---|---:|---:|
| naver | 128 | 8 |
| channeltalk | 96 | 5 |
| samsung | 87 | **1** |
| wanted | 85 | 6 |
| hyundaicard | 57 | **1** |
| toss | 56 | 6 |

**위험**: `.gitignore:94`로 제외되어 있고 `git ls-files` 결과 **177개 중 0개가 추적된다**.
CI에도 없고 백업도 없다. 이 디스크를 잃으면 만료 3주 전에 140개를 재캡쳐해야 한다.

**(4) 전환을 따라가는 것은 티어 뱃지가 아니라 컴포넌트 수다.**
수요 상위 140개 중 컴포넌트 ≥5는 **0.499**, <5는 **0.386**.
순위 61~140 구간에서는 *legacy*가 *verified*보다 전환이 높다.
따라서 7월 방식으로 "더 많이 승격"하는 계획은 제품을 나쁘게 만든다.

### 즉시 할 일

| # | 작업 | 기한 | 비고 |
|---|---|---|---|
| U0 | `artifacts/reference-evidence/` 145MB **백업 또는 추적** | 즉시 | 오너 결정 Q7. 나머지 전부의 선행 조건 |
| U1 | 55개 — 번들에 상호작용 증거가 이미 있는 refs를 **재투영**(브라우저 실행 없음) | ~10/09 전 | 재집필이 아니라 큐레이션 |
| U2 | 85개 — 상호작용을 켠 캡쳐 1회 | ~10/09 전 | 실제 브라우저 실행 필요 |
| U3 | 상위 5개 우선: `toss` `karrot` `baemin` `kakao` `samsung` | 최우선 | 순위 1/3/4/5/8, 전체 select의 ~35% |

---

## 1. 현재 상태 — 실측

### 검사

| 검사 | 결과 | 비고 |
|---|---|---|
| root `npm run lint` (tsc --noEmit) | PASS | |
| root `npm test` | 1475 PASS / 1 FAIL / 180 skipped | 아래 |
| web `npm test` | 931 PASS (64 파일) | |
| `test-v2/tools/quality-gate.mjs` | **BLOCKED** — FAIL 3 / UNVERIFIED 2 / REVIEW_PENDING 1 | CI 미연결 |

- 유일한 FAIL은 `test/unit/bench/ui-resolve-autopilot-v2-readiness-generator.test.mjs`의
  **타임아웃**이다. 단독 실행 시 4.9초에 PASS, 전체 병렬 부하에서만 15초 한도를 넘는다.
  기능 결함이 아니라 테스트 위생 문제 — 프로세스를 spawn하는 테스트의 `testTimeout`이 너무 좁다.
- quality-gate의 FAIL 3건은 전부 `landing` 체커 한 곳(render·contrast는 전 칸 PASS)이고,
  `.github/workflows/quality.yml`에 **연결되어 있지 않다**. 랜딩 보류가 릴리스를 막지 않는다.

### 카탈로그

- 440 레퍼런스, 전량 legacy 포맷(YAML frontmatter + 15개 번호 섹션), 평균 26,805 B.
- 포맷 분포: legacy-15 ×415, legacy-16 ×24, legacy-13 ×1.
- 국가: KR 203 · US 109 · TW 63 · JP 43 · UK 12 · CN 5 · IT 2 · FR 2 · DE 1.
- 품질 등급: verified_v2 140 · partial 160 · legacy_snapshot 140.
- `design-md:section` 앵커 보유: **0 / 440**. `## Proof` 블록 보유: **0 / 440**.

### 품질 티어 — 지표 해석 정정

**`evidenceCoverage`는 깊이 gradient가 아니라 이진값이다.** 실측: 0(299개)과 1(141개) 둘뿐.
따라서 "평균 coverage"는 verified_v2 비율을 다시 쓴 것이며 독립적인 깊이 측정이 아니다.
이 문서의 이전 판이 이를 깊이 근거로 쓴 것은 오독이었다.

| 국가 | refs | verified_v2 | partial | legacy | 평균 claimCount |
|---|---:|---:|---:|---:|---:|
| KR | 203 | 67 | 89 | 47 | 93 |
| US | 109 | 43 | 18 | 48 | 107 |
| TW | 63 | 10 | 34 | 19 | 95 |
| JP | 43 | 13 | 12 | 18 | 105 |
| CN | 5 | 2 | 0 | 3 | 67 |

실제 상태는 "CJK가 얕다"가 아니라 **인증 상태와 문서 깊이가 서로 반대로 간다**는 것이다(§0 참조).
TW는 연구가 부족한 게 아니라 **인증이 부족하다** — 63개 중 53개가 `verification_v2_missing`
하나에 막혀 있고, 레거시 토큰 지표(컴포넌트 수확률 100%, 색상 중앙값 14, 문서 28.4kB)로는
카탈로그에서 가장 강한 코호트다.

---

## 2. 병목 구조 — 문은 하나다

신규 레퍼런스 작성 경로가 전부 하드 차단되어 있다:

```
omd:add-reference      CORE_V2_CATALOG_WRITE_BLOCKED
omd:batch-launch       CORE_V2_CATALOG_WRITE_BLOCKED
omd:migrate            CORE_V2_CATALOG_WRITE_BLOCKED
omd:token-backfill     CORE_V2_CATALOG_WRITE_BLOCKED
omd:component-harvest  CORE_V2_CATALOG_WRITE_BLOCKED
```

게이트(스킬 문서상 "T2-2 writer gate") 해제 조건 5가지가 **함께** 떨어져야 한다:

1. graph 기반 Core v2 카탈로그 writer
2. 카탈로그 graph/evidence 스키마
3. registry · quality · 웹 리더 이관
4. legacy dual-read / Core single-write 테스트
5. provider-free `dropped_segments = 0` 마이그레이션 게이트

**따라서 1000개 CJK 확충은 440 리뉴얼의 후속이 아니라 하드 의존이다.**
440을 먼저 하겠다는 판단이 맞다. 그리고 게이트를 여는 것이 440 리뉴얼의 실질적 정의다.

Core v2 스펙(`spec/design-md-core-v2.md` §10)이 정한 대량 이관 5단계 중 현재 위치:

| 단계 | 내용 | 상태 |
|---|---|---|
| 1 | canary 4종(deep/partial/legacy/atypical) | ✅ 격리 리허설 통과 (2026-09-08) |
| 2 | 현재 verified-v2 집합 | ⬜ 140개 |
| 3 | 고수요 레퍼런스 | ⬜ |
| 4 | 나머지 bounded batch | ⬜ |
| 5 | **신규는 Core v2로 직접 작성** | ⬜ ← 1000 확충이 여기서 열린다 |

---

## 3. 트랙 A — 440 Core v2 리뉴얼 (최우선)

### A.1 실측된 사실 세 가지

**(1) 기계 시간은 병목이 아니다.**

| 작업 | 실측 |
|---|---|
| 440개 결정론적 audit | **3.03초**, 440/440 pass, `dropped_segments = 0`, `source_reconstruction_equal: true` 440/440 |
| 6단계 전체 파이프라인 | **384 ms/ref** 직렬 (n=8) |
| `xargs -P8` | **63 ms/ref** (48개 18.43초 → 3.04초, 6.06배) |
| 440개 환산 *(추정)* | 직렬 ≈169초 / 병렬 ≈**28초** |

직렬·병렬 산출물은 48/48 **바이트 동일**(SHA-256 대조). 파이프라인은 결정론적이고 병렬 안전하다.

**(2) 440/440 전량 adopt 불가 — 원인은 도구가 아니라 내용이다.**

비-canary 12개 층화 표본에 실제 파이프라인을 돌린 결과:

- 1차: 12/12 stage 2 실패 — `provenance.decisions must be a non-empty array`
  (마이그레이터의 provenance는 *세그먼트 원장* 스키마, review/compile은 *decisions* 스키마를 요구.
  같은 파일명에 호환되지 않는 두 스키마)
- 2차(리허설 어댑터 투입): 12/12 stage 4 실패 —
  `refusing to adopt a non-conformant Core package: … missing-primary-task`

`primary-tasks` 클레임은 **440개 전부에 없다**
(`scripts/design-md-core-conformance.cjs:415-424`, 게이트 `compile-design-md-core.cjs:704-707`).
마이그레이터는 이를 발명하기를 명시적으로 거부한다(`design-md-core.cjs:522-529`).
추가로 placeholder 39건, `scope kind=product-surface` 누락 22건.

같은 파이프라인을 **이미 집필된 초안**에 돌리면 8/8 PASS.

**(3) Core v2 산출물은 레거시 본문의 무손실 재현이 아니다.**

렌더된 Core v2 `DESIGN.md`는 레거시 대비 **중앙값 21%**(합계 25%)다.
나머지는 `graph.json` 안에 opaque blob으로만 남는다. `rayark` 확인: 15/15 레거시 섹션 제목 소실,
YAML frontmatter 전부 소실.

**그리고 라이브 사이트가 바로 그 둘을 파싱한다** —
`web/src/lib/extract-tokens.ts:601`, `web/src/lib/core/generate-css.ts:382,410`,
`web/src/lib/font-registry.ts:553`, `web/src/lib/logos.ts:2`.
지금 상태의 투영을 정본에 적용하면 `/builder`와 `/reference/[id]`가 깨진다.

### A.2 실제 결정 표면

| | 결정 | 개수 | 성격 |
|---|---|---:|---|
| D1 | 정본 본문을 무엇으로 할 것인가 — 얇은 투영 / 심화 초안 / frontmatter 보존 하이브리드 | 1 | **오너 결정. 나머지 전부를 좌우** |
| D2 | 웹 리더를 frontmatter·번호섹션에서 분리 | 1 | 아키텍처 |
| D3 | stage-1b provenance/coverage 어댑터 (현재 리허설 스크립트에 하드코딩) | 1 | 도구 |
| D4 | 배치 attestation (현재 **엄격히 1:1** → 440회 서명) | 1 | 도구 |
| D5 | 초안 없는 레퍼런스 신규 집필 | **148** | 모델 초안 + 사람 검증 |
| D6 | 기존 초안 294개 보존 검토 | **294** | 사람 검증 |
| D7 | prescriptive placeholder 해소 | 39 | D5/D6 부분집합 |
| D8 | `scope kind=product-surface` 공급 | 22 | D5/D6 부분집합 |

**D6가 조용한 함정이다.** `docs/design-md-weight/migrated/`의 초안 294개는 투영이 아니라
**독립 재작성**이다. 정본 대비 바이트 비 0.61~1.69 (어떤 건 39% 소실, 어떤 건 69% 증가).
초안을 정본 조상과 비교하는 도구가 파이프라인에 **하나도 없다**. 전수 보존 대조가 필요하다.

초안 커버리지:

| | 초안 있음 | 초안 없음 |
|---|---:|---:|
| KR | 134 | 69 |
| US | 72 | 37 |
| TW | 47 | 16 |
| JP | 24 | 19 |
| CN | 4 | 1 |
| 기타 | 11 | 6 |

### A.3 D2 규모 — 웹 리더 이관

두 계층으로 나뉜다.

- **생성기 계층 (4)** — `web/scripts/build-registry.mjs`, `build-reference-quality.mjs`,
  `build-reference-ast.ts`, `src/lib/references/normalize.ts`.
  입력 계약만 바꾸면 되고, 하류의 `registry.generated.ts` / `reference-ast.generated.json`
  소비자는 그대로 둘 수 있다 (AST0 덕분).
- **md 문자열 파서 계층 (5)** — `src/lib/font-registry.ts`(`resolveFontsFromDesignMd`),
  `extract-tokens.ts`, `core/generate-css.ts`, `references/detail-projection.ts`,
  `playground/generate.ts`. 이들은 원본 마크다운을 받아 레거시 섹션/frontmatter를 패턴 매칭한다.
  Core v2 인지 경로가 필요하다.

카탈로그 메타데이터(`id`·`country`·`category`·`homepage`·`primary_color`·`logo`·`verified`·`ds`)는
Core v2 규칙상 본문에 남을 수 없다 → manifest/provenance 사이드카로 이주해야 한다.
이것이 게이트 조건 2번(카탈로그 graph/evidence 스키마)의 실체다.

### A.4 D4 — 배치 attestation 설계 (설계 완료, 미구현)

현재 checkpoint는 패키지 1개의 6개 SHA-256에 1:1로 묶인다
(`adopt-design-md-core.cjs:274-284, 472-490`, 스키마 `additionalProperties:false`).
440개면 서명 440회다.

해법은 해시 결속을 **약화하지 않는다**. 새 sibling kind
`design-md-core-batch-adoption-checkpoint`를 추가해, `request.packages[]`가
`{package_id, source_package_tree_sha256, source_package{6 hashes}}`의 정렬된 벡터를 담고,
`request_sha256`이 **벡터 전체**를 커밋한다. 패키지별 6-해시 검증은 기존 코드를 그대로 재사용한다.
adopt 시 `--package-id`가 필수가 된다.

반드시 실패해야 하는 negative case 14종이 보고서에 명세되어 있다 (엔트리 추가/삭제/전치,
중복 id, target 교체, 배치 receipt를 단일 검증기에 투입 등).

**효과: 440회 서명 → wave당 1회.**

### A.5 트랙 A 실행 순서

| # | 작업 | 선행 | 산출 / 수용 기준 |
|---|---|---|---|
| A1 | **D3 stage-1b 어댑터** — provenance `decisions[]` + coverage `groups/checks` 생성기를 정식 도구로 승격 | 없음 | 12개 표본이 stage 2를 통과하고 stage 4까지 도달 (현재도 stage 4까지는 감) |
| A2 | **D1+D2 동시 결정** — 하나의 질문이다 | 오너(D1) | 결정문 + 웹 리더 이관 설계. D1을 D2 없이 정하면 사이트가 깨진다 |
| A3 | **D4 배치 attestation 구현** | A1 | negative 14종 회귀 통과 |
| A4 | **D6 초안 294개 보존 대조** — 먼저 한다 | A2 | 초안↔정본 의미 보존 diff 도구 + 전수 판정. D5 집필 루브릭이 여기서 교정된다 |
| A5 | **D5 148개 집필** | A4 | 모델 초안 → 사람 검증. AGENTS.md "Unknown means absent" 준수 |
| A6 | **wave 채택** (50개 단위, 배치 receipt 1개) | A3·A4·A5 | 스펙 §10 순서: verified-v2 140 → 고수요 → 나머지. run dir 영구 보존 |
| A7 | **게이트 해제** — 5개 스킬의 `CORE_V2_CATALOG_WRITE_BLOCKED` 해제 | A6 | `omd:add-reference`가 Core v2로 직접 쓰기 (스펙 §10 5단계) |

D6 → D5 순서가 중요하다. 294개 검증이 단위당 더 싸고, 나머지 148개 집필 루브릭을 교정해준다.

기계 시간 ≈28초 대 사람 판단 약 440건. **per-reference 내용 판단이 이 프로젝트의 전부다.**
(보수적으로 D5 10분/건 + D6 5분/건 ≈ 49 person-hours — *추정치, 실측 아님*)

---

## 4. 트랙 B — 아프로디테 연동 (440과 독립, 병렬 가능)

### B.1 핵심 발견 — 연동은 이미 절반 지어져 있다

`kwakseongjae/aphrodite-mela` (Tauri 2, macOS 13+, v0.1.6, Developer-ID 서명·공증,
vanilla-TS 프론트 `src/main.ts` 1,652줄, Rust ~2,000줄, 테스트 70개, 클라우드·모델 없음):

1. 내보내는 `DESIGN.md`가 **Core v2 7개 앵커를 정확한 stable-anchor 문법으로** 이미 방출한다
   (`src/design/contract.ts:33-69`). omd 밸리데이터가 `core-v2` / `structural-core`로 인식.
2. `src/design/omd.ts` — omd `design-system-graph-v2` 리더를 이미 갖고 있다 (테스트 9개).
3. omd 카탈로그의 toss·karrot `DESIGN.md`를 **SHA-256 고정해 번들**한다
   (`src/design/bridge.ts:3-4`). 오늘 대조 결과 **바이트 동일**:
   - `115778c5…c50c32` — `web/references/toss/DESIGN.md`
   - `09df8598…effca087` — `web/references/karrot/DESIGN.md`

즉 두 끝이 서로를 향해 지어졌고 약 15줄 못 미쳐 안 닿는다.

"contract"라 불리는 것이 셋이라는 점에 주의: `aphrodite.contract/1`(MCP),
`aphrodite.tokens/1`(MCP), 그리고 내보낸 `DESIGN.md`. MCP 서버는 정책을 담지 않는
stdio→loopback shim이고, 권한은 `design → connected → delegated`이며 어떤 도구도 방향을 승인하지 못한다.

### B.2 측정된 간극 2개

| 방향 | 무엇이 깨지나 | 실측 |
|---|---|---|
| omd → 아프로디테 | omd DTCG export는 **중첩** 트리, 아프로디테 리더는 `foundations.tokens` 아래 **평면 점표기** 기대 | **10개 중 0개** 읽힘 → 12줄 평탄화 어댑터 투입 시 **7 painted / 3 carried / 0 skipped** |
| 아프로디테 → omd | 7개 섹션 앵커는 있으나 `design-md:claim` 마커 **0개** | `design-md validate` **exit 1**, 7개 실패 → 클레임 블록 7개 추가 시 **exit 0, `level: portable-core`** |

### B.3 반드시 먼저 고쳐야 할 하드룰 위반

`aphrodite-mela/src/design/contract.ts:44`가 `resolveTokens`를 무조건 호출해
시스템이 선언하지 않은 semantic 토큰까지 **렌더러 상수를 사실처럼** 쓴다.
Toss 레퍼런스로 실측: `surface/line/muted/danger`는 정확, 그러나
`success: #187345`, `warning: #a76600`은 아프로디테의 `paintedToday` 상수
(`src/design/tokens.ts:33-34`)가 브랜드 사실로 둔갑한다.

`spec/design-md-core-v2.md:146` "A plausible substitute is never written as a known value"
및 AGENTS.md "Unknown means absent" 정면 위반. 수정은 한 줄:

```ts
${semanticTokens.filter(name => s[name]).map(name => `${name}: ${s[name]}`).join('\n')}
```

앱 UI는 이미 이 구분을 안다 — 인스펙터가 미선언 토큰을 `token-inherited` / "기본값"으로 렌더한다
(`src/main.ts:644`). 지식은 있고 익스포터만 버린다.

**이 수정은 클레임 블록(B.4 슬라이스 3)보다 먼저** 해야 한다. 치환값이 남은 채로 문서를
Portable Core로 만들면 치환에 conformance 도장을 찍는 셈이라 지금보다 나빠진다.

### B.4 실행 순서 (각 슬라이스 독립 출하 가능)

| # | 슬라이스 | 위치 | 비용 | 수용 기준 |
|---|---|---|---|---|
| B1 | **DTCG를 import 가능하게** — omd `REFERENCE_FORMATS`에 5번째 `graph` 추가 (현재 `designmd/tailwind/css/dtcg`) | omd `web/src/lib/references/export-formats.ts` | ~1h | 아프로디테의 **무수정** `importDesignGraph`에 투입해 `painted ≥ 5` |
| B2 | **렌더러 기본값을 사실로 쓰지 않기** | 아프로디테 `design/contract.ts:44` | ~15m | 선언된 4색만 출현, `#187345`/`#a76600` 부재. D2 픽셀 동등성 테스트 계속 통과 |
| B3 | **클레임 블록 7개 방출** | 아프로디테 `design/contract.ts` | ~2h | `omd design-md validate` exit 0, `portable-core`. §4는 산문 유지, anatomy/semantics 합성 금지 |
| B4 | **레퍼런스 브리지 실출하** — 하드코딩 2개 배열을 `https://oh-my-design.kr/<id>/design.md` fetch로 교체 | 아프로디테 `design/bridge.ts` + 모달 | ~0.5d | Karrot 선택 → 팔레트 변경, import 리포트 표시, 상태는 **reference applied**(승인·채택 아님), Export 승인 상태는 Draft 유지 |
| B5 | **fixture 테스트로 계약 고정** | omd `test/unit/` | ~1h | graph 형태 변경이 사용자의 import가 아니라 **omd CI**에서 깨지게 |

B4에서 SHA-256 핀은 **버린다**. 440개로 스케일하지 않으며, 업스트림 재검증 한 번에
"Reference hash mismatch"가 난다. 레퍼런스 자신의 `verified:` 날짜를 신선도 근거로 노출한다.

보류: 컴포넌트/상태 왕복(7-state applicability 필요, 지금 대비 효용 낮음),
아프로디테의 `.omd/system` 사이드카 방출(스펙이 금지 — graph 권위를 거짓 주장하게 됨),
두 제품 간 MCP 브리지(파일이 올바른 경계).

### B.5 전략적 평가 — 솔직하게

- **omd가 얻는 것**: (a) 없던 **렌더링 소비자** — `/builder` 프리뷰는 *레퍼런스*를 렌더하지
  사용자의 제품을 렌더하지 않는다. (b) **반증** — 코드가 아니라 스펙을 읽고 만든 첫 독립 구현체이고,
  이미 문제를 찾아냈다(`color.v2-` 네임스페이스 접두 문제로 0/10 매칭). (c) 438/440이 외부
  렌더러의 토큰 모델로 파싱된다는 것은 어떤 내부 테스트보다 강한 카탈로그 주장이다.
- **아프로디테가 얻는 것**: 수작업 2개 대신 **440개 실제 브랜드 시스템**,
  직접 쓰지 않아도 되는 **밸리데이터**(앱이 "OmD 전체 규격 검증은 아직 연결되지 않았습니다"라고
  스스로 인정 중, `src/main.ts:1071`), 그리고 다운스트림 신뢰.
- **비대칭**: 아프로디테가 omd를 더 필요로 한다. omd에게는 load-bearing이 아니다.
  다만 소유자가 같으므로 협상이 아니라 자원 배분 문제다.
- **나쁜 아이디어가 되는 조건**: 두 레포 스키마 churn(graph v3가 아프로디테를 조용히 깨뜨린다 —
  리더가 throw하지 않고 `read: 0`을 반환), 해시 핀을 440개로 확대, 승인 게이트 혼동
  (아프로디테의 `approvedFingerprint`는 *시각 승인*, omd의 adoption receipt는 *권위 이전* — 섞으면
  워크벤치 import가 조용히 프로젝트 디자인 권위가 된다), 1인 2레포 유지보수 비용.

**이 트랙은 440 마이그레이션을 기다리지 않는다.** 아프로디테의 마크다운 경로가 이미
438/440에서 동작한다. 트랙 A와 완전 병렬이다.

---

## 5. 트랙 C — CJK 확충

근거: `cjk-jp-report.md`(79개 후보) · `cjk-cn-tw-report.md` · `cjk-kr-depth-report.md` ·
`cjk-salvaged-facts.md`.

### C.1 경쟁 지형 — "아무도 CJK를 안 한다"는 더 이상 사실이 아니다

- **getdesign.md** (VoltAgent): sitemap `/design-md/*` **566건** + 브랜드 페이지 85건.
  GitHub 레포 74개 slug 중 **66개가 우리 id와 겹친다** — 서구권 꼬리는 사실상 같은 집합.
  **566건 중 CJK slug 0.** 우리 카탈로그 안에서도 교차 확인된다: JP 레퍼런스의
  `**Tier 2 sources:**` footer가 전부 miss를 기록한다(`abema`·`rakuten`·`nintendo`·`dmm`·
  `mercari`·`recruit`·`sony`·`toyota` 모두 NOT_FOUND).
- **Refero**: 스크린샷 라이브러리(150K+ 화면) + DESIGN.md 카탈로그.
  "2,000+" 주장, sitemap 실측 **1,290**. 공식 MCP 유료 전용(월 8,000 호출).
- **`getdesign.kr` / ko-design-md — 신규, 한국 네이티브.** 2026-09-16 확인 시 live,
  제목 "한국 서비스 디자인 시스템 카탈로그 | ko/design.md". KR 21건, 같은 DESIGN.md+tokens 전달 방식,
  **Claude 플러그인으로 배포**. 우리가 KR에서 10배 크지만 무주공산은 끝났다.

**함의**: 모아트의 근거를 "CJK를 한다"에서 **"깊이와 증거로 한다"**로 옮겨야 한다.
볼륨 경쟁은 이제 복제 가능하다.

### C.2 정정 — proof gate는 `regional-sources.yaml`을 읽지 않는다

이전 판에서 "JP/CN 확충은 `spec/regional-sources.yaml` 확장이 선행되어야 한다"고 썼다. **틀렸다.**

실측: 게이트를 구현하는 것은 `web/__tests__/catalog-integrity.test.ts:204-209`이고,
"brand-owned regional"은 allow-list 조회가 아니라 **negative host filter**다 —
`NON_REGIONAL_HOSTS = /getdesign\.md|refero\.design|google\.com\/s2/i` (`:36`).
즉 이 셋만 아니면 어떤 URL이든 regional로 통과한다. 그리고 코드 중 어느 것도 그 YAML을 로드하지 않는다
(참조는 CHANGELOG·`.verification.md` 산문과 husky 경로 목록뿐).

따라서:
- YAML을 JP/CN으로 확장하는 것은 **탐색(discovery)에는 도움**이 되지만 **CI가 받는 것을 바꾸지 않는다.**
- JP/CN을 실제로 게이트하려면 `catalog-integrity.test.ts:204`의
  `entry.country === "KR" || entry.country === "TW"`를 고쳐야 한다.
- 부수 발견 — **게이트 자체가 약하다.** 회사에 *관한* Zenn/velog 글도 현재는 "brand-owned"로 통과한다.
  JP/CN을 추가하기 전에 이 판정을 강화하는 편이 낫다.
- 지금 CN refs는 게이트 대상이 아니라 **검사받지 않고 통과한다** — 이게 더 나쁘다.

### C.3 시장별 정직한 상한

| 시장 | 현재 | Tier 1 신규 여력 | 현실적 신규 | 판정 |
|---|---:|---:|---:|---|
| **JP** | 43 | **14~22** (well 거의 마름) | **115~160** | 성장은 Tier 2 브랜드 아이덴티티에서 온다. 디자인 시스템이 아니다 |
| **CN** | 5 | 29 net-new (11개 회사에 집중) | **+30에서 중단** | 공급으로는 yes, 유입으로는 no |
| **TW** | 63 | **3~6** (Ant Design 급 없음) | **0 권장** | 예산을 깊이로 돌린다 |
| **KR** | 203 | **4 확인**(첫 결론 "0"은 어휘 탓 오류) | **47~80** | 편중 해소 + identity/CI 어휘 재탐색 |

**1000이라는 숫자에 대한 정직한 답**: CJK만으로 방어 가능한 증거 품질을 유지하면
440 + (JP 115~160) + (CN 30) + (KR 47~80) + (TW 0) ≈ **630~710**이다.
⚠️ **이 상한은 잠정이다 — §C.7b 참조.** KR에서 "identity/CI 어휘" 재탐색이 Tier 1을
0에서 4로 바꿨으므로, JP·TW·CN도 같은 재탐색 전에는 확정으로 쓰지 않는다.
**1000은 CJK 단독으로 도달하지 않는다.** 도달하려면 Tier 3 볼륨(게이트가 비싸게 만들고
품질이 얕아지는 구간)이거나 비-CJK 확장이 필요하다. 목표를 숫자에서 **커버리지 품질**로 옮길 것을 권한다.

### C.4 JP — 결함이 뒤집혀 있다

JP는 카탈로그에서 **두 번째로 인증률이 높은 시장**이다(13/43 = 0.302, KR 0.330과 사실상 동률,
TW 0.159의 두 배). 문제는 다른 데 있다 — **깊은 회사일수록 얕은 레퍼런스를 갖는다.**

- verified 13개: au·freee·line·mercari·mixi·mynavi·panasonic·recruit·sakura-internet·
  softbank·sony·teamlab·toyota — 증거는 완전한데 claim이 적다(sony 23, teamlab 23, toyota 34).
- legacy/partial 30개: 증거 0인데 claim이 많다(kintone 218, paypay 202, sansan 202,
  muji 196, studio 192, pixiv 173, zozotown 168).

그리고 **공개 디자인 시스템이 가장 강한 일본 기업들**(SmartHR, Money Forward, Cybozu, PayPay,
Ubie, pixiv, Sansan, ZOZO, Studio)이 전부 증거 0 버킷에 있다. JP 예산의 첫 지출은 신규가 아니라
**이 30개 중 상위 회사에 증거 그래프를 붙이는 것**이다.

후보 **100개 + 검증된 예비 21개(총 121)**가 5개 wave로 정리되어 있고, 440개 기존 id와
프로그램적으로 대조해 **충돌 0 · 내부 중복 0**을 확인했다
(`plaid`가 US 핀테크로 선점되어 PLAID 日本은 제품명 `karte`로 슬러그).
구성 T1 14 / T2 44 / T3 42, 16개 카테고리. Wave 5가 앞선 4개 wave가 덜 덮은 버티컬을 채운다 —
healthcare(M3·MICIN·CureApp·Medley·Kakehashi), design-tools(Clip Studio Paint·MediBang·Peraichi),
backend-devops(Xserver·Classmethod·IIJ), VTuber(hololive·ANYCOLOR), 그리고 닛산·마쓰다.

**Tier 1 실사 결과 — 14개를 live 확인했다**: LY Corporation(design-hub.lycorp.co.jp),
三菱電機 Serendie, DENSO, RAKSUL kamii, SORACOM, 東京科学大学, kubell(Chatwork),
Tuqulore Jumpu UI, CARTA/fluct INGRED UI, kaonavi sugao, 一休, 東京都, Another works, Qiita.
제외와 사유도 기록됐다: Yahoo! SAYA(사내 전용), READYFOR(사내), Visional Polyphony(공개 URL 없음),
Uzabase FALCON(사이트 404). **Wave 1은 사실상 일본에 남은 공개 디자인 시스템의 전량이다 — 2차 Tier 1 wave는 없다.**

**Tier 1 주장 4건이 기각됐다 — 추가만큼 중요하다.** Yahoo! JAPAN "SAYA"는 명시적 **사내 전용**,
READYFOR "Elements"도 동일, Visional/BizReach "Polyphony"는 블로그만 있고 **공개 URL 없음**,
Uzabase/SPEEDA "FALCON"은 `designsystem.uzabase.com`이 **404**(제가 직접 확인)이고 Figma 파일만 남았다.

그리고 에이전트가 **자기 리서치를 상대로 정직성 교정을 한 건 했다** — 두 병렬 패스가 로고/브랜드
사용 가이드라인을 Tier 1로 올렸으나, 브리프 정의상 그것은 Tier 2다. Qiita·Nulab·Yappli·Xserver·
hololive를 Tier 1 상한에서 강등했다. **상한이 부풀지 않았다.**

**`speeda` 정본에 후속 조치가 필요하다.** 우리 레퍼런스는 FALCON을
*"일본에서 가장 철저하게 문서화된 엔터프라이즈 B2B 디자인 시스템 중 하나 — 색·보이스&톤·컴포넌트·
템플릿이 문서화"*라고 서술한다(`web/references/speeda/DESIGN.md:59, 330`).
죽은 URL을 **인용하지는 않는다**(Tier-1 footer에 그 주소가 없다). 문제는 다른 것이다 —
공개 문서가 존재하지 않는 시스템에 대한 **출처 없는 최상급 서술**이 남아 있다.
"Unknown means absent" 기준으로는 링크 문제가 아니라 **주장 문제**이고, JP 심화 10건에 포함시켜야 한다.

**게이트 시뮬레이션이 정확한 숫자를 줬다**: JP를 `applies_to`에 넣으면 **정확히 10개 ref가 깨진다.**
전부 같은 이유(brand-owned Tier-1 URL이 1개, 2개 필요)이고 그중 8개는 두 번째 URL이 이미 확보돼 있다.
JP 게이트는 "위험한 변경"이 아니라 **10건짜리 작업**이다.

**`jp:` 블록은 113개 brand-owned surface(전부 오늘 200 + 렌더 신원 확인) + discovery 14개**로 준비됐고,
JP 특유의 함정을 위한 세 번째 버킷 `brand_operated_3p`(회사가 운영하는 Zenn/note publication)을 제안한다.
관련해 게이트 구멍이 하나 더 확인됐다 — 현재 `NON_REGIONAL_HOSTS`는 맨 `note.com` URL을 brand-owned로 통과시킨다.

**이 버킷이 선택이 아니라 필수인 이유가 나왔다.** SODA/SNKRDUNK · en-japan · Studist · Ubiregi ·
Smartround · Atrae · Legalscape는 **브랜드 도메인에 기술 표면이 아예 없다** — 1차 기술 문서가
오직 Zenn/note에만 존재한다. 엄격한 `regional_min` 아래에서 이들은 **영원히 게이트를 통과하지 못한다.**
버킷 없이 JP 게이트를 켜면 이 회사들을 카탈로그에서 구조적으로 배제하게 된다.
(실무 주의: Zenn publication은 `zenn.dev/p/<handle>`로 해석된다. `zenn.dev/<handle>`이 아니다.)

**JP 정본의 실제 결함 2건 (에이전트 주장을 직접 재검증한 결과, 표현을 낮춤):**

① **`ds:` 블록이 43개 중 7개에만 있다** — au · digital-agency-jp · freee · line · money-forward ·
smarthr · ubie. `spindle`·`pepabo`는 homepage 자체가 디자인 시스템이라 별도 블록이 필요 없다.
나머지 중 pixiv · paypay · sansan · zozotown · cybozu · kintone · goodpatch · speeda · wantedly ·
studio · timee · layerx는 블록이 없다 — 이들이 실제로 공개 DS를 갖는지 대조하는 것이 JP 심화의 1순위다.
*(에이전트는 "pepabo와 spindle만 인용한다"고 했으나 이는 부정확하다. smarthr는 `smarthr.design`을 정확히 인용한다.)*

② **폰트 토큰이 스택의 첫 항목만 남긴다** — `smarthr`/`smartnews`/`pixiv`가
`family: { sans: "system-ui" }`로 기록돼 있다. **이것은 날조가 아니다.** 산문에는 실측 전체 스택이 있고
(`smarthr:133` = `system-ui, -apple-system, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif`),
pixiv는 "고유 브랜드 서체 없음"을 검증된 사실로 명시한다(`:149`). 문제는 토큰이
**CJK 서체(Hiragino Kaku Gothic ProN · Meiryo · Noto Sans)를 잘라낸다**는 것 — 일본 레퍼런스에서
정작 정보값이 있는 부분이다. 하드룰 위반이 아니라 **충실도 문제**이고, JP 심화에서 고칠 대상이다.

**깊이 목록 정제.** `rakuten`은 이미 `rakuten.design`과 브랜드 페이지를 둘 다 인용한다 —
결함은 출처가 아니라 v2 증거 그래프 부재이므로 깊이 목록에서 뺀다. 반대로 `verified_v2` 3건이
1차 디자인 표면을 누락하고 있어 다음 재검증 때 접어 넣는다:
`mercari` → `design.mercari.com`, `panasonic` → `panasonic.net/design/`, `sony` → `research.sony`.
`pixiv`는 github.io 경로보다 자사 도메인 `charcoal-web.pixiv.design`이 낫다.

**JP 실행 순서**: `jp:` 레지스트리 + `applies_to` + `brand_operated_3p` → 10개 ref 깊이 보정(`speeda` 포함) → Wave 1 개방.

> **§C.7b를 한쪽으로만 읽지 말 것.** KR 재탐색은 증거를 **추가**했지만, JP 후속 패스는 Tier 1 주장 4건을
> **기각**하고 5건을 강등했다. 교훈은 "모든 상한이 낮게 잡혔다"가 아니라 **"단일 패스는 양방향으로 틀린다"**이다.
> 재탐색은 상한을 올릴 수도, 내릴 수도 있다.

### C.5 CN — 공급으로는 yes, 유입으로는 no

만리장성은 **비대칭**이고, 기전이 중요하다 — **중국은 들어오는 트래픽을 거르지, 나가는 트래픽을 거르지 않는다.**
그래서 검증은 막히지 않는다.

| | 본토 중국 |
|---|---|
| 우리가 CN 브랜드를 **검증**할 수 있나 | **가능.** 37/37 surface가 실제 HTML 반환(2026-09-16, 상태코드가 아니라 내용까지 확인) |
| 본토 사용자가 제품을 **소비**할 수 있나 | **미측정.** "아마 불가"가 아니라 **아무도 재본 적이 없다** |

`alipay`의 기존 `.verification.md`가 CN 레퍼런스 파이프라인이 end-to-end로 통과함을 이미 증명한다.

유입 쪽은 이렇다: Vercel 자체 KB가 본토 PoP 부재를 확인하고, GreatFire에서 `vercel.app` URL이
**153/153 차단**된다. 그러나 실제 중국 내 OONI 프로브 1건은 그 차단이 **SNI/호스트명 기반**임을 보여준다.
`oh-my-design.kr`는 다른 호스트명이고 다른 anycast prefix에 있으며 **한 번도 측정된 적이 없다.**

> **이전 판 정정.** 이 문서와 구두 보고에서 본토 유입을 "아마 불가"로 적었다. 근거가 없다.
> 정확히는 **미지**다. 측정 전까지 어느 쪽으로도 계획을 세우지 않는다(C3).

**그럼에도 yes인 이유**: Tier 1 자료가 아시아 최고 수준이고(Ant Design·Arco·TDesign·Semi —
공개된 값·컴포넌트 명세·토큰 시스템), **Tier 1 CN 레퍼런스가 Tier 3 KR 레퍼런스보다 집필이 싸고
근거가 단단하다.** 그리고 **구매자는 중국에 없다** — 중국향/중국풍 제품을 만드는 한국·대만·일본·
싱가포르·미국 개발자가 이걸 필요로 하고, 그들은 Vercel에 잘 닿는다.
도달성 문제는 **누가 카탈로그를 볼 수 있는가**를 제약하지 **누가 그것을 필요로 하는가**를 제약하지 않는다.

**Tier 1 실사 최종: 31개 live, 30개 net-new, 13개 모회사** — 전부 2026-09-16에 열어
상태코드가 아니라 **내용까지 확인**했다. 신규 발견 2건: KDesign(`kingdee.design`), Alibaba Cloud Design.

**+30에서 중단.** Tier 1을 거의 전부(30 net-new) 가져오고 Tier 2는 명백한 이름만 얇게,
**Tier 3는 도달성 측정 전까지 아예 쫓지 않는다.** 5 → 35로 가면 전체 pool 전략 가치의 ~90%를 잡는다.

### C.6 TW — 볼륨이 아니라 인증

TW는 연구가 부족한 게 아니다. 63개 중 **53개가 `verification_v2_missing` 하나**에 막혀 있다.
레거시 토큰 지표로는 카탈로그 최강 코호트(컴포넌트 수확 100%, 색상 중앙값 14, 문서 28.4kB) —
모든 레거시 깊이 지표에서 **KR과 US를 이긴다.**

**그리고 7월의 컴포넌트 삭제 패턴이 TW에도 그대로 있다**: TW의 "최고" 10개가 컴포넌트 **2.3개**를 싣는데
`partial` TW는 **8.1개**를 싣는다. 7월 방식으로 나머지 53개를 승격하면 같은 손상이 53번 반복된다.
게다가 **TW verified 10개 전부 + CN 2개가 2026-10-11에 만료된다**(§0).

권장 배분은 **깊이:볼륨 ≈ 2:1**이다.

다만 **KR의 "증거가 이미 디스크에 있다" 할인은 TW에 적용되지 않는다** —
177개 번들 중 TW는 **11/63**뿐이다. 나머지 52개는 브라우저 실행이 새로 필요해
신규 레퍼런스 비용의 60~70%가 든다.

그래서 판단 기준은 비용이 아니라 **단위당 가치**이고, 거기서는 기존 63개가 이긴다 —
이미 출하된 63개의 약속이 카탈로그에서 가장 약한 인증 상태에 있고, 25일 뒤엔 *전부* 미인증이 된다.
TW는 수요의 2.2%이고 전환 0.230으로 최하위다. **신규 TW는 추가하지 않는다.**

### C.7 KR — 우물은 마르지 않았다 (자기 정정)

**첫 결론("Tier 1 고갈")은 틀렸고, 원인이 중요하다.** "디자인 시스템"으로만 검색했기 때문이다.
한국 대기업은 같은 급의 토큰 문서를 **"our identity" / "CI 가이드"** 아래에 낸다. 키워드가 안 걸린다.

직접 재검증한 Tier 1 4건 (모두 카탈로그에 **없음**, URL 실사 200):

| 후보 | 근거 | 내용 |
|---|---|---|
| **LG전자** | `lg.com/global/our-identity/design-system/` | 문자 그대로 *Design System* 제목. "Emotionally Intelligent", 5개 코어 폼, static↔fluid, Hero/Connect/Focus 모드, Logo/Color/Typography/Voice 하위 페이지 |
| **아모레퍼시픽** | `design.amorepacific.com/en/ci-guideline` | Amore Blue `#1F5795`, Pacific Blue `#001C58`, Gray `#7D7D7D`, Arita 서체, 로고 오용 6규칙 |
| **서울시** | 「서울공공디자인가이드라인2020」 PDF | — |
| **위메이드** | 브랜드 플레이북 v1.5 | `#825ff0`, InfinitySans 역할별, 5원칙 |

아모레퍼시픽은 처음에 **Tier 3 "CI kit 미공개"**로 분류됐었다 — 기업 사이트만 받아보고
디자인 서브도메인을 안 열었기 때문이다. 후보는 32 → **47개**로 늘었고 440개와 중복 없다.
gov/finance 섹터 패스가 `kt`·`korail`·`nhis`·`nonghyup`·`samsungfire`·`emart`를
Tier 3 → Tier 2로 올려 정정했다(22개 URL 중 20개 200).

Tier 2/3의 **카테고리 편중은 그대로**다: `government` **1개**, travel 1, entertainment 2,
developer-tools 3 — consumer-tech는 57.

### C.7a 중복 원칙 — 이미 수록된 시스템의 인스턴스는 새 레퍼런스가 아니다

`gov24`·`hometax`·`work24`·`epost`는 후보에서 **철회됐다.** 이들의 UI가 곧 KRDS 표면이고
KRDS는 이미 카탈로그에 있다 — 추가하면 같은 시스템을 다시 문서화하는 것이다.
`nhis`는 이 반론을 통과해 살아남았다(직접 열어보니 KRDS 스타일이 **아니다**).
또 한국 병원 중 1차 디자인 문서를 공개하는 곳은 없어 해당 후보군은 제거됐다 — **liveness는 근거가 아니다.**

이것은 후보 선별 규칙으로 승격할 가치가 있다. 카탈로그의 실제 실패 양식이다.

### C.7b 방법론 경고 — 이 경고는 JP·TW·CN에도 적용된다

KR 정정 3건이 **전부 같은 방향**이었다: 단일 검색이 증거를 과소 보고했다.
따라서 이 리서치 묶음의 모든 "찾아봤는데 없다"는 **잠정으로 취급해야 한다.**

그리고 이것은 §C.3의 상한을 직접 흔든다. JP 상한(Tier 1 14~22)은 「デザインシステム」 중심 검색에서,
TW 상한(Tier 1 3~6)도 같은 방식에서 나왔다. 일본·대만 기업 역시
「ブランドガイドライン」「VI規定」「コーポレートアイデンティティ」/「品牌識別」「CI規範」 아래에
같은 급의 문서를 낼 가능성이 크다. **JP·TW·CN에 대해 KR과 동일한 "identity/CI 어휘" 재탐색을 한 번씩 돌리기 전에는
615~690이라는 합산 상한을 확정으로 쓰지 않는다.** 상한은 올라갈 가능성이 높다.

### C.8 예산 배분 — 신규 25% / 심화 75%

두 분기 동안. **Phase 0(30일)은 신규 0%**다. 근거 셋:

1. **수요는 멱법칙**이다 — 상위 10개가 전체 select의 41.3%, 상위 100개가 76.9%.
   꼬리 560개를 채워봐야 ~10%를 산다.
2. **전환을 따라가는 건 컴포넌트**지 티어 뱃지가 아니다(§0-4).
3. **proof gate가 싼 볼륨을 출하 불가능하게 만든다.** 반대로 심화는 게이트가 받도록 설계된 바로 그 작업이다.

### C.9 트랙 C 선행 작업

| # | 작업 | 비고 |
|---|---|---|
| C1 | `catalog-integrity.test.ts:204`의 국가 게이트 판정 강화 + JP/CN 포함 | YAML이 아니라 여기가 진짜 게이트 |
| C2 | `spec/regional-sources.yaml`에 `jp:`(67개 확보) / `cn:` 추가, `tw:`·`kr:` 확장 + `brand_operated_3p` 버킷 | 탐색 개선 (CI 동작은 안 바뀜) |
| C6 | **JP·TW·CN "identity/CI 어휘" 재탐색 1회** — KR에서 Tier 1을 0→4로 바꾼 그 패턴 | §C.3 상한 확정 전 필수 |
| C7 | 후보 선별 규칙에 **중복 원칙** 추가 — 이미 수록된 시스템의 인스턴스는 새 ref가 아니다(§C.7a) | KRDS/gov24 사례 |
| C8 | **출처 신원 검증 규칙**을 후보 파이프라인에 넣기 (§C.10) | `regional-sources.yaml` 오염 방지 |
| ~~C9~~ | ~~기존 440개의 GitHub org 신원 감사~~ | ✅ **완료 — 깨끗하다.** §C.10 하단 |

### C.10 출처 검증 실패 양식 — 상태코드는 신원이 아니다

세 개의 독립 리서치 패스가 **같은 실패 양식에 각각 걸렸다**. 전부
`spec/regional-sources.yaml`에 들어갈 뻔했고, 전부 HTTP 200이었다.

**근본 원인 하나**: GitHub은 **존재하는 모든 계정에 200을 반환한다.** 그럴듯한 핸들은
상태 검사를 통과하면서 남의 것일 수 있다. 직접 재확인한 실제 사례:

| 인용된 URL | 실제 정체 (렌더된 이름) | 올바른 출처 |
|---|---|---|
| `github.com/smarthr` | `smarthr` — 이름 없는 계정, repo 1개 | **`github.com/kufu`** → "SmartHR, Inc.", repo 59개 |
| `github.com/zozo-tech` | `zozo-tech` — 빈 계정, repo 0개 | **`github.com/st-tech`** → "ZOZO, Inc.", repo 35개 |
| `github.com/advantech` | **바닥재 회사** | 연구산업 Advantech 아님 |
| `github.com/synology` | 조직 설명에 **"Unofficial"** 명시 | 1차 출처 아님 |

**규칙: 상태코드가 아니라 렌더된 신원을 확인한다.** 이름이 맞는다고 주체가 맞는 게 아니고,
200이 뜬다고 1차 출처인 게 아니다. `note.com/smarthr_design`이 그럴듯한 채로 404인 것과 같은 부류다.

CJK 전용이 아니므로 후보 선별 규칙에 상시 포함한다.

**기존 440개 감사 결과 — 이 양식은 정본에 없다.** 정본이 인용하는 **고유 GitHub org 64개를
전부 받아 렌더 신원을 확인했다**(fetch 실패 0). 브랜드와 무관한 계정, 스쿼팅, "Unofficial" 표기는
**하나도 발견되지 않았다.** 표시명이 없어 제목이 핸들과 같은 23개는 전부 `vercel`·`jetbrains`·
`toss`(48 repos)·`ridi`(115)·`nhn`(107)·`spoqa`(101)처럼 핸들 자체가 정본 org인 경우였다.

오히려 정본이 이미 이 규율을 적용하고 있다 — `web/references/bunjang/DESIGN.md:356`은
*"`https://github.com/bunjang` → 200 but **org has no public repos / members / packages**"*라고
관찰을 그대로 기록한다. 200을 근거로 승격하지 않았다.

즉 이 실패 양식은 **리서치 단계에서 발생하고 집필 단계에서 걸러진다.** 그래도 규칙으로 못박는 이유는
100개 신규 후보가 그 리서치 단계를 새로 통과해야 하기 때문이다.

### C.11 파생 트리 드리프트 — 확인했으나 작업 아님

`packages/mcp/data/references/`가 **400개**로 `web/references`(440) 대비 **40개 뒤처져 있고,
그 40개가 전부 `verified_v2`**다(TW 10 · JP 10 · US 10 · KR 10 — 마지막 배치가 미러링되지 않았다).
TW 기준으로는 verified 티어 10개 **전량**이 빠져 있다.

**다만 이 트리는 의도적으로 동결된 아카이브다** — `packages/mcp/package.json`이
`"private": true` + *"Archived catalog MCP transport. Retained for history; no longer built,
published, or required"*, README는 deprecated, `spec/v2-execution.md:41`은 릴리스 게이트에서 제외한다.
웹 `/api/mcp`도 410으로 은퇴했다. **따라서 드리프트는 결함이 아니라 예상된 상태이고 고칠 일이 아니다.**

실제 잔여 리스크는 문서 쪽이다: `AGENTS.md`의 Repository layout이 아직 이 트리를 파생 트리로 서술해
미래의 에이전트가 "고치려" 들거나 신뢰할 수 있다. **아카이브임을 그 줄에 명시하는 것**이 조치다.
| C3 | 본토 도달성 측정 | 보고서 Part 5 방법. 결과 전까지 CN Tier 3 금지 |
| C4 | `meituan` / `mtd.meituan.com` 중복 정리, `minimax`를 CN으로 재분류 | CN wave 1 전 |
| C5 | JP 증거-0 상위군(SmartHR·Money Forward·Cybozu·PayPay·pixiv·Sansan·ZOZO·Studio) 증거 그래프 | 신규보다 우선 |

---

## 6. 트랙 D — 콘텐츠 엔진

### D.1 발행 블로커 = 기술이 아니라 오너 결정

`.omd/execution/2026-09-08/sprint90/content/`의 패키지는 완성 상태다 —
배민/Core ko·en 4편, SVG 도표 2종, 예제 HTML, `publication-manifest.json`
(`status: prepared-not-published`). 격리 렌더러 QA 8화면 통과.

남은 것은 두 가지뿐이다:

1. **오너 결정** — 방향·문장 승인 + **발행일 확정**. 초안 4편의 frontmatter가 `date: "2026-09-08"`
   이므로 늦게 발행하면 4개 파일의 날짜와 manifest의 8개 SHA를 재기록해야 한다.
2. **기계적 복사** — `web/public/blog-assets/`가 아직 없다. 글+에셋을 함께 옮기고
   canonical/hreflang/다운로드 검사를 프로덕션 트리에서 재실행 (~10분).

부수 관찰: 초안 2편은 `naver-d2-engineering`(합니다체)로 쓰였는데 기존 라이브 글은 해요체
(`toss-tech-design`)다. 블로그 문체를 하나로 정하고 playbook에 적는 편이 낫다 — 취향 결정이지 게이트는 아니다.

### D.2 콘텐츠 엔진 — 척추는 "포맷 C"

후보 3개를 비교한 결과:

| 포맷 | 편당 신규 사람 리서치 | 기존 근거만으로 조립 | `/builder` 유인 | 판정 |
|---|---|---|---|---|
| A. 근거 경계 에세이 (배민 글) | **많음** (브랜드당 1~2일) | 부분 | 약~중 | 월 1회 플래그십. 인용과 신뢰를 버는 포맷 |
| B. 레퍼런스 진화 diff | 중간 (0.5일) | 5개는 가능 | 중~강 | 두 번째 레인. 가장 브랜드다운 신뢰 서사 |
| C. **한 질문 · N 브랜드 · 측정값만** | **없음** | **전부** | **가장 강함** | **척추. 주 1회 KO+EN** |

포맷 C 예시: **"한국 핀테크 앱 14곳의 기본 버튼 — 높이·라운드·글자 굵기, 측정한 표면과 날짜까지"**

핵심은 표의 열에 `surface_id`(마케팅/제품/DS 문서) · `method` · `captured`를 함께 싣는 것이다.
클레임이 없는 브랜드는 **행을 남기고 칸을 비운다** — "Unknown means absent"를 화면에서 보이게 만드는 것.
행마다 `/builder?…&ref=<id>` 딥링크와 `/<id>/design.md`가 붙어 N 브랜드 = N개 진입점이 된다.

같은 생성기가 신규 리서치 없이 만들어내는 다른 헤드라인:
일본 13곳의 시스템 CJK 스택 / 141개 브랜드의 본문 크기·행간 국가별 차이 /
primary 색 85개의 명도·채도 분포 / spacing이 4의 배수가 아닌 브랜드 / 대만 10곳의 primary-action.

파이프라인(새 코드는 표 생성기 ~150줄 하나뿐):

```
오너 브리프 5줄 → 표 생성기(reference-verification.generated.ts 읽음)
  → omd:kr-writer(toss-tech-design) → omd:humanize(ko)
  → omd:locale-adapter → en (+ ja/zh-TW는 브랜드 집합에 따라)
  → omd:slop-audit + omd:designer-review (실제 route)
  → omd:final-qa (FAIL 0) → web/src/content/blog/<slug>/ 복사 → 커밋(오너) → 배포
```

`table.json`을 포스트 폴더에 함께 체크인해서, 재실행 시 산문이 데이터와 여전히 일치하는지 증명 가능하게 한다.

리듬: 척추 주 1편(KO+EN), 진화 월 1편, 에세이 월 1편 이하.
**척추 2편이 라이브가 되기 전에는 에세이 레인을 시작하지 않는다** — 블로그가 두 번 접힌 지점이 거기다.

### D.3 CJK 유통 — 솔직한 순위

1. **KR** — velog + GeekNews 주간, 요즘IT·brunch는 에세이. `act_handoff`가 움직일 곳.
2. **JP** — 척추 글은 Zenn Publication, 에세이는 note.com. 43개 refs면 JP 브랜드 시리즈가 되고 JA adaptation 경로는 이미 있다.
3. **TW** — 브랜드 집합이 대만일 때만 Medium zh-TW. 그 외엔 2027 鐵人賽까지 없음.
4. **CN** — `README.zh-CN.md`만 (현재 없음). WeChat 订阅号은 해외 법인에 닫혀 있고,
   Zhihu는 해외 번호 바인딩이 불안정하며, **본토에서 Vercel 도달성이 불안정해 `/builder` 딥링크가 죽을 수 있다.**

CN의 마지막 항목은 유통 문제가 아니라 **제품 문제**다. 중국 독자를 카탈로그로 데려와도
`/builder`에 도달하지 못할 수 있다. CJK 확충에서 CN 비중을 키우기 전에 이 도달성을 먼저 확인해야 한다
(트랙 C 선행 항목).

### D.4 LLM 가시성 — 시간당 레버리지 순

| 순위 | 수단 | 시간 | 상태 |
|---|---|---|---|
| 1 | **Context7 등재** (`context7.json` + context7.com/add-library 제출) | 1~2h | **미실행**. Cursor/Claude Code 사용자가 라이브러리 문서를 부를 때 쓰는 층 — SEO 무관 직접 B2A 검색 |
| 2 | **awesome 리스트 PR** (awesome-claude-code, awesome-claude-skills, awesome-design-systems, awesome-cursorrules) | 2~3h | 미실행. 506 stars로 social-proof 요건은 충족. 병합은 외부 판단 |
| 3 | 레퍼런스별 HTML 페이지 = 인용 단위 (Article+FAQPage JSON-LD, `dateModified = verified`) | 0 (완료) | sitemap이 대부분 `lastModified: now`를 쓰는 건 약한 cargo cult — ref 페이지는 `verifiedAt`으로 |
| 4 | GitHub README를 검색 단위로 (브랜드↔서체/primary 표 + `/<id>/design.md` 링크, `README.zh-CN.md`) | 1~2h | 부분 완료 |
| 5 | 척추 글 자체 (날짜 달린 측정 표는 답변 엔진이 그대로 들어올리는 블록) | 반복 | D.2 의존 |
| 6 | Brave `submit-url` + Bing/IndexNow | 0.5h | **오너 전용**(대시보드). 미실행 |
| 7 | Show HN / Reddit — *데이터* 포스트로 | 3~4h + 오너 | 척추 3편 확보 후 1회 |
| 8 | Wikidocs 책 | 진행 중 | 유지, 척추 글 미러 챕터 추가 |
| — | **Wikipedia** | — | **cargo cult.** 독립 보도 없음 → notability 실패 → 삭제, 삭제 로그가 다시 색인됨. 하지 않는다 |
| — | **llms-full.txt 확장** | — | **cargo cult.** 456KB는 이미 에이전트가 자르는 크기. 유지만 |
| — | MCP 커넥터 부활 | — | 낮음. 죽은 엔드포인트 등재는 마이너스 |

**시간당 상위 3: Context7 → awesome 리스트 PR → 척추 글 + GitHub README 표 → Brave/Bing 제출.**

### D.5 계측 선행 조건 (첫 글보다 먼저)

**현재 블로그는 `act_handoff`에 전혀 귀속되지 않는다.** 실측된 세 가지:

- 블로그의 유일한 CTA가 `/builder`가 아니라 **`/cli`**를 가리킨다 (`web/src/components/blog/post-view.tsx:75-83`)
- 블로그 컴포넌트 중 GA4 이벤트를 쏘는 것이 **하나도 없다**
- `InstallSurface`에 `blog` 멤버가 **없다** (`web/src/lib/activation/analytics.ts`)

즉 지금 글을 발행해도 성과를 KPI로 읽을 수 없다. `/ga4` 스킬 경유로 다음을 먼저 한다
(`project_ga4_convention` 준수):

- `InstallSurface`에 `"blog"` 추가 (`web/src/lib/activation/analytics.ts:8-16`)
- 블로그 CTA를 `/cli` 단독에서 **브랜드별 `/builder` 딥링크 블록 + `npx` 라인** 병행으로 교체
- 포스트 CTA: `npx` 라인 유지 + `table.json`에서 생성한 브랜드별 builder 링크 블록 추가.
  딥링크에 `&from=blog&post=<slug>` (슬러그는 유한하므로 카디널리티 안전)
- Builder가 `from=blog`를 읽어 `bld_open {entry_step, source:"blog", post}` 방출 →
  `bld_reference_select → bld_generate → bld_export → act_handoff` 사슬이 포스트에 귀속
- 수용: preview 배포에서 blog → builder → export 클릭 시 DebugView에 `post` 차원이 붙은
  `act_handoff{surface:"builder"}` 관측

---

## 7. 병렬 실행 구조

트랙은 서로 다른 파일을 만지므로 동시 진행 가능하다. 같은 파일의 동시 편집은 하지 않는다.

**순서가 바뀌었다.** §0(만료 대응)이 트랙 A보다 앞선다 — 10월 12일은 협상 대상이 아니고,
440 리뉴얼은 그렇다. 그리고 §0의 심화 작업과 트랙 A의 D6(초안 294개 보존 검토)는
**같은 파일을 만진다**. 만료 대응이 먼저 끝나야 A4가 안전하게 들어간다.

| 슬롯 | 트랙 | 첫 작업 | 충돌 영역 |
|---|---|---|---|
| 1 | **§0 만료 대응** | U0 백업 → U3 상위 5개 → U1 55개 재투영 → U2 85개 캡쳐 | `web/references/*`, `artifacts/reference-evidence/` |
| 2 | B (아프로디테) | B2 하드룰 수정 → B1 graph export | `aphrodite-mela/src/design/*`, omd `export-formats.ts` |
| 3 | D (콘텐츠) | D.5 계측 → D.1 발행 패키지 → 표 생성기 | `web/src/lib/activation/*`, `web/src/content/blog/*` |
| 4 | A (440) 준비만 | A1 stage-1b 어댑터, A3 배치 attestation — **정본 미변경** | `scripts/*core*.cjs` |
| root | 인수·검토 | 오너 결정 준비, QA | 문서 |

트랙 A의 정본 변경(A4~A6)은 §0이 끝난 뒤에 들어간다. 도구 작업(A1·A3)은 정본을 만지지 않으므로
지금 병렬로 진행해도 안전하다.

트랙 C(CJK)는 A7(게이트 해제) 전까지 **선행 작업만** 가능하다: C1~C5.
후보 목록(JP 79 · CN 45+ · TW 35+ · KR 32)은 이미 확보되어 게이트가 열리면 즉시 투입 가능하다.

보류: ODDLY/랜딩 와우(A·F4), 벤치 4조건(B), 스킬 간 테스트.
보류는 삭제가 아니다 — 실패 증거와 frozen 디렉터리는 그대로 둔다.

---

## 8. 위생 항목 (작지만 지금 처리)

| # | 항목 | 조치 |
|---|---|---|
| H1 | **미커밋 71개 수정 + 64개 untracked (3,152줄)이 8일째** — `codex/track-foundation`이 main과 동일 커밋 | 9/7~9/8 스프린트 전체가 커밋 안 됨. 유실 위험. **오너 지시 시에만 커밋** |
| H2 | bench 테스트 타임아웃 flake | 해당 테스트의 `testTimeout` 상향 (단독 4.9초, 한도 15초) |
| H3 | `docs/CURRENT_STATE.md`가 9/8에 정지 | 이 문서와 함께 갱신 |
| H4 | `.omd/preferences.md` pending 39건 (7월부터) | `omd:learn` 검토 — DESIGN.md 반영 또는 보류 판정 |
| H5 | sitemap `lastModified: now` | ref 페이지는 `verifiedAt`으로 (D.4 3번) |

---

## 9. 오너 결정 대기 목록

이 결정들 없이는 해당 트랙이 전진하지 못한다. 나머지는 에이전트가 진행한다.

| # | 결정 | 막는 것 | 기본 권고 |
|---|---|---|---|
| **Q7** | **`artifacts/reference-evidence/` 145MB를 git 추적(LFS 포함)할지, 외부 백업할지, 그대로 둘지** | **§0 전체 · 만료 대응** | **추적 또는 백업. 177개 중 0개가 추적 중이고 만료까지 24일** |
| Q1 | **D1 — 정본 본문을 무엇으로 할 것인가** (얇은 투영 / 심화 초안 / frontmatter 보존 하이브리드) | 트랙 A 전체 | 심화 초안 + 사이드카. 얇은 투영은 21%라 사이트가 깨지고 카탈로그 가치가 사라진다 |
| Q8 | **목표를 "1000개"에서 "커버리지 품질"로 바꿀지** | 트랙 C 전체 | 바꾸는 쪽. CJK만으로는 615~690이 정직한 상한 |
| Q2 | 블로그 **발행일** 확정 + "이 바이트로 간다" 승인 | D.1 | — |
| Q3 | 블로그 문체 통일 (해요체 `toss-tech-design` vs 합니다체 `naver-d2-engineering`) | D.1 | 해요체(기존 라이브 글과 일치) |
| Q4 | Context7 API 키 · Brave/Bing 웹마스터 계정 | D.4 1번·6번 | 오너 계정 필요 |
| Q5 | 아프로디테 레포에 직접 커밋할지, 패치 제안만 할지 | 트랙 B | — |
| Q6 | H1 커밋 여부 | 전부 | — |

---

*이 문서는 `docs/CURRENT_STATE.md`의 복원 지점과 함께 읽는다. 갱신 시 CURRENT_STATE를 먼저 고치고
JOURNAL 맨 위에 5줄 이내로 기록한다.*
