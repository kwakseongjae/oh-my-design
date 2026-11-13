# CURRENT STATE — 단일 복원 지점

이 파일은 짧게 유지한다. 세션을 복원할 때 `scripts/context_restore.sh`가 이 파일의 앞부분(약 5KB)만 낸다.
새 일이 생기면 「지금」 블록을 고쳐 쓰고, 날짜 절은 최근 것만 아래에 둔다. 오래된 절은 `docs/archive/state/`로 옮긴다.
방향과 트랙은 `docs/ROADMAP.md`, 오너에게 묻는 것과 묻지 않는 것은 `docs/AUTONOMY_LOOP.md` §1–2에 있다.

## 지금 (2026-11-13 밤) — 1순위는 한국 화면 아카이브. 폰 세션은 오너 신호까지 대기

**1순위(오너 11/13):** 한국 서비스 화면 아카이브(Mobbin처럼, 주 10개 목표). 레퍼런스 수집과 언어 스킬은 옆에서 계속 돈다. 공개는 보류.

**화면 아카이브: 앱 2개, 화면 39장** — `~/Downloads/kr-screens/index.html` → `musinsa/`(27장 + 영상), `karrot/`(12장 + 영상). 맥에만 있다.

- **오너 결정(11/13 밤):** 회색으로 가린 화면은 다시 찍는다. **시범 계정으로 로그인해서** 찍는다(로그인은 오너가 한다). **다음 폰 세션은 대기**: 오너가 말하기 전에는 세션을 열지 않고, 어떤 앱에서도 로그아웃하거나 앱을 지우지 않는다.
- **다시 찍을 목록과 다음 세션 순서:** `~/.omd-workers/screens/reshoot.md`(무신사 4장 + 영상, 당근 9장 + 영상). 시범 구글 계정으로 안 풀리는 것: 당근은 전화번호 가입 + 위치 기반 동네, 어느 앱이 구글 로그인을 받는지는 로그인 화면을 봐야 안다.
- **앱 하나의 네 단계:** 걷기(`phone.mjs`) → 라벨 초안(`suggest-labels.py`) → 큐레이션(`~/.omd-workers/screens/sheets/<앱>.json`) → `make-sheet.py` + `make-index.py` → `scrub-walk.py`(원본에도 가림). 도구 `tools/phone-recorder/`(브랜치 `feat/screen-archive`, 워크트리 `.claude/worktrees/screens`).
- **지킬 것:** 결제·구매·송금·삭제·동의는 누르지 않는다 · 「나의」 화면과 금융 앱은 `--private` · 남의 이름·메시지·지도·동네는 `--cover` · 세션 중 집중 모드(알림 배너가 30분에 네 번 찍혔다) · 프레임과 시트는 커밋·업로드하지 않는다.
- **안 풀린 것:** 폰이 느렸던 원인(맥이 요청마다 폰 이름을 찾는 5초)은 고쳤지만 폰에서 아직 안 쟀다 · 캐러셀 화면은 「멈춤」 판정이 안 난다 · `look`이 알림 배너를 걸러야 한다 · 당근의 남의 글·사진 공개 문제. 경과 `docs/research/2026-11-13-screen-archive.md`.

**머지:** #123·#124 머지됨(main `6c7a3cfd`, 운영 607 = 437 / 89 / 81, main CI 통과). **오너의 프리뷰 확인 대기:** #125(9차 7곳, 614) → #126(10차 8곳, 622, #125 위). #125가 머지되면 #126의 대상을 main으로 바꾼다.

**재검증 때 컴포넌트가 줄던 문제(오너: 맞으면 그렇게):** 원인 = 게이트는 상태 키가 없는 인터랙티브 컴포넌트를 막고, 컴파일러는 상태에서 변화가 잡힌 컨트롤만 컴포넌트로 냈다. 호버 스타일이 없는 진짜 버튼은 적을 방법이 없었다. 고친 것(브랜치 `feat/measured-no-change`, 워크트리 `.claude/worktrees/t1-trust`): 재 봤는데 변화가 없으면 `no brand change`로 적고 컴포넌트로 둔다. 게이트는 그 컨트롤의 근거 표 행이 있을 때만 인정한다. jobplanet 기존 캡처: 2 → 6개. 아이템 페이지에 그 문구가 보이므로 **오너 프리뷰 확인 뒤 머지**. partial 89곳과 demaecan·sega·gitlab 재검증은 이 PR 뒤.

**일본어 스킬(kana):** 초안 `docs/drafts/kana/`(브랜치 `feat/kana-skill`, PR 없음). 원어민 검토와 평가는 안 했다.

**정해진 방식:** 새 레퍼런스 = 창 없는 캡처 → 컴파일 → `gpt-6.1-sol` medium, 착지 전 `scripts/t1/remeasure.mjs <id> --runs 1`, 독립 검수 Codex high 2개 · 유효 기간으로 verified를 내리지 않는다 · 토큰 이름은 실린 이름 이어받기(`docs/ROADMAP.md` §6).

**열린 것:** 조립기 spacing 문구 157곳 보류 · 워크트리 `t1-trust`·`refs-batch9`·`refs-batch10`·`kana`·`screens` · 3D 데모 서버 8791 켜져 있음.

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
