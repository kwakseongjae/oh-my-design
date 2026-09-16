# CURRENT STATE — 단일 복원 지점

갱신: 2026-09-16 · 오너 지시로 **우선순위 재편**. 분기 `codex/track-foundation`, baseline `15ff0139`
(main과 동일 커밋). 9/7~9/8 스프린트 산출물은 **전부 미커밋 상태로 보존**되어 있다.

## 현재 사용자 지시와 실행 범위

오너가 2026-09-16에 우선순위를 다시 정했다.

1. **440 DESIGN.md 리뉴얼을 최우선으로 빨리 끝낸다.**
2. **랜딩 "와우" 작업(ODDLY/Aphrodite 랜딩 스킬/F4)은 보류한다.**
3. 별도 제품 **aphrodite-mela**(로컬 macOS 디자인 워크벤치)와의 연계를 강화한다.
4. 디자인 시스템 카탈로그 **블로그**와 **1000개 확충**(CJK — 中/日/臺/韓 집중, getdesign.md·refero 대비 강점).
5. **스킬 간 테스트는 후순위.**
6. 가용 모델은 opus. 병렬 처리하되 검증까지 포함한다. 리서치·기획은 fable 허용.

포맷 전략: **`docs/OMD_FORMAT_STRATEGY_2026-09-16.md`** — 업계 대조 결과와 Q10·Q11.

실행 계획 정본 2종:
- **`docs/OMD_ROADMAP_2026-09-16.md`** — 무엇을·왜 (진단·트랙·근거)
- **`docs/OMD_EXECUTION_PLAN_2026-09-16.md`** — 언제·누가·어떤 순서로 (주차별·마감 역산)
근거 보고서 4종: `docs/research/2026-09-16-briefing/`.
이전 로드맵(`OMD_NEXT_ROADMAP_2026-09-08.md`)의 5트랙은 폐기가 아니라 재우선순위다.

## 🔴 최우선 — verified 티어가 2026-10-09~11에 전량 만료된다 (24일)

140개 `verified_v2`가 전부 2026-07-11~14 한 배치로, TTL 90일인 `product-surface` 근거 위에서
검증됐다(`web/scripts/lib/reference-quality.mjs:27-32`). 실측 `nextReverifyAt`:
10-09(10) · 10-10(18) · 10-11(112). **2026-10-12에 카탈로그는 0 verified / 300 partial / 140 legacy로 읽힌다.**

그 티어는 카탈로그에서 가장 쓸모없는 티어다 — 7월 승격은 증거를 더해서가 아니라 **컴포넌트를 지워서**
통과했다(verified 평균 컴포넌트 3.1 vs legacy 9.6, verified의 36%가 button 미정의).
그리고 전환을 따라가는 건 티어 뱃지가 아니라 컴포넌트 수다(상위 140개: ≥5 → 0.499, <5 → 0.386;
순위 61~140에선 legacy가 verified보다 높다).

고칠 증거는 이미 있다 — `artifacts/reference-evidence/` 177개 번들(145MB), 번들 평균 49.2개 컴포넌트
vs 출하 2.9개(94% 폐기). **Q7 해결(2026-09-16): git에 올리지 않는 것으로 확정.** 내부 캡쳐 산출물이므로 저장소에
넣지 않고 제거도 하지 않는다. 대신 보관 증명을 구축했다 — `.gitignore` 사유 명시,
`artifacts/README.md` 컨벤션, `artifacts/local-store.manifest.json`(510파일/145.4MB SHA-256),
`npm run local-store` 검사. 기존 `~/.omd/bench-store` 선례와 동일한 방식.
**남은 것은 백업 한 곳** — 매니페스트는 손실을 알려줄 뿐 막지 못한다.

**작업 분해(실측, 번들 140/140 확인)**: R형 55개 = 번들에 상호작용 증거가 이미 있어 재투영만 하면 된다
(브라우저 실행 0). C형 85개 = 상호작용 켠 캡쳐 1회 필요.

**가장 먼저 만료되는 10개가 가장 중요한 10개다** — 10-09 코호트는
`29cm apple baemin kakao karrot krds line naver toss yeogiotte`이고
toss·karrot·baemin·kakao가 수요 1/3/4/5위, 전체 select의 ~35%. 내역 R 6 / C 4.

**완료 기준은 뱃지 복구가 아니다**: (a) verified_v2 + (b) 컴포넌트 ≥5 + (c) button/input에 상태 키.
셋 다여야 한다. 뱃지만 되찾으면 7월의 실수를 반복한다.

주차별 순서는 `OMD_EXECUTION_PLAN_2026-09-16.md` §3.

