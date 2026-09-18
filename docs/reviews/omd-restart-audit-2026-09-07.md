# OMD 인수 감사 — 2026-09-07

범위: CLI·벤치마크·아프로디테·Core v2·블로그/큐레이션. 기준 checkout: `main`,
`15ff0139`. 코드, 로컬 산출물, 테스트, npm pack 목록, GitHub 읽기 조회를 대조했다.
실서비스 배포·npm latest·GA4/GSC 실적은 이번 감사에서 확인하지 않았다.

## 1. 판단

**기반을 전부 폐기할 필요는 없다. 그러나 지금의 검사 통과와 제작량은 제품 우수성을 입증하지 못한다.**
CLI 설치·Core 컴파일/채택·실행 상태 검증은 재사용할 가치가 있다. 병목은 다음 세 가지다.

1. 평가가 사용자가 원하는 결과와 어긋난다. 문서 점수·효과 개수는 완성 화면의 매력과 다르다.
2. 연구 산출물이 배포되는 스킬과 소비자 경로까지 연결되지 않는다. 이관 문서는 staging에,
   아프로디테의 필수 도구는 저장소에, 실제 배포 문서 목록은 이전 버전에 남아 있다.
3. 과거의 가설이 다음 실행에서 규칙으로 굳어진다. 그 결과 한 번의 실패를 고치려고 만든
   제약이 다음 페이지의 구도·매체 선택을 먼저 결정한다.

권고 순서: **순정 포함 소규모 비교 → 아프로디테 한 작품 검증 → 그 방법을 스킬로 추출 →
브랜드 큐레이션 한 편과 Core canary를 같은 근거로 제작**. 440→600 확대는 이후다.

## 2. 실제 진척도

| 영역 | 확인한 것 | 현재 의미 |
|---|---|---|
| CLI | 소스 버전 2.0.1, 패키지에 제품 스킬 28개, 설치·doctor·Core helper·check bridge | 2.0.1 소스 후보가 있음. npm 발행 여부는 미확인 |
| 최근 T3 | 레인 A `render.html` 108개 = 9브랜드×3arm×4회, 레인 B 0개 | 생산 완료, 강한 비교 결론 불가 |
| 순정 비교 | UI-Resolve에는 no-skill·raw DESIGN.md 통제군/집계가 존재. T3에는 없음 | 기존 도구 재사용 가능. 최근 3자 결과에 순정 결과를 덧붙일 수는 없음 |
| 아프로디테 | Higgsgen r0~r9, 최고 사용자 점수 70(r2), r9 10, r7/r8 미채점 | 실험 자산은 풍부. 재현 가능한 합격작 없음 |
| Core v2 | 규격·JSON schema·compile/adopt·proof/receipt·offline 패키지 테스트 | 프로젝트 채택 경로는 존재 |
| 카탈로그 이관 | migrated 폴더 DESIGN.md 290개, DONE 원장 293, deferred openpoint 1 | staging 진척. 카탈로그 완료율과 다름 |
| 정본 레퍼런스 | `web/references/*/DESIGN.md` 440개, 기존 형식 유지 | 이관 산출물이 제품에 아직 채택되지 않음 |
| 블로그 | 출시 글 1편 × ko/en, Markdown loader·locale·feed·host routing 구현 | 발행 기반 존재, 기업별 연재 콘텐츠 없음 |
| 공개 작업판 | GitHub open PR 0, open issue 21 (조회 당시) | 9/2 문서의 PR #88 대기·이슈 숫자는 현황으로 재사용하면 안 됨 |

원장 수와 폴더 수의 차이를 결손으로 단정하지 않았다. 골든 샘플은 다른 경로에 있으며,
`check-done-ledger.mjs`는 `migrated=290, recorded=293, deferred=1, missing=[]`를 반환한다.
단, 원장은 전체 수용 조건을 재검증한 결과가 아니다.

## 3. 코드베이스 구조와 재사용할 부분

