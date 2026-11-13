# CURRENT STATE — 단일 복원 지점

이 파일은 짧게 유지한다. 세션을 복원할 때 `scripts/context_restore.sh`가 이 파일의 앞부분(약 5KB)만 낸다.
새 일이 생기면 「지금」 블록을 고쳐 쓰고, 날짜 절은 최근 것만 아래에 둔다. 오래된 절은 `docs/archive/state/`로 옮긴다.
방향과 트랙은 `docs/ROADMAP.md`, 오너에게 묻는 것과 묻지 않는 것은 `docs/AUTONOMY_LOOP.md` §1–2에 있다.

## 지금 (2026-11-13 낮) — 스프린트 1 진행 중. 머지 GO 3건 대기

**오너 GO 대기(머지):** PR #123(결정 기록·이슈 양식·문서) → PR #124(컴파일러·재측정·워커 스크립트, #123 위에 쌓임), PR #125(9차 7곳, 614 = 444 / 89 / 81, main에서 따로 갈라짐). 셋 다 CI 통과. #125의 새 아이템 페이지는 오너가 프리뷰에서 확인한다.

**11/13 오너 결정**

- **유효 기간으로 verified를 내리지 않는다**(`EXPIRE_SOURCES_BY_DATE = false`). #123과 #125에 같은 커밋이 있다. figma는 verified로 돌아왔다. 대신할 것은 모델 없는 재측정이다.
- **토큰 이름:** 내부 명명 규칙 + 실린 이름 이어받기. 시험 결과 이어받기는 59/59 일치, 규칙만으로는 색 44%·글자 67%·모서리 88%. 컴파일러 `--published`, 지시문 `COMPILED_PARTS.md`.
- **화면 아카이브(Mobbin처럼, 한국부터 주 10곳):** 공개는 보류하고 내부 시범 10곳을 프리뷰로 먼저 본다. **시작은 이번 스프린트 뒤.** 앱 화면은 오너 아이폰으로 찍는 방법을 찾는다(Phone Harness류, 필요하면 오픈소스로, mobster의 기능으로 둬도 된다). 조사와 순서: `docs/research/2026-11-13-screen-archive.md`.
- **(11/13 오후) 폰 하네스와 첫 시트:** 오너가 「에이전트가 알아서 조작하고 허용·로그인·비회원을 스스로 넘기는 형태(aside처럼)」를 원해 기록기를 하네스로 바꿨다. `tools/phone-recorder/`(브랜치 `feat/screen-archive`, 워크트리 `.claude/worktrees/screens`): 폰의 테스트 러너가 명령 서버를 띄우고 `phone.mjs`로 보기·탭·스와이프·입력·알림 처리·스크롤 영상·기록·재생을 한다. `make-sheet.py`가 걸은 기록과 큐레이션 파일로 Mobbin 같은 시트를 만든다. **무신사 시트: `~/Downloads/musinsa-screens/index.html`**(화면 26, 영상 2, 개인 정보 6곳 가림, 맥에만 있음). 시작: 폰 잠금을 푼 상태에서 `node tools/phone-recorder/phone.mjs start CDAA1DBF-B0CC-543E-9E4C-ED3EEB524C7A`. mobster로 옮길 수 있다는 정도만 염두에 둔다(오너). 남은 것: 자동 탐색 루프(누른 뒤 화면 확인 포함), 로그인 벽·금융 앱 시험(`type --secret`은 만들었고 아직 안 씀), 다른 앱 시트. 조사 문서의 「How the others take and keep screens」.
- **(11/13 저녁) 시트에 대한 오너 결정:** 느낌 괜찮음. 오픈소스화는 염두만(mobster도). 영상은 앱마다 메인 화면 하나만. 금융 앱은 금액·계좌번호가 남지 않게(`look --private`). **첫 두 앱은 무신사와 당근, 목표는 주 10개.** 필요하면 앱을 지우고 로그인부터 시작해도 된다(당근은 문자 인증이라 오너가 옆에 있을 때만). 같은 날 고친 것: 화면이 멈출 때까지 기다렸다 찍기, 비공개 수집, 누른 뒤 확인하는 탐색 루프(`explore`). 시뮬레이터에서만 확인했고 폰에서는 아직 안 돌렸다. **다음 폰 세션에서 할 일:** 무신사 덜 그려진 화면 다시 찍기 + 홈 스크롤 영상, 당근 첫 수집.