## 오늘 확정된 핵심 사실 (전부 실측)

**병목은 하나다.** 신규 레퍼런스 작성 스킬 5종이 `CORE_V2_CATALOG_WRITE_BLOCKED` 상태다
(`add-reference` / `batch-launch` / `migrate` / `token-backfill` / `component-harvest`).
해제 조건 5가지가 함께 떨어져야 하므로 **1000개 확충은 440 리뉴얼의 하드 의존**이다.

**440 리뉴얼은 기계 문제가 아니다.**
- 440/440 결정론적 변환 **3.03초**, `dropped_segments=0`, 소스 재구성 100% 일치.
- 6단계 파이프라인 384 ms/ref(직렬) / 63 ms/ref(`-P8`) → 440개 **≈28초**. 직렬·병렬 산출 바이트 동일.
- 그러나 **440/440 전량 adopt 불가**: `missing-primary-task`로 compile이 거부.
  레거시 파일에 없는 내용이고 마이그레이터는 발명을 거부한다. placeholder 39, scope 누락 22.
- **Core v2 산출물은 무손실 재현이 아니라 중앙값 21% 투영이다.** 나머지는 graph.json opaque blob.
  라이브 사이트가 레거시 섹션·frontmatter를 직접 파싱하므로 지금 적용하면 `/builder`가 깨진다.
- `docs/design-md-weight/migrated/`의 초안 294개는 투영이 아니라 **독립 재작성**
  (정본 대비 0.61~1.69배). 비교 도구가 없다. 전수 보존 검토 필요.
- 실제 결정 표면: 아키텍처 4 + 신규 집필 148 + 초안 검증 294 + attestation(현재 1:1, 440회).

**아프로디테 연동은 이미 절반 지어져 있다.** aphrodite-mela가 Core v2 7개 앵커를 정확히 방출하고,
omd graph-v2 리더를 갖고 있으며, toss/karrot DESIGN.md를 **바이트 동일**하게 번들한다.
간극 2개: DTCG 중첩↔평면(현재 10개 중 0개 읽힘 → 어댑터 후 7 painted), 클레임 마커 0개(validate exit 1 → 추가 후 portable-core).
하드룰 위반 1건: `contract.ts:44`가 미선언 semantic 토큰에 렌더러 상수를 사실처럼 쓴다(한 줄 수정).
**이 트랙은 440 마이그레이션을 기다리지 않는다** — 마크다운 경로가 438/440에서 이미 동작한다.

**정정 2건 (이전 판의 오류).**
① `evidenceCoverage`는 깊이 gradient가 아니라 **이진값**이다(0이 299개, 1이 141개). "평균 0.16/0.30"은
verified 비율의 재진술이며 깊이 근거가 아니다. 실제 JP는 인증률 2위(0.302, KR 0.330과 동률)이고,
TW는 연구 부족이 아니라 **인증 부족**이다(63개 중 53개가 `verification_v2_missing` 하나에 막힘).
② proof gate는 **`spec/regional-sources.yaml`을 읽지 않는다.** 게이트는
`web/__tests__/catalog-integrity.test.ts:204-209`이고 "brand-owned regional"은 allow-list가 아니라
negative host filter(`NON_REGIONAL_HOSTS`, `:36` — getdesign/refero/google-favicon 셋만 배제)다.
YAML 확장은 탐색에는 도움이 되나 CI 동작을 바꾸지 않는다. JP/CN 게이트는 `:204`의 국가 조건을 고쳐야 한다.
부수: 게이트가 약하다 — 회사에 *관한* 블로그 글도 현재 통과한다. CN refs는 게이트 밖이라 검사 없이 통과 중.

**CJK 상한 (잠정).** JP +115~160(Tier 1 14~22, 후보 100+예비21 확보) · CN **+30에서 중단**
(Tier 1 31개 live 내용확인. 중국은 *들어오는* 트래픽을 거른다 → 검증은 무관, 본토 유입은 **미측정**
— "아마 불가"라고 쓴 이전 판을 정정한다. GreatFire상 vercel.app 153/153 차단이나 SNI 기반이고
`oh-my-design.kr`는 측정된 적 없음) · TW **신규 0, 깊이:볼륨 2:1**(레거시 깊이 지표로는 KR·US를 이긴다.
7월 컴포넌트 삭제가 TW에도 있다 — verified 10개가 2.3개 vs partial 8.1개. 번들은 11/63뿐) ·
KR **Tier 1 4건 발견**(첫 "고갈" 결론은 "디자인 시스템" 키워드만 쓴 탓. LG전자·아모레퍼시픽·서울시·위메이드).
합산 **630~710이나 확정 아님** — JP·TW·CN에 "identity/CI 어휘" 재탐색(C6)을 돌리기 전까지는 잠정.
단일 패스는 **양방향으로** 틀린다(KR은 증거 추가, JP는 Tier 1 주장 4건 기각·5건 강등).