| 층 | 정본/진입점 | 판단 |
|---|---|---|
| 명령/설치 | `bin/oh-my-design.ts`, `src/cli/install-skills.ts`, `doctor.ts` | 제품 bootstrapper로 역할 명확. 설치와 진단 계약 유지 |
| 스킬/에이전트 | `skills/`, `agents/` → 채널별 mirror | 저작은 정본에서 하고 공식 sync 사용. 채널 사본 편집으로 실험하면 배포 귀속이 흐려짐 |
| 디자인 권한 | `scripts/design-md-core*.cjs`, compile/adopt, `autopilot-mission.cjs` | unknown 보존, 승인/해시, 실패 proof를 강제로 통과시키지 않는 구조 유지 |
| 참조 소비 | `web/src/lib/references/`, generated registry/quality/AST, builder | 카탈로그 이관의 검증 종착점. 참고 문서 gate만으로 대체 불가 |
| 구형/최근 벤치 | `benchmarks/ui-resolve-bench/`, `test-v2/90-comparison/` | 두 평가 체계가 병존. 전자는 격리·비용·선호도, 후자는 108셀 자료 재사용 |
| 생성 검증/영상 | `test-v2/tools/{render-integrity,text-contrast,landing-integrity,showcase}.mjs` | 기능 결함 검사와 녹화 도구는 유효. 미적 우승 판정으로 사용하지 말 것 |
| 발행 | `web/src/content/blog/`, `web/src/lib/blog/` | 새 CMS보다 실제 연재 한 편이 먼저 |

`install-skills.ts` 약 2,004줄, `doctor.ts` 약 1,396줄(수정 전)로 커졌다.
모듈 분리는 가치가 있지만, 지금 대규모 재작성은 우선순위가 낮다. 먼저 설치되는 스킬,
필수 dependency, doctor, 문서 목록을 하나의 계약으로 묶어야 한다.

9/2 진단의 “unattended 부재”, “render/contrast 미배선”은 현행 코드에 그대로 적용되지 않는다.
`skills/omd-autopilot/SKILL.md`에는 unattended와 VERIFY의 두 검사가 이미 있다.
일부 이슈는 구현 후에도 열려 있다. 이슈 제목만 보고 기능을 다시 만들지 말아야 한다.

## 4. 우선 결함과 이번 조치

| 우선 | 결함·근거 | 조치/잔여 |
|---|---|---|
| P1 | npm에는 aphrodite가 있지만 doctor 필수 목록에서 누락. CLI 테스트 2개 실패 | **수정**: doctor 목록에 추가 |
| P1 | 문서가 27개 스킬/26개 Cursor를 표시, 실제는 28/27. 웹 테스트 실패 | **수정**: 공통 목록과 5개 언어 수치 정합 |
| P1 | quality gate 기본 non-strict + prepublish가 그 명령 호출. MISSING/STALE이어도 OK 가능 | **수정**: 기본 strict, prepublish strict 명시, 개발용 allow-incomplete만 명시적 허용 |
| P1 | `--only` 오타로 0개 검사, 빈 checks/잘못된 검사 이름으로 통과 가능 | **수정**: 선택·설정 사전 검증, 0개 판정 BLOCKED, 회귀 테스트 5개 |
| P1 | aphrodite 정본은 LI-40까지, Claude 사본은 LI-32까지. mirror 검사 실패 | **수정**: 공식 sync로 2개 사본 갱신, 최종 drift 0 |
| P1 | aphrodite가 요구하는 `font-inline.mjs`, `storyboard-review.md`, `fx-library/`가 npm pack에 없음 | **미해결**: 배포용 reference/tool closure와 설치 경로 해결 필요. 단순 files 추가만으로 cwd 문제까지 해결되지는 않음 |
| P1 | gate matrix 6칸 중 karrot 2칸 없음, aphrodite fixture 자체 없음 | **미해결**: 현재 릴리즈 품질은 미확인. missing 2칸이 실제 BLOCKED임은 확인 |
| P1 | “only one ships a design system” 캠페인 초안. 실제 세 arm 모두 system.md 존재 | **수정**: 허위 차별 문구 제거. 문서 길이도 품질 우위로 승격하지 않음 |
| P1 | 아프로디테 강제 스타일/밀도 규칙과 사용자의 품질 판단 불일치 | **계획 확정**: 기능 gate와 미적 평가 분리. 실행 스킬의 대규모 개정은 새 작품 검증 후 |
| P2 | freshness를 파일 mtime으로 판단 | **미해결**: checkout/touch로 바뀔 수 있음. source tree·brief·assets·output SHA를 묶는 receipt 필요 |
| P2 | CURRENT_STATE가 오래된 실행 명령·판정을 장문 누적 | **정리**: 원문을 archive에 보존하고 현재 상태·다음 작업으로 축약 |

