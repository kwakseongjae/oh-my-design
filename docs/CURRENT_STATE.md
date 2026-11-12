# CURRENT STATE — 단일 복원 지점

이 파일은 짧게 유지한다. 세션을 복원할 때 `scripts/context_restore.sh`가 이 파일의 앞부분(약 5KB)만 낸다.
새 일이 생기면 「지금」 블록을 고쳐 쓰고, 날짜 절은 최근 것만 아래에 둔다. 오래된 절은 `docs/archive/state/`로 옮긴다.
방향과 트랙은 `docs/ROADMAP.md`, 오너에게 묻는 것과 묻지 않는 것은 `docs/AUTONOMY_LOOP.md` §1–2에 있다.

## 지금 (2026-11-12 밤 갱신) — 재개함. 9차 묶음(새 방식)이 도는 중

오너 11/12: 「추천대로 할게. 작업 재개하자. codex effort나 모델 뭘 쓸지도 고민 충분히 해본거지? 작업을 하면서도 계속 테스트를 하면서 방향 고도화해도 좋아.」

**오너 GO 대기(머지)**

- PR #123(결정 기록, 이슈 양식 3종, 상태·실험 문서) → PR #124(측정 컴파일러, 후보 목록, 창 없는 캡처, 재측정 스크립트). #124는 #123 위에 쌓였다. 9차 착지 PR은 이 둘 뒤에 연다.

**정해진 것(실험 결과, `docs/research/2026-11-09-collection-method-test.md` Round 4 part 2)**

- **수집 방식 = 창 없는 캡처 → 컴파일 → `gpt-6.1-sol` medium.** 전체 실행 시간 −52%, 출력 토큰 −57%(megazone·nomura 짝 비교, 둘 다 verified). 작성만 보면 10곳 모두 verified, 컴포넌트 50 = 50, max가 붙인 색 152/154.
- 모델·effort 선별(4곳): `gpt-6-luna`는 컴포넌트를 떨어뜨림(탈락), `gpt-6.1-terra`는 개요가 1/3로 줄어듦(탈락), sol low는 개요 −27%에 절약이 사이트당 1.8분이라 medium 유지.
- 같은 폴더로 두 번 쓰면 색 값 목록이 97% 같다(후보 목록 없을 때 83%). **토큰 이름은 안 같다**(6/28 ~ 67/74). T1의 다음 일은 이름 고정(값이 그대로면 실린 레퍼런스의 이름을 이어받기).
- T1 재측정(`scripts/t1/remeasure.mjs`, 모델·창 없음): 시범 20곳 × 3회, 7,652개 값 중 7,611개(99.5%)가 2~9일 전 측정과 같다. 다른 41개 중 브랜드 값은 3개(wooricard `nav-card` 포커스 색 하나), 나머지는 바뀌는 상품·숫자와 글자 따라 변하는 폭.
- 일본어(`kana`): 규칙 후보 102개 독립 검증 → 근거 없음 0, 「출처보다 세게 적음」 27개를 출처가 말하는 만큼으로 낮춘 `rules.v2.md`(타이포 32, 글쓰기 70). JP 88곳 타이포 실측(77곳 읽힘). 자료는 `~/.omd-workers/kana/`, 스크립트는 `feat/kana-skill`(`.claude/worktrees/kana`, 푸시 전).

**도는 중 / 다음**

| 할 일 | 상태 | 어디 |
|---|---|---|
| 9차 묶음 7곳(tver·tokyo·aeon·koexpressway·nhis·samsungfire·1111) | Codex medium 워커 도는 중 | `~/.omd-workers/queue-batch9.txt`, 폴더 `~/.omd-workers/new2/<id>`, 워크트리 `t1-trust`에서 실행 |
| 9차 착지 | 워커 보고 읽기 → `scripts/t1/remeasure.mjs <id> --runs 1`(창 없는 전체 재측정) → `feat/refs-batch9` 워크트리에 `land-batch.sh` → 독립 검수 워커 1회 → PR | 검수 보고 없이는 착지하지 않는다 |
| 이름 고정(T1) | 설계 전 | `web/scripts/compile-evidence.mjs`의 `measure.json`에 이름을 싣는 방향 |
| kana 스킬 초안 | 규칙 v2·실측 표 준비됨. 검사기 1개와 평가 설계가 남음 | `feat/kana-skill` |
| 막힌 사이트용 야간 큐(새벽 2~7시, 창 있는 방식) | 아직 없음 | T0 |

**오너가 볼 것(다음 보고에 넣을 결정)**

- 새 방식으로 쓴 레퍼런스는 색 토큰이 많다. 자사 CSS에 선언된 팔레트를 전부 「선언됨, 화면에서는 못 봄」으로 나눠 적기 때문이다(hmall 23 → 76개. 카탈로그 중앙값 13, toss 92). 9차 프리뷰에서 아이템 페이지로 확인.