**경쟁 지형 변화.** `getdesign.kr` / ko-design-md 가 live(2026-09-16 확인, KR 21건, 같은 DESIGN.md+tokens
전달, Claude 플러그인 배포). 우리가 KR에서 10배 크지만 "아무도 CJK를 안 한다"는 끝났다.
모아트 근거를 볼륨에서 **깊이와 증거**로 옮겨야 한다.

**콘텐츠 발행 블로커는 기술이 아니라 오너 결정**(방향 승인 + 발행일)과 10분짜리 파일 복사다.

**포맷 방향 (2026-09-16 조사, 전부 재확인).** Google Labs가 `DESIGN.md`를 규격으로 발행 중
(★27,942, Apache-2.0, homepage=Stitch, 버전 `alpha`). 섹션 7번이 Components —
**컴포넌트를 덜어낸 게 아니라 표준화**했다. 업계가 덜어내는 것은 **토큰 값 열거**다:
`vercel.com/design.md`는 39,519B에 **hex 0개**이고 본문이 *"do not read the stylesheet
implementation into context"*라고 지시한다. M3는 컴포넌트 명세가 곧 토큰 테이블이고
(3계층 중 `md.comp.*`), 2025-05 공식 블로그가 *"We're not deprecating M3"*라고 못박았다.
→ **"토큰 대 컴포넌트"는 범주 오류.** 우리 방향은 컴포넌트 삭제가 아니라
**산문 서술 → 상태 인덱스 토큰 맵**으로의 형태 교체다. Q10·Q11 미결.

**기회**: `m3.material.io`·`material.io`·`design.google` 모두 `llms.txt` **404**이고
`stitch.withgoogle.com`만 200이다. 게다가 M3 문서와 출하 SCSS의 값이 서로 다르다
(state-layer opacity, color role 26 vs 49). 검증·출처가 우리 해자라는 근거.

## 🔴 마감과 게이트가 충돌한다 (Q9)

만료 복구는 `web/references/<id>/DESIGN.md`와 `.verification.md`를 쓰는 작업이고,
`omd:add-reference`가 `CORE_V2_CATALOG_WRITE_BLOCKED`로 정확히 그것을 금지한다
(*"no one-off exception and no plausible fallback"*). 기존 reverify 패킷도 3단계에서
`/omd:add-reference --mode update`를 부른다 — 즉 **기존 복구 경로 자체가 막혀 있다.**

우회로가 없음도 확인: `reference-quality.mjs:196-198`이 claim 소스를 순회해 **하나라도**
TTL 초과면 `source_expired`로 막는다. 140개 전부가 `product-surface`(90일)를 갖고,
135개가 `official-doc`(180일) 등을 함께 갖지만 **긴 TTL이 짧은 TTL을 구제하지 않는다.**
TTL 재분류조차 파일 쓰기라 게이트 대상이다.

선택지 A(만료 복구에 한해 좁게 개방) / B(만료 수용) / C(23일 내 Core v2 완주 — 불가능).
권고는 A. 게이트의 명시 목적은 *신규 레거시 파일 생성* 방지인데 복구는 기존 140개의
버려진 증거를 되돌리는 일이다. 다만 문구가 예외를 배제하므로 **에이전트가 스스로 열 수 없다.**
상세: `OMD_EXECUTION_PLAN_2026-09-16.md` §2b.

## 상태값 충전 진행 (2026-09-16)

`component_state_prose_only` **164 → 147**, 상태값 보유 레퍼런스 **240 → 257 / 440**.
등급은 전 과정에서 140/160/140 유지, 이상 0건.

**경로 3종**(모두 실측 근거만, 추정 금지):

1. **셀렉터 선언 매칭** — 레퍼런스가 `use:`에 측정 셀렉터를 이미 적어둔 경우
   (`category-tab: { ..., use: "Category control at home::[data-omd-capture=\"7\"]" }`).
   추측이 아니라 문서가 선언한 연결. 15개 컴포넌트.
2. **기하 대조 매칭** — bg/fg·radius·height·padding·font를 각각 세어
   **근거 4개 이상 + 색 일치 필수**. 색만 맞추면 틀린다(`apple`: 같은 `#0071e3`인데
   radius 18px/12px로 전혀 다른 컨트롤). 21개.