의도적인 효과 의무를 없애는 것과 기능 결함 임계값을 낮추는 것은 다르다.
접근성·텍스트 잘림·고장 난 CTA는 계속 실패여야 한다.

## 5. 벤치마크에서 알 수 있는 것

정본: `test-v2/90-comparison/reports/lane-a/aggregate.md`.

- OMD 75.1, UIUX Pro Max 74.2, Hallmark 68.9. OMD−UIUX 관측 차이 0.872,
  95% CI −0.816~2.603, `NO DECISIVE WINNER`.
- 평가자 일치도는 존재 −0.762, severity/ratings 0.282, brand9 −0.119. 전 축 INCONCLUSIVE.
- Grok의 사후 arm 추측은 106/108. 화면 평가와 방법 문서를 같이 보여주면서 블라인드가 깨졌다.
- OMD 근거 축 51.0, 문서 축 94.1. 높은 총점에서 문서의 기여가 크다.
  이것으로 “최종 화면이 압도적”이라는 주장을 만들 수 없다.
- OMD 팩은 8/23 동결 `omd-autopilot-v2`이고 현행 배포 스킬과 같은 객체가 아니다.
- 레인 B는 산출물 0. 전체 하네스 최대 성능 비교는 미실행이다.

다음 실험은 [순정 포함 파일럿](../BENCHMARK_RESTART_2026-09-07.md)의 독립 회차다.
기존 데이터는 결함 탐색과 회귀 자극으로 유지한다. 변경한 스킬로 기존 셀을 덮어쓰거나,
새 순정 실행을 옛 점수와 통계적으로 합치지 않는다.

## 6. 아프로디테 재진단

인수인계의 “밝은 지면 두 번 모두 30점”, “3D 10점”은 관측이다.
그것만으로 밝은 지면·3D가 실패 원인이라고 결론내릴 수 없다. 동시 변경·단일 채점자·
미채점 영상 라운드가 있다. “같은 언어만 더 잘 실행하면 된다”도 검증 전 가설이다.

저장된 r2 fold/peak 및 비교 사이트·폴드 캡처를 직접 읽었다. r2는 강한 대형 타이포와
암부 장면을 갖지만, 시각적 특징을 하나의 제품 경험으로 엮었는지는 정지 캡처만으로
판정할 수 없다. r9의 라이브 화면·스크롤은 이번에 확인하지 못했다.

**가장 강한 코드 증거는 스킬 계약 자체다.** 그레인·다층 메시·공통 색보정·미디어 개수·
라이브러리 예산·이미지마다 동사까지 결과를 보기 전에 의무화한다. 이것은 일관된 품질을
만드는 방법이라는 검증을 거치지 않았고, 선택할 수 있는 표현을 줄인다.

반대로 에셋과 카피의 대상 일치, 장면의 연속성, 제품이 실제로 보여주는 약속은
기계 검사의 중심에 없다. r5의 등대/작업실 불일치가 좋은 반례다.
이는 **의미 검토 대상**이며 단어 정규식 하나로 해결했다고 주장하면 안 된다.

구체적 다음 작품 브리프·매체 선택·편입 조건은 [아프로디테 재시작안](../APHRODITE_REBOOT_2026-09-07.md)에 둔다.
Blender·ffmpeg·Grok 실행 파일은 현재 머신에서 발견했다. 인증·할당량·생성 성공은 미검증이다.

## 7. DESIGN.md와 큐레이션을 제품에 연결하기