**새 방식(11/12 확정):** 새 레퍼런스 = 창 없는 캡처 → 스크립트 컴파일 → `gpt-6.1-sol` medium(`run-queue.sh`의 `new` 기본값). 착지 전 대조 = `scripts/t1/remeasure.mjs <id> --runs 1`. 선언만 된 색은 토큰이 아니다. 독립 검수 = Codex high 2개(`make-review-order.py`). 근거 `docs/research/2026-11-09-collection-method-test.md`.

**도는 것 없음(11/13 오후).** 재측정 117곳 끝: 116곳 열림(zozotown 막힘), 11,618개 값 중 11,416개(98.3%) 일치. 다른 값 대부분은 사이트가 아니라 브라우저 차이(창 있는 기준 대 창 없는 재측정: 화소 배율, 스크롤바 폭, 대체 글꼴)다. 사이트가 바뀐 것으로 보이는 곳은 demaecan(확실), sega·gitlab(가능성 높음). 결과 `~/.omd-workers/t1-sweep-1113/`.

**다음(싼 것부터)**

| 할 일 | 비용 | 어디 |
|---|---|---|
| demaecan·sega·gitlab 재검증(재측정에서 값이 바뀐 곳) | Codex 3회 | 재검증을 어느 방식으로 돌릴지는 아래 보류 건과 같이 정한다 |
| 옛 창 있는 캡처의 기준을 창 없는 재측정 값으로 갈아 두기(브라우저 차이를 변화로 읽지 않게) | 본 세션 | `scripts/t1/remeasure.mjs`의 baseline |
| partial 89곳 재검증: **보류.** jobplanet 시험은 verified가 되고 이름도 유지(색 9/10, 글자·모서리 전부)됐지만 컴포넌트 7 → 1, 근거 99 → 65로 줄었다. 글자 크기 빈틈은 메웠고(`text-census.mjs`), 상태 변화가 없는 컨트롤을 컴포넌트로 못 적는 것은 게이트 규칙이라 오너 판단이 필요하다. 착지 안 함 | — | `~/.omd-workers/reverify2/jobplanet`, 실험 문서의 「A re-verification run the new way」 |
| kana: 평가 설계, 스킬 문서, 원어민 검토(규칙 v2·실측 표·검사기는 됨) | 본 세션 | `feat/kana-skill`(`scripts/lang/kana-check.mjs`), 자료 `~/.omd-workers/kana/` |
| 조립기 spacing 문구(「No verified values…」, 157곳) | 본 세션 | `web/scripts/lib/design-md-v3.mjs:313`. 157개 파일이 다시 만들어져 보류 중 |
| 10차 묶음 | Codex medium + 검수 2회 | 후보 16곳 `~/.omd-workers/census-cjk/summary.json`, 큐 양식 `~/.omd-workers/queue-batch9.txt` |
| 스프린트 뒤: 화면 아카이브 시범 10곳, 폰 10분 시험(USB·개발자 모드) | 모델 없음 | 조사 문서의 「Proposed order」 |

**열린 것**

- 9차 중 koexpressway·samsungfire는 법적 고지에서 법인 인용을 못 얻었다(`.verification.md`에 적혀 있다).
- 안 해 본 것: 검수자 high와 max 비교, low·terra의 서술 정확도, 캡처만 low.
- 워크트리 `t1-trust`(#124) · `refs-batch9`(#125) · `kana`. `t1-trust`의 `packages/mcp/node_modules`와 `artifacts/reference-evidence/visual/<id>` 링크는 본 체크아웃을 가리킨다. 품질 판정용 스크래치 워크트리는 옛 세션 임시 폴더(`…/7924e40f-…/scratchpad/t1/wt`)에 있다.
- 11/12~13 사용: Codex 50회(실험 40 · 9차 7 · 검수 2 · 재검증 1), Claude 에이전트 4회.
- 3D 데모 서버 8791 켜져 있음. 운영: main `8b320ec7`, 607(437 / 89 / 81).

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