**열린 것**

- 실험 실행 기록: `~/.omd-workers/runs/rv-x9[cdltuv]-*`(28회), 버린 것 `void-rv-x9*`. 옛 세션 임시 폴더의 스크래치 워크트리(`…/7924e40f-…/scratchpad/t1/wt`)를 품질 판정에 계속 쓰고 있다. 없어졌으면 `git worktree prune` 뒤 `git worktree add --detach <경로> origin/main`.
- 워크트리 `t1-trust`의 `packages/mcp/node_modules`와 `artifacts/reference-evidence/visual/<새 id>`는 본 체크아웃을 가리키는 링크다(커밋 안 됨). megazone·nomura 폴더는 방식 시험의 캡처라 본 저장소 증거와 섞지 않는다.
- 3D 데모 서버 8791이 켜져 있다.
- 운영: main `8b320ec7`, 레퍼런스 607(437 / 89 / 81).

## ▶ 2026-11-10 · 3건 머지 · 라운드 3 진행 · iOS 경로 확인

- **머지(오너 "머지 ㄱㄱ"):** #117 문서 → #116 brand-look → #118 7차, main `c65b335b`. 운영 확인: `/ko/design-systems/kbinsurance`에 "KB손해보험", 새 5곳 200, llms.txt 603, main CI 통과. 머지된 워크트리 3개(brandlook·reverify-w1·3d) 정리, 로컬 브랜치 4개 삭제(brandlook의 미커밋 변경은 번들 경로 주석뿐이라 되돌림).
- **라운드 3(오너 "라운드 3도 해보쇼") 결과 = 분업 채택 안 함, 지금 방식(Codex max 끝까지) 유지.** 새 CJK 4곳(hmall·fujitsu·megazone·hk01) 짝 비교: 분업(Codex 수집 전용 → Sonnet 5.5 medium 작성)은 시간 −27%(중앙값 25.1→18.2분)·Codex 토큰 약 −40%지만 컴포넌트 −24%·근거 −31%(기준 −10%). 수집은 비슷(바뀐 컨트롤 17 vs 16), 차이는 작성(Codex 17/17 승격, Sonnet 13/16). 8개 모두 verified_v2. 단, 작성자 effort가 다름(Codex max vs Sonnet medium) → 같은 S 폴더로 Sonnet high/max 재작성이 가장 싼 후속(오너 결정 대기). 결과 `docs/research/2026-11-09-collection-method-test.md` Round 3, 스크립트 `scratchpad/exp8/`, 하네스 결함으로 버린 작성 4건은 `~/.omd-workers/runs/void-rv-x8w-*`·`exp8w-void/`.
- **8차 = PR #119(머지 GO 대기):** 사이트별 나은 쪽 = fujitsu·hk01·megazone은 A, hmall은 W(3/2/64 vs 2/2/67, 사실상 동률). 헤드라인 4/4 재측정 일치(각 갈래의 cfg), 4건 모두 verified_v2·코드 없음 → 603 → **607**(437/89/81), 웹 1366 통과, check-counts 일치. 워크트리 `.claude/worktrees/refs-batch8`, 재측정 `scratchpad/batch8/`.
- **앱 근거 iOS 확인(오너 "iOS로 해보면 어때?"):** 이 맥에 Xcode·iOS 26.5 시뮬레이터가 이미 있음(다운로드 불필요). 다만 시뮬레이터는 App Store 앱을 못 설치하고, 배민·오늘의집은 App Store 호환 목록에 Mac이 없음(배민 iPhone만, 오늘의집 iPhone·iPad·Vision). 남는 iOS 경로 = 오너 아이폰에서 직접 찍은 스크린샷(픽셀 색·크기만, 요소 트리·폰트 파일 없음). `devicectl`에 스크린샷 명령 없음, iPhone 미러링은 영상 압축이라 색 측정에 부적합. **경로 선택은 오너 답 대기.**
- **열린 PR:** #119 8차 · 이 상태 PR. **오너 결정 대기:** 8차 머지 GO · 라운드 4(같은 S 폴더로 Sonnet high/max 재작성, 브라우저·Codex 없음) 여부 · iOS 스크린샷 시범(오늘의집 5~6장) 여부.
- **아직 켜져 있음:** 3D 데모용 로컬 서버 127.0.0.1:8791(`claudedocs/3d-hero`), 오너가 다 보면 끈다.

## ▶ 2026-11-09 오후 · 수집 방식 실험 결과 · brand-look MVP · 7차 착지 준비