Core v2를 새로 설계하는 것보다 `staged reference → catalog consumer`의 누락된 연결을
완성하는 것이 먼저다. `spec/design-md-core-v2.md`의 canary/의미 보존 계약을 그대로 쓴다.

1. 토큰 풍부/서사 중심/부분 결측/구조 특이 4종을 canary로 정한다.
2. 원본·이관본 semantic inventory, 출처 도메인, unresolved 필드를 대응한다.
3. Home → `/builder` → 선택 → preview → 사용자 override → export/prompt를 비교한다.
4. `/reference/[id]`·raw URL·CLI query/book·검색/registry에도 같은 값이 나오는지 확인한다.
5. 롤백을 실제 실행한 뒤 작은 배치로 채택한다. DONE 원장 수를 제품 진척으로 표시하지 않는다.

기업 큐레이션은 같은 증거를 세 가지 편집 결과로 쓴다.

- **공식 사양**: 기업이 공식적으로 발표한 내용. 원문·날짜·적용 표면을 제시한다.
- **OMD의 해석**: 공개 UI에서 관찰한 선택이 사용 경험에 미치는 영향. 공식 원칙과 구별한다.
- **OMD 창작 제안**: 원래 없던 시스템을 재구성한 예시. OMD가 작성했음을 밝히고,
  그 회사의 공식 토큰/원칙으로 정본에 역주입하지 않는다.

첫 연재는 가장 근거가 잘 갖춰진 국내 기업 한 곳에서 시작한다. 본문 구성은
장면 한 개 → 출처 있는 결정 세 개 → 새 UI에 적용한 예 → DESIGN.md/Builder로 이어지는 한 동선.
출시 글·규격 소개·기업 해석 글의 독자 목적이 다르므로 모든 글을 설치 설명으로 끝내지 않는다.

측정은 게시 횟수보다 유입 → reference 열람 → Builder/CLI handoff를 따른다.
GA4/GSC를 읽기 전 트래픽 증가나 현재 전환율을 추정하지 않는다.

## 8. 검증과 범위

| 실행 | 최종 결과 |
|---|---|
| `npm test` | **1420 passed, 180 skipped**, 115 files passed / 20 skipped. skipped는 통과로 세지 않음 |
| `npm --prefix web test` | **891 passed**, 61 files |
| `npm run lint` / 웹 `typecheck` | 둘 다 PASS |
| `npm run build` | PASS. 패키지 설치 smoke에서도 재빌드 |
| 실제 tarball 설치 smoke 2종 | 4채널 설치/doctor, Autopilot HANDOFF, Core compile/adopt offline PASS |
| `sync-runtime-mirrors.cjs --check` | managed 200, drift 0; 개발용 overlay 98개는 명시적 제외 |
| gate `--only landing/karrot,autopilot/karrot --json` | **BLOCKED, MISSING 2, strict true, exit 1** — 의도한 실패 |
| `check-done-ledger.mjs` | missing 0, deferred 1 |
| `git diff --check` | PASS |

처음 전체 CLI 검사에는 실제 목록 결함 2개와 환경 실패 4개가 있었다.
실제 결함은 수정했고 npm 캐시/localhost 권한으로 인한 실패는 동일 테스트를 필요한
로컬 권한에서 재실행해 통과를 확인했다. 최종 전체 검사는 위 표의 결과다.

브라우저 하네스는 연결된 Chrome이 없어 실패했고 저장된 스크린샷을 읽었다.
실시간 스크롤·r9 시각 품질을 검증했다고 주장하지 않는다. 전체 생성물의 재렌더,
미적 재채점, npm 발행, 외부 게시, 새 유료 생성 런은 이번 인수 감사에 포함하지 않았다.
작업 시작 전부터 있던 `scroll-feel.json` 변경과 untracked 캡처/연구 JSON은 보존했다.

GitHub 이슈는 읽기 조회만 했다. #82처럼 현재 코드에 구현되어 있는 항목도 있으므로
종료 전 acceptance를 재현해야 한다. 새로 식별한 배포 closure·gate receipt 문제는 위 표가
다음 이슈의 구체적 초안이다.