3. **공개 DS 조사** — fill-kr이 13개 ref에 54키(별도 기록).

**한 토큰이 여러 측정 요소에 걸리면 통째로 제외**한다 — 첫 번째를 고르는 것은 임의 선택이다
(`freee/primary-action` 4개, `google/business-primary` 2개 등 4건 제외).

**도구**: `web/scripts/extract-state-values.mjs`(번들→제안) ·
`match-state-candidates.mjs`(기하 점수) · `apply-state-values.mjs`(적용, `--geometry` 옵션).
새 캡쳐가 들어올 때마다 재사용한다.

**남은 것**: 판정 불가 ~14 · 번들에 delta 없음 ~114(공개 DS 조사 또는 재캡쳐).
SEED(karrot) 같은 런타임 변수 간접참조 DS는 리터럴이 없어 조사 수율이 낮다.

## 검사 상태 (2026-09-16 실측)

| 검사 | 결과 |
|---|---|
| root lint (tsc) | PASS |
| root test | 1480 PASS / **1 FAIL** / 180 skipped — bench 테스트 타임아웃 flake(단독 6.1초 PASS) |
| web test | **937 PASS** (64 파일) |
| quality-gate.mjs | **BLOCKED** — FAIL 3(전부 `landing` 체커) / UNVERIFIED 2 / REVIEW_PENDING 1. **CI 미연결** |

## 진행 중 / 다음

| 트랙 | 첫 작업 | 상태 |
|---|---|---|
| 🔴 §0 만료 대응 | Week 0(백업·읽기전용 리허설)은 착수 가능 / **Week 1 실제 복구는 Q9 대기** | **게이트 충돌 — 아래** |
| A · 440 Core v2 | 도구만 선행(A1 어댑터·A3 배치 attestation). 정본 변경은 §0 이후 | 착수 대기 (Q1 결정 선행) |
| B · 아프로디테 | B2 하드룰 한 줄 수정 → B1 `graph` export 포맷 | 착수 가능 (Q5 확인) |
| C · CJK | 리서치 **완료**(후보 JP 79·CN 45+·TW 35+·KR 32 확보). C1 게이트 국가조건 수정, C3 본토 도달성 측정 | A7 게이트 해제 전까지 선행 작업만 |
| D · 콘텐츠 | D.5 GA4 계측 → 발행 패키지 → 표 생성기 | Q2·Q3 결정 선행 |
| 보류 | ODDLY/랜딩 와우, 벤치 4조건, 스킬 간 테스트 | 실패 증거·frozen 디렉터리 그대로 보존 |

## 오너 결정 대기

**Q9 만료 복구용 게이트 예외 — Week 1을 막는다. 즉시 필요** ·
~~Q7 증거 145MB~~ ✅ 해결(git 미추적 확정 + 보관 증명 구축) ·
Q1 정본 본문 정책(얇은 투영 / 심화 초안 / 하이브리드) — **트랙 A 전체를 막는다** ·
Q8 목표를 "1000개"에서 "커버리지 품질"로 바꿀지 ·
Q2 블로그 발행일+바이트 승인 · Q3 블로그 문체 통일 · Q4 Context7 키·Brave/Bing 계정 ·
Q5 아프로디테 레포 직접 커밋 여부 · Q6 미커밋 작업 트리 커밋 여부.

## 위생

- **미커밋 71개 수정 + 64개 untracked(3,152줄)이 8일째.** 유실 위험. 오너 지시 시에만 커밋.
- **증거 145MB 백업 위치 미설정** — git 미추적은 확정됐고 보관 증명은 있으나 사본이 아직 한 디스크뿐.
- bench 테스트 `testTimeout` 상향 필요.
- `.omd/preferences.md` pending 39건(7월부터) — `omd:learn` 미실행.
- sitemap `lastModified: now` → ref 페이지는 `verifiedAt`으로.

## 유지할 규칙

- 검증 PASS와 미적 채택, staging 이관과 정본 채택, 로컬 시뮬레이션과 실제 모델 비교를 구분한다.
- 기업 정본은 `web/references`만 편집. 모르는 필드만 생략하고 확인된 형제 값·브랜드 서사는 보존한다.
- Builder 작업은 Home→시작하기→/builder→선택→override→preview/export로 검증한다.
- run 삭제, 자동 발행·배포, 전역 설정 변경 없음. 보류는 삭제가 아니다.

## 연속성

이전 상세 이력: `docs/archive/CURRENT_STATE-2026-09-08-gpt90-sprint.md`.
종료 시 이 문서를 먼저 갱신하고 JOURNAL 맨 위에 5줄 이내로 기록한다.