- **머지 완료(오너 "1~3 추천대로"):** #113 워커 도구 · #114 skill-batch-nov(S1 다크 모드 포함) · #115 brand-look 설계. 머지된 워크트리 11개 정리(브랜치는 남김).
- **수집 방식 실험(문서 `docs/research/2026-11-09-collection-method-test.md`, 브랜치 `chore/collection-test-results`):**
  - 1라운드: effort high는 시간 −31%지만 컴포넌트 −18%·근거 −21% → **max 유지**.
  - 2라운드: Codex 증거로 Claude Sonnet 5.5가 작성 → 작성 시간 −70%, 3/3 verified_v2, 지어낸 색 0. 홍콩공항만 분류 차이(규칙 하나로 고칠 것).
  - **라운드 3(분업 끝까지, 새 3~4곳) 진행 여부는 오너 답 대기.**
- **brand-look MVP = PR #116**(내부 스킬, `DEVELOPMENT_ONLY_SKILLS`로 설치 제외). 기본 5브랜드는 토스·당근·**오늘의집**·Linear·애플(오너 결정). 오늘의집이 Noto 안전 기본으로 그려지는 원인은 레퍼런스에 `fonts.faces`가 없어서 → 7차 PR에 Pretendard Variable 항목(OFL, live-surface-use, 본문 §3 근거 그대로) 추가.
- **앱 중심 회사 근거:** 원칙(근거 영역 분리)은 있고 앱 화면 측정 방법은 없음. 추천 = 안드로이드 에뮬레이터 시범(배민 1곳). **진행 여부와 Android Studio 다운로드 승인은 오너 답 대기.**
- **7차 = PR #118(머지 GO 대기):** 실험 6곳(yomiuri는 Claude 갈래, 나머지 Codex max) 헤드라인 6/6 재측정 일치 → 597 → **603**(433/89/81), 웹 1362 통과. 오늘의집 `fonts.faces` Pretendard 추가(brand-look C6 한글·라틴 PASS 확인), 요미우리 모션 오탐 문장 수정, preview 테스트 대소문자 결함 수정, 지시서 국가 목록·비색상 상태 규칙, `remeasure.sh` 절대 경로.
- **열린 PR:** #116 brand-look · #117 실험 문서·상태 · #118 7차. 셋 다 오너 GO 대기.

## ▶ 2026-11-09 · 오너: "ㄱㄱ" + 3D·셰이더 조금씩 / 워크트리·병렬 방식 / 수집 방식 테스트

- **main은 PR로만**(전역 훅 `~/.claude/hooks/git-push-scope.py`, 오너 11-07·11-09). 상태 문서도 브랜치 → PR. 오늘 작업은 PR #113(`chore/worker-tooling-1109`).
- **정리:** #78·#80·#83(#108로 반영)·#110·#104·#111 닫음. 3D·셰이더 남은 조각은 로드맵 #112(S1 다크 모드 · S2 셰이더와 토큰 읽기 공유 · S3 공간 · S4 지형 · S5 Cycles 루프 · S6 무부하 재측정).
- **S1 착수:** 백그라운드 에이전트가 `../oh-my-design-3d`(`feat/skill-batch-nov`)에서 다크 모드 검증 + 라이트↔다크 `setSpec` 전환. 커밋만, 푸시는 본 세션.
- **R3 `/brand-look` 설계 착수:** 새 워크트리 `../oh-my-design-brandlook`(`feat/brand-look`)에서 에이전트가 설계 문서 v0(`docs/SKILL_BRAND_LOOK_DESIGN_2026-11-09.md`).
- **워커 도구(PR #113):** KR 지시서 `display_name_kr` 필수, states cfg에 close/hideOverlays 기록 + `scripts/workers/remeasure.sh`, `scripts/workers/land-batch.sh`(여러 건 한 번에 착지). 병렬 규칙 문서 `docs/PARALLEL_WORK.md`.
- **수집 방식 테스트:** 6차 기준선 — 워커 중앙값 29.4분 중 캡처 2.6분, 마지막 캡처 뒤 작성 단계 22.5분(77%), 입력 6.3M 토큰(96% 캐시). 1라운드 = 같은 6곳(yomiuri·nomura·kbinsurance·samsunghospital·hkairport·railway) × effort max(A) vs high(H), 러너 `scratchpad/exp7/run-exp.sh`(nohup, 재시작 가능, 로그 run.log). 계획 `docs/research/2026-11-09-collection-method-test.md`. 2라운드 후보: 증거 요약본, Claude 작성자(채널 확인 필요), 워커당 2건.
- **오너 결정 대기:** PR #113 머지 GO · 머지된 워크트리 11개 정리(브랜치는 남김) 여부 · 2라운드 Claude 작성자 갈래에 쓸 채널.
